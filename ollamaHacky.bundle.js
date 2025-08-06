#!/usr/bin/env -S deno run --allow-all
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name17 in all)
    __defProp(target, name17, { get: all[name17], enumerable: true });
};

// https://esm.sh/@ai-sdk/provider@1.1.3/denonext/provider.mjs
var i = "vercel.ai.error";
var er = Symbol.for(i);
var l;
var ar = class c extends Error {
  constructor({ name: e2, message: s2, cause: t2 }) {
    super(s2), this[l] = true, this.name = e2, this.cause = t2;
  }
  static isInstance(e2) {
    return c.hasMarker(e2, i);
  }
  static hasMarker(e2, s2) {
    let t2 = Symbol.for(s2);
    return e2 != null && typeof e2 == "object" && t2 in e2 && typeof e2[t2] == "boolean" && e2[t2] === true;
  }
};
l = er;
var a = ar;
var m = "AI_APICallError";
var v = `vercel.ai.error.${m}`;
var sr = Symbol.for(v);
var u;
var br = class extends a {
  constructor({ message: r17, url: e2, requestBodyValues: s2, statusCode: t2, responseHeaders: W5, responseBody: X4, cause: Y3, isRetryable: Z7 = t2 != null && (t2 === 408 || t2 === 409 || t2 === 429 || t2 >= 500), data: rr }) {
    super({ name: m, message: r17, cause: Y3 }), this[u] = true, this.url = e2, this.requestBodyValues = s2, this.statusCode = t2, this.responseHeaders = W5, this.responseBody = X4, this.isRetryable = Z7, this.data = rr;
  }
  static isInstance(r17) {
    return a.hasMarker(r17, v);
  }
};
u = sr;
var y = "AI_EmptyResponseBodyError";
var d = `vercel.ai.error.${y}`;
var tr = Symbol.for(d);
var h;
var Ir = class extends a {
  constructor({ message: r17 = "Empty response body" } = {}) {
    super({ name: y, message: r17 }), this[h] = true;
  }
  static isInstance(r17) {
    return a.hasMarker(r17, d);
  }
};
h = tr;
function p(r17) {
  return r17 == null ? "unknown error" : typeof r17 == "string" ? r17 : r17 instanceof Error ? r17.message : JSON.stringify(r17);
}
var b = "AI_InvalidArgumentError";
var I = `vercel.ai.error.${b}`;
var nr = Symbol.for(I);
var f;
var fr = class extends a {
  constructor({ message: r17, cause: e2, argument: s2 }) {
    super({ name: b, message: r17, cause: e2 }), this[f] = true, this.argument = s2;
  }
  static isInstance(r17) {
    return a.hasMarker(r17, I);
  }
};
f = nr;
var E = "AI_InvalidPromptError";
var S = `vercel.ai.error.${E}`;
var or = Symbol.for(S);
var g;
g = or;
var k = "AI_InvalidResponseDataError";
var _ = `vercel.ai.error.${k}`;
var ir = Symbol.for(_);
var A;
A = ir;
var $ = "AI_JSONParseError";
var M = `vercel.ai.error.${$}`;
var lr = Symbol.for(M);
var x;
var gr = class extends a {
  constructor({ text: r17, cause: e2 }) {
    super({ name: $, message: `JSON parsing failed: Text: ${r17}.
Error message: ${p(e2)}`, cause: e2 }), this[x] = true, this.text = r17;
  }
  static isInstance(r17) {
    return a.hasMarker(r17, M);
  }
};
x = lr;
var N = "AI_LoadAPIKeyError";
var O = `vercel.ai.error.${N}`;
var cr = Symbol.for(O);
var P;
P = cr;
var T = "AI_LoadSettingError";
var J = `vercel.ai.error.${T}`;
var mr = Symbol.for(J);
var V;
V = mr;
var j = "AI_NoContentGeneratedError";
var C = `vercel.ai.error.${j}`;
var vr = Symbol.for(C);
var D;
D = vr;
var K = "AI_NoSuchModelError";
var R = `vercel.ai.error.${K}`;
var ur = Symbol.for(R);
var w;
w = ur;
var B = "AI_TooManyEmbeddingValuesForCallError";
var F = `vercel.ai.error.${B}`;
var yr = Symbol.for(F);
var L;
var Mr = class extends a {
  constructor(r17) {
    super({ name: B, message: `Too many values for a single embedding call. The ${r17.provider} model "${r17.modelId}" can only embed up to ${r17.maxEmbeddingsPerCall} values per call, but ${r17.values.length} values were provided.` }), this[L] = true, this.provider = r17.provider, this.modelId = r17.modelId, this.maxEmbeddingsPerCall = r17.maxEmbeddingsPerCall, this.values = r17.values;
  }
  static isInstance(r17) {
    return a.hasMarker(r17, F);
  }
};
L = yr;
var G = "AI_TypeValidationError";
var U = `vercel.ai.error.${G}`;
var dr = Symbol.for(U);
var q;
var hr = class o extends a {
  constructor({ value: e2, cause: s2 }) {
    super({ name: G, message: `Type validation failed: Value: ${JSON.stringify(e2)}.
Error message: ${p(s2)}`, cause: s2 }), this[q] = true, this.value = e2;
  }
  static isInstance(e2) {
    return a.hasMarker(e2, U);
  }
  static wrap({ value: e2, cause: s2 }) {
    return o.isInstance(s2) && s2.value === e2 ? s2 : new o({ value: e2, cause: s2 });
  }
};
q = dr;
var xr = hr;
var H = "AI_UnsupportedFunctionalityError";
var z = `vercel.ai.error.${H}`;
var pr = Symbol.for(z);
var Q;
var Nr = class extends a {
  constructor({ functionality: r17, message: e2 = `'${r17}' functionality not supported.` }) {
    super({ name: H, message: e2 }), this[Q] = true, this.functionality = r17;
  }
  static isInstance(r17) {
    return a.hasMarker(r17, z);
  }
};
Q = pr;

// https://esm.sh/nanoid@3.3.11/denonext/non-secure.mjs
var h2 = (t2, e2 = 21) => (l6 = e2) => {
  let r17 = "", n2 = l6 | 0;
  for (; n2--; ) r17 += t2[Math.random() * t2.length | 0];
  return r17;
};

// https://esm.sh/secure-json-parse@2.7.0/denonext/secure-json-parse.mjs
import { Buffer as __Buffer$ } from "node:buffer";
var F2 = Object.create;
var l2 = Object.defineProperty;
var b2 = Object.getOwnPropertyDescriptor;
var g2 = Object.getOwnPropertyNames;
var j2 = Object.getPrototypeOf;
var E2 = Object.prototype.hasOwnProperty;
var k2 = (r17, e2) => () => (e2 || r17((e2 = { exports: {} }).exports, e2), e2.exports);
var O2 = (r17, e2, t2, o5) => {
  if (e2 && typeof e2 == "object" || typeof e2 == "function") for (let n2 of g2(e2)) !E2.call(r17, n2) && n2 !== t2 && l2(r17, n2, { get: () => e2[n2], enumerable: !(o5 = b2(e2, n2)) || o5.enumerable });
  return r17;
};
var w2 = (r17, e2, t2) => (t2 = r17 != null ? F2(j2(r17)) : {}, O2(e2 || !r17 || !r17.__esModule ? l2(t2, "default", { value: r17, enumerable: true }) : t2, r17));
var m2 = k2((B7, f4) => {
  "use strict";
  var L8 = typeof __Buffer$ < "u", p5 = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/, y4 = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
  function d6(r17, e2, t2) {
    t2 == null && e2 !== null && typeof e2 == "object" && (t2 = e2, e2 = void 0), L8 && __Buffer$.isBuffer(r17) && (r17 = r17.toString()), r17 && r17.charCodeAt(0) === 65279 && (r17 = r17.slice(1));
    let o5 = JSON.parse(r17, e2);
    if (o5 === null || typeof o5 != "object") return o5;
    let n2 = t2 && t2.protoAction || "error", c5 = t2 && t2.constructorAction || "error";
    if (n2 === "ignore" && c5 === "ignore") return o5;
    if (n2 !== "ignore" && c5 !== "ignore") {
      if (p5.test(r17) === false && y4.test(r17) === false) return o5;
    } else if (n2 !== "ignore" && c5 === "ignore") {
      if (p5.test(r17) === false) return o5;
    } else if (y4.test(r17) === false) return o5;
    return _6(o5, { protoAction: n2, constructorAction: c5, safe: t2 && t2.safe });
  }
  function _6(r17, { protoAction: e2 = "error", constructorAction: t2 = "error", safe: o5 } = {}) {
    let n2 = [r17];
    for (; n2.length; ) {
      let c5 = n2;
      n2 = [];
      for (let s2 of c5) {
        if (e2 !== "ignore" && Object.prototype.hasOwnProperty.call(s2, "__proto__")) {
          if (o5 === true) return null;
          if (e2 === "error") throw new SyntaxError("Object contains forbidden prototype property");
          delete s2.__proto__;
        }
        if (t2 !== "ignore" && Object.prototype.hasOwnProperty.call(s2, "constructor") && Object.prototype.hasOwnProperty.call(s2.constructor, "prototype")) {
          if (o5 === true) return null;
          if (t2 === "error") throw new SyntaxError("Object contains forbidden prototype property");
          delete s2.constructor;
        }
        for (let h9 in s2) {
          let a4 = s2[h9];
          a4 && typeof a4 == "object" && n2.push(a4);
        }
      }
    }
    return r17;
  }
  function i4(r17, e2, t2) {
    let o5 = Error.stackTraceLimit;
    Error.stackTraceLimit = 0;
    try {
      return d6(r17, e2, t2);
    } finally {
      Error.stackTraceLimit = o5;
    }
  }
  function T7(r17, e2) {
    let t2 = Error.stackTraceLimit;
    Error.stackTraceLimit = 0;
    try {
      return d6(r17, e2, { safe: true });
    } catch {
      return null;
    } finally {
      Error.stackTraceLimit = t2;
    }
  }
  f4.exports = i4;
  f4.exports.default = i4;
  f4.exports.parse = i4;
  f4.exports.safeParse = T7;
  f4.exports.scan = _6;
});
var u2 = w2(m2());
var { parse: S2, safeParse: A2, scan: x2 } = u2;
var C2 = u2.default ?? u2;

// https://esm.sh/@ai-sdk/provider-utils@2.2.8/denonext/provider-utils.mjs
import __Process$ from "node:process";
function _2(...e2) {
  return e2.reduce((t2, r17) => ({ ...t2, ...r17 ?? {} }), {});
}
function d2(e2) {
  let t2 = {};
  return e2.headers.forEach((r17, s2) => {
    t2[s2] = r17;
  }), t2;
}
var J2 = ({ prefix: e2, size: t2 = 16, alphabet: r17 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", separator: s2 = "-" } = {}) => {
  let o5 = h2(r17, t2);
  if (e2 == null) return o5;
  if (r17.includes(s2)) throw new fr({ argument: "separator", message: `The separator "${s2}" must not be part of the alphabet "${r17}".` });
  return (u7) => `${e2}${s2}${o5(u7)}`;
};
var Z = J2();
function P2(e2) {
  return Object.fromEntries(Object.entries(e2).filter(([t2, r17]) => r17 != null));
}
function h3(e2) {
  return e2 instanceof Error && (e2.name === "AbortError" || e2.name === "TimeoutError");
}
var T2 = Symbol.for("vercel.ai.validator");
function k3(e2) {
  return { [T2]: true, validate: e2 };
}
function L2(e2) {
  return typeof e2 == "object" && e2 !== null && T2 in e2 && e2[T2] === true && "validate" in e2;
}
function j3(e2) {
  return L2(e2) ? e2 : U2(e2);
}
function U2(e2) {
  return k3((t2) => {
    let r17 = e2.safeParse(t2);
    return r17.success ? { success: true, value: r17.data } : { success: false, error: r17.error };
  });
}
function N2({ value: e2, schema: t2 }) {
  let r17 = A3({ value: e2, schema: t2 });
  if (!r17.success) throw xr.wrap({ value: e2, cause: r17.error });
  return r17.value;
}
function A3({ value: e2, schema: t2 }) {
  let r17 = j3(t2);
  try {
    if (r17.validate == null) return { success: true, value: e2 };
    let s2 = r17.validate(e2);
    return s2.success ? s2 : { success: false, error: xr.wrap({ value: e2, cause: s2.error }) };
  } catch (s2) {
    return { success: false, error: xr.wrap({ value: e2, cause: s2 }) };
  }
}
function D2({ text: e2, schema: t2 }) {
  try {
    let r17 = C2.parse(e2);
    return t2 == null ? r17 : N2({ value: r17, schema: t2 });
  } catch (r17) {
    throw gr.isInstance(r17) || xr.isInstance(r17) ? r17 : new gr({ text: e2, cause: r17 });
  }
}
function S3({ text: e2, schema: t2 }) {
  try {
    let r17 = C2.parse(e2);
    if (t2 == null) return { success: true, value: r17, rawValue: r17 };
    let s2 = A3({ value: r17, schema: t2 });
    return s2.success ? { ...s2, rawValue: r17 } : s2;
  } catch (r17) {
    return { success: false, error: gr.isInstance(r17) ? r17 : new gr({ text: e2, cause: r17 }) };
  }
}
var G2 = () => globalThis.fetch;
var he = async ({ url: e2, headers: t2, body: r17, failedResponseHandler: s2, successfulResponseHandler: o5, abortSignal: u7, fetch: a4 }) => $2({ url: e2, headers: { "Content-Type": "application/json", ...t2 }, body: { content: JSON.stringify(r17), values: r17 }, failedResponseHandler: s2, successfulResponseHandler: o5, abortSignal: u7, fetch: a4 });
var $2 = async ({ url: e2, headers: t2 = {}, body: r17, successfulResponseHandler: s2, failedResponseHandler: o5, abortSignal: u7, fetch: a4 = G2() }) => {
  try {
    let i4 = await a4(e2, { method: "POST", headers: P2(t2), body: r17.content, signal: u7 }), n2 = d2(i4);
    if (!i4.ok) {
      let c5;
      try {
        c5 = await o5({ response: i4, url: e2, requestBodyValues: r17.values });
      } catch (f4) {
        throw h3(f4) || br.isInstance(f4) ? f4 : new br({ message: "Failed to process error response", cause: f4, statusCode: i4.status, url: e2, responseHeaders: n2, requestBodyValues: r17.values });
      }
      throw c5.value;
    }
    try {
      return await s2({ response: i4, url: e2, requestBodyValues: r17.values });
    } catch (c5) {
      throw c5 instanceof Error && (h3(c5) || br.isInstance(c5)) ? c5 : new br({ message: "Failed to process successful response", cause: c5, statusCode: i4.status, url: e2, responseHeaders: n2, requestBodyValues: r17.values });
    }
  } catch (i4) {
    if (h3(i4)) throw i4;
    if (i4 instanceof TypeError && i4.message === "fetch failed") {
      let n2 = i4.cause;
      if (n2 != null) throw new br({ message: `Cannot connect to API: ${n2.message}`, cause: n2, url: e2, requestBodyValues: r17.values, isRetryable: true });
    }
    throw i4;
  }
};
var ge = ({ errorSchema: e2, errorToMessage: t2, isRetryable: r17 }) => async ({ response: s2, url: o5, requestBodyValues: u7 }) => {
  let a4 = await s2.text(), i4 = d2(s2);
  if (a4.trim() === "") return { responseHeaders: i4, value: new br({ message: s2.statusText, url: o5, requestBodyValues: u7, statusCode: s2.status, responseHeaders: i4, responseBody: a4, isRetryable: r17?.(s2) }) };
  try {
    let n2 = D2({ text: a4, schema: e2 });
    return { responseHeaders: i4, value: new br({ message: t2(n2), url: o5, requestBodyValues: u7, statusCode: s2.status, responseHeaders: i4, responseBody: a4, data: n2, isRetryable: r17?.(s2, n2) }) };
  } catch {
    return { responseHeaders: i4, value: new br({ message: s2.statusText, url: o5, requestBodyValues: u7, statusCode: s2.status, responseHeaders: i4, responseBody: a4, isRetryable: r17?.(s2) }) };
  }
};
var be = (e2) => async ({ response: t2, url: r17, requestBodyValues: s2 }) => {
  let o5 = await t2.text(), u7 = S3({ text: o5, schema: e2 }), a4 = d2(t2);
  if (!u7.success) throw new br({ message: "Invalid JSON response", cause: u7.error, statusCode: t2.status, responseHeaders: a4, responseBody: o5, url: r17, requestBodyValues: s2 });
  return { responseHeaders: a4, value: u7.value, rawValue: u7.rawValue };
};
var { btoa: V2, atob: W } = globalThis;
function Se(e2) {
  let t2 = "";
  for (let r17 = 0; r17 < e2.length; r17++) t2 += String.fromCodePoint(e2[r17]);
  return V2(t2);
}
function Pe(e2) {
  return e2?.replace(/\/$/, "");
}

// https://esm.sh/partial-json@0.1.7/denonext/options.mjs
var options_exports = {};
__export(options_exports, {
  ALL: () => r,
  ARR: () => p2,
  ATOM: () => u3,
  Allow: () => _3,
  BOOL: () => f2,
  COLLECTION: () => s,
  INF: () => P3,
  INFINITY: () => a2,
  NAN: () => c2,
  NULL: () => i2,
  NUM: () => w3,
  OBJ: () => m3,
  SPECIAL: () => d3,
  STR: () => j4,
  _INFINITY: () => J3,
  __esModule: () => b3,
  default: () => n
});
var e = Object.create;
var F3 = Object.defineProperty;
var l3 = Object.getOwnPropertyDescriptor;
var M2 = Object.getOwnPropertyNames;
var o2 = Object.getPrototypeOf;
var t = Object.prototype.hasOwnProperty;
var B2 = (L8, I5) => () => (I5 || L8((I5 = { exports: {} }).exports, I5), I5.exports);
var E3 = (L8, I5, O8, C8) => {
  if (I5 && typeof I5 == "object" || typeof I5 == "function") for (let A10 of M2(I5)) !t.call(L8, A10) && A10 !== O8 && F3(L8, A10, { get: () => I5[A10], enumerable: !(C8 = l3(I5, A10)) || C8.enumerable });
  return L8;
};
var S4 = (L8, I5, O8) => (O8 = L8 != null ? e(o2(L8)) : {}, E3(I5 || !L8 || !L8.__esModule ? F3(O8, "default", { value: L8, enumerable: true }) : O8, L8));
var R2 = B2((N6) => {
  "use strict";
  Object.defineProperty(N6, "__esModule", { value: true });
  N6.Allow = N6.ALL = N6.COLLECTION = N6.ATOM = N6.SPECIAL = N6.INF = N6._INFINITY = N6.INFINITY = N6.NAN = N6.BOOL = N6.NULL = N6.OBJ = N6.ARR = N6.NUM = N6.STR = void 0;
  N6.STR = 1;
  N6.NUM = 2;
  N6.ARR = 4;
  N6.OBJ = 8;
  N6.NULL = 16;
  N6.BOOL = 32;
  N6.NAN = 64;
  N6.INFINITY = 128;
  N6._INFINITY = 256;
  N6.INF = N6.INFINITY | N6._INFINITY;
  N6.SPECIAL = N6.NULL | N6.BOOL | N6.INF | N6.NAN;
  N6.ATOM = N6.STR | N6.NUM | N6.SPECIAL;
  N6.COLLECTION = N6.ARR | N6.OBJ;
  N6.ALL = N6.ATOM | N6.COLLECTION;
  N6.Allow = { STR: N6.STR, NUM: N6.NUM, ARR: N6.ARR, OBJ: N6.OBJ, NULL: N6.NULL, BOOL: N6.BOOL, NAN: N6.NAN, INFINITY: N6.INFINITY, _INFINITY: N6._INFINITY, INF: N6.INF, SPECIAL: N6.SPECIAL, ATOM: N6.ATOM, COLLECTION: N6.COLLECTION, ALL: N6.ALL };
  N6.default = N6.Allow;
});
var T3 = S4(R2());
var { __esModule: b3, Allow: _3, ALL: r, COLLECTION: s, ATOM: u3, SPECIAL: d3, INF: P3, _INFINITY: J3, INFINITY: a2, NAN: c2, BOOL: f2, NULL: i2, OBJ: m3, ARR: p2, NUM: w3, STR: j4 } = T3;
var n = T3.default ?? T3;

// https://esm.sh/partial-json@0.1.7/denonext/partial-json.mjs
var require2 = (n2) => {
  const e2 = (m8) => typeof m8.default < "u" ? m8.default : m8, c5 = (m8) => Object.assign({ __esModule: true }, m8);
  switch (n2) {
    case "partial-json/options":
      return c5(options_exports);
    default:
      console.error('module "' + n2 + '" not found');
      return null;
  }
};
var m4 = Object.create;
var o3 = Object.defineProperty;
var L3 = Object.getOwnPropertyDescriptor;
var x3 = Object.getOwnPropertyNames;
var B3 = Object.getPrototypeOf;
var M3 = Object.prototype.hasOwnProperty;
var A4 = ((t2) => typeof require2 < "u" ? require2 : typeof Proxy < "u" ? new Proxy(t2, { get: (r17, s2) => (typeof require2 < "u" ? require2 : r17)[s2] }) : t2)(function(t2) {
  if (typeof require2 < "u") return require2.apply(this, arguments);
  throw Error('Dynamic require of "' + t2 + '" is not supported');
});
var E4 = (t2, r17) => () => (r17 || t2((r17 = { exports: {} }).exports, r17), r17.exports);
var P4 = (t2, r17, s2, e2) => {
  if (r17 && typeof r17 == "object" || typeof r17 == "function") for (let i4 of x3(r17)) !M3.call(t2, i4) && i4 !== s2 && o3(t2, i4, { get: () => r17[i4], enumerable: !(e2 = L3(r17, i4)) || e2.enumerable });
  return t2;
};
var T4 = (t2, r17, s2) => (s2 = t2 != null ? m4(B3(t2)) : {}, P4(r17 || !t2 || !t2.__esModule ? o3(s2, "default", { value: t2, enumerable: true }) : s2, t2));
var w4 = E4((u7) => {
  "use strict";
  var U7 = u7 && u7.__createBinding || (Object.create ? function(t2, r17, s2, e2) {
    e2 === void 0 && (e2 = s2);
    var i4 = Object.getOwnPropertyDescriptor(r17, s2);
    (!i4 || ("get" in i4 ? !r17.__esModule : i4.writable || i4.configurable)) && (i4 = { enumerable: true, get: function() {
      return r17[s2];
    } }), Object.defineProperty(t2, e2, i4);
  } : function(t2, r17, s2, e2) {
    e2 === void 0 && (e2 = s2), t2[e2] = r17[s2];
  }), v4 = u7 && u7.__exportStar || function(t2, r17) {
    for (var s2 in t2) s2 !== "default" && !Object.prototype.hasOwnProperty.call(r17, s2) && U7(r17, t2, s2);
  };
  Object.defineProperty(u7, "__esModule", { value: true });
  u7.Allow = u7.MalformedJSON = u7.PartialJSON = u7.parseJSON = u7.parse = void 0;
  var f4 = A4("partial-json/options");
  Object.defineProperty(u7, "Allow", { enumerable: true, get: function() {
    return f4.Allow;
  } });
  v4(A4("partial-json/options"), u7);
  var O8 = class extends Error {
  };
  u7.PartialJSON = O8;
  var p5 = class extends Error {
  };
  u7.MalformedJSON = p5;
  function y4(t2, r17 = f4.Allow.ALL) {
    if (typeof t2 != "string") throw new TypeError(`expecting str, got ${typeof t2}`);
    if (!t2.trim()) throw new Error(`${t2} is empty`);
    return R6(t2.trim(), r17);
  }
  u7.parseJSON = y4;
  var R6 = (t2, r17) => {
    let s2 = t2.length, e2 = 0, i4 = (a4) => {
      throw new O8(`${a4} at position ${e2}`);
    }, N6 = (a4) => {
      throw new p5(`${a4} at position ${e2}`);
    }, d6 = () => (n2(), e2 >= s2 && i4("Unexpected end of input"), t2[e2] === '"' ? b7() : t2[e2] === "{" ? I5() : t2[e2] === "[" ? J9() : t2.substring(e2, e2 + 4) === "null" || f4.Allow.NULL & r17 && s2 - e2 < 4 && "null".startsWith(t2.substring(e2)) ? (e2 += 4, null) : t2.substring(e2, e2 + 4) === "true" || f4.Allow.BOOL & r17 && s2 - e2 < 4 && "true".startsWith(t2.substring(e2)) ? (e2 += 4, true) : t2.substring(e2, e2 + 5) === "false" || f4.Allow.BOOL & r17 && s2 - e2 < 5 && "false".startsWith(t2.substring(e2)) ? (e2 += 5, false) : t2.substring(e2, e2 + 8) === "Infinity" || f4.Allow.INFINITY & r17 && s2 - e2 < 8 && "Infinity".startsWith(t2.substring(e2)) ? (e2 += 8, 1 / 0) : t2.substring(e2, e2 + 9) === "-Infinity" || f4.Allow._INFINITY & r17 && 1 < s2 - e2 && s2 - e2 < 9 && "-Infinity".startsWith(t2.substring(e2)) ? (e2 += 9, -1 / 0) : t2.substring(e2, e2 + 3) === "NaN" || f4.Allow.NAN & r17 && s2 - e2 < 3 && "NaN".startsWith(t2.substring(e2)) ? (e2 += 3, NaN) : _6()), b7 = () => {
      let a4 = e2, c5 = false;
      for (e2++; e2 < s2 && (t2[e2] !== '"' || c5 && t2[e2 - 1] === "\\"); ) c5 = t2[e2] === "\\" ? !c5 : false, e2++;
      if (t2.charAt(e2) == '"') try {
        return JSON.parse(t2.substring(a4, ++e2 - Number(c5)));
      } catch (l6) {
        N6(String(l6));
      }
      else if (f4.Allow.STR & r17) try {
        return JSON.parse(t2.substring(a4, e2 - Number(c5)) + '"');
      } catch {
        return JSON.parse(t2.substring(a4, t2.lastIndexOf("\\")) + '"');
      }
      i4("Unterminated string literal");
    }, I5 = () => {
      e2++, n2();
      let a4 = {};
      try {
        for (; t2[e2] !== "}"; ) {
          if (n2(), e2 >= s2 && f4.Allow.OBJ & r17) return a4;
          let c5 = b7();
          n2(), e2++;
          try {
            let l6 = d6();
            a4[c5] = l6;
          } catch (l6) {
            if (f4.Allow.OBJ & r17) return a4;
            throw l6;
          }
          n2(), t2[e2] === "," && e2++;
        }
      } catch {
        if (f4.Allow.OBJ & r17) return a4;
        i4("Expected '}' at end of object");
      }
      return e2++, a4;
    }, J9 = () => {
      e2++;
      let a4 = [];
      try {
        for (; t2[e2] !== "]"; ) a4.push(d6()), n2(), t2[e2] === "," && e2++;
      } catch {
        if (f4.Allow.ARR & r17) return a4;
        i4("Expected ']' at end of array");
      }
      return e2++, a4;
    }, _6 = () => {
      if (e2 === 0) {
        t2 === "-" && N6("Not sure what '-' is");
        try {
          return JSON.parse(t2);
        } catch (c5) {
          if (f4.Allow.NUM & r17) try {
            return JSON.parse(t2.substring(0, t2.lastIndexOf("e")));
          } catch {
          }
          N6(String(c5));
        }
      }
      let a4 = e2;
      for (t2[e2] === "-" && e2++; t2[e2] && ",]}".indexOf(t2[e2]) === -1; ) e2++;
      e2 == s2 && !(f4.Allow.NUM & r17) && i4("Unterminated number literal");
      try {
        return JSON.parse(t2.substring(a4, e2));
      } catch {
        t2.substring(a4, e2) === "-" && i4("Not sure what '-' is");
        try {
          return JSON.parse(t2.substring(a4, t2.lastIndexOf("e")));
        } catch (l6) {
          N6(String(l6));
        }
      }
    }, n2 = () => {
      for (; e2 < s2 && ` 
\r	`.includes(t2[e2]); ) e2++;
    };
    return d6();
  }, W5 = y4;
  u7.parse = W5;
});
var h4 = T4(w4());
var { __esModule: Y, Allow: C3, MalformedJSON: q2, PartialJSON: D3, parseJSON: z2, parse: G3, ALL: H2, COLLECTION: K2, ATOM: Q2, SPECIAL: V3, INF: X, _INFINITY: Z2, INFINITY: k4, NAN: g3, BOOL: S5, NULL: j5, OBJ: ee, ARR: te, NUM: re, STR: se } = h4;
var ae = h4.default ?? h4;

// https://esm.sh/zod@3.25.76/denonext/zod.mjs
var $e = Object.defineProperty;
var Me = (r17, e2) => {
  for (var t2 in e2) $e(r17, t2, { get: e2[t2], enumerable: true });
};
var be2 = {};
Me(be2, { BRAND: () => ct, DIRTY: () => D4, EMPTY_PATH: () => De, INVALID: () => p3, NEVER: () => qt, OK: () => k5, ParseStatus: () => x4, Schema: () => _4, ZodAny: () => P5, ZodArray: () => $3, ZodBigInt: () => U3, ZodBoolean: () => F4, ZodBranded: () => le, ZodCatch: () => ee2, ZodDate: () => B4, ZodDefault: () => K3, ZodDiscriminatedUnion: () => me, ZodEffects: () => S6, ZodEnum: () => Q3, ZodError: () => b4, ZodFirstPartyTypeKind: () => m5, ZodFunction: () => _e, ZodIntersection: () => Y2, ZodIssueCode: () => c3, ZodLazy: () => H3, ZodLiteral: () => G4, ZodMap: () => oe, ZodNaN: () => de, ZodNativeEnum: () => X2, ZodNever: () => A5, ZodNull: () => q3, ZodNullable: () => j6, ZodNumber: () => L4, ZodObject: () => w5, ZodOptional: () => C4, ZodParsedType: () => u4, ZodPipeline: () => fe, ZodPromise: () => z3, ZodReadonly: () => te2, ZodRecord: () => ye, ZodSchema: () => _4, ZodSet: () => ce, ZodString: () => V4, ZodSymbol: () => ne, ZodTransformer: () => S6, ZodTuple: () => N3, ZodType: () => _4, ZodUndefined: () => W2, ZodUnion: () => J4, ZodUnknown: () => Z3, ZodVoid: () => ie, addIssueToContext: () => d4, any: () => _t, array: () => kt, bigint: () => ft, boolean: () => Ze, coerce: () => Wt, custom: () => je, date: () => ht, datetimeRegex: () => Re, defaultErrorMap: () => I2, discriminatedUnion: () => Ct, effect: () => Vt, enum: () => Zt, function: () => jt, getErrorMap: () => re2, getParsedType: () => R3, instanceof: () => ut, intersection: () => Ot, isAborted: () => he2, isAsync: () => se2, isDirty: () => pe, isValid: () => M4, late: () => dt, lazy: () => It, literal: () => Et, makeIssue: () => ue, map: () => Rt, nan: () => lt, nativeEnum: () => $t, never: () => vt, null: () => yt, nullable: () => zt, number: () => Ee, object: () => bt, objectUtil: () => ve, oboolean: () => Bt, onumber: () => Ft, optional: () => Pt, ostring: () => Ut, pipeline: () => Lt, preprocess: () => Dt, promise: () => Mt, quotelessJson: () => Ve, record: () => At, set: () => Nt, setErrorMap: () => ze, strictObject: () => wt, string: () => Ie, symbol: () => pt, transformer: () => Vt, tuple: () => St, undefined: () => mt, union: () => Tt, unknown: () => gt, util: () => g4, void: () => xt });
var g4;
(function(r17) {
  r17.assertEqual = (a4) => {
  };
  function e2(a4) {
  }
  r17.assertIs = e2;
  function t2(a4) {
    throw new Error();
  }
  r17.assertNever = t2, r17.arrayToEnum = (a4) => {
    let n2 = {};
    for (let i4 of a4) n2[i4] = i4;
    return n2;
  }, r17.getValidEnumValues = (a4) => {
    let n2 = r17.objectKeys(a4).filter((o5) => typeof a4[a4[o5]] != "number"), i4 = {};
    for (let o5 of n2) i4[o5] = a4[o5];
    return r17.objectValues(i4);
  }, r17.objectValues = (a4) => r17.objectKeys(a4).map(function(n2) {
    return a4[n2];
  }), r17.objectKeys = typeof Object.keys == "function" ? (a4) => Object.keys(a4) : (a4) => {
    let n2 = [];
    for (let i4 in a4) Object.prototype.hasOwnProperty.call(a4, i4) && n2.push(i4);
    return n2;
  }, r17.find = (a4, n2) => {
    for (let i4 of a4) if (n2(i4)) return i4;
  }, r17.isInteger = typeof Number.isInteger == "function" ? (a4) => Number.isInteger(a4) : (a4) => typeof a4 == "number" && Number.isFinite(a4) && Math.floor(a4) === a4;
  function s2(a4, n2 = " | ") {
    return a4.map((i4) => typeof i4 == "string" ? `'${i4}'` : i4).join(n2);
  }
  r17.joinValues = s2, r17.jsonStringifyReplacer = (a4, n2) => typeof n2 == "bigint" ? n2.toString() : n2;
})(g4 || (g4 = {}));
var ve;
(function(r17) {
  r17.mergeShapes = (e2, t2) => ({ ...e2, ...t2 });
})(ve || (ve = {}));
var u4 = g4.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]);
var R3 = (r17) => {
  switch (typeof r17) {
    case "undefined":
      return u4.undefined;
    case "string":
      return u4.string;
    case "number":
      return Number.isNaN(r17) ? u4.nan : u4.number;
    case "boolean":
      return u4.boolean;
    case "function":
      return u4.function;
    case "bigint":
      return u4.bigint;
    case "symbol":
      return u4.symbol;
    case "object":
      return Array.isArray(r17) ? u4.array : r17 === null ? u4.null : r17.then && typeof r17.then == "function" && r17.catch && typeof r17.catch == "function" ? u4.promise : typeof Map < "u" && r17 instanceof Map ? u4.map : typeof Set < "u" && r17 instanceof Set ? u4.set : typeof Date < "u" && r17 instanceof Date ? u4.date : u4.object;
    default:
      return u4.unknown;
  }
};
var c3 = g4.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
var Ve = (r17) => JSON.stringify(r17, null, 2).replace(/"([^"]+)":/g, "$1:");
var b4 = class r2 extends Error {
  get errors() {
    return this.issues;
  }
  constructor(e2) {
    super(), this.issues = [], this.addIssue = (s2) => {
      this.issues = [...this.issues, s2];
    }, this.addIssues = (s2 = []) => {
      this.issues = [...this.issues, ...s2];
    };
    let t2 = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, t2) : this.__proto__ = t2, this.name = "ZodError", this.issues = e2;
  }
  format(e2) {
    let t2 = e2 || function(n2) {
      return n2.message;
    }, s2 = { _errors: [] }, a4 = (n2) => {
      for (let i4 of n2.issues) if (i4.code === "invalid_union") i4.unionErrors.map(a4);
      else if (i4.code === "invalid_return_type") a4(i4.returnTypeError);
      else if (i4.code === "invalid_arguments") a4(i4.argumentsError);
      else if (i4.path.length === 0) s2._errors.push(t2(i4));
      else {
        let o5 = s2, f4 = 0;
        for (; f4 < i4.path.length; ) {
          let l6 = i4.path[f4];
          f4 === i4.path.length - 1 ? (o5[l6] = o5[l6] || { _errors: [] }, o5[l6]._errors.push(t2(i4))) : o5[l6] = o5[l6] || { _errors: [] }, o5 = o5[l6], f4++;
        }
      }
    };
    return a4(this), s2;
  }
  static assert(e2) {
    if (!(e2 instanceof r2)) throw new Error(`Not a ZodError: ${e2}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, g4.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(e2 = (t2) => t2.message) {
    let t2 = {}, s2 = [];
    for (let a4 of this.issues) if (a4.path.length > 0) {
      let n2 = a4.path[0];
      t2[n2] = t2[n2] || [], t2[n2].push(e2(a4));
    } else s2.push(e2(a4));
    return { formErrors: s2, fieldErrors: t2 };
  }
  get formErrors() {
    return this.flatten();
  }
};
b4.create = (r17) => new b4(r17);
var Pe2 = (r17, e2) => {
  let t2;
  switch (r17.code) {
    case c3.invalid_type:
      r17.received === u4.undefined ? t2 = "Required" : t2 = `Expected ${r17.expected}, received ${r17.received}`;
      break;
    case c3.invalid_literal:
      t2 = `Invalid literal value, expected ${JSON.stringify(r17.expected, g4.jsonStringifyReplacer)}`;
      break;
    case c3.unrecognized_keys:
      t2 = `Unrecognized key(s) in object: ${g4.joinValues(r17.keys, ", ")}`;
      break;
    case c3.invalid_union:
      t2 = "Invalid input";
      break;
    case c3.invalid_union_discriminator:
      t2 = `Invalid discriminator value. Expected ${g4.joinValues(r17.options)}`;
      break;
    case c3.invalid_enum_value:
      t2 = `Invalid enum value. Expected ${g4.joinValues(r17.options)}, received '${r17.received}'`;
      break;
    case c3.invalid_arguments:
      t2 = "Invalid function arguments";
      break;
    case c3.invalid_return_type:
      t2 = "Invalid function return type";
      break;
    case c3.invalid_date:
      t2 = "Invalid date";
      break;
    case c3.invalid_string:
      typeof r17.validation == "object" ? "includes" in r17.validation ? (t2 = `Invalid input: must include "${r17.validation.includes}"`, typeof r17.validation.position == "number" && (t2 = `${t2} at one or more positions greater than or equal to ${r17.validation.position}`)) : "startsWith" in r17.validation ? t2 = `Invalid input: must start with "${r17.validation.startsWith}"` : "endsWith" in r17.validation ? t2 = `Invalid input: must end with "${r17.validation.endsWith}"` : g4.assertNever(r17.validation) : r17.validation !== "regex" ? t2 = `Invalid ${r17.validation}` : t2 = "Invalid";
      break;
    case c3.too_small:
      r17.type === "array" ? t2 = `Array must contain ${r17.exact ? "exactly" : r17.inclusive ? "at least" : "more than"} ${r17.minimum} element(s)` : r17.type === "string" ? t2 = `String must contain ${r17.exact ? "exactly" : r17.inclusive ? "at least" : "over"} ${r17.minimum} character(s)` : r17.type === "number" ? t2 = `Number must be ${r17.exact ? "exactly equal to " : r17.inclusive ? "greater than or equal to " : "greater than "}${r17.minimum}` : r17.type === "bigint" ? t2 = `Number must be ${r17.exact ? "exactly equal to " : r17.inclusive ? "greater than or equal to " : "greater than "}${r17.minimum}` : r17.type === "date" ? t2 = `Date must be ${r17.exact ? "exactly equal to " : r17.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(r17.minimum))}` : t2 = "Invalid input";
      break;
    case c3.too_big:
      r17.type === "array" ? t2 = `Array must contain ${r17.exact ? "exactly" : r17.inclusive ? "at most" : "less than"} ${r17.maximum} element(s)` : r17.type === "string" ? t2 = `String must contain ${r17.exact ? "exactly" : r17.inclusive ? "at most" : "under"} ${r17.maximum} character(s)` : r17.type === "number" ? t2 = `Number must be ${r17.exact ? "exactly" : r17.inclusive ? "less than or equal to" : "less than"} ${r17.maximum}` : r17.type === "bigint" ? t2 = `BigInt must be ${r17.exact ? "exactly" : r17.inclusive ? "less than or equal to" : "less than"} ${r17.maximum}` : r17.type === "date" ? t2 = `Date must be ${r17.exact ? "exactly" : r17.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(r17.maximum))}` : t2 = "Invalid input";
      break;
    case c3.custom:
      t2 = "Invalid input";
      break;
    case c3.invalid_intersection_types:
      t2 = "Intersection results could not be merged";
      break;
    case c3.not_multiple_of:
      t2 = `Number must be a multiple of ${r17.multipleOf}`;
      break;
    case c3.not_finite:
      t2 = "Number must be finite";
      break;
    default:
      t2 = e2.defaultError, g4.assertNever(r17);
  }
  return { message: t2 };
};
var I2 = Pe2;
var Te = I2;
function ze(r17) {
  Te = r17;
}
function re2() {
  return Te;
}
var ue = (r17) => {
  let { data: e2, path: t2, errorMaps: s2, issueData: a4 } = r17, n2 = [...t2, ...a4.path || []], i4 = { ...a4, path: n2 };
  if (a4.message !== void 0) return { ...a4, path: n2, message: a4.message };
  let o5 = "", f4 = s2.filter((l6) => !!l6).slice().reverse();
  for (let l6 of f4) o5 = l6(i4, { data: e2, defaultError: o5 }).message;
  return { ...a4, path: n2, message: o5 };
};
var De = [];
function d4(r17, e2) {
  let t2 = re2(), s2 = ue({ issueData: e2, data: r17.data, path: r17.path, errorMaps: [r17.common.contextualErrorMap, r17.schemaErrorMap, t2, t2 === I2 ? void 0 : I2].filter((a4) => !!a4) });
  r17.common.issues.push(s2);
}
var x4 = class r3 {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(e2, t2) {
    let s2 = [];
    for (let a4 of t2) {
      if (a4.status === "aborted") return p3;
      a4.status === "dirty" && e2.dirty(), s2.push(a4.value);
    }
    return { status: e2.value, value: s2 };
  }
  static async mergeObjectAsync(e2, t2) {
    let s2 = [];
    for (let a4 of t2) {
      let n2 = await a4.key, i4 = await a4.value;
      s2.push({ key: n2, value: i4 });
    }
    return r3.mergeObjectSync(e2, s2);
  }
  static mergeObjectSync(e2, t2) {
    let s2 = {};
    for (let a4 of t2) {
      let { key: n2, value: i4 } = a4;
      if (n2.status === "aborted" || i4.status === "aborted") return p3;
      n2.status === "dirty" && e2.dirty(), i4.status === "dirty" && e2.dirty(), n2.value !== "__proto__" && (typeof i4.value < "u" || a4.alwaysSet) && (s2[n2.value] = i4.value);
    }
    return { status: e2.value, value: s2 };
  }
};
var p3 = Object.freeze({ status: "aborted" });
var D4 = (r17) => ({ status: "dirty", value: r17 });
var k5 = (r17) => ({ status: "valid", value: r17 });
var he2 = (r17) => r17.status === "aborted";
var pe = (r17) => r17.status === "dirty";
var M4 = (r17) => r17.status === "valid";
var se2 = (r17) => typeof Promise < "u" && r17 instanceof Promise;
var h5;
(function(r17) {
  r17.errToObj = (e2) => typeof e2 == "string" ? { message: e2 } : e2 || {}, r17.toString = (e2) => typeof e2 == "string" ? e2 : e2?.message;
})(h5 || (h5 = {}));
var O3 = class {
  constructor(e2, t2, s2, a4) {
    this._cachedPath = [], this.parent = e2, this.data = t2, this._path = s2, this._key = a4;
  }
  get path() {
    return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
};
var Ce = (r17, e2) => {
  if (M4(e2)) return { success: true, data: e2.value };
  if (!r17.common.issues.length) throw new Error("Validation failed but no issues detected.");
  return { success: false, get error() {
    if (this._error) return this._error;
    let t2 = new b4(r17.common.issues);
    return this._error = t2, this._error;
  } };
};
function y2(r17) {
  if (!r17) return {};
  let { errorMap: e2, invalid_type_error: t2, required_error: s2, description: a4 } = r17;
  if (e2 && (t2 || s2)) throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e2 ? { errorMap: e2, description: a4 } : { errorMap: (i4, o5) => {
    let { message: f4 } = r17;
    return i4.code === "invalid_enum_value" ? { message: f4 ?? o5.defaultError } : typeof o5.data > "u" ? { message: f4 ?? s2 ?? o5.defaultError } : i4.code !== "invalid_type" ? { message: o5.defaultError } : { message: f4 ?? t2 ?? o5.defaultError };
  }, description: a4 };
}
var _4 = class {
  get description() {
    return this._def.description;
  }
  _getType(e2) {
    return R3(e2.data);
  }
  _getOrReturnCtx(e2, t2) {
    return t2 || { common: e2.parent.common, data: e2.data, parsedType: R3(e2.data), schemaErrorMap: this._def.errorMap, path: e2.path, parent: e2.parent };
  }
  _processInputParams(e2) {
    return { status: new x4(), ctx: { common: e2.parent.common, data: e2.data, parsedType: R3(e2.data), schemaErrorMap: this._def.errorMap, path: e2.path, parent: e2.parent } };
  }
  _parseSync(e2) {
    let t2 = this._parse(e2);
    if (se2(t2)) throw new Error("Synchronous parse encountered promise.");
    return t2;
  }
  _parseAsync(e2) {
    let t2 = this._parse(e2);
    return Promise.resolve(t2);
  }
  parse(e2, t2) {
    let s2 = this.safeParse(e2, t2);
    if (s2.success) return s2.data;
    throw s2.error;
  }
  safeParse(e2, t2) {
    let s2 = { common: { issues: [], async: t2?.async ?? false, contextualErrorMap: t2?.errorMap }, path: t2?.path || [], schemaErrorMap: this._def.errorMap, parent: null, data: e2, parsedType: R3(e2) }, a4 = this._parseSync({ data: e2, path: s2.path, parent: s2 });
    return Ce(s2, a4);
  }
  "~validate"(e2) {
    let t2 = { common: { issues: [], async: !!this["~standard"].async }, path: [], schemaErrorMap: this._def.errorMap, parent: null, data: e2, parsedType: R3(e2) };
    if (!this["~standard"].async) try {
      let s2 = this._parseSync({ data: e2, path: [], parent: t2 });
      return M4(s2) ? { value: s2.value } : { issues: t2.common.issues };
    } catch (s2) {
      s2?.message?.toLowerCase()?.includes("encountered") && (this["~standard"].async = true), t2.common = { issues: [], async: true };
    }
    return this._parseAsync({ data: e2, path: [], parent: t2 }).then((s2) => M4(s2) ? { value: s2.value } : { issues: t2.common.issues });
  }
  async parseAsync(e2, t2) {
    let s2 = await this.safeParseAsync(e2, t2);
    if (s2.success) return s2.data;
    throw s2.error;
  }
  async safeParseAsync(e2, t2) {
    let s2 = { common: { issues: [], contextualErrorMap: t2?.errorMap, async: true }, path: t2?.path || [], schemaErrorMap: this._def.errorMap, parent: null, data: e2, parsedType: R3(e2) }, a4 = this._parse({ data: e2, path: s2.path, parent: s2 }), n2 = await (se2(a4) ? a4 : Promise.resolve(a4));
    return Ce(s2, n2);
  }
  refine(e2, t2) {
    let s2 = (a4) => typeof t2 == "string" || typeof t2 > "u" ? { message: t2 } : typeof t2 == "function" ? t2(a4) : t2;
    return this._refinement((a4, n2) => {
      let i4 = e2(a4), o5 = () => n2.addIssue({ code: c3.custom, ...s2(a4) });
      return typeof Promise < "u" && i4 instanceof Promise ? i4.then((f4) => f4 ? true : (o5(), false)) : i4 ? true : (o5(), false);
    });
  }
  refinement(e2, t2) {
    return this._refinement((s2, a4) => e2(s2) ? true : (a4.addIssue(typeof t2 == "function" ? t2(s2, a4) : t2), false));
  }
  _refinement(e2) {
    return new S6({ schema: this, typeName: m5.ZodEffects, effect: { type: "refinement", refinement: e2 } });
  }
  superRefine(e2) {
    return this._refinement(e2);
  }
  constructor(e2) {
    this.spa = this.safeParseAsync, this._def = e2, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = { version: 1, vendor: "zod", validate: (t2) => this["~validate"](t2) };
  }
  optional() {
    return C4.create(this, this._def);
  }
  nullable() {
    return j6.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return $3.create(this);
  }
  promise() {
    return z3.create(this, this._def);
  }
  or(e2) {
    return J4.create([this, e2], this._def);
  }
  and(e2) {
    return Y2.create(this, e2, this._def);
  }
  transform(e2) {
    return new S6({ ...y2(this._def), schema: this, typeName: m5.ZodEffects, effect: { type: "transform", transform: e2 } });
  }
  default(e2) {
    let t2 = typeof e2 == "function" ? e2 : () => e2;
    return new K3({ ...y2(this._def), innerType: this, defaultValue: t2, typeName: m5.ZodDefault });
  }
  brand() {
    return new le({ typeName: m5.ZodBranded, type: this, ...y2(this._def) });
  }
  catch(e2) {
    let t2 = typeof e2 == "function" ? e2 : () => e2;
    return new ee2({ ...y2(this._def), innerType: this, catchValue: t2, typeName: m5.ZodCatch });
  }
  describe(e2) {
    let t2 = this.constructor;
    return new t2({ ...this._def, description: e2 });
  }
  pipe(e2) {
    return fe.create(this, e2);
  }
  readonly() {
    return te2.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
};
var Le = /^c[^\s-]{8,}$/i;
var Ue = /^[0-9a-z]+$/;
var Fe = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
var Be = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var We = /^[a-z0-9_-]{21}$/i;
var qe = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
var Je = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
var Ye = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var He = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
var xe;
var Ge = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var Qe = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
var Xe = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
var Ke = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var et = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
var tt = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
var Se2 = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))";
var rt = new RegExp(`^${Se2}$`);
function Ae(r17) {
  let e2 = "[0-5]\\d";
  r17.precision ? e2 = `${e2}\\.\\d{${r17.precision}}` : r17.precision == null && (e2 = `${e2}(\\.\\d+)?`);
  let t2 = r17.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${e2})${t2}`;
}
function st(r17) {
  return new RegExp(`^${Ae(r17)}$`);
}
function Re(r17) {
  let e2 = `${Se2}T${Ae(r17)}`, t2 = [];
  return t2.push(r17.local ? "Z?" : "Z"), r17.offset && t2.push("([+-]\\d{2}:?\\d{2})"), e2 = `${e2}(${t2.join("|")})`, new RegExp(`^${e2}$`);
}
function at(r17, e2) {
  return !!((e2 === "v4" || !e2) && Ge.test(r17) || (e2 === "v6" || !e2) && Xe.test(r17));
}
function nt(r17, e2) {
  if (!qe.test(r17)) return false;
  try {
    let [t2] = r17.split(".");
    if (!t2) return false;
    let s2 = t2.replace(/-/g, "+").replace(/_/g, "/").padEnd(t2.length + (4 - t2.length % 4) % 4, "="), a4 = JSON.parse(atob(s2));
    return !(typeof a4 != "object" || a4 === null || "typ" in a4 && a4?.typ !== "JWT" || !a4.alg || e2 && a4.alg !== e2);
  } catch {
    return false;
  }
}
function it(r17, e2) {
  return !!((e2 === "v4" || !e2) && Qe.test(r17) || (e2 === "v6" || !e2) && Ke.test(r17));
}
var V4 = class r4 extends _4 {
  _parse(e2) {
    if (this._def.coerce && (e2.data = String(e2.data)), this._getType(e2) !== u4.string) {
      let n2 = this._getOrReturnCtx(e2);
      return d4(n2, { code: c3.invalid_type, expected: u4.string, received: n2.parsedType }), p3;
    }
    let s2 = new x4(), a4;
    for (let n2 of this._def.checks) if (n2.kind === "min") e2.data.length < n2.value && (a4 = this._getOrReturnCtx(e2, a4), d4(a4, { code: c3.too_small, minimum: n2.value, type: "string", inclusive: true, exact: false, message: n2.message }), s2.dirty());
    else if (n2.kind === "max") e2.data.length > n2.value && (a4 = this._getOrReturnCtx(e2, a4), d4(a4, { code: c3.too_big, maximum: n2.value, type: "string", inclusive: true, exact: false, message: n2.message }), s2.dirty());
    else if (n2.kind === "length") {
      let i4 = e2.data.length > n2.value, o5 = e2.data.length < n2.value;
      (i4 || o5) && (a4 = this._getOrReturnCtx(e2, a4), i4 ? d4(a4, { code: c3.too_big, maximum: n2.value, type: "string", inclusive: true, exact: true, message: n2.message }) : o5 && d4(a4, { code: c3.too_small, minimum: n2.value, type: "string", inclusive: true, exact: true, message: n2.message }), s2.dirty());
    } else if (n2.kind === "email") Ye.test(e2.data) || (a4 = this._getOrReturnCtx(e2, a4), d4(a4, { validation: "email", code: c3.invalid_string, message: n2.message }), s2.dirty());
    else if (n2.kind === "emoji") xe || (xe = new RegExp(He, "u")), xe.test(e2.data) || (a4 = this._getOrReturnCtx(e2, a4), d4(a4, { validation: "emoji", code: c3.invalid_string, message: n2.message }), s2.dirty());
    else if (n2.kind === "uuid") Be.test(e2.data) || (a4 = this._getOrReturnCtx(e2, a4), d4(a4, { validation: "uuid", code: c3.invalid_string, message: n2.message }), s2.dirty());
    else if (n2.kind === "nanoid") We.test(e2.data) || (a4 = this._getOrReturnCtx(e2, a4), d4(a4, { validation: "nanoid", code: c3.invalid_string, message: n2.message }), s2.dirty());
    else if (n2.kind === "cuid") Le.test(e2.data) || (a4 = this._getOrReturnCtx(e2, a4), d4(a4, { validation: "cuid", code: c3.invalid_string, message: n2.message }), s2.dirty());
    else if (n2.kind === "cuid2") Ue.test(e2.data) || (a4 = this._getOrReturnCtx(e2, a4), d4(a4, { validation: "cuid2", code: c3.invalid_string, message: n2.message }), s2.dirty());
    else if (n2.kind === "ulid") Fe.test(e2.data) || (a4 = this._getOrReturnCtx(e2, a4), d4(a4, { validation: "ulid", code: c3.invalid_string, message: n2.message }), s2.dirty());
    else if (n2.kind === "url") try {
      new URL(e2.data);
    } catch {
      a4 = this._getOrReturnCtx(e2, a4), d4(a4, { validation: "url", code: c3.invalid_string, message: n2.message }), s2.dirty();
    }
    else n2.kind === "regex" ? (n2.regex.lastIndex = 0, n2.regex.test(e2.data) || (a4 = this._getOrReturnCtx(e2, a4), d4(a4, { validation: "regex", code: c3.invalid_string, message: n2.message }), s2.dirty())) : n2.kind === "trim" ? e2.data = e2.data.trim() : n2.kind === "includes" ? e2.data.includes(n2.value, n2.position) || (a4 = this._getOrReturnCtx(e2, a4), d4(a4, { code: c3.invalid_string, validation: { includes: n2.value, position: n2.position }, message: n2.message }), s2.dirty()) : n2.kind === "toLowerCase" ? e2.data = e2.data.toLowerCase() : n2.kind === "toUpperCase" ? e2.data = e2.data.toUpperCase() : n2.kind === "startsWith" ? e2.data.startsWith(n2.value) || (a4 = this._getOrReturnCtx(e2, a4), d4(a4, { code: c3.invalid_string, validation: { startsWith: n2.value }, message: n2.message }), s2.dirty()) : n2.kind === "endsWith" ? e2.data.endsWith(n2.value) || (a4 = this._getOrReturnCtx(e2, a4), d4(a4, { code: c3.invalid_string, validation: { endsWith: n2.value }, message: n2.message }), s2.dirty()) : n2.kind === "datetime" ? Re(n2).test(e2.data) || (a4 = this._getOrReturnCtx(e2, a4), d4(a4, { code: c3.invalid_string, validation: "datetime", message: n2.message }), s2.dirty()) : n2.kind === "date" ? rt.test(e2.data) || (a4 = this._getOrReturnCtx(e2, a4), d4(a4, { code: c3.invalid_string, validation: "date", message: n2.message }), s2.dirty()) : n2.kind === "time" ? st(n2).test(e2.data) || (a4 = this._getOrReturnCtx(e2, a4), d4(a4, { code: c3.invalid_string, validation: "time", message: n2.message }), s2.dirty()) : n2.kind === "duration" ? Je.test(e2.data) || (a4 = this._getOrReturnCtx(e2, a4), d4(a4, { validation: "duration", code: c3.invalid_string, message: n2.message }), s2.dirty()) : n2.kind === "ip" ? at(e2.data, n2.version) || (a4 = this._getOrReturnCtx(e2, a4), d4(a4, { validation: "ip", code: c3.invalid_string, message: n2.message }), s2.dirty()) : n2.kind === "jwt" ? nt(e2.data, n2.alg) || (a4 = this._getOrReturnCtx(e2, a4), d4(a4, { validation: "jwt", code: c3.invalid_string, message: n2.message }), s2.dirty()) : n2.kind === "cidr" ? it(e2.data, n2.version) || (a4 = this._getOrReturnCtx(e2, a4), d4(a4, { validation: "cidr", code: c3.invalid_string, message: n2.message }), s2.dirty()) : n2.kind === "base64" ? et.test(e2.data) || (a4 = this._getOrReturnCtx(e2, a4), d4(a4, { validation: "base64", code: c3.invalid_string, message: n2.message }), s2.dirty()) : n2.kind === "base64url" ? tt.test(e2.data) || (a4 = this._getOrReturnCtx(e2, a4), d4(a4, { validation: "base64url", code: c3.invalid_string, message: n2.message }), s2.dirty()) : g4.assertNever(n2);
    return { status: s2.value, value: e2.data };
  }
  _regex(e2, t2, s2) {
    return this.refinement((a4) => e2.test(a4), { validation: t2, code: c3.invalid_string, ...h5.errToObj(s2) });
  }
  _addCheck(e2) {
    return new r4({ ...this._def, checks: [...this._def.checks, e2] });
  }
  email(e2) {
    return this._addCheck({ kind: "email", ...h5.errToObj(e2) });
  }
  url(e2) {
    return this._addCheck({ kind: "url", ...h5.errToObj(e2) });
  }
  emoji(e2) {
    return this._addCheck({ kind: "emoji", ...h5.errToObj(e2) });
  }
  uuid(e2) {
    return this._addCheck({ kind: "uuid", ...h5.errToObj(e2) });
  }
  nanoid(e2) {
    return this._addCheck({ kind: "nanoid", ...h5.errToObj(e2) });
  }
  cuid(e2) {
    return this._addCheck({ kind: "cuid", ...h5.errToObj(e2) });
  }
  cuid2(e2) {
    return this._addCheck({ kind: "cuid2", ...h5.errToObj(e2) });
  }
  ulid(e2) {
    return this._addCheck({ kind: "ulid", ...h5.errToObj(e2) });
  }
  base64(e2) {
    return this._addCheck({ kind: "base64", ...h5.errToObj(e2) });
  }
  base64url(e2) {
    return this._addCheck({ kind: "base64url", ...h5.errToObj(e2) });
  }
  jwt(e2) {
    return this._addCheck({ kind: "jwt", ...h5.errToObj(e2) });
  }
  ip(e2) {
    return this._addCheck({ kind: "ip", ...h5.errToObj(e2) });
  }
  cidr(e2) {
    return this._addCheck({ kind: "cidr", ...h5.errToObj(e2) });
  }
  datetime(e2) {
    return typeof e2 == "string" ? this._addCheck({ kind: "datetime", precision: null, offset: false, local: false, message: e2 }) : this._addCheck({ kind: "datetime", precision: typeof e2?.precision > "u" ? null : e2?.precision, offset: e2?.offset ?? false, local: e2?.local ?? false, ...h5.errToObj(e2?.message) });
  }
  date(e2) {
    return this._addCheck({ kind: "date", message: e2 });
  }
  time(e2) {
    return typeof e2 == "string" ? this._addCheck({ kind: "time", precision: null, message: e2 }) : this._addCheck({ kind: "time", precision: typeof e2?.precision > "u" ? null : e2?.precision, ...h5.errToObj(e2?.message) });
  }
  duration(e2) {
    return this._addCheck({ kind: "duration", ...h5.errToObj(e2) });
  }
  regex(e2, t2) {
    return this._addCheck({ kind: "regex", regex: e2, ...h5.errToObj(t2) });
  }
  includes(e2, t2) {
    return this._addCheck({ kind: "includes", value: e2, position: t2?.position, ...h5.errToObj(t2?.message) });
  }
  startsWith(e2, t2) {
    return this._addCheck({ kind: "startsWith", value: e2, ...h5.errToObj(t2) });
  }
  endsWith(e2, t2) {
    return this._addCheck({ kind: "endsWith", value: e2, ...h5.errToObj(t2) });
  }
  min(e2, t2) {
    return this._addCheck({ kind: "min", value: e2, ...h5.errToObj(t2) });
  }
  max(e2, t2) {
    return this._addCheck({ kind: "max", value: e2, ...h5.errToObj(t2) });
  }
  length(e2, t2) {
    return this._addCheck({ kind: "length", value: e2, ...h5.errToObj(t2) });
  }
  nonempty(e2) {
    return this.min(1, h5.errToObj(e2));
  }
  trim() {
    return new r4({ ...this._def, checks: [...this._def.checks, { kind: "trim" }] });
  }
  toLowerCase() {
    return new r4({ ...this._def, checks: [...this._def.checks, { kind: "toLowerCase" }] });
  }
  toUpperCase() {
    return new r4({ ...this._def, checks: [...this._def.checks, { kind: "toUpperCase" }] });
  }
  get isDatetime() {
    return !!this._def.checks.find((e2) => e2.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((e2) => e2.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((e2) => e2.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((e2) => e2.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((e2) => e2.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((e2) => e2.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((e2) => e2.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((e2) => e2.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((e2) => e2.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((e2) => e2.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((e2) => e2.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((e2) => e2.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((e2) => e2.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((e2) => e2.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((e2) => e2.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((e2) => e2.kind === "base64url");
  }
  get minLength() {
    let e2 = null;
    for (let t2 of this._def.checks) t2.kind === "min" && (e2 === null || t2.value > e2) && (e2 = t2.value);
    return e2;
  }
  get maxLength() {
    let e2 = null;
    for (let t2 of this._def.checks) t2.kind === "max" && (e2 === null || t2.value < e2) && (e2 = t2.value);
    return e2;
  }
};
V4.create = (r17) => new V4({ checks: [], typeName: m5.ZodString, coerce: r17?.coerce ?? false, ...y2(r17) });
function ot(r17, e2) {
  let t2 = (r17.toString().split(".")[1] || "").length, s2 = (e2.toString().split(".")[1] || "").length, a4 = t2 > s2 ? t2 : s2, n2 = Number.parseInt(r17.toFixed(a4).replace(".", "")), i4 = Number.parseInt(e2.toFixed(a4).replace(".", ""));
  return n2 % i4 / 10 ** a4;
}
var L4 = class r5 extends _4 {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e2) {
    if (this._def.coerce && (e2.data = Number(e2.data)), this._getType(e2) !== u4.number) {
      let n2 = this._getOrReturnCtx(e2);
      return d4(n2, { code: c3.invalid_type, expected: u4.number, received: n2.parsedType }), p3;
    }
    let s2, a4 = new x4();
    for (let n2 of this._def.checks) n2.kind === "int" ? g4.isInteger(e2.data) || (s2 = this._getOrReturnCtx(e2, s2), d4(s2, { code: c3.invalid_type, expected: "integer", received: "float", message: n2.message }), a4.dirty()) : n2.kind === "min" ? (n2.inclusive ? e2.data < n2.value : e2.data <= n2.value) && (s2 = this._getOrReturnCtx(e2, s2), d4(s2, { code: c3.too_small, minimum: n2.value, type: "number", inclusive: n2.inclusive, exact: false, message: n2.message }), a4.dirty()) : n2.kind === "max" ? (n2.inclusive ? e2.data > n2.value : e2.data >= n2.value) && (s2 = this._getOrReturnCtx(e2, s2), d4(s2, { code: c3.too_big, maximum: n2.value, type: "number", inclusive: n2.inclusive, exact: false, message: n2.message }), a4.dirty()) : n2.kind === "multipleOf" ? ot(e2.data, n2.value) !== 0 && (s2 = this._getOrReturnCtx(e2, s2), d4(s2, { code: c3.not_multiple_of, multipleOf: n2.value, message: n2.message }), a4.dirty()) : n2.kind === "finite" ? Number.isFinite(e2.data) || (s2 = this._getOrReturnCtx(e2, s2), d4(s2, { code: c3.not_finite, message: n2.message }), a4.dirty()) : g4.assertNever(n2);
    return { status: a4.value, value: e2.data };
  }
  gte(e2, t2) {
    return this.setLimit("min", e2, true, h5.toString(t2));
  }
  gt(e2, t2) {
    return this.setLimit("min", e2, false, h5.toString(t2));
  }
  lte(e2, t2) {
    return this.setLimit("max", e2, true, h5.toString(t2));
  }
  lt(e2, t2) {
    return this.setLimit("max", e2, false, h5.toString(t2));
  }
  setLimit(e2, t2, s2, a4) {
    return new r5({ ...this._def, checks: [...this._def.checks, { kind: e2, value: t2, inclusive: s2, message: h5.toString(a4) }] });
  }
  _addCheck(e2) {
    return new r5({ ...this._def, checks: [...this._def.checks, e2] });
  }
  int(e2) {
    return this._addCheck({ kind: "int", message: h5.toString(e2) });
  }
  positive(e2) {
    return this._addCheck({ kind: "min", value: 0, inclusive: false, message: h5.toString(e2) });
  }
  negative(e2) {
    return this._addCheck({ kind: "max", value: 0, inclusive: false, message: h5.toString(e2) });
  }
  nonpositive(e2) {
    return this._addCheck({ kind: "max", value: 0, inclusive: true, message: h5.toString(e2) });
  }
  nonnegative(e2) {
    return this._addCheck({ kind: "min", value: 0, inclusive: true, message: h5.toString(e2) });
  }
  multipleOf(e2, t2) {
    return this._addCheck({ kind: "multipleOf", value: e2, message: h5.toString(t2) });
  }
  finite(e2) {
    return this._addCheck({ kind: "finite", message: h5.toString(e2) });
  }
  safe(e2) {
    return this._addCheck({ kind: "min", inclusive: true, value: Number.MIN_SAFE_INTEGER, message: h5.toString(e2) })._addCheck({ kind: "max", inclusive: true, value: Number.MAX_SAFE_INTEGER, message: h5.toString(e2) });
  }
  get minValue() {
    let e2 = null;
    for (let t2 of this._def.checks) t2.kind === "min" && (e2 === null || t2.value > e2) && (e2 = t2.value);
    return e2;
  }
  get maxValue() {
    let e2 = null;
    for (let t2 of this._def.checks) t2.kind === "max" && (e2 === null || t2.value < e2) && (e2 = t2.value);
    return e2;
  }
  get isInt() {
    return !!this._def.checks.find((e2) => e2.kind === "int" || e2.kind === "multipleOf" && g4.isInteger(e2.value));
  }
  get isFinite() {
    let e2 = null, t2 = null;
    for (let s2 of this._def.checks) {
      if (s2.kind === "finite" || s2.kind === "int" || s2.kind === "multipleOf") return true;
      s2.kind === "min" ? (t2 === null || s2.value > t2) && (t2 = s2.value) : s2.kind === "max" && (e2 === null || s2.value < e2) && (e2 = s2.value);
    }
    return Number.isFinite(t2) && Number.isFinite(e2);
  }
};
L4.create = (r17) => new L4({ checks: [], typeName: m5.ZodNumber, coerce: r17?.coerce || false, ...y2(r17) });
var U3 = class r6 extends _4 {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(e2) {
    if (this._def.coerce) try {
      e2.data = BigInt(e2.data);
    } catch {
      return this._getInvalidInput(e2);
    }
    if (this._getType(e2) !== u4.bigint) return this._getInvalidInput(e2);
    let s2, a4 = new x4();
    for (let n2 of this._def.checks) n2.kind === "min" ? (n2.inclusive ? e2.data < n2.value : e2.data <= n2.value) && (s2 = this._getOrReturnCtx(e2, s2), d4(s2, { code: c3.too_small, type: "bigint", minimum: n2.value, inclusive: n2.inclusive, message: n2.message }), a4.dirty()) : n2.kind === "max" ? (n2.inclusive ? e2.data > n2.value : e2.data >= n2.value) && (s2 = this._getOrReturnCtx(e2, s2), d4(s2, { code: c3.too_big, type: "bigint", maximum: n2.value, inclusive: n2.inclusive, message: n2.message }), a4.dirty()) : n2.kind === "multipleOf" ? e2.data % n2.value !== BigInt(0) && (s2 = this._getOrReturnCtx(e2, s2), d4(s2, { code: c3.not_multiple_of, multipleOf: n2.value, message: n2.message }), a4.dirty()) : g4.assertNever(n2);
    return { status: a4.value, value: e2.data };
  }
  _getInvalidInput(e2) {
    let t2 = this._getOrReturnCtx(e2);
    return d4(t2, { code: c3.invalid_type, expected: u4.bigint, received: t2.parsedType }), p3;
  }
  gte(e2, t2) {
    return this.setLimit("min", e2, true, h5.toString(t2));
  }
  gt(e2, t2) {
    return this.setLimit("min", e2, false, h5.toString(t2));
  }
  lte(e2, t2) {
    return this.setLimit("max", e2, true, h5.toString(t2));
  }
  lt(e2, t2) {
    return this.setLimit("max", e2, false, h5.toString(t2));
  }
  setLimit(e2, t2, s2, a4) {
    return new r6({ ...this._def, checks: [...this._def.checks, { kind: e2, value: t2, inclusive: s2, message: h5.toString(a4) }] });
  }
  _addCheck(e2) {
    return new r6({ ...this._def, checks: [...this._def.checks, e2] });
  }
  positive(e2) {
    return this._addCheck({ kind: "min", value: BigInt(0), inclusive: false, message: h5.toString(e2) });
  }
  negative(e2) {
    return this._addCheck({ kind: "max", value: BigInt(0), inclusive: false, message: h5.toString(e2) });
  }
  nonpositive(e2) {
    return this._addCheck({ kind: "max", value: BigInt(0), inclusive: true, message: h5.toString(e2) });
  }
  nonnegative(e2) {
    return this._addCheck({ kind: "min", value: BigInt(0), inclusive: true, message: h5.toString(e2) });
  }
  multipleOf(e2, t2) {
    return this._addCheck({ kind: "multipleOf", value: e2, message: h5.toString(t2) });
  }
  get minValue() {
    let e2 = null;
    for (let t2 of this._def.checks) t2.kind === "min" && (e2 === null || t2.value > e2) && (e2 = t2.value);
    return e2;
  }
  get maxValue() {
    let e2 = null;
    for (let t2 of this._def.checks) t2.kind === "max" && (e2 === null || t2.value < e2) && (e2 = t2.value);
    return e2;
  }
};
U3.create = (r17) => new U3({ checks: [], typeName: m5.ZodBigInt, coerce: r17?.coerce ?? false, ...y2(r17) });
var F4 = class extends _4 {
  _parse(e2) {
    if (this._def.coerce && (e2.data = !!e2.data), this._getType(e2) !== u4.boolean) {
      let s2 = this._getOrReturnCtx(e2);
      return d4(s2, { code: c3.invalid_type, expected: u4.boolean, received: s2.parsedType }), p3;
    }
    return k5(e2.data);
  }
};
F4.create = (r17) => new F4({ typeName: m5.ZodBoolean, coerce: r17?.coerce || false, ...y2(r17) });
var B4 = class r7 extends _4 {
  _parse(e2) {
    if (this._def.coerce && (e2.data = new Date(e2.data)), this._getType(e2) !== u4.date) {
      let n2 = this._getOrReturnCtx(e2);
      return d4(n2, { code: c3.invalid_type, expected: u4.date, received: n2.parsedType }), p3;
    }
    if (Number.isNaN(e2.data.getTime())) {
      let n2 = this._getOrReturnCtx(e2);
      return d4(n2, { code: c3.invalid_date }), p3;
    }
    let s2 = new x4(), a4;
    for (let n2 of this._def.checks) n2.kind === "min" ? e2.data.getTime() < n2.value && (a4 = this._getOrReturnCtx(e2, a4), d4(a4, { code: c3.too_small, message: n2.message, inclusive: true, exact: false, minimum: n2.value, type: "date" }), s2.dirty()) : n2.kind === "max" ? e2.data.getTime() > n2.value && (a4 = this._getOrReturnCtx(e2, a4), d4(a4, { code: c3.too_big, message: n2.message, inclusive: true, exact: false, maximum: n2.value, type: "date" }), s2.dirty()) : g4.assertNever(n2);
    return { status: s2.value, value: new Date(e2.data.getTime()) };
  }
  _addCheck(e2) {
    return new r7({ ...this._def, checks: [...this._def.checks, e2] });
  }
  min(e2, t2) {
    return this._addCheck({ kind: "min", value: e2.getTime(), message: h5.toString(t2) });
  }
  max(e2, t2) {
    return this._addCheck({ kind: "max", value: e2.getTime(), message: h5.toString(t2) });
  }
  get minDate() {
    let e2 = null;
    for (let t2 of this._def.checks) t2.kind === "min" && (e2 === null || t2.value > e2) && (e2 = t2.value);
    return e2 != null ? new Date(e2) : null;
  }
  get maxDate() {
    let e2 = null;
    for (let t2 of this._def.checks) t2.kind === "max" && (e2 === null || t2.value < e2) && (e2 = t2.value);
    return e2 != null ? new Date(e2) : null;
  }
};
B4.create = (r17) => new B4({ checks: [], coerce: r17?.coerce || false, typeName: m5.ZodDate, ...y2(r17) });
var ne = class extends _4 {
  _parse(e2) {
    if (this._getType(e2) !== u4.symbol) {
      let s2 = this._getOrReturnCtx(e2);
      return d4(s2, { code: c3.invalid_type, expected: u4.symbol, received: s2.parsedType }), p3;
    }
    return k5(e2.data);
  }
};
ne.create = (r17) => new ne({ typeName: m5.ZodSymbol, ...y2(r17) });
var W2 = class extends _4 {
  _parse(e2) {
    if (this._getType(e2) !== u4.undefined) {
      let s2 = this._getOrReturnCtx(e2);
      return d4(s2, { code: c3.invalid_type, expected: u4.undefined, received: s2.parsedType }), p3;
    }
    return k5(e2.data);
  }
};
W2.create = (r17) => new W2({ typeName: m5.ZodUndefined, ...y2(r17) });
var q3 = class extends _4 {
  _parse(e2) {
    if (this._getType(e2) !== u4.null) {
      let s2 = this._getOrReturnCtx(e2);
      return d4(s2, { code: c3.invalid_type, expected: u4.null, received: s2.parsedType }), p3;
    }
    return k5(e2.data);
  }
};
q3.create = (r17) => new q3({ typeName: m5.ZodNull, ...y2(r17) });
var P5 = class extends _4 {
  constructor() {
    super(...arguments), this._any = true;
  }
  _parse(e2) {
    return k5(e2.data);
  }
};
P5.create = (r17) => new P5({ typeName: m5.ZodAny, ...y2(r17) });
var Z3 = class extends _4 {
  constructor() {
    super(...arguments), this._unknown = true;
  }
  _parse(e2) {
    return k5(e2.data);
  }
};
Z3.create = (r17) => new Z3({ typeName: m5.ZodUnknown, ...y2(r17) });
var A5 = class extends _4 {
  _parse(e2) {
    let t2 = this._getOrReturnCtx(e2);
    return d4(t2, { code: c3.invalid_type, expected: u4.never, received: t2.parsedType }), p3;
  }
};
A5.create = (r17) => new A5({ typeName: m5.ZodNever, ...y2(r17) });
var ie = class extends _4 {
  _parse(e2) {
    if (this._getType(e2) !== u4.undefined) {
      let s2 = this._getOrReturnCtx(e2);
      return d4(s2, { code: c3.invalid_type, expected: u4.void, received: s2.parsedType }), p3;
    }
    return k5(e2.data);
  }
};
ie.create = (r17) => new ie({ typeName: m5.ZodVoid, ...y2(r17) });
var $3 = class r8 extends _4 {
  _parse(e2) {
    let { ctx: t2, status: s2 } = this._processInputParams(e2), a4 = this._def;
    if (t2.parsedType !== u4.array) return d4(t2, { code: c3.invalid_type, expected: u4.array, received: t2.parsedType }), p3;
    if (a4.exactLength !== null) {
      let i4 = t2.data.length > a4.exactLength.value, o5 = t2.data.length < a4.exactLength.value;
      (i4 || o5) && (d4(t2, { code: i4 ? c3.too_big : c3.too_small, minimum: o5 ? a4.exactLength.value : void 0, maximum: i4 ? a4.exactLength.value : void 0, type: "array", inclusive: true, exact: true, message: a4.exactLength.message }), s2.dirty());
    }
    if (a4.minLength !== null && t2.data.length < a4.minLength.value && (d4(t2, { code: c3.too_small, minimum: a4.minLength.value, type: "array", inclusive: true, exact: false, message: a4.minLength.message }), s2.dirty()), a4.maxLength !== null && t2.data.length > a4.maxLength.value && (d4(t2, { code: c3.too_big, maximum: a4.maxLength.value, type: "array", inclusive: true, exact: false, message: a4.maxLength.message }), s2.dirty()), t2.common.async) return Promise.all([...t2.data].map((i4, o5) => a4.type._parseAsync(new O3(t2, i4, t2.path, o5)))).then((i4) => x4.mergeArray(s2, i4));
    let n2 = [...t2.data].map((i4, o5) => a4.type._parseSync(new O3(t2, i4, t2.path, o5)));
    return x4.mergeArray(s2, n2);
  }
  get element() {
    return this._def.type;
  }
  min(e2, t2) {
    return new r8({ ...this._def, minLength: { value: e2, message: h5.toString(t2) } });
  }
  max(e2, t2) {
    return new r8({ ...this._def, maxLength: { value: e2, message: h5.toString(t2) } });
  }
  length(e2, t2) {
    return new r8({ ...this._def, exactLength: { value: e2, message: h5.toString(t2) } });
  }
  nonempty(e2) {
    return this.min(1, e2);
  }
};
$3.create = (r17, e2) => new $3({ type: r17, minLength: null, maxLength: null, exactLength: null, typeName: m5.ZodArray, ...y2(e2) });
function ae2(r17) {
  if (r17 instanceof w5) {
    let e2 = {};
    for (let t2 in r17.shape) {
      let s2 = r17.shape[t2];
      e2[t2] = C4.create(ae2(s2));
    }
    return new w5({ ...r17._def, shape: () => e2 });
  } else return r17 instanceof $3 ? new $3({ ...r17._def, type: ae2(r17.element) }) : r17 instanceof C4 ? C4.create(ae2(r17.unwrap())) : r17 instanceof j6 ? j6.create(ae2(r17.unwrap())) : r17 instanceof N3 ? N3.create(r17.items.map((e2) => ae2(e2))) : r17;
}
var w5 = class r9 extends _4 {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    let e2 = this._def.shape(), t2 = g4.objectKeys(e2);
    return this._cached = { shape: e2, keys: t2 }, this._cached;
  }
  _parse(e2) {
    if (this._getType(e2) !== u4.object) {
      let l6 = this._getOrReturnCtx(e2);
      return d4(l6, { code: c3.invalid_type, expected: u4.object, received: l6.parsedType }), p3;
    }
    let { status: s2, ctx: a4 } = this._processInputParams(e2), { shape: n2, keys: i4 } = this._getCached(), o5 = [];
    if (!(this._def.catchall instanceof A5 && this._def.unknownKeys === "strip")) for (let l6 in a4.data) i4.includes(l6) || o5.push(l6);
    let f4 = [];
    for (let l6 of i4) {
      let v4 = n2[l6], T7 = a4.data[l6];
      f4.push({ key: { status: "valid", value: l6 }, value: v4._parse(new O3(a4, T7, a4.path, l6)), alwaysSet: l6 in a4.data });
    }
    if (this._def.catchall instanceof A5) {
      let l6 = this._def.unknownKeys;
      if (l6 === "passthrough") for (let v4 of o5) f4.push({ key: { status: "valid", value: v4 }, value: { status: "valid", value: a4.data[v4] } });
      else if (l6 === "strict") o5.length > 0 && (d4(a4, { code: c3.unrecognized_keys, keys: o5 }), s2.dirty());
      else if (l6 !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      let l6 = this._def.catchall;
      for (let v4 of o5) {
        let T7 = a4.data[v4];
        f4.push({ key: { status: "valid", value: v4 }, value: l6._parse(new O3(a4, T7, a4.path, v4)), alwaysSet: v4 in a4.data });
      }
    }
    return a4.common.async ? Promise.resolve().then(async () => {
      let l6 = [];
      for (let v4 of f4) {
        let T7 = await v4.key, we = await v4.value;
        l6.push({ key: T7, value: we, alwaysSet: v4.alwaysSet });
      }
      return l6;
    }).then((l6) => x4.mergeObjectSync(s2, l6)) : x4.mergeObjectSync(s2, f4);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e2) {
    return h5.errToObj, new r9({ ...this._def, unknownKeys: "strict", ...e2 !== void 0 ? { errorMap: (t2, s2) => {
      let a4 = this._def.errorMap?.(t2, s2).message ?? s2.defaultError;
      return t2.code === "unrecognized_keys" ? { message: h5.errToObj(e2).message ?? a4 } : { message: a4 };
    } } : {} });
  }
  strip() {
    return new r9({ ...this._def, unknownKeys: "strip" });
  }
  passthrough() {
    return new r9({ ...this._def, unknownKeys: "passthrough" });
  }
  extend(e2) {
    return new r9({ ...this._def, shape: () => ({ ...this._def.shape(), ...e2 }) });
  }
  merge(e2) {
    return new r9({ unknownKeys: e2._def.unknownKeys, catchall: e2._def.catchall, shape: () => ({ ...this._def.shape(), ...e2._def.shape() }), typeName: m5.ZodObject });
  }
  setKey(e2, t2) {
    return this.augment({ [e2]: t2 });
  }
  catchall(e2) {
    return new r9({ ...this._def, catchall: e2 });
  }
  pick(e2) {
    let t2 = {};
    for (let s2 of g4.objectKeys(e2)) e2[s2] && this.shape[s2] && (t2[s2] = this.shape[s2]);
    return new r9({ ...this._def, shape: () => t2 });
  }
  omit(e2) {
    let t2 = {};
    for (let s2 of g4.objectKeys(this.shape)) e2[s2] || (t2[s2] = this.shape[s2]);
    return new r9({ ...this._def, shape: () => t2 });
  }
  deepPartial() {
    return ae2(this);
  }
  partial(e2) {
    let t2 = {};
    for (let s2 of g4.objectKeys(this.shape)) {
      let a4 = this.shape[s2];
      e2 && !e2[s2] ? t2[s2] = a4 : t2[s2] = a4.optional();
    }
    return new r9({ ...this._def, shape: () => t2 });
  }
  required(e2) {
    let t2 = {};
    for (let s2 of g4.objectKeys(this.shape)) if (e2 && !e2[s2]) t2[s2] = this.shape[s2];
    else {
      let n2 = this.shape[s2];
      for (; n2 instanceof C4; ) n2 = n2._def.innerType;
      t2[s2] = n2;
    }
    return new r9({ ...this._def, shape: () => t2 });
  }
  keyof() {
    return Ne(g4.objectKeys(this.shape));
  }
};
w5.create = (r17, e2) => new w5({ shape: () => r17, unknownKeys: "strip", catchall: A5.create(), typeName: m5.ZodObject, ...y2(e2) });
w5.strictCreate = (r17, e2) => new w5({ shape: () => r17, unknownKeys: "strict", catchall: A5.create(), typeName: m5.ZodObject, ...y2(e2) });
w5.lazycreate = (r17, e2) => new w5({ shape: r17, unknownKeys: "strip", catchall: A5.create(), typeName: m5.ZodObject, ...y2(e2) });
var J4 = class extends _4 {
  _parse(e2) {
    let { ctx: t2 } = this._processInputParams(e2), s2 = this._def.options;
    function a4(n2) {
      for (let o5 of n2) if (o5.result.status === "valid") return o5.result;
      for (let o5 of n2) if (o5.result.status === "dirty") return t2.common.issues.push(...o5.ctx.common.issues), o5.result;
      let i4 = n2.map((o5) => new b4(o5.ctx.common.issues));
      return d4(t2, { code: c3.invalid_union, unionErrors: i4 }), p3;
    }
    if (t2.common.async) return Promise.all(s2.map(async (n2) => {
      let i4 = { ...t2, common: { ...t2.common, issues: [] }, parent: null };
      return { result: await n2._parseAsync({ data: t2.data, path: t2.path, parent: i4 }), ctx: i4 };
    })).then(a4);
    {
      let n2, i4 = [];
      for (let f4 of s2) {
        let l6 = { ...t2, common: { ...t2.common, issues: [] }, parent: null }, v4 = f4._parseSync({ data: t2.data, path: t2.path, parent: l6 });
        if (v4.status === "valid") return v4;
        v4.status === "dirty" && !n2 && (n2 = { result: v4, ctx: l6 }), l6.common.issues.length && i4.push(l6.common.issues);
      }
      if (n2) return t2.common.issues.push(...n2.ctx.common.issues), n2.result;
      let o5 = i4.map((f4) => new b4(f4));
      return d4(t2, { code: c3.invalid_union, unionErrors: o5 }), p3;
    }
  }
  get options() {
    return this._def.options;
  }
};
J4.create = (r17, e2) => new J4({ options: r17, typeName: m5.ZodUnion, ...y2(e2) });
var E5 = (r17) => r17 instanceof H3 ? E5(r17.schema) : r17 instanceof S6 ? E5(r17.innerType()) : r17 instanceof G4 ? [r17.value] : r17 instanceof Q3 ? r17.options : r17 instanceof X2 ? g4.objectValues(r17.enum) : r17 instanceof K3 ? E5(r17._def.innerType) : r17 instanceof W2 ? [void 0] : r17 instanceof q3 ? [null] : r17 instanceof C4 ? [void 0, ...E5(r17.unwrap())] : r17 instanceof j6 ? [null, ...E5(r17.unwrap())] : r17 instanceof le || r17 instanceof te2 ? E5(r17.unwrap()) : r17 instanceof ee2 ? E5(r17._def.innerType) : [];
var me = class r10 extends _4 {
  _parse(e2) {
    let { ctx: t2 } = this._processInputParams(e2);
    if (t2.parsedType !== u4.object) return d4(t2, { code: c3.invalid_type, expected: u4.object, received: t2.parsedType }), p3;
    let s2 = this.discriminator, a4 = t2.data[s2], n2 = this.optionsMap.get(a4);
    return n2 ? t2.common.async ? n2._parseAsync({ data: t2.data, path: t2.path, parent: t2 }) : n2._parseSync({ data: t2.data, path: t2.path, parent: t2 }) : (d4(t2, { code: c3.invalid_union_discriminator, options: Array.from(this.optionsMap.keys()), path: [s2] }), p3);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  static create(e2, t2, s2) {
    let a4 = /* @__PURE__ */ new Map();
    for (let n2 of t2) {
      let i4 = E5(n2.shape[e2]);
      if (!i4.length) throw new Error(`A discriminator value for key \`${e2}\` could not be extracted from all schema options`);
      for (let o5 of i4) {
        if (a4.has(o5)) throw new Error(`Discriminator property ${String(e2)} has duplicate value ${String(o5)}`);
        a4.set(o5, n2);
      }
    }
    return new r10({ typeName: m5.ZodDiscriminatedUnion, discriminator: e2, options: t2, optionsMap: a4, ...y2(s2) });
  }
};
function ke(r17, e2) {
  let t2 = R3(r17), s2 = R3(e2);
  if (r17 === e2) return { valid: true, data: r17 };
  if (t2 === u4.object && s2 === u4.object) {
    let a4 = g4.objectKeys(e2), n2 = g4.objectKeys(r17).filter((o5) => a4.indexOf(o5) !== -1), i4 = { ...r17, ...e2 };
    for (let o5 of n2) {
      let f4 = ke(r17[o5], e2[o5]);
      if (!f4.valid) return { valid: false };
      i4[o5] = f4.data;
    }
    return { valid: true, data: i4 };
  } else if (t2 === u4.array && s2 === u4.array) {
    if (r17.length !== e2.length) return { valid: false };
    let a4 = [];
    for (let n2 = 0; n2 < r17.length; n2++) {
      let i4 = r17[n2], o5 = e2[n2], f4 = ke(i4, o5);
      if (!f4.valid) return { valid: false };
      a4.push(f4.data);
    }
    return { valid: true, data: a4 };
  } else return t2 === u4.date && s2 === u4.date && +r17 == +e2 ? { valid: true, data: r17 } : { valid: false };
}
var Y2 = class extends _4 {
  _parse(e2) {
    let { status: t2, ctx: s2 } = this._processInputParams(e2), a4 = (n2, i4) => {
      if (he2(n2) || he2(i4)) return p3;
      let o5 = ke(n2.value, i4.value);
      return o5.valid ? ((pe(n2) || pe(i4)) && t2.dirty(), { status: t2.value, value: o5.data }) : (d4(s2, { code: c3.invalid_intersection_types }), p3);
    };
    return s2.common.async ? Promise.all([this._def.left._parseAsync({ data: s2.data, path: s2.path, parent: s2 }), this._def.right._parseAsync({ data: s2.data, path: s2.path, parent: s2 })]).then(([n2, i4]) => a4(n2, i4)) : a4(this._def.left._parseSync({ data: s2.data, path: s2.path, parent: s2 }), this._def.right._parseSync({ data: s2.data, path: s2.path, parent: s2 }));
  }
};
Y2.create = (r17, e2, t2) => new Y2({ left: r17, right: e2, typeName: m5.ZodIntersection, ...y2(t2) });
var N3 = class r11 extends _4 {
  _parse(e2) {
    let { status: t2, ctx: s2 } = this._processInputParams(e2);
    if (s2.parsedType !== u4.array) return d4(s2, { code: c3.invalid_type, expected: u4.array, received: s2.parsedType }), p3;
    if (s2.data.length < this._def.items.length) return d4(s2, { code: c3.too_small, minimum: this._def.items.length, inclusive: true, exact: false, type: "array" }), p3;
    !this._def.rest && s2.data.length > this._def.items.length && (d4(s2, { code: c3.too_big, maximum: this._def.items.length, inclusive: true, exact: false, type: "array" }), t2.dirty());
    let n2 = [...s2.data].map((i4, o5) => {
      let f4 = this._def.items[o5] || this._def.rest;
      return f4 ? f4._parse(new O3(s2, i4, s2.path, o5)) : null;
    }).filter((i4) => !!i4);
    return s2.common.async ? Promise.all(n2).then((i4) => x4.mergeArray(t2, i4)) : x4.mergeArray(t2, n2);
  }
  get items() {
    return this._def.items;
  }
  rest(e2) {
    return new r11({ ...this._def, rest: e2 });
  }
};
N3.create = (r17, e2) => {
  if (!Array.isArray(r17)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new N3({ items: r17, typeName: m5.ZodTuple, rest: null, ...y2(e2) });
};
var ye = class r12 extends _4 {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e2) {
    let { status: t2, ctx: s2 } = this._processInputParams(e2);
    if (s2.parsedType !== u4.object) return d4(s2, { code: c3.invalid_type, expected: u4.object, received: s2.parsedType }), p3;
    let a4 = [], n2 = this._def.keyType, i4 = this._def.valueType;
    for (let o5 in s2.data) a4.push({ key: n2._parse(new O3(s2, o5, s2.path, o5)), value: i4._parse(new O3(s2, s2.data[o5], s2.path, o5)), alwaysSet: o5 in s2.data });
    return s2.common.async ? x4.mergeObjectAsync(t2, a4) : x4.mergeObjectSync(t2, a4);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e2, t2, s2) {
    return t2 instanceof _4 ? new r12({ keyType: e2, valueType: t2, typeName: m5.ZodRecord, ...y2(s2) }) : new r12({ keyType: V4.create(), valueType: e2, typeName: m5.ZodRecord, ...y2(t2) });
  }
};
var oe = class extends _4 {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e2) {
    let { status: t2, ctx: s2 } = this._processInputParams(e2);
    if (s2.parsedType !== u4.map) return d4(s2, { code: c3.invalid_type, expected: u4.map, received: s2.parsedType }), p3;
    let a4 = this._def.keyType, n2 = this._def.valueType, i4 = [...s2.data.entries()].map(([o5, f4], l6) => ({ key: a4._parse(new O3(s2, o5, s2.path, [l6, "key"])), value: n2._parse(new O3(s2, f4, s2.path, [l6, "value"])) }));
    if (s2.common.async) {
      let o5 = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (let f4 of i4) {
          let l6 = await f4.key, v4 = await f4.value;
          if (l6.status === "aborted" || v4.status === "aborted") return p3;
          (l6.status === "dirty" || v4.status === "dirty") && t2.dirty(), o5.set(l6.value, v4.value);
        }
        return { status: t2.value, value: o5 };
      });
    } else {
      let o5 = /* @__PURE__ */ new Map();
      for (let f4 of i4) {
        let l6 = f4.key, v4 = f4.value;
        if (l6.status === "aborted" || v4.status === "aborted") return p3;
        (l6.status === "dirty" || v4.status === "dirty") && t2.dirty(), o5.set(l6.value, v4.value);
      }
      return { status: t2.value, value: o5 };
    }
  }
};
oe.create = (r17, e2, t2) => new oe({ valueType: e2, keyType: r17, typeName: m5.ZodMap, ...y2(t2) });
var ce = class r13 extends _4 {
  _parse(e2) {
    let { status: t2, ctx: s2 } = this._processInputParams(e2);
    if (s2.parsedType !== u4.set) return d4(s2, { code: c3.invalid_type, expected: u4.set, received: s2.parsedType }), p3;
    let a4 = this._def;
    a4.minSize !== null && s2.data.size < a4.minSize.value && (d4(s2, { code: c3.too_small, minimum: a4.minSize.value, type: "set", inclusive: true, exact: false, message: a4.minSize.message }), t2.dirty()), a4.maxSize !== null && s2.data.size > a4.maxSize.value && (d4(s2, { code: c3.too_big, maximum: a4.maxSize.value, type: "set", inclusive: true, exact: false, message: a4.maxSize.message }), t2.dirty());
    let n2 = this._def.valueType;
    function i4(f4) {
      let l6 = /* @__PURE__ */ new Set();
      for (let v4 of f4) {
        if (v4.status === "aborted") return p3;
        v4.status === "dirty" && t2.dirty(), l6.add(v4.value);
      }
      return { status: t2.value, value: l6 };
    }
    let o5 = [...s2.data.values()].map((f4, l6) => n2._parse(new O3(s2, f4, s2.path, l6)));
    return s2.common.async ? Promise.all(o5).then((f4) => i4(f4)) : i4(o5);
  }
  min(e2, t2) {
    return new r13({ ...this._def, minSize: { value: e2, message: h5.toString(t2) } });
  }
  max(e2, t2) {
    return new r13({ ...this._def, maxSize: { value: e2, message: h5.toString(t2) } });
  }
  size(e2, t2) {
    return this.min(e2, t2).max(e2, t2);
  }
  nonempty(e2) {
    return this.min(1, e2);
  }
};
ce.create = (r17, e2) => new ce({ valueType: r17, minSize: null, maxSize: null, typeName: m5.ZodSet, ...y2(e2) });
var _e = class r14 extends _4 {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(e2) {
    let { ctx: t2 } = this._processInputParams(e2);
    if (t2.parsedType !== u4.function) return d4(t2, { code: c3.invalid_type, expected: u4.function, received: t2.parsedType }), p3;
    function s2(o5, f4) {
      return ue({ data: o5, path: t2.path, errorMaps: [t2.common.contextualErrorMap, t2.schemaErrorMap, re2(), I2].filter((l6) => !!l6), issueData: { code: c3.invalid_arguments, argumentsError: f4 } });
    }
    function a4(o5, f4) {
      return ue({ data: o5, path: t2.path, errorMaps: [t2.common.contextualErrorMap, t2.schemaErrorMap, re2(), I2].filter((l6) => !!l6), issueData: { code: c3.invalid_return_type, returnTypeError: f4 } });
    }
    let n2 = { errorMap: t2.common.contextualErrorMap }, i4 = t2.data;
    if (this._def.returns instanceof z3) {
      let o5 = this;
      return k5(async function(...f4) {
        let l6 = new b4([]), v4 = await o5._def.args.parseAsync(f4, n2).catch((ge2) => {
          throw l6.addIssue(s2(f4, ge2)), l6;
        }), T7 = await Reflect.apply(i4, this, v4);
        return await o5._def.returns._def.type.parseAsync(T7, n2).catch((ge2) => {
          throw l6.addIssue(a4(T7, ge2)), l6;
        });
      });
    } else {
      let o5 = this;
      return k5(function(...f4) {
        let l6 = o5._def.args.safeParse(f4, n2);
        if (!l6.success) throw new b4([s2(f4, l6.error)]);
        let v4 = Reflect.apply(i4, this, l6.data), T7 = o5._def.returns.safeParse(v4, n2);
        if (!T7.success) throw new b4([a4(v4, T7.error)]);
        return T7.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...e2) {
    return new r14({ ...this._def, args: N3.create(e2).rest(Z3.create()) });
  }
  returns(e2) {
    return new r14({ ...this._def, returns: e2 });
  }
  implement(e2) {
    return this.parse(e2);
  }
  strictImplement(e2) {
    return this.parse(e2);
  }
  static create(e2, t2, s2) {
    return new r14({ args: e2 || N3.create([]).rest(Z3.create()), returns: t2 || Z3.create(), typeName: m5.ZodFunction, ...y2(s2) });
  }
};
var H3 = class extends _4 {
  get schema() {
    return this._def.getter();
  }
  _parse(e2) {
    let { ctx: t2 } = this._processInputParams(e2);
    return this._def.getter()._parse({ data: t2.data, path: t2.path, parent: t2 });
  }
};
H3.create = (r17, e2) => new H3({ getter: r17, typeName: m5.ZodLazy, ...y2(e2) });
var G4 = class extends _4 {
  _parse(e2) {
    if (e2.data !== this._def.value) {
      let t2 = this._getOrReturnCtx(e2);
      return d4(t2, { received: t2.data, code: c3.invalid_literal, expected: this._def.value }), p3;
    }
    return { status: "valid", value: e2.data };
  }
  get value() {
    return this._def.value;
  }
};
G4.create = (r17, e2) => new G4({ value: r17, typeName: m5.ZodLiteral, ...y2(e2) });
function Ne(r17, e2) {
  return new Q3({ values: r17, typeName: m5.ZodEnum, ...y2(e2) });
}
var Q3 = class r15 extends _4 {
  _parse(e2) {
    if (typeof e2.data != "string") {
      let t2 = this._getOrReturnCtx(e2), s2 = this._def.values;
      return d4(t2, { expected: g4.joinValues(s2), received: t2.parsedType, code: c3.invalid_type }), p3;
    }
    if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(e2.data)) {
      let t2 = this._getOrReturnCtx(e2), s2 = this._def.values;
      return d4(t2, { received: t2.data, code: c3.invalid_enum_value, options: s2 }), p3;
    }
    return k5(e2.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    let e2 = {};
    for (let t2 of this._def.values) e2[t2] = t2;
    return e2;
  }
  get Values() {
    let e2 = {};
    for (let t2 of this._def.values) e2[t2] = t2;
    return e2;
  }
  get Enum() {
    let e2 = {};
    for (let t2 of this._def.values) e2[t2] = t2;
    return e2;
  }
  extract(e2, t2 = this._def) {
    return r15.create(e2, { ...this._def, ...t2 });
  }
  exclude(e2, t2 = this._def) {
    return r15.create(this.options.filter((s2) => !e2.includes(s2)), { ...this._def, ...t2 });
  }
};
Q3.create = Ne;
var X2 = class extends _4 {
  _parse(e2) {
    let t2 = g4.getValidEnumValues(this._def.values), s2 = this._getOrReturnCtx(e2);
    if (s2.parsedType !== u4.string && s2.parsedType !== u4.number) {
      let a4 = g4.objectValues(t2);
      return d4(s2, { expected: g4.joinValues(a4), received: s2.parsedType, code: c3.invalid_type }), p3;
    }
    if (this._cache || (this._cache = new Set(g4.getValidEnumValues(this._def.values))), !this._cache.has(e2.data)) {
      let a4 = g4.objectValues(t2);
      return d4(s2, { received: s2.data, code: c3.invalid_enum_value, options: a4 }), p3;
    }
    return k5(e2.data);
  }
  get enum() {
    return this._def.values;
  }
};
X2.create = (r17, e2) => new X2({ values: r17, typeName: m5.ZodNativeEnum, ...y2(e2) });
var z3 = class extends _4 {
  unwrap() {
    return this._def.type;
  }
  _parse(e2) {
    let { ctx: t2 } = this._processInputParams(e2);
    if (t2.parsedType !== u4.promise && t2.common.async === false) return d4(t2, { code: c3.invalid_type, expected: u4.promise, received: t2.parsedType }), p3;
    let s2 = t2.parsedType === u4.promise ? t2.data : Promise.resolve(t2.data);
    return k5(s2.then((a4) => this._def.type.parseAsync(a4, { path: t2.path, errorMap: t2.common.contextualErrorMap })));
  }
};
z3.create = (r17, e2) => new z3({ type: r17, typeName: m5.ZodPromise, ...y2(e2) });
var S6 = class extends _4 {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === m5.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e2) {
    let { status: t2, ctx: s2 } = this._processInputParams(e2), a4 = this._def.effect || null, n2 = { addIssue: (i4) => {
      d4(s2, i4), i4.fatal ? t2.abort() : t2.dirty();
    }, get path() {
      return s2.path;
    } };
    if (n2.addIssue = n2.addIssue.bind(n2), a4.type === "preprocess") {
      let i4 = a4.transform(s2.data, n2);
      if (s2.common.async) return Promise.resolve(i4).then(async (o5) => {
        if (t2.value === "aborted") return p3;
        let f4 = await this._def.schema._parseAsync({ data: o5, path: s2.path, parent: s2 });
        return f4.status === "aborted" ? p3 : f4.status === "dirty" ? D4(f4.value) : t2.value === "dirty" ? D4(f4.value) : f4;
      });
      {
        if (t2.value === "aborted") return p3;
        let o5 = this._def.schema._parseSync({ data: i4, path: s2.path, parent: s2 });
        return o5.status === "aborted" ? p3 : o5.status === "dirty" ? D4(o5.value) : t2.value === "dirty" ? D4(o5.value) : o5;
      }
    }
    if (a4.type === "refinement") {
      let i4 = (o5) => {
        let f4 = a4.refinement(o5, n2);
        if (s2.common.async) return Promise.resolve(f4);
        if (f4 instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return o5;
      };
      if (s2.common.async === false) {
        let o5 = this._def.schema._parseSync({ data: s2.data, path: s2.path, parent: s2 });
        return o5.status === "aborted" ? p3 : (o5.status === "dirty" && t2.dirty(), i4(o5.value), { status: t2.value, value: o5.value });
      } else return this._def.schema._parseAsync({ data: s2.data, path: s2.path, parent: s2 }).then((o5) => o5.status === "aborted" ? p3 : (o5.status === "dirty" && t2.dirty(), i4(o5.value).then(() => ({ status: t2.value, value: o5.value }))));
    }
    if (a4.type === "transform") if (s2.common.async === false) {
      let i4 = this._def.schema._parseSync({ data: s2.data, path: s2.path, parent: s2 });
      if (!M4(i4)) return p3;
      let o5 = a4.transform(i4.value, n2);
      if (o5 instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
      return { status: t2.value, value: o5 };
    } else return this._def.schema._parseAsync({ data: s2.data, path: s2.path, parent: s2 }).then((i4) => M4(i4) ? Promise.resolve(a4.transform(i4.value, n2)).then((o5) => ({ status: t2.value, value: o5 })) : p3);
    g4.assertNever(a4);
  }
};
S6.create = (r17, e2, t2) => new S6({ schema: r17, typeName: m5.ZodEffects, effect: e2, ...y2(t2) });
S6.createWithPreprocess = (r17, e2, t2) => new S6({ schema: e2, effect: { type: "preprocess", transform: r17 }, typeName: m5.ZodEffects, ...y2(t2) });
var C4 = class extends _4 {
  _parse(e2) {
    return this._getType(e2) === u4.undefined ? k5(void 0) : this._def.innerType._parse(e2);
  }
  unwrap() {
    return this._def.innerType;
  }
};
C4.create = (r17, e2) => new C4({ innerType: r17, typeName: m5.ZodOptional, ...y2(e2) });
var j6 = class extends _4 {
  _parse(e2) {
    return this._getType(e2) === u4.null ? k5(null) : this._def.innerType._parse(e2);
  }
  unwrap() {
    return this._def.innerType;
  }
};
j6.create = (r17, e2) => new j6({ innerType: r17, typeName: m5.ZodNullable, ...y2(e2) });
var K3 = class extends _4 {
  _parse(e2) {
    let { ctx: t2 } = this._processInputParams(e2), s2 = t2.data;
    return t2.parsedType === u4.undefined && (s2 = this._def.defaultValue()), this._def.innerType._parse({ data: s2, path: t2.path, parent: t2 });
  }
  removeDefault() {
    return this._def.innerType;
  }
};
K3.create = (r17, e2) => new K3({ innerType: r17, typeName: m5.ZodDefault, defaultValue: typeof e2.default == "function" ? e2.default : () => e2.default, ...y2(e2) });
var ee2 = class extends _4 {
  _parse(e2) {
    let { ctx: t2 } = this._processInputParams(e2), s2 = { ...t2, common: { ...t2.common, issues: [] } }, a4 = this._def.innerType._parse({ data: s2.data, path: s2.path, parent: { ...s2 } });
    return se2(a4) ? a4.then((n2) => ({ status: "valid", value: n2.status === "valid" ? n2.value : this._def.catchValue({ get error() {
      return new b4(s2.common.issues);
    }, input: s2.data }) })) : { status: "valid", value: a4.status === "valid" ? a4.value : this._def.catchValue({ get error() {
      return new b4(s2.common.issues);
    }, input: s2.data }) };
  }
  removeCatch() {
    return this._def.innerType;
  }
};
ee2.create = (r17, e2) => new ee2({ innerType: r17, typeName: m5.ZodCatch, catchValue: typeof e2.catch == "function" ? e2.catch : () => e2.catch, ...y2(e2) });
var de = class extends _4 {
  _parse(e2) {
    if (this._getType(e2) !== u4.nan) {
      let s2 = this._getOrReturnCtx(e2);
      return d4(s2, { code: c3.invalid_type, expected: u4.nan, received: s2.parsedType }), p3;
    }
    return { status: "valid", value: e2.data };
  }
};
de.create = (r17) => new de({ typeName: m5.ZodNaN, ...y2(r17) });
var ct = Symbol("zod_brand");
var le = class extends _4 {
  _parse(e2) {
    let { ctx: t2 } = this._processInputParams(e2), s2 = t2.data;
    return this._def.type._parse({ data: s2, path: t2.path, parent: t2 });
  }
  unwrap() {
    return this._def.type;
  }
};
var fe = class r16 extends _4 {
  _parse(e2) {
    let { status: t2, ctx: s2 } = this._processInputParams(e2);
    if (s2.common.async) return (async () => {
      let n2 = await this._def.in._parseAsync({ data: s2.data, path: s2.path, parent: s2 });
      return n2.status === "aborted" ? p3 : n2.status === "dirty" ? (t2.dirty(), D4(n2.value)) : this._def.out._parseAsync({ data: n2.value, path: s2.path, parent: s2 });
    })();
    {
      let a4 = this._def.in._parseSync({ data: s2.data, path: s2.path, parent: s2 });
      return a4.status === "aborted" ? p3 : a4.status === "dirty" ? (t2.dirty(), { status: "dirty", value: a4.value }) : this._def.out._parseSync({ data: a4.value, path: s2.path, parent: s2 });
    }
  }
  static create(e2, t2) {
    return new r16({ in: e2, out: t2, typeName: m5.ZodPipeline });
  }
};
var te2 = class extends _4 {
  _parse(e2) {
    let t2 = this._def.innerType._parse(e2), s2 = (a4) => (M4(a4) && (a4.value = Object.freeze(a4.value)), a4);
    return se2(t2) ? t2.then((a4) => s2(a4)) : s2(t2);
  }
  unwrap() {
    return this._def.innerType;
  }
};
te2.create = (r17, e2) => new te2({ innerType: r17, typeName: m5.ZodReadonly, ...y2(e2) });
function Oe(r17, e2) {
  let t2 = typeof r17 == "function" ? r17(e2) : typeof r17 == "string" ? { message: r17 } : r17;
  return typeof t2 == "string" ? { message: t2 } : t2;
}
function je(r17, e2 = {}, t2) {
  return r17 ? P5.create().superRefine((s2, a4) => {
    let n2 = r17(s2);
    if (n2 instanceof Promise) return n2.then((i4) => {
      if (!i4) {
        let o5 = Oe(e2, s2), f4 = o5.fatal ?? t2 ?? true;
        a4.addIssue({ code: "custom", ...o5, fatal: f4 });
      }
    });
    if (!n2) {
      let i4 = Oe(e2, s2), o5 = i4.fatal ?? t2 ?? true;
      a4.addIssue({ code: "custom", ...i4, fatal: o5 });
    }
  }) : P5.create();
}
var dt = { object: w5.lazycreate };
var m5;
(function(r17) {
  r17.ZodString = "ZodString", r17.ZodNumber = "ZodNumber", r17.ZodNaN = "ZodNaN", r17.ZodBigInt = "ZodBigInt", r17.ZodBoolean = "ZodBoolean", r17.ZodDate = "ZodDate", r17.ZodSymbol = "ZodSymbol", r17.ZodUndefined = "ZodUndefined", r17.ZodNull = "ZodNull", r17.ZodAny = "ZodAny", r17.ZodUnknown = "ZodUnknown", r17.ZodNever = "ZodNever", r17.ZodVoid = "ZodVoid", r17.ZodArray = "ZodArray", r17.ZodObject = "ZodObject", r17.ZodUnion = "ZodUnion", r17.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", r17.ZodIntersection = "ZodIntersection", r17.ZodTuple = "ZodTuple", r17.ZodRecord = "ZodRecord", r17.ZodMap = "ZodMap", r17.ZodSet = "ZodSet", r17.ZodFunction = "ZodFunction", r17.ZodLazy = "ZodLazy", r17.ZodLiteral = "ZodLiteral", r17.ZodEnum = "ZodEnum", r17.ZodEffects = "ZodEffects", r17.ZodNativeEnum = "ZodNativeEnum", r17.ZodOptional = "ZodOptional", r17.ZodNullable = "ZodNullable", r17.ZodDefault = "ZodDefault", r17.ZodCatch = "ZodCatch", r17.ZodPromise = "ZodPromise", r17.ZodBranded = "ZodBranded", r17.ZodPipeline = "ZodPipeline", r17.ZodReadonly = "ZodReadonly";
})(m5 || (m5 = {}));
var ut = (r17, e2 = { message: `Input not instance of ${r17.name}` }) => je((t2) => t2 instanceof r17, e2);
var Ie = V4.create;
var Ee = L4.create;
var lt = de.create;
var ft = U3.create;
var Ze = F4.create;
var ht = B4.create;
var pt = ne.create;
var mt = W2.create;
var yt = q3.create;
var _t = P5.create;
var gt = Z3.create;
var vt = A5.create;
var xt = ie.create;
var kt = $3.create;
var bt = w5.create;
var wt = w5.strictCreate;
var Tt = J4.create;
var Ct = me.create;
var Ot = Y2.create;
var St = N3.create;
var At = ye.create;
var Rt = oe.create;
var Nt = ce.create;
var jt = _e.create;
var It = H3.create;
var Et = G4.create;
var Zt = Q3.create;
var $t = X2.create;
var Mt = z3.create;
var Vt = S6.create;
var Pt = C4.create;
var zt = j6.create;
var Dt = S6.createWithPreprocess;
var Lt = fe.create;
var Ut = () => Ie().optional();
var Ft = () => Ee().optional();
var Bt = () => Ze().optional();
var Wt = { string: (r17) => V4.create({ ...r17, coerce: true }), number: (r17) => L4.create({ ...r17, coerce: true }), boolean: (r17) => F4.create({ ...r17, coerce: true }), bigint: (r17) => U3.create({ ...r17, coerce: true }), date: (r17) => B4.create({ ...r17, coerce: true }) };
var qt = p3;

// https://esm.sh/ollama-ai-provider@1.2.0/denonext/ollama-ai-provider.mjs
function v2(e2) {
  let t2 = [];
  for (let { content: s2, role: i4 } of e2) switch (i4) {
    case "system": {
      t2.push({ content: s2, role: "system" });
      break;
    }
    case "user": {
      t2.push({ ...s2.reduce((a4, n2) => {
        if (n2.type === "text") a4.content += n2.text;
        else {
          if (n2.type === "image" && n2.image instanceof URL) throw new Nr({ functionality: "Image URLs in user messages" });
          n2.type === "image" && n2.image instanceof Uint8Array && (a4.images = a4.images || [], a4.images.push(Se(n2.image)));
        }
        return a4;
      }, { content: "" }), role: "user" });
      break;
    }
    case "assistant": {
      let a4 = [], n2 = [];
      for (let l6 of s2) switch (l6.type) {
        case "text": {
          a4.push(l6.text);
          break;
        }
        case "tool-call": {
          n2.push({ function: { arguments: l6.args, name: l6.toolName }, id: l6.toolCallId, type: "function" });
          break;
        }
        default: {
          let r17 = l6;
          throw new Error(`Unsupported part: ${r17}`);
        }
      }
      t2.push({ content: a4.join(","), role: "assistant", tool_calls: n2.length > 0 ? n2 : void 0 });
      break;
    }
    case "tool": {
      t2.push(...s2.map((a4) => ({ content: typeof a4.result == "object" ? JSON.stringify(a4.result) : `${a4.result}`, role: "tool", tool_call_id: a4.toolCallId })));
      break;
    }
    default: {
      let a4 = i4;
      throw new Error(`Unsupported role: ${a4}`);
    }
  }
  return t2;
}
var H4 = class {
  constructor({ tools: e2, type: t2 }) {
    this._firstMessage = true, this._tools = e2, this._toolPartial = "", this._toolCalls = [], this._type = t2, this._detectedToolCall = false;
  }
  get toolCalls() {
    return this._toolCalls;
  }
  get detectedToolCall() {
    return this._detectedToolCall;
  }
  parse({ controller: e2, delta: t2 }) {
    var s2;
    if (this.detectToolCall(t2), !this._detectedToolCall) return false;
    this._toolPartial += t2;
    let i4 = G3(this._toolPartial);
    Array.isArray(i4) || (i4 = [i4]);
    for (let [a4, n2] of i4.entries()) {
      let l6 = (s2 = JSON.stringify(n2?.parameters)) != null ? s2 : "";
      if (l6 === "") continue;
      this._toolCalls[a4] || (this._toolCalls[a4] = { function: { arguments: "", name: n2.name }, id: Z(), type: "function" });
      let r17 = this._toolCalls[a4];
      r17.function.arguments = l6, e2.enqueue({ argsTextDelta: t2, toolCallId: r17.id, toolCallType: "function", toolName: r17.function.name, type: "tool-call-delta" });
    }
    return true;
  }
  finish({ controller: e2 }) {
    for (let t2 of this.toolCalls) e2.enqueue({ args: t2.function.arguments, toolCallId: t2.id, toolCallType: "function", toolName: t2.function.name, type: "tool-call" });
    return this.finishReason();
  }
  detectToolCall(e2) {
    !this._tools || this._tools.length === 0 || this._firstMessage && (this._type === "object-tool" ? this._detectedToolCall = true : this._type === "regular" && (e2.trim().startsWith("{") || e2.trim().startsWith("[")) && (this._detectedToolCall = true), this._firstMessage = false);
  }
  finishReason() {
    return this.detectedToolCall ? this._type === "object-tool" ? "stop" : "tool-calls" : "stop";
  }
};
function I3({ finishReason: e2, hasToolCalls: t2 }) {
  switch (e2) {
    case "stop":
      return t2 ? "tool-calls" : "stop";
    default:
      return "other";
  }
}
var k6 = be2.object({ error: be2.object({ code: be2.string().nullable(), message: be2.string(), param: be2.any().nullable(), type: be2.string() }) });
var w6 = ge({ errorSchema: k6, errorToMessage: (e2) => e2.error.message });
function q4({ mode: e2 }) {
  var t2;
  let s2 = (t2 = e2.tools) != null && t2.length ? e2.tools : void 0, i4 = [], a4 = e2.toolChoice;
  if (s2 === void 0) return { tools: void 0, toolWarnings: i4 };
  let n2 = [];
  for (let r17 of s2) r17.type === "provider-defined" ? i4.push({ tool: r17, type: "unsupported-tool" }) : n2.push({ function: { description: r17.description, name: r17.name, parameters: r17.parameters }, type: "function" });
  if (a4 === void 0) return { tools: n2, toolWarnings: i4 };
  let l6 = a4.type;
  switch (l6) {
    case "auto":
      return { tools: n2, toolWarnings: i4 };
    case "none":
      return { tools: void 0, toolWarnings: i4 };
    default: {
      let r17 = l6;
      throw new Nr({ functionality: `Unsupported tool choice type: ${r17}` });
    }
  }
}
function J5(e2) {
  return Object.fromEntries(Object.entries(e2).filter(([, t2]) => t2 !== void 0));
}
var z4 = class extends TransformStream {
  constructor() {
    super({ flush: (e2) => {
      this.buffer.length !== 0 && e2.enqueue(this.buffer);
    }, transform: (e2, t2) => {
      for (e2 = this.buffer + e2; ; ) {
        let s2 = e2.indexOf(`
`);
        if (s2 === -1) break;
        t2.enqueue(e2.slice(0, s2)), e2 = e2.slice(s2 + 1);
      }
      this.buffer = e2;
    } }), this.buffer = "";
  }
};
var $4 = (e2) => async ({ response: t2 }) => {
  let s2 = d2(t2);
  if (t2.body === null) throw new Ir({});
  return { responseHeaders: s2, value: t2.body.pipeThrough(new TextDecoderStream()).pipeThrough(new z4()).pipeThrough(new TransformStream({ transform(i4, a4) {
    a4.enqueue(S3({ schema: e2, text: i4 }));
  } })) };
};
var F5 = class {
  constructor(e2, t2, s2) {
    this.modelId = e2, this.settings = t2, this.config = s2, this.specificationVersion = "v1", this.defaultObjectGenerationMode = "json", this.supportsImageUrls = false;
  }
  get supportsStructuredOutputs() {
    var e2;
    return (e2 = this.settings.structuredOutputs) != null ? e2 : false;
  }
  get provider() {
    return this.config.provider;
  }
  getArguments({ frequencyPenalty: e2, maxTokens: t2, mode: s2, presencePenalty: i4, prompt: a4, responseFormat: n2, seed: l6, stopSequences: r17, temperature: d6, topK: f4, topP: g7 }) {
    let m8 = s2.type, h9 = [];
    n2 !== void 0 && n2.type === "json" && n2.schema !== void 0 && !this.supportsStructuredOutputs && h9.push({ details: "JSON response format schema is only supported with structuredOutputs", setting: "responseFormat", type: "unsupported-setting" });
    let u7 = { format: n2?.type, model: this.modelId, options: J5({ f16_kv: this.settings.f16Kv, frequency_penalty: e2, low_vram: this.settings.lowVram, main_gpu: this.settings.mainGpu, min_p: this.settings.minP, mirostat: this.settings.mirostat, mirostat_eta: this.settings.mirostatEta, mirostat_tau: this.settings.mirostatTau, num_batch: this.settings.numBatch, num_ctx: this.settings.numCtx, num_gpu: this.settings.numGpu, num_keep: this.settings.numKeep, num_predict: t2, num_thread: this.settings.numThread, numa: this.settings.numa, penalize_newline: this.settings.penalizeNewline, presence_penalty: i4, repeat_last_n: this.settings.repeatLastN, repeat_penalty: this.settings.repeatPenalty, seed: l6, stop: r17, temperature: d6, tfs_z: this.settings.tfsZ, top_k: f4, top_p: g7, typical_p: this.settings.typicalP, use_mlock: this.settings.useMlock, use_mmap: this.settings.useMmap, vocab_only: this.settings.vocabOnly }) };
    switch (m8) {
      case "regular": {
        let { tools: p5, toolWarnings: c5 } = q4({ mode: s2 });
        return { args: { ...u7, messages: v2(a4), tools: p5 }, type: m8, warnings: [...h9, ...c5] };
      }
      case "object-json":
        return { args: { ...u7, format: this.supportsStructuredOutputs && s2.schema !== void 0 ? s2.schema : "json", messages: v2(a4) }, type: m8, warnings: h9 };
      case "object-tool":
        return { args: { ...u7, messages: v2(a4), tool_choice: { function: { name: s2.tool.name }, type: "function" }, tools: [{ function: { description: s2.tool.description, name: s2.tool.name, parameters: s2.tool.parameters }, type: "function" }] }, type: m8, warnings: h9 };
      default: {
        let p5 = m8;
        throw new Error(`Unsupported type: ${p5}`);
      }
    }
  }
  async doGenerate(e2) {
    var t2, s2;
    let { args: i4, warnings: a4 } = this.getArguments(e2), n2 = { ...i4, stream: false }, { responseHeaders: l6, value: r17 } = await he({ abortSignal: e2.abortSignal, body: n2, failedResponseHandler: w6, fetch: this.config.fetch, headers: _2(this.config.headers(), e2.headers), successfulResponseHandler: be(D5), url: `${this.config.baseURL}/chat` }), { messages: d6, ...f4 } = n2, g7 = (t2 = r17.message.tool_calls) == null ? void 0 : t2.map((m8) => {
      var h9;
      return { args: JSON.stringify(m8.function.arguments), toolCallId: (h9 = m8.id) != null ? h9 : Z(), toolCallType: "function", toolName: m8.function.name };
    });
    return { finishReason: I3({ finishReason: r17.done_reason, hasToolCalls: g7 !== void 0 && g7.length > 0 }), rawCall: { rawPrompt: d6, rawSettings: f4 }, rawResponse: { headers: l6 }, request: { body: JSON.stringify(n2) }, text: (s2 = r17.message.content) != null ? s2 : void 0, toolCalls: g7, usage: { completionTokens: r17.eval_count || 0, promptTokens: r17.prompt_eval_count || 0 }, warnings: a4 };
  }
  async doStream(e2) {
    if (this.settings.simulateStreaming) {
      let u7 = await this.doGenerate(e2), p5 = new ReadableStream({ start(c5) {
        if (c5.enqueue({ type: "response-metadata", ...u7.response }), u7.text && c5.enqueue({ textDelta: u7.text, type: "text-delta" }), u7.toolCalls) for (let b7 of u7.toolCalls) c5.enqueue({ argsTextDelta: b7.args, toolCallId: b7.toolCallId, toolCallType: "function", toolName: b7.toolName, type: "tool-call-delta" }), c5.enqueue({ type: "tool-call", ...b7 });
        c5.enqueue({ finishReason: u7.finishReason, logprobs: u7.logprobs, providerMetadata: u7.providerMetadata, type: "finish", usage: u7.usage }), c5.close();
      } });
      return { rawCall: u7.rawCall, rawResponse: u7.rawResponse, stream: p5, warnings: u7.warnings };
    }
    let { args: t2, type: s2, warnings: i4 } = this.getArguments(e2), { responseHeaders: a4, value: n2 } = await he({ abortSignal: e2.abortSignal, body: t2, failedResponseHandler: w6, fetch: this.config.fetch, headers: _2(this.config.headers(), e2.headers), successfulResponseHandler: $4(G5), url: `${this.config.baseURL}/chat` }), { messages: l6, ...r17 } = t2, d6 = e2.mode.type === "regular" ? e2.mode.tools : e2.mode.type === "object-tool" ? [e2.mode.tool] : void 0, f4 = new H4({ tools: d6, type: s2 }), g7 = "other", m8 = { completionTokens: Number.NaN, promptTokens: Number.NaN }, { experimentalStreamTools: h9 = true } = this.settings;
    return { rawCall: { rawPrompt: l6, rawSettings: r17 }, rawResponse: { headers: a4 }, request: { body: JSON.stringify(t2) }, stream: n2.pipeThrough(new TransformStream({ async flush(u7) {
      u7.enqueue({ finishReason: g7, type: "finish", usage: m8 });
    }, async transform(u7, p5) {
      if (!u7.success) {
        p5.enqueue({ error: u7.error, type: "error" });
        return;
      }
      let c5 = u7.value;
      if (c5.done) {
        g7 = f4.finish({ controller: p5 }), m8 = { completionTokens: c5.eval_count, promptTokens: c5.prompt_eval_count || 0 };
        return;
      }
      h9 && f4.parse({ controller: p5, delta: c5.message.content }) || c5.message.content !== null && p5.enqueue({ textDelta: c5.message.content, type: "text-delta" });
    } })), warnings: i4 };
  }
};
var D5 = be2.object({ created_at: be2.string(), done: be2.literal(true), done_reason: be2.string().optional().nullable(), eval_count: be2.number(), eval_duration: be2.number(), load_duration: be2.number().optional(), message: be2.object({ content: be2.string(), role: be2.string(), tool_calls: be2.array(be2.object({ function: be2.object({ arguments: be2.record(be2.any()), name: be2.string() }), id: be2.string().optional() })).optional().nullable() }), model: be2.string(), prompt_eval_count: be2.number().optional(), prompt_eval_duration: be2.number().optional(), total_duration: be2.number() });
var G5 = be2.discriminatedUnion("done", [be2.object({ created_at: be2.string(), done: be2.literal(false), message: be2.object({ content: be2.string(), role: be2.string() }), model: be2.string() }), be2.object({ created_at: be2.string(), done: be2.literal(true), eval_count: be2.number(), eval_duration: be2.number(), load_duration: be2.number().optional(), model: be2.string(), prompt_eval_count: be2.number().optional(), prompt_eval_duration: be2.number().optional(), total_duration: be2.number() })]);
var K4 = class {
  constructor(e2, t2, s2) {
    this.specificationVersion = "v1", this.modelId = e2, this.settings = t2, this.config = s2;
  }
  get provider() {
    return this.config.provider;
  }
  get maxEmbeddingsPerCall() {
    var e2;
    return (e2 = this.settings.maxEmbeddingsPerCall) != null ? e2 : 2048;
  }
  get supportsParallelCalls() {
    return false;
  }
  async doEmbed({ abortSignal: e2, values: t2 }) {
    if (t2.length > this.maxEmbeddingsPerCall) throw new Mr({ maxEmbeddingsPerCall: this.maxEmbeddingsPerCall, modelId: this.modelId, provider: this.provider, values: t2 });
    let { responseHeaders: s2, value: i4 } = await he({ abortSignal: e2, body: { input: t2, model: this.modelId }, failedResponseHandler: w6, fetch: this.config.fetch, headers: this.config.headers(), successfulResponseHandler: be(Z4), url: `${this.config.baseURL}/embed` });
    return { embeddings: i4.embeddings, rawResponse: { headers: s2 }, usage: i4.prompt_eval_count ? { tokens: i4.prompt_eval_count } : void 0 };
  }
};
var Z4 = be2.object({ embeddings: be2.array(be2.array(be2.number())), prompt_eval_count: be2.number().nullable() });
function Q4(e2 = {}) {
  var t2;
  let s2 = (t2 = Pe(e2.baseURL)) != null ? t2 : "http://127.0.0.1:11434/api", i4 = () => ({ ...e2.headers }), a4 = (r17, d6 = {}) => new F5(r17, d6, { baseURL: s2, fetch: e2.fetch, headers: i4, provider: "ollama.chat" }), n2 = (r17, d6 = {}) => new K4(r17, d6, { baseURL: s2, fetch: e2.fetch, headers: i4, provider: "ollama.embedding" }), l6 = function(r17, d6) {
    if (new.target) throw new Error("The Ollama model function cannot be called with the new keyword.");
    return a4(r17, d6);
  };
  return l6.chat = a4, l6.embedding = n2, l6.languageModel = a4, l6.textEmbedding = n2, l6.textEmbeddingModel = n2, l6;
}
var pe2 = Q4();

// https://esm.sh/@ai-sdk/provider-utils@2.2.8/denonext/provider-utils.development.mjs
import __Process$2 from "node:process";

// https://esm.sh/@ai-sdk/provider@1.1.3/denonext/provider.development.mjs
var i3 = "vercel.ai.error";
var er2 = Symbol.for(i3);
var l4;
var ar2 = class c4 extends Error {
  constructor({ name: e2, message: s2, cause: t2 }) {
    super(s2), this[l4] = true, this.name = e2, this.cause = t2;
  }
  static isInstance(e2) {
    return c4.hasMarker(e2, i3);
  }
  static hasMarker(e2, s2) {
    let t2 = Symbol.for(s2);
    return e2 != null && typeof e2 == "object" && t2 in e2 && typeof e2[t2] == "boolean" && e2[t2] === true;
  }
};
l4 = er2;
var a3 = ar2;
var m6 = "AI_APICallError";
var v3 = `vercel.ai.error.${m6}`;
var sr2 = Symbol.for(v3);
var u5;
var br2 = class extends a3 {
  constructor({ message: r17, url: e2, requestBodyValues: s2, statusCode: t2, responseHeaders: W5, responseBody: X4, cause: Y3, isRetryable: Z7 = t2 != null && (t2 === 408 || t2 === 409 || t2 === 429 || t2 >= 500), data: rr }) {
    super({ name: m6, message: r17, cause: Y3 }), this[u5] = true, this.url = e2, this.requestBodyValues = s2, this.statusCode = t2, this.responseHeaders = W5, this.responseBody = X4, this.isRetryable = Z7, this.data = rr;
  }
  static isInstance(r17) {
    return a3.hasMarker(r17, v3);
  }
};
u5 = sr2;
var y3 = "AI_EmptyResponseBodyError";
var d5 = `vercel.ai.error.${y3}`;
var tr2 = Symbol.for(d5);
var h6;
h6 = tr2;
function p4(r17) {
  return r17 == null ? "unknown error" : typeof r17 == "string" ? r17 : r17 instanceof Error ? r17.message : JSON.stringify(r17);
}
var b5 = "AI_InvalidArgumentError";
var I4 = `vercel.ai.error.${b5}`;
var nr2 = Symbol.for(I4);
var f3;
var fr2 = class extends a3 {
  constructor({ message: r17, cause: e2, argument: s2 }) {
    super({ name: b5, message: r17, cause: e2 }), this[f3] = true, this.argument = s2;
  }
  static isInstance(r17) {
    return a3.hasMarker(r17, I4);
  }
};
f3 = nr2;
var E6 = "AI_InvalidPromptError";
var S7 = `vercel.ai.error.${E6}`;
var or2 = Symbol.for(S7);
var g5;
var Er = class extends a3 {
  constructor({ prompt: r17, message: e2, cause: s2 }) {
    super({ name: E6, message: `Invalid prompt: ${e2}`, cause: s2 }), this[g5] = true, this.prompt = r17;
  }
  static isInstance(r17) {
    return a3.hasMarker(r17, S7);
  }
};
g5 = or2;
var k7 = "AI_InvalidResponseDataError";
var _5 = `vercel.ai.error.${k7}`;
var ir2 = Symbol.for(_5);
var A6;
A6 = ir2;
var $5 = "AI_JSONParseError";
var M5 = `vercel.ai.error.${$5}`;
var lr2 = Symbol.for(M5);
var x5;
var gr3 = class extends a3 {
  constructor({ text: r17, cause: e2 }) {
    super({ name: $5, message: `JSON parsing failed: Text: ${r17}.
Error message: ${p4(e2)}`, cause: e2 }), this[x5] = true, this.text = r17;
  }
  static isInstance(r17) {
    return a3.hasMarker(r17, M5);
  }
};
x5 = lr2;
var N4 = "AI_LoadAPIKeyError";
var O4 = `vercel.ai.error.${N4}`;
var cr2 = Symbol.for(O4);
var P6;
P6 = cr2;
var T5 = "AI_LoadSettingError";
var J6 = `vercel.ai.error.${T5}`;
var mr2 = Symbol.for(J6);
var V5;
V5 = mr2;
var j7 = "AI_NoContentGeneratedError";
var C5 = `vercel.ai.error.${j7}`;
var vr2 = Symbol.for(C5);
var D6;
D6 = vr2;
var K5 = "AI_NoSuchModelError";
var R4 = `vercel.ai.error.${K5}`;
var ur2 = Symbol.for(R4);
var w7;
w7 = ur2;
var B5 = "AI_TooManyEmbeddingValuesForCallError";
var F6 = `vercel.ai.error.${B5}`;
var yr2 = Symbol.for(F6);
var L5;
L5 = yr2;
var G6 = "AI_TypeValidationError";
var U4 = `vercel.ai.error.${G6}`;
var dr2 = Symbol.for(U4);
var q5;
var hr2 = class o4 extends a3 {
  constructor({ value: e2, cause: s2 }) {
    super({ name: G6, message: `Type validation failed: Value: ${JSON.stringify(e2)}.
Error message: ${p4(s2)}`, cause: s2 }), this[q5] = true, this.value = e2;
  }
  static isInstance(e2) {
    return a3.hasMarker(e2, U4);
  }
  static wrap({ value: e2, cause: s2 }) {
    return o4.isInstance(s2) && s2.value === e2 ? s2 : new o4({ value: e2, cause: s2 });
  }
};
q5 = dr2;
var xr2 = hr2;
var H5 = "AI_UnsupportedFunctionalityError";
var z5 = `vercel.ai.error.${H5}`;
var pr2 = Symbol.for(z5);
var Q5;
Q5 = pr2;

// https://esm.sh/nanoid@3.3.11/denonext/non-secure.development.mjs
var h7 = (t2, e2 = 21) => (l6 = e2) => {
  let r17 = "", n2 = l6 | 0;
  for (; n2--; ) r17 += t2[Math.random() * t2.length | 0];
  return r17;
};

// https://esm.sh/secure-json-parse@2.7.0/denonext/secure-json-parse.development.mjs
import { Buffer as __Buffer$2 } from "node:buffer";
var F7 = Object.create;
var l5 = Object.defineProperty;
var b6 = Object.getOwnPropertyDescriptor;
var g6 = Object.getOwnPropertyNames;
var j8 = Object.getPrototypeOf;
var E7 = Object.prototype.hasOwnProperty;
var k8 = (r17, e2) => () => (e2 || r17((e2 = { exports: {} }).exports, e2), e2.exports);
var O5 = (r17, e2, t2, o5) => {
  if (e2 && typeof e2 == "object" || typeof e2 == "function") for (let n2 of g6(e2)) !E7.call(r17, n2) && n2 !== t2 && l5(r17, n2, { get: () => e2[n2], enumerable: !(o5 = b6(e2, n2)) || o5.enumerable });
  return r17;
};
var w8 = (r17, e2, t2) => (t2 = r17 != null ? F7(j8(r17)) : {}, O5(e2 || !r17 || !r17.__esModule ? l5(t2, "default", { value: r17, enumerable: true }) : t2, r17));
var m7 = k8((B7, f4) => {
  "use strict";
  var L8 = typeof __Buffer$2 < "u", p5 = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/, y4 = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
  function d6(r17, e2, t2) {
    t2 == null && e2 !== null && typeof e2 == "object" && (t2 = e2, e2 = void 0), L8 && __Buffer$2.isBuffer(r17) && (r17 = r17.toString()), r17 && r17.charCodeAt(0) === 65279 && (r17 = r17.slice(1));
    let o5 = JSON.parse(r17, e2);
    if (o5 === null || typeof o5 != "object") return o5;
    let n2 = t2 && t2.protoAction || "error", c5 = t2 && t2.constructorAction || "error";
    if (n2 === "ignore" && c5 === "ignore") return o5;
    if (n2 !== "ignore" && c5 !== "ignore") {
      if (p5.test(r17) === false && y4.test(r17) === false) return o5;
    } else if (n2 !== "ignore" && c5 === "ignore") {
      if (p5.test(r17) === false) return o5;
    } else if (y4.test(r17) === false) return o5;
    return _6(o5, { protoAction: n2, constructorAction: c5, safe: t2 && t2.safe });
  }
  function _6(r17, { protoAction: e2 = "error", constructorAction: t2 = "error", safe: o5 } = {}) {
    let n2 = [r17];
    for (; n2.length; ) {
      let c5 = n2;
      n2 = [];
      for (let s2 of c5) {
        if (e2 !== "ignore" && Object.prototype.hasOwnProperty.call(s2, "__proto__")) {
          if (o5 === true) return null;
          if (e2 === "error") throw new SyntaxError("Object contains forbidden prototype property");
          delete s2.__proto__;
        }
        if (t2 !== "ignore" && Object.prototype.hasOwnProperty.call(s2, "constructor") && Object.prototype.hasOwnProperty.call(s2.constructor, "prototype")) {
          if (o5 === true) return null;
          if (t2 === "error") throw new SyntaxError("Object contains forbidden prototype property");
          delete s2.constructor;
        }
        for (let h9 in s2) {
          let a4 = s2[h9];
          a4 && typeof a4 == "object" && n2.push(a4);
        }
      }
    }
    return r17;
  }
  function i4(r17, e2, t2) {
    let o5 = Error.stackTraceLimit;
    Error.stackTraceLimit = 0;
    try {
      return d6(r17, e2, t2);
    } finally {
      Error.stackTraceLimit = o5;
    }
  }
  function T7(r17, e2) {
    let t2 = Error.stackTraceLimit;
    Error.stackTraceLimit = 0;
    try {
      return d6(r17, e2, { safe: true });
    } catch {
      return null;
    } finally {
      Error.stackTraceLimit = t2;
    }
  }
  f4.exports = i4;
  f4.exports.default = i4;
  f4.exports.parse = i4;
  f4.exports.safeParse = T7;
  f4.exports.scan = _6;
});
var u6 = w8(m7());
var { parse: S8, safeParse: A7, scan: x6 } = u6;
var C6 = u6.default ?? u6;

// https://esm.sh/@ai-sdk/provider-utils@2.2.8/denonext/provider-utils.development.mjs
function M6(e2) {
  return new ReadableStream({ async pull(t2) {
    try {
      let { value: r17, done: s2 } = await e2.next();
      s2 ? t2.close() : t2.enqueue(r17);
    } catch (r17) {
      t2.error(r17);
    }
  }, cancel() {
  } });
}
async function Q6(e2) {
  return e2 == null ? Promise.resolve() : new Promise((t2) => setTimeout(t2, e2));
}
var J7 = ({ prefix: e2, size: t2 = 16, alphabet: r17 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", separator: s2 = "-" } = {}) => {
  let o5 = h7(r17, t2);
  if (e2 == null) return o5;
  if (r17.includes(s2)) throw new fr2({ argument: "separator", message: `The separator "${s2}" must not be part of the alphabet "${r17}".` });
  return (u7) => `${e2}${s2}${o5(u7)}`;
};
var Z5 = J7();
function K6(e2) {
  return e2 == null ? "unknown error" : typeof e2 == "string" ? e2 : e2 instanceof Error ? e2.message : JSON.stringify(e2);
}
function h8(e2) {
  return e2 instanceof Error && (e2.name === "AbortError" || e2.name === "TimeoutError");
}
var T6 = Symbol.for("vercel.ai.validator");
function k9(e2) {
  return { [T6]: true, validate: e2 };
}
function L6(e2) {
  return typeof e2 == "object" && e2 !== null && T6 in e2 && e2[T6] === true && "validate" in e2;
}
function j9(e2) {
  return L6(e2) ? e2 : U5(e2);
}
function U5(e2) {
  return k9((t2) => {
    let r17 = e2.safeParse(t2);
    return r17.success ? { success: true, value: r17.data } : { success: false, error: r17.error };
  });
}
function A8({ value: e2, schema: t2 }) {
  let r17 = j9(t2);
  try {
    if (r17.validate == null) return { success: true, value: e2 };
    let s2 = r17.validate(e2);
    return s2.success ? s2 : { success: false, error: xr2.wrap({ value: e2, cause: s2.error }) };
  } catch (s2) {
    return { success: false, error: xr2.wrap({ value: e2, cause: s2 }) };
  }
}
function S9({ text: e2, schema: t2 }) {
  try {
    let r17 = C6.parse(e2);
    if (t2 == null) return { success: true, value: r17, rawValue: r17 };
    let s2 = A8({ value: r17, schema: t2 });
    return s2.success ? { ...s2, rawValue: r17 } : s2;
  } catch (r17) {
    return { success: false, error: gr3.isInstance(r17) ? r17 : new gr3({ text: e2, cause: r17 }) };
  }
}
var { btoa: V6, atob: W3 } = globalThis;
function Ae2(e2) {
  let t2 = e2.replace(/-/g, "+").replace(/_/g, "/"), r17 = W3(t2);
  return Uint8Array.from(r17, (s2) => s2.codePointAt(0));
}
function Se3(e2) {
  let t2 = "";
  for (let r17 = 0; r17 < e2.length; r17++) t2 += String.fromCodePoint(e2[r17]);
  return V6(t2);
}

// https://esm.sh/zod@3.25.76/denonext/zod.development.mjs
var __defProp2 = Object.defineProperty;
var __export2 = (target, all) => {
  for (var name17 in all)
    __defProp2(target, name17, { get: all[name17], enumerable: true });
};
var external_exports = {};
__export2(external_exports, {
  BRAND: () => BRAND,
  DIRTY: () => DIRTY,
  EMPTY_PATH: () => EMPTY_PATH,
  INVALID: () => INVALID,
  NEVER: () => NEVER,
  OK: () => OK,
  ParseStatus: () => ParseStatus,
  Schema: () => ZodType,
  ZodAny: () => ZodAny,
  ZodArray: () => ZodArray,
  ZodBigInt: () => ZodBigInt,
  ZodBoolean: () => ZodBoolean,
  ZodBranded: () => ZodBranded,
  ZodCatch: () => ZodCatch,
  ZodDate: () => ZodDate,
  ZodDefault: () => ZodDefault,
  ZodDiscriminatedUnion: () => ZodDiscriminatedUnion,
  ZodEffects: () => ZodEffects,
  ZodEnum: () => ZodEnum,
  ZodError: () => ZodError,
  ZodFirstPartyTypeKind: () => ZodFirstPartyTypeKind,
  ZodFunction: () => ZodFunction,
  ZodIntersection: () => ZodIntersection,
  ZodIssueCode: () => ZodIssueCode,
  ZodLazy: () => ZodLazy,
  ZodLiteral: () => ZodLiteral,
  ZodMap: () => ZodMap,
  ZodNaN: () => ZodNaN,
  ZodNativeEnum: () => ZodNativeEnum,
  ZodNever: () => ZodNever,
  ZodNull: () => ZodNull,
  ZodNullable: () => ZodNullable,
  ZodNumber: () => ZodNumber,
  ZodObject: () => ZodObject,
  ZodOptional: () => ZodOptional,
  ZodParsedType: () => ZodParsedType,
  ZodPipeline: () => ZodPipeline,
  ZodPromise: () => ZodPromise,
  ZodReadonly: () => ZodReadonly,
  ZodRecord: () => ZodRecord,
  ZodSchema: () => ZodType,
  ZodSet: () => ZodSet,
  ZodString: () => ZodString,
  ZodSymbol: () => ZodSymbol,
  ZodTransformer: () => ZodEffects,
  ZodTuple: () => ZodTuple,
  ZodType: () => ZodType,
  ZodUndefined: () => ZodUndefined,
  ZodUnion: () => ZodUnion,
  ZodUnknown: () => ZodUnknown,
  ZodVoid: () => ZodVoid,
  addIssueToContext: () => addIssueToContext,
  any: () => anyType,
  array: () => arrayType,
  bigint: () => bigIntType,
  boolean: () => booleanType,
  coerce: () => coerce,
  custom: () => custom,
  date: () => dateType,
  datetimeRegex: () => datetimeRegex,
  defaultErrorMap: () => en_default,
  discriminatedUnion: () => discriminatedUnionType,
  effect: () => effectsType,
  enum: () => enumType,
  function: () => functionType,
  getErrorMap: () => getErrorMap,
  getParsedType: () => getParsedType,
  instanceof: () => instanceOfType,
  intersection: () => intersectionType,
  isAborted: () => isAborted,
  isAsync: () => isAsync,
  isDirty: () => isDirty,
  isValid: () => isValid,
  late: () => late,
  lazy: () => lazyType,
  literal: () => literalType,
  makeIssue: () => makeIssue,
  map: () => mapType,
  nan: () => nanType,
  nativeEnum: () => nativeEnumType,
  never: () => neverType,
  null: () => nullType,
  nullable: () => nullableType,
  number: () => numberType,
  object: () => objectType,
  objectUtil: () => objectUtil,
  oboolean: () => oboolean,
  onumber: () => onumber,
  optional: () => optionalType,
  ostring: () => ostring,
  pipeline: () => pipelineType,
  preprocess: () => preprocessType,
  promise: () => promiseType,
  quotelessJson: () => quotelessJson,
  record: () => recordType,
  set: () => setType,
  setErrorMap: () => setErrorMap,
  strictObject: () => strictObjectType,
  string: () => stringType,
  symbol: () => symbolType,
  transformer: () => effectsType,
  tuple: () => tupleType,
  undefined: () => undefinedType,
  union: () => unionType,
  unknown: () => unknownType,
  util: () => util,
  void: () => voidType
});
var util;
(function(util2) {
  util2.assertEqual = (_6) => {
  };
  function assertIs(_arg) {
  }
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error();
  }
  util2.assertNever = assertNever;
  util2.arrayToEnum = (items) => {
    const obj = {};
    for (const item of items) {
      obj[item] = item;
    }
    return obj;
  };
  util2.getValidEnumValues = (obj) => {
    const validKeys = util2.objectKeys(obj).filter((k10) => typeof obj[obj[k10]] !== "number");
    const filtered = {};
    for (const k10 of validKeys) {
      filtered[k10] = obj[k10];
    }
    return util2.objectValues(filtered);
  };
  util2.objectValues = (obj) => {
    return util2.objectKeys(obj).map(function(e2) {
      return obj[e2];
    });
  };
  util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object2) => {
    const keys = [];
    for (const key in object2) {
      if (Object.prototype.hasOwnProperty.call(object2, key)) {
        keys.push(key);
      }
    }
    return keys;
  };
  util2.find = (arr, checker) => {
    for (const item of arr) {
      if (checker(item))
        return item;
    }
    return void 0;
  };
  util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
  }
  util2.joinValues = joinValues;
  util2.jsonStringifyReplacer = (_6, value) => {
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  };
})(util || (util = {}));
var objectUtil;
(function(objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => {
    return {
      ...first,
      ...second
      // second overwrites first
    };
  };
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]);
var getParsedType = (data) => {
  const t2 = typeof data;
  switch (t2) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      if (Array.isArray(data)) {
        return ZodParsedType.array;
      }
      if (data === null) {
        return ZodParsedType.null;
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return ZodParsedType.promise;
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return ZodParsedType.map;
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return ZodParsedType.set;
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return ZodParsedType.date;
      }
      return ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
};
var ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
var quotelessJson = (obj) => {
  const json = JSON.stringify(obj, null, 2);
  return json.replace(/"([^"]+)":/g, "$1:");
};
var ZodError = class _ZodError extends Error {
  get errors() {
    return this.issues;
  }
  constructor(issues) {
    super();
    this.issues = [];
    this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    };
    this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
    this.name = "ZodError";
    this.issues = issues;
  }
  format(_mapper) {
    const mapper = _mapper || function(issue) {
      return issue.message;
    };
    const fieldErrors = { _errors: [] };
    const processError = (error) => {
      for (const issue of error.issues) {
        if (issue.code === "invalid_union") {
          issue.unionErrors.map(processError);
        } else if (issue.code === "invalid_return_type") {
          processError(issue.returnTypeError);
        } else if (issue.code === "invalid_arguments") {
          processError(issue.argumentsError);
        } else if (issue.path.length === 0) {
          fieldErrors._errors.push(mapper(issue));
        } else {
          let curr = fieldErrors;
          let i4 = 0;
          while (i4 < issue.path.length) {
            const el = issue.path[i4];
            const terminal = i4 === issue.path.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || { _errors: [] };
            } else {
              curr[el] = curr[el] || { _errors: [] };
              curr[el]._errors.push(mapper(issue));
            }
            curr = curr[el];
            i4++;
          }
        }
      }
    };
    processError(this);
    return fieldErrors;
  }
  static assert(value) {
    if (!(value instanceof _ZodError)) {
      throw new Error(`Not a ZodError: ${value}`);
    }
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue) => issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of this.issues) {
      if (sub.path.length > 0) {
        const firstEl = sub.path[0];
        fieldErrors[firstEl] = fieldErrors[firstEl] || [];
        fieldErrors[firstEl].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
};
ZodError.create = (issues) => {
  const error = new ZodError(issues);
  return error;
};
var errorMap = (issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined) {
        message = "Required";
      } else {
        message = `Expected ${issue.expected}, received ${issue.received}`;
      }
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = `Invalid function arguments`;
      break;
    case ZodIssueCode.invalid_return_type:
      message = `Invalid function return type`;
      break;
    case ZodIssueCode.invalid_date:
      message = `Invalid date`;
      break;
    case ZodIssueCode.invalid_string:
      if (typeof issue.validation === "object") {
        if ("includes" in issue.validation) {
          message = `Invalid input: must include "${issue.validation.includes}"`;
          if (typeof issue.validation.position === "number") {
            message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
          }
        } else if ("startsWith" in issue.validation) {
          message = `Invalid input: must start with "${issue.validation.startsWith}"`;
        } else if ("endsWith" in issue.validation) {
          message = `Invalid input: must end with "${issue.validation.endsWith}"`;
        } else {
          util.assertNever(issue.validation);
        }
      } else if (issue.validation !== "regex") {
        message = `Invalid ${issue.validation}`;
      } else {
        message = "Invalid";
      }
      break;
    case ZodIssueCode.too_small:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "bigint")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "bigint")
        message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = `Intersection results could not be merged`;
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError;
      util.assertNever(issue);
  }
  return { message };
};
var en_default = errorMap;
var overrideErrorMap = en_default;
function setErrorMap(map) {
  overrideErrorMap = map;
}
function getErrorMap() {
  return overrideErrorMap;
}
var makeIssue = (params) => {
  const { data, path, errorMaps, issueData } = params;
  const fullPath = [...path, ...issueData.path || []];
  const fullIssue = {
    ...issueData,
    path: fullPath
  };
  if (issueData.message !== void 0) {
    return {
      ...issueData,
      path: fullPath,
      message: issueData.message
    };
  }
  let errorMessage = "";
  const maps = errorMaps.filter((m8) => !!m8).slice().reverse();
  for (const map of maps) {
    errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
  }
  return {
    ...issueData,
    path: fullPath,
    message: errorMessage
  };
};
var EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
  const overrideMap = getErrorMap();
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      // contextual error map is first priority
      ctx.schemaErrorMap,
      // then schema-bound map if available
      overrideMap,
      // then global override map
      overrideMap === en_default ? void 0 : en_default
      // then global default map
    ].filter((x8) => !!x8)
  });
  ctx.common.issues.push(issue);
}
var ParseStatus = class _ParseStatus {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid")
      this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted")
      this.value = "aborted";
  }
  static mergeArray(status, results) {
    const arrayValue = [];
    for (const s2 of results) {
      if (s2.status === "aborted")
        return INVALID;
      if (s2.status === "dirty")
        status.dirty();
      arrayValue.push(s2.value);
    }
    return { status: status.value, value: arrayValue };
  }
  static async mergeObjectAsync(status, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      const key = await pair.key;
      const value = await pair.value;
      syncPairs.push({
        key,
        value
      });
    }
    return _ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const { key, value } = pair;
      if (key.status === "aborted")
        return INVALID;
      if (value.status === "aborted")
        return INVALID;
      if (key.status === "dirty")
        status.dirty();
      if (value.status === "dirty")
        status.dirty();
      if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
        finalObject[key.value] = value.value;
      }
    }
    return { status: status.value, value: finalObject };
  }
};
var INVALID = Object.freeze({
  status: "aborted"
});
var DIRTY = (value) => ({ status: "dirty", value });
var OK = (value) => ({ status: "valid", value });
var isAborted = (x8) => x8.status === "aborted";
var isDirty = (x8) => x8.status === "dirty";
var isValid = (x8) => x8.status === "valid";
var isAsync = (x8) => typeof Promise !== "undefined" && x8 instanceof Promise;
var errorUtil;
(function(errorUtil2) {
  errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
  errorUtil2.toString = (message) => typeof message === "string" ? message : message?.message;
})(errorUtil || (errorUtil = {}));
var ParseInputLazyPath = class {
  constructor(parent, value, path, key) {
    this._cachedPath = [];
    this.parent = parent;
    this.data = value;
    this._path = path;
    this._key = key;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (Array.isArray(this._key)) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
};
var handleResult = (ctx, result) => {
  if (isValid(result)) {
    return { success: true, data: result.value };
  } else {
    if (!ctx.common.issues.length) {
      throw new Error("Validation failed but no issues detected.");
    }
    return {
      success: false,
      get error() {
        if (this._error)
          return this._error;
        const error = new ZodError(ctx.common.issues);
        this._error = error;
        return this._error;
      }
    };
  }
};
function processCreateParams(params) {
  if (!params)
    return {};
  const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
  if (errorMap2 && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap2)
    return { errorMap: errorMap2, description };
  const customMap = (iss, ctx) => {
    const { message } = params;
    if (iss.code === "invalid_enum_value") {
      return { message: message ?? ctx.defaultError };
    }
    if (typeof ctx.data === "undefined") {
      return { message: message ?? required_error ?? ctx.defaultError };
    }
    if (iss.code !== "invalid_type")
      return { message: ctx.defaultError };
    return { message: message ?? invalid_type_error ?? ctx.defaultError };
  };
  return { errorMap: customMap, description };
}
var ZodType = class {
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus(),
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    const result = this._parse(input);
    if (isAsync(result)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return result;
  }
  _parseAsync(input) {
    const result = this._parse(input);
    return Promise.resolve(result);
  }
  parse(data, params) {
    const result = this.safeParse(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    const ctx = {
      common: {
        issues: [],
        async: params?.async ?? false,
        contextualErrorMap: params?.errorMap
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const result = this._parseSync({ data, path: ctx.path, parent: ctx });
    return handleResult(ctx, result);
  }
  "~validate"(data) {
    const ctx = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    if (!this["~standard"].async) {
      try {
        const result = this._parseSync({ data, path: [], parent: ctx });
        return isValid(result) ? {
          value: result.value
        } : {
          issues: ctx.common.issues
        };
      } catch (err) {
        if (err?.message?.toLowerCase()?.includes("encountered")) {
          this["~standard"].async = true;
        }
        ctx.common = {
          issues: [],
          async: true
        };
      }
    }
    return this._parseAsync({ data, path: [], parent: ctx }).then((result) => isValid(result) ? {
      value: result.value
    } : {
      issues: ctx.common.issues
    });
  }
  async parseAsync(data, params) {
    const result = await this.safeParseAsync(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  async safeParseAsync(data, params) {
    const ctx = {
      common: {
        issues: [],
        contextualErrorMap: params?.errorMap,
        async: true
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
    const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  refine(check, message) {
    const getIssueProperties = (val) => {
      if (typeof message === "string" || typeof message === "undefined") {
        return { message };
      } else if (typeof message === "function") {
        return message(val);
      } else {
        return message;
      }
    };
    return this._refinement((val, ctx) => {
      const result = check(val);
      const setError = () => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      });
      if (typeof Promise !== "undefined" && result instanceof Promise) {
        return result.then((data) => {
          if (!data) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      if (!result) {
        setError();
        return false;
      } else {
        return true;
      }
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => {
      if (!check(val)) {
        ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
        return false;
      } else {
        return true;
      }
    });
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  constructor(def) {
    this.spa = this.safeParseAsync;
    this._def = def;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.readonly = this.readonly.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
    this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: (data) => this["~validate"](data)
    };
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform }
    });
  }
  default(def) {
    const defaultValueFunc = typeof def === "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    const catchValueFunc = typeof def === "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(description) {
    const This = this.constructor;
    return new This({
      ...this._def,
      description
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  readonly() {
    return ZodReadonly.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
};
var cuidRegex = /^c[^\s-]{8,}$/i;
var cuid2Regex = /^[0-9a-z]+$/;
var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var nanoidRegex = /^[a-z0-9_-]{21}$/i;
var jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
var durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
var emojiRegex;
var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
var ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
var ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
var base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
var dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
var dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
  let secondsRegexSource = `[0-5]\\d`;
  if (args.precision) {
    secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
  } else if (args.precision == null) {
    secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
  }
  const secondsQuantifier = args.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
}
function timeRegex(args) {
  return new RegExp(`^${timeRegexSource(args)}$`);
}
function datetimeRegex(args) {
  let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
  const opts = [];
  opts.push(args.local ? `Z?` : `Z`);
  if (args.offset)
    opts.push(`([+-]\\d{2}:?\\d{2})`);
  regex = `${regex}(${opts.join("|")})`;
  return new RegExp(`^${regex}$`);
}
function isValidIP(ip, version) {
  if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
}
function isValidJWT(jwt, alg) {
  if (!jwtRegex.test(jwt))
    return false;
  try {
    const [header] = jwt.split(".");
    if (!header)
      return false;
    const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
    const decoded = JSON.parse(atob(base64));
    if (typeof decoded !== "object" || decoded === null)
      return false;
    if ("typ" in decoded && decoded?.typ !== "JWT")
      return false;
    if (!decoded.alg)
      return false;
    if (alg && decoded.alg !== alg)
      return false;
    return true;
  } catch {
    return false;
  }
}
function isValidCidr(ip, version) {
  if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) {
    return true;
  }
  return false;
}
var ZodString = class _ZodString extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = String(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.string) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.string,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.length < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.length > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "length") {
        const tooBig = input.data.length > check.value;
        const tooSmall = input.data.length < check.value;
        if (tooBig || tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          if (tooBig) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          } else if (tooSmall) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          }
          status.dirty();
        }
      } else if (check.kind === "email") {
        if (!emailRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "email",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "emoji") {
        if (!emojiRegex) {
          emojiRegex = new RegExp(_emojiRegex, "u");
        }
        if (!emojiRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "emoji",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "uuid") {
        if (!uuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "uuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "nanoid") {
        if (!nanoidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "nanoid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid") {
        if (!cuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid2") {
        if (!cuid2Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid2",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ulid") {
        if (!ulidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ulid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "url") {
        try {
          new URL(input.data);
        } catch {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "regex") {
        check.regex.lastIndex = 0;
        const testResult = check.regex.test(input.data);
        if (!testResult) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "regex",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "trim") {
        input.data = input.data.trim();
      } else if (check.kind === "includes") {
        if (!input.data.includes(check.value, check.position)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { includes: check.value, position: check.position },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "toLowerCase") {
        input.data = input.data.toLowerCase();
      } else if (check.kind === "toUpperCase") {
        input.data = input.data.toUpperCase();
      } else if (check.kind === "startsWith") {
        if (!input.data.startsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { startsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "endsWith") {
        if (!input.data.endsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { endsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "datetime") {
        const regex = datetimeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "datetime",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "date") {
        const regex = dateRegex;
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "date",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "time") {
        const regex = timeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "time",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "duration") {
        if (!durationRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "duration",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ip") {
        if (!isValidIP(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ip",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "jwt") {
        if (!isValidJWT(input.data, check.alg)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "jwt",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cidr") {
        if (!isValidCidr(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cidr",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64") {
        if (!base64Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64url") {
        if (!base64urlRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _regex(regex, validation, message) {
    return this.refinement((data) => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    });
  }
  _addCheck(check) {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  email(message) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
  }
  url(message) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
  }
  emoji(message) {
    return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
  }
  uuid(message) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
  }
  nanoid(message) {
    return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
  }
  cuid(message) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
  }
  cuid2(message) {
    return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
  }
  ulid(message) {
    return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
  }
  base64(message) {
    return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
  }
  base64url(message) {
    return this._addCheck({
      kind: "base64url",
      ...errorUtil.errToObj(message)
    });
  }
  jwt(options) {
    return this._addCheck({ kind: "jwt", ...errorUtil.errToObj(options) });
  }
  ip(options) {
    return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
  }
  cidr(options) {
    return this._addCheck({ kind: "cidr", ...errorUtil.errToObj(options) });
  }
  datetime(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        local: false,
        message: options
      });
    }
    return this._addCheck({
      kind: "datetime",
      precision: typeof options?.precision === "undefined" ? null : options?.precision,
      offset: options?.offset ?? false,
      local: options?.local ?? false,
      ...errorUtil.errToObj(options?.message)
    });
  }
  date(message) {
    return this._addCheck({ kind: "date", message });
  }
  time(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "time",
        precision: null,
        message: options
      });
    }
    return this._addCheck({
      kind: "time",
      precision: typeof options?.precision === "undefined" ? null : options?.precision,
      ...errorUtil.errToObj(options?.message)
    });
  }
  duration(message) {
    return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message)
    });
  }
  includes(value, options) {
    return this._addCheck({
      kind: "includes",
      value,
      position: options?.position,
      ...errorUtil.errToObj(options?.message)
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(message) {
    return this.min(1, errorUtil.errToObj(message));
  }
  trim() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((ch) => ch.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((ch) => ch.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((ch) => ch.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((ch) => ch.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((ch) => ch.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((ch) => ch.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((ch) => ch.kind === "base64url");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodString.create = (params) => {
  return new ZodString({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    coerce: params?.coerce ?? false,
    ...processCreateParams(params)
  });
};
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / 10 ** decCount;
}
var ZodNumber = class _ZodNumber extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = Number(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.number) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "int") {
        if (!util.isInteger(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: "integer",
            received: "float",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (floatSafeRemainder(input.data, check.value) !== 0) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "finite") {
        if (!Number.isFinite(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_finite,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
  get isInt() {
    return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null;
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
        return true;
      } else if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      } else if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
};
ZodNumber.create = (params) => {
  return new ZodNumber({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodNumber,
    coerce: params?.coerce || false,
    ...processCreateParams(params)
  });
};
var ZodBigInt = class _ZodBigInt extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(input) {
    if (this._def.coerce) {
      try {
        input.data = BigInt(input.data);
      } catch {
        return this._getInvalidInput(input);
      }
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.bigint) {
      return this._getInvalidInput(input);
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            type: "bigint",
            minimum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            type: "bigint",
            maximum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (input.data % check.value !== BigInt(0)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _getInvalidInput(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.bigint,
      received: ctx.parsedType
    });
    return INVALID;
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodBigInt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodBigInt.create = (params) => {
  return new ZodBigInt({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    coerce: params?.coerce ?? false,
    ...processCreateParams(params)
  });
};
var ZodBoolean = class extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = Boolean(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodBoolean.create = (params) => {
  return new ZodBoolean({
    typeName: ZodFirstPartyTypeKind.ZodBoolean,
    coerce: params?.coerce || false,
    ...processCreateParams(params)
  });
};
var ZodDate = class _ZodDate extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = new Date(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.date) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    if (Number.isNaN(input.data.getTime())) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.getTime() < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            message: check.message,
            inclusive: true,
            exact: false,
            minimum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.getTime() > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            message: check.message,
            inclusive: true,
            exact: false,
            maximum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check) {
    return new _ZodDate({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max != null ? new Date(max) : null;
  }
};
ZodDate.create = (params) => {
  return new ZodDate({
    checks: [],
    coerce: params?.coerce || false,
    typeName: ZodFirstPartyTypeKind.ZodDate,
    ...processCreateParams(params)
  });
};
var ZodSymbol = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodSymbol.create = (params) => {
  return new ZodSymbol({
    typeName: ZodFirstPartyTypeKind.ZodSymbol,
    ...processCreateParams(params)
  });
};
var ZodUndefined = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodUndefined.create = (params) => {
  return new ZodUndefined({
    typeName: ZodFirstPartyTypeKind.ZodUndefined,
    ...processCreateParams(params)
  });
};
var ZodNull = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodNull.create = (params) => {
  return new ZodNull({
    typeName: ZodFirstPartyTypeKind.ZodNull,
    ...processCreateParams(params)
  });
};
var ZodAny = class extends ZodType {
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodAny.create = (params) => {
  return new ZodAny({
    typeName: ZodFirstPartyTypeKind.ZodAny,
    ...processCreateParams(params)
  });
};
var ZodUnknown = class extends ZodType {
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodUnknown.create = (params) => {
  return new ZodUnknown({
    typeName: ZodFirstPartyTypeKind.ZodUnknown,
    ...processCreateParams(params)
  });
};
var ZodNever = class extends ZodType {
  _parse(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    });
    return INVALID;
  }
};
ZodNever.create = (params) => {
  return new ZodNever({
    typeName: ZodFirstPartyTypeKind.ZodNever,
    ...processCreateParams(params)
  });
};
var ZodVoid = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodVoid.create = (params) => {
  return new ZodVoid({
    typeName: ZodFirstPartyTypeKind.ZodVoid,
    ...processCreateParams(params)
  });
};
var ZodArray = class _ZodArray extends ZodType {
  _parse(input) {
    const { ctx, status } = this._processInputParams(input);
    const def = this._def;
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value;
      const tooSmall = ctx.data.length < def.exactLength.value;
      if (tooBig || tooSmall) {
        addIssueToContext(ctx, {
          code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
          minimum: tooSmall ? def.exactLength.value : void 0,
          maximum: tooBig ? def.exactLength.value : void 0,
          type: "array",
          inclusive: true,
          exact: true,
          message: def.exactLength.message
        });
        status.dirty();
      }
    }
    if (def.minLength !== null) {
      if (ctx.data.length < def.minLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.minLength.message
        });
        status.dirty();
      }
    }
    if (def.maxLength !== null) {
      if (ctx.data.length > def.maxLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.maxLength.message
        });
        status.dirty();
      }
    }
    if (ctx.common.async) {
      return Promise.all([...ctx.data].map((item, i4) => {
        return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i4));
      })).then((result2) => {
        return ParseStatus.mergeArray(status, result2);
      });
    }
    const result = [...ctx.data].map((item, i4) => {
      return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i4));
    });
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new _ZodArray({
      ...this._def,
      minLength: { value: minLength, message: errorUtil.toString(message) }
    });
  }
  max(maxLength, message) {
    return new _ZodArray({
      ...this._def,
      maxLength: { value: maxLength, message: errorUtil.toString(message) }
    });
  }
  length(len, message) {
    return new _ZodArray({
      ...this._def,
      exactLength: { value: len, message: errorUtil.toString(message) }
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodArray.create = (schema, params) => {
  return new ZodArray({
    type: schema,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ZodFirstPartyTypeKind.ZodArray,
    ...processCreateParams(params)
  });
};
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else if (schema instanceof ZodArray) {
    return new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element)
    });
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
  } else {
    return schema;
  }
}
var ZodObject = class _ZodObject extends ZodType {
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const shape = this._def.shape();
    const keys = util.objectKeys(shape);
    this._cached = { shape, keys };
    return this._cached;
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.object) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const { status, ctx } = this._processInputParams(input);
    const { shape, keys: shapeKeys } = this._getCached();
    const extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
      for (const key in ctx.data) {
        if (!shapeKeys.includes(key)) {
          extraKeys.push(key);
        }
      }
    }
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key];
      const value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough") {
        for (const key of extraKeys) {
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] }
          });
        }
      } else if (unknownKeys === "strict") {
        if (extraKeys.length > 0) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.unrecognized_keys,
            keys: extraKeys
          });
          status.dirty();
        }
      } else if (unknownKeys === "strip") {
      } else {
        throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
      }
    } else {
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(
            new ParseInputLazyPath(ctx, value, ctx.path, key)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: key in ctx.data
        });
      }
    }
    if (ctx.common.async) {
      return Promise.resolve().then(async () => {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          syncPairs.push({
            key,
            value,
            alwaysSet: pair.alwaysSet
          });
        }
        return syncPairs;
      }).then((syncPairs) => {
        return ParseStatus.mergeObjectSync(status, syncPairs);
      });
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    errorUtil.errToObj;
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...message !== void 0 ? {
        errorMap: (issue, ctx) => {
          const defaultError = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
          if (issue.code === "unrecognized_keys")
            return {
              message: errorUtil.errToObj(message).message ?? defaultError
            };
          return {
            message: defaultError
          };
        }
      } : {}
    });
  }
  strip() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(augmentation) {
    return new _ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(merging) {
    const merged = new _ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
    return merged;
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(key, schema) {
    return this.augment({ [key]: schema });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(index) {
    return new _ZodObject({
      ...this._def,
      catchall: index
    });
  }
  pick(mask) {
    const shape = {};
    for (const key of util.objectKeys(mask)) {
      if (mask[key] && this.shape[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  omit(mask) {
    const shape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (!mask[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      const fieldSchema = this.shape[key];
      if (mask && !mask[key]) {
        newShape[key] = fieldSchema;
      } else {
        newShape[key] = fieldSchema.optional();
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  required(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (mask && !mask[key]) {
        newShape[key] = this.shape[key];
      } else {
        const fieldSchema = this.shape[key];
        let newField = fieldSchema;
        while (newField instanceof ZodOptional) {
          newField = newField._def.innerType;
        }
        newShape[key] = newField;
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
};
ZodObject.create = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.strictCreate = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strict",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.lazycreate = (shape, params) => {
  return new ZodObject({
    shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
var ZodUnion = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const options = this._def.options;
    function handleResults(results) {
      for (const result of results) {
        if (result.result.status === "valid") {
          return result.result;
        }
      }
      for (const result of results) {
        if (result.result.status === "dirty") {
          ctx.common.issues.push(...result.ctx.common.issues);
          return result.result;
        }
      }
      const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return Promise.all(options.map(async (option) => {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    } else {
      let dirty = void 0;
      const issues = [];
      for (const option of options) {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        const result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid") {
          return result;
        } else if (result.status === "dirty" && !dirty) {
          dirty = { result, ctx: childCtx };
        }
        if (childCtx.common.issues.length) {
          issues.push(childCtx.common.issues);
        }
      }
      if (dirty) {
        ctx.common.issues.push(...dirty.ctx.common.issues);
        return dirty.result;
      }
      const unionErrors = issues.map((issues2) => new ZodError(issues2));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
};
ZodUnion.create = (types, params) => {
  return new ZodUnion({
    options: types,
    typeName: ZodFirstPartyTypeKind.ZodUnion,
    ...processCreateParams(params)
  });
};
var getDiscriminator = (type) => {
  if (type instanceof ZodLazy) {
    return getDiscriminator(type.schema);
  } else if (type instanceof ZodEffects) {
    return getDiscriminator(type.innerType());
  } else if (type instanceof ZodLiteral) {
    return [type.value];
  } else if (type instanceof ZodEnum) {
    return type.options;
  } else if (type instanceof ZodNativeEnum) {
    return util.objectValues(type.enum);
  } else if (type instanceof ZodDefault) {
    return getDiscriminator(type._def.innerType);
  } else if (type instanceof ZodUndefined) {
    return [void 0];
  } else if (type instanceof ZodNull) {
    return [null];
  } else if (type instanceof ZodOptional) {
    return [void 0, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodNullable) {
    return [null, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodBranded) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodReadonly) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodCatch) {
    return getDiscriminator(type._def.innerType);
  } else {
    return [];
  }
};
var ZodDiscriminatedUnion = class _ZodDiscriminatedUnion extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const discriminator = this.discriminator;
    const discriminatorValue = ctx.data[discriminator];
    const option = this.optionsMap.get(discriminatorValue);
    if (!option) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [discriminator]
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return option._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    } else {
      return option._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(discriminator, options, params) {
    const optionsMap = /* @__PURE__ */ new Map();
    for (const type of options) {
      const discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues.length) {
        throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
      }
      for (const value of discriminatorValues) {
        if (optionsMap.has(value)) {
          throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
        }
        optionsMap.set(value, type);
      }
    }
    return new _ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap,
      ...processCreateParams(params)
    });
  }
};
function mergeValues(a4, b7) {
  const aType = getParsedType(a4);
  const bType = getParsedType(b7);
  if (a4 === b7) {
    return { valid: true, data: a4 };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b7);
    const sharedKeys = util.objectKeys(a4).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a4, ...b7 };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a4[key], b7[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a4.length !== b7.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index = 0; index < a4.length; index++) {
      const itemA = a4[index];
      const itemB = b7[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a4 === +b7) {
    return { valid: true, data: a4 };
  } else {
    return { valid: false };
  }
}
var ZodIntersection = class extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const handleParsed = (parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight)) {
        return INVALID;
      }
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      if (!merged.valid) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_intersection_types
        });
        return INVALID;
      }
      if (isDirty(parsedLeft) || isDirty(parsedRight)) {
        status.dirty();
      }
      return { status: status.value, value: merged.data };
    };
    if (ctx.common.async) {
      return Promise.all([
        this._def.left._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }),
        this._def.right._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        })
      ]).then(([left, right]) => handleParsed(left, right));
    } else {
      return handleParsed(this._def.left._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }), this._def.right._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }));
    }
  }
};
ZodIntersection.create = (left, right, params) => {
  return new ZodIntersection({
    left,
    right,
    typeName: ZodFirstPartyTypeKind.ZodIntersection,
    ...processCreateParams(params)
  });
};
var ZodTuple = class _ZodTuple extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (ctx.data.length < this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      return INVALID;
    }
    const rest = this._def.rest;
    if (!rest && ctx.data.length > this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      status.dirty();
    }
    const items = [...ctx.data].map((item, itemIndex) => {
      const schema = this._def.items[itemIndex] || this._def.rest;
      if (!schema)
        return null;
      return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
    }).filter((x8) => !!x8);
    if (ctx.common.async) {
      return Promise.all(items).then((results) => {
        return ParseStatus.mergeArray(status, results);
      });
    } else {
      return ParseStatus.mergeArray(status, items);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new _ZodTuple({
      ...this._def,
      rest
    });
  }
};
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};
var ZodRecord = class _ZodRecord extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const pairs = [];
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    for (const key in ctx.data) {
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (ctx.common.async) {
      return ParseStatus.mergeObjectAsync(status, pairs);
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    if (second instanceof ZodType) {
      return new _ZodRecord({
        keyType: first,
        valueType: second,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(third)
      });
    }
    return new _ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second)
    });
  }
};
var ZodMap = class extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    const pairs = [...ctx.data.entries()].map(([key, value], index) => {
      return {
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
        value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
      };
    });
    if (ctx.common.async) {
      const finalMap = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      });
    } else {
      const finalMap = /* @__PURE__ */ new Map();
      for (const pair of pairs) {
        const key = pair.key;
        const value = pair.value;
        if (key.status === "aborted" || value.status === "aborted") {
          return INVALID;
        }
        if (key.status === "dirty" || value.status === "dirty") {
          status.dirty();
        }
        finalMap.set(key.value, value.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
};
ZodMap.create = (keyType, valueType, params) => {
  return new ZodMap({
    valueType,
    keyType,
    typeName: ZodFirstPartyTypeKind.ZodMap,
    ...processCreateParams(params)
  });
};
var ZodSet = class _ZodSet extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const def = this._def;
    if (def.minSize !== null) {
      if (ctx.data.size < def.minSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.minSize.message
        });
        status.dirty();
      }
    }
    if (def.maxSize !== null) {
      if (ctx.data.size > def.maxSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.maxSize.message
        });
        status.dirty();
      }
    }
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = /* @__PURE__ */ new Set();
      for (const element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        if (element.status === "dirty")
          status.dirty();
        parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }
    const elements = [...ctx.data.values()].map((item, i4) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i4)));
    if (ctx.common.async) {
      return Promise.all(elements).then((elements2) => finalizeSet(elements2));
    } else {
      return finalizeSet(elements);
    }
  }
  min(minSize, message) {
    return new _ZodSet({
      ...this._def,
      minSize: { value: minSize, message: errorUtil.toString(message) }
    });
  }
  max(maxSize, message) {
    return new _ZodSet({
      ...this._def,
      maxSize: { value: maxSize, message: errorUtil.toString(message) }
    });
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodSet.create = (valueType, params) => {
  return new ZodSet({
    valueType,
    minSize: null,
    maxSize: null,
    typeName: ZodFirstPartyTypeKind.ZodSet,
    ...processCreateParams(params)
  });
};
var ZodFunction = class _ZodFunction extends ZodType {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      });
      return INVALID;
    }
    function makeArgsIssue(args, error) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x8) => !!x8),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error
        }
      });
    }
    function makeReturnsIssue(returns, error) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x8) => !!x8),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error
        }
      });
    }
    const params = { errorMap: ctx.common.contextualErrorMap };
    const fn = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      const me2 = this;
      return OK(async function(...args) {
        const error = new ZodError([]);
        const parsedArgs = await me2._def.args.parseAsync(args, params).catch((e2) => {
          error.addIssue(makeArgsIssue(args, e2));
          throw error;
        });
        const result = await Reflect.apply(fn, this, parsedArgs);
        const parsedReturns = await me2._def.returns._def.type.parseAsync(result, params).catch((e2) => {
          error.addIssue(makeReturnsIssue(result, e2));
          throw error;
        });
        return parsedReturns;
      });
    } else {
      const me2 = this;
      return OK(function(...args) {
        const parsedArgs = me2._def.args.safeParse(args, params);
        if (!parsedArgs.success) {
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        }
        const result = Reflect.apply(fn, this, parsedArgs.data);
        const parsedReturns = me2._def.returns.safeParse(result, params);
        if (!parsedReturns.success) {
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        }
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new _ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new _ZodFunction({
      ...this._def,
      returns: returnType
    });
  }
  implement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  strictImplement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  static create(args, returns, params) {
    return new _ZodFunction({
      args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(params)
    });
  }
};
var ZodLazy = class extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const lazySchema = this._def.getter();
    return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
};
ZodLazy.create = (getter, params) => {
  return new ZodLazy({
    getter,
    typeName: ZodFirstPartyTypeKind.ZodLazy,
    ...processCreateParams(params)
  });
};
var ZodLiteral = class extends ZodType {
  _parse(input) {
    if (input.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
  get value() {
    return this._def.value;
  }
};
ZodLiteral.create = (value, params) => {
  return new ZodLiteral({
    value,
    typeName: ZodFirstPartyTypeKind.ZodLiteral,
    ...processCreateParams(params)
  });
};
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}
var ZodEnum = class _ZodEnum extends ZodType {
  _parse(input) {
    if (typeof input.data !== "string") {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(this._def.values);
    }
    if (!this._cache.has(input.data)) {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  extract(values, newDef = this._def) {
    return _ZodEnum.create(values, {
      ...this._def,
      ...newDef
    });
  }
  exclude(values, newDef = this._def) {
    return _ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
      ...this._def,
      ...newDef
    });
  }
};
ZodEnum.create = createZodEnum;
var ZodNativeEnum = class extends ZodType {
  _parse(input) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values);
    const ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(util.getValidEnumValues(this._def.values));
    }
    if (!this._cache.has(input.data)) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
};
ZodNativeEnum.create = (values, params) => {
  return new ZodNativeEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
    ...processCreateParams(params)
  });
};
var ZodPromise = class extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then((data) => {
      return this._def.type.parseAsync(data, {
        path: ctx.path,
        errorMap: ctx.common.contextualErrorMap
      });
    }));
  }
};
ZodPromise.create = (schema, params) => {
  return new ZodPromise({
    type: schema,
    typeName: ZodFirstPartyTypeKind.ZodPromise,
    ...processCreateParams(params)
  });
};
var ZodEffects = class extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const effect = this._def.effect || null;
    const checkCtx = {
      addIssue: (arg) => {
        addIssueToContext(ctx, arg);
        if (arg.fatal) {
          status.abort();
        } else {
          status.dirty();
        }
      },
      get path() {
        return ctx.path;
      }
    };
    checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
    if (effect.type === "preprocess") {
      const processed = effect.transform(ctx.data, checkCtx);
      if (ctx.common.async) {
        return Promise.resolve(processed).then(async (processed2) => {
          if (status.value === "aborted")
            return INVALID;
          const result = await this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
          if (result.status === "aborted")
            return INVALID;
          if (result.status === "dirty")
            return DIRTY(result.value);
          if (status.value === "dirty")
            return DIRTY(result.value);
          return result;
        });
      } else {
        if (status.value === "aborted")
          return INVALID;
        const result = this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
        if (result.status === "aborted")
          return INVALID;
        if (result.status === "dirty")
          return DIRTY(result.value);
        if (status.value === "dirty")
          return DIRTY(result.value);
        return result;
      }
    }
    if (effect.type === "refinement") {
      const executeRefinement = (acc) => {
        const result = effect.refinement(acc, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(result);
        }
        if (result instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return acc;
      };
      if (ctx.common.async === false) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inner.status === "aborted")
          return INVALID;
        if (inner.status === "dirty")
          status.dirty();
        executeRefinement(inner.value);
        return { status: status.value, value: inner.value };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          return executeRefinement(inner.value).then(() => {
            return { status: status.value, value: inner.value };
          });
        });
      }
    }
    if (effect.type === "transform") {
      if (ctx.common.async === false) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base))
          return INVALID;
        const result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise) {
          throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
        }
        return { status: status.value, value: result };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
          if (!isValid(base))
            return INVALID;
          return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({
            status: status.value,
            value: result
          }));
        });
      }
    }
    util.assertNever(effect);
  }
};
ZodEffects.create = (schema, effect, params) => {
  return new ZodEffects({
    schema,
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    effect,
    ...processCreateParams(params)
  });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
  return new ZodEffects({
    schema,
    effect: { type: "preprocess", transform: preprocess },
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    ...processCreateParams(params)
  });
};
var ZodOptional = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.undefined) {
      return OK(void 0);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodOptional.create = (type, params) => {
  return new ZodOptional({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodOptional,
    ...processCreateParams(params)
  });
};
var ZodNullable = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.null) {
      return OK(null);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodNullable.create = (type, params) => {
  return new ZodNullable({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodNullable,
    ...processCreateParams(params)
  });
};
var ZodDefault = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    let data = ctx.data;
    if (ctx.parsedType === ZodParsedType.undefined) {
      data = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
};
ZodDefault.create = (type, params) => {
  return new ZodDefault({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodDefault,
    defaultValue: typeof params.default === "function" ? params.default : () => params.default,
    ...processCreateParams(params)
  });
};
var ZodCatch = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    };
    const result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    if (isAsync(result)) {
      return result.then((result2) => {
        return {
          status: "valid",
          value: result2.status === "valid" ? result2.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      });
    } else {
      return {
        status: "valid",
        value: result.status === "valid" ? result.value : this._def.catchValue({
          get error() {
            return new ZodError(newCtx.common.issues);
          },
          input: newCtx.data
        })
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
};
ZodCatch.create = (type, params) => {
  return new ZodCatch({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodCatch,
    catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
    ...processCreateParams(params)
  });
};
var ZodNaN = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
};
ZodNaN.create = (params) => {
  return new ZodNaN({
    typeName: ZodFirstPartyTypeKind.ZodNaN,
    ...processCreateParams(params)
  });
};
var BRAND = Symbol("zod_brand");
var ZodBranded = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
};
var ZodPipeline = class _ZodPipeline extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.common.async) {
      const handleAsync = async () => {
        const inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return DIRTY(inResult.value);
        } else {
          return this._def.out._parseAsync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      };
      return handleAsync();
    } else {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      if (inResult.status === "aborted")
        return INVALID;
      if (inResult.status === "dirty") {
        status.dirty();
        return {
          status: "dirty",
          value: inResult.value
        };
      } else {
        return this._def.out._parseSync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      }
    }
  }
  static create(a4, b7) {
    return new _ZodPipeline({
      in: a4,
      out: b7,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
};
var ZodReadonly = class extends ZodType {
  _parse(input) {
    const result = this._def.innerType._parse(input);
    const freeze = (data) => {
      if (isValid(data)) {
        data.value = Object.freeze(data.value);
      }
      return data;
    };
    return isAsync(result) ? result.then((data) => freeze(data)) : freeze(result);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodReadonly.create = (type, params) => {
  return new ZodReadonly({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodReadonly,
    ...processCreateParams(params)
  });
};
function cleanParams(params, data) {
  const p5 = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
  const p22 = typeof p5 === "string" ? { message: p5 } : p5;
  return p22;
}
function custom(check, _params = {}, fatal) {
  if (check)
    return ZodAny.create().superRefine((data, ctx) => {
      const r17 = check(data);
      if (r17 instanceof Promise) {
        return r17.then((r22) => {
          if (!r22) {
            const params = cleanParams(_params, data);
            const _fatal = params.fatal ?? fatal ?? true;
            ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
          }
        });
      }
      if (!r17) {
        const params = cleanParams(_params, data);
        const _fatal = params.fatal ?? fatal ?? true;
        ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
      }
      return;
    });
  return ZodAny.create();
}
var late = {
  object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
  ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
  ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
  ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
  ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
  ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
  ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
  ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
  ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
  ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
  ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
  ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
  ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
  ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
  ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
  ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
  ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
  ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
  ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
  ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
  ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
  ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
  ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
  ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
  ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
  ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
  ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
  ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
  ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
  ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
  ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
  ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
  ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
  ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
  ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
  ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var instanceOfType = (cls, params = {
  message: `Input not instance of ${cls.name}`
}) => custom((data) => data instanceof cls, params);
var stringType = ZodString.create;
var numberType = ZodNumber.create;
var nanType = ZodNaN.create;
var bigIntType = ZodBigInt.create;
var booleanType = ZodBoolean.create;
var dateType = ZodDate.create;
var symbolType = ZodSymbol.create;
var undefinedType = ZodUndefined.create;
var nullType = ZodNull.create;
var anyType = ZodAny.create;
var unknownType = ZodUnknown.create;
var neverType = ZodNever.create;
var voidType = ZodVoid.create;
var arrayType = ZodArray.create;
var objectType = ZodObject.create;
var strictObjectType = ZodObject.strictCreate;
var unionType = ZodUnion.create;
var discriminatedUnionType = ZodDiscriminatedUnion.create;
var intersectionType = ZodIntersection.create;
var tupleType = ZodTuple.create;
var recordType = ZodRecord.create;
var mapType = ZodMap.create;
var setType = ZodSet.create;
var functionType = ZodFunction.create;
var lazyType = ZodLazy.create;
var literalType = ZodLiteral.create;
var enumType = ZodEnum.create;
var nativeEnumType = ZodNativeEnum.create;
var promiseType = ZodPromise.create;
var effectsType = ZodEffects.create;
var optionalType = ZodOptional.create;
var nullableType = ZodNullable.create;
var preprocessType = ZodEffects.createWithPreprocess;
var pipelineType = ZodPipeline.create;
var ostring = () => stringType().optional();
var onumber = () => numberType().optional();
var oboolean = () => booleanType().optional();
var coerce = {
  string: (arg) => ZodString.create({ ...arg, coerce: true }),
  number: (arg) => ZodNumber.create({ ...arg, coerce: true }),
  boolean: (arg) => ZodBoolean.create({
    ...arg,
    coerce: true
  }),
  bigint: (arg) => ZodBigInt.create({ ...arg, coerce: true }),
  date: (arg) => ZodDate.create({ ...arg, coerce: true })
};
var NEVER = INVALID;

// https://esm.sh/zod-to-json-schema@3.24.6/denonext/zod-to-json-schema.development.mjs
var ignoreOverride = Symbol("Let zodToJsonSchema decide on which parser to use");
var defaultOptions = {
  name: void 0,
  $refStrategy: "root",
  basePath: ["#"],
  effectStrategy: "input",
  pipeStrategy: "all",
  dateStrategy: "format:date-time",
  mapStrategy: "entries",
  removeAdditionalStrategy: "passthrough",
  allowedAdditionalProperties: true,
  rejectedAdditionalProperties: false,
  definitionPath: "definitions",
  target: "jsonSchema7",
  strictUnions: false,
  definitions: {},
  errorMessages: false,
  markdownDescription: false,
  patternStrategy: "escape",
  applyRegexFlags: false,
  emailStrategy: "format:email",
  base64Strategy: "contentEncoding:base64",
  nameStrategy: "ref",
  openAiAnyTypeName: "OpenAiAnyType"
};
var getDefaultOptions = (options) => typeof options === "string" ? {
  ...defaultOptions,
  name: options
} : {
  ...defaultOptions,
  ...options
};
var getRefs = (options) => {
  const _options = getDefaultOptions(options);
  const currentPath = _options.name !== void 0 ? [..._options.basePath, _options.definitionPath, _options.name] : _options.basePath;
  return {
    ..._options,
    flags: { hasReferencedOpenAiAnyType: false },
    currentPath,
    propertyPath: void 0,
    seen: new Map(Object.entries(_options.definitions).map(([name17, def]) => [
      def._def,
      {
        def: def._def,
        path: [..._options.basePath, _options.definitionPath, name17],
        // Resolution of references will be forced even though seen, so it's ok that the schema is undefined here for now.
        jsonSchema: void 0
      }
    ]))
  };
};
function addErrorMessage(res, key, errorMessage, refs) {
  if (!refs?.errorMessages)
    return;
  if (errorMessage) {
    res.errorMessage = {
      ...res.errorMessage,
      [key]: errorMessage
    };
  }
}
function setResponseValueAndErrors(res, key, value, errorMessage, refs) {
  res[key] = value;
  addErrorMessage(res, key, errorMessage, refs);
}
var getRelativePath = (pathA, pathB) => {
  let i4 = 0;
  for (; i4 < pathA.length && i4 < pathB.length; i4++) {
    if (pathA[i4] !== pathB[i4])
      break;
  }
  return [(pathA.length - i4).toString(), ...pathB.slice(i4)].join("/");
};
function parseAnyDef(refs) {
  if (refs.target !== "openAi") {
    return {};
  }
  const anyDefinitionPath = [
    ...refs.basePath,
    refs.definitionPath,
    refs.openAiAnyTypeName
  ];
  refs.flags.hasReferencedOpenAiAnyType = true;
  return {
    $ref: refs.$refStrategy === "relative" ? getRelativePath(anyDefinitionPath, refs.currentPath) : anyDefinitionPath.join("/")
  };
}
function parseArrayDef(def, refs) {
  const res = {
    type: "array"
  };
  if (def.type?._def && def.type?._def?.typeName !== ZodFirstPartyTypeKind.ZodAny) {
    res.items = parseDef(def.type._def, {
      ...refs,
      currentPath: [...refs.currentPath, "items"]
    });
  }
  if (def.minLength) {
    setResponseValueAndErrors(res, "minItems", def.minLength.value, def.minLength.message, refs);
  }
  if (def.maxLength) {
    setResponseValueAndErrors(res, "maxItems", def.maxLength.value, def.maxLength.message, refs);
  }
  if (def.exactLength) {
    setResponseValueAndErrors(res, "minItems", def.exactLength.value, def.exactLength.message, refs);
    setResponseValueAndErrors(res, "maxItems", def.exactLength.value, def.exactLength.message, refs);
  }
  return res;
}
function parseBigintDef(def, refs) {
  const res = {
    type: "integer",
    format: "int64"
  };
  if (!def.checks)
    return res;
  for (const check of def.checks) {
    switch (check.kind) {
      case "min":
        if (refs.target === "jsonSchema7") {
          if (check.inclusive) {
            setResponseValueAndErrors(res, "minimum", check.value, check.message, refs);
          } else {
            setResponseValueAndErrors(res, "exclusiveMinimum", check.value, check.message, refs);
          }
        } else {
          if (!check.inclusive) {
            res.exclusiveMinimum = true;
          }
          setResponseValueAndErrors(res, "minimum", check.value, check.message, refs);
        }
        break;
      case "max":
        if (refs.target === "jsonSchema7") {
          if (check.inclusive) {
            setResponseValueAndErrors(res, "maximum", check.value, check.message, refs);
          } else {
            setResponseValueAndErrors(res, "exclusiveMaximum", check.value, check.message, refs);
          }
        } else {
          if (!check.inclusive) {
            res.exclusiveMaximum = true;
          }
          setResponseValueAndErrors(res, "maximum", check.value, check.message, refs);
        }
        break;
      case "multipleOf":
        setResponseValueAndErrors(res, "multipleOf", check.value, check.message, refs);
        break;
    }
  }
  return res;
}
function parseBooleanDef() {
  return {
    type: "boolean"
  };
}
function parseBrandedDef(_def, refs) {
  return parseDef(_def.type._def, refs);
}
var parseCatchDef = (def, refs) => {
  return parseDef(def.innerType._def, refs);
};
function parseDateDef(def, refs, overrideDateStrategy) {
  const strategy = overrideDateStrategy ?? refs.dateStrategy;
  if (Array.isArray(strategy)) {
    return {
      anyOf: strategy.map((item, i4) => parseDateDef(def, refs, item))
    };
  }
  switch (strategy) {
    case "string":
    case "format:date-time":
      return {
        type: "string",
        format: "date-time"
      };
    case "format:date":
      return {
        type: "string",
        format: "date"
      };
    case "integer":
      return integerDateParser(def, refs);
  }
}
var integerDateParser = (def, refs) => {
  const res = {
    type: "integer",
    format: "unix-time"
  };
  if (refs.target === "openApi3") {
    return res;
  }
  for (const check of def.checks) {
    switch (check.kind) {
      case "min":
        setResponseValueAndErrors(
          res,
          "minimum",
          check.value,
          // This is in milliseconds
          check.message,
          refs
        );
        break;
      case "max":
        setResponseValueAndErrors(
          res,
          "maximum",
          check.value,
          // This is in milliseconds
          check.message,
          refs
        );
        break;
    }
  }
  return res;
};
function parseDefaultDef(_def, refs) {
  return {
    ...parseDef(_def.innerType._def, refs),
    default: _def.defaultValue()
  };
}
function parseEffectsDef(_def, refs) {
  return refs.effectStrategy === "input" ? parseDef(_def.schema._def, refs) : parseAnyDef(refs);
}
function parseEnumDef(def) {
  return {
    type: "string",
    enum: Array.from(def.values)
  };
}
var isJsonSchema7AllOfType = (type) => {
  if ("type" in type && type.type === "string")
    return false;
  return "allOf" in type;
};
function parseIntersectionDef(def, refs) {
  const allOf = [
    parseDef(def.left._def, {
      ...refs,
      currentPath: [...refs.currentPath, "allOf", "0"]
    }),
    parseDef(def.right._def, {
      ...refs,
      currentPath: [...refs.currentPath, "allOf", "1"]
    })
  ].filter((x8) => !!x8);
  let unevaluatedProperties = refs.target === "jsonSchema2019-09" ? { unevaluatedProperties: false } : void 0;
  const mergedAllOf = [];
  allOf.forEach((schema) => {
    if (isJsonSchema7AllOfType(schema)) {
      mergedAllOf.push(...schema.allOf);
      if (schema.unevaluatedProperties === void 0) {
        unevaluatedProperties = void 0;
      }
    } else {
      let nestedSchema = schema;
      if ("additionalProperties" in schema && schema.additionalProperties === false) {
        const { additionalProperties, ...rest } = schema;
        nestedSchema = rest;
      } else {
        unevaluatedProperties = void 0;
      }
      mergedAllOf.push(nestedSchema);
    }
  });
  return mergedAllOf.length ? {
    allOf: mergedAllOf,
    ...unevaluatedProperties
  } : void 0;
}
function parseLiteralDef(def, refs) {
  const parsedType = typeof def.value;
  if (parsedType !== "bigint" && parsedType !== "number" && parsedType !== "boolean" && parsedType !== "string") {
    return {
      type: Array.isArray(def.value) ? "array" : "object"
    };
  }
  if (refs.target === "openApi3") {
    return {
      type: parsedType === "bigint" ? "integer" : parsedType,
      enum: [def.value]
    };
  }
  return {
    type: parsedType === "bigint" ? "integer" : parsedType,
    const: def.value
  };
}
var emojiRegex2 = void 0;
var zodPatterns = {
  /**
   * `c` was changed to `[cC]` to replicate /i flag
   */
  cuid: /^[cC][^\s-]{8,}$/,
  cuid2: /^[0-9a-z]+$/,
  ulid: /^[0-9A-HJKMNP-TV-Z]{26}$/,
  /**
   * `a-z` was added to replicate /i flag
   */
  email: /^(?!\.)(?!.*\.\.)([a-zA-Z0-9_'+\-\.]*)[a-zA-Z0-9_+-]@([a-zA-Z0-9][a-zA-Z0-9\-]*\.)+[a-zA-Z]{2,}$/,
  /**
   * Constructed a valid Unicode RegExp
   *
   * Lazily instantiate since this type of regex isn't supported
   * in all envs (e.g. React Native).
   *
   * See:
   * https://github.com/colinhacks/zod/issues/2433
   * Fix in Zod:
   * https://github.com/colinhacks/zod/commit/9340fd51e48576a75adc919bff65dbc4a5d4c99b
   */
  emoji: () => {
    if (emojiRegex2 === void 0) {
      emojiRegex2 = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u");
    }
    return emojiRegex2;
  },
  /**
   * Unused
   */
  uuid: /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/,
  /**
   * Unused
   */
  ipv4: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  ipv4Cidr: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
  /**
   * Unused
   */
  ipv6: /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
  ipv6Cidr: /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  base64: /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  base64url: /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
  nanoid: /^[a-zA-Z0-9_-]{21}$/,
  jwt: /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/
};
function parseStringDef(def, refs) {
  const res = {
    type: "string"
  };
  if (def.checks) {
    for (const check of def.checks) {
      switch (check.kind) {
        case "min":
          setResponseValueAndErrors(res, "minLength", typeof res.minLength === "number" ? Math.max(res.minLength, check.value) : check.value, check.message, refs);
          break;
        case "max":
          setResponseValueAndErrors(res, "maxLength", typeof res.maxLength === "number" ? Math.min(res.maxLength, check.value) : check.value, check.message, refs);
          break;
        case "email":
          switch (refs.emailStrategy) {
            case "format:email":
              addFormat(res, "email", check.message, refs);
              break;
            case "format:idn-email":
              addFormat(res, "idn-email", check.message, refs);
              break;
            case "pattern:zod":
              addPattern(res, zodPatterns.email, check.message, refs);
              break;
          }
          break;
        case "url":
          addFormat(res, "uri", check.message, refs);
          break;
        case "uuid":
          addFormat(res, "uuid", check.message, refs);
          break;
        case "regex":
          addPattern(res, check.regex, check.message, refs);
          break;
        case "cuid":
          addPattern(res, zodPatterns.cuid, check.message, refs);
          break;
        case "cuid2":
          addPattern(res, zodPatterns.cuid2, check.message, refs);
          break;
        case "startsWith":
          addPattern(res, RegExp(`^${escapeLiteralCheckValue(check.value, refs)}`), check.message, refs);
          break;
        case "endsWith":
          addPattern(res, RegExp(`${escapeLiteralCheckValue(check.value, refs)}$`), check.message, refs);
          break;
        case "datetime":
          addFormat(res, "date-time", check.message, refs);
          break;
        case "date":
          addFormat(res, "date", check.message, refs);
          break;
        case "time":
          addFormat(res, "time", check.message, refs);
          break;
        case "duration":
          addFormat(res, "duration", check.message, refs);
          break;
        case "length":
          setResponseValueAndErrors(res, "minLength", typeof res.minLength === "number" ? Math.max(res.minLength, check.value) : check.value, check.message, refs);
          setResponseValueAndErrors(res, "maxLength", typeof res.maxLength === "number" ? Math.min(res.maxLength, check.value) : check.value, check.message, refs);
          break;
        case "includes": {
          addPattern(res, RegExp(escapeLiteralCheckValue(check.value, refs)), check.message, refs);
          break;
        }
        case "ip": {
          if (check.version !== "v6") {
            addFormat(res, "ipv4", check.message, refs);
          }
          if (check.version !== "v4") {
            addFormat(res, "ipv6", check.message, refs);
          }
          break;
        }
        case "base64url":
          addPattern(res, zodPatterns.base64url, check.message, refs);
          break;
        case "jwt":
          addPattern(res, zodPatterns.jwt, check.message, refs);
          break;
        case "cidr": {
          if (check.version !== "v6") {
            addPattern(res, zodPatterns.ipv4Cidr, check.message, refs);
          }
          if (check.version !== "v4") {
            addPattern(res, zodPatterns.ipv6Cidr, check.message, refs);
          }
          break;
        }
        case "emoji":
          addPattern(res, zodPatterns.emoji(), check.message, refs);
          break;
        case "ulid": {
          addPattern(res, zodPatterns.ulid, check.message, refs);
          break;
        }
        case "base64": {
          switch (refs.base64Strategy) {
            case "format:binary": {
              addFormat(res, "binary", check.message, refs);
              break;
            }
            case "contentEncoding:base64": {
              setResponseValueAndErrors(res, "contentEncoding", "base64", check.message, refs);
              break;
            }
            case "pattern:zod": {
              addPattern(res, zodPatterns.base64, check.message, refs);
              break;
            }
          }
          break;
        }
        case "nanoid": {
          addPattern(res, zodPatterns.nanoid, check.message, refs);
        }
        case "toLowerCase":
        case "toUpperCase":
        case "trim":
          break;
        default:
          /* @__PURE__ */ ((_6) => {
          })(check);
      }
    }
  }
  return res;
}
function escapeLiteralCheckValue(literal, refs) {
  return refs.patternStrategy === "escape" ? escapeNonAlphaNumeric(literal) : literal;
}
var ALPHA_NUMERIC = new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
function escapeNonAlphaNumeric(source) {
  let result = "";
  for (let i4 = 0; i4 < source.length; i4++) {
    if (!ALPHA_NUMERIC.has(source[i4])) {
      result += "\\";
    }
    result += source[i4];
  }
  return result;
}
function addFormat(schema, value, message, refs) {
  if (schema.format || schema.anyOf?.some((x8) => x8.format)) {
    if (!schema.anyOf) {
      schema.anyOf = [];
    }
    if (schema.format) {
      schema.anyOf.push({
        format: schema.format,
        ...schema.errorMessage && refs.errorMessages && {
          errorMessage: { format: schema.errorMessage.format }
        }
      });
      delete schema.format;
      if (schema.errorMessage) {
        delete schema.errorMessage.format;
        if (Object.keys(schema.errorMessage).length === 0) {
          delete schema.errorMessage;
        }
      }
    }
    schema.anyOf.push({
      format: value,
      ...message && refs.errorMessages && { errorMessage: { format: message } }
    });
  } else {
    setResponseValueAndErrors(schema, "format", value, message, refs);
  }
}
function addPattern(schema, regex, message, refs) {
  if (schema.pattern || schema.allOf?.some((x8) => x8.pattern)) {
    if (!schema.allOf) {
      schema.allOf = [];
    }
    if (schema.pattern) {
      schema.allOf.push({
        pattern: schema.pattern,
        ...schema.errorMessage && refs.errorMessages && {
          errorMessage: { pattern: schema.errorMessage.pattern }
        }
      });
      delete schema.pattern;
      if (schema.errorMessage) {
        delete schema.errorMessage.pattern;
        if (Object.keys(schema.errorMessage).length === 0) {
          delete schema.errorMessage;
        }
      }
    }
    schema.allOf.push({
      pattern: stringifyRegExpWithFlags(regex, refs),
      ...message && refs.errorMessages && { errorMessage: { pattern: message } }
    });
  } else {
    setResponseValueAndErrors(schema, "pattern", stringifyRegExpWithFlags(regex, refs), message, refs);
  }
}
function stringifyRegExpWithFlags(regex, refs) {
  if (!refs.applyRegexFlags || !regex.flags) {
    return regex.source;
  }
  const flags = {
    i: regex.flags.includes("i"),
    m: regex.flags.includes("m"),
    s: regex.flags.includes("s")
    // `.` matches newlines
  };
  const source = flags.i ? regex.source.toLowerCase() : regex.source;
  let pattern = "";
  let isEscaped = false;
  let inCharGroup = false;
  let inCharRange = false;
  for (let i4 = 0; i4 < source.length; i4++) {
    if (isEscaped) {
      pattern += source[i4];
      isEscaped = false;
      continue;
    }
    if (flags.i) {
      if (inCharGroup) {
        if (source[i4].match(/[a-z]/)) {
          if (inCharRange) {
            pattern += source[i4];
            pattern += `${source[i4 - 2]}-${source[i4]}`.toUpperCase();
            inCharRange = false;
          } else if (source[i4 + 1] === "-" && source[i4 + 2]?.match(/[a-z]/)) {
            pattern += source[i4];
            inCharRange = true;
          } else {
            pattern += `${source[i4]}${source[i4].toUpperCase()}`;
          }
          continue;
        }
      } else if (source[i4].match(/[a-z]/)) {
        pattern += `[${source[i4]}${source[i4].toUpperCase()}]`;
        continue;
      }
    }
    if (flags.m) {
      if (source[i4] === "^") {
        pattern += `(^|(?<=[\r
]))`;
        continue;
      } else if (source[i4] === "$") {
        pattern += `($|(?=[\r
]))`;
        continue;
      }
    }
    if (flags.s && source[i4] === ".") {
      pattern += inCharGroup ? `${source[i4]}\r
` : `[${source[i4]}\r
]`;
      continue;
    }
    pattern += source[i4];
    if (source[i4] === "\\") {
      isEscaped = true;
    } else if (inCharGroup && source[i4] === "]") {
      inCharGroup = false;
    } else if (!inCharGroup && source[i4] === "[") {
      inCharGroup = true;
    }
  }
  try {
    new RegExp(pattern);
  } catch {
    console.warn(`Could not convert regex pattern at ${refs.currentPath.join("/")} to a flag-independent form! Falling back to the flag-ignorant source`);
    return regex.source;
  }
  return pattern;
}
function parseRecordDef(def, refs) {
  if (refs.target === "openAi") {
    console.warn("Warning: OpenAI may not support records in schemas! Try an array of key-value pairs instead.");
  }
  if (refs.target === "openApi3" && def.keyType?._def.typeName === ZodFirstPartyTypeKind.ZodEnum) {
    return {
      type: "object",
      required: def.keyType._def.values,
      properties: def.keyType._def.values.reduce((acc, key) => ({
        ...acc,
        [key]: parseDef(def.valueType._def, {
          ...refs,
          currentPath: [...refs.currentPath, "properties", key]
        }) ?? parseAnyDef(refs)
      }), {}),
      additionalProperties: refs.rejectedAdditionalProperties
    };
  }
  const schema = {
    type: "object",
    additionalProperties: parseDef(def.valueType._def, {
      ...refs,
      currentPath: [...refs.currentPath, "additionalProperties"]
    }) ?? refs.allowedAdditionalProperties
  };
  if (refs.target === "openApi3") {
    return schema;
  }
  if (def.keyType?._def.typeName === ZodFirstPartyTypeKind.ZodString && def.keyType._def.checks?.length) {
    const { type, ...keyType } = parseStringDef(def.keyType._def, refs);
    return {
      ...schema,
      propertyNames: keyType
    };
  } else if (def.keyType?._def.typeName === ZodFirstPartyTypeKind.ZodEnum) {
    return {
      ...schema,
      propertyNames: {
        enum: def.keyType._def.values
      }
    };
  } else if (def.keyType?._def.typeName === ZodFirstPartyTypeKind.ZodBranded && def.keyType._def.type._def.typeName === ZodFirstPartyTypeKind.ZodString && def.keyType._def.type._def.checks?.length) {
    const { type, ...keyType } = parseBrandedDef(def.keyType._def, refs);
    return {
      ...schema,
      propertyNames: keyType
    };
  }
  return schema;
}
function parseMapDef(def, refs) {
  if (refs.mapStrategy === "record") {
    return parseRecordDef(def, refs);
  }
  const keys = parseDef(def.keyType._def, {
    ...refs,
    currentPath: [...refs.currentPath, "items", "items", "0"]
  }) || parseAnyDef(refs);
  const values = parseDef(def.valueType._def, {
    ...refs,
    currentPath: [...refs.currentPath, "items", "items", "1"]
  }) || parseAnyDef(refs);
  return {
    type: "array",
    maxItems: 125,
    items: {
      type: "array",
      items: [keys, values],
      minItems: 2,
      maxItems: 2
    }
  };
}
function parseNativeEnumDef(def) {
  const object2 = def.values;
  const actualKeys = Object.keys(def.values).filter((key) => {
    return typeof object2[object2[key]] !== "number";
  });
  const actualValues = actualKeys.map((key) => object2[key]);
  const parsedTypes = Array.from(new Set(actualValues.map((values) => typeof values)));
  return {
    type: parsedTypes.length === 1 ? parsedTypes[0] === "string" ? "string" : "number" : ["string", "number"],
    enum: actualValues
  };
}
function parseNeverDef(refs) {
  return refs.target === "openAi" ? void 0 : {
    not: parseAnyDef({
      ...refs,
      currentPath: [...refs.currentPath, "not"]
    })
  };
}
function parseNullDef(refs) {
  return refs.target === "openApi3" ? {
    enum: ["null"],
    nullable: true
  } : {
    type: "null"
  };
}
var primitiveMappings = {
  ZodString: "string",
  ZodNumber: "number",
  ZodBigInt: "integer",
  ZodBoolean: "boolean",
  ZodNull: "null"
};
function parseUnionDef(def, refs) {
  if (refs.target === "openApi3")
    return asAnyOf(def, refs);
  const options = def.options instanceof Map ? Array.from(def.options.values()) : def.options;
  if (options.every((x8) => x8._def.typeName in primitiveMappings && (!x8._def.checks || !x8._def.checks.length))) {
    const types = options.reduce((types2, x8) => {
      const type = primitiveMappings[x8._def.typeName];
      return type && !types2.includes(type) ? [...types2, type] : types2;
    }, []);
    return {
      type: types.length > 1 ? types : types[0]
    };
  } else if (options.every((x8) => x8._def.typeName === "ZodLiteral" && !x8.description)) {
    const types = options.reduce((acc, x8) => {
      const type = typeof x8._def.value;
      switch (type) {
        case "string":
        case "number":
        case "boolean":
          return [...acc, type];
        case "bigint":
          return [...acc, "integer"];
        case "object":
          if (x8._def.value === null)
            return [...acc, "null"];
        case "symbol":
        case "undefined":
        case "function":
        default:
          return acc;
      }
    }, []);
    if (types.length === options.length) {
      const uniqueTypes = types.filter((x8, i4, a4) => a4.indexOf(x8) === i4);
      return {
        type: uniqueTypes.length > 1 ? uniqueTypes : uniqueTypes[0],
        enum: options.reduce((acc, x8) => {
          return acc.includes(x8._def.value) ? acc : [...acc, x8._def.value];
        }, [])
      };
    }
  } else if (options.every((x8) => x8._def.typeName === "ZodEnum")) {
    return {
      type: "string",
      enum: options.reduce((acc, x8) => [
        ...acc,
        ...x8._def.values.filter((x22) => !acc.includes(x22))
      ], [])
    };
  }
  return asAnyOf(def, refs);
}
var asAnyOf = (def, refs) => {
  const anyOf = (def.options instanceof Map ? Array.from(def.options.values()) : def.options).map((x8, i4) => parseDef(x8._def, {
    ...refs,
    currentPath: [...refs.currentPath, "anyOf", `${i4}`]
  })).filter((x8) => !!x8 && (!refs.strictUnions || typeof x8 === "object" && Object.keys(x8).length > 0));
  return anyOf.length ? { anyOf } : void 0;
};
function parseNullableDef(def, refs) {
  if (["ZodString", "ZodNumber", "ZodBigInt", "ZodBoolean", "ZodNull"].includes(def.innerType._def.typeName) && (!def.innerType._def.checks || !def.innerType._def.checks.length)) {
    if (refs.target === "openApi3") {
      return {
        type: primitiveMappings[def.innerType._def.typeName],
        nullable: true
      };
    }
    return {
      type: [
        primitiveMappings[def.innerType._def.typeName],
        "null"
      ]
    };
  }
  if (refs.target === "openApi3") {
    const base2 = parseDef(def.innerType._def, {
      ...refs,
      currentPath: [...refs.currentPath]
    });
    if (base2 && "$ref" in base2)
      return { allOf: [base2], nullable: true };
    return base2 && { ...base2, nullable: true };
  }
  const base = parseDef(def.innerType._def, {
    ...refs,
    currentPath: [...refs.currentPath, "anyOf", "0"]
  });
  return base && { anyOf: [base, { type: "null" }] };
}
function parseNumberDef(def, refs) {
  const res = {
    type: "number"
  };
  if (!def.checks)
    return res;
  for (const check of def.checks) {
    switch (check.kind) {
      case "int":
        res.type = "integer";
        addErrorMessage(res, "type", check.message, refs);
        break;
      case "min":
        if (refs.target === "jsonSchema7") {
          if (check.inclusive) {
            setResponseValueAndErrors(res, "minimum", check.value, check.message, refs);
          } else {
            setResponseValueAndErrors(res, "exclusiveMinimum", check.value, check.message, refs);
          }
        } else {
          if (!check.inclusive) {
            res.exclusiveMinimum = true;
          }
          setResponseValueAndErrors(res, "minimum", check.value, check.message, refs);
        }
        break;
      case "max":
        if (refs.target === "jsonSchema7") {
          if (check.inclusive) {
            setResponseValueAndErrors(res, "maximum", check.value, check.message, refs);
          } else {
            setResponseValueAndErrors(res, "exclusiveMaximum", check.value, check.message, refs);
          }
        } else {
          if (!check.inclusive) {
            res.exclusiveMaximum = true;
          }
          setResponseValueAndErrors(res, "maximum", check.value, check.message, refs);
        }
        break;
      case "multipleOf":
        setResponseValueAndErrors(res, "multipleOf", check.value, check.message, refs);
        break;
    }
  }
  return res;
}
function parseObjectDef(def, refs) {
  const forceOptionalIntoNullable = refs.target === "openAi";
  const result = {
    type: "object",
    properties: {}
  };
  const required = [];
  const shape = def.shape();
  for (const propName in shape) {
    let propDef = shape[propName];
    if (propDef === void 0 || propDef._def === void 0) {
      continue;
    }
    let propOptional = safeIsOptional(propDef);
    if (propOptional && forceOptionalIntoNullable) {
      if (propDef._def.typeName === "ZodOptional") {
        propDef = propDef._def.innerType;
      }
      if (!propDef.isNullable()) {
        propDef = propDef.nullable();
      }
      propOptional = false;
    }
    const parsedDef = parseDef(propDef._def, {
      ...refs,
      currentPath: [...refs.currentPath, "properties", propName],
      propertyPath: [...refs.currentPath, "properties", propName]
    });
    if (parsedDef === void 0) {
      continue;
    }
    result.properties[propName] = parsedDef;
    if (!propOptional) {
      required.push(propName);
    }
  }
  if (required.length) {
    result.required = required;
  }
  const additionalProperties = decideAdditionalProperties(def, refs);
  if (additionalProperties !== void 0) {
    result.additionalProperties = additionalProperties;
  }
  return result;
}
function decideAdditionalProperties(def, refs) {
  if (def.catchall._def.typeName !== "ZodNever") {
    return parseDef(def.catchall._def, {
      ...refs,
      currentPath: [...refs.currentPath, "additionalProperties"]
    });
  }
  switch (def.unknownKeys) {
    case "passthrough":
      return refs.allowedAdditionalProperties;
    case "strict":
      return refs.rejectedAdditionalProperties;
    case "strip":
      return refs.removeAdditionalStrategy === "strict" ? refs.allowedAdditionalProperties : refs.rejectedAdditionalProperties;
  }
}
function safeIsOptional(schema) {
  try {
    return schema.isOptional();
  } catch {
    return true;
  }
}
var parseOptionalDef = (def, refs) => {
  if (refs.currentPath.toString() === refs.propertyPath?.toString()) {
    return parseDef(def.innerType._def, refs);
  }
  const innerSchema = parseDef(def.innerType._def, {
    ...refs,
    currentPath: [...refs.currentPath, "anyOf", "1"]
  });
  return innerSchema ? {
    anyOf: [
      {
        not: parseAnyDef(refs)
      },
      innerSchema
    ]
  } : parseAnyDef(refs);
};
var parsePipelineDef = (def, refs) => {
  if (refs.pipeStrategy === "input") {
    return parseDef(def.in._def, refs);
  } else if (refs.pipeStrategy === "output") {
    return parseDef(def.out._def, refs);
  }
  const a4 = parseDef(def.in._def, {
    ...refs,
    currentPath: [...refs.currentPath, "allOf", "0"]
  });
  const b7 = parseDef(def.out._def, {
    ...refs,
    currentPath: [...refs.currentPath, "allOf", a4 ? "1" : "0"]
  });
  return {
    allOf: [a4, b7].filter((x8) => x8 !== void 0)
  };
};
function parsePromiseDef(def, refs) {
  return parseDef(def.type._def, refs);
}
function parseSetDef(def, refs) {
  const items = parseDef(def.valueType._def, {
    ...refs,
    currentPath: [...refs.currentPath, "items"]
  });
  const schema = {
    type: "array",
    uniqueItems: true,
    items
  };
  if (def.minSize) {
    setResponseValueAndErrors(schema, "minItems", def.minSize.value, def.minSize.message, refs);
  }
  if (def.maxSize) {
    setResponseValueAndErrors(schema, "maxItems", def.maxSize.value, def.maxSize.message, refs);
  }
  return schema;
}
function parseTupleDef(def, refs) {
  if (def.rest) {
    return {
      type: "array",
      minItems: def.items.length,
      items: def.items.map((x8, i4) => parseDef(x8._def, {
        ...refs,
        currentPath: [...refs.currentPath, "items", `${i4}`]
      })).reduce((acc, x8) => x8 === void 0 ? acc : [...acc, x8], []),
      additionalItems: parseDef(def.rest._def, {
        ...refs,
        currentPath: [...refs.currentPath, "additionalItems"]
      })
    };
  } else {
    return {
      type: "array",
      minItems: def.items.length,
      maxItems: def.items.length,
      items: def.items.map((x8, i4) => parseDef(x8._def, {
        ...refs,
        currentPath: [...refs.currentPath, "items", `${i4}`]
      })).reduce((acc, x8) => x8 === void 0 ? acc : [...acc, x8], [])
    };
  }
}
function parseUndefinedDef(refs) {
  return {
    not: parseAnyDef(refs)
  };
}
function parseUnknownDef(refs) {
  return parseAnyDef(refs);
}
var parseReadonlyDef = (def, refs) => {
  return parseDef(def.innerType._def, refs);
};
var selectParser = (def, typeName, refs) => {
  switch (typeName) {
    case ZodFirstPartyTypeKind.ZodString:
      return parseStringDef(def, refs);
    case ZodFirstPartyTypeKind.ZodNumber:
      return parseNumberDef(def, refs);
    case ZodFirstPartyTypeKind.ZodObject:
      return parseObjectDef(def, refs);
    case ZodFirstPartyTypeKind.ZodBigInt:
      return parseBigintDef(def, refs);
    case ZodFirstPartyTypeKind.ZodBoolean:
      return parseBooleanDef();
    case ZodFirstPartyTypeKind.ZodDate:
      return parseDateDef(def, refs);
    case ZodFirstPartyTypeKind.ZodUndefined:
      return parseUndefinedDef(refs);
    case ZodFirstPartyTypeKind.ZodNull:
      return parseNullDef(refs);
    case ZodFirstPartyTypeKind.ZodArray:
      return parseArrayDef(def, refs);
    case ZodFirstPartyTypeKind.ZodUnion:
    case ZodFirstPartyTypeKind.ZodDiscriminatedUnion:
      return parseUnionDef(def, refs);
    case ZodFirstPartyTypeKind.ZodIntersection:
      return parseIntersectionDef(def, refs);
    case ZodFirstPartyTypeKind.ZodTuple:
      return parseTupleDef(def, refs);
    case ZodFirstPartyTypeKind.ZodRecord:
      return parseRecordDef(def, refs);
    case ZodFirstPartyTypeKind.ZodLiteral:
      return parseLiteralDef(def, refs);
    case ZodFirstPartyTypeKind.ZodEnum:
      return parseEnumDef(def);
    case ZodFirstPartyTypeKind.ZodNativeEnum:
      return parseNativeEnumDef(def);
    case ZodFirstPartyTypeKind.ZodNullable:
      return parseNullableDef(def, refs);
    case ZodFirstPartyTypeKind.ZodOptional:
      return parseOptionalDef(def, refs);
    case ZodFirstPartyTypeKind.ZodMap:
      return parseMapDef(def, refs);
    case ZodFirstPartyTypeKind.ZodSet:
      return parseSetDef(def, refs);
    case ZodFirstPartyTypeKind.ZodLazy:
      return () => def.getter()._def;
    case ZodFirstPartyTypeKind.ZodPromise:
      return parsePromiseDef(def, refs);
    case ZodFirstPartyTypeKind.ZodNaN:
    case ZodFirstPartyTypeKind.ZodNever:
      return parseNeverDef(refs);
    case ZodFirstPartyTypeKind.ZodEffects:
      return parseEffectsDef(def, refs);
    case ZodFirstPartyTypeKind.ZodAny:
      return parseAnyDef(refs);
    case ZodFirstPartyTypeKind.ZodUnknown:
      return parseUnknownDef(refs);
    case ZodFirstPartyTypeKind.ZodDefault:
      return parseDefaultDef(def, refs);
    case ZodFirstPartyTypeKind.ZodBranded:
      return parseBrandedDef(def, refs);
    case ZodFirstPartyTypeKind.ZodReadonly:
      return parseReadonlyDef(def, refs);
    case ZodFirstPartyTypeKind.ZodCatch:
      return parseCatchDef(def, refs);
    case ZodFirstPartyTypeKind.ZodPipeline:
      return parsePipelineDef(def, refs);
    case ZodFirstPartyTypeKind.ZodFunction:
    case ZodFirstPartyTypeKind.ZodVoid:
    case ZodFirstPartyTypeKind.ZodSymbol:
      return void 0;
    default:
      return /* @__PURE__ */ ((_6) => void 0)(typeName);
  }
};
function parseDef(def, refs, forceResolution = false) {
  const seenItem = refs.seen.get(def);
  if (refs.override) {
    const overrideResult = refs.override?.(def, refs, seenItem, forceResolution);
    if (overrideResult !== ignoreOverride) {
      return overrideResult;
    }
  }
  if (seenItem && !forceResolution) {
    const seenSchema = get$ref(seenItem, refs);
    if (seenSchema !== void 0) {
      return seenSchema;
    }
  }
  const newItem = { def, path: refs.currentPath, jsonSchema: void 0 };
  refs.seen.set(def, newItem);
  const jsonSchemaOrGetter = selectParser(def, def.typeName, refs);
  const jsonSchema = typeof jsonSchemaOrGetter === "function" ? parseDef(jsonSchemaOrGetter(), refs) : jsonSchemaOrGetter;
  if (jsonSchema) {
    addMeta(def, refs, jsonSchema);
  }
  if (refs.postProcess) {
    const postProcessResult = refs.postProcess(jsonSchema, def, refs);
    newItem.jsonSchema = jsonSchema;
    return postProcessResult;
  }
  newItem.jsonSchema = jsonSchema;
  return jsonSchema;
}
var get$ref = (item, refs) => {
  switch (refs.$refStrategy) {
    case "root":
      return { $ref: item.path.join("/") };
    case "relative":
      return { $ref: getRelativePath(refs.currentPath, item.path) };
    case "none":
    case "seen": {
      if (item.path.length < refs.currentPath.length && item.path.every((value, index) => refs.currentPath[index] === value)) {
        console.warn(`Recursive reference detected at ${refs.currentPath.join("/")}! Defaulting to any`);
        return parseAnyDef(refs);
      }
      return refs.$refStrategy === "seen" ? parseAnyDef(refs) : void 0;
    }
  }
};
var addMeta = (def, refs, jsonSchema) => {
  if (def.description) {
    jsonSchema.description = def.description;
    if (refs.markdownDescription) {
      jsonSchema.markdownDescription = def.description;
    }
  }
  return jsonSchema;
};
var zodToJsonSchema = (schema, options) => {
  const refs = getRefs(options);
  let definitions = typeof options === "object" && options.definitions ? Object.entries(options.definitions).reduce((acc, [name22, schema2]) => ({
    ...acc,
    [name22]: parseDef(schema2._def, {
      ...refs,
      currentPath: [...refs.basePath, refs.definitionPath, name22]
    }, true) ?? parseAnyDef(refs)
  }), {}) : void 0;
  const name17 = typeof options === "string" ? options : options?.nameStrategy === "title" ? void 0 : options?.name;
  const main = parseDef(schema._def, name17 === void 0 ? refs : {
    ...refs,
    currentPath: [...refs.basePath, refs.definitionPath, name17]
  }, false) ?? parseAnyDef(refs);
  const title = typeof options === "object" && options.name !== void 0 && options.nameStrategy === "title" ? options.name : void 0;
  if (title !== void 0) {
    main.title = title;
  }
  if (refs.flags.hasReferencedOpenAiAnyType) {
    if (!definitions) {
      definitions = {};
    }
    if (!definitions[refs.openAiAnyTypeName]) {
      definitions[refs.openAiAnyTypeName] = {
        // Skipping "object" as no properties can be defined and additionalProperties must be "false"
        type: ["string", "number", "integer", "boolean", "array", "null"],
        items: {
          $ref: refs.$refStrategy === "relative" ? "1" : [
            ...refs.basePath,
            refs.definitionPath,
            refs.openAiAnyTypeName
          ].join("/")
        }
      };
    }
  }
  const combined = name17 === void 0 ? definitions ? {
    ...main,
    [refs.definitionPath]: definitions
  } : main : {
    $ref: [
      ...refs.$refStrategy === "relative" ? [] : refs.basePath,
      refs.definitionPath,
      name17
    ].join("/"),
    [refs.definitionPath]: {
      ...definitions,
      [name17]: main
    }
  };
  if (refs.target === "jsonSchema7") {
    combined.$schema = "http://json-schema.org/draft-07/schema#";
  } else if (refs.target === "jsonSchema2019-09" || refs.target === "openAi") {
    combined.$schema = "https://json-schema.org/draft/2019-09/schema#";
  }
  if (refs.target === "openAi" && ("anyOf" in combined || "oneOf" in combined || "allOf" in combined || "type" in combined && Array.isArray(combined.type))) {
    console.warn("Warning: OpenAI may not support schemas with unions as roots! Try wrapping it in an object property.");
  }
  return combined;
};
var index_default2 = zodToJsonSchema;

// https://esm.sh/@ai-sdk/ui-utils@1.2.11/denonext/ui-utils.development.mjs
var A9 = { code: "0", name: "text", parse: (t2) => {
  if (typeof t2 != "string") throw new Error('"text" parts expect a string value.');
  return { type: "text", value: t2 };
} };
var N5 = { code: "3", name: "error", parse: (t2) => {
  if (typeof t2 != "string") throw new Error('"error" parts expect a string value.');
  return { type: "error", value: t2 };
} };
var R5 = { code: "4", name: "assistant_message", parse: (t2) => {
  if (t2 == null || typeof t2 != "object" || !("id" in t2) || !("role" in t2) || !("content" in t2) || typeof t2.id != "string" || typeof t2.role != "string" || t2.role !== "assistant" || !Array.isArray(t2.content) || !t2.content.every((e2) => e2 != null && typeof e2 == "object" && "type" in e2 && e2.type === "text" && "text" in e2 && e2.text != null && typeof e2.text == "object" && "value" in e2.text && typeof e2.text.value == "string")) throw new Error('"assistant_message" parts expect an object with an "id", "role", and "content" property.');
  return { type: "assistant_message", value: t2 };
} };
var x7 = { code: "5", name: "assistant_control_data", parse: (t2) => {
  if (t2 == null || typeof t2 != "object" || !("threadId" in t2) || !("messageId" in t2) || typeof t2.threadId != "string" || typeof t2.messageId != "string") throw new Error('"assistant_control_data" parts expect an object with a "threadId" and "messageId" property.');
  return { type: "assistant_control_data", value: { threadId: t2.threadId, messageId: t2.messageId } };
} };
var C7 = { code: "6", name: "data_message", parse: (t2) => {
  if (t2 == null || typeof t2 != "object" || !("role" in t2) || !("data" in t2) || typeof t2.role != "string" || t2.role !== "data") throw new Error('"data_message" parts expect an object with a "role" and "data" property.');
  return { type: "data_message", value: t2 };
} };
var J8 = [A9, N5, R5, x7, C7];
var j10 = { [A9.code]: A9, [N5.code]: N5, [R5.code]: R5, [x7.code]: x7, [C7.code]: C7 };
var Ct2 = { [A9.name]: A9.code, [N5.name]: N5.code, [R5.name]: R5.code, [x7.name]: x7.code, [C7.name]: C7.code };
var M7 = J8.map((t2) => t2.code);
function W4(t2) {
  let e2 = ["ROOT"], a4 = -1, o5 = null;
  function n2(s2, i4, d6) {
    switch (s2) {
      case '"': {
        a4 = i4, e2.pop(), e2.push(d6), e2.push("INSIDE_STRING");
        break;
      }
      case "f":
      case "t":
      case "n": {
        a4 = i4, o5 = i4, e2.pop(), e2.push(d6), e2.push("INSIDE_LITERAL");
        break;
      }
      case "-": {
        e2.pop(), e2.push(d6), e2.push("INSIDE_NUMBER");
        break;
      }
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9": {
        a4 = i4, e2.pop(), e2.push(d6), e2.push("INSIDE_NUMBER");
        break;
      }
      case "{": {
        a4 = i4, e2.pop(), e2.push(d6), e2.push("INSIDE_OBJECT_START");
        break;
      }
      case "[": {
        a4 = i4, e2.pop(), e2.push(d6), e2.push("INSIDE_ARRAY_START");
        break;
      }
    }
  }
  function c5(s2, i4) {
    switch (s2) {
      case ",": {
        e2.pop(), e2.push("INSIDE_OBJECT_AFTER_COMMA");
        break;
      }
      case "}": {
        a4 = i4, e2.pop();
        break;
      }
    }
  }
  function f4(s2, i4) {
    switch (s2) {
      case ",": {
        e2.pop(), e2.push("INSIDE_ARRAY_AFTER_COMMA");
        break;
      }
      case "]": {
        a4 = i4, e2.pop();
        break;
      }
    }
  }
  for (let s2 = 0; s2 < t2.length; s2++) {
    let i4 = t2[s2];
    switch (e2[e2.length - 1]) {
      case "ROOT":
        n2(i4, s2, "FINISH");
        break;
      case "INSIDE_OBJECT_START": {
        switch (i4) {
          case '"': {
            e2.pop(), e2.push("INSIDE_OBJECT_KEY");
            break;
          }
          case "}": {
            a4 = s2, e2.pop();
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_AFTER_COMMA": {
        switch (i4) {
          case '"': {
            e2.pop(), e2.push("INSIDE_OBJECT_KEY");
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_KEY": {
        switch (i4) {
          case '"': {
            e2.pop(), e2.push("INSIDE_OBJECT_AFTER_KEY");
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_AFTER_KEY": {
        switch (i4) {
          case ":": {
            e2.pop(), e2.push("INSIDE_OBJECT_BEFORE_VALUE");
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_BEFORE_VALUE": {
        n2(i4, s2, "INSIDE_OBJECT_AFTER_VALUE");
        break;
      }
      case "INSIDE_OBJECT_AFTER_VALUE": {
        c5(i4, s2);
        break;
      }
      case "INSIDE_STRING": {
        switch (i4) {
          case '"': {
            e2.pop(), a4 = s2;
            break;
          }
          case "\\": {
            e2.push("INSIDE_STRING_ESCAPE");
            break;
          }
          default:
            a4 = s2;
        }
        break;
      }
      case "INSIDE_ARRAY_START": {
        switch (i4) {
          case "]": {
            a4 = s2, e2.pop();
            break;
          }
          default: {
            a4 = s2, n2(i4, s2, "INSIDE_ARRAY_AFTER_VALUE");
            break;
          }
        }
        break;
      }
      case "INSIDE_ARRAY_AFTER_VALUE": {
        switch (i4) {
          case ",": {
            e2.pop(), e2.push("INSIDE_ARRAY_AFTER_COMMA");
            break;
          }
          case "]": {
            a4 = s2, e2.pop();
            break;
          }
          default: {
            a4 = s2;
            break;
          }
        }
        break;
      }
      case "INSIDE_ARRAY_AFTER_COMMA": {
        n2(i4, s2, "INSIDE_ARRAY_AFTER_VALUE");
        break;
      }
      case "INSIDE_STRING_ESCAPE": {
        e2.pop(), a4 = s2;
        break;
      }
      case "INSIDE_NUMBER": {
        switch (i4) {
          case "0":
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
          case "9": {
            a4 = s2;
            break;
          }
          case "e":
          case "E":
          case "-":
          case ".":
            break;
          case ",": {
            e2.pop(), e2[e2.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && f4(i4, s2), e2[e2.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" && c5(i4, s2);
            break;
          }
          case "}": {
            e2.pop(), e2[e2.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" && c5(i4, s2);
            break;
          }
          case "]": {
            e2.pop(), e2[e2.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && f4(i4, s2);
            break;
          }
          default: {
            e2.pop();
            break;
          }
        }
        break;
      }
      case "INSIDE_LITERAL": {
        let l6 = t2.substring(o5, s2 + 1);
        !"false".startsWith(l6) && !"true".startsWith(l6) && !"null".startsWith(l6) ? (e2.pop(), e2[e2.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" ? c5(i4, s2) : e2[e2.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && f4(i4, s2)) : a4 = s2;
        break;
      }
    }
  }
  let p5 = t2.slice(0, a4 + 1);
  for (let s2 = e2.length - 1; s2 >= 0; s2--) switch (e2[s2]) {
    case "INSIDE_STRING": {
      p5 += '"';
      break;
    }
    case "INSIDE_OBJECT_KEY":
    case "INSIDE_OBJECT_AFTER_KEY":
    case "INSIDE_OBJECT_AFTER_COMMA":
    case "INSIDE_OBJECT_START":
    case "INSIDE_OBJECT_BEFORE_VALUE":
    case "INSIDE_OBJECT_AFTER_VALUE": {
      p5 += "}";
      break;
    }
    case "INSIDE_ARRAY_START":
    case "INSIDE_ARRAY_AFTER_COMMA":
    case "INSIDE_ARRAY_AFTER_VALUE": {
      p5 += "]";
      break;
    }
    case "INSIDE_LITERAL": {
      let d6 = t2.substring(o5, t2.length);
      "true".startsWith(d6) ? p5 += "true".slice(d6.length) : "false".startsWith(d6) ? p5 += "false".slice(d6.length) : "null".startsWith(d6) && (p5 += "null".slice(d6.length));
    }
  }
  return p5;
}
function K7(t2) {
  if (t2 === void 0) return { value: void 0, state: "undefined-input" };
  let e2 = S9({ text: t2 });
  return e2.success ? { value: e2.value, state: "successful-parse" } : (e2 = S9({ text: W4(t2) }), e2.success ? { value: e2.value, state: "repaired-parse" } : { value: void 0, state: "failed-parse" });
}
var G7 = { code: "0", name: "text", parse: (t2) => {
  if (typeof t2 != "string") throw new Error('"text" parts expect a string value.');
  return { type: "text", value: t2 };
} };
var q6 = { code: "2", name: "data", parse: (t2) => {
  if (!Array.isArray(t2)) throw new Error('"data" parts expect an array value.');
  return { type: "data", value: t2 };
} };
var z6 = { code: "3", name: "error", parse: (t2) => {
  if (typeof t2 != "string") throw new Error('"error" parts expect a string value.');
  return { type: "error", value: t2 };
} };
var H6 = { code: "8", name: "message_annotations", parse: (t2) => {
  if (!Array.isArray(t2)) throw new Error('"message_annotations" parts expect an array value.');
  return { type: "message_annotations", value: t2 };
} };
var Q7 = { code: "9", name: "tool_call", parse: (t2) => {
  if (t2 == null || typeof t2 != "object" || !("toolCallId" in t2) || typeof t2.toolCallId != "string" || !("toolName" in t2) || typeof t2.toolName != "string" || !("args" in t2) || typeof t2.args != "object") throw new Error('"tool_call" parts expect an object with a "toolCallId", "toolName", and "args" property.');
  return { type: "tool_call", value: t2 };
} };
var X3 = { code: "a", name: "tool_result", parse: (t2) => {
  if (t2 == null || typeof t2 != "object" || !("toolCallId" in t2) || typeof t2.toolCallId != "string" || !("result" in t2)) throw new Error('"tool_result" parts expect an object with a "toolCallId" and a "result" property.');
  return { type: "tool_result", value: t2 };
} };
var Z6 = { code: "b", name: "tool_call_streaming_start", parse: (t2) => {
  if (t2 == null || typeof t2 != "object" || !("toolCallId" in t2) || typeof t2.toolCallId != "string" || !("toolName" in t2) || typeof t2.toolName != "string") throw new Error('"tool_call_streaming_start" parts expect an object with a "toolCallId" and "toolName" property.');
  return { type: "tool_call_streaming_start", value: t2 };
} };
var tt2 = { code: "c", name: "tool_call_delta", parse: (t2) => {
  if (t2 == null || typeof t2 != "object" || !("toolCallId" in t2) || typeof t2.toolCallId != "string" || !("argsTextDelta" in t2) || typeof t2.argsTextDelta != "string") throw new Error('"tool_call_delta" parts expect an object with a "toolCallId" and "argsTextDelta" property.');
  return { type: "tool_call_delta", value: t2 };
} };
var et2 = { code: "d", name: "finish_message", parse: (t2) => {
  if (t2 == null || typeof t2 != "object" || !("finishReason" in t2) || typeof t2.finishReason != "string") throw new Error('"finish_message" parts expect an object with a "finishReason" property.');
  let e2 = { finishReason: t2.finishReason };
  return "usage" in t2 && t2.usage != null && typeof t2.usage == "object" && "promptTokens" in t2.usage && "completionTokens" in t2.usage && (e2.usage = { promptTokens: typeof t2.usage.promptTokens == "number" ? t2.usage.promptTokens : Number.NaN, completionTokens: typeof t2.usage.completionTokens == "number" ? t2.usage.completionTokens : Number.NaN }), { type: "finish_message", value: e2 };
} };
var at2 = { code: "e", name: "finish_step", parse: (t2) => {
  if (t2 == null || typeof t2 != "object" || !("finishReason" in t2) || typeof t2.finishReason != "string") throw new Error('"finish_step" parts expect an object with a "finishReason" property.');
  let e2 = { finishReason: t2.finishReason, isContinued: false };
  return "usage" in t2 && t2.usage != null && typeof t2.usage == "object" && "promptTokens" in t2.usage && "completionTokens" in t2.usage && (e2.usage = { promptTokens: typeof t2.usage.promptTokens == "number" ? t2.usage.promptTokens : Number.NaN, completionTokens: typeof t2.usage.completionTokens == "number" ? t2.usage.completionTokens : Number.NaN }), "isContinued" in t2 && typeof t2.isContinued == "boolean" && (e2.isContinued = t2.isContinued), { type: "finish_step", value: e2 };
} };
var rt2 = { code: "f", name: "start_step", parse: (t2) => {
  if (t2 == null || typeof t2 != "object" || !("messageId" in t2) || typeof t2.messageId != "string") throw new Error('"start_step" parts expect an object with an "id" property.');
  return { type: "start_step", value: { messageId: t2.messageId } };
} };
var ot2 = { code: "g", name: "reasoning", parse: (t2) => {
  if (typeof t2 != "string") throw new Error('"reasoning" parts expect a string value.');
  return { type: "reasoning", value: t2 };
} };
var nt2 = { code: "h", name: "source", parse: (t2) => {
  if (t2 == null || typeof t2 != "object") throw new Error('"source" parts expect a Source object.');
  return { type: "source", value: t2 };
} };
var st2 = { code: "i", name: "redacted_reasoning", parse: (t2) => {
  if (t2 == null || typeof t2 != "object" || !("data" in t2) || typeof t2.data != "string") throw new Error('"redacted_reasoning" parts expect an object with a "data" property.');
  return { type: "redacted_reasoning", value: { data: t2.data } };
} };
var it2 = { code: "j", name: "reasoning_signature", parse: (t2) => {
  if (t2 == null || typeof t2 != "object" || !("signature" in t2) || typeof t2.signature != "string") throw new Error('"reasoning_signature" parts expect an object with a "signature" property.');
  return { type: "reasoning_signature", value: { signature: t2.signature } };
} };
var ct2 = { code: "k", name: "file", parse: (t2) => {
  if (t2 == null || typeof t2 != "object" || !("data" in t2) || typeof t2.data != "string" || !("mimeType" in t2) || typeof t2.mimeType != "string") throw new Error('"file" parts expect an object with a "data" and "mimeType" property.');
  return { type: "file", value: t2 };
} };
var D7 = [G7, q6, z6, H6, Q7, X3, Z6, tt2, et2, at2, rt2, ot2, nt2, st2, it2, ct2];
var lt2 = Object.fromEntries(D7.map((t2) => [t2.code, t2]));
var Pt2 = Object.fromEntries(D7.map((t2) => [t2.name, t2.code]));
var pt2 = D7.map((t2) => t2.code);
function Lt2(t2, e2) {
  let a4 = D7.find((o5) => o5.name === t2);
  if (!a4) throw new Error(`Invalid stream part type: ${t2}`);
  return `${a4.code}:${JSON.stringify(e2)}
`;
}
function bt2(t2, e2) {
  var a4;
  let o5 = (a4 = e2?.useReferences) != null ? a4 : false;
  return kt2(index_default2(t2, { $refStrategy: o5 ? "root" : "none", target: "jsonSchema7" }), { validate: (n2) => {
    let c5 = t2.safeParse(n2);
    return c5.success ? { success: true, value: c5.data } : { success: false, error: c5.error };
  } });
}
var O6 = Symbol.for("vercel.ai.schema");
function kt2(t2, { validate: e2 } = {}) {
  return { [O6]: true, _type: void 0, [T6]: true, jsonSchema: t2, validate: e2 };
}
function At2(t2) {
  return typeof t2 == "object" && t2 !== null && O6 in t2 && t2[O6] === true && "jsonSchema" in t2 && "validate" in t2;
}
function Wt2(t2) {
  return At2(t2) ? t2 : bt2(t2);
}

// https://esm.sh/@opentelemetry/api@1.9.0/denonext/api.development.mjs
var _globalThis = typeof globalThis === "object" ? globalThis : globalThis;
var VERSION = "1.9.0";
var re3 = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
function _makeCompatibilityCheck(ownVersion) {
  var acceptedVersions = /* @__PURE__ */ new Set([ownVersion]);
  var rejectedVersions = /* @__PURE__ */ new Set();
  var myVersionMatch = ownVersion.match(re3);
  if (!myVersionMatch) {
    return function() {
      return false;
    };
  }
  var ownVersionParsed = {
    major: +myVersionMatch[1],
    minor: +myVersionMatch[2],
    patch: +myVersionMatch[3],
    prerelease: myVersionMatch[4]
  };
  if (ownVersionParsed.prerelease != null) {
    return function isExactmatch(globalVersion) {
      return globalVersion === ownVersion;
    };
  }
  function _reject(v4) {
    rejectedVersions.add(v4);
    return false;
  }
  function _accept(v4) {
    acceptedVersions.add(v4);
    return true;
  }
  return function isCompatible2(globalVersion) {
    if (acceptedVersions.has(globalVersion)) {
      return true;
    }
    if (rejectedVersions.has(globalVersion)) {
      return false;
    }
    var globalVersionMatch = globalVersion.match(re3);
    if (!globalVersionMatch) {
      return _reject(globalVersion);
    }
    var globalVersionParsed = {
      major: +globalVersionMatch[1],
      minor: +globalVersionMatch[2],
      patch: +globalVersionMatch[3],
      prerelease: globalVersionMatch[4]
    };
    if (globalVersionParsed.prerelease != null) {
      return _reject(globalVersion);
    }
    if (ownVersionParsed.major !== globalVersionParsed.major) {
      return _reject(globalVersion);
    }
    if (ownVersionParsed.major === 0) {
      if (ownVersionParsed.minor === globalVersionParsed.minor && ownVersionParsed.patch <= globalVersionParsed.patch) {
        return _accept(globalVersion);
      }
      return _reject(globalVersion);
    }
    if (ownVersionParsed.minor <= globalVersionParsed.minor) {
      return _accept(globalVersion);
    }
    return _reject(globalVersion);
  };
}
var isCompatible = _makeCompatibilityCheck(VERSION);
var major = VERSION.split(".")[0];
var GLOBAL_OPENTELEMETRY_API_KEY = Symbol.for("opentelemetry.js.api." + major);
var _global = _globalThis;
function registerGlobal(type, instance, diag3, allowOverride) {
  var _a17;
  if (allowOverride === void 0) {
    allowOverride = false;
  }
  var api = _global[GLOBAL_OPENTELEMETRY_API_KEY] = (_a17 = _global[GLOBAL_OPENTELEMETRY_API_KEY]) !== null && _a17 !== void 0 ? _a17 : {
    version: VERSION
  };
  if (!allowOverride && api[type]) {
    var err = new Error("@opentelemetry/api: Attempted duplicate registration of API: " + type);
    diag3.error(err.stack || err.message);
    return false;
  }
  if (api.version !== VERSION) {
    var err = new Error("@opentelemetry/api: Registration of version v" + api.version + " for " + type + " does not match previously registered API v" + VERSION);
    diag3.error(err.stack || err.message);
    return false;
  }
  api[type] = instance;
  diag3.debug("@opentelemetry/api: Registered a global for " + type + " v" + VERSION + ".");
  return true;
}
function getGlobal(type) {
  var _a17, _b;
  var globalVersion = (_a17 = _global[GLOBAL_OPENTELEMETRY_API_KEY]) === null || _a17 === void 0 ? void 0 : _a17.version;
  if (!globalVersion || !isCompatible(globalVersion)) {
    return;
  }
  return (_b = _global[GLOBAL_OPENTELEMETRY_API_KEY]) === null || _b === void 0 ? void 0 : _b[type];
}
function unregisterGlobal(type, diag3) {
  diag3.debug("@opentelemetry/api: Unregistering a global for " + type + " v" + VERSION + ".");
  var api = _global[GLOBAL_OPENTELEMETRY_API_KEY];
  if (api) {
    delete api[type];
  }
}
var __read = function(o5, n2) {
  var m8 = typeof Symbol === "function" && o5[Symbol.iterator];
  if (!m8) return o5;
  var i4 = m8.call(o5), r17, ar3 = [], e2;
  try {
    while ((n2 === void 0 || n2-- > 0) && !(r17 = i4.next()).done) ar3.push(r17.value);
  } catch (error) {
    e2 = { error };
  } finally {
    try {
      if (r17 && !r17.done && (m8 = i4["return"])) m8.call(i4);
    } finally {
      if (e2) throw e2.error;
    }
  }
  return ar3;
};
var __spreadArray = function(to, from, pack) {
  if (pack || arguments.length === 2) for (var i4 = 0, l6 = from.length, ar3; i4 < l6; i4++) {
    if (ar3 || !(i4 in from)) {
      if (!ar3) ar3 = Array.prototype.slice.call(from, 0, i4);
      ar3[i4] = from[i4];
    }
  }
  return to.concat(ar3 || Array.prototype.slice.call(from));
};
var DiagComponentLogger = (
  /** @class */
  function() {
    function DiagComponentLogger2(props) {
      this._namespace = props.namespace || "DiagComponentLogger";
    }
    DiagComponentLogger2.prototype.debug = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return logProxy("debug", this._namespace, args);
    };
    DiagComponentLogger2.prototype.error = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return logProxy("error", this._namespace, args);
    };
    DiagComponentLogger2.prototype.info = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return logProxy("info", this._namespace, args);
    };
    DiagComponentLogger2.prototype.warn = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return logProxy("warn", this._namespace, args);
    };
    DiagComponentLogger2.prototype.verbose = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return logProxy("verbose", this._namespace, args);
    };
    return DiagComponentLogger2;
  }()
);
function logProxy(funcName, namespace, args) {
  var logger = getGlobal("diag");
  if (!logger) {
    return;
  }
  args.unshift(namespace);
  return logger[funcName].apply(logger, __spreadArray([], __read(args), false));
}
var DiagLogLevel;
(function(DiagLogLevel2) {
  DiagLogLevel2[DiagLogLevel2["NONE"] = 0] = "NONE";
  DiagLogLevel2[DiagLogLevel2["ERROR"] = 30] = "ERROR";
  DiagLogLevel2[DiagLogLevel2["WARN"] = 50] = "WARN";
  DiagLogLevel2[DiagLogLevel2["INFO"] = 60] = "INFO";
  DiagLogLevel2[DiagLogLevel2["DEBUG"] = 70] = "DEBUG";
  DiagLogLevel2[DiagLogLevel2["VERBOSE"] = 80] = "VERBOSE";
  DiagLogLevel2[DiagLogLevel2["ALL"] = 9999] = "ALL";
})(DiagLogLevel || (DiagLogLevel = {}));
function createLogLevelDiagLogger(maxLevel, logger) {
  if (maxLevel < DiagLogLevel.NONE) {
    maxLevel = DiagLogLevel.NONE;
  } else if (maxLevel > DiagLogLevel.ALL) {
    maxLevel = DiagLogLevel.ALL;
  }
  logger = logger || {};
  function _filterFunc(funcName, theLevel) {
    var theFunc = logger[funcName];
    if (typeof theFunc === "function" && maxLevel >= theLevel) {
      return theFunc.bind(logger);
    }
    return function() {
    };
  }
  return {
    error: _filterFunc("error", DiagLogLevel.ERROR),
    warn: _filterFunc("warn", DiagLogLevel.WARN),
    info: _filterFunc("info", DiagLogLevel.INFO),
    debug: _filterFunc("debug", DiagLogLevel.DEBUG),
    verbose: _filterFunc("verbose", DiagLogLevel.VERBOSE)
  };
}
var __read2 = function(o5, n2) {
  var m8 = typeof Symbol === "function" && o5[Symbol.iterator];
  if (!m8) return o5;
  var i4 = m8.call(o5), r17, ar3 = [], e2;
  try {
    while ((n2 === void 0 || n2-- > 0) && !(r17 = i4.next()).done) ar3.push(r17.value);
  } catch (error) {
    e2 = { error };
  } finally {
    try {
      if (r17 && !r17.done && (m8 = i4["return"])) m8.call(i4);
    } finally {
      if (e2) throw e2.error;
    }
  }
  return ar3;
};
var __spreadArray2 = function(to, from, pack) {
  if (pack || arguments.length === 2) for (var i4 = 0, l6 = from.length, ar3; i4 < l6; i4++) {
    if (ar3 || !(i4 in from)) {
      if (!ar3) ar3 = Array.prototype.slice.call(from, 0, i4);
      ar3[i4] = from[i4];
    }
  }
  return to.concat(ar3 || Array.prototype.slice.call(from));
};
var API_NAME = "diag";
var DiagAPI = (
  /** @class */
  function() {
    function DiagAPI2() {
      function _logProxy(funcName) {
        return function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          var logger = getGlobal("diag");
          if (!logger)
            return;
          return logger[funcName].apply(logger, __spreadArray2([], __read2(args), false));
        };
      }
      var self = this;
      var setLogger = function(logger, optionsOrLogLevel) {
        var _a17, _b, _c;
        if (optionsOrLogLevel === void 0) {
          optionsOrLogLevel = { logLevel: DiagLogLevel.INFO };
        }
        if (logger === self) {
          var err = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
          self.error((_a17 = err.stack) !== null && _a17 !== void 0 ? _a17 : err.message);
          return false;
        }
        if (typeof optionsOrLogLevel === "number") {
          optionsOrLogLevel = {
            logLevel: optionsOrLogLevel
          };
        }
        var oldLogger = getGlobal("diag");
        var newLogger = createLogLevelDiagLogger((_b = optionsOrLogLevel.logLevel) !== null && _b !== void 0 ? _b : DiagLogLevel.INFO, logger);
        if (oldLogger && !optionsOrLogLevel.suppressOverrideMessage) {
          var stack = (_c = new Error().stack) !== null && _c !== void 0 ? _c : "<failed to generate stacktrace>";
          oldLogger.warn("Current logger will be overwritten from " + stack);
          newLogger.warn("Current logger will overwrite one already registered from " + stack);
        }
        return registerGlobal("diag", newLogger, self, true);
      };
      self.setLogger = setLogger;
      self.disable = function() {
        unregisterGlobal(API_NAME, self);
      };
      self.createComponentLogger = function(options) {
        return new DiagComponentLogger(options);
      };
      self.verbose = _logProxy("verbose");
      self.debug = _logProxy("debug");
      self.info = _logProxy("info");
      self.warn = _logProxy("warn");
      self.error = _logProxy("error");
    }
    DiagAPI2.instance = function() {
      if (!this._instance) {
        this._instance = new DiagAPI2();
      }
      return this._instance;
    };
    return DiagAPI2;
  }()
);
var __read3 = function(o5, n2) {
  var m8 = typeof Symbol === "function" && o5[Symbol.iterator];
  if (!m8) return o5;
  var i4 = m8.call(o5), r17, ar3 = [], e2;
  try {
    while ((n2 === void 0 || n2-- > 0) && !(r17 = i4.next()).done) ar3.push(r17.value);
  } catch (error) {
    e2 = { error };
  } finally {
    try {
      if (r17 && !r17.done && (m8 = i4["return"])) m8.call(i4);
    } finally {
      if (e2) throw e2.error;
    }
  }
  return ar3;
};
var __values = function(o5) {
  var s2 = typeof Symbol === "function" && Symbol.iterator, m8 = s2 && o5[s2], i4 = 0;
  if (m8) return m8.call(o5);
  if (o5 && typeof o5.length === "number") return {
    next: function() {
      if (o5 && i4 >= o5.length) o5 = void 0;
      return { value: o5 && o5[i4++], done: !o5 };
    }
  };
  throw new TypeError(s2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var BaggageImpl = (
  /** @class */
  function() {
    function BaggageImpl2(entries) {
      this._entries = entries ? new Map(entries) : /* @__PURE__ */ new Map();
    }
    BaggageImpl2.prototype.getEntry = function(key) {
      var entry = this._entries.get(key);
      if (!entry) {
        return void 0;
      }
      return Object.assign({}, entry);
    };
    BaggageImpl2.prototype.getAllEntries = function() {
      return Array.from(this._entries.entries()).map(function(_a17) {
        var _b = __read3(_a17, 2), k10 = _b[0], v4 = _b[1];
        return [k10, v4];
      });
    };
    BaggageImpl2.prototype.setEntry = function(key, entry) {
      var newBaggage = new BaggageImpl2(this._entries);
      newBaggage._entries.set(key, entry);
      return newBaggage;
    };
    BaggageImpl2.prototype.removeEntry = function(key) {
      var newBaggage = new BaggageImpl2(this._entries);
      newBaggage._entries.delete(key);
      return newBaggage;
    };
    BaggageImpl2.prototype.removeEntries = function() {
      var e_1, _a17;
      var keys = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        keys[_i] = arguments[_i];
      }
      var newBaggage = new BaggageImpl2(this._entries);
      try {
        for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
          var key = keys_1_1.value;
          newBaggage._entries.delete(key);
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (keys_1_1 && !keys_1_1.done && (_a17 = keys_1.return)) _a17.call(keys_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      return newBaggage;
    };
    BaggageImpl2.prototype.clear = function() {
      return new BaggageImpl2();
    };
    return BaggageImpl2;
  }()
);
var baggageEntryMetadataSymbol = Symbol("BaggageEntryMetadata");
var diag = DiagAPI.instance();
function createBaggage(entries) {
  if (entries === void 0) {
    entries = {};
  }
  return new BaggageImpl(new Map(Object.entries(entries)));
}
function createContextKey(description) {
  return Symbol.for(description);
}
var BaseContext = (
  /** @class */
  /* @__PURE__ */ function() {
    function BaseContext2(parentContext) {
      var self = this;
      self._currentContext = parentContext ? new Map(parentContext) : /* @__PURE__ */ new Map();
      self.getValue = function(key) {
        return self._currentContext.get(key);
      };
      self.setValue = function(key, value) {
        var context2 = new BaseContext2(self._currentContext);
        context2._currentContext.set(key, value);
        return context2;
      };
      self.deleteValue = function(key) {
        var context2 = new BaseContext2(self._currentContext);
        context2._currentContext.delete(key);
        return context2;
      };
    }
    return BaseContext2;
  }()
);
var ROOT_CONTEXT = new BaseContext();
var __extends = /* @__PURE__ */ function() {
  var extendStatics = function(d6, b7) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d22, b22) {
      d22.__proto__ = b22;
    } || function(d22, b22) {
      for (var p5 in b22) if (Object.prototype.hasOwnProperty.call(b22, p5)) d22[p5] = b22[p5];
    };
    return extendStatics(d6, b7);
  };
  return function(d6, b7) {
    if (typeof b7 !== "function" && b7 !== null)
      throw new TypeError("Class extends value " + String(b7) + " is not a constructor or null");
    extendStatics(d6, b7);
    function __() {
      this.constructor = d6;
    }
    d6.prototype = b7 === null ? Object.create(b7) : (__.prototype = b7.prototype, new __());
  };
}();
var NoopMeter = (
  /** @class */
  function() {
    function NoopMeter2() {
    }
    NoopMeter2.prototype.createGauge = function(_name, _options) {
      return NOOP_GAUGE_METRIC;
    };
    NoopMeter2.prototype.createHistogram = function(_name, _options) {
      return NOOP_HISTOGRAM_METRIC;
    };
    NoopMeter2.prototype.createCounter = function(_name, _options) {
      return NOOP_COUNTER_METRIC;
    };
    NoopMeter2.prototype.createUpDownCounter = function(_name, _options) {
      return NOOP_UP_DOWN_COUNTER_METRIC;
    };
    NoopMeter2.prototype.createObservableGauge = function(_name, _options) {
      return NOOP_OBSERVABLE_GAUGE_METRIC;
    };
    NoopMeter2.prototype.createObservableCounter = function(_name, _options) {
      return NOOP_OBSERVABLE_COUNTER_METRIC;
    };
    NoopMeter2.prototype.createObservableUpDownCounter = function(_name, _options) {
      return NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
    };
    NoopMeter2.prototype.addBatchObservableCallback = function(_callback, _observables) {
    };
    NoopMeter2.prototype.removeBatchObservableCallback = function(_callback) {
    };
    return NoopMeter2;
  }()
);
var NoopMetric = (
  /** @class */
  /* @__PURE__ */ function() {
    function NoopMetric2() {
    }
    return NoopMetric2;
  }()
);
var NoopCounterMetric = (
  /** @class */
  function(_super) {
    __extends(NoopCounterMetric2, _super);
    function NoopCounterMetric2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    NoopCounterMetric2.prototype.add = function(_value, _attributes) {
    };
    return NoopCounterMetric2;
  }(NoopMetric)
);
var NoopUpDownCounterMetric = (
  /** @class */
  function(_super) {
    __extends(NoopUpDownCounterMetric2, _super);
    function NoopUpDownCounterMetric2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    NoopUpDownCounterMetric2.prototype.add = function(_value, _attributes) {
    };
    return NoopUpDownCounterMetric2;
  }(NoopMetric)
);
var NoopGaugeMetric = (
  /** @class */
  function(_super) {
    __extends(NoopGaugeMetric2, _super);
    function NoopGaugeMetric2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    NoopGaugeMetric2.prototype.record = function(_value, _attributes) {
    };
    return NoopGaugeMetric2;
  }(NoopMetric)
);
var NoopHistogramMetric = (
  /** @class */
  function(_super) {
    __extends(NoopHistogramMetric2, _super);
    function NoopHistogramMetric2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    NoopHistogramMetric2.prototype.record = function(_value, _attributes) {
    };
    return NoopHistogramMetric2;
  }(NoopMetric)
);
var NoopObservableMetric = (
  /** @class */
  function() {
    function NoopObservableMetric2() {
    }
    NoopObservableMetric2.prototype.addCallback = function(_callback) {
    };
    NoopObservableMetric2.prototype.removeCallback = function(_callback) {
    };
    return NoopObservableMetric2;
  }()
);
var NoopObservableCounterMetric = (
  /** @class */
  function(_super) {
    __extends(NoopObservableCounterMetric2, _super);
    function NoopObservableCounterMetric2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    return NoopObservableCounterMetric2;
  }(NoopObservableMetric)
);
var NoopObservableGaugeMetric = (
  /** @class */
  function(_super) {
    __extends(NoopObservableGaugeMetric2, _super);
    function NoopObservableGaugeMetric2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    return NoopObservableGaugeMetric2;
  }(NoopObservableMetric)
);
var NoopObservableUpDownCounterMetric = (
  /** @class */
  function(_super) {
    __extends(NoopObservableUpDownCounterMetric2, _super);
    function NoopObservableUpDownCounterMetric2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    return NoopObservableUpDownCounterMetric2;
  }(NoopObservableMetric)
);
var NOOP_METER = new NoopMeter();
var NOOP_COUNTER_METRIC = new NoopCounterMetric();
var NOOP_GAUGE_METRIC = new NoopGaugeMetric();
var NOOP_HISTOGRAM_METRIC = new NoopHistogramMetric();
var NOOP_UP_DOWN_COUNTER_METRIC = new NoopUpDownCounterMetric();
var NOOP_OBSERVABLE_COUNTER_METRIC = new NoopObservableCounterMetric();
var NOOP_OBSERVABLE_GAUGE_METRIC = new NoopObservableGaugeMetric();
var NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new NoopObservableUpDownCounterMetric();
var ValueType;
(function(ValueType2) {
  ValueType2[ValueType2["INT"] = 0] = "INT";
  ValueType2[ValueType2["DOUBLE"] = 1] = "DOUBLE";
})(ValueType || (ValueType = {}));
var defaultTextMapGetter = {
  get: function(carrier, key) {
    if (carrier == null) {
      return void 0;
    }
    return carrier[key];
  },
  keys: function(carrier) {
    if (carrier == null) {
      return [];
    }
    return Object.keys(carrier);
  }
};
var defaultTextMapSetter = {
  set: function(carrier, key, value) {
    if (carrier == null) {
      return;
    }
    carrier[key] = value;
  }
};
var __read4 = function(o5, n2) {
  var m8 = typeof Symbol === "function" && o5[Symbol.iterator];
  if (!m8) return o5;
  var i4 = m8.call(o5), r17, ar3 = [], e2;
  try {
    while ((n2 === void 0 || n2-- > 0) && !(r17 = i4.next()).done) ar3.push(r17.value);
  } catch (error) {
    e2 = { error };
  } finally {
    try {
      if (r17 && !r17.done && (m8 = i4["return"])) m8.call(i4);
    } finally {
      if (e2) throw e2.error;
    }
  }
  return ar3;
};
var __spreadArray3 = function(to, from, pack) {
  if (pack || arguments.length === 2) for (var i4 = 0, l6 = from.length, ar3; i4 < l6; i4++) {
    if (ar3 || !(i4 in from)) {
      if (!ar3) ar3 = Array.prototype.slice.call(from, 0, i4);
      ar3[i4] = from[i4];
    }
  }
  return to.concat(ar3 || Array.prototype.slice.call(from));
};
var NoopContextManager = (
  /** @class */
  function() {
    function NoopContextManager2() {
    }
    NoopContextManager2.prototype.active = function() {
      return ROOT_CONTEXT;
    };
    NoopContextManager2.prototype.with = function(_context, fn, thisArg) {
      var args = [];
      for (var _i = 3; _i < arguments.length; _i++) {
        args[_i - 3] = arguments[_i];
      }
      return fn.call.apply(fn, __spreadArray3([thisArg], __read4(args), false));
    };
    NoopContextManager2.prototype.bind = function(_context, target) {
      return target;
    };
    NoopContextManager2.prototype.enable = function() {
      return this;
    };
    NoopContextManager2.prototype.disable = function() {
      return this;
    };
    return NoopContextManager2;
  }()
);
var __read5 = function(o5, n2) {
  var m8 = typeof Symbol === "function" && o5[Symbol.iterator];
  if (!m8) return o5;
  var i4 = m8.call(o5), r17, ar3 = [], e2;
  try {
    while ((n2 === void 0 || n2-- > 0) && !(r17 = i4.next()).done) ar3.push(r17.value);
  } catch (error) {
    e2 = { error };
  } finally {
    try {
      if (r17 && !r17.done && (m8 = i4["return"])) m8.call(i4);
    } finally {
      if (e2) throw e2.error;
    }
  }
  return ar3;
};
var __spreadArray4 = function(to, from, pack) {
  if (pack || arguments.length === 2) for (var i4 = 0, l6 = from.length, ar3; i4 < l6; i4++) {
    if (ar3 || !(i4 in from)) {
      if (!ar3) ar3 = Array.prototype.slice.call(from, 0, i4);
      ar3[i4] = from[i4];
    }
  }
  return to.concat(ar3 || Array.prototype.slice.call(from));
};
var API_NAME2 = "context";
var NOOP_CONTEXT_MANAGER = new NoopContextManager();
var ContextAPI = (
  /** @class */
  function() {
    function ContextAPI2() {
    }
    ContextAPI2.getInstance = function() {
      if (!this._instance) {
        this._instance = new ContextAPI2();
      }
      return this._instance;
    };
    ContextAPI2.prototype.setGlobalContextManager = function(contextManager) {
      return registerGlobal(API_NAME2, contextManager, DiagAPI.instance());
    };
    ContextAPI2.prototype.active = function() {
      return this._getContextManager().active();
    };
    ContextAPI2.prototype.with = function(context2, fn, thisArg) {
      var _a17;
      var args = [];
      for (var _i = 3; _i < arguments.length; _i++) {
        args[_i - 3] = arguments[_i];
      }
      return (_a17 = this._getContextManager()).with.apply(_a17, __spreadArray4([context2, fn, thisArg], __read5(args), false));
    };
    ContextAPI2.prototype.bind = function(context2, target) {
      return this._getContextManager().bind(context2, target);
    };
    ContextAPI2.prototype._getContextManager = function() {
      return getGlobal(API_NAME2) || NOOP_CONTEXT_MANAGER;
    };
    ContextAPI2.prototype.disable = function() {
      this._getContextManager().disable();
      unregisterGlobal(API_NAME2, DiagAPI.instance());
    };
    return ContextAPI2;
  }()
);
var TraceFlags;
(function(TraceFlags2) {
  TraceFlags2[TraceFlags2["NONE"] = 0] = "NONE";
  TraceFlags2[TraceFlags2["SAMPLED"] = 1] = "SAMPLED";
})(TraceFlags || (TraceFlags = {}));
var INVALID_SPANID = "0000000000000000";
var INVALID_TRACEID = "00000000000000000000000000000000";
var INVALID_SPAN_CONTEXT = {
  traceId: INVALID_TRACEID,
  spanId: INVALID_SPANID,
  traceFlags: TraceFlags.NONE
};
var NonRecordingSpan = (
  /** @class */
  function() {
    function NonRecordingSpan2(_spanContext) {
      if (_spanContext === void 0) {
        _spanContext = INVALID_SPAN_CONTEXT;
      }
      this._spanContext = _spanContext;
    }
    NonRecordingSpan2.prototype.spanContext = function() {
      return this._spanContext;
    };
    NonRecordingSpan2.prototype.setAttribute = function(_key, _value) {
      return this;
    };
    NonRecordingSpan2.prototype.setAttributes = function(_attributes) {
      return this;
    };
    NonRecordingSpan2.prototype.addEvent = function(_name, _attributes) {
      return this;
    };
    NonRecordingSpan2.prototype.addLink = function(_link) {
      return this;
    };
    NonRecordingSpan2.prototype.addLinks = function(_links) {
      return this;
    };
    NonRecordingSpan2.prototype.setStatus = function(_status) {
      return this;
    };
    NonRecordingSpan2.prototype.updateName = function(_name) {
      return this;
    };
    NonRecordingSpan2.prototype.end = function(_endTime) {
    };
    NonRecordingSpan2.prototype.isRecording = function() {
      return false;
    };
    NonRecordingSpan2.prototype.recordException = function(_exception, _time) {
    };
    return NonRecordingSpan2;
  }()
);
var SPAN_KEY = createContextKey("OpenTelemetry Context Key SPAN");
function getSpan(context2) {
  return context2.getValue(SPAN_KEY) || void 0;
}
function getActiveSpan() {
  return getSpan(ContextAPI.getInstance().active());
}
function setSpan(context2, span) {
  return context2.setValue(SPAN_KEY, span);
}
function deleteSpan(context2) {
  return context2.deleteValue(SPAN_KEY);
}
function setSpanContext(context2, spanContext) {
  return setSpan(context2, new NonRecordingSpan(spanContext));
}
function getSpanContext(context2) {
  var _a17;
  return (_a17 = getSpan(context2)) === null || _a17 === void 0 ? void 0 : _a17.spanContext();
}
var VALID_TRACEID_REGEX = /^([0-9a-f]{32})$/i;
var VALID_SPANID_REGEX = /^[0-9a-f]{16}$/i;
function isValidTraceId(traceId) {
  return VALID_TRACEID_REGEX.test(traceId) && traceId !== INVALID_TRACEID;
}
function isValidSpanId(spanId) {
  return VALID_SPANID_REGEX.test(spanId) && spanId !== INVALID_SPANID;
}
function isSpanContextValid(spanContext) {
  return isValidTraceId(spanContext.traceId) && isValidSpanId(spanContext.spanId);
}
function wrapSpanContext(spanContext) {
  return new NonRecordingSpan(spanContext);
}
var contextApi = ContextAPI.getInstance();
var NoopTracer = (
  /** @class */
  function() {
    function NoopTracer2() {
    }
    NoopTracer2.prototype.startSpan = function(name17, options, context2) {
      if (context2 === void 0) {
        context2 = contextApi.active();
      }
      var root = Boolean(options === null || options === void 0 ? void 0 : options.root);
      if (root) {
        return new NonRecordingSpan();
      }
      var parentFromContext = context2 && getSpanContext(context2);
      if (isSpanContext(parentFromContext) && isSpanContextValid(parentFromContext)) {
        return new NonRecordingSpan(parentFromContext);
      } else {
        return new NonRecordingSpan();
      }
    };
    NoopTracer2.prototype.startActiveSpan = function(name17, arg2, arg3, arg4) {
      var opts;
      var ctx;
      var fn;
      if (arguments.length < 2) {
        return;
      } else if (arguments.length === 2) {
        fn = arg2;
      } else if (arguments.length === 3) {
        opts = arg2;
        fn = arg3;
      } else {
        opts = arg2;
        ctx = arg3;
        fn = arg4;
      }
      var parentContext = ctx !== null && ctx !== void 0 ? ctx : contextApi.active();
      var span = this.startSpan(name17, opts, parentContext);
      var contextWithSpanSet = setSpan(parentContext, span);
      return contextApi.with(contextWithSpanSet, fn, void 0, span);
    };
    return NoopTracer2;
  }()
);
function isSpanContext(spanContext) {
  return typeof spanContext === "object" && typeof spanContext["spanId"] === "string" && typeof spanContext["traceId"] === "string" && typeof spanContext["traceFlags"] === "number";
}
var NOOP_TRACER = new NoopTracer();
var ProxyTracer = (
  /** @class */
  function() {
    function ProxyTracer2(_provider, name17, version, options) {
      this._provider = _provider;
      this.name = name17;
      this.version = version;
      this.options = options;
    }
    ProxyTracer2.prototype.startSpan = function(name17, options, context2) {
      return this._getTracer().startSpan(name17, options, context2);
    };
    ProxyTracer2.prototype.startActiveSpan = function(_name, _options, _context, _fn) {
      var tracer = this._getTracer();
      return Reflect.apply(tracer.startActiveSpan, tracer, arguments);
    };
    ProxyTracer2.prototype._getTracer = function() {
      if (this._delegate) {
        return this._delegate;
      }
      var tracer = this._provider.getDelegateTracer(this.name, this.version, this.options);
      if (!tracer) {
        return NOOP_TRACER;
      }
      this._delegate = tracer;
      return this._delegate;
    };
    return ProxyTracer2;
  }()
);
var NoopTracerProvider = (
  /** @class */
  function() {
    function NoopTracerProvider2() {
    }
    NoopTracerProvider2.prototype.getTracer = function(_name, _version, _options) {
      return new NoopTracer();
    };
    return NoopTracerProvider2;
  }()
);
var NOOP_TRACER_PROVIDER = new NoopTracerProvider();
var ProxyTracerProvider = (
  /** @class */
  function() {
    function ProxyTracerProvider2() {
    }
    ProxyTracerProvider2.prototype.getTracer = function(name17, version, options) {
      var _a17;
      return (_a17 = this.getDelegateTracer(name17, version, options)) !== null && _a17 !== void 0 ? _a17 : new ProxyTracer(this, name17, version, options);
    };
    ProxyTracerProvider2.prototype.getDelegate = function() {
      var _a17;
      return (_a17 = this._delegate) !== null && _a17 !== void 0 ? _a17 : NOOP_TRACER_PROVIDER;
    };
    ProxyTracerProvider2.prototype.setDelegate = function(delegate) {
      this._delegate = delegate;
    };
    ProxyTracerProvider2.prototype.getDelegateTracer = function(name17, version, options) {
      var _a17;
      return (_a17 = this._delegate) === null || _a17 === void 0 ? void 0 : _a17.getTracer(name17, version, options);
    };
    return ProxyTracerProvider2;
  }()
);
var SamplingDecision;
(function(SamplingDecision2) {
  SamplingDecision2[SamplingDecision2["NOT_RECORD"] = 0] = "NOT_RECORD";
  SamplingDecision2[SamplingDecision2["RECORD"] = 1] = "RECORD";
  SamplingDecision2[SamplingDecision2["RECORD_AND_SAMPLED"] = 2] = "RECORD_AND_SAMPLED";
})(SamplingDecision || (SamplingDecision = {}));
var SpanKind;
(function(SpanKind2) {
  SpanKind2[SpanKind2["INTERNAL"] = 0] = "INTERNAL";
  SpanKind2[SpanKind2["SERVER"] = 1] = "SERVER";
  SpanKind2[SpanKind2["CLIENT"] = 2] = "CLIENT";
  SpanKind2[SpanKind2["PRODUCER"] = 3] = "PRODUCER";
  SpanKind2[SpanKind2["CONSUMER"] = 4] = "CONSUMER";
})(SpanKind || (SpanKind = {}));
var SpanStatusCode;
(function(SpanStatusCode2) {
  SpanStatusCode2[SpanStatusCode2["UNSET"] = 0] = "UNSET";
  SpanStatusCode2[SpanStatusCode2["OK"] = 1] = "OK";
  SpanStatusCode2[SpanStatusCode2["ERROR"] = 2] = "ERROR";
})(SpanStatusCode || (SpanStatusCode = {}));
var VALID_KEY_CHAR_RANGE = "[_0-9a-z-*/]";
var VALID_KEY = "[a-z]" + VALID_KEY_CHAR_RANGE + "{0,255}";
var VALID_VENDOR_KEY = "[a-z0-9]" + VALID_KEY_CHAR_RANGE + "{0,240}@[a-z]" + VALID_KEY_CHAR_RANGE + "{0,13}";
var VALID_KEY_REGEX = new RegExp("^(?:" + VALID_KEY + "|" + VALID_VENDOR_KEY + ")$");
var VALID_VALUE_BASE_REGEX = /^[ -~]{0,255}[!-~]$/;
var INVALID_VALUE_COMMA_EQUAL_REGEX = /,|=/;
function validateKey(key) {
  return VALID_KEY_REGEX.test(key);
}
function validateValue(value) {
  return VALID_VALUE_BASE_REGEX.test(value) && !INVALID_VALUE_COMMA_EQUAL_REGEX.test(value);
}
var MAX_TRACE_STATE_ITEMS = 32;
var MAX_TRACE_STATE_LEN = 512;
var LIST_MEMBERS_SEPARATOR = ",";
var LIST_MEMBER_KEY_VALUE_SPLITTER = "=";
var TraceStateImpl = (
  /** @class */
  function() {
    function TraceStateImpl2(rawTraceState) {
      this._internalState = /* @__PURE__ */ new Map();
      if (rawTraceState)
        this._parse(rawTraceState);
    }
    TraceStateImpl2.prototype.set = function(key, value) {
      var traceState = this._clone();
      if (traceState._internalState.has(key)) {
        traceState._internalState.delete(key);
      }
      traceState._internalState.set(key, value);
      return traceState;
    };
    TraceStateImpl2.prototype.unset = function(key) {
      var traceState = this._clone();
      traceState._internalState.delete(key);
      return traceState;
    };
    TraceStateImpl2.prototype.get = function(key) {
      return this._internalState.get(key);
    };
    TraceStateImpl2.prototype.serialize = function() {
      var _this = this;
      return this._keys().reduce(function(agg, key) {
        agg.push(key + LIST_MEMBER_KEY_VALUE_SPLITTER + _this.get(key));
        return agg;
      }, []).join(LIST_MEMBERS_SEPARATOR);
    };
    TraceStateImpl2.prototype._parse = function(rawTraceState) {
      if (rawTraceState.length > MAX_TRACE_STATE_LEN)
        return;
      this._internalState = rawTraceState.split(LIST_MEMBERS_SEPARATOR).reverse().reduce(function(agg, part) {
        var listMember = part.trim();
        var i4 = listMember.indexOf(LIST_MEMBER_KEY_VALUE_SPLITTER);
        if (i4 !== -1) {
          var key = listMember.slice(0, i4);
          var value = listMember.slice(i4 + 1, part.length);
          if (validateKey(key) && validateValue(value)) {
            agg.set(key, value);
          } else {
          }
        }
        return agg;
      }, /* @__PURE__ */ new Map());
      if (this._internalState.size > MAX_TRACE_STATE_ITEMS) {
        this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, MAX_TRACE_STATE_ITEMS));
      }
    };
    TraceStateImpl2.prototype._keys = function() {
      return Array.from(this._internalState.keys()).reverse();
    };
    TraceStateImpl2.prototype._clone = function() {
      var traceState = new TraceStateImpl2();
      traceState._internalState = new Map(this._internalState);
      return traceState;
    };
    return TraceStateImpl2;
  }()
);
var context = ContextAPI.getInstance();
var diag2 = DiagAPI.instance();
var NoopMeterProvider = (
  /** @class */
  function() {
    function NoopMeterProvider2() {
    }
    NoopMeterProvider2.prototype.getMeter = function(_name, _version, _options) {
      return NOOP_METER;
    };
    return NoopMeterProvider2;
  }()
);
var NOOP_METER_PROVIDER = new NoopMeterProvider();
var API_NAME3 = "metrics";
var MetricsAPI = (
  /** @class */
  function() {
    function MetricsAPI2() {
    }
    MetricsAPI2.getInstance = function() {
      if (!this._instance) {
        this._instance = new MetricsAPI2();
      }
      return this._instance;
    };
    MetricsAPI2.prototype.setGlobalMeterProvider = function(provider) {
      return registerGlobal(API_NAME3, provider, DiagAPI.instance());
    };
    MetricsAPI2.prototype.getMeterProvider = function() {
      return getGlobal(API_NAME3) || NOOP_METER_PROVIDER;
    };
    MetricsAPI2.prototype.getMeter = function(name17, version, options) {
      return this.getMeterProvider().getMeter(name17, version, options);
    };
    MetricsAPI2.prototype.disable = function() {
      unregisterGlobal(API_NAME3, DiagAPI.instance());
    };
    return MetricsAPI2;
  }()
);
var metrics = MetricsAPI.getInstance();
var NoopTextMapPropagator = (
  /** @class */
  function() {
    function NoopTextMapPropagator2() {
    }
    NoopTextMapPropagator2.prototype.inject = function(_context, _carrier) {
    };
    NoopTextMapPropagator2.prototype.extract = function(context2, _carrier) {
      return context2;
    };
    NoopTextMapPropagator2.prototype.fields = function() {
      return [];
    };
    return NoopTextMapPropagator2;
  }()
);
var BAGGAGE_KEY = createContextKey("OpenTelemetry Baggage Key");
function getBaggage(context2) {
  return context2.getValue(BAGGAGE_KEY) || void 0;
}
function getActiveBaggage() {
  return getBaggage(ContextAPI.getInstance().active());
}
function setBaggage(context2, baggage) {
  return context2.setValue(BAGGAGE_KEY, baggage);
}
function deleteBaggage(context2) {
  return context2.deleteValue(BAGGAGE_KEY);
}
var API_NAME4 = "propagation";
var NOOP_TEXT_MAP_PROPAGATOR = new NoopTextMapPropagator();
var PropagationAPI = (
  /** @class */
  function() {
    function PropagationAPI2() {
      this.createBaggage = createBaggage;
      this.getBaggage = getBaggage;
      this.getActiveBaggage = getActiveBaggage;
      this.setBaggage = setBaggage;
      this.deleteBaggage = deleteBaggage;
    }
    PropagationAPI2.getInstance = function() {
      if (!this._instance) {
        this._instance = new PropagationAPI2();
      }
      return this._instance;
    };
    PropagationAPI2.prototype.setGlobalPropagator = function(propagator) {
      return registerGlobal(API_NAME4, propagator, DiagAPI.instance());
    };
    PropagationAPI2.prototype.inject = function(context2, carrier, setter) {
      if (setter === void 0) {
        setter = defaultTextMapSetter;
      }
      return this._getGlobalPropagator().inject(context2, carrier, setter);
    };
    PropagationAPI2.prototype.extract = function(context2, carrier, getter) {
      if (getter === void 0) {
        getter = defaultTextMapGetter;
      }
      return this._getGlobalPropagator().extract(context2, carrier, getter);
    };
    PropagationAPI2.prototype.fields = function() {
      return this._getGlobalPropagator().fields();
    };
    PropagationAPI2.prototype.disable = function() {
      unregisterGlobal(API_NAME4, DiagAPI.instance());
    };
    PropagationAPI2.prototype._getGlobalPropagator = function() {
      return getGlobal(API_NAME4) || NOOP_TEXT_MAP_PROPAGATOR;
    };
    return PropagationAPI2;
  }()
);
var propagation = PropagationAPI.getInstance();
var API_NAME5 = "trace";
var TraceAPI = (
  /** @class */
  function() {
    function TraceAPI2() {
      this._proxyTracerProvider = new ProxyTracerProvider();
      this.wrapSpanContext = wrapSpanContext;
      this.isSpanContextValid = isSpanContextValid;
      this.deleteSpan = deleteSpan;
      this.getSpan = getSpan;
      this.getActiveSpan = getActiveSpan;
      this.getSpanContext = getSpanContext;
      this.setSpan = setSpan;
      this.setSpanContext = setSpanContext;
    }
    TraceAPI2.getInstance = function() {
      if (!this._instance) {
        this._instance = new TraceAPI2();
      }
      return this._instance;
    };
    TraceAPI2.prototype.setGlobalTracerProvider = function(provider) {
      var success = registerGlobal(API_NAME5, this._proxyTracerProvider, DiagAPI.instance());
      if (success) {
        this._proxyTracerProvider.setDelegate(provider);
      }
      return success;
    };
    TraceAPI2.prototype.getTracerProvider = function() {
      return getGlobal(API_NAME5) || this._proxyTracerProvider;
    };
    TraceAPI2.prototype.getTracer = function(name17, version) {
      return this.getTracerProvider().getTracer(name17, version);
    };
    TraceAPI2.prototype.disable = function() {
      unregisterGlobal(API_NAME5, DiagAPI.instance());
      this._proxyTracerProvider = new ProxyTracerProvider();
    };
    return TraceAPI2;
  }()
);
var trace = TraceAPI.getInstance();

// https://esm.sh/ai@4.3.19/denonext/ai.development.mjs
import { Buffer as __Buffer$3 } from "node:buffer";
var __defProp3 = Object.defineProperty;
var __export3 = (target, all) => {
  for (var name17 in all)
    __defProp3(target, name17, { get: all[name17], enumerable: true });
};
function prepareResponseHeaders(headers, {
  contentType,
  dataStreamVersion
}) {
  const responseHeaders = new Headers(headers != null ? headers : {});
  if (!responseHeaders.has("Content-Type")) {
    responseHeaders.set("Content-Type", contentType);
  }
  if (dataStreamVersion !== void 0) {
    responseHeaders.set("X-Vercel-AI-Data-Stream", dataStreamVersion);
  }
  return responseHeaders;
}
function prepareOutgoingHttpHeaders(headers, {
  contentType,
  dataStreamVersion
}) {
  const outgoingHeaders = {};
  if (headers != null) {
    for (const [key, value] of Object.entries(headers)) {
      outgoingHeaders[key] = value;
    }
  }
  if (outgoingHeaders["Content-Type"] == null) {
    outgoingHeaders["Content-Type"] = contentType;
  }
  if (dataStreamVersion !== void 0) {
    outgoingHeaders["X-Vercel-AI-Data-Stream"] = dataStreamVersion;
  }
  return outgoingHeaders;
}
function writeToServerResponse({
  response,
  status,
  statusText,
  headers,
  stream
}) {
  response.writeHead(status != null ? status : 200, statusText, headers);
  const reader = stream.getReader();
  const read = async () => {
    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done)
          break;
        response.write(value);
      }
    } catch (error) {
      throw error;
    } finally {
      response.end();
    }
  };
  read();
}
var UnsupportedModelVersionError = class extends a3 {
  constructor() {
    super({
      name: "AI_UnsupportedModelVersionError",
      message: `Unsupported model version. AI SDK 4 only supports models that implement specification version "v1". Please upgrade to AI SDK 5 to use this model.`
    });
  }
};
var name = "AI_InvalidArgumentError";
var marker = `vercel.ai.error.${name}`;
var symbol = Symbol.for(marker);
var _a;
var InvalidArgumentError = class extends a3 {
  constructor({
    parameter,
    value,
    message
  }) {
    super({
      name,
      message: `Invalid argument for parameter ${parameter}: ${message}`
    });
    this[_a] = true;
    this.parameter = parameter;
    this.value = value;
  }
  static isInstance(error) {
    return a3.hasMarker(error, marker);
  }
};
_a = symbol;
var name2 = "AI_RetryError";
var marker2 = `vercel.ai.error.${name2}`;
var symbol2 = Symbol.for(marker2);
var _a2;
var RetryError = class extends a3 {
  constructor({
    message,
    reason,
    errors
  }) {
    super({ name: name2, message });
    this[_a2] = true;
    this.reason = reason;
    this.errors = errors;
    this.lastError = errors[errors.length - 1];
  }
  static isInstance(error) {
    return a3.hasMarker(error, marker2);
  }
};
_a2 = symbol2;
var retryWithExponentialBackoff = ({
  maxRetries = 2,
  initialDelayInMs = 2e3,
  backoffFactor = 2
} = {}) => async (f4) => _retryWithExponentialBackoff(f4, {
  maxRetries,
  delayInMs: initialDelayInMs,
  backoffFactor
});
async function _retryWithExponentialBackoff(f4, {
  maxRetries,
  delayInMs,
  backoffFactor
}, errors = []) {
  try {
    return await f4();
  } catch (error) {
    if (h8(error)) {
      throw error;
    }
    if (maxRetries === 0) {
      throw error;
    }
    const errorMessage = K6(error);
    const newErrors = [...errors, error];
    const tryNumber = newErrors.length;
    if (tryNumber > maxRetries) {
      throw new RetryError({
        message: `Failed after ${tryNumber} attempts. Last error: ${errorMessage}`,
        reason: "maxRetriesExceeded",
        errors: newErrors
      });
    }
    if (error instanceof Error && br2.isInstance(error) && error.isRetryable === true && tryNumber <= maxRetries) {
      await Q6(delayInMs);
      return _retryWithExponentialBackoff(
        f4,
        { maxRetries, delayInMs: backoffFactor * delayInMs, backoffFactor },
        newErrors
      );
    }
    if (tryNumber === 1) {
      throw error;
    }
    throw new RetryError({
      message: `Failed after ${tryNumber} attempts with non-retryable error: '${errorMessage}'`,
      reason: "errorNotRetryable",
      errors: newErrors
    });
  }
}
function prepareRetries({
  maxRetries
}) {
  if (maxRetries != null) {
    if (!Number.isInteger(maxRetries)) {
      throw new InvalidArgumentError({
        parameter: "maxRetries",
        value: maxRetries,
        message: "maxRetries must be an integer"
      });
    }
    if (maxRetries < 0) {
      throw new InvalidArgumentError({
        parameter: "maxRetries",
        value: maxRetries,
        message: "maxRetries must be >= 0"
      });
    }
  }
  const maxRetriesResult = maxRetries != null ? maxRetries : 2;
  return {
    maxRetries: maxRetriesResult,
    retry: retryWithExponentialBackoff({ maxRetries: maxRetriesResult })
  };
}
function assembleOperationName({
  operationId,
  telemetry
}) {
  return {
    // standardized operation and resource name:
    "operation.name": `${operationId}${(telemetry == null ? void 0 : telemetry.functionId) != null ? ` ${telemetry.functionId}` : ""}`,
    "resource.name": telemetry == null ? void 0 : telemetry.functionId,
    // detailed, AI SDK specific data:
    "ai.operationId": operationId,
    "ai.telemetry.functionId": telemetry == null ? void 0 : telemetry.functionId
  };
}
function getBaseTelemetryAttributes({
  model,
  settings,
  telemetry,
  headers
}) {
  var _a17;
  return {
    "ai.model.provider": model.provider,
    "ai.model.id": model.modelId,
    // settings:
    ...Object.entries(settings).reduce((attributes, [key, value]) => {
      attributes[`ai.settings.${key}`] = value;
      return attributes;
    }, {}),
    // add metadata as attributes:
    ...Object.entries((_a17 = telemetry == null ? void 0 : telemetry.metadata) != null ? _a17 : {}).reduce(
      (attributes, [key, value]) => {
        attributes[`ai.telemetry.metadata.${key}`] = value;
        return attributes;
      },
      {}
    ),
    // request headers
    ...Object.entries(headers != null ? headers : {}).reduce((attributes, [key, value]) => {
      if (value !== void 0) {
        attributes[`ai.request.headers.${key}`] = value;
      }
      return attributes;
    }, {})
  };
}
var noopTracer = {
  startSpan() {
    return noopSpan;
  },
  startActiveSpan(name17, arg1, arg2, arg3) {
    if (typeof arg1 === "function") {
      return arg1(noopSpan);
    }
    if (typeof arg2 === "function") {
      return arg2(noopSpan);
    }
    if (typeof arg3 === "function") {
      return arg3(noopSpan);
    }
  }
};
var noopSpan = {
  spanContext() {
    return noopSpanContext;
  },
  setAttribute() {
    return this;
  },
  setAttributes() {
    return this;
  },
  addEvent() {
    return this;
  },
  addLink() {
    return this;
  },
  addLinks() {
    return this;
  },
  setStatus() {
    return this;
  },
  updateName() {
    return this;
  },
  end() {
    return this;
  },
  isRecording() {
    return false;
  },
  recordException() {
    return this;
  }
};
var noopSpanContext = {
  traceId: "",
  spanId: "",
  traceFlags: 0
};
function getTracer({
  isEnabled = false,
  tracer
} = {}) {
  if (!isEnabled) {
    return noopTracer;
  }
  if (tracer) {
    return tracer;
  }
  return trace.getTracer("ai");
}
function recordSpan({
  name: name17,
  tracer,
  attributes,
  fn,
  endWhenDone = true
}) {
  return tracer.startActiveSpan(name17, { attributes }, async (span) => {
    try {
      const result = await fn(span);
      if (endWhenDone) {
        span.end();
      }
      return result;
    } catch (error) {
      try {
        recordErrorOnSpan(span, error);
      } finally {
        span.end();
      }
      throw error;
    }
  });
}
function recordErrorOnSpan(span, error) {
  if (error instanceof Error) {
    span.recordException({
      name: error.name,
      message: error.message,
      stack: error.stack
    });
    span.setStatus({
      code: SpanStatusCode.ERROR,
      message: error.message
    });
  } else {
    span.setStatus({ code: SpanStatusCode.ERROR });
  }
}
function selectTelemetryAttributes({
  telemetry,
  attributes
}) {
  if ((telemetry == null ? void 0 : telemetry.isEnabled) !== true) {
    return {};
  }
  return Object.entries(attributes).reduce((attributes2, [key, value]) => {
    if (value === void 0) {
      return attributes2;
    }
    if (typeof value === "object" && "input" in value && typeof value.input === "function") {
      if ((telemetry == null ? void 0 : telemetry.recordInputs) === false) {
        return attributes2;
      }
      const result = value.input();
      return result === void 0 ? attributes2 : { ...attributes2, [key]: result };
    }
    if (typeof value === "object" && "output" in value && typeof value.output === "function") {
      if ((telemetry == null ? void 0 : telemetry.recordOutputs) === false) {
        return attributes2;
      }
      const result = value.output();
      return result === void 0 ? attributes2 : { ...attributes2, [key]: result };
    }
    return { ...attributes2, [key]: value };
  }, {});
}
var name3 = "AI_NoImageGeneratedError";
var marker3 = `vercel.ai.error.${name3}`;
var symbol3 = Symbol.for(marker3);
var _a3;
_a3 = symbol3;
var DefaultGeneratedFile = class {
  constructor({
    data,
    mimeType
  }) {
    const isUint8Array = data instanceof Uint8Array;
    this.base64Data = isUint8Array ? void 0 : data;
    this.uint8ArrayData = isUint8Array ? data : void 0;
    this.mimeType = mimeType;
  }
  // lazy conversion with caching to avoid unnecessary conversion overhead:
  get base64() {
    if (this.base64Data == null) {
      this.base64Data = Se3(this.uint8ArrayData);
    }
    return this.base64Data;
  }
  // lazy conversion with caching to avoid unnecessary conversion overhead:
  get uint8Array() {
    if (this.uint8ArrayData == null) {
      this.uint8ArrayData = Ae2(this.base64Data);
    }
    return this.uint8ArrayData;
  }
};
var DefaultGeneratedFileWithType = class extends DefaultGeneratedFile {
  constructor(options) {
    super(options);
    this.type = "file";
  }
};
var imageMimeTypeSignatures = [
  {
    mimeType: "image/gif",
    bytesPrefix: [71, 73, 70],
    base64Prefix: "R0lG"
  },
  {
    mimeType: "image/png",
    bytesPrefix: [137, 80, 78, 71],
    base64Prefix: "iVBORw"
  },
  {
    mimeType: "image/jpeg",
    bytesPrefix: [255, 216],
    base64Prefix: "/9j/"
  },
  {
    mimeType: "image/webp",
    bytesPrefix: [82, 73, 70, 70],
    base64Prefix: "UklGRg"
  },
  {
    mimeType: "image/bmp",
    bytesPrefix: [66, 77],
    base64Prefix: "Qk"
  },
  {
    mimeType: "image/tiff",
    bytesPrefix: [73, 73, 42, 0],
    base64Prefix: "SUkqAA"
  },
  {
    mimeType: "image/tiff",
    bytesPrefix: [77, 77, 0, 42],
    base64Prefix: "TU0AKg"
  },
  {
    mimeType: "image/avif",
    bytesPrefix: [
      0,
      0,
      0,
      32,
      102,
      116,
      121,
      112,
      97,
      118,
      105,
      102
    ],
    base64Prefix: "AAAAIGZ0eXBhdmlm"
  },
  {
    mimeType: "image/heic",
    bytesPrefix: [
      0,
      0,
      0,
      32,
      102,
      116,
      121,
      112,
      104,
      101,
      105,
      99
    ],
    base64Prefix: "AAAAIGZ0eXBoZWlj"
  }
];
var stripID3 = (data) => {
  const bytes = typeof data === "string" ? Ae2(data) : data;
  const id3Size = (bytes[6] & 127) << 21 | (bytes[7] & 127) << 14 | (bytes[8] & 127) << 7 | bytes[9] & 127;
  return bytes.slice(id3Size + 10);
};
function stripID3TagsIfPresent(data) {
  const hasId3 = typeof data === "string" && data.startsWith("SUQz") || typeof data !== "string" && data.length > 10 && data[0] === 73 && // 'I'
  data[1] === 68 && // 'D'
  data[2] === 51;
  return hasId3 ? stripID3(data) : data;
}
function detectMimeType({
  data,
  signatures
}) {
  const processedData = stripID3TagsIfPresent(data);
  for (const signature of signatures) {
    if (typeof processedData === "string" ? processedData.startsWith(signature.base64Prefix) : processedData.length >= signature.bytesPrefix.length && signature.bytesPrefix.every(
      (byte, index) => processedData[index] === byte
    )) {
      return signature.mimeType;
    }
  }
  return void 0;
}
var name4 = "AI_NoObjectGeneratedError";
var marker4 = `vercel.ai.error.${name4}`;
var symbol4 = Symbol.for(marker4);
var _a4;
var NoObjectGeneratedError = class extends a3 {
  constructor({
    message = "No object generated.",
    cause,
    text: text2,
    response,
    usage,
    finishReason
  }) {
    super({ name: name4, message, cause });
    this[_a4] = true;
    this.text = text2;
    this.response = response;
    this.usage = usage;
    this.finishReason = finishReason;
  }
  static isInstance(error) {
    return a3.hasMarker(error, marker4);
  }
};
_a4 = symbol4;
var name5 = "AI_DownloadError";
var marker5 = `vercel.ai.error.${name5}`;
var symbol5 = Symbol.for(marker5);
var _a5;
var DownloadError = class extends a3 {
  constructor({
    url,
    statusCode,
    statusText,
    cause,
    message = cause == null ? `Failed to download ${url}: ${statusCode} ${statusText}` : `Failed to download ${url}: ${cause}`
  }) {
    super({ name: name5, message, cause });
    this[_a5] = true;
    this.url = url;
    this.statusCode = statusCode;
    this.statusText = statusText;
  }
  static isInstance(error) {
    return a3.hasMarker(error, marker5);
  }
};
_a5 = symbol5;
async function download({ url }) {
  var _a17;
  const urlText = url.toString();
  try {
    const response = await fetch(urlText);
    if (!response.ok) {
      throw new DownloadError({
        url: urlText,
        statusCode: response.status,
        statusText: response.statusText
      });
    }
    return {
      data: new Uint8Array(await response.arrayBuffer()),
      mimeType: (_a17 = response.headers.get("content-type")) != null ? _a17 : void 0
    };
  } catch (error) {
    if (DownloadError.isInstance(error)) {
      throw error;
    }
    throw new DownloadError({ url: urlText, cause: error });
  }
}
var name6 = "AI_InvalidDataContentError";
var marker6 = `vercel.ai.error.${name6}`;
var symbol6 = Symbol.for(marker6);
var _a6;
var InvalidDataContentError = class extends a3 {
  constructor({
    content,
    cause,
    message = `Invalid data content. Expected a base64 string, Uint8Array, ArrayBuffer, or Buffer, but got ${typeof content}.`
  }) {
    super({ name: name6, message, cause });
    this[_a6] = true;
    this.content = content;
  }
  static isInstance(error) {
    return a3.hasMarker(error, marker6);
  }
};
_a6 = symbol6;
var dataContentSchema = external_exports.union([
  external_exports.string(),
  external_exports.instanceof(Uint8Array),
  external_exports.instanceof(ArrayBuffer),
  external_exports.custom(
    // Buffer might not be available in some environments such as CloudFlare:
    (value) => {
      var _a17, _b;
      return (_b = (_a17 = __Buffer$3) == null ? void 0 : _a17.isBuffer(value)) != null ? _b : false;
    },
    { message: "Must be a Buffer" }
  )
]);
function convertDataContentToBase64String(content) {
  if (typeof content === "string") {
    return content;
  }
  if (content instanceof ArrayBuffer) {
    return Se3(new Uint8Array(content));
  }
  return Se3(content);
}
function convertDataContentToUint8Array(content) {
  if (content instanceof Uint8Array) {
    return content;
  }
  if (typeof content === "string") {
    try {
      return Ae2(content);
    } catch (error) {
      throw new InvalidDataContentError({
        message: "Invalid data content. Content string is not a base64-encoded media.",
        content,
        cause: error
      });
    }
  }
  if (content instanceof ArrayBuffer) {
    return new Uint8Array(content);
  }
  throw new InvalidDataContentError({ content });
}
function convertUint8ArrayToText(uint8Array) {
  try {
    return new TextDecoder().decode(uint8Array);
  } catch (error) {
    throw new Error("Error decoding Uint8Array to text");
  }
}
var name7 = "AI_InvalidMessageRoleError";
var marker7 = `vercel.ai.error.${name7}`;
var symbol7 = Symbol.for(marker7);
var _a7;
var InvalidMessageRoleError = class extends a3 {
  constructor({
    role,
    message = `Invalid message role: '${role}'. Must be one of: "system", "user", "assistant", "tool".`
  }) {
    super({ name: name7, message });
    this[_a7] = true;
    this.role = role;
  }
  static isInstance(error) {
    return a3.hasMarker(error, marker7);
  }
};
_a7 = symbol7;
function splitDataUrl(dataUrl) {
  try {
    const [header, base64Content] = dataUrl.split(",");
    return {
      mimeType: header.split(";")[0].split(":")[1],
      base64Content
    };
  } catch (error) {
    return {
      mimeType: void 0,
      base64Content: void 0
    };
  }
}
async function convertToLanguageModelPrompt({
  prompt,
  modelSupportsImageUrls = true,
  modelSupportsUrl = () => false,
  downloadImplementation = download
}) {
  const downloadedAssets = await downloadAssets(
    prompt.messages,
    downloadImplementation,
    modelSupportsImageUrls,
    modelSupportsUrl
  );
  return [
    ...prompt.system != null ? [{ role: "system", content: prompt.system }] : [],
    ...prompt.messages.map(
      (message) => convertToLanguageModelMessage(message, downloadedAssets)
    )
  ];
}
function convertToLanguageModelMessage(message, downloadedAssets) {
  var _a17, _b, _c, _d, _e2, _f;
  const role = message.role;
  switch (role) {
    case "system": {
      return {
        role: "system",
        content: message.content,
        providerMetadata: (_a17 = message.providerOptions) != null ? _a17 : message.experimental_providerMetadata
      };
    }
    case "user": {
      if (typeof message.content === "string") {
        return {
          role: "user",
          content: [{ type: "text", text: message.content }],
          providerMetadata: (_b = message.providerOptions) != null ? _b : message.experimental_providerMetadata
        };
      }
      return {
        role: "user",
        content: message.content.map((part) => convertPartToLanguageModelPart(part, downloadedAssets)).filter((part) => part.type !== "text" || part.text !== ""),
        providerMetadata: (_c = message.providerOptions) != null ? _c : message.experimental_providerMetadata
      };
    }
    case "assistant": {
      if (typeof message.content === "string") {
        return {
          role: "assistant",
          content: [{ type: "text", text: message.content }],
          providerMetadata: (_d = message.providerOptions) != null ? _d : message.experimental_providerMetadata
        };
      }
      return {
        role: "assistant",
        content: message.content.filter(
          // remove empty text parts:
          (part) => part.type !== "text" || part.text !== ""
        ).map((part) => {
          var _a18;
          const providerOptions = (_a18 = part.providerOptions) != null ? _a18 : part.experimental_providerMetadata;
          switch (part.type) {
            case "file": {
              return {
                type: "file",
                data: part.data instanceof URL ? part.data : convertDataContentToBase64String(part.data),
                filename: part.filename,
                mimeType: part.mimeType,
                providerMetadata: providerOptions
              };
            }
            case "reasoning": {
              return {
                type: "reasoning",
                text: part.text,
                signature: part.signature,
                providerMetadata: providerOptions
              };
            }
            case "redacted-reasoning": {
              return {
                type: "redacted-reasoning",
                data: part.data,
                providerMetadata: providerOptions
              };
            }
            case "text": {
              return {
                type: "text",
                text: part.text,
                providerMetadata: providerOptions
              };
            }
            case "tool-call": {
              return {
                type: "tool-call",
                toolCallId: part.toolCallId,
                toolName: part.toolName,
                args: part.args,
                providerMetadata: providerOptions
              };
            }
          }
        }),
        providerMetadata: (_e2 = message.providerOptions) != null ? _e2 : message.experimental_providerMetadata
      };
    }
    case "tool": {
      return {
        role: "tool",
        content: message.content.map((part) => {
          var _a18;
          return {
            type: "tool-result",
            toolCallId: part.toolCallId,
            toolName: part.toolName,
            result: part.result,
            content: part.experimental_content,
            isError: part.isError,
            providerMetadata: (_a18 = part.providerOptions) != null ? _a18 : part.experimental_providerMetadata
          };
        }),
        providerMetadata: (_f = message.providerOptions) != null ? _f : message.experimental_providerMetadata
      };
    }
    default: {
      const _exhaustiveCheck = role;
      throw new InvalidMessageRoleError({ role: _exhaustiveCheck });
    }
  }
}
async function downloadAssets(messages, downloadImplementation, modelSupportsImageUrls, modelSupportsUrl) {
  const urls = messages.filter((message) => message.role === "user").map((message) => message.content).filter(
    (content) => Array.isArray(content)
  ).flat().filter(
    (part) => part.type === "image" || part.type === "file"
  ).filter(
    (part) => !(part.type === "image" && modelSupportsImageUrls === true)
  ).map((part) => part.type === "image" ? part.image : part.data).map(
    (part) => (
      // support string urls:
      typeof part === "string" && (part.startsWith("http:") || part.startsWith("https:")) ? new URL(part) : part
    )
  ).filter((image) => image instanceof URL).filter((url) => !modelSupportsUrl(url));
  const downloadedImages = await Promise.all(
    urls.map(async (url) => ({
      url,
      data: await downloadImplementation({ url })
    }))
  );
  return Object.fromEntries(
    downloadedImages.map(({ url, data }) => [url.toString(), data])
  );
}
function convertPartToLanguageModelPart(part, downloadedAssets) {
  var _a17, _b, _c, _d;
  if (part.type === "text") {
    return {
      type: "text",
      text: part.text,
      providerMetadata: (_a17 = part.providerOptions) != null ? _a17 : part.experimental_providerMetadata
    };
  }
  let mimeType = part.mimeType;
  let data;
  let content;
  let normalizedData;
  const type = part.type;
  switch (type) {
    case "image":
      data = part.image;
      break;
    case "file":
      data = part.data;
      break;
    default:
      throw new Error(`Unsupported part type: ${type}`);
  }
  try {
    content = typeof data === "string" ? new URL(data) : data;
  } catch (error) {
    content = data;
  }
  if (content instanceof URL) {
    if (content.protocol === "data:") {
      const { mimeType: dataUrlMimeType, base64Content } = splitDataUrl(
        content.toString()
      );
      if (dataUrlMimeType == null || base64Content == null) {
        throw new Error(`Invalid data URL format in part ${type}`);
      }
      mimeType = dataUrlMimeType;
      normalizedData = convertDataContentToUint8Array(base64Content);
    } else {
      const downloadedFile = downloadedAssets[content.toString()];
      if (downloadedFile) {
        normalizedData = downloadedFile.data;
        mimeType != null ? mimeType : mimeType = downloadedFile.mimeType;
      } else {
        normalizedData = content;
      }
    }
  } else {
    normalizedData = convertDataContentToUint8Array(content);
  }
  switch (type) {
    case "image": {
      if (normalizedData instanceof Uint8Array) {
        mimeType = (_b = detectMimeType({
          data: normalizedData,
          signatures: imageMimeTypeSignatures
        })) != null ? _b : mimeType;
      }
      return {
        type: "image",
        image: normalizedData,
        mimeType,
        providerMetadata: (_c = part.providerOptions) != null ? _c : part.experimental_providerMetadata
      };
    }
    case "file": {
      if (mimeType == null) {
        throw new Error(`Mime type is missing for file part`);
      }
      return {
        type: "file",
        data: normalizedData instanceof Uint8Array ? convertDataContentToBase64String(normalizedData) : normalizedData,
        filename: part.filename,
        mimeType,
        providerMetadata: (_d = part.providerOptions) != null ? _d : part.experimental_providerMetadata
      };
    }
  }
}
function prepareCallSettings({
  maxTokens,
  temperature,
  topP,
  topK,
  presencePenalty,
  frequencyPenalty,
  stopSequences,
  seed
}) {
  if (maxTokens != null) {
    if (!Number.isInteger(maxTokens)) {
      throw new InvalidArgumentError({
        parameter: "maxTokens",
        value: maxTokens,
        message: "maxTokens must be an integer"
      });
    }
    if (maxTokens < 1) {
      throw new InvalidArgumentError({
        parameter: "maxTokens",
        value: maxTokens,
        message: "maxTokens must be >= 1"
      });
    }
  }
  if (temperature != null) {
    if (typeof temperature !== "number") {
      throw new InvalidArgumentError({
        parameter: "temperature",
        value: temperature,
        message: "temperature must be a number"
      });
    }
  }
  if (topP != null) {
    if (typeof topP !== "number") {
      throw new InvalidArgumentError({
        parameter: "topP",
        value: topP,
        message: "topP must be a number"
      });
    }
  }
  if (topK != null) {
    if (typeof topK !== "number") {
      throw new InvalidArgumentError({
        parameter: "topK",
        value: topK,
        message: "topK must be a number"
      });
    }
  }
  if (presencePenalty != null) {
    if (typeof presencePenalty !== "number") {
      throw new InvalidArgumentError({
        parameter: "presencePenalty",
        value: presencePenalty,
        message: "presencePenalty must be a number"
      });
    }
  }
  if (frequencyPenalty != null) {
    if (typeof frequencyPenalty !== "number") {
      throw new InvalidArgumentError({
        parameter: "frequencyPenalty",
        value: frequencyPenalty,
        message: "frequencyPenalty must be a number"
      });
    }
  }
  if (seed != null) {
    if (!Number.isInteger(seed)) {
      throw new InvalidArgumentError({
        parameter: "seed",
        value: seed,
        message: "seed must be an integer"
      });
    }
  }
  return {
    maxTokens,
    // TODO v5 remove default 0 for temperature
    temperature: temperature != null ? temperature : 0,
    topP,
    topK,
    presencePenalty,
    frequencyPenalty,
    stopSequences: stopSequences != null && stopSequences.length > 0 ? stopSequences : void 0,
    seed
  };
}
function attachmentsToParts(attachments) {
  var _a17, _b, _c;
  const parts = [];
  for (const attachment of attachments) {
    let url;
    try {
      url = new URL(attachment.url);
    } catch (error) {
      throw new Error(`Invalid URL: ${attachment.url}`);
    }
    switch (url.protocol) {
      case "http:":
      case "https:": {
        if ((_a17 = attachment.contentType) == null ? void 0 : _a17.startsWith("image/")) {
          parts.push({ type: "image", image: url });
        } else {
          if (!attachment.contentType) {
            throw new Error(
              "If the attachment is not an image, it must specify a content type"
            );
          }
          parts.push({
            type: "file",
            data: url,
            mimeType: attachment.contentType
          });
        }
        break;
      }
      case "data:": {
        let header;
        let base64Content;
        let mimeType;
        try {
          [header, base64Content] = attachment.url.split(",");
          mimeType = header.split(";")[0].split(":")[1];
        } catch (error) {
          throw new Error(`Error processing data URL: ${attachment.url}`);
        }
        if (mimeType == null || base64Content == null) {
          throw new Error(`Invalid data URL format: ${attachment.url}`);
        }
        if ((_b = attachment.contentType) == null ? void 0 : _b.startsWith("image/")) {
          parts.push({
            type: "image",
            image: convertDataContentToUint8Array(base64Content)
          });
        } else if ((_c = attachment.contentType) == null ? void 0 : _c.startsWith("text/")) {
          parts.push({
            type: "text",
            text: convertUint8ArrayToText(
              convertDataContentToUint8Array(base64Content)
            )
          });
        } else {
          if (!attachment.contentType) {
            throw new Error(
              "If the attachment is not an image or text, it must specify a content type"
            );
          }
          parts.push({
            type: "file",
            data: base64Content,
            mimeType: attachment.contentType
          });
        }
        break;
      }
      default: {
        throw new Error(`Unsupported URL protocol: ${url.protocol}`);
      }
    }
  }
  return parts;
}
var name8 = "AI_MessageConversionError";
var marker8 = `vercel.ai.error.${name8}`;
var symbol8 = Symbol.for(marker8);
var _a8;
var MessageConversionError = class extends a3 {
  constructor({
    originalMessage,
    message
  }) {
    super({ name: name8, message });
    this[_a8] = true;
    this.originalMessage = originalMessage;
  }
  static isInstance(error) {
    return a3.hasMarker(error, marker8);
  }
};
_a8 = symbol8;
function convertToCoreMessages(messages, options) {
  var _a17, _b;
  const tools = (_a17 = options == null ? void 0 : options.tools) != null ? _a17 : {};
  const coreMessages = [];
  for (let i4 = 0; i4 < messages.length; i4++) {
    const message = messages[i4];
    const isLastMessage = i4 === messages.length - 1;
    const { role, content, experimental_attachments } = message;
    switch (role) {
      case "system": {
        coreMessages.push({
          role: "system",
          content
        });
        break;
      }
      case "user": {
        if (message.parts == null) {
          coreMessages.push({
            role: "user",
            content: experimental_attachments ? [
              { type: "text", text: content },
              ...attachmentsToParts(experimental_attachments)
            ] : content
          });
        } else {
          const textParts = message.parts.filter((part) => part.type === "text").map((part) => ({
            type: "text",
            text: part.text
          }));
          coreMessages.push({
            role: "user",
            content: experimental_attachments ? [...textParts, ...attachmentsToParts(experimental_attachments)] : textParts
          });
        }
        break;
      }
      case "assistant": {
        if (message.parts != null) {
          let processBlock2 = function() {
            const content2 = [];
            for (const part of block) {
              switch (part.type) {
                case "file":
                case "text": {
                  content2.push(part);
                  break;
                }
                case "reasoning": {
                  for (const detail of part.details) {
                    switch (detail.type) {
                      case "text":
                        content2.push({
                          type: "reasoning",
                          text: detail.text,
                          signature: detail.signature
                        });
                        break;
                      case "redacted":
                        content2.push({
                          type: "redacted-reasoning",
                          data: detail.data
                        });
                        break;
                    }
                  }
                  break;
                }
                case "tool-invocation":
                  content2.push({
                    type: "tool-call",
                    toolCallId: part.toolInvocation.toolCallId,
                    toolName: part.toolInvocation.toolName,
                    args: part.toolInvocation.args
                  });
                  break;
                default: {
                  const _exhaustiveCheck = part;
                  throw new Error(`Unsupported part: ${_exhaustiveCheck}`);
                }
              }
            }
            coreMessages.push({
              role: "assistant",
              content: content2
            });
            const stepInvocations = block.filter(
              (part) => part.type === "tool-invocation"
            ).map((part) => part.toolInvocation);
            if (stepInvocations.length > 0) {
              coreMessages.push({
                role: "tool",
                content: stepInvocations.map(
                  (toolInvocation) => {
                    if (!("result" in toolInvocation)) {
                      throw new MessageConversionError({
                        originalMessage: message,
                        message: "ToolInvocation must have a result: " + JSON.stringify(toolInvocation)
                      });
                    }
                    const { toolCallId, toolName, result } = toolInvocation;
                    const tool2 = tools[toolName];
                    return (tool2 == null ? void 0 : tool2.experimental_toToolResultContent) != null ? {
                      type: "tool-result",
                      toolCallId,
                      toolName,
                      result: tool2.experimental_toToolResultContent(result),
                      experimental_content: tool2.experimental_toToolResultContent(result)
                    } : {
                      type: "tool-result",
                      toolCallId,
                      toolName,
                      result
                    };
                  }
                )
              });
            }
            block = [];
            blockHasToolInvocations = false;
            currentStep++;
          };
          var processBlock = processBlock2;
          let currentStep = 0;
          let blockHasToolInvocations = false;
          let block = [];
          for (const part of message.parts) {
            switch (part.type) {
              case "text": {
                if (blockHasToolInvocations) {
                  processBlock2();
                }
                block.push(part);
                break;
              }
              case "file":
              case "reasoning": {
                block.push(part);
                break;
              }
              case "tool-invocation": {
                if (((_b = part.toolInvocation.step) != null ? _b : 0) !== currentStep) {
                  processBlock2();
                }
                block.push(part);
                blockHasToolInvocations = true;
                break;
              }
            }
          }
          processBlock2();
          break;
        }
        const toolInvocations = message.toolInvocations;
        if (toolInvocations == null || toolInvocations.length === 0) {
          coreMessages.push({ role: "assistant", content });
          break;
        }
        const maxStep = toolInvocations.reduce((max, toolInvocation) => {
          var _a18;
          return Math.max(max, (_a18 = toolInvocation.step) != null ? _a18 : 0);
        }, 0);
        for (let i22 = 0; i22 <= maxStep; i22++) {
          const stepInvocations = toolInvocations.filter(
            (toolInvocation) => {
              var _a18;
              return ((_a18 = toolInvocation.step) != null ? _a18 : 0) === i22;
            }
          );
          if (stepInvocations.length === 0) {
            continue;
          }
          coreMessages.push({
            role: "assistant",
            content: [
              ...isLastMessage && content && i22 === 0 ? [{ type: "text", text: content }] : [],
              ...stepInvocations.map(
                ({ toolCallId, toolName, args }) => ({
                  type: "tool-call",
                  toolCallId,
                  toolName,
                  args
                })
              )
            ]
          });
          coreMessages.push({
            role: "tool",
            content: stepInvocations.map((toolInvocation) => {
              if (!("result" in toolInvocation)) {
                throw new MessageConversionError({
                  originalMessage: message,
                  message: "ToolInvocation must have a result: " + JSON.stringify(toolInvocation)
                });
              }
              const { toolCallId, toolName, result } = toolInvocation;
              const tool2 = tools[toolName];
              return (tool2 == null ? void 0 : tool2.experimental_toToolResultContent) != null ? {
                type: "tool-result",
                toolCallId,
                toolName,
                result: tool2.experimental_toToolResultContent(result),
                experimental_content: tool2.experimental_toToolResultContent(result)
              } : {
                type: "tool-result",
                toolCallId,
                toolName,
                result
              };
            })
          });
        }
        if (content && !isLastMessage) {
          coreMessages.push({ role: "assistant", content });
        }
        break;
      }
      case "data": {
        break;
      }
      default: {
        const _exhaustiveCheck = role;
        throw new MessageConversionError({
          originalMessage: message,
          message: `Unsupported role: ${_exhaustiveCheck}`
        });
      }
    }
  }
  return coreMessages;
}
var jsonValueSchema = external_exports.lazy(
  () => external_exports.union([
    external_exports.null(),
    external_exports.string(),
    external_exports.number(),
    external_exports.boolean(),
    external_exports.record(external_exports.string(), jsonValueSchema),
    external_exports.array(jsonValueSchema)
  ])
);
var providerMetadataSchema = external_exports.record(
  external_exports.string(),
  external_exports.record(external_exports.string(), jsonValueSchema)
);
var toolResultContentSchema = external_exports.array(
  external_exports.union([
    external_exports.object({ type: external_exports.literal("text"), text: external_exports.string() }),
    external_exports.object({
      type: external_exports.literal("image"),
      data: external_exports.string(),
      mimeType: external_exports.string().optional()
    })
  ])
);
var textPartSchema = external_exports.object({
  type: external_exports.literal("text"),
  text: external_exports.string(),
  providerOptions: providerMetadataSchema.optional(),
  experimental_providerMetadata: providerMetadataSchema.optional()
});
var imagePartSchema = external_exports.object({
  type: external_exports.literal("image"),
  image: external_exports.union([dataContentSchema, external_exports.instanceof(URL)]),
  mimeType: external_exports.string().optional(),
  providerOptions: providerMetadataSchema.optional(),
  experimental_providerMetadata: providerMetadataSchema.optional()
});
var filePartSchema = external_exports.object({
  type: external_exports.literal("file"),
  data: external_exports.union([dataContentSchema, external_exports.instanceof(URL)]),
  filename: external_exports.string().optional(),
  mimeType: external_exports.string(),
  providerOptions: providerMetadataSchema.optional(),
  experimental_providerMetadata: providerMetadataSchema.optional()
});
var reasoningPartSchema = external_exports.object({
  type: external_exports.literal("reasoning"),
  text: external_exports.string(),
  providerOptions: providerMetadataSchema.optional(),
  experimental_providerMetadata: providerMetadataSchema.optional()
});
var redactedReasoningPartSchema = external_exports.object({
  type: external_exports.literal("redacted-reasoning"),
  data: external_exports.string(),
  providerOptions: providerMetadataSchema.optional(),
  experimental_providerMetadata: providerMetadataSchema.optional()
});
var toolCallPartSchema = external_exports.object({
  type: external_exports.literal("tool-call"),
  toolCallId: external_exports.string(),
  toolName: external_exports.string(),
  args: external_exports.unknown(),
  providerOptions: providerMetadataSchema.optional(),
  experimental_providerMetadata: providerMetadataSchema.optional()
});
var toolResultPartSchema = external_exports.object({
  type: external_exports.literal("tool-result"),
  toolCallId: external_exports.string(),
  toolName: external_exports.string(),
  result: external_exports.unknown(),
  content: toolResultContentSchema.optional(),
  isError: external_exports.boolean().optional(),
  providerOptions: providerMetadataSchema.optional(),
  experimental_providerMetadata: providerMetadataSchema.optional()
});
var coreSystemMessageSchema = external_exports.object({
  role: external_exports.literal("system"),
  content: external_exports.string(),
  providerOptions: providerMetadataSchema.optional(),
  experimental_providerMetadata: providerMetadataSchema.optional()
});
var coreUserMessageSchema = external_exports.object({
  role: external_exports.literal("user"),
  content: external_exports.union([
    external_exports.string(),
    external_exports.array(external_exports.union([textPartSchema, imagePartSchema, filePartSchema]))
  ]),
  providerOptions: providerMetadataSchema.optional(),
  experimental_providerMetadata: providerMetadataSchema.optional()
});
var coreAssistantMessageSchema = external_exports.object({
  role: external_exports.literal("assistant"),
  content: external_exports.union([
    external_exports.string(),
    external_exports.array(
      external_exports.union([
        textPartSchema,
        filePartSchema,
        reasoningPartSchema,
        redactedReasoningPartSchema,
        toolCallPartSchema
      ])
    )
  ]),
  providerOptions: providerMetadataSchema.optional(),
  experimental_providerMetadata: providerMetadataSchema.optional()
});
var coreToolMessageSchema = external_exports.object({
  role: external_exports.literal("tool"),
  content: external_exports.array(toolResultPartSchema),
  providerOptions: providerMetadataSchema.optional(),
  experimental_providerMetadata: providerMetadataSchema.optional()
});
var coreMessageSchema = external_exports.union([
  coreSystemMessageSchema,
  coreUserMessageSchema,
  coreAssistantMessageSchema,
  coreToolMessageSchema
]);
function standardizePrompt({
  prompt,
  tools
}) {
  if (prompt.prompt == null && prompt.messages == null) {
    throw new Er({
      prompt,
      message: "prompt or messages must be defined"
    });
  }
  if (prompt.prompt != null && prompt.messages != null) {
    throw new Er({
      prompt,
      message: "prompt and messages cannot be defined at the same time"
    });
  }
  if (prompt.system != null && typeof prompt.system !== "string") {
    throw new Er({
      prompt,
      message: "system must be a string"
    });
  }
  if (prompt.prompt != null) {
    if (typeof prompt.prompt !== "string") {
      throw new Er({
        prompt,
        message: "prompt must be a string"
      });
    }
    return {
      type: "prompt",
      system: prompt.system,
      messages: [
        {
          role: "user",
          content: prompt.prompt
        }
      ]
    };
  }
  if (prompt.messages != null) {
    const promptType = detectPromptType(prompt.messages);
    const messages = promptType === "ui-messages" ? convertToCoreMessages(prompt.messages, {
      tools
    }) : prompt.messages;
    if (messages.length === 0) {
      throw new Er({
        prompt,
        message: "messages must not be empty"
      });
    }
    const validationResult = A8({
      value: messages,
      schema: external_exports.array(coreMessageSchema)
    });
    if (!validationResult.success) {
      throw new Er({
        prompt,
        message: [
          "message must be a CoreMessage or a UI message",
          `Validation error: ${validationResult.error.message}`
        ].join("\n"),
        cause: validationResult.error
      });
    }
    return {
      type: "messages",
      messages,
      system: prompt.system
    };
  }
  throw new Error("unreachable");
}
function detectPromptType(prompt) {
  if (!Array.isArray(prompt)) {
    throw new Er({
      prompt,
      message: [
        "messages must be an array of CoreMessage or UIMessage",
        `Received non-array value: ${JSON.stringify(prompt)}`
      ].join("\n"),
      cause: prompt
    });
  }
  if (prompt.length === 0) {
    return "messages";
  }
  const characteristics = prompt.map(detectSingleMessageCharacteristics);
  if (characteristics.some((c5) => c5 === "has-ui-specific-parts")) {
    return "ui-messages";
  }
  const nonMessageIndex = characteristics.findIndex(
    (c5) => c5 !== "has-core-specific-parts" && c5 !== "message"
  );
  if (nonMessageIndex === -1) {
    return "messages";
  }
  throw new Er({
    prompt,
    message: [
      "messages must be an array of CoreMessage or UIMessage",
      `Received message of type: "${characteristics[nonMessageIndex]}" at index ${nonMessageIndex}`,
      `messages[${nonMessageIndex}]: ${JSON.stringify(prompt[nonMessageIndex])}`
    ].join("\n"),
    cause: prompt
  });
}
function detectSingleMessageCharacteristics(message) {
  if (typeof message === "object" && message !== null && (message.role === "function" || // UI-only role
  message.role === "data" || // UI-only role
  "toolInvocations" in message || // UI-specific field
  "parts" in message || // UI-specific field
  "experimental_attachments" in message)) {
    return "has-ui-specific-parts";
  } else if (typeof message === "object" && message !== null && "content" in message && (Array.isArray(message.content) || // Core messages can have array content
  "experimental_providerMetadata" in message || "providerOptions" in message)) {
    return "has-core-specific-parts";
  } else if (typeof message === "object" && message !== null && "role" in message && "content" in message && typeof message.content === "string" && ["system", "user", "assistant", "tool"].includes(message.role)) {
    return "message";
  } else {
    return "other";
  }
}
function calculateLanguageModelUsage({
  promptTokens,
  completionTokens
}) {
  return {
    promptTokens,
    completionTokens,
    totalTokens: promptTokens + completionTokens
  };
}
function addLanguageModelUsage(usage1, usage2) {
  return {
    promptTokens: usage1.promptTokens + usage2.promptTokens,
    completionTokens: usage1.completionTokens + usage2.completionTokens,
    totalTokens: usage1.totalTokens + usage2.totalTokens
  };
}
var DEFAULT_SCHEMA_PREFIX = "JSON schema:";
var DEFAULT_SCHEMA_SUFFIX = "You MUST answer with a JSON object that matches the JSON schema above.";
var DEFAULT_GENERIC_SUFFIX = "You MUST answer with JSON.";
function injectJsonInstruction({
  prompt,
  schema,
  schemaPrefix = schema != null ? DEFAULT_SCHEMA_PREFIX : void 0,
  schemaSuffix = schema != null ? DEFAULT_SCHEMA_SUFFIX : DEFAULT_GENERIC_SUFFIX
}) {
  return [
    prompt != null && prompt.length > 0 ? prompt : void 0,
    prompt != null && prompt.length > 0 ? "" : void 0,
    // add a newline if prompt is not null
    schemaPrefix,
    schema != null ? JSON.stringify(schema) : void 0,
    schemaSuffix
  ].filter((line) => line != null).join("\n");
}
function createAsyncIterableStream(source) {
  const stream = source.pipeThrough(new TransformStream());
  stream[Symbol.asyncIterator] = () => {
    const reader = stream.getReader();
    return {
      async next() {
        const { done, value } = await reader.read();
        return done ? { done: true, value: void 0 } : { done: false, value };
      }
    };
  };
  return stream;
}
function stringifyForTelemetry(prompt) {
  const processedPrompt = prompt.map((message) => {
    return {
      ...message,
      content: typeof message.content === "string" ? message.content : message.content.map(processPart)
    };
  });
  return JSON.stringify(processedPrompt);
}
function processPart(part) {
  if (part.type === "image") {
    return {
      ...part,
      image: part.image instanceof Uint8Array ? convertDataContentToBase64String(part.image) : part.image
    };
  }
  return part;
}
var originalGenerateId = J7({ prefix: "aiobj", size: 24 });
var DelayedPromise = class {
  constructor() {
    this.status = { type: "pending" };
    this._resolve = void 0;
    this._reject = void 0;
  }
  get value() {
    if (this.promise) {
      return this.promise;
    }
    this.promise = new Promise((resolve, reject) => {
      if (this.status.type === "resolved") {
        resolve(this.status.value);
      } else if (this.status.type === "rejected") {
        reject(this.status.error);
      }
      this._resolve = resolve;
      this._reject = reject;
    });
    return this.promise;
  }
  resolve(value) {
    var _a17;
    this.status = { type: "resolved", value };
    if (this.promise) {
      (_a17 = this._resolve) == null ? void 0 : _a17.call(this, value);
    }
  }
  reject(error) {
    var _a17;
    this.status = { type: "rejected", error };
    if (this.promise) {
      (_a17 = this._reject) == null ? void 0 : _a17.call(this, error);
    }
  }
};
function createResolvablePromise() {
  let resolve;
  let reject;
  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return {
    promise,
    resolve,
    reject
  };
}
function createStitchableStream() {
  let innerStreamReaders = [];
  let controller = null;
  let isClosed = false;
  let waitForNewStream = createResolvablePromise();
  const processPull = async () => {
    if (isClosed && innerStreamReaders.length === 0) {
      controller == null ? void 0 : controller.close();
      return;
    }
    if (innerStreamReaders.length === 0) {
      waitForNewStream = createResolvablePromise();
      await waitForNewStream.promise;
      return processPull();
    }
    try {
      const { value, done } = await innerStreamReaders[0].read();
      if (done) {
        innerStreamReaders.shift();
        if (innerStreamReaders.length > 0) {
          await processPull();
        } else if (isClosed) {
          controller == null ? void 0 : controller.close();
        }
      } else {
        controller == null ? void 0 : controller.enqueue(value);
      }
    } catch (error) {
      controller == null ? void 0 : controller.error(error);
      innerStreamReaders.shift();
      if (isClosed && innerStreamReaders.length === 0) {
        controller == null ? void 0 : controller.close();
      }
    }
  };
  return {
    stream: new ReadableStream({
      start(controllerParam) {
        controller = controllerParam;
      },
      pull: processPull,
      async cancel() {
        for (const reader of innerStreamReaders) {
          await reader.cancel();
        }
        innerStreamReaders = [];
        isClosed = true;
      }
    }),
    addStream: (innerStream) => {
      if (isClosed) {
        throw new Error("Cannot add inner stream: outer stream is closed");
      }
      innerStreamReaders.push(innerStream.getReader());
      waitForNewStream.resolve();
    },
    /**
     * Gracefully close the outer stream. This will let the inner streams
     * finish processing and then close the outer stream.
     */
    close: () => {
      isClosed = true;
      waitForNewStream.resolve();
      if (innerStreamReaders.length === 0) {
        controller == null ? void 0 : controller.close();
      }
    },
    /**
     * Immediately close the outer stream. This will cancel all inner streams
     * and close the outer stream.
     */
    terminate: () => {
      isClosed = true;
      waitForNewStream.resolve();
      innerStreamReaders.forEach((reader) => reader.cancel());
      innerStreamReaders = [];
      controller == null ? void 0 : controller.close();
    }
  };
}
function now() {
  var _a17, _b;
  return (_b = (_a17 = globalThis == null ? void 0 : globalThis.performance) == null ? void 0 : _a17.now()) != null ? _b : Date.now();
}
var originalGenerateId2 = J7({ prefix: "aiobj", size: 24 });
var name9 = "AI_NoOutputSpecifiedError";
var marker9 = `vercel.ai.error.${name9}`;
var symbol9 = Symbol.for(marker9);
var _a9;
var NoOutputSpecifiedError = class extends a3 {
  // used in isInstance
  constructor({ message = "No output specified." } = {}) {
    super({ name: name9, message });
    this[_a9] = true;
  }
  static isInstance(error) {
    return a3.hasMarker(error, marker9);
  }
};
_a9 = symbol9;
var name10 = "AI_ToolExecutionError";
var marker10 = `vercel.ai.error.${name10}`;
var symbol10 = Symbol.for(marker10);
var _a10;
var ToolExecutionError = class extends a3 {
  constructor({
    toolArgs,
    toolName,
    toolCallId,
    cause,
    message = `Error executing tool ${toolName}: ${p4(cause)}`
  }) {
    super({ name: name10, message, cause });
    this[_a10] = true;
    this.toolArgs = toolArgs;
    this.toolName = toolName;
    this.toolCallId = toolCallId;
  }
  static isInstance(error) {
    return a3.hasMarker(error, marker10);
  }
};
_a10 = symbol10;
function isNonEmptyObject(object2) {
  return object2 != null && Object.keys(object2).length > 0;
}
function prepareToolsAndToolChoice({
  tools,
  toolChoice,
  activeTools
}) {
  if (!isNonEmptyObject(tools)) {
    return {
      tools: void 0,
      toolChoice: void 0
    };
  }
  const filteredTools = activeTools != null ? Object.entries(tools).filter(
    ([name17]) => activeTools.includes(name17)
  ) : Object.entries(tools);
  return {
    tools: filteredTools.map(([name17, tool2]) => {
      const toolType = tool2.type;
      switch (toolType) {
        case void 0:
        case "function":
          return {
            type: "function",
            name: name17,
            description: tool2.description,
            parameters: Wt2(tool2.parameters).jsonSchema
          };
        case "provider-defined":
          return {
            type: "provider-defined",
            name: name17,
            id: tool2.id,
            args: tool2.args
          };
        default: {
          const exhaustiveCheck = toolType;
          throw new Error(`Unsupported tool type: ${exhaustiveCheck}`);
        }
      }
    }),
    toolChoice: toolChoice == null ? { type: "auto" } : typeof toolChoice === "string" ? { type: toolChoice } : { type: "tool", toolName: toolChoice.toolName }
  };
}
var lastWhitespaceRegexp = /^([\s\S]*?)(\s+)(\S*)$/;
function splitOnLastWhitespace(text2) {
  const match = text2.match(lastWhitespaceRegexp);
  return match ? { prefix: match[1], whitespace: match[2], suffix: match[3] } : void 0;
}
function removeTextAfterLastWhitespace(text2) {
  const match = splitOnLastWhitespace(text2);
  return match ? match.prefix + match.whitespace : text2;
}
var name11 = "AI_InvalidToolArgumentsError";
var marker11 = `vercel.ai.error.${name11}`;
var symbol11 = Symbol.for(marker11);
var _a11;
var InvalidToolArgumentsError = class extends a3 {
  constructor({
    toolArgs,
    toolName,
    cause,
    message = `Invalid arguments for tool ${toolName}: ${p4(
      cause
    )}`
  }) {
    super({ name: name11, message, cause });
    this[_a11] = true;
    this.toolArgs = toolArgs;
    this.toolName = toolName;
  }
  static isInstance(error) {
    return a3.hasMarker(error, marker11);
  }
};
_a11 = symbol11;
var name12 = "AI_NoSuchToolError";
var marker12 = `vercel.ai.error.${name12}`;
var symbol12 = Symbol.for(marker12);
var _a12;
var NoSuchToolError = class extends a3 {
  constructor({
    toolName,
    availableTools = void 0,
    message = `Model tried to call unavailable tool '${toolName}'. ${availableTools === void 0 ? "No tools are available." : `Available tools: ${availableTools.join(", ")}.`}`
  }) {
    super({ name: name12, message });
    this[_a12] = true;
    this.toolName = toolName;
    this.availableTools = availableTools;
  }
  static isInstance(error) {
    return a3.hasMarker(error, marker12);
  }
};
_a12 = symbol12;
var name13 = "AI_ToolCallRepairError";
var marker13 = `vercel.ai.error.${name13}`;
var symbol13 = Symbol.for(marker13);
var _a13;
var ToolCallRepairError = class extends a3 {
  constructor({
    cause,
    originalError,
    message = `Error repairing tool call: ${p4(cause)}`
  }) {
    super({ name: name13, message, cause });
    this[_a13] = true;
    this.originalError = originalError;
  }
  static isInstance(error) {
    return a3.hasMarker(error, marker13);
  }
};
_a13 = symbol13;
async function parseToolCall({
  toolCall,
  tools,
  repairToolCall,
  system,
  messages
}) {
  if (tools == null) {
    throw new NoSuchToolError({ toolName: toolCall.toolName });
  }
  try {
    return await doParseToolCall({ toolCall, tools });
  } catch (error) {
    if (repairToolCall == null || !(NoSuchToolError.isInstance(error) || InvalidToolArgumentsError.isInstance(error))) {
      throw error;
    }
    let repairedToolCall = null;
    try {
      repairedToolCall = await repairToolCall({
        toolCall,
        tools,
        parameterSchema: ({ toolName }) => Wt2(tools[toolName].parameters).jsonSchema,
        system,
        messages,
        error
      });
    } catch (repairError) {
      throw new ToolCallRepairError({
        cause: repairError,
        originalError: error
      });
    }
    if (repairedToolCall == null) {
      throw error;
    }
    return await doParseToolCall({ toolCall: repairedToolCall, tools });
  }
}
async function doParseToolCall({
  toolCall,
  tools
}) {
  const toolName = toolCall.toolName;
  const tool2 = tools[toolName];
  if (tool2 == null) {
    throw new NoSuchToolError({
      toolName: toolCall.toolName,
      availableTools: Object.keys(tools)
    });
  }
  const schema = Wt2(tool2.parameters);
  const parseResult = toolCall.args.trim() === "" ? A8({ value: {}, schema }) : S9({ text: toolCall.args, schema });
  if (parseResult.success === false) {
    throw new InvalidToolArgumentsError({
      toolName,
      toolArgs: toolCall.args,
      cause: parseResult.error
    });
  }
  return {
    type: "tool-call",
    toolCallId: toolCall.toolCallId,
    toolName,
    args: parseResult.value
  };
}
function asReasoningText(reasoning) {
  const reasoningText = reasoning.filter((part) => part.type === "text").map((part) => part.text).join("");
  return reasoningText.length > 0 ? reasoningText : void 0;
}
function toResponseMessages({
  text: text2 = "",
  files,
  reasoning,
  tools,
  toolCalls,
  toolResults,
  messageId,
  generateMessageId
}) {
  const responseMessages = [];
  const content = [];
  if (reasoning.length > 0) {
    content.push(
      ...reasoning.map(
        (part) => part.type === "text" ? { ...part, type: "reasoning" } : { ...part, type: "redacted-reasoning" }
      )
    );
  }
  if (files.length > 0) {
    content.push(
      ...files.map((file) => ({
        type: "file",
        data: file.base64,
        mimeType: file.mimeType
      }))
    );
  }
  if (text2.length > 0) {
    content.push({ type: "text", text: text2 });
  }
  if (toolCalls.length > 0) {
    content.push(...toolCalls);
  }
  if (content.length > 0) {
    responseMessages.push({
      role: "assistant",
      content,
      id: messageId
    });
  }
  if (toolResults.length > 0) {
    responseMessages.push({
      role: "tool",
      id: generateMessageId(),
      content: toolResults.map((toolResult) => {
        const tool2 = tools[toolResult.toolName];
        return (tool2 == null ? void 0 : tool2.experimental_toToolResultContent) != null ? {
          type: "tool-result",
          toolCallId: toolResult.toolCallId,
          toolName: toolResult.toolName,
          result: tool2.experimental_toToolResultContent(toolResult.result),
          experimental_content: tool2.experimental_toToolResultContent(
            toolResult.result
          )
        } : {
          type: "tool-result",
          toolCallId: toolResult.toolCallId,
          toolName: toolResult.toolName,
          result: toolResult.result
        };
      })
    });
  }
  return responseMessages;
}
var originalGenerateId3 = J7({
  prefix: "aitxt",
  size: 24
});
var originalGenerateMessageId = J7({
  prefix: "msg",
  size: 24
});
async function generateText({
  model,
  tools,
  toolChoice,
  system,
  prompt,
  messages,
  maxRetries: maxRetriesArg,
  abortSignal,
  headers,
  maxSteps = 1,
  experimental_generateMessageId: generateMessageId = originalGenerateMessageId,
  experimental_output: output,
  experimental_continueSteps: continueSteps = false,
  experimental_telemetry: telemetry,
  experimental_providerMetadata,
  providerOptions = experimental_providerMetadata,
  experimental_activeTools: activeTools,
  experimental_prepareStep: prepareStep,
  experimental_repairToolCall: repairToolCall,
  _internal: {
    generateId: generateId3 = originalGenerateId3,
    currentDate = () => /* @__PURE__ */ new Date()
  } = {},
  onStepFinish,
  ...settings
}) {
  var _a17;
  if (typeof model === "string" || model.specificationVersion !== "v1") {
    throw new UnsupportedModelVersionError();
  }
  if (maxSteps < 1) {
    throw new InvalidArgumentError({
      parameter: "maxSteps",
      value: maxSteps,
      message: "maxSteps must be at least 1"
    });
  }
  const { maxRetries, retry } = prepareRetries({ maxRetries: maxRetriesArg });
  const baseTelemetryAttributes = getBaseTelemetryAttributes({
    model,
    telemetry,
    headers,
    settings: { ...settings, maxRetries }
  });
  const initialPrompt = standardizePrompt({
    prompt: {
      system: (_a17 = output == null ? void 0 : output.injectIntoSystemPrompt({ system, model })) != null ? _a17 : system,
      prompt,
      messages
    },
    tools
  });
  const tracer = getTracer(telemetry);
  return recordSpan({
    name: "ai.generateText",
    attributes: selectTelemetryAttributes({
      telemetry,
      attributes: {
        ...assembleOperationName({
          operationId: "ai.generateText",
          telemetry
        }),
        ...baseTelemetryAttributes,
        // model:
        "ai.model.provider": model.provider,
        "ai.model.id": model.modelId,
        // specific settings that only make sense on the outer level:
        "ai.prompt": {
          input: () => JSON.stringify({ system, prompt, messages })
        },
        "ai.settings.maxSteps": maxSteps
      }
    }),
    tracer,
    fn: async (span) => {
      var _a18, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n;
      const callSettings = prepareCallSettings(settings);
      let currentModelResponse;
      let currentToolCalls = [];
      let currentToolResults = [];
      let currentReasoningDetails = [];
      let stepCount = 0;
      const responseMessages = [];
      let text2 = "";
      const sources = [];
      const steps = [];
      let usage = {
        completionTokens: 0,
        promptTokens: 0,
        totalTokens: 0
      };
      let stepType = "initial";
      do {
        const promptFormat = stepCount === 0 ? initialPrompt.type : "messages";
        const stepInputMessages = [
          ...initialPrompt.messages,
          ...responseMessages
        ];
        const prepareStepResult = await (prepareStep == null ? void 0 : prepareStep({
          model,
          steps,
          maxSteps,
          stepNumber: stepCount
        }));
        const stepToolChoice = (_a18 = prepareStepResult == null ? void 0 : prepareStepResult.toolChoice) != null ? _a18 : toolChoice;
        const stepActiveTools = (_b = prepareStepResult == null ? void 0 : prepareStepResult.experimental_activeTools) != null ? _b : activeTools;
        const stepModel = (_c = prepareStepResult == null ? void 0 : prepareStepResult.model) != null ? _c : model;
        const promptMessages = await convertToLanguageModelPrompt({
          prompt: {
            type: promptFormat,
            system: initialPrompt.system,
            messages: stepInputMessages
          },
          modelSupportsImageUrls: stepModel.supportsImageUrls,
          modelSupportsUrl: (_d = stepModel.supportsUrl) == null ? void 0 : _d.bind(stepModel)
          // support 'this' context
        });
        const mode = {
          type: "regular",
          ...prepareToolsAndToolChoice({
            tools,
            toolChoice: stepToolChoice,
            activeTools: stepActiveTools
          })
        };
        currentModelResponse = await retry(
          () => recordSpan({
            name: "ai.generateText.doGenerate",
            attributes: selectTelemetryAttributes({
              telemetry,
              attributes: {
                ...assembleOperationName({
                  operationId: "ai.generateText.doGenerate",
                  telemetry
                }),
                ...baseTelemetryAttributes,
                // model:
                "ai.model.provider": stepModel.provider,
                "ai.model.id": stepModel.modelId,
                // prompt:
                "ai.prompt.format": { input: () => promptFormat },
                "ai.prompt.messages": {
                  input: () => stringifyForTelemetry(promptMessages)
                },
                "ai.prompt.tools": {
                  // convert the language model level tools:
                  input: () => {
                    var _a19;
                    return (_a19 = mode.tools) == null ? void 0 : _a19.map((tool2) => JSON.stringify(tool2));
                  }
                },
                "ai.prompt.toolChoice": {
                  input: () => mode.toolChoice != null ? JSON.stringify(mode.toolChoice) : void 0
                },
                // standardized gen-ai llm span attributes:
                "gen_ai.system": stepModel.provider,
                "gen_ai.request.model": stepModel.modelId,
                "gen_ai.request.frequency_penalty": settings.frequencyPenalty,
                "gen_ai.request.max_tokens": settings.maxTokens,
                "gen_ai.request.presence_penalty": settings.presencePenalty,
                "gen_ai.request.stop_sequences": settings.stopSequences,
                "gen_ai.request.temperature": settings.temperature,
                "gen_ai.request.top_k": settings.topK,
                "gen_ai.request.top_p": settings.topP
              }
            }),
            tracer,
            fn: async (span2) => {
              var _a19, _b2, _c2, _d2, _e22, _f2;
              const result = await stepModel.doGenerate({
                mode,
                ...callSettings,
                inputFormat: promptFormat,
                responseFormat: output == null ? void 0 : output.responseFormat({ model }),
                prompt: promptMessages,
                providerMetadata: providerOptions,
                abortSignal,
                headers
              });
              const responseData = {
                id: (_b2 = (_a19 = result.response) == null ? void 0 : _a19.id) != null ? _b2 : generateId3(),
                timestamp: (_d2 = (_c2 = result.response) == null ? void 0 : _c2.timestamp) != null ? _d2 : currentDate(),
                modelId: (_f2 = (_e22 = result.response) == null ? void 0 : _e22.modelId) != null ? _f2 : stepModel.modelId
              };
              span2.setAttributes(
                selectTelemetryAttributes({
                  telemetry,
                  attributes: {
                    "ai.response.finishReason": result.finishReason,
                    "ai.response.text": {
                      output: () => result.text
                    },
                    "ai.response.toolCalls": {
                      output: () => JSON.stringify(result.toolCalls)
                    },
                    "ai.response.id": responseData.id,
                    "ai.response.model": responseData.modelId,
                    "ai.response.timestamp": responseData.timestamp.toISOString(),
                    "ai.response.providerMetadata": JSON.stringify(
                      result.providerMetadata
                    ),
                    "ai.usage.promptTokens": result.usage.promptTokens,
                    "ai.usage.completionTokens": result.usage.completionTokens,
                    // standardized gen-ai llm span attributes:
                    "gen_ai.response.finish_reasons": [result.finishReason],
                    "gen_ai.response.id": responseData.id,
                    "gen_ai.response.model": responseData.modelId,
                    "gen_ai.usage.input_tokens": result.usage.promptTokens,
                    "gen_ai.usage.output_tokens": result.usage.completionTokens
                  }
                })
              );
              return { ...result, response: responseData };
            }
          })
        );
        currentToolCalls = await Promise.all(
          ((_e2 = currentModelResponse.toolCalls) != null ? _e2 : []).map(
            (toolCall) => parseToolCall({
              toolCall,
              tools,
              repairToolCall,
              system,
              messages: stepInputMessages
            })
          )
        );
        currentToolResults = tools == null ? [] : await executeTools({
          toolCalls: currentToolCalls,
          tools,
          tracer,
          telemetry,
          messages: stepInputMessages,
          abortSignal
        });
        const currentUsage = calculateLanguageModelUsage(
          currentModelResponse.usage
        );
        usage = addLanguageModelUsage(usage, currentUsage);
        let nextStepType = "done";
        if (++stepCount < maxSteps) {
          if (continueSteps && currentModelResponse.finishReason === "length" && // only use continue when there are no tool calls:
          currentToolCalls.length === 0) {
            nextStepType = "continue";
          } else if (
            // there are tool calls:
            currentToolCalls.length > 0 && // all current tool calls have results:
            currentToolResults.length === currentToolCalls.length
          ) {
            nextStepType = "tool-result";
          }
        }
        const originalText = (_f = currentModelResponse.text) != null ? _f : "";
        const stepTextLeadingWhitespaceTrimmed = stepType === "continue" && // only for continue steps
        text2.trimEnd() !== text2 ? originalText.trimStart() : originalText;
        const stepText = nextStepType === "continue" ? removeTextAfterLastWhitespace(stepTextLeadingWhitespaceTrimmed) : stepTextLeadingWhitespaceTrimmed;
        text2 = nextStepType === "continue" || stepType === "continue" ? text2 + stepText : stepText;
        currentReasoningDetails = asReasoningDetails(
          currentModelResponse.reasoning
        );
        sources.push(...(_g = currentModelResponse.sources) != null ? _g : []);
        if (stepType === "continue") {
          const lastMessage = responseMessages[responseMessages.length - 1];
          if (typeof lastMessage.content === "string") {
            lastMessage.content += stepText;
          } else {
            lastMessage.content.push({
              text: stepText,
              type: "text"
            });
          }
        } else {
          responseMessages.push(
            ...toResponseMessages({
              text: text2,
              files: asFiles(currentModelResponse.files),
              reasoning: asReasoningDetails(currentModelResponse.reasoning),
              tools: tools != null ? tools : {},
              toolCalls: currentToolCalls,
              toolResults: currentToolResults,
              messageId: generateMessageId(),
              generateMessageId
            })
          );
        }
        const currentStepResult = {
          stepType,
          text: stepText,
          // TODO v5: rename reasoning to reasoningText (and use reasoning for composite array)
          reasoning: asReasoningText(currentReasoningDetails),
          reasoningDetails: currentReasoningDetails,
          files: asFiles(currentModelResponse.files),
          sources: (_h = currentModelResponse.sources) != null ? _h : [],
          toolCalls: currentToolCalls,
          toolResults: currentToolResults,
          finishReason: currentModelResponse.finishReason,
          usage: currentUsage,
          warnings: currentModelResponse.warnings,
          logprobs: currentModelResponse.logprobs,
          request: (_i = currentModelResponse.request) != null ? _i : {},
          response: {
            ...currentModelResponse.response,
            headers: (_j = currentModelResponse.rawResponse) == null ? void 0 : _j.headers,
            body: (_k = currentModelResponse.rawResponse) == null ? void 0 : _k.body,
            // deep clone msgs to avoid mutating past messages in multi-step:
            messages: structuredClone(responseMessages)
          },
          providerMetadata: currentModelResponse.providerMetadata,
          experimental_providerMetadata: currentModelResponse.providerMetadata,
          isContinued: nextStepType === "continue"
        };
        steps.push(currentStepResult);
        await (onStepFinish == null ? void 0 : onStepFinish(currentStepResult));
        stepType = nextStepType;
      } while (stepType !== "done");
      span.setAttributes(
        selectTelemetryAttributes({
          telemetry,
          attributes: {
            "ai.response.finishReason": currentModelResponse.finishReason,
            "ai.response.text": {
              output: () => currentModelResponse.text
            },
            "ai.response.toolCalls": {
              output: () => JSON.stringify(currentModelResponse.toolCalls)
            },
            "ai.usage.promptTokens": currentModelResponse.usage.promptTokens,
            "ai.usage.completionTokens": currentModelResponse.usage.completionTokens,
            "ai.response.providerMetadata": JSON.stringify(
              currentModelResponse.providerMetadata
            )
          }
        })
      );
      return new DefaultGenerateTextResult({
        text: text2,
        files: asFiles(currentModelResponse.files),
        reasoning: asReasoningText(currentReasoningDetails),
        reasoningDetails: currentReasoningDetails,
        sources,
        outputResolver: () => {
          if (output == null) {
            throw new NoOutputSpecifiedError();
          }
          return output.parseOutput(
            { text: text2 },
            {
              response: currentModelResponse.response,
              usage,
              finishReason: currentModelResponse.finishReason
            }
          );
        },
        toolCalls: currentToolCalls,
        toolResults: currentToolResults,
        finishReason: currentModelResponse.finishReason,
        usage,
        warnings: currentModelResponse.warnings,
        request: (_l = currentModelResponse.request) != null ? _l : {},
        response: {
          ...currentModelResponse.response,
          headers: (_m = currentModelResponse.rawResponse) == null ? void 0 : _m.headers,
          body: (_n = currentModelResponse.rawResponse) == null ? void 0 : _n.body,
          messages: responseMessages
        },
        logprobs: currentModelResponse.logprobs,
        steps,
        providerMetadata: currentModelResponse.providerMetadata
      });
    }
  });
}
async function executeTools({
  toolCalls,
  tools,
  tracer,
  telemetry,
  messages,
  abortSignal
}) {
  const toolResults = await Promise.all(
    toolCalls.map(async ({ toolCallId, toolName, args }) => {
      const tool2 = tools[toolName];
      if ((tool2 == null ? void 0 : tool2.execute) == null) {
        return void 0;
      }
      const result = await recordSpan({
        name: "ai.toolCall",
        attributes: selectTelemetryAttributes({
          telemetry,
          attributes: {
            ...assembleOperationName({
              operationId: "ai.toolCall",
              telemetry
            }),
            "ai.toolCall.name": toolName,
            "ai.toolCall.id": toolCallId,
            "ai.toolCall.args": {
              output: () => JSON.stringify(args)
            }
          }
        }),
        tracer,
        fn: async (span) => {
          try {
            const result2 = await tool2.execute(args, {
              toolCallId,
              messages,
              abortSignal
            });
            try {
              span.setAttributes(
                selectTelemetryAttributes({
                  telemetry,
                  attributes: {
                    "ai.toolCall.result": {
                      output: () => JSON.stringify(result2)
                    }
                  }
                })
              );
            } catch (ignored) {
            }
            return result2;
          } catch (error) {
            recordErrorOnSpan(span, error);
            throw new ToolExecutionError({
              toolCallId,
              toolName,
              toolArgs: args,
              cause: error
            });
          }
        }
      });
      return {
        type: "tool-result",
        toolCallId,
        toolName,
        args,
        result
      };
    })
  );
  return toolResults.filter(
    (result) => result != null
  );
}
var DefaultGenerateTextResult = class {
  constructor(options) {
    this.text = options.text;
    this.files = options.files;
    this.reasoning = options.reasoning;
    this.reasoningDetails = options.reasoningDetails;
    this.toolCalls = options.toolCalls;
    this.toolResults = options.toolResults;
    this.finishReason = options.finishReason;
    this.usage = options.usage;
    this.warnings = options.warnings;
    this.request = options.request;
    this.response = options.response;
    this.steps = options.steps;
    this.experimental_providerMetadata = options.providerMetadata;
    this.providerMetadata = options.providerMetadata;
    this.logprobs = options.logprobs;
    this.outputResolver = options.outputResolver;
    this.sources = options.sources;
  }
  get experimental_output() {
    return this.outputResolver();
  }
};
function asReasoningDetails(reasoning) {
  if (reasoning == null) {
    return [];
  }
  if (typeof reasoning === "string") {
    return [{ type: "text", text: reasoning }];
  }
  return reasoning;
}
function asFiles(files) {
  var _a17;
  return (_a17 = files == null ? void 0 : files.map((file) => new DefaultGeneratedFile(file))) != null ? _a17 : [];
}
var output_exports = {};
__export3(output_exports, {
  object: () => object,
  text: () => text
});
var name14 = "AI_InvalidStreamPartError";
var marker14 = `vercel.ai.error.${name14}`;
var symbol14 = Symbol.for(marker14);
var _a14;
var InvalidStreamPartError = class extends a3 {
  constructor({
    chunk,
    message
  }) {
    super({ name: name14, message });
    this[_a14] = true;
    this.chunk = chunk;
  }
  static isInstance(error) {
    return a3.hasMarker(error, marker14);
  }
};
_a14 = symbol14;
var name15 = "AI_MCPClientError";
var marker15 = `vercel.ai.error.${name15}`;
var symbol15 = Symbol.for(marker15);
var _a15;
_a15 = symbol15;
var text = () => ({
  type: "text",
  responseFormat: () => ({ type: "text" }),
  injectIntoSystemPrompt({ system }) {
    return system;
  },
  parsePartial({ text: text2 }) {
    return { partial: text2 };
  },
  parseOutput({ text: text2 }) {
    return text2;
  }
});
var object = ({
  schema: inputSchema
}) => {
  const schema = Wt2(inputSchema);
  return {
    type: "object",
    responseFormat: ({ model }) => ({
      type: "json",
      schema: model.supportsStructuredOutputs ? schema.jsonSchema : void 0
    }),
    injectIntoSystemPrompt({ system, model }) {
      return model.supportsStructuredOutputs ? system : injectJsonInstruction({
        prompt: system,
        schema: schema.jsonSchema
      });
    },
    parsePartial({ text: text2 }) {
      const result = K7(text2);
      switch (result.state) {
        case "failed-parse":
        case "undefined-input":
          return void 0;
        case "repaired-parse":
        case "successful-parse":
          return {
            // Note: currently no validation of partial results:
            partial: result.value
          };
        default: {
          const _exhaustiveCheck = result.state;
          throw new Error(`Unsupported parse state: ${_exhaustiveCheck}`);
        }
      }
    },
    parseOutput({ text: text2 }, context2) {
      const parseResult = S9({ text: text2 });
      if (!parseResult.success) {
        throw new NoObjectGeneratedError({
          message: "No object generated: could not parse the response.",
          cause: parseResult.error,
          text: text2,
          response: context2.response,
          usage: context2.usage,
          finishReason: context2.finishReason
        });
      }
      const validationResult = A8({
        value: parseResult.value,
        schema
      });
      if (!validationResult.success) {
        throw new NoObjectGeneratedError({
          message: "No object generated: response did not match schema.",
          cause: validationResult.error,
          text: text2,
          response: context2.response,
          usage: context2.usage,
          finishReason: context2.finishReason
        });
      }
      return validationResult.value;
    }
  };
};
function asArray(value) {
  return value === void 0 ? [] : Array.isArray(value) ? value : [value];
}
async function consumeStream({
  stream,
  onError
}) {
  const reader = stream.getReader();
  try {
    while (true) {
      const { done } = await reader.read();
      if (done)
        break;
    }
  } catch (error) {
    onError == null ? void 0 : onError(error);
  } finally {
    reader.releaseLock();
  }
}
function mergeStreams(stream1, stream2) {
  const reader1 = stream1.getReader();
  const reader2 = stream2.getReader();
  let lastRead1 = void 0;
  let lastRead2 = void 0;
  let stream1Done = false;
  let stream2Done = false;
  async function readStream1(controller) {
    try {
      if (lastRead1 == null) {
        lastRead1 = reader1.read();
      }
      const result = await lastRead1;
      lastRead1 = void 0;
      if (!result.done) {
        controller.enqueue(result.value);
      } else {
        controller.close();
      }
    } catch (error) {
      controller.error(error);
    }
  }
  async function readStream2(controller) {
    try {
      if (lastRead2 == null) {
        lastRead2 = reader2.read();
      }
      const result = await lastRead2;
      lastRead2 = void 0;
      if (!result.done) {
        controller.enqueue(result.value);
      } else {
        controller.close();
      }
    } catch (error) {
      controller.error(error);
    }
  }
  return new ReadableStream({
    async pull(controller) {
      try {
        if (stream1Done) {
          await readStream2(controller);
          return;
        }
        if (stream2Done) {
          await readStream1(controller);
          return;
        }
        if (lastRead1 == null) {
          lastRead1 = reader1.read();
        }
        if (lastRead2 == null) {
          lastRead2 = reader2.read();
        }
        const { result, reader } = await Promise.race([
          lastRead1.then((result2) => ({ result: result2, reader: reader1 })),
          lastRead2.then((result2) => ({ result: result2, reader: reader2 }))
        ]);
        if (!result.done) {
          controller.enqueue(result.value);
        }
        if (reader === reader1) {
          lastRead1 = void 0;
          if (result.done) {
            await readStream2(controller);
            stream1Done = true;
          }
        } else {
          lastRead2 = void 0;
          if (result.done) {
            stream2Done = true;
            await readStream1(controller);
          }
        }
      } catch (error) {
        controller.error(error);
      }
    },
    cancel() {
      reader1.cancel();
      reader2.cancel();
    }
  });
}
function runToolsTransformation({
  tools,
  generatorStream,
  toolCallStreaming,
  tracer,
  telemetry,
  system,
  messages,
  abortSignal,
  repairToolCall
}) {
  let toolResultsStreamController = null;
  const toolResultsStream = new ReadableStream({
    start(controller) {
      toolResultsStreamController = controller;
    }
  });
  const activeToolCalls = {};
  const outstandingToolResults = /* @__PURE__ */ new Set();
  let canClose = false;
  let finishChunk = void 0;
  function attemptClose() {
    if (canClose && outstandingToolResults.size === 0) {
      if (finishChunk != null) {
        toolResultsStreamController.enqueue(finishChunk);
      }
      toolResultsStreamController.close();
    }
  }
  const forwardStream = new TransformStream({
    async transform(chunk, controller) {
      const chunkType = chunk.type;
      switch (chunkType) {
        case "text-delta":
        case "reasoning":
        case "reasoning-signature":
        case "redacted-reasoning":
        case "source":
        case "response-metadata":
        case "error": {
          controller.enqueue(chunk);
          break;
        }
        case "file": {
          controller.enqueue(
            new DefaultGeneratedFileWithType({
              data: chunk.data,
              mimeType: chunk.mimeType
            })
          );
          break;
        }
        case "tool-call-delta": {
          if (toolCallStreaming) {
            if (!activeToolCalls[chunk.toolCallId]) {
              controller.enqueue({
                type: "tool-call-streaming-start",
                toolCallId: chunk.toolCallId,
                toolName: chunk.toolName
              });
              activeToolCalls[chunk.toolCallId] = true;
            }
            controller.enqueue({
              type: "tool-call-delta",
              toolCallId: chunk.toolCallId,
              toolName: chunk.toolName,
              argsTextDelta: chunk.argsTextDelta
            });
          }
          break;
        }
        case "tool-call": {
          try {
            const toolCall = await parseToolCall({
              toolCall: chunk,
              tools,
              repairToolCall,
              system,
              messages
            });
            controller.enqueue(toolCall);
            const tool2 = tools[toolCall.toolName];
            if (tool2.execute != null) {
              const toolExecutionId = Z5();
              outstandingToolResults.add(toolExecutionId);
              recordSpan({
                name: "ai.toolCall",
                attributes: selectTelemetryAttributes({
                  telemetry,
                  attributes: {
                    ...assembleOperationName({
                      operationId: "ai.toolCall",
                      telemetry
                    }),
                    "ai.toolCall.name": toolCall.toolName,
                    "ai.toolCall.id": toolCall.toolCallId,
                    "ai.toolCall.args": {
                      output: () => JSON.stringify(toolCall.args)
                    }
                  }
                }),
                tracer,
                fn: async (span) => tool2.execute(toolCall.args, {
                  toolCallId: toolCall.toolCallId,
                  messages,
                  abortSignal
                }).then(
                  (result) => {
                    toolResultsStreamController.enqueue({
                      ...toolCall,
                      type: "tool-result",
                      result
                    });
                    outstandingToolResults.delete(toolExecutionId);
                    attemptClose();
                    try {
                      span.setAttributes(
                        selectTelemetryAttributes({
                          telemetry,
                          attributes: {
                            "ai.toolCall.result": {
                              output: () => JSON.stringify(result)
                            }
                          }
                        })
                      );
                    } catch (ignored) {
                    }
                  },
                  (error) => {
                    recordErrorOnSpan(span, error);
                    toolResultsStreamController.enqueue({
                      type: "error",
                      error: new ToolExecutionError({
                        toolCallId: toolCall.toolCallId,
                        toolName: toolCall.toolName,
                        toolArgs: toolCall.args,
                        cause: error
                      })
                    });
                    outstandingToolResults.delete(toolExecutionId);
                    attemptClose();
                  }
                )
              });
            }
          } catch (error) {
            toolResultsStreamController.enqueue({
              type: "error",
              error
            });
          }
          break;
        }
        case "finish": {
          finishChunk = {
            type: "finish",
            finishReason: chunk.finishReason,
            logprobs: chunk.logprobs,
            usage: calculateLanguageModelUsage(chunk.usage),
            experimental_providerMetadata: chunk.providerMetadata
          };
          break;
        }
        default: {
          const _exhaustiveCheck = chunkType;
          throw new Error(`Unhandled chunk type: ${_exhaustiveCheck}`);
        }
      }
    },
    flush() {
      canClose = true;
      attemptClose();
    }
  });
  return new ReadableStream({
    async start(controller) {
      return Promise.all([
        generatorStream.pipeThrough(forwardStream).pipeTo(
          new WritableStream({
            write(chunk) {
              controller.enqueue(chunk);
            },
            close() {
            }
          })
        ),
        toolResultsStream.pipeTo(
          new WritableStream({
            write(chunk) {
              controller.enqueue(chunk);
            },
            close() {
              controller.close();
            }
          })
        )
      ]);
    }
  });
}
var originalGenerateId4 = J7({
  prefix: "aitxt",
  size: 24
});
var originalGenerateMessageId2 = J7({
  prefix: "msg",
  size: 24
});
function streamText({
  model,
  tools,
  toolChoice,
  system,
  prompt,
  messages,
  maxRetries,
  abortSignal,
  headers,
  maxSteps = 1,
  experimental_generateMessageId: generateMessageId = originalGenerateMessageId2,
  experimental_output: output,
  experimental_continueSteps: continueSteps = false,
  experimental_telemetry: telemetry,
  experimental_providerMetadata,
  providerOptions = experimental_providerMetadata,
  experimental_toolCallStreaming = false,
  toolCallStreaming = experimental_toolCallStreaming,
  experimental_activeTools: activeTools,
  experimental_repairToolCall: repairToolCall,
  experimental_transform: transform,
  onChunk,
  onError,
  onFinish,
  onStepFinish,
  _internal: {
    now: now2 = now,
    generateId: generateId3 = originalGenerateId4,
    currentDate = () => /* @__PURE__ */ new Date()
  } = {},
  ...settings
}) {
  if (typeof model === "string" || model.specificationVersion !== "v1") {
    throw new UnsupportedModelVersionError();
  }
  return new DefaultStreamTextResult({
    model,
    telemetry,
    headers,
    settings,
    maxRetries,
    abortSignal,
    system,
    prompt,
    messages,
    tools,
    toolChoice,
    toolCallStreaming,
    transforms: asArray(transform),
    activeTools,
    repairToolCall,
    maxSteps,
    output,
    continueSteps,
    providerOptions,
    onChunk,
    onError,
    onFinish,
    onStepFinish,
    now: now2,
    currentDate,
    generateId: generateId3,
    generateMessageId
  });
}
function createOutputTransformStream(output) {
  if (!output) {
    return new TransformStream({
      transform(chunk, controller) {
        controller.enqueue({ part: chunk, partialOutput: void 0 });
      }
    });
  }
  let text2 = "";
  let textChunk = "";
  let lastPublishedJson = "";
  function publishTextChunk({
    controller,
    partialOutput = void 0
  }) {
    controller.enqueue({
      part: { type: "text-delta", textDelta: textChunk },
      partialOutput
    });
    textChunk = "";
  }
  return new TransformStream({
    transform(chunk, controller) {
      if (chunk.type === "step-finish") {
        publishTextChunk({ controller });
      }
      if (chunk.type !== "text-delta") {
        controller.enqueue({ part: chunk, partialOutput: void 0 });
        return;
      }
      text2 += chunk.textDelta;
      textChunk += chunk.textDelta;
      const result = output.parsePartial({ text: text2 });
      if (result != null) {
        const currentJson = JSON.stringify(result.partial);
        if (currentJson !== lastPublishedJson) {
          publishTextChunk({ controller, partialOutput: result.partial });
          lastPublishedJson = currentJson;
        }
      }
    },
    flush(controller) {
      if (textChunk.length > 0) {
        publishTextChunk({ controller });
      }
    }
  });
}
var DefaultStreamTextResult = class {
  constructor({
    model,
    telemetry,
    headers,
    settings,
    maxRetries: maxRetriesArg,
    abortSignal,
    system,
    prompt,
    messages,
    tools,
    toolChoice,
    toolCallStreaming,
    transforms,
    activeTools,
    repairToolCall,
    maxSteps,
    output,
    continueSteps,
    providerOptions,
    now: now2,
    currentDate,
    generateId: generateId3,
    generateMessageId,
    onChunk,
    onError,
    onFinish,
    onStepFinish
  }) {
    this.warningsPromise = new DelayedPromise();
    this.usagePromise = new DelayedPromise();
    this.finishReasonPromise = new DelayedPromise();
    this.providerMetadataPromise = new DelayedPromise();
    this.textPromise = new DelayedPromise();
    this.reasoningPromise = new DelayedPromise();
    this.reasoningDetailsPromise = new DelayedPromise();
    this.sourcesPromise = new DelayedPromise();
    this.filesPromise = new DelayedPromise();
    this.toolCallsPromise = new DelayedPromise();
    this.toolResultsPromise = new DelayedPromise();
    this.requestPromise = new DelayedPromise();
    this.responsePromise = new DelayedPromise();
    this.stepsPromise = new DelayedPromise();
    var _a17;
    if (maxSteps < 1) {
      throw new InvalidArgumentError({
        parameter: "maxSteps",
        value: maxSteps,
        message: "maxSteps must be at least 1"
      });
    }
    this.output = output;
    let recordedStepText = "";
    let recordedContinuationText = "";
    let recordedFullText = "";
    let stepReasoning = [];
    let stepFiles = [];
    let activeReasoningText = void 0;
    let recordedStepSources = [];
    const recordedSources = [];
    const recordedResponse = {
      id: generateId3(),
      timestamp: currentDate(),
      modelId: model.modelId,
      messages: []
    };
    let recordedToolCalls = [];
    let recordedToolResults = [];
    let recordedFinishReason = void 0;
    let recordedUsage = void 0;
    let stepType = "initial";
    const recordedSteps = [];
    let rootSpan;
    const eventProcessor = new TransformStream({
      async transform(chunk, controller) {
        controller.enqueue(chunk);
        const { part } = chunk;
        if (part.type === "text-delta" || part.type === "reasoning" || part.type === "source" || part.type === "tool-call" || part.type === "tool-result" || part.type === "tool-call-streaming-start" || part.type === "tool-call-delta") {
          await (onChunk == null ? void 0 : onChunk({ chunk: part }));
        }
        if (part.type === "error") {
          await (onError == null ? void 0 : onError({ error: part.error }));
        }
        if (part.type === "text-delta") {
          recordedStepText += part.textDelta;
          recordedContinuationText += part.textDelta;
          recordedFullText += part.textDelta;
        }
        if (part.type === "reasoning") {
          if (activeReasoningText == null) {
            activeReasoningText = { type: "text", text: part.textDelta };
            stepReasoning.push(activeReasoningText);
          } else {
            activeReasoningText.text += part.textDelta;
          }
        }
        if (part.type === "reasoning-signature") {
          if (activeReasoningText == null) {
            throw new a3({
              name: "InvalidStreamPart",
              message: "reasoning-signature without reasoning"
            });
          }
          activeReasoningText.signature = part.signature;
          activeReasoningText = void 0;
        }
        if (part.type === "redacted-reasoning") {
          stepReasoning.push({ type: "redacted", data: part.data });
        }
        if (part.type === "file") {
          stepFiles.push(part);
        }
        if (part.type === "source") {
          recordedSources.push(part.source);
          recordedStepSources.push(part.source);
        }
        if (part.type === "tool-call") {
          recordedToolCalls.push(part);
        }
        if (part.type === "tool-result") {
          recordedToolResults.push(part);
        }
        if (part.type === "step-finish") {
          const stepMessages = toResponseMessages({
            text: recordedContinuationText,
            files: stepFiles,
            reasoning: stepReasoning,
            tools: tools != null ? tools : {},
            toolCalls: recordedToolCalls,
            toolResults: recordedToolResults,
            messageId: part.messageId,
            generateMessageId
          });
          const currentStep = recordedSteps.length;
          let nextStepType = "done";
          if (currentStep + 1 < maxSteps) {
            if (continueSteps && part.finishReason === "length" && // only use continue when there are no tool calls:
            recordedToolCalls.length === 0) {
              nextStepType = "continue";
            } else if (
              // there are tool calls:
              recordedToolCalls.length > 0 && // all current tool calls have results:
              recordedToolResults.length === recordedToolCalls.length
            ) {
              nextStepType = "tool-result";
            }
          }
          const currentStepResult = {
            stepType,
            text: recordedStepText,
            reasoning: asReasoningText(stepReasoning),
            reasoningDetails: stepReasoning,
            files: stepFiles,
            sources: recordedStepSources,
            toolCalls: recordedToolCalls,
            toolResults: recordedToolResults,
            finishReason: part.finishReason,
            usage: part.usage,
            warnings: part.warnings,
            logprobs: part.logprobs,
            request: part.request,
            response: {
              ...part.response,
              messages: [...recordedResponse.messages, ...stepMessages]
            },
            providerMetadata: part.experimental_providerMetadata,
            experimental_providerMetadata: part.experimental_providerMetadata,
            isContinued: part.isContinued
          };
          await (onStepFinish == null ? void 0 : onStepFinish(currentStepResult));
          recordedSteps.push(currentStepResult);
          recordedToolCalls = [];
          recordedToolResults = [];
          recordedStepText = "";
          recordedStepSources = [];
          stepReasoning = [];
          stepFiles = [];
          activeReasoningText = void 0;
          if (nextStepType !== "done") {
            stepType = nextStepType;
          }
          if (nextStepType !== "continue") {
            recordedResponse.messages.push(...stepMessages);
            recordedContinuationText = "";
          }
        }
        if (part.type === "finish") {
          recordedResponse.id = part.response.id;
          recordedResponse.timestamp = part.response.timestamp;
          recordedResponse.modelId = part.response.modelId;
          recordedResponse.headers = part.response.headers;
          recordedUsage = part.usage;
          recordedFinishReason = part.finishReason;
        }
      },
      async flush(controller) {
        var _a18;
        try {
          if (recordedSteps.length === 0) {
            return;
          }
          const lastStep = recordedSteps[recordedSteps.length - 1];
          self.warningsPromise.resolve(lastStep.warnings);
          self.requestPromise.resolve(lastStep.request);
          self.responsePromise.resolve(lastStep.response);
          self.toolCallsPromise.resolve(lastStep.toolCalls);
          self.toolResultsPromise.resolve(lastStep.toolResults);
          self.providerMetadataPromise.resolve(
            lastStep.experimental_providerMetadata
          );
          self.reasoningPromise.resolve(lastStep.reasoning);
          self.reasoningDetailsPromise.resolve(lastStep.reasoningDetails);
          const finishReason = recordedFinishReason != null ? recordedFinishReason : "unknown";
          const usage = recordedUsage != null ? recordedUsage : {
            completionTokens: NaN,
            promptTokens: NaN,
            totalTokens: NaN
          };
          self.finishReasonPromise.resolve(finishReason);
          self.usagePromise.resolve(usage);
          self.textPromise.resolve(recordedFullText);
          self.sourcesPromise.resolve(recordedSources);
          self.filesPromise.resolve(lastStep.files);
          self.stepsPromise.resolve(recordedSteps);
          await (onFinish == null ? void 0 : onFinish({
            finishReason,
            logprobs: void 0,
            usage,
            text: recordedFullText,
            reasoning: lastStep.reasoning,
            reasoningDetails: lastStep.reasoningDetails,
            files: lastStep.files,
            sources: lastStep.sources,
            toolCalls: lastStep.toolCalls,
            toolResults: lastStep.toolResults,
            request: (_a18 = lastStep.request) != null ? _a18 : {},
            response: lastStep.response,
            warnings: lastStep.warnings,
            providerMetadata: lastStep.providerMetadata,
            experimental_providerMetadata: lastStep.experimental_providerMetadata,
            steps: recordedSteps
          }));
          rootSpan.setAttributes(
            selectTelemetryAttributes({
              telemetry,
              attributes: {
                "ai.response.finishReason": finishReason,
                "ai.response.text": { output: () => recordedFullText },
                "ai.response.toolCalls": {
                  output: () => {
                    var _a19;
                    return ((_a19 = lastStep.toolCalls) == null ? void 0 : _a19.length) ? JSON.stringify(lastStep.toolCalls) : void 0;
                  }
                },
                "ai.usage.promptTokens": usage.promptTokens,
                "ai.usage.completionTokens": usage.completionTokens,
                "ai.response.providerMetadata": JSON.stringify(
                  lastStep.providerMetadata
                )
              }
            })
          );
        } catch (error) {
          controller.error(error);
        } finally {
          rootSpan.end();
        }
      }
    });
    const stitchableStream = createStitchableStream();
    this.addStream = stitchableStream.addStream;
    this.closeStream = stitchableStream.close;
    let stream = stitchableStream.stream;
    for (const transform of transforms) {
      stream = stream.pipeThrough(
        transform({
          tools,
          stopStream() {
            stitchableStream.terminate();
          }
        })
      );
    }
    this.baseStream = stream.pipeThrough(createOutputTransformStream(output)).pipeThrough(eventProcessor);
    const { maxRetries, retry } = prepareRetries({
      maxRetries: maxRetriesArg
    });
    const tracer = getTracer(telemetry);
    const baseTelemetryAttributes = getBaseTelemetryAttributes({
      model,
      telemetry,
      headers,
      settings: { ...settings, maxRetries }
    });
    const initialPrompt = standardizePrompt({
      prompt: {
        system: (_a17 = output == null ? void 0 : output.injectIntoSystemPrompt({ system, model })) != null ? _a17 : system,
        prompt,
        messages
      },
      tools
    });
    const self = this;
    recordSpan({
      name: "ai.streamText",
      attributes: selectTelemetryAttributes({
        telemetry,
        attributes: {
          ...assembleOperationName({ operationId: "ai.streamText", telemetry }),
          ...baseTelemetryAttributes,
          // specific settings that only make sense on the outer level:
          "ai.prompt": {
            input: () => JSON.stringify({ system, prompt, messages })
          },
          "ai.settings.maxSteps": maxSteps
        }
      }),
      tracer,
      endWhenDone: false,
      fn: async (rootSpanArg) => {
        rootSpan = rootSpanArg;
        async function streamStep({
          currentStep,
          responseMessages,
          usage,
          stepType: stepType2,
          previousStepText,
          hasLeadingWhitespace,
          messageId
        }) {
          var _a18;
          const promptFormat = responseMessages.length === 0 ? initialPrompt.type : "messages";
          const stepInputMessages = [
            ...initialPrompt.messages,
            ...responseMessages
          ];
          const promptMessages = await convertToLanguageModelPrompt({
            prompt: {
              type: promptFormat,
              system: initialPrompt.system,
              messages: stepInputMessages
            },
            modelSupportsImageUrls: model.supportsImageUrls,
            modelSupportsUrl: (_a18 = model.supportsUrl) == null ? void 0 : _a18.bind(model)
            // support 'this' context
          });
          const mode = {
            type: "regular",
            ...prepareToolsAndToolChoice({ tools, toolChoice, activeTools })
          };
          const {
            result: { stream: stream2, warnings, rawResponse, request },
            doStreamSpan,
            startTimestampMs
          } = await retry(
            () => recordSpan({
              name: "ai.streamText.doStream",
              attributes: selectTelemetryAttributes({
                telemetry,
                attributes: {
                  ...assembleOperationName({
                    operationId: "ai.streamText.doStream",
                    telemetry
                  }),
                  ...baseTelemetryAttributes,
                  "ai.prompt.format": {
                    input: () => promptFormat
                  },
                  "ai.prompt.messages": {
                    input: () => stringifyForTelemetry(promptMessages)
                  },
                  "ai.prompt.tools": {
                    // convert the language model level tools:
                    input: () => {
                      var _a19;
                      return (_a19 = mode.tools) == null ? void 0 : _a19.map((tool2) => JSON.stringify(tool2));
                    }
                  },
                  "ai.prompt.toolChoice": {
                    input: () => mode.toolChoice != null ? JSON.stringify(mode.toolChoice) : void 0
                  },
                  // standardized gen-ai llm span attributes:
                  "gen_ai.system": model.provider,
                  "gen_ai.request.model": model.modelId,
                  "gen_ai.request.frequency_penalty": settings.frequencyPenalty,
                  "gen_ai.request.max_tokens": settings.maxTokens,
                  "gen_ai.request.presence_penalty": settings.presencePenalty,
                  "gen_ai.request.stop_sequences": settings.stopSequences,
                  "gen_ai.request.temperature": settings.temperature,
                  "gen_ai.request.top_k": settings.topK,
                  "gen_ai.request.top_p": settings.topP
                }
              }),
              tracer,
              endWhenDone: false,
              fn: async (doStreamSpan2) => ({
                startTimestampMs: now2(),
                // get before the call
                doStreamSpan: doStreamSpan2,
                result: await model.doStream({
                  mode,
                  ...prepareCallSettings(settings),
                  inputFormat: promptFormat,
                  responseFormat: output == null ? void 0 : output.responseFormat({ model }),
                  prompt: promptMessages,
                  providerMetadata: providerOptions,
                  abortSignal,
                  headers
                })
              })
            })
          );
          const transformedStream = runToolsTransformation({
            tools,
            generatorStream: stream2,
            toolCallStreaming,
            tracer,
            telemetry,
            system,
            messages: stepInputMessages,
            repairToolCall,
            abortSignal
          });
          const stepRequest = request != null ? request : {};
          const stepToolCalls = [];
          const stepToolResults = [];
          const stepReasoning2 = [];
          const stepFiles2 = [];
          let activeReasoningText2 = void 0;
          let stepFinishReason = "unknown";
          let stepUsage = {
            promptTokens: 0,
            completionTokens: 0,
            totalTokens: 0
          };
          let stepProviderMetadata;
          let stepFirstChunk = true;
          let stepText = "";
          let fullStepText = stepType2 === "continue" ? previousStepText : "";
          let stepLogProbs;
          let stepResponse = {
            id: generateId3(),
            timestamp: currentDate(),
            modelId: model.modelId
          };
          let chunkBuffer = "";
          let chunkTextPublished = false;
          let inWhitespacePrefix = true;
          let hasWhitespaceSuffix = false;
          async function publishTextChunk({
            controller,
            chunk
          }) {
            controller.enqueue(chunk);
            stepText += chunk.textDelta;
            fullStepText += chunk.textDelta;
            chunkTextPublished = true;
            hasWhitespaceSuffix = chunk.textDelta.trimEnd() !== chunk.textDelta;
          }
          self.addStream(
            transformedStream.pipeThrough(
              new TransformStream({
                async transform(chunk, controller) {
                  var _a19, _b, _c;
                  if (stepFirstChunk) {
                    const msToFirstChunk = now2() - startTimestampMs;
                    stepFirstChunk = false;
                    doStreamSpan.addEvent("ai.stream.firstChunk", {
                      "ai.response.msToFirstChunk": msToFirstChunk
                    });
                    doStreamSpan.setAttributes({
                      "ai.response.msToFirstChunk": msToFirstChunk
                    });
                    controller.enqueue({
                      type: "step-start",
                      messageId,
                      request: stepRequest,
                      warnings: warnings != null ? warnings : []
                    });
                  }
                  if (chunk.type === "text-delta" && chunk.textDelta.length === 0) {
                    return;
                  }
                  const chunkType = chunk.type;
                  switch (chunkType) {
                    case "text-delta": {
                      if (continueSteps) {
                        const trimmedChunkText = inWhitespacePrefix && hasLeadingWhitespace ? chunk.textDelta.trimStart() : chunk.textDelta;
                        if (trimmedChunkText.length === 0) {
                          break;
                        }
                        inWhitespacePrefix = false;
                        chunkBuffer += trimmedChunkText;
                        const split = splitOnLastWhitespace(chunkBuffer);
                        if (split != null) {
                          chunkBuffer = split.suffix;
                          await publishTextChunk({
                            controller,
                            chunk: {
                              type: "text-delta",
                              textDelta: split.prefix + split.whitespace
                            }
                          });
                        }
                      } else {
                        await publishTextChunk({ controller, chunk });
                      }
                      break;
                    }
                    case "reasoning": {
                      controller.enqueue(chunk);
                      if (activeReasoningText2 == null) {
                        activeReasoningText2 = {
                          type: "text",
                          text: chunk.textDelta
                        };
                        stepReasoning2.push(activeReasoningText2);
                      } else {
                        activeReasoningText2.text += chunk.textDelta;
                      }
                      break;
                    }
                    case "reasoning-signature": {
                      controller.enqueue(chunk);
                      if (activeReasoningText2 == null) {
                        throw new InvalidStreamPartError({
                          chunk,
                          message: "reasoning-signature without reasoning"
                        });
                      }
                      activeReasoningText2.signature = chunk.signature;
                      activeReasoningText2 = void 0;
                      break;
                    }
                    case "redacted-reasoning": {
                      controller.enqueue(chunk);
                      stepReasoning2.push({
                        type: "redacted",
                        data: chunk.data
                      });
                      break;
                    }
                    case "tool-call": {
                      controller.enqueue(chunk);
                      stepToolCalls.push(chunk);
                      break;
                    }
                    case "tool-result": {
                      controller.enqueue(chunk);
                      stepToolResults.push(chunk);
                      break;
                    }
                    case "response-metadata": {
                      stepResponse = {
                        id: (_a19 = chunk.id) != null ? _a19 : stepResponse.id,
                        timestamp: (_b = chunk.timestamp) != null ? _b : stepResponse.timestamp,
                        modelId: (_c = chunk.modelId) != null ? _c : stepResponse.modelId
                      };
                      break;
                    }
                    case "finish": {
                      stepUsage = chunk.usage;
                      stepFinishReason = chunk.finishReason;
                      stepProviderMetadata = chunk.experimental_providerMetadata;
                      stepLogProbs = chunk.logprobs;
                      const msToFinish = now2() - startTimestampMs;
                      doStreamSpan.addEvent("ai.stream.finish");
                      doStreamSpan.setAttributes({
                        "ai.response.msToFinish": msToFinish,
                        "ai.response.avgCompletionTokensPerSecond": 1e3 * stepUsage.completionTokens / msToFinish
                      });
                      break;
                    }
                    case "file": {
                      stepFiles2.push(chunk);
                      controller.enqueue(chunk);
                      break;
                    }
                    case "source":
                    case "tool-call-streaming-start":
                    case "tool-call-delta": {
                      controller.enqueue(chunk);
                      break;
                    }
                    case "error": {
                      controller.enqueue(chunk);
                      stepFinishReason = "error";
                      break;
                    }
                    default: {
                      const exhaustiveCheck = chunkType;
                      throw new Error(`Unknown chunk type: ${exhaustiveCheck}`);
                    }
                  }
                },
                // invoke onFinish callback and resolve toolResults promise when the stream is about to close:
                async flush(controller) {
                  const stepToolCallsJson = stepToolCalls.length > 0 ? JSON.stringify(stepToolCalls) : void 0;
                  let nextStepType = "done";
                  if (currentStep + 1 < maxSteps) {
                    if (continueSteps && stepFinishReason === "length" && // only use continue when there are no tool calls:
                    stepToolCalls.length === 0) {
                      nextStepType = "continue";
                    } else if (
                      // there are tool calls:
                      stepToolCalls.length > 0 && // all current tool calls have results:
                      stepToolResults.length === stepToolCalls.length
                    ) {
                      nextStepType = "tool-result";
                    }
                  }
                  if (continueSteps && chunkBuffer.length > 0 && (nextStepType !== "continue" || // when the next step is a regular step, publish the buffer
                  stepType2 === "continue" && !chunkTextPublished)) {
                    await publishTextChunk({
                      controller,
                      chunk: {
                        type: "text-delta",
                        textDelta: chunkBuffer
                      }
                    });
                    chunkBuffer = "";
                  }
                  try {
                    doStreamSpan.setAttributes(
                      selectTelemetryAttributes({
                        telemetry,
                        attributes: {
                          "ai.response.finishReason": stepFinishReason,
                          "ai.response.text": { output: () => stepText },
                          "ai.response.toolCalls": {
                            output: () => stepToolCallsJson
                          },
                          "ai.response.id": stepResponse.id,
                          "ai.response.model": stepResponse.modelId,
                          "ai.response.timestamp": stepResponse.timestamp.toISOString(),
                          "ai.response.providerMetadata": JSON.stringify(stepProviderMetadata),
                          "ai.usage.promptTokens": stepUsage.promptTokens,
                          "ai.usage.completionTokens": stepUsage.completionTokens,
                          // standardized gen-ai llm span attributes:
                          "gen_ai.response.finish_reasons": [stepFinishReason],
                          "gen_ai.response.id": stepResponse.id,
                          "gen_ai.response.model": stepResponse.modelId,
                          "gen_ai.usage.input_tokens": stepUsage.promptTokens,
                          "gen_ai.usage.output_tokens": stepUsage.completionTokens
                        }
                      })
                    );
                  } catch (error) {
                  } finally {
                    doStreamSpan.end();
                  }
                  controller.enqueue({
                    type: "step-finish",
                    finishReason: stepFinishReason,
                    usage: stepUsage,
                    providerMetadata: stepProviderMetadata,
                    experimental_providerMetadata: stepProviderMetadata,
                    logprobs: stepLogProbs,
                    request: stepRequest,
                    response: {
                      ...stepResponse,
                      headers: rawResponse == null ? void 0 : rawResponse.headers
                    },
                    warnings,
                    isContinued: nextStepType === "continue",
                    messageId
                  });
                  const combinedUsage = addLanguageModelUsage(usage, stepUsage);
                  if (nextStepType === "done") {
                    controller.enqueue({
                      type: "finish",
                      finishReason: stepFinishReason,
                      usage: combinedUsage,
                      providerMetadata: stepProviderMetadata,
                      experimental_providerMetadata: stepProviderMetadata,
                      logprobs: stepLogProbs,
                      response: {
                        ...stepResponse,
                        headers: rawResponse == null ? void 0 : rawResponse.headers
                      }
                    });
                    self.closeStream();
                  } else {
                    if (stepType2 === "continue") {
                      const lastMessage = responseMessages[responseMessages.length - 1];
                      if (typeof lastMessage.content === "string") {
                        lastMessage.content += stepText;
                      } else {
                        lastMessage.content.push({
                          text: stepText,
                          type: "text"
                        });
                      }
                    } else {
                      responseMessages.push(
                        ...toResponseMessages({
                          text: stepText,
                          files: stepFiles2,
                          reasoning: stepReasoning2,
                          tools: tools != null ? tools : {},
                          toolCalls: stepToolCalls,
                          toolResults: stepToolResults,
                          messageId,
                          generateMessageId
                        })
                      );
                    }
                    await streamStep({
                      currentStep: currentStep + 1,
                      responseMessages,
                      usage: combinedUsage,
                      stepType: nextStepType,
                      previousStepText: fullStepText,
                      hasLeadingWhitespace: hasWhitespaceSuffix,
                      messageId: (
                        // keep the same id when continuing a step:
                        nextStepType === "continue" ? messageId : generateMessageId()
                      )
                    });
                  }
                }
              })
            )
          );
        }
        await streamStep({
          currentStep: 0,
          responseMessages: [],
          usage: {
            promptTokens: 0,
            completionTokens: 0,
            totalTokens: 0
          },
          previousStepText: "",
          stepType: "initial",
          hasLeadingWhitespace: false,
          messageId: generateMessageId()
        });
      }
    }).catch((error) => {
      self.addStream(
        new ReadableStream({
          start(controller) {
            controller.enqueue({ type: "error", error });
            controller.close();
          }
        })
      );
      self.closeStream();
    });
  }
  get warnings() {
    return this.warningsPromise.value;
  }
  get usage() {
    return this.usagePromise.value;
  }
  get finishReason() {
    return this.finishReasonPromise.value;
  }
  get experimental_providerMetadata() {
    return this.providerMetadataPromise.value;
  }
  get providerMetadata() {
    return this.providerMetadataPromise.value;
  }
  get text() {
    return this.textPromise.value;
  }
  get reasoning() {
    return this.reasoningPromise.value;
  }
  get reasoningDetails() {
    return this.reasoningDetailsPromise.value;
  }
  get sources() {
    return this.sourcesPromise.value;
  }
  get files() {
    return this.filesPromise.value;
  }
  get toolCalls() {
    return this.toolCallsPromise.value;
  }
  get toolResults() {
    return this.toolResultsPromise.value;
  }
  get request() {
    return this.requestPromise.value;
  }
  get response() {
    return this.responsePromise.value;
  }
  get steps() {
    return this.stepsPromise.value;
  }
  /**
  Split out a new stream from the original stream.
  The original stream is replaced to allow for further splitting,
  since we do not know how many times the stream will be split.
  
  Note: this leads to buffering the stream content on the server.
  However, the LLM results are expected to be small enough to not cause issues.
     */
  teeStream() {
    const [stream1, stream2] = this.baseStream.tee();
    this.baseStream = stream2;
    return stream1;
  }
  get textStream() {
    return createAsyncIterableStream(
      this.teeStream().pipeThrough(
        new TransformStream({
          transform({ part }, controller) {
            if (part.type === "text-delta") {
              controller.enqueue(part.textDelta);
            }
          }
        })
      )
    );
  }
  get fullStream() {
    return createAsyncIterableStream(
      this.teeStream().pipeThrough(
        new TransformStream({
          transform({ part }, controller) {
            controller.enqueue(part);
          }
        })
      )
    );
  }
  async consumeStream(options) {
    var _a17;
    try {
      await consumeStream({
        stream: this.fullStream,
        onError: options == null ? void 0 : options.onError
      });
    } catch (error) {
      (_a17 = options == null ? void 0 : options.onError) == null ? void 0 : _a17.call(options, error);
    }
  }
  get experimental_partialOutputStream() {
    if (this.output == null) {
      throw new NoOutputSpecifiedError();
    }
    return createAsyncIterableStream(
      this.teeStream().pipeThrough(
        new TransformStream({
          transform({ partialOutput }, controller) {
            if (partialOutput != null) {
              controller.enqueue(partialOutput);
            }
          }
        })
      )
    );
  }
  toDataStreamInternal({
    getErrorMessage: getErrorMessage5 = () => "An error occurred.",
    // mask error messages for safety by default
    sendUsage = true,
    sendReasoning = false,
    sendSources = false,
    experimental_sendFinish = true
  }) {
    return this.fullStream.pipeThrough(
      new TransformStream({
        transform: async (chunk, controller) => {
          const chunkType = chunk.type;
          switch (chunkType) {
            case "text-delta": {
              controller.enqueue(Lt2("text", chunk.textDelta));
              break;
            }
            case "reasoning": {
              if (sendReasoning) {
                controller.enqueue(
                  Lt2("reasoning", chunk.textDelta)
                );
              }
              break;
            }
            case "redacted-reasoning": {
              if (sendReasoning) {
                controller.enqueue(
                  Lt2("redacted_reasoning", {
                    data: chunk.data
                  })
                );
              }
              break;
            }
            case "reasoning-signature": {
              if (sendReasoning) {
                controller.enqueue(
                  Lt2("reasoning_signature", {
                    signature: chunk.signature
                  })
                );
              }
              break;
            }
            case "file": {
              controller.enqueue(
                Lt2("file", {
                  mimeType: chunk.mimeType,
                  data: chunk.base64
                })
              );
              break;
            }
            case "source": {
              if (sendSources) {
                controller.enqueue(
                  Lt2("source", chunk.source)
                );
              }
              break;
            }
            case "tool-call-streaming-start": {
              controller.enqueue(
                Lt2("tool_call_streaming_start", {
                  toolCallId: chunk.toolCallId,
                  toolName: chunk.toolName
                })
              );
              break;
            }
            case "tool-call-delta": {
              controller.enqueue(
                Lt2("tool_call_delta", {
                  toolCallId: chunk.toolCallId,
                  argsTextDelta: chunk.argsTextDelta
                })
              );
              break;
            }
            case "tool-call": {
              controller.enqueue(
                Lt2("tool_call", {
                  toolCallId: chunk.toolCallId,
                  toolName: chunk.toolName,
                  args: chunk.args
                })
              );
              break;
            }
            case "tool-result": {
              controller.enqueue(
                Lt2("tool_result", {
                  toolCallId: chunk.toolCallId,
                  result: chunk.result
                })
              );
              break;
            }
            case "error": {
              controller.enqueue(
                Lt2("error", getErrorMessage5(chunk.error))
              );
              break;
            }
            case "step-start": {
              controller.enqueue(
                Lt2("start_step", {
                  messageId: chunk.messageId
                })
              );
              break;
            }
            case "step-finish": {
              controller.enqueue(
                Lt2("finish_step", {
                  finishReason: chunk.finishReason,
                  usage: sendUsage ? {
                    promptTokens: chunk.usage.promptTokens,
                    completionTokens: chunk.usage.completionTokens
                  } : void 0,
                  isContinued: chunk.isContinued
                })
              );
              break;
            }
            case "finish": {
              if (experimental_sendFinish) {
                controller.enqueue(
                  Lt2("finish_message", {
                    finishReason: chunk.finishReason,
                    usage: sendUsage ? {
                      promptTokens: chunk.usage.promptTokens,
                      completionTokens: chunk.usage.completionTokens
                    } : void 0
                  })
                );
              }
              break;
            }
            default: {
              const exhaustiveCheck = chunkType;
              throw new Error(`Unknown chunk type: ${exhaustiveCheck}`);
            }
          }
        }
      })
    );
  }
  pipeDataStreamToResponse(response, {
    status,
    statusText,
    headers,
    data,
    getErrorMessage: getErrorMessage5,
    sendUsage,
    sendReasoning,
    sendSources,
    experimental_sendFinish
  } = {}) {
    writeToServerResponse({
      response,
      status,
      statusText,
      headers: prepareOutgoingHttpHeaders(headers, {
        contentType: "text/plain; charset=utf-8",
        dataStreamVersion: "v1"
      }),
      stream: this.toDataStream({
        data,
        getErrorMessage: getErrorMessage5,
        sendUsage,
        sendReasoning,
        sendSources,
        experimental_sendFinish
      })
    });
  }
  pipeTextStreamToResponse(response, init) {
    writeToServerResponse({
      response,
      status: init == null ? void 0 : init.status,
      statusText: init == null ? void 0 : init.statusText,
      headers: prepareOutgoingHttpHeaders(init == null ? void 0 : init.headers, {
        contentType: "text/plain; charset=utf-8"
      }),
      stream: this.textStream.pipeThrough(new TextEncoderStream())
    });
  }
  // TODO breaking change 5.0: remove pipeThrough(new TextEncoderStream())
  toDataStream(options) {
    const stream = this.toDataStreamInternal({
      getErrorMessage: options == null ? void 0 : options.getErrorMessage,
      sendUsage: options == null ? void 0 : options.sendUsage,
      sendReasoning: options == null ? void 0 : options.sendReasoning,
      sendSources: options == null ? void 0 : options.sendSources,
      experimental_sendFinish: options == null ? void 0 : options.experimental_sendFinish
    }).pipeThrough(new TextEncoderStream());
    return (options == null ? void 0 : options.data) ? mergeStreams(options == null ? void 0 : options.data.stream, stream) : stream;
  }
  mergeIntoDataStream(writer, options) {
    writer.merge(
      this.toDataStreamInternal({
        getErrorMessage: writer.onError,
        sendUsage: options == null ? void 0 : options.sendUsage,
        sendReasoning: options == null ? void 0 : options.sendReasoning,
        sendSources: options == null ? void 0 : options.sendSources,
        experimental_sendFinish: options == null ? void 0 : options.experimental_sendFinish
      })
    );
  }
  toDataStreamResponse({
    headers,
    status,
    statusText,
    data,
    getErrorMessage: getErrorMessage5,
    sendUsage,
    sendReasoning,
    sendSources,
    experimental_sendFinish
  } = {}) {
    return new Response(
      this.toDataStream({
        data,
        getErrorMessage: getErrorMessage5,
        sendUsage,
        sendReasoning,
        sendSources,
        experimental_sendFinish
      }),
      {
        status,
        statusText,
        headers: prepareResponseHeaders(headers, {
          contentType: "text/plain; charset=utf-8",
          dataStreamVersion: "v1"
        })
      }
    );
  }
  toTextStreamResponse(init) {
    var _a17;
    return new Response(this.textStream.pipeThrough(new TextEncoderStream()), {
      status: (_a17 = init == null ? void 0 : init.status) != null ? _a17 : 200,
      headers: prepareResponseHeaders(init == null ? void 0 : init.headers, {
        contentType: "text/plain; charset=utf-8"
      })
    });
  }
};
var name16 = "AI_NoSuchProviderError";
var marker16 = `vercel.ai.error.${name16}`;
var symbol16 = Symbol.for(marker16);
var _a16;
_a16 = symbol16;
var ClientOrServerImplementationSchema = external_exports.object({
  name: external_exports.string(),
  version: external_exports.string()
}).passthrough();
var BaseParamsSchema = external_exports.object({
  _meta: external_exports.optional(external_exports.object({}).passthrough())
}).passthrough();
var ResultSchema = BaseParamsSchema;
var RequestSchema = external_exports.object({
  method: external_exports.string(),
  params: external_exports.optional(BaseParamsSchema)
});
var ServerCapabilitiesSchema = external_exports.object({
  experimental: external_exports.optional(external_exports.object({}).passthrough()),
  logging: external_exports.optional(external_exports.object({}).passthrough()),
  prompts: external_exports.optional(
    external_exports.object({
      listChanged: external_exports.optional(external_exports.boolean())
    }).passthrough()
  ),
  resources: external_exports.optional(
    external_exports.object({
      subscribe: external_exports.optional(external_exports.boolean()),
      listChanged: external_exports.optional(external_exports.boolean())
    }).passthrough()
  ),
  tools: external_exports.optional(
    external_exports.object({
      listChanged: external_exports.optional(external_exports.boolean())
    }).passthrough()
  )
}).passthrough();
var InitializeResultSchema = ResultSchema.extend({
  protocolVersion: external_exports.string(),
  capabilities: ServerCapabilitiesSchema,
  serverInfo: ClientOrServerImplementationSchema,
  instructions: external_exports.optional(external_exports.string())
});
var PaginatedResultSchema = ResultSchema.extend({
  nextCursor: external_exports.optional(external_exports.string())
});
var ToolSchema = external_exports.object({
  name: external_exports.string(),
  description: external_exports.optional(external_exports.string()),
  inputSchema: external_exports.object({
    type: external_exports.literal("object"),
    properties: external_exports.optional(external_exports.object({}).passthrough())
  }).passthrough()
}).passthrough();
var ListToolsResultSchema = PaginatedResultSchema.extend({
  tools: external_exports.array(ToolSchema)
});
var TextContentSchema = external_exports.object({
  type: external_exports.literal("text"),
  text: external_exports.string()
}).passthrough();
var ImageContentSchema = external_exports.object({
  type: external_exports.literal("image"),
  data: external_exports.string().base64(),
  mimeType: external_exports.string()
}).passthrough();
var ResourceContentsSchema = external_exports.object({
  /**
   * The URI of this resource.
   */
  uri: external_exports.string(),
  /**
   * The MIME type of this resource, if known.
   */
  mimeType: external_exports.optional(external_exports.string())
}).passthrough();
var TextResourceContentsSchema = ResourceContentsSchema.extend({
  text: external_exports.string()
});
var BlobResourceContentsSchema = ResourceContentsSchema.extend({
  blob: external_exports.string().base64()
});
var EmbeddedResourceSchema = external_exports.object({
  type: external_exports.literal("resource"),
  resource: external_exports.union([TextResourceContentsSchema, BlobResourceContentsSchema])
}).passthrough();
var CallToolResultSchema = ResultSchema.extend({
  content: external_exports.array(
    external_exports.union([TextContentSchema, ImageContentSchema, EmbeddedResourceSchema])
  ),
  isError: external_exports.boolean().default(false).optional()
}).or(
  ResultSchema.extend({
    toolResult: external_exports.unknown()
  })
);
var JSONRPC_VERSION = "2.0";
var JSONRPCRequestSchema = external_exports.object({
  jsonrpc: external_exports.literal(JSONRPC_VERSION),
  id: external_exports.union([external_exports.string(), external_exports.number().int()])
}).merge(RequestSchema).strict();
var JSONRPCResponseSchema = external_exports.object({
  jsonrpc: external_exports.literal(JSONRPC_VERSION),
  id: external_exports.union([external_exports.string(), external_exports.number().int()]),
  result: ResultSchema
}).strict();
var JSONRPCErrorSchema = external_exports.object({
  jsonrpc: external_exports.literal(JSONRPC_VERSION),
  id: external_exports.union([external_exports.string(), external_exports.number().int()]),
  error: external_exports.object({
    code: external_exports.number().int(),
    message: external_exports.string(),
    data: external_exports.optional(external_exports.unknown())
  })
}).strict();
var JSONRPCNotificationSchema = external_exports.object({
  jsonrpc: external_exports.literal(JSONRPC_VERSION)
}).merge(
  external_exports.object({
    method: external_exports.string(),
    params: external_exports.optional(BaseParamsSchema)
  })
).strict();
var JSONRPCMessageSchema = external_exports.union([
  JSONRPCRequestSchema,
  JSONRPCNotificationSchema,
  JSONRPCResponseSchema,
  JSONRPCErrorSchema
]);
var langchain_adapter_exports = {};
__export3(langchain_adapter_exports, {
  mergeIntoDataStream: () => mergeIntoDataStream,
  toDataStream: () => toDataStream,
  toDataStreamResponse: () => toDataStreamResponse
});
function createCallbacksTransformer(callbacks = {}) {
  const textEncoder = new TextEncoder();
  let aggregatedResponse = "";
  return new TransformStream({
    async start() {
      if (callbacks.onStart)
        await callbacks.onStart();
    },
    async transform(message, controller) {
      controller.enqueue(textEncoder.encode(message));
      aggregatedResponse += message;
      if (callbacks.onToken)
        await callbacks.onToken(message);
      if (callbacks.onText && typeof message === "string") {
        await callbacks.onText(message);
      }
    },
    async flush() {
      if (callbacks.onCompletion) {
        await callbacks.onCompletion(aggregatedResponse);
      }
      if (callbacks.onFinal) {
        await callbacks.onFinal(aggregatedResponse);
      }
    }
  });
}
function toDataStreamInternal(stream, callbacks) {
  return stream.pipeThrough(
    new TransformStream({
      transform: async (value, controller) => {
        var _a17;
        if (typeof value === "string") {
          controller.enqueue(value);
          return;
        }
        if ("event" in value) {
          if (value.event === "on_chat_model_stream") {
            forwardAIMessageChunk(
              (_a17 = value.data) == null ? void 0 : _a17.chunk,
              controller
            );
          }
          return;
        }
        forwardAIMessageChunk(value, controller);
      }
    })
  ).pipeThrough(createCallbacksTransformer(callbacks)).pipeThrough(new TextDecoderStream()).pipeThrough(
    new TransformStream({
      transform: async (chunk, controller) => {
        controller.enqueue(Lt2("text", chunk));
      }
    })
  );
}
function toDataStream(stream, callbacks) {
  return toDataStreamInternal(stream, callbacks).pipeThrough(
    new TextEncoderStream()
  );
}
function toDataStreamResponse(stream, options) {
  var _a17;
  const dataStream = toDataStreamInternal(
    stream,
    options == null ? void 0 : options.callbacks
  ).pipeThrough(new TextEncoderStream());
  const data = options == null ? void 0 : options.data;
  const init = options == null ? void 0 : options.init;
  const responseStream = data ? mergeStreams(data.stream, dataStream) : dataStream;
  return new Response(responseStream, {
    status: (_a17 = init == null ? void 0 : init.status) != null ? _a17 : 200,
    statusText: init == null ? void 0 : init.statusText,
    headers: prepareResponseHeaders(init == null ? void 0 : init.headers, {
      contentType: "text/plain; charset=utf-8",
      dataStreamVersion: "v1"
    })
  });
}
function mergeIntoDataStream(stream, options) {
  options.dataStream.merge(toDataStreamInternal(stream, options.callbacks));
}
function forwardAIMessageChunk(chunk, controller) {
  if (typeof chunk.content === "string") {
    controller.enqueue(chunk.content);
  } else {
    const content = chunk.content;
    for (const item of content) {
      if (item.type === "text") {
        controller.enqueue(item.text);
      }
    }
  }
}
var llamaindex_adapter_exports = {};
__export3(llamaindex_adapter_exports, {
  mergeIntoDataStream: () => mergeIntoDataStream2,
  toDataStream: () => toDataStream2,
  toDataStreamResponse: () => toDataStreamResponse2
});
function toDataStreamInternal2(stream, callbacks) {
  const trimStart = trimStartOfStream();
  return M6(stream[Symbol.asyncIterator]()).pipeThrough(
    new TransformStream({
      async transform(message, controller) {
        controller.enqueue(trimStart(message.delta));
      }
    })
  ).pipeThrough(createCallbacksTransformer(callbacks)).pipeThrough(new TextDecoderStream()).pipeThrough(
    new TransformStream({
      transform: async (chunk, controller) => {
        controller.enqueue(Lt2("text", chunk));
      }
    })
  );
}
function toDataStream2(stream, callbacks) {
  return toDataStreamInternal2(stream, callbacks).pipeThrough(
    new TextEncoderStream()
  );
}
function toDataStreamResponse2(stream, options = {}) {
  var _a17;
  const { init, data, callbacks } = options;
  const dataStream = toDataStreamInternal2(stream, callbacks).pipeThrough(
    new TextEncoderStream()
  );
  const responseStream = data ? mergeStreams(data.stream, dataStream) : dataStream;
  return new Response(responseStream, {
    status: (_a17 = init == null ? void 0 : init.status) != null ? _a17 : 200,
    statusText: init == null ? void 0 : init.statusText,
    headers: prepareResponseHeaders(init == null ? void 0 : init.headers, {
      contentType: "text/plain; charset=utf-8",
      dataStreamVersion: "v1"
    })
  });
}
function mergeIntoDataStream2(stream, options) {
  options.dataStream.merge(toDataStreamInternal2(stream, options.callbacks));
}
function trimStartOfStream() {
  let isStreamStart = true;
  return (text2) => {
    if (isStreamStart) {
      text2 = text2.trimStart();
      if (text2)
        isStreamStart = false;
    }
    return text2;
  };
}
var HANGING_STREAM_WARNING_TIME_MS = 15 * 1e3;

// ollamaHacky.js
async function listOllamaModels() {
  const response = await fetch("http://localhost:11434/api/tags", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });
  if (!response.ok) {
    throw new Error(`Error fetching models: ${response.statusText}`);
  }
  const data = await response.json();
  return data.models.map((each) => each.model);
}
function initOllamaModel(modelName, { debug = false } = {}) {
  const model = pe2(modelName);
  model.getStreamedResponse = async function* (request) {
    try {
      if (debug) console.debug(`request is:`, request);
      const inputMessages = request.input ?? request.messages ?? [];
      const systemMessage = request.systemInstructions ?? request.system ?? "";
      const messages = this.convertMessages(inputMessages);
      if (systemMessage) {
        messages.unshift({ role: "system", content: systemMessage });
      }
      const prompt = messages.map((m8) => {
        const role = m8.role === "assistant" ? "Assistant" : m8.role === "user" ? "User" : m8.role;
        return `${role}: ${m8.content}`;
      }).join("\n") + "\nAssistant:";
      if (debug) {
        console.log("[OLLAMA DEBUG] Final prompt:", prompt.slice(0, 500));
      }
      yield { type: "response_started" };
      const stream = await generateText({
        model,
        prompt,
        maxSteps: 100,
        temperature: request.temperature ?? 0.7,
        max_tokens: request.max_tokens ?? void 0
      });
      let fullContent = stream.text;
      console.log(`yielding inner stream`);
      yield {
        type: "output_text_delta",
        delta: stream.text
      };
      yield {
        type: "response_done",
        response: {
          id: `ollama_${Date.now()}`,
          output: [
            {
              type: "message",
              role: "assistant",
              status: "completed",
              content: [
                {
                  type: "output_text",
                  text: fullContent
                }
              ]
            }
          ],
          usage: {
            inputTokens: 0,
            outputTokens: 0,
            totalTokens: 0
          }
        }
      };
    } catch (err) {
      console.error("Ollama streaming error:", err);
      throw err;
    }
  };
  model.getResponse = async function(request) {
    try {
      if (debug) {
        console.log("[OLLAMA DEBUG] Non-streaming request received");
      }
      const inputMessages = request.input ?? request.messages ?? [];
      const systemMessage = request.systemInstructions ?? request.system ?? "";
      const messages = this.convertMessages(inputMessages);
      if (systemMessage) {
        messages.unshift({ role: "system", content: systemMessage });
      }
      if (debug) {
        console.log("[OLLAMA DEBUG] Converted messages:", messages.length);
        console.log("[OLLAMA DEBUG] System message present:", !!systemMessage);
      }
      const prompt = messages.map((m8) => {
        const role = m8.role === "assistant" ? "Assistant" : m8.role === "user" ? "User" : m8.role;
        return `${role}: ${m8.content}`;
      }).join("\n") + "\nAssistant:";
      const { text: responseText } = await generateText({
        model,
        prompt,
        stream: false,
        temperature: request.temperature ?? 0.7,
        max_tokens: request.max_tokens ?? void 0
      });
      const { toolCalls, text: text2 } = this.parseToolCalls ? this.parseToolCalls(responseText) : { toolCalls: [], text: responseText };
      if (debug) {
        console.log("[OLLAMA DEBUG] Response text:", responseText.slice(0, 500));
        console.log("[OLLAMA DEBUG] Tool calls found:", toolCalls.length);
        if (toolCalls.length > 0) {
          console.log("[OLLAMA DEBUG] First tool call:", toolCalls[0]);
        }
      }
      const output = [];
      if (toolCalls.length > 0) {
        output.push(...toolCalls);
      }
      if (text2) {
        output.push({
          type: "message",
          role: "assistant",
          status: "completed",
          content: [
            {
              type: "output_text",
              text: text2
            }
          ]
        });
      }
      return {
        id: `ollama_${Date.now()}`,
        output,
        usage: {
          inputTokens: 0,
          outputTokens: 0,
          totalTokens: 0
        }
      };
    } catch (error) {
      console.error("Ollama generateText error:", error);
      throw error;
    }
  };
  model.convertMessages = function(messages) {
    if (debug) {
      console.log("[OLLAMA DEBUG] Converting messages:", messages.length);
    }
    const convertedMessages = messages.map((msg) => {
      let content = "";
      if (typeof msg.content === "string") {
        content = msg.content;
      } else if (Array.isArray(msg.content)) {
        content = msg.content.map((item) => typeof item === "string" ? item : item?.type === "text" || item?.type === "output_text" ? item.text || "" : "").join("");
      } else if (msg.content && typeof msg.content === "object") {
        content = JSON.stringify(msg.content);
      }
      if (msg.type === "function_call_output") {
        const resultStr = typeof msg.result === "string" ? msg.result : JSON.stringify(msg.result);
        return {
          role: "user",
          content: `Tool result for ${msg.toolName || "unknown"}: ${resultStr}`
        };
      }
      return {
        role: msg.role ?? "user",
        content
      };
    }).filter((msg) => msg.content && typeof msg.content === "string" && msg.content.trim().length > 0);
    if (convertedMessages.length === 0) {
      return [{ role: "user", content: "Hello" }];
    }
    return convertedMessages;
  };
  model.parseToolCalls = function(text2) {
    const toolCalls = [];
    let remainingText = text2;
    const callId = () => `call_${Date.now()}_${Math.random().toString(36).substring(2, 10)}`;
    const functionCallsRegex = /<function_calls>(.*?)<\/function_calls>/gs;
    const functionCallsMatch = functionCallsRegex.exec(text2);
    if (functionCallsMatch) {
      const functionCallsContent = functionCallsMatch[1];
      const invokeXMLRegex = /<invoke\s+name="([^"]+)">(.*?)<\/invoke>/gs;
      let xmlMatch;
      while ((xmlMatch = invokeXMLRegex.exec(functionCallsContent)) !== null) {
        const [, toolName, invokeContent] = xmlMatch;
        const args = {};
        const paramRegex = /<parameter\s+name="([^"]+)">(.*?)<\/parameter>/gs;
        let paramMatch;
        while ((paramMatch = paramRegex.exec(invokeContent)) !== null) {
          const [, paramName, paramValue] = paramMatch;
          try {
            args[paramName] = JSON.parse(paramValue.trim());
          } catch {
            args[paramName] = paramValue.trim();
          }
        }
        if (Object.keys(args).length === 0 && invokeContent.trim()) {
          try {
            Object.assign(args, JSON.parse(invokeContent.trim()));
          } catch {
          }
        }
        toolCalls.push({
          type: "function_call",
          callId: callId(),
          name: toolName,
          arguments: JSON.stringify(args),
          status: "completed"
        });
      }
      const simpleJSONMatch = functionCallsContent.trim();
      if (simpleJSONMatch.startsWith("{")) {
        try {
          const parsed = JSON.parse(simpleJSONMatch);
          if (parsed.name && parsed.arguments) {
            toolCalls.push({
              type: "function_call",
              callId: callId(),
              name: parsed.name,
              arguments: JSON.stringify(parsed.arguments),
              status: "completed"
            });
          }
        } catch (err) {
          console.warn("[parseToolCalls] Invalid JSON in <function_calls>", err);
        }
      }
      remainingText = remainingText.replace(functionCallsMatch[0], "").trim();
    }
    const looseInvokeRegex = /<invoke\s+name="([^"]+)">(.*?)<\/invoke>/gs;
    let looseMatch;
    while ((looseMatch = looseInvokeRegex.exec(remainingText)) !== null) {
      const [full, toolName, invokeContent] = looseMatch;
      const args = {};
      const paramRegex = /<parameter\s+name="([^"]+)">(.*?)<\/parameter>/gs;
      let paramMatch;
      while ((paramMatch = paramRegex.exec(invokeContent)) !== null) {
        const [, paramName, paramValue] = paramMatch;
        try {
          args[paramName] = JSON.parse(paramValue.trim());
        } catch {
          args[paramName] = paramValue.trim();
        }
      }
      if (Object.keys(args).length === 0 && invokeContent.trim()) {
        try {
          Object.assign(args, JSON.parse(invokeContent.trim()));
        } catch {
        }
      }
      toolCalls.push({
        type: "function_call",
        callId: callId(),
        name: toolName,
        arguments: JSON.stringify(args),
        status: "completed"
      });
      remainingText = remainingText.replace(full, "");
    }
    remainingText = remainingText.replace(/<function_result>.*?<\/function_result>/gs, "").trim();
    return {
      toolCalls,
      text: remainingText
    };
  };
  return model;
}
export {
  initOllamaModel,
  listOllamaModels
};
