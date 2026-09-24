# Palestine Guide · دليل فلسطين 🇵🇸

A bilingual (Arabic 🇵🇸 / English) reference web app about Palestine: the land, its geography,
borders, people, history, flag and culture.

تطبيق ويب مرجعي ثنائي اللغة (العربية والإنجليزية) عن فلسطين: الأرض والجغرافيا والحدود والناس
والتاريخ والعلم والثقافة.

## Run it

```bash
npm install     # once
npm run dev     # dev server → http://localhost:5173
npm run build   # production build → dist/
npm run preview # serve the production build
```

## Features

- 🌍 **AR/EN bilingual** with instant RTL ⇄ LTR switching (Arabic is the default; choice is remembered)
- 🌗 **Dark / light mode** (remembers your choice, follows system preference initially)
- 🗺️ **Interactive schematic map** — click any city to see its facts
- 📊 Stats, tables, timeline, figures with quotes, FAQ accordion
- 🎯 A 10-question quiz to test your knowledge
- ⚡ Fast, no external requests; deploys to any static host (HashRouter, relative base)

## Pages

Home · Geography (map, regions, borders, water, climate) · History (timeline) ·
Population (homeland & diaspora) · Flag (colors, specs, symbols) · Culture ·
Figures · Quiz · About

## How to edit content later · كيف تعدل المحتوى لاحقًا

All knowledge content lives in typed, commented files under `src/data/` — add an entry to any
array and it appears in the UI automatically (both languages side by side):

| File | What's inside |
| --- | --- |
| `src/i18n/ui.ts` | All UI strings (every string has `ar` and `en`) |
| `src/data/geo.ts` | Natural regions, borders, water bodies, climate zones, area facts |
| `src/data/cities.ts` | Cities with map coordinates (`coords.x/y` on a 0–100 grid) and facts |
| `src/data/flag.ts` | Flag color meanings, specs, national symbols |
| `src/data/people.ts` | Figures, historical timeline, FAQ |
| `src/data/culture.ts` | Dishes, crafts, holidays, heritage |
| `src/data/quiz.ts` | Quiz questions (`correct` = index of the right option) |
| `src/styles.css` | Design tokens (colors, fonts) at the top; themes via `[data-theme]` |

To add a page: create `src/pages/MyPage.tsx`, add a route in `src/App.tsx`, a nav entry in
`src/components/Header.tsx`, and a `key` in `src/i18n/ui.ts`.

## Tech

React 18 + TypeScript + Vite + React Router. No UI framework — a small custom design system
in `src/styles.css` keeps the bundle tiny (~76 KB gzipped JS).
