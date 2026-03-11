// ============================================================
// 📚 VocabMaster - Spaced Repetition Vocabulary Learning App
// ============================================================

// ==================== VOCABULARY DATA ====================
const DEFAULT_VOCAB = [
    // === Business & Office ===
    { id: 1, en: "negotiate", vi: "đàm phán", pos: "v", ipa: "/nɪˈɡoʊʃieɪt/" },
    { id: 2, en: "implement", vi: "thực hiện, triển khai", pos: "v", ipa: "/ˈɪmplɪment/" },
    { id: 3, en: "revenue", vi: "doanh thu", pos: "n", ipa: "/ˈrevənjuː/" },
    { id: 4, en: "deadline", vi: "hạn chót", pos: "n", ipa: "/ˈdedlaɪn/" },
    { id: 5, en: "proposal", vi: "đề xuất", pos: "n", ipa: "/prəˈpoʊzəl/" },
    { id: 6, en: "budget", vi: "ngân sách", pos: "n", ipa: "/ˈbʌdʒɪt/" },
    { id: 7, en: "collaborate", vi: "hợp tác, cộng tác", pos: "v", ipa: "/kəˈlæbəreɪt/" },
    { id: 8, en: "feedback", vi: "phản hồi", pos: "n", ipa: "/ˈfiːdbæk/" },
    { id: 9, en: "strategy", vi: "chiến lược", pos: "n", ipa: "/ˈstrætədʒi/" },
    { id: 10, en: "investment", vi: "đầu tư", pos: "n", ipa: "/ɪnˈvestmənt/" },
    { id: 11, en: "conference", vi: "hội nghị", pos: "n", ipa: "/ˈkɑːnfərəns/" },
    { id: 12, en: "schedule", vi: "lịch trình", pos: "n", ipa: "/ˈskedʒuːl/" },
    { id: 13, en: "performance", vi: "hiệu suất, thành tích", pos: "n", ipa: "/pərˈfɔːrməns/" },
    { id: 14, en: "candidate", vi: "ứng viên", pos: "n", ipa: "/ˈkændɪdət/" },
    { id: 15, en: "resign", vi: "từ chức", pos: "v", ipa: "/rɪˈzaɪn/" },
    { id: 16, en: "promotion", vi: "thăng chức", pos: "n", ipa: "/prəˈmoʊʃən/" },
    { id: 17, en: "department", vi: "phòng ban", pos: "n", ipa: "/dɪˈpɑːrtmənt/" },
    { id: 18, en: "contract", vi: "hợp đồng", pos: "n", ipa: "/ˈkɑːntrækt/" },
    { id: 19, en: "colleague", vi: "đồng nghiệp", pos: "n", ipa: "/ˈkɑːliːɡ/" },
    { id: 20, en: "supervisor", vi: "người giám sát", pos: "n", ipa: "/ˈsuːpərvaɪzər/" },

    // === Travel & Tourism ===
    { id: 21, en: "destination", vi: "điểm đến", pos: "n", ipa: "/ˌdestɪˈneɪʃən/" },
    { id: 22, en: "accommodation", vi: "chỗ ở", pos: "n", ipa: "/əˌkɑːməˈdeɪʃən/" },
    { id: 23, en: "itinerary", vi: "lộ trình, hành trình", pos: "n", ipa: "/aɪˈtɪnəreri/" },
    { id: 24, en: "departure", vi: "khởi hành", pos: "n", ipa: "/dɪˈpɑːrtʃər/" },
    { id: 25, en: "arrival", vi: "sự đến nơi", pos: "n", ipa: "/əˈraɪvəl/" },
    { id: 26, en: "reservation", vi: "đặt chỗ, đặt phòng", pos: "n", ipa: "/ˌrezərˈveɪʃən/" },
    { id: 27, en: "passport", vi: "hộ chiếu", pos: "n", ipa: "/ˈpæspɔːrt/" },
    { id: 28, en: "currency", vi: "tiền tệ", pos: "n", ipa: "/ˈkɜːrənsi/" },
    { id: 29, en: "souvenir", vi: "quà lưu niệm", pos: "n", ipa: "/ˌsuːvəˈnɪr/" },
    { id: 30, en: "luggage", vi: "hành lý", pos: "n", ipa: "/ˈlʌɡɪdʒ/" },
    { id: 31, en: "customs", vi: "hải quan", pos: "n", ipa: "/ˈkʌstəmz/" },
    { id: 32, en: "terminal", vi: "nhà ga", pos: "n", ipa: "/ˈtɜːrmɪnəl/" },
    { id: 33, en: "round trip", vi: "khứ hồi", pos: "n", ipa: "/raʊnd trɪp/" },
    { id: 34, en: "boarding pass", vi: "thẻ lên máy bay", pos: "n", ipa: "/ˈbɔːrdɪŋ pæs/" },
    { id: 35, en: "excursion", vi: "chuyến tham quan", pos: "n", ipa: "/ɪkˈskɜːrʒən/" },

    // === Education ===
    { id: 36, en: "assignment", vi: "bài tập", pos: "n", ipa: "/əˈsaɪnmənt/" },
    { id: 37, en: "scholarship", vi: "học bổng", pos: "n", ipa: "/ˈskɑːlərʃɪp/" },
    { id: 38, en: "certificate", vi: "chứng chỉ", pos: "n", ipa: "/sərˈtɪfɪkət/" },
    { id: 39, en: "lecture", vi: "bài giảng", pos: "n", ipa: "/ˈlektʃər/" },
    { id: 40, en: "research", vi: "nghiên cứu", pos: "n", ipa: "/rɪˈsɜːrtʃ/" },
    { id: 41, en: "experiment", vi: "thí nghiệm", pos: "n", ipa: "/ɪkˈsperɪmənt/" },
    { id: 42, en: "reference", vi: "tài liệu tham khảo", pos: "n", ipa: "/ˈrefərəns/" },
    { id: 43, en: "comprehension", vi: "sự hiểu biết", pos: "n", ipa: "/ˌkɑːmprɪˈhenʃən/" },
    { id: 44, en: "attendance", vi: "sự tham dự", pos: "n", ipa: "/əˈtendəns/" },
    { id: 45, en: "curriculum", vi: "chương trình học", pos: "n", ipa: "/kəˈrɪkjələm/" },

    // === Shopping & Daily ===
    { id: 46, en: "grocery", vi: "tạp hóa, cửa hàng thực phẩm", pos: "n", ipa: "/ˈɡroʊsəri/" },
    { id: 47, en: "receipt", vi: "biên lai, hóa đơn", pos: "n", ipa: "/rɪˈsiːt/" },
    { id: 48, en: "warranty", vi: "bảo hành", pos: "n", ipa: "/ˈwɔːrənti/" },
    { id: 49, en: "refund", vi: "hoàn tiền", pos: "n", ipa: "/ˈriːfʌnd/" },
    { id: 50, en: "delivery", vi: "giao hàng", pos: "n", ipa: "/dɪˈlɪvəri/" },
    { id: 51, en: "discount", vi: "giảm giá", pos: "n", ipa: "/ˈdɪskaʊnt/" },
    { id: 52, en: "purchase", vi: "mua sắm", pos: "v", ipa: "/ˈpɜːrtʃəs/" },
    { id: 53, en: "exchange", vi: "trao đổi, đổi trả", pos: "v", ipa: "/ɪksˈtʃeɪndʒ/" },
    { id: 54, en: "inventory", vi: "hàng tồn kho", pos: "n", ipa: "/ˈɪnvəntɔːri/" },
    { id: 55, en: "wholesale", vi: "bán buôn, bán sỉ", pos: "n", ipa: "/ˈhoʊlseɪl/" },

    // === Technology ===
    { id: 56, en: "software", vi: "phần mềm", pos: "n", ipa: "/ˈsɔːftwer/" },
    { id: 57, en: "database", vi: "cơ sở dữ liệu", pos: "n", ipa: "/ˈdeɪtəbeɪs/" },
    { id: 58, en: "network", vi: "mạng lưới", pos: "n", ipa: "/ˈnetwɜːrk/" },
    { id: 59, en: "update", vi: "cập nhật", pos: "v", ipa: "/ʌpˈdeɪt/" },
    { id: 60, en: "download", vi: "tải xuống", pos: "v", ipa: "/ˈdaʊnloʊd/" },
    { id: 61, en: "install", vi: "cài đặt", pos: "v", ipa: "/ɪnˈstɔːl/" },
    { id: 62, en: "browser", vi: "trình duyệt", pos: "n", ipa: "/ˈbraʊzər/" },
    { id: 63, en: "device", vi: "thiết bị", pos: "n", ipa: "/dɪˈvaɪs/" },
    { id: 64, en: "feature", vi: "tính năng", pos: "n", ipa: "/ˈfiːtʃər/" },
    { id: 65, en: "security", vi: "bảo mật, an ninh", pos: "n", ipa: "/sɪˈkjʊrəti/" },

    // === General / TOEIC ===
    { id: 66, en: "accomplish", vi: "hoàn thành", pos: "v", ipa: "/əˈkɑːmplɪʃ/" },
    { id: 67, en: "announce", vi: "thông báo", pos: "v", ipa: "/əˈnaʊns/" },
    { id: 68, en: "approximately", vi: "xấp xỉ, khoảng", pos: "adv", ipa: "/əˈprɑːksɪmətli/" },
    { id: 69, en: "available", vi: "có sẵn, sẵn có", pos: "adj", ipa: "/əˈveɪləbəl/" },
    { id: 70, en: "complaint", vi: "khiếu nại, lời phàn nàn", pos: "n", ipa: "/kəmˈpleɪnt/" },
    { id: 71, en: "confirm", vi: "xác nhận", pos: "v", ipa: "/kənˈfɜːrm/" },
    { id: 72, en: "consider", vi: "cân nhắc, xem xét", pos: "v", ipa: "/kənˈsɪdər/" },
    { id: 73, en: "despite", vi: "mặc dù, bất chấp", pos: "prep", ipa: "/dɪˈspaɪt/" },
    { id: 74, en: "enhance", vi: "nâng cao, tăng cường", pos: "v", ipa: "/ɪnˈhæns/" },
    { id: 75, en: "essential", vi: "thiết yếu, cần thiết", pos: "adj", ipa: "/ɪˈsenʃəl/" },
    { id: 76, en: "frequent", vi: "thường xuyên", pos: "adj", ipa: "/ˈfriːkwənt/" },
    { id: 77, en: "indicate", vi: "chỉ ra, cho biết", pos: "v", ipa: "/ˈɪndɪkeɪt/" },
    { id: 78, en: "maintain", vi: "duy trì, bảo trì", pos: "v", ipa: "/meɪnˈteɪn/" },
    { id: 79, en: "participate", vi: "tham gia", pos: "v", ipa: "/pɑːrˈtɪsɪpeɪt/" },
    { id: 80, en: "substantial", vi: "đáng kể, lớn", pos: "adj", ipa: "/səbˈstænʃəl/" },
];

// Assign default groups
DEFAULT_VOCAB.forEach(w => {
    if (w.id <= 20) w.group = 'Business';
    else if (w.id <= 35) w.group = 'Travel';
    else if (w.id <= 45) w.group = 'Education';
    else if (w.id <= 55) w.group = 'Shopping';
    else if (w.id <= 65) w.group = 'Technology';
    else w.group = 'TOEIC';
});

let VOCAB_DATA = [...DEFAULT_VOCAB];


// ==================== GROUP MANAGER ====================
const GroupManager = {
    STORAGE_KEY: 'vocabmaster_groups',

    DEFAULTS: [
        { name: 'Business', emoji: '💼' },
        { name: 'Travel', emoji: '✈️' },
        { name: 'Education', emoji: '📖' },
        { name: 'Shopping', emoji: '🛒' },
        { name: 'Technology', emoji: '💻' },
        { name: 'TOEIC', emoji: '📝' },
    ],

    load() {
        try {
            const raw = localStorage.getItem(this.STORAGE_KEY);
            return raw ? JSON.parse(raw) : [...this.DEFAULTS];
        } catch { return [...this.DEFAULTS]; }
    },

    save(groups) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(groups));
        CloudSync.save('groups', groups);
    },

    add(name, emoji = '📚') {
        const groups = this.load();
        if (groups.find(g => g.name === name)) return false;
        groups.push({ name, emoji });
        this.save(groups);
        return true;
    },

    remove(name) {
        let groups = this.load();
        groups = groups.filter(g => g.name !== name);
        this.save(groups);
    },

    /** Get word count per group */
    getCounts() {
        const counts = {};
        VOCAB_DATA.forEach(w => {
            const g = w.group || 'Chưa phân nhóm';
            counts[g] = (counts[g] || 0) + 1;
        });
        return counts;
    },

    /** Get all group names (from definitions + any found in data) */
    getAll() {
        const groups = this.load();
        const groupNames = new Set(groups.map(g => g.name));
        // Also include groups from words not in definitions
        VOCAB_DATA.forEach(w => {
            if (w.group && !groupNames.has(w.group)) {
                groups.push({ name: w.group, emoji: '📚' });
                groupNames.add(w.group);
            }
        });
        return groups;
    }
};

// ==================== VOCAB MANAGER ====================
const VocabManager = {
    STORAGE_KEY: 'vocabmaster_custom_words',

    /** Load custom words from localStorage and merge with defaults */
    init() {
        const custom = this.loadCustom();
        VOCAB_DATA = [...DEFAULT_VOCAB, ...custom];
    },

    loadCustom() {
        try {
            const raw = localStorage.getItem(this.STORAGE_KEY);
            return raw ? JSON.parse(raw) : [];
        } catch { return []; }
    },

    saveCustom(words) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(words));
        CloudSync.save('customWords', words);
    },

    /** Get next available ID (starts at 10000 for custom words) */
    nextId() {
        const custom = this.loadCustom();
        if (custom.length === 0) return 10000;
        return Math.max(...custom.map(w => w.id)) + 1;
    },

    /** Add a single word */
    addWord(en, vi, pos, ipa, group, img) {
        const custom = this.loadCustom();
        const word = {
            id: this.nextId(),
            en: en.trim(),
            vi: vi.trim(),
            pos: pos || 'n',
            ipa: ipa ? ipa.trim() : '',
            img: img || '',
            group: group || 'Chưa phân nhóm',
            custom: true
        };
        custom.push(word);
        this.saveCustom(custom);
        VOCAB_DATA.push(word);
        return word;
    },

    /** Add multiple words at once */
    addWords(words, group) {
        const custom = this.loadCustom();
        let nextId = this.nextId();
        const newWords = words.map(w => ({
            id: nextId++,
            en: w.en.trim(),
            vi: w.vi.trim(),
            pos: w.pos || 'n',
            ipa: w.ipa ? w.ipa.trim() : '',
            group: group || w.group || 'Chưa phân nhóm',
            custom: true
        }));
        custom.push(...newWords);
        this.saveCustom(custom);
        VOCAB_DATA.push(...newWords);
        return newWords.length;
    },

    /** Delete a custom word by ID */
    deleteWord(id) {
        let custom = this.loadCustom();
        custom = custom.filter(w => w.id !== id);
        this.saveCustom(custom);
        const idx = VOCAB_DATA.findIndex(w => w.id === id);
        if (idx !== -1) VOCAB_DATA.splice(idx, 1);
    },

    /** Check if a word is custom (not in default list) */
    isCustom(wordId) {
        return wordId >= 10000;
    },

    /** Parse CSV text into word objects */
    parseCSV(text) {
        const lines = text.trim().split('\n').filter(l => l.trim());
        const words = [];
        for (const line of lines) {
            // Skip header line
            if (line.toLowerCase().startsWith('english') || line.toLowerCase().startsWith('en,')) continue;
            const parts = line.split(',').map(p => p.trim());
            if (parts.length >= 2 && parts[0] && parts[1]) {
                words.push({
                    en: parts[0],
                    vi: parts[1],
                    pos: parts[2] || 'n',
                    ipa: parts[3] || ''
                });
            }
        }
        return words;
    },

    /** Parse JSON text into word objects */
    parseJSON(text) {
        try {
            const data = JSON.parse(text);
            const arr = Array.isArray(data) ? data : (data.words || data.data || []);
            return arr.filter(w => w.en && w.vi).map(w => ({
                en: w.en || w.english || w.word || '',
                vi: w.vi || w.vietnamese || w.meaning || '',
                pos: w.pos || w.partOfSpeech || w.type || 'n',
                ipa: w.ipa || w.phonetic || ''
            }));
        } catch { return []; }
    },

    /** Reset all custom words */
    resetCustom() {
        localStorage.removeItem(this.STORAGE_KEY);
        VOCAB_DATA = [...DEFAULT_VOCAB];
    }
};


// ==================== API (GAS Auto-Lookup) ====================
const API = {
    URL_KEY: 'vocabmaster_gas_url',

    getUrl() {
        return localStorage.getItem(this.URL_KEY) || '';
    },

    setUrl(url) {
        localStorage.setItem(this.URL_KEY, url.trim());
    },

    isConfigured() {
        return !!this.getUrl();
    },

    /** Lookup a single word via GAS GET */
    async lookupWord(word) {
        const url = this.getUrl();
        if (!url) throw new Error('GAS URL chưa được cài đặt');

        const resp = await fetch(`${url}?word=${encodeURIComponent(word.trim())}`);
        if (!resp.ok) throw new Error('API lỗi: ' + resp.status);
        return await resp.json();
    },

    /** Lookup multiple words via GAS POST */
    async lookupBulk(words) {
        const url = this.getUrl();
        if (!url) throw new Error('GAS URL chưa được cài đặt');

        const resp = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ words }),
        });
        if (!resp.ok) throw new Error('API lỗi: ' + resp.status);
        return await resp.json();
    },
};


// ==================== IMAGE SEARCH (Pixabay) ====================
const ImageSearch = {
    KEY_STORAGE: 'vocabmaster_pixabay_key',
    _cache: {},

    getKey() { return localStorage.getItem(this.KEY_STORAGE) || ''; },
    setKey(key) { localStorage.setItem(this.KEY_STORAGE, key.trim()); },
    isConfigured() { return !!this.getKey(); },

    /** Search for an image URL for a word */
    async search(word) {
        if (!this.isConfigured()) return '';
        if (this._cache[word]) return this._cache[word];

        try {
            const key = this.getKey();
            const resp = await fetch(
                `https://pixabay.com/api/?key=${key}&q=${encodeURIComponent(word)}&image_type=photo&per_page=3&safesearch=true&lang=en`
            );
            if (!resp.ok) return '';
            const data = await resp.json();
            if (data.hits && data.hits.length > 0) {
                const url = data.hits[0].webformatURL;
                this._cache[word] = url;
                return url;
            }
        } catch (e) { console.warn('Image search failed:', e); }
        return '';
    }
};

// ==================== CLOUD SYNC ====================
const CloudSync = {
    _timers: {},
    syncing: false,

    /** Load all data from cloud → apply to local */
    async loadAll() {
        if (!API.isConfigured()) return false;
        try {
            this.syncing = true;
            const url = API.getUrl();
            const resp = await fetch(`${url}?action=loadSync`);
            if (!resp.ok) throw new Error('HTTP ' + resp.status);
            const data = await resp.json();
            if (!data.success) throw new Error('Server trả về lỗi');

            let applied = 0;

            // Hotkeys
            if (data.hotkeys && Object.keys(data.hotkeys).length > 0) {
                localStorage.setItem(Hotkeys.STORAGE_KEY, JSON.stringify(data.hotkeys));
                applied++;
            }

            // Groups
            if (data.groups && data.groups.length > 0) {
                localStorage.setItem(GroupManager.STORAGE_KEY, JSON.stringify(data.groups));
                applied++;
            }

            // Custom words
            if (data.customWords && data.customWords.length > 0) {
                localStorage.setItem(VocabManager.STORAGE_KEY, JSON.stringify(data.customWords));
                applied++;
            }

            // SRS states
            if (data.srsStates && Object.keys(data.srsStates).length > 0) {
                localStorage.setItem(SRS.STORAGE_KEY, JSON.stringify(data.srsStates));
                applied++;
            }

            this.syncing = false;
            return applied > 0;
        } catch (e) {
            console.warn('CloudSync load failed:', e);
            this.syncing = false;
            return false;
        }
    },

    /** Save specific data to cloud (debounced 2s) */
    save(key, data) {
        if (!API.isConfigured() || this.syncing) return;

        // Debounce: wait 2s before syncing to avoid spam
        if (this._timers[key]) clearTimeout(this._timers[key]);
        this._timers[key] = setTimeout(() => {
            this._push(key, data);
        }, 2000);
    },

    /** Push data to cloud */
    async _push(key, data) {
        try {
            const url = API.getUrl();
            const resp = await fetch(url, {
                method: 'POST',
                redirect: 'follow',
                headers: { 'Content-Type': 'text/plain' },
                body: JSON.stringify({ action: 'saveSync', [key]: data }),
            });
            // GAS may redirect, check if we got a valid response
            const text = await resp.text();
            try {
                const result = JSON.parse(text);
                if (result.success) {
                    console.log('☁️ Synced:', key);
                } else {
                    console.warn('CloudSync response:', result);
                }
            } catch {
                // Response might not be JSON after redirect, that's OK
                console.log('☁️ Sync sent:', key);
            }
        } catch (e) {
            console.warn('CloudSync push failed:', key, e);
            toast('☁️ Đồng bộ thất bại: ' + key, 'error');
        }
    },

    /** Save ALL data to cloud immediately */
    async saveAll() {
        if (!API.isConfigured()) return;
        try {
            const url = API.getUrl();
            const payload = {
                action: 'saveSync',
                hotkeys: JSON.parse(localStorage.getItem(Hotkeys.STORAGE_KEY) || '{}'),
                groups: GroupManager.load(),
                customWords: VocabManager.loadCustom(),
                srsStates: JSON.parse(localStorage.getItem(SRS.STORAGE_KEY) || '{}'),
            };
            const resp = await fetch(url, {
                method: 'POST',
                redirect: 'follow',
                headers: { 'Content-Type': 'text/plain' },
                body: JSON.stringify(payload),
            });
            const text = await resp.text();
            try {
                const result = JSON.parse(text);
                return result.success;
            } catch {
                return true; // assume OK if sent successfully
            }
        } catch (e) {
            console.warn('CloudSync saveAll failed:', e);
            toast('☁️ Đồng bộ thất bại!', 'error');
            return false;
        }
    }
};


// ==================== SRS ENGINE ====================
const SRS = {
    STORAGE_KEY: 'vocabmaster_states',

    // Default intervals for FIRST encounter (in hours)
    FIRST: { hard: 6, good: 24, easy: 72 },
    // Multipliers for subsequent reviews
    MULT: { hard: 2, good: 3, easy: 4 },
    // "Học lại" reappears after N other words
    RELEARN_GAP: 5,

    /** Load all word states from localStorage */
    loadStates() {
        try {
            const raw = localStorage.getItem(this.STORAGE_KEY);
            return raw ? JSON.parse(raw) : {};
        } catch { return {}; }
    },

    /** Save all word states to localStorage */
    saveStates(states) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(states));
        CloudSync.save('srsStates', states);
    },

    /** Get or create state for a word */
    getState(states, wordId) {
        if (!states[wordId]) {
            states[wordId] = {
                interval: 0,       // hours (0 = never reviewed with time-based button)
                nextReview: 0,     // timestamp
                reviewCount: 0,
                mastered: false,
            };
        }
        return states[wordId];
    },

    /**
     * Process an answer and return updated state
     * @param {object} states - all word states
     * @param {number} wordId
     * @param {'again'|'hard'|'good'|'easy'|'mastered'} button
     * @returns {object} updated state
     */
    processAnswer(states, wordId, button) {
        const st = this.getState(states, wordId);
        const now = Date.now();

        if (button === 'mastered') {
            st.mastered = true;
            st.nextReview = Infinity;
        } else if (button === 'again') {
            // Don't change interval, handled by session (relearn queue)
            st.reviewCount++;
        } else {
            // hard / good / easy
            if (st.interval === 0) {
                // First time choosing a time-based button
                st.interval = this.FIRST[button];
            } else {
                st.interval = st.interval * this.MULT[button];
            }
            st.nextReview = now + st.interval * 3600 * 1000;
            st.reviewCount++;
        }

        this.saveStates(states);
        return st;
    },

    /** Get SRS button labels with times for a word */
    getButtonLabels(states, wordId) {
        const st = this.getState(states, wordId);
        const interval = st.interval;

        if (interval === 0) {
            // First encounter
            return {
                again: { label: 'Học lại', time: `${this.RELEARN_GAP} từ` },
                hard: { label: 'Khó', time: this.formatHours(this.FIRST.hard) },
                good: { label: 'Tốt', time: this.formatHours(this.FIRST.good) },
                easy: { label: 'Dễ', time: this.formatHours(this.FIRST.easy) },
            };
        } else {
            return {
                again: { label: 'Học lại', time: `${this.RELEARN_GAP} từ` },
                hard: { label: 'Khó', time: this.formatHours(interval * this.MULT.hard) },
                good: { label: 'Tốt', time: this.formatHours(interval * this.MULT.good) },
                easy: { label: 'Dễ', time: this.formatHours(interval * this.MULT.easy) },
            };
        }
    },

    /** Format hours to human-readable Vietnamese string */
    formatHours(h) {
        if (h < 1) return `${Math.round(h * 60)} phút`;
        if (h < 24) return `${Math.round(h)} giờ`;
        const days = h / 24;
        if (days < 7) return `${Math.round(days)} ngày`;
        if (days < 30) return `${Math.round(days / 7)} tuần`;
        return `${Math.round(days / 30)} tháng`;
    },

    /** Get words that are due for review (nextReview <= now, not mastered) */
    getDueWords(states) {
        const now = Date.now();
        return VOCAB_DATA.filter(w => {
            const st = states[w.id];
            return st && !st.mastered && st.interval > 0 && st.nextReview <= now;
        });
    },

    /** Get words that have never been studied */
    getNewWords(states) {
        return VOCAB_DATA.filter(w => !states[w.id]);
    },

    /** Get words currently being learned (have state but not mastered, not due) */
    getLearningWords(states) {
        const now = Date.now();
        return VOCAB_DATA.filter(w => {
            const st = states[w.id];
            return st && !st.mastered && st.interval > 0 && st.nextReview > now;
        });
    },

    /** Get mastered words */
    getMasteredWords(states) {
        return VOCAB_DATA.filter(w => {
            const st = states[w.id];
            return st && st.mastered;
        });
    },

    /** Compute all stats */
    getStats(states) {
        const newW = this.getNewWords(states);
        const due = this.getDueWords(states);
        const learning = this.getLearningWords(states);
        const mastered = this.getMasteredWords(states);
        return {
            total: VOCAB_DATA.length,
            new: newW.length,
            due: due.length,
            learning: learning.length,
            mastered: mastered.length,
        };
    },

    /** Reset all progress */
    reset() {
        localStorage.removeItem(this.STORAGE_KEY);
    }
};


// ==================== SESSION MANAGER ====================
const Session = {
    queue: [],
    currentIndex: 0,
    answered: 0,
    sessionTotal: 0,
    active: false,

    /** Start a new study session */
    start(words) {
        // Shuffle words
        this.queue = [...words].sort(() => Math.random() - 0.5);
        this.currentIndex = 0;
        this.answered = 0;
        this.sessionTotal = words.length;
        this.active = true;
    },

    /** Get current word, or null if session is done */
    current() {
        if (this.currentIndex >= this.queue.length) return null;
        return this.queue[this.currentIndex];
    },

    /** Move to next word */
    next() {
        this.currentIndex++;
        this.answered++;
    },

    /** Insert word back into queue (for "Học lại") */
    relearn() {
        const word = this.queue[this.currentIndex];
        const insertPos = Math.min(this.currentIndex + 1 + SRS.RELEARN_GAP, this.queue.length);
        this.queue.splice(insertPos, 0, word);
        this.currentIndex++;
        // Don't increment answered since we'll see this word again
    },

    /** Check if session is complete */
    isComplete() {
        return this.currentIndex >= this.queue.length;
    },

    /** End session */
    end() {
        this.active = false;
        this.queue = [];
        this.currentIndex = 0;
    }
};


// ==================== TEXT-TO-SPEECH ====================
function speak(text) {
    if ('speechSynthesis' in window) {
        speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'en-US';
        u.rate = 0.85;
        speechSynthesis.speak(u);
    }
}


// ==================== UI HELPERS ====================
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function toast(message, type = 'info') {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const el = document.createElement('div');
    el.className = `toast ${type}`;
    el.textContent = message;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 2500);
}


// ==================== HOTKEYS CONFIG ====================
const Hotkeys = {
    STORAGE_KEY: 'vocabmaster_hotkeys',

    DEFAULTS: {
        help: { key: '?', label: 'Trợ giúp phím tắt', group: 'chung' },
        toggleSidebar: { key: 's', label: 'Mở/ẩn sidebar', group: 'chung' },
        modeFlashcard: { key: 'f', label: 'Chế độ Flashcard', group: 'chung' },
        modeTyping: { key: 't', label: 'Chế độ Gõ từ', group: 'chung' },
        modeQuiz: { key: 'q', label: 'Chế độ Trắc nghiệm', group: 'chung' },
        addWord: { key: 'ctrl+n', label: 'Thêm từ mới', group: 'quản lý' },
        importWords: { key: 'ctrl+i', label: 'Nhập từ vựng', group: 'quản lý' },
        wordList: { key: 'ctrl+l', label: 'Danh sách từ', group: 'quản lý' },
        startDue: { key: 'd', label: 'Ôn tập từ đến hạn', group: 'bắt đầu' },
        startNew: { key: 'n', label: 'Học từ mới', group: 'bắt đầu' },
        startAll: { key: 'a', label: 'Học tất cả', group: 'bắt đầu' },
        reveal: { key: ' ', label: 'Lật thẻ', group: 'học' },
        hint: { key: 'h', label: 'Gợi ý', group: 'học' },
        speak: { key: 'p', label: 'Phát âm', group: 'học' },
        endSession: { key: 'Escape', label: 'Kết thúc phiên', group: 'học' },
        srsAgain: { key: '1', label: 'Học lại', group: 'SRS' },
        srsHard: { key: '2', label: 'Khó', group: 'SRS' },
        srsGood: { key: '3', label: 'Tốt', group: 'SRS' },
        srsEasy: { key: '4', label: 'Dễ', group: 'SRS' },
        srsMastered: { key: '5', label: 'Đã thuộc', group: 'SRS' },
    },

    /** Load user customizations merged with defaults */
    get() {
        try {
            const raw = localStorage.getItem(this.STORAGE_KEY);
            if (!raw) return this._cloneDefaults();
            const custom = JSON.parse(raw);
            const merged = this._cloneDefaults();
            for (const id in custom) {
                if (merged[id]) merged[id].key = custom[id];
            }
            return merged;
        } catch { return this._cloneDefaults(); }
    },

    /** Save only the key overrides (not labels/groups) */
    save(config) {
        const overrides = {};
        const defaults = this.DEFAULTS;
        for (const id in config) {
            if (config[id].key !== defaults[id]?.key) {
                overrides[id] = config[id].key;
            }
        }
        if (Object.keys(overrides).length === 0) {
            localStorage.removeItem(this.STORAGE_KEY);
        } else {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(overrides));
        }
        CloudSync.save('hotkeys', overrides);
    },

    /** Reset to defaults */
    reset() {
        localStorage.removeItem(this.STORAGE_KEY);
    },

    /** Get display name for a key */
    display(key) {
        const map = {
            ' ': 'Space', 'Escape': 'Esc', 'Enter': 'Enter',
            'ArrowUp': '↑', 'ArrowDown': '↓', 'ArrowLeft': '←', 'ArrowRight': '→',
            'Backspace': '⌫', 'Delete': 'Del', 'Tab': 'Tab',
        };
        if (map[key]) return map[key];
        if (key.startsWith('ctrl+')) return 'Ctrl+' + key.slice(5).toUpperCase();
        return key.length === 1 ? key.toUpperCase() : key;
    },

    /** Check if an event matches a hotkey */
    match(e, hotkeyValue) {
        const hk = hotkeyValue.toLowerCase();
        if (hk.startsWith('ctrl+')) {
            return e.ctrlKey && e.key.toLowerCase() === hk.slice(5);
        }
        if (hk === ' ') return e.key === ' ';
        if (hk === 'escape') return e.key === 'Escape';
        if (hk === 'enter') return e.key === 'Enter';
        return e.key.toLowerCase() === hk;
    },

    /** Convert a KeyboardEvent to a hotkey string */
    eventToKey(e) {
        if (e.key === 'Control' || e.key === 'Shift' || e.key === 'Alt' || e.key === 'Meta') return null;
        let key = e.key;
        if (e.ctrlKey && key !== 'Control') {
            key = 'ctrl+' + key.toLowerCase();
        }
        return key;
    },

    _cloneDefaults() {
        const c = {};
        for (const id in this.DEFAULTS) {
            c[id] = { ...this.DEFAULTS[id] };
        }
        return c;
    }
};


// ==================== MAIN APP ====================
const App = {
    states: {},
    mode: 'flashcard',
    showingAnswer: false,
    selectedGroup: null, // null = all groups

    /** Get vocab filtered by selected group */
    getFilteredVocab() {
        if (!this.selectedGroup) return VOCAB_DATA;
        return VOCAB_DATA.filter(w => w.group === this.selectedGroup);
    },

    init() {
        VocabManager.init();
        this.states = SRS.loadStates();
        this.bindEvents();
        this.updateSidebar();
        this.updateTotalCount();
        this.renderGroups();
        this.showWelcome();
        this.updateShortcutBar();

        // Cloud sync on startup
        if (API.isConfigured()) {
            toast('☁️ Đang đồng bộ...', 'info');
            CloudSync.loadAll().then(applied => {
                if (applied) {
                    // Re-init with cloud data
                    VocabManager.init();
                    this.states = SRS.loadStates();
                    this.updateSidebar();
                    this.updateTotalCount();
                    this.renderGroups();
                    this.updateShortcutBar();
                    if (!Session.active) this.showWelcome();
                    toast('☁️ Đã đồng bộ từ cloud!', 'success');
                } else {
                    toast('☁️ Dữ liệu đã cập nhật', 'info');
                }
            });
        }
    },

    // ---------- Event Binding ----------
    bindEvents() {
        // Sidebar toggle
        $('#sidebarToggle').addEventListener('click', () => {
            const sb = $('#sidebar');
            sb.classList.toggle('open');
            $('#sidebarToggleText').textContent = sb.classList.contains('open') ? 'Ẩn sidebar' : 'Sidebar';
        });

        // Mode tabs
        $$('.mode-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                this.mode = tab.dataset.mode;
                $$('.mode-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                if (Session.active && Session.current()) {
                    this.showingAnswer = false;
                    this.renderCurrentWord();
                }
            });
        });

        // Sidebar action buttons
        $('#btnStartDue').addEventListener('click', () => {
            const vocab = this.getFilteredVocab();
            const now = Date.now();
            const due = vocab.filter(w => {
                const st = this.states[w.id];
                return st && !st.mastered && st.interval > 0 && st.nextReview <= now;
            });
            if (due.length === 0) { toast('Không có từ nào cần ôn!', 'info'); return; }
            Session.start(due);
            this.showingAnswer = false;
            this.renderCurrentWord();
        });

        $('#btnStartNew').addEventListener('click', () => {
            const vocab = this.getFilteredVocab();
            const newW = vocab.filter(w => !this.states[w.id]);
            if (newW.length === 0) { toast('Bạn đã học hết tất cả từ mới!', 'info'); return; }
            Session.start(newW.slice(0, 20));
            this.showingAnswer = false;
            this.renderCurrentWord();
        });

        $('#btnStartAll').addEventListener('click', () => {
            const vocab = this.getFilteredVocab();
            const now = Date.now();
            const due = vocab.filter(w => {
                const st = this.states[w.id];
                return st && !st.mastered && st.interval > 0 && st.nextReview <= now;
            });
            const newW = vocab.filter(w => !this.states[w.id]);
            const all = [...due, ...newW.slice(0, 20)];
            if (all.length === 0) { toast('Không còn từ nào để học!', 'info'); return; }
            Session.start(all);
            this.showingAnswer = false;
            this.renderCurrentWord();
        });

        $('#btnReset').addEventListener('click', () => this.showResetConfirm());
        $('#btnExport').addEventListener('click', () => this.exportData());
        $('#btnSettings').addEventListener('click', () => this.showSettingsModal());

        // Vocab management buttons
        $('#btnAddWord').addEventListener('click', () => this.showAddWordModal());
        $('#btnImport').addEventListener('click', () => this.showImportModal());
        $('#btnWordList').addEventListener('click', () => this.showWordListModal());

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            // Skip if inside modal
            if (document.querySelector('.modal-overlay') || document.querySelector('.confirm-overlay')) return;

            // Skip if typing in input
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') {
                if (e.key === 'Enter' && Session.active) { e.preventDefault(); this.handleTypingCheck(); }
                return;
            }

            const hk = Hotkeys.get();

            // ===== GLOBAL =====
            if (Hotkeys.match(e, hk.help.key) || e.key === 'F1') { e.preventDefault(); this.showShortcutSettings(); return; }
            if (Hotkeys.match(e, hk.toggleSidebar.key)) { e.preventDefault(); $('#sidebarToggle').click(); return; }
            if (Hotkeys.match(e, hk.addWord.key)) { e.preventDefault(); this.showAddWordModal(); return; }
            if (Hotkeys.match(e, hk.importWords.key)) { e.preventDefault(); this.showImportModal(); return; }
            if (Hotkeys.match(e, hk.wordList.key)) { e.preventDefault(); this.showWordListModal(); return; }

            // Mode switching
            if (Hotkeys.match(e, hk.modeFlashcard.key)) { e.preventDefault(); document.querySelector('.mode-tab[data-mode="flashcard"]')?.click(); toast('Chế độ: Flashcard', 'info'); return; }
            if (Hotkeys.match(e, hk.modeTyping.key)) { e.preventDefault(); document.querySelector('.mode-tab[data-mode="typing"]')?.click(); toast('Chế độ: Gõ từ', 'info'); return; }
            if (Hotkeys.match(e, hk.modeQuiz.key)) { e.preventDefault(); document.querySelector('.mode-tab[data-mode="quiz"]')?.click(); toast('Chế độ: Trắc nghiệm', 'info'); return; }

            // Session start (only when idle)
            if (!Session.active) {
                if (Hotkeys.match(e, hk.startDue.key)) { e.preventDefault(); $('#btnStartDue').click(); return; }
                if (Hotkeys.match(e, hk.startNew.key)) { e.preventDefault(); $('#btnStartNew').click(); return; }
                if (Hotkeys.match(e, hk.startAll.key)) { e.preventDefault(); $('#btnStartAll').click(); return; }
                return;
            }

            // ===== IN-SESSION =====
            if (!Session.current()) return;

            if (Hotkeys.match(e, hk.reveal.key)) { e.preventDefault(); if (this.mode === 'flashcard' && !this.showingAnswer) this.revealFlashcard(); }
            if (Hotkeys.match(e, hk.hint.key)) { e.preventDefault(); if (this.mode === 'typing' && !this.showingAnswer) document.querySelector('.hint-btn')?.click(); }
            if (Hotkeys.match(e, hk.speak.key)) { e.preventDefault(); const w = Session.current(); if (w) { const u = new SpeechSynthesisUtterance(w.en); u.lang = 'en-US'; speechSynthesis.speak(u); } }
            if (Hotkeys.match(e, hk.endSession.key)) { e.preventDefault(); Session.end(); this.showingAnswer = false; this.updateSidebar(); this.showWelcome(); toast('Đã kết thúc phiên học', 'info'); return; }

            // SRS buttons
            if (this.showingAnswer) {
                if (Hotkeys.match(e, hk.srsAgain.key)) { e.preventDefault(); this.handleSRS('again'); }
                if (Hotkeys.match(e, hk.srsHard.key)) { e.preventDefault(); this.handleSRS('hard'); }
                if (Hotkeys.match(e, hk.srsGood.key)) { e.preventDefault(); this.handleSRS('good'); }
                if (Hotkeys.match(e, hk.srsEasy.key)) { e.preventDefault(); this.handleSRS('easy'); }
                if (Hotkeys.match(e, hk.srsMastered.key)) { e.preventDefault(); this.handleSRS('mastered'); }
            }

            // Quiz shortcuts (always use 1-4 for quiz, not configurable)
            if (this.mode === 'quiz' && !this.showingAnswer) {
                const idx = parseInt(e.key) - 1;
                if (idx >= 0 && idx < 4) { e.preventDefault(); const opts = $$('.quiz-option:not(.disabled)'); if (opts[idx]) opts[idx].click(); }
            }
        });
    },

    // ---------- Shortcut Settings ----------
    showShortcutSettings() {
        const config = Hotkeys.get();
        let recordingId = null;

        const groupLabels = {
            'chung': '📚 Chung',
            'bắt đầu': '🚀 Bắt đầu học',
            'học': '📖 Trong phiên học',
            'SRS': '⭐ Đánh giá (SRS)',
            'quản lý': '📝 Quản lý',
        };

        const renderRows = () => {
            const groups = {};
            for (const id in config) {
                const g = config[id].group;
                if (!groups[g]) groups[g] = [];
                groups[g].push(id);
            }

            let html = '';
            for (const g in groups) {
                html += `<tr><td colspan="3" style="font-weight:700;color:var(--accent-blue);padding-top:14px">${groupLabels[g] || g}</td></tr>`;
                for (const id of groups[g]) {
                    const item = config[id];
                    const isDefault = item.key === Hotkeys.DEFAULTS[id].key;
                    const isRecording = recordingId === id;
                    html += `
                        <tr class="hotkey-row ${isRecording ? 'recording' : ''}" data-id="${id}">
                            <td>${item.label}</td>
                            <td style="text-align:center">
                                <kbd class="hotkey-key ${isRecording ? 'pulse-key' : ''} ${!isDefault ? 'custom-key' : ''}">${isRecording ? '⌨️ Nhấn phím...' : Hotkeys.display(item.key)}</kbd>
                            </td>
                            <td style="text-align:right">
                                ${!isDefault ? `<button class="hotkey-reset-btn" data-id="${id}" title="Reset về mặc định">↺</button>` : ''}
                            </td>
                        </tr>`;
                }
            }
            return html;
        };

        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        overlay.innerHTML = `
            <div class="modal-dialog" style="max-width:520px">
                <div class="modal-header">
                    <h2>⌨️ Tùy chỉnh phím tắt</h2>
                    <button class="modal-close" id="modalClose">✕</button>
                </div>
                <div class="modal-body" style="font-size:0.88rem">
                    <p style="color:var(--text-muted);font-size:0.78rem;margin-bottom:12px">💡 Click vào phím tắt để thay đổi, rồi nhấn phím mới.</p>
                    <table class="wordlist-table" id="hotkeyTable">
                        <thead><tr><th>Chức năng</th><th style="text-align:center">Phím</th><th></th></tr></thead>
                        <tbody>${renderRows()}</tbody>
                    </table>
                </div>
                <div class="modal-footer">
                    <button class="modal-btn danger" id="hotkeyResetAll">↺ Reset tất cả</button>
                    <button class="modal-btn primary" id="hotkeyDone">✔ Xong</button>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);
        overlay.setAttribute('tabindex', '-1');
        overlay.focus();

        const refreshTable = () => {
            overlay.querySelector('#hotkeyTable tbody').innerHTML = renderRows();
            bindRowClicks();
            overlay.focus();
        };

        const bindRowClicks = () => {
            // Click row to start recording
            overlay.querySelectorAll('.hotkey-row').forEach(row => {
                row.style.cursor = 'pointer';
                row.addEventListener('click', (ev) => {
                    if (ev.target.classList.contains('hotkey-reset-btn')) return;
                    recordingId = row.dataset.id;
                    refreshTable();
                });
            });
            // Reset individual
            overlay.querySelectorAll('.hotkey-reset-btn').forEach(btn => {
                btn.addEventListener('click', (ev) => {
                    ev.stopPropagation();
                    const id = btn.dataset.id;
                    config[id].key = Hotkeys.DEFAULTS[id].key;
                    Hotkeys.save(config);
                    refreshTable();
                    toast(`Đã reset "${config[id].label}"`, 'info');
                });
            });
        };
        bindRowClicks();

        // Key recording — on document so it fires regardless of focus
        const keyListener = (e) => {
            if (!recordingId) return;
            e.preventDefault();
            e.stopPropagation();
            const newKey = Hotkeys.eventToKey(e);
            if (!newKey) return;

            config[recordingId].key = newKey;
            Hotkeys.save(config);
            recordingId = null;
            refreshTable();
            this.updateShortcutBar();
            toast('Đã cập nhật phím tắt!', 'success');
        };
        document.addEventListener('keydown', keyListener, true);

        // Reset all
        overlay.querySelector('#hotkeyResetAll').onclick = () => {
            if (!confirm('Reset tất cả phím tắt về mặc định?')) return;
            Hotkeys.reset();
            const fresh = Hotkeys.get();
            for (const id in fresh) config[id] = fresh[id];
            recordingId = null;
            refreshTable();
            this.updateShortcutBar();
            toast('Đã reset tất cả phím tắt!', 'success');
        };

        // Close
        const close = () => { document.removeEventListener('keydown', keyListener, true); overlay.remove(); };
        overlay.querySelector('#modalClose').onclick = close;
        overlay.querySelector('#hotkeyDone').onclick = close;
        overlay.onclick = (e) => { if (e.target === overlay) close(); };
    },

    // ---------- Shortcut Bar ----------
    updateShortcutBar() {
        const bar = document.getElementById('shortcutBar');
        if (!bar) return;

        const hk = Hotkeys.get();
        const sc = (id, altLabel) => {
            const item = hk[id];
            return `<span class="sc-item"><kbd>${Hotkeys.display(item.key)}</kbd> ${altLabel || item.label}</span>`;
        };
        const sep = '<span class="sc-sep"></span>';

        let html = '';

        if (!Session.active) {
            html = [
                sc('startDue', 'Ôn tập'), sc('startNew', 'Từ mới'), sc('startAll', 'Tất cả'),
                sep,
                sc('modeFlashcard', 'Flashcard'), sc('modeTyping', 'Gõ từ'), sc('modeQuiz', 'Quiz'),
                sep,
                sc('addWord', 'Thêm từ'), sc('help', 'Cài đặt'),
            ].join('');
        } else if (this.showingAnswer) {
            html = [
                sc('srsAgain', 'Học lại'), sc('srsHard', 'Khó'), sc('srsGood', 'Tốt'), sc('srsEasy', 'Dễ'), sc('srsMastered', 'Đã thuộc'),
                sep,
                sc('speak', 'Phát âm'), sc('endSession', 'Thoát'),
            ].join('');
        } else if (this.mode === 'flashcard') {
            html = [
                sc('reveal', 'Lật thẻ'), sep,
                sc('speak', 'Phát âm'), sc('modeFlashcard', 'FC'), sc('modeTyping', 'Gõ'), sc('modeQuiz', 'Quiz'),
                sep, sc('endSession', 'Thoát'),
            ].join('');
        } else if (this.mode === 'typing') {
            html = [
                sc('hint', 'Gợi ý'), sep,
                sc('speak', 'Phát âm'), sc('modeFlashcard', 'FC'), sc('modeTyping', 'Gõ'), sc('modeQuiz', 'Quiz'),
                sep, sc('endSession', 'Thoát'),
            ].join('');
        } else if (this.mode === 'quiz') {
            html = [
                `<span class="sc-item"><kbd>1-4</kbd> Chọn đáp án</span>`, sep,
                sc('speak', 'Phát âm'), sc('modeFlashcard', 'FC'), sc('modeTyping', 'Gõ'), sc('modeQuiz', 'Quiz'),
                sep, sc('endSession', 'Thoát'),
            ].join('');
        }

        bar.innerHTML = html;
    },

    // ---------- Sidebar Updates ----------
    updateSidebar() {
        const vocab = this.getFilteredVocab();
        const now = Date.now();
        const newW = vocab.filter(w => !this.states[w.id]);
        const due = vocab.filter(w => {
            const st = this.states[w.id];
            return st && !st.mastered && st.interval > 0 && st.nextReview <= now;
        });
        const learning = vocab.filter(w => {
            const st = this.states[w.id];
            return st && !st.mastered && st.interval > 0 && st.nextReview > now;
        });
        const mastered = vocab.filter(w => {
            const st = this.states[w.id];
            return st && st.mastered;
        });

        $('#statNew').textContent = newW.length;
        $('#statLearning').textContent = learning.length;
        $('#statDue').textContent = due.length;
        $('#statMastered').textContent = mastered.length;

        const total = vocab.length || 1;
        const progress = Math.round(((mastered.length + learning.length) / total) * 100);
        $('#progressPercent').textContent = progress + '%';
        $('#progressFill').style.width = progress + '%';

        $('#dueCountBtn').textContent = due.length;
        $('#btnStartDue').disabled = due.length === 0;

        if (Session.active) {
            $('#sessionProgress').textContent = `${Session.answered}/${Session.sessionTotal}`;
        } else {
            $('#sessionProgress').textContent = `${mastered.length}/${vocab.length}`;
        }
    },

    // ---------- Render Groups ----------
    groupsOpen: false,

    renderGroups() {
        const container = $('#groupList');
        const groups = GroupManager.getAll();
        const counts = GroupManager.getCounts();
        const totalCount = VOCAB_DATA.length;

        container.innerHTML = `
            <div class="group-list-header" id="groupToggleHeader" style="cursor:pointer;user-select:none">
                <span class="group-toggle-arrow">${this.groupsOpen ? '▼' : '▶'}</span>
                <span class="group-list-title">Nhóm từ</span>
                <button class="group-add-btn" id="addGroupBtn" onclick="event.stopPropagation(); App.showAddGroupPrompt()">+ Thêm</button>
            </div>
            <div class="group-items-wrap" style="${this.groupsOpen ? '' : 'display:none'}">
                <div class="group-item ${!this.selectedGroup ? 'active' : ''}" data-group="">
                    <span class="group-emoji">🌐</span>
                    <span class="group-name">Tất cả</span>
                    <span class="group-count">${totalCount}</span>
                </div>
                ${groups.map(g => `
                    <div class="group-item ${this.selectedGroup === g.name ? 'active' : ''}" data-group="${g.name}">
                        <span class="group-emoji">${g.emoji}</span>
                        <span class="group-name">${g.name}</span>
                        <span class="group-count">${counts[g.name] || 0}</span>
                    </div>
                `).join('')}
            </div>
        `;

        // Toggle header click
        container.querySelector('#groupToggleHeader').addEventListener('click', () => {
            this.groupsOpen = !this.groupsOpen;
            this.renderGroups();
        });

        // Click handlers for group items
        container.querySelectorAll('.group-item').forEach(item => {
            item.addEventListener('click', () => {
                this.selectedGroup = item.dataset.group || null;
                this.renderGroups();
                this.updateSidebar();
                if (!Session.active) this.showWelcome();
            });
        });
    },

    showAddGroupPrompt() {
        const name = prompt('Tên nhóm mới:');
        if (!name || !name.trim()) return;
        const emoji = prompt('Emoji (để trống = 📚):', '📚') || '📚';
        if (GroupManager.add(name.trim(), emoji)) {
            this.renderGroups();
            toast(`Đã thêm nhóm "${name}"!`, 'success');
        } else {
            toast('Nhóm này đã tồn tại!', 'error');
        }
    },

    // ---------- Welcome Screen ----------
    showWelcome() {
        const stats = SRS.getStats(this.states);
        const main = $('#mainContent');

        let actionHtml = '';
        if (stats.due > 0) {
            actionHtml += `<button class="welcome-btn primary" onclick="App.startDue()">🔄 Ôn tập ${stats.due} từ cần ôn</button>`;
        }
        if (stats.new > 0) {
            actionHtml += `<button class="welcome-btn ${stats.due > 0 ? 'secondary' : 'primary'}" onclick="App.startNew()">✨ Bắt đầu học từ mới</button>`;
        }
        if (stats.due === 0 && stats.new === 0) {
            actionHtml = `<p style="color:var(--srs-good);font-weight:600;">🎉 Tuyệt vời! Bạn đã học hết tất cả từ!</p>`;
        }

        main.innerHTML = `
            <div class="welcome-screen">
                <span class="welcome-icon">🧠</span>
                <h2>VocabMaster</h2>
                <p>Học từ vựng thông minh với hệ thống lặp lại ngắt quãng.<br>
                   Hỗ trợ 3 chế độ: Flashcard, Gõ từ, Trắc nghiệm.</p>
                <div class="welcome-stats">
                    <div class="welcome-stat">
                        <div class="welcome-stat-num" style="color:var(--accent-blue)">${stats.new}</div>
                        <div class="welcome-stat-label">Từ mới</div>
                    </div>
                    <div class="welcome-stat">
                        <div class="welcome-stat-num" style="color:var(--srs-again)">${stats.due}</div>
                        <div class="welcome-stat-label">Cần ôn</div>
                    </div>
                    <div class="welcome-stat">
                        <div class="welcome-stat-num" style="color:var(--srs-good)">${stats.learning}</div>
                        <div class="welcome-stat-label">Đang học</div>
                    </div>
                    <div class="welcome-stat">
                        <div class="welcome-stat-num" style="color:var(--srs-mastered)">${stats.mastered}</div>
                        <div class="welcome-stat-label">Đã thuộc</div>
                    </div>
                </div>
                <div class="welcome-actions">
                    ${actionHtml}
                </div>
            </div>
        `;
        this.updateShortcutBar();
    },

    startDue() {
        $('#btnStartDue').click();
    },

    startNew() {
        $('#btnStartNew').click();
    },

    // ---------- Render Current Word ----------
    renderCurrentWord() {
        const word = Session.current();
        if (!word) {
            this.showCompletion();
            return;
        }

        switch (this.mode) {
            case 'flashcard': this.renderFlashcard(word); break;
            case 'typing': this.renderTyping(word); break;
            case 'quiz': this.renderQuiz(word); break;
        }
        this.updateShortcutBar();
        this.updateSidebar();
    },

    // ---------- FLASHCARD MODE ----------
    renderFlashcard(word) {
        const main = $('#mainContent');
        this.showingAnswer = false;

        main.innerHTML = `
            <div class="card-container card-enter">
                <div class="word-card" id="flashcard" role="button" tabindex="0">
                    <span class="card-counter">${Session.currentIndex + 1} / ${Session.queue.length}</span>
                    <div class="card-actions">
                        <button class="card-action-btn" onclick="speak('${word.en.replace(/'/g, "\\'")}')" title="Phát âm">🔊</button>
                    </div>

                    <div class="word-english">${word.en} <span class="word-pos">(${word.pos})</span></div>
                    <div class="word-phonetic">
                        <button class="speak-btn" onclick="event.stopPropagation(); speak('${word.en.replace(/'/g, "\\'")}')">🔊</button>
                        <span class="phonetic-text">${word.ipa}</span>
                    </div>

                    <div id="flashcardHint" class="flashcard-hint">Nhấn để xem nghĩa</div>

                    <div id="flashcardAnswer" class="flashcard-answer">
                        ${word.img ? `<img class="word-img" src="${word.img}" alt="${word.en}">` : ''}
                        <div class="word-vietnamese">${word.vi}</div>
                    </div>
                </div>

                <div id="srsArea"></div>
            </div>
        `;

        const card = $('#flashcard');
        card.addEventListener('click', () => this.revealFlashcard());
    },

    revealFlashcard() {
        if (this.showingAnswer) return;
        this.showingAnswer = true;
        $('#flashcardHint').style.display = 'none';
        $('#flashcardAnswer').classList.add('revealed');

        const word = Session.current();
        speak(word.en);
        this.renderSRSButtons(word);
        this.updateShortcutBar();
    },

    // ---------- TYPING MODE ----------
    renderTyping(word) {
        const main = $('#mainContent');
        this.showingAnswer = false;

        main.innerHTML = `
            <div class="card-container card-enter">
                <div class="word-card">
                    <span class="card-counter">${Session.currentIndex + 1} / ${Session.queue.length}</span>
                    <div class="card-actions">
                        <button class="card-action-btn" onclick="speak('${word.en.replace(/'/g, "\\'")}')" title="Phát âm">🔊</button>
                    </div>

                    ${word.img ? `<img class="word-img word-img-sm" src="${word.img}" alt="${word.en}">` : ''}
                    <div style="font-size:0.85rem;color:var(--text-muted);margin-bottom:4px">${word.pos}</div>
                    <div class="word-vietnamese" style="color:var(--text-primary);font-size:2rem">${word.vi}</div>

                    <div class="typing-area">
                        <div class="typing-input-wrapper">
                            <input type="text" class="typing-input" id="typingInput"
                                   placeholder="Gõ từ tiếng Anh..." autocomplete="off" autofocus>
                        </div>
                        <div class="typing-controls">
                            <button class="hint-btn" id="hintBtn" title="Gợi ý">💡</button>
                            <button class="check-btn" id="checkBtn">Kiểm tra</button>
                        </div>
                        <div id="typingResult"></div>
                    </div>
                </div>

                <div id="srsArea"></div>
            </div>
        `;

        setTimeout(() => {
            const input = $('#typingInput');
            if (input) input.focus();
        }, 100);

        $('#checkBtn').addEventListener('click', () => this.handleTypingCheck());
        $('#hintBtn').addEventListener('click', () => this.showTypingHint(word));
    },

    handleTypingCheck() {
        if (this.showingAnswer) return;
        const word = Session.current();
        if (!word) return;

        const input = $('#typingInput');
        const userAnswer = input.value.trim().toLowerCase();
        const correct = word.en.toLowerCase();

        this.showingAnswer = true;
        input.disabled = true;

        const resultEl = $('#typingResult');

        if (userAnswer === correct) {
            input.classList.add('correct');
            resultEl.innerHTML = `<div class="typing-result correct">✅ Chính xác!</div>`;
            speak(word.en);
        } else {
            input.classList.add('incorrect');
            input.classList.add('shake');
            resultEl.innerHTML = `
                <div class="typing-result incorrect">❌ Sai rồi!</div>
                <div class="correct-answer">${word.en}</div>
            `;
            speak(word.en);
        }

        this.renderSRSButtons(word);
    },

    showTypingHint(word) {
        const input = $('#typingInput');
        if (input.disabled) return;
        const hint = word.en.charAt(0) + '_'.repeat(word.en.length - 1);
        toast(`Gợi ý: ${hint}`, 'info');
    },

    // ---------- QUIZ MODE ----------
    renderQuiz(word) {
        const main = $('#mainContent');
        this.showingAnswer = false;

        // Generate 3 random distractors
        const distractors = this.getDistractors(word, 3);
        const options = [word, ...distractors].sort(() => Math.random() - 0.5);

        main.innerHTML = `
            <div class="card-container card-enter">
                <div class="word-card">
                    <span class="card-counter">${Session.currentIndex + 1} / ${Session.queue.length}</span>
                    <div class="card-actions">
                        <button class="card-action-btn" onclick="speak('${word.en.replace(/'/g, "\\'")}')" title="Phát âm">🔊</button>
                    </div>

                    <div class="word-english">${word.en} <span class="word-pos">(${word.pos})</span></div>
                    <div class="word-phonetic">
                        <button class="speak-btn" onclick="event.stopPropagation(); speak('${word.en.replace(/'/g, "\\'")}')">🔊</button>
                        <span class="phonetic-text">${word.ipa}</span>
                    </div>
                    ${word.img ? `<img class="word-img word-img-sm" src="${word.img}" alt="${word.en}">` : ''}

                    <div class="quiz-options" id="quizOptions">
                        ${options.map((opt, i) => `
                            <button class="quiz-option" data-correct="${opt.id === word.id}" data-id="${opt.id}">
                                <span class="option-key">${i + 1}</span>
                                <span>${opt.vi}</span>
                            </button>
                        `).join('')}
                    </div>
                    <div class="quiz-shortcut">1 · 2 · 3 · 4 để chọn</div>
                </div>

                <div id="srsArea"></div>
            </div>
        `;

        speak(word.en);

        $$('.quiz-option').forEach(opt => {
            opt.addEventListener('click', () => this.handleQuizAnswer(opt, word));
        });
    },

    handleQuizAnswer(selectedOpt, word) {
        if (this.showingAnswer) return;
        this.showingAnswer = true;

        const isCorrect = selectedOpt.dataset.correct === 'true';

        // Disable all options
        $$('.quiz-option').forEach(opt => {
            opt.classList.add('disabled');
            if (opt.dataset.correct === 'true') {
                opt.classList.add('correct');
            }
        });

        if (!isCorrect) {
            selectedOpt.classList.add('incorrect');
            selectedOpt.classList.add('shake');
        }

        this.renderSRSButtons(word);
    },

    getDistractors(word, count) {
        const others = VOCAB_DATA.filter(w => w.id !== word.id);
        const shuffled = others.sort(() => Math.random() - 0.5);
        return shuffled.slice(0, count);
    },

    // ---------- SRS BUTTONS ----------
    renderSRSButtons(word) {
        const labels = SRS.getButtonLabels(this.states, word.id);
        const area = $('#srsArea');

        area.innerHTML = `
            <div class="srs-buttons">
                <button class="srs-btn again" onclick="App.handleSRS('again')" title="Phím 1">
                    <span class="srs-label">1. ${labels.again.label}</span>
                    <span class="srs-time">${labels.again.time}</span>
                </button>
                <button class="srs-btn hard" onclick="App.handleSRS('hard')" title="Phím 2">
                    <span class="srs-label">2. ${labels.hard.label}</span>
                    <span class="srs-time">${labels.hard.time}</span>
                </button>
                <button class="srs-btn good" onclick="App.handleSRS('good')" title="Phím 3">
                    <span class="srs-label">3. ${labels.good.label}</span>
                    <span class="srs-time">${labels.good.time}</span>
                </button>
                <button class="srs-btn easy" onclick="App.handleSRS('easy')" title="Phím 4">
                    <span class="srs-label">4. ${labels.easy.label}</span>
                    <span class="srs-time">${labels.easy.time}</span>
                </button>
                <button class="srs-btn mastered" onclick="App.handleSRS('mastered')" title="Phím 5">
                    <span class="srs-label">5. ✓ Đã thuộc</span>
                    <span class="srs-time">Không ôn nữa</span>
                </button>
            </div>
        `;
    },

    handleSRS(button) {
        const word = Session.current();
        if (!word) return;

        // Process SRS
        SRS.processAnswer(this.states, word.id, button);

        // Handle "Học lại" (relearn queue)
        if (button === 'again') {
            Session.relearn();
        } else {
            Session.next();
        }

        this.showingAnswer = false;
        this.updateSidebar();

        // Show next word or completion
        if (Session.isComplete()) {
            this.showCompletion();
        } else {
            this.renderCurrentWord();
        }
    },

    // ---------- Completion Screen ----------
    showCompletion() {
        Session.end();
        const stats = SRS.getStats(this.states);
        const main = $('#mainContent');

        main.innerHTML = `
            <div class="completion-screen">
                <span class="completion-icon">🎉</span>
                <h2>Hoàn thành!</h2>
                <p>Bạn đã học xong phiên này. Tuyệt vời!</p>
                <div class="completion-stats">
                    <div class="completion-stat">
                        <div class="completion-stat-num" style="color:var(--srs-good)">${Session.answered}</div>
                        <div class="completion-stat-label">Từ đã học</div>
                    </div>
                    <div class="completion-stat">
                        <div class="completion-stat-num" style="color:var(--srs-mastered)">${stats.mastered}</div>
                        <div class="completion-stat-label">Đã thuộc</div>
                    </div>
                    <div class="completion-stat">
                        <div class="completion-stat-num" style="color:var(--accent-blue)">${stats.due}</div>
                        <div class="completion-stat-label">Cần ôn</div>
                    </div>
                </div>
                <div class="welcome-actions">
                    ${stats.due > 0 ? `<button class="welcome-btn primary" onclick="App.startDue()">🔄 Ôn tập ${stats.due} từ</button>` : ''}
                    ${stats.new > 0 ? `<button class="welcome-btn ${stats.due > 0 ? 'secondary' : 'primary'}" onclick="App.startNew()">✨ Học thêm từ mới</button>` : ''}
                    <button class="welcome-btn secondary" onclick="App.showWelcome(); App.updateSidebar();">🏠 Về trang chủ</button>
                </div>
            </div>
        `;

        this.updateSidebar();
    },

    // ---------- Reset Confirm ----------
    showResetConfirm() {
        const overlay = document.createElement('div');
        overlay.className = 'confirm-overlay';
        overlay.innerHTML = `
            <div class="confirm-dialog">
                <h3>🗑️ Reset tiến độ?</h3>
                <p>Tất cả tiến độ học sẽ bị xóa. Hành động này không thể hoàn tác!</p>
                <div class="confirm-actions">
                    <button class="confirm-btn cancel" id="cancelReset">Hủy</button>
                    <button class="confirm-btn danger" id="confirmReset">Reset</button>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);

        $('#cancelReset').addEventListener('click', () => overlay.remove());
        $('#confirmReset').addEventListener('click', () => {
            SRS.reset();
            this.states = {};
            Session.end();
            this.updateSidebar();
            this.showWelcome();
            overlay.remove();
            toast('Đã reset tiến độ!', 'success');
        });

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) overlay.remove();
        });
    },

    // ---------- Export Data ----------
    exportData() {
        const data = {
            states: this.states,
            exportDate: new Date().toISOString(),
            totalWords: VOCAB_DATA.length,
            stats: SRS.getStats(this.states),
        };
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `vocabmaster_backup_${new Date().toISOString().slice(0, 10)}.json`;
        a.click();
        URL.revokeObjectURL(url);
        toast('Đã xuất dữ liệu!', 'success');
    },

    // ---------- Total Word Count ----------
    updateTotalCount() {
        const el = document.getElementById('totalWordCount');
        if (el) el.textContent = VOCAB_DATA.length;
    },

    // ---------- Settings Modal ----------
    showSettingsModal() {
        const currentUrl = API.getUrl();
        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        overlay.innerHTML = `
            <div class="modal-dialog" style="max-width:500px">
                <div class="modal-header">
                    <h2>⚙️ Cài đặt API</h2>
                    <button class="modal-close" id="modalClose">✕</button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label class="form-label">Google Apps Script URL</label>
                        <input class="form-input" id="gasUrl" placeholder="https://script.google.com/macros/s/.../exec" value="${currentUrl}">
                    </div>
                    <div class="import-hint">
                        <strong>Hướng dẫn:</strong><br>
                        1. Mở file <code>gas-api.gs</code> trong thư mục vocab<br>
                        2. Copy code vào <a href="https://script.google.com" target="_blank" style="color:var(--accent-blue)">Google Apps Script</a><br>
                        3. Triển khai → Ứng dụng web → Bất kỳ ai<br>
                        4. Dán URL vào ô trên<br><br>
                        Khi đã cài đặt, bạn chỉ cần nhập từ tiếng Anh → hệ thống tự động điền nghĩa, từ loại, phiên âm.
                    </div>
                    <div id="apiTestResult" style="margin-top:12px"></div>
                </div>
                <div class="modal-footer">
                    <button class="modal-btn secondary" id="apiTest">🧪 Test API</button>
                    <button class="modal-btn primary" id="apiSave">💾 Lưu</button>
                </div>
            </div>
            <div class="modal-dialog" style="max-width:500px;margin-top:16px">
                <div class="modal-header">
                    <h2>🖼️ Pixabay (Hình ảnh)</h2>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label class="form-label">Pixabay API Key</label>
                        <input class="form-input" id="pixabayKey" placeholder="Nhập key từ pixabay.com/api/docs/" value="${ImageSearch.getKey()}">
                    </div>
                    <div class="import-hint">
                        <strong>Lấy key miễn phí:</strong><br>
                        1. Đăng ký tài khoản tại <a href="https://pixabay.com/accounts/register/" target="_blank" style="color:var(--accent-blue)">pixabay.com</a><br>
                        2. Vào <a href="https://pixabay.com/api/docs/" target="_blank" style="color:var(--accent-blue)">API Docs</a> → copy API Key<br>
                        3. Dán vào ô trên → Lưu<br><br>
                        Khi đã cài đặt, hình ảnh minh họa sẽ tự động xuất hiện khi thêm từ mới.
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="modal-btn primary" id="pixabaySave">💾 Lưu Key</button>
                </div>
            </div>
            <div class="modal-dialog" style="max-width:500px;margin-top:16px">
                <div class="modal-header">
                    <h2>☁️ Cloud Sync</h2>
                </div>
                <div class="modal-body">
                    <p style="font-size:0.82rem;color:var(--text-muted);margin-bottom:12px">
                        Đồng bộ dữ liệu (từ vựng, tiến độ, phím tắt, nhóm) lên Google Apps Script.
                        Cần cài đặt API URL ở trên trước.
                    </p>
                    <div id="syncResult" style="margin-top:8px"></div>
                </div>
                <div class="modal-footer">
                    <button class="modal-btn secondary" id="syncLoadBtn">⬇️ Tải từ cloud</button>
                    <button class="modal-btn primary" id="syncSaveBtn">⬆️ Đồng bộ lên cloud</button>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);

        const close = () => overlay.remove();
        overlay.querySelector('#modalClose').onclick = close;
        overlay.onclick = (e) => { if (e.target === overlay) close(); };

        // Test API
        overlay.querySelector('#apiTest').onclick = async () => {
            const url = overlay.querySelector('#gasUrl').value.trim();
            if (!url) { toast('Chưa nhập URL!', 'error'); return; }
            const result = overlay.querySelector('#apiTestResult');
            result.innerHTML = '<p style="color:var(--srs-hard)">⏳ Đang test...</p>';
            API.setUrl(url);
            try {
                const data = await API.lookupWord('hello');
                result.innerHTML = `<p style="color:var(--srs-good)">✅ API hoạt động!</p>
                    <div style="background:var(--bg-primary);padding:10px;border-radius:8px;font-size:0.82rem;margin-top:6px">
                        <strong>hello</strong> → ${data.vi} (${data.pos}) ${data.ipa}
                    </div>`;
            } catch (err) {
                result.innerHTML = `<p style="color:var(--srs-again)">❌ Lỗi: ${err.message}</p>`;
            }
        };

        // Save
        overlay.querySelector('#apiSave').onclick = () => {
            const url = overlay.querySelector('#gasUrl').value.trim();
            API.setUrl(url);
            close();
            toast(url ? 'Đã lưu API URL!' : 'Đã xóa API URL!', 'success');
        };

        // Pixabay Save
        const pixSaveBtn = overlay.querySelector('#pixabaySave');
        if (pixSaveBtn) {
            pixSaveBtn.onclick = () => {
                const key = overlay.querySelector('#pixabayKey').value.trim();
                ImageSearch.setKey(key);
                toast(key ? 'Đã lưu Pixabay API Key!' : 'Đã xóa Pixabay Key!', 'success');
            };
        }

        overlay.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });

        // Cloud Sync buttons
        overlay.querySelector('#syncSaveBtn').onclick = async () => {
            const resultEl = overlay.querySelector('#syncResult');
            if (!API.isConfigured()) { resultEl.innerHTML = '<p style="color:var(--srs-again)">❌ Chưa cài đặt API URL!</p>'; return; }
            resultEl.innerHTML = '<p style="color:var(--srs-hard)">⏳ Đang đồng bộ lên cloud...</p>';
            try {
                const ok = await CloudSync.saveAll();
                if (ok) {
                    resultEl.innerHTML = `<p style="color:var(--srs-good)">✅ Đồng bộ thành công!</p>
                        <div style="background:var(--bg-primary);padding:8px;border-radius:8px;font-size:0.78rem;margin-top:6px">
                            • Từ tự thêm: ${VocabManager.loadCustom().length}<br>
                            • SRS states: ${Object.keys(JSON.parse(localStorage.getItem(SRS.STORAGE_KEY) || '{}')).length}<br>
                            • Nhóm: ${GroupManager.load().length}
                        </div>`;
                } else {
                    resultEl.innerHTML = '<p style="color:var(--srs-again)">❌ Thất bại! Kiểm tra API URL và re-deploy GAS.</p>';
                }
            } catch (err) {
                resultEl.innerHTML = `<p style="color:var(--srs-again)">❌ Lỗi: ${err.message}</p>`;
            }
        };

        overlay.querySelector('#syncLoadBtn').onclick = async () => {
            const resultEl = overlay.querySelector('#syncResult');
            if (!API.isConfigured()) { resultEl.innerHTML = '<p style="color:var(--srs-again)">❌ Chưa cài đặt API URL!</p>'; return; }
            resultEl.innerHTML = '<p style="color:var(--srs-hard)">⏳ Đang tải từ cloud...</p>';
            try {
                const applied = await CloudSync.loadAll();
                if (applied) {
                    VocabManager.init();
                    App.states = SRS.loadStates();
                    App.updateSidebar();
                    App.updateTotalCount();
                    App.renderGroups();
                    App.updateShortcutBar();
                    resultEl.innerHTML = '<p style="color:var(--srs-good)">✅ Đã tải và áp dụng dữ liệu từ cloud!</p>';
                } else {
                    resultEl.innerHTML = '<p style="color:var(--srs-hard)">ℹ️ Cloud chưa có dữ liệu hoặc đã đồng bộ.</p>';
                }
            } catch (err) {
                resultEl.innerHTML = `<p style="color:var(--srs-again)">❌ Lỗi: ${err.message}</p>`;
            }
        };
    },

    // ---------- Add Word Modal (with Auto-Lookup) ----------
    showAddWordModal() {
        const hasAPI = API.isConfigured();
        let lookupTimer = null;

        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        overlay.innerHTML = `
            <div class="modal-dialog" style="max-width:500px">
                <div class="modal-header">
                    <h2>➕ Thêm từ mới</h2>
                    <button class="modal-close" id="modalClose">✕</button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label class="form-label">Tiếng Anh *</label>
                        <div style="display:flex;gap:8px">
                            <input class="form-input" id="addEn" placeholder="Nhập từ tiếng Anh..." autofocus style="flex:1">
                            ${hasAPI ? '<button class="modal-btn primary" id="lookupBtn" style="white-space:nowrap;padding:10px 16px">🔍 Tra cứu</button>' : ''}
                        </div>
                        ${hasAPI ? '<div id="lookupStatus" style="font-size:0.78rem;color:var(--text-muted);margin-top:4px">Nhập từ rồi bấm Tra cứu hoặc nhấn Tab</div>' : '<div style="font-size:0.78rem;color:var(--srs-hard);margin-top:4px">💡 Cài đặt API (⚙️) để tự động tra nghĩa</div>'}
                    </div>
                    <div class="form-group">
                        <label class="form-label">Nghĩa tiếng Việt *</label>
                        <input class="form-input" id="addVi" placeholder="VD: đàm phán">
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label class="form-label">Loại từ</label>
                            <select class="form-select" id="addPos">
                                <option value="n">Danh từ (n)</option>
                                <option value="v">Động từ (v)</option>
                                <option value="adj">Tính từ (adj)</option>
                                <option value="adv">Trạng từ (adv)</option>
                                <option value="prep">Giới từ (prep)</option>
                                <option value="conj">Liên từ (conj)</option>
                                <option value="phrase">Cụm từ (phrase)</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Phiên âm IPA</label>
                            <input class="form-input" id="addIpa" placeholder="/.../ (tự động điền)">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Nhóm</label>
                        <select class="form-select" id="addGroup">
                            ${GroupManager.getAll().map(g =>
            `<option value="${g.name}" ${this.selectedGroup === g.name ? 'selected' : ''}>${g.emoji} ${g.name}</option>`
        ).join('')}
                            <option value="">Chưa phân nhóm</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label">🖼️ Hình ảnh (URL)</label>
                        <div style="display:flex;gap:8px;align-items:center">
                            <input class="form-input" id="addImg" placeholder="Tự động tìm hoặc dán URL..." style="flex:1">
                            ${ImageSearch.isConfigured() ? '<button class="modal-btn secondary" id="searchImgBtn" style="white-space:nowrap;padding:8px 12px">🔍 Tìm ảnh</button>' : ''}
                        </div>
                        <div id="imgPreview" style="margin-top:8px"></div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="modal-btn secondary" id="addCancel">Hủy</button>
                    <button class="modal-btn primary" id="addSave">Thêm từ</button>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);

        const close = () => { clearTimeout(lookupTimer); overlay.remove(); };
        overlay.querySelector('#modalClose').onclick = close;
        overlay.querySelector('#addCancel').onclick = close;
        overlay.onclick = (e) => { if (e.target === overlay) close(); };

        // --- Auto-Lookup Logic ---
        const doLookup = async () => {
            const word = overlay.querySelector('#addEn').value.trim();
            if (!word || !hasAPI) return;

            const statusEl = overlay.querySelector('#lookupStatus');
            statusEl.innerHTML = '⏳ Đang tra cứu...';
            statusEl.style.color = 'var(--srs-hard)';

            try {
                const data = await API.lookupWord(word);
                // Auto-fill fields
                if (data.vi) overlay.querySelector('#addVi').value = data.vi;
                if (data.ipa) overlay.querySelector('#addIpa').value = data.ipa;
                if (data.pos) {
                    const sel = overlay.querySelector('#addPos');
                    const opt = sel.querySelector(`option[value="${data.pos}"]`);
                    if (opt) sel.value = data.pos;
                }
                statusEl.innerHTML = '✅ Đã tự động điền!';
                statusEl.style.color = 'var(--srs-good)';

                // Auto-search image after word lookup
                if (ImageSearch.isConfigured() && data.en) {
                    ImageSearch.search(data.en).then(imgUrl => {
                        if (imgUrl) {
                            const imgInput = overlay.querySelector('#addImg');
                            if (imgInput && !imgInput.value) {
                                imgInput.value = imgUrl;
                                const preview = overlay.querySelector('#imgPreview');
                                if (preview) preview.innerHTML = `<img src="${imgUrl}" style="max-width:120px;max-height:80px;border-radius:8px;border:1px solid var(--border)">`;
                            }
                        }
                    });
                }
            } catch (err) {
                statusEl.innerHTML = '❌ ' + err.message;
                statusEl.style.color = 'var(--srs-again)';
            }
        };

        if (hasAPI) {
            overlay.querySelector('#lookupBtn').onclick = doLookup;
            overlay.querySelector('#addEn').addEventListener('blur', () => {
                const word = overlay.querySelector('#addEn').value.trim();
                const vi = overlay.querySelector('#addVi').value.trim();
                if (word && !vi) doLookup();
            });
        }

        // Search Image button
        const searchImgBtn = overlay.querySelector('#searchImgBtn');
        if (searchImgBtn) {
            searchImgBtn.onclick = async () => {
                const word = overlay.querySelector('#addEn').value.trim();
                if (!word) { toast('Nhập từ trước!', 'error'); return; }
                searchImgBtn.textContent = '⏳...';
                const imgUrl = await ImageSearch.search(word);
                searchImgBtn.textContent = '🔍 Tìm ảnh';
                if (imgUrl) {
                    overlay.querySelector('#addImg').value = imgUrl;
                    const preview = overlay.querySelector('#imgPreview');
                    if (preview) preview.innerHTML = `<img src="${imgUrl}" style="max-width:120px;max-height:80px;border-radius:8px;border:1px solid var(--border)">`;
                } else {
                    toast('Không tìm thấy ảnh', 'info');
                }
            };
        }

        // Save
        overlay.querySelector('#addSave').onclick = () => {
            const en = overlay.querySelector('#addEn').value.trim();
            const vi = overlay.querySelector('#addVi').value.trim();
            const pos = overlay.querySelector('#addPos').value;
            const ipa = overlay.querySelector('#addIpa').value.trim();
            const group = overlay.querySelector('#addGroup').value;
            const img = overlay.querySelector('#addImg').value.trim();

            if (!en || !vi) {
                toast('Vui lòng nhập tiếng Anh và nghĩa!', 'error');
                return;
            }

            VocabManager.addWord(en, vi, pos, ipa, group, img);
            this.updateSidebar();
            this.updateTotalCount();
            this.renderGroups();

            // Clear form for next word
            overlay.querySelector('#addEn').value = '';
            overlay.querySelector('#addVi').value = '';
            overlay.querySelector('#addIpa').value = '';
            overlay.querySelector('#addImg').value = '';
            overlay.querySelector('#addPos').value = 'n';
            const imgPreview = overlay.querySelector('#imgPreview');
            if (imgPreview) imgPreview.innerHTML = '';
            if (hasAPI) {
                overlay.querySelector('#lookupStatus').innerHTML = 'Nhập từ tiếp theo...';
                overlay.querySelector('#lookupStatus').style.color = 'var(--text-muted)';
            }
            overlay.querySelector('#addEn').focus();
            toast(`Đã thêm "${en}"! Tiếp tục nhập...`, 'success');
        };

        // ESC to close
        overlay.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') close();
        });

        setTimeout(() => overlay.querySelector('#addEn')?.focus(), 100);
    },

    // ---------- Import Modal ----------
    showImportModal() {
        let importFormat = 'csv';
        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        overlay.innerHTML = `
            <div class="modal-dialog">
                <div class="modal-header">
                    <h2>📥 Nhập từ vựng</h2>
                    <button class="modal-close" id="modalClose">✕</button>
                </div>
                <div class="modal-body">
                    <div class="import-tabs">
                        <button class="import-tab active" data-format="csv">CSV</button>
                        <button class="import-tab" data-format="json">JSON</button>
                        <button class="import-tab" data-format="file">📁 File</button>
                    </div>

                    <div id="importContent">
                        <textarea class="import-textarea" id="importText" placeholder="Dán dữ liệu CSV vào đây...
english,vietnamese,pos,ipa
negotiate,đàm phán,v,/nɪˈɡoʊʃieɪt/
budget,ngân sách,n"></textarea>
                        <div class="import-hint">
                            <strong>Định dạng CSV:</strong> Mỗi dòng 1 từ, phân cách bằng dấu phẩy.<br>
                            <code>english,vietnamese,pos,ipa</code> (pos và ipa tùy chọn)
                        </div>
                    </div>

                    <div id="importFileContent" style="display:none">
                        <div class="file-upload-area" id="fileUploadArea">
                            <input type="file" id="fileInput" accept=".csv,.json,.txt">
                            <div class="file-upload-text">
                                📁 <strong>Bấm để chọn file</strong> hoặc kéo thả<br>
                                Hỗ trợ: .csv, .json, .txt
                            </div>
                        </div>
                        <div id="filePreview"></div>
                    </div>

                    <div id="importPreview" style="margin-top:16px"></div>
                </div>
                <div class="modal-footer">
                    <button class="modal-btn secondary" id="importPreviewBtn">👁 Xem trước</button>
                    <button class="modal-btn primary" id="importSave">Nhập từ</button>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);

        const close = () => overlay.remove();
        overlay.querySelector('#modalClose').onclick = close;
        overlay.onclick = (e) => { if (e.target === overlay) close(); };

        // Format tabs
        overlay.querySelectorAll('.import-tab').forEach(tab => {
            tab.onclick = () => {
                overlay.querySelectorAll('.import-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                importFormat = tab.dataset.format;

                const textArea = overlay.querySelector('#importContent');
                const fileArea = overlay.querySelector('#importFileContent');
                const textarea = overlay.querySelector('#importText');

                if (importFormat === 'file') {
                    textArea.style.display = 'none';
                    fileArea.style.display = 'block';
                } else {
                    textArea.style.display = 'block';
                    fileArea.style.display = 'none';
                    if (importFormat === 'json') {
                        textarea.placeholder = 'Dán dữ liệu JSON vào đây...\n[\n  { "en": "negotiate", "vi": "đàm phán", "pos": "v" },\n  { "en": "budget", "vi": "ngân sách" }\n]';
                    } else {
                        textarea.placeholder = 'Dán dữ liệu CSV vào đây...\nenglish,vietnamese,pos,ipa\nnegotiate,đàm phán,v,/nɪˈɡoʊʃieɪt/\nbudget,ngân sách,n';
                    }
                }
                overlay.querySelector('#importPreview').innerHTML = '';
            };
        });

        // File upload
        const fileArea = overlay.querySelector('#fileUploadArea');
        fileArea.onclick = () => overlay.querySelector('#fileInput').click();
        overlay.querySelector('#fileInput').onchange = (e) => {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (evt) => {
                const text = evt.target.result;
                overlay.querySelector('#importText').value = text;
                // Auto-detect format
                if (file.name.endsWith('.json') || text.trim().startsWith('[') || text.trim().startsWith('{')) {
                    importFormat = 'json';
                } else {
                    importFormat = 'csv';
                }
                // Switch to text view
                overlay.querySelector('#importContent').style.display = 'block';
                overlay.querySelector('#importFileContent').style.display = 'none';
                overlay.querySelector('#filePreview').innerHTML = `<p style="color:var(--srs-good);font-size:0.85rem">✅ Đã đọc file: ${file.name}</p>`;
                toast(`Đã đọc file ${file.name}`, 'success');
            };
            reader.readAsText(file);
        };

        // Preview
        overlay.querySelector('#importPreviewBtn').onclick = () => {
            const text = overlay.querySelector('#importText').value;
            if (!text.trim()) { toast('Chưa có dữ liệu!', 'error'); return; }
            const words = importFormat === 'json' ? VocabManager.parseJSON(text) : VocabManager.parseCSV(text);
            const preview = overlay.querySelector('#importPreview');
            if (words.length === 0) {
                preview.innerHTML = '<p style="color:var(--srs-again)">❌ Không tìm thấy từ hợp lệ. Kiểm tra lại định dạng!</p>';
            } else {
                preview.innerHTML = `
                    <p style="color:var(--srs-good);margin-bottom:8px">✅ Tìm thấy <strong>${words.length}</strong> từ:</p>
                    <div style="max-height:150px;overflow-y:auto;background:var(--bg-primary);border-radius:8px;padding:10px;font-size:0.82rem">
                        ${words.slice(0, 20).map(w => `<div style="padding:3px 0;border-bottom:1px solid var(--border)"><strong>${w.en}</strong> → ${w.vi} <span style="color:var(--text-muted)">(${w.pos})</span></div>`).join('')}
                        ${words.length > 20 ? `<div style="color:var(--text-muted);padding-top:6px">...và ${words.length - 20} từ khác</div>` : ''}
                    </div>
                `;
            }
        };

        // Import
        overlay.querySelector('#importSave').onclick = () => {
            const text = overlay.querySelector('#importText').value;
            if (!text.trim()) { toast('Chưa có dữ liệu!', 'error'); return; }
            const words = importFormat === 'json' ? VocabManager.parseJSON(text) : VocabManager.parseCSV(text);
            if (words.length === 0) { toast('Không tìm thấy từ hợp lệ!', 'error'); return; }

            const count = VocabManager.addWords(words);
            this.updateSidebar();
            this.updateTotalCount();
            if (!Session.active) this.showWelcome();
            close();
            toast(`Đã nhập ${count} từ mới!`, 'success');
        };

        // ESC to close
        overlay.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
    },

    // ---------- Word List Modal ----------
    showWordListModal() {
        const renderList = (filter = '') => {
            const filtered = VOCAB_DATA.filter(w => {
                if (!filter) return true;
                const q = filter.toLowerCase();
                return w.en.toLowerCase().includes(q) || w.vi.toLowerCase().includes(q);
            });

            return `
                <div class="wordlist-count">Hiển thị ${filtered.length} / ${VOCAB_DATA.length} từ</div>
                <table class="wordlist-table">
                    <thead><tr>
                        <th>Tiếng Anh</th>
                        <th>Nghĩa</th>
                        <th>Loại</th>
                        <th></th>
                    </tr></thead>
                    <tbody>
                        ${filtered.map(w => `
                            <tr>
                                <td>
                                    <span class="word-en">${w.en}</span>
                                    ${w.custom ? '<span class="custom-badge">TỰ THÊM</span>' : ''}
                                </td>
                                <td class="word-vi">${w.vi}</td>
                                <td class="word-type">${w.pos}</td>
                                <td>
                                    ${w.custom ? `<button class="wordlist-delete" data-id="${w.id}" title="Xóa">🗑</button>` : ''}
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            `;
        };

        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        overlay.innerHTML = `
            <div class="modal-dialog" style="max-width:650px">
                <div class="modal-header">
                    <h2>📋 Danh sách từ vựng (${VOCAB_DATA.length})</h2>
                    <button class="modal-close" id="modalClose">✕</button>
                </div>
                <div class="modal-body">
                    <div class="wordlist-search-wrap">
                        <span class="wordlist-search-icon">🔍</span>
                        <input class="wordlist-search" id="wordSearch" placeholder="Tìm kiếm từ vựng...">
                    </div>
                    <div id="wordListContent">
                        ${renderList()}
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="modal-btn danger" id="deleteAllCustom">🗑 Xóa tất cả từ tự thêm</button>
                    <button class="modal-btn secondary" id="modalCloseBtn">Đóng</button>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);

        const close = () => overlay.remove();
        overlay.querySelector('#modalClose').onclick = close;
        overlay.querySelector('#modalCloseBtn').onclick = close;
        overlay.onclick = (e) => { if (e.target === overlay) close(); };

        // Search
        overlay.querySelector('#wordSearch').oninput = (e) => {
            overlay.querySelector('#wordListContent').innerHTML = renderList(e.target.value);
            bindDeleteButtons();
        };

        // Delete individual custom words
        const bindDeleteButtons = () => {
            overlay.querySelectorAll('.wordlist-delete').forEach(btn => {
                btn.onclick = () => {
                    const id = parseInt(btn.dataset.id);
                    VocabManager.deleteWord(id);
                    // Also remove SRS state
                    delete this.states[id];
                    SRS.saveStates(this.states);
                    overlay.querySelector('#wordListContent').innerHTML = renderList(overlay.querySelector('#wordSearch').value);
                    overlay.querySelector('.modal-header h2').textContent = `📋 Danh sách từ vựng (${VOCAB_DATA.length})`;
                    bindDeleteButtons();
                    this.updateSidebar();
                    this.updateTotalCount();
                    toast('Đã xóa từ!', 'info');
                };
            });
        };
        bindDeleteButtons();

        // Delete all custom
        overlay.querySelector('#deleteAllCustom').onclick = () => {
            const custom = VocabManager.loadCustom();
            if (custom.length === 0) { toast('Không có từ tự thêm nào!', 'info'); return; }
            if (!confirm(`Xóa tất cả ${custom.length} từ tự thêm?`)) return;
            // Remove SRS states for custom words
            custom.forEach(w => delete this.states[w.id]);
            SRS.saveStates(this.states);
            VocabManager.resetCustom();
            overlay.querySelector('#wordListContent').innerHTML = renderList();
            overlay.querySelector('.modal-header h2').textContent = `📋 Danh sách từ vựng (${VOCAB_DATA.length})`;
            bindDeleteButtons();
            this.updateSidebar();
            this.updateTotalCount();
            toast('Đã xóa tất cả từ tự thêm!', 'success');
        };

        // ESC / keyboard
        overlay.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
        setTimeout(() => overlay.querySelector('#wordSearch')?.focus(), 100);
    },
};


// ==================== INITIALIZE ====================
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
