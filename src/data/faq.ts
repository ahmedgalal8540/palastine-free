import type { FaqItem } from '../types'

export const faq: FaqItem[] = [
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
      en: 'Al-Quds (Jerusalem) is the declared capital of the State of Palestine.',
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
      'ar': 'الشيكل هو العملة الرسمية للسلطة، ويستخدم الدينار الأردني والدولار أيضًا.',
      'en': 'The shekel is the PA’s official currency; the Jordanian dinar and US dollar circulate too.',
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
