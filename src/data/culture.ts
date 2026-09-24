import type { Loc } from '../types'

export interface CultureItem {
  id: string
  name: Loc
  desc: Loc
}

export const dishes: CultureItem[] = [
  {
    id: 'musakhan',
    name: { ar: 'المسخن', en: 'Musakhan' },
    desc: {
      ar: 'الطبق الوطني: دجاج محمّص بالسماق والبصل على خبز التابون المعصور بزيت الزيتون.',
      en: 'The national dish: sumac-roasted chicken and onions over taboon bread drenched in olive oil.',
    },
  },
  {
    id: 'maqluba',
    name: { ar: 'المقلوبة', en: 'Maqluba' },
    desc: {
      ar: 'طبق الأرز المقلوب مع الباذنجان أو القرنبيط واللحم، يُقلب عند التقديم.',
      en: 'Upside-down rice with eggplant or cauliflower and meat, flipped before serving.',
    },
  },
  {
    id: 'knafeh',
    name: { ar: 'الكنافة النابلسية', en: 'Nabulsi knafeh' },
    desc: {
      ar: 'حلوى الجبن الشهيرة من نابلس بشريحة الحلاوة والشربات.',
      en: 'The famed cheese pastry from Nablus with semolina crust and syrup.',
    },
  },
  {
    id: 'maamoul',
    name: { ar: 'معمول بالتمر والجوز', en: 'Maamoul' },
    desc: {
      ar: 'حلوى العيد والعيد الكبير في كل بيت فلسطيني.',
      en: 'The festive cookie of every Palestinian household at Eid.',
    },
  },
  {
    id: 'qidra',
    name: { ar: 'القدرة', en: 'Qidra' },
    desc: {
      ar: 'أرز على الطريقة الخليلية مطبوخ بالحمص واللحم في القدرة الفخارية.',
      en: 'Hebron-style rice cooked with chickpeas and lamb in a clay pot.',
    },
  },
  {
    id: 'zaatar',
    name: { ar: 'الزعتر والزيتون', en: 'Za’atar and olive oil' },
    desc: {
      ar: 'ثنائي الصباح الفلسطيني: زعتر بلدي وزيت زيتون بكر مع خبز التابون.',
      en: 'The Palestinian breakfast pairing: wild thyme and virgin olive oil with taboon bread.',
    },
  },
]

export const crafts: CultureItem[] = [
  {
    id: 'tatreez',
    name: { ar: 'التطريز الفلسطيني', en: 'Palestinian tatreez' },
    desc: {
      ar: 'خياطة يدوية بألوان الأرض على الثوب الفلسطيني، وكل منطقة لها نقوشها.',
      en: 'Hand embroidery in the colors of the land on the Palestinian thobe; each region has its own motifs.',
    },
  },
  {
    id: 'pottery',
    name: { ar: 'الخزف والفخار', en: 'Pottery and ceramics' },
    desc: {
      ar: 'صناعة عريقة في غزة والخليل وعكا بألوان تراثية.',
      en: 'An ancient craft in Gaza, Hebron and Acre with traditional colors.',
    },
  },
  {
    id: 'glass',
    name: { ar: 'الزجاج المعشق', en: 'Hebron glass' },
    desc: {
      ar: 'نفاخ الزجاج الأزرق والمعشق في الخليل منذ العهد الروماني.',
      en: 'Blue and stained glassblowing in Hebron since Roman times.',
    },
  },
  {
    id: 'soap',
    name: { ar: 'صابون نابلسي', en: 'Nabulsi soap' },
    desc: {
      ar: 'صابون زيت الزيتون الصلب يُجفف في أبراج مخروطية الشكل.',
      en: 'Hard olive-oil soap cured in cone-shaped towers.',
    },
  },
  {
    id: 'olivewood',
    name: { ar: 'خشب الزيتون', en: 'Olive wood' },
    desc: {
      ar: 'حفر ونقش خشب الزيتون في بيت لحم وبيت جالا.',
      en: 'Carving olive wood in Bethlehem and Beit Jala.',
    },
  },
]

export const holidays: CultureItem[] = [
  {
    id: 'eid-fitr',
    name: { ar: 'عيد الفطر', en: 'Eid al-Fitr' },
    desc: {
      ar: 'يوم عيد الفطر بعد رمضان، كعك العيد والزيارات العائلية.',
      en: 'The feast after Ramadan; Eid cookies and family visits.',
    },
  },
  {
    id: 'eid-adha',
    name: { ar: 'عيد الأضحى', en: 'Eid al-Adha' },
    desc: {
      ar: 'يوم التضحية في ذكرى إبراهيم الخليل.',
      en: 'The feast of sacrifice commemorating Ibrahim.',
    },
  },
  {
    id: 'independence',
    name: { ar: 'يوم الاستقلال', en: 'Independence Day' },
    desc: {
      ar: '15 نوفمبر ذكرى إعلان دولة فلسطين عام 1988.',
      en: '15 November, marking the 1988 declaration of the State of Palestine.',
    },
  },
  {
    id: 'nakba-day',
    name: { ar: 'ذكرى النكبة', en: 'Nakba Remembrance Day' },
    desc: {
      ar: '15 مايو ذكرى تشريد عام 1948.',
      en: '15 May, marking the 1948 displacement.',
    },
  },
  {
    id: 'olive-harvest',
    name: { ar: 'موسم قطف الزيتون', en: 'Olive harvest season' },
    desc: {
      ar: 'أكتوفر/نوفمبر: موسم جمع الزيتون واحتفال جماعي في الأرياف.',
      en: 'October–November: the communal olive harvest across the villages.',
    },
  },
]

export const heritage: { title: Loc; text: Loc }[] = [
  {
    title: { ar: 'الدبكة', en: 'Dabke' },
    text: {
      ar: 'رقصة جماعية يقف فيها الراقصون في صف ويرفضون الأرض بأقدامهم بإيقاع واحد — رمز الوحدة والفرح.',
      en: 'A line dance where dancers stomp in unison — a symbol of unity and joy.',
    },
  },
  {
    title: { ar: 'الزغاريد والعتابا', en: 'Zaghareet and Ataba' },
    text: {
      ar: 'أهازيج شعبية تصاحب الأعراس والحصاد، ويلحنها الناس لا الفنانون.',
      en: 'Folk songs of weddings and harvest, composed by the people themselves.',
    },
  },
  {
    title: { ar: 'الضيافة', en: 'Hospitality' },
    text: {
      ar: 'القهوة العربية المرّة رمز كرم الضيافة، وتقدم للضيف قبل أي سؤال.',
      en: 'Bitter Arabic coffee is the emblem of hospitality, served to guests before any question.',
    },
  },
  {
    title: { ar: 'الأمثال الشعبية', en: 'Folk proverbs' },
    text: {
      ar: '«يا آخذ الزيتون بالوعود»، «خير الكلام ما قل ودل»، حكمة الناس على لسان الأرض.',
      en: '“He who takes olives by promise” and “The best speech is brief and clear” — the people’s wisdom in the land’s tongue.',
    },
  },
]
