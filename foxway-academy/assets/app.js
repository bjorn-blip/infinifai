/* Foxway Benelux Academy — views, router and learning sessions */
(function () {
  "use strict";
  const FXA = window.FXA, U = FXA.util, UI = FXA.ui;
  const I = UI.icon, esc = U.esc;
  const view = () => document.getElementById("view");
  let S = null; // active session (quiz / rapid / flash / scenario)
  let timer = null;
  let curPage = "home";
  const refreshChrome = () => renderChrome(curPage);

  /* ═════════════ Router ═════════════ */
  function go(hash) { if (location.hash === hash) route(); else location.hash = hash; }
  FXA.go = go;

  function route() {
    clearInterval(timer); timer = null;
    const p = FXA.profile();
    UI.applyTheme();
    if (!p) { document.body.classList.add("onboarding"); renderOnboarding(); return; }
    document.body.classList.remove("onboarding");
    const parts = (location.hash.replace(/^#\/?/, "") || "home").split("/");
    const [page, a1] = parts;
    curPage = page;
    const pages = {
      home: renderHome, daily: renderDaily, learn: renderLearn, module: () => renderModule(a1), lesson: () => renderLesson(a1),
      practice: renderPractice, glossary: renderGlossary, team: renderTeam, profile: renderProfile, settings: renderSettings,
      certificate: renderCertificate, calendar: renderCalendar,
      rapid: startRapid, numbers: startNumbers, flash: startFlash, weak: startWeak, exam: renderExamIntro,
      scenarios: renderScenarioList, scenario: () => startScenario(a1, null), modquiz: () => startModuleQuiz(a1)
    };
    S = null;
    (pages[page] || renderHome)();
    renderChrome(page);
    window.scrollTo(0, 0);
  }

  /* ═════════════ Chrome (nav, top bar) ═════════════ */
  const NAV = [["home", "home", "Home"], ["learn", "book", "Learn"], ["practice", "bolt", "Practice"], ["team", "users", "Team"], ["profile", "user", "Profile"]];
  function renderChrome(page) {
    const p = FXA.profile();
    if (!p) return;
    const active = { module: "learn", lesson: "learn", glossary: "learn", calendar: "learn", rapid: "practice", numbers: "practice", flash: "practice", weak: "practice", exam: "practice", scenarios: "practice", scenario: "practice", modquiz: "learn", settings: "profile", certificate: "profile", daily: "home" }[page] || page;
    const navHtml = NAV.map(([id, ic, label]) => `<a href="#/${id}" class="nav-item ${active === id ? "active" : ""}">${I(ic)}<span>${label}</span></a>`).join("");
    document.getElementById("sidenav").innerHTML = navHtml + `<a href="#/glossary" class="nav-item ${page === "glossary" ? "active" : ""}">${I("search")}<span>Glossary</span></a>`;
    document.getElementById("bottomnav").innerHTML = navHtml;
    const lv = FXA.levelFor(p.xp), st = FXA.currentStreak(p), doneToday = p.streak.lastDay === U.today();
    document.getElementById("topstats").innerHTML = `
      <a href="#/profile" class="chip ${doneToday ? "chip-hot" : ""}" title="Daily streak">${I("flame")}<b>${st}</b></a>
      <a href="#/profile" class="chip" title="Total XP">${I("star")}<b>${p.xp.toLocaleString("en-GB")}</b></a>
      <a href="#/profile" class="chip chip-level" title="${esc(lv.cur.title)}">Lv <b>${lv.cur.lvl}</b></a>`;
  }

  /* ═════════════ Onboarding ═════════════ */
  function renderOnboarding() {
    const existing = Object.values(FXA.state.profiles);
    view().innerHTML = `
    <div class="onb">
      <div class="onb-hero">
        <div class="onb-brand">${UI.logo(48)}<div><div class="brand-word">foxway</div><div class="brand-sub">Benelux Academy</div></div></div>
        <h1>Master the circular tech market — <span class="accent">one day at a time.</span></h1>
        <p class="lead">A daily, gamified training programme on the refurbished & circular device industry, Foxway, and the Netherlands, Belgium and Luxembourg.</p>
        <ul class="onb-points">
          <li>${I("calendar")}<span><b>5–10 minutes a day.</b> A fresh Daily Brief: one insight, a quick quiz, a real-world deal scenario.</span></li>
          <li>${I("cycle")}<span><b>Never stops.</b> Spaced repetition, infinite numbers drills and new challenges keep knowledge sharp.</span></li>
          <li>${I("trophy")}<span><b>Gamified.</b> XP, levels, streaks, badges, team leaderboard and a certification.</span></li>
        </ul>
      </div>
      <form class="card onb-form" id="onbForm">
        <h2>Create your learner profile</h2>
        <label>Your name<input name="name" required maxlength="40" placeholder="e.g. Sam de Vries" autocomplete="name"></label>
        <label>Your role<select name="role">
          <option>Commercial Consultant</option><option>Account Manager</option><option>Key Account Manager</option><option>Sales Manager</option>
          <option>Business Development</option><option>Customer Success</option><option>Operations</option><option>Other</option></select></label>
        <label>Daily goal<select name="goal"><option value="60">Casual — 60 XP/day</option><option value="100" selected>Regular — 100 XP/day</option><option value="160">Serious — 160 XP/day</option><option value="250">Intense — 250 XP/day</option></select></label>
        <button class="btn btn-primary btn-lg" type="submit">Start learning ${I("arrowR")}</button>
        ${existing.length ? `<div class="onb-existing"><div class="muted small">Or continue as:</div>${existing.map(pr => `<button type="button" class="btn btn-ghost" data-switch="${pr.id}">${esc(pr.name)}</button>`).join("")}</div>` : ""}
        <p class="muted small">Progress is stored privately in this browser. Use Team → share code or Profile → backup to move it.</p>
      </form>
    </div>`;
    document.getElementById("onbForm").onsubmit = e => {
      e.preventDefault();
      const f = new FormData(e.target);
      const name = String(f.get("name") || "").trim();
      if (!name) return;
      FXA.newProfile(name, f.get("role"), Number(f.get("goal")));
      UI.toast({ icon: "fox", title: `Welkom, ${name}!`, text: "Your first Daily Brief is ready." });
      go("#/home");
    };
    view().querySelectorAll("[data-switch]").forEach(b => (b.onclick = () => { FXA.state.activeProfile = b.dataset.switch; FXA.save(); go("#/home"); }));
  }

  /* ═════════════ Home ═════════════ */
  function greeting() { const h = new Date().getHours(); return h < 12 ? "Goedemorgen" : h < 18 ? "Goedemiddag" : "Goedenavond"; }
  function renderHome() {
    const p = FXA.profile();
    const plan = FXA.todayPlan(p);
    const lesson = FXA.lessonById[plan.lessonId];
    const mod = FXA.moduleById[lesson.module];
    const lv = FXA.levelFor(p.xp);
    const st = FXA.currentStreak(p);
    const xpT = FXA.xpToday(p), goal = p.settings.goal;
    const fact = FXA.factOfDay();
    const month = FXA.calendar.find(c => c.m === new Date().getMonth() + 1);
    const week = FXA.xpLastDays(p, 7), maxW = Math.max(40, ...week.map(d => d.v));
    const next = FXA.nextLessons(p, 3);
    const recent = Object.entries(p.badges).sort((a, b) => (a[1] < b[1] ? 1 : -1)).slice(0, 4).map(([id]) => FXA.badges.find(b => b.id === id)).filter(Boolean);
    const stepLabels = ["Insight", "Quiz", "Deal", "Done"];
    const stepIdx = plan.done ? 3 : plan.step;
    const dateStr = new Date().toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" });

    view().innerHTML = `
    <section class="page-head">
      <div><div class="eyebrow">${esc(dateStr)}</div><h1>${greeting()}, ${esc(p.name.split(" ")[0])}.</h1></div>
      ${FXA.streakAtRisk(p) ? `<div class="pill pill-warn">${I("flame")} Keep your ${st}-day streak alive today</div>` : ""}
    </section>

    <section class="hero-card ${plan.done ? "is-done" : ""}">
      <div class="hero-main">
        <div class="eyebrow light">Today's Daily Brief ${plan.review ? "· Review mode" : ""}</div>
        <h2>${esc(lesson.title)}</h2>
        <div class="hero-meta"><span class="tag" style="--tag:${mod.color}">${esc(mod.title)}</span><span>${I("clock")} ~${lesson.min + 5} min</span><span>${I("target")} ${plan.qids.length + 1} questions</span><span>${I("handshake")} 1 deal</span></div>
        <div class="steps">${stepLabels.map((s, i) => `<div class="step ${i < stepIdx ? "done" : i === stepIdx ? "cur" : ""}"><span>${i < stepIdx ? I("check") : i + 1}</span>${s}</div>`).join("")}</div>
        <div class="hero-actions">
          ${plan.done ? `<a class="btn btn-light" href="#/practice">${I("bolt")} Keep practising</a><a class="btn btn-ghost-light" href="#/daily">Review today's brief</a>`
                      : `<a class="btn btn-light btn-lg" href="#/daily">${I("play")} ${plan.step > 0 ? "Continue" : "Start"} Daily Brief</a>`}
        </div>
      </div>
      <div class="hero-side">${UI.ring(Math.round((xpT / goal) * 100), 132, 12, xpT, `/ ${goal} XP today`)}</div>
    </section>

    <section class="grid-4">
      <div class="stat card"><div class="stat-ico flame">${I("flame")}</div><div><div class="stat-val">${st} <small>day${st === 1 ? "" : "s"}</small></div><div class="stat-lbl">Streak · best ${p.streak.best} · ${I("snow", "ico-xs")} ${p.streak.freezes}</div></div></div>
      <div class="stat card"><div class="stat-ico">${I("trophy")}</div><div style="flex:1"><div class="stat-val">Lv ${lv.cur.lvl} <small>${esc(lv.cur.title)}</small></div>${UI.bar(lv.pct)}<div class="stat-lbl">${(lv.next.xp - p.xp).toLocaleString("en-GB")} XP to ${esc(lv.next.title)}</div></div></div>
      <div class="stat card"><div class="stat-ico">${I("book")}</div><div><div class="stat-val">${FXA.lessonsRead(p)}<small>/${FXA.allLessons.length}</small></div><div class="stat-lbl">Lessons read</div></div></div>
      <div class="stat card"><div class="stat-ico">${I("medal")}</div><div><div class="stat-val">${FXA.overallMastery(p)}<small>%</small></div><div class="stat-lbl">Knowledge mastery</div></div></div>
    </section>

    <section class="grid-2">
      <div class="card fact">
        <div class="card-head">${I("bulb")}<h3>Fox Fact of the day</h3></div>
        <p class="fact-text">${esc(fact.t)}</p><div class="muted small">Source: ${esc(fact.s)}</div>
      </div>
      <div class="card">
        <div class="card-head">${I("calendar")}<h3>This month in the market</h3><a class="link small" href="#/calendar">Full year ${I("arrowR", "ico-xs")}</a></div>
        <p>${esc(month ? month.t : "")}</p>
        <div class="card-head" style="margin-top:14px">${I("trend")}<h3>Your last 7 days</h3></div>
        <div class="week">${week.map(d => `<div class="wk"><div class="wk-bar" style="height:${Math.round((d.v / maxW) * 100)}%" title="${d.v} XP"></div><span>${U.parse(d.k).toLocaleDateString("en-GB", { weekday: "narrow" })}</span></div>`).join("")}</div>
      </div>
    </section>

    <section class="grid-2">
      <div class="card">
        <div class="card-head">${I("book")}<h3>Up next in your learning path</h3><a class="link small" href="#/learn">All modules ${I("arrowR", "ico-xs")}</a></div>
        ${next.length ? `<ul class="list">${next.map(l => lessonRow(p, l)).join("")}</ul>` : `<p class="muted">You've read every lesson. Daily Briefs now target your weakest modules — and the certification awaits.</p>`}
      </div>
      <div class="card">
        <div class="card-head">${I("medal")}<h3>Recent badges</h3><a class="link small" href="#/profile">All badges ${I("arrowR", "ico-xs")}</a></div>
        ${recent.length ? `<div class="badge-row">${recent.map(b => badgeTile(b)).join("")}</div>` : `<p class="muted">Complete today's Daily Brief to earn your first badge.</p>`}
      </div>
    </section>`;
  }

  function lessonRow(p, l) {
    const m = FXA.moduleById[l.module];
    return `<li><a href="#/lesson/${l.id}" class="row-link"><span class="dot ${p.lessons[l.id] ? "ok" : ""}" style="--c:${m.color}">${p.lessons[l.id] ? I("check") : ""}</span>
      <span class="row-main"><b>${esc(l.title)}</b><span class="muted small">${esc(m.title)} · ${l.min} min</span></span>${I("arrowR", "ico-muted")}</a></li>`;
  }
  function badgeTile(b, locked) {
    return `<div class="badge ${locked ? "locked" : ""}" title="${esc(b.desc)}"><div class="badge-ico">${I(locked ? "lock" : b.icon)}</div><div class="badge-name">${esc(b.name)}</div><div class="badge-desc">${esc(b.desc)}</div></div>`;
  }

  /* ═════════════ Daily Brief flow ═════════════ */
  function renderDaily() {
    const p = FXA.profile();
    const plan = FXA.todayPlan(p);
    if (plan.done) return renderDailySummary(p, plan);
    if (plan.step === 0) {
      const l = FXA.lessonById[plan.lessonId];
      view().innerHTML = dailyHeader(plan, "Step 1 of 3 · Insight") + lessonArticle(l, p) + `
        <div class="sticky-actions"><button class="btn btn-primary btn-lg" id="toQuiz">I've read it — quiz me ${I("arrowR")}</button></div>`;
      document.getElementById("toQuiz").onclick = () => {
        if (!p.lessons[l.id]) { p.lessons[l.id] = U.today(); FXA.addXP(p, 15); }
        plan.step = 1; FXA.save(); FXA.checkBadges(p); renderDaily(); refreshChrome();
      };
      return;
    }
    if (plan.step === 1) {
      const rng = U.rng(U.hash(p.id + plan.date + "q"));
      const items = plan.qids.map(id => FXA.renderableQ(id, rng)).filter(Boolean);
      items.push(FXA.generatedQ(rng, plan.genId));
      startQuiz({ mode: "daily", title: "Daily Brief · Quiz", subtitle: "Step 2 of 3", items, onDone: res => {
        plan.results = res.answers.map(a => a.correct ? 1 : 0);
        plan.step = 2; FXA.save(); renderDaily(); refreshChrome();
      } });
      return;
    }
    if (plan.step === 2) {
      startScenario(plan.scenarioId, score => {
        plan.scenarioScore = score;
        finishDaily(p, plan);
      });
    }
  }
  function dailyHeader(plan, label) {
    return `<div class="flow-head"><a href="#/home" class="btn btn-icon" title="Back">${I("arrowL")}</a><div><div class="eyebrow">Daily Brief · ${esc(U.fmtDate(plan.date))}</div><b>${esc(label)}</b></div></div>`;
  }
  function finishDaily(p, plan) {
    plan.done = true; plan.step = 3;
    const perfect = plan.results.length && plan.results.every(x => x === 1);
    FXA.addXP(p, 50);
    if (perfect) { FXA.addXP(p, 25); p.stats.perfectDays++; }
    p.stats.dailyDone++;
    FXA.markStreak(p);
    FXA.checkBadges(p);
    FXA.save();
    UI.sound("win"); UI.confetti();
    renderDailySummary(p, plan, true);
    refreshChrome();
  }
  function renderDailySummary(p, plan, fresh) {
    const correct = plan.results.filter(Boolean).length, total = plan.results.length;
    const sc = FXA.scenarios.find(s => s.id === plan.scenarioId);
    const l = FXA.lessonById[plan.lessonId];
    const tomorrowL = FXA.nextLessons(p, 1)[0];
    view().innerHTML = `
      <div class="summary card">
        ${UI.logo(56)}
        <h1>${fresh ? "Daily Brief complete!" : "Today's brief is done"}</h1>
        <p class="lead">${FXA.currentStreak(p)}-day streak ${I("flame", "ico-inline flame-c")} · ${FXA.xpToday(p)} XP today</p>
        <div class="summary-grid">
          <div><b>${esc(l.title)}</b><span>Insight</span></div>
          <div><b>${correct}/${total}</b><span>Quiz</span></div>
          <div><b>${plan.scenarioScore != null ? plan.scenarioScore + "/" + sc.steps.length * 10 : "—"}</b><span>Deal: ${esc(sc.title)}</span></div>
        </div>
        ${correct === total && total ? `<div class="pill pill-ok">${I("star")} Perfect day bonus +25 XP</div>` : ""}
        <div class="takeaway"><b>Remember:</b> ${esc(l.takeaway)}</div>
        ${tomorrowL ? `<p class="muted">Tomorrow: <b>${esc(tomorrowL.title)}</b> — unless you can't wait: <a class="link" href="#/lesson/${tomorrowL.id}">read ahead</a>.</p>` : ""}
        <div class="row-actions">
          <a class="btn btn-primary" href="#/practice">${I("bolt")} Keep practising</a>
          <a class="btn btn-ghost" href="#/home">Back home</a>
        </div>
      </div>`;
  }

  /* ═════════════ Lessons ═════════════ */
  function lessonArticle(l, p) {
    const m = FXA.moduleById[l.module];
    return `<article class="lesson card">
      <div class="lesson-head"><span class="tag" style="--tag:${m.color}">${esc(m.title)}</span><span class="muted small">${I("clock", "ico-xs")} ${l.min} min read ${p.lessons[l.id] ? "· " + I("check", "ico-xs") + " read" : ""}</span></div>
      <h1>${esc(l.title)}</h1>
      <div class="lesson-body">${l.custom ? esc(l.body).replace(/\n/g, "<br>") : l.body}</div>
      <div class="takeaway">${I("bulb")}<div><b>Key takeaway</b><br>${esc(l.takeaway)}</div></div>
      ${l.custom ? `<div class="muted small">Team knowledge · added ${esc(l.added || "")}${l.author ? " by " + esc(l.author) : ""}</div>` : ""}
    </article>`;
  }
  function renderLesson(id) {
    const p = FXA.profile();
    const l = FXA.lessonById[id];
    if (!l) return go("#/learn");
    const list = FXA.lessonsByModule[l.module], i = list.indexOf(l);
    const prev = list[i - 1], next = list[i + 1];
    view().innerHTML = `<div class="flow-head"><a href="#/module/${l.module}" class="btn btn-icon" title="Back">${I("arrowL")}</a><div><div class="eyebrow">${esc(FXA.moduleById[l.module].title)}</div><b>Lesson ${i + 1} of ${list.length}</b></div></div>
      ${lessonArticle(l, p)}
      <div class="sticky-actions">
        ${prev ? `<a class="btn btn-ghost" href="#/lesson/${prev.id}">${I("arrowL")} Previous</a>` : "<span></span>"}
        ${(l.qs || []).length ? `<button class="btn btn-primary" id="check">${p.lessons[l.id] ? "Check yourself" : "Mark as read & check yourself"} ${I("arrowR")}</button>` : `<button class="btn btn-primary" id="markRead">Mark as read</button>`}
        ${next ? `<a class="btn btn-ghost" href="#/lesson/${next.id}">Next ${I("arrowR")}</a>` : "<span></span>"}
      </div>`;
    const markRead = () => { if (!p.lessons[l.id]) { p.lessons[l.id] = U.today(); FXA.addXP(p, 15); FXA.checkBadges(p); FXA.save(); refreshChrome(); } };
    const c = document.getElementById("check");
    if (c) c.onclick = () => {
      markRead();
      const items = l.qs.map((_, k) => FXA.renderableQ(l.id + "#" + k));
      startQuiz({ mode: "lesson", title: l.title, subtitle: "Quick check", items, onDone: () => go(next ? `#/lesson/${next.id}` : `#/module/${l.module}`), doneLabel: next ? "Next lesson" : "Back to module" });
    };
    const mr = document.getElementById("markRead");
    if (mr) mr.onclick = () => { markRead(); go(next ? `#/lesson/${next.id}` : `#/module/${l.module}`); };
  }

  /* ═════════════ Learn ═════════════ */
  function renderLearn() {
    const p = FXA.profile();
    const trackHtml = FXA.tracks.map(t => {
      const mods = FXA.allModules.filter(m => m.track === t.id).sort((a, b) => a.order - b.order);
      if (!mods.length) return "";
      return `<section><div class="section-head"><h2>${esc(t.name)}</h2><span class="muted">${esc(t.desc)}</span></div>
        <div class="grid-modules">${mods.map(m => moduleCard(p, m)).join("")}</div></section>`;
    }).join("");
    view().innerHTML = `<section class="page-head"><div><div class="eyebrow">Curriculum</div><h1>Learn</h1><p class="muted">${FXA.allLessons.length} lessons in ${FXA.allModules.length} modules. Your Daily Brief follows a spiral path through all of them — or dive in anywhere.</p></div>
      <a class="btn btn-ghost" href="#/glossary">${I("search")} Glossary</a></section>${trackHtml}`;
  }
  function moduleCard(p, m) {
    const ls = FXA.lessonsByModule[m.id] || [];
    const read = ls.filter(l => p.lessons[l.id]).length;
    const mast = FXA.moduleMastery(p, m.id);
    return `<a class="module card" href="#/module/${m.id}" style="--mc:${m.color}">
      <div class="module-ico">${I(m.icon)}</div>
      <div class="module-title">${esc(m.title)}</div>
      <div class="module-desc">${esc(m.desc)}</div>
      <div class="module-foot"><span>${read}/${ls.length} read</span><span>${mast}% mastery</span></div>
      ${UI.bar(ls.length ? (read / ls.length) * 100 : 0, m.color)}
    </a>`;
  }
  function renderModule(id) {
    const p = FXA.profile();
    const m = FXA.moduleById[id];
    if (!m) return go("#/learn");
    const ls = FXA.lessonsByModule[id] || [];
    const mast = FXA.moduleMastery(p, id);
    view().innerHTML = `<div class="flow-head"><a href="#/learn" class="btn btn-icon" title="Back">${I("arrowL")}</a><div><div class="eyebrow">Module</div><b>${esc(m.title)}</b></div></div>
      <section class="module-hero card" style="--mc:${m.color}">
        <div class="module-ico lg">${I(m.icon)}</div>
        <div style="flex:1"><h1>${esc(m.title)}</h1><p class="muted">${esc(m.desc)}</p>
          <div class="row-actions">${ls.some(l => (l.qs || []).length) ? `<a class="btn btn-primary" href="#/modquiz/${id}">${I("target")} Module quiz</a>` : ""}
          ${ls[0] ? `<a class="btn btn-ghost" href="#/lesson/${(ls.find(l => !p.lessons[l.id]) || ls[0]).id}">${I("book")} ${ls.every(l => p.lessons[l.id]) ? "Re-read" : "Continue reading"}</a>` : ""}</div></div>
        ${UI.ring(mast, 110, 10, mast + "%", "mastery")}
      </section>
      <div class="card"><ul class="list">${ls.map(l => lessonRow(p, l)).join("")}</ul></div>
      <p class="muted small">Mastery grows when you answer questions correctly on spaced days — the Daily Brief schedules reviews automatically.</p>`;
  }

  /* ═════════════ Generic quiz runner ═════════════ */
  function startQuiz(opts) {
    S = Object.assign({ type: "quiz", idx: 0, answers: [], combo: 0, xp: 0, answered: null }, opts);
    renderQuiz();
  }
  function renderQuiz() {
    const s = S, q = s.items[s.idx];
    const exam = s.mode === "exam";
    const infinite = s.mode === "numbers";
    const total = infinite ? null : s.items.length;
    const pct = infinite ? 100 : Math.round((s.idx / total) * 100);
    const answered = s.answered != null;
    const correct = answered && s.answered === q.a;
    const m = FXA.moduleById[q.module];
    view().innerHTML = `
      <div class="quiz">
        <div class="quiz-top">
          <button class="btn btn-icon" id="qExit" title="Exit">${I("x")}</button>
          <div class="quiz-progress">${infinite ? `<div class="muted small">${s.answers.filter(a => a.correct).length} correct · ${s.answers.length} answered</div>` : UI.bar(pct)}</div>
          ${s.combo >= 2 && !exam ? `<div class="combo">${I("flame")} ${s.combo}×</div>` : `<div class="muted small">${infinite ? "" : `${s.idx + 1}/${total}`}</div>`}
        </div>
        <div class="card quiz-card">
          <div class="quiz-meta"><span class="eyebrow">${esc(s.title)}${s.subtitle ? " · " + esc(s.subtitle) : ""}</span>
            ${q.generated ? `<span class="tag" style="--tag:#FF6A13">${I("calc", "ico-xs")} Numbers Lab · ${esc(q.genName)}</span>` : m ? `<span class="tag" style="--tag:${m.color}">${esc(m.title)}</span>` : ""}</div>
          <h2 class="quiz-q">${q.q}</h2>
          <div class="options ${q.tf ? "tf" : ""}">
            ${q.o.map((o, i) => {
              let cls = "";
              if (answered && !exam) cls = i === q.a ? "correct" : i === s.answered ? "wrong" : "dim";
              if (answered && exam) cls = i === s.answered ? "picked" : "dim";
              return `<button class="option ${cls}" data-i="${i}" ${answered ? "disabled" : ""}><span class="key">${q.tf ? (i === 0 ? "T" : "F") : String.fromCharCode(65 + i)}</span><span>${q.html ? o : esc(o)}</span></button>`;
            }).join("")}
          </div>
          ${answered && !exam ? `<div class="feedback ${correct ? "ok" : "ko"}">
              <div class="fb-title">${correct ? I("check") + " Correct" + (s.lastXP ? ` · +${s.lastXP} XP` : "") : I("x") + " Not quite"}</div>
              <div class="fb-text">${q.html ? q.x : esc(q.x)}</div></div>` : ""}
        </div>
        <div class="sticky-actions">
          ${infinite ? `<button class="btn btn-ghost" id="qEnd">Finish session</button>` : "<span></span>"}
          ${answered ? `<button class="btn btn-primary btn-lg" id="qNext">${infinite || s.idx < total - 1 ? "Continue" : "See results"} ${I("arrowR")}</button>` : `<span class="muted small hide-sm">Tip: press 1–4 / T–F</span>`}
        </div>
      </div>`;
    view().querySelectorAll(".option").forEach(b => (b.onclick = () => answerQuiz(Number(b.dataset.i))));
    const n = document.getElementById("qNext"); if (n) { n.onclick = nextQuiz; n.focus(); }
    const e = document.getElementById("qEnd"); if (e) e.onclick = finishQuiz;
    document.getElementById("qExit").onclick = () => {
      if (s.answers.length && !confirm("Leave this session? Progress on answered questions is saved.")) return;
      FXA.save(); go(s.mode === "daily" ? "#/home" : "#/practice");
    };
  }
  function answerQuiz(i) {
    const s = S, q = s.items[s.idx], p = FXA.profile();
    if (s.answered != null) return;
    s.answered = i;
    const ok = i === q.a;
    s.answers.push({ q, picked: i, correct: ok });
    p.stats.answered++;
    s.lastXP = 0;
    if (ok) {
      p.stats.correct++; s.combo++;
      if (s.combo > p.stats.bestCombo) p.stats.bestCombo = s.combo;
      if (q.generated) p.stats.numbersCorrect++;
      if (s.mode !== "exam") {
        const xp = (q.generated ? 15 : 10) + Math.min(Math.max(s.combo - 1, 0), 5) * 2;
        s.lastXP = xp; s.xp += xp; FXA.addXP(p, xp);
      }
      if (s.mode !== "exam") UI.sound("ok");
    } else { s.combo = 0; if (s.mode !== "exam") UI.sound("ko"); }
    FXA.review(p, q.id, ok);
    FXA.checkBadges(p);
    FXA.save();
    if (s.mode === "exam") { setTimeout(nextQuiz, 250); }
    renderQuiz(); refreshChrome();
  }
  function nextQuiz() {
    const s = S;
    if (!s || s.answered == null) return;
    s.answered = null;
    if (s.mode === "numbers") { s.items.push(FXA.generatedQ(Math.random, s.genId)); s.idx++; return renderQuiz(); }
    if (s.idx < s.items.length - 1) { s.idx++; return renderQuiz(); }
    finishQuiz();
  }
  function finishQuiz() {
    const s = S, p = FXA.profile();
    const ok = s.answers.filter(a => a.correct).length, n = s.answers.length;
    if (s.mode === "exam") return finishExam(s);
    if (s.mode === "daily") { S = null; return s.onDone && s.onDone(s); }
    const missed = s.answers.filter(a => !a.correct);
    if (n && ok === n && n >= 3) { UI.sound("win"); UI.confetti(); }
    FXA.save();
    view().innerHTML = `<div class="summary card">
      <div class="big-score">${ok}<small>/${n}</small></div>
      <h1>${n === 0 ? "Session ended" : ok === n ? "Flawless!" : ok / n >= 0.7 ? "Strong work" : "Keep going — repetition wins"}</h1>
      <p class="lead">+${s.xp} XP · best combo ${Math.max(...s.answers.reduce((acc, a) => { const c = a.correct ? (acc.cur + 1) : 0; acc.cur = c; acc.list.push(c); return acc; }, { cur: 0, list: [0] }).list)}</p>
      ${missed.length ? `<div class="review-list"><h3>Review what you missed</h3>${missed.map(a => `<div class="review-item"><div class="rq">${a.q.q}</div><div class="ra">${I("check", "ico-xs")} ${a.q.html ? a.q.o[a.q.a] : esc(a.q.o[a.q.a])}</div><div class="rx muted">${a.q.html ? a.q.x : esc(a.q.x)}</div></div>`).join("")}</div>` : ""}
      <div class="row-actions">
        ${s.onDone ? `<button class="btn btn-primary" id="done">${esc(s.doneLabel || "Continue")} ${I("arrowR")}</button>` : `<a class="btn btn-primary" href="#/practice">${I("bolt")} More practice</a>`}
        ${s.again ? `<button class="btn btn-ghost" id="again">${I("refresh")} Again</button>` : ""}
      </div></div>`;
    const d = document.getElementById("done"); if (d) d.onclick = () => s.onDone(s);
    const a = document.getElementById("again"); if (a) a.onclick = s.again;
    S = null;
  }

  function startModuleQuiz(modId) {
    const m = FXA.moduleById[modId];
    if (!m) return go("#/learn");
    const ids = U.shuffle(FXA.questionIds.filter(id => FXA.qById[id].module === modId)).slice(0, 10);
    if (!ids.length) return go("#/module/" + modId);
    startQuiz({ mode: "module", title: m.title, subtitle: "Module quiz", items: ids.map(id => FXA.renderableQ(id)), again: () => startModuleQuiz(modId), onDone: () => go("#/module/" + modId), doneLabel: "Back to module" });
  }
  function startWeak() {
    const p = FXA.profile();
    let ids = Object.keys(p.cards).filter(id => FXA.qById[id] && p.cards[id].ko > 0)
      .sort((a, b) => (p.cards[b].ko - p.cards[b].ok) - (p.cards[a].ko - p.cards[a].ok) || p.cards[a].box - p.cards[b].box);
    const due = FXA.dueIds(p);
    ids = Array.from(new Set(ids.concat(due))).slice(0, 10);
    if (!ids.length) {
      view().innerHTML = `<div class="summary card">${UI.logo(48)}<h1>No weak spots yet</h1><p class="lead">Answer some questions first — anything you miss or that is due for review lands here.</p><a class="btn btn-primary" href="#/practice">Back to practice</a></div>`;
      return;
    }
    startQuiz({ mode: "weak", title: "Weak spots", subtitle: "Targeted review", items: U.shuffle(ids).map(id => FXA.renderableQ(id)), again: startWeak });
  }
  function startNumbers() {
    const genId = null;
    startQuiz({ mode: "numbers", title: "Numbers Lab", subtitle: "Infinite drills", genId, items: [FXA.generatedQ(Math.random)] });
  }

  /* ═════════════ Practice hub ═════════════ */
  function renderPractice() {
    const p = FXA.profile();
    const due = FXA.dueIds(p).length;
    const allRead = FXA.lessonsRead(p) >= FXA.allLessons.length;
    const cards = [
      ["rapid", "bolt", "Rapid Fire", "60 seconds. As many correct answers as you can.", `Best: ${p.stats.rapidBest}`],
      ["numbers", "calc", "Numbers Lab", "Endless calculation drills: margin VAT, recovery value, DaaS fees, CO₂, grade mixes…", `${p.stats.numbersCorrect} solved`],
      ["scenarios", "handshake", "Deal Simulator", "Realistic Benelux customer situations. Choose your moves, get coached.", `${Object.keys(p.scenarios).length}/${FXA.scenarios.length} played`],
      ["flash", "cards", "Flashcards", "The industry glossary — NL, BE, LU, EU and Foxway terms.", `${p.stats.flashcards} reviewed`],
      ["weak", "target", "Weak Spots", "Questions you missed or that are due for spaced review.", `${due} due today`],
      ["exam", "cert", "Certification", "30-question Benelux certification exam. Pass mark 80%.", p.certified ? `Certified ${U.fmtDate(p.certified)}` : allRead ? "Unlocked" : `${FXA.lessonsRead(p)}/${FXA.allLessons.length} lessons to unlock`]
    ];
    view().innerHTML = `<section class="page-head"><div><div class="eyebrow">Arena</div><h1>Practice</h1><p class="muted">Every correct answer earns XP. Combos multiply it. Keep your knowledge sharp between Daily Briefs.</p></div></section>
      <div class="grid-practice">${cards.map(([id, ic, t, d, meta]) => `<a class="practice card" href="#/${id}"><div class="practice-ico">${I(ic)}</div><h3>${t}</h3><p>${d}</p><div class="practice-meta">${meta}</div></a>`).join("")}</div>
      <section class="card"><div class="card-head">${I("medal")}<h3>Module mastery</h3></div>
        <div class="mastery-list">${FXA.allModules.filter(m => (FXA.lessonsByModule[m.id] || []).some(l => (l.qs || []).length)).map(m => { const v = FXA.moduleMastery(p, m.id); return `<a href="#/modquiz/${m.id}" class="mastery-row"><span>${esc(m.title)}</span>${UI.bar(v, m.color)}<b>${v}%</b></a>`; }).join("")}</div>
      </section>`;
  }

  /* ═════════════ Rapid Fire ═════════════ */
  function rapidPool(p) {
    const read = FXA.questionIds.filter(id => p.lessons[FXA.qById[id].lessonId]);
    const pool = read.length >= 20 ? read : FXA.questionIds;
    return U.shuffle(pool.concat(U.shuffle(FXA.glossaryIds).slice(0, 40)));
  }
  function startRapid() {
    view().innerHTML = `<div class="summary card"><div class="practice-ico xl">${I("bolt")}</div><h1>Rapid Fire</h1>
      <p class="lead">60 seconds on the clock. +1 per correct answer, wrong answers cost 3 seconds. 3 XP per point.</p>
      <button class="btn btn-primary btn-lg" id="go">${I("play")} Start</button></div>`;
    document.getElementById("go").onclick = () => {
      const p = FXA.profile();
      S = { type: "rapid", pool: rapidPool(p), i: 0, score: 0, n: 0, end: Date.now() + 60000, lock: false };
      renderRapid();
      timer = setInterval(() => {
        const left = Math.max(0, S.end - Date.now());
        const el = document.getElementById("rfTime"), bar = document.getElementById("rfBar");
        if (el) el.textContent = Math.ceil(left / 1000) + "s";
        if (bar) bar.style.width = (left / 600) + "%";
        if (left <= 0) { clearInterval(timer); timer = null; finishRapid(); }
      }, 100);
    };
  }
  function renderRapid() {
    const s = S;
    if (s.i >= s.pool.length) s.pool = s.pool.concat(U.shuffle(s.pool));
    const q = FXA.renderableQ(s.pool[s.i]);
    s.q = q;
    view().innerHTML = `<div class="quiz rapid">
      <div class="quiz-top"><div class="rf-score">${I("bolt")} ${s.score}</div><div class="quiz-progress"><div class="bar"><div class="bar-fill" id="rfBar" style="width:${Math.max(0, s.end - Date.now()) / 600}%"></div></div></div><div class="rf-time" id="rfTime">${Math.ceil((s.end - Date.now()) / 1000)}s</div></div>
      <div class="card quiz-card"><h2 class="quiz-q">${q.q}</h2>
        <div class="options ${q.tf ? "tf" : ""}">${q.o.map((o, i) => `<button class="option" data-i="${i}"><span class="key">${q.tf ? (i === 0 ? "T" : "F") : String.fromCharCode(65 + i)}</span><span>${q.html ? o : esc(o)}</span></button>`).join("")}</div></div></div>`;
    view().querySelectorAll(".option").forEach(b => (b.onclick = () => answerRapid(Number(b.dataset.i), b)));
  }
  function answerRapid(i, btn) {
    const s = S, p = FXA.profile();
    if (!s || s.lock || s.type !== "rapid") return;
    s.lock = true;
    const ok = i === s.q.a;
    s.n++;
    p.stats.answered++;
    if (ok) { s.score++; p.stats.correct++; UI.sound("tick"); } else { s.end -= 3000; UI.sound("ko"); }
    FXA.review(p, s.q.id, ok);
    btn.classList.add(ok ? "correct" : "wrong");
    if (!ok) { const c = view().querySelector(`.option[data-i="${s.q.a}"]`); if (c) c.classList.add("correct"); }
    setTimeout(() => { if (S !== s || s.done) return; s.i++; s.lock = false; renderRapid(); }, ok ? 250 : 700);
  }
  function finishRapid() {
    const s = S, p = FXA.profile();
    if (!s || s.type !== "rapid" || s.done) return;
    s.done = true;
    const best = s.score > p.stats.rapidBest;
    if (best) p.stats.rapidBest = s.score;
    FXA.addXP(p, s.score * 3);
    FXA.checkBadges(p); FXA.save();
    if (best && s.score > 0) { UI.sound("win"); UI.confetti(); }
    view().innerHTML = `<div class="summary card"><div class="big-score">${s.score}</div><h1>${best && s.score > 0 ? "New personal best!" : "Time's up"}</h1>
      <p class="lead">${s.score}/${s.n} correct · +${s.score * 3} XP · best ${p.stats.rapidBest}</p>
      <div class="row-actions"><a class="btn btn-primary" href="#/rapid" id="again">${I("refresh")} Play again</a><a class="btn btn-ghost" href="#/practice">Back</a></div></div>`;
    document.getElementById("again").onclick = e => { e.preventDefault(); startRapid(); };
    refreshChrome();
  }

  /* ═════════════ Flashcards ═════════════ */
  function startFlash() {
    const p = FXA.profile();
    const t = U.today();
    const due = FXA.glossary.filter(g => { const c = p.cards["g:d:" + g[0]]; return !c || c.due <= t; });
    const deck = U.shuffle(due.length >= 10 ? due : FXA.glossary).slice(0, 15);
    S = { type: "flash", deck, i: 0, flipped: false, known: 0 };
    renderFlash();
  }
  function renderFlash() {
    const s = S;
    if (s.i >= s.deck.length) {
      FXA.save();
      view().innerHTML = `<div class="summary card"><div class="practice-ico xl">${I("cards")}</div><h1>Deck complete</h1><p class="lead">${s.known}/${s.deck.length} known · +${s.deck.length * 2} XP</p>
        <div class="row-actions"><button class="btn btn-primary" id="again">${I("refresh")} New deck</button><a class="btn btn-ghost" href="#/glossary">Browse glossary</a></div></div>`;
      document.getElementById("again").onclick = startFlash;
      return;
    }
    const [term, def, mod] = s.deck[s.i];
    const m = FXA.moduleById[mod];
    view().innerHTML = `<div class="quiz"><div class="quiz-top"><a class="btn btn-icon" href="#/practice">${I("x")}</a><div class="quiz-progress">${UI.bar((s.i / s.deck.length) * 100)}</div><div class="muted small">${s.i + 1}/${s.deck.length}</div></div>
      <div class="flashcard ${s.flipped ? "flipped" : ""}" id="fc" tabindex="0">
        <div class="fc-face fc-front">${m ? `<span class="tag" style="--tag:${m.color}">${esc(m.title)}</span>` : ""}<h2>${esc(term)}</h2><span class="muted small">Tap to reveal</span></div>
        <div class="fc-face fc-back"><h3>${esc(term)}</h3><p>${esc(def)}</p></div>
      </div>
      <div class="sticky-actions">${s.flipped ? `<button class="btn btn-ghost btn-lg" id="again">${I("refresh")} Again</button><button class="btn btn-primary btn-lg" id="got">${I("check")} Got it</button>` : `<span></span><button class="btn btn-primary btn-lg" id="flip">Reveal</button>`}</div></div>`;
    const flip = () => { s.flipped = true; renderFlash(); };
    document.getElementById("fc").onclick = () => { if (!s.flipped) flip(); };
    const f = document.getElementById("flip"); if (f) f.onclick = flip;
    const grade = ok => { const p = FXA.profile(); p.stats.flashcards++; if (ok) s.known++; FXA.review(p, "g:d:" + term, ok); FXA.addXP(p, 2); FXA.checkBadges(p); s.i++; s.flipped = false; renderFlash(); refreshChrome(); };
    const g = document.getElementById("got"); if (g) g.onclick = () => grade(true);
    const a = document.getElementById("again"); if (a) a.onclick = () => grade(false);
  }

  /* ═════════════ Deal Simulator ═════════════ */
  function renderScenarioList() {
    const p = FXA.profile();
    view().innerHTML = `<div class="flow-head"><a href="#/practice" class="btn btn-icon">${I("arrowL")}</a><div><div class="eyebrow">Practice</div><b>Deal Simulator</b></div></div>
      <p class="muted">Each scenario is a realistic situation in the Benelux market. Pick the best move at every step — you'll get coaching feedback and up to 10 points per step.</p>
      <div class="grid-practice">${FXA.scenarios.map(sc => { const best = p.scenarios[sc.id], max = sc.steps.length * 10; const m = FXA.moduleById[sc.module];
        return `<a class="practice card" href="#/scenario/${sc.id}"><div class="scen-top"><span class="tag" style="--tag:${m.color}">${esc(m.title)}</span><span class="region">${esc(sc.region)}</span></div><h3>${esc(sc.title)}</h3><p>${esc(sc.setup.slice(0, 120))}…</p><div class="practice-meta">${best != null ? `Best ${best}/${max}` : "Not played"}</div></a>`; }).join("")}</div>`;
  }
  function startScenario(id, onDone) {
    const sc = FXA.scenarios.find(s => s.id === id);
    if (!sc) return go("#/scenarios");
    S = { type: "scenario", sc, step: -1, score: 0, picked: null, onDone, orders: sc.steps.map(st => U.shuffle(st.choices.map((_, i) => i))) };
    renderScenario();
  }
  function renderScenario() {
    const s = S, sc = s.sc, m = FXA.moduleById[sc.module];
    const head = `<div class="flow-head"><a href="${s.onDone ? "#/home" : "#/scenarios"}" class="btn btn-icon">${I(s.onDone ? "arrowL" : "x")}</a><div><div class="eyebrow">${s.onDone ? "Daily Brief · Step 3 of 3 · " : ""}Deal Simulator</div><b>${esc(sc.title)}</b></div><div class="scen-score">${s.score} pts</div></div>`;
    if (s.step === -1) {
      view().innerHTML = head + `<div class="card scen-setup"><div class="scen-top"><span class="tag" style="--tag:${m.color}">${esc(m.title)}</span><span class="region">${I("map", "ico-xs")} ${esc(sc.region)}</span></div>
        <h2>The situation</h2><p class="lead">${esc(sc.setup)}</p></div>
        <div class="sticky-actions"><span></span><button class="btn btn-primary btn-lg" id="scGo">Take the meeting ${I("arrowR")}</button></div>`;
      document.getElementById("scGo").onclick = () => { s.step = 0; renderScenario(); };
      return;
    }
    if (s.step >= sc.steps.length) return finishScenario();
    const st = sc.steps[s.step], order = s.orders[s.step];
    const picked = s.picked;
    view().innerHTML = head + `<div class="card quiz-card">
      <div class="quiz-meta"><span class="eyebrow">Move ${s.step + 1} of ${sc.steps.length}</span></div>
      <h2 class="quiz-q">${esc(st.prompt)}</h2>
      <div class="options">${order.map((ci, k) => { const ch = st.choices[ci]; let cls = ""; if (picked != null) { const best = Math.max(...st.choices.map(c => c.s)); cls = ch.s === best ? "correct" : ci === picked ? (ch.s >= 5 ? "partial" : "wrong") : "dim"; }
        return `<button class="option ${cls}" data-c="${ci}" ${picked != null ? "disabled" : ""}><span class="key">${String.fromCharCode(65 + k)}</span><span>${esc(ch.t)}${picked != null ? `<em class="pts">${ch.s} pts</em>` : ""}</span></button>`; }).join("")}</div>
      ${picked != null ? (() => { const ch = st.choices[picked]; return `<div class="feedback ${ch.s >= 8 ? "ok" : ch.s >= 5 ? "mid" : "ko"}"><div class="fb-title">${I("chat")} Coach · +${ch.s} pts</div><div class="fb-text">${esc(ch.f)}</div></div>`; })() : ""}
      </div>
      <div class="sticky-actions"><span></span>${picked != null ? `<button class="btn btn-primary btn-lg" id="scNext">${s.step < sc.steps.length - 1 ? "Next move" : "See outcome"} ${I("arrowR")}</button>` : ""}</div>`;
    view().querySelectorAll(".option").forEach(b => (b.onclick = () => {
      if (s.picked != null) return;
      s.picked = Number(b.dataset.c);
      const pts = st.choices[s.picked].s;
      s.score += pts;
      UI.sound(pts >= 8 ? "ok" : "ko");
      renderScenario();
    }));
    const n = document.getElementById("scNext"); if (n) { n.focus(); n.onclick = () => { s.step++; s.picked = null; renderScenario(); }; }
  }
  function finishScenario() {
    const s = S, p = FXA.profile(), sc = s.sc, max = sc.steps.length * 10;
    const prev = p.scenarios[sc.id];
    if (prev == null || s.score > prev) p.scenarios[sc.id] = s.score;
    FXA.addXP(p, s.score);
    FXA.checkBadges(p); FXA.save();
    if (s.score === max) { UI.sound("win"); UI.confetti(); }
    if (s.onDone) { const cb = s.onDone; S = null; return cb(s.score); }
    view().innerHTML = `<div class="summary card"><div class="big-score">${s.score}<small>/${max}</small></div>
      <h1>${s.score === max ? "Deal closed — textbook!" : s.score >= max * 0.7 ? "Good deal" : "The customer walked — try again"}</h1>
      <p class="lead">+${s.score} XP${prev != null ? ` · previous best ${prev}` : ""}</p>
      <div class="row-actions"><button class="btn btn-primary" id="again">${I("refresh")} Replay</button><a class="btn btn-ghost" href="#/scenarios">All scenarios</a></div></div>`;
    document.getElementById("again").onclick = () => startScenario(sc.id, null);
    refreshChrome();
  }

  /* ═════════════ Certification exam ═════════════ */
  const EXAM_N = 30, EXAM_PASS = 0.8;
  function renderExamIntro() {
    const p = FXA.profile();
    const read = FXA.lessonsRead(p), total = FXA.allLessons.length, unlocked = read >= total;
    view().innerHTML = `<div class="summary card"><div class="practice-ico xl">${I("cert")}</div>
      <h1>Foxway Benelux Certification</h1>
      <p class="lead">${EXAM_N} questions across all modules. No hints during the exam. Pass mark: ${Math.round(EXAM_PASS * 100)}%. Passing earns +300 XP, the <b>Certified</b> badge and a printable certificate.</p>
      ${p.certified ? `<div class="pill pill-ok">${I("check")} Certified on ${esc(U.fmtDate(p.certified))} · best ${p.stats.examBest}/${EXAM_N}</div>` : ""}
      ${unlocked ? `<div class="row-actions"><button class="btn btn-primary btn-lg" id="start">${I("play")} ${p.certified ? "Retake exam" : "Start exam"}</button>${p.certified ? `<a class="btn btn-ghost" href="#/certificate">${I("cert")} View certificate</a>` : ""}</div>`
                 : `<div class="lock-box">${I("lock")}<div><b>Locked</b> — read all lessons first (${read}/${total}).${UI.bar((read / total) * 100)}</div></div><a class="btn btn-ghost" href="#/learn">Go to lessons</a>`}
    </div>`;
    const b = document.getElementById("start");
    if (b) b.onclick = () => {
      // Balanced sampling: at least 2 per module, then fill
      const byMod = {};
      FXA.questionIds.forEach(id => { const m = FXA.qById[id].module; (byMod[m] = byMod[m] || []).push(id); });
      let ids = [];
      Object.values(byMod).forEach(arr => (ids = ids.concat(U.shuffle(arr).slice(0, 2))));
      const rest = U.shuffle(FXA.questionIds.filter(id => !ids.includes(id)));
      ids = U.shuffle(ids.concat(rest).slice(0, EXAM_N));
      startQuiz({ mode: "exam", title: "Certification exam", items: ids.map(id => FXA.renderableQ(id)) });
    };
  }
  function finishExam(s) {
    const p = FXA.profile();
    const ok = s.answers.filter(a => a.correct).length, n = s.items.length;
    const passed = ok / n >= EXAM_PASS;
    if (ok > p.stats.examBest) p.stats.examBest = ok;
    if (passed && !p.certified) { p.certified = U.today(); FXA.addXP(p, 300); }
    FXA.addXP(p, ok * 5);
    FXA.checkBadges(p); FXA.save();
    if (passed) { UI.sound("win"); UI.confetti(); }
    const missed = s.answers.filter(a => !a.correct);
    view().innerHTML = `<div class="summary card"><div class="big-score">${ok}<small>/${n}</small></div>
      <h1>${passed ? "You're certified!" : "Not yet — so close"}</h1>
      <p class="lead">${Math.round((ok / n) * 100)}% · pass mark ${Math.round(EXAM_PASS * 100)}% · +${ok * 5 + (passed && p.certified === U.today() ? 300 : 0)} XP</p>
      ${missed.length ? `<div class="review-list"><h3>Review</h3>${missed.map(a => `<div class="review-item"><div class="rq">${a.q.q}</div><div class="ra">${I("check", "ico-xs")} ${a.q.html ? a.q.o[a.q.a] : esc(a.q.o[a.q.a])}</div><div class="rx muted">${a.q.html ? a.q.x : esc(a.q.x)}</div></div>`).join("")}</div>` : ""}
      <div class="row-actions">${passed ? `<a class="btn btn-primary" href="#/certificate">${I("cert")} View certificate</a>` : `<a class="btn btn-primary" href="#/weak">${I("target")} Train weak spots</a>`}<a class="btn btn-ghost" href="#/practice">Back</a></div></div>`;
    S = null; refreshChrome();
  }
  function renderCertificate() {
    const p = FXA.profile();
    if (!p.certified) return go("#/exam");
    view().innerHTML = `<div class="row-actions no-print" style="justify-content:flex-end"><button class="btn btn-ghost" onclick="window.print()">${I("print")} Print / Save as PDF</button></div>
      <div class="certificate">
        <div class="cert-brand">${UI.logo(56)}<div><div class="brand-word">foxway</div><div class="brand-sub">Benelux Academy</div></div></div>
        <div class="cert-eyebrow">Certificate of completion</div>
        <h1>${esc(p.name)}</h1>
        <p>has successfully completed the <b>Foxway Benelux Academy</b> curriculum — refurbished & circular tech industry, Foxway, and the Netherlands, Belgium and Luxembourg markets — and passed the certification exam with a best score of <b>${p.stats.examBest}/${EXAM_N}</b>.</p>
        <div class="cert-meta"><div><span>Date</span><b>${esc(U.fmtDate(p.certified))}</b></div><div><span>Role</span><b>${esc(p.role)}</b></div><div><span>Level</span><b>${FXA.levelFor(p.xp).cur.lvl} · ${esc(FXA.levelFor(p.xp).cur.title)}</b></div></div>
      </div>`;
  }

  /* ═════════════ Glossary & calendar ═════════════ */
  function renderGlossary() {
    view().innerHTML = `<section class="page-head"><div><div class="eyebrow">Reference</div><h1>Glossary</h1><p class="muted">${FXA.glossary.length} terms you'll hear in meetings, tenders and reports.</p></div><a class="btn btn-primary" href="#/flash">${I("cards")} Flashcards</a></section>
      <div class="search"><input id="gq" type="search" placeholder="Search terms, e.g. margin, BKR, ITAD…" autocomplete="off">${I("search")}</div>
      <div class="card"><dl class="glossary" id="glist"></dl></div>`;
    const draw = qstr => {
      const s = (qstr || "").toLowerCase();
      const list = FXA.glossary.filter(g => !s || g[0].toLowerCase().includes(s) || g[1].toLowerCase().includes(s)).sort((a, b) => a[0].localeCompare(b[0]));
      document.getElementById("glist").innerHTML = list.length ? list.map(([t, d, m]) => { const mod = FXA.moduleById[m]; return `<div class="g-item"><dt>${esc(t)} ${mod ? `<span class="tag sm" style="--tag:${mod.color}">${esc(mod.title)}</span>` : ""}</dt><dd>${esc(d)}</dd></div>`; }).join("") : `<p class="muted">No matches.</p>`;
    };
    draw("");
    document.getElementById("gq").oninput = e => draw(e.target.value);
  }
  function renderCalendar() {
    const cur = new Date().getMonth() + 1;
    view().innerHTML = `<div class="flow-head"><a href="#/home" class="btn btn-icon">${I("arrowL")}</a><div><div class="eyebrow">Market rhythm</div><b>The refurbished year</b></div></div>
      <div class="card"><ul class="timeline">${FXA.calendar.map(c => `<li class="${c.m === cur ? "now" : ""}"><span class="tl-m">${new Date(2026, c.m - 1, 1).toLocaleDateString("en-GB", { month: "short" })}</span><span>${esc(c.t)}</span></li>`).join("")}</ul></div>`;
  }

  /* ═════════════ Team ═════════════ */
  function renderTeam() {
    const p = FXA.profile();
    const locals = Object.values(FXA.state.profiles).map(pr => ({ n: pr.name, r: pr.role, x: pr.xp, l: FXA.levelFor(pr.xp).cur.lvl, s: FXA.currentStreak(pr), w: FXA.xpLastDays(pr, 7).reduce((a, d) => a + d.v, 0), m: FXA.overallMastery(pr), c: pr.certified ? 1 : 0, me: pr.id === p.id, local: true }));
    const names = new Set(locals.map(l => l.n.toLowerCase()));
    const rows = locals.concat(FXA.state.team.filter(t => !names.has(t.n.toLowerCase())));
    const tab = (location.hash.split("/")[2]) || "week";
    rows.sort((a, b) => (tab === "week" ? b.w - a.w : b.x - a.x));
    const code = FXA.shareCode(p);
    view().innerHTML = `<section class="page-head"><div><div class="eyebrow">The Benelux den</div><h1>Team</h1><p class="muted">Compare progress with colleagues — no server needed. Share your code; import theirs.</p></div></section>
      <div class="grid-2">
        <div class="card">
          <div class="card-head">${I("trophy")}<h3>Leaderboard</h3>
            <div class="seg"><a href="#/team/week" class="${tab === "week" ? "on" : ""}">This week</a><a href="#/team/all" class="${tab === "all" ? "on" : ""}">All time</a></div></div>
          <ol class="leader">${rows.map((r, i) => `<li class="${r.me ? "me" : ""}"><span class="rank r${i + 1}">${i + 1}</span><span class="avatar">${esc(initials(r.n))}</span>
            <span class="row-main"><b>${esc(r.n)}${r.c ? ` ${I("cert", "ico-xs cert-c")}` : ""}</b><span class="muted small">${esc(r.r || "")} · Lv ${r.l} · ${I("flame", "ico-xs")} ${r.s} · ${r.m}% mastery${r.d ? " · updated " + esc(r.d) : ""}</span></span>
            <b class="lb-xp">${(tab === "week" ? r.w : r.x).toLocaleString("en-GB")} XP</b>${!r.local ? `<button class="btn btn-icon sm" data-rm="${esc(r.n)}" title="Remove">${I("trash")}</button>` : ""}</li>`).join("")}</ol>
        </div>
        <div class="card">
          <div class="card-head">${I("copy")}<h3>Your share code</h3></div>
          <p class="muted small">Post it in your team chat each week. It contains only name, role, XP, level, streak, mastery and badges count.</p>
          <div class="code-box"><code>${esc(code)}</code></div>
          <button class="btn btn-ghost" id="copyCode">${I("copy")} Copy code</button>
          <div class="card-head" style="margin-top:20px">${I("download")}<h3>Add a teammate</h3></div>
          <textarea id="imp" rows="3" placeholder="Paste one or more FXA1.… codes"></textarea>
          <button class="btn btn-primary" id="impBtn">${I("plus")} Add to leaderboard</button>
        </div>
      </div>
      <div class="card">
        <div class="card-head">${I("book")}<h3>Team knowledge</h3></div>
        <p class="muted">Add your own lessons and quiz questions — customer learnings, internal processes, price-file rules, local contacts. They appear in a <b>Team Knowledge</b> module for everyone who imports the pack. Ideal for onboarding future Benelux colleagues.</p>
        <div class="row-actions">
          <button class="btn btn-primary" id="addLesson">${I("plus")} Write a lesson</button>
          <button class="btn btn-ghost" id="expPack">${I("download")} Export pack</button>
          <button class="btn btn-ghost" id="impPack">${I("upload")} Import pack</button>
        </div>
        ${(FXA.state.custom.lessons || []).length ? `<ul class="list">${FXA.state.custom.lessons.map(l => `<li><a class="row-link" href="#/lesson/${l.id}"><span class="dot" style="--c:#0B1B2B"></span><span class="row-main"><b>${esc(l.title)}</b><span class="muted small">${(l.qs || []).length} question(s)${l.author ? " · " + esc(l.author) : ""}</span></span></a><button class="btn btn-icon sm" data-del="${l.id}" title="Delete">${I("trash")}</button></li>`).join("")}</ul>` : ""}
        <div id="editor"></div>
      </div>`;
    document.getElementById("copyCode").onclick = () => UI.copy(code);
    document.getElementById("impBtn").onclick = () => {
      const raw = document.getElementById("imp").value.split(/\s+/).filter(Boolean);
      let added = 0, bad = 0;
      raw.forEach(c => { try { const o = FXA.parseShareCode(c); FXA.state.team = FXA.state.team.filter(t => t.n.toLowerCase() !== o.n.toLowerCase()); FXA.state.team.push(o); added++; } catch (e) { bad++; } });
      FXA.save();
      UI.toast({ icon: added ? "users" : "x", title: added ? `${added} teammate(s) added` : "No valid codes found", text: bad ? `${bad} code(s) could not be read.` : "" });
      renderTeam();
    };
    view().querySelectorAll("[data-rm]").forEach(b => (b.onclick = () => { FXA.state.team = FXA.state.team.filter(t => t.n !== b.dataset.rm); FXA.save(); renderTeam(); }));
    view().querySelectorAll("[data-del]").forEach(b => (b.onclick = () => {
      if (!confirm("Delete this team lesson from this browser?")) return;
      FXA.state.custom.lessons = FXA.state.custom.lessons.filter(l => l.id !== b.dataset.del); FXA.save(); FXA.buildIndex(); renderTeam();
    }));
    document.getElementById("addLesson").onclick = () => lessonEditor(p);
    document.getElementById("expPack").onclick = () => {
      if (!FXA.state.custom.lessons.length) return UI.toast({ icon: "x", title: "Nothing to export yet", text: "Write a lesson first." });
      UI.download(`foxway-benelux-team-pack-${U.today()}.json`, JSON.stringify({ type: "fxa-pack", version: 1, exported: U.today(), lessons: FXA.state.custom.lessons }, null, 2));
    };
    document.getElementById("impPack").onclick = () => UI.readFile(".json,application/json", txt => {
      try {
        const o = JSON.parse(txt);
        if (o.type !== "fxa-pack" || !Array.isArray(o.lessons)) throw new Error("bad");
        let n = 0;
        o.lessons.forEach(l => {
          if (!l || typeof l.title !== "string" || typeof l.body !== "string") return;
          const clean = { id: String(l.id || "team-" + U.uid()).replace(/[^a-z0-9-]/gi, ""), title: l.title.slice(0, 120), body: l.body.slice(0, 6000), takeaway: String(l.takeaway || "").slice(0, 300), min: Number(l.min) || 3, author: String(l.author || "").slice(0, 60), added: String(l.added || U.today()).slice(0, 10),
            qs: (Array.isArray(l.qs) ? l.qs : []).filter(q => q && typeof q.q === "string" && Array.isArray(q.o) && q.o.length >= 2 && Number.isInteger(q.a) && q.a >= 0 && q.a < q.o.length).map(q => ({ q: q.q.slice(0, 300), o: q.o.slice(0, 4).map(x => String(x).slice(0, 200)), a: Math.min(q.a, 3), x: String(q.x || "").slice(0, 400) })) };
          FXA.state.custom.lessons = FXA.state.custom.lessons.filter(x => x.id !== clean.id);
          FXA.state.custom.lessons.push(clean); n++;
        });
        FXA.save(); FXA.buildIndex();
        UI.toast({ icon: "book", title: `${n} team lesson(s) imported` });
        renderTeam();
      } catch (e) { UI.toast({ icon: "x", title: "Could not import", text: "This is not a valid Foxway Academy pack." }); }
    });
  }
  function initials(n) { return String(n).split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0].toUpperCase()).join(""); }
  function lessonEditor(p) {
    const ed = document.getElementById("editor");
    ed.innerHTML = `<form class="editor" id="edForm">
      <h3>New team lesson</h3>
      <label>Title<input name="title" required maxlength="120" placeholder="e.g. How we quote ITAD for Belgian public sector"></label>
      <label>Lesson text<textarea name="body" rows="7" required maxlength="6000" placeholder="Write the insight. Plain text; line breaks are kept."></textarea></label>
      <label>Key takeaway<input name="takeaway" maxlength="300" placeholder="One sentence to remember"></label>
      <fieldset><legend>Quiz questions (optional, up to 3)</legend>
        ${[0, 1, 2].map(i => `<div class="q-edit"><input name="q${i}" maxlength="300" placeholder="Question ${i + 1}">
          <input name="c${i}" maxlength="200" placeholder="Correct answer"><input name="w${i}a" maxlength="200" placeholder="Wrong answer"><input name="w${i}b" maxlength="200" placeholder="Wrong answer (optional)"><input name="x${i}" maxlength="400" placeholder="Explanation (optional)"></div>`).join("")}
      </fieldset>
      <div class="row-actions"><button class="btn btn-primary" type="submit">${I("check")} Save lesson</button><button class="btn btn-ghost" type="button" id="edCancel">Cancel</button></div>
    </form>`;
    document.getElementById("edCancel").onclick = () => (ed.innerHTML = "");
    document.getElementById("edForm").onsubmit = e => {
      e.preventDefault();
      const f = new FormData(e.target), g = k => String(f.get(k) || "").trim();
      const qs = [];
      [0, 1, 2].forEach(i => { if (g("q" + i) && g("c" + i) && g("w" + i + "a")) { const o = [g("c" + i), g("w" + i + "a")].concat(g("w" + i + "b") ? [g("w" + i + "b")] : []); qs.push({ q: g("q" + i), o, a: 0, x: g("x" + i) || `Correct answer: ${g("c" + i)}` }); } });
      const l = { id: "team-" + U.uid(), title: g("title"), body: g("body"), takeaway: g("takeaway") || g("title"), min: Math.max(2, Math.round(g("body").split(/\s+/).length / 180)), author: p.name, added: U.today(), qs };
      FXA.state.custom.lessons.push(l); FXA.save(); FXA.buildIndex();
      UI.toast({ icon: "book", title: "Lesson saved", text: "Export the pack to share it with the team." });
      renderTeam();
    };
    ed.scrollIntoView({ behavior: "smooth" });
  }

  /* ═════════════ Profile & settings ═════════════ */
  function renderProfile() {
    const p = FXA.profile();
    const lv = FXA.levelFor(p.xp);
    const acc = p.stats.answered ? Math.round((p.stats.correct / p.stats.answered) * 100) : 0;
    const earned = FXA.badges.filter(b => p.badges[b.id]).length;
    view().innerHTML = `<section class="profile-hero card">
        <div class="avatar xl">${esc(initials(p.name))}</div>
        <div style="flex:1"><h1>${esc(p.name)}</h1><div class="muted">${esc(p.role)} · learning since ${esc(U.fmtDate(p.startDate))}</div>
          <div class="lv-line"><b>Level ${lv.cur.lvl} · ${esc(lv.cur.title)}</b>${UI.bar(lv.pct)}<span class="muted small">${p.xp.toLocaleString("en-GB")} / ${lv.next.xp.toLocaleString("en-GB")} XP</span></div></div>
        <div class="profile-actions"><a class="btn btn-ghost" href="#/settings">${I("sliders")} Settings</a>${p.certified ? `<a class="btn btn-primary" href="#/certificate">${I("cert")} Certificate</a>` : ""}</div>
      </section>
      <section class="grid-4">
        ${[["flame", FXA.currentStreak(p), "Current streak"], ["star", p.streak.best, "Best streak"], ["target", acc + "%", "Accuracy"], ["check", p.stats.answered, "Questions answered"], ["book", FXA.lessonsRead(p) + "/" + FXA.allLessons.length, "Lessons read"], ["bolt", p.stats.rapidBest, "Rapid Fire best"], ["handshake", Object.keys(p.scenarios).length + "/" + FXA.scenarios.length, "Deals played"], ["trophy", p.stats.bestCombo, "Best combo"]]
          .map(([ic, v, l]) => `<div class="stat card"><div class="stat-ico">${I(ic)}</div><div><div class="stat-val">${v}</div><div class="stat-lbl">${l}</div></div></div>`).join("")}
      </section>
      <section class="card"><div class="card-head">${I("medal")}<h3>Badges <span class="muted">${earned}/${FXA.badges.length}</span></h3></div>
        <div class="badge-grid">${FXA.badges.map(b => badgeTile(b, !p.badges[b.id])).join("")}</div></section>
      <section class="card"><div class="card-head">${I("trophy")}<h3>Level ladder</h3></div>
        <div class="ladder">${FXA.levels.map(l => `<div class="${p.xp >= l.xp ? "reached" : ""} ${l.lvl === lv.cur.lvl ? "cur" : ""}"><b>${l.lvl}</b><span>${esc(l.title)}</span><small>${l.xp.toLocaleString("en-GB")} XP</small></div>`).join("")}</div></section>`;
  }

  function renderSettings() {
    const p = FXA.profile();
    const others = Object.values(FXA.state.profiles).filter(x => x.id !== p.id);
    view().innerHTML = `<div class="flow-head"><a href="#/profile" class="btn btn-icon">${I("arrowL")}</a><div><div class="eyebrow">Profile</div><b>Settings</b></div></div>
      <form class="card settings" id="setForm">
        <label>Name<input name="name" value="${esc(p.name)}" maxlength="40" required></label>
        <label>Role<input name="role" value="${esc(p.role)}" maxlength="40"></label>
        <label>Daily goal<select name="goal">${[60, 100, 160, 250].map(g => `<option value="${g}" ${p.settings.goal === g ? "selected" : ""}>${g} XP per day</option>`).join("")}</select></label>
        <label>Theme<select name="theme">${[["auto", "Match system"], ["light", "Light"], ["dark", "Dark"]].map(([v, t]) => `<option value="${v}" ${p.settings.theme === v ? "selected" : ""}>${t}</option>`).join("")}</select></label>
        <label class="check"><input type="checkbox" name="sound" ${p.settings.sound ? "checked" : ""}> Sound effects</label>
        <button class="btn btn-primary" type="submit">${I("check")} Save</button>
      </form>
      <div class="card"><div class="card-head">${I("bell")}<h3>Daily reminder</h3></div>
        <p class="muted">Add a recurring daily event to your Outlook/Google calendar so you never break your streak.</p>
        <div class="row-actions"><input type="time" id="remT" value="08:45" class="inline-input"><button class="btn btn-ghost" id="remBtn">${I("calendar")} Download calendar reminder (.ics)</button></div></div>
      <div class="card"><div class="card-head">${I("download")}<h3>Backup & devices</h3></div>
        <p class="muted">Your progress lives in this browser. Export a backup to move to another device or browser.</p>
        <div class="row-actions"><button class="btn btn-ghost" id="bkExp">${I("download")} Export backup</button><button class="btn btn-ghost" id="bkImp">${I("upload")} Restore backup</button></div></div>
      <div class="card"><div class="card-head">${I("users")}<h3>Profiles on this device</h3></div>
        <p class="muted">Sharing a laptop during onboarding? Each colleague can have their own profile.</p>
        <div class="row-actions">${others.map(o => `<button class="btn btn-ghost" data-switch="${o.id}">${I("user")} Switch to ${esc(o.name)}</button>`).join("")}<button class="btn btn-ghost" id="newProf">${I("plus")} Add profile</button></div></div>
      <div class="card danger"><div class="card-head">${I("trash")}<h3>Reset</h3></div>
        <p class="muted">Permanently delete this profile's progress from this browser.</p>
        <button class="btn btn-danger" id="reset">Delete my progress</button></div>`;
    document.getElementById("setForm").onsubmit = e => {
      e.preventDefault();
      const f = new FormData(e.target);
      p.name = String(f.get("name")).trim() || p.name; p.role = String(f.get("role")).trim();
      p.settings.goal = Number(f.get("goal")); p.settings.theme = f.get("theme"); p.settings.sound = !!f.get("sound");
      FXA.save(); UI.applyTheme(); UI.toast({ icon: "check", title: "Settings saved" }); refreshChrome();
    };
    document.getElementById("remBtn").onclick = () => {
      const [h, m] = (document.getElementById("remT").value || "08:45").split(":");
      const d = U.today().replace(/-/g, "");
      const ics = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Foxway Benelux Academy//EN", "BEGIN:VEVENT", `UID:fxa-${p.id}@academy`, `DTSTAMP:${d}T000000`, `DTSTART:${d}T${h}${m}00`, "DURATION:PT10M", "RRULE:FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR", "SUMMARY:🦊 Foxway Benelux Academy — Daily Brief", "DESCRIPTION:10 minutes to keep your streak alive and learn something new about the refurbished market.", "BEGIN:VALARM", "TRIGGER:-PT0M", "ACTION:DISPLAY", "DESCRIPTION:Daily Brief", "END:VALARM", "END:VEVENT", "END:VCALENDAR"].join("\r\n");
      UI.download("foxway-academy-daily-brief.ics", ics, "text/calendar");
    };
    document.getElementById("bkExp").onclick = () => UI.download(`foxway-academy-backup-${p.name.replace(/\W+/g, "-")}-${U.today()}.json`, JSON.stringify({ type: "fxa-backup", version: 1, profile: p, team: FXA.state.team, custom: FXA.state.custom }, null, 2));
    document.getElementById("bkImp").onclick = () => UI.readFile(".json,application/json", txt => {
      try {
        const o = JSON.parse(txt);
        if (o.type !== "fxa-backup" || !o.profile || !o.profile.id || typeof o.profile.xp !== "number") throw new Error("bad");
        if (!confirm(`Restore "${o.profile.name}" (${o.profile.xp} XP)? This replaces that profile on this device.`)) return;
        FXA.state.profiles[o.profile.id] = o.profile;
        FXA.state.activeProfile = o.profile.id;
        if (Array.isArray(o.team)) FXA.state.team = o.team;
        if (o.custom && Array.isArray(o.custom.lessons)) FXA.state.custom = o.custom;
        FXA.save(); FXA.buildIndex(); UI.toast({ icon: "check", title: "Backup restored" }); go("#/home");
      } catch (e) { UI.toast({ icon: "x", title: "Could not restore", text: "Not a valid backup file." }); }
    });
    view().querySelectorAll("[data-switch]").forEach(b => (b.onclick = () => { FXA.state.activeProfile = b.dataset.switch; FXA.save(); go("#/home"); }));
    document.getElementById("newProf").onclick = () => { FXA.state.activeProfile = null; FXA.save(); go("#/home"); };
    document.getElementById("reset").onclick = () => {
      if (!confirm(`Delete all progress for ${p.name}? This cannot be undone.`)) return;
      delete FXA.state.profiles[p.id];
      FXA.state.activeProfile = Object.keys(FXA.state.profiles)[0] || null;
      FXA.save(); go("#/home");
    };
  }

  /* ═════════════ Global wiring ═════════════ */
  FXA.on("badge", b => { UI.toast({ icon: b.icon, title: `Badge unlocked: ${b.name}`, text: b.desc, kind: "gold" }); UI.sound("win"); });
  FXA.on("levelup", l => { UI.toast({ icon: "trophy", title: `Level ${l.lvl} reached!`, text: `You are now a ${l.title}.`, kind: "gold" }); UI.confetti(); });
  FXA.on("toast", t => UI.toast(t));

  document.addEventListener("keydown", e => {
    if (!S || e.target.matches("input, textarea, select")) return;
    if (S.type === "quiz" || S.type === "rapid" || S.type === "scenario") {
      const k = e.key.toLowerCase();
      let idx = -1;
      if (["1", "2", "3", "4"].includes(k)) idx = Number(k) - 1;
      if (["a", "b", "c", "d"].includes(k)) idx = k.charCodeAt(0) - 97;
      if (k === "t") idx = 0; if (k === "f") idx = 1;
      if (idx >= 0) { const b = view().querySelectorAll(".option")[idx]; if (b && !b.disabled) { e.preventDefault(); b.click(); } }
      if (k === "enter") { const n = document.getElementById("qNext") || document.getElementById("scNext") || document.getElementById("scGo"); if (n) { e.preventDefault(); n.click(); } }
    }
  });
  window.addEventListener("hashchange", route);
  window.addEventListener("storage", e => { if (e.key === "fxa.v1") location.reload(); });

  document.addEventListener("DOMContentLoaded", () => {
    if (!FXA.storageOK()) UI.toast({ icon: "x", title: "Storage unavailable", text: "Progress can't be saved in this browser mode (e.g. private window)." });
    route();
    if ("serviceWorker" in navigator && /^https?:/.test(location.protocol)) navigator.serviceWorker.register("sw.js").catch(() => {});
  });
})();
