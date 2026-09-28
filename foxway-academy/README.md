# Foxway Benelux Academy

A daily, gamified training app on the **refurbished & circular tech industry**, **Foxway**, and the **Benelux market** (Netherlands, Belgium, Luxembourg). It's built for onboarding and for continuous practice: new Benelux team members can start on day 1 and keep learning every day.

No build step, no server, no dependencies. Open `index.html` in a browser, or host the folder on any static host.

## What's inside

| | |
|---|---|
| **Curriculum** | 14 modules · 70 lessons · 213 quiz questions, in 4 tracks: Industry, Foxway, Benelux, Commercial |
| **Daily Brief** | Every day, one new insight (in spiral order through all modules), a 7-question quiz (new questions + spaced-repetition reviews + one calculation) and a Benelux deal scenario |
| **Perpetual practice** | Leitner spaced repetition (1→3→7→16→35→80 days) · 11 infinite **Numbers Lab** generators (margin VAT, recovery value, DaaS fee, CO₂, grade mix…) · a 93-term glossary with auto-generated questions and flashcards · After all lessons are read, the Daily Brief targets your weakest modules |
| **Deal Simulator** | 12 realistic NL/BE/LU customer scenarios (banks, telcos, tenders, lessors, schools…) with coaching feedback |
| **Gamification** | XP with combo multipliers, 13 levels (Newcomer → Legend of the Den), daily streaks with streak freezes, daily XP goal ring, 23 badges, Rapid Fire high scores, team leaderboard, and a certification exam with a printable certificate |
| **Team** | Share codes for a serverless leaderboard, plus **Team Knowledge** packs: write your own lessons and questions, export them as JSON and share them with future colleagues |
| **Practical** | Light/dark theme, mobile-first layout, offline support (PWA when hosted), `.ics` daily calendar reminder, backup/restore, multiple profiles per device |

## How to use it

- **On your own laptop**: double-click `foxway-academy/index.html`. Progress is saved in that browser.
- **For the team (recommended)**: host the `foxway-academy/` folder on any static host (SharePoint/intranet static site, Azure Static Web Apps, Cloudflare Pages, Netlify, GitHub Pages). Everyone uses the same URL, and each person's progress stays in their own browser. On a phone, "Add to Home Screen" installs it like an app.
- **Leaderboard**: each person copies their share code (Team tab) into a weekly team chat post; others paste codes to see a leaderboard.
- **Onboarding a new colleague**: ask them to complete the Daily Brief every workday and pass the Certification (it unlocks after all 70 lessons are read; the pass mark is 80%).

## Extending the content

All content is plain JavaScript data in `content/`:

- `modules.js`: tracks, modules and the level ladder
- `lessons-*.js`: lessons (HTML body, key takeaway, questions). Question format: `{ q, o:[...], a:indexOfCorrect, x:"explanation" }` or `{ q, tf:true|false, x }`
- `scenarios.js`: Deal Simulator scenarios
- `glossary.js`: terms (also generate flashcards and questions)
- `generators.js`: Numbers Lab calculation generators
- `facts.js`: Fox Fact of the day, plus the market calendar

Non-developers can add knowledge in the app itself: **Team → Write a lesson**, then **Export pack** and share the JSON file.

After changing content on a hosted version, bump `VERSION` in `sw.js`.

## Brand

The design uses a Foxway-inspired palette: deep navy with fox orange. All colours live as tokens at the top of `assets/styles.css` (`--brand`, `--ink`…), and the fox mark is a simple SVG in `index.html`/`assets/ui.js`/`assets/icon.svg`. To match the official Foxway brand guidelines exactly, replace those tokens and the logo files. Before sharing the app more widely inside Foxway, check with Marketing about use of the brand.

## Accuracy

Facts come from public sources as of September 2026 (see `RESEARCH.md`). Market figures change: review `facts.js` and the Foxway lessons after each Foxway quarterly report, and treat analyst market-size estimates as directional. Internal Foxway Benelux information (customers, targets, pricing rules) is not included; add it through Team Knowledge packs.
