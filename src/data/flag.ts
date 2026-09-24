import type { Loc } from '../types'

export interface FlagColor {
  id: 'black' | 'white' | 'green' | 'red'
  hex: string
  name: Loc
  meaning: Loc
}

export const flagColors: FlagColor[] = [
  {
    id: 'black',
    hex: '#000000',
    name: { ar: 'الأسود', en: 'Black' },
    meaning: {
      ar: 'ذكرى الليالي المظلمة في عهد الاستبداد، ومنارة الصمود.',
      en: 'Remembrance of dark nights of oppression, and a beacon of steadfastness.',
    },
  },
  {
    id: 'white',
    hex: '#FFFFFF',
    name: { ar: 'الأبيض', en: 'White' },
    meaning: {
      ar: 'النقاء والمحبة والسلام الذي يطمح إليه الناس.',
      en: 'Purity, charity, and the peace the people aspire to.',
    },
  },
  {
    id: 'green',
    hex: '#007A3D',
    name: { ar: 'الأخضر', en: 'Green' },
    meaning: {
      ar: 'خصب الأرض وزيتونها وحقولها وأمل الغد.',
      en: 'The land’s fertility, its olives and fields, and hope for tomorrow.',
    },
  },
  {
    id: 'red',
    hex: '#CE1126',
    name: { ar: 'الأحمر', en: 'Red' },
    meaning: {
      ar: 'شهداء فلسطين وتضحيات أبنائها من أجل الحريّة.',
      en: 'Palestine’s martyrs and the sacrifices of her people for freedom.',
    },
  },
]

export const flagSpecs: { label: Loc; value: Loc }[] = [
  {
    label: { ar: 'النسبة', en: 'Aspect ratio' },
    value: { ar: '2:1 (عرض:ارتفاع)', en: '2:1 (width:height)' },
  },
  {
    label: { ar: 'الأشرطة الأفقية', en: 'Horizontal bands' },
    value: { ar: 'أسود، أبيض، أخضر — متساوية العرض', en: 'Black, white, green — equal width' },
  },
  {
    label: { ar: 'المثلث', en: 'Triangle' },
    value: { ar: 'أحمر عند الحافة حتى منتصف طول العلم', en: 'Red chevron at the hoist reaching mid-length' },
  },
]

export const nationalSymbols: { label: Loc; value: Loc }[] = [
  {
    label: { ar: 'النشيد الوطني', en: 'National anthem' },
    value: { ar: '«فدائي» — كلمات سعيد عقل، لحن علي إسماعيل', en: '“Fida’i” — lyrics by Saeed al-Qas, music by Ali Ismael' },
  },
  {
    label: { ar: 'اليوم الوطني', en: 'National day' },
    value: { ar: '15 نوفمبر — إعلان الاستقلال (1988)', en: '15 November — Declaration of Independence (1988)' },
  },
  {
    label: { ar: 'العاصمة', en: 'Capital' },
    value: { ar: 'القدس', en: 'Al-Quds' },
  },
  {
    label: { ar: 'الشعار الوطني', en: 'National emblem' },
    value: { ar: 'نسر صلاحي يحمل على صدره نقش قبة الصخرة', en: 'Saladin eagle bearing the Dome of the Rock on its chest' },
  },
  {
    label: { ar: 'الزهرة الوطنية', en: 'National flower' },
    value: { ar: 'سوسنة فقوعة (Iris haynei)', en: 'Faqqua iris (Iris haynei)' },
  },
  {
    label: { ar: 'الطائر الوطني', en: 'National bird' },
    value: { ar: 'طائر الشمس الفلسطيني', en: 'Palestinian sunbird' },
  },
  {
    label: { ar: 'الشجرة الوطنية', en: 'National tree' },
    value: { ar: 'الزيتون', en: 'Olive tree' },
  },
  {
    label: { ar: 'الطبق الوطني', en: 'National dish' },
    value: { ar: 'المسخن وطبق الحمص والقدرة', en: 'Musakhan; hummus and qidra' },
  },
]
