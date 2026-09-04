# Us

A private, personal site — your story, memories, 100 reasons, a quiz,
a letter, your future together, and a birthday surprise on Sept 22.

## Before you do anything else

Open `src/content.js`. Every real detail — her name, your story,
photos, reasons, quiz answers, the letter, the birthday message —
lives in that one file. Everything else in `src/` just renders it,
so you don't need to touch other files to personalize the site.

To add photos: drop image files into `src/assets/photos/`, import
them at the top of `content.js` (e.g. `import first from
"./assets/photos/first.jpg"`), then set `photo: first` on the
relevant entry instead of `photo: null`.

## Running it locally

```
npm install
npm run dev
```

Opens at http://localhost:5173 — edit `content.js`, save, and it
updates instantly.

## Deploying it (so she can open it on her phone)

Easiest free option is Vercel or Netlify:

```
npm run build
```

This produces a `dist/` folder — drag it into Netlify's manual
deploy, or connect the repo to Vercel and it'll build automatically
on every push. Either gives you a private link you can send her.

## The birthday section

`her.birthday` in `content.js` controls the countdown target
(currently set to 2026-09-22). Before that date it shows a live
countdown; on and after that date it automatically unlocks the
birthday message instead — no manual switch needed.
