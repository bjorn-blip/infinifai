/* Numbers Lab — procedurally generated calculation drills (infinite practice).
 * Each generator(rng) returns { q, o:[4 strings], a:index, x, module }.
 * rng() returns a float in [0,1).
 */
window.FXA = window.FXA || {};
(function () {
  const eur = (n, d) => "€" + Number(n).toLocaleString("en-GB", { minimumFractionDigits: d || 0, maximumFractionDigits: d || 0 });
  const pick = (rng, arr) => arr[Math.floor(rng() * arr.length)];
  const between = (rng, lo, hi, step) => { step = step || 1; const n = Math.floor((hi - lo) / step) + 1; return lo + Math.floor(rng() * n) * step; };

  // Build 4 unique options from correct value + distractors, shuffled deterministically.
  function options(rng, correct, distractors, fmt) {
    const seen = new Set([fmt(correct)]);
    const opts = [fmt(correct)];
    for (const d of distractors) {
      const s = fmt(d);
      if (!seen.has(s) && isFinite(d)) { seen.add(s); opts.push(s); }
      if (opts.length === 4) break;
    }
    let k = 1.13;
    while (opts.length < 4) { const s = fmt(correct * k); if (!seen.has(s)) { seen.add(s); opts.push(s); } k += 0.17; }
    const order = [0, 1, 2, 3].sort(() => rng() - 0.5);
    return { o: order.map(i => opts[i]), a: order.indexOf(0) };
  }

  const models = ["iPhone 15 128GB", "iPhone 14 Pro 256GB", "iPhone 13 128GB", "Galaxy S24 256GB", "iPhone 16 128GB", "Galaxy A55 128GB", "iPhone 15 Pro 256GB"];
  const laptops = ["ThinkPad T14 Gen 3", "EliteBook 840 G9", "Latitude 5430", "MacBook Air M2", "ThinkPad X1 Carbon Gen 10"];

  FXA.generators = [
    { id: "marginvat", name: "Margin-scheme VAT", module: "pricing", gen(rng) {
      const rate = pick(rng, [21, 21, 21, 17]);
      const buy = between(rng, 150, 600, 10);
      const sell = buy + between(rng, 40, 220, 5);
      const margin = sell - buy;
      const vat = margin * rate / (100 + rate);
      const country = rate === 17 ? "Luxembourg (17% VAT)" : pick(rng, ["the Netherlands (21% VAT)", "Belgium (21% VAT)"]);
      const { o, a } = options(rng, vat, [margin * rate / 100, sell * rate / (100 + rate), margin * (100 - rate) / 100], v => eur(v, 2));
      return { q: `In ${country}, a refurbisher buys a ${pick(rng, models)} from a consumer for ${eur(buy)} and sells it for ${eur(sell)} under the margin scheme. How much VAT is due?`, o, a,
        x: `Margin = ${eur(sell)} − ${eur(buy)} = ${eur(margin)}. VAT is included in the margin: ${eur(margin)} × ${rate}/${100 + rate} = ${eur(vat, 2)}.` };
    } },
    { id: "recovery", name: "Recovery value", module: "b2b", gen(rng) {
      const n = between(rng, 5, 60, 5) * 100;
      const reuse = between(rng, 60, 90, 5);
      const net = between(rng, 40, 160, 10);
      const val = n * reuse / 100 * net;
      const { o, a } = options(rng, val, [n * net, n * (100 - reuse) / 100 * net, val / 10], v => eur(v));
      return { q: `A customer retires ${n.toLocaleString("en-GB")} laptops. You expect ${reuse}% to be reusable at an average net recovery of ${eur(net)} per reused unit. What is the expected recovery value?`, o, a,
        x: `${n.toLocaleString("en-GB")} × ${reuse}% × ${eur(net)} = ${eur(val)}. Non-reusable units go to parts/recycling (not counted here).` };
    } },
    { id: "co2", name: "CO₂ avoided", module: "green", gen(rng) {
      const n = between(rng, 2, 40, 2) * 100;
      const kg = pick(rng, [225, 250, 275, 300, 316]);
      const t = n * kg / 1000;
      const { o, a } = options(rng, t, [n * kg, t / 10, n * kg / 100], v => v.toLocaleString("en-GB", { maximumFractionDigits: 1 }) + " t");
      return { q: `Using a benchmark of ${kg} kg CO₂e avoided per reused laptop, how much is avoided by reusing ${n.toLocaleString("en-GB")} laptops?`, o, a,
        x: `${n.toLocaleString("en-GB")} × ${kg} kg = ${(n * kg).toLocaleString("en-GB")} kg = ${t.toLocaleString("en-GB", { maximumFractionDigits: 1 })} tonnes CO₂e. Always state the benchmark and method.` };
    } },
    { id: "daas", name: "DaaS monthly fee", module: "b2b", gen(rng) {
      const cost = between(rng, 900, 1800, 50);
      const months = pick(rng, [24, 36, 36, 48]);
      const rvPct = between(rng, 15, 35, 5);
      const rv = cost * rvPct / 100;
      const svc = between(rng, 4, 12, 1);
      const fee = (cost - rv) / months + svc;
      const { o, a } = options(rng, fee, [cost / months + svc, (cost - rv) / months, (cost + rv) / months + svc], v => eur(v, 2));
      return { q: `A laptop costs ${eur(cost)}. Term: ${months} months. Expected residual value at end: ${rvPct}% of cost. Services: ${eur(svc)}/month. Ignoring financing and margin, what is the monthly fee?`, o, a,
        x: `(${eur(cost)} − ${eur(rv)}) / ${months} + ${eur(svc)} = ${eur(fee, 2)}. A higher residual value lowers the fee — that's why RV knowledge is a competitive edge.` };
    } },
    { id: "repair", name: "Repair decision", module: "ops", gen(rng) {
      const cost = between(rng, 25, 90, 5);
      const bPrice = between(rng, 250, 600, 10);
      const uplift = between(rng, 10, 120, 5);
      const net = uplift - cost;
      const correct = net > 0 ? `Yes — net gain ${eur(net)}` : (net === 0 ? "Break-even — no gain" : `No — net loss ${eur(-net)}`);
      const pool = [`Yes — net gain ${eur(Math.abs(net) + 15)}`, `No — net loss ${eur(Math.abs(net) + 10)}`, "Break-even — no gain", `Yes — net gain ${eur(uplift)}`, `No — net loss ${eur(cost)}`];
      const opts = [correct]; for (const p of pool) { if (opts.length < 4 && !opts.includes(p)) opts.push(p); }
      const order = [0, 1, 2, 3].sort(() => rng() - 0.5);
      return { q: `A grade-B device sells for ${eur(bPrice)}. A ${eur(cost)} repair (battery/screen) would make it grade A, selling for ${eur(bPrice + uplift)}. Worth it (ignoring time)?`,
        o: order.map(i => opts[i]), a: order.indexOf(0),
        x: `Uplift ${eur(uplift)} − repair ${eur(cost)} = ${net >= 0 ? "+" : "−"}${eur(Math.abs(net))}. Repair only when the value uplift exceeds cost (and time).` };
    } },
    { id: "launchdrop", name: "Launch-season drop", module: "pricing", gen(rng) {
      const v = between(rng, 250, 750, 10);
      const pct = pick(rng, [6, 8, 9, 10, 12]);
      const nv = v * (1 - pct / 100);
      const { o, a } = options(rng, nv, [v * (1 + pct / 100), v - pct, v * pct / 100], x => eur(x, 2));
      return { q: `A trade-in value of ${eur(v)} for a ${pick(rng, models)} drops ${pct}% after the September launch. New value?`, o, a,
        x: `${eur(v)} × (1 − ${pct}%) = ${eur(nv, 2)}. Around launches values can move several % in weeks.` };
    } },
    { id: "gradeMix", name: "Grade-mix revenue", module: "ops", gen(rng) {
      const n = between(rng, 2, 20, 1) * 100;
      const A = between(rng, 30, 60, 5), B = between(rng, 20, 40, 5), C = 100 - A - B;
      const pA = between(rng, 300, 500, 10), pB = pA - between(rng, 50, 100, 10), pC = pB - between(rng, 60, 120, 10);
      const rev = n * (A * pA + B * pB + C * pC) / 100;
      const { o, a } = options(rng, rev, [n * pA, n * (pA + pB + pC) / 3, n * pB], v => eur(v));
      return { q: `${n.toLocaleString("en-GB")} phones are graded ${A}% A (${eur(pA)}), ${B}% B (${eur(pB)}), ${C}% C (${eur(pC)}). Expected revenue?`, o, a,
        x: `${n} × (${A}%×${pA} + ${B}%×${pB} + ${C}%×${pC}) = ${eur(rev)}. Quoting on a realistic grade mix avoids disappointment.` };
    } },
    { id: "vatnet", name: "VAT vs margin offer", module: "pricing", gen(rng) {
      const qty = between(rng, 50, 400, 50);
      const exVat = between(rng, 250, 450, 10);
      const disc = pick(rng, [5, 6, 8, 10]);
      const marginPrice = exVat * 1.21 * (1 - disc / 100);
      const correct = "Normal-VAT offer — net " + eur(exVat) + " vs " + eur(marginPrice, 0) + " per unit";
      const opts = [correct, "Margin offer — it's " + disc + "% cheaper", "Both cost the same", "Margin offer — VAT is refunded later"];
      const order = [0, 1, 2, 3].sort(() => rng() - 0.5);
      return { q: `A VAT-registered Belgian reseller buys ${qty} laptops. Offer 1: ${eur(exVat)} + 21% VAT (deductible). Offer 2: margin scheme at ${eur(marginPrice, 0)} all-in (${disc}% below Offer 1's gross price). Which is cheaper for the reseller?`,
        o: order.map(i => opts[i]), a: order.indexOf(0),
        x: `The reseller reclaims the 21% VAT on Offer 1, so its net cost is ${eur(exVat)}. Margin-scheme VAT is not deductible, so Offer 2 costs ${eur(marginPrice, 0)}.` };
    } },
    { id: "aging", name: "Inventory aging", module: "pricing", gen(rng) {
      const v = between(rng, 300, 800, 10);
      const pct = pick(rng, [1, 1.5, 2]);
      const w = between(rng, 3, 8, 1);
      const nv = v * Math.pow(1 - pct / 100, w);
      const { o, a } = options(rng, nv, [v, v * (1 - pct * w / 10), v - pct * w], x => eur(x, 0));
      return { q: `A device worth ${eur(v)} loses ${pct}% of value per week in stock. Roughly what is it worth after ${w} weeks?`, o, a,
        x: `${eur(v)} × (1 − ${pct}%)^${w} ≈ ${eur(nv, 0)}. Stock ages like fresh produce — turn it fast.` };
    } },
    { id: "commission", name: "Marketplace net", module: "comp", gen(rng) {
      const p = between(rng, 200, 900, 10);
      const c = pick(rng, [8, 10, 12, 15]);
      const net = p * (1 - c / 100);
      const { o, a } = options(rng, net, [p * c / 100, p, p * (1 - c / 1000)], x => eur(x, 2));
      return { q: `A refurbished ${pick(rng, laptops.concat(models))} sells on a marketplace for ${eur(p)} with a ${c}% commission. What does the seller receive before other costs?`, o, a,
        x: `${eur(p)} × (1 − ${c}%) = ${eur(net, 2)}.` };
    } },
    { id: "depr", name: "Residual value", module: "pricing", gen(rng) {
      const launch = between(rng, 800, 1500, 50);
      const retained = pick(rng, [42, 55, 58, 60, 65, 70]);
      const val = launch * retained / 100;
      const { o, a } = options(rng, val, [launch * (100 - retained) / 100, launch - retained, launch * retained / 1000], x => eur(x, 0));
      return { q: `A phone launched at ${eur(launch)} retains ${retained}% of its value after 12 months. What is it worth?`, o, a,
        x: `${eur(launch)} × ${retained}% = ${eur(val, 0)}. iPhones typically retain more value than Android flagships.` };
    } }
  ];
})();
