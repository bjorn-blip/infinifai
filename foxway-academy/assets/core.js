/* Foxway Benelux Academy — core engine
 * State, persistence, content index, spaced repetition, XP/levels/streaks/badges.
 * No build step, no dependencies. Works from file:// and any static host.
 */
(function () {
  "use strict";
  const FXA = window.FXA;
  const LS_KEY = "fxa.v1";

  /* ───────────── utils ───────────── */
  const U = (FXA.util = {});
  U.dateKey = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  U.today = () => U.dateKey(new Date());
  U.parse = k => { const [y, m, d] = k.split("-").map(Number); return new Date(y, m - 1, d); };
  U.addDays = (k, n) => { const d = U.parse(k); d.setDate(d.getDate() + n); return U.dateKey(d); };
  U.diffDays = (a, b) => { const [y1, m1, d1] = a.split("-").map(Number), [y2, m2, d2] = b.split("-").map(Number); return Math.round((Date.UTC(y2, m2 - 1, d2) - Date.UTC(y1, m1 - 1, d1)) / 864e5); };
  U.hash = s => { let h = 2166136261 >>> 0; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; };
  U.rng = seed => { let a = seed >>> 0; return () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; };
  U.shuffle = (arr, rng) => { const a = arr.slice(), r = rng || Math.random; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  U.esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  U.uid = () => Math.random().toString(36).slice(2, 10);
  U.clamp = (n, lo, hi) => Math.max(lo, Math.min(hi, n));
  U.fmtDate = k => U.parse(k).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

  /* ───────────── persistence ───────────── */
  let storageOK = true;
  function load() {
    try { const raw = localStorage.getItem(LS_KEY); return raw ? JSON.parse(raw) : null; }
    catch (e) { storageOK = false; return null; }
  }
  FXA.storageOK = () => storageOK;
  FXA.state = load() || { version: 1, activeProfile: null, profiles: {}, team: [], custom: { lessons: [] } };
  if (!FXA.state.team) FXA.state.team = [];
  if (!FXA.state.custom) FXA.state.custom = { lessons: [] };
  FXA.save = function () { try { localStorage.setItem(LS_KEY, JSON.stringify(FXA.state)); } catch (e) { storageOK = false; } };

  FXA.profile = () => FXA.state.profiles[FXA.state.activeProfile] || null;

  FXA.newProfile = function (name, role, goal) {
    const id = U.uid();
    FXA.state.profiles[id] = {
      id, name: name.trim(), role, startDate: U.today(),
      xp: 0, xpLog: {},
      streak: { count: 0, best: 0, lastDay: null, freezes: 0 },
      lessons: {}, cards: {}, scenarios: {}, daily: {},
      stats: { answered: 0, correct: 0, bestCombo: 0, rapidBest: 0, numbersCorrect: 0, flashcards: 0, perfectDays: 0, examBest: 0, dailyDone: 0 },
      badges: {}, certified: null,
      settings: { goal: goal || 100, theme: "auto", sound: true }
    };
    FXA.state.activeProfile = id;
    FXA.save();
    return FXA.state.profiles[id];
  };

  /* ───────────── content index ───────────── */
  FXA.buildIndex = function () {
    const custom = (FXA.state.custom.lessons || []).map(l => Object.assign({ module: "team", custom: true }, l));
    FXA.allLessons = FXA.lessons.concat(custom);
    FXA.allModules = FXA.modules.slice();
    if (custom.length) FXA.allModules.push({ id: "team", track: "company", order: 99, icon: "users", color: "#0B1B2B", title: "Team Knowledge", desc: "Internal know-how added by the Benelux team." });
    FXA.moduleById = {}; FXA.allModules.forEach(m => (FXA.moduleById[m.id] = m));
    FXA.lessonById = {}; FXA.lessonsByModule = {};
    FXA.allModules.forEach(m => (FXA.lessonsByModule[m.id] = []));
    FXA.qById = {}; FXA.questionIds = [];
    FXA.allLessons.forEach(l => {
      FXA.lessonById[l.id] = l;
      (FXA.lessonsByModule[l.module] = FXA.lessonsByModule[l.module] || []).push(l);
      (l.qs || []).forEach((q, i) => {
        const id = l.id + "#" + i;
        FXA.qById[id] = Object.assign({ id, module: l.module, lessonId: l.id }, q);
        FXA.questionIds.push(id);
      });
    });
    // Glossary-derived questions (two directions per term)
    FXA.glossaryIds = [];
    FXA.glossary.forEach(([term, def, mod]) => {
      ["t", "d"].forEach(dir => { const id = `g:${dir}:${term}`; FXA.qById[id] = { id, module: mod, glossary: true, term, def, dir }; FXA.glossaryIds.push(id); });
    });
    // Spiral learning path: lesson 1 of every module, then lesson 2 of every module, …
    const mods = FXA.allModules.slice().sort((a, b) => a.order - b.order);
    FXA.path = [];
    const maxLen = Math.max(...mods.map(m => (FXA.lessonsByModule[m.id] || []).length));
    for (let i = 0; i < maxLen; i++) mods.forEach(m => { const l = (FXA.lessonsByModule[m.id] || [])[i]; if (l) FXA.path.push(l.id); });
  };

  /* Resolve a question id into a renderable question with shuffled options. */
  FXA.renderableQ = function (id, rng) {
    rng = rng || Math.random;
    const q = FXA.qById[id];
    if (!q) return null;
    if (q.glossary) {
      const pool = FXA.glossary.filter(g => g[0] !== q.term);
      const same = U.shuffle(pool.filter(g => g[2] === q.module), rng);
      const other = U.shuffle(pool.filter(g => g[2] !== q.module), rng);
      const distract = same.concat(other).slice(0, 3);
      if (q.dir === "t") {
        const opts = U.shuffle([q.term].concat(distract.map(d => d[0])), rng);
        return { id, module: q.module, q: `Which term matches this definition?<br><i>“${U.esc(q.def)}”</i>`, o: opts.map(U.esc), a: opts.indexOf(q.term), x: `<b>${U.esc(q.term)}</b>: ${U.esc(q.def)}`, html: true };
      }
      const defs = U.shuffle([q.def].concat(distract.map(d => d[1])), rng);
      return { id, module: q.module, q: `What best describes <b>${U.esc(q.term)}</b>?`, o: defs.map(U.esc), a: defs.indexOf(q.def), x: `<b>${U.esc(q.term)}</b>: ${U.esc(q.def)}`, html: true };
    }
    if (typeof q.tf === "boolean") return { id, module: q.module, lessonId: q.lessonId, q: U.esc(q.q), o: ["True", "False"], a: q.tf ? 0 : 1, x: q.x, tf: true };
    const idx = U.shuffle(q.o.map((_, i) => i), rng);
    return { id, module: q.module, lessonId: q.lessonId, q: U.esc(q.q), o: idx.map(i => q.o[i]), a: idx.indexOf(q.a), x: q.x };
  };

  FXA.generatedQ = function (rng, genId) {
    const gens = FXA.generators;
    const g = genId ? gens.find(x => x.id === genId) : gens[Math.floor(rng() * gens.length)];
    const q = g.gen(rng);
    return Object.assign({ id: "gen:" + g.id, module: g.module, generated: true, genName: g.name }, q, { q: U.esc(q.q) });
  };

  /* ───────────── spaced repetition (Leitner) ───────────── */
  const INTERVALS = [0, 1, 3, 7, 16, 35, 80];
  FXA.MAX_BOX = INTERVALS.length - 1;
  FXA.review = function (p, id, correct) {
    if (!id || id.startsWith("gen:")) return;
    const t = U.today();
    const c = p.cards[id] || { box: 0, seen: 0, ok: 0, ko: 0 };
    c.seen++;
    if (correct) { c.ok++; c.box = Math.min(c.box + 1, FXA.MAX_BOX); }
    else { c.ko++; c.box = 1; }
    c.due = U.addDays(t, correct ? INTERVALS[c.box] : 1);
    c.last = t;
    p.cards[id] = c;
  };
  FXA.dueIds = function (p) {
    const t = U.today();
    return Object.keys(p.cards).filter(id => FXA.qById[id] && p.cards[id].due <= t && p.cards[id].last !== t)
      .sort((a, b) => p.cards[a].box - p.cards[b].box || (p.cards[a].due < p.cards[b].due ? -1 : 1));
  };
  FXA.moduleMastery = function (p, modId) {
    const ids = FXA.questionIds.filter(id => FXA.qById[id].module === modId);
    if (!ids.length) return 0;
    const s = ids.reduce((acc, id) => acc + Math.min((p.cards[id] || { box: 0 }).box, 4) / 4, 0);
    return Math.round((s / ids.length) * 100);
  };
  FXA.overallMastery = function (p) {
    const ids = FXA.questionIds;
    if (!ids.length) return 0;
    return Math.round((ids.reduce((a, id) => a + Math.min((p.cards[id] || { box: 0 }).box, 4) / 4, 0) / ids.length) * 100);
  };
  FXA.lessonsRead = p => FXA.allLessons.filter(l => p.lessons[l.id]).length;
  FXA.nextLessons = (p, n) => FXA.path.filter(id => !p.lessons[id]).slice(0, n).map(id => FXA.lessonById[id]);

  /* ───────────── XP & levels ───────────── */
  FXA.levelFor = function (xp) {
    let cur = FXA.levels[0];
    for (const l of FXA.levels) if (xp >= l.xp) cur = l;
    // Beyond the table: every 5,000 XP another "Legend" tier
    const last = FXA.levels[FXA.levels.length - 1];
    if (xp >= last.xp) {
      const extra = Math.floor((xp - last.xp) / 5000);
      if (extra > 0) cur = { lvl: last.lvl + extra, xp: last.xp + extra * 5000, title: `${last.title} ${"★".repeat(Math.min(extra, 5))}` };
    }
    const nextDef = FXA.levels.find(l => l.xp > xp);
    const next = nextDef || { lvl: cur.lvl + 1, xp: cur.xp + 5000, title: last.title };
    return { cur, next, pct: U.clamp(Math.round(((xp - cur.xp) / (next.xp - cur.xp)) * 100), 0, 100) };
  };
  FXA.addXP = function (p, amount) {
    if (!amount) return;
    const before = FXA.levelFor(p.xp).cur.lvl;
    p.xp += amount;
    const t = U.today();
    p.xpLog[t] = (p.xpLog[t] || 0) + amount;
    const after = FXA.levelFor(p.xp).cur;
    if (after.lvl > before) FXA.emit("levelup", after);
    FXA.emit("xp", amount);
  };
  FXA.xpToday = p => p.xpLog[U.today()] || 0;
  FXA.xpLastDays = (p, n) => { const out = []; for (let i = n - 1; i >= 0; i--) { const k = U.addDays(U.today(), -i); out.push({ k, v: p.xpLog[k] || 0 }); } return out; };

  /* ───────────── streaks ───────────── */
  FXA.currentStreak = function (p) {
    const s = p.streak, t = U.today();
    if (!s.lastDay) return 0;
    const gap = U.diffDays(s.lastDay, t);
    if (gap <= 1) return s.count;
    return gap - 1 <= s.freezes ? s.count : 0; // freezes can still save it
  };
  FXA.streakAtRisk = p => { const s = p.streak; return s.lastDay && s.lastDay !== U.today() && FXA.currentStreak(p) > 0; };
  FXA.markStreak = function (p) {
    const s = p.streak, t = U.today();
    if (s.lastDay === t) return;
    if (!s.lastDay) s.count = 1;
    else {
      const gap = U.diffDays(s.lastDay, t);
      if (gap === 1) s.count++;
      else if (gap > 1 && gap - 1 <= s.freezes) { s.freezes -= gap - 1; s.count++; FXA.emit("toast", { icon: "snow", title: "Streak freeze used", text: `${gap - 1} missed day(s) covered — streak saved!` }); }
      else s.count = 1;
    }
    s.lastDay = t;
    if (s.count > s.best) s.best = s.count;
    if (s.count % 7 === 0 && s.freezes < 2) { s.freezes++; FXA.emit("toast", { icon: "snow", title: "Streak freeze earned", text: "7 days in a row — you've earned a freeze (max 2)." }); }
  };

  /* ───────────── badges ───────────── */
  FXA.badges = [
    { id: "first", name: "First Steps", desc: "Complete your first Daily Brief.", icon: "flag", test: p => p.stats.dailyDone >= 1 },
    { id: "streak3", name: "Warming Up", desc: "3-day streak.", icon: "flame", test: p => p.streak.best >= 3 },
    { id: "streak7", name: "Full Week", desc: "7-day streak.", icon: "flame", test: p => p.streak.best >= 7 },
    { id: "streak30", name: "Habit Formed", desc: "30-day streak.", icon: "flame", test: p => p.streak.best >= 30 },
    { id: "streak100", name: "Unstoppable Fox", desc: "100-day streak.", icon: "flame", test: p => p.streak.best >= 100 },
    { id: "combo10", name: "Sharpshooter", desc: "10 correct answers in a row.", icon: "target", test: p => p.stats.bestCombo >= 10 },
    { id: "combo25", name: "Sniper", desc: "25 correct answers in a row.", icon: "target", test: p => p.stats.bestCombo >= 25 },
    { id: "perfect", name: "Perfect Day", desc: "Answer every Daily Brief question correctly.", icon: "star", test: p => p.stats.perfectDays >= 1 },
    { id: "perfect10", name: "Flawless", desc: "10 perfect Daily Briefs.", icon: "star", test: p => p.stats.perfectDays >= 10 },
    { id: "read10", name: "Scholar", desc: "Read 10 lessons.", icon: "book", test: p => FXA.lessonsRead(p) >= 10 },
    { id: "readall", name: "Encyclopedia", desc: "Read every lesson.", icon: "book", test: p => FXA.lessonsRead(p) >= FXA.allLessons.length },
    { id: "numbers25", name: "Numbers Ninja", desc: "25 correct Numbers Lab answers.", icon: "calc", test: p => p.stats.numbersCorrect >= 25 },
    { id: "rapid15", name: "Quick Fox", desc: "Score 15+ in Rapid Fire.", icon: "bolt", test: p => p.stats.rapidBest >= 15 },
    { id: "rapid25", name: "Lightning", desc: "Score 25+ in Rapid Fire.", icon: "bolt", test: p => p.stats.rapidBest >= 25 },
    { id: "flash50", name: "Lexicon", desc: "Review 50 flashcards.", icon: "cards", test: p => p.stats.flashcards >= 50 },
    { id: "deal", name: "Dealmaker", desc: "Perfect score in a Deal Simulator scenario.", icon: "handshake", test: p => Object.keys(p.scenarios).some(id => { const sc = FXA.scenarios.find(s => s.id === id); return sc && p.scenarios[id] >= sc.steps.length * 10; }) },
    { id: "dealall", name: "Rainmaker", desc: "Play every Deal Simulator scenario.", icon: "handshake", test: p => FXA.scenarios.every(s => p.scenarios[s.id] != null) },
    { id: "master", name: "Module Master", desc: "Reach 75% mastery in any module.", icon: "medal", test: p => FXA.modules.some(m => FXA.moduleMastery(p, m.id) >= 75) },
    { id: "insider", name: "Fox Insider", desc: "75% mastery of 'Foxway: The Company'.", icon: "fox", test: p => FXA.moduleMastery(p, "foxway") >= 75 },
    { id: "benelux", name: "Benelux Native", desc: "75% mastery in NL, BE/LU and Competition.", icon: "map", test: p => ["nl", "be", "comp"].every(m => FXA.moduleMastery(p, m) >= 75) },
    { id: "lvl5", name: "Specialist", desc: "Reach level 5.", icon: "trophy", test: p => FXA.levelFor(p.xp).cur.lvl >= 5 },
    { id: "lvl10", name: "Circular Champion", desc: "Reach level 10.", icon: "trophy", test: p => FXA.levelFor(p.xp).cur.lvl >= 10 },
    { id: "cert", name: "Certified", desc: "Pass the Benelux Certification exam.", icon: "cert", test: p => !!p.certified }
  ];
  FXA.checkBadges = function (p) {
    const earned = [];
    FXA.badges.forEach(b => { if (!p.badges[b.id] && b.test(p)) { p.badges[b.id] = U.today(); earned.push(b); } });
    earned.forEach(b => FXA.emit("badge", b));
    return earned;
  };

  /* ───────────── daily plan ───────────── */
  FXA.DAILY_Q = 6;
  FXA.buildDailyPlan = function (p) {
    const t = U.today();
    const rng = U.rng(U.hash(p.id + t));
    // 1. Lesson: next unread in the spiral path, or the weakest-mastery module's lesson for review
    let lessonId = FXA.path.find(id => !p.lessons[id]);
    let review = false;
    if (!lessonId) {
      review = true;
      const weakest = FXA.modules.slice().sort((a, b) => FXA.moduleMastery(p, a.id) - FXA.moduleMastery(p, b.id))[0];
      const ls = FXA.lessonsByModule[weakest.id];
      lessonId = ls[Math.floor(rng() * ls.length)].id;
    }
    const lesson = FXA.lessonById[lessonId];
    // 2. Questions: lesson questions + due reviews + fill from read content/glossary
    const chosen = [];
    const add = id => { if (id && !chosen.includes(id) && FXA.qById[id]) chosen.push(id); };
    (lesson.qs || []).forEach((_, i) => add(lesson.id + "#" + i));
    FXA.dueIds(p).slice(0, 3).forEach(add);
    const readIds = FXA.questionIds.filter(id => p.lessons[FXA.qById[id].lessonId] && !p.cards[id]);
    U.shuffle(readIds, rng).forEach(id => { if (chosen.length < FXA.DAILY_Q) add(id); });
    const glossPool = U.shuffle(FXA.glossaryIds.filter(id => !p.cards[id] || p.cards[id].due <= t), rng);
    glossPool.forEach(id => { if (chosen.length < FXA.DAILY_Q) add(id); });
    // 3. Scenario of the day: first unplayed, else lowest-scoring
    const unplayed = FXA.scenarios.filter(s => p.scenarios[s.id] == null);
    const scen = unplayed.length ? unplayed[0] : FXA.scenarios.slice().sort((a, b) => (p.scenarios[a.id] / (a.steps.length * 10)) - (p.scenarios[b.id] / (b.steps.length * 10)))[Math.floor(rng() * 3)];
    const genId = FXA.generators[Math.floor(rng() * FXA.generators.length)].id;
    return { date: t, lessonId, review, qids: U.shuffle(chosen.slice(0, FXA.DAILY_Q + 2), rng), genId, scenarioId: scen.id, step: 0, done: false, results: [] };
  };
  FXA.todayPlan = function (p) {
    const t = U.today();
    if (!p.daily[t] || !p.daily[t].qids) { p.daily[t] = FXA.buildDailyPlan(p); FXA.save(); }
    return p.daily[t];
  };

  FXA.factOfDay = function () {
    const i = U.hash(U.today()) % FXA.facts.length;
    return FXA.facts[i];
  };

  /* ───────────── tiny event bus ───────────── */
  const listeners = {};
  FXA.on = (ev, fn) => (listeners[ev] = listeners[ev] || []).push(fn);
  FXA.emit = (ev, data) => (listeners[ev] || []).forEach(fn => { try { fn(data); } catch (e) { console.error(e); } });

  /* ───────────── team share codes ───────────── */
  FXA.shareCode = function (p) {
    const payload = {
      n: p.name, r: p.role, x: p.xp, l: FXA.levelFor(p.xp).cur.lvl, s: FXA.currentStreak(p), b: p.streak.best,
      w: FXA.xpLastDays(p, 7).reduce((a, d) => a + d.v, 0), m: FXA.overallMastery(p), c: p.certified ? 1 : 0,
      g: Object.keys(p.badges).length, d: U.today()
    };
    return "FXA1." + btoa(unescape(encodeURIComponent(JSON.stringify(payload))));
  };
  FXA.parseShareCode = function (code) {
    code = (code || "").trim();
    if (!code.startsWith("FXA1.")) throw new Error("Not a Foxway Academy code");
    const o = JSON.parse(decodeURIComponent(escape(atob(code.slice(5)))));
    if (typeof o.n !== "string" || typeof o.x !== "number") throw new Error("Invalid code");
    const num = v => (isFinite(Number(v)) ? Math.max(0, Math.round(Number(v))) : 0);
    const str = (v, n) => String(v == null ? "" : v).slice(0, n);
    return { n: str(o.n, 40).trim() || "Colleague", r: str(o.r, 40), x: num(o.x), l: num(o.l), s: num(o.s), b: num(o.b), w: num(o.w), m: Math.min(100, num(o.m)), c: o.c ? 1 : 0, g: num(o.g), d: /^\d{4}-\d{2}-\d{2}$/.test(o.d) ? o.d : "" };
  };

  FXA.buildIndex();
})();
