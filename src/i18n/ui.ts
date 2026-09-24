// Central UI dictionary — Arabic first, since it is the primary audience.
// Every user-visible string that is not long-form content lives here.
export const ui = {
  // App chrome
  appName: { ar: 'دليل فلسطين', en: 'Palestine Guide' },
  tagline: {
    ar: 'مرجع معرفي عن فلسطين: الأرض، الناس، التاريخ والثقافة',
    en: 'A knowledge reference about Palestine: the land, the people, history and culture',
  },
  skipToContent: { ar: 'تخطَّ إلى المحتوى', en: 'Skip to content' },
  home: { ar: 'الرئيسية', en: 'Home' },
  geography: { ar: 'الجغرافيا', en: 'Geography' },
  history: { ar: 'التاريخ', en: 'History' },
  culture: { ar: 'الثقافة', en: 'Culture' },
  figures: { ar: 'شخصيات', en: 'Figures' },
  quiz: { ar: 'اختبر معرفتك', en: 'Quiz' },
  about: { ar: 'حول', en: 'About' },
  menu: { ar: 'القائمة', en: 'Menu' },
  accentTheme: { ar: 'لون الموقع', en: 'Site color' },
  wholeLandTitle: { ar: 'خريطة الأرض كاملة', en: 'Map of the whole land' },
  wholeLandCaption: {
    ar: 'خريطة تفاعلية لفلسطين التاريخية من OpenStreetMap.',
    en: 'Interactive map of historic Palestine from OpenStreetMap.',
  },
  movementsTitle: { ar: 'الحركات السياسية', en: 'Political movements' },
  movementsLead: {
    ar: 'نبذة مرجعية محايدة عن أبرز الحركات السياسية الفلسطينية ومصادر موثوقة لمتابعتها.',
    en: 'A neutral reference overview of major Palestinian political movements, with trusted sources to follow.',
  },
  close: { ar: 'إغلاق', en: 'Close' },
  toggleTheme: { ar: 'تبديل المظهر', en: 'Toggle theme' },
  themeLight: { ar: 'نهاري', en: 'Light' },
  themeDark: { ar: 'ليلي', en: 'Dark' },
  language: { ar: 'اللغة', en: 'Language' },

  // Footer
  footerSource: {
    ar: 'محتوى تعليمي مرجعي مُجمَّع من مصادر عربية وتاريخية عامة.',
    en: 'Educational reference content compiled from Arabic and public historical sources.',
  },
  footerNote: {
    ar: 'صُنع بحب لإرضاء المعرفة الحرة — محتوى قابل للتعديل والتوسعة.',
    en: 'Made with care for free knowledge — content is editable and extensible.',
  },

  // Home page
  heroTitle: { ar: 'فلسطين', en: 'Palestine' },
  heroSubtitle: {
    ar: 'الأرض، الناس، والحكاية — معلومات موثوقة بلغتين',
    en: 'The land, the people, and the story — reliable information in two languages',
  },
  heroCta: { ar: 'استكشف الأرض', en: 'Explore the land' },
  heroCta2: { ar: 'اقرأ التاريخ', en: 'Read the history' },
  statLandArea: { ar: 'المساحة', en: 'Land area' },
  statPopulation: { ar: 'السكان', en: 'Population' },
  statGovernorates: { ar: 'المحافظات', en: 'Governorates' },
  statCities: { ar: 'مدن رئيسية', en: 'Major cities' },
  statCapital: { ar: 'العاصمة', en: 'Capital' },
  statFlag: { ar: 'العلم', en: 'Flag' },
  sections: { ar: 'أقسام الموقع', en: 'Site sections' },
  sectionsIntro: {
    ar: 'ابدأ من أي قسم — كل صفحة مستقلة ومفصلة.',
    en: 'Start from any section — each page is self-contained and detailed.',
  },
  latestStory: { ar: 'قسم مختار', en: 'Featured section' },
  readMore: { ar: 'اقرأ المزيد', en: 'Read more' },
  viewAll: { ar: 'عرض الكل', en: 'View all' },

  // Geography page
  geoTitle: { ar: 'جغرافيا الأرض', en: 'Geography of the land' },
  geoLead: {
    ar: 'فلسطين تقع في قلب المشرق العربي على الساحل الشرقي للبحر المتوسط، وتربط ثلاث قارات: آسيا وأفريقيا وأوروبا.',
    en: 'Palestine sits at the heart of the Levant on the eastern shore of the Mediterranean, linking three continents: Asia, Africa and Europe.',
  },
  regionsTitle: { ar: 'المناطق الطبيعية', en: 'Natural regions' },
  bordersTitle: { ar: 'الحدود الجغرافية', en: 'Geographic borders' },
  waterTitle: { ar: 'المياه والأنهار', en: 'Water and rivers' },
  climateTitle: { ar: 'المناخ', en: 'Climate' },
  mapTitle: { ar: 'خريطة تفاعلية', en: 'Interactive map' },
  mapHint: {
    ar: 'انقر على أي مدينة لعرض معلوماتها.',
    en: 'Click any city to view its details.',
  },
  selectedCity: { ar: 'المدينة المختارة', en: 'Selected city' },
  governorate: { ar: 'المحافظة', en: 'Governorate' },
  established: { ar: 'تأسست / ذُكرت', en: 'Established / first mentioned' },
  population: { ar: 'السكان', en: 'Population' },
  quickFacts: { ar: 'حقائق سريعة', en: 'Quick facts' },
  areaTable: { ar: 'مساحات تقريبية', en: 'Approximate areas' },
  bordersTable: { ar: 'الحدود والأطوال التقريبية', en: 'Borders and approximate lengths' },
  border: { ar: 'الحد', en: 'Border' },
  approxLength: { ar: 'الطول التقريبي', en: 'Approx. length' },
  waterBodies: { ar: 'مسطحات مائية', en: 'Water bodies' },
  climateZones: { ar: 'أقاليم مناخية', en: 'Climate zones' },

  // Flag page
  flagTitle: { ar: 'علم فلسطين', en: 'Flag of Palestine' },
  flagLead: {
    ar: 'العلم الفلسطيني مستوحى من ألوان الثورة العربية الكبرى 1916، واعتمد رسمه الحالي عام 1964.',
    en: 'The Palestinian flag draws on the colors of the 1916 Great Arab Revolt; its current form was adopted in 1964.',
  },
  flagMeaning: { ar: 'دلالة الألوان', en: 'Color meanings' },
  flagBlack: { ar: 'الأسود', en: 'Black' },
  flagWhite: { ar: 'الأبيض', en: 'White' },
  flagGreen: { ar: 'الأخضر', en: 'Green' },
  flagRed: { 'ar': 'الأحمر', en: 'Red' },
  flagHistoryTitle: { ar: 'لمحة تاريخية', en: 'Historical note' },
  flagHistory: {
    ar: 'اعتمد المؤتمر الفلسطيني في القدس علمًا ذا أشرطة أفقية (1917–1920)، ثم طُوّر الرسم حتى استقر على الشكل الحالي في 1964 بقرار منظمة التحرير الفلسطينية، ورفع في الأمم المتحدة بعد الاعتراف بمراقب دائم عام 1988.',
    en: 'The Palestinian Congress in Al-Quds raised a horizontal-striped flag (1917–1920); the design evolved until settling on the current form in 1964 by PLO decision, and it flew at the UN after permanent-observer recognition in 1988.',
  },
  flagSpecsTitle: { ar: 'المواصفات', en: 'Specifications' },
  flagRatio: { ar: 'نسبة العرض إلى الارتفاع 2:1', en: 'Aspect ratio 2:1' },
  emblemTitle: { ar: 'الشعار الوطني', en: 'National emblem' },
  emblemText: {
    ar: 'شعار سلطة/دولة فلسطين يعتمد النسر الصلاحي بلون السدة الذهبية على صدره نقش المسجد الأقصى.',
    en: 'The State of Palestine emblem features the Saladin eagle with the Dome of the Rock on its chest.',
  },
  anthemTitle: { ar: 'النشيد الوطني', en: 'National anthem' },
  anthemName: { ar: '«فدائي» — كلمات سعيد عقل، لحن علي إسماعيل', en: '“Fida’i” — lyrics Saeed al-Qas, music Ali Ismael' },
  nationalDay: { ar: 'اليوم الوطني', en: 'National day' },
  nationalDayVal: { ar: '15 نوفمبر — إعلان الاستقلال 1988', en: '15 November — Declaration of Independence 1988' },

  // History page
  violationsTitle: { ar: 'انتهاكات موثقة ضد المدنيين', en: 'Documented violations against civilians' },
  violationsLead: {
    ar: 'أحداث موثقة من تقارير الأمم المتحدة والمؤرخين. تُنسب الأفعال إلى قوات أو أحداث محددة، والأرقام منسوبة إلى مصادرها.',
    en: 'Incidents documented in UN reports and historical records. Acts are attributed to specific forces or events, and figures to their reporting sources.',
  },

  // News
  news: { ar: 'الأخبار', en: 'News' },
  newsLive: { ar: 'تحديث تلقائي مباشر', en: 'Auto-updating live feed' },
  newsOffline: {
    ar: 'تعذر الاتصال المباشر — روابط مصادر الأمم المتحدة والإغاثة.',
    en: 'Live feed unreachable — showing UN and relief source links.',
  },
  newsRefresh: { ar: 'تحديث', en: 'Refresh' },

  // Population page
  popTitle: { ar: 'الشعب والسكان', en: 'The people & population' },
  popLead: {
    ar: 'الشعب الفلسطيني هو سكان الأرض الفلسطينية منذ القدم، ويشكل تواجده اليوم واقعًا ديموغرافيًا فريدًا في الداخل والخارج.',
    en: 'The Palestinian people are the long-standing inhabitants of the land of Palestine; today they form a unique demographic reality at home and in the diaspora.',
  },
  homeland: { ar: 'في الأرض الفلسطينية', en: 'In the homeland (Palestine)' },
  diaspora: { ar: 'في الشتات', en: 'In the diaspora' },
  popInLand: {
    ar: 'يعيش اليوم قرابة 5.5 مليون فلسطيني في الأرض الفلسطينية (الضفة الغربية، القدس، قطاع غزة): نحو 3.3 مليون في الضفة وغزة وفق تقديرات الجهاز المركزي للإحصاء الفلسطيني، إضافة إلى سكان القدس وسائر الداخل.',
    en: 'Around 5.5 million Palestinians live in the Palestinian territory (West Bank, Al-Quds, Gaza Strip): roughly 3.3 million in the West Bank and Gaza per the Palestinian Central Bureau of Statistics, in addition to residents of Al-Quds and the rest of the interior.',
  },
  popDiaspora: {
    ar: 'يعيش أكثر من 6 ملايين فلسطيني مسجل لدى الأونروا في الأردن ولبنان وسوريا وغيرها، فضلًا عن ملايين آخرين حول العالم.',
    en: 'Over six million registered refugees live with UNRWA in Jordan, Lebanon, Syria and elsewhere, besides millions more worldwide.',
  },
  popHistoryNote: {
    ar: 'منذ أقدم العصور كان هذا الشعب يعمل أرضه ويحفر بئره ويغرس زيتونه.',
    en: 'Since earliest antiquity this people has tilled its land, dug its wells and planted its olive trees.',
  },
  sourceNote: { ar: 'ملاحظة المصادر', en: 'Source note' },
  citiesTitle: { ar: 'مدن فلسطين الرئيسية', en: 'Major cities of Palestine' },
  figuresTitle: { ar: 'شخصيات فلسطينية بارزة', en: 'Prominent Palestinian figures' },
  timelineTitle: { ar: 'محطات تاريخية', en: 'Historical milestones' },
  faqTitle: { ar: 'أسئلة شائعة', en: 'Frequently asked questions' },
  faqLead: {
    ar: 'إجابات موجزة عن أكثر الأسئلة تداولًا حول فلسطين.',
    en: 'Brief answers to the most commonly asked questions about Palestine.',
  },
  quizIntro: {
    ar: 'عشرة أسئلة سريعة لقياس معرفتك بالأرض والثقافة.',
    en: 'Ten quick questions to measure your knowledge of the land and culture.',
  },
  startQuiz: { ar: 'ابدأ الاختبار', en: 'Start quiz' },
  nextQuestion: { ar: 'السؤال التالي', en: 'Next question' },
  yourScore: { ar: 'نتيجتك', en: 'Your score' },
  tryAgain: { ar: 'أعد المحاولة', en: 'Try again' },
  quizPerfect: { ar: 'ممتاز! معرفة موثوقة بالأرض.', en: 'Excellent! Solid knowledge of the land.' },
  quizGood: { ar: 'جيد جدًا — استمر في الاستكشاف.', en: 'Very good — keep exploring.' },
  quizOk: { ar: 'بداية طيبة، اقرأ الأقسام ثم أعد المحاولة.', en: 'A good start; read the sections and try again.' },

  aboutTitle: { ar: 'حول هذا الدليل', en: 'About this guide' },
  aboutGoal: { ar: 'الهدف', en: 'Goal' },
  aboutGoalText: {
    ar: 'تقديم معلومات حقيقية ومنظمة عن فلسطين — أرضها وشعبها وتاريخها وثقافتها — بلغة واضحة وباللغتين العربية والإنجليزية، ليكون مرجعًا قابلًا للتوسعة.',
    en: 'To present organized, truthful information about Palestine — its land, people, history and culture — in clear language, in both Arabic and English, as an extensible reference.',
  },
  aboutEdit: { ar: 'كيف تعدل المحتوى لاحقًا', en: 'How to edit content later' },
  aboutEditList: {
    ar: 'كل النصوص في ملفات واضحة: النصوص الواجهية في src/i18n/ui.ts، والمحتوى المعرفي في src/data/*.ts. أضف عنصرًا جديدًا إلى أي مصفوفة (مدينة، شخصية، حدث، سؤال) وسيظهر تلقائيًا.',
    en: 'All text lives in clear files: UI strings in src/i18n/ui.ts, knowledge content in src/data/*.ts. Add an item to any array (city, figure, event, question) and it appears automatically.',
  },
  flag: { ar: 'العلم', en: 'Flag' },

  // Search
  searchOpen: { ar: 'ابحث في الدليل', en: 'Search the guide' },
  searchPlaceholder: { ar: 'اكتب: القدس، الزيتون، درويش…', en: 'Try: Al-Quds, olive, Darwish…' },
  searchEmpty: { ar: 'لا نتائج مطابقة.', en: 'No matching results.' },
  searchTypePage: { ar: 'صفحة', en: 'Page' },
  searchTypeCity: { ar: 'مدينة', en: 'City' },
  searchTypeFigure: { ar: 'شخصية', en: 'Figure' },
  searchTypeEvent: { ar: 'حدث', en: 'Event' },
  searchTypeCulture: { ar: 'ثقافة', en: 'Culture' },
  searchTypeGeo: { ar: 'جغرافيا', en: 'Geography' },
  searchTypeFaq: { ar: 'سؤال', en: 'Question' },
  recentSearches: { ar: 'عمليات بحث سابقة', en: 'Recent searches' },

  // Interactive map
  hoverHint: {
    ar: 'مرّر المؤشر فوق أي مدينة، أو انقر عليها لعرض معلوماتها.',
    en: 'Hover over any city, or click it to view its details.',
  },
  searchCities: { ar: 'ابحث عن مدينة…', en: 'Search cities…' },
  clearSelection: { ar: 'مسح الاختيار', en: 'Clear selection' },
  citiesCount: { ar: 'مدينة معروضة', en: 'cities shown' },
  mapLegendTitle: { ar: 'مفتاح الخريطة', en: 'Map legend' },
  schematicNote: {
    ar: 'خريطة تخطيطية غير مرسومة بمقياس — المواقع تقريبية.',
    en: 'Schematic map, not to scale — locations are approximate.',
  },
  showMore: { ar: 'اعرض المزيد', en: 'Show more' },
  cityDetailsTitle: { ar: 'تفاصيل المدينة', en: 'City details' },

  // Flag explorer
  flagHint: {
    ar: 'مرّر المؤشر فوق أجزاء العلم أو انقر عليها لاستكشاف دلالة كل لون.',
    en: 'Hover over or tap the parts of the flag to explore each color’s meaning.',
  },
  flagPaletteTitle: { ar: 'لوحة الألوان', en: 'Color palette' },
  flagProtocolTitle: { ar: 'آداب رفع العلم', en: 'Flag protocol' },

  // Quiz
  quizRoundInfo: {
    ar: '١٠ أسئلة عشوائية من بنك أكبر — كل جولة مختلفة عن سابقتها!',
    en: '10 random questions from a bigger bank — every round is different!',
  },
  quizBankSize: { ar: 'بنك الأسئلة', en: 'Question bank' },
  quizCorrect: { ar: 'إجابة صحيحة!', en: 'Correct!' },
  quizWrong: { ar: 'إجابة غير صحيحة', en: 'Not quite' },

  // Scroll to top
  scrollTop: { ar: 'أعلى الصفحة', en: 'Back to top' },

  // About page
  missionTitle: { ar: 'رسالتنا', en: 'Our mission' },
  missionText: {
    ar: 'أن يكون هذا الدليل نافذة موثوقة على فلسطين: أرضًا وشعبًا وتاريخًا وثقافة، يُروى بلغة واضحة وباللغتين العربية والإنجليزية، ويصل إلى أي باحث أو زائر أو مهتم في أي مكان في العالم.',
    en: 'To be a trustworthy window onto Palestine — land, people, history and culture — told clearly in both Arabic and English, reachable by any researcher, visitor or curious mind anywhere in the world.',
  },
  audienceTitle: { ar: 'لمن هذا الدليل؟', en: 'Who is this guide for?' },
  audienceText: {
    ar: 'للطالب الذي يبحث، للزائر الذي يخطط، للمنحدر من فلسطين الذي يريد أن يبقي لغته وذاكرته حية، ولكل صديق جديد للقضية يريد المعلومة الصحيحة من مصدر منظم.',
    en: 'For the student researching, the visitor planning, the person of Palestinian heritage keeping language and memory alive, and every new friend seeking accurate, organized information.',
  },
  sourcesTitle: { ar: 'مصادرنا', en: 'Our sources' },
  sourcesIntro: {
    ar: 'يُبنى المحتوى على مراجع عربية ودولية عامة، ومن أبرزها:',
    en: 'Content builds on Arabic and international public references, most notably:',
  },
  notFound: { ar: 'الصفحة غير موجودة', en: 'Page not found' },
  backHome: { ar: 'العودة للرئيسية', en: 'Back home' },
} as const

export type UIKey = keyof typeof ui
