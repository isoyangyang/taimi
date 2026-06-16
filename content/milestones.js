/* =============================================================
   MILESTONES  —  the "Journey" timeline
   -------------------------------------------------------------
   Each milestone has a typical age. The app compares it to your
   baby's age and shows it as already passed, happening around
   now, or still ahead. Keep them ordered youngest -> oldest.

   FIELDS
     id          unique short text, no spaces
     title       short milestone name
     category    Motor | Communication | Social | Self-care | Play
     typicalDays the usual age it appears, in days
     window      friendly age range shown to parents (text)
     note        one or two sentences of reassurance / detail

   Every baby is different — these are typical ranges, not a
   deadline. The copy already says so; keep that spirit.
   ============================================================= */

window.TAIMI = window.TAIMI || {};

window.TAIMI.milestones = [
  { id: 'focus',    title: 'Focuses on your face',        category: 'Social',
    typicalDays: 14,  window: '0–1 month',
    note: 'Newborns see best at about the distance to your face during a feed. Eye contact is their first conversation.' },
  { id: 'smile',    title: 'First social smile',          category: 'Social',
    typicalDays: 49,  window: '6–8 weeks',
    note: 'A smile aimed right at you, on purpose. Smile back and pause to "chat".' },
  { id: 'coos',     title: 'Coos and gurgles',            category: 'Communication',
    typicalDays: 70,  window: '2–3 months',
    note: 'Vowel sounds and happy noises. Copy them back to start a turn-taking game.' },
  { id: 'head',     title: 'Holds head steady',           category: 'Motor',
    typicalDays: 100, window: '3–4 months',
    note: 'Neck strength from tummy time pays off — the head stops bobbing when held upright.' },
  { id: 'roll',     title: 'Rolls over',                  category: 'Motor',
    typicalDays: 150, window: '4–6 months',
    note: 'Often tummy-to-back first. A good moment to never leave baby unattended up high.' },
  { id: 'sit',      title: 'Sits without support',        category: 'Motor',
    typicalDays: 210, window: '6–8 months',
    note: 'Hands are freed to explore. Cushions around for the inevitable topples.' },
  { id: 'babble',   title: 'Babbles "ba-ba", "da-da"',    category: 'Communication',
    typicalDays: 220, window: '6–9 months',
    note: 'Repeated consonant strings. Not words yet, but the building blocks of them.' },
  { id: 'pincer',   title: 'Pincer grip',                 category: 'Motor',
    typicalDays: 270, window: '8–12 months',
    note: 'Picks up small things between thumb and finger 🤏 — often right as finger foods arrive.' },
  { id: 'wave',     title: 'Waves and points',            category: 'Communication',
    typicalDays: 300, window: '9–12 months',
    note: 'Gestures are early language. Pointing to share is a big social leap.' },
  { id: 'crawl',    title: 'Crawls or shuffles',          category: 'Motor',
    typicalDays: 300, window: '7–11 months',
    note: 'Crawling, commando-shuffling or bottom-scooting — all valid routes to mobility.' },
  { id: 'stand',    title: 'Pulls to stand',              category: 'Motor',
    typicalDays: 330, window: '9–12 months',
    note: 'Furniture becomes a handrail. Cruising sideways comes next.' },
  { id: 'firstword',title: 'First word',                  category: 'Communication',
    typicalDays: 365, window: '10–14 months',
    note: 'A sound used to mean something specific counts — even if only you understand it.' },
  { id: 'walk',     title: 'First steps',                 category: 'Motor',
    typicalDays: 420, window: '11–16 months',
    note: 'Wide stance, arms up, huge grin. Wobbling is part of learning balance.' },
  { id: 'spoon',    title: 'Eats with a spoon',           category: 'Self-care',
    typicalDays: 480, window: '13–18 months',
    note: 'Messy and proud. Loading the spoon for them, then letting them aim, helps.' },
  { id: 'pretend',  title: 'Pretend play begins',         category: 'Play',
    typicalDays: 540, window: '15–21 months',
    note: 'Feeding a teddy, "talking" on a banana — imagination is switching on.' },
  { id: 'combine',  title: 'Two-word phrases',            category: 'Communication',
    typicalDays: 660, window: '18–24 months',
    note: '"More milk", "daddy gone". Combining words is a leap in language.' },
  { id: 'run',      title: 'Runs and climbs',             category: 'Motor',
    typicalDays: 720, window: '20–26 months',
    note: 'More confident on their feet, and into everything. Watch the furniture-climbing.' },
  { id: 'play-with',title: 'Plays alongside other kids',  category: 'Social',
    typicalDays: 900, window: '24–36 months',
    note: 'Parallel play comes before sharing. Taking turns is still very much in progress.' },
];
