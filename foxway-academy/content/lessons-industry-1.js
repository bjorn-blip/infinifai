/* Lessons: Refurb Fundamentals, Value Chain, Pricing, Operations
 * Question format: { q, o:[options], a:index, x:"explanation" } or { q, tf:true|false, x }
 */
window.FXA = window.FXA || {};
FXA.lessons = (FXA.lessons || []).concat([

/* ───────────────────────── REFURB FUNDAMENTALS ───────────────────────── */
{ id: "basics-1", module: "basics", title: "New vs. refurbished: a different game", min: 4,
  body: `<p>In new consumer electronics, supply is <b>planned</b>: an OEM decides how many units to build, sets a price and pushes volume through distributors and retailers. In refurbished, supply is <b>harvested</b>. Nobody can "order" 20,000 more iPhone 13s in grade A — you can only buy what the market releases through trade-ins, lease returns, corporate refreshes and insurance swaps.</p>
<ul>
<li><b>Supply-constrained, not demand-constrained.</b> Demand for good-quality refurbished devices generally exceeds supply of the right models in the right grades. Winning is often about <i>access to supply</i>.</li>
<li><b>Every unit is unique.</b> Condition, battery health, storage, colour and lock status vary per device. You sell SKUs × grades, not SKUs.</li>
<li><b>Price is set by the market, not a price list.</b> Residual values move weekly with launches, promotions and currency.</li>
<li><b>Two-sided business.</b> You must be excellent at buying (sourcing, grading, pricing the buy-back) and at selling (channels, warranty, brand).</li>
</ul>
<p>Coming from new devices, the biggest mental shift is that <b>margin is made (or lost) at the moment of purchase</b>. Buy a device at the wrong price or wrongly graded and no sales effort can fix it.</p>`,
  takeaway: "Refurb is a supply-led, two-sided, unit-by-unit business: margin is largely decided when you buy.",
  qs: [
    { q: "What is the most fundamental difference between the new-device and refurbished-device supply model?", o: ["Refurbished supply is harvested from the installed base rather than produced to plan", "Refurbished devices are always cheaper to ship", "Refurbished products have no warranty", "Refurbished supply is controlled by the OEMs"], a: 0, x: "Refurbishers can only buy what the market releases (trade-ins, lease returns, refreshes). They cannot order extra production." },
    { q: "In refurbished, margin is mainly determined at the moment of…", o: ["Purchase / buy-back", "Marketing", "Invoicing", "Shipping"], a: 0, x: "Buying at the right price with correct grading determines most of the margin; mistakes there are hard to recover." },
    { q: "Refurbished markets are typically demand-constrained: there is plenty of good-quality supply but too few buyers.", tf: false, x: "It is usually the opposite: quality supply of the right models and grades is the bottleneck." }
  ] },

{ id: "basics-2", module: "basics", title: "Refurbished, used, renewed, remanufactured", min: 3,
  body: `<p>Words matter — to customers, to regulators and in tenders.</p>
<ul>
<li><b>Used / second-hand</b>: sold as-is, possibly only checked. No professional restoration implied.</li>
<li><b>Refurbished</b>: professionally tested, data-wiped, repaired where needed, cleaned, graded and resold <i>with a warranty</i>. There is no single legal EU definition — which is why grading transparency matters.</li>
<li><b>Remanufactured</b>: restored to "as-new" specification, often with replacement of wear parts and a new-equivalent warranty (common in laptops and B2B).</li>
<li><b>Certified pre-owned / OEM refurbished</b>: refurbished under a brand's own programme (e.g. Apple Certified Refurbished, Samsung's programmes).</li>
<li><b>Open box / B-stock / "tweedekans"</b>: consumer returns that are barely used. Coolblue's <i>Tweedekans</i> label in NL/BE is a good example — different from refurbished.</li>
<li><b>Recommerce</b>: the whole business of buying back and reselling used goods.</li>
</ul>
<p>In Benelux conversations you will hear <i>refurbished</i> used as an English loanword in both Dutch and French. Dutch consumers also say <i>tweedehands</i> (second-hand); Belgians in the south say <i>reconditionné</i>.</p>`,
  takeaway: "Refurbished = professionally tested, wiped, restored, graded and warrantied. Used ≠ refurbished, and return/B-stock ≠ refurbished.",
  qs: [
    { q: "Which element distinguishes 'refurbished' from simply 'used'?", o: ["Professional testing, data wiping, restoration, grading and a warranty", "The device is less than 1 year old", "It was bought from a telecom operator", "It is sold on a marketplace"], a: 0, x: "Refurbished implies a professional process plus warranty; used implies as-is." },
    { q: "Coolblue 'Tweedekans' products are mostly…", o: ["Barely used customer returns", "Remanufactured laptops", "Ex-lease corporate devices", "Devices without warranty"], a: 0, x: "Tweedekans items are returns/open-box, sold with warranty — a different category than refurbished." },
    { q: "There is a single, binding EU legal definition of 'refurbished' for smartphones.", tf: false, x: "There is no single binding definition, which makes transparent grading and warranty terms essential." }
  ] },

{ id: "basics-3", module: "basics", title: "Grades: the language of condition", min: 4,
  body: `<p>Grades translate physical condition into price. Every company has its own scale, but the market converges on something like:</p>
<ul>
<li><b>A+ / Premium / "as new"</b>: no visible wear, top battery (often ≥90%).</li>
<li><b>A / Excellent</b>: light micro-scratches only, no marks on the display when on. Wholesale norm for battery health ~85%.</li>
<li><b>B / Good</b>: visible but light scratches or scuffs; battery floor often ~80% (some wholesale B stock lower).</li>
<li><b>C / Fair</b>: heavy wear, dents or marks; often bought by refurbishers to replace housings/screens and re-grade upwards.</li>
<li><b>D / Faulty / Parts</b>: functional defects; for repair or harvesting.</li>
</ul>
<p>Two principles to remember:</p>
<ol>
<li><b>Functional first, cosmetic second.</b> A properly refurbished device must be 100% functional in any grade; the grade describes cosmetics (and battery).</li>
<li><b>Grades are only as good as their consistency.</b> A buyer who receives "A" that looks like "B" will re-grade and claim. Consistent, documented grading — increasingly done with cameras and AI — is a commercial asset.</li>
</ol>
<p>The ~80% battery-health threshold matters: Apple itself flags batteries below 80% maximum capacity as degraded.</p>`,
  takeaway: "Grades describe cosmetics and battery; function must be 100%. Consistency of grading is worth money.",
  qs: [
    { q: "Which battery-health level is a common minimum for sellable refurbished smartphones?", o: ["80%", "50%", "65%", "99%"], a: 0, x: "Around 80% is the common floor; premium grades often require 85–90%+." },
    { q: "Grade C stock is often bought by refurbishers in order to…", o: ["Replace housings/screens and re-grade the device upward", "Sell it directly as 'as new'", "Destroy it for certification", "Return it to the OEM"], a: 0, x: "C-grade is the input for cosmetic restoration, creating value by upgrading the grade." },
    { q: "In a properly refurbished device, what does the grade primarily describe?", o: ["Cosmetic condition (and battery)", "Functional defects", "Country of origin", "Software version"], a: 0, x: "Function should be 100% in every grade; the grade mainly reflects cosmetics and battery." }
  ] },

{ id: "basics-4", module: "basics", title: "Why customers buy refurbished", min: 3,
  body: `<p>Four motives drive demand. Their weighting differs per segment and per country.</p>
<ol>
<li><b>Price / value</b> — still the #1 reason for consumers. In a Belgian consumer survey by Test Aankoop, price was the key criterion for 84% of buyers versus 11% for environmental reasons.</li>
<li><b>Sustainability</b> — far more important in B2B (CSR targets, Scope 3 reporting, tenders) and among younger consumers.</li>
<li><b>Access to premium</b> — a refurbished flagship rather than a new mid-range phone. Apple dominates refurbished smartphone demand in Western Europe.</li>
<li><b>Availability</b> — for B2B, refurbished can fill gaps when new supply is constrained or when a fleet needs to stay on one model.</li>
</ol>
<p>Barriers are mirror images: <b>trust</b> (quality, battery, warranty), <b>perceived savings</b> (the Dutch Consumentenbond found in 2025 that the real average saving versus new was about <b>22%</b> — lower than many shops suggested) and <b>data security</b> for business buyers.</p>`,
  takeaway: "Consumers buy mainly on price; businesses increasingly buy on sustainability and TCO. Trust is the key barrier.",
  qs: [
    { q: "According to a Belgian Test Aankoop survey, what share of refurbished buyers named price as the key criterion?", o: ["84%", "11%", "45%", "30%"], a: 0, x: "84% price versus 11% environment — price dominates for consumers." },
    { q: "What average real saving versus new did the Dutch Consumentenbond find for refurbished smartphones in 2025?", o: ["About 22%", "About 50%", "About 5%", "About 70%"], a: 0, x: "On average ~22% — less than many advertised 'discounts' suggested." },
    { q: "Which motive is typically MORE important in B2B than in consumer buying?", o: ["Sustainability / Scope 3 reporting", "Choice of colour", "Unboxing experience", "Impulse promotions"], a: 0, x: "Corporates and public buyers increasingly need sustainability data and circularity in procurement." }
  ] },

{ id: "basics-5", module: "basics", title: "The main device categories", min: 3,
  body: `<p>"Refurbished" covers very different businesses:</p>
<ul>
<li><b>Smartphones</b> — the largest and most liquid category. High value per kg, fast depreciation, dominated by iPhone. Consumer-facing and traded globally in B2B wholesale.</li>
<li><b>Laptops & desktops</b> — driven by corporate refresh cycles (typically 3–5 years, often leased). Business models (Lenovo ThinkPad, HP EliteBook, Dell Latitude) dominate supply. OS compatibility (e.g. Windows 11 requirements) strongly affects value.</li>
<li><b>Tablets</b> — iPad-heavy; education and field-workforce use.</li>
<li><b>Monitors, docks, peripherals</b> — low value per unit but big volumes in office refreshes.</li>
<li><b>Enterprise & data-centre hardware</b> — servers, storage, network gear; specialist B2B trading.</li>
<li><b>Wearables, consoles, other CE</b> — growing but smaller.</li>
</ul>
<p>Each category has its own buyers, grading norms and seasonality. Foxway operates across all of them — mobiles through <i>Recommerce Mobile</i>, and computers, business and network equipment through <i>Recommerce Computers & Enterprise</i>.</p>`,
  takeaway: "Phones = liquid, consumer-heavy, iPhone-led. Laptops = corporate refresh-driven. Each category has its own economics.",
  qs: [
    { q: "Which category is typically the largest and most liquid in refurbished?", o: ["Smartphones", "Monitors", "Servers", "Printers"], a: 0, x: "Smartphones combine high value, high volumes and global B2B liquidity." },
    { q: "What mainly drives laptop supply in refurbished?", o: ["Corporate refresh and lease cycles", "Consumer trade-ins at telcos", "Insurance claims", "Retail overstock only"], a: 0, x: "Business laptops return in waves from corporate refreshes and leases (typically 3–5 years)." },
    { q: "Which three business laptop families dominate refurbished laptop supply?", o: ["Lenovo ThinkPad, HP EliteBook, Dell Latitude", "Chromebook, Surface Go, Pixelbook", "MacBook Air, iMac, Mac mini", "Gaming laptops"], a: 0, x: "These business lines are bought in large fleets and are designed to be serviceable." }
  ] },

/* ───────────────────────── VALUE CHAIN & SOURCING ───────────────────────── */
{ id: "chain-1", module: "chain", title: "The circular value chain, end to end", min: 4,
  body: `<p>A device's second life passes through these steps:</p>
<ol>
<li><b>Collection / sourcing</b> — trade-in, buy-back, lease return, corporate asset recovery, insurance swap, retail return.</li>
<li><b>Logistics</b> — reverse logistics to a processing site (secure, tracked, insured).</li>
<li><b>Intake & audit</b> — identification (IMEI/serial), lock checks, first grading.</li>
<li><b>Data erasure</b> — certified wipe with a certificate per device.</li>
<li><b>Testing & grading</b> — functional diagnostics and cosmetic grading.</li>
<li><b>Refurbishment</b> — repair, parts, battery, polishing, respraying/skinning, packaging.</li>
<li><b>Remarketing</b> — B2B wholesale, marketplaces, own retail, telcos, DaaS redeployment.</li>
<li><b>Recycling</b> — what cannot be reused goes to certified recycling (material recovery).</li>
</ol>
<p>Companies specialise in slices: <b>marketplaces</b> (Back Market, Refurbed) only sell; <b>trade-in providers</b> run the front end for telcos; <b>ITAD</b> firms recover enterprise assets; <b>wholesalers</b> trade in bulk. Foxway's strength is that it is <b>embedded across the entire chain</b> — from sourcing and leasing new equipment to recovering, refurbishing and reselling it.</p>`,
  takeaway: "Collect → move → audit → wipe → test/grade → refurbish → remarket → recycle. Owning more steps = more control over value.",
  qs: [
    { q: "Which step must happen before a device can be safely resold?", o: ["Certified data erasure", "Marketing photography", "Price-list publication", "Customs clearance"], a: 0, x: "Data must be erased (with a certificate) before any resale." },
    { q: "Back Market primarily operates which part of the value chain?", o: ["Marketplace / remarketing to consumers", "Data-centre recycling", "Corporate leasing", "Battery manufacturing"], a: 0, x: "Back Market is a marketplace connecting refurbishers with consumers." },
    { q: "What is a key strategic advantage of being embedded across the whole chain?", o: ["Control over supply, quality and value capture at each step", "Avoiding all regulation", "Not needing warranty", "Lower brand visibility"], a: 0, x: "End-to-end presence secures supply and captures margin at several steps." }
  ] },

{ id: "chain-2", module: "chain", title: "Where supply comes from", min: 4,
  body: `<p>Knowing supply channels is knowing the business:</p>
<ul>
<li><b>Consumer trade-in at telcos & retailers</b> — the biggest mobile source. Peaks after iPhone launches (September) and around Black Friday/Christmas.</li>
<li><b>Direct consumer buy-back</b> — web platforms and collection points (e.g. Swappie opened a physical collection point in Belgium).</li>
<li><b>Corporate asset recovery / ITAD</b> — laptops, phones and monitors from company refreshes. Comes in large lots with data-security requirements.</li>
<li><b>Leasing & DaaS returns</b> — end-of-term devices from lessors and financing companies.</li>
<li><b>Insurance & warranty swaps</b> — damaged or replaced devices.</li>
<li><b>Retail/e-commerce returns and overstock</b> — open-box, 14/30-day returns, end-of-line stock.</li>
<li><b>B2B wholesale trading</b> — buying graded lots from other traders across Europe, the US and Asia.</li>
</ul>
<p>Each source differs in <b>predictability</b> (lease returns are forecastable; trade-ins are seasonal), <b>quality mix</b> (corporate phones are often well-kept, insurance swaps are often damaged) and <b>price-setting power</b>.</p>`,
  takeaway: "Trade-in, corporate recovery, leasing returns, insurance, retail returns and wholesale each bring different predictability and quality mixes.",
  qs: [
    { q: "Which supply source is the MOST predictable?", o: ["Leasing / DaaS returns", "Consumer trade-in", "Insurance swaps", "Spot wholesale purchases"], a: 0, x: "Lease end dates are contractually known, so returns can be forecast." },
    { q: "When do consumer smartphone trade-in volumes typically peak?", o: ["After the September iPhone launch and around Black Friday/Christmas", "In February", "Only in summer", "They are flat all year"], a: 0, x: "Launch season and year-end promotions trigger upgrades and therefore trade-ins." },
    { q: "Insurance swap devices typically have a higher share of damaged units than corporate fleet returns.", tf: true, x: "Insurance replacements are often triggered by damage; corporate devices are usually better kept." }
  ] },

{ id: "chain-3", module: "chain", title: "Where devices are sold", min: 4,
  body: `<p>Remarketing channels, from highest price-per-unit to fastest volume:</p>
<ul>
<li><b>Own B2C retail/e-commerce</b> — best price, highest cost to serve (marketing, returns, customer service).</li>
<li><b>Marketplaces</b> — Back Market, Refurbed, bol.com, Amazon: reach without owning the brand; commission and strict SLAs.</li>
<li><b>Telcos & retailers</b> — selling refurbished under the partner's brand (e.g. Proximus and Vodafone NL offer refurbished phones; Orange Luxembourg has its "Rɘ" programme).</li>
<li><b>B2B direct / DaaS</b> — redeploying devices to corporate, education and public customers.</li>
<li><b>B2B wholesale</b> — selling graded lots to resellers across Europe and globally. Fast, liquid, lower margin.</li>
<li><b>Parts harvesting & recycling</b> — the floor value of a device.</li>
</ul>
<p>The art is <b>channel allocation</b>: sending each unit to the channel where it earns the highest net value. A grade-A iPhone 14 may belong in B2C; a grade-C older Android may be worth more in export wholesale than after expensive cosmetic repair.</p>`,
  takeaway: "Channel allocation — sending each unit to its highest-net-value channel — is a core profit lever.",
  qs: [
    { q: "What does 'channel allocation' mean in refurbished?", o: ["Sending each unit to the channel where it earns the highest net value", "Allocating sales territories", "Assigning TV channels to ads", "Choosing a courier"], a: 0, x: "Each device's grade/model determines its best route to market." },
    { q: "Which channel usually gives the highest price per unit but also the highest cost to serve?", o: ["Own B2C retail/e-commerce", "B2B export wholesale", "Recycling", "Parts harvesting"], a: 0, x: "Direct B2C earns the best price but carries marketing, returns and service costs." },
    { q: "What is the 'floor value' of a device?", o: ["Its value in parts harvesting and material recycling", "The list price when new", "The trade-in price shown to consumers", "The VAT amount"], a: 0, x: "When reuse isn't viable, parts and materials define the minimum value." }
  ] },

{ id: "chain-4", module: "chain", title: "Who is who: types of players", min: 4,
  body: `<ul>
<li><b>OEMs</b> (Apple, Samsung, Lenovo, HP, Dell) — run their own trade-in and certified refurbished programmes, but rely heavily on partners for logistics, grading and remarketing. Foxway is an <i>Apple Authorized Trade-In Kit Technology Provider</i> and a Samsung partner.</li>
<li><b>Telcos</b> (KPN, Odido, VodafoneZiggo, Proximus, Orange, Telenet, POST…) — own the customer at upgrade moment; need trade-in to lower the price of new devices and to meet sustainability goals.</li>
<li><b>Retailers</b> (Coolblue, MediaMarkt, bol.com…) — similar to telcos, plus returns streams.</li>
<li><b>Refurbishers</b> — industrial processors (Foxway, Swappie, Recommerce Group, Largo, many SMEs).</li>
<li><b>Marketplaces</b> — Back Market, Refurbed, Amazon Renewed.</li>
<li><b>ITAD providers</b> — enterprise asset recovery with certified erasure (e.g. Circular IT Group, Brainscape in Belgium, Sims Lifecycle Services).</li>
<li><b>Trade-in/insurance service providers</b> — e.g. Assurant (which bought HYLA Mobile for $325m in 2020).</li>
<li><b>Leasing & financing companies</b> — own the assets during the first life.</li>
<li><b>Recyclers</b> — e.g. Umicore (Belgium), a global leader in recovering precious metals from e-waste.</li>
</ul>
<p>Many of these are <b>both customers and competitors</b> of each other — a typical feature of this industry ("co-opetition").</p>`,
  takeaway: "OEMs, telcos, retailers, refurbishers, marketplaces, ITADs, insurers, lessors and recyclers — often customers and competitors at once.",
  qs: [
    { q: "Which Belgian company is a global leader in recovering precious metals from e-waste?", o: ["Umicore", "Proximus", "Colruyt", "Solvay"], a: 0, x: "Umicore operates one of the world's largest precious-metals refineries in Hoboken (Antwerp)." },
    { q: "Assurant acquired which trade-in company in 2020 for around $325 million?", o: ["HYLA Mobile", "Back Market", "Swappie", "Recommerce Group"], a: 0, x: "Assurant bought HYLA Mobile, a trade-in and reverse logistics specialist." },
    { q: "In this industry, companies are frequently both customers and competitors of each other.", tf: true, x: "Co-opetition is common: a refurbisher may supply a marketplace it also competes with." }
  ] },

{ id: "chain-5", module: "chain", title: "Global flows: where devices end up", min: 3,
  body: `<p>The used-device market is global. Western Europe is a <b>net exporter</b> of older and lower-grade devices and a <b>strong consumer</b> of premium refurbished iPhones.</p>
<ul>
<li><b>Premium, recent models</b> in top grades are mostly sold within Europe (B2C and telcos).</li>
<li><b>Older models and lower grades</b> flow to markets where price sensitivity is higher: parts of Eastern Europe, the Middle East, Africa, Latin America and Asia.</li>
<li><b>Hubs</b>: large trading hubs exist in Dubai, Hong Kong and the US; within Europe, logistics hubs near Rotterdam, Antwerp, Venlo and Schiphol matter for Benelux traders.</li>
</ul>
<p>Implications for commercial work: prices are influenced by <b>USD/EUR exchange rates</b>, by demand shocks in export markets and by trade rules (e.g. tariffs, e-waste export rules — non-functional devices may count as waste under the Basel Convention and EU waste shipment rules).</p>
<p>Operationally, Foxway processes very large volumes in <b>Tartu, Estonia</b> — over half of the 2.8 million devices it sold into reuse in 2024 were processed there.</p>`,
  takeaway: "Top grades stay in Europe; older/lower grades are exported. FX, export demand and waste-shipment rules move prices.",
  qs: [
    { q: "Which flows are typical for older, lower-grade devices from Western Europe?", o: ["Exported to more price-sensitive markets", "Sold as 'as new' in Western Europe", "Always shredded", "Returned to the OEM"], a: 0, x: "They often find their best value in export markets." },
    { q: "Why can non-functional devices be difficult to export?", o: ["They may be classified as waste under waste-shipment rules", "They are too light", "They have no IMEI", "VAT is 100%"], a: 0, x: "Broken electronics can be e-waste; exporting waste is strictly regulated." },
    { q: "Over half of the 2.8 million devices Foxway sold into reuse in 2024 were processed in which city?", o: ["Tartu, Estonia", "Stockholm, Sweden", "Munich, Germany", "Madrid, Spain"], a: 0, x: "Foxway's Tartu site is its largest operations hub." }
  ] },

/* ───────────────────────── PRICING & RESIDUAL VALUE ───────────────────────── */
{ id: "pricing-1", module: "pricing", title: "Depreciation curves and residual value", min: 4,
  body: `<p><b>Residual value (RV)</b> is what a device is worth at a given age and condition. It drives trade-in offers, lease pricing and refurb margins.</p>
<ul>
<li><b>iPhones hold value best.</b> Studies in 2025 found recent iPhone Pro models retaining roughly 70% of their launch value after 12 months.</li>
<li><b>Android flagships depreciate faster</b> — historically around 3× faster than iPhones in year one — but the gap is narrowing, helped by Samsung's 7-year software-update promise from the Galaxy S24 onwards.</li>
<li><b>Mid-range and budget Androids</b> lose value fastest; after 2–3 years many are worth little beyond parts.</li>
<li><b>Laptops</b> depreciate on a slower, steadier curve but fall off a cliff when they lose OS support or key specs (CPU generation, RAM, SSD).</li>
</ul>
<p>RV is not only about age: <b>storage size, colour, battery health, grade, lock status and region</b> all move it. For DaaS and leasing, a good RV forecast is what makes a monthly price competitive — Foxway can offer attractive DaaS pricing because it knows what the device will be worth at the end of the term and has the channels to realise that value.</p>`,
  takeaway: "iPhones retain value best; Androids and older laptops fall faster. Accurate RV forecasting underpins trade-in, leasing and DaaS pricing.",
  qs: [
    { q: "Roughly what share of launch value did recent iPhone Pro models retain after 12 months in 2025 studies?", o: ["About 70%", "About 20%", "About 95%", "About 40%"], a: 0, x: "Recent iPhone Pro models retained ~70% after a year." },
    { q: "What has helped Samsung flagships narrow the residual-value gap with iPhone?", o: ["A commitment to 7 years of software updates", "Removing the headphone jack", "Lower launch prices", "Discontinuing the S-series"], a: 0, x: "Longer software support increases the device's useful life and resale value." },
    { q: "Why does a strong residual-value forecast matter for DaaS pricing?", o: ["Because the end-of-term value offsets the monthly fee", "Because it sets the VAT rate", "Because it determines colour choice", "It doesn't matter"], a: 0, x: "The higher the realisable end value, the lower the monthly price can be." }
  ] },

{ id: "pricing-2", module: "pricing", title: "The calendar: seasonality and launch shocks", min: 4,
  body: `<p>The refurbished market has a rhythm:</p>
<ul>
<li><b>September — iPhone launch.</b> Trade-in values drop as new models land and upgrade volumes rise. Across recent launches, ~75% of tracked iPhones lost trade-in value between announcement and release day; average values of several models fell ~9% from September to October.</li>
<li><b>2–4 weeks after launch</b> prices usually stabilise at a new, lower level.</li>
<li><b>Q4 — Black Friday & Christmas</b>: peak consumer demand for refurbished, while new-device promotions put pressure on refurbished price points.</li>
<li><b>January</b>: returns and post-holiday clearance; trade-in stock from December upgrades arrives.</li>
<li><b>Spring</b>: Samsung Galaxy S launches (January/February) reset Android values.</li>
<li><b>Back-to-school (Aug/Sep)</b>: laptop and tablet demand from education and families.</li>
</ul>
<p>Practical rule: <b>don't sit on stock of the previous flagship into launch season</b>. Inventory ages like fresh produce; every week can cost 1–2% of value, faster around launches.</p>`,
  takeaway: "September launches push values down; Q4 pushes demand up. Inventory ages like fresh produce — turn it fast.",
  qs: [
    { q: "Around which month do iPhone trade-in values typically take their largest annual step down?", o: ["September", "March", "June", "December"], a: 0, x: "Apple's September launch resets the value of previous models." },
    { q: "How long after an Apple launch do pre-owned prices typically stabilise?", o: ["2–4 weeks", "1 day", "6 months", "1 year"], a: 0, x: "Prices usually find a new level within two to four weeks." },
    { q: "Holding large stock of the previous flagship into launch season is a sound strategy to maximise value.", tf: false, x: "Values drop around launch; refurbished inventory should turn fast." }
  ] },

{ id: "pricing-3", module: "pricing", title: "Margin VAT: the refurbisher's tax logic", min: 5,
  body: `<p>The EU <b>margin scheme</b> (margeregeling / régime de la marge) allows traders in second-hand goods to pay VAT only on their <b>margin</b> — sales price minus purchase price — instead of on the full sales price.</p>
<ul>
<li>Applies when the goods were bought <b>without deductible VAT</b> — typically from consumers, or from another dealer who also applied the margin scheme.</li>
<li>VAT is included in the margin: <b>VAT = margin × rate / (100 + rate)</b>. At 21% (NL and BE): margin × 21/121. Luxembourg's standard rate is 17%.</li>
<li>Example: bought from a consumer for €300, sold for €450 → margin €150 → VAT = 150 × 21/121 = <b>€26.03</b>.</li>
<li>Margin-scheme invoices <b>do not show VAT</b>, and the buyer <b>cannot deduct</b> it.</li>
</ul>
<p><b>Why this matters in B2B:</b> a business buying refurbished laptops usually wants a <b>regular VAT invoice</b> so it can reclaim input VAT. Devices bought from companies with VAT (e.g. corporate asset recovery) are sold with normal VAT; devices sourced from consumer trade-ins are typically margin goods. Always check which your customer needs — a margin-VAT offer can look cheaper but cost a VAT-registered buyer more.</p>`,
  takeaway: "Margin scheme: VAT only on the margin (margin × 21/121 in NL/BE). B2B buyers usually need normal VAT invoices to deduct VAT.",
  qs: [
    { q: "Under the margin scheme at 21% VAT, what is the VAT on a margin of €121?", o: ["€21", "€25.41", "€12.10", "€0"], a: 0, x: "121 × 21/121 = €21." },
    { q: "Why do VAT-registered business customers often prefer a regular VAT invoice?", o: ["They can reclaim input VAT; margin-scheme VAT cannot be deducted", "Margin invoices are illegal in Belgium", "Regular invoices have no VAT", "It shortens delivery time"], a: 0, x: "Margin-scheme VAT is hidden and non-deductible for the buyer." },
    { q: "The margin scheme can be applied to devices bought from a company that charged and deducted full VAT.", tf: false, x: "It applies to goods bought without deductible VAT (e.g. from consumers or other margin-scheme dealers)." }
  ] },

{ id: "pricing-4", module: "pricing", title: "Unit economics of a refurbished device", min: 5,
  body: `<p>Think in <b>net value per unit</b>:</p>
<p style="font-family:monospace;background:var(--surface-2);padding:10px;border-radius:8px">Net margin = Sales price − Purchase price − Logistics − Processing (test/wipe/grade) − Repair & parts − Channel fees − Warranty/returns provision − (margin VAT)</p>
<ul>
<li><b>Purchase price</b> is the biggest line — often 60–80% of the selling price for premium phones.</li>
<li><b>Repair decisions</b> are an investment: replace a €40 battery if it lifts the device from B to A and adds more than €40 net.</li>
<li><b>Channel fees</b>: marketplace commissions are significant (often in the ~10–15% range, varying by platform and category).</li>
<li><b>Returns & warranty</b>: a return rate of a few percent on B2C quickly eats margin — quality control pays.</li>
<li><b>Time</b>: a unit that sits 6 weeks loses value; cash tied up in stock costs money (inventory financing).</li>
</ul>
<p>In B2B, the logic turns into <b>recovery value per asset</b> for the customer (what we pay them after costs) versus our <b>resale value</b>. Being transparent about this split builds trust in ITAD deals.</p>`,
  takeaway: "Net value = price minus purchase, logistics, processing, repair, channel fees, returns and VAT — and time is a cost.",
  qs: [
    { q: "Which cost line is typically the largest in refurbishing a premium phone?", o: ["Purchase price", "Packaging", "Data wiping", "Photography"], a: 0, x: "Buying the device is usually 60–80% of its selling price." },
    { q: "A battery replacement costs €40 and moves a device from grade B (€380) to grade A (€440). Is it worth it on those numbers alone?", o: ["Yes — it adds €60 of value for €40 cost", "No — never replace batteries", "Only if VAT is 0%", "Only for Android"], a: 0, x: "+€60 value for €40 cost = +€20 net (before other effects)." },
    { q: "Stock that sits unsold for weeks has no cost because the device doesn't change.", tf: false, x: "It depreciates and ties up cash — time is a real cost." }
  ] },

{ id: "pricing-5", module: "pricing", title: "Price transparency and fair advertising", min: 4,
  body: `<p>In 2025 the Dutch <b>Consumentenbond</b> investigated refurbished smartphone webshops and found that about <b>half used misleading discounts</b> — comparing against launch prices or inflated "advised prices" rather than the current new price. It named shops including Apple Store, Back Market, Fixje, Forza Refurbished, iUsed, Mobico, Rebuy and Refurbished.nl. In one case a refurbished iPhone 14 (256GB) was offered for over €100 more than the new price elsewhere.</p>
<p>Lessons for anyone selling refurbished in Benelux:</p>
<ul>
<li>EU consumer law (Price Indication rules — the "lowest price in the last 30 days" reference for announced discounts — and the Unfair Commercial Practices rules) is enforced; in NL by the <b>ACM</b>, in Belgium by the <b>FOD/SPF Economie</b>.</li>
<li>Compare to the <b>current</b> new price, not the launch price.</li>
<li>Trust is the category's main barrier; <b>transparent grading, battery info and warranty</b> sell better long-term than inflated discounts.</li>
</ul>
<p>For partners (telcos/retailers) buying refurbished from Foxway, this is a selling point: a partner's brand reputation depends on honest, consistent grading and pricing.</p>`,
  takeaway: "Half of Dutch refurb webshops used misleading discounts (Consumentenbond 2025). Honest pricing and grading protect partner brands.",
  qs: [
    { q: "What did the Consumentenbond find in 2025 about refurbished webshops?", o: ["About half used misleading discounts", "All prices were below new", "Refurbished was 60% cheaper on average", "No issues were found"], a: 0, x: "Half used fake/misleading reference prices." },
    { q: "Which Dutch authority enforces consumer protection rules such as misleading pricing?", o: ["ACM", "BKR", "AFM", "KvK"], a: 0, x: "The Authority for Consumers & Markets (ACM)." },
    { q: "The correct price comparison for a refurbished phone is against…", o: ["The current price of the new device", "The launch price", "The highest price ever seen", "The US price"], a: 0, x: "Comparing to launch prices inflates perceived savings." }
  ] },

/* ───────────────────────── OPERATIONS & QUALITY ───────────────────────── */
{ id: "ops-1", module: "ops", title: "Intake: IMEI, locks and blacklists", min: 4,
  body: `<p>Before any value is created, every device must pass intake checks:</p>
<ul>
<li><b>Identification</b>: IMEI (phones) or serial number; model, storage, colour.</li>
<li><b>Activation Lock / Find My (FMI)</b>: an iPhone with FMI <b>ON</b> is unusable without the owner's credentials — its value collapses to parts. FMI OFF is the only safe status.</li>
<li><b>Blacklist (GSMA Device Check)</b>: devices reported lost or stolen are blocked by operators. A "clean" IMEI does not mean the device is free of Activation Lock — check both.</li>
<li><b>MDM / Apple Business Manager enrolment</b>: corporate devices can be locked to a company's device management. They must be <b>released</b> by the customer before resale — an important point in every B2B recovery contract.</li>
<li><b>Carrier/SIM lock</b>: less common in Benelux, but affects export value.</li>
</ul>
<p>In B2B asset recovery, agree upfront how locked devices are handled (customer removes locks before pick-up, or pays a fee, or the device is valued as parts). This avoids the most common disputes.</p>`,
  takeaway: "Check IMEI, Activation Lock (FMI), GSMA blacklist and MDM enrolment at intake — and contract how locked devices are handled.",
  qs: [
    { q: "An iPhone arrives with FMI (Find My) ON. What is the consequence?", o: ["It cannot be reactivated without the owner's credentials; value drops to parts", "It is worth more", "It only needs a factory reset", "It can be sold as grade A"], a: 0, x: "Activation Lock prevents reuse without the owner's Apple ID." },
    { q: "A 'clean' GSMA blacklist result guarantees the device has no Activation Lock.", tf: false, x: "Blacklist and Activation Lock are separate checks." },
    { q: "Corporate iPhones enrolled in Apple Business Manager must be … before resale.", o: ["Released by the customer from their MDM/ABM", "Painted", "Registered at BKR", "Declared at customs"], a: 0, x: "Otherwise the device re-enrols to the former owner's management on setup." }
  ] },

{ id: "ops-2", module: "ops", title: "Certified data erasure", min: 4,
  body: `<p>Data security is the #1 concern of business customers handing over devices.</p>
<ul>
<li><b>NIST SP 800-88</b> (US guideline, globally used) defines three levels: <b>Clear</b>, <b>Purge</b> and <b>Destroy</b>. <b>IEEE 2883</b> is a newer standard for modern storage.</li>
<li><b>Software erasure</b> (e.g. Blancco) produces a <b>tamper-proof certificate per device</b>, linked to IMEI/serial — the audit trail customers need under GDPR.</li>
<li><b>Physical destruction</b> (shredding) is the fallback for failed wipes or on customer demand — but it destroys reuse value and increases CO₂ impact.</li>
<li><b>Certifications</b> customers ask for: <b>ADISA</b> (asset recovery & erasure), <b>R2v3</b> and <b>e-Stewards</b> (responsible recycling), <b>ISO 27001</b> (information security), <b>ISO 14001</b> (environment), <b>ISO 9001</b> (quality).</li>
<li><b>GDPR</b>: the customer remains data controller; the ITAD partner is a processor → a <b>data processing agreement</b> (verwerkersovereenkomst / convention de traitement) is standard.</li>
</ul>
<p>Commercial angle: position certified erasure as <b>what makes reuse possible</b>. "Shred everything" policies are common in banks and government — challenge them with certificates, audits and site visits.</p>`,
  takeaway: "NIST 800-88 / IEEE 2883 erasure with per-device certificates enables reuse. Shredding kills value. GDPR requires a DPA.",
  qs: [
    { q: "Which are the three sanitisation levels in NIST SP 800-88?", o: ["Clear, Purge, Destroy", "Low, Medium, High", "Wipe, Reset, Format", "Bronze, Silver, Gold"], a: 0, x: "Clear, Purge and Destroy." },
    { q: "Under GDPR, the ITAD/refurbishment partner handling a customer's devices usually acts as…", o: ["Data processor", "Data controller", "Supervisory authority", "Data subject"], a: 0, x: "The customer remains controller; a data processing agreement is needed." },
    { q: "What is the commercial downside of a 'shred everything' policy?", o: ["It destroys reuse value and increases environmental impact", "It is always illegal", "It is slower than erasure", "It requires ADISA"], a: 0, x: "Destroyed devices can't be resold and the embodied carbon is lost." }
  ] },

{ id: "ops-3", module: "ops", title: "Testing, grading and AI", min: 4,
  body: `<p>Testing and grading must be <b>fast, consistent and documented</b>.</p>
<ul>
<li><b>Functional diagnostics</b>: automated tools test screen, touch, cameras, microphones, speakers, sensors, connectivity, battery health and parts originality. Apple diagnostics identify non-genuine or unpaired parts.</li>
<li><b>Cosmetic grading</b>: historically manual under lightboxes; increasingly done by <b>camera rigs and AI</b> that detect scratches, dents and marks consistently.</li>
<li><b>Why AI grading matters</b>: consistency (the same device gets the same grade every time), speed, and fairness to consumers in trade-in. Foxway reports that AI-powered grading pilots in Germany, Finland, Poland and Croatia raised consumer residual values by <b>up to 17%</b> through more accurate assessment.</li>
</ul>
<p>Grading consistency is also a <b>B2B sales argument</b>: wholesale buyers pay more for suppliers whose "A" is always an A — fewer claims, fewer re-grades.</p>`,
  takeaway: "Automated diagnostics + camera/AI grading = consistent grades, fewer claims and better prices. Foxway's AI pilots lifted residual values by up to 17%.",
  qs: [
    { q: "What was the reported effect of Foxway's AI-powered grading pilots on consumer residual values?", o: ["Up to 17% higher", "Up to 17% lower", "No change", "Up to 70% higher"], a: 0, x: "More accurate assessment lifted residual values by up to 17%." },
    { q: "Why do wholesale buyers pay more for suppliers with consistent grading?", o: ["Fewer claims and re-grades", "Because AI is fashionable", "Consistency lowers VAT", "It shortens warranty"], a: 0, x: "Consistency reduces the buyer's risk and handling cost." },
    { q: "In which markets did Foxway pilot AI-powered trade-in grading?", o: ["Germany, Finland, Poland and Croatia", "Netherlands, Belgium, Luxembourg", "USA and Canada", "Only Sweden"], a: 0, x: "The pilots ran in DE, FI, PL and HR." }
  ] },

{ id: "ops-4", module: "ops", title: "Repair, parts and cosmetic restoration", min: 4,
  body: `<p>Refurbishment creates value by fixing what the market penalises most.</p>
<ul>
<li><b>Batteries and screens</b> are the most common repairs for phones; keyboards, batteries, SSDs and RAM upgrades for laptops.</li>
<li><b>Parts sourcing</b>: genuine OEM parts (increasingly available through self-service/independent repair programmes), high-quality aftermarket parts, or <b>harvested parts</b> from devices that can't be saved.</li>
<li><b>Parts pairing</b>: some OEMs link parts to the device's logic board; replaced parts may show "unknown part" messages unless calibrated through official tools. EU rules are pushing towards fairer access for professional repairers.</li>
<li><b>Cosmetic restoration</b>: polishing, <b>respraying</b> and <b>skinning</b> (applying a film) can move laptops from C to A. Foxway acquired Romanian refurbisher <b>ABD</b> in 2026 specifically to scale this premium laptop refurbishment capability.</li>
</ul>
<p>The key question per unit: <b>does the value uplift exceed the cost of repair + time?</b></p>`,
  takeaway: "Batteries, screens and cosmetic restoration (respray/skin) unlock grade uplifts. Parts pairing and access are key constraints.",
  qs: [
    { q: "Foxway acquired ABD in Romania (2026) mainly to scale…", o: ["Premium computer refurbishment incl. respraying and skinning", "Consumer marketing", "Server leasing", "Phone insurance"], a: 0, x: "ABD specialises in restoring computers to a premium standard." },
    { q: "What is 'parts pairing'?", o: ["Linking components to the device's logic board, so non-calibrated replacements may be flagged", "Selling parts in pairs", "Pairing Bluetooth headphones", "Bundling chargers"], a: 0, x: "Paired parts can trigger 'unknown part' messages unless calibrated via OEM tools." },
    { q: "Which repair is typically the most common for smartphones?", o: ["Battery and screen replacement", "Motherboard replacement", "Speaker grill cleaning", "SIM tray replacement"], a: 0, x: "Batteries and screens are the most frequent value-restoring repairs." }
  ] },

{ id: "ops-5", module: "ops", title: "Reverse logistics and yield", min: 4,
  body: `<p><b>Reverse logistics</b> brings devices back: secure pick-ups at offices, consumer shipping labels, store collection, bulk pallets from telco warehouses. Requirements: chain of custody, tracking, insurance and — for data-bearing assets — sealed containers and sometimes on-site erasure.</p>
<p><b>Yield</b> is the % of intake that ends up as sellable refurbished product, and in which grades. A typical outcome split:</p>
<ul>
<li>Reuse as-is or after light refurbishment</li>
<li>Reuse after repair</li>
<li>Parts harvesting</li>
<li>Recycling</li>
</ul>
<p>Foxway reports <b>reuse rates of up to 90%</b>. High reuse rates are both a sustainability KPI (customers report them) and a financial one.</p>
<p>For commercial conversations: <b>quote on the expected grade mix</b>. A customer's fleet of 3-year-old ThinkPads won't all be grade A; setting expectations with a realistic mix prevents disappointment when the final settlement arrives.</p>`,
  takeaway: "Chain of custody + realistic grade-mix expectations = happy B2B customers. Foxway reports reuse rates up to 90%.",
  qs: [
    { q: "What does 'yield' mean in refurbishment?", o: ["The share of intake that becomes sellable product (and in which grades)", "The interest on a bond", "Sales per employee", "Warehouse size"], a: 0, x: "Yield = what comes out sellable versus what went in." },
    { q: "Up to what reuse rate does Foxway report?", o: ["90%", "40%", "60%", "100%"], a: 0, x: "Foxway reports reuse rates of up to 90%." },
    { q: "Why quote B2B recovery deals on an expected grade mix?", o: ["To set realistic expectations for the final settlement", "To avoid data erasure", "To speed up invoicing", "Because law requires it"], a: 0, x: "Not every device will be grade A; realistic mixes prevent disputes." }
  ] }
]);
