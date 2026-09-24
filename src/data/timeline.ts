import type { TimelineEvent } from '../types'

/** Chronological history of Palestine — ordered oldest → newest. */
export const timeline: TimelineEvent[] = [
  {
    id: 'jericho',
    year: '9000 ق.م',
    yearEn: '9000 BCE',
    title: { ar: 'أريحا: أقدم مدينة في العالم', en: 'Jericho: the world’s oldest city' },
    text: {
      ar: 'على تل السلطان قامت أريحا، أقدم مستوطنة بشرية معروفة بأسوارها وبرجها الحجري — قبل اختراع الفخار نفسه.',
      en: 'At Tell es-Sultan rose Jericho, the oldest known human settlement with walls and a stone tower — before pottery itself was invented.',
    },
    photo: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Tell_es-sultan.jpg',
      credit: 'Wikimedia Commons (Tell es-Sultan)',
    },
  },
  {
    id: 'canaan',
    year: '3000 ق.م',
    yearEn: '3000 BCE',
    title: { ar: 'الكنعانيون يؤسسون المدن', en: 'Canaanites found the cities' },
    text: {
      ar: 'الكنعانيون — الأساس الذي بني عليه اسم البلاد — يؤسسون مدنًا مثل أورشليم (القدس) وعكا ويافا ويبوس، ويعطون الأرض اسمها: «بلد الشمس».',
      en: 'The Canaanites — the foundation on which the land’s name rests — found cities like Urusalim (Jerusalem), Acre, Jaffa and Jebus, and give the land its name: “Land of the sun”. ',
    },
  },
  {
    id: 'egypt',
    year: '1500 ق.م',
    yearEn: '1500 BCE',
    title: { ar: 'في النفوذ المصري', en: 'Under Egyptian influence' },
    text: {
      ar: 'تزدهر المدن الكنعانية تحت نفوذ مصر الفرعونية، ويظهر اسم «فلست» و«كنعان» في الرسائل الفرعونية.',
      en: 'Canaanite cities flourish under Pharaonic influence; the names “Peleset” and “Canaan” appear in Egyptian records.',
    },
  },
  {
    id: 'philistines',
    year: '1150 ق.م',
    yearEn: '1150 BCE',
    title: { ar: 'الفلستيون وساحل الجنوب', en: 'Philistines on the southern coast' },
    text: {
      ar: 'يستقر الفلستيون في خمس مدن ساحلية (غزة، عسقلان، إسدود، عقر، جت) ويسمى الساحل باسمهم: «فلسطينيا».',
      en: 'Philistines settle five coastal cities (Gaza, Ashkelon, Ashdod, Ekron, Gath); the coast takes their name: “Philistia”.',
    },
  },
  {
    id: 'roman-biz',
    year: '63 ق.م',
    yearEn: '63 BCE',
    title: { ar: 'العهد الروماني والبيزنطي', en: 'Roman & Byzantine eras' },
    text: {
      ar: 'روما تضم البلاد وتبني «نيابوليس» (نابلس) وتعيد تسمية القدس «إيليا كابيتولينا»، ثم تصبح الأرض مركزًا للمسيحية في العهد البيزنطي.',
      en: 'Rome annexes the land, founds “Neapolis” (Nablus), renames Jerusalem “Aelia Capitolina”; under Byzantium the land becomes a heartland of Christianity.',
    },
  },
  {
    id: 'islamic',
    year: '636 م',
    yearEn: '636 CE',
    title: { ar: 'الفتح الإسلامي ومعاهدة العمريّة', en: 'Islamic conquest & Umar’s covenant' },
    text: {
      ar: 'يدخل عمر بن الخطاب القدس صلحًا ويمنح أهلها أمانًا معروفًا («العهدة العمرية»)، وتصبح العربية لغة البلاد، ويعاد اسمها «فلسطين».',
      en: 'Umar ibn al-Khattab enters Jerusalem peacefully granting the famed safety covenant; Arabic becomes the land’s language and its name returns to “Palestine”.',
    },
  },
  {
    id: 'umayyad-abbasid',
    year: '661–1258 م',
    yearEn: '661–1258 CE',
    title: { ar: 'الأمويون والعباسيون: عصر البناء', en: 'Umayyads & Abbasids: an age of building' },
    text: {
      ar: 'تُبنى قبة الصخرة والمسجد الأقصى على يدها الأموية، وتزدهر المدارس والطرق والزراعة، وتُنسج الثقافة العربية المحلية.',
      en: 'The Dome of the Rock and Al-Aqsa rise in the Umayyad era; schools, roads and agriculture flourish and local Arab culture takes root.',
    },
  },
  {
    id: 'crusades',
    year: '1099–1291 م',
    yearEn: '1099–1291 CE',
    title: { ar: 'الحروب الصليبية', en: 'The Crusades' },
    text: {
      ar: 'الصليبيون يحتلون الساحل والقدس قرابة قرن، حتى يحررها صلاح الدين بعد حطين (1187) ويستكمل الأيوبيون طرد الروم من الساحل (1291).',
      en: 'Crusaders hold the coast and Jerusalem for about a century until Saladin liberates it after Hattin (1187), with the coast freed by 1291.',
    },
  },
  {
    id: 'mamluk',
    year: '1250–1516 م',
    yearEn: '1250–1516 CE',
    title: { ar: 'العهد المملوكي', en: 'Mamluk era' },
    text: {
      ar: 'تزدهر المدرسة المملوكية: مدارس وخانات وأسواق في القدس والخليل ونابلس، وتصبح البلاد مركزًا للعلم والتجارة.',
      en: 'A flourishing Mamluk age: schools, khans and souks in Jerusalem, Hebron and Nablus; the land becomes a hub of learning and trade.',
    },
  },
  {
    id: 'ottoman',
    year: '1516–1917 م',
    yearEn: '1516–1917 CE',
    title: { ar: 'أربعة قرون عثمانية', en: 'Four Ottoman centuries' },
    text: {
      ar: 'البلاد إيالة عثمانية، تُبنى الأسواق والخانات، ويستقر الفلسطينيون في مدنهم وقراهم حتى مطلع القرن العشرين.',
      en: 'The land is an Ottoman province; souks and khans are built and Palestinians settle into their cities and villages until the early 20th century.',
    },
  },
  {
    id: 'balfour',
    year: '1917',
    yearEn: '1917',
    title: { ar: 'وعد بلفور', en: 'The Balfour Declaration' },
    text: {
      ar: 'بريطانيا، التي بدأت احتلالها للبلاد، تعد «بوطن قومي للشعب اليهودي» في فلسطين رغم أن سكانها العرب كانوا 90% من الأهل.',
      en: 'Britain, then occupying the country, promises a “national home for the Jewish people” in Palestine, whose inhabitants were around 90% Arab.',
    },
  },
  {
    id: 'mandate',
    year: '1922–1948',
    yearEn: '1922–1948',
    title: { ar: 'الانتداب البريطاني', en: 'British Mandate' },
    text: {
      ar: 'الموجات الاستيطانية تتسارع، وتقوم ثورة 1936–1939 الكبرى ضد السياسة البريطانية، وتُقمع بشدة.',
      en: 'Settler waves accelerate; the Great Revolt of 1936–39 rises against British policy and is harshly suppressed.',
    },
  },
  {
    id: 'nakba',
    year: '1948',
    yearEn: '1948',
    title: { ar: 'النكبة', en: 'The Nakba' },
    text: {
      ar: 'أكثر من 750 ألف فلسطيني يُهجّون قسرًا، وتُدمَّر نحو 530 قرية وبلدة، ويتحول معظم فلسطين التاريخية إلى دولة إسرائيل.',
      en: 'Over 750,000 Palestinians are forcibly displaced; about 530 villages and towns are destroyed; most of historic Palestine becomes the State of Israel.',
    },
  },
  {
    id: 'naksa',
    year: '1967',
    yearEn: '1967',
    title: { ar: 'النكسة واحتلال ما تبقى', en: 'The Naksa: occupation of what remained' },
    text: {
      ar: 'إسرائيل تحتل الضفة الغربية وقطاع غزة والقدس الشرقية في حرب الأيام الستة.',
      en: 'Israel occupies the West Bank, Gaza Strip and East Jerusalem in the Six-Day War.',
    },
  },
  {
    id: 'intifada1',
    year: '1987',
    yearEn: '1987',
    title: { ar: 'انتفاضة الحجارة', en: 'First Intifada' },
    text: {
      ar: 'انتفاضة شعبية شاملة تنطلق من مخيم جباليا بغزة وتلتقطها عالم الكاميرات: لجان شعبية، مقاطعة، وحصانة مدنية.',
      en: 'A mass popular uprising sparks from Jabalia camp in Gaza and is captured by world cameras: popular committees, boycotts and civil defiance.',
    },
  },
  {
    id: 'declaration',
    year: '1988',
    yearEn: '1988',
    title: { ar: 'إعلان الاستقلال', en: 'Declaration of Independence' },
    text: {
      ar: 'المجلس الوطني الفلسطيني يعلن دولة فلسطين في الجزائر، وتعترف بها عشرات الدول فورًا.',
      en: 'The Palestinian National Council declares the State of Palestine in Algiers; dozens of states recognize it at once.',
    },
  },
  {
    id: 'oslo',
    year: '1993',
    yearEn: '1993',
    title: { ar: 'أوسلو والسلطة الفلسطينية', en: 'Oslo & the Palestinian Authority' },
    text: {
      ar: 'توقيع اتفاق أوسلو وتشكيل السلطة الفلسطينية، مع وعود بحل الدولتين لم تكتمل طريقها.',
      en: 'The Oslo Accords are signed and the Palestinian Authority is formed, with two-state promises left unfulfilled.',
    },
  },
  {
    id: 'intifada2',
    year: '2000–2005',
    yearEn: '2000–2005',
    title: { ar: 'انتفاضة الأقصى', en: 'Second Intifada' },
    text: {
      ar: 'انتفاضة ثانية بعد اقتحام شارون للمسجد الأقصى، مع جدار الفصل وسلسلة مدن محاصرة.',
      en: 'A second uprising after Sharon’s Al-Aqsa provocation, with the separation wall and besieged cities.',
    },
  },
  {
    id: 'unesco',
    year: '2011–2012',
    yearEn: '2011–2012',
    title: { ar: 'اعتراف دولي متسارع', en: 'Accelerating international recognition' },
    text: {
      ar: 'فلسطين عضو كامل في اليونسكو (2011)، ثم دولة مراقب غير عضو في الأمم المتحدة (2012) بأغلبية ساحقة.',
      en: 'Palestine becomes a full UNESCO member (2011), then a UN non-member observer state (2012) by overwhelming majority.',
    },
  },
  {
    id: 'recognition',
    year: '2024–2025',
    yearEn: '2024–2025',
    title: { ar: 'موجة اعتراف جديدة', en: 'A new wave of recognition' },
    text: {
      ar: 'عشرات الدول تعترف بدولة فلسطين ضمن موجة دولية جديدة، ويتصاعد النقاش العالمي حول حق الشعب الفلسطيني في تقرير مصيره.',
      en: 'Dozens of states recognize the State of Palestine in a fresh international wave; global debate over the Palestinian right to self-determination intensifies.',
    },
  },
]
