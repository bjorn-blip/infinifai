/* Lessons: B2B Circular IT, Mobile Recommerce, Regulation, Sustainability */
window.FXA = window.FXA || {};
FXA.lessons = (FXA.lessons || []).concat([

/* ───────────────────────── B2B CIRCULAR IT ───────────────────────── */
{ id: "b2b-1", module: "b2b", title: "The IT asset lifecycle", min: 4,
  body: `<p>Enterprises manage devices through a lifecycle: <b>Plan → Source → Configure/Deploy → Use & Support → Recover → Remarket/Recycle</b>. Traditionally each phase has a different supplier: a reseller sells, a lessor finances, an IT service firm deploys, an ITAD company collects at the end.</p>
<p><b>Circular lifecycle management</b> connects both ends: the provider that recovers the device also knows its value and can feed it back — to the same customer (redeployment), to another customer (refurbished sales) or into materials recovery.</p>
<ul>
<li>For the customer: one partner, lower total cost, less admin, reportable sustainability data.</li>
<li>For the provider: control of supply, residual value capture and long contracts.</li>
</ul>
<p>This is the heart of Foxway's proposition: helping organisations <b>source and lease</b> IT equipment and <b>refurbish and resell</b> used devices — "significantly extending the lifetime of each device".</p>`,
  takeaway: "Circular lifecycle management connects sourcing and end-of-life in one partner, capturing residual value and simplifying the customer's life.",
  qs: [
    { q: "What distinguishes circular lifecycle management from traditional IT supply?", o: ["The same partner connects sourcing/use with recovery and remarketing", "It only sells new devices", "It excludes leasing", "It only recycles"], a: 0, x: "Connecting both ends lets value from the end-of-life fund the start." },
    { q: "Which phase comes right after 'Use & Support' in the lifecycle?", o: ["Recover", "Plan", "Source", "Configure"], a: 0, x: "After use, devices are recovered for remarketing or recycling." },
    { q: "A key benefit of circular lifecycle management for the provider is control over supply and residual value.", tf: true, x: "Recovering your own leased/sold devices secures refurbished supply." }
  ] },

{ id: "b2b-2", module: "b2b", title: "Device-as-a-Service (DaaS)", min: 5,
  body: `<p><b>DaaS</b> = devices plus services for a fixed monthly fee per user/device: hardware, configuration, support, repairs/swaps, and end-of-term recovery with data erasure.</p>
<ul>
<li><b>Customer value</b>: predictable OPEX instead of CAPEX, always-current fleet, one contract, less internal IT workload, sustainability reporting.</li>
<li><b>Provider economics</b>: monthly fee covers (device cost − expected residual value) + financing + services + margin. A strong RV forecast and remarketing capability make the fee competitive.</li>
<li><b>Circular DaaS</b>: devices may be refurbished units, or new units whose second life is planned from day one (e.g. 3 years first life + 2 years second life).</li>
</ul>
<p>At Foxway, DaaS sits in the <b>Circular Workspace Solutions (CWS)</b> business area — device-as-a-service and related services for workspace equipment (computers, printers, etc.) for mid/large corporates and public sector, historically focused on the Nordics. In Q1 2025 CWS signed contract values exceeding the entire value secured in 2024.</p>
<p>Benelux context: DaaS/leasing competitors include lessors and IT integrators and circular specialists such as Circular IT Group (NL-based, also in Belgium).</p>`,
  takeaway: "DaaS = monthly fee for device + services + recovery. Fee = (cost − residual value) + finance + services + margin. At Foxway: Circular Workspace Solutions.",
  qs: [
    { q: "Which Foxway business area delivers Device-as-a-Service?", o: ["Circular Workspace Solutions", "Recommerce Mobile", "Recommerce Computers & Enterprise", "Foxway Retail"], a: 0, x: "CWS provides DaaS and related services for workspace equipment." },
    { q: "How does a higher expected residual value affect the DaaS monthly fee?", o: ["It allows a lower fee", "It raises the fee", "No effect", "It removes VAT"], a: 0, x: "More value recovered at the end means less needs to be charged per month." },
    { q: "Which is a typical customer benefit of DaaS?", o: ["Predictable OPEX instead of large CAPEX", "Owning devices forever", "No data erasure needed", "Higher upfront costs"], a: 0, x: "DaaS converts capital spend into a predictable monthly cost." }
  ] },

{ id: "b2b-3", module: "b2b", title: "ITAD: IT Asset Disposition", min: 4,
  body: `<p><b>ITAD</b> is the secure, compliant and value-maximising disposal of retired IT equipment.</p>
<p>A typical ITAD service:</p>
<ol>
<li>Asset inventory and quote (often based on an asset list from the customer).</li>
<li>Secure collection (tracked, sealed, sometimes on-site erasure/shredding).</li>
<li>Audit & certified data erasure — per-device certificates.</li>
<li>Grading and valuation → <b>recovery value</b> paid to the customer or credited against new purchases.</li>
<li>Reporting: erasure certificates, reuse vs. recycling rates, CO₂ avoided, WEEE documentation.</li>
</ol>
<p><b>Buyer personas</b>: IT manager (logistics, simplicity), CISO/security officer (erasure, chain of custody), procurement (price, compliance), sustainability/CSR manager (reporting), finance (asset write-offs, recovery value).</p>
<p>In Benelux, ITAD competition includes specialists like <b>Brainscape</b> (Belgium, partner of Proximus), <b>Circular IT Group</b>, global players such as <b>Sims Lifecycle Services</b>, plus many local IT resellers.</p>`,
  takeaway: "ITAD = secure collection + certified erasure + valuation + reporting. Sell to IT, security, procurement, CSR and finance — each wants something different.",
  qs: [
    { q: "Which persona is most concerned with chain of custody and certified erasure?", o: ["CISO / security officer", "Marketing manager", "Facility cleaner", "Sales director"], a: 0, x: "Security officers focus on data risk." },
    { q: "What is 'recovery value' in ITAD?", o: ["The amount paid or credited to the customer for their retired assets", "The cost of shredding", "The price of new devices", "An insurance payout"], a: 0, x: "Recovery value is the customer's share of the resale value after costs." },
    { q: "Which Belgian ITAD specialist partners with Proximus in mobile phone recovery?", o: ["Brainscape", "Coolblue", "Swappie", "Largo"], a: 0, x: "Proximus works with Brainscape and Umicore." }
  ] },

{ id: "b2b-4", module: "b2b", title: "Selling into public sector & education", min: 5,
  body: `<p>Public buyers are large, steady and increasingly <b>required</b> to buy circular.</p>
<ul>
<li><b>Tenders</b>: above EU thresholds, public contracts are published on <b>TED</b> (EU), <b>TenderNed</b> (NL) and the Belgian e-Procurement platform. Frameworks often run 4–5 years.</li>
<li><b>Sustainability criteria</b>: in NL, <b>PIANOo</b> publishes MVI (socially responsible procurement) criteria for ICT hardware; <b>TCO Certified</b> (incl. TCO Certified Edge and criteria relevant to extended use) is a common label requirement.</li>
<li><b>NL signals</b>: the Dutch central government aims for a fully circular economy by 2050 (National Circular Economy Programme 2023–2030). In 2025 the government arranged for 8,000–10,000 decommissioned laptops, tablets and smartphones to be professionally refurbished and redeployed via <b>Stichting Allemaal Digitaal</b> for people in vulnerable positions. A Ministry of Economic Affairs workplace hardware tender was valued at up to €375m over five years, with sustainability and circularity in focus.</li>
<li><b>Belgium</b>: federal, regional (Flanders, Wallonia, Brussels) and local levels each procure; <b>Smals</b> is the joint IT organisation for 300+ public institutions.</li>
<li><b>Education</b>: schools and universities (in NL, e.g. via SURF frameworks) buy laptops/tablets in back-to-school waves — refurbished is increasingly accepted.</li>
</ul>
<p>Tip: in tenders, <b>refurbished can be requested without changing the nature of the contract</b> — help buyers write specifications that allow it (performance-based specs rather than "new only").</p>`,
  takeaway: "Public buyers use tenders (TED/TenderNed), MVI criteria and TCO Certified. Help them write specs that allow refurbished.",
  qs: [
    { q: "Which Dutch expertise centre publishes MVI procurement criteria for ICT?", o: ["PIANOo", "ACM", "RDW", "CBS"], a: 0, x: "PIANOo is the Dutch public procurement expertise centre." },
    { q: "Via which foundation did the Dutch government redeploy 8,000–10,000 refurbished devices in 2025?", o: ["Stichting Allemaal Digitaal", "Stichting OPEN", "Consumentenbond", "Fairphone"], a: 0, x: "Allemaal Digitaal coordinates redeployment for people in vulnerable positions." },
    { q: "Which organisation is the joint IT organisation for 300+ Belgian public institutions?", o: ["Smals", "Proximus", "Recupel", "bpost"], a: 0, x: "Smals delivers shared IT services to Belgian public bodies." }
  ] },

{ id: "b2b-5", module: "b2b", title: "Total cost of ownership (TCO) thinking", min: 4,
  body: `<p>B2B customers don't buy a price, they buy a <b>total cost of ownership</b>:</p>
<p style="font-family:monospace;background:var(--surface-2);padding:10px;border-radius:8px">TCO = Acquisition (or lease) + Deployment + Support & repairs + Downtime + End-of-life cost − Recovery value</p>
<ul>
<li>A cheaper device with poor end-of-life value can cost more over 4 years than a premium device that is recovered and resold.</li>
<li><b>Recovery value</b> and <b>free, certified secure collection</b> reduce TCO directly.</li>
<li>Refurbished devices can reduce acquisition cost, but must match reliability — failure rates and warranty matter.</li>
<li><b>Extending lifetime</b> (e.g. from 3 to 4–5 years with a battery swap and redeployment) is often the cheapest and greenest lever.</li>
</ul>
<p>Use TCO to shift the conversation from "your price per laptop is €20 higher" to "your 4-year cost per user is €80 lower, with 30% less CO₂".</p>`,
  takeaway: "Sell TCO, not unit price: acquisition + deployment + support + downtime + EOL − recovery value.",
  qs: [
    { q: "Which element REDUCES total cost of ownership?", o: ["Recovery value at end of life", "Downtime", "Deployment costs", "Support costs"], a: 0, x: "Recovery value is subtracted from TCO." },
    { q: "Extending device life from 3 to 4–5 years is often the cheapest and greenest lever.", tf: true, x: "It spreads acquisition cost and avoids new embodied carbon." },
    { q: "Which reframing is most effective against a unit-price objection?", o: ["Show lower cost per user over the lifecycle", "Offer a bigger discount immediately", "Ignore the objection", "Talk about colours"], a: 0, x: "Move from unit price to lifecycle cost per user." }
  ] },

/* ───────────────────────── MOBILE RECOMMERCE ───────────────────────── */
{ id: "mobile-1", module: "mobile", title: "How telco & retail trade-in works", min: 5,
  body: `<p>Trade-in lets a consumer hand in an old device at purchase and get credit towards a new one.</p>
<ol>
<li><b>Quote</b>: online or in-store; the customer answers condition questions or the device is scanned/diagnosed.</li>
<li><b>Price guarantee</b>: the partner (e.g. Foxway) guarantees a price per model/grade for a period (the "price file").</li>
<li><b>Collection</b>: device is handed in store or shipped; the consumer gets a voucher, bill credit or cash.</li>
<li><b>Verification</b>: the device is re-checked at the processing site; if condition differs, the price may be adjusted (a key customer-experience pain point).</li>
<li><b>Remarketing</b>: the partner refurbishes and resells, taking the price risk.</li>
</ol>
<p><b>Why telcos/retailers want it</b>: it reduces the net price of a new device (conversion), drives loyalty, supports sustainability targets and generates collection KPIs. <b>Why it's hard</b>: price risk (values drop after launches), fraud (swapped devices, locked devices), and customer disputes over re-grading.</p>
<p>AI-based grading at the point of trade-in reduces disputes because the price is fixed on an objective assessment upfront.</p>`,
  takeaway: "Trade-in: quote → guaranteed price → collection → verification → remarketing. The partner carries the price risk; accurate upfront grading prevents disputes.",
  qs: [
    { q: "Who typically carries the price risk in an outsourced telco trade-in programme?", o: ["The trade-in/recommerce partner", "The consumer", "The OEM only", "The tax authority"], a: 0, x: "The partner guarantees prices and must realise them in resale." },
    { q: "What is a major customer-experience pain point in trade-in?", o: ["Price adjustment after re-grading at the processing site", "Too many colours", "Slow new-device delivery", "Free shipping"], a: 0, x: "Re-grading downwards after hand-in frustrates consumers." },
    { q: "Why do telcos value trade-in programmes?", o: ["Lower net price of new devices, loyalty and sustainability KPIs", "They increase churn", "They remove the need for SIM cards", "They avoid VAT"], a: 0, x: "Trade-in credit makes upgrades easier and supports ESG targets." }
  ] },

{ id: "mobile-2", module: "mobile", title: "OEM programmes: Apple and Samsung", min: 4,
  body: `<p>OEMs are major forces in recommerce:</p>
<ul>
<li><b>Apple</b> runs Apple Trade In and Apple Certified Refurbished. It works with authorised partners for the technical side. Foxway is an <b>Apple Authorized Trade-In Kit Technology Provider</b>, enabling Apple diagnostics inside its grading engine.</li>
<li><b>Samsung</b> runs trade-in and refurbished programmes. Foxway and <b>Samsung Electronics Germany</b> have an enhanced partnership to raise the bar for refurbished Samsung devices, building on collaboration in trade-in and rental. In the Nordics, Foxway runs device <b>rental</b> programmes with Samsung (fixed monthly fee for premium devices).</li>
<li><b>OEM motives</b>: keep customers in their ecosystem, support new sales (trade-in credit), and meet EU sustainability and Ecodesign expectations.</li>
</ul>
<p>Partnering with OEMs brings credibility and volume, but also strict process, security and brand requirements.</p>`,
  takeaway: "Foxway is an Apple Authorized Trade-In Kit Technology Provider and a Samsung partner (trade-in, rental, refurbished).",
  qs: [
    { q: "Which Apple role does Foxway hold that enables Apple diagnostics in its grading?", o: ["Apple Authorized Trade-In Kit Technology Provider", "Apple Premium Reseller", "Apple Authorised Service Provider only", "Apple Retail Franchise"], a: 0, x: "This role lets Foxway integrate Apple diagnostics into trade-in grading." },
    { q: "With which Samsung entity did Foxway announce an enhanced refurbished partnership?", o: ["Samsung Electronics Germany", "Samsung Benelux", "Samsung US", "Samsung Display"], a: 0, x: "The enhanced partnership was with Samsung Electronics Germany." },
    { q: "In the Nordics, Foxway runs device rental programmes with Samsung.", tf: true, x: "Customers pay a fixed monthly fee to use premium Samsung devices." }
  ] },

{ id: "mobile-3", module: "mobile", title: "B2B mobile wholesale", min: 4,
  body: `<p>A large part of the used-phone market is <b>business-to-business trading</b> in graded lots.</p>
<ul>
<li><b>Lots</b> are defined by model, storage, grade and quantity; buyers expect a <b>manifest</b> (IMEI list, grades, test results).</li>
<li><b>Pricing</b> moves daily/weekly; traders watch launch cycles, FX rates and demand in export markets.</li>
<li><b>Trust mechanisms</b>: consistent grading, test reports (Phonecheck, Blancco etc.), claim/RMA policies, credit insurance.</li>
<li><b>Risk</b>: VAT fraud (missing-trader/"carousel" fraud) historically hit mobile phone trading hard; several EU countries apply <b>domestic reverse-charge</b> on B2B supplies of mobile phones and similar goods above thresholds. Know your customer (KYC) checks matter.</li>
</ul>
<p>Foxway sells refurbished and new devices B2B through channels including its <b>reseller store</b> (with a 90-day warranty for resellers). For a Benelux commercial consultant, B2B resellers (web shops, repair chains, IT resellers) can be both an outlet and a sourcing partner.</p>`,
  takeaway: "B2B wholesale runs on lots, manifests, consistent grades and trust. VAT fraud risks require KYC and reverse-charge awareness.",
  qs: [
    { q: "What does a buyer typically expect with a B2B lot of used phones?", o: ["A manifest with IMEIs, grades and test results", "A TV advert", "Free insurance for consumers", "OEM packaging"], a: 0, x: "The manifest is the basis of trust and claims." },
    { q: "Why do several EU countries apply domestic reverse-charge VAT to B2B mobile phone supplies?", o: ["To combat missing-trader (carousel) VAT fraud", "To lower phone prices", "To promote exports", "To help consumers"], a: 0, x: "Mobile phones were a classic carousel-fraud product." },
    { q: "What warranty does Foxway's reseller store offer on devices?", o: ["90 days", "5 years", "None", "7 days"], a: 0, x: "The reseller store states a 90-day warranty." }
  ] },

{ id: "mobile-4", module: "mobile", title: "Foxway's Circular Platform for telcos & retailers", min: 4,
  body: `<p>Foxway announced a <b>Circular Platform</b> for retailers and telecom operators, rolling out in 2026, in response to demand for simpler, more scalable trade-in.</p>
<ul>
<li><b>AI-powered, multi-vendor trade-in hub</b> — designed to streamline trade-ins across Europe.</li>
<li><b>Integrated AI visual + functional grading</b>, combining advanced visual assessment with Apple diagnostics.</li>
<li>Covers <b>mobiles, laptops, other consumer electronics</b> and broader device collection initiatives.</li>
<li>Marks Foxway's ambition to be a <b>platform provider</b>, not only a processor.</li>
</ul>
<p>Separately, the <b>Foxway Digital Platform</b> (launched in 2025 within Circular Workspace Solutions) lets business customers manage IT devices and services through the entire lifecycle.</p>
<p>Benelux angle: telcos such as Odido (which launched "Toestelinruil" device trade-in in January 2026), KPN, VodafoneZiggo, Proximus, Orange Belgium, Telenet/BASE, Digi, POST, Tango and Orange Luxembourg, and retailers such as Coolblue, MediaMarkt and Belsimpel, are the natural audience for such a platform.</p>`,
  takeaway: "Circular Platform (2026): AI multi-vendor trade-in hub for telcos/retailers. Foxway Digital Platform (2025): lifecycle management for business customers.",
  qs: [
    { q: "Who is the target audience of Foxway's Circular Platform?", o: ["Retailers and telecom operators", "Only consumers", "Only data centres", "Governments only"], a: 0, x: "It is built for retailers and telcos as a multi-vendor trade-in hub." },
    { q: "What does the Foxway Digital Platform (2025) do?", o: ["Lets business customers manage devices and services across the lifecycle", "Sells refurbished phones to consumers", "Grades phones via AI for telcos", "Handles VAT filing"], a: 0, x: "It is the CWS lifecycle-management platform for business customers." },
    { q: "Which Dutch operator launched 'Toestelinruil' device trade-in in January 2026?", o: ["Odido", "KPN", "Ziggo", "Simyo"], a: 0, x: "Odido launched Toestelinruil for customers and non-customers." }
  ] },

{ id: "mobile-5", module: "mobile", title: "Rental, subscription and refurbished-as-a-service", min: 3,
  body: `<p>Beyond selling, devices can be <b>rented or subscribed</b>:</p>
<ul>
<li><b>Consumer rental/subscription</b> (e.g. Grover in Germany; Samsung rental with Foxway in the Nordics; smaller circular phone subscription start-ups in NL).</li>
<li><b>Telco device-plans</b>: in the Netherlands, since 1 May 2017, device financing above €250 in a subscription is registered at <b>BKR</b> (the credit bureau) as a loan — which pushed many consumers to <b>SIM-only + separately bought device</b>. That creates space for refurbished and for rental/leasing models.</li>
<li><b>Business mobile-as-a-service</b>: company phones delivered, managed and recovered for a monthly fee — the mobile twin of DaaS.</li>
</ul>
<p>The economics are always the same: <b>monthly price = depreciation (cost − expected residual value) + financing + services + risk + margin</b>. Every rental cycle ends in the refurbished loop.</p>`,
  takeaway: "Rental/subscription models all end in the refurbished loop. In NL, BKR registration of device credit (>€250, since 2017) pushed SIM-only.",
  qs: [
    { q: "Since 2017, Dutch telco subscriptions with device financing above what amount are registered at BKR?", o: ["€250", "€50", "€1,000", "€500"], a: 0, x: "Device credit above €250 is registered as a loan at BKR." },
    { q: "What effect did BKR registration have on the Dutch market?", o: ["More SIM-only with separately bought devices", "Fewer SIM-only subscriptions", "Ban on refurbished phones", "Higher VAT"], a: 0, x: "Consumers avoid credit registration by going SIM-only." },
    { q: "Which component is NOT part of a rental monthly price calculation?", o: ["The consumer's favourite app", "Depreciation (cost − residual value)", "Financing", "Services & risk"], a: 0, x: "Monthly price = depreciation + financing + services + risk + margin." }
  ] },

/* ───────────────────────── REGULATION ───────────────────────── */
{ id: "reg-1", module: "reg", title: "EU Ecodesign for smartphones & tablets (June 2025)", min: 5,
  body: `<p>Since <b>20 June 2025</b>, new smartphones and tablets placed on the EU market must meet Ecodesign requirements and carry an <b>energy label</b>:</p>
<ul>
<li><b>Repairability score A–E</b> on the label, plus battery endurance, drop resistance and IP rating.</li>
<li><b>Batteries</b> must withstand at least <b>800 charge cycles</b> while retaining at least 80% capacity.</li>
<li><b>Spare parts</b> available to professional repairers within <b>5–10 working days</b>, for <b>7 years</b> after the end of sales of the model.</li>
<li><b>OS updates</b> for at least <b>5 years</b> after the end of placing on the market.</li>
<li>Durability requirements (drops, scratches, dust/water), and non-discriminatory access for professional repairers to the software needed for part replacement.</li>
</ul>
<p><b>Why it matters for refurbished</b>: longer software support and parts availability extend second and third lives and support residual values — especially of Android devices, which historically lost support sooner. The EU estimated the rules would save consumers ~€20bn per year by 2030.</p>`,
  takeaway: "Ecodesign (June 2025): A–E repair score, 800 cycles, parts 7 yrs, OS updates 5+ yrs — longer lives and stronger residual values.",
  qs: [
    { q: "How many charge cycles must smartphone batteries withstand under EU Ecodesign (retaining ≥80%)?", o: ["800", "300", "2,000", "100"], a: 0, x: "At least 800 cycles while keeping ≥80% capacity." },
    { q: "For how long after end of sales must spare parts be available under the smartphone Ecodesign rules?", o: ["7 years", "2 years", "1 year", "15 years"], a: 0, x: "7 years, delivered within 5–10 working days." },
    { q: "Why are these rules positive for the refurbished market?", o: ["Longer software/parts support extends device lives and supports residual value", "They ban used devices", "They lower new-device prices", "They remove warranty"], a: 0, x: "More support = longer usable life = more value in second life." }
  ] },

{ id: "reg-2", module: "reg", title: "The Right to Repair Directive", min: 4,
  body: `<p>The EU <b>Right to Repair Directive (2024/1799)</b> had to be transposed into national law by <b>31 July 2026</b>. Many member states were late: in September 2026 the Commission opened infringement procedures against 18 member states for failing to notify full transposition.</p>
<ul>
<li><b>Manufacturers must offer repair</b> of covered products (including <b>smartphones and tablets</b>, washing machines, displays, servers…) at reasonable price, even after the legal guarantee.</li>
<li><b>Legal guarantee extended by 12 months</b> when the consumer chooses repair instead of replacement.</li>
<li><b>No blocking of independent repair</b>: no contractual, hardware or software techniques that impede repair, including use of second-hand or 3D-printed parts by independent repairers.</li>
<li><b>European Repair Information Form</b> and an online platform to find repairers.</li>
<li>Repaired goods can come with <b>refurbished replacement units</b> offered during repair.</li>
</ul>
<p>For refurbishers this means better access to parts and tools, and a growing culture of repair — which lengthens lifetimes and grows the pool of repairable devices.</p>`,
  takeaway: "Right to Repair (2024/1799, transposition by 31 July 2026): OEM repair obligations, +12 months guarantee when repairing, no anti-repair practices.",
  qs: [
    { q: "What happens to the legal guarantee if the consumer chooses repair under the Right to Repair Directive?", o: ["It is extended by 12 months", "It ends immediately", "It becomes 10 years", "It is transferred to the repairer"], a: 0, x: "Choosing repair extends the legal guarantee by 12 months." },
    { q: "By when did member states have to transpose the Right to Repair Directive?", o: ["31 July 2026", "1 January 2025", "31 December 2030", "20 June 2025"], a: 0, x: "The transposition deadline was 31 July 2026." },
    { q: "The directive allows manufacturers to use software locks to prevent independent repairers from using second-hand parts.", tf: false, x: "It prohibits practices that impede repair, including blocking second-hand parts." }
  ] },

{ id: "reg-3", module: "reg", title: "Legal guarantee on (refurbished) goods in Benelux", min: 4,
  body: `<p>EU law (Sale of Goods Directive 2019/771) gives consumers at least <b>2 years</b> of seller liability for lack of conformity. For <b>second-hand goods</b>, member states may allow a shorter agreed period, but not below <b>1 year</b>.</p>
<ul>
<li><b>Belgium</b>: 2-year legal guarantee; for second-hand goods the seller may reduce it to a minimum of 1 year <b>if clearly agreed/informed</b> — otherwise 2 years applies. It applies to professional sellers, not private sales (e.g. 2dehands/Vinted). The federal government has announced plans to extend the guarantee to 3 years when the consumer opts for repair.</li>
<li><b>Netherlands</b>: the law uses the concept of <b>conformity</b>: a product must meet the <b>reasonable expectations</b> of the buyer, which can exceed 2 years for durable goods. Refurbished shops commonly offer 12–24 months (e.g. Swappie and Coolblue offer 24 months on refurbished/Tweedekans).</li>
<li><b>Luxembourg</b>: EU 2-year minimum. Orange Luxembourg offers 2 years on refurbished (1 year manufacturer + 1 year Orange).</li>
</ul>
<p>Commercial note: <b>commercial warranty</b> (what a seller voluntarily promises) is different from the <b>legal guarantee</b>. In B2C Benelux, <b>24 months is becoming the market standard</b> for refurbished phones — below that looks weak.</p>`,
  takeaway: "EU minimum 2 years (second-hand may be cut to 1 year if agreed). In B2C Benelux, 24 months is the de facto standard for refurbished.",
  qs: [
    { q: "In Belgium, what is the minimum legal guarantee a professional seller may agree for second-hand goods?", o: ["1 year, if clearly informed", "No guarantee", "6 months", "3 years"], a: 0, x: "It can be reduced from 2 years to a minimum of 1 year with clear information." },
    { q: "Which concept does Dutch law use that can extend liability beyond 2 years for durable goods?", o: ["Reasonable expectations / conformity", "BKR registration", "Margin scheme", "Reverse charge"], a: 0, x: "Products must meet the buyer's reasonable expectations of lifetime." },
    { q: "What is becoming the de facto B2C warranty standard for refurbished phones in Benelux?", o: ["24 months", "3 months", "6 months", "5 years"], a: 0, x: "Many leading players offer 24 months." }
  ] },

{ id: "reg-4", module: "reg", title: "WEEE and producer responsibility in Benelux", min: 4,
  body: `<p>The EU <b>WEEE Directive</b> makes producers/importers financially responsible for collecting and recycling electrical and electronic waste (Extended Producer Responsibility, EPR).</p>
<ul>
<li><b>Netherlands</b>: producers organise through <b>Stichting OPEN</b> (with WEEE Nederland handling execution). The legal collection target is <b>65%</b> since 2019, but NL has been missing it — recent figures around 44% overall (≈57% excluding solar panels).</li>
<li><b>Belgium</b>: <b>Recupel</b> (since 2001) organises collection and recycling for its members.</li>
<li><b>Luxembourg</b>: <b>Ecotrel</b> (since 2004) manages and finances WEEE collection and treatment.</li>
</ul>
<p><b>What this means for refurbishers</b>: if you place devices on a national market as importer/producer (including refurbished imports), you may have registration and reporting obligations in that country. Also: <b>reuse comes before recycling</b> in the EU waste hierarchy — collected devices that are still reusable should be diverted to reuse, a strong argument in conversations with collection schemes and municipalities.</p>`,
  takeaway: "WEEE/EPR schemes: Stichting OPEN (NL), Recupel (BE), Ecotrel (LU). NL misses its 65% target. Reuse ranks above recycling.",
  qs: [
    { q: "Which organisation runs WEEE producer responsibility in Belgium?", o: ["Recupel", "Ecotrel", "Stichting OPEN", "Umicore"], a: 0, x: "Recupel was founded in 2001 to handle Belgian WEEE." },
    { q: "What is the Dutch statutory WEEE collection target since 2019?", o: ["65%", "25%", "45%", "90%"], a: 0, x: "65% — and NL has been falling short." },
    { q: "In the EU waste hierarchy, recycling ranks above reuse.", tf: false, x: "Prevention and reuse rank above recycling." }
  ] },

{ id: "reg-5", module: "reg", title: "CSRD, Omnibus and sustainability reporting", min: 4,
  body: `<p>The <b>Corporate Sustainability Reporting Directive (CSRD)</b> requires large companies to report on sustainability using European standards (ESRS), including <b>climate (Scope 1–3 emissions)</b> and <b>resource use & circular economy</b> (ESRS E5).</p>
<ul>
<li>In 2025 the EU's <b>"Omnibus" simplification</b> reduced the number of companies in scope and postponed timelines for many. But large corporates, financial institutions and public bodies still report — and push requirements down to suppliers.</li>
<li><b>IT hardware</b> falls under <b>Scope 3</b>: category 1 (purchased goods), category 2 (capital goods) and category 5 (waste). Refurbished and life-extended devices reduce these emissions.</li>
<li>Customers ask for <b>data</b>: CO₂ avoided per device, reuse vs. recycling rates, erasure certificates, material recovery.</li>
</ul>
<p>Foxway itself publishes an annual <b>Financial and Sustainability Report</b> and works towards climate targets aligned with a 1.5°C pathway. Credible, auditable data is a differentiator versus smaller players.</p>`,
  takeaway: "CSRD (narrowed by the 2025 Omnibus) still drives Scope 3 and circularity data demand. IT hardware = Scope 3 categories 1, 2 and 5.",
  qs: [
    { q: "Under which GHG Protocol scope do purchased IT devices fall for a customer?", o: ["Scope 3", "Scope 1", "Scope 2", "Scope 0"], a: 0, x: "Purchased goods and capital goods are Scope 3." },
    { q: "Which ESRS standard covers resource use and circular economy?", o: ["ESRS E5", "ESRS S1", "ESRS G1", "ESRS E3"], a: 0, x: "E5 = resource use and circular economy." },
    { q: "What did the 2025 EU Omnibus simplification do to CSRD?", o: ["Reduced the number of companies in scope and postponed timelines", "Abolished it entirely", "Extended it to all SMEs", "Made it apply only to telcos"], a: 0, x: "Scope was narrowed and deadlines delayed, but large companies still report." }
  ] },

/* ───────────────────────── SUSTAINABILITY ───────────────────────── */
{ id: "green-1", module: "green", title: "Embodied carbon: why reuse wins", min: 4,
  body: `<p>For smartphones and laptops, <b>most lifetime emissions happen before the device is switched on</b>: raw-material extraction, chip fabrication and assembly. Estimates typically put <b>production at 70–85%</b> of a phone's or laptop's lifecycle footprint.</p>
<ul>
<li>Using a device longer spreads that <b>embodied carbon</b> over more years.</li>
<li>Reusing a device avoids manufacturing a new one — industry benchmarks for avoided emissions of a refurbished laptop are roughly <b>225–316 kg CO₂e</b> per device; for smartphones the avoided figure is commonly quoted around <b>50 kg CO₂e</b> (e.g. by Vodafone NL).</li>
<li>Recycling recovers materials but saves much less than reuse — and energy-efficiency gains from newer devices rarely compensate the embodied carbon of buying new.</li>
</ul>
<p>Foxway reported avoiding <b>120,948 tonnes of CO₂</b> in 2022 through its circular flows. Always explain <b>methodology</b> (avoided emissions vs. a new-device baseline) when quoting CO₂ savings — credibility matters.</p>`,
  takeaway: "70–85% of a device's footprint is embodied (production). Reuse avoids ~50 kg CO₂e per phone and ~225–316 kg per laptop.",
  qs: [
    { q: "Roughly what share of a smartphone's/laptop's lifecycle emissions comes from production?", o: ["70–85%", "10–20%", "30–40%", "95–100%"], a: 0, x: "Most emissions are embodied in manufacturing." },
    { q: "What is a commonly cited avoided-emissions benchmark for a refurbished laptop?", o: ["225–316 kg CO₂e", "2–3 kg CO₂e", "5–10 tonnes CO₂e", "0 kg"], a: 0, x: "Benchmarks such as Defra/Atos put it around 225–316 kg." },
    { q: "How many tonnes of CO₂ did Foxway report avoiding in 2022?", o: ["120,948", "1,209", "12 million", "12,094"], a: 0, x: "Foxway reported 120,948 tonnes avoided in 2022." }
  ] },

{ id: "green-2", module: "green", title: "E-waste and critical raw materials", min: 3,
  body: `<p>E-waste is the world's fastest-growing waste stream. Devices contain <b>critical raw materials</b> (cobalt, lithium, rare earths, gallium, tantalum) and precious metals (gold, silver, palladium, copper).</p>
<ul>
<li>The EU's <b>Critical Raw Materials Act</b> aims to boost recycling and reduce dependency on third countries.</li>
<li>Recycling recovers metals but not the full value — the chip, the display and the energy used to make them are lost. That's why <b>reuse first, recycle last</b>.</li>
<li>Benelux has world-class end-of-life infrastructure: <b>Umicore</b>'s precious-metals refinery in Hoboken (Belgium) is one of the largest e-scrap recyclers globally. Proximus sends phones it collects either to reuse (via Brainscape) or to metals recovery (via Umicore).</li>
</ul>
<p>Proximus collected more than <b>1.2 million</b> used devices and accessories in 2025 (+20% versus 2024) — showing how big the collection pool is even in one mid-sized country.</p>`,
  takeaway: "Devices hold critical & precious materials; recycling recovers metals, but reuse keeps far more value. Umicore (BE) is a global e-scrap leader.",
  qs: [
    { q: "How many used devices & accessories did Proximus collect in 2025?", o: ["More than 1.2 million", "About 12,000", "About 50 million", "Around 200"], a: 0, x: ">1.2 million, about 20% more than in 2024." },
    { q: "Which EU law aims to secure supply of critical raw materials and increase recycling?", o: ["Critical Raw Materials Act", "Digital Services Act", "GDPR", "AI Act"], a: 0, x: "The CRMA addresses supply security and circularity of critical materials." },
    { q: "Recycling a phone recovers as much value as reusing it.", tf: false, x: "Recycling loses the value of components and the energy used to make them." }
  ] },

{ id: "green-3", module: "green", title: "Credible claims: avoiding greenwashing", min: 4,
  body: `<p>Sustainability claims are increasingly regulated:</p>
<ul>
<li>The EU <b>Empowering Consumers for the Green Transition</b> Directive (applying from 2026) bans generic environmental claims ("eco-friendly", "green") without recognised excellent performance, and bans claims of climate neutrality based purely on offsetting.</li>
<li>The Dutch <b>ACM</b> has been an active enforcer of sustainability claims; Belgian authorities follow EU rules too.</li>
</ul>
<p><b>How to talk about impact credibly</b>:</p>
<ol>
<li>Be specific: "this refurbished laptop avoided about X kg CO₂e compared with a new equivalent, based on [method]".</li>
<li>Show the baseline and source (LCA data, recognised benchmark).</li>
<li>Don't claim "carbon neutral" or "zero impact" — refurbished still has logistics, parts and processing emissions.</li>
<li>Report reuse vs. recycling rates transparently.</li>
</ol>
<p>Credible reporting is a <b>B2B differentiator</b>: sustainability managers must defend their numbers to auditors.</p>`,
  takeaway: "Be specific, cite methods and baselines, never claim 'zero impact'. EU rules from 2026 ban generic green claims.",
  qs: [
    { q: "Which is a credible sustainability claim?", o: ["'Avoided ~X kg CO₂e versus a new equivalent, based on [method]'", "'100% green device'", "'Zero-impact laptop'", "'Climate neutral thanks to offsets'"], a: 0, x: "Specific, sourced and method-based claims are credible." },
    { q: "Which Dutch authority actively enforces sustainability claims?", o: ["ACM", "BKR", "PIANOo", "RVO"], a: 0, x: "The ACM has issued guidance and enforcement on green claims." },
    { q: "A refurbished device has zero environmental impact.", tf: false, x: "Logistics, parts and processing still cause emissions — just far fewer than new production." }
  ] },

{ id: "green-4", module: "green", title: "Life extension as a strategy", min: 3,
  body: `<p>The simplest circular strategy is to <b>use devices longer</b>.</p>
<ul>
<li>Corporate laptops are often refreshed after 3 years; with a battery swap, SSD/RAM upgrade and redeployment, 4–6 years is realistic for many roles.</li>
<li>Phones: EU rules now require at least 5 years of OS updates after end of placing on the market; Samsung and Apple support devices for many years.</li>
<li><b>Cascading</b>: power users get new devices; their old ones are refurbished and redeployed to less demanding roles, then sold on.</li>
</ul>
<p>For Foxway customers this translates into services like <b>proactive asset management</b> — knowing which devices to refresh, redeploy or remarket at the right time to balance user experience, cost and CO₂.</p>`,
  takeaway: "Use longer, cascade devices internally, then remarket — the cheapest and greenest strategy for most fleets.",
  qs: [
    { q: "What is 'cascading' in fleet management?", o: ["Redeploying devices from demanding users to less demanding roles before remarketing", "Stacking devices in a warehouse", "Selling all devices at once", "Recycling immediately"], a: 0, x: "Cascading extends use inside the organisation." },
    { q: "With battery/SSD/RAM upgrades, a realistic corporate laptop life for many roles is…", o: ["4–6 years", "6 months", "12 years", "1 year"], a: 0, x: "Many fleets can move from 3 to 4–6 years." },
    { q: "Timing refresh, redeploy and remarket decisions well balances user experience, cost and CO₂.", tf: true, x: "That is the purpose of proactive asset management." }
  ] },

{ id: "green-5", module: "green", title: "Circular economy policy in NL and BE", min: 4,
  body: `<ul>
<li><b>Netherlands</b>: goal of a <b>100% circular economy by 2050</b> and a 50% reduction of primary raw-material use by 2030. The <b>National Circular Economy Programme 2023–2030 (NPCE)</b> sets measures; electronics are a priority product group. Government procurement is used as a lever.</li>
<li><b>Belgium</b>: federal circular economy action plans, plus strong regional policies — Flanders via <b>Circular Flanders (Vlaanderen Circulair)</b> and OVAM; Brussels and Wallonia have their own circular strategies. Many Belgian policies are regional, so know which government you are dealing with.</li>
<li><b>Luxembourg</b>: national circular economy strategy (2021) with a strong focus on data and product passports.</li>
</ul>
<p>Policy creates <b>demand signals</b>: circular procurement, subsidies/pilots, and collection targets. Following these is part of the commercial job — they tell you where budgets and tenders will come from.</p>`,
  takeaway: "NL: 100% circular by 2050 (NPCE 2023–2030). BE: federal + strong regional policies (Circular Flanders/OVAM). LU: circular strategy with product-passport focus.",
  qs: [
    { q: "What is the Dutch circular economy goal?", o: ["100% circular by 2050", "Zero cars by 2030", "50% renewable electricity by 2025", "No plastics by 2027"], a: 0, x: "The Netherlands targets a fully circular economy by 2050." },
    { q: "Which Flemish agency plays a central role in waste and circular policy?", o: ["OVAM", "ACM", "Smals", "BIPT"], a: 0, x: "OVAM is the Public Waste Agency of Flanders." },
    { q: "In Belgium, much environmental and circular policy is made at regional level.", tf: true, x: "Flanders, Wallonia and Brussels each have their own policies." }
  ] }
]);
