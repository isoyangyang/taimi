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
  {
    id: 'maternity-package',
    title: 'The maternity package: Finland\'s baby box',
    category: 'Finland',
    minDays: 0, maxDays: 90, readMins: 3,
    source: 'Kela (kela.fi)',
    body: [
      'Every family expecting or adopting a baby in Finland can claim the maternity grant (äitiysavustus) from Kela. You choose between the famous maternity package — a box of baby clothes, care products and bedding — or a tax-free cash payment instead. From spring 2026 the grant is worth 210 euros, and most first-time parents take the box rather than the money.',
      'There is one condition worth knowing: to qualify you need a health check at a maternity clinic or with a doctor before the end of the fourth month of pregnancy. You apply through Kela\'s OmaKela service, ideally a couple of months before your due date.',
      'The box itself is designed to double as the baby\'s first bed, with a small mattress inside. That is part of why the scheme began nearly a century ago — to bring every family, whatever their income, to the same healthy starting line. Contents and amounts change each year, so check kela.fi for the current edition.',
    ],
  },
  {
    id: 'kela-parental-allowance',
    title: 'Parental allowance, in plain terms',
    category: 'Finland',
    minDays: 0, maxDays: 730, readMins: 4,
    source: 'Kela (kela.fi)',
    body: [
      'Finland\'s family-leave money from Kela arrives in stages. First is pregnancy allowance (raskausraha) for the birthing parent, paid for 40 weekdays, with leave usually starting a few weeks before the due date. After that comes parental allowance (vanhempainraha).',
      'Parental allowance covers 320 working days in total — very roughly 13 months. When a child has two parents, each gets half: 160 days. You can hand up to 63 of your own days to the other parent or another carer, and a sole parent can use all 320.',
      'It is built to be flexible. You can take the days in blocks or even one at a time, swap turns with the other parent, and use them any time up until the child turns two. The amount is based on your earlier earnings and is always less than your salary; with no income you receive the minimum daily rate.',
      'Apply about two months before you want the leave to start, and check first whether your employer tops up your pay during leave — if they do, Kela pays your allowance to them. Rates change yearly, and kela.fi has a calculator to estimate yours.',
    ],
  },
  {
    id: 'kela-child-benefit',
    title: 'Child benefit and home-care allowance',
    category: 'Finland',
    minDays: 0, maxDays: 1460, readMins: 3,
    source: 'Kela (kela.fi)',
    body: [
      'Child benefit (lapsilisä) is a monthly, tax-free payment for every child under 17. It is around 95 euros a month for a first child and rises a little for each further child. Families also get a small extra top-up for each child under three, and single parents receive an additional supplement per child.',
      'It is not automatic — you claim it from Kela, either before or after the birth. It is paid from the month after the baby arrives, and can be backdated up to six months if you apply late.',
      'Once your parental-allowance days run out, if you keep caring for an under-three at home rather than using municipal daycare, you may be able to claim child home-care allowance (kotihoidon tuki). Some municipalities add a local supplement (kuntalisä) on top. Amounts are adjusted regularly, so confirm current rates on kela.fi.',
    ],
  },
  {
    id: 'neuvola-checkups',
    title: 'What actually happens at neuvola check-ups',
    category: 'Finland',
    minDays: 0, maxDays: 1460, readMins: 4,
    source: 'Neuvola system / THL',
    body: [
      'The neuvola is free for every family in Finland, whatever your income or background, and the same public health nurse (terveydenhoitaja) tends to follow you the whole way — which is how it builds real trust over the months.',
      'By law, municipalities arrange at least 15 check-ups before a child turns six. In the first months visits come roughly monthly, then space out after about six months, and from age two settle to around once a year. A doctor joins for the bigger "extensive" examinations, which fall around four months, eighteen months and four years.',
      'At each visit the nurse measures growth, watches development, gives the scheduled vaccinations, and talks through feeding, sleep and how the parents are doing. The wider checks deliberately ask about the whole family\'s wellbeing, not only the baby\'s.',
      'You can always ask for an extra appointment if something is worrying you between visits. The clinic is also your gateway to hearing and vision tests, referrals and further family support.',
    ],
  },
  {
    id: 'vaccinations-finland',
    title: 'Vaccinations, the Finnish schedule',
    category: 'Finland',
    minDays: 30, maxDays: 1460, readMins: 3,
    source: 'THL — Finnish Institute for Health and Welfare',
    body: [
      'Finland\'s national vaccination programme protects children against around 13 diseases and is free of charge. The doses are given at the neuvola during the normal age check-ups, so you do not have to arrange them separately.',
      'Vaccines are timed to give protection when a child most needs it, which is why several come in the first months. The whooping-cough combination, for instance, is given at about three, five and twelve months, with a booster later. Other early ones guard against diseases such as rotavirus, pneumococcus, polio, Hib, and measles, mumps and rubella.',
      'Vaccination here is not compulsory, but uptake is very high — well over 90% of families take part — which is what keeps illnesses like measles essentially absent in Finland. Your nurse can walk through the schedule and answer any worries. THL publishes the full, up-to-date programme.',
    ],
  },
  {
    id: 'early-childhood-education',
    title: 'Early childhood education (varhaiskasvatus)',
    category: 'Finland',
    minDays: 240, maxDays: 1460, readMins: 4,
    source: 'InfoFinland / Finnish National Agency for Education',
    body: [
      'In Finland a child has the right to a place in early childhood education (varhaiskasvatus) from the start of the month they turn nine months — in practice, when parental leave ends. Taking it up is voluntary; plenty of families care for a child at home for longer.',
      'It is more than minding children: daycare centres and family daycare follow a national curriculum, with trained teachers and an individual learning plan for each child. There is also lighter "open" provision such as clubs and playgroups.',
      'Apply to your municipality about four months before you want the place to begin. If a parent suddenly lands a job or a study place, a place must be found within two weeks.',
      'Municipal fees depend on family income, family size and hours, up to a maximum of a few hundred euros a month for the youngest child, with discounts for siblings and free places for low-income families. Fee limits are reviewed periodically, so ask your municipality for the current figures.',
    ],
  },
  {
    id: 'vitamin-d',
    title: 'Vitamin D, every single day',
    category: 'Everyday life',
    minDays: 0, maxDays: 1460, readMins: 3,
    source: 'Finnish Food Authority / National Nutrition Council',
    body: [
      'This one surprises many newcomers: in Finland a daily vitamin D supplement is recommended for every child all year round, not only in winter. So far north, the sun is strong enough to make vitamin D in the skin for only about half the year, so drops fill the gap.',
      'For babies under one the recommended amount sits in the range of a few up to ten micrograms a day, and the exact dose depends on how they are fed — a fully breastfed baby needs more from drops than one already taking plenty of fortified formula or porridge. From age two it steps down a little.',
      'Your neuvola nurse will tell you the right amount for your baby and when to begin, usually within the first couple of weeks. It is an easy habit to fold into a daily feed. For the official figures, see the National Nutrition Council guidance.',
    ],
  },
  {
    id: 'breastfeeding-finland',
    title: 'Breastfeeding and first foods, the neuvola line',
    category: 'Everyday life',
    minDays: 0, maxDays: 270, readMins: 3,
    source: 'THL / neuvola guidance (WHO-aligned)',
    body: [
      'Finnish clinics follow the WHO line: breast milk alone for about the first six months, then breastfeeding continuing alongside other foods for as long as it suits the family — often well into the second year. "Exclusive" here means only breast milk, plus the recommended vitamin D and any medicine the baby needs.',
      'First solid tastes usually begin somewhere between four and six months, depending on the baby\'s readiness, while milk stays the main source of nourishment. The neuvola can guide the timing and reassure you that fed — by breast, bottle or both — is what counts.',
      'Breastfeeding is one of the things the clinic routinely asks about, partly so they can offer help early if it is painful or not going smoothly. Support is there for the asking, including lactation help.',
    ],
  },
  {
    id: "newborn-reflexes",
    title: "The reflexes your newborn is born with",
    category: "Development",
    minDays: 0, maxDays: 90, readMins: 3,
    source: "General developmental guidance",
    body: [
      "A newborn arrives with a set of built-in reflexes. Stroke a cheek and they turn to root for a feed; press a palm and tiny fingers curl around your finger with a surprisingly strong grip.",
      "The startle, or Moro, reflex is the dramatic one: a sudden noise or feeling of falling makes the arms fling out and then pull back in. It can wake a sleeping baby, which is part of why swaddling the early weeks can help.",
      "These reflexes fade over the first months as deliberate, controlled movements take over. Their coming and going is one of the things the neuvola quietly checks at the early visits.",
    ],
  },
  {
    id: "baby-vision",
    title: "What your baby can actually see",
    category: "Development",
    minDays: 0, maxDays: 150, readMins: 3,
    source: "General developmental guidance",
    body: [
      "At birth, vision is blurry beyond about 20–30 centimetres — roughly the distance to your face during a feed, which is no accident. High-contrast patterns and faces hold their attention far better than soft pastel scenes.",
      "Over the first months focus sharpens, both eyes start working together, and colour vision fills in. By around two to three months many babies will track a moving face or toy across their line of sight.",
      "You do not need special black-and-white gadgets. Your face, slow movement and a bit of contrast are the best things to look at while their visual system wires itself up.",
    ],
  },
  {
    id: "hearing-knows-your-voice",
    title: "They already know your voice",
    category: "Development",
    minDays: 0, maxDays: 120, readMins: 2,
    source: "General developmental guidance",
    body: [
      "Hearing is well developed before birth, so a newborn already recognises the rhythm of their parents' voices and may calm to them. This is why talking and singing — even narrating the nappy change — is never wasted.",
      "Babies are tuned to the sing-song, high-pitched way adults naturally talk to them. It holds attention and marks out the edges of words, which is early groundwork for language.",
      "Newborn hearing is screened in Finland, and the neuvola keeps an eye on responses to sound at later visits, so flag anything that worries you.",
    ],
  },
  {
    id: "head-control",
    title: "Building head control",
    category: "Development",
    minDays: 30, maxDays: 150, readMins: 2,
    source: "General developmental guidance",
    body: [
      "Those wobbly early weeks give way to steadier head control as neck and upper-back muscles strengthen. Tummy time and being held upright against your shoulder both build it.",
      "By around three to four months most babies can hold their head steady when supported sitting, and push up on their forearms during tummy time. It is the foundation everything else — rolling, sitting, reaching — is built on.",
    ],
  },
  {
    id: "rolling-over",
    title: "Learning to roll",
    category: "Development",
    minDays: 90, maxDays: 210, readMins: 2,
    source: "General developmental guidance",
    body: [
      "Rolling is often the first big move a baby makes on their own. Tummy-to-back tends to come first, sometimes by accident, before the more deliberate back-to-tummy roll.",
      "Once rolling starts, the changing table and sofa suddenly become hazards — never step away from a baby on a raised surface. Plenty of floor time is the best practice space.",
    ],
  },
  {
    id: "sitting-up",
    title: "Sitting up to see the world",
    category: "Development",
    minDays: 150, maxDays: 270, readMins: 2,
    source: "General developmental guidance",
    body: [
      "Independent sitting usually arrives somewhere between six and eight months, often after a wobbly tripod phase where a baby props forward on their hands.",
      "Sitting frees the hands for exploring and changes how a baby sees the room. Cushions around them soften the inevitable topples while their balance catches up.",
    ],
  },
  {
    id: "object-permanence",
    title: "Where did it go? The peekaboo breakthrough",
    category: "Development",
    minDays: 180, maxDays: 365, readMins: 3,
    source: "General developmental guidance",
    body: [
      "Young babies act as if a hidden toy has simply ceased to exist. Somewhere in the second half of the first year that changes: they grasp that things still exist when out of sight. This is object permanence.",
      "It is exactly why peekaboo suddenly becomes hilarious — your face vanishing and returning is now a thrilling little drama with a happy ending.",
      "The same leap explains why a dropped spoon gets dropped on purpose, again and again. They are testing a brand-new idea about how the world works, not winding you up (mostly).",
    ],
  },
  {
    id: "separation-anxiety",
    title: "Separation anxiety is a good sign",
    category: "Development",
    minDays: 210, maxDays: 540, readMins: 3,
    source: "General developmental guidance",
    body: [
      "Around eight to ten months many babies who were happy to be passed around suddenly cling, cry when you leave the room, and want only you. It can feel like a step backwards. It is the opposite.",
      "It means your baby has formed a strong attachment and now knows the difference between you and everyone else — and has just realised you can leave. The new object-permanence skill is part of it.",
      "Short, calm goodbyes, a confident handover and a reliable return all help. It eases over the toddler months as they learn that you always come back.",
    ],
  },
  {
    id: "crawling",
    title: "On the move: crawling and shuffling",
    category: "Development",
    minDays: 210, maxDays: 400, readMins: 2,
    source: "General developmental guidance",
    body: [
      "Crawling is wonderfully varied. Classic hands-and-knees is only one route; plenty of babies bottom-shuffle, commando-crawl on their tummy, or roll to where they want to go. Some skip it entirely and go straight to pulling up.",
      "However they do it, getting mobile is the cue to look at the room from floor level: secure heavy furniture, move cables and small objects, and put gates where you need them.",
    ],
  },
  {
    id: "pulling-up-cruising",
    title: "Pulling up and cruising the furniture",
    category: "Development",
    minDays: 270, maxDays: 420, readMins: 2,
    source: "General developmental guidance",
    body: [
      "Once a baby can haul themselves upright against the sofa, the next trick is cruising — stepping sideways while holding on. It builds the leg strength and balance that walking needs.",
      "Expect bumped bottoms as they work out how to get back down again. Low, stable things to pull up on and a clear, soft floor make the practice safer.",
    ],
  },
  {
    id: "babble-to-words",
    title: "From babble to first words",
    category: "Development",
    minDays: 180, maxDays: 540, readMins: 3,
    source: "General developmental guidance",
    body: [
      "Cooing turns into babbling — \"ba-ba\", \"da-da\" — usually in the second half of the first year. At first the sounds mean nothing in particular; the baby is rehearsing the building blocks of speech.",
      "Real first words often land around the first birthday, give or take several months, and understanding runs well ahead of speaking. Your baby grasps far more than they can say.",
      "Talking through your day, naming things, pausing for their reply and reading together all feed this. In bilingual and Finnish-Swedish-other homes, hearing rich language in each tongue is a gift, not a confusion.",
    ],
  },
  {
    id: "gestures-pointing",
    title: "Pointing and waving: talking before words",
    category: "Development",
    minDays: 270, maxDays: 480, readMins: 2,
    source: "General developmental guidance",
    body: [
      "Long before fluent speech, babies communicate with their bodies: waving bye-bye, lifting arms to be picked up, and — a big one — pointing.",
      "Pointing to share (\"look at that!\") rather than just to demand shows your baby wants to direct your attention and check you have seen it too. Naming whatever they point at links the gesture to words.",
    ],
  },
  {
    id: "first-steps",
    title: "First steps: what's really going on",
    category: "Development",
    minDays: 330, maxDays: 540, readMins: 3,
    source: "General developmental guidance",
    body: [
      "Walking arrives anywhere across a wide window — many around the first birthday, plenty comfortably later, and all of it normal. Late walkers are not behind; they are on their own timetable.",
      "Barefoot is best indoors for balance and foot development; shoes are mainly for outside. Those first tottering, wide-legged steps quickly become more confident with practice.",
      "If your toddler is well past the usual window or you have any worries about how they move, the neuvola is the place to raise it.",
    ],
  },
  {
    id: "toddler-autonomy",
    title: "\"Minä itse\": the urge to do it themselves",
    category: "Development",
    minDays: 450, maxDays: 1095, readMins: 3,
    source: "General developmental guidance",
    body: [
      "Somewhere in the second year toddlers discover they are separate people with their own will — and they want to do everything themselves, from the zip to the spoon to walking the wrong way down the street.",
      "It is exhausting and it is healthy. The drive behind \"minä itse\" (\"me, myself\") is the same one that will later make them capable and independent.",
      "Offering small real choices, building in extra time for self-done tasks, and saving firm limits for what truly matters lets them flex their independence without the day becoming a battle.",
    ],
  },
  {
    id: "big-feelings",
    title: "Helping a toddler with big feelings",
    category: "Development",
    minDays: 540, maxDays: 1460, readMins: 3,
    source: "General developmental guidance",
    body: [
      "Toddlers feel enormous emotions in a brain that has not yet built the brakes to manage them. A meltdown is a nervous system overwhelmed, not a child being manipulative.",
      "Staying calm yourself is the most useful thing you can do, because they borrow your steadiness. Naming the feeling — \"you really wanted that, it's so disappointing\" — teaches the words for what is happening inside.",
      "Over months and years, repeated calm responses help the brain wire up its own regulation. You are not spoiling them by comforting; you are coaching.",
    ],
  },
  {
    id: "learning-through-repetition",
    title: "Why toddlers do the same thing 100 times",
    category: "Development",
    minDays: 300, maxDays: 1095, readMins: 2,
    source: "General developmental guidance",
    body: [
      "The same book, the same song, the same posting-things-through-a-gap, over and over — repetition is how a young brain locks in a skill or idea. Each repeat is practice, not boredom.",
      "It is also how they build a sense of a safe, predictable world. When you can bear it, joining in beats redirecting; when you cannot, that is fine too.",
    ],
  },
  {
    id: "songs-and-rhymes",
    title: "Singing, rhymes and lap games",
    category: "Play & learning",
    minDays: 0, maxDays: 1095, readMins: 3,
    source: "General early-learning guidance",
    body: [
      "You do not need a good voice — babies love yours regardless. The rhythm and repetition of songs and nursery rhymes mark out the sounds of language and hold attention beautifully.",
      "Lap games with actions, like Finnish favourites such as \"Harakka huttua keittää\" or a bouncing knee-ride, add anticipation and turn-taking — early conversation in disguise.",
      "A handful of songs on heavy rotation, especially around nappy changes and bedtime, also become soothing signposts in a baby's day.",
    ],
  },
  {
    id: "sensory-play",
    title: "Sensory play for little hands",
    category: "Play & learning",
    minDays: 120, maxDays: 730, readMins: 2,
    source: "General early-learning guidance",
    body: [
      "Babies learn the world through their senses, and especially their mouths. Safe objects with different textures, weights and sounds — wooden spoons, fabric scraps, crinkly paper — are often more interesting than fancy toys.",
      "Supervised messy play, like squishing cooked pasta or patting a little water, builds curiosity and fine-motor control. Expect mess; that is the point. A towel underneath saves the floor.",
    ],
  },
  {
    id: "treasure-basket",
    title: "Treasure baskets and heuristic play",
    category: "Play & learning",
    minDays: 180, maxDays: 540, readMins: 3,
    source: "General early-learning guidance",
    body: [
      "A \"treasure basket\" is simply a low container of everyday, mostly non-plastic objects — a wooden ring, a metal whisk, a pine cone, a fabric pouch — for a sitting baby to explore freely.",
      "With no batteries and no right answer, the baby decides what to pick up, mouth, bang and compare. This open-ended exploration is rich learning, and it is nearly free to set up.",
      "Rotate the contents now and then to keep it fresh, and check everything is too big to swallow and has no sharp edges or loose parts.",
    ],
  },
  {
    id: "outdoor-play-nature",
    title: "Outside every day, the Finnish way",
    category: "Play & learning",
    minDays: 0, maxDays: 1460, readMins: 3,
    source: "Finnish outdoor-life custom",
    body: [
      "In Finland time outdoors is treated as a daily essential, not a fair-weather treat — \"there's no bad weather, only bad clothing\" is practically a national motto. Fresh air, natural light and changing scenery are good for babies and parents alike.",
      "For a small baby, outside can be as simple as a pram walk or a blanket under a tree. As they grow, let them touch the snow, splash a puddle, feel bark and carry sticks — unstructured nature play is some of the best learning there is.",
      "Dress for the day, keep an eye on hands and cheeks for warmth, and let the forest, park or yard do the rest.",
    ],
  },
  {
    id: "peekaboo-games",
    title: "Peekaboo and the joy of surprise",
    category: "Play & learning",
    minDays: 90, maxDays: 365, readMins: 2,
    source: "General early-learning guidance",
    body: [
      "Peekaboo is a tiny masterpiece of baby entertainment: a face disappears, tension builds, and — there you are again. The relief and delight are real, and they are learning that you reliably come back.",
      "Vary it to keep it alive: hide behind your hands, pop up from different sides, or drape a light cloth they can pull off themselves once they are able.",
    ],
  },
  {
    id: "books-by-age",
    title: "Reading together as they grow",
    category: "Play & learning",
    minDays: 0, maxDays: 1095, readMins: 3,
    source: "General early-literacy guidance",
    body: [
      "Sharing books from the newborn days builds language, closeness and a love of reading long before a child understands the story. For tiny babies, high-contrast and black-and-white books suit their vision.",
      "Older babies want sturdy board books they can grab and chew, with simple pictures to name. Toddlers love flaps, textures, rhythm and the same favourite read for the hundredth time.",
      "Most Finnish libraries are free, welcoming to families, and a brilliant source of baby books, song sessions and a warm place to be — well worth a regular visit.",
    ],
  },
  {
    id: "cause-and-effect-toys",
    title: "Why babies love cause and effect",
    category: "Play & learning",
    minDays: 180, maxDays: 540, readMins: 2,
    source: "General early-learning guidance",
    body: [
      "Press a button, a sound plays; shake a rattle, it rattles; drop a cup, it clatters. Discovering that their actions make things happen is thrilling for a baby — and a foundational idea about how the world works.",
      "Simple toys that respond to a baby's own movement teach this better than ones that just light up on their own. Household objects often do the job perfectly.",
    ],
  },
  {
    id: "schemas-play",
    title: "Schemas: the method behind toddler madness",
    category: "Play & learning",
    minDays: 365, maxDays: 1095, readMins: 3,
    source: "General early-learning guidance",
    body: [
      "If your toddler endlessly throws things, lines them up, wraps everything in cloth, or empties every drawer, you may be watching a \"schema\" — a repeated pattern of play through which they explore one idea, like trajectory, enclosing or transporting.",
      "Seen this way, the chaos has a logic. Throwing is research into how things move; carrying handbags of random objects is research into transporting.",
      "You can lean into it safely: offer balls and beanbags for the thrower, baskets and bags for the transporter. It tends to channel the urge better than fighting it.",
    ],
  },
  {
    id: "messy-water-play",
    title: "Water and messy play",
    category: "Play & learning",
    minDays: 240, maxDays: 1095, readMins: 2,
    source: "General early-learning guidance",
    body: [
      "A shallow tub of water, a few cups and a spoon can absorb a toddler for ages — pouring, splashing and tipping teach volume, cause and effect, and fine-motor control without a single instruction.",
      "Always stay within arm's reach around any water, even a small amount, and tip it away straight afterwards. Bath time counts as water play too.",
    ],
  },
  {
    id: "safe-sleep",
    title: "Safe sleep basics",
    category: "Everyday life",
    minDays: 0, maxDays: 365, readMins: 3,
    source: "General infant safe-sleep guidance",
    body: [
      "The core safe-sleep advice is steady worldwide: put a baby down on their back for every sleep, on a firm, flat surface, in their own clear space — no soft pillows, bumpers or loose bedding around them.",
      "Sharing a room (not the same bed) for the early months, keeping the room from getting too hot, and avoiding smoke around the baby all lower risk. A baby sleeping bag keeps them warm without a loose blanket.",
      "Your neuvola can talk through your own setup, including the maternity-package box, which is designed to work as a safe first bed.",
    ],
  },
  {
    id: "sleep-regressions",
    title: "Sleep regressions, explained",
    category: "Everyday life",
    minDays: 90, maxDays: 730, readMins: 3,
    source: "General infant-sleep guidance",
    body: [
      "Just as you think sleep is sorted, it can fall apart — often around four months, and again at later points. These \"regressions\" usually line up with leaps in development or new skills the brain is busy practising.",
      "The four-month change is actually permanent: a baby's sleep matures into more adult-like cycles, with more chances to surface between them. It feels like a step back but it is growth.",
      "Keeping bedtime calm and predictable, and riding out the rough patch rather than overhauling everything, gets most families through. They pass.",
    ],
  },
  {
    id: "naps-by-age",
    title: "How naps change over the first two years",
    category: "Everyday life",
    minDays: 0, maxDays: 730, readMins: 3,
    source: "General infant-sleep guidance",
    body: [
      "Newborn sleep is scattered round the clock in short bursts. Over the first year naps gradually consolidate and reduce — from many catnaps, to roughly three, then two.",
      "Most toddlers drop to a single midday nap somewhere in the second year, and that one can hang on for a good while yet. There is wide normal variation in how much sleep any individual baby needs.",
      "Watching your baby's tired signs usually works better than the clock. Outdoor naps, a Finnish favourite, often stretch longer than indoor ones.",
    ],
  },
  {
    id: "outdoor-napping-finland",
    title: "The Finnish outdoor nap",
    category: "Everyday life",
    minDays: 14, maxDays: 730, readMins: 4,
    source: "Finnish outdoor-napping custom / neuvola guidance",
    body: [
      "Letting babies nap outdoors in the pram, even in winter, is a normal and much-loved part of Finnish life — in one northern study almost all families did it, often starting at just a couple of weeks old. Parents report longer, deeper naps and fewer sniffles.",
      "Around freezing to a few degrees below is widely seen as ideal napping weather. Many neuvolas suggest not below about minus ten, and to skip it when it is very windy or wet; advice varies by clinic, so ask yours.",
      "The kit matters: a pram with a firm flat base, a proper insulated, water-resistant sleeping bag, wool layers, and always a hat. Dress warmly but do not overdo it — feel the chest, not the hands, to judge temperature, keep the face uncovered so air flows freely, watch out for pets getting into the pram, and check on them often.",
    ],
  },
  {
    id: "dressing-finnish-weather",
    title: "Dressing a baby for Finnish weather",
    category: "Everyday life",
    minDays: 0, maxDays: 1460, readMins: 3,
    source: "Finnish cold-weather guidance",
    body: [
      "Layers are the whole secret. A wool or wool-blend base layer next to the skin, an insulating middle layer, and a windproof, water-resistant outer suit handle most of the Finnish year, and let you add or strip a layer as the day changes.",
      "Wool is prized here because it keeps warming even when slightly damp. For a baby who is being carried or wheeled rather than moving, a rough guide is one more layer than an active adult would wear, plus a hat, and mittens and warm socks or booties.",
      "Check warmth at the chest or back of the neck rather than the hands, which are normally cooler. The aim is cosy, not sweaty — overheating is its own problem.",
    ],
  },
  {
    id: "teething",
    title: "Teething: what actually helps",
    category: "Everyday life",
    minDays: 90, maxDays: 730, readMins: 3,
    source: "General infant-health guidance",
    body: [
      "First teeth usually appear somewhere from around six months, though earlier and later are both common, and the bottom front pair often lead. Drooling, chewing on everything and grumpiness can come with it.",
      "Something firm and cold to gnaw helps: a chilled (not frozen) teething ring, a clean cold cloth, or letting them chew on something safe and big enough not to be a choking risk.",
      "Teething gets blamed for a lot. A high fever or a genuinely unwell baby is not just teething — check in with the neuvola or the medical helpline if you are worried.",
    ],
  },
  {
    id: "finger-foods-blw",
    title: "Finger foods and baby-led weaning",
    category: "Everyday life",
    minDays: 150, maxDays: 400, readMins: 3,
    source: "General infant-feeding guidance",
    body: [
      "Once solids are under way, many Finnish families let babies feed themselves soft, graspable pieces alongside or instead of purées — sometimes called baby-led weaning. It builds chewing, coordination and a relaxed relationship with food.",
      "Offer soft items cut to a size little hands can hold, like a strip of cooked vegetable or soft fruit. Expect enthusiastic mess, and remember milk stays the main source of nutrition through the first year.",
      "Learn the difference between gagging — noisy, normal, and how babies manage food — and quiet choking, and always stay with a baby who is eating. Your neuvola can guide timing and readiness.",
    ],
  },
  {
    id: "introducing-allergens",
    title: "Introducing common allergens",
    category: "Everyday life",
    minDays: 120, maxDays: 365, readMins: 3,
    source: "General infant-feeding guidance",
    body: [
      "Current thinking has flipped from the old \"delay and avoid\" approach: introducing common allergy foods — such as egg, dairy, wheat, fish and smooth nut or peanut products — in the normal first-foods window, rather than holding off, is now generally encouraged.",
      "Introduce them one at a time in baby-suitable forms (no whole nuts, which are a choking risk) so any reaction is easy to spot, and keep going with foods that are tolerated.",
      "If your baby has severe eczema, an existing food allergy, or a strong family history, talk to the neuvola or a doctor before you start, as the plan may differ.",
    ],
  },
  {
    id: "baby-skin-cradle-cap",
    title: "Baby skin, cradle cap and nappy care",
    category: "Everyday life",
    minDays: 0, maxDays: 365, readMins: 2,
    source: "General infant-health guidance",
    body: [
      "Newborn skin does its own thing — peeling, blotches, little spots and milia all come and go and usually need nothing but time. Cradle cap, the yellowish scalp scale, is harmless; gentle washing and soft brushing help it along.",
      "For the nappy area, frequent changes, a gentle clean and some air time are the best defence against soreness. A barrier cream protects against redness; check with the neuvola if a rash is severe, weepy or not settling.",
    ],
  },
  {
    id: "bathing-newborn",
    title: "Bathing a newborn",
    category: "Everyday life",
    minDays: 0, maxDays: 180, readMins: 2,
    source: "General infant-care guidance",
    body: [
      "Newborns do not need daily baths — a couple of times a week is plenty, with a wipe of the face, neck folds and nappy area in between. Too much washing can dry out their skin.",
      "Use plain warm water or a tiny amount of mild baby wash, support the head and neck at all times, and never leave a baby alone in or near water for even a moment. A warm room and a ready towel make it calmer for everyone.",
    ],
  },
  {
    id: "first-teeth-brushing",
    title: "First teeth and brushing",
    category: "Everyday life",
    minDays: 150, maxDays: 1095, readMins: 2,
    source: "General oral-health guidance",
    body: [
      "Start brushing as soon as the first tooth appears, twice a day, with a soft small brush and a smear of fluoride toothpaste. Making it a routine early heads off battles later.",
      "Avoid sugary drinks and bedtime bottles of anything but water once teeth are in. In Finland, children's dental care is part of public health services, and the neuvola will point you to your first dental check.",
    ],
  },
  {
    id: "finding-other-parents",
    title: "Finding your people: meeting other parents",
    category: "Relationships",
    minDays: 0, maxDays: 1095, readMins: 3,
    source: "MLL (Mannerheim League for Child Welfare)",
    body: [
      "New-parent days can be surprisingly lonely, and other parents are some of the best medicine. In Finland the Mannerheim League for Child Welfare (MLL) runs free family cafés (perhekahvila) all over the country — drop-in places to meet other families while the children play.",
      "Many areas also have family centres (perhekeskus) and neuvola-organised groups for parents whose babies are around the same age, which can turn into real friendships and a shared sense of \"it's not just me\".",
      "If getting out feels hard, even one regular meet-up a week helps. The clinic can tell you what is on near you.",
    ],
  },
  {
    id: "parental-wellbeing",
    title: "Looking after the parent, too",
    category: "Relationships",
    minDays: 0, maxDays: 365, readMins: 3,
    source: "Neuvola / general perinatal guidance",
    body: [
      "Feeling tearful, wrung out and all over the place in the first week or two after birth — the \"baby blues\" — is extremely common and usually eases on its own as hormones and sleep settle.",
      "If low mood, anxiety or a flat numbness lingers beyond a couple of weeks, gets heavier, or makes it hard to enjoy or cope with your baby, that is worth talking about. It is common, it is not a failure, and it responds well to support.",
      "The neuvola routinely asks how parents are doing, for exactly this reason, and can connect you to help — and it is not only for the birthing parent; partners can struggle too. The MLL Parent Helpline offers a listening ear, and for anything urgent the medical helpline 116117 can guide you. This is a sensitive area, so please reach out to your neuvola, a doctor or someone you trust if any of this resonates.",
    ],
  },
  {
    id: "partner-communication",
    title: "Talking, instead of keeping score",
    category: "Relationships",
    minDays: 0, maxDays: 1460, readMins: 3,
    source: "General relationship guidance",
    body: [
      "Under broken sleep, almost every couple drifts into silently tallying who did more. The tally rarely matches between two tired people, and it corrodes goodwill fast.",
      "A short, regular check-in — even ten minutes to compare notes on the week and what each of you needs — tends to work far better than score-keeping. Naming appreciation out loud helps just as much as sorting logistics.",
      "Disagreeing about how to parent is normal; doing it respectfully, and presenting a united front to a watching toddler, is the part that matters.",
    ],
  },
  {
    id: "grandparents-family",
    title: "Grandparents and the wider family",
    category: "Relationships",
    minDays: 0, maxDays: 1460, readMins: 2,
    source: "General family guidance",
    body: [
      "Willing grandparents and relatives can be a lifeline — for a nap, a hot meal, or simply adult company. Accepting help is a strength, not a weakness, and most people genuinely want to be asked.",
      "Where advice or expectations clash with how you want to parent, kind and clear is the aim: thank them for caring, then state your line. You are the parent, and consistency between the adults helps your child most.",
    ],
  },
  {
    id: "single-parents",
    title: "Parenting solo, at least some of the time",
    category: "Relationships",
    minDays: 0, maxDays: 1460, readMins: 2,
    source: "General family guidance",
    body: [
      "Whether you are a single parent or just frequently on your own with the baby, doing it without a second pair of hands is genuinely harder, and feeling that does not make you ungrateful or inadequate.",
      "Building even a small support network matters more here than for anyone: family, friends, a neighbour, MLL family cafés, peer groups. In Finland the neuvola and family services can also point single parents to practical and financial support, including the single-parent supplement to child benefit.",
    ],
  },
  {
    id: "intimacy-after-baby",
    title: "Reconnecting as a couple",
    category: "Relationships",
    minDays: 60, maxDays: 1460, readMins: 2,
    source: "General relationship guidance",
    body: [
      "Closeness often takes a back seat after a baby, between exhaustion, a recovering body and the sheer demands of the day. That is normal, and there is no schedule you are supposed to be on.",
      "Small reconnections — a proper conversation, a shared cup of coffee once the baby is down, a bit of affection with no agenda — usually rebuild the bond before anything else does. Talking honestly about where each of you is beats guessing.",
    ],
  },
  {
    id: "asking-for-help",
    title: "Asking for help is built into the system here",
    category: "Relationships",
    minDays: 0, maxDays: 1460, readMins: 2,
    source: "Finnish family-services overview",
    body: [
      "Finland's family support is designed on the assumption that everyone needs a hand sometimes — the free neuvola, family centres, home-help services, helplines and peer groups are there to be used, not saved for a crisis.",
      "If you are stretched, struggling or just unsure, reaching out early is exactly what these services are for. Start with your neuvola; they are the hub that connects families to almost everything else.",
    ],
  },
  {
    id: "when-baby-is-sick",
    title: "When your baby is sick: who to call",
    category: "Finland",
    minDays: 0, maxDays: 1460, readMins: 3,
    source: "Medical Helpline 116117 / wellbeing services counties",
    body: [
      "For a sudden but non-emergency worry — a fever, a rash, a cough, an unsettled night you are unsure about — call the medical helpline 116117. It is free, open around the clock across Finland, answered by health professionals, and they will either give home-care advice or tell you how and where to be seen.",
      "On weekdays your own health station or neuvola is the first port of call for non-urgent things. The helpline is especially useful in the evenings and at weekends, and you are meant to call it before heading to an emergency department.",
      "In a genuine emergency — serious trouble breathing, unresponsiveness, a fit or convulsion — call 112 straight away. Trust your instinct: you know your baby.",
    ],
  },
  {
    id: "sick-child-leave",
    title: "Staying home with a sick child",
    category: "Finland",
    minDays: 0, maxDays: 1460, readMins: 2,
    source: "InfoFinland / Finnish employment rules",
    body: [
      "A feverish or ill child cannot go to daycare, so Finnish working life makes room for it: when a child under ten suddenly falls ill, a parent can take temporary child-care leave to look after them, for up to four days at a time.",
      "Whether those days are paid depends on your sector's collective agreement, so it is worth checking yours in advance. The point is that staying home with a sick small child is a recognised, normal part of working parenthood here.",
    ],
  },
  {
    id: "neuvola-card",
    title: "Your neuvola card",
    category: "Finland",
    minDays: 0, maxDays: 1460, readMins: 2,
    source: "Neuvola",
    body: [
      "At the child health clinic your baby gets their own neuvola card, where the nurse records growth, development and every vaccination. Bring it to each visit, and to any doctor's appointment, so everyone is working from the same picture.",
      "If you move — within Finland or into the country — contact the neuvola in your new area so your child stays on the clinic's invitation list and nothing is missed. The card may also be kept electronically.",
    ],
  },
];
