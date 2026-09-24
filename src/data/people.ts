import type { Figure, FaqItem } from '../types'

export const figures: Figure[] = [
  {
    id: 'darwish',
    name: { ar: 'محمود درويش', en: 'Mahmoud Darwish' },
    years: '1941–2008',
    role: { ar: 'شاعر فلسطين', en: 'Poet of Palestine' },
    quote: {
      ar: '«على هذه الأرض ما يستحق الحياة»',
      en: '“On this land there is what deserves life.”',
    },
    blurb: {
      ar: 'شاعر فلسطين الوطني، صوت الهوية والمنفى والعودة في الشعر العربي الحديث. وُلد في قرية البروة.',
      en: 'Palestine’s national poet; the voice of identity, exile and return in modern Arabic poetry. Born in the village of al-Birwa.',
    },
    photo: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/MahmoudDarwish.jpg',
      credit: 'Wikimedia Commons',
    },
  },
  {
    id: 'tuqan',
    name: { ar: 'فدوى طوقان', en: 'Fadwa Tuqan' },
    years: '1917–2003',
    role: { ar: 'شاعرة الجبل', en: 'Poet of the Mountain' },
    quote: {
      ar: '«لن أنكسر، سيكسرون»',
      en: '“I shall not break; they shall break.”',
    },
    blurb: {
      ar: 'رائدة الشعر النسائي الفلسطيني، غنّت بالجبل والزيتون والصمود.',
      en: 'Pioneer of Palestinian women’s poetry; sang of the mountain, the olive and steadfastness.',
    },
    photo: {
      src: 'https://upload.wikimedia.org/wikipedia/en/f/fa/Fadwa_Tuqan.jpg',
      credit: 'Wikipedia (fair use portrait)',
    },
  },
  {
    id: 'kanafani',
    name: { ar: 'غسان كنفاني', en: 'Ghassan Kanafani' },
    years: '1936–1972',
    role: { ar: 'روائي وقاص', en: 'Novelist and short-story writer' },
    quote: {
      ar: '«الآباء يعودون، والأبناء يتعلمون العودة»',
      en: '“Fathers return; the children learn return.”',
    },
    blurb: {
      ar: 'رائد الأدب المقاوم في فلسطين ومؤسس «العائد إلى حيفا» و«أم سعد».',
      en: 'Pioneer of resistance literature, author of “Return to Haifa” and “Umm Saad”.',
    },
    photo: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Ghassan_Kanafani.jpg',
      credit: 'Wikimedia Commons',
    },
  },
  {
    id: 'habibi',
    name: { ar: 'أميل حبيبي', en: 'Emile Habibi' },
    years: '1921–1996',
    role: { ar: 'روائي وصحفي', en: 'Novelist and journalist' },
    quote: {
      ar: '«أنا المتسائل الفلسطيني»',
      en: '“I, the Palestinian question.”',
    },
    blurb: {
      ar: 'كاتب «الأيام الغريبة» و«المتسائل»، من رواد الرواية الفلسطينية.',
      en: 'Author of “The Secret Life of Saeed the Pessoptimist”, a founder of the Palestinian novel.',
    },
    photo: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Emile_Habibi.jpg',
      credit: 'Wikimedia Commons',
    },
  },
  {
    id: 'husseini',
    name: { ar: 'عبد القادر الحسيني', en: 'Abd al-Qadir al-Husayni' },
    years: '1907–1948',
    role: { ar: 'قائد وطني', en: 'National commander' },
    quote: {
      ar: '«سأظل أقاتل من أجل فلسطين»',
      en: '“I shall keep fighting for Palestine.”',
    },
    blurb: {
      ar: 'قائد معركة القسطنطينية والقدس 1948، استشهد دفاعًا عن القدس.',
      en: 'Commander of the 1948 battles for Al-Quds; fell defending the city.',
    },
    photo: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Husayni.jpg',
      credit: 'Wikimedia Commons',
    },
  },
  {
    id: 'said',
    name: { ar: 'إدوارد سعيد', en: 'Edward Said' },
    years: '1935–2003',
    role: { ar: 'مفكر وناقد', en: 'Thinker and critic' },
    quote: {
      ar: '«لا تستطيع أن تحكي قصة بلا أرض»',
      en: '“You cannot have a narrative without a land.”',
    },
    blurb: {
      ar: 'أحد أعظم مفكري القرن العشرين، صاحب «الاستشراق»، وناصرة القضية الفلسطينية عالميًا.',
      en: 'One of the 20th century’s greatest thinkers, author of “Orientalism” and a global advocate of the Palestinian cause.',
    },
    photo: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Edward_Said_and_Daniel_Barenboim_in_Sevilla%2C_2002_Crop.jpg',
      credit: 'Wikimedia Commons',
    },
  },
  // قادة حركة حماس — Hamas leaders (neutral reference entries)
  {
    id: 'yassin',
    name: { ar: 'الشيخ أحمد ياسين', en: 'Sheikh Ahmed Yassin' },
    years: '1937–2004',
    role: { ar: 'مؤسس حركة حماس', en: 'Founder of Hamas' },
    blurb: {
      ar: 'مؤسس حركة حماس وزعيمها الروحي، نشأ في غزة وأسس الحركة عام 1987 خلال الانتفاضة الأولى.',
      en: 'Founder and spiritual leader of Hamas; raised in Gaza, he established the movement in 1987 during the First Intifada.',
    },
    photo: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Military_trial_of_Ahmed_Yassin%2C_March_1990_I_%283x4_cropped%29.jpg',
      credit: 'Wikimedia Commons',
    },
  },
  {
    id: 'rantisi',
    name: { ar: 'عبد العزيز الرنتيسي', en: 'Abdel Aziz al-Rantisi' },
    years: '1947–2004',
    role: { ar: 'قيادي مؤسس في الحركة', en: 'Founding Hamas leader' },
    blurb: {
      ar: 'من القادة المؤسسين لحركة حماس في غزة، تولى قيادة الحركة خلفًا لأحمد ياسين عام 2004.',
      en: 'A founding Hamas leader in Gaza who succeeded Ahmed Yassin as the movement’s head in 2004.',
    },
    photo: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Abd_al-Aziz_al-Rantisi_%28cropped%29.png',
      credit: 'Wikimedia Commons',
    },
  },
  {
    id: 'haniyeh',
    name: { ar: 'إسماعيل هنية', en: 'Ismail Haniyeh' },
    years: '1962–2024',
    role: { ar: 'رئيس المكتب السياسي السابق', en: 'Former head of the political bureau' },
    blurb: {
      ar: 'رئيس المكتب السياسي لحركة حماس، ورئيس حكومة غزة بعد فوز الحركة في الانتخابات التشريعية عام 2006.',
      en: 'Head of Hamas’s political bureau and prime minister of its Gaza government after the movement won the 2006 legislative elections.',
    },
    photo: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/2/23/03-03-2020_Ismail_Haniyeh_%283x4_cropped%29.jpg',
      credit: 'Wikimedia Commons',
    },
  },
  {
    id: 'sinwar',
    name: { ar: 'يحيى السنوار', en: 'Yahya Sinwar' },
    years: '1962–2024',
    role: { ar: 'قائد الحركة في غزة', en: 'Leader of the movement in Gaza' },
    blurb: {
      ar: 'قاد حركة حماس في قطاع غزة، وانتُخب رئيسًا للمكتب السياسي للحركة عام 2024.',
      en: 'Led Hamas in the Gaza Strip and was elected head of the movement’s political bureau in 2024.',
    },
    photo: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Yahya_Sinwar_portrait_3x4.jpg',
      credit: 'Wikimedia Commons',
    },
  },
  {
    id: 'arouri',
    name: { ar: 'صالح العاروري', en: 'Saleh al-Arouri' },
    years: '1966–2024',
    role: { ar: 'نائب رئيس المكتب السياسي السابق', en: 'Former deputy head of the political bureau' },
    blurb: {
      ar: 'نائب رئيس المكتب السياسي لحركة حماس، ونشط في ملفات الضفة الغربية والعلاقات الخارجية للحركة.',
      en: 'Deputy head of Hamas’s political bureau, active on West Bank affairs and the movement’s foreign relations.',
    },
    photo: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Saleh_al-Arouri_at_Russia%E2%80%93Hamas_meeting%2C_2022_%28cropped%29.jpg',
      credit: 'Wikimedia Commons',
    },
  },
  {
    id: 'ayyash',
    name: { ar: 'يحيى عياش', en: 'Yahya Ayyash' },
    years: '1966–1996',
    role: { ar: 'قيادي عسكري مبكر', en: 'Early military figure' },
    blurb: {
      ar: 'من أوائل قادة الجناح العسكري للحركة (كتائب القسام) خلال التسعينيات.',
      en: 'An early figure in the movement’s military wing (the Qassam Brigades) during the 1990s.',
    },
    photo: {
      src: 'https://upload.wikimedia.org/wikipedia/en/8/83/Yahya_Ayyash.jpg',
      credit: 'Wikipedia (fair use portrait)',
    },
  },
  {
    id: 'deif',
    name: { ar: 'محمد الضيف', en: 'Mohammed Deif' },
    years: '1965–2024',
    role: { ar: 'القائد العام لكتائب القسام', en: 'General commander of the Qassam Brigades' },
    blurb: {
      ar: 'القائد العام لكتائب القسام، الجناح العسكري لحركة حماس.',
      en: 'General commander of the Qassam Brigades, the military wing of Hamas.',
    },
    photo: {
      src: 'https://upload.wikimedia.org/wikipedia/en/e/e6/Mohammed_Deif.png',
      credit: 'Wikipedia (fair use portrait)',
    },
  },
]

export const legacyFaq: FaqItem[] = [
  {
    id: 'where',
    q: { ar: 'أين تقع فلسطين؟', en: 'Where is Palestine located?' },
    a: {
      ar: 'في غرب آسيا على الساحل الشرقي للبحر المتوسط، وتربط آسيا وأفريقيا وأوروبا.',
      en: 'In Western Asia on the eastern Mediterranean shore, linking Asia, Africa and Europe.',
    },
  },
  {
    id: 'capital',
    q: { ar: 'ما عاصمة فلسطين؟', en: 'What is the capital of Palestine?' },
    a: {
      ar: 'القدس هي العاصمة المعلنة لدولة فلسطين.',
      en: 'Jerusalem is the declared capital of the State of Palestine.',
    },
  },
  {
    id: 'population',
    q: { ar: 'كم عدد الفلسطينيين؟', en: 'How many Palestinians are there?' },
    a: {
      ar: 'نحو 14 مليون فلسطيني في العالم: قرابة 5.5 مليون في الأرض الفلسطينية، وأكثر من 6 ملايين مسجل لدى الأونروا في الشتات، وملايين آخرون.',
      en: 'About 14 million worldwide: roughly 5.5 million in the Palestinian territory, over 6 million registered with UNRWA across the diaspora, and millions more.',
    },
  },
  {
    id: 'language',
    q: { ar: 'ما لغة فلسطين؟', en: 'What language is spoken in Palestine?' },
    a: {
      ar: 'العربية هي اللغة الرسمية، والإنجليزية واسعة الانتشار، والعبرية مستخدمة أيضًا.',
      en: 'Arabic is the official language; English is widely spoken, and Hebrew is also used.',
    },
  },
  {
    id: 'religion',
    q: { ar: 'ما الديانات في فلسطين؟', en: 'What religions are in Palestine?' },
    a: {
      ar: 'الإسلام دين الأغلبية، مع وجود مسيحي فلسطيني عريق، وسامريون في نابلس.',
      en: 'Islam is the majority faith, alongside an ancient Palestinian Christian community and Samaritans in Nablus.',
    },
  },
  {
    id: 'currency',
    q: { ar: 'ما عملة فلسطين؟', en: 'What currency is used?' },
    a: {
      ar: 'الشيكل هو العملة الرسمية للسلطة، ويستخدم الدينار الأردني والدولار أيضًا.',
      en: 'The shekel is the PA’s official currency; the Jordanian dinar and US dollar circulate too.',
    },
  },
  {
    id: 'un',
    q: { ar: 'هل فلسطين عضو في الأمم المتحدة؟', en: 'Is Palestine a UN member?' },
    a: {
      ar: 'فلسطين دولة مراقب غير عضو في الأمم المتحدة منذ 2012، وعضو في أكثر من 150 دولة معترف بها.',
      en: 'Palestine has been a UN non-member observer state since 2012 and is recognized by over 150 countries.',
    },
  },
]
