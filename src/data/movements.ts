import type { Loc } from '../types'

export interface Movement {
  id: string
  name: Loc
  founded: string
  context: Loc
  facts: Loc[]
  sources: { label: string; url: string }[]
}

/**
 * Neutral reference entries on major Palestinian political movements.
 * Factual and sourced; casualty or militant-operational detail is out of scope.
 */
export const movements: Movement[] = [
  {
    id: 'plo',
    name: { ar: 'منظمة التحرير الفلسطينية', en: 'Palestine Liberation Organization (PLO)' },
    founded: '1964',
    context: {
      ar: 'إطار جامع للفصائل الفلسطينية، اعترفت به الجامعة العربية والأمم المتحدة ممثلًا للشعب الفلسطيني.',
      en: 'An umbrella for Palestinian factions, recognized by the Arab League and the UN as representative of the Palestinian people.',
    },
    facts: [
      {
        ar: 'أعلنت دولة فلسطين في الجزائر عام 1988.',
        en: 'Declared the State of Palestine in Algiers in 1988.',
      },
      {
        ar: 'وقّعت اتفاق أوسلو وشكّلت السلطة الفلسطينية عام 1994.',
        en: 'Signed the Oslo Accords and formed the Palestinian Authority in 1994.',
      },
    ],
    sources: [{ label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Palestine_Liberation_Organization' }],
  },
  {
    id: 'fatah',
    name: { ar: 'حركة فتح', en: 'Fatah' },
    founded: '1959',
    context: {
      ar: 'أكبر فصائل منظمة التحرير، أسسها ياسر عرفات وآخرون، وتقود السلطة الفلسطينية في الضفة الغربية.',
      en: 'The largest PLO faction, founded by Yasser Arafat and others; leads the Palestinian Authority in the West Bank.',
    },
    facts: [
      {
        ar: 'قادت العمل السياسي والعسكري الفلسطيني منذ الستينيات.',
        en: 'Has led Palestinian political and militant activity since the 1960s.',
      },
    ],
    sources: [{ label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Fatah' }],
  },
  {
    id: 'hamas',
    name: { ar: 'حركة حماس', en: 'Hamas' },
    founded: '1987',
    context: {
      ar: 'حركة سياسية وعسكرية فلسطينية ذات مرجعية إسلامية، نشأت خلال الانتفاضة الأولى، وتدير قطاع غزة منذ 2007. تصنفها عدة دول وأطراف منظمات أخرى بتصنيفات مختلفة.',
      en: 'A Palestinian political and militant movement with an Islamist platform, founded during the First Intifada; it has governed the Gaza Strip since 2007. States and bodies classify it differently.',
    },
    facts: [
      {
        ar: 'فازت في الانتخابات التشريعية الفلسطينية عام 2006.',
        en: 'Won the 2006 Palestinian legislative elections.',
      },
      {
        ar: 'تصدر بيانات ومواقف عبر مكاتبها الإعلامية؛ تُنقل أخبارها عبر وكالات الأنباء العالمية.',
        en: 'Issues statements through its media offices; its announcements are carried by international news agencies.',
      },
    ],
    sources: [{ label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Hamas' }],
  },
  {
    id: 'pflp',
    name: { ar: 'الجبهة الشعبية لتحرير فلسطين', en: 'Popular Front for the Liberation of Palestine (PFLP)' },
    founded: '1967',
    context: {
      ar: 'فصيل يساري في منظمة التحرير أسسه جورج حبش، معروف بخطابه القومي العلماني.',
      en: 'A leftist PLO faction founded by George Habash, known for its secular nationalist platform.',
    },
    facts: [
      {
        ar: 'عضو في منظمة التحرير الفلسطينية.',
        en: 'A member of the Palestine Liberation Organization.',
      },
    ],
    sources: [{ label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Popular_Front_for_the_Liberation_of_Palestine' }],
  },
  {
    id: 'islamic-jihad',
    name: { ar: 'حركة الجهاد الإسلامي', en: 'Palestinian Islamic Jihad (PIJ)' },
    founded: '1981',
    context: {
      ar: 'حركة فلسطينية ذات مرجعية إسلامية تأسست في غزة، وهي خارج منظمة التحرير.',
      en: 'An Islamist Palestinian movement founded in Gaza, outside the PLO.',
    },
    facts: [
      {
        ar: 'تتركز أنشطتها في قطاع غزة.',
        en: 'Its activities are concentrated in the Gaza Strip.',
      },
    ],
    sources: [{ label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Palestinian_Islamic_Jihad' }],
  },
]
