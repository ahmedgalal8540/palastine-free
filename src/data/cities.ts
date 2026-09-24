import type { City } from '../types'

export const cities: City[] = [
  {
    id: 'jerusalem',
    name: { ar: 'القدس', en: 'Al-Quds' },
    governorate: { ar: 'محافظة القدس', en: 'Al-Quds Governorate' },
    established: { ar: '~3000 ق.م', en: '~3000 BCE' },
    population: { ar: '≈ 360 ألف فلسطيني في المدينة وما حولها', en: '≈ 360,000 Palestinians in the city and surroundings' },
    coords: { x: 62, y: 52 },
    blurb: {
      ar: 'العاصمة التاريخية وقلب فلسطين الروحي والإداري، وفيها الأقصى وقبة الصخرة وأسوارها التاريخية.',
      en: 'The historic capital and spiritual heart of Palestine, home to Al-Aqsa, the Dome of the Rock and the Old City walls.',
    },
    photo: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Jerusalem_DomeoftheRock_J65_%28cropped%29.JPG',
      credit: 'Wikimedia Commons',
    },
    facts: [
      { ar: 'من أقدم المدن المأهولة باستمرار في العالم.', en: 'One of the oldest continuously inhabited cities in the world.' },
      { ar: 'تضم الحرم القدسي/المسجد الأقصى، ثالث الحرمين في الإسلام.', en: 'Holds Al-Aqsa / Haram al-Sharif, Islam’s third holiest site.' },
      { ar: 'سورها القديم مسجل على قائمة التراث العالمي لليونسكو.', en: 'Its Old City is on the UNESCO World Heritage list.' },
    ],
  },
  {
    id: 'jaffa',
    name: { ar: 'يافا', en: 'Jaffa' },
    governorate: { ar: 'محافظة يافا', en: 'Jaffa District' },
    established: { ar: '~1800 ق.م', en: '~1800 BCE' },
    population: { ar: '≈ 30 ألف فلسطيني داخل يافا اليوم', en: '≈ 30,000 Palestinians in Jaffa today' },
    coords: { x: 44, y: 58 },
    blurb: {
      ar: 'بوابة فلسطين البحرية التاريخية وميناء يافا العريق، وأخت القدس البحرية.',
      en: 'Palestine’s historic sea gateway and the ancient port of Jaffa, sister to Al-Quds on the coast.',
    },
    photo: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/ISR-2013-Aerial-Jaffa-Port_of_Jaffa.jpg',
      credit: 'Wikimedia Commons (aerial)',
    },
    facts: [
      { ar: 'من أقدم الموانئ المأهولة في العالم.', en: 'One of the oldest working ports in the world.' },
      { ar: 'اشتهرت بزراعة البرتقال منذ القرن التاسع عشر.', en: 'Famed for its Jaffa orange since the 19th century.' },
      { ar: 'ارتبط اسمها بأدب وأغاني فلسطين الحديثة.', en: 'Its name is woven into modern Palestinian literature and song.' },
    ],
  },
  {
    id: 'gaza',
    name: { ar: 'غزة', en: 'Gaza' },
    governorate: { ar: 'محافظة غزة', en: 'Gaza Governorate' },
    established: { ar: '~1500 ق.م', en: '~1500 BCE' },
    population: { ar: '≈ 700 ألف في المحافظة', en: '≈ 700,000 in the governorate' },
    coords: { x: 40, y: 84 },
    blurb: {
      ar: 'أكبر مدن السهل الساحلي الجنوبي ومركز ثقافي واقتصادي لجنوب فلسطين.',
      en: 'The largest city of the southern coastal plain and a cultural and economic center of southern Palestine.',
    },
    photo: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/%D8%A7%D9%84%D9%85%D8%B3%D8%AC%D8%AF_%D8%A7%D9%84%D8%B9%D9%85%D8%B1%D9%8A_%D8%A7%D9%84%D9%83%D8%A8%D9%8A%D8%B1_%D9%81%D9%8A_%D8%BA%D8%B2%D8%A9_%D8%A8%D8%B9%D8%AF_%D8%A7%D9%84%D9%82%D8%B5%D9%81_%D9%88%D8%A7%D9%84%D8%AF%D9%85%D8%A7%D8%B1.jpg',
      credit: 'Wikimedia Commons (Great Omari Mosque, Gaza)',
    },
    facts: [
      { ar: 'سُميت «غزة هاشم» نسبة إلى هاشم بن عبد مناف جد النبي ﷺ.', en: 'Called “Gaza Hashim” after Hashim ibn Abd Manaf, great-grandfather of the Prophet ﷺ.' },
      { ar: 'ميناؤها من أقدم الموانئ الفلسطينية العاملة.', en: 'Its port is among Palestine’s oldest working seaports.' },
      { ar: 'تشتهر بالخزف والنسيج وسوقها القديم.', en: 'Known for pottery, weaving and its old souk.' },
    ],
  },
  {
    id: 'nablus',
    name: { ar: 'نابلس', en: 'Nablus' },
    governorate: { ar: 'محافظة نابلس', en: 'Nablus Governorate' },
    established: { ar: '~72 م (نيابوليس)', en: '~72 CE (Neapolis)' },
    population: { ar: '≈ 160 ألف', en: '≈ 160,000' },
    coords: { x: 60, y: 34 },
    blurb: {
      ar: '«جبل النار» ومركز الصناعة والتجارة الشمالية، وموطن الكنافة النابلسية.',
      en: '“Jabal al-Nar” (Mount of Fire), the industrial and commercial hub of the north, home of knafeh.',
    },
    photo: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Nablus_2013.jpg',
      credit: 'Wikimedia Commons',
    },
    facts: [
      { ar: 'تأسست باسم «نيابوليس» في العهد الروماني.', en: 'Founded as “Neapolis” in the Roman era.' },
      { ar: 'جبلا جرزيم وعيال يطلان عليها.', en: 'Mounts Gerizim and Ebal overlook it.' },
      { ar: 'صابونها النابلسي مشهور منذ قرون.', en: 'Its famed soap has been crafted for centuries.' },
    ],
  },
  {
    id: 'hebron',
    name: { ar: 'الخليل', en: 'Hebron' },
    governorate: { ar: 'محافظة الخليل', en: 'Hebron Governorate' },
    established: { ar: '~2000 ق.م', en: '~2000 BCE' },
    population: { ar: '≈ 200 ألف', en: '≈ 200,000' },
    coords: { x: 58, y: 68 },
    blurb: {
      ar: 'مدينة إبراهيم الخليل وعاصمة العنب والزبيب والزجاج المعروف بالخليلي.',
      en: 'The city of Ibrahim al-Khalil and the capital of grapes, raisins and the famed Hebron glass.',
    },
    photo: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Hebron_Cave_of_the_Patriarchs.jpg',
      credit: 'Wikimedia Commons (Ibrahimi Mosque / Cave of the Patriarchs)',
    },
    facts: [
      { ar: 'فيها الحرم الإبراهيمي الشريف.', en: 'Home of the Ibrahimi Mosque (Sanctuary of Abraham).' },
      { ar: 'أشهر مصنّع للزجاج المعشق والفخار في فلسطين.', en: 'Palestine’s best-known center of stained glass and ceramics.' },
      { ar: 'سوقها القديم من أقدم الأسواق العاملة.', en: 'Its old souk is among the oldest working markets.' },
    ],
  },
  {
    id: 'haifa',
    name: { ar: 'حيفا', en: 'Haifa' },
    governorate: { ar: 'محافظة حيفا', en: 'Haifa District' },
    established: { ar: '~300 ق.م', en: '~300 BCE' },
    population: { ar: '≈ 100 ألف فلسطيني داخل حيفا اليوم', en: '≈ 100,000 Palestinians in Haifa today' },
    coords: { x: 52, y: 30 },
    blurb: {
      ar: '«عروس فلسطين» الساحلية وميناؤها الشمالي الكبير على سفح جبل الكرمل.',
      en: '“Bride of Palestine”, its great northern port on the slopes of Mount Carmel.',
    },
    photo: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/The_Hanging_Gardens_of_Haifa%2C_Israel_%2850099173503%29_%28cropped%29.jpg',
      credit: 'Wikimedia Commons',
    },
    facts: [
      { ar: 'جبل الكرمل يطل على المدينة والخليج.', en: 'Mount Carmel overlooks the city and its bay.' },
      { ar: 'ازدهرت في الزراعة والصناعة والسكك الحديدية.', en: 'Flourished in farming, industry and railways.' },
      { ar: 'من مواطن أميل حبيبي وشعرية الناصرية.', en: 'Home city of Emile Habibi and Samih al-Qasim’s circles.' },
    ],
  },
  {
    id: 'acre',
    name: { ar: 'عكا', en: 'Acre' },
    governorate: { ar: 'محافظة عكا', en: 'Acre District' },
    established: { ar: '~1500 ق.م', en: '~1500 BCE' },
    population: { ar: '≈ 50 ألف فلسطيني داخل عكا اليوم', en: '≈ 50,000 Palestinians in Acre today' },
    coords: { x: 46, y: 26 },
    blurb: {
      ar: 'مدينة ساحلية تاريخية بمينائها الفينيقي وأسوارها العثمانية وخاناتها.',
      en: 'A historic coastal city with its ancient harbor, Ottoman walls and caravanserais.',
    },
    photo: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Aerial_view_of_Acre_1.jpg',
      credit: 'Wikimedia Commons (aerial)',
    },
    facts: [
      { ar: 'مدينة تراث عالمي لليونسكو.', en: 'A UNESCO World Heritage city.' },
      { ar: 'صدّت حصار نابليون عام 1799.', en: 'Repelled Napoleon’s siege in 1799.' },
      { ar: 'من أقدم المدن المأهولة على الساحل.', en: 'One of the oldest continuously inhabited coastal cities.' },
    ],
  },
  {
    id: 'ramallah',
    name: { ar: 'رام الله', en: 'Ramallah' },
    governorate: { ar: 'محافظة رام الله والبيرة', en: 'Ramallah & al-Bireh Governorate' },
    established: { ar: '~1500 م', en: '~1500 CE' },
    population: { ar: '≈ 40 ألف', en: '≈ 40,000' },
    coords: { x: 59, y: 46 },
    blurb: {
      ar: 'مركز الأعمال والثقافة الفلسطيني الحديث، وتوأم البيرة المجاورة.',
      en: 'The modern business and cultural center of Palestine, twin of neighboring al-Bireh.',
    },
    photo: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Palestine_Medical_Complex_002.jpg',
      credit: 'Wikimedia Commons (Palestine Medical Complex)',
    },
    facts: [
      { ar: 'مقر السلطة الفلسطينية والمقر الرئاسي.', en: 'Seat of the Palestinian Authority and the presidential compound.' },
      { ar: 'متحف يستضيف معارض الفن الفلسطيني.', en: 'Hosts museums of Palestinian art.' },
      { ar: 'مناخها الجبلي معتدل صيفًا.', en: 'Its highland climate is mild in summer.' },
    ],
  },
  {
    id: 'bethlehem',
    name: { ar: 'بيت لحم', en: 'Bethlehem' },
    governorate: { ar: 'محافظة بيت لحم', en: 'Bethlehem Governorate' },
    established: { ar: '~1400 ق.م', en: '~1400 BCE' },
    population: { ar: '≈ 30 ألف', en: '≈ 30,000' },
    coords: { x: 61, y: 57 },
    blurb: {
      ar: 'مدينة الميلاد وزيتونها وتطريزها الشهير الذي يزيّن الثوب الفلسطيني.',
      en: 'City of the Nativity, famed for olives and the embroidery that adorns the Palestinian thobe.',
    },
    photo: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/6/61/Church_of_the_Nativity_%287703592746%29.jpg',
      credit: 'Wikimedia Commons',
    },
    facts: [
      { ar: 'فيها كنيسة المهد، من أقدم كنائس العالم.', en: 'Home of the Church of the Nativity, among the world’s oldest churches.' },
      { ar: 'تطريز بيت لحم رمز الزي الفلسطيني.', en: 'Bethlehem embroidery is a symbol of the Palestinian dress.' },
    ],
  },
  {
    id: 'nazareth',
    name: { ar: 'الناصرة', en: 'Nazareth' },
    governorate: { ar: 'محافظة الناصرة', en: 'Nazareth District' },
    established: { ar: 'ذكرت في الأناجيل', en: 'Mentioned in the Gospels' },
    population: { ar: '≈ 80 ألف فلسطيني داخل الناصرة اليوم', en: '≈ 80,000 Palestinians in Nazareth today' },
    coords: { x: 56, y: 24 },
    blurb: {
      ar: 'مدينة السيد المسيح وأكبر مدن الجليل.',
      en: 'The city of Jesus and the largest city of Galilee.',
    },
    photo: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Nazareth_Verk%C3%BCndigungbasilika_Church_of_Annunciation_%2834257296024%29.jpg',
      credit: 'Wikimedia Commons (Basilica of the Annunciation)',
    },
    facts: [
      { ar: 'فيها كنيسة البشارة الكبرى.', en: 'Home of the Basilica of the Annunciation.' },
      { ar: 'سوقها القديم من أجمل أسواق الشمال.', en: 'Its old souk is among the finest in the north.' },
    ],
  },
  {
    id: 'tulkarem',
    name: { ar: 'طولكرم', en: 'Tulkarem' },
    governorate: { ar: 'محافظة طولكرم', en: 'Tulkarem Governorate' },
    established: { ar: '~1200 ق.م', en: '~1200 BCE' },
    population: { ar: '≈ 60 ألف', en: '≈ 60,000' },
    coords: { x: 50, y: 38 },
    blurb: {
      ar: 'مدينة الكرمة والحمضيات في السهل الساحلي الداخلي.',
      en: 'City of vineyards and citrus on the inner coastal plain.',
    },
    photo: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Aerial_view_of_Tulkarm_08.jpg',
      credit: 'Wikimedia Commons (aerial)',
    },
    facts: [
      { ar: 'أرضها من أخصب أراضي فلسطين.', en: 'Its soil is among Palestine’s most fertile.' },
      { ar: 'مركز تجارة الحمضيات تاريخيًا.', en: 'A historic citrus-trade hub.' },
    ],
  },
]
