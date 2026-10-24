// Raft & Draft — shared language layer
// Toggle reloads the page on purpose: dynamic Supabase content (dates, type
// labels, pluralization) is safer to re-render from scratch than to patch in place.

const RD_FORM_URL = {
  ru: 'https://forms.gle/35KAnAGAopDRZnUy6',
  en: 'https://forms.gle/dgpoLszyAh2JYkX19'
};

const RD_TYPE_LABEL = {
  ru: { 'Проза':'Проза', 'Поэзия':'Поэзия', 'Сценарий':'Сценарий', 'Пьеса':'Пьеса', 'Статья':'Статья', 'Эссе':'Эссе' },
  en: { 'Проза':'Prose', 'Поэзия':'Poetry', 'Сценарий':'Screenplay', 'Пьеса':'Play', 'Статья':'Article', 'Эссе':'Essay' }
};

const RD_STR = {
  ru: {
    nav_contest: 'Конкурс',
    nav_library: 'Библиотека',
    nav_guidelines: 'Гайдлайны',
    nav_about: 'О журнале',
    nav_submit: 'Подать работу',
    footer_copy: '© 2026 Raft & Draft. Все права защищены.',
    loading: 'Загрузка...',
    subscribe_label: 'Рассылка',
    subscribe_text: 'Новые работы — сразу на почту.',
    subscribe_placeholder: 'your@email.com',
    subscribe_btn: 'Подписаться',
    all_filter: 'Все',
    age_suffix: ' лет',
    // index page
    idx_section_title: 'Последние публикации',
    idx_section_link: 'Вся библиотека →',
    idx_about_text: 'Raft & Draft — независимый журнал для молодых авторов. Редакция читает всё и даёт обратную связь на каждый отказ.',
    idx_about_btn: 'О журнале',
    idx_empty: 'Работ пока нет.',
    // library page
    lib_title: 'Библиотека',
    lib_filter_type: 'Тип',
    lib_empty: 'Работ не найдено.',
    lib_count_one: 'работа',
    lib_count_few: 'работы',
    lib_count_many: 'работ',
    // guidelines page
    gl_title: 'Гайдлайны',
    gl_format_label: 'Требования к формату',
    gl_prose_1: 'До 5 000 слов', gl_prose_2: 'Times New Roman 12', gl_prose_3: 'Двойной интервал',
    gl_poetry_1: 'До 100 строк', gl_poetry_2: 'Times New Roman 12', gl_poetry_3: 'Одинарный интервал',
    gl_script_1: 'До 30 страниц', gl_script_2: 'Courier New 12', gl_script_3: 'Стандартный формат',
    gl_play_1: 'До 30 страниц', gl_play_2: 'Courier New 12', gl_play_3: 'Стандартный формат',
    gl_article_1: 'До 2 000 слов', gl_article_2: 'Times New Roman 12', gl_article_3: 'Двойной интервал',
    gl_essay_1: 'До 2 000 слов', gl_essay_2: 'Times New Roman 12', gl_essay_3: 'Двойной интервал',
    gl_terms_label: 'Условия подачи',
    gl_rule_1: 'Авторы до 18 лет',
    gl_rule_2: 'Работы на русском или английском языке',
    gl_rule_3: 'Работы, написанные с помощью ИИ, не принимаются',
    gl_rule_4: 'Срок ответа до 4 недель. Мы даём обратную связь на каждый отказ',
    gl_policy_label: 'Политика журнала',
    gl_policy_text: 'Перед подачей ознакомьтесь с полной политикой журнала. Отправляя работу, вы подтверждаете согласие с её условиями.',
    gl_policy_btn: 'Читать политику',
    gl_submit_btn: 'Подать работу',
    // work page
    wk_back: '← Библиотека',
    wk_not_found: 'Работа не найдена.',
    wk_comments: 'Комментарии',
    wk_name_placeholder: 'Ваше имя',
    wk_comment_placeholder: 'Напишите комментарий...',
    wk_comment_submit: 'Отправить',
    wk_author_note_label: 'Слова автора',
    // about page
    ab_title: 'О журнале',
    ab_role: 'основатель и главный редактор',
    ab_journal_label: 'О журнале',
    ab_what_label: 'Что такое Raft & Draft',
    ab_what_p1: 'Raft & Draft — независимый литературный журнал для авторов до 18 лет. Мы публикуем прозу, поэзию и сценарии на русском и английском языках.',
    ab_what_p2: 'Журнал основан в 2026 году. Название отражает идею: черновик — это не слабость, это начало. Каждый текст здесь был когда-то наброском на листке бумаги.',
    ab_principles_label: 'Принципы',
    ab_p1_bold: 'Обратная связь на каждый отказ.',
    ab_p1_text: 'Если работа нам не подошла, вы узнаете почему.',
    ab_p2_bold: 'Без ИИ.',
    ab_p2_text: 'Мы публикуем только то, что написал человек.',
    ab_p3_bold: 'Без выпусков.',
    ab_p3_text: 'Работы выходят сразу после модерации, не нужно ждать следующего номера.',
    ab_p4_bold: 'Срок ответа до 4 недель.',
    ab_p4_text: 'Мы стараемся отвечать быстрее.',
    ab_editorial_label: 'Редакция',
    ab_editorial_text: 'Журнал основан и редактируется Софией Одинцовой — писателем, сценаристом и режиссёром из Москвы. Редакция работает как независимый проект без коммерческих интересов.',
    ab_contact_label: 'Связаться',
    ab_contact_telegram_label: 'Telegram',
    ab_contact_site_label: 'Сайт',
    // page titles
    title_library: 'Библиотека — Raft & Draft',
    title_guidelines: 'Гайдлайны — Raft & Draft',
    title_about: 'О журнале — Raft & Draft',
    title_contest: 'Конкурс короткой прозы — Raft & Draft',
    // contest page
    ct_submit_note_open: 'Прием до 29 октября 2026 года, 23:59 по Москве. Не указывайте в тексте рассказа свое имя.',
  },
  en: {
    nav_contest: 'Contest',
    nav_library: 'Library',
    nav_guidelines: 'Guidelines',
    nav_about: 'About',
    nav_submit: 'Submit',
    footer_copy: '© 2026 Raft & Draft. All rights reserved.',
    loading: 'Loading...',
    subscribe_label: 'Newsletter',
    subscribe_text: 'New work, straight to your inbox.',
    subscribe_placeholder: 'your@email.com',
    subscribe_btn: 'Subscribe',
    all_filter: 'All',
    age_suffix: ' y.o.',
    idx_section_title: 'Latest publications',
    idx_section_link: 'Full library →',
    idx_about_text: 'Raft & Draft is an independent journal for young writers. We read everything and give feedback on every rejection.',
    idx_about_btn: 'About',
    idx_empty: 'No entries yet.',
    lib_title: 'Library',
    lib_filter_type: 'Type',
    lib_empty: 'No entries found.',
    lib_count_one: 'entry',
    lib_count_few: 'entries',
    lib_count_many: 'entries',
    gl_title: 'Guidelines',
    gl_format_label: 'Format requirements',
    gl_prose_1: 'Up to 5,000 words', gl_prose_2: 'Times New Roman 12', gl_prose_3: 'Double spaced',
    gl_poetry_1: 'Up to 100 lines', gl_poetry_2: 'Times New Roman 12', gl_poetry_3: 'Single spaced',
    gl_script_1: 'Up to 30 pages', gl_script_2: 'Courier New 12', gl_script_3: 'Standard format',
    gl_play_1: 'Up to 30 pages', gl_play_2: 'Courier New 12', gl_play_3: 'Standard format',
    gl_article_1: 'Up to 2,000 words', gl_article_2: 'Times New Roman 12', gl_article_3: 'Double spaced',
    gl_essay_1: 'Up to 2,000 words', gl_essay_2: 'Times New Roman 12', gl_essay_3: 'Double spaced',
    gl_terms_label: 'Submission requirements',
    gl_rule_1: 'Writers under 18',
    gl_rule_2: 'Submissions in Russian or English',
    gl_rule_3: 'AI-generated work is not accepted',
    gl_rule_4: 'Response within 4 weeks. We give feedback on every rejection.',
    gl_policy_label: 'Journal policy',
    gl_policy_text: 'Read the full journal policy before submitting. By submitting your work, you agree to its terms.',
    gl_policy_btn: 'Read policy',
    gl_submit_btn: 'Submit your work',
    wk_back: '← Library',
    wk_not_found: 'Entry not found.',
    wk_comments: 'Comments',
    wk_name_placeholder: 'Your name',
    wk_comment_placeholder: 'Write a comment...',
    wk_comment_submit: 'Post',
    wk_author_note_label: "Author's note",
    ab_title: 'About the journal',
    ab_role: 'founder & editor in chief',
    ab_journal_label: 'About the journal',
    ab_what_label: 'What is Raft & Draft',
    ab_what_p1: 'Raft & Draft is an independent literary journal for writers under 18. We publish prose, poetry, and screenwriting in Russian and English.',
    ab_what_p2: 'The journal was founded in 2026. The name reflects an idea: a draft isn\u2019t a weakness, it\u2019s a beginning. Every text here was once a sketch on a piece of paper.',
    ab_principles_label: 'Principles',
    ab_p1_bold: 'Feedback on every rejection.',
    ab_p1_text: 'If your work isn\u2019t a fit, you\u2019ll know why.',
    ab_p2_bold: 'No AI.',
    ab_p2_text: 'We only publish work written by a human.',
    ab_p3_bold: 'No issues.',
    ab_p3_text: 'Work goes live right after review \u2013 no waiting for the next issue.',
    ab_p4_bold: 'Response within 4 weeks.',
    ab_p4_text: 'We usually reply faster.',
    ab_editorial_label: 'Editorial team',
    ab_editorial_text: 'The journal was founded and is edited by Sofiya Odintsova \u2013 a writer, screenwriter, and director based in Moscow. The editorial team operates as an independent project with no commercial interests.',
    ab_contact_label: 'Contact',
    ab_contact_telegram_label: 'Telegram',
    ab_contact_site_label: 'Website',
    title_library: 'Library — Raft & Draft',
    title_guidelines: 'Guidelines — Raft & Draft',
    title_about: 'About — Raft & Draft',
    title_contest: 'Short Prose Contest — Raft & Draft',
    ct_submit_note_open: 'Open until October 29, 2026, 11:59 p.m. Moscow time. Do not put your name in the text of your story.',
  }
};

// Language choice, in order of priority:
// 1) ?lang=en or ?lang=ru in the address (remembered for the next pages);
// 2) the reader's earlier choice;
// 3) the browser language: Russian-speaking browsers get RU, everyone else gets EN.
function rdUrlLang() {
  try {
    var p = new URLSearchParams(location.search).get('lang');
    return (p === 'en' || p === 'ru') ? p : null;
  } catch (e) { return null; }
}
(function rdRememberUrlLang() {
  var p = rdUrlLang();
  if (p) { try { localStorage.setItem('rd_lang', p); } catch (e) {} }
})();
function rdLang() {
  var p = rdUrlLang();
  if (p) return p;
  var saved = null;
  try { saved = localStorage.getItem('rd_lang'); } catch (e) {}
  if (saved === 'en' || saved === 'ru') return saved;
  var langs = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language || ''];
  for (var i = 0; i < langs.length; i++) {
    if (/^(ru|uk|be|kk)\b/i.test(langs[i] || '')) return 'ru';
  }
  return 'en';
}
function rdT(key) {
  return RD_STR[rdLang()][key] || RD_STR.ru[key] || key;
}
function rdTypeLabel(ruValue) {
  return RD_TYPE_LABEL[rdLang()][ruValue] || ruValue;
}
function rdToggleLang() {
  var next = rdLang() === 'ru' ? 'en' : 'ru';
  try { localStorage.setItem('rd_lang', next); } catch (e) {}
  try {
    var u = new URL(location.href);
    u.searchParams.set('lang', next);
    location.href = u.href;
  } catch (e) { location.reload(); }
}

// ---------- English display of the journal's own data ----------
// The works themselves (title, text, author's note) stay in the original language.
// Everything the journal writes about a work is shown in English in EN mode:
// a *_en column in Supabase wins (author_en, city_en, genre_en, description_en);
// without it, names are transliterated and countries/genres come from the dictionaries below.

var RD_TRANSLIT = {
  'а':'a','б':'b','в':'v','г':'g','д':'d','е':'e','ё':'yo','ж':'zh','з':'z','и':'i','й':'y',
  'к':'k','л':'l','м':'m','н':'n','о':'o','п':'p','р':'r','с':'s','т':'t','у':'u','ф':'f',
  'х':'kh','ц':'ts','ч':'ch','ш':'sh','щ':'shch','ъ':'','ы':'y','ь':'','э':'e','ю':'yu','я':'ya',
  'і':'i','ї':'yi','є':'ye','ґ':'g','ә':'a','ғ':'g','қ':'k','ң':'n','ө':'o','ұ':'u','ү':'u','һ':'h'
};
function rdTranslit(s) {
  if (!s) return s;
  var out = '';
  var chars = Array.from(String(s));
  for (var i = 0; i < chars.length; i++) {
    var ch = chars[i];
    var low = ch.toLowerCase();
    if (!(low in RD_TRANSLIT)) { out += ch; continue; }
    var t = RD_TRANSLIT[low];
    if (ch !== low && t) {
      var nextCh = chars[i + 1] || '';
      var nextUpper = nextCh && nextCh !== nextCh.toLowerCase();
      t = nextUpper ? t.toUpperCase() : t.charAt(0).toUpperCase() + t.slice(1);
    }
    out += t;
  }
  return out;
}

var RD_PLACES = {
  'россия':'Russia','рф':'Russia','российская федерация':'Russia',
  'беларусь':'Belarus','белоруссия':'Belarus','казахстан':'Kazakhstan','азербайджан':'Azerbaijan',
  'армения':'Armenia','грузия':'Georgia','украина':'Ukraine','узбекистан':'Uzbekistan',
  'кыргызстан':'Kyrgyzstan','киргизия':'Kyrgyzstan','таджикистан':'Tajikistan','туркменистан':'Turkmenistan',
  'молдова':'Moldova','молдавия':'Moldova','латвия':'Latvia','литва':'Lithuania','эстония':'Estonia',
  'сша':'USA','соединённые штаты':'USA','соединенные штаты':'USA','америка':'USA',
  'великобритания':'UK','англия':'UK','германия':'Germany','франция':'France','италия':'Italy',
  'испания':'Spain','португалия':'Portugal','нидерланды':'Netherlands','бельгия':'Belgium',
  'швейцария':'Switzerland','австрия':'Austria','польша':'Poland','чехия':'Czech Republic',
  'словакия':'Slovakia','венгрия':'Hungary','румыния':'Romania','болгария':'Bulgaria','сербия':'Serbia',
  'черногория':'Montenegro','хорватия':'Croatia','греция':'Greece','кипр':'Cyprus','турция':'Turkey',
  'израиль':'Israel','оаэ':'UAE','египет':'Egypt','финляндия':'Finland','швеция':'Sweden',
  'норвегия':'Norway','дания':'Denmark','ирландия':'Ireland','канада':'Canada','мексика':'Mexico',
  'бразилия':'Brazil','аргентина':'Argentina','австралия':'Australia','новая зеландия':'New Zealand',
  'китай':'China','япония':'Japan','корея':'South Korea','южная корея':'South Korea','индия':'India',
  'таиланд':'Thailand','вьетнам':'Vietnam','индонезия':'Indonesia','монголия':'Mongolia',
  'москва':'Moscow','санкт-петербург':'Saint Petersburg','петербург':'Saint Petersburg','спб':'Saint Petersburg',
  'минск':'Minsk','алматы':'Almaty','астана':'Astana','баку':'Baku','ереван':'Yerevan','тбилиси':'Tbilisi',
  'киев':'Kyiv','ташкент':'Tashkent','бишкек':'Bishkek'
};
function rdPlace(s) {
  if (!s) return s;
  return String(s).split(',').map(function(part) {
    var p = part.trim();
    var hit = RD_PLACES[p.toLowerCase().replace(/ё/g, 'е')] || RD_PLACES[p.toLowerCase()];
    return hit || rdTranslit(p);
  }).join(', ');
}

var RD_GENRES = {
  'драма':'drama','социальная драма':'social drama','психологическая драма':'psychological drama',
  'семейная драма':'family drama','комедия':'comedy','трагикомедия':'tragicomedy','трагедия':'tragedy',
  'мелодрама':'melodrama','романтика':'romance','любовный роман':'romance','роман':'novel',
  'хоррор':'horror','ужасы':'horror','мистика':'mystic fiction','мистический':'mystic fiction',
  'триллер':'thriller','психологический триллер':'psychological thriller','детектив':'detective fiction',
  'нуар':'noir','криминал':'crime','фэнтези':'fantasy','темное фэнтези':'dark fantasy','тёмное фэнтези':'dark fantasy',
  'городское фэнтези':'urban fantasy','фантастика':'science fiction','научная фантастика':'science fiction',
  'антиутопия':'dystopia','утопия':'utopia','постапокалипсис':'post-apocalyptic','киберпанк':'cyberpunk',
  'магреализм':'magical realism','магический реализм':'magical realism','реализм':'realism',
  'сюрреализм':'surrealism','абсурд':'absurdism','притча':'parable','сказка':'fairy tale','басня':'fable',
  'легенда':'legend','миф':'myth','мифология':'mythology','повседневность':'slice of life',
  'слайс оф лайф':'slice of life','слайс-оф-лайф':'slice of life','автофикшн':'autofiction',
  'автобиографический':'autobiographical','автобиография':'autobiography','мемуары':'memoir',
  'приключения':'adventure','приключение':'adventure','экшн':'action','военный':'war fiction',
  'военная проза':'war fiction','историческая проза':'historical fiction','исторический':'historical fiction',
  'сатира':'satire','юмор':'humor','пародия':'parody','ирония':'irony',
  'психологическая проза':'psychological fiction','психологический':'psychological',
  'философская проза':'philosophical fiction','философский':'philosophical','философия':'philosophy',
  'подростковая проза':'young adult fiction','янг эдалт':'young adult','young adult':'young adult',
  'лирика':'lyric poetry','любовная лирика':'love poetry','философская лирика':'philosophical poetry',
  'гражданская лирика':'civic poetry','пейзажная лирика':'nature poetry','верлибр':'free verse',
  'свободный стих':'free verse','стихотворение в прозе':'prose poem','поэма':'long poem','баллада':'ballad',
  'сонет':'sonnet','хокку':'haiku','рассказ':'short story','новелла':'novella','повесть':'novella',
  'миниатюра':'flash fiction','зарисовка':'sketch','этюд':'sketch','очерк':'essay',
  'эссе':'essay','публицистика':'journalism','статья':'article','рецензия':'review','критика':'criticism',
  'литературная критика':'literary criticism','кинокритика':'film criticism','анализ':'analysis',
  'исследование':'research','интервью':'interview','монолог':'monologue','диалог':'dialogue',
  'короткометражный':'short film','короткий метр':'short film','сценарий':'screenplay','пьеса':'play',
  'триллер-драма':'thriller drama','драмеди':'dramedy','экзистенциальный':'existential',
  'экзистенциальная проза':'existential fiction','готика':'gothic','готический':'gothic',
  'боди-хоррор':'body horror','психологический хоррор':'psychological horror','спекулятивная проза':'speculative fiction',
  'стимпанк':'steampunk','космоопера':'space opera','фанфик':'fan fiction','dark academia':'dark academia',
  'темная академия':'dark academia','тёмная академия':'dark academia','взросление':'coming of age',
  'роман воспитания':'coming of age','школа':'school story','дружба':'friendship','любовь':'love',
  'одиночество':'loneliness','семья':'family','депрессия':'depression','утрата':'loss'
};
// The journal's fixed genre list: [Russian, English]. The admin form offers only these,
// so every work is labeled the same way in both languages.
var RD_GENRE_LIST = [
  ['Лирика', 'Lyric poetry'],
  ['Любовная лирика', 'Love poetry'],
  ['Исповедальная лирика', 'Confessional poetry'],
  ['Лирическая проза', 'Lyrical prose'],
  ['Драма', 'Drama'],
  ['Романтика', 'Romance'],
  ['Фэнтези', 'Fantasy'],
  ['Фантастика', 'Science fiction'],
  ['Постапокалипсис', 'Post-apocalyptic'],
  ['Хоррор', 'Horror'],
  ['Мистика', 'Mystery'],
  ['Комедия', 'Comedy'],
  ['Философия', 'Philosophy'],
  ['Психология', 'Psychology'],
  ['Научпоп', 'Popular science'],
  ['Исследование', 'Research'],
  ['История и культура', 'History & culture']
];
// Countries offered in the admin form: [Russian, English].
var RD_COUNTRY_LIST = [
  ['Россия', 'Russia'], ['Беларусь', 'Belarus'], ['Казахстан', 'Kazakhstan'], ['Кыргызстан', 'Kyrgyzstan'],
  ['Узбекистан', 'Uzbekistan'], ['Таджикистан', 'Tajikistan'], ['Азербайджан', 'Azerbaijan'], ['Армения', 'Armenia'],
  ['Грузия', 'Georgia'], ['Молдова', 'Moldova'], ['Украина', 'Ukraine'], ['Латвия', 'Latvia'], ['Литва', 'Lithuania'],
  ['Эстония', 'Estonia'], ['Сербия', 'Serbia'], ['Турция', 'Turkey'], ['Израиль', 'Israel'], ['Германия', 'Germany'],
  ['Великобритания', 'UK'], ['США', 'USA'], ['Канада', 'Canada']
];
RD_GENRE_LIST.forEach(function(g) { RD_GENRES[g[0].toLowerCase()] = g[1]; });

function rdGenre(s) {
  if (!s) return s;
  var parts = String(s).split(/\s*[,/;]\s*/).filter(Boolean);
  var out = parts.map(function(p) {
    var key = p.trim().toLowerCase();
    return RD_GENRES[key] || RD_GENRES[key.replace(/ё/g, 'е')] || p.trim();
  }).join(', ');
  return out.charAt(0).toUpperCase() + out.slice(1);
}

// Text the journal shows about a work, in the reader's language.
function rdW(w, field) {
  var v = w[field];
  if (rdLang() === 'ru') return v;
  var en = w[field + '_en'];
  if (en) return en;
  if (!v) return v;
  if (field === 'author') return rdTranslit(v);
  if (field === 'city') return rdPlace(v);
  if (field === 'genre') return rdGenre(v);
  if (field === 'description') return /[А-Яа-яЁё]/.test(v) ? null : v;
  return v;
}
function rdDateLocale() {
  return rdLang() === 'ru' ? 'ru-RU' : 'en-US';
}
function rdPlural(n) {
  if (rdLang() === 'en') return n === 1 ? rdT('lib_count_one') : rdT('lib_count_few');
  if (n % 10 === 1 && n % 100 !== 11) return rdT('lib_count_one');
  if ([2,3,4].includes(n % 10) && ![12,13,14].includes(n % 100)) return rdT('lib_count_few');
  return rdT('lib_count_many');
}
// Applies data-i18n="key" text content and sets nav/submit/lang-btn state.
// Call after DOM is ready, before any dynamic Supabase render.
function rdApplyStatic() {
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    el.textContent = rdT(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
    el.placeholder = rdT(el.dataset.i18nPlaceholder);
  });
  var langBtn = document.getElementById('lang-btn');
  if (langBtn) langBtn.textContent = rdLang() === 'ru' ? 'EN' : 'RU';
  var submitLink = document.getElementById('nav-submit-link');
  if (submitLink) submitLink.href = RD_FORM_URL[rdLang()];
  var submitBtn = document.getElementById('gl-submit-link');
  if (submitBtn) submitBtn.href = RD_FORM_URL[rdLang()];
  document.documentElement.lang = rdLang();
}

// Set the page language right away, before the body is drawn, so blocks
// marked .lang-ru / .lang-en never flash in the wrong language.
document.documentElement.lang = rdLang();
