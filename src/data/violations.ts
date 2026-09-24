import type { Loc } from '../types'

export interface ViolationRecord {
  id: string
  year: Loc
  title: Loc
  text: Loc
  /** Short attribution, e.g. UN reports / historians. */
  source: Loc
}

/**
 * Documented incidents of violence against Palestinian civilians, as reported
 * by UN bodies and historians. Wording attributes acts to specific forces or
 * events — never to peoples — and casualty figures are attributed to their
 * reporting sources.
 */
export const violations: ViolationRecord[] = [
  {
    id: 'nakba-1948',
    year: { ar: '1948', en: '1948' },
    title: { ar: 'النكبة: التهجير الجماعي', en: 'The Nakba: mass displacement' },
    text: {
      ar: 'أكثر من 750 ألف فلسطيني هُجّروا قسرًا ودُمّرت نحو 530 قرية وبلدة، وفق مؤرخين ووكالات الأمم المتحدة.',
      en: 'Over 750,000 Palestinians were forcibly displaced and about 530 villages and towns destroyed, according to historians and UN agencies.',
    },
    source: { ar: 'المصدر: مؤرخون والأمم المتحدة', en: 'Source: historians & the UN' },
  },
  {
    id: 'deir-yassin',
    year: { ar: '9 أبريل 1948', en: '9 April 1948' },
    title: { ar: 'دير ياسين', en: 'Deir Yassin' },
    text: {
      ar: 'قوات منظمتي الأرغون وشتيرن شبه العسكريتين قتلت أكثر من 100 من سكان القرية، وفق تقارير تاريخية وشهادات ناجين.',
      en: 'Irgun and Lehi paramilitaries killed over 100 villagers, according to historical reports and survivor testimonies.',
    },
    source: { ar: 'المصدر: تقارير تاريخية', en: 'Source: historical reports' },
  },
  {
    id: 'qibya-1953',
    year: { ar: 'أكتوبر 1953', en: 'October 1953' },
    title: { ar: 'قبية', en: 'Qibya' },
    text: {
      ar: 'وحدة عسكرية إسرائيلية (الوحدة 101) داهمت القرية وقتلت نحو 69 مدنيًا، وأدان مجلس الأمن الدولي الهجوم.',
      en: 'An Israeli military unit (Unit 101) raided the village killing about 69 civilians; the UN Security Council condemned the attack.',
    },
    source: { ar: 'المصدر: مجلس الأمن الدولي', en: 'Source: UN Security Council' },
  },
  {
    id: 'sabra-shatila',
    year: { ar: 'سبتمبر 1982', en: 'September 1982' },
    title: { ar: 'صبرا وشاتيلا', en: 'Sabra and Shatila' },
    text: {
      ar: 'ميليشيا الكتائب اللبنانية قتلت مئات اللاجئين الفلسطينيين في المخيمين بينما كانت المنطقة تحت السيطرة الإسرائيلية؛ الأمم المتحدة أدانت المجزرة.',
      en: 'Lebanese Phalangist militia killed hundreds of Palestinian refugees in the two camps while the area was under Israeli control; the UN condemned the massacre.',
    },
    source: { ar: 'المصدر: الأمم المتحدة', en: 'Source: the UN' },
  },
  {
    id: 'ibrahimi-1994',
    year: { ar: 'فبراير 1994', en: 'February 1994' },
    title: { ar: 'الحرم الإبراهيمي', en: 'Ibrahimi Mosque' },
    text: {
      ar: 'مستوطن مسلح قتل 29 مصليًا فلسطينيًا في الحرم الإبراهيمي بالخليل؛ مجلس الأمن أدان المجزرة.',
      en: 'An armed settler killed 29 Palestinian worshippers at the Ibrahimi Mosque in Hebron; the Security Council condemned the massacre.',
    },
    source: { ar: 'المصدر: مجلس الأمن الدولي', en: 'Source: UN Security Council' },
  },
  {
    id: 'jenin-2002',
    year: { ar: 'أبريل 2002', en: 'April 2002' },
    title: { ar: 'مخيم جنين', en: 'Jenin camp' },
    text: {
      ar: 'عملية عسكرية إسرائيلية في المخيم قتلت عشرات الفلسطينيين ودمّرت مئات المنازل، وفق تقرير الأمم المتحدة لتقصي الحقائق.',
      en: 'An Israeli military operation in the camp killed dozens of Palestinians and destroyed hundreds of homes, per the UN fact-finding report.',
    },
    source: { ar: 'المصدر: تقرير الأمم المتحدة', en: 'Source: UN report' },
  },
  {
    id: 'gaza-wars',
    year: { ar: '2008–2021', en: '2008–2021' },
    title: { ar: 'حروب غزة المتكررة', en: 'Repeated Gaza wars' },
    text: {
      ar: 'عمليات عسكرية إسرائيلية على قطاع غزة (2008–09، 2012، 2014، 2021) قتلت آلاف المدنيين وشردت مئات الآلاف، وفق مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية.',
      en: 'Israeli military operations on the Gaza Strip (2008–09, 2012, 2014, 2021) killed thousands of civilians and displaced hundreds of thousands, per UN OCHA.',
    },
    source: { ar: 'المصدر: أوتشا (الأمم المتحدة)', en: 'Source: UN OCHA' },
  },
  {
    id: 'gaza-2023',
    year: { ar: '2023–الآن', en: '2023–present' },
    title: { ar: 'حرب غزة المستمرة', en: 'Ongoing Gaza war' },
    text: {
      ar: 'منذ أكتوبر 2023 قُتل عشرات الآلاف ونزح معظم سكان القطاع، وفق سلطات الصحة في غزة والأمم المتحدة؛ محكمة العدل الدولية تنظر في قضية ذات صلة.',
      en: 'Since October 2023, tens of thousands have reportedly been killed and most of the Strip’s population displaced, per Gaza health authorities and the UN; the ICJ is hearing a related case.',
    },
    source: { ar: 'المصدر: الأمم المتحدة وسلطات الصحة', en: 'Source: UN & health authorities' },
  },
]
