// Raft & Draft — shared language layer
// Toggle reloads the page on purpose: dynamic Supabase content (dates, type
// labels, pluralization) is safer to re-render from scratch than to patch in place.

const RD_FORM_URL = {
  ru: 'https://forms.gle/35KAnAGAopDRZnUy6',
  en: 'REPLACE_WITH_ENGLISH_FORM_URL'
};

const RD_TYPE_LABEL = {
  ru: { 'Проза':'Проза', 'Поэзия':'Поэзия', 'Сценарий':'Сценарий', 'Пьеса':'Пьеса', 'Статья':'Статья', 'Эссе':'Эссе' },
  en: { 'Проза':'Prose', 'Поэзия':'Poetry', 'Сценарий':'Screenplay', 'Пьеса':'Play', 'Статья':'Article', 'Эссе':'Essay' }
};

const RD_STR = {
  ru: {
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
    // about page
    ab_title: 'О журнале',
    ab_role: 'основатель и главный редактор',
    ab_journal_label: 'О журнале',
  },
  en: {
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
    ab_title: 'About the journal',
    ab_role: 'founder & editor in chief',
    ab_journal_label: 'About the journal',
  }
};

function rdLang() {
  return localStorage.getItem('rd_lang') === 'en' ? 'en' : 'ru';
}
function rdT(key) {
  return RD_STR[rdLang()][key] || key;
}
function rdTypeLabel(ruValue) {
  return RD_TYPE_LABEL[rdLang()][ruValue] || ruValue;
}
function rdToggleLang() {
  localStorage.setItem('rd_lang', rdLang() === 'ru' ? 'en' : 'ru');
  location.reload();
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
