/* =============================================================
   ARTICLES  —  the "Insights" newsfeed
   -------------------------------------------------------------
   Articles whose age range (minDays–maxDays) includes the baby's
   current age float to the top under "For your baby right now".
   Everything else still appears below under "More to explore".

   FIELDS
     id        unique short text, no spaces        (e.g. "sleep-4m")
     title     headline shown in the feed
     category  one of: Development | Play & learning |
               Relationships | Everyday life | Finland
     minDays   youngest age this is relevant for (in days)
     maxDays   oldest age this is relevant for (in days)
               -> use 0 and 4000 to show it at every age
     readMins  rough reading time, a number
     source    optional: where the info comes from (shown small)
     body      an array of paragraphs (each item = one paragraph)

   The easiest way to write a new one is the Content Studio
   (open studio.html) — it fills this in for you.
   ============================================================= */

window.TAIMI = window.TAIMI || {};

window.TAIMI.articles = [
  {
    id: 'tummy-time',
    title: 'Tummy time, without the tears',
    category: 'Development',
    minDays: 0, maxDays: 180, readMins: 3,
    source: 'General developmental guidance',
    body: [
      'Time spent on the tummy while awake helps babies build the neck, shoulder and back strength they will later use to roll, sit and crawl. A few minutes at a time, several times a day, is plenty at the start.',
      'Many newborns protest at first. Lying chest-to-chest with you, or face-to-face on the floor so they have something interesting to look at, usually goes down better than being placed alone on a mat.',
      'Keep it short and stop before the grumbling turns into real upset — the goal is positive practice, not endurance. As the weeks pass most babies tolerate longer stretches and start pushing up on their forearms.',
    ],
  },
  {
    id: 'social-smile',
    title: 'The first real smile is coming',
    category: 'Development',
    minDays: 28, maxDays: 120, readMins: 2,
    source: '',
    body: [
      'Somewhere around six to eight weeks, the reflexive newborn smiles give way to the real thing: a social smile aimed straight at you. It is one of the first clear two-way conversations you will have.',
      'You can invite it by getting close, making eye contact and talking in the sing-song voice adults naturally slip into with babies. When they smile, smile back and pause — that little rhythm of taking turns is the foundation of language.',
    ],
  },
  {
    id: 'sleep-newborn',
    title: 'Why newborn sleep feels so random',
    category: 'Everyday life',
    minDays: 0, maxDays: 120, readMins: 4,
    source: '',
    body: [
      'In the early weeks babies have not yet developed a day–night rhythm. They sleep in short bursts around the clock because their tiny stomachs need frequent feeds, and that is biologically normal rather than a sign anything is wrong.',
      'You can gently nudge the rhythm along: bright light, activity and noise during the day; dim, calm and quiet at night. Most babies begin to consolidate longer night stretches over the first few months, but every baby is on their own timeline.',
      'Look after the adults too. Sleeping when you can, sharing night duties and lowering the bar on everything non-essential are survival strategies, not luxuries.',
    ],
  },
  {
    id: 'serve-return',
    title: 'Serve and return: the tennis match that builds a brain',
    category: 'Play & learning',
    minDays: 0, maxDays: 730, readMins: 3,
    source: 'Developmental psychology',
    body: [
      'Babies learn through back-and-forth exchanges researchers call "serve and return". Your baby serves — a babble, a gaze, a pointed finger — and you return it by responding in kind. These tiny rallies wire up the connections behind language, attention and emotional regulation.',
      'You do not need special toys or flashcards. Naming what they look at, copying their sounds, and waiting for a response all count. The pause is important: leaving space for them to "reply" teaches the rhythm of conversation long before words arrive.',
    ],
  },
  {
    id: 'pincer-grip',
    title: 'Tiny fingers, big milestone: the pincer grip',
    category: 'Development',
    minDays: 210, maxDays: 365, readMins: 2,
    source: '',
    body: [
      'Between roughly eight and twelve months, babies refine the pincer grip — picking up small objects between thumb and forefinger. It is a leap in fine motor control and usually shows up right around the time finger foods get interesting.',
      'Safe ways to practise include soft, graspable finger foods and large, supervised objects to transfer between hands. As always at this age, keep genuinely small items well out of reach.',
    ],
  },
  {
    id: 'starting-solids',
    title: 'Starting solids: first tastes',
    category: 'Everyday life',
    minDays: 120, maxDays: 240, readMins: 4,
    source: 'Review with your neuvola or doctor',
    body: [
      'Most babies are ready to begin tasting solid foods around the middle of the first year, once they can hold their head steady, sit with support and show interest in what you are eating. Milk stays the main source of nutrition for a while yet — early solids are about exploring tastes and textures.',
      'Offer a variety, go at your baby\'s pace, and expect mess: squishing, dropping and face-pulling are all part of learning. If you have questions about timing, allergens or your individual baby, your neuvola nurse or doctor is the right person to ask.',
    ],
  },
  {
    id: 'reading-aloud',
    title: 'Reading to a baby who can\'t talk yet',
    category: 'Play & learning',
    minDays: 0, maxDays: 1095, readMins: 3,
    source: '',
    body: [
      'It can feel odd to read to someone who only wants to chew the book, but shared reading is one of the most reliable boosts you can give early language. Hearing words, seeing pictures and sitting close all feed into it.',
      'Pick sturdy board books, follow your baby\'s interest rather than finishing every page, and ham it up with voices and sounds. Naming the pictures your baby points to turns story time into a conversation.',
    ],
  },
  {
    id: 'tantrums',
    title: 'Toddler meltdowns are a feature, not a failure',
    category: 'Development',
    minDays: 365, maxDays: 1460, readMins: 4,
    source: '',
    body: [
      'Big feelings in a small body, plus a brain that cannot yet manage them, equals tantrums. They tend to peak in the second year and are a normal part of development rather than a sign you are doing something wrong.',
      'In the moment, safety and calm presence matter more than reasoning. Naming the feeling ("you really wanted that — you\'re so cross") helps your toddler learn that emotions have words and that you can be trusted with the hard ones.',
      'Afterwards, a reconnect — a cuddle, a return to normal — tells them the relationship survived the storm. Over time, this is how self-regulation is built.',
    ],
  },
  {
    id: 'couple-after-baby',
    title: 'Keeping the couple alive after the baby',
    category: 'Relationships',
    minDays: 0, maxDays: 1460, readMins: 4,
    source: '',
    body: [
      'A new baby reshapes a relationship. Sleep is short, time alone is scarce, and it is easy to drift into being co-managers of a household rather than partners. This is extremely common and not a verdict on your relationship.',
      'Small, regular gestures tend to matter more than rare grand ones: a genuine check-in at the end of the day, sharing the mental load out loud, thanking each other for invisible work. Naming how you each like to be supported saves a lot of guesswork.',
      'If resentment is building faster than you can talk it through, that is a normal point to seek help together — many couples find a few sessions early on far easier than untangling things later.',
    ],
  },
  {
    id: 'dividing-load',
    title: 'The invisible load, and how to share it',
    category: 'Relationships',
    minDays: 0, maxDays: 1460, readMins: 3,
    source: '',
    body: [
      'Beyond the visible tasks of caring for a baby sits the "mental load": remembering the neuvola appointment, noticing the nappies are running low, tracking who last had a break. It is real work, and when it lands on one person it quietly wears them down.',
      'Sharing it means handing over whole areas to own, not just tasks to execute on request. "You own everything to do with clothes and sizes" is more restful than "can you grab some bigger onesies when I remind you".',
    ],
  },
  {
    id: 'neuvola',
    title: 'Making the most of your neuvola visits',
    category: 'Finland',
    minDays: 0, maxDays: 1460, readMins: 4,
    source: 'Finnish child health clinic (neuvola) system',
    body: [
      'In Finland the neuvola (child health clinic) follows your child\'s growth and development through regular free check-ups, from the newborn weeks through the toddler years. The same clinic supports the whole family, not only the baby.',
      'It helps to jot down questions as they come up so you remember them at the visit — about feeding, sleep, development, or how you yourself are coping. Nothing is too small to ask, and the nurses have seen it all.',
      'The neuvola is also a route to further support: hearing and vision checks, referrals, and help for parents who are struggling. Treat it as your team, not an exam.',
    ],
  },
  {
    id: 'screen-time',
    title: 'Screens and very young children',
    category: 'Play & learning',
    minDays: 365, maxDays: 1460, readMins: 3,
    source: '',
    body: [
      'For babies and young toddlers, real back-and-forth with people beats a screen every time, because that is how language and attention are built. Under-twos in particular get very little from video on their own.',
      'When screens do appear, watching together and talking about what you see turns passive watching into shared attention. Keeping screens out of the bedtime routine also protects sleep.',
    ],
  },
];
