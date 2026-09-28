/* Deal Simulator scenarios — realistic Benelux commercial situations.
 * Each: steps[] with choices; each choice has score (0–10) and feedback.
 */
window.FXA = window.FXA || {};
FXA.scenarios = [
{ id: "sc-bank", title: "The bank that shreds everything", module: "b2b", region: "NL",
  setup: "A large Dutch bank will retire 6,000 laptops and 3,500 iPhones next year. Their policy: every data-bearing device is physically shredded. Their sustainability team, however, has a Scope 3 reduction target.",
  steps: [
    { prompt: "Who do you ask to meet first?", choices: [
      { t: "Only procurement — they own the budget.", s: 4, f: "Procurement matters, but they can't change the shredding policy. The policy owner is security." },
      { t: "The CISO/security team together with the sustainability lead.", s: 10, f: "Right: security owns the policy, sustainability owns the motivation. Aligning both unlocks reuse." },
      { t: "The CEO directly by cold email.", s: 2, f: "Unlikely to work and risks bypassing the stakeholders you need." } ] },
    { prompt: "The CISO says: 'Software wipes can be recovered.' Your best answer?", choices: [
      { t: "Show NIST 800-88 / IEEE 2883 certified erasure with per-device certificates, ADISA/ISO 27001, and offer an audit of the process.", s: 10, f: "Evidence plus an invitation to audit — exactly what security professionals need." },
      { t: "'Nobody has ever complained.'", s: 1, f: "Anecdotes don't convince security officers." },
      { t: "Offer to shred everything but at a lower price.", s: 3, f: "That keeps the deal but destroys the value and CO₂ benefit — a missed opportunity." } ] },
    { prompt: "How do you structure the proposal?", choices: [
      { t: "Pilot: 500 laptops with certified erasure + shredding only for failed wipes; report recovery value and CO₂ avoided; then roll out.", s: 10, f: "Low risk, measurable, expandable. Classic land-and-expand." },
      { t: "Full 9,500-device contract, take it or leave it.", s: 4, f: "Too big a leap for a policy change; a pilot lowers perceived risk." },
      { t: "Send a price list and wait.", s: 2, f: "No business case, no stakeholder alignment." } ] }
  ] },

{ id: "sc-telco-be", title: "A Belgian operator under price pressure", module: "mobile", region: "BE",
  setup: "Since Digi's launch, a Belgian mobile operator has seen service revenues fall. Their device team wants to boost handset sales and loyalty. Their current trade-in partner causes many complaints about re-grading.",
  steps: [
    { prompt: "What is the core pain to build your pitch around?", choices: [
      { t: "Re-grading disputes that damage customer experience and trade-in uptake.", s: 10, f: "That's their stated pain, and Foxway's AI grading addresses it directly." },
      { t: "Their logo colours.", s: 0, f: "Irrelevant." },
      { t: "That they should stop selling phones.", s: 1, f: "Contrary to their goal." } ] },
    { prompt: "They ask for proof. What do you share?", choices: [
      { t: "Foxway's AI grading pilots (DE, FI, PL, HR): up to 17% higher residual values and objective upfront grading.", s: 10, f: "Concrete, relevant European proof." },
      { t: "A general brochure about circularity.", s: 4, f: "Nice, but not proof of solving their problem." },
      { t: "Promise 50% higher trade-in prices.", s: 0, f: "Overpromising destroys credibility." } ] },
    { prompt: "They need NL and FR customer journeys in stores and online. You say:", choices: [
      { t: "We'll localise all consumer-facing flows in Dutch and French (and German if needed) and integrate with your POS and web.", s: 10, f: "Belgium requires bilingual consumer journeys — showing you know this builds trust." },
      { t: "English is fine for everyone.", s: 1, f: "Not acceptable for Belgian consumers — and potentially non-compliant." },
      { t: "Only Dutch, because Flanders is bigger.", s: 3, f: "You'd exclude Wallonia and Brussels." } ] }
  ] },

{ id: "sc-launch", title: "iPhone launch week price file", module: "pricing", region: "Benelux",
  setup: "It's early September. A Dutch retailer partner asks you to keep last month's trade-in price file unchanged through October 'for stability'.",
  steps: [
    { prompt: "What's the risk of accepting?", choices: [
      { t: "Values typically drop around the launch; fixed prices would mean overpaying for traded-in devices.", s: 10, f: "Correct — iPhone values commonly drop ~9% Sep→Oct." },
      { t: "No risk; prices always rise after launches.", s: 0, f: "The opposite usually happens for previous models." },
      { t: "The risk is only for Android.", s: 2, f: "iPhones are affected too." } ] },
    { prompt: "What do you propose?", choices: [
      { t: "Weekly price-file updates during launch season, with a clear validity window per quote, plus a promotion budget if they want 'boosted' values.", s: 10, f: "Balances stability for consumers with market reality; boosted values become a conscious marketing investment." },
      { t: "Refuse all trade-ins in September.", s: 1, f: "Kills their busiest upgrade period." },
      { t: "Accept and hope for the best.", s: 2, f: "You'd carry an unpriced risk." } ] }
  ] },

{ id: "sc-tender", title: "A municipality tender that says 'new only'", module: "b2b", region: "NL",
  setup: "A mid-sized Dutch municipality is preparing a laptop tender. The draft specification says 'new devices only' but its policy document mentions circular procurement goals.",
  steps: [
    { prompt: "When should you engage?", choices: [
      { t: "In the market-consultation phase, before the tender is published.", s: 10, f: "Once published, the specs are locked; market consultation is where you can help shape them." },
      { t: "After award, to complain.", s: 1, f: "Too late and damages the relationship." },
      { t: "Never; public sector is too slow.", s: 0, f: "Public sector is a large, stable circular demand driver." } ] },
    { prompt: "What do you suggest to the buyer?", choices: [
      { t: "Performance-based specs (performance, warranty, TCO Certified, erasure, CO₂ reporting) that allow refurbished, referencing PIANOo MVI criteria.", s: 10, f: "Exactly — enables circular options while protecting quality." },
      { t: "Write 'refurbished from Foxway only'.", s: 0, f: "Not allowed in public procurement; specs must be non-discriminatory." },
      { t: "Remove all quality requirements.", s: 2, f: "That would lower quality and trust." } ] }
  ] },

{ id: "sc-lux", title: "Luxembourg fund administrator", module: "be", region: "LU",
  setup: "A Luxembourg fund administrator (1,200 staff) wants to move from buying laptops to a monthly model and needs strict data security and ESG reporting for its investors.",
  steps: [
    { prompt: "Which Foxway offer fits best?", choices: [
      { t: "Device-as-a-Service (Circular Workspace Solutions) with certified erasure at end of term and ESG reporting.", s: 10, f: "DaaS covers the monthly model, security and reporting in one." },
      { t: "Consumer trade-in platform.", s: 2, f: "Wrong segment." },
      { t: "A one-off sale of refurbished phones.", s: 3, f: "Doesn't address the monthly model or security." } ] },
    { prompt: "In which language do you prepare the proposal?", choices: [
      { t: "Ask their preference — English is common in Luxembourg finance, French in administration.", s: 10, f: "Luxembourg is multilingual; asking shows respect and avoids assumptions." },
      { t: "Luxembourgish only.", s: 3, f: "Rarely the business language in finance." },
      { t: "Swedish, since Foxway is Swedish.", s: 0, f: "Customer-centric, please!" } ] },
    { prompt: "They ask why the monthly price is competitive. You explain:", choices: [
      { t: "Foxway prices in the expected residual value and has the channels to realise it at end of term.", s: 10, f: "That's the DaaS economics in one sentence." },
      { t: "Because Luxembourg has 17% VAT.", s: 3, f: "VAT matters, but it's not the core driver." },
      { t: "Because devices are free.", s: 0, f: "Nothing is free." } ] }
  ] },

{ id: "sc-margin", title: "The cheap offer that isn't", module: "pricing", region: "BE",
  setup: "A Belgian IT reseller compares two offers for 300 refurbished laptops: yours with normal 21% VAT, and a competitor's with margin-scheme invoicing — 8% cheaper at first sight.",
  steps: [
    { prompt: "What do you point out?", choices: [
      { t: "Under the margin scheme, VAT is hidden and not deductible for them — for a VAT-registered reseller, your net cost may be lower.", s: 10, f: "Exactly: they can reclaim your 21% VAT, not the margin VAT." },
      { t: "That margin VAT is illegal.", s: 0, f: "It's legal for second-hand goods bought without deductible VAT." },
      { t: "Nothing; lower the price 8%.", s: 3, f: "You may be discounting unnecessarily." } ] },
    { prompt: "They'll resell to their own business customers. What else helps?", choices: [
      { t: "Offer consistent grading, a clear warranty and erasure certificates they can pass on.", s: 10, f: "Helps them sell on — value beyond price." },
      { t: "Offer no warranty for a lower price.", s: 2, f: "Makes their resale harder." } ] }
  ] },

{ id: "sc-retailer", title: "Refurbished assortment for an electronics retailer", module: "comp", region: "NL",
  setup: "A Benelux electronics retailer wants to add refurbished smartphones online and in-store. The Consumentenbond report on misleading discounts worries their legal team.",
  steps: [
    { prompt: "How do you address the reputational concern?", choices: [
      { t: "Propose transparent pricing vs. current new price, clear grade photos, battery-health info and 24-month warranty.", s: 10, f: "Transparency is the antidote to the trust problem." },
      { t: "Show strike-through launch prices for bigger 'discounts'.", s: 0, f: "Exactly what the Consumentenbond criticised." },
      { t: "Avoid mentioning grades.", s: 2, f: "Opacity erodes trust." } ] },
    { prompt: "Which start makes sense?", choices: [
      { t: "A curated range of top-selling iPhone and Samsung models in A/A+ grades, with a trade-in pilot to feed supply.", s: 10, f: "Focused, high-demand assortment + own supply loop." },
      { t: "Every model ever made, in all grades.", s: 2, f: "Complex, low-turn assortment." },
      { t: "Only grade C to be cheapest.", s: 2, f: "Risky for a retailer brand." } ] }
  ] },

{ id: "sc-lease", title: "Leasing company end-of-term returns", module: "chain", region: "Benelux",
  setup: "A leasing company active in NL and BE will get back 12,000 laptops over the next 18 months. They currently sell them in one annual auction.",
  steps: [
    { prompt: "What's the most valuable insight you can bring?", choices: [
      { t: "Phased processing and channel allocation typically beat one big disposal event on recovery value.", s: 10, f: "Phasing avoids flooding the market and matches each unit to its best channel." },
      { t: "Auctions are always best.", s: 2, f: "They can be efficient but often leave value on the table." },
      { t: "They should keep the laptops.", s: 0, f: "Not their business model." } ] },
    { prompt: "Which Windows-related question matters most for valuing the fleet?", choices: [
      { t: "What share is Windows-11-capable (CPU generation, TPM 2.0)?", s: 10, f: "Win11 capability is a value cliff since Windows 10's end of support." },
      { t: "Which wallpapers were used?", s: 0, f: "Not relevant." },
      { t: "Do they have Office installed?", s: 3, f: "Licences are usually removed; hardware capability matters more." } ] }
  ] },

{ id: "sc-school", title: "School board back-to-school rush", module: "b2b", region: "BE",
  setup: "A Flemish school group needs 1,500 laptops for pupils by September, but budget is 30% below new-device quotes. It is April.",
  steps: [
    { prompt: "What do you propose?", choices: [
      { t: "Refurbished business laptops (Win11-capable), reimaged with their education image, with warranty and a spare-pool — delivered in August.", s: 10, f: "Meets budget, performance and timing; spare pool reduces downtime." },
      { t: "Wait until September to see prices.", s: 1, f: "Back-to-school demand peaks — don't wait." },
      { t: "Cheapest non-Win11 laptops available.", s: 2, f: "Unsupported OS = security issue." } ] },
    { prompt: "They ask about sustainability messaging for parents. You advise:", choices: [
      { t: "Specific, sourced CO₂e avoided per laptop, no 'zero impact' claims.", s: 10, f: "Credible and compliant with green-claims rules." },
      { t: "'100% climate neutral laptops'.", s: 0, f: "Overclaim — not credible, and increasingly banned." } ] }
  ] },

{ id: "sc-reseller-sourcing", title: "A reseller who is also a supplier", module: "sell", region: "NL",
  setup: "A Dutch phone repair chain with 25 shops buys refurbished stock from you. They also receive trade-ins from their own customers but don't know what to do with them.",
  steps: [
    { prompt: "What's the opportunity?", choices: [
      { t: "Two-way flow: sell them refurbished stock and buy their trade-ins/collected devices — possibly via Foxway's platform.", s: 10, f: "Accounts can be both source and buyer — capture both flows." },
      { t: "Only upsell accessories.", s: 3, f: "Misses the supply opportunity." },
      { t: "Tell them to recycle the trade-ins.", s: 2, f: "Reuse first — those devices have value." } ] },
    { prompt: "How do you price their trade-in stock fairly?", choices: [
      { t: "A transparent price file per model/grade, with grading rules and a verification process explained upfront.", s: 10, f: "Clarity prevents disputes and builds a long-term relationship." },
      { t: "One average price per device regardless of model.", s: 2, f: "Unfair to both sides." } ] }
  ] },

{ id: "sc-csrd", title: "The sustainability manager's audit", module: "green", region: "NL",
  setup: "A Dutch listed company's sustainability manager needs auditable data on IT devices for its sustainability report. Their previous ITAD supplier provided only a PDF with a single CO₂ figure.",
  steps: [
    { prompt: "What should your reporting include?", choices: [
      { t: "Per-device data: erasure certificates, reuse vs. recycling outcome, CO₂e avoided with method and baseline.", s: 10, f: "Auditable, granular, method-based — exactly what auditors want." },
      { t: "A bigger, rounder CO₂ number.", s: 0, f: "Unsupported numbers won't survive an audit." },
      { t: "Just the invoice.", s: 1, f: "No sustainability value." } ] },
    { prompt: "Which reporting framework topic covers resource use & circularity?", choices: [
      { t: "ESRS E5", s: 10, f: "Correct." },
      { t: "ESRS S2", s: 2, f: "S2 covers workers in the value chain." },
      { t: "GDPR Article 5", s: 0, f: "That's data protection." } ] }
  ] },

{ id: "sc-mdm", title: "The locked iPhone fleet", module: "ops", region: "BE",
  setup: "A Belgian logistics company sends you 800 iPhones for recovery. At intake, 30% are still enrolled in the company's MDM/Apple Business Manager and several have Find My on.",
  steps: [
    { prompt: "What's the right first action?", choices: [
      { t: "Contact the customer with the IMEI list and ask them to release devices from ABM/MDM and remove Find My, as agreed in the contract.", s: 10, f: "Releasing is the customer's action; a clear list speeds it up." },
      { t: "Sell them as grade A anyway.", s: 0, f: "They would re-lock to the former owner — a serious quality failure." },
      { t: "Shred them all.", s: 2, f: "Destroys value unnecessarily." } ] },
    { prompt: "How do you prevent this next time?", choices: [
      { t: "Add a pre-collection checklist and contract clause on lock removal, with parts-value pricing for devices that stay locked.", s: 10, f: "Sets expectations and avoids disputes." },
      { t: "Stop working with Apple devices.", s: 0, f: "iPhones are the most valuable category." } ] }
  ] }
];
