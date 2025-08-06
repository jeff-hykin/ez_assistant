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
  constructor({ name: e7, message: s9, cause: t4 }) {
    super(s9), this[l] = true, this.name = e7, this.cause = t4;
  }
  static isInstance(e7) {
    return c.hasMarker(e7, i);
  }
  static hasMarker(e7, s9) {
    let t4 = Symbol.for(s9);
    return e7 != null && typeof e7 == "object" && t4 in e7 && typeof e7[t4] == "boolean" && e7[t4] === true;
  }
};
l = er;
var a = ar;
var m = "AI_APICallError";
var v = `vercel.ai.error.${m}`;
var sr = Symbol.for(v);
var u;
var br = class extends a {
  constructor({ message: r36, url: e7, requestBodyValues: s9, statusCode: t4, responseHeaders: W19, responseBody: X17, cause: Y13, isRetryable: Z17 = t4 != null && (t4 === 408 || t4 === 409 || t4 === 429 || t4 >= 500), data: rr3 }) {
    super({ name: m, message: r36, cause: Y13 }), this[u] = true, this.url = e7, this.requestBodyValues = s9, this.statusCode = t4, this.responseHeaders = W19, this.responseBody = X17, this.isRetryable = Z17, this.data = rr3;
  }
  static isInstance(r36) {
    return a.hasMarker(r36, v);
  }
};
u = sr;
var y = "AI_EmptyResponseBodyError";
var d = `vercel.ai.error.${y}`;
var tr = Symbol.for(d);
var h;
var Ir = class extends a {
  constructor({ message: r36 = "Empty response body" } = {}) {
    super({ name: y, message: r36 }), this[h] = true;
  }
  static isInstance(r36) {
    return a.hasMarker(r36, d);
  }
};
h = tr;
function p(r36) {
  return r36 == null ? "unknown error" : typeof r36 == "string" ? r36 : r36 instanceof Error ? r36.message : JSON.stringify(r36);
}
var b = "AI_InvalidArgumentError";
var I = `vercel.ai.error.${b}`;
var nr = Symbol.for(I);
var f;
var fr = class extends a {
  constructor({ message: r36, cause: e7, argument: s9 }) {
    super({ name: b, message: r36, cause: e7 }), this[f] = true, this.argument = s9;
  }
  static isInstance(r36) {
    return a.hasMarker(r36, I);
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
  constructor({ text: r36, cause: e7 }) {
    super({ name: $, message: `JSON parsing failed: Text: ${r36}.
Error message: ${p(e7)}`, cause: e7 }), this[x] = true, this.text = r36;
  }
  static isInstance(r36) {
    return a.hasMarker(r36, M);
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
  constructor(r36) {
    super({ name: B, message: `Too many values for a single embedding call. The ${r36.provider} model "${r36.modelId}" can only embed up to ${r36.maxEmbeddingsPerCall} values per call, but ${r36.values.length} values were provided.` }), this[L] = true, this.provider = r36.provider, this.modelId = r36.modelId, this.maxEmbeddingsPerCall = r36.maxEmbeddingsPerCall, this.values = r36.values;
  }
  static isInstance(r36) {
    return a.hasMarker(r36, F);
  }
};
L = yr;
var G = "AI_TypeValidationError";
var U = `vercel.ai.error.${G}`;
var dr = Symbol.for(U);
var q;
var hr = class o extends a {
  constructor({ value: e7, cause: s9 }) {
    super({ name: G, message: `Type validation failed: Value: ${JSON.stringify(e7)}.
Error message: ${p(s9)}`, cause: s9 }), this[q] = true, this.value = e7;
  }
  static isInstance(e7) {
    return a.hasMarker(e7, U);
  }
  static wrap({ value: e7, cause: s9 }) {
    return o.isInstance(s9) && s9.value === e7 ? s9 : new o({ value: e7, cause: s9 });
  }
};
q = dr;
var xr = hr;
var H = "AI_UnsupportedFunctionalityError";
var z = `vercel.ai.error.${H}`;
var pr = Symbol.for(z);
var Q;
var Nr = class extends a {
  constructor({ functionality: r36, message: e7 = `'${r36}' functionality not supported.` }) {
    super({ name: H, message: e7 }), this[Q] = true, this.functionality = r36;
  }
  static isInstance(r36) {
    return a.hasMarker(r36, z);
  }
};
Q = pr;

// https://esm.sh/nanoid@3.3.11/denonext/non-secure.mjs
var h2 = (t4, e7 = 21) => (l20 = e7) => {
  let r36 = "", n8 = l20 | 0;
  for (; n8--; ) r36 += t4[Math.random() * t4.length | 0];
  return r36;
};

// https://esm.sh/secure-json-parse@2.7.0/denonext/secure-json-parse.mjs
import { Buffer as __Buffer$ } from "node:buffer";
var F2 = Object.create;
var l2 = Object.defineProperty;
var b2 = Object.getOwnPropertyDescriptor;
var g2 = Object.getOwnPropertyNames;
var j2 = Object.getPrototypeOf;
var E2 = Object.prototype.hasOwnProperty;
var k2 = (r36, e7) => () => (e7 || r36((e7 = { exports: {} }).exports, e7), e7.exports);
var O2 = (r36, e7, t4, o15) => {
  if (e7 && typeof e7 == "object" || typeof e7 == "function") for (let n8 of g2(e7)) !E2.call(r36, n8) && n8 !== t4 && l2(r36, n8, { get: () => e7[n8], enumerable: !(o15 = b2(e7, n8)) || o15.enumerable });
  return r36;
};
var w2 = (r36, e7, t4) => (t4 = r36 != null ? F2(j2(r36)) : {}, O2(e7 || !r36 || !r36.__esModule ? l2(t4, "default", { value: r36, enumerable: true }) : t4, r36));
var m2 = k2((B23, f14) => {
  "use strict";
  var L23 = typeof __Buffer$ < "u", p15 = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/, y18 = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
  function d24(r36, e7, t4) {
    t4 == null && e7 !== null && typeof e7 == "object" && (t4 = e7, e7 = void 0), L23 && __Buffer$.isBuffer(r36) && (r36 = r36.toString()), r36 && r36.charCodeAt(0) === 65279 && (r36 = r36.slice(1));
    let o15 = JSON.parse(r36, e7);
    if (o15 === null || typeof o15 != "object") return o15;
    let n8 = t4 && t4.protoAction || "error", c14 = t4 && t4.constructorAction || "error";
    if (n8 === "ignore" && c14 === "ignore") return o15;
    if (n8 !== "ignore" && c14 !== "ignore") {
      if (p15.test(r36) === false && y18.test(r36) === false) return o15;
    } else if (n8 !== "ignore" && c14 === "ignore") {
      if (p15.test(r36) === false) return o15;
    } else if (y18.test(r36) === false) return o15;
    return _17(o15, { protoAction: n8, constructorAction: c14, safe: t4 && t4.safe });
  }
  function _17(r36, { protoAction: e7 = "error", constructorAction: t4 = "error", safe: o15 } = {}) {
    let n8 = [r36];
    for (; n8.length; ) {
      let c14 = n8;
      n8 = [];
      for (let s9 of c14) {
        if (e7 !== "ignore" && Object.prototype.hasOwnProperty.call(s9, "__proto__")) {
          if (o15 === true) return null;
          if (e7 === "error") throw new SyntaxError("Object contains forbidden prototype property");
          delete s9.__proto__;
        }
        if (t4 !== "ignore" && Object.prototype.hasOwnProperty.call(s9, "constructor") && Object.prototype.hasOwnProperty.call(s9.constructor, "prototype")) {
          if (o15 === true) return null;
          if (t4 === "error") throw new SyntaxError("Object contains forbidden prototype property");
          delete s9.constructor;
        }
        for (let h24 in s9) {
          let a8 = s9[h24];
          a8 && typeof a8 == "object" && n8.push(a8);
        }
      }
    }
    return r36;
  }
  function i10(r36, e7, t4) {
    let o15 = Error.stackTraceLimit;
    Error.stackTraceLimit = 0;
    try {
      return d24(r36, e7, t4);
    } finally {
      Error.stackTraceLimit = o15;
    }
  }
  function T20(r36, e7) {
    let t4 = Error.stackTraceLimit;
    Error.stackTraceLimit = 0;
    try {
      return d24(r36, e7, { safe: true });
    } catch {
      return null;
    } finally {
      Error.stackTraceLimit = t4;
    }
  }
  f14.exports = i10;
  f14.exports.default = i10;
  f14.exports.parse = i10;
  f14.exports.safeParse = T20;
  f14.exports.scan = _17;
});
var u2 = w2(m2());
var { parse: S2, safeParse: A2, scan: x2 } = u2;
var C2 = u2.default ?? u2;

// https://esm.sh/@ai-sdk/provider-utils@2.2.8/denonext/provider-utils.mjs
import __Process$ from "node:process";
function _2(...e7) {
  return e7.reduce((t4, r36) => ({ ...t4, ...r36 ?? {} }), {});
}
function M2(e7) {
  return new ReadableStream({ async pull(t4) {
    try {
      let { value: r36, done: s9 } = await e7.next();
      s9 ? t4.close() : t4.enqueue(r36);
    } catch (r36) {
      t4.error(r36);
    }
  }, cancel() {
  } });
}
function d2(e7) {
  let t4 = {};
  return e7.headers.forEach((r36, s9) => {
    t4[s9] = r36;
  }), t4;
}
var J2 = ({ prefix: e7, size: t4 = 16, alphabet: r36 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", separator: s9 = "-" } = {}) => {
  let o15 = h2(r36, t4);
  if (e7 == null) return o15;
  if (r36.includes(s9)) throw new fr({ argument: "separator", message: `The separator "${s9}" must not be part of the alphabet "${r36}".` });
  return (u17) => `${e7}${s9}${o15(u17)}`;
};
var Z = J2();
function P2(e7) {
  return Object.fromEntries(Object.entries(e7).filter(([t4, r36]) => r36 != null));
}
function h3(e7) {
  return e7 instanceof Error && (e7.name === "AbortError" || e7.name === "TimeoutError");
}
var T2 = Symbol.for("vercel.ai.validator");
function k3(e7) {
  return { [T2]: true, validate: e7 };
}
function L2(e7) {
  return typeof e7 == "object" && e7 !== null && T2 in e7 && e7[T2] === true && "validate" in e7;
}
function j3(e7) {
  return L2(e7) ? e7 : U2(e7);
}
function U2(e7) {
  return k3((t4) => {
    let r36 = e7.safeParse(t4);
    return r36.success ? { success: true, value: r36.data } : { success: false, error: r36.error };
  });
}
function N2({ value: e7, schema: t4 }) {
  let r36 = A3({ value: e7, schema: t4 });
  if (!r36.success) throw xr.wrap({ value: e7, cause: r36.error });
  return r36.value;
}
function A3({ value: e7, schema: t4 }) {
  let r36 = j3(t4);
  try {
    if (r36.validate == null) return { success: true, value: e7 };
    let s9 = r36.validate(e7);
    return s9.success ? s9 : { success: false, error: xr.wrap({ value: e7, cause: s9.error }) };
  } catch (s9) {
    return { success: false, error: xr.wrap({ value: e7, cause: s9 }) };
  }
}
function D2({ text: e7, schema: t4 }) {
  try {
    let r36 = C2.parse(e7);
    return t4 == null ? r36 : N2({ value: r36, schema: t4 });
  } catch (r36) {
    throw gr.isInstance(r36) || xr.isInstance(r36) ? r36 : new gr({ text: e7, cause: r36 });
  }
}
function S3({ text: e7, schema: t4 }) {
  try {
    let r36 = C2.parse(e7);
    if (t4 == null) return { success: true, value: r36, rawValue: r36 };
    let s9 = A3({ value: r36, schema: t4 });
    return s9.success ? { ...s9, rawValue: r36 } : s9;
  } catch (r36) {
    return { success: false, error: gr.isInstance(r36) ? r36 : new gr({ text: e7, cause: r36 }) };
  }
}
var G2 = () => globalThis.fetch;
var he = async ({ url: e7, headers: t4, body: r36, failedResponseHandler: s9, successfulResponseHandler: o15, abortSignal: u17, fetch: a8 }) => $2({ url: e7, headers: { "Content-Type": "application/json", ...t4 }, body: { content: JSON.stringify(r36), values: r36 }, failedResponseHandler: s9, successfulResponseHandler: o15, abortSignal: u17, fetch: a8 });
var $2 = async ({ url: e7, headers: t4 = {}, body: r36, successfulResponseHandler: s9, failedResponseHandler: o15, abortSignal: u17, fetch: a8 = G2() }) => {
  try {
    let i10 = await a8(e7, { method: "POST", headers: P2(t4), body: r36.content, signal: u17 }), n8 = d2(i10);
    if (!i10.ok) {
      let c14;
      try {
        console.debug(`e7 is:`,e7)
        console.debug(`requestBodyValues is:`,r36.values)
        c14 = await o15({ response: i10, url: e7, requestBodyValues: r36.values });
      } catch (f14) {
        throw h3(f14) || br.isInstance(f14) ? f14 : new br({ message: "Failed to process error response", cause: f14, statusCode: i10.status, url: e7, responseHeaders: n8, requestBodyValues: r36.values });
      }
      throw c14.value;
    }
    try {
      return await s9({ response: i10, url: e7, requestBodyValues: r36.values });
    } catch (c14) {
      throw c14 instanceof Error && (h3(c14) || br.isInstance(c14)) ? c14 : new br({ message: "Failed to process successful response", cause: c14, statusCode: i10.status, url: e7, responseHeaders: n8, requestBodyValues: r36.values });
    }
  } catch (i10) {
    if (h3(i10)) throw i10;
    if (i10 instanceof TypeError && i10.message === "fetch failed") {
      let n8 = i10.cause;
      if (n8 != null) throw new br({ message: `Cannot connect to API: ${n8.message}`, cause: n8, url: e7, requestBodyValues: r36.values, isRetryable: true });
    }
    throw i10;
  }
};
var ge = ({ errorSchema: e7, errorToMessage: t4, isRetryable: r36 }) => async ({ response: s9, url: o15, requestBodyValues: u17 }) => {
  let a8 = await s9.text(), i10 = d2(s9);
  if (a8.trim() === "") return { responseHeaders: i10, value: new br({ message: s9.statusText, url: o15, requestBodyValues: u17, statusCode: s9.status, responseHeaders: i10, responseBody: a8, isRetryable: r36?.(s9) }) };
  try {
    let n8 = D2({ text: a8, schema: e7 });
    console.debug(`o15 is:`,o15)
    return { responseHeaders: i10, value: new br({ message: t4(n8), url: o15, requestBodyValues: u17, statusCode: s9.status, responseHeaders: i10, responseBody: a8, data: n8, isRetryable: r36?.(s9, n8) }) };
  } catch {
    return { responseHeaders: i10, value: new br({ message: s9.statusText, url: o15, requestBodyValues: u17, statusCode: s9.status, responseHeaders: i10, responseBody: a8, isRetryable: r36?.(s9) }) };
  }
};
var be = (e7) => async ({ response: t4, url: r36, requestBodyValues: s9 }) => {
  let o15 = await t4.text(), u17 = S3({ text: o15, schema: e7 }), a8 = d2(t4);
  if (!u17.success) throw new br({ message: "Invalid JSON response", cause: u17.error, statusCode: t4.status, responseHeaders: a8, responseBody: o15, url: r36, requestBodyValues: s9 });
  return { responseHeaders: a8, value: u17.value, rawValue: u17.rawValue };
};
var { btoa: V2, atob: W } = globalThis;
function Se(e7) {
  let t4 = "";
  for (let r36 = 0; r36 < e7.length; r36++) t4 += String.fromCodePoint(e7[r36]);
  return V2(t4);
}
function Pe(e7) {
  return e7?.replace(/\/$/, "");
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
var M3 = Object.getOwnPropertyNames;
var o2 = Object.getPrototypeOf;
var t = Object.prototype.hasOwnProperty;
var B2 = (L23, I22) => () => (I22 || L23((I22 = { exports: {} }).exports, I22), I22.exports);
var E3 = (L23, I22, O20, C25) => {
  if (I22 && typeof I22 == "object" || typeof I22 == "function") for (let A25 of M3(I22)) !t.call(L23, A25) && A25 !== O20 && F3(L23, A25, { get: () => I22[A25], enumerable: !(C25 = l3(I22, A25)) || C25.enumerable });
  return L23;
};
var S4 = (L23, I22, O20) => (O20 = L23 != null ? e(o2(L23)) : {}, E3(I22 || !L23 || !L23.__esModule ? F3(O20, "default", { value: L23, enumerable: true }) : O20, L23));
var R2 = B2((N18) => {
  "use strict";
  Object.defineProperty(N18, "__esModule", { value: true });
  N18.Allow = N18.ALL = N18.COLLECTION = N18.ATOM = N18.SPECIAL = N18.INF = N18._INFINITY = N18.INFINITY = N18.NAN = N18.BOOL = N18.NULL = N18.OBJ = N18.ARR = N18.NUM = N18.STR = void 0;
  N18.STR = 1;
  N18.NUM = 2;
  N18.ARR = 4;
  N18.OBJ = 8;
  N18.NULL = 16;
  N18.BOOL = 32;
  N18.NAN = 64;
  N18.INFINITY = 128;
  N18._INFINITY = 256;
  N18.INF = N18.INFINITY | N18._INFINITY;
  N18.SPECIAL = N18.NULL | N18.BOOL | N18.INF | N18.NAN;
  N18.ATOM = N18.STR | N18.NUM | N18.SPECIAL;
  N18.COLLECTION = N18.ARR | N18.OBJ;
  N18.ALL = N18.ATOM | N18.COLLECTION;
  N18.Allow = { STR: N18.STR, NUM: N18.NUM, ARR: N18.ARR, OBJ: N18.OBJ, NULL: N18.NULL, BOOL: N18.BOOL, NAN: N18.NAN, INFINITY: N18.INFINITY, _INFINITY: N18._INFINITY, INF: N18.INF, SPECIAL: N18.SPECIAL, ATOM: N18.ATOM, COLLECTION: N18.COLLECTION, ALL: N18.ALL };
  N18.default = N18.Allow;
});
var T3 = S4(R2());
var { __esModule: b3, Allow: _3, ALL: r, COLLECTION: s, ATOM: u3, SPECIAL: d3, INF: P3, _INFINITY: J3, INFINITY: a2, NAN: c2, BOOL: f2, NULL: i2, OBJ: m3, ARR: p2, NUM: w3, STR: j4 } = T3;
var n = T3.default ?? T3;

// https://esm.sh/partial-json@0.1.7/denonext/partial-json.mjs
var require2 = (n8) => {
  const e7 = (m20) => typeof m20.default < "u" ? m20.default : m20, c14 = (m20) => Object.assign({ __esModule: true }, m20);
  switch (n8) {
    case "partial-json/options":
      return c14(options_exports);
    default:
      console.error('module "' + n8 + '" not found');
      return null;
  }
};
var m4 = Object.create;
var o3 = Object.defineProperty;
var L3 = Object.getOwnPropertyDescriptor;
var x3 = Object.getOwnPropertyNames;
var B3 = Object.getPrototypeOf;
var M4 = Object.prototype.hasOwnProperty;
var A4 = ((t4) => typeof require2 < "u" ? require2 : typeof Proxy < "u" ? new Proxy(t4, { get: (r36, s9) => (typeof require2 < "u" ? require2 : r36)[s9] }) : t4)(function(t4) {
  if (typeof require2 < "u") return require2.apply(this, arguments);
  throw Error('Dynamic require of "' + t4 + '" is not supported');
});
var E4 = (t4, r36) => () => (r36 || t4((r36 = { exports: {} }).exports, r36), r36.exports);
var P4 = (t4, r36, s9, e7) => {
  if (r36 && typeof r36 == "object" || typeof r36 == "function") for (let i10 of x3(r36)) !M4.call(t4, i10) && i10 !== s9 && o3(t4, i10, { get: () => r36[i10], enumerable: !(e7 = L3(r36, i10)) || e7.enumerable });
  return t4;
};
var T4 = (t4, r36, s9) => (s9 = t4 != null ? m4(B3(t4)) : {}, P4(r36 || !t4 || !t4.__esModule ? o3(s9, "default", { value: t4, enumerable: true }) : s9, t4));
var w4 = E4((u17) => {
  "use strict";
  var U23 = u17 && u17.__createBinding || (Object.create ? function(t4, r36, s9, e7) {
    e7 === void 0 && (e7 = s9);
    var i10 = Object.getOwnPropertyDescriptor(r36, s9);
    (!i10 || ("get" in i10 ? !r36.__esModule : i10.writable || i10.configurable)) && (i10 = { enumerable: true, get: function() {
      return r36[s9];
    } }), Object.defineProperty(t4, e7, i10);
  } : function(t4, r36, s9, e7) {
    e7 === void 0 && (e7 = s9), t4[e7] = r36[s9];
  }), v16 = u17 && u17.__exportStar || function(t4, r36) {
    for (var s9 in t4) s9 !== "default" && !Object.prototype.hasOwnProperty.call(r36, s9) && U23(r36, t4, s9);
  };
  Object.defineProperty(u17, "__esModule", { value: true });
  u17.Allow = u17.MalformedJSON = u17.PartialJSON = u17.parseJSON = u17.parse = void 0;
  var f14 = A4("partial-json/options");
  Object.defineProperty(u17, "Allow", { enumerable: true, get: function() {
    return f14.Allow;
  } });
  v16(A4("partial-json/options"), u17);
  var O20 = class extends Error {
  };
  u17.PartialJSON = O20;
  var p15 = class extends Error {
  };
  u17.MalformedJSON = p15;
  function y18(t4, r36 = f14.Allow.ALL) {
    if (typeof t4 != "string") throw new TypeError(`expecting str, got ${typeof t4}`);
    if (!t4.trim()) throw new Error(`${t4} is empty`);
    return R15(t4.trim(), r36);
  }
  u17.parseJSON = y18;
  var R15 = (t4, r36) => {
    let s9 = t4.length, e7 = 0, i10 = (a8) => {
      throw new O20(`${a8} at position ${e7}`);
    }, N18 = (a8) => {
      throw new p15(`${a8} at position ${e7}`);
    }, d24 = () => (n8(), e7 >= s9 && i10("Unexpected end of input"), t4[e7] === '"' ? b23() : t4[e7] === "{" ? I22() : t4[e7] === "[" ? J21() : t4.substring(e7, e7 + 4) === "null" || f14.Allow.NULL & r36 && s9 - e7 < 4 && "null".startsWith(t4.substring(e7)) ? (e7 += 4, null) : t4.substring(e7, e7 + 4) === "true" || f14.Allow.BOOL & r36 && s9 - e7 < 4 && "true".startsWith(t4.substring(e7)) ? (e7 += 4, true) : t4.substring(e7, e7 + 5) === "false" || f14.Allow.BOOL & r36 && s9 - e7 < 5 && "false".startsWith(t4.substring(e7)) ? (e7 += 5, false) : t4.substring(e7, e7 + 8) === "Infinity" || f14.Allow.INFINITY & r36 && s9 - e7 < 8 && "Infinity".startsWith(t4.substring(e7)) ? (e7 += 8, 1 / 0) : t4.substring(e7, e7 + 9) === "-Infinity" || f14.Allow._INFINITY & r36 && 1 < s9 - e7 && s9 - e7 < 9 && "-Infinity".startsWith(t4.substring(e7)) ? (e7 += 9, -1 / 0) : t4.substring(e7, e7 + 3) === "NaN" || f14.Allow.NAN & r36 && s9 - e7 < 3 && "NaN".startsWith(t4.substring(e7)) ? (e7 += 3, NaN) : _17()), b23 = () => {
      let a8 = e7, c14 = false;
      for (e7++; e7 < s9 && (t4[e7] !== '"' || c14 && t4[e7 - 1] === "\\"); ) c14 = t4[e7] === "\\" ? !c14 : false, e7++;
      if (t4.charAt(e7) == '"') try {
        return JSON.parse(t4.substring(a8, ++e7 - Number(c14)));
      } catch (l20) {
        N18(String(l20));
      }
      else if (f14.Allow.STR & r36) try {
        return JSON.parse(t4.substring(a8, e7 - Number(c14)) + '"');
      } catch {
        return JSON.parse(t4.substring(a8, t4.lastIndexOf("\\")) + '"');
      }
      i10("Unterminated string literal");
    }, I22 = () => {
      e7++, n8();
      let a8 = {};
      try {
        for (; t4[e7] !== "}"; ) {
          if (n8(), e7 >= s9 && f14.Allow.OBJ & r36) return a8;
          let c14 = b23();
          n8(), e7++;
          try {
            let l20 = d24();
            a8[c14] = l20;
          } catch (l20) {
            if (f14.Allow.OBJ & r36) return a8;
            throw l20;
          }
          n8(), t4[e7] === "," && e7++;
        }
      } catch {
        if (f14.Allow.OBJ & r36) return a8;
        i10("Expected '}' at end of object");
      }
      return e7++, a8;
    }, J21 = () => {
      e7++;
      let a8 = [];
      try {
        for (; t4[e7] !== "]"; ) a8.push(d24()), n8(), t4[e7] === "," && e7++;
      } catch {
        if (f14.Allow.ARR & r36) return a8;
        i10("Expected ']' at end of array");
      }
      return e7++, a8;
    }, _17 = () => {
      if (e7 === 0) {
        t4 === "-" && N18("Not sure what '-' is");
        try {
          return JSON.parse(t4);
        } catch (c14) {
          if (f14.Allow.NUM & r36) try {
            return JSON.parse(t4.substring(0, t4.lastIndexOf("e")));
          } catch {
          }
          N18(String(c14));
        }
      }
      let a8 = e7;
      for (t4[e7] === "-" && e7++; t4[e7] && ",]}".indexOf(t4[e7]) === -1; ) e7++;
      e7 == s9 && !(f14.Allow.NUM & r36) && i10("Unterminated number literal");
      try {
        return JSON.parse(t4.substring(a8, e7));
      } catch {
        t4.substring(a8, e7) === "-" && i10("Not sure what '-' is");
        try {
          return JSON.parse(t4.substring(a8, t4.lastIndexOf("e")));
        } catch (l20) {
          N18(String(l20));
        }
      }
    }, n8 = () => {
      for (; e7 < s9 && ` 
\r	`.includes(t4[e7]); ) e7++;
    };
    return d24();
  }, W19 = y18;
  u17.parse = W19;
});
var h4 = T4(w4());
var { __esModule: Y, Allow: C3, MalformedJSON: q2, PartialJSON: D3, parseJSON: z2, parse: G3, ALL: H2, COLLECTION: K2, ATOM: Q2, SPECIAL: V3, INF: X, _INFINITY: Z2, INFINITY: k4, NAN: g3, BOOL: S5, NULL: j5, OBJ: ee, ARR: te, NUM: re, STR: se } = h4;
var ae = h4.default ?? h4;

// https://esm.sh/zod@3.25.76/denonext/zod.mjs
var $e = Object.defineProperty;
var Me = (r36, e7) => {
  for (var t4 in e7) $e(r36, t4, { get: e7[t4], enumerable: true });
};
var be2 = {};
Me(be2, { BRAND: () => ct, DIRTY: () => D4, EMPTY_PATH: () => De, INVALID: () => p3, NEVER: () => qt, OK: () => k5, ParseStatus: () => x4, Schema: () => _4, ZodAny: () => P5, ZodArray: () => $3, ZodBigInt: () => U3, ZodBoolean: () => F4, ZodBranded: () => le, ZodCatch: () => ee2, ZodDate: () => B4, ZodDefault: () => K3, ZodDiscriminatedUnion: () => me, ZodEffects: () => S6, ZodEnum: () => Q3, ZodError: () => b4, ZodFirstPartyTypeKind: () => m5, ZodFunction: () => _e, ZodIntersection: () => Y2, ZodIssueCode: () => c3, ZodLazy: () => H3, ZodLiteral: () => G4, ZodMap: () => oe, ZodNaN: () => de, ZodNativeEnum: () => X2, ZodNever: () => A5, ZodNull: () => q3, ZodNullable: () => j6, ZodNumber: () => L4, ZodObject: () => w5, ZodOptional: () => C4, ZodParsedType: () => u4, ZodPipeline: () => fe, ZodPromise: () => z3, ZodReadonly: () => te2, ZodRecord: () => ye, ZodSchema: () => _4, ZodSet: () => ce, ZodString: () => V4, ZodSymbol: () => ne, ZodTransformer: () => S6, ZodTuple: () => N3, ZodType: () => _4, ZodUndefined: () => W2, ZodUnion: () => J4, ZodUnknown: () => Z3, ZodVoid: () => ie, addIssueToContext: () => d4, any: () => _t, array: () => kt, bigint: () => ft, boolean: () => Ze, coerce: () => Wt, custom: () => je, date: () => ht, datetimeRegex: () => Re, defaultErrorMap: () => I2, discriminatedUnion: () => Ct, effect: () => Vt, enum: () => Zt, function: () => jt, getErrorMap: () => re2, getParsedType: () => R3, instanceof: () => ut, intersection: () => Ot, isAborted: () => he2, isAsync: () => se2, isDirty: () => pe, isValid: () => M5, late: () => dt, lazy: () => It, literal: () => Et, makeIssue: () => ue, map: () => Rt, nan: () => lt, nativeEnum: () => $t, never: () => vt, null: () => yt, nullable: () => zt, number: () => Ee, object: () => bt, objectUtil: () => ve, oboolean: () => Bt, onumber: () => Ft, optional: () => Pt, ostring: () => Ut, pipeline: () => Lt, preprocess: () => Dt, promise: () => Mt, quotelessJson: () => Ve, record: () => At, set: () => Nt, setErrorMap: () => ze, strictObject: () => wt, string: () => Ie, symbol: () => pt, transformer: () => Vt, tuple: () => St, undefined: () => mt, union: () => Tt, unknown: () => gt, util: () => g4, void: () => xt });
var g4;
(function(r36) {
  r36.assertEqual = (a8) => {
  };
  function e7(a8) {
  }
  r36.assertIs = e7;
  function t4(a8) {
    throw new Error();
  }
  r36.assertNever = t4, r36.arrayToEnum = (a8) => {
    let n8 = {};
    for (let i10 of a8) n8[i10] = i10;
    return n8;
  }, r36.getValidEnumValues = (a8) => {
    let n8 = r36.objectKeys(a8).filter((o15) => typeof a8[a8[o15]] != "number"), i10 = {};
    for (let o15 of n8) i10[o15] = a8[o15];
    return r36.objectValues(i10);
  }, r36.objectValues = (a8) => r36.objectKeys(a8).map(function(n8) {
    return a8[n8];
  }), r36.objectKeys = typeof Object.keys == "function" ? (a8) => Object.keys(a8) : (a8) => {
    let n8 = [];
    for (let i10 in a8) Object.prototype.hasOwnProperty.call(a8, i10) && n8.push(i10);
    return n8;
  }, r36.find = (a8, n8) => {
    for (let i10 of a8) if (n8(i10)) return i10;
  }, r36.isInteger = typeof Number.isInteger == "function" ? (a8) => Number.isInteger(a8) : (a8) => typeof a8 == "number" && Number.isFinite(a8) && Math.floor(a8) === a8;
  function s9(a8, n8 = " | ") {
    return a8.map((i10) => typeof i10 == "string" ? `'${i10}'` : i10).join(n8);
  }
  r36.joinValues = s9, r36.jsonStringifyReplacer = (a8, n8) => typeof n8 == "bigint" ? n8.toString() : n8;
})(g4 || (g4 = {}));
var ve;
(function(r36) {
  r36.mergeShapes = (e7, t4) => ({ ...e7, ...t4 });
})(ve || (ve = {}));
var u4 = g4.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]);
var R3 = (r36) => {
  switch (typeof r36) {
    case "undefined":
      return u4.undefined;
    case "string":
      return u4.string;
    case "number":
      return Number.isNaN(r36) ? u4.nan : u4.number;
    case "boolean":
      return u4.boolean;
    case "function":
      return u4.function;
    case "bigint":
      return u4.bigint;
    case "symbol":
      return u4.symbol;
    case "object":
      return Array.isArray(r36) ? u4.array : r36 === null ? u4.null : r36.then && typeof r36.then == "function" && r36.catch && typeof r36.catch == "function" ? u4.promise : typeof Map < "u" && r36 instanceof Map ? u4.map : typeof Set < "u" && r36 instanceof Set ? u4.set : typeof Date < "u" && r36 instanceof Date ? u4.date : u4.object;
    default:
      return u4.unknown;
  }
};
var c3 = g4.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
var Ve = (r36) => JSON.stringify(r36, null, 2).replace(/"([^"]+)":/g, "$1:");
var b4 = class r2 extends Error {
  get errors() {
    return this.issues;
  }
  constructor(e7) {
    super(), this.issues = [], this.addIssue = (s9) => {
      this.issues = [...this.issues, s9];
    }, this.addIssues = (s9 = []) => {
      this.issues = [...this.issues, ...s9];
    };
    let t4 = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, t4) : this.__proto__ = t4, this.name = "ZodError", this.issues = e7;
  }
  format(e7) {
    let t4 = e7 || function(n8) {
      return n8.message;
    }, s9 = { _errors: [] }, a8 = (n8) => {
      for (let i10 of n8.issues) if (i10.code === "invalid_union") i10.unionErrors.map(a8);
      else if (i10.code === "invalid_return_type") a8(i10.returnTypeError);
      else if (i10.code === "invalid_arguments") a8(i10.argumentsError);
      else if (i10.path.length === 0) s9._errors.push(t4(i10));
      else {
        let o15 = s9, f14 = 0;
        for (; f14 < i10.path.length; ) {
          let l20 = i10.path[f14];
          f14 === i10.path.length - 1 ? (o15[l20] = o15[l20] || { _errors: [] }, o15[l20]._errors.push(t4(i10))) : o15[l20] = o15[l20] || { _errors: [] }, o15 = o15[l20], f14++;
        }
      }
    };
    return a8(this), s9;
  }
  static assert(e7) {
    if (!(e7 instanceof r2)) throw new Error(`Not a ZodError: ${e7}`);
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
  flatten(e7 = (t4) => t4.message) {
    let t4 = {}, s9 = [];
    for (let a8 of this.issues) if (a8.path.length > 0) {
      let n8 = a8.path[0];
      t4[n8] = t4[n8] || [], t4[n8].push(e7(a8));
    } else s9.push(e7(a8));
    return { formErrors: s9, fieldErrors: t4 };
  }
  get formErrors() {
    return this.flatten();
  }
};
b4.create = (r36) => new b4(r36);
var Pe2 = (r36, e7) => {
  let t4;
  switch (r36.code) {
    case c3.invalid_type:
      r36.received === u4.undefined ? t4 = "Required" : t4 = `Expected ${r36.expected}, received ${r36.received}`;
      break;
    case c3.invalid_literal:
      t4 = `Invalid literal value, expected ${JSON.stringify(r36.expected, g4.jsonStringifyReplacer)}`;
      break;
    case c3.unrecognized_keys:
      t4 = `Unrecognized key(s) in object: ${g4.joinValues(r36.keys, ", ")}`;
      break;
    case c3.invalid_union:
      t4 = "Invalid input";
      break;
    case c3.invalid_union_discriminator:
      t4 = `Invalid discriminator value. Expected ${g4.joinValues(r36.options)}`;
      break;
    case c3.invalid_enum_value:
      t4 = `Invalid enum value. Expected ${g4.joinValues(r36.options)}, received '${r36.received}'`;
      break;
    case c3.invalid_arguments:
      t4 = "Invalid function arguments";
      break;
    case c3.invalid_return_type:
      t4 = "Invalid function return type";
      break;
    case c3.invalid_date:
      t4 = "Invalid date";
      break;
    case c3.invalid_string:
      typeof r36.validation == "object" ? "includes" in r36.validation ? (t4 = `Invalid input: must include "${r36.validation.includes}"`, typeof r36.validation.position == "number" && (t4 = `${t4} at one or more positions greater than or equal to ${r36.validation.position}`)) : "startsWith" in r36.validation ? t4 = `Invalid input: must start with "${r36.validation.startsWith}"` : "endsWith" in r36.validation ? t4 = `Invalid input: must end with "${r36.validation.endsWith}"` : g4.assertNever(r36.validation) : r36.validation !== "regex" ? t4 = `Invalid ${r36.validation}` : t4 = "Invalid";
      break;
    case c3.too_small:
      r36.type === "array" ? t4 = `Array must contain ${r36.exact ? "exactly" : r36.inclusive ? "at least" : "more than"} ${r36.minimum} element(s)` : r36.type === "string" ? t4 = `String must contain ${r36.exact ? "exactly" : r36.inclusive ? "at least" : "over"} ${r36.minimum} character(s)` : r36.type === "number" ? t4 = `Number must be ${r36.exact ? "exactly equal to " : r36.inclusive ? "greater than or equal to " : "greater than "}${r36.minimum}` : r36.type === "bigint" ? t4 = `Number must be ${r36.exact ? "exactly equal to " : r36.inclusive ? "greater than or equal to " : "greater than "}${r36.minimum}` : r36.type === "date" ? t4 = `Date must be ${r36.exact ? "exactly equal to " : r36.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(r36.minimum))}` : t4 = "Invalid input";
      break;
    case c3.too_big:
      r36.type === "array" ? t4 = `Array must contain ${r36.exact ? "exactly" : r36.inclusive ? "at most" : "less than"} ${r36.maximum} element(s)` : r36.type === "string" ? t4 = `String must contain ${r36.exact ? "exactly" : r36.inclusive ? "at most" : "under"} ${r36.maximum} character(s)` : r36.type === "number" ? t4 = `Number must be ${r36.exact ? "exactly" : r36.inclusive ? "less than or equal to" : "less than"} ${r36.maximum}` : r36.type === "bigint" ? t4 = `BigInt must be ${r36.exact ? "exactly" : r36.inclusive ? "less than or equal to" : "less than"} ${r36.maximum}` : r36.type === "date" ? t4 = `Date must be ${r36.exact ? "exactly" : r36.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(r36.maximum))}` : t4 = "Invalid input";
      break;
    case c3.custom:
      t4 = "Invalid input";
      break;
    case c3.invalid_intersection_types:
      t4 = "Intersection results could not be merged";
      break;
    case c3.not_multiple_of:
      t4 = `Number must be a multiple of ${r36.multipleOf}`;
      break;
    case c3.not_finite:
      t4 = "Number must be finite";
      break;
    default:
      t4 = e7.defaultError, g4.assertNever(r36);
  }
  return { message: t4 };
};
var I2 = Pe2;
var Te = I2;
function ze(r36) {
  Te = r36;
}
function re2() {
  return Te;
}
var ue = (r36) => {
  let { data: e7, path: t4, errorMaps: s9, issueData: a8 } = r36, n8 = [...t4, ...a8.path || []], i10 = { ...a8, path: n8 };
  if (a8.message !== void 0) return { ...a8, path: n8, message: a8.message };
  let o15 = "", f14 = s9.filter((l20) => !!l20).slice().reverse();
  for (let l20 of f14) o15 = l20(i10, { data: e7, defaultError: o15 }).message;
  return { ...a8, path: n8, message: o15 };
};
var De = [];
function d4(r36, e7) {
  let t4 = re2(), s9 = ue({ issueData: e7, data: r36.data, path: r36.path, errorMaps: [r36.common.contextualErrorMap, r36.schemaErrorMap, t4, t4 === I2 ? void 0 : I2].filter((a8) => !!a8) });
  r36.common.issues.push(s9);
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
  static mergeArray(e7, t4) {
    let s9 = [];
    for (let a8 of t4) {
      if (a8.status === "aborted") return p3;
      a8.status === "dirty" && e7.dirty(), s9.push(a8.value);
    }
    return { status: e7.value, value: s9 };
  }
  static async mergeObjectAsync(e7, t4) {
    let s9 = [];
    for (let a8 of t4) {
      let n8 = await a8.key, i10 = await a8.value;
      s9.push({ key: n8, value: i10 });
    }
    return r3.mergeObjectSync(e7, s9);
  }
  static mergeObjectSync(e7, t4) {
    let s9 = {};
    for (let a8 of t4) {
      let { key: n8, value: i10 } = a8;
      if (n8.status === "aborted" || i10.status === "aborted") return p3;
      n8.status === "dirty" && e7.dirty(), i10.status === "dirty" && e7.dirty(), n8.value !== "__proto__" && (typeof i10.value < "u" || a8.alwaysSet) && (s9[n8.value] = i10.value);
    }
    return { status: e7.value, value: s9 };
  }
};
var p3 = Object.freeze({ status: "aborted" });
var D4 = (r36) => ({ status: "dirty", value: r36 });
var k5 = (r36) => ({ status: "valid", value: r36 });
var he2 = (r36) => r36.status === "aborted";
var pe = (r36) => r36.status === "dirty";
var M5 = (r36) => r36.status === "valid";
var se2 = (r36) => typeof Promise < "u" && r36 instanceof Promise;
var h5;
(function(r36) {
  r36.errToObj = (e7) => typeof e7 == "string" ? { message: e7 } : e7 || {}, r36.toString = (e7) => typeof e7 == "string" ? e7 : e7?.message;
})(h5 || (h5 = {}));
var O3 = class {
  constructor(e7, t4, s9, a8) {
    this._cachedPath = [], this.parent = e7, this.data = t4, this._path = s9, this._key = a8;
  }
  get path() {
    return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
};
var Ce = (r36, e7) => {
  if (M5(e7)) return { success: true, data: e7.value };
  if (!r36.common.issues.length) throw new Error("Validation failed but no issues detected.");
  return { success: false, get error() {
    if (this._error) return this._error;
    let t4 = new b4(r36.common.issues);
    return this._error = t4, this._error;
  } };
};
function y2(r36) {
  if (!r36) return {};
  let { errorMap: e7, invalid_type_error: t4, required_error: s9, description: a8 } = r36;
  if (e7 && (t4 || s9)) throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e7 ? { errorMap: e7, description: a8 } : { errorMap: (i10, o15) => {
    let { message: f14 } = r36;
    return i10.code === "invalid_enum_value" ? { message: f14 ?? o15.defaultError } : typeof o15.data > "u" ? { message: f14 ?? s9 ?? o15.defaultError } : i10.code !== "invalid_type" ? { message: o15.defaultError } : { message: f14 ?? t4 ?? o15.defaultError };
  }, description: a8 };
}
var _4 = class {
  get description() {
    return this._def.description;
  }
  _getType(e7) {
    return R3(e7.data);
  }
  _getOrReturnCtx(e7, t4) {
    return t4 || { common: e7.parent.common, data: e7.data, parsedType: R3(e7.data), schemaErrorMap: this._def.errorMap, path: e7.path, parent: e7.parent };
  }
  _processInputParams(e7) {
    return { status: new x4(), ctx: { common: e7.parent.common, data: e7.data, parsedType: R3(e7.data), schemaErrorMap: this._def.errorMap, path: e7.path, parent: e7.parent } };
  }
  _parseSync(e7) {
    let t4 = this._parse(e7);
    if (se2(t4)) throw new Error("Synchronous parse encountered promise.");
    return t4;
  }
  _parseAsync(e7) {
    let t4 = this._parse(e7);
    return Promise.resolve(t4);
  }
  parse(e7, t4) {
    let s9 = this.safeParse(e7, t4);
    if (s9.success) return s9.data;
    throw s9.error;
  }
  safeParse(e7, t4) {
    let s9 = { common: { issues: [], async: t4?.async ?? false, contextualErrorMap: t4?.errorMap }, path: t4?.path || [], schemaErrorMap: this._def.errorMap, parent: null, data: e7, parsedType: R3(e7) }, a8 = this._parseSync({ data: e7, path: s9.path, parent: s9 });
    return Ce(s9, a8);
  }
  "~validate"(e7) {
    let t4 = { common: { issues: [], async: !!this["~standard"].async }, path: [], schemaErrorMap: this._def.errorMap, parent: null, data: e7, parsedType: R3(e7) };
    if (!this["~standard"].async) try {
      let s9 = this._parseSync({ data: e7, path: [], parent: t4 });
      return M5(s9) ? { value: s9.value } : { issues: t4.common.issues };
    } catch (s9) {
      s9?.message?.toLowerCase()?.includes("encountered") && (this["~standard"].async = true), t4.common = { issues: [], async: true };
    }
    return this._parseAsync({ data: e7, path: [], parent: t4 }).then((s9) => M5(s9) ? { value: s9.value } : { issues: t4.common.issues });
  }
  async parseAsync(e7, t4) {
    let s9 = await this.safeParseAsync(e7, t4);
    if (s9.success) return s9.data;
    throw s9.error;
  }
  async safeParseAsync(e7, t4) {
    let s9 = { common: { issues: [], contextualErrorMap: t4?.errorMap, async: true }, path: t4?.path || [], schemaErrorMap: this._def.errorMap, parent: null, data: e7, parsedType: R3(e7) }, a8 = this._parse({ data: e7, path: s9.path, parent: s9 }), n8 = await (se2(a8) ? a8 : Promise.resolve(a8));
    return Ce(s9, n8);
  }
  refine(e7, t4) {
    let s9 = (a8) => typeof t4 == "string" || typeof t4 > "u" ? { message: t4 } : typeof t4 == "function" ? t4(a8) : t4;
    return this._refinement((a8, n8) => {
      let i10 = e7(a8), o15 = () => n8.addIssue({ code: c3.custom, ...s9(a8) });
      return typeof Promise < "u" && i10 instanceof Promise ? i10.then((f14) => f14 ? true : (o15(), false)) : i10 ? true : (o15(), false);
    });
  }
  refinement(e7, t4) {
    return this._refinement((s9, a8) => e7(s9) ? true : (a8.addIssue(typeof t4 == "function" ? t4(s9, a8) : t4), false));
  }
  _refinement(e7) {
    return new S6({ schema: this, typeName: m5.ZodEffects, effect: { type: "refinement", refinement: e7 } });
  }
  superRefine(e7) {
    return this._refinement(e7);
  }
  constructor(e7) {
    this.spa = this.safeParseAsync, this._def = e7, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = { version: 1, vendor: "zod", validate: (t4) => this["~validate"](t4) };
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
  or(e7) {
    return J4.create([this, e7], this._def);
  }
  and(e7) {
    return Y2.create(this, e7, this._def);
  }
  transform(e7) {
    return new S6({ ...y2(this._def), schema: this, typeName: m5.ZodEffects, effect: { type: "transform", transform: e7 } });
  }
  default(e7) {
    let t4 = typeof e7 == "function" ? e7 : () => e7;
    return new K3({ ...y2(this._def), innerType: this, defaultValue: t4, typeName: m5.ZodDefault });
  }
  brand() {
    return new le({ typeName: m5.ZodBranded, type: this, ...y2(this._def) });
  }
  catch(e7) {
    let t4 = typeof e7 == "function" ? e7 : () => e7;
    return new ee2({ ...y2(this._def), innerType: this, catchValue: t4, typeName: m5.ZodCatch });
  }
  describe(e7) {
    let t4 = this.constructor;
    return new t4({ ...this._def, description: e7 });
  }
  pipe(e7) {
    return fe.create(this, e7);
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
function Ae(r36) {
  let e7 = "[0-5]\\d";
  r36.precision ? e7 = `${e7}\\.\\d{${r36.precision}}` : r36.precision == null && (e7 = `${e7}(\\.\\d+)?`);
  let t4 = r36.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${e7})${t4}`;
}
function st(r36) {
  return new RegExp(`^${Ae(r36)}$`);
}
function Re(r36) {
  let e7 = `${Se2}T${Ae(r36)}`, t4 = [];
  return t4.push(r36.local ? "Z?" : "Z"), r36.offset && t4.push("([+-]\\d{2}:?\\d{2})"), e7 = `${e7}(${t4.join("|")})`, new RegExp(`^${e7}$`);
}
function at(r36, e7) {
  return !!((e7 === "v4" || !e7) && Ge.test(r36) || (e7 === "v6" || !e7) && Xe.test(r36));
}
function nt(r36, e7) {
  if (!qe.test(r36)) return false;
  try {
    let [t4] = r36.split(".");
    if (!t4) return false;
    let s9 = t4.replace(/-/g, "+").replace(/_/g, "/").padEnd(t4.length + (4 - t4.length % 4) % 4, "="), a8 = JSON.parse(atob(s9));
    return !(typeof a8 != "object" || a8 === null || "typ" in a8 && a8?.typ !== "JWT" || !a8.alg || e7 && a8.alg !== e7);
  } catch {
    return false;
  }
}
function it(r36, e7) {
  return !!((e7 === "v4" || !e7) && Qe.test(r36) || (e7 === "v6" || !e7) && Ke.test(r36));
}
var V4 = class r4 extends _4 {
  _parse(e7) {
    if (this._def.coerce && (e7.data = String(e7.data)), this._getType(e7) !== u4.string) {
      let n8 = this._getOrReturnCtx(e7);
      return d4(n8, { code: c3.invalid_type, expected: u4.string, received: n8.parsedType }), p3;
    }
    let s9 = new x4(), a8;
    for (let n8 of this._def.checks) if (n8.kind === "min") e7.data.length < n8.value && (a8 = this._getOrReturnCtx(e7, a8), d4(a8, { code: c3.too_small, minimum: n8.value, type: "string", inclusive: true, exact: false, message: n8.message }), s9.dirty());
    else if (n8.kind === "max") e7.data.length > n8.value && (a8 = this._getOrReturnCtx(e7, a8), d4(a8, { code: c3.too_big, maximum: n8.value, type: "string", inclusive: true, exact: false, message: n8.message }), s9.dirty());
    else if (n8.kind === "length") {
      let i10 = e7.data.length > n8.value, o15 = e7.data.length < n8.value;
      (i10 || o15) && (a8 = this._getOrReturnCtx(e7, a8), i10 ? d4(a8, { code: c3.too_big, maximum: n8.value, type: "string", inclusive: true, exact: true, message: n8.message }) : o15 && d4(a8, { code: c3.too_small, minimum: n8.value, type: "string", inclusive: true, exact: true, message: n8.message }), s9.dirty());
    } else if (n8.kind === "email") Ye.test(e7.data) || (a8 = this._getOrReturnCtx(e7, a8), d4(a8, { validation: "email", code: c3.invalid_string, message: n8.message }), s9.dirty());
    else if (n8.kind === "emoji") xe || (xe = new RegExp(He, "u")), xe.test(e7.data) || (a8 = this._getOrReturnCtx(e7, a8), d4(a8, { validation: "emoji", code: c3.invalid_string, message: n8.message }), s9.dirty());
    else if (n8.kind === "uuid") Be.test(e7.data) || (a8 = this._getOrReturnCtx(e7, a8), d4(a8, { validation: "uuid", code: c3.invalid_string, message: n8.message }), s9.dirty());
    else if (n8.kind === "nanoid") We.test(e7.data) || (a8 = this._getOrReturnCtx(e7, a8), d4(a8, { validation: "nanoid", code: c3.invalid_string, message: n8.message }), s9.dirty());
    else if (n8.kind === "cuid") Le.test(e7.data) || (a8 = this._getOrReturnCtx(e7, a8), d4(a8, { validation: "cuid", code: c3.invalid_string, message: n8.message }), s9.dirty());
    else if (n8.kind === "cuid2") Ue.test(e7.data) || (a8 = this._getOrReturnCtx(e7, a8), d4(a8, { validation: "cuid2", code: c3.invalid_string, message: n8.message }), s9.dirty());
    else if (n8.kind === "ulid") Fe.test(e7.data) || (a8 = this._getOrReturnCtx(e7, a8), d4(a8, { validation: "ulid", code: c3.invalid_string, message: n8.message }), s9.dirty());
    else if (n8.kind === "url") try {
      new URL(e7.data);
    } catch {
      a8 = this._getOrReturnCtx(e7, a8), d4(a8, { validation: "url", code: c3.invalid_string, message: n8.message }), s9.dirty();
    }
    else n8.kind === "regex" ? (n8.regex.lastIndex = 0, n8.regex.test(e7.data) || (a8 = this._getOrReturnCtx(e7, a8), d4(a8, { validation: "regex", code: c3.invalid_string, message: n8.message }), s9.dirty())) : n8.kind === "trim" ? e7.data = e7.data.trim() : n8.kind === "includes" ? e7.data.includes(n8.value, n8.position) || (a8 = this._getOrReturnCtx(e7, a8), d4(a8, { code: c3.invalid_string, validation: { includes: n8.value, position: n8.position }, message: n8.message }), s9.dirty()) : n8.kind === "toLowerCase" ? e7.data = e7.data.toLowerCase() : n8.kind === "toUpperCase" ? e7.data = e7.data.toUpperCase() : n8.kind === "startsWith" ? e7.data.startsWith(n8.value) || (a8 = this._getOrReturnCtx(e7, a8), d4(a8, { code: c3.invalid_string, validation: { startsWith: n8.value }, message: n8.message }), s9.dirty()) : n8.kind === "endsWith" ? e7.data.endsWith(n8.value) || (a8 = this._getOrReturnCtx(e7, a8), d4(a8, { code: c3.invalid_string, validation: { endsWith: n8.value }, message: n8.message }), s9.dirty()) : n8.kind === "datetime" ? Re(n8).test(e7.data) || (a8 = this._getOrReturnCtx(e7, a8), d4(a8, { code: c3.invalid_string, validation: "datetime", message: n8.message }), s9.dirty()) : n8.kind === "date" ? rt.test(e7.data) || (a8 = this._getOrReturnCtx(e7, a8), d4(a8, { code: c3.invalid_string, validation: "date", message: n8.message }), s9.dirty()) : n8.kind === "time" ? st(n8).test(e7.data) || (a8 = this._getOrReturnCtx(e7, a8), d4(a8, { code: c3.invalid_string, validation: "time", message: n8.message }), s9.dirty()) : n8.kind === "duration" ? Je.test(e7.data) || (a8 = this._getOrReturnCtx(e7, a8), d4(a8, { validation: "duration", code: c3.invalid_string, message: n8.message }), s9.dirty()) : n8.kind === "ip" ? at(e7.data, n8.version) || (a8 = this._getOrReturnCtx(e7, a8), d4(a8, { validation: "ip", code: c3.invalid_string, message: n8.message }), s9.dirty()) : n8.kind === "jwt" ? nt(e7.data, n8.alg) || (a8 = this._getOrReturnCtx(e7, a8), d4(a8, { validation: "jwt", code: c3.invalid_string, message: n8.message }), s9.dirty()) : n8.kind === "cidr" ? it(e7.data, n8.version) || (a8 = this._getOrReturnCtx(e7, a8), d4(a8, { validation: "cidr", code: c3.invalid_string, message: n8.message }), s9.dirty()) : n8.kind === "base64" ? et.test(e7.data) || (a8 = this._getOrReturnCtx(e7, a8), d4(a8, { validation: "base64", code: c3.invalid_string, message: n8.message }), s9.dirty()) : n8.kind === "base64url" ? tt.test(e7.data) || (a8 = this._getOrReturnCtx(e7, a8), d4(a8, { validation: "base64url", code: c3.invalid_string, message: n8.message }), s9.dirty()) : g4.assertNever(n8);
    return { status: s9.value, value: e7.data };
  }
  _regex(e7, t4, s9) {
    return this.refinement((a8) => e7.test(a8), { validation: t4, code: c3.invalid_string, ...h5.errToObj(s9) });
  }
  _addCheck(e7) {
    return new r4({ ...this._def, checks: [...this._def.checks, e7] });
  }
  email(e7) {
    return this._addCheck({ kind: "email", ...h5.errToObj(e7) });
  }
  url(e7) {
    return this._addCheck({ kind: "url", ...h5.errToObj(e7) });
  }
  emoji(e7) {
    return this._addCheck({ kind: "emoji", ...h5.errToObj(e7) });
  }
  uuid(e7) {
    return this._addCheck({ kind: "uuid", ...h5.errToObj(e7) });
  }
  nanoid(e7) {
    return this._addCheck({ kind: "nanoid", ...h5.errToObj(e7) });
  }
  cuid(e7) {
    return this._addCheck({ kind: "cuid", ...h5.errToObj(e7) });
  }
  cuid2(e7) {
    return this._addCheck({ kind: "cuid2", ...h5.errToObj(e7) });
  }
  ulid(e7) {
    return this._addCheck({ kind: "ulid", ...h5.errToObj(e7) });
  }
  base64(e7) {
    return this._addCheck({ kind: "base64", ...h5.errToObj(e7) });
  }
  base64url(e7) {
    return this._addCheck({ kind: "base64url", ...h5.errToObj(e7) });
  }
  jwt(e7) {
    return this._addCheck({ kind: "jwt", ...h5.errToObj(e7) });
  }
  ip(e7) {
    return this._addCheck({ kind: "ip", ...h5.errToObj(e7) });
  }
  cidr(e7) {
    return this._addCheck({ kind: "cidr", ...h5.errToObj(e7) });
  }
  datetime(e7) {
    return typeof e7 == "string" ? this._addCheck({ kind: "datetime", precision: null, offset: false, local: false, message: e7 }) : this._addCheck({ kind: "datetime", precision: typeof e7?.precision > "u" ? null : e7?.precision, offset: e7?.offset ?? false, local: e7?.local ?? false, ...h5.errToObj(e7?.message) });
  }
  date(e7) {
    return this._addCheck({ kind: "date", message: e7 });
  }
  time(e7) {
    return typeof e7 == "string" ? this._addCheck({ kind: "time", precision: null, message: e7 }) : this._addCheck({ kind: "time", precision: typeof e7?.precision > "u" ? null : e7?.precision, ...h5.errToObj(e7?.message) });
  }
  duration(e7) {
    return this._addCheck({ kind: "duration", ...h5.errToObj(e7) });
  }
  regex(e7, t4) {
    return this._addCheck({ kind: "regex", regex: e7, ...h5.errToObj(t4) });
  }
  includes(e7, t4) {
    return this._addCheck({ kind: "includes", value: e7, position: t4?.position, ...h5.errToObj(t4?.message) });
  }
  startsWith(e7, t4) {
    return this._addCheck({ kind: "startsWith", value: e7, ...h5.errToObj(t4) });
  }
  endsWith(e7, t4) {
    return this._addCheck({ kind: "endsWith", value: e7, ...h5.errToObj(t4) });
  }
  min(e7, t4) {
    return this._addCheck({ kind: "min", value: e7, ...h5.errToObj(t4) });
  }
  max(e7, t4) {
    return this._addCheck({ kind: "max", value: e7, ...h5.errToObj(t4) });
  }
  length(e7, t4) {
    return this._addCheck({ kind: "length", value: e7, ...h5.errToObj(t4) });
  }
  nonempty(e7) {
    return this.min(1, h5.errToObj(e7));
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
    return !!this._def.checks.find((e7) => e7.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((e7) => e7.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((e7) => e7.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((e7) => e7.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((e7) => e7.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((e7) => e7.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((e7) => e7.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((e7) => e7.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((e7) => e7.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((e7) => e7.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((e7) => e7.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((e7) => e7.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((e7) => e7.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((e7) => e7.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((e7) => e7.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((e7) => e7.kind === "base64url");
  }
  get minLength() {
    let e7 = null;
    for (let t4 of this._def.checks) t4.kind === "min" && (e7 === null || t4.value > e7) && (e7 = t4.value);
    return e7;
  }
  get maxLength() {
    let e7 = null;
    for (let t4 of this._def.checks) t4.kind === "max" && (e7 === null || t4.value < e7) && (e7 = t4.value);
    return e7;
  }
};
V4.create = (r36) => new V4({ checks: [], typeName: m5.ZodString, coerce: r36?.coerce ?? false, ...y2(r36) });
function ot(r36, e7) {
  let t4 = (r36.toString().split(".")[1] || "").length, s9 = (e7.toString().split(".")[1] || "").length, a8 = t4 > s9 ? t4 : s9, n8 = Number.parseInt(r36.toFixed(a8).replace(".", "")), i10 = Number.parseInt(e7.toFixed(a8).replace(".", ""));
  return n8 % i10 / 10 ** a8;
}
var L4 = class r5 extends _4 {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e7) {
    if (this._def.coerce && (e7.data = Number(e7.data)), this._getType(e7) !== u4.number) {
      let n8 = this._getOrReturnCtx(e7);
      return d4(n8, { code: c3.invalid_type, expected: u4.number, received: n8.parsedType }), p3;
    }
    let s9, a8 = new x4();
    for (let n8 of this._def.checks) n8.kind === "int" ? g4.isInteger(e7.data) || (s9 = this._getOrReturnCtx(e7, s9), d4(s9, { code: c3.invalid_type, expected: "integer", received: "float", message: n8.message }), a8.dirty()) : n8.kind === "min" ? (n8.inclusive ? e7.data < n8.value : e7.data <= n8.value) && (s9 = this._getOrReturnCtx(e7, s9), d4(s9, { code: c3.too_small, minimum: n8.value, type: "number", inclusive: n8.inclusive, exact: false, message: n8.message }), a8.dirty()) : n8.kind === "max" ? (n8.inclusive ? e7.data > n8.value : e7.data >= n8.value) && (s9 = this._getOrReturnCtx(e7, s9), d4(s9, { code: c3.too_big, maximum: n8.value, type: "number", inclusive: n8.inclusive, exact: false, message: n8.message }), a8.dirty()) : n8.kind === "multipleOf" ? ot(e7.data, n8.value) !== 0 && (s9 = this._getOrReturnCtx(e7, s9), d4(s9, { code: c3.not_multiple_of, multipleOf: n8.value, message: n8.message }), a8.dirty()) : n8.kind === "finite" ? Number.isFinite(e7.data) || (s9 = this._getOrReturnCtx(e7, s9), d4(s9, { code: c3.not_finite, message: n8.message }), a8.dirty()) : g4.assertNever(n8);
    return { status: a8.value, value: e7.data };
  }
  gte(e7, t4) {
    return this.setLimit("min", e7, true, h5.toString(t4));
  }
  gt(e7, t4) {
    return this.setLimit("min", e7, false, h5.toString(t4));
  }
  lte(e7, t4) {
    return this.setLimit("max", e7, true, h5.toString(t4));
  }
  lt(e7, t4) {
    return this.setLimit("max", e7, false, h5.toString(t4));
  }
  setLimit(e7, t4, s9, a8) {
    return new r5({ ...this._def, checks: [...this._def.checks, { kind: e7, value: t4, inclusive: s9, message: h5.toString(a8) }] });
  }
  _addCheck(e7) {
    return new r5({ ...this._def, checks: [...this._def.checks, e7] });
  }
  int(e7) {
    return this._addCheck({ kind: "int", message: h5.toString(e7) });
  }
  positive(e7) {
    return this._addCheck({ kind: "min", value: 0, inclusive: false, message: h5.toString(e7) });
  }
  negative(e7) {
    return this._addCheck({ kind: "max", value: 0, inclusive: false, message: h5.toString(e7) });
  }
  nonpositive(e7) {
    return this._addCheck({ kind: "max", value: 0, inclusive: true, message: h5.toString(e7) });
  }
  nonnegative(e7) {
    return this._addCheck({ kind: "min", value: 0, inclusive: true, message: h5.toString(e7) });
  }
  multipleOf(e7, t4) {
    return this._addCheck({ kind: "multipleOf", value: e7, message: h5.toString(t4) });
  }
  finite(e7) {
    return this._addCheck({ kind: "finite", message: h5.toString(e7) });
  }
  safe(e7) {
    return this._addCheck({ kind: "min", inclusive: true, value: Number.MIN_SAFE_INTEGER, message: h5.toString(e7) })._addCheck({ kind: "max", inclusive: true, value: Number.MAX_SAFE_INTEGER, message: h5.toString(e7) });
  }
  get minValue() {
    let e7 = null;
    for (let t4 of this._def.checks) t4.kind === "min" && (e7 === null || t4.value > e7) && (e7 = t4.value);
    return e7;
  }
  get maxValue() {
    let e7 = null;
    for (let t4 of this._def.checks) t4.kind === "max" && (e7 === null || t4.value < e7) && (e7 = t4.value);
    return e7;
  }
  get isInt() {
    return !!this._def.checks.find((e7) => e7.kind === "int" || e7.kind === "multipleOf" && g4.isInteger(e7.value));
  }
  get isFinite() {
    let e7 = null, t4 = null;
    for (let s9 of this._def.checks) {
      if (s9.kind === "finite" || s9.kind === "int" || s9.kind === "multipleOf") return true;
      s9.kind === "min" ? (t4 === null || s9.value > t4) && (t4 = s9.value) : s9.kind === "max" && (e7 === null || s9.value < e7) && (e7 = s9.value);
    }
    return Number.isFinite(t4) && Number.isFinite(e7);
  }
};
L4.create = (r36) => new L4({ checks: [], typeName: m5.ZodNumber, coerce: r36?.coerce || false, ...y2(r36) });
var U3 = class r6 extends _4 {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(e7) {
    if (this._def.coerce) try {
      e7.data = BigInt(e7.data);
    } catch {
      return this._getInvalidInput(e7);
    }
    if (this._getType(e7) !== u4.bigint) return this._getInvalidInput(e7);
    let s9, a8 = new x4();
    for (let n8 of this._def.checks) n8.kind === "min" ? (n8.inclusive ? e7.data < n8.value : e7.data <= n8.value) && (s9 = this._getOrReturnCtx(e7, s9), d4(s9, { code: c3.too_small, type: "bigint", minimum: n8.value, inclusive: n8.inclusive, message: n8.message }), a8.dirty()) : n8.kind === "max" ? (n8.inclusive ? e7.data > n8.value : e7.data >= n8.value) && (s9 = this._getOrReturnCtx(e7, s9), d4(s9, { code: c3.too_big, type: "bigint", maximum: n8.value, inclusive: n8.inclusive, message: n8.message }), a8.dirty()) : n8.kind === "multipleOf" ? e7.data % n8.value !== BigInt(0) && (s9 = this._getOrReturnCtx(e7, s9), d4(s9, { code: c3.not_multiple_of, multipleOf: n8.value, message: n8.message }), a8.dirty()) : g4.assertNever(n8);
    return { status: a8.value, value: e7.data };
  }
  _getInvalidInput(e7) {
    let t4 = this._getOrReturnCtx(e7);
    return d4(t4, { code: c3.invalid_type, expected: u4.bigint, received: t4.parsedType }), p3;
  }
  gte(e7, t4) {
    return this.setLimit("min", e7, true, h5.toString(t4));
  }
  gt(e7, t4) {
    return this.setLimit("min", e7, false, h5.toString(t4));
  }
  lte(e7, t4) {
    return this.setLimit("max", e7, true, h5.toString(t4));
  }
  lt(e7, t4) {
    return this.setLimit("max", e7, false, h5.toString(t4));
  }
  setLimit(e7, t4, s9, a8) {
    return new r6({ ...this._def, checks: [...this._def.checks, { kind: e7, value: t4, inclusive: s9, message: h5.toString(a8) }] });
  }
  _addCheck(e7) {
    return new r6({ ...this._def, checks: [...this._def.checks, e7] });
  }
  positive(e7) {
    return this._addCheck({ kind: "min", value: BigInt(0), inclusive: false, message: h5.toString(e7) });
  }
  negative(e7) {
    return this._addCheck({ kind: "max", value: BigInt(0), inclusive: false, message: h5.toString(e7) });
  }
  nonpositive(e7) {
    return this._addCheck({ kind: "max", value: BigInt(0), inclusive: true, message: h5.toString(e7) });
  }
  nonnegative(e7) {
    return this._addCheck({ kind: "min", value: BigInt(0), inclusive: true, message: h5.toString(e7) });
  }
  multipleOf(e7, t4) {
    return this._addCheck({ kind: "multipleOf", value: e7, message: h5.toString(t4) });
  }
  get minValue() {
    let e7 = null;
    for (let t4 of this._def.checks) t4.kind === "min" && (e7 === null || t4.value > e7) && (e7 = t4.value);
    return e7;
  }
  get maxValue() {
    let e7 = null;
    for (let t4 of this._def.checks) t4.kind === "max" && (e7 === null || t4.value < e7) && (e7 = t4.value);
    return e7;
  }
};
U3.create = (r36) => new U3({ checks: [], typeName: m5.ZodBigInt, coerce: r36?.coerce ?? false, ...y2(r36) });
var F4 = class extends _4 {
  _parse(e7) {
    if (this._def.coerce && (e7.data = !!e7.data), this._getType(e7) !== u4.boolean) {
      let s9 = this._getOrReturnCtx(e7);
      return d4(s9, { code: c3.invalid_type, expected: u4.boolean, received: s9.parsedType }), p3;
    }
    return k5(e7.data);
  }
};
F4.create = (r36) => new F4({ typeName: m5.ZodBoolean, coerce: r36?.coerce || false, ...y2(r36) });
var B4 = class r7 extends _4 {
  _parse(e7) {
    if (this._def.coerce && (e7.data = new Date(e7.data)), this._getType(e7) !== u4.date) {
      let n8 = this._getOrReturnCtx(e7);
      return d4(n8, { code: c3.invalid_type, expected: u4.date, received: n8.parsedType }), p3;
    }
    if (Number.isNaN(e7.data.getTime())) {
      let n8 = this._getOrReturnCtx(e7);
      return d4(n8, { code: c3.invalid_date }), p3;
    }
    let s9 = new x4(), a8;
    for (let n8 of this._def.checks) n8.kind === "min" ? e7.data.getTime() < n8.value && (a8 = this._getOrReturnCtx(e7, a8), d4(a8, { code: c3.too_small, message: n8.message, inclusive: true, exact: false, minimum: n8.value, type: "date" }), s9.dirty()) : n8.kind === "max" ? e7.data.getTime() > n8.value && (a8 = this._getOrReturnCtx(e7, a8), d4(a8, { code: c3.too_big, message: n8.message, inclusive: true, exact: false, maximum: n8.value, type: "date" }), s9.dirty()) : g4.assertNever(n8);
    return { status: s9.value, value: new Date(e7.data.getTime()) };
  }
  _addCheck(e7) {
    return new r7({ ...this._def, checks: [...this._def.checks, e7] });
  }
  min(e7, t4) {
    return this._addCheck({ kind: "min", value: e7.getTime(), message: h5.toString(t4) });
  }
  max(e7, t4) {
    return this._addCheck({ kind: "max", value: e7.getTime(), message: h5.toString(t4) });
  }
  get minDate() {
    let e7 = null;
    for (let t4 of this._def.checks) t4.kind === "min" && (e7 === null || t4.value > e7) && (e7 = t4.value);
    return e7 != null ? new Date(e7) : null;
  }
  get maxDate() {
    let e7 = null;
    for (let t4 of this._def.checks) t4.kind === "max" && (e7 === null || t4.value < e7) && (e7 = t4.value);
    return e7 != null ? new Date(e7) : null;
  }
};
B4.create = (r36) => new B4({ checks: [], coerce: r36?.coerce || false, typeName: m5.ZodDate, ...y2(r36) });
var ne = class extends _4 {
  _parse(e7) {
    if (this._getType(e7) !== u4.symbol) {
      let s9 = this._getOrReturnCtx(e7);
      return d4(s9, { code: c3.invalid_type, expected: u4.symbol, received: s9.parsedType }), p3;
    }
    return k5(e7.data);
  }
};
ne.create = (r36) => new ne({ typeName: m5.ZodSymbol, ...y2(r36) });
var W2 = class extends _4 {
  _parse(e7) {
    if (this._getType(e7) !== u4.undefined) {
      let s9 = this._getOrReturnCtx(e7);
      return d4(s9, { code: c3.invalid_type, expected: u4.undefined, received: s9.parsedType }), p3;
    }
    return k5(e7.data);
  }
};
W2.create = (r36) => new W2({ typeName: m5.ZodUndefined, ...y2(r36) });
var q3 = class extends _4 {
  _parse(e7) {
    if (this._getType(e7) !== u4.null) {
      let s9 = this._getOrReturnCtx(e7);
      return d4(s9, { code: c3.invalid_type, expected: u4.null, received: s9.parsedType }), p3;
    }
    return k5(e7.data);
  }
};
q3.create = (r36) => new q3({ typeName: m5.ZodNull, ...y2(r36) });
var P5 = class extends _4 {
  constructor() {
    super(...arguments), this._any = true;
  }
  _parse(e7) {
    return k5(e7.data);
  }
};
P5.create = (r36) => new P5({ typeName: m5.ZodAny, ...y2(r36) });
var Z3 = class extends _4 {
  constructor() {
    super(...arguments), this._unknown = true;
  }
  _parse(e7) {
    return k5(e7.data);
  }
};
Z3.create = (r36) => new Z3({ typeName: m5.ZodUnknown, ...y2(r36) });
var A5 = class extends _4 {
  _parse(e7) {
    let t4 = this._getOrReturnCtx(e7);
    return d4(t4, { code: c3.invalid_type, expected: u4.never, received: t4.parsedType }), p3;
  }
};
A5.create = (r36) => new A5({ typeName: m5.ZodNever, ...y2(r36) });
var ie = class extends _4 {
  _parse(e7) {
    if (this._getType(e7) !== u4.undefined) {
      let s9 = this._getOrReturnCtx(e7);
      return d4(s9, { code: c3.invalid_type, expected: u4.void, received: s9.parsedType }), p3;
    }
    return k5(e7.data);
  }
};
ie.create = (r36) => new ie({ typeName: m5.ZodVoid, ...y2(r36) });
var $3 = class r8 extends _4 {
  _parse(e7) {
    let { ctx: t4, status: s9 } = this._processInputParams(e7), a8 = this._def;
    if (t4.parsedType !== u4.array) return d4(t4, { code: c3.invalid_type, expected: u4.array, received: t4.parsedType }), p3;
    if (a8.exactLength !== null) {
      let i10 = t4.data.length > a8.exactLength.value, o15 = t4.data.length < a8.exactLength.value;
      (i10 || o15) && (d4(t4, { code: i10 ? c3.too_big : c3.too_small, minimum: o15 ? a8.exactLength.value : void 0, maximum: i10 ? a8.exactLength.value : void 0, type: "array", inclusive: true, exact: true, message: a8.exactLength.message }), s9.dirty());
    }
    if (a8.minLength !== null && t4.data.length < a8.minLength.value && (d4(t4, { code: c3.too_small, minimum: a8.minLength.value, type: "array", inclusive: true, exact: false, message: a8.minLength.message }), s9.dirty()), a8.maxLength !== null && t4.data.length > a8.maxLength.value && (d4(t4, { code: c3.too_big, maximum: a8.maxLength.value, type: "array", inclusive: true, exact: false, message: a8.maxLength.message }), s9.dirty()), t4.common.async) return Promise.all([...t4.data].map((i10, o15) => a8.type._parseAsync(new O3(t4, i10, t4.path, o15)))).then((i10) => x4.mergeArray(s9, i10));
    let n8 = [...t4.data].map((i10, o15) => a8.type._parseSync(new O3(t4, i10, t4.path, o15)));
    return x4.mergeArray(s9, n8);
  }
  get element() {
    return this._def.type;
  }
  min(e7, t4) {
    return new r8({ ...this._def, minLength: { value: e7, message: h5.toString(t4) } });
  }
  max(e7, t4) {
    return new r8({ ...this._def, maxLength: { value: e7, message: h5.toString(t4) } });
  }
  length(e7, t4) {
    return new r8({ ...this._def, exactLength: { value: e7, message: h5.toString(t4) } });
  }
  nonempty(e7) {
    return this.min(1, e7);
  }
};
$3.create = (r36, e7) => new $3({ type: r36, minLength: null, maxLength: null, exactLength: null, typeName: m5.ZodArray, ...y2(e7) });
function ae2(r36) {
  if (r36 instanceof w5) {
    let e7 = {};
    for (let t4 in r36.shape) {
      let s9 = r36.shape[t4];
      e7[t4] = C4.create(ae2(s9));
    }
    return new w5({ ...r36._def, shape: () => e7 });
  } else return r36 instanceof $3 ? new $3({ ...r36._def, type: ae2(r36.element) }) : r36 instanceof C4 ? C4.create(ae2(r36.unwrap())) : r36 instanceof j6 ? j6.create(ae2(r36.unwrap())) : r36 instanceof N3 ? N3.create(r36.items.map((e7) => ae2(e7))) : r36;
}
var w5 = class r9 extends _4 {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    let e7 = this._def.shape(), t4 = g4.objectKeys(e7);
    return this._cached = { shape: e7, keys: t4 }, this._cached;
  }
  _parse(e7) {
    if (this._getType(e7) !== u4.object) {
      let l20 = this._getOrReturnCtx(e7);
      return d4(l20, { code: c3.invalid_type, expected: u4.object, received: l20.parsedType }), p3;
    }
    let { status: s9, ctx: a8 } = this._processInputParams(e7), { shape: n8, keys: i10 } = this._getCached(), o15 = [];
    if (!(this._def.catchall instanceof A5 && this._def.unknownKeys === "strip")) for (let l20 in a8.data) i10.includes(l20) || o15.push(l20);
    let f14 = [];
    for (let l20 of i10) {
      let v16 = n8[l20], T20 = a8.data[l20];
      f14.push({ key: { status: "valid", value: l20 }, value: v16._parse(new O3(a8, T20, a8.path, l20)), alwaysSet: l20 in a8.data });
    }
    if (this._def.catchall instanceof A5) {
      let l20 = this._def.unknownKeys;
      if (l20 === "passthrough") for (let v16 of o15) f14.push({ key: { status: "valid", value: v16 }, value: { status: "valid", value: a8.data[v16] } });
      else if (l20 === "strict") o15.length > 0 && (d4(a8, { code: c3.unrecognized_keys, keys: o15 }), s9.dirty());
      else if (l20 !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      let l20 = this._def.catchall;
      for (let v16 of o15) {
        let T20 = a8.data[v16];
        f14.push({ key: { status: "valid", value: v16 }, value: l20._parse(new O3(a8, T20, a8.path, v16)), alwaysSet: v16 in a8.data });
      }
    }
    return a8.common.async ? Promise.resolve().then(async () => {
      let l20 = [];
      for (let v16 of f14) {
        let T20 = await v16.key, we4 = await v16.value;
        l20.push({ key: T20, value: we4, alwaysSet: v16.alwaysSet });
      }
      return l20;
    }).then((l20) => x4.mergeObjectSync(s9, l20)) : x4.mergeObjectSync(s9, f14);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e7) {
    return h5.errToObj, new r9({ ...this._def, unknownKeys: "strict", ...e7 !== void 0 ? { errorMap: (t4, s9) => {
      let a8 = this._def.errorMap?.(t4, s9).message ?? s9.defaultError;
      return t4.code === "unrecognized_keys" ? { message: h5.errToObj(e7).message ?? a8 } : { message: a8 };
    } } : {} });
  }
  strip() {
    return new r9({ ...this._def, unknownKeys: "strip" });
  }
  passthrough() {
    return new r9({ ...this._def, unknownKeys: "passthrough" });
  }
  extend(e7) {
    return new r9({ ...this._def, shape: () => ({ ...this._def.shape(), ...e7 }) });
  }
  merge(e7) {
    return new r9({ unknownKeys: e7._def.unknownKeys, catchall: e7._def.catchall, shape: () => ({ ...this._def.shape(), ...e7._def.shape() }), typeName: m5.ZodObject });
  }
  setKey(e7, t4) {
    return this.augment({ [e7]: t4 });
  }
  catchall(e7) {
    return new r9({ ...this._def, catchall: e7 });
  }
  pick(e7) {
    let t4 = {};
    for (let s9 of g4.objectKeys(e7)) e7[s9] && this.shape[s9] && (t4[s9] = this.shape[s9]);
    return new r9({ ...this._def, shape: () => t4 });
  }
  omit(e7) {
    let t4 = {};
    for (let s9 of g4.objectKeys(this.shape)) e7[s9] || (t4[s9] = this.shape[s9]);
    return new r9({ ...this._def, shape: () => t4 });
  }
  deepPartial() {
    return ae2(this);
  }
  partial(e7) {
    let t4 = {};
    for (let s9 of g4.objectKeys(this.shape)) {
      let a8 = this.shape[s9];
      e7 && !e7[s9] ? t4[s9] = a8 : t4[s9] = a8.optional();
    }
    return new r9({ ...this._def, shape: () => t4 });
  }
  required(e7) {
    let t4 = {};
    for (let s9 of g4.objectKeys(this.shape)) if (e7 && !e7[s9]) t4[s9] = this.shape[s9];
    else {
      let n8 = this.shape[s9];
      for (; n8 instanceof C4; ) n8 = n8._def.innerType;
      t4[s9] = n8;
    }
    return new r9({ ...this._def, shape: () => t4 });
  }
  keyof() {
    return Ne(g4.objectKeys(this.shape));
  }
};
w5.create = (r36, e7) => new w5({ shape: () => r36, unknownKeys: "strip", catchall: A5.create(), typeName: m5.ZodObject, ...y2(e7) });
w5.strictCreate = (r36, e7) => new w5({ shape: () => r36, unknownKeys: "strict", catchall: A5.create(), typeName: m5.ZodObject, ...y2(e7) });
w5.lazycreate = (r36, e7) => new w5({ shape: r36, unknownKeys: "strip", catchall: A5.create(), typeName: m5.ZodObject, ...y2(e7) });
var J4 = class extends _4 {
  _parse(e7) {
    let { ctx: t4 } = this._processInputParams(e7), s9 = this._def.options;
    function a8(n8) {
      for (let o15 of n8) if (o15.result.status === "valid") return o15.result;
      for (let o15 of n8) if (o15.result.status === "dirty") return t4.common.issues.push(...o15.ctx.common.issues), o15.result;
      let i10 = n8.map((o15) => new b4(o15.ctx.common.issues));
      return d4(t4, { code: c3.invalid_union, unionErrors: i10 }), p3;
    }
    if (t4.common.async) return Promise.all(s9.map(async (n8) => {
      let i10 = { ...t4, common: { ...t4.common, issues: [] }, parent: null };
      return { result: await n8._parseAsync({ data: t4.data, path: t4.path, parent: i10 }), ctx: i10 };
    })).then(a8);
    {
      let n8, i10 = [];
      for (let f14 of s9) {
        let l20 = { ...t4, common: { ...t4.common, issues: [] }, parent: null }, v16 = f14._parseSync({ data: t4.data, path: t4.path, parent: l20 });
        if (v16.status === "valid") return v16;
        v16.status === "dirty" && !n8 && (n8 = { result: v16, ctx: l20 }), l20.common.issues.length && i10.push(l20.common.issues);
      }
      if (n8) return t4.common.issues.push(...n8.ctx.common.issues), n8.result;
      let o15 = i10.map((f14) => new b4(f14));
      return d4(t4, { code: c3.invalid_union, unionErrors: o15 }), p3;
    }
  }
  get options() {
    return this._def.options;
  }
};
J4.create = (r36, e7) => new J4({ options: r36, typeName: m5.ZodUnion, ...y2(e7) });
var E5 = (r36) => r36 instanceof H3 ? E5(r36.schema) : r36 instanceof S6 ? E5(r36.innerType()) : r36 instanceof G4 ? [r36.value] : r36 instanceof Q3 ? r36.options : r36 instanceof X2 ? g4.objectValues(r36.enum) : r36 instanceof K3 ? E5(r36._def.innerType) : r36 instanceof W2 ? [void 0] : r36 instanceof q3 ? [null] : r36 instanceof C4 ? [void 0, ...E5(r36.unwrap())] : r36 instanceof j6 ? [null, ...E5(r36.unwrap())] : r36 instanceof le || r36 instanceof te2 ? E5(r36.unwrap()) : r36 instanceof ee2 ? E5(r36._def.innerType) : [];
var me = class r10 extends _4 {
  _parse(e7) {
    let { ctx: t4 } = this._processInputParams(e7);
    if (t4.parsedType !== u4.object) return d4(t4, { code: c3.invalid_type, expected: u4.object, received: t4.parsedType }), p3;
    let s9 = this.discriminator, a8 = t4.data[s9], n8 = this.optionsMap.get(a8);
    return n8 ? t4.common.async ? n8._parseAsync({ data: t4.data, path: t4.path, parent: t4 }) : n8._parseSync({ data: t4.data, path: t4.path, parent: t4 }) : (d4(t4, { code: c3.invalid_union_discriminator, options: Array.from(this.optionsMap.keys()), path: [s9] }), p3);
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
  static create(e7, t4, s9) {
    let a8 = /* @__PURE__ */ new Map();
    for (let n8 of t4) {
      let i10 = E5(n8.shape[e7]);
      if (!i10.length) throw new Error(`A discriminator value for key \`${e7}\` could not be extracted from all schema options`);
      for (let o15 of i10) {
        if (a8.has(o15)) throw new Error(`Discriminator property ${String(e7)} has duplicate value ${String(o15)}`);
        a8.set(o15, n8);
      }
    }
    return new r10({ typeName: m5.ZodDiscriminatedUnion, discriminator: e7, options: t4, optionsMap: a8, ...y2(s9) });
  }
};
function ke(r36, e7) {
  let t4 = R3(r36), s9 = R3(e7);
  if (r36 === e7) return { valid: true, data: r36 };
  if (t4 === u4.object && s9 === u4.object) {
    let a8 = g4.objectKeys(e7), n8 = g4.objectKeys(r36).filter((o15) => a8.indexOf(o15) !== -1), i10 = { ...r36, ...e7 };
    for (let o15 of n8) {
      let f14 = ke(r36[o15], e7[o15]);
      if (!f14.valid) return { valid: false };
      i10[o15] = f14.data;
    }
    return { valid: true, data: i10 };
  } else if (t4 === u4.array && s9 === u4.array) {
    if (r36.length !== e7.length) return { valid: false };
    let a8 = [];
    for (let n8 = 0; n8 < r36.length; n8++) {
      let i10 = r36[n8], o15 = e7[n8], f14 = ke(i10, o15);
      if (!f14.valid) return { valid: false };
      a8.push(f14.data);
    }
    return { valid: true, data: a8 };
  } else return t4 === u4.date && s9 === u4.date && +r36 == +e7 ? { valid: true, data: r36 } : { valid: false };
}
var Y2 = class extends _4 {
  _parse(e7) {
    let { status: t4, ctx: s9 } = this._processInputParams(e7), a8 = (n8, i10) => {
      if (he2(n8) || he2(i10)) return p3;
      let o15 = ke(n8.value, i10.value);
      return o15.valid ? ((pe(n8) || pe(i10)) && t4.dirty(), { status: t4.value, value: o15.data }) : (d4(s9, { code: c3.invalid_intersection_types }), p3);
    };
    return s9.common.async ? Promise.all([this._def.left._parseAsync({ data: s9.data, path: s9.path, parent: s9 }), this._def.right._parseAsync({ data: s9.data, path: s9.path, parent: s9 })]).then(([n8, i10]) => a8(n8, i10)) : a8(this._def.left._parseSync({ data: s9.data, path: s9.path, parent: s9 }), this._def.right._parseSync({ data: s9.data, path: s9.path, parent: s9 }));
  }
};
Y2.create = (r36, e7, t4) => new Y2({ left: r36, right: e7, typeName: m5.ZodIntersection, ...y2(t4) });
var N3 = class r11 extends _4 {
  _parse(e7) {
    let { status: t4, ctx: s9 } = this._processInputParams(e7);
    if (s9.parsedType !== u4.array) return d4(s9, { code: c3.invalid_type, expected: u4.array, received: s9.parsedType }), p3;
    if (s9.data.length < this._def.items.length) return d4(s9, { code: c3.too_small, minimum: this._def.items.length, inclusive: true, exact: false, type: "array" }), p3;
    !this._def.rest && s9.data.length > this._def.items.length && (d4(s9, { code: c3.too_big, maximum: this._def.items.length, inclusive: true, exact: false, type: "array" }), t4.dirty());
    let n8 = [...s9.data].map((i10, o15) => {
      let f14 = this._def.items[o15] || this._def.rest;
      return f14 ? f14._parse(new O3(s9, i10, s9.path, o15)) : null;
    }).filter((i10) => !!i10);
    return s9.common.async ? Promise.all(n8).then((i10) => x4.mergeArray(t4, i10)) : x4.mergeArray(t4, n8);
  }
  get items() {
    return this._def.items;
  }
  rest(e7) {
    return new r11({ ...this._def, rest: e7 });
  }
};
N3.create = (r36, e7) => {
  if (!Array.isArray(r36)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new N3({ items: r36, typeName: m5.ZodTuple, rest: null, ...y2(e7) });
};
var ye = class r12 extends _4 {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e7) {
    let { status: t4, ctx: s9 } = this._processInputParams(e7);
    if (s9.parsedType !== u4.object) return d4(s9, { code: c3.invalid_type, expected: u4.object, received: s9.parsedType }), p3;
    let a8 = [], n8 = this._def.keyType, i10 = this._def.valueType;
    for (let o15 in s9.data) a8.push({ key: n8._parse(new O3(s9, o15, s9.path, o15)), value: i10._parse(new O3(s9, s9.data[o15], s9.path, o15)), alwaysSet: o15 in s9.data });
    return s9.common.async ? x4.mergeObjectAsync(t4, a8) : x4.mergeObjectSync(t4, a8);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e7, t4, s9) {
    return t4 instanceof _4 ? new r12({ keyType: e7, valueType: t4, typeName: m5.ZodRecord, ...y2(s9) }) : new r12({ keyType: V4.create(), valueType: e7, typeName: m5.ZodRecord, ...y2(t4) });
  }
};
var oe = class extends _4 {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e7) {
    let { status: t4, ctx: s9 } = this._processInputParams(e7);
    if (s9.parsedType !== u4.map) return d4(s9, { code: c3.invalid_type, expected: u4.map, received: s9.parsedType }), p3;
    let a8 = this._def.keyType, n8 = this._def.valueType, i10 = [...s9.data.entries()].map(([o15, f14], l20) => ({ key: a8._parse(new O3(s9, o15, s9.path, [l20, "key"])), value: n8._parse(new O3(s9, f14, s9.path, [l20, "value"])) }));
    if (s9.common.async) {
      let o15 = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (let f14 of i10) {
          let l20 = await f14.key, v16 = await f14.value;
          if (l20.status === "aborted" || v16.status === "aborted") return p3;
          (l20.status === "dirty" || v16.status === "dirty") && t4.dirty(), o15.set(l20.value, v16.value);
        }
        return { status: t4.value, value: o15 };
      });
    } else {
      let o15 = /* @__PURE__ */ new Map();
      for (let f14 of i10) {
        let l20 = f14.key, v16 = f14.value;
        if (l20.status === "aborted" || v16.status === "aborted") return p3;
        (l20.status === "dirty" || v16.status === "dirty") && t4.dirty(), o15.set(l20.value, v16.value);
      }
      return { status: t4.value, value: o15 };
    }
  }
};
oe.create = (r36, e7, t4) => new oe({ valueType: e7, keyType: r36, typeName: m5.ZodMap, ...y2(t4) });
var ce = class r13 extends _4 {
  _parse(e7) {
    let { status: t4, ctx: s9 } = this._processInputParams(e7);
    if (s9.parsedType !== u4.set) return d4(s9, { code: c3.invalid_type, expected: u4.set, received: s9.parsedType }), p3;
    let a8 = this._def;
    a8.minSize !== null && s9.data.size < a8.minSize.value && (d4(s9, { code: c3.too_small, minimum: a8.minSize.value, type: "set", inclusive: true, exact: false, message: a8.minSize.message }), t4.dirty()), a8.maxSize !== null && s9.data.size > a8.maxSize.value && (d4(s9, { code: c3.too_big, maximum: a8.maxSize.value, type: "set", inclusive: true, exact: false, message: a8.maxSize.message }), t4.dirty());
    let n8 = this._def.valueType;
    function i10(f14) {
      let l20 = /* @__PURE__ */ new Set();
      for (let v16 of f14) {
        if (v16.status === "aborted") return p3;
        v16.status === "dirty" && t4.dirty(), l20.add(v16.value);
      }
      return { status: t4.value, value: l20 };
    }
    let o15 = [...s9.data.values()].map((f14, l20) => n8._parse(new O3(s9, f14, s9.path, l20)));
    return s9.common.async ? Promise.all(o15).then((f14) => i10(f14)) : i10(o15);
  }
  min(e7, t4) {
    return new r13({ ...this._def, minSize: { value: e7, message: h5.toString(t4) } });
  }
  max(e7, t4) {
    return new r13({ ...this._def, maxSize: { value: e7, message: h5.toString(t4) } });
  }
  size(e7, t4) {
    return this.min(e7, t4).max(e7, t4);
  }
  nonempty(e7) {
    return this.min(1, e7);
  }
};
ce.create = (r36, e7) => new ce({ valueType: r36, minSize: null, maxSize: null, typeName: m5.ZodSet, ...y2(e7) });
var _e = class r14 extends _4 {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(e7) {
    let { ctx: t4 } = this._processInputParams(e7);
    if (t4.parsedType !== u4.function) return d4(t4, { code: c3.invalid_type, expected: u4.function, received: t4.parsedType }), p3;
    function s9(o15, f14) {
      return ue({ data: o15, path: t4.path, errorMaps: [t4.common.contextualErrorMap, t4.schemaErrorMap, re2(), I2].filter((l20) => !!l20), issueData: { code: c3.invalid_arguments, argumentsError: f14 } });
    }
    function a8(o15, f14) {
      return ue({ data: o15, path: t4.path, errorMaps: [t4.common.contextualErrorMap, t4.schemaErrorMap, re2(), I2].filter((l20) => !!l20), issueData: { code: c3.invalid_return_type, returnTypeError: f14 } });
    }
    let n8 = { errorMap: t4.common.contextualErrorMap }, i10 = t4.data;
    if (this._def.returns instanceof z3) {
      let o15 = this;
      return k5(async function(...f14) {
        let l20 = new b4([]), v16 = await o15._def.args.parseAsync(f14, n8).catch((ge7) => {
          throw l20.addIssue(s9(f14, ge7)), l20;
        }), T20 = await Reflect.apply(i10, this, v16);
        return await o15._def.returns._def.type.parseAsync(T20, n8).catch((ge7) => {
          throw l20.addIssue(a8(T20, ge7)), l20;
        });
      });
    } else {
      let o15 = this;
      return k5(function(...f14) {
        let l20 = o15._def.args.safeParse(f14, n8);
        if (!l20.success) throw new b4([s9(f14, l20.error)]);
        let v16 = Reflect.apply(i10, this, l20.data), T20 = o15._def.returns.safeParse(v16, n8);
        if (!T20.success) throw new b4([a8(v16, T20.error)]);
        return T20.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...e7) {
    return new r14({ ...this._def, args: N3.create(e7).rest(Z3.create()) });
  }
  returns(e7) {
    return new r14({ ...this._def, returns: e7 });
  }
  implement(e7) {
    return this.parse(e7);
  }
  strictImplement(e7) {
    return this.parse(e7);
  }
  static create(e7, t4, s9) {
    return new r14({ args: e7 || N3.create([]).rest(Z3.create()), returns: t4 || Z3.create(), typeName: m5.ZodFunction, ...y2(s9) });
  }
};
var H3 = class extends _4 {
  get schema() {
    return this._def.getter();
  }
  _parse(e7) {
    let { ctx: t4 } = this._processInputParams(e7);
    return this._def.getter()._parse({ data: t4.data, path: t4.path, parent: t4 });
  }
};
H3.create = (r36, e7) => new H3({ getter: r36, typeName: m5.ZodLazy, ...y2(e7) });
var G4 = class extends _4 {
  _parse(e7) {
    if (e7.data !== this._def.value) {
      let t4 = this._getOrReturnCtx(e7);
      return d4(t4, { received: t4.data, code: c3.invalid_literal, expected: this._def.value }), p3;
    }
    return { status: "valid", value: e7.data };
  }
  get value() {
    return this._def.value;
  }
};
G4.create = (r36, e7) => new G4({ value: r36, typeName: m5.ZodLiteral, ...y2(e7) });
function Ne(r36, e7) {
  return new Q3({ values: r36, typeName: m5.ZodEnum, ...y2(e7) });
}
var Q3 = class r15 extends _4 {
  _parse(e7) {
    if (typeof e7.data != "string") {
      let t4 = this._getOrReturnCtx(e7), s9 = this._def.values;
      return d4(t4, { expected: g4.joinValues(s9), received: t4.parsedType, code: c3.invalid_type }), p3;
    }
    if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(e7.data)) {
      let t4 = this._getOrReturnCtx(e7), s9 = this._def.values;
      return d4(t4, { received: t4.data, code: c3.invalid_enum_value, options: s9 }), p3;
    }
    return k5(e7.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    let e7 = {};
    for (let t4 of this._def.values) e7[t4] = t4;
    return e7;
  }
  get Values() {
    let e7 = {};
    for (let t4 of this._def.values) e7[t4] = t4;
    return e7;
  }
  get Enum() {
    let e7 = {};
    for (let t4 of this._def.values) e7[t4] = t4;
    return e7;
  }
  extract(e7, t4 = this._def) {
    return r15.create(e7, { ...this._def, ...t4 });
  }
  exclude(e7, t4 = this._def) {
    return r15.create(this.options.filter((s9) => !e7.includes(s9)), { ...this._def, ...t4 });
  }
};
Q3.create = Ne;
var X2 = class extends _4 {
  _parse(e7) {
    let t4 = g4.getValidEnumValues(this._def.values), s9 = this._getOrReturnCtx(e7);
    if (s9.parsedType !== u4.string && s9.parsedType !== u4.number) {
      let a8 = g4.objectValues(t4);
      return d4(s9, { expected: g4.joinValues(a8), received: s9.parsedType, code: c3.invalid_type }), p3;
    }
    if (this._cache || (this._cache = new Set(g4.getValidEnumValues(this._def.values))), !this._cache.has(e7.data)) {
      let a8 = g4.objectValues(t4);
      return d4(s9, { received: s9.data, code: c3.invalid_enum_value, options: a8 }), p3;
    }
    return k5(e7.data);
  }
  get enum() {
    return this._def.values;
  }
};
X2.create = (r36, e7) => new X2({ values: r36, typeName: m5.ZodNativeEnum, ...y2(e7) });
var z3 = class extends _4 {
  unwrap() {
    return this._def.type;
  }
  _parse(e7) {
    let { ctx: t4 } = this._processInputParams(e7);
    if (t4.parsedType !== u4.promise && t4.common.async === false) return d4(t4, { code: c3.invalid_type, expected: u4.promise, received: t4.parsedType }), p3;
    let s9 = t4.parsedType === u4.promise ? t4.data : Promise.resolve(t4.data);
    return k5(s9.then((a8) => this._def.type.parseAsync(a8, { path: t4.path, errorMap: t4.common.contextualErrorMap })));
  }
};
z3.create = (r36, e7) => new z3({ type: r36, typeName: m5.ZodPromise, ...y2(e7) });
var S6 = class extends _4 {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === m5.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e7) {
    let { status: t4, ctx: s9 } = this._processInputParams(e7), a8 = this._def.effect || null, n8 = { addIssue: (i10) => {
      d4(s9, i10), i10.fatal ? t4.abort() : t4.dirty();
    }, get path() {
      return s9.path;
    } };
    if (n8.addIssue = n8.addIssue.bind(n8), a8.type === "preprocess") {
      let i10 = a8.transform(s9.data, n8);
      if (s9.common.async) return Promise.resolve(i10).then(async (o15) => {
        if (t4.value === "aborted") return p3;
        let f14 = await this._def.schema._parseAsync({ data: o15, path: s9.path, parent: s9 });
        return f14.status === "aborted" ? p3 : f14.status === "dirty" ? D4(f14.value) : t4.value === "dirty" ? D4(f14.value) : f14;
      });
      {
        if (t4.value === "aborted") return p3;
        let o15 = this._def.schema._parseSync({ data: i10, path: s9.path, parent: s9 });
        return o15.status === "aborted" ? p3 : o15.status === "dirty" ? D4(o15.value) : t4.value === "dirty" ? D4(o15.value) : o15;
      }
    }
    if (a8.type === "refinement") {
      let i10 = (o15) => {
        let f14 = a8.refinement(o15, n8);
        if (s9.common.async) return Promise.resolve(f14);
        if (f14 instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return o15;
      };
      if (s9.common.async === false) {
        let o15 = this._def.schema._parseSync({ data: s9.data, path: s9.path, parent: s9 });
        return o15.status === "aborted" ? p3 : (o15.status === "dirty" && t4.dirty(), i10(o15.value), { status: t4.value, value: o15.value });
      } else return this._def.schema._parseAsync({ data: s9.data, path: s9.path, parent: s9 }).then((o15) => o15.status === "aborted" ? p3 : (o15.status === "dirty" && t4.dirty(), i10(o15.value).then(() => ({ status: t4.value, value: o15.value }))));
    }
    if (a8.type === "transform") if (s9.common.async === false) {
      let i10 = this._def.schema._parseSync({ data: s9.data, path: s9.path, parent: s9 });
      if (!M5(i10)) return p3;
      let o15 = a8.transform(i10.value, n8);
      if (o15 instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
      return { status: t4.value, value: o15 };
    } else return this._def.schema._parseAsync({ data: s9.data, path: s9.path, parent: s9 }).then((i10) => M5(i10) ? Promise.resolve(a8.transform(i10.value, n8)).then((o15) => ({ status: t4.value, value: o15 })) : p3);
    g4.assertNever(a8);
  }
};
S6.create = (r36, e7, t4) => new S6({ schema: r36, typeName: m5.ZodEffects, effect: e7, ...y2(t4) });
S6.createWithPreprocess = (r36, e7, t4) => new S6({ schema: e7, effect: { type: "preprocess", transform: r36 }, typeName: m5.ZodEffects, ...y2(t4) });
var C4 = class extends _4 {
  _parse(e7) {
    return this._getType(e7) === u4.undefined ? k5(void 0) : this._def.innerType._parse(e7);
  }
  unwrap() {
    return this._def.innerType;
  }
};
C4.create = (r36, e7) => new C4({ innerType: r36, typeName: m5.ZodOptional, ...y2(e7) });
var j6 = class extends _4 {
  _parse(e7) {
    return this._getType(e7) === u4.null ? k5(null) : this._def.innerType._parse(e7);
  }
  unwrap() {
    return this._def.innerType;
  }
};
j6.create = (r36, e7) => new j6({ innerType: r36, typeName: m5.ZodNullable, ...y2(e7) });
var K3 = class extends _4 {
  _parse(e7) {
    let { ctx: t4 } = this._processInputParams(e7), s9 = t4.data;
    return t4.parsedType === u4.undefined && (s9 = this._def.defaultValue()), this._def.innerType._parse({ data: s9, path: t4.path, parent: t4 });
  }
  removeDefault() {
    return this._def.innerType;
  }
};
K3.create = (r36, e7) => new K3({ innerType: r36, typeName: m5.ZodDefault, defaultValue: typeof e7.default == "function" ? e7.default : () => e7.default, ...y2(e7) });
var ee2 = class extends _4 {
  _parse(e7) {
    let { ctx: t4 } = this._processInputParams(e7), s9 = { ...t4, common: { ...t4.common, issues: [] } }, a8 = this._def.innerType._parse({ data: s9.data, path: s9.path, parent: { ...s9 } });
    return se2(a8) ? a8.then((n8) => ({ status: "valid", value: n8.status === "valid" ? n8.value : this._def.catchValue({ get error() {
      return new b4(s9.common.issues);
    }, input: s9.data }) })) : { status: "valid", value: a8.status === "valid" ? a8.value : this._def.catchValue({ get error() {
      return new b4(s9.common.issues);
    }, input: s9.data }) };
  }
  removeCatch() {
    return this._def.innerType;
  }
};
ee2.create = (r36, e7) => new ee2({ innerType: r36, typeName: m5.ZodCatch, catchValue: typeof e7.catch == "function" ? e7.catch : () => e7.catch, ...y2(e7) });
var de = class extends _4 {
  _parse(e7) {
    if (this._getType(e7) !== u4.nan) {
      let s9 = this._getOrReturnCtx(e7);
      return d4(s9, { code: c3.invalid_type, expected: u4.nan, received: s9.parsedType }), p3;
    }
    return { status: "valid", value: e7.data };
  }
};
de.create = (r36) => new de({ typeName: m5.ZodNaN, ...y2(r36) });
var ct = Symbol("zod_brand");
var le = class extends _4 {
  _parse(e7) {
    let { ctx: t4 } = this._processInputParams(e7), s9 = t4.data;
    return this._def.type._parse({ data: s9, path: t4.path, parent: t4 });
  }
  unwrap() {
    return this._def.type;
  }
};
var fe = class r16 extends _4 {
  _parse(e7) {
    let { status: t4, ctx: s9 } = this._processInputParams(e7);
    if (s9.common.async) return (async () => {
      let n8 = await this._def.in._parseAsync({ data: s9.data, path: s9.path, parent: s9 });
      return n8.status === "aborted" ? p3 : n8.status === "dirty" ? (t4.dirty(), D4(n8.value)) : this._def.out._parseAsync({ data: n8.value, path: s9.path, parent: s9 });
    })();
    {
      let a8 = this._def.in._parseSync({ data: s9.data, path: s9.path, parent: s9 });
      return a8.status === "aborted" ? p3 : a8.status === "dirty" ? (t4.dirty(), { status: "dirty", value: a8.value }) : this._def.out._parseSync({ data: a8.value, path: s9.path, parent: s9 });
    }
  }
  static create(e7, t4) {
    return new r16({ in: e7, out: t4, typeName: m5.ZodPipeline });
  }
};
var te2 = class extends _4 {
  _parse(e7) {
    let t4 = this._def.innerType._parse(e7), s9 = (a8) => (M5(a8) && (a8.value = Object.freeze(a8.value)), a8);
    return se2(t4) ? t4.then((a8) => s9(a8)) : s9(t4);
  }
  unwrap() {
    return this._def.innerType;
  }
};
te2.create = (r36, e7) => new te2({ innerType: r36, typeName: m5.ZodReadonly, ...y2(e7) });
function Oe(r36, e7) {
  let t4 = typeof r36 == "function" ? r36(e7) : typeof r36 == "string" ? { message: r36 } : r36;
  return typeof t4 == "string" ? { message: t4 } : t4;
}
function je(r36, e7 = {}, t4) {
  return r36 ? P5.create().superRefine((s9, a8) => {
    let n8 = r36(s9);
    if (n8 instanceof Promise) return n8.then((i10) => {
      if (!i10) {
        let o15 = Oe(e7, s9), f14 = o15.fatal ?? t4 ?? true;
        a8.addIssue({ code: "custom", ...o15, fatal: f14 });
      }
    });
    if (!n8) {
      let i10 = Oe(e7, s9), o15 = i10.fatal ?? t4 ?? true;
      a8.addIssue({ code: "custom", ...i10, fatal: o15 });
    }
  }) : P5.create();
}
var dt = { object: w5.lazycreate };
var m5;
(function(r36) {
  r36.ZodString = "ZodString", r36.ZodNumber = "ZodNumber", r36.ZodNaN = "ZodNaN", r36.ZodBigInt = "ZodBigInt", r36.ZodBoolean = "ZodBoolean", r36.ZodDate = "ZodDate", r36.ZodSymbol = "ZodSymbol", r36.ZodUndefined = "ZodUndefined", r36.ZodNull = "ZodNull", r36.ZodAny = "ZodAny", r36.ZodUnknown = "ZodUnknown", r36.ZodNever = "ZodNever", r36.ZodVoid = "ZodVoid", r36.ZodArray = "ZodArray", r36.ZodObject = "ZodObject", r36.ZodUnion = "ZodUnion", r36.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", r36.ZodIntersection = "ZodIntersection", r36.ZodTuple = "ZodTuple", r36.ZodRecord = "ZodRecord", r36.ZodMap = "ZodMap", r36.ZodSet = "ZodSet", r36.ZodFunction = "ZodFunction", r36.ZodLazy = "ZodLazy", r36.ZodLiteral = "ZodLiteral", r36.ZodEnum = "ZodEnum", r36.ZodEffects = "ZodEffects", r36.ZodNativeEnum = "ZodNativeEnum", r36.ZodOptional = "ZodOptional", r36.ZodNullable = "ZodNullable", r36.ZodDefault = "ZodDefault", r36.ZodCatch = "ZodCatch", r36.ZodPromise = "ZodPromise", r36.ZodBranded = "ZodBranded", r36.ZodPipeline = "ZodPipeline", r36.ZodReadonly = "ZodReadonly";
})(m5 || (m5 = {}));
var ut = (r36, e7 = { message: `Input not instance of ${r36.name}` }) => je((t4) => t4 instanceof r36, e7);
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
var Wt = { string: (r36) => V4.create({ ...r36, coerce: true }), number: (r36) => L4.create({ ...r36, coerce: true }), boolean: (r36) => F4.create({ ...r36, coerce: true }), bigint: (r36) => U3.create({ ...r36, coerce: true }), date: (r36) => B4.create({ ...r36, coerce: true }) };
var qt = p3;

// https://esm.sh/ollama-ai-provider@1.2.0/denonext/ollama-ai-provider.mjs
function v2(e7) {
  let t4 = [];
  for (let { content: s9, role: i10 } of e7) switch (i10) {
    case "system": {
      t4.push({ content: s9, role: "system" });
      break;
    }
    case "user": {
      t4.push({ ...s9.reduce((a8, n8) => {
        if (n8.type === "text") a8.content += n8.text;
        else {
          if (n8.type === "image" && n8.image instanceof URL) throw new Nr({ functionality: "Image URLs in user messages" });
          n8.type === "image" && n8.image instanceof Uint8Array && (a8.images = a8.images || [], a8.images.push(Se(n8.image)));
        }
        return a8;
      }, { content: "" }), role: "user" });
      break;
    }
    case "assistant": {
      let a8 = [], n8 = [];
      for (let l20 of s9) switch (l20.type) {
        case "text": {
          a8.push(l20.text);
          break;
        }
        case "tool-call": {
          n8.push({ function: { arguments: l20.args, name: l20.toolName }, id: l20.toolCallId, type: "function" });
          break;
        }
        default: {
          let r36 = l20;
          throw new Error(`Unsupported part: ${r36}`);
        }
      }
      t4.push({ content: a8.join(","), role: "assistant", tool_calls: n8.length > 0 ? n8 : void 0 });
      break;
    }
    case "tool": {
      t4.push(...s9.map((a8) => ({ content: typeof a8.result == "object" ? JSON.stringify(a8.result) : `${a8.result}`, role: "tool", tool_call_id: a8.toolCallId })));
      break;
    }
    default: {
      let a8 = i10;
      throw new Error(`Unsupported role: ${a8}`);
    }
  }
  return t4;
}
var H4 = class {
  constructor({ tools: e7, type: t4 }) {
    this._firstMessage = true, this._tools = e7, this._toolPartial = "", this._toolCalls = [], this._type = t4, this._detectedToolCall = false;
  }
  get toolCalls() {
    return this._toolCalls;
  }
  get detectedToolCall() {
    return this._detectedToolCall;
  }
  parse({ controller: e7, delta: t4 }) {
    var s9;
    if (this.detectToolCall(t4), !this._detectedToolCall) return false;
    this._toolPartial += t4;
    let i10 = G3(this._toolPartial);
    Array.isArray(i10) || (i10 = [i10]);
    for (let [a8, n8] of i10.entries()) {
      let l20 = (s9 = JSON.stringify(n8?.parameters)) != null ? s9 : "";
      if (l20 === "") continue;
      this._toolCalls[a8] || (this._toolCalls[a8] = { function: { arguments: "", name: n8.name }, id: Z(), type: "function" });
      let r36 = this._toolCalls[a8];
      r36.function.arguments = l20, e7.enqueue({ argsTextDelta: t4, toolCallId: r36.id, toolCallType: "function", toolName: r36.function.name, type: "tool-call-delta" });
    }
    return true;
  }
  finish({ controller: e7 }) {
    for (let t4 of this.toolCalls) e7.enqueue({ args: t4.function.arguments, toolCallId: t4.id, toolCallType: "function", toolName: t4.function.name, type: "tool-call" });
    return this.finishReason();
  }
  detectToolCall(e7) {
    !this._tools || this._tools.length === 0 || this._firstMessage && (this._type === "object-tool" ? this._detectedToolCall = true : this._type === "regular" && (e7.trim().startsWith("{") || e7.trim().startsWith("[")) && (this._detectedToolCall = true), this._firstMessage = false);
  }
  finishReason() {
    return this.detectedToolCall ? this._type === "object-tool" ? "stop" : "tool-calls" : "stop";
  }
};
function I3({ finishReason: e7, hasToolCalls: t4 }) {
  switch (e7) {
    case "stop":
      return t4 ? "tool-calls" : "stop";
    default:
      return "other";
  }
}
var k6 = be2.object({ error: be2.object({ code: be2.string().nullable(), message: be2.string(), param: be2.any().nullable(), type: be2.string() }) });
var w6 = ge({ errorSchema: k6, errorToMessage: (e7) => e7.error.message });
function q4({ mode: e7 }) {
  var t4;
  let s9 = (t4 = e7.tools) != null && t4.length ? e7.tools : void 0, i10 = [], a8 = e7.toolChoice;
  if (s9 === void 0) return { tools: void 0, toolWarnings: i10 };
  let n8 = [];
  for (let r36 of s9) r36.type === "provider-defined" ? i10.push({ tool: r36, type: "unsupported-tool" }) : n8.push({ function: { description: r36.description, name: r36.name, parameters: r36.parameters }, type: "function" });
  if (a8 === void 0) return { tools: n8, toolWarnings: i10 };
  let l20 = a8.type;
  switch (l20) {
    case "auto":
      return { tools: n8, toolWarnings: i10 };
    case "none":
      return { tools: void 0, toolWarnings: i10 };
    default: {
      let r36 = l20;
      throw new Nr({ functionality: `Unsupported tool choice type: ${r36}` });
    }
  }
}
function J5(e7) {
  return Object.fromEntries(Object.entries(e7).filter(([, t4]) => t4 !== void 0));
}
var z4 = class extends TransformStream {
  constructor() {
    super({ flush: (e7) => {
      this.buffer.length !== 0 && e7.enqueue(this.buffer);
    }, transform: (e7, t4) => {
      for (e7 = this.buffer + e7; ; ) {
        let s9 = e7.indexOf(`
`);
        if (s9 === -1) break;
        t4.enqueue(e7.slice(0, s9)), e7 = e7.slice(s9 + 1);
      }
      this.buffer = e7;
    } }), this.buffer = "";
  }
};
var $4 = (e7) => async ({ response: t4 }) => {
  let s9 = d2(t4);
  if (t4.body === null) throw new Ir({});
  return { responseHeaders: s9, value: t4.body.pipeThrough(new TextDecoderStream()).pipeThrough(new z4()).pipeThrough(new TransformStream({ transform(i10, a8) {
    a8.enqueue(S3({ schema: e7, text: i10 }));
  } })) };
};
var F5 = class {
  constructor(e7, t4, s9) {
    this.modelId = e7, this.settings = t4, this.config = s9, this.specificationVersion = "v1", this.defaultObjectGenerationMode = "json", this.supportsImageUrls = false;
  }
  get supportsStructuredOutputs() {
    var e7;
    return (e7 = this.settings.structuredOutputs) != null ? e7 : false;
  }
  get provider() {
    return this.config.provider;
  }
  getArguments({ frequencyPenalty: e7, maxTokens: t4, mode: s9, presencePenalty: i10, prompt: a8, responseFormat: n8, seed: l20, stopSequences: r36, temperature: d24, topK: f14, topP: g21 }) {
    let m20 = s9.type, h24 = [];
    n8 !== void 0 && n8.type === "json" && n8.schema !== void 0 && !this.supportsStructuredOutputs && h24.push({ details: "JSON response format schema is only supported with structuredOutputs", setting: "responseFormat", type: "unsupported-setting" });
    let u17 = { format: n8?.type, model: this.modelId, options: J5({ f16_kv: this.settings.f16Kv, frequency_penalty: e7, low_vram: this.settings.lowVram, main_gpu: this.settings.mainGpu, min_p: this.settings.minP, mirostat: this.settings.mirostat, mirostat_eta: this.settings.mirostatEta, mirostat_tau: this.settings.mirostatTau, num_batch: this.settings.numBatch, num_ctx: this.settings.numCtx, num_gpu: this.settings.numGpu, num_keep: this.settings.numKeep, num_predict: t4, num_thread: this.settings.numThread, numa: this.settings.numa, penalize_newline: this.settings.penalizeNewline, presence_penalty: i10, repeat_last_n: this.settings.repeatLastN, repeat_penalty: this.settings.repeatPenalty, seed: l20, stop: r36, temperature: d24, tfs_z: this.settings.tfsZ, top_k: f14, top_p: g21, typical_p: this.settings.typicalP, use_mlock: this.settings.useMlock, use_mmap: this.settings.useMmap, vocab_only: this.settings.vocabOnly }) };
    switch (m20) {
      case "regular": {
        let { tools: p15, toolWarnings: c14 } = q4({ mode: s9 });
        return { args: { ...u17, messages: v2(a8), tools: p15 }, type: m20, warnings: [...h24, ...c14] };
      }
      case "object-json":
        return { args: { ...u17, format: this.supportsStructuredOutputs && s9.schema !== void 0 ? s9.schema : "json", messages: v2(a8) }, type: m20, warnings: h24 };
      case "object-tool":
        return { args: { ...u17, messages: v2(a8), tool_choice: { function: { name: s9.tool.name }, type: "function" }, tools: [{ function: { description: s9.tool.description, name: s9.tool.name, parameters: s9.tool.parameters }, type: "function" }] }, type: m20, warnings: h24 };
      default: {
        let p15 = m20;
        throw new Error(`Unsupported type: ${p15}`);
      }
    }
  }
  async doGenerate(e7) {
    var t4, s9;
    let { args: i10, warnings: a8 } = this.getArguments(e7), n8 = { ...i10, stream: false }, { responseHeaders: l20, value: r36 } = await he({ abortSignal: e7.abortSignal, body: n8, failedResponseHandler: w6, fetch: this.config.fetch, headers: _2(this.config.headers(), e7.headers), successfulResponseHandler: be(D5), url: `${this.config.baseURL}/chat` }), { messages: d24, ...f14 } = n8, g21 = (t4 = r36.message.tool_calls) == null ? void 0 : t4.map((m20) => {
      var h24;
      return { args: JSON.stringify(m20.function.arguments), toolCallId: (h24 = m20.id) != null ? h24 : Z(), toolCallType: "function", toolName: m20.function.name };
    });
    return { finishReason: I3({ finishReason: r36.done_reason, hasToolCalls: g21 !== void 0 && g21.length > 0 }), rawCall: { rawPrompt: d24, rawSettings: f14 }, rawResponse: { headers: l20 }, request: { body: JSON.stringify(n8) }, text: (s9 = r36.message.content) != null ? s9 : void 0, toolCalls: g21, usage: { completionTokens: r36.eval_count || 0, promptTokens: r36.prompt_eval_count || 0 }, warnings: a8 };
  }
  async doStream(e7) {
    if (this.settings.simulateStreaming) {
      let u17 = await this.doGenerate(e7), p15 = new ReadableStream({ start(c14) {
        if (c14.enqueue({ type: "response-metadata", ...u17.response }), u17.text && c14.enqueue({ textDelta: u17.text, type: "text-delta" }), u17.toolCalls) for (let b23 of u17.toolCalls) c14.enqueue({ argsTextDelta: b23.args, toolCallId: b23.toolCallId, toolCallType: "function", toolName: b23.toolName, type: "tool-call-delta" }), c14.enqueue({ type: "tool-call", ...b23 });
        c14.enqueue({ finishReason: u17.finishReason, logprobs: u17.logprobs, providerMetadata: u17.providerMetadata, type: "finish", usage: u17.usage }), c14.close();
      } });
      return { rawCall: u17.rawCall, rawResponse: u17.rawResponse, stream: p15, warnings: u17.warnings };
    }
    let { args: t4, type: s9, warnings: i10 } = this.getArguments(e7), { responseHeaders: a8, value: n8 } = await he({ abortSignal: e7.abortSignal, body: t4, failedResponseHandler: w6, fetch: this.config.fetch, headers: _2(this.config.headers(), e7.headers), successfulResponseHandler: $4(G5), url: `${this.config.baseURL}/chat` }), { messages: l20, ...r36 } = t4, d24 = e7.mode.type === "regular" ? e7.mode.tools : e7.mode.type === "object-tool" ? [e7.mode.tool] : void 0, f14 = new H4({ tools: d24, type: s9 }), g21 = "other", m20 = { completionTokens: Number.NaN, promptTokens: Number.NaN }, { experimentalStreamTools: h24 = true } = this.settings;
    return { rawCall: { rawPrompt: l20, rawSettings: r36 }, rawResponse: { headers: a8 }, request: { body: JSON.stringify(t4) }, stream: n8.pipeThrough(new TransformStream({ async flush(u17) {
      u17.enqueue({ finishReason: g21, type: "finish", usage: m20 });
    }, async transform(u17, p15) {
      if (!u17.success) {
        p15.enqueue({ error: u17.error, type: "error" });
        return;
      }
      let c14 = u17.value;
      if (c14.done) {
        g21 = f14.finish({ controller: p15 }), m20 = { completionTokens: c14.eval_count, promptTokens: c14.prompt_eval_count || 0 };
        return;
      }
      h24 && f14.parse({ controller: p15, delta: c14.message.content }) || c14.message.content !== null && p15.enqueue({ textDelta: c14.message.content, type: "text-delta" });
    } })), warnings: i10 };
  }
};
var D5 = be2.object({ created_at: be2.string(), done: be2.literal(true), done_reason: be2.string().optional().nullable(), eval_count: be2.number(), eval_duration: be2.number(), load_duration: be2.number().optional(), message: be2.object({ content: be2.string(), role: be2.string(), tool_calls: be2.array(be2.object({ function: be2.object({ arguments: be2.record(be2.any()), name: be2.string() }), id: be2.string().optional() })).optional().nullable() }), model: be2.string(), prompt_eval_count: be2.number().optional(), prompt_eval_duration: be2.number().optional(), total_duration: be2.number() });
var G5 = be2.discriminatedUnion("done", [be2.object({ created_at: be2.string(), done: be2.literal(false), message: be2.object({ content: be2.string(), role: be2.string() }), model: be2.string() }), be2.object({ created_at: be2.string(), done: be2.literal(true), eval_count: be2.number(), eval_duration: be2.number(), load_duration: be2.number().optional(), model: be2.string(), prompt_eval_count: be2.number().optional(), prompt_eval_duration: be2.number().optional(), total_duration: be2.number() })]);
var K4 = class {
  constructor(e7, t4, s9) {
    this.specificationVersion = "v1", this.modelId = e7, this.settings = t4, this.config = s9;
  }
  get provider() {
    return this.config.provider;
  }
  get maxEmbeddingsPerCall() {
    var e7;
    return (e7 = this.settings.maxEmbeddingsPerCall) != null ? e7 : 2048;
  }
  get supportsParallelCalls() {
    return false;
  }
  async doEmbed({ abortSignal: e7, values: t4 }) {
    if (t4.length > this.maxEmbeddingsPerCall) throw new Mr({ maxEmbeddingsPerCall: this.maxEmbeddingsPerCall, modelId: this.modelId, provider: this.provider, values: t4 });
    let { responseHeaders: s9, value: i10 } = await he({ abortSignal: e7, body: { input: t4, model: this.modelId }, failedResponseHandler: w6, fetch: this.config.fetch, headers: this.config.headers(), successfulResponseHandler: be(Z4), url: `${this.config.baseURL}/embed` });
    return { embeddings: i10.embeddings, rawResponse: { headers: s9 }, usage: i10.prompt_eval_count ? { tokens: i10.prompt_eval_count } : void 0 };
  }
};
var Z4 = be2.object({ embeddings: be2.array(be2.array(be2.number())), prompt_eval_count: be2.number().nullable() });
function Q4(e7 = {}) {
  var t4;
  let s9 = (t4 = Pe(e7.baseURL)) != null ? t4 : "http://127.0.0.1:11434/api", i10 = () => ({ ...e7.headers }), a8 = (r36, d24 = {}) => new F5(r36, d24, { baseURL: s9, fetch: e7.fetch, headers: i10, provider: "ollama.chat" }), n8 = (r36, d24 = {}) => new K4(r36, d24, { baseURL: s9, fetch: e7.fetch, headers: i10, provider: "ollama.embedding" }), l20 = function(r36, d24) {
    if (new.target) throw new Error("The Ollama model function cannot be called with the new keyword.");
    return a8(r36, d24);
  };
  return l20.chat = a8, l20.embedding = n8, l20.languageModel = a8, l20.textEmbedding = n8, l20.textEmbeddingModel = n8, l20;
}
var pe2 = Q4();

// https://esm.sh/@ai-sdk/provider-utils@2.2.8/denonext/provider-utils.development.mjs
import __Process$2 from "node:process";

// https://esm.sh/@ai-sdk/provider@1.1.3/denonext/provider.development.mjs
var i3 = "vercel.ai.error";
var er2 = Symbol.for(i3);
var l4;
var ar2 = class c4 extends Error {
  constructor({ name: e7, message: s9, cause: t4 }) {
    super(s9), this[l4] = true, this.name = e7, this.cause = t4;
  }
  static isInstance(e7) {
    return c4.hasMarker(e7, i3);
  }
  static hasMarker(e7, s9) {
    let t4 = Symbol.for(s9);
    return e7 != null && typeof e7 == "object" && t4 in e7 && typeof e7[t4] == "boolean" && e7[t4] === true;
  }
};
l4 = er2;
var a3 = ar2;
var m6 = "AI_APICallError";
var v3 = `vercel.ai.error.${m6}`;
var sr2 = Symbol.for(v3);
var u5;
var br2 = class extends a3 {
  constructor({ message: r36, url: e7, requestBodyValues: s9, statusCode: t4, responseHeaders: W19, responseBody: X17, cause: Y13, isRetryable: Z17 = t4 != null && (t4 === 408 || t4 === 409 || t4 === 429 || t4 >= 500), data: rr3 }) {
    super({ name: m6, message: r36, cause: Y13 }), this[u5] = true, this.url = e7, this.requestBodyValues = s9, this.statusCode = t4, this.responseHeaders = W19, this.responseBody = X17, this.isRetryable = Z17, this.data = rr3;
  }
  static isInstance(r36) {
    return a3.hasMarker(r36, v3);
  }
};
u5 = sr2;
var y3 = "AI_EmptyResponseBodyError";
var d5 = `vercel.ai.error.${y3}`;
var tr2 = Symbol.for(d5);
var h6;
h6 = tr2;
function p4(r36) {
  return r36 == null ? "unknown error" : typeof r36 == "string" ? r36 : r36 instanceof Error ? r36.message : JSON.stringify(r36);
}
var b5 = "AI_InvalidArgumentError";
var I4 = `vercel.ai.error.${b5}`;
var nr2 = Symbol.for(I4);
var f3;
var fr2 = class extends a3 {
  constructor({ message: r36, cause: e7, argument: s9 }) {
    super({ name: b5, message: r36, cause: e7 }), this[f3] = true, this.argument = s9;
  }
  static isInstance(r36) {
    return a3.hasMarker(r36, I4);
  }
};
f3 = nr2;
var E6 = "AI_InvalidPromptError";
var S7 = `vercel.ai.error.${E6}`;
var or2 = Symbol.for(S7);
var g5;
var Er = class extends a3 {
  constructor({ prompt: r36, message: e7, cause: s9 }) {
    super({ name: E6, message: `Invalid prompt: ${e7}`, cause: s9 }), this[g5] = true, this.prompt = r36;
  }
  static isInstance(r36) {
    return a3.hasMarker(r36, S7);
  }
};
g5 = or2;
var k7 = "AI_InvalidResponseDataError";
var _5 = `vercel.ai.error.${k7}`;
var ir2 = Symbol.for(_5);
var A6;
A6 = ir2;
var $5 = "AI_JSONParseError";
var M6 = `vercel.ai.error.${$5}`;
var lr2 = Symbol.for(M6);
var x5;
var gr3 = class extends a3 {
  constructor({ text: r36, cause: e7 }) {
    super({ name: $5, message: `JSON parsing failed: Text: ${r36}.
Error message: ${p4(e7)}`, cause: e7 }), this[x5] = true, this.text = r36;
  }
  static isInstance(r36) {
    return a3.hasMarker(r36, M6);
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
  constructor({ value: e7, cause: s9 }) {
    super({ name: G6, message: `Type validation failed: Value: ${JSON.stringify(e7)}.
Error message: ${p4(s9)}`, cause: s9 }), this[q5] = true, this.value = e7;
  }
  static isInstance(e7) {
    return a3.hasMarker(e7, U4);
  }
  static wrap({ value: e7, cause: s9 }) {
    return o4.isInstance(s9) && s9.value === e7 ? s9 : new o4({ value: e7, cause: s9 });
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
var h7 = (t4, e7 = 21) => (l20 = e7) => {
  let r36 = "", n8 = l20 | 0;
  for (; n8--; ) r36 += t4[Math.random() * t4.length | 0];
  return r36;
};

// https://esm.sh/secure-json-parse@2.7.0/denonext/secure-json-parse.development.mjs
import { Buffer as __Buffer$2 } from "node:buffer";
var F7 = Object.create;
var l5 = Object.defineProperty;
var b6 = Object.getOwnPropertyDescriptor;
var g6 = Object.getOwnPropertyNames;
var j8 = Object.getPrototypeOf;
var E7 = Object.prototype.hasOwnProperty;
var k8 = (r36, e7) => () => (e7 || r36((e7 = { exports: {} }).exports, e7), e7.exports);
var O5 = (r36, e7, t4, o15) => {
  if (e7 && typeof e7 == "object" || typeof e7 == "function") for (let n8 of g6(e7)) !E7.call(r36, n8) && n8 !== t4 && l5(r36, n8, { get: () => e7[n8], enumerable: !(o15 = b6(e7, n8)) || o15.enumerable });
  return r36;
};
var w8 = (r36, e7, t4) => (t4 = r36 != null ? F7(j8(r36)) : {}, O5(e7 || !r36 || !r36.__esModule ? l5(t4, "default", { value: r36, enumerable: true }) : t4, r36));
var m7 = k8((B23, f14) => {
  "use strict";
  var L23 = typeof __Buffer$2 < "u", p15 = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/, y18 = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
  function d24(r36, e7, t4) {
    t4 == null && e7 !== null && typeof e7 == "object" && (t4 = e7, e7 = void 0), L23 && __Buffer$2.isBuffer(r36) && (r36 = r36.toString()), r36 && r36.charCodeAt(0) === 65279 && (r36 = r36.slice(1));
    let o15 = JSON.parse(r36, e7);
    if (o15 === null || typeof o15 != "object") return o15;
    let n8 = t4 && t4.protoAction || "error", c14 = t4 && t4.constructorAction || "error";
    if (n8 === "ignore" && c14 === "ignore") return o15;
    if (n8 !== "ignore" && c14 !== "ignore") {
      if (p15.test(r36) === false && y18.test(r36) === false) return o15;
    } else if (n8 !== "ignore" && c14 === "ignore") {
      if (p15.test(r36) === false) return o15;
    } else if (y18.test(r36) === false) return o15;
    return _17(o15, { protoAction: n8, constructorAction: c14, safe: t4 && t4.safe });
  }
  function _17(r36, { protoAction: e7 = "error", constructorAction: t4 = "error", safe: o15 } = {}) {
    let n8 = [r36];
    for (; n8.length; ) {
      let c14 = n8;
      n8 = [];
      for (let s9 of c14) {
        if (e7 !== "ignore" && Object.prototype.hasOwnProperty.call(s9, "__proto__")) {
          if (o15 === true) return null;
          if (e7 === "error") throw new SyntaxError("Object contains forbidden prototype property");
          delete s9.__proto__;
        }
        if (t4 !== "ignore" && Object.prototype.hasOwnProperty.call(s9, "constructor") && Object.prototype.hasOwnProperty.call(s9.constructor, "prototype")) {
          if (o15 === true) return null;
          if (t4 === "error") throw new SyntaxError("Object contains forbidden prototype property");
          delete s9.constructor;
        }
        for (let h24 in s9) {
          let a8 = s9[h24];
          a8 && typeof a8 == "object" && n8.push(a8);
        }
      }
    }
    return r36;
  }
  function i10(r36, e7, t4) {
    let o15 = Error.stackTraceLimit;
    Error.stackTraceLimit = 0;
    try {
      return d24(r36, e7, t4);
    } finally {
      Error.stackTraceLimit = o15;
    }
  }
  function T20(r36, e7) {
    let t4 = Error.stackTraceLimit;
    Error.stackTraceLimit = 0;
    try {
      return d24(r36, e7, { safe: true });
    } catch {
      return null;
    } finally {
      Error.stackTraceLimit = t4;
    }
  }
  f14.exports = i10;
  f14.exports.default = i10;
  f14.exports.parse = i10;
  f14.exports.safeParse = T20;
  f14.exports.scan = _17;
});
var u6 = w8(m7());
var { parse: S8, safeParse: A7, scan: x6 } = u6;
var C6 = u6.default ?? u6;

// https://esm.sh/@ai-sdk/provider-utils@2.2.8/denonext/provider-utils.development.mjs
function M7(e7) {
  return new ReadableStream({ async pull(t4) {
    try {
      let { value: r36, done: s9 } = await e7.next();
      s9 ? t4.close() : t4.enqueue(r36);
    } catch (r36) {
      t4.error(r36);
    }
  }, cancel() {
  } });
}
async function Q6(e7) {
  return e7 == null ? Promise.resolve() : new Promise((t4) => setTimeout(t4, e7));
}
var J7 = ({ prefix: e7, size: t4 = 16, alphabet: r36 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", separator: s9 = "-" } = {}) => {
  let o15 = h7(r36, t4);
  if (e7 == null) return o15;
  if (r36.includes(s9)) throw new fr2({ argument: "separator", message: `The separator "${s9}" must not be part of the alphabet "${r36}".` });
  return (u17) => `${e7}${s9}${o15(u17)}`;
};
var Z5 = J7();
function K6(e7) {
  return e7 == null ? "unknown error" : typeof e7 == "string" ? e7 : e7 instanceof Error ? e7.message : JSON.stringify(e7);
}
function h8(e7) {
  return e7 instanceof Error && (e7.name === "AbortError" || e7.name === "TimeoutError");
}
var T6 = Symbol.for("vercel.ai.validator");
function k9(e7) {
  return { [T6]: true, validate: e7 };
}
function L6(e7) {
  return typeof e7 == "object" && e7 !== null && T6 in e7 && e7[T6] === true && "validate" in e7;
}
function j9(e7) {
  return L6(e7) ? e7 : U5(e7);
}
function U5(e7) {
  return k9((t4) => {
    let r36 = e7.safeParse(t4);
    return r36.success ? { success: true, value: r36.data } : { success: false, error: r36.error };
  });
}
function A8({ value: e7, schema: t4 }) {
  let r36 = j9(t4);
  try {
    if (r36.validate == null) return { success: true, value: e7 };
    let s9 = r36.validate(e7);
    return s9.success ? s9 : { success: false, error: xr2.wrap({ value: e7, cause: s9.error }) };
  } catch (s9) {
    return { success: false, error: xr2.wrap({ value: e7, cause: s9 }) };
  }
}
function S9({ text: e7, schema: t4 }) {
  try {
    let r36 = C6.parse(e7);
    if (t4 == null) return { success: true, value: r36, rawValue: r36 };
    let s9 = A8({ value: r36, schema: t4 });
    return s9.success ? { ...s9, rawValue: r36 } : s9;
  } catch (r36) {
    return { success: false, error: gr3.isInstance(r36) ? r36 : new gr3({ text: e7, cause: r36 }) };
  }
}
var { btoa: V6, atob: W3 } = globalThis;
function Ae2(e7) {
  let t4 = e7.replace(/-/g, "+").replace(/_/g, "/"), r36 = W3(t4);
  return Uint8Array.from(r36, (s9) => s9.codePointAt(0));
}
function Se3(e7) {
  let t4 = "";
  for (let r36 = 0; r36 < e7.length; r36++) t4 += String.fromCodePoint(e7[r36]);
  return V6(t4);
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
  util2.assertEqual = (_17) => {
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
    const validKeys = util2.objectKeys(obj).filter((k25) => typeof obj[obj[k25]] !== "number");
    const filtered = {};
    for (const k25 of validKeys) {
      filtered[k25] = obj[k25];
    }
    return util2.objectValues(filtered);
  };
  util2.objectValues = (obj) => {
    return util2.objectKeys(obj).map(function(e7) {
      return obj[e7];
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
  util2.jsonStringifyReplacer = (_17, value) => {
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
  const t4 = typeof data;
  switch (t4) {
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
          let i10 = 0;
          while (i10 < issue.path.length) {
            const el = issue.path[i10];
            const terminal = i10 === issue.path.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || { _errors: [] };
            } else {
              curr[el] = curr[el] || { _errors: [] };
              curr[el]._errors.push(mapper(issue));
            }
            curr = curr[el];
            i10++;
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
  const maps = errorMaps.filter((m20) => !!m20).slice().reverse();
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
    ].filter((x24) => !!x24)
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
    for (const s9 of results) {
      if (s9.status === "aborted")
        return INVALID;
      if (s9.status === "dirty")
        status.dirty();
      arrayValue.push(s9.value);
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
var isAborted = (x24) => x24.status === "aborted";
var isDirty = (x24) => x24.status === "dirty";
var isValid = (x24) => x24.status === "valid";
var isAsync = (x24) => typeof Promise !== "undefined" && x24 instanceof Promise;
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
      return Promise.all([...ctx.data].map((item, i10) => {
        return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i10));
      })).then((result2) => {
        return ParseStatus.mergeArray(status, result2);
      });
    }
    const result = [...ctx.data].map((item, i10) => {
      return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i10));
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
function mergeValues(a8, b23) {
  const aType = getParsedType(a8);
  const bType = getParsedType(b23);
  if (a8 === b23) {
    return { valid: true, data: a8 };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b23);
    const sharedKeys = util.objectKeys(a8).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a8, ...b23 };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a8[key], b23[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a8.length !== b23.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index = 0; index < a8.length; index++) {
      const itemA = a8[index];
      const itemB = b23[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a8 === +b23) {
    return { valid: true, data: a8 };
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
    }).filter((x24) => !!x24);
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
    const elements = [...ctx.data.values()].map((item, i10) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i10)));
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
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x24) => !!x24),
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
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x24) => !!x24),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error
        }
      });
    }
    const params = { errorMap: ctx.common.contextualErrorMap };
    const fn3 = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      const me8 = this;
      return OK(async function(...args) {
        const error = new ZodError([]);
        const parsedArgs = await me8._def.args.parseAsync(args, params).catch((e7) => {
          error.addIssue(makeArgsIssue(args, e7));
          throw error;
        });
        const result = await Reflect.apply(fn3, this, parsedArgs);
        const parsedReturns = await me8._def.returns._def.type.parseAsync(result, params).catch((e7) => {
          error.addIssue(makeReturnsIssue(result, e7));
          throw error;
        });
        return parsedReturns;
      });
    } else {
      const me8 = this;
      return OK(function(...args) {
        const parsedArgs = me8._def.args.safeParse(args, params);
        if (!parsedArgs.success) {
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        }
        const result = Reflect.apply(fn3, this, parsedArgs.data);
        const parsedReturns = me8._def.returns.safeParse(result, params);
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
  static create(a8, b23) {
    return new _ZodPipeline({
      in: a8,
      out: b23,
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
  const p15 = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
  const p22 = typeof p15 === "string" ? { message: p15 } : p15;
  return p22;
}
function custom(check, _params = {}, fatal) {
  if (check)
    return ZodAny.create().superRefine((data, ctx) => {
      const r36 = check(data);
      if (r36 instanceof Promise) {
        return r36.then((r210) => {
          if (!r210) {
            const params = cleanParams(_params, data);
            const _fatal = params.fatal ?? fatal ?? true;
            ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
          }
        });
      }
      if (!r36) {
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
  let i10 = 0;
  for (; i10 < pathA.length && i10 < pathB.length; i10++) {
    if (pathA[i10] !== pathB[i10])
      break;
  }
  return [(pathA.length - i10).toString(), ...pathB.slice(i10)].join("/");
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
      anyOf: strategy.map((item, i10) => parseDateDef(def, refs, item))
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
  ].filter((x24) => !!x24);
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
          /* @__PURE__ */ ((_17) => {
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
  for (let i10 = 0; i10 < source.length; i10++) {
    if (!ALPHA_NUMERIC.has(source[i10])) {
      result += "\\";
    }
    result += source[i10];
  }
  return result;
}
function addFormat(schema, value, message, refs) {
  if (schema.format || schema.anyOf?.some((x24) => x24.format)) {
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
  if (schema.pattern || schema.allOf?.some((x24) => x24.pattern)) {
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
  for (let i10 = 0; i10 < source.length; i10++) {
    if (isEscaped) {
      pattern += source[i10];
      isEscaped = false;
      continue;
    }
    if (flags.i) {
      if (inCharGroup) {
        if (source[i10].match(/[a-z]/)) {
          if (inCharRange) {
            pattern += source[i10];
            pattern += `${source[i10 - 2]}-${source[i10]}`.toUpperCase();
            inCharRange = false;
          } else if (source[i10 + 1] === "-" && source[i10 + 2]?.match(/[a-z]/)) {
            pattern += source[i10];
            inCharRange = true;
          } else {
            pattern += `${source[i10]}${source[i10].toUpperCase()}`;
          }
          continue;
        }
      } else if (source[i10].match(/[a-z]/)) {
        pattern += `[${source[i10]}${source[i10].toUpperCase()}]`;
        continue;
      }
    }
    if (flags.m) {
      if (source[i10] === "^") {
        pattern += `(^|(?<=[\r
]))`;
        continue;
      } else if (source[i10] === "$") {
        pattern += `($|(?=[\r
]))`;
        continue;
      }
    }
    if (flags.s && source[i10] === ".") {
      pattern += inCharGroup ? `${source[i10]}\r
` : `[${source[i10]}\r
]`;
      continue;
    }
    pattern += source[i10];
    if (source[i10] === "\\") {
      isEscaped = true;
    } else if (inCharGroup && source[i10] === "]") {
      inCharGroup = false;
    } else if (!inCharGroup && source[i10] === "[") {
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
  if (options.every((x24) => x24._def.typeName in primitiveMappings && (!x24._def.checks || !x24._def.checks.length))) {
    const types = options.reduce((types2, x24) => {
      const type = primitiveMappings[x24._def.typeName];
      return type && !types2.includes(type) ? [...types2, type] : types2;
    }, []);
    return {
      type: types.length > 1 ? types : types[0]
    };
  } else if (options.every((x24) => x24._def.typeName === "ZodLiteral" && !x24.description)) {
    const types = options.reduce((acc, x24) => {
      const type = typeof x24._def.value;
      switch (type) {
        case "string":
        case "number":
        case "boolean":
          return [...acc, type];
        case "bigint":
          return [...acc, "integer"];
        case "object":
          if (x24._def.value === null)
            return [...acc, "null"];
        case "symbol":
        case "undefined":
        case "function":
        default:
          return acc;
      }
    }, []);
    if (types.length === options.length) {
      const uniqueTypes = types.filter((x24, i10, a8) => a8.indexOf(x24) === i10);
      return {
        type: uniqueTypes.length > 1 ? uniqueTypes : uniqueTypes[0],
        enum: options.reduce((acc, x24) => {
          return acc.includes(x24._def.value) ? acc : [...acc, x24._def.value];
        }, [])
      };
    }
  } else if (options.every((x24) => x24._def.typeName === "ZodEnum")) {
    return {
      type: "string",
      enum: options.reduce((acc, x24) => [
        ...acc,
        ...x24._def.values.filter((x25) => !acc.includes(x25))
      ], [])
    };
  }
  return asAnyOf(def, refs);
}
var asAnyOf = (def, refs) => {
  const anyOf = (def.options instanceof Map ? Array.from(def.options.values()) : def.options).map((x24, i10) => parseDef(x24._def, {
    ...refs,
    currentPath: [...refs.currentPath, "anyOf", `${i10}`]
  })).filter((x24) => !!x24 && (!refs.strictUnions || typeof x24 === "object" && Object.keys(x24).length > 0));
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
  const a8 = parseDef(def.in._def, {
    ...refs,
    currentPath: [...refs.currentPath, "allOf", "0"]
  });
  const b23 = parseDef(def.out._def, {
    ...refs,
    currentPath: [...refs.currentPath, "allOf", a8 ? "1" : "0"]
  });
  return {
    allOf: [a8, b23].filter((x24) => x24 !== void 0)
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
      items: def.items.map((x24, i10) => parseDef(x24._def, {
        ...refs,
        currentPath: [...refs.currentPath, "items", `${i10}`]
      })).reduce((acc, x24) => x24 === void 0 ? acc : [...acc, x24], []),
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
      items: def.items.map((x24, i10) => parseDef(x24._def, {
        ...refs,
        currentPath: [...refs.currentPath, "items", `${i10}`]
      })).reduce((acc, x24) => x24 === void 0 ? acc : [...acc, x24], [])
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
      return /* @__PURE__ */ ((_17) => void 0)(typeName);
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
  const main2 = parseDef(schema._def, name17 === void 0 ? refs : {
    ...refs,
    currentPath: [...refs.basePath, refs.definitionPath, name17]
  }, false) ?? parseAnyDef(refs);
  const title = typeof options === "object" && options.name !== void 0 && options.nameStrategy === "title" ? options.name : void 0;
  if (title !== void 0) {
    main2.title = title;
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
    ...main2,
    [refs.definitionPath]: definitions
  } : main2 : {
    $ref: [
      ...refs.$refStrategy === "relative" ? [] : refs.basePath,
      refs.definitionPath,
      name17
    ].join("/"),
    [refs.definitionPath]: {
      ...definitions,
      [name17]: main2
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
var A9 = { code: "0", name: "text", parse: (t4) => {
  if (typeof t4 != "string") throw new Error('"text" parts expect a string value.');
  return { type: "text", value: t4 };
} };
var N5 = { code: "3", name: "error", parse: (t4) => {
  if (typeof t4 != "string") throw new Error('"error" parts expect a string value.');
  return { type: "error", value: t4 };
} };
var R5 = { code: "4", name: "assistant_message", parse: (t4) => {
  if (t4 == null || typeof t4 != "object" || !("id" in t4) || !("role" in t4) || !("content" in t4) || typeof t4.id != "string" || typeof t4.role != "string" || t4.role !== "assistant" || !Array.isArray(t4.content) || !t4.content.every((e7) => e7 != null && typeof e7 == "object" && "type" in e7 && e7.type === "text" && "text" in e7 && e7.text != null && typeof e7.text == "object" && "value" in e7.text && typeof e7.text.value == "string")) throw new Error('"assistant_message" parts expect an object with an "id", "role", and "content" property.');
  return { type: "assistant_message", value: t4 };
} };
var x7 = { code: "5", name: "assistant_control_data", parse: (t4) => {
  if (t4 == null || typeof t4 != "object" || !("threadId" in t4) || !("messageId" in t4) || typeof t4.threadId != "string" || typeof t4.messageId != "string") throw new Error('"assistant_control_data" parts expect an object with a "threadId" and "messageId" property.');
  return { type: "assistant_control_data", value: { threadId: t4.threadId, messageId: t4.messageId } };
} };
var C7 = { code: "6", name: "data_message", parse: (t4) => {
  if (t4 == null || typeof t4 != "object" || !("role" in t4) || !("data" in t4) || typeof t4.role != "string" || t4.role !== "data") throw new Error('"data_message" parts expect an object with a "role" and "data" property.');
  return { type: "data_message", value: t4 };
} };
var J8 = [A9, N5, R5, x7, C7];
var j10 = { [A9.code]: A9, [N5.code]: N5, [R5.code]: R5, [x7.code]: x7, [C7.code]: C7 };
var Ct2 = { [A9.name]: A9.code, [N5.name]: N5.code, [R5.name]: R5.code, [x7.name]: x7.code, [C7.name]: C7.code };
var M8 = J8.map((t4) => t4.code);
function W4(t4) {
  let e7 = ["ROOT"], a8 = -1, o15 = null;
  function n8(s9, i10, d24) {
    switch (s9) {
      case '"': {
        a8 = i10, e7.pop(), e7.push(d24), e7.push("INSIDE_STRING");
        break;
      }
      case "f":
      case "t":
      case "n": {
        a8 = i10, o15 = i10, e7.pop(), e7.push(d24), e7.push("INSIDE_LITERAL");
        break;
      }
      case "-": {
        e7.pop(), e7.push(d24), e7.push("INSIDE_NUMBER");
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
        a8 = i10, e7.pop(), e7.push(d24), e7.push("INSIDE_NUMBER");
        break;
      }
      case "{": {
        a8 = i10, e7.pop(), e7.push(d24), e7.push("INSIDE_OBJECT_START");
        break;
      }
      case "[": {
        a8 = i10, e7.pop(), e7.push(d24), e7.push("INSIDE_ARRAY_START");
        break;
      }
    }
  }
  function c14(s9, i10) {
    switch (s9) {
      case ",": {
        e7.pop(), e7.push("INSIDE_OBJECT_AFTER_COMMA");
        break;
      }
      case "}": {
        a8 = i10, e7.pop();
        break;
      }
    }
  }
  function f14(s9, i10) {
    switch (s9) {
      case ",": {
        e7.pop(), e7.push("INSIDE_ARRAY_AFTER_COMMA");
        break;
      }
      case "]": {
        a8 = i10, e7.pop();
        break;
      }
    }
  }
  for (let s9 = 0; s9 < t4.length; s9++) {
    let i10 = t4[s9];
    switch (e7[e7.length - 1]) {
      case "ROOT":
        n8(i10, s9, "FINISH");
        break;
      case "INSIDE_OBJECT_START": {
        switch (i10) {
          case '"': {
            e7.pop(), e7.push("INSIDE_OBJECT_KEY");
            break;
          }
          case "}": {
            a8 = s9, e7.pop();
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_AFTER_COMMA": {
        switch (i10) {
          case '"': {
            e7.pop(), e7.push("INSIDE_OBJECT_KEY");
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_KEY": {
        switch (i10) {
          case '"': {
            e7.pop(), e7.push("INSIDE_OBJECT_AFTER_KEY");
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_AFTER_KEY": {
        switch (i10) {
          case ":": {
            e7.pop(), e7.push("INSIDE_OBJECT_BEFORE_VALUE");
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_BEFORE_VALUE": {
        n8(i10, s9, "INSIDE_OBJECT_AFTER_VALUE");
        break;
      }
      case "INSIDE_OBJECT_AFTER_VALUE": {
        c14(i10, s9);
        break;
      }
      case "INSIDE_STRING": {
        switch (i10) {
          case '"': {
            e7.pop(), a8 = s9;
            break;
          }
          case "\\": {
            e7.push("INSIDE_STRING_ESCAPE");
            break;
          }
          default:
            a8 = s9;
        }
        break;
      }
      case "INSIDE_ARRAY_START": {
        switch (i10) {
          case "]": {
            a8 = s9, e7.pop();
            break;
          }
          default: {
            a8 = s9, n8(i10, s9, "INSIDE_ARRAY_AFTER_VALUE");
            break;
          }
        }
        break;
      }
      case "INSIDE_ARRAY_AFTER_VALUE": {
        switch (i10) {
          case ",": {
            e7.pop(), e7.push("INSIDE_ARRAY_AFTER_COMMA");
            break;
          }
          case "]": {
            a8 = s9, e7.pop();
            break;
          }
          default: {
            a8 = s9;
            break;
          }
        }
        break;
      }
      case "INSIDE_ARRAY_AFTER_COMMA": {
        n8(i10, s9, "INSIDE_ARRAY_AFTER_VALUE");
        break;
      }
      case "INSIDE_STRING_ESCAPE": {
        e7.pop(), a8 = s9;
        break;
      }
      case "INSIDE_NUMBER": {
        switch (i10) {
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
            a8 = s9;
            break;
          }
          case "e":
          case "E":
          case "-":
          case ".":
            break;
          case ",": {
            e7.pop(), e7[e7.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && f14(i10, s9), e7[e7.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" && c14(i10, s9);
            break;
          }
          case "}": {
            e7.pop(), e7[e7.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" && c14(i10, s9);
            break;
          }
          case "]": {
            e7.pop(), e7[e7.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && f14(i10, s9);
            break;
          }
          default: {
            e7.pop();
            break;
          }
        }
        break;
      }
      case "INSIDE_LITERAL": {
        let l20 = t4.substring(o15, s9 + 1);
        !"false".startsWith(l20) && !"true".startsWith(l20) && !"null".startsWith(l20) ? (e7.pop(), e7[e7.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" ? c14(i10, s9) : e7[e7.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && f14(i10, s9)) : a8 = s9;
        break;
      }
    }
  }
  let p15 = t4.slice(0, a8 + 1);
  for (let s9 = e7.length - 1; s9 >= 0; s9--) switch (e7[s9]) {
    case "INSIDE_STRING": {
      p15 += '"';
      break;
    }
    case "INSIDE_OBJECT_KEY":
    case "INSIDE_OBJECT_AFTER_KEY":
    case "INSIDE_OBJECT_AFTER_COMMA":
    case "INSIDE_OBJECT_START":
    case "INSIDE_OBJECT_BEFORE_VALUE":
    case "INSIDE_OBJECT_AFTER_VALUE": {
      p15 += "}";
      break;
    }
    case "INSIDE_ARRAY_START":
    case "INSIDE_ARRAY_AFTER_COMMA":
    case "INSIDE_ARRAY_AFTER_VALUE": {
      p15 += "]";
      break;
    }
    case "INSIDE_LITERAL": {
      let d24 = t4.substring(o15, t4.length);
      "true".startsWith(d24) ? p15 += "true".slice(d24.length) : "false".startsWith(d24) ? p15 += "false".slice(d24.length) : "null".startsWith(d24) && (p15 += "null".slice(d24.length));
    }
  }
  return p15;
}
function K7(t4) {
  if (t4 === void 0) return { value: void 0, state: "undefined-input" };
  let e7 = S9({ text: t4 });
  return e7.success ? { value: e7.value, state: "successful-parse" } : (e7 = S9({ text: W4(t4) }), e7.success ? { value: e7.value, state: "repaired-parse" } : { value: void 0, state: "failed-parse" });
}
var G7 = { code: "0", name: "text", parse: (t4) => {
  if (typeof t4 != "string") throw new Error('"text" parts expect a string value.');
  return { type: "text", value: t4 };
} };
var q6 = { code: "2", name: "data", parse: (t4) => {
  if (!Array.isArray(t4)) throw new Error('"data" parts expect an array value.');
  return { type: "data", value: t4 };
} };
var z6 = { code: "3", name: "error", parse: (t4) => {
  if (typeof t4 != "string") throw new Error('"error" parts expect a string value.');
  return { type: "error", value: t4 };
} };
var H6 = { code: "8", name: "message_annotations", parse: (t4) => {
  if (!Array.isArray(t4)) throw new Error('"message_annotations" parts expect an array value.');
  return { type: "message_annotations", value: t4 };
} };
var Q7 = { code: "9", name: "tool_call", parse: (t4) => {
  if (t4 == null || typeof t4 != "object" || !("toolCallId" in t4) || typeof t4.toolCallId != "string" || !("toolName" in t4) || typeof t4.toolName != "string" || !("args" in t4) || typeof t4.args != "object") throw new Error('"tool_call" parts expect an object with a "toolCallId", "toolName", and "args" property.');
  return { type: "tool_call", value: t4 };
} };
var X3 = { code: "a", name: "tool_result", parse: (t4) => {
  if (t4 == null || typeof t4 != "object" || !("toolCallId" in t4) || typeof t4.toolCallId != "string" || !("result" in t4)) throw new Error('"tool_result" parts expect an object with a "toolCallId" and a "result" property.');
  return { type: "tool_result", value: t4 };
} };
var Z6 = { code: "b", name: "tool_call_streaming_start", parse: (t4) => {
  if (t4 == null || typeof t4 != "object" || !("toolCallId" in t4) || typeof t4.toolCallId != "string" || !("toolName" in t4) || typeof t4.toolName != "string") throw new Error('"tool_call_streaming_start" parts expect an object with a "toolCallId" and "toolName" property.');
  return { type: "tool_call_streaming_start", value: t4 };
} };
var tt2 = { code: "c", name: "tool_call_delta", parse: (t4) => {
  if (t4 == null || typeof t4 != "object" || !("toolCallId" in t4) || typeof t4.toolCallId != "string" || !("argsTextDelta" in t4) || typeof t4.argsTextDelta != "string") throw new Error('"tool_call_delta" parts expect an object with a "toolCallId" and "argsTextDelta" property.');
  return { type: "tool_call_delta", value: t4 };
} };
var et2 = { code: "d", name: "finish_message", parse: (t4) => {
  if (t4 == null || typeof t4 != "object" || !("finishReason" in t4) || typeof t4.finishReason != "string") throw new Error('"finish_message" parts expect an object with a "finishReason" property.');
  let e7 = { finishReason: t4.finishReason };
  return "usage" in t4 && t4.usage != null && typeof t4.usage == "object" && "promptTokens" in t4.usage && "completionTokens" in t4.usage && (e7.usage = { promptTokens: typeof t4.usage.promptTokens == "number" ? t4.usage.promptTokens : Number.NaN, completionTokens: typeof t4.usage.completionTokens == "number" ? t4.usage.completionTokens : Number.NaN }), { type: "finish_message", value: e7 };
} };
var at2 = { code: "e", name: "finish_step", parse: (t4) => {
  if (t4 == null || typeof t4 != "object" || !("finishReason" in t4) || typeof t4.finishReason != "string") throw new Error('"finish_step" parts expect an object with a "finishReason" property.');
  let e7 = { finishReason: t4.finishReason, isContinued: false };
  return "usage" in t4 && t4.usage != null && typeof t4.usage == "object" && "promptTokens" in t4.usage && "completionTokens" in t4.usage && (e7.usage = { promptTokens: typeof t4.usage.promptTokens == "number" ? t4.usage.promptTokens : Number.NaN, completionTokens: typeof t4.usage.completionTokens == "number" ? t4.usage.completionTokens : Number.NaN }), "isContinued" in t4 && typeof t4.isContinued == "boolean" && (e7.isContinued = t4.isContinued), { type: "finish_step", value: e7 };
} };
var rt2 = { code: "f", name: "start_step", parse: (t4) => {
  if (t4 == null || typeof t4 != "object" || !("messageId" in t4) || typeof t4.messageId != "string") throw new Error('"start_step" parts expect an object with an "id" property.');
  return { type: "start_step", value: { messageId: t4.messageId } };
} };
var ot2 = { code: "g", name: "reasoning", parse: (t4) => {
  if (typeof t4 != "string") throw new Error('"reasoning" parts expect a string value.');
  return { type: "reasoning", value: t4 };
} };
var nt2 = { code: "h", name: "source", parse: (t4) => {
  if (t4 == null || typeof t4 != "object") throw new Error('"source" parts expect a Source object.');
  return { type: "source", value: t4 };
} };
var st2 = { code: "i", name: "redacted_reasoning", parse: (t4) => {
  if (t4 == null || typeof t4 != "object" || !("data" in t4) || typeof t4.data != "string") throw new Error('"redacted_reasoning" parts expect an object with a "data" property.');
  return { type: "redacted_reasoning", value: { data: t4.data } };
} };
var it2 = { code: "j", name: "reasoning_signature", parse: (t4) => {
  if (t4 == null || typeof t4 != "object" || !("signature" in t4) || typeof t4.signature != "string") throw new Error('"reasoning_signature" parts expect an object with a "signature" property.');
  return { type: "reasoning_signature", value: { signature: t4.signature } };
} };
var ct2 = { code: "k", name: "file", parse: (t4) => {
  if (t4 == null || typeof t4 != "object" || !("data" in t4) || typeof t4.data != "string" || !("mimeType" in t4) || typeof t4.mimeType != "string") throw new Error('"file" parts expect an object with a "data" and "mimeType" property.');
  return { type: "file", value: t4 };
} };
var D7 = [G7, q6, z6, H6, Q7, X3, Z6, tt2, et2, at2, rt2, ot2, nt2, st2, it2, ct2];
var lt2 = Object.fromEntries(D7.map((t4) => [t4.code, t4]));
var Pt2 = Object.fromEntries(D7.map((t4) => [t4.name, t4.code]));
var pt2 = D7.map((t4) => t4.code);
function Lt2(t4, e7) {
  let a8 = D7.find((o15) => o15.name === t4);
  if (!a8) throw new Error(`Invalid stream part type: ${t4}`);
  return `${a8.code}:${JSON.stringify(e7)}
`;
}
function bt2(t4, e7) {
  var a8;
  let o15 = (a8 = e7?.useReferences) != null ? a8 : false;
  return kt2(index_default2(t4, { $refStrategy: o15 ? "root" : "none", target: "jsonSchema7" }), { validate: (n8) => {
    let c14 = t4.safeParse(n8);
    return c14.success ? { success: true, value: c14.data } : { success: false, error: c14.error };
  } });
}
var O6 = Symbol.for("vercel.ai.schema");
function kt2(t4, { validate: e7 } = {}) {
  return { [O6]: true, _type: void 0, [T6]: true, jsonSchema: t4, validate: e7 };
}
function At2(t4) {
  return typeof t4 == "object" && t4 !== null && O6 in t4 && t4[O6] === true && "jsonSchema" in t4 && "validate" in t4;
}
function Wt2(t4) {
  return At2(t4) ? t4 : bt2(t4);
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
  function _reject(v16) {
    rejectedVersions.add(v16);
    return false;
  }
  function _accept(v16) {
    acceptedVersions.add(v16);
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
  var _a18;
  if (allowOverride === void 0) {
    allowOverride = false;
  }
  var api = _global[GLOBAL_OPENTELEMETRY_API_KEY] = (_a18 = _global[GLOBAL_OPENTELEMETRY_API_KEY]) !== null && _a18 !== void 0 ? _a18 : {
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
  var _a18, _b;
  var globalVersion = (_a18 = _global[GLOBAL_OPENTELEMETRY_API_KEY]) === null || _a18 === void 0 ? void 0 : _a18.version;
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
var __read = function(o15, n8) {
  var m20 = typeof Symbol === "function" && o15[Symbol.iterator];
  if (!m20) return o15;
  var i10 = m20.call(o15), r36, ar6 = [], e7;
  try {
    while ((n8 === void 0 || n8-- > 0) && !(r36 = i10.next()).done) ar6.push(r36.value);
  } catch (error) {
    e7 = { error };
  } finally {
    try {
      if (r36 && !r36.done && (m20 = i10["return"])) m20.call(i10);
    } finally {
      if (e7) throw e7.error;
    }
  }
  return ar6;
};
var __spreadArray = function(to2, from, pack) {
  if (pack || arguments.length === 2) for (var i10 = 0, l20 = from.length, ar6; i10 < l20; i10++) {
    if (ar6 || !(i10 in from)) {
      if (!ar6) ar6 = Array.prototype.slice.call(from, 0, i10);
      ar6[i10] = from[i10];
    }
  }
  return to2.concat(ar6 || Array.prototype.slice.call(from));
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
var __read2 = function(o15, n8) {
  var m20 = typeof Symbol === "function" && o15[Symbol.iterator];
  if (!m20) return o15;
  var i10 = m20.call(o15), r36, ar6 = [], e7;
  try {
    while ((n8 === void 0 || n8-- > 0) && !(r36 = i10.next()).done) ar6.push(r36.value);
  } catch (error) {
    e7 = { error };
  } finally {
    try {
      if (r36 && !r36.done && (m20 = i10["return"])) m20.call(i10);
    } finally {
      if (e7) throw e7.error;
    }
  }
  return ar6;
};
var __spreadArray2 = function(to2, from, pack) {
  if (pack || arguments.length === 2) for (var i10 = 0, l20 = from.length, ar6; i10 < l20; i10++) {
    if (ar6 || !(i10 in from)) {
      if (!ar6) ar6 = Array.prototype.slice.call(from, 0, i10);
      ar6[i10] = from[i10];
    }
  }
  return to2.concat(ar6 || Array.prototype.slice.call(from));
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
        var _a18, _b, _c;
        if (optionsOrLogLevel === void 0) {
          optionsOrLogLevel = { logLevel: DiagLogLevel.INFO };
        }
        if (logger === self) {
          var err = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
          self.error((_a18 = err.stack) !== null && _a18 !== void 0 ? _a18 : err.message);
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
var __read3 = function(o15, n8) {
  var m20 = typeof Symbol === "function" && o15[Symbol.iterator];
  if (!m20) return o15;
  var i10 = m20.call(o15), r36, ar6 = [], e7;
  try {
    while ((n8 === void 0 || n8-- > 0) && !(r36 = i10.next()).done) ar6.push(r36.value);
  } catch (error) {
    e7 = { error };
  } finally {
    try {
      if (r36 && !r36.done && (m20 = i10["return"])) m20.call(i10);
    } finally {
      if (e7) throw e7.error;
    }
  }
  return ar6;
};
var __values = function(o15) {
  var s9 = typeof Symbol === "function" && Symbol.iterator, m20 = s9 && o15[s9], i10 = 0;
  if (m20) return m20.call(o15);
  if (o15 && typeof o15.length === "number") return {
    next: function() {
      if (o15 && i10 >= o15.length) o15 = void 0;
      return { value: o15 && o15[i10++], done: !o15 };
    }
  };
  throw new TypeError(s9 ? "Object is not iterable." : "Symbol.iterator is not defined.");
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
      return Array.from(this._entries.entries()).map(function(_a18) {
        var _b = __read3(_a18, 2), k25 = _b[0], v16 = _b[1];
        return [k25, v16];
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
      var e_1, _a18;
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
          if (keys_1_1 && !keys_1_1.done && (_a18 = keys_1.return)) _a18.call(keys_1);
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
  var extendStatics = function(d24, b23) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d25, b24) {
      d25.__proto__ = b24;
    } || function(d25, b24) {
      for (var p15 in b24) if (Object.prototype.hasOwnProperty.call(b24, p15)) d25[p15] = b24[p15];
    };
    return extendStatics(d24, b23);
  };
  return function(d24, b23) {
    if (typeof b23 !== "function" && b23 !== null)
      throw new TypeError("Class extends value " + String(b23) + " is not a constructor or null");
    extendStatics(d24, b23);
    function __() {
      this.constructor = d24;
    }
    d24.prototype = b23 === null ? Object.create(b23) : (__.prototype = b23.prototype, new __());
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
var __read4 = function(o15, n8) {
  var m20 = typeof Symbol === "function" && o15[Symbol.iterator];
  if (!m20) return o15;
  var i10 = m20.call(o15), r36, ar6 = [], e7;
  try {
    while ((n8 === void 0 || n8-- > 0) && !(r36 = i10.next()).done) ar6.push(r36.value);
  } catch (error) {
    e7 = { error };
  } finally {
    try {
      if (r36 && !r36.done && (m20 = i10["return"])) m20.call(i10);
    } finally {
      if (e7) throw e7.error;
    }
  }
  return ar6;
};
var __spreadArray3 = function(to2, from, pack) {
  if (pack || arguments.length === 2) for (var i10 = 0, l20 = from.length, ar6; i10 < l20; i10++) {
    if (ar6 || !(i10 in from)) {
      if (!ar6) ar6 = Array.prototype.slice.call(from, 0, i10);
      ar6[i10] = from[i10];
    }
  }
  return to2.concat(ar6 || Array.prototype.slice.call(from));
};
var NoopContextManager = (
  /** @class */
  function() {
    function NoopContextManager2() {
    }
    NoopContextManager2.prototype.active = function() {
      return ROOT_CONTEXT;
    };
    NoopContextManager2.prototype.with = function(_context, fn3, thisArg) {
      var args = [];
      for (var _i = 3; _i < arguments.length; _i++) {
        args[_i - 3] = arguments[_i];
      }
      return fn3.call.apply(fn3, __spreadArray3([thisArg], __read4(args), false));
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
var __read5 = function(o15, n8) {
  var m20 = typeof Symbol === "function" && o15[Symbol.iterator];
  if (!m20) return o15;
  var i10 = m20.call(o15), r36, ar6 = [], e7;
  try {
    while ((n8 === void 0 || n8-- > 0) && !(r36 = i10.next()).done) ar6.push(r36.value);
  } catch (error) {
    e7 = { error };
  } finally {
    try {
      if (r36 && !r36.done && (m20 = i10["return"])) m20.call(i10);
    } finally {
      if (e7) throw e7.error;
    }
  }
  return ar6;
};
var __spreadArray4 = function(to2, from, pack) {
  if (pack || arguments.length === 2) for (var i10 = 0, l20 = from.length, ar6; i10 < l20; i10++) {
    if (ar6 || !(i10 in from)) {
      if (!ar6) ar6 = Array.prototype.slice.call(from, 0, i10);
      ar6[i10] = from[i10];
    }
  }
  return to2.concat(ar6 || Array.prototype.slice.call(from));
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
    ContextAPI2.prototype.with = function(context2, fn3, thisArg) {
      var _a18;
      var args = [];
      for (var _i = 3; _i < arguments.length; _i++) {
        args[_i - 3] = arguments[_i];
      }
      return (_a18 = this._getContextManager()).with.apply(_a18, __spreadArray4([context2, fn3, thisArg], __read5(args), false));
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
  var _a18;
  return (_a18 = getSpan(context2)) === null || _a18 === void 0 ? void 0 : _a18.spanContext();
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
      var fn3;
      if (arguments.length < 2) {
        return;
      } else if (arguments.length === 2) {
        fn3 = arg2;
      } else if (arguments.length === 3) {
        opts = arg2;
        fn3 = arg3;
      } else {
        opts = arg2;
        ctx = arg3;
        fn3 = arg4;
      }
      var parentContext = ctx !== null && ctx !== void 0 ? ctx : contextApi.active();
      var span = this.startSpan(name17, opts, parentContext);
      var contextWithSpanSet = setSpan(parentContext, span);
      return contextApi.with(contextWithSpanSet, fn3, void 0, span);
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
      var _a18;
      return (_a18 = this.getDelegateTracer(name17, version, options)) !== null && _a18 !== void 0 ? _a18 : new ProxyTracer(this, name17, version, options);
    };
    ProxyTracerProvider2.prototype.getDelegate = function() {
      var _a18;
      return (_a18 = this._delegate) !== null && _a18 !== void 0 ? _a18 : NOOP_TRACER_PROVIDER;
    };
    ProxyTracerProvider2.prototype.setDelegate = function(delegate) {
      this._delegate = delegate;
    };
    ProxyTracerProvider2.prototype.getDelegateTracer = function(name17, version, options) {
      var _a18;
      return (_a18 = this._delegate) === null || _a18 === void 0 ? void 0 : _a18.getTracer(name17, version, options);
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
        var i10 = listMember.indexOf(LIST_MEMBER_KEY_VALUE_SPLITTER);
        if (i10 !== -1) {
          var key = listMember.slice(0, i10);
          var value = listMember.slice(i10 + 1, part.length);
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
} = {}) => async (f14) => _retryWithExponentialBackoff(f14, {
  maxRetries,
  delayInMs: initialDelayInMs,
  backoffFactor
});
async function _retryWithExponentialBackoff(f14, {
  maxRetries,
  delayInMs,
  backoffFactor
}, errors = []) {
  try {
    return await f14();
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
        f14,
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
  model: model2,
  settings,
  telemetry,
  headers
}) {
  var _a172;
  return {
    "ai.model.provider": model2.provider,
    "ai.model.id": model2.modelId,
    // settings:
    ...Object.entries(settings).reduce((attributes, [key, value]) => {
      attributes[`ai.settings.${key}`] = value;
      return attributes;
    }, {}),
    // add metadata as attributes:
    ...Object.entries((_a172 = telemetry == null ? void 0 : telemetry.metadata) != null ? _a172 : {}).reduce(
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
  fn: fn3,
  endWhenDone = true
}) {
  return tracer.startActiveSpan(name17, { attributes }, async (span) => {
    try {
      const result = await fn3(span);
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
  var _a172;
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
      mimeType: (_a172 = response.headers.get("content-type")) != null ? _a172 : void 0
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
      var _a172, _b;
      return (_b = (_a172 = __Buffer$3) == null ? void 0 : _a172.isBuffer(value)) != null ? _b : false;
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
  var _a172, _b, _c, _d, _e4, _f;
  const role = message.role;
  switch (role) {
    case "system": {
      return {
        role: "system",
        content: message.content,
        providerMetadata: (_a172 = message.providerOptions) != null ? _a172 : message.experimental_providerMetadata
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
        providerMetadata: (_e4 = message.providerOptions) != null ? _e4 : message.experimental_providerMetadata
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
  var _a172, _b, _c, _d;
  if (part.type === "text") {
    return {
      type: "text",
      text: part.text,
      providerMetadata: (_a172 = part.providerOptions) != null ? _a172 : part.experimental_providerMetadata
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
  var _a172, _b, _c;
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
        if ((_a172 = attachment.contentType) == null ? void 0 : _a172.startsWith("image/")) {
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
  var _a172, _b;
  const tools = (_a172 = options == null ? void 0 : options.tools) != null ? _a172 : {};
  const coreMessages = [];
  for (let i10 = 0; i10 < messages.length; i10++) {
    const message = messages[i10];
    const isLastMessage = i10 === messages.length - 1;
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
  if (characteristics.some((c14) => c14 === "has-ui-specific-parts")) {
    return "ui-messages";
  }
  const nonMessageIndex = characteristics.findIndex(
    (c14) => c14 !== "has-core-specific-parts" && c14 !== "message"
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
  model: model2,
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
  var _a172;
  if (typeof model2 === "string" || model2.specificationVersion !== "v1") {
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
    model: model2,
    telemetry,
    headers,
    settings: { ...settings, maxRetries }
  });
  const initialPrompt = standardizePrompt({
    prompt: {
      system: (_a172 = output == null ? void 0 : output.injectIntoSystemPrompt({ system, model: model2 })) != null ? _a172 : system,
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
        "ai.model.provider": model2.provider,
        "ai.model.id": model2.modelId,
        // specific settings that only make sense on the outer level:
        "ai.prompt": {
          input: () => JSON.stringify({ system, prompt, messages })
        },
        "ai.settings.maxSteps": maxSteps
      }
    }),
    tracer,
    fn: async (span) => {
      var _a18, _b, _c, _d, _e4, _f, _g, _h, _i, _j, _k, _l, _m, _n2;
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
          model: model2,
          steps,
          maxSteps,
          stepNumber: stepCount
        }));
        const stepToolChoice = (_a18 = prepareStepResult == null ? void 0 : prepareStepResult.toolChoice) != null ? _a18 : toolChoice;
        const stepActiveTools = (_b = prepareStepResult == null ? void 0 : prepareStepResult.experimental_activeTools) != null ? _b : activeTools;
        const stepModel = (_c = prepareStepResult == null ? void 0 : prepareStepResult.model) != null ? _c : model2;
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
                responseFormat: output == null ? void 0 : output.responseFormat({ model: model2 }),
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
          ((_e4 = currentModelResponse.toolCalls) != null ? _e4 : []).map(
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
          body: (_n2 = currentModelResponse.rawResponse) == null ? void 0 : _n2.body,
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
  var _a172;
  return (_a172 = files == null ? void 0 : files.map((file) => new DefaultGeneratedFile(file))) != null ? _a172 : [];
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
    responseFormat: ({ model: model2 }) => ({
      type: "json",
      schema: model2.supportsStructuredOutputs ? schema.jsonSchema : void 0
    }),
    injectIntoSystemPrompt({ system, model: model2 }) {
      return model2.supportsStructuredOutputs ? system : injectJsonInstruction({
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
var originalGenerateId4 = J7({
  prefix: "aitxt",
  size: 24
});
var originalGenerateMessageId2 = J7({
  prefix: "msg",
  size: 24
});
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
        var _a172;
        if (typeof value === "string") {
          controller.enqueue(value);
          return;
        }
        if ("event" in value) {
          if (value.event === "on_chat_model_stream") {
            forwardAIMessageChunk(
              (_a172 = value.data) == null ? void 0 : _a172.chunk,
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
  var _a172;
  const dataStream = toDataStreamInternal(
    stream,
    options == null ? void 0 : options.callbacks
  ).pipeThrough(new TextEncoderStream());
  const data = options == null ? void 0 : options.data;
  const init = options == null ? void 0 : options.init;
  const responseStream = data ? mergeStreams(data.stream, dataStream) : dataStream;
  return new Response(responseStream, {
    status: (_a172 = init == null ? void 0 : init.status) != null ? _a172 : 200,
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
  return M7(stream[Symbol.asyncIterator]()).pipeThrough(
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
  var _a172;
  const { init, data, callbacks } = options;
  const dataStream = toDataStreamInternal2(stream, callbacks).pipeThrough(
    new TextEncoderStream()
  );
  const responseStream = data ? mergeStreams(data.stream, dataStream) : dataStream;
  return new Response(responseStream, {
    status: (_a172 = init == null ? void 0 : init.status) != null ? _a172 : 200,
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

// https://esm.sh/zod@4.0.15/denonext/v3.mjs
var $e2 = Object.defineProperty;
var Me2 = (r36, e7) => {
  for (var t4 in e7) $e2(r36, t4, { get: e7[t4], enumerable: true });
};
var be3 = {};
Me2(be3, { BRAND: () => ct3, DIRTY: () => D8, EMPTY_PATH: () => De2, INVALID: () => p5, NEVER: () => qt2, OK: () => k10, ParseStatus: () => x8, Schema: () => _6, ZodAny: () => P7, ZodArray: () => $6, ZodBigInt: () => U7, ZodBoolean: () => F9, ZodBranded: () => le2, ZodCatch: () => ee3, ZodDate: () => B7, ZodDefault: () => K8, ZodDiscriminatedUnion: () => me2, ZodEffects: () => S10, ZodEnum: () => Q8, ZodError: () => b7, ZodFirstPartyTypeKind: () => m8, ZodFunction: () => _e2, ZodIntersection: () => Y3, ZodIssueCode: () => c5, ZodLazy: () => H7, ZodLiteral: () => G8, ZodMap: () => oe2, ZodNaN: () => de2, ZodNativeEnum: () => X4, ZodNever: () => A10, ZodNull: () => q7, ZodNullable: () => j11, ZodNumber: () => L8, ZodObject: () => w9, ZodOptional: () => C8, ZodParsedType: () => u7, ZodPipeline: () => fe2, ZodPromise: () => z7, ZodReadonly: () => te3, ZodRecord: () => ye2, ZodSchema: () => _6, ZodSet: () => ce2, ZodString: () => V8, ZodSymbol: () => ne2, ZodTransformer: () => S10, ZodTuple: () => N6, ZodType: () => _6, ZodUndefined: () => W5, ZodUnion: () => J9, ZodUnknown: () => Z7, ZodVoid: () => ie2, addIssueToContext: () => d6, any: () => _t2, array: () => kt3, bigint: () => ft2, boolean: () => Ze2, coerce: () => Wt3, custom: () => je2, date: () => ht2, datetimeRegex: () => Re2, defaultErrorMap: () => I5, discriminatedUnion: () => Ct3, effect: () => Vt2, enum: () => Zt2, function: () => jt2, getErrorMap: () => re4, getParsedType: () => R6, instanceof: () => ut2, intersection: () => Ot2, isAborted: () => he3, isAsync: () => se3, isDirty: () => pe3, isValid: () => M9, late: () => dt3, lazy: () => It2, literal: () => Et2, makeIssue: () => ue2, map: () => Rt2, nan: () => lt3, nativeEnum: () => $t2, never: () => vt2, null: () => yt2, nullable: () => zt2, number: () => Ee2, object: () => bt3, objectUtil: () => ve2, oboolean: () => Bt2, onumber: () => Ft2, optional: () => Pt3, ostring: () => Ut2, pipeline: () => Lt3, preprocess: () => Dt3, promise: () => Mt2, quotelessJson: () => Ve2, record: () => At3, set: () => Nt2, setErrorMap: () => ze2, strictObject: () => wt2, string: () => Ie2, symbol: () => pt3, transformer: () => Vt2, tuple: () => St2, undefined: () => mt2, union: () => Tt2, unknown: () => gt2, util: () => g7, void: () => xt2 });
var g7;
(function(r36) {
  r36.assertEqual = (a8) => {
  };
  function e7(a8) {
  }
  r36.assertIs = e7;
  function t4(a8) {
    throw new Error();
  }
  r36.assertNever = t4, r36.arrayToEnum = (a8) => {
    let n8 = {};
    for (let i10 of a8) n8[i10] = i10;
    return n8;
  }, r36.getValidEnumValues = (a8) => {
    let n8 = r36.objectKeys(a8).filter((o15) => typeof a8[a8[o15]] != "number"), i10 = {};
    for (let o15 of n8) i10[o15] = a8[o15];
    return r36.objectValues(i10);
  }, r36.objectValues = (a8) => r36.objectKeys(a8).map(function(n8) {
    return a8[n8];
  }), r36.objectKeys = typeof Object.keys == "function" ? (a8) => Object.keys(a8) : (a8) => {
    let n8 = [];
    for (let i10 in a8) Object.prototype.hasOwnProperty.call(a8, i10) && n8.push(i10);
    return n8;
  }, r36.find = (a8, n8) => {
    for (let i10 of a8) if (n8(i10)) return i10;
  }, r36.isInteger = typeof Number.isInteger == "function" ? (a8) => Number.isInteger(a8) : (a8) => typeof a8 == "number" && Number.isFinite(a8) && Math.floor(a8) === a8;
  function s9(a8, n8 = " | ") {
    return a8.map((i10) => typeof i10 == "string" ? `'${i10}'` : i10).join(n8);
  }
  r36.joinValues = s9, r36.jsonStringifyReplacer = (a8, n8) => typeof n8 == "bigint" ? n8.toString() : n8;
})(g7 || (g7 = {}));
var ve2;
(function(r36) {
  r36.mergeShapes = (e7, t4) => ({ ...e7, ...t4 });
})(ve2 || (ve2 = {}));
var u7 = g7.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]);
var R6 = (r36) => {
  switch (typeof r36) {
    case "undefined":
      return u7.undefined;
    case "string":
      return u7.string;
    case "number":
      return Number.isNaN(r36) ? u7.nan : u7.number;
    case "boolean":
      return u7.boolean;
    case "function":
      return u7.function;
    case "bigint":
      return u7.bigint;
    case "symbol":
      return u7.symbol;
    case "object":
      return Array.isArray(r36) ? u7.array : r36 === null ? u7.null : r36.then && typeof r36.then == "function" && r36.catch && typeof r36.catch == "function" ? u7.promise : typeof Map < "u" && r36 instanceof Map ? u7.map : typeof Set < "u" && r36 instanceof Set ? u7.set : typeof Date < "u" && r36 instanceof Date ? u7.date : u7.object;
    default:
      return u7.unknown;
  }
};
var c5 = g7.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
var Ve2 = (r36) => JSON.stringify(r36, null, 2).replace(/"([^"]+)":/g, "$1:");
var b7 = class r17 extends Error {
  get errors() {
    return this.issues;
  }
  constructor(e7) {
    super(), this.issues = [], this.addIssue = (s9) => {
      this.issues = [...this.issues, s9];
    }, this.addIssues = (s9 = []) => {
      this.issues = [...this.issues, ...s9];
    };
    let t4 = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, t4) : this.__proto__ = t4, this.name = "ZodError", this.issues = e7;
  }
  format(e7) {
    let t4 = e7 || function(n8) {
      return n8.message;
    }, s9 = { _errors: [] }, a8 = (n8) => {
      for (let i10 of n8.issues) if (i10.code === "invalid_union") i10.unionErrors.map(a8);
      else if (i10.code === "invalid_return_type") a8(i10.returnTypeError);
      else if (i10.code === "invalid_arguments") a8(i10.argumentsError);
      else if (i10.path.length === 0) s9._errors.push(t4(i10));
      else {
        let o15 = s9, f14 = 0;
        for (; f14 < i10.path.length; ) {
          let l20 = i10.path[f14];
          f14 === i10.path.length - 1 ? (o15[l20] = o15[l20] || { _errors: [] }, o15[l20]._errors.push(t4(i10))) : o15[l20] = o15[l20] || { _errors: [] }, o15 = o15[l20], f14++;
        }
      }
    };
    return a8(this), s9;
  }
  static assert(e7) {
    if (!(e7 instanceof r17)) throw new Error(`Not a ZodError: ${e7}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, g7.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(e7 = (t4) => t4.message) {
    let t4 = {}, s9 = [];
    for (let a8 of this.issues) if (a8.path.length > 0) {
      let n8 = a8.path[0];
      t4[n8] = t4[n8] || [], t4[n8].push(e7(a8));
    } else s9.push(e7(a8));
    return { formErrors: s9, fieldErrors: t4 };
  }
  get formErrors() {
    return this.flatten();
  }
};
b7.create = (r36) => new b7(r36);
var Pe3 = (r36, e7) => {
  let t4;
  switch (r36.code) {
    case c5.invalid_type:
      r36.received === u7.undefined ? t4 = "Required" : t4 = `Expected ${r36.expected}, received ${r36.received}`;
      break;
    case c5.invalid_literal:
      t4 = `Invalid literal value, expected ${JSON.stringify(r36.expected, g7.jsonStringifyReplacer)}`;
      break;
    case c5.unrecognized_keys:
      t4 = `Unrecognized key(s) in object: ${g7.joinValues(r36.keys, ", ")}`;
      break;
    case c5.invalid_union:
      t4 = "Invalid input";
      break;
    case c5.invalid_union_discriminator:
      t4 = `Invalid discriminator value. Expected ${g7.joinValues(r36.options)}`;
      break;
    case c5.invalid_enum_value:
      t4 = `Invalid enum value. Expected ${g7.joinValues(r36.options)}, received '${r36.received}'`;
      break;
    case c5.invalid_arguments:
      t4 = "Invalid function arguments";
      break;
    case c5.invalid_return_type:
      t4 = "Invalid function return type";
      break;
    case c5.invalid_date:
      t4 = "Invalid date";
      break;
    case c5.invalid_string:
      typeof r36.validation == "object" ? "includes" in r36.validation ? (t4 = `Invalid input: must include "${r36.validation.includes}"`, typeof r36.validation.position == "number" && (t4 = `${t4} at one or more positions greater than or equal to ${r36.validation.position}`)) : "startsWith" in r36.validation ? t4 = `Invalid input: must start with "${r36.validation.startsWith}"` : "endsWith" in r36.validation ? t4 = `Invalid input: must end with "${r36.validation.endsWith}"` : g7.assertNever(r36.validation) : r36.validation !== "regex" ? t4 = `Invalid ${r36.validation}` : t4 = "Invalid";
      break;
    case c5.too_small:
      r36.type === "array" ? t4 = `Array must contain ${r36.exact ? "exactly" : r36.inclusive ? "at least" : "more than"} ${r36.minimum} element(s)` : r36.type === "string" ? t4 = `String must contain ${r36.exact ? "exactly" : r36.inclusive ? "at least" : "over"} ${r36.minimum} character(s)` : r36.type === "number" ? t4 = `Number must be ${r36.exact ? "exactly equal to " : r36.inclusive ? "greater than or equal to " : "greater than "}${r36.minimum}` : r36.type === "bigint" ? t4 = `Number must be ${r36.exact ? "exactly equal to " : r36.inclusive ? "greater than or equal to " : "greater than "}${r36.minimum}` : r36.type === "date" ? t4 = `Date must be ${r36.exact ? "exactly equal to " : r36.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(r36.minimum))}` : t4 = "Invalid input";
      break;
    case c5.too_big:
      r36.type === "array" ? t4 = `Array must contain ${r36.exact ? "exactly" : r36.inclusive ? "at most" : "less than"} ${r36.maximum} element(s)` : r36.type === "string" ? t4 = `String must contain ${r36.exact ? "exactly" : r36.inclusive ? "at most" : "under"} ${r36.maximum} character(s)` : r36.type === "number" ? t4 = `Number must be ${r36.exact ? "exactly" : r36.inclusive ? "less than or equal to" : "less than"} ${r36.maximum}` : r36.type === "bigint" ? t4 = `BigInt must be ${r36.exact ? "exactly" : r36.inclusive ? "less than or equal to" : "less than"} ${r36.maximum}` : r36.type === "date" ? t4 = `Date must be ${r36.exact ? "exactly" : r36.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(r36.maximum))}` : t4 = "Invalid input";
      break;
    case c5.custom:
      t4 = "Invalid input";
      break;
    case c5.invalid_intersection_types:
      t4 = "Intersection results could not be merged";
      break;
    case c5.not_multiple_of:
      t4 = `Number must be a multiple of ${r36.multipleOf}`;
      break;
    case c5.not_finite:
      t4 = "Number must be finite";
      break;
    default:
      t4 = e7.defaultError, g7.assertNever(r36);
  }
  return { message: t4 };
};
var I5 = Pe3;
var Te2 = I5;
function ze2(r36) {
  Te2 = r36;
}
function re4() {
  return Te2;
}
var ue2 = (r36) => {
  let { data: e7, path: t4, errorMaps: s9, issueData: a8 } = r36, n8 = [...t4, ...a8.path || []], i10 = { ...a8, path: n8 };
  if (a8.message !== void 0) return { ...a8, path: n8, message: a8.message };
  let o15 = "", f14 = s9.filter((l20) => !!l20).slice().reverse();
  for (let l20 of f14) o15 = l20(i10, { data: e7, defaultError: o15 }).message;
  return { ...a8, path: n8, message: o15 };
};
var De2 = [];
function d6(r36, e7) {
  let t4 = re4(), s9 = ue2({ issueData: e7, data: r36.data, path: r36.path, errorMaps: [r36.common.contextualErrorMap, r36.schemaErrorMap, t4, t4 === I5 ? void 0 : I5].filter((a8) => !!a8) });
  r36.common.issues.push(s9);
}
var x8 = class r18 {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(e7, t4) {
    let s9 = [];
    for (let a8 of t4) {
      if (a8.status === "aborted") return p5;
      a8.status === "dirty" && e7.dirty(), s9.push(a8.value);
    }
    return { status: e7.value, value: s9 };
  }
  static async mergeObjectAsync(e7, t4) {
    let s9 = [];
    for (let a8 of t4) {
      let n8 = await a8.key, i10 = await a8.value;
      s9.push({ key: n8, value: i10 });
    }
    return r18.mergeObjectSync(e7, s9);
  }
  static mergeObjectSync(e7, t4) {
    let s9 = {};
    for (let a8 of t4) {
      let { key: n8, value: i10 } = a8;
      if (n8.status === "aborted" || i10.status === "aborted") return p5;
      n8.status === "dirty" && e7.dirty(), i10.status === "dirty" && e7.dirty(), n8.value !== "__proto__" && (typeof i10.value < "u" || a8.alwaysSet) && (s9[n8.value] = i10.value);
    }
    return { status: e7.value, value: s9 };
  }
};
var p5 = Object.freeze({ status: "aborted" });
var D8 = (r36) => ({ status: "dirty", value: r36 });
var k10 = (r36) => ({ status: "valid", value: r36 });
var he3 = (r36) => r36.status === "aborted";
var pe3 = (r36) => r36.status === "dirty";
var M9 = (r36) => r36.status === "valid";
var se3 = (r36) => typeof Promise < "u" && r36 instanceof Promise;
var h9;
(function(r36) {
  r36.errToObj = (e7) => typeof e7 == "string" ? { message: e7 } : e7 || {}, r36.toString = (e7) => typeof e7 == "string" ? e7 : e7?.message;
})(h9 || (h9 = {}));
var O8 = class {
  constructor(e7, t4, s9, a8) {
    this._cachedPath = [], this.parent = e7, this.data = t4, this._path = s9, this._key = a8;
  }
  get path() {
    return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
};
var Ce2 = (r36, e7) => {
  if (M9(e7)) return { success: true, data: e7.value };
  if (!r36.common.issues.length) throw new Error("Validation failed but no issues detected.");
  return { success: false, get error() {
    if (this._error) return this._error;
    let t4 = new b7(r36.common.issues);
    return this._error = t4, this._error;
  } };
};
function y4(r36) {
  if (!r36) return {};
  let { errorMap: e7, invalid_type_error: t4, required_error: s9, description: a8 } = r36;
  if (e7 && (t4 || s9)) throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e7 ? { errorMap: e7, description: a8 } : { errorMap: (i10, o15) => {
    let { message: f14 } = r36;
    return i10.code === "invalid_enum_value" ? { message: f14 ?? o15.defaultError } : typeof o15.data > "u" ? { message: f14 ?? s9 ?? o15.defaultError } : i10.code !== "invalid_type" ? { message: o15.defaultError } : { message: f14 ?? t4 ?? o15.defaultError };
  }, description: a8 };
}
var _6 = class {
  get description() {
    return this._def.description;
  }
  _getType(e7) {
    return R6(e7.data);
  }
  _getOrReturnCtx(e7, t4) {
    return t4 || { common: e7.parent.common, data: e7.data, parsedType: R6(e7.data), schemaErrorMap: this._def.errorMap, path: e7.path, parent: e7.parent };
  }
  _processInputParams(e7) {
    return { status: new x8(), ctx: { common: e7.parent.common, data: e7.data, parsedType: R6(e7.data), schemaErrorMap: this._def.errorMap, path: e7.path, parent: e7.parent } };
  }
  _parseSync(e7) {
    let t4 = this._parse(e7);
    if (se3(t4)) throw new Error("Synchronous parse encountered promise.");
    return t4;
  }
  _parseAsync(e7) {
    let t4 = this._parse(e7);
    return Promise.resolve(t4);
  }
  parse(e7, t4) {
    let s9 = this.safeParse(e7, t4);
    if (s9.success) return s9.data;
    throw s9.error;
  }
  safeParse(e7, t4) {
    let s9 = { common: { issues: [], async: t4?.async ?? false, contextualErrorMap: t4?.errorMap }, path: t4?.path || [], schemaErrorMap: this._def.errorMap, parent: null, data: e7, parsedType: R6(e7) }, a8 = this._parseSync({ data: e7, path: s9.path, parent: s9 });
    return Ce2(s9, a8);
  }
  "~validate"(e7) {
    let t4 = { common: { issues: [], async: !!this["~standard"].async }, path: [], schemaErrorMap: this._def.errorMap, parent: null, data: e7, parsedType: R6(e7) };
    if (!this["~standard"].async) try {
      let s9 = this._parseSync({ data: e7, path: [], parent: t4 });
      return M9(s9) ? { value: s9.value } : { issues: t4.common.issues };
    } catch (s9) {
      s9?.message?.toLowerCase()?.includes("encountered") && (this["~standard"].async = true), t4.common = { issues: [], async: true };
    }
    return this._parseAsync({ data: e7, path: [], parent: t4 }).then((s9) => M9(s9) ? { value: s9.value } : { issues: t4.common.issues });
  }
  async parseAsync(e7, t4) {
    let s9 = await this.safeParseAsync(e7, t4);
    if (s9.success) return s9.data;
    throw s9.error;
  }
  async safeParseAsync(e7, t4) {
    let s9 = { common: { issues: [], contextualErrorMap: t4?.errorMap, async: true }, path: t4?.path || [], schemaErrorMap: this._def.errorMap, parent: null, data: e7, parsedType: R6(e7) }, a8 = this._parse({ data: e7, path: s9.path, parent: s9 }), n8 = await (se3(a8) ? a8 : Promise.resolve(a8));
    return Ce2(s9, n8);
  }
  refine(e7, t4) {
    let s9 = (a8) => typeof t4 == "string" || typeof t4 > "u" ? { message: t4 } : typeof t4 == "function" ? t4(a8) : t4;
    return this._refinement((a8, n8) => {
      let i10 = e7(a8), o15 = () => n8.addIssue({ code: c5.custom, ...s9(a8) });
      return typeof Promise < "u" && i10 instanceof Promise ? i10.then((f14) => f14 ? true : (o15(), false)) : i10 ? true : (o15(), false);
    });
  }
  refinement(e7, t4) {
    return this._refinement((s9, a8) => e7(s9) ? true : (a8.addIssue(typeof t4 == "function" ? t4(s9, a8) : t4), false));
  }
  _refinement(e7) {
    return new S10({ schema: this, typeName: m8.ZodEffects, effect: { type: "refinement", refinement: e7 } });
  }
  superRefine(e7) {
    return this._refinement(e7);
  }
  constructor(e7) {
    this.spa = this.safeParseAsync, this._def = e7, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = { version: 1, vendor: "zod", validate: (t4) => this["~validate"](t4) };
  }
  optional() {
    return C8.create(this, this._def);
  }
  nullable() {
    return j11.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return $6.create(this);
  }
  promise() {
    return z7.create(this, this._def);
  }
  or(e7) {
    return J9.create([this, e7], this._def);
  }
  and(e7) {
    return Y3.create(this, e7, this._def);
  }
  transform(e7) {
    return new S10({ ...y4(this._def), schema: this, typeName: m8.ZodEffects, effect: { type: "transform", transform: e7 } });
  }
  default(e7) {
    let t4 = typeof e7 == "function" ? e7 : () => e7;
    return new K8({ ...y4(this._def), innerType: this, defaultValue: t4, typeName: m8.ZodDefault });
  }
  brand() {
    return new le2({ typeName: m8.ZodBranded, type: this, ...y4(this._def) });
  }
  catch(e7) {
    let t4 = typeof e7 == "function" ? e7 : () => e7;
    return new ee3({ ...y4(this._def), innerType: this, catchValue: t4, typeName: m8.ZodCatch });
  }
  describe(e7) {
    let t4 = this.constructor;
    return new t4({ ...this._def, description: e7 });
  }
  pipe(e7) {
    return fe2.create(this, e7);
  }
  readonly() {
    return te3.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
};
var Le2 = /^c[^\s-]{8,}$/i;
var Ue2 = /^[0-9a-z]+$/;
var Fe2 = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
var Be2 = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var We2 = /^[a-z0-9_-]{21}$/i;
var qe2 = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
var Je2 = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
var Ye2 = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var He2 = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
var xe2;
var Ge2 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var Qe2 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
var Xe2 = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
var Ke2 = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var et3 = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
var tt3 = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
var Se4 = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))";
var rt3 = new RegExp(`^${Se4}$`);
function Ae3(r36) {
  let e7 = "[0-5]\\d";
  r36.precision ? e7 = `${e7}\\.\\d{${r36.precision}}` : r36.precision == null && (e7 = `${e7}(\\.\\d+)?`);
  let t4 = r36.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${e7})${t4}`;
}
function st3(r36) {
  return new RegExp(`^${Ae3(r36)}$`);
}
function Re2(r36) {
  let e7 = `${Se4}T${Ae3(r36)}`, t4 = [];
  return t4.push(r36.local ? "Z?" : "Z"), r36.offset && t4.push("([+-]\\d{2}:?\\d{2})"), e7 = `${e7}(${t4.join("|")})`, new RegExp(`^${e7}$`);
}
function at3(r36, e7) {
  return !!((e7 === "v4" || !e7) && Ge2.test(r36) || (e7 === "v6" || !e7) && Xe2.test(r36));
}
function nt3(r36, e7) {
  if (!qe2.test(r36)) return false;
  try {
    let [t4] = r36.split(".");
    if (!t4) return false;
    let s9 = t4.replace(/-/g, "+").replace(/_/g, "/").padEnd(t4.length + (4 - t4.length % 4) % 4, "="), a8 = JSON.parse(atob(s9));
    return !(typeof a8 != "object" || a8 === null || "typ" in a8 && a8?.typ !== "JWT" || !a8.alg || e7 && a8.alg !== e7);
  } catch {
    return false;
  }
}
function it3(r36, e7) {
  return !!((e7 === "v4" || !e7) && Qe2.test(r36) || (e7 === "v6" || !e7) && Ke2.test(r36));
}
var V8 = class r19 extends _6 {
  _parse(e7) {
    if (this._def.coerce && (e7.data = String(e7.data)), this._getType(e7) !== u7.string) {
      let n8 = this._getOrReturnCtx(e7);
      return d6(n8, { code: c5.invalid_type, expected: u7.string, received: n8.parsedType }), p5;
    }
    let s9 = new x8(), a8;
    for (let n8 of this._def.checks) if (n8.kind === "min") e7.data.length < n8.value && (a8 = this._getOrReturnCtx(e7, a8), d6(a8, { code: c5.too_small, minimum: n8.value, type: "string", inclusive: true, exact: false, message: n8.message }), s9.dirty());
    else if (n8.kind === "max") e7.data.length > n8.value && (a8 = this._getOrReturnCtx(e7, a8), d6(a8, { code: c5.too_big, maximum: n8.value, type: "string", inclusive: true, exact: false, message: n8.message }), s9.dirty());
    else if (n8.kind === "length") {
      let i10 = e7.data.length > n8.value, o15 = e7.data.length < n8.value;
      (i10 || o15) && (a8 = this._getOrReturnCtx(e7, a8), i10 ? d6(a8, { code: c5.too_big, maximum: n8.value, type: "string", inclusive: true, exact: true, message: n8.message }) : o15 && d6(a8, { code: c5.too_small, minimum: n8.value, type: "string", inclusive: true, exact: true, message: n8.message }), s9.dirty());
    } else if (n8.kind === "email") Ye2.test(e7.data) || (a8 = this._getOrReturnCtx(e7, a8), d6(a8, { validation: "email", code: c5.invalid_string, message: n8.message }), s9.dirty());
    else if (n8.kind === "emoji") xe2 || (xe2 = new RegExp(He2, "u")), xe2.test(e7.data) || (a8 = this._getOrReturnCtx(e7, a8), d6(a8, { validation: "emoji", code: c5.invalid_string, message: n8.message }), s9.dirty());
    else if (n8.kind === "uuid") Be2.test(e7.data) || (a8 = this._getOrReturnCtx(e7, a8), d6(a8, { validation: "uuid", code: c5.invalid_string, message: n8.message }), s9.dirty());
    else if (n8.kind === "nanoid") We2.test(e7.data) || (a8 = this._getOrReturnCtx(e7, a8), d6(a8, { validation: "nanoid", code: c5.invalid_string, message: n8.message }), s9.dirty());
    else if (n8.kind === "cuid") Le2.test(e7.data) || (a8 = this._getOrReturnCtx(e7, a8), d6(a8, { validation: "cuid", code: c5.invalid_string, message: n8.message }), s9.dirty());
    else if (n8.kind === "cuid2") Ue2.test(e7.data) || (a8 = this._getOrReturnCtx(e7, a8), d6(a8, { validation: "cuid2", code: c5.invalid_string, message: n8.message }), s9.dirty());
    else if (n8.kind === "ulid") Fe2.test(e7.data) || (a8 = this._getOrReturnCtx(e7, a8), d6(a8, { validation: "ulid", code: c5.invalid_string, message: n8.message }), s9.dirty());
    else if (n8.kind === "url") try {
      new URL(e7.data);
    } catch {
      a8 = this._getOrReturnCtx(e7, a8), d6(a8, { validation: "url", code: c5.invalid_string, message: n8.message }), s9.dirty();
    }
    else n8.kind === "regex" ? (n8.regex.lastIndex = 0, n8.regex.test(e7.data) || (a8 = this._getOrReturnCtx(e7, a8), d6(a8, { validation: "regex", code: c5.invalid_string, message: n8.message }), s9.dirty())) : n8.kind === "trim" ? e7.data = e7.data.trim() : n8.kind === "includes" ? e7.data.includes(n8.value, n8.position) || (a8 = this._getOrReturnCtx(e7, a8), d6(a8, { code: c5.invalid_string, validation: { includes: n8.value, position: n8.position }, message: n8.message }), s9.dirty()) : n8.kind === "toLowerCase" ? e7.data = e7.data.toLowerCase() : n8.kind === "toUpperCase" ? e7.data = e7.data.toUpperCase() : n8.kind === "startsWith" ? e7.data.startsWith(n8.value) || (a8 = this._getOrReturnCtx(e7, a8), d6(a8, { code: c5.invalid_string, validation: { startsWith: n8.value }, message: n8.message }), s9.dirty()) : n8.kind === "endsWith" ? e7.data.endsWith(n8.value) || (a8 = this._getOrReturnCtx(e7, a8), d6(a8, { code: c5.invalid_string, validation: { endsWith: n8.value }, message: n8.message }), s9.dirty()) : n8.kind === "datetime" ? Re2(n8).test(e7.data) || (a8 = this._getOrReturnCtx(e7, a8), d6(a8, { code: c5.invalid_string, validation: "datetime", message: n8.message }), s9.dirty()) : n8.kind === "date" ? rt3.test(e7.data) || (a8 = this._getOrReturnCtx(e7, a8), d6(a8, { code: c5.invalid_string, validation: "date", message: n8.message }), s9.dirty()) : n8.kind === "time" ? st3(n8).test(e7.data) || (a8 = this._getOrReturnCtx(e7, a8), d6(a8, { code: c5.invalid_string, validation: "time", message: n8.message }), s9.dirty()) : n8.kind === "duration" ? Je2.test(e7.data) || (a8 = this._getOrReturnCtx(e7, a8), d6(a8, { validation: "duration", code: c5.invalid_string, message: n8.message }), s9.dirty()) : n8.kind === "ip" ? at3(e7.data, n8.version) || (a8 = this._getOrReturnCtx(e7, a8), d6(a8, { validation: "ip", code: c5.invalid_string, message: n8.message }), s9.dirty()) : n8.kind === "jwt" ? nt3(e7.data, n8.alg) || (a8 = this._getOrReturnCtx(e7, a8), d6(a8, { validation: "jwt", code: c5.invalid_string, message: n8.message }), s9.dirty()) : n8.kind === "cidr" ? it3(e7.data, n8.version) || (a8 = this._getOrReturnCtx(e7, a8), d6(a8, { validation: "cidr", code: c5.invalid_string, message: n8.message }), s9.dirty()) : n8.kind === "base64" ? et3.test(e7.data) || (a8 = this._getOrReturnCtx(e7, a8), d6(a8, { validation: "base64", code: c5.invalid_string, message: n8.message }), s9.dirty()) : n8.kind === "base64url" ? tt3.test(e7.data) || (a8 = this._getOrReturnCtx(e7, a8), d6(a8, { validation: "base64url", code: c5.invalid_string, message: n8.message }), s9.dirty()) : g7.assertNever(n8);
    return { status: s9.value, value: e7.data };
  }
  _regex(e7, t4, s9) {
    return this.refinement((a8) => e7.test(a8), { validation: t4, code: c5.invalid_string, ...h9.errToObj(s9) });
  }
  _addCheck(e7) {
    return new r19({ ...this._def, checks: [...this._def.checks, e7] });
  }
  email(e7) {
    return this._addCheck({ kind: "email", ...h9.errToObj(e7) });
  }
  url(e7) {
    return this._addCheck({ kind: "url", ...h9.errToObj(e7) });
  }
  emoji(e7) {
    return this._addCheck({ kind: "emoji", ...h9.errToObj(e7) });
  }
  uuid(e7) {
    return this._addCheck({ kind: "uuid", ...h9.errToObj(e7) });
  }
  nanoid(e7) {
    return this._addCheck({ kind: "nanoid", ...h9.errToObj(e7) });
  }
  cuid(e7) {
    return this._addCheck({ kind: "cuid", ...h9.errToObj(e7) });
  }
  cuid2(e7) {
    return this._addCheck({ kind: "cuid2", ...h9.errToObj(e7) });
  }
  ulid(e7) {
    return this._addCheck({ kind: "ulid", ...h9.errToObj(e7) });
  }
  base64(e7) {
    return this._addCheck({ kind: "base64", ...h9.errToObj(e7) });
  }
  base64url(e7) {
    return this._addCheck({ kind: "base64url", ...h9.errToObj(e7) });
  }
  jwt(e7) {
    return this._addCheck({ kind: "jwt", ...h9.errToObj(e7) });
  }
  ip(e7) {
    return this._addCheck({ kind: "ip", ...h9.errToObj(e7) });
  }
  cidr(e7) {
    return this._addCheck({ kind: "cidr", ...h9.errToObj(e7) });
  }
  datetime(e7) {
    return typeof e7 == "string" ? this._addCheck({ kind: "datetime", precision: null, offset: false, local: false, message: e7 }) : this._addCheck({ kind: "datetime", precision: typeof e7?.precision > "u" ? null : e7?.precision, offset: e7?.offset ?? false, local: e7?.local ?? false, ...h9.errToObj(e7?.message) });
  }
  date(e7) {
    return this._addCheck({ kind: "date", message: e7 });
  }
  time(e7) {
    return typeof e7 == "string" ? this._addCheck({ kind: "time", precision: null, message: e7 }) : this._addCheck({ kind: "time", precision: typeof e7?.precision > "u" ? null : e7?.precision, ...h9.errToObj(e7?.message) });
  }
  duration(e7) {
    return this._addCheck({ kind: "duration", ...h9.errToObj(e7) });
  }
  regex(e7, t4) {
    return this._addCheck({ kind: "regex", regex: e7, ...h9.errToObj(t4) });
  }
  includes(e7, t4) {
    return this._addCheck({ kind: "includes", value: e7, position: t4?.position, ...h9.errToObj(t4?.message) });
  }
  startsWith(e7, t4) {
    return this._addCheck({ kind: "startsWith", value: e7, ...h9.errToObj(t4) });
  }
  endsWith(e7, t4) {
    return this._addCheck({ kind: "endsWith", value: e7, ...h9.errToObj(t4) });
  }
  min(e7, t4) {
    return this._addCheck({ kind: "min", value: e7, ...h9.errToObj(t4) });
  }
  max(e7, t4) {
    return this._addCheck({ kind: "max", value: e7, ...h9.errToObj(t4) });
  }
  length(e7, t4) {
    return this._addCheck({ kind: "length", value: e7, ...h9.errToObj(t4) });
  }
  nonempty(e7) {
    return this.min(1, h9.errToObj(e7));
  }
  trim() {
    return new r19({ ...this._def, checks: [...this._def.checks, { kind: "trim" }] });
  }
  toLowerCase() {
    return new r19({ ...this._def, checks: [...this._def.checks, { kind: "toLowerCase" }] });
  }
  toUpperCase() {
    return new r19({ ...this._def, checks: [...this._def.checks, { kind: "toUpperCase" }] });
  }
  get isDatetime() {
    return !!this._def.checks.find((e7) => e7.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((e7) => e7.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((e7) => e7.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((e7) => e7.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((e7) => e7.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((e7) => e7.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((e7) => e7.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((e7) => e7.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((e7) => e7.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((e7) => e7.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((e7) => e7.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((e7) => e7.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((e7) => e7.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((e7) => e7.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((e7) => e7.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((e7) => e7.kind === "base64url");
  }
  get minLength() {
    let e7 = null;
    for (let t4 of this._def.checks) t4.kind === "min" && (e7 === null || t4.value > e7) && (e7 = t4.value);
    return e7;
  }
  get maxLength() {
    let e7 = null;
    for (let t4 of this._def.checks) t4.kind === "max" && (e7 === null || t4.value < e7) && (e7 = t4.value);
    return e7;
  }
};
V8.create = (r36) => new V8({ checks: [], typeName: m8.ZodString, coerce: r36?.coerce ?? false, ...y4(r36) });
function ot3(r36, e7) {
  let t4 = (r36.toString().split(".")[1] || "").length, s9 = (e7.toString().split(".")[1] || "").length, a8 = t4 > s9 ? t4 : s9, n8 = Number.parseInt(r36.toFixed(a8).replace(".", "")), i10 = Number.parseInt(e7.toFixed(a8).replace(".", ""));
  return n8 % i10 / 10 ** a8;
}
var L8 = class r20 extends _6 {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e7) {
    if (this._def.coerce && (e7.data = Number(e7.data)), this._getType(e7) !== u7.number) {
      let n8 = this._getOrReturnCtx(e7);
      return d6(n8, { code: c5.invalid_type, expected: u7.number, received: n8.parsedType }), p5;
    }
    let s9, a8 = new x8();
    for (let n8 of this._def.checks) n8.kind === "int" ? g7.isInteger(e7.data) || (s9 = this._getOrReturnCtx(e7, s9), d6(s9, { code: c5.invalid_type, expected: "integer", received: "float", message: n8.message }), a8.dirty()) : n8.kind === "min" ? (n8.inclusive ? e7.data < n8.value : e7.data <= n8.value) && (s9 = this._getOrReturnCtx(e7, s9), d6(s9, { code: c5.too_small, minimum: n8.value, type: "number", inclusive: n8.inclusive, exact: false, message: n8.message }), a8.dirty()) : n8.kind === "max" ? (n8.inclusive ? e7.data > n8.value : e7.data >= n8.value) && (s9 = this._getOrReturnCtx(e7, s9), d6(s9, { code: c5.too_big, maximum: n8.value, type: "number", inclusive: n8.inclusive, exact: false, message: n8.message }), a8.dirty()) : n8.kind === "multipleOf" ? ot3(e7.data, n8.value) !== 0 && (s9 = this._getOrReturnCtx(e7, s9), d6(s9, { code: c5.not_multiple_of, multipleOf: n8.value, message: n8.message }), a8.dirty()) : n8.kind === "finite" ? Number.isFinite(e7.data) || (s9 = this._getOrReturnCtx(e7, s9), d6(s9, { code: c5.not_finite, message: n8.message }), a8.dirty()) : g7.assertNever(n8);
    return { status: a8.value, value: e7.data };
  }
  gte(e7, t4) {
    return this.setLimit("min", e7, true, h9.toString(t4));
  }
  gt(e7, t4) {
    return this.setLimit("min", e7, false, h9.toString(t4));
  }
  lte(e7, t4) {
    return this.setLimit("max", e7, true, h9.toString(t4));
  }
  lt(e7, t4) {
    return this.setLimit("max", e7, false, h9.toString(t4));
  }
  setLimit(e7, t4, s9, a8) {
    return new r20({ ...this._def, checks: [...this._def.checks, { kind: e7, value: t4, inclusive: s9, message: h9.toString(a8) }] });
  }
  _addCheck(e7) {
    return new r20({ ...this._def, checks: [...this._def.checks, e7] });
  }
  int(e7) {
    return this._addCheck({ kind: "int", message: h9.toString(e7) });
  }
  positive(e7) {
    return this._addCheck({ kind: "min", value: 0, inclusive: false, message: h9.toString(e7) });
  }
  negative(e7) {
    return this._addCheck({ kind: "max", value: 0, inclusive: false, message: h9.toString(e7) });
  }
  nonpositive(e7) {
    return this._addCheck({ kind: "max", value: 0, inclusive: true, message: h9.toString(e7) });
  }
  nonnegative(e7) {
    return this._addCheck({ kind: "min", value: 0, inclusive: true, message: h9.toString(e7) });
  }
  multipleOf(e7, t4) {
    return this._addCheck({ kind: "multipleOf", value: e7, message: h9.toString(t4) });
  }
  finite(e7) {
    return this._addCheck({ kind: "finite", message: h9.toString(e7) });
  }
  safe(e7) {
    return this._addCheck({ kind: "min", inclusive: true, value: Number.MIN_SAFE_INTEGER, message: h9.toString(e7) })._addCheck({ kind: "max", inclusive: true, value: Number.MAX_SAFE_INTEGER, message: h9.toString(e7) });
  }
  get minValue() {
    let e7 = null;
    for (let t4 of this._def.checks) t4.kind === "min" && (e7 === null || t4.value > e7) && (e7 = t4.value);
    return e7;
  }
  get maxValue() {
    let e7 = null;
    for (let t4 of this._def.checks) t4.kind === "max" && (e7 === null || t4.value < e7) && (e7 = t4.value);
    return e7;
  }
  get isInt() {
    return !!this._def.checks.find((e7) => e7.kind === "int" || e7.kind === "multipleOf" && g7.isInteger(e7.value));
  }
  get isFinite() {
    let e7 = null, t4 = null;
    for (let s9 of this._def.checks) {
      if (s9.kind === "finite" || s9.kind === "int" || s9.kind === "multipleOf") return true;
      s9.kind === "min" ? (t4 === null || s9.value > t4) && (t4 = s9.value) : s9.kind === "max" && (e7 === null || s9.value < e7) && (e7 = s9.value);
    }
    return Number.isFinite(t4) && Number.isFinite(e7);
  }
};
L8.create = (r36) => new L8({ checks: [], typeName: m8.ZodNumber, coerce: r36?.coerce || false, ...y4(r36) });
var U7 = class r21 extends _6 {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(e7) {
    if (this._def.coerce) try {
      e7.data = BigInt(e7.data);
    } catch {
      return this._getInvalidInput(e7);
    }
    if (this._getType(e7) !== u7.bigint) return this._getInvalidInput(e7);
    let s9, a8 = new x8();
    for (let n8 of this._def.checks) n8.kind === "min" ? (n8.inclusive ? e7.data < n8.value : e7.data <= n8.value) && (s9 = this._getOrReturnCtx(e7, s9), d6(s9, { code: c5.too_small, type: "bigint", minimum: n8.value, inclusive: n8.inclusive, message: n8.message }), a8.dirty()) : n8.kind === "max" ? (n8.inclusive ? e7.data > n8.value : e7.data >= n8.value) && (s9 = this._getOrReturnCtx(e7, s9), d6(s9, { code: c5.too_big, type: "bigint", maximum: n8.value, inclusive: n8.inclusive, message: n8.message }), a8.dirty()) : n8.kind === "multipleOf" ? e7.data % n8.value !== BigInt(0) && (s9 = this._getOrReturnCtx(e7, s9), d6(s9, { code: c5.not_multiple_of, multipleOf: n8.value, message: n8.message }), a8.dirty()) : g7.assertNever(n8);
    return { status: a8.value, value: e7.data };
  }
  _getInvalidInput(e7) {
    let t4 = this._getOrReturnCtx(e7);
    return d6(t4, { code: c5.invalid_type, expected: u7.bigint, received: t4.parsedType }), p5;
  }
  gte(e7, t4) {
    return this.setLimit("min", e7, true, h9.toString(t4));
  }
  gt(e7, t4) {
    return this.setLimit("min", e7, false, h9.toString(t4));
  }
  lte(e7, t4) {
    return this.setLimit("max", e7, true, h9.toString(t4));
  }
  lt(e7, t4) {
    return this.setLimit("max", e7, false, h9.toString(t4));
  }
  setLimit(e7, t4, s9, a8) {
    return new r21({ ...this._def, checks: [...this._def.checks, { kind: e7, value: t4, inclusive: s9, message: h9.toString(a8) }] });
  }
  _addCheck(e7) {
    return new r21({ ...this._def, checks: [...this._def.checks, e7] });
  }
  positive(e7) {
    return this._addCheck({ kind: "min", value: BigInt(0), inclusive: false, message: h9.toString(e7) });
  }
  negative(e7) {
    return this._addCheck({ kind: "max", value: BigInt(0), inclusive: false, message: h9.toString(e7) });
  }
  nonpositive(e7) {
    return this._addCheck({ kind: "max", value: BigInt(0), inclusive: true, message: h9.toString(e7) });
  }
  nonnegative(e7) {
    return this._addCheck({ kind: "min", value: BigInt(0), inclusive: true, message: h9.toString(e7) });
  }
  multipleOf(e7, t4) {
    return this._addCheck({ kind: "multipleOf", value: e7, message: h9.toString(t4) });
  }
  get minValue() {
    let e7 = null;
    for (let t4 of this._def.checks) t4.kind === "min" && (e7 === null || t4.value > e7) && (e7 = t4.value);
    return e7;
  }
  get maxValue() {
    let e7 = null;
    for (let t4 of this._def.checks) t4.kind === "max" && (e7 === null || t4.value < e7) && (e7 = t4.value);
    return e7;
  }
};
U7.create = (r36) => new U7({ checks: [], typeName: m8.ZodBigInt, coerce: r36?.coerce ?? false, ...y4(r36) });
var F9 = class extends _6 {
  _parse(e7) {
    if (this._def.coerce && (e7.data = !!e7.data), this._getType(e7) !== u7.boolean) {
      let s9 = this._getOrReturnCtx(e7);
      return d6(s9, { code: c5.invalid_type, expected: u7.boolean, received: s9.parsedType }), p5;
    }
    return k10(e7.data);
  }
};
F9.create = (r36) => new F9({ typeName: m8.ZodBoolean, coerce: r36?.coerce || false, ...y4(r36) });
var B7 = class r22 extends _6 {
  _parse(e7) {
    if (this._def.coerce && (e7.data = new Date(e7.data)), this._getType(e7) !== u7.date) {
      let n8 = this._getOrReturnCtx(e7);
      return d6(n8, { code: c5.invalid_type, expected: u7.date, received: n8.parsedType }), p5;
    }
    if (Number.isNaN(e7.data.getTime())) {
      let n8 = this._getOrReturnCtx(e7);
      return d6(n8, { code: c5.invalid_date }), p5;
    }
    let s9 = new x8(), a8;
    for (let n8 of this._def.checks) n8.kind === "min" ? e7.data.getTime() < n8.value && (a8 = this._getOrReturnCtx(e7, a8), d6(a8, { code: c5.too_small, message: n8.message, inclusive: true, exact: false, minimum: n8.value, type: "date" }), s9.dirty()) : n8.kind === "max" ? e7.data.getTime() > n8.value && (a8 = this._getOrReturnCtx(e7, a8), d6(a8, { code: c5.too_big, message: n8.message, inclusive: true, exact: false, maximum: n8.value, type: "date" }), s9.dirty()) : g7.assertNever(n8);
    return { status: s9.value, value: new Date(e7.data.getTime()) };
  }
  _addCheck(e7) {
    return new r22({ ...this._def, checks: [...this._def.checks, e7] });
  }
  min(e7, t4) {
    return this._addCheck({ kind: "min", value: e7.getTime(), message: h9.toString(t4) });
  }
  max(e7, t4) {
    return this._addCheck({ kind: "max", value: e7.getTime(), message: h9.toString(t4) });
  }
  get minDate() {
    let e7 = null;
    for (let t4 of this._def.checks) t4.kind === "min" && (e7 === null || t4.value > e7) && (e7 = t4.value);
    return e7 != null ? new Date(e7) : null;
  }
  get maxDate() {
    let e7 = null;
    for (let t4 of this._def.checks) t4.kind === "max" && (e7 === null || t4.value < e7) && (e7 = t4.value);
    return e7 != null ? new Date(e7) : null;
  }
};
B7.create = (r36) => new B7({ checks: [], coerce: r36?.coerce || false, typeName: m8.ZodDate, ...y4(r36) });
var ne2 = class extends _6 {
  _parse(e7) {
    if (this._getType(e7) !== u7.symbol) {
      let s9 = this._getOrReturnCtx(e7);
      return d6(s9, { code: c5.invalid_type, expected: u7.symbol, received: s9.parsedType }), p5;
    }
    return k10(e7.data);
  }
};
ne2.create = (r36) => new ne2({ typeName: m8.ZodSymbol, ...y4(r36) });
var W5 = class extends _6 {
  _parse(e7) {
    if (this._getType(e7) !== u7.undefined) {
      let s9 = this._getOrReturnCtx(e7);
      return d6(s9, { code: c5.invalid_type, expected: u7.undefined, received: s9.parsedType }), p5;
    }
    return k10(e7.data);
  }
};
W5.create = (r36) => new W5({ typeName: m8.ZodUndefined, ...y4(r36) });
var q7 = class extends _6 {
  _parse(e7) {
    if (this._getType(e7) !== u7.null) {
      let s9 = this._getOrReturnCtx(e7);
      return d6(s9, { code: c5.invalid_type, expected: u7.null, received: s9.parsedType }), p5;
    }
    return k10(e7.data);
  }
};
q7.create = (r36) => new q7({ typeName: m8.ZodNull, ...y4(r36) });
var P7 = class extends _6 {
  constructor() {
    super(...arguments), this._any = true;
  }
  _parse(e7) {
    return k10(e7.data);
  }
};
P7.create = (r36) => new P7({ typeName: m8.ZodAny, ...y4(r36) });
var Z7 = class extends _6 {
  constructor() {
    super(...arguments), this._unknown = true;
  }
  _parse(e7) {
    return k10(e7.data);
  }
};
Z7.create = (r36) => new Z7({ typeName: m8.ZodUnknown, ...y4(r36) });
var A10 = class extends _6 {
  _parse(e7) {
    let t4 = this._getOrReturnCtx(e7);
    return d6(t4, { code: c5.invalid_type, expected: u7.never, received: t4.parsedType }), p5;
  }
};
A10.create = (r36) => new A10({ typeName: m8.ZodNever, ...y4(r36) });
var ie2 = class extends _6 {
  _parse(e7) {
    if (this._getType(e7) !== u7.undefined) {
      let s9 = this._getOrReturnCtx(e7);
      return d6(s9, { code: c5.invalid_type, expected: u7.void, received: s9.parsedType }), p5;
    }
    return k10(e7.data);
  }
};
ie2.create = (r36) => new ie2({ typeName: m8.ZodVoid, ...y4(r36) });
var $6 = class r23 extends _6 {
  _parse(e7) {
    let { ctx: t4, status: s9 } = this._processInputParams(e7), a8 = this._def;
    if (t4.parsedType !== u7.array) return d6(t4, { code: c5.invalid_type, expected: u7.array, received: t4.parsedType }), p5;
    if (a8.exactLength !== null) {
      let i10 = t4.data.length > a8.exactLength.value, o15 = t4.data.length < a8.exactLength.value;
      (i10 || o15) && (d6(t4, { code: i10 ? c5.too_big : c5.too_small, minimum: o15 ? a8.exactLength.value : void 0, maximum: i10 ? a8.exactLength.value : void 0, type: "array", inclusive: true, exact: true, message: a8.exactLength.message }), s9.dirty());
    }
    if (a8.minLength !== null && t4.data.length < a8.minLength.value && (d6(t4, { code: c5.too_small, minimum: a8.minLength.value, type: "array", inclusive: true, exact: false, message: a8.minLength.message }), s9.dirty()), a8.maxLength !== null && t4.data.length > a8.maxLength.value && (d6(t4, { code: c5.too_big, maximum: a8.maxLength.value, type: "array", inclusive: true, exact: false, message: a8.maxLength.message }), s9.dirty()), t4.common.async) return Promise.all([...t4.data].map((i10, o15) => a8.type._parseAsync(new O8(t4, i10, t4.path, o15)))).then((i10) => x8.mergeArray(s9, i10));
    let n8 = [...t4.data].map((i10, o15) => a8.type._parseSync(new O8(t4, i10, t4.path, o15)));
    return x8.mergeArray(s9, n8);
  }
  get element() {
    return this._def.type;
  }
  min(e7, t4) {
    return new r23({ ...this._def, minLength: { value: e7, message: h9.toString(t4) } });
  }
  max(e7, t4) {
    return new r23({ ...this._def, maxLength: { value: e7, message: h9.toString(t4) } });
  }
  length(e7, t4) {
    return new r23({ ...this._def, exactLength: { value: e7, message: h9.toString(t4) } });
  }
  nonempty(e7) {
    return this.min(1, e7);
  }
};
$6.create = (r36, e7) => new $6({ type: r36, minLength: null, maxLength: null, exactLength: null, typeName: m8.ZodArray, ...y4(e7) });
function ae3(r36) {
  if (r36 instanceof w9) {
    let e7 = {};
    for (let t4 in r36.shape) {
      let s9 = r36.shape[t4];
      e7[t4] = C8.create(ae3(s9));
    }
    return new w9({ ...r36._def, shape: () => e7 });
  } else return r36 instanceof $6 ? new $6({ ...r36._def, type: ae3(r36.element) }) : r36 instanceof C8 ? C8.create(ae3(r36.unwrap())) : r36 instanceof j11 ? j11.create(ae3(r36.unwrap())) : r36 instanceof N6 ? N6.create(r36.items.map((e7) => ae3(e7))) : r36;
}
var w9 = class r24 extends _6 {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    let e7 = this._def.shape(), t4 = g7.objectKeys(e7);
    return this._cached = { shape: e7, keys: t4 }, this._cached;
  }
  _parse(e7) {
    if (this._getType(e7) !== u7.object) {
      let l20 = this._getOrReturnCtx(e7);
      return d6(l20, { code: c5.invalid_type, expected: u7.object, received: l20.parsedType }), p5;
    }
    let { status: s9, ctx: a8 } = this._processInputParams(e7), { shape: n8, keys: i10 } = this._getCached(), o15 = [];
    if (!(this._def.catchall instanceof A10 && this._def.unknownKeys === "strip")) for (let l20 in a8.data) i10.includes(l20) || o15.push(l20);
    let f14 = [];
    for (let l20 of i10) {
      let v16 = n8[l20], T20 = a8.data[l20];
      f14.push({ key: { status: "valid", value: l20 }, value: v16._parse(new O8(a8, T20, a8.path, l20)), alwaysSet: l20 in a8.data });
    }
    if (this._def.catchall instanceof A10) {
      let l20 = this._def.unknownKeys;
      if (l20 === "passthrough") for (let v16 of o15) f14.push({ key: { status: "valid", value: v16 }, value: { status: "valid", value: a8.data[v16] } });
      else if (l20 === "strict") o15.length > 0 && (d6(a8, { code: c5.unrecognized_keys, keys: o15 }), s9.dirty());
      else if (l20 !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      let l20 = this._def.catchall;
      for (let v16 of o15) {
        let T20 = a8.data[v16];
        f14.push({ key: { status: "valid", value: v16 }, value: l20._parse(new O8(a8, T20, a8.path, v16)), alwaysSet: v16 in a8.data });
      }
    }
    return a8.common.async ? Promise.resolve().then(async () => {
      let l20 = [];
      for (let v16 of f14) {
        let T20 = await v16.key, we4 = await v16.value;
        l20.push({ key: T20, value: we4, alwaysSet: v16.alwaysSet });
      }
      return l20;
    }).then((l20) => x8.mergeObjectSync(s9, l20)) : x8.mergeObjectSync(s9, f14);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e7) {
    return h9.errToObj, new r24({ ...this._def, unknownKeys: "strict", ...e7 !== void 0 ? { errorMap: (t4, s9) => {
      let a8 = this._def.errorMap?.(t4, s9).message ?? s9.defaultError;
      return t4.code === "unrecognized_keys" ? { message: h9.errToObj(e7).message ?? a8 } : { message: a8 };
    } } : {} });
  }
  strip() {
    return new r24({ ...this._def, unknownKeys: "strip" });
  }
  passthrough() {
    return new r24({ ...this._def, unknownKeys: "passthrough" });
  }
  extend(e7) {
    return new r24({ ...this._def, shape: () => ({ ...this._def.shape(), ...e7 }) });
  }
  merge(e7) {
    return new r24({ unknownKeys: e7._def.unknownKeys, catchall: e7._def.catchall, shape: () => ({ ...this._def.shape(), ...e7._def.shape() }), typeName: m8.ZodObject });
  }
  setKey(e7, t4) {
    return this.augment({ [e7]: t4 });
  }
  catchall(e7) {
    return new r24({ ...this._def, catchall: e7 });
  }
  pick(e7) {
    let t4 = {};
    for (let s9 of g7.objectKeys(e7)) e7[s9] && this.shape[s9] && (t4[s9] = this.shape[s9]);
    return new r24({ ...this._def, shape: () => t4 });
  }
  omit(e7) {
    let t4 = {};
    for (let s9 of g7.objectKeys(this.shape)) e7[s9] || (t4[s9] = this.shape[s9]);
    return new r24({ ...this._def, shape: () => t4 });
  }
  deepPartial() {
    return ae3(this);
  }
  partial(e7) {
    let t4 = {};
    for (let s9 of g7.objectKeys(this.shape)) {
      let a8 = this.shape[s9];
      e7 && !e7[s9] ? t4[s9] = a8 : t4[s9] = a8.optional();
    }
    return new r24({ ...this._def, shape: () => t4 });
  }
  required(e7) {
    let t4 = {};
    for (let s9 of g7.objectKeys(this.shape)) if (e7 && !e7[s9]) t4[s9] = this.shape[s9];
    else {
      let n8 = this.shape[s9];
      for (; n8 instanceof C8; ) n8 = n8._def.innerType;
      t4[s9] = n8;
    }
    return new r24({ ...this._def, shape: () => t4 });
  }
  keyof() {
    return Ne2(g7.objectKeys(this.shape));
  }
};
w9.create = (r36, e7) => new w9({ shape: () => r36, unknownKeys: "strip", catchall: A10.create(), typeName: m8.ZodObject, ...y4(e7) });
w9.strictCreate = (r36, e7) => new w9({ shape: () => r36, unknownKeys: "strict", catchall: A10.create(), typeName: m8.ZodObject, ...y4(e7) });
w9.lazycreate = (r36, e7) => new w9({ shape: r36, unknownKeys: "strip", catchall: A10.create(), typeName: m8.ZodObject, ...y4(e7) });
var J9 = class extends _6 {
  _parse(e7) {
    let { ctx: t4 } = this._processInputParams(e7), s9 = this._def.options;
    function a8(n8) {
      for (let o15 of n8) if (o15.result.status === "valid") return o15.result;
      for (let o15 of n8) if (o15.result.status === "dirty") return t4.common.issues.push(...o15.ctx.common.issues), o15.result;
      let i10 = n8.map((o15) => new b7(o15.ctx.common.issues));
      return d6(t4, { code: c5.invalid_union, unionErrors: i10 }), p5;
    }
    if (t4.common.async) return Promise.all(s9.map(async (n8) => {
      let i10 = { ...t4, common: { ...t4.common, issues: [] }, parent: null };
      return { result: await n8._parseAsync({ data: t4.data, path: t4.path, parent: i10 }), ctx: i10 };
    })).then(a8);
    {
      let n8, i10 = [];
      for (let f14 of s9) {
        let l20 = { ...t4, common: { ...t4.common, issues: [] }, parent: null }, v16 = f14._parseSync({ data: t4.data, path: t4.path, parent: l20 });
        if (v16.status === "valid") return v16;
        v16.status === "dirty" && !n8 && (n8 = { result: v16, ctx: l20 }), l20.common.issues.length && i10.push(l20.common.issues);
      }
      if (n8) return t4.common.issues.push(...n8.ctx.common.issues), n8.result;
      let o15 = i10.map((f14) => new b7(f14));
      return d6(t4, { code: c5.invalid_union, unionErrors: o15 }), p5;
    }
  }
  get options() {
    return this._def.options;
  }
};
J9.create = (r36, e7) => new J9({ options: r36, typeName: m8.ZodUnion, ...y4(e7) });
var E8 = (r36) => r36 instanceof H7 ? E8(r36.schema) : r36 instanceof S10 ? E8(r36.innerType()) : r36 instanceof G8 ? [r36.value] : r36 instanceof Q8 ? r36.options : r36 instanceof X4 ? g7.objectValues(r36.enum) : r36 instanceof K8 ? E8(r36._def.innerType) : r36 instanceof W5 ? [void 0] : r36 instanceof q7 ? [null] : r36 instanceof C8 ? [void 0, ...E8(r36.unwrap())] : r36 instanceof j11 ? [null, ...E8(r36.unwrap())] : r36 instanceof le2 || r36 instanceof te3 ? E8(r36.unwrap()) : r36 instanceof ee3 ? E8(r36._def.innerType) : [];
var me2 = class r25 extends _6 {
  _parse(e7) {
    let { ctx: t4 } = this._processInputParams(e7);
    if (t4.parsedType !== u7.object) return d6(t4, { code: c5.invalid_type, expected: u7.object, received: t4.parsedType }), p5;
    let s9 = this.discriminator, a8 = t4.data[s9], n8 = this.optionsMap.get(a8);
    return n8 ? t4.common.async ? n8._parseAsync({ data: t4.data, path: t4.path, parent: t4 }) : n8._parseSync({ data: t4.data, path: t4.path, parent: t4 }) : (d6(t4, { code: c5.invalid_union_discriminator, options: Array.from(this.optionsMap.keys()), path: [s9] }), p5);
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
  static create(e7, t4, s9) {
    let a8 = /* @__PURE__ */ new Map();
    for (let n8 of t4) {
      let i10 = E8(n8.shape[e7]);
      if (!i10.length) throw new Error(`A discriminator value for key \`${e7}\` could not be extracted from all schema options`);
      for (let o15 of i10) {
        if (a8.has(o15)) throw new Error(`Discriminator property ${String(e7)} has duplicate value ${String(o15)}`);
        a8.set(o15, n8);
      }
    }
    return new r25({ typeName: m8.ZodDiscriminatedUnion, discriminator: e7, options: t4, optionsMap: a8, ...y4(s9) });
  }
};
function ke2(r36, e7) {
  let t4 = R6(r36), s9 = R6(e7);
  if (r36 === e7) return { valid: true, data: r36 };
  if (t4 === u7.object && s9 === u7.object) {
    let a8 = g7.objectKeys(e7), n8 = g7.objectKeys(r36).filter((o15) => a8.indexOf(o15) !== -1), i10 = { ...r36, ...e7 };
    for (let o15 of n8) {
      let f14 = ke2(r36[o15], e7[o15]);
      if (!f14.valid) return { valid: false };
      i10[o15] = f14.data;
    }
    return { valid: true, data: i10 };
  } else if (t4 === u7.array && s9 === u7.array) {
    if (r36.length !== e7.length) return { valid: false };
    let a8 = [];
    for (let n8 = 0; n8 < r36.length; n8++) {
      let i10 = r36[n8], o15 = e7[n8], f14 = ke2(i10, o15);
      if (!f14.valid) return { valid: false };
      a8.push(f14.data);
    }
    return { valid: true, data: a8 };
  } else return t4 === u7.date && s9 === u7.date && +r36 == +e7 ? { valid: true, data: r36 } : { valid: false };
}
var Y3 = class extends _6 {
  _parse(e7) {
    let { status: t4, ctx: s9 } = this._processInputParams(e7), a8 = (n8, i10) => {
      if (he3(n8) || he3(i10)) return p5;
      let o15 = ke2(n8.value, i10.value);
      return o15.valid ? ((pe3(n8) || pe3(i10)) && t4.dirty(), { status: t4.value, value: o15.data }) : (d6(s9, { code: c5.invalid_intersection_types }), p5);
    };
    return s9.common.async ? Promise.all([this._def.left._parseAsync({ data: s9.data, path: s9.path, parent: s9 }), this._def.right._parseAsync({ data: s9.data, path: s9.path, parent: s9 })]).then(([n8, i10]) => a8(n8, i10)) : a8(this._def.left._parseSync({ data: s9.data, path: s9.path, parent: s9 }), this._def.right._parseSync({ data: s9.data, path: s9.path, parent: s9 }));
  }
};
Y3.create = (r36, e7, t4) => new Y3({ left: r36, right: e7, typeName: m8.ZodIntersection, ...y4(t4) });
var N6 = class r26 extends _6 {
  _parse(e7) {
    let { status: t4, ctx: s9 } = this._processInputParams(e7);
    if (s9.parsedType !== u7.array) return d6(s9, { code: c5.invalid_type, expected: u7.array, received: s9.parsedType }), p5;
    if (s9.data.length < this._def.items.length) return d6(s9, { code: c5.too_small, minimum: this._def.items.length, inclusive: true, exact: false, type: "array" }), p5;
    !this._def.rest && s9.data.length > this._def.items.length && (d6(s9, { code: c5.too_big, maximum: this._def.items.length, inclusive: true, exact: false, type: "array" }), t4.dirty());
    let n8 = [...s9.data].map((i10, o15) => {
      let f14 = this._def.items[o15] || this._def.rest;
      return f14 ? f14._parse(new O8(s9, i10, s9.path, o15)) : null;
    }).filter((i10) => !!i10);
    return s9.common.async ? Promise.all(n8).then((i10) => x8.mergeArray(t4, i10)) : x8.mergeArray(t4, n8);
  }
  get items() {
    return this._def.items;
  }
  rest(e7) {
    return new r26({ ...this._def, rest: e7 });
  }
};
N6.create = (r36, e7) => {
  if (!Array.isArray(r36)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new N6({ items: r36, typeName: m8.ZodTuple, rest: null, ...y4(e7) });
};
var ye2 = class r27 extends _6 {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e7) {
    let { status: t4, ctx: s9 } = this._processInputParams(e7);
    if (s9.parsedType !== u7.object) return d6(s9, { code: c5.invalid_type, expected: u7.object, received: s9.parsedType }), p5;
    let a8 = [], n8 = this._def.keyType, i10 = this._def.valueType;
    for (let o15 in s9.data) a8.push({ key: n8._parse(new O8(s9, o15, s9.path, o15)), value: i10._parse(new O8(s9, s9.data[o15], s9.path, o15)), alwaysSet: o15 in s9.data });
    return s9.common.async ? x8.mergeObjectAsync(t4, a8) : x8.mergeObjectSync(t4, a8);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e7, t4, s9) {
    return t4 instanceof _6 ? new r27({ keyType: e7, valueType: t4, typeName: m8.ZodRecord, ...y4(s9) }) : new r27({ keyType: V8.create(), valueType: e7, typeName: m8.ZodRecord, ...y4(t4) });
  }
};
var oe2 = class extends _6 {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e7) {
    let { status: t4, ctx: s9 } = this._processInputParams(e7);
    if (s9.parsedType !== u7.map) return d6(s9, { code: c5.invalid_type, expected: u7.map, received: s9.parsedType }), p5;
    let a8 = this._def.keyType, n8 = this._def.valueType, i10 = [...s9.data.entries()].map(([o15, f14], l20) => ({ key: a8._parse(new O8(s9, o15, s9.path, [l20, "key"])), value: n8._parse(new O8(s9, f14, s9.path, [l20, "value"])) }));
    if (s9.common.async) {
      let o15 = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (let f14 of i10) {
          let l20 = await f14.key, v16 = await f14.value;
          if (l20.status === "aborted" || v16.status === "aborted") return p5;
          (l20.status === "dirty" || v16.status === "dirty") && t4.dirty(), o15.set(l20.value, v16.value);
        }
        return { status: t4.value, value: o15 };
      });
    } else {
      let o15 = /* @__PURE__ */ new Map();
      for (let f14 of i10) {
        let l20 = f14.key, v16 = f14.value;
        if (l20.status === "aborted" || v16.status === "aborted") return p5;
        (l20.status === "dirty" || v16.status === "dirty") && t4.dirty(), o15.set(l20.value, v16.value);
      }
      return { status: t4.value, value: o15 };
    }
  }
};
oe2.create = (r36, e7, t4) => new oe2({ valueType: e7, keyType: r36, typeName: m8.ZodMap, ...y4(t4) });
var ce2 = class r28 extends _6 {
  _parse(e7) {
    let { status: t4, ctx: s9 } = this._processInputParams(e7);
    if (s9.parsedType !== u7.set) return d6(s9, { code: c5.invalid_type, expected: u7.set, received: s9.parsedType }), p5;
    let a8 = this._def;
    a8.minSize !== null && s9.data.size < a8.minSize.value && (d6(s9, { code: c5.too_small, minimum: a8.minSize.value, type: "set", inclusive: true, exact: false, message: a8.minSize.message }), t4.dirty()), a8.maxSize !== null && s9.data.size > a8.maxSize.value && (d6(s9, { code: c5.too_big, maximum: a8.maxSize.value, type: "set", inclusive: true, exact: false, message: a8.maxSize.message }), t4.dirty());
    let n8 = this._def.valueType;
    function i10(f14) {
      let l20 = /* @__PURE__ */ new Set();
      for (let v16 of f14) {
        if (v16.status === "aborted") return p5;
        v16.status === "dirty" && t4.dirty(), l20.add(v16.value);
      }
      return { status: t4.value, value: l20 };
    }
    let o15 = [...s9.data.values()].map((f14, l20) => n8._parse(new O8(s9, f14, s9.path, l20)));
    return s9.common.async ? Promise.all(o15).then((f14) => i10(f14)) : i10(o15);
  }
  min(e7, t4) {
    return new r28({ ...this._def, minSize: { value: e7, message: h9.toString(t4) } });
  }
  max(e7, t4) {
    return new r28({ ...this._def, maxSize: { value: e7, message: h9.toString(t4) } });
  }
  size(e7, t4) {
    return this.min(e7, t4).max(e7, t4);
  }
  nonempty(e7) {
    return this.min(1, e7);
  }
};
ce2.create = (r36, e7) => new ce2({ valueType: r36, minSize: null, maxSize: null, typeName: m8.ZodSet, ...y4(e7) });
var _e2 = class r29 extends _6 {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(e7) {
    let { ctx: t4 } = this._processInputParams(e7);
    if (t4.parsedType !== u7.function) return d6(t4, { code: c5.invalid_type, expected: u7.function, received: t4.parsedType }), p5;
    function s9(o15, f14) {
      return ue2({ data: o15, path: t4.path, errorMaps: [t4.common.contextualErrorMap, t4.schemaErrorMap, re4(), I5].filter((l20) => !!l20), issueData: { code: c5.invalid_arguments, argumentsError: f14 } });
    }
    function a8(o15, f14) {
      return ue2({ data: o15, path: t4.path, errorMaps: [t4.common.contextualErrorMap, t4.schemaErrorMap, re4(), I5].filter((l20) => !!l20), issueData: { code: c5.invalid_return_type, returnTypeError: f14 } });
    }
    let n8 = { errorMap: t4.common.contextualErrorMap }, i10 = t4.data;
    if (this._def.returns instanceof z7) {
      let o15 = this;
      return k10(async function(...f14) {
        let l20 = new b7([]), v16 = await o15._def.args.parseAsync(f14, n8).catch((ge7) => {
          throw l20.addIssue(s9(f14, ge7)), l20;
        }), T20 = await Reflect.apply(i10, this, v16);
        return await o15._def.returns._def.type.parseAsync(T20, n8).catch((ge7) => {
          throw l20.addIssue(a8(T20, ge7)), l20;
        });
      });
    } else {
      let o15 = this;
      return k10(function(...f14) {
        let l20 = o15._def.args.safeParse(f14, n8);
        if (!l20.success) throw new b7([s9(f14, l20.error)]);
        let v16 = Reflect.apply(i10, this, l20.data), T20 = o15._def.returns.safeParse(v16, n8);
        if (!T20.success) throw new b7([a8(v16, T20.error)]);
        return T20.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...e7) {
    return new r29({ ...this._def, args: N6.create(e7).rest(Z7.create()) });
  }
  returns(e7) {
    return new r29({ ...this._def, returns: e7 });
  }
  implement(e7) {
    return this.parse(e7);
  }
  strictImplement(e7) {
    return this.parse(e7);
  }
  static create(e7, t4, s9) {
    return new r29({ args: e7 || N6.create([]).rest(Z7.create()), returns: t4 || Z7.create(), typeName: m8.ZodFunction, ...y4(s9) });
  }
};
var H7 = class extends _6 {
  get schema() {
    return this._def.getter();
  }
  _parse(e7) {
    let { ctx: t4 } = this._processInputParams(e7);
    return this._def.getter()._parse({ data: t4.data, path: t4.path, parent: t4 });
  }
};
H7.create = (r36, e7) => new H7({ getter: r36, typeName: m8.ZodLazy, ...y4(e7) });
var G8 = class extends _6 {
  _parse(e7) {
    if (e7.data !== this._def.value) {
      let t4 = this._getOrReturnCtx(e7);
      return d6(t4, { received: t4.data, code: c5.invalid_literal, expected: this._def.value }), p5;
    }
    return { status: "valid", value: e7.data };
  }
  get value() {
    return this._def.value;
  }
};
G8.create = (r36, e7) => new G8({ value: r36, typeName: m8.ZodLiteral, ...y4(e7) });
function Ne2(r36, e7) {
  return new Q8({ values: r36, typeName: m8.ZodEnum, ...y4(e7) });
}
var Q8 = class r30 extends _6 {
  _parse(e7) {
    if (typeof e7.data != "string") {
      let t4 = this._getOrReturnCtx(e7), s9 = this._def.values;
      return d6(t4, { expected: g7.joinValues(s9), received: t4.parsedType, code: c5.invalid_type }), p5;
    }
    if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(e7.data)) {
      let t4 = this._getOrReturnCtx(e7), s9 = this._def.values;
      return d6(t4, { received: t4.data, code: c5.invalid_enum_value, options: s9 }), p5;
    }
    return k10(e7.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    let e7 = {};
    for (let t4 of this._def.values) e7[t4] = t4;
    return e7;
  }
  get Values() {
    let e7 = {};
    for (let t4 of this._def.values) e7[t4] = t4;
    return e7;
  }
  get Enum() {
    let e7 = {};
    for (let t4 of this._def.values) e7[t4] = t4;
    return e7;
  }
  extract(e7, t4 = this._def) {
    return r30.create(e7, { ...this._def, ...t4 });
  }
  exclude(e7, t4 = this._def) {
    return r30.create(this.options.filter((s9) => !e7.includes(s9)), { ...this._def, ...t4 });
  }
};
Q8.create = Ne2;
var X4 = class extends _6 {
  _parse(e7) {
    let t4 = g7.getValidEnumValues(this._def.values), s9 = this._getOrReturnCtx(e7);
    if (s9.parsedType !== u7.string && s9.parsedType !== u7.number) {
      let a8 = g7.objectValues(t4);
      return d6(s9, { expected: g7.joinValues(a8), received: s9.parsedType, code: c5.invalid_type }), p5;
    }
    if (this._cache || (this._cache = new Set(g7.getValidEnumValues(this._def.values))), !this._cache.has(e7.data)) {
      let a8 = g7.objectValues(t4);
      return d6(s9, { received: s9.data, code: c5.invalid_enum_value, options: a8 }), p5;
    }
    return k10(e7.data);
  }
  get enum() {
    return this._def.values;
  }
};
X4.create = (r36, e7) => new X4({ values: r36, typeName: m8.ZodNativeEnum, ...y4(e7) });
var z7 = class extends _6 {
  unwrap() {
    return this._def.type;
  }
  _parse(e7) {
    let { ctx: t4 } = this._processInputParams(e7);
    if (t4.parsedType !== u7.promise && t4.common.async === false) return d6(t4, { code: c5.invalid_type, expected: u7.promise, received: t4.parsedType }), p5;
    let s9 = t4.parsedType === u7.promise ? t4.data : Promise.resolve(t4.data);
    return k10(s9.then((a8) => this._def.type.parseAsync(a8, { path: t4.path, errorMap: t4.common.contextualErrorMap })));
  }
};
z7.create = (r36, e7) => new z7({ type: r36, typeName: m8.ZodPromise, ...y4(e7) });
var S10 = class extends _6 {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === m8.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e7) {
    let { status: t4, ctx: s9 } = this._processInputParams(e7), a8 = this._def.effect || null, n8 = { addIssue: (i10) => {
      d6(s9, i10), i10.fatal ? t4.abort() : t4.dirty();
    }, get path() {
      return s9.path;
    } };
    if (n8.addIssue = n8.addIssue.bind(n8), a8.type === "preprocess") {
      let i10 = a8.transform(s9.data, n8);
      if (s9.common.async) return Promise.resolve(i10).then(async (o15) => {
        if (t4.value === "aborted") return p5;
        let f14 = await this._def.schema._parseAsync({ data: o15, path: s9.path, parent: s9 });
        return f14.status === "aborted" ? p5 : f14.status === "dirty" ? D8(f14.value) : t4.value === "dirty" ? D8(f14.value) : f14;
      });
      {
        if (t4.value === "aborted") return p5;
        let o15 = this._def.schema._parseSync({ data: i10, path: s9.path, parent: s9 });
        return o15.status === "aborted" ? p5 : o15.status === "dirty" ? D8(o15.value) : t4.value === "dirty" ? D8(o15.value) : o15;
      }
    }
    if (a8.type === "refinement") {
      let i10 = (o15) => {
        let f14 = a8.refinement(o15, n8);
        if (s9.common.async) return Promise.resolve(f14);
        if (f14 instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return o15;
      };
      if (s9.common.async === false) {
        let o15 = this._def.schema._parseSync({ data: s9.data, path: s9.path, parent: s9 });
        return o15.status === "aborted" ? p5 : (o15.status === "dirty" && t4.dirty(), i10(o15.value), { status: t4.value, value: o15.value });
      } else return this._def.schema._parseAsync({ data: s9.data, path: s9.path, parent: s9 }).then((o15) => o15.status === "aborted" ? p5 : (o15.status === "dirty" && t4.dirty(), i10(o15.value).then(() => ({ status: t4.value, value: o15.value }))));
    }
    if (a8.type === "transform") if (s9.common.async === false) {
      let i10 = this._def.schema._parseSync({ data: s9.data, path: s9.path, parent: s9 });
      if (!M9(i10)) return p5;
      let o15 = a8.transform(i10.value, n8);
      if (o15 instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
      return { status: t4.value, value: o15 };
    } else return this._def.schema._parseAsync({ data: s9.data, path: s9.path, parent: s9 }).then((i10) => M9(i10) ? Promise.resolve(a8.transform(i10.value, n8)).then((o15) => ({ status: t4.value, value: o15 })) : p5);
    g7.assertNever(a8);
  }
};
S10.create = (r36, e7, t4) => new S10({ schema: r36, typeName: m8.ZodEffects, effect: e7, ...y4(t4) });
S10.createWithPreprocess = (r36, e7, t4) => new S10({ schema: e7, effect: { type: "preprocess", transform: r36 }, typeName: m8.ZodEffects, ...y4(t4) });
var C8 = class extends _6 {
  _parse(e7) {
    return this._getType(e7) === u7.undefined ? k10(void 0) : this._def.innerType._parse(e7);
  }
  unwrap() {
    return this._def.innerType;
  }
};
C8.create = (r36, e7) => new C8({ innerType: r36, typeName: m8.ZodOptional, ...y4(e7) });
var j11 = class extends _6 {
  _parse(e7) {
    return this._getType(e7) === u7.null ? k10(null) : this._def.innerType._parse(e7);
  }
  unwrap() {
    return this._def.innerType;
  }
};
j11.create = (r36, e7) => new j11({ innerType: r36, typeName: m8.ZodNullable, ...y4(e7) });
var K8 = class extends _6 {
  _parse(e7) {
    let { ctx: t4 } = this._processInputParams(e7), s9 = t4.data;
    return t4.parsedType === u7.undefined && (s9 = this._def.defaultValue()), this._def.innerType._parse({ data: s9, path: t4.path, parent: t4 });
  }
  removeDefault() {
    return this._def.innerType;
  }
};
K8.create = (r36, e7) => new K8({ innerType: r36, typeName: m8.ZodDefault, defaultValue: typeof e7.default == "function" ? e7.default : () => e7.default, ...y4(e7) });
var ee3 = class extends _6 {
  _parse(e7) {
    let { ctx: t4 } = this._processInputParams(e7), s9 = { ...t4, common: { ...t4.common, issues: [] } }, a8 = this._def.innerType._parse({ data: s9.data, path: s9.path, parent: { ...s9 } });
    return se3(a8) ? a8.then((n8) => ({ status: "valid", value: n8.status === "valid" ? n8.value : this._def.catchValue({ get error() {
      return new b7(s9.common.issues);
    }, input: s9.data }) })) : { status: "valid", value: a8.status === "valid" ? a8.value : this._def.catchValue({ get error() {
      return new b7(s9.common.issues);
    }, input: s9.data }) };
  }
  removeCatch() {
    return this._def.innerType;
  }
};
ee3.create = (r36, e7) => new ee3({ innerType: r36, typeName: m8.ZodCatch, catchValue: typeof e7.catch == "function" ? e7.catch : () => e7.catch, ...y4(e7) });
var de2 = class extends _6 {
  _parse(e7) {
    if (this._getType(e7) !== u7.nan) {
      let s9 = this._getOrReturnCtx(e7);
      return d6(s9, { code: c5.invalid_type, expected: u7.nan, received: s9.parsedType }), p5;
    }
    return { status: "valid", value: e7.data };
  }
};
de2.create = (r36) => new de2({ typeName: m8.ZodNaN, ...y4(r36) });
var ct3 = Symbol("zod_brand");
var le2 = class extends _6 {
  _parse(e7) {
    let { ctx: t4 } = this._processInputParams(e7), s9 = t4.data;
    return this._def.type._parse({ data: s9, path: t4.path, parent: t4 });
  }
  unwrap() {
    return this._def.type;
  }
};
var fe2 = class r31 extends _6 {
  _parse(e7) {
    let { status: t4, ctx: s9 } = this._processInputParams(e7);
    if (s9.common.async) return (async () => {
      let n8 = await this._def.in._parseAsync({ data: s9.data, path: s9.path, parent: s9 });
      return n8.status === "aborted" ? p5 : n8.status === "dirty" ? (t4.dirty(), D8(n8.value)) : this._def.out._parseAsync({ data: n8.value, path: s9.path, parent: s9 });
    })();
    {
      let a8 = this._def.in._parseSync({ data: s9.data, path: s9.path, parent: s9 });
      return a8.status === "aborted" ? p5 : a8.status === "dirty" ? (t4.dirty(), { status: "dirty", value: a8.value }) : this._def.out._parseSync({ data: a8.value, path: s9.path, parent: s9 });
    }
  }
  static create(e7, t4) {
    return new r31({ in: e7, out: t4, typeName: m8.ZodPipeline });
  }
};
var te3 = class extends _6 {
  _parse(e7) {
    let t4 = this._def.innerType._parse(e7), s9 = (a8) => (M9(a8) && (a8.value = Object.freeze(a8.value)), a8);
    return se3(t4) ? t4.then((a8) => s9(a8)) : s9(t4);
  }
  unwrap() {
    return this._def.innerType;
  }
};
te3.create = (r36, e7) => new te3({ innerType: r36, typeName: m8.ZodReadonly, ...y4(e7) });
function Oe2(r36, e7) {
  let t4 = typeof r36 == "function" ? r36(e7) : typeof r36 == "string" ? { message: r36 } : r36;
  return typeof t4 == "string" ? { message: t4 } : t4;
}
function je2(r36, e7 = {}, t4) {
  return r36 ? P7.create().superRefine((s9, a8) => {
    let n8 = r36(s9);
    if (n8 instanceof Promise) return n8.then((i10) => {
      if (!i10) {
        let o15 = Oe2(e7, s9), f14 = o15.fatal ?? t4 ?? true;
        a8.addIssue({ code: "custom", ...o15, fatal: f14 });
      }
    });
    if (!n8) {
      let i10 = Oe2(e7, s9), o15 = i10.fatal ?? t4 ?? true;
      a8.addIssue({ code: "custom", ...i10, fatal: o15 });
    }
  }) : P7.create();
}
var dt3 = { object: w9.lazycreate };
var m8;
(function(r36) {
  r36.ZodString = "ZodString", r36.ZodNumber = "ZodNumber", r36.ZodNaN = "ZodNaN", r36.ZodBigInt = "ZodBigInt", r36.ZodBoolean = "ZodBoolean", r36.ZodDate = "ZodDate", r36.ZodSymbol = "ZodSymbol", r36.ZodUndefined = "ZodUndefined", r36.ZodNull = "ZodNull", r36.ZodAny = "ZodAny", r36.ZodUnknown = "ZodUnknown", r36.ZodNever = "ZodNever", r36.ZodVoid = "ZodVoid", r36.ZodArray = "ZodArray", r36.ZodObject = "ZodObject", r36.ZodUnion = "ZodUnion", r36.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", r36.ZodIntersection = "ZodIntersection", r36.ZodTuple = "ZodTuple", r36.ZodRecord = "ZodRecord", r36.ZodMap = "ZodMap", r36.ZodSet = "ZodSet", r36.ZodFunction = "ZodFunction", r36.ZodLazy = "ZodLazy", r36.ZodLiteral = "ZodLiteral", r36.ZodEnum = "ZodEnum", r36.ZodEffects = "ZodEffects", r36.ZodNativeEnum = "ZodNativeEnum", r36.ZodOptional = "ZodOptional", r36.ZodNullable = "ZodNullable", r36.ZodDefault = "ZodDefault", r36.ZodCatch = "ZodCatch", r36.ZodPromise = "ZodPromise", r36.ZodBranded = "ZodBranded", r36.ZodPipeline = "ZodPipeline", r36.ZodReadonly = "ZodReadonly";
})(m8 || (m8 = {}));
var ut2 = (r36, e7 = { message: `Input not instance of ${r36.name}` }) => je2((t4) => t4 instanceof r36, e7);
var Ie2 = V8.create;
var Ee2 = L8.create;
var lt3 = de2.create;
var ft2 = U7.create;
var Ze2 = F9.create;
var ht2 = B7.create;
var pt3 = ne2.create;
var mt2 = W5.create;
var yt2 = q7.create;
var _t2 = P7.create;
var gt2 = Z7.create;
var vt2 = A10.create;
var xt2 = ie2.create;
var kt3 = $6.create;
var bt3 = w9.create;
var wt2 = w9.strictCreate;
var Tt2 = J9.create;
var Ct3 = me2.create;
var Ot2 = Y3.create;
var St2 = N6.create;
var At3 = ye2.create;
var Rt2 = oe2.create;
var Nt2 = ce2.create;
var jt2 = _e2.create;
var It2 = H7.create;
var Et2 = G8.create;
var Zt2 = Q8.create;
var $t2 = X4.create;
var Mt2 = z7.create;
var Vt2 = S10.create;
var Pt3 = C8.create;
var zt2 = j11.create;
var Dt3 = S10.createWithPreprocess;
var Lt3 = fe2.create;
var Ut2 = () => Ie2().optional();
var Ft2 = () => Ee2().optional();
var Bt2 = () => Ze2().optional();
var Wt3 = { string: (r36) => V8.create({ ...r36, coerce: true }), number: (r36) => L8.create({ ...r36, coerce: true }), boolean: (r36) => F9.create({ ...r36, coerce: true }), bigint: (r36) => U7.create({ ...r36, coerce: true }), date: (r36) => B7.create({ ...r36, coerce: true }) };
var qt2 = p5;

// https://esm.sh/@agentic/core@8.4.4/denonext/core.mjs
import __Process$3 from "node:process";

// https://esm.sh/jsonrepair@3.13.0/denonext/jsonrepair.mjs
var l6 = class extends Error {
  constructor(e7, n8) {
    super(`${e7} at position ${n8}`), this.position = n8;
  }
};
function z8(r36) {
  return /^[0-9A-Fa-f]$/.test(r36);
}
function d7(r36) {
  return r36 >= "0" && r36 <= "9";
}
function P8(r36) {
  return r36 >= " ";
}
function N7(r36) {
  return `,:[]/{}()
+`.includes(r36);
}
function D9(r36) {
  return r36 >= "a" && r36 <= "z" || r36 >= "A" && r36 <= "Z" || r36 === "_" || r36 === "$";
}
function U8(r36) {
  return r36 >= "a" && r36 <= "z" || r36 >= "A" && r36 <= "Z" || r36 === "_" || r36 === "$" || r36 >= "0" && r36 <= "9";
}
var B8 = /^(http|https|ftp|mailto|file|data|irc):\/\/$/;
var I6 = /^[A-Za-z0-9-._~:/?#@!$&'()*+;=]$/;
function V9(r36) {
  return `,[]/{}
+`.includes(r36);
}
function L9(r36) {
  return k11(r36) || ge2.test(r36);
}
var ge2 = /^[[{\w-]$/;
function G9(r36) {
  return r36 === `
` || r36 === "\r" || r36 === "	" || r36 === "\b" || r36 === "\f";
}
function p6(r36, e7) {
  let n8 = r36.charCodeAt(e7);
  return n8 === 32 || n8 === 10 || n8 === 9 || n8 === 13;
}
function X5(r36, e7) {
  let n8 = r36.charCodeAt(e7);
  return n8 === 32 || n8 === 9 || n8 === 13;
}
function Y4(r36, e7) {
  let n8 = r36.charCodeAt(e7);
  return n8 === 160 || n8 >= 8192 && n8 <= 8202 || n8 === 8239 || n8 === 8287 || n8 === 12288;
}
function k11(r36) {
  return j12(r36) || Q9(r36);
}
function j12(r36) {
  return r36 === '"' || r36 === "“" || r36 === "”";
}
function F10(r36) {
  return r36 === '"';
}
function Q9(r36) {
  return r36 === "'" || r36 === "‘" || r36 === "’" || r36 === "`" || r36 === "´";
}
function M10(r36) {
  return r36 === "'";
}
function w10(r36, e7) {
  let n8 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, $20 = r36.lastIndexOf(e7);
  return $20 !== -1 ? r36.substring(0, $20) + (n8 ? "" : r36.substring($20 + 1)) : r36;
}
function a4(r36, e7) {
  let n8 = r36.length;
  if (!p6(r36, n8 - 1)) return r36 + e7;
  for (; p6(r36, n8 - 1); ) n8--;
  return r36.substring(0, n8) + e7 + r36.substring(n8);
}
function x9(r36, e7, n8) {
  return r36.substring(0, e7) + r36.substring(e7 + n8);
}
function ee4(r36) {
  return /[,\n][ \t\r]*$/.test(r36);
}
var me3 = { "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "	": "\\t" };
var we = { '"': '"', "\\": "\\", "/": "/", b: "\b", f: "\f", n: `
`, r: "\r", t: "	" };
function Ce3(r36) {
  let e7 = 0, n8 = "";
  J21(["```", "[```", "{```"]), C25() || pe8(), J21(["```", "```]", "```}"]);
  let W19 = S25(",");
  for (W19 && u17(), L9(r36[e7]) && ee4(n8) ? (W19 || (n8 = a4(n8, ",")), te8()) : W19 && (n8 = w10(n8, ",")); r36[e7] === "}" || r36[e7] === "]"; ) e7++, u17();
  if (e7 >= r36.length) return n8;
  fe6();
  function C25() {
    u17();
    let i10 = se7() || oe7() || g21() || ue5() || ce6() || H20(false) || ae8();
    return u17(), i10;
  }
  function u17() {
    let i10 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true, s9 = e7, o15 = R15(i10);
    do
      o15 = re10(), o15 && (o15 = R15(i10));
    while (o15);
    return e7 > s9;
  }
  function R15(i10) {
    let s9 = i10 ? p6 : X5, o15 = "";
    for (; ; ) if (s9(r36, e7)) o15 += r36[e7], e7++;
    else if (Y4(r36, e7)) o15 += " ", e7++;
    else break;
    return o15.length > 0 ? (n8 += o15, true) : false;
  }
  function re10() {
    if (r36[e7] === "/" && r36[e7 + 1] === "*") {
      for (; e7 < r36.length && !Se5(r36, e7); ) e7++;
      return e7 += 2, true;
    }
    if (r36[e7] === "/" && r36[e7 + 1] === "/") {
      for (; e7 < r36.length && r36[e7] !== `
`; ) e7++;
      return true;
    }
    return false;
  }
  function J21(i10) {
    if (ne7(i10)) {
      if (D9(r36[e7])) for (; e7 < r36.length && U8(r36[e7]); ) e7++;
      return u17(), true;
    }
    return false;
  }
  function ne7(i10) {
    for (let s9 of i10) {
      let o15 = e7 + s9.length;
      if (r36.slice(e7, o15) === s9) return e7 = o15, true;
    }
    return false;
  }
  function S25(i10) {
    return r36[e7] === i10 ? (n8 += r36[e7], e7++, true) : false;
  }
  function O20(i10) {
    return r36[e7] === i10 ? (e7++, true) : false;
  }
  function ie7() {
    return O20("\\");
  }
  function K22() {
    return u17(), r36[e7] === "." && r36[e7 + 1] === "." && r36[e7 + 2] === "." ? (e7 += 3, u17(), O20(","), true) : false;
  }
  function se7() {
    if (r36[e7] === "{") {
      n8 += "{", e7++, u17(), O20(",") && u17();
      let i10 = true;
      for (; e7 < r36.length && r36[e7] !== "}"; ) {
        let s9;
        if (i10 ? (s9 = true, i10 = false) : (s9 = S25(","), s9 || (n8 = a4(n8, ",")), u17()), K22(), !(g21() || H20(true))) {
          r36[e7] === "}" || r36[e7] === "{" || r36[e7] === "]" || r36[e7] === "[" || r36[e7] === void 0 ? n8 = w10(n8, ",") : de7();
          break;
        }
        u17();
        let E21 = S25(":"), h24 = e7 >= r36.length;
        E21 || (L9(r36[e7]) || h24 ? n8 = a4(n8, ":") : _17()), C25() || (E21 || h24 ? n8 += "null" : _17());
      }
      return r36[e7] === "}" ? (n8 += "}", e7++) : n8 = a4(n8, "}"), true;
    }
    return false;
  }
  function oe7() {
    if (r36[e7] === "[") {
      n8 += "[", e7++, u17(), O20(",") && u17();
      let i10 = true;
      for (; e7 < r36.length && r36[e7] !== "]"; ) if (i10 ? i10 = false : S25(",") || (n8 = a4(n8, ",")), K22(), !C25()) {
        n8 = w10(n8, ",");
        break;
      }
      return r36[e7] === "]" ? (n8 += "]", e7++) : n8 = a4(n8, "]"), true;
    }
    return false;
  }
  function te8() {
    let i10 = true, s9 = true;
    for (; s9; ) i10 ? i10 = false : S25(",") || (n8 = a4(n8, ",")), s9 = C25();
    s9 || (n8 = w10(n8, ",")), n8 = `[
${n8}
]`;
  }
  function g21() {
    let i10 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false, s9 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : -1, o15 = r36[e7] === "\\";
    if (o15 && (e7++, o15 = true), k11(r36[e7])) {
      let E21 = F10(r36[e7]) ? F10 : M10(r36[e7]) ? M10 : Q9(r36[e7]) ? Q9 : j12, h24 = e7, b23 = n8.length, t4 = '"';
      for (e7++; ; ) {
        if (e7 >= r36.length) {
          let c14 = Z17(e7 - 1);
          return !i10 && N7(r36.charAt(c14)) ? (e7 = h24, n8 = n8.substring(0, b23), g21(true)) : (t4 = a4(t4, '"'), n8 += t4, true);
        }
        if (e7 === s9) return t4 = a4(t4, '"'), n8 += t4, true;
        if (E21(r36[e7])) {
          let c14 = e7, y18 = t4.length;
          if (t4 += '"', e7++, n8 += t4, u17(false), i10 || e7 >= r36.length || N7(r36[e7]) || k11(r36[e7]) || d7(r36[e7])) return T20(), true;
          let f14 = Z17(c14 - 1), q22 = r36.charAt(f14);
          if (q22 === ",") return e7 = h24, n8 = n8.substring(0, b23), g21(false, f14);
          if (N7(q22)) return e7 = h24, n8 = n8.substring(0, b23), g21(true);
          n8 = n8.substring(0, b23), e7 = c14 + 1, t4 = `${t4.substring(0, y18)}\\${t4.substring(y18)}`;
        } else if (i10 && V9(r36[e7])) {
          if (r36[e7 - 1] === ":" && B8.test(r36.substring(h24 + 1, e7 + 2))) for (; e7 < r36.length && I6.test(r36[e7]); ) t4 += r36[e7], e7++;
          return t4 = a4(t4, '"'), n8 += t4, T20(), true;
        } else if (r36[e7] === "\\") {
          let c14 = r36.charAt(e7 + 1);
          if (we[c14] !== void 0) t4 += r36.slice(e7, e7 + 2), e7 += 2;
          else if (c14 === "u") {
            let f14 = 2;
            for (; f14 < 6 && z8(r36[e7 + f14]); ) f14++;
            f14 === 6 ? (t4 += r36.slice(e7, e7 + 6), e7 += 6) : e7 + f14 >= r36.length ? e7 = r36.length : he6();
          } else t4 += c14, e7 += 2;
        } else {
          let c14 = r36.charAt(e7);
          c14 === '"' && r36[e7 - 1] !== "\\" ? (t4 += `\\${c14}`, e7++) : G9(c14) ? (t4 += me3[c14], e7++) : (P8(c14) || le7(c14), t4 += c14, e7++);
        }
        o15 && ie7();
      }
    }
    return false;
  }
  function T20() {
    let i10 = false;
    for (u17(); r36[e7] === "+"; ) {
      i10 = true, e7++, u17(), n8 = w10(n8, '"', true);
      let s9 = n8.length;
      g21() ? n8 = x9(n8, s9, 1) : n8 = a4(n8, '"');
    }
    return i10;
  }
  function ue5() {
    let i10 = e7;
    if (r36[e7] === "-") {
      if (e7++, A25()) return v16(i10), true;
      if (!d7(r36[e7])) return e7 = i10, false;
    }
    for (; d7(r36[e7]); ) e7++;
    if (r36[e7] === ".") {
      if (e7++, A25()) return v16(i10), true;
      if (!d7(r36[e7])) return e7 = i10, false;
      for (; d7(r36[e7]); ) e7++;
    }
    if (r36[e7] === "e" || r36[e7] === "E") {
      if (e7++, (r36[e7] === "-" || r36[e7] === "+") && e7++, A25()) return v16(i10), true;
      if (!d7(r36[e7])) return e7 = i10, false;
      for (; d7(r36[e7]); ) e7++;
    }
    if (!A25()) return e7 = i10, false;
    if (e7 > i10) {
      let s9 = r36.slice(i10, e7), o15 = /^0\d/.test(s9);
      return n8 += o15 ? `"${s9}"` : s9, true;
    }
    return false;
  }
  function ce6() {
    return m20("true", "true") || m20("false", "false") || m20("null", "null") || m20("True", "true") || m20("False", "false") || m20("None", "null");
  }
  function m20(i10, s9) {
    return r36.slice(e7, e7 + i10.length) === i10 ? (n8 += s9, e7 += i10.length, true) : false;
  }
  function H20(i10) {
    let s9 = e7;
    if (D9(r36[e7])) {
      for (; e7 < r36.length && U8(r36[e7]); ) e7++;
      let o15 = e7;
      for (; p6(r36, o15); ) o15++;
      if (r36[o15] === "(") return e7 = o15 + 1, C25(), r36[e7] === ")" && (e7++, r36[e7] === ";" && e7++), true;
    }
    for (; e7 < r36.length && !V9(r36[e7]) && !k11(r36[e7]) && (!i10 || r36[e7] !== ":"); ) e7++;
    if (r36[e7 - 1] === ":" && B8.test(r36.substring(s9, e7 + 2))) for (; e7 < r36.length && I6.test(r36[e7]); ) e7++;
    if (e7 > s9) {
      for (; p6(r36, e7 - 1) && e7 > 0; ) e7--;
      let o15 = r36.slice(s9, e7);
      return n8 += o15 === "undefined" ? "null" : JSON.stringify(o15), r36[e7] === '"' && e7++, true;
    }
  }
  function ae8() {
    if (r36[e7] === "/") {
      let i10 = e7;
      for (e7++; e7 < r36.length && (r36[e7] !== "/" || r36[e7 - 1] === "\\"); ) e7++;
      return e7++, n8 += `"${r36.substring(i10, e7)}"`, true;
    }
  }
  function Z17(i10) {
    let s9 = i10;
    for (; s9 > 0 && p6(r36, s9); ) s9--;
    return s9;
  }
  function A25() {
    return e7 >= r36.length || N7(r36[e7]) || p6(r36, e7);
  }
  function v16(i10) {
    n8 += `${r36.slice(i10, e7)}0`;
  }
  function le7(i10) {
    throw new l6(`Invalid character ${JSON.stringify(i10)}`, e7);
  }
  function fe6() {
    throw new l6(`Unexpected character ${JSON.stringify(r36[e7])}`, e7);
  }
  function pe8() {
    throw new l6("Unexpected end of json string", r36.length);
  }
  function de7() {
    throw new l6("Object key expected", e7);
  }
  function _17() {
    throw new l6("Colon expected", e7);
  }
  function he6() {
    let i10 = r36.slice(e7, e7 + 6);
    throw new l6(`Invalid unicode character "${i10}"`, e7);
  }
}
function Se5(r36, e7) {
  return r36[e7] === "*" && r36[e7 + 1] === "/";
}

// https://esm.sh/zod@3.25.76/denonext/v4/locales.mjs
function g8(o15) {
  return { get value() {
    {
      let u17 = o15();
      return Object.defineProperty(this, "value", { value: u17 }), u17;
    }
    throw new Error("cached value already set");
  } };
}
var Kr = Error.captureStackTrace ? Error.captureStackTrace : (...o15) => {
};
var Wr = g8(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare")) return false;
  try {
    let o15 = Function;
    return new o15(""), true;
  } catch {
    return false;
  }
});
var Xr = { safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER], int32: [-2147483648, 2147483647], uint32: [0, 4294967295], float32: [-34028234663852886e22, 34028234663852886e22], float64: [-Number.MAX_VALUE, Number.MAX_VALUE] };

// https://esm.sh/zod@3.25.76/denonext/v4/core.mjs
var nr3 = Object.defineProperty;
var st4 = (t4, e7) => {
  for (var r36 in e7) nr3(t4, r36, { get: e7[r36], enumerable: true });
};
var Yr = Object.freeze({ status: "aborted" });
function l7(t4, e7, r36) {
  function o15(u17, p15) {
    var m20;
    Object.defineProperty(u17, "_zod", { value: u17._zod ?? {}, enumerable: false }), (m20 = u17._zod).traits ?? (m20.traits = /* @__PURE__ */ new Set()), u17._zod.traits.add(t4), e7(u17, p15);
    for (let h24 in s9.prototype) h24 in u17 || Object.defineProperty(u17, h24, { value: s9.prototype[h24].bind(u17) });
    u17._zod.constr = s9, u17._zod.def = p15;
  }
  let n8 = r36?.Parent ?? Object;
  class i10 extends n8 {
  }
  Object.defineProperty(i10, "name", { value: t4 });
  function s9(u17) {
    var p15;
    let m20 = r36?.Parent ? new i10() : this;
    o15(m20, u17), (p15 = m20._zod).deferred ?? (p15.deferred = []);
    for (let h24 of m20._zod.deferred) h24();
    return m20;
  }
  return Object.defineProperty(s9, "init", { value: o15 }), Object.defineProperty(s9, Symbol.hasInstance, { value: (u17) => r36?.Parent && u17 instanceof r36.Parent ? true : u17?._zod?.traits?.has(t4) }), Object.defineProperty(s9, "name", { value: t4 }), s9;
}
var Xr2 = Symbol("zod_brand");
var T7 = class extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
};
var Q10 = {};
function I7(t4) {
  return t4 && Object.assign(Q10, t4), Q10;
}
var L10 = {};
st4(L10, { BIGINT_FORMAT_RANGES: () => xe3, Class: () => le3, NUMBER_FORMAT_RANGES: () => ge3, aborted: () => C9, allowsEval: () => he4, assert: () => cr3, assertEqual: () => or3, assertIs: () => sr3, assertNever: () => ur3, assertNotEqual: () => ir3, assignProp: () => me4, cached: () => B9, captureStackTrace: () => ee5, cleanEnum: () => br3, cleanRegex: () => J10, clone: () => N8, createTransparentProxy: () => dr3, defineLazy: () => b8, esc: () => R7, escapeRegex: () => O9, extend: () => xr3, finalizeIssue: () => E9, floatSafeRemainder: () => fe3, getElementAtPath: () => lr3, getEnumValues: () => V10, getLengthableOrigin: () => G10, getParsedType: () => hr3, getSizableOrigin: () => K9, isObject: () => F11, isPlainObject: () => D10, issue: () => ze3, joinValues: () => ar3, jsonStringifyReplacer: () => pe4, merge: () => zr, normalizeParams: () => f4, nullish: () => A11, numKeys: () => mr3, omit: () => gr5, optionalKeys: () => _e3, partial: () => vr3, pick: () => _r3, prefixIssues: () => S11, primitiveTypes: () => de3, promiseAllObject: () => pr3, propertyKeyTypes: () => W6, randomString: () => fr3, required: () => $r2, stringifyPrimitive: () => ut3, unwrapMessage: () => U9 });
function or3(t4) {
  return t4;
}
function ir3(t4) {
  return t4;
}
function sr3(t4) {
}
function ur3(t4) {
  throw new Error();
}
function cr3(t4) {
}
function V10(t4) {
  let e7 = Object.values(t4).filter((o15) => typeof o15 == "number");
  return Object.entries(t4).filter(([o15, n8]) => e7.indexOf(+o15) === -1).map(([o15, n8]) => n8);
}
function ar3(t4, e7 = "|") {
  return t4.map((r36) => ut3(r36)).join(e7);
}
function pe4(t4, e7) {
  return typeof e7 == "bigint" ? e7.toString() : e7;
}
function B9(t4) {
  return { get value() {
    {
      let r36 = t4();
      return Object.defineProperty(this, "value", { value: r36 }), r36;
    }
    throw new Error("cached value already set");
  } };
}
function A11(t4) {
  return t4 == null;
}
function J10(t4) {
  let e7 = t4.startsWith("^") ? 1 : 0, r36 = t4.endsWith("$") ? t4.length - 1 : t4.length;
  return t4.slice(e7, r36);
}
function fe3(t4, e7) {
  let r36 = (t4.toString().split(".")[1] || "").length, o15 = (e7.toString().split(".")[1] || "").length, n8 = r36 > o15 ? r36 : o15, i10 = Number.parseInt(t4.toFixed(n8).replace(".", "")), s9 = Number.parseInt(e7.toFixed(n8).replace(".", ""));
  return i10 % s9 / 10 ** n8;
}
function b8(t4, e7, r36) {
  Object.defineProperty(t4, e7, { get() {
    {
      let n8 = r36();
      return t4[e7] = n8, n8;
    }
    throw new Error("cached value already set");
  }, set(n8) {
    Object.defineProperty(t4, e7, { value: n8 });
  }, configurable: true });
}
function me4(t4, e7, r36) {
  Object.defineProperty(t4, e7, { value: r36, writable: true, enumerable: true, configurable: true });
}
function lr3(t4, e7) {
  return e7 ? e7.reduce((r36, o15) => r36?.[o15], t4) : t4;
}
function pr3(t4) {
  let e7 = Object.keys(t4), r36 = e7.map((o15) => t4[o15]);
  return Promise.all(r36).then((o15) => {
    let n8 = {};
    for (let i10 = 0; i10 < e7.length; i10++) n8[e7[i10]] = o15[i10];
    return n8;
  });
}
function fr3(t4 = 10) {
  let e7 = "abcdefghijklmnopqrstuvwxyz", r36 = "";
  for (let o15 = 0; o15 < t4; o15++) r36 += e7[Math.floor(Math.random() * e7.length)];
  return r36;
}
function R7(t4) {
  return JSON.stringify(t4);
}
var ee5 = Error.captureStackTrace ? Error.captureStackTrace : (...t4) => {
};
function F11(t4) {
  return typeof t4 == "object" && t4 !== null && !Array.isArray(t4);
}
var he4 = B9(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare")) return false;
  try {
    let t4 = Function;
    return new t4(""), true;
  } catch {
    return false;
  }
});
function D10(t4) {
  if (F11(t4) === false) return false;
  let e7 = t4.constructor;
  if (e7 === void 0) return true;
  let r36 = e7.prototype;
  return !(F11(r36) === false || Object.prototype.hasOwnProperty.call(r36, "isPrototypeOf") === false);
}
function mr3(t4) {
  let e7 = 0;
  for (let r36 in t4) Object.prototype.hasOwnProperty.call(t4, r36) && e7++;
  return e7;
}
var hr3 = (t4) => {
  let e7 = typeof t4;
  switch (e7) {
    case "undefined":
      return "undefined";
    case "string":
      return "string";
    case "number":
      return Number.isNaN(t4) ? "nan" : "number";
    case "boolean":
      return "boolean";
    case "function":
      return "function";
    case "bigint":
      return "bigint";
    case "symbol":
      return "symbol";
    case "object":
      return Array.isArray(t4) ? "array" : t4 === null ? "null" : t4.then && typeof t4.then == "function" && t4.catch && typeof t4.catch == "function" ? "promise" : typeof Map < "u" && t4 instanceof Map ? "map" : typeof Set < "u" && t4 instanceof Set ? "set" : typeof Date < "u" && t4 instanceof Date ? "date" : typeof File < "u" && t4 instanceof File ? "file" : "object";
    default:
      throw new Error(`Unknown data type: ${e7}`);
  }
};
var W6 = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
var de3 = /* @__PURE__ */ new Set(["string", "number", "bigint", "boolean", "symbol", "undefined"]);
function O9(t4) {
  return t4.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function N8(t4, e7, r36) {
  let o15 = new t4._zod.constr(e7 ?? t4._zod.def);
  return (!e7 || r36?.parent) && (o15._zod.parent = t4), o15;
}
function f4(t4) {
  let e7 = t4;
  if (!e7) return {};
  if (typeof e7 == "string") return { error: () => e7 };
  if (e7?.message !== void 0) {
    if (e7?.error !== void 0) throw new Error("Cannot specify both `message` and `error` params");
    e7.error = e7.message;
  }
  return delete e7.message, typeof e7.error == "string" ? { ...e7, error: () => e7.error } : e7;
}
function dr3(t4) {
  let e7;
  return new Proxy({}, { get(r36, o15, n8) {
    return e7 ?? (e7 = t4()), Reflect.get(e7, o15, n8);
  }, set(r36, o15, n8, i10) {
    return e7 ?? (e7 = t4()), Reflect.set(e7, o15, n8, i10);
  }, has(r36, o15) {
    return e7 ?? (e7 = t4()), Reflect.has(e7, o15);
  }, deleteProperty(r36, o15) {
    return e7 ?? (e7 = t4()), Reflect.deleteProperty(e7, o15);
  }, ownKeys(r36) {
    return e7 ?? (e7 = t4()), Reflect.ownKeys(e7);
  }, getOwnPropertyDescriptor(r36, o15) {
    return e7 ?? (e7 = t4()), Reflect.getOwnPropertyDescriptor(e7, o15);
  }, defineProperty(r36, o15, n8) {
    return e7 ?? (e7 = t4()), Reflect.defineProperty(e7, o15, n8);
  } });
}
function ut3(t4) {
  return typeof t4 == "bigint" ? t4.toString() + "n" : typeof t4 == "string" ? `"${t4}"` : `${t4}`;
}
function _e3(t4) {
  return Object.keys(t4).filter((e7) => t4[e7]._zod.optin === "optional" && t4[e7]._zod.optout === "optional");
}
var ge3 = { safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER], int32: [-2147483648, 2147483647], uint32: [0, 4294967295], float32: [-34028234663852886e22, 34028234663852886e22], float64: [-Number.MAX_VALUE, Number.MAX_VALUE] };
var xe3 = { int64: [BigInt("-9223372036854775808"), BigInt("9223372036854775807")], uint64: [BigInt(0), BigInt("18446744073709551615")] };
function _r3(t4, e7) {
  let r36 = {}, o15 = t4._zod.def;
  for (let n8 in e7) {
    if (!(n8 in o15.shape)) throw new Error(`Unrecognized key: "${n8}"`);
    e7[n8] && (r36[n8] = o15.shape[n8]);
  }
  return N8(t4, { ...t4._zod.def, shape: r36, checks: [] });
}
function gr5(t4, e7) {
  let r36 = { ...t4._zod.def.shape }, o15 = t4._zod.def;
  for (let n8 in e7) {
    if (!(n8 in o15.shape)) throw new Error(`Unrecognized key: "${n8}"`);
    e7[n8] && delete r36[n8];
  }
  return N8(t4, { ...t4._zod.def, shape: r36, checks: [] });
}
function xr3(t4, e7) {
  if (!D10(e7)) throw new Error("Invalid input to extend: expected a plain object");
  let r36 = { ...t4._zod.def, get shape() {
    let o15 = { ...t4._zod.def.shape, ...e7 };
    return me4(this, "shape", o15), o15;
  }, checks: [] };
  return N8(t4, r36);
}
function zr(t4, e7) {
  return N8(t4, { ...t4._zod.def, get shape() {
    let r36 = { ...t4._zod.def.shape, ...e7._zod.def.shape };
    return me4(this, "shape", r36), r36;
  }, catchall: e7._zod.def.catchall, checks: [] });
}
function vr3(t4, e7, r36) {
  let o15 = e7._zod.def.shape, n8 = { ...o15 };
  if (r36) for (let i10 in r36) {
    if (!(i10 in o15)) throw new Error(`Unrecognized key: "${i10}"`);
    r36[i10] && (n8[i10] = t4 ? new t4({ type: "optional", innerType: o15[i10] }) : o15[i10]);
  }
  else for (let i10 in o15) n8[i10] = t4 ? new t4({ type: "optional", innerType: o15[i10] }) : o15[i10];
  return N8(e7, { ...e7._zod.def, shape: n8, checks: [] });
}
function $r2(t4, e7, r36) {
  let o15 = e7._zod.def.shape, n8 = { ...o15 };
  if (r36) for (let i10 in r36) {
    if (!(i10 in n8)) throw new Error(`Unrecognized key: "${i10}"`);
    r36[i10] && (n8[i10] = new t4({ type: "nonoptional", innerType: o15[i10] }));
  }
  else for (let i10 in o15) n8[i10] = new t4({ type: "nonoptional", innerType: o15[i10] });
  return N8(e7, { ...e7._zod.def, shape: n8, checks: [] });
}
function C9(t4, e7 = 0) {
  for (let r36 = e7; r36 < t4.issues.length; r36++) if (t4.issues[r36]?.continue !== true) return true;
  return false;
}
function S11(t4, e7) {
  return e7.map((r36) => {
    var o15;
    return (o15 = r36).path ?? (o15.path = []), r36.path.unshift(t4), r36;
  });
}
function U9(t4) {
  return typeof t4 == "string" ? t4 : t4?.message;
}
function E9(t4, e7, r36) {
  let o15 = { ...t4, path: t4.path ?? [] };
  if (!t4.message) {
    let n8 = U9(t4.inst?._zod.def?.error?.(t4)) ?? U9(e7?.error?.(t4)) ?? U9(r36.customError?.(t4)) ?? U9(r36.localeError?.(t4)) ?? "Invalid input";
    o15.message = n8;
  }
  return delete o15.inst, delete o15.continue, e7?.reportInput || delete o15.input, o15;
}
function K9(t4) {
  return t4 instanceof Set ? "set" : t4 instanceof Map ? "map" : t4 instanceof File ? "file" : "unknown";
}
function G10(t4) {
  return Array.isArray(t4) ? "array" : typeof t4 == "string" ? "string" : "unknown";
}
function ze3(...t4) {
  let [e7, r36, o15] = t4;
  return typeof e7 == "string" ? { message: e7, code: "custom", input: r36, inst: o15 } : { ...e7 };
}
function br3(t4) {
  return Object.entries(t4).filter(([e7, r36]) => Number.isNaN(Number.parseInt(e7, 10))).map((e7) => e7[1]);
}
var le3 = class {
  constructor(...e7) {
  }
};
var ct4 = (t4, e7) => {
  t4.name = "$ZodError", Object.defineProperty(t4, "_zod", { value: t4._zod, enumerable: false }), Object.defineProperty(t4, "issues", { value: e7, enumerable: false }), Object.defineProperty(t4, "message", { get() {
    return JSON.stringify(e7, pe4, 2);
  }, enumerable: true }), Object.defineProperty(t4, "toString", { value: () => t4.message, enumerable: false });
};
var at4 = l7("$ZodError", ct4);
var q8 = l7("$ZodError", ct4, { Parent: Error });
var kr3 = (t4) => (e7, r36, o15, n8) => {
  let i10 = o15 ? Object.assign(o15, { async: false }) : { async: false }, s9 = e7._zod.run({ value: r36, issues: [] }, i10);
  if (s9 instanceof Promise) throw new T7();
  if (s9.issues.length) {
    let u17 = new (n8?.Err ?? t4)(s9.issues.map((p15) => E9(p15, i10, I7())));
    throw ee5(u17, n8?.callee), u17;
  }
  return s9.value;
};
var ve3 = kr3(q8);
var Zr = (t4) => async (e7, r36, o15, n8) => {
  let i10 = o15 ? Object.assign(o15, { async: true }) : { async: true }, s9 = e7._zod.run({ value: r36, issues: [] }, i10);
  if (s9 instanceof Promise && (s9 = await s9), s9.issues.length) {
    let u17 = new (n8?.Err ?? t4)(s9.issues.map((p15) => E9(p15, i10, I7())));
    throw ee5(u17, n8?.callee), u17;
  }
  return s9.value;
};
var $e3 = Zr(q8);
var Pr2 = (t4) => (e7, r36, o15) => {
  let n8 = o15 ? { ...o15, async: false } : { async: false }, i10 = e7._zod.run({ value: r36, issues: [] }, n8);
  if (i10 instanceof Promise) throw new T7();
  return i10.issues.length ? { success: false, error: new (t4 ?? at4)(i10.issues.map((s9) => E9(s9, n8, I7()))) } : { success: true, data: i10.value };
};
var lt4 = Pr2(q8);
var Sr2 = (t4) => async (e7, r36, o15) => {
  let n8 = o15 ? Object.assign(o15, { async: true }) : { async: true }, i10 = e7._zod.run({ value: r36, issues: [] }, n8);
  return i10 instanceof Promise && (i10 = await i10), i10.issues.length ? { success: false, error: new t4(i10.issues.map((s9) => E9(s9, n8, I7()))) } : { success: true, data: i10.value };
};
var pt4 = Sr2(q8);
var re5 = {};
st4(re5, { _emoji: () => ft3, base64: () => Re3, base64url: () => te4, bigint: () => Ve3, boolean: () => We3, browserEmail: () => Rr, cidrv4: () => Ne3, cidrv6: () => je3, cuid: () => be4, cuid2: () => ye3, date: () => Me3, datetime: () => De3, domain: () => Cr, duration: () => Se6, e164: () => Le3, email: () => Ie3, emoji: () => Te3, extendedDuration: () => Er2, guid: () => Ee3, hostname: () => Ce4, html5Email: () => Ar2, integer: () => Be3, ipv4: () => Oe3, ipv6: () => Ae4, ksuid: () => Ze3, lowercase: () => qe3, nanoid: () => Pe4, null: () => Ke3, number: () => Je3, rfc5322Email: () => Nr3, string: () => Ue3, time: () => Fe3, ulid: () => we2, undefined: () => Ge3, unicodeEmail: () => jr, uppercase: () => Ye3, uuid: () => M11, uuid4: () => Ir3, uuid6: () => Tr, uuid7: () => Or2, xid: () => ke3 });
var be4 = /^[cC][^\s-]{8,}$/;
var ye3 = /^[0-9a-z]+$/;
var we2 = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/;
var ke3 = /^[0-9a-vA-V]{20}$/;
var Ze3 = /^[A-Za-z0-9]{27}$/;
var Pe4 = /^[a-zA-Z0-9_-]{21}$/;
var Se6 = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
var Er2 = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
var Ee3 = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
var M11 = (t4) => t4 ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${t4}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$/;
var Ir3 = M11(4);
var Tr = M11(6);
var Or2 = M11(7);
var Ie3 = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
var Ar2 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
var Nr3 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var jr = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u;
var Rr = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
var ft3 = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function Te3() {
  return new RegExp(ft3, "u");
}
var Oe3 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var Ae4 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})$/;
var Ne3 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/;
var je3 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var Re3 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/;
var te4 = /^[A-Za-z0-9_-]*$/;
var Ce4 = /^([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+$/;
var Cr = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;
var Le3 = /^\+(?:[0-9]){6,14}[0-9]$/;
var mt3 = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";
var Me3 = new RegExp(`^${mt3}$`);
function ht3(t4) {
  let e7 = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof t4.precision == "number" ? t4.precision === -1 ? `${e7}` : t4.precision === 0 ? `${e7}:[0-5]\\d` : `${e7}:[0-5]\\d\\.\\d{${t4.precision}}` : `${e7}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function Fe3(t4) {
  return new RegExp(`^${ht3(t4)}$`);
}
function De3(t4) {
  let e7 = ht3({ precision: t4.precision }), r36 = ["Z"];
  t4.local && r36.push(""), t4.offset && r36.push("([+-]\\d{2}:\\d{2})");
  let o15 = `${e7}(?:${r36.join("|")})`;
  return new RegExp(`^${mt3}T(?:${o15})$`);
}
var Ue3 = (t4) => {
  let e7 = t4 ? `[\\s\\S]{${t4?.minimum ?? 0},${t4?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${e7}$`);
};
var Ve3 = /^\d+n?$/;
var Be3 = /^\d+$/;
var Je3 = /^-?\d+(?:\.\d+)?/i;
var We3 = /true|false/i;
var Ke3 = /null/i;
var Ge3 = /undefined/i;
var qe3 = /^[^A-Z]*$/;
var Ye3 = /^[^a-z]*$/;
var Z8 = l7("$ZodCheck", (t4, e7) => {
  var r36;
  t4._zod ?? (t4._zod = {}), t4._zod.def = e7, (r36 = t4._zod).onattach ?? (r36.onattach = []);
});
var _t3 = { number: "number", bigint: "bigint", object: "date" };
var Xe3 = l7("$ZodCheckLessThan", (t4, e7) => {
  Z8.init(t4, e7);
  let r36 = _t3[typeof e7.value];
  t4._zod.onattach.push((o15) => {
    let n8 = o15._zod.bag, i10 = (e7.inclusive ? n8.maximum : n8.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    e7.value < i10 && (e7.inclusive ? n8.maximum = e7.value : n8.exclusiveMaximum = e7.value);
  }), t4._zod.check = (o15) => {
    (e7.inclusive ? o15.value <= e7.value : o15.value < e7.value) || o15.issues.push({ origin: r36, code: "too_big", maximum: e7.value, input: o15.value, inclusive: e7.inclusive, inst: t4, continue: !e7.abort });
  };
});
var He3 = l7("$ZodCheckGreaterThan", (t4, e7) => {
  Z8.init(t4, e7);
  let r36 = _t3[typeof e7.value];
  t4._zod.onattach.push((o15) => {
    let n8 = o15._zod.bag, i10 = (e7.inclusive ? n8.minimum : n8.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    e7.value > i10 && (e7.inclusive ? n8.minimum = e7.value : n8.exclusiveMinimum = e7.value);
  }), t4._zod.check = (o15) => {
    (e7.inclusive ? o15.value >= e7.value : o15.value > e7.value) || o15.issues.push({ origin: r36, code: "too_small", minimum: e7.value, input: o15.value, inclusive: e7.inclusive, inst: t4, continue: !e7.abort });
  };
});
var gt3 = l7("$ZodCheckMultipleOf", (t4, e7) => {
  Z8.init(t4, e7), t4._zod.onattach.push((r36) => {
    var o15;
    (o15 = r36._zod.bag).multipleOf ?? (o15.multipleOf = e7.value);
  }), t4._zod.check = (r36) => {
    if (typeof r36.value != typeof e7.value) throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof r36.value == "bigint" ? r36.value % e7.value === BigInt(0) : fe3(r36.value, e7.value) === 0) || r36.issues.push({ origin: typeof r36.value, code: "not_multiple_of", divisor: e7.value, input: r36.value, inst: t4, continue: !e7.abort });
  };
});
var xt3 = l7("$ZodCheckNumberFormat", (t4, e7) => {
  Z8.init(t4, e7), e7.format = e7.format || "float64";
  let r36 = e7.format?.includes("int"), o15 = r36 ? "int" : "number", [n8, i10] = ge3[e7.format];
  t4._zod.onattach.push((s9) => {
    let u17 = s9._zod.bag;
    u17.format = e7.format, u17.minimum = n8, u17.maximum = i10, r36 && (u17.pattern = Be3);
  }), t4._zod.check = (s9) => {
    let u17 = s9.value;
    if (r36) {
      if (!Number.isInteger(u17)) {
        s9.issues.push({ expected: o15, format: e7.format, code: "invalid_type", input: u17, inst: t4 });
        return;
      }
      if (!Number.isSafeInteger(u17)) {
        u17 > 0 ? s9.issues.push({ input: u17, code: "too_big", maximum: Number.MAX_SAFE_INTEGER, note: "Integers must be within the safe integer range.", inst: t4, origin: o15, continue: !e7.abort }) : s9.issues.push({ input: u17, code: "too_small", minimum: Number.MIN_SAFE_INTEGER, note: "Integers must be within the safe integer range.", inst: t4, origin: o15, continue: !e7.abort });
        return;
      }
    }
    u17 < n8 && s9.issues.push({ origin: "number", input: u17, code: "too_small", minimum: n8, inclusive: true, inst: t4, continue: !e7.abort }), u17 > i10 && s9.issues.push({ origin: "number", input: u17, code: "too_big", maximum: i10, inst: t4 });
  };
});
var zt3 = l7("$ZodCheckBigIntFormat", (t4, e7) => {
  Z8.init(t4, e7);
  let [r36, o15] = xe3[e7.format];
  t4._zod.onattach.push((n8) => {
    let i10 = n8._zod.bag;
    i10.format = e7.format, i10.minimum = r36, i10.maximum = o15;
  }), t4._zod.check = (n8) => {
    let i10 = n8.value;
    i10 < r36 && n8.issues.push({ origin: "bigint", input: i10, code: "too_small", minimum: r36, inclusive: true, inst: t4, continue: !e7.abort }), i10 > o15 && n8.issues.push({ origin: "bigint", input: i10, code: "too_big", maximum: o15, inst: t4 });
  };
});
var vt3 = l7("$ZodCheckMaxSize", (t4, e7) => {
  var r36;
  Z8.init(t4, e7), (r36 = t4._zod.def).when ?? (r36.when = (o15) => {
    let n8 = o15.value;
    return !A11(n8) && n8.size !== void 0;
  }), t4._zod.onattach.push((o15) => {
    let n8 = o15._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    e7.maximum < n8 && (o15._zod.bag.maximum = e7.maximum);
  }), t4._zod.check = (o15) => {
    let n8 = o15.value;
    n8.size <= e7.maximum || o15.issues.push({ origin: K9(n8), code: "too_big", maximum: e7.maximum, input: n8, inst: t4, continue: !e7.abort });
  };
});
var $t3 = l7("$ZodCheckMinSize", (t4, e7) => {
  var r36;
  Z8.init(t4, e7), (r36 = t4._zod.def).when ?? (r36.when = (o15) => {
    let n8 = o15.value;
    return !A11(n8) && n8.size !== void 0;
  }), t4._zod.onattach.push((o15) => {
    let n8 = o15._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    e7.minimum > n8 && (o15._zod.bag.minimum = e7.minimum);
  }), t4._zod.check = (o15) => {
    let n8 = o15.value;
    n8.size >= e7.minimum || o15.issues.push({ origin: K9(n8), code: "too_small", minimum: e7.minimum, input: n8, inst: t4, continue: !e7.abort });
  };
});
var bt4 = l7("$ZodCheckSizeEquals", (t4, e7) => {
  var r36;
  Z8.init(t4, e7), (r36 = t4._zod.def).when ?? (r36.when = (o15) => {
    let n8 = o15.value;
    return !A11(n8) && n8.size !== void 0;
  }), t4._zod.onattach.push((o15) => {
    let n8 = o15._zod.bag;
    n8.minimum = e7.size, n8.maximum = e7.size, n8.size = e7.size;
  }), t4._zod.check = (o15) => {
    let n8 = o15.value, i10 = n8.size;
    if (i10 === e7.size) return;
    let s9 = i10 > e7.size;
    o15.issues.push({ origin: K9(n8), ...s9 ? { code: "too_big", maximum: e7.size } : { code: "too_small", minimum: e7.size }, inclusive: true, exact: true, input: o15.value, inst: t4, continue: !e7.abort });
  };
});
var yt3 = l7("$ZodCheckMaxLength", (t4, e7) => {
  var r36;
  Z8.init(t4, e7), (r36 = t4._zod.def).when ?? (r36.when = (o15) => {
    let n8 = o15.value;
    return !A11(n8) && n8.length !== void 0;
  }), t4._zod.onattach.push((o15) => {
    let n8 = o15._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    e7.maximum < n8 && (o15._zod.bag.maximum = e7.maximum);
  }), t4._zod.check = (o15) => {
    let n8 = o15.value;
    if (n8.length <= e7.maximum) return;
    let s9 = G10(n8);
    o15.issues.push({ origin: s9, code: "too_big", maximum: e7.maximum, inclusive: true, input: n8, inst: t4, continue: !e7.abort });
  };
});
var wt3 = l7("$ZodCheckMinLength", (t4, e7) => {
  var r36;
  Z8.init(t4, e7), (r36 = t4._zod.def).when ?? (r36.when = (o15) => {
    let n8 = o15.value;
    return !A11(n8) && n8.length !== void 0;
  }), t4._zod.onattach.push((o15) => {
    let n8 = o15._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    e7.minimum > n8 && (o15._zod.bag.minimum = e7.minimum);
  }), t4._zod.check = (o15) => {
    let n8 = o15.value;
    if (n8.length >= e7.minimum) return;
    let s9 = G10(n8);
    o15.issues.push({ origin: s9, code: "too_small", minimum: e7.minimum, inclusive: true, input: n8, inst: t4, continue: !e7.abort });
  };
});
var kt4 = l7("$ZodCheckLengthEquals", (t4, e7) => {
  var r36;
  Z8.init(t4, e7), (r36 = t4._zod.def).when ?? (r36.when = (o15) => {
    let n8 = o15.value;
    return !A11(n8) && n8.length !== void 0;
  }), t4._zod.onattach.push((o15) => {
    let n8 = o15._zod.bag;
    n8.minimum = e7.length, n8.maximum = e7.length, n8.length = e7.length;
  }), t4._zod.check = (o15) => {
    let n8 = o15.value, i10 = n8.length;
    if (i10 === e7.length) return;
    let s9 = G10(n8), u17 = i10 > e7.length;
    o15.issues.push({ origin: s9, ...u17 ? { code: "too_big", maximum: e7.length } : { code: "too_small", minimum: e7.length }, inclusive: true, exact: true, input: o15.value, inst: t4, continue: !e7.abort });
  };
});
var Y5 = l7("$ZodCheckStringFormat", (t4, e7) => {
  var r36, o15;
  Z8.init(t4, e7), t4._zod.onattach.push((n8) => {
    let i10 = n8._zod.bag;
    i10.format = e7.format, e7.pattern && (i10.patterns ?? (i10.patterns = /* @__PURE__ */ new Set()), i10.patterns.add(e7.pattern));
  }), e7.pattern ? (r36 = t4._zod).check ?? (r36.check = (n8) => {
    e7.pattern.lastIndex = 0, !e7.pattern.test(n8.value) && n8.issues.push({ origin: "string", code: "invalid_format", format: e7.format, input: n8.value, ...e7.pattern ? { pattern: e7.pattern.toString() } : {}, inst: t4, continue: !e7.abort });
  }) : (o15 = t4._zod).check ?? (o15.check = () => {
  });
});
var Zt3 = l7("$ZodCheckRegex", (t4, e7) => {
  Y5.init(t4, e7), t4._zod.check = (r36) => {
    e7.pattern.lastIndex = 0, !e7.pattern.test(r36.value) && r36.issues.push({ origin: "string", code: "invalid_format", format: "regex", input: r36.value, pattern: e7.pattern.toString(), inst: t4, continue: !e7.abort });
  };
});
var Pt4 = l7("$ZodCheckLowerCase", (t4, e7) => {
  e7.pattern ?? (e7.pattern = qe3), Y5.init(t4, e7);
});
var St3 = l7("$ZodCheckUpperCase", (t4, e7) => {
  e7.pattern ?? (e7.pattern = Ye3), Y5.init(t4, e7);
});
var Et3 = l7("$ZodCheckIncludes", (t4, e7) => {
  Z8.init(t4, e7);
  let r36 = O9(e7.includes), o15 = new RegExp(typeof e7.position == "number" ? `^.{${e7.position}}${r36}` : r36);
  e7.pattern = o15, t4._zod.onattach.push((n8) => {
    let i10 = n8._zod.bag;
    i10.patterns ?? (i10.patterns = /* @__PURE__ */ new Set()), i10.patterns.add(o15);
  }), t4._zod.check = (n8) => {
    n8.value.includes(e7.includes, e7.position) || n8.issues.push({ origin: "string", code: "invalid_format", format: "includes", includes: e7.includes, input: n8.value, inst: t4, continue: !e7.abort });
  };
});
var It3 = l7("$ZodCheckStartsWith", (t4, e7) => {
  Z8.init(t4, e7);
  let r36 = new RegExp(`^${O9(e7.prefix)}.*`);
  e7.pattern ?? (e7.pattern = r36), t4._zod.onattach.push((o15) => {
    let n8 = o15._zod.bag;
    n8.patterns ?? (n8.patterns = /* @__PURE__ */ new Set()), n8.patterns.add(r36);
  }), t4._zod.check = (o15) => {
    o15.value.startsWith(e7.prefix) || o15.issues.push({ origin: "string", code: "invalid_format", format: "starts_with", prefix: e7.prefix, input: o15.value, inst: t4, continue: !e7.abort });
  };
});
var Tt3 = l7("$ZodCheckEndsWith", (t4, e7) => {
  Z8.init(t4, e7);
  let r36 = new RegExp(`.*${O9(e7.suffix)}$`);
  e7.pattern ?? (e7.pattern = r36), t4._zod.onattach.push((o15) => {
    let n8 = o15._zod.bag;
    n8.patterns ?? (n8.patterns = /* @__PURE__ */ new Set()), n8.patterns.add(r36);
  }), t4._zod.check = (o15) => {
    o15.value.endsWith(e7.suffix) || o15.issues.push({ origin: "string", code: "invalid_format", format: "ends_with", suffix: e7.suffix, input: o15.value, inst: t4, continue: !e7.abort });
  };
});
function dt4(t4, e7, r36) {
  t4.issues.length && e7.issues.push(...S11(r36, t4.issues));
}
var Ot3 = l7("$ZodCheckProperty", (t4, e7) => {
  Z8.init(t4, e7), t4._zod.check = (r36) => {
    let o15 = e7.schema._zod.run({ value: r36.value[e7.property], issues: [] }, {});
    if (o15 instanceof Promise) return o15.then((n8) => dt4(n8, r36, e7.property));
    dt4(o15, r36, e7.property);
  };
});
var At4 = l7("$ZodCheckMimeType", (t4, e7) => {
  Z8.init(t4, e7);
  let r36 = new Set(e7.mime);
  t4._zod.onattach.push((o15) => {
    o15._zod.bag.mime = e7.mime;
  }), t4._zod.check = (o15) => {
    r36.has(o15.value.type) || o15.issues.push({ code: "invalid_value", values: e7.mime, input: o15.value.type, inst: t4 });
  };
});
var Nt3 = l7("$ZodCheckOverwrite", (t4, e7) => {
  Z8.init(t4, e7), t4._zod.check = (r36) => {
    r36.value = e7.tx(r36.value);
  };
});
var ne3 = class {
  constructor(e7 = []) {
    this.content = [], this.indent = 0, this && (this.args = e7);
  }
  indented(e7) {
    this.indent += 1, e7(this), this.indent -= 1;
  }
  write(e7) {
    if (typeof e7 == "function") {
      e7(this, { execution: "sync" }), e7(this, { execution: "async" });
      return;
    }
    let o15 = e7.split(`
`).filter((s9) => s9), n8 = Math.min(...o15.map((s9) => s9.length - s9.trimStart().length)), i10 = o15.map((s9) => s9.slice(n8)).map((s9) => " ".repeat(this.indent * 2) + s9);
    for (let s9 of i10) this.content.push(s9);
  }
  compile() {
    let e7 = Function, r36 = this?.args, n8 = [...(this?.content ?? [""]).map((i10) => `  ${i10}`)];
    return new e7(...r36, n8.join(`
`));
  }
};
var Rt3 = { major: 4, minor: 0, patch: 0 };
var v4 = l7("$ZodType", (t4, e7) => {
  var r36;
  t4 ?? (t4 = {}), t4._zod.def = e7, t4._zod.bag = t4._zod.bag || {}, t4._zod.version = Rt3;
  let o15 = [...t4._zod.def.checks ?? []];
  t4._zod.traits.has("$ZodCheck") && o15.unshift(t4);
  for (let n8 of o15) for (let i10 of n8._zod.onattach) i10(t4);
  if (o15.length === 0) (r36 = t4._zod).deferred ?? (r36.deferred = []), t4._zod.deferred?.push(() => {
    t4._zod.run = t4._zod.parse;
  });
  else {
    let n8 = (i10, s9, u17) => {
      let p15 = C9(i10), m20;
      for (let h24 of s9) {
        if (h24._zod.def.when) {
          if (!h24._zod.def.when(i10)) continue;
        } else if (p15) continue;
        let a8 = i10.issues.length, x24 = h24._zod.check(i10);
        if (x24 instanceof Promise && u17?.async === false) throw new T7();
        if (m20 || x24 instanceof Promise) m20 = (m20 ?? Promise.resolve()).then(async () => {
          await x24, i10.issues.length !== a8 && (p15 || (p15 = C9(i10, a8)));
        });
        else {
          if (i10.issues.length === a8) continue;
          p15 || (p15 = C9(i10, a8));
        }
      }
      return m20 ? m20.then(() => i10) : i10;
    };
    t4._zod.run = (i10, s9) => {
      let u17 = t4._zod.parse(i10, s9);
      if (u17 instanceof Promise) {
        if (s9.async === false) throw new T7();
        return u17.then((p15) => n8(p15, o15, s9));
      }
      return n8(u17, o15, s9);
    };
  }
  t4["~standard"] = { validate: (n8) => {
    try {
      let i10 = lt4(t4, n8);
      return i10.success ? { value: i10.data } : { issues: i10.error?.issues };
    } catch {
      return pt4(t4, n8).then((s9) => s9.success ? { value: s9.data } : { issues: s9.error?.issues });
    }
  }, vendor: "zod", version: 1 };
});
var et4 = l7("$ZodString", (t4, e7) => {
  v4.init(t4, e7), t4._zod.pattern = [...t4?._zod.bag?.patterns ?? []].pop() ?? Ue3(t4._zod.bag), t4._zod.parse = (r36, o15) => {
    if (e7.coerce) try {
      r36.value = String(r36.value);
    } catch {
    }
    return typeof r36.value == "string" || r36.issues.push({ expected: "string", code: "invalid_type", input: r36.value, inst: t4 }), r36;
  };
});
var k12 = l7("$ZodStringFormat", (t4, e7) => {
  Y5.init(t4, e7), et4.init(t4, e7);
});
var ln = l7("$ZodGUID", (t4, e7) => {
  e7.pattern ?? (e7.pattern = Ee3), k12.init(t4, e7);
});
var pn = l7("$ZodUUID", (t4, e7) => {
  if (e7.version) {
    let o15 = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[e7.version];
    if (o15 === void 0) throw new Error(`Invalid UUID version: "${e7.version}"`);
    e7.pattern ?? (e7.pattern = M11(o15));
  } else e7.pattern ?? (e7.pattern = M11());
  k12.init(t4, e7);
});
var fn = l7("$ZodEmail", (t4, e7) => {
  e7.pattern ?? (e7.pattern = Ie3), k12.init(t4, e7);
});
var mn = l7("$ZodURL", (t4, e7) => {
  k12.init(t4, e7), t4._zod.check = (r36) => {
    try {
      let o15 = r36.value, n8 = new URL(o15), i10 = n8.href;
      e7.hostname && (e7.hostname.lastIndex = 0, e7.hostname.test(n8.hostname) || r36.issues.push({ code: "invalid_format", format: "url", note: "Invalid hostname", pattern: Ce4.source, input: r36.value, inst: t4, continue: !e7.abort })), e7.protocol && (e7.protocol.lastIndex = 0, e7.protocol.test(n8.protocol.endsWith(":") ? n8.protocol.slice(0, -1) : n8.protocol) || r36.issues.push({ code: "invalid_format", format: "url", note: "Invalid protocol", pattern: e7.protocol.source, input: r36.value, inst: t4, continue: !e7.abort })), !o15.endsWith("/") && i10.endsWith("/") ? r36.value = i10.slice(0, -1) : r36.value = i10;
      return;
    } catch {
      r36.issues.push({ code: "invalid_format", format: "url", input: r36.value, inst: t4, continue: !e7.abort });
    }
  };
});
var hn = l7("$ZodEmoji", (t4, e7) => {
  e7.pattern ?? (e7.pattern = Te3()), k12.init(t4, e7);
});
var dn = l7("$ZodNanoID", (t4, e7) => {
  e7.pattern ?? (e7.pattern = Pe4), k12.init(t4, e7);
});
var _n = l7("$ZodCUID", (t4, e7) => {
  e7.pattern ?? (e7.pattern = be4), k12.init(t4, e7);
});
var gn = l7("$ZodCUID2", (t4, e7) => {
  e7.pattern ?? (e7.pattern = ye3), k12.init(t4, e7);
});
var xn = l7("$ZodULID", (t4, e7) => {
  e7.pattern ?? (e7.pattern = we2), k12.init(t4, e7);
});
var zn = l7("$ZodXID", (t4, e7) => {
  e7.pattern ?? (e7.pattern = ke3), k12.init(t4, e7);
});
var vn = l7("$ZodKSUID", (t4, e7) => {
  e7.pattern ?? (e7.pattern = Ze3), k12.init(t4, e7);
});
var $n = l7("$ZodISODateTime", (t4, e7) => {
  e7.pattern ?? (e7.pattern = De3(e7)), k12.init(t4, e7);
});
var bn = l7("$ZodISODate", (t4, e7) => {
  e7.pattern ?? (e7.pattern = Me3), k12.init(t4, e7);
});
var yn = l7("$ZodISOTime", (t4, e7) => {
  e7.pattern ?? (e7.pattern = Fe3(e7)), k12.init(t4, e7);
});
var wn = l7("$ZodISODuration", (t4, e7) => {
  e7.pattern ?? (e7.pattern = Se6), k12.init(t4, e7);
});
var kn = l7("$ZodIPv4", (t4, e7) => {
  e7.pattern ?? (e7.pattern = Oe3), k12.init(t4, e7), t4._zod.onattach.push((r36) => {
    let o15 = r36._zod.bag;
    o15.format = "ipv4";
  });
});
var Zn = l7("$ZodIPv6", (t4, e7) => {
  e7.pattern ?? (e7.pattern = Ae4), k12.init(t4, e7), t4._zod.onattach.push((r36) => {
    let o15 = r36._zod.bag;
    o15.format = "ipv6";
  }), t4._zod.check = (r36) => {
    try {
      new URL(`http://[${r36.value}]`);
    } catch {
      r36.issues.push({ code: "invalid_format", format: "ipv6", input: r36.value, inst: t4, continue: !e7.abort });
    }
  };
});
var Pn = l7("$ZodCIDRv4", (t4, e7) => {
  e7.pattern ?? (e7.pattern = Ne3), k12.init(t4, e7);
});
var Sn = l7("$ZodCIDRv6", (t4, e7) => {
  e7.pattern ?? (e7.pattern = je3), k12.init(t4, e7), t4._zod.check = (r36) => {
    let [o15, n8] = r36.value.split("/");
    try {
      if (!n8) throw new Error();
      let i10 = Number(n8);
      if (`${i10}` !== n8) throw new Error();
      if (i10 < 0 || i10 > 128) throw new Error();
      new URL(`http://[${o15}]`);
    } catch {
      r36.issues.push({ code: "invalid_format", format: "cidrv6", input: r36.value, inst: t4, continue: !e7.abort });
    }
  };
});
function Gt(t4) {
  if (t4 === "") return true;
  if (t4.length % 4 !== 0) return false;
  try {
    return atob(t4), true;
  } catch {
    return false;
  }
}
var En = l7("$ZodBase64", (t4, e7) => {
  e7.pattern ?? (e7.pattern = Re3), k12.init(t4, e7), t4._zod.onattach.push((r36) => {
    r36._zod.bag.contentEncoding = "base64";
  }), t4._zod.check = (r36) => {
    Gt(r36.value) || r36.issues.push({ code: "invalid_format", format: "base64", input: r36.value, inst: t4, continue: !e7.abort });
  };
});
function Lr(t4) {
  if (!te4.test(t4)) return false;
  let e7 = t4.replace(/[-_]/g, (o15) => o15 === "-" ? "+" : "/"), r36 = e7.padEnd(Math.ceil(e7.length / 4) * 4, "=");
  return Gt(r36);
}
var In = l7("$ZodBase64URL", (t4, e7) => {
  e7.pattern ?? (e7.pattern = te4), k12.init(t4, e7), t4._zod.onattach.push((r36) => {
    r36._zod.bag.contentEncoding = "base64url";
  }), t4._zod.check = (r36) => {
    Lr(r36.value) || r36.issues.push({ code: "invalid_format", format: "base64url", input: r36.value, inst: t4, continue: !e7.abort });
  };
});
var Tn = l7("$ZodE164", (t4, e7) => {
  e7.pattern ?? (e7.pattern = Le3), k12.init(t4, e7);
});
function Mr2(t4, e7 = null) {
  try {
    let r36 = t4.split(".");
    if (r36.length !== 3) return false;
    let [o15] = r36;
    if (!o15) return false;
    let n8 = JSON.parse(atob(o15));
    return !("typ" in n8 && n8?.typ !== "JWT" || !n8.alg || e7 && (!("alg" in n8) || n8.alg !== e7));
  } catch {
    return false;
  }
}
var On = l7("$ZodJWT", (t4, e7) => {
  k12.init(t4, e7), t4._zod.check = (r36) => {
    Mr2(r36.value, e7.alg) || r36.issues.push({ code: "invalid_format", format: "jwt", input: r36.value, inst: t4, continue: !e7.abort });
  };
});
var An = l7("$ZodCustomStringFormat", (t4, e7) => {
  k12.init(t4, e7), t4._zod.check = (r36) => {
    e7.fn(r36.value) || r36.issues.push({ code: "invalid_format", format: e7.format, input: r36.value, inst: t4, continue: !e7.abort });
  };
});
var Fr = l7("$ZodNumber", (t4, e7) => {
  v4.init(t4, e7), t4._zod.pattern = t4._zod.bag.pattern ?? Je3, t4._zod.parse = (r36, o15) => {
    if (e7.coerce) try {
      r36.value = Number(r36.value);
    } catch {
    }
    let n8 = r36.value;
    if (typeof n8 == "number" && !Number.isNaN(n8) && Number.isFinite(n8)) return r36;
    let i10 = typeof n8 == "number" ? Number.isNaN(n8) ? "NaN" : Number.isFinite(n8) ? void 0 : "Infinity" : void 0;
    return r36.issues.push({ expected: "number", code: "invalid_type", input: n8, inst: t4, ...i10 ? { received: i10 } : {} }), r36;
  };
});
var Nn = l7("$ZodNumber", (t4, e7) => {
  xt3.init(t4, e7), Fr.init(t4, e7);
});
var qt3 = l7("$ZodBoolean", (t4, e7) => {
  v4.init(t4, e7), t4._zod.pattern = We3, t4._zod.parse = (r36, o15) => {
    if (e7.coerce) try {
      r36.value = !!r36.value;
    } catch {
    }
    let n8 = r36.value;
    return typeof n8 == "boolean" || r36.issues.push({ expected: "boolean", code: "invalid_type", input: n8, inst: t4 }), r36;
  };
});
var Dr = l7("$ZodBigInt", (t4, e7) => {
  v4.init(t4, e7), t4._zod.pattern = Ve3, t4._zod.parse = (r36, o15) => {
    if (e7.coerce) try {
      r36.value = BigInt(r36.value);
    } catch {
    }
    return typeof r36.value == "bigint" || r36.issues.push({ expected: "bigint", code: "invalid_type", input: r36.value, inst: t4 }), r36;
  };
});
var jn = l7("$ZodBigInt", (t4, e7) => {
  zt3.init(t4, e7), Dr.init(t4, e7);
});
var Rn = l7("$ZodSymbol", (t4, e7) => {
  v4.init(t4, e7), t4._zod.parse = (r36, o15) => {
    let n8 = r36.value;
    return typeof n8 == "symbol" || r36.issues.push({ expected: "symbol", code: "invalid_type", input: n8, inst: t4 }), r36;
  };
});
var Cn = l7("$ZodUndefined", (t4, e7) => {
  v4.init(t4, e7), t4._zod.pattern = Ge3, t4._zod.values = /* @__PURE__ */ new Set([void 0]), t4._zod.optin = "optional", t4._zod.optout = "optional", t4._zod.parse = (r36, o15) => {
    let n8 = r36.value;
    return typeof n8 > "u" || r36.issues.push({ expected: "undefined", code: "invalid_type", input: n8, inst: t4 }), r36;
  };
});
var Ln = l7("$ZodNull", (t4, e7) => {
  v4.init(t4, e7), t4._zod.pattern = Ke3, t4._zod.values = /* @__PURE__ */ new Set([null]), t4._zod.parse = (r36, o15) => {
    let n8 = r36.value;
    return n8 === null || r36.issues.push({ expected: "null", code: "invalid_type", input: n8, inst: t4 }), r36;
  };
});
var Mn = l7("$ZodAny", (t4, e7) => {
  v4.init(t4, e7), t4._zod.parse = (r36) => r36;
});
var tt4 = l7("$ZodUnknown", (t4, e7) => {
  v4.init(t4, e7), t4._zod.parse = (r36) => r36;
});
var Fn = l7("$ZodNever", (t4, e7) => {
  v4.init(t4, e7), t4._zod.parse = (r36, o15) => (r36.issues.push({ expected: "never", code: "invalid_type", input: r36.value, inst: t4 }), r36);
});
var Dn = l7("$ZodVoid", (t4, e7) => {
  v4.init(t4, e7), t4._zod.parse = (r36, o15) => {
    let n8 = r36.value;
    return typeof n8 > "u" || r36.issues.push({ expected: "void", code: "invalid_type", input: n8, inst: t4 }), r36;
  };
});
var Un = l7("$ZodDate", (t4, e7) => {
  v4.init(t4, e7), t4._zod.parse = (r36, o15) => {
    if (e7.coerce) try {
      r36.value = new Date(r36.value);
    } catch {
    }
    let n8 = r36.value, i10 = n8 instanceof Date;
    return i10 && !Number.isNaN(n8.getTime()) || r36.issues.push({ expected: "date", code: "invalid_type", input: n8, ...i10 ? { received: "Invalid Date" } : {}, inst: t4 }), r36;
  };
});
function Ct4(t4, e7, r36) {
  t4.issues.length && e7.issues.push(...S11(r36, t4.issues)), e7.value[r36] = t4.value;
}
var Yt = l7("$ZodArray", (t4, e7) => {
  v4.init(t4, e7), t4._zod.parse = (r36, o15) => {
    let n8 = r36.value;
    if (!Array.isArray(n8)) return r36.issues.push({ expected: "array", code: "invalid_type", input: n8, inst: t4 }), r36;
    r36.value = Array(n8.length);
    let i10 = [];
    for (let s9 = 0; s9 < n8.length; s9++) {
      let u17 = n8[s9], p15 = e7.element._zod.run({ value: u17, issues: [] }, o15);
      p15 instanceof Promise ? i10.push(p15.then((m20) => Ct4(m20, r36, s9))) : Ct4(p15, r36, s9);
    }
    return i10.length ? Promise.all(i10).then(() => r36) : r36;
  };
});
function oe3(t4, e7, r36) {
  t4.issues.length && e7.issues.push(...S11(r36, t4.issues)), e7.value[r36] = t4.value;
}
function Lt4(t4, e7, r36, o15) {
  t4.issues.length ? o15[r36] === void 0 ? r36 in o15 ? e7.value[r36] = void 0 : e7.value[r36] = t4.value : e7.issues.push(...S11(r36, t4.issues)) : t4.value === void 0 ? r36 in o15 && (e7.value[r36] = void 0) : e7.value[r36] = t4.value;
}
var Vn = l7("$ZodObject", (t4, e7) => {
  v4.init(t4, e7);
  let r36 = B9(() => {
    let a8 = Object.keys(e7.shape);
    for (let d24 of a8) if (!(e7.shape[d24] instanceof v4)) throw new Error(`Invalid element at key "${d24}": expected a Zod schema`);
    let x24 = _e3(e7.shape);
    return { shape: e7.shape, keys: a8, keySet: new Set(a8), numKeys: a8.length, optionalKeys: new Set(x24) };
  });
  b8(t4._zod, "propValues", () => {
    let a8 = e7.shape, x24 = {};
    for (let d24 in a8) {
      let c14 = a8[d24]._zod;
      if (c14.values) {
        x24[d24] ?? (x24[d24] = /* @__PURE__ */ new Set());
        for (let _17 of c14.values) x24[d24].add(_17);
      }
    }
    return x24;
  });
  let o15 = (a8) => {
    let x24 = new ne3(["shape", "payload", "ctx"]), d24 = r36.value, c14 = (z20) => {
      let $20 = R7(z20);
      return `shape[${$20}]._zod.run({ value: input[${$20}], issues: [] }, ctx)`;
    };
    x24.write("const input = payload.value;");
    let _17 = /* @__PURE__ */ Object.create(null), g21 = 0;
    for (let z20 of d24.keys) _17[z20] = `key_${g21++}`;
    x24.write("const newResult = {}");
    for (let z20 of d24.keys) if (d24.optionalKeys.has(z20)) {
      let $20 = _17[z20];
      x24.write(`const ${$20} = ${c14(z20)};`);
      let y18 = R7(z20);
      x24.write(`
        if (${$20}.issues.length) {
          if (input[${y18}] === undefined) {
            if (${y18} in input) {
              newResult[${y18}] = undefined;
            }
          } else {
            payload.issues = payload.issues.concat(
              ${$20}.issues.map((iss) => ({
                ...iss,
                path: iss.path ? [${y18}, ...iss.path] : [${y18}],
              }))
            );
          }
        } else if (${$20}.value === undefined) {
          if (${y18} in input) newResult[${y18}] = undefined;
        } else {
          newResult[${y18}] = ${$20}.value;
        }
        `);
    } else {
      let $20 = _17[z20];
      x24.write(`const ${$20} = ${c14(z20)};`), x24.write(`
          if (${$20}.issues.length) payload.issues = payload.issues.concat(${$20}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${R7(z20)}, ...iss.path] : [${R7(z20)}]
          })));`), x24.write(`newResult[${R7(z20)}] = ${$20}.value`);
    }
    x24.write("payload.value = newResult;"), x24.write("return payload;");
    let w21 = x24.compile();
    return (z20, $20) => w21(a8, z20, $20);
  }, n8, i10 = F11, s9 = !Q10.jitless, p15 = s9 && he4.value, m20 = e7.catchall, h24;
  t4._zod.parse = (a8, x24) => {
    h24 ?? (h24 = r36.value);
    let d24 = a8.value;
    if (!i10(d24)) return a8.issues.push({ expected: "object", code: "invalid_type", input: d24, inst: t4 }), a8;
    let c14 = [];
    if (s9 && p15 && x24?.async === false && x24.jitless !== true) n8 || (n8 = o15(e7.shape)), a8 = n8(a8, x24);
    else {
      a8.value = {};
      let $20 = h24.shape;
      for (let y18 of h24.keys) {
        let j26 = $20[y18], H20 = j26._zod.run({ value: d24[y18], issues: [] }, x24), ot8 = j26._zod.optin === "optional" && j26._zod.optout === "optional";
        H20 instanceof Promise ? c14.push(H20.then((it8) => ot8 ? Lt4(it8, a8, y18, d24) : oe3(it8, a8, y18))) : ot8 ? Lt4(H20, a8, y18, d24) : oe3(H20, a8, y18);
      }
    }
    if (!m20) return c14.length ? Promise.all(c14).then(() => a8) : a8;
    let _17 = [], g21 = h24.keySet, w21 = m20._zod, z20 = w21.def.type;
    for (let $20 of Object.keys(d24)) {
      if (g21.has($20)) continue;
      if (z20 === "never") {
        _17.push($20);
        continue;
      }
      let y18 = w21.run({ value: d24[$20], issues: [] }, x24);
      y18 instanceof Promise ? c14.push(y18.then((j26) => oe3(j26, a8, $20))) : oe3(y18, a8, $20);
    }
    return _17.length && a8.issues.push({ code: "unrecognized_keys", keys: _17, input: d24, inst: t4 }), c14.length ? Promise.all(c14).then(() => a8) : a8;
  };
});
function Mt3(t4, e7, r36, o15) {
  for (let n8 of t4) if (n8.issues.length === 0) return e7.value = n8.value, e7;
  return e7.issues.push({ code: "invalid_union", input: e7.value, inst: r36, errors: t4.map((n8) => n8.issues.map((i10) => E9(i10, o15, I7()))) }), e7;
}
var Ur = l7("$ZodUnion", (t4, e7) => {
  v4.init(t4, e7), b8(t4._zod, "optin", () => e7.options.some((r36) => r36._zod.optin === "optional") ? "optional" : void 0), b8(t4._zod, "optout", () => e7.options.some((r36) => r36._zod.optout === "optional") ? "optional" : void 0), b8(t4._zod, "values", () => {
    if (e7.options.every((r36) => r36._zod.values)) return new Set(e7.options.flatMap((r36) => Array.from(r36._zod.values)));
  }), b8(t4._zod, "pattern", () => {
    if (e7.options.every((r36) => r36._zod.pattern)) {
      let r36 = e7.options.map((o15) => o15._zod.pattern);
      return new RegExp(`^(${r36.map((o15) => J10(o15.source)).join("|")})$`);
    }
  }), t4._zod.parse = (r36, o15) => {
    let n8 = false, i10 = [];
    for (let s9 of e7.options) {
      let u17 = s9._zod.run({ value: r36.value, issues: [] }, o15);
      if (u17 instanceof Promise) i10.push(u17), n8 = true;
      else {
        if (u17.issues.length === 0) return u17;
        i10.push(u17);
      }
    }
    return n8 ? Promise.all(i10).then((s9) => Mt3(s9, r36, t4, o15)) : Mt3(i10, r36, t4, o15);
  };
});
var Bn = l7("$ZodDiscriminatedUnion", (t4, e7) => {
  Ur.init(t4, e7);
  let r36 = t4._zod.parse;
  b8(t4._zod, "propValues", () => {
    let n8 = {};
    for (let i10 of e7.options) {
      let s9 = i10._zod.propValues;
      if (!s9 || Object.keys(s9).length === 0) throw new Error(`Invalid discriminated union option at index "${e7.options.indexOf(i10)}"`);
      for (let [u17, p15] of Object.entries(s9)) {
        n8[u17] || (n8[u17] = /* @__PURE__ */ new Set());
        for (let m20 of p15) n8[u17].add(m20);
      }
    }
    return n8;
  });
  let o15 = B9(() => {
    let n8 = e7.options, i10 = /* @__PURE__ */ new Map();
    for (let s9 of n8) {
      let u17 = s9._zod.propValues[e7.discriminator];
      if (!u17 || u17.size === 0) throw new Error(`Invalid discriminated union option at index "${e7.options.indexOf(s9)}"`);
      for (let p15 of u17) {
        if (i10.has(p15)) throw new Error(`Duplicate discriminator value "${String(p15)}"`);
        i10.set(p15, s9);
      }
    }
    return i10;
  });
  t4._zod.parse = (n8, i10) => {
    let s9 = n8.value;
    if (!F11(s9)) return n8.issues.push({ code: "invalid_type", expected: "object", input: s9, inst: t4 }), n8;
    let u17 = o15.value.get(s9?.[e7.discriminator]);
    return u17 ? u17._zod.run(n8, i10) : e7.unionFallback ? r36(n8, i10) : (n8.issues.push({ code: "invalid_union", errors: [], note: "No matching discriminator", input: s9, path: [e7.discriminator], inst: t4 }), n8);
  };
});
var Jn = l7("$ZodIntersection", (t4, e7) => {
  v4.init(t4, e7), t4._zod.parse = (r36, o15) => {
    let n8 = r36.value, i10 = e7.left._zod.run({ value: n8, issues: [] }, o15), s9 = e7.right._zod.run({ value: n8, issues: [] }, o15);
    return i10 instanceof Promise || s9 instanceof Promise ? Promise.all([i10, s9]).then(([p15, m20]) => Ft3(r36, p15, m20)) : Ft3(r36, i10, s9);
  };
});
function Qe3(t4, e7) {
  if (t4 === e7) return { valid: true, data: t4 };
  if (t4 instanceof Date && e7 instanceof Date && +t4 == +e7) return { valid: true, data: t4 };
  if (D10(t4) && D10(e7)) {
    let r36 = Object.keys(e7), o15 = Object.keys(t4).filter((i10) => r36.indexOf(i10) !== -1), n8 = { ...t4, ...e7 };
    for (let i10 of o15) {
      let s9 = Qe3(t4[i10], e7[i10]);
      if (!s9.valid) return { valid: false, mergeErrorPath: [i10, ...s9.mergeErrorPath] };
      n8[i10] = s9.data;
    }
    return { valid: true, data: n8 };
  }
  if (Array.isArray(t4) && Array.isArray(e7)) {
    if (t4.length !== e7.length) return { valid: false, mergeErrorPath: [] };
    let r36 = [];
    for (let o15 = 0; o15 < t4.length; o15++) {
      let n8 = t4[o15], i10 = e7[o15], s9 = Qe3(n8, i10);
      if (!s9.valid) return { valid: false, mergeErrorPath: [o15, ...s9.mergeErrorPath] };
      r36.push(s9.data);
    }
    return { valid: true, data: r36 };
  }
  return { valid: false, mergeErrorPath: [] };
}
function Ft3(t4, e7, r36) {
  if (e7.issues.length && t4.issues.push(...e7.issues), r36.issues.length && t4.issues.push(...r36.issues), C9(t4)) return t4;
  let o15 = Qe3(e7.value, r36.value);
  if (!o15.valid) throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(o15.mergeErrorPath)}`);
  return t4.value = o15.data, t4;
}
var se4 = l7("$ZodTuple", (t4, e7) => {
  v4.init(t4, e7);
  let r36 = e7.items, o15 = r36.length - [...r36].reverse().findIndex((n8) => n8._zod.optin !== "optional");
  t4._zod.parse = (n8, i10) => {
    let s9 = n8.value;
    if (!Array.isArray(s9)) return n8.issues.push({ input: s9, inst: t4, expected: "tuple", code: "invalid_type" }), n8;
    n8.value = [];
    let u17 = [];
    if (!e7.rest) {
      let m20 = s9.length > r36.length, h24 = s9.length < o15 - 1;
      if (m20 || h24) return n8.issues.push({ input: s9, inst: t4, origin: "array", ...m20 ? { code: "too_big", maximum: r36.length } : { code: "too_small", minimum: r36.length } }), n8;
    }
    let p15 = -1;
    for (let m20 of r36) {
      if (p15++, p15 >= s9.length && p15 >= o15) continue;
      let h24 = m20._zod.run({ value: s9[p15], issues: [] }, i10);
      h24 instanceof Promise ? u17.push(h24.then((a8) => ie3(a8, n8, p15))) : ie3(h24, n8, p15);
    }
    if (e7.rest) {
      let m20 = s9.slice(r36.length);
      for (let h24 of m20) {
        p15++;
        let a8 = e7.rest._zod.run({ value: h24, issues: [] }, i10);
        a8 instanceof Promise ? u17.push(a8.then((x24) => ie3(x24, n8, p15))) : ie3(a8, n8, p15);
      }
    }
    return u17.length ? Promise.all(u17).then(() => n8) : n8;
  };
});
function ie3(t4, e7, r36) {
  t4.issues.length && e7.issues.push(...S11(r36, t4.issues)), e7.value[r36] = t4.value;
}
var Wn = l7("$ZodRecord", (t4, e7) => {
  v4.init(t4, e7), t4._zod.parse = (r36, o15) => {
    let n8 = r36.value;
    if (!D10(n8)) return r36.issues.push({ expected: "record", code: "invalid_type", input: n8, inst: t4 }), r36;
    let i10 = [];
    if (e7.keyType._zod.values) {
      let s9 = e7.keyType._zod.values;
      r36.value = {};
      for (let p15 of s9) if (typeof p15 == "string" || typeof p15 == "number" || typeof p15 == "symbol") {
        let m20 = e7.valueType._zod.run({ value: n8[p15], issues: [] }, o15);
        m20 instanceof Promise ? i10.push(m20.then((h24) => {
          h24.issues.length && r36.issues.push(...S11(p15, h24.issues)), r36.value[p15] = h24.value;
        })) : (m20.issues.length && r36.issues.push(...S11(p15, m20.issues)), r36.value[p15] = m20.value);
      }
      let u17;
      for (let p15 in n8) s9.has(p15) || (u17 = u17 ?? [], u17.push(p15));
      u17 && u17.length > 0 && r36.issues.push({ code: "unrecognized_keys", input: n8, inst: t4, keys: u17 });
    } else {
      r36.value = {};
      for (let s9 of Reflect.ownKeys(n8)) {
        if (s9 === "__proto__") continue;
        let u17 = e7.keyType._zod.run({ value: s9, issues: [] }, o15);
        if (u17 instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
        if (u17.issues.length) {
          r36.issues.push({ origin: "record", code: "invalid_key", issues: u17.issues.map((m20) => E9(m20, o15, I7())), input: s9, path: [s9], inst: t4 }), r36.value[u17.value] = u17.value;
          continue;
        }
        let p15 = e7.valueType._zod.run({ value: n8[s9], issues: [] }, o15);
        p15 instanceof Promise ? i10.push(p15.then((m20) => {
          m20.issues.length && r36.issues.push(...S11(s9, m20.issues)), r36.value[u17.value] = m20.value;
        })) : (p15.issues.length && r36.issues.push(...S11(s9, p15.issues)), r36.value[u17.value] = p15.value);
      }
    }
    return i10.length ? Promise.all(i10).then(() => r36) : r36;
  };
});
var Kn = l7("$ZodMap", (t4, e7) => {
  v4.init(t4, e7), t4._zod.parse = (r36, o15) => {
    let n8 = r36.value;
    if (!(n8 instanceof Map)) return r36.issues.push({ expected: "map", code: "invalid_type", input: n8, inst: t4 }), r36;
    let i10 = [];
    r36.value = /* @__PURE__ */ new Map();
    for (let [s9, u17] of n8) {
      let p15 = e7.keyType._zod.run({ value: s9, issues: [] }, o15), m20 = e7.valueType._zod.run({ value: u17, issues: [] }, o15);
      p15 instanceof Promise || m20 instanceof Promise ? i10.push(Promise.all([p15, m20]).then(([h24, a8]) => {
        Dt4(h24, a8, r36, s9, n8, t4, o15);
      })) : Dt4(p15, m20, r36, s9, n8, t4, o15);
    }
    return i10.length ? Promise.all(i10).then(() => r36) : r36;
  };
});
function Dt4(t4, e7, r36, o15, n8, i10, s9) {
  t4.issues.length && (W6.has(typeof o15) ? r36.issues.push(...S11(o15, t4.issues)) : r36.issues.push({ origin: "map", code: "invalid_key", input: n8, inst: i10, issues: t4.issues.map((u17) => E9(u17, s9, I7())) })), e7.issues.length && (W6.has(typeof o15) ? r36.issues.push(...S11(o15, e7.issues)) : r36.issues.push({ origin: "map", code: "invalid_element", input: n8, inst: i10, key: o15, issues: e7.issues.map((u17) => E9(u17, s9, I7())) })), r36.value.set(t4.value, e7.value);
}
var Gn = l7("$ZodSet", (t4, e7) => {
  v4.init(t4, e7), t4._zod.parse = (r36, o15) => {
    let n8 = r36.value;
    if (!(n8 instanceof Set)) return r36.issues.push({ input: n8, inst: t4, expected: "set", code: "invalid_type" }), r36;
    let i10 = [];
    r36.value = /* @__PURE__ */ new Set();
    for (let s9 of n8) {
      let u17 = e7.valueType._zod.run({ value: s9, issues: [] }, o15);
      u17 instanceof Promise ? i10.push(u17.then((p15) => Ut3(p15, r36))) : Ut3(u17, r36);
    }
    return i10.length ? Promise.all(i10).then(() => r36) : r36;
  };
});
function Ut3(t4, e7) {
  t4.issues.length && e7.issues.push(...t4.issues), e7.value.add(t4.value);
}
var qn = l7("$ZodEnum", (t4, e7) => {
  v4.init(t4, e7);
  let r36 = V10(e7.entries);
  t4._zod.values = new Set(r36), t4._zod.pattern = new RegExp(`^(${r36.filter((o15) => W6.has(typeof o15)).map((o15) => typeof o15 == "string" ? O9(o15) : o15.toString()).join("|")})$`), t4._zod.parse = (o15, n8) => {
    let i10 = o15.value;
    return t4._zod.values.has(i10) || o15.issues.push({ code: "invalid_value", values: r36, input: i10, inst: t4 }), o15;
  };
});
var Yn = l7("$ZodLiteral", (t4, e7) => {
  v4.init(t4, e7), t4._zod.values = new Set(e7.values), t4._zod.pattern = new RegExp(`^(${e7.values.map((r36) => typeof r36 == "string" ? O9(r36) : r36 ? r36.toString() : String(r36)).join("|")})$`), t4._zod.parse = (r36, o15) => {
    let n8 = r36.value;
    return t4._zod.values.has(n8) || r36.issues.push({ code: "invalid_value", values: e7.values, input: n8, inst: t4 }), r36;
  };
});
var Xn = l7("$ZodFile", (t4, e7) => {
  v4.init(t4, e7), t4._zod.parse = (r36, o15) => {
    let n8 = r36.value;
    return n8 instanceof File || r36.issues.push({ expected: "file", code: "invalid_type", input: n8, inst: t4 }), r36;
  };
});
var Xt = l7("$ZodTransform", (t4, e7) => {
  v4.init(t4, e7), t4._zod.parse = (r36, o15) => {
    let n8 = e7.transform(r36.value, r36);
    if (o15.async) return (n8 instanceof Promise ? n8 : Promise.resolve(n8)).then((s9) => (r36.value = s9, r36));
    if (n8 instanceof Promise) throw new T7();
    return r36.value = n8, r36;
  };
});
var Hn = l7("$ZodOptional", (t4, e7) => {
  v4.init(t4, e7), t4._zod.optin = "optional", t4._zod.optout = "optional", b8(t4._zod, "values", () => e7.innerType._zod.values ? /* @__PURE__ */ new Set([...e7.innerType._zod.values, void 0]) : void 0), b8(t4._zod, "pattern", () => {
    let r36 = e7.innerType._zod.pattern;
    return r36 ? new RegExp(`^(${J10(r36.source)})?$`) : void 0;
  }), t4._zod.parse = (r36, o15) => e7.innerType._zod.optin === "optional" ? e7.innerType._zod.run(r36, o15) : r36.value === void 0 ? r36 : e7.innerType._zod.run(r36, o15);
});
var Qn = l7("$ZodNullable", (t4, e7) => {
  v4.init(t4, e7), b8(t4._zod, "optin", () => e7.innerType._zod.optin), b8(t4._zod, "optout", () => e7.innerType._zod.optout), b8(t4._zod, "pattern", () => {
    let r36 = e7.innerType._zod.pattern;
    return r36 ? new RegExp(`^(${J10(r36.source)}|null)$`) : void 0;
  }), b8(t4._zod, "values", () => e7.innerType._zod.values ? /* @__PURE__ */ new Set([...e7.innerType._zod.values, null]) : void 0), t4._zod.parse = (r36, o15) => r36.value === null ? r36 : e7.innerType._zod.run(r36, o15);
});
var eo = l7("$ZodDefault", (t4, e7) => {
  v4.init(t4, e7), t4._zod.optin = "optional", b8(t4._zod, "values", () => e7.innerType._zod.values), t4._zod.parse = (r36, o15) => {
    if (r36.value === void 0) return r36.value = e7.defaultValue, r36;
    let n8 = e7.innerType._zod.run(r36, o15);
    return n8 instanceof Promise ? n8.then((i10) => Vt3(i10, e7)) : Vt3(n8, e7);
  };
});
function Vt3(t4, e7) {
  return t4.value === void 0 && (t4.value = e7.defaultValue), t4;
}
var to = l7("$ZodPrefault", (t4, e7) => {
  v4.init(t4, e7), t4._zod.optin = "optional", b8(t4._zod, "values", () => e7.innerType._zod.values), t4._zod.parse = (r36, o15) => (r36.value === void 0 && (r36.value = e7.defaultValue), e7.innerType._zod.run(r36, o15));
});
var ro = l7("$ZodNonOptional", (t4, e7) => {
  v4.init(t4, e7), b8(t4._zod, "values", () => {
    let r36 = e7.innerType._zod.values;
    return r36 ? new Set([...r36].filter((o15) => o15 !== void 0)) : void 0;
  }), t4._zod.parse = (r36, o15) => {
    let n8 = e7.innerType._zod.run(r36, o15);
    return n8 instanceof Promise ? n8.then((i10) => Bt3(i10, t4)) : Bt3(n8, t4);
  };
});
function Bt3(t4, e7) {
  return !t4.issues.length && t4.value === void 0 && t4.issues.push({ code: "invalid_type", expected: "nonoptional", input: t4.value, inst: e7 }), t4;
}
var no = l7("$ZodSuccess", (t4, e7) => {
  v4.init(t4, e7), t4._zod.parse = (r36, o15) => {
    let n8 = e7.innerType._zod.run(r36, o15);
    return n8 instanceof Promise ? n8.then((i10) => (r36.value = i10.issues.length === 0, r36)) : (r36.value = n8.issues.length === 0, r36);
  };
});
var oo = l7("$ZodCatch", (t4, e7) => {
  v4.init(t4, e7), t4._zod.optin = "optional", b8(t4._zod, "optout", () => e7.innerType._zod.optout), b8(t4._zod, "values", () => e7.innerType._zod.values), t4._zod.parse = (r36, o15) => {
    let n8 = e7.innerType._zod.run(r36, o15);
    return n8 instanceof Promise ? n8.then((i10) => (r36.value = i10.value, i10.issues.length && (r36.value = e7.catchValue({ ...r36, error: { issues: i10.issues.map((s9) => E9(s9, o15, I7())) }, input: r36.value }), r36.issues = []), r36)) : (r36.value = n8.value, n8.issues.length && (r36.value = e7.catchValue({ ...r36, error: { issues: n8.issues.map((i10) => E9(i10, o15, I7())) }, input: r36.value }), r36.issues = []), r36);
  };
});
var io = l7("$ZodNaN", (t4, e7) => {
  v4.init(t4, e7), t4._zod.parse = (r36, o15) => ((typeof r36.value != "number" || !Number.isNaN(r36.value)) && r36.issues.push({ input: r36.value, inst: t4, expected: "nan", code: "invalid_type" }), r36);
});
var Ht = l7("$ZodPipe", (t4, e7) => {
  v4.init(t4, e7), b8(t4._zod, "values", () => e7.in._zod.values), b8(t4._zod, "optin", () => e7.in._zod.optin), b8(t4._zod, "optout", () => e7.out._zod.optout), t4._zod.parse = (r36, o15) => {
    let n8 = e7.in._zod.run(r36, o15);
    return n8 instanceof Promise ? n8.then((i10) => Jt(i10, e7, o15)) : Jt(n8, e7, o15);
  };
});
function Jt(t4, e7, r36) {
  return C9(t4) ? t4 : e7.out._zod.run({ value: t4.value, issues: t4.issues }, r36);
}
var so = l7("$ZodReadonly", (t4, e7) => {
  v4.init(t4, e7), b8(t4._zod, "propValues", () => e7.innerType._zod.propValues), b8(t4._zod, "values", () => e7.innerType._zod.values), b8(t4._zod, "optin", () => e7.innerType._zod.optin), b8(t4._zod, "optout", () => e7.innerType._zod.optout), t4._zod.parse = (r36, o15) => {
    let n8 = e7.innerType._zod.run(r36, o15);
    return n8 instanceof Promise ? n8.then(Wt4) : Wt4(n8);
  };
});
function Wt4(t4) {
  return t4.value = Object.freeze(t4.value), t4;
}
var uo = l7("$ZodTemplateLiteral", (t4, e7) => {
  v4.init(t4, e7);
  let r36 = [];
  for (let o15 of e7.parts) if (o15 instanceof v4) {
    if (!o15._zod.pattern) throw new Error(`Invalid template literal part, no pattern found: ${[...o15._zod.traits].shift()}`);
    let n8 = o15._zod.pattern instanceof RegExp ? o15._zod.pattern.source : o15._zod.pattern;
    if (!n8) throw new Error(`Invalid template literal part: ${o15._zod.traits}`);
    let i10 = n8.startsWith("^") ? 1 : 0, s9 = n8.endsWith("$") ? n8.length - 1 : n8.length;
    r36.push(n8.slice(i10, s9));
  } else if (o15 === null || de3.has(typeof o15)) r36.push(O9(`${o15}`));
  else throw new Error(`Invalid template literal part: ${o15}`);
  t4._zod.pattern = new RegExp(`^${r36.join("")}$`), t4._zod.parse = (o15, n8) => typeof o15.value != "string" ? (o15.issues.push({ input: o15.value, inst: t4, expected: "template_literal", code: "invalid_type" }), o15) : (t4._zod.pattern.lastIndex = 0, t4._zod.pattern.test(o15.value) || o15.issues.push({ input: o15.value, inst: t4, code: "invalid_format", format: "template_literal", pattern: t4._zod.pattern.source }), o15);
});
var co = l7("$ZodPromise", (t4, e7) => {
  v4.init(t4, e7), t4._zod.parse = (r36, o15) => Promise.resolve(r36.value).then((n8) => e7.innerType._zod.run({ value: n8, issues: [] }, o15));
});
var ao = l7("$ZodLazy", (t4, e7) => {
  v4.init(t4, e7), b8(t4._zod, "innerType", () => e7.getter()), b8(t4._zod, "pattern", () => t4._zod.innerType._zod.pattern), b8(t4._zod, "propValues", () => t4._zod.innerType._zod.propValues), b8(t4._zod, "optin", () => t4._zod.innerType._zod.optin), b8(t4._zod, "optout", () => t4._zod.innerType._zod.optout), t4._zod.parse = (r36, o15) => t4._zod.innerType._zod.run(r36, o15);
});
var lo = l7("$ZodCustom", (t4, e7) => {
  Z8.init(t4, e7), v4.init(t4, e7), t4._zod.parse = (r36, o15) => r36, t4._zod.check = (r36) => {
    let o15 = r36.value, n8 = e7.fn(o15);
    if (n8 instanceof Promise) return n8.then((i10) => Kt(i10, r36, o15, t4));
    Kt(n8, r36, o15, t4);
  };
});
function Kt(t4, e7, r36, o15) {
  if (!t4) {
    let n8 = { code: "custom", input: r36, inst: o15, path: [...o15._zod.def.path ?? []], continue: !o15._zod.def.abort };
    o15._zod.def.params && (n8.params = o15._zod.def.params), e7.issues.push(ze3(n8));
  }
}
var fo = Symbol("ZodOutput");
var mo = Symbol("ZodInput");
var X6 = class {
  constructor() {
    this._map = /* @__PURE__ */ new Map(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(e7, ...r36) {
    let o15 = r36[0];
    if (this._map.set(e7, o15), o15 && typeof o15 == "object" && "id" in o15) {
      if (this._idmap.has(o15.id)) throw new Error(`ID ${o15.id} already exists in the registry`);
      this._idmap.set(o15.id, e7);
    }
    return this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new Map(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(e7) {
    let r36 = this._map.get(e7);
    return r36 && typeof r36 == "object" && "id" in r36 && this._idmap.delete(r36.id), this._map.delete(e7), this;
  }
  get(e7) {
    let r36 = e7._zod.parent;
    if (r36) {
      let o15 = { ...this.get(r36) ?? {} };
      return delete o15.id, { ...o15, ...this._map.get(e7) };
    }
    return this._map.get(e7);
  }
  has(e7) {
    return this._map.has(e7);
  }
};
function Vr() {
  return new X6();
}
var er3 = Vr();

// https://esm.sh/zod-validation-error@4.0.0-beta.1/denonext/zod-validation-error.mjs
function d8(e7) {
  return e7 instanceof Object && "name" in e7 && (e7.name === "ZodError" || e7.name === "$ZodError") && "issues" in e7 && Array.isArray(e7.issues);
}
var f5 = "ZodValidationError";
var s2 = class extends Error {
  name;
  details;
  constructor(e7, t4) {
    super(e7, t4), this.name = f5, this.details = $7(t4);
  }
  toString() {
    return this.message;
  }
};
function $7(e7) {
  if (e7) {
    let t4 = e7.cause;
    if (d8(t4)) return t4.issues;
  }
  return [];
}
function l8(e7) {
  return e7.description ?? "";
}
function i4(e7, t4 = {}) {
  switch (typeof e7) {
    case "symbol":
      return l8(e7);
    case "bigint":
    case "number":
      switch (t4.localization) {
        case true:
          return e7.toLocaleString();
        case false:
          return e7.toString();
        default:
          return e7.toLocaleString(t4.localization);
      }
    case "string":
      return t4.wrapStringValueInQuote ? `"${e7}"` : e7;
    default: {
      if (e7 instanceof Date) switch (t4.localization) {
        case true:
          return e7.toLocaleString();
        case false:
          return e7.toISOString();
        default:
          return e7.toLocaleString(t4.localization);
      }
      return String(e7);
    }
  }
}
var x10 = /[$_\p{ID_Start}][$\u200c\u200d\p{ID_Continue}]*/u;
function z9(e7) {
  if (e7.length === 1) {
    let t4 = e7[0];
    return typeof t4 == "symbol" && (t4 = l8(t4)), t4.toString() || '""';
  }
  return e7.reduce((t4, r36) => {
    if (typeof r36 == "number") return t4 + "[" + r36.toString() + "]";
    if (typeof r36 == "symbol" && (r36 = l8(r36)), r36.includes('"')) return t4 + '["' + E10(r36) + '"]';
    if (!x10.test(r36)) return t4 + '["' + r36 + '"]';
    let a8 = t4.length === 0 ? "" : ".";
    return t4 + a8 + r36;
  }, "");
}
function E10(e7) {
  return e7.replace(/"/g, '\\"');
}
function m9(e7) {
  return e7.length !== 0;
}
function V11(e7) {
  return e7.length === 0 ? e7 : e7.charAt(0).toUpperCase() + e7.slice(1);
}
function D11(e7) {
  return { type: e7.code, path: e7.path, message: `unexpected element in ${e7.origin}` };
}
function _7(e7, t4 = { displayInvalidFormatDetails: false }) {
  switch (e7.format) {
    case "lowercase":
    case "uppercase":
      return { type: e7.code, path: e7.path, message: `value must be in ${e7.format} format` };
    default:
      return M12(e7) ? T8(e7) : L11(e7) ? Z9(e7) : j13(e7) ? A12(e7) : B10(e7) ? k13(e7, t4) : F12(e7) ? O10(e7, t4) : { type: e7.code, path: e7.path, message: `invalid ${e7.format}` };
  }
}
function M12(e7) {
  return e7.format === "starts_with";
}
function T8(e7) {
  return { type: e7.code, path: e7.path, message: `value must start with "${e7.prefix}"` };
}
function L11(e7) {
  return e7.format === "ends_with";
}
function Z9(e7) {
  return { type: e7.code, path: e7.path, message: `value must end with "${e7.suffix}"` };
}
function j13(e7) {
  return e7.format === "includes";
}
function A12(e7) {
  return { type: e7.code, path: e7.path, message: `value must include "${e7.includes}"` };
}
function B10(e7) {
  return e7.format === "regex";
}
function k13(e7, t4 = { displayInvalidFormatDetails: false }) {
  let r36 = "value must match pattern";
  return t4.displayInvalidFormatDetails && (r36 += ` "${e7.pattern}"`), { type: e7.code, path: e7.path, message: r36 };
}
function F12(e7) {
  return e7.format === "jwt";
}
function O10(e7, t4 = { displayInvalidFormatDetails: false }) {
  return { type: e7.code, path: e7.path, message: t4.displayInvalidFormatDetails && e7.algorithm ? `invalid jwt/${e7.algorithm}` : "invalid jwt" };
}
function Q11(e7) {
  let t4 = `expected ${e7.expected}`;
  return "input" in e7 && (t4 += `, received ${R8(e7.input)}`), { type: e7.code, path: e7.path, message: t4 };
}
function R8(e7) {
  return typeof e7 == "object" ? e7 === null ? "null" : e7 === void 0 ? "undefined" : Array.isArray(e7) ? "array" : e7 instanceof Date ? "date" : e7 instanceof RegExp ? "regexp" : e7 instanceof Map ? "map" : e7 instanceof Set ? "set" : e7 instanceof Error ? "error" : e7 instanceof Function ? "function" : "object" : typeof e7;
}
function g9(e7, t4) {
  let r36 = (t4.maxValuesToDisplay ? e7.slice(0, t4.maxValuesToDisplay) : e7).map((a8) => i4(a8, { wrapStringValueInQuote: t4.wrapStringValuesInQuote }));
  return r36.length < e7.length && r36.push(`${e7.length - r36.length} more value(s)`), r36.reduce((a8, n8, o15) => (o15 > 0 && (o15 === r36.length - 1 && t4.lastSeparator ? a8 += t4.lastSeparator : a8 += t4.separator), a8 += n8, a8), "");
}
function C10(e7, t4) {
  let r36;
  return e7.values.length === 0 ? r36 = "invalid value" : e7.values.length === 1 ? r36 = `expected value to be ${i4(e7.values[0], { wrapStringValueInQuote: true })}` : r36 = `expected value to be one of ${g9(e7.values, { separator: t4.allowedValuesSeparator, lastSeparator: t4.allowedValuesLastSeparator, wrapStringValuesInQuote: t4.wrapAllowedValuesInQuote, maxValuesToDisplay: t4.maxAllowedValuesToDisplay })}`, { type: e7.code, path: e7.path, message: r36 };
}
function U10(e7) {
  return { type: e7.code, path: e7.path, message: `expected multiple of ${e7.divisor}` };
}
function q9(e7, t4) {
  let r36 = e7.origin === "date" ? i4(new Date(e7.maximum), { localization: t4.dateLocalization }) : i4(e7.maximum, { localization: t4.numberLocalization });
  switch (e7.origin) {
    case "number":
    case "int":
    case "bigint":
      return { type: e7.code, path: e7.path, message: `number must be less ${e7.inclusive ? "or equal to" : "than"} ${r36}` };
    case "string":
      return { type: e7.code, path: e7.path, message: `string must contain at most ${r36} character(s)` };
    case "date":
      return { type: e7.code, path: e7.path, message: `date must be ${e7.inclusive ? "prior or equal to" : "prior to"} "${r36}"` };
    case "array":
      return { type: e7.code, path: e7.path, message: `array must contain at most ${r36} item(s)` };
    case "set":
      return { type: e7.code, path: e7.path, message: `set must contain at most ${r36} item(s)` };
    case "file":
      return { type: e7.code, path: e7.path, message: `file must not exceed ${r36} byte(s) in size` };
    default:
      return { type: e7.code, path: e7.path, message: `value must be less ${e7.inclusive ? "or equal to" : "than"} ${r36}` };
  }
}
function N9(e7, t4) {
  let r36 = e7.origin === "date" ? i4(new Date(e7.minimum), { localization: t4.dateLocalization }) : i4(e7.minimum, { localization: t4.numberLocalization });
  switch (e7.origin) {
    case "number":
    case "int":
    case "bigint":
      return { type: e7.code, path: e7.path, message: `number must be greater ${e7.inclusive ? "or equal to" : "than"} ${r36}` };
    case "date":
      return { type: e7.code, path: e7.path, message: `date must be ${e7.inclusive ? "later or equal to" : "later to"} "${r36}"` };
    case "string":
      return { type: e7.code, path: e7.path, message: `string must contain at least ${r36} character(s)` };
    case "array":
      return { type: e7.code, path: e7.path, message: `array must contain at least ${r36} item(s)` };
    case "set":
      return { type: e7.code, path: e7.path, message: `set must contain at least ${r36} item(s)` };
    case "file":
      return { type: e7.code, path: e7.path, message: `file must be at least ${r36} byte(s) in size` };
    default:
      return { type: e7.code, path: e7.path, message: `value must be greater ${e7.inclusive ? "or equal to" : "than"} ${r36}` };
  }
}
function W7(e7, t4) {
  let r36 = g9(e7.keys, { separator: t4.unrecognizedKeysSeparator, lastSeparator: t4.unrecognizedKeysLastSeparator, wrapStringValuesInQuote: t4.wrapUnrecognizedKeysInQuote, maxValuesToDisplay: t4.maxUnrecognizedKeysToDisplay });
  return { type: e7.code, path: e7.path, message: `unrecognized key(s) ${r36} in object` };
}
function P9(e7) {
  return { type: e7.code, path: e7.path, message: `unexpected key in ${e7.origin}` };
}
function J11(e7) {
  return { type: e7.code, path: e7.path, message: e7.message };
}
var h10 = Symbol.for("zod-validation-error-map");
var K10 = { invalid_type: Q11, too_big: q9, too_small: N9, invalid_format: _7, invalid_value: C10, invalid_element: D11, not_multiple_of: U10, unrecognized_keys: W7, invalid_key: P9, custom: J11, invalid_union: G11 };
function G11(e7, t4) {
  let r36 = X7(t4), a8 = e7.errors.map((o15) => o15.map((p15) => r36({ ...p15, path: e7.path.concat(p15.path) })).join(t4.issueSeparator)), n8 = Array.from(new Set(a8)).join(t4.unionSeparator);
  return { type: e7.code, path: [], message: n8 };
}
var u8 = { includePath: true, unionSeparator: " or ", issueSeparator: "; ", displayInvalidFormatDetails: false, allowedValuesSeparator: ", ", allowedValuesLastSeparator: " or ", wrapAllowedValuesInQuote: true, maxAllowedValuesToDisplay: 10, unrecognizedKeysSeparator: ", ", unrecognizedKeysLastSeparator: " and ", wrapUnrecognizedKeysInQuote: true, maxUnrecognizedKeysToDisplay: 5, issuesInTitleCase: true, dateLocalization: true, numberLocalization: true };
function H8(e7) {
  for (let t4 in e7) if (e7[t4] !== u8[t4]) return false;
  return true;
}
function y5(e7) {
  let t4 = (r36) => {
    if (r36.code === void 0) return "Not supported issue type";
    let a8 = K10[r36.code], n8 = a8(r36, e7);
    return Y6(n8, e7);
  };
  return Object.defineProperty(t4, "_brand", { value: h10, writable: false, enumerable: false, configurable: false }), t4;
}
var S12 = y5(u8);
function X7(e7 = {}) {
  let t4 = { ...u8, ...e7 };
  return H8(t4) ? S12 : y5(t4);
}
function Y6(e7, t4) {
  let r36 = [];
  t4.issuesInTitleCase ? r36.push(V11(e7.message)) : r36.push(e7.message);
  e: if (t4.includePath && e7.path !== void 0 && m9(e7.path)) {
    if (e7.path.length === 1) {
      let a8 = e7.path[0];
      if (typeof a8 == "number") {
        r36.push(` at index ${a8}`);
        break e;
      }
    }
    r36.push(` at "${z9(e7.path)}"`);
  }
  return r36.join("");
}
function ee6(e7) {
  return "_brand" in e7 && e7._brand === h10;
}
var te5 = (e7) => e7.message;
var I8 = { prefix: "Validation error", prefixSeparator: ": ", maxIssuesInMessage: 99, issueSeparator: u8.issueSeparator, error: S12 };
function v5(e7 = {}) {
  let t4 = { ...I8, ...e7 }, r36 = t4.error === false || e7.error === void 0 && Q10.customError !== void 0 && ee6(Q10.customError) ? te5 : t4.error;
  return function(n8) {
    let o15 = n8.slice(0, t4.maxIssuesInMessage).map(r36).join(t4.issueSeparator);
    return re6(o15, t4);
  };
}
function re6(e7, t4) {
  return t4.prefix != null ? e7.length > 0 ? [t4.prefix, e7].join(t4.prefixSeparator) : t4.prefix : e7.length > 0 ? e7 : I8.prefix;
}
function le4(e7, t4 = {}) {
  if (!d8(e7)) throw new TypeError(`Invalid zodError param; expected instance of ZodError. Did you mean to use the "${oe4.name}" method instead?`);
  return b9(e7, t4);
}
function b9(e7, t4 = {}) {
  let r36 = e7.issues, a8;
  return m9(r36) ? a8 = ae4(t4)(r36) : a8 = e7.message, new s2(a8, { cause: e7 });
}
function ae4(e7) {
  return "messageBuilder" in e7 ? e7.messageBuilder : v5(e7);
}
var ne4 = (e7 = {}) => (t4) => d8(t4) ? b9(t4, e7) : t4 instanceof Error ? new s2(t4.message, { cause: t4 }) : new s2("Unknown error");
function oe4(e7, t4 = {}) {
  return ne4(t4)(e7);
}

// https://esm.sh/dedent@1.6.0/denonext/dedent.mjs
function s3(e7, t4) {
  var r36 = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n8 = Object.getOwnPropertySymbols(e7);
    t4 && (n8 = n8.filter(function(l20) {
      return Object.getOwnPropertyDescriptor(e7, l20).enumerable;
    })), r36.push.apply(r36, n8);
  }
  return r36;
}
function m10(e7) {
  for (var t4 = 1; t4 < arguments.length; t4++) {
    var r36 = arguments[t4] != null ? arguments[t4] : {};
    t4 % 2 ? s3(Object(r36), true).forEach(function(n8) {
      g10(e7, n8, r36[n8]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r36)) : s3(Object(r36)).forEach(function(n8) {
      Object.defineProperty(e7, n8, Object.getOwnPropertyDescriptor(r36, n8));
    });
  }
  return e7;
}
function g10(e7, t4, r36) {
  return t4 = b10(t4), t4 in e7 ? Object.defineProperty(e7, t4, { value: r36, enumerable: true, configurable: true, writable: true }) : e7[t4] = r36, e7;
}
function b10(e7) {
  var t4 = d9(e7, "string");
  return typeof t4 == "symbol" ? t4 : String(t4);
}
function d9(e7, t4) {
  if (typeof e7 != "object" || e7 === null) return e7;
  var r36 = e7[Symbol.toPrimitive];
  if (r36 !== void 0) {
    var n8 = r36.call(e7, t4 || "default");
    if (typeof n8 != "object") return n8;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t4 === "string" ? String : Number)(e7);
}
var P10 = y6({});
var w11 = P10;
function y6(e7) {
  return t4.withOptions = (r36) => y6(m10(m10({}, e7), r36)), t4;
  function t4(r36, ...n8) {
    let l20 = typeof r36 == "string" ? [r36] : r36.raw, { escapeSpecialCharacters: a8 = Array.isArray(r36), trimWhitespace: O20 = true } = e7, o15 = "";
    for (let c14 = 0; c14 < l20.length; c14++) {
      let i10 = l20[c14];
      a8 && (i10 = i10.replace(/\\\n[ \t]*/g, "").replace(/\\`/g, "`").replace(/\\\$/g, "$").replace(/\\\{/g, "{")), o15 += i10, c14 < n8.length && (o15 += n8[c14]);
    }
    let u17 = o15.split(`
`), f14 = null;
    for (let c14 of u17) {
      let i10 = c14.match(/^(\s+)\S+/);
      if (i10) {
        let p15 = i10[1].length;
        f14 ? f14 = Math.min(f14, p15) : f14 = p15;
      }
    }
    if (f14 !== null) {
      let c14 = f14;
      o15 = u17.map((i10) => i10[0] === " " || i10[0] === "	" ? i10.slice(c14) : i10).join(`
`);
    }
    return O20 && (o15 = o15.trim()), a8 && (o15 = o15.replace(/\\n/g, `
`)), o15;
  }
}

// https://esm.sh/delay@6.0.0/denonext/delay.mjs
var i5 = () => {
  let e7 = new Error("Delay aborted");
  return e7.name = "AbortError", e7;
};
var d10 = /* @__PURE__ */ new WeakMap();
function x11({ clearTimeout: e7, setTimeout: t4 } = {}) {
  return (n8, { value: f14, signal: r36 } = {}) => {
    if (r36?.aborted) return Promise.reject(i5());
    let o15, a8, c14, s9 = e7 ?? clearTimeout, l20 = () => {
      s9(o15), c14(i5());
    }, y18 = () => {
      r36 && r36.removeEventListener("abort", l20);
    }, u17 = new Promise((b23, p15) => {
      a8 = () => {
        y18(), b23(f14);
      }, c14 = p15, o15 = (t4 ?? setTimeout)(a8, n8);
    });
    return r36 && r36.addEventListener("abort", l20, { once: true }), d10.set(u17, () => {
      s9(o15), o15 = null, a8();
    }), u17;
  };
}
var m11 = x11();

// https://esm.sh/openai-zod-to-json-schema@1.1.2/denonext/openai-zod-to-json-schema.mjs
var T9 = Symbol("Let zodToJsonSchema decide on which parser to use");
var Z10 = { name: void 0, $refStrategy: "root", effectStrategy: "input", pipeStrategy: "all", dateStrategy: "format:date-time", mapStrategy: "entries", nullableStrategy: "from-target", removeAdditionalStrategy: "passthrough", definitionPath: "definitions", target: "jsonSchema7", strictUnions: false, errorMessages: false, markdownDescription: false, patternStrategy: "escape", applyRegexFlags: false, emailStrategy: "format:email", base64Strategy: "contentEncoding:base64", nameStrategy: "ref" };
var D13 = (e7) => typeof e7 == "string" ? { ...Z10, basePath: ["#"], definitions: {}, name: e7 } : { ...Z10, basePath: ["#"], definitions: {}, ...e7 };
var P11 = (e7) => "_def" in e7 ? e7._def : e7;
function N10(e7) {
  if (!e7) return true;
  for (let t4 in e7) return false;
  return true;
}
var L12 = (e7) => {
  let t4 = D13(e7), a8 = t4.name !== void 0 ? [...t4.basePath, t4.definitionPath, t4.name] : t4.basePath;
  return { ...t4, currentPath: a8, propertyPath: void 0, seenRefs: /* @__PURE__ */ new Set(), seen: new Map(Object.entries(t4.definitions).map(([n8, r36]) => [P11(r36), { def: P11(r36), path: [...t4.basePath, t4.definitionPath, n8], jsonSchema: void 0 }])) };
};
function O11(e7, t4, a8, n8) {
  n8?.errorMessages && a8 && (e7.errorMessage = { ...e7.errorMessage, [t4]: a8 });
}
function c6(e7, t4, a8, n8, r36) {
  e7[t4] = a8, O11(e7, t4, n8, r36);
}
function w12() {
  return {};
}
function E11(e7, t4) {
  let a8 = { type: "array" };
  return e7.type?._def?.typeName !== m5.ZodAny && (a8.items = u9(e7.type._def, { ...t4, currentPath: [...t4.currentPath, "items"] })), e7.minLength && c6(a8, "minItems", e7.minLength.value, e7.minLength.message, t4), e7.maxLength && c6(a8, "maxItems", e7.maxLength.value, e7.maxLength.message, t4), e7.exactLength && (c6(a8, "minItems", e7.exactLength.value, e7.exactLength.message, t4), c6(a8, "maxItems", e7.exactLength.value, e7.exactLength.message, t4)), a8;
}
function I9(e7, t4) {
  let a8 = { type: "integer", format: "int64" };
  if (!e7.checks) return a8;
  for (let n8 of e7.checks) switch (n8.kind) {
    case "min":
      t4.target === "jsonSchema7" ? n8.inclusive ? c6(a8, "minimum", n8.value, n8.message, t4) : c6(a8, "exclusiveMinimum", n8.value, n8.message, t4) : (n8.inclusive || (a8.exclusiveMinimum = true), c6(a8, "minimum", n8.value, n8.message, t4));
      break;
    case "max":
      t4.target === "jsonSchema7" ? n8.inclusive ? c6(a8, "maximum", n8.value, n8.message, t4) : c6(a8, "exclusiveMaximum", n8.value, n8.message, t4) : (n8.inclusive || (a8.exclusiveMaximum = true), c6(a8, "maximum", n8.value, n8.message, t4));
      break;
    case "multipleOf":
      c6(a8, "multipleOf", n8.value, n8.message, t4);
      break;
  }
  return a8;
}
function R9() {
  return { type: "boolean" };
}
function C11(e7, t4) {
  return u9(e7.type._def, t4);
}
var F13 = (e7, t4) => u9(e7.innerType._def, t4);
function M13(e7, t4, a8) {
  let n8 = a8 ?? t4.dateStrategy;
  if (Array.isArray(n8)) return { anyOf: n8.map((r36, i10) => M13(e7, t4, r36)) };
  switch (n8) {
    case "string":
    case "format:date-time":
      return { type: "string", format: "date-time" };
    case "format:date":
      return { type: "string", format: "date" };
    case "integer":
      return U11(e7, t4);
  }
}
var U11 = (e7, t4) => {
  let a8 = { type: "integer", format: "unix-time" };
  if (t4.target === "openApi3") return a8;
  for (let n8 of e7.checks) switch (n8.kind) {
    case "min":
      c6(a8, "minimum", n8.value, n8.message, t4);
      break;
    case "max":
      c6(a8, "maximum", n8.value, n8.message, t4);
      break;
  }
  return a8;
};
function K11(e7, t4) {
  return { ...u9(e7.innerType._def, t4), default: e7.defaultValue() };
}
function q10(e7, t4, a8) {
  return t4.effectStrategy === "input" ? u9(e7.schema._def, t4, a8) : {};
}
function B11(e7) {
  return { type: "string", enum: [...e7.values] };
}
var V12 = (e7) => "type" in e7 && e7.type === "string" ? false : "allOf" in e7;
function J12(e7, t4) {
  let a8 = [u9(e7.left._def, { ...t4, currentPath: [...t4.currentPath, "allOf", "0"] }), u9(e7.right._def, { ...t4, currentPath: [...t4.currentPath, "allOf", "1"] })].filter((i10) => !!i10), n8 = t4.target === "jsonSchema2019-09" ? { unevaluatedProperties: false } : void 0, r36 = [];
  return a8.forEach((i10) => {
    if (V12(i10)) r36.push(...i10.allOf), i10.unevaluatedProperties === void 0 && (n8 = void 0);
    else {
      let s9 = i10;
      if ("additionalProperties" in i10 && i10.additionalProperties === false) {
        let { additionalProperties: m20, ...g21 } = i10;
        s9 = g21;
      } else n8 = void 0;
      r36.push(s9);
    }
  }), r36.length ? { allOf: r36, ...n8 } : void 0;
}
function W8(e7, t4) {
  let a8 = typeof e7.value;
  return a8 !== "bigint" && a8 !== "number" && a8 !== "boolean" && a8 !== "string" ? { type: Array.isArray(e7.value) ? "array" : "object" } : t4.target === "openApi3" ? { type: a8 === "bigint" ? "integer" : a8, enum: [e7.value] } : { type: a8 === "bigint" ? "integer" : a8, const: e7.value };
}
var b11;
var y7 = { cuid: /^[cC][^\s-]{8,}$/, cuid2: /^[0-9a-z]+$/, ulid: /^[0-9A-HJKMNP-TV-Z]{26}$/, email: /^(?!\.)(?!.*\.\.)([a-zA-Z0-9_'+\-\.]*)[a-zA-Z0-9_+-]@([a-zA-Z0-9][a-zA-Z0-9\-]*\.)+[a-zA-Z]{2,}$/, emoji: () => (b11 === void 0 && (b11 = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), b11), uuid: /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/, ipv4: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, ipv6: /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, base64: /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, nanoid: /^[a-zA-Z0-9_-]{21}$/ };
function j14(e7, t4) {
  let a8 = { type: "string" };
  function n8(r36) {
    return t4.patternStrategy === "escape" ? G12(r36) : r36;
  }
  if (e7.checks) for (let r36 of e7.checks) switch (r36.kind) {
    case "min":
      c6(a8, "minLength", typeof a8.minLength == "number" ? Math.max(a8.minLength, r36.value) : r36.value, r36.message, t4);
      break;
    case "max":
      c6(a8, "maxLength", typeof a8.maxLength == "number" ? Math.min(a8.maxLength, r36.value) : r36.value, r36.message, t4);
      break;
    case "email":
      switch (t4.emailStrategy) {
        case "format:email":
          p7(a8, "email", r36.message, t4);
          break;
        case "format:idn-email":
          p7(a8, "idn-email", r36.message, t4);
          break;
        case "pattern:zod":
          d11(a8, y7.email, r36.message, t4);
          break;
      }
      break;
    case "url":
      p7(a8, "uri", r36.message, t4);
      break;
    case "uuid":
      p7(a8, "uuid", r36.message, t4);
      break;
    case "regex":
      d11(a8, r36.regex, r36.message, t4);
      break;
    case "cuid":
      d11(a8, y7.cuid, r36.message, t4);
      break;
    case "cuid2":
      d11(a8, y7.cuid2, r36.message, t4);
      break;
    case "startsWith":
      d11(a8, RegExp(`^${n8(r36.value)}`), r36.message, t4);
      break;
    case "endsWith":
      d11(a8, RegExp(`${n8(r36.value)}$`), r36.message, t4);
      break;
    case "datetime":
      p7(a8, "date-time", r36.message, t4);
      break;
    case "date":
      p7(a8, "date", r36.message, t4);
      break;
    case "time":
      p7(a8, "time", r36.message, t4);
      break;
    case "duration":
      p7(a8, "duration", r36.message, t4);
      break;
    case "length":
      c6(a8, "minLength", typeof a8.minLength == "number" ? Math.max(a8.minLength, r36.value) : r36.value, r36.message, t4), c6(a8, "maxLength", typeof a8.maxLength == "number" ? Math.min(a8.maxLength, r36.value) : r36.value, r36.message, t4);
      break;
    case "includes": {
      d11(a8, RegExp(n8(r36.value)), r36.message, t4);
      break;
    }
    case "ip": {
      r36.version !== "v6" && p7(a8, "ipv4", r36.message, t4), r36.version !== "v4" && p7(a8, "ipv6", r36.message, t4);
      break;
    }
    case "emoji":
      d11(a8, y7.emoji, r36.message, t4);
      break;
    case "ulid": {
      d11(a8, y7.ulid, r36.message, t4);
      break;
    }
    case "base64": {
      switch (t4.base64Strategy) {
        case "format:binary": {
          p7(a8, "binary", r36.message, t4);
          break;
        }
        case "contentEncoding:base64": {
          c6(a8, "contentEncoding", "base64", r36.message, t4);
          break;
        }
        case "pattern:zod": {
          d11(a8, y7.base64, r36.message, t4);
          break;
        }
      }
      break;
    }
    case "nanoid":
      d11(a8, y7.nanoid, r36.message, t4);
    case "toLowerCase":
    case "toUpperCase":
    case "trim":
      break;
    default:
  }
  return a8;
}
var G12 = (e7) => Array.from(e7).map((t4) => /[a-zA-Z0-9]/.test(t4) ? t4 : `\\${t4}`).join("");
var p7 = (e7, t4, a8, n8) => {
  e7.format || e7.anyOf?.some((r36) => r36.format) ? (e7.anyOf || (e7.anyOf = []), e7.format && (e7.anyOf.push({ format: e7.format, ...e7.errorMessage && n8.errorMessages && { errorMessage: { format: e7.errorMessage.format } } }), delete e7.format, e7.errorMessage && (delete e7.errorMessage.format, Object.keys(e7.errorMessage).length === 0 && delete e7.errorMessage)), e7.anyOf.push({ format: t4, ...a8 && n8.errorMessages && { errorMessage: { format: a8 } } })) : c6(e7, "format", t4, a8, n8);
};
var d11 = (e7, t4, a8, n8) => {
  e7.pattern || e7.allOf?.some((r36) => r36.pattern) ? (e7.allOf || (e7.allOf = []), e7.pattern && (e7.allOf.push({ pattern: e7.pattern, ...e7.errorMessage && n8.errorMessages && { errorMessage: { pattern: e7.errorMessage.pattern } } }), delete e7.pattern, e7.errorMessage && (delete e7.errorMessage.pattern, Object.keys(e7.errorMessage).length === 0 && delete e7.errorMessage)), e7.allOf.push({ pattern: S13(t4, n8), ...a8 && n8.errorMessages && { errorMessage: { pattern: a8 } } })) : c6(e7, "pattern", S13(t4, n8), a8, n8);
};
var S13 = (e7, t4) => {
  let a8 = typeof e7 == "function" ? e7() : e7;
  if (!t4.applyRegexFlags || !a8.flags) return a8.source;
  let n8 = { i: a8.flags.includes("i"), m: a8.flags.includes("m"), s: a8.flags.includes("s") }, r36 = n8.i ? a8.source.toLowerCase() : a8.source, i10 = "", s9 = false, m20 = false, g21 = false;
  for (let l20 = 0; l20 < r36.length; l20++) {
    if (s9) {
      i10 += r36[l20], s9 = false;
      continue;
    }
    if (n8.i) {
      if (m20) {
        if (r36[l20].match(/[a-z]/)) {
          g21 ? (i10 += r36[l20], i10 += `${r36[l20 - 2]}-${r36[l20]}`.toUpperCase(), g21 = false) : r36[l20 + 1] === "-" && r36[l20 + 2]?.match(/[a-z]/) ? (i10 += r36[l20], g21 = true) : i10 += `${r36[l20]}${r36[l20].toUpperCase()}`;
          continue;
        }
      } else if (r36[l20].match(/[a-z]/)) {
        i10 += `[${r36[l20]}${r36[l20].toUpperCase()}]`;
        continue;
      }
    }
    if (n8.m) {
      if (r36[l20] === "^") {
        i10 += `(^|(?<=[\r
]))`;
        continue;
      } else if (r36[l20] === "$") {
        i10 += `($|(?=[\r
]))`;
        continue;
      }
    }
    if (n8.s && r36[l20] === ".") {
      i10 += m20 ? `${r36[l20]}\r
` : `[${r36[l20]}\r
]`;
      continue;
    }
    i10 += r36[l20], r36[l20] === "\\" ? s9 = true : m20 && r36[l20] === "]" ? m20 = false : !m20 && r36[l20] === "[" && (m20 = true);
  }
  try {
    let l20 = new RegExp(i10);
  } catch {
    return console.warn(`Could not convert regex pattern at ${t4.currentPath.join("/")} to a flag-independent form! Falling back to the flag-ignorant source`), a8.source;
  }
  return i10;
};
function A13(e7, t4) {
  if (t4.target === "openApi3" && e7.keyType?._def.typeName === m5.ZodEnum) return { type: "object", required: e7.keyType._def.values, properties: e7.keyType._def.values.reduce((n8, r36) => ({ ...n8, [r36]: u9(e7.valueType._def, { ...t4, currentPath: [...t4.currentPath, "properties", r36] }) ?? {} }), {}), additionalProperties: false };
  let a8 = { type: "object", additionalProperties: u9(e7.valueType._def, { ...t4, currentPath: [...t4.currentPath, "additionalProperties"] }) ?? {} };
  if (t4.target === "openApi3") return a8;
  if (e7.keyType?._def.typeName === m5.ZodString && e7.keyType._def.checks?.length) {
    let n8 = Object.entries(j14(e7.keyType._def, t4)).reduce((r36, [i10, s9]) => i10 === "type" ? r36 : { ...r36, [i10]: s9 }, {});
    return { ...a8, propertyNames: n8 };
  } else if (e7.keyType?._def.typeName === m5.ZodEnum) return { ...a8, propertyNames: { enum: e7.keyType._def.values } };
  return a8;
}
function H9(e7, t4) {
  if (t4.mapStrategy === "record") return A13(e7, t4);
  let a8 = u9(e7.keyType._def, { ...t4, currentPath: [...t4.currentPath, "items", "items", "0"] }) || {}, n8 = u9(e7.valueType._def, { ...t4, currentPath: [...t4.currentPath, "items", "items", "1"] }) || {};
  return { type: "array", maxItems: 125, items: { type: "array", items: [a8, n8], minItems: 2, maxItems: 2 } };
}
function Q12(e7) {
  let t4 = e7.values, n8 = Object.keys(e7.values).filter((i10) => typeof t4[t4[i10]] != "number").map((i10) => t4[i10]), r36 = Array.from(new Set(n8.map((i10) => typeof i10)));
  return { type: r36.length === 1 ? r36[0] === "string" ? "string" : "number" : ["string", "number"], enum: n8 };
}
function X8() {
  return { not: {} };
}
function Y7(e7) {
  return e7.target === "openApi3" ? { enum: ["null"], nullable: true } : { type: "null" };
}
var h11 = { ZodString: "string", ZodNumber: "number", ZodBigInt: "integer", ZodBoolean: "boolean", ZodNull: "null" };
function ee7(e7, t4) {
  if (t4.target === "openApi3") return x12(e7, t4);
  let a8 = e7.options instanceof Map ? Array.from(e7.options.values()) : e7.options;
  if (a8.every((n8) => n8._def.typeName in h11 && (!n8._def.checks || !n8._def.checks.length))) {
    let n8 = a8.reduce((r36, i10) => {
      let s9 = h11[i10._def.typeName];
      return s9 && !r36.includes(s9) ? [...r36, s9] : r36;
    }, []);
    return { type: n8.length > 1 ? n8 : n8[0] };
  } else if (a8.every((n8) => n8._def.typeName === "ZodLiteral" && !n8.description)) {
    let n8 = a8.reduce((r36, i10) => {
      let s9 = typeof i10._def.value;
      switch (s9) {
        case "string":
        case "number":
        case "boolean":
          return [...r36, s9];
        case "bigint":
          return [...r36, "integer"];
        case "object":
          if (i10._def.value === null) return [...r36, "null"];
        case "symbol":
        case "undefined":
        case "function":
        default:
          return r36;
      }
    }, []);
    if (n8.length === a8.length) {
      let r36 = n8.filter((i10, s9, m20) => m20.indexOf(i10) === s9);
      return { type: r36.length > 1 ? r36 : r36[0], enum: a8.reduce((i10, s9) => i10.includes(s9._def.value) ? i10 : [...i10, s9._def.value], []) };
    }
  } else if (a8.every((n8) => n8._def.typeName === "ZodEnum")) return { type: "string", enum: a8.reduce((n8, r36) => [...n8, ...r36._def.values.filter((i10) => !n8.includes(i10))], []) };
  return x12(e7, t4);
}
var x12 = (e7, t4) => {
  let a8 = (e7.options instanceof Map ? Array.from(e7.options.values()) : e7.options).map((n8, r36) => u9(n8._def, { ...t4, currentPath: [...t4.currentPath, "anyOf", `${r36}`] })).filter((n8) => !!n8 && (!t4.strictUnions || typeof n8 == "object" && Object.keys(n8).length > 0));
  return a8.length ? { anyOf: a8 } : void 0;
};
function te6(e7, t4) {
  if (["ZodString", "ZodNumber", "ZodBigInt", "ZodBoolean", "ZodNull"].includes(e7.innerType._def.typeName) && (!e7.innerType._def.checks || !e7.innerType._def.checks.length)) return t4.target === "openApi3" || t4.nullableStrategy === "property" ? { type: h11[e7.innerType._def.typeName], nullable: true } : { type: [h11[e7.innerType._def.typeName], "null"] };
  if (t4.target === "openApi3") {
    let n8 = u9(e7.innerType._def, { ...t4, currentPath: [...t4.currentPath] });
    return n8 && "$ref" in n8 ? { allOf: [n8], nullable: true } : n8 && { ...n8, nullable: true };
  }
  let a8 = u9(e7.innerType._def, { ...t4, currentPath: [...t4.currentPath, "anyOf", "0"] });
  return a8 && { anyOf: [a8, { type: "null" }] };
}
function ae5(e7, t4) {
  let a8 = { type: "number" };
  if (!e7.checks) return a8;
  for (let n8 of e7.checks) switch (n8.kind) {
    case "int":
      a8.type = "integer", O11(a8, "type", n8.message, t4);
      break;
    case "min":
      t4.target === "jsonSchema7" ? n8.inclusive ? c6(a8, "minimum", n8.value, n8.message, t4) : c6(a8, "exclusiveMinimum", n8.value, n8.message, t4) : (n8.inclusive || (a8.exclusiveMinimum = true), c6(a8, "minimum", n8.value, n8.message, t4));
      break;
    case "max":
      t4.target === "jsonSchema7" ? n8.inclusive ? c6(a8, "maximum", n8.value, n8.message, t4) : c6(a8, "exclusiveMaximum", n8.value, n8.message, t4) : (n8.inclusive || (a8.exclusiveMaximum = true), c6(a8, "maximum", n8.value, n8.message, t4));
      break;
    case "multipleOf":
      c6(a8, "multipleOf", n8.value, n8.message, t4);
      break;
  }
  return a8;
}
function ne5(e7, t4) {
  return t4.removeAdditionalStrategy === "strict" ? e7.catchall._def.typeName === "ZodNever" ? e7.unknownKeys !== "strict" : u9(e7.catchall._def, { ...t4, currentPath: [...t4.currentPath, "additionalProperties"] }) ?? true : e7.catchall._def.typeName === "ZodNever" ? e7.unknownKeys === "passthrough" : u9(e7.catchall._def, { ...t4, currentPath: [...t4.currentPath, "additionalProperties"] }) ?? true;
}
function re7(e7, t4) {
  let a8 = { type: "object", ...Object.entries(e7.shape()).reduce((n8, [r36, i10]) => {
    if (i10 === void 0 || i10._def === void 0) return n8;
    let s9 = [...t4.currentPath, "properties", r36], m20 = u9(i10._def, { ...t4, currentPath: s9, propertyPath: s9 });
    return m20 === void 0 ? n8 : (t4.openaiStrictMode && i10.isOptional() && !i10.isNullable() && typeof i10._def?.defaultValue > "u" && (m20 = { anyOf: [m20, { type: "null" }] }), { properties: { ...n8.properties, [r36]: m20 }, required: i10.isOptional() && !t4.openaiStrictMode ? n8.required : [...n8.required, r36] });
  }, { properties: {}, required: [] }), additionalProperties: ne5(e7, t4) };
  return a8.required.length || delete a8.required, a8;
}
var ie4 = (e7, t4) => {
  if (t4.currentPath.toString() === t4.propertyPath?.toString()) return u9(e7.innerType._def, t4);
  let a8 = u9(e7.innerType._def, { ...t4, currentPath: [...t4.currentPath, "anyOf", "1"] });
  return a8 ? { anyOf: [{ not: {} }, a8] } : {};
};
var se5 = (e7, t4) => {
  if (t4.pipeStrategy === "input") return u9(e7.in._def, t4);
  if (t4.pipeStrategy === "output") return u9(e7.out._def, t4);
  let a8 = u9(e7.in._def, { ...t4, currentPath: [...t4.currentPath, "allOf", "0"] }), n8 = u9(e7.out._def, { ...t4, currentPath: [...t4.currentPath, "allOf", a8 ? "1" : "0"] });
  return { allOf: [a8, n8].filter((r36) => r36 !== void 0) };
};
function oe5(e7, t4) {
  return u9(e7.type._def, t4);
}
function ue3(e7, t4) {
  let n8 = { type: "array", uniqueItems: true, items: u9(e7.valueType._def, { ...t4, currentPath: [...t4.currentPath, "items"] }) };
  return e7.minSize && c6(n8, "minItems", e7.minSize.value, e7.minSize.message, t4), e7.maxSize && c6(n8, "maxItems", e7.maxSize.value, e7.maxSize.message, t4), n8;
}
function ce3(e7, t4) {
  return e7.rest ? { type: "array", minItems: e7.items.length, items: e7.items.map((a8, n8) => u9(a8._def, { ...t4, currentPath: [...t4.currentPath, "items", `${n8}`] })).reduce((a8, n8) => n8 === void 0 ? a8 : [...a8, n8], []), additionalItems: u9(e7.rest._def, { ...t4, currentPath: [...t4.currentPath, "additionalItems"] }) } : { type: "array", minItems: e7.items.length, maxItems: e7.items.length, items: e7.items.map((a8, n8) => u9(a8._def, { ...t4, currentPath: [...t4.currentPath, "items", `${n8}`] })).reduce((a8, n8) => n8 === void 0 ? a8 : [...a8, n8], []) };
}
function le5() {
  return { not: {} };
}
function me5() {
  return {};
}
var pe5 = (e7, t4) => u9(e7.innerType._def, t4);
function u9(e7, t4, a8 = false) {
  let n8 = t4.seen.get(e7);
  if (t4.override) {
    let s9 = t4.override?.(e7, t4, n8, a8);
    if (s9 !== T9) return s9;
  }
  if (n8 && !a8) {
    let s9 = de4(n8, t4);
    if (s9 !== void 0) return "$ref" in s9 && t4.seenRefs.add(s9.$ref), s9;
  }
  let r36 = { def: e7, path: t4.currentPath, jsonSchema: void 0 };
  t4.seen.set(e7, r36);
  let i10 = ye4(e7, e7.typeName, t4, a8);
  return i10 && fe4(e7, t4, i10), r36.jsonSchema = i10, i10;
}
var de4 = (e7, t4) => {
  switch (t4.$refStrategy) {
    case "root":
      return { $ref: e7.path.join("/") };
    case "extract-to-root":
      let a8 = e7.path.slice(t4.basePath.length + 1).join("_");
      return a8 !== t4.name && t4.nameStrategy === "duplicate-ref" && (t4.definitions[a8] = e7.def), { $ref: [...t4.basePath, t4.definitionPath, a8].join("/") };
    case "relative":
      return { $ref: ge4(t4.currentPath, e7.path) };
    case "none":
    case "seen":
      return e7.path.length < t4.currentPath.length && e7.path.every((n8, r36) => t4.currentPath[r36] === n8) ? (console.warn(`Recursive reference detected at ${t4.currentPath.join("/")}! Defaulting to any`), {}) : t4.$refStrategy === "seen" ? {} : void 0;
  }
};
var ge4 = (e7, t4) => {
  let a8 = 0;
  for (; a8 < e7.length && a8 < t4.length && e7[a8] === t4[a8]; a8++) ;
  return [(e7.length - a8).toString(), ...t4.slice(a8)].join("/");
};
var ye4 = (e7, t4, a8, n8) => {
  switch (t4) {
    case m5.ZodString:
      return j14(e7, a8);
    case m5.ZodNumber:
      return ae5(e7, a8);
    case m5.ZodObject:
      return re7(e7, a8);
    case m5.ZodBigInt:
      return I9(e7, a8);
    case m5.ZodBoolean:
      return R9();
    case m5.ZodDate:
      return M13(e7, a8);
    case m5.ZodUndefined:
      return le5();
    case m5.ZodNull:
      return Y7(a8);
    case m5.ZodArray:
      return E11(e7, a8);
    case m5.ZodUnion:
    case m5.ZodDiscriminatedUnion:
      return ee7(e7, a8);
    case m5.ZodIntersection:
      return J12(e7, a8);
    case m5.ZodTuple:
      return ce3(e7, a8);
    case m5.ZodRecord:
      return A13(e7, a8);
    case m5.ZodLiteral:
      return W8(e7, a8);
    case m5.ZodEnum:
      return B11(e7);
    case m5.ZodNativeEnum:
      return Q12(e7);
    case m5.ZodNullable:
      return te6(e7, a8);
    case m5.ZodOptional:
      return ie4(e7, a8);
    case m5.ZodMap:
      return H9(e7, a8);
    case m5.ZodSet:
      return ue3(e7, a8);
    case m5.ZodLazy:
      return u9(e7.getter()._def, a8);
    case m5.ZodPromise:
      return oe5(e7, a8);
    case m5.ZodNaN:
    case m5.ZodNever:
      return X8();
    case m5.ZodEffects:
      return q10(e7, a8, n8);
    case m5.ZodAny:
      return w12();
    case m5.ZodUnknown:
      return me5();
    case m5.ZodDefault:
      return K11(e7, a8);
    case m5.ZodBranded:
      return C11(e7, a8);
    case m5.ZodReadonly:
      return pe5(e7, a8);
    case m5.ZodCatch:
      return F13(e7, a8);
    case m5.ZodPipeline:
      return se5(e7, a8);
    case m5.ZodFunction:
    case m5.ZodVoid:
    case m5.ZodSymbol:
      return;
    default:
      return /* @__PURE__ */ ((r36) => {
      })(t4);
  }
};
var fe4 = (e7, t4, a8) => (e7.description && (a8.description = e7.description, t4.markdownDescription && (a8.markdownDescription = e7.description)), a8);
var Pe5 = (e7, t4) => {
  let a8 = L12(t4), n8 = typeof t4 == "string" ? t4 : t4?.nameStrategy === "title" ? void 0 : t4?.name, r36 = u9(e7._def, n8 === void 0 ? a8 : { ...a8, currentPath: [...a8.basePath, a8.definitionPath, n8] }, false) ?? {}, i10 = typeof t4 == "object" && t4.name !== void 0 && t4.nameStrategy === "title" ? t4.name : void 0;
  i10 !== void 0 && (r36.title = i10);
  let s9 = (() => {
    if (N10(a8.definitions)) return;
    let g21 = {}, l20 = /* @__PURE__ */ new Set();
    for (let k25 = 0; k25 < 500; k25++) {
      let _17 = Object.entries(a8.definitions).filter(([f14]) => !l20.has(f14));
      if (_17.length === 0) break;
      for (let [f14, $20] of _17) g21[f14] = u9(P11($20), { ...a8, currentPath: [...a8.basePath, a8.definitionPath, f14] }, true) ?? {}, l20.add(f14);
    }
    return g21;
  })(), m20 = n8 === void 0 ? s9 ? { ...r36, [a8.definitionPath]: s9 } : r36 : a8.nameStrategy === "duplicate-ref" ? { ...r36, ...s9 || a8.seenRefs.size ? { [a8.definitionPath]: { ...s9, ...a8.seenRefs.size ? { [n8]: r36 } : void 0 } } : void 0 } : { $ref: [...a8.$refStrategy === "relative" ? [] : a8.basePath, a8.definitionPath, n8].join("/"), [a8.definitionPath]: { ...s9, [n8]: r36 } };
  return a8.target === "jsonSchema7" ? m20.$schema = "http://json-schema.org/draft-07/schema#" : a8.target === "jsonSchema2019-09" && (m20.$schema = "https://json-schema.org/draft/2019-09/schema#"), m20;
};

// https://esm.sh/@agentic/core@8.4.4/denonext/core.mjs
var nt4 = Object.create;
var U12 = Object.defineProperty;
var it4 = Object.getOwnPropertyDescriptor;
var X9 = (t4, e7) => (e7 = Symbol[t4]) ? e7 : Symbol.for("Symbol." + t4);
var C12 = (t4) => {
  throw TypeError(t4);
};
var ot4 = (t4, e7, r36) => e7 in t4 ? U12(t4, e7, { enumerable: true, configurable: true, writable: true, value: r36 }) : t4[e7] = r36;
var x13 = (t4, e7) => U12(t4, "name", { value: e7, configurable: true });
var st5 = (t4) => [, , , nt4(t4?.[X9("metadata")] ?? null)];
var G13 = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
var N11 = (t4) => t4 !== void 0 && typeof t4 != "function" ? C12("Function expected") : t4;
var at5 = (t4, e7, r36, o15, i10) => ({ kind: G13[t4], name: e7, metadata: o15, addInitializer: (s9) => r36._ ? C12("Already initialized") : i10.push(N11(s9 || null)) });
var Q13 = (t4, e7) => ot4(e7, X9("metadata"), t4[3]);
var ct5 = (t4, e7, r36, o15) => {
  for (var i10 = 0, s9 = t4[e7 >> 1], u17 = s9 && s9.length; i10 < u17; i10++) e7 & 1 ? s9[i10].call(r36) : o15 = s9[i10].call(r36, o15);
  return o15;
};
var ut4 = (t4, e7, r36, o15, i10, s9) => {
  var u17, c14, m20, f14, y18, a8 = e7 & 7, O20 = !!(e7 & 8), _17 = !!(e7 & 16), v16 = a8 > 3 ? t4.length + 1 : a8 ? O20 ? 1 : 2 : 0, g21 = G13[a8 + 5], A25 = a8 > 3 && (t4[v16 - 1] = []), J21 = t4[v16] || (t4[v16] = []), h24 = a8 && (!_17 && !O20 && (i10 = i10.prototype), a8 < 5 && (a8 > 3 || !_17) && it4(a8 < 4 ? i10 : { get [r36]() {
    return B12(this, s9);
  }, set [r36](p15) {
    return D14(this, s9, p15);
  } }, r36));
  a8 ? _17 && a8 < 4 && x13(s9, (a8 > 2 ? "set " : a8 > 1 ? "get " : "") + r36) : x13(i10, r36);
  for (var F24 = o15.length - 1; F24 >= 0; F24--) f14 = at5(a8, r36, m20 = {}, t4[3], J21), a8 && (f14.static = O20, f14.private = _17, y18 = f14.access = { has: _17 ? (p15) => ft4(i10, p15) : (p15) => r36 in p15 }, a8 ^ 3 && (y18.get = _17 ? (p15) => (a8 ^ 1 ? B12 : lt5)(p15, i10, a8 ^ 4 ? s9 : h24.get) : (p15) => p15[r36]), a8 > 2 && (y18.set = _17 ? (p15, I22) => D14(p15, i10, I22, a8 ^ 4 ? s9 : h24.set) : (p15, I22) => p15[r36] = I22)), c14 = (0, o15[F24])(a8 ? a8 < 4 ? _17 ? s9 : h24[g21] : a8 > 4 ? void 0 : { get: h24.get, set: h24.set } : i10, f14), m20._ = 1, a8 ^ 4 || c14 === void 0 ? N11(c14) && (a8 > 4 ? A25.unshift(c14) : a8 ? _17 ? s9 = c14 : h24[g21] = c14 : i10 = c14) : typeof c14 != "object" || c14 === null ? C12("Object expected") : (N11(u17 = c14.get) && (h24.get = u17), N11(u17 = c14.set) && (h24.set = u17), N11(u17 = c14.init) && A25.unshift(u17));
  return a8 || Q13(t4, i10), h24 && U12(i10, r36, h24), _17 ? a8 ^ 4 ? s9 : h24 : i10;
};
var q11 = (t4, e7, r36) => e7.has(t4) || C12("Cannot " + r36);
var ft4 = (t4, e7) => Object(e7) !== e7 ? C12('Cannot use the "in" operator on this value') : t4.has(e7);
var B12 = (t4, e7, r36) => (q11(t4, e7, "read from private field"), r36 ? r36.call(t4) : e7.get(t4));
var D14 = (t4, e7, r36, o15) => (q11(t4, e7, "write to private field"), o15 ? o15.call(t4, r36) : e7.set(t4, r36), r36);
var lt5 = (t4, e7, r36) => (q11(t4, e7, "access private method"), r36);
var ht4 = class extends Error {
};
var S14 = class extends ht4 {
};
function W9(t4, e7) {
  if (!t4 || typeof t4 != "string") throw new Error("Invalid output: expected string");
  let r36 = t4, o15;
  e7 instanceof be2.ZodArray || "element" in e7 ? o15 = St4(r36) : e7 instanceof be2.ZodObject || "omit" in e7 ? o15 = wt4(r36) : e7 instanceof be2.ZodBoolean ? o15 = bt5(r36) : e7 instanceof be2.ZodNumber || "nonnegative" in e7 ? o15 = Ot4(r36, e7) : o15 = r36;
  let i10 = e7.safeParse(o15);
  if (!i10.success) throw le4(i10.error);
  return i10.data;
}
function yt4(t4, e7) {
  return e7 > 0 && t4[e7 - 1] === "\\" && !(e7 > 1 && t4[e7 - 2] === "\\");
}
function Y8(t4, e7) {
  let r36 = e7 === "object" ? "{" : "[", o15 = e7 === "object" ? "}" : "]", i10 = [], s9 = 0, u17 = 0, c14 = { '"': false, "'": false };
  for (let m20 = 0; m20 < t4.length; m20++) {
    let f14 = t4.charAt(m20);
    switch (f14) {
      case '"':
      case "'":
        !c14[f14 === '"' ? "'" : '"'] && !yt4(t4, m20) && (c14[f14] = !c14[f14]);
        break;
      default:
        if (!c14['"'] && !c14["'"]) switch (f14) {
          case r36:
            s9 === 0 && (u17 = m20), s9 += 1;
            break;
          case o15:
            if (s9 -= 1, s9 === 0) {
              let y18 = t4.slice(u17, m20 + 1), a8 = JSON.parse(Ce3(y18));
              a8 && typeof a8 == "object" && i10.push(a8);
            } else if (s9 < 0) throw new S14(`Invalid JSON string: unexpected ${o15} at position ${m20}`);
        }
    }
  }
  if (s9 !== 0) throw new S14("Invalid JSON string: unmatched " + r36 + " or " + o15);
  return i10;
}
var _t4 = { true: true, false: false, t: true, f: false, yes: true, no: false, y: true, n: false, 1: true, 0: false };
function St4(t4) {
  try {
    let e7 = Y8(t4, "array");
    if (e7.length === 0) throw new S14("Invalid JSON array");
    let r36 = e7[0];
    if (!Array.isArray(r36)) throw new S14("Expected JSON array");
    return r36;
  } catch (e7) {
    throw e7 instanceof l6 ? new S14(e7.message, { cause: e7 }) : e7 instanceof SyntaxError ? new S14(`Invalid JSON array: ${e7.message}`, { cause: e7 }) : e7;
  }
}
function wt4(t4) {
  try {
    let e7 = Y8(t4, "object");
    if (e7.length === 0) throw new S14("Invalid JSON object");
    let r36 = e7[0];
    if (Array.isArray(r36) && (r36 = r36[0]), !r36 || typeof r36 != "object") throw new S14("Expected JSON object");
    return r36;
  } catch (e7) {
    throw e7 instanceof l6 ? new S14(e7.message, { cause: e7 }) : e7 instanceof SyntaxError ? new S14(`Invalid JSON object: ${e7.message}`, { cause: e7 }) : e7;
  }
}
function bt5(t4) {
  t4 = t4.toLowerCase().trim().replace(/[!.?]+$/, "");
  let e7 = _t4[t4];
  if (e7 === void 0) throw new S14(`Invalid boolean output: ${t4}`);
  return e7;
}
function Ot4(t4, e7) {
  t4 = t4.trim();
  let r36 = e7.isInt ? Number.parseInt(t4) : Number.parseFloat(t4);
  if (Number.isNaN(r36)) throw new S14(`Invalid number output: ${t4}`);
  return r36;
}
function b12(t4, e7) {
  if (!t4) throw e7 ? typeof e7 == "string" ? new Error(e7) : e7 : new Error("Assertion failed");
}
var Ft4 = (t4, ...e7) => {
  let r36 = new Set(e7);
  return Object.fromEntries(Object.entries(t4).filter(([o15]) => !r36.has(o15)));
};
function Mt4(t4) {
  try {
    return typeof __Process$3 < "u" ? __Process$3.env?.[t4] : void 0;
  } catch {
    return;
  }
}
function z10(t4, e7 = null, r36 = 0) {
  return t4 === void 0 ? "" : typeof t4 == "string" ? t4 : JSON.stringify(t4, e7, r36);
}
var At5 = w11.withOptions({ escapeSpecialCharacters: true });
function E12(t4) {
  return At5(t4).trim();
}
function P12(t4) {
  return !(!t4 || typeof t4 != "function" || !t4.inputSchema || !t4.parseInput || !t4.spec || !t4.execute || !t4.spec.name || typeof t4.spec.name != "string");
}
function Et4(t4, { strict: e7 = false } = {}) {
  return Ft4(Pe5(t4, { $refStrategy: "none", openaiStrictMode: e7 }), "$schema", "default", "definitions", "description", "markdownDescription");
}
var $8 = Symbol("agentic.schema");
function Nt4(t4) {
  return typeof t4 == "object" && t4 !== null && $8 in t4 && t4[$8] === true && "jsonSchema" in t4 && "parse" in t4;
}
function jt3(t4) {
  return !!t4 && typeof t4 == "object" && "_def" in t4 && "~standard" in t4 && t4["~standard"]?.vendor === "zod";
}
function Ct5(t4, e7 = {}) {
  return Nt4(t4) ? t4 : Rt4(t4, e7);
}
function Jt2(t4, { parse: e7, safeParse: r36, source: o15 } = {}) {
  return e7 ??= (i10) => (typeof i10 == "string" && (i10 = JSON.parse(Ce3(i10))), i10), r36 ??= (i10) => {
    try {
      return { success: true, data: e7(i10) };
    } catch (s9) {
      return { success: false, error: s9.message ?? String(s9) };
    }
  }, { [$8]: true, _type: void 0, jsonSchema: t4, parse: e7, safeParse: r36, _source: o15 };
}
function Rt4(t4, e7 = {}) {
  return Jt2(Et4(t4, e7), { parse: (r36) => W9(r36, t4), source: t4 });
}
function M14({ name: t4, description: e7, inputSchema: r36, strict: o15 = true, tags: i10, execute: s9 }, u17) {
  b12(t4, 'createAIFunction missing required "name"'), b12(r36, 'createAIFunction missing required "inputSchema"'), b12(s9 || u17, 'createAIFunction missing required "execute" function implementation'), b12(!(s9 && u17), 'createAIFunction: cannot provide both "execute" and a second function argument. there should only be one function implementation.'), s9 ??= u17, b12(s9, 'createAIFunction missing required "execute" function implementation'), b12(typeof s9 == "function", 'createAIFunction "execute" must be a function');
  let c14 = Ct5(r36, { strict: o15 }), m20 = (y18) => {
    if (typeof y18 == "string") return c14.parse(y18);
    {
      let a8 = y18.function_call?.arguments;
      return b12(a8, `Missing required function_call.arguments for function "${t4}"`), c14.parse(a8);
    }
  }, f14 = (y18) => {
    let a8 = m20(y18);
    return s9(a8);
  };
  return Object.defineProperty(f14, "name", { value: t4, writable: false }), f14.inputSchema = r36, f14.parseInput = m20, f14.execute = s9, f14.tags = i10, f14.spec = { name: t4, description: e7, parameters: c14.jsonSchema, type: "function", strict: o15 }, f14;
}
Symbol.metadata ??= Symbol.for("Symbol.metadata");
var Pt5 = /* @__PURE__ */ Object.create(null);
typeof Symbol == "function" && Symbol.metadata && Object.defineProperty(globalThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: Pt5 });
var tt5 = class {
  _functions;
  get functions() {
    if (!this._functions) {
      let t4 = this.constructor[Symbol.metadata];
      b12(t4, "Your runtime does not appear to support ES decorator metadata: https://github.com/tc39/proposal-decorator-metadata/issues/14");
      let r36 = (t4?.invocables ?? []).map((o15) => {
        let i10 = this[o15.methodName];
        return b12(i10), M14(o15, i10);
      });
      this._functions = new $t4(r36);
    }
    return this._functions;
  }
  getFunctionsFilteredByTags(...t4) {
    return this.functions.getFilteredByTags(...t4);
  }
  getFunctionsFilteredBy(t4) {
    return this.functions.getFilteredBy(t4);
  }
};
function zt4(t4) {
  return (e7, r36) => {
    let o15 = String(r36.name);
    r36.metadata.invocables || (r36.metadata.invocables = []), b12(t4.name, 'aiFunction requires a non-empty "name" argument'), r36.metadata.invocables.push({ ...t4, methodName: o15 }), r36.addInitializer(function() {
      this[o15] = this[o15].bind(this);
    });
  };
}
var $t4 = class j15 {
  _map;
  _transformNameKeysFn;
  constructor(e7, { transformNameKeysFn: r36 = Kt2 } = {}) {
    this._transformNameKeysFn = r36;
    let o15 = e7?.flatMap((i10) => {
      if (i10 instanceof tt5) return [...i10.functions];
      if (i10 instanceof j15) return [...i10];
      if (P12(i10)) return i10;
      let s9 = i10.functions ?? i10;
      if (s9) try {
        let u17 = [...s9];
        if (u17.every(P12)) return u17;
      } catch {
      }
      throw new Error(`Invalid AIFunctionLike: ${i10}`);
    });
    if (o15) {
      for (let i10 of o15) if (!P12(i10)) throw new Error(`Invalid AIFunctionLike: ${i10}`);
    }
    this._map = new Map(o15 ? o15.map((i10) => [this._transformNameKeysFn(i10.spec.name), i10]) : null);
  }
  get size() {
    return this._map.size;
  }
  add(e7) {
    return this._map.set(this._transformNameKeysFn(e7.spec.name), e7), this;
  }
  get(e7) {
    return this._map.get(this._transformNameKeysFn(e7));
  }
  set(e7, r36) {
    return this._map.set(this._transformNameKeysFn(e7), r36), this;
  }
  has(e7) {
    return this._map.has(this._transformNameKeysFn(e7));
  }
  clear() {
    this._map.clear();
  }
  delete(e7) {
    return this._map.delete(this._transformNameKeysFn(e7));
  }
  pick(...e7) {
    let r36 = new Set(e7.map(this._transformNameKeysFn));
    return new j15(Array.from(this).filter((o15) => r36.has(this._transformNameKeysFn(o15.spec.name))));
  }
  omit(...e7) {
    let r36 = new Set(e7.map(this._transformNameKeysFn));
    return new j15(Array.from(this).filter((o15) => !r36.has(this._transformNameKeysFn(o15.spec.name))));
  }
  map(e7) {
    return [...this.entries].map(e7);
  }
  getFilteredByTags(...e7) {
    let r36 = new Set(e7);
    return this.getFilteredBy((o15) => o15.tags?.some((i10) => r36.has(i10)));
  }
  getFilteredBy(e7) {
    return new j15(Array.from(this).filter((r36) => e7(r36)));
  }
  get specs() {
    return this.map((e7) => e7.spec);
  }
  get toolSpecs() {
    return this.map((e7) => ({ type: "function", function: e7.spec }));
  }
  get responsesToolSpecs() {
    return this.specs;
  }
  get entries() {
    return this._map.values();
  }
  [Symbol.iterator]() {
    return this.entries;
  }
};
function Kt2(t4) {
  return t4.toLowerCase();
}
var et5;
var K12;
var k14;
var rt4 = class extends (K12 = tt5, et5 = [zt4({ name: "echo", description: "Echoes the input.", inputSchema: be2.object({ query: be2.string().describe("input query to echo") }) })], K12) {
  constructor() {
    super(...arguments), ct5(k14, 5, this);
  }
  async echo({ query: t4 }) {
    return t4;
  }
};
k14 = st5(K12);
ut4(k14, 1, "echo", et5, rt4);
Q13(k14, rt4);
var ce4 = M14({ name: "echo", description: "Echoes the input.", inputSchema: be2.object({ query: be2.string().describe("input query to echo") }) }, ({ query: t4 }) => t4);
var H10;
((t4) => {
  function e7(n8, l20) {
    let { name: d24, cleanContent: w21 = true } = l20 ?? {};
    return { role: "system", content: w21 ? E12(n8) : n8, ...d24 ? { name: d24 } : {} };
  }
  t4.system = e7;
  function r36(n8, l20) {
    let { name: d24, cleanContent: w21 = true } = l20 ?? {};
    return { role: "developer", content: w21 ? E12(n8) : n8, ...d24 ? { name: d24 } : {} };
  }
  t4.developer = r36;
  function o15(n8, l20) {
    let { name: d24, cleanContent: w21 = true } = l20 ?? {};
    return { role: "user", content: w21 ? E12(n8) : n8, ...d24 ? { name: d24 } : {} };
  }
  t4.user = o15;
  function i10(n8, l20) {
    let { name: d24, cleanContent: w21 = true } = l20 ?? {};
    return { role: "assistant", content: w21 ? E12(n8) : n8, ...d24 ? { name: d24 } : {} };
  }
  t4.assistant = i10;
  function s9(n8, l20) {
    let { name: d24, cleanRefusal: w21 = true } = l20 ?? {};
    return { role: "assistant", refusal: w21 ? E12(n8) : n8, ...d24 ? { name: d24 } : {} };
  }
  t4.refusal = s9;
  function u17(n8, l20) {
    return { ...l20, role: "assistant", content: null, function_call: n8 };
  }
  t4.funcCall = u17;
  function c14(n8, l20) {
    return { role: "function", content: z10(n8), name: l20 };
  }
  t4.funcResult = c14;
  function m20(n8, l20) {
    return { ...l20, role: "assistant", content: null, tool_calls: n8 };
  }
  t4.toolCall = m20;
  function f14(n8, l20, d24) {
    let w21 = z10(n8);
    return { ...d24, role: "tool", tool_call_id: l20, content: w21 };
  }
  t4.toolResult = f14;
  function y18(n8) {
    let l20 = n8.choices[0].message;
    return a8(l20);
  }
  t4.getMessage = y18;
  function a8(n8) {
    if (n8.content === null && n8.tool_calls != null) return t4.toolCall(n8.tool_calls);
    if (n8.content === null && n8.function_call != null) return t4.funcCall(n8.function_call);
    if (n8.content !== null && n8.content !== void 0) return t4.assistant(n8.content);
    if (n8.refusal != null) return t4.refusal(n8.refusal);
    throw console.warn("Invalid message", n8), new Error("Invalid message");
  }
  t4.narrowResponseMessage = a8;
  function O20(n8) {
    return n8.role === "system";
  }
  t4.isSystem = O20;
  function _17(n8) {
    return n8.role === "developer";
  }
  t4.isDeveloper = _17;
  function v16(n8) {
    return n8.role === "user";
  }
  t4.isUser = v16;
  function g21(n8) {
    return n8.role === "assistant" && n8.content != null;
  }
  t4.isAssistant = g21;
  function A25(n8) {
    return n8.role === "assistant" && n8.refusal !== null;
  }
  t4.isRefusal = A25;
  function J21(n8) {
    return n8.role === "assistant" && n8.function_call != null;
  }
  t4.isFuncCall = J21;
  function h24(n8) {
    return n8.role === "function" && n8.name != null;
  }
  t4.isFuncResult = h24;
  function F24(n8) {
    return n8.role === "assistant" && n8.tool_calls != null;
  }
  t4.isToolCall = F24;
  function p15(n8) {
    return n8.role === "tool" && !!n8.tool_call_id;
  }
  t4.isToolResult = p15;
  function I22(n8) {
    if (O20(n8) || _17(n8) || v16(n8) || g21(n8) || A25(n8) || J21(n8) || h24(n8) || F24(n8) || p15(n8)) return n8;
    throw new Error("Invalid message type");
  }
  t4.narrow = I22;
})(H10 || (H10 = {}));

// https://esm.sh/@agentic/platform-core@8.4.4/denonext/platform-core.mjs
import __Process$6 from "node:process";

// https://esm.sh/@babel/helper-validator-identifier@7.25.9?target=denonext
var helper_validator_identifier_7_25_exports = {};
__export(helper_validator_identifier_7_25_exports, {
  __esModule: () => Q14,
  default: () => eu,
  isIdentifierChar: () => T10,
  isIdentifierName: () => U13,
  isIdentifierStart: () => V13,
  isKeyword: () => X10,
  isReservedWord: () => Y9,
  isStrictBindOnlyReservedWord: () => Z11,
  isStrictBindReservedWord: () => $9,
  isStrictReservedWord: () => uu
});

// https://esm.sh/@babel/helper-validator-identifier@7.25.9/denonext/helper-validator-identifier.mjs
var w13 = Object.create;
var v6 = Object.defineProperty;
var O13 = Object.getOwnPropertyDescriptor;
var j16 = Object.getOwnPropertyNames;
var B13 = Object.getPrototypeOf;
var P13 = Object.prototype.hasOwnProperty;
var n2 = (u17, e7) => () => (e7 || u17((e7 = { exports: {} }).exports, e7), e7.exports);
var _8 = (u17, e7, a8, f14) => {
  if (e7 && typeof e7 == "object" || typeof e7 == "function") for (let d24 of j16(e7)) !P13.call(u17, d24) && d24 !== a8 && v6(u17, d24, { get: () => e7[d24], enumerable: !(f14 = O13(e7, d24)) || f14.enumerable });
  return u17;
};
var A15 = (u17, e7, a8) => (a8 = u17 != null ? w13(B13(u17)) : {}, _8(e7 || !u17 || !u17.__esModule ? v6(a8, "default", { value: u17, enumerable: true }) : a8, u17));
var h12 = n2((r36) => {
  "use strict";
  Object.defineProperty(r36, "__esModule", { value: true });
  r36.isIdentifierChar = I22;
  r36.isIdentifierName = M24;
  r36.isIdentifierStart = x24;
  var o15 = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೝೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲊᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꟍꟐꟑꟓꟕ-Ƛꟲ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ", y18 = "·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࢗ-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ೳഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-໎໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠏-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿ-ᫎᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿‌‍‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯・꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿･", k25 = new RegExp("[" + o15 + "]"), K22 = new RegExp("[" + o15 + y18 + "]");
  o15 = y18 = null;
  var p15 = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 4, 51, 13, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 39, 27, 10, 22, 251, 41, 7, 1, 17, 2, 60, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 31, 9, 2, 0, 3, 0, 2, 37, 2, 0, 26, 0, 2, 0, 45, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 200, 32, 32, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 26, 3994, 6, 582, 6842, 29, 1763, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 433, 44, 212, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 42, 9, 8936, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 229, 29, 3, 0, 496, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4153, 7, 221, 3, 5761, 15, 7472, 16, 621, 2467, 541, 1507, 4938, 6, 4191], N18 = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 7, 9, 32, 4, 318, 1, 80, 3, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 68, 8, 2, 0, 3, 0, 2, 3, 2, 4, 2, 0, 15, 1, 83, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 7, 19, 58, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 343, 9, 54, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 10, 5350, 0, 7, 14, 11465, 27, 2343, 9, 87, 9, 39, 4, 60, 6, 26, 9, 535, 9, 470, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4178, 9, 519, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 245, 1, 2, 9, 726, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];
  function s9(u17, e7) {
    let a8 = 65536;
    for (let f14 = 0, d24 = e7.length; f14 < d24; f14 += 2) {
      if (a8 += e7[f14], a8 > u17) return false;
      if (a8 += e7[f14 + 1], a8 >= u17) return true;
    }
    return false;
  }
  function x24(u17) {
    return u17 < 65 ? u17 === 36 : u17 <= 90 ? true : u17 < 97 ? u17 === 95 : u17 <= 122 ? true : u17 <= 65535 ? u17 >= 170 && k25.test(String.fromCharCode(u17)) : s9(u17, p15);
  }
  function I22(u17) {
    return u17 < 48 ? u17 === 36 : u17 < 58 ? true : u17 < 65 ? false : u17 <= 90 ? true : u17 < 97 ? u17 === 95 : u17 <= 122 ? true : u17 <= 65535 ? u17 >= 170 && K22.test(String.fromCharCode(u17)) : s9(u17, p15) || s9(u17, N18);
  }
  function M24(u17) {
    let e7 = true;
    for (let a8 = 0; a8 < u17.length; a8++) {
      let f14 = u17.charCodeAt(a8);
      if ((f14 & 64512) === 55296 && a8 + 1 < u17.length) {
        let d24 = u17.charCodeAt(++a8);
        (d24 & 64512) === 56320 && (f14 = 65536 + ((f14 & 1023) << 10) + (d24 & 1023));
      }
      if (e7) {
        if (e7 = false, !x24(f14)) return false;
      } else if (!I22(f14)) return false;
    }
    return !e7;
  }
});
var g11 = n2((b23) => {
  "use strict";
  Object.defineProperty(b23, "__esModule", { value: true });
  b23.isKeyword = D23;
  b23.isReservedWord = W19;
  b23.isStrictBindOnlyReservedWord = m20;
  b23.isStrictBindReservedWord = z20;
  b23.isStrictReservedWord = R15;
  var l20 = { keyword: ["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete"], strict: ["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"], strictBind: ["eval", "arguments"] }, q22 = new Set(l20.keyword), E21 = new Set(l20.strict), F24 = new Set(l20.strictBind);
  function W19(u17, e7) {
    return e7 && u17 === "await" || u17 === "enum";
  }
  function R15(u17, e7) {
    return W19(u17, e7) || E21.has(u17);
  }
  function m20(u17) {
    return F24.has(u17);
  }
  function z20(u17, e7) {
    return R15(u17, e7) || m20(u17);
  }
  function D23(u17) {
    return q22.has(u17);
  }
});
var C13 = n2((c14) => {
  "use strict";
  Object.defineProperty(c14, "__esModule", { value: true });
  Object.defineProperty(c14, "isIdentifierChar", { enumerable: true, get: function() {
    return S25.isIdentifierChar;
  } });
  Object.defineProperty(c14, "isIdentifierName", { enumerable: true, get: function() {
    return S25.isIdentifierName;
  } });
  Object.defineProperty(c14, "isIdentifierStart", { enumerable: true, get: function() {
    return S25.isIdentifierStart;
  } });
  Object.defineProperty(c14, "isKeyword", { enumerable: true, get: function() {
    return t4.isKeyword;
  } });
  Object.defineProperty(c14, "isReservedWord", { enumerable: true, get: function() {
    return t4.isReservedWord;
  } });
  Object.defineProperty(c14, "isStrictBindOnlyReservedWord", { enumerable: true, get: function() {
    return t4.isStrictBindOnlyReservedWord;
  } });
  Object.defineProperty(c14, "isStrictBindReservedWord", { enumerable: true, get: function() {
    return t4.isStrictBindReservedWord;
  } });
  Object.defineProperty(c14, "isStrictReservedWord", { enumerable: true, get: function() {
    return t4.isStrictReservedWord;
  } });
  var S25 = h12(), t4 = g11();
});
var i6 = A15(C13());
var { __esModule: Q14, isIdentifierChar: T10, isIdentifierName: U13, isIdentifierStart: V13, isKeyword: X10, isReservedWord: Y9, isStrictBindOnlyReservedWord: Z11, isStrictBindReservedWord: $9, isStrictReservedWord: uu } = i6;
var eu = i6.default ?? i6;

// https://esm.sh/js-tokens@4.0.0?target=denonext
var js_tokens_4_0_exports = {};
__export(js_tokens_4_0_exports, {
  __esModule: () => x14,
  default: () => _9,
  matchToToken: () => T11
});

// https://esm.sh/js-tokens@4.0.0/denonext/js-tokens.mjs
var i7 = Object.create;
var l9 = Object.defineProperty;
var p8 = Object.getOwnPropertyDescriptor;
var r33 = Object.getOwnPropertyNames;
var F14 = Object.getPrototypeOf;
var y8 = Object.prototype.hasOwnProperty;
var $10 = (e7, s9) => () => (s9 || e7((s9 = { exports: {} }).exports, s9), s9.exports);
var a5 = (e7, s9, u17, f14) => {
  if (s9 && typeof s9 == "object" || typeof s9 == "function") for (let d24 of r33(s9)) !y8.call(e7, d24) && d24 !== u17 && l9(e7, d24, { get: () => s9[d24], enumerable: !(f14 = p8(s9, d24)) || f14.enumerable });
  return e7;
};
var b13 = (e7, s9, u17) => (u17 = e7 != null ? i7(F14(e7)) : {}, a5(s9 || !e7 || !e7.__esModule ? l9(u17, "default", { value: e7, enumerable: true }) : u17, e7));
var n3 = $10((o15) => {
  Object.defineProperty(o15, "__esModule", { value: true });
  o15.default = /((['"])(?:(?!\2|\\).|\\(?:\r\n|[\s\S]))*(\2)?|`(?:[^`\\$]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{[^}]*\}?)*\}?)*(`)?)|(\/\/.*)|(\/\*(?:[^*]|\*(?!\/))*(\*\/)?)|(\/(?!\*)(?:\[(?:(?![\]\\]).|\\.)*\]|(?![\/\]\\]).|\\.)+\/(?:(?!\s*(?:\b|[\u0080-\uFFFF$\\'"~({]|[+\-!](?!=)|\.?\d))|[gmiyus]{1,6}\b(?![\u0080-\uFFFF$\\]|\s*(?:[+\-*%&|^<>!=?({]|\/(?![\/*])))))|(0[xX][\da-fA-F]+|0[oO][0-7]+|0[bB][01]+|(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?)|((?!\d)(?:(?!\s)[$\w\u0080-\uFFFF]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+)|(--|\+\+|&&|\|\||=>|\.{3}|(?:[+\-\/%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2})=?|[?~.,:;[\](){}])|(\s+)|(^$|[\s\S])/g;
  o15.matchToToken = function(e7) {
    var s9 = { type: "invalid", value: e7[0], closed: void 0 };
    return e7[1] ? (s9.type = "string", s9.closed = !!(e7[3] || e7[4])) : e7[5] ? s9.type = "comment" : e7[6] ? (s9.type = "comment", s9.closed = !!e7[7]) : e7[8] ? s9.type = "regex" : e7[9] ? s9.type = "number" : e7[10] ? s9.type = "name" : e7[11] ? s9.type = "punctuator" : e7[12] && (s9.type = "whitespace"), s9;
  };
});
var t2 = b13(n3());
var { __esModule: x14, matchToToken: T11 } = t2;
var _9 = t2.default ?? t2;

// https://esm.sh/picocolors@1.1.1?target=denonext
var picocolors_1_1_exports = {};
__export(picocolors_1_1_exports, {
  bgBlack: () => J13,
  bgBlackBright: () => ib,
  bgBlue: () => U14,
  bgBlueBright: () => nb,
  bgCyan: () => X11,
  bgCyanBright: () => ob,
  bgGreen: () => P14,
  bgGreenBright: () => hb,
  bgMagenta: () => V14,
  bgMagentaBright: () => Bb,
  bgRed: () => K13,
  bgRedBright: () => lb,
  bgWhite: () => Z12,
  bgWhiteBright: () => ub,
  bgYellow: () => Q15,
  bgYellowBright: () => ab,
  black: () => _10,
  blackBright: () => $11,
  blue: () => q12,
  blueBright: () => rb,
  bold: () => G14,
  createColors: () => db,
  cyan: () => A16,
  cyanBright: () => xb,
  default: () => sb,
  dim: () => S15,
  gray: () => H11,
  green: () => I10,
  greenBright: () => eb,
  hidden: () => E13,
  inverse: () => j17,
  isColorSupported: () => M15,
  italic: () => W10,
  magenta: () => z11,
  magentaBright: () => tb,
  red: () => F15,
  redBright: () => bb,
  reset: () => Y10,
  strikethrough: () => L13,
  underline: () => T12,
  white: () => D15,
  whiteBright: () => gb,
  yellow: () => N12,
  yellowBright: () => mb
});

// https://esm.sh/picocolors@1.1.1/denonext/picocolors.mjs
import __Process$4 from "node:process";
var u12 = Object.create;
var a6 = Object.defineProperty;
var d12 = Object.getOwnPropertyDescriptor;
var s4 = Object.getOwnPropertyNames;
var c7 = Object.getPrototypeOf;
var C14 = Object.prototype.hasOwnProperty;
var w14 = (e7, b23) => () => (b23 || e7((b23 = { exports: {} }).exports, b23), b23.exports);
var y9 = (e7, b23, r36, t4) => {
  if (b23 && typeof b23 == "object" || typeof b23 == "function") for (let m20 of s4(b23)) !C14.call(e7, m20) && m20 !== r36 && a6(e7, m20, { get: () => b23[m20], enumerable: !(t4 = d12(b23, m20)) || t4.enumerable });
  return e7;
};
var p9 = (e7, b23, r36) => (r36 = e7 != null ? u12(c7(e7)) : {}, y9(b23 || !e7 || !e7.__esModule ? a6(r36, "default", { value: e7, enumerable: true }) : r36, e7));
var o5 = w14((v16, h24) => {
  var i10 = __Process$4 || {}, n8 = i10.argv || [], g21 = i10.env || {}, k25 = !(g21.NO_COLOR || n8.includes("--no-color")) && (!!g21.FORCE_COLOR || n8.includes("--color") || i10.platform === "win32" || (i10.stdout || {}).isTTY && g21.TERM !== "dumb" || !!g21.CI), f14 = (e7, b23, r36 = e7) => (t4) => {
    let m20 = "" + t4, x24 = m20.indexOf(b23, e7.length);
    return ~x24 ? e7 + O20(m20, b23, r36, x24) + b23 : e7 + m20 + b23;
  }, O20 = (e7, b23, r36, t4) => {
    let m20 = "", x24 = 0;
    do
      m20 += e7.substring(x24, t4) + r36, x24 = t4 + b23.length, t4 = e7.indexOf(b23, x24);
    while (~t4);
    return m20 + e7.substring(x24);
  }, B23 = (e7 = k25) => {
    let b23 = e7 ? f14 : () => String;
    return { isColorSupported: e7, reset: b23("\x1B[0m", "\x1B[0m"), bold: b23("\x1B[1m", "\x1B[22m", "\x1B[22m\x1B[1m"), dim: b23("\x1B[2m", "\x1B[22m", "\x1B[22m\x1B[2m"), italic: b23("\x1B[3m", "\x1B[23m"), underline: b23("\x1B[4m", "\x1B[24m"), inverse: b23("\x1B[7m", "\x1B[27m"), hidden: b23("\x1B[8m", "\x1B[28m"), strikethrough: b23("\x1B[9m", "\x1B[29m"), black: b23("\x1B[30m", "\x1B[39m"), red: b23("\x1B[31m", "\x1B[39m"), green: b23("\x1B[32m", "\x1B[39m"), yellow: b23("\x1B[33m", "\x1B[39m"), blue: b23("\x1B[34m", "\x1B[39m"), magenta: b23("\x1B[35m", "\x1B[39m"), cyan: b23("\x1B[36m", "\x1B[39m"), white: b23("\x1B[37m", "\x1B[39m"), gray: b23("\x1B[90m", "\x1B[39m"), bgBlack: b23("\x1B[40m", "\x1B[49m"), bgRed: b23("\x1B[41m", "\x1B[49m"), bgGreen: b23("\x1B[42m", "\x1B[49m"), bgYellow: b23("\x1B[43m", "\x1B[49m"), bgBlue: b23("\x1B[44m", "\x1B[49m"), bgMagenta: b23("\x1B[45m", "\x1B[49m"), bgCyan: b23("\x1B[46m", "\x1B[49m"), bgWhite: b23("\x1B[47m", "\x1B[49m"), blackBright: b23("\x1B[90m", "\x1B[39m"), redBright: b23("\x1B[91m", "\x1B[39m"), greenBright: b23("\x1B[92m", "\x1B[39m"), yellowBright: b23("\x1B[93m", "\x1B[39m"), blueBright: b23("\x1B[94m", "\x1B[39m"), magentaBright: b23("\x1B[95m", "\x1B[39m"), cyanBright: b23("\x1B[96m", "\x1B[39m"), whiteBright: b23("\x1B[97m", "\x1B[39m"), bgBlackBright: b23("\x1B[100m", "\x1B[49m"), bgRedBright: b23("\x1B[101m", "\x1B[49m"), bgGreenBright: b23("\x1B[102m", "\x1B[49m"), bgYellowBright: b23("\x1B[103m", "\x1B[49m"), bgBlueBright: b23("\x1B[104m", "\x1B[49m"), bgMagentaBright: b23("\x1B[105m", "\x1B[49m"), bgCyanBright: b23("\x1B[106m", "\x1B[49m"), bgWhiteBright: b23("\x1B[107m", "\x1B[49m") };
  };
  h24.exports = B23();
  h24.exports.createColors = B23;
});
var l10 = p9(o5());
var { isColorSupported: M15, reset: Y10, bold: G14, dim: S15, italic: W10, underline: T12, inverse: j17, hidden: E13, strikethrough: L13, black: _10, red: F15, green: I10, yellow: N12, blue: q12, magenta: z11, cyan: A16, white: D15, gray: H11, bgBlack: J13, bgRed: K13, bgGreen: P14, bgYellow: Q15, bgBlue: U14, bgMagenta: V14, bgCyan: X11, bgWhite: Z12, blackBright: $11, redBright: bb, greenBright: eb, yellowBright: mb, blueBright: rb, magentaBright: tb, cyanBright: xb, whiteBright: gb, bgBlackBright: ib, bgRedBright: lb, bgGreenBright: hb, bgYellowBright: ab, bgBlueBright: nb, bgMagentaBright: Bb, bgCyanBright: ob, bgWhiteBright: ub, createColors: db } = l10;
var sb = l10.default ?? l10;

// https://esm.sh/@babel/code-frame@7.26.2/denonext/code-frame.mjs
import __Process$5 from "node:process";
var require3 = (n8) => {
  const e7 = (m20) => typeof m20.default < "u" ? m20.default : m20, c14 = (m20) => Object.assign({ __esModule: true }, m20);
  switch (n8) {
    case "picocolors":
      return e7(picocolors_1_1_exports);
    case "js-tokens":
      return c14(js_tokens_4_0_exports);
    case "@babel/helper-validator-identifier":
      return c14(helper_validator_identifier_7_25_exports);
    default:
      console.error('module "' + n8 + '" not found');
      return null;
  }
};
var I11 = Object.create;
var $12 = Object.defineProperty;
var z12 = Object.getOwnPropertyDescriptor;
var q13 = Object.getOwnPropertyNames;
var K14 = Object.getPrototypeOf;
var P15 = Object.prototype.hasOwnProperty;
var j18 = ((e7) => typeof require3 < "u" ? require3 : typeof Proxy < "u" ? new Proxy(e7, { get: (n8, t4) => (typeof require3 < "u" ? require3 : n8)[t4] }) : e7)(function(e7) {
  if (typeof require3 < "u") return require3.apply(this, arguments);
  throw Error('Dynamic require of "' + e7 + '" is not supported');
});
var B14 = (e7, n8) => () => (n8 || e7((n8 = { exports: {} }).exports, n8), n8.exports);
var G15 = (e7, n8, t4, s9) => {
  if (n8 && typeof n8 == "object" || typeof n8 == "function") for (let r36 of q13(n8)) !P15.call(e7, r36) && r36 !== t4 && $12(e7, r36, { get: () => n8[r36], enumerable: !(s9 = z12(n8, r36)) || s9.enumerable });
  return e7;
};
var H12 = (e7, n8, t4) => (t4 = e7 != null ? I11(K14(e7)) : {}, G15(n8 || !e7 || !e7.__esModule ? $12(t4, "default", { value: e7, enumerable: true }) : t4, e7));
var _11 = B14((y18) => {
  "use strict";
  Object.defineProperty(y18, "__esModule", { value: true });
  var O20 = j18("picocolors"), M24 = j18("js-tokens"), E21 = j18("@babel/helper-validator-identifier");
  function J21() {
    return typeof __Process$5 == "object" && (__Process$5.env.FORCE_COLOR === "0" || __Process$5.env.FORCE_COLOR === "false") ? false : O20.isColorSupported;
  }
  var b23 = (e7, n8) => (t4) => e7(n8(t4));
  function S25(e7) {
    return { keyword: e7.cyan, capitalized: e7.yellow, jsxIdentifier: e7.yellow, punctuator: e7.yellow, number: e7.magenta, string: e7.green, regex: e7.magenta, comment: e7.gray, invalid: b23(b23(e7.white, e7.bgRed), e7.bold), gutter: e7.gray, marker: b23(e7.red, e7.bold), message: b23(e7.red, e7.bold), reset: e7.reset };
  }
  var V21 = S25(O20.createColors(true)), X17 = S25(O20.createColors(false));
  function k25(e7) {
    return e7 ? V21 : X17;
  }
  var Q23 = /* @__PURE__ */ new Set(["as", "async", "from", "get", "of", "set"]), U23 = /\r\n|[\n\r\u2028\u2029]/, Y13 = /^[()[\]{}]$/, N18;
  {
    let e7 = /^[a-z][\w-]*$/i, n8 = function(t4, s9, r36) {
      if (t4.type === "name") {
        if (E21.isKeyword(t4.value) || E21.isStrictReservedWord(t4.value, true) || Q23.has(t4.value)) return "keyword";
        if (e7.test(t4.value) && (r36[s9 - 1] === "<" || r36.slice(s9 - 2, s9) === "</")) return "jsxIdentifier";
        if (t4.value[0] !== t4.value[0].toLowerCase()) return "capitalized";
      }
      return t4.type === "punctuator" && Y13.test(t4.value) ? "bracket" : t4.type === "invalid" && (t4.value === "@" || t4.value === "#") ? "punctuator" : t4.type;
    };
    N18 = function* (t4) {
      let s9;
      for (; s9 = M24.default.exec(t4); ) {
        let r36 = M24.matchToToken(s9);
        yield { type: n8(r36, s9.index, t4), value: r36.value };
      }
    };
  }
  function R15(e7) {
    if (e7 === "") return "";
    let n8 = k25(true), t4 = "";
    for (let { type: s9, value: r36 } of N18(e7)) s9 in n8 ? t4 += r36.split(U23).map((u17) => n8[s9](u17)).join(`
`) : t4 += r36;
    return t4;
  }
  var x24 = false, W19 = /\r\n|[\n\r\u2028\u2029]/;
  function Z17(e7, n8, t4) {
    let s9 = Object.assign({ column: 0, line: -1 }, e7.start), r36 = Object.assign({}, s9, e7.end), { linesAbove: u17 = 2, linesBelow: g21 = 3 } = t4 || {}, i10 = s9.line, a8 = s9.column, p15 = r36.line, h24 = r36.column, L23 = Math.max(i10 - (u17 + 1), 0), d24 = Math.min(n8.length, p15 + g21);
    i10 === -1 && (L23 = 0), p15 === -1 && (d24 = n8.length);
    let c14 = p15 - i10, o15 = {};
    if (c14) for (let l20 = 0; l20 <= c14; l20++) {
      let m20 = l20 + i10;
      if (!a8) o15[m20] = true;
      else if (l20 === 0) {
        let f14 = n8[m20 - 1].length;
        o15[m20] = [a8, f14 - a8 + 1];
      } else if (l20 === c14) o15[m20] = [0, h24];
      else {
        let f14 = n8[m20 - l20].length;
        o15[m20] = [0, f14];
      }
    }
    else a8 === h24 ? a8 ? o15[i10] = [a8, 0] : o15[i10] = true : o15[i10] = [a8, h24 - a8];
    return { start: L23, end: d24, markerLines: o15 };
  }
  function T20(e7, n8, t4 = {}) {
    let s9 = t4.forceColor || J21() && t4.highlightCode, r36 = k25(s9), u17 = e7.split(W19), { start: g21, end: i10, markerLines: a8 } = Z17(n8, u17, t4), p15 = n8.start && typeof n8.start.column == "number", h24 = String(i10).length, d24 = (s9 ? R15(e7) : e7).split(W19, i10).slice(g21, i10).map((c14, o15) => {
      let l20 = g21 + 1 + o15, f14 = ` ${` ${l20}`.slice(-h24)} |`, v16 = a8[l20], F24 = !a8[l20 + 1];
      if (v16) {
        let w21 = "";
        if (Array.isArray(v16)) {
          let A25 = c14.slice(0, Math.max(v16[0] - 1, 0)).replace(/[^\t]/g, " "), D23 = v16[1] || 1;
          w21 = [`
 `, r36.gutter(f14.replace(/\d/g, " ")), " ", A25, r36.marker("^").repeat(D23)].join(""), F24 && t4.message && (w21 += " " + r36.message(t4.message));
        }
        return [r36.marker(">"), r36.gutter(f14), c14.length > 0 ? ` ${c14}` : "", w21].join("");
      } else return ` ${r36.gutter(f14)}${c14.length > 0 ? ` ${c14}` : ""}`;
    }).join(`
`);
    return t4.message && !p15 && (d24 = `${" ".repeat(h24 + 1)}${t4.message}
${d24}`), s9 ? r36.reset(d24) : d24;
  }
  function ee9(e7, n8, t4, s9 = {}) {
    if (!x24) {
      x24 = true;
      let u17 = "Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";
      if (__Process$5.emitWarning) __Process$5.emitWarning(u17, "DeprecationWarning");
      else {
        let g21 = new Error(u17);
        g21.name = "DeprecationWarning", console.warn(new Error(u17));
      }
    }
    return t4 = Math.max(t4, 0), T20(e7, { start: { column: t4, line: n8 } }, s9);
  }
  y18.codeFrameColumns = T20;
  y18.default = ee9;
  y18.highlight = R15;
});
var C15 = H12(_11());
var { __esModule: re8, codeFrameColumns: se6, highlight: ie5 } = C15;
var ae6 = C15.default ?? C15;

// https://esm.sh/@agentic/platform-core@8.4.4/denonext/platform-core.mjs
var j19 = class extends Error {
  constructor({ message: r36, cause: t4 }) {
    super(r36, { cause: t4 }), this.name = this.constructor.name, Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
  }
};
var o6 = class extends j19 {
  statusCode;
  headers;
  constructor({ message: r36, statusCode: t4 = 500, headers: e7, cause: n8 }) {
    super({ message: r36, cause: n8 }), this.statusCode = t4, this.headers = e7;
  }
};
function f6(r36, t4, e7 = "Internal assertion failed") {
  if (!r36) if (typeof t4 == "number") {
    let n8 = new o6({ statusCode: t4, message: e7 });
    throw Error.captureStackTrace(n8, f6), n8;
  } else {
    let n8 = new Error(t4 ?? e7);
    throw Error.captureStackTrace(n8, f6), n8;
  }
}
async function T13(r36 = crypto.randomUUID()) {
  let t4;
  typeof r36 == "string" ? t4 = new TextEncoder().encode(r36) : t4 = r36;
  let e7 = await crypto.subtle.digest("SHA-256", t4);
  return Array.from(new Uint8Array(e7)).map((s9) => ("00" + s9.toString(16)).slice(-2)).join("");
}
function F16(r36 = {}, { csv: t4 = false } = {}) {
  let e7 = Object.entries(r36).flatMap(([i10, s9]) => i10 === void 0 || s9 === void 0 ? [] : Array.isArray(s9) ? s9.map((c14) => [i10, String(c14)]) : [[i10, String(s9)]]);
  if (!t4) return new URLSearchParams(e7);
  let n8 = {};
  for (let [i10, s9] of e7) n8[i10] = n8[i10] ? `${n8[i10]},${s9}` : s9;
  return new URLSearchParams(n8);
}

// https://esm.sh/ms@2.1.3?target=denonext
var ms_2_1_exports = {};
__export(ms_2_1_exports, {
  default: () => C16
});

// https://esm.sh/ms@2.1.3/denonext/ms.mjs
var y10 = Object.create;
var f7 = Object.defineProperty;
var l12 = Object.getOwnPropertyDescriptor;
var v7 = Object.getOwnPropertyNames;
var w15 = Object.getPrototypeOf;
var g12 = Object.prototype.hasOwnProperty;
var p10 = (e7, r36) => () => (r36 || e7((r36 = { exports: {} }).exports, r36), r36.exports);
var M16 = (e7, r36, s9, t4) => {
  if (r36 && typeof r36 == "object" || typeof r36 == "function") for (let a8 of v7(r36)) !g12.call(e7, a8) && a8 !== s9 && f7(e7, a8, { get: () => r36[a8], enumerable: !(t4 = l12(r36, a8)) || t4.enumerable });
  return e7;
};
var b14 = (e7, r36, s9) => (s9 = e7 != null ? y10(w15(e7)) : {}, M16(r36 || !e7 || !e7.__esModule ? f7(s9, "default", { value: e7, enumerable: true }) : s9, e7));
var m12 = p10((L23, h24) => {
  var c14 = 1e3, u17 = c14 * 60, i10 = u17 * 60, n8 = i10 * 24, k25 = n8 * 7, x24 = n8 * 365.25;
  h24.exports = function(e7, r36) {
    r36 = r36 || {};
    var s9 = typeof e7;
    if (s9 === "string" && e7.length > 0) return S25(e7);
    if (s9 === "number" && isFinite(e7)) return r36.long ? A25(e7) : j26(e7);
    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e7));
  };
  function S25(e7) {
    if (e7 = String(e7), !(e7.length > 100)) {
      var r36 = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e7);
      if (r36) {
        var s9 = parseFloat(r36[1]), t4 = (r36[2] || "ms").toLowerCase();
        switch (t4) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return s9 * x24;
          case "weeks":
          case "week":
          case "w":
            return s9 * k25;
          case "days":
          case "day":
          case "d":
            return s9 * n8;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return s9 * i10;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return s9 * u17;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return s9 * c14;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return s9;
          default:
            return;
        }
      }
    }
  }
  function j26(e7) {
    var r36 = Math.abs(e7);
    return r36 >= n8 ? Math.round(e7 / n8) + "d" : r36 >= i10 ? Math.round(e7 / i10) + "h" : r36 >= u17 ? Math.round(e7 / u17) + "m" : r36 >= c14 ? Math.round(e7 / c14) + "s" : e7 + "ms";
  }
  function A25(e7) {
    var r36 = Math.abs(e7);
    return r36 >= n8 ? o15(e7, r36, n8, "day") : r36 >= i10 ? o15(e7, r36, i10, "hour") : r36 >= u17 ? o15(e7, r36, u17, "minute") : r36 >= c14 ? o15(e7, r36, c14, "second") : e7 + " ms";
  }
  function o15(e7, r36, s9, t4) {
    var a8 = r36 >= s9 * 1.5;
    return Math.round(e7 / s9) + " " + t4 + (a8 ? "s" : "");
  }
});
var d13 = b14(m12());
var C16 = d13.default ?? d13;

// https://esm.sh/supports-color@10.0.0?target=denonext
var supports_color_10_0_exports = {};
__export(supports_color_10_0_exports, {
  default: () => s5
});

// https://esm.sh/supports-color@10.0.0/denonext/supports-color.mjs
var r34 = "navigator" in globalThis ? globalThis.navigator.userAgentData && navigator.userAgentData.brands.find(({ brand: a8 }) => a8 === "Chromium")?.version > 93 ? 3 : /\b(Chrome|Chromium)\//.test(globalThis.navigator.userAgent) ? 1 : 0 : 0;
var t3 = r34 !== 0 && { level: r34, hasBasic: true, has256: r34 >= 2, has16m: r34 >= 3 };
var o7 = { stdout: t3, stderr: t3 };
var s5 = o7;

// https://esm.sh/debug@4.4.1/denonext/debug.mjs
import __Process$7 from "node:process";
import * as __0$ from "node:tty";
import * as __1$ from "node:util";
var require4 = (n8) => {
  const e7 = (m20) => typeof m20.default < "u" ? m20.default : m20, c14 = (m20) => Object.assign({ __esModule: true }, m20);
  switch (n8) {
    case "node:tty":
      return e7(__0$);
    case "node:util":
      return e7(__1$);
    case "supports-color":
      return c14(supports_color_10_0_exports);
    case "ms":
      return e7(ms_2_1_exports);
    default:
      console.error('module "' + n8 + '" not found');
      return null;
  }
};
var J14 = Object.create;
var k15 = Object.defineProperty;
var P16 = Object.getOwnPropertyDescriptor;
var T14 = Object.getOwnPropertyNames;
var W11 = Object.getPrototypeOf;
var Z13 = Object.prototype.hasOwnProperty;
var h14 = ((e7) => typeof require4 < "u" ? require4 : typeof Proxy < "u" ? new Proxy(e7, { get: (o15, t4) => (typeof require4 < "u" ? require4 : o15)[t4] }) : e7)(function(e7) {
  if (typeof require4 < "u") return require4.apply(this, arguments);
  throw Error('Dynamic require of "' + e7 + '" is not supported');
});
var b15 = (e7, o15) => () => (o15 || e7((o15 = { exports: {} }).exports, o15), o15.exports);
var M17 = (e7, o15, t4, s9) => {
  if (o15 && typeof o15 == "object" || typeof o15 == "function") for (let u17 of T14(o15)) !Z13.call(e7, u17) && u17 !== t4 && k15(e7, u17, { get: () => o15[u17], enumerable: !(s9 = P16(o15, u17)) || s9.enumerable });
  return e7;
};
var H13 = (e7, o15, t4) => (t4 = e7 != null ? J14(W11(e7)) : {}, M17(o15 || !e7 || !e7.__esModule ? k15(t4, "default", { value: e7, enumerable: true }) : t4, e7));
var A17 = b15((ae8, D23) => {
  function K22(e7) {
    t4.debug = t4, t4.default = t4, t4.coerce = G19, t4.disable = _17, t4.enable = u17, t4.enabled = z20, t4.humanize = h14("ms"), t4.destroy = S25, Object.keys(e7).forEach((n8) => {
      t4[n8] = e7[n8];
    }), t4.names = [], t4.skips = [], t4.formatters = {};
    function o15(n8) {
      let r36 = 0;
      for (let i10 = 0; i10 < n8.length; i10++) r36 = (r36 << 5) - r36 + n8.charCodeAt(i10), r36 |= 0;
      return t4.colors[Math.abs(r36) % t4.colors.length];
    }
    t4.selectColor = o15;
    function t4(n8) {
      let r36, i10 = null, l20, F24;
      function C25(...f14) {
        if (!C25.enabled) return;
        let p15 = C25, g21 = Number(/* @__PURE__ */ new Date()), L23 = g21 - (r36 || g21);
        p15.diff = L23, p15.prev = r36, p15.curr = g21, r36 = g21, f14[0] = t4.coerce(f14[0]), typeof f14[0] != "string" && f14.unshift("%O");
        let m20 = 0;
        f14[0] = f14[0].replace(/%([a-zA-Z%])/g, (O20, N18) => {
          if (O20 === "%%") return "%";
          m20++;
          let j26 = t4.formatters[N18];
          if (typeof j26 == "function") {
            let $20 = f14[m20];
            O20 = j26.call(p15, $20), f14.splice(m20, 1), m20--;
          }
          return O20;
        }), t4.formatArgs.call(p15, f14), (p15.log || t4.log).apply(p15, f14);
      }
      return C25.namespace = n8, C25.useColors = t4.useColors(), C25.color = t4.selectColor(n8), C25.extend = s9, C25.destroy = t4.destroy, Object.defineProperty(C25, "enabled", { enumerable: true, configurable: false, get: () => i10 !== null ? i10 : (l20 !== t4.namespaces && (l20 = t4.namespaces, F24 = t4.enabled(n8)), F24), set: (f14) => {
        i10 = f14;
      } }), typeof t4.init == "function" && t4.init(C25), C25;
    }
    function s9(n8, r36) {
      let i10 = t4(this.namespace + (typeof r36 > "u" ? ":" : r36) + n8);
      return i10.log = this.log, i10;
    }
    function u17(n8) {
      t4.save(n8), t4.namespaces = n8, t4.names = [], t4.skips = [];
      let r36 = (typeof n8 == "string" ? n8 : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
      for (let i10 of r36) i10[0] === "-" ? t4.skips.push(i10.slice(1)) : t4.names.push(i10);
    }
    function d24(n8, r36) {
      let i10 = 0, l20 = 0, F24 = -1, C25 = 0;
      for (; i10 < n8.length; ) if (l20 < r36.length && (r36[l20] === n8[i10] || r36[l20] === "*")) r36[l20] === "*" ? (F24 = l20, C25 = i10, l20++) : (i10++, l20++);
      else if (F24 !== -1) l20 = F24 + 1, C25++, i10 = C25;
      else return false;
      for (; l20 < r36.length && r36[l20] === "*"; ) l20++;
      return l20 === r36.length;
    }
    function _17() {
      let n8 = [...t4.names, ...t4.skips.map((r36) => "-" + r36)].join(",");
      return t4.enable(""), n8;
    }
    function z20(n8) {
      for (let r36 of t4.skips) if (d24(n8, r36)) return false;
      for (let r36 of t4.names) if (d24(n8, r36)) return true;
      return false;
    }
    function G19(n8) {
      return n8 instanceof Error ? n8.stack || n8.message : n8;
    }
    function S25() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    return t4.enable(t4.load()), t4;
  }
  D23.exports = K22;
});
var E14 = b15((a8, y18) => {
  a8.formatArgs = R15;
  a8.save = V21;
  a8.load = X17;
  a8.useColors = Q23;
  a8.storage = Y13();
  a8.destroy = /* @__PURE__ */ (() => {
    let e7 = false;
    return () => {
      e7 || (e7 = true, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
    };
  })();
  a8.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];
  function Q23() {
    if (typeof globalThis < "u" && globalThis.process && (globalThis.process.type === "renderer" || globalThis.process.__nwjs)) return true;
    if (typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return false;
    let e7;
    return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof globalThis < "u" && globalThis.console && (globalThis.console.firebug || globalThis.console.exception && globalThis.console.table) || typeof navigator < "u" && navigator.userAgent && (e7 = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(e7[1], 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  function R15(e7) {
    if (e7[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e7[0] + (this.useColors ? "%c " : " ") + "+" + y18.exports.humanize(this.diff), !this.useColors) return;
    let o15 = "color: " + this.color;
    e7.splice(1, 0, o15, "color: inherit");
    let t4 = 0, s9 = 0;
    e7[0].replace(/%[a-zA-Z%]/g, (u17) => {
      u17 !== "%%" && (t4++, u17 === "%c" && (s9 = t4));
    }), e7.splice(s9, 0, o15);
  }
  a8.log = console.debug || console.log || (() => {
  });
  function V21(e7) {
    try {
      e7 ? a8.storage.setItem("debug", e7) : a8.storage.removeItem("debug");
    } catch {
    }
  }
  function X17() {
    let e7;
    try {
      e7 = a8.storage.getItem("debug") || a8.storage.getItem("DEBUG");
    } catch {
    }
    return !e7 && typeof __Process$7 < "u" && "env" in __Process$7 && (e7 = __Process$7.env.DEBUG), e7;
  }
  function Y13() {
    try {
      return localStorage;
    } catch {
    }
  }
  y18.exports = A17()(a8);
  var { formatters: ee9 } = y18.exports;
  ee9.j = function(e7) {
    try {
      return JSON.stringify(e7);
    } catch (o15) {
      return "[UnexpectedJSONParseError]: " + o15.message;
    }
  };
});
var q14 = b15((c14, v16) => {
  var te8 = h14("node:tty"), w21 = h14("node:util");
  c14.init = le7;
  c14.log = se7;
  c14.formatArgs = ne7;
  c14.save = ie7;
  c14.load = ce6;
  c14.useColors = oe7;
  c14.destroy = w21.deprecate(() => {
  }, "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  c14.colors = [6, 2, 3, 4, 5, 1];
  try {
    let e7 = h14("supports-color");
    e7 && (e7.stderr || e7).level >= 2 && (c14.colors = [20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221]);
  } catch {
  }
  c14.inspectOpts = Object.keys(__Process$7.env).filter((e7) => /^debug_/i.test(e7)).reduce((e7, o15) => {
    let t4 = o15.substring(6).toLowerCase().replace(/_([a-z])/g, (u17, d24) => d24.toUpperCase()), s9 = __Process$7.env[o15];
    return /^(yes|on|true|enabled)$/i.test(s9) ? s9 = true : /^(no|off|false|disabled)$/i.test(s9) ? s9 = false : s9 === "null" ? s9 = null : s9 = Number(s9), e7[t4] = s9, e7;
  }, {});
  function oe7() {
    return "colors" in c14.inspectOpts ? !!c14.inspectOpts.colors : te8.isatty(__Process$7.stderr.fd);
  }
  function ne7(e7) {
    let { namespace: o15, useColors: t4 } = this;
    if (t4) {
      let s9 = this.color, u17 = "\x1B[3" + (s9 < 8 ? s9 : "8;5;" + s9), d24 = `  ${u17};1m${o15} \x1B[0m`;
      e7[0] = d24 + e7[0].split(`
`).join(`
` + d24), e7.push(u17 + "m+" + v16.exports.humanize(this.diff) + "\x1B[0m");
    } else e7[0] = re10() + o15 + " " + e7[0];
  }
  function re10() {
    return c14.inspectOpts.hideDate ? "" : (/* @__PURE__ */ new Date()).toISOString() + " ";
  }
  function se7(...e7) {
    return __Process$7.stderr.write(w21.formatWithOptions(c14.inspectOpts, ...e7) + `
`);
  }
  function ie7(e7) {
    e7 ? __Process$7.env.DEBUG = e7 : delete __Process$7.env.DEBUG;
  }
  function ce6() {
    return __Process$7.env.DEBUG;
  }
  function le7(e7) {
    e7.inspectOpts = {};
    let o15 = Object.keys(c14.inspectOpts);
    for (let t4 = 0; t4 < o15.length; t4++) e7.inspectOpts[o15[t4]] = c14.inspectOpts[o15[t4]];
  }
  v16.exports = A17()(c14);
  var { formatters: B23 } = v16.exports;
  B23.o = function(e7) {
    return this.inspectOpts.colors = this.useColors, w21.inspect(e7, this.inspectOpts).split(`
`).map((o15) => o15.trim()).join(" ");
  };
  B23.O = function(e7) {
    return this.inspectOpts.colors = this.useColors, w21.inspect(e7, this.inspectOpts);
  };
});
var U15 = b15((fe6, I22) => {
  typeof __Process$7 > "u" || __Process$7.type === "renderer" || __Process$7.browser === true || __Process$7.__nwjs ? I22.exports = E14() : I22.exports = q14();
});
var x15 = H13(U15());
var { formatArgs: de5, save: pe6, load: Fe4, useColors: ge5, storage: me6, destroy: he5, colors: be5, log: ye5 } = x15;
var we3 = x15.default ?? x15;

// https://esm.sh/fflate@0.8.2/denonext/fflate.mjs
var cn = {};
var Qn2 = function(n8, r36, t4, e7, i10) {
  var a8 = new Worker(cn[r36] || (cn[r36] = URL.createObjectURL(new Blob([n8 + ';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'], { type: "text/javascript" }))));
  return a8.onmessage = function(o15) {
    var s9 = o15.data, l20 = s9.$e$;
    if (l20) {
      var f14 = new Error(l20[0]);
      f14.code = l20[1], f14.stack = l20[2], i10(f14, null);
    } else i10(null, s9);
  }, a8.postMessage(t4, e7), a8;
};
var S16 = Uint8Array;
var W12 = Uint16Array;
var Zr2 = Int32Array;
var mr4 = new S16([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]);
var xr4 = new S16([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]);
var Cr2 = new S16([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
var An2 = function(n8, r36) {
  for (var t4 = new W12(31), e7 = 0; e7 < 31; ++e7) t4[e7] = r36 += 1 << n8[e7 - 1];
  for (var i10 = new Zr2(t4[30]), e7 = 1; e7 < 30; ++e7) for (var a8 = t4[e7]; a8 < t4[e7 + 1]; ++a8) i10[a8] = a8 - t4[e7] << 5 | e7;
  return { b: t4, r: i10 };
};
var Mn2 = An2(mr4, 2);
var tn = Mn2.b;
var Nr4 = Mn2.r;
tn[28] = 258, Nr4[258] = 28;
var Sn2 = An2(xr4, 0);
var Un2 = Sn2.b;
var Qr = Sn2.r;
var Ir4 = new W12(32768);
for (I12 = 0; I12 < 32768; ++I12) tr3 = (I12 & 43690) >> 1 | (I12 & 21845) << 1, tr3 = (tr3 & 52428) >> 2 | (tr3 & 13107) << 2, tr3 = (tr3 & 61680) >> 4 | (tr3 & 3855) << 4, Ir4[I12] = ((tr3 & 65280) >> 8 | (tr3 & 255) << 8) >> 1;
var tr3;
var I12;
var V15 = function(n8, r36, t4) {
  for (var e7 = n8.length, i10 = 0, a8 = new W12(r36); i10 < e7; ++i10) n8[i10] && ++a8[n8[i10] - 1];
  var o15 = new W12(r36);
  for (i10 = 1; i10 < r36; ++i10) o15[i10] = o15[i10 - 1] + a8[i10 - 1] << 1;
  var s9;
  if (t4) {
    s9 = new W12(1 << r36);
    var l20 = 15 - r36;
    for (i10 = 0; i10 < e7; ++i10) if (n8[i10]) for (var f14 = i10 << 4 | n8[i10], h24 = r36 - n8[i10], u17 = o15[n8[i10] - 1]++ << h24, v16 = u17 | (1 << h24) - 1; u17 <= v16; ++u17) s9[Ir4[u17] >> l20] = f14;
  } else for (s9 = new W12(e7), i10 = 0; i10 < e7; ++i10) n8[i10] && (s9[i10] = Ir4[o15[n8[i10] - 1]++] >> 15 - n8[i10]);
  return s9;
};
var er4 = new S16(288);
for (I12 = 0; I12 < 144; ++I12) er4[I12] = 8;
var I12;
for (I12 = 144; I12 < 256; ++I12) er4[I12] = 9;
var I12;
for (I12 = 256; I12 < 280; ++I12) er4[I12] = 7;
var I12;
for (I12 = 280; I12 < 288; ++I12) er4[I12] = 8;
var I12;
var yr3 = new S16(32);
for (I12 = 0; I12 < 32; ++I12) yr3[I12] = 5;
var I12;
var Fn2 = V15(er4, 9, 0);
var Dn2 = V15(er4, 9, 1);
var Tn2 = V15(yr3, 5, 0);
var Cn2 = V15(yr3, 5, 1);
var Pr3 = function(n8) {
  for (var r36 = n8[0], t4 = 1; t4 < n8.length; ++t4) n8[t4] > r36 && (r36 = n8[t4]);
  return r36;
};
var Q16 = function(n8, r36, t4) {
  var e7 = r36 / 8 | 0;
  return (n8[e7] | n8[e7 + 1] << 8) >> (r36 & 7) & t4;
};
var $r3 = function(n8, r36) {
  var t4 = r36 / 8 | 0;
  return (n8[t4] | n8[t4 + 1] << 8 | n8[t4 + 2] << 16) >> (r36 & 7);
};
var zr2 = function(n8) {
  return (n8 + 7) / 8 | 0;
};
var X12 = function(n8, r36, t4) {
  return (r36 == null || r36 < 0) && (r36 = 0), (t4 == null || t4 > n8.length) && (t4 = n8.length), new S16(n8.subarray(r36, t4));
};
var In2 = ["unexpected EOF", "invalid block type", "invalid length/literal", "invalid distance", "stream finished", "no stream handler", , "no callback", "invalid UTF-8 data", "extra field too long", "date not in range 1980-2099", "filename too long", "stream finishing", "invalid zip data"];
var c8 = function(n8, r36, t4) {
  var e7 = new Error(r36 || In2[n8]);
  if (e7.code = n8, Error.captureStackTrace && Error.captureStackTrace(e7, c8), !t4) throw e7;
  return e7;
};
var Br = function(n8, r36, t4, e7) {
  var i10 = n8.length, a8 = e7 ? e7.length : 0;
  if (!i10 || r36.f && !r36.l) return t4 || new S16(0);
  var o15 = !t4, s9 = o15 || r36.i != 2, l20 = r36.i;
  o15 && (t4 = new S16(i10 * 3));
  var f14 = function(Dr4) {
    var Tr3 = t4.length;
    if (Dr4 > Tr3) {
      var cr5 = new S16(Math.max(Tr3 * 2, Dr4));
      cr5.set(t4), t4 = cr5;
    }
  }, h24 = r36.f || 0, u17 = r36.p || 0, v16 = r36.b || 0, M24 = r36.l, m20 = r36.d, z20 = r36.m, p15 = r36.n, x24 = i10 * 8;
  do {
    if (!M24) {
      h24 = Q16(n8, u17, 1);
      var U23 = Q16(n8, u17 + 1, 3);
      if (u17 += 3, U23) if (U23 == 1) M24 = Dn2, m20 = Cn2, z20 = 9, p15 = 5;
      else if (U23 == 2) {
        var B23 = Q16(n8, u17, 31) + 257, D23 = Q16(n8, u17 + 10, 15) + 4, w21 = B23 + Q16(n8, u17 + 5, 31) + 1;
        u17 += 14;
        for (var g21 = new S16(w21), F24 = new S16(19), T20 = 0; T20 < D23; ++T20) F24[Cr2[T20]] = Q16(n8, u17 + T20 * 3, 7);
        u17 += D23 * 3;
        for (var O20 = Pr3(F24), H20 = (1 << O20) - 1, G19 = V15(F24, O20, 1), T20 = 0; T20 < w21; ) {
          var L23 = G19[Q16(n8, u17, H20)];
          u17 += L23 & 15;
          var A25 = L23 >> 4;
          if (A25 < 16) g21[T20++] = A25;
          else {
            var q22 = 0, E21 = 0;
            for (A25 == 16 ? (E21 = 3 + Q16(n8, u17, 3), u17 += 2, q22 = g21[T20 - 1]) : A25 == 17 ? (E21 = 3 + Q16(n8, u17, 7), u17 += 3) : A25 == 18 && (E21 = 11 + Q16(n8, u17, 127), u17 += 7); E21--; ) g21[T20++] = q22;
          }
        }
        var R15 = g21.subarray(0, B23), N18 = g21.subarray(B23);
        z20 = Pr3(R15), p15 = Pr3(N18), M24 = V15(R15, z20, 1), m20 = V15(N18, p15, 1);
      } else c8(1);
      else {
        var A25 = zr2(u17) + 4, y18 = n8[A25 - 4] | n8[A25 - 3] << 8, Z17 = A25 + y18;
        if (Z17 > i10) {
          l20 && c8(0);
          break;
        }
        s9 && f14(v16 + y18), t4.set(n8.subarray(A25, Z17), v16), r36.b = v16 += y18, r36.p = u17 = Z17 * 8, r36.f = h24;
        continue;
      }
      if (u17 > x24) {
        l20 && c8(0);
        break;
      }
    }
    s9 && f14(v16 + 131072);
    for (var sr5 = (1 << z20) - 1, Y13 = (1 << p15) - 1, nr5 = u17; ; nr5 = u17) {
      var q22 = M24[$r3(n8, u17) & sr5], j26 = q22 >> 4;
      if (u17 += q22 & 15, u17 > x24) {
        l20 && c8(0);
        break;
      }
      if (q22 || c8(2), j26 < 256) t4[v16++] = j26;
      else if (j26 == 256) {
        nr5 = u17, M24 = null;
        break;
      } else {
        var J21 = j26 - 254;
        if (j26 > 264) {
          var T20 = j26 - 257, P22 = mr4[T20];
          J21 = Q16(n8, u17, (1 << P22) - 1) + tn[T20], u17 += P22;
        }
        var _17 = m20[$r3(n8, u17) & Y13], lr4 = _17 >> 4;
        _17 || c8(3), u17 += _17 & 15;
        var N18 = Un2[lr4];
        if (lr4 > 3) {
          var P22 = xr4[lr4];
          N18 += $r3(n8, u17) & (1 << P22) - 1, u17 += P22;
        }
        if (u17 > x24) {
          l20 && c8(0);
          break;
        }
        s9 && f14(v16 + 131072);
        var vr5 = v16 + J21;
        if (v16 < N18) {
          var Or6 = a8 - N18, qr = Math.min(N18, vr5);
          for (Or6 + v16 < 0 && c8(3); v16 < qr; ++v16) t4[v16] = e7[Or6 + v16];
        }
        for (; v16 < vr5; ++v16) t4[v16] = t4[v16 - N18];
      }
    }
    r36.l = M24, r36.p = nr5, r36.b = v16, r36.f = h24, M24 && (h24 = 1, r36.m = z20, r36.d = m20, r36.n = p15);
  } while (!h24);
  return v16 != t4.length && o15 ? X12(t4, 0, v16) : t4.subarray(0, v16);
};
var rr = function(n8, r36, t4) {
  t4 <<= r36 & 7;
  var e7 = r36 / 8 | 0;
  n8[e7] |= t4, n8[e7 + 1] |= t4 >> 8;
};
var pr4 = function(n8, r36, t4) {
  t4 <<= r36 & 7;
  var e7 = r36 / 8 | 0;
  n8[e7] |= t4, n8[e7 + 1] |= t4 >> 8, n8[e7 + 2] |= t4 >> 16;
};
var Hr = function(n8, r36) {
  for (var t4 = [], e7 = 0; e7 < n8.length; ++e7) n8[e7] && t4.push({ s: e7, f: n8[e7] });
  var i10 = t4.length, a8 = t4.slice();
  if (!i10) return { t: ir4, l: 0 };
  if (i10 == 1) {
    var o15 = new S16(t4[0].s + 1);
    return o15[t4[0].s] = 1, { t: o15, l: 1 };
  }
  t4.sort(function(Z17, B23) {
    return Z17.f - B23.f;
  }), t4.push({ s: -1, f: 25001 });
  var s9 = t4[0], l20 = t4[1], f14 = 0, h24 = 1, u17 = 2;
  for (t4[0] = { s: -1, f: s9.f + l20.f, l: s9, r: l20 }; h24 != i10 - 1; ) s9 = t4[t4[f14].f < t4[u17].f ? f14++ : u17++], l20 = t4[f14 != h24 && t4[f14].f < t4[u17].f ? f14++ : u17++], t4[h24++] = { s: -1, f: s9.f + l20.f, l: s9, r: l20 };
  for (var v16 = a8[0].s, e7 = 1; e7 < i10; ++e7) a8[e7].s > v16 && (v16 = a8[e7].s);
  var M24 = new W12(v16 + 1), m20 = Rr2(t4[h24 - 1], M24, 0);
  if (m20 > r36) {
    var e7 = 0, z20 = 0, p15 = m20 - r36, x24 = 1 << p15;
    for (a8.sort(function(B23, D23) {
      return M24[D23.s] - M24[B23.s] || B23.f - D23.f;
    }); e7 < i10; ++e7) {
      var U23 = a8[e7].s;
      if (M24[U23] > r36) z20 += x24 - (1 << m20 - M24[U23]), M24[U23] = r36;
      else break;
    }
    for (z20 >>= p15; z20 > 0; ) {
      var A25 = a8[e7].s;
      M24[A25] < r36 ? z20 -= 1 << r36 - M24[A25]++ - 1 : ++e7;
    }
    for (; e7 >= 0 && z20; --e7) {
      var y18 = a8[e7].s;
      M24[y18] == r36 && (--M24[y18], ++z20);
    }
    m20 = r36;
  }
  return { t: new S16(M24), l: m20 };
};
var Rr2 = function(n8, r36, t4) {
  return n8.s == -1 ? Math.max(Rr2(n8.l, r36, t4 + 1), Rr2(n8.r, r36, t4 + 1)) : r36[n8.s] = t4;
};
var Vr2 = function(n8) {
  for (var r36 = n8.length; r36 && !n8[--r36]; ) ;
  for (var t4 = new W12(++r36), e7 = 0, i10 = n8[0], a8 = 1, o15 = function(l20) {
    t4[e7++] = l20;
  }, s9 = 1; s9 <= r36; ++s9) if (n8[s9] == i10 && s9 != r36) ++a8;
  else {
    if (!i10 && a8 > 2) {
      for (; a8 > 138; a8 -= 138) o15(32754);
      a8 > 2 && (o15(a8 > 10 ? a8 - 11 << 5 | 28690 : a8 - 3 << 5 | 12305), a8 = 0);
    } else if (a8 > 3) {
      for (o15(i10), --a8; a8 > 6; a8 -= 6) o15(8304);
      a8 > 2 && (o15(a8 - 3 << 5 | 8208), a8 = 0);
    }
    for (; a8--; ) o15(i10);
    a8 = 1, i10 = n8[s9];
  }
  return { c: t4.subarray(0, e7), n: r36 };
};
var gr6 = function(n8, r36) {
  for (var t4 = 0, e7 = 0; e7 < r36.length; ++e7) t4 += n8[e7] * r36[e7];
  return t4;
};
var en = function(n8, r36, t4) {
  var e7 = t4.length, i10 = zr2(r36 + 2);
  n8[i10] = e7 & 255, n8[i10 + 1] = e7 >> 8, n8[i10 + 2] = n8[i10] ^ 255, n8[i10 + 3] = n8[i10 + 1] ^ 255;
  for (var a8 = 0; a8 < e7; ++a8) n8[i10 + a8 + 4] = t4[a8];
  return (i10 + 4 + e7) * 8;
};
var Xr3 = function(n8, r36, t4, e7, i10, a8, o15, s9, l20, f14, h24) {
  rr(r36, h24++, t4), ++i10[256];
  for (var u17 = Hr(i10, 15), v16 = u17.t, M24 = u17.l, m20 = Hr(a8, 15), z20 = m20.t, p15 = m20.l, x24 = Vr2(v16), U23 = x24.c, A25 = x24.n, y18 = Vr2(z20), Z17 = y18.c, B23 = y18.n, D23 = new W12(19), w21 = 0; w21 < U23.length; ++w21) ++D23[U23[w21] & 31];
  for (var w21 = 0; w21 < Z17.length; ++w21) ++D23[Z17[w21] & 31];
  for (var g21 = Hr(D23, 7), F24 = g21.t, T20 = g21.l, O20 = 19; O20 > 4 && !F24[Cr2[O20 - 1]]; --O20) ;
  var H20 = f14 + 5 << 3, G19 = gr6(i10, er4) + gr6(a8, yr3) + o15, L23 = gr6(i10, v16) + gr6(a8, z20) + o15 + 14 + 3 * O20 + gr6(D23, F24) + 2 * D23[16] + 3 * D23[17] + 7 * D23[18];
  if (l20 >= 0 && H20 <= G19 && H20 <= L23) return en(r36, h24, n8.subarray(l20, l20 + f14));
  var q22, E21, R15, N18;
  if (rr(r36, h24, 1 + (L23 < G19)), h24 += 2, L23 < G19) {
    q22 = V15(v16, M24, 0), E21 = v16, R15 = V15(z20, p15, 0), N18 = z20;
    var sr5 = V15(F24, T20, 0);
    rr(r36, h24, A25 - 257), rr(r36, h24 + 5, B23 - 1), rr(r36, h24 + 10, O20 - 4), h24 += 14;
    for (var w21 = 0; w21 < O20; ++w21) rr(r36, h24 + 3 * w21, F24[Cr2[w21]]);
    h24 += 3 * O20;
    for (var Y13 = [U23, Z17], nr5 = 0; nr5 < 2; ++nr5) for (var j26 = Y13[nr5], w21 = 0; w21 < j26.length; ++w21) {
      var J21 = j26[w21] & 31;
      rr(r36, h24, sr5[J21]), h24 += F24[J21], J21 > 15 && (rr(r36, h24, j26[w21] >> 5 & 127), h24 += j26[w21] >> 12);
    }
  } else q22 = Fn2, E21 = er4, R15 = Tn2, N18 = yr3;
  for (var w21 = 0; w21 < s9; ++w21) {
    var P22 = e7[w21];
    if (P22 > 255) {
      var J21 = P22 >> 18 & 31;
      pr4(r36, h24, q22[J21 + 257]), h24 += E21[J21 + 257], J21 > 7 && (rr(r36, h24, P22 >> 23 & 31), h24 += mr4[J21]);
      var _17 = P22 & 31;
      pr4(r36, h24, R15[_17]), h24 += N18[_17], _17 > 3 && (pr4(r36, h24, P22 >> 5 & 8191), h24 += xr4[_17]);
    } else pr4(r36, h24, q22[P22]), h24 += E21[P22];
  }
  return pr4(r36, h24, q22[256]), h24 + E21[256];
};
var Zn2 = new Zr2([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]);
var ir4 = new S16(0);
var Bn2 = function(n8, r36, t4, e7, i10, a8) {
  var o15 = a8.z || n8.length, s9 = new S16(e7 + o15 + 5 * (1 + Math.ceil(o15 / 7e3)) + i10), l20 = s9.subarray(e7, s9.length - i10), f14 = a8.l, h24 = (a8.r || 0) & 7;
  if (r36) {
    h24 && (l20[0] = a8.r >> 3);
    for (var u17 = Zn2[r36 - 1], v16 = u17 >> 13, M24 = u17 & 8191, m20 = (1 << t4) - 1, z20 = a8.p || new W12(32768), p15 = a8.h || new W12(m20 + 1), x24 = Math.ceil(t4 / 3), U23 = 2 * x24, A25 = function(Jr) {
      return (n8[Jr] ^ n8[Jr + 1] << x24 ^ n8[Jr + 2] << U23) & m20;
    }, y18 = new Zr2(25e3), Z17 = new W12(288), B23 = new W12(32), D23 = 0, w21 = 0, g21 = a8.i || 0, F24 = 0, T20 = a8.w || 0, O20 = 0; g21 + 2 < o15; ++g21) {
      var H20 = A25(g21), G19 = g21 & 32767, L23 = p15[H20];
      if (z20[G19] = L23, p15[H20] = G19, T20 <= g21) {
        var q22 = o15 - g21;
        if ((D23 > 7e3 || F24 > 24576) && (q22 > 423 || !f14)) {
          h24 = Xr3(n8, l20, 0, y18, Z17, B23, w21, F24, O20, g21 - O20, h24), F24 = D23 = w21 = 0, O20 = g21;
          for (var E21 = 0; E21 < 286; ++E21) Z17[E21] = 0;
          for (var E21 = 0; E21 < 30; ++E21) B23[E21] = 0;
        }
        var R15 = 2, N18 = 0, sr5 = M24, Y13 = G19 - L23 & 32767;
        if (q22 > 2 && H20 == A25(g21 - Y13)) for (var nr5 = Math.min(v16, q22) - 1, j26 = Math.min(32767, g21), J21 = Math.min(258, q22); Y13 <= j26 && --sr5 && G19 != L23; ) {
          if (n8[g21 + R15] == n8[g21 + R15 - Y13]) {
            for (var P22 = 0; P22 < J21 && n8[g21 + P22] == n8[g21 + P22 - Y13]; ++P22) ;
            if (P22 > R15) {
              if (R15 = P22, N18 = Y13, P22 > nr5) break;
              for (var _17 = Math.min(Y13, P22 - 2), lr4 = 0, E21 = 0; E21 < _17; ++E21) {
                var vr5 = g21 - Y13 + E21 & 32767, Or6 = z20[vr5], qr = vr5 - Or6 & 32767;
                qr > lr4 && (lr4 = qr, L23 = vr5);
              }
            }
          }
          G19 = L23, L23 = z20[G19], Y13 += G19 - L23 & 32767;
        }
        if (N18) {
          y18[F24++] = 268435456 | Nr4[R15] << 18 | Qr[N18];
          var Dr4 = Nr4[R15] & 31, Tr3 = Qr[N18] & 31;
          w21 += mr4[Dr4] + xr4[Tr3], ++Z17[257 + Dr4], ++B23[Tr3], T20 = g21 + R15, ++D23;
        } else y18[F24++] = n8[g21], ++Z17[n8[g21]];
      }
    }
    for (g21 = Math.max(g21, T20); g21 < o15; ++g21) y18[F24++] = n8[g21], ++Z17[n8[g21]];
    h24 = Xr3(n8, l20, f14, y18, Z17, B23, w21, F24, O20, g21 - O20, h24), f14 || (a8.r = h24 & 7 | l20[h24 / 8 | 0] << 3, h24 -= 7, a8.h = p15, a8.p = z20, a8.i = g21, a8.w = T20);
  } else {
    for (var g21 = a8.w || 0; g21 < o15 + f14; g21 += 65535) {
      var cr5 = g21 + 65535;
      cr5 >= o15 && (l20[h24 / 8 | 0] = f14, cr5 = o15), h24 = en(l20, h24 + 1, n8.subarray(g21, cr5));
    }
    a8.i = o15;
  }
  return X12(s9, 0, e7 + zr2(h24) + i10);
};
var En2 = function() {
  for (var n8 = new Int32Array(256), r36 = 0; r36 < 256; ++r36) {
    for (var t4 = r36, e7 = 9; --e7; ) t4 = (t4 & 1 && -306674912) ^ t4 >>> 1;
    n8[r36] = t4;
  }
  return n8;
}();
var Ar3 = function() {
  var n8 = -1;
  return { p: function(r36) {
    for (var t4 = n8, e7 = 0; e7 < r36.length; ++e7) t4 = En2[t4 & 255 ^ r36[e7]] ^ t4 >>> 8;
    n8 = t4;
  }, d: function() {
    return ~n8;
  } };
};
var Yr2 = function() {
  var n8 = 1, r36 = 0;
  return { p: function(t4) {
    for (var e7 = n8, i10 = r36, a8 = t4.length | 0, o15 = 0; o15 != a8; ) {
      for (var s9 = Math.min(o15 + 2655, a8); o15 < s9; ++o15) i10 += e7 += t4[o15];
      e7 = (e7 & 65535) + 15 * (e7 >> 16), i10 = (i10 & 65535) + 15 * (i10 >> 16);
    }
    n8 = e7, r36 = i10;
  }, d: function() {
    return n8 %= 65521, r36 %= 65521, (n8 & 255) << 24 | (n8 & 65280) << 8 | (r36 & 255) << 8 | r36 >> 8;
  } };
};
var hr4 = function(n8, r36, t4, e7, i10) {
  if (!i10 && (i10 = { l: 1 }, r36.dictionary)) {
    var a8 = r36.dictionary.subarray(-32768), o15 = new S16(a8.length + n8.length);
    o15.set(a8), o15.set(n8, a8.length), n8 = o15, i10.w = a8.length;
  }
  return Bn2(n8, r36.level == null ? 6 : r36.level, r36.mem == null ? i10.l ? Math.ceil(Math.max(8, Math.min(13, Math.log(n8.length))) * 1.5) : 20 : 12 + r36.mem, t4, e7, i10);
};
var Er3 = function(n8, r36) {
  var t4 = {};
  for (var e7 in n8) t4[e7] = n8[e7];
  for (var e7 in r36) t4[e7] = r36[e7];
  return t4;
};
var pn2 = function(n8, r36, t4) {
  for (var e7 = n8(), i10 = n8.toString(), a8 = i10.slice(i10.indexOf("[") + 1, i10.lastIndexOf("]")).replace(/\s+/g, "").split(","), o15 = 0; o15 < e7.length; ++o15) {
    var s9 = e7[o15], l20 = a8[o15];
    if (typeof s9 == "function") {
      r36 += ";" + l20 + "=";
      var f14 = s9.toString();
      if (s9.prototype) if (f14.indexOf("[native code]") != -1) {
        var h24 = f14.indexOf(" ", 8) + 1;
        r36 += f14.slice(h24, f14.indexOf("(", h24));
      } else {
        r36 += f14;
        for (var u17 in s9.prototype) r36 += ";" + l20 + ".prototype." + u17 + "=" + s9.prototype[u17].toString();
      }
      else r36 += f14;
    } else t4[l20] = s9;
  }
  return r36;
};
var Lr2 = [];
var Vn2 = function(n8) {
  var r36 = [];
  for (var t4 in n8) n8[t4].buffer && r36.push((n8[t4] = new n8[t4].constructor(n8[t4])).buffer);
  return r36;
};
var Gn2 = function(n8, r36, t4, e7) {
  if (!Lr2[t4]) {
    for (var i10 = "", a8 = {}, o15 = n8.length - 1, s9 = 0; s9 < o15; ++s9) i10 = pn2(n8[s9], i10, a8);
    Lr2[t4] = { c: pn2(n8[o15], i10, a8), e: a8 };
  }
  var l20 = Er3({}, Lr2[t4].e);
  return Qn2(Lr2[t4].c + ";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=" + r36.toString() + "}", t4, l20, Vn2(l20), e7);
};
var Mr3 = function() {
  return [S16, W12, Zr2, mr4, xr4, Cr2, tn, Un2, Dn2, Cn2, Ir4, In2, V15, Pr3, Q16, $r3, zr2, X12, c8, Br, Gr, or4, an];
};
var Sr3 = function() {
  return [S16, W12, Zr2, mr4, xr4, Cr2, Nr4, Qr, Fn2, er4, Tn2, yr3, Ir4, Zn2, ir4, V15, rr, pr4, Hr, Rr2, Vr2, gr6, en, Xr3, zr2, X12, Bn2, hr4, jr2, or4];
};
var qn2 = function() {
  return [sn, $n2];
};
var Pn2 = function() {
  return [un];
};
var or4 = function(n8) {
  return postMessage(n8, [n8.buffer]);
};
var an = function(n8) {
  return n8 && { out: n8.size && new S16(n8.size), dictionary: n8.dictionary };
};
var d14 = function(n8) {
  return n8.ondata = function(r36, t4) {
    return postMessage([r36, t4], [r36.buffer]);
  }, function(r36) {
    r36.data.length ? (n8.push(r36.data[0], r36.data[1]), postMessage([r36.data[0].length])) : n8.flush();
  };
};
var Fr2 = function(n8, r36, t4, e7, i10, a8, o15) {
  var s9, l20 = Gn2(n8, e7, i10, function(f14, h24) {
    f14 ? (l20.terminate(), r36.ondata.call(r36, f14)) : Array.isArray(h24) ? h24.length == 1 ? (r36.queuedSize -= h24[0], r36.ondrain && r36.ondrain(h24[0])) : (h24[1] && l20.terminate(), r36.ondata.call(r36, f14, h24[0], h24[1])) : o15(h24);
  });
  l20.postMessage(t4), r36.queuedSize = 0, r36.push = function(f14, h24) {
    r36.ondata || c8(5), s9 && r36.ondata(c8(4, 0, 1), null, !!h24), r36.queuedSize += f14.length, l20.postMessage([f14, s9 = h24], [f14.buffer]);
  }, r36.terminate = function() {
    l20.terminate();
  }, a8 && (r36.flush = function() {
    l20.postMessage([]);
  });
};
var k16 = function(n8, r36) {
  return n8[r36] | n8[r36 + 1] << 8;
};
var $13 = function(n8, r36) {
  return (n8[r36] | n8[r36 + 1] << 8 | n8[r36 + 2] << 16 | n8[r36 + 3] << 24) >>> 0;
};
var Kr2 = function(n8, r36) {
  return $13(n8, r36) + $13(n8, r36 + 4) * 4294967296;
};
var C17 = function(n8, r36, t4) {
  for (; t4; ++r36) n8[r36] = t4, t4 >>>= 8;
};
var on = function(n8, r36) {
  var t4 = r36.filename;
  if (n8[0] = 31, n8[1] = 139, n8[2] = 8, n8[8] = r36.level < 2 ? 4 : r36.level == 9 ? 2 : 0, n8[9] = 3, r36.mtime != 0 && C17(n8, 4, Math.floor(new Date(r36.mtime || Date.now()) / 1e3)), t4) {
    n8[3] = 8;
    for (var e7 = 0; e7 <= t4.length; ++e7) n8[e7 + 10] = t4.charCodeAt(e7);
  }
};
var sn = function(n8) {
  (n8[0] != 31 || n8[1] != 139 || n8[2] != 8) && c8(6, "invalid gzip data");
  var r36 = n8[3], t4 = 10;
  r36 & 4 && (t4 += (n8[10] | n8[11] << 8) + 2);
  for (var e7 = (r36 >> 3 & 1) + (r36 >> 4 & 1); e7 > 0; e7 -= !n8[t4++]) ;
  return t4 + (r36 & 2);
};
var $n2 = function(n8) {
  var r36 = n8.length;
  return (n8[r36 - 4] | n8[r36 - 3] << 8 | n8[r36 - 2] << 16 | n8[r36 - 1] << 24) >>> 0;
};
var fn2 = function(n8) {
  return 10 + (n8.filename ? n8.filename.length + 1 : 0);
};
var hn2 = function(n8, r36) {
  var t4 = r36.level, e7 = t4 == 0 ? 0 : t4 < 6 ? 1 : t4 == 9 ? 3 : 2;
  if (n8[0] = 120, n8[1] = e7 << 6 | (r36.dictionary && 32), n8[1] |= 31 - (n8[0] << 8 | n8[1]) % 31, r36.dictionary) {
    var i10 = Yr2();
    i10.p(r36.dictionary), C17(n8, 2, i10.d());
  }
};
var un = function(n8, r36) {
  return ((n8[0] & 15) != 8 || n8[0] >> 4 > 7 || (n8[0] << 8 | n8[1]) % 31) && c8(6, "invalid zlib data"), (n8[1] >> 5 & 1) == +!r36 && c8(6, "invalid zlib data: " + (n8[1] & 32 ? "need" : "unexpected") + " dictionary"), (n8[1] >> 3 & 4) + 2;
};
function ur4(n8, r36) {
  return typeof n8 == "function" && (r36 = n8, n8 = {}), this.ondata = r36, n8;
}
var b16 = function() {
  function n8(r36, t4) {
    if (typeof r36 == "function" && (t4 = r36, r36 = {}), this.ondata = t4, this.o = r36 || {}, this.s = { l: 0, i: 32768, w: 32768, z: 32768 }, this.b = new S16(98304), this.o.dictionary) {
      var e7 = this.o.dictionary.subarray(-32768);
      this.b.set(e7, 32768 - e7.length), this.s.i = 32768 - e7.length;
    }
  }
  return n8.prototype.p = function(r36, t4) {
    this.ondata(hr4(r36, this.o, 0, 0, this.s), t4);
  }, n8.prototype.push = function(r36, t4) {
    this.ondata || c8(5), this.s.l && c8(4);
    var e7 = r36.length + this.s.z;
    if (e7 > this.b.length) {
      if (e7 > 2 * this.b.length - 32768) {
        var i10 = new S16(e7 & -32768);
        i10.set(this.b.subarray(0, this.s.z)), this.b = i10;
      }
      var a8 = this.b.length - this.s.z;
      this.b.set(r36.subarray(0, a8), this.s.z), this.s.z = this.b.length, this.p(this.b, false), this.b.set(this.b.subarray(-32768)), this.b.set(r36.subarray(a8), 32768), this.s.z = r36.length - a8 + 32768, this.s.i = 32766, this.s.w = 32768;
    } else this.b.set(r36, this.s.z), this.s.z += r36.length;
    this.s.l = t4 & 1, (this.s.z > this.s.w + 8191 || t4) && (this.p(this.b, t4 || false), this.s.w = this.s.i, this.s.i -= 2);
  }, n8.prototype.flush = function() {
    this.ondata || c8(5), this.s.l && c8(4), this.p(this.b, false), this.s.w = this.s.i, this.s.i -= 2;
  }, n8;
}();
var Xn2 = /* @__PURE__ */ function() {
  function n8(r36, t4) {
    Fr2([Sr3, function() {
      return [d14, b16];
    }], this, ur4.call(this, r36, t4), function(e7) {
      var i10 = new b16(e7.data);
      onmessage = d14(i10);
    }, 6, 1);
  }
  return n8;
}();
function jr2(n8, r36) {
  return hr4(n8, r36 || {}, 0, 0);
}
var K15 = function() {
  function n8(r36, t4) {
    typeof r36 == "function" && (t4 = r36, r36 = {}), this.ondata = t4;
    var e7 = r36 && r36.dictionary && r36.dictionary.subarray(-32768);
    this.s = { i: 0, b: e7 ? e7.length : 0 }, this.o = new S16(32768), this.p = new S16(0), e7 && this.o.set(e7);
  }
  return n8.prototype.e = function(r36) {
    if (this.ondata || c8(5), this.d && c8(4), !this.p.length) this.p = r36;
    else if (r36.length) {
      var t4 = new S16(this.p.length + r36.length);
      t4.set(this.p), t4.set(r36, this.p.length), this.p = t4;
    }
  }, n8.prototype.c = function(r36) {
    this.s.i = +(this.d = r36 || false);
    var t4 = this.s.b, e7 = Br(this.p, this.s, this.o);
    this.ondata(X12(e7, t4, this.s.b), this.d), this.o = X12(e7, this.s.b - 32768), this.s.b = this.o.length, this.p = X12(this.p, this.s.p / 8 | 0), this.s.p &= 7;
  }, n8.prototype.push = function(r36, t4) {
    this.e(r36), this.c(t4);
  }, n8;
}();
var Hn2 = /* @__PURE__ */ function() {
  function n8(r36, t4) {
    Fr2([Mr3, function() {
      return [d14, K15];
    }], this, ur4.call(this, r36, t4), function(e7) {
      var i10 = new K15(e7.data);
      onmessage = d14(i10);
    }, 7, 0);
  }
  return n8;
}();
function Gr(n8, r36) {
  return Br(n8, { i: 2 }, r36 && r36.out, r36 && r36.dictionary);
}
var gn2 = function() {
  function n8(r36, t4) {
    this.c = Ar3(), this.l = 0, this.v = 1, b16.call(this, r36, t4);
  }
  return n8.prototype.push = function(r36, t4) {
    this.c.p(r36), this.l += r36.length, b16.prototype.push.call(this, r36, t4);
  }, n8.prototype.p = function(r36, t4) {
    var e7 = hr4(r36, this.o, this.v && fn2(this.o), t4 && 8, this.s);
    this.v && (on(e7, this.o), this.v = 0), t4 && (C17(e7, e7.length - 8, this.c.d()), C17(e7, e7.length - 4, this.l)), this.ondata(e7, t4);
  }, n8.prototype.flush = function() {
    b16.prototype.flush.call(this);
  }, n8;
}();
var dr4 = function() {
  function n8(r36, t4) {
    this.v = 1, this.r = 0, K15.call(this, r36, t4);
  }
  return n8.prototype.push = function(r36, t4) {
    if (K15.prototype.e.call(this, r36), this.r += r36.length, this.v) {
      var e7 = this.p.subarray(this.v - 1), i10 = e7.length > 3 ? sn(e7) : 4;
      if (i10 > e7.length) {
        if (!t4) return;
      } else this.v > 1 && this.onmember && this.onmember(this.r - e7.length);
      this.p = e7.subarray(i10), this.v = 0;
    }
    K15.prototype.c.call(this, t4), this.s.f && !this.s.l && !t4 && (this.v = zr2(this.s.p) + 9, this.s = { i: 0 }, this.o = new S16(0), this.push(new S16(0), t4));
  }, n8;
}();
var bn2 = /* @__PURE__ */ function() {
  function n8(r36, t4) {
    var e7 = this;
    Fr2([Mr3, qn2, function() {
      return [d14, K15, dr4];
    }], this, ur4.call(this, r36, t4), function(i10) {
      var a8 = new dr4(i10.data);
      a8.onmember = function(o15) {
        return postMessage(o15);
      }, onmessage = d14(a8);
    }, 9, 0, function(i10) {
      return e7.onmember && e7.onmember(i10);
    });
  }
  return n8;
}();
function br4(n8, r36) {
  var t4 = sn(n8);
  return t4 + 8 > n8.length && c8(6, "invalid gzip data"), Br(n8.subarray(t4, -8), { i: 2 }, r36 && r36.out || new S16($n2(n8)), r36 && r36.dictionary);
}
var wn2 = function() {
  function n8(r36, t4) {
    this.c = Yr2(), this.v = 1, b16.call(this, r36, t4);
  }
  return n8.prototype.push = function(r36, t4) {
    this.c.p(r36), b16.prototype.push.call(this, r36, t4);
  }, n8.prototype.p = function(r36, t4) {
    var e7 = hr4(r36, this.o, this.v && (this.o.dictionary ? 6 : 2), t4 && 4, this.s);
    this.v && (hn2(e7, this.o), this.v = 0), t4 && C17(e7, e7.length - 4, this.c.d()), this.ondata(e7, t4);
  }, n8.prototype.flush = function() {
    b16.prototype.flush.call(this);
  }, n8;
}();
var _r4 = function() {
  function n8(r36, t4) {
    K15.call(this, r36, t4), this.v = r36 && r36.dictionary ? 2 : 1;
  }
  return n8.prototype.push = function(r36, t4) {
    if (K15.prototype.e.call(this, r36), this.v) {
      if (this.p.length < 6 && !t4) return;
      this.p = this.p.subarray(un(this.p, this.v - 1)), this.v = 0;
    }
    t4 && (this.p.length < 4 && c8(6, "invalid zlib data"), this.p = this.p.subarray(0, -4)), K15.prototype.c.call(this, t4);
  }, n8;
}();
var rt5 = /* @__PURE__ */ function() {
  function n8(r36, t4) {
    Fr2([Mr3, Pn2, function() {
      return [d14, K15, _r4];
    }], this, ur4.call(this, r36, t4), function(e7) {
      var i10 = new _r4(e7.data);
      onmessage = d14(i10);
    }, 11, 0);
  }
  return n8;
}();
function rn(n8, r36) {
  return Br(n8.subarray(un(n8, r36 && r36.dictionary), -4), { i: 2 }, r36 && r36.out, r36 && r36.dictionary);
}
var xn2 = function() {
  function n8(r36, t4) {
    this.o = ur4.call(this, r36, t4) || {}, this.G = dr4, this.I = K15, this.Z = _r4;
  }
  return n8.prototype.i = function() {
    var r36 = this;
    this.s.ondata = function(t4, e7) {
      r36.ondata(t4, e7);
    };
  }, n8.prototype.push = function(r36, t4) {
    if (this.ondata || c8(5), this.s) this.s.push(r36, t4);
    else {
      if (this.p && this.p.length) {
        var e7 = new S16(this.p.length + r36.length);
        e7.set(this.p), e7.set(r36, this.p.length);
      } else this.p = r36;
      this.p.length > 2 && (this.s = this.p[0] == 31 && this.p[1] == 139 && this.p[2] == 8 ? new this.G(this.o) : (this.p[0] & 15) != 8 || this.p[0] >> 4 > 7 || (this.p[0] << 8 | this.p[1]) % 31 ? new this.I(this.o) : new this.Z(this.o), this.i(), this.s.push(this.p, t4), this.p = null);
    }
  }, n8;
}();
var ft5 = function() {
  function n8(r36, t4) {
    xn2.call(this, r36, t4), this.queuedSize = 0, this.G = bn2, this.I = Hn2, this.Z = rt5;
  }
  return n8.prototype.i = function() {
    var r36 = this;
    this.s.ondata = function(t4, e7, i10) {
      r36.ondata(t4, e7, i10);
    }, this.s.ondrain = function(t4) {
      r36.queuedSize -= t4, r36.ondrain && r36.ondrain(t4);
    };
  }, n8.prototype.push = function(r36, t4) {
    this.queuedSize += r36.length, xn2.prototype.push.call(this, r36, t4);
  }, n8;
}();
function ut5(n8, r36) {
  return n8[0] == 31 && n8[1] == 139 && n8[2] == 8 ? br4(n8, r36) : (n8[0] & 15) != 8 || n8[0] >> 4 > 7 || (n8[0] << 8 | n8[1]) % 31 ? Gr(n8, r36) : rn(n8, r36);
}
var zn2 = typeof TextEncoder < "u" && new TextEncoder();
var nn = typeof TextDecoder < "u" && new TextDecoder();
var Rn2 = 0;
try {
  nn.decode(ir4, { stream: true }), Rn2 = 1;
} catch {
}
var kn2 = function(n8) {
  for (var r36 = "", t4 = 0; ; ) {
    var e7 = n8[t4++], i10 = (e7 > 127) + (e7 > 223) + (e7 > 239);
    if (t4 + i10 > n8.length) return { s: r36, r: X12(n8, t4 - 1) };
    i10 ? i10 == 3 ? (e7 = ((e7 & 15) << 18 | (n8[t4++] & 63) << 12 | (n8[t4++] & 63) << 6 | n8[t4++] & 63) - 65536, r36 += String.fromCharCode(55296 | e7 >> 10, 56320 | e7 & 1023)) : i10 & 1 ? r36 += String.fromCharCode((e7 & 31) << 6 | n8[t4++] & 63) : r36 += String.fromCharCode((e7 & 15) << 12 | (n8[t4++] & 63) << 6 | n8[t4++] & 63) : r36 += String.fromCharCode(e7);
  }
};
var lt6 = function() {
  function n8(r36) {
    this.ondata = r36, Rn2 ? this.t = new TextDecoder() : this.p = ir4;
  }
  return n8.prototype.push = function(r36, t4) {
    if (this.ondata || c8(5), t4 = !!t4, this.t) {
      this.ondata(this.t.decode(r36, { stream: true }), t4), t4 && (this.t.decode().length && c8(8), this.t = null);
      return;
    }
    this.p || c8(4);
    var e7 = new S16(this.p.length + r36.length);
    e7.set(this.p), e7.set(r36, this.p.length);
    var i10 = kn2(e7), a8 = i10.s, o15 = i10.r;
    t4 ? (o15.length && c8(8), this.p = null) : this.p = o15, this.ondata(a8, t4);
  }, n8;
}();
var vt4 = function() {
  function n8(r36) {
    this.ondata = r36;
  }
  return n8.prototype.push = function(r36, t4) {
    this.ondata || c8(5), this.d && c8(4), this.ondata(fr4(r36), this.d = t4 || false);
  }, n8;
}();
function fr4(n8, r36) {
  if (r36) {
    for (var t4 = new S16(n8.length), e7 = 0; e7 < n8.length; ++e7) t4[e7] = n8.charCodeAt(e7);
    return t4;
  }
  if (zn2) return zn2.encode(n8);
  for (var i10 = n8.length, a8 = new S16(n8.length + (n8.length >> 1)), o15 = 0, s9 = function(h24) {
    a8[o15++] = h24;
  }, e7 = 0; e7 < i10; ++e7) {
    if (o15 + 5 > a8.length) {
      var l20 = new S16(o15 + 8 + (i10 - e7 << 1));
      l20.set(a8), a8 = l20;
    }
    var f14 = n8.charCodeAt(e7);
    f14 < 128 || r36 ? s9(f14) : f14 < 2048 ? (s9(192 | f14 >> 6), s9(128 | f14 & 63)) : f14 > 55295 && f14 < 57344 ? (f14 = 65536 + (f14 & 1047552) | n8.charCodeAt(++e7) & 1023, s9(240 | f14 >> 18), s9(128 | f14 >> 12 & 63), s9(128 | f14 >> 6 & 63), s9(128 | f14 & 63)) : (s9(224 | f14 >> 12), s9(128 | f14 >> 6 & 63), s9(128 | f14 & 63));
  }
  return X12(a8, 0, o15);
}
function Wn2(n8, r36) {
  if (r36) {
    for (var t4 = "", e7 = 0; e7 < n8.length; e7 += 16384) t4 += String.fromCharCode.apply(null, n8.subarray(e7, e7 + 16384));
    return t4;
  } else {
    if (nn) return nn.decode(n8);
    var i10 = kn2(n8), a8 = i10.s, t4 = i10.r;
    return t4.length && c8(8), a8;
  }
}
var Yn2 = function(n8) {
  return n8 == 1 ? 3 : n8 < 6 ? 2 : n8 == 9 ? 1 : 0;
};
var Kn2 = function(n8, r36) {
  for (; k16(n8, r36) != 1; r36 += 4 + k16(n8, r36 + 2)) ;
  return [Kr2(n8, r36 + 12), Kr2(n8, r36 + 4), Kr2(n8, r36 + 20)];
};
var ar4 = function(n8) {
  var r36 = 0;
  if (n8) for (var t4 in n8) {
    var e7 = n8[t4].length;
    e7 > 65535 && c8(9), r36 += e7 + 4;
  }
  return r36;
};
var wr = function(n8, r36, t4, e7, i10, a8, o15, s9) {
  var l20 = e7.length, f14 = t4.extra, h24 = s9 && s9.length, u17 = ar4(f14);
  C17(n8, r36, o15 != null ? 33639248 : 67324752), r36 += 4, o15 != null && (n8[r36++] = 20, n8[r36++] = t4.os), n8[r36] = 20, r36 += 2, n8[r36++] = t4.flag << 1 | (a8 < 0 && 8), n8[r36++] = i10 && 8, n8[r36++] = t4.compression & 255, n8[r36++] = t4.compression >> 8;
  var v16 = new Date(t4.mtime == null ? Date.now() : t4.mtime), M24 = v16.getFullYear() - 1980;
  if ((M24 < 0 || M24 > 119) && c8(10), C17(n8, r36, M24 << 25 | v16.getMonth() + 1 << 21 | v16.getDate() << 16 | v16.getHours() << 11 | v16.getMinutes() << 5 | v16.getSeconds() >> 1), r36 += 4, a8 != -1 && (C17(n8, r36, t4.crc), C17(n8, r36 + 4, a8 < 0 ? -a8 - 2 : a8), C17(n8, r36 + 8, t4.size)), C17(n8, r36 + 12, l20), C17(n8, r36 + 14, u17), r36 += 16, o15 != null && (C17(n8, r36, h24), C17(n8, r36 + 6, t4.attrs), C17(n8, r36 + 10, o15), r36 += 14), n8.set(e7, r36), r36 += l20, u17) for (var m20 in f14) {
    var z20 = f14[m20], p15 = z20.length;
    C17(n8, r36, +m20), C17(n8, r36 + 2, p15), n8.set(z20, r36 + 4), r36 += 4 + p15;
  }
  return h24 && (n8.set(s9, r36), r36 += h24), r36;
};
var vn2 = function(n8, r36, t4, e7, i10) {
  C17(n8, r36, 101010256), C17(n8, r36 + 8, t4), C17(n8, r36 + 10, t4), C17(n8, r36 + 12, e7), C17(n8, r36 + 16, i10);
};
var kr4 = function() {
  function n8(r36) {
    this.filename = r36, this.c = Ar3(), this.size = 0, this.compression = 0;
  }
  return n8.prototype.process = function(r36, t4) {
    this.ondata(null, r36, t4);
  }, n8.prototype.push = function(r36, t4) {
    this.ondata || c8(5), this.c.p(r36), this.size += r36.length, t4 && (this.crc = this.c.d()), this.process(r36, t4 || false);
  }, n8;
}();
var ct6 = function() {
  function n8(r36, t4) {
    var e7 = this;
    t4 || (t4 = {}), kr4.call(this, r36), this.d = new b16(t4, function(i10, a8) {
      e7.ondata(null, i10, a8);
    }), this.compression = 8, this.flag = Yn2(t4.level);
  }
  return n8.prototype.process = function(r36, t4) {
    try {
      this.d.push(r36, t4);
    } catch (e7) {
      this.ondata(e7, null, t4);
    }
  }, n8.prototype.push = function(r36, t4) {
    kr4.prototype.push.call(this, r36, t4);
  }, n8;
}();
var pt5 = function() {
  function n8(r36, t4) {
    var e7 = this;
    t4 || (t4 = {}), kr4.call(this, r36), this.d = new Xn2(t4, function(i10, a8, o15) {
      e7.ondata(i10, a8, o15);
    }), this.compression = 8, this.flag = Yn2(t4.level), this.terminate = this.d.terminate;
  }
  return n8.prototype.process = function(r36, t4) {
    this.d.push(r36, t4);
  }, n8.prototype.push = function(r36, t4) {
    kr4.prototype.push.call(this, r36, t4);
  }, n8;
}();
var gt4 = function() {
  function n8(r36) {
    this.ondata = r36, this.u = [], this.d = 1;
  }
  return n8.prototype.add = function(r36) {
    var t4 = this;
    if (this.ondata || c8(5), this.d & 2) this.ondata(c8(4 + (this.d & 1) * 8, 0, 1), null, false);
    else {
      var e7 = fr4(r36.filename), i10 = e7.length, a8 = r36.comment, o15 = a8 && fr4(a8), s9 = i10 != r36.filename.length || o15 && a8.length != o15.length, l20 = i10 + ar4(r36.extra) + 30;
      i10 > 65535 && this.ondata(c8(11, 0, 1), null, false);
      var f14 = new S16(l20);
      wr(f14, 0, r36, e7, s9, -1);
      var h24 = [f14], u17 = function() {
        for (var p15 = 0, x24 = h24; p15 < x24.length; p15++) {
          var U23 = x24[p15];
          t4.ondata(null, U23, false);
        }
        h24 = [];
      }, v16 = this.d;
      this.d = 0;
      var M24 = this.u.length, m20 = Er3(r36, { f: e7, u: s9, o: o15, t: function() {
        r36.terminate && r36.terminate();
      }, r: function() {
        if (u17(), v16) {
          var p15 = t4.u[M24 + 1];
          p15 ? p15.r() : t4.d = 1;
        }
        v16 = 1;
      } }), z20 = 0;
      r36.ondata = function(p15, x24, U23) {
        if (p15) t4.ondata(p15, x24, U23), t4.terminate();
        else if (z20 += x24.length, h24.push(x24), U23) {
          var A25 = new S16(16);
          C17(A25, 0, 134695760), C17(A25, 4, r36.crc), C17(A25, 8, z20), C17(A25, 12, r36.size), h24.push(A25), m20.c = z20, m20.b = l20 + z20 + 16, m20.crc = r36.crc, m20.size = r36.size, v16 && m20.r(), v16 = 1;
        } else v16 && u17();
      }, this.u.push(m20);
    }
  }, n8.prototype.end = function() {
    var r36 = this;
    if (this.d & 2) {
      this.ondata(c8(4 + (this.d & 1) * 8, 0, 1), null, true);
      return;
    }
    this.d ? this.e() : this.u.push({ r: function() {
      r36.d & 1 && (r36.u.splice(-1, 1), r36.e());
    }, t: function() {
    } }), this.d = 3;
  }, n8.prototype.e = function() {
    for (var r36 = 0, t4 = 0, e7 = 0, i10 = 0, a8 = this.u; i10 < a8.length; i10++) {
      var o15 = a8[i10];
      e7 += 46 + o15.f.length + ar4(o15.extra) + (o15.o ? o15.o.length : 0);
    }
    for (var s9 = new S16(e7 + 22), l20 = 0, f14 = this.u; l20 < f14.length; l20++) {
      var o15 = f14[l20];
      wr(s9, r36, o15, o15.f, o15.u, -o15.c - 2, t4, o15.o), r36 += 46 + o15.f.length + ar4(o15.extra) + (o15.o ? o15.o.length : 0), t4 += o15.b;
    }
    vn2(s9, r36, this.u.length, e7, t4), this.ondata(null, s9, true), this.d = 2;
  }, n8.prototype.terminate = function() {
    for (var r36 = 0, t4 = this.u; r36 < t4.length; r36++) {
      var e7 = t4[r36];
      e7.t();
    }
    this.d = 2;
  }, n8;
}();
var tt6 = function() {
  function n8() {
  }
  return n8.prototype.push = function(r36, t4) {
    this.ondata(null, r36, t4);
  }, n8.compression = 0, n8;
}();
var mt4 = function() {
  function n8() {
    var r36 = this;
    this.i = new K15(function(t4, e7) {
      r36.ondata(null, t4, e7);
    });
  }
  return n8.prototype.push = function(r36, t4) {
    try {
      this.i.push(r36, t4);
    } catch (e7) {
      this.ondata(e7, null, t4);
    }
  }, n8.compression = 8, n8;
}();
var xt4 = function() {
  function n8(r36, t4) {
    var e7 = this;
    t4 < 32e4 ? this.i = new K15(function(i10, a8) {
      e7.ondata(null, i10, a8);
    }) : (this.i = new Hn2(function(i10, a8, o15) {
      e7.ondata(i10, a8, o15);
    }), this.terminate = this.i.terminate);
  }
  return n8.prototype.push = function(r36, t4) {
    this.i.terminate && (r36 = X12(r36, 0)), this.i.push(r36, t4);
  }, n8.compression = 8, n8;
}();
var zt5 = function() {
  function n8(r36) {
    this.onfile = r36, this.k = [], this.o = { 0: tt6 }, this.p = ir4;
  }
  return n8.prototype.push = function(r36, t4) {
    var e7 = this;
    if (this.onfile || c8(5), this.p || c8(4), this.c > 0) {
      var i10 = Math.min(this.c, r36.length), a8 = r36.subarray(0, i10);
      if (this.c -= i10, this.d ? this.d.push(a8, !this.c) : this.k[0].push(a8), r36 = r36.subarray(i10), r36.length) return this.push(r36, t4);
    } else {
      var o15 = 0, s9 = 0, l20 = void 0, f14 = void 0;
      this.p.length ? r36.length ? (f14 = new S16(this.p.length + r36.length), f14.set(this.p), f14.set(r36, this.p.length)) : f14 = this.p : f14 = r36;
      for (var h24 = f14.length, u17 = this.c, v16 = u17 && this.d, M24 = function() {
        var x24, U23 = $13(f14, s9);
        if (U23 == 67324752) {
          o15 = 1, l20 = s9, m20.d = null, m20.c = 0;
          var A25 = k16(f14, s9 + 6), y18 = k16(f14, s9 + 8), Z17 = A25 & 2048, B23 = A25 & 8, D23 = k16(f14, s9 + 26), w21 = k16(f14, s9 + 28);
          if (h24 > s9 + 30 + D23 + w21) {
            var g21 = [];
            m20.k.unshift(g21), o15 = 2;
            var F24 = $13(f14, s9 + 18), T20 = $13(f14, s9 + 22), O20 = Wn2(f14.subarray(s9 + 30, s9 += 30 + D23), !Z17);
            F24 == 4294967295 ? (x24 = B23 ? [-2] : Kn2(f14, s9), F24 = x24[0], T20 = x24[1]) : B23 && (F24 = -1), s9 += w21, m20.c = F24;
            var H20, G19 = { name: O20, compression: y18, start: function() {
              if (G19.ondata || c8(5), !F24) G19.ondata(null, ir4, true);
              else {
                var L23 = e7.o[y18];
                L23 || G19.ondata(c8(14, "unknown compression type " + y18, 1), null, false), H20 = F24 < 0 ? new L23(O20) : new L23(O20, F24, T20), H20.ondata = function(N18, sr5, Y13) {
                  G19.ondata(N18, sr5, Y13);
                };
                for (var q22 = 0, E21 = g21; q22 < E21.length; q22++) {
                  var R15 = E21[q22];
                  H20.push(R15, false);
                }
                e7.k[0] == g21 && e7.c ? e7.d = H20 : H20.push(ir4, true);
              }
            }, terminate: function() {
              H20 && H20.terminate && H20.terminate();
            } };
            F24 >= 0 && (G19.size = F24, G19.originalSize = T20), m20.onfile(G19);
          }
          return "break";
        } else if (u17) {
          if (U23 == 134695760) return l20 = s9 += 12 + (u17 == -2 && 8), o15 = 3, m20.c = 0, "break";
          if (U23 == 33639248) return l20 = s9 -= 4, o15 = 3, m20.c = 0, "break";
        }
      }, m20 = this; s9 < h24 - 4; ++s9) {
        var z20 = M24();
        if (z20 === "break") break;
      }
      if (this.p = ir4, u17 < 0) {
        var p15 = o15 ? f14.subarray(0, l20 - 12 - (u17 == -2 && 8) - ($13(f14, l20 - 16) == 134695760 && 4)) : f14.subarray(0, s9);
        v16 ? v16.push(p15, !!o15) : this.k[+(o15 == 2)].push(p15);
      }
      if (o15 & 2) return this.push(f14.subarray(s9), t4);
      this.p = f14.subarray(s9);
    }
    t4 && (this.c && c8(13), this.p = null);
  }, n8.prototype.register = function(r36) {
    this.o[r36.compression] = r36;
  }, n8;
}();

// https://esm.sh/ieee754@1.2.1/denonext/ieee754.mjs
var B15 = Object.create;
var v8 = Object.defineProperty;
var k17 = Object.getOwnPropertyDescriptor;
var q15 = Object.getOwnPropertyNames;
var y11 = Object.getPrototypeOf;
var z13 = Object.prototype.hasOwnProperty;
var A18 = (t4, r36) => () => (r36 || t4((r36 = { exports: {} }).exports, r36), r36.exports);
var C18 = (t4, r36, p15, w21) => {
  if (r36 && typeof r36 == "object" || typeof r36 == "function") for (let i10 of q15(r36)) !z13.call(t4, i10) && i10 !== p15 && v8(t4, i10, { get: () => r36[i10], enumerable: !(w21 = k17(r36, i10)) || w21.enumerable });
  return t4;
};
var D16 = (t4, r36, p15) => (p15 = t4 != null ? B15(y11(t4)) : {}, C18(r36 || !t4 || !t4.__esModule ? v8(p15, "default", { value: t4, enumerable: true }) : p15, t4));
var I13 = A18((n8) => {
  n8.read = function(t4, r36, p15, w21, i10) {
    var M24, a8, s9 = i10 * 8 - w21 - 1, N18 = (1 << s9) - 1, c14 = N18 >> 1, o15 = -7, h24 = p15 ? i10 - 1 : 0, d24 = p15 ? -1 : 1, f14 = t4[r36 + h24];
    for (h24 += d24, M24 = f14 & (1 << -o15) - 1, f14 >>= -o15, o15 += s9; o15 > 0; M24 = M24 * 256 + t4[r36 + h24], h24 += d24, o15 -= 8) ;
    for (a8 = M24 & (1 << -o15) - 1, M24 >>= -o15, o15 += w21; o15 > 0; a8 = a8 * 256 + t4[r36 + h24], h24 += d24, o15 -= 8) ;
    if (M24 === 0) M24 = 1 - c14;
    else {
      if (M24 === N18) return a8 ? NaN : (f14 ? -1 : 1) * (1 / 0);
      a8 = a8 + Math.pow(2, w21), M24 = M24 - c14;
    }
    return (f14 ? -1 : 1) * a8 * Math.pow(2, M24 - w21);
  };
  n8.write = function(t4, r36, p15, w21, i10, M24) {
    var a8, s9, N18, c14 = M24 * 8 - i10 - 1, o15 = (1 << c14) - 1, h24 = o15 >> 1, d24 = i10 === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, f14 = w21 ? 0 : M24 - 1, j26 = w21 ? 1 : -1, g21 = r36 < 0 || r36 === 0 && 1 / r36 < 0 ? 1 : 0;
    for (r36 = Math.abs(r36), isNaN(r36) || r36 === 1 / 0 ? (s9 = isNaN(r36) ? 1 : 0, a8 = o15) : (a8 = Math.floor(Math.log(r36) / Math.LN2), r36 * (N18 = Math.pow(2, -a8)) < 1 && (a8--, N18 *= 2), a8 + h24 >= 1 ? r36 += d24 / N18 : r36 += d24 * Math.pow(2, 1 - h24), r36 * N18 >= 2 && (a8++, N18 /= 2), a8 + h24 >= o15 ? (s9 = 0, a8 = o15) : a8 + h24 >= 1 ? (s9 = (r36 * N18 - 1) * Math.pow(2, i10), a8 = a8 + h24) : (s9 = r36 * Math.pow(2, h24 - 1) * Math.pow(2, i10), a8 = 0)); i10 >= 8; t4[p15 + f14] = s9 & 255, f14 += j26, s9 /= 256, i10 -= 8) ;
    for (a8 = a8 << i10 | s9, c14 += i10; c14 > 0; t4[p15 + f14] = a8 & 255, f14 += j26, a8 /= 256, c14 -= 8) ;
    t4[p15 + f14 - j26] |= g21 * 128;
  };
});
var x16 = D16(I13());
var { read: H14, write: J15 } = x16;
var K16 = x16.default ?? x16;

// https://esm.sh/token-types@6.0.4/denonext/token-types.mjs
function n4(e7) {
  return new DataView(e7.buffer, e7.byteOffset);
}
var x17 = { len: 1, get(e7, t4) {
  return n4(e7).getUint8(t4);
}, put(e7, t4, r36) {
  return n4(e7).setUint8(t4, r36), t4 + 1;
} };
var U16 = { len: 2, get(e7, t4) {
  return n4(e7).getUint16(t4, true);
}, put(e7, t4, r36) {
  return n4(e7).setUint16(t4, r36, true), t4 + 2;
} };
var d15 = { len: 2, get(e7, t4) {
  return n4(e7).getUint16(t4);
}, put(e7, t4, r36) {
  return n4(e7).setUint16(t4, r36), t4 + 2;
} };
var I14 = { len: 4, get(e7, t4) {
  return n4(e7).getUint32(t4, true);
}, put(e7, t4, r36) {
  return n4(e7).setUint32(t4, r36, true), t4 + 4;
} };
var E15 = { len: 4, get(e7, t4) {
  return n4(e7).getUint32(t4);
}, put(e7, t4, r36) {
  return n4(e7).setUint32(t4, r36), t4 + 4;
} };
var F17 = { len: 4, get(e7, t4) {
  return n4(e7).getInt32(t4);
}, put(e7, t4, r36) {
  return n4(e7).setInt32(t4, r36), t4 + 4;
} };
var L14 = { len: 8, get(e7, t4) {
  return n4(e7).getBigUint64(t4, true);
}, put(e7, t4, r36) {
  return n4(e7).setBigUint64(t4, r36, true), t4 + 8;
} };
var o8 = class e4 {
  constructor(t4, r36) {
    if (this.len = t4, r36 && r36.toLowerCase() === "windows-1252") this.decoder = e4.decodeWindows1252;
    else {
      let u17 = new TextDecoder(r36);
      this.decoder = (s9) => u17.decode(s9);
    }
  }
  get(t4, r36 = 0) {
    let u17 = t4.subarray(r36, r36 + this.len);
    return this.decoder(u17);
  }
  static decodeWindows1252(t4) {
    let r36 = "";
    for (let u17 = 0; u17 < t4.length; u17++) {
      let s9 = t4[u17];
      r36 += s9 < 128 || s9 >= 160 ? String.fromCharCode(s9) : e4.win1252Map[s9 - 128];
    }
    return r36;
  }
};
o8.win1252Map = "€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ";

// https://esm.sh/@tokenizer/inflate@0.2.7/denonext/inflate.mjs
var d16 = { LocalFileHeader: 67324752, DataDescriptor: 134695760, CentralFileHeader: 33639248, EndOfCentralDirectory: 101010256 };
var m13 = { get(e7) {
  let i10 = U16.get(e7, 6);
  return { signature: I14.get(e7, 0), compressedSize: I14.get(e7, 8), uncompressedSize: I14.get(e7, 12) };
}, len: 16 };
var L15 = { get(e7) {
  let i10 = U16.get(e7, 6);
  return { signature: I14.get(e7, 0), minVersion: U16.get(e7, 4), dataDescriptor: !!(i10 & 8), compressedMethod: U16.get(e7, 8), compressedSize: I14.get(e7, 18), uncompressedSize: I14.get(e7, 22), filenameLength: U16.get(e7, 26), extraFieldLength: U16.get(e7, 28), filename: null };
}, len: 30 };
var D17 = { get(e7) {
  return { signature: I14.get(e7, 0), nrOfThisDisk: U16.get(e7, 4), nrOfThisDiskWithTheStart: U16.get(e7, 6), nrOfEntriesOnThisDisk: U16.get(e7, 8), nrOfEntriesOfSize: U16.get(e7, 10), sizeOfCd: I14.get(e7, 12), offsetOfStartOfCd: I14.get(e7, 16), zipFileCommentLength: U16.get(e7, 20) };
}, len: 22 };
var x18 = { get(e7) {
  let i10 = U16.get(e7, 8);
  return { signature: I14.get(e7, 0), minVersion: U16.get(e7, 6), dataDescriptor: !!(i10 & 8), compressedMethod: U16.get(e7, 10), compressedSize: I14.get(e7, 20), uncompressedSize: I14.get(e7, 24), filenameLength: U16.get(e7, 28), extraFieldLength: U16.get(e7, 30), fileCommentLength: U16.get(e7, 32), relativeOffsetOfLocalHeader: I14.get(e7, 42), filename: null };
}, len: 46 };
function C19(e7) {
  let i10 = new Uint8Array(I14.len);
  return I14.put(i10, 0, e7), i10;
}
var c9 = we3("tokenizer:inflate");
var k18 = 256 * 1024;
var y12 = C19(d16.DataDescriptor);
var h15 = C19(d16.EndOfCentralDirectory);
var S17 = class {
  constructor(i10) {
    this.tokenizer = i10, this.syncBuffer = new Uint8Array(k18);
  }
  async isZip() {
    return await this.peekSignature() === d16.LocalFileHeader;
  }
  peekSignature() {
    return this.tokenizer.peekToken(I14);
  }
  async findEndOfCentralDirectoryLocator() {
    let i10 = this.tokenizer, r36 = Math.min(16 * 1024, i10.fileInfo.size), n8 = this.syncBuffer.subarray(0, r36);
    await this.tokenizer.readBuffer(n8, { position: i10.fileInfo.size - r36 });
    for (let t4 = n8.length - 4; t4 >= 0; t4--) if (n8[t4] === h15[0] && n8[t4 + 1] === h15[1] && n8[t4 + 2] === h15[2] && n8[t4 + 3] === h15[3]) return i10.fileInfo.size - r36 + t4;
    return -1;
  }
  async readCentralDirectory() {
    if (!this.tokenizer.supportsRandomAccess()) {
      c9("Cannot reading central-directory without random-read support");
      return;
    }
    c9("Reading central-directory...");
    let i10 = this.tokenizer.position, r36 = await this.findEndOfCentralDirectoryLocator();
    if (r36 > 0) {
      c9("Central-directory 32-bit signature found");
      let n8 = await this.tokenizer.readToken(D17, r36), t4 = [];
      this.tokenizer.setPosition(n8.offsetOfStartOfCd);
      for (let o15 = 0; o15 < n8.nrOfEntriesOfSize; ++o15) {
        let s9 = await this.tokenizer.readToken(x18);
        if (s9.signature !== d16.CentralFileHeader) throw new Error("Expected Central-File-Header signature");
        s9.filename = await this.tokenizer.readToken(new o8(s9.filenameLength, "utf-8")), await this.tokenizer.ignore(s9.extraFieldLength), await this.tokenizer.ignore(s9.fileCommentLength), t4.push(s9), c9(`Add central-directory file-entry: n=${o15 + 1}/${t4.length}: filename=${t4[o15].filename}`);
      }
      return this.tokenizer.setPosition(i10), t4;
    }
    this.tokenizer.setPosition(i10);
  }
  async unzip(i10) {
    let r36 = await this.readCentralDirectory();
    if (r36) return this.iterateOverCentralDirectory(r36, i10);
    let n8 = false;
    do {
      let t4 = await this.readLocalFileHeader();
      if (!t4) break;
      let o15 = i10(t4);
      n8 = !!o15.stop;
      let s9;
      if (await this.tokenizer.ignore(t4.extraFieldLength), t4.dataDescriptor && t4.compressedSize === 0) {
        let p15 = [], l20 = k18;
        c9("Compressed-file-size unknown, scanning for next data-descriptor-signature....");
        let g21 = -1;
        for (; g21 < 0 && l20 === k18; ) {
          l20 = await this.tokenizer.peekBuffer(this.syncBuffer, { mayBeLess: true }), g21 = E16(this.syncBuffer.subarray(0, l20), y12);
          let z20 = g21 >= 0 ? g21 : l20;
          if (o15.handler) {
            let w21 = new Uint8Array(z20);
            await this.tokenizer.readBuffer(w21), p15.push(w21);
          } else await this.tokenizer.ignore(z20);
        }
        c9(`Found data-descriptor-signature at pos=${this.tokenizer.position}`), o15.handler && await this.inflate(t4, H15(p15), o15.handler);
      } else o15.handler ? (c9(`Reading compressed-file-data: ${t4.compressedSize} bytes`), s9 = new Uint8Array(t4.compressedSize), await this.tokenizer.readBuffer(s9), await this.inflate(t4, s9, o15.handler)) : (c9(`Ignoring compressed-file-data: ${t4.compressedSize} bytes`), await this.tokenizer.ignore(t4.compressedSize));
      if (c9(`Reading data-descriptor at pos=${this.tokenizer.position}`), t4.dataDescriptor && (await this.tokenizer.readToken(m13)).signature !== 134695760) throw new Error(`Expected data-descriptor-signature at position ${this.tokenizer.position - m13.len}`);
    } while (!n8);
  }
  async iterateOverCentralDirectory(i10, r36) {
    for (let n8 of i10) {
      let t4 = r36(n8);
      if (t4.handler) {
        this.tokenizer.setPosition(n8.relativeOffsetOfLocalHeader);
        let o15 = await this.readLocalFileHeader();
        if (o15) {
          await this.tokenizer.ignore(o15.extraFieldLength);
          let s9 = new Uint8Array(n8.compressedSize);
          await this.tokenizer.readBuffer(s9), await this.inflate(o15, s9, t4.handler);
        }
      }
      if (t4.stop) break;
    }
  }
  inflate(i10, r36, n8) {
    if (i10.compressedMethod === 0) return n8(r36);
    c9(`Decompress filename=${i10.filename}, compressed-size=${r36.length}`);
    let t4 = ut5(r36);
    return n8(t4);
  }
  async readLocalFileHeader() {
    let i10 = await this.tokenizer.peekToken(I14);
    if (i10 === d16.LocalFileHeader) {
      let r36 = await this.tokenizer.readToken(L15);
      return r36.filename = await this.tokenizer.readToken(new o8(r36.filenameLength, "utf-8")), r36;
    }
    if (i10 === d16.CentralFileHeader) return false;
    throw i10 === 3759263696 ? new Error("Encrypted ZIP") : new Error("Unexpected signature");
  }
};
function E16(e7, i10) {
  let r36 = e7.length, n8 = i10.length;
  if (n8 > r36) return -1;
  for (let t4 = 0; t4 <= r36 - n8; t4++) {
    let o15 = true;
    for (let s9 = 0; s9 < n8; s9++) if (e7[t4 + s9] !== i10[s9]) {
      o15 = false;
      break;
    }
    if (o15) return t4;
  }
  return -1;
}
function H15(e7) {
  let i10 = e7.reduce((t4, o15) => t4 + o15.length, 0), r36 = new Uint8Array(i10), n8 = 0;
  for (let t4 of e7) r36.set(t4, n8), n8 += t4.length;
  return r36;
}

// https://esm.sh/strtok3@10.3.4/denonext/lib/stream/Errors.mjs
var o9 = "End-Of-Stream";
var e5 = class extends Error {
  constructor() {
    super(o9), this.name = "EndOfStreamError";
  }
};
var r35 = class extends Error {
  constructor(t4 = "The operation was aborted") {
    super(t4), this.name = "AbortError";
  }
};

// https://esm.sh/strtok3@10.3.4/denonext/lib/stream/AbstractStreamReader.mjs
var i8 = class {
  constructor() {
    this.endOfStream = false, this.interrupted = false, this.peekQueue = [];
  }
  async peek(t4, r36 = false) {
    let e7 = await this.read(t4, r36);
    return this.peekQueue.push(t4.subarray(0, e7)), e7;
  }
  async read(t4, r36 = false) {
    if (t4.length === 0) return 0;
    let e7 = this.readFromPeekBuffer(t4);
    if (this.endOfStream || (e7 += await this.readRemainderFromStream(t4.subarray(e7), r36)), e7 === 0 && !r36) throw new e5();
    return e7;
  }
  readFromPeekBuffer(t4) {
    let r36 = t4.length, e7 = 0;
    for (; this.peekQueue.length > 0 && r36 > 0; ) {
      let a8 = this.peekQueue.pop();
      if (!a8) throw new Error("peekData should be defined");
      let n8 = Math.min(a8.length, r36);
      t4.set(a8.subarray(0, n8), e7), e7 += n8, r36 -= n8, n8 < a8.length && this.peekQueue.push(a8.subarray(n8));
    }
    return e7;
  }
  async readRemainderFromStream(t4, r36) {
    let e7 = 0;
    for (; e7 < t4.length && !this.endOfStream; ) {
      if (this.interrupted) throw new r35();
      let a8 = await this.readFromStream(t4.subarray(e7), r36);
      if (a8 === 0) break;
      e7 += a8;
    }
    if (!r36 && e7 < t4.length) throw new e5();
    return e7;
  }
};

// https://esm.sh/strtok3@10.3.4/denonext/lib/stream/index.mjs
var d17 = class extends i8 {
  constructor(e7) {
    super(), this.reader = e7;
  }
  async abort() {
    return this.close();
  }
  async close() {
    this.reader.releaseLock();
  }
};
var o10 = class extends d17 {
  async readFromStream(e7, t4) {
    if (e7.length === 0) return 0;
    let r36 = await this.reader.read(new Uint8Array(e7.length), { min: t4 ? void 0 : e7.length });
    return r36.done && (this.endOfStream = r36.done), r36.value ? (e7.set(r36.value), r36.value.length) : 0;
  }
};
var n5 = class extends i8 {
  constructor(e7) {
    super(), this.reader = e7, this.buffer = null;
  }
  writeChunk(e7, t4) {
    let r36 = Math.min(t4.length, e7.length);
    return e7.set(t4.subarray(0, r36)), r36 < t4.length ? this.buffer = t4.subarray(r36) : this.buffer = null, r36;
  }
  async readFromStream(e7, t4) {
    if (e7.length === 0) return 0;
    let r36 = 0;
    for (this.buffer && (r36 += this.writeChunk(e7, this.buffer)); r36 < e7.length && !this.endOfStream; ) {
      let a8 = await this.reader.read();
      if (a8.done) {
        this.endOfStream = true;
        break;
      }
      a8.value && (r36 += this.writeChunk(e7.subarray(r36), a8.value));
    }
    if (!t4 && r36 === 0 && this.endOfStream) throw new e5();
    return r36;
  }
  abort() {
    return this.interrupted = true, this.reader.cancel();
  }
  async close() {
    await this.abort(), this.reader.releaseLock();
  }
};
function p11(s9) {
  try {
    let e7 = s9.getReader({ mode: "byob" });
    return e7 instanceof ReadableStreamDefaultReader ? new n5(e7) : new o10(e7);
  } catch (e7) {
    if (e7 instanceof TypeError) return new n5(s9.getReader());
    throw e7;
  }
}

// https://esm.sh/strtok3@10.3.4/denonext/core.mjs
var o11 = class {
  constructor(e7) {
    this.numBuffer = new Uint8Array(8), this.position = 0, this.onClose = e7?.onClose, e7?.abortSignal && e7.abortSignal.addEventListener("abort", () => {
      this.abort();
    });
  }
  async readToken(e7, t4 = this.position) {
    let r36 = new Uint8Array(e7.len);
    if (await this.readBuffer(r36, { position: t4 }) < e7.len) throw new e5();
    return e7.get(r36, 0);
  }
  async peekToken(e7, t4 = this.position) {
    let r36 = new Uint8Array(e7.len);
    if (await this.peekBuffer(r36, { position: t4 }) < e7.len) throw new e5();
    return e7.get(r36, 0);
  }
  async readNumber(e7) {
    if (await this.readBuffer(this.numBuffer, { length: e7.len }) < e7.len) throw new e5();
    return e7.get(this.numBuffer, 0);
  }
  async peekNumber(e7) {
    if (await this.peekBuffer(this.numBuffer, { length: e7.len }) < e7.len) throw new e5();
    return e7.get(this.numBuffer, 0);
  }
  async ignore(e7) {
    if (this.fileInfo.size !== void 0) {
      let t4 = this.fileInfo.size - this.position;
      if (e7 > t4) return this.position += t4, t4;
    }
    return this.position += e7, e7;
  }
  async close() {
    await this.abort(), await this.onClose?.();
  }
  normalizeOptions(e7, t4) {
    if (!this.supportsRandomAccess() && t4 && t4.position !== void 0 && t4.position < this.position) throw new Error("`options.position` must be equal or greater than `tokenizer.position`");
    return { mayBeLess: false, offset: 0, length: e7.length, position: this.position, ...t4 };
  }
  abort() {
    return Promise.resolve();
  }
};
var p12 = 256e3;
var f8 = class extends o11 {
  constructor(e7, t4) {
    super(t4), this.streamReader = e7, this.fileInfo = t4?.fileInfo ?? {};
  }
  async readBuffer(e7, t4) {
    let r36 = this.normalizeOptions(e7, t4), s9 = r36.position - this.position;
    if (s9 > 0) return await this.ignore(s9), this.readBuffer(e7, t4);
    if (s9 < 0) throw new Error("`options.position` must be equal or greater than `tokenizer.position`");
    if (r36.length === 0) return 0;
    let n8 = await this.streamReader.read(e7.subarray(0, r36.length), r36.mayBeLess);
    if (this.position += n8, (!t4 || !t4.mayBeLess) && n8 < r36.length) throw new e5();
    return n8;
  }
  async peekBuffer(e7, t4) {
    let r36 = this.normalizeOptions(e7, t4), s9 = 0;
    if (r36.position) {
      let n8 = r36.position - this.position;
      if (n8 > 0) {
        let a8 = new Uint8Array(r36.length + n8);
        return s9 = await this.peekBuffer(a8, { mayBeLess: r36.mayBeLess }), e7.set(a8.subarray(n8)), s9 - n8;
      }
      if (n8 < 0) throw new Error("Cannot peek from a negative offset in a stream");
    }
    if (r36.length > 0) {
      try {
        s9 = await this.streamReader.peek(e7.subarray(0, r36.length), r36.mayBeLess);
      } catch (n8) {
        if (t4?.mayBeLess && n8 instanceof e5) return 0;
        throw n8;
      }
      if (!r36.mayBeLess && s9 < r36.length) throw new e5();
    }
    return s9;
  }
  async ignore(e7) {
    let t4 = Math.min(p12, e7), r36 = new Uint8Array(t4), s9 = 0;
    for (; s9 < e7; ) {
      let n8 = e7 - s9, a8 = await this.readBuffer(r36, { length: Math.min(t4, n8) });
      if (a8 < 0) return a8;
      s9 += a8;
    }
    return s9;
  }
  abort() {
    return this.streamReader.abort();
  }
  async close() {
    return this.streamReader.close();
  }
  supportsRandomAccess() {
    return false;
  }
};
var h17 = class extends o11 {
  constructor(e7, t4) {
    super(t4), this.uint8Array = e7, this.fileInfo = { ...t4?.fileInfo ?? {}, size: e7.length };
  }
  async readBuffer(e7, t4) {
    t4?.position && (this.position = t4.position);
    let r36 = await this.peekBuffer(e7, t4);
    return this.position += r36, r36;
  }
  async peekBuffer(e7, t4) {
    let r36 = this.normalizeOptions(e7, t4), s9 = Math.min(this.uint8Array.length - r36.position, r36.length);
    if (!r36.mayBeLess && s9 < r36.length) throw new e5();
    return e7.set(this.uint8Array.subarray(r36.position, r36.position + s9)), s9;
  }
  close() {
    return super.close();
  }
  supportsRandomAccess() {
    return true;
  }
  setPosition(e7) {
    this.position = e7;
  }
};
function M18(i10, e7) {
  let t4 = p11(i10), r36 = e7 ?? {}, s9 = r36.onClose;
  return r36.onClose = async () => {
    if (await t4.close(), s9) return s9();
  }, new f8(t4, r36);
}
function v9(i10, e7) {
  return new h17(i10, e7);
}

// https://esm.sh/uint8array-extras@1.4.0/denonext/uint8array-extras.mjs
var l13 = { utf8: new globalThis.TextDecoder("utf8") };
var b17 = new globalThis.TextEncoder();
var S18 = Array.from({ length: 256 }, (t4, r36) => r36.toString(16).padStart(2, "0"));
function P17(t4) {
  let { byteLength: r36 } = t4;
  if (r36 === 6) return t4.getUint16(0) * 2 ** 32 + t4.getUint32(2);
  if (r36 === 5) return t4.getUint8(0) * 2 ** 32 + t4.getUint32(1);
  if (r36 === 4) return t4.getUint32(0);
  if (r36 === 3) return t4.getUint8(0) * 2 ** 16 + t4.getUint16(1);
  if (r36 === 2) return t4.getUint16(0);
  if (r36 === 1) return t4.getUint8(0);
}

// https://esm.sh/file-type@21.0.0/denonext/file-type.mjs
function k19(i10) {
  return [...i10].map((e7) => e7.charCodeAt(0));
}
function v10(i10, e7 = 0) {
  let t4 = Number.parseInt(new o8(6).get(i10, 148).replace(/\0.*$/, "").trim(), 8);
  if (Number.isNaN(t4)) return false;
  let a8 = 8 * 32;
  for (let n8 = e7; n8 < e7 + 148; n8++) a8 += i10[n8];
  for (let n8 = e7 + 156; n8 < e7 + 512; n8++) a8 += i10[n8];
  return t4 === a8;
}
var w16 = { get: (i10, e7) => i10[e7 + 3] & 127 | i10[e7 + 2] << 7 | i10[e7 + 1] << 14 | i10[e7] << 21, len: 4 };
var b18 = ["jpg", "png", "apng", "gif", "webp", "flif", "xcf", "cr2", "cr3", "orf", "arw", "dng", "nef", "rw2", "raf", "tif", "bmp", "icns", "jxr", "psd", "indd", "zip", "tar", "rar", "gz", "bz2", "7z", "dmg", "mp4", "mid", "mkv", "webm", "mov", "avi", "mpg", "mp2", "mp3", "m4a", "oga", "ogg", "ogv", "opus", "flac", "wav", "spx", "amr", "pdf", "epub", "elf", "macho", "exe", "swf", "rtf", "wasm", "woff", "woff2", "eot", "ttf", "otf", "ttc", "ico", "flv", "ps", "xz", "sqlite", "nes", "crx", "xpi", "cab", "deb", "ar", "rpm", "Z", "lz", "cfb", "mxf", "mts", "blend", "bpg", "docx", "pptx", "xlsx", "3gp", "3g2", "j2c", "jp2", "jpm", "jpx", "mj2", "aif", "qcp", "odt", "ods", "odp", "xml", "mobi", "heic", "cur", "ktx", "ape", "wv", "dcm", "ics", "glb", "pcap", "dsf", "lnk", "alias", "voc", "ac3", "m4v", "m4p", "m4b", "f4v", "f4p", "f4b", "f4a", "mie", "asf", "ogm", "ogx", "mpc", "arrow", "shp", "aac", "mp1", "it", "s3m", "xm", "skp", "avif", "eps", "lzh", "pgp", "asar", "stl", "chm", "3mf", "zst", "jxl", "vcf", "jls", "pst", "dwg", "parquet", "class", "arj", "cpio", "ace", "avro", "icc", "fbx", "vsdx", "vtt", "apk", "drc", "lz4", "potx", "xltx", "dotx", "xltm", "ott", "ots", "otp", "odg", "otg", "xlsm", "docm", "dotm", "potm", "pptm", "jar", "rm", "ppsm", "ppsx"];
var S19 = ["image/jpeg", "image/png", "image/gif", "image/webp", "image/flif", "image/x-xcf", "image/x-canon-cr2", "image/x-canon-cr3", "image/tiff", "image/bmp", "image/vnd.ms-photo", "image/vnd.adobe.photoshop", "application/x-indesign", "application/epub+zip", "application/x-xpinstall", "application/vnd.ms-powerpoint.slideshow.macroenabled.12", "application/vnd.oasis.opendocument.text", "application/vnd.oasis.opendocument.spreadsheet", "application/vnd.oasis.opendocument.presentation", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.openxmlformats-officedocument.presentationml.slideshow", "application/zip", "application/x-tar", "application/x-rar-compressed", "application/gzip", "application/x-bzip2", "application/x-7z-compressed", "application/x-apple-diskimage", "application/vnd.apache.arrow.file", "video/mp4", "audio/midi", "video/matroska", "video/webm", "video/quicktime", "video/vnd.avi", "audio/wav", "audio/qcelp", "audio/x-ms-asf", "video/x-ms-asf", "application/vnd.ms-asf", "video/mpeg", "video/3gpp", "audio/mpeg", "audio/mp4", "video/ogg", "audio/ogg", "audio/ogg; codecs=opus", "application/ogg", "audio/flac", "audio/ape", "audio/wavpack", "audio/amr", "application/pdf", "application/x-elf", "application/x-mach-binary", "application/x-msdownload", "application/x-shockwave-flash", "application/rtf", "application/wasm", "font/woff", "font/woff2", "application/vnd.ms-fontobject", "font/ttf", "font/otf", "font/collection", "image/x-icon", "video/x-flv", "application/postscript", "application/eps", "application/x-xz", "application/x-sqlite3", "application/x-nintendo-nes-rom", "application/x-google-chrome-extension", "application/vnd.ms-cab-compressed", "application/x-deb", "application/x-unix-archive", "application/x-rpm", "application/x-compress", "application/x-lzip", "application/x-cfb", "application/x-mie", "application/mxf", "video/mp2t", "application/x-blender", "image/bpg", "image/j2c", "image/jp2", "image/jpx", "image/jpm", "image/mj2", "audio/aiff", "application/xml", "application/x-mobipocket-ebook", "image/heif", "image/heif-sequence", "image/heic", "image/heic-sequence", "image/icns", "image/ktx", "application/dicom", "audio/x-musepack", "text/calendar", "text/vcard", "text/vtt", "model/gltf-binary", "application/vnd.tcpdump.pcap", "audio/x-dsf", "application/x.ms.shortcut", "application/x.apple.alias", "audio/x-voc", "audio/vnd.dolby.dd-raw", "audio/x-m4a", "image/apng", "image/x-olympus-orf", "image/x-sony-arw", "image/x-adobe-dng", "image/x-nikon-nef", "image/x-panasonic-rw2", "image/x-fujifilm-raf", "video/x-m4v", "video/3gpp2", "application/x-esri-shape", "audio/aac", "audio/x-it", "audio/x-s3m", "audio/x-xm", "video/MP1S", "video/MP2P", "application/vnd.sketchup.skp", "image/avif", "application/x-lzh-compressed", "application/pgp-encrypted", "application/x-asar", "model/stl", "application/vnd.ms-htmlhelp", "model/3mf", "image/jxl", "application/zstd", "image/jls", "application/vnd.ms-outlook", "image/vnd.dwg", "application/vnd.apache.parquet", "application/java-vm", "application/x-arj", "application/x-cpio", "application/x-ace-compressed", "application/avro", "application/vnd.iccprofile", "application/x.autodesk.fbx", "application/vnd.visio", "application/vnd.android.package-archive", "application/vnd.google.draco", "application/x-lz4", "application/vnd.openxmlformats-officedocument.presentationml.template", "application/vnd.openxmlformats-officedocument.spreadsheetml.template", "application/vnd.openxmlformats-officedocument.wordprocessingml.template", "application/vnd.ms-excel.template.macroenabled.12", "application/vnd.oasis.opendocument.text-template", "application/vnd.oasis.opendocument.spreadsheet-template", "application/vnd.oasis.opendocument.presentation-template", "application/vnd.oasis.opendocument.graphics", "application/vnd.oasis.opendocument.graphics-template", "application/vnd.ms-excel.sheet.macroenabled.12", "application/vnd.ms-word.document.macroenabled.12", "application/vnd.ms-word.template.macroenabled.12", "application/vnd.ms-powerpoint.template.macroenabled.12", "application/vnd.ms-powerpoint.presentation.macroenabled.12", "application/java-archive", "application/vnd.rn-realmedia"];
var u13 = 4100;
async function N13(i10, e7) {
  return new h18(e7).fromBuffer(i10);
}
function g13(i10) {
  switch (i10 = i10.toLowerCase(), i10) {
    case "application/epub+zip":
      return { ext: "epub", mime: i10 };
    case "application/vnd.oasis.opendocument.text":
      return { ext: "odt", mime: i10 };
    case "application/vnd.oasis.opendocument.text-template":
      return { ext: "ott", mime: i10 };
    case "application/vnd.oasis.opendocument.spreadsheet":
      return { ext: "ods", mime: i10 };
    case "application/vnd.oasis.opendocument.spreadsheet-template":
      return { ext: "ots", mime: i10 };
    case "application/vnd.oasis.opendocument.presentation":
      return { ext: "odp", mime: i10 };
    case "application/vnd.oasis.opendocument.presentation-template":
      return { ext: "otp", mime: i10 };
    case "application/vnd.oasis.opendocument.graphics":
      return { ext: "odg", mime: i10 };
    case "application/vnd.oasis.opendocument.graphics-template":
      return { ext: "otg", mime: i10 };
    case "application/vnd.openxmlformats-officedocument.presentationml.slideshow":
      return { ext: "ppsx", mime: i10 };
    case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
      return { ext: "xlsx", mime: i10 };
    case "application/vnd.ms-excel.sheet.macroenabled":
      return { ext: "xlsm", mime: "application/vnd.ms-excel.sheet.macroenabled.12" };
    case "application/vnd.openxmlformats-officedocument.spreadsheetml.template":
      return { ext: "xltx", mime: i10 };
    case "application/vnd.ms-excel.template.macroenabled":
      return { ext: "xltm", mime: "application/vnd.ms-excel.template.macroenabled.12" };
    case "application/vnd.ms-powerpoint.slideshow.macroenabled":
      return { ext: "ppsm", mime: "application/vnd.ms-powerpoint.slideshow.macroenabled.12" };
    case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      return { ext: "docx", mime: i10 };
    case "application/vnd.ms-word.document.macroenabled":
      return { ext: "docm", mime: "application/vnd.ms-word.document.macroenabled.12" };
    case "application/vnd.openxmlformats-officedocument.wordprocessingml.template":
      return { ext: "dotx", mime: i10 };
    case "application/vnd.ms-word.template.macroenabledtemplate":
      return { ext: "dotm", mime: "application/vnd.ms-word.template.macroenabled.12" };
    case "application/vnd.openxmlformats-officedocument.presentationml.template":
      return { ext: "potx", mime: i10 };
    case "application/vnd.ms-powerpoint.template.macroenabled":
      return { ext: "potm", mime: "application/vnd.ms-powerpoint.template.macroenabled.12" };
    case "application/vnd.openxmlformats-officedocument.presentationml.presentation":
      return { ext: "pptx", mime: i10 };
    case "application/vnd.ms-powerpoint.presentation.macroenabled":
      return { ext: "pptm", mime: "application/vnd.ms-powerpoint.presentation.macroenabled.12" };
    case "application/vnd.ms-visio.drawing":
      return { ext: "vsdx", mime: "application/vnd.visio" };
    case "application/vnd.ms-package.3dmanufacturing-3dmodel+xml":
      return { ext: "3mf", mime: "model/3mf" };
    default:
  }
}
function s6(i10, e7, t4) {
  t4 = { offset: 0, ...t4 };
  for (let [a8, n8] of e7.entries()) if (t4.mask) {
    if (n8 !== (t4.mask[a8] & i10[a8 + t4.offset])) return false;
  } else if (n8 !== i10[a8 + t4.offset]) return false;
  return true;
}
var h18 = class {
  constructor(e7) {
    this.options = { mpegOffsetTolerance: 0, ...e7 }, this.detectors = [...e7?.customDetectors ?? [], { id: "core", detect: this.detectConfident }, { id: "core.imprecise", detect: this.detectImprecise }], this.tokenizerOptions = { abortSignal: e7?.signal };
  }
  async fromTokenizer(e7) {
    let t4 = e7.position;
    for (let a8 of this.detectors) {
      let n8 = await a8.detect(e7);
      if (n8) return n8;
      if (t4 !== e7.position) return;
    }
  }
  async fromBuffer(e7) {
    if (!(e7 instanceof Uint8Array || e7 instanceof ArrayBuffer)) throw new TypeError(`Expected the \`input\` argument to be of type \`Uint8Array\` or \`ArrayBuffer\`, got \`${typeof e7}\``);
    let t4 = e7 instanceof Uint8Array ? e7 : new Uint8Array(e7);
    if (t4?.length > 1) return this.fromTokenizer(v9(t4, this.tokenizerOptions));
  }
  async fromBlob(e7) {
    return this.fromStream(e7.stream());
  }
  async fromStream(e7) {
    let t4 = await M18(e7, this.tokenizerOptions);
    try {
      return await this.fromTokenizer(t4);
    } finally {
      await t4.close();
    }
  }
  async toDetectionStream(e7, t4) {
    let { sampleSize: a8 = u13 } = t4, n8, r36, p15 = e7.getReader({ mode: "byob" });
    try {
      let { value: o15, done: f14 } = await p15.read(new Uint8Array(a8));
      if (r36 = o15, !f14 && o15) try {
        n8 = await this.fromBuffer(o15.subarray(0, a8));
      } catch (d24) {
        if (!(d24 instanceof e5)) throw d24;
        n8 = void 0;
      }
      r36 = o15;
    } finally {
      p15.releaseLock();
    }
    let m20 = new TransformStream({ async start(o15) {
      o15.enqueue(r36);
    }, transform(o15, f14) {
      f14.enqueue(o15);
    } }), x24 = e7.pipeThrough(m20);
    return x24.fileType = n8, x24;
  }
  check(e7, t4) {
    return s6(this.buffer, e7, t4);
  }
  checkString(e7, t4) {
    return this.check(k19(e7), t4);
  }
  detectConfident = async (e7) => {
    if (this.buffer = new Uint8Array(u13), e7.fileInfo.size === void 0 && (e7.fileInfo.size = Number.MAX_SAFE_INTEGER), this.tokenizer = e7, await e7.peekBuffer(this.buffer, { length: 12, mayBeLess: true }), this.check([66, 77])) return { ext: "bmp", mime: "image/bmp" };
    if (this.check([11, 119])) return { ext: "ac3", mime: "audio/vnd.dolby.dd-raw" };
    if (this.check([120, 1])) return { ext: "dmg", mime: "application/x-apple-diskimage" };
    if (this.check([77, 90])) return { ext: "exe", mime: "application/x-msdownload" };
    if (this.check([37, 33])) return await e7.peekBuffer(this.buffer, { length: 24, mayBeLess: true }), this.checkString("PS-Adobe-", { offset: 2 }) && this.checkString(" EPSF-", { offset: 14 }) ? { ext: "eps", mime: "application/eps" } : { ext: "ps", mime: "application/postscript" };
    if (this.check([31, 160]) || this.check([31, 157])) return { ext: "Z", mime: "application/x-compress" };
    if (this.check([199, 113])) return { ext: "cpio", mime: "application/x-cpio" };
    if (this.check([96, 234])) return { ext: "arj", mime: "application/x-arj" };
    if (this.check([239, 187, 191])) return this.tokenizer.ignore(3), this.detectConfident(e7);
    if (this.check([71, 73, 70])) return { ext: "gif", mime: "image/gif" };
    if (this.check([73, 73, 188])) return { ext: "jxr", mime: "image/vnd.ms-photo" };
    if (this.check([31, 139, 8])) return { ext: "gz", mime: "application/gzip" };
    if (this.check([66, 90, 104])) return { ext: "bz2", mime: "application/x-bzip2" };
    if (this.checkString("ID3")) {
      await e7.ignore(6);
      let t4 = await e7.readToken(w16);
      return e7.position + t4 > e7.fileInfo.size ? { ext: "mp3", mime: "audio/mpeg" } : (await e7.ignore(t4), this.fromTokenizer(e7));
    }
    if (this.checkString("MP+")) return { ext: "mpc", mime: "audio/x-musepack" };
    if ((this.buffer[0] === 67 || this.buffer[0] === 70) && this.check([87, 83], { offset: 1 })) return { ext: "swf", mime: "application/x-shockwave-flash" };
    if (this.check([255, 216, 255])) return this.check([247], { offset: 3 }) ? { ext: "jls", mime: "image/jls" } : { ext: "jpg", mime: "image/jpeg" };
    if (this.check([79, 98, 106, 1])) return { ext: "avro", mime: "application/avro" };
    if (this.checkString("FLIF")) return { ext: "flif", mime: "image/flif" };
    if (this.checkString("8BPS")) return { ext: "psd", mime: "image/vnd.adobe.photoshop" };
    if (this.checkString("MPCK")) return { ext: "mpc", mime: "audio/x-musepack" };
    if (this.checkString("FORM")) return { ext: "aif", mime: "audio/aiff" };
    if (this.checkString("icns", { offset: 0 })) return { ext: "icns", mime: "image/icns" };
    if (this.check([80, 75, 3, 4])) {
      let t4;
      return await new S17(e7).unzip((a8) => {
        switch (a8.filename) {
          case "META-INF/mozilla.rsa":
            return t4 = { ext: "xpi", mime: "application/x-xpinstall" }, { stop: true };
          case "META-INF/MANIFEST.MF":
            return t4 = { ext: "jar", mime: "application/java-archive" }, { stop: true };
          case "mimetype":
            return { async handler(n8) {
              let r36 = new TextDecoder("utf-8").decode(n8).trim();
              t4 = g13(r36);
            }, stop: true };
          case "[Content_Types].xml":
            return { async handler(n8) {
              let r36 = new TextDecoder("utf-8").decode(n8), p15 = r36.indexOf('.main+xml"');
              if (p15 === -1) {
                let m20 = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml";
                r36.includes(`ContentType="${m20}"`) && (t4 = g13(m20));
              } else {
                r36 = r36.slice(0, Math.max(0, p15));
                let m20 = r36.lastIndexOf('"'), x24 = r36.slice(Math.max(0, m20 + 1));
                t4 = g13(x24);
              }
            }, stop: true };
          default:
            return /classes\d*\.dex/.test(a8.filename) ? (t4 = { ext: "apk", mime: "application/vnd.android.package-archive" }, { stop: true }) : {};
        }
      }), t4 ?? { ext: "zip", mime: "application/zip" };
    }
    if (this.checkString("OggS")) {
      await e7.ignore(28);
      let t4 = new Uint8Array(8);
      return await e7.readBuffer(t4), s6(t4, [79, 112, 117, 115, 72, 101, 97, 100]) ? { ext: "opus", mime: "audio/ogg; codecs=opus" } : s6(t4, [128, 116, 104, 101, 111, 114, 97]) ? { ext: "ogv", mime: "video/ogg" } : s6(t4, [1, 118, 105, 100, 101, 111, 0]) ? { ext: "ogm", mime: "video/ogg" } : s6(t4, [127, 70, 76, 65, 67]) ? { ext: "oga", mime: "audio/ogg" } : s6(t4, [83, 112, 101, 101, 120, 32, 32]) ? { ext: "spx", mime: "audio/ogg" } : s6(t4, [1, 118, 111, 114, 98, 105, 115]) ? { ext: "ogg", mime: "audio/ogg" } : { ext: "ogx", mime: "application/ogg" };
    }
    if (this.check([80, 75]) && (this.buffer[2] === 3 || this.buffer[2] === 5 || this.buffer[2] === 7) && (this.buffer[3] === 4 || this.buffer[3] === 6 || this.buffer[3] === 8)) return { ext: "zip", mime: "application/zip" };
    if (this.checkString("MThd")) return { ext: "mid", mime: "audio/midi" };
    if (this.checkString("wOFF") && (this.check([0, 1, 0, 0], { offset: 4 }) || this.checkString("OTTO", { offset: 4 }))) return { ext: "woff", mime: "font/woff" };
    if (this.checkString("wOF2") && (this.check([0, 1, 0, 0], { offset: 4 }) || this.checkString("OTTO", { offset: 4 }))) return { ext: "woff2", mime: "font/woff2" };
    if (this.check([212, 195, 178, 161]) || this.check([161, 178, 195, 212])) return { ext: "pcap", mime: "application/vnd.tcpdump.pcap" };
    if (this.checkString("DSD ")) return { ext: "dsf", mime: "audio/x-dsf" };
    if (this.checkString("LZIP")) return { ext: "lz", mime: "application/x-lzip" };
    if (this.checkString("fLaC")) return { ext: "flac", mime: "audio/flac" };
    if (this.check([66, 80, 71, 251])) return { ext: "bpg", mime: "image/bpg" };
    if (this.checkString("wvpk")) return { ext: "wv", mime: "audio/wavpack" };
    if (this.checkString("%PDF")) return { ext: "pdf", mime: "application/pdf" };
    if (this.check([0, 97, 115, 109])) return { ext: "wasm", mime: "application/wasm" };
    if (this.check([73, 73])) {
      let t4 = await this.readTiffHeader(false);
      if (t4) return t4;
    }
    if (this.check([77, 77])) {
      let t4 = await this.readTiffHeader(true);
      if (t4) return t4;
    }
    if (this.checkString("MAC ")) return { ext: "ape", mime: "audio/ape" };
    if (this.check([26, 69, 223, 163])) {
      async function t4() {
        let m20 = await e7.peekNumber(x17), x24 = 128, o15 = 0;
        for (; (m20 & x24) === 0 && x24 !== 0; ) ++o15, x24 >>= 1;
        let f14 = new Uint8Array(o15 + 1);
        return await e7.readBuffer(f14), f14;
      }
      async function a8() {
        let m20 = await t4(), x24 = await t4();
        x24[0] ^= 128 >> x24.length - 1;
        let o15 = Math.min(6, x24.length), f14 = new DataView(m20.buffer), d24 = new DataView(x24.buffer, x24.length - o15, o15);
        return { id: P17(f14), len: P17(d24) };
      }
      async function n8(m20) {
        for (; m20 > 0; ) {
          let x24 = await a8();
          if (x24.id === 17026) return (await e7.readToken(new o8(x24.len))).replaceAll(/\00.*$/g, "");
          await e7.ignore(x24.len), --m20;
        }
      }
      let r36 = await a8();
      switch (await n8(r36.len)) {
        case "webm":
          return { ext: "webm", mime: "video/webm" };
        case "matroska":
          return { ext: "mkv", mime: "video/matroska" };
        default:
          return;
      }
    }
    if (this.checkString("SQLi")) return { ext: "sqlite", mime: "application/x-sqlite3" };
    if (this.check([78, 69, 83, 26])) return { ext: "nes", mime: "application/x-nintendo-nes-rom" };
    if (this.checkString("Cr24")) return { ext: "crx", mime: "application/x-google-chrome-extension" };
    if (this.checkString("MSCF") || this.checkString("ISc(")) return { ext: "cab", mime: "application/vnd.ms-cab-compressed" };
    if (this.check([237, 171, 238, 219])) return { ext: "rpm", mime: "application/x-rpm" };
    if (this.check([197, 208, 211, 198])) return { ext: "eps", mime: "application/eps" };
    if (this.check([40, 181, 47, 253])) return { ext: "zst", mime: "application/zstd" };
    if (this.check([127, 69, 76, 70])) return { ext: "elf", mime: "application/x-elf" };
    if (this.check([33, 66, 68, 78])) return { ext: "pst", mime: "application/vnd.ms-outlook" };
    if (this.checkString("PAR1") || this.checkString("PARE")) return { ext: "parquet", mime: "application/vnd.apache.parquet" };
    if (this.checkString("ttcf")) return { ext: "ttc", mime: "font/collection" };
    if (this.check([207, 250, 237, 254])) return { ext: "macho", mime: "application/x-mach-binary" };
    if (this.check([4, 34, 77, 24])) return { ext: "lz4", mime: "application/x-lz4" };
    if (this.check([79, 84, 84, 79, 0])) return { ext: "otf", mime: "font/otf" };
    if (this.checkString("#!AMR")) return { ext: "amr", mime: "audio/amr" };
    if (this.checkString("{\\rtf")) return { ext: "rtf", mime: "application/rtf" };
    if (this.check([70, 76, 86, 1])) return { ext: "flv", mime: "video/x-flv" };
    if (this.checkString("IMPM")) return { ext: "it", mime: "audio/x-it" };
    if (this.checkString("-lh0-", { offset: 2 }) || this.checkString("-lh1-", { offset: 2 }) || this.checkString("-lh2-", { offset: 2 }) || this.checkString("-lh3-", { offset: 2 }) || this.checkString("-lh4-", { offset: 2 }) || this.checkString("-lh5-", { offset: 2 }) || this.checkString("-lh6-", { offset: 2 }) || this.checkString("-lh7-", { offset: 2 }) || this.checkString("-lzs-", { offset: 2 }) || this.checkString("-lz4-", { offset: 2 }) || this.checkString("-lz5-", { offset: 2 }) || this.checkString("-lhd-", { offset: 2 })) return { ext: "lzh", mime: "application/x-lzh-compressed" };
    if (this.check([0, 0, 1, 186])) {
      if (this.check([33], { offset: 4, mask: [241] })) return { ext: "mpg", mime: "video/MP1S" };
      if (this.check([68], { offset: 4, mask: [196] })) return { ext: "mpg", mime: "video/MP2P" };
    }
    if (this.checkString("ITSF")) return { ext: "chm", mime: "application/vnd.ms-htmlhelp" };
    if (this.check([202, 254, 186, 190])) return { ext: "class", mime: "application/java-vm" };
    if (this.checkString(".RMF")) return { ext: "rm", mime: "application/vnd.rn-realmedia" };
    if (this.checkString("DRACO")) return { ext: "drc", mime: "application/vnd.google.draco" };
    if (this.check([253, 55, 122, 88, 90, 0])) return { ext: "xz", mime: "application/x-xz" };
    if (this.checkString("<?xml ")) return { ext: "xml", mime: "application/xml" };
    if (this.check([55, 122, 188, 175, 39, 28])) return { ext: "7z", mime: "application/x-7z-compressed" };
    if (this.check([82, 97, 114, 33, 26, 7]) && (this.buffer[6] === 0 || this.buffer[6] === 1)) return { ext: "rar", mime: "application/x-rar-compressed" };
    if (this.checkString("solid ")) return { ext: "stl", mime: "model/stl" };
    if (this.checkString("AC")) {
      let t4 = new o8(4, "latin1").get(this.buffer, 2);
      if (t4.match("^d*") && t4 >= 1e3 && t4 <= 1050) return { ext: "dwg", mime: "image/vnd.dwg" };
    }
    if (this.checkString("070707")) return { ext: "cpio", mime: "application/x-cpio" };
    if (this.checkString("BLENDER")) return { ext: "blend", mime: "application/x-blender" };
    if (this.checkString("!<arch>")) return await e7.ignore(8), await e7.readToken(new o8(13, "ascii")) === "debian-binary" ? { ext: "deb", mime: "application/x-deb" } : { ext: "ar", mime: "application/x-unix-archive" };
    if (this.checkString("WEBVTT") && [`
`, "\r", "	", " ", "\0"].some((t4) => this.checkString(t4, { offset: 6 }))) return { ext: "vtt", mime: "text/vtt" };
    if (this.check([137, 80, 78, 71, 13, 10, 26, 10])) {
      await e7.ignore(8);
      async function t4() {
        return { length: await e7.readToken(F17), type: await e7.readToken(new o8(4, "latin1")) };
      }
      do {
        let a8 = await t4();
        if (a8.length < 0) return;
        switch (a8.type) {
          case "IDAT":
            return { ext: "png", mime: "image/png" };
          case "acTL":
            return { ext: "apng", mime: "image/apng" };
          default:
            await e7.ignore(a8.length + 4);
        }
      } while (e7.position + 8 < e7.fileInfo.size);
      return { ext: "png", mime: "image/png" };
    }
    if (this.check([65, 82, 82, 79, 87, 49, 0, 0])) return { ext: "arrow", mime: "application/vnd.apache.arrow.file" };
    if (this.check([103, 108, 84, 70, 2, 0, 0, 0])) return { ext: "glb", mime: "model/gltf-binary" };
    if (this.check([102, 114, 101, 101], { offset: 4 }) || this.check([109, 100, 97, 116], { offset: 4 }) || this.check([109, 111, 111, 118], { offset: 4 }) || this.check([119, 105, 100, 101], { offset: 4 })) return { ext: "mov", mime: "video/quicktime" };
    if (this.check([73, 73, 82, 79, 8, 0, 0, 0, 24])) return { ext: "orf", mime: "image/x-olympus-orf" };
    if (this.checkString("gimp xcf ")) return { ext: "xcf", mime: "image/x-xcf" };
    if (this.checkString("ftyp", { offset: 4 }) && (this.buffer[8] & 96) !== 0) {
      let t4 = new o8(4, "latin1").get(this.buffer, 8).replace("\0", " ").trim();
      switch (t4) {
        case "avif":
        case "avis":
          return { ext: "avif", mime: "image/avif" };
        case "mif1":
          return { ext: "heic", mime: "image/heif" };
        case "msf1":
          return { ext: "heic", mime: "image/heif-sequence" };
        case "heic":
        case "heix":
          return { ext: "heic", mime: "image/heic" };
        case "hevc":
        case "hevx":
          return { ext: "heic", mime: "image/heic-sequence" };
        case "qt":
          return { ext: "mov", mime: "video/quicktime" };
        case "M4V":
        case "M4VH":
        case "M4VP":
          return { ext: "m4v", mime: "video/x-m4v" };
        case "M4P":
          return { ext: "m4p", mime: "video/mp4" };
        case "M4B":
          return { ext: "m4b", mime: "audio/mp4" };
        case "M4A":
          return { ext: "m4a", mime: "audio/x-m4a" };
        case "F4V":
          return { ext: "f4v", mime: "video/mp4" };
        case "F4P":
          return { ext: "f4p", mime: "video/mp4" };
        case "F4A":
          return { ext: "f4a", mime: "audio/mp4" };
        case "F4B":
          return { ext: "f4b", mime: "audio/mp4" };
        case "crx":
          return { ext: "cr3", mime: "image/x-canon-cr3" };
        default:
          return t4.startsWith("3g") ? t4.startsWith("3g2") ? { ext: "3g2", mime: "video/3gpp2" } : { ext: "3gp", mime: "video/3gpp" } : { ext: "mp4", mime: "video/mp4" };
      }
    }
    if (this.check([82, 73, 70, 70])) {
      if (this.checkString("WEBP", { offset: 8 })) return { ext: "webp", mime: "image/webp" };
      if (this.check([65, 86, 73], { offset: 8 })) return { ext: "avi", mime: "video/vnd.avi" };
      if (this.check([87, 65, 86, 69], { offset: 8 })) return { ext: "wav", mime: "audio/wav" };
      if (this.check([81, 76, 67, 77], { offset: 8 })) return { ext: "qcp", mime: "audio/qcelp" };
    }
    if (this.check([73, 73, 85, 0, 24, 0, 0, 0, 136, 231, 116, 216])) return { ext: "rw2", mime: "image/x-panasonic-rw2" };
    if (this.check([48, 38, 178, 117, 142, 102, 207, 17, 166, 217])) {
      async function t4() {
        let a8 = new Uint8Array(16);
        return await e7.readBuffer(a8), { id: a8, size: Number(await e7.readToken(L14)) };
      }
      for (await e7.ignore(30); e7.position + 24 < e7.fileInfo.size; ) {
        let a8 = await t4(), n8 = a8.size - 24;
        if (s6(a8.id, [145, 7, 220, 183, 183, 169, 207, 17, 142, 230, 0, 192, 12, 32, 83, 101])) {
          let r36 = new Uint8Array(16);
          if (n8 -= await e7.readBuffer(r36), s6(r36, [64, 158, 105, 248, 77, 91, 207, 17, 168, 253, 0, 128, 95, 92, 68, 43])) return { ext: "asf", mime: "audio/x-ms-asf" };
          if (s6(r36, [192, 239, 25, 188, 77, 91, 207, 17, 168, 253, 0, 128, 95, 92, 68, 43])) return { ext: "asf", mime: "video/x-ms-asf" };
          break;
        }
        await e7.ignore(n8);
      }
      return { ext: "asf", mime: "application/vnd.ms-asf" };
    }
    if (this.check([171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10])) return { ext: "ktx", mime: "image/ktx" };
    if ((this.check([126, 16, 4]) || this.check([126, 24, 4])) && this.check([48, 77, 73, 69], { offset: 4 })) return { ext: "mie", mime: "application/x-mie" };
    if (this.check([39, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], { offset: 2 })) return { ext: "shp", mime: "application/x-esri-shape" };
    if (this.check([255, 79, 255, 81])) return { ext: "j2c", mime: "image/j2c" };
    if (this.check([0, 0, 0, 12, 106, 80, 32, 32, 13, 10, 135, 10])) switch (await e7.ignore(20), await e7.readToken(new o8(4, "ascii"))) {
      case "jp2 ":
        return { ext: "jp2", mime: "image/jp2" };
      case "jpx ":
        return { ext: "jpx", mime: "image/jpx" };
      case "jpm ":
        return { ext: "jpm", mime: "image/jpm" };
      case "mjp2":
        return { ext: "mj2", mime: "image/mj2" };
      default:
        return;
    }
    if (this.check([255, 10]) || this.check([0, 0, 0, 12, 74, 88, 76, 32, 13, 10, 135, 10])) return { ext: "jxl", mime: "image/jxl" };
    if (this.check([254, 255])) return this.check([0, 60, 0, 63, 0, 120, 0, 109, 0, 108], { offset: 2 }) ? { ext: "xml", mime: "application/xml" } : void 0;
    if (this.check([208, 207, 17, 224, 161, 177, 26, 225])) return { ext: "cfb", mime: "application/x-cfb" };
    if (await e7.peekBuffer(this.buffer, { length: Math.min(256, e7.fileInfo.size), mayBeLess: true }), this.check([97, 99, 115, 112], { offset: 36 })) return { ext: "icc", mime: "application/vnd.iccprofile" };
    if (this.checkString("**ACE", { offset: 7 }) && this.checkString("**", { offset: 12 })) return { ext: "ace", mime: "application/x-ace-compressed" };
    if (this.checkString("BEGIN:")) {
      if (this.checkString("VCARD", { offset: 6 })) return { ext: "vcf", mime: "text/vcard" };
      if (this.checkString("VCALENDAR", { offset: 6 })) return { ext: "ics", mime: "text/calendar" };
    }
    if (this.checkString("FUJIFILMCCD-RAW")) return { ext: "raf", mime: "image/x-fujifilm-raf" };
    if (this.checkString("Extended Module:")) return { ext: "xm", mime: "audio/x-xm" };
    if (this.checkString("Creative Voice File")) return { ext: "voc", mime: "audio/x-voc" };
    if (this.check([4, 0, 0, 0]) && this.buffer.length >= 16) {
      let t4 = new DataView(this.buffer.buffer).getUint32(12, true);
      if (t4 > 12 && this.buffer.length >= t4 + 16) try {
        let a8 = new TextDecoder().decode(this.buffer.subarray(16, t4 + 16));
        if (JSON.parse(a8).files) return { ext: "asar", mime: "application/x-asar" };
      } catch {
      }
    }
    if (this.check([6, 14, 43, 52, 2, 5, 1, 1, 13, 1, 2, 1, 1, 2])) return { ext: "mxf", mime: "application/mxf" };
    if (this.checkString("SCRM", { offset: 44 })) return { ext: "s3m", mime: "audio/x-s3m" };
    if (this.check([71]) && this.check([71], { offset: 188 })) return { ext: "mts", mime: "video/mp2t" };
    if (this.check([71], { offset: 4 }) && this.check([71], { offset: 196 })) return { ext: "mts", mime: "video/mp2t" };
    if (this.check([66, 79, 79, 75, 77, 79, 66, 73], { offset: 60 })) return { ext: "mobi", mime: "application/x-mobipocket-ebook" };
    if (this.check([68, 73, 67, 77], { offset: 128 })) return { ext: "dcm", mime: "application/dicom" };
    if (this.check([76, 0, 0, 0, 1, 20, 2, 0, 0, 0, 0, 0, 192, 0, 0, 0, 0, 0, 0, 70])) return { ext: "lnk", mime: "application/x.ms.shortcut" };
    if (this.check([98, 111, 111, 107, 0, 0, 0, 0, 109, 97, 114, 107, 0, 0, 0, 0])) return { ext: "alias", mime: "application/x.apple.alias" };
    if (this.checkString("Kaydara FBX Binary  \0")) return { ext: "fbx", mime: "application/x.autodesk.fbx" };
    if (this.check([76, 80], { offset: 34 }) && (this.check([0, 0, 1], { offset: 8 }) || this.check([1, 0, 2], { offset: 8 }) || this.check([2, 0, 2], { offset: 8 }))) return { ext: "eot", mime: "application/vnd.ms-fontobject" };
    if (this.check([6, 6, 237, 245, 216, 29, 70, 229, 189, 49, 239, 231, 254, 116, 183, 29])) return { ext: "indd", mime: "application/x-indesign" };
    if (await e7.peekBuffer(this.buffer, { length: Math.min(512, e7.fileInfo.size), mayBeLess: true }), this.checkString("ustar", { offset: 257 }) && (this.checkString("\0", { offset: 262 }) || this.checkString(" ", { offset: 262 })) || this.check([0, 0, 0, 0, 0, 0], { offset: 257 }) && v10(this.buffer)) return { ext: "tar", mime: "application/x-tar" };
    if (this.check([255, 254])) return this.check([60, 0, 63, 0, 120, 0, 109, 0, 108, 0], { offset: 2 }) ? { ext: "xml", mime: "application/xml" } : this.check([255, 14, 83, 0, 107, 0, 101, 0, 116, 0, 99, 0, 104, 0, 85, 0, 112, 0, 32, 0, 77, 0, 111, 0, 100, 0, 101, 0, 108, 0], { offset: 2 }) ? { ext: "skp", mime: "application/vnd.sketchup.skp" } : void 0;
    if (this.checkString("-----BEGIN PGP MESSAGE-----")) return { ext: "pgp", mime: "application/pgp-encrypted" };
  };
  detectImprecise = async (e7) => {
    if (this.buffer = new Uint8Array(u13), await e7.peekBuffer(this.buffer, { length: Math.min(8, e7.fileInfo.size), mayBeLess: true }), this.check([0, 0, 1, 186]) || this.check([0, 0, 1, 179])) return { ext: "mpg", mime: "video/mpeg" };
    if (this.check([0, 1, 0, 0, 0])) return { ext: "ttf", mime: "font/ttf" };
    if (this.check([0, 0, 1, 0])) return { ext: "ico", mime: "image/x-icon" };
    if (this.check([0, 0, 2, 0])) return { ext: "cur", mime: "image/x-icon" };
    if (await e7.peekBuffer(this.buffer, { length: Math.min(2 + this.options.mpegOffsetTolerance, e7.fileInfo.size), mayBeLess: true }), this.buffer.length >= 2 + this.options.mpegOffsetTolerance) for (let t4 = 0; t4 <= this.options.mpegOffsetTolerance; ++t4) {
      let a8 = this.scanMpeg(t4);
      if (a8) return a8;
    }
  };
  async readTiffTag(e7) {
    let t4 = await this.tokenizer.readToken(e7 ? d15 : U16);
    switch (this.tokenizer.ignore(10), t4) {
      case 50341:
        return { ext: "arw", mime: "image/x-sony-arw" };
      case 50706:
        return { ext: "dng", mime: "image/x-adobe-dng" };
      default:
    }
  }
  async readTiffIFD(e7) {
    let t4 = await this.tokenizer.readToken(e7 ? d15 : U16);
    for (let a8 = 0; a8 < t4; ++a8) {
      let n8 = await this.readTiffTag(e7);
      if (n8) return n8;
    }
  }
  async readTiffHeader(e7) {
    let t4 = (e7 ? d15 : U16).get(this.buffer, 2), a8 = (e7 ? E15 : I14).get(this.buffer, 4);
    if (t4 === 42) {
      if (a8 >= 6) {
        if (this.checkString("CR", { offset: 8 })) return { ext: "cr2", mime: "image/x-canon-cr2" };
        if (a8 >= 8) {
          let r36 = (e7 ? d15 : U16).get(this.buffer, 8), p15 = (e7 ? d15 : U16).get(this.buffer, 10);
          if (r36 === 28 && p15 === 254 || r36 === 31 && p15 === 11) return { ext: "nef", mime: "image/x-nikon-nef" };
        }
      }
      return await this.tokenizer.ignore(a8), await this.readTiffIFD(e7) ?? { ext: "tif", mime: "image/tiff" };
    }
    if (t4 === 43) return { ext: "tif", mime: "image/tiff" };
  }
  scanMpeg(e7) {
    if (this.check([255, 224], { offset: e7, mask: [255, 224] })) {
      if (this.check([16], { offset: e7 + 1, mask: [22] })) return this.check([8], { offset: e7 + 1, mask: [8] }) ? { ext: "aac", mime: "audio/aac" } : { ext: "aac", mime: "audio/aac" };
      if (this.check([2], { offset: e7 + 1, mask: [6] })) return { ext: "mp3", mime: "audio/mpeg" };
      if (this.check([4], { offset: e7 + 1, mask: [6] })) return { ext: "mp2", mime: "audio/mpeg" };
      if (this.check([6], { offset: e7 + 1, mask: [6] })) return { ext: "mp1", mime: "audio/mpeg" };
    }
  }
};
var P18 = new Set(b18);
var q16 = new Set(S19);

// https://esm.sh/ky@1.8.2/denonext/ky.mjs
var f9 = class extends Error {
  response;
  request;
  options;
  constructor(t4, r36, o15) {
    let s9 = t4.status || t4.status === 0 ? t4.status : "", n8 = t4.statusText || "", i10 = `${s9} ${n8}`.trim(), a8 = i10 ? `status code ${i10}` : "an unknown error";
    super(`Request failed with ${a8}: ${r36.method} ${r36.url}`), this.name = "HTTPError", this.response = t4, this.request = r36, this.options = o15;
  }
};
var h19 = class extends Error {
  request;
  constructor(t4) {
    super(`Request timed out: ${t4.method} ${t4.url}`), this.name = "TimeoutError", this.request = t4;
  }
};
var _12 = (() => {
  let e7 = false, t4 = false, r36 = typeof globalThis.ReadableStream == "function", o15 = typeof globalThis.Request == "function";
  if (r36 && o15) try {
    t4 = new globalThis.Request("https://empty.invalid", { body: new globalThis.ReadableStream(), method: "POST", get duplex() {
      return e7 = true, "half";
    } }).headers.has("Content-Type");
  } catch (s9) {
    if (s9 instanceof Error && s9.message === "unsupported BodyInit type") return false;
    throw s9;
  }
  return e7 && !t4;
})();
var k20 = typeof globalThis.AbortController == "function";
var E17 = typeof globalThis.AbortSignal == "function" && typeof globalThis.AbortSignal.any == "function";
var A19 = typeof globalThis.ReadableStream == "function";
var C20 = typeof globalThis.FormData == "function";
var m14 = ["get", "post", "put", "patch", "head", "delete"];
var N14 = () => {
};
N14();
var P19 = { json: "application/json", text: "text/*", formData: "multipart/form-data", arrayBuffer: "*/*", blob: "*/*" };
var y13 = 2147483647;
var O14 = new TextEncoder().encode("------WebKitFormBoundaryaxpyiPgbbPti10Rw").length;
var b19 = Symbol("stop");
var U17 = { json: true, parseJson: true, stringifyJson: true, searchParams: true, prefixUrl: true, retry: true, timeout: true, hooks: true, throwHttpErrors: true, onDownloadProgress: true, onUploadProgress: true, fetch: true };
var B16 = { method: true, headers: true, body: true, mode: true, credentials: true, cache: true, redirect: true, referrer: true, referrerPolicy: true, integrity: true, keepalive: true, signal: true, window: true, dispatcher: true, duplex: true, priority: true };
var z14 = (e7) => {
  if (!e7) return 0;
  if (e7 instanceof FormData) {
    let t4 = 0;
    for (let [r36, o15] of e7) t4 += O14, t4 += new TextEncoder().encode(`Content-Disposition: form-data; name="${r36}"`).length, t4 += typeof o15 == "string" ? new TextEncoder().encode(o15).length : o15.size;
    return t4;
  }
  if (e7 instanceof Blob) return e7.size;
  if (e7 instanceof ArrayBuffer) return e7.byteLength;
  if (typeof e7 == "string") return new TextEncoder().encode(e7).length;
  if (e7 instanceof URLSearchParams) return new TextEncoder().encode(e7.toString()).length;
  if ("byteLength" in e7) return e7.byteLength;
  if (typeof e7 == "object" && e7 !== null) try {
    let t4 = JSON.stringify(e7);
    return new TextEncoder().encode(t4).length;
  } catch {
    return 0;
  }
  return 0;
};
var L16 = (e7, t4) => {
  let r36 = Number(e7.headers.get("content-length")) || 0, o15 = 0;
  return e7.status === 204 ? (t4 && t4({ percent: 1, totalBytes: r36, transferredBytes: o15 }, new Uint8Array()), new Response(null, { status: e7.status, statusText: e7.statusText, headers: e7.headers })) : new Response(new ReadableStream({ async start(s9) {
    let n8 = e7.body.getReader();
    t4 && t4({ percent: 0, transferredBytes: 0, totalBytes: r36 }, new Uint8Array());
    async function i10() {
      let { done: a8, value: u17 } = await n8.read();
      if (a8) {
        s9.close();
        return;
      }
      if (t4) {
        o15 += u17.byteLength;
        let p15 = r36 === 0 ? 0 : o15 / r36;
        t4({ percent: p15, transferredBytes: o15, totalBytes: r36 }, u17);
      }
      s9.enqueue(u17), await i10();
    }
    await i10();
  } }), { status: e7.status, statusText: e7.statusText, headers: e7.headers });
};
var j20 = (e7, t4) => {
  let r36 = z14(e7.body), o15 = 0;
  return new Request(e7, { duplex: "half", body: new ReadableStream({ async start(s9) {
    let n8 = e7.body instanceof ReadableStream ? e7.body.getReader() : new Response("").body.getReader();
    async function i10() {
      let { done: a8, value: u17 } = await n8.read();
      if (a8) {
        t4 && t4({ percent: 1, transferredBytes: o15, totalBytes: Math.max(r36, o15) }, new Uint8Array()), s9.close();
        return;
      }
      o15 += u17.byteLength;
      let p15 = r36 === 0 ? 0 : o15 / r36;
      (r36 < o15 || p15 === 1) && (p15 = 0.99), t4 && t4({ percent: Number(p15.toFixed(2)), transferredBytes: o15, totalBytes: r36 }, u17), s9.enqueue(u17), await i10();
    }
    await i10();
  } }) });
};
var c10 = (e7) => e7 !== null && typeof e7 == "object";
var l14 = (...e7) => {
  for (let t4 of e7) if ((!c10(t4) || Array.isArray(t4)) && t4 !== void 0) throw new TypeError("The `options` argument must be an object");
  return x19({}, ...e7);
};
var g14 = (e7 = {}, t4 = {}) => {
  let r36 = new globalThis.Headers(e7), o15 = t4 instanceof globalThis.Headers, s9 = new globalThis.Headers(t4);
  for (let [n8, i10] of s9.entries()) o15 && i10 === "undefined" || i10 === void 0 ? r36.delete(n8) : r36.set(n8, i10);
  return r36;
};
function w17(e7, t4, r36) {
  return Object.hasOwn(t4, r36) && t4[r36] === void 0 ? [] : x19(e7[r36] ?? [], t4[r36] ?? []);
}
var R10 = (e7 = {}, t4 = {}) => ({ beforeRequest: w17(e7, t4, "beforeRequest"), beforeRetry: w17(e7, t4, "beforeRetry"), afterResponse: w17(e7, t4, "afterResponse"), beforeError: w17(e7, t4, "beforeError") });
var x19 = (...e7) => {
  let t4 = {}, r36 = {}, o15 = {};
  for (let s9 of e7) if (Array.isArray(s9)) Array.isArray(t4) || (t4 = []), t4 = [...t4, ...s9];
  else if (c10(s9)) {
    for (let [n8, i10] of Object.entries(s9)) c10(i10) && n8 in t4 && (i10 = x19(t4[n8], i10)), t4 = { ...t4, [n8]: i10 };
    c10(s9.hooks) && (o15 = R10(o15, s9.hooks), t4.hooks = o15), c10(s9.headers) && (r36 = g14(r36, s9.headers), t4.headers = r36);
  }
  return t4;
};
var H16 = (e7) => m14.includes(e7) ? e7.toUpperCase() : e7;
var D18 = ["get", "put", "head", "delete", "options", "trace"];
var F18 = [408, 413, 429, 500, 502, 503, 504];
var $14 = [413, 429, 503];
var v11 = { limit: 2, methods: D18, statusCodes: F18, afterStatusCodes: $14, maxRetryAfter: Number.POSITIVE_INFINITY, backoffLimit: Number.POSITIVE_INFINITY, delay: (e7) => 0.3 * 2 ** (e7 - 1) * 1e3 };
var I15 = (e7 = {}) => {
  if (typeof e7 == "number") return { ...v11, limit: e7 };
  if (e7.methods && !Array.isArray(e7.methods)) throw new Error("retry.methods must be an array");
  if (e7.statusCodes && !Array.isArray(e7.statusCodes)) throw new Error("retry.statusCodes must be an array");
  return { ...v11, ...e7 };
};
async function T15(e7, t4, r36, o15) {
  return new Promise((s9, n8) => {
    let i10 = setTimeout(() => {
      r36 && r36.abort(), n8(new h19(e7));
    }, o15.timeout);
    o15.fetch(e7, t4).then(s9).catch(n8).then(() => {
      clearTimeout(i10);
    });
  });
}
async function q17(e7, { signal: t4 }) {
  return new Promise((r36, o15) => {
    t4 && (t4.throwIfAborted(), t4.addEventListener("abort", s9, { once: true }));
    function s9() {
      clearTimeout(n8), o15(t4.reason);
    }
    let n8 = setTimeout(() => {
      t4?.removeEventListener("abort", s9), r36();
    }, e7);
  });
}
var M19 = (e7, t4) => {
  let r36 = {};
  for (let o15 in t4) !(o15 in B16) && !(o15 in U17) && !(o15 in e7) && (r36[o15] = t4[o15]);
  return r36;
};
var d18 = class e6 {
  static create(t4, r36) {
    let o15 = new e6(t4, r36), s9 = async () => {
      if (typeof o15._options.timeout == "number" && o15._options.timeout > y13) throw new RangeError(`The \`timeout\` option cannot be greater than ${y13}`);
      await Promise.resolve();
      let a8 = await o15._fetch();
      for (let u17 of o15._options.hooks.afterResponse) {
        let p15 = await u17(o15.request, o15._options, o15._decorateResponse(a8.clone()));
        p15 instanceof globalThis.Response && (a8 = p15);
      }
      if (o15._decorateResponse(a8), !a8.ok && o15._options.throwHttpErrors) {
        let u17 = new f9(a8, o15.request, o15._options);
        for (let p15 of o15._options.hooks.beforeError) u17 = await p15(u17);
        throw u17;
      }
      if (o15._options.onDownloadProgress) {
        if (typeof o15._options.onDownloadProgress != "function") throw new TypeError("The `onDownloadProgress` option must be a function");
        if (!A19) throw new Error("Streams are not supported in your environment. `ReadableStream` is missing.");
        return L16(a8.clone(), o15._options.onDownloadProgress);
      }
      return a8;
    }, i10 = (o15._options.retry.methods.includes(o15.request.method.toLowerCase()) ? o15._retry(s9) : s9()).finally(async () => {
      o15.request.bodyUsed || await o15.request.body?.cancel();
    });
    for (let [a8, u17] of Object.entries(P19)) i10[a8] = async () => {
      o15.request.headers.set("accept", o15.request.headers.get("accept") || u17);
      let p15 = await i10;
      if (a8 === "json") {
        if (p15.status === 204 || (await p15.clone().arrayBuffer()).byteLength === 0) return "";
        if (r36.parseJson) return r36.parseJson(await p15.text());
      }
      return p15[a8]();
    };
    return i10;
  }
  request;
  abortController;
  _retryCount = 0;
  _input;
  _options;
  constructor(t4, r36 = {}) {
    if (this._input = t4, this._options = { ...r36, headers: g14(this._input.headers, r36.headers), hooks: R10({ beforeRequest: [], beforeRetry: [], beforeError: [], afterResponse: [] }, r36.hooks), method: H16(r36.method ?? this._input.method ?? "GET"), prefixUrl: String(r36.prefixUrl || ""), retry: I15(r36.retry), throwHttpErrors: r36.throwHttpErrors !== false, timeout: r36.timeout ?? 1e4, fetch: r36.fetch ?? globalThis.fetch.bind(globalThis) }, typeof this._input != "string" && !(this._input instanceof URL || this._input instanceof globalThis.Request)) throw new TypeError("`input` must be a string, URL, or Request");
    if (this._options.prefixUrl && typeof this._input == "string") {
      if (this._input.startsWith("/")) throw new Error("`input` must not begin with a slash when using `prefixUrl`");
      this._options.prefixUrl.endsWith("/") || (this._options.prefixUrl += "/"), this._input = this._options.prefixUrl + this._input;
    }
    if (k20 && E17) {
      let o15 = this._options.signal ?? this._input.signal;
      this.abortController = new globalThis.AbortController(), this._options.signal = o15 ? AbortSignal.any([o15, this.abortController.signal]) : this.abortController.signal;
    }
    if (_12 && (this._options.duplex = "half"), this._options.json !== void 0 && (this._options.body = this._options.stringifyJson?.(this._options.json) ?? JSON.stringify(this._options.json), this._options.headers.set("content-type", this._options.headers.get("content-type") ?? "application/json")), this.request = new globalThis.Request(this._input, this._options), this._options.searchParams) {
      let s9 = "?" + (typeof this._options.searchParams == "string" ? this._options.searchParams.replace(/^\?/, "") : new URLSearchParams(this._options.searchParams).toString()), n8 = this.request.url.replace(/(?:\?.*?)?(?=#|$)/, s9);
      (C20 && this._options.body instanceof globalThis.FormData || this._options.body instanceof URLSearchParams) && !(this._options.headers && this._options.headers["content-type"]) && this.request.headers.delete("content-type"), this.request = new globalThis.Request(new globalThis.Request(n8, { ...this.request }), this._options);
    }
    if (this._options.onUploadProgress) {
      if (typeof this._options.onUploadProgress != "function") throw new TypeError("The `onUploadProgress` option must be a function");
      if (!_12) throw new Error("Request streams are not supported in your environment. The `duplex` option for `Request` is not available.");
      this.request.body && (this.request = j20(this.request, this._options.onUploadProgress));
    }
  }
  _calculateRetryDelay(t4) {
    if (this._retryCount++, this._retryCount > this._options.retry.limit || t4 instanceof h19) throw t4;
    if (t4 instanceof f9) {
      if (!this._options.retry.statusCodes.includes(t4.response.status)) throw t4;
      let o15 = t4.response.headers.get("Retry-After") ?? t4.response.headers.get("RateLimit-Reset") ?? t4.response.headers.get("X-RateLimit-Reset") ?? t4.response.headers.get("X-Rate-Limit-Reset");
      if (o15 && this._options.retry.afterStatusCodes.includes(t4.response.status)) {
        let s9 = Number(o15) * 1e3;
        Number.isNaN(s9) ? s9 = Date.parse(o15) - Date.now() : s9 >= Date.parse("2024-01-01") && (s9 -= Date.now());
        let n8 = this._options.retry.maxRetryAfter ?? s9;
        return s9 < n8 ? s9 : n8;
      }
      if (t4.response.status === 413) throw t4;
    }
    let r36 = this._options.retry.delay(this._retryCount);
    return Math.min(this._options.retry.backoffLimit, r36);
  }
  _decorateResponse(t4) {
    return this._options.parseJson && (t4.json = async () => this._options.parseJson(await t4.text())), t4;
  }
  async _retry(t4) {
    try {
      return await t4();
    } catch (r36) {
      let o15 = Math.min(this._calculateRetryDelay(r36), y13);
      if (this._retryCount < 1) throw r36;
      await q17(o15, { signal: this._options.signal });
      for (let s9 of this._options.hooks.beforeRetry) if (await s9({ request: this.request, options: this._options, error: r36, retryCount: this._retryCount }) === b19) return;
      return this._retry(t4);
    }
  }
  async _fetch() {
    for (let o15 of this._options.hooks.beforeRequest) {
      let s9 = await o15(this.request, this._options);
      if (s9 instanceof Request) {
        this.request = s9;
        break;
      }
      if (s9 instanceof Response) return s9;
    }
    let t4 = M19(this.request, this._options), r36 = this.request;
    return this.request = r36.clone(), this._options.timeout === false ? this._options.fetch(r36, t4) : T15(r36, t4, this.abortController, this._options);
  }
};
var S20 = (e7) => {
  let t4 = (r36, o15) => d18.create(r36, l14(e7, o15));
  for (let r36 of m14) t4[r36] = (o15, s9) => d18.create(o15, l14(e7, s9, { method: r36 }));
  return t4.create = (r36) => S20(l14(r36)), t4.extend = (r36) => (typeof r36 == "function" && (r36 = r36(e7 ?? {})), S20(l14(e7, r36))), t4.stop = b19, t4;
};
var J16 = S20();
var xt5 = J16;

// https://esm.sh/@agentic/platform-api-client@8.4.4/denonext/platform-api-client.mjs
var g15 = class c11 {
  static DEFAULT_API_BASE_URL = "https://api.agentic.so";
  apiBaseUrl;
  apiKey;
  ky;
  onUpdateAuth;
  _authSession;
  constructor({ apiBaseUrl: s9 = c11.DEFAULT_API_BASE_URL, apiKey: e7, ky: t4 = xt5, onUpdateAuth: r36 } = {}) {
    f6(s9, 'AgenticApiClient missing required "apiBaseUrl"'), this.apiBaseUrl = s9, this.apiKey = e7, this.onUpdateAuth = r36, this.ky = t4.extend({ prefixUrl: s9, timeout: s9.startsWith("http://localhost") ? 12e4 : void 0, headers: e7 ? { Authorization: `Bearer ${e7}` } : void 0, hooks: { beforeRequest: [async (a8) => {
      !this.apiKey && this._authSession && a8.headers.set("Authorization", `Bearer ${this._authSession.token}`);
    }] } });
  }
  get isAuthenticated() {
    return !!this._authSession;
  }
  get authSession() {
    return structuredClone(this._authSession);
  }
  set authSession(s9) {
    this._authSession = structuredClone(s9);
  }
  async logout() {
    this._authSession = void 0, this.onUpdateAuth?.();
  }
  _ensureNoApiKey() {
    f6(!this.apiKey, "AgenticApiClient was initialized with an API key. This method is only supported with wnon-API-key-based authentication.");
  }
  async signInWithPassword(s9) {
    return this._authSession = await this.ky.post("v1/auth/password/signin", { json: s9 }).json(), this.onUpdateAuth?.(this._authSession), this._authSession;
  }
  async signUpWithPassword(s9) {
    return this._authSession = await this.ky.post("v1/auth/password/signup", { json: s9 }).json(), this.onUpdateAuth?.(this._authSession), this._authSession;
  }
  async initAuthFlowWithGitHub({ redirectUri: s9, scope: e7 = "user:email", clientId: t4 = "Iv23lizZv3CnggDT7JED" }) {
    let r36 = new URL(`${this.apiBaseUrl}/v1/auth/github/init`);
    return r36.searchParams.append("client_id", t4), r36.searchParams.append("scope", e7), r36.searchParams.append("redirect_uri", s9), r36.toString();
  }
  async exchangeOAuthCodeWithGitHub(s9) {
    return this._authSession = await this.ky.post("v1/auth/github/exchange", { json: s9 }).json(), this.onUpdateAuth?.(this._authSession), this._authSession;
  }
  async getMe() {
    let s9 = this._authSession?.user.id;
    return f6(s9, "This method requires authentication."), this.ky.get(`v1/users/${s9}`).json();
  }
  async getUser({ userId: s9, ...e7 }) {
    return this.ky.get(`v1/users/${s9}`, { searchParams: e7 }).json();
  }
  async updateUser(s9, { userId: e7, ...t4 }) {
    return this.ky.post(`v1/users/${e7}`, { json: s9, searchParams: t4 }).json();
  }
  async listTeams(s9 = {}) {
    return this.ky.get("v1/teams", { searchParams: F16(s9) }).json();
  }
  async createTeam(s9, e7 = {}) {
    return this.ky.post("v1/teams", { json: s9, searchParams: F16(e7) }).json();
  }
  async getTeam({ teamId: s9, ...e7 }) {
    return this.ky.get(`v1/teams/${s9}`, { searchParams: e7 }).json();
  }
  async updateTeam(s9, { teamId: e7, ...t4 }) {
    return this.ky.post(`v1/teams/${e7}`, { json: s9, searchParams: t4 }).json();
  }
  async deleteTeam({ teamId: s9, ...e7 }) {
    return this.ky.delete(`v1/teams/${s9}`, { searchParams: e7 }).json();
  }
  async createTeamMember(s9, { teamId: e7, ...t4 }) {
    return this.ky.post(`v1/teams/${e7}/members`, { json: s9, searchParams: t4 }).json();
  }
  async updateTeamMember(s9, { teamId: e7, userId: t4, ...r36 }) {
    return this.ky.post(`v1/teams/${e7}/members/${t4}`, { json: s9, searchParams: r36 }).json();
  }
  async deleteTeamMember({ teamId: s9, userId: e7, ...t4 }) {
    return this.ky.delete(`v1/teams/${s9}/members/${e7}`, { searchParams: t4 }).json();
  }
  async getSignedStorageUploadUrl(s9) {
    return this.ky.get("v1/storage/signed-upload-url", { searchParams: F16(s9) }).json();
  }
  async uploadFileUrlToStorage(s9, { projectIdentifier: e7 }) {
    let t4;
    if (typeof s9 == "string") try {
      s9 = new URL(s9);
    } catch {
      throw new Error(`Invalid source file URL: ${s9}`);
    }
    if (s9 instanceof URL) {
      if (s9.hostname === "storage.agentic.so") return s9.toString();
      t4 = await xt5.get(s9).arrayBuffer();
    } else if (s9 instanceof ArrayBuffer) t4 = s9;
    else throw new Error(`Invalid source file: ${s9}`);
    let [r36, a8] = await Promise.all([T13(t4), N13(t4)]), u17 = a8 ? `${r36}.${a8.ext}` : r36, { signedUploadUrl: y18, publicObjectUrl: h24 } = await this.getSignedStorageUploadUrl({ projectIdentifier: e7, key: u17 });
    try {
      await xt5.head(h24);
    } catch {
      await xt5.post(y18, { body: t4, headers: { "Content-Type": a8?.mime ?? "application/octet-stream" } });
    }
    return h24;
  }
  async listPublicProjects(s9 = {}) {
    return this.ky.get("v1/projects/public", { searchParams: F16(s9) }).json();
  }
  async getPublicProject({ projectId: s9, ...e7 }) {
    return this.ky.get(`v1/projects/public/${s9}`, { searchParams: F16(e7) }).json();
  }
  async getPublicProjectByIdentifier(s9) {
    return this.ky.get("v1/projects/public/by-identifier", { searchParams: F16(s9) }).json();
  }
  async listProjects(s9 = {}) {
    return this.ky.get("v1/projects", { searchParams: F16(s9) }).json();
  }
  async createProject(s9, e7 = {}) {
    return this.ky.post("v1/projects", { json: s9, searchParams: e7 }).json();
  }
  async getProject({ projectId: s9, ...e7 }) {
    return this.ky.get(`v1/projects/${s9}`, { searchParams: F16(e7) }).json();
  }
  async getProjectByIdentifier(s9) {
    return this.ky.get("v1/projects/by-identifier", { searchParams: F16(s9) }).json();
  }
  async updateProject(s9, { projectId: e7, ...t4 }) {
    return this.ky.post(`v1/projects/${e7}`, { json: s9, searchParams: t4 }).json();
  }
  async getConsumer({ consumerId: s9, ...e7 }) {
    return this.ky.get(`v1/consumers/${s9}`, { searchParams: F16(e7) }).json();
  }
  async getConsumerByProjectIdentifier(s9) {
    return this.ky.get("v1/consumers/by-project-identifier", { searchParams: F16(s9) }).json();
  }
  async updateConsumer(s9, { consumerId: e7, ...t4 }) {
    return this.ky.post(`v1/consumers/${e7}`, { json: s9, searchParams: t4 }).json();
  }
  async createConsumer(s9, e7 = {}) {
    return this.ky.post("v1/consumers", { json: s9, searchParams: F16(e7) }).json();
  }
  async createConsumerCheckoutSession(s9, e7 = {}) {
    return this.ky.post("v1/consumers/checkout", { json: s9, searchParams: F16(e7) }).json();
  }
  async createBillingPortalSession(s9 = {}) {
    return this.ky.post("v1/consumers/billing-portal", { searchParams: F16(s9) }).json();
  }
  async createConsumerBillingPortalSession({ consumerId: s9, ...e7 }) {
    return this.ky.post(`v1/consumers/${s9}/billing-portal`, { searchParams: F16(e7) }).json();
  }
  async refreshConsumerApiKey({ consumerId: s9, ...e7 }) {
    return this.ky.post(`v1/consumers/${s9}/refresh-api-key`, { searchParams: e7 }).json();
  }
  async listConsumers(s9 = {}) {
    return this.ky.get("v1/consumers", { searchParams: F16(s9) }).json();
  }
  async listConsumersForProject({ projectId: s9, ...e7 }) {
    return this.ky.get(`v1/projects/${s9}/consumers`, { searchParams: F16(e7) }).json();
  }
  async getDeployment({ deploymentId: s9, ...e7 }) {
    return this.ky.get(`v1/deployments/${s9}`, { searchParams: F16(e7) }).json();
  }
  async getDeploymentByIdentifier(s9) {
    return this.ky.get("v1/deployments/by-identifier", { searchParams: F16(s9) }).json();
  }
  async getPublicDeploymentByIdentifier(s9) {
    return this.ky.get("v1/deployments/public/by-identifier", { searchParams: F16(s9) }).json();
  }
  async updateDeployment(s9, { deploymentId: e7, ...t4 }) {
    return this.ky.post(`v1/deployments/${e7}`, { json: s9, searchParams: t4 }).json();
  }
  async listDeployments(s9 = {}) {
    return this.ky.get("v1/deployments", { searchParams: F16(s9) }).json();
  }
  async createDeployment(s9, e7 = {}) {
    return this.ky.post("v1/deployments", { json: s9, searchParams: e7 }).json();
  }
  async publishDeployment(s9, { deploymentId: e7, ...t4 }) {
    return this.ky.post(`v1/deployments/${e7}/publish`, { json: s9, searchParams: t4 }).json();
  }
  async adminGetConsumerByApiKey({ apiKey: s9, ...e7 }) {
    return this.ky.get(`v1/admin/consumers/api-keys/${s9}`, { searchParams: F16(e7) }).json();
  }
  async adminActivateConsumer({ consumerId: s9, ...e7 }) {
    return this.ky.put(`v1/admin/consumers/${s9}/activate`, { searchParams: F16(e7) }).json();
  }
  async adminGetDeploymentByIdentifier(s9) {
    return this.ky.get("v1/admin/deployments/by-identifier", { searchParams: F16(s9) }).json();
  }
};

// https://esm.sh/@noble/hashes@1.8.0/sha3?target=denonext
var sha3_target_denonext_exports = {};
__export(sha3_target_denonext_exports, {
  Keccak: () => x21,
  keccakP: () => W14,
  keccak_224: () => ot5,
  keccak_256: () => rt6,
  keccak_384: () => it5,
  keccak_512: () => ct7,
  sha3_224: () => tt7,
  sha3_256: () => st6,
  sha3_384: () => nt5,
  sha3_512: () => et6,
  shake128: () => ht5,
  shake256: () => at6
});

// https://esm.sh/@noble/hashes@1.8.0/denonext/crypto.mjs
var o12 = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;

// https://esm.sh/@noble/hashes@1.8.0/denonext/utils.mjs
function m15(t4) {
  return t4 instanceof Uint8Array || ArrayBuffer.isView(t4) && t4.constructor.name === "Uint8Array";
}
function x20(t4) {
  if (!Number.isSafeInteger(t4) || t4 < 0) throw new Error("positive integer expected, got " + t4);
}
function u14(t4, ...e7) {
  if (!m15(t4)) throw new Error("Uint8Array expected");
  if (e7.length > 0 && !e7.includes(t4.length)) throw new Error("Uint8Array expected of length " + e7 + ", got length=" + t4.length);
}
function S21(t4, e7 = true) {
  if (t4.destroyed) throw new Error("Hash instance has been destroyed");
  if (e7 && t4.finished) throw new Error("Hash#digest() has already been called");
}
function I16(t4, e7) {
  u14(t4);
  let n8 = e7.outputLen;
  if (t4.length < n8) throw new Error("digestInto() expects output buffer of length at least " + n8);
}
function _13(t4) {
  return new Uint32Array(t4.buffer, t4.byteOffset, Math.floor(t4.byteLength / 4));
}
function j21(...t4) {
  for (let e7 = 0; e7 < t4.length; e7++) t4[e7].fill(0);
}
var w18 = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
function d19(t4) {
  return t4 << 24 & 4278190080 | t4 << 8 & 16711680 | t4 >>> 8 & 65280 | t4 >>> 24 & 255;
}
function L17(t4) {
  for (let e7 = 0; e7 < t4.length; e7++) t4[e7] = d19(t4[e7]);
  return t4;
}
var W13 = w18 ? (t4) => t4 : L17;
var g16 = typeof Uint8Array.from([]).toHex == "function" && typeof Uint8Array.fromHex == "function";
var E18 = Array.from({ length: 256 }, (t4, e7) => e7.toString(16).padStart(2, "0"));
function h20(t4) {
  if (typeof t4 != "string") throw new Error("string expected");
  return new Uint8Array(new TextEncoder().encode(t4));
}
function p13(t4) {
  return typeof t4 == "string" && (t4 = h20(t4)), u14(t4), t4;
}
var y14 = class {
};
function B17(t4) {
  let e7 = (r36) => t4().update(p13(r36)).digest(), n8 = t4();
  return e7.outputLen = n8.outputLen, e7.blockLen = n8.blockLen, e7.create = () => t4(), e7;
}
function O15(t4) {
  let e7 = (r36, o15) => t4(o15).update(p13(r36)).digest(), n8 = t4({});
  return e7.outputLen = n8.outputLen, e7.blockLen = n8.blockLen, e7.create = (r36) => t4(r36), e7;
}

// https://esm.sh/@noble/hashes@1.8.0/denonext/sha3.mjs
var d20 = BigInt(4294967295);
var k21 = BigInt(32);
function M20(n8, t4 = false) {
  return t4 ? { h: Number(n8 & d20), l: Number(n8 >> k21 & d20) } : { h: Number(n8 >> k21 & d20) | 0, l: Number(n8 & d20) | 0 };
}
function _14(n8, t4 = false) {
  let s9 = n8.length, o15 = new Uint32Array(s9), r36 = new Uint32Array(s9);
  for (let i10 = 0; i10 < s9; i10++) {
    let { h: e7, l: c14 } = M20(n8[i10], t4);
    [o15[i10], r36[i10]] = [e7, c14];
  }
  return [o15, r36];
}
var I17 = (n8, t4, s9) => n8 << s9 | t4 >>> 32 - s9;
var B18 = (n8, t4, s9) => t4 << s9 | n8 >>> 32 - s9;
var L18 = (n8, t4, s9) => t4 << s9 - 32 | n8 >>> 64 - s9;
var g17 = (n8, t4, s9) => n8 << s9 - 32 | t4 >>> 64 - s9;
var C21 = BigInt(0);
var l15 = BigInt(1);
var D19 = BigInt(2);
var G16 = BigInt(7);
var J17 = BigInt(256);
var K17 = BigInt(113);
var m16 = [];
var T16 = [];
var F19 = [];
for (let n8 = 0, t4 = l15, s9 = 1, o15 = 0; n8 < 24; n8++) {
  [s9, o15] = [o15, (2 * s9 + 3 * o15) % 5], m16.push(2 * (5 * o15 + s9)), T16.push((n8 + 1) * (n8 + 2) / 2 % 64);
  let r36 = C21;
  for (let i10 = 0; i10 < 7; i10++) t4 = (t4 << l15 ^ (t4 >> G16) * K17) % J17, t4 & D19 && (r36 ^= l15 << (l15 << BigInt(i10)) - l15);
  F19.push(r36);
}
var U18 = _14(F19, true);
var Q17 = U18[0];
var V16 = U18[1];
var A20 = (n8, t4, s9) => s9 > 32 ? L18(n8, t4, s9) : I17(n8, t4, s9);
var b20 = (n8, t4, s9) => s9 > 32 ? g17(n8, t4, s9) : B18(n8, t4, s9);
function W14(n8, t4 = 24) {
  let s9 = new Uint32Array(10);
  for (let o15 = 24 - t4; o15 < 24; o15++) {
    for (let e7 = 0; e7 < 10; e7++) s9[e7] = n8[e7] ^ n8[e7 + 10] ^ n8[e7 + 20] ^ n8[e7 + 30] ^ n8[e7 + 40];
    for (let e7 = 0; e7 < 10; e7 += 2) {
      let c14 = (e7 + 8) % 10, f14 = (e7 + 2) % 10, u17 = s9[f14], a8 = s9[f14 + 1], E21 = A20(u17, a8, 1) ^ s9[c14], N18 = b20(u17, a8, 1) ^ s9[c14 + 1];
      for (let p15 = 0; p15 < 50; p15 += 10) n8[e7 + p15] ^= E21, n8[e7 + p15 + 1] ^= N18;
    }
    let r36 = n8[2], i10 = n8[3];
    for (let e7 = 0; e7 < 24; e7++) {
      let c14 = T16[e7], f14 = A20(r36, i10, c14), u17 = b20(r36, i10, c14), a8 = m16[e7];
      r36 = n8[a8], i10 = n8[a8 + 1], n8[a8] = f14, n8[a8 + 1] = u17;
    }
    for (let e7 = 0; e7 < 50; e7 += 10) {
      for (let c14 = 0; c14 < 10; c14++) s9[c14] = n8[e7 + c14];
      for (let c14 = 0; c14 < 10; c14++) n8[e7 + c14] ^= ~s9[(c14 + 2) % 10] & s9[(c14 + 4) % 10];
    }
    n8[0] ^= Q17[o15], n8[1] ^= V16[o15];
  }
  j21(s9);
}
var x21 = class n6 extends y14 {
  constructor(t4, s9, o15, r36 = false, i10 = 24) {
    if (super(), this.pos = 0, this.posOut = 0, this.finished = false, this.destroyed = false, this.enableXOF = false, this.blockLen = t4, this.suffix = s9, this.outputLen = o15, this.enableXOF = r36, this.rounds = i10, x20(o15), !(0 < t4 && t4 < 200)) throw new Error("only keccak-f1600 function is supported");
    this.state = new Uint8Array(200), this.state32 = _13(this.state);
  }
  clone() {
    return this._cloneInto();
  }
  keccak() {
    W13(this.state32), W14(this.state32, this.rounds), W13(this.state32), this.posOut = 0, this.pos = 0;
  }
  update(t4) {
    S21(this), t4 = p13(t4), u14(t4);
    let { blockLen: s9, state: o15 } = this, r36 = t4.length;
    for (let i10 = 0; i10 < r36; ) {
      let e7 = Math.min(s9 - this.pos, r36 - i10);
      for (let c14 = 0; c14 < e7; c14++) o15[this.pos++] ^= t4[i10++];
      this.pos === s9 && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished) return;
    this.finished = true;
    let { state: t4, suffix: s9, pos: o15, blockLen: r36 } = this;
    t4[o15] ^= s9, (s9 & 128) !== 0 && o15 === r36 - 1 && this.keccak(), t4[r36 - 1] ^= 128, this.keccak();
  }
  writeInto(t4) {
    S21(this, false), u14(t4), this.finish();
    let s9 = this.state, { blockLen: o15 } = this;
    for (let r36 = 0, i10 = t4.length; r36 < i10; ) {
      this.posOut >= o15 && this.keccak();
      let e7 = Math.min(o15 - this.posOut, i10 - r36);
      t4.set(s9.subarray(this.posOut, this.posOut + e7), r36), this.posOut += e7, r36 += e7;
    }
    return t4;
  }
  xofInto(t4) {
    if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
    return this.writeInto(t4);
  }
  xof(t4) {
    return x20(t4), this.xofInto(new Uint8Array(t4));
  }
  digestInto(t4) {
    if (I16(t4, this), this.finished) throw new Error("digest() was already called");
    return this.writeInto(t4), this.destroy(), t4;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = true, j21(this.state);
  }
  _cloneInto(t4) {
    let { blockLen: s9, suffix: o15, outputLen: r36, rounds: i10, enableXOF: e7 } = this;
    return t4 || (t4 = new n6(s9, o15, r36, e7, i10)), t4.state32.set(this.state32), t4.pos = this.pos, t4.posOut = this.posOut, t4.finished = this.finished, t4.rounds = i10, t4.suffix = o15, t4.outputLen = r36, t4.enableXOF = e7, t4.destroyed = this.destroyed, t4;
  }
};
var h21 = (n8, t4, s9) => B17(() => new x21(t4, n8, s9));
var tt7 = h21(6, 144, 224 / 8);
var st6 = h21(6, 136, 256 / 8);
var nt5 = h21(6, 104, 384 / 8);
var et6 = h21(6, 72, 512 / 8);
var ot5 = h21(1, 144, 224 / 8);
var rt6 = h21(1, 136, 256 / 8);
var it5 = h21(1, 104, 384 / 8);
var ct7 = h21(1, 72, 512 / 8);
var X13 = (n8, t4, s9) => O15((o15 = {}) => new x21(t4, n8, o15.dkLen === void 0 ? s9 : o15.dkLen, true));
var ht5 = X13(31, 168, 128 / 8);
var at6 = X13(31, 136, 256 / 8);

// https://esm.sh/@paralleldrive/cuid2@2.2.2/denonext/cuid2.mjs
var require5 = (n8) => {
  const e7 = (m20) => typeof m20.default < "u" ? m20.default : m20, c14 = (m20) => Object.assign({ __esModule: true }, m20);
  switch (n8) {
    case "@noble/hashes/sha3":
      return e7(sha3_target_denonext_exports);
    default:
      console.error('module "' + n8 + '" not found');
      return null;
  }
};
var j22 = Object.create;
var g18 = Object.defineProperty;
var B19 = Object.getOwnPropertyDescriptor;
var $15 = Object.getOwnPropertyNames;
var q18 = Object.getPrototypeOf;
var v12 = Object.prototype.hasOwnProperty;
var F20 = ((t4) => typeof require5 < "u" ? require5 : typeof Proxy < "u" ? new Proxy(t4, { get: (e7, n8) => (typeof require5 < "u" ? require5 : e7)[n8] }) : t4)(function(t4) {
  if (typeof require5 < "u") return require5.apply(this, arguments);
  throw Error('Dynamic require of "' + t4 + '" is not supported');
});
var l16 = (t4, e7) => () => (e7 || t4((e7 = { exports: {} }).exports, e7), e7.exports);
var T17 = (t4, e7, n8, o15) => {
  if (e7 && typeof e7 == "object" || typeof e7 == "function") for (let r36 of $15(e7)) !v12.call(t4, r36) && r36 !== n8 && g18(t4, r36, { get: () => e7[r36], enumerable: !(o15 = B19(e7, r36)) || o15.enumerable });
  return t4;
};
var k22 = (t4, e7, n8) => (n8 = t4 != null ? j22(q18(t4)) : {}, T17(e7 || !t4 || !t4.__esModule ? g18(n8, "default", { value: t4, enumerable: true }) : n8, t4));
var y15 = l16((N18, s9) => {
  var { sha3_512: z20 } = F20("@noble/hashes/sha3"), p15 = 24, i10 = 32, u17 = (t4 = 4, e7 = Math.random) => {
    let n8 = "";
    for (; n8.length < t4; ) n8 = n8 + Math.floor(e7() * 36).toString(36);
    return n8;
  };
  function h24(t4) {
    let e7 = 8n, n8 = 0n;
    for (let o15 of t4.values()) {
      let r36 = BigInt(o15);
      n8 = (n8 << e7) + r36;
    }
    return n8;
  }
  var d24 = (t4 = "") => h24(z20(t4)).toString(36).slice(1), f14 = Array.from({ length: 26 }, (t4, e7) => String.fromCharCode(e7 + 97)), A25 = (t4) => f14[Math.floor(t4() * f14.length)], x24 = ({ globalObj: t4 = typeof globalThis < "u" || typeof globalThis < "u" ? globalThis : {}, random: e7 = Math.random } = {}) => {
    let n8 = Object.keys(t4).toString(), o15 = n8.length ? n8 + u17(i10, e7) : u17(i10, e7);
    return d24(o15).substring(0, i10);
  }, C25 = (t4) => () => t4++, D23 = 476782367, b23 = ({ random: t4 = Math.random, counter: e7 = C25(Math.floor(t4() * D23)), length: n8 = p15, fingerprint: o15 = x24({ random: t4 }) } = {}) => function() {
    let m20 = A25(t4), M24 = Date.now().toString(36), S25 = e7().toString(36), w21 = u17(n8, t4), L23 = `${M24 + w21 + S25 + o15}`;
    return `${m20 + d24(L23).substring(1, n8)}`;
  }, E21 = b23(), O20 = (t4, { minLength: e7 = 2, maxLength: n8 = i10 } = {}) => {
    let o15 = t4.length, r36 = /^[0-9a-z]+$/;
    try {
      if (typeof t4 == "string" && o15 >= e7 && o15 <= n8 && r36.test(t4)) return true;
    } finally {
    }
    return false;
  };
  s9.exports.getConstants = () => ({ defaultLength: p15, bigLength: i10 });
  s9.exports.init = b23;
  s9.exports.createId = E21;
  s9.exports.bufToBigInt = h24;
  s9.exports.createCounter = C25;
  s9.exports.createFingerprint = x24;
  s9.exports.isCuid = O20;
});
var I18 = l16((P22, c14) => {
  var { createId: _17, init: G19, getConstants: H20, isCuid: J21 } = y15();
  c14.exports.createId = _17;
  c14.exports.init = G19;
  c14.exports.getConstants = H20;
  c14.exports.isCuid = J21;
});
var a7 = k22(I18());
var { createId: Q18, init: R11, getConstants: U19, isCuid: V17 } = a7;
var W15 = a7.default ?? a7;

// https://esm.sh/email-validator@2.0.4/denonext/email-validator.mjs
var l17 = Object.create;
var f10 = Object.defineProperty;
var o13 = Object.getOwnPropertyDescriptor;
var v13 = Object.getOwnPropertyNames;
var c12 = Object.getPrototypeOf;
var d21 = Object.prototype.hasOwnProperty;
var p14 = (t4, r36) => () => (r36 || t4((r36 = { exports: {} }).exports, r36), r36.exports);
var z15 = (t4, r36, e7, s9) => {
  if (r36 && typeof r36 == "object" || typeof r36 == "function") for (let a8 of v13(r36)) !d21.call(t4, a8) && a8 !== e7 && f10(t4, a8, { get: () => r36[a8], enumerable: !(s9 = o13(r36, a8)) || s9.enumerable });
  return t4;
};
var A21 = (t4, r36, e7) => (e7 = t4 != null ? l17(c12(t4)) : {}, z15(r36 || !t4 || !t4.__esModule ? f10(e7, "default", { value: t4, enumerable: true }) : e7, t4));
var i9 = p14((u17) => {
  "use strict";
  var Z17 = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
  u17.validate = function(t4) {
    if (!t4 || t4.length > 254) return false;
    var r36 = Z17.test(t4);
    if (!r36) return false;
    var e7 = t4.split("@");
    if (e7[0].length > 64) return false;
    var s9 = e7[1].split(".");
    return !s9.some(function(a8) {
      return a8.length > 63;
    });
  };
});
var n7 = A21(i9());
var { validate: m17 } = n7;
var $16 = n7.default ?? n7;

// https://esm.sh/@agentic/platform-validators@8.4.4/denonext/platform-validators.mjs
function s7(e7) {
  if (e7) {
    try {
      let { pathname: r36 } = new URL(e7);
      e7 = r36;
    } catch {
    }
    return e7 = e7.replace(/^\//, ""), e7 = e7.replace(/\/$/, ""), e7;
  }
}
var f11 = /^@([a-z0-9-]{1,256})\/([a-z0-9-]{1,256})\/([a-zA-Z_][a-zA-Z0-9_-]{0,63})$/;
var $17 = /^@([a-z0-9-]{1,256})\/([a-z0-9-]{1,256})@([a-z0-9]{8})\/([a-zA-Z_][a-zA-Z0-9_-]{0,63})$/;
var h22 = /^@([a-z0-9-]{1,256})\/([a-z0-9-]{1,256})@([\d.a-z-@]+)\/([a-zA-Z_][a-zA-Z0-9_-]{0,63})$/;
function g19(e7, { strict: r36 = true, errorStatusCode: n8 = 400 } = {}) {
  let i10 = e7;
  if (r36 || (e7 = s7(e7)), !e7?.length) throw new o6({ statusCode: n8, message: `Invalid tool identifier "${i10}"` });
  let t4 = e7.match(f11);
  if (t4) return { projectIdentifier: `@${t4[1]}/${t4[2]}`, projectNamespace: t4[1], projectSlug: t4[2], deploymentIdentifier: `@${t4[1]}/${t4[2]}@latest`, deploymentVersion: "latest", toolName: t4[3] };
  let a8 = e7.match($17);
  if (a8) return { projectIdentifier: `@${a8[1]}/${a8[2]}`, projectNamespace: a8[1], projectSlug: a8[2], deploymentIdentifier: `@${a8[1]}/${a8[2]}@${a8[3]}`, deploymentHash: a8[3], toolName: a8[4] };
  let o15 = e7.match(h22);
  if (o15) return { projectIdentifier: `@${o15[1]}/${o15[2]}`, projectNamespace: o15[1], projectSlug: o15[2], deploymentIdentifier: `@${o15[1]}/${o15[2]}@${o15[3]}`, deploymentVersion: "latest", toolName: o15[4] };
  throw new o6({ statusCode: n8, message: `Invalid tool identifier "${i10}"` });
}
var I19 = /^@([a-z0-9-]{1,256})\/([a-z0-9-]{1,256})$/;
var z16 = /^@([a-z0-9-]{1,256})\/([a-z0-9-]{1,256})@([a-z0-9]{8})$/;
var y16 = /^@([a-z0-9-]{1,256})\/([a-z0-9-]{1,256})@([\d.a-z-@]+)$/;
function u15(e7, { strict: r36 = true, errorStatusCode: n8 = 400 } = {}) {
  let i10 = e7;
  if (!r36) try {
    return g19(e7, { strict: r36, errorStatusCode: n8 });
  } catch {
  }
  if (r36 || (e7 = s7(e7)), !e7?.length) throw new o6({ statusCode: n8, message: `Invalid deployment identifier "${i10}"` });
  let t4 = e7.match(I19);
  if (t4) return { projectIdentifier: `@${t4[1]}/${t4[2]}`, projectNamespace: t4[1], projectSlug: t4[2], deploymentIdentifier: `@${t4[1]}/${t4[2]}@latest`, deploymentVersion: "latest" };
  let a8 = e7.match(z16);
  if (a8) return { projectIdentifier: `@${a8[1]}/${a8[2]}`, projectNamespace: a8[1], projectSlug: a8[2], deploymentIdentifier: `@${a8[1]}/${a8[2]}@${a8[3]}`, deploymentHash: a8[3] };
  let o15 = e7.match(y16);
  if (o15) return { projectIdentifier: `@${o15[1]}/${o15[2]}`, projectNamespace: o15[1], projectSlug: o15[2], deploymentIdentifier: `@${o15[1]}/${o15[2]}@${o15[3]}`, deploymentVersion: o15[3] };
  throw new o6({ statusCode: n8, message: `Invalid deployment identifier "${i10}"` });
}

// https://esm.sh/@agentic/platform-tool-client@8.4.4/denonext/platform-tool-client.mjs
var S22 = class m18 extends tt5 {
  apiKey;
  project;
  deployment;
  agenticGatewayBaseUrl;
  ky;
  constructor({ apiKey: e7, project: o15, deployment: t4, deploymentIdentifier: c14, agenticGatewayBaseUrl: s9, ky: i10 }) {
    super(), this.apiKey = e7, this.project = o15, this.deployment = t4, this.agenticGatewayBaseUrl = s9, this.ky = e7 ? i10.extend({ headers: { Authorization: `Bearer ${e7}` } }) : i10, this._functions = new $t4(t4.tools.map((n8) => M14({ name: n8.name, description: n8.description ?? "", inputSchema: Jt2(n8.inputSchema), strict: false, execute: async (r36) => i10.post(`${s9}/${c14}/${n8.name}`, { json: r36 }).json() })));
  }
  async callTool(e7, o15) {
    let t4 = this.functions.get(e7);
    return f6(t4, `Tool "${e7}" not found`), t4(typeof o15 == "string" ? o15 : JSON.stringify(o15));
  }
  static async fromIdentifier(e7, { apiKey: o15 = Mt4("AGENTIC_API_KEY"), agenticApiClient: t4 = new g15(), agenticGatewayBaseUrl: c14 = "https://gateway.agentic.so", ky: s9 = xt5 } = {}) {
    let { projectIdentifier: i10, deploymentIdentifier: n8, deploymentVersion: r36 } = u15(e7, { strict: false }), [a8, u17] = await Promise.all([t4.getPublicProjectByIdentifier({ projectIdentifier: i10, populate: r36 === "latest" ? ["lastPublishedDeployment"] : [] }), r36 === "latest" ? Promise.resolve(void 0) : t4.getPublicDeploymentByIdentifier({ deploymentIdentifier: n8 })]), p15 = r36 === "latest" ? a8?.lastPublishedDeployment : u17;
    return f6(a8, `Project "${i10}" not found`), f6(p15, `Deployment "${n8}" not found`), new m18({ apiKey: o15, project: a8, deployment: p15, deploymentIdentifier: n8, agenticGatewayBaseUrl: c14, ky: s9 });
  }
};

// https://esm.sh/zod-to-json-schema@3.24.6/denonext/zod-to-json-schema.mjs
var T18 = Symbol("Let zodToJsonSchema decide on which parser to use");
var O16 = { name: void 0, $refStrategy: "root", basePath: ["#"], effectStrategy: "input", pipeStrategy: "all", dateStrategy: "format:date-time", mapStrategy: "entries", removeAdditionalStrategy: "passthrough", allowedAdditionalProperties: true, rejectedAdditionalProperties: false, definitionPath: "definitions", target: "jsonSchema7", strictUnions: false, definitions: {}, errorMessages: false, markdownDescription: false, patternStrategy: "escape", applyRegexFlags: false, emailStrategy: "format:email", base64Strategy: "contentEncoding:base64", nameStrategy: "ref", openAiAnyTypeName: "OpenAiAnyType" };
var N15 = (e7) => typeof e7 == "string" ? { ...O16, name: e7 } : { ...O16, ...e7 };
var j23 = (e7) => {
  let t4 = N15(e7), r36 = t4.name !== void 0 ? [...t4.basePath, t4.definitionPath, t4.name] : t4.basePath;
  return { ...t4, flags: { hasReferencedOpenAiAnyType: false }, currentPath: r36, propertyPath: void 0, seen: new Map(Object.entries(t4.definitions).map(([n8, a8]) => [a8._def, { def: a8._def, path: [...t4.basePath, t4.definitionPath, n8], jsonSchema: void 0 }])) };
};
function k23(e7, t4, r36, n8) {
  n8?.errorMessages && r36 && (e7.errorMessage = { ...e7.errorMessage, [t4]: r36 });
}
function u16(e7, t4, r36, n8, a8) {
  e7[t4] = r36, k23(e7, t4, n8, a8);
}
var A22 = (e7, t4) => {
  let r36 = 0;
  for (; r36 < e7.length && r36 < t4.length && e7[r36] === t4[r36]; r36++) ;
  return [(e7.length - r36).toString(), ...t4.slice(r36)].join("/");
};
function l18(e7) {
  if (e7.target !== "openAi") return {};
  let t4 = [...e7.basePath, e7.definitionPath, e7.openAiAnyTypeName];
  return e7.flags.hasReferencedOpenAiAnyType = true, { $ref: e7.$refStrategy === "relative" ? A22(t4, e7.currentPath) : t4.join("/") };
}
function M21(e7, t4) {
  let r36 = { type: "array" };
  return e7.type?._def && e7.type?._def?.typeName !== m5.ZodAny && (r36.items = o14(e7.type._def, { ...t4, currentPath: [...t4.currentPath, "items"] })), e7.minLength && u16(r36, "minItems", e7.minLength.value, e7.minLength.message, t4), e7.maxLength && u16(r36, "maxItems", e7.maxLength.value, e7.maxLength.message, t4), e7.exactLength && (u16(r36, "minItems", e7.exactLength.value, e7.exactLength.message, t4), u16(r36, "maxItems", e7.exactLength.value, e7.exactLength.message, t4)), r36;
}
function $18(e7, t4) {
  let r36 = { type: "integer", format: "int64" };
  if (!e7.checks) return r36;
  for (let n8 of e7.checks) switch (n8.kind) {
    case "min":
      t4.target === "jsonSchema7" ? n8.inclusive ? u16(r36, "minimum", n8.value, n8.message, t4) : u16(r36, "exclusiveMinimum", n8.value, n8.message, t4) : (n8.inclusive || (r36.exclusiveMinimum = true), u16(r36, "minimum", n8.value, n8.message, t4));
      break;
    case "max":
      t4.target === "jsonSchema7" ? n8.inclusive ? u16(r36, "maximum", n8.value, n8.message, t4) : u16(r36, "exclusiveMaximum", n8.value, n8.message, t4) : (n8.inclusive || (r36.exclusiveMaximum = true), u16(r36, "maximum", n8.value, n8.message, t4));
      break;
    case "multipleOf":
      u16(r36, "multipleOf", n8.value, n8.message, t4);
      break;
  }
  return r36;
}
function w19() {
  return { type: "boolean" };
}
function P20(e7, t4) {
  return o14(e7.type._def, t4);
}
var E19 = (e7, t4) => o14(e7.innerType._def, t4);
function _15(e7, t4, r36) {
  let n8 = r36 ?? t4.dateStrategy;
  if (Array.isArray(n8)) return { anyOf: n8.map((a8, i10) => _15(e7, t4, a8)) };
  switch (n8) {
    case "string":
    case "format:date-time":
      return { type: "string", format: "date-time" };
    case "format:date":
      return { type: "string", format: "date" };
    case "integer":
      return pe7(e7, t4);
  }
}
var pe7 = (e7, t4) => {
  let r36 = { type: "integer", format: "unix-time" };
  if (t4.target === "openApi3") return r36;
  for (let n8 of e7.checks) switch (n8.kind) {
    case "min":
      u16(r36, "minimum", n8.value, n8.message, t4);
      break;
    case "max":
      u16(r36, "maximum", n8.value, n8.message, t4);
      break;
  }
  return r36;
};
function R12(e7, t4) {
  return { ...o14(e7.innerType._def, t4), default: e7.defaultValue() };
}
function z17(e7, t4) {
  return t4.effectStrategy === "input" ? o14(e7.schema._def, t4) : l18(t4);
}
function L19(e7) {
  return { type: "string", enum: Array.from(e7.values) };
}
var ue4 = (e7) => "type" in e7 && e7.type === "string" ? false : "allOf" in e7;
function F21(e7, t4) {
  let r36 = [o14(e7.left._def, { ...t4, currentPath: [...t4.currentPath, "allOf", "0"] }), o14(e7.right._def, { ...t4, currentPath: [...t4.currentPath, "allOf", "1"] })].filter((i10) => !!i10), n8 = t4.target === "jsonSchema2019-09" ? { unevaluatedProperties: false } : void 0, a8 = [];
  return r36.forEach((i10) => {
    if (ue4(i10)) a8.push(...i10.allOf), i10.unevaluatedProperties === void 0 && (n8 = void 0);
    else {
      let m20 = i10;
      if ("additionalProperties" in i10 && i10.additionalProperties === false) {
        let { additionalProperties: c14, ...s9 } = i10;
        m20 = s9;
      } else n8 = void 0;
      a8.push(m20);
    }
  }), a8.length ? { allOf: a8, ...n8 } : void 0;
}
function I20(e7, t4) {
  let r36 = typeof e7.value;
  return r36 !== "bigint" && r36 !== "number" && r36 !== "boolean" && r36 !== "string" ? { type: Array.isArray(e7.value) ? "array" : "object" } : t4.target === "openApi3" ? { type: r36 === "bigint" ? "integer" : r36, enum: [e7.value] } : { type: r36 === "bigint" ? "integer" : r36, const: e7.value };
}
var Z14;
var d22 = { cuid: /^[cC][^\s-]{8,}$/, cuid2: /^[0-9a-z]+$/, ulid: /^[0-9A-HJKMNP-TV-Z]{26}$/, email: /^(?!\.)(?!.*\.\.)([a-zA-Z0-9_'+\-\.]*)[a-zA-Z0-9_+-]@([a-zA-Z0-9][a-zA-Z0-9\-]*\.)+[a-zA-Z]{2,}$/, emoji: () => (Z14 === void 0 && (Z14 = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), Z14), uuid: /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/, ipv4: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, ipv4Cidr: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, ipv6: /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, ipv6Cidr: /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, base64: /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, base64url: /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, nanoid: /^[a-zA-Z0-9_-]{21}$/, jwt: /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/ };
function v14(e7, t4) {
  let r36 = { type: "string" };
  if (e7.checks) for (let n8 of e7.checks) switch (n8.kind) {
    case "min":
      u16(r36, "minLength", typeof r36.minLength == "number" ? Math.max(r36.minLength, n8.value) : n8.value, n8.message, t4);
      break;
    case "max":
      u16(r36, "maxLength", typeof r36.maxLength == "number" ? Math.min(r36.maxLength, n8.value) : n8.value, n8.message, t4);
      break;
    case "email":
      switch (t4.emailStrategy) {
        case "format:email":
          g20(r36, "email", n8.message, t4);
          break;
        case "format:idn-email":
          g20(r36, "idn-email", n8.message, t4);
          break;
        case "pattern:zod":
          f12(r36, d22.email, n8.message, t4);
          break;
      }
      break;
    case "url":
      g20(r36, "uri", n8.message, t4);
      break;
    case "uuid":
      g20(r36, "uuid", n8.message, t4);
      break;
    case "regex":
      f12(r36, n8.regex, n8.message, t4);
      break;
    case "cuid":
      f12(r36, d22.cuid, n8.message, t4);
      break;
    case "cuid2":
      f12(r36, d22.cuid2, n8.message, t4);
      break;
    case "startsWith":
      f12(r36, RegExp(`^${S23(n8.value, t4)}`), n8.message, t4);
      break;
    case "endsWith":
      f12(r36, RegExp(`${S23(n8.value, t4)}$`), n8.message, t4);
      break;
    case "datetime":
      g20(r36, "date-time", n8.message, t4);
      break;
    case "date":
      g20(r36, "date", n8.message, t4);
      break;
    case "time":
      g20(r36, "time", n8.message, t4);
      break;
    case "duration":
      g20(r36, "duration", n8.message, t4);
      break;
    case "length":
      u16(r36, "minLength", typeof r36.minLength == "number" ? Math.max(r36.minLength, n8.value) : n8.value, n8.message, t4), u16(r36, "maxLength", typeof r36.maxLength == "number" ? Math.min(r36.maxLength, n8.value) : n8.value, n8.message, t4);
      break;
    case "includes": {
      f12(r36, RegExp(S23(n8.value, t4)), n8.message, t4);
      break;
    }
    case "ip": {
      n8.version !== "v6" && g20(r36, "ipv4", n8.message, t4), n8.version !== "v4" && g20(r36, "ipv6", n8.message, t4);
      break;
    }
    case "base64url":
      f12(r36, d22.base64url, n8.message, t4);
      break;
    case "jwt":
      f12(r36, d22.jwt, n8.message, t4);
      break;
    case "cidr": {
      n8.version !== "v6" && f12(r36, d22.ipv4Cidr, n8.message, t4), n8.version !== "v4" && f12(r36, d22.ipv6Cidr, n8.message, t4);
      break;
    }
    case "emoji":
      f12(r36, d22.emoji(), n8.message, t4);
      break;
    case "ulid": {
      f12(r36, d22.ulid, n8.message, t4);
      break;
    }
    case "base64": {
      switch (t4.base64Strategy) {
        case "format:binary": {
          g20(r36, "binary", n8.message, t4);
          break;
        }
        case "contentEncoding:base64": {
          u16(r36, "contentEncoding", "base64", n8.message, t4);
          break;
        }
        case "pattern:zod": {
          f12(r36, d22.base64, n8.message, t4);
          break;
        }
      }
      break;
    }
    case "nanoid":
      f12(r36, d22.nanoid, n8.message, t4);
    case "toLowerCase":
    case "toUpperCase":
    case "trim":
      break;
    default:
  }
  return r36;
}
function S23(e7, t4) {
  return t4.patternStrategy === "escape" ? ce5(e7) : e7;
}
var me7 = new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
function ce5(e7) {
  let t4 = "";
  for (let r36 = 0; r36 < e7.length; r36++) me7.has(e7[r36]) || (t4 += "\\"), t4 += e7[r36];
  return t4;
}
function g20(e7, t4, r36, n8) {
  e7.format || e7.anyOf?.some((a8) => a8.format) ? (e7.anyOf || (e7.anyOf = []), e7.format && (e7.anyOf.push({ format: e7.format, ...e7.errorMessage && n8.errorMessages && { errorMessage: { format: e7.errorMessage.format } } }), delete e7.format, e7.errorMessage && (delete e7.errorMessage.format, Object.keys(e7.errorMessage).length === 0 && delete e7.errorMessage)), e7.anyOf.push({ format: t4, ...r36 && n8.errorMessages && { errorMessage: { format: r36 } } })) : u16(e7, "format", t4, r36, n8);
}
function f12(e7, t4, r36, n8) {
  e7.pattern || e7.allOf?.some((a8) => a8.pattern) ? (e7.allOf || (e7.allOf = []), e7.pattern && (e7.allOf.push({ pattern: e7.pattern, ...e7.errorMessage && n8.errorMessages && { errorMessage: { pattern: e7.errorMessage.pattern } } }), delete e7.pattern, e7.errorMessage && (delete e7.errorMessage.pattern, Object.keys(e7.errorMessage).length === 0 && delete e7.errorMessage)), e7.allOf.push({ pattern: C22(t4, n8), ...r36 && n8.errorMessages && { errorMessage: { pattern: r36 } } })) : u16(e7, "pattern", C22(t4, n8), r36, n8);
}
function C22(e7, t4) {
  if (!t4.applyRegexFlags || !e7.flags) return e7.source;
  let r36 = { i: e7.flags.includes("i"), m: e7.flags.includes("m"), s: e7.flags.includes("s") }, n8 = r36.i ? e7.source.toLowerCase() : e7.source, a8 = "", i10 = false, m20 = false, c14 = false;
  for (let s9 = 0; s9 < n8.length; s9++) {
    if (i10) {
      a8 += n8[s9], i10 = false;
      continue;
    }
    if (r36.i) {
      if (m20) {
        if (n8[s9].match(/[a-z]/)) {
          c14 ? (a8 += n8[s9], a8 += `${n8[s9 - 2]}-${n8[s9]}`.toUpperCase(), c14 = false) : n8[s9 + 1] === "-" && n8[s9 + 2]?.match(/[a-z]/) ? (a8 += n8[s9], c14 = true) : a8 += `${n8[s9]}${n8[s9].toUpperCase()}`;
          continue;
        }
      } else if (n8[s9].match(/[a-z]/)) {
        a8 += `[${n8[s9]}${n8[s9].toUpperCase()}]`;
        continue;
      }
    }
    if (r36.m) {
      if (n8[s9] === "^") {
        a8 += `(^|(?<=[\r
]))`;
        continue;
      } else if (n8[s9] === "$") {
        a8 += `($|(?=[\r
]))`;
        continue;
      }
    }
    if (r36.s && n8[s9] === ".") {
      a8 += m20 ? `${n8[s9]}\r
` : `[${n8[s9]}\r
]`;
      continue;
    }
    a8 += n8[s9], n8[s9] === "\\" ? i10 = true : m20 && n8[s9] === "]" ? m20 = false : !m20 && n8[s9] === "[" && (m20 = true);
  }
  try {
    new RegExp(a8);
  } catch {
    return console.warn(`Could not convert regex pattern at ${t4.currentPath.join("/")} to a flag-independent form! Falling back to the flag-ignorant source`), e7.source;
  }
  return a8;
}
function D20(e7, t4) {
  if (t4.target === "openAi" && console.warn("Warning: OpenAI may not support records in schemas! Try an array of key-value pairs instead."), t4.target === "openApi3" && e7.keyType?._def.typeName === m5.ZodEnum) return { type: "object", required: e7.keyType._def.values, properties: e7.keyType._def.values.reduce((n8, a8) => ({ ...n8, [a8]: o14(e7.valueType._def, { ...t4, currentPath: [...t4.currentPath, "properties", a8] }) ?? l18(t4) }), {}), additionalProperties: t4.rejectedAdditionalProperties };
  let r36 = { type: "object", additionalProperties: o14(e7.valueType._def, { ...t4, currentPath: [...t4.currentPath, "additionalProperties"] }) ?? t4.allowedAdditionalProperties };
  if (t4.target === "openApi3") return r36;
  if (e7.keyType?._def.typeName === m5.ZodString && e7.keyType._def.checks?.length) {
    let { type: n8, ...a8 } = v14(e7.keyType._def, t4);
    return { ...r36, propertyNames: a8 };
  } else {
    if (e7.keyType?._def.typeName === m5.ZodEnum) return { ...r36, propertyNames: { enum: e7.keyType._def.values } };
    if (e7.keyType?._def.typeName === m5.ZodBranded && e7.keyType._def.type._def.typeName === m5.ZodString && e7.keyType._def.type._def.checks?.length) {
      let { type: n8, ...a8 } = P20(e7.keyType._def, t4);
      return { ...r36, propertyNames: a8 };
    }
  }
  return r36;
}
function U20(e7, t4) {
  if (t4.mapStrategy === "record") return D20(e7, t4);
  let r36 = o14(e7.keyType._def, { ...t4, currentPath: [...t4.currentPath, "items", "items", "0"] }) || l18(t4), n8 = o14(e7.valueType._def, { ...t4, currentPath: [...t4.currentPath, "items", "items", "1"] }) || l18(t4);
  return { type: "array", maxItems: 125, items: { type: "array", items: [r36, n8], minItems: 2, maxItems: 2 } };
}
function B20(e7) {
  let t4 = e7.values, n8 = Object.keys(e7.values).filter((i10) => typeof t4[t4[i10]] != "number").map((i10) => t4[i10]), a8 = Array.from(new Set(n8.map((i10) => typeof i10)));
  return { type: a8.length === 1 ? a8[0] === "string" ? "string" : "number" : ["string", "number"], enum: n8 };
}
function V18(e7) {
  return e7.target === "openAi" ? void 0 : { not: l18({ ...e7, currentPath: [...e7.currentPath, "not"] }) };
}
function K18(e7) {
  return e7.target === "openApi3" ? { enum: ["null"], nullable: true } : { type: "null" };
}
var b21 = { ZodString: "string", ZodNumber: "number", ZodBigInt: "integer", ZodBoolean: "boolean", ZodNull: "null" };
function q19(e7, t4) {
  if (t4.target === "openApi3") return J18(e7, t4);
  let r36 = e7.options instanceof Map ? Array.from(e7.options.values()) : e7.options;
  if (r36.every((n8) => n8._def.typeName in b21 && (!n8._def.checks || !n8._def.checks.length))) {
    let n8 = r36.reduce((a8, i10) => {
      let m20 = b21[i10._def.typeName];
      return m20 && !a8.includes(m20) ? [...a8, m20] : a8;
    }, []);
    return { type: n8.length > 1 ? n8 : n8[0] };
  } else if (r36.every((n8) => n8._def.typeName === "ZodLiteral" && !n8.description)) {
    let n8 = r36.reduce((a8, i10) => {
      let m20 = typeof i10._def.value;
      switch (m20) {
        case "string":
        case "number":
        case "boolean":
          return [...a8, m20];
        case "bigint":
          return [...a8, "integer"];
        case "object":
          if (i10._def.value === null) return [...a8, "null"];
        case "symbol":
        case "undefined":
        case "function":
        default:
          return a8;
      }
    }, []);
    if (n8.length === r36.length) {
      let a8 = n8.filter((i10, m20, c14) => c14.indexOf(i10) === m20);
      return { type: a8.length > 1 ? a8 : a8[0], enum: r36.reduce((i10, m20) => i10.includes(m20._def.value) ? i10 : [...i10, m20._def.value], []) };
    }
  } else if (r36.every((n8) => n8._def.typeName === "ZodEnum")) return { type: "string", enum: r36.reduce((n8, a8) => [...n8, ...a8._def.values.filter((i10) => !n8.includes(i10))], []) };
  return J18(e7, t4);
}
var J18 = (e7, t4) => {
  let r36 = (e7.options instanceof Map ? Array.from(e7.options.values()) : e7.options).map((n8, a8) => o14(n8._def, { ...t4, currentPath: [...t4.currentPath, "anyOf", `${a8}`] })).filter((n8) => !!n8 && (!t4.strictUnions || typeof n8 == "object" && Object.keys(n8).length > 0));
  return r36.length ? { anyOf: r36 } : void 0;
};
function W16(e7, t4) {
  if (["ZodString", "ZodNumber", "ZodBigInt", "ZodBoolean", "ZodNull"].includes(e7.innerType._def.typeName) && (!e7.innerType._def.checks || !e7.innerType._def.checks.length)) return t4.target === "openApi3" ? { type: b21[e7.innerType._def.typeName], nullable: true } : { type: [b21[e7.innerType._def.typeName], "null"] };
  if (t4.target === "openApi3") {
    let n8 = o14(e7.innerType._def, { ...t4, currentPath: [...t4.currentPath] });
    return n8 && "$ref" in n8 ? { allOf: [n8], nullable: true } : n8 && { ...n8, nullable: true };
  }
  let r36 = o14(e7.innerType._def, { ...t4, currentPath: [...t4.currentPath, "anyOf", "0"] });
  return r36 && { anyOf: [r36, { type: "null" }] };
}
function G17(e7, t4) {
  let r36 = { type: "number" };
  if (!e7.checks) return r36;
  for (let n8 of e7.checks) switch (n8.kind) {
    case "int":
      r36.type = "integer", k23(r36, "type", n8.message, t4);
      break;
    case "min":
      t4.target === "jsonSchema7" ? n8.inclusive ? u16(r36, "minimum", n8.value, n8.message, t4) : u16(r36, "exclusiveMinimum", n8.value, n8.message, t4) : (n8.inclusive || (r36.exclusiveMinimum = true), u16(r36, "minimum", n8.value, n8.message, t4));
      break;
    case "max":
      t4.target === "jsonSchema7" ? n8.inclusive ? u16(r36, "maximum", n8.value, n8.message, t4) : u16(r36, "exclusiveMaximum", n8.value, n8.message, t4) : (n8.inclusive || (r36.exclusiveMaximum = true), u16(r36, "maximum", n8.value, n8.message, t4));
      break;
    case "multipleOf":
      u16(r36, "multipleOf", n8.value, n8.message, t4);
      break;
  }
  return r36;
}
function H17(e7, t4) {
  let r36 = t4.target === "openAi", n8 = { type: "object", properties: {} }, a8 = [], i10 = e7.shape();
  for (let c14 in i10) {
    let s9 = i10[c14];
    if (s9 === void 0 || s9._def === void 0) continue;
    let y18 = fe5(s9);
    y18 && r36 && (s9._def.typeName === "ZodOptional" && (s9 = s9._def.innerType), s9.isNullable() || (s9 = s9.nullable()), y18 = false);
    let x24 = o14(s9._def, { ...t4, currentPath: [...t4.currentPath, "properties", c14], propertyPath: [...t4.currentPath, "properties", c14] });
    x24 !== void 0 && (n8.properties[c14] = x24, y18 || a8.push(c14));
  }
  a8.length && (n8.required = a8);
  let m20 = le6(e7, t4);
  return m20 !== void 0 && (n8.additionalProperties = m20), n8;
}
function le6(e7, t4) {
  if (e7.catchall._def.typeName !== "ZodNever") return o14(e7.catchall._def, { ...t4, currentPath: [...t4.currentPath, "additionalProperties"] });
  switch (e7.unknownKeys) {
    case "passthrough":
      return t4.allowedAdditionalProperties;
    case "strict":
      return t4.rejectedAdditionalProperties;
    case "strip":
      return t4.removeAdditionalStrategy === "strict" ? t4.allowedAdditionalProperties : t4.rejectedAdditionalProperties;
  }
}
function fe5(e7) {
  try {
    return e7.isOptional();
  } catch {
    return true;
  }
}
var Q19 = (e7, t4) => {
  if (t4.currentPath.toString() === t4.propertyPath?.toString()) return o14(e7.innerType._def, t4);
  let r36 = o14(e7.innerType._def, { ...t4, currentPath: [...t4.currentPath, "anyOf", "1"] });
  return r36 ? { anyOf: [{ not: l18(t4) }, r36] } : l18(t4);
};
var X14 = (e7, t4) => {
  if (t4.pipeStrategy === "input") return o14(e7.in._def, t4);
  if (t4.pipeStrategy === "output") return o14(e7.out._def, t4);
  let r36 = o14(e7.in._def, { ...t4, currentPath: [...t4.currentPath, "allOf", "0"] }), n8 = o14(e7.out._def, { ...t4, currentPath: [...t4.currentPath, "allOf", r36 ? "1" : "0"] });
  return { allOf: [r36, n8].filter((a8) => a8 !== void 0) };
};
function Y11(e7, t4) {
  return o14(e7.type._def, t4);
}
function ee8(e7, t4) {
  let n8 = { type: "array", uniqueItems: true, items: o14(e7.valueType._def, { ...t4, currentPath: [...t4.currentPath, "items"] }) };
  return e7.minSize && u16(n8, "minItems", e7.minSize.value, e7.minSize.message, t4), e7.maxSize && u16(n8, "maxItems", e7.maxSize.value, e7.maxSize.message, t4), n8;
}
function te7(e7, t4) {
  return e7.rest ? { type: "array", minItems: e7.items.length, items: e7.items.map((r36, n8) => o14(r36._def, { ...t4, currentPath: [...t4.currentPath, "items", `${n8}`] })).reduce((r36, n8) => n8 === void 0 ? r36 : [...r36, n8], []), additionalItems: o14(e7.rest._def, { ...t4, currentPath: [...t4.currentPath, "additionalItems"] }) } : { type: "array", minItems: e7.items.length, maxItems: e7.items.length, items: e7.items.map((r36, n8) => o14(r36._def, { ...t4, currentPath: [...t4.currentPath, "items", `${n8}`] })).reduce((r36, n8) => n8 === void 0 ? r36 : [...r36, n8], []) };
}
function re9(e7) {
  return { not: l18(e7) };
}
function ne6(e7) {
  return l18(e7);
}
var ae7 = (e7, t4) => o14(e7.innerType._def, t4);
var oe6 = (e7, t4, r36) => {
  switch (t4) {
    case m5.ZodString:
      return v14(e7, r36);
    case m5.ZodNumber:
      return G17(e7, r36);
    case m5.ZodObject:
      return H17(e7, r36);
    case m5.ZodBigInt:
      return $18(e7, r36);
    case m5.ZodBoolean:
      return w19();
    case m5.ZodDate:
      return _15(e7, r36);
    case m5.ZodUndefined:
      return re9(r36);
    case m5.ZodNull:
      return K18(r36);
    case m5.ZodArray:
      return M21(e7, r36);
    case m5.ZodUnion:
    case m5.ZodDiscriminatedUnion:
      return q19(e7, r36);
    case m5.ZodIntersection:
      return F21(e7, r36);
    case m5.ZodTuple:
      return te7(e7, r36);
    case m5.ZodRecord:
      return D20(e7, r36);
    case m5.ZodLiteral:
      return I20(e7, r36);
    case m5.ZodEnum:
      return L19(e7);
    case m5.ZodNativeEnum:
      return B20(e7);
    case m5.ZodNullable:
      return W16(e7, r36);
    case m5.ZodOptional:
      return Q19(e7, r36);
    case m5.ZodMap:
      return U20(e7, r36);
    case m5.ZodSet:
      return ee8(e7, r36);
    case m5.ZodLazy:
      return () => e7.getter()._def;
    case m5.ZodPromise:
      return Y11(e7, r36);
    case m5.ZodNaN:
    case m5.ZodNever:
      return V18(r36);
    case m5.ZodEffects:
      return z17(e7, r36);
    case m5.ZodAny:
      return l18(r36);
    case m5.ZodUnknown:
      return ne6(r36);
    case m5.ZodDefault:
      return R12(e7, r36);
    case m5.ZodBranded:
      return P20(e7, r36);
    case m5.ZodReadonly:
      return ae7(e7, r36);
    case m5.ZodCatch:
      return E19(e7, r36);
    case m5.ZodPipeline:
      return X14(e7, r36);
    case m5.ZodFunction:
    case m5.ZodVoid:
    case m5.ZodSymbol:
      return;
    default:
      return /* @__PURE__ */ ((n8) => {
      })(t4);
  }
};
function o14(e7, t4, r36 = false) {
  let n8 = t4.seen.get(e7);
  if (t4.override) {
    let c14 = t4.override?.(e7, t4, n8, r36);
    if (c14 !== T18) return c14;
  }
  if (n8 && !r36) {
    let c14 = de6(n8, t4);
    if (c14 !== void 0) return c14;
  }
  let a8 = { def: e7, path: t4.currentPath, jsonSchema: void 0 };
  t4.seen.set(e7, a8);
  let i10 = oe6(e7, e7.typeName, t4), m20 = typeof i10 == "function" ? o14(i10(), t4) : i10;
  if (m20 && ge6(e7, t4, m20), t4.postProcess) {
    let c14 = t4.postProcess(m20, e7, t4);
    return a8.jsonSchema = m20, c14;
  }
  return a8.jsonSchema = m20, m20;
}
var de6 = (e7, t4) => {
  switch (t4.$refStrategy) {
    case "root":
      return { $ref: e7.path.join("/") };
    case "relative":
      return { $ref: A22(t4.currentPath, e7.path) };
    case "none":
    case "seen":
      return e7.path.length < t4.currentPath.length && e7.path.every((r36, n8) => t4.currentPath[n8] === r36) ? (console.warn(`Recursive reference detected at ${t4.currentPath.join("/")}! Defaulting to any`), l18(t4)) : t4.$refStrategy === "seen" ? l18(t4) : void 0;
  }
};
var ge6 = (e7, t4, r36) => (e7.description && (r36.description = e7.description, t4.markdownDescription && (r36.markdownDescription = e7.description)), r36);
var ie6 = (e7, t4) => {
  let r36 = j23(t4), n8 = typeof t4 == "object" && t4.definitions ? Object.entries(t4.definitions).reduce((s9, [y18, x24]) => ({ ...s9, [y18]: o14(x24._def, { ...r36, currentPath: [...r36.basePath, r36.definitionPath, y18] }, true) ?? l18(r36) }), {}) : void 0, a8 = typeof t4 == "string" ? t4 : t4?.nameStrategy === "title" ? void 0 : t4?.name, i10 = o14(e7._def, a8 === void 0 ? r36 : { ...r36, currentPath: [...r36.basePath, r36.definitionPath, a8] }, false) ?? l18(r36), m20 = typeof t4 == "object" && t4.name !== void 0 && t4.nameStrategy === "title" ? t4.name : void 0;
  m20 !== void 0 && (i10.title = m20), r36.flags.hasReferencedOpenAiAnyType && (n8 || (n8 = {}), n8[r36.openAiAnyTypeName] || (n8[r36.openAiAnyTypeName] = { type: ["string", "number", "integer", "boolean", "array", "null"], items: { $ref: r36.$refStrategy === "relative" ? "1" : [...r36.basePath, r36.definitionPath, r36.openAiAnyTypeName].join("/") } }));
  let c14 = a8 === void 0 ? n8 ? { ...i10, [r36.definitionPath]: n8 } : i10 : { $ref: [...r36.$refStrategy === "relative" ? [] : r36.basePath, r36.definitionPath, a8].join("/"), [r36.definitionPath]: { ...n8, [a8]: i10 } };
  return r36.target === "jsonSchema7" ? c14.$schema = "http://json-schema.org/draft-07/schema#" : (r36.target === "jsonSchema2019-09" || r36.target === "openAi") && (c14.$schema = "https://json-schema.org/draft/2019-09/schema#"), r36.target === "openAi" && ("anyOf" in c14 || "oneOf" in c14 || "allOf" in c14 || "type" in c14 && Array.isArray(c14.type)) && console.warn("Warning: OpenAI may not support schemas with unions as roots! Try wrapping it in an object property."), c14;
};
var Dr2 = ie6;

// https://esm.sh/@ai-sdk/ui-utils@1.2.11/denonext/ui-utils.mjs
var A23 = { code: "0", name: "text", parse: (t4) => {
  if (typeof t4 != "string") throw new Error('"text" parts expect a string value.');
  return { type: "text", value: t4 };
} };
var N16 = { code: "3", name: "error", parse: (t4) => {
  if (typeof t4 != "string") throw new Error('"error" parts expect a string value.');
  return { type: "error", value: t4 };
} };
var R13 = { code: "4", name: "assistant_message", parse: (t4) => {
  if (t4 == null || typeof t4 != "object" || !("id" in t4) || !("role" in t4) || !("content" in t4) || typeof t4.id != "string" || typeof t4.role != "string" || t4.role !== "assistant" || !Array.isArray(t4.content) || !t4.content.every((e7) => e7 != null && typeof e7 == "object" && "type" in e7 && e7.type === "text" && "text" in e7 && e7.text != null && typeof e7.text == "object" && "value" in e7.text && typeof e7.text.value == "string")) throw new Error('"assistant_message" parts expect an object with an "id", "role", and "content" property.');
  return { type: "assistant_message", value: t4 };
} };
var x22 = { code: "5", name: "assistant_control_data", parse: (t4) => {
  if (t4 == null || typeof t4 != "object" || !("threadId" in t4) || !("messageId" in t4) || typeof t4.threadId != "string" || typeof t4.messageId != "string") throw new Error('"assistant_control_data" parts expect an object with a "threadId" and "messageId" property.');
  return { type: "assistant_control_data", value: { threadId: t4.threadId, messageId: t4.messageId } };
} };
var C23 = { code: "6", name: "data_message", parse: (t4) => {
  if (t4 == null || typeof t4 != "object" || !("role" in t4) || !("data" in t4) || typeof t4.role != "string" || t4.role !== "data") throw new Error('"data_message" parts expect an object with a "role" and "data" property.');
  return { type: "data_message", value: t4 };
} };
var J19 = [A23, N16, R13, x22, C23];
var j24 = { [A23.code]: A23, [N16.code]: N16, [R13.code]: R13, [x22.code]: x22, [C23.code]: C23 };
var Ct6 = { [A23.name]: A23.code, [N16.name]: N16.code, [R13.name]: R13.code, [x22.name]: x22.code, [C23.name]: C23.code };
var M22 = J19.map((t4) => t4.code);
function W17(t4) {
  let e7 = ["ROOT"], a8 = -1, o15 = null;
  function n8(s9, i10, d24) {
    switch (s9) {
      case '"': {
        a8 = i10, e7.pop(), e7.push(d24), e7.push("INSIDE_STRING");
        break;
      }
      case "f":
      case "t":
      case "n": {
        a8 = i10, o15 = i10, e7.pop(), e7.push(d24), e7.push("INSIDE_LITERAL");
        break;
      }
      case "-": {
        e7.pop(), e7.push(d24), e7.push("INSIDE_NUMBER");
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
        a8 = i10, e7.pop(), e7.push(d24), e7.push("INSIDE_NUMBER");
        break;
      }
      case "{": {
        a8 = i10, e7.pop(), e7.push(d24), e7.push("INSIDE_OBJECT_START");
        break;
      }
      case "[": {
        a8 = i10, e7.pop(), e7.push(d24), e7.push("INSIDE_ARRAY_START");
        break;
      }
    }
  }
  function c14(s9, i10) {
    switch (s9) {
      case ",": {
        e7.pop(), e7.push("INSIDE_OBJECT_AFTER_COMMA");
        break;
      }
      case "}": {
        a8 = i10, e7.pop();
        break;
      }
    }
  }
  function f14(s9, i10) {
    switch (s9) {
      case ",": {
        e7.pop(), e7.push("INSIDE_ARRAY_AFTER_COMMA");
        break;
      }
      case "]": {
        a8 = i10, e7.pop();
        break;
      }
    }
  }
  for (let s9 = 0; s9 < t4.length; s9++) {
    let i10 = t4[s9];
    switch (e7[e7.length - 1]) {
      case "ROOT":
        n8(i10, s9, "FINISH");
        break;
      case "INSIDE_OBJECT_START": {
        switch (i10) {
          case '"': {
            e7.pop(), e7.push("INSIDE_OBJECT_KEY");
            break;
          }
          case "}": {
            a8 = s9, e7.pop();
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_AFTER_COMMA": {
        switch (i10) {
          case '"': {
            e7.pop(), e7.push("INSIDE_OBJECT_KEY");
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_KEY": {
        switch (i10) {
          case '"': {
            e7.pop(), e7.push("INSIDE_OBJECT_AFTER_KEY");
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_AFTER_KEY": {
        switch (i10) {
          case ":": {
            e7.pop(), e7.push("INSIDE_OBJECT_BEFORE_VALUE");
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_BEFORE_VALUE": {
        n8(i10, s9, "INSIDE_OBJECT_AFTER_VALUE");
        break;
      }
      case "INSIDE_OBJECT_AFTER_VALUE": {
        c14(i10, s9);
        break;
      }
      case "INSIDE_STRING": {
        switch (i10) {
          case '"': {
            e7.pop(), a8 = s9;
            break;
          }
          case "\\": {
            e7.push("INSIDE_STRING_ESCAPE");
            break;
          }
          default:
            a8 = s9;
        }
        break;
      }
      case "INSIDE_ARRAY_START": {
        switch (i10) {
          case "]": {
            a8 = s9, e7.pop();
            break;
          }
          default: {
            a8 = s9, n8(i10, s9, "INSIDE_ARRAY_AFTER_VALUE");
            break;
          }
        }
        break;
      }
      case "INSIDE_ARRAY_AFTER_VALUE": {
        switch (i10) {
          case ",": {
            e7.pop(), e7.push("INSIDE_ARRAY_AFTER_COMMA");
            break;
          }
          case "]": {
            a8 = s9, e7.pop();
            break;
          }
          default: {
            a8 = s9;
            break;
          }
        }
        break;
      }
      case "INSIDE_ARRAY_AFTER_COMMA": {
        n8(i10, s9, "INSIDE_ARRAY_AFTER_VALUE");
        break;
      }
      case "INSIDE_STRING_ESCAPE": {
        e7.pop(), a8 = s9;
        break;
      }
      case "INSIDE_NUMBER": {
        switch (i10) {
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
            a8 = s9;
            break;
          }
          case "e":
          case "E":
          case "-":
          case ".":
            break;
          case ",": {
            e7.pop(), e7[e7.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && f14(i10, s9), e7[e7.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" && c14(i10, s9);
            break;
          }
          case "}": {
            e7.pop(), e7[e7.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" && c14(i10, s9);
            break;
          }
          case "]": {
            e7.pop(), e7[e7.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && f14(i10, s9);
            break;
          }
          default: {
            e7.pop();
            break;
          }
        }
        break;
      }
      case "INSIDE_LITERAL": {
        let l20 = t4.substring(o15, s9 + 1);
        !"false".startsWith(l20) && !"true".startsWith(l20) && !"null".startsWith(l20) ? (e7.pop(), e7[e7.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" ? c14(i10, s9) : e7[e7.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && f14(i10, s9)) : a8 = s9;
        break;
      }
    }
  }
  let p15 = t4.slice(0, a8 + 1);
  for (let s9 = e7.length - 1; s9 >= 0; s9--) switch (e7[s9]) {
    case "INSIDE_STRING": {
      p15 += '"';
      break;
    }
    case "INSIDE_OBJECT_KEY":
    case "INSIDE_OBJECT_AFTER_KEY":
    case "INSIDE_OBJECT_AFTER_COMMA":
    case "INSIDE_OBJECT_START":
    case "INSIDE_OBJECT_BEFORE_VALUE":
    case "INSIDE_OBJECT_AFTER_VALUE": {
      p15 += "}";
      break;
    }
    case "INSIDE_ARRAY_START":
    case "INSIDE_ARRAY_AFTER_COMMA":
    case "INSIDE_ARRAY_AFTER_VALUE": {
      p15 += "]";
      break;
    }
    case "INSIDE_LITERAL": {
      let d24 = t4.substring(o15, t4.length);
      "true".startsWith(d24) ? p15 += "true".slice(d24.length) : "false".startsWith(d24) ? p15 += "false".slice(d24.length) : "null".startsWith(d24) && (p15 += "null".slice(d24.length));
    }
  }
  return p15;
}
function K19(t4) {
  if (t4 === void 0) return { value: void 0, state: "undefined-input" };
  let e7 = S3({ text: t4 });
  return e7.success ? { value: e7.value, state: "successful-parse" } : (e7 = S3({ text: W17(t4) }), e7.success ? { value: e7.value, state: "repaired-parse" } : { value: void 0, state: "failed-parse" });
}
var G18 = { code: "0", name: "text", parse: (t4) => {
  if (typeof t4 != "string") throw new Error('"text" parts expect a string value.');
  return { type: "text", value: t4 };
} };
var q20 = { code: "2", name: "data", parse: (t4) => {
  if (!Array.isArray(t4)) throw new Error('"data" parts expect an array value.');
  return { type: "data", value: t4 };
} };
var z18 = { code: "3", name: "error", parse: (t4) => {
  if (typeof t4 != "string") throw new Error('"error" parts expect a string value.');
  return { type: "error", value: t4 };
} };
var H18 = { code: "8", name: "message_annotations", parse: (t4) => {
  if (!Array.isArray(t4)) throw new Error('"message_annotations" parts expect an array value.');
  return { type: "message_annotations", value: t4 };
} };
var Q20 = { code: "9", name: "tool_call", parse: (t4) => {
  if (t4 == null || typeof t4 != "object" || !("toolCallId" in t4) || typeof t4.toolCallId != "string" || !("toolName" in t4) || typeof t4.toolName != "string" || !("args" in t4) || typeof t4.args != "object") throw new Error('"tool_call" parts expect an object with a "toolCallId", "toolName", and "args" property.');
  return { type: "tool_call", value: t4 };
} };
var X15 = { code: "a", name: "tool_result", parse: (t4) => {
  if (t4 == null || typeof t4 != "object" || !("toolCallId" in t4) || typeof t4.toolCallId != "string" || !("result" in t4)) throw new Error('"tool_result" parts expect an object with a "toolCallId" and a "result" property.');
  return { type: "tool_result", value: t4 };
} };
var Z15 = { code: "b", name: "tool_call_streaming_start", parse: (t4) => {
  if (t4 == null || typeof t4 != "object" || !("toolCallId" in t4) || typeof t4.toolCallId != "string" || !("toolName" in t4) || typeof t4.toolName != "string") throw new Error('"tool_call_streaming_start" parts expect an object with a "toolCallId" and "toolName" property.');
  return { type: "tool_call_streaming_start", value: t4 };
} };
var tt8 = { code: "c", name: "tool_call_delta", parse: (t4) => {
  if (t4 == null || typeof t4 != "object" || !("toolCallId" in t4) || typeof t4.toolCallId != "string" || !("argsTextDelta" in t4) || typeof t4.argsTextDelta != "string") throw new Error('"tool_call_delta" parts expect an object with a "toolCallId" and "argsTextDelta" property.');
  return { type: "tool_call_delta", value: t4 };
} };
var et7 = { code: "d", name: "finish_message", parse: (t4) => {
  if (t4 == null || typeof t4 != "object" || !("finishReason" in t4) || typeof t4.finishReason != "string") throw new Error('"finish_message" parts expect an object with a "finishReason" property.');
  let e7 = { finishReason: t4.finishReason };
  return "usage" in t4 && t4.usage != null && typeof t4.usage == "object" && "promptTokens" in t4.usage && "completionTokens" in t4.usage && (e7.usage = { promptTokens: typeof t4.usage.promptTokens == "number" ? t4.usage.promptTokens : Number.NaN, completionTokens: typeof t4.usage.completionTokens == "number" ? t4.usage.completionTokens : Number.NaN }), { type: "finish_message", value: e7 };
} };
var at7 = { code: "e", name: "finish_step", parse: (t4) => {
  if (t4 == null || typeof t4 != "object" || !("finishReason" in t4) || typeof t4.finishReason != "string") throw new Error('"finish_step" parts expect an object with a "finishReason" property.');
  let e7 = { finishReason: t4.finishReason, isContinued: false };
  return "usage" in t4 && t4.usage != null && typeof t4.usage == "object" && "promptTokens" in t4.usage && "completionTokens" in t4.usage && (e7.usage = { promptTokens: typeof t4.usage.promptTokens == "number" ? t4.usage.promptTokens : Number.NaN, completionTokens: typeof t4.usage.completionTokens == "number" ? t4.usage.completionTokens : Number.NaN }), "isContinued" in t4 && typeof t4.isContinued == "boolean" && (e7.isContinued = t4.isContinued), { type: "finish_step", value: e7 };
} };
var rt7 = { code: "f", name: "start_step", parse: (t4) => {
  if (t4 == null || typeof t4 != "object" || !("messageId" in t4) || typeof t4.messageId != "string") throw new Error('"start_step" parts expect an object with an "id" property.');
  return { type: "start_step", value: { messageId: t4.messageId } };
} };
var ot6 = { code: "g", name: "reasoning", parse: (t4) => {
  if (typeof t4 != "string") throw new Error('"reasoning" parts expect a string value.');
  return { type: "reasoning", value: t4 };
} };
var nt6 = { code: "h", name: "source", parse: (t4) => {
  if (t4 == null || typeof t4 != "object") throw new Error('"source" parts expect a Source object.');
  return { type: "source", value: t4 };
} };
var st7 = { code: "i", name: "redacted_reasoning", parse: (t4) => {
  if (t4 == null || typeof t4 != "object" || !("data" in t4) || typeof t4.data != "string") throw new Error('"redacted_reasoning" parts expect an object with a "data" property.');
  return { type: "redacted_reasoning", value: { data: t4.data } };
} };
var it6 = { code: "j", name: "reasoning_signature", parse: (t4) => {
  if (t4 == null || typeof t4 != "object" || !("signature" in t4) || typeof t4.signature != "string") throw new Error('"reasoning_signature" parts expect an object with a "signature" property.');
  return { type: "reasoning_signature", value: { signature: t4.signature } };
} };
var ct8 = { code: "k", name: "file", parse: (t4) => {
  if (t4 == null || typeof t4 != "object" || !("data" in t4) || typeof t4.data != "string" || !("mimeType" in t4) || typeof t4.mimeType != "string") throw new Error('"file" parts expect an object with a "data" and "mimeType" property.');
  return { type: "file", value: t4 };
} };
var D21 = [G18, q20, z18, H18, Q20, X15, Z15, tt8, et7, at7, rt7, ot6, nt6, st7, it6, ct8];
var lt7 = Object.fromEntries(D21.map((t4) => [t4.code, t4]));
var Pt6 = Object.fromEntries(D21.map((t4) => [t4.name, t4.code]));
var pt6 = D21.map((t4) => t4.code);
function Lt5(t4, e7) {
  let a8 = D21.find((o15) => o15.name === t4);
  if (!a8) throw new Error(`Invalid stream part type: ${t4}`);
  return `${a8.code}:${JSON.stringify(e7)}
`;
}
function bt6(t4, e7) {
  var a8;
  let o15 = (a8 = e7?.useReferences) != null ? a8 : false;
  return kt5(Dr2(t4, { $refStrategy: o15 ? "root" : "none", target: "jsonSchema7" }), { validate: (n8) => {
    let c14 = t4.safeParse(n8);
    return c14.success ? { success: true, value: c14.data } : { success: false, error: c14.error };
  } });
}
var O17 = Symbol.for("vercel.ai.schema");
function kt5(t4, { validate: e7 } = {}) {
  return { [O17]: true, _type: void 0, [T2]: true, jsonSchema: t4, validate: e7 };
}
function At6(t4) {
  return typeof t4 == "object" && t4 !== null && O17 in t4 && t4[O17] === true && "jsonSchema" in t4 && "validate" in t4;
}
function Wt5(t4) {
  return At6(t4) ? t4 : bt6(t4);
}

// https://esm.sh/@opentelemetry/api@1.9.0/denonext/api.mjs
var nt7 = globalThis;
var _16 = "1.9.0";
var ot7 = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
function Lt6(t4) {
  var r36 = /* @__PURE__ */ new Set([t4]), e7 = /* @__PURE__ */ new Set(), n8 = t4.match(ot7);
  if (!n8) return function() {
    return false;
  };
  var a8 = { major: +n8[1], minor: +n8[2], patch: +n8[3], prerelease: n8[4] };
  if (a8.prerelease != null) return function(p15) {
    return p15 === t4;
  };
  function o15(u17) {
    return e7.add(u17), false;
  }
  function i10(u17) {
    return r36.add(u17), true;
  }
  return function(p15) {
    if (r36.has(p15)) return true;
    if (e7.has(p15)) return false;
    var s9 = p15.match(ot7);
    if (!s9) return o15(p15);
    var g21 = { major: +s9[1], minor: +s9[2], patch: +s9[3], prerelease: s9[4] };
    return g21.prerelease != null || a8.major !== g21.major ? o15(p15) : a8.major === 0 ? a8.minor === g21.minor && a8.patch <= g21.patch ? i10(p15) : o15(p15) : a8.minor <= g21.minor ? i10(p15) : o15(p15);
  };
}
var at8 = Lt6(_16);
var Ut4 = _16.split(".")[0];
var x23 = Symbol.for("opentelemetry.js.api." + Ut4);
var E20 = nt7;
function v15(t4, r36, e7, n8) {
  var a8;
  n8 === void 0 && (n8 = false);
  var o15 = E20[x23] = (a8 = E20[x23]) !== null && a8 !== void 0 ? a8 : { version: _16 };
  if (!n8 && o15[t4]) {
    var i10 = new Error("@opentelemetry/api: Attempted duplicate registration of API: " + t4);
    return e7.error(i10.stack || i10.message), false;
  }
  if (o15.version !== _16) {
    var i10 = new Error("@opentelemetry/api: Registration of version v" + o15.version + " for " + t4 + " does not match previously registered API v" + _16);
    return e7.error(i10.stack || i10.message), false;
  }
  return o15[t4] = r36, e7.debug("@opentelemetry/api: Registered a global for " + t4 + " v" + _16 + "."), true;
}
function l19(t4) {
  var r36, e7, n8 = (r36 = E20[x23]) === null || r36 === void 0 ? void 0 : r36.version;
  if (!(!n8 || !at8(n8))) return (e7 = E20[x23]) === null || e7 === void 0 ? void 0 : e7[t4];
}
function m19(t4, r36) {
  r36.debug("@opentelemetry/api: Unregistering a global for " + t4 + " v" + _16 + ".");
  var e7 = E20[x23];
  e7 && delete e7[t4];
}
var jt4 = function(t4, r36) {
  var e7 = typeof Symbol == "function" && t4[Symbol.iterator];
  if (!e7) return t4;
  var n8 = e7.call(t4), a8, o15 = [], i10;
  try {
    for (; (r36 === void 0 || r36-- > 0) && !(a8 = n8.next()).done; ) o15.push(a8.value);
  } catch (u17) {
    i10 = { error: u17 };
  } finally {
    try {
      a8 && !a8.done && (e7 = n8.return) && e7.call(n8);
    } finally {
      if (i10) throw i10.error;
    }
  }
  return o15;
};
var kt6 = function(t4, r36, e7) {
  if (e7 || arguments.length === 2) for (var n8 = 0, a8 = r36.length, o15; n8 < a8; n8++) (o15 || !(n8 in r36)) && (o15 || (o15 = Array.prototype.slice.call(r36, 0, n8)), o15[n8] = r36[n8]);
  return t4.concat(o15 || Array.prototype.slice.call(r36));
};
var it7 = function() {
  function t4(r36) {
    this._namespace = r36.namespace || "DiagComponentLogger";
  }
  return t4.prototype.debug = function() {
    for (var r36 = [], e7 = 0; e7 < arguments.length; e7++) r36[e7] = arguments[e7];
    return A24("debug", this._namespace, r36);
  }, t4.prototype.error = function() {
    for (var r36 = [], e7 = 0; e7 < arguments.length; e7++) r36[e7] = arguments[e7];
    return A24("error", this._namespace, r36);
  }, t4.prototype.info = function() {
    for (var r36 = [], e7 = 0; e7 < arguments.length; e7++) r36[e7] = arguments[e7];
    return A24("info", this._namespace, r36);
  }, t4.prototype.warn = function() {
    for (var r36 = [], e7 = 0; e7 < arguments.length; e7++) r36[e7] = arguments[e7];
    return A24("warn", this._namespace, r36);
  }, t4.prototype.verbose = function() {
    for (var r36 = [], e7 = 0; e7 < arguments.length; e7++) r36[e7] = arguments[e7];
    return A24("verbose", this._namespace, r36);
  }, t4;
}();
function A24(t4, r36, e7) {
  var n8 = l19("diag");
  if (n8) return e7.unshift(r36), n8[t4].apply(n8, kt6([], jt4(e7), false));
}
var c13;
(function(t4) {
  t4[t4.NONE = 0] = "NONE", t4[t4.ERROR = 30] = "ERROR", t4[t4.WARN = 50] = "WARN", t4[t4.INFO = 60] = "INFO", t4[t4.DEBUG = 70] = "DEBUG", t4[t4.VERBOSE = 80] = "VERBOSE", t4[t4.ALL = 9999] = "ALL";
})(c13 || (c13 = {}));
function ut6(t4, r36) {
  t4 < c13.NONE ? t4 = c13.NONE : t4 > c13.ALL && (t4 = c13.ALL), r36 = r36 || {};
  function e7(n8, a8) {
    var o15 = r36[n8];
    return typeof o15 == "function" && t4 >= a8 ? o15.bind(r36) : function() {
    };
  }
  return { error: e7("error", c13.ERROR), warn: e7("warn", c13.WARN), info: e7("info", c13.INFO), debug: e7("debug", c13.DEBUG), verbose: e7("verbose", c13.VERBOSE) };
}
var Xt2 = function(t4, r36) {
  var e7 = typeof Symbol == "function" && t4[Symbol.iterator];
  if (!e7) return t4;
  var n8 = e7.call(t4), a8, o15 = [], i10;
  try {
    for (; (r36 === void 0 || r36-- > 0) && !(a8 = n8.next()).done; ) o15.push(a8.value);
  } catch (u17) {
    i10 = { error: u17 };
  } finally {
    try {
      a8 && !a8.done && (e7 = n8.return) && e7.call(n8);
    } finally {
      if (i10) throw i10.error;
    }
  }
  return o15;
};
var Kt3 = function(t4, r36, e7) {
  if (e7 || arguments.length === 2) for (var n8 = 0, a8 = r36.length, o15; n8 < a8; n8++) (o15 || !(n8 in r36)) && (o15 || (o15 = Array.prototype.slice.call(r36, 0, n8)), o15[n8] = r36[n8]);
  return t4.concat(o15 || Array.prototype.slice.call(r36));
};
var Ft5 = "diag";
var f13 = function() {
  function t4() {
    function r36(a8) {
      return function() {
        for (var o15 = [], i10 = 0; i10 < arguments.length; i10++) o15[i10] = arguments[i10];
        var u17 = l19("diag");
        if (u17) return u17[a8].apply(u17, Kt3([], Xt2(o15), false));
      };
    }
    var e7 = this, n8 = function(a8, o15) {
      var i10, u17, p15;
      if (o15 === void 0 && (o15 = { logLevel: c13.INFO }), a8 === e7) {
        var s9 = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
        return e7.error((i10 = s9.stack) !== null && i10 !== void 0 ? i10 : s9.message), false;
      }
      typeof o15 == "number" && (o15 = { logLevel: o15 });
      var g21 = l19("diag"), rt8 = ut6((u17 = o15.logLevel) !== null && u17 !== void 0 ? u17 : c13.INFO, a8);
      if (g21 && !o15.suppressOverrideMessage) {
        var et8 = (p15 = new Error().stack) !== null && p15 !== void 0 ? p15 : "<failed to generate stacktrace>";
        g21.warn("Current logger will be overwritten from " + et8), rt8.warn("Current logger will overwrite one already registered from " + et8);
      }
      return v15("diag", rt8, e7, true);
    };
    e7.setLogger = n8, e7.disable = function() {
      m19(Ft5, e7);
    }, e7.createComponentLogger = function(a8) {
      return new it7(a8);
    }, e7.verbose = r36("verbose"), e7.debug = r36("debug"), e7.info = r36("info"), e7.warn = r36("warn"), e7.error = r36("error");
  }
  return t4.instance = function() {
    return this._instance || (this._instance = new t4()), this._instance;
  }, t4;
}();
var Yt2 = function(t4, r36) {
  var e7 = typeof Symbol == "function" && t4[Symbol.iterator];
  if (!e7) return t4;
  var n8 = e7.call(t4), a8, o15 = [], i10;
  try {
    for (; (r36 === void 0 || r36-- > 0) && !(a8 = n8.next()).done; ) o15.push(a8.value);
  } catch (u17) {
    i10 = { error: u17 };
  } finally {
    try {
      a8 && !a8.done && (e7 = n8.return) && e7.call(n8);
    } finally {
      if (i10) throw i10.error;
    }
  }
  return o15;
};
var zt6 = function(t4) {
  var r36 = typeof Symbol == "function" && Symbol.iterator, e7 = r36 && t4[r36], n8 = 0;
  if (e7) return e7.call(t4);
  if (t4 && typeof t4.length == "number") return { next: function() {
    return t4 && n8 >= t4.length && (t4 = void 0), { value: t4 && t4[n8++], done: !t4 };
  } };
  throw new TypeError(r36 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var pt7 = function() {
  function t4(r36) {
    this._entries = r36 ? new Map(r36) : /* @__PURE__ */ new Map();
  }
  return t4.prototype.getEntry = function(r36) {
    var e7 = this._entries.get(r36);
    if (e7) return Object.assign({}, e7);
  }, t4.prototype.getAllEntries = function() {
    return Array.from(this._entries.entries()).map(function(r36) {
      var e7 = Yt2(r36, 2), n8 = e7[0], a8 = e7[1];
      return [n8, a8];
    });
  }, t4.prototype.setEntry = function(r36, e7) {
    var n8 = new t4(this._entries);
    return n8._entries.set(r36, e7), n8;
  }, t4.prototype.removeEntry = function(r36) {
    var e7 = new t4(this._entries);
    return e7._entries.delete(r36), e7;
  }, t4.prototype.removeEntries = function() {
    for (var r36, e7, n8 = [], a8 = 0; a8 < arguments.length; a8++) n8[a8] = arguments[a8];
    var o15 = new t4(this._entries);
    try {
      for (var i10 = zt6(n8), u17 = i10.next(); !u17.done; u17 = i10.next()) {
        var p15 = u17.value;
        o15._entries.delete(p15);
      }
    } catch (s9) {
      r36 = { error: s9 };
    } finally {
      try {
        u17 && !u17.done && (e7 = i10.return) && e7.call(i10);
      } finally {
        if (r36) throw r36.error;
      }
    }
    return o15;
  }, t4.prototype.clear = function() {
    return new t4();
  }, t4;
}();
var ct9 = Symbol("BaggageEntryMetadata");
var Wt6 = f13.instance();
function ft6(t4) {
  return t4 === void 0 && (t4 = {}), new pt7(new Map(Object.entries(t4)));
}
function N17(t4) {
  return Symbol.for(t4);
}
var $t5 = /* @__PURE__ */ function() {
  function t4(r36) {
    var e7 = this;
    e7._currentContext = r36 ? new Map(r36) : /* @__PURE__ */ new Map(), e7.getValue = function(n8) {
      return e7._currentContext.get(n8);
    }, e7.setValue = function(n8, a8) {
      var o15 = new t4(e7._currentContext);
      return o15._currentContext.set(n8, a8), o15;
    }, e7.deleteValue = function(n8) {
      var a8 = new t4(e7._currentContext);
      return a8._currentContext.delete(n8), a8;
    };
  }
  return t4;
}();
var D22 = new $t5();
var h23 = /* @__PURE__ */ function() {
  var t4 = function(r36, e7) {
    return t4 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n8, a8) {
      n8.__proto__ = a8;
    } || function(n8, a8) {
      for (var o15 in a8) Object.prototype.hasOwnProperty.call(a8, o15) && (n8[o15] = a8[o15]);
    }, t4(r36, e7);
  };
  return function(r36, e7) {
    if (typeof e7 != "function" && e7 !== null) throw new TypeError("Class extends value " + String(e7) + " is not a constructor or null");
    t4(r36, e7);
    function n8() {
      this.constructor = r36;
    }
    r36.prototype = e7 === null ? Object.create(e7) : (n8.prototype = e7.prototype, new n8());
  };
}();
var qt4 = function() {
  function t4() {
  }
  return t4.prototype.createGauge = function(r36, e7) {
    return ir5;
  }, t4.prototype.createHistogram = function(r36, e7) {
    return ur5;
  }, t4.prototype.createCounter = function(r36, e7) {
    return ar5;
  }, t4.prototype.createUpDownCounter = function(r36, e7) {
    return pr5;
  }, t4.prototype.createObservableGauge = function(r36, e7) {
    return fr5;
  }, t4.prototype.createObservableCounter = function(r36, e7) {
    return cr4;
  }, t4.prototype.createObservableUpDownCounter = function(r36, e7) {
    return sr4;
  }, t4.prototype.addBatchObservableCallback = function(r36, e7) {
  }, t4.prototype.removeBatchObservableCallback = function(r36) {
  }, t4;
}();
var O18 = /* @__PURE__ */ function() {
  function t4() {
  }
  return t4;
}();
var Jt3 = function(t4) {
  h23(r36, t4);
  function r36() {
    return t4 !== null && t4.apply(this, arguments) || this;
  }
  return r36.prototype.add = function(e7, n8) {
  }, r36;
}(O18);
var Zt4 = function(t4) {
  h23(r36, t4);
  function r36() {
    return t4 !== null && t4.apply(this, arguments) || this;
  }
  return r36.prototype.add = function(e7, n8) {
  }, r36;
}(O18);
var tr4 = function(t4) {
  h23(r36, t4);
  function r36() {
    return t4 !== null && t4.apply(this, arguments) || this;
  }
  return r36.prototype.record = function(e7, n8) {
  }, r36;
}(O18);
var rr2 = function(t4) {
  h23(r36, t4);
  function r36() {
    return t4 !== null && t4.apply(this, arguments) || this;
  }
  return r36.prototype.record = function(e7, n8) {
  }, r36;
}(O18);
var V19 = function() {
  function t4() {
  }
  return t4.prototype.addCallback = function(r36) {
  }, t4.prototype.removeCallback = function(r36) {
  }, t4;
}();
var er5 = function(t4) {
  h23(r36, t4);
  function r36() {
    return t4 !== null && t4.apply(this, arguments) || this;
  }
  return r36;
}(V19);
var nr4 = function(t4) {
  h23(r36, t4);
  function r36() {
    return t4 !== null && t4.apply(this, arguments) || this;
  }
  return r36;
}(V19);
var or5 = function(t4) {
  h23(r36, t4);
  function r36() {
    return t4 !== null && t4.apply(this, arguments) || this;
  }
  return r36;
}(V19);
var B21 = new qt4();
var ar5 = new Jt3();
var ir5 = new tr4();
var ur5 = new rr2();
var pr5 = new Zt4();
var cr4 = new er5();
var fr5 = new nr4();
var sr4 = new or5();
var L20;
(function(t4) {
  t4[t4.INT = 0] = "INT", t4[t4.DOUBLE = 1] = "DOUBLE";
})(L20 || (L20 = {}));
var U21 = { get: function(t4, r36) {
  if (t4 != null) return t4[r36];
}, keys: function(t4) {
  return t4 == null ? [] : Object.keys(t4);
} };
var j25 = { set: function(t4, r36, e7) {
  t4 != null && (t4[r36] = e7);
} };
var gr7 = function(t4, r36) {
  var e7 = typeof Symbol == "function" && t4[Symbol.iterator];
  if (!e7) return t4;
  var n8 = e7.call(t4), a8, o15 = [], i10;
  try {
    for (; (r36 === void 0 || r36-- > 0) && !(a8 = n8.next()).done; ) o15.push(a8.value);
  } catch (u17) {
    i10 = { error: u17 };
  } finally {
    try {
      a8 && !a8.done && (e7 = n8.return) && e7.call(n8);
    } finally {
      if (i10) throw i10.error;
    }
  }
  return o15;
};
var vr4 = function(t4, r36, e7) {
  if (e7 || arguments.length === 2) for (var n8 = 0, a8 = r36.length, o15; n8 < a8; n8++) (o15 || !(n8 in r36)) && (o15 || (o15 = Array.prototype.slice.call(r36, 0, n8)), o15[n8] = r36[n8]);
  return t4.concat(o15 || Array.prototype.slice.call(r36));
};
var st8 = function() {
  function t4() {
  }
  return t4.prototype.active = function() {
    return D22;
  }, t4.prototype.with = function(r36, e7, n8) {
    for (var a8 = [], o15 = 3; o15 < arguments.length; o15++) a8[o15 - 3] = arguments[o15];
    return e7.call.apply(e7, vr4([n8], gr7(a8), false));
  }, t4.prototype.bind = function(r36, e7) {
    return e7;
  }, t4.prototype.enable = function() {
    return this;
  }, t4.prototype.disable = function() {
    return this;
  }, t4;
}();
var mr5 = function(t4, r36) {
  var e7 = typeof Symbol == "function" && t4[Symbol.iterator];
  if (!e7) return t4;
  var n8 = e7.call(t4), a8, o15 = [], i10;
  try {
    for (; (r36 === void 0 || r36-- > 0) && !(a8 = n8.next()).done; ) o15.push(a8.value);
  } catch (u17) {
    i10 = { error: u17 };
  } finally {
    try {
      a8 && !a8.done && (e7 = n8.return) && e7.call(n8);
    } finally {
      if (i10) throw i10.error;
    }
  }
  return o15;
};
var _r5 = function(t4, r36, e7) {
  if (e7 || arguments.length === 2) for (var n8 = 0, a8 = r36.length, o15; n8 < a8; n8++) (o15 || !(n8 in r36)) && (o15 || (o15 = Array.prototype.slice.call(r36, 0, n8)), o15[n8] = r36[n8]);
  return t4.concat(o15 || Array.prototype.slice.call(r36));
};
var k24 = "context";
var yr4 = new st8();
var y17 = function() {
  function t4() {
  }
  return t4.getInstance = function() {
    return this._instance || (this._instance = new t4()), this._instance;
  }, t4.prototype.setGlobalContextManager = function(r36) {
    return v15(k24, r36, f13.instance());
  }, t4.prototype.active = function() {
    return this._getContextManager().active();
  }, t4.prototype.with = function(r36, e7, n8) {
    for (var a8, o15 = [], i10 = 3; i10 < arguments.length; i10++) o15[i10 - 3] = arguments[i10];
    return (a8 = this._getContextManager()).with.apply(a8, _r5([r36, e7, n8], mr5(o15), false));
  }, t4.prototype.bind = function(r36, e7) {
    return this._getContextManager().bind(r36, e7);
  }, t4.prototype._getContextManager = function() {
    return l19(k24) || yr4;
  }, t4.prototype.disable = function() {
    this._getContextManager().disable(), m19(k24, f13.instance());
  }, t4;
}();
var b22;
(function(t4) {
  t4[t4.NONE = 0] = "NONE", t4[t4.SAMPLED = 1] = "SAMPLED";
})(b22 || (b22 = {}));
var P21 = "0000000000000000";
var C24 = "00000000000000000000000000000000";
var X16 = { traceId: C24, spanId: P21, traceFlags: b22.NONE };
var d23 = function() {
  function t4(r36) {
    r36 === void 0 && (r36 = X16), this._spanContext = r36;
  }
  return t4.prototype.spanContext = function() {
    return this._spanContext;
  }, t4.prototype.setAttribute = function(r36, e7) {
    return this;
  }, t4.prototype.setAttributes = function(r36) {
    return this;
  }, t4.prototype.addEvent = function(r36, e7) {
    return this;
  }, t4.prototype.addLink = function(r36) {
    return this;
  }, t4.prototype.addLinks = function(r36) {
    return this;
  }, t4.prototype.setStatus = function(r36) {
    return this;
  }, t4.prototype.updateName = function(r36) {
    return this;
  }, t4.prototype.end = function(r36) {
  }, t4.prototype.isRecording = function() {
    return false;
  }, t4.prototype.recordException = function(r36, e7) {
  }, t4;
}();
var K20 = N17("OpenTelemetry Context Key SPAN");
function S24(t4) {
  return t4.getValue(K20) || void 0;
}
function lt8() {
  return S24(y17.getInstance().active());
}
function T19(t4, r36) {
  return t4.setValue(K20, r36);
}
function gt5(t4) {
  return t4.deleteValue(K20);
}
function vt5(t4, r36) {
  return T19(t4, new d23(r36));
}
function R14(t4) {
  var r36;
  return (r36 = S24(t4)) === null || r36 === void 0 ? void 0 : r36.spanContext();
}
var dr5 = /^([0-9a-f]{32})$/i;
var hr5 = /^[0-9a-f]{16}$/i;
function mt5(t4) {
  return dr5.test(t4) && t4 !== C24;
}
function _t5(t4) {
  return hr5.test(t4) && t4 !== P21;
}
function I21(t4) {
  return mt5(t4.traceId) && _t5(t4.spanId);
}
function yt5(t4) {
  return new d23(t4);
}
var F22 = y17.getInstance();
var M23 = function() {
  function t4() {
  }
  return t4.prototype.startSpan = function(r36, e7, n8) {
    n8 === void 0 && (n8 = F22.active());
    var a8 = !!e7?.root;
    if (a8) return new d23();
    var o15 = n8 && R14(n8);
    return xr5(o15) && I21(o15) ? new d23(o15) : new d23();
  }, t4.prototype.startActiveSpan = function(r36, e7, n8, a8) {
    var o15, i10, u17;
    if (!(arguments.length < 2)) {
      arguments.length === 2 ? u17 = e7 : arguments.length === 3 ? (o15 = e7, u17 = n8) : (o15 = e7, i10 = n8, u17 = a8);
      var p15 = i10 ?? F22.active(), s9 = this.startSpan(r36, o15, p15), g21 = T19(p15, s9);
      return F22.with(g21, u17, void 0, s9);
    }
  }, t4;
}();
function xr5(t4) {
  return typeof t4 == "object" && typeof t4.spanId == "string" && typeof t4.traceId == "string" && typeof t4.traceFlags == "number";
}
var Er4 = new M23();
var Y12 = function() {
  function t4(r36, e7, n8, a8) {
    this._provider = r36, this.name = e7, this.version = n8, this.options = a8;
  }
  return t4.prototype.startSpan = function(r36, e7, n8) {
    return this._getTracer().startSpan(r36, e7, n8);
  }, t4.prototype.startActiveSpan = function(r36, e7, n8, a8) {
    var o15 = this._getTracer();
    return Reflect.apply(o15.startActiveSpan, o15, arguments);
  }, t4.prototype._getTracer = function() {
    if (this._delegate) return this._delegate;
    var r36 = this._provider.getDelegateTracer(this.name, this.version, this.options);
    return r36 ? (this._delegate = r36, this._delegate) : Er4;
  }, t4;
}();
var dt5 = function() {
  function t4() {
  }
  return t4.prototype.getTracer = function(r36, e7, n8) {
    return new M23();
  }, t4;
}();
var Ar4 = new dt5();
var w20 = function() {
  function t4() {
  }
  return t4.prototype.getTracer = function(r36, e7, n8) {
    var a8;
    return (a8 = this.getDelegateTracer(r36, e7, n8)) !== null && a8 !== void 0 ? a8 : new Y12(this, r36, e7, n8);
  }, t4.prototype.getDelegate = function() {
    var r36;
    return (r36 = this._delegate) !== null && r36 !== void 0 ? r36 : Ar4;
  }, t4.prototype.setDelegate = function(r36) {
    this._delegate = r36;
  }, t4.prototype.getDelegateTracer = function(r36, e7, n8) {
    var a8;
    return (a8 = this._delegate) === null || a8 === void 0 ? void 0 : a8.getTracer(r36, e7, n8);
  }, t4;
}();
var z19;
(function(t4) {
  t4[t4.NOT_RECORD = 0] = "NOT_RECORD", t4[t4.RECORD = 1] = "RECORD", t4[t4.RECORD_AND_SAMPLED = 2] = "RECORD_AND_SAMPLED";
})(z19 || (z19 = {}));
var W18;
(function(t4) {
  t4[t4.INTERNAL = 0] = "INTERNAL", t4[t4.SERVER = 1] = "SERVER", t4[t4.CLIENT = 2] = "CLIENT", t4[t4.PRODUCER = 3] = "PRODUCER", t4[t4.CONSUMER = 4] = "CONSUMER";
})(W18 || (W18 = {}));
var H19;
(function(t4) {
  t4[t4.UNSET = 0] = "UNSET", t4[t4.OK = 1] = "OK", t4[t4.ERROR = 2] = "ERROR";
})(H19 || (H19 = {}));
var $19 = "[_0-9a-z-*/]";
var Nr5 = "[a-z]" + $19 + "{0,255}";
var br5 = "[a-z0-9]" + $19 + "{0,240}@[a-z]" + $19 + "{0,13}";
var Tr2 = new RegExp("^(?:" + Nr5 + "|" + br5 + ")$");
var Ir5 = /^[ -~]{0,255}[!-~]$/;
var Or3 = /,|=/;
function ht6(t4) {
  return Tr2.test(t4);
}
function xt6(t4) {
  return Ir5.test(t4) && !Or3.test(t4);
}
var Et5 = 32;
var Pr4 = 512;
var At7 = ",";
var Nt5 = "=";
var bt7 = function() {
  function t4(r36) {
    this._internalState = /* @__PURE__ */ new Map(), r36 && this._parse(r36);
  }
  return t4.prototype.set = function(r36, e7) {
    var n8 = this._clone();
    return n8._internalState.has(r36) && n8._internalState.delete(r36), n8._internalState.set(r36, e7), n8;
  }, t4.prototype.unset = function(r36) {
    var e7 = this._clone();
    return e7._internalState.delete(r36), e7;
  }, t4.prototype.get = function(r36) {
    return this._internalState.get(r36);
  }, t4.prototype.serialize = function() {
    var r36 = this;
    return this._keys().reduce(function(e7, n8) {
      return e7.push(n8 + Nt5 + r36.get(n8)), e7;
    }, []).join(At7);
  }, t4.prototype._parse = function(r36) {
    r36.length > Pr4 || (this._internalState = r36.split(At7).reverse().reduce(function(e7, n8) {
      var a8 = n8.trim(), o15 = a8.indexOf(Nt5);
      if (o15 !== -1) {
        var i10 = a8.slice(0, o15), u17 = a8.slice(o15 + 1, n8.length);
        ht6(i10) && xt6(u17) && e7.set(i10, u17);
      }
      return e7;
    }, /* @__PURE__ */ new Map()), this._internalState.size > Et5 && (this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, Et5))));
  }, t4.prototype._keys = function() {
    return Array.from(this._internalState.keys()).reverse();
  }, t4.prototype._clone = function() {
    var r36 = new t4();
    return r36._internalState = new Map(this._internalState), r36;
  }, t4;
}();
var Tt4 = y17.getInstance();
var It4 = f13.instance();
var Sr4 = function() {
  function t4() {
  }
  return t4.prototype.getMeter = function(r36, e7, n8) {
    return B21;
  }, t4;
}();
var Ot5 = new Sr4();
var Q21 = "metrics";
var Pt7 = function() {
  function t4() {
  }
  return t4.getInstance = function() {
    return this._instance || (this._instance = new t4()), this._instance;
  }, t4.prototype.setGlobalMeterProvider = function(r36) {
    return v15(Q21, r36, f13.instance());
  }, t4.prototype.getMeterProvider = function() {
    return l19(Q21) || Ot5;
  }, t4.prototype.getMeter = function(r36, e7, n8) {
    return this.getMeterProvider().getMeter(r36, e7, n8);
  }, t4.prototype.disable = function() {
    m19(Q21, f13.instance());
  }, t4;
}();
var Ct7 = Pt7.getInstance();
var St5 = function() {
  function t4() {
  }
  return t4.prototype.inject = function(r36, e7) {
  }, t4.prototype.extract = function(r36, e7) {
    return r36;
  }, t4.prototype.fields = function() {
    return [];
  }, t4;
}();
var q21 = N17("OpenTelemetry Baggage Key");
function J20(t4) {
  return t4.getValue(q21) || void 0;
}
function Rt5() {
  return J20(y17.getInstance().active());
}
function Mt5(t4, r36) {
  return t4.setValue(q21, r36);
}
function wt5(t4) {
  return t4.deleteValue(q21);
}
var Z16 = "propagation";
var Rr3 = new St5();
var Dt5 = function() {
  function t4() {
    this.createBaggage = ft6, this.getBaggage = J20, this.getActiveBaggage = Rt5, this.setBaggage = Mt5, this.deleteBaggage = wt5;
  }
  return t4.getInstance = function() {
    return this._instance || (this._instance = new t4()), this._instance;
  }, t4.prototype.setGlobalPropagator = function(r36) {
    return v15(Z16, r36, f13.instance());
  }, t4.prototype.inject = function(r36, e7, n8) {
    return n8 === void 0 && (n8 = j25), this._getGlobalPropagator().inject(r36, e7, n8);
  }, t4.prototype.extract = function(r36, e7, n8) {
    return n8 === void 0 && (n8 = U21), this._getGlobalPropagator().extract(r36, e7, n8);
  }, t4.prototype.fields = function() {
    return this._getGlobalPropagator().fields();
  }, t4.prototype.disable = function() {
    m19(Z16, f13.instance());
  }, t4.prototype._getGlobalPropagator = function() {
    return l19(Z16) || Rr3;
  }, t4;
}();
var Gt2 = Dt5.getInstance();
var tt9 = "trace";
var Vt4 = function() {
  function t4() {
    this._proxyTracerProvider = new w20(), this.wrapSpanContext = yt5, this.isSpanContextValid = I21, this.deleteSpan = gt5, this.getSpan = S24, this.getActiveSpan = lt8, this.getSpanContext = R14, this.setSpan = T19, this.setSpanContext = vt5;
  }
  return t4.getInstance = function() {
    return this._instance || (this._instance = new t4()), this._instance;
  }, t4.prototype.setGlobalTracerProvider = function(r36) {
    var e7 = v15(tt9, this._proxyTracerProvider, f13.instance());
    return e7 && this._proxyTracerProvider.setDelegate(r36), e7;
  }, t4.prototype.getTracerProvider = function() {
    return l19(tt9) || this._proxyTracerProvider;
  }, t4.prototype.getTracer = function(r36, e7) {
    return this.getTracerProvider().getTracer(r36, e7);
  }, t4.prototype.disable = function() {
    m19(tt9, f13.instance()), this._proxyTracerProvider = new w20();
  }, t4;
}();
var Bt4 = Vt4.getInstance();

// https://esm.sh/ai@4.3.19/denonext/ai.mjs
import { Buffer as __Buffer$4 } from "node:buffer";
var Wa = Object.defineProperty;
var Ft6 = (e7, t4) => {
  for (var r36 in t4) Wa(e7, r36, { get: t4[r36], enumerable: true });
};
function Ve4(e7, { contentType: t4, dataStreamVersion: r36 }) {
  let a8 = new Headers(e7 ?? {});
  return a8.has("Content-Type") || a8.set("Content-Type", t4), r36 !== void 0 && a8.set("X-Vercel-AI-Data-Stream", r36), a8;
}
var Cr3 = "AI_InvalidArgumentError";
var Pr6 = `vercel.ai.error.${Cr3}`;
var Xa = Symbol.for(Pr6);
var Ar6;
Ar6 = Xa;
var jr3 = "AI_RetryError";
var Dr3 = `vercel.ai.error.${jr3}`;
var ts = Symbol.for(Dr3);
var kr5;
kr5 = ts;
var Or5 = "AI_NoImageGeneratedError";
var Nr6 = `vercel.ai.error.${Or5}`;
var ls = Symbol.for(Nr6);
var Ur2;
Ur2 = ls;
var Fr3 = "AI_NoObjectGeneratedError";
var Gr2 = `vercel.ai.error.${Fr3}`;
var Ss = Symbol.for(Gr2);
var Kr3;
var De4 = class extends a {
  constructor({ message: e7 = "No object generated.", cause: t4, text: r36, response: a8, usage: n8, finishReason: s9 }) {
    super({ name: Fr3, message: e7, cause: t4 }), this[Kr3] = true, this.text = r36, this.response = a8, this.usage = n8, this.finishReason = s9;
  }
  static isInstance(e7) {
    return a.hasMarker(e7, Gr2);
  }
};
Kr3 = Ss;
var Lr3 = "AI_DownloadError";
var Vr3 = `vercel.ai.error.${Lr3}`;
var xs = Symbol.for(Vr3);
var zr3;
zr3 = xs;
var Wr2 = "AI_InvalidDataContentError";
var Hr2 = `vercel.ai.error.${Wr2}`;
var _s = Symbol.for(Hr2);
var Xr4;
Xr4 = _s;
var Zr3 = be2.union([be2.string(), be2.instanceof(Uint8Array), be2.instanceof(ArrayBuffer), be2.custom((e7) => {
  var t4, r36;
  return (r36 = (t4 = __Buffer$4) == null ? void 0 : t4.isBuffer(e7)) != null ? r36 : false;
}, { message: "Must be a Buffer" })]);
var Qr2 = "AI_InvalidMessageRoleError";
var Yr3 = `vercel.ai.error.${Qr2}`;
var Rs = Symbol.for(Yr3);
var ea;
ea = Rs;
var ta = "AI_MessageConversionError";
var ra = `vercel.ai.error.${ta}`;
var ks = Symbol.for(ra);
var aa;
aa = ks;
var qt5 = be2.lazy(() => be2.union([be2.null(), be2.string(), be2.number(), be2.boolean(), be2.record(be2.string(), qt5), be2.array(qt5)]));
var L22 = be2.record(be2.string(), be2.record(be2.string(), qt5));
var Os = be2.array(be2.union([be2.object({ type: be2.literal("text"), text: be2.string() }), be2.object({ type: be2.literal("image"), data: be2.string(), mimeType: be2.string().optional() })]));
var sa = be2.object({ type: be2.literal("text"), text: be2.string(), providerOptions: L22.optional(), experimental_providerMetadata: L22.optional() });
var Ns = be2.object({ type: be2.literal("image"), image: be2.union([Zr3, be2.instanceof(URL)]), mimeType: be2.string().optional(), providerOptions: L22.optional(), experimental_providerMetadata: L22.optional() });
var na = be2.object({ type: be2.literal("file"), data: be2.union([Zr3, be2.instanceof(URL)]), filename: be2.string().optional(), mimeType: be2.string(), providerOptions: L22.optional(), experimental_providerMetadata: L22.optional() });
var Us = be2.object({ type: be2.literal("reasoning"), text: be2.string(), providerOptions: L22.optional(), experimental_providerMetadata: L22.optional() });
var $s = be2.object({ type: be2.literal("redacted-reasoning"), data: be2.string(), providerOptions: L22.optional(), experimental_providerMetadata: L22.optional() });
var Js = be2.object({ type: be2.literal("tool-call"), toolCallId: be2.string(), toolName: be2.string(), args: be2.unknown(), providerOptions: L22.optional(), experimental_providerMetadata: L22.optional() });
var Fs = be2.object({ type: be2.literal("tool-result"), toolCallId: be2.string(), toolName: be2.string(), result: be2.unknown(), content: Os.optional(), isError: be2.boolean().optional(), providerOptions: L22.optional(), experimental_providerMetadata: L22.optional() });
var Gs = be2.object({ role: be2.literal("system"), content: be2.string(), providerOptions: L22.optional(), experimental_providerMetadata: L22.optional() });
var Ks = be2.object({ role: be2.literal("user"), content: be2.union([be2.string(), be2.array(be2.union([sa, Ns, na]))]), providerOptions: L22.optional(), experimental_providerMetadata: L22.optional() });
var Ls = be2.object({ role: be2.literal("assistant"), content: be2.union([be2.string(), be2.array(be2.union([sa, na, Us, $s, Js]))]), providerOptions: L22.optional(), experimental_providerMetadata: L22.optional() });
var Vs = be2.object({ role: be2.literal("tool"), content: be2.array(Fs), providerOptions: L22.optional(), experimental_providerMetadata: L22.optional() });
var zs = be2.union([Gs, Ks, Ls, Vs]);
var Hs = "JSON schema:";
var Xs = "You MUST answer with a JSON object that matches the JSON schema above.";
var Zs = "You MUST answer with JSON.";
function ct10({ prompt: e7, schema: t4, schemaPrefix: r36 = t4 != null ? Hs : void 0, schemaSuffix: a8 = t4 != null ? Xs : Zs }) {
  return [e7 != null && e7.length > 0 ? e7 : void 0, e7 != null && e7.length > 0 ? "" : void 0, r36, t4 != null ? JSON.stringify(t4) : void 0, a8].filter((n8) => n8 != null).join(`
`);
}
var an2 = J2({ prefix: "aiobj", size: 24 });
var ln2 = J2({ prefix: "aiobj", size: 24 });
var da = "AI_NoOutputSpecifiedError";
var ma = `vercel.ai.error.${da}`;
var pn3 = Symbol.for(ma);
var fa;
fa = pn3;
var ga = "AI_ToolExecutionError";
var va = `vercel.ai.error.${ga}`;
var dn2 = Symbol.for(va);
var ya;
ya = dn2;
var Ta = "AI_InvalidToolArgumentsError";
var _a17 = `vercel.ai.error.${Ta}`;
var bn3 = Symbol.for(_a17);
var Ia;
Ia = bn3;
var Ea = "AI_NoSuchToolError";
var Ma = `vercel.ai.error.${Ea}`;
var Sn3 = Symbol.for(Ma);
var Ca;
Ca = Sn3;
var Pa = "AI_ToolCallRepairError";
var Aa = `vercel.ai.error.${Pa}`;
var Tn3 = Symbol.for(Aa);
var ja;
ja = Tn3;
var In3 = J2({ prefix: "aitxt", size: 24 });
var Rn3 = J2({ prefix: "msg", size: 24 });
var Cn3 = {};
Ft6(Cn3, { object: () => $n3, text: () => Un3 });
var ka = "AI_InvalidStreamPartError";
var qa = `vercel.ai.error.${ka}`;
var kn3 = Symbol.for(qa);
var Oa;
Oa = kn3;
var On2 = "AI_MCPClientError";
var Na = `vercel.ai.error.${On2}`;
var Nn2 = Symbol.for(Na);
var Ua;
Ua = Nn2;
var Un3 = () => ({ type: "text", responseFormat: () => ({ type: "text" }), injectIntoSystemPrompt({ system: e7 }) {
  return e7;
}, parsePartial({ text: e7 }) {
  return { partial: e7 };
}, parseOutput({ text: e7 }) {
  return e7;
} });
var $n3 = ({ schema: e7 }) => {
  let t4 = Wt5(e7);
  return { type: "object", responseFormat: ({ model: r36 }) => ({ type: "json", schema: r36.supportsStructuredOutputs ? t4.jsonSchema : void 0 }), injectIntoSystemPrompt({ system: r36, model: a8 }) {
    return a8.supportsStructuredOutputs ? r36 : ct10({ prompt: r36, schema: t4.jsonSchema });
  }, parsePartial({ text: r36 }) {
    let a8 = K19(r36);
    switch (a8.state) {
      case "failed-parse":
      case "undefined-input":
        return;
      case "repaired-parse":
      case "successful-parse":
        return { partial: a8.value };
      default: {
        let n8 = a8.state;
        throw new Error(`Unsupported parse state: ${n8}`);
      }
    }
  }, parseOutput({ text: r36 }, a8) {
    let n8 = S3({ text: r36 });
    if (!n8.success) throw new De4({ message: "No object generated: could not parse the response.", cause: n8.error, text: r36, response: a8.response, usage: a8.usage, finishReason: a8.finishReason });
    let s9 = A3({ value: n8.value, schema: t4 });
    if (!s9.success) throw new De4({ message: "No object generated: response did not match schema.", cause: s9.error, text: r36, response: a8.response, usage: a8.usage, finishReason: a8.finishReason });
    return s9.value;
  } };
};
function Kt4(e7, t4) {
  let r36 = e7.getReader(), a8 = t4.getReader(), n8, s9, o15 = false, i10 = false;
  async function p15(c14) {
    try {
      n8 == null && (n8 = r36.read());
      let u17 = await n8;
      n8 = void 0, u17.done ? c14.close() : c14.enqueue(u17.value);
    } catch (u17) {
      c14.error(u17);
    }
  }
  async function l20(c14) {
    try {
      s9 == null && (s9 = a8.read());
      let u17 = await s9;
      s9 = void 0, u17.done ? c14.close() : c14.enqueue(u17.value);
    } catch (u17) {
      c14.error(u17);
    }
  }
  return new ReadableStream({ async pull(c14) {
    try {
      if (o15) {
        await l20(c14);
        return;
      }
      if (i10) {
        await p15(c14);
        return;
      }
      n8 == null && (n8 = r36.read()), s9 == null && (s9 = a8.read());
      let { result: u17, reader: h24 } = await Promise.race([n8.then((f14) => ({ result: f14, reader: r36 })), s9.then((f14) => ({ result: f14, reader: a8 }))]);
      u17.done || c14.enqueue(u17.value), h24 === r36 ? (n8 = void 0, u17.done && (await l20(c14), o15 = true)) : (s9 = void 0, u17.done && (i10 = true, await p15(c14)));
    } catch (u17) {
      c14.error(u17);
    }
  }, cancel() {
    r36.cancel(), a8.cancel();
  } });
}
var Bn3 = J2({ prefix: "aitxt", size: 24 });
var Wn3 = J2({ prefix: "msg", size: 24 });
var Ga = "AI_NoSuchProviderError";
var Ka = `vercel.ai.error.${Ga}`;
var mo2 = Symbol.for(Ka);
var La;
La = mo2;
function Ql(e7) {
  return e7;
}
var bo = be2.object({ name: be2.string(), version: be2.string() }).passthrough();
var Lt7 = be2.object({ _meta: be2.optional(be2.object({}).passthrough()) }).passthrough();
var dt7 = Lt7;
var So = be2.object({ method: be2.string(), params: be2.optional(Lt7) });
var xo = be2.object({ experimental: be2.optional(be2.object({}).passthrough()), logging: be2.optional(be2.object({}).passthrough()), prompts: be2.optional(be2.object({ listChanged: be2.optional(be2.boolean()) }).passthrough()), resources: be2.optional(be2.object({ subscribe: be2.optional(be2.boolean()), listChanged: be2.optional(be2.boolean()) }).passthrough()), tools: be2.optional(be2.object({ listChanged: be2.optional(be2.boolean()) }).passthrough()) }).passthrough();
var To = dt7.extend({ protocolVersion: be2.string(), capabilities: xo, serverInfo: bo, instructions: be2.optional(be2.string()) });
var _o = dt7.extend({ nextCursor: be2.optional(be2.string()) });
var Io = be2.object({ name: be2.string(), description: be2.optional(be2.string()), inputSchema: be2.object({ type: be2.literal("object"), properties: be2.optional(be2.object({}).passthrough()) }).passthrough() }).passthrough();
var Ro = _o.extend({ tools: be2.array(Io) });
var Eo = be2.object({ type: be2.literal("text"), text: be2.string() }).passthrough();
var Mo = be2.object({ type: be2.literal("image"), data: be2.string().base64(), mimeType: be2.string() }).passthrough();
var za = be2.object({ uri: be2.string(), mimeType: be2.optional(be2.string()) }).passthrough();
var Co = za.extend({ text: be2.string() });
var Po = za.extend({ blob: be2.string().base64() });
var Ao = be2.object({ type: be2.literal("resource"), resource: be2.union([Co, Po]) }).passthrough();
var jo = dt7.extend({ content: be2.array(be2.union([Eo, Mo, Ao])), isError: be2.boolean().default(false).optional() }).or(dt7.extend({ toolResult: be2.unknown() }));
var Et6 = "2.0";
var Do = be2.object({ jsonrpc: be2.literal(Et6), id: be2.union([be2.string(), be2.number().int()]) }).merge(So).strict();
var ko = be2.object({ jsonrpc: be2.literal(Et6), id: be2.union([be2.string(), be2.number().int()]), result: dt7 }).strict();
var qo = be2.object({ jsonrpc: be2.literal(Et6), id: be2.union([be2.string(), be2.number().int()]), error: be2.object({ code: be2.number().int(), message: be2.string(), data: be2.optional(be2.unknown()) }) }).strict();
var Oo = be2.object({ jsonrpc: be2.literal(Et6) }).merge(be2.object({ method: be2.string(), params: be2.optional(Lt7) })).strict();
var No = be2.union([Do, Oo, ko, qo]);
var Lo = {};
Ft6(Lo, { mergeIntoDataStream: () => Wo, toDataStream: () => zo, toDataStreamResponse: () => Bo });
function Ba(e7 = {}) {
  let t4 = new TextEncoder(), r36 = "";
  return new TransformStream({ async start() {
    e7.onStart && await e7.onStart();
  }, async transform(a8, n8) {
    n8.enqueue(t4.encode(a8)), r36 += a8, e7.onToken && await e7.onToken(a8), e7.onText && typeof a8 == "string" && await e7.onText(a8);
  }, async flush() {
    e7.onCompletion && await e7.onCompletion(r36), e7.onFinal && await e7.onFinal(r36);
  } });
}
function Vt5(e7, t4) {
  return e7.pipeThrough(new TransformStream({ transform: async (r36, a8) => {
    var n8;
    if (typeof r36 == "string") {
      a8.enqueue(r36);
      return;
    }
    if ("event" in r36) {
      r36.event === "on_chat_model_stream" && Rr4((n8 = r36.data) == null ? void 0 : n8.chunk, a8);
      return;
    }
    Rr4(r36, a8);
  } })).pipeThrough(Ba(t4)).pipeThrough(new TextDecoderStream()).pipeThrough(new TransformStream({ transform: async (r36, a8) => {
    a8.enqueue(Lt5("text", r36));
  } }));
}
function zo(e7, t4) {
  return Vt5(e7, t4).pipeThrough(new TextEncoderStream());
}
function Bo(e7, t4) {
  var r36;
  let a8 = Vt5(e7, t4?.callbacks).pipeThrough(new TextEncoderStream()), n8 = t4?.data, s9 = t4?.init, o15 = n8 ? Kt4(n8.stream, a8) : a8;
  return new Response(o15, { status: (r36 = s9?.status) != null ? r36 : 200, statusText: s9?.statusText, headers: Ve4(s9?.headers, { contentType: "text/plain; charset=utf-8", dataStreamVersion: "v1" }) });
}
function Wo(e7, t4) {
  t4.dataStream.merge(Vt5(e7, t4.callbacks));
}
function Rr4(e7, t4) {
  if (typeof e7.content == "string") t4.enqueue(e7.content);
  else {
    let r36 = e7.content;
    for (let a8 of r36) a8.type === "text" && t4.enqueue(a8.text);
  }
}
var Ho = {};
Ft6(Ho, { mergeIntoDataStream: () => ei, toDataStream: () => Qo, toDataStreamResponse: () => Yo });
function zt7(e7, t4) {
  let r36 = ti();
  return M2(e7[Symbol.asyncIterator]()).pipeThrough(new TransformStream({ async transform(a8, n8) {
    n8.enqueue(r36(a8.delta));
  } })).pipeThrough(Ba(t4)).pipeThrough(new TextDecoderStream()).pipeThrough(new TransformStream({ transform: async (a8, n8) => {
    n8.enqueue(Lt5("text", a8));
  } }));
}
function Qo(e7, t4) {
  return zt7(e7, t4).pipeThrough(new TextEncoderStream());
}
function Yo(e7, t4 = {}) {
  var r36;
  let { init: a8, data: n8, callbacks: s9 } = t4, o15 = zt7(e7, s9).pipeThrough(new TextEncoderStream()), i10 = n8 ? Kt4(n8.stream, o15) : o15;
  return new Response(i10, { status: (r36 = a8?.status) != null ? r36 : 200, statusText: a8?.statusText, headers: Ve4(a8?.headers, { contentType: "text/plain; charset=utf-8", dataStreamVersion: "v1" }) });
}
function ei(e7, t4) {
  t4.dataStream.merge(zt7(e7, t4.callbacks));
}
function ti() {
  let e7 = true;
  return (t4) => (e7 && (t4 = t4.trimStart(), t4 && (e7 = false)), t4);
}
var du = 15 * 1e3;

// https://esm.sh/@agentic/ai-sdk@8.4.4/denonext/ai-sdk.mjs
function s8(...t4) {
  let o15 = new $t4(t4);
  return Object.fromEntries(o15.map((e7) => [e7.spec.name, Ql({ description: e7.spec.description, parameters: jt3(e7.inputSchema) ? e7.inputSchema : kt5(Ct5(e7.inputSchema).jsonSchema), execute: e7.execute })]));
}

// test.js
var model = pe2("deepseek-r1:7b");
async function main() {
  const searchTool = await S22.fromIdentifier("@agentic/search");
  const result = await generateText({
    model,
    tools: s8(searchTool),
    // toolChoice: 'required',
    temperature: 0,
    system: "You are a helpful assistant. Be as concise as possible.",
    prompt: "What is the weather in San Francisco?"
  });
  console.log(JSON.stringify(result.toolResults[0], null, 2));
}
await main();
/*! Bundled license information:

ieee754/index.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)
*/
/*! Bundled license information:

ky/distribution/index.js:
  (*! MIT License © Sindre Sorhus *)
*/
/*! Bundled license information:

@noble/hashes/esm/utils.js:
  (*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) *)
*/
