/* =================================================================
   TAIMI — app logic (vanilla JS, no build step, no dependencies)
   -----------------------------------------------------------------
   Data lives in two places:
     • CONTENT  -> the editable files in /content (and studio.html)
     • USER DATA -> saved in this browser via localStorage:
         taimi.profile  { name, birthday }
         taimi.diary    [ { id, ts, text, audio } ]
         taimi.posts    [ { id, name, ageText, text, ts } ]
         taimi.likes    [ postId, postId, ... ]
   No data leaves the device. See README for adding a real backend.
   ================================================================= */
(function () {
  'use strict';

  const C = window.TAIMI || {};
  const view = document.getElementById('view');
  const bar = {
    el: document.getElementById('appbar'),
    left: document.getElementById('navLeft'),
    title: document.getElementById('navTitle'),
    journey: document.getElementById('navJourney'),
    settings: document.getElementById('navSettings'),
    right: document.querySelector('.appbar__right'),
  };

  const DAY = 86400000;
  const DOW = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']; // Monday-first (Finland)

  /* ---------- storage helpers ---------- */
  const store = {
    get(k, fb) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : fb; } catch { return fb; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch { return false; } },
    del(k) { try { localStorage.removeItem(k); } catch {} },
  };

  let profile = store.get('taimi.profile', null);
  let diary = store.get('taimi.diary', []);
  let posts = store.get('taimi.posts', []);
  let likes = new Set(store.get('taimi.likes', []));

  /* ---------- date / age helpers ---------- */
  const startOfDay = (d) => { const x = new Date(d); x.setHours(0, 0, 0, 0); return x; };
  const parseDate = (s) => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); };
  const fmtKey = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

  function ageDaysAt(when) {
    if (!profile) return 0;
    return Math.floor((startOfDay(when) - startOfDay(parseDate(profile.birthday))) / DAY);
  }
  function diffYMD(bd, now) {
    let y = now.getFullYear() - bd.getFullYear();
    let m = now.getMonth() - bd.getMonth();
    let d = now.getDate() - bd.getDate();
    if (d < 0) { m--; d += new Date(now.getFullYear(), now.getMonth(), 0).getDate(); }
    if (m < 0) { y--; m += 12; }
    return { y, m, d };
  }
  function ageText(days, at) {
    if (days < 0) return 'Coming soon';
    if (days === 0) return 'Born today 🎉';
    if (days < 14) return `${days} day${days > 1 ? 's' : ''} old`;
    if (days < 84) {
      const w = Math.floor(days / 7), d = days % 7;
      return `${w} weeks${d ? `, ${d} day${d > 1 ? 's' : ''}` : ''}`;
    }
    const { y, m, d } = diffYMD(startOfDay(parseDate(profile.birthday)), startOfDay(at || new Date()));
    if (y < 2) {
      const months = y * 12 + m, w = Math.floor(d / 7);
      return `${months} months${w ? `, ${w} week${w > 1 ? 's' : ''}` : ''}`;
    }
    return `${y} year${y > 1 ? 's' : ''}${m ? `, ${m} month${m > 1 ? 's' : ''}` : ''}`;
  }
  // compact age, e.g. "5 mo", "3 wk", "1 yr 2 mo"
  function ageShort(days, at) {
    if (days < 0) return 'soon';
    if (days < 14) return `${days}d`;
    if (days < 84) return `${Math.floor(days / 7)} wk`;
    const { y, m } = diffYMD(startOfDay(parseDate(profile.birthday)), startOfDay(at || new Date()));
    if (y < 1) return `${m} mo`;
    return `${y} yr${m ? ` ${m} mo` : ''}`;
  }

  function currentStage(days) {
    const s = (C.stages || []).find((st) => days >= st.minDays && days <= st.maxDays);
    return s || (C.stages || [])[C.stages.length - 1];
  }

  /* ---------- small utils ---------- */
  const esc = (s) => String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');

  function toast(msg) {
    let t = document.querySelector('.toast');
    if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t); }
    t.textContent = msg; t.classList.add('show');
    clearTimeout(toast._t); toast._t = setTimeout(() => t.classList.remove('show'), 2200);
  }

  const tagClass = (cat) => ({
    'Development': 'tag--dev', 'Play & learning': 'tag--play', 'Relationships': 'tag--rel',
    'Everyday life': 'tag--life', 'Finland': 'tag--fin',
  }[cat] || 'tag--dev');

  const AVATAR_COLORS = ['#FF9E80', '#86C2A6', '#A493DA', '#F4978E', '#7FB59B', '#E0A85B'];
  const avatarColor = (name) => {
    let h = 0; for (const ch of String(name)) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
    return AVATAR_COLORS[h % AVATAR_COLORS.length];
  };

  /* ---------- app bar ---------- */
  function setBar(opts) {
    const o = opts || {};
    if (o.back) {
      bar.left.innerHTML = '<span class="backbtn" aria-hidden="true"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg></span>';
      bar.left.setAttribute('aria-label', 'Back');
      bar.title.hidden = false; bar.title.textContent = o.title || '';
      bar.right.style.visibility = 'hidden';
    } else {
      bar.left.innerHTML = '<span class="brand"><span class="brand__leaf" aria-hidden="true">🌱</span><span class="brand__name">Taimi</span></span>';
      bar.left.setAttribute('aria-label', 'Home');
      bar.title.hidden = true;
      bar.right.style.visibility = profile ? 'visible' : 'hidden';
    }
  }

  /* ---------- router ---------- */
  let route = 'home';
  const stack = [];
  function nav(to, params, push = true) {
    if (push && route !== to) stack.push({ route, params: nav._p });
    route = to; nav._p = params || {};
    render();
    view.scrollTop = 0; window.scrollTo(0, 0);
  }
  function back() {
    const prev = stack.pop();
    if (prev) { route = prev.route; nav._p = prev.params || {}; render(); }
    else nav('home', {}, false);
    window.scrollTo(0, 0);
  }

  bar.left.addEventListener('click', () => { if (bar.title.hidden) nav('home', {}, false); else back(); });
  bar.journey.addEventListener('click', () => nav('journey'));
  bar.settings.addEventListener('click', () => nav('settings'));

  function render() {
    if (!profile) { setBar({}); view.innerHTML = viewOnboard(); afterOnboard(); return; }
    switch (route) {
      case 'diary': setBar({ back: true, title: 'Diary' }); view.innerHTML = viewDiary(); afterDiary(); break;
      case 'insights': setBar({ back: true, title: 'Insights' }); view.innerHTML = viewInsights(); break;
      case 'article': setBar({ back: true, title: 'Insights' }); view.innerHTML = viewArticle(nav._p.id); break;
      case 'voices': setBar({ back: true, title: 'Voices' }); view.innerHTML = viewVoices(); afterVoices(); break;
      case 'journey': setBar({ back: true, title: 'Journey' }); view.innerHTML = viewJourney(); break;
      case 'settings': setBar({ back: true, title: 'Settings' }); view.innerHTML = viewSettings(); afterSettings(); break;
      default: setBar({}); view.innerHTML = viewHome();
    }
  }

  /* delegated clicks for most interactions */
  view.addEventListener('click', (e) => {
    const a = e.target.closest('[data-action]');
    if (!a) return;
    const act = a.dataset.action, id = a.dataset.id;
    if (act === 'go') nav(a.dataset.to);
    else if (act === 'open-article') nav('article', { id });
    else if (act === 'toggle-node') a.closest('.node').classList.toggle('is-open');
    else if (act === 'filter') { insightsFilter = a.dataset.cat; render(); }
    else if (act === 'like') toggleLike(id, a);
    else if (act === 'del-entry') delEntry(id);
  });

  /* =================================================================
     ONBOARDING  (set baby's birthday via calendar)
     ================================================================= */
  let cal = { y: new Date().getFullYear(), m: new Date().getMonth(), sel: null };

  function viewOnboard() {
    const stageArt = (C.stages && C.stages[0] && C.stages[0].art) || '';
    return `
      <section class="onboard">
        <div class="onboard__art">${stageArt}</div>
        <h2>Welcome to Taimi 🌱</h2>
        <p class="lead">A gentle companion for the first years. Let's start with your little one.</p>

        <div class="field">
          <label for="babyName">Baby's name <span class="muted">(optional)</span></label>
          <input id="babyName" type="text" placeholder="e.g. Aino" autocomplete="off" maxlength="40" />
        </div>

        <div class="field"><label>When were they born?</label></div>
        ${calendarHTML()}

        <div style="max-width:340px;margin:22px auto 0">
          <button class="btn btn--block" id="startBtn" disabled>Start growing together</button>
        </div>
      </section>`;
  }

  function calendarHTML() {
    const first = new Date(cal.y, cal.m, 1);
    const startDow = (first.getDay() + 6) % 7; // Monday-first
    const days = new Date(cal.y, cal.m + 1, 0).getDate();
    const now = startOfDay(new Date());
    const monthName = first.toLocaleString('en', { month: 'long', year: 'numeric' });
    const atFirstMonthBack = false;
    const nextDisabled = cal.y > now.getFullYear() || (cal.y === now.getFullYear() && cal.m >= now.getMonth());

    let cells = DOW.map((d) => `<div class="cal__dow">${d[0]}</div>`).join('');
    for (let i = 0; i < startDow; i++) cells += '<div class="cal__day is-empty"></div>';
    for (let d = 1; d <= days; d++) {
      const date = new Date(cal.y, cal.m, d);
      const future = startOfDay(date) > now;
      const selected = cal.sel && fmtKey(date) === fmtKey(cal.sel);
      cells += `<button class="cal__day ${selected ? 'is-selected' : ''}" data-cal-day="${d}" ${future ? 'disabled' : ''}>${d}</button>`;
    }
    return `
      <div class="cal" id="cal">
        <div class="cal__head">
          <button class="cal__nav" data-cal-nav="-1" aria-label="Previous month">‹</button>
          <span class="cal__title">${monthName}</span>
          <button class="cal__nav" data-cal-nav="1" aria-label="Next month" ${nextDisabled ? 'disabled' : ''}>›</button>
        </div>
        <div class="cal__grid">${cells}</div>
      </div>`;
  }

  function afterOnboard() {
    const nameEl = document.getElementById('babyName');
    const startBtn = document.getElementById('startBtn');
    const calEl = document.getElementById('cal');

    calEl.addEventListener('click', (e) => {
      const navBtn = e.target.closest('[data-cal-nav]');
      const dayBtn = e.target.closest('[data-cal-day]');
      if (navBtn) {
        cal.m += Number(navBtn.dataset.calNav);
        if (cal.m < 0) { cal.m = 11; cal.y--; }
        if (cal.m > 11) { cal.m = 0; cal.y++; }
        calEl.outerHTML = calendarHTML();
        afterOnboard(); // re-bind on the fresh calendar
        return;
      }
      if (dayBtn && !dayBtn.disabled) {
        cal.sel = new Date(cal.y, cal.m, Number(dayBtn.dataset.calDay));
        calEl.outerHTML = calendarHTML();
        afterOnboard();
      }
    });

    if (startBtn) {
      startBtn.disabled = !cal.sel;
      startBtn.addEventListener('click', () => {
        if (!cal.sel) return;
        profile = { name: (nameEl && nameEl.value.trim()) || '', birthday: fmtKey(cal.sel) };
        store.set('taimi.profile', profile);
        nav('home', {}, false);
      });
    }
    // keep typed name across calendar re-renders
    if (nameEl && afterOnboard._name) nameEl.value = afterOnboard._name;
    if (nameEl) nameEl.addEventListener('input', () => { afterOnboard._name = nameEl.value; });
  }

  /* =================================================================
     HOME
     ================================================================= */
  function weekStripHTML() {
    const now = startOfDay(new Date());
    const monday = new Date(now); monday.setDate(now.getDate() - ((now.getDay() + 6) % 7));
    let out = '';
    for (let i = 0; i < 7; i++) {
      const d = new Date(monday); d.setDate(monday.getDate() + i);
      const isToday = fmtKey(d) === fmtKey(now);
      const isFuture = d > now;
      out += `<div class="week__day ${isToday ? 'is-today' : ''} ${isFuture ? 'is-future' : ''}">
        <span class="week__dow">${DOW[i][0]}</span>
        <span class="week__num">${d.getDate()}</span>
      </div>`;
    }
    return `<div class="week">${out}</div>`;
  }

  function nextMilestonePeek(days) {
    const ms = (C.milestones || []);
    const next = ms.find((m) => m.typicalDays > days) || ms[ms.length - 1];
    if (!next) return '';
    return `
      <button class="peek" data-action="go" data-to="journey">
        <span class="peek__dot" aria-hidden="true">✨</span>
        <span>
          <span class="peek__eyebrow">Coming up</span>
          <span class="peek__title">${esc(next.title)}</span>
          <span class="peek__when">Typically ${esc(next.window)} · see the whole journey</span>
        </span>
        <span class="peek__chev" aria-hidden="true">›</span>
      </button>`;
  }

  function viewHome() {
    const days = ageDaysAt(new Date());
    const stage = currentStage(days);
    const heroArt = stage && stage.image
      ? `<img src="${esc(stage.image)}" alt="${esc(stage.title)}" />`
      : (stage ? stage.art : '');
    const hello = profile.name ? `${esc(profile.name)} is` : 'Your baby is';

    return `
      ${weekStripHTML()}
      <section class="hero">
        <span class="hero__glow" aria-hidden="true"></span>
        <div class="hero__art">${heroArt}</div>
        <div class="hero__sub">${hello}</div>
        <div class="hero__age">${esc(ageText(days, new Date()))}</div>
        ${stage ? `<p class="hero__caption">${esc(stage.caption)}</p>` : ''}
      </section>

      <div class="section-label">My daily insights</div>
      <div class="tiles">
        <button class="tile tile--diary" data-action="go" data-to="diary">
          <span class="tile__icon" aria-hidden="true">${ICON.pencil}</span>
          <span class="tile__body">
            <span class="tile__title">Diary</span>
            <span class="tile__desc">Note a moment — by text or voice</span>
          </span>
          <span class="tile__chev" aria-hidden="true">›</span>
        </button>

        <button class="tile tile--insights" data-action="go" data-to="insights">
          <span class="tile__icon" aria-hidden="true">${ICON.book}</span>
          <span class="tile__body">
            <span class="tile__title">Insights</span>
            <span class="tile__desc">Reading picked for this age</span>
          </span>
          <span class="tile__chev" aria-hidden="true">›</span>
        </button>

        <button class="tile tile--voices" data-action="go" data-to="voices">
          <span class="tile__icon" aria-hidden="true">${ICON.chat}</span>
          <span class="tile__body">
            <span class="tile__title">Voices</span>
            <span class="tile__desc">What other parents are sharing</span>
          </span>
          <span class="tile__chev" aria-hidden="true">›</span>
        </button>
      </div>

      ${nextMilestonePeek(days)}
    `;
  }

  /* =================================================================
     DIARY  (text + audio, saved on device)
     ================================================================= */
  let pendingAudio = null;     // base64 data URL of a freshly recorded clip
  let mediaRec = null, chunks = [];

  function viewDiary() {
    const items = [...diary].sort((a, b) => b.ts - a.ts);
    const list = items.length ? items.map(entryHTML).join('') : `
      <div class="empty"><span class="empty__art">🖊️</span>
        No entries yet. Capture a tiny moment — a first sound, a hard night, a proud grin.
        It's just for you.</div>`;
    return `
      <div class="page-intro">
        <h2>Diary</h2>
        <p>Quiet notes for yourself. Write or record — everything stays on this device.</p>
      </div>

      <div class="composer">
        <textarea id="entryText" placeholder="What happened today?" maxlength="2000"></textarea>
        <div id="audioPreview"></div>
        <div class="composer__bar">
          <button class="recbtn" id="recBtn"><span class="dot"></span><span id="recLabel">Record voice</span></button>
          <span class="composer__save"><button class="btn" id="saveEntry">Save</button></span>
        </div>
      </div>

      ${list}`;
  }

  function entryHTML(e) {
    const d = new Date(e.ts);
    const dateStr = d.toLocaleDateString('en', { weekday: 'short', day: 'numeric', month: 'short' });
    const at = ageShort(ageDaysAt(d), d);
    return `
      <article class="entry">
        <button class="entry__del" data-action="del-entry" data-id="${e.id}">Delete</button>
        <span class="entry__date">${esc(dateStr)}</span><span class="entry__age">${esc(at)} old</span>
        ${e.text ? `<p class="entry__text">${esc(e.text)}</p>` : ''}
        ${e.audio ? `<audio controls preload="none" src="${e.audio}"></audio>` : ''}
      </article>`;
  }

  function afterDiary() {
    const recBtn = document.getElementById('recBtn');
    const recLabel = document.getElementById('recLabel');
    const preview = document.getElementById('audioPreview');
    const textEl = document.getElementById('entryText');

    function showPreview() {
      preview.innerHTML = pendingAudio
        ? `<div class="audio-preview"><audio controls src="${pendingAudio}"></audio>
             <button class="chip-clear" id="clearAudio">remove</button></div>`
        : '';
      const c = document.getElementById('clearAudio');
      if (c) c.addEventListener('click', () => { pendingAudio = null; showPreview(); });
    }

    recBtn.addEventListener('click', async () => {
      if (mediaRec && mediaRec.state === 'recording') { mediaRec.stop(); return; }
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRec = new MediaRecorder(stream); chunks = [];
        mediaRec.ondataavailable = (ev) => { if (ev.data.size) chunks.push(ev.data); };
        mediaRec.onstop = () => {
          stream.getTracks().forEach((t) => t.stop());
          const blob = new Blob(chunks, { type: mediaRec.mimeType || 'audio/webm' });
          const reader = new FileReader();
          reader.onload = () => { pendingAudio = reader.result; showPreview(); };
          reader.readAsDataURL(blob);
          recBtn.classList.remove('is-recording'); recLabel.textContent = 'Record voice';
        };
        mediaRec.start();
        recBtn.classList.add('is-recording'); recLabel.textContent = 'Stop recording';
      } catch {
        toast('Microphone not available');
      }
    });

    document.getElementById('saveEntry').addEventListener('click', () => {
      const text = (textEl.value || '').trim();
      if (!text && !pendingAudio) { toast('Write or record something first'); return; }
      const entry = { id: 'e' + Date.now(), ts: Date.now(), text, audio: pendingAudio };
      diary.push(entry);
      if (!store.set('taimi.diary', diary)) {
        diary.pop();
        toast('Storage full — try removing an old voice note');
        return;
      }
      pendingAudio = null;
      toast('Saved');
      render();
    });
  }

  function delEntry(id) {
    diary = diary.filter((e) => e.id !== id);
    store.set('taimi.diary', diary);
    render();
  }

  /* =================================================================
     INSIGHTS  (age-aware newsfeed + reader)
     ================================================================= */
  let insightsFilter = 'For you';

  function categoriesPresent() {
    const set = [];
    (C.articles || []).forEach((a) => { if (!set.includes(a.category)) set.push(a.category); });
    return set;
  }
  function excerpt(a) { return (a.body && a.body[0]) ? a.body[0].slice(0, 120) + '…' : ''; }

  function articleCardHTML(a) {
    return `
      <button class="article" data-action="open-article" data-id="${esc(a.id)}">
        <div class="article__top">
          <span class="tag ${tagClass(a.category)}">${esc(a.category)}</span>
          <span class="article__read">${a.readMins || 3} min read</span>
        </div>
        <div class="article__title">${esc(a.title)}</div>
        <div class="article__excerpt">${esc(excerpt(a))}</div>
      </button>`;
  }

  function viewInsights() {
    const days = ageDaysAt(new Date());
    const all = C.articles || [];
    const chips = ['For you', 'All', ...categoriesPresent()];
    const chipHTML = chips.map((c) =>
      `<button class="filter ${insightsFilter === c ? 'is-active' : ''}" data-action="filter" data-cat="${esc(c)}">${esc(c)}</button>`
    ).join('');

    let body = '';
    if (insightsFilter === 'For you') {
      const match = all.filter((a) => days >= a.minDays && days <= a.maxDays);
      const rest = all.filter((a) => !(days >= a.minDays && days <= a.maxDays));
      body = (match.length ? `<div class="feed-group__label">For your baby right now</div>${match.map(articleCardHTML).join('')}` : '')
        + (rest.length ? `<div class="feed-group__label">More to explore</div>${rest.map(articleCardHTML).join('')}` : '');
    } else {
      const list = insightsFilter === 'All' ? all : all.filter((a) => a.category === insightsFilter);
      // age-relevant first
      list.sort((a, b) => {
        const am = days >= a.minDays && days <= a.maxDays ? 0 : 1;
        const bm = days >= b.minDays && days <= b.maxDays ? 0 : 1;
        return am - bm;
      });
      body = list.length ? list.map(articleCardHTML).join('')
        : `<div class="empty">Nothing here yet in this category.</div>`;
    }

    return `
      <div class="page-intro">
        <h2>Insights</h2>
        <p>Short, evidence-minded reads on development, play, everyday life and your relationship.</p>
      </div>
      <div class="filterbar">${chipHTML}</div>
      ${body}
      <p class="disclaimer">Taimi shares general information, not medical advice. For anything about your individual child, your neuvola or doctor is the place to go.</p>`;
  }

  function viewArticle(id) {
    const a = (C.articles || []).find((x) => x.id === id);
    if (!a) return `<div class="empty">Article not found.</div>`;
    const paras = (a.body || []).map((p) => `<p>${esc(p)}</p>`).join('');
    return `
      <article class="reader">
        <div class="reader__top">
          <span class="tag ${tagClass(a.category)}">${esc(a.category)}</span>
          <span class="article__read">${a.readMins || 3} min read</span>
        </div>
        <h2>${esc(a.title)}</h2>
        ${paras}
        ${a.source ? `<div class="reader__source"><strong>Good to know:</strong> ${esc(a.source)}.</div>` : ''}
        <p class="disclaimer">General information only — not a substitute for advice from your neuvola or doctor.</p>
      </article>`;
  }

  /* =================================================================
     VOICES  (community feed, Twitter-style)
     ================================================================= */
  function postHTML(p, mine) {
    const liked = likes.has(p.id);
    const baseLikes = p.likes || 0;
    const count = baseLikes + (liked && !p._seedLiked ? 1 : 0) - (!liked && p._seedLiked ? 1 : 0);
    const initial = (p.name || 'You').trim()[0] || 'Y';
    const when = mine ? timeAgoTs(p.ts) : `${p.daysAgo === 0 ? 'today' : p.daysAgo + 'd ago'}`;
    return `
      <article class="post ${mine ? 'post--mine' : ''}">
        <div class="post__head">
          <span class="post__avatar" style="background:${avatarColor(p.name || 'You')}">${esc(initial.toUpperCase())}</span>
          <span>
            <span class="post__name">${esc(p.name || 'You')}</span>
            <span class="post__meta"> · ${esc(p.ageText || p.babyAge || '')}</span><br>
            <span class="post__meta">${esc(when)}</span>
          </span>
          ${mine ? '<span class="badge-mine">You</span>' : ''}
        </div>
        <div class="post__text">${esc(p.text)}</div>
        <div class="post__foot">
          <button class="like ${liked ? 'is-liked' : ''}" data-action="like" data-id="${esc(p.id)}">
            ${ICON.heart}<span>${Math.max(count, 0)}</span>
          </button>
        </div>
      </article>`;
  }
  function timeAgoTs(ts) {
    const mins = Math.floor((Date.now() - ts) / 60000);
    if (mins < 1) return 'just now';
    if (mins < 60) return mins + 'm ago';
    const h = Math.floor(mins / 60); if (h < 24) return h + 'h ago';
    return Math.floor(h / 24) + 'd ago';
  }

  function viewVoices() {
    const mine = [...posts].sort((a, b) => b.ts - a.ts).map((p) => postHTML(p, true)).join('');
    const seed = (C.community || []).map((p) => postHTML(p, false)).join('');
    return `
      <div class="page-intro">
        <h2>Voices</h2>
        <p>Little wins and honest moments from other parents. Share one of your own.</p>
      </div>
      <div class="composer">
        <textarea id="postText" placeholder="My ${esc(ageShort(ageDaysAt(new Date())))}-old just…" maxlength="280"></textarea>
        <div class="composer__bar">
          <span class="muted" style="font-size:12.5px">Saved on your device in this MVP</span>
          <span class="composer__save"><button class="btn btn--sage" id="sharePost">Share</button></span>
        </div>
      </div>
      ${mine}${seed}`;
  }

  function afterVoices() {
    const btn = document.getElementById('sharePost');
    const ta = document.getElementById('postText');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const text = (ta.value || '').trim();
      if (!text) { toast('Write something to share'); return; }
      const p = {
        id: 'p' + Date.now(), ts: Date.now(),
        name: profile.name ? profile.name + "'s parent" : 'You',
        ageText: ageShort(ageDaysAt(new Date())) + ' old', text,
      };
      posts.push(p); store.set('taimi.posts', posts);
      toast('Shared'); render();
    });
  }

  function toggleLike(id, el) {
    if (likes.has(id)) likes.delete(id); else likes.add(id);
    store.set('taimi.likes', [...likes]);
    // light update without full re-render
    const btn = el.closest('.like'); const post = btn && btn.closest('.post');
    render();
  }

  /* =================================================================
     JOURNEY  (signature: the growing path)
     ================================================================= */
  function viewJourney() {
    const days = ageDaysAt(new Date());
    const ms = (C.milestones || []);
    const reached = ms.filter((m) => m.typicalDays <= days).length;
    const grown = ms.length ? Math.round((reached / ms.length) * 100) : 0;

    const nodes = ms.map((m) => {
      let status = 'upcoming';
      if (m.typicalDays <= days - 21) status = 'past';
      else if (Math.abs(m.typicalDays - days) < 28) status = 'now';
      else if (m.typicalDays <= days) status = 'past';
      const icon = status === 'past' ? '✓' : status === 'now' ? '★' : '';
      return `
        <div class="node is-${status}">
          <span class="node__dot" aria-hidden="true">${icon}</span>
          <button class="node__card" data-action="toggle-node">
            <div class="node__top">
              <span class="node__when">${esc(m.window)}</span>
              <span class="node__cat">${esc(m.category)}</span>
            </div>
            <div class="node__title">${esc(m.title)}</div>
            <div class="node__note">${esc(m.note)}</div>
            <div class="node__hint">Tap to read more</div>
          </button>
        </div>`;
    }).join('');

    return `
      <div class="journey-head">
        <div class="page-intro" style="text-align:center">
          <h2>${profile.name ? esc(profile.name) + "'s" : 'Your'} journey</h2>
          <p>Typical moments along the way — every child writes their own timeline.</p>
        </div>
        <span class="grown">🌱 ${reached} of ${ms.length} moments so far</span>
      </div>
      <div class="path" style="--grown:${grown}%">
        <span class="path__line" aria-hidden="true"></span>
        ${nodes}
      </div>`;
  }

  /* =================================================================
     SETTINGS
     ================================================================= */
  function viewSettings() {
    const days = ageDaysAt(new Date());
    return `
      <div class="page-intro">
        <h2>Settings</h2>
        <p>Just the basics for now.</p>
      </div>
      <div class="set-row">
        <span class="set-row__k">Baby's name</span>
        <span class="set-row__v">${profile.name ? esc(profile.name) : 'Not set'}</span>
      </div>
      <div class="set-row">
        <span class="set-row__k">Birthday</span>
        <span class="set-row__v">${esc(parseDate(profile.birthday).toLocaleDateString('en', { day: 'numeric', month: 'long', year: 'numeric' }))}</span>
      </div>
      <div class="set-row">
        <span class="set-row__k">Current age</span>
        <span class="set-row__v">${esc(ageText(days, new Date()))}</span>
      </div>
      <div class="set-row">
        <span class="set-row__k">Diary entries</span>
        <span class="set-row__v">${diary.length}</span>
      </div>
      <button class="set-row" id="editProfile" style="width:100%;text-align:left">
        <span class="set-row__k">Edit name &amp; birthday</span>
        <span class="set-row__v" aria-hidden="true">›</span>
      </button>
      <button class="set-row" id="resetAll" style="width:100%;text-align:left">
        <span class="danger">Reset everything on this device</span>
        <span aria-hidden="true">›</span>
      </button>
      <p class="disclaimer">All your data lives only in this browser. Clearing it can't be undone.</p>`;
  }

  function afterSettings() {
    document.getElementById('editProfile').addEventListener('click', () => {
      const bd = parseDate(profile.birthday);
      cal = { y: bd.getFullYear(), m: bd.getMonth(), sel: bd };
      afterOnboard._name = profile.name;
      profile = null; // re-show onboarding pre-filled
      nav('home', {}, false);
    });
    document.getElementById('resetAll').addEventListener('click', () => {
      if (!confirm('Reset Taimi? This deletes the profile, diary and posts on this device.')) return;
      ['taimi.profile', 'taimi.diary', 'taimi.posts', 'taimi.likes'].forEach(store.del);
      profile = null; diary = []; posts = []; likes = new Set();
      stack.length = 0; nav('home', {}, false);
    });
  }

  /* ---------- inline icons ---------- */
  const ICON = {
    pencil: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2Z"/><path d="M18 3v18"/></svg>',
    chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8 8 0 0 1-11.6 7.1L4 20l1.4-5A8 8 0 1 1 21 11.5Z"/></svg>',
    heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20s-7-4.5-9.3-9A5 5 0 0 1 12 6a5 5 0 0 1 9.3 5C19 15.5 12 20 12 20Z"/></svg>',
  };

  /* ---------- go ---------- */
  render();
})();
