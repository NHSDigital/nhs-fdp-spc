import { i as d } from "../presets-B0MKf-eZ.js";
import { P as N, S as P, T, V as W, b as D, a as H, d as L, c as M, n as R, w as k } from "../presets-B0MKf-eZ.js";
import { S as u, I as V, V as s } from "../types-BjMeC7Zi.js";
import { C as E, b as F, c as j, a as O } from "../types-BjMeC7Zi.js";
function y(e, f) {
  return f === V.Neither ? e === u.Up ? s.NeitherHigh : s.NeitherLow : f === V.Up ? e === u.Up ? s.ImprovementHigh : s.ConcernLow : e === u.Up ? s.ConcernHigh : s.ImprovementLow;
}
function U(e, f, b) {
  const { enableShift: v = !0 } = b ?? {}, S = Array(e.length).fill(null);
  if (!v) return S;
  const p = /* @__PURE__ */ new Map();
  e.forEach((o, m) => {
    p.has(o.partitionId) || p.set(o.partitionId, []), p.get(o.partitionId).push(m);
  });
  for (const [, o] of p) {
    const m = o.find((t) => d(e[t].mean));
    if (m == null) continue;
    let n = null, i = null;
    const h = (t, r) => {
      const g = e[t].mean;
      for (let a = t - 1; a >= o[0]; a--) {
        const l = e[a];
        if (l.ghost || !d(l.value)) continue;
        if (a >= m || !(r === u.Up ? l.value > g : l.value < g)) break;
        S[a] = y(r, f);
      }
    };
    for (const t of o) {
      const r = e[t];
      if (!d(r.mean))
        continue;
      const a = !!r.shiftUp, l = !!r.shiftDown, c = a ? u.Up : l ? u.Down : null;
      c ? n == null ? (n = t, i = c) : i === c || (h(n, i), n = t, i = c) : n != null && (h(n, i), n = null, i = null);
    }
    n != null && i != null && h(n, i);
  }
  return S;
}
export {
  E as ChartType,
  V as ImprovementDirection,
  N as PARITY_V26,
  u as Side,
  P as SpcVisualCategory,
  F as SpcWarningCategory,
  j as SpcWarningCode,
  O as SpcWarningSeverity,
  T as TrendVisualMode,
  s as VariationIcon,
  W as VisualsScenario,
  D as buildSpcV26a,
  H as buildSpcV26aWithVisuals,
  L as buildVisualsForScenario,
  U as computeRetroShiftOverlay,
  M as computeSpcVisualCategories,
  R as normaliseSpcSettingsV2,
  k as withParityV26
};
//# sourceMappingURL=index.js.map
