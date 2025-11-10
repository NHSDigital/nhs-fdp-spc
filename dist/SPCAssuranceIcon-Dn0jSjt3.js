import o, { useId as P, useMemo as U } from "react";
import { I as q, V as H } from "./types-BjMeC7Zi.js";
var _e = /* @__PURE__ */ ((e) => (e.XmR = "XmR", e.T = "T", e.G = "G", e))(_e || {}), De = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e.Neither = "Neither", e))(De || {}), w = /* @__PURE__ */ ((e) => (e.Improvement = "improvement", e.Concern = "concern", e.Neither = "neither", e.Suppressed = "suppressed", e))(w || {});
const ne = [
  "single_point",
  "two_sigma",
  "shift",
  "trend"
  /* Trend */
];
ne.reduce(
  (e, t, a) => (e[t] = a + 1, e),
  {}
);
const Le = {
  single_point: "Single point beyond process limit",
  two_sigma: "Two of three beyond 2σ on one side",
  shift: "Sustained shift (run)",
  trend: "Monotonic trend"
}, Fe = {
  single_point: "point",
  two_sigma: "cluster",
  shift: "sustained",
  trend: "sustained"
  /* Sustained */
}, He = ne.reduce(
  (e, t, a) => (e[t] = {
    id: t,
    rank: a + 1,
    label: Le[t],
    category: Fe[t],
    participatesInRanking: !0
  }, e),
  {}
);
ne.map(
  (e) => He[e]
);
var Ae = /* @__PURE__ */ ((e) => (e.SinglePointAbove = "single_above", e.SinglePointBelow = "single_below", e.TwoOfThreeAbove = "two_of_three_above", e.TwoOfThreeBelow = "two_of_three_below", e.FourOfFiveAbove = "four_of_five_above", e.FourOfFiveBelow = "four_of_five_below", e.ShiftHigh = "shift_high", e.ShiftLow = "shift_low", e.TrendIncreasing = "trend_inc", e.TrendDecreasing = "trend_dec", e.FifteenInnerThird = "fifteen_inner_third", e))(Ae || {}), Z = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.None = "none", e))(Z || {}), Te = /* @__PURE__ */ ((e) => (e.Shift = "shift", e.Trend = "trend", e.Point = "point", e))(Te || {});
const qe = {
  singlePointUp: {
    tooltip: "Single point above upper control limit",
    narration: "Single point beyond a control limit"
  },
  singlePointDown: {
    tooltip: "Single point below lower control limit",
    narration: "Single point beyond a control limit"
  },
  twoOfThreeUp: {
    tooltip: "Two of three points beyond +2σ",
    narration: "Two of three points beyond two sigma (same side)"
  },
  twoOfThreeDown: {
    tooltip: "Two of three points beyond -2σ",
    narration: "Two of three points beyond two sigma (same side)"
  },
  fourOfFiveUp: {
    tooltip: "Four of five points beyond +1σ",
    narration: "Four of five points beyond one sigma (same side)"
  },
  fourOfFiveDown: {
    tooltip: "Four of five points beyond -1σ",
    narration: "Four of five points beyond one sigma (same side)"
  },
  shiftUp: {
    tooltip: "Shift: run of points above centre line",
    narration: "Shift (run on one side of mean)"
  },
  shiftDown: {
    tooltip: "Shift: run of points below centre line",
    narration: "Shift (run on one side of mean)"
  },
  trendUp: {
    tooltip: "Trend: consecutive increasing points",
    narration: "Trend (consecutive increases)"
  },
  trendDown: {
    tooltip: "Trend: consecutive decreasing points",
    narration: "Trend (consecutive decreases)"
  }
};
function Ze(e) {
  if (!e) return [];
  const t = [];
  return e.specialCauseSinglePointUp && t.push(
    "singlePointUp"
    /* SinglePointUp */
  ), e.specialCauseSinglePointDown && t.push(
    "singlePointDown"
    /* SinglePointDown */
  ), e.specialCauseTwoOfThreeUp && t.push(
    "twoOfThreeUp"
    /* TwoOfThreeUp */
  ), e.specialCauseTwoOfThreeDown && t.push(
    "twoOfThreeDown"
    /* TwoOfThreeDown */
  ), e.specialCauseFourOfFiveUp && t.push(
    "fourOfFiveUp"
    /* FourOfFiveUp */
  ), e.specialCauseFourOfFiveDown && t.push(
    "fourOfFiveDown"
    /* FourOfFiveDown */
  ), e.specialCauseShiftUp && t.push(
    "shiftUp"
    /* ShiftUp */
  ), e.specialCauseShiftDown && t.push(
    "shiftDown"
    /* ShiftDown */
  ), e.specialCauseTrendUp && t.push(
    "trendUp"
    /* TrendUp */
  ), e.specialCauseTrendDown && t.push(
    "trendDown"
    /* TrendDown */
  ), t;
}
function Qe(e) {
  switch (e) {
    case w.Improvement:
      return "Improvement signal";
    case w.Concern:
      return "Concern signal";
    case w.Neither:
      return "Common cause variation";
    case w.Suppressed:
      return null;
    // suppressed / not enough data
    default:
      return null;
  }
}
function et(e) {
  switch (e) {
    case Z.Pass:
      return "Target met";
    case Z.Fail:
      return "Target not met";
    default:
      return null;
  }
}
function tt(e, t, a) {
  if (e == null || !Number.isFinite(t) || t <= 0) return null;
  const c = Math.abs((a - e) / t);
  return c < 1 ? "Within 1σ" : c < 2 ? "Between 1–2σ" : c < 3 ? "Between 2–3σ" : "Beyond 3σ";
}
const b = {
  improvement: {
    token: "var(--nhs-fdp-color-data-viz-spc-improvement, #00B0F0)",
    hex: "#00B0F0"
  },
  concern: {
    token: "var(--nhs-fdp-color-data-viz-spc-concern, #E46C0A)",
    hex: "#E46C0A"
  },
  neither: {
    token: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)",
    hex: "#A6A6A6"
  },
  suppressed: {
    token: "var(--nhs-fdp-color-data-viz-spc-no-judgement, #490092)",
    hex: "#490092"
  }
};
function rt(e) {
  return e ? b[e]?.token ?? b.neither.token : b.neither.token;
}
function nt(e) {
  return e ? b[e]?.hex ?? b.neither.hex : b.neither.hex;
}
var Q = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.Uncertain = "uncertain", e))(Q || {});
const Ne = {
  pass: "#00B0F0",
  // blue
  fail: "#E46C0A",
  // orange
  uncertain: "#A6A6A6"
  // grey
}, Be = {
  pass: "P",
  fail: "F",
  uncertain: "?"
};
var h = /* @__PURE__ */ ((e) => (e.HigherIsBetter = "higher_is_better", e.LowerIsBetter = "lower_is_better", e.ContextDependent = "context_dependent", e))(h || {}), i = /* @__PURE__ */ ((e) => (e.Higher = "higher", e.Lower = "lower", e))(i || {}), S = /* @__PURE__ */ ((e) => (e.Improving = "improving", e.Deteriorating = "deteriorating", e.No_Judgement = "no_judgement", e.None = "none", e))(S || {}), r = /* @__PURE__ */ ((e) => (e.SpecialCauseImproving = "special_cause_improving", e.SpecialCauseDeteriorating = "special_cause_deteriorating", e.CommonCause = "common_cause", e.SpecialCauseNoJudgement = "special_cause_no_judgement", e))(r || {});
const Oe = (e) => {
  const t = e.replace("#", ""), a = parseInt(t.slice(0, 2), 16) / 255, c = parseInt(t.slice(2, 4), 16) / 255, u = parseInt(t.slice(4, 6), 16) / 255, f = [a, c, u].map(
    (s) => s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * f[0] + 0.7152 * f[1] + 0.0722 * f[2] < 0.55 ? "#ffffff" : "#212b32";
}, ie = {
  special_cause_deteriorating: {
    hex: b.concern.hex,
    judgement: "deteriorating",
    label: "Special Cause (Deteriorating)",
    description: "Deteriorating variation detected (special cause) relative to baseline."
  },
  special_cause_improving: {
    hex: b.improvement.hex,
    judgement: "improving",
    label: "Special Cause (Improving)",
    description: "Improving variation detected (special cause) relative to baseline."
  },
  common_cause: {
    hex: b.neither.hex,
    judgement: "none",
    label: "Common Cause",
    description: "Common cause variation only – no special cause detected."
  },
  special_cause_no_judgement: {
    hex: b.suppressed.hex,
    judgement: "no_judgement",
    label: "Special Cause (No Judgement)",
    description: "Special cause detected without assigning improving/deteriorating judgement."
  }
};
Object.values(ie).forEach((e) => {
  e.text || (e.text = Oe(e.hex));
});
const je = (e) => ie[e], de = (e) => ie[e].judgement || "none", me = {
  special: {
    higher: [
      { cx: 77.5, cy: 158.5 },
      { cx: 114, cy: 175 },
      { cx: 150.5, cy: 158.5 },
      { cx: 188, cy: 125 },
      { cx: 225, cy: 137 }
    ],
    lower: [
      { cx: 77.5, cy: 139.5 },
      { cx: 114, cy: 124.5 },
      { cx: 150.5, cy: 139.5 },
      { cx: 188, cy: 175.5 },
      { cx: 224.5, cy: 162 }
    ]
  },
  common: [
    { cx: 76.5, cy: 149.5 },
    { cx: 113, cy: 179.5 },
    { cx: 149.5, cy: 117 },
    { cx: 187, cy: 171 },
    { cx: 223.5, cy: 158 }
  ]
};
function ze(e, t) {
  let a;
  return e === "common_cause" ? a = me.common : a = me.special[t === "lower" ? "lower" : "higher"], a.map((c) => ({ ...c }));
}
let ee = null;
try {
  ee = require("@fergusbisset/nhs-fdp-design-system/dist/js/tokens.json")?.color?.["data-viz"]?.spc || null;
} catch {
}
const v = (e, t) => {
  if (!ee) return t;
  const a = e.split(".");
  let c = ee;
  for (const f of a) {
    if (c == null) break;
    c = c[f];
  }
  const u = c;
  return u == null ? t : typeof u == "string" || typeof u == "number" ? String(u) : u.$value != null ? String(u.$value) : u.value != null ? String(u.value) : t;
}, he = () => ({
  // Lightened defaults (previous 0.18 -> 0.12, 0.06 -> 0.03) to reduce intensity of wash.
  start: v("gradient.stop.start-opacity", "0.12"),
  mid: v("gradient.stop.mid-opacity", "0.03"),
  end: v("gradient.stop.end-opacity", "0"),
  triStart: v(
    "gradient.stop.triangle-start-opacity",
    v("gradient.stop.start-opacity", "0.12")
  ),
  triMid: v(
    "gradient.stop.triangle-mid-opacity",
    v("gradient.stop.mid-opacity", "0.03")
  ),
  triEnd: v(
    "gradient.stop.triangle-end-opacity",
    v("gradient.stop.end-opacity", "0")
  )
}), R = {
  improvement: "improvement",
  concern: "concern",
  noJudgement: "no-judgement",
  common: "common-cause"
}, W = {
  improvement: "#00B0F0",
  concern: "#E46C0A",
  noJudgement: "#490092",
  common: "#A6A6A6"
}, Ue = () => v(R.improvement, W.improvement), Me = () => v(R.concern, W.concern), Pe = () => v(R.noJudgement, W.noJudgement), Re = () => v(R.common, W.common);
function We(e) {
  switch (e) {
    case r.SpecialCauseImproving:
      return Ue();
    case r.SpecialCauseDeteriorating:
      return Me();
    case r.SpecialCauseNoJudgement:
      return Pe();
    case r.CommonCause:
    default:
      return Re();
  }
}
var Je = /* @__PURE__ */ ((e) => (e.Concern = "concern", e.Improvement = "improvement", e.NoJudgement = "noJudgement", e.Common = "common", e))(Je || {}), M = /* @__PURE__ */ ((e) => (e.Classic = "classic", e.Triangle = "triangle", e.TriangleWithRun = "triangleWithRun", e))(M || {}), te = /* @__PURE__ */ ((e) => (e.Direction = "direction", e.Polarity = "polarity", e))(te || {});
const re = (e) => {
  const t = () => {
    globalThis.__spcIconDeprecationEmitted || (console.warn(
      "[SPCVariationIcon] Deprecated payload shape detected. Migrate to { variationIcon, improvementDirection, specialCauseNeutral?, trend? }."
    ), globalThis.__spcIconDeprecationEmitted = !0);
  };
  if (e.variationIcon !== void 0) {
    const n = e;
    let s;
    n.improvementDirection !== void 0 ? s = n.improvementDirection === q.Up ? h.HigherIsBetter : n.improvementDirection === q.Down ? h.LowerIsBetter : h.ContextDependent : n.polarity && (s = n.polarity);
    let p;
    const C = n.variationIcon;
    if (C === w.Improvement || C === w.Concern || C === w.Neither || C === w.Suppressed)
      C === w.Improvement ? p = r.SpecialCauseImproving : C === w.Concern ? p = r.SpecialCauseDeteriorating : C === w.Neither ? p = r.CommonCause : p = r.SpecialCauseNoJudgement;
    else
      switch (n.variationIcon) {
        case H.ImprovementHigh:
        case H.ImprovementLow:
          p = r.SpecialCauseImproving;
          break;
        case H.ConcernHigh:
        case H.ConcernLow:
          p = r.SpecialCauseDeteriorating;
          break;
        case H.NeitherHigh:
        case H.NeitherLow:
          p = n.specialCauseNeutral ? r.SpecialCauseNoJudgement : r.CommonCause;
          break;
        case H.CommonCause:
          p = r.CommonCause;
          break;
        default:
          p = r.SpecialCauseNoJudgement;
          break;
      }
    let g = n.trend;
    return g || (p === r.SpecialCauseImproving ? g = s === h.LowerIsBetter ? i.Lower : i.Higher : p === r.SpecialCauseDeteriorating ? g = s === h.LowerIsBetter ? i.Higher : i.Lower : p === r.SpecialCauseNoJudgement ? n.highSideSignal && !n.lowSideSignal ? g = i.Higher : n.lowSideSignal && !n.highSideSignal ? g = i.Lower : g = i.Higher : g = i.Higher), { state: p, direction: g, polarity: s ?? h.ContextDependent };
  }
  if (e.state !== void 0) {
    t();
    const n = e;
    let s = n.trend;
    return !s && (n.state === r.SpecialCauseImproving || n.state === r.SpecialCauseDeteriorating) && n.polarity && (n.state === r.SpecialCauseImproving ? s = n.polarity === h.LowerIsBetter ? i.Lower : i.Higher : s = n.polarity === h.LowerIsBetter ? i.Higher : i.Lower), s || (n.state === r.SpecialCauseImproving ? s = i.Higher : n.state === r.SpecialCauseDeteriorating ? s = i.Lower : s = i.Higher), {
      state: n.state,
      direction: s,
      polarity: n.polarity ?? h.ContextDependent
    };
  }
  const a = e;
  t();
  const u = {
    [S.Improving]: r.SpecialCauseImproving,
    [S.Deteriorating]: r.SpecialCauseDeteriorating,
    [S.No_Judgement]: r.SpecialCauseNoJudgement,
    [S.None]: r.CommonCause
  }[a.judgement];
  let f;
  return a.judgement === S.Improving ? f = a.polarity === h.LowerIsBetter ? i.Lower : i.Higher : a.judgement === S.Deteriorating ? f = a.polarity === h.LowerIsBetter ? i.Higher : i.Lower : f = a.trend ?? i.Higher, { state: u, direction: f, polarity: a.polarity };
};
function Xe(e, t) {
  const { state: a, direction: c, polarity: u } = re(e), f = de(a), n = c === i.Higher ? "above" : "below", s = c === i.Higher ? "upwards" : "downwards", p = (() => {
    switch (u) {
      case h.HigherIsBetter:
        return "For this measure, higher values are better.";
      case h.LowerIsBetter:
        return "For this measure, lower values are better.";
      default:
        return "Direction of improvement is context dependent.";
    }
  })();
  return [
    (() => {
      switch (f) {
        case S.Improving:
          return `Special cause improvement: recent data show a sustained run ${n} the mean (unlikely due to random variation).`;
        case S.Deteriorating:
          return `Special cause deterioration: recent data show a sustained run ${n} the mean (unlikely due to random variation).`;
        case S.No_Judgement:
          return `Special cause detected (no value judgement): recent data show a change in level, trending ${s}.`;
        case S.None:
        default:
          return "Common cause variation: points vary randomly around the mean; no special cause detected.";
      }
    })(),
    p,
    null,
    null,
    null,
    null,
    null
  ].filter(Boolean).join(" ");
}
const V = (e, t, a, c, u, f) => /* @__PURE__ */ o.createElement("defs", null, c && /* @__PURE__ */ o.createElement("filter", { id: t, filterUnits: "objectBoundingBox" }, /* @__PURE__ */ o.createElement("feGaussianBlur", { stdDeviation: "3" }), /* @__PURE__ */ o.createElement("feOffset", { dx: "0", dy: "15", result: "blur" }), /* @__PURE__ */ o.createElement("feFlood", { floodColor: "rgb(150,150,150)", floodOpacity: "1" }), /* @__PURE__ */ o.createElement("feComposite", { in2: "blur", operator: "in", result: "colorShadow" }), /* @__PURE__ */ o.createElement("feComposite", { in: "SourceGraphic", in2: "colorShadow", operator: "over" })), u && /* @__PURE__ */ o.createElement("linearGradient", { id: a, x1: "0%", y1: "0%", x2: "100%", y2: "100%" }, f.map((n) => /* @__PURE__ */ o.createElement(
  "stop",
  {
    key: n.offset,
    offset: n.offset,
    stopColor: e,
    stopOpacity: parseFloat(n.opacity)
  }
)))), $e = ({
  data: e,
  precomputed: t,
  improvementDirection: a,
  size: c = 44,
  ariaLabel: u,
  showLetter: f = !0,
  dropShadow: n = !0,
  gradientWash: s = !1,
  variant: p = M.Classic,
  runLength: C = 0,
  // Default changed to 'polarity' so letters reflect desirable direction (H = Higher is better, L = Lower is better)
  letterMode: g = te.Polarity,
  letterOverride: O,
  ...N
}) => {
  const D = P(), y = P(), {
    start: J,
    mid: X,
    end: ge,
    triStart: oe,
    triMid: ae,
    triEnd: se
  } = he(), { state: l, direction: d, polarity: ce, ariaInput: ve } = U(() => {
    if (t && t.lastVariationIcon !== void 0) {
      const E = {
        variationIcon: t.lastVariationIcon,
        improvementDirection: a ?? q.Neither,
        // Infer neutral special-cause when VariationState was mapped as Neither from engine NeitherHigh/Low
        specialCauseNeutral: t.latestState === r.SpecialCauseNoJudgement
        // Side hints not strictly needed for improvement/concern, only for neutral arrow orientation
      }, { state: _, direction: k, polarity: L } = re(E);
      return { state: _, direction: k, polarity: L, ariaInput: E };
    }
    const { state: I, direction: A, polarity: z } = re(e);
    return { state: I, direction: A, polarity: z, ariaInput: e };
  }, [e, t, a]), m = U(() => je(l), [l]), le = U(() => de(l), [l]), Ce = le === S.Improving || le === S.Deteriorating;
  let x = "";
  f && Ce && (g === te.Polarity ? ce === h.HigherIsBetter ? x = "H" : ce === h.LowerIsBetter ? x = "L" : x = "" : x = d === i.Higher ? "H" : "L"), O !== void 0 && (x = O);
  const ue = l !== r.CommonCause, ye = l === r.SpecialCauseNoJudgement, B = v("common-cause", "#A6A6A6"), Se = ue ? m.hex : B, j = U(
    () => ze(l, d),
    [l, d]
  ), $ = u || `${m.label}${x ? d === i.Higher ? " – Higher" : " – Lower" : ""}`, Y = Xe(ve);
  if (p === M.TriangleWithRun) {
    const E = [
      [150, 90],
      [100, 190],
      [200, 190]
    ], _ = [
      [150, 140 + 100 / 2],
      [150 - 100 / 2, 140 - 100 / 2],
      [150 + 100 / 2, 140 - 100 / 2]
    ];
    let k = null;
    l === r.SpecialCauseImproving || l === r.SpecialCauseDeteriorating ? k = /* @__PURE__ */ o.createElement(
      "polygon",
      {
        points: (d === i.Higher ? E : _).map((T) => T.join(",")).join(" "),
        fill: m.hex,
        stroke: m.hex,
        strokeWidth: 6,
        transform: d === i.Higher ? "translate(0, -8)" : "translate(0, 15)"
      }
    ) : l === r.SpecialCauseNoJudgement && (k = /* @__PURE__ */ o.createElement(
      "polygon",
      {
        points: d === i.Higher ? E.map((T) => T.join(",")).join(" ") : _.map((T) => T.join(",")).join(" "),
        fill: m.hex,
        stroke: m.hex,
        strokeWidth: 6,
        transform: d === i.Higher ? "translate(0,-7)" : "translate(0,14)"
      }
    ));
    const L = Math.max(0, Math.min(5, Math.floor(C || 0))), G = l === r.CommonCause ? 160 : d === i.Higher ? 220 : 70, F = 10, pe = 26, we = 150 - 2 * pe, Ee = l === r.CommonCause ? B : We(l), ke = Array.from({ length: 5 }).map((T, K) => {
      const fe = (l === r.SpecialCauseImproving || l === r.SpecialCauseDeteriorating) && K >= 5 - L ? Ee : B;
      return /* @__PURE__ */ o.createElement(
        "circle",
        {
          key: K,
          cx: we + K * pe,
          cy: G,
          r: F,
          fill: fe,
          stroke: fe,
          strokeWidth: 1
        }
      );
    }), be = V(
      m.hex,
      D,
      y,
      n,
      s,
      [
        { offset: "0%", opacity: oe },
        { offset: "75%", opacity: ae },
        { offset: "100%", opacity: se }
      ]
    ), Ie = l === r.CommonCause || d === i.Higher ? "translate(0,-10)" : "translate(0,25)";
    return /* @__PURE__ */ o.createElement(
      "svg",
      {
        width: c,
        height: c,
        viewBox: "0 0 300 300",
        role: "img",
        "aria-label": $,
        "aria-description": Y,
        ...N
      },
      be,
      /* @__PURE__ */ o.createElement(
        "circle",
        {
          stroke: "none",
          fill: s ? `url(#${y})` : "#ffffff",
          ...n ? { filter: `url(#${D})` } : {},
          cx: "150",
          cy: "150",
          r: "120"
        }
      ),
      /* @__PURE__ */ o.createElement(
        "circle",
        {
          stroke: m.hex,
          strokeWidth: 15,
          strokeMiterlimit: 10,
          fill: "none",
          cx: "150",
          cy: "150",
          r: "120"
        }
      ),
      /* @__PURE__ */ o.createElement("g", { transform: Ie }, k, x && /* @__PURE__ */ o.createElement(
        "text",
        {
          fill: "#fff",
          fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
          fontWeight: "bold",
          fontSize: 64,
          x: "150",
          y: d === i.Higher ? 155 : 145,
          textAnchor: "middle",
          dominantBaseline: "middle"
        },
        x
      ), ke)
    );
  }
  if (p === M.Triangle) {
    const E = [
      [150, 75],
      [75, 225],
      [225, 225]
    ], _ = [
      [150, 150 + 150 / 2],
      [150 - 150 / 2, 150 - 150 / 2],
      [150 + 150 / 2, 150 - 150 / 2]
    ], k = [
      [150 - 150 / 2, 150 + 150 / 2],
      [150 + 150 / 2, 150 + 150 / 2]
    ];
    let L = null;
    l === r.SpecialCauseImproving || l === r.SpecialCauseDeteriorating ? L = /* @__PURE__ */ o.createElement(
      "polygon",
      {
        points: (d === i.Higher ? E : _).map((F) => F.join(",")).join(" "),
        fill: m.hex,
        stroke: m.hex,
        strokeWidth: 8,
        transform: d === i.Higher ? "translate(0, -10)" : "translate(0, 10)"
      }
    ) : l === r.SpecialCauseNoJudgement ? L = /* @__PURE__ */ o.createElement(
      "polygon",
      {
        points: d === i.Higher ? E.map((F) => F.join(",")).join(" ") : _.map((F) => F.join(",")).join(" "),
        fill: m.hex,
        stroke: m.hex,
        strokeWidth: 8,
        transform: d === i.Higher ? "translate(0, -15)" : "translate(0, 15)"
      }
    ) : l === r.CommonCause && (L = /* @__PURE__ */ o.createElement(
      "line",
      {
        x1: k[0][0],
        y1: k[0][1],
        x2: k[1][0],
        y2: k[1][1],
        stroke: m.hex,
        strokeWidth: 32,
        strokeLinecap: "square",
        transform: "translate(0, -75)"
      }
    ));
    const G = V(
      m.hex,
      D,
      y,
      n,
      s,
      [
        { offset: "0%", opacity: oe },
        { offset: "65%", opacity: ae },
        { offset: "100%", opacity: se }
      ]
    );
    return /* @__PURE__ */ o.createElement(
      "svg",
      {
        width: c,
        height: c,
        viewBox: "0 0 300 300",
        role: "img",
        "aria-label": $,
        "aria-description": Y,
        ...N
      },
      G,
      /* @__PURE__ */ o.createElement(
        "circle",
        {
          stroke: "none",
          fill: s ? `url(#${y})` : "#ffffff",
          ...n ? { filter: `url(#${D})` } : {},
          cx: "150",
          cy: "150",
          r: "120"
        }
      ),
      /* @__PURE__ */ o.createElement(
        "circle",
        {
          stroke: m.hex,
          strokeWidth: 15,
          strokeMiterlimit: 10,
          fill: "none",
          cx: "150",
          cy: "150",
          r: "120"
        }
      ),
      L,
      x && (l === r.SpecialCauseImproving || l === r.SpecialCauseDeteriorating) && /* @__PURE__ */ o.createElement(
        "text",
        {
          fill: "#fff",
          fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
          fontWeight: "bold",
          fontSize: 100,
          x: "150",
          y: d === i.Higher ? "170" : "140",
          textAnchor: "middle",
          dominantBaseline: "middle"
        },
        x
      )
    );
  }
  const xe = V(
    m.hex,
    D,
    y,
    n,
    s,
    [
      { offset: "0%", opacity: J },
      { offset: "65%", opacity: X },
      { offset: "100%", opacity: ge }
    ]
  );
  return /* @__PURE__ */ o.createElement(
    "svg",
    {
      width: c,
      height: c,
      viewBox: "0 0 300 300",
      role: "img",
      "aria-label": $,
      "aria-description": Y,
      ...N
    },
    xe,
    /* @__PURE__ */ o.createElement(
      "circle",
      {
        stroke: "none",
        fill: s ? `url(#${y})` : "#ffffff",
        ...n ? { filter: `url(#${D})` } : {},
        cx: "150",
        cy: "150",
        r: "120"
      }
    ),
    /* @__PURE__ */ o.createElement(
      "circle",
      {
        stroke: m.hex,
        strokeWidth: 15,
        strokeMiterlimit: 10,
        fill: "none",
        cx: "150",
        cy: "150",
        r: "120"
      }
    ),
    x && /* @__PURE__ */ o.createElement(
      "text",
      {
        fill: m.hex,
        fontFamily: "Arial-BoldMT, Arial, 'Helvetica Neue', Helvetica, sans-serif",
        fontWeight: "bold",
        fontSize: 176,
        transform: "translate(86.67, 54) scale(0.5, 0.5)",
        textAnchor: "end"
      },
      /* @__PURE__ */ o.createElement("tspan", { x: "120", y: d === i.Lower ? "340" : "155" }, x)
    ),
    ye ? /* @__PURE__ */ o.createElement(
      "path",
      {
        "aria-hidden": "true",
        fillRule: "evenodd",
        stroke: "none",
        fill: m.hex,
        ...d === i.Lower ? { transform: "rotate(90 150 150)" } : { transform: "translate(-5 0) rotate(0 150 150)" },
        d: "M 90.26,185.42 L 149.31,126.37 127.44,104.51 209.81,90.66 195.96,173.02 174.09,151.16 115.05,210.2 90.26,185.42 Z M 90.26,185.42"
      }
    ) : /* @__PURE__ */ o.createElement(o.Fragment, null, j.length === 5 && /* @__PURE__ */ o.createElement(
      "path",
      {
        "aria-hidden": "true",
        fill: "none",
        stroke: B,
        strokeWidth: 12,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        opacity: 0.9,
        d: `M ${j.map((I) => `${I.cx} ${I.cy}`).join(" L ")}`
      }
    ), j.map((I, A) => {
      const E = A >= j.length - 2 && ue ? Se : B, _ = E;
      return /* @__PURE__ */ o.createElement(
        "circle",
        {
          key: A,
          stroke: _,
          strokeWidth: 2,
          strokeMiterlimit: 10,
          fill: E,
          cx: I.cx,
          cy: I.cy,
          r: 16
        }
      );
    }))
  );
};
$e.displayName = "SPCVariationIcon";
const Ye = ({
  status: e,
  size: t = 44,
  ariaLabel: a,
  dropShadow: c = !0,
  colourOverride: u,
  gradientWash: f = !1,
  letterOverride: n,
  showTrendLines: s = !0,
  ...p
}) => {
  const C = P(), g = P(), { start: O, mid: N, end: D } = he(), y = u || Ne[e], J = (n || Be[e]).slice(0, 2), X = a || `Assurance ${e}`;
  return /* @__PURE__ */ React.createElement(
    "svg",
    {
      width: t,
      height: t,
      viewBox: "0 0 300 300",
      role: "img",
      "aria-label": X,
      ...p
    },
    /* @__PURE__ */ React.createElement("defs", null, c && /* @__PURE__ */ React.createElement("filter", { id: C, filterUnits: "objectBoundingBox" }, /* @__PURE__ */ React.createElement("feGaussianBlur", { stdDeviation: "3" }), /* @__PURE__ */ React.createElement("feOffset", { dx: "-1", dy: "15", result: "blur" }), /* @__PURE__ */ React.createElement("feFlood", { floodColor: "rgb(166,166,166)", floodOpacity: "1" }), /* @__PURE__ */ React.createElement("feComposite", { in2: "blur", operator: "in", result: "colorShadow" }), /* @__PURE__ */ React.createElement("feComposite", { in: "SourceGraphic", in2: "colorShadow", operator: "over" })), f && /* @__PURE__ */ React.createElement("linearGradient", { id: g, x1: "0%", y1: "0%", x2: "100%", y2: "100%" }, /* @__PURE__ */ React.createElement("stop", { offset: "0%", stopColor: y, stopOpacity: parseFloat(O) }), /* @__PURE__ */ React.createElement("stop", { offset: "65%", stopColor: y, stopOpacity: parseFloat(N) }), /* @__PURE__ */ React.createElement("stop", { offset: "100%", stopColor: "#ffffff", stopOpacity: parseFloat(D) }))),
    /* @__PURE__ */ React.createElement(
      "circle",
      {
        stroke: "none",
        fill: f ? `url(#${g})` : "#ffffff",
        ...c ? { filter: `url(#${C})` } : {},
        cx: "150",
        cy: "150",
        r: "120"
      }
    ),
    /* @__PURE__ */ React.createElement(
      "text",
      {
        fill: y,
        fontFamily: "Arial-BoldMT, Arial, 'Helvetica Neue', Helvetica, sans-serif",
        fontWeight: "bold",
        fontSize: 176,
        x: 0,
        y: 0,
        transform: "translate(121.01, 32) scale(0.5, 0.5)",
        textAnchor: "middle"
      },
      /* @__PURE__ */ React.createElement("tspan", { x: 60, y: 184 }, J)
    ),
    s && /* @__PURE__ */ React.createElement(React.Fragment, null, e === Q.Fail ? /* @__PURE__ */ React.createElement(
      "path",
      {
        id: "fail-line",
        stroke: y,
        strokeWidth: 9.5,
        strokeMiterlimit: 9.5,
        strokeDasharray: "35,10",
        strokeDashoffset: 0,
        fill: "none",
        d: "M 33,143 L 268,143"
      }
    ) : e === Q.Uncertain ? /* @__PURE__ */ React.createElement(
      "path",
      {
        id: "uncertain-line",
        stroke: "rgb(166, 166, 166)",
        strokeWidth: 9.5,
        strokeMiterlimit: 9.5,
        strokeDasharray: "16.5,10",
        strokeDashoffset: 0,
        fill: "none",
        d: "M 36,174 L 266,174"
      }
    ) : /* @__PURE__ */ React.createElement(
      "path",
      {
        id: "pass-line",
        stroke: y,
        strokeWidth: 9.5,
        strokeMiterlimit: 9.5,
        strokeDasharray: "35,10",
        strokeDashoffset: 0,
        fill: "none",
        d: "M 48,204 L 254,204"
      }
    ), /* @__PURE__ */ React.createElement(
      "path",
      {
        id: "data-sparkline",
        stroke: "rgb(166, 166, 166)",
        strokeWidth: 12,
        strokeMiterlimit: 12,
        fill: "none",
        d: "M 59.9,187.91 C 72.79,171.72 87.33,158.06 104.4,157.83 121.91,158.58 140.94,187.85 153.4,189.91 164.1,192.12 163.78,171.38 169.17,170.53 172.87,169.55 174.88,187.45 184.94,189.24 197,191.86 230.54,184.47 239.01,185.9"
      }
    ), /* @__PURE__ */ React.createElement(
      "circle",
      {
        stroke: y,
        strokeWidth: 15,
        strokeMiterlimit: 10,
        fill: "none",
        cx: "150",
        cy: "150",
        r: "120"
      }
    ))
  );
};
Ye.displayName = "SPCAssuranceIcon";
export {
  Q as A,
  Te as B,
  _e as C,
  i as D,
  De as I,
  te as L,
  h as M,
  He as R,
  $e as S,
  S as V,
  Ye as a,
  r as b,
  de as c,
  w as d,
  Z as e,
  M as f,
  je as g,
  Ze as h,
  et as i,
  rt as j,
  Ae as k,
  Je as l,
  b as m,
  nt as n,
  qe as r,
  Qe as v,
  tt as z
};
//# sourceMappingURL=SPCAssuranceIcon-Dn0jSjt3.js.map
