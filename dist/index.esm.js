import * as l from "react";
import z, { createElement as Da } from "react";
import { a as Je, V as re, S as un, C as tt, I as nt, b as Zn, c as Jn } from "./types-BjMeC7Zi.js";
import { A as Rt, D as Ye, M as Pa, a as Or, S as Rr, V as Ia, b as Ct, g as Fa, c as La, d as me, e as Bt, I as at, L as Qn, f as Yr, h as Hn, r as kt, v as Un, i as Wr, z as Aa, j as Ha, k as Vt, l as be, C as Ua } from "./SPCAssuranceIcon-Dn0jSjt3.js";
import { B as Gl, R as ql, m as Xl, n as Zl } from "./SPCAssuranceIcon-Dn0jSjt3.js";
import { createPortal as Oa } from "react-dom";
import { S as ot, b as zr, a as Ra, V as Ya, d as Wa, T as Kn, c as za } from "./presets-B0MKf-eZ.js";
import { P as Ql, n as Kl, w as ec } from "./presets-B0MKf-eZ.js";
function Ba(e = {}) {
  const t = l.useRef(null), n = l.useMemo(() => ({
    top: e.top ?? 16,
    right: e.right ?? 16,
    bottom: e.bottom ?? 32,
    left: e.left ?? 48
  }), [e.bottom, e.left, e.right, e.top]), [r, o] = l.useState({ width: 0, height: 0 });
  l.useLayoutEffect(() => {
    if (!t.current) return;
    const i = new ResizeObserver((c) => {
      for (const u of c) {
        const { width: d, height: f } = u.contentRect;
        o({ width: d, height: f });
      }
    });
    return i.observe(t.current), () => i.disconnect();
  }, []);
  const a = Math.max(0, r.width - n.left - n.right), s = Math.max(0, r.height - n.top - n.bottom);
  return { width: r.width, height: r.height, innerWidth: a, innerHeight: s, margin: n, ref: t };
}
const Br = l.createContext(null);
function It() {
  return l.useContext(Br);
}
const Va = ({
  height: e = 240,
  margin: t,
  width: n,
  className: r = "fdp-chart",
  // align with SCSS token application (.fdp-chart)
  children: o,
  role: a = "group",
  ariaLabel: s
}) => {
  const i = Ba(t), c = { height: e, position: "relative" };
  return n !== void 0 && (c.width = typeof n == "number" ? `${n}px` : n), /* @__PURE__ */ l.createElement("div", { ref: i.ref, className: r, style: c, role: a, "aria-label": s }, /* @__PURE__ */ l.createElement(Br.Provider, { value: i }, o));
};
function Yt(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function ja(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function On(e) {
  let t, n, r;
  e.length !== 2 ? (t = Yt, n = (i, c) => Yt(e(i), c), r = (i, c) => e(i) - c) : (t = e === Yt || e === ja ? e : Ga, n = e, r = e);
  function o(i, c, u = 0, d = i.length) {
    if (u < d) {
      if (t(c, c) !== 0) return d;
      do {
        const f = u + d >>> 1;
        n(i[f], c) < 0 ? u = f + 1 : d = f;
      } while (u < d);
    }
    return u;
  }
  function a(i, c, u = 0, d = i.length) {
    if (u < d) {
      if (t(c, c) !== 0) return d;
      do {
        const f = u + d >>> 1;
        n(i[f], c) <= 0 ? u = f + 1 : d = f;
      } while (u < d);
    }
    return u;
  }
  function s(i, c, u = 0, d = i.length) {
    const f = o(i, c, u, d - 1);
    return f > u && r(i[f - 1], c) > -r(i[f], c) ? f - 1 : f;
  }
  return { left: o, center: s, right: a };
}
function Ga() {
  return 0;
}
function qa(e) {
  return e === null ? NaN : +e;
}
const Xa = On(Yt), Za = Xa.right;
On(qa).center;
function Vr(e, t) {
  let n, r;
  if (t === void 0)
    for (const o of e)
      o != null && (n === void 0 ? o >= o && (n = r = o) : (n > o && (n = o), r < o && (r = o)));
  else {
    let o = -1;
    for (let a of e)
      (a = t(a, ++o, e)) != null && (n === void 0 ? a >= a && (n = r = a) : (n > a && (n = a), r < a && (r = a)));
  }
  return [n, r];
}
const Ja = Math.sqrt(50), Qa = Math.sqrt(10), Ka = Math.sqrt(2);
function jt(e, t, n) {
  const r = (t - e) / Math.max(0, n), o = Math.floor(Math.log10(r)), a = r / Math.pow(10, o), s = a >= Ja ? 10 : a >= Qa ? 5 : a >= Ka ? 2 : 1;
  let i, c, u;
  return o < 0 ? (u = Math.pow(10, -o) / s, i = Math.round(e * u), c = Math.round(t * u), i / u < e && ++i, c / u > t && --c, u = -u) : (u = Math.pow(10, o) * s, i = Math.round(e / u), c = Math.round(t / u), i * u < e && ++i, c * u > t && --c), c < i && 0.5 <= n && n < 2 ? jt(e, t, n * 2) : [i, c, u];
}
function eo(e, t, n) {
  if (t = +t, e = +e, n = +n, !(n > 0)) return [];
  if (e === t) return [e];
  const r = t < e, [o, a, s] = r ? jt(t, e, n) : jt(e, t, n);
  if (!(a >= o)) return [];
  const i = a - o + 1, c = new Array(i);
  if (r)
    if (s < 0) for (let u = 0; u < i; ++u) c[u] = (a - u) / -s;
    else for (let u = 0; u < i; ++u) c[u] = (a - u) * s;
  else if (s < 0) for (let u = 0; u < i; ++u) c[u] = (o + u) / -s;
  else for (let u = 0; u < i; ++u) c[u] = (o + u) * s;
  return c;
}
function Mn(e, t, n) {
  return t = +t, e = +e, n = +n, jt(e, t, n)[2];
}
function Cn(e, t, n) {
  t = +t, e = +e, n = +n;
  const r = t < e, o = r ? Mn(t, e, n) : Mn(e, t, n);
  return (r ? -1 : 1) * (o < 0 ? 1 / -o : o);
}
function jr(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
function Rn(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Gr(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Ft() {
}
var Et = 0.7, Gt = 1 / Et, gt = "\\s*([+-]?\\d+)\\s*", Tt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", We = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", to = /^#([0-9a-f]{3,8})$/, no = new RegExp(`^rgb\\(${gt},${gt},${gt}\\)$`), ro = new RegExp(`^rgb\\(${We},${We},${We}\\)$`), ao = new RegExp(`^rgba\\(${gt},${gt},${gt},${Tt}\\)$`), oo = new RegExp(`^rgba\\(${We},${We},${We},${Tt}\\)$`), io = new RegExp(`^hsl\\(${Tt},${We},${We}\\)$`), so = new RegExp(`^hsla\\(${Tt},${We},${We},${Tt}\\)$`), er = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
Rn(Ft, Dt, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: tr,
  // Deprecated! Use color.formatHex.
  formatHex: tr,
  formatHex8: lo,
  formatHsl: co,
  formatRgb: nr,
  toString: nr
});
function tr() {
  return this.rgb().formatHex();
}
function lo() {
  return this.rgb().formatHex8();
}
function co() {
  return qr(this).formatHsl();
}
function nr() {
  return this.rgb().formatRgb();
}
function Dt(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = to.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? rr(t) : n === 3 ? new Te(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Ht(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Ht(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = no.exec(e)) ? new Te(t[1], t[2], t[3], 1) : (t = ro.exec(e)) ? new Te(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = ao.exec(e)) ? Ht(t[1], t[2], t[3], t[4]) : (t = oo.exec(e)) ? Ht(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = io.exec(e)) ? ir(t[1], t[2] / 100, t[3] / 100, 1) : (t = so.exec(e)) ? ir(t[1], t[2] / 100, t[3] / 100, t[4]) : er.hasOwnProperty(e) ? rr(er[e]) : e === "transparent" ? new Te(NaN, NaN, NaN, 0) : null;
}
function rr(e) {
  return new Te(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Ht(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Te(e, t, n, r);
}
function uo(e) {
  return e instanceof Ft || (e = Dt(e)), e ? (e = e.rgb(), new Te(e.r, e.g, e.b, e.opacity)) : new Te();
}
function Nn(e, t, n, r) {
  return arguments.length === 1 ? uo(e) : new Te(e, t, n, r ?? 1);
}
function Te(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Rn(Te, Nn, Gr(Ft, {
  brighter(e) {
    return e = e == null ? Gt : Math.pow(Gt, e), new Te(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Et : Math.pow(Et, e), new Te(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Te(it(this.r), it(this.g), it(this.b), qt(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: ar,
  // Deprecated! Use color.formatHex.
  formatHex: ar,
  formatHex8: fo,
  formatRgb: or,
  toString: or
}));
function ar() {
  return `#${rt(this.r)}${rt(this.g)}${rt(this.b)}`;
}
function fo() {
  return `#${rt(this.r)}${rt(this.g)}${rt(this.b)}${rt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function or() {
  const e = qt(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${it(this.r)}, ${it(this.g)}, ${it(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function qt(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function it(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function rt(e) {
  return e = it(e), (e < 16 ? "0" : "") + e.toString(16);
}
function ir(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Re(e, t, n, r);
}
function qr(e) {
  if (e instanceof Re) return new Re(e.h, e.s, e.l, e.opacity);
  if (e instanceof Ft || (e = Dt(e)), !e) return new Re();
  if (e instanceof Re) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), a = Math.max(t, n, r), s = NaN, i = a - o, c = (a + o) / 2;
  return i ? (t === a ? s = (n - r) / i + (n < r) * 6 : n === a ? s = (r - t) / i + 2 : s = (t - n) / i + 4, i /= c < 0.5 ? a + o : 2 - a - o, s *= 60) : i = c > 0 && c < 1 ? 0 : s, new Re(s, i, c, e.opacity);
}
function mo(e, t, n, r) {
  return arguments.length === 1 ? qr(e) : new Re(e, t, n, r ?? 1);
}
function Re(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Rn(Re, mo, Gr(Ft, {
  brighter(e) {
    return e = e == null ? Gt : Math.pow(Gt, e), new Re(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Et : Math.pow(Et, e), new Re(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new Te(
      fn(e >= 240 ? e - 240 : e + 120, o, r),
      fn(e, o, r),
      fn(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new Re(sr(this.h), Ut(this.s), Ut(this.l), qt(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = qt(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${sr(this.h)}, ${Ut(this.s) * 100}%, ${Ut(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function sr(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Ut(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function fn(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Yn = (e) => () => e;
function po(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function ho(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function go(e) {
  return (e = +e) == 1 ? Xr : function(t, n) {
    return n - t ? ho(t, n, e) : Yn(isNaN(t) ? n : t);
  };
}
function Xr(e, t) {
  var n = t - e;
  return n ? po(e, n) : Yn(isNaN(e) ? t : e);
}
const lr = (function e(t) {
  var n = go(t);
  function r(o, a) {
    var s = n((o = Nn(o)).r, (a = Nn(a)).r), i = n(o.g, a.g), c = n(o.b, a.b), u = Xr(o.opacity, a.opacity);
    return function(d) {
      return o.r = s(d), o.g = i(d), o.b = c(d), o.opacity = u(d), o + "";
    };
  }
  return r.gamma = e, r;
})(1);
function yo(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), o;
  return function(a) {
    for (o = 0; o < n; ++o) r[o] = e[o] * (1 - a) + t[o] * a;
    return r;
  };
}
function vo(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function xo(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, o = new Array(r), a = new Array(n), s;
  for (s = 0; s < r; ++s) o[s] = Wn(e[s], t[s]);
  for (; s < n; ++s) a[s] = t[s];
  return function(i) {
    for (s = 0; s < r; ++s) a[s] = o[s](i);
    return a;
  };
}
function bo(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(r) {
    return n.setTime(e * (1 - r) + t * r), n;
  };
}
function Xt(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function wo(e, t) {
  var n = {}, r = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = Wn(e[o], t[o]) : r[o] = t[o];
  return function(a) {
    for (o in n) r[o] = n[o](a);
    return r;
  };
}
var kn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, dn = new RegExp(kn.source, "g");
function So(e) {
  return function() {
    return e;
  };
}
function $o(e) {
  return function(t) {
    return e(t) + "";
  };
}
function _o(e, t) {
  var n = kn.lastIndex = dn.lastIndex = 0, r, o, a, s = -1, i = [], c = [];
  for (e = e + "", t = t + ""; (r = kn.exec(e)) && (o = dn.exec(t)); )
    (a = o.index) > n && (a = t.slice(n, a), i[s] ? i[s] += a : i[++s] = a), (r = r[0]) === (o = o[0]) ? i[s] ? i[s] += o : i[++s] = o : (i[++s] = null, c.push({ i: s, x: Xt(r, o) })), n = dn.lastIndex;
  return n < t.length && (a = t.slice(n), i[s] ? i[s] += a : i[++s] = a), i.length < 2 ? c[0] ? $o(c[0].x) : So(t) : (t = c.length, function(u) {
    for (var d = 0, f; d < t; ++d) i[(f = c[d]).i] = f.x(u);
    return i.join("");
  });
}
function Wn(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? Yn(t) : (n === "number" ? Xt : n === "string" ? (r = Dt(t)) ? (t = r, lr) : _o : t instanceof Dt ? lr : t instanceof Date ? bo : vo(t) ? yo : Array.isArray(t) ? xo : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? wo : Xt)(e, t);
}
function Mo(e, t) {
  return e = +e, t = +t, function(n) {
    return Math.round(e * (1 - n) + t * n);
  };
}
function Co(e) {
  return function() {
    return e;
  };
}
function No(e) {
  return +e;
}
var cr = [0, 1];
function pt(e) {
  return e;
}
function En(e, t) {
  return (t -= e = +e) ? function(n) {
    return (n - e) / t;
  } : Co(isNaN(t) ? NaN : 0.5);
}
function ko(e, t) {
  var n;
  return e > t && (n = e, e = t, t = n), function(r) {
    return Math.max(e, Math.min(t, r));
  };
}
function Eo(e, t, n) {
  var r = e[0], o = e[1], a = t[0], s = t[1];
  return o < r ? (r = En(o, r), a = n(s, a)) : (r = En(r, o), a = n(a, s)), function(i) {
    return a(r(i));
  };
}
function To(e, t, n) {
  var r = Math.min(e.length, t.length) - 1, o = new Array(r), a = new Array(r), s = -1;
  for (e[r] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++s < r; )
    o[s] = En(e[s], e[s + 1]), a[s] = n(t[s], t[s + 1]);
  return function(i) {
    var c = Za(e, i, 1, r) - 1;
    return a[c](o[c](i));
  };
}
function Zr(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Do() {
  var e = cr, t = cr, n = Wn, r, o, a, s = pt, i, c, u;
  function d() {
    var g = Math.min(e.length, t.length);
    return s !== pt && (s = ko(e[0], e[g - 1])), i = g > 2 ? To : Eo, c = u = null, f;
  }
  function f(g) {
    return g == null || isNaN(g = +g) ? a : (c || (c = i(e.map(r), t, n)))(r(s(g)));
  }
  return f.invert = function(g) {
    return s(o((u || (u = i(t, e.map(r), Xt)))(g)));
  }, f.domain = function(g) {
    return arguments.length ? (e = Array.from(g, No), d()) : e.slice();
  }, f.range = function(g) {
    return arguments.length ? (t = Array.from(g), d()) : t.slice();
  }, f.rangeRound = function(g) {
    return t = Array.from(g), n = Mo, d();
  }, f.clamp = function(g) {
    return arguments.length ? (s = g ? !0 : pt, d()) : s !== pt;
  }, f.interpolate = function(g) {
    return arguments.length ? (n = g, d()) : n;
  }, f.unknown = function(g) {
    return arguments.length ? (a = g, f) : a;
  }, function(g, x) {
    return r = g, o = x, d();
  };
}
function Jr() {
  return Do()(pt, pt);
}
function Po(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Zt(e, t) {
  if ((n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var n, r = e.slice(0, n);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +e.slice(n + 1)
  ];
}
function vt(e) {
  return e = Zt(Math.abs(e)), e ? e[1] : NaN;
}
function Io(e, t) {
  return function(n, r) {
    for (var o = n.length, a = [], s = 0, i = e[0], c = 0; o > 0 && i > 0 && (c + i + 1 > r && (i = Math.max(1, r - c)), a.push(n.substring(o -= i, o + i)), !((c += i + 1) > r)); )
      i = e[s = (s + 1) % e.length];
    return a.reverse().join(t);
  };
}
function Fo(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(n) {
      return e[+n];
    });
  };
}
var Lo = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Jt(e) {
  if (!(t = Lo.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new zn({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10]
  });
}
Jt.prototype = zn.prototype;
function zn(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
zn.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Ao(e) {
  e: for (var t = e.length, n = 1, r = -1, o; n < t; ++n)
    switch (e[n]) {
      case ".":
        r = o = n;
        break;
      case "0":
        r === 0 && (r = n), o = n;
        break;
      default:
        if (!+e[n]) break e;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? e.slice(0, r) + e.slice(o + 1) : e;
}
var Qr;
function Ho(e, t) {
  var n = Zt(e, t);
  if (!n) return e + "";
  var r = n[0], o = n[1], a = o - (Qr = Math.max(-8, Math.min(8, Math.floor(o / 3))) * 3) + 1, s = r.length;
  return a === s ? r : a > s ? r + new Array(a - s + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + new Array(1 - a).join("0") + Zt(e, Math.max(0, t + a - 1))[0];
}
function ur(e, t) {
  var n = Zt(e, t);
  if (!n) return e + "";
  var r = n[0], o = n[1];
  return o < 0 ? "0." + new Array(-o).join("0") + r : r.length > o + 1 ? r.slice(0, o + 1) + "." + r.slice(o + 1) : r + new Array(o - r.length + 2).join("0");
}
const fr = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: Po,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => ur(e * 100, t),
  r: ur,
  s: Ho,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function dr(e) {
  return e;
}
var mr = Array.prototype.map, pr = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Uo(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? dr : Io(mr.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", r = e.currency === void 0 ? "" : e.currency[1] + "", o = e.decimal === void 0 ? "." : e.decimal + "", a = e.numerals === void 0 ? dr : Fo(mr.call(e.numerals, String)), s = e.percent === void 0 ? "%" : e.percent + "", i = e.minus === void 0 ? "−" : e.minus + "", c = e.nan === void 0 ? "NaN" : e.nan + "";
  function u(f) {
    f = Jt(f);
    var g = f.fill, x = f.align, b = f.sign, _ = f.symbol, M = f.zero, T = f.width, D = f.comma, P = f.precision, F = f.trim, k = f.type;
    k === "n" ? (D = !0, k = "g") : fr[k] || (P === void 0 && (P = 12), F = !0, k = "g"), (M || g === "0" && x === "=") && (M = !0, g = "0", x = "=");
    var S = _ === "$" ? n : _ === "#" && /[boxX]/.test(k) ? "0" + k.toLowerCase() : "", y = _ === "$" ? r : /[%p]/.test(k) ? s : "", $ = fr[k], p = /[defgprs%]/.test(k);
    P = P === void 0 ? 6 : /[gprs]/.test(k) ? Math.max(1, Math.min(21, P)) : Math.max(0, Math.min(20, P));
    function C(w) {
      var H = S, E = y, N, O, R;
      if (k === "c")
        E = $(w) + E, w = "";
      else {
        w = +w;
        var Q = w < 0 || 1 / w < 0;
        if (w = isNaN(w) ? c : $(Math.abs(w), P), F && (w = Ao(w)), Q && +w == 0 && b !== "+" && (Q = !1), H = (Q ? b === "(" ? b : i : b === "-" || b === "(" ? "" : b) + H, E = (k === "s" ? pr[8 + Qr / 3] : "") + E + (Q && b === "(" ? ")" : ""), p) {
          for (N = -1, O = w.length; ++N < O; )
            if (R = w.charCodeAt(N), 48 > R || R > 57) {
              E = (R === 46 ? o + w.slice(N + 1) : w.slice(N)) + E, w = w.slice(0, N);
              break;
            }
        }
      }
      D && !M && (w = t(w, 1 / 0));
      var se = H.length + w.length + E.length, X = se < T ? new Array(T - se + 1).join(g) : "";
      switch (D && M && (w = t(X + w, X.length ? T - E.length : 1 / 0), X = ""), x) {
        case "<":
          w = H + w + E + X;
          break;
        case "=":
          w = H + X + w + E;
          break;
        case "^":
          w = X.slice(0, se = X.length >> 1) + H + w + E + X.slice(se);
          break;
        default:
          w = X + H + w + E;
          break;
      }
      return a(w);
    }
    return C.toString = function() {
      return f + "";
    }, C;
  }
  function d(f, g) {
    var x = u((f = Jt(f), f.type = "f", f)), b = Math.max(-8, Math.min(8, Math.floor(vt(g) / 3))) * 3, _ = Math.pow(10, -b), M = pr[8 + b / 3];
    return function(T) {
      return x(_ * T) + M;
    };
  }
  return {
    format: u,
    formatPrefix: d
  };
}
var Ot, Kr, ea;
Oo({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Oo(e) {
  return Ot = Uo(e), Kr = Ot.format, ea = Ot.formatPrefix, Ot;
}
function Ro(e) {
  return Math.max(0, -vt(Math.abs(e)));
}
function Yo(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(vt(t) / 3))) * 3 - vt(Math.abs(e)));
}
function Wo(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, vt(t) - vt(e)) + 1;
}
function zo(e, t, n, r) {
  var o = Cn(e, t, n), a;
  switch (r = Jt(r ?? ",f"), r.type) {
    case "s": {
      var s = Math.max(Math.abs(e), Math.abs(t));
      return r.precision == null && !isNaN(a = Yo(o, s)) && (r.precision = a), ea(r, s);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(a = Wo(o, Math.max(Math.abs(e), Math.abs(t)))) && (r.precision = a - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(a = Ro(o)) && (r.precision = a - (r.type === "%") * 2);
      break;
    }
  }
  return Kr(r);
}
function Bo(e) {
  var t = e.domain;
  return e.ticks = function(n) {
    var r = t();
    return eo(r[0], r[r.length - 1], n ?? 10);
  }, e.tickFormat = function(n, r) {
    var o = t();
    return zo(o[0], o[o.length - 1], n ?? 10, r);
  }, e.nice = function(n) {
    n == null && (n = 10);
    var r = t(), o = 0, a = r.length - 1, s = r[o], i = r[a], c, u, d = 10;
    for (i < s && (u = s, s = i, i = u, u = o, o = a, a = u); d-- > 0; ) {
      if (u = Mn(s, i, n), u === c)
        return r[o] = s, r[a] = i, t(r);
      if (u > 0)
        s = Math.floor(s / u) * u, i = Math.ceil(i / u) * u;
      else if (u < 0)
        s = Math.ceil(s * u) / u, i = Math.floor(i * u) / u;
      else
        break;
      c = u;
    }
    return e;
  }, e;
}
function Tn() {
  var e = Jr();
  return e.copy = function() {
    return Zr(e, Tn());
  }, jr.apply(e, arguments), Bo(e);
}
function Vo(e, t) {
  e = e.slice();
  var n = 0, r = e.length - 1, o = e[n], a = e[r], s;
  return a < o && (s = n, n = r, r = s, s = o, o = a, a = s), e[n] = t.floor(o), e[r] = t.ceil(a), e;
}
const mn = /* @__PURE__ */ new Date(), pn = /* @__PURE__ */ new Date();
function ve(e, t, n, r) {
  function o(a) {
    return e(a = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+a)), a;
  }
  return o.floor = (a) => (e(a = /* @__PURE__ */ new Date(+a)), a), o.ceil = (a) => (e(a = new Date(a - 1)), t(a, 1), e(a), a), o.round = (a) => {
    const s = o(a), i = o.ceil(a);
    return a - s < i - a ? s : i;
  }, o.offset = (a, s) => (t(a = /* @__PURE__ */ new Date(+a), s == null ? 1 : Math.floor(s)), a), o.range = (a, s, i) => {
    const c = [];
    if (a = o.ceil(a), i = i == null ? 1 : Math.floor(i), !(a < s) || !(i > 0)) return c;
    let u;
    do
      c.push(u = /* @__PURE__ */ new Date(+a)), t(a, i), e(a);
    while (u < a && a < s);
    return c;
  }, o.filter = (a) => ve((s) => {
    if (s >= s) for (; e(s), !a(s); ) s.setTime(s - 1);
  }, (s, i) => {
    if (s >= s)
      if (i < 0) for (; ++i <= 0; )
        for (; t(s, -1), !a(s); )
          ;
      else for (; --i >= 0; )
        for (; t(s, 1), !a(s); )
          ;
  }), n && (o.count = (a, s) => (mn.setTime(+a), pn.setTime(+s), e(mn), e(pn), Math.floor(n(mn, pn))), o.every = (a) => (a = Math.floor(a), !isFinite(a) || !(a > 0) ? null : a > 1 ? o.filter(r ? (s) => r(s) % a === 0 : (s) => o.count(0, s) % a === 0) : o)), o;
}
const Qt = ve(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Qt.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? ve((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
  t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : Qt);
Qt.range;
const Ve = 1e3, Ue = Ve * 60, je = Ue * 60, Ge = je * 24, Bn = Ge * 7, hr = Ge * 30, hn = Ge * 365, ht = ve((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Ve);
}, (e, t) => (t - e) / Ve, (e) => e.getUTCSeconds());
ht.range;
const Vn = ve((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Ve);
}, (e, t) => {
  e.setTime(+e + t * Ue);
}, (e, t) => (t - e) / Ue, (e) => e.getMinutes());
Vn.range;
const jo = ve((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * Ue);
}, (e, t) => (t - e) / Ue, (e) => e.getUTCMinutes());
jo.range;
const jn = ve((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Ve - e.getMinutes() * Ue);
}, (e, t) => {
  e.setTime(+e + t * je);
}, (e, t) => (t - e) / je, (e) => e.getHours());
jn.range;
const Go = ve((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * je);
}, (e, t) => (t - e) / je, (e) => e.getUTCHours());
Go.range;
const Lt = ve(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Ue) / Ge,
  (e) => e.getDate() - 1
);
Lt.range;
const Gn = ve((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Ge, (e) => e.getUTCDate() - 1);
Gn.range;
const qo = ve((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Ge, (e) => Math.floor(e / Ge));
qo.range;
function lt(e) {
  return ve((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setDate(t.getDate() + n * 7);
  }, (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Ue) / Bn);
}
const rn = lt(0), Kt = lt(1), Xo = lt(2), Zo = lt(3), xt = lt(4), Jo = lt(5), Qo = lt(6);
rn.range;
Kt.range;
Xo.range;
Zo.range;
xt.range;
Jo.range;
Qo.range;
function ct(e) {
  return ve((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setUTCDate(t.getUTCDate() + n * 7);
  }, (t, n) => (n - t) / Bn);
}
const ta = ct(0), en = ct(1), Ko = ct(2), ei = ct(3), bt = ct(4), ti = ct(5), ni = ct(6);
ta.range;
en.range;
Ko.range;
ei.range;
bt.range;
ti.range;
ni.range;
const qn = ve((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
qn.range;
const ri = ve((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
ri.range;
const qe = ve((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
qe.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ve((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
  t.setFullYear(t.getFullYear() + n * e);
});
qe.range;
const st = ve((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
st.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ve((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCFullYear(t.getUTCFullYear() + n * e);
});
st.range;
function ai(e, t, n, r, o, a) {
  const s = [
    [ht, 1, Ve],
    [ht, 5, 5 * Ve],
    [ht, 15, 15 * Ve],
    [ht, 30, 30 * Ve],
    [a, 1, Ue],
    [a, 5, 5 * Ue],
    [a, 15, 15 * Ue],
    [a, 30, 30 * Ue],
    [o, 1, je],
    [o, 3, 3 * je],
    [o, 6, 6 * je],
    [o, 12, 12 * je],
    [r, 1, Ge],
    [r, 2, 2 * Ge],
    [n, 1, Bn],
    [t, 1, hr],
    [t, 3, 3 * hr],
    [e, 1, hn]
  ];
  function i(u, d, f) {
    const g = d < u;
    g && ([u, d] = [d, u]);
    const x = f && typeof f.range == "function" ? f : c(u, d, f), b = x ? x.range(u, +d + 1) : [];
    return g ? b.reverse() : b;
  }
  function c(u, d, f) {
    const g = Math.abs(d - u) / f, x = On(([, , M]) => M).right(s, g);
    if (x === s.length) return e.every(Cn(u / hn, d / hn, f));
    if (x === 0) return Qt.every(Math.max(Cn(u, d, f), 1));
    const [b, _] = s[g / s[x - 1][2] < s[x][2] / g ? x - 1 : x];
    return b.every(_);
  }
  return [i, c];
}
const [oi, ii] = ai(qe, qn, rn, Lt, jn, Vn);
function gn(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function yn(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function St(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function si(e) {
  var t = e.dateTime, n = e.date, r = e.time, o = e.periods, a = e.days, s = e.shortDays, i = e.months, c = e.shortMonths, u = $t(o), d = _t(o), f = $t(a), g = _t(a), x = $t(s), b = _t(s), _ = $t(i), M = _t(i), T = $t(c), D = _t(c), P = {
    a: Q,
    A: se,
    b: X,
    B: Y,
    c: null,
    d: wr,
    e: wr,
    f: Ti,
    g: Ri,
    G: Wi,
    H: Ni,
    I: ki,
    j: Ei,
    L: na,
    m: Di,
    M: Pi,
    p: ee,
    q: ge,
    Q: _r,
    s: Mr,
    S: Ii,
    u: Fi,
    U: Li,
    V: Ai,
    w: Hi,
    W: Ui,
    x: null,
    X: null,
    y: Oi,
    Y: Yi,
    Z: zi,
    "%": $r
  }, F = {
    a: B,
    A: $e,
    b: Ee,
    B: ye,
    c: null,
    d: Sr,
    e: Sr,
    f: Gi,
    g: rs,
    G: os,
    H: Bi,
    I: Vi,
    j: ji,
    L: aa,
    m: qi,
    M: Xi,
    p: ue,
    q: ae,
    Q: _r,
    s: Mr,
    S: Zi,
    u: Ji,
    U: Qi,
    V: Ki,
    w: es,
    W: ts,
    x: null,
    X: null,
    y: ns,
    Y: as,
    Z: is,
    "%": $r
  }, k = {
    a: C,
    A: w,
    b: H,
    B: E,
    c: N,
    d: xr,
    e: xr,
    f: $i,
    g: vr,
    G: yr,
    H: br,
    I: br,
    j: xi,
    L: Si,
    m: vi,
    M: bi,
    p,
    q: yi,
    Q: Mi,
    s: Ci,
    S: wi,
    u: di,
    U: mi,
    V: pi,
    w: fi,
    W: hi,
    x: O,
    X: R,
    y: vr,
    Y: yr,
    Z: gi,
    "%": _i
  };
  P.x = S(n, P), P.X = S(r, P), P.c = S(t, P), F.x = S(n, F), F.X = S(r, F), F.c = S(t, F);
  function S(L, G) {
    return function(q) {
      var v = [], le = -1, K = 0, pe = L.length, he, _e, De;
      for (q instanceof Date || (q = /* @__PURE__ */ new Date(+q)); ++le < pe; )
        L.charCodeAt(le) === 37 && (v.push(L.slice(K, le)), (_e = gr[he = L.charAt(++le)]) != null ? he = L.charAt(++le) : _e = he === "e" ? " " : "0", (De = G[he]) && (he = De(q, _e)), v.push(he), K = le + 1);
      return v.push(L.slice(K, le)), v.join("");
    };
  }
  function y(L, G) {
    return function(q) {
      var v = St(1900, void 0, 1), le = $(v, L, q += "", 0), K, pe;
      if (le != q.length) return null;
      if ("Q" in v) return new Date(v.Q);
      if ("s" in v) return new Date(v.s * 1e3 + ("L" in v ? v.L : 0));
      if (G && !("Z" in v) && (v.Z = 0), "p" in v && (v.H = v.H % 12 + v.p * 12), v.m === void 0 && (v.m = "q" in v ? v.q : 0), "V" in v) {
        if (v.V < 1 || v.V > 53) return null;
        "w" in v || (v.w = 1), "Z" in v ? (K = yn(St(v.y, 0, 1)), pe = K.getUTCDay(), K = pe > 4 || pe === 0 ? en.ceil(K) : en(K), K = Gn.offset(K, (v.V - 1) * 7), v.y = K.getUTCFullYear(), v.m = K.getUTCMonth(), v.d = K.getUTCDate() + (v.w + 6) % 7) : (K = gn(St(v.y, 0, 1)), pe = K.getDay(), K = pe > 4 || pe === 0 ? Kt.ceil(K) : Kt(K), K = Lt.offset(K, (v.V - 1) * 7), v.y = K.getFullYear(), v.m = K.getMonth(), v.d = K.getDate() + (v.w + 6) % 7);
      } else ("W" in v || "U" in v) && ("w" in v || (v.w = "u" in v ? v.u % 7 : "W" in v ? 1 : 0), pe = "Z" in v ? yn(St(v.y, 0, 1)).getUTCDay() : gn(St(v.y, 0, 1)).getDay(), v.m = 0, v.d = "W" in v ? (v.w + 6) % 7 + v.W * 7 - (pe + 5) % 7 : v.w + v.U * 7 - (pe + 6) % 7);
      return "Z" in v ? (v.H += v.Z / 100 | 0, v.M += v.Z % 100, yn(v)) : gn(v);
    };
  }
  function $(L, G, q, v) {
    for (var le = 0, K = G.length, pe = q.length, he, _e; le < K; ) {
      if (v >= pe) return -1;
      if (he = G.charCodeAt(le++), he === 37) {
        if (he = G.charAt(le++), _e = k[he in gr ? G.charAt(le++) : he], !_e || (v = _e(L, q, v)) < 0) return -1;
      } else if (he != q.charCodeAt(v++))
        return -1;
    }
    return v;
  }
  function p(L, G, q) {
    var v = u.exec(G.slice(q));
    return v ? (L.p = d.get(v[0].toLowerCase()), q + v[0].length) : -1;
  }
  function C(L, G, q) {
    var v = x.exec(G.slice(q));
    return v ? (L.w = b.get(v[0].toLowerCase()), q + v[0].length) : -1;
  }
  function w(L, G, q) {
    var v = f.exec(G.slice(q));
    return v ? (L.w = g.get(v[0].toLowerCase()), q + v[0].length) : -1;
  }
  function H(L, G, q) {
    var v = T.exec(G.slice(q));
    return v ? (L.m = D.get(v[0].toLowerCase()), q + v[0].length) : -1;
  }
  function E(L, G, q) {
    var v = _.exec(G.slice(q));
    return v ? (L.m = M.get(v[0].toLowerCase()), q + v[0].length) : -1;
  }
  function N(L, G, q) {
    return $(L, t, G, q);
  }
  function O(L, G, q) {
    return $(L, n, G, q);
  }
  function R(L, G, q) {
    return $(L, r, G, q);
  }
  function Q(L) {
    return s[L.getDay()];
  }
  function se(L) {
    return a[L.getDay()];
  }
  function X(L) {
    return c[L.getMonth()];
  }
  function Y(L) {
    return i[L.getMonth()];
  }
  function ee(L) {
    return o[+(L.getHours() >= 12)];
  }
  function ge(L) {
    return 1 + ~~(L.getMonth() / 3);
  }
  function B(L) {
    return s[L.getUTCDay()];
  }
  function $e(L) {
    return a[L.getUTCDay()];
  }
  function Ee(L) {
    return c[L.getUTCMonth()];
  }
  function ye(L) {
    return i[L.getUTCMonth()];
  }
  function ue(L) {
    return o[+(L.getUTCHours() >= 12)];
  }
  function ae(L) {
    return 1 + ~~(L.getUTCMonth() / 3);
  }
  return {
    format: function(L) {
      var G = S(L += "", P);
      return G.toString = function() {
        return L;
      }, G;
    },
    parse: function(L) {
      var G = y(L += "", !1);
      return G.toString = function() {
        return L;
      }, G;
    },
    utcFormat: function(L) {
      var G = S(L += "", F);
      return G.toString = function() {
        return L;
      }, G;
    },
    utcParse: function(L) {
      var G = y(L += "", !0);
      return G.toString = function() {
        return L;
      }, G;
    }
  };
}
var gr = { "-": "", _: " ", 0: "0" }, Se = /^\s*\d+/, li = /^%/, ci = /[\\^$*+?|[\]().{}]/g;
function ie(e, t, n) {
  var r = e < 0 ? "-" : "", o = (r ? -e : e) + "", a = o.length;
  return r + (a < n ? new Array(n - a + 1).join(t) + o : o);
}
function ui(e) {
  return e.replace(ci, "\\$&");
}
function $t(e) {
  return new RegExp("^(?:" + e.map(ui).join("|") + ")", "i");
}
function _t(e) {
  return new Map(e.map((t, n) => [t.toLowerCase(), n]));
}
function fi(e, t, n) {
  var r = Se.exec(t.slice(n, n + 1));
  return r ? (e.w = +r[0], n + r[0].length) : -1;
}
function di(e, t, n) {
  var r = Se.exec(t.slice(n, n + 1));
  return r ? (e.u = +r[0], n + r[0].length) : -1;
}
function mi(e, t, n) {
  var r = Se.exec(t.slice(n, n + 2));
  return r ? (e.U = +r[0], n + r[0].length) : -1;
}
function pi(e, t, n) {
  var r = Se.exec(t.slice(n, n + 2));
  return r ? (e.V = +r[0], n + r[0].length) : -1;
}
function hi(e, t, n) {
  var r = Se.exec(t.slice(n, n + 2));
  return r ? (e.W = +r[0], n + r[0].length) : -1;
}
function yr(e, t, n) {
  var r = Se.exec(t.slice(n, n + 4));
  return r ? (e.y = +r[0], n + r[0].length) : -1;
}
function vr(e, t, n) {
  var r = Se.exec(t.slice(n, n + 2));
  return r ? (e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), n + r[0].length) : -1;
}
function gi(e, t, n) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return r ? (e.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1;
}
function yi(e, t, n) {
  var r = Se.exec(t.slice(n, n + 1));
  return r ? (e.q = r[0] * 3 - 3, n + r[0].length) : -1;
}
function vi(e, t, n) {
  var r = Se.exec(t.slice(n, n + 2));
  return r ? (e.m = r[0] - 1, n + r[0].length) : -1;
}
function xr(e, t, n) {
  var r = Se.exec(t.slice(n, n + 2));
  return r ? (e.d = +r[0], n + r[0].length) : -1;
}
function xi(e, t, n) {
  var r = Se.exec(t.slice(n, n + 3));
  return r ? (e.m = 0, e.d = +r[0], n + r[0].length) : -1;
}
function br(e, t, n) {
  var r = Se.exec(t.slice(n, n + 2));
  return r ? (e.H = +r[0], n + r[0].length) : -1;
}
function bi(e, t, n) {
  var r = Se.exec(t.slice(n, n + 2));
  return r ? (e.M = +r[0], n + r[0].length) : -1;
}
function wi(e, t, n) {
  var r = Se.exec(t.slice(n, n + 2));
  return r ? (e.S = +r[0], n + r[0].length) : -1;
}
function Si(e, t, n) {
  var r = Se.exec(t.slice(n, n + 3));
  return r ? (e.L = +r[0], n + r[0].length) : -1;
}
function $i(e, t, n) {
  var r = Se.exec(t.slice(n, n + 6));
  return r ? (e.L = Math.floor(r[0] / 1e3), n + r[0].length) : -1;
}
function _i(e, t, n) {
  var r = li.exec(t.slice(n, n + 1));
  return r ? n + r[0].length : -1;
}
function Mi(e, t, n) {
  var r = Se.exec(t.slice(n));
  return r ? (e.Q = +r[0], n + r[0].length) : -1;
}
function Ci(e, t, n) {
  var r = Se.exec(t.slice(n));
  return r ? (e.s = +r[0], n + r[0].length) : -1;
}
function wr(e, t) {
  return ie(e.getDate(), t, 2);
}
function Ni(e, t) {
  return ie(e.getHours(), t, 2);
}
function ki(e, t) {
  return ie(e.getHours() % 12 || 12, t, 2);
}
function Ei(e, t) {
  return ie(1 + Lt.count(qe(e), e), t, 3);
}
function na(e, t) {
  return ie(e.getMilliseconds(), t, 3);
}
function Ti(e, t) {
  return na(e, t) + "000";
}
function Di(e, t) {
  return ie(e.getMonth() + 1, t, 2);
}
function Pi(e, t) {
  return ie(e.getMinutes(), t, 2);
}
function Ii(e, t) {
  return ie(e.getSeconds(), t, 2);
}
function Fi(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function Li(e, t) {
  return ie(rn.count(qe(e) - 1, e), t, 2);
}
function ra(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? xt(e) : xt.ceil(e);
}
function Ai(e, t) {
  return e = ra(e), ie(xt.count(qe(e), e) + (qe(e).getDay() === 4), t, 2);
}
function Hi(e) {
  return e.getDay();
}
function Ui(e, t) {
  return ie(Kt.count(qe(e) - 1, e), t, 2);
}
function Oi(e, t) {
  return ie(e.getFullYear() % 100, t, 2);
}
function Ri(e, t) {
  return e = ra(e), ie(e.getFullYear() % 100, t, 2);
}
function Yi(e, t) {
  return ie(e.getFullYear() % 1e4, t, 4);
}
function Wi(e, t) {
  var n = e.getDay();
  return e = n >= 4 || n === 0 ? xt(e) : xt.ceil(e), ie(e.getFullYear() % 1e4, t, 4);
}
function zi(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + ie(t / 60 | 0, "0", 2) + ie(t % 60, "0", 2);
}
function Sr(e, t) {
  return ie(e.getUTCDate(), t, 2);
}
function Bi(e, t) {
  return ie(e.getUTCHours(), t, 2);
}
function Vi(e, t) {
  return ie(e.getUTCHours() % 12 || 12, t, 2);
}
function ji(e, t) {
  return ie(1 + Gn.count(st(e), e), t, 3);
}
function aa(e, t) {
  return ie(e.getUTCMilliseconds(), t, 3);
}
function Gi(e, t) {
  return aa(e, t) + "000";
}
function qi(e, t) {
  return ie(e.getUTCMonth() + 1, t, 2);
}
function Xi(e, t) {
  return ie(e.getUTCMinutes(), t, 2);
}
function Zi(e, t) {
  return ie(e.getUTCSeconds(), t, 2);
}
function Ji(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function Qi(e, t) {
  return ie(ta.count(st(e) - 1, e), t, 2);
}
function oa(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? bt(e) : bt.ceil(e);
}
function Ki(e, t) {
  return e = oa(e), ie(bt.count(st(e), e) + (st(e).getUTCDay() === 4), t, 2);
}
function es(e) {
  return e.getUTCDay();
}
function ts(e, t) {
  return ie(en.count(st(e) - 1, e), t, 2);
}
function ns(e, t) {
  return ie(e.getUTCFullYear() % 100, t, 2);
}
function rs(e, t) {
  return e = oa(e), ie(e.getUTCFullYear() % 100, t, 2);
}
function as(e, t) {
  return ie(e.getUTCFullYear() % 1e4, t, 4);
}
function os(e, t) {
  var n = e.getUTCDay();
  return e = n >= 4 || n === 0 ? bt(e) : bt.ceil(e), ie(e.getUTCFullYear() % 1e4, t, 4);
}
function is() {
  return "+0000";
}
function $r() {
  return "%";
}
function _r(e) {
  return +e;
}
function Mr(e) {
  return Math.floor(+e / 1e3);
}
var mt, ia;
ss({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function ss(e) {
  return mt = si(e), ia = mt.format, mt.parse, mt.utcFormat, mt.utcParse, mt;
}
function ls(e) {
  return new Date(e);
}
function cs(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function sa(e, t, n, r, o, a, s, i, c, u) {
  var d = Jr(), f = d.invert, g = d.domain, x = u(".%L"), b = u(":%S"), _ = u("%I:%M"), M = u("%I %p"), T = u("%a %d"), D = u("%b %d"), P = u("%B"), F = u("%Y");
  function k(S) {
    return (c(S) < S ? x : i(S) < S ? b : s(S) < S ? _ : a(S) < S ? M : r(S) < S ? o(S) < S ? T : D : n(S) < S ? P : F)(S);
  }
  return d.invert = function(S) {
    return new Date(f(S));
  }, d.domain = function(S) {
    return arguments.length ? g(Array.from(S, cs)) : g().map(ls);
  }, d.ticks = function(S) {
    var y = g();
    return e(y[0], y[y.length - 1], S ?? 10);
  }, d.tickFormat = function(S, y) {
    return y == null ? k : u(y);
  }, d.nice = function(S) {
    var y = g();
    return (!S || typeof S.range != "function") && (S = t(y[0], y[y.length - 1], S ?? 10)), S ? g(Vo(y, S)) : d;
  }, d.copy = function() {
    return Zr(d, sa(e, t, n, r, o, a, s, i, c, u));
  }, d;
}
function us() {
  return jr.apply(sa(oi, ii, qe, qn, rn, Lt, jn, Vn, ht, ia).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function we(e) {
  return function() {
    return e;
  };
}
const Dn = Math.PI, Pn = 2 * Dn, et = 1e-6, fs = Pn - et;
function la(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function ds(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return la;
  const n = 10 ** t;
  return function(r) {
    this._ += r[0];
    for (let o = 1, a = r.length; o < a; ++o)
      this._ += Math.round(arguments[o] * n) / n + r[o];
  };
}
class ms {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? la : ds(t);
  }
  moveTo(t, n) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, n) {
    this._append`L${this._x1 = +t},${this._y1 = +n}`;
  }
  quadraticCurveTo(t, n, r, o) {
    this._append`Q${+t},${+n},${this._x1 = +r},${this._y1 = +o}`;
  }
  bezierCurveTo(t, n, r, o, a, s) {
    this._append`C${+t},${+n},${+r},${+o},${this._x1 = +a},${this._y1 = +s}`;
  }
  arcTo(t, n, r, o, a) {
    if (t = +t, n = +n, r = +r, o = +o, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
    let s = this._x1, i = this._y1, c = r - t, u = o - n, d = s - t, f = i - n, g = d * d + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = n}`;
    else if (g > et) if (!(Math.abs(f * c - u * d) > et) || !a)
      this._append`L${this._x1 = t},${this._y1 = n}`;
    else {
      let x = r - s, b = o - i, _ = c * c + u * u, M = x * x + b * b, T = Math.sqrt(_), D = Math.sqrt(g), P = a * Math.tan((Dn - Math.acos((_ + g - M) / (2 * T * D))) / 2), F = P / D, k = P / T;
      Math.abs(F - 1) > et && this._append`L${t + F * d},${n + F * f}`, this._append`A${a},${a},0,0,${+(f * x > d * b)},${this._x1 = t + k * c},${this._y1 = n + k * u}`;
    }
  }
  arc(t, n, r, o, a, s) {
    if (t = +t, n = +n, r = +r, s = !!s, r < 0) throw new Error(`negative radius: ${r}`);
    let i = r * Math.cos(o), c = r * Math.sin(o), u = t + i, d = n + c, f = 1 ^ s, g = s ? o - a : a - o;
    this._x1 === null ? this._append`M${u},${d}` : (Math.abs(this._x1 - u) > et || Math.abs(this._y1 - d) > et) && this._append`L${u},${d}`, r && (g < 0 && (g = g % Pn + Pn), g > fs ? this._append`A${r},${r},0,1,${f},${t - i},${n - c}A${r},${r},0,1,${f},${this._x1 = u},${this._y1 = d}` : g > et && this._append`A${r},${r},0,${+(g >= Dn)},${f},${this._x1 = t + r * Math.cos(a)},${this._y1 = n + r * Math.sin(a)}`);
  }
  rect(t, n, r, o) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}h${r = +r}v${+o}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function ca(e) {
  let t = 3;
  return e.digits = function(n) {
    if (!arguments.length) return t;
    if (n == null)
      t = null;
    else {
      const r = Math.floor(n);
      if (!(r >= 0)) throw new RangeError(`invalid digits: ${n}`);
      t = r;
    }
    return e;
  }, () => new ms(t);
}
function ua(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function fa(e) {
  this._context = e;
}
fa.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      // falls through
      default:
        this._context.lineTo(e, t);
        break;
    }
  }
};
function da(e) {
  return new fa(e);
}
function ma(e) {
  return e[0];
}
function pa(e) {
  return e[1];
}
function ha(e, t) {
  var n = we(!0), r = null, o = da, a = null, s = ca(i);
  e = typeof e == "function" ? e : e === void 0 ? ma : we(e), t = typeof t == "function" ? t : t === void 0 ? pa : we(t);
  function i(c) {
    var u, d = (c = ua(c)).length, f, g = !1, x;
    for (r == null && (a = o(x = s())), u = 0; u <= d; ++u)
      !(u < d && n(f = c[u], u, c)) === g && ((g = !g) ? a.lineStart() : a.lineEnd()), g && a.point(+e(f, u, c), +t(f, u, c));
    if (x) return a = null, x + "" || null;
  }
  return i.x = function(c) {
    return arguments.length ? (e = typeof c == "function" ? c : we(+c), i) : e;
  }, i.y = function(c) {
    return arguments.length ? (t = typeof c == "function" ? c : we(+c), i) : t;
  }, i.defined = function(c) {
    return arguments.length ? (n = typeof c == "function" ? c : we(!!c), i) : n;
  }, i.curve = function(c) {
    return arguments.length ? (o = c, r != null && (a = o(r)), i) : o;
  }, i.context = function(c) {
    return arguments.length ? (c == null ? r = a = null : a = o(r = c), i) : r;
  }, i;
}
function ps(e, t, n) {
  var r = null, o = we(!0), a = null, s = da, i = null, c = ca(u);
  e = typeof e == "function" ? e : e === void 0 ? ma : we(+e), t = typeof t == "function" ? t : we(t === void 0 ? 0 : +t), n = typeof n == "function" ? n : n === void 0 ? pa : we(+n);
  function u(f) {
    var g, x, b, _ = (f = ua(f)).length, M, T = !1, D, P = new Array(_), F = new Array(_);
    for (a == null && (i = s(D = c())), g = 0; g <= _; ++g) {
      if (!(g < _ && o(M = f[g], g, f)) === T)
        if (T = !T)
          x = g, i.areaStart(), i.lineStart();
        else {
          for (i.lineEnd(), i.lineStart(), b = g - 1; b >= x; --b)
            i.point(P[b], F[b]);
          i.lineEnd(), i.areaEnd();
        }
      T && (P[g] = +e(M, g, f), F[g] = +t(M, g, f), i.point(r ? +r(M, g, f) : P[g], n ? +n(M, g, f) : F[g]));
    }
    if (D) return i = null, D + "" || null;
  }
  function d() {
    return ha().defined(o).curve(s).context(a);
  }
  return u.x = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : we(+f), r = null, u) : e;
  }, u.x0 = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : we(+f), u) : e;
  }, u.x1 = function(f) {
    return arguments.length ? (r = f == null ? null : typeof f == "function" ? f : we(+f), u) : r;
  }, u.y = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : we(+f), n = null, u) : t;
  }, u.y0 = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : we(+f), u) : t;
  }, u.y1 = function(f) {
    return arguments.length ? (n = f == null ? null : typeof f == "function" ? f : we(+f), u) : n;
  }, u.lineX0 = u.lineY0 = function() {
    return d().x(e).y(t);
  }, u.lineY1 = function() {
    return d().x(e).y(n);
  }, u.lineX1 = function() {
    return d().x(r).y(t);
  }, u.defined = function(f) {
    return arguments.length ? (o = typeof f == "function" ? f : we(!!f), u) : o;
  }, u.curve = function(f) {
    return arguments.length ? (s = f, a != null && (i = s(a)), u) : s;
  }, u.context = function(f) {
    return arguments.length ? (f == null ? a = i = null : i = s(a = f), u) : a;
  }, u;
}
function Cr(e) {
  return e < 0 ? -1 : 1;
}
function Nr(e, t, n) {
  var r = e._x1 - e._x0, o = t - e._x1, a = (e._y1 - e._y0) / (r || o < 0 && -0), s = (n - e._y1) / (o || r < 0 && -0), i = (a * o + s * r) / (r + o);
  return (Cr(a) + Cr(s)) * Math.min(Math.abs(a), Math.abs(s), 0.5 * Math.abs(i)) || 0;
}
function kr(e, t) {
  var n = e._x1 - e._x0;
  return n ? (3 * (e._y1 - e._y0) / n - t) / 2 : t;
}
function vn(e, t, n) {
  var r = e._x0, o = e._y0, a = e._x1, s = e._y1, i = (a - r) / 3;
  e._context.bezierCurveTo(r + i, o + i * t, a - i, s - i * n, a, s);
}
function tn(e) {
  this._context = e;
}
tn.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        vn(this, this._t0, kr(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    var n = NaN;
    if (e = +e, t = +t, !(e === this._x1 && t === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, vn(this, kr(this, n = Nr(this, e, t)), n);
          break;
        default:
          vn(this, this._t0, n = Nr(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = n;
    }
  }
};
Object.create(tn.prototype).point = function(e, t) {
  tn.prototype.point.call(this, t, e);
};
function ga(e) {
  return new tn(e);
}
function hs(e, t, n) {
  const r = Vr(e, t);
  return us().domain(r).range(n);
}
function Er(e, t, n) {
  const [r, o] = Vr(e, t);
  if (!(Number.isFinite(r) && Number.isFinite(o)))
    return Tn().domain([0, 0]).range(n);
  let s;
  if (r <= 0)
    s = Math.min(0, r);
  else {
    const c = o - r, u = (c > 0 ? c : r) * 0.1;
    s = Math.max(0, r - u), s === r && (s = Math.max(0, r * 0.9));
  }
  const i = o ?? 0;
  return Tn().domain([s, i]).nice().range(n);
}
function gs(e, t, n, r) {
  const o = ha().x(t).y(n);
  return r?.smooth !== !1 && o.curve(ga), o(e) ?? "";
}
const ya = l.createContext(null), At = () => l.useContext(ya), ys = ({
  series: e,
  innerWidth: t,
  innerHeight: n,
  parseX: r,
  children: o,
  xTickCount: a = 6,
  yTickCount: s = 5,
  yDomain: i,
  xPadding: c,
  yPadding: u,
  yBottomGapPx: d
}) => {
  const f = It(), g = t ?? f?.innerWidth ?? 0, x = n ?? f?.innerHeight ?? 0, b = l.useMemo(() => e.flatMap((k) => k.data), [e]), _ = l.useCallback(
    (k) => {
      if (r) return r(k);
      const S = k.x;
      return S instanceof Date ? S : new Date(S);
    },
    [r]
  ), M = c ?? 6, T = u ?? 6, D = l.useMemo(
    () => hs(b, _, [
      M,
      Math.max(0, g - M)
    ]),
    [b, _, g, M]
  ), P = l.useMemo(() => {
    const k = Math.max(0, d ?? 0), S = Math.max(0, x - (T + k));
    if (i) {
      const y = Er([], ($) => $.y, [
        S,
        T
      ]);
      return y.domain(i), y;
    }
    return Er(b, (y) => y.y, [S, T]);
  }, [b, x, i, T, d]), F = l.useMemo(
    () => ({
      xScale: D,
      yScale: P,
      getXTicks: (k = a) => D.ticks(k),
      getYTicks: (k = s) => P.ticks(k)
    }),
    [D, P, a, s]
  );
  return /* @__PURE__ */ l.createElement(ya.Provider, { value: F }, o);
};
function vs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var xn = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Tr;
function xs() {
  return Tr || (Tr = 1, (function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function n() {
        for (var a = "", s = 0; s < arguments.length; s++) {
          var i = arguments[s];
          i && (a = o(a, r(i)));
        }
        return a;
      }
      function r(a) {
        if (typeof a == "string" || typeof a == "number")
          return a;
        if (typeof a != "object")
          return "";
        if (Array.isArray(a))
          return n.apply(null, a);
        if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]"))
          return a.toString();
        var s = "";
        for (var i in a)
          t.call(a, i) && a[i] && (s = o(s, i));
        return s;
      }
      function o(a, s) {
        return s ? a ? a + " " + s : a + s : a;
      }
      e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
    })();
  })(xn)), xn.exports;
}
var bs = xs();
const Fe = /* @__PURE__ */ vs(bs);
function ws(e) {
  switch (e) {
    case "xxl":
    case "xl":
      return 1;
    case "l":
      return 2;
    case "m":
      return 3;
    case "s":
      return 4;
    case "xs":
      return 5;
    default:
      return 2;
  }
}
function Ss(e) {
  const t = e.level ?? ws(e.size), n = [
    "nhsuk-heading",
    e.size ? `nhsuk-heading--${e.size}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), r = e.marginBottom ? { marginBottom: e.marginBottom } : void 0;
  return { tag: `h${t}`, classes: n, style: r };
}
const In = ({
  level: e,
  className: t,
  text: n,
  html: r,
  children: o,
  size: a,
  marginBottom: s,
  ...i
}) => {
  const c = Ss({ level: e, size: a, className: t, marginBottom: s }), u = o || (r ? /* @__PURE__ */ z.createElement("span", { dangerouslySetInnerHTML: { __html: r } }) : n);
  return Da(
    c.tag,
    { className: c.classes, style: c.style, ...i },
    u
  );
}, $s = ({
  id: e,
  className: t,
  headingText: n,
  headingHtml: r,
  headingLevel: o = 2,
  bodyText: a,
  bodyHtml: s,
  children: i,
  ...c
}) => {
  const u = Fe(
    "nhsuk-panel",
    t
  ), d = () => !n && !r && !i ? null : r ? /* @__PURE__ */ z.createElement(
    In,
    {
      level: o,
      className: "nhsuk-panel__heading",
      html: r,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : n ? /* @__PURE__ */ z.createElement(
    In,
    {
      level: o,
      className: "nhsuk-panel__heading",
      text: n,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : null, f = () => i ? /* @__PURE__ */ z.createElement("div", { className: "nhsuk-panel__body" }, i) : s ? /* @__PURE__ */ z.createElement(
    "div",
    {
      className: "nhsuk-panel__body",
      dangerouslySetInnerHTML: { __html: s }
    }
  ) : a ? /* @__PURE__ */ z.createElement("div", { className: "nhsuk-panel__body" }, /* @__PURE__ */ z.createElement("p", null, a)) : null;
  return /* @__PURE__ */ z.createElement("div", { className: u, id: e, ...c }, d(), f());
}, Mt = { current: null }, _s = () => {
  if (Mt.current) return Mt.current;
  try {
    Mt.current = require("prismjs");
    try {
      require("prismjs/components/prism-typescript");
    } catch {
    }
    try {
      require("prismjs/components/prism-tsx");
    } catch {
    }
    try {
      require("prismjs/components/prism-json");
    } catch {
    }
  } catch {
    Mt.current = null;
  }
  return Mt.current;
}, Ms = (e) => {
  const t = [
    { regex: /\b(import|from|export|const|let|var|return|if|else|for|while|switch|case|break|new|throw|try|catch|finally|class|extends|implements|interface|type|as|async|await|function)\b/g, cls: "kw" },
    { regex: /(['"`])(?:\\.|(?!\1).)*\1/g, cls: "str" },
    { regex: /\/\*[^]*?\*\/|\/\/.*$/gm, cls: "com" },
    { regex: /\b([0-9]+(?:\.[0-9]+)?)\b/g, cls: "num" }
  ];
  let n = e;
  return t.forEach((r) => {
    n = n.replace(r.regex, (o) => `<span class="nhsuk-code-${r.cls}">${o}</span>`);
  }), n;
}, nn = (e, t, n) => {
  if (n || !t) return e;
  const r = _s();
  if (r && r.languages) {
    const o = r.languages[t] ? t : r.languages.typescript && (t === "ts" || t === "tsx" || t === "typescript") ? "typescript" : r.languages.json && t === "json" ? "json" : void 0;
    if (o)
      try {
        return r.highlight(e, r.languages[o], o);
      } catch {
      }
  }
  return Ms(e);
}, Cs = ({
  rows: e,
  head: t,
  caption: n,
  captionSize: r,
  firstCellIsHeader: o = !1,
  responsive: a = !1,
  heading: s,
  headingLevel: i = 3,
  panel: c = !1,
  panelClasses: u,
  tableClasses: d,
  classes: f,
  attributes: g,
  "data-testid": x,
  columns: b,
  data: _,
  visuallyHiddenCaption: M = !1
}) => {
  const T = `nhsuk-table__caption ${r ? `nhsuk-table__caption--${r}` : ""}`.trim(), D = Fe(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": a
    },
    d
  ), P = Fe(f), F = (p, C) => {
    const w = Fe(
      "nhsuk-table__header",
      {
        [`nhsuk-table__header--${p.format}`]: p.format
      },
      p.classes
    ), H = {
      scope: "col",
      ...p.colspan && { colSpan: p.colspan },
      ...p.rowspan && { rowSpan: p.rowspan },
      ...a && { role: "columnheader" },
      ...p.attributes
    };
    let E;
    if (p.node != null)
      E = /* @__PURE__ */ z.createElement(z.Fragment, null, p.node);
    else if (p.html)
      E = /* @__PURE__ */ z.createElement("span", { dangerouslySetInnerHTML: { __html: p.html } });
    else if (p.code != null) {
      const N = Array.isArray(p.code), O = N ? p.code.join(`
`) : p.code, R = N || O.includes(`
`), Q = {
        className: Fe("nhsuk-table__code", p.codeClassName, {
          "nhsuk-table__code--block": R,
          "nhsuk-table__code--inline": !R
        }),
        ...p.codeLanguage ? { "data-language": p.codeLanguage } : {}
      }, se = nn(O, p.codeLanguage);
      E = R ? /* @__PURE__ */ z.createElement("pre", { className: "nhsuk-table__pre" }, /* @__PURE__ */ z.createElement(
        "code",
        {
          ...Q,
          dangerouslySetInnerHTML: { __html: se }
        }
      )) : /* @__PURE__ */ z.createElement(
        "code",
        {
          ...Q,
          dangerouslySetInnerHTML: { __html: se }
        }
      );
    } else
      E = p.text;
    return /* @__PURE__ */ z.createElement("th", { key: C, className: w, ...H }, E);
  }, k = (p, C, w) => {
    const H = o && w || p.rowHeader, E = Fe(
      H ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${H ? "header" : "cell"}--${p.format}`]: p.format
      },
      p.classes
    ), N = {
      ...H && { scope: "row" },
      ...p.colspan && { colSpan: p.colspan },
      ...p.rowspan && { rowSpan: p.rowspan },
      ...a && {
        role: H ? "rowheader" : "cell",
        ...p.header && { "data-label": p.header }
      },
      ...p.attributes
    };
    let O;
    if (p.node != null)
      O = /* @__PURE__ */ z.createElement(z.Fragment, null, p.node);
    else if (p.html)
      O = /* @__PURE__ */ z.createElement("span", { dangerouslySetInnerHTML: { __html: p.html } });
    else if (p.code != null) {
      const se = Array.isArray(p.code), X = se ? p.code.join(`
`) : p.code, Y = se || X.includes(`
`), ee = {
        className: Fe("nhsuk-table__code", p.codeClassName, {
          "nhsuk-table__code--block": Y,
          "nhsuk-table__code--inline": !Y
        }),
        ...p.codeLanguage ? { "data-language": p.codeLanguage } : {}
      }, ge = nn(
        X,
        p.codeLanguage,
        p.disableHighlight
      );
      O = Y ? /* @__PURE__ */ z.createElement("pre", { className: "nhsuk-table__pre" }, /* @__PURE__ */ z.createElement(
        "code",
        {
          ...ee,
          dangerouslySetInnerHTML: { __html: ge }
        }
      )) : /* @__PURE__ */ z.createElement(
        "code",
        {
          ...ee,
          dangerouslySetInnerHTML: { __html: ge }
        }
      );
    } else
      O = p.text;
    const R = /* @__PURE__ */ z.createElement(z.Fragment, null, a && p.header && /* @__PURE__ */ z.createElement("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true" }, p.header, " "), O), Q = H ? "th" : "td";
    return /* @__PURE__ */ z.createElement(Q, { key: C, className: E, ...N }, R);
  };
  let S = t, y = e;
  !S && b && b.length && (S = b.map((p) => ({
    text: p.title,
    format: p.format,
    classes: p.headerClasses,
    attributes: p.headerAttributes
  }))), !y && b && _ && _.length && (y = _.map((p, C) => b.map((w) => {
    const H = w.accessor ? w.accessor(p, C) : p[w.key];
    let E = { format: w.format, classes: w.cellClasses, attributes: w.cellAttributes };
    if (w.rowHeader && (E.rowHeader = !0), w.render) {
      const N = w.render(H, p, C, w);
      return N == null || typeof N == "boolean" ? { ...E, text: "" } : typeof N == "string" || typeof N == "number" ? { ...E, text: String(N) } : { ...E, ...N };
    }
    return { ...E, text: H != null ? String(H) : "" };
  })));
  const $ = () => /* @__PURE__ */ z.createElement(
    "table",
    {
      className: D,
      ...a && { role: "table" },
      ...g,
      ...x && { "data-testid": x }
    },
    n && /* @__PURE__ */ z.createElement("caption", { className: Fe(T, M && "nhsuk-u-visually-hidden") }, n),
    S && S.length > 0 && /* @__PURE__ */ z.createElement(
      "thead",
      {
        className: "nhsuk-table__head",
        ...a && { role: "rowgroup" }
      },
      /* @__PURE__ */ z.createElement("tr", { ...a && { role: "row" } }, S.map(
        (p, C) => F(p, C)
      ))
    ),
    /* @__PURE__ */ z.createElement("tbody", { className: "nhsuk-table__body" }, y && y.map((p, C) => /* @__PURE__ */ z.createElement(
      "tr",
      {
        key: C,
        className: "nhsuk-table__row",
        ...a && { role: "row" }
      },
      p.map(
        (w, H) => k(w, H, H === 0)
      )
    )))
  );
  return c ? /* @__PURE__ */ z.createElement($s, { className: u }, s && /* @__PURE__ */ z.createElement(In, { level: i, className: "nhsuk-table__heading-tab" }, s), $()) : P ? /* @__PURE__ */ z.createElement("div", { className: P }, $()) : $();
}, Ns = ({
  children: e,
  size: t,
  className: n
}) => {
  const r = Fe(
    "nhsuk-table__caption",
    t && `nhsuk-table__caption--${t}`,
    n
  );
  return /* @__PURE__ */ z.createElement("caption", { className: r }, e);
}, va = ({
  responsive: e,
  className: t,
  children: n,
  ...r
}) => {
  const o = e ? { role: "row" } : {};
  return /* @__PURE__ */ z.createElement("tr", { className: t, ...o, ...r }, n);
}, xa = ({
  text: e,
  html: t,
  node: n,
  code: r,
  codeLanguage: o,
  codeClassName: a,
  disableHighlight: s,
  format: i,
  classes: c,
  colspan: u,
  rowspan: d,
  attributes: f,
  responsive: g,
  as: x = "th"
}) => {
  const b = Fe(
    "nhsuk-table__header",
    { [`nhsuk-table__header--${i}`]: i },
    c
  ), _ = {
    scope: "col",
    ...u && { colSpan: u },
    ...d && { rowSpan: d },
    ...g && { role: "columnheader" },
    ...f
  };
  let M;
  if (n != null) M = /* @__PURE__ */ z.createElement(z.Fragment, null, n);
  else if (t) M = /* @__PURE__ */ z.createElement("span", { dangerouslySetInnerHTML: { __html: t } });
  else if (r != null) {
    const D = Array.isArray(r), P = D ? r.join(`
`) : r, F = D || P.includes(`
`), k = {
      className: Fe("nhsuk-table__code", a, {
        "nhsuk-table__code--block": F,
        "nhsuk-table__code--inline": !F
      }),
      ...o ? { "data-language": o } : {}
    }, S = nn(
      P,
      o,
      s
    );
    M = F ? /* @__PURE__ */ z.createElement("pre", { className: "nhsuk-table__pre" }, /* @__PURE__ */ z.createElement(
      "code",
      {
        ...k,
        dangerouslySetInnerHTML: { __html: S }
      }
    )) : /* @__PURE__ */ z.createElement("code", { ...k, dangerouslySetInnerHTML: { __html: S } });
  } else M = e;
  const T = x;
  return /* @__PURE__ */ z.createElement(T, { className: b, ..._ }, M);
}, ks = ({
  text: e,
  html: t,
  node: n,
  code: r,
  codeLanguage: o,
  codeClassName: a,
  disableHighlight: s,
  format: i,
  classes: c,
  colspan: u,
  rowspan: d,
  attributes: f,
  responsive: g,
  rowHeader: x
}) => {
  const b = !!x, _ = b ? "th" : "td", M = Fe(
    b ? "nhsuk-table__header" : "nhsuk-table__cell",
    i && `nhsuk-table__${b ? "header" : "cell"}--${i}`,
    c
  ), T = {
    ...u && { colSpan: u },
    ...d && { rowSpan: d },
    ...b && { scope: "row" },
    ...g && { role: b ? "rowheader" : "cell" },
    ...f
  };
  let D;
  if (n != null) D = /* @__PURE__ */ z.createElement(z.Fragment, null, n);
  else if (t) D = /* @__PURE__ */ z.createElement("span", { dangerouslySetInnerHTML: { __html: t } });
  else if (r != null) {
    const P = Array.isArray(r), F = P ? r.join(`
`) : r, k = P || F.includes(`
`), S = {
      className: Fe("nhsuk-table__code", a, {
        "nhsuk-table__code--block": k,
        "nhsuk-table__code--inline": !k
      }),
      ...o ? { "data-language": o } : {}
    }, y = nn(F, o, s);
    D = k ? /* @__PURE__ */ z.createElement("pre", { className: "nhsuk-table__pre" }, /* @__PURE__ */ z.createElement("code", { ...S, dangerouslySetInnerHTML: { __html: y } })) : /* @__PURE__ */ z.createElement("code", { ...S, dangerouslySetInnerHTML: { __html: y } });
  } else D = e;
  return /* @__PURE__ */ z.createElement(_, { className: M, ...T }, D);
}, ut = Cs;
ut.Caption = Ns;
ut.BodyRow = va;
ut.HeaderCell = xa;
ut.Cell = ks;
let Dr = !1, Pr = !1;
Object.defineProperty(ut, "Row", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !Dr && (console.warn("Table.Row is deprecated. Use Table.BodyRow instead."), Dr = !0), va;
  }
});
Object.defineProperty(ut, "TH", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !Pr && (console.warn("Table.TH is deprecated. Use Table.HeaderCell instead."), Pr = !0), xa;
  }
});
function Es(e) {
  const { color: t = "default", noBorder: n, closable: r, disabled: o, className: a } = e;
  return { classes: [
    "nhsuk-tag",
    t !== "default" ? `nhsuk-tag--${t}` : "",
    n ? "nhsuk-tag--no-border" : "",
    r ? "nhsuk-tag--closable" : "",
    o ? "nhsuk-tag--disabled" : "",
    a || ""
  ].filter(Boolean).join(" "), showClose: !!r, disabled: !!o };
}
const Ne = ({
  text: e,
  html: t,
  children: n,
  color: r = "default",
  noBorder: o = !1,
  closable: a = !1,
  onClose: s,
  disabled: i = !1,
  className: c,
  ...u
}) => {
  const d = Es({ color: r, noBorder: o, closable: a, disabled: i, className: c }), f = (g) => {
    g.preventDefault(), g.stopPropagation(), !i && s && s();
  };
  return /* @__PURE__ */ z.createElement("strong", { className: d.classes, ...u }, n || (t ? /* @__PURE__ */ z.createElement("span", { dangerouslySetInnerHTML: { __html: t } }) : e), a && /* @__PURE__ */ z.createElement(
    "button",
    {
      type: "button",
      className: "nhsuk-tag__close",
      onClick: f,
      disabled: i,
      "aria-label": "Remove",
      title: "Remove"
    },
    "×"
  ));
};
function Ts({
  warnings: e,
  show: t,
  formatWarningCategory: n,
  formatWarningCode: r
}) {
  const [o, a] = l.useState(""), s = l.useRef("");
  return l.useEffect(() => {
    if (!t) {
      s.current !== "" && (s.current = "", a(""));
      return;
    }
    const i = e.length;
    if (!i) {
      const f = "Diagnostics: no warnings.";
      f !== s.current && (s.current = f, a(f));
      return;
    }
    const c = {
      error: e.filter((f) => f.severity === Je.Error).length,
      warning: e.filter((f) => f.severity === Je.Warning).length,
      info: e.filter((f) => f.severity === Je.Info).length
    }, u = [];
    c.error && u.push(`${c.error} error${c.error === 1 ? "" : "s"}`), c.warning && u.push(`${c.warning} warning${c.warning === 1 ? "" : "s"}`), c.info && u.push(`${c.info} info`);
    const d = `Diagnostics updated: ${i} warning${i === 1 ? "" : "s"} (${u.join(", ")}).`;
    d !== s.current && (s.current = d, a(d));
  }, [t, e]), t ? /* @__PURE__ */ l.createElement(l.Fragment, null, o && /* @__PURE__ */ l.createElement(
    "div",
    {
      "data-testid": "spc-diagnostics-live",
      "aria-live": "polite",
      style: {
        position: "absolute",
        width: 1,
        height: 1,
        padding: 0,
        margin: 0,
        overflow: "hidden",
        clip: "rect(0 0 0 0)",
        whiteSpace: "nowrap",
        border: 0
      }
    },
    o
  ), e.length > 0 && /* @__PURE__ */ l.createElement("div", { className: "fdp-spc-chart__warnings", role: "region", "aria-label": "SPC diagnostics" }, /* @__PURE__ */ l.createElement("p", { className: "fdp-spc-chart__warnings-heading" }, "Diagnostics"), /* @__PURE__ */ l.createElement(
    ut,
    {
      firstCellIsHeader: !1,
      panel: !1,
      responsive: !1,
      head: [{ text: "Severity" }, { text: "Category" }, { text: "Code" }, { text: "Details" }],
      rows: e.map((i) => {
        let c = "grey";
        return i.severity === Je.Error ? c = "red" : i.severity === Je.Warning ? c = "orange" : i.severity === Je.Info && (c = "blue"), [
          {
            node: /* @__PURE__ */ l.createElement(Ne, { color: c, text: (i.severity ? String(i.severity) : "Info").replace(/^[a-z]/, (u) => u.toUpperCase()) }),
            classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--severity"
          },
          {
            node: i.category ? /* @__PURE__ */ l.createElement(Ne, { color: "purple", text: n(i.category) }) : /* @__PURE__ */ l.createElement("span", { className: "fdp-spc-chart__warning-empty" }, "–"),
            classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--category"
          },
          {
            node: /* @__PURE__ */ l.createElement(Ne, { color: "grey", text: r(i.code) }),
            classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--code"
          },
          {
            node: /* @__PURE__ */ l.createElement("div", { className: "fdp-spc-chart__warning-message" }, /* @__PURE__ */ l.createElement("span", null, i.message), i.context && Object.keys(i.context).length > 0 && /* @__PURE__ */ l.createElement("details", { className: "fdp-spc-chart__warning-context", style: { marginTop: 4 } }, /* @__PURE__ */ l.createElement("summary", null, "context"), /* @__PURE__ */ l.createElement("pre", null, JSON.stringify(i.context, null, 2)))),
            classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--message"
          }
        ];
      }),
      classes: "fdp-spc-chart__warnings-table-wrapper",
      tableClasses: "fdp-spc-chart__warnings-table"
    }
  ))) : null;
}
function Ds({
  variationNode: e,
  assuranceNode: t,
  show: n
}) {
  return n ? /* @__PURE__ */ l.createElement("div", { className: "fdp-spc-chart__top-row", style: { display: "flex", justifyContent: "flex-end", marginBottom: 4 } }, e, t) : null;
}
const Yl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceResult: Rt,
  Direction: Ye,
  MetricPolarity: Pa,
  SPCAssuranceIcon: Or,
  SPCVariationIcon: Rr,
  VariationJudgement: Ia,
  VariationState: Ct,
  getVariationColour: Fa,
  getVariationTrend: La
}, Symbol.toStringTag, { value: "Module" }));
function Ps(e) {
  const { show: t, rowsForUi: n, minPoints: r, metricImprovement: o, variant: a, runLength: s } = e;
  if (!t || !n?.length) return null;
  const i = n, c = typeof r == "number" && !isNaN(r) ? r : 13;
  if (i.filter(
    (k) => !k.data.ghost && k.data.value != null
  ).length < c) return null;
  let d = -1;
  for (let k = i.length - 1; k >= 0; k--) {
    const S = i[k];
    if (S && S.data.value != null && !S.data.ghost) {
      d = k;
      break;
    }
  }
  if (d === -1) return null;
  const f = i[d], g = f.classification?.variation, x = f.classification?.assurance, b = g === me.Neither && !!f.classification?.neutralSpecialCauseValue, _ = x === Bt.Pass ? Rt.Pass : x === Bt.Fail ? Rt.Fail : Rt.Uncertain;
  let M;
  if (g === me.Suppressed) {
    const k = !!f.rules.singlePoint.up, S = !!f.rules.singlePoint.down;
    o === at.Up ? k ? M = Ye.Higher : S && (M = Ye.Lower) : o === at.Down ? S ? M = Ye.Lower : k && (M = Ye.Higher) : M = Ye.Higher;
  } else if (g === me.Neither && b) {
    const k = f.rules.singlePoint.up || f.rules.twoOfThree.up || f.rules.fourOfFive.up || f.rules.shift.up || f.rules.trend.up, S = f.rules.singlePoint.down || f.rules.twoOfThree.down || f.rules.fourOfFive.down || f.rules.shift.down || f.rules.trend.down;
    k && !S ? M = Ye.Higher : S && !k ? M = Ye.Lower : M = Ye.Higher;
  }
  const T = 80, D = f.rules.singlePoint.up || f.rules.twoOfThree.up || f.rules.fourOfFive.up || f.rules.shift.up || f.rules.trend.up, P = f.rules.singlePoint.down || f.rules.twoOfThree.down || f.rules.fourOfFive.down || f.rules.shift.down || f.rules.trend.down;
  let F = re.CommonCause;
  return g === me.Improvement ? F = re.ImprovementHigh : g === me.Concern ? F = re.ConcernHigh : g === me.Neither && (b ? M === Ye.Lower || P && !D ? F = re.NeitherLow : F = re.NeitherHigh : F = re.CommonCause), /* @__PURE__ */ React.createElement(
    "div",
    {
      key: `embedded-icon-${d}`,
      style: { display: "flex", gap: 12, marginRight: 16 }
    },
    /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "fdp-spc-chart__embedded-icon",
        "data-variation": String(g),
        "data-trend": M ? String(M) : "none",
        style: { width: T, height: T }
      },
      /* @__PURE__ */ React.createElement(
        Rr,
        {
          dropShadow: !1,
          data: {
            variationIcon: F,
            improvementDirection: o,
            specialCauseNeutral: b,
            highSideSignal: D,
            lowSideSignal: P,
            ...M ? { trend: M } : {}
          },
          letterMode: o === at.Neither ? Qn.Direction : Qn.Polarity,
          size: T,
          variant: a,
          runLength: a === Yr.TriangleWithRun ? s : void 0
        }
      )
    ),
    /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "fdp-spc-chart__embedded-assurance-icon",
        "data-assurance": String(x),
        style: { width: T, height: T }
      },
      /* @__PURE__ */ React.createElement(
        Or,
        {
          status: _,
          size: T,
          dropShadow: !1
        }
      )
    )
  );
}
const Wt = 16, zt = 6, Is = 16, Fs = 4, Ls = 6, As = 3, Hs = void 0, Ir = ({
  type: e,
  scale: t,
  tickCount: n,
  tickValues: r,
  formatTick: o,
  label: a,
  offset: s,
  className: i,
  minLabelSpacing: c,
  maxTickLabelLength: u,
  autoMinLabelSpacing: d = e === "x",
  labelAngle: f = 0,
  allowLabelWrap: g = !0,
  tickFormatPreset: x,
  yZeroBreak: b
}) => {
  const _ = At(), M = It(), T = t || (e === "x" ? _?.xScale : _?.yScale), D = n ?? (e === "x" ? 6 : 5), P = typeof o == "function", F = l.useMemo(() => {
    if (P || !x) return;
    const y = ($) => new Intl.DateTimeFormat(void 0, $);
    switch (x) {
      case "dayShortMonth":
        return ($) => {
          const p = $ instanceof Date ? $ : new Date($);
          return `${p.getDate()}
${y({ month: "short" }).format(p)}`;
        };
      case "dayShortMonthYear":
        return ($) => {
          const p = $ instanceof Date ? $ : new Date($);
          return `${p.getDate()}
${y({ month: "short" }).format(p)} ${p.getFullYear()}`;
        };
      case "shortMonth":
        return ($) => {
          const p = $ instanceof Date ? $ : new Date($);
          return y({ month: "short" }).format(p);
        };
      case "shortMonthYear":
        return ($) => {
          const p = $ instanceof Date ? $ : new Date($);
          return `${y({ month: "short" }).format(p)} ${p.getFullYear()}`;
        };
      case "hourMinute":
        return ($) => {
          const p = $ instanceof Date ? $ : new Date($);
          return y({ hour: "2-digit", minute: "2-digit" }).format(p);
        };
      default:
        return;
    }
  }, [P, x]);
  let k = P ? o : F || ((y) => String(y));
  const S = l.useMemo(() => r && Array.isArray(r) ? r : T ? typeof T.ticks == "function" ? T.ticks(D) : T.domain ? T.domain() : [] : [], [T, D, r]);
  if (e === "x" && !P && !x && S.length && S.every((y) => y instanceof Date)) {
    const y = S[0], $ = S[S.length - 1], p = $.getTime() - y.getTime(), C = 24 * 3600 * 1e3, w = 365 * C, H = y.getFullYear() === $.getFullYear(), E = new Intl.DateTimeFormat(void 0, { month: "short" });
    if (p < 2 * C) {
      const N = new Intl.DateTimeFormat(void 0, {
        hour: "2-digit",
        minute: "2-digit"
      });
      k = (O) => N.format(O);
    } else if (p < 32 * C)
      k = (N) => {
        const O = N;
        return `${O.getDate()} ${E.format(O)}`;
      };
    else if (p < w && H)
      k = (N) => E.format(N);
    else if (p < 2 * w) {
      const N = /* @__PURE__ */ new Set();
      k = (O) => {
        const R = O, Q = R.getMonth();
        return N.has(Q) || N.add(Q), `${E.format(R)} ${R.getFullYear()}`;
      };
    } else
      k = (N) => String(N.getFullYear());
  }
  if (!T || !M) return null;
  if (e === "x") {
    const y = s ?? M.innerHeight, $ = typeof T.bandwidth == "function", p = $ ? T.bandwidth() : 0, C = (E) => {
      const N = T(E);
      return $ ? N + p / 2 : N;
    };
    let w = c ?? 0;
    if (d && c == null) {
      const E = S.map(
        (O) => k(O).replace(/\n.*/g, "")
      ), N = E.length ? E.reduce((O, R) => O + R.length, 0) / E.length : 0;
      w = Math.max(12, Math.round(N * 6 + 4));
    }
    const H = l.useMemo(() => {
      if (r && Array.isArray(r) || w <= 0) return S;
      const E = [];
      let N = -1 / 0;
      for (const O of S) {
        const R = C(O);
        R - N >= w && (E.push(O), N = R);
      }
      return E;
    }, [
      S,
      T,
      w,
      r,
      $,
      p
    ]);
    return /* @__PURE__ */ l.createElement(
      "g",
      {
        className: ["fdp-axis", "fdp-axis--x", i].filter(Boolean).join(" "),
        transform: `translate(0,${y})`,
        fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))"
      },
      /* @__PURE__ */ l.createElement("line", { x1: 0, x2: M.innerWidth, y1: 0, y2: 0, stroke: "currentColor" }),
      H.map((E, N) => {
        const O = k(E), R = u && O.length > u ? O.slice(0, Math.max(1, u - 1)) + "…" : O, Q = g ? R.split(/\n/) : [R.replace(/\n/g, " ")], se = f < 0 ? "end" : f > 0 ? "start" : "middle";
        return /* @__PURE__ */ l.createElement(
          "g",
          {
            key: E?.toString?.() || N,
            transform: `translate(${C(E)},0)`
          },
          /* @__PURE__ */ l.createElement("line", { y2: 6, stroke: "currentColor" }),
          /* @__PURE__ */ l.createElement(
            "text",
            {
              y: 9,
              textAnchor: se,
              className: "fdp-axis__tick",
              dominantBaseline: "hanging",
              transform: f ? `rotate(${f})` : void 0,
              fontFamily: "inherit"
            },
            Q.map((X, Y) => /* @__PURE__ */ l.createElement("tspan", { key: Y, x: 0, dy: Y === 0 ? 0 : "1.1em" }, X)),
            R !== O && /* @__PURE__ */ l.createElement("title", null, O)
          )
        );
      })
    );
  }
  return /* @__PURE__ */ l.createElement(
    "g",
    {
      className: ["fdp-axis", "fdp-axis--y", i].filter(Boolean).join(" "),
      fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))"
    },
    (() => {
      const y = !!b?.enabled, $ = Math.max(zt, b?.gapPx ?? Wt);
      if (!y)
        return /* @__PURE__ */ l.createElement("line", { x1: 0, x2: 0, y1: 0, y2: M.innerHeight, stroke: "currentColor" });
      const p = Math.max(0, M.innerHeight - $);
      return /* @__PURE__ */ l.createElement("line", { x1: 0, x2: 0, y1: 0, y2: p, stroke: "currentColor" });
    })(),
    S.map((y, $) => {
      const p = k(y), C = u && p.length > u ? p.slice(0, Math.max(1, u - 1)) + "…" : p, w = g ? C.split(/\n/) : [C.replace(/\n/g, " ")];
      if (!!b?.enabled) {
        const E = Math.max(zt, b?.gapPx ?? Wt), N = Math.max(0, M.innerHeight - E);
        if (T(y) > N - 1) return null;
      }
      return /* @__PURE__ */ l.createElement(
        "g",
        {
          key: y?.toString?.() || $,
          transform: `translate(0,${T(y)})`
        },
        /* @__PURE__ */ l.createElement("line", { x2: -6, stroke: "currentColor" }),
        /* @__PURE__ */ l.createElement(
          "text",
          {
            x: -9,
            dy: "0.32em",
            textAnchor: "end",
            className: "fdp-axis__tick",
            fontFamily: "inherit"
          },
          w.map((E, N) => /* @__PURE__ */ l.createElement("tspan", { key: N, x: -9, dy: N === 0 ? 0 : "1.1em" }, E)),
          C !== p && /* @__PURE__ */ l.createElement("title", null, p)
        )
      );
    }),
    !!b?.enabled && (() => {
      const y = Math.max(zt, b?.gapPx ?? Wt), $ = M.innerHeight, C = Math.max(0, $ - y), w = C, E = Math.max(4, $ - w), N = Fs, O = Ls, R = Math.max(1, Math.round(b?.zigZag?.amplitudePx ?? N)), Q = Math.max(1, Math.round(b?.zigZag?.stepXPx ?? As)), se = b?.zigZag?.heightPx ?? Hs, X = Math.max(4, Math.round(se ?? 0));
      let Y, ee;
      if (b?.zigZag?.heightPx && b.zigZag.heightPx > 0) {
        const ae = Math.max(4, Math.min(E - 2, X));
        Y = Math.max(1, Math.floor(ae / (2 * R))), ee = Math.max(0, Math.min(ae, Y * 2 * R));
      } else typeof b?.zigZag?.cycles == "number" && b?.zigZag?.cycles > 0 ? (Y = Math.max(1, Math.round(b.zigZag.cycles)), ee = Y * 2 * R, ee = Math.min(ee, E - 2), Y = Math.max(1, Math.floor(ee / (2 * R)))) : (Y = O, ee = Math.min(E - 2, Y * 2 * R), Y = Math.max(1, Math.floor(ee / (2 * R))));
      const ge = w + (E - ee) / 2, B = ge + ee;
      let $e = "M0,0";
      const Ee = ee > 0 ? Math.max(0, Math.floor((ee - R) / (2 * R))) : 0, ye = Math.max(0, (ee - Ee * 2 * R) / 2), ue = R > 0 ? Q * (ye / R) : 0;
      ye > 0 && ($e += ` l${ue},${ye}`);
      for (let ae = 0; ae < Ee; ae++)
        $e += ` l-${Q},${R} l${Q},${R}`;
      return ye > 0 && ($e += ` l-${ue},${ye}`), /* @__PURE__ */ l.createElement("g", null, /* @__PURE__ */ l.createElement("line", { x1: 0, x2: 0, y1: C, y2: ge, stroke: "currentColor" }), /* @__PURE__ */ l.createElement("g", { transform: `translate(0,${ge})`, "aria-hidden": "true" }, /* @__PURE__ */ l.createElement("path", { d: $e, stroke: "currentColor", fill: "none" })), /* @__PURE__ */ l.createElement("line", { x1: 0, x2: 0, y1: B, y2: $, stroke: "currentColor" }), /* @__PURE__ */ l.createElement("g", { transform: `translate(0,${$})` }, /* @__PURE__ */ l.createElement("text", { x: -9, dy: "0.32em", textAnchor: "end", className: "fdp-axis__tick", fontFamily: "inherit" }, "0")));
    })(),
    a && /* @__PURE__ */ l.createElement(
      "text",
      {
        transform: "rotate(-90)",
        x: -M.innerHeight / 2,
        y: -M.margin.left + 12,
        textAnchor: "middle",
        className: "fdp-axis__label",
        fontFamily: "inherit"
      },
      a
    )
  );
}, Us = ({
  axis: e = "y",
  tickCount: t,
  stroke: n = "var(--fdp-chart-grid,#e5e5e5)",
  dasharray: r = "2 4",
  className: o
}) => {
  const a = At(), s = It();
  if (!a || !s) return null;
  const i = e === "y" ? a.getYTicks(t) : a.getXTicks(t);
  return /* @__PURE__ */ l.createElement("g", { className: ["fdp-grid", o].filter(Boolean).join(" ") }, e === "y" && i.map((c, u) => /* @__PURE__ */ l.createElement(
    "line",
    {
      key: u,
      x1: 0,
      x2: s.innerWidth,
      y1: a.yScale(c),
      y2: a.yScale(c),
      stroke: n,
      strokeDasharray: r
    }
  )), e === "x" && i.map((c, u) => /* @__PURE__ */ l.createElement(
    "line",
    {
      key: u,
      y1: 0,
      y2: s.innerHeight,
      x1: a.xScale(c),
      x2: a.xScale(c),
      stroke: n,
      strokeDasharray: r
    }
  )));
}, Os = { "data-viz": { $type: "color", categorical: { 1: { $value: "{color.primary.blue}", $description: "Series 1 – NHS Blue (brand core)" }, 2: { $value: "#41B6E6", $description: "Series 2 – NHS Light Blue (new)" }, 3: { $value: "{color.secondary.aqua-green}", $description: "Series 3 – NHS Aqua Green (existing)" }, 4: { $value: "#78BE20", $description: "Series 4 – NHS Light Green (new)" }, 5: { $value: "{color.primary.green}", $description: "Series 5 – NHS Green (existing)" }, 6: { $value: "{color.secondary.warm-yellow}", $description: "Series 6 – NHS Warm Yellow (existing; distinct from focus yellow)" }, 7: { $value: "#ED4F00", $description: "Series 7 – NHS Tangerine (new; warmer/deeper than existing orange)" }, 8: { $value: "{color.secondary.pink}", $description: "Series 8 – NHS Pink (existing)" }, 9: { $value: "#E317AA", $description: "Series 9 – NHS Bright Pink (new vivid accent)" }, 10: { $value: "#880FB8", $description: "Series 10 – NHS Light Purple (new mid purple)" }, 11: { $value: "{color.primary.purple}", $description: "Series 11 – NHS Purple (existing dark purple)" }, 12: { $value: "#9A6324", $description: "Series 12 – NHS Brown (new; earth neutral)" } }, neutral: { comparison: { $value: "{color.grey.1}", $description: "Neutral comparison series (optional)" } }, region: { $comment: "Fixed colours for NHS geographical regions; prefer stable mapping for maps. London colour updated (#78BE21 – light green).", "north-east": { $value: "{color.primary.blue}", $description: "North East – NHS Blue" }, "north-west": { $value: "#41B6E6", $description: "North West – NHS Light Blue" }, "east-of-england": { $value: "{color.primary.purple}", $description: "East of England – NHS Purple" }, midlands: { $value: "{color.secondary.pink}", $description: "Midlands – NHS Pink" }, london: { $value: "#78BE21", $description: "London – NHS Light Green (new)" }, "south-west": { $value: "#FAE100", $description: "South West – NHS Yellow variant (new)" }, "south-east": { $value: "#ed8b00", $description: "South East – NHS Orange (existing base orange)" } }, severity: { $comment: "Semantic severity / alert colours (light background ramp → critical).", low: { $value: "{color.secondary.pale-yellow}", $description: "Low severity – pale yellow background" }, moderate: { $value: "{color.secondary.warm-yellow}", $description: "Moderate severity – warm yellow" }, high: { $value: "{color.secondary.orange}", $description: "High severity – orange" }, critical: { $value: "{color.primary.red}", $description: "Critical severity – red" } }, "org-level": { $comment: "Organisational level semantic colours (stable NHS brand mappings).", trust: { $value: "{color.primary.blue}", $description: "Trust – NHS Blue" }, ambulance: { $value: "{color.primary.green}", $description: "Ambulance – NHS Green" }, icb: { $value: "{color.primary.dark-pink}", $description: "ICB – NHS Dark Pink" }, region: { $value: "{color.primary.purple}", $description: "Region – NHS Purple" } }, stroke: { $comment: "Automatic contrast stroke colours for overlays / borders. Light fills get dark stroke; dark fills get white stroke.", categorical: { 1: { $value: "#ffffff", $description: "Stroke for series 1 (blue)" }, 2: { $value: "#212b32", $description: "Stroke for series 2 (light blue)" }, 3: { $value: "#212b32", $description: "Stroke for series 3 (aqua green)" }, 4: { $value: "#212b32", $description: "Stroke for series 4 (light green)" }, 5: { $value: "#ffffff", $description: "Stroke for series 5 (green)" }, 6: { $value: "#212b32", $description: "Stroke for series 6 (warm yellow)" }, 7: { $value: "#ffffff", $description: "Stroke for series 7 (tangerine)" }, 8: { $value: "#ffffff", $description: "Stroke for series 8 (pink)" }, 9: { $value: "#ffffff", $description: "Stroke for series 9 (bright pink)" }, 10: { $value: "#ffffff", $description: "Stroke for series 10 (light purple)" }, 11: { $value: "#ffffff", $description: "Stroke for series 11 (purple)" }, 12: { $value: "#ffffff", $description: "Stroke for series 12 (brown)" } }, region: { $comment: "Region stroke colours derived from fill colours: dark fills lightened ~35%; light fills darkened ~25% for consistent contrast without defaulting to pure white/black.", "north-east": { $value: "#5996D1", $description: "Stroke for North East (blue lightened 35%)" }, "north-west": { $value: "#3189AD", $description: "Stroke for North West (light blue darkened 25%)" }, "east-of-england": { $value: "#7A59A3", $description: "Stroke for East of England (purple lightened 35%)" }, midlands: { $value: "#CA71A4", $description: "Stroke for Midlands (pink lightened 35%)" }, london: { $value: "#5A8F19", $description: "Stroke for London (light green darkened 25%)" }, "south-west": { $value: "#BCA900", $description: "Stroke for South West (yellow darkened 25%)" }, "south-east": { $value: "#B26800", $description: "Stroke for South East (orange darkened 25%)" } }, severity: { $comment: "Contrast strokes for severity colours (light backgrounds use dark stroke; dark backgrounds use white).", low: { $value: "#212b32", $description: "Stroke for low severity (pale yellow fill)" }, moderate: { $value: "#212b32", $description: "Stroke for moderate severity (warm yellow fill)" }, high: { $value: "#212b32", $description: "Stroke for high severity (orange fill)" }, critical: { $value: "#ffffff", $description: "Stroke for critical severity (red fill)" } }, "org-level": { $comment: "Contrast strokes for organisational level colours (all dark brand fills so white stroke for consistency).", trust: { $value: "#ffffff", $description: "Stroke for trust (blue fill)" }, ambulance: { $value: "#ffffff", $description: "Stroke for ambulance (green fill)" }, icb: { $value: "#ffffff", $description: "Stroke for ICB (dark pink fill)" }, region: { $value: "#ffffff", $description: "Stroke for region (purple fill)" } } }, spc: { $comment: "SPC (Statistical Process Control) semantic variation colours aligned to SPCChart.scss and SPCIcons.", improvement: { $value: "#00B0F0", $description: "SPC special cause improvement (favourable)" }, concern: { $value: "#E46C0A", $description: "SPC special cause concern (deteriorating)" }, "no-judgement": { $value: "#490092", $description: "SPC special cause (no directional judgement)" }, "common-cause": { $value: "#A6A6A6", $description: "SPC common cause (baseline variation)" }, "assurance-pass": { $value: "#00823B", $description: "SPC assurance pass indicator (process capable)" }, "assurance-fail": { $value: "#DA291C", $description: "SPC assurance fail indicator (process not capable)" }, gradient: { $comment: "Opacity stops for SPC icon gradient wash (applied top-left -> bottom-right). Consumers build gradients using these opacities + base colour.", stop: { "start-opacity": { $value: "0.18", $description: "Start stop opacity (0%) for classic variant wash" }, "mid-opacity": { $value: "0.06", $description: "Mid stop opacity (~65-75%)" }, "end-opacity": { $value: "0", $description: "End stop opacity (100%)" }, "triangle-start-opacity": { $value: "0.18", $description: "Start opacity for triangle variants (kept aligned)" }, "triangle-mid-opacity": { $value: "0.06", $description: "Mid opacity for triangle variants" }, "triangle-end-opacity": { $value: "0", $description: "End opacity for triangle variants" } } }, stroke: { $comment: "Contrast stroke colours for SPC variation fills.", improvement: { $value: "#000000", $description: "Stroke for improvement points" }, concern: { $value: "#000000", $description: "Stroke for concern points" }, "no-judgement": { $value: "#000000", $description: "Stroke for no-judgement points" }, "common-cause": { $value: "#ffffff", $description: "Stroke for common cause points" }, "assurance-pass": { $value: "#000000", $description: "Stroke for assurance pass points" }, "assurance-fail": { $value: "#000000", $description: "Stroke for assurance fail points" } } } } }, Xn = {
  color: Os
}, Rs = { primary: { $type: "color", blue: { $value: "#005eb8", $description: "NHS Blue - Primary brand color" }, "blue-active": { $value: "#002f5c", $description: "NHS Active Blue (50% shade) – alias of button/login active; promoted for general reuse" }, white: { $value: "#ffffff", $description: "NHS White" }, black: { $value: "#212b32", $description: "NHS Black" }, green: { $value: "#007f3b", $description: "NHS Green" }, purple: { $value: "#330072", $description: "NHS Purple" }, "dark-pink": { $value: "#7c2855", $description: "NHS Dark Pink" }, red: { $value: "#d5281b", $description: "NHS Red" }, "light-purple": { $value: "#880FB8", $description: "NHS Light Purple (data viz promoted)" }, yellow: { $value: "#ffeb3b", $description: "NHS Yellow" } }, secondary: { $type: "color", "pale-yellow": { $value: "#fff9c4", $description: "NHS Pale Yellow" }, "warm-yellow": { $value: "#ffb81c", $description: "NHS Warm Yellow" }, "region-yellow": { $value: "#FAE100", $description: "NHS Region Yellow (maps)" }, orange: { $value: "#ed8b00", $description: "NHS Orange" }, tangerine: { $value: "#ED4F00", $description: "NHS Tangerine (data viz promoted)" }, "aqua-green": { $value: "#00a499", $description: "NHS Aqua Green" }, "light-blue": { $value: "#41B6E6", $description: "NHS Light Blue (data viz promoted)" }, pink: { $value: "#ae2573", $description: "NHS Pink" }, "bright-pink": { $value: "#E317AA", $description: "NHS Bright Pink (data viz promoted)" }, "light-green": { $value: "#78BE20", $description: "NHS Light Green (data viz promoted)" }, brown: { $value: "#9A6324", $description: "NHS Brown (data viz promoted neutral)" } }, grey: { 1: { $value: "#4c6272", $description: "NHS Grey 1 - Darkest grey" }, 2: { $value: "#768692", $description: "NHS Grey 2 - Darker grey" }, 3: { $value: "#aeb7bd", $description: "NHS Grey 3 - Medium grey" }, 4: { $value: "#d8dde0", $description: "NHS Grey 4 - Light grey" }, 5: { $value: "#f0f4f5", $description: "NHS Grey 5 - Lightest grey" }, $type: "color" }, accessibility: { $type: "color", $comment: "Accessibility-oriented color tokens. Includes CVD-safe pairs and Okabe–Ito colors. Use these for positive/negative semantics and colour-blind–friendly defaults.", "okabe-ito": { green: { $value: "#009E73", $description: "Okabe–Ito green (CVD-safe) – recommended positive" }, vermillion: { $value: "#D55E00", $description: "Okabe–Ito vermillion / red–orange (CVD-safe) – recommended negative" } }, "cvd-safe": { blue: { $value: "#1f77b4", $description: "CVD-safe blue (pairs with orange); widely used in Matplotlib/Tableau sets" }, orange: { $value: "#ff7f0e", $description: "CVD-safe orange (pairs with blue)" } }, positive: { $value: "{color.accessibility.okabe-ito.green}", $description: "Accessibility semantic alias – positive" }, negative: { $value: "{color.accessibility.okabe-ito.vermillion}", $description: "Accessibility semantic alias – negative" } } }, ba = {
  color: Rs
}, Ys = [
  "#005eb8",
  "#0072ce",
  "#41b6e6",
  "#00a499",
  "#7c2855",
  "#330072",
  "#d5281b",
  "#ffb81c",
  "#fae100",
  "#4c6272",
  "#768692",
  "#aeb7bd"
];
let bn = null, wn = null, Sn = null, wa = "optimized";
function Ws() {
  const e = { color: { ...ba.color, ...Xn.color } }, t = (r, o = /* @__PURE__ */ new Set()) => {
    if (o.has(r)) return;
    o.add(r);
    const a = r.split(".").reduce((i, c) => i ? i[c] : void 0, e);
    if (!a) return;
    const s = a.$value || a.value;
    if (typeof s == "string" && /^\{.+\}$/.test(s))
      return t(s.slice(1, -1), o);
    if (typeof s == "string") return s;
  }, n = [];
  try {
    for (let r = 1; r <= 12; r++) {
      const o = `color.data-viz.categorical.${r}`, a = t(o);
      if (!a) throw new Error(`Missing token ${o}`);
      n.push(a);
    }
    return n;
  } catch {
    return Ys;
  }
}
function zs() {
  return bn || (bn = Ws()), bn;
}
function Bs(e) {
  const t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e.trim());
  return t ? { r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16) } : null;
}
function $n(e) {
  return e /= 255, e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
}
function Vs(e, t, n) {
  const r = $n(e), o = $n(t), a = $n(n), s = r * 0.4124 + o * 0.3576 + a * 0.1805, i = r * 0.2126 + o * 0.7152 + a * 0.0722, c = r * 0.0193 + o * 0.1192 + a * 0.9505;
  return { x: s * 100, y: i * 100, z: c * 100 };
}
function js(e, t, n) {
  let s = e / 95.047, i = t / 100, c = n / 108.883;
  const u = (d) => d > 8856e-6 ? Math.cbrt(d) : 7.787 * d + 16 / 116;
  return s = u(s), i = u(i), c = u(c), { L: 116 * i - 16, a: 500 * (s - i), b: 200 * (i - c) };
}
function Sa(e) {
  const t = Bs(e);
  if (!t) return null;
  const n = Vs(t.r, t.g, t.b);
  return js(n.x, n.y, n.z);
}
function Fr(e, t) {
  const n = e.L - t.L, r = e.a - t.a, o = e.b - t.b;
  return Math.sqrt(n * n + r * r + o * o);
}
function Gs() {
  const e = zs();
  if (e.length <= 2) return e.slice();
  const t = e.map((s) => Sa(s));
  let n = 0, r = -1;
  for (let s = 0; s < e.length; s++) {
    const i = t[s];
    if (!i) continue;
    let c = 0, u = 0;
    for (let f = 0; f < e.length; f++) s !== f && t[f] && (c += Fr(i, t[f]), u++);
    const d = c / Math.max(1, u);
    d > r && (r = d, n = s);
  }
  const o = new Set(e.map((s, i) => i)), a = [];
  for (a.push(n), o.delete(n); o.size; ) {
    let s = Array.from(o)[0], i = -1;
    for (const c of o) {
      const u = t[c];
      if (!u) continue;
      let d = 1 / 0;
      for (const f of a) {
        const g = t[f];
        if (g) {
          const x = Fr(u, g);
          x < d && (d = x);
        }
      }
      d > i && (i = d, s = c);
    }
    a.push(s), o.delete(s);
  }
  return a.map((s) => e[s]);
}
function qs() {
  return wn || (wn = Gs()), wn;
}
function Xs(e, t, n) {
  const r = (e + 16) / 116, o = t / 500 + r, a = r - n / 200, s = (d) => {
    const f = d * d * d;
    return f > 8856e-6 ? f : (d - 16 / 116) / 7.787;
  }, i = s(o) * 95.047, c = s(r) * 100, u = s(a) * 108.883;
  return { X: i, Y: c, Z: u };
}
function Zs(e, t, n) {
  e /= 100, t /= 100, n /= 100;
  let r = e * 3.2406 + t * -1.5372 + n * -0.4986, o = e * -0.9689 + t * 1.8758 + n * 0.0415, a = e * 0.0557 + t * -0.204 + n * 1.057;
  const s = (i) => i <= 31308e-7 ? 12.92 * i : 1.055 * Math.pow(i, 1 / 2.4) - 0.055;
  return r = Math.min(1, Math.max(0, s(r))), o = Math.min(1, Math.max(0, s(o))), a = Math.min(1, Math.max(0, s(a))), { r: Math.round(r * 255), g: Math.round(o * 255), b: Math.round(a * 255) };
}
function Js(e, t, n) {
  return `#${[e, t, n].map((r) => r.toString(16).padStart(2, "0")).join("")}`;
}
function Qs(e, t) {
  const n = Sa(e);
  if (!n) return e;
  const r = Math.min(100, Math.max(0, n.L + t)), { X: o, Y: a, Z: s } = Xs(r, n.a, n.b), i = Zs(o, a, s);
  return Js(i.r, i.g, i.b);
}
function Ks() {
  const e = qs(), n = [12, -12, 24, -24].map((o) => e.map((a) => Qs(a, o))), r = [...e];
  return n.forEach((o) => r.push(...o)), r;
}
function el() {
  return (!Sn || tl()) && (Sn = Ks(), $a = wa), Sn;
}
let $a = null;
function tl() {
  return $a !== wa;
}
function _a(e) {
  const t = el();
  return t[e % t.length];
}
let yt = null, Pt = null, Fn = null, Ln = null;
function nl() {
  const e = Xn?.color?.["data-viz"]?.stroke;
  if (e) {
    const t = e.categorical || {};
    yt = [];
    for (let a = 1; a <= 12; a++) {
      const s = t[String(a)]?.$value || t[String(a)]?.value;
      yt.push(typeof s == "string" ? s : "#212b32");
    }
    const n = e.region || {};
    Pt = {}, Object.keys(n).forEach((a) => {
      const s = n[a]?.$value || n[a]?.value;
      typeof s == "string" && (Pt[a] = s);
    });
    const r = e.severity || {}, o = e["org-level"] || {};
    Ln = {}, Object.keys(o).forEach((a) => {
      const s = o[a]?.$value || o[a]?.value;
      typeof s == "string" && (Ln[a] = s);
    }), Fn = {}, Object.keys(r).forEach((a) => {
      const s = r[a]?.$value || r[a]?.value;
      typeof s == "string" && (Fn[a] = s);
    });
  }
}
function Ma() {
  (!yt || !Pt || !Fn || !Ln) && nl();
}
function Ca(e) {
  return Ma(), yt ? yt[e % yt.length] : "#212b32";
}
function rl(e) {
  return Ma(), Pt ? Pt[e] : void 0;
}
function al(e, t) {
  return rl(e) || Ca(t);
}
let _n = null;
const ol = [
  "north-east",
  "north-west",
  "east-of-england",
  "midlands",
  "london",
  "south-west",
  "south-east"
];
function il(e) {
  return e.trim().toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function sl() {
  const e = { color: { ...ba.color, ...Xn.color } }, t = (o, a = /* @__PURE__ */ new Set()) => {
    if (a.has(o)) return;
    a.add(o);
    const s = o.split(".").reduce((c, u) => c ? c[u] : void 0, e);
    if (!s) return;
    const i = s.$value || s.value;
    return typeof i == "string" && /^\{.+\}$/.test(i) ? t(i.slice(1, -1), a) : typeof i == "string" ? i : void 0;
  }, n = {}, r = [];
  return ol.forEach((o) => {
    const a = t(`color.data-viz.region.${o}`);
    a ? n[o] = a : r.push(o);
  }), process.env.NODE_ENV !== "production" && (Object.keys(n).length === 0 ? console.warn("[DataViz] Region colour tokens unresolved  falling back to categorical colours.") : r.length && console.warn(`[DataViz] Missing region colour tokens: ${r.join(", ")}.`)), n;
}
function ll() {
  return _n || (_n = sl()), _n;
}
function cl(e) {
  return ll()[il(e)];
}
function ul(e, t) {
  return cl(e) || _a(t);
}
const fl = l.createContext(null), Na = () => l.useContext(fl), ka = l.createContext(null), wt = () => l.useContext(ka), dl = ({
  children: e,
  maxDistance: t = 40,
  wrapAround: n = !1
}) => {
  const r = At(), o = Na(), [a, s] = l.useState(null), i = l.useRef(/* @__PURE__ */ new Map()), [c, u] = l.useState([]), d = l.useCallback(
    (y, $) => {
      i.current.set(y, $);
    },
    []
  ), f = l.useCallback((y) => {
    i.current.delete(y);
  }, []), g = l.useCallback(
    (y, $) => {
      if (!r) return;
      const { xScale: p, yScale: C } = r;
      let w = null, H = 1 / 0;
      i.current.forEach((E, N) => {
        E.forEach((O, R) => {
          const Q = p(O.x), se = C(O.y), X = Q - y, Y = se - $, ee = Math.sqrt(X * X + Y * Y);
          ee < H && (H = ee, w = {
            seriesId: N,
            index: R,
            x: O.x,
            y: O.y,
            clientX: Q,
            clientY: se
          });
        });
      }), w && H <= t ? s(w) : s(null);
    },
    [r, t]
  ), x = l.useCallback(() => s(null), []);
  l.useEffect(() => {
    if (!a) {
      u([]);
      return;
    }
    if (!r) return;
    const { xScale: y, yScale: $ } = r, p = [];
    i.current.forEach((C, w) => {
      C.forEach((H, E) => {
        (a.x instanceof Date && H.x instanceof Date ? H.x.getTime() === a.x.getTime() : H.x === a.x) && p.push({
          seriesId: w,
          index: E,
          x: H.x,
          y: H.y,
          clientX: y(H.x),
          clientY: $(H.y)
        });
      });
    }), p.sort((C, w) => C.seriesId.localeCompare(w.seriesId)), u(p);
  }, [a, r]);
  const b = l.useCallback(
    (y) => {
      if (!a) return;
      const $ = i.current.get(a.seriesId);
      if (!$) return;
      let p = a.index + y;
      if (p < 0 || p >= $.length) {
        if (!n) return;
        p = (p + $.length) % $.length;
      }
      const C = $[p];
      if (!r) return;
      const { xScale: w, yScale: H } = r;
      s({
        seriesId: a.seriesId,
        index: p,
        x: C.x,
        y: C.y,
        clientX: w(C.x),
        clientY: H(C.y)
      });
    },
    [a, r, n]
  ), _ = l.useCallback(
    (y) => {
      let $ = Array.from(i.current.keys());
      if (o && ($ = $.filter((Q) => !o.isHidden(Q))), $.length === 0) return;
      if (!a) {
        const Q = $[0], se = i.current.get(Q);
        if (!se || !r) return;
        const { xScale: X, yScale: Y } = r, ee = se[0];
        s({
          seriesId: Q,
          index: 0,
          x: ee.x,
          y: ee.y,
          clientX: X(ee.x),
          clientY: Y(ee.y)
        });
        return;
      }
      const p = $.indexOf(a.seriesId);
      if (p === -1) return;
      let C = p + y;
      if (C < 0 || C >= $.length) {
        if (!n) return;
        C = (C + $.length) % $.length;
      }
      const w = $[C], H = i.current.get(w);
      if (!H || !r) return;
      const E = Math.min(a.index, H.length - 1), N = H[E], { xScale: O, yScale: R } = r;
      s({
        seriesId: w,
        index: E,
        x: N.x,
        y: N.y,
        clientX: O(N.x),
        clientY: R(N.y)
      });
    },
    [a, r, n, o]
  ), M = l.useCallback(() => {
    let y = Array.from(i.current.keys());
    if (o && (y = y.filter((E) => !o.isHidden(E))), y.length === 0) return;
    const $ = a ? a.seriesId : y[0], p = i.current.get($);
    if (!p || p.length === 0 || !r) return;
    const C = p[0], { xScale: w, yScale: H } = r;
    s({
      seriesId: $,
      index: 0,
      x: C.x,
      y: C.y,
      clientX: w(C.x),
      clientY: H(C.y)
    });
  }, [a, r, o]), T = l.useCallback(() => {
    let y = Array.from(i.current.keys());
    if (o && (y = y.filter((N) => !o.isHidden(N))), y.length === 0) return;
    const $ = a ? a.seriesId : y[0], p = i.current.get($);
    if (!p || p.length === 0 || !r) return;
    const C = p.length - 1, w = p[C], { xScale: H, yScale: E } = r;
    s({
      seriesId: $,
      index: C,
      x: w.x,
      y: w.y,
      clientX: H(w.x),
      clientY: E(w.y)
    });
  }, [a, r, o]), D = l.useCallback(
    () => b(1),
    [b]
  ), P = l.useCallback(
    () => b(-1),
    [b]
  ), F = l.useCallback(
    () => _(1),
    [_]
  ), k = l.useCallback(
    () => _(-1),
    [_]
  ), S = l.useMemo(
    () => ({
      focused: a,
      setFocused: s,
      aggregated: c,
      focusNearest: g,
      clear: x,
      registerSeries: d,
      unregisterSeries: f,
      focusNextPoint: D,
      focusPrevPoint: P,
      focusNextSeries: F,
      focusPrevSeries: k,
      focusFirstPoint: M,
      focusLastPoint: T
    }),
    [
      a,
      c,
      g,
      x,
      d,
      f,
      D,
      P,
      F,
      k,
      M,
      T
    ]
  );
  return /* @__PURE__ */ l.createElement(ka.Provider, { value: S }, e);
}, ml = ({
  series: e,
  seriesIndex: t,
  palette: n,
  showPoints: r,
  focusablePoints: o,
  focusIndex: a,
  parseX: s,
  visibilityMode: i = "remove",
  strokeWidth: c = 1,
  smooth: u = !0,
  gradientFillId: d,
  colors: f
}) => {
  const g = At();
  if (!g) return null;
  const { xScale: x, yScale: b } = g, M = Na()?.isHidden(e.id) ?? !1, T = M && i === "fade";
  if (M && i === "remove")
    return null;
  const D = wt();
  l.useEffect(() => {
    if (!D) return;
    const $ = e.data.map((p) => ({ x: s(p), y: p.y }));
    return D.registerSeries(e.id, $), () => D.unregisterSeries(e.id);
  }, [D, e.id, e.data, s]);
  const P = l.useMemo(
    () => gs(
      e.data,
      ($) => x(s($)),
      ($) => b($.y),
      { smooth: u }
    ),
    [e.data, x, b, s, u]
  ), F = l.useMemo(() => {
    if (!e.data.length) return "";
    const [$] = b.domain(), p = ps().x((C) => x(s(C))).y0(() => b($)).y1((C) => b(C.y));
    return u && p.curve(ga), p(e.data) || "";
  }, [e.data, x, b, s, u]), k = f && f[t], S = e.color || k || (n === "region" ? ul(e.id, t) : _a(t)), y = n === "region" ? al(e.id, t) : Ca(t);
  return /* @__PURE__ */ l.createElement(
    "g",
    {
      className: "fdp-line-series",
      "data-series": e.id,
      opacity: T ? 0.25 : 1,
      "aria-hidden": T ? !0 : void 0
    },
    d && /* @__PURE__ */ l.createElement(
      "path",
      {
        d: F,
        fill: `url(#${d})`,
        stroke: "none",
        role: "presentation",
        className: "fdp-line-series__gradient"
      }
    ),
    /* @__PURE__ */ l.createElement(
      "path",
      {
        d: P,
        fill: "none",
        stroke: S,
        strokeWidth: c,
        role: "presentation"
      }
    ),
    r && e.data.map(($, p) => {
      const C = x(s($)), w = b($.y), H = o ? 0 : -1, E = !T && (o && p === a || D?.focused?.seriesId === e.id && D.focused.index === p), N = () => {
        D && !T && D.setFocused({
          seriesId: e.id,
          index: p,
          x: s($),
          y: $.y,
          clientX: C,
          clientY: w
        });
      }, O = () => {
        D && D.focused?.seriesId === e.id && D.focused.index === p && D.clear();
      };
      return /* @__PURE__ */ l.createElement(
        "circle",
        {
          key: p,
          cx: C,
          cy: w,
          r: E ? 5 : 3.5,
          stroke: E ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : y,
          strokeWidth: E ? 2 : 1,
          fill: E ? "var(--nhs-fdp-color-grey-3, #aeb7bd)" : S,
          className: "fdp-line-point",
          tabIndex: T ? -1 : H,
          "aria-label": `${e.label || e.id} ${s($).toDateString()} value ${$.y}`,
          "data-series": e.id,
          "data-index": p,
          onMouseEnter: N,
          onFocus: N,
          onMouseLeave: O,
          onBlur: O
        }
      );
    })
  );
}, pl = ({
  engineRows: e,
  limits: t,
  pointDescriber: n,
  measureName: r,
  measureUnit: o,
  dateFormatter: a,
  enableNeutralNoJudgement: s = !0,
  showTrendGatingExplanation: i = !0
}) => {
  const c = wt(), u = It(), [d, f] = l.useState(null), [g, x] = l.useState(!1), b = l.useRef(null);
  l.useEffect(() => {
    if (c) {
      if (c.focused && (f(c.focused), b.current && (cancelAnimationFrame(b.current), b.current = null)), !c.focused && !g) {
        const ce = requestAnimationFrame(() => {
          f(null), b.current = null;
        });
        b.current = ce;
      }
      return () => {
        b.current && (cancelAnimationFrame(b.current), b.current = null);
      };
    }
  }, [c, c?.focused, g]);
  const _ = c && (c.focused || (g ? d : null) || d), [M, T] = l.useState(!1);
  l.useEffect(() => {
    const ce = requestAnimationFrame(() => T(!0));
    return () => cancelAnimationFrame(ce);
  }, [_?.index]);
  const D = u?.innerWidth ?? 0, P = u?.innerHeight ?? 0, F = _ ? Math.min(Math.max(_.clientX, 0), D) : 0, k = _ ? Math.min(Math.max(_.clientY, 0), P) : 0, S = u?.ref?.current || void 0;
  if (!_)
    return null;
  const y = e?.[_.index], p = Hn(
    y ? {
      specialCauseSinglePointUp: !!y.rules.singlePoint.up,
      specialCauseSinglePointDown: !!y.rules.singlePoint.down,
      specialCauseTwoOfThreeUp: !!y.rules.twoOfThree.up,
      specialCauseTwoOfThreeDown: !!y.rules.twoOfThree.down,
      specialCauseFourOfFiveUp: !!y.rules.fourOfFive.up,
      specialCauseFourOfFiveDown: !!y.rules.fourOfFive.down,
      specialCauseShiftUp: !!y.rules.shift.up,
      specialCauseShiftDown: !!y.rules.shift.down,
      specialCauseTrendUp: !!y.rules.trend.up,
      specialCauseTrendDown: !!y.rules.trend.down
    } : null
  ).map((ce) => ({ id: ce, label: kt[ce].tooltip })), C = _.x instanceof Date ? _.x : new Date(_.x), w = a ? a(C) : C.toDateString(), H = o ? `${o}` : "", E = r || H ? `${_.y}${H ? "" + H : " "}${r ? " " + r : ""}` : `${_.y}`, N = Un(y?.classification?.variation), O = Wr(y?.classification?.assurance), R = Aa(
    t.mean ?? null,
    t.sigma,
    _.y
  ), Q = n ? n(_.index, { x: _.x, y: _.y }) : void 0, se = N || O || R, X = y?.rules.trend.up || y?.rules.trend.down, Y = y?.classification?.variation === me.Neither && X, ee = i && Y ? "Trend detected (monotonic run) – held neutral until values cross onto the favourable side of the mean." : null, ge = p.length > 0, B = y && "primeDirection" in y ? y.primeDirection : void 0, $e = y && "primeRuleId" in y ? y.primeRuleId : void 0, Ee = s && y?.classification?.variation === me.Neither && ge, ye = "var(--nhs-fdp-color-primary-yellow, #ffeb3b)", ue = Ha(y?.classification?.variation), ae = 6.2, G = [
    Q || "",
    `${w} • ${E}`
  ].filter(Boolean).reduce(
    (ce, ke) => Math.max(ce, ke.length * ae + 32),
    0
  ), q = 200, v = 440, le = Math.min(v, Math.max(q, G));
  let K = F + 12, he = (u.margin?.top ?? 0) + k + 16;
  K + le > D && (K = F - -60 - le), K < 0 && (K = Math.max(0, D - le));
  const _e = _ ? `spc-tooltip-${_.index}` : "spc-tooltip", De = typeof _.index == "number" ? _.index : NaN, Le = S ? Oa(
    /* @__PURE__ */ l.createElement(
      "div",
      {
        id: _e,
        className: "fdp-spc-tooltip fdp-spc-tooltip-portal" + (M ? " is-visible" : ""),
        style: {
          position: "absolute",
          left: K,
          top: he,
          width: le,
          maxWidth: v,
          zIndex: 10,
          pointerEvents: "auto",
          userSelect: "none"
        },
        role: "tooltip",
        "aria-live": "polite",
        "aria-hidden": M ? "false" : "true",
        "data-floating": !0,
        "data-placement": K + le + 12 > D ? "left" : "right",
        onPointerEnter: () => {
          x(!0), b.current && (cancelAnimationFrame(b.current), b.current = null);
        },
        onPointerLeave: () => {
          if (x(!1), !c?.focused) {
            const ce = requestAnimationFrame(() => {
              f(null), b.current = null;
            });
            b.current = ce;
          }
        }
      },
      /* @__PURE__ */ l.createElement("div", { className: "fdp-spc-tooltip__body" }, /* @__PURE__ */ l.createElement("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--point" }, /* @__PURE__ */ l.createElement("div", { className: "fdp-spc-tooltip__section-label" }, /* @__PURE__ */ l.createElement("strong", null, "Point")), /* @__PURE__ */ l.createElement("div", { className: "fdp-spc-tooltip__primary-line" }, "Index: ", De)), /* @__PURE__ */ l.createElement("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--date" }, /* @__PURE__ */ l.createElement("div", { className: "fdp-spc-tooltip__section-label" }, /* @__PURE__ */ l.createElement("strong", null, "Date")), /* @__PURE__ */ l.createElement("div", { className: "fdp-spc-tooltip__primary-line" }, w)), /* @__PURE__ */ l.createElement("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--value" }, /* @__PURE__ */ l.createElement("div", { className: "fdp-spc-tooltip__section-label" }, /* @__PURE__ */ l.createElement("strong", null, "Value")), /* @__PURE__ */ l.createElement("div", { className: "fdp-spc-tooltip__primary-line" }, E)), se && /* @__PURE__ */ l.createElement("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--signals" }, /* @__PURE__ */ l.createElement("div", { className: "fdp-spc-tooltip__section-label" }, /* @__PURE__ */ l.createElement("strong", null, "Signals")), /* @__PURE__ */ l.createElement("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Signals" }, N?.toLowerCase().includes("concern") ? /* @__PURE__ */ l.createElement(
        Ne,
        {
          text: N,
          color: "default",
          className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--concern"
        }
      ) : N?.toLowerCase().includes("improvement") ? /* @__PURE__ */ l.createElement(
        Ne,
        {
          text: N,
          color: "default",
          className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--improvement"
        }
      ) : Ee ? /* @__PURE__ */ l.createElement(
        Ne,
        {
          text: "No judgement",
          color: "default",
          className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--no-judgement",
          "aria-label": "Neutral special cause (no directional judgement)"
        }
      ) : N ? /* @__PURE__ */ l.createElement(
        Ne,
        {
          text: N,
          color: "default",
          className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--common"
        }
      ) : null)), O && /* @__PURE__ */ l.createElement("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--assurance" }, /* @__PURE__ */ l.createElement("div", { className: "fdp-spc-tooltip__section-label" }, /* @__PURE__ */ l.createElement("strong", null, "Assurance")), /* @__PURE__ */ l.createElement("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits" }, (() => {
        const ce = O.toLowerCase(), m = !(ce.includes("not met") || ce.includes("not achieved")) && /(^|\b)(met|achieved)(\b|$)/.test(ce);
        return /* @__PURE__ */ l.createElement(
          Ne,
          {
            text: O,
            color: "default",
            className: `fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--assurance ${m ? "fdp-spc-tag--improvement" : "fdp-spc-tag--concern"}`,
            "aria-label": `Assurance: ${O}`
          }
        );
      })())), R && /* @__PURE__ */ l.createElement("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--limits" }, /* @__PURE__ */ l.createElement("div", { className: "fdp-spc-tooltip__section-label" }, /* @__PURE__ */ l.createElement("strong", null, "Control Limits & Sigma")), /* @__PURE__ */ l.createElement("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits" }, /* @__PURE__ */ l.createElement(
        Ne,
        {
          text: (() => {
            const ce = R.toLowerCase();
            return ce.startsWith("within 1") ? "≤1σ" : ce.startsWith("1–2") ? "1–2σ" : ce.startsWith("2–3") ? "2–3σ" : ce.startsWith(">3") ? ">3σ" : R;
          })(),
          color: R.includes(">3") ? "orange" : R.includes("2–3") ? "yellow" : "grey",
          "aria-label": `Sigma zone: ${R}`,
          className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--zone"
        }
      ))), ee && /* @__PURE__ */ l.createElement("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--gating", "data-gating": !0 }, /* @__PURE__ */ l.createElement("div", { className: "fdp-spc-tooltip__section-label" }, /* @__PURE__ */ l.createElement("strong", null, "Trend gating")), /* @__PURE__ */ l.createElement("div", { className: "fdp-spc-tooltip__explanation", "aria-live": "off" }, ee)), ge && /* @__PURE__ */ l.createElement("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules" }, /* @__PURE__ */ l.createElement("div", { className: "fdp-spc-tooltip__section-label" }, /* @__PURE__ */ l.createElement("strong", null, "Special cause")), /* @__PURE__ */ l.createElement(
        "div",
        {
          className: "fdp-spc-tooltip__rule-tags",
          "aria-label": "Special cause rules"
        },
        p.map(({ id: ce, label: ke }) => {
          const m = String(ce), I = m === Vt.TrendIncreasing || m === Vt.TrendDecreasing ? "fdp-spc-tag--trend" : Ee ? "fdp-spc-tag--no-judgement" : N ? N.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : N.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common";
          return /* @__PURE__ */ l.createElement(
            Ne,
            {
              key: m,
              text: ke,
              color: "default",
              className: `fdp-spc-tooltip__tag fdp-spc-tag ${I}`,
              "data-rule-id": m
            }
          );
        })
      ), B && /* @__PURE__ */ l.createElement("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules", style: { marginTop: 16 } }, /* @__PURE__ */ l.createElement("div", { className: "fdp-spc-tooltip__section-label", style: { marginBottom: 6 } }, /* @__PURE__ */ l.createElement("strong", null, "Prime Direction")), (() => {
        const ce = Ee ? "fdp-spc-tag--no-judgement" : N ? N.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : N.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common", ke = `${B}${$e ? ` (${$e})` : ""}`;
        return /* @__PURE__ */ l.createElement(
          Ne,
          {
            text: ke,
            color: "default",
            className: `fdp-spc-tooltip__tag fdp-spc-tag ${ce}`,
            "aria-label": `Prime direction ${B}${$e ? ` via ${$e}` : ""}`
          }
        );
      })())))
    ),
    S
  ) : null;
  return /* @__PURE__ */ l.createElement(
    "g",
    {
      className: "fdp-tooltip-layer fdp-spc-tooltip",
      pointerEvents: "none",
      "aria-hidden": "true"
    },
    /* @__PURE__ */ l.createElement(
      "circle",
      {
        cx: F,
        cy: k,
        r: 7,
        fill: "none",
        stroke: ye,
        strokeWidth: 3
      }
    ),
    /* @__PURE__ */ l.createElement(
      "circle",
      {
        cx: F,
        cy: k,
        r: 5,
        fill: "#000",
        stroke: ye,
        strokeWidth: 1.5
      }
    ),
    /* @__PURE__ */ l.createElement(
      "circle",
      {
        cx: F,
        cy: k,
        r: 2.5,
        fill: ue,
        stroke: "#fff",
        strokeWidth: 0.5
      }
    ),
    Le
  );
}, hl = ({ polite: e = !0, format: t }) => {
  const n = wt(), [r, o] = l.useState(""), a = l.useRef("");
  return l.useEffect(() => {
    if (!n?.focused) return;
    const { focused: s, aggregated: i } = n;
    let c;
    if (i && i.length > 1) {
      const u = i.map((f) => `${f.seriesId} ${f.y}`).join("; ");
      c = `${s.x instanceof Date ? s.x.toDateString() : String(s.x)} – ${u}`;
    } else
      c = t ? t({ seriesId: s.seriesId, x: s.x, y: s.y, index: s.index }) : gl(s.seriesId, s.x, s.y, s.index);
    if (c !== a.current) {
      a.current = c, o("");
      const u = setTimeout(() => o(c), 10);
      return () => clearTimeout(u);
    }
  }, [n?.focused, t]), /* @__PURE__ */ l.createElement(
    "div",
    {
      "aria-live": e ? "polite" : "assertive",
      "aria-atomic": "true",
      style: { position: "absolute", width: 1, height: 1, margin: -1, padding: 0, overflow: "hidden", clip: "rect(0 0 0 0)", border: 0 }
    },
    r
  );
};
function gl(e, t, n, r) {
  const o = t instanceof Date ? t.toDateString() : String(t);
  return `Series ${e}, point ${r + 1}, ${o}, value ${n}`;
}
const yl = ({
  engineRows: e,
  measureName: t,
  measureUnit: n,
  onSignalFocus: r
}) => {
  const o = wt(), a = o?.focused ?? null, s = a?.index ?? null, i = typeof s == "number" && e ? e[s] : null, c = l.useMemo(
    () => i ? Hn({
      specialCauseSinglePointUp: !!i.rules.singlePoint.up,
      specialCauseSinglePointDown: !!i.rules.singlePoint.down,
      specialCauseTwoOfThreeUp: !!i.rules.twoOfThree.up,
      specialCauseTwoOfThreeDown: !!i.rules.twoOfThree.down,
      specialCauseFourOfFiveUp: !!i.rules.fourOfFive.up,
      specialCauseFourOfFiveDown: !!i.rules.fourOfFive.down,
      specialCauseShiftUp: !!i.rules.shift.up,
      specialCauseShiftDown: !!i.rules.shift.down,
      specialCauseTrendUp: !!i.rules.trend.up,
      specialCauseTrendDown: !!i.rules.trend.down
    }) : [],
    [i]
  ), u = l.useMemo(
    () => Array.from(
      new Set(c.map((_) => kt[_]?.narration).filter(Boolean))
    ),
    [c]
  ), d = i ? Un(i.classification?.variation) : null, f = i ? Wr(i.classification?.assurance) : null, g = c.length > 0, x = i ? i.classification?.variation === me.Neither && g : !1, b = l.useRef(null);
  return l.useEffect(() => {
    if (!r || !a || i == null) return;
    const _ = `${a.seriesId}:${a.index}`;
    if (b.current !== _) {
      b.current = _;
      try {
        r({
          index: a.index,
          x: a.x,
          y: a.y,
          row: i,
          rules: c
        });
      } catch {
      }
    }
  }, [a?.seriesId, a?.index, a?.x, a?.y, i, c, r]), /* @__PURE__ */ l.createElement(
    "div",
    {
      className: "fdp-spc-inspector",
      role: "region",
      "aria-label": "Signals inspector",
      "data-testid": "spc-signals-inspector"
    },
    /* @__PURE__ */ l.createElement(
      "div",
      {
        className: "fdp-spc-inspector__header",
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }
      },
      /* @__PURE__ */ l.createElement("strong", null, "Signals inspector"),
      /* @__PURE__ */ l.createElement("div", { className: "fdp-spc-inspector__nav", "aria-hidden": !o }, o && /* @__PURE__ */ l.createElement("div", { style: { display: "flex", gap: 8 } }, /* @__PURE__ */ l.createElement(
        "button",
        {
          type: "button",
          className: "fdp-button fdp-button--secondary",
          onClick: () => {
            o.focused ? o.focusPrevPoint() : o.focusFirstPoint();
          },
          "aria-label": "Previous point"
        },
        "◀"
      ), /* @__PURE__ */ l.createElement(
        "button",
        {
          type: "button",
          className: "fdp-button fdp-button--secondary",
          onClick: () => {
            o.focused ? o.focusNextPoint() : o.focusFirstPoint();
          },
          "aria-label": "Next point"
        },
        "▶"
      )))
    ),
    !i || !a ? /* @__PURE__ */ l.createElement("p", { className: "fdp-spc-inspector__empty" }, "No point selected.") : /* @__PURE__ */ l.createElement("div", { className: "fdp-spc-inspector__body" }, /* @__PURE__ */ l.createElement(
      "div",
      {
        className: "fdp-spc-inspector__summary",
        style: { display: "flex", gap: 16, flexWrap: "wrap" }
      },
      /* @__PURE__ */ l.createElement("span", null, /* @__PURE__ */ l.createElement("strong", null, "Point:"), " ", a.index + 1),
      /* @__PURE__ */ l.createElement("span", null, /* @__PURE__ */ l.createElement("strong", null, "Value:"), " ", a.y, n ? ` ${n}` : "", t ? ` ${t}` : "")
    ), (d || x || f) && /* @__PURE__ */ l.createElement(
      "div",
      {
        className: "fdp-spc-inspector__signals",
        style: { marginTop: 8 }
      },
      /* @__PURE__ */ l.createElement(
        "div",
        {
          style: {
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            alignItems: "center"
          }
        },
        d?.toLowerCase().includes("concern") ? /* @__PURE__ */ l.createElement(
          Ne,
          {
            text: d,
            color: "default",
            className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--concern"
          }
        ) : d?.toLowerCase().includes("improvement") ? /* @__PURE__ */ l.createElement(
          Ne,
          {
            text: d,
            color: "default",
            className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--improvement"
          }
        ) : x ? /* @__PURE__ */ l.createElement(
          Ne,
          {
            text: "No judgement",
            color: "default",
            className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--no-judgement",
            "aria-label": "Neutral special cause (no directional judgement)"
          }
        ) : d ? /* @__PURE__ */ l.createElement(
          Ne,
          {
            text: d,
            color: "default",
            className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--common"
          }
        ) : null,
        f && (() => {
          const _ = f.toLowerCase(), T = !(_.includes("not met") || _.includes("not achieved")) && /(^|\b)(met|achieved)(\b|$)/.test(_);
          return /* @__PURE__ */ l.createElement(
            Ne,
            {
              text: f,
              color: "default",
              className: `fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--assurance ${T ? "fdp-spc-tag--improvement" : "fdp-spc-tag--concern"}`,
              "aria-label": `Assurance: ${f}`
            }
          );
        })()
      )
    ), /* @__PURE__ */ l.createElement("div", { className: "fdp-spc-inspector__rules", style: { marginTop: 8 } }, /* @__PURE__ */ l.createElement("strong", null, "Special cause:"), /* @__PURE__ */ l.createElement(
      "div",
      {
        className: "fdp-spc-tooltip__rule-tags",
        "aria-label": "Special cause rules",
        style: {
          display: "flex",
          gap: 6,
          flexWrap: "wrap",
          marginTop: 4
        }
      },
      c.length === 0 ? /* @__PURE__ */ l.createElement("span", null, " None") : c.map((_) => {
        const M = String(_), D = M === Vt.TrendIncreasing || M === Vt.TrendDecreasing ? "fdp-spc-tag--trend" : x ? "fdp-spc-tag--no-judgement" : d ? d.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : d.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common", P = kt[_]?.tooltip || M;
        return /* @__PURE__ */ l.createElement(
          Ne,
          {
            key: M,
            text: P,
            color: "default",
            className: `fdp-spc-tooltip__tag fdp-spc-tag ${D}`,
            "data-rule-id": M,
            title: kt[_]?.tooltip
          }
        );
      })
    )), u.length > 0 && /* @__PURE__ */ l.createElement(
      "div",
      {
        className: "fdp-spc-inspector__narration",
        style: { marginTop: 8 }
      },
      /* @__PURE__ */ l.createElement("strong", null, "Summary:"),
      " ",
      u.join("; ")
    ))
  );
};
function vl(e, t = !0) {
  if (!e?.length) return [];
  const n = [...e];
  if (t) {
    for (let a = 1; a < n.length - 1; a++)
      n[a] === be.Common && n[a - 1] === n[a + 1] && n[a - 1] !== be.Common && (n[a] = n[a - 1]);
    let o = 0;
    for (; o < n.length; ) {
      const a = n[o];
      let s = o + 1;
      for (; s < n.length && n[s] === a; ) s++;
      s - o === 1 && a !== be.Common && (n[o] = be.Common), o = s;
    }
  }
  const r = [];
  if (n.length) {
    let o = 0;
    for (let a = 1; a <= n.length; a++)
      if (a === n.length || n[a] !== n[o]) {
        const s = n[o], i = a - 1, c = i - o + 1;
        (s === be.Common || c >= 2) && r.push({ start: o, end: i, category: s }), o = a;
      }
  }
  return r;
}
var Nt = /* @__PURE__ */ ((e) => (e.Slope = "slope", e.Neutral = "neutral", e.Extend = "extend", e))(Nt || {}), Ea = /* @__PURE__ */ ((e) => (e.Ungated = "ungated", e.Gated = "gated", e))(Ea || {});
function xl(e) {
  const {
    ui: t,
    input: n,
    engine: r,
    container: o,
    a11y: a,
    visualsEngine: s,
    meta: i,
    data: c,
    ariaLabel: u,
    height: d,
    showZones: f,
    showPoints: g,
    announceFocus: x,
    className: b,
    unit: _,
    targets: M,
    baselines: T,
    ghosts: D,
    settings: P,
    chartType: F,
    metricImprovement: k,
    gradientSequences: S,
    sequenceTransition: y,
    processLineWidth: $,
    showPartitionMarkers: p,
    showWarningsPanel: C,
    warningsFilter: w,
    enableNeutralNoJudgement: H,
    showTrendGatingExplanation: E,
    trendVisualMode: N,
    alwaysShowZeroY: O,
    alwaysShowHundredY: R,
    percentScale: Q,
    showTrendStartMarkers: se,
    showFirstFavourableCrossMarkers: X,
    showTrendBridgeOverlay: Y,
    showSignalsInspector: ee,
    onSignalFocus: ge,
    showIcons: B,
    showEmbeddedIcon: $e,
    embeddedIconVariant: Ee,
    embeddedIconRunLength: ye,
    showFocusIndicator: ue,
    visualsScenario: ae,
    visualsEngineSettings: L,
    source: G,
    narrationContext: q,
    highlightOutOfControl: v,
    precomputed: le
  } = e;
  process.env.NODE_ENV !== "production" && (!n && (M !== void 0 || T !== void 0 || D !== void 0) && console.warn(
    "SPCChart: Flat input props (targets/baselines/ghosts) are deprecated. Use input={{ data, targets, baselines, ghosts }} instead."
  ), !r && P !== void 0 && console.warn(
    "SPCChart: Flat engine prop 'settings' is deprecated. Use engine={{ chartType, metricImprovement, settings }}."
  ), !o && (d !== void 0 || b !== void 0) && console.warn(
    "SPCChart: Consider grouped container props. Use container={{ height, className }}."
  ), !a && (u !== void 0 || x !== void 0 || q !== void 0 || _ !== void 0) && console.warn(
    "SPCChart: Consider grouped accessibility props. Use a11y={{ label, announceFocus, narrationContext, unit }}."
  ), !s && (ae !== void 0 || L !== void 0) && console.warn(
    "SPCChart: Consider grouped visuals engine props. Use visualsEngine={{ scenario, settings }}."
  ), t?.visuals === void 0 && (f !== void 0 || g !== void 0) && console.warn(
    "SPCChart: Visual toggles should be grouped. Use ui={{ visuals: { showZones, showPoints } }}."
  ), t?.visuals?.rules === void 0 && v !== void 0 && console.warn(
    "SPCChart: Prefer grouped rules toggle. Use ui={{ visuals: { rules: { highlightOutOfControl } } }}."
  ), !i && G !== void 0 && console.warn(
    "SPCChart: Consider grouped meta. Use meta={{ source }}."
  ));
  const K = n?.data ?? c ?? [], pe = n?.targets ?? M, he = n?.baselines ?? T, _e = n?.ghosts ?? D, De = r?.chartType ?? F ?? Ua.XmR, Le = r?.metricImprovement ?? k ?? at.Neither, ce = r?.settings ?? P, ke = r?.autoRecalc, m = t?.axes?.alwaysShowZeroY ?? O ?? !1, h = t?.axes?.alwaysShowHundredY ?? R ?? !1, I = t?.axes?.percentScale ?? Q ?? !1, U = t?.visuals?.gradientSequences ?? S ?? !0, A = t?.visuals?.sequenceTransition ?? y ?? "slope", W = t?.visuals?.processLineWidth ?? $ ?? 2, J = t?.visuals?.trend?.visualMode ?? N ?? "ungated", Me = t?.visuals?.trend?.showGatingExplanation ?? E ?? !0, V = t?.visuals?.rules?.enableNeutralNoJudgement ?? H ?? !0, de = t?.visuals?.rules?.enableRules ?? e.enableRules ?? !0, oe = t?.visuals?.showZones, fe = t?.visuals?.showPoints, xe = t?.visuals?.rules?.highlightOutOfControl, Oe = o?.height, Qe = o?.className, Ae = a?.label, Xe = a?.unit, He = a?.narrationContext, ft = s?.scenario, Ce = s?.settings, ze = i?.source, Be = t?.overlays?.partitionMarkers ?? p ?? !1, an = t?.overlays?.trendStartMarkers ?? se ?? !1, dt = t?.overlays?.firstFavourableCrossMarkers ?? X ?? !1, on = t?.overlays?.trendBridge ?? Y ?? !1, sn = t?.inspector?.show ?? ee ?? !1, ln = t?.inspector?.onFocus ?? ge, Z = t?.warnings?.show ?? C ?? !1, ne = t?.warnings?.filter ?? w, j = t?.icons?.show ?? B ?? !1, Pe = t?.icons?.embedded?.show ?? $e ?? !0, Ie = t?.icons?.embedded?.variant ?? Ee ?? Yr.Classic, Ke = t?.icons?.embedded?.runLength ?? ye, te = t?.overlays?.focusIndicator ?? ue ?? !0;
  return {
    effData: K,
    effTargets: pe,
    effBaselines: he,
    effGhosts: _e,
    effChartTypeCore: De,
    effMetricImprovementCore: Le,
    effEngineSettings: ce,
    effEngineAutoRecalc: ke,
    effHeight: Oe,
    effClassName: Qe,
    effAriaLabel: Ae,
    effUnit: Xe,
    effNarrationContext: He,
    effShowZones: oe,
    effShowPoints: fe,
    effHighlightOutOfControl: xe,
    effVisualsScenario: ft,
    effVisualsEngineSettings: Ce,
    effPrecomputedVisuals: le,
    effSource: ze,
    effAlwaysShowZeroY: m,
    effAlwaysShowHundredY: h,
    effPercentScale: I,
    effGradientSequences: U,
    effSequenceTransition: A,
    effProcessLineWidth: W,
    effTrendVisualMode: J,
    effShowTrendGatingExplanation: Me,
    effEnableNeutralNoJudgement: V,
    effEnableRules: de,
    effShowPartitionMarkers: Be,
    effShowTrendStartMarkers: an,
    effShowFirstFavourableCrossMarkers: dt,
    effShowTrendBridgeOverlay: on,
    effShowSignalsInspector: sn,
    effOnSignalFocus: ln,
    effShowWarningsPanel: Z,
    effWarningsFilter: ne,
    effShowIcons: j,
    effShowEmbeddedIcon: Pe,
    effEmbeddedIconVariant: Ie,
    effEmbeddedIconRunLength: Ke,
    effShowFocusIndicator: te
  };
}
let bl = 0;
const wl = ({ data: e, targets: t, visuals: n, a11y: r, axis: o, compute: a }) => {
  const {
    series: s,
    engineRows: i,
    visualCategories: c,
    partitionMarkers: u
  } = e, { limits: d, uniformTarget: f } = t, {
    showPoints: g,
    showZones: x,
    highlightOutOfControl: b,
    gradientSequences: _,
    sequenceTransition: M,
    processLineWidth: T,
    showFocusIndicator: D = !1,
    enableRules: P,
    enableNeutralNoJudgement: F = !0,
    showTrendStartMarkers: k = !1,
    showFirstFavourableCrossMarkers: S = !1,
    showTrendBridgeOverlay: y = !1
  } = n, {
    announceFocus: $,
    ariaLabel: p,
    narrationContext: C,
    showSignalsInspector: w = !1,
    onSignalFocus: H,
    showTrendGatingExplanation: E = !0
  } = r, { zeroBreakSlotGapPx: N } = o, { metricImprovement: O, effectiveUnit: R } = a, Q = At(), se = It();
  if (!Q) return null;
  const { xScale: X, yScale: Y } = Q, ee = l.useRef(
    "spc-seq-" + ++bl
  ), ge = wt(), B = s[0]?.data || [], $e = l.useMemo(() => {
    if (!d.ucl && !d.lcl) return /* @__PURE__ */ new Set();
    const m = /* @__PURE__ */ new Set();
    return B.forEach((h, I) => {
      typeof d.ucl == "number" && h.y > d.ucl && m.add(I), typeof d.lcl == "number" && h.y < d.lcl && m.add(I);
    }), m;
  }, [d.ucl, d.lcl, B]), Ee = l.useMemo(() => {
    if (!i || !i.length) return null;
    const m = [];
    return i.forEach((h, I) => {
      const U = h.classification.variation === me.Concern || h.classification.variation === me.Improvement || !!h.classification.neutralSpecialCauseValue, A = !!h.rules.singlePoint.up || !!h.rules.twoOfThree.up || !!h.rules.fourOfFive.up || !!h.rules.shift.up || !!h.rules.trend.up, W = !!h.rules.singlePoint.down || !!h.rules.twoOfThree.down || !!h.rules.fourOfFive.down || !!h.rules.shift.down || !!h.rules.trend.down;
      m[I] = {
        variation: h.classification.variation,
        assurance: h.classification.assurance,
        special: U,
        concern: h.classification.variation === me.Concern,
        improvement: h.classification.variation === me.Improvement,
        trendUp: !!h.rules.trend.up,
        trendDown: !!h.rules.trend.down,
        upAny: A,
        downAny: W,
        neutralSpecial: !!h.classification.neutralSpecialCauseValue,
        shiftUp: !!h.rules.shift.up,
        shiftDown: !!h.rules.shift.down,
        twoOfThreeUp: !!h.rules.twoOfThree.up,
        twoOfThreeDown: !!h.rules.twoOfThree.down,
        fourOfFiveUp: !!h.rules.fourOfFive.up,
        fourOfFiveDown: !!h.rules.fourOfFive.down,
        partitionId: h.partition.id ?? null
      };
    }), m;
  }, [i]), ye = l.useMemo(() => (c || []).map((m) => m === ot.Improvement ? be.Improvement : m === ot.Concern ? be.Concern : m === ot.NoJudgement ? be.NoJudgement : be.Common), [c]), ue = l.useMemo(() => !_ || !ye.length ? [] : vl(ye, !0), [_, ye, p]), ae = l.useMemo(
    () => B.map((m) => X(m.x instanceof Date ? m.x : new Date(m.x))),
    [B, X]
  ), L = X.range()[1], G = X.range()[0], q = l.useMemo(() => {
    if (!i || !i.length)
      return null;
    let m = Number.POSITIVE_INFINITY, h = Number.POSITIVE_INFINITY;
    if (i.forEach((V, de) => {
      V.rules.trend.up && (m = Math.min(m, de)), V.rules.trend.down && (h = Math.min(h, de));
    }), !Number.isFinite(m) && !Number.isFinite(h))
      return null;
    const I = m <= h, U = I ? un.Up : un.Down, A = I ? m : h, W = (V) => O == null || O === at.Neither || V == null || typeof V.data.value != "number" || typeof V.limits.mean != "number" ? !1 : U === un.Up ? O === at.Up ? V.data.value > V.limits.mean : V.data.value < V.limits.mean : O === at.Down ? V.data.value < V.limits.mean : V.data.value > V.limits.mean;
    let J = null;
    for (let V = A; V < i.length; V++) {
      const de = i[V];
      if (!(I ? !!de.rules.trend.up : !!de.rules.trend.down)) break;
      if (W(de)) {
        J = V;
        break;
      }
    }
    let Me = !1;
    if (J != null) {
      let V = 0;
      for (let de = J; de < i.length; de++) {
        const oe = i[de];
        if (!(I ? !!oe.rules.trend.up : !!oe.rules.trend.down)) break;
        W(oe) && V++;
      }
      Me = V >= 2;
    }
    return {
      direction: U,
      detectedAt: A,
      firstFavourableCrossAt: J,
      persistedAcrossMean: Me
    };
  }, [i, O]), v = l.useMemo(() => {
    if (!i || !i.length) return null;
    const m = (h) => {
      const I = [];
      let U = null, A = null;
      for (let W = 0; W < i.length; W++) {
        const J = i[W], Me = h(J), V = typeof Me == "number" && !isNaN(Me) ? Me : null;
        if (V == null) {
          U !== null && A != null && (I.push({
            x1: ae[U],
            x2: ae[W - 1],
            y: Y(A)
          }), U = null, A = null);
          continue;
        }
        if (U === null) {
          U = W, A = V;
          continue;
        }
        A != null && Math.abs(V - A) <= 1e-9 || (A != null && I.push({
          x1: ae[U],
          x2: ae[W - 1],
          y: Y(A)
        }), U = W, A = V);
      }
      return U !== null && A != null && I.push({
        x1: ae[U],
        x2: ae[i.length - 1],
        y: Y(A)
      }), I;
    };
    return {
      mean: m((h) => h.limits.mean ?? null),
      ucl: m((h) => h.limits.ucl ?? null),
      lcl: m((h) => h.limits.lcl ?? null),
      onePos: m((h) => h.limits.oneSigma.upper ?? null),
      oneNeg: m((h) => h.limits.oneSigma.lower ?? null),
      twoPos: m((h) => h.limits.twoSigma.upper ?? null),
      twoNeg: m((h) => h.limits.twoSigma.lower ?? null)
    };
  }, [i, ae, Y]), le = l.useMemo(() => ue.length ? /* @__PURE__ */ l.createElement("defs", null, /* @__PURE__ */ l.createElement(
    "linearGradient",
    {
      id: `${ee.current}-grad-common`,
      x1: "0%",
      y1: "0%",
      x2: "0%",
      y2: "100%"
    },
    /* @__PURE__ */ l.createElement(
      "stop",
      {
        offset: "0%",
        stopColor: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)",
        stopOpacity: 0.28
      }
    ),
    /* @__PURE__ */ l.createElement(
      "stop",
      {
        offset: "70%",
        stopColor: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)",
        stopOpacity: 0.12
      }
    ),
    /* @__PURE__ */ l.createElement(
      "stop",
      {
        offset: "100%",
        stopColor: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)",
        stopOpacity: 0.045
      }
    )
  ), ue.map((m, h) => {
    const I = `${ee.current}-grad-${h}`;
    let U, A = 0.28, W = 0.12, J = 0.045;
    switch (m.category) {
      case be.Concern:
        U = "var(--nhs-fdp-color-data-viz-spc-concern, #E46C0A)", A = 0.28, W = 0.12, J = 0.045;
        break;
      case be.Improvement:
        U = "var(--nhs-fdp-color-data-viz-spc-improvement, #00B0F0)", A = 0.26, W = 0.11, J = 0.045;
        break;
      case be.NoJudgement:
        U = "var(--nhs-fdp-color-data-viz-spc-no-judgement, #490092)", A = 0.26, W = 0.11, J = 0.045;
        break;
      default:
        U = "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)";
    }
    return /* @__PURE__ */ l.createElement("linearGradient", { key: I, id: I, x1: "0%", y1: "0%", x2: "0%", y2: "100%" }, /* @__PURE__ */ l.createElement("stop", { offset: "0%", stopColor: U, stopOpacity: A }), /* @__PURE__ */ l.createElement("stop", { offset: "70%", stopColor: U, stopOpacity: W }), /* @__PURE__ */ l.createElement("stop", { offset: "100%", stopColor: U, stopOpacity: J }));
  })) : null, [ue]), K = l.useMemo(() => {
    if (!ue.length) return null;
    const [m] = Y.domain(), h = Y(m), I = ue.map((U, A) => {
      const { start: W, end: J, category: Me } = U;
      if (W < 0 || J >= ae.length || W > J)
        return null;
      const V = ae[W], de = ae[J];
      let oe = "";
      if (Me === be.Common) {
        const fe = A > 0 ? ue[A - 1] : null, xe = A < ue.length - 1 ? ue[A + 1] : null, Oe = fe ? ae[fe.end] : G, Qe = fe ? Y(B[fe.end].y) : h, Ae = xe ? ae[xe.start] : L, Xe = xe ? Y(B[xe.start].y) : h;
        oe = `M ${Oe} ${h}`, oe += ` L ${Oe} ${Qe}`;
        for (let He = W; He <= J; He++)
          oe += ` L ${ae[He]} ${Y(B[He].y)}`;
        oe += ` L ${Ae} ${Xe}`, oe += ` L ${Ae} ${h} Z`;
      } else {
        const fe = A > 0 ? ue[A - 1] : null, xe = A < ue.length - 1 ? ue[A + 1] : null, Oe = fe && fe.category !== be.Common, Qe = xe && xe.category !== be.Common, Ae = Y(B[W].y), Xe = Y(B[J].y);
        let He = V, ft = de;
        if (Oe) {
          const Ce = ae[fe.end], ze = Y(B[fe.end].y), Be = B[W].y - B[fe.end].y;
          M === Nt.Slope && Be > 0 ? (oe = `M ${Ce} ${ze} L ${V} ${Ae}`, He = Ce) : (oe = `M ${V} ${h} L ${V} ${Ae}`, He = V);
        } else
          oe = `M ${V} ${h} L ${V} ${Ae}`;
        for (let Ce = W + 1; Ce <= J; Ce++)
          oe += ` L ${ae[Ce]} ${Y(B[Ce].y)}`;
        if (oe += ` L ${de} ${Xe}`, Qe) {
          const Ce = ae[xe.start], ze = Y(B[xe.start].y), Be = B[xe.start].y - B[J].y;
          (M === Nt.Slope && Be <= 0 || M === Nt.Extend) && (oe += ` L ${Ce} ${ze}`, ft = Ce);
        }
        if (oe += ` L ${ft} ${h}`, oe += ` L ${He} ${h} Z`, M === Nt.Neutral && Oe) {
          const Ce = ae[fe.end], ze = Y(B[fe.end].y), Be = /* @__PURE__ */ l.createElement(
            "path",
            {
              key: `seq-wedge-${A}`,
              d: `M ${Ce} ${h} L ${Ce} ${ze} L ${V} ${Ae} L ${V} ${h} Z`,
              fill: `url(#${ee.current}-grad-common)`,
              stroke: "none",
              className: "fdp-spc__sequence-bg",
              "aria-hidden": "true"
            }
          );
          return /* @__PURE__ */ l.createElement("g", { key: `seq-group-${A}` }, Be, /* @__PURE__ */ l.createElement(
            "path",
            {
              key: `seq-area-${A}`,
              d: oe,
              fill: `url(#${ee.current}-grad-${A})`,
              stroke: "none",
              className: "fdp-spc__sequence-bg",
              "aria-hidden": "true"
            }
          ));
        }
      }
      return /* @__PURE__ */ l.createElement(
        "path",
        {
          key: `seq-area-${A}`,
          d: oe,
          fill: `url(#${ee.current}-grad-${A})`,
          stroke: "none",
          className: "fdp-spc__sequence-bg",
          "aria-hidden": "true"
        }
      );
    }).filter(Boolean);
    return /* @__PURE__ */ l.createElement("g", { className: "fdp-spc__sequence-bgs" }, I);
  }, [ue, ae, L, Y, B, M]), pe = l.useMemo(() => {
    if (!C?.timeframe && B.length >= 2) {
      const m = B.map((J) => J.x instanceof Date ? J.x : new Date(J.x)), h = new Date(Math.min(...m.map((J) => J.getTime()))), I = new Date(Math.max(...m.map((J) => J.getTime()))), U = Math.round((I.getTime() - h.getTime()) / 864e5) || 0;
      if (U < 14)
        return `The chart shows a timeframe of ${U + 1} days`;
      const A = Math.round(U / 7);
      return A < 20 ? `The chart shows a timeframe of ${A} weeks` : `The chart shows a timeframe of ${(I.getFullYear() - h.getFullYear()) * 12 + (I.getMonth() - h.getMonth()) + 1} months`;
    }
    if (C?.timeframe)
      return `The chart shows a timeframe of ${C.timeframe}`;
  }, [C?.timeframe, B]), he = (m) => {
    const h = m % 10, I = m % 100;
    return h === 1 && I !== 11 ? `${m}st` : h === 2 && I !== 12 ? `${m}nd` : h === 3 && I !== 13 ? `${m}rd` : `${m}th`;
  }, _e = (m) => `${he(m.getDate())} ${m.toLocaleString("en-GB", { month: "long" })}, ${m.getFullYear()}`, De = (m) => ({
    specialCauseSinglePointUp: !!m?.rules.singlePoint.up,
    specialCauseSinglePointDown: !!m?.rules.singlePoint.down,
    specialCauseTwoOfThreeUp: !!m?.rules.twoOfThree.up,
    specialCauseTwoOfThreeDown: !!m?.rules.twoOfThree.down,
    specialCauseFourOfFiveUp: !!m?.rules.fourOfFive.up,
    specialCauseFourOfFiveDown: !!m?.rules.fourOfFive.down,
    specialCauseShiftUp: !!m?.rules.shift.up,
    specialCauseShiftDown: !!m?.rules.shift.down,
    specialCauseTrendUp: !!m?.rules.trend.up,
    specialCauseTrendDown: !!m?.rules.trend.down
  }), Le = l.useCallback(
    ({
      index: m,
      x: h,
      y: I
    }) => {
      const U = i?.[m], A = h instanceof Date ? h : new Date(h), W = _e(A), J = C?.measureUnit ? ` ${C.measureUnit}` : "", Me = C?.measureName ? ` ${C.measureName}` : "";
      if (!U)
        return `General summary is: ${pe ? pe + ". " : ""}Point ${m + 1}, ${W}, ${I}${J}${Me}`;
      const V = Un(U.classification?.variation) || "Variation", de = Hn(De(U)), oe = de.length ? ` Rules: ${[...new Set(de.map((xe) => kt[xe].narration))].join("; ")}.` : " No special cause rules.", fe = [];
      return C?.measureName && fe.push(`Measure: ${C.measureName}.`), C?.datasetContext && fe.push(`${C.datasetContext}.`), C?.organisation && fe.push(`Organisation: ${C.organisation}.`), C?.additionalNote && fe.push(C.additionalNote), [
        "General summary is:",
        ...fe,
        `Point ${m + 1} recorded on `,
        W + ",",
        `with a value of ${I} ${J}${Me}`,
        V + ".",
        oe
      ].join(" ").replace(/\s+/g, " ").trim();
    },
    [i, C, pe]
  ), ce = l.useCallback(
    (m, h) => i?.[m] ? Le({
      index: m,
      seriesId: "process",
      x: h.x instanceof Date ? h.x : new Date(h.x),
      y: h.y
    }).replace(/^General summary is:\s*/, "").replace(/^Point \d+\s*/, "") : void 0,
    [i, Le]
  ), ke = l.useMemo(() => {
    try {
      const m = typeof Y?.domain == "function" ? Y.domain() : void 0;
      if (!m || !Array.isArray(m) || m.length < 2) return !1;
      const h = Math.min(m[0], m[1]), I = Math.max(m[0], m[1]);
      return !(0 >= h && 0 <= I);
    } catch {
      return !1;
    }
  }, [Y]);
  return /* @__PURE__ */ l.createElement(dl, null, /* @__PURE__ */ l.createElement(
    "div",
    {
      className: "fdp-spc-chart",
      role: "group",
      "aria-label": "Statistical process control chart",
      "aria-roledescription": "chart"
    },
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        width: Q.xScale.range()[1] + 56 + 16,
        height: (se?.innerHeight ?? Q.yScale.range()[0]) + 12 + 48,
        role: "img"
      },
      /* @__PURE__ */ l.createElement("g", { transform: "translate(56,12)" }, /* @__PURE__ */ l.createElement(Ir, { type: "x" }), /* @__PURE__ */ l.createElement(
        Ir,
        {
          type: "y",
          yZeroBreak: {
            enabled: ke,
            gapPx: N,
            zigZag: { heightPx: 64, amplitudePx: 4, cycles: 6, stepXPx: 3 }
          }
        }
      ), /* @__PURE__ */ l.createElement(Us, { axis: "y" }), le, K, u.map((m, h) => {
        const I = B[m];
        if (!I) return null;
        const U = X(I.x instanceof Date ? I.x : new Date(I.x));
        return /* @__PURE__ */ l.createElement(
          "line",
          {
            key: `partition-marker-${h}`,
            x1: U,
            x2: U,
            y1: 0,
            y2: Y.range()[0],
            stroke: "#555",
            strokeDasharray: "4 4",
            strokeWidth: 1,
            "aria-hidden": "true",
            className: "fdp-spc__partition-marker"
          }
        );
      }), v?.mean.length ? /* @__PURE__ */ l.createElement("g", { "aria-hidden": "true", className: "fdp-spc__cl-group" }, v.mean.map((m, h) => /* @__PURE__ */ l.createElement(
        "line",
        {
          key: `mean-${h}`,
          className: "fdp-spc__cl",
          x1: m.x1,
          x2: m.x2,
          y1: m.y,
          y2: m.y
        }
      )), v.mean.map((m, h) => {
        if (h === v.mean.length - 1) return null;
        const I = v.mean[h + 1];
        if (!I || m.y === I.y) return null;
        const A = Math.max(4, I.x1 - m.x2 || 0) * 0.5, W = `M ${m.x2},${m.y} C ${m.x2 + A},${m.y} ${I.x1 - A},${I.y} ${I.x1},${I.y}`;
        return /* @__PURE__ */ l.createElement(
          "path",
          {
            key: `mean-join-${h}`,
            className: "fdp-spc__cl fdp-spc__cl-join",
            d: W,
            fill: "none"
          }
        );
      })) : null, f != null && /* @__PURE__ */ l.createElement(l.Fragment, null), v?.ucl.length ? /* @__PURE__ */ l.createElement(
        "g",
        {
          "aria-hidden": "true",
          className: "fdp-spc__limit-group fdp-spc__limit-group--ucl"
        },
        v.ucl.map((m, h) => /* @__PURE__ */ l.createElement(
          "line",
          {
            key: `ucl-${h}`,
            className: "fdp-spc__limit fdp-spc__limit--ucl",
            x1: m.x1,
            x2: m.x2,
            y1: m.y,
            y2: m.y,
            strokeWidth: 2
          }
        )),
        v.ucl.map((m, h) => {
          if (h === v.ucl.length - 1) return null;
          const I = v.ucl[h + 1];
          if (!I || m.y === I.y) return null;
          const A = Math.max(4, I.x1 - m.x2 || 0) * 0.5, W = `M ${m.x2},${m.y} C ${m.x2 + A},${m.y} ${I.x1 - A},${I.y} ${I.x1},${I.y}`;
          return /* @__PURE__ */ l.createElement(
            "path",
            {
              key: `ucl-join-${h}`,
              className: "fdp-spc__limit fdp-spc__limit--ucl fdp-spc__limit-join",
              d: W,
              fill: "none",
              strokeWidth: 2
            }
          );
        })
      ) : null, v?.lcl.length ? /* @__PURE__ */ l.createElement(
        "g",
        {
          "aria-hidden": "true",
          className: "fdp-spc__limit-group fdp-spc__limit-group--lcl"
        },
        v.lcl.map((m, h) => /* @__PURE__ */ l.createElement(
          "line",
          {
            key: `lcl-${h}`,
            className: "fdp-spc__limit fdp-spc__limit--lcl",
            x1: m.x1,
            x2: m.x2,
            y1: m.y,
            y2: m.y,
            strokeWidth: 2
          }
        )),
        v.lcl.map((m, h) => {
          if (h === v.lcl.length - 1) return null;
          const I = v.lcl[h + 1];
          if (!I || m.y === I.y) return null;
          const A = Math.max(4, I.x1 - m.x2 || 0) * 0.5, W = `M ${m.x2},${m.y} C ${m.x2 + A},${m.y} ${I.x1 - A},${I.y} ${I.x1},${I.y}`;
          return /* @__PURE__ */ l.createElement(
            "path",
            {
              key: `lcl-join-${h}`,
              className: "fdp-spc__limit fdp-spc__limit--lcl fdp-spc__limit-join",
              d: W,
              fill: "none",
              strokeWidth: 2
            }
          );
        })
      ) : null, f != null && /* @__PURE__ */ l.createElement("g", { "aria-hidden": "true", className: "fdp-spc__target-group" }, /* @__PURE__ */ l.createElement(
        "line",
        {
          className: "fdp-spc__target",
          "data-testid": "spc-target-line",
          x1: 0,
          x2: X.range()[1],
          y1: Y(f),
          y2: Y(f),
          strokeWidth: 2.5
        }
      ), /* @__PURE__ */ l.createElement(
        "text",
        {
          "data-testid": "spc-target-label",
          x: X.range()[0] - 7,
          y: Y(f) - 5,
          textAnchor: "start",
          className: "fdp-spc__target-label",
          fontSize: 12
        },
        "Target ",
        f,
        " ",
        R || C?.measureUnit || ""
      )), x && v && v.mean.length > 0 && /* @__PURE__ */ l.createElement(l.Fragment, null, v.onePos.map((m, h) => /* @__PURE__ */ l.createElement(
        "line",
        {
          key: `onePos-${h}`,
          className: "fdp-spc__zone fdp-spc__zone--pos1",
          x1: m.x1,
          x2: m.x2,
          y1: m.y,
          y2: m.y,
          "aria-hidden": "true",
          strokeWidth: 2
        }
      )), v.oneNeg.map((m, h) => /* @__PURE__ */ l.createElement(
        "line",
        {
          key: `oneNeg-${h}`,
          className: "fdp-spc__zone fdp-spc__zone--neg1",
          x1: m.x1,
          x2: m.x2,
          y1: m.y,
          y2: m.y,
          "aria-hidden": "true",
          strokeWidth: 2
        }
      )), v.twoPos.map((m, h) => /* @__PURE__ */ l.createElement(
        "line",
        {
          key: `twoPos-${h}`,
          className: "fdp-spc__zone fdp-spc__zone--pos2",
          x1: m.x1,
          x2: m.x2,
          y1: m.y,
          y2: m.y,
          "aria-hidden": "true",
          strokeWidth: 2
        }
      )), v.twoNeg.map((m, h) => /* @__PURE__ */ l.createElement(
        "line",
        {
          key: `twoNeg-${h}`,
          className: "fdp-spc__zone fdp-spc__zone--neg2",
          x1: m.x1,
          x2: m.x2,
          y1: m.y,
          y2: m.y,
          "aria-hidden": "true",
          strokeWidth: 2
        }
      ))), q && (k || S || y) && (() => {
        const m = q.detectedAt, h = q.firstFavourableCrossAt, I = B[m] ? X(
          B[m].x instanceof Date ? B[m].x : new Date(B[m].x)
        ) : null, U = B[m] ? Y(B[m].y) : null, A = h != null && B[h] ? X(
          B[h].x instanceof Date ? B[h].x : new Date(B[h].x)
        ) : null, W = h != null && B[h] ? Y(B[h].y) : null;
        return /* @__PURE__ */ l.createElement("g", { "aria-hidden": "true", className: "fdp-spc__trend-overlays" }, y && I != null && U != null && A != null && W != null && /* @__PURE__ */ l.createElement(
          "line",
          {
            x1: I,
            y1: U,
            x2: A,
            y2: W,
            stroke: "#888",
            strokeDasharray: "4 4",
            strokeWidth: 2
          },
          /* @__PURE__ */ l.createElement("title", null, "Trend bridge: start to first favourable-side point")
        ), k && I != null && U != null && /* @__PURE__ */ l.createElement(
          "circle",
          {
            cx: I,
            cy: U,
            r: 6,
            fill: "white",
            stroke: "#555",
            strokeWidth: 2
          },
          /* @__PURE__ */ l.createElement("title", null, "Trend start (run reached N)")
        ), S && A != null && W != null && /* @__PURE__ */ l.createElement("circle", { cx: A, cy: W, r: 5, fill: "#555" }, /* @__PURE__ */ l.createElement("title", null, "First favourable-side inclusion")));
      })(), /* @__PURE__ */ l.createElement(
        ml,
        {
          series: s[0],
          seriesIndex: 0,
          palette: "categorical",
          showPoints: !1,
          focusablePoints: !1,
          focusIndex: -1,
          parseX: (m) => m.x instanceof Date ? m.x : new Date(m.x),
          smooth: !1,
          strokeWidth: T
        }
      ), g && B.map((m, h) => {
        const I = X(m.x instanceof Date ? m.x : new Date(m.x)), U = Y(m.y), A = $e.has(h), W = Ee?.[h], J = ye[h], Me = J === be.Improvement, V = J === be.Concern, de = J === be.NoJudgement, oe = [
          "fdp-spc__point",
          A && b ? "fdp-spc__point--ooc" : null,
          P && V ? "fdp-spc__point--sc-concern" : null,
          P && Me ? "fdp-spc__point--sc-improvement" : null,
          P && F && de ? "fdp-spc__point--sc-no-judgement" : null,
          W?.assurance === Bt.Pass ? "fdp-spc__point--assurance-pass" : null,
          W?.assurance === Bt.Fail ? "fdp-spc__point--assurance-fail" : null
        ].filter(Boolean).join(" "), fe = ge?.focused?.index === h;
        return /* @__PURE__ */ l.createElement(
          "circle",
          {
            key: h,
            cx: I,
            cy: U,
            r: 5,
            className: oe,
            "data-variation": W?.variation,
            "data-assurance": W?.assurance,
            "aria-label": p,
            ...fe ? { "aria-describedby": `spc-tooltip-${h}` } : {}
          }
        );
      }), D && w && ge?.focused && (() => {
        const m = ge.focused, h = typeof m.index == "number" ? m.index : -1;
        if (h < 0 || !B[h]) return null;
        const I = X(
          B[h].x instanceof Date ? B[h].x : new Date(B[h].x)
        ), U = Y(B[h].y), A = "var(--nhs-fdp-color-primary-yellow, #ffeb3b)";
        return /* @__PURE__ */ l.createElement("g", { className: "fdp-spc__focus-indicator", "aria-hidden": "true" }, /* @__PURE__ */ l.createElement(
          "circle",
          {
            cx: I,
            cy: U,
            r: 7,
            fill: "none",
            stroke: A,
            strokeWidth: 3
          }
        ), /* @__PURE__ */ l.createElement(
          "circle",
          {
            cx: I,
            cy: U,
            r: 5,
            fill: "#000",
            stroke: A,
            strokeWidth: 1.5
          }
        ), /* @__PURE__ */ l.createElement(
          "circle",
          {
            cx: I,
            cy: U,
            r: 2.5,
            fill: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)",
            stroke: "#fff",
            strokeWidth: 0.5
          }
        ));
      })(), se && /* @__PURE__ */ l.createElement(
        Sl,
        {
          width: X.range()[1],
          height: Y.range()[0]
        }
      ), !w && /* @__PURE__ */ l.createElement(
        pl,
        {
          engineRows: i,
          limits: { mean: d.mean, sigma: d.sigma },
          pointDescriber: ce,
          measureName: C?.measureName,
          measureUnit: C?.measureUnit,
          dateFormatter: (m) => _e(m),
          enableNeutralNoJudgement: F,
          showTrendGatingExplanation: E
        }
      ))
    ),
    w && /* @__PURE__ */ l.createElement("div", { style: { marginTop: 8 } }, /* @__PURE__ */ l.createElement(
      yl,
      {
        engineRows: i,
        measureName: C?.measureName,
        measureUnit: R || C?.measureUnit,
        onSignalFocus: H
      }
    )),
    $ && /* @__PURE__ */ l.createElement(
      hl,
      {
        format: (m) => Le({ ...m, x: m.x instanceof Date ? m.x : new Date(m.x) })
      }
    )
  ));
}, Sl = ({
  width: e,
  height: t
}) => {
  const n = wt();
  return n ? /* @__PURE__ */ l.createElement(
    "rect",
    {
      className: "fdp-spc__interaction-layer",
      width: e,
      height: t,
      fill: "transparent",
      tabIndex: 0,
      "aria-label": "Interactive chart area. Use arrow keys to move between points.",
      onMouseMove: (r) => {
        const a = r.currentTarget.getBoundingClientRect(), s = r.clientX - a.left, i = r.clientY - a.top;
        n.focusNearest(s, i);
      },
      onMouseLeave: () => n.clear(),
      onKeyDown: (r) => {
        switch (r.key) {
          case "ArrowRight":
            n.focusNextPoint(), r.preventDefault();
            break;
          case "ArrowLeft":
            n.focusPrevPoint(), r.preventDefault();
            break;
          case "ArrowDown":
            n.focusNextSeries(), r.preventDefault();
            break;
          case "ArrowUp":
            n.focusPrevSeries(), r.preventDefault();
            break;
          case "Home":
            n.focusFirstPoint(), r.preventDefault();
            break;
          case "End":
            n.focusLastPoint(), r.preventDefault();
            break;
        }
      },
      style: { cursor: "crosshair" }
    }
  ) : null;
};
function Lr(e) {
  if (e == null) return;
  const t = e instanceof Date ? e : new Date(e);
  return Number.isNaN(t.valueOf()) ? void 0 : t;
}
function $l(e, t, n) {
  const r = new Array(e), o = new Date(t);
  for (let a = 0; a < e; a++)
    switch (r[a] = new Date(o), n) {
      case "hourly":
        o.setHours(o.getHours() + 1);
        break;
      case "daily":
        o.setDate(o.getDate() + 1);
        break;
      case "weekly":
        o.setDate(o.getDate() + 7);
        break;
      case "monthly":
        o.setMonth(o.getMonth() + 1);
        break;
      case "quarterly":
        o.setMonth(o.getMonth() + 3);
        break;
      case "annually":
        o.setFullYear(o.getFullYear() + 1);
        break;
    }
  return r;
}
function _l(e, t) {
  const n = e.filter(Boolean);
  if (n.length < 2) return t;
  const r = [];
  for (let c = 1; c < n.length; c++)
    r.push(n[c].getTime() - n[c - 1].getTime());
  const o = r.sort((c, u) => c - u), a = o[Math.floor(o.length / 2)], s = 3600 * 1e3, i = 24 * s;
  return a <= 2 * s ? "hourly" : a <= 2 * i ? "daily" : a <= 10 * i ? "weekly" : a <= 45 * i ? "monthly" : a <= 120 * i ? "quarterly" : "annually";
}
function Ar(e, t) {
  if (e)
    try {
      switch (t) {
        case "hourly":
          return new Intl.DateTimeFormat(void 0, {
            hour: "2-digit",
            minute: "2-digit",
            day: "2-digit",
            month: "short",
            year: "numeric"
          }).format(e);
        case "daily":
          return new Intl.DateTimeFormat(void 0, {
            day: "2-digit",
            month: "short",
            year: "numeric"
          }).format(e);
        case "weekly":
          return `Week of ${new Intl.DateTimeFormat(void 0, { day: "2-digit", month: "short", year: "numeric" }).format(e)}`;
        case "monthly":
          return new Intl.DateTimeFormat(void 0, {
            month: "short",
            year: "numeric"
          }).format(e);
        case "quarterly":
          return `Q${Math.floor(e.getMonth() / 3) + 1} ${e.getFullYear()}`;
        case "annually":
          return `${e.getFullYear()}`;
        default:
          return new Intl.DateTimeFormat(void 0, {
            day: "2-digit",
            month: "short",
            year: "numeric"
          }).format(e);
      }
    } catch {
      return;
    }
}
function Ml(e, t, n, r = "0-100") {
  if (t) return t;
  if (n) return n;
  const o = e.filter((i) => i != null);
  if (!o.length) return;
  const a = Math.min(...o), s = Math.max(...o);
  if (r === "0-1") {
    if (a >= 0 && s <= 1 && s > 0) return "%";
  } else if (a >= 0 && s <= 100 && s > 0) return "%";
}
function Cl(e, t, n = 1) {
  switch (e || t) {
    case "hourly":
      return n === 1 ? "last hour" : `last ${n} hours`;
    case "daily":
      return n === 1 ? "last day" : `last ${n} days`;
    case "weekly":
      return n === 1 ? "last week" : `last ${n} weeks`;
    case "monthly":
      return n === 1 ? "last month" : `last ${n} months`;
    case "quarterly":
      return n === 1 ? "last quarter" : `last ${n} quarters`;
    case "annually":
      return n === 1 ? "last year" : `last ${n} years`;
    default:
      return "previous";
  }
}
function Nl(e) {
  const {
    values: t,
    dates: n,
    intervalHint: r,
    startDate: o,
    providedUnit: a,
    defaultUnit: s,
    autoValue: i = !0,
    autoDelta: c = !0,
    autoMetadata: u = !0,
    deltaConfig: d
  } = e, f = t.map(
    (p) => typeof p == "number" ? p : p == null ? null : Number(p)
  );
  let g = -1;
  for (let p = f.length - 1; p >= 0; p--)
    if (f[p] != null) {
      g = p;
      break;
    }
  let x = (n || []).map(Lr);
  if (!x.some(Boolean)) {
    const p = Lr(o);
    p && r ? x = $l(f.length, p, r) : x = new Array(f.length).fill(void 0);
  }
  const _ = _l(x, r), M = Ml(
    f,
    a,
    s,
    e.percentHeuristic
  ), T = i && g >= 0 && f[g] != null ? f[g] : void 0, D = {
    strategy: "previous",
    n: 1,
    absolute: !0,
    skipNulls: !0,
    ...d || {}
  };
  function P() {
    if (g < 0) return -1;
    if (D.strategy === "previous" || D.strategy === "n-points") {
      let E = g - (D.strategy === "previous" ? 1 : Math.max(1, D.n || 1));
      if (!D.skipNulls) return E;
      for (let N = E; N >= 0; N--) if (f[N] != null) return N;
      return -1;
    }
    const p = x[g];
    if (!p) return -1;
    const C = new Date(p);
    C.setFullYear(C.getFullYear() - 1);
    let w = -1, H = 1 / 0;
    for (let E = 0; E < x.length; E++) {
      const N = x[E];
      if (!N || f[E] == null) continue;
      const O = Math.abs(N.getTime() - C.getTime());
      O < H && (H = O, w = E);
    }
    return w;
  }
  const F = P(), k = F >= 0 ? f[F] : null;
  let S;
  if (c && T != null && k != null) {
    const p = T - k, C = D.absolute !== !1, w = C ? p : k === 0 ? 0 : p / Math.abs(k) * 100;
    S = {
      value: Number.isFinite(w) ? Number(w.toFixed(2)) : 0,
      isPercent: C ? M === "%" : !0,
      period: `vs ${Cl(_, r, D.strategy === "n-points" ? Math.max(1, D.n || 1) : 1)}`
    };
  }
  const y = g >= 0 ? x[g] : void 0, $ = u && Ar(y, _) ? `Latest: ${Ar(y, _)}` : void 0;
  return { value: T, unit: M, delta: S, metadata: $, latestDate: y, frequency: _ };
}
function kl(e) {
  const { rows: t } = zr(e), n = Ra(e);
  return { rows: t, visuals: n.visuals };
}
const Ta = 13;
function El(e) {
  if (!(!e || e.length === 0))
    return e.map((t) => {
      switch (t) {
        case ot.Improvement:
          return me.Improvement;
        case ot.Concern:
          return me.Concern;
        case ot.NoJudgement:
          return me.Neither;
        default:
          return null;
      }
    });
}
function Tl(e) {
  if (!(!e || e.length === 0))
    return e.map((t) => t === ot.NoJudgement);
}
function Hr(e, t) {
  const n = e === tt.G ? tt.G : e === tt.T ? tt.T : tt.XmR, r = t === nt.Up ? nt.Up : t === nt.Down ? nt.Down : nt.Neither;
  return { chartType: n, metricImprovement: r };
}
function Ur(e, t, n) {
  const r = typeof e?.minimumPoints == "number" && !isNaN(e.minimumPoints) ? e.minimumPoints : Ta, o = { minimumPoints: r };
  return t.filter(
    (s) => !s.ghost && typeof s.value == "number"
  ).length >= r && (o.chartLevelEligibility = !0), e?.enableFourOfFiveRule != null && (o.enableFourOfFiveRule = !!e.enableFourOfFiveRule), n && Object.assign(o, n), Object.keys(o).length ? o : void 0;
}
function Dl(e, t, n) {
  const r = l.useMemo(() => {
    if (!e || e.length < 2) return !1;
    const s = Math.min(e[0], e[1]), i = Math.max(e[0], e[1]);
    return !(0 >= s && 0 <= i);
  }, [e]), { slotPx: o, totalReservedPx: a } = l.useMemo(() => {
    if (!r) return { slotPx: 0, totalReservedPx: 0 };
    const i = (t ?? 260) - 60, c = Wt, d = c + Is, f = n?.maxFraction, g = Math.max(
      zt,
      Math.floor(i * f)
    ), x = Math.min(d, g);
    return { slotPx: Math.min(c, x), totalReservedPx: x };
  }, [r, t, n?.maxFraction]);
  return { show: r, slotPx: o, totalReservedPx: a };
}
function Pl(e, t, n, r) {
  if (n.percentScale) {
    const c = e.map((f) => f.y), u = Math.max(100, ...c), d = Math.min(0, ...c);
    return [d < 0 ? d : 0, u > 100 ? u : 100];
  }
  const o = e.map((c) => c.y), a = (c) => {
    c != null && o.push(c);
  };
  if (a(t.mean), a(t.ucl), a(t.lcl), a(t.onePos), a(t.oneNeg), a(t.twoPos), a(t.twoNeg), r && r.length)
    for (const c of r)
      typeof c == "number" && !isNaN(c) && o.push(c);
  if (!o.length) return;
  let s = Math.min(...o), i = Math.max(...o);
  return n.alwaysShowZeroY && (s = Math.min(0, s)), n.alwaysShowHundredY && (i = Math.max(100, i)), [s, i];
}
function An(e, t) {
  if (!e?.length || t.chartType !== tt.XmR) return null;
  const n = Math.max(2, Math.floor(t.shiftLength ?? 6)), r = [];
  for (let x = 0; x < e.length; x++) {
    const b = e[x], _ = b.value;
    b?.ghost || typeof _ == "number" && Number.isFinite(_) && r.push({ idx: x, value: _ });
  }
  if (r.length < n * 2) return null;
  let o = 0, a = 0;
  for (let x = 1; x < r.length; x++)
    o += Math.abs(r[x].value - r[x - 1].value), a++;
  if (a === 0) return null;
  const i = o / a * (2.66 / 3);
  if (!Number.isFinite(i) || i <= 0) return null;
  const c = Math.max(0, t.deltaSigma ?? 0.5), u = t.metricImprovement === nt.Up, d = t.metricImprovement === nt.Down, f = (() => {
    for (let x = e.length - 1; x >= 0; x--) if (e[x]?.baseline) return x;
    return -1;
  })();
  function g(x, b) {
    let _ = 0, M = 0;
    for (let T = x; T < b; T++)
      _ += r[T].value, M++;
    return M ? _ / M : NaN;
  }
  for (let x = n; x <= r.length - n; x++) {
    const b = g(x - n, x), _ = g(x, x + n);
    if (!Number.isFinite(b) || !Number.isFinite(_)) continue;
    const M = _ - b, T = M / i;
    let D = !1, P = !1;
    if (u ? (D = T >= c, P = !0) : d ? (D = -T >= c, P = !1) : (D = Math.abs(T) >= c, P = M > 0), !D) continue;
    const F = (y) => P ? y > b : y < b;
    let k = !0;
    for (let y = x; y < x + n; y++)
      if (!F(r[y].value)) {
        k = !1;
        break;
      }
    if (!k) continue;
    const S = r[x].idx;
    if (!(t.minGap && f >= 0 && S - f < t.minGap))
      return S;
  }
  return null;
}
function Il(e, t) {
  const n = An(e, t);
  return n == null ? e.slice() : e.map((r, o) => o === n ? { ...r, baseline: !0 } : r);
}
function Fl(e, t) {
  const n = Math.max(1, Math.floor(t.maxInsertions ?? 1));
  if (n <= 1) return Il(e, t);
  let r = e.slice(), o = 0;
  const a = Math.max(1, t.minGap ?? 0);
  for (; o < n; ) {
    const s = An(r, { ...t, minGap: a });
    if (s == null) break;
    if (r[s]?.baseline) {
      const i = An(r, { ...t, minGap: a + 1 });
      if (i == null || i === s) break;
      r = r.map((c, u) => u === i ? { ...c, baseline: !0 } : c), o++;
      continue;
    }
    r = r.map((i, c) => c === s ? { ...i, baseline: !0 } : i), o++;
  }
  return r;
}
const Wl = (e) => {
  const t = l.useCallback(
    (Z) => String(Z).replace(/^spc_warning_code\.?/i, "").replace(/[_\-]+/g, " ").trim().split(" ").filter(Boolean).map((j) => j.length ? j[0].toUpperCase() + j.slice(1) : j).join(" "),
    []
  ), n = l.useCallback(
    (Z) => String(Z).replace(/[_\-]+/g, " ").trim().split(" ").filter(Boolean).map((ne) => ne.length ? ne[0].toUpperCase() + ne.slice(1) : ne).join(" "),
    []
  );
  process.env.NODE_ENV !== "production" && e.disableTrendSideGating !== void 0 && console.warn(
    "SPCChart: 'disableTrendSideGating' prop is deprecated and ignored (trend side gating always enabled)."
  );
  const {
    effData: r,
    effTargets: o,
    effBaselines: a,
    effGhosts: s,
    effChartTypeCore: i,
    effMetricImprovementCore: c,
    effEngineSettings: u,
    effAlwaysShowZeroY: d,
    effAlwaysShowHundredY: f,
    effPercentScale: g,
    effGradientSequences: x,
    effSequenceTransition: b,
    effProcessLineWidth: _,
    effTrendVisualMode: M,
    effShowTrendGatingExplanation: T,
    effEnableNeutralNoJudgement: D,
    effEnableRules: P,
    effShowPartitionMarkers: F,
    effShowTrendStartMarkers: k,
    effShowFirstFavourableCrossMarkers: S,
    effShowTrendBridgeOverlay: y,
    effShowSignalsInspector: $,
    effOnSignalFocus: p,
    effShowWarningsPanel: C,
    effWarningsFilter: w,
    effShowEmbeddedIcon: H,
    effEmbeddedIconVariant: E,
    effEmbeddedIconRunLength: N,
    effShowFocusIndicator: O,
    effHeight: R,
    effClassName: Q,
    effAriaLabel: se,
    effUnit: X,
    effNarrationContext: Y,
    effShowZones: ee,
    effShowPoints: ge,
    effHighlightOutOfControl: B,
    effVisualsScenario: $e,
    effVisualsEngineSettings: Ee,
    effSource: ye,
    effPrecomputedVisuals: ue,
    effEngineAutoRecalc: ae
  } = xl(e), L = se ?? e.ariaLabel, G = R ?? e.height ?? 260, q = Q ?? e.className, v = X ?? e.unit, le = Y ?? e.narrationContext, K = ee ?? e.showZones, pe = ge ?? e.showPoints, he = B ?? e.highlightOutOfControl, _e = $e ?? e.visualsScenario ?? Ya.None, De = Ee ?? e.visualsEngineSettings, Le = ye ?? e.source, ce = e.a11y?.announceFocus ?? e.announceFocus ?? !1, ke = l.useMemo(() => r.map((Z, ne) => ({
    x: Z.x,
    value: Z.y,
    target: o?.[ne] ?? void 0,
    baseline: a?.[ne] ?? void 0,
    ghost: s?.[ne] ?? void 0
  })), [r, o, a, s]), m = l.useMemo(() => {
    try {
      const Z = ae;
      return Z?.enabled ? Fl(ke, {
        chartType: i,
        metricImprovement: c,
        shiftLength: Z.shiftLength,
        deltaSigma: Z.deltaSigma,
        minGap: Z.minGap,
        maxInsertions: Z.maxInsertions
      }) : ke;
    } catch {
      return ke;
    }
  }, [ke, ae, i, c]), h = l.useMemo(() => {
    if (ue?.visuals) return ue.visuals;
    try {
      const Z = Ur(
        u,
        m,
        De
      ), { chartType: ne, metricImprovement: j } = Hr(
        i,
        c
      ), Pe = {
        chartType: ne,
        metricImprovement: j,
        data: m,
        settings: Z
      }, { visuals: Ie } = Wa(Pe, _e, {
        trendVisualMode: M === Ea.Ungated ? Kn.Ungated : Kn.Gated,
        enableNeutralNoJudgement: D
      });
      return Ie || [];
    } catch {
      return [];
    }
  }, [
    ue?.visuals?.length,
    m,
    i,
    c,
    M,
    D,
    u,
    _e,
    De
  ]), U = l.useMemo(() => {
    if (ue?.rows)
      try {
        const Z = ue.rows, ne = (j) => {
          switch (j) {
            case re.ImprovementHigh:
            case re.ImprovementLow:
              return me.Improvement;
            case re.ConcernHigh:
            case re.ConcernLow:
              return me.Concern;
            case re.NeitherHigh:
            case re.NeitherLow:
              return me.Neither;
            case re.CommonCause:
            default:
              return me.Neither;
          }
        };
        return Z.map(
          (j, Pe) => ({
            data: {
              value: j.value,
              ghost: !!j.ghost
            },
            partition: { id: j.partitionId },
            limits: {
              mean: j.mean,
              ucl: j.upperProcessLimit,
              lcl: j.lowerProcessLimit,
              oneSigma: { upper: j.upperOneSigma, lower: j.lowerOneSigma },
              twoSigma: { upper: j.upperTwoSigma, lower: j.lowerTwoSigma }
            },
            rules: {
              singlePoint: { up: !!j.singlePointUp, down: !!j.singlePointDown },
              twoOfThree: { up: !!j.twoSigmaUp, down: !!j.twoSigmaDown },
              fourOfFive: { up: !!j.fourOfFiveUp, down: !!j.fourOfFiveDown },
              shift: { up: !!j.shiftUp, down: !!j.shiftDown },
              trend: { up: !!j.trendUp, down: !!j.trendDown }
            },
            classification: {
              variation: ne(j.variationIcon),
              neutralSpecialCauseValue: j.variationIcon === re.NeitherHigh || j.variationIcon === re.NeitherLow ? j.specialCauseImprovementValue ?? j.specialCauseConcernValue ?? 1 : null,
              assurance: void 0
            },
            target: m[Pe]?.target ?? null
          })
        );
      } catch {
        return null;
      }
    try {
      const Z = Ur(
        u,
        m,
        De
      ), { chartType: ne, metricImprovement: j } = Hr(
        i,
        c
      ), Pe = {
        chartType: ne,
        metricImprovement: j,
        data: m,
        settings: Z
      }, { rows: Ie } = kl(Pe), Ke = (te) => {
        switch (te) {
          case re.ImprovementHigh:
          case re.ImprovementLow:
            return me.Improvement;
          case re.ConcernHigh:
          case re.ConcernLow:
            return me.Concern;
          case re.NeitherHigh:
          case re.NeitherLow:
            return me.Neither;
          case re.CommonCause:
          default:
            return me.Neither;
        }
      };
      return Ie.map(
        (te, Ze) => ({
          data: {
            value: te.value,
            ghost: !!te.ghost
          },
          partition: { id: te.partitionId },
          limits: {
            mean: te.mean,
            ucl: te.upperProcessLimit,
            lcl: te.lowerProcessLimit,
            oneSigma: { upper: te.upperOneSigma, lower: te.lowerOneSigma },
            twoSigma: { upper: te.upperTwoSigma, lower: te.lowerTwoSigma }
          },
          rules: {
            singlePoint: { up: !!te.singlePointUp, down: !!te.singlePointDown },
            twoOfThree: { up: !!te.twoSigmaUp, down: !!te.twoSigmaDown },
            fourOfFive: { up: !!te.fourOfFiveUp, down: !!te.fourOfFiveDown },
            shift: { up: !!te.shiftUp, down: !!te.shiftDown },
            trend: { up: !!te.trendUp, down: !!te.trendDown }
          },
          classification: {
            variation: Ke(te.variationIcon),
            neutralSpecialCauseValue: te.variationIcon === re.NeitherHigh || te.variationIcon === re.NeitherLow ? te.specialCauseImprovementValue ?? te.specialCauseConcernValue ?? 1 : null,
            assurance: void 0
          },
          target: m[Ze]?.target ?? null
        })
      );
    } catch {
      return null;
    }
  }, [
    ue?.rows?.length,
    m,
    i,
    c,
    u,
    De
  ]) || null, A = (U || []).slice().reverse().find((Z) => Z.limits.mean != null), W = A?.limits.mean ?? null, J = l.useMemo(() => {
    const Z = [];
    try {
      const ne = U, j = u?.minimumPoints ?? 13, Pe = u?.minimumPoints ?? 12;
      if (ne && ne.length) {
        const Ie = ne.filter(
          (te) => !te.data.ghost && te.data.value != null
        ).length;
        Ie < j && Z.push({
          code: Jn.InsufficientPointsGlobal,
          severity: Je.Warning,
          category: Zn.Data,
          message: "Not enough non-ghost points to compute stable limits/icons.",
          context: { nonGhostCount: Ie, minimumPoints: j }
        });
        const Ke = /* @__PURE__ */ new Map();
        for (const te of ne) {
          const Ze = te.partition.id ?? 0, cn = Ke.get(Ze) || { size: 0, nonGhost: 0 };
          cn.size += 1, !te.data.ghost && te.data.value != null && (cn.nonGhost += 1), Ke.set(Ze, cn);
        }
        for (const [te, Ze] of Ke)
          Ze.nonGhost > 0 && Ze.nonGhost < Pe && Z.push({
            code: Jn.InsufficientPointsPartition,
            severity: Je.Warning,
            category: Zn.Partition,
            message: "A partition/baseline segment has too few points for recommended stability.",
            context: {
              partitionId: te,
              nonGhostCount: Ze.nonGhost,
              minimumPointsPartition: Pe
            }
          });
      }
    } catch {
    }
    return Z;
  }, [U, u?.minimumPoints]), Me = l.useMemo(() => J.length ? w ? J.filter((Z) => !(w.severities && Z.severity && !w.severities.includes(Z.severity) || w.categories && Z.category && !w.categories.includes(Z.category) || w.codes && !w.codes.includes(Z.code))) : J : [], [J, w]), V = A?.limits.ucl ?? null, de = A?.limits.lcl ?? null, oe = A?.limits.oneSigma.upper ?? null, fe = A?.limits.oneSigma.lower ?? null, xe = A?.limits.twoSigma.upper ?? null, Oe = A?.limits.twoSigma.lower ?? null, Qe = W != null && oe != null ? Math.abs(oe - W) : 0, Ae = l.useMemo(
    () => [{ id: "process", data: r, color: "#A6A6A6" }],
    [r]
  ), Xe = l.useMemo(
    () => Pl(
      r,
      { mean: W, ucl: V, lcl: de, onePos: oe, oneNeg: fe, twoPos: xe, twoNeg: Oe },
      {
        alwaysShowZeroY: !!d,
        alwaysShowHundredY: !!f,
        percentScale: !!g
      },
      o ?? null
    ),
    [
      r,
      W,
      V,
      de,
      oe,
      fe,
      xe,
      Oe,
      o,
      d,
      f,
      g
    ]
  ), He = l.useMemo(() => {
    const Z = (ne) => {
      const j = ne.filter(
        (Ie) => typeof Ie == "number" && !isNaN(Ie)
      );
      if (!j.length) return null;
      const Pe = j[0];
      return j.every((Ie) => Ie === Pe) ? Pe : null;
    };
    if (U && U.length) {
      const ne = Z(U.map((j) => j.target));
      if (ne != null) return ne;
    }
    return o && o.length ? Z(o) : null;
  }, [U, o]), { show: ft, slotPx: Ce, totalReservedPx: ze } = Dl(
    Xe,
    G,
    { maxFraction: 0.35 }
  ), Be = ft ? ze : 0, an = l.useMemo(() => {
    const Z = r.map((ne) => ne.x);
    return Nl({
      values: r.map((ne) => ne.y),
      dates: Z,
      providedUnit: v || le?.measureUnit,
      percentHeuristic: "0-1",
      autoValue: !1,
      autoDelta: !1,
      autoMetadata: !1
    });
  }, [r, v, le?.measureUnit]), dt = v ?? le?.measureUnit ?? an.unit, on = l.useMemo(() => dt ? { ...le || {}, measureUnit: dt } : le, [le, dt]), sn = l.useMemo(() => {
    if (!U) return [];
    const Z = [];
    for (let ne = 1; ne < U.length; ne++)
      U[ne].partition.id !== U[ne - 1].partition.id && Z.push(ne);
    return Z;
  }, [U]), ln = l.useMemo(
    () => Ps({
      show: !!H,
      rowsForUi: U,
      minPoints: u?.minimumPoints ?? 13,
      metricImprovement: c,
      variant: E,
      runLength: N
    }),
    [
      H,
      U,
      u?.minimumPoints,
      c,
      E,
      N
    ]
  );
  return /* @__PURE__ */ l.createElement(
    "div",
    {
      className: q ? `fdp-spc-chart-wrapper ${q}` : "fdp-spc-chart-wrapper"
    },
    /* @__PURE__ */ l.createElement(
      Ds,
      {
        show: !!H,
        variationNode: ln,
        assuranceNode: null
      }
    ),
    /* @__PURE__ */ l.createElement(
      Va,
      {
        height: G,
        ariaLabel: L,
        margin: { bottom: 48, left: 56, right: 16, top: 12 }
      },
      /* @__PURE__ */ l.createElement(ys, { series: Ae, yDomain: Xe, yBottomGapPx: Be }, (() => {
        const Z = {
          data: {
            series: Ae,
            engineRows: U,
            visualCategories: h,
            partitionMarkers: F ? sn : []
          },
          targets: {
            limits: { mean: W, ucl: V, lcl: de, sigma: Qe, onePos: oe, oneNeg: fe, twoPos: xe, twoNeg: Oe },
            uniformTarget: He
          },
          visuals: {
            showPoints: pe,
            showZones: K,
            highlightOutOfControl: he,
            gradientSequences: x,
            sequenceTransition: b,
            processLineWidth: _,
            showFocusIndicator: O,
            enableRules: P,
            enableNeutralNoJudgement: D,
            showTrendStartMarkers: k,
            showFirstFavourableCrossMarkers: S,
            showTrendBridgeOverlay: y
          },
          a11y: {
            announceFocus: ce,
            ariaLabel: L,
            narrationContext: on,
            showSignalsInspector: $,
            onSignalFocus: p,
            showTrendGatingExplanation: T
          },
          axis: { zeroBreakSlotGapPx: Ce },
          compute: { effectiveUnit: dt, metricImprovement: c }
        };
        return /* @__PURE__ */ l.createElement(wl, { ...Z });
      })())
    ),
    Le && /* @__PURE__ */ l.createElement("div", { className: "fdp-spc-chart__source", "aria-label": "Chart data source" }, typeof Le == "string" ? /* @__PURE__ */ l.createElement("small", null, "Source: ", Le) : Le),
    /* @__PURE__ */ l.createElement(
      Ts,
      {
        show: !!C,
        warnings: Me,
        formatWarningCategory: n,
        formatWarningCode: t
      }
    )
  );
};
function Ll(e) {
  switch (e) {
    case re.ImprovementHigh:
    case re.ImprovementLow:
      return Ct.SpecialCauseImproving;
    case re.ConcernHigh:
    case re.ConcernLow:
      return Ct.SpecialCauseDeteriorating;
    case re.NeitherHigh:
    case re.NeitherLow:
      return Ct.SpecialCauseNoJudgement;
    case re.CommonCause:
      return Ct.CommonCause;
    default:
      return null;
  }
}
function zl(e) {
  return e === re.ImprovementHigh || e === re.ImprovementLow || e === re.ConcernHigh || e === re.ConcernLow || e === re.NeitherHigh || e === re.NeitherLow;
}
function Bl(e, t) {
  const {
    chartType: n = tt.XmR,
    metricImprovement: r,
    minimumPoints: o = Ta,
    enableNeutralNoJudgement: a = !0,
    includeSignalFallbacks: s = !0
  } = t, i = e.map((P) => ({ x: P.x, value: P.value ?? P.y ?? null }));
  let c = null;
  try {
    const P = i.filter(
      (k) => typeof k.value == "number"
    ).length, F = { minimumPoints: o };
    P >= o && (F.chartLevelEligibility = !0), c = zr({ chartType: n, metricImprovement: r, data: i, settings: F });
  } catch {
    c = null;
  }
  const u = c?.rows ?? [];
  let d = u[u.length - 1] ?? null;
  for (let P = u.length - 1; P >= 0; P--) {
    const F = u[P];
    if (F && F.value != null && !F.ghost) {
      d = F;
      break;
    }
  }
  let f = [];
  try {
    f = za(u, {
      metricImprovement: r,
      enableNeutralNoJudgement: a
    });
  } catch {
    f = [];
  }
  const g = Ll(
    d?.variationIcon
  ), x = d?.variationIcon ?? null, b = d?.mean ?? null, _ = d ? {
    lower: d?.lowerProcessLimit ?? null,
    upper: d?.upperProcessLimit ?? null
  } : null, M = d ? {
    upperOne: d?.upperOneSigma ?? null,
    upperTwo: d?.upperTwoSigma ?? null,
    lowerOne: d?.lowerOneSigma ?? null,
    lowerTwo: d?.lowerTwoSigma ?? null
  } : null;
  let T, D;
  return s && (T = El(f), D = Tl(f)), {
    rows: u,
    visuals: f,
    latestState: g,
    lastVariationIcon: x,
    centerLine: b,
    controlLimits: _,
    sigmaBands: M,
    pointSignals: T,
    pointNeutralSpecialCause: D
  };
}
export {
  Bt as AssuranceIcon,
  Gl as BaselineSuggestionReason,
  tt as ChartType,
  Ta as DEFAULT_MIN_POINTS,
  Yl as Icons,
  nt as ImprovementDirection,
  Ql as PARITY_V26,
  ql as RULE_METADATA,
  Wl as SPCChart,
  pl as SPCTooltipOverlay,
  Yr as SpcEmbeddedIconVariant,
  ot as SpcVisualCategory,
  Zn as SpcWarningCategory,
  Jn as SpcWarningCode,
  Je as SpcWarningSeverity,
  Xl as VARIATION_COLOR_TOKENS,
  re as VariationIcon,
  zr as buildSpcV26a,
  Ra as buildSpcV26aWithVisuals,
  Bl as computeSpcPrecomputed,
  za as computeSpcVisualCategories,
  Hn as extractRuleIds,
  Zl as getVariationColorHex,
  Ha as getVariationColorToken,
  zl as isSpecialCauseIcon,
  Ll as mapIconToVariation,
  Kl as normaliseSpcSettingsV2,
  kt as ruleGlossary,
  Un as variationLabel,
  Tl as visualsToNeutralFlags,
  El as visualsToPointSignals,
  ec as withParityV26
};
//# sourceMappingURL=index.esm.js.map
