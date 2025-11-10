import { d as V, C as J, I as U, V as N, S as k, P as H, e as E, M as q, T, f as F } from "./types-BjMeC7Zi.js";
const x = {
  [V.SinglePoint]: 1,
  [V.TwoSigma]: 2,
  [V.Shift]: 3,
  [V.Trend]: 4
}, j = 3.267, te = 2.66, G = 0.2777;
function S(e) {
  return typeof e == "number" && !Number.isNaN(e);
}
function W(e) {
  return e.reduce((n, t) => n + t, 0) / (e.length || 1);
}
function Y(e, n) {
  const t = new Array(e.length).fill(null);
  let f = null;
  for (let g = 0; g < e.length; g++) {
    const a = e[g];
    if (!(n[g] || !S(a))) {
      if (f !== null) {
        const m = e[f];
        S(m) && (t[g] = Math.abs(a - m));
      }
      f = g;
    }
  }
  return t;
}
function X(e, n) {
  const t = e.filter(S);
  if (!t.length) return { mrMean: NaN, mrUcl: NaN };
  let f = t.slice();
  if (n) {
    const a = W(f), m = j * a;
    f = f.filter((r) => r <= m);
  }
  const g = W(f);
  return { mrMean: g, mrUcl: j * g };
}
function z(e, n) {
  if (!S(e) || !S(n))
    return {
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null
    };
  const t = te * n, f = 2 / 3 * t, g = 1 / 3 * t;
  return {
    upperProcessLimit: e + t,
    lowerProcessLimit: e - t,
    upperTwoSigma: e + f,
    lowerTwoSigma: e - f,
    upperOneSigma: e + g,
    lowerOneSigma: e - g
  };
}
function ie(e, n, t, f) {
  if (e === J.T) {
    const u = n.map((M) => S(M) && M > 0 ? Math.pow(M, G) : null), h = Y(u, t), d = X(h, f), v = u.filter((M, L) => !t[L] && S(M)), c = v.length ? W(v) : NaN, p = z(c, d.mrMean), C = (M) => S(M) && M > 0 ? Math.pow(M, 1 / G) : null, w = S(p.upperProcessLimit) ? C(p.upperProcessLimit) : null, I = S(p.lowerProcessLimit) && p.lowerProcessLimit > 0 ? C(p.lowerProcessLimit) : null, b = S(p.upperTwoSigma) ? C(p.upperTwoSigma) : null, o = S(p.lowerTwoSigma) && p.lowerTwoSigma > 0 ? C(p.lowerTwoSigma) : null, D = S(p.upperOneSigma) ? C(p.upperOneSigma) : null, y = S(p.lowerOneSigma) && p.lowerOneSigma > 0 ? C(p.lowerOneSigma) : null;
    return {
      mean: S(c) && c > 0 ? C(c) : null,
      mr: h,
      mrMean: d.mrMean,
      mrUcl: d.mrUcl,
      upperProcessLimit: w,
      lowerProcessLimit: I,
      upperTwoSigma: b,
      lowerTwoSigma: o,
      upperOneSigma: D,
      lowerOneSigma: y
    };
  }
  if (e === J.G) {
    const u = n.filter((P, R) => !t[R] && S(P)), h = u.length ? W(u) : NaN, d = S(h) ? 1 / (h + 1) : NaN, v = (P) => {
      if (!S(d) || d <= 0 || d >= 1) return NaN;
      const R = Math.ceil(Math.log(1 - P) / Math.log(1 - d)) - 1;
      return Math.max(0, R);
    }, c = 135e-5, p = 1 - 135e-5, C = 0.02275, w = 1 - 0.02275, I = 0.158655, b = 1 - 0.158655, o = v(p), D = v(c), y = v(w), M = v(C), L = v(b), O = v(I);
    return {
      mean: S(h) ? h : null,
      mr: new Array(n.length).fill(null),
      mrMean: NaN,
      mrUcl: NaN,
      upperProcessLimit: S(o) ? o : null,
      lowerProcessLimit: S(D) ? D : null,
      upperTwoSigma: S(y) ? y : null,
      lowerTwoSigma: S(M) ? M : null,
      upperOneSigma: S(L) ? L : null,
      lowerOneSigma: S(O) ? O : null
    };
  }
  if (e !== J.XmR)
    return {
      mean: NaN,
      mr: new Array(n.length).fill(null),
      mrMean: NaN,
      mrUcl: NaN,
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null
    };
  const g = Y(n, t), a = g.filter(S), m = a.length ? W(a) : NaN, r = S(m) ? 3.267 * m : NaN;
  let s = NaN;
  {
    const u = n.reduce((h, d, v) => {
      if (t[v] || !S(d)) return h;
      if (!f)
        return h.push(d), h;
      const c = g[v];
      return (c === null || !S(r) || S(c) && c <= r) && h.push(d), h;
    }, []);
    s = u.length ? W(u) : NaN;
  }
  const l = X(g, f), i = z(s, l.mrMean);
  return {
    mean: s,
    mr: g,
    mrMean: l.mrMean,
    mrUcl: l.mrUcl,
    ...i
  };
}
function oe(e, n) {
  const t = e.map((s, l) => l).filter((s) => !e[s].ghost && S(e[s].value)), f = (s) => e[s], g = n.shiftPoints, a = n.trendPoints;
  let m = [], r = [];
  for (const s of t) {
    const l = f(s);
    if (!S(l.mean) || !S(l.value) ? (m = [], r = []) : l.value > l.mean ? (m.push(s), r = []) : l.value < l.mean ? (r.push(s), m = []) : (m = [], r = []), m.length >= g)
      for (const i of m) f(i).shiftUp = !0;
    if (r.length >= g)
      for (const i of r) f(i).shiftDown = !0;
  }
  for (let s = 0; s <= t.length - 3; s++) {
    const i = t.slice(s, s + 3).map(f);
    if (!i.every((b) => S(b.value) && S(b.mean)))
      continue;
    const u = i[0].mean, h = i.every((b) => b.value > u), d = i.every((b) => b.value < u);
    if (!h && !d)
      continue;
    const v = i[0].upperTwoSigma ?? 1 / 0, c = i[0].lowerTwoSigma ?? -1 / 0, p = i[0].upperProcessLimit ?? 1 / 0, C = i[0].lowerProcessLimit ?? -1 / 0, w = i.filter((b) => n.twoSigmaIncludeAboveThree ? b.value > v : b.value > v && b.value <= p), I = i.filter((b) => n.twoSigmaIncludeAboveThree ? b.value < c : b.value < c && b.value >= C);
    h && w.length >= 2 && w.forEach((b) => b.twoSigmaUp = !0), d && I.length >= 2 && I.forEach((b) => b.twoSigmaDown = !0);
  }
  if (n.enableFourOfFiveRule)
    for (let s = 0; s <= t.length - 5; s++) {
      const i = t.slice(s, s + 5).map(f);
      if (!i.every((w) => S(w.value) && S(w.mean)))
        continue;
      const u = i[0].mean, h = i.every((w) => w.value > u), d = i.every((w) => w.value < u);
      if (!h && !d)
        continue;
      const v = i[0].upperOneSigma ?? 1 / 0, c = i[0].lowerOneSigma ?? -1 / 0, p = i.filter((w) => w.value > v), C = i.filter((w) => w.value < c);
      h && p.length >= 4 && p.forEach((w) => w.fourOfFiveUp = !0), d && C.length >= 4 && C.forEach((w) => w.fourOfFiveDown = !0);
    }
  for (let s = 0; s <= t.length - a; s++) {
    const l = t.slice(s, s + a), i = l.map(f);
    if (!i.every((d) => S(d.value)))
      continue;
    let u = !0, h = !0;
    for (let d = 1; d < i.length && (i[d].value > i[d - 1].value || (u = !1), i[d].value < i[d - 1].value || (h = !1), !(!u && !h)); d++)
      ;
    u && l.forEach((d) => f(d).trendUp = !0), h && l.forEach((d) => f(d).trendDown = !0);
  }
}
function ee(e) {
  const n = [], t = [];
  e.singlePointUp && n.push({
    id: V.SinglePoint,
    rank: x[V.SinglePoint]
  }), e.singlePointDown && t.push({
    id: V.SinglePoint,
    rank: x[V.SinglePoint]
  }), e.twoSigmaUp && n.push({
    id: V.TwoSigma,
    rank: x[V.TwoSigma]
  }), e.twoSigmaDown && t.push({
    id: V.TwoSigma,
    rank: x[V.TwoSigma]
  }), e.shiftUp && n.push({ id: V.Shift, rank: x[V.Shift] }), e.shiftDown && t.push({ id: V.Shift, rank: x[V.Shift] }), e.trendUp && n.push({ id: V.Trend, rank: x[V.Trend] }), e.trendDown && t.push({ id: V.Trend, rank: x[V.Trend] });
  const f = n.reduce((m, r) => Math.max(m, r.rank), 0), g = t.reduce((m, r) => Math.max(m, r.rank), 0), a = f > g ? H.Upwards : g > f ? H.Downwards : H.Same;
  return { up: n, dn: t, upMax: f, dnMax: g, primeDirection: a };
}
function K(e, n) {
  const t = n === U.Up ? e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp : n === U.Down ? e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown : !1, f = n === U.Up ? e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown : n === U.Down ? e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp : !1;
  return { aligned: t, opposite: f };
}
function Q(e, n, t, f = !1, g, a, m = !1) {
  const { up: r, dn: s, upMax: l, dnMax: i, primeDirection: u } = ee(e);
  e.primeDirection = u;
  const h = e.specialCauseImprovementValue, d = e.specialCauseConcernValue;
  e.specialCauseImprovementValue !== null && e.specialCauseConcernValue !== null && le({ row: e, metric: n, metricConflictRule: t, preferImprovementWhenConflict: f, preferTrendWhenConflict: m, primeDirection: u, conflictStrategy: g, ruleHierarchy: a }), n === U.Up ? e.variationIcon = e.specialCauseImprovementValue !== null ? N.ImprovementHigh : e.specialCauseConcernValue !== null ? N.ConcernLow : N.CommonCause : n === U.Down ? e.variationIcon = e.specialCauseImprovementValue !== null ? N.ImprovementLow : e.specialCauseConcernValue !== null ? N.ConcernHigh : N.CommonCause : e.variationIcon = N.CommonCause;
  const v = e.specialCauseImprovementValue !== null ? k.Up : e.specialCauseConcernValue !== null ? k.Down : void 0, c = v === k.Up ? l : v === k.Down ? i : Math.max(l, i);
  e.primeRank = c || void 0;
  const p = v === k.Up ? r.find((C) => C.rank === c) : v === k.Down ? s.find((C) => C.rank === c) : void 0;
  return e.primeRuleId = p?.id, { originalImprovement: h, originalConcern: d };
}
function le(e) {
  const {
    row: n,
    metric: t,
    metricConflictRule: f,
    preferImprovementWhenConflict: g,
    preferTrendWhenConflict: a,
    primeDirection: m = n.primeDirection ?? H.Same,
    conflictStrategy: r,
    ruleHierarchy: s
  } = e;
  if (a && n.specialCauseImprovementValue !== null && n.specialCauseConcernValue !== null) {
    const i = !!n.trendUp, u = !!n.trendDown;
    if (t === U.Up) {
      if (i && !u) {
        n.specialCauseConcernValue = null;
        return;
      }
      if (!i && u) {
        n.specialCauseImprovementValue = null;
        return;
      }
    } else if (t === U.Down) {
      if (u && !i) {
        n.specialCauseConcernValue = null;
        return;
      }
      if (!u && i) {
        n.specialCauseImprovementValue = null;
        return;
      }
    }
  }
  const l = g ? E.PreferImprovement : r ?? E.SqlPrimeThenRule;
  if (l === E.PreferImprovement) {
    t === U.Up ? n.specialCauseConcernValue = null : t === U.Down && (n.specialCauseImprovementValue = null);
    return;
  }
  if (l === E.RuleHierarchy) {
    const i = s ?? [V.Trend, V.Shift, V.TwoSigma, V.SinglePoint], { up: u, dn: h } = ee(n);
    for (const d of i) {
      const v = u.some((p) => p.id === d), c = h.some((p) => p.id === d);
      if (v && !c) {
        t === U.Up ? n.specialCauseConcernValue = null : n.specialCauseImprovementValue = null;
        return;
      }
      if (c && !v) {
        t === U.Up ? n.specialCauseImprovementValue = null : n.specialCauseConcernValue = null;
        return;
      }
      if (v && c) {
        t === U.Up ? f === q.Improvement ? n.specialCauseConcernValue = null : n.specialCauseImprovementValue = null : t === U.Down && (f === q.Improvement ? n.specialCauseConcernValue = null : n.specialCauseImprovementValue = null);
        return;
      }
    }
  }
  m === H.Upwards ? t === U.Up ? n.specialCauseConcernValue = null : t === U.Down && (n.specialCauseImprovementValue = null) : m === H.Downwards ? t === U.Up ? n.specialCauseImprovementValue = null : t === U.Down && (n.specialCauseConcernValue = null) : f === q.Improvement ? n.specialCauseConcernValue = null : n.specialCauseImprovementValue = null;
}
var B = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e))(B || {});
function re(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
}
function se(e) {
  const n = re(e);
  if (n > 0) return "Above";
  if (n < 0) return "Below";
}
function Z(e) {
  const n = [], t = (m, r, s) => ({
    segStart: m,
    segSide: r,
    minV: s,
    maxV: s,
    maxAbsDelta: 0
    // caller sets initial delta immediately after
  }), f = (m, r, s, l, i) => ({
    minV: Math.min(s, m),
    maxV: Math.max(l, m),
    maxAbsDelta: Math.max(i, r)
  }), g = (m, r, s, l, i, u, h, d) => {
    m.push({
      trendDirection: d,
      start: r,
      end: s,
      side: l,
      minValue: i,
      maxValue: u,
      maxAbsDeltaFromMean: h
    });
  };
  let a = 0;
  for (; a < e.length; ) {
    const m = e[a];
    if (!m || m.value == null || m.ghost || !m.trendUp && !m.trendDown) {
      a++;
      continue;
    }
    const r = m.trendUp ? "Up" : m.trendDown ? "Down" : void 0;
    let s = a, l = a;
    for (; l < e.length; l++) {
      const C = e[l];
      if (!C || C.value == null || C.ghost || !(r === "Up" ? C.trendUp : C.trendDown)) break;
    }
    const i = l - 1, u = [];
    let h, d, v = 1 / 0, c = -1 / 0, p = 0;
    for (let C = s; C <= i; C++) {
      const w = e[C];
      if (w.value == null) continue;
      const I = w.value - (w.mean ?? 0), b = se(I);
      if (!b) {
        h !== void 0 && (g(u, h, C - 1, d, v, c, p, r), h = void 0, d = void 0, v = 1 / 0, c = -1 / 0, p = 0);
        continue;
      }
      if (h === void 0)
        ({ segStart: h, segSide: d, minV: v, maxV: c, maxAbsDelta: p } = (() => {
          const o = t(C, b, w.value);
          return {
            segStart: o.segStart,
            segSide: o.segSide,
            minV: o.minV,
            maxV: o.maxV,
            maxAbsDelta: Math.abs(I)
          };
        })());
      else if (b !== d)
        g(u, h, C - 1, d, v, c, p, r), { segStart: h, segSide: d, minV: v, maxV: c, maxAbsDelta: p } = (() => {
          const o = t(C, b, w.value);
          return {
            segStart: o.segStart,
            segSide: o.segSide,
            minV: o.minV,
            maxV: o.maxV,
            maxAbsDelta: Math.abs(I)
          };
        })();
      else {
        const o = f(w.value, Math.abs(I), v, c, p);
        v = o.minV, c = o.maxV, p = o.maxAbsDelta;
      }
    }
    h !== void 0 && g(u, h, i, d, v, c, p, r), n.push({ trendDirection: r, start: s, end: i, segments: u }), a = i + 1;
  }
  return n;
}
function ae(e) {
  if (e === U.Up) return "Above";
  if (e === U.Down) return "Below";
}
function ue(e) {
  if (e)
    return e === "Above" ? "Below" : "Above";
}
function $(e, n) {
  const t = n.strategy ?? T.CrossingAfterFavourable, f = ae(n.metricImprovement), g = ue(f), a = [];
  for (const m of e) {
    if (!f) {
      if (t === T.ExtremeFavourable || t === T.CrossingAfterFavourable) {
        const r = m.segments;
        if (r.length === 0) continue;
        let s = r[0];
        for (const l of r)
          l.maxAbsDeltaFromMean > s.maxAbsDeltaFromMean && (s = l);
        a.push(s);
      }
      continue;
    }
    if (t === T.FavourableSide) {
      a.push(...m.segments.filter((r) => r.side === f));
      continue;
    }
    if (t === T.UnfavourableSide) {
      a.push(...m.segments.filter((r) => r.side === g));
      continue;
    }
    if (t === T.CrossingAfterFavourable) {
      const r = m.segments;
      let s;
      for (let l = 0; l < r.length; l++) {
        const i = r[l];
        if (i.side === f && l > 0 && r[l - 1].side !== f) {
          s = i;
          break;
        }
      }
      if (!s) {
        const l = r.filter((i) => i.side === f);
        l.length > 0 && (s = l.reduce(
          (i, u) => u.end - u.start > i.end - i.start ? u : i,
          l[0]
        ));
      }
      s && a.push(s);
      continue;
    }
    if (t === T.CrossingAfterUnfavourable) {
      const r = m.segments;
      let s;
      for (let l = 0; l < r.length; l++) {
        const i = r[l];
        if (i.side === g && l > 0 && r[l - 1].side !== g) {
          s = i;
          break;
        }
      }
      if (!s) {
        const l = r.filter((i) => i.side === g);
        l.length > 0 && (s = l.reduce(
          (i, u) => u.end - u.start > i.end - i.start ? u : i,
          l[0]
        ));
      }
      s && a.push(s);
      continue;
    }
    if (t === T.ExtremeFavourable) {
      const r = m.segments.filter((l) => l.side === f);
      if (r.length === 0) continue;
      const s = r.reduce(
        (l, i) => i.maxAbsDeltaFromMean > l.maxAbsDeltaFromMean ? i : l
      );
      a.push(s);
      continue;
    }
    if (t === T.ExtremeUnfavourable) {
      const r = m.segments.filter((l) => l.side === g);
      if (r.length === 0) continue;
      const s = r.reduce((l, i) => i.maxAbsDeltaFromMean > l.maxAbsDeltaFromMean ? i : l);
      a.push(s);
      continue;
    }
    if (t === T.FirstFavourable) {
      const r = m.segments.find((s) => s.side === f);
      r && a.push(r);
      continue;
    }
    if (t === T.FirstUnfavourable) {
      const r = m.segments.find((s) => s.side === g);
      r && a.push(r);
      continue;
    }
    if (t === T.LongestFavourable) {
      const r = m.segments.filter((l) => l.side === f);
      if (r.length === 0) continue;
      const s = r.reduce(
        (l, i) => i.end - i.start > l.end - l.start ? i : l
      );
      a.push(s);
      continue;
    }
    if (t === T.LongestUnfavourable) {
      const r = m.segments.filter((l) => l.side === g);
      if (r.length === 0) continue;
      const s = r.reduce((l, i) => i.end - i.start > l.end - l.start ? i : l);
      a.push(s);
      continue;
    }
    if (t === T.LastFavourable) {
      const r = m.segments.filter((s) => s.side === f);
      if (r.length === 0) continue;
      a.push(r[r.length - 1]);
      continue;
    }
    if (t === T.LastUnfavourable) {
      const r = m.segments.filter((s) => s.side === g);
      if (r.length === 0) continue;
      a.push(r[r.length - 1]);
      continue;
    }
  }
  return a;
}
var A = /* @__PURE__ */ ((e) => (e.Common = "Common", e.Improvement = "Improvement", e.Concern = "Concern", e.NoJudgement = "NoJudgement", e))(A || {}), _ = /* @__PURE__ */ ((e) => (e.Ungated = "Ungated", e.Gated = "Gated", e))(_ || {});
function ce(e) {
  const n = !!(e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp), t = !!(e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown);
  return { upAny: n, downAny: t };
}
function ne(e, n) {
  const t = n.metricImprovement, f = n.trendVisualMode ?? "Ungated", g = n.enableNeutralNoJudgement ?? !0;
  return e.map((a) => {
    if (!a || a.value == null || a.ghost) return "Common";
    const { upAny: m, downAny: r } = ce(a);
    if (m && r) return "Improvement";
    switch (a.variationIcon) {
      case N.ImprovementHigh:
      case N.ImprovementLow:
        return "Improvement";
      case N.ConcernHigh:
      case N.ConcernLow:
        return "Concern";
      case N.NeitherHigh:
      case N.NeitherLow: {
        if (f === "Ungated" && t !== U.Neither) {
          if (m && !r)
            return t === U.Up ? "Improvement" : "Concern";
          if (r && !m)
            return t === U.Down ? "Improvement" : "Concern";
        }
        return g ? "NoJudgement" : "Common";
      }
      default:
        return "Common";
    }
  });
}
function fe(e, n, t) {
  const f = t?.mode ?? "Disabled";
  if (!e.length) return [];
  let g = ne(e, {
    metricImprovement: n,
    trendVisualMode: _.Ungated,
    enableNeutralNoJudgement: !0
  });
  if (f !== "RecalcCrossing" || n === U.Neither) return g;
  const a = Math.max(0, t?.preWindow ?? 2), m = Math.max(0, t?.postWindow ?? 3), r = t?.prePolarity ?? "Opposite", s = (u, h) => {
    if (u < 0 || u >= g.length) return;
    const d = g[u];
    (d === A.Common || d === A.NoJudgement) && (g[u] = h);
  }, l = (u) => {
    if (u == null) return null;
    const h = e.reduce((v, c) => (c.partitionId === u && typeof c.value == "number" && !c.ghost && v.push(c.value), v), []);
    return h.length ? h.reduce((v, c) => v + c, 0) / h.length : null;
  }, i = Array.isArray(t?.boundaryIndices) && t.boundaryIndices.length ? t.boundaryIndices.slice().filter((u) => Number.isFinite(u)) : e.reduce((u, h, d) => {
    if (d === 0) return u;
    const v = e[d - 1];
    return v && h && h.partitionId !== v.partitionId && u.push(d), u;
  }, []);
  for (const u of i) {
    const h = e[u - 1], d = e[u];
    if (!h || !d)
      continue;
    let v = u - 1;
    for (; v - 1 >= 0 && e[v - 1] && e[v - 1].partitionId === h.partitionId; )
      v--;
    let c = u;
    for (; c + 1 < e.length && e[c + 1] && e[c + 1].partitionId === d.partitionId; )
      c++;
    let p = null;
    for (let D = u - 1; D >= 0; D--) {
      const y = e[D];
      if (y.partitionId !== h.partitionId) break;
      if (typeof y.mean == "number") {
        p = y.mean;
        break;
      }
    }
    let C = null;
    for (let D = u; D < e.length; D++) {
      const y = e[D];
      if (y.partitionId !== d.partitionId) break;
      if (typeof y.mean == "number") {
        C = y.mean;
        break;
      }
    }
    if (p == null && (p = l(h.partitionId ?? null)), C == null && (C = l(d.partitionId ?? null)), p == null || C == null)
      continue;
    const w = C - p, I = n === U.Up ? w > 0 : w < 0, b = I ? A.Improvement : A.Concern, o = r === "Same" ? b : I ? A.Concern : A.Improvement;
    for (let D = 1; D <= a; D++) {
      const y = u - D;
      if (y < v) break;
      s(y, o);
    }
    for (let D = 0; D < m; D++) {
      const y = u + D;
      if (y > c) break;
      s(y, b);
    }
  }
  return g;
}
function me(e) {
  if (!e) return {};
  if (typeof e == "object" && ("minimumPoints" in e || "shiftPoints" in e || "trendPoints" in e))
    return e;
  const n = e, t = {};
  if (n.thresholds) {
    const f = n.thresholds;
    f.minimumPoints != null && (t.minimumPoints = f.minimumPoints), f.shiftPoints != null && (t.shiftPoints = f.shiftPoints), f.trendPoints != null && (t.trendPoints = f.trendPoints), f.excludeMovingRangeOutliers != null && (t.excludeMovingRangeOutliers = f.excludeMovingRangeOutliers);
  }
  if (n.eligibility && n.eligibility.chartLevel != null && (t.chartLevelEligibility = n.eligibility.chartLevel), n.parity && (n.parity.trendAcrossPartitions != null && (t.trendAcrossPartitions = n.parity.trendAcrossPartitions), n.parity.twoSigmaIncludeAboveThree != null && (t.twoSigmaIncludeAboveThree = n.parity.twoSigmaIncludeAboveThree), n.parity.enableFourOfFiveRule != null && (t.enableFourOfFiveRule = n.parity.enableFourOfFiveRule)), n.conflict && (n.conflict.preferImprovementWhenConflict != null && (t.preferImprovementWhenConflict = n.conflict.preferImprovementWhenConflict), n.conflict.preferTrendWhenConflict != null && (t.preferTrendWhenConflict = n.conflict.preferTrendWhenConflict), n.conflict.strategy != null && (t.conflictStrategy = n.conflict.strategy), n.conflict.ruleHierarchy != null && (t.ruleHierarchy = n.conflict.ruleHierarchy), n.conflict.metricRuleOnTie != null && (t.metricConflictRule = n.conflict.metricRuleOnTie)), n.trend?.segmentation) {
    const f = n.trend.segmentation;
    f.mode != null && (t.trendSegmentationMode = f.mode), f.favourableSegmentation != null && (t.trendFavourableSegmentation = f.favourableSegmentation), f.strategy != null && (t.trendSegmentationStrategy = f.strategy), f.dominatesHighlightedWindow != null && (t.trendDominatesHighlightedWindow = f.dominatesHighlightedWindow);
  }
  return t;
}
function pe(e) {
  const { chartType: n, metricImprovement: t, data: f } = e, g = me(e.settings), a = {
    minimumPoints: 13,
    shiftPoints: 6,
    trendPoints: 6,
    excludeMovingRangeOutliers: !1,
    metricConflictRule: q.Improvement,
    trendAcrossPartitions: !1,
    twoSigmaIncludeAboveThree: !1,
    enableFourOfFiveRule: !1,
    preferImprovementWhenConflict: !1,
    conflictStrategy: E.SqlPrimeThenRule,
    ruleHierarchy: void 0,
    chartLevelEligibility: !1,
    trendFavourableSegmentation: !1,
    trendSegmentationMode: F.Off,
    trendSegmentationStrategy: T.CrossingAfterUnfavourable,
    trendDominatesHighlightedWindow: !1,
    ...g
  }, m = g?.trendSegmentationMode || (g?.trendFavourableSegmentation === !0 ? F.Always : g?.trendFavourableSegmentation === !1 ? F.Off : a.trendSegmentationMode), r = f.map((c, p) => ({
    rowId: p + 1,
    x: c.x,
    value: S(c.value) ? c.value : null,
    ghost: !!c.ghost,
    baseline: !!c.baseline,
    target: S(c.target) ? c.target : null
  })), s = [];
  let l = [];
  for (const c of r)
    c.baseline && l.length && (s.push(l), l = []), l.push(c);
  l.length && s.push(l);
  const i = [], u = (a.trendFavourableSegmentation || m !== F.Off) && !a.preferImprovementWhenConflict, h = r.filter((c) => !c.ghost && S(c.value)).length, d = !!a.chartLevelEligibility && h >= a.minimumPoints;
  let v = 0;
  for (const c of s) {
    v++;
    const p = c.map((o) => o.value), C = c.map((o) => o.ghost), w = ie(
      n,
      p,
      C,
      !!a.excludeMovingRangeOutliers
    ), I = c.map((o, D) => {
      const y = !o.ghost && S(o.value) ? p.slice(0, D + 1).filter((L, O) => !C[O] && S(L)).length : 0, M = d ? !0 : y >= a.minimumPoints;
      return {
        rowId: o.rowId,
        x: o.x,
        value: S(o.value) ? o.value : null,
        ghost: o.ghost,
        partitionId: v,
        pointRank: y,
        mean: (M || d) && S(w.mean) ? w.mean : null,
        upperProcessLimit: M || d ? w.upperProcessLimit : null,
        lowerProcessLimit: M || d ? w.lowerProcessLimit : null,
        upperTwoSigma: M || d ? w.upperTwoSigma : null,
        lowerTwoSigma: M || d ? w.lowerTwoSigma : null,
        upperOneSigma: M || d ? w.upperOneSigma : null,
        lowerOneSigma: M || d ? w.lowerOneSigma : null,
        // rules
        singlePointUp: !1,
        singlePointDown: !1,
        twoSigmaUp: !1,
        twoSigmaDown: !1,
        fourOfFiveUp: !1,
        fourOfFiveDown: !1,
        shiftUp: !1,
        shiftDown: !1,
        trendUp: !1,
        trendDown: !1,
        // candidates
        specialCauseImprovementValue: null,
        specialCauseConcernValue: null,
        variationIcon: N.CommonCause
      };
    });
    for (const o of I)
      o.ghost || !S(o.value) || o.mean === null || (S(o.upperProcessLimit) && o.value > o.upperProcessLimit && (o.singlePointUp = !0), S(o.lowerProcessLimit) && o.value < o.lowerProcessLimit && (o.singlePointDown = !0));
    oe(I, {
      shiftPoints: a.shiftPoints,
      trendPoints: a.trendPoints,
      twoSigmaIncludeAboveThree: !!a.twoSigmaIncludeAboveThree,
      enableFourOfFiveRule: !!a.enableFourOfFiveRule
    }), u && ((o) => {
      const D = o.some(
        (P) => (P.singlePointUp || P.twoSigmaUp || P.shiftUp || P.trendUp) && (P.singlePointDown || P.twoSigmaDown || P.shiftDown || P.trendDown)
      );
      if (m === F.Off || m === F.AutoWhenConflict && !D)
        return;
      const y = Z(o), M = $(y, {
        metricImprovement: t,
        strategy: a.trendSegmentationStrategy
      }), L = /* @__PURE__ */ new Set(), O = /* @__PURE__ */ new Set();
      for (const P of M)
        for (let R = P.start; R <= P.end; R++)
          P.trendDirection === B.Up ? L.add(R) : O.add(R);
      o.forEach((P, R) => {
        P.trendUp = L.has(R) ? P.trendUp : !1, P.trendDown = O.has(R) ? P.trendDown : !1, a.trendDominatesHighlightedWindow && (L.has(R) ? (P.singlePointDown = !1, P.twoSigmaDown = !1, P.shiftDown = !1) : O.has(R) && (P.singlePointUp = !1, P.twoSigmaUp = !1, P.shiftUp = !1));
      });
    })(I);
    for (const o of I) {
      if (o.ghost || !S(o.value) || o.mean === null) {
        i.push(o);
        continue;
      }
      const { aligned: D, opposite: y } = K(
        o,
        t
      );
      if (o.specialCauseImprovementValue = D ? o.value : null, o.specialCauseConcernValue = y ? o.value : null, t === U.Neither) {
        const M = o.singlePointUp || o.twoSigmaUp || o.shiftUp || o.trendUp, L = o.singlePointDown || o.twoSigmaDown || o.shiftDown || o.trendDown;
        o.variationIcon = M ? N.NeitherHigh : L ? N.NeitherLow : N.CommonCause;
      } else
        Q(o, t, a.metricConflictRule, a.preferImprovementWhenConflict === !0, a.conflictStrategy, a.ruleHierarchy, a.preferTrendWhenConflict === !0);
      i.push(o);
    }
  }
  if (a.trendAcrossPartitions) {
    const c = i.map((p, C) => ({ idx: C, r: p })).filter(({ r: p }) => !p.ghost && S(p.value));
    if (c.length >= a.trendPoints)
      for (let p = 0; p <= c.length - a.trendPoints; p++) {
        const C = c.slice(p, p + a.trendPoints).map((o) => o.idx), w = C.map((o) => i[o]);
        if (!w.every((o) => S(o.value))) continue;
        let I = !0, b = !0;
        for (let o = 1; o < w.length && (w[o].value > w[o - 1].value || (I = !1), w[o].value < w[o - 1].value || (b = !1), !(!I && !b)); o++)
          ;
        I && C.forEach((o) => i[o].trendUp = !0), b && C.forEach((o) => i[o].trendDown = !0);
      }
  }
  if (a.trendAcrossPartitions) {
    if (u) {
      const c = i.some(
        (p) => (p.singlePointUp || p.twoSigmaUp || p.shiftUp || p.trendUp) && (p.singlePointDown || p.twoSigmaDown || p.shiftDown || p.trendDown)
      );
      if (m === F.Always || m === F.AutoWhenConflict && c) {
        const p = Z(i), C = $(p, { metricImprovement: t, strategy: a.trendSegmentationStrategy }), w = /* @__PURE__ */ new Set(), I = /* @__PURE__ */ new Set();
        for (const b of C)
          for (let o = b.start; o <= b.end; o++)
            b.trendDirection === B.Up ? w.add(o) : I.add(o);
        i.forEach((b, o) => {
          b.trendUp = w.has(o) ? b.trendUp : !1, b.trendDown = I.has(o) ? b.trendDown : !1, a.trendDominatesHighlightedWindow && (w.has(o) ? (b.singlePointDown = !1, b.twoSigmaDown = !1, b.shiftDown = !1) : I.has(o) && (b.singlePointUp = !1, b.twoSigmaUp = !1, b.shiftUp = !1));
        });
      }
    }
    for (const c of i) {
      if (c.ghost || !S(c.value) || c.mean === null || t === U.Neither) continue;
      const { aligned: p, opposite: C } = K(c, t);
      c.specialCauseImprovementValue = p ? c.value : null, c.specialCauseConcernValue = C ? c.value : null, Q(c, t, a.metricConflictRule, a.preferImprovementWhenConflict === !0, a.conflictStrategy, a.ruleHierarchy, a.preferTrendWhenConflict === !0);
    }
  }
  return { rows: i };
}
function de(e, n) {
  const t = pe(e), f = ne(t.rows, {
    metricImprovement: e.metricImprovement,
    trendVisualMode: n?.trendVisualMode ?? _.Ungated,
    enableNeutralNoJudgement: n?.enableNeutralNoJudgement ?? !0
  }), g = n?.boundaryWindows;
  if (!g || g.mode !== "RecalcCrossing") return { rows: t.rows, visuals: f };
  const a = g.directionOverride ?? e.metricImprovement, m = fe(t.rows, a, g), r = f.map((s, l) => {
    const i = m[l];
    if (s === A.Common || s === A.NoJudgement) {
      if (i === A.Improvement) return A.Improvement;
      if (i === A.Concern) return A.Concern;
    }
    return s;
  });
  return { rows: t.rows, visuals: r };
}
var ge = /* @__PURE__ */ ((e) => (e.None = "none", e.RecalcCrossingShift = "recalc-crossing-shift", e.RecalcCrossingTrend = "recalc-crossing-trend", e.RecalcCrossingTwoSigma = "recalc-crossing-two-sigma", e.RecalculationsRecalculated = "recalculations-recalculated", e.BaselinesRecalculated = "baselines-recalculated", e))(ge || {});
function we(e, n, t) {
  const f = t?.trendVisualMode ?? _.Ungated, g = t?.enableNeutralNoJudgement ?? !0, a = Array.isArray(e.data) ? e.data.map((u, h) => u?.baseline ? h : -1).filter((u) => u >= 0) : [];
  let m;
  switch (n) {
    case "recalc-crossing-shift": {
      m = {
        mode: "RecalcCrossing",
        preWindow: 2,
        postWindow: 4,
        prePolarity: "Same",
        boundaryIndices: a
      };
      break;
    }
    case "recalc-crossing-trend": {
      m = {
        mode: "RecalcCrossing",
        preWindow: 1,
        postWindow: 5,
        prePolarity: "Same",
        boundaryIndices: a
      };
      break;
    }
    case "recalc-crossing-two-sigma": {
      m = {
        mode: "RecalcCrossing",
        preWindow: 1,
        postWindow: 1,
        prePolarity: "Same",
        boundaryIndices: a
      };
      break;
    }
    case "baselines-recalculated":
      m = {
        mode: "RecalcCrossing",
        preWindow: 0,
        postWindow: 0,
        prePolarity: "Same",
        directionOverride: e.metricImprovement,
        boundaryIndices: a
      };
      break;
    case "recalculations-recalculated":
    case "none":
    default:
      m = void 0;
  }
  const { rows: r, visuals: s } = de(e, {
    trendVisualMode: f,
    enableNeutralNoJudgement: g,
    boundaryWindows: m
  });
  let l = s.slice(), i = a.length ? a[0] : -1;
  if (i < 0) {
    for (let u = 1; u < r.length; u++)
      if (r[u].partitionId !== r[u - 1].partitionId) {
        i = u;
        break;
      }
  }
  return (n === "recalculations-recalculated" || n === "baselines-recalculated") && i > 0 && (l[i - 1] = A.Common), { rows: r, visuals: l };
}
const he = Object.freeze({
  minimumPoints: 13,
  shiftPoints: 6,
  trendPoints: 6,
  excludeMovingRangeOutliers: !1,
  metricConflictRule: q.Improvement,
  trendAcrossPartitions: !0,
  twoSigmaIncludeAboveThree: !0,
  chartLevelEligibility: !0
});
function Se(e) {
  return { ...he, ...e ?? {} };
}
export {
  he as P,
  A as S,
  _ as T,
  ge as V,
  de as a,
  pe as b,
  ne as c,
  we as d,
  S as i,
  me as n,
  Se as w
};
//# sourceMappingURL=presets-B0MKf-eZ.js.map
