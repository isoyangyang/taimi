/* =============================================================
   COMMUNITY  —  the "Voices" feed (Twitter-style)
   -------------------------------------------------------------
   These are the example posts shown to everyone. Posts that a
   user writes themselves are saved on THEIR device only and shown
   at the top of their feed — they are not shared between people
   in this MVP (that needs a real server; see the README).

   FIELDS
     id        unique short text
     name      display name of the poster
     babyAge   free text like "3 months" or "14 months"
     text      the post itself (keep it short, Twitter-style)
     likes     a starting number of hearts
     daysAgo   how long ago it was posted (for "Xd ago")
   ============================================================= */

window.TAIMI = window.TAIMI || {};

window.TAIMI.community = [
  { id: 'c1', name: 'Sanna', babyAge: '5 months',
    text: 'Rolled over for the first time today and then looked SO offended about it. 😂 We celebrated like she won Olympic gold.',
    likes: 42, daysAgo: 0 },
  { id: 'c2', name: 'Mikko', babyAge: '11 months',
    text: 'He pointed at the dog and said something that was DEFINITELY "koira" if you don\'t think about it too hard. First word, I\'m claiming it.',
    likes: 88, daysAgo: 0 },
  { id: 'c3', name: 'Aino', babyAge: '7 months',
    text: 'Pincer grip unlocked 🤏 — discovered the exact size of crumb I can no longer leave anywhere on the floor.',
    likes: 51, daysAgo: 1 },
  { id: 'c4', name: 'Janne', babyAge: '2 weeks',
    text: 'Day 14. Have not slept since approximately 2019. But she gripped my finger in her sleep and honestly, worth it.',
    likes: 120, daysAgo: 1 },
  { id: 'c5', name: 'Elina', babyAge: '14 months',
    text: 'First proper steps across the living room! Three of them, then sat down to applaud herself. Same energy honestly.',
    likes: 76, daysAgo: 2 },
  { id: 'c6', name: 'Tuomas', babyAge: '9 months',
    text: 'Neuvola visit went great, nurse was lovely, and then he sneezed directly into her face. Parenting is humbling.',
    likes: 63, daysAgo: 3 },
  { id: 'c7', name: 'Heidi', babyAge: '4 months',
    text: 'Found his hands. Has been staring at them for twenty minutes like they\'re a magic trick. Honestly relatable.',
    likes: 47, daysAgo: 4 },
  { id: 'c8', name: 'Petri', babyAge: '20 months',
    text: 'She fed her teddy "soup" (air) from a spoon for ten minutes and I have never felt anything as pure as watching pretend play kick in.',
    likes: 59, daysAgo: 5 },
];
