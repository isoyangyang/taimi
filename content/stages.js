/* =============================================================
   STAGES  —  the age-appropriate hero illustration + caption
   -------------------------------------------------------------
   Each stage shows when the baby's age (in days) falls between
   minDays and maxDays. The first matching stage wins, so keep
   them in order from youngest to oldest.

   To use your OWN image instead of the built-in drawing, set
   "image" to a URL or a file in /assets, e.g.
        image: "assets/my-photo.png"
   If "image" is empty, the built-in "art" drawing is used.
   ============================================================= */

window.TAIMI = window.TAIMI || {};

// A few small flat illustrations, drawn so they share one soft style.
const blob = (fill) =>
  `<path fill="${fill}" d="M120 18c34 0 70 16 86 50s14 78-6 104-58 40-90 40-72-12-92-42-22-72-4-106S86 18 120 18Z"/>`;

const art = {
  newborn: `<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    ${blob('#FFE3D6')}
    <ellipse cx="120" cy="150" rx="62" ry="40" fill="#FFD0BD"/>
    <circle cx="120" cy="108" r="38" fill="#FFE7D8"/>
    <circle cx="108" cy="106" r="3.4" fill="#7A5C50"/><circle cx="132" cy="106" r="3.4" fill="#7A5C50"/>
    <path d="M112 120q8 7 16 0" stroke="#C98A72" stroke-width="3" fill="none" stroke-linecap="round"/>
    <circle cx="99" cy="115" r="5" fill="#FFC0AE" opacity=".7"/><circle cx="141" cy="115" r="5" fill="#FFC0AE" opacity=".7"/>
    <text x="158" y="86" font-size="20" fill="#F4978E">z</text>
    <text x="170" y="74" font-size="14" fill="#F4978E">z</text>
  </svg>`,

  smiles: `<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    ${blob('#FFE0E6')}
    <ellipse cx="120" cy="158" rx="58" ry="34" fill="#FFC9D3"/>
    <circle cx="120" cy="104" r="40" fill="#FFE7D8"/>
    <circle cx="106" cy="102" r="4" fill="#7A5C50"/><circle cx="134" cy="102" r="4" fill="#7A5C50"/>
    <path d="M104 116q16 16 32 0" stroke="#C98A72" stroke-width="4" fill="none" stroke-linecap="round"/>
    <circle cx="96" cy="112" r="5.5" fill="#FFB3C2" opacity=".7"/><circle cx="144" cy="112" r="5.5" fill="#FFB3C2" opacity=".7"/>
    <path d="M120 64c10-2 16 6 12 14" stroke="#F4978E" stroke-width="4" fill="none" stroke-linecap="round"/>
  </svg>`,

  reach: `<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    ${blob('#FFEAD4')}
    <ellipse cx="112" cy="160" rx="60" ry="32" fill="#FFD9B0"/>
    <circle cx="104" cy="108" r="38" fill="#FFE7D8"/>
    <circle cx="92" cy="106" r="3.6" fill="#7A5C50"/><circle cx="116" cy="106" r="3.6" fill="#7A5C50"/>
    <path d="M96 120q8 6 16 0" stroke="#C98A72" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M138 132q22-8 34-26" stroke="#FFD0BD" stroke-width="14" fill="none" stroke-linecap="round"/>
    <circle cx="176" cy="100" r="14" fill="#7FB59B"/>
    <circle cx="176" cy="100" r="5" fill="#E3F0E9"/>
  </svg>`,

  sit: `<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    ${blob('#E7E0F6')}
    <ellipse cx="120" cy="172" rx="46" ry="26" fill="#C9BEEC"/>
    <rect x="92" y="120" width="56" height="56" rx="24" fill="#D8CFF2"/>
    <circle cx="120" cy="104" r="36" fill="#FFE7D8"/>
    <circle cx="108" cy="102" r="3.6" fill="#7A5C50"/><circle cx="132" cy="102" r="3.6" fill="#7A5C50"/>
    <path d="M110 114q10 8 20 0" stroke="#C98A72" stroke-width="3" fill="none" stroke-linecap="round"/>
    <circle cx="158" cy="160" r="9" fill="#F4978E"/>
    <path d="M150 150l-10-6" stroke="#FFD0BD" stroke-width="10" stroke-linecap="round"/>
  </svg>`,

  crawl: `<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    ${blob('#FFE3D6')}
    <rect x="78" y="120" width="84" height="40" rx="20" fill="#FFD0BD"/>
    <rect x="84" y="150" width="14" height="30" rx="7" fill="#FFD0BD"/>
    <rect x="142" y="150" width="14" height="30" rx="7" fill="#FFD0BD"/>
    <circle cx="170" cy="120" r="34" fill="#FFE7D8"/>
    <circle cx="180" cy="118" r="3.6" fill="#7A5C50"/><circle cx="160" cy="118" r="3.6" fill="#7A5C50"/>
    <path d="M164 130q8 6 14 0" stroke="#C98A72" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M60 184h120" stroke="#FFCBB6" stroke-width="6" stroke-linecap="round"/>
  </svg>`,

  stand: `<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    ${blob('#E3F0E9')}
    <rect x="104" y="112" width="40" height="64" rx="20" fill="#7FB59B"/>
    <rect x="104" y="168" width="14" height="26" rx="7" fill="#FFD0BD"/>
    <rect x="130" y="168" width="14" height="26" rx="7" fill="#FFD0BD"/>
    <circle cx="124" cy="92" r="34" fill="#FFE7D8"/>
    <circle cx="114" cy="90" r="3.6" fill="#7A5C50"/><circle cx="136" cy="90" r="3.6" fill="#7A5C50"/>
    <path d="M114 102q10 7 20 0" stroke="#C98A72" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M150 150l24 6" stroke="#FFD0BD" stroke-width="11" stroke-linecap="round"/>
  </svg>`,

  walk: `<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    ${blob('#FFEAD4')}
    <rect x="100" y="104" width="40" height="60" rx="20" fill="#F4978E"/>
    <rect x="96" y="158" width="14" height="30" rx="7" fill="#FFD0BD" transform="rotate(-12 103 173)"/>
    <rect x="132" y="158" width="14" height="30" rx="7" fill="#FFD0BD" transform="rotate(12 139 173)"/>
    <circle cx="120" cy="84" r="34" fill="#FFE7D8"/>
    <circle cx="110" cy="82" r="3.6" fill="#7A5C50"/><circle cx="132" cy="82" r="3.6" fill="#7A5C50"/>
    <path d="M110 94q10 8 22 0" stroke="#C98A72" stroke-width="3.4" fill="none" stroke-linecap="round"/>
    <path d="M88 120l-16 4M152 120l16 4" stroke="#FFD0BD" stroke-width="11" stroke-linecap="round"/>
  </svg>`,

  toddler: `<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    ${blob('#E3F0E9')}
    <rect x="56" y="150" width="34" height="34" rx="7" fill="#F4978E"/>
    <rect x="60" y="118" width="26" height="26" rx="6" fill="#7FB59B"/>
    <rect x="100" y="108" width="42" height="62" rx="20" fill="#FFC9D3"/>
    <rect x="104" y="164" width="14" height="26" rx="7" fill="#FFD0BD"/>
    <rect x="128" y="164" width="14" height="26" rx="7" fill="#FFD0BD"/>
    <circle cx="122" cy="88" r="32" fill="#FFE7D8"/>
    <circle cx="113" cy="86" r="3.4" fill="#7A5C50"/><circle cx="133" cy="86" r="3.4" fill="#7A5C50"/>
    <path d="M114 96q9 7 18 0" stroke="#C98A72" stroke-width="3" fill="none" stroke-linecap="round"/>
  </svg>`,
};

window.TAIMI.stages = [
  {
    id: 'newborn',
    minDays: 0, maxDays: 41,            // 0–6 weeks
    title: 'Brand new',
    caption: 'Sleep, feed, repeat. Lots of skin-to-skin and slow days are exactly what your newborn needs right now.',
    art: art.newborn, image: ''
  },
  {
    id: 'smiles',
    minDays: 42, maxDays: 119,          // ~6 weeks – 4 months
    title: 'First smiles',
    caption: 'Around now many babies share their first real social smile and start "chatting" in coos. Smile back — you are their favourite face.',
    art: art.smiles, image: ''
  },
  {
    id: 'reach',
    minDays: 120, maxDays: 180,         // ~4 – 6 months
    title: 'Reaching out',
    caption: 'Hands are the new toy. Reaching, grabbing and rolling are on the way. Soft objects within arm\'s reach invite practice.',
    art: art.reach, image: ''
  },
  {
    id: 'sit',
    minDays: 181, maxDays: 270,         // ~6 – 9 months
    title: 'Sitting up',
    caption: 'A bigger view of the world. Sitting frees both hands to explore, and tiny fingers begin practising the pincer grip 🤏.',
    art: art.sit, image: ''
  },
  {
    id: 'crawl',
    minDays: 271, maxDays: 330,         // ~9 – 11 months
    title: 'On the move',
    caption: 'Crawling, shuffling or bottom-scooting — every baby finds their own way. Time to look at the room from their level.',
    art: art.crawl, image: ''
  },
  {
    id: 'stand',
    minDays: 331, maxDays: 395,         // ~11 – 13 months
    title: 'Pulling to stand',
    caption: 'Furniture becomes a climbing frame. Cruising along the sofa is the rehearsal for those first steps.',
    art: art.stand, image: ''
  },
  {
    id: 'walk',
    minDays: 396, maxDays: 545,         // ~13 – 18 months
    title: 'First steps',
    caption: 'Wobbly, determined and proud. New words often arrive alongside walking — narrate your day and they\'ll soak it up.',
    art: art.walk, image: ''
  },
  {
    id: 'toddler',
    minDays: 546, maxDays: 4000,        // 18 months +
    title: 'Little explorer',
    caption: 'Big feelings, big curiosity. Pretend play, towers of blocks and dozens of new words mark the toddler year.',
    art: art.toddler, image: ''
  },
];
