/**
 * ============================================
 * VocabMaster - Google Apps Script API
 * ============================================
 * 
 * HƯỚNG DẪN CÀI ĐẶT:
 * 
 * 1. Vào https://script.google.com → Tạo dự án mới
 * 2. Copy toàn bộ code này vào file Code.gs
 * 3. Chạy hàm setup() 1 lần (▶ Run → setup) để tạo Sheet
 * 4. Bấm "Triển khai" → "Triển khai mới"
 *    - Chọn loại: "Ứng dụng web"
 *    - Thực thi với tư cách: "Tôi" (Me)
 *    - Ai có quyền truy cập: "Bất kỳ ai" (Anyone)
 * 5. Bấm "Triển khai" → Copy URL
 * 6. Dán URL vào phần "Cài đặt" trong VocabMaster
 *
 * TÍNH NĂNG:
 * - Tra từ: GET ?word=hello → dịch + IPA + từ loại
 * - Tra nhiều từ: POST { words: [...] }
 * - Cloud Sync: GET ?action=loadSync → tải dữ liệu từ Sheet
 * - Cloud Sync: POST { action:"saveSync", ... } → lưu dữ liệu vào Sheet
 * 
 * DỮ LIỆU LƯU TRÊN GOOGLE SHEETS:
 * - Sheet "Vocab": Danh sách từ vựng (en, vi, pos, ipa, img, group)
 * - Sheet "SRS": Tiến độ học (wordId, interval, nextReview, reviewCount, mastered)
 * - Sheet "Settings": Cài đặt (hotkeys, groups)
 */

// ==================== CẤU HÌNH ====================

/** Chạy 1 lần để tạo Spreadsheet + các Sheet */
function setup() {
  let ss;
  const props = PropertiesService.getScriptProperties();
  const existingId = props.getProperty('SHEET_ID');
  
  if (existingId) {
    try {
      ss = SpreadsheetApp.openById(existingId);
      Logger.log('Sheet đã tồn tại: ' + ss.getUrl());
    } catch (e) {
      ss = null;
    }
  }
  
  if (!ss) {
    ss = SpreadsheetApp.create('VocabMaster Data');
    props.setProperty('SHEET_ID', ss.getId());
    Logger.log('Đã tạo Sheet mới: ' + ss.getUrl());
  }
  
  // Tạo sheet Vocab
  let vocabSheet = ss.getSheetByName('Vocab');
  if (!vocabSheet) {
    vocabSheet = ss.getSheets()[0];
    vocabSheet.setName('Vocab');
    vocabSheet.getRange('A1:G1').setValues([['id', 'en', 'vi', 'pos', 'ipa', 'img', 'group']]);
    vocabSheet.getRange('A1:G1').setFontWeight('bold').setBackground('#4285f4').setFontColor('white');
    vocabSheet.setFrozenRows(1);
  }
  
  // Tạo sheet SRS
  let srsSheet = ss.getSheetByName('SRS');
  if (!srsSheet) {
    srsSheet = ss.insertSheet('SRS');
    srsSheet.getRange('A1:E1').setValues([['wordId', 'interval', 'nextReview', 'reviewCount', 'mastered']]);
    srsSheet.getRange('A1:E1').setFontWeight('bold').setBackground('#34a853').setFontColor('white');
    srsSheet.setFrozenRows(1);
  }
  
  // Tạo sheet Settings
  let settingsSheet = ss.getSheetByName('Settings');
  if (!settingsSheet) {
    settingsSheet = ss.insertSheet('Settings');
    settingsSheet.getRange('A1:B1').setValues([['key', 'value']]);
    settingsSheet.getRange('A1:B1').setFontWeight('bold').setBackground('#fbbc04').setFontColor('#333');
    settingsSheet.setFrozenRows(1);
  }
  
  Logger.log('✅ Setup hoàn tất! Sheet URL: ' + ss.getUrl());
  return ss.getUrl();
}

/** Lấy Spreadsheet */
function getSheet() {
  const id = PropertiesService.getScriptProperties().getProperty('SHEET_ID');
  if (!id) throw new Error('Chưa chạy setup()! Hãy chạy hàm setup() trước.');
  return SpreadsheetApp.openById(id);
}


// ==================== MAIN HANDLERS ====================

/** GET: Tra cứu từ hoặc tải cloud sync */
function doGet(e) {
  const action = e.parameter.action;

  if (action === 'loadSync') {
    return loadSync();
  }

  const word = (e.parameter.word || '').trim().toLowerCase();
  if (!word) {
    return jsonRes({ error: 'Missing ?word= parameter' });
  }
  return jsonRes(lookupWord(word));
}

/** POST: Tra nhiều từ hoặc lưu cloud sync */
function doPost(e) {
  try {
    // Support both form-submitted data and raw JSON body
    let body;
    if (e.parameter && e.parameter.payload) {
      // Form submission (from hidden iframe technique)
      body = JSON.parse(e.parameter.payload);
    } else if (e.postData && e.postData.contents) {
      // Raw JSON body (from fetch)
      body = JSON.parse(e.postData.contents);
    } else {
      return jsonRes({ error: 'No data received' });
    }

    if (body.action === 'saveSync') {
      return saveSync(body);
    }

    const words = body.words || [];
    if (!words.length) {
      return jsonRes({ error: 'No words provided' });
    }

    const results = words.map(w => {
      try { return lookupWord(w.trim().toLowerCase()); }
      catch (err) { return { en: w, vi: '', pos: 'n', ipa: '', error: err.message }; }
    });

    return jsonRes(results);
  } catch (err) {
    return jsonRes({ error: err.message });
  }
}


// ==================== CLOUD SYNC (Google Sheets) ====================

/** Load all data from Sheets */
function loadSync() {
  try {
    const ss = getSheet();
    const result = { success: true, timestamp: Date.now() };

    // Load custom words from Vocab sheet
    const vocabSheet = ss.getSheetByName('Vocab');
    if (vocabSheet && vocabSheet.getLastRow() > 1) {
      const data = vocabSheet.getRange(2, 1, vocabSheet.getLastRow() - 1, 7).getValues();
      result.customWords = data
        .filter(row => row[0] !== '') // skip empty rows
        .map(row => ({
          id: Number(row[0]),
          en: row[1],
          vi: row[2],
          pos: row[3] || 'n',
          ipa: row[4] || '',
          img: row[5] || '',
          group: row[6] || 'Chưa phân nhóm',
          custom: true
        }));
    } else {
      result.customWords = [];
    }

    // Load SRS states from SRS sheet
    const srsSheet = ss.getSheetByName('SRS');
    if (srsSheet && srsSheet.getLastRow() > 1) {
      const data = srsSheet.getRange(2, 1, srsSheet.getLastRow() - 1, 5).getValues();
      result.srsStates = {};
      data.forEach(row => {
        if (row[0] !== '') {
          result.srsStates[row[0]] = {
            interval: Number(row[1]) || 0,
            nextReview: Number(row[2]) || 0,
            reviewCount: Number(row[3]) || 0,
            mastered: row[4] === true || row[4] === 'TRUE'
          };
        }
      });
    } else {
      result.srsStates = {};
    }

    // Load settings (hotkeys, groups) from Settings sheet
    const settingsSheet = ss.getSheetByName('Settings');
    if (settingsSheet && settingsSheet.getLastRow() > 1) {
      const data = settingsSheet.getRange(2, 1, settingsSheet.getLastRow() - 1, 2).getValues();
      data.forEach(row => {
        try {
          if (row[0] === 'hotkeys') result.hotkeys = JSON.parse(row[1]);
          if (row[0] === 'groups') result.groups = JSON.parse(row[1]);
        } catch (e) {}
      });
    }
    if (!result.hotkeys) result.hotkeys = {};
    if (!result.groups) result.groups = [];

    return jsonRes(result);
  } catch (err) {
    return jsonRes({ success: false, error: err.message });
  }
}

/** Save data to Sheets */
function saveSync(body) {
  try {
    const ss = getSheet();
    const saved = [];

    // Save custom words → Vocab sheet
    if (body.customWords !== undefined) {
      const sheet = ss.getSheetByName('Vocab');
      // Clear existing data (keep header)
      if (sheet.getLastRow() > 1) {
        sheet.getRange(2, 1, sheet.getLastRow() - 1, 7).clearContent();
      }
      // Write new data
      const words = body.customWords || [];
      if (words.length > 0) {
        const rows = words.map(w => [
          w.id || 0,
          w.en || '',
          w.vi || '',
          w.pos || 'n',
          w.ipa || '',
          w.img || '',
          w.group || 'Chưa phân nhóm'
        ]);
        sheet.getRange(2, 1, rows.length, 7).setValues(rows);
      }
      saved.push('customWords');
    }

    // Save SRS states → SRS sheet
    if (body.srsStates !== undefined) {
      const sheet = ss.getSheetByName('SRS');
      if (sheet.getLastRow() > 1) {
        sheet.getRange(2, 1, sheet.getLastRow() - 1, 5).clearContent();
      }
      const states = body.srsStates || {};
      const entries = Object.entries(states);
      if (entries.length > 0) {
        const rows = entries.map(([id, s]) => [
          id,
          s.interval || 0,
          s.nextReview || 0,
          s.reviewCount || 0,
          s.mastered || false
        ]);
        sheet.getRange(2, 1, rows.length, 5).setValues(rows);
      }
      saved.push('srsStates');
    }

    // Save hotkeys → Settings sheet
    if (body.hotkeys !== undefined) {
      saveSetting(ss, 'hotkeys', JSON.stringify(body.hotkeys));
      saved.push('hotkeys');
    }

    // Save groups → Settings sheet
    if (body.groups !== undefined) {
      saveSetting(ss, 'groups', JSON.stringify(body.groups));
      saved.push('groups');
    }

    return jsonRes({ success: true, saved: saved, timestamp: Date.now() });
  } catch (err) {
    return jsonRes({ success: false, error: err.message });
  }
}

/** Helper: Save a key-value setting */
function saveSetting(ss, key, value) {
  const sheet = ss.getSheetByName('Settings');
  const data = sheet.getLastRow() > 1 
    ? sheet.getRange(2, 1, sheet.getLastRow() - 1, 2).getValues() 
    : [];
  
  let found = false;
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] === key) {
      sheet.getRange(i + 2, 2).setValue(value);
      found = true;
      break;
    }
  }
  if (!found) {
    sheet.appendRow([key, value]);
  }
}


// ==================== CORE LOOKUP ====================

function lookupWord(word) {
  let vi = '';
  try {
    vi = LanguageApp.translate(word, 'en', 'vi');
  } catch (err) {
    vi = '';
  }

  let ipa = '', pos = 'n';

  try {
    const resp = UrlFetchApp.fetch(
      'https://api.dictionaryapi.dev/api/v2/entries/en/' + encodeURIComponent(word),
      { muteHttpExceptions: true }
    );

    if (resp.getResponseCode() === 200) {
      const data = JSON.parse(resp.getContentText());

      if (data && data[0]) {
        ipa = data[0].phonetic || '';
        if (!ipa && data[0].phonetics) {
          const found = data[0].phonetics.find(p => p.text);
          if (found) ipa = found.text;
        }

        if (data[0].meanings && data[0].meanings[0]) {
          const posRaw = data[0].meanings[0].partOfSpeech;
          const posMap = {
            'noun': 'n',
            'verb': 'v',
            'adjective': 'adj',
            'adverb': 'adv',
            'preposition': 'prep',
            'conjunction': 'conj',
            'interjection': 'interj',
            'pronoun': 'pron',
            'determiner': 'det'
          };
          pos = posMap[posRaw] || posRaw || 'n';
        }
      }
    }
  } catch (err) {}

  return { en: word, vi: vi, pos: pos, ipa: ipa };
}


// ==================== HELPER ====================

function jsonRes(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
