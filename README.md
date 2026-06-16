# 🌱 Taimi — a childcare companion for Finnish parents

**Taimi** (Finnish for *sapling*) is a small, friendly web app for parents of babies and
toddlers. You enter your baby's birthday once, and Taimi shows their current age, an
age-matched illustration, a private diary, an age-aware reading feed, a community wall,
and a "growing path" of milestones.

It's a **minimum viable product (MVP)** built as a plain website — no servers, no build
tools, no accounts. It runs straight from a folder of files, which makes it free to host
and easy for your friend to test on a phone and give feedback.

---

## What's inside

| Feature | Where | What it does |
|---|---|---|
| **Onboarding** | first screen | Pick baby's birthday on a calendar (and an optional name). |
| **Home** | main screen | Baby's age + an illustration that changes as they grow, plus three tiles. |
| **Diary** | tile 1 | Private notes — type text **or** record a voice memo. Saved on the device. |
| **Insights** | tile 2 | A reading feed. Articles are filtered to baby's age ("For you") and by topic. |
| **Voices** | tile 3 | A Twitter-style wall of short posts ("My 8-month-old just started clapping!"). |
| **Journey** | top-bar leaf icon | A vertical "growing path" of milestones — past, now and upcoming — tap to expand. |
| **Settings** | top-bar gear icon | Edit the birthday/name, or reset everything. |

The look is inspired by the Flo app: warm peach gradients, rounded cards, soft shadows,
friendly rounded type. Taimi adds a sage-green "growth" motif of its own so it isn't a
clone.

---

## File overview

```
taimi/
├── index.html          ← the app shell (open this to run the app)
├── styles.css          ← all styling / design system
├── app.js              ← all app logic
├── studio.html         ← the Content Studio (your friend's content tool)
├── README.md           ← this file
└── content/            ← the editable content the app reads
    ├── stages.js       ← age illustrations + captions
    ├── articles.js     ← the Insights reading feed
    ├── milestones.js   ← the Journey milestones
    └── community.js    ← starter Voices posts
```

Everything in **`content/`** is meant to be edited — that's where new articles,
milestones and posts live.

---

## 1) Run it locally (to look at it on your own computer)

Just **double-click `index.html`** — it opens in your browser and works. No install needed.

> Tip: voice recording in the Diary only works on `https://` pages or `localhost`
> (browsers block the microphone on plain `file://` pages). Typing notes works everywhere.
> Once it's on GitHub Pages (below), the microphone works too.

---

## 2) Put it on the web with GitHub Pages (free, ~10 minutes)

This gives you a public link like `https://yourname.github.io/taimi/` that your friend can
open on their phone.

**A. Create the repository**
1. Go to <https://github.com> and sign in (create a free account if needed).
2. Click **New** (or the **+** in the top-right → *New repository*).
3. Name it `taimi`, keep it **Public**, and click **Create repository**.

**B. Upload the files**
1. On the new empty repo page, click **uploading an existing file**.
2. Drag in **all the contents of the `taimi` folder** — including the `content` folder.
   (Drag the *inside* of the folder, so `index.html` sits at the top level of the repo.)
3. Click **Commit changes**.

**C. Turn on GitHub Pages**
1. In the repo, go to **Settings → Pages**.
2. Under *Build and deployment → Source*, choose **Deploy from a branch**.
3. Set branch to **main** and folder to **/ (root)**, then **Save**.
4. Wait ~1 minute, refresh, and GitHub shows your live link at the top.

Share that link with your friend. Every time you upload changed files, the site updates.

> Prefer the command line? From inside the `taimi` folder:
> ```
> git init && git add . && git commit -m "Taimi MVP"
> git branch -M main
> git remote add origin https://github.com/<your-username>/taimi.git
> git push -u origin main
> ```
> then do step **C** above.

---

## 3) Adding content (the easy way) — the Content Studio

Open **`studio.html`** in a browser (double-click it). It's a simple form-based tool for
your friend — **no coding**. It can create three things:

- **Article** (for the Insights feed)
- **Milestone** (for the Journey)
- **Community post** (for Voices)

How it works:
1. Pick a tab, fill in the fields (for articles you set the **age range in months** and it
   converts to the right values automatically).
2. Click **Copy snippet**.
3. Open the matching file in `content/` and paste the snippet **just before the final `];`**.
4. Save the file, re-upload it to GitHub, done.

The Studio tells you exactly which file to paste into and shows a live preview.

### Or edit the content files directly

Each file in `content/` is a plain list. To add an article, copy an existing block inside
`content/articles.js` and change the text. The important fields:

```js
{
  id: 'unique-id',            // any unique short text
  title: 'Tummy time basics',
  category: 'Development',     // shows as a filter chip
  minDays: 0, maxDays: 122,    // age range this is relevant for (in DAYS)
  readMins: 3,
  source: 'Original',
  body: ['First paragraph.', 'Second paragraph.'],
},
```

`minDays`/`maxDays` control the "For you" age targeting. Quick conversion:
**1 month ≈ 30 days, 1 year ≈ 365 days.** (The Studio does this maths for you.)

### Swapping the age illustrations for real images

`content/stages.js` ships with simple built-in drawings. To use a real photo/illustration
instead, drop the image into the `assets/` folder, then in the matching stage set its
`image` field, e.g. `image: 'assets/pincer-grip.png'`. If `image` is set, the app shows it
instead of the built-in drawing.

---

## Things to know about this MVP

This is a front-end prototype, so a few things are intentionally simple — worth flagging
before your friend tests it:

- **Data is per-device.** The diary, posts and likes are saved only in *that* browser
  (using `localStorage`). They don't sync between phones, and clearing browser data wipes
  them.
- **"Voices" is not truly shared yet.** New posts a user writes are saved on their own
  device only — other people won't see them. The wall ships with example posts so the
  feature can be felt. Real cross-user sharing needs a backend (see next steps).
- **Voice memos** are stored inside the browser too, and audio is large — a handful of
  recordings is fine, but it's not meant for hours of audio.
- **Not medical advice.** The content is general information for parents, not a substitute
  for a doctor, nurse or *neuvola*. That disclaimer is shown in the app as well.

## Suggested next steps (after feedback)

- **A real backend** (e.g. Firebase or Supabase) so Voices is genuinely shared and data
  syncs across devices and survives a cleared browser.
- **Finnish localisation** — the MVP is in English; the structure is ready for an `fi`
  translation.
- **Real illustrations/photos** for each developmental stage.
- **Accounts & privacy controls** before any public launch, especially for a community
  feature.

---

Made as a starting point — easy to change, easy to host, easy to hand to a friend. 🌱
