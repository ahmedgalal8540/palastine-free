import type { Loc } from '../types'

export interface Region {
  id: string
  name: Loc
  area: Loc
  climate: Loc
  desc: Loc
}

export const regions: Region[] = [
  {
    id: 'coast',
    name: { ar: 'السهل الساحلي', en: 'Coastal Plain' },
    area: { ar: '≈ 40–50 كم عرضًا عند أوسع نقاطه', en: '≈ 40–50 km wide at its widest' },
    climate: { ar: 'متوسطي رطب', en: 'Humid Mediterranean' },
    desc: {
      ar: 'يمتد على الساحل الشرقي للبحر المتوسط من رأس الناقورة شمالًا إلى رفح جنوبًا، وأرضه خصبة وتربته رملية طينية، وعليه تقع يافا وغزة وقيسارية.',
      en: 'Stretches along the eastern Mediterranean shore from Ras al-Naqoura in the north to Rafah in the south, with fertile, sandy-loam soil; Jaffa, Gaza and Caesarea lie on it.',
    },
  },
  {
    id: 'mountains',
    name: { ar: 'جبال نابلس والقدس والخليل', en: 'Central Highlands (Nablus–Al-Quds–Hebron)' },
    area: { ar: 'ارتفاع 600–1,000 م', en: 'Elevation 600–1,000 m' },
    climate: { ar: 'جبلي معتدل', en: 'Temperate highland' },
    desc: {
      ar: 'سلسلة جبلية وسطى تضم أعلى القمم المأهولة، وفيها مدن نابلس ورام الله والقدس والخليل، وتُعرف بأرض الزيتون والكروم.',
      en: 'A central mountain spine holding the highest inhabited peaks, home to Nablus, Ramallah, Al-Quds and Hebron — the land of olives and vineyards.',
    },
  },
  {
    id: 'jordan-valley',
    name: { ar: 'غور الأردن', en: 'Jordan Valley (Ghor)' },
    area: { ar: 'حتى ‑430 م تحت سطح البحر', en: 'Down to −430 m below sea level' },
    climate: { ar: 'حار جاف', en: 'Hot and dry' },
    desc: {
      ar: 'أخفض بقاع الأرض على سطح الأرض عند البحر الميت (-430 م تقريبًا)، ومنطقة زراعية مهمة للموجات والتمور والخضار.',
      en: 'The lowest land on Earth’s surface at the Dead Sea (about -430 m); an important agricultural belt for bananas, dates and vegetables.',
    },
  },
  {
    id: 'galilee',
    name: { ar: 'الجليل', en: 'Galilee' },
    area: { ar: 'حتى 1,208 م (جبل الجرمق)', en: 'Up to 1,208 m (Jabal al-Jarmaq)' },
    climate: { ar: 'جبلي ممطر', en: 'Rainy highland' },
    desc: {
      ar: 'الشمال الجبلي الأخضر، وفيه جبل الجرمق أعلى قمم فلسطين، وبحيرة طبريا (البحيرة الجنوبية لأكبر ينابيعها).',
      en: 'The green northern highlands, home to Jabal al-Jarmaq (Mount Meron), Palestine’s highest peak, and Lake Tiberias.',
    },
  },
  {
    id: 'naqab',
    name: { ar: 'النقب', en: 'Naqab (Negev)' },
    area: { ar: '≈ 4,600 كم² تقريبًا داخل الخط الأخضر الجنوبي', en: '≈ 4,600 km² south of the Green Line' },
    climate: { ar: 'صحراوي', en: 'Desert' },
    desc: {
      ar: 'الصحراء الجنوبية المثلثة، تربط فلسطين بسيناء وجنوب الأردن، وسكانها البدو عرفوا زراعتها منذ آلاف السنين.',
      en: 'The southern triangular desert linking Palestine to Sinai and southern Jordan; its Bedouin inhabitants have farmed it for millennia.',
    },
  },
]

export interface BorderInfo {
  id: string
  side: Loc
  length: Loc
  note: Loc
}

export const borders: BorderInfo[] = [
  {
    id: 'med',
    side: { ar: 'البحر المتوسط (غربًا)', en: 'Mediterranean Sea (west)' },
    length: { ar: '≈ 224 كم ساحل', en: '≈ 224 km of coast' },
    note: {
      ar: 'ساحل بحري متوسطي يشكل الواجهة الغربية للسلط الساحلية.',
      en: 'A Mediterranean shoreline forming the western front of the coastal cities.',
    },
  },
  {
    id: 'lebanon',
    side: { ar: 'لبنان (شمالًا)', en: 'Lebanon (north)' },
    length: { ar: '≈ 79 كم', en: '≈ 79 km' },
    note: {
      ar: 'حدود شمالية جبلية تمتد من رأس الناقورة شرقًا.',
      en: 'A northern mountain boundary stretching east from Ras al-Naqoura.',
    },
  },
  {
    id: 'syria',
    side: { ar: 'سوريا (شمال شرقًا)', en: 'Syria (northeast)' },
    length: { ar: '≈ 76 كم', en: '≈ 76 km' },
    note: {
      ar: 'حدود شمال شرقية قصيرة فوق الجولان تلتقي بالحدود الأردنية.',
      en: 'A short northeastern boundary over the Golan meeting the Jordanian border.',
    },
  },
  {
    id: 'jordan',
    side: { ar: 'الأردن (شرقًا)', en: 'Jordan (east)' },
    length: { ar: '≈ 320 كم', en: '≈ 320 km' },
    note: {
      ar: 'يمتد على طول نهر الأردن والبحر الميت حتى وادي عربة.',
      en: 'Runs along the Jordan River and the Dead Sea down to Wadi Araba.',
    },
  },
  {
    id: 'egypt',
    side: { ar: 'مصر (جنوب غربًا)', en: 'Egypt (southwest)' },
    length: { ar: '≈ 210 كم', en: '≈ 210 km' },
    note: {
      ar: 'الحد الجنوبي الصحراوي من رفح إلى طابا على خليج العقبة.',
      en: 'The southern desert boundary from Rafah to Taba on the Gulf of Aqaba.',
    },
  },
  {
    id: 'aqaba',
    side: { ar: 'خليج العقبة (جنوبًا)', en: 'Gulf of Aqaba (south)' },
    length: { ar: '≈ 12 كم ساحل', en: '≈ 12 km of coast' },
    note: {
      ar: 'بوابة فلسطين البحرية الجنوبية عند مدينة العقبة/إيلات.',
      en: 'Palestine’s short southern sea gateway at Aqaba/Eilat.',
    },
  },
]

export interface WaterBody {
  id: string
  name: Loc
  type: Loc
  desc: Loc
}

export const waterBodies: WaterBody[] = [
  {
    id: 'dead-sea',
    name: { ar: 'البحر الميت', en: 'Dead Sea' },
    type: { ar: 'بحيرة مالحة', en: 'Salt lake' },
    desc: {
      ar: 'أخفض بقعة على سطح الأرض (نحو -430 م)، ومياهها شديدة الملوحة وعليها قيم سياحية وعلاجية.',
      en: 'The lowest point on Earth’s surface (about -430 m); extremely salty waters with touristic and therapeutic value.',
    },
  },
  {
    id: 'tiberias',
    name: { ar: 'بحيرة طبريا', en: 'Lake Tiberias' },
    type: { ar: 'بحيرة عذبة', en: 'Freshwater lake' },
    desc: {
      ar: 'أكبر بحيرة عذبة في فلسطين، تُعرف أيضًا ببحيرة الجليل وبحيرة كينروت، وتبلغ مساحتها نحو 165 كم².',
      en: 'Palestine’s largest freshwater lake, also called the Sea of Galilee or Lake Kinneret, about 165 km² in area.',
    },
  },
  {
    id: 'jordan-river',
    name: { ar: 'نهر الأردن', en: 'Jordan River' },
    type: { ar: 'نهر', en: 'River' },
    desc: {
      ar: 'أطول أنهار فلسطين الداخلية، ينبع من الحولا ويجري نحو 250 كم حتى يصب في البحر الميت.',
      en: 'Palestine’s longest internal river, rising near Lake Huleh and running about 250 km to the Dead Sea.',
    },
  },
  {
    id: 'zarqa',
    name: { ar: 'نهر الزرقاء (المقطع)', en: 'Zarqa River (course)' },
    type: { ar: 'نهر', en: 'River' },
    desc: {
      ar: 'نهر تاريخي في شمال فلسطين يصب في نهر الأردن جنوب بحيرة طبريا.',
      en: 'A historic northern river flowing into the Jordan south of Lake Tiberias.',
    },
  },
]

export interface ClimateZone {
  id: string
  name: Loc
  desc: Loc
}

export const climateZones: ClimateZone[] = [
  {
    id: 'med',
    name: { ar: 'مناخ متوسطي', en: 'Mediterranean climate' },
    desc: {
      ar: 'يسود السهل الساحلي والجبال الغربية: صيف حار رطب وشتاء بارد ممطر.',
      en: 'Prevails on the coastal plain and western slopes: hot humid summers and cool rainy winters.',
    },
  },
  {
    id: 'mountain',
    name: { ar: 'مناخ جبلي', en: 'Mountain climate' },
    desc: {
      ar: 'في المرتفعات الوسطى والشمالية، أبرد شتاءً مع تساقط ثلوج أحيانًا في القدس ونابلس.',
      en: 'In the central and northern highlands; colder winters with occasional snow in Jerusalem and Nablus.',
    },
  },
  {
    id: 'desert',
    name: { ar: 'مناخ صحراوي', en: 'Desert climate' },
    desc: {
      ar: 'في النقب وغور الأردن، أمطار قليلة وفروق حرارية كبيرة بين الليل والنهار.',
      en: 'In the Naqab and the Jordan Valley; scarce rain and large day-night temperature swings.',
    },
  },
  {
    id: 'tropical',
    name: { ar: 'مناخ شبه استوائي', en: 'Semi-tropical climate' },
    desc: {
      ar: 'في غور الأردن حيث تنمو الموج والتمور والقصب طوال العام.',
      en: 'In the Jordan Valley, where bananas, dates and sugarcane grow year-round.',
    },
  },
]

export const areaFacts: { label: Loc; value: Loc }[] = [
  { label: { ar: 'مساحة فلسطين التاريخية', en: 'Historic Palestine' }, value: { ar: '≈ 27,000 كم²', en: '≈ 27,000 km²' } },
  { label: { ar: 'الضفة الغربية', en: 'West Bank' }, value: { ar: '≈ 5,655 كم²', en: '≈ 5,655 km²' } },
  { label: { ar: 'قطاع غزة', en: 'Gaza Strip' }, value: { ar: '≈ 365 كم²', en: '≈ 365 km²' } },
  { label: { ar: 'أعلى قمة (الجرمق)', en: 'Highest peak (Jarmaq/Meron)' }, value: { ar: '1,208 م', en: '1,208 m' } },
  { label: { ar: 'أخفض نقطة (البحر الميت)', en: 'Lowest point (Dead Sea)' }, value: { ar: '-430 م', en: '−430 m' } },
]
