/* Foxway Benelux Academy — curriculum structure
 * Tracks group modules; modules group lessons (lessons live in lessons-*.js).
 * To add a module: append here, then add lessons/questions with the same module id.
 */
window.FXA = window.FXA || {};

FXA.tracks = [
  { id: "industry", name: "Industry", desc: "How the refurbished & circular tech industry works — anywhere in Europe." },
  { id: "company", name: "Foxway", desc: "Who we are, what we sell, how we win." },
  { id: "benelux", name: "Benelux", desc: "The Netherlands, Belgium and Luxembourg: players, rules, customers." },
  { id: "commercial", name: "Commercial", desc: "Turning knowledge into conversations, deals and long-term accounts." }
];

FXA.modules = [
  { id: "basics", track: "industry", order: 1, icon: "leaf", color: "#FF6A13",
    title: "Refurb Fundamentals",
    desc: "Vocabulary, grades and why used-device economics differ from new devices." },
  { id: "chain", track: "industry", order: 2, icon: "cycle", color: "#E4572E",
    title: "Value Chain & Sourcing",
    desc: "Where devices come from, who touches them, and where the money is made." },
  { id: "pricing", track: "industry", order: 3, icon: "euro", color: "#F2A541",
    title: "Pricing & Residual Value",
    desc: "Depreciation curves, launch seasonality, margin VAT and unit economics." },
  { id: "ops", track: "industry", order: 4, icon: "wrench", color: "#8A6FDF",
    title: "Operations & Quality",
    desc: "Testing, grading, data erasure, repair, yields and reverse logistics." },
  { id: "b2b", track: "industry", order: 5, icon: "building", color: "#2E86AB",
    title: "B2B Circular IT & Lifecycle",
    desc: "ITAD, Device-as-a-Service, lifecycle services and enterprise buying logic." },
  { id: "mobile", track: "industry", order: 6, icon: "phone", color: "#3BB273",
    title: "Mobile Recommerce & Trade-in",
    desc: "Telco and retail trade-in, B2B wholesale, and AI grading." },
  { id: "reg", track: "industry", order: 7, icon: "scale", color: "#5C6B73",
    title: "Regulation & Compliance",
    desc: "EU Ecodesign, Right to Repair, WEEE, GDPR, warranty and VAT rules." },
  { id: "green", track: "industry", order: 8, icon: "globe", color: "#2A9D8F",
    title: "Sustainability & Impact",
    desc: "Embodied carbon, e-waste, Scope 3 and credible impact claims." },
  { id: "foxway", track: "company", order: 9, icon: "fox", color: "#FF6A13",
    title: "Foxway: The Company",
    desc: "History, acquisitions, business areas, numbers, platforms and partners." },
  { id: "nl", track: "benelux", order: 10, icon: "flagnl", color: "#AE1C28",
    title: "The Netherlands",
    desc: "Dutch consumers, telcos, retailers, refurbishers, government and rules." },
  { id: "be", track: "benelux", order: 11, icon: "flagbe", color: "#D4A017",
    title: "Belgium & Luxembourg",
    desc: "A bilingual market with strong operators, and a small, wealthy neighbour." },
  { id: "comp", track: "benelux", order: 12, icon: "chess", color: "#1D3557",
    title: "Competitive Landscape",
    desc: "Marketplaces, specialists, ITAD players and how Foxway differs." },
  { id: "sell", track: "commercial", order: 13, icon: "handshake", color: "#E76F51",
    title: "Commercial Playbook",
    desc: "Discovery, value selling, objection handling and account growth." },
  { id: "trends", track: "commercial", order: 14, icon: "trend", color: "#6A4C93",
    title: "Trends & Outlook",
    desc: "Memory-price shock, Windows 11, AI platforms, product passports and what’s next." }
];

/* Level ladder — XP needed to reach each level (cumulative). */
FXA.levels = [
  { lvl: 1, xp: 0, title: "Newcomer" },
  { lvl: 2, xp: 150, title: "Kit Fox" },
  { lvl: 3, xp: 400, title: "Apprentice" },
  { lvl: 4, xp: 800, title: "Associate" },
  { lvl: 5, xp: 1400, title: "Specialist" },
  { lvl: 6, xp: 2200, title: "Senior Specialist" },
  { lvl: 7, xp: 3300, title: "Market Expert" },
  { lvl: 8, xp: 4700, title: "Senior Expert" },
  { lvl: 9, xp: 6500, title: "Benelux Authority" },
  { lvl: 10, xp: 8800, title: "Circular Champion" },
  { lvl: 11, xp: 11600, title: "Silver Fox" },
  { lvl: 12, xp: 15000, title: "Arctic Fox" },
  { lvl: 13, xp: 19000, title: "Legend of the Den" }
];
