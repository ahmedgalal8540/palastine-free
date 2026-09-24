import type { Loc } from '../types'

export interface QuizQuestion {
  id: string
  q: Loc
  options: Loc[]
  correct: number // index into options
}

/** 24-question bank — rounds draw 10 at random with shuffled options. */
export const quizQuestions: QuizQuestion[] = [
  {
    id: 'capital',
    q: { ar: 'ما عاصمة فلسطين؟', en: 'What is the capital of Palestine?' },
    options: [
      { ar: 'رام الله', en: 'Ramallah' },
      { ar: 'القدس', en: 'Al-Quds' },
      { ar: 'غزة', en: 'Gaza' },
      { ar: 'بيت لحم', en: 'Bethlehem' },
    ],
    correct: 1,
  },
  {
    id: 'oldest-city',
    q: { ar: 'ما أقدم مدينة مأهولة في العالم وتقع في فلسطين؟', en: 'Which of the world’s oldest inhabited cities lies in Palestine?' },
    options: [
      { ar: 'أريحا', en: 'Jericho' },
      { ar: 'نابلس', en: 'Nablus' },
      { ar: 'عكا', en: 'Acre' },
      { ar: 'الخليل', en: 'Hebron' },
    ],
    correct: 0,
  },
  {
    id: 'lowest-point',
    q: { ar: 'ما أخفض بقعة على سطح الأرض وتقع في فلسطين؟', en: 'Which Earth-lowest point lies in Palestine?' },
    options: [
      { ar: 'بحيرة طبريا', en: 'Lake Tiberias' },
      { ar: 'وادي عربة', en: 'Wadi Araba' },
      { ar: 'البحر الميت', en: 'The Dead Sea' },
      { ar: 'غور الأردن', en: 'The Jordan Valley' },
    ],
    correct: 2,
  },
  {
    id: 'flag-colors',
    q: { ar: 'كم عدد ألوان العلم الفلسطيني؟', en: 'How many colors are on the Palestinian flag?' },
    options: [
      { ar: 'ثلاثة', en: 'Three' },
      { ar: 'خمسة', en: 'Five' },
      { ar: 'ستة', en: 'Six' },
      { ar: 'أربعة', en: 'Four' },
    ],
    correct: 3,
  },
  {
    id: 'highest-peak',
    q: { ar: 'ما أعلى قمة في فلسطين؟', en: 'What is Palestine’s highest peak?' },
    options: [
      { ar: 'جبل جرزيم', en: 'Mount Gerizim' },
      { ar: 'جبل الجرمق', en: 'Jabal al-Jarmaq (Meron)' },
      { ar: 'جبل الكرمل', en: 'Mount Carmel' },
      { ar: 'جبل الصوانة', en: 'Jabal al-Sawana' },
    ],
    correct: 1,
  },
  {
    id: 'national-dish',
    q: { ar: 'ما الطبق الوطني الفلسطيني؟', en: 'What is Palestine’s national dish?' },
    options: [
      { ar: 'المقلوبة', en: 'Maqluba' },
      { ar: 'الحمص', en: 'Hummus' },
      { ar: 'المسخن', en: 'Musakhan' },
      { ar: 'الكنافة', en: 'Knafeh' },
    ],
    correct: 2,
  },
  {
    id: 'national-tree',
    q: { ar: 'ما الشجرة الوطنية لفلسطين؟', en: 'What is Palestine’s national tree?' },
    options: [
      { ar: 'الزيتون', en: 'The olive tree' },
      { ar: 'النخلة', en: 'The palm' },
      { ar: 'الصنوبر', en: 'The pine' },
      { ar: 'اللوز', en: 'The almond' },
    ],
    correct: 0,
  },
  {
    id: 'balfour',
    q: { ar: 'في أي عام صدر وعد بلفور؟', en: 'In which year was the Balfour Declaration issued?' },
    options: [
      { ar: '1922', en: '1922' },
      { ar: '1917', en: '1917' },
      { ar: '1936', en: '1936' },
      { ar: '1948', en: '1948' },
    ],
    correct: 1,
  },
  {
    id: 'declaration',
    q: { ar: 'في أي عام أُعلنت دولة فلسطين؟', en: 'In which year was the State of Palestine declared?' },
    options: [
      { ar: '1993', en: '1993' },
      { ar: '1948', en: '1948' },
      { ar: '1964', en: '1964' },
      { ar: '1988', en: '1988' },
    ],
    correct: 3,
  },
  {
    id: 'tatreez',
    q: { ar: 'ما اسم التطريز الفلسطيني التقليدي؟', en: 'What is the traditional Palestinian embroidery called?' },
    options: [
      { ar: 'الدبكة', en: 'Dabke' },
      { ar: 'الزغاريد', en: 'Zaghareet' },
      { ar: 'التطريز', en: 'Tatreez' },
      { ar: 'العتابا', en: 'Ataba' },
    ],
    correct: 2,
  },
  {
    id: 'hattin',
    q: { ar: 'في أي عام حرر صلاح الدين القدس؟', en: 'In which year did Saladin liberate Jerusalem?' },
    options: [
      { ar: '1187', en: '1187' },
      { ar: '1099', en: '1099' },
      { ar: '1258', en: '1258' },
      { ar: '636', en: '636' },
    ],
    correct: 0,
  },
  {
    id: 'jaffa-orange',
    q: { ar: 'بأي فاكهة اشتهرت مدينة يافا تاريخيًا؟', en: 'Which fruit was historic Jaffa famous for?' },
    options: [
      { ar: 'التمر', en: 'Dates' },
      { ar: 'البرتقال', en: 'The orange' },
      { ar: 'التين', en: 'Figs' },
      { ar: 'المشمش', en: 'Apricots' },
    ],
    correct: 1,
  },
  {
    id: 'knafeh-city',
    q: { ar: 'من أي مدينة تشتهر الكنافة؟', en: 'Which city is knafeh famous from?' },
    options: [
      { ar: 'الخليل', en: 'Hebron' },
      { ar: 'غزة', en: 'Gaza' },
      { ar: 'نابلس', en: 'Nablus' },
      { ar: 'حيفا', en: 'Haifa' },
    ],
    correct: 2,
  },
  {
    id: 'unrwa',
    q: { ar: 'ما وكالة الأمم المتحدة التي تخدم اللاجئين الفلسطينيين؟', en: 'Which UN agency serves Palestinian refugees?' },
    options: [
      { ar: 'اليونيسف', en: 'UNICEF' },
      { ar: 'الأونروا', en: 'UNRWA' },
      { ar: 'اليونسكو', en: 'UNESCO' },
      { ar: 'برنامج الأغذية', en: 'WFP' },
    ],
    correct: 1,
  },
  {
    id: 'gaza-hashim',
    q: { ar: 'بأي اسم تاريخي عُرفت غزة نسبة إلى جد النبي ﷺ؟', en: 'By which historic name was Gaza known, after the Prophet’s ancestor?' },
    options: [
      { ar: 'غزة هاشم', en: 'Gaza Hashim' },
      { ar: 'غزة الفيحاء', en: 'Gaza al-Fayha' },
      { ar: 'غزة العميد', en: 'Gaza al-Ameed' },
      { ar: 'غزة السلام', en: 'Gaza al-Salam' },
    ],
    correct: 0,
  },
  {
    id: 'dead-sea-depth',
    q: { ar: 'كم يبلغ انخفاض البحر الميت عن سطح البحر تقريبًا؟', en: 'Roughly how far below sea level is the Dead Sea?' },
    options: [
      { ar: '430 مترًا', en: '430 meters' },
      { ar: '120 مترًا', en: '120 meters' },
      { ar: '880 مترًا', en: '880 meters' },
      { ar: '2,000 متر', en: '2,000 meters' },
    ],
    correct: 0,
  },
  {
    id: 'nakba-year',
    q: { ar: 'في أي عام وقعت النكبة؟', en: 'In which year did the Nakba occur?' },
    options: [
      { ar: '1967', en: '1967' },
      { ar: '1936', en: '1936' },
      { ar: '1948', en: '1948' },
      { ar: '1982', en: '1982' },
    ],
    correct: 2,
  },
  {
    id: 'first-intifada',
    q: { ar: 'في أي عام اندلعت انتفاضة الحجارة الأولى؟', en: 'In which year did the First Intifada begin?' },
    options: [
      { ar: '1987', en: '1987' },
      { ar: '1993', en: '1993' },
      { ar: '2000', en: '2000' },
      { ar: '1982', en: '1982' },
    ],
    correct: 0,
  },
  {
    id: 'jerusalem-site',
    q: { ar: 'ما أقدم موقع ديني في القدس المسجل في اليونسكو؟', en: 'Which Jerusalem site is on the UNESCO list?' },
    options: [
      { ar: 'بلدة القدس القديمة', en: 'The Old City of Jerusalem' },
      { ar: 'جبل الزيتون', en: 'Mount of Olives' },
      { ar: 'محمودية القدس', en: 'Jerusalem market' },
      { ar: 'وادي القدس', en: 'Jerusalem valley' },
    ],
    correct: 0,
  },
  {
    id: 'dabke',
    q: { ar: 'ما اسم الرقصة الشعبية الفلسطينية الجماعية؟', en: 'What is the Palestinian folk line-dance called?' },
    options: [
      { ar: 'الدبكة', en: 'Dabke' },
      { ar: 'السامري', en: 'Samri' },
      { ar: 'العرضا', en: 'Ardah' },
      { ar: 'الكباش', en: 'Kabash' },
    ],
    correct: 0,
  },
  {
    id: 'olive-season',
    q: { ar: 'في أي فصل يتم قطف الزيتون في فلسطين؟', en: 'In which season is the olive harvested in Palestine?' },
    options: [
      { ar: 'الربيع', en: 'Spring' },
      { ar: 'الخريف', en: 'Autumn' },
      { ar: 'الصيف', en: 'Summer' },
      { ar: 'الشتاء', en: 'Winter' },
    ],
    correct: 1,
  },
  {
    id: 'hebron-glass',
    q: { ar: 'أي مدينة تشتهر بصناعة الزجاج المعشق؟', en: 'Which city is famed for stained glass?' },
    options: [
      { ar: 'نابلس', en: 'Nablus' },
      { ar: 'الخليل', en: 'Hebron' },
      { ar: 'يافا', en: 'Jaffa' },
      { ar: 'بيت لحم', en: 'Bethlehem' },
    ],
    correct: 1,
  },
  {
    id: 'un-status',
    q: { ar: 'ما وضع فلسطين في الأمم المتحدة منذ 2012؟', en: 'What is Palestine’s UN status since 2012?' },
    options: [
      { ar: 'عضو كامل', en: 'Full member' },
      { ar: 'دولة مراقب غير عضو', en: 'Non-member observer state' },
      { ar: 'لا علاقة لها', en: 'No status' },
      { ar: 'عضو مؤقت', en: 'Temporary member' },
    ],
    correct: 1,
  },
  {
    id: 'canaanite-meaning',
    q: { ar: 'ما الحرفة التي برع فيها الكنعانيون على الساحل؟', en: 'Which craft were the coastal Canaanites (Phoenicians) famed for?' },
    options: [
      { ar: 'السفن والملاحة', en: 'Ships & navigation' },
      { ar: 'التعدين', en: 'Mining' },
      { ar: 'الخيول', en: 'Horses' },
      { ar: 'الحرير', en: 'Silk' },
    ],
    correct: 0,
  },
]
