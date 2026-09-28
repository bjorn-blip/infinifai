/* Lessons: Commercial Playbook, Trends & Outlook */
window.FXA = window.FXA || {};
FXA.lessons = (FXA.lessons || []).concat([

/* ───────────────────────── COMMERCIAL PLAYBOOK ───────────────────────── */
{ id: "sell-1", module: "sell", title: "From product seller to circular consultant", min: 4,
  body: `<p>In new consumer electronics, commercial work often revolves around <b>sell-in</b>: allocations, price protection, promotions, marketing funds and sell-out data. In circular tech, the conversation is different:</p>
<ul>
<li><b>You buy AND sell</b>: many accounts are both a source of devices (trade-in, recovery) and a buyer (refurbished, DaaS). Always ask: "what flows <i>from</i> this customer, and what flows <i>to</i> them?"</li>
<li><b>Value is shared</b>: recovery value, trade-in values and residual values are split between customer, consumer and Foxway — transparency builds trust.</li>
<li><b>Multi-stakeholder</b>: IT, security, procurement, sustainability, finance, marketing (for telco/retail) — each with different KPIs.</li>
<li><b>Longer, stickier contracts</b>: DaaS and trade-in programmes run for years; the sale is the start of an operational partnership.</li>
<li><b>Data is the product</b>: erasure certificates, CO₂ reports, grade mixes, price files and dashboards are part of what you sell.</li>
</ul>
<p>Your CE background is an asset: you understand OEM dynamics, launch cycles, retail economics and consumer behaviour — exactly what trade-in and refurbished programmes depend on.</p>`,
  takeaway: "Circular selling = two-way flows, shared value, many stakeholders, long partnerships and data as product. Your CE experience is a head start.",
  qs: [
    { q: "What question should you always ask about a circular account?", o: ["What flows from this customer, and what flows to them?", "What colour is their logo?", "How many offices do they have?", "Do they use Windows?"], a: 0, x: "Accounts are often both a supply source and a buyer." },
    { q: "Which knowledge from consumer electronics transfers directly to trade-in programmes?", o: ["OEM launch cycles and retail economics", "Nothing transfers", "Only logistics", "Only pricing of accessories"], a: 0, x: "Launch cycles and retail economics drive trade-in dynamics." },
    { q: "In circular tech, reports and certificates are part of what you sell.", tf: true, x: "Data (erasure certificates, CO₂ reports) is a core deliverable." }
  ] },

{ id: "sell-2", module: "sell", title: "Discovery questions that open circular deals", min: 5,
  body: `<p>Great discovery uncovers <b>volumes, pain and decision logic</b>. Use these per persona:</p>
<ul>
<li><b>IT manager</b>: "How many devices per category do you retire each year? Who collects them today? What happens to phones with locks or MDM enrolment?"</li>
<li><b>Security/CISO</b>: "Which erasure standard and evidence do you require? Have you ever had to prove data destruction to an auditor?"</li>
<li><b>Procurement</b>: "How do you evaluate lifecycle cost versus purchase price? Are refurbished devices allowed in your frameworks?"</li>
<li><b>Sustainability</b>: "How do you report Scope 3 for IT? Which data would make your CSRD/ESG reporting easier?"</li>
<li><b>Finance</b>: "What recovery value did you realise last refresh? Do you prefer CAPEX or OPEX?"</li>
<li><b>Telco/retail commercial</b>: "What % of device sales include a trade-in today? What causes trade-in disputes? What happens at iPhone launch week?"</li>
</ul>
<p>Always quantify: <b>number of devices × age × model mix</b> lets you estimate recovery value and the size of the opportunity before the second meeting.</p>`,
  takeaway: "Ask persona-specific questions and always quantify: devices × age × model mix = the size of the opportunity.",
  qs: [
    { q: "Which question best serves a telco commercial manager discovery?", o: ["What % of device sales include a trade-in today?", "Which erasure standard do you require?", "Do you prefer CAPEX or OPEX for laptops?", "How many printers do you have?"], a: 0, x: "Trade-in attach rate is a key telco metric." },
    { q: "What three data points let you estimate the value of a recovery opportunity early?", o: ["Number of devices, age and model mix", "Office address, logo and website", "CEO name, founding year and slogan", "Number of meeting rooms"], a: 0, x: "Volume × age × model mix drives recovery value." },
    { q: "Which persona most cares about proving data destruction to auditors?", o: ["CISO / security", "Marketing", "Facility management", "Sales"], a: 0, x: "Security officers own data-destruction evidence." }
  ] },

{ id: "sell-3", module: "sell", title: "Handling the classic objections", min: 5,
  body: `<ul>
<li><b>"Refurbished is less reliable."</b> → Explain the process (100% functional testing, battery thresholds), warranty terms and failure/return rates; offer a pilot with KPIs.</li>
<li><b>"We shred everything for security."</b> → Certified erasure (NIST 800-88/IEEE 2883) with per-device certificates; ADISA/ISO 27001; audits/site visits; shredding only for failed wipes. Show the value and CO₂ lost by shredding.</li>
<li><b>"Your trade-in prices are lower than competitor X."</b> → Compare net outcome: headline price vs. re-grading adjustments, dispute rates, payment terms and consumer experience. AI grading = fewer disputes.</li>
<li><b>"We already have a leasing partner."</b> → Position Foxway for end-of-lease recovery and remarketing, or DaaS with residual value built in; ask what happens with devices at end of term today.</li>
<li><b>"Refurbished isn't allowed in our tenders."</b> → Offer to help with performance-based specifications (TCO Certified, warranty, performance) that allow refurbished.</li>
<li><b>"Sustainability claims are marketing."</b> → Methodology, baselines, audited reporting; never overclaim.</li>
</ul>
<p>Structure: <b>acknowledge → ask a clarifying question → answer with evidence → confirm</b>.</p>`,
  takeaway: "Acknowledge → clarify → evidence → confirm. Counter with process, certificates, net outcomes, TCO and pilots.",
  qs: [
    { q: "A telco says a competitor's trade-in headline prices are higher. Best response?", o: ["Compare the net outcome incl. re-grading adjustments, disputes and CX", "Immediately match the price", "Say the competitor is lying", "End the meeting"], a: 0, x: "Headline price ≠ net value; disputes and adjustments matter." },
    { q: "What is the recommended objection-handling structure?", o: ["Acknowledge → clarify → evidence → confirm", "Deny → discount → close", "Ignore → repeat pitch", "Agree → leave"], a: 0, x: "It keeps the conversation factual and collaborative." },
    { q: "Best response to 'we shred everything for security'?", o: ["Certified erasure with per-device certificates, audits, and shredding only as fallback", "Agree and move on", "Tell them shredding is illegal", "Offer a lower price"], a: 0, x: "Evidence-based security enables reuse." }
  ] },

{ id: "sell-4", module: "sell", title: "Building a business case", min: 5,
  body: `<p>A strong circular business case has four blocks:</p>
<ol>
<li><b>Financial</b>: recovery value (volume × expected grade mix × price per grade − services), TCO comparison, CAPEX→OPEX effects, cash flow timing.</li>
<li><b>Risk & compliance</b>: data security evidence, GDPR, WEEE compliance, chain of custody, auditability.</li>
<li><b>Sustainability</b>: CO₂e avoided (method + baseline), reuse vs. recycling rate, contribution to Scope 3 and ESRS E5 reporting.</li>
<li><b>Operational</b>: less internal workload, fewer suppliers, platform visibility, SLAs.</li>
</ol>
<p><b>Example</b>: 2,000 laptops (4 years old) × 70% reusable × average €90 net recovery = <b>€126,000</b> recovery value, plus ≈2,000 × 0.7 × ~250 kg ≈ <b>350 tonnes CO₂e</b> avoided (using a benchmark), plus certified erasure for 100% of devices.</p>
<p>Make the CFO, CISO and sustainability manager each find <i>their</i> number on the first page.</p>`,
  takeaway: "Business case = financial + risk/compliance + sustainability + operational. Give each stakeholder their number on page one.",
  qs: [
    { q: "1,000 laptops, 80% reusable, €100 average net recovery. Recovery value?", o: ["€80,000", "€100,000", "€8,000", "€800,000"], a: 0, x: "1,000 × 0.8 × €100 = €80,000." },
    { q: "Which block addresses GDPR and chain of custody?", o: ["Risk & compliance", "Financial", "Sustainability", "Marketing"], a: 0, x: "Data security and compliance sit in the risk block." },
    { q: "Using 250 kg CO₂e per reused laptop, what is avoided for 400 reused laptops?", o: ["100 tonnes", "10 tonnes", "1,000 tonnes", "1 tonne"], a: 0, x: "400 × 250 kg = 100,000 kg = 100 t." }
  ] },

{ id: "sell-5", module: "sell", title: "Account growth: land, expand, embed", min: 4,
  body: `<ul>
<li><b>Land</b> with a focused, low-risk entry: a one-off asset recovery, a trade-in pilot in a few stores, or a refurbished assortment test.</li>
<li><b>Prove</b> with KPIs agreed upfront: recovery value vs. estimate, dispute rate, trade-in attach rate, customer NPS, CO₂ report delivered.</li>
<li><b>Expand</b> across categories (phones → laptops → monitors/enterprise), business areas (Recommerce → DaaS) and countries (Benelux entity → European group).</li>
<li><b>Embed</b> via platforms (Foxway Digital Platform, Circular Platform integrations), multi-year contracts and joint marketing/sustainability communication.</li>
</ul>
<p>Quarterly business reviews (QBRs) with data are the engine of expansion. Bring market insight — launch calendar, price trends, regulation — so you are seen as a <b>consultant</b>, not a vendor.</p>`,
  takeaway: "Land small, prove with agreed KPIs, expand across categories/areas/countries, embed through platforms and multi-year contracts.",
  qs: [
    { q: "Which is a good 'land' offer for a new retailer account?", o: ["A trade-in pilot in a limited number of stores", "A 5-year exclusive contract on day one", "Buying the retailer", "A free iPhone for the CEO"], a: 0, x: "Focused, low-risk pilots with KPIs are ideal." },
    { q: "Which KPI best proves a telco trade-in pilot?", o: ["Trade-in attach rate and dispute rate", "Number of emails sent", "Office visits", "Social media likes"], a: 0, x: "Attach rate and disputes show commercial and CX success." },
    { q: "Bringing market insight into QBRs helps position you as a consultant rather than a vendor.", tf: true, x: "Insight builds trust and opens expansion conversations." }
  ] },

/* ───────────────────────── TRENDS & OUTLOOK ───────────────────────── */
{ id: "trends-1", module: "trends", title: "The 2026 memory-price shock", min: 4,
  body: `<p>AI data-centre demand has pulled memory chip capacity (DRAM, HBM, NAND) away from consumer devices. The result in 2026:</p>
<ul>
<li>Gartner estimated a <b>~130% surge in memory prices by end-2026</b>, pushing <b>PC prices up ~17%</b> and <b>smartphone prices up ~13%</b> versus 2025.</li>
<li>Forecast shipments fell: PCs <b>−10.4%</b> and smartphones <b>−8.4%</b> in 2026 (Gartner).</li>
<li>Brands raised prices and cut specs; budget devices were hit hardest (memory is a larger share of their bill of materials).</li>
</ul>
<p><b>Why it matters for refurbished</b>: when new devices get more expensive, <b>refurbished becomes relatively more attractive</b> and people keep devices longer. That lifts demand and residual values — but also <b>reduces supply</b> (fewer trade-ins as people delay upgrades). Buying power and sourcing access matter even more.</p>`,
  takeaway: "2026: AI-driven memory shortage raised new PC (~+17%) and phone (~+13%) prices → stronger refurb demand and RVs, but tighter supply.",
  qs: [
    { q: "What caused the 2026 memory price surge?", o: ["AI data-centre demand absorbing memory capacity", "A ban on smartphones", "Lower demand for AI", "New VAT rules"], a: 0, x: "AI servers consume huge amounts of DRAM/HBM." },
    { q: "What is a likely effect on the refurbished market?", o: ["Higher demand and residual values, but tighter supply", "Lower demand for refurbished", "No effect", "Refurbished becomes illegal"], a: 0, x: "Pricier new devices push demand to refurbished while slowing upgrades." },
    { q: "According to Gartner, by roughly how much would PC prices rise in 2026 vs 2025?", o: ["~17%", "~1.7%", "~70%", "They'd fall 17%"], a: 0, x: "PC prices +17%, smartphones +13%." }
  ] },

{ id: "trends-2", module: "trends", title: "Windows 10 end of support: the refresh wave", min: 4,
  body: `<p>Microsoft ended support for <b>Windows 10 on 14 October 2025</b>. Windows 11 requires newer hardware (TPM 2.0, supported CPUs — roughly Intel 8th gen / AMD Ryzen 2000 and newer).</p>
<ul>
<li>This triggered the <b>largest synchronised business hardware refresh in a decade</b>.</li>
<li><b>Supply</b>: a wave of older, non-Windows-11-capable laptops entered the secondary market — their value dropped (early 2026 pricing for Windows-10-only hardware softened as supply caught up).</li>
<li><b>Demand</b>: Windows-11-capable refurbished business laptops became attractive as a cheaper, lower-carbon path to a supported estate.</li>
<li>Phased disposal captured better recovery values than one big disposal event.</li>
</ul>
<p>Lesson: <b>OS support is a cliff edge for value</b>. Track OS lifecycle dates (Windows, macOS, iOS, Android update commitments) to time recovery and refresh advice.</p>`,
  takeaway: "Win10 EoS (14 Oct 2025): refresh wave, flood of non-Win11 laptops (values down) and strong demand for Win11-capable refurbished (values up).",
  qs: [
    { q: "When did Windows 10 support end?", o: ["14 October 2025", "1 January 2024", "31 December 2026", "It hasn't ended"], a: 0, x: "Windows 10 reached end of support on 14 October 2025." },
    { q: "What happened to the value of non-Windows-11-capable laptops?", o: ["It dropped as supply increased", "It doubled", "Unchanged", "They became collector items"], a: 0, x: "Supply surged while demand fell." },
    { q: "Which hardware feature is required for Windows 11?", o: ["TPM 2.0", "Optical drive", "VGA port", "5G modem"], a: 0, x: "TPM 2.0 and a supported CPU are required." }
  ] },

{ id: "trends-3", module: "trends", title: "Digital Product Passports & data", min: 4,
  body: `<p>The EU <b>Ecodesign for Sustainable Products Regulation (ESPR)</b> introduces <b>Digital Product Passports (DPP)</b>: product-level data on materials, repairability, spare parts and end-of-life, accessible via a data carrier (e.g. QR code). Electronics are among the priority product groups, with requirements rolling out over the coming years; the <b>EU Battery Regulation</b> introduces a battery passport for certain batteries from 2027.</p>
<ul>
<li>For refurbishers, passports could make <b>grading, parts history and provenance</b> more transparent — and help prove refurbishment quality.</li>
<li>Data becomes a competitive asset: device history, grading results and CO₂ data follow the device across lives.</li>
<li>Foxway's view: <b>end-to-end data intelligence</b> unlocks the circular future — platforms that connect data across the lifecycle.</li>
</ul>`,
  takeaway: "ESPR Digital Product Passports and battery passports will make device data follow the device — an advantage for data-driven refurbishers.",
  qs: [
    { q: "What does DPP stand for in the EU ESPR context?", o: ["Digital Product Passport", "Device Protection Plan", "Direct Payment Process", "Data Privacy Policy"], a: 0, x: "Digital Product Passport." },
    { q: "Which EU regulation introduces a battery passport (from 2027 for certain batteries)?", o: ["EU Battery Regulation", "GDPR", "Digital Markets Act", "WEEE Directive"], a: 0, x: "The Battery Regulation (EU) 2023/1542." },
    { q: "How can product passports benefit refurbishers?", o: ["Transparent history, parts and provenance to prove quality", "They ban refurbishment", "They remove warranty", "They increase VAT"], a: 0, x: "Traceable data supports trust and value." }
  ] },

{ id: "trends-4", module: "trends", title: "AI and automation in recommerce", min: 3,
  body: `<ul>
<li><b>AI grading</b>: camera-based cosmetic grading + automated diagnostics → consistent grades, fewer disputes, higher consumer trade-in values (Foxway pilots: up to +17%).</li>
<li><b>Dynamic pricing</b>: models predict residual values per model/grade/channel, updating price files as markets move.</li>
<li><b>Automation</b>: robotics in testing, erasure and packaging (Swappie reports up to 20,000 devices/week via automation).</li>
<li><b>Remote/self-service trade-in</b>: app-based diagnostics let consumers get firm quotes at home.</li>
<li><b>Fraud detection</b>: identity, device swaps, locked devices.</li>
</ul>
<p>Commercial implication: the market is moving from "who has the cheapest labour" to <b>"who has the best data and platforms"</b> — Foxway invests accordingly (e.g. €33M in Tartu tech and operations; Circular and Digital Platforms).</p>`,
  takeaway: "AI grading, dynamic pricing, robotics and self-service trade-in shift competition to data and platforms.",
  qs: [
    { q: "Which technology allows consumers to get a firm trade-in quote at home?", o: ["App-based self-diagnostics", "Fax", "Printed catalogues", "Manual in-store inspection only"], a: 0, x: "App diagnostics enable remote quotes." },
    { q: "What does dynamic pricing in recommerce do?", o: ["Predicts and updates residual values per model/grade/channel", "Fixes prices for 5 years", "Removes grading", "Sets VAT"], a: 0, x: "It keeps price files aligned with market moves." },
    { q: "Competitive advantage in recommerce is shifting from cheap labour to data and platforms.", tf: true, x: "Automation and AI reward data-driven players." }
  ] },

{ id: "trends-5", module: "trends", title: "Where the market is heading", min: 4,
  body: `<ul>
<li><b>Maturing & consolidating</b>: marketplaces (Back Market, Refurbed) and specialists (Swappie) reached profitability in 2025 — the "growth at all cost" era is over; scale and efficiency win. Expect more M&A (Foxway itself is a consolidator).</li>
<li><b>Global smartphone refurb growth slowed</b> (Counterpoint: +3% YoY in H1 2025, with Europe and the US flat), while specific segments (premium iPhone, B2B laptops) and players grow fast.</li>
<li><b>Regulation tailwinds</b>: Ecodesign, Right to Repair, CSRD/ESRS E5, green-claims rules, circular public procurement.</li>
<li><b>Price tailwinds</b>: pricier new devices (memory shock) make refurbished more attractive.</li>
<li><b>From products to services</b>: DaaS, rental, trade-in platforms and lifecycle data.</li>
<li><b>Benelux headroom</b>: Belgium's low penetration (~4% of consumers with a refurbished phone) and Digi-driven operator pressure; Dutch government circular procurement; Luxembourg's high-security B2B.</li>
</ul>
<p>Analyst market-size estimates vary widely (e.g. one estimate puts Europe's refurbished & used phone market at ~USD 24bn in 2025, growing ~11.5% CAGR to 2032). Treat such figures as directional and always cite the source.</p>`,
  takeaway: "Consolidation, profitability focus, regulation and price tailwinds, service models — and real Benelux headroom. Treat market-size estimates as directional.",
  qs: [
    { q: "According to Counterpoint, how did global refurbished smartphone sales develop in H1 2025?", o: ["+3% YoY, with Europe and the US flat", "+30% YoY", "−20% YoY", "+100% YoY"], a: 0, x: "Growth slowed to ~3%, with Europe and the US flat." },
    { q: "How should you treat analyst market-size figures?", o: ["As directional, always citing the source", "As exact facts", "Ignore all of them", "Use the highest one"], a: 0, x: "Estimates vary widely between research firms." },
    { q: "Which is a Benelux-specific growth driver?", o: ["Low refurbished penetration in Belgium and operator price pressure from Digi", "Belgium banning new phones", "Luxembourg's 30% VAT", "Dutch ban on SIM-only"], a: 0, x: "Belgian headroom and telco pressure create opportunity." }
  ] }
]);
