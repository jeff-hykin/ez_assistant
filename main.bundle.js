#!/usr/bin/env -S deno run --allow-all
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// https://esm.sh/zod@3.25.76/denonext/zod.mjs
function ze2(r39) {
  Te2 = r39;
}
function re2() {
  return Te2;
}
function d2(r39, e7) {
  let t9 = re2(), s9 = ue2({ issueData: e7, data: r39.data, path: r39.path, errorMaps: [r39.common.contextualErrorMap, r39.schemaErrorMap, t9, t9 === I2 ? void 0 : I2].filter((a11) => !!a11) });
  r39.common.issues.push(s9);
}
function y2(r39) {
  if (!r39) return {};
  let { errorMap: e7, invalid_type_error: t9, required_error: s9, description: a11 } = r39;
  if (e7 && (t9 || s9)) throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e7 ? { errorMap: e7, description: a11 } : { errorMap: (i21, o18) => {
    let { message: f14 } = r39;
    return i21.code === "invalid_enum_value" ? { message: f14 ?? o18.defaultError } : typeof o18.data > "u" ? { message: f14 ?? s9 ?? o18.defaultError } : i21.code !== "invalid_type" ? { message: o18.defaultError } : { message: f14 ?? t9 ?? o18.defaultError };
  }, description: a11 };
}
function Ae2(r39) {
  let e7 = "[0-5]\\d";
  r39.precision ? e7 = `${e7}\\.\\d{${r39.precision}}` : r39.precision == null && (e7 = `${e7}(\\.\\d+)?`);
  let t9 = r39.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${e7})${t9}`;
}
function st2(r39) {
  return new RegExp(`^${Ae2(r39)}$`);
}
function Re2(r39) {
  let e7 = `${Se2}T${Ae2(r39)}`, t9 = [];
  return t9.push(r39.local ? "Z?" : "Z"), r39.offset && t9.push("([+-]\\d{2}:?\\d{2})"), e7 = `${e7}(${t9.join("|")})`, new RegExp(`^${e7}$`);
}
function at2(r39, e7) {
  return !!((e7 === "v4" || !e7) && Ge2.test(r39) || (e7 === "v6" || !e7) && Xe2.test(r39));
}
function nt2(r39, e7) {
  if (!qe2.test(r39)) return false;
  try {
    let [t9] = r39.split(".");
    if (!t9) return false;
    let s9 = t9.replace(/-/g, "+").replace(/_/g, "/").padEnd(t9.length + (4 - t9.length % 4) % 4, "="), a11 = JSON.parse(atob(s9));
    return !(typeof a11 != "object" || a11 === null || "typ" in a11 && a11?.typ !== "JWT" || !a11.alg || e7 && a11.alg !== e7);
  } catch {
    return false;
  }
}
function it2(r39, e7) {
  return !!((e7 === "v4" || !e7) && Qe2.test(r39) || (e7 === "v6" || !e7) && Ke2.test(r39));
}
function ot2(r39, e7) {
  let t9 = (r39.toString().split(".")[1] || "").length, s9 = (e7.toString().split(".")[1] || "").length, a11 = t9 > s9 ? t9 : s9, n17 = Number.parseInt(r39.toFixed(a11).replace(".", "")), i21 = Number.parseInt(e7.toFixed(a11).replace(".", ""));
  return n17 % i21 / 10 ** a11;
}
function ae2(r39) {
  if (r39 instanceof w2) {
    let e7 = {};
    for (let t9 in r39.shape) {
      let s9 = r39.shape[t9];
      e7[t9] = C2.create(ae2(s9));
    }
    return new w2({ ...r39._def, shape: () => e7 });
  } else return r39 instanceof $2 ? new $2({ ...r39._def, type: ae2(r39.element) }) : r39 instanceof C2 ? C2.create(ae2(r39.unwrap())) : r39 instanceof j2 ? j2.create(ae2(r39.unwrap())) : r39 instanceof N2 ? N2.create(r39.items.map((e7) => ae2(e7))) : r39;
}
function ke2(r39, e7) {
  let t9 = R2(r39), s9 = R2(e7);
  if (r39 === e7) return { valid: true, data: r39 };
  if (t9 === u2.object && s9 === u2.object) {
    let a11 = g2.objectKeys(e7), n17 = g2.objectKeys(r39).filter((o18) => a11.indexOf(o18) !== -1), i21 = { ...r39, ...e7 };
    for (let o18 of n17) {
      let f14 = ke2(r39[o18], e7[o18]);
      if (!f14.valid) return { valid: false };
      i21[o18] = f14.data;
    }
    return { valid: true, data: i21 };
  } else if (t9 === u2.array && s9 === u2.array) {
    if (r39.length !== e7.length) return { valid: false };
    let a11 = [];
    for (let n17 = 0; n17 < r39.length; n17++) {
      let i21 = r39[n17], o18 = e7[n17], f14 = ke2(i21, o18);
      if (!f14.valid) return { valid: false };
      a11.push(f14.data);
    }
    return { valid: true, data: a11 };
  } else return t9 === u2.date && s9 === u2.date && +r39 == +e7 ? { valid: true, data: r39 } : { valid: false };
}
function Ne2(r39, e7) {
  return new Q2({ values: r39, typeName: m2.ZodEnum, ...y2(e7) });
}
function Oe2(r39, e7) {
  let t9 = typeof r39 == "function" ? r39(e7) : typeof r39 == "string" ? { message: r39 } : r39;
  return typeof t9 == "string" ? { message: t9 } : t9;
}
function je2(r39, e7 = {}, t9) {
  return r39 ? P2.create().superRefine((s9, a11) => {
    let n17 = r39(s9);
    if (n17 instanceof Promise) return n17.then((i21) => {
      if (!i21) {
        let o18 = Oe2(e7, s9), f14 = o18.fatal ?? t9 ?? true;
        a11.addIssue({ code: "custom", ...o18, fatal: f14 });
      }
    });
    if (!n17) {
      let i21 = Oe2(e7, s9), o18 = i21.fatal ?? t9 ?? true;
      a11.addIssue({ code: "custom", ...i21, fatal: o18 });
    }
  }) : P2.create();
}
var $e2, Me2, be2, g2, ve2, u2, R2, c2, Ve2, b2, Pe2, I2, Te2, ue2, De2, x2, p2, D2, k2, he2, pe2, M2, se2, h2, O2, Ce2, _2, Le2, Ue2, Fe2, Be2, We2, qe2, Je2, Ye2, He2, xe2, Ge2, Qe2, Xe2, Ke2, et2, tt2, Se2, rt2, V2, L2, U2, F2, B2, ne2, W2, q2, P2, Z2, A2, ie2, $2, w2, J2, E2, me2, Y2, N2, ye2, oe2, ce2, _e2, H2, G2, Q2, X2, z2, S2, C2, j2, K2, ee2, de2, ct2, le2, fe2, te2, dt2, m2, ut2, Ie2, Ee2, lt2, ft2, Ze2, ht2, pt2, mt2, yt2, _t2, gt2, vt2, xt2, kt2, bt2, wt2, Tt2, Ct2, Ot2, St2, At2, Rt2, Nt2, jt2, It2, Et2, Zt2, $t2, Mt2, Vt2, Pt2, zt2, Dt2, Lt2, Ut2, Ft2, Bt2, Wt2, qt2;
var init_zod = __esm({
  "https://esm.sh/zod@3.25.76/denonext/zod.mjs"() {
    $e2 = Object.defineProperty;
    Me2 = (r39, e7) => {
      for (var t9 in e7) $e2(r39, t9, { get: e7[t9], enumerable: true });
    };
    be2 = {};
    Me2(be2, { BRAND: () => ct2, DIRTY: () => D2, EMPTY_PATH: () => De2, INVALID: () => p2, NEVER: () => qt2, OK: () => k2, ParseStatus: () => x2, Schema: () => _2, ZodAny: () => P2, ZodArray: () => $2, ZodBigInt: () => U2, ZodBoolean: () => F2, ZodBranded: () => le2, ZodCatch: () => ee2, ZodDate: () => B2, ZodDefault: () => K2, ZodDiscriminatedUnion: () => me2, ZodEffects: () => S2, ZodEnum: () => Q2, ZodError: () => b2, ZodFirstPartyTypeKind: () => m2, ZodFunction: () => _e2, ZodIntersection: () => Y2, ZodIssueCode: () => c2, ZodLazy: () => H2, ZodLiteral: () => G2, ZodMap: () => oe2, ZodNaN: () => de2, ZodNativeEnum: () => X2, ZodNever: () => A2, ZodNull: () => q2, ZodNullable: () => j2, ZodNumber: () => L2, ZodObject: () => w2, ZodOptional: () => C2, ZodParsedType: () => u2, ZodPipeline: () => fe2, ZodPromise: () => z2, ZodReadonly: () => te2, ZodRecord: () => ye2, ZodSchema: () => _2, ZodSet: () => ce2, ZodString: () => V2, ZodSymbol: () => ne2, ZodTransformer: () => S2, ZodTuple: () => N2, ZodType: () => _2, ZodUndefined: () => W2, ZodUnion: () => J2, ZodUnknown: () => Z2, ZodVoid: () => ie2, addIssueToContext: () => d2, any: () => _t2, array: () => kt2, bigint: () => ft2, boolean: () => Ze2, coerce: () => Wt2, custom: () => je2, date: () => ht2, datetimeRegex: () => Re2, defaultErrorMap: () => I2, discriminatedUnion: () => Ct2, effect: () => Vt2, enum: () => Zt2, function: () => jt2, getErrorMap: () => re2, getParsedType: () => R2, instanceof: () => ut2, intersection: () => Ot2, isAborted: () => he2, isAsync: () => se2, isDirty: () => pe2, isValid: () => M2, late: () => dt2, lazy: () => It2, literal: () => Et2, makeIssue: () => ue2, map: () => Rt2, nan: () => lt2, nativeEnum: () => $t2, never: () => vt2, null: () => yt2, nullable: () => zt2, number: () => Ee2, object: () => bt2, objectUtil: () => ve2, oboolean: () => Bt2, onumber: () => Ft2, optional: () => Pt2, ostring: () => Ut2, pipeline: () => Lt2, preprocess: () => Dt2, promise: () => Mt2, quotelessJson: () => Ve2, record: () => At2, set: () => Nt2, setErrorMap: () => ze2, strictObject: () => wt2, string: () => Ie2, symbol: () => pt2, transformer: () => Vt2, tuple: () => St2, undefined: () => mt2, union: () => Tt2, unknown: () => gt2, util: () => g2, void: () => xt2 });
    (function(r39) {
      r39.assertEqual = (a11) => {
      };
      function e7(a11) {
      }
      r39.assertIs = e7;
      function t9(a11) {
        throw new Error();
      }
      r39.assertNever = t9, r39.arrayToEnum = (a11) => {
        let n17 = {};
        for (let i21 of a11) n17[i21] = i21;
        return n17;
      }, r39.getValidEnumValues = (a11) => {
        let n17 = r39.objectKeys(a11).filter((o18) => typeof a11[a11[o18]] != "number"), i21 = {};
        for (let o18 of n17) i21[o18] = a11[o18];
        return r39.objectValues(i21);
      }, r39.objectValues = (a11) => r39.objectKeys(a11).map(function(n17) {
        return a11[n17];
      }), r39.objectKeys = typeof Object.keys == "function" ? (a11) => Object.keys(a11) : (a11) => {
        let n17 = [];
        for (let i21 in a11) Object.prototype.hasOwnProperty.call(a11, i21) && n17.push(i21);
        return n17;
      }, r39.find = (a11, n17) => {
        for (let i21 of a11) if (n17(i21)) return i21;
      }, r39.isInteger = typeof Number.isInteger == "function" ? (a11) => Number.isInteger(a11) : (a11) => typeof a11 == "number" && Number.isFinite(a11) && Math.floor(a11) === a11;
      function s9(a11, n17 = " | ") {
        return a11.map((i21) => typeof i21 == "string" ? `'${i21}'` : i21).join(n17);
      }
      r39.joinValues = s9, r39.jsonStringifyReplacer = (a11, n17) => typeof n17 == "bigint" ? n17.toString() : n17;
    })(g2 || (g2 = {}));
    (function(r39) {
      r39.mergeShapes = (e7, t9) => ({ ...e7, ...t9 });
    })(ve2 || (ve2 = {}));
    u2 = g2.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]);
    R2 = (r39) => {
      switch (typeof r39) {
        case "undefined":
          return u2.undefined;
        case "string":
          return u2.string;
        case "number":
          return Number.isNaN(r39) ? u2.nan : u2.number;
        case "boolean":
          return u2.boolean;
        case "function":
          return u2.function;
        case "bigint":
          return u2.bigint;
        case "symbol":
          return u2.symbol;
        case "object":
          return Array.isArray(r39) ? u2.array : r39 === null ? u2.null : r39.then && typeof r39.then == "function" && r39.catch && typeof r39.catch == "function" ? u2.promise : typeof Map < "u" && r39 instanceof Map ? u2.map : typeof Set < "u" && r39 instanceof Set ? u2.set : typeof Date < "u" && r39 instanceof Date ? u2.date : u2.object;
        default:
          return u2.unknown;
      }
    };
    c2 = g2.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
    Ve2 = (r39) => JSON.stringify(r39, null, 2).replace(/"([^"]+)":/g, "$1:");
    b2 = class r16 extends Error {
      get errors() {
        return this.issues;
      }
      constructor(e7) {
        super(), this.issues = [], this.addIssue = (s9) => {
          this.issues = [...this.issues, s9];
        }, this.addIssues = (s9 = []) => {
          this.issues = [...this.issues, ...s9];
        };
        let t9 = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, t9) : this.__proto__ = t9, this.name = "ZodError", this.issues = e7;
      }
      format(e7) {
        let t9 = e7 || function(n17) {
          return n17.message;
        }, s9 = { _errors: [] }, a11 = (n17) => {
          for (let i21 of n17.issues) if (i21.code === "invalid_union") i21.unionErrors.map(a11);
          else if (i21.code === "invalid_return_type") a11(i21.returnTypeError);
          else if (i21.code === "invalid_arguments") a11(i21.argumentsError);
          else if (i21.path.length === 0) s9._errors.push(t9(i21));
          else {
            let o18 = s9, f14 = 0;
            for (; f14 < i21.path.length; ) {
              let l16 = i21.path[f14];
              f14 === i21.path.length - 1 ? (o18[l16] = o18[l16] || { _errors: [] }, o18[l16]._errors.push(t9(i21))) : o18[l16] = o18[l16] || { _errors: [] }, o18 = o18[l16], f14++;
            }
          }
        };
        return a11(this), s9;
      }
      static assert(e7) {
        if (!(e7 instanceof r16)) throw new Error(`Not a ZodError: ${e7}`);
      }
      toString() {
        return this.message;
      }
      get message() {
        return JSON.stringify(this.issues, g2.jsonStringifyReplacer, 2);
      }
      get isEmpty() {
        return this.issues.length === 0;
      }
      flatten(e7 = (t9) => t9.message) {
        let t9 = {}, s9 = [];
        for (let a11 of this.issues) if (a11.path.length > 0) {
          let n17 = a11.path[0];
          t9[n17] = t9[n17] || [], t9[n17].push(e7(a11));
        } else s9.push(e7(a11));
        return { formErrors: s9, fieldErrors: t9 };
      }
      get formErrors() {
        return this.flatten();
      }
    };
    b2.create = (r39) => new b2(r39);
    Pe2 = (r39, e7) => {
      let t9;
      switch (r39.code) {
        case c2.invalid_type:
          r39.received === u2.undefined ? t9 = "Required" : t9 = `Expected ${r39.expected}, received ${r39.received}`;
          break;
        case c2.invalid_literal:
          t9 = `Invalid literal value, expected ${JSON.stringify(r39.expected, g2.jsonStringifyReplacer)}`;
          break;
        case c2.unrecognized_keys:
          t9 = `Unrecognized key(s) in object: ${g2.joinValues(r39.keys, ", ")}`;
          break;
        case c2.invalid_union:
          t9 = "Invalid input";
          break;
        case c2.invalid_union_discriminator:
          t9 = `Invalid discriminator value. Expected ${g2.joinValues(r39.options)}`;
          break;
        case c2.invalid_enum_value:
          t9 = `Invalid enum value. Expected ${g2.joinValues(r39.options)}, received '${r39.received}'`;
          break;
        case c2.invalid_arguments:
          t9 = "Invalid function arguments";
          break;
        case c2.invalid_return_type:
          t9 = "Invalid function return type";
          break;
        case c2.invalid_date:
          t9 = "Invalid date";
          break;
        case c2.invalid_string:
          typeof r39.validation == "object" ? "includes" in r39.validation ? (t9 = `Invalid input: must include "${r39.validation.includes}"`, typeof r39.validation.position == "number" && (t9 = `${t9} at one or more positions greater than or equal to ${r39.validation.position}`)) : "startsWith" in r39.validation ? t9 = `Invalid input: must start with "${r39.validation.startsWith}"` : "endsWith" in r39.validation ? t9 = `Invalid input: must end with "${r39.validation.endsWith}"` : g2.assertNever(r39.validation) : r39.validation !== "regex" ? t9 = `Invalid ${r39.validation}` : t9 = "Invalid";
          break;
        case c2.too_small:
          r39.type === "array" ? t9 = `Array must contain ${r39.exact ? "exactly" : r39.inclusive ? "at least" : "more than"} ${r39.minimum} element(s)` : r39.type === "string" ? t9 = `String must contain ${r39.exact ? "exactly" : r39.inclusive ? "at least" : "over"} ${r39.minimum} character(s)` : r39.type === "number" ? t9 = `Number must be ${r39.exact ? "exactly equal to " : r39.inclusive ? "greater than or equal to " : "greater than "}${r39.minimum}` : r39.type === "bigint" ? t9 = `Number must be ${r39.exact ? "exactly equal to " : r39.inclusive ? "greater than or equal to " : "greater than "}${r39.minimum}` : r39.type === "date" ? t9 = `Date must be ${r39.exact ? "exactly equal to " : r39.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(r39.minimum))}` : t9 = "Invalid input";
          break;
        case c2.too_big:
          r39.type === "array" ? t9 = `Array must contain ${r39.exact ? "exactly" : r39.inclusive ? "at most" : "less than"} ${r39.maximum} element(s)` : r39.type === "string" ? t9 = `String must contain ${r39.exact ? "exactly" : r39.inclusive ? "at most" : "under"} ${r39.maximum} character(s)` : r39.type === "number" ? t9 = `Number must be ${r39.exact ? "exactly" : r39.inclusive ? "less than or equal to" : "less than"} ${r39.maximum}` : r39.type === "bigint" ? t9 = `BigInt must be ${r39.exact ? "exactly" : r39.inclusive ? "less than or equal to" : "less than"} ${r39.maximum}` : r39.type === "date" ? t9 = `Date must be ${r39.exact ? "exactly" : r39.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(r39.maximum))}` : t9 = "Invalid input";
          break;
        case c2.custom:
          t9 = "Invalid input";
          break;
        case c2.invalid_intersection_types:
          t9 = "Intersection results could not be merged";
          break;
        case c2.not_multiple_of:
          t9 = `Number must be a multiple of ${r39.multipleOf}`;
          break;
        case c2.not_finite:
          t9 = "Number must be finite";
          break;
        default:
          t9 = e7.defaultError, g2.assertNever(r39);
      }
      return { message: t9 };
    };
    I2 = Pe2;
    Te2 = I2;
    ue2 = (r39) => {
      let { data: e7, path: t9, errorMaps: s9, issueData: a11 } = r39, n17 = [...t9, ...a11.path || []], i21 = { ...a11, path: n17 };
      if (a11.message !== void 0) return { ...a11, path: n17, message: a11.message };
      let o18 = "", f14 = s9.filter((l16) => !!l16).slice().reverse();
      for (let l16 of f14) o18 = l16(i21, { data: e7, defaultError: o18 }).message;
      return { ...a11, path: n17, message: o18 };
    };
    De2 = [];
    x2 = class r17 {
      constructor() {
        this.value = "valid";
      }
      dirty() {
        this.value === "valid" && (this.value = "dirty");
      }
      abort() {
        this.value !== "aborted" && (this.value = "aborted");
      }
      static mergeArray(e7, t9) {
        let s9 = [];
        for (let a11 of t9) {
          if (a11.status === "aborted") return p2;
          a11.status === "dirty" && e7.dirty(), s9.push(a11.value);
        }
        return { status: e7.value, value: s9 };
      }
      static async mergeObjectAsync(e7, t9) {
        let s9 = [];
        for (let a11 of t9) {
          let n17 = await a11.key, i21 = await a11.value;
          s9.push({ key: n17, value: i21 });
        }
        return r17.mergeObjectSync(e7, s9);
      }
      static mergeObjectSync(e7, t9) {
        let s9 = {};
        for (let a11 of t9) {
          let { key: n17, value: i21 } = a11;
          if (n17.status === "aborted" || i21.status === "aborted") return p2;
          n17.status === "dirty" && e7.dirty(), i21.status === "dirty" && e7.dirty(), n17.value !== "__proto__" && (typeof i21.value < "u" || a11.alwaysSet) && (s9[n17.value] = i21.value);
        }
        return { status: e7.value, value: s9 };
      }
    };
    p2 = Object.freeze({ status: "aborted" });
    D2 = (r39) => ({ status: "dirty", value: r39 });
    k2 = (r39) => ({ status: "valid", value: r39 });
    he2 = (r39) => r39.status === "aborted";
    pe2 = (r39) => r39.status === "dirty";
    M2 = (r39) => r39.status === "valid";
    se2 = (r39) => typeof Promise < "u" && r39 instanceof Promise;
    (function(r39) {
      r39.errToObj = (e7) => typeof e7 == "string" ? { message: e7 } : e7 || {}, r39.toString = (e7) => typeof e7 == "string" ? e7 : e7?.message;
    })(h2 || (h2 = {}));
    O2 = class {
      constructor(e7, t9, s9, a11) {
        this._cachedPath = [], this.parent = e7, this.data = t9, this._path = s9, this._key = a11;
      }
      get path() {
        return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
      }
    };
    Ce2 = (r39, e7) => {
      if (M2(e7)) return { success: true, data: e7.value };
      if (!r39.common.issues.length) throw new Error("Validation failed but no issues detected.");
      return { success: false, get error() {
        if (this._error) return this._error;
        let t9 = new b2(r39.common.issues);
        return this._error = t9, this._error;
      } };
    };
    _2 = class {
      get description() {
        return this._def.description;
      }
      _getType(e7) {
        return R2(e7.data);
      }
      _getOrReturnCtx(e7, t9) {
        return t9 || { common: e7.parent.common, data: e7.data, parsedType: R2(e7.data), schemaErrorMap: this._def.errorMap, path: e7.path, parent: e7.parent };
      }
      _processInputParams(e7) {
        return { status: new x2(), ctx: { common: e7.parent.common, data: e7.data, parsedType: R2(e7.data), schemaErrorMap: this._def.errorMap, path: e7.path, parent: e7.parent } };
      }
      _parseSync(e7) {
        let t9 = this._parse(e7);
        if (se2(t9)) throw new Error("Synchronous parse encountered promise.");
        return t9;
      }
      _parseAsync(e7) {
        let t9 = this._parse(e7);
        return Promise.resolve(t9);
      }
      parse(e7, t9) {
        let s9 = this.safeParse(e7, t9);
        if (s9.success) return s9.data;
        throw s9.error;
      }
      safeParse(e7, t9) {
        let s9 = { common: { issues: [], async: t9?.async ?? false, contextualErrorMap: t9?.errorMap }, path: t9?.path || [], schemaErrorMap: this._def.errorMap, parent: null, data: e7, parsedType: R2(e7) }, a11 = this._parseSync({ data: e7, path: s9.path, parent: s9 });
        return Ce2(s9, a11);
      }
      "~validate"(e7) {
        let t9 = { common: { issues: [], async: !!this["~standard"].async }, path: [], schemaErrorMap: this._def.errorMap, parent: null, data: e7, parsedType: R2(e7) };
        if (!this["~standard"].async) try {
          let s9 = this._parseSync({ data: e7, path: [], parent: t9 });
          return M2(s9) ? { value: s9.value } : { issues: t9.common.issues };
        } catch (s9) {
          s9?.message?.toLowerCase()?.includes("encountered") && (this["~standard"].async = true), t9.common = { issues: [], async: true };
        }
        return this._parseAsync({ data: e7, path: [], parent: t9 }).then((s9) => M2(s9) ? { value: s9.value } : { issues: t9.common.issues });
      }
      async parseAsync(e7, t9) {
        let s9 = await this.safeParseAsync(e7, t9);
        if (s9.success) return s9.data;
        throw s9.error;
      }
      async safeParseAsync(e7, t9) {
        let s9 = { common: { issues: [], contextualErrorMap: t9?.errorMap, async: true }, path: t9?.path || [], schemaErrorMap: this._def.errorMap, parent: null, data: e7, parsedType: R2(e7) }, a11 = this._parse({ data: e7, path: s9.path, parent: s9 }), n17 = await (se2(a11) ? a11 : Promise.resolve(a11));
        return Ce2(s9, n17);
      }
      refine(e7, t9) {
        let s9 = (a11) => typeof t9 == "string" || typeof t9 > "u" ? { message: t9 } : typeof t9 == "function" ? t9(a11) : t9;
        return this._refinement((a11, n17) => {
          let i21 = e7(a11), o18 = () => n17.addIssue({ code: c2.custom, ...s9(a11) });
          return typeof Promise < "u" && i21 instanceof Promise ? i21.then((f14) => f14 ? true : (o18(), false)) : i21 ? true : (o18(), false);
        });
      }
      refinement(e7, t9) {
        return this._refinement((s9, a11) => e7(s9) ? true : (a11.addIssue(typeof t9 == "function" ? t9(s9, a11) : t9), false));
      }
      _refinement(e7) {
        return new S2({ schema: this, typeName: m2.ZodEffects, effect: { type: "refinement", refinement: e7 } });
      }
      superRefine(e7) {
        return this._refinement(e7);
      }
      constructor(e7) {
        this.spa = this.safeParseAsync, this._def = e7, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = { version: 1, vendor: "zod", validate: (t9) => this["~validate"](t9) };
      }
      optional() {
        return C2.create(this, this._def);
      }
      nullable() {
        return j2.create(this, this._def);
      }
      nullish() {
        return this.nullable().optional();
      }
      array() {
        return $2.create(this);
      }
      promise() {
        return z2.create(this, this._def);
      }
      or(e7) {
        return J2.create([this, e7], this._def);
      }
      and(e7) {
        return Y2.create(this, e7, this._def);
      }
      transform(e7) {
        return new S2({ ...y2(this._def), schema: this, typeName: m2.ZodEffects, effect: { type: "transform", transform: e7 } });
      }
      default(e7) {
        let t9 = typeof e7 == "function" ? e7 : () => e7;
        return new K2({ ...y2(this._def), innerType: this, defaultValue: t9, typeName: m2.ZodDefault });
      }
      brand() {
        return new le2({ typeName: m2.ZodBranded, type: this, ...y2(this._def) });
      }
      catch(e7) {
        let t9 = typeof e7 == "function" ? e7 : () => e7;
        return new ee2({ ...y2(this._def), innerType: this, catchValue: t9, typeName: m2.ZodCatch });
      }
      describe(e7) {
        let t9 = this.constructor;
        return new t9({ ...this._def, description: e7 });
      }
      pipe(e7) {
        return fe2.create(this, e7);
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
    Le2 = /^c[^\s-]{8,}$/i;
    Ue2 = /^[0-9a-z]+$/;
    Fe2 = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
    Be2 = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
    We2 = /^[a-z0-9_-]{21}$/i;
    qe2 = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
    Je2 = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
    Ye2 = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
    He2 = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
    Ge2 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
    Qe2 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
    Xe2 = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
    Ke2 = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
    et2 = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
    tt2 = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
    Se2 = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))";
    rt2 = new RegExp(`^${Se2}$`);
    V2 = class r18 extends _2 {
      _parse(e7) {
        if (this._def.coerce && (e7.data = String(e7.data)), this._getType(e7) !== u2.string) {
          let n17 = this._getOrReturnCtx(e7);
          return d2(n17, { code: c2.invalid_type, expected: u2.string, received: n17.parsedType }), p2;
        }
        let s9 = new x2(), a11;
        for (let n17 of this._def.checks) if (n17.kind === "min") e7.data.length < n17.value && (a11 = this._getOrReturnCtx(e7, a11), d2(a11, { code: c2.too_small, minimum: n17.value, type: "string", inclusive: true, exact: false, message: n17.message }), s9.dirty());
        else if (n17.kind === "max") e7.data.length > n17.value && (a11 = this._getOrReturnCtx(e7, a11), d2(a11, { code: c2.too_big, maximum: n17.value, type: "string", inclusive: true, exact: false, message: n17.message }), s9.dirty());
        else if (n17.kind === "length") {
          let i21 = e7.data.length > n17.value, o18 = e7.data.length < n17.value;
          (i21 || o18) && (a11 = this._getOrReturnCtx(e7, a11), i21 ? d2(a11, { code: c2.too_big, maximum: n17.value, type: "string", inclusive: true, exact: true, message: n17.message }) : o18 && d2(a11, { code: c2.too_small, minimum: n17.value, type: "string", inclusive: true, exact: true, message: n17.message }), s9.dirty());
        } else if (n17.kind === "email") Ye2.test(e7.data) || (a11 = this._getOrReturnCtx(e7, a11), d2(a11, { validation: "email", code: c2.invalid_string, message: n17.message }), s9.dirty());
        else if (n17.kind === "emoji") xe2 || (xe2 = new RegExp(He2, "u")), xe2.test(e7.data) || (a11 = this._getOrReturnCtx(e7, a11), d2(a11, { validation: "emoji", code: c2.invalid_string, message: n17.message }), s9.dirty());
        else if (n17.kind === "uuid") Be2.test(e7.data) || (a11 = this._getOrReturnCtx(e7, a11), d2(a11, { validation: "uuid", code: c2.invalid_string, message: n17.message }), s9.dirty());
        else if (n17.kind === "nanoid") We2.test(e7.data) || (a11 = this._getOrReturnCtx(e7, a11), d2(a11, { validation: "nanoid", code: c2.invalid_string, message: n17.message }), s9.dirty());
        else if (n17.kind === "cuid") Le2.test(e7.data) || (a11 = this._getOrReturnCtx(e7, a11), d2(a11, { validation: "cuid", code: c2.invalid_string, message: n17.message }), s9.dirty());
        else if (n17.kind === "cuid2") Ue2.test(e7.data) || (a11 = this._getOrReturnCtx(e7, a11), d2(a11, { validation: "cuid2", code: c2.invalid_string, message: n17.message }), s9.dirty());
        else if (n17.kind === "ulid") Fe2.test(e7.data) || (a11 = this._getOrReturnCtx(e7, a11), d2(a11, { validation: "ulid", code: c2.invalid_string, message: n17.message }), s9.dirty());
        else if (n17.kind === "url") try {
          new URL(e7.data);
        } catch {
          a11 = this._getOrReturnCtx(e7, a11), d2(a11, { validation: "url", code: c2.invalid_string, message: n17.message }), s9.dirty();
        }
        else n17.kind === "regex" ? (n17.regex.lastIndex = 0, n17.regex.test(e7.data) || (a11 = this._getOrReturnCtx(e7, a11), d2(a11, { validation: "regex", code: c2.invalid_string, message: n17.message }), s9.dirty())) : n17.kind === "trim" ? e7.data = e7.data.trim() : n17.kind === "includes" ? e7.data.includes(n17.value, n17.position) || (a11 = this._getOrReturnCtx(e7, a11), d2(a11, { code: c2.invalid_string, validation: { includes: n17.value, position: n17.position }, message: n17.message }), s9.dirty()) : n17.kind === "toLowerCase" ? e7.data = e7.data.toLowerCase() : n17.kind === "toUpperCase" ? e7.data = e7.data.toUpperCase() : n17.kind === "startsWith" ? e7.data.startsWith(n17.value) || (a11 = this._getOrReturnCtx(e7, a11), d2(a11, { code: c2.invalid_string, validation: { startsWith: n17.value }, message: n17.message }), s9.dirty()) : n17.kind === "endsWith" ? e7.data.endsWith(n17.value) || (a11 = this._getOrReturnCtx(e7, a11), d2(a11, { code: c2.invalid_string, validation: { endsWith: n17.value }, message: n17.message }), s9.dirty()) : n17.kind === "datetime" ? Re2(n17).test(e7.data) || (a11 = this._getOrReturnCtx(e7, a11), d2(a11, { code: c2.invalid_string, validation: "datetime", message: n17.message }), s9.dirty()) : n17.kind === "date" ? rt2.test(e7.data) || (a11 = this._getOrReturnCtx(e7, a11), d2(a11, { code: c2.invalid_string, validation: "date", message: n17.message }), s9.dirty()) : n17.kind === "time" ? st2(n17).test(e7.data) || (a11 = this._getOrReturnCtx(e7, a11), d2(a11, { code: c2.invalid_string, validation: "time", message: n17.message }), s9.dirty()) : n17.kind === "duration" ? Je2.test(e7.data) || (a11 = this._getOrReturnCtx(e7, a11), d2(a11, { validation: "duration", code: c2.invalid_string, message: n17.message }), s9.dirty()) : n17.kind === "ip" ? at2(e7.data, n17.version) || (a11 = this._getOrReturnCtx(e7, a11), d2(a11, { validation: "ip", code: c2.invalid_string, message: n17.message }), s9.dirty()) : n17.kind === "jwt" ? nt2(e7.data, n17.alg) || (a11 = this._getOrReturnCtx(e7, a11), d2(a11, { validation: "jwt", code: c2.invalid_string, message: n17.message }), s9.dirty()) : n17.kind === "cidr" ? it2(e7.data, n17.version) || (a11 = this._getOrReturnCtx(e7, a11), d2(a11, { validation: "cidr", code: c2.invalid_string, message: n17.message }), s9.dirty()) : n17.kind === "base64" ? et2.test(e7.data) || (a11 = this._getOrReturnCtx(e7, a11), d2(a11, { validation: "base64", code: c2.invalid_string, message: n17.message }), s9.dirty()) : n17.kind === "base64url" ? tt2.test(e7.data) || (a11 = this._getOrReturnCtx(e7, a11), d2(a11, { validation: "base64url", code: c2.invalid_string, message: n17.message }), s9.dirty()) : g2.assertNever(n17);
        return { status: s9.value, value: e7.data };
      }
      _regex(e7, t9, s9) {
        return this.refinement((a11) => e7.test(a11), { validation: t9, code: c2.invalid_string, ...h2.errToObj(s9) });
      }
      _addCheck(e7) {
        return new r18({ ...this._def, checks: [...this._def.checks, e7] });
      }
      email(e7) {
        return this._addCheck({ kind: "email", ...h2.errToObj(e7) });
      }
      url(e7) {
        return this._addCheck({ kind: "url", ...h2.errToObj(e7) });
      }
      emoji(e7) {
        return this._addCheck({ kind: "emoji", ...h2.errToObj(e7) });
      }
      uuid(e7) {
        return this._addCheck({ kind: "uuid", ...h2.errToObj(e7) });
      }
      nanoid(e7) {
        return this._addCheck({ kind: "nanoid", ...h2.errToObj(e7) });
      }
      cuid(e7) {
        return this._addCheck({ kind: "cuid", ...h2.errToObj(e7) });
      }
      cuid2(e7) {
        return this._addCheck({ kind: "cuid2", ...h2.errToObj(e7) });
      }
      ulid(e7) {
        return this._addCheck({ kind: "ulid", ...h2.errToObj(e7) });
      }
      base64(e7) {
        return this._addCheck({ kind: "base64", ...h2.errToObj(e7) });
      }
      base64url(e7) {
        return this._addCheck({ kind: "base64url", ...h2.errToObj(e7) });
      }
      jwt(e7) {
        return this._addCheck({ kind: "jwt", ...h2.errToObj(e7) });
      }
      ip(e7) {
        return this._addCheck({ kind: "ip", ...h2.errToObj(e7) });
      }
      cidr(e7) {
        return this._addCheck({ kind: "cidr", ...h2.errToObj(e7) });
      }
      datetime(e7) {
        return typeof e7 == "string" ? this._addCheck({ kind: "datetime", precision: null, offset: false, local: false, message: e7 }) : this._addCheck({ kind: "datetime", precision: typeof e7?.precision > "u" ? null : e7?.precision, offset: e7?.offset ?? false, local: e7?.local ?? false, ...h2.errToObj(e7?.message) });
      }
      date(e7) {
        return this._addCheck({ kind: "date", message: e7 });
      }
      time(e7) {
        return typeof e7 == "string" ? this._addCheck({ kind: "time", precision: null, message: e7 }) : this._addCheck({ kind: "time", precision: typeof e7?.precision > "u" ? null : e7?.precision, ...h2.errToObj(e7?.message) });
      }
      duration(e7) {
        return this._addCheck({ kind: "duration", ...h2.errToObj(e7) });
      }
      regex(e7, t9) {
        return this._addCheck({ kind: "regex", regex: e7, ...h2.errToObj(t9) });
      }
      includes(e7, t9) {
        return this._addCheck({ kind: "includes", value: e7, position: t9?.position, ...h2.errToObj(t9?.message) });
      }
      startsWith(e7, t9) {
        return this._addCheck({ kind: "startsWith", value: e7, ...h2.errToObj(t9) });
      }
      endsWith(e7, t9) {
        return this._addCheck({ kind: "endsWith", value: e7, ...h2.errToObj(t9) });
      }
      min(e7, t9) {
        return this._addCheck({ kind: "min", value: e7, ...h2.errToObj(t9) });
      }
      max(e7, t9) {
        return this._addCheck({ kind: "max", value: e7, ...h2.errToObj(t9) });
      }
      length(e7, t9) {
        return this._addCheck({ kind: "length", value: e7, ...h2.errToObj(t9) });
      }
      nonempty(e7) {
        return this.min(1, h2.errToObj(e7));
      }
      trim() {
        return new r18({ ...this._def, checks: [...this._def.checks, { kind: "trim" }] });
      }
      toLowerCase() {
        return new r18({ ...this._def, checks: [...this._def.checks, { kind: "toLowerCase" }] });
      }
      toUpperCase() {
        return new r18({ ...this._def, checks: [...this._def.checks, { kind: "toUpperCase" }] });
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
        for (let t9 of this._def.checks) t9.kind === "min" && (e7 === null || t9.value > e7) && (e7 = t9.value);
        return e7;
      }
      get maxLength() {
        let e7 = null;
        for (let t9 of this._def.checks) t9.kind === "max" && (e7 === null || t9.value < e7) && (e7 = t9.value);
        return e7;
      }
    };
    V2.create = (r39) => new V2({ checks: [], typeName: m2.ZodString, coerce: r39?.coerce ?? false, ...y2(r39) });
    L2 = class r19 extends _2 {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
      }
      _parse(e7) {
        if (this._def.coerce && (e7.data = Number(e7.data)), this._getType(e7) !== u2.number) {
          let n17 = this._getOrReturnCtx(e7);
          return d2(n17, { code: c2.invalid_type, expected: u2.number, received: n17.parsedType }), p2;
        }
        let s9, a11 = new x2();
        for (let n17 of this._def.checks) n17.kind === "int" ? g2.isInteger(e7.data) || (s9 = this._getOrReturnCtx(e7, s9), d2(s9, { code: c2.invalid_type, expected: "integer", received: "float", message: n17.message }), a11.dirty()) : n17.kind === "min" ? (n17.inclusive ? e7.data < n17.value : e7.data <= n17.value) && (s9 = this._getOrReturnCtx(e7, s9), d2(s9, { code: c2.too_small, minimum: n17.value, type: "number", inclusive: n17.inclusive, exact: false, message: n17.message }), a11.dirty()) : n17.kind === "max" ? (n17.inclusive ? e7.data > n17.value : e7.data >= n17.value) && (s9 = this._getOrReturnCtx(e7, s9), d2(s9, { code: c2.too_big, maximum: n17.value, type: "number", inclusive: n17.inclusive, exact: false, message: n17.message }), a11.dirty()) : n17.kind === "multipleOf" ? ot2(e7.data, n17.value) !== 0 && (s9 = this._getOrReturnCtx(e7, s9), d2(s9, { code: c2.not_multiple_of, multipleOf: n17.value, message: n17.message }), a11.dirty()) : n17.kind === "finite" ? Number.isFinite(e7.data) || (s9 = this._getOrReturnCtx(e7, s9), d2(s9, { code: c2.not_finite, message: n17.message }), a11.dirty()) : g2.assertNever(n17);
        return { status: a11.value, value: e7.data };
      }
      gte(e7, t9) {
        return this.setLimit("min", e7, true, h2.toString(t9));
      }
      gt(e7, t9) {
        return this.setLimit("min", e7, false, h2.toString(t9));
      }
      lte(e7, t9) {
        return this.setLimit("max", e7, true, h2.toString(t9));
      }
      lt(e7, t9) {
        return this.setLimit("max", e7, false, h2.toString(t9));
      }
      setLimit(e7, t9, s9, a11) {
        return new r19({ ...this._def, checks: [...this._def.checks, { kind: e7, value: t9, inclusive: s9, message: h2.toString(a11) }] });
      }
      _addCheck(e7) {
        return new r19({ ...this._def, checks: [...this._def.checks, e7] });
      }
      int(e7) {
        return this._addCheck({ kind: "int", message: h2.toString(e7) });
      }
      positive(e7) {
        return this._addCheck({ kind: "min", value: 0, inclusive: false, message: h2.toString(e7) });
      }
      negative(e7) {
        return this._addCheck({ kind: "max", value: 0, inclusive: false, message: h2.toString(e7) });
      }
      nonpositive(e7) {
        return this._addCheck({ kind: "max", value: 0, inclusive: true, message: h2.toString(e7) });
      }
      nonnegative(e7) {
        return this._addCheck({ kind: "min", value: 0, inclusive: true, message: h2.toString(e7) });
      }
      multipleOf(e7, t9) {
        return this._addCheck({ kind: "multipleOf", value: e7, message: h2.toString(t9) });
      }
      finite(e7) {
        return this._addCheck({ kind: "finite", message: h2.toString(e7) });
      }
      safe(e7) {
        return this._addCheck({ kind: "min", inclusive: true, value: Number.MIN_SAFE_INTEGER, message: h2.toString(e7) })._addCheck({ kind: "max", inclusive: true, value: Number.MAX_SAFE_INTEGER, message: h2.toString(e7) });
      }
      get minValue() {
        let e7 = null;
        for (let t9 of this._def.checks) t9.kind === "min" && (e7 === null || t9.value > e7) && (e7 = t9.value);
        return e7;
      }
      get maxValue() {
        let e7 = null;
        for (let t9 of this._def.checks) t9.kind === "max" && (e7 === null || t9.value < e7) && (e7 = t9.value);
        return e7;
      }
      get isInt() {
        return !!this._def.checks.find((e7) => e7.kind === "int" || e7.kind === "multipleOf" && g2.isInteger(e7.value));
      }
      get isFinite() {
        let e7 = null, t9 = null;
        for (let s9 of this._def.checks) {
          if (s9.kind === "finite" || s9.kind === "int" || s9.kind === "multipleOf") return true;
          s9.kind === "min" ? (t9 === null || s9.value > t9) && (t9 = s9.value) : s9.kind === "max" && (e7 === null || s9.value < e7) && (e7 = s9.value);
        }
        return Number.isFinite(t9) && Number.isFinite(e7);
      }
    };
    L2.create = (r39) => new L2({ checks: [], typeName: m2.ZodNumber, coerce: r39?.coerce || false, ...y2(r39) });
    U2 = class r20 extends _2 {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte;
      }
      _parse(e7) {
        if (this._def.coerce) try {
          e7.data = BigInt(e7.data);
        } catch {
          return this._getInvalidInput(e7);
        }
        if (this._getType(e7) !== u2.bigint) return this._getInvalidInput(e7);
        let s9, a11 = new x2();
        for (let n17 of this._def.checks) n17.kind === "min" ? (n17.inclusive ? e7.data < n17.value : e7.data <= n17.value) && (s9 = this._getOrReturnCtx(e7, s9), d2(s9, { code: c2.too_small, type: "bigint", minimum: n17.value, inclusive: n17.inclusive, message: n17.message }), a11.dirty()) : n17.kind === "max" ? (n17.inclusive ? e7.data > n17.value : e7.data >= n17.value) && (s9 = this._getOrReturnCtx(e7, s9), d2(s9, { code: c2.too_big, type: "bigint", maximum: n17.value, inclusive: n17.inclusive, message: n17.message }), a11.dirty()) : n17.kind === "multipleOf" ? e7.data % n17.value !== BigInt(0) && (s9 = this._getOrReturnCtx(e7, s9), d2(s9, { code: c2.not_multiple_of, multipleOf: n17.value, message: n17.message }), a11.dirty()) : g2.assertNever(n17);
        return { status: a11.value, value: e7.data };
      }
      _getInvalidInput(e7) {
        let t9 = this._getOrReturnCtx(e7);
        return d2(t9, { code: c2.invalid_type, expected: u2.bigint, received: t9.parsedType }), p2;
      }
      gte(e7, t9) {
        return this.setLimit("min", e7, true, h2.toString(t9));
      }
      gt(e7, t9) {
        return this.setLimit("min", e7, false, h2.toString(t9));
      }
      lte(e7, t9) {
        return this.setLimit("max", e7, true, h2.toString(t9));
      }
      lt(e7, t9) {
        return this.setLimit("max", e7, false, h2.toString(t9));
      }
      setLimit(e7, t9, s9, a11) {
        return new r20({ ...this._def, checks: [...this._def.checks, { kind: e7, value: t9, inclusive: s9, message: h2.toString(a11) }] });
      }
      _addCheck(e7) {
        return new r20({ ...this._def, checks: [...this._def.checks, e7] });
      }
      positive(e7) {
        return this._addCheck({ kind: "min", value: BigInt(0), inclusive: false, message: h2.toString(e7) });
      }
      negative(e7) {
        return this._addCheck({ kind: "max", value: BigInt(0), inclusive: false, message: h2.toString(e7) });
      }
      nonpositive(e7) {
        return this._addCheck({ kind: "max", value: BigInt(0), inclusive: true, message: h2.toString(e7) });
      }
      nonnegative(e7) {
        return this._addCheck({ kind: "min", value: BigInt(0), inclusive: true, message: h2.toString(e7) });
      }
      multipleOf(e7, t9) {
        return this._addCheck({ kind: "multipleOf", value: e7, message: h2.toString(t9) });
      }
      get minValue() {
        let e7 = null;
        for (let t9 of this._def.checks) t9.kind === "min" && (e7 === null || t9.value > e7) && (e7 = t9.value);
        return e7;
      }
      get maxValue() {
        let e7 = null;
        for (let t9 of this._def.checks) t9.kind === "max" && (e7 === null || t9.value < e7) && (e7 = t9.value);
        return e7;
      }
    };
    U2.create = (r39) => new U2({ checks: [], typeName: m2.ZodBigInt, coerce: r39?.coerce ?? false, ...y2(r39) });
    F2 = class extends _2 {
      _parse(e7) {
        if (this._def.coerce && (e7.data = !!e7.data), this._getType(e7) !== u2.boolean) {
          let s9 = this._getOrReturnCtx(e7);
          return d2(s9, { code: c2.invalid_type, expected: u2.boolean, received: s9.parsedType }), p2;
        }
        return k2(e7.data);
      }
    };
    F2.create = (r39) => new F2({ typeName: m2.ZodBoolean, coerce: r39?.coerce || false, ...y2(r39) });
    B2 = class r21 extends _2 {
      _parse(e7) {
        if (this._def.coerce && (e7.data = new Date(e7.data)), this._getType(e7) !== u2.date) {
          let n17 = this._getOrReturnCtx(e7);
          return d2(n17, { code: c2.invalid_type, expected: u2.date, received: n17.parsedType }), p2;
        }
        if (Number.isNaN(e7.data.getTime())) {
          let n17 = this._getOrReturnCtx(e7);
          return d2(n17, { code: c2.invalid_date }), p2;
        }
        let s9 = new x2(), a11;
        for (let n17 of this._def.checks) n17.kind === "min" ? e7.data.getTime() < n17.value && (a11 = this._getOrReturnCtx(e7, a11), d2(a11, { code: c2.too_small, message: n17.message, inclusive: true, exact: false, minimum: n17.value, type: "date" }), s9.dirty()) : n17.kind === "max" ? e7.data.getTime() > n17.value && (a11 = this._getOrReturnCtx(e7, a11), d2(a11, { code: c2.too_big, message: n17.message, inclusive: true, exact: false, maximum: n17.value, type: "date" }), s9.dirty()) : g2.assertNever(n17);
        return { status: s9.value, value: new Date(e7.data.getTime()) };
      }
      _addCheck(e7) {
        return new r21({ ...this._def, checks: [...this._def.checks, e7] });
      }
      min(e7, t9) {
        return this._addCheck({ kind: "min", value: e7.getTime(), message: h2.toString(t9) });
      }
      max(e7, t9) {
        return this._addCheck({ kind: "max", value: e7.getTime(), message: h2.toString(t9) });
      }
      get minDate() {
        let e7 = null;
        for (let t9 of this._def.checks) t9.kind === "min" && (e7 === null || t9.value > e7) && (e7 = t9.value);
        return e7 != null ? new Date(e7) : null;
      }
      get maxDate() {
        let e7 = null;
        for (let t9 of this._def.checks) t9.kind === "max" && (e7 === null || t9.value < e7) && (e7 = t9.value);
        return e7 != null ? new Date(e7) : null;
      }
    };
    B2.create = (r39) => new B2({ checks: [], coerce: r39?.coerce || false, typeName: m2.ZodDate, ...y2(r39) });
    ne2 = class extends _2 {
      _parse(e7) {
        if (this._getType(e7) !== u2.symbol) {
          let s9 = this._getOrReturnCtx(e7);
          return d2(s9, { code: c2.invalid_type, expected: u2.symbol, received: s9.parsedType }), p2;
        }
        return k2(e7.data);
      }
    };
    ne2.create = (r39) => new ne2({ typeName: m2.ZodSymbol, ...y2(r39) });
    W2 = class extends _2 {
      _parse(e7) {
        if (this._getType(e7) !== u2.undefined) {
          let s9 = this._getOrReturnCtx(e7);
          return d2(s9, { code: c2.invalid_type, expected: u2.undefined, received: s9.parsedType }), p2;
        }
        return k2(e7.data);
      }
    };
    W2.create = (r39) => new W2({ typeName: m2.ZodUndefined, ...y2(r39) });
    q2 = class extends _2 {
      _parse(e7) {
        if (this._getType(e7) !== u2.null) {
          let s9 = this._getOrReturnCtx(e7);
          return d2(s9, { code: c2.invalid_type, expected: u2.null, received: s9.parsedType }), p2;
        }
        return k2(e7.data);
      }
    };
    q2.create = (r39) => new q2({ typeName: m2.ZodNull, ...y2(r39) });
    P2 = class extends _2 {
      constructor() {
        super(...arguments), this._any = true;
      }
      _parse(e7) {
        return k2(e7.data);
      }
    };
    P2.create = (r39) => new P2({ typeName: m2.ZodAny, ...y2(r39) });
    Z2 = class extends _2 {
      constructor() {
        super(...arguments), this._unknown = true;
      }
      _parse(e7) {
        return k2(e7.data);
      }
    };
    Z2.create = (r39) => new Z2({ typeName: m2.ZodUnknown, ...y2(r39) });
    A2 = class extends _2 {
      _parse(e7) {
        let t9 = this._getOrReturnCtx(e7);
        return d2(t9, { code: c2.invalid_type, expected: u2.never, received: t9.parsedType }), p2;
      }
    };
    A2.create = (r39) => new A2({ typeName: m2.ZodNever, ...y2(r39) });
    ie2 = class extends _2 {
      _parse(e7) {
        if (this._getType(e7) !== u2.undefined) {
          let s9 = this._getOrReturnCtx(e7);
          return d2(s9, { code: c2.invalid_type, expected: u2.void, received: s9.parsedType }), p2;
        }
        return k2(e7.data);
      }
    };
    ie2.create = (r39) => new ie2({ typeName: m2.ZodVoid, ...y2(r39) });
    $2 = class r22 extends _2 {
      _parse(e7) {
        let { ctx: t9, status: s9 } = this._processInputParams(e7), a11 = this._def;
        if (t9.parsedType !== u2.array) return d2(t9, { code: c2.invalid_type, expected: u2.array, received: t9.parsedType }), p2;
        if (a11.exactLength !== null) {
          let i21 = t9.data.length > a11.exactLength.value, o18 = t9.data.length < a11.exactLength.value;
          (i21 || o18) && (d2(t9, { code: i21 ? c2.too_big : c2.too_small, minimum: o18 ? a11.exactLength.value : void 0, maximum: i21 ? a11.exactLength.value : void 0, type: "array", inclusive: true, exact: true, message: a11.exactLength.message }), s9.dirty());
        }
        if (a11.minLength !== null && t9.data.length < a11.minLength.value && (d2(t9, { code: c2.too_small, minimum: a11.minLength.value, type: "array", inclusive: true, exact: false, message: a11.minLength.message }), s9.dirty()), a11.maxLength !== null && t9.data.length > a11.maxLength.value && (d2(t9, { code: c2.too_big, maximum: a11.maxLength.value, type: "array", inclusive: true, exact: false, message: a11.maxLength.message }), s9.dirty()), t9.common.async) return Promise.all([...t9.data].map((i21, o18) => a11.type._parseAsync(new O2(t9, i21, t9.path, o18)))).then((i21) => x2.mergeArray(s9, i21));
        let n17 = [...t9.data].map((i21, o18) => a11.type._parseSync(new O2(t9, i21, t9.path, o18)));
        return x2.mergeArray(s9, n17);
      }
      get element() {
        return this._def.type;
      }
      min(e7, t9) {
        return new r22({ ...this._def, minLength: { value: e7, message: h2.toString(t9) } });
      }
      max(e7, t9) {
        return new r22({ ...this._def, maxLength: { value: e7, message: h2.toString(t9) } });
      }
      length(e7, t9) {
        return new r22({ ...this._def, exactLength: { value: e7, message: h2.toString(t9) } });
      }
      nonempty(e7) {
        return this.min(1, e7);
      }
    };
    $2.create = (r39, e7) => new $2({ type: r39, minLength: null, maxLength: null, exactLength: null, typeName: m2.ZodArray, ...y2(e7) });
    w2 = class r23 extends _2 {
      constructor() {
        super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
      }
      _getCached() {
        if (this._cached !== null) return this._cached;
        let e7 = this._def.shape(), t9 = g2.objectKeys(e7);
        return this._cached = { shape: e7, keys: t9 }, this._cached;
      }
      _parse(e7) {
        if (this._getType(e7) !== u2.object) {
          let l16 = this._getOrReturnCtx(e7);
          return d2(l16, { code: c2.invalid_type, expected: u2.object, received: l16.parsedType }), p2;
        }
        let { status: s9, ctx: a11 } = this._processInputParams(e7), { shape: n17, keys: i21 } = this._getCached(), o18 = [];
        if (!(this._def.catchall instanceof A2 && this._def.unknownKeys === "strip")) for (let l16 in a11.data) i21.includes(l16) || o18.push(l16);
        let f14 = [];
        for (let l16 of i21) {
          let v9 = n17[l16], T9 = a11.data[l16];
          f14.push({ key: { status: "valid", value: l16 }, value: v9._parse(new O2(a11, T9, a11.path, l16)), alwaysSet: l16 in a11.data });
        }
        if (this._def.catchall instanceof A2) {
          let l16 = this._def.unknownKeys;
          if (l16 === "passthrough") for (let v9 of o18) f14.push({ key: { status: "valid", value: v9 }, value: { status: "valid", value: a11.data[v9] } });
          else if (l16 === "strict") o18.length > 0 && (d2(a11, { code: c2.unrecognized_keys, keys: o18 }), s9.dirty());
          else if (l16 !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
        } else {
          let l16 = this._def.catchall;
          for (let v9 of o18) {
            let T9 = a11.data[v9];
            f14.push({ key: { status: "valid", value: v9 }, value: l16._parse(new O2(a11, T9, a11.path, v9)), alwaysSet: v9 in a11.data });
          }
        }
        return a11.common.async ? Promise.resolve().then(async () => {
          let l16 = [];
          for (let v9 of f14) {
            let T9 = await v9.key, we3 = await v9.value;
            l16.push({ key: T9, value: we3, alwaysSet: v9.alwaysSet });
          }
          return l16;
        }).then((l16) => x2.mergeObjectSync(s9, l16)) : x2.mergeObjectSync(s9, f14);
      }
      get shape() {
        return this._def.shape();
      }
      strict(e7) {
        return h2.errToObj, new r23({ ...this._def, unknownKeys: "strict", ...e7 !== void 0 ? { errorMap: (t9, s9) => {
          let a11 = this._def.errorMap?.(t9, s9).message ?? s9.defaultError;
          return t9.code === "unrecognized_keys" ? { message: h2.errToObj(e7).message ?? a11 } : { message: a11 };
        } } : {} });
      }
      strip() {
        return new r23({ ...this._def, unknownKeys: "strip" });
      }
      passthrough() {
        return new r23({ ...this._def, unknownKeys: "passthrough" });
      }
      extend(e7) {
        return new r23({ ...this._def, shape: () => ({ ...this._def.shape(), ...e7 }) });
      }
      merge(e7) {
        return new r23({ unknownKeys: e7._def.unknownKeys, catchall: e7._def.catchall, shape: () => ({ ...this._def.shape(), ...e7._def.shape() }), typeName: m2.ZodObject });
      }
      setKey(e7, t9) {
        return this.augment({ [e7]: t9 });
      }
      catchall(e7) {
        return new r23({ ...this._def, catchall: e7 });
      }
      pick(e7) {
        let t9 = {};
        for (let s9 of g2.objectKeys(e7)) e7[s9] && this.shape[s9] && (t9[s9] = this.shape[s9]);
        return new r23({ ...this._def, shape: () => t9 });
      }
      omit(e7) {
        let t9 = {};
        for (let s9 of g2.objectKeys(this.shape)) e7[s9] || (t9[s9] = this.shape[s9]);
        return new r23({ ...this._def, shape: () => t9 });
      }
      deepPartial() {
        return ae2(this);
      }
      partial(e7) {
        let t9 = {};
        for (let s9 of g2.objectKeys(this.shape)) {
          let a11 = this.shape[s9];
          e7 && !e7[s9] ? t9[s9] = a11 : t9[s9] = a11.optional();
        }
        return new r23({ ...this._def, shape: () => t9 });
      }
      required(e7) {
        let t9 = {};
        for (let s9 of g2.objectKeys(this.shape)) if (e7 && !e7[s9]) t9[s9] = this.shape[s9];
        else {
          let n17 = this.shape[s9];
          for (; n17 instanceof C2; ) n17 = n17._def.innerType;
          t9[s9] = n17;
        }
        return new r23({ ...this._def, shape: () => t9 });
      }
      keyof() {
        return Ne2(g2.objectKeys(this.shape));
      }
    };
    w2.create = (r39, e7) => new w2({ shape: () => r39, unknownKeys: "strip", catchall: A2.create(), typeName: m2.ZodObject, ...y2(e7) });
    w2.strictCreate = (r39, e7) => new w2({ shape: () => r39, unknownKeys: "strict", catchall: A2.create(), typeName: m2.ZodObject, ...y2(e7) });
    w2.lazycreate = (r39, e7) => new w2({ shape: r39, unknownKeys: "strip", catchall: A2.create(), typeName: m2.ZodObject, ...y2(e7) });
    J2 = class extends _2 {
      _parse(e7) {
        let { ctx: t9 } = this._processInputParams(e7), s9 = this._def.options;
        function a11(n17) {
          for (let o18 of n17) if (o18.result.status === "valid") return o18.result;
          for (let o18 of n17) if (o18.result.status === "dirty") return t9.common.issues.push(...o18.ctx.common.issues), o18.result;
          let i21 = n17.map((o18) => new b2(o18.ctx.common.issues));
          return d2(t9, { code: c2.invalid_union, unionErrors: i21 }), p2;
        }
        if (t9.common.async) return Promise.all(s9.map(async (n17) => {
          let i21 = { ...t9, common: { ...t9.common, issues: [] }, parent: null };
          return { result: await n17._parseAsync({ data: t9.data, path: t9.path, parent: i21 }), ctx: i21 };
        })).then(a11);
        {
          let n17, i21 = [];
          for (let f14 of s9) {
            let l16 = { ...t9, common: { ...t9.common, issues: [] }, parent: null }, v9 = f14._parseSync({ data: t9.data, path: t9.path, parent: l16 });
            if (v9.status === "valid") return v9;
            v9.status === "dirty" && !n17 && (n17 = { result: v9, ctx: l16 }), l16.common.issues.length && i21.push(l16.common.issues);
          }
          if (n17) return t9.common.issues.push(...n17.ctx.common.issues), n17.result;
          let o18 = i21.map((f14) => new b2(f14));
          return d2(t9, { code: c2.invalid_union, unionErrors: o18 }), p2;
        }
      }
      get options() {
        return this._def.options;
      }
    };
    J2.create = (r39, e7) => new J2({ options: r39, typeName: m2.ZodUnion, ...y2(e7) });
    E2 = (r39) => r39 instanceof H2 ? E2(r39.schema) : r39 instanceof S2 ? E2(r39.innerType()) : r39 instanceof G2 ? [r39.value] : r39 instanceof Q2 ? r39.options : r39 instanceof X2 ? g2.objectValues(r39.enum) : r39 instanceof K2 ? E2(r39._def.innerType) : r39 instanceof W2 ? [void 0] : r39 instanceof q2 ? [null] : r39 instanceof C2 ? [void 0, ...E2(r39.unwrap())] : r39 instanceof j2 ? [null, ...E2(r39.unwrap())] : r39 instanceof le2 || r39 instanceof te2 ? E2(r39.unwrap()) : r39 instanceof ee2 ? E2(r39._def.innerType) : [];
    me2 = class r24 extends _2 {
      _parse(e7) {
        let { ctx: t9 } = this._processInputParams(e7);
        if (t9.parsedType !== u2.object) return d2(t9, { code: c2.invalid_type, expected: u2.object, received: t9.parsedType }), p2;
        let s9 = this.discriminator, a11 = t9.data[s9], n17 = this.optionsMap.get(a11);
        return n17 ? t9.common.async ? n17._parseAsync({ data: t9.data, path: t9.path, parent: t9 }) : n17._parseSync({ data: t9.data, path: t9.path, parent: t9 }) : (d2(t9, { code: c2.invalid_union_discriminator, options: Array.from(this.optionsMap.keys()), path: [s9] }), p2);
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
      static create(e7, t9, s9) {
        let a11 = /* @__PURE__ */ new Map();
        for (let n17 of t9) {
          let i21 = E2(n17.shape[e7]);
          if (!i21.length) throw new Error(`A discriminator value for key \`${e7}\` could not be extracted from all schema options`);
          for (let o18 of i21) {
            if (a11.has(o18)) throw new Error(`Discriminator property ${String(e7)} has duplicate value ${String(o18)}`);
            a11.set(o18, n17);
          }
        }
        return new r24({ typeName: m2.ZodDiscriminatedUnion, discriminator: e7, options: t9, optionsMap: a11, ...y2(s9) });
      }
    };
    Y2 = class extends _2 {
      _parse(e7) {
        let { status: t9, ctx: s9 } = this._processInputParams(e7), a11 = (n17, i21) => {
          if (he2(n17) || he2(i21)) return p2;
          let o18 = ke2(n17.value, i21.value);
          return o18.valid ? ((pe2(n17) || pe2(i21)) && t9.dirty(), { status: t9.value, value: o18.data }) : (d2(s9, { code: c2.invalid_intersection_types }), p2);
        };
        return s9.common.async ? Promise.all([this._def.left._parseAsync({ data: s9.data, path: s9.path, parent: s9 }), this._def.right._parseAsync({ data: s9.data, path: s9.path, parent: s9 })]).then(([n17, i21]) => a11(n17, i21)) : a11(this._def.left._parseSync({ data: s9.data, path: s9.path, parent: s9 }), this._def.right._parseSync({ data: s9.data, path: s9.path, parent: s9 }));
      }
    };
    Y2.create = (r39, e7, t9) => new Y2({ left: r39, right: e7, typeName: m2.ZodIntersection, ...y2(t9) });
    N2 = class r25 extends _2 {
      _parse(e7) {
        let { status: t9, ctx: s9 } = this._processInputParams(e7);
        if (s9.parsedType !== u2.array) return d2(s9, { code: c2.invalid_type, expected: u2.array, received: s9.parsedType }), p2;
        if (s9.data.length < this._def.items.length) return d2(s9, { code: c2.too_small, minimum: this._def.items.length, inclusive: true, exact: false, type: "array" }), p2;
        !this._def.rest && s9.data.length > this._def.items.length && (d2(s9, { code: c2.too_big, maximum: this._def.items.length, inclusive: true, exact: false, type: "array" }), t9.dirty());
        let n17 = [...s9.data].map((i21, o18) => {
          let f14 = this._def.items[o18] || this._def.rest;
          return f14 ? f14._parse(new O2(s9, i21, s9.path, o18)) : null;
        }).filter((i21) => !!i21);
        return s9.common.async ? Promise.all(n17).then((i21) => x2.mergeArray(t9, i21)) : x2.mergeArray(t9, n17);
      }
      get items() {
        return this._def.items;
      }
      rest(e7) {
        return new r25({ ...this._def, rest: e7 });
      }
    };
    N2.create = (r39, e7) => {
      if (!Array.isArray(r39)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      return new N2({ items: r39, typeName: m2.ZodTuple, rest: null, ...y2(e7) });
    };
    ye2 = class r26 extends _2 {
      get keySchema() {
        return this._def.keyType;
      }
      get valueSchema() {
        return this._def.valueType;
      }
      _parse(e7) {
        let { status: t9, ctx: s9 } = this._processInputParams(e7);
        if (s9.parsedType !== u2.object) return d2(s9, { code: c2.invalid_type, expected: u2.object, received: s9.parsedType }), p2;
        let a11 = [], n17 = this._def.keyType, i21 = this._def.valueType;
        for (let o18 in s9.data) a11.push({ key: n17._parse(new O2(s9, o18, s9.path, o18)), value: i21._parse(new O2(s9, s9.data[o18], s9.path, o18)), alwaysSet: o18 in s9.data });
        return s9.common.async ? x2.mergeObjectAsync(t9, a11) : x2.mergeObjectSync(t9, a11);
      }
      get element() {
        return this._def.valueType;
      }
      static create(e7, t9, s9) {
        return t9 instanceof _2 ? new r26({ keyType: e7, valueType: t9, typeName: m2.ZodRecord, ...y2(s9) }) : new r26({ keyType: V2.create(), valueType: e7, typeName: m2.ZodRecord, ...y2(t9) });
      }
    };
    oe2 = class extends _2 {
      get keySchema() {
        return this._def.keyType;
      }
      get valueSchema() {
        return this._def.valueType;
      }
      _parse(e7) {
        let { status: t9, ctx: s9 } = this._processInputParams(e7);
        if (s9.parsedType !== u2.map) return d2(s9, { code: c2.invalid_type, expected: u2.map, received: s9.parsedType }), p2;
        let a11 = this._def.keyType, n17 = this._def.valueType, i21 = [...s9.data.entries()].map(([o18, f14], l16) => ({ key: a11._parse(new O2(s9, o18, s9.path, [l16, "key"])), value: n17._parse(new O2(s9, f14, s9.path, [l16, "value"])) }));
        if (s9.common.async) {
          let o18 = /* @__PURE__ */ new Map();
          return Promise.resolve().then(async () => {
            for (let f14 of i21) {
              let l16 = await f14.key, v9 = await f14.value;
              if (l16.status === "aborted" || v9.status === "aborted") return p2;
              (l16.status === "dirty" || v9.status === "dirty") && t9.dirty(), o18.set(l16.value, v9.value);
            }
            return { status: t9.value, value: o18 };
          });
        } else {
          let o18 = /* @__PURE__ */ new Map();
          for (let f14 of i21) {
            let l16 = f14.key, v9 = f14.value;
            if (l16.status === "aborted" || v9.status === "aborted") return p2;
            (l16.status === "dirty" || v9.status === "dirty") && t9.dirty(), o18.set(l16.value, v9.value);
          }
          return { status: t9.value, value: o18 };
        }
      }
    };
    oe2.create = (r39, e7, t9) => new oe2({ valueType: e7, keyType: r39, typeName: m2.ZodMap, ...y2(t9) });
    ce2 = class r27 extends _2 {
      _parse(e7) {
        let { status: t9, ctx: s9 } = this._processInputParams(e7);
        if (s9.parsedType !== u2.set) return d2(s9, { code: c2.invalid_type, expected: u2.set, received: s9.parsedType }), p2;
        let a11 = this._def;
        a11.minSize !== null && s9.data.size < a11.minSize.value && (d2(s9, { code: c2.too_small, minimum: a11.minSize.value, type: "set", inclusive: true, exact: false, message: a11.minSize.message }), t9.dirty()), a11.maxSize !== null && s9.data.size > a11.maxSize.value && (d2(s9, { code: c2.too_big, maximum: a11.maxSize.value, type: "set", inclusive: true, exact: false, message: a11.maxSize.message }), t9.dirty());
        let n17 = this._def.valueType;
        function i21(f14) {
          let l16 = /* @__PURE__ */ new Set();
          for (let v9 of f14) {
            if (v9.status === "aborted") return p2;
            v9.status === "dirty" && t9.dirty(), l16.add(v9.value);
          }
          return { status: t9.value, value: l16 };
        }
        let o18 = [...s9.data.values()].map((f14, l16) => n17._parse(new O2(s9, f14, s9.path, l16)));
        return s9.common.async ? Promise.all(o18).then((f14) => i21(f14)) : i21(o18);
      }
      min(e7, t9) {
        return new r27({ ...this._def, minSize: { value: e7, message: h2.toString(t9) } });
      }
      max(e7, t9) {
        return new r27({ ...this._def, maxSize: { value: e7, message: h2.toString(t9) } });
      }
      size(e7, t9) {
        return this.min(e7, t9).max(e7, t9);
      }
      nonempty(e7) {
        return this.min(1, e7);
      }
    };
    ce2.create = (r39, e7) => new ce2({ valueType: r39, minSize: null, maxSize: null, typeName: m2.ZodSet, ...y2(e7) });
    _e2 = class r28 extends _2 {
      constructor() {
        super(...arguments), this.validate = this.implement;
      }
      _parse(e7) {
        let { ctx: t9 } = this._processInputParams(e7);
        if (t9.parsedType !== u2.function) return d2(t9, { code: c2.invalid_type, expected: u2.function, received: t9.parsedType }), p2;
        function s9(o18, f14) {
          return ue2({ data: o18, path: t9.path, errorMaps: [t9.common.contextualErrorMap, t9.schemaErrorMap, re2(), I2].filter((l16) => !!l16), issueData: { code: c2.invalid_arguments, argumentsError: f14 } });
        }
        function a11(o18, f14) {
          return ue2({ data: o18, path: t9.path, errorMaps: [t9.common.contextualErrorMap, t9.schemaErrorMap, re2(), I2].filter((l16) => !!l16), issueData: { code: c2.invalid_return_type, returnTypeError: f14 } });
        }
        let n17 = { errorMap: t9.common.contextualErrorMap }, i21 = t9.data;
        if (this._def.returns instanceof z2) {
          let o18 = this;
          return k2(async function(...f14) {
            let l16 = new b2([]), v9 = await o18._def.args.parseAsync(f14, n17).catch((ge5) => {
              throw l16.addIssue(s9(f14, ge5)), l16;
            }), T9 = await Reflect.apply(i21, this, v9);
            return await o18._def.returns._def.type.parseAsync(T9, n17).catch((ge5) => {
              throw l16.addIssue(a11(T9, ge5)), l16;
            });
          });
        } else {
          let o18 = this;
          return k2(function(...f14) {
            let l16 = o18._def.args.safeParse(f14, n17);
            if (!l16.success) throw new b2([s9(f14, l16.error)]);
            let v9 = Reflect.apply(i21, this, l16.data), T9 = o18._def.returns.safeParse(v9, n17);
            if (!T9.success) throw new b2([a11(v9, T9.error)]);
            return T9.data;
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
        return new r28({ ...this._def, args: N2.create(e7).rest(Z2.create()) });
      }
      returns(e7) {
        return new r28({ ...this._def, returns: e7 });
      }
      implement(e7) {
        return this.parse(e7);
      }
      strictImplement(e7) {
        return this.parse(e7);
      }
      static create(e7, t9, s9) {
        return new r28({ args: e7 || N2.create([]).rest(Z2.create()), returns: t9 || Z2.create(), typeName: m2.ZodFunction, ...y2(s9) });
      }
    };
    H2 = class extends _2 {
      get schema() {
        return this._def.getter();
      }
      _parse(e7) {
        let { ctx: t9 } = this._processInputParams(e7);
        return this._def.getter()._parse({ data: t9.data, path: t9.path, parent: t9 });
      }
    };
    H2.create = (r39, e7) => new H2({ getter: r39, typeName: m2.ZodLazy, ...y2(e7) });
    G2 = class extends _2 {
      _parse(e7) {
        if (e7.data !== this._def.value) {
          let t9 = this._getOrReturnCtx(e7);
          return d2(t9, { received: t9.data, code: c2.invalid_literal, expected: this._def.value }), p2;
        }
        return { status: "valid", value: e7.data };
      }
      get value() {
        return this._def.value;
      }
    };
    G2.create = (r39, e7) => new G2({ value: r39, typeName: m2.ZodLiteral, ...y2(e7) });
    Q2 = class r29 extends _2 {
      _parse(e7) {
        if (typeof e7.data != "string") {
          let t9 = this._getOrReturnCtx(e7), s9 = this._def.values;
          return d2(t9, { expected: g2.joinValues(s9), received: t9.parsedType, code: c2.invalid_type }), p2;
        }
        if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(e7.data)) {
          let t9 = this._getOrReturnCtx(e7), s9 = this._def.values;
          return d2(t9, { received: t9.data, code: c2.invalid_enum_value, options: s9 }), p2;
        }
        return k2(e7.data);
      }
      get options() {
        return this._def.values;
      }
      get enum() {
        let e7 = {};
        for (let t9 of this._def.values) e7[t9] = t9;
        return e7;
      }
      get Values() {
        let e7 = {};
        for (let t9 of this._def.values) e7[t9] = t9;
        return e7;
      }
      get Enum() {
        let e7 = {};
        for (let t9 of this._def.values) e7[t9] = t9;
        return e7;
      }
      extract(e7, t9 = this._def) {
        return r29.create(e7, { ...this._def, ...t9 });
      }
      exclude(e7, t9 = this._def) {
        return r29.create(this.options.filter((s9) => !e7.includes(s9)), { ...this._def, ...t9 });
      }
    };
    Q2.create = Ne2;
    X2 = class extends _2 {
      _parse(e7) {
        let t9 = g2.getValidEnumValues(this._def.values), s9 = this._getOrReturnCtx(e7);
        if (s9.parsedType !== u2.string && s9.parsedType !== u2.number) {
          let a11 = g2.objectValues(t9);
          return d2(s9, { expected: g2.joinValues(a11), received: s9.parsedType, code: c2.invalid_type }), p2;
        }
        if (this._cache || (this._cache = new Set(g2.getValidEnumValues(this._def.values))), !this._cache.has(e7.data)) {
          let a11 = g2.objectValues(t9);
          return d2(s9, { received: s9.data, code: c2.invalid_enum_value, options: a11 }), p2;
        }
        return k2(e7.data);
      }
      get enum() {
        return this._def.values;
      }
    };
    X2.create = (r39, e7) => new X2({ values: r39, typeName: m2.ZodNativeEnum, ...y2(e7) });
    z2 = class extends _2 {
      unwrap() {
        return this._def.type;
      }
      _parse(e7) {
        let { ctx: t9 } = this._processInputParams(e7);
        if (t9.parsedType !== u2.promise && t9.common.async === false) return d2(t9, { code: c2.invalid_type, expected: u2.promise, received: t9.parsedType }), p2;
        let s9 = t9.parsedType === u2.promise ? t9.data : Promise.resolve(t9.data);
        return k2(s9.then((a11) => this._def.type.parseAsync(a11, { path: t9.path, errorMap: t9.common.contextualErrorMap })));
      }
    };
    z2.create = (r39, e7) => new z2({ type: r39, typeName: m2.ZodPromise, ...y2(e7) });
    S2 = class extends _2 {
      innerType() {
        return this._def.schema;
      }
      sourceType() {
        return this._def.schema._def.typeName === m2.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
      }
      _parse(e7) {
        let { status: t9, ctx: s9 } = this._processInputParams(e7), a11 = this._def.effect || null, n17 = { addIssue: (i21) => {
          d2(s9, i21), i21.fatal ? t9.abort() : t9.dirty();
        }, get path() {
          return s9.path;
        } };
        if (n17.addIssue = n17.addIssue.bind(n17), a11.type === "preprocess") {
          let i21 = a11.transform(s9.data, n17);
          if (s9.common.async) return Promise.resolve(i21).then(async (o18) => {
            if (t9.value === "aborted") return p2;
            let f14 = await this._def.schema._parseAsync({ data: o18, path: s9.path, parent: s9 });
            return f14.status === "aborted" ? p2 : f14.status === "dirty" ? D2(f14.value) : t9.value === "dirty" ? D2(f14.value) : f14;
          });
          {
            if (t9.value === "aborted") return p2;
            let o18 = this._def.schema._parseSync({ data: i21, path: s9.path, parent: s9 });
            return o18.status === "aborted" ? p2 : o18.status === "dirty" ? D2(o18.value) : t9.value === "dirty" ? D2(o18.value) : o18;
          }
        }
        if (a11.type === "refinement") {
          let i21 = (o18) => {
            let f14 = a11.refinement(o18, n17);
            if (s9.common.async) return Promise.resolve(f14);
            if (f14 instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            return o18;
          };
          if (s9.common.async === false) {
            let o18 = this._def.schema._parseSync({ data: s9.data, path: s9.path, parent: s9 });
            return o18.status === "aborted" ? p2 : (o18.status === "dirty" && t9.dirty(), i21(o18.value), { status: t9.value, value: o18.value });
          } else return this._def.schema._parseAsync({ data: s9.data, path: s9.path, parent: s9 }).then((o18) => o18.status === "aborted" ? p2 : (o18.status === "dirty" && t9.dirty(), i21(o18.value).then(() => ({ status: t9.value, value: o18.value }))));
        }
        if (a11.type === "transform") if (s9.common.async === false) {
          let i21 = this._def.schema._parseSync({ data: s9.data, path: s9.path, parent: s9 });
          if (!M2(i21)) return p2;
          let o18 = a11.transform(i21.value, n17);
          if (o18 instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
          return { status: t9.value, value: o18 };
        } else return this._def.schema._parseAsync({ data: s9.data, path: s9.path, parent: s9 }).then((i21) => M2(i21) ? Promise.resolve(a11.transform(i21.value, n17)).then((o18) => ({ status: t9.value, value: o18 })) : p2);
        g2.assertNever(a11);
      }
    };
    S2.create = (r39, e7, t9) => new S2({ schema: r39, typeName: m2.ZodEffects, effect: e7, ...y2(t9) });
    S2.createWithPreprocess = (r39, e7, t9) => new S2({ schema: e7, effect: { type: "preprocess", transform: r39 }, typeName: m2.ZodEffects, ...y2(t9) });
    C2 = class extends _2 {
      _parse(e7) {
        return this._getType(e7) === u2.undefined ? k2(void 0) : this._def.innerType._parse(e7);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    C2.create = (r39, e7) => new C2({ innerType: r39, typeName: m2.ZodOptional, ...y2(e7) });
    j2 = class extends _2 {
      _parse(e7) {
        return this._getType(e7) === u2.null ? k2(null) : this._def.innerType._parse(e7);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    j2.create = (r39, e7) => new j2({ innerType: r39, typeName: m2.ZodNullable, ...y2(e7) });
    K2 = class extends _2 {
      _parse(e7) {
        let { ctx: t9 } = this._processInputParams(e7), s9 = t9.data;
        return t9.parsedType === u2.undefined && (s9 = this._def.defaultValue()), this._def.innerType._parse({ data: s9, path: t9.path, parent: t9 });
      }
      removeDefault() {
        return this._def.innerType;
      }
    };
    K2.create = (r39, e7) => new K2({ innerType: r39, typeName: m2.ZodDefault, defaultValue: typeof e7.default == "function" ? e7.default : () => e7.default, ...y2(e7) });
    ee2 = class extends _2 {
      _parse(e7) {
        let { ctx: t9 } = this._processInputParams(e7), s9 = { ...t9, common: { ...t9.common, issues: [] } }, a11 = this._def.innerType._parse({ data: s9.data, path: s9.path, parent: { ...s9 } });
        return se2(a11) ? a11.then((n17) => ({ status: "valid", value: n17.status === "valid" ? n17.value : this._def.catchValue({ get error() {
          return new b2(s9.common.issues);
        }, input: s9.data }) })) : { status: "valid", value: a11.status === "valid" ? a11.value : this._def.catchValue({ get error() {
          return new b2(s9.common.issues);
        }, input: s9.data }) };
      }
      removeCatch() {
        return this._def.innerType;
      }
    };
    ee2.create = (r39, e7) => new ee2({ innerType: r39, typeName: m2.ZodCatch, catchValue: typeof e7.catch == "function" ? e7.catch : () => e7.catch, ...y2(e7) });
    de2 = class extends _2 {
      _parse(e7) {
        if (this._getType(e7) !== u2.nan) {
          let s9 = this._getOrReturnCtx(e7);
          return d2(s9, { code: c2.invalid_type, expected: u2.nan, received: s9.parsedType }), p2;
        }
        return { status: "valid", value: e7.data };
      }
    };
    de2.create = (r39) => new de2({ typeName: m2.ZodNaN, ...y2(r39) });
    ct2 = Symbol("zod_brand");
    le2 = class extends _2 {
      _parse(e7) {
        let { ctx: t9 } = this._processInputParams(e7), s9 = t9.data;
        return this._def.type._parse({ data: s9, path: t9.path, parent: t9 });
      }
      unwrap() {
        return this._def.type;
      }
    };
    fe2 = class r30 extends _2 {
      _parse(e7) {
        let { status: t9, ctx: s9 } = this._processInputParams(e7);
        if (s9.common.async) return (async () => {
          let n17 = await this._def.in._parseAsync({ data: s9.data, path: s9.path, parent: s9 });
          return n17.status === "aborted" ? p2 : n17.status === "dirty" ? (t9.dirty(), D2(n17.value)) : this._def.out._parseAsync({ data: n17.value, path: s9.path, parent: s9 });
        })();
        {
          let a11 = this._def.in._parseSync({ data: s9.data, path: s9.path, parent: s9 });
          return a11.status === "aborted" ? p2 : a11.status === "dirty" ? (t9.dirty(), { status: "dirty", value: a11.value }) : this._def.out._parseSync({ data: a11.value, path: s9.path, parent: s9 });
        }
      }
      static create(e7, t9) {
        return new r30({ in: e7, out: t9, typeName: m2.ZodPipeline });
      }
    };
    te2 = class extends _2 {
      _parse(e7) {
        let t9 = this._def.innerType._parse(e7), s9 = (a11) => (M2(a11) && (a11.value = Object.freeze(a11.value)), a11);
        return se2(t9) ? t9.then((a11) => s9(a11)) : s9(t9);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    te2.create = (r39, e7) => new te2({ innerType: r39, typeName: m2.ZodReadonly, ...y2(e7) });
    dt2 = { object: w2.lazycreate };
    (function(r39) {
      r39.ZodString = "ZodString", r39.ZodNumber = "ZodNumber", r39.ZodNaN = "ZodNaN", r39.ZodBigInt = "ZodBigInt", r39.ZodBoolean = "ZodBoolean", r39.ZodDate = "ZodDate", r39.ZodSymbol = "ZodSymbol", r39.ZodUndefined = "ZodUndefined", r39.ZodNull = "ZodNull", r39.ZodAny = "ZodAny", r39.ZodUnknown = "ZodUnknown", r39.ZodNever = "ZodNever", r39.ZodVoid = "ZodVoid", r39.ZodArray = "ZodArray", r39.ZodObject = "ZodObject", r39.ZodUnion = "ZodUnion", r39.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", r39.ZodIntersection = "ZodIntersection", r39.ZodTuple = "ZodTuple", r39.ZodRecord = "ZodRecord", r39.ZodMap = "ZodMap", r39.ZodSet = "ZodSet", r39.ZodFunction = "ZodFunction", r39.ZodLazy = "ZodLazy", r39.ZodLiteral = "ZodLiteral", r39.ZodEnum = "ZodEnum", r39.ZodEffects = "ZodEffects", r39.ZodNativeEnum = "ZodNativeEnum", r39.ZodOptional = "ZodOptional", r39.ZodNullable = "ZodNullable", r39.ZodDefault = "ZodDefault", r39.ZodCatch = "ZodCatch", r39.ZodPromise = "ZodPromise", r39.ZodBranded = "ZodBranded", r39.ZodPipeline = "ZodPipeline", r39.ZodReadonly = "ZodReadonly";
    })(m2 || (m2 = {}));
    ut2 = (r39, e7 = { message: `Input not instance of ${r39.name}` }) => je2((t9) => t9 instanceof r39, e7);
    Ie2 = V2.create;
    Ee2 = L2.create;
    lt2 = de2.create;
    ft2 = U2.create;
    Ze2 = F2.create;
    ht2 = B2.create;
    pt2 = ne2.create;
    mt2 = W2.create;
    yt2 = q2.create;
    _t2 = P2.create;
    gt2 = Z2.create;
    vt2 = A2.create;
    xt2 = ie2.create;
    kt2 = $2.create;
    bt2 = w2.create;
    wt2 = w2.strictCreate;
    Tt2 = J2.create;
    Ct2 = me2.create;
    Ot2 = Y2.create;
    St2 = N2.create;
    At2 = ye2.create;
    Rt2 = oe2.create;
    Nt2 = ce2.create;
    jt2 = _e2.create;
    It2 = H2.create;
    Et2 = G2.create;
    Zt2 = Q2.create;
    $t2 = X2.create;
    Mt2 = z2.create;
    Vt2 = S2.create;
    Pt2 = C2.create;
    zt2 = j2.create;
    Dt2 = S2.createWithPreprocess;
    Lt2 = fe2.create;
    Ut2 = () => Ie2().optional();
    Ft2 = () => Ee2().optional();
    Bt2 = () => Ze2().optional();
    Wt2 = { string: (r39) => V2.create({ ...r39, coerce: true }), number: (r39) => L2.create({ ...r39, coerce: true }), boolean: (r39) => F2.create({ ...r39, coerce: true }), bigint: (r39) => U2.create({ ...r39, coerce: true }), date: (r39) => B2.create({ ...r39, coerce: true }) };
    qt2 = p2;
  }
});

// https://esm.sh/zod@3.25.76?target=denonext
var init_zod_3_25 = __esm({
  "https://esm.sh/zod@3.25.76?target=denonext"() {
    init_zod();
    init_zod();
  }
});

// https://esm.sh/zod@4.0.15/denonext/v3.mjs
var $e = Object.defineProperty;
var Me = (r39, e7) => {
  for (var t9 in e7) $e(r39, t9, { get: e7[t9], enumerable: true });
};
var be = {};
Me(be, { BRAND: () => ct, DIRTY: () => D, EMPTY_PATH: () => De, INVALID: () => p, NEVER: () => qt, OK: () => k, ParseStatus: () => x, Schema: () => _, ZodAny: () => P, ZodArray: () => $, ZodBigInt: () => U, ZodBoolean: () => F, ZodBranded: () => le, ZodCatch: () => ee, ZodDate: () => B, ZodDefault: () => K, ZodDiscriminatedUnion: () => me, ZodEffects: () => S, ZodEnum: () => Q, ZodError: () => b, ZodFirstPartyTypeKind: () => m, ZodFunction: () => _e, ZodIntersection: () => Y, ZodIssueCode: () => c, ZodLazy: () => H, ZodLiteral: () => G, ZodMap: () => oe, ZodNaN: () => de, ZodNativeEnum: () => X, ZodNever: () => A, ZodNull: () => q, ZodNullable: () => j, ZodNumber: () => L, ZodObject: () => w, ZodOptional: () => C, ZodParsedType: () => u, ZodPipeline: () => fe, ZodPromise: () => z, ZodReadonly: () => te, ZodRecord: () => ye, ZodSchema: () => _, ZodSet: () => ce, ZodString: () => V, ZodSymbol: () => ne, ZodTransformer: () => S, ZodTuple: () => N, ZodType: () => _, ZodUndefined: () => W, ZodUnion: () => J, ZodUnknown: () => Z, ZodVoid: () => ie, addIssueToContext: () => d, any: () => _t, array: () => kt, bigint: () => ft, boolean: () => Ze, coerce: () => Wt, custom: () => je, date: () => ht, datetimeRegex: () => Re, defaultErrorMap: () => I, discriminatedUnion: () => Ct, effect: () => Vt, enum: () => Zt, function: () => jt, getErrorMap: () => re, getParsedType: () => R, instanceof: () => ut, intersection: () => Ot, isAborted: () => he, isAsync: () => se, isDirty: () => pe, isValid: () => M, late: () => dt, lazy: () => It, literal: () => Et, makeIssue: () => ue, map: () => Rt, nan: () => lt, nativeEnum: () => $t, never: () => vt, null: () => yt, nullable: () => zt, number: () => Ee, object: () => bt, objectUtil: () => ve, oboolean: () => Bt, onumber: () => Ft, optional: () => Pt, ostring: () => Ut, pipeline: () => Lt, preprocess: () => Dt, promise: () => Mt, quotelessJson: () => Ve, record: () => At, set: () => Nt, setErrorMap: () => ze, strictObject: () => wt, string: () => Ie, symbol: () => pt, transformer: () => Vt, tuple: () => St, undefined: () => mt, union: () => Tt, unknown: () => gt, util: () => g, void: () => xt });
var g;
(function(r39) {
  r39.assertEqual = (a11) => {
  };
  function e7(a11) {
  }
  r39.assertIs = e7;
  function t9(a11) {
    throw new Error();
  }
  r39.assertNever = t9, r39.arrayToEnum = (a11) => {
    let n17 = {};
    for (let i21 of a11) n17[i21] = i21;
    return n17;
  }, r39.getValidEnumValues = (a11) => {
    let n17 = r39.objectKeys(a11).filter((o18) => typeof a11[a11[o18]] != "number"), i21 = {};
    for (let o18 of n17) i21[o18] = a11[o18];
    return r39.objectValues(i21);
  }, r39.objectValues = (a11) => r39.objectKeys(a11).map(function(n17) {
    return a11[n17];
  }), r39.objectKeys = typeof Object.keys == "function" ? (a11) => Object.keys(a11) : (a11) => {
    let n17 = [];
    for (let i21 in a11) Object.prototype.hasOwnProperty.call(a11, i21) && n17.push(i21);
    return n17;
  }, r39.find = (a11, n17) => {
    for (let i21 of a11) if (n17(i21)) return i21;
  }, r39.isInteger = typeof Number.isInteger == "function" ? (a11) => Number.isInteger(a11) : (a11) => typeof a11 == "number" && Number.isFinite(a11) && Math.floor(a11) === a11;
  function s9(a11, n17 = " | ") {
    return a11.map((i21) => typeof i21 == "string" ? `'${i21}'` : i21).join(n17);
  }
  r39.joinValues = s9, r39.jsonStringifyReplacer = (a11, n17) => typeof n17 == "bigint" ? n17.toString() : n17;
})(g || (g = {}));
var ve;
(function(r39) {
  r39.mergeShapes = (e7, t9) => ({ ...e7, ...t9 });
})(ve || (ve = {}));
var u = g.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]);
var R = (r39) => {
  switch (typeof r39) {
    case "undefined":
      return u.undefined;
    case "string":
      return u.string;
    case "number":
      return Number.isNaN(r39) ? u.nan : u.number;
    case "boolean":
      return u.boolean;
    case "function":
      return u.function;
    case "bigint":
      return u.bigint;
    case "symbol":
      return u.symbol;
    case "object":
      return Array.isArray(r39) ? u.array : r39 === null ? u.null : r39.then && typeof r39.then == "function" && r39.catch && typeof r39.catch == "function" ? u.promise : typeof Map < "u" && r39 instanceof Map ? u.map : typeof Set < "u" && r39 instanceof Set ? u.set : typeof Date < "u" && r39 instanceof Date ? u.date : u.object;
    default:
      return u.unknown;
  }
};
var c = g.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
var Ve = (r39) => JSON.stringify(r39, null, 2).replace(/"([^"]+)":/g, "$1:");
var b = class r extends Error {
  get errors() {
    return this.issues;
  }
  constructor(e7) {
    super(), this.issues = [], this.addIssue = (s9) => {
      this.issues = [...this.issues, s9];
    }, this.addIssues = (s9 = []) => {
      this.issues = [...this.issues, ...s9];
    };
    let t9 = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, t9) : this.__proto__ = t9, this.name = "ZodError", this.issues = e7;
  }
  format(e7) {
    let t9 = e7 || function(n17) {
      return n17.message;
    }, s9 = { _errors: [] }, a11 = (n17) => {
      for (let i21 of n17.issues) if (i21.code === "invalid_union") i21.unionErrors.map(a11);
      else if (i21.code === "invalid_return_type") a11(i21.returnTypeError);
      else if (i21.code === "invalid_arguments") a11(i21.argumentsError);
      else if (i21.path.length === 0) s9._errors.push(t9(i21));
      else {
        let o18 = s9, f14 = 0;
        for (; f14 < i21.path.length; ) {
          let l16 = i21.path[f14];
          f14 === i21.path.length - 1 ? (o18[l16] = o18[l16] || { _errors: [] }, o18[l16]._errors.push(t9(i21))) : o18[l16] = o18[l16] || { _errors: [] }, o18 = o18[l16], f14++;
        }
      }
    };
    return a11(this), s9;
  }
  static assert(e7) {
    if (!(e7 instanceof r)) throw new Error(`Not a ZodError: ${e7}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, g.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(e7 = (t9) => t9.message) {
    let t9 = {}, s9 = [];
    for (let a11 of this.issues) if (a11.path.length > 0) {
      let n17 = a11.path[0];
      t9[n17] = t9[n17] || [], t9[n17].push(e7(a11));
    } else s9.push(e7(a11));
    return { formErrors: s9, fieldErrors: t9 };
  }
  get formErrors() {
    return this.flatten();
  }
};
b.create = (r39) => new b(r39);
var Pe = (r39, e7) => {
  let t9;
  switch (r39.code) {
    case c.invalid_type:
      r39.received === u.undefined ? t9 = "Required" : t9 = `Expected ${r39.expected}, received ${r39.received}`;
      break;
    case c.invalid_literal:
      t9 = `Invalid literal value, expected ${JSON.stringify(r39.expected, g.jsonStringifyReplacer)}`;
      break;
    case c.unrecognized_keys:
      t9 = `Unrecognized key(s) in object: ${g.joinValues(r39.keys, ", ")}`;
      break;
    case c.invalid_union:
      t9 = "Invalid input";
      break;
    case c.invalid_union_discriminator:
      t9 = `Invalid discriminator value. Expected ${g.joinValues(r39.options)}`;
      break;
    case c.invalid_enum_value:
      t9 = `Invalid enum value. Expected ${g.joinValues(r39.options)}, received '${r39.received}'`;
      break;
    case c.invalid_arguments:
      t9 = "Invalid function arguments";
      break;
    case c.invalid_return_type:
      t9 = "Invalid function return type";
      break;
    case c.invalid_date:
      t9 = "Invalid date";
      break;
    case c.invalid_string:
      typeof r39.validation == "object" ? "includes" in r39.validation ? (t9 = `Invalid input: must include "${r39.validation.includes}"`, typeof r39.validation.position == "number" && (t9 = `${t9} at one or more positions greater than or equal to ${r39.validation.position}`)) : "startsWith" in r39.validation ? t9 = `Invalid input: must start with "${r39.validation.startsWith}"` : "endsWith" in r39.validation ? t9 = `Invalid input: must end with "${r39.validation.endsWith}"` : g.assertNever(r39.validation) : r39.validation !== "regex" ? t9 = `Invalid ${r39.validation}` : t9 = "Invalid";
      break;
    case c.too_small:
      r39.type === "array" ? t9 = `Array must contain ${r39.exact ? "exactly" : r39.inclusive ? "at least" : "more than"} ${r39.minimum} element(s)` : r39.type === "string" ? t9 = `String must contain ${r39.exact ? "exactly" : r39.inclusive ? "at least" : "over"} ${r39.minimum} character(s)` : r39.type === "number" ? t9 = `Number must be ${r39.exact ? "exactly equal to " : r39.inclusive ? "greater than or equal to " : "greater than "}${r39.minimum}` : r39.type === "bigint" ? t9 = `Number must be ${r39.exact ? "exactly equal to " : r39.inclusive ? "greater than or equal to " : "greater than "}${r39.minimum}` : r39.type === "date" ? t9 = `Date must be ${r39.exact ? "exactly equal to " : r39.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(r39.minimum))}` : t9 = "Invalid input";
      break;
    case c.too_big:
      r39.type === "array" ? t9 = `Array must contain ${r39.exact ? "exactly" : r39.inclusive ? "at most" : "less than"} ${r39.maximum} element(s)` : r39.type === "string" ? t9 = `String must contain ${r39.exact ? "exactly" : r39.inclusive ? "at most" : "under"} ${r39.maximum} character(s)` : r39.type === "number" ? t9 = `Number must be ${r39.exact ? "exactly" : r39.inclusive ? "less than or equal to" : "less than"} ${r39.maximum}` : r39.type === "bigint" ? t9 = `BigInt must be ${r39.exact ? "exactly" : r39.inclusive ? "less than or equal to" : "less than"} ${r39.maximum}` : r39.type === "date" ? t9 = `Date must be ${r39.exact ? "exactly" : r39.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(r39.maximum))}` : t9 = "Invalid input";
      break;
    case c.custom:
      t9 = "Invalid input";
      break;
    case c.invalid_intersection_types:
      t9 = "Intersection results could not be merged";
      break;
    case c.not_multiple_of:
      t9 = `Number must be a multiple of ${r39.multipleOf}`;
      break;
    case c.not_finite:
      t9 = "Number must be finite";
      break;
    default:
      t9 = e7.defaultError, g.assertNever(r39);
  }
  return { message: t9 };
};
var I = Pe;
var Te = I;
function ze(r39) {
  Te = r39;
}
function re() {
  return Te;
}
var ue = (r39) => {
  let { data: e7, path: t9, errorMaps: s9, issueData: a11 } = r39, n17 = [...t9, ...a11.path || []], i21 = { ...a11, path: n17 };
  if (a11.message !== void 0) return { ...a11, path: n17, message: a11.message };
  let o18 = "", f14 = s9.filter((l16) => !!l16).slice().reverse();
  for (let l16 of f14) o18 = l16(i21, { data: e7, defaultError: o18 }).message;
  return { ...a11, path: n17, message: o18 };
};
var De = [];
function d(r39, e7) {
  let t9 = re(), s9 = ue({ issueData: e7, data: r39.data, path: r39.path, errorMaps: [r39.common.contextualErrorMap, r39.schemaErrorMap, t9, t9 === I ? void 0 : I].filter((a11) => !!a11) });
  r39.common.issues.push(s9);
}
var x = class r2 {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(e7, t9) {
    let s9 = [];
    for (let a11 of t9) {
      if (a11.status === "aborted") return p;
      a11.status === "dirty" && e7.dirty(), s9.push(a11.value);
    }
    return { status: e7.value, value: s9 };
  }
  static async mergeObjectAsync(e7, t9) {
    let s9 = [];
    for (let a11 of t9) {
      let n17 = await a11.key, i21 = await a11.value;
      s9.push({ key: n17, value: i21 });
    }
    return r2.mergeObjectSync(e7, s9);
  }
  static mergeObjectSync(e7, t9) {
    let s9 = {};
    for (let a11 of t9) {
      let { key: n17, value: i21 } = a11;
      if (n17.status === "aborted" || i21.status === "aborted") return p;
      n17.status === "dirty" && e7.dirty(), i21.status === "dirty" && e7.dirty(), n17.value !== "__proto__" && (typeof i21.value < "u" || a11.alwaysSet) && (s9[n17.value] = i21.value);
    }
    return { status: e7.value, value: s9 };
  }
};
var p = Object.freeze({ status: "aborted" });
var D = (r39) => ({ status: "dirty", value: r39 });
var k = (r39) => ({ status: "valid", value: r39 });
var he = (r39) => r39.status === "aborted";
var pe = (r39) => r39.status === "dirty";
var M = (r39) => r39.status === "valid";
var se = (r39) => typeof Promise < "u" && r39 instanceof Promise;
var h;
(function(r39) {
  r39.errToObj = (e7) => typeof e7 == "string" ? { message: e7 } : e7 || {}, r39.toString = (e7) => typeof e7 == "string" ? e7 : e7?.message;
})(h || (h = {}));
var O = class {
  constructor(e7, t9, s9, a11) {
    this._cachedPath = [], this.parent = e7, this.data = t9, this._path = s9, this._key = a11;
  }
  get path() {
    return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
};
var Ce = (r39, e7) => {
  if (M(e7)) return { success: true, data: e7.value };
  if (!r39.common.issues.length) throw new Error("Validation failed but no issues detected.");
  return { success: false, get error() {
    if (this._error) return this._error;
    let t9 = new b(r39.common.issues);
    return this._error = t9, this._error;
  } };
};
function y(r39) {
  if (!r39) return {};
  let { errorMap: e7, invalid_type_error: t9, required_error: s9, description: a11 } = r39;
  if (e7 && (t9 || s9)) throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e7 ? { errorMap: e7, description: a11 } : { errorMap: (i21, o18) => {
    let { message: f14 } = r39;
    return i21.code === "invalid_enum_value" ? { message: f14 ?? o18.defaultError } : typeof o18.data > "u" ? { message: f14 ?? s9 ?? o18.defaultError } : i21.code !== "invalid_type" ? { message: o18.defaultError } : { message: f14 ?? t9 ?? o18.defaultError };
  }, description: a11 };
}
var _ = class {
  get description() {
    return this._def.description;
  }
  _getType(e7) {
    return R(e7.data);
  }
  _getOrReturnCtx(e7, t9) {
    return t9 || { common: e7.parent.common, data: e7.data, parsedType: R(e7.data), schemaErrorMap: this._def.errorMap, path: e7.path, parent: e7.parent };
  }
  _processInputParams(e7) {
    return { status: new x(), ctx: { common: e7.parent.common, data: e7.data, parsedType: R(e7.data), schemaErrorMap: this._def.errorMap, path: e7.path, parent: e7.parent } };
  }
  _parseSync(e7) {
    let t9 = this._parse(e7);
    if (se(t9)) throw new Error("Synchronous parse encountered promise.");
    return t9;
  }
  _parseAsync(e7) {
    let t9 = this._parse(e7);
    return Promise.resolve(t9);
  }
  parse(e7, t9) {
    let s9 = this.safeParse(e7, t9);
    if (s9.success) return s9.data;
    throw s9.error;
  }
  safeParse(e7, t9) {
    let s9 = { common: { issues: [], async: t9?.async ?? false, contextualErrorMap: t9?.errorMap }, path: t9?.path || [], schemaErrorMap: this._def.errorMap, parent: null, data: e7, parsedType: R(e7) }, a11 = this._parseSync({ data: e7, path: s9.path, parent: s9 });
    return Ce(s9, a11);
  }
  "~validate"(e7) {
    let t9 = { common: { issues: [], async: !!this["~standard"].async }, path: [], schemaErrorMap: this._def.errorMap, parent: null, data: e7, parsedType: R(e7) };
    if (!this["~standard"].async) try {
      let s9 = this._parseSync({ data: e7, path: [], parent: t9 });
      return M(s9) ? { value: s9.value } : { issues: t9.common.issues };
    } catch (s9) {
      s9?.message?.toLowerCase()?.includes("encountered") && (this["~standard"].async = true), t9.common = { issues: [], async: true };
    }
    return this._parseAsync({ data: e7, path: [], parent: t9 }).then((s9) => M(s9) ? { value: s9.value } : { issues: t9.common.issues });
  }
  async parseAsync(e7, t9) {
    let s9 = await this.safeParseAsync(e7, t9);
    if (s9.success) return s9.data;
    throw s9.error;
  }
  async safeParseAsync(e7, t9) {
    let s9 = { common: { issues: [], contextualErrorMap: t9?.errorMap, async: true }, path: t9?.path || [], schemaErrorMap: this._def.errorMap, parent: null, data: e7, parsedType: R(e7) }, a11 = this._parse({ data: e7, path: s9.path, parent: s9 }), n17 = await (se(a11) ? a11 : Promise.resolve(a11));
    return Ce(s9, n17);
  }
  refine(e7, t9) {
    let s9 = (a11) => typeof t9 == "string" || typeof t9 > "u" ? { message: t9 } : typeof t9 == "function" ? t9(a11) : t9;
    return this._refinement((a11, n17) => {
      let i21 = e7(a11), o18 = () => n17.addIssue({ code: c.custom, ...s9(a11) });
      return typeof Promise < "u" && i21 instanceof Promise ? i21.then((f14) => f14 ? true : (o18(), false)) : i21 ? true : (o18(), false);
    });
  }
  refinement(e7, t9) {
    return this._refinement((s9, a11) => e7(s9) ? true : (a11.addIssue(typeof t9 == "function" ? t9(s9, a11) : t9), false));
  }
  _refinement(e7) {
    return new S({ schema: this, typeName: m.ZodEffects, effect: { type: "refinement", refinement: e7 } });
  }
  superRefine(e7) {
    return this._refinement(e7);
  }
  constructor(e7) {
    this.spa = this.safeParseAsync, this._def = e7, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = { version: 1, vendor: "zod", validate: (t9) => this["~validate"](t9) };
  }
  optional() {
    return C.create(this, this._def);
  }
  nullable() {
    return j.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return $.create(this);
  }
  promise() {
    return z.create(this, this._def);
  }
  or(e7) {
    return J.create([this, e7], this._def);
  }
  and(e7) {
    return Y.create(this, e7, this._def);
  }
  transform(e7) {
    return new S({ ...y(this._def), schema: this, typeName: m.ZodEffects, effect: { type: "transform", transform: e7 } });
  }
  default(e7) {
    let t9 = typeof e7 == "function" ? e7 : () => e7;
    return new K({ ...y(this._def), innerType: this, defaultValue: t9, typeName: m.ZodDefault });
  }
  brand() {
    return new le({ typeName: m.ZodBranded, type: this, ...y(this._def) });
  }
  catch(e7) {
    let t9 = typeof e7 == "function" ? e7 : () => e7;
    return new ee({ ...y(this._def), innerType: this, catchValue: t9, typeName: m.ZodCatch });
  }
  describe(e7) {
    let t9 = this.constructor;
    return new t9({ ...this._def, description: e7 });
  }
  pipe(e7) {
    return fe.create(this, e7);
  }
  readonly() {
    return te.create(this);
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
var Se = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))";
var rt = new RegExp(`^${Se}$`);
function Ae(r39) {
  let e7 = "[0-5]\\d";
  r39.precision ? e7 = `${e7}\\.\\d{${r39.precision}}` : r39.precision == null && (e7 = `${e7}(\\.\\d+)?`);
  let t9 = r39.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${e7})${t9}`;
}
function st(r39) {
  return new RegExp(`^${Ae(r39)}$`);
}
function Re(r39) {
  let e7 = `${Se}T${Ae(r39)}`, t9 = [];
  return t9.push(r39.local ? "Z?" : "Z"), r39.offset && t9.push("([+-]\\d{2}:?\\d{2})"), e7 = `${e7}(${t9.join("|")})`, new RegExp(`^${e7}$`);
}
function at(r39, e7) {
  return !!((e7 === "v4" || !e7) && Ge.test(r39) || (e7 === "v6" || !e7) && Xe.test(r39));
}
function nt(r39, e7) {
  if (!qe.test(r39)) return false;
  try {
    let [t9] = r39.split(".");
    if (!t9) return false;
    let s9 = t9.replace(/-/g, "+").replace(/_/g, "/").padEnd(t9.length + (4 - t9.length % 4) % 4, "="), a11 = JSON.parse(atob(s9));
    return !(typeof a11 != "object" || a11 === null || "typ" in a11 && a11?.typ !== "JWT" || !a11.alg || e7 && a11.alg !== e7);
  } catch {
    return false;
  }
}
function it(r39, e7) {
  return !!((e7 === "v4" || !e7) && Qe.test(r39) || (e7 === "v6" || !e7) && Ke.test(r39));
}
var V = class r3 extends _ {
  _parse(e7) {
    if (this._def.coerce && (e7.data = String(e7.data)), this._getType(e7) !== u.string) {
      let n17 = this._getOrReturnCtx(e7);
      return d(n17, { code: c.invalid_type, expected: u.string, received: n17.parsedType }), p;
    }
    let s9 = new x(), a11;
    for (let n17 of this._def.checks) if (n17.kind === "min") e7.data.length < n17.value && (a11 = this._getOrReturnCtx(e7, a11), d(a11, { code: c.too_small, minimum: n17.value, type: "string", inclusive: true, exact: false, message: n17.message }), s9.dirty());
    else if (n17.kind === "max") e7.data.length > n17.value && (a11 = this._getOrReturnCtx(e7, a11), d(a11, { code: c.too_big, maximum: n17.value, type: "string", inclusive: true, exact: false, message: n17.message }), s9.dirty());
    else if (n17.kind === "length") {
      let i21 = e7.data.length > n17.value, o18 = e7.data.length < n17.value;
      (i21 || o18) && (a11 = this._getOrReturnCtx(e7, a11), i21 ? d(a11, { code: c.too_big, maximum: n17.value, type: "string", inclusive: true, exact: true, message: n17.message }) : o18 && d(a11, { code: c.too_small, minimum: n17.value, type: "string", inclusive: true, exact: true, message: n17.message }), s9.dirty());
    } else if (n17.kind === "email") Ye.test(e7.data) || (a11 = this._getOrReturnCtx(e7, a11), d(a11, { validation: "email", code: c.invalid_string, message: n17.message }), s9.dirty());
    else if (n17.kind === "emoji") xe || (xe = new RegExp(He, "u")), xe.test(e7.data) || (a11 = this._getOrReturnCtx(e7, a11), d(a11, { validation: "emoji", code: c.invalid_string, message: n17.message }), s9.dirty());
    else if (n17.kind === "uuid") Be.test(e7.data) || (a11 = this._getOrReturnCtx(e7, a11), d(a11, { validation: "uuid", code: c.invalid_string, message: n17.message }), s9.dirty());
    else if (n17.kind === "nanoid") We.test(e7.data) || (a11 = this._getOrReturnCtx(e7, a11), d(a11, { validation: "nanoid", code: c.invalid_string, message: n17.message }), s9.dirty());
    else if (n17.kind === "cuid") Le.test(e7.data) || (a11 = this._getOrReturnCtx(e7, a11), d(a11, { validation: "cuid", code: c.invalid_string, message: n17.message }), s9.dirty());
    else if (n17.kind === "cuid2") Ue.test(e7.data) || (a11 = this._getOrReturnCtx(e7, a11), d(a11, { validation: "cuid2", code: c.invalid_string, message: n17.message }), s9.dirty());
    else if (n17.kind === "ulid") Fe.test(e7.data) || (a11 = this._getOrReturnCtx(e7, a11), d(a11, { validation: "ulid", code: c.invalid_string, message: n17.message }), s9.dirty());
    else if (n17.kind === "url") try {
      new URL(e7.data);
    } catch {
      a11 = this._getOrReturnCtx(e7, a11), d(a11, { validation: "url", code: c.invalid_string, message: n17.message }), s9.dirty();
    }
    else n17.kind === "regex" ? (n17.regex.lastIndex = 0, n17.regex.test(e7.data) || (a11 = this._getOrReturnCtx(e7, a11), d(a11, { validation: "regex", code: c.invalid_string, message: n17.message }), s9.dirty())) : n17.kind === "trim" ? e7.data = e7.data.trim() : n17.kind === "includes" ? e7.data.includes(n17.value, n17.position) || (a11 = this._getOrReturnCtx(e7, a11), d(a11, { code: c.invalid_string, validation: { includes: n17.value, position: n17.position }, message: n17.message }), s9.dirty()) : n17.kind === "toLowerCase" ? e7.data = e7.data.toLowerCase() : n17.kind === "toUpperCase" ? e7.data = e7.data.toUpperCase() : n17.kind === "startsWith" ? e7.data.startsWith(n17.value) || (a11 = this._getOrReturnCtx(e7, a11), d(a11, { code: c.invalid_string, validation: { startsWith: n17.value }, message: n17.message }), s9.dirty()) : n17.kind === "endsWith" ? e7.data.endsWith(n17.value) || (a11 = this._getOrReturnCtx(e7, a11), d(a11, { code: c.invalid_string, validation: { endsWith: n17.value }, message: n17.message }), s9.dirty()) : n17.kind === "datetime" ? Re(n17).test(e7.data) || (a11 = this._getOrReturnCtx(e7, a11), d(a11, { code: c.invalid_string, validation: "datetime", message: n17.message }), s9.dirty()) : n17.kind === "date" ? rt.test(e7.data) || (a11 = this._getOrReturnCtx(e7, a11), d(a11, { code: c.invalid_string, validation: "date", message: n17.message }), s9.dirty()) : n17.kind === "time" ? st(n17).test(e7.data) || (a11 = this._getOrReturnCtx(e7, a11), d(a11, { code: c.invalid_string, validation: "time", message: n17.message }), s9.dirty()) : n17.kind === "duration" ? Je.test(e7.data) || (a11 = this._getOrReturnCtx(e7, a11), d(a11, { validation: "duration", code: c.invalid_string, message: n17.message }), s9.dirty()) : n17.kind === "ip" ? at(e7.data, n17.version) || (a11 = this._getOrReturnCtx(e7, a11), d(a11, { validation: "ip", code: c.invalid_string, message: n17.message }), s9.dirty()) : n17.kind === "jwt" ? nt(e7.data, n17.alg) || (a11 = this._getOrReturnCtx(e7, a11), d(a11, { validation: "jwt", code: c.invalid_string, message: n17.message }), s9.dirty()) : n17.kind === "cidr" ? it(e7.data, n17.version) || (a11 = this._getOrReturnCtx(e7, a11), d(a11, { validation: "cidr", code: c.invalid_string, message: n17.message }), s9.dirty()) : n17.kind === "base64" ? et.test(e7.data) || (a11 = this._getOrReturnCtx(e7, a11), d(a11, { validation: "base64", code: c.invalid_string, message: n17.message }), s9.dirty()) : n17.kind === "base64url" ? tt.test(e7.data) || (a11 = this._getOrReturnCtx(e7, a11), d(a11, { validation: "base64url", code: c.invalid_string, message: n17.message }), s9.dirty()) : g.assertNever(n17);
    return { status: s9.value, value: e7.data };
  }
  _regex(e7, t9, s9) {
    return this.refinement((a11) => e7.test(a11), { validation: t9, code: c.invalid_string, ...h.errToObj(s9) });
  }
  _addCheck(e7) {
    return new r3({ ...this._def, checks: [...this._def.checks, e7] });
  }
  email(e7) {
    return this._addCheck({ kind: "email", ...h.errToObj(e7) });
  }
  url(e7) {
    return this._addCheck({ kind: "url", ...h.errToObj(e7) });
  }
  emoji(e7) {
    return this._addCheck({ kind: "emoji", ...h.errToObj(e7) });
  }
  uuid(e7) {
    return this._addCheck({ kind: "uuid", ...h.errToObj(e7) });
  }
  nanoid(e7) {
    return this._addCheck({ kind: "nanoid", ...h.errToObj(e7) });
  }
  cuid(e7) {
    return this._addCheck({ kind: "cuid", ...h.errToObj(e7) });
  }
  cuid2(e7) {
    return this._addCheck({ kind: "cuid2", ...h.errToObj(e7) });
  }
  ulid(e7) {
    return this._addCheck({ kind: "ulid", ...h.errToObj(e7) });
  }
  base64(e7) {
    return this._addCheck({ kind: "base64", ...h.errToObj(e7) });
  }
  base64url(e7) {
    return this._addCheck({ kind: "base64url", ...h.errToObj(e7) });
  }
  jwt(e7) {
    return this._addCheck({ kind: "jwt", ...h.errToObj(e7) });
  }
  ip(e7) {
    return this._addCheck({ kind: "ip", ...h.errToObj(e7) });
  }
  cidr(e7) {
    return this._addCheck({ kind: "cidr", ...h.errToObj(e7) });
  }
  datetime(e7) {
    return typeof e7 == "string" ? this._addCheck({ kind: "datetime", precision: null, offset: false, local: false, message: e7 }) : this._addCheck({ kind: "datetime", precision: typeof e7?.precision > "u" ? null : e7?.precision, offset: e7?.offset ?? false, local: e7?.local ?? false, ...h.errToObj(e7?.message) });
  }
  date(e7) {
    return this._addCheck({ kind: "date", message: e7 });
  }
  time(e7) {
    return typeof e7 == "string" ? this._addCheck({ kind: "time", precision: null, message: e7 }) : this._addCheck({ kind: "time", precision: typeof e7?.precision > "u" ? null : e7?.precision, ...h.errToObj(e7?.message) });
  }
  duration(e7) {
    return this._addCheck({ kind: "duration", ...h.errToObj(e7) });
  }
  regex(e7, t9) {
    return this._addCheck({ kind: "regex", regex: e7, ...h.errToObj(t9) });
  }
  includes(e7, t9) {
    return this._addCheck({ kind: "includes", value: e7, position: t9?.position, ...h.errToObj(t9?.message) });
  }
  startsWith(e7, t9) {
    return this._addCheck({ kind: "startsWith", value: e7, ...h.errToObj(t9) });
  }
  endsWith(e7, t9) {
    return this._addCheck({ kind: "endsWith", value: e7, ...h.errToObj(t9) });
  }
  min(e7, t9) {
    return this._addCheck({ kind: "min", value: e7, ...h.errToObj(t9) });
  }
  max(e7, t9) {
    return this._addCheck({ kind: "max", value: e7, ...h.errToObj(t9) });
  }
  length(e7, t9) {
    return this._addCheck({ kind: "length", value: e7, ...h.errToObj(t9) });
  }
  nonempty(e7) {
    return this.min(1, h.errToObj(e7));
  }
  trim() {
    return new r3({ ...this._def, checks: [...this._def.checks, { kind: "trim" }] });
  }
  toLowerCase() {
    return new r3({ ...this._def, checks: [...this._def.checks, { kind: "toLowerCase" }] });
  }
  toUpperCase() {
    return new r3({ ...this._def, checks: [...this._def.checks, { kind: "toUpperCase" }] });
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
    for (let t9 of this._def.checks) t9.kind === "min" && (e7 === null || t9.value > e7) && (e7 = t9.value);
    return e7;
  }
  get maxLength() {
    let e7 = null;
    for (let t9 of this._def.checks) t9.kind === "max" && (e7 === null || t9.value < e7) && (e7 = t9.value);
    return e7;
  }
};
V.create = (r39) => new V({ checks: [], typeName: m.ZodString, coerce: r39?.coerce ?? false, ...y(r39) });
function ot(r39, e7) {
  let t9 = (r39.toString().split(".")[1] || "").length, s9 = (e7.toString().split(".")[1] || "").length, a11 = t9 > s9 ? t9 : s9, n17 = Number.parseInt(r39.toFixed(a11).replace(".", "")), i21 = Number.parseInt(e7.toFixed(a11).replace(".", ""));
  return n17 % i21 / 10 ** a11;
}
var L = class r4 extends _ {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e7) {
    if (this._def.coerce && (e7.data = Number(e7.data)), this._getType(e7) !== u.number) {
      let n17 = this._getOrReturnCtx(e7);
      return d(n17, { code: c.invalid_type, expected: u.number, received: n17.parsedType }), p;
    }
    let s9, a11 = new x();
    for (let n17 of this._def.checks) n17.kind === "int" ? g.isInteger(e7.data) || (s9 = this._getOrReturnCtx(e7, s9), d(s9, { code: c.invalid_type, expected: "integer", received: "float", message: n17.message }), a11.dirty()) : n17.kind === "min" ? (n17.inclusive ? e7.data < n17.value : e7.data <= n17.value) && (s9 = this._getOrReturnCtx(e7, s9), d(s9, { code: c.too_small, minimum: n17.value, type: "number", inclusive: n17.inclusive, exact: false, message: n17.message }), a11.dirty()) : n17.kind === "max" ? (n17.inclusive ? e7.data > n17.value : e7.data >= n17.value) && (s9 = this._getOrReturnCtx(e7, s9), d(s9, { code: c.too_big, maximum: n17.value, type: "number", inclusive: n17.inclusive, exact: false, message: n17.message }), a11.dirty()) : n17.kind === "multipleOf" ? ot(e7.data, n17.value) !== 0 && (s9 = this._getOrReturnCtx(e7, s9), d(s9, { code: c.not_multiple_of, multipleOf: n17.value, message: n17.message }), a11.dirty()) : n17.kind === "finite" ? Number.isFinite(e7.data) || (s9 = this._getOrReturnCtx(e7, s9), d(s9, { code: c.not_finite, message: n17.message }), a11.dirty()) : g.assertNever(n17);
    return { status: a11.value, value: e7.data };
  }
  gte(e7, t9) {
    return this.setLimit("min", e7, true, h.toString(t9));
  }
  gt(e7, t9) {
    return this.setLimit("min", e7, false, h.toString(t9));
  }
  lte(e7, t9) {
    return this.setLimit("max", e7, true, h.toString(t9));
  }
  lt(e7, t9) {
    return this.setLimit("max", e7, false, h.toString(t9));
  }
  setLimit(e7, t9, s9, a11) {
    return new r4({ ...this._def, checks: [...this._def.checks, { kind: e7, value: t9, inclusive: s9, message: h.toString(a11) }] });
  }
  _addCheck(e7) {
    return new r4({ ...this._def, checks: [...this._def.checks, e7] });
  }
  int(e7) {
    return this._addCheck({ kind: "int", message: h.toString(e7) });
  }
  positive(e7) {
    return this._addCheck({ kind: "min", value: 0, inclusive: false, message: h.toString(e7) });
  }
  negative(e7) {
    return this._addCheck({ kind: "max", value: 0, inclusive: false, message: h.toString(e7) });
  }
  nonpositive(e7) {
    return this._addCheck({ kind: "max", value: 0, inclusive: true, message: h.toString(e7) });
  }
  nonnegative(e7) {
    return this._addCheck({ kind: "min", value: 0, inclusive: true, message: h.toString(e7) });
  }
  multipleOf(e7, t9) {
    return this._addCheck({ kind: "multipleOf", value: e7, message: h.toString(t9) });
  }
  finite(e7) {
    return this._addCheck({ kind: "finite", message: h.toString(e7) });
  }
  safe(e7) {
    return this._addCheck({ kind: "min", inclusive: true, value: Number.MIN_SAFE_INTEGER, message: h.toString(e7) })._addCheck({ kind: "max", inclusive: true, value: Number.MAX_SAFE_INTEGER, message: h.toString(e7) });
  }
  get minValue() {
    let e7 = null;
    for (let t9 of this._def.checks) t9.kind === "min" && (e7 === null || t9.value > e7) && (e7 = t9.value);
    return e7;
  }
  get maxValue() {
    let e7 = null;
    for (let t9 of this._def.checks) t9.kind === "max" && (e7 === null || t9.value < e7) && (e7 = t9.value);
    return e7;
  }
  get isInt() {
    return !!this._def.checks.find((e7) => e7.kind === "int" || e7.kind === "multipleOf" && g.isInteger(e7.value));
  }
  get isFinite() {
    let e7 = null, t9 = null;
    for (let s9 of this._def.checks) {
      if (s9.kind === "finite" || s9.kind === "int" || s9.kind === "multipleOf") return true;
      s9.kind === "min" ? (t9 === null || s9.value > t9) && (t9 = s9.value) : s9.kind === "max" && (e7 === null || s9.value < e7) && (e7 = s9.value);
    }
    return Number.isFinite(t9) && Number.isFinite(e7);
  }
};
L.create = (r39) => new L({ checks: [], typeName: m.ZodNumber, coerce: r39?.coerce || false, ...y(r39) });
var U = class r5 extends _ {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(e7) {
    if (this._def.coerce) try {
      e7.data = BigInt(e7.data);
    } catch {
      return this._getInvalidInput(e7);
    }
    if (this._getType(e7) !== u.bigint) return this._getInvalidInput(e7);
    let s9, a11 = new x();
    for (let n17 of this._def.checks) n17.kind === "min" ? (n17.inclusive ? e7.data < n17.value : e7.data <= n17.value) && (s9 = this._getOrReturnCtx(e7, s9), d(s9, { code: c.too_small, type: "bigint", minimum: n17.value, inclusive: n17.inclusive, message: n17.message }), a11.dirty()) : n17.kind === "max" ? (n17.inclusive ? e7.data > n17.value : e7.data >= n17.value) && (s9 = this._getOrReturnCtx(e7, s9), d(s9, { code: c.too_big, type: "bigint", maximum: n17.value, inclusive: n17.inclusive, message: n17.message }), a11.dirty()) : n17.kind === "multipleOf" ? e7.data % n17.value !== BigInt(0) && (s9 = this._getOrReturnCtx(e7, s9), d(s9, { code: c.not_multiple_of, multipleOf: n17.value, message: n17.message }), a11.dirty()) : g.assertNever(n17);
    return { status: a11.value, value: e7.data };
  }
  _getInvalidInput(e7) {
    let t9 = this._getOrReturnCtx(e7);
    return d(t9, { code: c.invalid_type, expected: u.bigint, received: t9.parsedType }), p;
  }
  gte(e7, t9) {
    return this.setLimit("min", e7, true, h.toString(t9));
  }
  gt(e7, t9) {
    return this.setLimit("min", e7, false, h.toString(t9));
  }
  lte(e7, t9) {
    return this.setLimit("max", e7, true, h.toString(t9));
  }
  lt(e7, t9) {
    return this.setLimit("max", e7, false, h.toString(t9));
  }
  setLimit(e7, t9, s9, a11) {
    return new r5({ ...this._def, checks: [...this._def.checks, { kind: e7, value: t9, inclusive: s9, message: h.toString(a11) }] });
  }
  _addCheck(e7) {
    return new r5({ ...this._def, checks: [...this._def.checks, e7] });
  }
  positive(e7) {
    return this._addCheck({ kind: "min", value: BigInt(0), inclusive: false, message: h.toString(e7) });
  }
  negative(e7) {
    return this._addCheck({ kind: "max", value: BigInt(0), inclusive: false, message: h.toString(e7) });
  }
  nonpositive(e7) {
    return this._addCheck({ kind: "max", value: BigInt(0), inclusive: true, message: h.toString(e7) });
  }
  nonnegative(e7) {
    return this._addCheck({ kind: "min", value: BigInt(0), inclusive: true, message: h.toString(e7) });
  }
  multipleOf(e7, t9) {
    return this._addCheck({ kind: "multipleOf", value: e7, message: h.toString(t9) });
  }
  get minValue() {
    let e7 = null;
    for (let t9 of this._def.checks) t9.kind === "min" && (e7 === null || t9.value > e7) && (e7 = t9.value);
    return e7;
  }
  get maxValue() {
    let e7 = null;
    for (let t9 of this._def.checks) t9.kind === "max" && (e7 === null || t9.value < e7) && (e7 = t9.value);
    return e7;
  }
};
U.create = (r39) => new U({ checks: [], typeName: m.ZodBigInt, coerce: r39?.coerce ?? false, ...y(r39) });
var F = class extends _ {
  _parse(e7) {
    if (this._def.coerce && (e7.data = !!e7.data), this._getType(e7) !== u.boolean) {
      let s9 = this._getOrReturnCtx(e7);
      return d(s9, { code: c.invalid_type, expected: u.boolean, received: s9.parsedType }), p;
    }
    return k(e7.data);
  }
};
F.create = (r39) => new F({ typeName: m.ZodBoolean, coerce: r39?.coerce || false, ...y(r39) });
var B = class r6 extends _ {
  _parse(e7) {
    if (this._def.coerce && (e7.data = new Date(e7.data)), this._getType(e7) !== u.date) {
      let n17 = this._getOrReturnCtx(e7);
      return d(n17, { code: c.invalid_type, expected: u.date, received: n17.parsedType }), p;
    }
    if (Number.isNaN(e7.data.getTime())) {
      let n17 = this._getOrReturnCtx(e7);
      return d(n17, { code: c.invalid_date }), p;
    }
    let s9 = new x(), a11;
    for (let n17 of this._def.checks) n17.kind === "min" ? e7.data.getTime() < n17.value && (a11 = this._getOrReturnCtx(e7, a11), d(a11, { code: c.too_small, message: n17.message, inclusive: true, exact: false, minimum: n17.value, type: "date" }), s9.dirty()) : n17.kind === "max" ? e7.data.getTime() > n17.value && (a11 = this._getOrReturnCtx(e7, a11), d(a11, { code: c.too_big, message: n17.message, inclusive: true, exact: false, maximum: n17.value, type: "date" }), s9.dirty()) : g.assertNever(n17);
    return { status: s9.value, value: new Date(e7.data.getTime()) };
  }
  _addCheck(e7) {
    return new r6({ ...this._def, checks: [...this._def.checks, e7] });
  }
  min(e7, t9) {
    return this._addCheck({ kind: "min", value: e7.getTime(), message: h.toString(t9) });
  }
  max(e7, t9) {
    return this._addCheck({ kind: "max", value: e7.getTime(), message: h.toString(t9) });
  }
  get minDate() {
    let e7 = null;
    for (let t9 of this._def.checks) t9.kind === "min" && (e7 === null || t9.value > e7) && (e7 = t9.value);
    return e7 != null ? new Date(e7) : null;
  }
  get maxDate() {
    let e7 = null;
    for (let t9 of this._def.checks) t9.kind === "max" && (e7 === null || t9.value < e7) && (e7 = t9.value);
    return e7 != null ? new Date(e7) : null;
  }
};
B.create = (r39) => new B({ checks: [], coerce: r39?.coerce || false, typeName: m.ZodDate, ...y(r39) });
var ne = class extends _ {
  _parse(e7) {
    if (this._getType(e7) !== u.symbol) {
      let s9 = this._getOrReturnCtx(e7);
      return d(s9, { code: c.invalid_type, expected: u.symbol, received: s9.parsedType }), p;
    }
    return k(e7.data);
  }
};
ne.create = (r39) => new ne({ typeName: m.ZodSymbol, ...y(r39) });
var W = class extends _ {
  _parse(e7) {
    if (this._getType(e7) !== u.undefined) {
      let s9 = this._getOrReturnCtx(e7);
      return d(s9, { code: c.invalid_type, expected: u.undefined, received: s9.parsedType }), p;
    }
    return k(e7.data);
  }
};
W.create = (r39) => new W({ typeName: m.ZodUndefined, ...y(r39) });
var q = class extends _ {
  _parse(e7) {
    if (this._getType(e7) !== u.null) {
      let s9 = this._getOrReturnCtx(e7);
      return d(s9, { code: c.invalid_type, expected: u.null, received: s9.parsedType }), p;
    }
    return k(e7.data);
  }
};
q.create = (r39) => new q({ typeName: m.ZodNull, ...y(r39) });
var P = class extends _ {
  constructor() {
    super(...arguments), this._any = true;
  }
  _parse(e7) {
    return k(e7.data);
  }
};
P.create = (r39) => new P({ typeName: m.ZodAny, ...y(r39) });
var Z = class extends _ {
  constructor() {
    super(...arguments), this._unknown = true;
  }
  _parse(e7) {
    return k(e7.data);
  }
};
Z.create = (r39) => new Z({ typeName: m.ZodUnknown, ...y(r39) });
var A = class extends _ {
  _parse(e7) {
    let t9 = this._getOrReturnCtx(e7);
    return d(t9, { code: c.invalid_type, expected: u.never, received: t9.parsedType }), p;
  }
};
A.create = (r39) => new A({ typeName: m.ZodNever, ...y(r39) });
var ie = class extends _ {
  _parse(e7) {
    if (this._getType(e7) !== u.undefined) {
      let s9 = this._getOrReturnCtx(e7);
      return d(s9, { code: c.invalid_type, expected: u.void, received: s9.parsedType }), p;
    }
    return k(e7.data);
  }
};
ie.create = (r39) => new ie({ typeName: m.ZodVoid, ...y(r39) });
var $ = class r7 extends _ {
  _parse(e7) {
    let { ctx: t9, status: s9 } = this._processInputParams(e7), a11 = this._def;
    if (t9.parsedType !== u.array) return d(t9, { code: c.invalid_type, expected: u.array, received: t9.parsedType }), p;
    if (a11.exactLength !== null) {
      let i21 = t9.data.length > a11.exactLength.value, o18 = t9.data.length < a11.exactLength.value;
      (i21 || o18) && (d(t9, { code: i21 ? c.too_big : c.too_small, minimum: o18 ? a11.exactLength.value : void 0, maximum: i21 ? a11.exactLength.value : void 0, type: "array", inclusive: true, exact: true, message: a11.exactLength.message }), s9.dirty());
    }
    if (a11.minLength !== null && t9.data.length < a11.minLength.value && (d(t9, { code: c.too_small, minimum: a11.minLength.value, type: "array", inclusive: true, exact: false, message: a11.minLength.message }), s9.dirty()), a11.maxLength !== null && t9.data.length > a11.maxLength.value && (d(t9, { code: c.too_big, maximum: a11.maxLength.value, type: "array", inclusive: true, exact: false, message: a11.maxLength.message }), s9.dirty()), t9.common.async) return Promise.all([...t9.data].map((i21, o18) => a11.type._parseAsync(new O(t9, i21, t9.path, o18)))).then((i21) => x.mergeArray(s9, i21));
    let n17 = [...t9.data].map((i21, o18) => a11.type._parseSync(new O(t9, i21, t9.path, o18)));
    return x.mergeArray(s9, n17);
  }
  get element() {
    return this._def.type;
  }
  min(e7, t9) {
    return new r7({ ...this._def, minLength: { value: e7, message: h.toString(t9) } });
  }
  max(e7, t9) {
    return new r7({ ...this._def, maxLength: { value: e7, message: h.toString(t9) } });
  }
  length(e7, t9) {
    return new r7({ ...this._def, exactLength: { value: e7, message: h.toString(t9) } });
  }
  nonempty(e7) {
    return this.min(1, e7);
  }
};
$.create = (r39, e7) => new $({ type: r39, minLength: null, maxLength: null, exactLength: null, typeName: m.ZodArray, ...y(e7) });
function ae(r39) {
  if (r39 instanceof w) {
    let e7 = {};
    for (let t9 in r39.shape) {
      let s9 = r39.shape[t9];
      e7[t9] = C.create(ae(s9));
    }
    return new w({ ...r39._def, shape: () => e7 });
  } else return r39 instanceof $ ? new $({ ...r39._def, type: ae(r39.element) }) : r39 instanceof C ? C.create(ae(r39.unwrap())) : r39 instanceof j ? j.create(ae(r39.unwrap())) : r39 instanceof N ? N.create(r39.items.map((e7) => ae(e7))) : r39;
}
var w = class r8 extends _ {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    let e7 = this._def.shape(), t9 = g.objectKeys(e7);
    return this._cached = { shape: e7, keys: t9 }, this._cached;
  }
  _parse(e7) {
    if (this._getType(e7) !== u.object) {
      let l16 = this._getOrReturnCtx(e7);
      return d(l16, { code: c.invalid_type, expected: u.object, received: l16.parsedType }), p;
    }
    let { status: s9, ctx: a11 } = this._processInputParams(e7), { shape: n17, keys: i21 } = this._getCached(), o18 = [];
    if (!(this._def.catchall instanceof A && this._def.unknownKeys === "strip")) for (let l16 in a11.data) i21.includes(l16) || o18.push(l16);
    let f14 = [];
    for (let l16 of i21) {
      let v9 = n17[l16], T9 = a11.data[l16];
      f14.push({ key: { status: "valid", value: l16 }, value: v9._parse(new O(a11, T9, a11.path, l16)), alwaysSet: l16 in a11.data });
    }
    if (this._def.catchall instanceof A) {
      let l16 = this._def.unknownKeys;
      if (l16 === "passthrough") for (let v9 of o18) f14.push({ key: { status: "valid", value: v9 }, value: { status: "valid", value: a11.data[v9] } });
      else if (l16 === "strict") o18.length > 0 && (d(a11, { code: c.unrecognized_keys, keys: o18 }), s9.dirty());
      else if (l16 !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      let l16 = this._def.catchall;
      for (let v9 of o18) {
        let T9 = a11.data[v9];
        f14.push({ key: { status: "valid", value: v9 }, value: l16._parse(new O(a11, T9, a11.path, v9)), alwaysSet: v9 in a11.data });
      }
    }
    return a11.common.async ? Promise.resolve().then(async () => {
      let l16 = [];
      for (let v9 of f14) {
        let T9 = await v9.key, we3 = await v9.value;
        l16.push({ key: T9, value: we3, alwaysSet: v9.alwaysSet });
      }
      return l16;
    }).then((l16) => x.mergeObjectSync(s9, l16)) : x.mergeObjectSync(s9, f14);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e7) {
    return h.errToObj, new r8({ ...this._def, unknownKeys: "strict", ...e7 !== void 0 ? { errorMap: (t9, s9) => {
      let a11 = this._def.errorMap?.(t9, s9).message ?? s9.defaultError;
      return t9.code === "unrecognized_keys" ? { message: h.errToObj(e7).message ?? a11 } : { message: a11 };
    } } : {} });
  }
  strip() {
    return new r8({ ...this._def, unknownKeys: "strip" });
  }
  passthrough() {
    return new r8({ ...this._def, unknownKeys: "passthrough" });
  }
  extend(e7) {
    return new r8({ ...this._def, shape: () => ({ ...this._def.shape(), ...e7 }) });
  }
  merge(e7) {
    return new r8({ unknownKeys: e7._def.unknownKeys, catchall: e7._def.catchall, shape: () => ({ ...this._def.shape(), ...e7._def.shape() }), typeName: m.ZodObject });
  }
  setKey(e7, t9) {
    return this.augment({ [e7]: t9 });
  }
  catchall(e7) {
    return new r8({ ...this._def, catchall: e7 });
  }
  pick(e7) {
    let t9 = {};
    for (let s9 of g.objectKeys(e7)) e7[s9] && this.shape[s9] && (t9[s9] = this.shape[s9]);
    return new r8({ ...this._def, shape: () => t9 });
  }
  omit(e7) {
    let t9 = {};
    for (let s9 of g.objectKeys(this.shape)) e7[s9] || (t9[s9] = this.shape[s9]);
    return new r8({ ...this._def, shape: () => t9 });
  }
  deepPartial() {
    return ae(this);
  }
  partial(e7) {
    let t9 = {};
    for (let s9 of g.objectKeys(this.shape)) {
      let a11 = this.shape[s9];
      e7 && !e7[s9] ? t9[s9] = a11 : t9[s9] = a11.optional();
    }
    return new r8({ ...this._def, shape: () => t9 });
  }
  required(e7) {
    let t9 = {};
    for (let s9 of g.objectKeys(this.shape)) if (e7 && !e7[s9]) t9[s9] = this.shape[s9];
    else {
      let n17 = this.shape[s9];
      for (; n17 instanceof C; ) n17 = n17._def.innerType;
      t9[s9] = n17;
    }
    return new r8({ ...this._def, shape: () => t9 });
  }
  keyof() {
    return Ne(g.objectKeys(this.shape));
  }
};
w.create = (r39, e7) => new w({ shape: () => r39, unknownKeys: "strip", catchall: A.create(), typeName: m.ZodObject, ...y(e7) });
w.strictCreate = (r39, e7) => new w({ shape: () => r39, unknownKeys: "strict", catchall: A.create(), typeName: m.ZodObject, ...y(e7) });
w.lazycreate = (r39, e7) => new w({ shape: r39, unknownKeys: "strip", catchall: A.create(), typeName: m.ZodObject, ...y(e7) });
var J = class extends _ {
  _parse(e7) {
    let { ctx: t9 } = this._processInputParams(e7), s9 = this._def.options;
    function a11(n17) {
      for (let o18 of n17) if (o18.result.status === "valid") return o18.result;
      for (let o18 of n17) if (o18.result.status === "dirty") return t9.common.issues.push(...o18.ctx.common.issues), o18.result;
      let i21 = n17.map((o18) => new b(o18.ctx.common.issues));
      return d(t9, { code: c.invalid_union, unionErrors: i21 }), p;
    }
    if (t9.common.async) return Promise.all(s9.map(async (n17) => {
      let i21 = { ...t9, common: { ...t9.common, issues: [] }, parent: null };
      return { result: await n17._parseAsync({ data: t9.data, path: t9.path, parent: i21 }), ctx: i21 };
    })).then(a11);
    {
      let n17, i21 = [];
      for (let f14 of s9) {
        let l16 = { ...t9, common: { ...t9.common, issues: [] }, parent: null }, v9 = f14._parseSync({ data: t9.data, path: t9.path, parent: l16 });
        if (v9.status === "valid") return v9;
        v9.status === "dirty" && !n17 && (n17 = { result: v9, ctx: l16 }), l16.common.issues.length && i21.push(l16.common.issues);
      }
      if (n17) return t9.common.issues.push(...n17.ctx.common.issues), n17.result;
      let o18 = i21.map((f14) => new b(f14));
      return d(t9, { code: c.invalid_union, unionErrors: o18 }), p;
    }
  }
  get options() {
    return this._def.options;
  }
};
J.create = (r39, e7) => new J({ options: r39, typeName: m.ZodUnion, ...y(e7) });
var E = (r39) => r39 instanceof H ? E(r39.schema) : r39 instanceof S ? E(r39.innerType()) : r39 instanceof G ? [r39.value] : r39 instanceof Q ? r39.options : r39 instanceof X ? g.objectValues(r39.enum) : r39 instanceof K ? E(r39._def.innerType) : r39 instanceof W ? [void 0] : r39 instanceof q ? [null] : r39 instanceof C ? [void 0, ...E(r39.unwrap())] : r39 instanceof j ? [null, ...E(r39.unwrap())] : r39 instanceof le || r39 instanceof te ? E(r39.unwrap()) : r39 instanceof ee ? E(r39._def.innerType) : [];
var me = class r9 extends _ {
  _parse(e7) {
    let { ctx: t9 } = this._processInputParams(e7);
    if (t9.parsedType !== u.object) return d(t9, { code: c.invalid_type, expected: u.object, received: t9.parsedType }), p;
    let s9 = this.discriminator, a11 = t9.data[s9], n17 = this.optionsMap.get(a11);
    return n17 ? t9.common.async ? n17._parseAsync({ data: t9.data, path: t9.path, parent: t9 }) : n17._parseSync({ data: t9.data, path: t9.path, parent: t9 }) : (d(t9, { code: c.invalid_union_discriminator, options: Array.from(this.optionsMap.keys()), path: [s9] }), p);
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
  static create(e7, t9, s9) {
    let a11 = /* @__PURE__ */ new Map();
    for (let n17 of t9) {
      let i21 = E(n17.shape[e7]);
      if (!i21.length) throw new Error(`A discriminator value for key \`${e7}\` could not be extracted from all schema options`);
      for (let o18 of i21) {
        if (a11.has(o18)) throw new Error(`Discriminator property ${String(e7)} has duplicate value ${String(o18)}`);
        a11.set(o18, n17);
      }
    }
    return new r9({ typeName: m.ZodDiscriminatedUnion, discriminator: e7, options: t9, optionsMap: a11, ...y(s9) });
  }
};
function ke(r39, e7) {
  let t9 = R(r39), s9 = R(e7);
  if (r39 === e7) return { valid: true, data: r39 };
  if (t9 === u.object && s9 === u.object) {
    let a11 = g.objectKeys(e7), n17 = g.objectKeys(r39).filter((o18) => a11.indexOf(o18) !== -1), i21 = { ...r39, ...e7 };
    for (let o18 of n17) {
      let f14 = ke(r39[o18], e7[o18]);
      if (!f14.valid) return { valid: false };
      i21[o18] = f14.data;
    }
    return { valid: true, data: i21 };
  } else if (t9 === u.array && s9 === u.array) {
    if (r39.length !== e7.length) return { valid: false };
    let a11 = [];
    for (let n17 = 0; n17 < r39.length; n17++) {
      let i21 = r39[n17], o18 = e7[n17], f14 = ke(i21, o18);
      if (!f14.valid) return { valid: false };
      a11.push(f14.data);
    }
    return { valid: true, data: a11 };
  } else return t9 === u.date && s9 === u.date && +r39 == +e7 ? { valid: true, data: r39 } : { valid: false };
}
var Y = class extends _ {
  _parse(e7) {
    let { status: t9, ctx: s9 } = this._processInputParams(e7), a11 = (n17, i21) => {
      if (he(n17) || he(i21)) return p;
      let o18 = ke(n17.value, i21.value);
      return o18.valid ? ((pe(n17) || pe(i21)) && t9.dirty(), { status: t9.value, value: o18.data }) : (d(s9, { code: c.invalid_intersection_types }), p);
    };
    return s9.common.async ? Promise.all([this._def.left._parseAsync({ data: s9.data, path: s9.path, parent: s9 }), this._def.right._parseAsync({ data: s9.data, path: s9.path, parent: s9 })]).then(([n17, i21]) => a11(n17, i21)) : a11(this._def.left._parseSync({ data: s9.data, path: s9.path, parent: s9 }), this._def.right._parseSync({ data: s9.data, path: s9.path, parent: s9 }));
  }
};
Y.create = (r39, e7, t9) => new Y({ left: r39, right: e7, typeName: m.ZodIntersection, ...y(t9) });
var N = class r10 extends _ {
  _parse(e7) {
    let { status: t9, ctx: s9 } = this._processInputParams(e7);
    if (s9.parsedType !== u.array) return d(s9, { code: c.invalid_type, expected: u.array, received: s9.parsedType }), p;
    if (s9.data.length < this._def.items.length) return d(s9, { code: c.too_small, minimum: this._def.items.length, inclusive: true, exact: false, type: "array" }), p;
    !this._def.rest && s9.data.length > this._def.items.length && (d(s9, { code: c.too_big, maximum: this._def.items.length, inclusive: true, exact: false, type: "array" }), t9.dirty());
    let n17 = [...s9.data].map((i21, o18) => {
      let f14 = this._def.items[o18] || this._def.rest;
      return f14 ? f14._parse(new O(s9, i21, s9.path, o18)) : null;
    }).filter((i21) => !!i21);
    return s9.common.async ? Promise.all(n17).then((i21) => x.mergeArray(t9, i21)) : x.mergeArray(t9, n17);
  }
  get items() {
    return this._def.items;
  }
  rest(e7) {
    return new r10({ ...this._def, rest: e7 });
  }
};
N.create = (r39, e7) => {
  if (!Array.isArray(r39)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new N({ items: r39, typeName: m.ZodTuple, rest: null, ...y(e7) });
};
var ye = class r11 extends _ {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e7) {
    let { status: t9, ctx: s9 } = this._processInputParams(e7);
    if (s9.parsedType !== u.object) return d(s9, { code: c.invalid_type, expected: u.object, received: s9.parsedType }), p;
    let a11 = [], n17 = this._def.keyType, i21 = this._def.valueType;
    for (let o18 in s9.data) a11.push({ key: n17._parse(new O(s9, o18, s9.path, o18)), value: i21._parse(new O(s9, s9.data[o18], s9.path, o18)), alwaysSet: o18 in s9.data });
    return s9.common.async ? x.mergeObjectAsync(t9, a11) : x.mergeObjectSync(t9, a11);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e7, t9, s9) {
    return t9 instanceof _ ? new r11({ keyType: e7, valueType: t9, typeName: m.ZodRecord, ...y(s9) }) : new r11({ keyType: V.create(), valueType: e7, typeName: m.ZodRecord, ...y(t9) });
  }
};
var oe = class extends _ {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e7) {
    let { status: t9, ctx: s9 } = this._processInputParams(e7);
    if (s9.parsedType !== u.map) return d(s9, { code: c.invalid_type, expected: u.map, received: s9.parsedType }), p;
    let a11 = this._def.keyType, n17 = this._def.valueType, i21 = [...s9.data.entries()].map(([o18, f14], l16) => ({ key: a11._parse(new O(s9, o18, s9.path, [l16, "key"])), value: n17._parse(new O(s9, f14, s9.path, [l16, "value"])) }));
    if (s9.common.async) {
      let o18 = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (let f14 of i21) {
          let l16 = await f14.key, v9 = await f14.value;
          if (l16.status === "aborted" || v9.status === "aborted") return p;
          (l16.status === "dirty" || v9.status === "dirty") && t9.dirty(), o18.set(l16.value, v9.value);
        }
        return { status: t9.value, value: o18 };
      });
    } else {
      let o18 = /* @__PURE__ */ new Map();
      for (let f14 of i21) {
        let l16 = f14.key, v9 = f14.value;
        if (l16.status === "aborted" || v9.status === "aborted") return p;
        (l16.status === "dirty" || v9.status === "dirty") && t9.dirty(), o18.set(l16.value, v9.value);
      }
      return { status: t9.value, value: o18 };
    }
  }
};
oe.create = (r39, e7, t9) => new oe({ valueType: e7, keyType: r39, typeName: m.ZodMap, ...y(t9) });
var ce = class r12 extends _ {
  _parse(e7) {
    let { status: t9, ctx: s9 } = this._processInputParams(e7);
    if (s9.parsedType !== u.set) return d(s9, { code: c.invalid_type, expected: u.set, received: s9.parsedType }), p;
    let a11 = this._def;
    a11.minSize !== null && s9.data.size < a11.minSize.value && (d(s9, { code: c.too_small, minimum: a11.minSize.value, type: "set", inclusive: true, exact: false, message: a11.minSize.message }), t9.dirty()), a11.maxSize !== null && s9.data.size > a11.maxSize.value && (d(s9, { code: c.too_big, maximum: a11.maxSize.value, type: "set", inclusive: true, exact: false, message: a11.maxSize.message }), t9.dirty());
    let n17 = this._def.valueType;
    function i21(f14) {
      let l16 = /* @__PURE__ */ new Set();
      for (let v9 of f14) {
        if (v9.status === "aborted") return p;
        v9.status === "dirty" && t9.dirty(), l16.add(v9.value);
      }
      return { status: t9.value, value: l16 };
    }
    let o18 = [...s9.data.values()].map((f14, l16) => n17._parse(new O(s9, f14, s9.path, l16)));
    return s9.common.async ? Promise.all(o18).then((f14) => i21(f14)) : i21(o18);
  }
  min(e7, t9) {
    return new r12({ ...this._def, minSize: { value: e7, message: h.toString(t9) } });
  }
  max(e7, t9) {
    return new r12({ ...this._def, maxSize: { value: e7, message: h.toString(t9) } });
  }
  size(e7, t9) {
    return this.min(e7, t9).max(e7, t9);
  }
  nonempty(e7) {
    return this.min(1, e7);
  }
};
ce.create = (r39, e7) => new ce({ valueType: r39, minSize: null, maxSize: null, typeName: m.ZodSet, ...y(e7) });
var _e = class r13 extends _ {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(e7) {
    let { ctx: t9 } = this._processInputParams(e7);
    if (t9.parsedType !== u.function) return d(t9, { code: c.invalid_type, expected: u.function, received: t9.parsedType }), p;
    function s9(o18, f14) {
      return ue({ data: o18, path: t9.path, errorMaps: [t9.common.contextualErrorMap, t9.schemaErrorMap, re(), I].filter((l16) => !!l16), issueData: { code: c.invalid_arguments, argumentsError: f14 } });
    }
    function a11(o18, f14) {
      return ue({ data: o18, path: t9.path, errorMaps: [t9.common.contextualErrorMap, t9.schemaErrorMap, re(), I].filter((l16) => !!l16), issueData: { code: c.invalid_return_type, returnTypeError: f14 } });
    }
    let n17 = { errorMap: t9.common.contextualErrorMap }, i21 = t9.data;
    if (this._def.returns instanceof z) {
      let o18 = this;
      return k(async function(...f14) {
        let l16 = new b([]), v9 = await o18._def.args.parseAsync(f14, n17).catch((ge5) => {
          throw l16.addIssue(s9(f14, ge5)), l16;
        }), T9 = await Reflect.apply(i21, this, v9);
        return await o18._def.returns._def.type.parseAsync(T9, n17).catch((ge5) => {
          throw l16.addIssue(a11(T9, ge5)), l16;
        });
      });
    } else {
      let o18 = this;
      return k(function(...f14) {
        let l16 = o18._def.args.safeParse(f14, n17);
        if (!l16.success) throw new b([s9(f14, l16.error)]);
        let v9 = Reflect.apply(i21, this, l16.data), T9 = o18._def.returns.safeParse(v9, n17);
        if (!T9.success) throw new b([a11(v9, T9.error)]);
        return T9.data;
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
    return new r13({ ...this._def, args: N.create(e7).rest(Z.create()) });
  }
  returns(e7) {
    return new r13({ ...this._def, returns: e7 });
  }
  implement(e7) {
    return this.parse(e7);
  }
  strictImplement(e7) {
    return this.parse(e7);
  }
  static create(e7, t9, s9) {
    return new r13({ args: e7 || N.create([]).rest(Z.create()), returns: t9 || Z.create(), typeName: m.ZodFunction, ...y(s9) });
  }
};
var H = class extends _ {
  get schema() {
    return this._def.getter();
  }
  _parse(e7) {
    let { ctx: t9 } = this._processInputParams(e7);
    return this._def.getter()._parse({ data: t9.data, path: t9.path, parent: t9 });
  }
};
H.create = (r39, e7) => new H({ getter: r39, typeName: m.ZodLazy, ...y(e7) });
var G = class extends _ {
  _parse(e7) {
    if (e7.data !== this._def.value) {
      let t9 = this._getOrReturnCtx(e7);
      return d(t9, { received: t9.data, code: c.invalid_literal, expected: this._def.value }), p;
    }
    return { status: "valid", value: e7.data };
  }
  get value() {
    return this._def.value;
  }
};
G.create = (r39, e7) => new G({ value: r39, typeName: m.ZodLiteral, ...y(e7) });
function Ne(r39, e7) {
  return new Q({ values: r39, typeName: m.ZodEnum, ...y(e7) });
}
var Q = class r14 extends _ {
  _parse(e7) {
    if (typeof e7.data != "string") {
      let t9 = this._getOrReturnCtx(e7), s9 = this._def.values;
      return d(t9, { expected: g.joinValues(s9), received: t9.parsedType, code: c.invalid_type }), p;
    }
    if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(e7.data)) {
      let t9 = this._getOrReturnCtx(e7), s9 = this._def.values;
      return d(t9, { received: t9.data, code: c.invalid_enum_value, options: s9 }), p;
    }
    return k(e7.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    let e7 = {};
    for (let t9 of this._def.values) e7[t9] = t9;
    return e7;
  }
  get Values() {
    let e7 = {};
    for (let t9 of this._def.values) e7[t9] = t9;
    return e7;
  }
  get Enum() {
    let e7 = {};
    for (let t9 of this._def.values) e7[t9] = t9;
    return e7;
  }
  extract(e7, t9 = this._def) {
    return r14.create(e7, { ...this._def, ...t9 });
  }
  exclude(e7, t9 = this._def) {
    return r14.create(this.options.filter((s9) => !e7.includes(s9)), { ...this._def, ...t9 });
  }
};
Q.create = Ne;
var X = class extends _ {
  _parse(e7) {
    let t9 = g.getValidEnumValues(this._def.values), s9 = this._getOrReturnCtx(e7);
    if (s9.parsedType !== u.string && s9.parsedType !== u.number) {
      let a11 = g.objectValues(t9);
      return d(s9, { expected: g.joinValues(a11), received: s9.parsedType, code: c.invalid_type }), p;
    }
    if (this._cache || (this._cache = new Set(g.getValidEnumValues(this._def.values))), !this._cache.has(e7.data)) {
      let a11 = g.objectValues(t9);
      return d(s9, { received: s9.data, code: c.invalid_enum_value, options: a11 }), p;
    }
    return k(e7.data);
  }
  get enum() {
    return this._def.values;
  }
};
X.create = (r39, e7) => new X({ values: r39, typeName: m.ZodNativeEnum, ...y(e7) });
var z = class extends _ {
  unwrap() {
    return this._def.type;
  }
  _parse(e7) {
    let { ctx: t9 } = this._processInputParams(e7);
    if (t9.parsedType !== u.promise && t9.common.async === false) return d(t9, { code: c.invalid_type, expected: u.promise, received: t9.parsedType }), p;
    let s9 = t9.parsedType === u.promise ? t9.data : Promise.resolve(t9.data);
    return k(s9.then((a11) => this._def.type.parseAsync(a11, { path: t9.path, errorMap: t9.common.contextualErrorMap })));
  }
};
z.create = (r39, e7) => new z({ type: r39, typeName: m.ZodPromise, ...y(e7) });
var S = class extends _ {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === m.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e7) {
    let { status: t9, ctx: s9 } = this._processInputParams(e7), a11 = this._def.effect || null, n17 = { addIssue: (i21) => {
      d(s9, i21), i21.fatal ? t9.abort() : t9.dirty();
    }, get path() {
      return s9.path;
    } };
    if (n17.addIssue = n17.addIssue.bind(n17), a11.type === "preprocess") {
      let i21 = a11.transform(s9.data, n17);
      if (s9.common.async) return Promise.resolve(i21).then(async (o18) => {
        if (t9.value === "aborted") return p;
        let f14 = await this._def.schema._parseAsync({ data: o18, path: s9.path, parent: s9 });
        return f14.status === "aborted" ? p : f14.status === "dirty" ? D(f14.value) : t9.value === "dirty" ? D(f14.value) : f14;
      });
      {
        if (t9.value === "aborted") return p;
        let o18 = this._def.schema._parseSync({ data: i21, path: s9.path, parent: s9 });
        return o18.status === "aborted" ? p : o18.status === "dirty" ? D(o18.value) : t9.value === "dirty" ? D(o18.value) : o18;
      }
    }
    if (a11.type === "refinement") {
      let i21 = (o18) => {
        let f14 = a11.refinement(o18, n17);
        if (s9.common.async) return Promise.resolve(f14);
        if (f14 instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return o18;
      };
      if (s9.common.async === false) {
        let o18 = this._def.schema._parseSync({ data: s9.data, path: s9.path, parent: s9 });
        return o18.status === "aborted" ? p : (o18.status === "dirty" && t9.dirty(), i21(o18.value), { status: t9.value, value: o18.value });
      } else return this._def.schema._parseAsync({ data: s9.data, path: s9.path, parent: s9 }).then((o18) => o18.status === "aborted" ? p : (o18.status === "dirty" && t9.dirty(), i21(o18.value).then(() => ({ status: t9.value, value: o18.value }))));
    }
    if (a11.type === "transform") if (s9.common.async === false) {
      let i21 = this._def.schema._parseSync({ data: s9.data, path: s9.path, parent: s9 });
      if (!M(i21)) return p;
      let o18 = a11.transform(i21.value, n17);
      if (o18 instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
      return { status: t9.value, value: o18 };
    } else return this._def.schema._parseAsync({ data: s9.data, path: s9.path, parent: s9 }).then((i21) => M(i21) ? Promise.resolve(a11.transform(i21.value, n17)).then((o18) => ({ status: t9.value, value: o18 })) : p);
    g.assertNever(a11);
  }
};
S.create = (r39, e7, t9) => new S({ schema: r39, typeName: m.ZodEffects, effect: e7, ...y(t9) });
S.createWithPreprocess = (r39, e7, t9) => new S({ schema: e7, effect: { type: "preprocess", transform: r39 }, typeName: m.ZodEffects, ...y(t9) });
var C = class extends _ {
  _parse(e7) {
    return this._getType(e7) === u.undefined ? k(void 0) : this._def.innerType._parse(e7);
  }
  unwrap() {
    return this._def.innerType;
  }
};
C.create = (r39, e7) => new C({ innerType: r39, typeName: m.ZodOptional, ...y(e7) });
var j = class extends _ {
  _parse(e7) {
    return this._getType(e7) === u.null ? k(null) : this._def.innerType._parse(e7);
  }
  unwrap() {
    return this._def.innerType;
  }
};
j.create = (r39, e7) => new j({ innerType: r39, typeName: m.ZodNullable, ...y(e7) });
var K = class extends _ {
  _parse(e7) {
    let { ctx: t9 } = this._processInputParams(e7), s9 = t9.data;
    return t9.parsedType === u.undefined && (s9 = this._def.defaultValue()), this._def.innerType._parse({ data: s9, path: t9.path, parent: t9 });
  }
  removeDefault() {
    return this._def.innerType;
  }
};
K.create = (r39, e7) => new K({ innerType: r39, typeName: m.ZodDefault, defaultValue: typeof e7.default == "function" ? e7.default : () => e7.default, ...y(e7) });
var ee = class extends _ {
  _parse(e7) {
    let { ctx: t9 } = this._processInputParams(e7), s9 = { ...t9, common: { ...t9.common, issues: [] } }, a11 = this._def.innerType._parse({ data: s9.data, path: s9.path, parent: { ...s9 } });
    return se(a11) ? a11.then((n17) => ({ status: "valid", value: n17.status === "valid" ? n17.value : this._def.catchValue({ get error() {
      return new b(s9.common.issues);
    }, input: s9.data }) })) : { status: "valid", value: a11.status === "valid" ? a11.value : this._def.catchValue({ get error() {
      return new b(s9.common.issues);
    }, input: s9.data }) };
  }
  removeCatch() {
    return this._def.innerType;
  }
};
ee.create = (r39, e7) => new ee({ innerType: r39, typeName: m.ZodCatch, catchValue: typeof e7.catch == "function" ? e7.catch : () => e7.catch, ...y(e7) });
var de = class extends _ {
  _parse(e7) {
    if (this._getType(e7) !== u.nan) {
      let s9 = this._getOrReturnCtx(e7);
      return d(s9, { code: c.invalid_type, expected: u.nan, received: s9.parsedType }), p;
    }
    return { status: "valid", value: e7.data };
  }
};
de.create = (r39) => new de({ typeName: m.ZodNaN, ...y(r39) });
var ct = Symbol("zod_brand");
var le = class extends _ {
  _parse(e7) {
    let { ctx: t9 } = this._processInputParams(e7), s9 = t9.data;
    return this._def.type._parse({ data: s9, path: t9.path, parent: t9 });
  }
  unwrap() {
    return this._def.type;
  }
};
var fe = class r15 extends _ {
  _parse(e7) {
    let { status: t9, ctx: s9 } = this._processInputParams(e7);
    if (s9.common.async) return (async () => {
      let n17 = await this._def.in._parseAsync({ data: s9.data, path: s9.path, parent: s9 });
      return n17.status === "aborted" ? p : n17.status === "dirty" ? (t9.dirty(), D(n17.value)) : this._def.out._parseAsync({ data: n17.value, path: s9.path, parent: s9 });
    })();
    {
      let a11 = this._def.in._parseSync({ data: s9.data, path: s9.path, parent: s9 });
      return a11.status === "aborted" ? p : a11.status === "dirty" ? (t9.dirty(), { status: "dirty", value: a11.value }) : this._def.out._parseSync({ data: a11.value, path: s9.path, parent: s9 });
    }
  }
  static create(e7, t9) {
    return new r15({ in: e7, out: t9, typeName: m.ZodPipeline });
  }
};
var te = class extends _ {
  _parse(e7) {
    let t9 = this._def.innerType._parse(e7), s9 = (a11) => (M(a11) && (a11.value = Object.freeze(a11.value)), a11);
    return se(t9) ? t9.then((a11) => s9(a11)) : s9(t9);
  }
  unwrap() {
    return this._def.innerType;
  }
};
te.create = (r39, e7) => new te({ innerType: r39, typeName: m.ZodReadonly, ...y(e7) });
function Oe(r39, e7) {
  let t9 = typeof r39 == "function" ? r39(e7) : typeof r39 == "string" ? { message: r39 } : r39;
  return typeof t9 == "string" ? { message: t9 } : t9;
}
function je(r39, e7 = {}, t9) {
  return r39 ? P.create().superRefine((s9, a11) => {
    let n17 = r39(s9);
    if (n17 instanceof Promise) return n17.then((i21) => {
      if (!i21) {
        let o18 = Oe(e7, s9), f14 = o18.fatal ?? t9 ?? true;
        a11.addIssue({ code: "custom", ...o18, fatal: f14 });
      }
    });
    if (!n17) {
      let i21 = Oe(e7, s9), o18 = i21.fatal ?? t9 ?? true;
      a11.addIssue({ code: "custom", ...i21, fatal: o18 });
    }
  }) : P.create();
}
var dt = { object: w.lazycreate };
var m;
(function(r39) {
  r39.ZodString = "ZodString", r39.ZodNumber = "ZodNumber", r39.ZodNaN = "ZodNaN", r39.ZodBigInt = "ZodBigInt", r39.ZodBoolean = "ZodBoolean", r39.ZodDate = "ZodDate", r39.ZodSymbol = "ZodSymbol", r39.ZodUndefined = "ZodUndefined", r39.ZodNull = "ZodNull", r39.ZodAny = "ZodAny", r39.ZodUnknown = "ZodUnknown", r39.ZodNever = "ZodNever", r39.ZodVoid = "ZodVoid", r39.ZodArray = "ZodArray", r39.ZodObject = "ZodObject", r39.ZodUnion = "ZodUnion", r39.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", r39.ZodIntersection = "ZodIntersection", r39.ZodTuple = "ZodTuple", r39.ZodRecord = "ZodRecord", r39.ZodMap = "ZodMap", r39.ZodSet = "ZodSet", r39.ZodFunction = "ZodFunction", r39.ZodLazy = "ZodLazy", r39.ZodLiteral = "ZodLiteral", r39.ZodEnum = "ZodEnum", r39.ZodEffects = "ZodEffects", r39.ZodNativeEnum = "ZodNativeEnum", r39.ZodOptional = "ZodOptional", r39.ZodNullable = "ZodNullable", r39.ZodDefault = "ZodDefault", r39.ZodCatch = "ZodCatch", r39.ZodPromise = "ZodPromise", r39.ZodBranded = "ZodBranded", r39.ZodPipeline = "ZodPipeline", r39.ZodReadonly = "ZodReadonly";
})(m || (m = {}));
var ut = (r39, e7 = { message: `Input not instance of ${r39.name}` }) => je((t9) => t9 instanceof r39, e7);
var Ie = V.create;
var Ee = L.create;
var lt = de.create;
var ft = U.create;
var Ze = F.create;
var ht = B.create;
var pt = ne.create;
var mt = W.create;
var yt = q.create;
var _t = P.create;
var gt = Z.create;
var vt = A.create;
var xt = ie.create;
var kt = $.create;
var bt = w.create;
var wt = w.strictCreate;
var Tt = J.create;
var Ct = me.create;
var Ot = Y.create;
var St = N.create;
var At = ye.create;
var Rt = oe.create;
var Nt = ce.create;
var jt = _e.create;
var It = H.create;
var Et = G.create;
var Zt = Q.create;
var $t = X.create;
var Mt = z.create;
var Vt = S.create;
var Pt = C.create;
var zt = j.create;
var Dt = S.createWithPreprocess;
var Lt = fe.create;
var Ut = () => Ie().optional();
var Ft = () => Ee().optional();
var Bt = () => Ze().optional();
var Wt = { string: (r39) => V.create({ ...r39, coerce: true }), number: (r39) => L.create({ ...r39, coerce: true }), boolean: (r39) => F.create({ ...r39, coerce: true }), bigint: (r39) => U.create({ ...r39, coerce: true }), date: (r39) => B.create({ ...r39, coerce: true }) };
var qt = p;

// https://raw.githubusercontent.com/jeff-hykin/openai-agents-js/refs/heads/main/packages/agents-core/src/shims/shims-node.ts
import * as process2 from "node:process";
import { EventEmitter } from "node:events";
import { randomUUID } from "node:crypto";
import { Readable } from "node:stream";
import {
  ReadableStream as ReadableStream2,
  TransformStream as TransformStream2
} from "node:stream/web";
import { AsyncLocalStorage } from "node:async_hooks";

// https://esm.sh/gh/modelcontextprotocol/typescript-sdk@f657ead/src//shared/protocol.js
init_zod_3_25();

// https://esm.sh/gh/modelcontextprotocol/typescript-sdk@f657ead/denonext/src//shared/protocol.mjs
init_zod_3_25();
var y3 = "2.0";
var H3 = be2.union([be2.string(), be2.number().int()]);
var w3 = be2.string();
var te3 = be2.object({ progressToken: be2.optional(H3) }).passthrough();
var u3 = be2.object({ _meta: be2.optional(te3) }).passthrough();
var a = be2.object({ method: be2.string(), params: be2.optional(u3) });
var S3 = be2.object({ _meta: be2.optional(be2.object({}).passthrough()) }).passthrough();
var h3 = be2.object({ method: be2.string(), params: be2.optional(S3) });
var m3 = be2.object({ _meta: be2.optional(be2.object({}).passthrough()) }).passthrough();
var b3 = be2.union([be2.string(), be2.number().int()]);
var J3 = be2.object({ jsonrpc: be2.literal(y3), id: b3 }).merge(a).strict();
var A3 = be2.object({ jsonrpc: be2.literal(y3) }).merge(h3).strict();
var U3 = be2.object({ jsonrpc: be2.literal(y3), id: b3, result: m3 }).strict();
var D3 = be2.object({ jsonrpc: be2.literal(y3), id: b3, error: be2.object({ code: be2.number().int(), message: be2.string(), data: be2.optional(be2.unknown()) }) }).strict();
var it3 = be2.union([J3, A3, U3, D3]);
var F3 = m3.strict();
var I3 = h3.extend({ method: be2.literal("notifications/cancelled"), params: S3.extend({ requestId: b3, reason: be2.string().optional() }) });
var x3 = be2.object({ name: be2.string(), title: be2.optional(be2.string()) }).passthrough();
var Z3 = x3.extend({ version: be2.string() });
var oe3 = be2.object({ experimental: be2.optional(be2.object({}).passthrough()), sampling: be2.optional(be2.object({}).passthrough()), elicitation: be2.optional(be2.object({}).passthrough()), roots: be2.optional(be2.object({ listChanged: be2.optional(be2.boolean()) }).passthrough()) }).passthrough();
var re3 = a.extend({ method: be2.literal("initialize"), params: u3.extend({ protocolVersion: be2.string(), capabilities: oe3, clientInfo: Z3 }) });
var ne3 = be2.object({ experimental: be2.optional(be2.object({}).passthrough()), logging: be2.optional(be2.object({}).passthrough()), completions: be2.optional(be2.object({}).passthrough()), prompts: be2.optional(be2.object({ listChanged: be2.optional(be2.boolean()) }).passthrough()), resources: be2.optional(be2.object({ subscribe: be2.optional(be2.boolean()), listChanged: be2.optional(be2.boolean()) }).passthrough()), tools: be2.optional(be2.object({ listChanged: be2.optional(be2.boolean()) }).passthrough()) }).passthrough();
var se3 = m3.extend({ protocolVersion: be2.string(), capabilities: ne3, serverInfo: Z3, instructions: be2.optional(be2.string()) });
var ie3 = h3.extend({ method: be2.literal("notifications/initialized") });
var T = a.extend({ method: be2.literal("ping") });
var ae3 = be2.object({ progress: be2.number(), total: be2.optional(be2.number()), message: be2.optional(be2.string()) }).passthrough();
var q3 = h3.extend({ method: be2.literal("notifications/progress"), params: S3.merge(ae3).extend({ progressToken: H3 }) });
var C3 = a.extend({ params: u3.extend({ cursor: be2.optional(w3) }).optional() });
var N3 = m3.extend({ nextCursor: be2.optional(w3) });
var $3 = be2.object({ uri: be2.string(), mimeType: be2.optional(be2.string()), _meta: be2.optional(be2.object({}).passthrough()) }).passthrough();
var V3 = $3.extend({ text: be2.string() });
var _3 = be2.string().refine((p19) => {
  try {
    return atob(p19), true;
  } catch {
    return false;
  }
}, { message: "Invalid Base64 string" });
var G3 = $3.extend({ blob: _3 });
var K3 = x3.extend({ uri: be2.string(), description: be2.optional(be2.string()), mimeType: be2.optional(be2.string()), _meta: be2.optional(be2.object({}).passthrough()) });
var pe3 = x3.extend({ uriTemplate: be2.string(), description: be2.optional(be2.string()), mimeType: be2.optional(be2.string()), _meta: be2.optional(be2.object({}).passthrough()) });
var ce3 = C3.extend({ method: be2.literal("resources/list") });
var le3 = N3.extend({ resources: be2.array(K3) });
var ue3 = C3.extend({ method: be2.literal("resources/templates/list") });
var me3 = N3.extend({ resourceTemplates: be2.array(pe3) });
var he3 = a.extend({ method: be2.literal("resources/read"), params: u3.extend({ uri: be2.string() }) });
var de3 = m3.extend({ contents: be2.array(be2.union([V3, G3])) });
var fe3 = h3.extend({ method: be2.literal("notifications/resources/list_changed") });
var ge = a.extend({ method: be2.literal("resources/subscribe"), params: u3.extend({ uri: be2.string() }) });
var Re3 = a.extend({ method: be2.literal("resources/unsubscribe"), params: u3.extend({ uri: be2.string() }) });
var Se3 = h3.extend({ method: be2.literal("notifications/resources/updated"), params: S3.extend({ uri: be2.string() }) });
var xe3 = be2.object({ name: be2.string(), description: be2.optional(be2.string()), required: be2.optional(be2.boolean()) }).passthrough();
var ye3 = x3.extend({ description: be2.optional(be2.string()), arguments: be2.optional(be2.array(xe3)), _meta: be2.optional(be2.object({}).passthrough()) });
var be3 = C3.extend({ method: be2.literal("prompts/list") });
var Ie3 = N3.extend({ prompts: be2.array(ye3) });
var Te3 = a.extend({ method: be2.literal("prompts/get"), params: u3.extend({ name: be2.string(), arguments: be2.optional(be2.record(be2.string())) }) });
var v = be2.object({ type: be2.literal("text"), text: be2.string(), _meta: be2.optional(be2.object({}).passthrough()) }).passthrough();
var j3 = be2.object({ type: be2.literal("image"), data: _3, mimeType: be2.string(), _meta: be2.optional(be2.object({}).passthrough()) }).passthrough();
var O3 = be2.object({ type: be2.literal("audio"), data: _3, mimeType: be2.string(), _meta: be2.optional(be2.object({}).passthrough()) }).passthrough();
var qe3 = be2.object({ type: be2.literal("resource"), resource: be2.union([V3, G3]), _meta: be2.optional(be2.object({}).passthrough()) }).passthrough();
var Ce3 = K3.extend({ type: be2.literal("resource_link") });
var W3 = be2.union([v, j3, O3, Ce3, qe3]);
var Ne3 = be2.object({ role: be2.enum(["user", "assistant"]), content: W3 }).passthrough();
var Pe3 = m3.extend({ description: be2.optional(be2.string()), messages: be2.array(Ne3) });
var _e3 = h3.extend({ method: be2.literal("notifications/prompts/list_changed") });
var ve3 = be2.object({ title: be2.optional(be2.string()), readOnlyHint: be2.optional(be2.boolean()), destructiveHint: be2.optional(be2.boolean()), idempotentHint: be2.optional(be2.boolean()), openWorldHint: be2.optional(be2.boolean()) }).passthrough();
var je3 = x3.extend({ description: be2.optional(be2.string()), inputSchema: be2.object({ type: be2.literal("object"), properties: be2.optional(be2.object({}).passthrough()), required: be2.optional(be2.array(be2.string())) }).passthrough(), outputSchema: be2.optional(be2.object({ type: be2.literal("object"), properties: be2.optional(be2.object({}).passthrough()), required: be2.optional(be2.array(be2.string())) }).passthrough()), annotations: be2.optional(ve3), _meta: be2.optional(be2.object({}).passthrough()) });
var Oe3 = C3.extend({ method: be2.literal("tools/list") });
var Le3 = N3.extend({ tools: be2.array(je3) });
var Q3 = m3.extend({ content: be2.array(W3).default([]), structuredContent: be2.object({}).passthrough().optional(), isError: be2.optional(be2.boolean()) });
var at3 = Q3.or(m3.extend({ toolResult: be2.unknown() }));
var Me3 = a.extend({ method: be2.literal("tools/call"), params: u3.extend({ name: be2.string(), arguments: be2.optional(be2.record(be2.unknown())) }) });
var Ee3 = h3.extend({ method: be2.literal("notifications/tools/list_changed") });
var X3 = be2.enum(["debug", "info", "notice", "warning", "error", "critical", "alert", "emergency"]);
var He3 = a.extend({ method: be2.literal("logging/setLevel"), params: u3.extend({ level: X3 }) });
var we = h3.extend({ method: be2.literal("notifications/message"), params: S3.extend({ level: X3, logger: be2.optional(be2.string()), data: be2.unknown() }) });
var Je3 = be2.object({ name: be2.string().optional() }).passthrough();
var ke3 = be2.object({ hints: be2.optional(be2.array(Je3)), costPriority: be2.optional(be2.number().min(0).max(1)), speedPriority: be2.optional(be2.number().min(0).max(1)), intelligencePriority: be2.optional(be2.number().min(0).max(1)) }).passthrough();
var Ae3 = be2.object({ role: be2.enum(["user", "assistant"]), content: be2.union([v, j3, O3]) }).passthrough();
var ze3 = a.extend({ method: be2.literal("sampling/createMessage"), params: u3.extend({ messages: be2.array(Ae3), systemPrompt: be2.optional(be2.string()), includeContext: be2.optional(be2.enum(["none", "thisServer", "allServers"])), temperature: be2.optional(be2.number()), maxTokens: be2.number().int(), stopSequences: be2.optional(be2.array(be2.string())), metadata: be2.optional(be2.object({}).passthrough()), modelPreferences: be2.optional(ke3) }) });
var Ue3 = m3.extend({ model: be2.string(), stopReason: be2.optional(be2.enum(["endTurn", "stopSequence", "maxTokens"]).or(be2.string())), role: be2.enum(["user", "assistant"]), content: be2.discriminatedUnion("type", [v, j3, O3]) });
var De3 = be2.object({ type: be2.literal("boolean"), title: be2.optional(be2.string()), description: be2.optional(be2.string()), default: be2.optional(be2.boolean()) }).passthrough();
var Be3 = be2.object({ type: be2.literal("string"), title: be2.optional(be2.string()), description: be2.optional(be2.string()), minLength: be2.optional(be2.number()), maxLength: be2.optional(be2.number()), format: be2.optional(be2.enum(["email", "uri", "date", "date-time"])) }).passthrough();
var Fe3 = be2.object({ type: be2.enum(["number", "integer"]), title: be2.optional(be2.string()), description: be2.optional(be2.string()), minimum: be2.optional(be2.number()), maximum: be2.optional(be2.number()) }).passthrough();
var Ze3 = be2.object({ type: be2.literal("string"), title: be2.optional(be2.string()), description: be2.optional(be2.string()), enum: be2.array(be2.string()), enumNames: be2.optional(be2.array(be2.string())) }).passthrough();
var $e3 = be2.union([De3, Be3, Fe3, Ze3]);
var Ve3 = a.extend({ method: be2.literal("elicitation/create"), params: u3.extend({ message: be2.string(), requestedSchema: be2.object({ type: be2.literal("object"), properties: be2.record(be2.string(), $e3), required: be2.optional(be2.array(be2.string())) }).passthrough() }) });
var Ge3 = m3.extend({ action: be2.enum(["accept", "decline", "cancel"]), content: be2.optional(be2.record(be2.string(), be2.unknown())) });
var Ke3 = be2.object({ type: be2.literal("ref/resource"), uri: be2.string() }).passthrough();
var We3 = be2.object({ type: be2.literal("ref/prompt"), name: be2.string() }).passthrough();
var Qe3 = a.extend({ method: be2.literal("completion/complete"), params: u3.extend({ ref: be2.union([We3, Ke3]), argument: be2.object({ name: be2.string(), value: be2.string() }).passthrough(), context: be2.optional(be2.object({ arguments: be2.optional(be2.record(be2.string(), be2.string())) })) }) });
var Xe3 = m3.extend({ completion: be2.object({ values: be2.array(be2.string()).max(100), total: be2.optional(be2.number().int()), hasMore: be2.optional(be2.boolean()) }).passthrough() });
var Ye3 = be2.object({ uri: be2.string().startsWith("file://"), name: be2.optional(be2.string()), _meta: be2.optional(be2.object({}).passthrough()) }).passthrough();
var et3 = a.extend({ method: be2.literal("roots/list") });
var tt3 = m3.extend({ roots: be2.array(Ye3) });
var ot3 = h3.extend({ method: be2.literal("notifications/roots/list_changed") });
var pt3 = be2.union([T, re3, Qe3, He3, Te3, be3, ce3, ue3, he3, ge, Re3, Me3, Oe3]);
var ct3 = be2.union([I3, q3, ie3, ot3]);
var lt3 = be2.union([F3, Ue3, Ge3, tt3]);
var ut3 = be2.union([T, ze3, Ve3, et3]);
var mt3 = be2.union([I3, q3, we, Se3, fe3, Ee3, _e3]);
var ht3 = be2.union([F3, se3, Xe3, Pe3, Ie3, le3, me3, de3, Q3, Le3]);

// https://raw.githubusercontent.com/jeff-hykin/openai-agents-js/refs/heads/main/packages/agents-core/src/utils/safeExecute.ts
async function safeExecute(fn) {
  try {
    return [null, await fn()];
  } catch (error) {
    return [error, null];
  }
}

// https://esm.sh/openai@5.12.0/denonext/internal/errors.mjs
function c3(t9) {
  return typeof t9 == "object" && t9 !== null && ("name" in t9 && t9.name === "AbortError" || "message" in t9 && String(t9.message).includes("FetchRequestCanceledException"));
}
var o = (t9) => {
  if (t9 instanceof Error) return t9;
  if (typeof t9 == "object" && t9 !== null) {
    try {
      if (Object.prototype.toString.call(t9) === "[object Error]") {
        let n17 = new Error(t9.message, t9.cause ? { cause: t9.cause } : {});
        return t9.stack && (n17.stack = t9.stack), t9.cause && !n17.cause && (n17.cause = t9.cause), t9.name && (n17.name = t9.name), n17;
      }
    } catch {
    }
    try {
      return new Error(JSON.stringify(t9));
    } catch {
    }
  }
  return new Error(t9);
};

// https://esm.sh/openai@5.12.0/denonext/core/error.mjs
var d3 = class extends Error {
};
var p3 = class t extends d3 {
  constructor(e7, c18, s9, n17) {
    super(`${t.makeMessage(e7, c18, s9)}`), this.status = e7, this.headers = n17, this.requestID = n17?.get("x-request-id"), this.error = c18;
    let x16 = c18;
    this.code = x16?.code, this.param = x16?.param, this.type = x16?.type;
  }
  static makeMessage(e7, c18, s9) {
    let n17 = c18?.message ? typeof c18.message == "string" ? c18.message : JSON.stringify(c18.message) : c18 ? JSON.stringify(c18) : s9;
    return e7 && n17 ? `${e7} ${n17}` : e7 ? `${e7} status code (no body)` : n17 || "(no status code or body)";
  }
  static generate(e7, c18, s9, n17) {
    if (!e7 || !n17) return new o2({ message: s9, cause: o(c18) });
    let x16 = c18?.error;
    return e7 === 400 ? new f(e7, x16, s9, n17) : e7 === 401 ? new i(e7, x16, s9, n17) : e7 === 403 ? new u4(e7, x16, s9, n17) : e7 === 404 ? new l(e7, x16, s9, n17) : e7 === 409 ? new r31(e7, x16, s9, n17) : e7 === 422 ? new w4(e7, x16, s9, n17) : e7 === 429 ? new y4(e7, x16, s9, n17) : e7 >= 500 ? new q4(e7, x16, s9, n17) : new t(e7, x16, s9, n17);
  }
};
var $4 = class extends p3 {
  constructor({ message: e7 } = {}) {
    super(void 0, void 0, e7 || "Request was aborted.", void 0);
  }
};
var o2 = class extends p3 {
  constructor({ message: e7, cause: c18 }) {
    super(void 0, void 0, e7 || "Connection error.", void 0), c18 && (this.cause = c18);
  }
};
var g3 = class extends o2 {
  constructor({ message: e7 } = {}) {
    super({ message: e7 ?? "Request timed out." });
  }
};
var f = class extends p3 {
};
var i = class extends p3 {
};
var u4 = class extends p3 {
};
var l = class extends p3 {
};
var r31 = class extends p3 {
};
var w4 = class extends p3 {
};
var y4 = class extends p3 {
};
var q4 = class extends p3 {
};
var m4 = class extends d3 {
  constructor() {
    super("Could not parse response content as the length limit was reached");
  }
};
var J4 = class extends d3 {
  constructor() {
    super("Could not parse response content as the request was rejected by the content filter");
  }
};
var M3 = class extends Error {
  constructor(e7) {
    super(e7);
  }
};

// https://esm.sh/openai@5.12.0/denonext/lib/parser.mjs
function _4(n17, e7) {
  let t9 = { ...n17 };
  return Object.defineProperties(t9, { $brand: { value: "auto-parseable-response-format", enumerable: false }, $parseRaw: { value: e7, enumerable: false } }), t9;
}
function f2(n17) {
  return n17?.$brand === "auto-parseable-response-format";
}
function o3(n17) {
  return n17?.$brand === "auto-parseable-tool";
}
function w5(n17, e7) {
  return !e7 || !c4(e7) ? { ...n17, choices: n17.choices.map((t9) => ({ ...t9, message: { ...t9.message, parsed: null, ...t9.message.tool_calls ? { tool_calls: t9.message.tool_calls } : void 0 } })) } : i2(n17, e7);
}
function i2(n17, e7) {
  let t9 = n17.choices.map((r39) => {
    if (r39.finish_reason === "length") throw new m4();
    if (r39.finish_reason === "content_filter") throw new J4();
    return { ...r39, message: { ...r39.message, ...r39.message.tool_calls ? { tool_calls: r39.message.tool_calls?.map((a11) => m5(e7, a11)) ?? void 0 } : void 0, parsed: r39.message.content && !r39.message.refusal ? p4(e7, r39.message.content) : null } };
  });
  return { ...n17, choices: t9 };
}
function p4(n17, e7) {
  return n17.response_format?.type !== "json_schema" ? null : n17.response_format?.type === "json_schema" ? "$parseRaw" in n17.response_format ? n17.response_format.$parseRaw(e7) : JSON.parse(e7) : null;
}
function m5(n17, e7) {
  let t9 = n17.tools?.find((r39) => r39.function?.name === e7.function.name);
  return { ...e7, function: { ...e7.function, parsed_arguments: o3(t9) ? t9.$parseRaw(e7.function.arguments) : t9?.function.strict ? JSON.parse(e7.function.arguments) : null } };
}
function $5(n17, e7) {
  if (!n17) return false;
  let t9 = n17.tools?.find((r39) => r39.function?.name === e7.function.name);
  return o3(t9) || t9?.function.strict || false;
}
function c4(n17) {
  return f2(n17.response_format) ? true : n17.tools?.some((e7) => o3(e7) || e7.type === "function" && e7.function.strict === true) ?? false;
}
function R3(n17) {
  for (let e7 of n17 ?? []) {
    if (e7.type !== "function") throw new d3(`Currently only \`function\` tool types support auto-parsing; Received \`${e7.type}\``);
    if (e7.function.strict !== true) throw new d3(`The \`${e7.function.name}\` tool is not marked with \`strict: true\`. Only strict function tools can be auto-parsed`);
  }
}

// https://esm.sh/openai@5.12.0/helpers/zod
init_zod_3_25();

// https://esm.sh/openai@5.12.0/denonext/helpers/zod.mjs
init_zod_3_25();
init_zod_3_25();
init_zod_3_25();
var j4 = Symbol("Let zodToJsonSchema decide on which parser to use");
var A4 = { name: void 0, $refStrategy: "root", effectStrategy: "input", pipeStrategy: "all", dateStrategy: "format:date-time", mapStrategy: "entries", nullableStrategy: "from-target", removeAdditionalStrategy: "passthrough", definitionPath: "definitions", target: "jsonSchema7", strictUnions: false, errorMessages: false, markdownDescription: false, patternStrategy: "escape", applyRegexFlags: false, emailStrategy: "format:email", base64Strategy: "contentEncoding:base64", nameStrategy: "ref" };
var $6 = (e7) => typeof e7 == "string" ? { ...A4, basePath: ["#"], definitions: {}, name: e7 } : { ...A4, basePath: ["#"], definitions: {}, ...e7 };
var h4 = (e7) => "_def" in e7 ? e7._def : e7;
function M4(e7) {
  if (!e7) return true;
  for (let t9 in e7) return false;
  return true;
}
var N4 = (e7) => {
  let t9 = $6(e7), r39 = t9.name !== void 0 ? [...t9.basePath, t9.definitionPath, t9.name] : t9.basePath;
  return { ...t9, currentPath: r39, propertyPath: void 0, seenRefs: /* @__PURE__ */ new Set(), seen: new Map(Object.entries(t9.definitions).map(([n17, a11]) => [h4(a11), { def: h4(a11), path: [...t9.basePath, t9.definitionPath, n17], jsonSchema: void 0 }])) };
};
function D4(e7, t9, r39, n17) {
  n17?.errorMessages && r39 && (e7.errorMessage = { ...e7.errorMessage, [t9]: r39 });
}
function p5(e7, t9, r39, n17, a11) {
  e7[t9] = r39, D4(e7, t9, n17, a11);
}
function w6() {
  return {};
}
function R4(e7, t9) {
  let r39 = { type: "array" };
  return e7.type?._def?.typeName !== m2.ZodAny && (r39.items = i3(e7.type._def, { ...t9, currentPath: [...t9.currentPath, "items"] })), e7.minLength && p5(r39, "minItems", e7.minLength.value, e7.minLength.message, t9), e7.maxLength && p5(r39, "maxItems", e7.maxLength.value, e7.maxLength.message, t9), e7.exactLength && (p5(r39, "minItems", e7.exactLength.value, e7.exactLength.message, t9), p5(r39, "maxItems", e7.exactLength.value, e7.exactLength.message, t9)), r39;
}
function E3(e7, t9) {
  let r39 = { type: "integer", format: "int64" };
  if (!e7.checks) return r39;
  for (let n17 of e7.checks) switch (n17.kind) {
    case "min":
      t9.target === "jsonSchema7" ? n17.inclusive ? p5(r39, "minimum", n17.value, n17.message, t9) : p5(r39, "exclusiveMinimum", n17.value, n17.message, t9) : (n17.inclusive || (r39.exclusiveMinimum = true), p5(r39, "minimum", n17.value, n17.message, t9));
      break;
    case "max":
      t9.target === "jsonSchema7" ? n17.inclusive ? p5(r39, "maximum", n17.value, n17.message, t9) : p5(r39, "exclusiveMaximum", n17.value, n17.message, t9) : (n17.inclusive || (r39.exclusiveMaximum = true), p5(r39, "maximum", n17.value, n17.message, t9));
      break;
    case "multipleOf":
      p5(r39, "multipleOf", n17.value, n17.message, t9);
      break;
  }
  return r39;
}
function z3() {
  return { type: "boolean" };
}
function L3(e7, t9) {
  return i3(e7.type._def, t9);
}
var I4 = (e7, t9) => i3(e7.innerType._def, t9);
function k3(e7, t9, r39) {
  let n17 = r39 ?? t9.dateStrategy;
  if (Array.isArray(n17)) return { anyOf: n17.map((a11, o18) => k3(e7, t9, a11)) };
  switch (n17) {
    case "string":
    case "format:date-time":
      return { type: "string", format: "date-time" };
    case "format:date":
      return { type: "string", format: "date" };
    case "integer":
      return le4(e7, t9);
  }
}
var le4 = (e7, t9) => {
  let r39 = { type: "integer", format: "unix-time" };
  if (t9.target === "openApi3") return r39;
  for (let n17 of e7.checks) switch (n17.kind) {
    case "min":
      p5(r39, "minimum", n17.value, n17.message, t9);
      break;
    case "max":
      p5(r39, "maximum", n17.value, n17.message, t9);
      break;
  }
  return r39;
};
function F4(e7, t9) {
  return { ...i3(e7.innerType._def, t9), default: e7.defaultValue() };
}
function U4(e7, t9, r39) {
  return t9.effectStrategy === "input" ? i3(e7.schema._def, t9, r39) : {};
}
function J5(e7) {
  return { type: "string", enum: [...e7.values] };
}
var fe4 = (e7) => "type" in e7 && e7.type === "string" ? false : "allOf" in e7;
function C4(e7, t9) {
  let r39 = [i3(e7.left._def, { ...t9, currentPath: [...t9.currentPath, "allOf", "0"] }), i3(e7.right._def, { ...t9, currentPath: [...t9.currentPath, "allOf", "1"] })].filter((o18) => !!o18), n17 = t9.target === "jsonSchema2019-09" ? { unevaluatedProperties: false } : void 0, a11 = [];
  return r39.forEach((o18) => {
    if (fe4(o18)) a11.push(...o18.allOf), o18.unevaluatedProperties === void 0 && (n17 = void 0);
    else {
      let s9 = o18;
      if ("additionalProperties" in o18 && o18.additionalProperties === false) {
        let { additionalProperties: c18, ...d19 } = o18;
        s9 = d19;
      } else n17 = void 0;
      a11.push(s9);
    }
  }), a11.length ? { allOf: a11, ...n17 } : void 0;
}
function B3(e7, t9) {
  let r39 = typeof e7.value;
  return r39 !== "bigint" && r39 !== "number" && r39 !== "boolean" && r39 !== "string" ? { type: Array.isArray(e7.value) ? "array" : "object" } : t9.target === "openApi3" ? { type: r39 === "bigint" ? "integer" : r39, enum: [e7.value] } : { type: r39 === "bigint" ? "integer" : r39, const: e7.value };
}
var _5;
var g5 = { cuid: /^[cC][^\s-]{8,}$/, cuid2: /^[0-9a-z]+$/, ulid: /^[0-9A-HJKMNP-TV-Z]{26}$/, email: /^(?!\.)(?!.*\.\.)([a-zA-Z0-9_'+\-\.]*)[a-zA-Z0-9_+-]@([a-zA-Z0-9][a-zA-Z0-9\-]*\.)+[a-zA-Z]{2,}$/, emoji: () => (_5 === void 0 && (_5 = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), _5), uuid: /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/, ipv4: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, ipv6: /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, base64: /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, nanoid: /^[a-zA-Z0-9_-]{21}$/ };
function b4(e7, t9) {
  let r39 = { type: "string" };
  function n17(a11) {
    return t9.patternStrategy === "escape" ? de4(a11) : a11;
  }
  if (e7.checks) for (let a11 of e7.checks) switch (a11.kind) {
    case "min":
      p5(r39, "minLength", typeof r39.minLength == "number" ? Math.max(r39.minLength, a11.value) : a11.value, a11.message, t9);
      break;
    case "max":
      p5(r39, "maxLength", typeof r39.maxLength == "number" ? Math.min(r39.maxLength, a11.value) : a11.value, a11.message, t9);
      break;
    case "email":
      switch (t9.emailStrategy) {
        case "format:email":
          l2(r39, "email", a11.message, t9);
          break;
        case "format:idn-email":
          l2(r39, "idn-email", a11.message, t9);
          break;
        case "pattern:zod":
          f3(r39, g5.email, a11.message, t9);
          break;
      }
      break;
    case "url":
      l2(r39, "uri", a11.message, t9);
      break;
    case "uuid":
      l2(r39, "uuid", a11.message, t9);
      break;
    case "regex":
      f3(r39, a11.regex, a11.message, t9);
      break;
    case "cuid":
      f3(r39, g5.cuid, a11.message, t9);
      break;
    case "cuid2":
      f3(r39, g5.cuid2, a11.message, t9);
      break;
    case "startsWith":
      f3(r39, RegExp(`^${n17(a11.value)}`), a11.message, t9);
      break;
    case "endsWith":
      f3(r39, RegExp(`${n17(a11.value)}$`), a11.message, t9);
      break;
    case "datetime":
      l2(r39, "date-time", a11.message, t9);
      break;
    case "date":
      l2(r39, "date", a11.message, t9);
      break;
    case "time":
      l2(r39, "time", a11.message, t9);
      break;
    case "duration":
      l2(r39, "duration", a11.message, t9);
      break;
    case "length":
      p5(r39, "minLength", typeof r39.minLength == "number" ? Math.max(r39.minLength, a11.value) : a11.value, a11.message, t9), p5(r39, "maxLength", typeof r39.maxLength == "number" ? Math.min(r39.maxLength, a11.value) : a11.value, a11.message, t9);
      break;
    case "includes": {
      f3(r39, RegExp(n17(a11.value)), a11.message, t9);
      break;
    }
    case "ip": {
      a11.version !== "v6" && l2(r39, "ipv4", a11.message, t9), a11.version !== "v4" && l2(r39, "ipv6", a11.message, t9);
      break;
    }
    case "emoji":
      f3(r39, g5.emoji, a11.message, t9);
      break;
    case "ulid": {
      f3(r39, g5.ulid, a11.message, t9);
      break;
    }
    case "base64": {
      switch (t9.base64Strategy) {
        case "format:binary": {
          l2(r39, "binary", a11.message, t9);
          break;
        }
        case "contentEncoding:base64": {
          p5(r39, "contentEncoding", "base64", a11.message, t9);
          break;
        }
        case "pattern:zod": {
          f3(r39, g5.base64, a11.message, t9);
          break;
        }
      }
      break;
    }
    case "nanoid":
      f3(r39, g5.nanoid, a11.message, t9);
    case "toLowerCase":
    case "toUpperCase":
    case "trim":
      break;
    default:
  }
  return r39;
}
var de4 = (e7) => Array.from(e7).map((t9) => /[a-zA-Z0-9]/.test(t9) ? t9 : `\\${t9}`).join("");
var l2 = (e7, t9, r39, n17) => {
  e7.format || e7.anyOf?.some((a11) => a11.format) ? (e7.anyOf || (e7.anyOf = []), e7.format && (e7.anyOf.push({ format: e7.format, ...e7.errorMessage && n17.errorMessages && { errorMessage: { format: e7.errorMessage.format } } }), delete e7.format, e7.errorMessage && (delete e7.errorMessage.format, Object.keys(e7.errorMessage).length === 0 && delete e7.errorMessage)), e7.anyOf.push({ format: t9, ...r39 && n17.errorMessages && { errorMessage: { format: r39 } } })) : p5(e7, "format", t9, r39, n17);
};
var f3 = (e7, t9, r39, n17) => {
  e7.pattern || e7.allOf?.some((a11) => a11.pattern) ? (e7.allOf || (e7.allOf = []), e7.pattern && (e7.allOf.push({ pattern: e7.pattern, ...e7.errorMessage && n17.errorMessages && { errorMessage: { pattern: e7.errorMessage.pattern } } }), delete e7.pattern, e7.errorMessage && (delete e7.errorMessage.pattern, Object.keys(e7.errorMessage).length === 0 && delete e7.errorMessage)), e7.allOf.push({ pattern: V4(t9, n17), ...r39 && n17.errorMessages && { errorMessage: { pattern: r39 } } })) : p5(e7, "pattern", V4(t9, n17), r39, n17);
};
var V4 = (e7, t9) => {
  let r39 = typeof e7 == "function" ? e7() : e7;
  if (!t9.applyRegexFlags || !r39.flags) return r39.source;
  let n17 = { i: r39.flags.includes("i"), m: r39.flags.includes("m"), s: r39.flags.includes("s") }, a11 = n17.i ? r39.source.toLowerCase() : r39.source, o18 = "", s9 = false, c18 = false, d19 = false;
  for (let m26 = 0; m26 < a11.length; m26++) {
    if (s9) {
      o18 += a11[m26], s9 = false;
      continue;
    }
    if (n17.i) {
      if (c18) {
        if (a11[m26].match(/[a-z]/)) {
          d19 ? (o18 += a11[m26], o18 += `${a11[m26 - 2]}-${a11[m26]}`.toUpperCase(), d19 = false) : a11[m26 + 1] === "-" && a11[m26 + 2]?.match(/[a-z]/) ? (o18 += a11[m26], d19 = true) : o18 += `${a11[m26]}${a11[m26].toUpperCase()}`;
          continue;
        }
      } else if (a11[m26].match(/[a-z]/)) {
        o18 += `[${a11[m26]}${a11[m26].toUpperCase()}]`;
        continue;
      }
    }
    if (n17.m) {
      if (a11[m26] === "^") {
        o18 += `(^|(?<=[\r
]))`;
        continue;
      } else if (a11[m26] === "$") {
        o18 += `($|(?=[\r
]))`;
        continue;
      }
    }
    if (n17.s && a11[m26] === ".") {
      o18 += c18 ? `${a11[m26]}\r
` : `[${a11[m26]}\r
]`;
      continue;
    }
    o18 += a11[m26], a11[m26] === "\\" ? s9 = true : c18 && a11[m26] === "]" ? c18 = false : !c18 && a11[m26] === "[" && (c18 = true);
  }
  try {
    let m26 = new RegExp(o18);
  } catch {
    return console.warn(`Could not convert regex pattern at ${t9.currentPath.join("/")} to a flag-independent form! Falling back to the flag-ignorant source`), r39.source;
  }
  return o18;
};
function P3(e7, t9) {
  if (t9.target === "openApi3" && e7.keyType?._def.typeName === m2.ZodEnum) return { type: "object", required: e7.keyType._def.values, properties: e7.keyType._def.values.reduce((n17, a11) => ({ ...n17, [a11]: i3(e7.valueType._def, { ...t9, currentPath: [...t9.currentPath, "properties", a11] }) ?? {} }), {}), additionalProperties: false };
  let r39 = { type: "object", additionalProperties: i3(e7.valueType._def, { ...t9, currentPath: [...t9.currentPath, "additionalProperties"] }) ?? {} };
  if (t9.target === "openApi3") return r39;
  if (e7.keyType?._def.typeName === m2.ZodString && e7.keyType._def.checks?.length) {
    let n17 = Object.entries(b4(e7.keyType._def, t9)).reduce((a11, [o18, s9]) => o18 === "type" ? a11 : { ...a11, [o18]: s9 }, {});
    return { ...r39, propertyNames: n17 };
  } else if (e7.keyType?._def.typeName === m2.ZodEnum) return { ...r39, propertyNames: { enum: e7.keyType._def.values } };
  return r39;
}
function q5(e7, t9) {
  if (t9.mapStrategy === "record") return P3(e7, t9);
  let r39 = i3(e7.keyType._def, { ...t9, currentPath: [...t9.currentPath, "items", "items", "0"] }) || {}, n17 = i3(e7.valueType._def, { ...t9, currentPath: [...t9.currentPath, "items", "items", "1"] }) || {};
  return { type: "array", maxItems: 125, items: { type: "array", items: [r39, n17], minItems: 2, maxItems: 2 } };
}
function K4(e7) {
  let t9 = e7.values, n17 = Object.keys(e7.values).filter((o18) => typeof t9[t9[o18]] != "number").map((o18) => t9[o18]), a11 = Array.from(new Set(n17.map((o18) => typeof o18)));
  return { type: a11.length === 1 ? a11[0] === "string" ? "string" : "number" : ["string", "number"], enum: n17 };
}
function W4() {
  return { not: {} };
}
function G4(e7) {
  return e7.target === "openApi3" ? { enum: ["null"], nullable: true } : { type: "null" };
}
var x4 = { ZodString: "string", ZodNumber: "number", ZodBigInt: "integer", ZodBoolean: "boolean", ZodNull: "null" };
function Q4(e7, t9) {
  if (t9.target === "openApi3") return H4(e7, t9);
  let r39 = e7.options instanceof Map ? Array.from(e7.options.values()) : e7.options;
  if (r39.every((n17) => n17._def.typeName in x4 && (!n17._def.checks || !n17._def.checks.length))) {
    let n17 = r39.reduce((a11, o18) => {
      let s9 = x4[o18._def.typeName];
      return s9 && !a11.includes(s9) ? [...a11, s9] : a11;
    }, []);
    return { type: n17.length > 1 ? n17 : n17[0] };
  } else if (r39.every((n17) => n17._def.typeName === "ZodLiteral" && !n17.description)) {
    let n17 = r39.reduce((a11, o18) => {
      let s9 = typeof o18._def.value;
      switch (s9) {
        case "string":
        case "number":
        case "boolean":
          return [...a11, s9];
        case "bigint":
          return [...a11, "integer"];
        case "object":
          if (o18._def.value === null) return [...a11, "null"];
        case "symbol":
        case "undefined":
        case "function":
        default:
          return a11;
      }
    }, []);
    if (n17.length === r39.length) {
      let a11 = n17.filter((o18, s9, c18) => c18.indexOf(o18) === s9);
      return { type: a11.length > 1 ? a11 : a11[0], enum: r39.reduce((o18, s9) => o18.includes(s9._def.value) ? o18 : [...o18, s9._def.value], []) };
    }
  } else if (r39.every((n17) => n17._def.typeName === "ZodEnum")) return { type: "string", enum: r39.reduce((n17, a11) => [...n17, ...a11._def.values.filter((o18) => !n17.includes(o18))], []) };
  return H4(e7, t9);
}
var H4 = (e7, t9) => {
  let r39 = (e7.options instanceof Map ? Array.from(e7.options.values()) : e7.options).map((n17, a11) => i3(n17._def, { ...t9, currentPath: [...t9.currentPath, "anyOf", `${a11}`] })).filter((n17) => !!n17 && (!t9.strictUnions || typeof n17 == "object" && Object.keys(n17).length > 0));
  return r39.length ? { anyOf: r39 } : void 0;
};
function X4(e7, t9) {
  if (["ZodString", "ZodNumber", "ZodBigInt", "ZodBoolean", "ZodNull"].includes(e7.innerType._def.typeName) && (!e7.innerType._def.checks || !e7.innerType._def.checks.length)) return t9.target === "openApi3" || t9.nullableStrategy === "property" ? { type: x4[e7.innerType._def.typeName], nullable: true } : { type: [x4[e7.innerType._def.typeName], "null"] };
  if (t9.target === "openApi3") {
    let n17 = i3(e7.innerType._def, { ...t9, currentPath: [...t9.currentPath] });
    return n17 && "$ref" in n17 ? { allOf: [n17], nullable: true } : n17 && { ...n17, nullable: true };
  }
  let r39 = i3(e7.innerType._def, { ...t9, currentPath: [...t9.currentPath, "anyOf", "0"] });
  return r39 && { anyOf: [r39, { type: "null" }] };
}
function Y3(e7, t9) {
  let r39 = { type: "number" };
  if (!e7.checks) return r39;
  for (let n17 of e7.checks) switch (n17.kind) {
    case "int":
      r39.type = "integer", D4(r39, "type", n17.message, t9);
      break;
    case "min":
      t9.target === "jsonSchema7" ? n17.inclusive ? p5(r39, "minimum", n17.value, n17.message, t9) : p5(r39, "exclusiveMinimum", n17.value, n17.message, t9) : (n17.inclusive || (r39.exclusiveMinimum = true), p5(r39, "minimum", n17.value, n17.message, t9));
      break;
    case "max":
      t9.target === "jsonSchema7" ? n17.inclusive ? p5(r39, "maximum", n17.value, n17.message, t9) : p5(r39, "exclusiveMaximum", n17.value, n17.message, t9) : (n17.inclusive || (r39.exclusiveMaximum = true), p5(r39, "maximum", n17.value, n17.message, t9));
      break;
    case "multipleOf":
      p5(r39, "multipleOf", n17.value, n17.message, t9);
      break;
  }
  return r39;
}
function ge2(e7, t9) {
  return t9.removeAdditionalStrategy === "strict" ? e7.catchall._def.typeName === "ZodNever" ? e7.unknownKeys !== "strict" : i3(e7.catchall._def, { ...t9, currentPath: [...t9.currentPath, "additionalProperties"] }) ?? true : e7.catchall._def.typeName === "ZodNever" ? e7.unknownKeys === "passthrough" : i3(e7.catchall._def, { ...t9, currentPath: [...t9.currentPath, "additionalProperties"] }) ?? true;
}
function ee3(e7, t9) {
  let r39 = { type: "object", ...Object.entries(e7.shape()).reduce((n17, [a11, o18]) => {
    if (o18 === void 0 || o18._def === void 0) return n17;
    let s9 = [...t9.currentPath, "properties", a11], c18 = i3(o18._def, { ...t9, currentPath: s9, propertyPath: s9 });
    if (c18 === void 0) return n17;
    if (t9.openaiStrictMode && o18.isOptional() && !o18.isNullable() && typeof o18._def?.defaultValue > "u") throw new Error(`Zod field at \`${s9.join("/")}\` uses \`.optional()\` without \`.nullable()\` which is not supported by the API. See: https://platform.openai.com/docs/guides/structured-outputs?api-mode=responses#all-fields-must-be-required`);
    return { properties: { ...n17.properties, [a11]: c18 }, required: o18.isOptional() && !t9.openaiStrictMode ? n17.required : [...n17.required, a11] };
  }, { properties: {}, required: [] }), additionalProperties: ge2(e7, t9) };
  return r39.required.length || delete r39.required, r39;
}
var te4 = (e7, t9) => {
  if (t9.propertyPath && t9.currentPath.slice(0, t9.propertyPath.length).toString() === t9.propertyPath.toString()) return i3(e7.innerType._def, { ...t9, currentPath: t9.currentPath });
  let r39 = i3(e7.innerType._def, { ...t9, currentPath: [...t9.currentPath, "anyOf", "1"] });
  return r39 ? { anyOf: [{ not: {} }, r39] } : {};
};
var re4 = (e7, t9) => {
  if (t9.pipeStrategy === "input") return i3(e7.in._def, t9);
  if (t9.pipeStrategy === "output") return i3(e7.out._def, t9);
  let r39 = i3(e7.in._def, { ...t9, currentPath: [...t9.currentPath, "allOf", "0"] }), n17 = i3(e7.out._def, { ...t9, currentPath: [...t9.currentPath, "allOf", r39 ? "1" : "0"] });
  return { allOf: [r39, n17].filter((a11) => a11 !== void 0) };
};
function ne4(e7, t9) {
  return i3(e7.type._def, t9);
}
function ae4(e7, t9) {
  let n17 = { type: "array", uniqueItems: true, items: i3(e7.valueType._def, { ...t9, currentPath: [...t9.currentPath, "items"] }) };
  return e7.minSize && p5(n17, "minItems", e7.minSize.value, e7.minSize.message, t9), e7.maxSize && p5(n17, "maxItems", e7.maxSize.value, e7.maxSize.message, t9), n17;
}
function oe4(e7, t9) {
  return e7.rest ? { type: "array", minItems: e7.items.length, items: e7.items.map((r39, n17) => i3(r39._def, { ...t9, currentPath: [...t9.currentPath, "items", `${n17}`] })).reduce((r39, n17) => n17 === void 0 ? r39 : [...r39, n17], []), additionalItems: i3(e7.rest._def, { ...t9, currentPath: [...t9.currentPath, "additionalItems"] }) } : { type: "array", minItems: e7.items.length, maxItems: e7.items.length, items: e7.items.map((r39, n17) => i3(r39._def, { ...t9, currentPath: [...t9.currentPath, "items", `${n17}`] })).reduce((r39, n17) => n17 === void 0 ? r39 : [...r39, n17], []) };
}
function ie4() {
  return { not: {} };
}
function se4() {
  return {};
}
var ue4 = (e7, t9) => i3(e7.innerType._def, t9);
function i3(e7, t9, r39 = false) {
  let n17 = t9.seen.get(e7);
  if (t9.override) {
    let s9 = t9.override?.(e7, t9, n17, r39);
    if (s9 !== j4) return s9;
  }
  if (n17 && !r39) {
    let s9 = ye4(n17, t9);
    if (s9 !== void 0) return "$ref" in s9 && t9.seenRefs.add(s9.$ref), s9;
  }
  let a11 = { def: e7, path: t9.currentPath, jsonSchema: void 0 };
  t9.seen.set(e7, a11);
  let o18 = xe4(e7, e7.typeName, t9, r39);
  return o18 && be4(e7, t9, o18), a11.jsonSchema = o18, o18;
}
var ye4 = (e7, t9) => {
  switch (t9.$refStrategy) {
    case "root":
      return { $ref: e7.path.join("/") };
    case "extract-to-root":
      let r39 = e7.path.slice(t9.basePath.length + 1).join("_");
      return r39 !== t9.name && t9.nameStrategy === "duplicate-ref" && (t9.definitions[r39] = e7.def), { $ref: [...t9.basePath, t9.definitionPath, r39].join("/") };
    case "relative":
      return { $ref: he4(t9.currentPath, e7.path) };
    case "none":
    case "seen":
      return e7.path.length < t9.currentPath.length && e7.path.every((n17, a11) => t9.currentPath[a11] === n17) ? (console.warn(`Recursive reference detected at ${t9.currentPath.join("/")}! Defaulting to any`), {}) : t9.$refStrategy === "seen" ? {} : void 0;
  }
};
var he4 = (e7, t9) => {
  let r39 = 0;
  for (; r39 < e7.length && r39 < t9.length && e7[r39] === t9[r39]; r39++) ;
  return [(e7.length - r39).toString(), ...t9.slice(r39)].join("/");
};
var xe4 = (e7, t9, r39, n17) => {
  switch (t9) {
    case m2.ZodString:
      return b4(e7, r39);
    case m2.ZodNumber:
      return Y3(e7, r39);
    case m2.ZodObject:
      return ee3(e7, r39);
    case m2.ZodBigInt:
      return E3(e7, r39);
    case m2.ZodBoolean:
      return z3();
    case m2.ZodDate:
      return k3(e7, r39);
    case m2.ZodUndefined:
      return ie4();
    case m2.ZodNull:
      return G4(r39);
    case m2.ZodArray:
      return R4(e7, r39);
    case m2.ZodUnion:
    case m2.ZodDiscriminatedUnion:
      return Q4(e7, r39);
    case m2.ZodIntersection:
      return C4(e7, r39);
    case m2.ZodTuple:
      return oe4(e7, r39);
    case m2.ZodRecord:
      return P3(e7, r39);
    case m2.ZodLiteral:
      return B3(e7, r39);
    case m2.ZodEnum:
      return J5(e7);
    case m2.ZodNativeEnum:
      return K4(e7);
    case m2.ZodNullable:
      return X4(e7, r39);
    case m2.ZodOptional:
      return te4(e7, r39);
    case m2.ZodMap:
      return q5(e7, r39);
    case m2.ZodSet:
      return ae4(e7, r39);
    case m2.ZodLazy:
      return i3(e7.getter()._def, r39);
    case m2.ZodPromise:
      return ne4(e7, r39);
    case m2.ZodNaN:
    case m2.ZodNever:
      return W4();
    case m2.ZodEffects:
      return U4(e7, r39, n17);
    case m2.ZodAny:
      return w6();
    case m2.ZodUnknown:
      return se4();
    case m2.ZodDefault:
      return F4(e7, r39);
    case m2.ZodBranded:
      return L3(e7, r39);
    case m2.ZodReadonly:
      return ue4(e7, r39);
    case m2.ZodCatch:
      return I4(e7, r39);
    case m2.ZodPipeline:
      return re4(e7, r39);
    case m2.ZodFunction:
    case m2.ZodVoid:
    case m2.ZodSymbol:
      return;
    default:
      return /* @__PURE__ */ ((a11) => {
      })(t9);
  }
};
var be4 = (e7, t9, r39) => (e7.description && (r39.description = e7.description, t9.markdownDescription && (r39.markdownDescription = e7.description)), r39);
var Z4 = (e7, t9) => {
  let r39 = N4(t9), n17 = typeof t9 == "string" ? t9 : t9?.nameStrategy === "title" ? void 0 : t9?.name, a11 = i3(e7._def, n17 === void 0 ? r39 : { ...r39, currentPath: [...r39.basePath, r39.definitionPath, n17] }, false) ?? {}, o18 = typeof t9 == "object" && t9.name !== void 0 && t9.nameStrategy === "title" ? t9.name : void 0;
  o18 !== void 0 && (a11.title = o18);
  let s9 = (() => {
    if (M4(r39.definitions)) return;
    let d19 = {}, m26 = /* @__PURE__ */ new Set();
    for (let O10 = 0; O10 < 500; O10++) {
      let T9 = Object.entries(r39.definitions).filter(([y15]) => !m26.has(y15));
      if (T9.length === 0) break;
      for (let [y15, me6] of T9) d19[y15] = i3(h4(me6), { ...r39, currentPath: [...r39.basePath, r39.definitionPath, y15] }, true) ?? {}, m26.add(y15);
    }
    return d19;
  })(), c18 = n17 === void 0 ? s9 ? { ...a11, [r39.definitionPath]: s9 } : a11 : r39.nameStrategy === "duplicate-ref" ? { ...a11, ...s9 || r39.seenRefs.size ? { [r39.definitionPath]: { ...s9, ...r39.seenRefs.size ? { [n17]: a11 } : void 0 } } : void 0 } : { $ref: [...r39.$refStrategy === "relative" ? [] : r39.basePath, r39.definitionPath, n17].join("/"), [r39.definitionPath]: { ...s9, [n17]: a11 } };
  return r39.target === "jsonSchema7" ? c18.$schema = "http://json-schema.org/draft-07/schema#" : r39.target === "jsonSchema2019-09" && (c18.$schema = "https://json-schema.org/draft/2019-09/schema#"), c18;
};
function pe4(e7, { parser: t9, callback: r39 }) {
  let n17 = { ...e7 };
  return Object.defineProperties(n17, { $brand: { value: "auto-parseable-tool", enumerable: false }, $parseRaw: { value: t9, enumerable: false }, $callback: { value: r39, enumerable: false } }), n17;
}
function v2(e7, t9) {
  return Z4(e7, { openaiStrictMode: true, name: t9.name, nameStrategy: "duplicate-ref", $refStrategy: "extract-to-root", nullableStrategy: "property" });
}
function pn(e7, t9, r39) {
  return _4({ type: "json_schema", ...r39, name: t9, strict: true, schema: v2(e7, { name: t9 }) }, (n17) => e7.parse(JSON.parse(n17)));
}
function cn(e7) {
  return pe4({ type: "function", name: e7.name, parameters: v2(e7.parameters, { name: e7.name }), strict: true, ...e7.description ? { description: e7.description } : void 0 }, { callback: e7.function, parser: (t9) => e7.parameters.parse(JSON.parse(t9)) });
}

// https://raw.githubusercontent.com/jeff-hykin/openai-agents-js/refs/heads/main/packages/agents-core/src/errors.ts
var AgentsError = class extends Error {
  state;
  constructor(message, state) {
    super(message);
    this.state = state;
  }
};
var SystemError = class extends AgentsError {
};
var MaxTurnsExceededError = class extends AgentsError {
};
var ModelBehaviorError = class extends AgentsError {
};
var UserError = class extends AgentsError {
};
var GuardrailExecutionError = class extends AgentsError {
  error;
  constructor(message, error, state) {
    super(message, state);
    this.error = error;
  }
};
var ToolCallError = class extends AgentsError {
  error;
  constructor(message, error, state) {
    super(message, state);
    this.error = error;
  }
};
var InputGuardrailTripwireTriggered = class extends AgentsError {
  result;
  constructor(message, result, state) {
    super(message, state);
    this.result = result;
  }
};
var OutputGuardrailTripwireTriggered = class extends AgentsError {
  result;
  constructor(message, result, state) {
    super(message, state);
    this.result = result;
  }
};

// https://raw.githubusercontent.com/jeff-hykin/openai-agents-js/refs/heads/main/packages/agents-core/src/utils/typeGuards.ts
function isZodObject(input) {
  return typeof input === "object" && input !== null && "_def" in input && typeof input._def === "object" && input._def !== null && "typeName" in input._def && input._def.typeName === "ZodObject";
}
function isAgentToolInput(input) {
  return typeof input === "object" && input !== null && "input" in input && typeof input.input === "string";
}

// https://raw.githubusercontent.com/jeff-hykin/openai-agents-js/refs/heads/main/packages/agents-core/src/utils/tools.ts
function toFunctionToolName(name) {
  name = name.replace(/\s/g, "_");
  name = name.replace(/[^a-zA-Z0-9]/g, "_");
  if (name.length === 0) {
    throw new Error("Tool name cannot be empty");
  }
  return name;
}
function getSchemaAndParserFromInputType(inputType, name) {
  const parser = (input) => JSON.parse(input);
  if (isZodObject(inputType)) {
    const formattedFunction = cn({
      name,
      parameters: inputType,
      function: () => {
      },
      // empty function here to satisfy the OpenAI helper
      description: ""
    });
    return {
      schema: formattedFunction.parameters,
      parser: formattedFunction.$parseRaw
    };
  } else if (typeof inputType === "object" && inputType !== null) {
    return {
      schema: inputType,
      parser
    };
  }
  throw new UserError("Input type is not a ZodObject or a valid JSON schema");
}
function convertAgentOutputTypeToSerializable(outputType) {
  if (outputType === "text") {
    return "text";
  }
  if (isZodObject(outputType)) {
    const output = pn(outputType, "output");
    return {
      type: output.type,
      name: output.name,
      strict: output.strict || false,
      schema: output.schema
    };
  }
  return outputType;
}

// https://esm.sh/ms@2.1.3?target=denonext
var ms_2_1_exports = {};
__export(ms_2_1_exports, {
  default: () => C5
});

// https://esm.sh/ms@2.1.3/denonext/ms.mjs
var y5 = Object.create;
var f4 = Object.defineProperty;
var l3 = Object.getOwnPropertyDescriptor;
var v3 = Object.getOwnPropertyNames;
var w7 = Object.getPrototypeOf;
var g6 = Object.prototype.hasOwnProperty;
var p6 = (e7, r39) => () => (r39 || e7((r39 = { exports: {} }).exports, r39), r39.exports);
var M5 = (e7, r39, s9, t9) => {
  if (r39 && typeof r39 == "object" || typeof r39 == "function") for (let a11 of v3(r39)) !g6.call(e7, a11) && a11 !== s9 && f4(e7, a11, { get: () => r39[a11], enumerable: !(t9 = l3(r39, a11)) || t9.enumerable });
  return e7;
};
var b5 = (e7, r39, s9) => (s9 = e7 != null ? y5(w7(e7)) : {}, M5(r39 || !e7 || !e7.__esModule ? f4(s9, "default", { value: e7, enumerable: true }) : s9, e7));
var m6 = p6((L9, h22) => {
  var c18 = 1e3, u18 = c18 * 60, i21 = u18 * 60, n17 = i21 * 24, k14 = n17 * 7, x16 = n17 * 365.25;
  h22.exports = function(e7, r39) {
    r39 = r39 || {};
    var s9 = typeof e7;
    if (s9 === "string" && e7.length > 0) return S13(e7);
    if (s9 === "number" && isFinite(e7)) return r39.long ? A13(e7) : j17(e7);
    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e7));
  };
  function S13(e7) {
    if (e7 = String(e7), !(e7.length > 100)) {
      var r39 = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e7);
      if (r39) {
        var s9 = parseFloat(r39[1]), t9 = (r39[2] || "ms").toLowerCase();
        switch (t9) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return s9 * x16;
          case "weeks":
          case "week":
          case "w":
            return s9 * k14;
          case "days":
          case "day":
          case "d":
            return s9 * n17;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return s9 * i21;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return s9 * u18;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return s9 * c18;
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
  function j17(e7) {
    var r39 = Math.abs(e7);
    return r39 >= n17 ? Math.round(e7 / n17) + "d" : r39 >= i21 ? Math.round(e7 / i21) + "h" : r39 >= u18 ? Math.round(e7 / u18) + "m" : r39 >= c18 ? Math.round(e7 / c18) + "s" : e7 + "ms";
  }
  function A13(e7) {
    var r39 = Math.abs(e7);
    return r39 >= n17 ? o18(e7, r39, n17, "day") : r39 >= i21 ? o18(e7, r39, i21, "hour") : r39 >= u18 ? o18(e7, r39, u18, "minute") : r39 >= c18 ? o18(e7, r39, c18, "second") : e7 + " ms";
  }
  function o18(e7, r39, s9, t9) {
    var a11 = r39 >= s9 * 1.5;
    return Math.round(e7 / s9) + " " + t9 + (a11 ? "s" : "");
  }
});
var d5 = b5(m6());
var C5 = d5.default ?? d5;

// https://esm.sh/supports-color@10.0.0?target=denonext
var supports_color_10_0_exports = {};
__export(supports_color_10_0_exports, {
  default: () => s
});

// https://esm.sh/supports-color@10.0.0/denonext/supports-color.mjs
var r32 = "navigator" in globalThis ? globalThis.navigator.userAgentData && navigator.userAgentData.brands.find(({ brand: a11 }) => a11 === "Chromium")?.version > 93 ? 3 : /\b(Chrome|Chromium)\//.test(globalThis.navigator.userAgent) ? 1 : 0 : 0;
var t2 = r32 !== 0 && { level: r32, hasBasic: true, has256: r32 >= 2, has16m: r32 >= 3 };
var o4 = { stdout: t2, stderr: t2 };
var s = o4;

// https://esm.sh/debug@4.4.1/denonext/debug.mjs
import __Process$ from "node:process";
import * as __0$ from "node:tty";
import * as __1$ from "node:util";
var require2 = (n17) => {
  const e7 = (m26) => typeof m26.default < "u" ? m26.default : m26, c18 = (m26) => Object.assign({ __esModule: true }, m26);
  switch (n17) {
    case "node:tty":
      return e7(__0$);
    case "node:util":
      return e7(__1$);
    case "supports-color":
      return c18(supports_color_10_0_exports);
    case "ms":
      return e7(ms_2_1_exports);
    default:
      console.error('module "' + n17 + '" not found');
      return null;
  }
};
var J6 = Object.create;
var k4 = Object.defineProperty;
var P4 = Object.getOwnPropertyDescriptor;
var T2 = Object.getOwnPropertyNames;
var W5 = Object.getPrototypeOf;
var Z5 = Object.prototype.hasOwnProperty;
var h5 = ((e7) => typeof require2 < "u" ? require2 : typeof Proxy < "u" ? new Proxy(e7, { get: (o18, t9) => (typeof require2 < "u" ? require2 : o18)[t9] }) : e7)(function(e7) {
  if (typeof require2 < "u") return require2.apply(this, arguments);
  throw Error('Dynamic require of "' + e7 + '" is not supported');
});
var b6 = (e7, o18) => () => (o18 || e7((o18 = { exports: {} }).exports, o18), o18.exports);
var M6 = (e7, o18, t9, s9) => {
  if (o18 && typeof o18 == "object" || typeof o18 == "function") for (let u18 of T2(o18)) !Z5.call(e7, u18) && u18 !== t9 && k4(e7, u18, { get: () => o18[u18], enumerable: !(s9 = P4(o18, u18)) || s9.enumerable });
  return e7;
};
var H5 = (e7, o18, t9) => (t9 = e7 != null ? J6(W5(e7)) : {}, M6(o18 || !e7 || !e7.__esModule ? k4(t9, "default", { value: e7, enumerable: true }) : t9, e7));
var A5 = b6((ae8, D12) => {
  function K14(e7) {
    t9.debug = t9, t9.default = t9, t9.coerce = G13, t9.disable = _14, t9.enable = u18, t9.enabled = z11, t9.humanize = h5("ms"), t9.destroy = S13, Object.keys(e7).forEach((n17) => {
      t9[n17] = e7[n17];
    }), t9.names = [], t9.skips = [], t9.formatters = {};
    function o18(n17) {
      let r39 = 0;
      for (let i21 = 0; i21 < n17.length; i21++) r39 = (r39 << 5) - r39 + n17.charCodeAt(i21), r39 |= 0;
      return t9.colors[Math.abs(r39) % t9.colors.length];
    }
    t9.selectColor = o18;
    function t9(n17) {
      let r39, i21 = null, l16, F13;
      function C10(...f14) {
        if (!C10.enabled) return;
        let p19 = C10, g16 = Number(/* @__PURE__ */ new Date()), L9 = g16 - (r39 || g16);
        p19.diff = L9, p19.prev = r39, p19.curr = g16, r39 = g16, f14[0] = t9.coerce(f14[0]), typeof f14[0] != "string" && f14.unshift("%O");
        let m26 = 0;
        f14[0] = f14[0].replace(/%([a-zA-Z%])/g, (O10, N9) => {
          if (O10 === "%%") return "%";
          m26++;
          let j17 = t9.formatters[N9];
          if (typeof j17 == "function") {
            let $13 = f14[m26];
            O10 = j17.call(p19, $13), f14.splice(m26, 1), m26--;
          }
          return O10;
        }), t9.formatArgs.call(p19, f14), (p19.log || t9.log).apply(p19, f14);
      }
      return C10.namespace = n17, C10.useColors = t9.useColors(), C10.color = t9.selectColor(n17), C10.extend = s9, C10.destroy = t9.destroy, Object.defineProperty(C10, "enabled", { enumerable: true, configurable: false, get: () => i21 !== null ? i21 : (l16 !== t9.namespaces && (l16 = t9.namespaces, F13 = t9.enabled(n17)), F13), set: (f14) => {
        i21 = f14;
      } }), typeof t9.init == "function" && t9.init(C10), C10;
    }
    function s9(n17, r39) {
      let i21 = t9(this.namespace + (typeof r39 > "u" ? ":" : r39) + n17);
      return i21.log = this.log, i21;
    }
    function u18(n17) {
      t9.save(n17), t9.namespaces = n17, t9.names = [], t9.skips = [];
      let r39 = (typeof n17 == "string" ? n17 : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
      for (let i21 of r39) i21[0] === "-" ? t9.skips.push(i21.slice(1)) : t9.names.push(i21);
    }
    function d19(n17, r39) {
      let i21 = 0, l16 = 0, F13 = -1, C10 = 0;
      for (; i21 < n17.length; ) if (l16 < r39.length && (r39[l16] === n17[i21] || r39[l16] === "*")) r39[l16] === "*" ? (F13 = l16, C10 = i21, l16++) : (i21++, l16++);
      else if (F13 !== -1) l16 = F13 + 1, C10++, i21 = C10;
      else return false;
      for (; l16 < r39.length && r39[l16] === "*"; ) l16++;
      return l16 === r39.length;
    }
    function _14() {
      let n17 = [...t9.names, ...t9.skips.map((r39) => "-" + r39)].join(",");
      return t9.enable(""), n17;
    }
    function z11(n17) {
      for (let r39 of t9.skips) if (d19(n17, r39)) return false;
      for (let r39 of t9.names) if (d19(n17, r39)) return true;
      return false;
    }
    function G13(n17) {
      return n17 instanceof Error ? n17.stack || n17.message : n17;
    }
    function S13() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    return t9.enable(t9.load()), t9;
  }
  D12.exports = K14;
});
var E4 = b6((a11, y15) => {
  a11.formatArgs = R11;
  a11.save = V12;
  a11.load = X9;
  a11.useColors = Q11;
  a11.storage = Y9();
  a11.destroy = /* @__PURE__ */ (() => {
    let e7 = false;
    return () => {
      e7 || (e7 = true, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
    };
  })();
  a11.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];
  function Q11() {
    if (typeof globalThis < "u" && globalThis.process && (globalThis.process.type === "renderer" || globalThis.process.__nwjs)) return true;
    if (typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return false;
    let e7;
    return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof globalThis < "u" && globalThis.console && (globalThis.console.firebug || globalThis.console.exception && globalThis.console.table) || typeof navigator < "u" && navigator.userAgent && (e7 = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(e7[1], 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  function R11(e7) {
    if (e7[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e7[0] + (this.useColors ? "%c " : " ") + "+" + y15.exports.humanize(this.diff), !this.useColors) return;
    let o18 = "color: " + this.color;
    e7.splice(1, 0, o18, "color: inherit");
    let t9 = 0, s9 = 0;
    e7[0].replace(/%[a-zA-Z%]/g, (u18) => {
      u18 !== "%%" && (t9++, u18 === "%c" && (s9 = t9));
    }), e7.splice(s9, 0, o18);
  }
  a11.log = console.debug || console.log || (() => {
  });
  function V12(e7) {
    try {
      e7 ? a11.storage.setItem("debug", e7) : a11.storage.removeItem("debug");
    } catch {
    }
  }
  function X9() {
    let e7;
    try {
      e7 = a11.storage.getItem("debug") || a11.storage.getItem("DEBUG");
    } catch {
    }
    return !e7 && typeof __Process$ < "u" && "env" in __Process$ && (e7 = __Process$.env.DEBUG), e7;
  }
  function Y9() {
    try {
      return localStorage;
    } catch {
    }
  }
  y15.exports = A5()(a11);
  var { formatters: ee6 } = y15.exports;
  ee6.j = function(e7) {
    try {
      return JSON.stringify(e7);
    } catch (o18) {
      return "[UnexpectedJSONParseError]: " + o18.message;
    }
  };
});
var q6 = b6((c18, v9) => {
  var te8 = h5("node:tty"), w19 = h5("node:util");
  c18.init = le7;
  c18.log = se8;
  c18.formatArgs = ne6;
  c18.save = ie6;
  c18.load = ce5;
  c18.useColors = oe6;
  c18.destroy = w19.deprecate(() => {
  }, "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  c18.colors = [6, 2, 3, 4, 5, 1];
  try {
    let e7 = h5("supports-color");
    e7 && (e7.stderr || e7).level >= 2 && (c18.colors = [20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221]);
  } catch {
  }
  c18.inspectOpts = Object.keys(__Process$.env).filter((e7) => /^debug_/i.test(e7)).reduce((e7, o18) => {
    let t9 = o18.substring(6).toLowerCase().replace(/_([a-z])/g, (u18, d19) => d19.toUpperCase()), s9 = __Process$.env[o18];
    return /^(yes|on|true|enabled)$/i.test(s9) ? s9 = true : /^(no|off|false|disabled)$/i.test(s9) ? s9 = false : s9 === "null" ? s9 = null : s9 = Number(s9), e7[t9] = s9, e7;
  }, {});
  function oe6() {
    return "colors" in c18.inspectOpts ? !!c18.inspectOpts.colors : te8.isatty(__Process$.stderr.fd);
  }
  function ne6(e7) {
    let { namespace: o18, useColors: t9 } = this;
    if (t9) {
      let s9 = this.color, u18 = "\x1B[3" + (s9 < 8 ? s9 : "8;5;" + s9), d19 = `  ${u18};1m${o18} \x1B[0m`;
      e7[0] = d19 + e7[0].split(`
`).join(`
` + d19), e7.push(u18 + "m+" + v9.exports.humanize(this.diff) + "\x1B[0m");
    } else e7[0] = re7() + o18 + " " + e7[0];
  }
  function re7() {
    return c18.inspectOpts.hideDate ? "" : (/* @__PURE__ */ new Date()).toISOString() + " ";
  }
  function se8(...e7) {
    return __Process$.stderr.write(w19.formatWithOptions(c18.inspectOpts, ...e7) + `
`);
  }
  function ie6(e7) {
    e7 ? __Process$.env.DEBUG = e7 : delete __Process$.env.DEBUG;
  }
  function ce5() {
    return __Process$.env.DEBUG;
  }
  function le7(e7) {
    e7.inspectOpts = {};
    let o18 = Object.keys(c18.inspectOpts);
    for (let t9 = 0; t9 < o18.length; t9++) e7.inspectOpts[o18[t9]] = c18.inspectOpts[o18[t9]];
  }
  v9.exports = A5()(c18);
  var { formatters: B11 } = v9.exports;
  B11.o = function(e7) {
    return this.inspectOpts.colors = this.useColors, w19.inspect(e7, this.inspectOpts).split(`
`).map((o18) => o18.trim()).join(" ");
  };
  B11.O = function(e7) {
    return this.inspectOpts.colors = this.useColors, w19.inspect(e7, this.inspectOpts);
  };
});
var U5 = b6((fe7, I11) => {
  typeof __Process$ > "u" || __Process$.type === "renderer" || __Process$.browser === true || __Process$.__nwjs ? I11.exports = E4() : I11.exports = q6();
});
var x5 = H5(U5());
var { formatArgs: de5, save: pe5, load: Fe4, useColors: ge3, storage: me4, destroy: he5, colors: be5, log: ye5 } = x5;
var we2 = x5.default ?? x5;

// https://raw.githubusercontent.com/jeff-hykin/openai-agents-js/refs/heads/main/packages/agents-core/src/config.ts
function loadEnv2() {
  return loadEnv();
}
function isEnabled(flagName) {
  const env2 = loadEnv2();
  return typeof env2 !== "undefined" && (env2[flagName] === "true" || env2[flagName] === "1");
}
var tracing = {
  get disabled() {
    if (isBrowserEnvironment()) {
      return true;
    } else if (loadEnv2().NODE_ENV === "test") {
      return true;
    }
    return isEnabled("OPENAI_AGENTS_DISABLE_TRACING");
  }
};
var logging = {
  get dontLogModelData() {
    return isEnabled("OPENAI_AGENTS_DONT_LOG_MODEL_DATA");
  },
  get dontLogToolData() {
    return isEnabled("OPENAI_AGENTS_DONT_LOG_TOOL_DATA");
  }
};

// https://raw.githubusercontent.com/jeff-hykin/openai-agents-js/refs/heads/main/packages/agents-core/src/logger.ts
var dontLogModelData = logging.dontLogModelData;
var dontLogToolData = logging.dontLogToolData;
function getLogger(namespace = "openai-agents") {
  return {
    namespace,
    debug: we2(namespace),
    error: console.error,
    warn: console.warn,
    dontLogModelData,
    dontLogToolData
  };
}
var logger = getLogger("openai-agents:core");
var logger_default = logger;

// https://raw.githubusercontent.com/jeff-hykin/openai-agents-js/refs/heads/main/packages/agents-core/src/utils/smartString.ts
function toSmartString(value) {
  if (value === null || value === void 0) {
    return String(value);
  } else if (typeof value === "string") {
    return value;
  } else if (typeof value === "object") {
    try {
      return JSON.stringify(value);
    } catch (_e6) {
      return "[object with circular references]";
    }
  }
  return String(value);
}

// https://raw.githubusercontent.com/jeff-hykin/openai-agents-js/refs/heads/main/packages/agents-core/src/tool.ts
function defaultToolErrorFunction(context, error) {
  const details = error instanceof Error ? error.toString() : String(error);
  return `An error occurred while running the tool. Please try again. Error: ${details}`;
}
function tool(options) {
  const name = options.name ? toFunctionToolName(options.name) : toFunctionToolName(options.execute.name);
  const toolErrorFunction = typeof options.errorFunction === "undefined" ? defaultToolErrorFunction : options.errorFunction;
  if (!name) {
    throw new Error(
      "Tool name cannot be empty. Either name your function or provide a name in the options."
    );
  }
  const strictMode = options.strict ?? true;
  if (!strictMode && isZodObject(options.parameters)) {
    throw new UserError("Strict mode is required for Zod parameters");
  }
  const { parser, schema: parameters } = getSchemaAndParserFromInputType(
    options.parameters,
    name
  );
  async function _invoke(runContext, input) {
    const [error, parsed] = await safeExecute(() => parser(input));
    if (error !== null) {
      if (logger_default.dontLogToolData) {
        logger_default.debug(`Invalid JSON input for tool ${name}`);
      } else {
        logger_default.debug(`Invalid JSON input for tool ${name}: ${input}`);
      }
      throw new ModelBehaviorError("Invalid JSON input for tool");
    }
    if (logger_default.dontLogToolData) {
      logger_default.debug(`Invoking tool ${name}`);
    } else {
      logger_default.debug(`Invoking tool ${name} with input ${input}`);
    }
    const result = await options.execute(parsed, runContext);
    const stringResult = toSmartString(result);
    if (logger_default.dontLogToolData) {
      logger_default.debug(`Tool ${name} completed`);
    } else {
      logger_default.debug(`Tool ${name} returned: ${stringResult}`);
    }
    return result;
  }
  async function invoke(runContext, input) {
    return _invoke(runContext, input).catch((error) => {
      if (toolErrorFunction) {
        const currentSpan = getCurrentSpan();
        currentSpan?.setError({
          message: "Error running tool (non-fatal)",
          data: {
            tool_name: name,
            error: error.toString()
          }
        });
        return toolErrorFunction(runContext, error);
      }
      throw error;
    });
  }
  const needsApproval = typeof options.needsApproval === "function" ? options.needsApproval : async () => typeof options.needsApproval === "boolean" ? options.needsApproval : false;
  return {
    type: "function",
    name,
    description: options.description,
    parameters,
    strict: strictMode,
    invoke,
    needsApproval
  };
}

// https://raw.githubusercontent.com/jeff-hykin/openai-agents-js/refs/heads/main/packages/agents-core/src/mcp.ts
var MCPTool = be.object({
  name: be.string(),
  description: be.string().optional(),
  inputSchema: be.object({
    type: be.literal("object"),
    properties: be.record(be.string(), be.any()),
    required: be.array(be.string()),
    additionalProperties: be.boolean()
  })
});
async function getAllMcpFunctionTools(mcpServers, runContext, agent2, convertSchemasToStrict = false) {
  const allTools = [];
  const toolNames = /* @__PURE__ */ new Set();
  for (const server of mcpServers) {
    const serverTools = await getFunctionToolsFromServer(
      server,
      runContext,
      agent2,
      convertSchemasToStrict
    );
    const serverToolNames = new Set(serverTools.map((t9) => t9.name));
    const intersection = [...serverToolNames].filter((n17) => toolNames.has(n17));
    if (intersection.length > 0) {
      throw new UserError(
        `Duplicate tool names found across MCP servers: ${intersection.join(", ")}`
      );
    }
    for (const t9 of serverTools) {
      toolNames.add(t9.name);
      allTools.push(t9);
    }
  }
  return allTools;
}
var _cachedTools = {};
async function getFunctionToolsFromServer(server, runContext, agent2, convertSchemasToStrict) {
  if (server.cacheToolsList && _cachedTools[server.name]) {
    return _cachedTools[server.name].map(
      (t9) => mcpToFunctionTool(t9, server, convertSchemasToStrict)
    );
  }
  return withMCPListToolsSpan(
    async (span) => {
      const fetchedMcpTools = await server.listTools();
      const mcpTools = [];
      const context = {
        runContext,
        agent: agent2,
        serverName: server.name
      };
      for (const tool2 of fetchedMcpTools) {
        const filter = server.toolFilter;
        if (filter) {
          if (filter && typeof filter === "function") {
            const filtered = await filter(context, tool2);
            if (!filtered) {
              logger.debug(
                `MCP Tool (server: ${server.name}, tool: ${tool2.name}) is blocked by the callable filter.`
              );
              continue;
            }
          } else {
            const allowedToolNames = filter.allowedToolNames ?? [];
            const blockedToolNames = filter.blockedToolNames ?? [];
            if (allowedToolNames.length > 0 || blockedToolNames.length > 0) {
              const allowed = allowedToolNames.length > 0 ? allowedToolNames.includes(tool2.name) : true;
              const blocked = blockedToolNames.length > 0 ? blockedToolNames.includes(tool2.name) : false;
              if (!allowed || blocked) {
                if (blocked) {
                  logger.debug(
                    `MCP Tool (server: ${server.name}, tool: ${tool2.name}) is blocked by the static filter.`
                  );
                } else if (!allowed) {
                  logger.debug(
                    `MCP Tool (server: ${server.name}, tool: ${tool2.name}) is not allowed by the static filter.`
                  );
                }
                continue;
              }
            }
          }
        }
        mcpTools.push(tool2);
      }
      span.spanData.result = mcpTools.map((t9) => t9.name);
      const tools = mcpTools.map(
        (t9) => mcpToFunctionTool(t9, server, convertSchemasToStrict)
      );
      if (server.cacheToolsList) {
        _cachedTools[server.name] = mcpTools;
      }
      return tools;
    },
    { data: { server: server.name } }
  );
}
async function getAllMcpTools(mcpServers, runContext, agent2, convertSchemasToStrict = false) {
  return getAllMcpFunctionTools(
    mcpServers,
    runContext,
    agent2,
    convertSchemasToStrict
  );
}
function mcpToFunctionTool(mcpTool, server, convertSchemasToStrict) {
  async function invoke(input, _context) {
    let args = {};
    if (typeof input === "string" && input) {
      args = JSON.parse(input);
    } else if (typeof input === "object" && input != null) {
      args = input;
    }
    const currentSpan = getCurrentSpan();
    if (currentSpan) {
      currentSpan.spanData["mcp_data"] = { server: server.name };
    }
    const content = await server.callTool(mcpTool.name, args);
    return content.length === 1 ? content[0] : content;
  }
  const schema = {
    ...mcpTool.inputSchema,
    type: mcpTool.inputSchema?.type ?? "object",
    properties: mcpTool.inputSchema?.properties ?? {},
    required: mcpTool.inputSchema?.required ?? [],
    additionalProperties: mcpTool.inputSchema?.additionalProperties ?? false
  };
  if (convertSchemasToStrict || schema.additionalProperties === true) {
    try {
      const strictSchema = ensureStrictJsonSchema(schema);
      return tool({
        name: mcpTool.name,
        description: mcpTool.description || "",
        parameters: strictSchema,
        strict: true,
        execute: invoke
      });
    } catch (e7) {
      logger.warn(`Error converting MCP schema to strict mode: ${e7}`);
    }
  }
  const nonStrictSchema = {
    ...schema,
    additionalProperties: true
  };
  return tool({
    name: mcpTool.name,
    description: mcpTool.description || "",
    parameters: nonStrictSchema,
    strict: false,
    execute: invoke
  });
}
function ensureStrictJsonSchema(schema) {
  const out = {
    ...schema,
    additionalProperties: false
  };
  if (!out.required) out.required = [];
  return out;
}

// https://raw.githubusercontent.com/jeff-hykin/openai-agents-js/refs/heads/main/packages/agents-core/src/shims/shims-node.ts
import { clearTimeout as clearTimeout2 } from "node:timers";
function loadEnv() {
  if (typeof process2 === "undefined" || typeof process2.env === "undefined") {
    if (typeof import.meta === "object" && typeof import.meta.env === "object") {
      return import.meta.env;
    }
    return {};
  }
  return process2.env;
}
function isTracingLoopRunningByDefault() {
  return true;
}
function isBrowserEnvironment() {
  return false;
}
var NodeTimer = class {
  constructor() {
  }
  setTimeout(callback, ms) {
    return setTimeout(callback, ms);
  }
  clearTimeout(timeoutId) {
    clearTimeout(timeoutId);
  }
};
var timer = new NodeTimer();

// https://raw.githubusercontent.com/jeff-hykin/openai-agents-js/refs/heads/main/packages/agents-core/src/tracing/context.ts
var _contextAsyncLocalStorage;
function getContextAsyncLocalStorage() {
  _contextAsyncLocalStorage ??= new AsyncLocalStorage();
  return _contextAsyncLocalStorage;
}
function getCurrentTrace() {
  const currentTrace = getContextAsyncLocalStorage().getStore();
  if (currentTrace?.trace) {
    return currentTrace.trace;
  }
  return null;
}
function getCurrentSpan() {
  const currentSpan = getContextAsyncLocalStorage().getStore();
  if (currentSpan?.span) {
    return currentSpan.span;
  }
  return null;
}
function _wrapFunctionWithTraceLifecycle(fn) {
  return async () => {
    const trace = getCurrentTrace();
    if (!trace) {
      throw new Error("No trace found");
    }
    await trace.start();
    const result = await fn(trace);
    await trace.end();
    return result;
  };
}
async function withTrace(trace, fn, options = {}) {
  const newTrace = typeof trace === "string" ? getGlobalTraceProvider().createTrace({
    ...options,
    name: trace
  }) : trace;
  return getContextAsyncLocalStorage().run(
    { trace: newTrace },
    _wrapFunctionWithTraceLifecycle(fn)
  );
}
async function getOrCreateTrace(fn, options = {}) {
  const currentTrace = getCurrentTrace();
  if (currentTrace) {
    return await fn();
  }
  const newTrace = getGlobalTraceProvider().createTrace(options);
  return getContextAsyncLocalStorage().run(
    { trace: newTrace },
    _wrapFunctionWithTraceLifecycle(fn)
  );
}
function setCurrentSpan(span) {
  const context = getContextAsyncLocalStorage().getStore();
  if (!context) {
    throw new Error("No existing trace found");
  }
  if (context.span) {
    context.span.previousSpan = context.previousSpan;
    context.previousSpan = context.span;
  }
  context.span = span;
  getContextAsyncLocalStorage().enterWith(context);
}
function resetCurrentSpan() {
  const context = getContextAsyncLocalStorage().getStore();
  if (context) {
    context.span = context.previousSpan;
    context.previousSpan = context.previousSpan?.previousSpan;
    getContextAsyncLocalStorage().enterWith(context);
  }
}
function addErrorToCurrentSpan(spanError) {
  const currentSpan = getCurrentSpan();
  if (currentSpan) {
    currentSpan.setError(spanError);
  }
}
function cloneCurrentContext(context) {
  return {
    trace: context.trace?.clone(),
    span: context.span?.clone(),
    previousSpan: context.previousSpan?.clone()
  };
}
function withNewSpanContext(fn) {
  const currentContext = getContextAsyncLocalStorage().getStore();
  if (!currentContext) {
    throw new Error("No existing trace found");
  }
  const copyOfContext = cloneCurrentContext(currentContext);
  return getContextAsyncLocalStorage().run(copyOfContext, fn);
}

// https://raw.githubusercontent.com/jeff-hykin/openai-agents-js/refs/heads/main/packages/agents-core/src/tracing/processor.ts
var ConsoleSpanExporter = class {
  async export(items) {
    if (tracing.disabled) {
      logger_default.debug("Tracing is disabled. Skipping export");
      return;
    }
    for (const item of items) {
      if (item.type === "trace") {
        console.log(
          `[Exporter] Export trace traceId=${item.traceId} name=${item.name}`
        );
      } else {
        console.log(`[Exporter] Export span: ${JSON.stringify(item)}`);
      }
    }
  }
};
var BatchTraceProcessor = class {
  #maxQueueSize;
  #maxBatchSize;
  #scheduleDelay;
  #exportTriggerSize;
  #exporter;
  #buffer = [];
  #timer;
  #timeout = null;
  #exportInProgress = false;
  #timeoutAbortController = null;
  constructor(exporter, {
    maxQueueSize = 1e3,
    maxBatchSize = 100,
    scheduleDelay = 5e3,
    // 5 seconds
    exportTriggerRatio = 0.8
  } = {}) {
    this.#maxQueueSize = maxQueueSize;
    this.#maxBatchSize = maxBatchSize;
    this.#scheduleDelay = scheduleDelay;
    this.#exportTriggerSize = maxQueueSize * exportTriggerRatio;
    this.#exporter = exporter;
    this.#timer = timer;
    if (isTracingLoopRunningByDefault()) {
      this.start();
    } else {
      logger_default.debug(
        "Automatic trace export loop is not supported in this environment. You need to manually call `getGlobalTraceProvider().forceFlush()` to export traces."
      );
    }
  }
  start() {
    this.#timeoutAbortController = new AbortController();
    this.#runExportLoop();
  }
  async #safeAddItem(item) {
    if (this.#buffer.length + 1 > this.#maxQueueSize) {
      logger_default.error("Dropping trace because buffer is full");
      return;
    }
    this.#buffer.push(item);
    if (this.#buffer.length > this.#exportTriggerSize) {
      await this.#exportBatches();
    }
  }
  #runExportLoop() {
    this.#timeout = this.#timer.setTimeout(async () => {
      await this.#exportBatches();
      this.#runExportLoop();
    }, this.#scheduleDelay);
    if (typeof this.#timeout.unref === "function") {
      this.#timeout.unref();
    }
  }
  async #exportBatches(force = false) {
    if (this.#buffer.length === 0) {
      return;
    }
    logger_default.debug(
      `Exporting batches. Force: ${force}. Buffer size: ${this.#buffer.length}`
    );
    if (force || this.#buffer.length < this.#maxBatchSize) {
      const toExport = [...this.#buffer];
      this.#buffer = [];
      this.#exportInProgress = true;
      await this.#exporter.export(toExport);
      this.#exportInProgress = false;
    } else if (this.#buffer.length > 0) {
      const batch = this.#buffer.splice(0, this.#maxBatchSize);
      this.#exportInProgress = true;
      await this.#exporter.export(batch);
      this.#exportInProgress = false;
    }
  }
  async onTraceStart(trace) {
    await this.#safeAddItem(trace);
  }
  async onTraceEnd(_trace) {
  }
  async onSpanStart(_span) {
  }
  async onSpanEnd(span) {
    await this.#safeAddItem(span);
  }
  async shutdown(timeout) {
    if (timeout) {
      this.#timer.setTimeout(() => {
        this.#timeoutAbortController?.abort();
      }, timeout);
    }
    logger_default.debug("Shutting down gracefully");
    while (this.#buffer.length > 0) {
      logger_default.debug(
        `Waiting for buffer to empty. Items left: ${this.#buffer.length}`
      );
      if (!this.#exportInProgress) {
        await this.#exportBatches(true);
      }
      if (this.#timeoutAbortController?.signal.aborted) {
        logger_default.debug("Timeout reached, force flushing");
        await this.#exportBatches(true);
        break;
      }
      await new Promise((resolve) => this.#timer.setTimeout(resolve, 500));
    }
    logger_default.debug("Buffer empty. Exiting");
    if (this.#timer && this.#timeout) {
      this.#timer.clearTimeout(this.#timeout);
    }
  }
  async forceFlush() {
    if (this.#buffer.length > 0) {
      await this.#exportBatches(true);
    }
  }
};
var MultiTracingProcessor = class {
  #processors = [];
  start() {
    for (const processor of this.#processors) {
      if (processor.start) {
        processor.start();
      }
    }
  }
  addTraceProcessor(processor) {
    this.#processors.push(processor);
  }
  setProcessors(processors) {
    logger_default.debug("Shutting down old processors");
    for (const processor of this.#processors) {
      processor.shutdown();
    }
    this.#processors = processors;
  }
  async onTraceStart(trace) {
    for (const processor of this.#processors) {
      await processor.onTraceStart(trace);
    }
  }
  async onTraceEnd(trace) {
    for (const processor of this.#processors) {
      await processor.onTraceEnd(trace);
    }
  }
  async onSpanStart(span) {
    for (const processor of this.#processors) {
      await processor.onSpanStart(span);
    }
  }
  async onSpanEnd(span) {
    for (const processor of this.#processors) {
      await processor.onSpanEnd(span);
    }
  }
  async shutdown(timeout) {
    for (const processor of this.#processors) {
      await processor.shutdown(timeout);
    }
  }
  async forceFlush() {
    for (const processor of this.#processors) {
      await processor.forceFlush();
    }
  }
};
var _defaultExporter = null;
var _defaultProcessor = null;
function defaultExporter() {
  if (!_defaultExporter) {
    _defaultExporter = new ConsoleSpanExporter();
  }
  return _defaultExporter;
}
function defaultProcessor() {
  if (!_defaultProcessor) {
    _defaultProcessor = new BatchTraceProcessor(defaultExporter());
  }
  return _defaultProcessor;
}

// https://raw.githubusercontent.com/jeff-hykin/openai-agents-js/refs/heads/main/packages/agents-core/src/tracing/utils.ts
function timeIso() {
  return (/* @__PURE__ */ new Date()).toISOString();
}
function generateTraceId() {
  return `trace_${randomUUID().replace(/-/g, "")}`;
}
function generateSpanId() {
  return `span_${randomUUID().replace(/-/g, "").slice(0, 24)}`;
}
function removePrivateFields(obj) {
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => !key.startsWith("_"))
  );
}

// https://raw.githubusercontent.com/jeff-hykin/openai-agents-js/refs/heads/main/packages/agents-core/src/tracing/spans.ts
var Span = class _Span {
  type = "trace.span";
  #data;
  #traceId;
  #spanId;
  #parentId;
  #processor;
  #startedAt;
  #endedAt;
  #error;
  #previousSpan;
  constructor(options, processor) {
    this.#traceId = options.traceId;
    this.#spanId = options.spanId ?? generateSpanId();
    this.#data = options.data;
    this.#processor = processor;
    this.#parentId = options.parentId ?? null;
    this.#error = options.error ?? null;
    this.#startedAt = options.startedAt ?? null;
    this.#endedAt = options.endedAt ?? null;
  }
  get traceId() {
    return this.#traceId;
  }
  get spanData() {
    return this.#data;
  }
  get spanId() {
    return this.#spanId;
  }
  get parentId() {
    return this.#parentId;
  }
  get previousSpan() {
    return this.#previousSpan;
  }
  set previousSpan(span) {
    this.#previousSpan = span;
  }
  start() {
    if (this.#startedAt) {
      logger_default.warn("Span already started");
      return;
    }
    this.#startedAt = timeIso();
    this.#processor.onSpanStart(this);
  }
  end() {
    if (this.#endedAt) {
      logger_default.debug("Span already finished", this.spanData);
      return;
    }
    this.#endedAt = timeIso();
    this.#processor.onSpanEnd(this);
  }
  setError(error) {
    this.#error = error;
  }
  get error() {
    return this.#error;
  }
  get startedAt() {
    return this.#startedAt;
  }
  get endedAt() {
    return this.#endedAt;
  }
  clone() {
    const span = new _Span(
      {
        traceId: this.traceId,
        spanId: this.spanId,
        parentId: this.parentId ?? void 0,
        data: this.spanData,
        startedAt: this.#startedAt ?? void 0,
        endedAt: this.#endedAt ?? void 0,
        error: this.#error ?? void 0
      },
      this.#processor
    );
    span.previousSpan = this.previousSpan?.clone();
    return span;
  }
  toJSON() {
    return {
      object: this.type,
      id: this.spanId,
      trace_id: this.traceId,
      parent_id: this.parentId,
      started_at: this.startedAt,
      ended_at: this.endedAt,
      span_data: removePrivateFields(this.spanData),
      error: this.error
    };
  }
};
var NoopSpan = class extends Span {
  constructor(data, processor) {
    super({ traceId: "no-op", spanId: "no-op", data }, processor);
  }
  start() {
    return;
  }
  end() {
    return;
  }
  setError() {
    return;
  }
  toJSON() {
    return null;
  }
};

// https://raw.githubusercontent.com/jeff-hykin/openai-agents-js/refs/heads/main/packages/agents-core/src/tracing/traces.ts
var Trace = class _Trace {
  type = "trace";
  traceId;
  name;
  groupId = null;
  metadata;
  #processor;
  #started;
  constructor(options, processor) {
    this.traceId = options.traceId ?? generateTraceId();
    this.name = options.name ?? "Agent workflow";
    this.groupId = options.groupId ?? null;
    this.metadata = options.metadata ?? {};
    this.#processor = processor ?? defaultProcessor();
    this.#started = options.started ?? false;
  }
  async start() {
    if (this.#started) {
      return;
    }
    this.#started = true;
    await this.#processor.onTraceStart(this);
  }
  async end() {
    if (!this.#started) {
      return;
    }
    this.#started = false;
    await this.#processor.onTraceEnd(this);
  }
  clone() {
    return new _Trace({
      traceId: this.traceId,
      name: this.name,
      groupId: this.groupId ?? void 0,
      metadata: this.metadata,
      started: this.#started
    });
  }
  toJSON() {
    return {
      object: this.type,
      id: this.traceId,
      workflow_name: this.name,
      group_id: this.groupId,
      metadata: this.metadata
    };
  }
};
var NoopTrace = class extends Trace {
  constructor() {
    super({});
  }
  async start() {
    return;
  }
  async end() {
    return;
  }
  toJSON() {
    return null;
  }
};

// https://raw.githubusercontent.com/jeff-hykin/openai-agents-js/refs/heads/main/packages/agents-core/src/tracing/provider.ts
var TraceProvider = class {
  #multiProcessor;
  #disabled;
  constructor() {
    this.#multiProcessor = new MultiTracingProcessor();
    this.#disabled = tracing.disabled;
    this.#addCleanupListeners();
  }
  /**
   * Add a processor to the list of processors. Each processor will receive all traces/spans.
   *
   * @param processor - The processor to add.
   */
  registerProcessor(processor) {
    this.#multiProcessor.addTraceProcessor(processor);
  }
  /**
   * Set the list of processors. This will replace any existing processors.
   *
   * @param processors - The list of processors to set.
   */
  setProcessors(processors) {
    this.#multiProcessor.setProcessors(processors);
  }
  /**
   * Get the current trace.
   *
   * @returns The current trace.
   */
  getCurrentTrace() {
    return getCurrentTrace();
  }
  getCurrentSpan() {
    return getCurrentSpan();
  }
  setDisabled(disabled) {
    this.#disabled = disabled;
  }
  startExportLoop() {
    this.#multiProcessor.start();
  }
  createTrace(traceOptions) {
    if (this.#disabled) {
      logger_default.debug("Tracing is disabled, Not creating trace %o", traceOptions);
      return new NoopTrace();
    }
    const traceId = traceOptions.traceId ?? generateTraceId();
    const name = traceOptions.name ?? "Agent workflow";
    logger_default.debug("Creating trace %s with name %s", traceId, name);
    return new Trace({ ...traceOptions, name, traceId }, this.#multiProcessor);
  }
  createSpan(spanOptions, parent) {
    if (this.#disabled || spanOptions.disabled) {
      logger_default.debug("Tracing is disabled, Not creating span %o", spanOptions);
      return new NoopSpan(spanOptions.data, this.#multiProcessor);
    }
    let parentId;
    let traceId;
    if (!parent) {
      const currentTrace = getCurrentTrace();
      const currentSpan = getCurrentSpan();
      if (!currentTrace) {
        logger_default.error(
          "No active trace. Make sure to start a trace with `withTrace()` first. Returning NoopSpan."
        );
        return new NoopSpan(spanOptions.data, this.#multiProcessor);
      }
      if (currentSpan instanceof NoopSpan || currentTrace instanceof NoopTrace) {
        logger_default.debug(
          `Parent ${currentSpan} or ${currentTrace} is no-op, returning NoopSpan`
        );
        return new NoopSpan(spanOptions.data, this.#multiProcessor);
      }
      traceId = currentTrace.traceId;
      if (currentSpan) {
        logger_default.debug("Using parent span %s", currentSpan.spanId);
        parentId = currentSpan.spanId;
      } else {
        logger_default.debug(
          "No parent span, using current trace %s",
          currentTrace.traceId
        );
      }
    } else if (parent instanceof Trace) {
      if (parent instanceof NoopTrace) {
        logger_default.debug("Parent trace is no-op, returning NoopSpan");
        return new NoopSpan(spanOptions.data, this.#multiProcessor);
      }
      traceId = parent.traceId;
    } else if (parent instanceof Span) {
      if (parent instanceof NoopSpan) {
        logger_default.debug("Parent span is no-op, returning NoopSpan");
        return new NoopSpan(spanOptions.data, this.#multiProcessor);
      }
      parentId = parent.spanId;
      traceId = parent.traceId;
    }
    if (!traceId) {
      logger_default.error(
        "No traceId found. Make sure to start a trace with `withTrace()` first. Returning NoopSpan."
      );
      return new NoopSpan(spanOptions.data, this.#multiProcessor);
    }
    logger_default.debug(
      `Creating span ${JSON.stringify(spanOptions.data)} with id ${spanOptions.spanId ?? traceId}`
    );
    return new Span(
      {
        ...spanOptions,
        traceId,
        parentId
      },
      this.#multiProcessor
    );
  }
  async shutdown(timeout) {
    try {
      logger_default.debug("Shutting down tracing provider");
      await this.#multiProcessor.shutdown(timeout);
    } catch (error) {
      logger_default.error("Error shutting down tracing provider %o", error);
    }
  }
  /** Adds listeners to `process` to ensure `shutdown` occurs before exit. */
  #addCleanupListeners() {
    if (typeof process !== "undefined" && typeof process.on === "function") {
      const cleanup = async () => {
        const timeout = setTimeout(() => {
          console.warn("Cleanup timeout, forcing exit");
          process.exit(1);
        }, 5e3);
        try {
          await this.shutdown();
        } finally {
          clearTimeout(timeout);
        }
      };
      process.on("beforeExit", cleanup);
      process.on("SIGINT", async () => {
        await cleanup();
        if (!hasOtherListenersForSignals("SIGINT")) {
          process.exit(130);
        }
      });
      process.on("SIGTERM", async () => {
        await cleanup();
        if (!hasOtherListenersForSignals("SIGTERM")) {
          process.exit(0);
        }
      });
      process.on("unhandledRejection", async (reason, promise) => {
        logger_default.error("Unhandled rejection", reason, promise);
        await cleanup();
        if (!hasOtherListenersForEvents("unhandledRejection")) {
          process.exit(1);
        }
      });
    }
  }
  async forceFlush() {
    await this.#multiProcessor.forceFlush();
  }
};
function hasOtherListenersForSignals(event) {
  return process.listeners(event).length > 1;
}
function hasOtherListenersForEvents(event) {
  return process.listeners(event).length > 1;
}
var GLOBAL_TRACE_PROVIDER = void 0;
function getGlobalTraceProvider() {
  if (!GLOBAL_TRACE_PROVIDER) {
    GLOBAL_TRACE_PROVIDER = new TraceProvider();
  }
  return GLOBAL_TRACE_PROVIDER;
}

// https://raw.githubusercontent.com/jeff-hykin/openai-agents-js/refs/heads/main/packages/agents-core/src/tracing/createSpans.ts
function _withSpanFactory(createSpan) {
  return async (fn, ...args) => {
    return withNewSpanContext(async () => {
      const span = createSpan(...args);
      setCurrentSpan(span);
      try {
        span.start();
        return await fn(span);
      } catch (error) {
        span.setError({
          message: error.message,
          data: error.data
        });
        throw error;
      } finally {
        span.end();
        resetCurrentSpan();
      }
    });
  };
}
function createResponseSpan(options, parent) {
  options = {};
  return getGlobalTraceProvider().createSpan(
    {
      ...options,
      data: {
        type: "response",
        ...options.data
      }
    },
    parent
  );
}
var withResponseSpan = _withSpanFactory(createResponseSpan);
function createAgentSpan(options, parent) {
  return getGlobalTraceProvider().createSpan(
    {
      ...options,
      data: {
        type: "agent",
        name: options?.data?.name ?? "Agent",
        ...options?.data
      }
    },
    parent
  );
}
var withAgentSpan = _withSpanFactory(createAgentSpan);
function createFunctionSpan(options, parent) {
  return getGlobalTraceProvider().createSpan(
    {
      ...options,
      data: {
        type: "function",
        input: options?.data?.input ?? "",
        output: options?.data?.output ?? "",
        ...options?.data
      }
    },
    parent
  );
}
var withFunctionSpan = _withSpanFactory(createFunctionSpan);
function createHandoffSpan(options, parent) {
  return getGlobalTraceProvider().createSpan(
    {
      ...options,
      data: { type: "handoff", ...options?.data }
    },
    parent
  );
}
var withHandoffSpan = _withSpanFactory(createHandoffSpan);
function createGenerationSpan(options, parent) {
  return getGlobalTraceProvider().createSpan(
    {
      ...options,
      data: {
        type: "generation",
        ...options?.data
      }
    },
    parent
  );
}
var withGenerationSpan = _withSpanFactory(createGenerationSpan);
function createCustomSpan(options, parent) {
  return getGlobalTraceProvider().createSpan(
    {
      ...options,
      data: {
        type: "custom",
        data: {},
        ...options?.data
      }
    },
    parent
  );
}
var withCustomSpan = _withSpanFactory(createCustomSpan);
function createGuardrailSpan(options, parent) {
  return getGlobalTraceProvider().createSpan(
    {
      ...options,
      data: {
        type: "guardrail",
        triggered: false,
        ...options?.data
      }
    },
    parent
  );
}
var withGuardrailSpan = _withSpanFactory(createGuardrailSpan);
function createTranscriptionSpan(options, parent) {
  return getGlobalTraceProvider().createSpan(
    {
      ...options,
      data: {
        type: "transcription",
        ...options.data
      }
    },
    parent
  );
}
var withTranscriptionSpan = _withSpanFactory(createTranscriptionSpan);
function createSpeechSpan(options, parent) {
  return getGlobalTraceProvider().createSpan(
    {
      ...options,
      data: {
        type: "speech",
        ...options.data
      }
    },
    parent
  );
}
var withSpeechSpan = _withSpanFactory(createSpeechSpan);
function createSpeechGroupSpan(options, parent) {
  return getGlobalTraceProvider().createSpan(
    {
      ...options,
      data: {
        type: "speech_group",
        ...options?.data
      }
    },
    parent
  );
}
var withSpeechGroupSpan = _withSpanFactory(createSpeechGroupSpan);
function createMCPListToolsSpan(options, parent) {
  return getGlobalTraceProvider().createSpan(
    {
      ...options,
      data: {
        type: "mcp_tools",
        ...options?.data
      }
    },
    parent
  );
}
var withMCPListToolsSpan = _withSpanFactory(createMCPListToolsSpan);

// https://raw.githubusercontent.com/jeff-hykin/openai-agents-js/refs/heads/main/packages/agents-core/src/tracing/index.ts
function addTraceProcessor(processor) {
  getGlobalTraceProvider().registerProcessor(processor);
}
function setTraceProcessors(processors) {
  getGlobalTraceProvider().setProcessors(processors);
}

// https://raw.githubusercontent.com/jeff-hykin/openai-agents-js/refs/heads/main/packages/agents-core/src/lifecycle.ts
var EventEmitterDelegate = class {
  on(type, listener) {
    this.eventEmitter.on(type, listener);
    return this.eventEmitter;
  }
  off(type, listener) {
    this.eventEmitter.off(type, listener);
    return this.eventEmitter;
  }
  emit(type, ...args) {
    return this.eventEmitter.emit(type, ...args);
  }
  once(type, listener) {
    this.eventEmitter.once(type, listener);
    return this.eventEmitter;
  }
};
var AgentHooks = class extends EventEmitterDelegate {
  eventEmitter = new EventEmitter();
};
var RunHooks = class extends EventEmitterDelegate {
  eventEmitter = new EventEmitter();
};

// https://raw.githubusercontent.com/jeff-hykin/openai-agents-js/refs/heads/main/packages/agents-core/src/guardrail.ts
function defineInputGuardrail({
  name,
  execute
}) {
  return {
    type: "input",
    name,
    guardrailFunction: execute,
    async run(args) {
      return {
        guardrail: { type: "input", name },
        output: await execute(args)
      };
    }
  };
}
function defineOutputGuardrail({
  name,
  execute
}) {
  return {
    type: "output",
    name,
    guardrailFunction: execute,
    async run(args) {
      return {
        guardrail: { type: "output", name },
        agent: args.agent,
        agentOutput: args.agentOutput,
        output: await execute(args)
      };
    }
  };
}

// https://raw.githubusercontent.com/jeff-hykin/openai-agents-js/refs/heads/main/packages/agents-core/src/handoff.ts
function getTransferMessage(agent2) {
  return JSON.stringify({ assistant: agent2.name });
}
function defaultHandoffToolName(agent2) {
  return `transfer_to_${toFunctionToolName(agent2.name)}`;
}
function defaultHandoffToolDescription(agent2) {
  return `Handoff to the ${agent2.name} agent to handle the request. ${agent2.handoffDescription ?? ""}`;
}
var Handoff = class {
  /**
   * The name of the tool that represents the handoff.
   */
  toolName;
  /**
   * The description of the tool that represents the handoff.
   */
  toolDescription;
  /**
   * The JSON schema for the handoff input. Can be empty if the handoff does not take an input
   */
  inputJsonSchema = {
    type: "object",
    properties: {},
    required: [],
    additionalProperties: false
  };
  /**
   * Whether the input JSON schema is in strict mode. We **strongly** recommend setting this to
   * true, as it increases the likelihood of correct JSON input.
   */
  strictJsonSchema = true;
  /**
   * The function that invokes the handoff. The parameters passed are:
   * 1. The handoff run context
   * 2. The arguments from the LLM, as a JSON string. Empty string if inputJsonSchema is empty.
   *
   * Must return an agent
   */
  onInvokeHandoff;
  /**
   * The name of the agent that is being handed off to.
   */
  agentName;
  /**
   * A function that filters the inputs that are passed to the next agent. By default, the new agent
   * sees the entire conversation history. In some cases, you may want to filter inputs e.g. to
   * remove older inputs, or remove tools from existing inputs.
   *
   * The function will receive the entire conversation hisstory so far, including the input item
   * that triggered the handoff and a tool call output item representing the handoff tool's output.
   *
   * You are free to modify the input history or new items as you see fit. The next agent that runs
   * will receive `handoffInputData.allItems
   */
  inputFilter;
  /**
   * The agent that is being handed off to.
   */
  agent;
  /**
   * Returns a function tool definition that can be used to invoke the handoff.
   */
  getHandoffAsFunctionTool() {
    return {
      type: "function",
      name: this.toolName,
      description: this.toolDescription,
      parameters: this.inputJsonSchema,
      strict: this.strictJsonSchema
    };
  }
  constructor(agent2, onInvokeHandoff) {
    this.agentName = agent2.name;
    this.onInvokeHandoff = onInvokeHandoff;
    this.toolName = defaultHandoffToolName(agent2);
    this.toolDescription = defaultHandoffToolDescription(agent2);
    this.agent = agent2;
  }
};
function handoff(agent2, config = {}) {
  let parser = void 0;
  const hasOnHandoff = !!config.onHandoff;
  const hasInputType = !!config.inputType;
  const hasBothOrNeitherHandoffAndInputType = hasOnHandoff === hasInputType;
  if (!hasBothOrNeitherHandoffAndInputType) {
    throw new UserError(
      "You must provide either both `onHandoff` and `inputType` or neither."
    );
  }
  async function onInvokeHandoff(context, inputJsonString) {
    if (parser) {
      if (!inputJsonString) {
        addErrorToCurrentSpan({
          message: `Handoff function expected non empty input but got: ${inputJsonString}`,
          data: {
            details: `input is empty`
          }
        });
        throw new ModelBehaviorError(
          "Handoff function expected non empty input"
        );
      }
      try {
        const parsed = await parser(inputJsonString);
        if (config.onHandoff) {
          await config.onHandoff(context, parsed);
        }
      } catch (error) {
        addErrorToCurrentSpan({
          message: `Invalid JSON provided`,
          data: {}
        });
        if (!logger_default.dontLogToolData) {
          logger_default.error(
            `Invalid JSON when parsing: ${inputJsonString}. Error: ${error}`
          );
        }
        throw new ModelBehaviorError("Invalid JSON provided");
      }
    } else {
      await config.onHandoff?.(context);
    }
    return agent2;
  }
  const handoff2 = new Handoff(agent2, onInvokeHandoff);
  if (config.inputType) {
    const result = getSchemaAndParserFromInputType(
      config.inputType,
      handoff2.toolName
    );
    handoff2.inputJsonSchema = result.schema;
    handoff2.strictJsonSchema = true;
    parser = result.parser;
  }
  if (config.toolNameOverride) {
    handoff2.toolName = config.toolNameOverride;
  }
  if (config.toolDescriptionOverride) {
    handoff2.toolDescription = config.toolDescriptionOverride;
  }
  if (config.inputFilter) {
    handoff2.inputFilter = config.inputFilter;
  }
  return handoff2;
}
function getHandoff(agent2) {
  if (agent2 instanceof Handoff) {
    return agent2;
  }
  return handoff(agent2);
}

// https://raw.githubusercontent.com/jeff-hykin/openai-agents-js/refs/heads/main/packages/agents-core/src/providers.ts
var DEFAULT_PROVIDER;
function setDefaultModelProvider(provider) {
  DEFAULT_PROVIDER = provider;
}
function getDefaultModelProvider() {
  if (typeof DEFAULT_PROVIDER === "undefined") {
    throw new Error(
      "No default model provider set. Make sure to set a provider using setDefaultModelProvider before calling getDefaultModelProvider or pass an explicit provider."
    );
  }
  return DEFAULT_PROVIDER;
}

// https://raw.githubusercontent.com/jeff-hykin/openai-agents-js/refs/heads/main/packages/agents-core/src/types/protocol.ts
var SharedBase = be.object({
  /**
   * Additional optional provider specific data. Used for custom functionality or model provider
   * specific fields.
   */
  providerData: be.record(be.string(), be.any()).optional()
});
var ItemBase = SharedBase.extend({
  /**
   * An ID to identify the item. This is optional by default. If a model provider absolutely
   * requires this field, it will be validated on the model level.
   */
  id: be.string().optional()
});
var Refusal = SharedBase.extend({
  type: be.literal("refusal"),
  /**
   * The refusal explanation from the model.
   */
  refusal: be.string()
});
var OutputText = SharedBase.extend({
  type: be.literal("output_text"),
  /**
   * The text output from the model.
   */
  text: be.string()
});
var InputText = SharedBase.extend({
  type: be.literal("input_text"),
  /**
   * A text input for example a message from a user
   */
  text: be.string()
});
var ReasoningText = SharedBase.extend({
  type: be.literal("reasoning_text"),
  /**
   * A text input for example a message from a user
   */
  text: be.string()
});
var InputImage = SharedBase.extend({
  type: be.literal("input_image"),
  /**
   * The image input to the model. Could be a URL, base64 or an object with a file ID.
   */
  image: be.string().or(
    be.object({
      id: be.string()
    })
  ).describe("Could be a URL, base64 or an object with a file ID.")
});
var InputFile = SharedBase.extend({
  type: be.literal("input_file"),
  /**
   * The file input to the model. Could be a URL, base64 or an object with a file ID.
   */
  file: be.string().describe(
    "Either base64 encoded file data or a publicly accessible file URL"
  ).or(
    be.object({
      id: be.string().describe("OpenAI file ID")
    })
  ).or(
    be.object({
      url: be.string().describe("Publicly accessible PDF file URL")
    })
  ).describe("Contents of the file or an object with a file ID.")
});
var AudioContent = SharedBase.extend({
  type: be.literal("audio"),
  /**
   * The audio input to the model. Could be base64 encoded audio data or an object with a file ID.
   */
  audio: be.string().or(
    be.object({
      id: be.string()
    })
  ).describe("Base64 encoded audio data or file id"),
  /**
   * The format of the audio.
   */
  format: be.string().nullable().optional(),
  /**
   * The transcript of the audio.
   */
  transcript: be.string().nullable().optional()
});
var ImageContent = SharedBase.extend({
  type: be.literal("image"),
  /**
   * The image input to the model. Could be base64 encoded image data or an object with a file ID.
   */
  image: be.string().describe("Base64 encoded image data")
});
var ToolOutputText = SharedBase.extend({
  type: be.literal("text"),
  /**
   * The text output from the model.
   */
  text: be.string()
});
var ToolOutputImage = SharedBase.extend({
  type: be.literal("image"),
  /**
   * The image data. Could be base64 encoded image data or an object with a file ID.
   */
  data: be.string().describe("Base64 encoded image data"),
  /**
   * The media type of the image.
   */
  mediaType: be.string().describe("IANA media type of the image")
});
var ComputerToolOutput = SharedBase.extend({
  type: be.literal("computer_screenshot"),
  /**
   * A base64 encoded image data or a URL representing the screenshot.
   */
  data: be.string().describe("Base64 encoded image data or URL")
});
var computerActions = be.discriminatedUnion("type", [
  be.object({ type: be.literal("screenshot") }),
  be.object({
    type: be.literal("click"),
    x: be.number(),
    y: be.number(),
    button: be.enum(["left", "right", "wheel", "back", "forward"])
  }),
  be.object({
    type: be.literal("double_click"),
    x: be.number(),
    y: be.number()
  }),
  be.object({
    type: be.literal("scroll"),
    x: be.number(),
    y: be.number(),
    scroll_x: be.number(),
    scroll_y: be.number()
  }),
  be.object({
    type: be.literal("type"),
    text: be.string()
  }),
  be.object({ type: be.literal("wait") }),
  be.object({
    type: be.literal("move"),
    x: be.number(),
    y: be.number()
  }),
  be.object({
    type: be.literal("keypress"),
    keys: be.array(be.string())
  }),
  be.object({
    type: be.literal("drag"),
    path: be.array(be.object({ x: be.number(), y: be.number() }))
  })
]);
var AssistantContent = be.discriminatedUnion("type", [
  OutputText,
  Refusal,
  InputText,
  AudioContent,
  ImageContent
]);
var MessageBase = ItemBase.extend({
  /**
   * Any item without a type is treated as a message
   */
  type: be.literal("message").optional()
});
var AssistantMessageItem = MessageBase.extend({
  /**
   * Representing a message from the assistant (i.e. the model)
   */
  role: be.literal("assistant"),
  /**
   * The status of the message.
   */
  status: be.enum(["in_progress", "completed", "incomplete"]),
  /**
   * The content of the message.
   */
  content: be.array(AssistantContent)
});
var UserContent = be.discriminatedUnion("type", [
  InputText,
  InputImage,
  InputFile,
  AudioContent
]);
var UserMessageItem = MessageBase.extend({
  // type: z.literal('message'),
  /**
   * Representing a message from the user
   */
  role: be.literal("user"),
  /**
   * The content of the message.
   */
  content: be.array(UserContent).or(be.string())
});
var SystemMessageItem = MessageBase.extend({
  // type: z.literal('message'),
  /**
   * Representing a system message to the user
   */
  role: be.literal("system"),
  /**
   * The content of the message.
   */
  content: be.string()
});
var MessageItem = be.discriminatedUnion("role", [
  SystemMessageItem,
  AssistantMessageItem,
  UserMessageItem
]);
var HostedToolCallItem = ItemBase.extend({
  type: be.literal("hosted_tool_call"),
  /**
   * The name of the hosted tool. For example `web_search_call` or `file_search_call`
   */
  name: be.string().describe("The name of the hosted tool"),
  /**
   * The arguments of the hosted tool call.
   */
  arguments: be.string().describe("The arguments of the hosted tool call").optional(),
  /**
   * The status of the tool call.
   */
  status: be.string().optional(),
  /**
   * The primary output of the tool call. Additional output might be in the `providerData` field.
   */
  output: be.string().optional()
});
var FunctionCallItem = ItemBase.extend({
  type: be.literal("function_call"),
  /**
   * The ID of the tool call. Required to match up the respective tool call result.
   */
  callId: be.string().describe("The ID of the tool call"),
  /**
   * The name of the function.
   */
  name: be.string().describe("The name of the function"),
  /**
   * The status of the function call.
   */
  status: be.enum(["in_progress", "completed", "incomplete"]).optional(),
  /**
   * The arguments of the function call.
   */
  arguments: be.string()
});
var FunctionCallResultItem = ItemBase.extend({
  type: be.literal("function_call_result"),
  /**
   * The name of the tool that was called
   */
  name: be.string().describe("The name of the tool"),
  /**
   * The ID of the tool call. Required to match up the respective tool call result.
   */
  callId: be.string().describe("The ID of the tool call"),
  /**
   * The status of the tool call.
   */
  status: be.enum(["in_progress", "completed", "incomplete"]),
  /**
   * The output of the tool call.
   */
  output: be.discriminatedUnion("type", [ToolOutputText, ToolOutputImage])
});
var ComputerUseCallItem = ItemBase.extend({
  type: be.literal("computer_call"),
  /**
   * The ID of the computer call. Required to match up the respective computer call result.
   */
  callId: be.string().describe("The ID of the computer call"),
  /**
   * The status of the computer call.
   */
  status: be.enum(["in_progress", "completed", "incomplete"]),
  /**
   * The action to be performed by the computer.
   */
  action: computerActions
});
var ComputerCallResultItem = ItemBase.extend({
  type: be.literal("computer_call_result"),
  /**
   * The ID of the computer call. Required to match up the respective computer call result.
   */
  callId: be.string().describe("The ID of the computer call"),
  /**
   * The output of the computer call.
   */
  output: ComputerToolOutput
});
var ToolCallItem = be.discriminatedUnion("type", [
  ComputerUseCallItem,
  FunctionCallItem,
  HostedToolCallItem
]);
var ReasoningItem = SharedBase.extend({
  id: be.string().optional(),
  type: be.literal("reasoning"),
  /**
   * The user facing representation of the reasoning. Additional information might be in the `providerData` field.
   */
  content: be.array(InputText),
  /**
   * The raw reasoning text from the model.
   */
  rawContent: be.array(ReasoningText).optional()
});
var UnknownItem = ItemBase.extend({
  type: be.literal("unknown")
});
var OutputModelItem = be.discriminatedUnion("type", [
  AssistantMessageItem,
  HostedToolCallItem,
  FunctionCallItem,
  ComputerUseCallItem,
  ReasoningItem,
  UnknownItem
]);
var ModelItem = be.union([
  UserMessageItem,
  AssistantMessageItem,
  SystemMessageItem,
  HostedToolCallItem,
  FunctionCallItem,
  ComputerUseCallItem,
  FunctionCallResultItem,
  ComputerCallResultItem,
  ReasoningItem,
  UnknownItem
]);
var UsageData = be.object({
  requests: be.number().optional(),
  inputTokens: be.number(),
  outputTokens: be.number(),
  totalTokens: be.number(),
  inputTokensDetails: be.record(be.string(), be.number()).optional(),
  outputTokensDetails: be.record(be.string(), be.number()).optional()
});
var StreamEventTextStream = SharedBase.extend({
  type: be.literal("output_text_delta"),
  /**
   * The delta text that was streamed by the modelto the user.
   */
  delta: be.string()
});
var StreamEventResponseStarted = SharedBase.extend({
  type: be.literal("response_started")
});
var StreamEventResponseCompleted = SharedBase.extend({
  type: be.literal("response_done"),
  /**
   * The response from the model.
   */
  response: SharedBase.extend({
    /**
     * The ID of the response.
     */
    id: be.string(),
    /**
     * The usage data for the response.
     */
    usage: UsageData,
    /**
     * The output from the model.
     */
    output: be.array(OutputModelItem)
  })
});
var StreamEventGenericItem = SharedBase.extend({
  type: be.literal("model"),
  event: be.any().describe("The event from the model")
});
var StreamEvent = be.discriminatedUnion("type", [
  StreamEventTextStream,
  StreamEventResponseCompleted,
  StreamEventResponseStarted,
  StreamEventGenericItem
]);

// https://raw.githubusercontent.com/jeff-hykin/openai-agents-js/refs/heads/main/packages/agents-core/src/usage.ts
var Usage = class {
  /**
   * The number of requests made to the LLM API.
   */
  requests;
  /**
   * The number of input tokens used across all requests.
   */
  inputTokens;
  /**
   * The number of output tokens used across all requests.
   */
  outputTokens;
  /**
   * The total number of tokens sent and received, across all requests.
   */
  totalTokens;
  /**
   * Details about the input tokens used across all requests.
   */
  inputTokensDetails = [];
  /**
   * Details about the output tokens used across all requests.
   */
  outputTokensDetails = [];
  constructor(input) {
    if (typeof input === "undefined") {
      this.requests = 0;
      this.inputTokens = 0;
      this.outputTokens = 0;
      this.totalTokens = 0;
      this.inputTokensDetails = [];
      this.outputTokensDetails = [];
    } else {
      this.requests = input?.requests ?? 1;
      this.inputTokens = input?.inputTokens ?? 0;
      this.outputTokens = input?.outputTokens ?? 0;
      this.totalTokens = input?.totalTokens ?? 0;
      this.inputTokensDetails = input?.inputTokensDetails ? [input.inputTokensDetails] : [];
      this.outputTokensDetails = input?.outputTokensDetails ? [input.outputTokensDetails] : [];
    }
  }
  add(newUsage) {
    this.requests += newUsage.requests;
    this.inputTokens += newUsage.inputTokens;
    this.outputTokens += newUsage.outputTokens;
    this.totalTokens += newUsage.totalTokens;
    if (newUsage.inputTokensDetails) {
      this.inputTokensDetails.push(...newUsage.inputTokensDetails);
    }
    if (newUsage.outputTokensDetails) {
      this.outputTokensDetails.push(...newUsage.outputTokensDetails);
    }
  }
};

// https://raw.githubusercontent.com/jeff-hykin/openai-agents-js/refs/heads/main/packages/agents-core/src/runContext.ts
var RunContext = class {
  /**
   * The context object passed by you to the `Runner.run()`
   */
  context;
  /**
   * The usage of the agent run so far. For streamed responses, the usage will be stale until the
   * last chunk of the stream is processed.
   */
  usage;
  /**
   * A map of tool names to whether they have been approved.
   */
  #approvals;
  constructor(context = {}) {
    this.context = context;
    this.usage = new Usage();
    this.#approvals = /* @__PURE__ */ new Map();
  }
  /**
   * Rebuild the approvals map from a serialized state.
   * @internal
   *
   * @param approvals - The approvals map to rebuild.
   */
  _rebuildApprovals(approvals) {
    this.#approvals = new Map(Object.entries(approvals));
  }
  /**
   * Check if a tool call has been approved.
   *
   * @param toolName - The name of the tool.
   * @param callId - The call ID of the tool call.
   * @returns `true` if the tool call has been approved, `false` if blocked and `undefined` if not yet approved or rejected.
   */
  isToolApproved({ toolName, callId }) {
    const approvalEntry = this.#approvals.get(toolName);
    if (approvalEntry?.approved === true && approvalEntry.rejected === true) {
      logger_default.warn(
        "Tool is permanently approved and rejected at the same time. Approval takes precedence"
      );
      return true;
    }
    if (approvalEntry?.approved === true) {
      return true;
    }
    if (approvalEntry?.rejected === true) {
      return false;
    }
    const individualCallApproval = Array.isArray(approvalEntry?.approved) ? approvalEntry.approved.includes(callId) : false;
    const individualCallRejection = Array.isArray(approvalEntry?.rejected) ? approvalEntry.rejected.includes(callId) : false;
    if (individualCallApproval && individualCallRejection) {
      logger_default.warn(
        `Tool call ${callId} is both approved and rejected at the same time. Approval takes precedence`
      );
      return true;
    }
    if (individualCallApproval) {
      return true;
    }
    if (individualCallRejection) {
      return false;
    }
    return void 0;
  }
  /**
   * Approve a tool call.
   *
   * @param toolName - The name of the tool.
   * @param callId - The call ID of the tool call.
   */
  approveTool(approvalItem, { alwaysApprove = false } = {}) {
    const toolName = approvalItem.rawItem.name;
    if (alwaysApprove) {
      this.#approvals.set(toolName, {
        approved: true,
        rejected: []
      });
      return;
    }
    const approvalEntry = this.#approvals.get(toolName) ?? {
      approved: [],
      rejected: []
    };
    if (Array.isArray(approvalEntry.approved)) {
      const callId = "callId" in approvalItem.rawItem ? approvalItem.rawItem.callId : approvalItem.rawItem.id;
      approvalEntry.approved.push(callId);
    }
    this.#approvals.set(toolName, approvalEntry);
  }
  /**
   * Reject a tool call.
   *
   * @param approvalItem - The tool approval item to reject.
   */
  rejectTool(approvalItem, { alwaysReject = false } = {}) {
    const toolName = approvalItem.rawItem.name;
    if (alwaysReject) {
      this.#approvals.set(toolName, {
        approved: false,
        rejected: true
      });
      return;
    }
    const approvalEntry = this.#approvals.get(toolName) ?? {
      approved: [],
      rejected: []
    };
    if (Array.isArray(approvalEntry.rejected)) {
      const callId = "callId" in approvalItem.rawItem ? approvalItem.rawItem.callId : approvalItem.rawItem.id;
      approvalEntry.rejected.push(callId);
    }
    this.#approvals.set(toolName, approvalEntry);
  }
  toJSON() {
    return {
      context: this.context,
      usage: this.usage,
      approvals: Object.fromEntries(this.#approvals.entries())
    };
  }
};

// https://raw.githubusercontent.com/jeff-hykin/openai-agents-js/refs/heads/main/packages/agents-core/src/result.ts
var RunResultBase = class {
  state;
  constructor(state) {
    this.state = state;
  }
  /**
   * The history of the agent run. This includes the input items and the new items generated during
   * the agent run.
   *
   * This can be used as inputs for the next agent run.
   */
  get history() {
    return getTurnInput(this.input, this.newItems);
  }
  /**
   * The new items generated during the agent run. These include things like new messages, tool
   * calls and their outputs, etc.
   *
   * It does not include information about the agents and instead represents the model data.
   *
   * For the output including the agents, use the `newItems` property.
   */
  get output() {
    return getTurnInput([], this.newItems);
  }
  /**
   * A copy of the original input items.
   */
  get input() {
    return this.state._originalInput;
  }
  /**
   * The run items generated during the agent run. This associates the model data with the agents.
   *
   * For the model data that can be used as inputs for the next agent run, use the `output` property.
   */
  get newItems() {
    return this.state._generatedItems;
  }
  /**
   * The raw LLM responses generated by the model during the agent run.
   */
  get rawResponses() {
    return this.state._modelResponses;
  }
  /**
   * The last response ID generated by the model during the agent run.
   */
  get lastResponseId() {
    const responses = this.rawResponses;
    return responses && responses.length > 0 ? responses[responses.length - 1].responseId : void 0;
  }
  /**
   * The last agent that was run
   */
  get lastAgent() {
    return this.state._currentAgent;
  }
  /**
   * Guardrail results for the input messages.
   */
  get inputGuardrailResults() {
    return this.state._inputGuardrailResults;
  }
  /**
   * Guardrail results for the final output of the agent.
   */
  get outputGuardrailResults() {
    return this.state._outputGuardrailResults;
  }
  /**
   * Any interruptions that occurred during the agent run for example for tool approvals.
   */
  get interruptions() {
    if (this.state._currentStep?.type === "next_step_interruption") {
      return this.state._currentStep.data.interruptions;
    }
    return [];
  }
  /**
   * The final output of the agent. If the output type was set to anything other than `text`,
   * this will be parsed either as JSON or using the Zod schema you provided.
   */
  get finalOutput() {
    if (this.state._currentStep?.type === "next_step_final_output") {
      return this.state._currentAgent.processFinalOutput(
        this.state._currentStep.output
      );
    }
    logger_default.warn("Accessed finalOutput before agent run is completed.");
    return void 0;
  }
};
var RunResult = class extends RunResultBase {
  constructor(state) {
    super(state);
  }
};
var StreamedRunResult = class extends RunResultBase {
  /**
   * The current agent that is running
   */
  get currentAgent() {
    return this.lastAgent;
  }
  /**
   * The current turn number
   */
  currentTurn = 0;
  /**
   * The maximum number of turns that can be run
   */
  maxTurns;
  #error = null;
  #signal;
  #readableController;
  #readableStream;
  #completedPromise;
  #completedPromiseResolve;
  #completedPromiseReject;
  #cancelled = false;
  constructor(result = {}) {
    super(result.state);
    this.#signal = result.signal;
    if (this.#signal) {
      this.#signal.addEventListener("abort", async () => {
        await this.#readableStream.cancel();
      });
    }
    this.#readableStream = new ReadableStream2({
      start: (controller) => {
        this.#readableController = controller;
      },
      cancel: () => {
        this.#cancelled = true;
      }
    });
    this.#completedPromise = new Promise((resolve, reject) => {
      this.#completedPromiseResolve = resolve;
      this.#completedPromiseReject = reject;
    });
  }
  /**
   * @internal
   * Adds an item to the stream of output items
   */
  _addItem(item) {
    if (!this.cancelled) {
      this.#readableController?.enqueue(item);
    }
  }
  /**
   * @internal
   * Indicates that the stream has been completed
   */
  _done() {
    if (!this.cancelled && this.#readableController) {
      this.#readableController.close();
      this.#readableController = void 0;
      this.#completedPromiseResolve?.();
    }
  }
  /**
   * @internal
   * Handles an error in the stream loop.
   */
  _raiseError(err) {
    if (!this.cancelled && this.#readableController) {
      this.#readableController.error(err);
      this.#readableController = void 0;
    }
    this.#error = err;
    this.#completedPromiseReject?.(err);
    this.#completedPromise.catch((e7) => {
      logger_default.debug(`Resulted in an error: ${e7}`);
    });
  }
  /**
   * Returns true if the stream has been cancelled.
   */
  get cancelled() {
    return this.#cancelled;
  }
  /**
   * Returns the underlying readable stream.
   * @returns A readable stream of the agent run.
   */
  toStream() {
    return this.#readableStream;
  }
  /**
   * Await this promise to ensure that the stream has been completed if you are not consuming the
   * stream directly.
   */
  get completed() {
    return this.#completedPromise;
  }
  /**
   * Error thrown during the run, if any.
   */
  get error() {
    return this.#error;
  }
  toTextStream(options = {}) {
    const stream2 = this.#readableStream.pipeThrough(
      new TransformStream2({
        transform(event, controller) {
          if (event.type === "raw_model_stream_event" && event.data.type === "output_text_delta") {
            const item = StreamEventTextStream.parse(event.data);
            controller.enqueue(item.delta);
          }
        }
      })
    );
    if (options.compatibleWithNodeStreams) {
      return Readable.fromWeb(stream2);
    }
    return stream2;
  }
  [Symbol.asyncIterator]() {
    return this.#readableStream[Symbol.asyncIterator]();
  }
};

// https://raw.githubusercontent.com/jeff-hykin/openai-agents-js/refs/heads/main/packages/agents-core/src/utils/serialize.ts
function serializeTool(tool2) {
  if (tool2.type === "function") {
    return {
      type: "function",
      name: tool2.name,
      description: tool2.description,
      parameters: tool2.parameters,
      strict: tool2.strict
    };
  }
  if (tool2.type === "computer") {
    return {
      type: "computer",
      name: tool2.name,
      environment: tool2.computer.environment,
      dimensions: tool2.computer.dimensions
    };
  }
  return {
    type: "hosted_tool",
    name: tool2.name,
    providerData: tool2.providerData
  };
}
function serializeHandoff(h22) {
  return {
    toolName: h22.toolName,
    toolDescription: h22.toolDescription,
    inputJsonSchema: h22.inputJsonSchema,
    strictJsonSchema: h22.strictJsonSchema
  };
}

// https://raw.githubusercontent.com/jeff-hykin/openai-agents-js/refs/heads/main/packages/agents-core/src/items.ts
var RunItemBase = class {
  type = "base_item";
  rawItem;
  toJSON() {
    return {
      type: this.type,
      rawItem: this.rawItem
    };
  }
};
var RunMessageOutputItem = class extends RunItemBase {
  constructor(rawItem, agent2) {
    super();
    this.rawItem = rawItem;
    this.agent = agent2;
  }
  type = "message_output_item";
  toJSON() {
    return {
      ...super.toJSON(),
      agent: this.agent.toJSON()
    };
  }
  get content() {
    let content = "";
    for (const part of this.rawItem.content) {
      if (part.type === "output_text") {
        content += part.text;
      }
    }
    return content;
  }
};
var RunToolCallItem = class extends RunItemBase {
  constructor(rawItem, agent2) {
    super();
    this.rawItem = rawItem;
    this.agent = agent2;
  }
  type = "tool_call_item";
  toJSON() {
    return {
      ...super.toJSON(),
      agent: this.agent.toJSON()
    };
  }
};
var RunToolCallOutputItem = class extends RunItemBase {
  constructor(rawItem, agent2, output) {
    super();
    this.rawItem = rawItem;
    this.agent = agent2;
    this.output = output;
  }
  type = "tool_call_output_item";
  toJSON() {
    return {
      ...super.toJSON(),
      agent: this.agent.toJSON(),
      output: toSmartString(this.output)
    };
  }
};
var RunReasoningItem = class extends RunItemBase {
  constructor(rawItem, agent2) {
    super();
    this.rawItem = rawItem;
    this.agent = agent2;
  }
  type = "reasoning_item";
  toJSON() {
    return {
      ...super.toJSON(),
      agent: this.agent.toJSON()
    };
  }
};
var RunHandoffCallItem = class extends RunItemBase {
  constructor(rawItem, agent2) {
    super();
    this.rawItem = rawItem;
    this.agent = agent2;
  }
  type = "handoff_call_item";
  toJSON() {
    return {
      ...super.toJSON(),
      agent: this.agent.toJSON()
    };
  }
};
var RunHandoffOutputItem = class extends RunItemBase {
  constructor(rawItem, sourceAgent, targetAgent) {
    super();
    this.rawItem = rawItem;
    this.sourceAgent = sourceAgent;
    this.targetAgent = targetAgent;
  }
  type = "handoff_output_item";
  toJSON() {
    return {
      ...super.toJSON(),
      sourceAgent: this.sourceAgent.toJSON(),
      targetAgent: this.targetAgent.toJSON()
    };
  }
};
var RunToolApprovalItem = class extends RunItemBase {
  constructor(rawItem, agent2) {
    super();
    this.rawItem = rawItem;
    this.agent = agent2;
  }
  type = "tool_approval_item";
  toJSON() {
    return {
      ...super.toJSON(),
      agent: this.agent.toJSON()
    };
  }
};

// https://raw.githubusercontent.com/jeff-hykin/openai-agents-js/refs/heads/main/packages/agents-core/src/utils/messages.ts
function getLastTextFromOutputMessage(outputMessage) {
  if (outputMessage.type !== "message") {
    return void 0;
  }
  if (outputMessage.role !== "assistant") {
    return void 0;
  }
  const lastItem = outputMessage.content[outputMessage.content.length - 1];
  if (lastItem.type !== "output_text") {
    return void 0;
  }
  return lastItem.text;
}
function getOutputText(output) {
  if (output.output.length === 0) {
    return "";
  }
  return getLastTextFromOutputMessage(output.output[output.output.length - 1]) || "";
}

// https://raw.githubusercontent.com/jeff-hykin/openai-agents-js/refs/heads/main/packages/agents-core/src/events.ts
var RunRawModelStreamEvent = class {
  /**
   * @param data The raw responses stream events from the LLM.
   */
  constructor(data) {
    this.data = data;
  }
  /**
   * The type of the event.
   */
  type = "raw_model_stream_event";
};
var RunItemStreamEvent = class {
  /**
   * @param name The name of the event.
   * @param item The item that was created.
   */
  constructor(name, item) {
    this.name = name;
    this.item = item;
  }
  type = "run_item_stream_event";
};
var RunAgentUpdatedStreamEvent = class {
  /**
   * @param agent The new agent
   */
  constructor(agent2) {
    this.agent = agent2;
  }
  type = "agent_updated_stream_event";
};

// https://raw.githubusercontent.com/jeff-hykin/openai-agents-js/refs/heads/main/packages/agents-core/src/runImplementation.ts
function processModelResponse(modelResponse, agent2, tools, handoffs) {
  const items = [];
  const runHandoffs = [];
  const runFunctions = [];
  const runComputerActions = [];
  const runMCPApprovalRequests = [];
  const toolsUsed = [];
  const handoffMap = new Map(handoffs.map((h22) => [h22.toolName, h22]));
  const functionMap = new Map(
    tools.filter((t9) => t9.type === "function").map((t9) => [t9.name, t9])
  );
  const computerTool2 = tools.find((t9) => t9.type === "computer");
  const mcpToolMap = new Map(
    tools.filter((t9) => t9.type === "hosted_tool" && t9.providerData?.type === "mcp").map((t9) => t9).map((t9) => [t9.providerData.server_label, t9])
  );
  for (const output of modelResponse.output) {
    if (output.type === "message") {
      if (output.role === "assistant") {
        items.push(new RunMessageOutputItem(output, agent2));
      }
    } else if (output.type === "hosted_tool_call") {
      items.push(new RunToolCallItem(output, agent2));
      const toolName = output.name;
      toolsUsed.push(toolName);
      if (output.providerData?.type === "mcp_approval_request" || output.name === "mcp_approval_request") {
        const providerData = output.providerData;
        const mcpServerLabel = providerData.server_label;
        const mcpServerTool = mcpToolMap.get(mcpServerLabel);
        if (typeof mcpServerTool === "undefined") {
          const message = `MCP server (${mcpServerLabel}) not found in Agent (${agent2.name})`;
          addErrorToCurrentSpan({
            message,
            data: { mcp_server_label: mcpServerLabel }
          });
          throw new ModelBehaviorError(message);
        }
        const approvalItem = new RunToolApprovalItem(
          {
            type: "hosted_tool_call",
            // We must use this name to align with the name sent from the servers
            name: providerData.name,
            id: providerData.id,
            status: "in_progress",
            providerData
          },
          agent2
        );
        runMCPApprovalRequests.push({
          requestItem: approvalItem,
          mcpTool: mcpServerTool
        });
        if (!mcpServerTool.providerData.on_approval) {
          items.push(approvalItem);
        }
      }
    } else if (output.type === "reasoning") {
      items.push(new RunReasoningItem(output, agent2));
    } else if (output.type === "computer_call") {
      items.push(new RunToolCallItem(output, agent2));
      toolsUsed.push("computer_use");
      if (!computerTool2) {
        addErrorToCurrentSpan({
          message: "Model produced computer action without a computer tool.",
          data: {
            agent_name: agent2.name
          }
        });
        throw new ModelBehaviorError(
          "Model produced computer action without a computer tool."
        );
      }
      runComputerActions.push({
        toolCall: output,
        computer: computerTool2
      });
    }
    if (output.type !== "function_call") {
      continue;
    }
    toolsUsed.push(output.name);
    const handoff2 = handoffMap.get(output.name);
    if (handoff2) {
      items.push(new RunHandoffCallItem(output, agent2));
      runHandoffs.push({
        toolCall: output,
        handoff: handoff2
      });
    } else {
      const functionTool = functionMap.get(output.name);
      if (!functionTool) {
        addErrorToCurrentSpan({
          message: `Tool ${output.name} not found in agent ${agent2.name}.`,
          data: {
            tool_name: output.name,
            agent_name: agent2.name
          }
        });
        throw new ModelBehaviorError(
          `Tool ${output.name} not found in agent ${agent2.name}.`
        );
      }
      items.push(new RunToolCallItem(output, agent2));
      runFunctions.push({
        toolCall: output,
        tool: functionTool
      });
    }
  }
  return {
    newItems: items,
    handoffs: runHandoffs,
    functions: runFunctions,
    computerActions: runComputerActions,
    mcpApprovalRequests: runMCPApprovalRequests,
    toolsUsed,
    hasToolsOrApprovalsToRun() {
      return runHandoffs.length > 0 || runFunctions.length > 0 || runMCPApprovalRequests.length > 0 || runComputerActions.length > 0;
    }
  };
}
var nextStepSchema = be.discriminatedUnion("type", [
  be.object({
    type: be.literal("next_step_handoff"),
    newAgent: be.any()
  }),
  be.object({
    type: be.literal("next_step_final_output"),
    output: be.string()
  }),
  be.object({
    type: be.literal("next_step_run_again")
  }),
  be.object({
    type: be.literal("next_step_interruption"),
    data: be.record(be.string(), be.any())
  })
]);
var SingleStepResult = class {
  constructor(originalInput, modelResponse, preStepItems, newStepItems, nextStep) {
    this.originalInput = originalInput;
    this.modelResponse = modelResponse;
    this.preStepItems = preStepItems;
    this.newStepItems = newStepItems;
    this.nextStep = nextStep;
  }
  /**
   * The items generated during the agent run (i.e. everything generated after originalInput)
   */
  get generatedItems() {
    return this.preStepItems.concat(this.newStepItems);
  }
};
function maybeResetToolChoice(agent2, toolUseTracker, modelSettings) {
  if (agent2.resetToolChoice && toolUseTracker.hasUsedTools(agent2)) {
    return { ...modelSettings, toolChoice: void 0 };
  }
  return modelSettings;
}
async function executeInterruptedToolsAndSideEffects(agent2, originalInput, originalPreStepItems, newResponse, processedResponse, runner, state) {
  const functionCallIds = originalPreStepItems.filter(
    (item) => item instanceof RunToolApprovalItem && "callId" in item.rawItem && item.rawItem.type === "function_call"
  ).map((item) => item.rawItem.callId);
  const functionToolRuns = processedResponse.functions.filter((run2) => {
    return functionCallIds.includes(run2.toolCall.callId);
  });
  const functionResults = await executeFunctionToolCalls(
    agent2,
    functionToolRuns,
    runner,
    state
  );
  const newItems = functionResults.map((r39) => r39.runItem);
  const mcpApprovalRuns = processedResponse.mcpApprovalRequests.filter(
    (run2) => {
      return run2.requestItem.type === "tool_approval_item" && run2.requestItem.rawItem.type === "hosted_tool_call" && run2.requestItem.rawItem.providerData?.type === "mcp_approval_request";
    }
  );
  for (const run2 of mcpApprovalRuns) {
    const approvalRequestId = run2.requestItem.rawItem.id;
    const approved = state._context.isToolApproved({
      // Since this item name must be the same with the one sent from Responses API server
      toolName: run2.requestItem.rawItem.name,
      callId: approvalRequestId
    });
    if (typeof approved !== "undefined") {
      const providerData = {
        approve: approved,
        approval_request_id: approvalRequestId,
        reason: void 0
      };
      newItems.push(
        new RunToolCallItem(
          {
            type: "hosted_tool_call",
            name: "mcp_approval_response",
            providerData
          },
          agent2
        )
      );
    }
  }
  const checkToolOutput = await checkForFinalOutputFromTools(
    agent2,
    functionResults,
    state
  );
  const preStepItems = originalPreStepItems.filter((item) => {
    return !(item instanceof RunToolApprovalItem);
  });
  if (checkToolOutput.isFinalOutput) {
    runner.emit(
      "agent_end",
      state._context,
      agent2,
      checkToolOutput.finalOutput
    );
    agent2.emit("agent_end", state._context, checkToolOutput.finalOutput);
    return new SingleStepResult(
      originalInput,
      newResponse,
      preStepItems,
      newItems,
      {
        type: "next_step_final_output",
        output: checkToolOutput.finalOutput
      }
    );
  } else if (checkToolOutput.isInterrupted) {
    return new SingleStepResult(
      originalInput,
      newResponse,
      preStepItems,
      newItems,
      {
        type: "next_step_interruption",
        data: {
          interruptions: checkToolOutput.interruptions
        }
      }
    );
  }
  return new SingleStepResult(
    originalInput,
    newResponse,
    preStepItems,
    newItems,
    { type: "next_step_run_again" }
  );
}
async function executeToolsAndSideEffects(agent2, originalInput, originalPreStepItems, newResponse, processedResponse, runner, state) {
  const preStepItems = originalPreStepItems;
  let newItems = processedResponse.newItems;
  const [functionResults, computerResults] = await Promise.all([
    executeFunctionToolCalls(
      agent2,
      processedResponse.functions,
      runner,
      state
    ),
    executeComputerActions(
      agent2,
      processedResponse.computerActions,
      runner,
      state._context
    )
  ]);
  newItems = newItems.concat(functionResults.map((r39) => r39.runItem));
  newItems = newItems.concat(computerResults);
  if (processedResponse.mcpApprovalRequests.length > 0) {
    for (const approvalRequest of processedResponse.mcpApprovalRequests) {
      const toolData = approvalRequest.mcpTool.providerData;
      const requestData = approvalRequest.requestItem.rawItem.providerData;
      if (toolData.on_approval) {
        const approvalResult = await toolData.on_approval(
          state._context,
          approvalRequest.requestItem
        );
        const approvalResponseData = {
          approve: approvalResult.approve,
          approval_request_id: requestData.id,
          reason: approvalResult.reason
        };
        newItems.push(
          new RunToolCallItem(
            {
              type: "hosted_tool_call",
              name: "mcp_approval_response",
              providerData: approvalResponseData
            },
            agent2
          )
        );
      } else {
        newItems.push(approvalRequest.requestItem);
        const approvalItem = {
          type: "hosted_mcp_tool_approval",
          tool: approvalRequest.mcpTool,
          runItem: new RunToolApprovalItem(
            {
              type: "hosted_tool_call",
              name: requestData.name,
              id: requestData.id,
              arguments: requestData.arguments,
              status: "in_progress",
              providerData: requestData
            },
            agent2
          )
        };
        functionResults.push(approvalItem);
      }
    }
  }
  if (processedResponse.handoffs.length > 0) {
    return await executeHandoffCalls(
      agent2,
      originalInput,
      preStepItems,
      newItems,
      newResponse,
      processedResponse.handoffs,
      runner,
      state._context
    );
  }
  const checkToolOutput = await checkForFinalOutputFromTools(
    agent2,
    functionResults,
    state
  );
  if (checkToolOutput.isFinalOutput) {
    runner.emit(
      "agent_end",
      state._context,
      agent2,
      checkToolOutput.finalOutput
    );
    agent2.emit("agent_end", state._context, checkToolOutput.finalOutput);
    return new SingleStepResult(
      originalInput,
      newResponse,
      preStepItems,
      newItems,
      {
        type: "next_step_final_output",
        output: checkToolOutput.finalOutput
      }
    );
  } else if (checkToolOutput.isInterrupted) {
    return new SingleStepResult(
      originalInput,
      newResponse,
      preStepItems,
      newItems,
      {
        type: "next_step_interruption",
        data: {
          interruptions: checkToolOutput.interruptions
        }
      }
    );
  }
  const messageItems = newItems.filter(
    (item) => item instanceof RunMessageOutputItem
  );
  const potentialFinalOutput = messageItems.length > 0 ? getLastTextFromOutputMessage(
    messageItems[messageItems.length - 1].rawItem
  ) : void 0;
  if (!potentialFinalOutput) {
    return new SingleStepResult(
      originalInput,
      newResponse,
      preStepItems,
      newItems,
      { type: "next_step_run_again" }
    );
  }
  if (agent2.outputType === "text" && !processedResponse.hasToolsOrApprovalsToRun()) {
    return new SingleStepResult(
      originalInput,
      newResponse,
      preStepItems,
      newItems,
      {
        type: "next_step_final_output",
        output: potentialFinalOutput
      }
    );
  } else if (agent2.outputType !== "text" && potentialFinalOutput) {
    const { parser } = getSchemaAndParserFromInputType(
      agent2.outputType,
      "final_output"
    );
    const [error] = await safeExecute(() => parser(potentialFinalOutput));
    if (error) {
      addErrorToCurrentSpan({
        message: "Invalid output type",
        data: {
          error: String(error)
        }
      });
      throw new ModelBehaviorError("Invalid output type");
    }
    return new SingleStepResult(
      originalInput,
      newResponse,
      preStepItems,
      newItems,
      { type: "next_step_final_output", output: potentialFinalOutput }
    );
  }
  return new SingleStepResult(
    originalInput,
    newResponse,
    preStepItems,
    newItems,
    { type: "next_step_run_again" }
  );
}
function getToolCallOutputItem(toolCall, output) {
  return {
    type: "function_call_result",
    name: toolCall.name,
    callId: toolCall.callId,
    status: "completed",
    output: {
      type: "text",
      text: toSmartString(output)
    }
  };
}
async function executeFunctionToolCalls(agent2, toolRuns, runner, state) {
  async function runSingleTool(toolRun) {
    let parsedArgs = toolRun.toolCall.arguments;
    if (toolRun.tool.parameters) {
      if (isZodObject(toolRun.tool.parameters)) {
        parsedArgs = toolRun.tool.parameters.parse(parsedArgs);
      } else {
        parsedArgs = JSON.parse(parsedArgs);
      }
    }
    const needsApproval = await toolRun.tool.needsApproval(
      state._context,
      parsedArgs,
      toolRun.toolCall.callId
    );
    if (needsApproval) {
      const approval = state._context.isToolApproved({
        toolName: toolRun.tool.name,
        callId: toolRun.toolCall.callId
      });
      if (approval === false) {
        return withFunctionSpan(
          async (span) => {
            const response = "Tool execution was not approved.";
            span.setError({
              message: response,
              data: {
                tool_name: toolRun.tool.name,
                error: `Tool execution for ${toolRun.toolCall.callId} was manually rejected by user.`
              }
            });
            span.spanData.output = response;
            return {
              type: "function_output",
              tool: toolRun.tool,
              output: response,
              runItem: new RunToolCallOutputItem(
                getToolCallOutputItem(toolRun.toolCall, response),
                agent2,
                response
              )
            };
          },
          {
            data: {
              name: toolRun.tool.name
            }
          }
        );
      }
      if (approval !== true) {
        return {
          type: "function_approval",
          tool: toolRun.tool,
          runItem: new RunToolApprovalItem(toolRun.toolCall, agent2)
        };
      }
    }
    return withFunctionSpan(
      async (span) => {
        if (runner.config.traceIncludeSensitiveData) {
          span.spanData.input = toolRun.toolCall.arguments;
        }
        try {
          runner.emit("agent_tool_start", state._context, agent2, toolRun.tool, {
            toolCall: toolRun.toolCall
          });
          agent2.emit("agent_tool_start", state._context, toolRun.tool, {
            toolCall: toolRun.toolCall
          });
          const result = await toolRun.tool.invoke(
            state._context,
            toolRun.toolCall.arguments
          );
          const stringResult = toSmartString(result);
          runner.emit(
            "agent_tool_end",
            state._context,
            agent2,
            toolRun.tool,
            stringResult,
            { toolCall: toolRun.toolCall }
          );
          agent2.emit(
            "agent_tool_end",
            state._context,
            toolRun.tool,
            stringResult,
            { toolCall: toolRun.toolCall }
          );
          if (runner.config.traceIncludeSensitiveData) {
            span.spanData.output = stringResult;
          }
          return {
            type: "function_output",
            tool: toolRun.tool,
            output: result,
            runItem: new RunToolCallOutputItem(
              getToolCallOutputItem(toolRun.toolCall, result),
              agent2,
              result
            )
          };
        } catch (error) {
          span.setError({
            message: "Error running tool",
            data: {
              tool_name: toolRun.tool.name,
              error: String(error)
            }
          });
          throw error;
        }
      },
      {
        data: {
          name: toolRun.tool.name
        }
      }
    );
  }
  try {
    const results = await Promise.all(toolRuns.map(runSingleTool));
    return results;
  } catch (e7) {
    throw new ToolCallError(
      `Failed to run function tools: ${e7}`,
      e7,
      state
    );
  }
}
async function _runComputerActionAndScreenshot(computer, toolCall) {
  const action = toolCall.action;
  let screenshot;
  switch (action.type) {
    case "click":
      await computer.click(action.x, action.y, action.button);
      break;
    case "double_click":
      await computer.doubleClick(action.x, action.y);
      break;
    case "drag":
      await computer.drag(action.path.map((p19) => [p19.x, p19.y]));
      break;
    case "keypress":
      await computer.keypress(action.keys);
      break;
    case "move":
      await computer.move(action.x, action.y);
      break;
    case "screenshot":
      screenshot = await computer.screenshot();
      break;
    case "scroll":
      await computer.scroll(
        action.x,
        action.y,
        action.scroll_x,
        action.scroll_y
      );
      break;
    case "type":
      await computer.type(action.text);
      break;
    case "wait":
      await computer.wait();
      break;
    default:
      action;
      break;
  }
  if (typeof screenshot !== "undefined") {
    return screenshot;
  }
  if (typeof computer.screenshot === "function") {
    screenshot = await computer.screenshot();
    if (typeof screenshot !== "undefined") {
      return screenshot;
    }
  }
  throw new Error("Computer does not implement screenshot()");
}
async function executeComputerActions(agent2, actions, runner, runContext, customLogger = void 0) {
  const _logger = customLogger ?? logger_default;
  const results = [];
  for (const action of actions) {
    const computer = action.computer.computer;
    const toolCall = action.toolCall;
    runner.emit("agent_tool_start", runContext, agent2, action.computer, {
      toolCall
    });
    if (typeof agent2.emit === "function") {
      agent2.emit("agent_tool_start", runContext, action.computer, { toolCall });
    }
    let output;
    try {
      output = await _runComputerActionAndScreenshot(computer, toolCall);
    } catch (err) {
      _logger.error("Failed to execute computer action:", err);
      output = "";
    }
    runner.emit("agent_tool_end", runContext, agent2, action.computer, output, {
      toolCall
    });
    if (typeof agent2.emit === "function") {
      agent2.emit("agent_tool_end", runContext, action.computer, output, {
        toolCall
      });
    }
    const imageUrl = output ? `data:image/png;base64,${output}` : "";
    const rawItem = {
      type: "computer_call_result",
      callId: toolCall.callId,
      output: { type: "computer_screenshot", data: imageUrl }
    };
    results.push(new RunToolCallOutputItem(rawItem, agent2, imageUrl));
  }
  return results;
}
async function executeHandoffCalls(agent2, originalInput, preStepItems, newStepItems, newResponse, runHandoffs, runner, runContext) {
  newStepItems = [...newStepItems];
  if (runHandoffs.length === 0) {
    logger_default.warn(
      "Incorrectly called executeHandoffCalls with no handoffs. This should not happen. Moving on."
    );
    return new SingleStepResult(
      originalInput,
      newResponse,
      preStepItems,
      newStepItems,
      { type: "next_step_run_again" }
    );
  }
  if (runHandoffs.length > 1) {
    const outputMessage = "Multiple handoffs detected, ignoring this one.";
    for (let i21 = 1; i21 < runHandoffs.length; i21++) {
      newStepItems.push(
        new RunToolCallOutputItem(
          getToolCallOutputItem(runHandoffs[i21].toolCall, outputMessage),
          agent2,
          outputMessage
        )
      );
    }
  }
  const actualHandoff = runHandoffs[0];
  return withHandoffSpan(
    async (handoffSpan) => {
      const handoff2 = actualHandoff.handoff;
      const newAgent = await handoff2.onInvokeHandoff(
        runContext,
        actualHandoff.toolCall.arguments
      );
      handoffSpan.spanData.to_agent = newAgent.name;
      if (runHandoffs.length > 1) {
        const requestedAgents = runHandoffs.map((h22) => h22.handoff.agentName);
        handoffSpan.setError({
          message: "Multiple handoffs requested",
          data: {
            requested_agents: requestedAgents
          }
        });
      }
      newStepItems.push(
        new RunHandoffOutputItem(
          getToolCallOutputItem(
            actualHandoff.toolCall,
            getTransferMessage(newAgent)
          ),
          agent2,
          newAgent
        )
      );
      runner.emit("agent_handoff", runContext, agent2, newAgent);
      agent2.emit("agent_handoff", runContext, newAgent);
      const inputFilter = handoff2.inputFilter ?? runner.config.handoffInputFilter;
      if (inputFilter) {
        logger_default.debug("Filtering inputs for handoff");
        if (typeof inputFilter !== "function") {
          handoffSpan.setError({
            message: "Invalid input filter",
            data: {
              details: "not callable"
            }
          });
        }
        const handoffInputData = {
          inputHistory: Array.isArray(originalInput) ? [...originalInput] : originalInput,
          preHandoffItems: [...preStepItems],
          newItems: [...newStepItems],
          runContext
        };
        const filtered = inputFilter(handoffInputData);
        originalInput = filtered.inputHistory;
        preStepItems = filtered.preHandoffItems;
        newStepItems = filtered.newItems;
      }
      return new SingleStepResult(
        originalInput,
        newResponse,
        preStepItems,
        newStepItems,
        { type: "next_step_handoff", newAgent }
      );
    },
    {
      data: {
        from_agent: agent2.name
      }
    }
  );
}
var NOT_FINAL_OUTPUT = {
  isFinalOutput: false,
  isInterrupted: void 0
};
async function checkForFinalOutputFromTools(agent2, toolResults, state) {
  if (toolResults.length === 0) {
    return NOT_FINAL_OUTPUT;
  }
  const interruptions = toolResults.filter((r39) => r39.runItem instanceof RunToolApprovalItem).map((r39) => r39.runItem);
  if (interruptions.length > 0) {
    return {
      isFinalOutput: false,
      isInterrupted: true,
      interruptions
    };
  }
  if (agent2.toolUseBehavior === "run_llm_again") {
    return NOT_FINAL_OUTPUT;
  }
  const firstToolResult = toolResults[0];
  if (agent2.toolUseBehavior === "stop_on_first_tool") {
    if (firstToolResult?.type === "function_output") {
      const stringOutput = toSmartString(firstToolResult.output);
      return {
        isFinalOutput: true,
        isInterrupted: void 0,
        finalOutput: stringOutput
      };
    }
    return NOT_FINAL_OUTPUT;
  }
  const toolUseBehavior = agent2.toolUseBehavior;
  if (typeof toolUseBehavior === "object") {
    const stoppingTool = toolResults.find(
      (r39) => toolUseBehavior.stopAtToolNames.includes(r39.tool.name)
    );
    if (stoppingTool?.type === "function_output") {
      const stringOutput = toSmartString(stoppingTool.output);
      return {
        isFinalOutput: true,
        isInterrupted: void 0,
        finalOutput: stringOutput
      };
    }
    return NOT_FINAL_OUTPUT;
  }
  if (typeof toolUseBehavior === "function") {
    return toolUseBehavior(state._context, toolResults);
  }
  throw new UserError(`Invalid toolUseBehavior: ${toolUseBehavior}`, state);
}
function addStepToRunResult(result, step) {
  for (const item of step.newStepItems) {
    let itemName;
    if (item instanceof RunMessageOutputItem) {
      itemName = "message_output_created";
    } else if (item instanceof RunHandoffCallItem) {
      itemName = "handoff_requested";
    } else if (item instanceof RunHandoffOutputItem) {
      itemName = "handoff_occurred";
    } else if (item instanceof RunToolCallItem) {
      itemName = "tool_called";
    } else if (item instanceof RunToolCallOutputItem) {
      itemName = "tool_output";
    } else if (item instanceof RunReasoningItem) {
      itemName = "reasoning_item_created";
    } else if (item instanceof RunToolApprovalItem) {
      itemName = "tool_approval_requested";
    } else {
      logger_default.warn("Unknown item type: ", item);
      continue;
    }
    result._addItem(new RunItemStreamEvent(itemName, item));
  }
}
var AgentToolUseTracker = class {
  #agentToTools = /* @__PURE__ */ new Map();
  addToolUse(agent2, toolNames) {
    this.#agentToTools.set(agent2, toolNames);
  }
  hasUsedTools(agent2) {
    return this.#agentToTools.has(agent2);
  }
  toJSON() {
    return Object.fromEntries(
      Array.from(this.#agentToTools.entries()).map(([agent2, toolNames]) => {
        return [agent2.name, toolNames];
      })
    );
  }
};

// https://raw.githubusercontent.com/jeff-hykin/openai-agents-js/refs/heads/main/packages/agents-core/src/runState.ts
var CURRENT_SCHEMA_VERSION = "1.0";
var $schemaVersion = be.literal(CURRENT_SCHEMA_VERSION);
var serializedAgentSchema = be.object({
  name: be.string()
});
var serializedSpanBase = be.object({
  object: be.literal("trace.span"),
  id: be.string(),
  trace_id: be.string(),
  parent_id: be.string().nullable(),
  started_at: be.string().nullable(),
  ended_at: be.string().nullable(),
  error: be.object({
    message: be.string(),
    data: be.record(be.string(), be.any()).optional()
  }).nullable(),
  span_data: be.record(be.string(), be.any())
});
var SerializedSpan = serializedSpanBase.extend(
  {
    previous_span: be.lazy(() => SerializedSpan).optional()
  }
);
var usageSchema = be.object({
  requests: be.number(),
  inputTokens: be.number(),
  outputTokens: be.number(),
  totalTokens: be.number()
});
var modelResponseSchema = be.object({
  usage: usageSchema,
  output: be.array(OutputModelItem),
  responseId: be.string().optional(),
  providerData: be.record(be.string(), be.any()).optional()
});
var itemSchema = be.discriminatedUnion("type", [
  be.object({
    type: be.literal("message_output_item"),
    rawItem: AssistantMessageItem,
    agent: serializedAgentSchema
  }),
  be.object({
    type: be.literal("tool_call_item"),
    rawItem: ToolCallItem.or(HostedToolCallItem),
    agent: serializedAgentSchema
  }),
  be.object({
    type: be.literal("tool_call_output_item"),
    rawItem: FunctionCallResultItem,
    agent: serializedAgentSchema,
    output: be.string()
  }),
  be.object({
    type: be.literal("reasoning_item"),
    rawItem: ReasoningItem,
    agent: serializedAgentSchema
  }),
  be.object({
    type: be.literal("handoff_call_item"),
    rawItem: FunctionCallItem,
    agent: serializedAgentSchema
  }),
  be.object({
    type: be.literal("handoff_output_item"),
    rawItem: FunctionCallResultItem,
    sourceAgent: serializedAgentSchema,
    targetAgent: serializedAgentSchema
  }),
  be.object({
    type: be.literal("tool_approval_item"),
    rawItem: FunctionCallItem.or(HostedToolCallItem),
    agent: serializedAgentSchema
  })
]);
var serializedTraceSchema = be.object({
  object: be.literal("trace"),
  id: be.string(),
  workflow_name: be.string(),
  group_id: be.string().nullable(),
  metadata: be.record(be.string(), be.any())
});
var serializedProcessedResponseSchema = be.object({
  newItems: be.array(itemSchema),
  toolsUsed: be.array(be.string()),
  handoffs: be.array(
    be.object({
      toolCall: be.any(),
      handoff: be.any()
    })
  ),
  functions: be.array(
    be.object({
      toolCall: be.any(),
      tool: be.any()
    })
  ),
  computerActions: be.array(
    be.object({
      toolCall: be.any(),
      computer: be.any()
    })
  ),
  mcpApprovalRequests: be.array(
    be.object({
      requestItem: be.object({
        // protocol.HostedToolCallItem
        rawItem: be.object({
          type: be.literal("hosted_tool_call"),
          name: be.string(),
          arguments: be.string().optional(),
          status: be.string().optional(),
          output: be.string().optional(),
          // this always exists but marked as optional for early version compatibility; when releasing 1.0, we can remove the nullable and optional
          providerData: be.record(be.string(), be.any()).nullable().optional()
        })
      }),
      // HostedMCPTool
      mcpTool: be.object({
        type: be.literal("hosted_tool"),
        name: be.literal("hosted_mcp"),
        providerData: be.record(be.string(), be.any())
      })
    })
  ).optional()
});
var guardrailFunctionOutputSchema = be.object({
  tripwireTriggered: be.boolean(),
  outputInfo: be.any()
});
var inputGuardrailResultSchema = be.object({
  guardrail: be.object({
    type: be.literal("input"),
    name: be.string()
  }),
  output: guardrailFunctionOutputSchema
});
var outputGuardrailResultSchema = be.object({
  guardrail: be.object({
    type: be.literal("output"),
    name: be.string()
  }),
  agentOutput: be.any(),
  agent: serializedAgentSchema,
  output: guardrailFunctionOutputSchema
});
var SerializedRunState = be.object({
  $schemaVersion,
  currentTurn: be.number(),
  currentAgent: serializedAgentSchema,
  originalInput: be.string().or(be.array(ModelItem)),
  modelResponses: be.array(modelResponseSchema),
  context: be.object({
    usage: usageSchema,
    approvals: be.record(
      be.string(),
      be.object({
        approved: be.array(be.string()).or(be.boolean()),
        rejected: be.array(be.string()).or(be.boolean())
      })
    ),
    context: be.record(be.string(), be.any())
  }),
  toolUseTracker: be.record(be.string(), be.array(be.string())),
  maxTurns: be.number(),
  currentAgentSpan: SerializedSpan.nullable().optional(),
  noActiveAgentRun: be.boolean(),
  inputGuardrailResults: be.array(inputGuardrailResultSchema),
  outputGuardrailResults: be.array(outputGuardrailResultSchema),
  currentStep: nextStepSchema.optional(),
  lastModelResponse: modelResponseSchema.optional(),
  generatedItems: be.array(itemSchema),
  lastProcessedResponse: serializedProcessedResponseSchema.optional(),
  trace: serializedTraceSchema.nullable()
});
var RunState = class _RunState {
  /**
   * Current turn number in the conversation.
   */
  _currentTurn = 0;
  /**
   * The agent currently handling the conversation.
   */
  _currentAgent;
  /**
   * Original user input prior to any processing.
   */
  _originalInput;
  /**
   * Responses from the model so far.
   */
  _modelResponses;
  /**
   * Active tracing span for the current agent if tracing is enabled.
   */
  _currentAgentSpan;
  /**
   * Run context tracking approvals, usage, and other metadata.
   */
  _context;
  /**
   * Tracks what tools each agent has used.
   */
  _toolUseTracker;
  /**
   * Items generated by the agent during the run.
   */
  _generatedItems;
  /**
   * Maximum allowed turns before forcing termination.
   */
  _maxTurns;
  /**
   * Whether the run has an active agent step in progress.
   */
  _noActiveAgentRun = true;
  /**
   * Last model response for the previous turn.
   */
  _lastTurnResponse;
  /**
   * Results from input guardrails applied to the run.
   */
  _inputGuardrailResults;
  /**
   * Results from output guardrails applied to the run.
   */
  _outputGuardrailResults;
  /**
   * Next step computed for the agent to take.
   */
  _currentStep = void 0;
  /**
   * Parsed model response after applying guardrails and tools.
   */
  _lastProcessedResponse = void 0;
  /**
   * Trace associated with this run if tracing is enabled.
   */
  _trace = null;
  constructor(context, originalInput, startingAgent, maxTurns) {
    this._context = context;
    this._originalInput = structuredClone(originalInput);
    this._modelResponses = [];
    this._currentAgentSpan = void 0;
    this._currentAgent = startingAgent;
    this._toolUseTracker = new AgentToolUseTracker();
    this._generatedItems = [];
    this._maxTurns = maxTurns;
    this._inputGuardrailResults = [];
    this._outputGuardrailResults = [];
    this._trace = getCurrentTrace();
  }
  /**
   * Returns all interruptions if the current step is an interruption otherwise returns an empty array.
   */
  getInterruptions() {
    if (this._currentStep?.type !== "next_step_interruption") {
      return [];
    }
    return this._currentStep.data.interruptions;
  }
  /**
   * Approves a tool call requested by the agent through an interruption and approval item request.
   *
   * To approve the request use this method and then run the agent again with the same state object
   * to continue the execution.
   *
   * By default it will only approve the current tool call. To allow the tool to be used multiple
   * times throughout the run, set the `alwaysApprove` option to `true`.
   *
   * @param approvalItem - The tool call approval item to approve.
   * @param options - Options for the approval.
   */
  approve(approvalItem, options = { alwaysApprove: false }) {
    this._context.approveTool(approvalItem, options);
  }
  /**
   * Rejects a tool call requested by the agent through an interruption and approval item request.
   *
   * To reject the request use this method and then run the agent again with the same state object
   * to continue the execution.
   *
   * By default it will only reject the current tool call. To allow the tool to be used multiple
   * times throughout the run, set the `alwaysReject` option to `true`.
   *
   * @param approvalItem - The tool call approval item to reject.
   * @param options - Options for the rejection.
   */
  reject(approvalItem, options = { alwaysReject: false }) {
    this._context.rejectTool(approvalItem, options);
  }
  /**
   * Serializes the run state to a JSON object.
   *
   * This method is used to serialize the run state to a JSON object that can be used to
   * resume the run later.
   *
   * @returns The serialized run state.
   */
  toJSON() {
    const output = {
      $schemaVersion: CURRENT_SCHEMA_VERSION,
      currentTurn: this._currentTurn,
      currentAgent: {
        name: this._currentAgent.name
      },
      originalInput: this._originalInput,
      modelResponses: this._modelResponses.map((response) => {
        return {
          usage: {
            requests: response.usage.requests,
            inputTokens: response.usage.inputTokens,
            outputTokens: response.usage.outputTokens,
            totalTokens: response.usage.totalTokens
          },
          output: response.output,
          responseId: response.responseId,
          providerData: response.providerData
        };
      }),
      context: this._context.toJSON(),
      toolUseTracker: this._toolUseTracker.toJSON(),
      maxTurns: this._maxTurns,
      currentAgentSpan: this._currentAgentSpan?.toJSON(),
      noActiveAgentRun: this._noActiveAgentRun,
      inputGuardrailResults: this._inputGuardrailResults,
      outputGuardrailResults: this._outputGuardrailResults.map((r39) => ({
        ...r39,
        agent: r39.agent.toJSON()
      })),
      currentStep: this._currentStep,
      lastModelResponse: this._lastTurnResponse,
      generatedItems: this._generatedItems.map((item) => item.toJSON()),
      lastProcessedResponse: this._lastProcessedResponse,
      trace: this._trace ? this._trace.toJSON() : null
    };
    const parsed = SerializedRunState.safeParse(output);
    if (!parsed.success) {
      throw new SystemError(
        `Failed to serialize run state. ${parsed.error.message}`
      );
    }
    return parsed.data;
  }
  /**
   * Serializes the run state to a string.
   *
   * This method is used to serialize the run state to a string that can be used to
   * resume the run later.
   *
   * @returns The serialized run state.
   */
  toString() {
    return JSON.stringify(this.toJSON());
  }
  /**
   * Deserializes a run state from a string.
   *
   * This method is used to deserialize a run state from a string that was serialized using the
   * `toString` method.
   */
  static async fromString(initialAgent, str3) {
    const [parsingError, jsonResult] = await safeExecute(() => JSON.parse(str3));
    if (parsingError) {
      throw new UserError(
        `Failed to parse run state. ${parsingError instanceof Error ? parsingError.message : String(parsingError)}`
      );
    }
    const currentSchemaVersion = jsonResult.$schemaVersion;
    if (!currentSchemaVersion) {
      throw new UserError("Run state is missing schema version");
    }
    if (currentSchemaVersion !== CURRENT_SCHEMA_VERSION) {
      throw new UserError(
        `Run state schema version ${currentSchemaVersion} is not supported. Please use version ${CURRENT_SCHEMA_VERSION}`
      );
    }
    const stateJson = SerializedRunState.parse(JSON.parse(str3));
    const agentMap = buildAgentMap(initialAgent);
    const context = new RunContext(
      stateJson.context.context
    );
    context._rebuildApprovals(stateJson.context.approvals);
    const currentAgent = agentMap.get(stateJson.currentAgent.name);
    if (!currentAgent) {
      throw new UserError(`Agent ${stateJson.currentAgent.name} not found`);
    }
    const state = new _RunState(
      context,
      "",
      currentAgent,
      stateJson.maxTurns
    );
    state._currentTurn = stateJson.currentTurn;
    state._toolUseTracker = new AgentToolUseTracker();
    for (const [agentName, toolNames] of Object.entries(
      stateJson.toolUseTracker
    )) {
      state._toolUseTracker.addToolUse(
        agentMap.get(agentName),
        toolNames
      );
    }
    if (stateJson.currentAgentSpan) {
      if (!stateJson.trace) {
        logger_default.warn("Trace is not set, skipping tracing setup");
      }
      const trace = getGlobalTraceProvider().createTrace({
        traceId: stateJson.trace?.id,
        name: stateJson.trace?.workflow_name,
        groupId: stateJson.trace?.group_id ?? void 0,
        metadata: stateJson.trace?.metadata
      });
      state._currentAgentSpan = deserializeSpan(
        trace,
        stateJson.currentAgentSpan
      );
      state._trace = trace;
    }
    state._noActiveAgentRun = stateJson.noActiveAgentRun;
    state._inputGuardrailResults = stateJson.inputGuardrailResults;
    state._outputGuardrailResults = stateJson.outputGuardrailResults.map(
      (r39) => ({
        ...r39,
        agent: agentMap.get(r39.agent.name)
      })
    );
    state._currentStep = stateJson.currentStep;
    state._originalInput = stateJson.originalInput;
    state._modelResponses = stateJson.modelResponses.map(
      deserializeModelResponse
    );
    state._lastTurnResponse = stateJson.lastModelResponse ? deserializeModelResponse(stateJson.lastModelResponse) : void 0;
    state._generatedItems = stateJson.generatedItems.map(
      (item) => deserializeItem(item, agentMap)
    );
    state._lastProcessedResponse = stateJson.lastProcessedResponse ? await deserializeProcessedResponse(
      agentMap,
      state._currentAgent,
      state._context,
      stateJson.lastProcessedResponse
    ) : void 0;
    if (stateJson.currentStep?.type === "next_step_handoff") {
      state._currentStep = {
        type: "next_step_handoff",
        newAgent: agentMap.get(stateJson.currentStep.newAgent.name)
      };
    }
    return state;
  }
};
function buildAgentMap(initialAgent) {
  const map = /* @__PURE__ */ new Map();
  const queue = [initialAgent];
  while (queue.length > 0) {
    const currentAgent = queue.shift();
    if (map.has(currentAgent.name)) {
      continue;
    }
    map.set(currentAgent.name, currentAgent);
    for (const handoff2 of currentAgent.handoffs) {
      if (handoff2 instanceof Agent) {
        if (!map.has(handoff2.name)) {
          queue.push(handoff2);
        }
      } else if (handoff2.agent) {
        if (!map.has(handoff2.agent.name)) {
          queue.push(handoff2.agent);
        }
      }
    }
  }
  return map;
}
function deserializeSpan(trace, serializedSpan) {
  const spanData = serializedSpan.span_data;
  const previousSpan = serializedSpan.previous_span ? deserializeSpan(trace, serializedSpan.previous_span) : void 0;
  const span = getGlobalTraceProvider().createSpan(
    {
      spanId: serializedSpan.id,
      traceId: serializedSpan.trace_id,
      parentId: serializedSpan.parent_id ?? void 0,
      startedAt: serializedSpan.started_at ?? void 0,
      endedAt: serializedSpan.ended_at ?? void 0,
      data: spanData
    },
    trace
  );
  span.previousSpan = previousSpan;
  return span;
}
function deserializeModelResponse(serializedModelResponse) {
  const usage = new Usage();
  usage.requests = serializedModelResponse.usage.requests;
  usage.inputTokens = serializedModelResponse.usage.inputTokens;
  usage.outputTokens = serializedModelResponse.usage.outputTokens;
  usage.totalTokens = serializedModelResponse.usage.totalTokens;
  return {
    usage,
    output: serializedModelResponse.output.map(
      (item) => OutputModelItem.parse(item)
    ),
    responseId: serializedModelResponse.responseId,
    providerData: serializedModelResponse.providerData
  };
}
function deserializeItem(serializedItem, agentMap) {
  switch (serializedItem.type) {
    case "message_output_item":
      return new RunMessageOutputItem(
        serializedItem.rawItem,
        agentMap.get(serializedItem.agent.name)
      );
    case "tool_call_item":
      return new RunToolCallItem(
        serializedItem.rawItem,
        agentMap.get(serializedItem.agent.name)
      );
    case "tool_call_output_item":
      return new RunToolCallOutputItem(
        serializedItem.rawItem,
        agentMap.get(serializedItem.agent.name),
        serializedItem.output
      );
    case "reasoning_item":
      return new RunReasoningItem(
        serializedItem.rawItem,
        agentMap.get(serializedItem.agent.name)
      );
    case "handoff_call_item":
      return new RunHandoffCallItem(
        serializedItem.rawItem,
        agentMap.get(serializedItem.agent.name)
      );
    case "handoff_output_item":
      return new RunHandoffOutputItem(
        serializedItem.rawItem,
        agentMap.get(serializedItem.sourceAgent.name),
        agentMap.get(serializedItem.targetAgent.name)
      );
    case "tool_approval_item":
      return new RunToolApprovalItem(
        serializedItem.rawItem,
        agentMap.get(serializedItem.agent.name)
      );
  }
}
async function deserializeProcessedResponse(agentMap, currentAgent, context, serializedProcessedResponse) {
  const allTools = await currentAgent.getAllTools(context);
  const tools = new Map(
    allTools.filter((tool2) => tool2.type === "function").map((tool2) => [tool2.name, tool2])
  );
  const computerTools = new Map(
    allTools.filter((tool2) => tool2.type === "computer").map((tool2) => [tool2.name, tool2])
  );
  const handoffs = new Map(
    currentAgent.handoffs.map((entry) => {
      if (entry instanceof Agent) {
        return [entry.name, handoff(entry)];
      }
      return [entry.toolName, entry];
    })
  );
  const result = {
    newItems: serializedProcessedResponse.newItems.map(
      (item) => deserializeItem(item, agentMap)
    ),
    toolsUsed: serializedProcessedResponse.toolsUsed,
    handoffs: serializedProcessedResponse.handoffs.map((handoff2) => {
      if (!handoffs.has(handoff2.handoff.toolName)) {
        throw new UserError(`Handoff ${handoff2.handoff.toolName} not found`);
      }
      return {
        toolCall: handoff2.toolCall,
        handoff: handoffs.get(handoff2.handoff.toolName)
      };
    }),
    functions: await Promise.all(
      serializedProcessedResponse.functions.map(async (functionCall) => {
        if (!tools.has(functionCall.tool.name)) {
          throw new UserError(`Tool ${functionCall.tool.name} not found`);
        }
        return {
          toolCall: functionCall.toolCall,
          tool: tools.get(functionCall.tool.name)
        };
      })
    ),
    computerActions: serializedProcessedResponse.computerActions.map(
      (computerAction) => {
        const toolName = computerAction.computer.name;
        if (!computerTools.has(toolName)) {
          throw new UserError(`Computer tool ${toolName} not found`);
        }
        return {
          toolCall: computerAction.toolCall,
          computer: computerTools.get(toolName)
        };
      }
    ),
    mcpApprovalRequests: (serializedProcessedResponse.mcpApprovalRequests ?? []).map((approvalRequest) => ({
      requestItem: new RunToolApprovalItem(
        approvalRequest.requestItem.rawItem,
        currentAgent
      ),
      mcpTool: approvalRequest.mcpTool
    }))
  };
  return {
    ...result,
    hasToolsOrApprovalsToRun() {
      return result.handoffs.length > 0 || result.functions.length > 0 || result.mcpApprovalRequests.length > 0 || result.computerActions.length > 0;
    }
  };
}

// https://raw.githubusercontent.com/jeff-hykin/openai-agents-js/refs/heads/main/packages/agents-core/src/run.ts
var DEFAULT_MAX_TURNS = 10;
function getTracing(tracingDisabled, traceIncludeSensitiveData) {
  if (tracingDisabled) {
    return false;
  }
  if (traceIncludeSensitiveData) {
    return true;
  }
  return "enabled_without_data";
}
function getTurnInput(originalInput, generatedItems) {
  const rawItems = generatedItems.filter((item) => item.type !== "tool_approval_item").map((item) => item.rawItem);
  if (typeof originalInput === "string") {
    originalInput = [{ type: "message", role: "user", content: originalInput }];
  }
  return [...originalInput, ...rawItems];
}
var Runner = class extends RunHooks {
  config;
  inputGuardrailDefs;
  outputGuardrailDefs;
  constructor(config = {}) {
    super();
    this.config = {
      modelProvider: config.modelProvider ?? getDefaultModelProvider(),
      model: config.model,
      modelSettings: config.modelSettings,
      handoffInputFilter: config.handoffInputFilter,
      inputGuardrails: config.inputGuardrails,
      outputGuardrails: config.outputGuardrails,
      tracingDisabled: config.tracingDisabled ?? false,
      traceIncludeSensitiveData: config.traceIncludeSensitiveData ?? true,
      workflowName: config.workflowName ?? "Agent workflow",
      traceId: config.traceId,
      groupId: config.groupId,
      traceMetadata: config.traceMetadata
    };
    this.inputGuardrailDefs = (config.inputGuardrails ?? []).map(
      defineInputGuardrail
    );
    this.outputGuardrailDefs = (config.outputGuardrails ?? []).map(
      defineOutputGuardrail
    );
  }
  /**
   * @internal
   */
  async #runIndividualNonStream(startingAgent, input, options) {
    return withNewSpanContext(async () => {
      const state = input instanceof RunState ? input : new RunState(
        options.context instanceof RunContext ? options.context : new RunContext(options.context),
        input,
        startingAgent,
        options.maxTurns ?? DEFAULT_MAX_TURNS
      );
      try {
        while (true) {
          let model2 = selectModel(state._currentAgent.model, this.config.model);
          if (typeof model2 === "string") {
            model2 = await this.config.modelProvider.getModel(model2);
          }
          state._currentStep = state._currentStep ?? {
            type: "next_step_run_again"
          };
          if (state._currentStep.type === "next_step_interruption") {
            logger_default.debug("Continuing from interruption");
            if (!state._lastTurnResponse || !state._lastProcessedResponse) {
              throw new UserError(
                "No model response found in previous state",
                state
              );
            }
            const turnResult = await executeInterruptedToolsAndSideEffects(
              state._currentAgent,
              state._originalInput,
              state._generatedItems,
              state._lastTurnResponse,
              state._lastProcessedResponse,
              this,
              state
            );
            state._toolUseTracker.addToolUse(
              state._currentAgent,
              state._lastProcessedResponse.toolsUsed
            );
            state._originalInput = turnResult.originalInput;
            state._generatedItems = turnResult.generatedItems;
            state._currentStep = turnResult.nextStep;
            if (turnResult.nextStep.type === "next_step_interruption") {
              return new RunResult(state);
            }
            continue;
          }
          if (state._currentStep.type === "next_step_run_again") {
            const handoffs = [];
            if (state._currentAgent.handoffs) {
              handoffs.push(...state._currentAgent.handoffs.map(getHandoff));
            }
            if (!state._currentAgentSpan) {
              const handoffNames = handoffs.map((h22) => h22.agentName);
              state._currentAgentSpan = createAgentSpan({
                data: {
                  name: state._currentAgent.name,
                  handoffs: handoffNames,
                  output_type: state._currentAgent.outputSchemaName
                }
              });
              state._currentAgentSpan.start();
              setCurrentSpan(state._currentAgentSpan);
            }
            const tools = await state._currentAgent.getAllTools(state._context);
            const serializedTools = tools.map((t9) => serializeTool(t9));
            const serializedHandoffs = handoffs.map((h22) => serializeHandoff(h22));
            if (state._currentAgentSpan) {
              state._currentAgentSpan.spanData.tools = tools.map((t9) => t9.name);
            }
            state._currentTurn++;
            if (state._currentTurn > state._maxTurns) {
              state._currentAgentSpan?.setError({
                message: "Max turns exceeded",
                data: { max_turns: state._maxTurns }
              });
              throw new MaxTurnsExceededError(
                `Max turns (${state._maxTurns}) exceeded`,
                state
              );
            }
            logger_default.debug(
              `Running agent ${state._currentAgent.name} (turn ${state._currentTurn})`
            );
            if (state._currentTurn === 1) {
              await this.#runInputGuardrails(state);
            }
            const turnInput = getTurnInput(
              state._originalInput,
              state._generatedItems
            );
            if (state._noActiveAgentRun) {
              state._currentAgent.emit(
                "agent_start",
                state._context,
                state._currentAgent
              );
              this.emit("agent_start", state._context, state._currentAgent);
            }
            let modelSettings = {
              ...this.config.modelSettings,
              ...state._currentAgent.modelSettings
            };
            modelSettings = maybeResetToolChoice(
              state._currentAgent,
              state._toolUseTracker,
              modelSettings
            );
            state._lastTurnResponse = await model2.getResponse({
              systemInstructions: await state._currentAgent.getSystemPrompt(
                state._context
              ),
              prompt: await state._currentAgent.getPrompt(state._context),
              input: turnInput,
              previousResponseId: options.previousResponseId,
              modelSettings,
              tools: serializedTools,
              outputType: convertAgentOutputTypeToSerializable(
                state._currentAgent.outputType
              ),
              handoffs: serializedHandoffs,
              tracing: getTracing(
                this.config.tracingDisabled,
                this.config.traceIncludeSensitiveData
              ),
              signal: options.signal
            });
            state._modelResponses.push(state._lastTurnResponse);
            state._context.usage.add(state._lastTurnResponse.usage);
            state._noActiveAgentRun = false;
            const processedResponse = processModelResponse(
              state._lastTurnResponse,
              state._currentAgent,
              tools,
              handoffs
            );
            state._lastProcessedResponse = processedResponse;
            const turnResult = await executeToolsAndSideEffects(
              state._currentAgent,
              state._originalInput,
              state._generatedItems,
              state._lastTurnResponse,
              state._lastProcessedResponse,
              this,
              state
            );
            state._toolUseTracker.addToolUse(
              state._currentAgent,
              state._lastProcessedResponse.toolsUsed
            );
            state._originalInput = turnResult.originalInput;
            state._generatedItems = turnResult.generatedItems;
            state._currentStep = turnResult.nextStep;
          }
          if (state._currentStep && state._currentStep.type === "next_step_final_output") {
            await this.#runOutputGuardrails(state, state._currentStep.output);
            this.emit(
              "agent_end",
              state._context,
              state._currentAgent,
              state._currentStep.output
            );
            state._currentAgent.emit(
              "agent_end",
              state._context,
              state._currentStep.output
            );
            return new RunResult(state);
          } else if (state._currentStep && state._currentStep.type === "next_step_handoff") {
            state._currentAgent = state._currentStep.newAgent;
            if (state._currentAgentSpan) {
              state._currentAgentSpan.end();
              resetCurrentSpan();
              state._currentAgentSpan = void 0;
            }
            state._noActiveAgentRun = true;
            state._currentStep = { type: "next_step_run_again" };
          } else if (state._currentStep && state._currentStep.type === "next_step_interruption") {
            return new RunResult(state);
          } else {
            logger_default.debug("Running next loop");
          }
        }
      } catch (err) {
        if (state._currentAgentSpan) {
          state._currentAgentSpan.setError({
            message: "Error in agent run",
            data: { error: String(err) }
          });
        }
        throw err;
      } finally {
        if (state._currentAgentSpan) {
          if (state._currentStep?.type !== "next_step_interruption") {
            state._currentAgentSpan.end();
          }
          resetCurrentSpan();
        }
      }
    });
  }
  async #runInputGuardrails(state) {
    const guardrails = this.inputGuardrailDefs.concat(
      state._currentAgent.inputGuardrails.map(defineInputGuardrail)
    );
    if (guardrails.length > 0) {
      const guardrailArgs = {
        agent: state._currentAgent,
        input: state._originalInput,
        context: state._context
      };
      try {
        const results = await Promise.all(
          guardrails.map(async (guardrail) => {
            return withGuardrailSpan(
              async (span) => {
                const result = await guardrail.run(guardrailArgs);
                span.spanData.triggered = result.output.tripwireTriggered;
                return result;
              },
              { data: { name: guardrail.name } },
              state._currentAgentSpan
            );
          })
        );
        for (const result of results) {
          if (result.output.tripwireTriggered) {
            if (state._currentAgentSpan) {
              state._currentAgentSpan.setError({
                message: "Guardrail tripwire triggered",
                data: { guardrail: result.guardrail.name }
              });
            }
            throw new InputGuardrailTripwireTriggered(
              `Input guardrail triggered: ${JSON.stringify(result.output.outputInfo)}`,
              result,
              state
            );
          }
        }
      } catch (e7) {
        if (e7 instanceof InputGuardrailTripwireTriggered) {
          throw e7;
        }
        state._currentTurn--;
        throw new GuardrailExecutionError(
          `Input guardrail failed to complete: ${e7}`,
          e7,
          state
        );
      }
    }
  }
  async #runOutputGuardrails(state, output) {
    const guardrails = this.outputGuardrailDefs.concat(
      state._currentAgent.outputGuardrails.map(defineOutputGuardrail)
    );
    if (guardrails.length > 0) {
      const agentOutput = state._currentAgent.processFinalOutput(output);
      const guardrailArgs = {
        agent: state._currentAgent,
        agentOutput,
        context: state._context,
        details: { modelResponse: state._lastTurnResponse }
      };
      try {
        const results = await Promise.all(
          guardrails.map(async (guardrail) => {
            return withGuardrailSpan(
              async (span) => {
                const result = await guardrail.run(guardrailArgs);
                span.spanData.triggered = result.output.tripwireTriggered;
                return result;
              },
              { data: { name: guardrail.name } },
              state._currentAgentSpan
            );
          })
        );
        for (const result of results) {
          if (result.output.tripwireTriggered) {
            if (state._currentAgentSpan) {
              state._currentAgentSpan.setError({
                message: "Guardrail tripwire triggered",
                data: { guardrail: result.guardrail.name }
              });
            }
            throw new OutputGuardrailTripwireTriggered(
              `Output guardrail triggered: ${JSON.stringify(result.output.outputInfo)}`,
              result,
              state
            );
          }
        }
      } catch (e7) {
        if (e7 instanceof OutputGuardrailTripwireTriggered) {
          throw e7;
        }
        throw new GuardrailExecutionError(
          `Output guardrail failed to complete: ${e7}`,
          e7,
          state
        );
      }
    }
  }
  /**
   * @internal
   */
  async #runStreamLoop(result, options) {
    try {
      while (true) {
        const currentAgent = result.state._currentAgent;
        const handoffs = currentAgent.handoffs.map(getHandoff);
        const tools = await currentAgent.getAllTools(result.state._context);
        const serializedTools = tools.map((t9) => serializeTool(t9));
        const serializedHandoffs = handoffs.map((h22) => serializeHandoff(h22));
        result.state._currentStep = result.state._currentStep ?? {
          type: "next_step_run_again"
        };
        if (result.state._currentStep.type === "next_step_interruption") {
          logger_default.debug("Continuing from interruption");
          if (!result.state._lastTurnResponse || !result.state._lastProcessedResponse) {
            throw new UserError(
              "No model response found in previous state",
              result.state
            );
          }
          const turnResult = await executeInterruptedToolsAndSideEffects(
            result.state._currentAgent,
            result.state._originalInput,
            result.state._generatedItems,
            result.state._lastTurnResponse,
            result.state._lastProcessedResponse,
            this,
            result.state
          );
          addStepToRunResult(result, turnResult);
          result.state._toolUseTracker.addToolUse(
            result.state._currentAgent,
            result.state._lastProcessedResponse.toolsUsed
          );
          result.state._originalInput = turnResult.originalInput;
          result.state._generatedItems = turnResult.generatedItems;
          result.state._currentStep = turnResult.nextStep;
          if (turnResult.nextStep.type === "next_step_interruption") {
            return;
          }
          continue;
        }
        if (result.state._currentStep.type === "next_step_run_again") {
          if (!result.state._currentAgentSpan) {
            const handoffNames = handoffs.map((h22) => h22.agentName);
            result.state._currentAgentSpan = createAgentSpan({
              data: {
                name: currentAgent.name,
                handoffs: handoffNames,
                tools: tools.map((t9) => t9.name),
                output_type: currentAgent.outputSchemaName
              }
            });
            result.state._currentAgentSpan.start();
            setCurrentSpan(result.state._currentAgentSpan);
          }
          result.state._currentTurn++;
          if (result.state._currentTurn > result.state._maxTurns) {
            result.state._currentAgentSpan?.setError({
              message: "Max turns exceeded",
              data: { max_turns: result.state._maxTurns }
            });
            throw new MaxTurnsExceededError(
              `Max turns (${result.state._maxTurns}) exceeded`,
              result.state
            );
          }
          logger_default.debug(
            `Running agent ${currentAgent.name} (turn ${result.state._currentTurn})`
          );
          let model2 = selectModel(currentAgent.model, this.config.model);
          if (typeof model2 === "string") {
            model2 = await this.config.modelProvider.getModel(model2);
          }
          if (result.state._currentTurn === 1) {
            await this.#runInputGuardrails(result.state);
          }
          let modelSettings = {
            ...this.config.modelSettings,
            ...currentAgent.modelSettings
          };
          modelSettings = maybeResetToolChoice(
            currentAgent,
            result.state._toolUseTracker,
            modelSettings
          );
          const turnInput = getTurnInput(result.input, result.newItems);
          if (result.state._noActiveAgentRun) {
            currentAgent.emit(
              "agent_start",
              result.state._context,
              currentAgent
            );
            this.emit("agent_start", result.state._context, currentAgent);
          }
          let finalResponse = void 0;
          for await (const event of model2.getStreamedResponse({
            systemInstructions: await currentAgent.getSystemPrompt(
              result.state._context
            ),
            prompt: await currentAgent.getPrompt(result.state._context),
            input: turnInput,
            previousResponseId: options.previousResponseId,
            modelSettings,
            tools: serializedTools,
            handoffs: serializedHandoffs,
            outputType: convertAgentOutputTypeToSerializable(
              currentAgent.outputType
            ),
            tracing: getTracing(
              this.config.tracingDisabled,
              this.config.traceIncludeSensitiveData
            ),
            signal: options.signal
          })) {
            if (event.type === "response_done") {
              const parsed = StreamEventResponseCompleted.parse(event);
              finalResponse = {
                usage: new Usage(parsed.response.usage),
                output: parsed.response.output,
                responseId: parsed.response.id
              };
            }
            if (result.cancelled) {
              return;
            }
            result._addItem(new RunRawModelStreamEvent(event));
          }
          result.state._noActiveAgentRun = false;
          if (!finalResponse) {
            throw new ModelBehaviorError(
              "Model did not produce a final response!",
              result.state
            );
          }
          result.state._lastTurnResponse = finalResponse;
          result.state._modelResponses.push(result.state._lastTurnResponse);
          const processedResponse = processModelResponse(
            result.state._lastTurnResponse,
            currentAgent,
            tools,
            handoffs
          );
          result.state._lastProcessedResponse = processedResponse;
          const turnResult = await executeToolsAndSideEffects(
            currentAgent,
            result.state._originalInput,
            result.state._generatedItems,
            result.state._lastTurnResponse,
            result.state._lastProcessedResponse,
            this,
            result.state
          );
          addStepToRunResult(result, turnResult);
          result.state._toolUseTracker.addToolUse(
            currentAgent,
            processedResponse.toolsUsed
          );
          result.state._originalInput = turnResult.originalInput;
          result.state._generatedItems = turnResult.generatedItems;
          result.state._currentStep = turnResult.nextStep;
        }
        if (result.state._currentStep.type === "next_step_final_output") {
          await this.#runOutputGuardrails(
            result.state,
            result.state._currentStep.output
          );
          return;
        } else if (result.state._currentStep.type === "next_step_interruption") {
          return;
        } else if (result.state._currentStep.type === "next_step_handoff") {
          result.state._currentAgent = result.state._currentStep?.newAgent;
          if (result.state._currentAgentSpan) {
            result.state._currentAgentSpan.end();
            resetCurrentSpan();
          }
          result.state._currentAgentSpan = void 0;
          result._addItem(
            new RunAgentUpdatedStreamEvent(result.state._currentAgent)
          );
          result.state._noActiveAgentRun = true;
          result.state._currentStep = {
            type: "next_step_run_again"
          };
        } else {
          logger_default.debug("Running next loop");
        }
      }
    } catch (error) {
      if (result.state._currentAgentSpan) {
        result.state._currentAgentSpan.setError({
          message: "Error in agent run",
          data: { error: String(error) }
        });
      }
      throw error;
    } finally {
      if (result.state._currentAgentSpan) {
        if (result.state._currentStep?.type !== "next_step_interruption") {
          result.state._currentAgentSpan.end();
        }
        resetCurrentSpan();
      }
    }
  }
  /**
   * @internal
   */
  async #runIndividualStream(agent2, input, options) {
    options = options ?? {};
    return withNewSpanContext(async () => {
      const state = input instanceof RunState ? input : new RunState(
        options.context instanceof RunContext ? options.context : new RunContext(options.context),
        input,
        agent2,
        options.maxTurns ?? DEFAULT_MAX_TURNS
      );
      const result = new StreamedRunResult({
        signal: options.signal,
        state
      });
      result.maxTurns = options.maxTurns ?? state._maxTurns;
      this.#runStreamLoop(result, options).then(
        () => {
          result._done();
        },
        (err) => {
          result._raiseError(err);
        }
      );
      return result;
    });
  }
  run(agent2, input, options = {
    stream: false,
    context: void 0
  }) {
    if (input instanceof RunState && input._trace) {
      return withTrace(input._trace, async () => {
        if (input._currentAgentSpan) {
          setCurrentSpan(input._currentAgentSpan);
        }
        if (options?.stream) {
          return this.#runIndividualStream(agent2, input, options);
        } else {
          return this.#runIndividualNonStream(agent2, input, options);
        }
      });
    }
    return getOrCreateTrace(
      async () => {
        if (options?.stream) {
          return this.#runIndividualStream(agent2, input, options);
        } else {
          return this.#runIndividualNonStream(agent2, input, options);
        }
      },
      {
        traceId: this.config.traceId,
        name: this.config.workflowName,
        groupId: this.config.groupId,
        metadata: this.config.traceMetadata
      }
    );
  }
};
var _defaultRunner = void 0;
function getDefaultRunner() {
  if (_defaultRunner) {
    return _defaultRunner;
  }
  _defaultRunner = new Runner();
  return _defaultRunner;
}
function selectModel(agentModel, runConfigModel) {
  if (typeof agentModel === "string" && agentModel !== Agent.DEFAULT_MODEL_PLACEHOLDER || agentModel) {
    return agentModel;
  }
  return runConfigModel ?? agentModel ?? Agent.DEFAULT_MODEL_PLACEHOLDER;
}
async function run(agent2, input, options) {
  const runner = getDefaultRunner();
  if (options?.stream) {
    return await runner.run(agent2, input, options);
  } else {
    return await runner.run(agent2, input, options);
  }
}

// https://raw.githubusercontent.com/jeff-hykin/openai-agents-js/refs/heads/main/packages/agents-core/src/agent.ts
var Agent = class _Agent extends AgentHooks {
  /**
   * Create an Agent with handoffs and automatically infer the union type for TOutput from the handoff agents' output types.
   */
  static create(config) {
    return new _Agent({
      ...config,
      handoffs: config.handoffs,
      outputType: config.outputType,
      handoffOutputTypeWarningEnabled: false
    });
  }
  static DEFAULT_MODEL_PLACEHOLDER = "";
  name;
  instructions;
  prompt;
  handoffDescription;
  handoffs;
  model;
  modelSettings;
  tools;
  mcpServers;
  inputGuardrails;
  outputGuardrails;
  outputType = "text";
  toolUseBehavior;
  resetToolChoice;
  constructor(config) {
    super();
    if (typeof config.name !== "string" || config.name.trim() === "") {
      throw new UserError("Agent must have a name.");
    }
    this.name = config.name;
    this.instructions = config.instructions ?? _Agent.DEFAULT_MODEL_PLACEHOLDER;
    this.prompt = config.prompt;
    this.handoffDescription = config.handoffDescription ?? "";
    this.handoffs = config.handoffs ?? [];
    this.model = config.model ?? "";
    this.modelSettings = config.modelSettings ?? {};
    this.tools = config.tools ?? [];
    this.mcpServers = config.mcpServers ?? [];
    this.inputGuardrails = config.inputGuardrails ?? [];
    this.outputGuardrails = config.outputGuardrails ?? [];
    if (config.outputType) {
      this.outputType = config.outputType;
    }
    this.toolUseBehavior = config.toolUseBehavior ?? "run_llm_again";
    this.resetToolChoice = config.resetToolChoice ?? true;
    if (config.handoffOutputTypeWarningEnabled === void 0 || config.handoffOutputTypeWarningEnabled) {
      if (this.handoffs && this.outputType) {
        const outputTypes = /* @__PURE__ */ new Set([JSON.stringify(this.outputType)]);
        for (const h22 of this.handoffs) {
          if ("outputType" in h22 && h22.outputType) {
            outputTypes.add(JSON.stringify(h22.outputType));
          } else if ("agent" in h22 && h22.agent.outputType) {
            outputTypes.add(JSON.stringify(h22.agent.outputType));
          }
        }
        if (outputTypes.size > 1) {
          logger_default.warn(
            `[Agent] Warning: Handoff agents have different output types: ${Array.from(outputTypes).join(", ")}. You can make it type-safe by using Agent.create({ ... }) method instead.`
          );
        }
      }
    }
  }
  /**
   * Output schema name.
   */
  get outputSchemaName() {
    if (this.outputType === "text") {
      return "text";
    } else if (isZodObject(this.outputType)) {
      return "ZodOutput";
    } else if (typeof this.outputType === "object") {
      return this.outputType.name;
    }
    throw new Error(`Unknown output type: ${this.outputType}`);
  }
  /**
   * Makes a copy of the agent, with the given arguments changed. For example, you could do:
   *
   * ```
   * const newAgent = agent.clone({ instructions: 'New instructions' })
   * ```
   *
   * @param config - A partial configuration to change.
   * @returns A new agent with the given changes.
   */
  clone(config) {
    return new _Agent({
      ...this,
      ...config
    });
  }
  /**
   * Transform this agent into a tool, callable by other agents.
   *
   * This is different from handoffs in two ways:
   * 1. In handoffs, the new agent receives the conversation history. In this tool, the new agent
   *    receives generated input.
   * 2. In handoffs, the new agent takes over the conversation. In this tool, the new agent is
   *    called as a tool, and the conversation is continued by the original agent.
   *
   * @param options - Options for the tool.
   * @returns A tool that runs the agent and returns the output text.
   */
  asTool(options) {
    const { toolName, toolDescription, customOutputExtractor } = options;
    return tool({
      name: toolName ?? toFunctionToolName(this.name),
      description: toolDescription ?? "",
      parameters: {
        type: "object",
        properties: {
          input: {
            type: "string"
          }
        },
        required: ["input"],
        additionalProperties: false
      },
      strict: true,
      execute: async (data, context) => {
        if (!isAgentToolInput(data)) {
          throw new ModelBehaviorError("Agent tool called with invalid input");
        }
        const runner = new Runner();
        const result = await runner.run(this, data.input, {
          context: context?.context
        });
        if (typeof customOutputExtractor === "function") {
          return customOutputExtractor(result);
        }
        return getOutputText(
          result.rawResponses[result.rawResponses.length - 1]
        );
      }
    });
  }
  /**
   * Returns the system prompt for the agent.
   *
   * If the agent has a function as its instructions, this function will be called with the
   * runContext and the agent instance.
   */
  async getSystemPrompt(runContext) {
    if (typeof this.instructions === "function") {
      return await this.instructions(runContext, this);
    }
    return this.instructions;
  }
  /**
   * Returns the prompt template for the agent, if defined.
   *
   * If the agent has a function as its prompt, this function will be called with the
   * runContext and the agent instance.
   */
  async getPrompt(runContext) {
    if (typeof this.prompt === "function") {
      return await this.prompt(runContext, this);
    }
    return this.prompt;
  }
  /**
   * Fetches the available tools from the MCP servers.
   * @returns the MCP powered tools
   */
  async getMcpTools(runContext) {
    if (this.mcpServers.length > 0) {
      return getAllMcpTools(this.mcpServers, runContext, this, false);
    }
    return [];
  }
  /**
   * ALl agent tools, including the MCPl and function tools.
   *
   * @returns all configured tools
   */
  async getAllTools(runContext) {
    return [...await this.getMcpTools(runContext), ...this.tools];
  }
  /**
   * Processes the final output of the agent.
   *
   * @param output - The output of the agent.
   * @returns The parsed out.
   */
  processFinalOutput(output) {
    if (this.outputType === "text") {
      return output;
    }
    if (typeof this.outputType === "object") {
      const parsed = JSON.parse(output);
      if (isZodObject(this.outputType)) {
        return this.outputType.parse(parsed);
      }
      return parsed;
    }
    throw new Error(`Unknown output type: ${this.outputType}`);
  }
  /**
   * Returns a JSON representation of the agent, which is serializable.
   *
   * @returns A JSON object containing the agent's name.
   */
  toJSON() {
    return {
      name: this.name
    };
  }
};

// https://raw.githubusercontent.com/jeff-hykin/openai-agents-js/refs/heads/main/packages/agents-core/src/index.ts
addTraceProcessor(defaultProcessor());

// https://esm.sh/openai@5.12.0/denonext/azure.mjs
import __Process$4 from "node:process";

// https://esm.sh/openai@5.12.0/denonext/internal/utils.mjs
import { Buffer as __Buffer$ } from "node:buffer";

// https://esm.sh/openai@5.12.0/denonext/internal/utils/values.mjs
var o5 = /^[a-z][a-z0-9+.-]*:/i;
var c5 = (e7) => o5.test(e7);
var n = (e7) => (n = Array.isArray, n(e7));
var u5 = n;
function y6(e7) {
  return typeof e7 != "object" ? {} : e7 ?? {};
}
function d6(e7) {
  if (!e7) return true;
  for (let r39 in e7) return false;
  return true;
}
function a2(e7, r39) {
  return Object.prototype.hasOwnProperty.call(e7, r39);
}
function b7(e7) {
  return e7 != null && typeof e7 == "object" && !Array.isArray(e7);
}
var m7 = (e7, r39) => {
  if (typeof r39 != "number" || !Number.isInteger(r39)) throw new d3(`${e7} must be an integer`);
  if (r39 < 0) throw new d3(`${e7} must be a positive integer`);
  return r39;
};
var O4 = (e7) => {
  try {
    return JSON.parse(e7);
  } catch {
    return;
  }
};

// https://esm.sh/openai@5.12.0/denonext/internal/utils/bytes.mjs
function l4(t9) {
  let e7 = 0;
  for (let n17 of t9) e7 += n17.length;
  let o18 = new Uint8Array(e7), c18 = 0;
  for (let n17 of t9) o18.set(n17, c18), c18 += n17.length;
  return o18;
}
var r33;
function f5(t9) {
  let e7;
  return (r33 ?? (e7 = new globalThis.TextEncoder(), r33 = e7.encode.bind(e7)))(t9);
}
var d7;
function i4(t9) {
  let e7;
  return (d7 ?? (e7 = new globalThis.TextDecoder(), d7 = e7.decode.bind(e7)))(t9);
}

// https://esm.sh/openai@5.12.0/denonext/internal/utils/env.mjs
import __Process$2 from "node:process";
var n2 = (e7) => {
  if (typeof (0, __Process$2) < "u") return __Process$2.env?.[e7]?.trim() ?? void 0;
  if (typeof globalThis.Deno < "u") return globalThis.Deno.env?.get?.(e7)?.trim();
};

// https://esm.sh/openai@5.12.0/denonext/internal/utils/log.mjs
var f6 = { off: 0, error: 200, warn: 300, info: 400, debug: 500 };
var w8 = (e7, r39, o18) => {
  if (e7) {
    if (a2(f6, e7)) return e7;
    p7(o18).warn(`${r39} was set to ${JSON.stringify(e7)}, expected one of ${JSON.stringify(Object.keys(f6))}`);
  }
};
function n3() {
}
function t3(e7, r39, o18) {
  return !r39 || f6[e7] > f6[o18] ? n3 : r39[e7].bind(r39);
}
var c6 = { error: n3, warn: n3, info: n3, debug: n3 };
var u6 = /* @__PURE__ */ new WeakMap();
function p7(e7) {
  let r39 = e7.logger, o18 = e7.logLevel ?? "off";
  if (!r39) return c6;
  let s9 = u6.get(r39);
  if (s9 && s9[0] === o18) return s9[1];
  let g16 = { error: t3("error", r39, o18), warn: t3("warn", r39, o18), info: t3("info", r39, o18), debug: t3("debug", r39, o18) };
  return u6.set(r39, [o18, g16]), g16;
}
var O5 = (e7) => (e7.options && (e7.options = { ...e7.options }, delete e7.options.headers), e7.headers && (e7.headers = Object.fromEntries((e7.headers instanceof Headers ? [...e7.headers] : Object.entries(e7.headers)).map(([r39, o18]) => [r39, r39.toLowerCase() === "authorization" || r39.toLowerCase() === "cookie" || r39.toLowerCase() === "set-cookie" ? "***" : o18]))), "retryOfRequestLogID" in e7 && (e7.retryOfRequestLogID && (e7.retryOf = e7.retryOfRequestLogID), delete e7.retryOfRequestLogID), e7);

// https://esm.sh/openai@5.12.0/denonext/internal/utils/uuid.mjs
var a3 = function() {
  let { crypto: n17 } = globalThis;
  if (n17?.randomUUID) return a3 = n17.randomUUID.bind(n17), n17.randomUUID();
  let t9 = new Uint8Array(1), o18 = n17 ? () => n17.getRandomValues(t9)[0] : () => Math.random() * 255 & 255;
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (r39) => (+r39 ^ o18() & 15 >> +r39 / 4).toString(16));
};

// https://esm.sh/openai@5.12.0/denonext/internal/utils/sleep.mjs
var s2 = (e7) => new Promise((o18) => setTimeout(o18, e7));

// https://esm.sh/openai@5.12.0/denonext/internal/utils.mjs
var l5 = (r39) => {
  if (typeof __Buffer$ < "u") {
    let e7 = __Buffer$.from(r39, "base64");
    return Array.from(new Float32Array(e7.buffer, e7.byteOffset, e7.length / Float32Array.BYTES_PER_ELEMENT));
  } else {
    let e7 = atob(r39), t9 = e7.length, o18 = new Uint8Array(t9);
    for (let f14 = 0; f14 < t9; f14++) o18[f14] = e7.charCodeAt(f14);
    return Array.from(new Float32Array(o18.buffer));
  }
};

// https://esm.sh/openai@5.12.0/denonext/client.mjs
import __Process$3 from "node:process";

// https://esm.sh/openai@5.12.0/denonext/internal/tslib.mjs
function n4(o18, r39, e7, t9, a11) {
  if (t9 === "m") throw new TypeError("Private method is not writable");
  if (t9 === "a" && !a11) throw new TypeError("Private accessor was defined without a setter");
  if (typeof r39 == "function" ? o18 !== r39 || !a11 : !r39.has(o18)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t9 === "a" ? a11.call(o18, e7) : a11 ? a11.value = e7 : r39.set(o18, e7), e7;
}
function i5(o18, r39, e7, t9) {
  if (e7 === "a" && !t9) throw new TypeError("Private accessor was defined without a getter");
  if (typeof r39 == "function" ? o18 !== r39 || !t9 : !r39.has(o18)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return e7 === "m" ? t9 : e7 === "a" ? t9.call(o18) : t9 ? t9.value : r39.get(o18);
}

// https://esm.sh/openai@5.12.0/denonext/version.mjs
var o6 = "5.12.0";

// https://esm.sh/openai@5.12.0/denonext/internal/shims.mjs
function l6() {
  if (typeof fetch < "u") return fetch;
  throw new Error("`fetch` is not defined as a global; Either pass `fetch` to the client, `new OpenAI({ fetch })` or polyfill the global, `globalThis.fetch = fetch`");
}
function o7(...e7) {
  let t9 = globalThis.ReadableStream;
  if (typeof t9 > "u") throw new Error("`ReadableStream` is not defined as a global; You will need to polyfill it, `globalThis.ReadableStream = ReadableStream`");
  return new t9(...e7);
}
function c7(e7) {
  let t9 = Symbol.asyncIterator in e7 ? e7[Symbol.asyncIterator]() : e7[Symbol.iterator]();
  return o7({ start() {
  }, async pull(a11) {
    let { done: r39, value: n17 } = await t9.next();
    r39 ? a11.close() : a11.enqueue(n17);
  }, async cancel() {
    await t9.return?.();
  } });
}
function i6(e7) {
  if (e7[Symbol.asyncIterator]) return e7;
  let t9 = e7.getReader();
  return { async next() {
    try {
      let a11 = await t9.read();
      return a11?.done && t9.releaseLock(), a11;
    } catch (a11) {
      throw t9.releaseLock(), a11;
    }
  }, async return() {
    let a11 = t9.cancel();
    return t9.releaseLock(), await a11, { done: true, value: void 0 };
  }, [Symbol.asyncIterator]() {
    return this;
  } };
}
async function s3(e7) {
  if (e7 === null || typeof e7 != "object") return;
  if (e7[Symbol.asyncIterator]) {
    await e7[Symbol.asyncIterator]().return?.();
    return;
  }
  let t9 = e7.getReader(), a11 = t9.cancel();
  t9.releaseLock(), await a11;
}

// https://esm.sh/openai@5.12.0/denonext/core/streaming.mjs
var h6;
var d8;
var w9 = class {
  constructor() {
    h6.set(this, void 0), d8.set(this, void 0), n4(this, h6, new Uint8Array(), "f"), n4(this, d8, null, "f");
  }
  decode(e7) {
    if (e7 == null) return [];
    let r39 = e7 instanceof ArrayBuffer ? new Uint8Array(e7) : typeof e7 == "string" ? f5(e7) : e7;
    n4(this, h6, l4([i5(this, h6, "f"), r39]), "f");
    let n17 = [], t9;
    for (; (t9 = F5(i5(this, h6, "f"), i5(this, d8, "f"))) != null; ) {
      if (t9.carriage && i5(this, d8, "f") == null) {
        n4(this, d8, t9.index, "f");
        continue;
      }
      if (i5(this, d8, "f") != null && (t9.index !== i5(this, d8, "f") + 1 || t9.carriage)) {
        n17.push(i4(i5(this, h6, "f").subarray(0, i5(this, d8, "f") - 1))), n4(this, h6, i5(this, h6, "f").subarray(i5(this, d8, "f")), "f"), n4(this, d8, null, "f");
        continue;
      }
      let o18 = i5(this, d8, "f") !== null ? t9.preceding - 1 : t9.preceding, a11 = i4(i5(this, h6, "f").subarray(0, o18));
      n17.push(a11), n4(this, h6, i5(this, h6, "f").subarray(t9.index), "f"), n4(this, d8, null, "f");
    }
    return n17;
  }
  flush() {
    return i5(this, h6, "f").length ? this.decode(`
`) : [];
  }
};
h6 = /* @__PURE__ */ new WeakMap(), d8 = /* @__PURE__ */ new WeakMap();
w9.NEWLINE_CHARS = /* @__PURE__ */ new Set([`
`, "\r"]);
w9.NEWLINE_REGEXP = /\r\n|[\n\r]/g;
function F5(i21, e7) {
  for (let t9 = e7 ?? 0; t9 < i21.length; t9++) {
    if (i21[t9] === 10) return { preceding: t9, index: t9 + 1, carriage: false };
    if (i21[t9] === 13) return { preceding: t9, index: t9 + 1, carriage: true };
  }
  return null;
}
function x6(i21) {
  for (let n17 = 0; n17 < i21.length - 1; n17++) {
    if (i21[n17] === 10 && i21[n17 + 1] === 10 || i21[n17] === 13 && i21[n17 + 1] === 13) return n17 + 2;
    if (i21[n17] === 13 && i21[n17 + 1] === 10 && n17 + 3 < i21.length && i21[n17 + 2] === 13 && i21[n17 + 3] === 10) return n17 + 4;
  }
  return -1;
}
var y7;
var N5 = class i7 {
  constructor(e7, r39, n17) {
    this.iterator = e7, y7.set(this, void 0), this.controller = r39, n4(this, y7, n17, "f");
  }
  static fromSSEResponse(e7, r39, n17) {
    let t9 = false, o18 = n17 ? p7(n17) : console;
    async function* a11() {
      if (t9) throw new d3("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");
      t9 = true;
      let c18 = false;
      try {
        for await (let s9 of R5(e7, r39)) if (!c18) {
          if (s9.data.startsWith("[DONE]")) {
            c18 = true;
            continue;
          }
          if (s9.event === null || !s9.event.startsWith("thread.")) {
            let l16;
            try {
              l16 = JSON.parse(s9.data);
            } catch (p19) {
              throw o18.error("Could not parse message into JSON:", s9.data), o18.error("From chunk:", s9.raw), p19;
            }
            if (l16 && l16.error) throw new p3(void 0, l16.error, void 0, e7.headers);
            yield l16;
          } else {
            let l16;
            try {
              l16 = JSON.parse(s9.data);
            } catch (p19) {
              throw console.error("Could not parse message into JSON:", s9.data), console.error("From chunk:", s9.raw), p19;
            }
            if (s9.event == "error") throw new p3(void 0, l16.error, l16.message, void 0);
            yield { event: s9.event, data: l16 };
          }
        }
        c18 = true;
      } catch (s9) {
        if (c3(s9)) return;
        throw s9;
      } finally {
        c18 || r39.abort();
      }
    }
    return new i7(a11, r39, n17);
  }
  static fromReadableStream(e7, r39, n17) {
    let t9 = false;
    async function* o18() {
      let c18 = new w9(), s9 = i6(e7);
      for await (let l16 of s9) for (let p19 of c18.decode(l16)) yield p19;
      for (let l16 of c18.flush()) yield l16;
    }
    async function* a11() {
      if (t9) throw new d3("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");
      t9 = true;
      let c18 = false;
      try {
        for await (let s9 of o18()) c18 || s9 && (yield JSON.parse(s9));
        c18 = true;
      } catch (s9) {
        if (c3(s9)) return;
        throw s9;
      } finally {
        c18 || r39.abort();
      }
    }
    return new i7(a11, r39, n17);
  }
  [(y7 = /* @__PURE__ */ new WeakMap(), Symbol.asyncIterator)]() {
    return this.iterator();
  }
  tee() {
    let e7 = [], r39 = [], n17 = this.iterator(), t9 = (o18) => ({ next: () => {
      if (o18.length === 0) {
        let a11 = n17.next();
        e7.push(a11), r39.push(a11);
      }
      return o18.shift();
    } });
    return [new i7(() => t9(e7), this.controller, i5(this, y7, "f")), new i7(() => t9(r39), this.controller, i5(this, y7, "f"))];
  }
  toReadableStream() {
    let e7 = this, r39;
    return o7({ async start() {
      r39 = e7[Symbol.asyncIterator]();
    }, async pull(n17) {
      try {
        let { value: t9, done: o18 } = await r39.next();
        if (o18) return n17.close();
        let a11 = f5(JSON.stringify(t9) + `
`);
        n17.enqueue(a11);
      } catch (t9) {
        n17.error(t9);
      }
    }, async cancel() {
      await r39.return?.();
    } });
  }
};
async function* R5(i21, e7) {
  if (!i21.body) throw e7.abort(), typeof globalThis.navigator < "u" && globalThis.navigator.product === "ReactNative" ? new d3("The default react-native fetch implementation does not support streaming. Please use expo/fetch: https://docs.expo.dev/versions/latest/sdk/expo/#expofetch-api") : new d3("Attempted to iterate over a response with no body");
  let r39 = new m8(), n17 = new w9(), t9 = i6(i21.body);
  for await (let o18 of D5(t9)) for (let a11 of n17.decode(o18)) {
    let c18 = r39.decode(a11);
    c18 && (yield c18);
  }
  for (let o18 of n17.flush()) {
    let a11 = r39.decode(o18);
    a11 && (yield a11);
  }
}
async function* D5(i21) {
  let e7 = new Uint8Array();
  for await (let r39 of i21) {
    if (r39 == null) continue;
    let n17 = r39 instanceof ArrayBuffer ? new Uint8Array(r39) : typeof r39 == "string" ? f5(r39) : r39, t9 = new Uint8Array(e7.length + n17.length);
    t9.set(e7), t9.set(n17, e7.length), e7 = t9;
    let o18;
    for (; (o18 = x6(e7)) !== -1; ) yield e7.slice(0, o18), e7 = e7.slice(o18);
  }
  e7.length > 0 && (yield e7);
}
var m8 = class {
  constructor() {
    this.event = null, this.data = [], this.chunks = [];
  }
  decode(e7) {
    if (e7.endsWith("\r") && (e7 = e7.substring(0, e7.length - 1)), !e7) {
      if (!this.event && !this.data.length) return null;
      let o18 = { event: this.event, data: this.data.join(`
`), raw: this.chunks };
      return this.event = null, this.data = [], this.chunks = [], o18;
    }
    if (this.chunks.push(e7), e7.startsWith(":")) return null;
    let [r39, n17, t9] = U6(e7, ":");
    return t9.startsWith(" ") && (t9 = t9.substring(1)), r39 === "event" ? this.event = t9 : r39 === "data" && this.data.push(t9), null;
  }
};
function U6(i21, e7) {
  let r39 = i21.indexOf(e7);
  return r39 !== -1 ? [i21.substring(0, r39), e7, i21.substring(r39 + e7.length)] : [i21, "", ""];
}

// https://esm.sh/openai@5.12.0/denonext/internal/parse.mjs
async function _6(t9, s9) {
  let { response: e7, requestLogID: a11, retryOfRequestLogID: i21, startTime: u18 } = s9, r39 = await (async () => {
    if (s9.options.stream) return p7(t9).debug("response", e7.status, e7.url, e7.headers, e7.body), s9.options.__streamClass ? s9.options.__streamClass.fromSSEResponse(e7, s9.controller, t9) : N5.fromSSEResponse(e7, s9.controller, t9);
    if (e7.status === 204) return null;
    if (s9.options.__binaryResponse) return e7;
    let n17 = e7.headers.get("content-type")?.split(";")[0]?.trim();
    if (n17?.includes("application/json") || n17?.endsWith("+json")) {
      let d19 = await e7.json();
      return m9(d19, e7);
    }
    return await e7.text();
  })();
  return p7(t9).debug(`[${a11}] response parsed`, O5({ retryOfRequestLogID: i21, url: e7.url, status: e7.status, body: r39, durationMs: Date.now() - u18 })), r39;
}
function m9(t9, s9) {
  return !t9 || typeof t9 != "object" || Array.isArray(t9) ? t9 : Object.defineProperty(t9, "_request_id", { value: s9.headers.get("x-request-id"), enumerable: false });
}

// https://esm.sh/openai@5.12.0/denonext/core/api-promise.mjs
var t4;
var a4 = class n5 extends Promise {
  constructor(e7, s9, r39 = _6) {
    super((o18) => {
      o18(null);
    }), this.responsePromise = s9, this.parseResponse = r39, t4.set(this, void 0), n4(this, t4, e7, "f");
  }
  _thenUnwrap(e7) {
    return new n5(i5(this, t4, "f"), this.responsePromise, async (s9, r39) => m9(e7(await this.parseResponse(s9, r39), r39), r39.response));
  }
  asResponse() {
    return this.responsePromise.then((e7) => e7.response);
  }
  async withResponse() {
    let [e7, s9] = await Promise.all([this.parse(), this.asResponse()]);
    return { data: e7, response: s9, request_id: s9.headers.get("x-request-id") };
  }
  parse() {
    return this.parsedPromise || (this.parsedPromise = this.responsePromise.then((e7) => this.parseResponse(i5(this, t4, "f"), e7))), this.parsedPromise;
  }
  then(e7, s9) {
    return this.parse().then(e7, s9);
  }
  catch(e7) {
    return this.parse().catch(e7);
  }
  finally(e7) {
    return this.parse().finally(e7);
  }
};
t4 = /* @__PURE__ */ new WeakMap();

// https://esm.sh/openai@5.12.0/denonext/core/pagination.mjs
var i8;
var r34 = class {
  constructor(t9, e7, s9, a11) {
    i8.set(this, void 0), n4(this, i8, t9, "f"), this.options = a11, this.response = e7, this.body = s9;
  }
  hasNextPage() {
    return this.getPaginatedItems().length ? this.nextPageRequestOptions() != null : false;
  }
  async getNextPage() {
    let t9 = this.nextPageRequestOptions();
    if (!t9) throw new d3("No next page expected; please check `.hasNextPage()` before calling `.getNextPage()`.");
    return await i5(this, i8, "f").requestAPIList(this.constructor, t9);
  }
  async *iterPages() {
    let t9 = this;
    for (yield t9; t9.hasNextPage(); ) t9 = await t9.getNextPage(), yield t9;
  }
  async *[(i8 = /* @__PURE__ */ new WeakMap(), Symbol.asyncIterator)]() {
    for await (let t9 of this.iterPages()) for (let e7 of t9.getPaginatedItems()) yield e7;
  }
};
var c8 = class extends a4 {
  constructor(t9, e7, s9) {
    super(t9, e7, async (a11, o18) => new s9(a11, o18.response, await _6(a11, o18), o18.options));
  }
  async *[Symbol.asyncIterator]() {
    let t9 = await this;
    for await (let e7 of t9) yield e7;
  }
};
var h7 = class extends r34 {
  constructor(t9, e7, s9, a11) {
    super(t9, e7, s9, a11), this.data = s9.data || [], this.object = s9.object;
  }
  getPaginatedItems() {
    return this.data ?? [];
  }
  nextPageRequestOptions() {
    return null;
  }
};
var l7 = class extends r34 {
  constructor(t9, e7, s9, a11) {
    super(t9, e7, s9, a11), this.data = s9.data || [], this.has_more = s9.has_more || false;
  }
  getPaginatedItems() {
    return this.data ?? [];
  }
  hasNextPage() {
    return this.has_more === false ? false : super.hasNextPage();
  }
  nextPageRequestOptions() {
    let t9 = this.getPaginatedItems(), e7 = t9[t9.length - 1]?.id;
    return e7 ? { ...this.options, query: { ...y6(this.options.query), after: e7 } } : null;
  }
};

// https://esm.sh/openai@5.12.0/denonext/internal/uploads.mjs
var y8 = () => {
  if (typeof File > "u") {
    let { process: t9 } = globalThis, e7 = typeof t9?.versions?.node == "string" && parseInt(t9.versions.node.split(".")) < 20;
    throw new Error("`File` is not defined as a global, which is required for file uploads." + (e7 ? " Update to Node 20 LTS or newer, or set `globalThis.File` to `import('node:buffer').File`." : ""));
  }
};
function c9(t9, e7, n17) {
  return y8(), new File(t9, e7 ?? "unknown_file", n17);
}
function i9(t9) {
  return (typeof t9 == "object" && t9 !== null && ("name" in t9 && t9.name && String(t9.name) || "url" in t9 && t9.url && String(t9.url) || "filename" in t9 && t9.filename && String(t9.filename) || "path" in t9 && t9.path && String(t9.path)) || "").split(/[\\/]/).pop() || void 0;
}
var d9 = (t9) => t9 != null && typeof t9 == "object" && typeof t9[Symbol.asyncIterator] == "function";
var u7 = async (t9, e7) => ({ ...t9, body: await m10(t9.body, e7) });
var f7 = /* @__PURE__ */ new WeakMap();
function w10(t9) {
  let e7 = typeof t9 == "function" ? t9 : t9.fetch, n17 = f7.get(e7);
  if (n17) return n17;
  let o18 = (async () => {
    try {
      let r39 = "Response" in e7 ? e7.Response : (await e7("data:,")).constructor, p19 = new FormData();
      return p19.toString() !== await new r39(p19).text();
    } catch {
      return true;
    }
  })();
  return f7.set(e7, o18), o18;
}
var m10 = async (t9, e7) => {
  if (!await w10(e7)) throw new TypeError("The provided fetch function does not support file uploads with the current global FormData class.");
  let n17 = new FormData();
  return await Promise.all(Object.entries(t9 || {}).map(([o18, r39]) => a5(n17, o18, r39))), n17;
};
var b8 = (t9) => t9 instanceof Blob && "name" in t9;
var a5 = async (t9, e7, n17) => {
  if (n17 !== void 0) {
    if (n17 == null) throw new TypeError(`Received null for "${e7}"; to pass null in FormData, you must use the string 'null'`);
    if (typeof n17 == "string" || typeof n17 == "number" || typeof n17 == "boolean") t9.append(e7, String(n17));
    else if (n17 instanceof Response) t9.append(e7, c9([await n17.blob()], i9(n17)));
    else if (d9(n17)) t9.append(e7, c9([await new Response(c7(n17)).blob()], i9(n17)));
    else if (b8(n17)) t9.append(e7, n17, i9(n17));
    else if (Array.isArray(n17)) await Promise.all(n17.map((o18) => a5(t9, e7 + "[]", o18)));
    else if (typeof n17 == "object") await Promise.all(Object.entries(n17).map(([o18, r39]) => a5(t9, `${e7}[${o18}]`, r39)));
    else throw new TypeError(`Invalid value given to form, expected a string, number, boolean, object, Array, File or Blob but got ${n17} instead`);
  }
};

// https://esm.sh/openai@5.12.0/denonext/core/uploads.mjs
var s4 = (t9) => t9 != null && typeof t9 == "object" && typeof t9.size == "number" && typeof t9.type == "string" && typeof t9.text == "function" && typeof t9.slice == "function" && typeof t9.arrayBuffer == "function";
var w11 = (t9) => t9 != null && typeof t9 == "object" && typeof t9.name == "string" && typeof t9.lastModified == "number" && s4(t9);
var m11 = (t9) => t9 != null && typeof t9 == "object" && typeof t9.url == "string" && typeof t9.blob == "function";
async function g7(t9, o18, r39) {
  if (y8(), t9 = await t9, w11(t9)) return t9 instanceof File ? t9 : c9([await t9.arrayBuffer()], t9.name);
  if (m11(t9)) {
    let n17 = await t9.blob();
    return o18 || (o18 = new URL(t9.url).pathname.split(/[\\/]/).pop()), c9(await e(n17), o18, r39);
  }
  let p19 = await e(t9);
  if (o18 || (o18 = i9(t9)), !r39?.type) {
    let n17 = p19.find((f14) => typeof f14 == "object" && "type" in f14 && f14.type);
    typeof n17 == "string" && (r39 = { ...r39, type: n17 });
  }
  return c9(p19, o18, r39);
}
async function e(t9) {
  let o18 = [];
  if (typeof t9 == "string" || ArrayBuffer.isView(t9) || t9 instanceof ArrayBuffer) o18.push(t9);
  else if (s4(t9)) o18.push(t9 instanceof Blob ? t9 : await t9.arrayBuffer());
  else if (d9(t9)) for await (let r39 of t9) o18.push(...await e(r39));
  else {
    let r39 = t9?.constructor?.name;
    throw new Error(`Unexpected data type: ${typeof t9}${r39 ? `; constructor: ${r39}` : ""}${B4(t9)}`);
  }
  return o18;
}
function B4(t9) {
  return typeof t9 != "object" || t9 === null ? "" : `; props: [${Object.getOwnPropertyNames(t9).map((r39) => `"${r39}"`).join(", ")}]`;
}

// https://esm.sh/openai@5.12.0/denonext/core/resource.mjs
var t5 = class {
  constructor(c18) {
    this._client = c18;
  }
};

// https://esm.sh/openai@5.12.0/denonext/internal/utils/path.mjs
function u8(c18) {
  return c18.replace(/[^A-Za-z0-9\-._~!$&'()*+,;=:@]+/g, encodeURIComponent);
}
var g8 = Object.freeze(/* @__PURE__ */ Object.create(null));
var y9 = (c18 = u8) => function(p19, ...h22) {
  if (p19.length === 1) return p19[0];
  let i21 = false, o18 = [], s9 = p19.reduce((e7, n17, r39) => {
    /[?#]/.test(n17) && (i21 = true);
    let t9 = h22[r39], a11 = (i21 ? encodeURIComponent : c18)("" + t9);
    return r39 !== h22.length && (t9 == null || typeof t9 == "object" && t9.toString === Object.getPrototypeOf(Object.getPrototypeOf(t9.hasOwnProperty ?? g8) ?? g8)?.toString) && (a11 = t9 + "", o18.push({ start: e7.length + n17.length, length: a11.length, error: `Value of type ${Object.prototype.toString.call(t9).slice(8, -1)} is not a valid path parameter` })), e7 + n17 + (r39 === h22.length ? "" : a11);
  }, ""), f14 = s9.split(/[?#]/, 1)[0], d19 = /(?<=^|\/)(?:\.|%2e){1,2}(?=\/|$)/gi, l16;
  for (; (l16 = d19.exec(f14)) !== null; ) o18.push({ start: l16.index, length: l16[0].length, error: `Value "${l16[0]}" can't be safely passed as a path parameter` });
  if (o18.sort((e7, n17) => e7.start - n17.start), o18.length > 0) {
    let e7 = 0, n17 = o18.reduce((r39, t9) => {
      let a11 = " ".repeat(t9.start - e7), O10 = "^".repeat(t9.length);
      return e7 = t9.start + t9.length, r39 + a11 + O10;
    }, "");
    throw new d3(`Path parameters result in path with invalid segments:
${o18.map((r39) => r39.error).join(`
`)}
${s9}
${n17}`);
  }
  return s9;
};
var m12 = y9(u8);

// https://esm.sh/openai@5.12.0/denonext/lib/RunnableFunction.mjs
function c10(t9) {
  return typeof t9.parse == "function";
}

// https://esm.sh/openai@5.12.0/denonext/lib/chatCompletionUtils.mjs
var t6 = (s9) => s9?.role === "assistant";
var e2 = (s9) => s9?.role === "tool";

// https://esm.sh/openai@5.12.0/denonext/lib/EventStream.mjs
var p8;
var m13;
var _7;
var o8;
var f8;
var d10;
var c11;
var h8;
var l8;
var u9;
var E5;
var a6;
var v4;
var P5 = class {
  constructor() {
    p8.add(this), this.controller = new AbortController(), m13.set(this, void 0), _7.set(this, () => {
    }), o8.set(this, () => {
    }), f8.set(this, void 0), d10.set(this, () => {
    }), c11.set(this, () => {
    }), h8.set(this, {}), l8.set(this, false), u9.set(this, false), E5.set(this, false), a6.set(this, false), n4(this, m13, new Promise((t9, i21) => {
      n4(this, _7, t9, "f"), n4(this, o8, i21, "f");
    }), "f"), n4(this, f8, new Promise((t9, i21) => {
      n4(this, d10, t9, "f"), n4(this, c11, i21, "f");
    }), "f"), i5(this, m13, "f").catch(() => {
    }), i5(this, f8, "f").catch(() => {
    });
  }
  _run(t9) {
    setTimeout(() => {
      t9().then(() => {
        this._emitFinal(), this._emit("end");
      }, i5(this, p8, "m", v4).bind(this));
    }, 0);
  }
  _connected() {
    this.ended || (i5(this, _7, "f").call(this), this._emit("connect"));
  }
  get ended() {
    return i5(this, l8, "f");
  }
  get errored() {
    return i5(this, u9, "f");
  }
  get aborted() {
    return i5(this, E5, "f");
  }
  abort() {
    this.controller.abort();
  }
  on(t9, i21) {
    return (i5(this, h8, "f")[t9] || (i5(this, h8, "f")[t9] = [])).push({ listener: i21 }), this;
  }
  off(t9, i21) {
    let r39 = i5(this, h8, "f")[t9];
    if (!r39) return this;
    let s9 = r39.findIndex((W13) => W13.listener === i21);
    return s9 >= 0 && r39.splice(s9, 1), this;
  }
  once(t9, i21) {
    return (i5(this, h8, "f")[t9] || (i5(this, h8, "f")[t9] = [])).push({ listener: i21, once: true }), this;
  }
  emitted(t9) {
    return new Promise((i21, r39) => {
      n4(this, a6, true, "f"), t9 !== "error" && this.once("error", r39), this.once(t9, i21);
    });
  }
  async done() {
    n4(this, a6, true, "f"), await i5(this, f8, "f");
  }
  _emit(t9, ...i21) {
    if (i5(this, l8, "f")) return;
    t9 === "end" && (n4(this, l8, true, "f"), i5(this, d10, "f").call(this));
    let r39 = i5(this, h8, "f")[t9];
    if (r39 && (i5(this, h8, "f")[t9] = r39.filter((s9) => !s9.once), r39.forEach(({ listener: s9 }) => s9(...i21))), t9 === "abort") {
      let s9 = i21[0];
      !i5(this, a6, "f") && !r39?.length && Promise.reject(s9), i5(this, o8, "f").call(this, s9), i5(this, c11, "f").call(this, s9), this._emit("end");
      return;
    }
    if (t9 === "error") {
      let s9 = i21[0];
      !i5(this, a6, "f") && !r39?.length && Promise.reject(s9), i5(this, o8, "f").call(this, s9), i5(this, c11, "f").call(this, s9), this._emit("end");
    }
  }
  _emitFinal() {
  }
};
m13 = /* @__PURE__ */ new WeakMap(), _7 = /* @__PURE__ */ new WeakMap(), o8 = /* @__PURE__ */ new WeakMap(), f8 = /* @__PURE__ */ new WeakMap(), d10 = /* @__PURE__ */ new WeakMap(), c11 = /* @__PURE__ */ new WeakMap(), h8 = /* @__PURE__ */ new WeakMap(), l8 = /* @__PURE__ */ new WeakMap(), u9 = /* @__PURE__ */ new WeakMap(), E5 = /* @__PURE__ */ new WeakMap(), a6 = /* @__PURE__ */ new WeakMap(), p8 = /* @__PURE__ */ new WeakSet(), v4 = function(t9) {
  if (n4(this, u9, true, "f"), t9 instanceof Error && t9.name === "AbortError" && (t9 = new $4()), t9 instanceof $4) return n4(this, E5, true, "f"), this._emit("abort", t9);
  if (t9 instanceof d3) return this._emit("error", t9);
  if (t9 instanceof Error) {
    let i21 = new d3(t9.message);
    return i21.cause = t9, this._emit("error", i21);
  }
  return this._emit("error", new d3(String(t9)));
};

// https://esm.sh/openai@5.12.0/denonext/lib/AbstractChatCompletionRunner.mjs
var i10;
var w12;
var p9;
var F6;
var b9;
var R6;
var P6;
var S4;
var q7 = 10;
var O6 = class extends P5 {
  constructor() {
    super(...arguments), i10.add(this), this._chatCompletions = [], this.messages = [];
  }
  _addChatCompletion(t9) {
    this._chatCompletions.push(t9), this._emit("chatCompletion", t9);
    let n17 = t9.choices[0]?.message;
    return n17 && this._addMessage(n17), t9;
  }
  _addMessage(t9, n17 = true) {
    if ("content" in t9 || (t9.content = null), this.messages.push(t9), n17) {
      if (this._emit("message", t9), e2(t9) && t9.content) this._emit("functionToolCallResult", t9.content);
      else if (t6(t9) && t9.tool_calls) for (let o18 of t9.tool_calls) o18.type === "function" && this._emit("functionToolCall", o18.function);
    }
  }
  async finalChatCompletion() {
    await this.done();
    let t9 = this._chatCompletions[this._chatCompletions.length - 1];
    if (!t9) throw new d3("stream ended without producing a ChatCompletion");
    return t9;
  }
  async finalContent() {
    return await this.done(), i5(this, i10, "m", w12).call(this);
  }
  async finalMessage() {
    return await this.done(), i5(this, i10, "m", p9).call(this);
  }
  async finalFunctionToolCall() {
    return await this.done(), i5(this, i10, "m", F6).call(this);
  }
  async finalFunctionToolCallResult() {
    return await this.done(), i5(this, i10, "m", b9).call(this);
  }
  async totalUsage() {
    return await this.done(), i5(this, i10, "m", R6).call(this);
  }
  allChatCompletions() {
    return [...this._chatCompletions];
  }
  _emitFinal() {
    let t9 = this._chatCompletions[this._chatCompletions.length - 1];
    t9 && this._emit("finalChatCompletion", t9);
    let n17 = i5(this, i10, "m", p9).call(this);
    n17 && this._emit("finalMessage", n17);
    let o18 = i5(this, i10, "m", w12).call(this);
    o18 && this._emit("finalContent", o18);
    let s9 = i5(this, i10, "m", F6).call(this);
    s9 && this._emit("finalFunctionToolCall", s9);
    let l16 = i5(this, i10, "m", b9).call(this);
    l16 != null && this._emit("finalFunctionToolCallResult", l16), this._chatCompletions.some((A13) => A13.usage) && this._emit("totalUsage", i5(this, i10, "m", R6).call(this));
  }
  async _createChatCompletion(t9, n17, o18) {
    let s9 = o18?.signal;
    s9 && (s9.aborted && this.controller.abort(), s9.addEventListener("abort", () => this.controller.abort())), i5(this, i10, "m", P6).call(this, n17);
    let l16 = await t9.chat.completions.create({ ...n17, stream: false }, { ...o18, signal: this.controller.signal });
    return this._connected(), this._addChatCompletion(i2(l16, n17));
  }
  async _runChatCompletion(t9, n17, o18) {
    for (let s9 of n17.messages) this._addMessage(s9, false);
    return await this._createChatCompletion(t9, n17, o18);
  }
  async _runTools(t9, n17, o18) {
    let s9 = "tool", { tool_choice: l16 = "auto", stream: A13, ...$13 } = n17, u18 = typeof l16 != "string" && l16?.function?.name, { maxChatCompletions: E12 = q7 } = o18 || {}, M14 = n17.tools.map((e7) => {
      if (o3(e7)) {
        if (!e7.$callback) throw new d3("Tool given to `.runTools()` that does not have an associated function");
        return { type: "function", function: { function: e7.$callback, name: e7.function.name, description: e7.function.description || "", parameters: e7.function.parameters, parse: e7.$parseRaw, strict: true } };
      }
      return e7;
    }), C10 = {};
    for (let e7 of M14) e7.type === "function" && (C10[e7.function.name || e7.function.function.name] = e7.function);
    let J15 = "tools" in n17 ? M14.map((e7) => e7.type === "function" ? { type: "function", function: { name: e7.function.name || e7.function.function.name, parameters: e7.function.parameters, description: e7.function.description, strict: e7.function.strict } } : e7) : void 0;
    for (let e7 of n17.messages) this._addMessage(e7, false);
    for (let e7 = 0; e7 < E12; ++e7) {
      let g16 = (await this._createChatCompletion(t9, { ...$13, tool_choice: l16, tools: J15, messages: [...this.messages] }, o18)).choices[0]?.message;
      if (!g16) throw new d3("missing message in ChatCompletion response");
      if (!g16.tool_calls?.length) return;
      for (let d19 of g16.tool_calls) {
        if (d19.type !== "function") continue;
        let m26 = d19.id, { name: f14, arguments: k14 } = d19.function, _14 = C10[f14];
        if (_14) {
          if (u18 && u18 !== f14) {
            let r39 = `Invalid tool_call: ${JSON.stringify(f14)}. ${JSON.stringify(u18)} requested. Please try again`;
            this._addMessage({ role: s9, tool_call_id: m26, content: r39 });
            continue;
          }
        } else {
          let r39 = `Invalid tool_call: ${JSON.stringify(f14)}. Available options are: ${Object.keys(C10).map((y15) => JSON.stringify(y15)).join(", ")}. Please try again`;
          this._addMessage({ role: s9, tool_call_id: m26, content: r39 });
          continue;
        }
        let v9;
        try {
          v9 = c10(_14) ? await _14.parse(k14) : k14;
        } catch (r39) {
          let y15 = r39 instanceof Error ? r39.message : String(r39);
          this._addMessage({ role: s9, tool_call_id: m26, content: y15 });
          continue;
        }
        let U11 = await _14.function(v9, this), I11 = i5(this, i10, "m", S4).call(this, U11);
        if (this._addMessage({ role: s9, tool_call_id: m26, content: I11 }), u18) return;
      }
    }
  }
};
i10 = /* @__PURE__ */ new WeakSet(), w12 = function() {
  return i5(this, i10, "m", p9).call(this).content ?? null;
}, p9 = function() {
  let t9 = this.messages.length;
  for (; t9-- > 0; ) {
    let n17 = this.messages[t9];
    if (t6(n17)) return { ...n17, content: n17.content ?? null, refusal: n17.refusal ?? null };
  }
  throw new d3("stream ended without producing a ChatCompletionMessage with role=assistant");
}, F6 = function() {
  for (let t9 = this.messages.length - 1; t9 >= 0; t9--) {
    let n17 = this.messages[t9];
    if (t6(n17) && n17?.tool_calls?.length) return n17.tool_calls.at(-1)?.function;
  }
}, b9 = function() {
  for (let t9 = this.messages.length - 1; t9 >= 0; t9--) {
    let n17 = this.messages[t9];
    if (e2(n17) && n17.content != null && typeof n17.content == "string" && this.messages.some((o18) => o18.role === "assistant" && o18.tool_calls?.some((s9) => s9.type === "function" && s9.id === n17.tool_call_id))) return n17.content;
  }
}, R6 = function() {
  let t9 = { completion_tokens: 0, prompt_tokens: 0, total_tokens: 0 };
  for (let { usage: n17 } of this._chatCompletions) n17 && (t9.completion_tokens += n17.completion_tokens, t9.prompt_tokens += n17.prompt_tokens, t9.total_tokens += n17.total_tokens);
  return t9;
}, P6 = function(t9) {
  if (t9.n != null && t9.n > 1) throw new d3("ChatCompletion convenience helpers only support n=1 at this time. To use n>1, please use chat.completions.create() directly.");
}, S4 = function(t9) {
  return typeof t9 == "string" ? t9 : t9 === void 0 ? "undefined" : JSON.stringify(t9);
};

// https://esm.sh/openai@5.12.0/denonext/resources/chat/chat.mjs
var P7 = class extends t5 {
  list(s9, e7 = {}, t9) {
    return this._client.getAPIList(m12`/chat/completions/${s9}/messages`, l7, { query: e7, ...t9 });
  }
};
var S5 = class n7 extends O6 {
  static runTools(s9, e7, t9) {
    let o18 = new n7(), r39 = { ...t9, headers: { ...t9?.headers, "X-Stainless-Helper-Method": "runTools" } };
    return o18._run(() => o18._runTools(s9, e7, r39)), o18;
  }
  _addMessage(s9, e7 = true) {
    super._addMessage(s9, e7), t6(s9) && s9.content && this._emit("content", s9.content);
  }
};
var p10 = { STR: 1, NUM: 2, ARR: 4, OBJ: 8, NULL: 16, BOOL: 32, NAN: 64, INFINITY: 128, MINUS_INFINITY: 256, INF: 384, SPECIAL: 496, ATOM: 499, COLLECTION: 12, ALL: 511 };
var D6 = class extends Error {
};
var H6 = class extends Error {
};
function ct4(n17, s9 = p10.ALL) {
  if (typeof n17 != "string") throw new TypeError(`expecting str, got ${typeof n17}`);
  if (!n17.trim()) throw new Error(`${n17} is empty`);
  return ut4(n17.trim(), s9);
}
var ut4 = (n17, s9) => {
  let e7 = n17.length, t9 = 0, o18 = (i21) => {
    throw new D6(`${i21} at position ${t9}`);
  }, r39 = (i21) => {
    throw new H6(`${i21} at position ${t9}`);
  }, l16 = () => (u18(), t9 >= e7 && o18("Unexpected end of input"), n17[t9] === '"' ? m26() : n17[t9] === "{" ? g16() : n17[t9] === "[" ? b15() : n17.substring(t9, t9 + 4) === "null" || p10.NULL & s9 && e7 - t9 < 4 && "null".startsWith(n17.substring(t9)) ? (t9 += 4, null) : n17.substring(t9, t9 + 4) === "true" || p10.BOOL & s9 && e7 - t9 < 4 && "true".startsWith(n17.substring(t9)) ? (t9 += 4, true) : n17.substring(t9, t9 + 5) === "false" || p10.BOOL & s9 && e7 - t9 < 5 && "false".startsWith(n17.substring(t9)) ? (t9 += 5, false) : n17.substring(t9, t9 + 8) === "Infinity" || p10.INFINITY & s9 && e7 - t9 < 8 && "Infinity".startsWith(n17.substring(t9)) ? (t9 += 8, 1 / 0) : n17.substring(t9, t9 + 9) === "-Infinity" || p10.MINUS_INFINITY & s9 && 1 < e7 - t9 && e7 - t9 < 9 && "-Infinity".startsWith(n17.substring(t9)) ? (t9 += 9, -1 / 0) : n17.substring(t9, t9 + 3) === "NaN" || p10.NAN & s9 && e7 - t9 < 3 && "NaN".startsWith(n17.substring(t9)) ? (t9 += 3, NaN) : w19()), m26 = () => {
    let i21 = t9, f14 = false;
    for (t9++; t9 < e7 && (n17[t9] !== '"' || f14 && n17[t9 - 1] === "\\"); ) f14 = n17[t9] === "\\" ? !f14 : false, t9++;
    if (n17.charAt(t9) == '"') try {
      return JSON.parse(n17.substring(i21, ++t9 - Number(f14)));
    } catch (d19) {
      r39(String(d19));
    }
    else if (p10.STR & s9) try {
      return JSON.parse(n17.substring(i21, t9 - Number(f14)) + '"');
    } catch {
      return JSON.parse(n17.substring(i21, n17.lastIndexOf("\\")) + '"');
    }
    o18("Unterminated string literal");
  }, g16 = () => {
    t9++, u18();
    let i21 = {};
    try {
      for (; n17[t9] !== "}"; ) {
        if (u18(), t9 >= e7 && p10.OBJ & s9) return i21;
        let f14 = m26();
        u18(), t9++;
        try {
          let d19 = l16();
          Object.defineProperty(i21, f14, { value: d19, writable: true, enumerable: true, configurable: true });
        } catch (d19) {
          if (p10.OBJ & s9) return i21;
          throw d19;
        }
        u18(), n17[t9] === "," && t9++;
      }
    } catch {
      if (p10.OBJ & s9) return i21;
      o18("Expected '}' at end of object");
    }
    return t9++, i21;
  }, b15 = () => {
    t9++;
    let i21 = [];
    try {
      for (; n17[t9] !== "]"; ) i21.push(l16()), u18(), n17[t9] === "," && t9++;
    } catch {
      if (p10.ARR & s9) return i21;
      o18("Expected ']' at end of array");
    }
    return t9++, i21;
  }, w19 = () => {
    if (t9 === 0) {
      n17 === "-" && p10.NUM & s9 && o18("Not sure what '-' is");
      try {
        return JSON.parse(n17);
      } catch (f14) {
        if (p10.NUM & s9) try {
          return n17[n17.length - 1] === "." ? JSON.parse(n17.substring(0, n17.lastIndexOf("."))) : JSON.parse(n17.substring(0, n17.lastIndexOf("e")));
        } catch {
        }
        r39(String(f14));
      }
    }
    let i21 = t9;
    for (n17[t9] === "-" && t9++; n17[t9] && !",]}".includes(n17[t9]); ) t9++;
    t9 == e7 && !(p10.NUM & s9) && o18("Unterminated number literal");
    try {
      return JSON.parse(n17.substring(i21, t9));
    } catch {
      n17.substring(i21, t9) === "-" && p10.NUM & s9 && o18("Not sure what '-' is");
      try {
        return JSON.parse(n17.substring(i21, n17.lastIndexOf("e")));
      } catch (d19) {
        r39(String(d19));
      }
    }
  }, u18 = () => {
    for (; t9 < e7 && ` 
\r	`.includes(n17[t9]); ) t9++;
  };
  return l16();
};
var X5 = (n17) => ct4(n17, p10.ALL ^ p10.NUM);
var h9;
var y10;
var $7;
var x7;
var Q5;
var W6;
var z4;
var G5;
var K5;
var Y4;
var V5;
var tt4;
var E6 = class n8 extends O6 {
  constructor(s9) {
    super(), h9.add(this), y10.set(this, void 0), $7.set(this, void 0), x7.set(this, void 0), n4(this, y10, s9, "f"), n4(this, $7, [], "f");
  }
  get currentChatCompletionSnapshot() {
    return i5(this, x7, "f");
  }
  static fromReadableStream(s9) {
    let e7 = new n8(null);
    return e7._run(() => e7._fromReadableStream(s9)), e7;
  }
  static createChatCompletion(s9, e7, t9) {
    let o18 = new n8(e7);
    return o18._run(() => o18._runChatCompletion(s9, { ...e7, stream: true }, { ...t9, headers: { ...t9?.headers, "X-Stainless-Helper-Method": "stream" } })), o18;
  }
  async _createChatCompletion(s9, e7, t9) {
    super._createChatCompletion;
    let o18 = t9?.signal;
    o18 && (o18.aborted && this.controller.abort(), o18.addEventListener("abort", () => this.controller.abort())), i5(this, h9, "m", Q5).call(this);
    let r39 = await s9.chat.completions.create({ ...e7, stream: true }, { ...t9, signal: this.controller.signal });
    this._connected();
    for await (let l16 of r39) i5(this, h9, "m", z4).call(this, l16);
    if (r39.controller.signal?.aborted) throw new $4();
    return this._addChatCompletion(i5(this, h9, "m", Y4).call(this));
  }
  async _fromReadableStream(s9, e7) {
    let t9 = e7?.signal;
    t9 && (t9.aborted && this.controller.abort(), t9.addEventListener("abort", () => this.controller.abort())), i5(this, h9, "m", Q5).call(this), this._connected();
    let o18 = N5.fromReadableStream(s9, this.controller), r39;
    for await (let l16 of o18) r39 && r39 !== l16.id && this._addChatCompletion(i5(this, h9, "m", Y4).call(this)), i5(this, h9, "m", z4).call(this, l16), r39 = l16.id;
    if (o18.controller.signal?.aborted) throw new $4();
    return this._addChatCompletion(i5(this, h9, "m", Y4).call(this));
  }
  [(y10 = /* @__PURE__ */ new WeakMap(), $7 = /* @__PURE__ */ new WeakMap(), x7 = /* @__PURE__ */ new WeakMap(), h9 = /* @__PURE__ */ new WeakSet(), Q5 = function() {
    this.ended || n4(this, x7, void 0, "f");
  }, W6 = function(e7) {
    let t9 = i5(this, $7, "f")[e7.index];
    return t9 || (t9 = { content_done: false, refusal_done: false, logprobs_content_done: false, logprobs_refusal_done: false, done_tool_calls: /* @__PURE__ */ new Set(), current_tool_call_index: null }, i5(this, $7, "f")[e7.index] = t9, t9);
  }, z4 = function(e7) {
    if (this.ended) return;
    let t9 = i5(this, h9, "m", tt4).call(this, e7);
    this._emit("chunk", e7, t9);
    for (let o18 of e7.choices) {
      let r39 = t9.choices[o18.index];
      o18.delta.content != null && r39.message?.role === "assistant" && r39.message?.content && (this._emit("content", o18.delta.content, r39.message.content), this._emit("content.delta", { delta: o18.delta.content, snapshot: r39.message.content, parsed: r39.message.parsed })), o18.delta.refusal != null && r39.message?.role === "assistant" && r39.message?.refusal && this._emit("refusal.delta", { delta: o18.delta.refusal, snapshot: r39.message.refusal }), o18.logprobs?.content != null && r39.message?.role === "assistant" && this._emit("logprobs.content.delta", { content: o18.logprobs?.content, snapshot: r39.logprobs?.content ?? [] }), o18.logprobs?.refusal != null && r39.message?.role === "assistant" && this._emit("logprobs.refusal.delta", { refusal: o18.logprobs?.refusal, snapshot: r39.logprobs?.refusal ?? [] });
      let l16 = i5(this, h9, "m", W6).call(this, r39);
      r39.finish_reason && (i5(this, h9, "m", K5).call(this, r39), l16.current_tool_call_index != null && i5(this, h9, "m", G5).call(this, r39, l16.current_tool_call_index));
      for (let m26 of o18.delta.tool_calls ?? []) l16.current_tool_call_index !== m26.index && (i5(this, h9, "m", K5).call(this, r39), l16.current_tool_call_index != null && i5(this, h9, "m", G5).call(this, r39, l16.current_tool_call_index)), l16.current_tool_call_index = m26.index;
      for (let m26 of o18.delta.tool_calls ?? []) {
        let g16 = r39.message.tool_calls?.[m26.index];
        g16?.type && (g16?.type === "function" ? this._emit("tool_calls.function.arguments.delta", { name: g16.function?.name, index: m26.index, arguments: g16.function.arguments, parsed_arguments: g16.function.parsed_arguments, arguments_delta: m26.function?.arguments ?? "" }) : (g16?.type, void 0));
      }
    }
  }, G5 = function(e7, t9) {
    if (i5(this, h9, "m", W6).call(this, e7).done_tool_calls.has(t9)) return;
    let r39 = e7.message.tool_calls?.[t9];
    if (!r39) throw new Error("no tool call snapshot");
    if (!r39.type) throw new Error("tool call snapshot missing `type`");
    if (r39.type === "function") {
      let l16 = i5(this, y10, "f")?.tools?.find((m26) => m26.type === "function" && m26.function.name === r39.function.name);
      this._emit("tool_calls.function.arguments.done", { name: r39.function.name, index: t9, arguments: r39.function.arguments, parsed_arguments: o3(l16) ? l16.$parseRaw(r39.function.arguments) : l16?.function.strict ? JSON.parse(r39.function.arguments) : null });
    } else r39.type;
  }, K5 = function(e7) {
    let t9 = i5(this, h9, "m", W6).call(this, e7);
    if (e7.message.content && !t9.content_done) {
      t9.content_done = true;
      let o18 = i5(this, h9, "m", V5).call(this);
      this._emit("content.done", { content: e7.message.content, parsed: o18 ? o18.$parseRaw(e7.message.content) : null });
    }
    e7.message.refusal && !t9.refusal_done && (t9.refusal_done = true, this._emit("refusal.done", { refusal: e7.message.refusal })), e7.logprobs?.content && !t9.logprobs_content_done && (t9.logprobs_content_done = true, this._emit("logprobs.content.done", { content: e7.logprobs.content })), e7.logprobs?.refusal && !t9.logprobs_refusal_done && (t9.logprobs_refusal_done = true, this._emit("logprobs.refusal.done", { refusal: e7.logprobs.refusal }));
  }, Y4 = function() {
    if (this.ended) throw new d3("stream has ended, this shouldn't happen");
    let e7 = i5(this, x7, "f");
    if (!e7) throw new d3("request ended without sending any chunks");
    return n4(this, x7, void 0, "f"), n4(this, $7, [], "f"), bt3(e7, i5(this, y10, "f"));
  }, V5 = function() {
    let e7 = i5(this, y10, "f")?.response_format;
    return f2(e7) ? e7 : null;
  }, tt4 = function(e7) {
    var t9, o18, r39, l16;
    let m26 = i5(this, x7, "f"), { choices: g16, ...b15 } = e7;
    m26 ? Object.assign(m26, b15) : m26 = n4(this, x7, { ...b15, choices: [] }, "f");
    for (let { delta: w19, finish_reason: u18, index: i21, logprobs: f14 = null, ...d19 } of e7.choices) {
      let a11 = m26.choices[i21];
      if (a11 || (a11 = m26.choices[i21] = { finish_reason: u18, index: i21, message: {}, logprobs: f14, ...d19 }), f14) if (!a11.logprobs) a11.logprobs = Object.assign({}, f14);
      else {
        let { content: A13, refusal: R11, ...T9 } = f14;
        Object.assign(a11.logprobs, T9), A13 && ((t9 = a11.logprobs).content ?? (t9.content = []), a11.logprobs.content.push(...A13)), R11 && ((o18 = a11.logprobs).refusal ?? (o18.refusal = []), a11.logprobs.refusal.push(...R11));
      }
      if (u18 && (a11.finish_reason = u18, i5(this, y10, "f") && c4(i5(this, y10, "f")))) {
        if (u18 === "length") throw new m4();
        if (u18 === "content_filter") throw new J4();
      }
      if (Object.assign(a11, d19), !w19) continue;
      let { content: F13, refusal: U11, function_call: C10, role: L9, tool_calls: N9, ...k14 } = w19;
      if (Object.assign(a11.message, k14), U11 && (a11.message.refusal = (a11.message.refusal || "") + U11), L9 && (a11.message.role = L9), C10 && (a11.message.function_call ? (C10.name && (a11.message.function_call.name = C10.name), C10.arguments && ((r39 = a11.message.function_call).arguments ?? (r39.arguments = ""), a11.message.function_call.arguments += C10.arguments)) : a11.message.function_call = C10), F13 && (a11.message.content = (a11.message.content || "") + F13, !a11.message.refusal && i5(this, h9, "m", V5).call(this) && (a11.message.parsed = X5(a11.message.content))), N9) {
        a11.message.tool_calls || (a11.message.tool_calls = []);
        for (let { index: A13, id: R11, type: T9, function: O10, ...B11 } of N9) {
          let _14 = (l16 = a11.message.tool_calls)[A13] ?? (l16[A13] = {});
          Object.assign(_14, B11), R11 && (_14.id = R11), T9 && (_14.type = T9), O10 && (_14.function ?? (_14.function = { name: O10.name ?? "", arguments: "" })), O10?.name && (_14.function.name = O10.name), O10?.arguments && (_14.function.arguments += O10.arguments, $5(i5(this, y10, "f"), _14) && (_14.function.parsed_arguments = X5(_14.function.arguments)));
        }
      }
    }
    return m26;
  }, Symbol.asyncIterator)]() {
    let s9 = [], e7 = [], t9 = false;
    return this.on("chunk", (o18) => {
      let r39 = e7.shift();
      r39 ? r39.resolve(o18) : s9.push(o18);
    }), this.on("end", () => {
      t9 = true;
      for (let o18 of e7) o18.resolve(void 0);
      e7.length = 0;
    }), this.on("abort", (o18) => {
      t9 = true;
      for (let r39 of e7) r39.reject(o18);
      e7.length = 0;
    }), this.on("error", (o18) => {
      t9 = true;
      for (let r39 of e7) r39.reject(o18);
      e7.length = 0;
    }), { next: async () => s9.length ? { value: s9.shift(), done: false } : t9 ? { value: void 0, done: true } : new Promise((r39, l16) => e7.push({ resolve: r39, reject: l16 })).then((r39) => r39 ? { value: r39, done: false } : { value: void 0, done: true }), return: async () => (this.abort(), { value: void 0, done: true }) };
  }
  toReadableStream() {
    return new N5(this[Symbol.asyncIterator].bind(this), this.controller).toReadableStream();
  }
};
function bt3(n17, s9) {
  let { id: e7, choices: t9, created: o18, model: r39, system_fingerprint: l16, ...m26 } = n17, g16 = { ...m26, id: e7, choices: t9.map(({ message: b15, finish_reason: w19, index: u18, logprobs: i21, ...f14 }) => {
    if (!w19) throw new d3(`missing finish_reason for choice ${u18}`);
    let { content: d19 = null, function_call: a11, tool_calls: F13, ...U11 } = b15, C10 = b15.role;
    if (!C10) throw new d3(`missing role for choice ${u18}`);
    if (a11) {
      let { arguments: L9, name: N9 } = a11;
      if (L9 == null) throw new d3(`missing function_call.arguments for choice ${u18}`);
      if (!N9) throw new d3(`missing function_call.name for choice ${u18}`);
      return { ...f14, message: { content: d19, function_call: { arguments: L9, name: N9 }, role: C10, refusal: b15.refusal ?? null }, finish_reason: w19, index: u18, logprobs: i21 };
    }
    return F13 ? { ...f14, index: u18, finish_reason: w19, logprobs: i21, message: { ...U11, role: C10, content: d19, refusal: b15.refusal ?? null, tool_calls: F13.map((L9, N9) => {
      let { function: k14, type: A13, id: R11, ...T9 } = L9, { arguments: O10, name: B11, ..._14 } = k14 || {};
      if (R11 == null) throw new d3(`missing choices[${u18}].tool_calls[${N9}].id
${q8(n17)}`);
      if (A13 == null) throw new d3(`missing choices[${u18}].tool_calls[${N9}].type
${q8(n17)}`);
      if (B11 == null) throw new d3(`missing choices[${u18}].tool_calls[${N9}].function.name
${q8(n17)}`);
      if (O10 == null) throw new d3(`missing choices[${u18}].tool_calls[${N9}].function.arguments
${q8(n17)}`);
      return { ...T9, id: R11, type: A13, function: { ..._14, name: B11, arguments: O10 } };
    }) } } : { ...f14, message: { ...U11, content: d19, role: C10, refusal: b15.refusal ?? null }, finish_reason: w19, index: u18, logprobs: i21 };
  }), created: o18, model: r39, object: "chat.completion", ...l16 ? { system_fingerprint: l16 } : {} };
  return w5(g16, s9);
}
function q8(n17) {
  return JSON.stringify(n17);
}
var J7 = class n9 extends E6 {
  static fromReadableStream(s9) {
    let e7 = new n9(null);
    return e7._run(() => e7._fromReadableStream(s9)), e7;
  }
  static runTools(s9, e7, t9) {
    let o18 = new n9(e7), r39 = { ...t9, headers: { ...t9?.headers, "X-Stainless-Helper-Method": "runTools" } };
    return o18._run(() => o18._runTools(s9, e7, r39)), o18;
  }
};
var M7 = class extends t5 {
  constructor() {
    super(...arguments), this.messages = new P7(this._client);
  }
  create(s9, e7) {
    return this._client.post("/chat/completions", { body: s9, ...e7, stream: s9.stream ?? false });
  }
  retrieve(s9, e7) {
    return this._client.get(m12`/chat/completions/${s9}`, e7);
  }
  update(s9, e7, t9) {
    return this._client.post(m12`/chat/completions/${s9}`, { body: e7, ...t9 });
  }
  list(s9 = {}, e7) {
    return this._client.getAPIList("/chat/completions", l7, { query: s9, ...e7 });
  }
  delete(s9, e7) {
    return this._client.delete(m12`/chat/completions/${s9}`, e7);
  }
  parse(s9, e7) {
    return R3(s9.tools), this._client.chat.completions.create(s9, { ...e7, headers: { ...e7?.headers, "X-Stainless-Helper-Method": "chat.completions.parse" } })._thenUnwrap((t9) => i2(t9, s9));
  }
  runTools(s9, e7) {
    return s9.stream ? J7.runTools(this._client, s9, e7) : S5.runTools(this._client, s9, e7);
  }
  stream(s9, e7) {
    return E6.createChatCompletion(this._client, s9, e7);
  }
};
M7.Messages = P7;
var j5 = class extends t5 {
  constructor() {
    super(...arguments), this.completions = new M7(this._client);
  }
};
j5.Completions = M7;

// https://esm.sh/openai@5.12.0/denonext/resources/chat/completions/index.mjs
var M8 = class extends t5 {
  list(s9, e7 = {}, t9) {
    return this._client.getAPIList(m12`/chat/completions/${s9}/messages`, l7, { query: e7, ...t9 });
  }
};
var U7 = class n10 extends O6 {
  static runTools(s9, e7, t9) {
    let o18 = new n10(), r39 = { ...t9, headers: { ...t9?.headers, "X-Stainless-Helper-Method": "runTools" } };
    return o18._run(() => o18._runTools(s9, e7, r39)), o18;
  }
  _addMessage(s9, e7 = true) {
    super._addMessage(s9, e7), t6(s9) && s9.content && this._emit("content", s9.content);
  }
};
var p11 = { STR: 1, NUM: 2, ARR: 4, OBJ: 8, NULL: 16, BOOL: 32, NAN: 64, INFINITY: 128, MINUS_INFINITY: 256, INF: 384, SPECIAL: 496, ATOM: 499, COLLECTION: 12, ALL: 511 };
var D7 = class extends Error {
};
var H7 = class extends Error {
};
function lt4(n17, s9 = p11.ALL) {
  if (typeof n17 != "string") throw new TypeError(`expecting str, got ${typeof n17}`);
  if (!n17.trim()) throw new Error(`${n17} is empty`);
  return ct5(n17.trim(), s9);
}
var ct5 = (n17, s9) => {
  let e7 = n17.length, t9 = 0, o18 = (i21) => {
    throw new D7(`${i21} at position ${t9}`);
  }, r39 = (i21) => {
    throw new H7(`${i21} at position ${t9}`);
  }, l16 = () => (u18(), t9 >= e7 && o18("Unexpected end of input"), n17[t9] === '"' ? f14() : n17[t9] === "{" ? g16() : n17[t9] === "[" ? b15() : n17.substring(t9, t9 + 4) === "null" || p11.NULL & s9 && e7 - t9 < 4 && "null".startsWith(n17.substring(t9)) ? (t9 += 4, null) : n17.substring(t9, t9 + 4) === "true" || p11.BOOL & s9 && e7 - t9 < 4 && "true".startsWith(n17.substring(t9)) ? (t9 += 4, true) : n17.substring(t9, t9 + 5) === "false" || p11.BOOL & s9 && e7 - t9 < 5 && "false".startsWith(n17.substring(t9)) ? (t9 += 5, false) : n17.substring(t9, t9 + 8) === "Infinity" || p11.INFINITY & s9 && e7 - t9 < 8 && "Infinity".startsWith(n17.substring(t9)) ? (t9 += 8, 1 / 0) : n17.substring(t9, t9 + 9) === "-Infinity" || p11.MINUS_INFINITY & s9 && 1 < e7 - t9 && e7 - t9 < 9 && "-Infinity".startsWith(n17.substring(t9)) ? (t9 += 9, -1 / 0) : n17.substring(t9, t9 + 3) === "NaN" || p11.NAN & s9 && e7 - t9 < 3 && "NaN".startsWith(n17.substring(t9)) ? (t9 += 3, NaN) : w19()), f14 = () => {
    let i21 = t9, m26 = false;
    for (t9++; t9 < e7 && (n17[t9] !== '"' || m26 && n17[t9 - 1] === "\\"); ) m26 = n17[t9] === "\\" ? !m26 : false, t9++;
    if (n17.charAt(t9) == '"') try {
      return JSON.parse(n17.substring(i21, ++t9 - Number(m26)));
    } catch (d19) {
      r39(String(d19));
    }
    else if (p11.STR & s9) try {
      return JSON.parse(n17.substring(i21, t9 - Number(m26)) + '"');
    } catch {
      return JSON.parse(n17.substring(i21, n17.lastIndexOf("\\")) + '"');
    }
    o18("Unterminated string literal");
  }, g16 = () => {
    t9++, u18();
    let i21 = {};
    try {
      for (; n17[t9] !== "}"; ) {
        if (u18(), t9 >= e7 && p11.OBJ & s9) return i21;
        let m26 = f14();
        u18(), t9++;
        try {
          let d19 = l16();
          Object.defineProperty(i21, m26, { value: d19, writable: true, enumerable: true, configurable: true });
        } catch (d19) {
          if (p11.OBJ & s9) return i21;
          throw d19;
        }
        u18(), n17[t9] === "," && t9++;
      }
    } catch {
      if (p11.OBJ & s9) return i21;
      o18("Expected '}' at end of object");
    }
    return t9++, i21;
  }, b15 = () => {
    t9++;
    let i21 = [];
    try {
      for (; n17[t9] !== "]"; ) i21.push(l16()), u18(), n17[t9] === "," && t9++;
    } catch {
      if (p11.ARR & s9) return i21;
      o18("Expected ']' at end of array");
    }
    return t9++, i21;
  }, w19 = () => {
    if (t9 === 0) {
      n17 === "-" && p11.NUM & s9 && o18("Not sure what '-' is");
      try {
        return JSON.parse(n17);
      } catch (m26) {
        if (p11.NUM & s9) try {
          return n17[n17.length - 1] === "." ? JSON.parse(n17.substring(0, n17.lastIndexOf("."))) : JSON.parse(n17.substring(0, n17.lastIndexOf("e")));
        } catch {
        }
        r39(String(m26));
      }
    }
    let i21 = t9;
    for (n17[t9] === "-" && t9++; n17[t9] && !",]}".includes(n17[t9]); ) t9++;
    t9 == e7 && !(p11.NUM & s9) && o18("Unterminated number literal");
    try {
      return JSON.parse(n17.substring(i21, t9));
    } catch {
      n17.substring(i21, t9) === "-" && p11.NUM & s9 && o18("Not sure what '-' is");
      try {
        return JSON.parse(n17.substring(i21, n17.lastIndexOf("e")));
      } catch (d19) {
        r39(String(d19));
      }
    }
  }, u18 = () => {
    for (; t9 < e7 && ` 
\r	`.includes(n17[t9]); ) t9++;
  };
  return l16();
};
var X6 = (n17) => lt4(n17, p11.ALL ^ p11.NUM);
var h10;
var y11;
var $8;
var x8;
var Q6;
var B5;
var z5;
var G6;
var K6;
var W7;
var V6;
var j6;
var E7 = class n11 extends O6 {
  constructor(s9) {
    super(), h10.add(this), y11.set(this, void 0), $8.set(this, void 0), x8.set(this, void 0), n4(this, y11, s9, "f"), n4(this, $8, [], "f");
  }
  get currentChatCompletionSnapshot() {
    return i5(this, x8, "f");
  }
  static fromReadableStream(s9) {
    let e7 = new n11(null);
    return e7._run(() => e7._fromReadableStream(s9)), e7;
  }
  static createChatCompletion(s9, e7, t9) {
    let o18 = new n11(e7);
    return o18._run(() => o18._runChatCompletion(s9, { ...e7, stream: true }, { ...t9, headers: { ...t9?.headers, "X-Stainless-Helper-Method": "stream" } })), o18;
  }
  async _createChatCompletion(s9, e7, t9) {
    super._createChatCompletion;
    let o18 = t9?.signal;
    o18 && (o18.aborted && this.controller.abort(), o18.addEventListener("abort", () => this.controller.abort())), i5(this, h10, "m", Q6).call(this);
    let r39 = await s9.chat.completions.create({ ...e7, stream: true }, { ...t9, signal: this.controller.signal });
    this._connected();
    for await (let l16 of r39) i5(this, h10, "m", z5).call(this, l16);
    if (r39.controller.signal?.aborted) throw new $4();
    return this._addChatCompletion(i5(this, h10, "m", W7).call(this));
  }
  async _fromReadableStream(s9, e7) {
    let t9 = e7?.signal;
    t9 && (t9.aborted && this.controller.abort(), t9.addEventListener("abort", () => this.controller.abort())), i5(this, h10, "m", Q6).call(this), this._connected();
    let o18 = N5.fromReadableStream(s9, this.controller), r39;
    for await (let l16 of o18) r39 && r39 !== l16.id && this._addChatCompletion(i5(this, h10, "m", W7).call(this)), i5(this, h10, "m", z5).call(this, l16), r39 = l16.id;
    if (o18.controller.signal?.aborted) throw new $4();
    return this._addChatCompletion(i5(this, h10, "m", W7).call(this));
  }
  [(y11 = /* @__PURE__ */ new WeakMap(), $8 = /* @__PURE__ */ new WeakMap(), x8 = /* @__PURE__ */ new WeakMap(), h10 = /* @__PURE__ */ new WeakSet(), Q6 = function() {
    this.ended || n4(this, x8, void 0, "f");
  }, B5 = function(e7) {
    let t9 = i5(this, $8, "f")[e7.index];
    return t9 || (t9 = { content_done: false, refusal_done: false, logprobs_content_done: false, logprobs_refusal_done: false, done_tool_calls: /* @__PURE__ */ new Set(), current_tool_call_index: null }, i5(this, $8, "f")[e7.index] = t9, t9);
  }, z5 = function(e7) {
    if (this.ended) return;
    let t9 = i5(this, h10, "m", j6).call(this, e7);
    this._emit("chunk", e7, t9);
    for (let o18 of e7.choices) {
      let r39 = t9.choices[o18.index];
      o18.delta.content != null && r39.message?.role === "assistant" && r39.message?.content && (this._emit("content", o18.delta.content, r39.message.content), this._emit("content.delta", { delta: o18.delta.content, snapshot: r39.message.content, parsed: r39.message.parsed })), o18.delta.refusal != null && r39.message?.role === "assistant" && r39.message?.refusal && this._emit("refusal.delta", { delta: o18.delta.refusal, snapshot: r39.message.refusal }), o18.logprobs?.content != null && r39.message?.role === "assistant" && this._emit("logprobs.content.delta", { content: o18.logprobs?.content, snapshot: r39.logprobs?.content ?? [] }), o18.logprobs?.refusal != null && r39.message?.role === "assistant" && this._emit("logprobs.refusal.delta", { refusal: o18.logprobs?.refusal, snapshot: r39.logprobs?.refusal ?? [] });
      let l16 = i5(this, h10, "m", B5).call(this, r39);
      r39.finish_reason && (i5(this, h10, "m", K6).call(this, r39), l16.current_tool_call_index != null && i5(this, h10, "m", G6).call(this, r39, l16.current_tool_call_index));
      for (let f14 of o18.delta.tool_calls ?? []) l16.current_tool_call_index !== f14.index && (i5(this, h10, "m", K6).call(this, r39), l16.current_tool_call_index != null && i5(this, h10, "m", G6).call(this, r39, l16.current_tool_call_index)), l16.current_tool_call_index = f14.index;
      for (let f14 of o18.delta.tool_calls ?? []) {
        let g16 = r39.message.tool_calls?.[f14.index];
        g16?.type && (g16?.type === "function" ? this._emit("tool_calls.function.arguments.delta", { name: g16.function?.name, index: f14.index, arguments: g16.function.arguments, parsed_arguments: g16.function.parsed_arguments, arguments_delta: f14.function?.arguments ?? "" }) : (g16?.type, void 0));
      }
    }
  }, G6 = function(e7, t9) {
    if (i5(this, h10, "m", B5).call(this, e7).done_tool_calls.has(t9)) return;
    let r39 = e7.message.tool_calls?.[t9];
    if (!r39) throw new Error("no tool call snapshot");
    if (!r39.type) throw new Error("tool call snapshot missing `type`");
    if (r39.type === "function") {
      let l16 = i5(this, y11, "f")?.tools?.find((f14) => f14.type === "function" && f14.function.name === r39.function.name);
      this._emit("tool_calls.function.arguments.done", { name: r39.function.name, index: t9, arguments: r39.function.arguments, parsed_arguments: o3(l16) ? l16.$parseRaw(r39.function.arguments) : l16?.function.strict ? JSON.parse(r39.function.arguments) : null });
    } else r39.type;
  }, K6 = function(e7) {
    let t9 = i5(this, h10, "m", B5).call(this, e7);
    if (e7.message.content && !t9.content_done) {
      t9.content_done = true;
      let o18 = i5(this, h10, "m", V6).call(this);
      this._emit("content.done", { content: e7.message.content, parsed: o18 ? o18.$parseRaw(e7.message.content) : null });
    }
    e7.message.refusal && !t9.refusal_done && (t9.refusal_done = true, this._emit("refusal.done", { refusal: e7.message.refusal })), e7.logprobs?.content && !t9.logprobs_content_done && (t9.logprobs_content_done = true, this._emit("logprobs.content.done", { content: e7.logprobs.content })), e7.logprobs?.refusal && !t9.logprobs_refusal_done && (t9.logprobs_refusal_done = true, this._emit("logprobs.refusal.done", { refusal: e7.logprobs.refusal }));
  }, W7 = function() {
    if (this.ended) throw new d3("stream has ended, this shouldn't happen");
    let e7 = i5(this, x8, "f");
    if (!e7) throw new d3("request ended without sending any chunks");
    return n4(this, x8, void 0, "f"), n4(this, $8, [], "f"), Ct3(e7, i5(this, y11, "f"));
  }, V6 = function() {
    let e7 = i5(this, y11, "f")?.response_format;
    return f2(e7) ? e7 : null;
  }, j6 = function(e7) {
    var t9, o18, r39, l16;
    let f14 = i5(this, x8, "f"), { choices: g16, ...b15 } = e7;
    f14 ? Object.assign(f14, b15) : f14 = n4(this, x8, { ...b15, choices: [] }, "f");
    for (let { delta: w19, finish_reason: u18, index: i21, logprobs: m26 = null, ...d19 } of e7.choices) {
      let a11 = f14.choices[i21];
      if (a11 || (a11 = f14.choices[i21] = { finish_reason: u18, index: i21, message: {}, logprobs: m26, ...d19 }), m26) if (!a11.logprobs) a11.logprobs = Object.assign({}, m26);
      else {
        let { content: A13, refusal: R11, ...T9 } = m26;
        Object.assign(a11.logprobs, T9), A13 && ((t9 = a11.logprobs).content ?? (t9.content = []), a11.logprobs.content.push(...A13)), R11 && ((o18 = a11.logprobs).refusal ?? (o18.refusal = []), a11.logprobs.refusal.push(...R11));
      }
      if (u18 && (a11.finish_reason = u18, i5(this, y11, "f") && c4(i5(this, y11, "f")))) {
        if (u18 === "length") throw new m4();
        if (u18 === "content_filter") throw new J4();
      }
      if (Object.assign(a11, d19), !w19) continue;
      let { content: P14, refusal: F13, function_call: C10, role: L9, tool_calls: N9, ...J15 } = w19;
      if (Object.assign(a11.message, J15), F13 && (a11.message.refusal = (a11.message.refusal || "") + F13), L9 && (a11.message.role = L9), C10 && (a11.message.function_call ? (C10.name && (a11.message.function_call.name = C10.name), C10.arguments && ((r39 = a11.message.function_call).arguments ?? (r39.arguments = ""), a11.message.function_call.arguments += C10.arguments)) : a11.message.function_call = C10), P14 && (a11.message.content = (a11.message.content || "") + P14, !a11.message.refusal && i5(this, h10, "m", V6).call(this) && (a11.message.parsed = X6(a11.message.content))), N9) {
        a11.message.tool_calls || (a11.message.tool_calls = []);
        for (let { index: A13, id: R11, type: T9, function: O10, ...k14 } of N9) {
          let _14 = (l16 = a11.message.tool_calls)[A13] ?? (l16[A13] = {});
          Object.assign(_14, k14), R11 && (_14.id = R11), T9 && (_14.type = T9), O10 && (_14.function ?? (_14.function = { name: O10.name ?? "", arguments: "" })), O10?.name && (_14.function.name = O10.name), O10?.arguments && (_14.function.arguments += O10.arguments, $5(i5(this, y11, "f"), _14) && (_14.function.parsed_arguments = X6(_14.function.arguments)));
        }
      }
    }
    return f14;
  }, Symbol.asyncIterator)]() {
    let s9 = [], e7 = [], t9 = false;
    return this.on("chunk", (o18) => {
      let r39 = e7.shift();
      r39 ? r39.resolve(o18) : s9.push(o18);
    }), this.on("end", () => {
      t9 = true;
      for (let o18 of e7) o18.resolve(void 0);
      e7.length = 0;
    }), this.on("abort", (o18) => {
      t9 = true;
      for (let r39 of e7) r39.reject(o18);
      e7.length = 0;
    }), this.on("error", (o18) => {
      t9 = true;
      for (let r39 of e7) r39.reject(o18);
      e7.length = 0;
    }), { next: async () => s9.length ? { value: s9.shift(), done: false } : t9 ? { value: void 0, done: true } : new Promise((r39, l16) => e7.push({ resolve: r39, reject: l16 })).then((r39) => r39 ? { value: r39, done: false } : { value: void 0, done: true }), return: async () => (this.abort(), { value: void 0, done: true }) };
  }
  toReadableStream() {
    return new N5(this[Symbol.asyncIterator].bind(this), this.controller).toReadableStream();
  }
};
function Ct3(n17, s9) {
  let { id: e7, choices: t9, created: o18, model: r39, system_fingerprint: l16, ...f14 } = n17, g16 = { ...f14, id: e7, choices: t9.map(({ message: b15, finish_reason: w19, index: u18, logprobs: i21, ...m26 }) => {
    if (!w19) throw new d3(`missing finish_reason for choice ${u18}`);
    let { content: d19 = null, function_call: a11, tool_calls: P14, ...F13 } = b15, C10 = b15.role;
    if (!C10) throw new d3(`missing role for choice ${u18}`);
    if (a11) {
      let { arguments: L9, name: N9 } = a11;
      if (L9 == null) throw new d3(`missing function_call.arguments for choice ${u18}`);
      if (!N9) throw new d3(`missing function_call.name for choice ${u18}`);
      return { ...m26, message: { content: d19, function_call: { arguments: L9, name: N9 }, role: C10, refusal: b15.refusal ?? null }, finish_reason: w19, index: u18, logprobs: i21 };
    }
    return P14 ? { ...m26, index: u18, finish_reason: w19, logprobs: i21, message: { ...F13, role: C10, content: d19, refusal: b15.refusal ?? null, tool_calls: P14.map((L9, N9) => {
      let { function: J15, type: A13, id: R11, ...T9 } = L9, { arguments: O10, name: k14, ..._14 } = J15 || {};
      if (R11 == null) throw new d3(`missing choices[${u18}].tool_calls[${N9}].id
${Y5(n17)}`);
      if (A13 == null) throw new d3(`missing choices[${u18}].tool_calls[${N9}].type
${Y5(n17)}`);
      if (k14 == null) throw new d3(`missing choices[${u18}].tool_calls[${N9}].function.name
${Y5(n17)}`);
      if (O10 == null) throw new d3(`missing choices[${u18}].tool_calls[${N9}].function.arguments
${Y5(n17)}`);
      return { ...T9, id: R11, type: A13, function: { ..._14, name: k14, arguments: O10 } };
    }) } } : { ...m26, message: { ...F13, content: d19, role: C10, refusal: b15.refusal ?? null }, finish_reason: w19, index: u18, logprobs: i21 };
  }), created: o18, model: r39, object: "chat.completion", ...l16 ? { system_fingerprint: l16 } : {} };
  return w5(g16, s9);
}
function Y5(n17) {
  return JSON.stringify(n17);
}
var S6 = class n12 extends E7 {
  static fromReadableStream(s9) {
    let e7 = new n12(null);
    return e7._run(() => e7._fromReadableStream(s9)), e7;
  }
  static runTools(s9, e7, t9) {
    let o18 = new n12(e7), r39 = { ...t9, headers: { ...t9?.headers, "X-Stainless-Helper-Method": "runTools" } };
    return o18._run(() => o18._runTools(s9, e7, r39)), o18;
  }
};
var q9 = class extends t5 {
  constructor() {
    super(...arguments), this.messages = new M8(this._client);
  }
  create(s9, e7) {
    return this._client.post("/chat/completions", { body: s9, ...e7, stream: s9.stream ?? false });
  }
  retrieve(s9, e7) {
    return this._client.get(m12`/chat/completions/${s9}`, e7);
  }
  update(s9, e7, t9) {
    return this._client.post(m12`/chat/completions/${s9}`, { body: e7, ...t9 });
  }
  list(s9 = {}, e7) {
    return this._client.getAPIList("/chat/completions", l7, { query: s9, ...e7 });
  }
  delete(s9, e7) {
    return this._client.delete(m12`/chat/completions/${s9}`, e7);
  }
  parse(s9, e7) {
    return R3(s9.tools), this._client.chat.completions.create(s9, { ...e7, headers: { ...e7?.headers, "X-Stainless-Helper-Method": "chat.completions.parse" } })._thenUnwrap((t9) => i2(t9, s9));
  }
  runTools(s9, e7) {
    return s9.stream ? S6.runTools(this._client, s9, e7) : U7.runTools(this._client, s9, e7);
  }
  stream(s9, e7) {
    return E7.createChatCompletion(this._client, s9, e7);
  }
};
q9.Messages = M8;

// https://esm.sh/openai@5.12.0/denonext/internal/headers.mjs
var f9 = Symbol("brand.privateNullableHeaders");
function* d11(e7) {
  if (!e7) return;
  if (f9 in e7) {
    let { values: r39, nulls: l16 } = e7;
    yield* r39.entries();
    for (let o18 of l16) yield [o18, null];
    return;
  }
  let t9 = false, n17;
  e7 instanceof Headers ? n17 = e7.entries() : u5(e7) ? n17 = e7 : (t9 = true, n17 = Object.entries(e7 ?? {}));
  for (let r39 of n17) {
    let l16 = r39[0];
    if (typeof l16 != "string") throw new TypeError("expected header name to be a string");
    let o18 = u5(r39[1]) ? r39[1] : [r39[1]], a11 = false;
    for (let s9 of o18) s9 !== void 0 && (t9 && !a11 && (a11 = true, yield [l16, null]), yield [l16, s9]);
  }
}
var c12 = (e7) => {
  let t9 = new Headers(), n17 = /* @__PURE__ */ new Set();
  for (let r39 of e7) {
    let l16 = /* @__PURE__ */ new Set();
    for (let [o18, a11] of d11(r39)) {
      let s9 = o18.toLowerCase();
      l16.has(s9) || (t9.delete(o18), l16.add(s9)), a11 === null ? (t9.delete(o18), n17.add(s9)) : (t9.append(o18, a11), n17.delete(s9));
    }
  }
  return { [f9]: true, values: t9, nulls: n17 };
};

// https://esm.sh/openai@5.12.0/denonext/resources/audio/audio.mjs
var r35 = class extends t5 {
  create(t9, e7) {
    return this._client.post("/audio/speech", { body: t9, ...e7, headers: c12([{ Accept: "application/octet-stream" }, e7?.headers]), __binaryResponse: true });
  }
};
var s5 = class extends t5 {
  create(t9, e7) {
    return this._client.post("/audio/transcriptions", u7({ body: t9, ...e7, stream: t9.stream ?? false, __metadata: { model: t9.model } }, this._client));
  }
};
var i11 = class extends t5 {
  create(t9, e7) {
    return this._client.post("/audio/translations", u7({ body: t9, ...e7, __metadata: { model: t9.model } }, this._client));
  }
};
var o9 = class extends t5 {
  constructor() {
    super(...arguments), this.transcriptions = new s5(this._client), this.translations = new i11(this._client), this.speech = new r35(this._client);
  }
};
o9.Transcriptions = s5;
o9.Translations = i11;
o9.Speech = r35;

// https://esm.sh/openai@5.12.0/denonext/resources/batches.mjs
var s6 = class extends t5 {
  create(t9, e7) {
    return this._client.post("/batches", { body: t9, ...e7 });
  }
  retrieve(t9, e7) {
    return this._client.get(m12`/batches/${t9}`, e7);
  }
  list(t9 = {}, e7) {
    return this._client.getAPIList("/batches", l7, { query: t9, ...e7 });
  }
  cancel(t9, e7) {
    return this._client.post(m12`/batches/${t9}/cancel`, e7);
  }
};

// https://esm.sh/openai@5.12.0/denonext/resources/beta/beta.mjs
var I5 = class extends t5 {
  create(e7, t9) {
    return this._client.post("/assistants", { body: e7, ...t9, headers: c12([{ "OpenAI-Beta": "assistants=v2" }, t9?.headers]) });
  }
  retrieve(e7, t9) {
    return this._client.get(m12`/assistants/${e7}`, { ...t9, headers: c12([{ "OpenAI-Beta": "assistants=v2" }, t9?.headers]) });
  }
  update(e7, t9, s9) {
    return this._client.post(m12`/assistants/${e7}`, { body: t9, ...s9, headers: c12([{ "OpenAI-Beta": "assistants=v2" }, s9?.headers]) });
  }
  list(e7 = {}, t9) {
    return this._client.getAPIList("/assistants", l7, { query: e7, ...t9, headers: c12([{ "OpenAI-Beta": "assistants=v2" }, t9?.headers]) });
  }
  delete(e7, t9) {
    return this._client.delete(m12`/assistants/${e7}`, { ...t9, headers: c12([{ "OpenAI-Beta": "assistants=v2" }, t9?.headers]) });
  }
};
var y12 = class extends t5 {
  create(e7, t9) {
    return this._client.post("/realtime/sessions", { body: e7, ...t9, headers: c12([{ "OpenAI-Beta": "assistants=v2" }, t9?.headers]) });
  }
};
var v5 = class extends t5 {
  create(e7, t9) {
    return this._client.post("/realtime/transcription_sessions", { body: e7, ...t9, headers: c12([{ "OpenAI-Beta": "assistants=v2" }, t9?.headers]) });
  }
};
var _8 = class extends t5 {
  constructor() {
    super(...arguments), this.sessions = new y12(this._client), this.transcriptionSessions = new v5(this._client);
  }
};
_8.Sessions = y12;
_8.TranscriptionSessions = v5;
var R7 = class extends t5 {
  create(e7, t9, s9) {
    return this._client.post(m12`/threads/${e7}/messages`, { body: t9, ...s9, headers: c12([{ "OpenAI-Beta": "assistants=v2" }, s9?.headers]) });
  }
  retrieve(e7, t9, s9) {
    let { thread_id: a11 } = t9;
    return this._client.get(m12`/threads/${a11}/messages/${e7}`, { ...s9, headers: c12([{ "OpenAI-Beta": "assistants=v2" }, s9?.headers]) });
  }
  update(e7, t9, s9) {
    let { thread_id: a11, ...r39 } = t9;
    return this._client.post(m12`/threads/${a11}/messages/${e7}`, { body: r39, ...s9, headers: c12([{ "OpenAI-Beta": "assistants=v2" }, s9?.headers]) });
  }
  list(e7, t9 = {}, s9) {
    return this._client.getAPIList(m12`/threads/${e7}/messages`, l7, { query: t9, ...s9, headers: c12([{ "OpenAI-Beta": "assistants=v2" }, s9?.headers]) });
  }
  delete(e7, t9, s9) {
    let { thread_id: a11 } = t9;
    return this._client.delete(m12`/threads/${a11}/messages/${e7}`, { ...s9, headers: c12([{ "OpenAI-Beta": "assistants=v2" }, s9?.headers]) });
  }
};
var P8 = class extends t5 {
  retrieve(e7, t9, s9) {
    let { thread_id: a11, run_id: r39, ...i21 } = t9;
    return this._client.get(m12`/threads/${a11}/runs/${r39}/steps/${e7}`, { query: i21, ...s9, headers: c12([{ "OpenAI-Beta": "assistants=v2" }, s9?.headers]) });
  }
  list(e7, t9, s9) {
    let { thread_id: a11, ...r39 } = t9;
    return this._client.getAPIList(m12`/threads/${a11}/runs/${e7}/steps`, l7, { query: r39, ...s9, headers: c12([{ "OpenAI-Beta": "assistants=v2" }, s9?.headers]) });
  }
};
var h11;
var S7;
var V7;
var m14;
var H8;
var u10;
var b10;
var k5;
var g9;
var F7;
var l9;
var L4;
var j7;
var B6;
var T3;
var C6;
var J8;
var K7;
var Y6;
var Z6;
var ee4;
var te5;
var se5;
var p12 = class extends P5 {
  constructor() {
    super(...arguments), h11.add(this), V7.set(this, []), m14.set(this, {}), H8.set(this, {}), u10.set(this, void 0), b10.set(this, void 0), k5.set(this, void 0), g9.set(this, void 0), F7.set(this, void 0), l9.set(this, void 0), L4.set(this, void 0), j7.set(this, void 0), B6.set(this, void 0);
  }
  [(V7 = /* @__PURE__ */ new WeakMap(), m14 = /* @__PURE__ */ new WeakMap(), H8 = /* @__PURE__ */ new WeakMap(), u10 = /* @__PURE__ */ new WeakMap(), b10 = /* @__PURE__ */ new WeakMap(), k5 = /* @__PURE__ */ new WeakMap(), g9 = /* @__PURE__ */ new WeakMap(), F7 = /* @__PURE__ */ new WeakMap(), l9 = /* @__PURE__ */ new WeakMap(), L4 = /* @__PURE__ */ new WeakMap(), j7 = /* @__PURE__ */ new WeakMap(), B6 = /* @__PURE__ */ new WeakMap(), h11 = /* @__PURE__ */ new WeakSet(), Symbol.asyncIterator)]() {
    let e7 = [], t9 = [], s9 = false;
    return this.on("event", (a11) => {
      let r39 = t9.shift();
      r39 ? r39.resolve(a11) : e7.push(a11);
    }), this.on("end", () => {
      s9 = true;
      for (let a11 of t9) a11.resolve(void 0);
      t9.length = 0;
    }), this.on("abort", (a11) => {
      s9 = true;
      for (let r39 of t9) r39.reject(a11);
      t9.length = 0;
    }), this.on("error", (a11) => {
      s9 = true;
      for (let r39 of t9) r39.reject(a11);
      t9.length = 0;
    }), { next: async () => e7.length ? { value: e7.shift(), done: false } : s9 ? { value: void 0, done: true } : new Promise((r39, i21) => t9.push({ resolve: r39, reject: i21 })).then((r39) => r39 ? { value: r39, done: false } : { value: void 0, done: true }), return: async () => (this.abort(), { value: void 0, done: true }) };
  }
  static fromReadableStream(e7) {
    let t9 = new S7();
    return t9._run(() => t9._fromReadableStream(e7)), t9;
  }
  async _fromReadableStream(e7, t9) {
    let s9 = t9?.signal;
    s9 && (s9.aborted && this.controller.abort(), s9.addEventListener("abort", () => this.controller.abort())), this._connected();
    let a11 = N5.fromReadableStream(e7, this.controller);
    for await (let r39 of a11) i5(this, h11, "m", T3).call(this, r39);
    if (a11.controller.signal?.aborted) throw new $4();
    return this._addRun(i5(this, h11, "m", C6).call(this));
  }
  toReadableStream() {
    return new N5(this[Symbol.asyncIterator].bind(this), this.controller).toReadableStream();
  }
  static createToolAssistantStream(e7, t9, s9, a11) {
    let r39 = new S7();
    return r39._run(() => r39._runToolAssistantStream(e7, t9, s9, { ...a11, headers: { ...a11?.headers, "X-Stainless-Helper-Method": "stream" } })), r39;
  }
  async _createToolAssistantStream(e7, t9, s9, a11) {
    let r39 = a11?.signal;
    r39 && (r39.aborted && this.controller.abort(), r39.addEventListener("abort", () => this.controller.abort()));
    let i21 = { ...s9, stream: true }, d19 = await e7.submitToolOutputs(t9, i21, { ...a11, signal: this.controller.signal });
    this._connected();
    for await (let f14 of d19) i5(this, h11, "m", T3).call(this, f14);
    if (d19.controller.signal?.aborted) throw new $4();
    return this._addRun(i5(this, h11, "m", C6).call(this));
  }
  static createThreadAssistantStream(e7, t9, s9) {
    let a11 = new S7();
    return a11._run(() => a11._threadAssistantStream(e7, t9, { ...s9, headers: { ...s9?.headers, "X-Stainless-Helper-Method": "stream" } })), a11;
  }
  static createAssistantStream(e7, t9, s9, a11) {
    let r39 = new S7();
    return r39._run(() => r39._runAssistantStream(e7, t9, s9, { ...a11, headers: { ...a11?.headers, "X-Stainless-Helper-Method": "stream" } })), r39;
  }
  currentEvent() {
    return i5(this, L4, "f");
  }
  currentRun() {
    return i5(this, j7, "f");
  }
  currentMessageSnapshot() {
    return i5(this, u10, "f");
  }
  currentRunStepSnapshot() {
    return i5(this, B6, "f");
  }
  async finalRunSteps() {
    return await this.done(), Object.values(i5(this, m14, "f"));
  }
  async finalMessages() {
    return await this.done(), Object.values(i5(this, H8, "f"));
  }
  async finalRun() {
    if (await this.done(), !i5(this, b10, "f")) throw Error("Final run was not received.");
    return i5(this, b10, "f");
  }
  async _createThreadAssistantStream(e7, t9, s9) {
    let a11 = s9?.signal;
    a11 && (a11.aborted && this.controller.abort(), a11.addEventListener("abort", () => this.controller.abort()));
    let r39 = { ...t9, stream: true }, i21 = await e7.createAndRun(r39, { ...s9, signal: this.controller.signal });
    this._connected();
    for await (let d19 of i21) i5(this, h11, "m", T3).call(this, d19);
    if (i21.controller.signal?.aborted) throw new $4();
    return this._addRun(i5(this, h11, "m", C6).call(this));
  }
  async _createAssistantStream(e7, t9, s9, a11) {
    let r39 = a11?.signal;
    r39 && (r39.aborted && this.controller.abort(), r39.addEventListener("abort", () => this.controller.abort()));
    let i21 = { ...s9, stream: true }, d19 = await e7.create(t9, i21, { ...a11, signal: this.controller.signal });
    this._connected();
    for await (let f14 of d19) i5(this, h11, "m", T3).call(this, f14);
    if (d19.controller.signal?.aborted) throw new $4();
    return this._addRun(i5(this, h11, "m", C6).call(this));
  }
  static accumulateDelta(e7, t9) {
    for (let [s9, a11] of Object.entries(t9)) {
      if (!e7.hasOwnProperty(s9)) {
        e7[s9] = a11;
        continue;
      }
      let r39 = e7[s9];
      if (r39 == null) {
        e7[s9] = a11;
        continue;
      }
      if (s9 === "index" || s9 === "type") {
        e7[s9] = a11;
        continue;
      }
      if (typeof r39 == "string" && typeof a11 == "string") r39 += a11;
      else if (typeof r39 == "number" && typeof a11 == "number") r39 += a11;
      else if (b7(r39) && b7(a11)) r39 = this.accumulateDelta(r39, a11);
      else if (Array.isArray(r39) && Array.isArray(a11)) {
        if (r39.every((i21) => typeof i21 == "string" || typeof i21 == "number")) {
          r39.push(...a11);
          continue;
        }
        for (let i21 of a11) {
          if (!b7(i21)) throw new Error(`Expected array delta entry to be an object but got: ${i21}`);
          let d19 = i21.index;
          if (d19 == null) throw console.error(i21), new Error("Expected array delta entry to have an `index` property");
          if (typeof d19 != "number") throw new Error(`Expected array delta entry \`index\` property to be a number but got ${d19}`);
          let f14 = r39[d19];
          f14 == null ? r39.push(i21) : r39[d19] = this.accumulateDelta(f14, i21);
        }
        continue;
      } else throw Error(`Unhandled record type: ${s9}, deltaValue: ${a11}, accValue: ${r39}`);
      e7[s9] = r39;
    }
    return e7;
  }
  _addRun(e7) {
    return e7;
  }
  async _threadAssistantStream(e7, t9, s9) {
    return await this._createThreadAssistantStream(t9, e7, s9);
  }
  async _runAssistantStream(e7, t9, s9, a11) {
    return await this._createAssistantStream(t9, e7, s9, a11);
  }
  async _runToolAssistantStream(e7, t9, s9, a11) {
    return await this._createToolAssistantStream(t9, e7, s9, a11);
  }
};
S7 = p12, T3 = function(e7) {
  if (!this.ended) switch (n4(this, L4, e7, "f"), i5(this, h11, "m", Y6).call(this, e7), e7.event) {
    case "thread.created":
      break;
    case "thread.run.created":
    case "thread.run.queued":
    case "thread.run.in_progress":
    case "thread.run.requires_action":
    case "thread.run.completed":
    case "thread.run.incomplete":
    case "thread.run.failed":
    case "thread.run.cancelling":
    case "thread.run.cancelled":
    case "thread.run.expired":
      i5(this, h11, "m", se5).call(this, e7);
      break;
    case "thread.run.step.created":
    case "thread.run.step.in_progress":
    case "thread.run.step.delta":
    case "thread.run.step.completed":
    case "thread.run.step.failed":
    case "thread.run.step.cancelled":
    case "thread.run.step.expired":
      i5(this, h11, "m", K7).call(this, e7);
      break;
    case "thread.message.created":
    case "thread.message.in_progress":
    case "thread.message.delta":
    case "thread.message.completed":
    case "thread.message.incomplete":
      i5(this, h11, "m", J8).call(this, e7);
      break;
    case "error":
      throw new Error("Encountered an error event in event processing - errors should be processed earlier");
    default:
  }
}, C6 = function() {
  if (this.ended) throw new d3("stream has ended, this shouldn't happen");
  if (!i5(this, b10, "f")) throw Error("Final run has not been received");
  return i5(this, b10, "f");
}, J8 = function(e7) {
  let [t9, s9] = i5(this, h11, "m", ee4).call(this, e7, i5(this, u10, "f"));
  n4(this, u10, t9, "f"), i5(this, H8, "f")[t9.id] = t9;
  for (let a11 of s9) {
    let r39 = t9.content[a11.index];
    r39?.type == "text" && this._emit("textCreated", r39.text);
  }
  switch (e7.event) {
    case "thread.message.created":
      this._emit("messageCreated", e7.data);
      break;
    case "thread.message.in_progress":
      break;
    case "thread.message.delta":
      if (this._emit("messageDelta", e7.data.delta, t9), e7.data.delta.content) for (let a11 of e7.data.delta.content) {
        if (a11.type == "text" && a11.text) {
          let r39 = a11.text, i21 = t9.content[a11.index];
          if (i21 && i21.type == "text") this._emit("textDelta", r39, i21.text);
          else throw Error("The snapshot associated with this text delta is not text or missing");
        }
        if (a11.index != i5(this, k5, "f")) {
          if (i5(this, g9, "f")) switch (i5(this, g9, "f").type) {
            case "text":
              this._emit("textDone", i5(this, g9, "f").text, i5(this, u10, "f"));
              break;
            case "image_file":
              this._emit("imageFileDone", i5(this, g9, "f").image_file, i5(this, u10, "f"));
              break;
          }
          n4(this, k5, a11.index, "f");
        }
        n4(this, g9, t9.content[a11.index], "f");
      }
      break;
    case "thread.message.completed":
    case "thread.message.incomplete":
      if (i5(this, k5, "f") !== void 0) {
        let a11 = e7.data.content[i5(this, k5, "f")];
        if (a11) switch (a11.type) {
          case "image_file":
            this._emit("imageFileDone", a11.image_file, i5(this, u10, "f"));
            break;
          case "text":
            this._emit("textDone", a11.text, i5(this, u10, "f"));
            break;
        }
      }
      i5(this, u10, "f") && this._emit("messageDone", e7.data), n4(this, u10, void 0, "f");
  }
}, K7 = function(e7) {
  let t9 = i5(this, h11, "m", Z6).call(this, e7);
  switch (n4(this, B6, t9, "f"), e7.event) {
    case "thread.run.step.created":
      this._emit("runStepCreated", e7.data);
      break;
    case "thread.run.step.delta":
      let s9 = e7.data.delta;
      if (s9.step_details && s9.step_details.type == "tool_calls" && s9.step_details.tool_calls && t9.step_details.type == "tool_calls") for (let r39 of s9.step_details.tool_calls) r39.index == i5(this, F7, "f") ? this._emit("toolCallDelta", r39, t9.step_details.tool_calls[r39.index]) : (i5(this, l9, "f") && this._emit("toolCallDone", i5(this, l9, "f")), n4(this, F7, r39.index, "f"), n4(this, l9, t9.step_details.tool_calls[r39.index], "f"), i5(this, l9, "f") && this._emit("toolCallCreated", i5(this, l9, "f")));
      this._emit("runStepDelta", e7.data.delta, t9);
      break;
    case "thread.run.step.completed":
    case "thread.run.step.failed":
    case "thread.run.step.cancelled":
    case "thread.run.step.expired":
      n4(this, B6, void 0, "f"), e7.data.step_details.type == "tool_calls" && i5(this, l9, "f") && (this._emit("toolCallDone", i5(this, l9, "f")), n4(this, l9, void 0, "f")), this._emit("runStepDone", e7.data, t9);
      break;
    case "thread.run.step.in_progress":
      break;
  }
}, Y6 = function(e7) {
  i5(this, V7, "f").push(e7), this._emit("event", e7);
}, Z6 = function(e7) {
  switch (e7.event) {
    case "thread.run.step.created":
      return i5(this, m14, "f")[e7.data.id] = e7.data, e7.data;
    case "thread.run.step.delta":
      let t9 = i5(this, m14, "f")[e7.data.id];
      if (!t9) throw Error("Received a RunStepDelta before creation of a snapshot");
      let s9 = e7.data;
      if (s9.delta) {
        let a11 = S7.accumulateDelta(t9, s9.delta);
        i5(this, m14, "f")[e7.data.id] = a11;
      }
      return i5(this, m14, "f")[e7.data.id];
    case "thread.run.step.completed":
    case "thread.run.step.failed":
    case "thread.run.step.cancelled":
    case "thread.run.step.expired":
    case "thread.run.step.in_progress":
      i5(this, m14, "f")[e7.data.id] = e7.data;
      break;
  }
  if (i5(this, m14, "f")[e7.data.id]) return i5(this, m14, "f")[e7.data.id];
  throw new Error("No snapshot available");
}, ee4 = function(e7, t9) {
  let s9 = [];
  switch (e7.event) {
    case "thread.message.created":
      return [e7.data, s9];
    case "thread.message.delta":
      if (!t9) throw Error("Received a delta with no existing snapshot (there should be one from message creation)");
      let a11 = e7.data;
      if (a11.delta.content) for (let r39 of a11.delta.content) if (r39.index in t9.content) {
        let i21 = t9.content[r39.index];
        t9.content[r39.index] = i5(this, h11, "m", te5).call(this, r39, i21);
      } else t9.content[r39.index] = r39, s9.push(r39);
      return [t9, s9];
    case "thread.message.in_progress":
    case "thread.message.completed":
    case "thread.message.incomplete":
      if (t9) return [t9, s9];
      throw Error("Received thread message event with no existing snapshot");
  }
  throw Error("Tried to accumulate a non-message event");
}, te5 = function(e7, t9) {
  return S7.accumulateDelta(t9, e7);
}, se5 = function(e7) {
  switch (n4(this, j7, e7.data, "f"), e7.event) {
    case "thread.run.created":
      break;
    case "thread.run.queued":
      break;
    case "thread.run.in_progress":
      break;
    case "thread.run.requires_action":
    case "thread.run.cancelled":
    case "thread.run.failed":
    case "thread.run.completed":
    case "thread.run.expired":
    case "thread.run.incomplete":
      n4(this, b10, e7.data, "f"), i5(this, l9, "f") && (this._emit("toolCallDone", i5(this, l9, "f")), n4(this, l9, void 0, "f"));
      break;
    case "thread.run.cancelling":
      break;
  }
};
var x9 = class extends t5 {
  constructor() {
    super(...arguments), this.steps = new P8(this._client);
  }
  create(e7, t9, s9) {
    let { include: a11, ...r39 } = t9;
    return this._client.post(m12`/threads/${e7}/runs`, { query: { include: a11 }, body: r39, ...s9, headers: c12([{ "OpenAI-Beta": "assistants=v2" }, s9?.headers]), stream: t9.stream ?? false });
  }
  retrieve(e7, t9, s9) {
    let { thread_id: a11 } = t9;
    return this._client.get(m12`/threads/${a11}/runs/${e7}`, { ...s9, headers: c12([{ "OpenAI-Beta": "assistants=v2" }, s9?.headers]) });
  }
  update(e7, t9, s9) {
    let { thread_id: a11, ...r39 } = t9;
    return this._client.post(m12`/threads/${a11}/runs/${e7}`, { body: r39, ...s9, headers: c12([{ "OpenAI-Beta": "assistants=v2" }, s9?.headers]) });
  }
  list(e7, t9 = {}, s9) {
    return this._client.getAPIList(m12`/threads/${e7}/runs`, l7, { query: t9, ...s9, headers: c12([{ "OpenAI-Beta": "assistants=v2" }, s9?.headers]) });
  }
  cancel(e7, t9, s9) {
    let { thread_id: a11 } = t9;
    return this._client.post(m12`/threads/${a11}/runs/${e7}/cancel`, { ...s9, headers: c12([{ "OpenAI-Beta": "assistants=v2" }, s9?.headers]) });
  }
  async createAndPoll(e7, t9, s9) {
    let a11 = await this.create(e7, t9, s9);
    return await this.poll(a11.id, { thread_id: e7 }, s9);
  }
  createAndStream(e7, t9, s9) {
    return p12.createAssistantStream(e7, this._client.beta.threads.runs, t9, s9);
  }
  async poll(e7, t9, s9) {
    let a11 = c12([s9?.headers, { "X-Stainless-Poll-Helper": "true", "X-Stainless-Custom-Poll-Interval": s9?.pollIntervalMs?.toString() ?? void 0 }]);
    for (; ; ) {
      let { data: r39, response: i21 } = await this.retrieve(e7, t9, { ...s9, headers: { ...s9?.headers, ...a11 } }).withResponse();
      switch (r39.status) {
        case "queued":
        case "in_progress":
        case "cancelling":
          let d19 = 5e3;
          if (s9?.pollIntervalMs) d19 = s9.pollIntervalMs;
          else {
            let f14 = i21.headers.get("openai-poll-after-ms");
            if (f14) {
              let U11 = parseInt(f14);
              isNaN(U11) || (d19 = U11);
            }
          }
          await s2(d19);
          break;
        case "requires_action":
        case "incomplete":
        case "cancelled":
        case "completed":
        case "failed":
        case "expired":
          return r39;
      }
    }
  }
  stream(e7, t9, s9) {
    return p12.createAssistantStream(e7, this._client.beta.threads.runs, t9, s9);
  }
  submitToolOutputs(e7, t9, s9) {
    let { thread_id: a11, ...r39 } = t9;
    return this._client.post(m12`/threads/${a11}/runs/${e7}/submit_tool_outputs`, { body: r39, ...s9, headers: c12([{ "OpenAI-Beta": "assistants=v2" }, s9?.headers]), stream: t9.stream ?? false });
  }
  async submitToolOutputsAndPoll(e7, t9, s9) {
    let a11 = await this.submitToolOutputs(e7, t9, s9);
    return await this.poll(a11.id, t9, s9);
  }
  submitToolOutputsStream(e7, t9, s9) {
    return p12.createToolAssistantStream(e7, this._client.beta.threads.runs, t9, s9);
  }
};
x9.Steps = P8;
var A6 = class extends t5 {
  constructor() {
    super(...arguments), this.runs = new x9(this._client), this.messages = new R7(this._client);
  }
  create(e7 = {}, t9) {
    return this._client.post("/threads", { body: e7, ...t9, headers: c12([{ "OpenAI-Beta": "assistants=v2" }, t9?.headers]) });
  }
  retrieve(e7, t9) {
    return this._client.get(m12`/threads/${e7}`, { ...t9, headers: c12([{ "OpenAI-Beta": "assistants=v2" }, t9?.headers]) });
  }
  update(e7, t9, s9) {
    return this._client.post(m12`/threads/${e7}`, { body: t9, ...s9, headers: c12([{ "OpenAI-Beta": "assistants=v2" }, s9?.headers]) });
  }
  delete(e7, t9) {
    return this._client.delete(m12`/threads/${e7}`, { ...t9, headers: c12([{ "OpenAI-Beta": "assistants=v2" }, t9?.headers]) });
  }
  createAndRun(e7, t9) {
    return this._client.post("/threads/runs", { body: e7, ...t9, headers: c12([{ "OpenAI-Beta": "assistants=v2" }, t9?.headers]), stream: e7.stream ?? false });
  }
  async createAndRunPoll(e7, t9) {
    let s9 = await this.createAndRun(e7, t9);
    return await this.runs.poll(s9.id, { thread_id: s9.thread_id }, t9);
  }
  createAndRunStream(e7, t9) {
    return p12.createThreadAssistantStream(e7, this._client.beta.threads, t9);
  }
};
A6.Runs = x9;
A6.Messages = R7;
var W8 = class extends t5 {
  constructor() {
    super(...arguments), this.realtime = new _8(this._client), this.assistants = new I5(this._client), this.threads = new A6(this._client);
  }
};
W8.Realtime = _8;
W8.Assistants = I5;
W8.Threads = A6;

// https://esm.sh/openai@5.12.0/denonext/resources/completions.mjs
var t7 = class extends t5 {
  create(e7, r39) {
    return this._client.post("/completions", { body: e7, ...r39, stream: e7.stream ?? false });
  }
};

// https://esm.sh/openai@5.12.0/denonext/resources/containers/containers.mjs
var s7 = class extends t5 {
  retrieve(t9, e7, r39) {
    let { container_id: n17 } = e7;
    return this._client.get(m12`/containers/${n17}/files/${t9}/content`, { ...r39, headers: c12([{ Accept: "application/binary" }, r39?.headers]), __binaryResponse: true });
  }
};
var i12 = class extends t5 {
  constructor() {
    super(...arguments), this.content = new s7(this._client);
  }
  create(t9, e7, r39) {
    return this._client.post(m12`/containers/${t9}/files`, u7({ body: e7, ...r39 }, this._client));
  }
  retrieve(t9, e7, r39) {
    let { container_id: n17 } = e7;
    return this._client.get(m12`/containers/${n17}/files/${t9}`, r39);
  }
  list(t9, e7 = {}, r39) {
    return this._client.getAPIList(m12`/containers/${t9}/files`, l7, { query: e7, ...r39 });
  }
  delete(t9, e7, r39) {
    let { container_id: n17 } = e7;
    return this._client.delete(m12`/containers/${n17}/files/${t9}`, { ...r39, headers: c12([{ Accept: "*/*" }, r39?.headers]) });
  }
};
i12.Content = s7;
var c13 = class extends t5 {
  constructor() {
    super(...arguments), this.files = new i12(this._client);
  }
  create(t9, e7) {
    return this._client.post("/containers", { body: t9, ...e7 });
  }
  retrieve(t9, e7) {
    return this._client.get(m12`/containers/${t9}`, e7);
  }
  list(t9 = {}, e7) {
    return this._client.getAPIList("/containers", l7, { query: t9, ...e7 });
  }
  delete(t9, e7) {
    return this._client.delete(m12`/containers/${t9}`, { ...e7, headers: c12([{ Accept: "*/*" }, e7?.headers]) });
  }
};
c13.Files = i12;

// https://esm.sh/openai@5.12.0/denonext/resources/embeddings.mjs
var i13 = class extends t5 {
  create(e7, a11) {
    let n17 = !!e7.encoding_format, c18 = n17 ? e7.encoding_format : "base64";
    n17 && p7(this._client).debug("embeddings/user defined encoding_format:", e7.encoding_format);
    let r39 = this._client.post("/embeddings", { body: { ...e7, encoding_format: c18 }, ...a11 });
    return n17 ? r39 : (p7(this._client).debug("embeddings/decoding base64 embeddings from base64"), r39._thenUnwrap((t9) => (t9 && t9.data && t9.data.forEach((o18) => {
      let g16 = o18.embedding;
      o18.embedding = l5(g16);
    }), t9)));
  }
};

// https://esm.sh/openai@5.12.0/denonext/resources/evals/evals.mjs
var n13 = class extends t5 {
  retrieve(t9, e7, r39) {
    let { eval_id: s9, run_id: o18 } = e7;
    return this._client.get(m12`/evals/${s9}/runs/${o18}/output_items/${t9}`, r39);
  }
  list(t9, e7, r39) {
    let { eval_id: s9, ...o18 } = e7;
    return this._client.getAPIList(m12`/evals/${s9}/runs/${t9}/output_items`, l7, { query: o18, ...r39 });
  }
};
var i14 = class extends t5 {
  constructor() {
    super(...arguments), this.outputItems = new n13(this._client);
  }
  create(t9, e7, r39) {
    return this._client.post(m12`/evals/${t9}/runs`, { body: e7, ...r39 });
  }
  retrieve(t9, e7, r39) {
    let { eval_id: s9 } = e7;
    return this._client.get(m12`/evals/${s9}/runs/${t9}`, r39);
  }
  list(t9, e7 = {}, r39) {
    return this._client.getAPIList(m12`/evals/${t9}/runs`, l7, { query: e7, ...r39 });
  }
  delete(t9, e7, r39) {
    let { eval_id: s9 } = e7;
    return this._client.delete(m12`/evals/${s9}/runs/${t9}`, r39);
  }
  cancel(t9, e7, r39) {
    let { eval_id: s9 } = e7;
    return this._client.post(m12`/evals/${s9}/runs/${t9}`, r39);
  }
};
i14.OutputItems = n13;
var m15 = class extends t5 {
  constructor() {
    super(...arguments), this.runs = new i14(this._client);
  }
  create(t9, e7) {
    return this._client.post("/evals", { body: t9, ...e7 });
  }
  retrieve(t9, e7) {
    return this._client.get(m12`/evals/${t9}`, e7);
  }
  update(t9, e7, r39) {
    return this._client.post(m12`/evals/${t9}`, { body: e7, ...r39 });
  }
  list(t9 = {}, e7) {
    return this._client.getAPIList("/evals", l7, { query: t9, ...e7 });
  }
  delete(t9, e7) {
    return this._client.delete(m12`/evals/${t9}`, e7);
  }
};
m15.Runs = i14;

// https://esm.sh/openai@5.12.0/denonext/resources/files.mjs
var o10 = class extends t5 {
  create(e7, t9) {
    return this._client.post("/files", u7({ body: e7, ...t9 }, this._client));
  }
  retrieve(e7, t9) {
    return this._client.get(m12`/files/${e7}`, t9);
  }
  list(e7 = {}, t9) {
    return this._client.getAPIList("/files", l7, { query: e7, ...t9 });
  }
  delete(e7, t9) {
    return this._client.delete(m12`/files/${e7}`, t9);
  }
  content(e7, t9) {
    return this._client.get(m12`/files/${e7}/content`, { ...t9, headers: c12([{ Accept: "application/binary" }, t9?.headers]), __binaryResponse: true });
  }
  async waitForProcessing(e7, { pollInterval: t9 = 5e3, maxWait: s9 = 30 * 60 * 1e3 } = {}) {
    let n17 = /* @__PURE__ */ new Set(["processed", "error", "deleted"]), a11 = Date.now(), r39 = await this.retrieve(e7);
    for (; !r39.status || !n17.has(r39.status); ) if (await s2(t9), r39 = await this.retrieve(e7), Date.now() - a11 > s9) throw new g3({ message: `Giving up on waiting for file ${e7} to finish processing after ${s9} milliseconds.` });
    return r39;
  }
};

// https://esm.sh/openai@5.12.0/denonext/resources/fine-tuning/fine-tuning.mjs
var p13 = class extends t5 {
};
var c14 = class extends t5 {
  run(t9, e7) {
    return this._client.post("/fine_tuning/alpha/graders/run", { body: t9, ...e7 });
  }
  validate(t9, e7) {
    return this._client.post("/fine_tuning/alpha/graders/validate", { body: t9, ...e7 });
  }
};
var i15 = class extends t5 {
  constructor() {
    super(...arguments), this.graders = new c14(this._client);
  }
};
i15.Graders = c14;
var m16 = class extends t5 {
  create(t9, e7, s9) {
    return this._client.getAPIList(m12`/fine_tuning/checkpoints/${t9}/permissions`, h7, { body: e7, method: "post", ...s9 });
  }
  retrieve(t9, e7 = {}, s9) {
    return this._client.get(m12`/fine_tuning/checkpoints/${t9}/permissions`, { query: e7, ...s9 });
  }
  delete(t9, e7, s9) {
    let { fine_tuned_model_checkpoint: _14 } = e7;
    return this._client.delete(m12`/fine_tuning/checkpoints/${_14}/permissions/${t9}`, s9);
  }
};
var o11 = class extends t5 {
  constructor() {
    super(...arguments), this.permissions = new m16(this._client);
  }
};
o11.Permissions = m16;
var h12 = class extends t5 {
  list(t9, e7 = {}, s9) {
    return this._client.getAPIList(m12`/fine_tuning/jobs/${t9}/checkpoints`, l7, { query: e7, ...s9 });
  }
};
var n14 = class extends t5 {
  constructor() {
    super(...arguments), this.checkpoints = new h12(this._client);
  }
  create(t9, e7) {
    return this._client.post("/fine_tuning/jobs", { body: t9, ...e7 });
  }
  retrieve(t9, e7) {
    return this._client.get(m12`/fine_tuning/jobs/${t9}`, e7);
  }
  list(t9 = {}, e7) {
    return this._client.getAPIList("/fine_tuning/jobs", l7, { query: t9, ...e7 });
  }
  cancel(t9, e7) {
    return this._client.post(m12`/fine_tuning/jobs/${t9}/cancel`, e7);
  }
  listEvents(t9, e7 = {}, s9) {
    return this._client.getAPIList(m12`/fine_tuning/jobs/${t9}/events`, l7, { query: e7, ...s9 });
  }
  pause(t9, e7) {
    return this._client.post(m12`/fine_tuning/jobs/${t9}/pause`, e7);
  }
  resume(t9, e7) {
    return this._client.post(m12`/fine_tuning/jobs/${t9}/resume`, e7);
  }
};
n14.Checkpoints = h12;
var u11 = class extends t5 {
  constructor() {
    super(...arguments), this.methods = new p13(this._client), this.jobs = new n14(this._client), this.checkpoints = new o11(this._client), this.alpha = new i15(this._client);
  }
};
u11.Methods = p13;
u11.Jobs = n14;
u11.Checkpoints = o11;
u11.Alpha = i15;

// https://esm.sh/openai@5.12.0/denonext/resources/graders/graders.mjs
var r36 = class extends t5 {
};
var e3 = class extends t5 {
  constructor() {
    super(...arguments), this.graderModels = new r36(this._client);
  }
};
e3.GraderModels = r36;

// https://esm.sh/openai@5.12.0/denonext/resources/images.mjs
var i16 = class extends t5 {
  createVariation(t9, e7) {
    return this._client.post("/images/variations", u7({ body: t9, ...e7 }, this._client));
  }
  edit(t9, e7) {
    return this._client.post("/images/edits", u7({ body: t9, ...e7, stream: t9.stream ?? false }, this._client));
  }
  generate(t9, e7) {
    return this._client.post("/images/generations", { body: t9, ...e7, stream: t9.stream ?? false });
  }
};

// https://esm.sh/openai@5.12.0/denonext/resources/models.mjs
var i17 = class extends t5 {
  retrieve(e7, t9) {
    return this._client.get(m12`/models/${e7}`, t9);
  }
  list(e7) {
    return this._client.getAPIList("/models", h7, e7);
  }
  delete(e7, t9) {
    return this._client.delete(m12`/models/${e7}`, t9);
  }
};

// https://esm.sh/openai@5.12.0/denonext/resources/moderations.mjs
var e4 = class extends t5 {
  create(t9, r39) {
    return this._client.post("/moderations", { body: t9, ...r39 });
  }
};

// https://esm.sh/openai@5.12.0/denonext/resources/responses/responses.mjs
function y13(o18, t9) {
  return !t9 || !O7(t9) ? { ...o18, output_parsed: null, output: o18.output.map((e7) => e7.type === "function_call" ? { ...e7, parsed_arguments: null } : e7.type === "message" ? { ...e7, content: e7.content.map((s9) => ({ ...s9, parsed: null })) } : e7) } : w13(o18, t9);
}
function w13(o18, t9) {
  let e7 = o18.output.map((n17) => {
    if (n17.type === "function_call") return { ...n17, parsed_arguments: T4(t9, n17) };
    if (n17.type === "message") {
      let r39 = n17.content.map((u18) => u18.type === "output_text" ? { ...u18, parsed: k6(t9, u18.text) } : u18);
      return { ...n17, content: r39 };
    }
    return n17;
  }), s9 = Object.assign({}, o18, { output: e7 });
  return Object.getOwnPropertyDescriptor(o18, "output_text") || m17(s9), Object.defineProperty(s9, "output_parsed", { enumerable: true, get() {
    for (let n17 of s9.output) if (n17.type === "message") {
      for (let r39 of n17.content) if (r39.type === "output_text" && r39.parsed !== null) return r39.parsed;
    }
    return null;
  } }), s9;
}
function k6(o18, t9) {
  return o18.text?.format?.type !== "json_schema" ? null : "$parseRaw" in o18.text?.format ? (o18.text?.format).$parseRaw(t9) : JSON.parse(t9);
}
function O7(o18) {
  return !!f2(o18.text?.format);
}
function j8(o18) {
  return o18?.$brand === "auto-parseable-tool";
}
function A7(o18, t9) {
  return o18.find((e7) => e7.type === "function" && e7.name === t9);
}
function T4(o18, t9) {
  let e7 = A7(o18.tools ?? [], t9.name);
  return { ...t9, ...t9, parsed_arguments: j8(e7) ? e7.$parseRaw(t9.arguments) : e7?.strict ? JSON.parse(t9.arguments) : null };
}
function m17(o18) {
  let t9 = [];
  for (let e7 of o18.output) if (e7.type === "message") for (let s9 of e7.content) s9.type === "output_text" && t9.push(s9.text);
  o18.output_text = t9.join("");
}
var l10;
var h13;
var p14;
var _9;
var R8;
var $9;
var I6;
var P9;
var x10 = class o12 extends P5 {
  constructor(t9) {
    super(), l10.add(this), h13.set(this, void 0), p14.set(this, void 0), _9.set(this, void 0), n4(this, h13, t9, "f");
  }
  static createResponse(t9, e7, s9) {
    let n17 = new o12(e7);
    return n17._run(() => n17._createOrRetrieveResponse(t9, e7, { ...s9, headers: { ...s9?.headers, "X-Stainless-Helper-Method": "stream" } })), n17;
  }
  async _createOrRetrieveResponse(t9, e7, s9) {
    let n17 = s9?.signal;
    n17 && (n17.aborted && this.controller.abort(), n17.addEventListener("abort", () => this.controller.abort())), i5(this, l10, "m", R8).call(this);
    let r39, u18 = null;
    "response_id" in e7 ? (r39 = await t9.responses.retrieve(e7.response_id, { stream: true }, { ...s9, signal: this.controller.signal, stream: true }), u18 = e7.starting_after ?? null) : r39 = await t9.responses.create({ ...e7, stream: true }, { ...s9, signal: this.controller.signal }), this._connected();
    for await (let i21 of r39) i5(this, l10, "m", $9).call(this, i21, u18);
    if (r39.controller.signal?.aborted) throw new $4();
    return i5(this, l10, "m", I6).call(this);
  }
  [(h13 = /* @__PURE__ */ new WeakMap(), p14 = /* @__PURE__ */ new WeakMap(), _9 = /* @__PURE__ */ new WeakMap(), l10 = /* @__PURE__ */ new WeakSet(), R8 = function() {
    this.ended || n4(this, p14, void 0, "f");
  }, $9 = function(e7, s9) {
    if (this.ended) return;
    let n17 = (u18, i21) => {
      (s9 == null || i21.sequence_number > s9) && this._emit(u18, i21);
    }, r39 = i5(this, l10, "m", P9).call(this, e7);
    switch (n17("event", e7), e7.type) {
      case "response.output_text.delta": {
        let u18 = r39.output[e7.output_index];
        if (!u18) throw new d3(`missing output at index ${e7.output_index}`);
        if (u18.type === "message") {
          let i21 = u18.content[e7.content_index];
          if (!i21) throw new d3(`missing content at index ${e7.content_index}`);
          if (i21.type !== "output_text") throw new d3(`expected content to be 'output_text', got ${i21.type}`);
          n17("response.output_text.delta", { ...e7, snapshot: i21.text });
        }
        break;
      }
      case "response.function_call_arguments.delta": {
        let u18 = r39.output[e7.output_index];
        if (!u18) throw new d3(`missing output at index ${e7.output_index}`);
        u18.type === "function_call" && n17("response.function_call_arguments.delta", { ...e7, snapshot: u18.arguments });
        break;
      }
      default:
        n17(e7.type, e7);
        break;
    }
  }, I6 = function() {
    if (this.ended) throw new d3("stream has ended, this shouldn't happen");
    let e7 = i5(this, p14, "f");
    if (!e7) throw new d3("request ended without sending any events");
    n4(this, p14, void 0, "f");
    let s9 = W9(e7, i5(this, h13, "f"));
    return n4(this, _9, s9, "f"), s9;
  }, P9 = function(e7) {
    let s9 = i5(this, p14, "f");
    if (!s9) {
      if (e7.type !== "response.created") throw new d3(`When snapshot hasn't been set yet, expected 'response.created' event, got ${e7.type}`);
      return s9 = n4(this, p14, e7.response, "f"), s9;
    }
    switch (e7.type) {
      case "response.output_item.added": {
        s9.output.push(e7.item);
        break;
      }
      case "response.content_part.added": {
        let n17 = s9.output[e7.output_index];
        if (!n17) throw new d3(`missing output at index ${e7.output_index}`);
        n17.type === "message" && n17.content.push(e7.part);
        break;
      }
      case "response.output_text.delta": {
        let n17 = s9.output[e7.output_index];
        if (!n17) throw new d3(`missing output at index ${e7.output_index}`);
        if (n17.type === "message") {
          let r39 = n17.content[e7.content_index];
          if (!r39) throw new d3(`missing content at index ${e7.content_index}`);
          if (r39.type !== "output_text") throw new d3(`expected content to be 'output_text', got ${r39.type}`);
          r39.text += e7.delta;
        }
        break;
      }
      case "response.function_call_arguments.delta": {
        let n17 = s9.output[e7.output_index];
        if (!n17) throw new d3(`missing output at index ${e7.output_index}`);
        n17.type === "function_call" && (n17.arguments += e7.delta);
        break;
      }
      case "response.completed": {
        n4(this, p14, e7.response, "f");
        break;
      }
    }
    return s9;
  }, Symbol.asyncIterator)]() {
    let t9 = [], e7 = [], s9 = false;
    return this.on("event", (n17) => {
      let r39 = e7.shift();
      r39 ? r39.resolve(n17) : t9.push(n17);
    }), this.on("end", () => {
      s9 = true;
      for (let n17 of e7) n17.resolve(void 0);
      e7.length = 0;
    }), this.on("abort", (n17) => {
      s9 = true;
      for (let r39 of e7) r39.reject(n17);
      e7.length = 0;
    }), this.on("error", (n17) => {
      s9 = true;
      for (let r39 of e7) r39.reject(n17);
      e7.length = 0;
    }), { next: async () => t9.length ? { value: t9.shift(), done: false } : s9 ? { value: void 0, done: true } : new Promise((r39, u18) => e7.push({ resolve: r39, reject: u18 })).then((r39) => r39 ? { value: r39, done: false } : { value: void 0, done: true }), return: async () => (this.abort(), { value: void 0, done: true }) };
  }
  async finalResponse() {
    await this.done();
    let t9 = i5(this, _9, "f");
    if (!t9) throw new d3("stream ended without producing a ChatCompletion");
    return t9;
  }
};
function W9(o18, t9) {
  return y13(o18, t9);
}
var d12 = class extends t5 {
  list(t9, e7 = {}, s9) {
    return this._client.getAPIList(m12`/responses/${t9}/input_items`, l7, { query: e7, ...s9 });
  }
};
var b11 = class extends t5 {
  constructor() {
    super(...arguments), this.inputItems = new d12(this._client);
  }
  create(t9, e7) {
    return this._client.post("/responses", { body: t9, ...e7, stream: t9.stream ?? false })._thenUnwrap((s9) => ("object" in s9 && s9.object === "response" && m17(s9), s9));
  }
  retrieve(t9, e7 = {}, s9) {
    return this._client.get(m12`/responses/${t9}`, { query: e7, ...s9, stream: e7?.stream ?? false })._thenUnwrap((n17) => ("object" in n17 && n17.object === "response" && m17(n17), n17));
  }
  delete(t9, e7) {
    return this._client.delete(m12`/responses/${t9}`, { ...e7, headers: c12([{ Accept: "*/*" }, e7?.headers]) });
  }
  parse(t9, e7) {
    return this._client.responses.create(t9, e7)._thenUnwrap((s9) => w13(s9, t9));
  }
  stream(t9, e7) {
    return x10.createResponse(this._client, t9, e7);
  }
  cancel(t9, e7) {
    return this._client.post(m12`/responses/${t9}/cancel`, e7);
  }
};
b11.InputItems = d12;

// https://esm.sh/openai@5.12.0/denonext/resources/uploads/uploads.mjs
var e5 = class extends t5 {
  create(t9, r39, s9) {
    return this._client.post(m12`/uploads/${t9}/parts`, u7({ body: r39, ...s9 }, this._client));
  }
};
var o13 = class extends t5 {
  constructor() {
    super(...arguments), this.parts = new e5(this._client);
  }
  create(t9, r39) {
    return this._client.post("/uploads", { body: t9, ...r39 });
  }
  cancel(t9, r39) {
    return this._client.post(m12`/uploads/${t9}/cancel`, r39);
  }
  complete(t9, r39, s9) {
    return this._client.post(m12`/uploads/${t9}/complete`, { body: r39, ...s9 });
  }
};
o13.Parts = e5;

// https://esm.sh/openai@5.12.0/denonext/resources/vector-stores/vector-stores.mjs
var A8 = async (v9) => {
  let s9 = await Promise.allSettled(v9), t9 = s9.filter((r39) => r39.status === "rejected");
  if (t9.length) {
    for (let r39 of t9) console.error(r39.reason);
    throw new Error(`${t9.length} promise(s) failed - see the above errors`);
  }
  let e7 = [];
  for (let r39 of s9) r39.status === "fulfilled" && e7.push(r39.value);
  return e7;
};
var h14 = class extends t5 {
  create(s9, t9, e7) {
    return this._client.post(m12`/vector_stores/${s9}/file_batches`, { body: t9, ...e7, headers: c12([{ "OpenAI-Beta": "assistants=v2" }, e7?.headers]) });
  }
  retrieve(s9, t9, e7) {
    let { vector_store_id: r39 } = t9;
    return this._client.get(m12`/vector_stores/${r39}/file_batches/${s9}`, { ...e7, headers: c12([{ "OpenAI-Beta": "assistants=v2" }, e7?.headers]) });
  }
  cancel(s9, t9, e7) {
    let { vector_store_id: r39 } = t9;
    return this._client.post(m12`/vector_stores/${r39}/file_batches/${s9}/cancel`, { ...e7, headers: c12([{ "OpenAI-Beta": "assistants=v2" }, e7?.headers]) });
  }
  async createAndPoll(s9, t9, e7) {
    let r39 = await this.create(s9, t9);
    return await this.poll(s9, r39.id, e7);
  }
  listFiles(s9, t9, e7) {
    let { vector_store_id: r39, ...a11 } = t9;
    return this._client.getAPIList(m12`/vector_stores/${r39}/file_batches/${s9}/files`, l7, { query: a11, ...e7, headers: c12([{ "OpenAI-Beta": "assistants=v2" }, e7?.headers]) });
  }
  async poll(s9, t9, e7) {
    let r39 = c12([e7?.headers, { "X-Stainless-Poll-Helper": "true", "X-Stainless-Custom-Poll-Interval": e7?.pollIntervalMs?.toString() ?? void 0 }]);
    for (; ; ) {
      let { data: a11, response: c18 } = await this.retrieve(t9, { vector_store_id: s9 }, { ...e7, headers: r39 }).withResponse();
      switch (a11.status) {
        case "in_progress":
          let l16 = 5e3;
          if (e7?.pollIntervalMs) l16 = e7.pollIntervalMs;
          else {
            let n17 = c18.headers.get("openai-poll-after-ms");
            if (n17) {
              let i21 = parseInt(n17);
              isNaN(i21) || (l16 = i21);
            }
          }
          await s2(l16);
          break;
        case "failed":
        case "cancelled":
        case "completed":
          return a11;
      }
    }
  }
  async uploadAndPoll(s9, { files: t9, fileIds: e7 = [] }, r39) {
    if (t9 == null || t9.length == 0) throw new Error("No `files` provided to process. If you've already uploaded files you should use `.createAndPoll()` instead");
    let a11 = r39?.maxConcurrency ?? 5, c18 = Math.min(a11, t9.length), l16 = this._client, n17 = t9.values(), i21 = [...e7];
    async function w19(g16) {
      for (let $13 of g16) {
        let B11 = await l16.files.create({ file: $13, purpose: "assistants" }, r39);
        i21.push(B11.id);
      }
    }
    let P14 = Array(c18).fill(n17).map(w19);
    return await A8(P14), await this.createAndPoll(s9, { file_ids: i21 });
  }
};
var u12 = class extends t5 {
  create(s9, t9, e7) {
    return this._client.post(m12`/vector_stores/${s9}/files`, { body: t9, ...e7, headers: c12([{ "OpenAI-Beta": "assistants=v2" }, e7?.headers]) });
  }
  retrieve(s9, t9, e7) {
    let { vector_store_id: r39 } = t9;
    return this._client.get(m12`/vector_stores/${r39}/files/${s9}`, { ...e7, headers: c12([{ "OpenAI-Beta": "assistants=v2" }, e7?.headers]) });
  }
  update(s9, t9, e7) {
    let { vector_store_id: r39, ...a11 } = t9;
    return this._client.post(m12`/vector_stores/${r39}/files/${s9}`, { body: a11, ...e7, headers: c12([{ "OpenAI-Beta": "assistants=v2" }, e7?.headers]) });
  }
  list(s9, t9 = {}, e7) {
    return this._client.getAPIList(m12`/vector_stores/${s9}/files`, l7, { query: t9, ...e7, headers: c12([{ "OpenAI-Beta": "assistants=v2" }, e7?.headers]) });
  }
  delete(s9, t9, e7) {
    let { vector_store_id: r39 } = t9;
    return this._client.delete(m12`/vector_stores/${r39}/files/${s9}`, { ...e7, headers: c12([{ "OpenAI-Beta": "assistants=v2" }, e7?.headers]) });
  }
  async createAndPoll(s9, t9, e7) {
    let r39 = await this.create(s9, t9, e7);
    return await this.poll(s9, r39.id, e7);
  }
  async poll(s9, t9, e7) {
    let r39 = c12([e7?.headers, { "X-Stainless-Poll-Helper": "true", "X-Stainless-Custom-Poll-Interval": e7?.pollIntervalMs?.toString() ?? void 0 }]);
    for (; ; ) {
      let a11 = await this.retrieve(t9, { vector_store_id: s9 }, { ...e7, headers: r39 }).withResponse(), c18 = a11.data;
      switch (c18.status) {
        case "in_progress":
          let l16 = 5e3;
          if (e7?.pollIntervalMs) l16 = e7.pollIntervalMs;
          else {
            let n17 = a11.response.headers.get("openai-poll-after-ms");
            if (n17) {
              let i21 = parseInt(n17);
              isNaN(i21) || (l16 = i21);
            }
          }
          await s2(l16);
          break;
        case "failed":
        case "completed":
          return c18;
      }
    }
  }
  async upload(s9, t9, e7) {
    let r39 = await this._client.files.create({ file: t9, purpose: "assistants" }, e7);
    return this.create(s9, { file_id: r39.id }, e7);
  }
  async uploadAndPoll(s9, t9, e7) {
    let r39 = await this.upload(s9, t9, e7);
    return await this.poll(s9, r39.id, e7);
  }
  content(s9, t9, e7) {
    let { vector_store_id: r39 } = t9;
    return this._client.getAPIList(m12`/vector_stores/${r39}/files/${s9}/content`, h7, { ...e7, headers: c12([{ "OpenAI-Beta": "assistants=v2" }, e7?.headers]) });
  }
};
var I7 = class extends t5 {
  constructor() {
    super(...arguments), this.files = new u12(this._client), this.fileBatches = new h14(this._client);
  }
  create(s9, t9) {
    return this._client.post("/vector_stores", { body: s9, ...t9, headers: c12([{ "OpenAI-Beta": "assistants=v2" }, t9?.headers]) });
  }
  retrieve(s9, t9) {
    return this._client.get(m12`/vector_stores/${s9}`, { ...t9, headers: c12([{ "OpenAI-Beta": "assistants=v2" }, t9?.headers]) });
  }
  update(s9, t9, e7) {
    return this._client.post(m12`/vector_stores/${s9}`, { body: t9, ...e7, headers: c12([{ "OpenAI-Beta": "assistants=v2" }, e7?.headers]) });
  }
  list(s9 = {}, t9) {
    return this._client.getAPIList("/vector_stores", l7, { query: s9, ...t9, headers: c12([{ "OpenAI-Beta": "assistants=v2" }, t9?.headers]) });
  }
  delete(s9, t9) {
    return this._client.delete(m12`/vector_stores/${s9}`, { ...t9, headers: c12([{ "OpenAI-Beta": "assistants=v2" }, t9?.headers]) });
  }
  search(s9, t9, e7) {
    return this._client.getAPIList(m12`/vector_stores/${s9}/search`, h7, { body: t9, method: "post", ...e7, headers: c12([{ "OpenAI-Beta": "assistants=v2" }, e7?.headers]) });
  }
};
I7.Files = u12;
I7.FileBatches = h14;

// https://esm.sh/openai@5.12.0/denonext/resources/webhooks.mjs
import { Buffer as __Buffer$2 } from "node:buffer";
var r37;
var p15;
var h15;
var m18 = class extends t5 {
  constructor() {
    super(...arguments), r37.add(this);
  }
  async unwrap(e7, o18, t9 = this._client.webhookSecret, i21 = 300) {
    return await this.verifySignature(e7, o18, t9, i21), JSON.parse(e7);
  }
  async verifySignature(e7, o18, t9 = this._client.webhookSecret, i21 = 300) {
    if (typeof crypto > "u" || typeof crypto.subtle.importKey != "function" || typeof crypto.subtle.verify != "function") throw new Error("Webhook signature verification is only supported when the `crypto` global is defined");
    i5(this, r37, "m", p15).call(this, t9);
    let c18 = c12([o18]).values, b15 = i5(this, r37, "m", h15).call(this, c18, "webhook-signature"), u18 = i5(this, r37, "m", h15).call(this, c18, "webhook-timestamp"), w19 = i5(this, r37, "m", h15).call(this, c18, "webhook-id"), f14 = parseInt(u18, 10);
    if (isNaN(f14)) throw new M3("Invalid webhook timestamp format");
    let l16 = Math.floor(Date.now() / 1e3);
    if (l16 - f14 > i21) throw new M3("Webhook timestamp is too old");
    if (f14 > l16 + i21) throw new M3("Webhook timestamp is too new");
    let g16 = b15.split(" ").map((s9) => s9.startsWith("v1,") ? s9.substring(3) : s9), y15 = t9.startsWith("whsec_") ? __Buffer$2.from(t9.replace("whsec_", ""), "base64") : __Buffer$2.from(t9, "utf-8"), k14 = w19 ? `${w19}.${u18}.${e7}` : `${u18}.${e7}`, v9 = await crypto.subtle.importKey("raw", y15, { name: "HMAC", hash: "SHA-256" }, false, ["verify"]);
    for (let s9 of g16) try {
      let _14 = __Buffer$2.from(s9, "base64");
      if (await crypto.subtle.verify("HMAC", v9, _14, new TextEncoder().encode(k14))) return;
    } catch {
      continue;
    }
    throw new M3("The given webhook signature does not match the expected signature");
  }
};
r37 = /* @__PURE__ */ new WeakSet(), p15 = function(e7) {
  if (typeof e7 != "string" || e7.length === 0) throw new Error("The webhook secret must either be set using the env var, OPENAI_WEBHOOK_SECRET, on the client class, OpenAI({ webhookSecret: '123' }), or passed to this function");
}, h15 = function(e7, o18) {
  if (!e7) throw new Error("Headers are required");
  let t9 = e7.get(o18);
  if (t9 == null) throw new Error(`Missing required header: ${o18}`);
  return t9;
};

// https://esm.sh/openai@5.12.0/denonext/client.mjs
var oe5 = () => typeof globalThis < "u" && typeof globalThis.document < "u" && typeof navigator < "u";
function Ee4() {
  return typeof Deno < "u" && Deno.build != null ? "deno" : typeof EdgeRuntime < "u" ? "edge" : Object.prototype.toString.call(typeof (0, __Process$3) < "u" ? __Process$3 : 0) === "[object process]" ? "node" : "unknown";
}
var Se4 = () => {
  let e7 = Ee4();
  if (e7 === "deno") return { "X-Stainless-Lang": "js", "X-Stainless-Package-Version": o6, "X-Stainless-OS": re5(Deno.build.os), "X-Stainless-Arch": te6(Deno.build.arch), "X-Stainless-Runtime": "deno", "X-Stainless-Runtime-Version": typeof Deno.version == "string" ? Deno.version : Deno.version?.deno ?? "unknown" };
  if (typeof EdgeRuntime < "u") return { "X-Stainless-Lang": "js", "X-Stainless-Package-Version": o6, "X-Stainless-OS": "Unknown", "X-Stainless-Arch": `other:${EdgeRuntime}`, "X-Stainless-Runtime": "edge", "X-Stainless-Runtime-Version": __Process$3.version };
  if (e7 === "node") return { "X-Stainless-Lang": "js", "X-Stainless-Package-Version": o6, "X-Stainless-OS": re5(__Process$3.platform ?? "unknown"), "X-Stainless-Arch": te6(__Process$3.arch ?? "unknown"), "X-Stainless-Runtime": "node", "X-Stainless-Runtime-Version": __Process$3.version ?? "unknown" };
  let t9 = Ae4();
  return t9 ? { "X-Stainless-Lang": "js", "X-Stainless-Package-Version": o6, "X-Stainless-OS": "Unknown", "X-Stainless-Arch": "unknown", "X-Stainless-Runtime": `browser:${t9.browser}`, "X-Stainless-Runtime-Version": t9.version } : { "X-Stainless-Lang": "js", "X-Stainless-Package-Version": o6, "X-Stainless-OS": "Unknown", "X-Stainless-Arch": "unknown", "X-Stainless-Runtime": "unknown", "X-Stainless-Runtime-Version": "unknown" };
};
function Ae4() {
  if (typeof navigator > "u" || !navigator) return null;
  let e7 = [{ key: "edge", pattern: /Edge(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ }, { key: "ie", pattern: /MSIE(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ }, { key: "ie", pattern: /Trident(?:.*rv\:(\d+)\.(\d+)(?:\.(\d+))?)?/ }, { key: "chrome", pattern: /Chrome(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ }, { key: "firefox", pattern: /Firefox(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ }, { key: "safari", pattern: /(?:Version\W+(\d+)\.(\d+)(?:\.(\d+))?)?(?:\W+Mobile\S*)?\W+Safari/ }];
  for (let { key: t9, pattern: n17 } of e7) {
    let r39 = n17.exec(navigator.userAgent);
    if (r39) {
      let o18 = r39[1] || 0, i21 = r39[2] || 0, m26 = r39[3] || 0;
      return { browser: t9, version: `${o18}.${i21}.${m26}` };
    }
  }
  return null;
}
var te6 = (e7) => e7 === "x32" ? "x32" : e7 === "x86_64" || e7 === "x64" ? "x64" : e7 === "arm" ? "arm" : e7 === "aarch64" || e7 === "arm64" ? "arm64" : e7 ? `other:${e7}` : "unknown";
var re5 = (e7) => (e7 = e7.toLowerCase(), e7.includes("ios") ? "iOS" : e7 === "android" ? "Android" : e7 === "darwin" ? "MacOS" : e7 === "win32" ? "Windows" : e7 === "freebsd" ? "FreeBSD" : e7 === "openbsd" ? "OpenBSD" : e7 === "linux" ? "Linux" : e7 ? `Other:${e7}` : "Unknown");
var ne5;
var ie5 = () => ne5 ?? (ne5 = Se4());
var se6 = ({ headers: e7, body: t9 }) => ({ bodyHeaders: { "content-type": "application/json" }, body: JSON.stringify(t9) });
var L5 = "RFC3986";
var H9 = (e7) => String(e7);
var M9 = { RFC1738: (e7) => String(e7).replace(/%20/g, "+"), RFC3986: H9 };
var W10 = "RFC1738";
var N6 = (e7, t9) => (N6 = Object.hasOwn ?? Function.prototype.call.bind(Object.prototype.hasOwnProperty), N6(e7, t9));
var I8 = (() => {
  let e7 = [];
  for (let t9 = 0; t9 < 256; ++t9) e7.push("%" + ((t9 < 16 ? "0" : "") + t9.toString(16)).toUpperCase());
  return e7;
})();
var q10 = 1024;
var ae5 = (e7, t9, n17, r39, o18) => {
  if (e7.length === 0) return e7;
  let i21 = e7;
  if (typeof e7 == "symbol" ? i21 = Symbol.prototype.toString.call(e7) : typeof e7 != "string" && (i21 = String(e7)), n17 === "iso-8859-1") return escape(i21).replace(/%u[0-9a-f]{4}/gi, function(a11) {
    return "%26%23" + parseInt(a11.slice(2), 16) + "%3B";
  });
  let m26 = "";
  for (let a11 = 0; a11 < i21.length; a11 += q10) {
    let p19 = i21.length >= q10 ? i21.slice(a11, a11 + q10) : i21, c18 = [];
    for (let y15 = 0; y15 < p19.length; ++y15) {
      let s9 = p19.charCodeAt(y15);
      if (s9 === 45 || s9 === 46 || s9 === 95 || s9 === 126 || s9 >= 48 && s9 <= 57 || s9 >= 65 && s9 <= 90 || s9 >= 97 && s9 <= 122 || o18 === W10 && (s9 === 40 || s9 === 41)) {
        c18[c18.length] = p19.charAt(y15);
        continue;
      }
      if (s9 < 128) {
        c18[c18.length] = I8[s9];
        continue;
      }
      if (s9 < 2048) {
        c18[c18.length] = I8[192 | s9 >> 6] + I8[128 | s9 & 63];
        continue;
      }
      if (s9 < 55296 || s9 >= 57344) {
        c18[c18.length] = I8[224 | s9 >> 12] + I8[128 | s9 >> 6 & 63] + I8[128 | s9 & 63];
        continue;
      }
      y15 += 1, s9 = 65536 + ((s9 & 1023) << 10 | p19.charCodeAt(y15) & 1023), c18[c18.length] = I8[240 | s9 >> 18] + I8[128 | s9 >> 12 & 63] + I8[128 | s9 >> 6 & 63] + I8[128 | s9 & 63];
    }
    m26 += c18.join("");
  }
  return m26;
};
function le5(e7) {
  return !e7 || typeof e7 != "object" ? false : !!(e7.constructor && e7.constructor.isBuffer && e7.constructor.isBuffer(e7));
}
function K8(e7, t9) {
  if (n(e7)) {
    let n17 = [];
    for (let r39 = 0; r39 < e7.length; r39 += 1) n17.push(t9(e7[r39]));
    return n17;
  }
  return t9(e7);
}
var fe5 = { brackets(e7) {
  return String(e7) + "[]";
}, comma: "comma", indices(e7, t9) {
  return String(e7) + "[" + t9 + "]";
}, repeat(e7) {
  return String(e7);
} };
var ce4 = function(e7, t9) {
  Array.prototype.push.apply(e7, n(t9) ? t9 : [t9]);
};
var ue5;
var g10 = { addQueryPrefix: false, allowDots: false, allowEmptyArrays: false, arrayFormat: "indices", charset: "utf-8", charsetSentinel: false, delimiter: "&", encode: true, encodeDotInKeys: false, encoder: ae5, encodeValuesOnly: false, format: L5, formatter: H9, indices: false, serializeDate(e7) {
  return (ue5 ?? (ue5 = Function.prototype.call.bind(Date.prototype.toISOString)))(e7);
}, skipNulls: false, strictNullHandling: false };
function xe5(e7) {
  return typeof e7 == "string" || typeof e7 == "number" || typeof e7 == "boolean" || typeof e7 == "symbol" || typeof e7 == "bigint";
}
var V8 = {};
function de6(e7, t9, n17, r39, o18, i21, m26, a11, p19, c18, y15, s9, E12, f14, S13, k14, P14, w19) {
  let l16 = e7, O10 = w19, _14 = 0, F13 = false;
  for (; (O10 = O10.get(V8)) !== void 0 && !F13; ) {
    let b15 = O10.get(e7);
    if (_14 += 1, typeof b15 < "u") {
      if (b15 === _14) throw new RangeError("Cyclic object value");
      F13 = true;
    }
    typeof O10.get(V8) > "u" && (_14 = 0);
  }
  if (typeof c18 == "function" ? l16 = c18(t9, l16) : l16 instanceof Date ? l16 = E12?.(l16) : n17 === "comma" && n(l16) && (l16 = K8(l16, function(b15) {
    return b15 instanceof Date ? E12?.(b15) : b15;
  })), l16 === null) {
    if (i21) return p19 && !k14 ? p19(t9, g10.encoder, P14, "key", f14) : t9;
    l16 = "";
  }
  if (xe5(l16) || le5(l16)) {
    if (p19) {
      let b15 = k14 ? t9 : p19(t9, g10.encoder, P14, "key", f14);
      return [S13?.(b15) + "=" + S13?.(p19(l16, g10.encoder, P14, "value", f14))];
    }
    return [S13?.(t9) + "=" + S13?.(String(l16))];
  }
  let D12 = [];
  if (typeof l16 > "u") return D12;
  let R11;
  if (n17 === "comma" && n(l16)) k14 && p19 && (l16 = K8(l16, p19)), R11 = [{ value: l16.length > 0 ? l16.join(",") || null : void 0 }];
  else if (n(c18)) R11 = c18;
  else {
    let b15 = Object.keys(l16);
    R11 = y15 ? b15.sort(y15) : b15;
  }
  let Y9 = a11 ? String(t9).replace(/\./g, "%2E") : String(t9), $13 = r39 && n(l16) && l16.length === 1 ? Y9 + "[]" : Y9;
  if (o18 && n(l16) && l16.length === 0) return $13 + "[]";
  for (let b15 = 0; b15 < R11.length; ++b15) {
    let j17 = R11[b15], Z11 = typeof j17 == "object" && typeof j17.value < "u" ? j17.value : l16[j17];
    if (m26 && Z11 === null) continue;
    let B11 = s9 && a11 ? j17.replace(/\./g, "%2E") : j17, we3 = n(l16) ? typeof n17 == "function" ? n17($13, B11) : $13 : $13 + (s9 ? "." + B11 : "[" + B11 + "]");
    w19.set(e7, _14);
    let ee6 = /* @__PURE__ */ new WeakMap();
    ee6.set(V8, w19), ce4(D12, de6(Z11, we3, n17, r39, o18, i21, m26, a11, n17 === "comma" && k14 && n(l16) ? null : p19, c18, y15, s9, E12, f14, S13, k14, P14, ee6));
  }
  return D12;
}
function Pe4(e7 = g10) {
  if (typeof e7.allowEmptyArrays < "u" && typeof e7.allowEmptyArrays != "boolean") throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  if (typeof e7.encodeDotInKeys < "u" && typeof e7.encodeDotInKeys != "boolean") throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
  if (e7.encoder !== null && typeof e7.encoder < "u" && typeof e7.encoder != "function") throw new TypeError("Encoder has to be a function.");
  let t9 = e7.charset || g10.charset;
  if (typeof e7.charset < "u" && e7.charset !== "utf-8" && e7.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  let n17 = L5;
  if (typeof e7.format < "u") {
    if (!N6(M9, e7.format)) throw new TypeError("Unknown format option provided.");
    n17 = e7.format;
  }
  let r39 = M9[n17], o18 = g10.filter;
  (typeof e7.filter == "function" || n(e7.filter)) && (o18 = e7.filter);
  let i21;
  if (e7.arrayFormat && e7.arrayFormat in fe5 ? i21 = e7.arrayFormat : "indices" in e7 ? i21 = e7.indices ? "indices" : "repeat" : i21 = g10.arrayFormat, "commaRoundTrip" in e7 && typeof e7.commaRoundTrip != "boolean") throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  let m26 = typeof e7.allowDots > "u" ? e7.encodeDotInKeys ? true : g10.allowDots : !!e7.allowDots;
  return { addQueryPrefix: typeof e7.addQueryPrefix == "boolean" ? e7.addQueryPrefix : g10.addQueryPrefix, allowDots: m26, allowEmptyArrays: typeof e7.allowEmptyArrays == "boolean" ? !!e7.allowEmptyArrays : g10.allowEmptyArrays, arrayFormat: i21, charset: t9, charsetSentinel: typeof e7.charsetSentinel == "boolean" ? e7.charsetSentinel : g10.charsetSentinel, commaRoundTrip: !!e7.commaRoundTrip, delimiter: typeof e7.delimiter > "u" ? g10.delimiter : e7.delimiter, encode: typeof e7.encode == "boolean" ? e7.encode : g10.encode, encodeDotInKeys: typeof e7.encodeDotInKeys == "boolean" ? e7.encodeDotInKeys : g10.encodeDotInKeys, encoder: typeof e7.encoder == "function" ? e7.encoder : g10.encoder, encodeValuesOnly: typeof e7.encodeValuesOnly == "boolean" ? e7.encodeValuesOnly : g10.encodeValuesOnly, filter: o18, format: n17, formatter: r39, serializeDate: typeof e7.serializeDate == "function" ? e7.serializeDate : g10.serializeDate, skipNulls: typeof e7.skipNulls == "boolean" ? e7.skipNulls : g10.skipNulls, sort: typeof e7.sort == "function" ? e7.sort : null, strictNullHandling: typeof e7.strictNullHandling == "boolean" ? e7.strictNullHandling : g10.strictNullHandling };
}
function z6(e7, t9 = {}) {
  let n17 = e7, r39 = Pe4(t9), o18, i21;
  typeof r39.filter == "function" ? (i21 = r39.filter, n17 = i21("", n17)) : n(r39.filter) && (i21 = r39.filter, o18 = i21);
  let m26 = [];
  if (typeof n17 != "object" || n17 === null) return "";
  let a11 = fe5[r39.arrayFormat], p19 = a11 === "comma" && r39.commaRoundTrip;
  o18 || (o18 = Object.keys(n17)), r39.sort && o18.sort(r39.sort);
  let c18 = /* @__PURE__ */ new WeakMap();
  for (let E12 = 0; E12 < o18.length; ++E12) {
    let f14 = o18[E12];
    r39.skipNulls && n17[f14] === null || ce4(m26, de6(n17[f14], f14, a11, p19, r39.allowEmptyArrays, r39.strictNullHandling, r39.skipNulls, r39.encodeDotInKeys, r39.encode ? r39.encoder : null, r39.filter, r39.sort, r39.allowDots, r39.serializeDate, r39.format, r39.formatter, r39.encodeValuesOnly, r39.charset, c18));
  }
  let y15 = m26.join(r39.delimiter), s9 = r39.addQueryPrefix === true ? "?" : "";
  return r39.charsetSentinel && (r39.charset === "iso-8859-1" ? s9 += "utf8=%26%2310003%3B&" : s9 += "utf8=%E2%9C%93&"), y15.length > 0 ? s9 + y15 : "";
}
var G7;
var J9;
var X7;
var ye6;
var u13 = class {
  constructor({ baseURL: t9 = n2("OPENAI_BASE_URL"), apiKey: n17 = n2("OPENAI_API_KEY"), organization: r39 = n2("OPENAI_ORG_ID") ?? null, project: o18 = n2("OPENAI_PROJECT_ID") ?? null, webhookSecret: i21 = n2("OPENAI_WEBHOOK_SECRET") ?? null, ...m26 } = {}) {
    if (G7.add(this), X7.set(this, void 0), this.completions = new t7(this), this.chat = new j5(this), this.embeddings = new i13(this), this.files = new o10(this), this.images = new i16(this), this.audio = new o9(this), this.moderations = new e4(this), this.models = new i17(this), this.fineTuning = new u11(this), this.graders = new e3(this), this.vectorStores = new I7(this), this.webhooks = new m18(this), this.beta = new W8(this), this.batches = new s6(this), this.uploads = new o13(this), this.responses = new b11(this), this.evals = new m15(this), this.containers = new c13(this), n17 === void 0) throw new d3("The OPENAI_API_KEY environment variable is missing or empty; either provide it, or instantiate the OpenAI client with an apiKey option, like new OpenAI({ apiKey: 'My API Key' }).");
    let a11 = { apiKey: n17, organization: r39, project: o18, webhookSecret: i21, ...m26, baseURL: t9 || "https://api.openai.com/v1" };
    if (!a11.dangerouslyAllowBrowser && oe5()) throw new d3(`It looks like you're running in a browser-like environment.

This is disabled by default, as it risks exposing your secret API credentials to attackers.
If you understand the risks and have appropriate mitigations in place,
you can set the \`dangerouslyAllowBrowser\` option to \`true\`, e.g.,

new OpenAI({ apiKey, dangerouslyAllowBrowser: true });

https://help.openai.com/en/articles/5112595-best-practices-for-api-key-safety
`);
    this.baseURL = a11.baseURL, this.timeout = a11.timeout ?? J9.DEFAULT_TIMEOUT, this.logger = a11.logger ?? console;
    let p19 = "warn";
    this.logLevel = p19, this.logLevel = w8(a11.logLevel, "ClientOptions.logLevel", this) ?? w8(n2("OPENAI_LOG"), "process.env['OPENAI_LOG']", this) ?? p19, this.fetchOptions = a11.fetchOptions, this.maxRetries = a11.maxRetries ?? 2, this.fetch = a11.fetch ?? l6(), n4(this, X7, se6, "f"), this._options = a11, this.apiKey = n17, this.organization = r39, this.project = o18, this.webhookSecret = i21;
  }
  withOptions(t9) {
    return new this.constructor({ ...this._options, baseURL: this.baseURL, maxRetries: this.maxRetries, timeout: this.timeout, logger: this.logger, logLevel: this.logLevel, fetch: this.fetch, fetchOptions: this.fetchOptions, apiKey: this.apiKey, organization: this.organization, project: this.project, webhookSecret: this.webhookSecret, ...t9 });
  }
  defaultQuery() {
    return this._options.defaultQuery;
  }
  validateHeaders({ values: t9, nulls: n17 }) {
  }
  async authHeaders(t9) {
    return c12([{ Authorization: `Bearer ${this.apiKey}` }]);
  }
  stringifyQuery(t9) {
    return z6(t9, { arrayFormat: "brackets" });
  }
  getUserAgent() {
    return `${this.constructor.name}/JS ${o6}`;
  }
  defaultIdempotencyKey() {
    return `stainless-node-retry-${a3()}`;
  }
  makeStatusError(t9, n17, r39, o18) {
    return p3.generate(t9, n17, r39, o18);
  }
  buildURL(t9, n17, r39) {
    let o18 = !i5(this, G7, "m", ye6).call(this) && r39 || this.baseURL, i21 = c5(t9) ? new URL(t9) : new URL(o18 + (o18.endsWith("/") && t9.startsWith("/") ? t9.slice(1) : t9)), m26 = this.defaultQuery();
    return d6(m26) || (n17 = { ...m26, ...n17 }), typeof n17 == "object" && n17 && !Array.isArray(n17) && (i21.search = this.stringifyQuery(n17)), i21.toString();
  }
  async prepareOptions(t9) {
  }
  async prepareRequest(t9, { url: n17, options: r39 }) {
  }
  get(t9, n17) {
    return this.methodRequest("get", t9, n17);
  }
  post(t9, n17) {
    return this.methodRequest("post", t9, n17);
  }
  patch(t9, n17) {
    return this.methodRequest("patch", t9, n17);
  }
  put(t9, n17) {
    return this.methodRequest("put", t9, n17);
  }
  delete(t9, n17) {
    return this.methodRequest("delete", t9, n17);
  }
  methodRequest(t9, n17, r39) {
    return this.request(Promise.resolve(r39).then((o18) => ({ method: t9, path: n17, ...o18 })));
  }
  request(t9, n17 = null) {
    return new a4(this, this.makeRequest(t9, n17, void 0));
  }
  async makeRequest(t9, n17, r39) {
    let o18 = await t9, i21 = o18.maxRetries ?? this.maxRetries;
    n17 == null && (n17 = i21), await this.prepareOptions(o18);
    let { req: m26, url: a11, timeout: p19 } = await this.buildRequest(o18, { retryCount: i21 - n17 });
    await this.prepareRequest(m26, { url: a11, options: o18 });
    let c18 = "log_" + (Math.random() * (1 << 24) | 0).toString(16).padStart(6, "0"), y15 = r39 === void 0 ? "" : `, retryOf: ${r39}`, s9 = Date.now();
    if (p7(this).debug(`[${c18}] sending request`, O5({ retryOfRequestLogID: r39, method: o18.method, url: a11, options: o18, headers: m26.headers })), o18.signal?.aborted) throw new $4();
    let E12 = new AbortController(), f14 = await this.fetchWithTimeout(a11, m26, p19, E12).catch(o), S13 = Date.now();
    if (f14 instanceof Error) {
      let w19 = `retrying, ${n17} attempts remaining`;
      if (o18.signal?.aborted) throw new $4();
      let l16 = c3(f14) || /timed? ?out/i.test(String(f14) + ("cause" in f14 ? String(f14.cause) : ""));
      if (n17) return p7(this).info(`[${c18}] connection ${l16 ? "timed out" : "failed"} - ${w19}`), p7(this).debug(`[${c18}] connection ${l16 ? "timed out" : "failed"} (${w19})`, O5({ retryOfRequestLogID: r39, url: a11, durationMs: S13 - s9, message: f14.message })), this.retryRequest(o18, n17, r39 ?? c18);
      throw p7(this).info(`[${c18}] connection ${l16 ? "timed out" : "failed"} - error; no more retries left`), p7(this).debug(`[${c18}] connection ${l16 ? "timed out" : "failed"} (error; no more retries left)`, O5({ retryOfRequestLogID: r39, url: a11, durationMs: S13 - s9, message: f14.message })), l16 ? new g3() : new o2({ cause: f14 });
    }
    let k14 = [...f14.headers.entries()].filter(([w19]) => w19 === "x-request-id").map(([w19, l16]) => ", " + w19 + ": " + JSON.stringify(l16)).join(""), P14 = `[${c18}${y15}${k14}] ${m26.method} ${a11} ${f14.ok ? "succeeded" : "failed"} with status ${f14.status} in ${S13 - s9}ms`;
    if (!f14.ok) {
      let w19 = await this.shouldRetry(f14);
      if (n17 && w19) {
        let R11 = `retrying, ${n17} attempts remaining`;
        return await s3(f14.body), p7(this).info(`${P14} - ${R11}`), p7(this).debug(`[${c18}] response error (${R11})`, O5({ retryOfRequestLogID: r39, url: f14.url, status: f14.status, headers: f14.headers, durationMs: S13 - s9 })), this.retryRequest(o18, n17, r39 ?? c18, f14.headers);
      }
      let l16 = w19 ? "error; no more retries left" : "error; not retryable";
      p7(this).info(`${P14} - ${l16}`);
      let O10 = await f14.text().catch((R11) => o(R11).message), _14 = O4(O10), F13 = _14 ? void 0 : O10;
      throw p7(this).debug(`[${c18}] response error (${l16})`, O5({ retryOfRequestLogID: r39, url: f14.url, status: f14.status, headers: f14.headers, message: F13, durationMs: Date.now() - s9 })), this.makeStatusError(f14.status, _14, F13, f14.headers);
    }
    return p7(this).info(P14), p7(this).debug(`[${c18}] response start`, O5({ retryOfRequestLogID: r39, url: f14.url, status: f14.status, headers: f14.headers, durationMs: S13 - s9 })), { response: f14, options: o18, controller: E12, requestLogID: c18, retryOfRequestLogID: r39, startTime: s9 };
  }
  getAPIList(t9, n17, r39) {
    return this.requestAPIList(n17, { method: "get", path: t9, ...r39 });
  }
  requestAPIList(t9, n17) {
    let r39 = this.makeRequest(n17, null, void 0);
    return new c8(this, r39, t9);
  }
  async fetchWithTimeout(t9, n17, r39, o18) {
    let { signal: i21, method: m26, ...a11 } = n17 || {};
    i21 && i21.addEventListener("abort", () => o18.abort());
    let p19 = setTimeout(() => o18.abort(), r39), c18 = globalThis.ReadableStream && a11.body instanceof globalThis.ReadableStream || typeof a11.body == "object" && a11.body !== null && Symbol.asyncIterator in a11.body, y15 = { signal: o18.signal, ...c18 ? { duplex: "half" } : {}, method: "GET", ...a11 };
    m26 && (y15.method = m26.toUpperCase());
    try {
      return await this.fetch.call(void 0, t9, y15);
    } finally {
      clearTimeout(p19);
    }
  }
  async shouldRetry(t9) {
    let n17 = t9.headers.get("x-should-retry");
    return n17 === "true" ? true : n17 === "false" ? false : t9.status === 408 || t9.status === 409 || t9.status === 429 || t9.status >= 500;
  }
  async retryRequest(t9, n17, r39, o18) {
    let i21, m26 = o18?.get("retry-after-ms");
    if (m26) {
      let p19 = parseFloat(m26);
      Number.isNaN(p19) || (i21 = p19);
    }
    let a11 = o18?.get("retry-after");
    if (a11 && !i21) {
      let p19 = parseFloat(a11);
      Number.isNaN(p19) ? i21 = Date.parse(a11) - Date.now() : i21 = p19 * 1e3;
    }
    if (!(i21 && 0 <= i21 && i21 < 60 * 1e3)) {
      let p19 = t9.maxRetries ?? this.maxRetries;
      i21 = this.calculateDefaultRetryTimeoutMillis(n17, p19);
    }
    return await s2(i21), this.makeRequest(t9, n17 - 1, r39);
  }
  calculateDefaultRetryTimeoutMillis(t9, n17) {
    let i21 = n17 - t9, m26 = Math.min(0.5 * Math.pow(2, i21), 8), a11 = 1 - Math.random() * 0.25;
    return m26 * a11 * 1e3;
  }
  async buildRequest(t9, { retryCount: n17 = 0 } = {}) {
    let r39 = { ...t9 }, { method: o18, path: i21, query: m26, defaultBaseURL: a11 } = r39, p19 = this.buildURL(i21, m26, a11);
    "timeout" in r39 && m7("timeout", r39.timeout), r39.timeout = r39.timeout ?? this.timeout;
    let { bodyHeaders: c18, body: y15 } = this.buildBody({ options: r39 }), s9 = await this.buildHeaders({ options: t9, method: o18, bodyHeaders: c18, retryCount: n17 });
    return { req: { method: o18, headers: s9, ...r39.signal && { signal: r39.signal }, ...globalThis.ReadableStream && y15 instanceof globalThis.ReadableStream && { duplex: "half" }, ...y15 && { body: y15 }, ...this.fetchOptions ?? {}, ...r39.fetchOptions ?? {} }, url: p19, timeout: r39.timeout };
  }
  async buildHeaders({ options: t9, method: n17, bodyHeaders: r39, retryCount: o18 }) {
    let i21 = {};
    this.idempotencyHeader && n17 !== "get" && (t9.idempotencyKey || (t9.idempotencyKey = this.defaultIdempotencyKey()), i21[this.idempotencyHeader] = t9.idempotencyKey);
    let m26 = c12([i21, { Accept: "application/json", "User-Agent": this.getUserAgent(), "X-Stainless-Retry-Count": String(o18), ...t9.timeout ? { "X-Stainless-Timeout": String(Math.trunc(t9.timeout / 1e3)) } : {}, ...ie5(), "OpenAI-Organization": this.organization, "OpenAI-Project": this.project }, await this.authHeaders(t9), this._options.defaultHeaders, r39, t9.headers]);
    return this.validateHeaders(m26), m26.values;
  }
  buildBody({ options: { body: t9, headers: n17 } }) {
    if (!t9) return { bodyHeaders: void 0, body: void 0 };
    let r39 = c12([n17]);
    return ArrayBuffer.isView(t9) || t9 instanceof ArrayBuffer || t9 instanceof DataView || typeof t9 == "string" && r39.values.has("content-type") || t9 instanceof Blob || t9 instanceof FormData || t9 instanceof URLSearchParams || globalThis.ReadableStream && t9 instanceof globalThis.ReadableStream ? { bodyHeaders: void 0, body: t9 } : typeof t9 == "object" && (Symbol.asyncIterator in t9 || Symbol.iterator in t9 && "next" in t9 && typeof t9.next == "function") ? { bodyHeaders: void 0, body: c7(t9) } : i5(this, X7, "f").call(this, { body: t9, headers: r39 });
  }
};
J9 = u13, X7 = /* @__PURE__ */ new WeakMap(), G7 = /* @__PURE__ */ new WeakSet(), ye6 = function() {
  return this.baseURL !== "https://api.openai.com/v1";
};
u13.OpenAI = J9;
u13.DEFAULT_TIMEOUT = 6e5;
u13.OpenAIError = d3;
u13.APIError = p3;
u13.APIConnectionError = o2;
u13.APIConnectionTimeoutError = g3;
u13.APIUserAbortError = $4;
u13.NotFoundError = l;
u13.ConflictError = r31;
u13.RateLimitError = y4;
u13.BadRequestError = f;
u13.AuthenticationError = i;
u13.InternalServerError = q4;
u13.PermissionDeniedError = u4;
u13.UnprocessableEntityError = w4;
u13.InvalidWebhookSignatureError = M3;
u13.toFile = g7;
u13.Completions = t7;
u13.Chat = j5;
u13.Embeddings = i13;
u13.Files = o10;
u13.Images = i16;
u13.Audio = o9;
u13.Moderations = e4;
u13.Models = i17;
u13.FineTuning = u11;
u13.Graders = e3;
u13.VectorStores = I7;
u13.Webhooks = m18;
u13.Beta = W8;
u13.Batches = s6;
u13.Uploads = o13;
u13.Responses = b11;
u13.Evals = m15;
u13.Containers = c13;

// https://raw.githubusercontent.com/jeff-hykin/openai-agents-js/refs/heads/main/packages/agents-openai/src/metadata.ts
var METADATA = {
  "name": "@openai/agents-openai",
  "version": "0.0.15",
  "versions": {
    "@openai/agents-openai": "0.0.15",
    "@openai/agents-core": "workspace:*",
    "@openai/zod": "npm:zod@3.25.40 - 3.25.67",
    "openai": "^5.10.1"
  }
};
var metadata_default = METADATA;

// https://raw.githubusercontent.com/jeff-hykin/openai-agents-js/refs/heads/main/packages/agents-openai/src/defaults.ts
var DEFAULT_OPENAI_API = "responses";
var DEFAULT_OPENAI_MODEL = "gpt-4.1";
var _defaultOpenAIAPI = DEFAULT_OPENAI_API;
var _defaultOpenAIClient;
var _defaultOpenAIKey = void 0;
var _defaultTracingApiKey = void 0;
function getTracingExportApiKey() {
  return _defaultTracingApiKey ?? loadEnv().OPENAI_API_KEY;
}
function shouldUseResponsesByDefault() {
  return _defaultOpenAIAPI === "responses";
}
function getDefaultOpenAIClient() {
  return _defaultOpenAIClient;
}
function getDefaultOpenAIKey() {
  return _defaultOpenAIKey ?? loadEnv().OPENAI_API_KEY;
}
var HEADERS = {
  "User-Agent": `Agents/JavaScript ${metadata_default.version}`
};

// https://raw.githubusercontent.com/jeff-hykin/openai-agents-js/refs/heads/main/packages/agents-openai/src/logger.ts
var logger2 = getLogger("openai-agents:openai");
var logger_default2 = logger2;

// https://raw.githubusercontent.com/jeff-hykin/openai-agents-js/refs/heads/main/packages/agents-openai/src/tools.ts
var WebSearchStatus = be.enum(["in_progress", "completed", "searching", "failed"]).default("failed");
var FileSearchStatus = be.enum(["in_progress", "completed", "searching", "failed", "incomplete"]).default("failed");
var CodeInterpreterStatus = be.enum(["in_progress", "completed", "interpreting"]).default("in_progress");
var ImageGenerationStatus = be.enum(["in_progress", "completed", "generating", "failed"]).default("failed");

// https://raw.githubusercontent.com/jeff-hykin/openai-agents-js/refs/heads/main/packages/agents-openai/src/utils/providerData.ts
function camelOrSnakeToSnakeCase(providerData) {
  if (!providerData || typeof providerData !== "object" || Array.isArray(providerData)) {
    return providerData;
  }
  const result = {};
  for (const [key, value] of Object.entries(providerData)) {
    const snakeKey = key.replace(/([A-Z])/g, "_$1").toLowerCase();
    result[snakeKey] = camelOrSnakeToSnakeCase(value);
  }
  return result;
}

// https://raw.githubusercontent.com/jeff-hykin/openai-agents-js/refs/heads/main/packages/agents-openai/src/openaiResponsesModel.ts
var HostedToolChoice = be.enum([
  "file_search",
  "web_search_preview",
  "computer_use_preview",
  "code_interpreter",
  "image_generation",
  "mcp"
]);
var DefaultToolChoice = be.enum(["auto", "required", "none"]);
function getToolChoice(toolChoice) {
  if (typeof toolChoice === "undefined") {
    return void 0;
  }
  const resultDefaultCheck = DefaultToolChoice.safeParse(toolChoice);
  if (resultDefaultCheck.success) {
    return resultDefaultCheck.data;
  }
  const result = HostedToolChoice.safeParse(toolChoice);
  if (result.success) {
    return { type: result.data };
  }
  return { type: "function", name: toolChoice };
}
function getResponseFormat(outputType) {
  if (outputType === "text") {
    return void 0;
  }
  return {
    format: outputType
  };
}
function getTools(tools, handoffs) {
  const openaiTools = [];
  const include = [];
  for (const tool2 of tools) {
    const { tool: openaiTool, include: openaiIncludes } = converTool(tool2);
    openaiTools.push(openaiTool);
    if (openaiIncludes && openaiIncludes.length > 0) {
      for (const item of openaiIncludes) {
        include.push(item);
      }
    }
  }
  return {
    tools: [...openaiTools, ...handoffs.map(getHandoffTool)],
    include
  };
}
function converTool(tool2) {
  if (tool2.type === "function") {
    return {
      tool: {
        type: "function",
        name: tool2.name,
        description: tool2.description,
        parameters: tool2.parameters,
        strict: tool2.strict
      },
      include: void 0
    };
  } else if (tool2.type === "computer") {
    return {
      tool: {
        type: "computer_use_preview",
        environment: tool2.environment,
        display_width: tool2.dimensions[0],
        display_height: tool2.dimensions[1]
      },
      include: void 0
    };
  } else if (tool2.type === "hosted_tool") {
    if (tool2.providerData?.type === "web_search") {
      return {
        tool: {
          type: "web_search_preview",
          user_location: tool2.providerData.user_location,
          search_context_size: tool2.providerData.search_context_size
        },
        include: void 0
      };
    } else if (tool2.providerData?.type === "file_search") {
      return {
        tool: {
          type: "file_search",
          vector_store_ids: tool2.providerData.vector_store_ids || // for backwards compatibility
          (typeof tool2.providerData.vector_store_id === "string" ? [tool2.providerData.vector_store_id] : tool2.providerData.vector_store_id),
          max_num_results: tool2.providerData.max_num_results,
          ranking_options: tool2.providerData.ranking_options,
          filters: tool2.providerData.filters
        },
        include: tool2.providerData.include_search_results ? ["file_search_call.results"] : void 0
      };
    } else if (tool2.providerData?.type === "code_interpreter") {
      return {
        tool: {
          type: "code_interpreter",
          container: tool2.providerData.container
        },
        include: void 0
      };
    } else if (tool2.providerData?.type === "image_generation") {
      return {
        tool: {
          type: "image_generation",
          background: tool2.providerData.background,
          input_fidelity: tool2.providerData.input_fidelity,
          input_image_mask: tool2.providerData.input_image_mask,
          model: tool2.providerData.model,
          moderation: tool2.providerData.moderation,
          output_compression: tool2.providerData.output_compression,
          output_format: tool2.providerData.output_format,
          partial_images: tool2.providerData.partial_images,
          quality: tool2.providerData.quality,
          size: tool2.providerData.size
        },
        include: void 0
      };
    } else if (tool2.providerData?.type === "mcp") {
      return {
        tool: {
          type: "mcp",
          server_label: tool2.providerData.server_label,
          server_url: tool2.providerData.server_url,
          allowed_tools: tool2.providerData.allowed_tools,
          headers: tool2.providerData.headers,
          require_approval: convertMCPRequireApproval(
            tool2.providerData.require_approval
          )
        },
        include: void 0
      };
    } else if (tool2.providerData) {
      return {
        tool: tool2.providerData,
        include: void 0
      };
    }
  }
  throw new Error(`Unsupported tool type: ${JSON.stringify(tool2)}`);
}
function convertMCPRequireApproval(requireApproval) {
  if (requireApproval === "never" || requireApproval === void 0) {
    return "never";
  }
  if (requireApproval === "always") {
    return "always";
  }
  return {
    never: { tool_names: requireApproval.never?.tool_names },
    always: { tool_names: requireApproval.always?.tool_names }
  };
}
function getHandoffTool(handoff2) {
  return {
    name: handoff2.toolName,
    description: handoff2.toolDescription,
    parameters: handoff2.inputJsonSchema,
    strict: handoff2.strictJsonSchema,
    type: "function"
  };
}
function getInputMessageContent(entry) {
  if (entry.type === "input_text") {
    return {
      type: "input_text",
      text: entry.text,
      ...camelOrSnakeToSnakeCase(entry.providerData)
    };
  } else if (entry.type === "input_image") {
    const imageEntry = {
      type: "input_image",
      detail: "auto"
    };
    if (typeof entry.image === "string") {
      imageEntry.image_url = entry.image;
    } else {
      imageEntry.file_id = entry.image.id;
    }
    return {
      ...imageEntry,
      ...camelOrSnakeToSnakeCase(entry.providerData)
    };
  } else if (entry.type === "input_file") {
    const fileEntry = {
      type: "input_file"
    };
    if (typeof entry.file === "string") {
      if (entry.file.startsWith("data:")) {
        fileEntry.file_data = entry.file;
      } else if (entry.file.startsWith("https://")) {
        fileEntry.file_url = entry.file;
      } else {
        throw new UserError(
          `Unsupported string data for file input. If you're trying to pass an uploaded file's ID, use an object with the ID property instead.`
        );
      }
    } else if ("id" in entry.file) {
      fileEntry.file_id = entry.file.id;
    } else if ("url" in entry.file) {
      fileEntry.file_url = entry.file.url;
    }
    return {
      ...fileEntry,
      ...camelOrSnakeToSnakeCase(entry.providerData)
    };
  }
  throw new UserError(
    `Unsupported input content type: ${JSON.stringify(entry)}`
  );
}
function getOutputMessageContent(entry) {
  if (entry.type === "output_text") {
    return {
      type: "output_text",
      text: entry.text,
      annotations: [],
      ...camelOrSnakeToSnakeCase(entry.providerData)
    };
  }
  if (entry.type === "refusal") {
    return {
      type: "refusal",
      refusal: entry.refusal,
      ...camelOrSnakeToSnakeCase(entry.providerData)
    };
  }
  throw new UserError(
    `Unsupported output content type: ${JSON.stringify(entry)}`
  );
}
function getMessageItem(item) {
  if (item.role === "system") {
    return {
      id: item.id,
      role: "system",
      content: item.content,
      ...camelOrSnakeToSnakeCase(item.providerData)
    };
  }
  if (item.role === "user") {
    if (typeof item.content === "string") {
      return {
        id: item.id,
        role: "user",
        content: item.content,
        ...camelOrSnakeToSnakeCase(item.providerData)
      };
    }
    return {
      id: item.id,
      role: "user",
      content: item.content.map(getInputMessageContent),
      ...camelOrSnakeToSnakeCase(item.providerData)
    };
  }
  if (item.role === "assistant") {
    const assistantMessage = {
      type: "message",
      id: item.id,
      role: "assistant",
      content: item.content.map(getOutputMessageContent),
      status: item.status,
      ...camelOrSnakeToSnakeCase(item.providerData)
    };
    return assistantMessage;
  }
  throw new UserError(`Unsupported item ${JSON.stringify(item)}`);
}
function isMessageItem(item) {
  if (item.type === "message") {
    return true;
  }
  if (typeof item.type === "undefined" && typeof item.role === "string") {
    return true;
  }
  return false;
}
function getPrompt(prompt) {
  if (!prompt) {
    return void 0;
  }
  const transformedVariables = {};
  for (const [key, value] of Object.entries(prompt.variables ?? {})) {
    if (typeof value === "string") {
      transformedVariables[key] = value;
    } else if (typeof value === "object") {
      transformedVariables[key] = getInputMessageContent(value);
    }
  }
  return {
    id: prompt.promptId,
    version: prompt.version,
    variables: transformedVariables
  };
}
function getInputItems(input) {
  if (typeof input === "string") {
    return [
      {
        role: "user",
        content: input
      }
    ];
  }
  return input.map((item) => {
    if (isMessageItem(item)) {
      return getMessageItem(item);
    }
    if (item.type === "function_call") {
      const entry = {
        id: item.id,
        type: "function_call",
        name: item.name,
        call_id: item.callId,
        arguments: item.arguments,
        status: item.status,
        ...camelOrSnakeToSnakeCase(item.providerData)
      };
      return entry;
    }
    if (item.type === "function_call_result") {
      if (item.output.type !== "text") {
        throw new UserError(
          `Unsupported tool result type: ${JSON.stringify(item.output)}`
        );
      }
      const entry = {
        type: "function_call_output",
        id: item.id,
        call_id: item.callId,
        output: item.output.text,
        status: item.status,
        ...camelOrSnakeToSnakeCase(item.providerData)
      };
      return entry;
    }
    if (item.type === "reasoning") {
      const entry = {
        id: item.id,
        type: "reasoning",
        summary: item.content.map((content) => ({
          type: "summary_text",
          text: content.text,
          ...camelOrSnakeToSnakeCase(content.providerData)
        })),
        encrypted_content: item.providerData?.encryptedContent,
        ...camelOrSnakeToSnakeCase(item.providerData)
      };
      return entry;
    }
    if (item.type === "computer_call") {
      const entry = {
        type: "computer_call",
        call_id: item.callId,
        id: item.id,
        action: item.action,
        status: item.status,
        pending_safety_checks: [],
        ...camelOrSnakeToSnakeCase(item.providerData)
      };
      return entry;
    }
    if (item.type === "computer_call_result") {
      const entry = {
        type: "computer_call_output",
        id: item.id,
        call_id: item.callId,
        output: buildResponseOutput(item),
        status: item.providerData?.status,
        acknowledged_safety_checks: item.providerData?.acknowledgedSafetyChecks,
        ...camelOrSnakeToSnakeCase(item.providerData)
      };
      return entry;
    }
    if (item.type === "hosted_tool_call") {
      if (item.providerData?.type === "web_search_call" || item.providerData?.type === "web_search") {
        const entry = {
          ...camelOrSnakeToSnakeCase(item.providerData),
          // place here to prioritize the below fields
          type: "web_search_call",
          id: item.id,
          status: WebSearchStatus.parse(item.status ?? "failed")
        };
        return entry;
      }
      if (item.providerData?.type === "file_search_call" || item.providerData?.type === "file_search") {
        const entry = {
          ...camelOrSnakeToSnakeCase(item.providerData),
          // place here to prioritize the below fields
          type: "file_search_call",
          id: item.id,
          status: FileSearchStatus.parse(item.status ?? "failed"),
          queries: item.providerData?.queries ?? [],
          results: item.providerData?.results
        };
        return entry;
      }
      if (item.providerData?.type === "code_interpreter_call" || item.providerData?.type === "code_interpreter") {
        const entry = {
          ...camelOrSnakeToSnakeCase(item.providerData),
          // place here to prioritize the below fields
          type: "code_interpreter_call",
          id: item.id,
          code: item.providerData?.code ?? "",
          // This property used to be results, so keeping both for backward compatibility
          // That said, this property cannot be passed from a user, so it's just API's internal data.
          outputs: item.providerData?.outputs ?? item.providerData?.results ?? [],
          status: CodeInterpreterStatus.parse(item.status ?? "failed"),
          container_id: item.providerData?.container_id
        };
        return entry;
      }
      if (item.providerData?.type === "image_generation_call" || item.providerData?.type === "image_generation") {
        const entry = {
          ...camelOrSnakeToSnakeCase(item.providerData),
          // place here to prioritize the below fields
          type: "image_generation_call",
          id: item.id,
          result: item.providerData?.result ?? null,
          status: ImageGenerationStatus.parse(item.status ?? "failed")
        };
        return entry;
      }
      if (item.providerData?.type === "mcp_list_tools" || item.name === "mcp_list_tools") {
        const providerData = item.providerData;
        const entry = {
          ...camelOrSnakeToSnakeCase(item.providerData),
          type: "mcp_list_tools",
          id: item.id,
          tools: camelOrSnakeToSnakeCase(providerData.tools),
          server_label: providerData.server_label,
          error: providerData.error
        };
        return entry;
      } else if (item.providerData?.type === "mcp_approval_request" || item.name === "mcp_approval_request") {
        const providerData = item.providerData;
        const entry = {
          ...camelOrSnakeToSnakeCase(item.providerData),
          // place here to prioritize the below fields
          type: "mcp_approval_request",
          id: providerData.id ?? item.id,
          name: providerData.name,
          arguments: providerData.arguments,
          server_label: providerData.server_label
        };
        return entry;
      } else if (item.providerData?.type === "mcp_approval_response" || item.name === "mcp_approval_response") {
        const providerData = item.providerData;
        const entry = {
          ...camelOrSnakeToSnakeCase(providerData),
          type: "mcp_approval_response",
          id: providerData.id,
          approve: providerData.approve,
          approval_request_id: providerData.approval_request_id,
          reason: providerData.reason
        };
        return entry;
      } else if (item.providerData?.type === "mcp_call" || item.name === "mcp_call") {
        const providerData = item.providerData;
        const entry = {
          // output, which can be a large text string, is optional here, so we don't include it
          // output: item.output,
          ...camelOrSnakeToSnakeCase(providerData),
          // place here to prioritize the below fields
          type: "mcp_call",
          id: providerData.id ?? item.id,
          name: providerData.name,
          arguments: providerData.arguments,
          server_label: providerData.server_label,
          error: providerData.error
        };
        return entry;
      }
      throw new UserError(
        `Unsupported built-in tool call type: ${JSON.stringify(item)}`
      );
    }
    if (item.type === "unknown") {
      return {
        ...camelOrSnakeToSnakeCase(item.providerData),
        // place here to prioritize the below fields
        id: item.id
      };
    }
    const exhaustive = item;
    throw new UserError(`Unsupported item ${JSON.stringify(exhaustive)}`);
  });
}
function buildResponseOutput(item) {
  return {
    type: "computer_screenshot",
    image_url: item.output.data
  };
}
function convertToMessageContentItem(item) {
  if (item.type === "output_text") {
    const { type, text, ...remainingItem } = item;
    return {
      type,
      text,
      ...remainingItem
    };
  }
  if (item.type === "refusal") {
    const { type, refusal, ...remainingItem } = item;
    return {
      type,
      refusal,
      ...remainingItem
    };
  }
  throw new Error(`Unsupported message content type: ${JSON.stringify(item)}`);
}
function convertToOutputItem(items) {
  return items.map((item) => {
    if (item.type === "message") {
      const { id, type, role, content, status, ...providerData } = item;
      return {
        id,
        type,
        role,
        content: content.map(convertToMessageContentItem),
        status,
        providerData
      };
    } else if (item.type === "file_search_call" || item.type === "web_search_call" || item.type === "image_generation_call" || item.type === "code_interpreter_call") {
      const { status, ...remainingItem } = item;
      let outputData = void 0;
      if ("result" in remainingItem && remainingItem.result !== null) {
        outputData = remainingItem.result;
        delete remainingItem.result;
      }
      const output = {
        type: "hosted_tool_call",
        id: item.id,
        name: item.type,
        status,
        output: outputData,
        providerData: remainingItem
      };
      return output;
    } else if (item.type === "function_call") {
      const { call_id, name, status, arguments: args, ...providerData } = item;
      const output = {
        type: "function_call",
        id: item.id,
        callId: call_id,
        name,
        status,
        arguments: args,
        providerData
      };
      return output;
    } else if (item.type === "computer_call") {
      const { call_id, status, action, ...providerData } = item;
      const output = {
        type: "computer_call",
        id: item.id,
        callId: call_id,
        status,
        action,
        providerData
      };
      return output;
    } else if (item.type === "mcp_list_tools") {
      const { ...providerData } = item;
      const output = {
        type: "hosted_tool_call",
        id: item.id,
        name: item.type,
        status: "completed",
        output: void 0,
        providerData
      };
      return output;
    } else if (item.type === "mcp_approval_request") {
      const { ...providerData } = item;
      const output = {
        type: "hosted_tool_call",
        id: item.id,
        name: "mcp_approval_request",
        status: "completed",
        output: void 0,
        providerData
      };
      return output;
    } else if (item.type === "mcp_call") {
      const { output: outputData, ...providerData } = item;
      const output = {
        type: "hosted_tool_call",
        id: item.id,
        name: item.type,
        status: "completed",
        output: outputData || void 0,
        providerData
      };
      return output;
    } else if (item.type === "reasoning") {
      const { summary, ...providerData } = item;
      const output = {
        type: "reasoning",
        id: item.id,
        content: summary.map((content) => {
          const { text, ...remainingContent } = content;
          return {
            type: "input_text",
            text,
            providerData: remainingContent
          };
        }),
        providerData
      };
      return output;
    }
    return {
      type: "unknown",
      providerData: item
    };
  });
}
var OpenAIResponsesModel = class {
  #client;
  #model;
  constructor(client, model2) {
    this.#client = client;
    this.#model = model2;
  }
  async #fetchResponse(request, stream2) {
    const input = getInputItems(request.input);
    const { tools, include } = getTools(request.tools, request.handoffs);
    const toolChoice = getToolChoice(request.modelSettings.toolChoice);
    const responseFormat = getResponseFormat(request.outputType);
    const prompt = getPrompt(request.prompt);
    let parallelToolCalls = void 0;
    if (typeof request.modelSettings.parallelToolCalls === "boolean") {
      if (request.modelSettings.parallelToolCalls && tools.length === 0) {
        throw new Error("Parallel tool calls are not supported without tools");
      }
      parallelToolCalls = request.modelSettings.parallelToolCalls;
    }
    const requestData = {
      instructions: request.systemInstructions,
      model: this.#model,
      input,
      include,
      tools,
      previous_response_id: request.previousResponseId,
      prompt,
      temperature: request.modelSettings.temperature,
      top_p: request.modelSettings.topP,
      truncation: request.modelSettings.truncation,
      max_output_tokens: request.modelSettings.maxTokens,
      tool_choice: toolChoice,
      parallel_tool_calls: parallelToolCalls,
      stream: stream2,
      text: responseFormat,
      store: request.modelSettings.store,
      ...request.modelSettings.providerData
    };
    if (logger_default2.dontLogModelData) {
      logger_default2.debug("Calling LLM");
    } else {
      logger_default2.debug(
        `Calling LLM. Request data: ${JSON.stringify(requestData, null, 2)}`
      );
    }
    const response = await this.#client.responses.create(requestData, {
      headers: HEADERS,
      signal: request.signal
    });
    if (logger_default2.dontLogModelData) {
      logger_default2.debug("Response received");
    } else {
      logger_default2.debug(`Response received: ${JSON.stringify(response, null, 2)}`);
    }
    return response;
  }
  /**
   * Get a response from the OpenAI model using the Responses API.
   * @param request - The request to send to the model.
   * @returns A promise that resolves to the response from the model.
   */
  async getResponse(request) {
    const response = await withResponseSpan(async (span) => {
      const response2 = await this.#fetchResponse(request, false);
      if (request.tracing) {
        span.spanData.response_id = response2.id;
        span.spanData._input = request.input;
        span.spanData._response = response2;
      }
      return response2;
    });
    const output = {
      usage: new Usage({
        inputTokens: response.usage?.input_tokens ?? 0,
        outputTokens: response.usage?.output_tokens ?? 0,
        totalTokens: response.usage?.total_tokens ?? 0,
        inputTokensDetails: { ...response.usage?.input_tokens_details },
        outputTokensDetails: { ...response.usage?.output_tokens_details }
      }),
      output: convertToOutputItem(response.output),
      responseId: response.id,
      providerData: response
    };
    return output;
  }
  /**
   * Get a streamed response from the OpenAI model using the Responses API.
   * @param request - The request to send to the model.
   * @returns An async iterable of the response from the model.
   */
  async *getStreamedResponse(request) {
    const span = request.tracing ? createResponseSpan() : void 0;
    try {
      if (span) {
        span.start();
        setCurrentSpan(span);
        if (request.tracing === true) {
          span.spanData._input = request.input;
        }
      }
      const response = await this.#fetchResponse(request, true);
      let finalResponse;
      for await (const event of response) {
        if (event.type === "response.created") {
          yield {
            type: "response_started",
            providerData: {
              ...event
            }
          };
        } else if (event.type === "response.completed") {
          finalResponse = event.response;
          const { response: response2, ...remainingEvent } = event;
          const { output, usage, id, ...remainingResponse } = response2;
          yield {
            type: "response_done",
            response: {
              id,
              output: convertToOutputItem(output),
              usage: {
                inputTokens: usage?.input_tokens ?? 0,
                outputTokens: usage?.output_tokens ?? 0,
                totalTokens: usage?.total_tokens ?? 0,
                inputTokensDetails: {
                  ...usage?.input_tokens_details
                },
                outputTokensDetails: {
                  ...usage?.output_tokens_details
                }
              },
              providerData: remainingResponse
            },
            providerData: remainingEvent
          };
          yield {
            type: "model",
            event
          };
        } else if (event.type === "response.output_text.delta") {
          const { delta, ...remainingEvent } = event;
          yield {
            type: "output_text_delta",
            delta,
            providerData: remainingEvent
          };
        }
        yield {
          type: "model",
          event
        };
      }
      if (request.tracing && span && finalResponse) {
        span.spanData.response_id = finalResponse.id;
        span.spanData._response = finalResponse;
      }
    } catch (error) {
      if (span) {
        span.setError({
          message: "Error streaming response",
          data: {
            error: request.tracing ? String(error) : error instanceof Error ? error.name : void 0
          }
        });
      }
      throw error;
    } finally {
      if (span) {
        span.end();
        resetCurrentSpan();
      }
    }
  }
};

// https://raw.githubusercontent.com/jeff-hykin/openai-agents-js/refs/heads/main/packages/agents-openai/src/openaiChatCompletionsStreaming.ts
async function* convertChatCompletionsStreamToResponses(response, stream2) {
  let usage = void 0;
  const state = {
    started: false,
    text_content_index_and_output: null,
    refusal_content_index_and_output: null,
    function_calls: {},
    reasoning: ""
  };
  for await (const chunk of stream2) {
    if (!state.started) {
      state.started = true;
      yield {
        type: "response_started",
        providerData: {
          ...chunk
        }
      };
    }
    yield {
      type: "model",
      event: chunk
    };
    usage = chunk.usage || void 0;
    if (!chunk.choices?.[0]?.delta) continue;
    const delta = chunk.choices[0].delta;
    if (delta.content) {
      if (!state.text_content_index_and_output) {
        state.text_content_index_and_output = [
          !state.refusal_content_index_and_output ? 0 : 1,
          { text: "", type: "output_text", providerData: { annotations: [] } }
        ];
      }
      yield {
        type: "output_text_delta",
        delta: delta.content,
        providerData: {
          ...chunk
        }
      };
      state.text_content_index_and_output[1].text += delta.content;
    }
    if ("reasoning" in delta && delta.reasoning && typeof delta.reasoning === "string") {
      state.reasoning += delta.reasoning;
    }
    if ("refusal" in delta && delta.refusal) {
      if (!state.refusal_content_index_and_output) {
        state.refusal_content_index_and_output = [
          !state.text_content_index_and_output ? 0 : 1,
          { refusal: "", type: "refusal" }
        ];
      }
      state.refusal_content_index_and_output[1].refusal += delta.refusal;
    }
    if (delta.tool_calls) {
      for (const tc_delta of delta.tool_calls) {
        if (!(tc_delta.index in state.function_calls)) {
          state.function_calls[tc_delta.index] = {
            id: FAKE_ID,
            arguments: "",
            name: "",
            type: "function_call",
            callId: ""
          };
        }
        const tc_function = tc_delta.function;
        state.function_calls[tc_delta.index].arguments += tc_function?.arguments || "";
        state.function_calls[tc_delta.index].name += tc_function?.name || "";
        state.function_calls[tc_delta.index].callId += tc_delta.id || "";
      }
    }
  }
  const outputs = [];
  if (state.reasoning) {
    outputs.push({
      type: "reasoning",
      content: [],
      rawContent: [{ type: "reasoning_text", text: state.reasoning }]
    });
  }
  if (state.text_content_index_and_output || state.refusal_content_index_and_output) {
    const assistant_msg = {
      id: FAKE_ID,
      content: [],
      role: "assistant",
      type: "message",
      status: "completed"
    };
    if (state.text_content_index_and_output) {
      assistant_msg.content.push(state.text_content_index_and_output[1]);
    }
    if (state.refusal_content_index_and_output) {
      assistant_msg.content.push(state.refusal_content_index_and_output[1]);
    }
    outputs.push(assistant_msg);
  }
  for (const function_call of Object.values(state.function_calls)) {
    outputs.push(function_call);
  }
  const finalEvent = {
    type: "response_done",
    response: {
      id: response.id,
      usage: {
        inputTokens: usage?.prompt_tokens ?? 0,
        outputTokens: usage?.completion_tokens ?? 0,
        totalTokens: usage?.total_tokens ?? 0,
        inputTokensDetails: {
          cached_tokens: usage?.prompt_tokens_details?.cached_tokens ?? 0
        },
        outputTokensDetails: {
          reasoning_tokens: usage?.completion_tokens_details?.reasoning_tokens ?? 0
        }
      },
      output: outputs
    }
  };
  yield finalEvent;
}

// https://raw.githubusercontent.com/jeff-hykin/openai-agents-js/refs/heads/main/packages/agents-openai/src/openaiChatCompletionsConverter.ts
function convertToolChoice(toolChoice) {
  if (toolChoice == void 0 || toolChoice == null) return void 0;
  if (toolChoice === "auto" || toolChoice === "required" || toolChoice === "none")
    return toolChoice;
  return {
    type: "function",
    function: { name: toolChoice }
  };
}
function extractAllAssistantContent(content) {
  if (typeof content === "string") {
    return content;
  }
  const out = [];
  for (const c18 of content) {
    if (c18.type === "output_text" || c18.type === "input_text") {
      out.push({
        type: "text",
        text: c18.text,
        ...c18.providerData
      });
    } else if (c18.type === "refusal") {
      out.push({
        type: "refusal",
        refusal: c18.refusal,
        ...c18.providerData
      });
    } else if (c18.type === "audio" || c18.type === "image") {
      continue;
    } else {
      const exhaustive = c18;
      throw new Error(`Unknown content: ${JSON.stringify(exhaustive)}`);
    }
  }
  return out;
}
function extractAllUserContent(content) {
  if (typeof content === "string") {
    return content;
  }
  const out = [];
  for (const c18 of content) {
    if (c18.type === "input_text") {
      out.push({ type: "text", text: c18.text, ...c18.providerData });
    } else if (c18.type === "input_image") {
      if (typeof c18.image !== "string") {
        throw new Error(
          `Only image URLs are supported for input_image: ${JSON.stringify(c18)}`
        );
      }
      const { image_url, ...rest } = c18.providerData || {};
      out.push({
        type: "image_url",
        image_url: {
          url: c18.image,
          ...image_url
        },
        ...rest
      });
    } else if (c18.type === "input_file") {
      throw new Error(
        `File uploads are not supported for chat completions: ${JSON.stringify(
          c18
        )}`
      );
    } else if (c18.type === "audio") {
      const { input_audio, ...rest } = c18.providerData || {};
      out.push({
        type: "input_audio",
        input_audio: {
          data: c18.audio,
          ...input_audio
        },
        ...rest
      });
    } else {
      const exhaustive = c18;
      throw new Error(`Unknown content: ${JSON.stringify(exhaustive)}`);
    }
  }
  return out;
}
function isMessageItem2(item) {
  if (item.type === "message") {
    return true;
  }
  if (typeof item.type === "undefined" && typeof item.role === "string") {
    return true;
  }
  return false;
}
function itemsToMessages(items) {
  if (typeof items === "string") {
    return [{ role: "user", content: items }];
  }
  const result = [];
  let currentAssistantMsg = null;
  const flushAssistantMessage = () => {
    if (currentAssistantMsg) {
      if (!currentAssistantMsg.tool_calls || currentAssistantMsg.tool_calls.length === 0) {
        delete currentAssistantMsg.tool_calls;
      }
      result.push(currentAssistantMsg);
      currentAssistantMsg = null;
    }
  };
  const ensureAssistantMessage = () => {
    if (!currentAssistantMsg) {
      currentAssistantMsg = { role: "assistant", tool_calls: [] };
    }
    return currentAssistantMsg;
  };
  for (const item of items) {
    if (isMessageItem2(item)) {
      const { content, role, providerData } = item;
      flushAssistantMessage();
      if (role === "assistant") {
        const assistant2 = {
          role: "assistant",
          content: extractAllAssistantContent(content),
          ...providerData
        };
        const audio = content.find((c18) => c18.type === "audio");
        if (audio) {
          assistant2.audio = {
            id: "",
            // setting this to empty ID and expecting that the user sets providerData.id
            ...audio.providerData
          };
        }
        result.push(assistant2);
      } else if (role === "user") {
        result.push({
          role,
          content: extractAllUserContent(content),
          ...providerData
        });
      } else if (role === "system") {
        result.push({
          role: "system",
          content,
          ...providerData
        });
      }
    } else if (item.type === "reasoning") {
      const asst = ensureAssistantMessage();
      asst.reasoning = item.rawContent?.[0]?.text;
      continue;
    } else if (item.type === "hosted_tool_call") {
      if (item.name === "file_search_call") {
        const asst = ensureAssistantMessage();
        const toolCalls = asst.tool_calls ?? [];
        const fileSearch = item;
        const { function: functionData, ...rest } = fileSearch.providerData ?? {};
        const { arguments: argumentData, ...remainingFunctionData } = functionData ?? {};
        toolCalls.push({
          id: fileSearch.id || "",
          type: "function",
          function: {
            name: "file_search_call",
            arguments: JSON.stringify({
              queries: fileSearch.providerData?.queries ?? [],
              status: fileSearch.status,
              ...argumentData
            }),
            ...remainingFunctionData
          },
          ...rest
        });
        asst.tool_calls = toolCalls;
        continue;
      } else {
        throw new UserError(
          "Hosted tool calls are not supported for chat completions. Got item: " + JSON.stringify(item)
        );
      }
    } else if (item.type === "computer_call" || item.type === "computer_call_result") {
      throw new UserError(
        "Computer use calls are not supported for chat completions. Got item: " + JSON.stringify(item)
      );
    } else if (item.type === "function_call") {
      const asst = ensureAssistantMessage();
      const toolCalls = asst.tool_calls ?? [];
      const funcCall = item;
      toolCalls.push({
        id: funcCall.callId,
        type: "function",
        function: {
          name: funcCall.name,
          arguments: funcCall.arguments ?? "{}"
        }
      });
      asst.tool_calls = toolCalls;
    } else if (item.type === "function_call_result") {
      flushAssistantMessage();
      const funcOutput = item;
      if (funcOutput.output.type !== "text") {
        throw new UserError(
          "Only text output is supported for chat completions. Got item: " + JSON.stringify(item)
        );
      }
      result.push({
        role: "tool",
        tool_call_id: funcOutput.callId,
        content: funcOutput.output.text,
        ...funcOutput.providerData
      });
    } else if (item.type === "unknown") {
      result.push({
        ...item.providerData
      });
    } else {
      const exhaustive = item;
      throw new Error(`Unknown item type: ${JSON.stringify(exhaustive)}`);
    }
  }
  flushAssistantMessage();
  return result;
}
function toolToOpenAI(tool2) {
  if (tool2.type === "function") {
    return {
      type: "function",
      function: {
        name: tool2.name,
        description: tool2.description || "",
        parameters: tool2.parameters
      }
    };
  }
  throw new Error(
    `Hosted tools are not supported with the ChatCompletions API. Got tool type: ${tool2.type}, tool: ${JSON.stringify(tool2)}`
  );
}
function convertHandoffTool(handoff2) {
  return {
    type: "function",
    function: {
      name: handoff2.toolName,
      description: handoff2.toolDescription || "",
      parameters: handoff2.inputJsonSchema
    }
  };
}

// https://raw.githubusercontent.com/jeff-hykin/openai-agents-js/refs/heads/main/packages/agents-openai/src/openaiChatCompletionsModel.ts
var FAKE_ID = "FAKE_ID";
function hasReasoningContent(message) {
  return "reasoning" in message && typeof message.reasoning === "string" && message.reasoning !== "";
}
var OpenAIChatCompletionsModel = class {
  #client;
  #model;
  constructor(client, model2) {
    this.#client = client;
    this.#model = model2;
  }
  async getResponse(request) {
    const response = await withGenerationSpan(async (span) => {
      span.spanData.model = this.#model;
      span.spanData.model_config = request.modelSettings ? {
        temperature: request.modelSettings.temperature,
        top_p: request.modelSettings.topP,
        frequency_penalty: request.modelSettings.frequencyPenalty,
        presence_penalty: request.modelSettings.presencePenalty
      } : { base_url: this.#client.baseURL };
      const response2 = await this.#fetchResponse(request, span, false);
      if (span && request.tracing === true) {
        span.spanData.output = [response2];
      }
      return response2;
    });
    const output = [];
    if (response.choices && response.choices[0]) {
      const message = response.choices[0].message;
      if (hasReasoningContent(message)) {
        output.push({
          type: "reasoning",
          content: [],
          rawContent: [
            {
              type: "reasoning_text",
              text: message.reasoning
            }
          ]
        });
      }
      if (message.content !== void 0 && message.content !== null && // Azure OpenAI returns empty string instead of null for tool calls, causing parser rejection
      !(message.tool_calls && message.content === "")) {
        const { content, ...rest } = message;
        output.push({
          id: response.id,
          type: "message",
          role: "assistant",
          content: [
            {
              type: "output_text",
              text: content || "",
              providerData: rest
            }
          ],
          status: "completed"
        });
      } else if (message.refusal) {
        const { refusal, ...rest } = message;
        output.push({
          id: response.id,
          type: "message",
          role: "assistant",
          content: [
            {
              type: "refusal",
              refusal: refusal || "",
              providerData: rest
            }
          ],
          status: "completed"
        });
      } else if (message.audio) {
        const { data, ...remainingAudioData } = message.audio;
        output.push({
          id: response.id,
          type: "message",
          role: "assistant",
          content: [
            {
              type: "audio",
              audio: data,
              providerData: remainingAudioData
            }
          ],
          status: "completed"
        });
      } else if (message.tool_calls) {
        for (const tool_call of message.tool_calls) {
          const { id: callId, ...remainingToolCallData } = tool_call;
          const {
            arguments: args,
            name,
            ...remainingFunctionData
          } = tool_call.function;
          output.push({
            id: response.id,
            type: "function_call",
            arguments: args,
            name,
            callId,
            status: "completed",
            providerData: {
              ...remainingToolCallData,
              ...remainingFunctionData
            }
          });
        }
      }
    }
    const modelResponse = {
      usage: response.usage ? new Usage(toResponseUsage(response.usage)) : new Usage(),
      output,
      responseId: response.id,
      providerData: response
    };
    return modelResponse;
  }
  async *getStreamedResponse(request) {
    const span = request.tracing ? createGenerationSpan() : void 0;
    try {
      if (span) {
        span.start();
        setCurrentSpan(span);
      }
      const stream2 = await this.#fetchResponse(request, span, true);
      const response = {
        id: FAKE_ID,
        created: Math.floor(Date.now() / 1e3),
        model: this.#model,
        object: "chat.completion",
        choices: [],
        usage: {
          prompt_tokens: 0,
          completion_tokens: 0,
          total_tokens: 0
        }
      };
      for await (const event of convertChatCompletionsStreamToResponses(
        response,
        stream2
      )) {
        yield event;
      }
      if (span && response && request.tracing === true) {
        span.spanData.output = [response];
      }
    } catch (error) {
      if (span) {
        span.setError({
          message: "Error streaming response",
          data: {
            error: request.tracing === true ? String(error) : error instanceof Error ? error.name : void 0
          }
        });
      }
      throw error;
    } finally {
      if (span) {
        span.end();
        resetCurrentSpan();
      }
    }
  }
  async #fetchResponse(request, span, stream2) {
    const tools = [];
    if (request.tools) {
      for (const tool2 of request.tools) {
        tools.push(toolToOpenAI(tool2));
      }
    }
    if (request.handoffs) {
      for (const handoff2 of request.handoffs) {
        tools.push(convertHandoffTool(handoff2));
      }
    }
    const responseFormat = getResponseFormat2(request.outputType);
    let parallelToolCalls = void 0;
    if (typeof request.modelSettings.parallelToolCalls === "boolean") {
      if (request.modelSettings.parallelToolCalls && tools.length === 0) {
        throw new Error("Parallel tool calls are not supported without tools");
      }
      parallelToolCalls = request.modelSettings.parallelToolCalls;
    }
    const messages = itemsToMessages(request.input);
    if (request.systemInstructions) {
      messages.unshift({
        content: request.systemInstructions,
        role: "system"
      });
    }
    if (span && request.tracing === true) {
      span.spanData.input = messages;
    }
    const requestData = {
      model: this.#model,
      messages,
      tools: tools.length ? tools : void 0,
      temperature: request.modelSettings.temperature,
      top_p: request.modelSettings.topP,
      frequency_penalty: request.modelSettings.frequencyPenalty,
      presence_penalty: request.modelSettings.presencePenalty,
      max_tokens: request.modelSettings.maxTokens,
      tool_choice: convertToolChoice(request.modelSettings.toolChoice),
      response_format: responseFormat,
      parallel_tool_calls: parallelToolCalls,
      stream: stream2,
      store: request.modelSettings.store,
      ...request.modelSettings.providerData
    };
    if (logger_default2.dontLogModelData) {
      logger_default2.debug("Calling LLM");
    } else {
      logger_default2.debug(
        `Calling LLM. Request data: ${JSON.stringify(requestData, null, 2)}`
      );
    }
    const completion = await this.#client.chat.completions.create(requestData, {
      headers: HEADERS,
      signal: request.signal
    });
    if (logger_default2.dontLogModelData) {
      logger_default2.debug("Response received");
    } else {
      logger_default2.debug(`Response received: ${JSON.stringify(completion, null, 2)}`);
    }
    return completion;
  }
};
function getResponseFormat2(outputType) {
  if (outputType === "text") {
    return { type: "text" };
  }
  if (outputType.type === "json_schema") {
    return {
      type: "json_schema",
      json_schema: {
        name: outputType.name,
        strict: outputType.strict,
        schema: outputType.schema
      }
    };
  }
  return { type: "json_object" };
}
function toResponseUsage(usage) {
  return {
    requests: 1,
    input_tokens: usage.prompt_tokens,
    output_tokens: usage.completion_tokens,
    total_tokens: usage.total_tokens,
    input_tokens_details: {
      cached_tokens: usage.prompt_tokens_details?.cached_tokens || 0
    },
    output_tokens_details: {
      reasoning_tokens: usage.completion_tokens_details?.reasoning_tokens || 0
    }
  };
}

// https://raw.githubusercontent.com/jeff-hykin/openai-agents-js/refs/heads/main/packages/agents-openai/src/openaiProvider.ts
var OpenAIProvider = class {
  #client;
  #useResponses;
  #options;
  constructor(options = {}) {
    this.#options = options;
    if (this.#options.openAIClient) {
      if (this.#options.apiKey) {
        throw new Error("Cannot provide both apiKey and openAIClient");
      }
      if (this.#options.baseURL) {
        throw new Error("Cannot provide both baseURL and openAIClient");
      }
      this.#client = this.#options.openAIClient;
    }
    this.#useResponses = this.#options.useResponses;
  }
  /**
   * Lazy loads the OpenAI client to not throw an error if you don't have an API key set but
   * never actually use the client.
   */
  #getClient() {
    if (!this.#client) {
      this.#client = // this provider checks if there is the default client first,
      getDefaultOpenAIClient() ?? // and then manually creates a new one.
      new u13({
        apiKey: this.#options.apiKey ?? getDefaultOpenAIKey(),
        baseURL: this.#options.baseURL,
        organization: this.#options.organization,
        project: this.#options.project
      });
    }
    return this.#client;
  }
  async getModel(modelName) {
    const model2 = modelName || DEFAULT_OPENAI_MODEL;
    const useResponses = this.#useResponses ?? shouldUseResponsesByDefault();
    if (useResponses) {
      return new OpenAIResponsesModel(this.#getClient(), model2);
    }
    return new OpenAIChatCompletionsModel(this.#getClient(), model2);
  }
};

// https://raw.githubusercontent.com/jeff-hykin/openai-agents-js/refs/heads/main/packages/agents-openai/src/openaiTracingExporter.ts
var OpenAITracingExporter = class {
  #options;
  constructor(options = {}) {
    this.#options = {
      apiKey: options.apiKey ?? void 0,
      organization: options.organization ?? "",
      project: options.project ?? "",
      endpoint: options.endpoint ?? "https://api.openai.com/v1/traces/ingest",
      maxRetries: options.maxRetries ?? 3,
      baseDelay: options.baseDelay ?? 1e3,
      maxDelay: options.maxDelay ?? 3e4
    };
  }
  async export(items, signal) {
    const apiKey = this.#options.apiKey ?? getTracingExportApiKey();
    if (!apiKey) {
      logger_default2.error(
        "No API key provided for OpenAI tracing exporter. Exports will be skipped"
      );
      return;
    }
    const payload = {
      data: items.map((items2) => items2.toJSON()).filter((item) => !!item)
    };
    let attempts = 0;
    let delay = this.#options.baseDelay;
    while (attempts < this.#options.maxRetries) {
      try {
        const response = await fetch(this.#options.endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
            "OpenAI-Beta": "traces=v1",
            ...HEADERS
          },
          body: JSON.stringify(payload),
          signal
        });
        if (response.ok) {
          logger_default2.debug(`Exported ${payload.data.length} items`);
          return;
        }
        if (response.status >= 400 && response.status < 500) {
          logger_default2.error(
            `[non-fatal] Tracing client error ${response.status}: ${await response.text()}`
          );
          return;
        }
        logger_default2.warn(
          `[non-fatal] Tracing: server error ${response.status}, retrying.`
        );
      } catch (error) {
        logger_default2.error("[non-fatal] Tracing: request failed: ", error);
      }
      if (signal?.aborted) {
        logger_default2.error("Tracing: request aborted");
        return;
      }
      const sleepTime = delay + Math.random() * 0.1 * delay;
      await new Promise((resolve) => setTimeout(resolve, sleepTime));
      delay = Math.min(delay * 2, this.#options.maxDelay);
      attempts++;
    }
    logger_default2.error(
      `Tracing: failed to export traces after ${this.#options.maxRetries} attempts`
    );
  }
};
function setDefaultOpenAITracingExporter() {
  const exporter = new OpenAITracingExporter();
  const processor = new BatchTraceProcessor(exporter);
  setTraceProcessors([processor]);
}

// https://raw.githubusercontent.com/jeff-hykin/openai-agents-js/refs/heads/main/packages/agents-realtime/src/metadata.ts
var METADATA2 = {
  "name": "@openai/agents-realtime",
  "version": "0.0.15",
  "versions": {
    "@openai/agents-realtime": "0.0.15",
    "@openai/agents-core": "workspace:*",
    "@openai/zod": "npm:zod@3.25.40 - 3.25.67"
  }
};
var metadata_default2 = METADATA2;

// https://raw.githubusercontent.com/jeff-hykin/openai-agents-js/refs/heads/main/packages/agents-realtime/src/utils.ts
var HEADERS2 = {
  "User-Agent": `Agents/JavaScript ${metadata_default2.version}`,
  "X-OpenAI-Agents-SDK": `openai-agents-sdk.${metadata_default2.version}`
};
var WEBSOCKET_META = `openai-agents-sdk.${metadata_default2.version}`;

// https://raw.githubusercontent.com/jeff-hykin/openai-agents-js/refs/heads/main/packages/agents-realtime/src/logger.ts
var logger3 = getLogger("openai-agents:realtime");

// https://raw.githubusercontent.com/jeff-hykin/openai-agents-js/refs/heads/main/packages/agents-realtime/src/items.ts
var baseItemSchema = be.object({
  itemId: be.string()
});
var realtimeMessageItemSchema = be.discriminatedUnion("role", [
  be.object({
    itemId: be.string(),
    previousItemId: be.string().nullable().optional(),
    type: be.literal("message"),
    role: be.literal("system"),
    content: be.array(
      be.object({ type: be.literal("input_text"), text: be.string() })
    )
  }),
  be.object({
    itemId: be.string(),
    previousItemId: be.string().nullable().optional(),
    type: be.literal("message"),
    role: be.literal("user"),
    status: be.enum(["in_progress", "completed"]),
    content: be.array(
      be.object({ type: be.literal("input_text"), text: be.string() }).or(
        be.object({
          type: be.literal("input_audio"),
          audio: be.string().nullable().optional(),
          transcript: be.string().nullable()
        })
      )
    )
  }),
  be.object({
    itemId: be.string(),
    previousItemId: be.string().nullable().optional(),
    type: be.literal("message"),
    role: be.literal("assistant"),
    status: be.enum(["in_progress", "completed", "incomplete"]),
    content: be.array(
      be.object({ type: be.literal("text"), text: be.string() }).or(
        be.object({
          type: be.literal("audio"),
          audio: be.string().nullable().optional(),
          transcript: be.string().nullable().optional()
        })
      )
    )
  })
]);
var realtimeToolCallItem = be.object({
  itemId: be.string(),
  previousItemId: be.string().nullable().optional(),
  type: be.literal("function_call"),
  status: be.enum(["in_progress", "completed"]),
  arguments: be.string(),
  name: be.string(),
  output: be.string().nullable()
});

// https://raw.githubusercontent.com/jeff-hykin/openai-agents-js/refs/heads/main/packages/agents-realtime/src/openaiRealtimeEvents.ts
var realtimeResponse = be.object({
  id: be.string().optional().nullable(),
  conversation_id: be.string().optional().nullable(),
  max_output_tokens: be.number().or(be.literal("inf")).optional().nullable(),
  metadata: be.record(be.string(), be.any()).optional().nullable(),
  modalities: be.array(be.string()).optional().nullable(),
  object: be.literal("realtime.response").optional().nullable(),
  output: be.array(be.any()).optional().nullable(),
  output_audio_format: be.string().optional().nullable(),
  status: be.enum(["completed", "incomplete", "failed", "cancelled", "in_progress"]).optional().nullable(),
  status_details: be.record(be.string(), be.any()).optional().nullable(),
  usage: be.object({
    input_tokens: be.number().optional(),
    input_tokens_details: be.record(be.string(), be.any()).optional().nullable(),
    output_tokens: be.number().optional(),
    output_tokens_details: be.record(be.string(), be.any()).optional().nullable()
  }).optional().nullable(),
  voice: be.string().optional().nullable()
});
var conversationItemContentSchema = be.object({
  id: be.string().optional(),
  audio: be.string().nullable().optional(),
  text: be.string().nullable().optional(),
  transcript: be.string().nullable().optional(),
  type: be.union([
    be.literal("input_text"),
    be.literal("input_audio"),
    be.literal("item_reference"),
    be.literal("text"),
    be.literal("audio")
  ])
});
var conversationItemSchema = be.object({
  id: be.string().optional(),
  arguments: be.string().optional(),
  call_id: be.string().optional(),
  content: be.array(conversationItemContentSchema).optional(),
  name: be.string().optional(),
  object: be.literal("realtime.item").optional(),
  output: be.string().optional(),
  role: be.enum(["user", "assistant", "system"]).optional(),
  status: be.enum(["completed", "incomplete", "in_progress"]).optional(),
  type: be.enum(["message", "function_call", "function_call_output"]).optional()
});
var conversationCreatedEventSchema = be.object({
  type: be.literal("conversation.created"),
  event_id: be.string(),
  conversation: be.object({
    id: be.string().optional(),
    object: be.literal("realtime.conversation").optional()
  })
});
var conversationItemCreatedEventSchema = be.object({
  type: be.literal("conversation.item.created"),
  event_id: be.string(),
  item: conversationItemSchema,
  previous_item_id: be.string().nullable().optional()
});
var conversationItemDeletedEventSchema = be.object({
  type: be.literal("conversation.item.deleted"),
  event_id: be.string(),
  item_id: be.string()
});
var conversationItemInputAudioTranscriptionCompletedEventSchema = be.object({
  type: be.literal("conversation.item.input_audio_transcription.completed"),
  event_id: be.string(),
  item_id: be.string(),
  content_index: be.number(),
  transcript: be.string(),
  logprobs: be.array(be.any()).nullable().optional()
});
var conversationItemInputAudioTranscriptionDeltaEventSchema = be.object(
  {
    type: be.literal("conversation.item.input_audio_transcription.delta"),
    event_id: be.string(),
    item_id: be.string(),
    content_index: be.number().optional(),
    delta: be.string().optional(),
    logprobs: be.array(be.any()).nullable().optional()
  }
);
var conversationItemInputAudioTranscriptionFailedEventSchema = be.object({
  type: be.literal("conversation.item.input_audio_transcription.failed"),
  event_id: be.string(),
  item_id: be.string(),
  content_index: be.number(),
  error: be.object({
    code: be.string().optional(),
    message: be.string().optional(),
    param: be.string().optional(),
    type: be.string().optional()
  })
});
var conversationItemRetrievedEventSchema = be.object({
  type: be.literal("conversation.item.retrieved"),
  event_id: be.string(),
  item: conversationItemSchema
});
var conversationItemTruncatedEventSchema = be.object({
  type: be.literal("conversation.item.truncated"),
  event_id: be.string(),
  item_id: be.string(),
  audio_end_ms: be.number(),
  content_index: be.number()
});
var conversationItemCreateEventSchema = be.object({
  type: be.literal("conversation.item.create"),
  item: conversationItemSchema,
  event_id: be.string().optional(),
  previous_item_id: be.string().nullable().optional()
});
var conversationItemDeleteEventSchema = be.object({
  type: be.literal("conversation.item.delete"),
  item_id: be.string(),
  event_id: be.string().optional()
});
var conversationItemRetrieveEventSchema = be.object({
  type: be.literal("conversation.item.retrieve"),
  item_id: be.string(),
  event_id: be.string().optional()
});
var conversationItemTruncateEventSchema = be.object({
  type: be.literal("conversation.item.truncate"),
  item_id: be.string(),
  audio_end_ms: be.number(),
  content_index: be.number(),
  event_id: be.string().optional()
});
var errorEventSchema = be.object({
  type: be.literal("error"),
  event_id: be.string().optional(),
  error: be.any().optional()
});
var inputAudioBufferClearedEventSchema = be.object({
  type: be.literal("input_audio_buffer.cleared"),
  event_id: be.string()
});
var inputAudioBufferAppendEventSchema = be.object({
  type: be.literal("input_audio_buffer.append"),
  audio: be.string(),
  event_id: be.string().optional()
});
var inputAudioBufferClearEventSchema = be.object({
  type: be.literal("input_audio_buffer.clear"),
  event_id: be.string().optional()
});
var inputAudioBufferCommitEventSchema = be.object({
  type: be.literal("input_audio_buffer.commit"),
  event_id: be.string().optional()
});
var inputAudioBufferCommittedEventSchema = be.object({
  type: be.literal("input_audio_buffer.committed"),
  event_id: be.string(),
  item_id: be.string(),
  previous_item_id: be.string().nullable().optional()
});
var inputAudioBufferSpeechStartedEventSchema = be.object({
  type: be.literal("input_audio_buffer.speech_started"),
  event_id: be.string(),
  item_id: be.string(),
  audio_start_ms: be.number()
});
var inputAudioBufferSpeechStoppedEventSchema = be.object({
  type: be.literal("input_audio_buffer.speech_stopped"),
  event_id: be.string(),
  item_id: be.string(),
  audio_end_ms: be.number()
});
var outputAudioBufferStartedEventSchema = be.object({
  type: be.literal("output_audio_buffer.started"),
  event_id: be.string()
}).passthrough();
var outputAudioBufferStoppedEventSchema = be.object({
  type: be.literal("output_audio_buffer.stopped"),
  event_id: be.string()
}).passthrough();
var outputAudioBufferClearedEventSchema = be.object({
  type: be.literal("output_audio_buffer.cleared"),
  event_id: be.string()
});
var rateLimitsUpdatedEventSchema = be.object({
  type: be.literal("rate_limits.updated"),
  event_id: be.string(),
  rate_limits: be.array(
    be.object({
      limit: be.number().optional(),
      name: be.enum(["requests", "tokens"]).optional(),
      remaining: be.number().optional(),
      reset_seconds: be.number().optional()
    })
  )
});
var responseAudioDeltaEventSchema = be.object({
  type: be.literal("response.audio.delta"),
  event_id: be.string(),
  item_id: be.string(),
  content_index: be.number(),
  delta: be.string(),
  output_index: be.number(),
  response_id: be.string()
});
var responseAudioDoneEventSchema = be.object({
  type: be.literal("response.audio.done"),
  event_id: be.string(),
  item_id: be.string(),
  content_index: be.number(),
  output_index: be.number(),
  response_id: be.string()
});
var responseAudioTranscriptDeltaEventSchema = be.object({
  type: be.literal("response.audio_transcript.delta"),
  event_id: be.string(),
  item_id: be.string(),
  content_index: be.number(),
  delta: be.string(),
  output_index: be.number(),
  response_id: be.string()
});
var responseAudioTranscriptDoneEventSchema = be.object({
  type: be.literal("response.audio_transcript.done"),
  event_id: be.string(),
  item_id: be.string(),
  content_index: be.number(),
  transcript: be.string(),
  output_index: be.number(),
  response_id: be.string()
});
var responseContentPartAddedEventSchema = be.object({
  type: be.literal("response.content_part.added"),
  event_id: be.string(),
  item_id: be.string(),
  content_index: be.number(),
  output_index: be.number(),
  response_id: be.string(),
  part: be.object({
    audio: be.string().optional(),
    text: be.string().optional(),
    transcript: be.string().optional(),
    type: be.enum(["text", "audio"]).optional()
  })
});
var responseContentPartDoneEventSchema = be.object({
  type: be.literal("response.content_part.done"),
  event_id: be.string(),
  item_id: be.string(),
  content_index: be.number(),
  output_index: be.number(),
  response_id: be.string(),
  part: be.object({
    audio: be.string().optional(),
    text: be.string().optional(),
    transcript: be.string().optional(),
    type: be.enum(["text", "audio"]).optional()
  })
});
var responseCreatedEventSchema = be.object({
  type: be.literal("response.created"),
  event_id: be.string(),
  response: realtimeResponse
});
var responseDoneEventSchema = be.object({
  type: be.literal("response.done"),
  event_id: be.string(),
  response: realtimeResponse
});
var responseFunctionCallArgumentsDeltaEventSchema = be.object({
  type: be.literal("response.function_call_arguments.delta"),
  event_id: be.string(),
  item_id: be.string(),
  call_id: be.string(),
  delta: be.string(),
  output_index: be.number(),
  response_id: be.string()
});
var responseFunctionCallArgumentsDoneEventSchema = be.object({
  type: be.literal("response.function_call_arguments.done"),
  event_id: be.string(),
  item_id: be.string(),
  call_id: be.string(),
  arguments: be.string(),
  output_index: be.number(),
  response_id: be.string()
});
var responseOutputItemAddedEventSchema = be.object({
  type: be.literal("response.output_item.added"),
  event_id: be.string(),
  item: conversationItemSchema,
  output_index: be.number(),
  response_id: be.string()
});
var responseOutputItemDoneEventSchema = be.object({
  type: be.literal("response.output_item.done"),
  event_id: be.string(),
  item: conversationItemSchema,
  output_index: be.number(),
  response_id: be.string()
});
var responseTextDeltaEventSchema = be.object({
  type: be.literal("response.text.delta"),
  event_id: be.string(),
  item_id: be.string(),
  content_index: be.number(),
  delta: be.string(),
  output_index: be.number(),
  response_id: be.string()
});
var responseTextDoneEventSchema = be.object({
  type: be.literal("response.text.done"),
  event_id: be.string(),
  item_id: be.string(),
  content_index: be.number(),
  text: be.string(),
  output_index: be.number(),
  response_id: be.string()
});
var sessionCreatedEventSchema = be.object({
  type: be.literal("session.created"),
  event_id: be.string(),
  session: be.any()
});
var sessionUpdatedEventSchema = be.object({
  type: be.literal("session.updated"),
  event_id: be.string(),
  session: be.any()
});
var responseCancelEventSchema = be.object({
  type: be.literal("response.cancel"),
  event_id: be.string().optional(),
  response_id: be.string().optional()
});
var responseCreateEventSchema = be.object({
  type: be.literal("response.create"),
  event_id: be.string().optional(),
  response: be.any().optional()
});
var sessionUpdateEventSchema = be.object({
  type: be.literal("session.update"),
  event_id: be.string().optional(),
  session: be.any()
});
var transcriptionSessionUpdateEventSchema = be.object({
  type: be.literal("transcription_session.update"),
  event_id: be.string().optional(),
  session: be.any()
});
var transcriptionSessionUpdatedEventSchema = be.object({
  type: be.literal("transcription_session.updated"),
  event_id: be.string(),
  session: be.any()
});
var genericEventSchema = be.object({
  type: be.string(),
  event_id: be.string().optional().nullable()
}).passthrough();
var realtimeServerEventSchema = be.discriminatedUnion("type", [
  conversationCreatedEventSchema,
  conversationItemCreatedEventSchema,
  conversationItemDeletedEventSchema,
  conversationItemInputAudioTranscriptionCompletedEventSchema,
  conversationItemInputAudioTranscriptionDeltaEventSchema,
  conversationItemInputAudioTranscriptionFailedEventSchema,
  conversationItemRetrievedEventSchema,
  conversationItemTruncatedEventSchema,
  errorEventSchema,
  inputAudioBufferClearedEventSchema,
  inputAudioBufferCommittedEventSchema,
  inputAudioBufferSpeechStartedEventSchema,
  inputAudioBufferSpeechStoppedEventSchema,
  outputAudioBufferStartedEventSchema,
  outputAudioBufferStoppedEventSchema,
  outputAudioBufferClearedEventSchema,
  rateLimitsUpdatedEventSchema,
  responseAudioDeltaEventSchema,
  responseAudioDoneEventSchema,
  responseAudioTranscriptDeltaEventSchema,
  responseAudioTranscriptDoneEventSchema,
  responseContentPartAddedEventSchema,
  responseContentPartDoneEventSchema,
  responseCreatedEventSchema,
  responseDoneEventSchema,
  responseFunctionCallArgumentsDeltaEventSchema,
  responseFunctionCallArgumentsDoneEventSchema,
  responseOutputItemAddedEventSchema,
  responseOutputItemDoneEventSchema,
  responseTextDeltaEventSchema,
  responseTextDoneEventSchema,
  sessionCreatedEventSchema,
  sessionUpdatedEventSchema,
  transcriptionSessionUpdatedEventSchema
]);
var realtimeClientEventSchema = be.discriminatedUnion("type", [
  conversationItemCreateEventSchema,
  conversationItemDeleteEventSchema,
  conversationItemRetrieveEventSchema,
  conversationItemTruncateEventSchema,
  inputAudioBufferAppendEventSchema,
  inputAudioBufferClearEventSchema,
  inputAudioBufferCommitEventSchema,
  responseCancelEventSchema,
  responseCreateEventSchema,
  sessionUpdateEventSchema,
  transcriptionSessionUpdateEventSchema
]);

// https://esm.sh/bufferutil@4.0.9?target=denonext
var bufferutil_4_0_exports = {};
__export(bufferutil_4_0_exports, {
  default: () => B7
});

// https://esm.sh/node-gyp-build@4.8.4?target=denonext
var node_gyp_build_4_8_exports = {};
__export(node_gyp_build_4_8_exports, {
  compareTags: () => fe6,
  compareTuples: () => _e4,
  default: () => de7,
  matchTags: () => pe6,
  matchTuple: () => me5,
  parseTags: () => le6,
  parseTuple: () => ve4,
  resolve: () => ae6
});

// https://esm.sh/node-gyp-build@4.8.4/denonext/node-gyp-build.mjs
import __Process$5 from "node:process";
import * as __0$2 from "node:fs";
import * as __1$2 from "node:path";
import * as __2$ from "node:os";
var require3 = (n17) => {
  const e7 = (m26) => typeof m26.default < "u" ? m26.default : m26, c18 = (m26) => Object.assign({ __esModule: true }, m26);
  switch (n17) {
    case "node:fs":
      return e7(__0$2);
    case "node:path":
      return e7(__1$2);
    case "node:os":
      return e7(__2$);
    default:
      console.error('module "' + n17 + '" not found');
      return null;
  }
};
var z7 = Object.create;
var q11 = Object.defineProperty;
var G8 = Object.getOwnPropertyDescriptor;
var H10 = Object.getOwnPropertyNames;
var J10 = Object.getPrototypeOf;
var K9 = Object.prototype.hasOwnProperty;
var c15 = ((e7) => typeof require3 < "u" ? require3 : typeof Proxy < "u" ? new Proxy(e7, { get: (r39, n17) => (typeof require3 < "u" ? require3 : r39)[n17] }) : e7)(function(e7) {
  if (typeof require3 < "u") return require3.apply(this, arguments);
  throw Error('Dynamic require of "' + e7 + '" is not supported');
});
var j9 = (e7, r39) => () => (r39 || e7((r39 = { exports: {} }).exports, r39), r39.exports);
var Q7 = (e7, r39, n17, i21) => {
  if (r39 && typeof r39 == "object" || typeof r39 == "function") for (let t9 of H10(r39)) !K9.call(e7, t9) && t9 !== n17 && q11(e7, t9, { get: () => r39[t9], enumerable: !(i21 = G8(r39, t9)) || i21.enumerable });
  return e7;
};
var W11 = (e7, r39, n17) => (n17 = e7 != null ? z7(J10(e7)) : {}, Q7(r39 || !e7 || !e7.__esModule ? q11(n17, "default", { value: e7, enumerable: true }) : n17, e7));
var F8 = j9((te8, C10) => {
  var E12 = c15("node:fs"), u18 = c15("node:path"), B11 = c15("node:os"), N9 = typeof __webpack_require__ == "function" ? __non_webpack_require__ : c15, X9 = __Process$5.config && __Process$5.config.variables || {}, Z11 = !!__Process$5.env.PREBUILDS_ONLY, R11 = __Process$5.versions.modules, p19 = ne6() ? "electron" : re7() ? "node-webkit" : "node", f14 = __Process$5.env.npm_config_arch || B11.arch(), v9 = __Process$5.env.npm_config_platform || B11.platform(), L9 = __Process$5.env.LIBC || (ie6(v9) ? "musl" : "glibc"), m26 = __Process$5.env.ARM_VERSION || (f14 === "arm64" ? "8" : X9.arm_version) || "", S13 = (__Process$5.versions.uv || "").split(".")[0];
  C10.exports = o18;
  function o18(e7) {
    return N9(o18.resolve(e7));
  }
  o18.resolve = o18.path = function(e7) {
    e7 = u18.resolve(e7 || ".");
    try {
      var r39 = N9(u18.join(e7, "package.json")).name.toUpperCase().replace(/-/g, "_");
      __Process$5.env[r39 + "_PREBUILD"] && (e7 = __Process$5.env[r39 + "_PREBUILD"]);
    } catch {
    }
    if (!Z11) {
      var n17 = k14(u18.join(e7, "build/Release"), x16);
      if (n17) return n17;
      var i21 = k14(u18.join(e7, "build/Debug"), x16);
      if (i21) return i21;
    }
    var t9 = h22(e7);
    if (t9) return t9;
    var s9 = h22(u18.dirname(__Process$5.execPath));
    if (s9) return s9;
    var V12 = ["platform=" + v9, "arch=" + f14, "runtime=" + p19, "abi=" + R11, "uv=" + S13, m26 ? "armv=" + m26 : "", "libc=" + L9, "node=" + __Process$5.versions.node, __Process$5.versions.electron ? "electron=" + __Process$5.versions.electron : "", typeof __webpack_require__ == "function" ? "webpack=true" : ""].filter(Boolean).join(" ");
    throw new Error("No native build was found for " + V12 + `
    loaded from: ` + e7 + `
`);
    function h22(l16) {
      var Y9 = _14(u18.join(l16, "prebuilds")).map(D12), w19 = Y9.filter(I11(v9, f14)).sort(O10)[0];
      if (w19) {
        var y15 = u18.join(l16, "prebuilds", w19.name), $13 = _14(y15).map(U11), g16 = $13.filter(A13(p19, R11)), T9 = g16.sort(P14(p19))[0];
        if (T9) return u18.join(y15, T9.file);
      }
    }
  };
  function _14(e7) {
    try {
      return E12.readdirSync(e7);
    } catch {
      return [];
    }
  }
  function k14(e7, r39) {
    var n17 = _14(e7).filter(r39);
    return n17[0] && u18.join(e7, n17[0]);
  }
  function x16(e7) {
    return /\.node$/.test(e7);
  }
  function D12(e7) {
    var r39 = e7.split("-");
    if (r39.length === 2) {
      var n17 = r39[0], i21 = r39[1].split("+");
      if (n17 && i21.length && i21.every(Boolean)) return { name: e7, platform: n17, architectures: i21 };
    }
  }
  function I11(e7, r39) {
    return function(n17) {
      return n17 == null || n17.platform !== e7 ? false : n17.architectures.includes(r39);
    };
  }
  function O10(e7, r39) {
    return e7.architectures.length - r39.architectures.length;
  }
  function U11(e7) {
    var r39 = e7.split("."), n17 = r39.pop(), i21 = { file: e7, specificity: 0 };
    if (n17 === "node") {
      for (var t9 = 0; t9 < r39.length; t9++) {
        var s9 = r39[t9];
        if (s9 === "node" || s9 === "electron" || s9 === "node-webkit") i21.runtime = s9;
        else if (s9 === "napi") i21.napi = true;
        else if (s9.slice(0, 3) === "abi") i21.abi = s9.slice(3);
        else if (s9.slice(0, 2) === "uv") i21.uv = s9.slice(2);
        else if (s9.slice(0, 4) === "armv") i21.armv = s9.slice(4);
        else if (s9 === "glibc" || s9 === "musl") i21.libc = s9;
        else continue;
        i21.specificity++;
      }
      return i21;
    }
  }
  function A13(e7, r39) {
    return function(n17) {
      return !(n17 == null || n17.runtime && n17.runtime !== e7 && !ee6(n17) || n17.abi && n17.abi !== r39 && !n17.napi || n17.uv && n17.uv !== S13 || n17.armv && n17.armv !== m26 || n17.libc && n17.libc !== L9);
    };
  }
  function ee6(e7) {
    return e7.runtime === "node" && e7.napi;
  }
  function P14(e7) {
    return function(r39, n17) {
      return r39.runtime !== n17.runtime ? r39.runtime === e7 ? -1 : 1 : r39.abi !== n17.abi ? r39.abi ? -1 : 1 : r39.specificity !== n17.specificity ? r39.specificity > n17.specificity ? -1 : 1 : 0;
    };
  }
  function re7() {
    return !!(__Process$5.versions && __Process$5.versions.nw);
  }
  function ne6() {
    return __Process$5.versions && __Process$5.versions.electron || __Process$5.env.ELECTRON_RUN_AS_NODE ? true : typeof globalThis < "u" && globalThis.process && globalThis.process.type === "renderer";
  }
  function ie6(e7) {
    return e7 === "linux" && E12.existsSync("/etc/alpine-release");
  }
  o18.parseTags = U11;
  o18.matchTags = A13;
  o18.compareTags = P14;
  o18.parseTuple = D12;
  o18.matchTuple = I11;
  o18.compareTuples = O10;
});
var M10 = j9((ue6, b15) => {
  var d19 = typeof __webpack_require__ == "function" ? __non_webpack_require__ : c15;
  typeof d19.addon == "function" ? b15.exports = d19.addon.bind(d19) : b15.exports = F8();
});
var a7 = W11(M10());
var { resolve: ae6, parseTags: le6, matchTags: pe6, compareTags: fe6, parseTuple: ve4, matchTuple: me5, compareTuples: _e4 } = a7;
var de7 = a7.default ?? a7;

// https://esm.sh/bufferutil@4.0.9/denonext/bufferutil.mjs
var require4 = (n17) => {
  const e7 = (m26) => typeof m26.default < "u" ? m26.default : m26, c18 = (m26) => Object.assign({ __esModule: true }, m26);
  switch (n17) {
    case "node-gyp-build":
      return e7(node_gyp_build_4_8_exports);
    default:
      console.error('module "' + n17 + '" not found');
      return null;
  }
};
var d14 = Object.create;
var n15 = Object.defineProperty;
var f10 = Object.getOwnPropertyDescriptor;
var h16 = Object.getOwnPropertyNames;
var g11 = Object.getPrototypeOf;
var j10 = Object.prototype.hasOwnProperty;
var k7 = ((t9) => typeof require4 < "u" ? require4 : typeof Proxy < "u" ? new Proxy(t9, { get: (r39, e7) => (typeof require4 < "u" ? require4 : r39)[e7] }) : t9)(function(t9) {
  if (typeof require4 < "u") return require4.apply(this, arguments);
  throw Error('Dynamic require of "' + t9 + '" is not supported');
});
var u14 = (t9, r39) => () => (r39 || t9((r39 = { exports: {} }).exports, r39), r39.exports);
var q12 = (t9, r39, e7, s9) => {
  if (r39 && typeof r39 == "object" || typeof r39 == "function") for (let o18 of h16(r39)) !j10.call(t9, o18) && o18 !== e7 && n15(t9, o18, { get: () => r39[o18], enumerable: !(s9 = f10(r39, o18)) || s9.enumerable });
  return t9;
};
var v6 = (t9, r39, e7) => (e7 = t9 != null ? d14(g11(t9)) : {}, q12(r39 || !t9 || !t9.__esModule ? n15(e7, "default", { value: t9, enumerable: true }) : e7, t9));
var l11 = u14((z11, p19) => {
  "use strict";
  var _14 = (t9, r39, e7, s9, o18) => {
    for (var a11 = 0; a11 < o18; a11++) e7[s9 + a11] = t9[a11] ^ r39[a11 & 3];
  }, y15 = (t9, r39) => {
    let e7 = t9.length;
    for (var s9 = 0; s9 < e7; s9++) t9[s9] ^= r39[s9 & 3];
  };
  p19.exports = { mask: _14, unmask: y15 };
});
var x11 = u14((A13, c18) => {
  "use strict";
  try {
    c18.exports = k7("node-gyp-build")("/bufferutil@4.0.9/denonext");
  } catch {
    c18.exports = l11();
  }
});
var m19 = v6(x11());
var B7 = m19.default ?? m19;

// https://esm.sh/utf-8-validate@6.0.5?target=denonext
var utf_8_validate_6_0_exports = {};
__export(utf_8_validate_6_0_exports, {
  default: () => U8
});

// https://esm.sh/utf-8-validate@6.0.5/denonext/utf-8-validate.mjs
var require5 = (n17) => {
  const e7 = (m26) => typeof m26.default < "u" ? m26.default : m26, c18 = (m26) => Object.assign({ __esModule: true }, m26);
  switch (n17) {
    case "node-gyp-build":
      return e7(node_gyp_build_4_8_exports);
    default:
      console.error('module "' + n17 + '" not found');
      return null;
  }
};
var m20 = Object.create;
var l12 = Object.defineProperty;
var p16 = Object.getOwnPropertyDescriptor;
var f11 = Object.getOwnPropertyNames;
var h17 = Object.getPrototypeOf;
var j11 = Object.prototype.hasOwnProperty;
var q13 = ((e7) => typeof require5 < "u" ? require5 : typeof Proxy < "u" ? new Proxy(e7, { get: (r39, x16) => (typeof require5 < "u" ? require5 : r39)[x16] }) : e7)(function(e7) {
  if (typeof require5 < "u") return require5.apply(this, arguments);
  throw Error('Dynamic require of "' + e7 + '" is not supported');
});
var a8 = (e7, r39) => () => (r39 || e7((r39 = { exports: {} }).exports, r39), r39.exports);
var _10 = (e7, r39, x16, c18) => {
  if (r39 && typeof r39 == "object" || typeof r39 == "function") for (let t9 of f11(r39)) !j11.call(e7, t9) && t9 !== x16 && l12(e7, t9, { get: () => r39[t9], enumerable: !(c18 = p16(r39, t9)) || c18.enumerable });
  return e7;
};
var g12 = (e7, r39, x16) => (x16 = e7 != null ? m20(h17(e7)) : {}, _10(r39 || !e7 || !e7.__esModule ? l12(x16, "default", { value: e7, enumerable: true }) : x16, e7));
var o14 = a8((F13, n17) => {
  "use strict";
  function w19(e7) {
    let r39 = e7.length, x16 = 0;
    for (; x16 < r39; ) if (!(e7[x16] & 128)) x16++;
    else if ((e7[x16] & 224) === 192) {
      if (x16 + 1 === r39 || (e7[x16 + 1] & 192) !== 128 || (e7[x16] & 254) === 192) return false;
      x16 += 2;
    } else if ((e7[x16] & 240) === 224) {
      if (x16 + 2 >= r39 || (e7[x16 + 1] & 192) !== 128 || (e7[x16 + 2] & 192) !== 128 || e7[x16] === 224 && (e7[x16 + 1] & 224) === 128 || e7[x16] === 237 && (e7[x16 + 1] & 224) === 160) return false;
      x16 += 3;
    } else if ((e7[x16] & 248) === 240) {
      if (x16 + 3 >= r39 || (e7[x16 + 1] & 192) !== 128 || (e7[x16 + 2] & 192) !== 128 || (e7[x16 + 3] & 192) !== 128 || e7[x16] === 240 && (e7[x16 + 1] & 240) === 128 || e7[x16] === 244 && e7[x16 + 1] > 143 || e7[x16] > 244) return false;
      x16 += 4;
    } else return false;
    return true;
  }
  n17.exports = w19;
});
var d15 = a8((T9, s9) => {
  "use strict";
  try {
    s9.exports = q13("node-gyp-build")("/utf-8-validate@6.0.5/denonext");
  } catch {
    s9.exports = o14();
  }
});
var i18 = g12(d15());
var U8 = i18.default ?? i18;

// https://esm.sh/ws@8.18.3/denonext/ws.mjs
import __Process$6 from "node:process";
import { Buffer as __Buffer$3 } from "node:buffer";
import * as __0$3 from "node:stream";
import * as __1$3 from "node:crypto";
import * as __2$2 from "node:events";
import * as __3$ from "node:http";
import * as __4$ from "node:https";
import * as __5$ from "node:net";
import * as __6$ from "node:tls";
import * as __7$ from "node:url";
import * as __8$ from "node:buffer";
import * as __b$ from "node:zlib";
var __setImmediate$ = (cb, ...args) => ({ $t: setTimeout(cb, 0, ...args), [Symbol.dispose]() {
  clearTimeout(this.t);
} });
var require6 = (n17) => {
  const e7 = (m26) => typeof m26.default < "u" ? m26.default : m26, c18 = (m26) => Object.assign({ __esModule: true }, m26);
  switch (n17) {
    case "node:stream":
      return e7(__0$3);
    case "node:crypto":
      return e7(__1$3);
    case "node:events":
      return e7(__2$2);
    case "node:http":
      return e7(__3$);
    case "node:https":
      return e7(__4$);
    case "node:net":
      return e7(__5$);
    case "node:tls":
      return e7(__6$);
    case "node:url":
      return e7(__7$);
    case "node:buffer":
      return e7(__8$);
    case "bufferutil":
      return e7(bufferutil_4_0_exports);
    case "utf-8-validate":
      return e7(utf_8_validate_6_0_exports);
    case "node:zlib":
      return e7(__b$);
    default:
      console.error('module "' + n17 + '" not found');
      return null;
  }
};
var Kt = Object.create;
var Ge4 = Object.defineProperty;
var Xt = Object.getOwnPropertyDescriptor;
var Zt3 = Object.getOwnPropertyNames;
var Qt = Object.getPrototypeOf;
var Jt = Object.prototype.hasOwnProperty;
var m21 = ((t9) => typeof require6 < "u" ? require6 : typeof Proxy < "u" ? new Proxy(t9, { get: (e7, s9) => (typeof require6 < "u" ? require6 : e7)[s9] }) : t9)(function(t9) {
  if (typeof require6 < "u") return require6.apply(this, arguments);
  throw Error('Dynamic require of "' + t9 + '" is not supported');
});
var x12 = (t9, e7) => () => (e7 || t9((e7 = { exports: {} }).exports, e7), e7.exports);
var es = (t9, e7, s9, r39) => {
  if (e7 && typeof e7 == "object" || typeof e7 == "function") for (let i21 of Zt3(e7)) !Jt.call(t9, i21) && i21 !== s9 && Ge4(t9, i21, { get: () => e7[i21], enumerable: !(r39 = Xt(e7, i21)) || r39.enumerable });
  return t9;
};
var Y7 = (t9, e7, s9) => (s9 = t9 != null ? Kt(Qt(t9)) : {}, es(e7 || !t9 || !t9.__esModule ? Ge4(s9, "default", { value: t9, enumerable: true }) : s9, t9));
var k8 = x12((wr, Ve4) => {
  "use strict";
  var $e4 = ["nodebuffer", "arraybuffer", "fragments"], je4 = typeof Blob < "u";
  je4 && $e4.push("blob");
  Ve4.exports = { BINARY_TYPES: $e4, EMPTY_BUFFER: __Buffer$3.alloc(0), GUID: "258EAFA5-E914-47DA-95CA-C5AB0DC85B11", hasBlob: je4, kForOnEventAttribute: Symbol("kIsForOnEventAttribute"), kListener: Symbol("kListener"), kStatusCode: Symbol("status-code"), kWebSocket: Symbol("websocket"), NOOP: () => {
  } };
});
var K10 = x12((Or, re7) => {
  "use strict";
  var { EMPTY_BUFFER: ts } = k8(), ye7 = __Buffer$3[Symbol.species];
  function ss(t9, e7) {
    if (t9.length === 0) return ts;
    if (t9.length === 1) return t9[0];
    let s9 = __Buffer$3.allocUnsafe(e7), r39 = 0;
    for (let i21 = 0; i21 < t9.length; i21++) {
      let n17 = t9[i21];
      s9.set(n17, r39), r39 += n17.length;
    }
    return r39 < e7 ? new ye7(s9.buffer, s9.byteOffset, r39) : s9;
  }
  function ze4(t9, e7, s9, r39, i21) {
    for (let n17 = 0; n17 < i21; n17++) s9[r39 + n17] = t9[n17] ^ e7[n17 & 3];
  }
  function He4(t9, e7) {
    for (let s9 = 0; s9 < t9.length; s9++) t9[s9] ^= e7[s9 & 3];
  }
  function rs(t9) {
    return t9.length === t9.buffer.byteLength ? t9.buffer : t9.buffer.slice(t9.byteOffset, t9.byteOffset + t9.length);
  }
  function Se6(t9) {
    if (Se6.readOnly = true, __Buffer$3.isBuffer(t9)) return t9;
    let e7;
    return t9 instanceof ArrayBuffer ? e7 = new ye7(t9) : ArrayBuffer.isView(t9) ? e7 = new ye7(t9.buffer, t9.byteOffset, t9.byteLength) : (e7 = __Buffer$3.from(t9), Se6.readOnly = false), e7;
  }
  re7.exports = { concat: ss, mask: ze4, toArrayBuffer: rs, toBuffer: Se6, unmask: He4 };
  if (!__Process$6.env.WS_NO_BUFFER_UTIL) try {
    let t9 = m21("bufferutil");
    re7.exports.mask = function(e7, s9, r39, i21, n17) {
      n17 < 48 ? ze4(e7, s9, r39, i21, n17) : t9.mask(e7, s9, r39, i21, n17);
    }, re7.exports.unmask = function(e7, s9) {
      e7.length < 32 ? He4(e7, s9) : t9.unmask(e7, s9);
    };
  } catch {
  }
});
var Xe4 = x12((kr2, Ke4) => {
  "use strict";
  var Ye4 = Symbol("kDone"), xe6 = Symbol("kRun"), Ee5 = class {
    constructor(e7) {
      this[Ye4] = () => {
        this.pending--, this[xe6]();
      }, this.concurrency = e7 || 1 / 0, this.jobs = [], this.pending = 0;
    }
    add(e7) {
      this.jobs.push(e7), this[xe6]();
    }
    [xe6]() {
      if (this.pending !== this.concurrency && this.jobs.length) {
        let e7 = this.jobs.shift();
        this.pending++, e7(this[Ye4]);
      }
    }
  };
  Ke4.exports = Ee5;
});
var Z7 = x12((Tr, et4) => {
  "use strict";
  var X9 = m21("node:zlib"), Ze4 = K10(), is = Xe4(), { kStatusCode: Qe4 } = k8(), ns = __Buffer$3[Symbol.species], os = __Buffer$3.from([0, 0, 255, 255]), ne6 = Symbol("permessage-deflate"), T9 = Symbol("total-length"), W13 = Symbol("callback"), N9 = Symbol("buffers"), F13 = Symbol("error"), ie6, ve5 = class {
    constructor(e7, s9, r39) {
      if (this._maxPayload = r39 | 0, this._options = e7 || {}, this._threshold = this._options.threshold !== void 0 ? this._options.threshold : 1024, this._isServer = !!s9, this._deflate = null, this._inflate = null, this.params = null, !ie6) {
        let i21 = this._options.concurrencyLimit !== void 0 ? this._options.concurrencyLimit : 10;
        ie6 = new is(i21);
      }
    }
    static get extensionName() {
      return "permessage-deflate";
    }
    offer() {
      let e7 = {};
      return this._options.serverNoContextTakeover && (e7.server_no_context_takeover = true), this._options.clientNoContextTakeover && (e7.client_no_context_takeover = true), this._options.serverMaxWindowBits && (e7.server_max_window_bits = this._options.serverMaxWindowBits), this._options.clientMaxWindowBits ? e7.client_max_window_bits = this._options.clientMaxWindowBits : this._options.clientMaxWindowBits == null && (e7.client_max_window_bits = true), e7;
    }
    accept(e7) {
      return e7 = this.normalizeParams(e7), this.params = this._isServer ? this.acceptAsServer(e7) : this.acceptAsClient(e7), this.params;
    }
    cleanup() {
      if (this._inflate && (this._inflate.close(), this._inflate = null), this._deflate) {
        let e7 = this._deflate[W13];
        this._deflate.close(), this._deflate = null, e7 && e7(new Error("The deflate stream was closed while data was being processed"));
      }
    }
    acceptAsServer(e7) {
      let s9 = this._options, r39 = e7.find((i21) => !(s9.serverNoContextTakeover === false && i21.server_no_context_takeover || i21.server_max_window_bits && (s9.serverMaxWindowBits === false || typeof s9.serverMaxWindowBits == "number" && s9.serverMaxWindowBits > i21.server_max_window_bits) || typeof s9.clientMaxWindowBits == "number" && !i21.client_max_window_bits));
      if (!r39) throw new Error("None of the extension offers can be accepted");
      return s9.serverNoContextTakeover && (r39.server_no_context_takeover = true), s9.clientNoContextTakeover && (r39.client_no_context_takeover = true), typeof s9.serverMaxWindowBits == "number" && (r39.server_max_window_bits = s9.serverMaxWindowBits), typeof s9.clientMaxWindowBits == "number" ? r39.client_max_window_bits = s9.clientMaxWindowBits : (r39.client_max_window_bits === true || s9.clientMaxWindowBits === false) && delete r39.client_max_window_bits, r39;
    }
    acceptAsClient(e7) {
      let s9 = e7[0];
      if (this._options.clientNoContextTakeover === false && s9.client_no_context_takeover) throw new Error('Unexpected parameter "client_no_context_takeover"');
      if (!s9.client_max_window_bits) typeof this._options.clientMaxWindowBits == "number" && (s9.client_max_window_bits = this._options.clientMaxWindowBits);
      else if (this._options.clientMaxWindowBits === false || typeof this._options.clientMaxWindowBits == "number" && s9.client_max_window_bits > this._options.clientMaxWindowBits) throw new Error('Unexpected or invalid parameter "client_max_window_bits"');
      return s9;
    }
    normalizeParams(e7) {
      return e7.forEach((s9) => {
        Object.keys(s9).forEach((r39) => {
          let i21 = s9[r39];
          if (i21.length > 1) throw new Error(`Parameter "${r39}" must have only a single value`);
          if (i21 = i21[0], r39 === "client_max_window_bits") {
            if (i21 !== true) {
              let n17 = +i21;
              if (!Number.isInteger(n17) || n17 < 8 || n17 > 15) throw new TypeError(`Invalid value for parameter "${r39}": ${i21}`);
              i21 = n17;
            } else if (!this._isServer) throw new TypeError(`Invalid value for parameter "${r39}": ${i21}`);
          } else if (r39 === "server_max_window_bits") {
            let n17 = +i21;
            if (!Number.isInteger(n17) || n17 < 8 || n17 > 15) throw new TypeError(`Invalid value for parameter "${r39}": ${i21}`);
            i21 = n17;
          } else if (r39 === "client_no_context_takeover" || r39 === "server_no_context_takeover") {
            if (i21 !== true) throw new TypeError(`Invalid value for parameter "${r39}": ${i21}`);
          } else throw new Error(`Unknown parameter "${r39}"`);
          s9[r39] = i21;
        });
      }), e7;
    }
    decompress(e7, s9, r39) {
      ie6.add((i21) => {
        this._decompress(e7, s9, (n17, o18) => {
          i21(), r39(n17, o18);
        });
      });
    }
    compress(e7, s9, r39) {
      ie6.add((i21) => {
        this._compress(e7, s9, (n17, o18) => {
          i21(), r39(n17, o18);
        });
      });
    }
    _decompress(e7, s9, r39) {
      let i21 = this._isServer ? "client" : "server";
      if (!this._inflate) {
        let n17 = `${i21}_max_window_bits`, o18 = typeof this.params[n17] != "number" ? X9.Z_DEFAULT_WINDOWBITS : this.params[n17];
        this._inflate = X9.createInflateRaw({ ...this._options.zlibInflateOptions, windowBits: o18 }), this._inflate[ne6] = this, this._inflate[T9] = 0, this._inflate[N9] = [], this._inflate.on("error", fs), this._inflate.on("data", Je4);
      }
      this._inflate[W13] = r39, this._inflate.write(e7), s9 && this._inflate.write(os), this._inflate.flush(() => {
        let n17 = this._inflate[F13];
        if (n17) {
          this._inflate.close(), this._inflate = null, r39(n17);
          return;
        }
        let o18 = Ze4.concat(this._inflate[N9], this._inflate[T9]);
        this._inflate._readableState.endEmitted ? (this._inflate.close(), this._inflate = null) : (this._inflate[T9] = 0, this._inflate[N9] = [], s9 && this.params[`${i21}_no_context_takeover`] && this._inflate.reset()), r39(null, o18);
      });
    }
    _compress(e7, s9, r39) {
      let i21 = this._isServer ? "server" : "client";
      if (!this._deflate) {
        let n17 = `${i21}_max_window_bits`, o18 = typeof this.params[n17] != "number" ? X9.Z_DEFAULT_WINDOWBITS : this.params[n17];
        this._deflate = X9.createDeflateRaw({ ...this._options.zlibDeflateOptions, windowBits: o18 }), this._deflate[T9] = 0, this._deflate[N9] = [], this._deflate.on("data", as);
      }
      this._deflate[W13] = r39, this._deflate.write(e7), this._deflate.flush(X9.Z_SYNC_FLUSH, () => {
        if (!this._deflate) return;
        let n17 = Ze4.concat(this._deflate[N9], this._deflate[T9]);
        s9 && (n17 = new ns(n17.buffer, n17.byteOffset, n17.length - 4)), this._deflate[W13] = null, this._deflate[T9] = 0, this._deflate[N9] = [], s9 && this.params[`${i21}_no_context_takeover`] && this._deflate.reset(), r39(null, n17);
      });
    }
  };
  et4.exports = ve5;
  function as(t9) {
    this[N9].push(t9), this[T9] += t9.length;
  }
  function Je4(t9) {
    if (this[T9] += t9.length, this[ne6]._maxPayload < 1 || this[T9] <= this[ne6]._maxPayload) {
      this[N9].push(t9);
      return;
    }
    this[F13] = new RangeError("Max payload size exceeded"), this[F13].code = "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH", this[F13][Qe4] = 1009, this.removeListener("data", Je4), this.reset();
  }
  function fs(t9) {
    if (this[ne6]._inflate = null, this[F13]) {
      this[W13](this[F13]);
      return;
    }
    t9[Qe4] = 1007, this[W13](t9);
  }
});
var q14 = x12((Cr, oe6) => {
  "use strict";
  var { isUtf8: tt5 } = m21("node:buffer"), { hasBlob: ls } = k8(), hs = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0];
  function cs(t9) {
    return t9 >= 1e3 && t9 <= 1014 && t9 !== 1004 && t9 !== 1005 && t9 !== 1006 || t9 >= 3e3 && t9 <= 4999;
  }
  function be7(t9) {
    let e7 = t9.length, s9 = 0;
    for (; s9 < e7; ) if ((t9[s9] & 128) === 0) s9++;
    else if ((t9[s9] & 224) === 192) {
      if (s9 + 1 === e7 || (t9[s9 + 1] & 192) !== 128 || (t9[s9] & 254) === 192) return false;
      s9 += 2;
    } else if ((t9[s9] & 240) === 224) {
      if (s9 + 2 >= e7 || (t9[s9 + 1] & 192) !== 128 || (t9[s9 + 2] & 192) !== 128 || t9[s9] === 224 && (t9[s9 + 1] & 224) === 128 || t9[s9] === 237 && (t9[s9 + 1] & 224) === 160) return false;
      s9 += 3;
    } else if ((t9[s9] & 248) === 240) {
      if (s9 + 3 >= e7 || (t9[s9 + 1] & 192) !== 128 || (t9[s9 + 2] & 192) !== 128 || (t9[s9 + 3] & 192) !== 128 || t9[s9] === 240 && (t9[s9 + 1] & 240) === 128 || t9[s9] === 244 && t9[s9 + 1] > 143 || t9[s9] > 244) return false;
      s9 += 4;
    } else return false;
    return true;
  }
  function us(t9) {
    return ls && typeof t9 == "object" && typeof t9.arrayBuffer == "function" && typeof t9.type == "string" && typeof t9.stream == "function" && (t9[Symbol.toStringTag] === "Blob" || t9[Symbol.toStringTag] === "File");
  }
  oe6.exports = { isBlob: us, isValidStatusCode: cs, isValidUTF8: be7, tokenChars: hs };
  if (tt5) oe6.exports.isValidUTF8 = function(t9) {
    return t9.length < 24 ? be7(t9) : tt5(t9);
  };
  else if (!__Process$6.env.WS_NO_UTF_8_VALIDATE) try {
    let t9 = m21("utf-8-validate");
    oe6.exports.isValidUTF8 = function(e7) {
      return e7.length < 32 ? be7(e7) : t9(e7);
    };
  } catch {
  }
});
var Ce4 = x12((Lr, ft3) => {
  "use strict";
  var { Writable: ds } = m21("node:stream"), st3 = Z7(), { BINARY_TYPES: _s, EMPTY_BUFFER: rt4, kStatusCode: ps, kWebSocket: ms } = k8(), { concat: we3, toArrayBuffer: gs, unmask: ys } = K10(), { isValidStatusCode: Ss, isValidUTF8: it4 } = q14(), ae8 = __Buffer$3[Symbol.species], v9 = 0, nt3 = 1, ot4 = 2, at4 = 3, Oe4 = 4, ke4 = 5, fe7 = 6, Te4 = class extends ds {
    constructor(e7 = {}) {
      super(), this._allowSynchronousEvents = e7.allowSynchronousEvents !== void 0 ? e7.allowSynchronousEvents : true, this._binaryType = e7.binaryType || _s[0], this._extensions = e7.extensions || {}, this._isServer = !!e7.isServer, this._maxPayload = e7.maxPayload | 0, this._skipUTF8Validation = !!e7.skipUTF8Validation, this[ms] = void 0, this._bufferedBytes = 0, this._buffers = [], this._compressed = false, this._payloadLength = 0, this._mask = void 0, this._fragmented = 0, this._masked = false, this._fin = false, this._opcode = 0, this._totalPayloadLength = 0, this._messageLength = 0, this._fragments = [], this._errored = false, this._loop = false, this._state = v9;
    }
    _write(e7, s9, r39) {
      if (this._opcode === 8 && this._state == v9) return r39();
      this._bufferedBytes += e7.length, this._buffers.push(e7), this.startLoop(r39);
    }
    consume(e7) {
      if (this._bufferedBytes -= e7, e7 === this._buffers[0].length) return this._buffers.shift();
      if (e7 < this._buffers[0].length) {
        let r39 = this._buffers[0];
        return this._buffers[0] = new ae8(r39.buffer, r39.byteOffset + e7, r39.length - e7), new ae8(r39.buffer, r39.byteOffset, e7);
      }
      let s9 = __Buffer$3.allocUnsafe(e7);
      do {
        let r39 = this._buffers[0], i21 = s9.length - e7;
        e7 >= r39.length ? s9.set(this._buffers.shift(), i21) : (s9.set(new Uint8Array(r39.buffer, r39.byteOffset, e7), i21), this._buffers[0] = new ae8(r39.buffer, r39.byteOffset + e7, r39.length - e7)), e7 -= r39.length;
      } while (e7 > 0);
      return s9;
    }
    startLoop(e7) {
      this._loop = true;
      do
        switch (this._state) {
          case v9:
            this.getInfo(e7);
            break;
          case nt3:
            this.getPayloadLength16(e7);
            break;
          case ot4:
            this.getPayloadLength64(e7);
            break;
          case at4:
            this.getMask();
            break;
          case Oe4:
            this.getData(e7);
            break;
          case ke4:
          case fe7:
            this._loop = false;
            return;
        }
      while (this._loop);
      this._errored || e7();
    }
    getInfo(e7) {
      if (this._bufferedBytes < 2) {
        this._loop = false;
        return;
      }
      let s9 = this.consume(2);
      if ((s9[0] & 48) !== 0) {
        let i21 = this.createError(RangeError, "RSV2 and RSV3 must be clear", true, 1002, "WS_ERR_UNEXPECTED_RSV_2_3");
        e7(i21);
        return;
      }
      let r39 = (s9[0] & 64) === 64;
      if (r39 && !this._extensions[st3.extensionName]) {
        let i21 = this.createError(RangeError, "RSV1 must be clear", true, 1002, "WS_ERR_UNEXPECTED_RSV_1");
        e7(i21);
        return;
      }
      if (this._fin = (s9[0] & 128) === 128, this._opcode = s9[0] & 15, this._payloadLength = s9[1] & 127, this._opcode === 0) {
        if (r39) {
          let i21 = this.createError(RangeError, "RSV1 must be clear", true, 1002, "WS_ERR_UNEXPECTED_RSV_1");
          e7(i21);
          return;
        }
        if (!this._fragmented) {
          let i21 = this.createError(RangeError, "invalid opcode 0", true, 1002, "WS_ERR_INVALID_OPCODE");
          e7(i21);
          return;
        }
        this._opcode = this._fragmented;
      } else if (this._opcode === 1 || this._opcode === 2) {
        if (this._fragmented) {
          let i21 = this.createError(RangeError, `invalid opcode ${this._opcode}`, true, 1002, "WS_ERR_INVALID_OPCODE");
          e7(i21);
          return;
        }
        this._compressed = r39;
      } else if (this._opcode > 7 && this._opcode < 11) {
        if (!this._fin) {
          let i21 = this.createError(RangeError, "FIN must be set", true, 1002, "WS_ERR_EXPECTED_FIN");
          e7(i21);
          return;
        }
        if (r39) {
          let i21 = this.createError(RangeError, "RSV1 must be clear", true, 1002, "WS_ERR_UNEXPECTED_RSV_1");
          e7(i21);
          return;
        }
        if (this._payloadLength > 125 || this._opcode === 8 && this._payloadLength === 1) {
          let i21 = this.createError(RangeError, `invalid payload length ${this._payloadLength}`, true, 1002, "WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH");
          e7(i21);
          return;
        }
      } else {
        let i21 = this.createError(RangeError, `invalid opcode ${this._opcode}`, true, 1002, "WS_ERR_INVALID_OPCODE");
        e7(i21);
        return;
      }
      if (!this._fin && !this._fragmented && (this._fragmented = this._opcode), this._masked = (s9[1] & 128) === 128, this._isServer) {
        if (!this._masked) {
          let i21 = this.createError(RangeError, "MASK must be set", true, 1002, "WS_ERR_EXPECTED_MASK");
          e7(i21);
          return;
        }
      } else if (this._masked) {
        let i21 = this.createError(RangeError, "MASK must be clear", true, 1002, "WS_ERR_UNEXPECTED_MASK");
        e7(i21);
        return;
      }
      this._payloadLength === 126 ? this._state = nt3 : this._payloadLength === 127 ? this._state = ot4 : this.haveLength(e7);
    }
    getPayloadLength16(e7) {
      if (this._bufferedBytes < 2) {
        this._loop = false;
        return;
      }
      this._payloadLength = this.consume(2).readUInt16BE(0), this.haveLength(e7);
    }
    getPayloadLength64(e7) {
      if (this._bufferedBytes < 8) {
        this._loop = false;
        return;
      }
      let s9 = this.consume(8), r39 = s9.readUInt32BE(0);
      if (r39 > Math.pow(2, 21) - 1) {
        let i21 = this.createError(RangeError, "Unsupported WebSocket frame: payload length > 2^53 - 1", false, 1009, "WS_ERR_UNSUPPORTED_DATA_PAYLOAD_LENGTH");
        e7(i21);
        return;
      }
      this._payloadLength = r39 * Math.pow(2, 32) + s9.readUInt32BE(4), this.haveLength(e7);
    }
    haveLength(e7) {
      if (this._payloadLength && this._opcode < 8 && (this._totalPayloadLength += this._payloadLength, this._totalPayloadLength > this._maxPayload && this._maxPayload > 0)) {
        let s9 = this.createError(RangeError, "Max payload size exceeded", false, 1009, "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH");
        e7(s9);
        return;
      }
      this._masked ? this._state = at4 : this._state = Oe4;
    }
    getMask() {
      if (this._bufferedBytes < 4) {
        this._loop = false;
        return;
      }
      this._mask = this.consume(4), this._state = Oe4;
    }
    getData(e7) {
      let s9 = rt4;
      if (this._payloadLength) {
        if (this._bufferedBytes < this._payloadLength) {
          this._loop = false;
          return;
        }
        s9 = this.consume(this._payloadLength), this._masked && (this._mask[0] | this._mask[1] | this._mask[2] | this._mask[3]) !== 0 && ys(s9, this._mask);
      }
      if (this._opcode > 7) {
        this.controlMessage(s9, e7);
        return;
      }
      if (this._compressed) {
        this._state = ke4, this.decompress(s9, e7);
        return;
      }
      s9.length && (this._messageLength = this._totalPayloadLength, this._fragments.push(s9)), this.dataMessage(e7);
    }
    decompress(e7, s9) {
      this._extensions[st3.extensionName].decompress(e7, this._fin, (i21, n17) => {
        if (i21) return s9(i21);
        if (n17.length) {
          if (this._messageLength += n17.length, this._messageLength > this._maxPayload && this._maxPayload > 0) {
            let o18 = this.createError(RangeError, "Max payload size exceeded", false, 1009, "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH");
            s9(o18);
            return;
          }
          this._fragments.push(n17);
        }
        this.dataMessage(s9), this._state === v9 && this.startLoop(s9);
      });
    }
    dataMessage(e7) {
      if (!this._fin) {
        this._state = v9;
        return;
      }
      let s9 = this._messageLength, r39 = this._fragments;
      if (this._totalPayloadLength = 0, this._messageLength = 0, this._fragmented = 0, this._fragments = [], this._opcode === 2) {
        let i21;
        this._binaryType === "nodebuffer" ? i21 = we3(r39, s9) : this._binaryType === "arraybuffer" ? i21 = gs(we3(r39, s9)) : this._binaryType === "blob" ? i21 = new Blob(r39) : i21 = r39, this._allowSynchronousEvents ? (this.emit("message", i21, true), this._state = v9) : (this._state = fe7, __setImmediate$(() => {
          this.emit("message", i21, true), this._state = v9, this.startLoop(e7);
        }));
      } else {
        let i21 = we3(r39, s9);
        if (!this._skipUTF8Validation && !it4(i21)) {
          let n17 = this.createError(Error, "invalid UTF-8 sequence", true, 1007, "WS_ERR_INVALID_UTF8");
          e7(n17);
          return;
        }
        this._state === ke4 || this._allowSynchronousEvents ? (this.emit("message", i21, false), this._state = v9) : (this._state = fe7, __setImmediate$(() => {
          this.emit("message", i21, false), this._state = v9, this.startLoop(e7);
        }));
      }
    }
    controlMessage(e7, s9) {
      if (this._opcode === 8) {
        if (e7.length === 0) this._loop = false, this.emit("conclude", 1005, rt4), this.end();
        else {
          let r39 = e7.readUInt16BE(0);
          if (!Ss(r39)) {
            let n17 = this.createError(RangeError, `invalid status code ${r39}`, true, 1002, "WS_ERR_INVALID_CLOSE_CODE");
            s9(n17);
            return;
          }
          let i21 = new ae8(e7.buffer, e7.byteOffset + 2, e7.length - 2);
          if (!this._skipUTF8Validation && !it4(i21)) {
            let n17 = this.createError(Error, "invalid UTF-8 sequence", true, 1007, "WS_ERR_INVALID_UTF8");
            s9(n17);
            return;
          }
          this._loop = false, this.emit("conclude", r39, i21), this.end();
        }
        this._state = v9;
        return;
      }
      this._allowSynchronousEvents ? (this.emit(this._opcode === 9 ? "ping" : "pong", e7), this._state = v9) : (this._state = fe7, __setImmediate$(() => {
        this.emit(this._opcode === 9 ? "ping" : "pong", e7), this._state = v9, this.startLoop(s9);
      }));
    }
    createError(e7, s9, r39, i21, n17) {
      this._loop = false, this._errored = true;
      let o18 = new e7(r39 ? `Invalid WebSocket frame: ${s9}` : s9);
      return Error.captureStackTrace(o18, this.createError), o18.code = n17, o18[ps] = i21, o18;
    }
  };
  ft3.exports = Te4;
});
var Pe5 = x12((Pr, ct6) => {
  "use strict";
  var { Duplex: Nr2 } = m21("node:stream"), { randomFillSync: xs } = m21("node:crypto"), lt5 = Z7(), { EMPTY_BUFFER: Es, kWebSocket: vs, NOOP: bs } = k8(), { isBlob: G13, isValidStatusCode: ws } = q14(), { mask: ht4, toBuffer: B11 } = K10(), b15 = Symbol("kByteLength"), Os = __Buffer$3.alloc(4), le7 = 8 * 1024, R11, $13 = le7, w19 = 0, ks = 1, Ts = 2, Le4 = class t9 {
    constructor(e7, s9, r39) {
      this._extensions = s9 || {}, r39 && (this._generateMask = r39, this._maskBuffer = __Buffer$3.alloc(4)), this._socket = e7, this._firstFragment = true, this._compress = false, this._bufferedBytes = 0, this._queue = [], this._state = w19, this.onerror = bs, this[vs] = void 0;
    }
    static frame(e7, s9) {
      let r39, i21 = false, n17 = 2, o18 = false;
      s9.mask && (r39 = s9.maskBuffer || Os, s9.generateMask ? s9.generateMask(r39) : ($13 === le7 && (R11 === void 0 && (R11 = __Buffer$3.alloc(le7)), xs(R11, 0, le7), $13 = 0), r39[0] = R11[$13++], r39[1] = R11[$13++], r39[2] = R11[$13++], r39[3] = R11[$13++]), o18 = (r39[0] | r39[1] | r39[2] | r39[3]) === 0, n17 = 6);
      let f14;
      typeof e7 == "string" ? (!s9.mask || o18) && s9[b15] !== void 0 ? f14 = s9[b15] : (e7 = __Buffer$3.from(e7), f14 = e7.length) : (f14 = e7.length, i21 = s9.mask && s9.readOnly && !o18);
      let l16 = f14;
      f14 >= 65536 ? (n17 += 8, l16 = 127) : f14 > 125 && (n17 += 2, l16 = 126);
      let a11 = __Buffer$3.allocUnsafe(i21 ? f14 + n17 : n17);
      return a11[0] = s9.fin ? s9.opcode | 128 : s9.opcode, s9.rsv1 && (a11[0] |= 64), a11[1] = l16, l16 === 126 ? a11.writeUInt16BE(f14, 2) : l16 === 127 && (a11[2] = a11[3] = 0, a11.writeUIntBE(f14, 4, 6)), s9.mask ? (a11[1] |= 128, a11[n17 - 4] = r39[0], a11[n17 - 3] = r39[1], a11[n17 - 2] = r39[2], a11[n17 - 1] = r39[3], o18 ? [a11, e7] : i21 ? (ht4(e7, r39, a11, n17, f14), [a11]) : (ht4(e7, r39, e7, 0, f14), [a11, e7])) : [a11, e7];
    }
    close(e7, s9, r39, i21) {
      let n17;
      if (e7 === void 0) n17 = Es;
      else {
        if (typeof e7 != "number" || !ws(e7)) throw new TypeError("First argument must be a valid error code number");
        if (s9 === void 0 || !s9.length) n17 = __Buffer$3.allocUnsafe(2), n17.writeUInt16BE(e7, 0);
        else {
          let f14 = __Buffer$3.byteLength(s9);
          if (f14 > 123) throw new RangeError("The message must not be greater than 123 bytes");
          n17 = __Buffer$3.allocUnsafe(2 + f14), n17.writeUInt16BE(e7, 0), typeof s9 == "string" ? n17.write(s9, 2) : n17.set(s9, 2);
        }
      }
      let o18 = { [b15]: n17.length, fin: true, generateMask: this._generateMask, mask: r39, maskBuffer: this._maskBuffer, opcode: 8, readOnly: false, rsv1: false };
      this._state !== w19 ? this.enqueue([this.dispatch, n17, false, o18, i21]) : this.sendFrame(t9.frame(n17, o18), i21);
    }
    ping(e7, s9, r39) {
      let i21, n17;
      if (typeof e7 == "string" ? (i21 = __Buffer$3.byteLength(e7), n17 = false) : G13(e7) ? (i21 = e7.size, n17 = false) : (e7 = B11(e7), i21 = e7.length, n17 = B11.readOnly), i21 > 125) throw new RangeError("The data size must not be greater than 125 bytes");
      let o18 = { [b15]: i21, fin: true, generateMask: this._generateMask, mask: s9, maskBuffer: this._maskBuffer, opcode: 9, readOnly: n17, rsv1: false };
      G13(e7) ? this._state !== w19 ? this.enqueue([this.getBlobData, e7, false, o18, r39]) : this.getBlobData(e7, false, o18, r39) : this._state !== w19 ? this.enqueue([this.dispatch, e7, false, o18, r39]) : this.sendFrame(t9.frame(e7, o18), r39);
    }
    pong(e7, s9, r39) {
      let i21, n17;
      if (typeof e7 == "string" ? (i21 = __Buffer$3.byteLength(e7), n17 = false) : G13(e7) ? (i21 = e7.size, n17 = false) : (e7 = B11(e7), i21 = e7.length, n17 = B11.readOnly), i21 > 125) throw new RangeError("The data size must not be greater than 125 bytes");
      let o18 = { [b15]: i21, fin: true, generateMask: this._generateMask, mask: s9, maskBuffer: this._maskBuffer, opcode: 10, readOnly: n17, rsv1: false };
      G13(e7) ? this._state !== w19 ? this.enqueue([this.getBlobData, e7, false, o18, r39]) : this.getBlobData(e7, false, o18, r39) : this._state !== w19 ? this.enqueue([this.dispatch, e7, false, o18, r39]) : this.sendFrame(t9.frame(e7, o18), r39);
    }
    send(e7, s9, r39) {
      let i21 = this._extensions[lt5.extensionName], n17 = s9.binary ? 2 : 1, o18 = s9.compress, f14, l16;
      typeof e7 == "string" ? (f14 = __Buffer$3.byteLength(e7), l16 = false) : G13(e7) ? (f14 = e7.size, l16 = false) : (e7 = B11(e7), f14 = e7.length, l16 = B11.readOnly), this._firstFragment ? (this._firstFragment = false, o18 && i21 && i21.params[i21._isServer ? "server_no_context_takeover" : "client_no_context_takeover"] && (o18 = f14 >= i21._threshold), this._compress = o18) : (o18 = false, n17 = 0), s9.fin && (this._firstFragment = true);
      let a11 = { [b15]: f14, fin: s9.fin, generateMask: this._generateMask, mask: s9.mask, maskBuffer: this._maskBuffer, opcode: n17, readOnly: l16, rsv1: o18 };
      G13(e7) ? this._state !== w19 ? this.enqueue([this.getBlobData, e7, this._compress, a11, r39]) : this.getBlobData(e7, this._compress, a11, r39) : this._state !== w19 ? this.enqueue([this.dispatch, e7, this._compress, a11, r39]) : this.dispatch(e7, this._compress, a11, r39);
    }
    getBlobData(e7, s9, r39, i21) {
      this._bufferedBytes += r39[b15], this._state = Ts, e7.arrayBuffer().then((n17) => {
        if (this._socket.destroyed) {
          let f14 = new Error("The socket was closed while the blob was being read");
          __Process$6.nextTick(Ne4, this, f14, i21);
          return;
        }
        this._bufferedBytes -= r39[b15];
        let o18 = B11(n17);
        s9 ? this.dispatch(o18, s9, r39, i21) : (this._state = w19, this.sendFrame(t9.frame(o18, r39), i21), this.dequeue());
      }).catch((n17) => {
        __Process$6.nextTick(Cs, this, n17, i21);
      });
    }
    dispatch(e7, s9, r39, i21) {
      if (!s9) {
        this.sendFrame(t9.frame(e7, r39), i21);
        return;
      }
      let n17 = this._extensions[lt5.extensionName];
      this._bufferedBytes += r39[b15], this._state = ks, n17.compress(e7, r39.fin, (o18, f14) => {
        if (this._socket.destroyed) {
          let l16 = new Error("The socket was closed while data was being compressed");
          Ne4(this, l16, i21);
          return;
        }
        this._bufferedBytes -= r39[b15], this._state = w19, r39.readOnly = false, this.sendFrame(t9.frame(f14, r39), i21), this.dequeue();
      });
    }
    dequeue() {
      for (; this._state === w19 && this._queue.length; ) {
        let e7 = this._queue.shift();
        this._bufferedBytes -= e7[3][b15], Reflect.apply(e7[0], this, e7.slice(1));
      }
    }
    enqueue(e7) {
      this._bufferedBytes += e7[3][b15], this._queue.push(e7);
    }
    sendFrame(e7, s9) {
      e7.length === 2 ? (this._socket.cork(), this._socket.write(e7[0]), this._socket.write(e7[1], s9), this._socket.uncork()) : this._socket.write(e7[0], s9);
    }
  };
  ct6.exports = Le4;
  function Ne4(t9, e7, s9) {
    typeof s9 == "function" && s9(e7);
    for (let r39 = 0; r39 < t9._queue.length; r39++) {
      let i21 = t9._queue[r39], n17 = i21[i21.length - 1];
      typeof n17 == "function" && n17(e7);
    }
  }
  function Cs(t9, e7, s9) {
    Ne4(t9, e7, s9), t9.onerror(e7);
  }
});
var xt3 = x12((Br, St3) => {
  "use strict";
  var { kForOnEventAttribute: Q11, kListener: Be4 } = k8(), ut5 = Symbol("kCode"), dt3 = Symbol("kData"), _t3 = Symbol("kError"), pt4 = Symbol("kMessage"), mt4 = Symbol("kReason"), j17 = Symbol("kTarget"), gt3 = Symbol("kType"), yt3 = Symbol("kWasClean"), C10 = class {
    constructor(e7) {
      this[j17] = null, this[gt3] = e7;
    }
    get target() {
      return this[j17];
    }
    get type() {
      return this[gt3];
    }
  };
  Object.defineProperty(C10.prototype, "target", { enumerable: true });
  Object.defineProperty(C10.prototype, "type", { enumerable: true });
  var U11 = class extends C10 {
    constructor(e7, s9 = {}) {
      super(e7), this[ut5] = s9.code === void 0 ? 0 : s9.code, this[mt4] = s9.reason === void 0 ? "" : s9.reason, this[yt3] = s9.wasClean === void 0 ? false : s9.wasClean;
    }
    get code() {
      return this[ut5];
    }
    get reason() {
      return this[mt4];
    }
    get wasClean() {
      return this[yt3];
    }
  };
  Object.defineProperty(U11.prototype, "code", { enumerable: true });
  Object.defineProperty(U11.prototype, "reason", { enumerable: true });
  Object.defineProperty(U11.prototype, "wasClean", { enumerable: true });
  var V12 = class extends C10 {
    constructor(e7, s9 = {}) {
      super(e7), this[_t3] = s9.error === void 0 ? null : s9.error, this[pt4] = s9.message === void 0 ? "" : s9.message;
    }
    get error() {
      return this[_t3];
    }
    get message() {
      return this[pt4];
    }
  };
  Object.defineProperty(V12.prototype, "error", { enumerable: true });
  Object.defineProperty(V12.prototype, "message", { enumerable: true });
  var J15 = class extends C10 {
    constructor(e7, s9 = {}) {
      super(e7), this[dt3] = s9.data === void 0 ? null : s9.data;
    }
    get data() {
      return this[dt3];
    }
  };
  Object.defineProperty(J15.prototype, "data", { enumerable: true });
  var Ls = { addEventListener(t9, e7, s9 = {}) {
    for (let i21 of this.listeners(t9)) if (!s9[Q11] && i21[Be4] === e7 && !i21[Q11]) return;
    let r39;
    if (t9 === "message") r39 = function(n17, o18) {
      let f14 = new J15("message", { data: o18 ? n17 : n17.toString() });
      f14[j17] = this, he7(e7, this, f14);
    };
    else if (t9 === "close") r39 = function(n17, o18) {
      let f14 = new U11("close", { code: n17, reason: o18.toString(), wasClean: this._closeFrameReceived && this._closeFrameSent });
      f14[j17] = this, he7(e7, this, f14);
    };
    else if (t9 === "error") r39 = function(n17) {
      let o18 = new V12("error", { error: n17, message: n17.message });
      o18[j17] = this, he7(e7, this, o18);
    };
    else if (t9 === "open") r39 = function() {
      let n17 = new C10("open");
      n17[j17] = this, he7(e7, this, n17);
    };
    else return;
    r39[Q11] = !!s9[Q11], r39[Be4] = e7, s9.once ? this.once(t9, r39) : this.on(t9, r39);
  }, removeEventListener(t9, e7) {
    for (let s9 of this.listeners(t9)) if (s9[Be4] === e7 && !s9[Q11]) {
      this.removeListener(t9, s9);
      break;
    }
  } };
  St3.exports = { CloseEvent: U11, ErrorEvent: V12, Event: C10, EventTarget: Ls, MessageEvent: J15 };
  function he7(t9, e7, s9) {
    typeof t9 == "object" && t9.handleEvent ? t9.handleEvent.call(t9, s9) : t9.call(e7, s9);
  }
});
var Re4 = x12((Rr, Et3) => {
  "use strict";
  var { tokenChars: ee6 } = q14();
  function O10(t9, e7, s9) {
    t9[e7] === void 0 ? t9[e7] = [s9] : t9[e7].push(s9);
  }
  function Ns(t9) {
    let e7 = /* @__PURE__ */ Object.create(null), s9 = /* @__PURE__ */ Object.create(null), r39 = false, i21 = false, n17 = false, o18, f14, l16 = -1, a11 = -1, h22 = -1, c18 = 0;
    for (; c18 < t9.length; c18++) if (a11 = t9.charCodeAt(c18), o18 === void 0) if (h22 === -1 && ee6[a11] === 1) l16 === -1 && (l16 = c18);
    else if (c18 !== 0 && (a11 === 32 || a11 === 9)) h22 === -1 && l16 !== -1 && (h22 = c18);
    else if (a11 === 59 || a11 === 44) {
      if (l16 === -1) throw new SyntaxError(`Unexpected character at index ${c18}`);
      h22 === -1 && (h22 = c18);
      let g16 = t9.slice(l16, h22);
      a11 === 44 ? (O10(e7, g16, s9), s9 = /* @__PURE__ */ Object.create(null)) : o18 = g16, l16 = h22 = -1;
    } else throw new SyntaxError(`Unexpected character at index ${c18}`);
    else if (f14 === void 0) if (h22 === -1 && ee6[a11] === 1) l16 === -1 && (l16 = c18);
    else if (a11 === 32 || a11 === 9) h22 === -1 && l16 !== -1 && (h22 = c18);
    else if (a11 === 59 || a11 === 44) {
      if (l16 === -1) throw new SyntaxError(`Unexpected character at index ${c18}`);
      h22 === -1 && (h22 = c18), O10(s9, t9.slice(l16, h22), true), a11 === 44 && (O10(e7, o18, s9), s9 = /* @__PURE__ */ Object.create(null), o18 = void 0), l16 = h22 = -1;
    } else if (a11 === 61 && l16 !== -1 && h22 === -1) f14 = t9.slice(l16, c18), l16 = h22 = -1;
    else throw new SyntaxError(`Unexpected character at index ${c18}`);
    else if (i21) {
      if (ee6[a11] !== 1) throw new SyntaxError(`Unexpected character at index ${c18}`);
      l16 === -1 ? l16 = c18 : r39 || (r39 = true), i21 = false;
    } else if (n17) if (ee6[a11] === 1) l16 === -1 && (l16 = c18);
    else if (a11 === 34 && l16 !== -1) n17 = false, h22 = c18;
    else if (a11 === 92) i21 = true;
    else throw new SyntaxError(`Unexpected character at index ${c18}`);
    else if (a11 === 34 && t9.charCodeAt(c18 - 1) === 61) n17 = true;
    else if (h22 === -1 && ee6[a11] === 1) l16 === -1 && (l16 = c18);
    else if (l16 !== -1 && (a11 === 32 || a11 === 9)) h22 === -1 && (h22 = c18);
    else if (a11 === 59 || a11 === 44) {
      if (l16 === -1) throw new SyntaxError(`Unexpected character at index ${c18}`);
      h22 === -1 && (h22 = c18);
      let g16 = t9.slice(l16, h22);
      r39 && (g16 = g16.replace(/\\/g, ""), r39 = false), O10(s9, f14, g16), a11 === 44 && (O10(e7, o18, s9), s9 = /* @__PURE__ */ Object.create(null), o18 = void 0), f14 = void 0, l16 = h22 = -1;
    } else throw new SyntaxError(`Unexpected character at index ${c18}`);
    if (l16 === -1 || n17 || a11 === 32 || a11 === 9) throw new SyntaxError("Unexpected end of input");
    h22 === -1 && (h22 = c18);
    let _14 = t9.slice(l16, h22);
    return o18 === void 0 ? O10(e7, _14, s9) : (f14 === void 0 ? O10(s9, _14, true) : r39 ? O10(s9, f14, _14.replace(/\\/g, "")) : O10(s9, f14, _14), O10(e7, o18, s9)), e7;
  }
  function Ps(t9) {
    return Object.keys(t9).map((e7) => {
      let s9 = t9[e7];
      return Array.isArray(s9) || (s9 = [s9]), s9.map((r39) => [e7].concat(Object.keys(r39).map((i21) => {
        let n17 = r39[i21];
        return Array.isArray(n17) || (n17 = [n17]), n17.map((o18) => o18 === true ? i21 : `${i21}=${o18}`).join("; ");
      })).join("; ")).join(", ");
    }).join(", ");
  }
  Et3.exports = { format: Ps, parse: Ns };
});
var _e5 = x12((Dr, Rt3) => {
  "use strict";
  var Bs = m21("node:events"), Rs = m21("node:https"), Us = m21("node:http"), wt3 = m21("node:net"), Is = m21("node:tls"), { randomBytes: Ds, createHash: Ms } = m21("node:crypto"), { Duplex: Ur, Readable: Ir2 } = m21("node:stream"), { URL: Ue4 } = m21("node:url"), P14 = Z7(), As = Ce4(), Ws = Pe5(), { isBlob: Fs } = q14(), { BINARY_TYPES: vt3, EMPTY_BUFFER: ce5, GUID: qs, kForOnEventAttribute: Ie4, kListener: Gs, kStatusCode: $s, kWebSocket: y15, NOOP: Ot3 } = k8(), { EventTarget: { addEventListener: js, removeEventListener: Vs } } = xt3(), { format: zs, parse: Hs } = Re4(), { toBuffer: Ys } = K10(), Ks = 30 * 1e3, kt3 = Symbol("kAborted"), De4 = [8, 13], L9 = ["CONNECTING", "OPEN", "CLOSING", "CLOSED"], Xs = /^[!#$%&'*+\-.0-9A-Z^_`|a-z~]+$/, d19 = class t9 extends Bs {
    constructor(e7, s9, r39) {
      super(), this._binaryType = vt3[0], this._closeCode = 1006, this._closeFrameReceived = false, this._closeFrameSent = false, this._closeMessage = ce5, this._closeTimer = null, this._errorEmitted = false, this._extensions = {}, this._paused = false, this._protocol = "", this._readyState = t9.CONNECTING, this._receiver = null, this._sender = null, this._socket = null, e7 !== null ? (this._bufferedAmount = 0, this._isServer = false, this._redirects = 0, s9 === void 0 ? s9 = [] : Array.isArray(s9) || (typeof s9 == "object" && s9 !== null ? (r39 = s9, s9 = []) : s9 = [s9]), Tt3(this, e7, s9, r39)) : (this._autoPong = r39.autoPong, this._isServer = true);
    }
    get binaryType() {
      return this._binaryType;
    }
    set binaryType(e7) {
      vt3.includes(e7) && (this._binaryType = e7, this._receiver && (this._receiver._binaryType = e7));
    }
    get bufferedAmount() {
      return this._socket ? this._socket._writableState.length + this._sender._bufferedBytes : this._bufferedAmount;
    }
    get extensions() {
      return Object.keys(this._extensions).join();
    }
    get isPaused() {
      return this._paused;
    }
    get onclose() {
      return null;
    }
    get onerror() {
      return null;
    }
    get onopen() {
      return null;
    }
    get onmessage() {
      return null;
    }
    get protocol() {
      return this._protocol;
    }
    get readyState() {
      return this._readyState;
    }
    get url() {
      return this._url;
    }
    setSocket(e7, s9, r39) {
      let i21 = new As({ allowSynchronousEvents: r39.allowSynchronousEvents, binaryType: this.binaryType, extensions: this._extensions, isServer: this._isServer, maxPayload: r39.maxPayload, skipUTF8Validation: r39.skipUTF8Validation }), n17 = new Ws(e7, this._extensions, r39.generateMask);
      this._receiver = i21, this._sender = n17, this._socket = e7, i21[y15] = this, n17[y15] = this, e7[y15] = this, i21.on("conclude", Js), i21.on("drain", er2), i21.on("error", tr2), i21.on("message", sr2), i21.on("ping", rr), i21.on("pong", ir2), n17.onerror = nr2, e7.setTimeout && e7.setTimeout(0), e7.setNoDelay && e7.setNoDelay(), s9.length > 0 && e7.unshift(s9), e7.on("close", Nt3), e7.on("data", de8), e7.on("end", Pt3), e7.on("error", Bt3), this._readyState = t9.OPEN, this.emit("open");
    }
    emitClose() {
      if (!this._socket) {
        this._readyState = t9.CLOSED, this.emit("close", this._closeCode, this._closeMessage);
        return;
      }
      this._extensions[P14.extensionName] && this._extensions[P14.extensionName].cleanup(), this._receiver.removeAllListeners(), this._readyState = t9.CLOSED, this.emit("close", this._closeCode, this._closeMessage);
    }
    close(e7, s9) {
      if (this.readyState !== t9.CLOSED) {
        if (this.readyState === t9.CONNECTING) {
          E12(this, this._req, "WebSocket was closed before the connection was established");
          return;
        }
        if (this.readyState === t9.CLOSING) {
          this._closeFrameSent && (this._closeFrameReceived || this._receiver._writableState.errorEmitted) && this._socket.end();
          return;
        }
        this._readyState = t9.CLOSING, this._sender.close(e7, s9, !this._isServer, (r39) => {
          r39 || (this._closeFrameSent = true, (this._closeFrameReceived || this._receiver._writableState.errorEmitted) && this._socket.end());
        }), Lt3(this);
      }
    }
    pause() {
      this.readyState === t9.CONNECTING || this.readyState === t9.CLOSED || (this._paused = true, this._socket.pause());
    }
    ping(e7, s9, r39) {
      if (this.readyState === t9.CONNECTING) throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
      if (typeof e7 == "function" ? (r39 = e7, e7 = s9 = void 0) : typeof s9 == "function" && (r39 = s9, s9 = void 0), typeof e7 == "number" && (e7 = e7.toString()), this.readyState !== t9.OPEN) {
        Me4(this, e7, r39);
        return;
      }
      s9 === void 0 && (s9 = !this._isServer), this._sender.ping(e7 || ce5, s9, r39);
    }
    pong(e7, s9, r39) {
      if (this.readyState === t9.CONNECTING) throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
      if (typeof e7 == "function" ? (r39 = e7, e7 = s9 = void 0) : typeof s9 == "function" && (r39 = s9, s9 = void 0), typeof e7 == "number" && (e7 = e7.toString()), this.readyState !== t9.OPEN) {
        Me4(this, e7, r39);
        return;
      }
      s9 === void 0 && (s9 = !this._isServer), this._sender.pong(e7 || ce5, s9, r39);
    }
    resume() {
      this.readyState === t9.CONNECTING || this.readyState === t9.CLOSED || (this._paused = false, this._receiver._writableState.needDrain || this._socket.resume());
    }
    send(e7, s9, r39) {
      if (this.readyState === t9.CONNECTING) throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
      if (typeof s9 == "function" && (r39 = s9, s9 = {}), typeof e7 == "number" && (e7 = e7.toString()), this.readyState !== t9.OPEN) {
        Me4(this, e7, r39);
        return;
      }
      let i21 = { binary: typeof e7 != "string", mask: !this._isServer, compress: true, fin: true, ...s9 };
      this._extensions[P14.extensionName] || (i21.compress = false), this._sender.send(e7 || ce5, i21, r39);
    }
    terminate() {
      if (this.readyState !== t9.CLOSED) {
        if (this.readyState === t9.CONNECTING) {
          E12(this, this._req, "WebSocket was closed before the connection was established");
          return;
        }
        this._socket && (this._readyState = t9.CLOSING, this._socket.destroy());
      }
    }
  };
  Object.defineProperty(d19, "CONNECTING", { enumerable: true, value: L9.indexOf("CONNECTING") });
  Object.defineProperty(d19.prototype, "CONNECTING", { enumerable: true, value: L9.indexOf("CONNECTING") });
  Object.defineProperty(d19, "OPEN", { enumerable: true, value: L9.indexOf("OPEN") });
  Object.defineProperty(d19.prototype, "OPEN", { enumerable: true, value: L9.indexOf("OPEN") });
  Object.defineProperty(d19, "CLOSING", { enumerable: true, value: L9.indexOf("CLOSING") });
  Object.defineProperty(d19.prototype, "CLOSING", { enumerable: true, value: L9.indexOf("CLOSING") });
  Object.defineProperty(d19, "CLOSED", { enumerable: true, value: L9.indexOf("CLOSED") });
  Object.defineProperty(d19.prototype, "CLOSED", { enumerable: true, value: L9.indexOf("CLOSED") });
  ["binaryType", "bufferedAmount", "extensions", "isPaused", "protocol", "readyState", "url"].forEach((t9) => {
    Object.defineProperty(d19.prototype, t9, { enumerable: true });
  });
  ["open", "error", "close", "message"].forEach((t9) => {
    Object.defineProperty(d19.prototype, `on${t9}`, { enumerable: true, get() {
      for (let e7 of this.listeners(t9)) if (e7[Ie4]) return e7[Gs];
      return null;
    }, set(e7) {
      for (let s9 of this.listeners(t9)) if (s9[Ie4]) {
        this.removeListener(t9, s9);
        break;
      }
      typeof e7 == "function" && this.addEventListener(t9, e7, { [Ie4]: true });
    } });
  });
  d19.prototype.addEventListener = js;
  d19.prototype.removeEventListener = Vs;
  Rt3.exports = d19;
  function Tt3(t9, e7, s9, r39) {
    let i21 = { allowSynchronousEvents: true, autoPong: true, protocolVersion: De4[1], maxPayload: 104857600, skipUTF8Validation: false, perMessageDeflate: true, followRedirects: false, maxRedirects: 10, ...r39, socketPath: void 0, hostname: void 0, protocol: void 0, timeout: void 0, method: "GET", host: void 0, path: void 0, port: void 0 };
    if (t9._autoPong = i21.autoPong, !De4.includes(i21.protocolVersion)) throw new RangeError(`Unsupported protocol version: ${i21.protocolVersion} (supported versions: ${De4.join(", ")})`);
    let n17;
    if (e7 instanceof Ue4) n17 = e7;
    else try {
      n17 = new Ue4(e7);
    } catch {
      throw new SyntaxError(`Invalid URL: ${e7}`);
    }
    n17.protocol === "http:" ? n17.protocol = "ws:" : n17.protocol === "https:" && (n17.protocol = "wss:"), t9._url = n17.href;
    let o18 = n17.protocol === "wss:", f14 = n17.protocol === "ws+unix:", l16;
    if (n17.protocol !== "ws:" && !o18 && !f14 ? l16 = `The URL's protocol must be one of "ws:", "wss:", "http:", "https:", or "ws+unix:"` : f14 && !n17.pathname ? l16 = "The URL's pathname is empty" : n17.hash && (l16 = "The URL contains a fragment identifier"), l16) {
      let u18 = new SyntaxError(l16);
      if (t9._redirects === 0) throw u18;
      ue6(t9, u18);
      return;
    }
    let a11 = o18 ? 443 : 80, h22 = Ds(16).toString("base64"), c18 = o18 ? Rs.request : Us.request, _14 = /* @__PURE__ */ new Set(), g16;
    if (i21.createConnection = i21.createConnection || (o18 ? Qs : Zs), i21.defaultPort = i21.defaultPort || a11, i21.port = n17.port || a11, i21.host = n17.hostname.startsWith("[") ? n17.hostname.slice(1, -1) : n17.hostname, i21.headers = { ...i21.headers, "Sec-WebSocket-Version": i21.protocolVersion, "Sec-WebSocket-Key": h22, Connection: "Upgrade", Upgrade: "websocket" }, i21.path = n17.pathname + n17.search, i21.timeout = i21.handshakeTimeout, i21.perMessageDeflate && (g16 = new P14(i21.perMessageDeflate !== true ? i21.perMessageDeflate : {}, false, i21.maxPayload), i21.headers["Sec-WebSocket-Extensions"] = zs({ [P14.extensionName]: g16.offer() })), s9.length) {
      for (let u18 of s9) {
        if (typeof u18 != "string" || !Xs.test(u18) || _14.has(u18)) throw new SyntaxError("An invalid or duplicated subprotocol was specified");
        _14.add(u18);
      }
      i21.headers["Sec-WebSocket-Protocol"] = s9.join(",");
    }
    if (i21.origin && (i21.protocolVersion < 13 ? i21.headers["Sec-WebSocket-Origin"] = i21.origin : i21.headers.Origin = i21.origin), (n17.username || n17.password) && (i21.auth = `${n17.username}:${n17.password}`), f14) {
      let u18 = i21.path.split(":");
      i21.socketPath = u18[0], i21.path = u18[1];
    }
    let p19;
    if (i21.followRedirects) {
      if (t9._redirects === 0) {
        t9._originalIpc = f14, t9._originalSecure = o18, t9._originalHostOrSocketPath = f14 ? i21.socketPath : n17.host;
        let u18 = r39 && r39.headers;
        if (r39 = { ...r39, headers: {} }, u18) for (let [S13, M14] of Object.entries(u18)) r39.headers[S13.toLowerCase()] = M14;
      } else if (t9.listenerCount("redirect") === 0) {
        let u18 = f14 ? t9._originalIpc ? i21.socketPath === t9._originalHostOrSocketPath : false : t9._originalIpc ? false : n17.host === t9._originalHostOrSocketPath;
        (!u18 || t9._originalSecure && !o18) && (delete i21.headers.authorization, delete i21.headers.cookie, u18 || delete i21.headers.host, i21.auth = void 0);
      }
      i21.auth && !r39.headers.authorization && (r39.headers.authorization = "Basic " + __Buffer$3.from(i21.auth).toString("base64")), p19 = t9._req = c18(i21), t9._redirects && t9.emit("redirect", t9.url, p19);
    } else p19 = t9._req = c18(i21);
    i21.timeout && p19.on("timeout", () => {
      E12(t9, p19, "Opening handshake has timed out");
    }), p19.on("error", (u18) => {
      p19 === null || p19[kt3] || (p19 = t9._req = null, ue6(t9, u18));
    }), p19.on("response", (u18) => {
      let S13 = u18.headers.location, M14 = u18.statusCode;
      if (S13 && i21.followRedirects && M14 >= 300 && M14 < 400) {
        if (++t9._redirects > i21.maxRedirects) {
          E12(t9, p19, "Maximum redirects exceeded");
          return;
        }
        p19.abort();
        let z11;
        try {
          z11 = new Ue4(S13, e7);
        } catch {
          let A13 = new SyntaxError(`Invalid URL: ${S13}`);
          ue6(t9, A13);
          return;
        }
        Tt3(t9, z11, s9, r39);
      } else t9.emit("unexpected-response", p19, u18) || E12(t9, p19, `Unexpected server response: ${u18.statusCode}`);
    }), p19.on("upgrade", (u18, S13, M14) => {
      if (t9.emit("upgrade", u18), t9.readyState !== d19.CONNECTING) return;
      p19 = t9._req = null;
      let z11 = u18.headers.upgrade;
      if (z11 === void 0 || z11.toLowerCase() !== "websocket") {
        E12(t9, S13, "Invalid Upgrade header");
        return;
      }
      let We4 = Ms("sha1").update(h22 + qs).digest("base64");
      if (u18.headers["sec-websocket-accept"] !== We4) {
        E12(t9, S13, "Invalid Sec-WebSocket-Accept header");
        return;
      }
      let A13 = u18.headers["sec-websocket-protocol"], H14;
      if (A13 !== void 0 ? _14.size ? _14.has(A13) || (H14 = "Server sent an invalid subprotocol") : H14 = "Server sent a subprotocol but none was requested" : _14.size && (H14 = "Server sent no subprotocol"), H14) {
        E12(t9, S13, H14);
        return;
      }
      A13 && (t9._protocol = A13);
      let Fe5 = u18.headers["sec-websocket-extensions"];
      if (Fe5 !== void 0) {
        if (!g16) {
          E12(t9, S13, "Server sent a Sec-WebSocket-Extensions header but no extension was requested");
          return;
        }
        let me6;
        try {
          me6 = Hs(Fe5);
        } catch {
          E12(t9, S13, "Invalid Sec-WebSocket-Extensions header");
          return;
        }
        let qe4 = Object.keys(me6);
        if (qe4.length !== 1 || qe4[0] !== P14.extensionName) {
          E12(t9, S13, "Server indicated an extension that was not requested");
          return;
        }
        try {
          g16.accept(me6[P14.extensionName]);
        } catch {
          E12(t9, S13, "Invalid Sec-WebSocket-Extensions header");
          return;
        }
        t9._extensions[P14.extensionName] = g16;
      }
      t9.setSocket(S13, M14, { allowSynchronousEvents: i21.allowSynchronousEvents, generateMask: i21.generateMask, maxPayload: i21.maxPayload, skipUTF8Validation: i21.skipUTF8Validation });
    }), i21.finishRequest ? i21.finishRequest(p19, t9) : p19.end();
  }
  function ue6(t9, e7) {
    t9._readyState = d19.CLOSING, t9._errorEmitted = true, t9.emit("error", e7), t9.emitClose();
  }
  function Zs(t9) {
    return t9.path = t9.socketPath, wt3.connect(t9);
  }
  function Qs(t9) {
    return t9.path = void 0, !t9.servername && t9.servername !== "" && (t9.servername = wt3.isIP(t9.host) ? "" : t9.host), Is.connect(t9);
  }
  function E12(t9, e7, s9) {
    t9._readyState = d19.CLOSING;
    let r39 = new Error(s9);
    Error.captureStackTrace(r39, E12), e7.setHeader ? (e7[kt3] = true, e7.abort(), e7.socket && !e7.socket.destroyed && e7.socket.destroy(), __Process$6.nextTick(ue6, t9, r39)) : (e7.destroy(r39), e7.once("error", t9.emit.bind(t9, "error")), e7.once("close", t9.emitClose.bind(t9)));
  }
  function Me4(t9, e7, s9) {
    if (e7) {
      let r39 = Fs(e7) ? e7.size : Ys(e7).length;
      t9._socket ? t9._sender._bufferedBytes += r39 : t9._bufferedAmount += r39;
    }
    if (s9) {
      let r39 = new Error(`WebSocket is not open: readyState ${t9.readyState} (${L9[t9.readyState]})`);
      __Process$6.nextTick(s9, r39);
    }
  }
  function Js(t9, e7) {
    let s9 = this[y15];
    s9._closeFrameReceived = true, s9._closeMessage = e7, s9._closeCode = t9, s9._socket[y15] !== void 0 && (s9._socket.removeListener("data", de8), __Process$6.nextTick(Ct4, s9._socket), t9 === 1005 ? s9.close() : s9.close(t9, e7));
  }
  function er2() {
    let t9 = this[y15];
    t9.isPaused || t9._socket.resume();
  }
  function tr2(t9) {
    let e7 = this[y15];
    e7._socket[y15] !== void 0 && (e7._socket.removeListener("data", de8), __Process$6.nextTick(Ct4, e7._socket), e7.close(t9[$s])), e7._errorEmitted || (e7._errorEmitted = true, e7.emit("error", t9));
  }
  function bt4() {
    this[y15].emitClose();
  }
  function sr2(t9, e7) {
    this[y15].emit("message", t9, e7);
  }
  function rr(t9) {
    let e7 = this[y15];
    e7._autoPong && e7.pong(t9, !this._isServer, Ot3), e7.emit("ping", t9);
  }
  function ir2(t9) {
    this[y15].emit("pong", t9);
  }
  function Ct4(t9) {
    t9.resume();
  }
  function nr2(t9) {
    let e7 = this[y15];
    e7.readyState !== d19.CLOSED && (e7.readyState === d19.OPEN && (e7._readyState = d19.CLOSING, Lt3(e7)), this._socket.end(), e7._errorEmitted || (e7._errorEmitted = true, e7.emit("error", t9)));
  }
  function Lt3(t9) {
    t9._closeTimer = setTimeout(t9._socket.destroy.bind(t9._socket), Ks);
  }
  function Nt3() {
    let t9 = this[y15];
    this.removeListener("close", Nt3), this.removeListener("data", de8), this.removeListener("end", Pt3), t9._readyState = d19.CLOSING;
    let e7;
    !this._readableState.endEmitted && !t9._closeFrameReceived && !t9._receiver._writableState.errorEmitted && (e7 = t9._socket.read()) !== null && t9._receiver.write(e7), t9._receiver.end(), this[y15] = void 0, clearTimeout(t9._closeTimer), t9._receiver._writableState.finished || t9._receiver._writableState.errorEmitted ? t9.emitClose() : (t9._receiver.on("error", bt4), t9._receiver.on("finish", bt4));
  }
  function de8(t9) {
    this[y15]._receiver.write(t9) || this.pause();
  }
  function Pt3() {
    let t9 = this[y15];
    t9._readyState = d19.CLOSING, t9._receiver.end(), this.end();
  }
  function Bt3() {
    let t9 = this[y15];
    this.removeListener("error", Bt3), this.on("error", Ot3), t9 && (t9._readyState = d19.CLOSING, this.destroy());
  }
});
var Mt3 = x12((Ar, Dt3) => {
  "use strict";
  var Mr2 = _e5(), { Duplex: or2 } = m21("node:stream");
  function Ut3(t9) {
    t9.emit("close");
  }
  function ar2() {
    !this.destroyed && this._writableState.finished && this.destroy();
  }
  function It3(t9) {
    this.removeListener("error", It3), this.destroy(), this.listenerCount("error") === 0 && this.emit("error", t9);
  }
  function fr2(t9, e7) {
    let s9 = true, r39 = new or2({ ...e7, autoDestroy: false, emitClose: false, objectMode: false, writableObjectMode: false });
    return t9.on("message", function(n17, o18) {
      let f14 = !o18 && r39._readableState.objectMode ? n17.toString() : n17;
      r39.push(f14) || t9.pause();
    }), t9.once("error", function(n17) {
      r39.destroyed || (s9 = false, r39.destroy(n17));
    }), t9.once("close", function() {
      r39.destroyed || r39.push(null);
    }), r39._destroy = function(i21, n17) {
      if (t9.readyState === t9.CLOSED) {
        n17(i21), __Process$6.nextTick(Ut3, r39);
        return;
      }
      let o18 = false;
      t9.once("error", function(l16) {
        o18 = true, n17(l16);
      }), t9.once("close", function() {
        o18 || n17(i21), __Process$6.nextTick(Ut3, r39);
      }), s9 && t9.terminate();
    }, r39._final = function(i21) {
      if (t9.readyState === t9.CONNECTING) {
        t9.once("open", function() {
          r39._final(i21);
        });
        return;
      }
      t9._socket !== null && (t9._socket._writableState.finished ? (i21(), r39._readableState.endEmitted && r39.destroy()) : (t9._socket.once("finish", function() {
        i21();
      }), t9.close()));
    }, r39._read = function() {
      t9.isPaused && t9.resume();
    }, r39._write = function(i21, n17, o18) {
      if (t9.readyState === t9.CONNECTING) {
        t9.once("open", function() {
          r39._write(i21, n17, o18);
        });
        return;
      }
      t9.send(i21, o18);
    }, r39.on("end", ar2), r39.on("error", It3), r39;
  }
  Dt3.exports = fr2;
});
var Wt3 = x12((Wr, At3) => {
  "use strict";
  var { tokenChars: lr2 } = q14();
  function hr2(t9) {
    let e7 = /* @__PURE__ */ new Set(), s9 = -1, r39 = -1, i21 = 0;
    for (i21; i21 < t9.length; i21++) {
      let o18 = t9.charCodeAt(i21);
      if (r39 === -1 && lr2[o18] === 1) s9 === -1 && (s9 = i21);
      else if (i21 !== 0 && (o18 === 32 || o18 === 9)) r39 === -1 && s9 !== -1 && (r39 = i21);
      else if (o18 === 44) {
        if (s9 === -1) throw new SyntaxError(`Unexpected character at index ${i21}`);
        r39 === -1 && (r39 = i21);
        let f14 = t9.slice(s9, r39);
        if (e7.has(f14)) throw new SyntaxError(`The "${f14}" subprotocol is duplicated`);
        e7.add(f14), s9 = r39 = -1;
      } else throw new SyntaxError(`Unexpected character at index ${i21}`);
    }
    if (s9 === -1 || r39 !== -1) throw new SyntaxError("Unexpected end of input");
    let n17 = t9.slice(s9, i21);
    if (e7.has(n17)) throw new SyntaxError(`The "${n17}" subprotocol is duplicated`);
    return e7.add(n17), e7;
  }
  At3.exports = { parse: hr2 };
});
var zt3 = x12((qr, Vt3) => {
  "use strict";
  var cr2 = m21("node:events"), pe8 = m21("node:http"), { Duplex: Fr } = m21("node:stream"), { createHash: ur2 } = m21("node:crypto"), Ft3 = Re4(), I11 = Z7(), dr2 = Wt3(), _r2 = _e5(), { GUID: pr2, kWebSocket: mr2 } = k8(), gr4 = /^[+/0-9A-Za-z]{22}==$/, qt3 = 0, Gt = 1, jt3 = 2, Ae5 = class extends cr2 {
    constructor(e7, s9) {
      if (super(), e7 = { allowSynchronousEvents: true, autoPong: true, maxPayload: 100 * 1024 * 1024, skipUTF8Validation: false, perMessageDeflate: false, handleProtocols: null, clientTracking: true, verifyClient: null, noServer: false, backlog: null, server: null, host: null, path: null, port: null, WebSocket: _r2, ...e7 }, e7.port == null && !e7.server && !e7.noServer || e7.port != null && (e7.server || e7.noServer) || e7.server && e7.noServer) throw new TypeError('One and only one of the "port", "server", or "noServer" options must be specified');
      if (e7.port != null ? (this._server = pe8.createServer((r39, i21) => {
        let n17 = pe8.STATUS_CODES[426];
        i21.writeHead(426, { "Content-Length": n17.length, "Content-Type": "text/plain" }), i21.end(n17);
      }), this._server.listen(e7.port, e7.host, e7.backlog, s9)) : e7.server && (this._server = e7.server), this._server) {
        let r39 = this.emit.bind(this, "connection");
        this._removeListeners = yr2(this._server, { listening: this.emit.bind(this, "listening"), error: this.emit.bind(this, "error"), upgrade: (i21, n17, o18) => {
          this.handleUpgrade(i21, n17, o18, r39);
        } });
      }
      e7.perMessageDeflate === true && (e7.perMessageDeflate = {}), e7.clientTracking && (this.clients = /* @__PURE__ */ new Set(), this._shouldEmitClose = false), this.options = e7, this._state = qt3;
    }
    address() {
      if (this.options.noServer) throw new Error('The server is operating in "noServer" mode');
      return this._server ? this._server.address() : null;
    }
    close(e7) {
      if (this._state === jt3) {
        e7 && this.once("close", () => {
          e7(new Error("The server is not running"));
        }), __Process$6.nextTick(te8, this);
        return;
      }
      if (e7 && this.once("close", e7), this._state !== Gt) if (this._state = Gt, this.options.noServer || this.options.server) this._server && (this._removeListeners(), this._removeListeners = this._server = null), this.clients ? this.clients.size ? this._shouldEmitClose = true : __Process$6.nextTick(te8, this) : __Process$6.nextTick(te8, this);
      else {
        let s9 = this._server;
        this._removeListeners(), this._removeListeners = this._server = null, s9.close(() => {
          te8(this);
        });
      }
    }
    shouldHandle(e7) {
      if (this.options.path) {
        let s9 = e7.url.indexOf("?");
        if ((s9 !== -1 ? e7.url.slice(0, s9) : e7.url) !== this.options.path) return false;
      }
      return true;
    }
    handleUpgrade(e7, s9, r39, i21) {
      s9.on("error", $t3);
      let n17 = e7.headers["sec-websocket-key"], o18 = e7.headers.upgrade, f14 = +e7.headers["sec-websocket-version"];
      if (e7.method !== "GET") {
        D12(this, e7, s9, 405, "Invalid HTTP method");
        return;
      }
      if (o18 === void 0 || o18.toLowerCase() !== "websocket") {
        D12(this, e7, s9, 400, "Invalid Upgrade header");
        return;
      }
      if (n17 === void 0 || !gr4.test(n17)) {
        D12(this, e7, s9, 400, "Missing or invalid Sec-WebSocket-Key header");
        return;
      }
      if (f14 !== 13 && f14 !== 8) {
        D12(this, e7, s9, 400, "Missing or invalid Sec-WebSocket-Version header", { "Sec-WebSocket-Version": "13, 8" });
        return;
      }
      if (!this.shouldHandle(e7)) {
        se8(s9, 400);
        return;
      }
      let l16 = e7.headers["sec-websocket-protocol"], a11 = /* @__PURE__ */ new Set();
      if (l16 !== void 0) try {
        a11 = dr2.parse(l16);
      } catch {
        D12(this, e7, s9, 400, "Invalid Sec-WebSocket-Protocol header");
        return;
      }
      let h22 = e7.headers["sec-websocket-extensions"], c18 = {};
      if (this.options.perMessageDeflate && h22 !== void 0) {
        let _14 = new I11(this.options.perMessageDeflate, true, this.options.maxPayload);
        try {
          let g16 = Ft3.parse(h22);
          g16[I11.extensionName] && (_14.accept(g16[I11.extensionName]), c18[I11.extensionName] = _14);
        } catch {
          D12(this, e7, s9, 400, "Invalid or unacceptable Sec-WebSocket-Extensions header");
          return;
        }
      }
      if (this.options.verifyClient) {
        let _14 = { origin: e7.headers[`${f14 === 8 ? "sec-websocket-origin" : "origin"}`], secure: !!(e7.socket.authorized || e7.socket.encrypted), req: e7 };
        if (this.options.verifyClient.length === 2) {
          this.options.verifyClient(_14, (g16, p19, u18, S13) => {
            if (!g16) return se8(s9, p19 || 401, u18, S13);
            this.completeUpgrade(c18, n17, a11, e7, s9, r39, i21);
          });
          return;
        }
        if (!this.options.verifyClient(_14)) return se8(s9, 401);
      }
      this.completeUpgrade(c18, n17, a11, e7, s9, r39, i21);
    }
    completeUpgrade(e7, s9, r39, i21, n17, o18, f14) {
      if (!n17.readable || !n17.writable) return n17.destroy();
      if (n17[mr2]) throw new Error("server.handleUpgrade() was called more than once with the same socket, possibly due to a misconfiguration");
      if (this._state > qt3) return se8(n17, 503);
      let a11 = ["HTTP/1.1 101 Switching Protocols", "Upgrade: websocket", "Connection: Upgrade", `Sec-WebSocket-Accept: ${ur2("sha1").update(s9 + pr2).digest("base64")}`], h22 = new this.options.WebSocket(null, void 0, this.options);
      if (r39.size) {
        let c18 = this.options.handleProtocols ? this.options.handleProtocols(r39, i21) : r39.values().next().value;
        c18 && (a11.push(`Sec-WebSocket-Protocol: ${c18}`), h22._protocol = c18);
      }
      if (e7[I11.extensionName]) {
        let c18 = e7[I11.extensionName].params, _14 = Ft3.format({ [I11.extensionName]: [c18] });
        a11.push(`Sec-WebSocket-Extensions: ${_14}`), h22._extensions = e7;
      }
      this.emit("headers", a11, i21), n17.write(a11.concat(`\r
`).join(`\r
`)), n17.removeListener("error", $t3), h22.setSocket(n17, o18, { allowSynchronousEvents: this.options.allowSynchronousEvents, maxPayload: this.options.maxPayload, skipUTF8Validation: this.options.skipUTF8Validation }), this.clients && (this.clients.add(h22), h22.on("close", () => {
        this.clients.delete(h22), this._shouldEmitClose && !this.clients.size && __Process$6.nextTick(te8, this);
      })), f14(h22, i21);
    }
  };
  Vt3.exports = Ae5;
  function yr2(t9, e7) {
    for (let s9 of Object.keys(e7)) t9.on(s9, e7[s9]);
    return function() {
      for (let r39 of Object.keys(e7)) t9.removeListener(r39, e7[r39]);
    };
  }
  function te8(t9) {
    t9._state = jt3, t9.emit("close");
  }
  function $t3() {
    this.destroy();
  }
  function se8(t9, e7, s9, r39) {
    s9 = s9 || pe8.STATUS_CODES[e7], r39 = { Connection: "close", "Content-Type": "text/html", "Content-Length": __Buffer$3.byteLength(s9), ...r39 }, t9.once("finish", t9.destroy), t9.end(`HTTP/1.1 ${e7} ${pe8.STATUS_CODES[e7]}\r
` + Object.keys(r39).map((i21) => `${i21}: ${r39[i21]}`).join(`\r
`) + `\r
\r
` + s9);
  }
  function D12(t9, e7, s9, r39, i21, n17) {
    if (t9.listenerCount("wsClientError")) {
      let o18 = new Error(i21);
      Error.captureStackTrace(o18, D12), t9.emit("wsClientError", o18, s9, e7);
    } else se8(s9, r39, i21, n17);
  }
});
var Sr = Y7(Mt3(), 1);
var xr = Y7(Ce4(), 1);
var Er = Y7(Pe5(), 1);
var Ht = Y7(_e5(), 1);
var vr = Y7(zt3(), 1);
var Gr = Ht.default;
var export_Receiver = xr.default;
var export_Sender = Er.default;
var export_WebSocket = Ht.default;
var export_WebSocketServer = vr.default;
var export_createWebSocketStream = Sr.default;

// https://raw.githubusercontent.com/jeff-hykin/openai-agents-js/refs/heads/main/packages/agents/src/index.ts
setDefaultModelProvider(new OpenAIProvider());
setDefaultOpenAITracingExporter();

// https://esm.sh/openai@5.12.0/denonext/azure.development.mjs
import __Process$9 from "node:process";

// https://esm.sh/openai@5.12.0/denonext/internal/errors.development.mjs
function isAbortError(err) {
  return typeof err === "object" && err !== null && // Spec-compliant fetch implementations
  ("name" in err && err.name === "AbortError" || // Expo fetch
  "message" in err && String(err.message).includes("FetchRequestCanceledException"));
}
var castToError = (err) => {
  if (err instanceof Error)
    return err;
  if (typeof err === "object" && err !== null) {
    try {
      if (Object.prototype.toString.call(err) === "[object Error]") {
        const error = new Error(err.message, err.cause ? { cause: err.cause } : {});
        if (err.stack)
          error.stack = err.stack;
        if (err.cause && !error.cause)
          error.cause = err.cause;
        if (err.name)
          error.name = err.name;
        return error;
      }
    } catch {
    }
    try {
      return new Error(JSON.stringify(err));
    } catch {
    }
  }
  return new Error(err);
};

// https://esm.sh/openai@5.12.0/denonext/core/error.development.mjs
var OpenAIError = class extends Error {
};
var APIError = class _APIError extends OpenAIError {
  constructor(status, error, message, headers) {
    super(`${_APIError.makeMessage(status, error, message)}`);
    this.status = status;
    this.headers = headers;
    this.requestID = headers?.get("x-request-id");
    this.error = error;
    const data = error;
    this.code = data?.["code"];
    this.param = data?.["param"];
    this.type = data?.["type"];
  }
  static makeMessage(status, error, message) {
    const msg = error?.message ? typeof error.message === "string" ? error.message : JSON.stringify(error.message) : error ? JSON.stringify(error) : message;
    if (status && msg) {
      return `${status} ${msg}`;
    }
    if (status) {
      return `${status} status code (no body)`;
    }
    if (msg) {
      return msg;
    }
    return "(no status code or body)";
  }
  static generate(status, errorResponse, message, headers) {
    if (!status || !headers) {
      return new APIConnectionError({ message, cause: castToError(errorResponse) });
    }
    const error = errorResponse?.["error"];
    if (status === 400) {
      return new BadRequestError(status, error, message, headers);
    }
    if (status === 401) {
      return new AuthenticationError(status, error, message, headers);
    }
    if (status === 403) {
      return new PermissionDeniedError(status, error, message, headers);
    }
    if (status === 404) {
      return new NotFoundError(status, error, message, headers);
    }
    if (status === 409) {
      return new ConflictError(status, error, message, headers);
    }
    if (status === 422) {
      return new UnprocessableEntityError(status, error, message, headers);
    }
    if (status === 429) {
      return new RateLimitError(status, error, message, headers);
    }
    if (status >= 500) {
      return new InternalServerError(status, error, message, headers);
    }
    return new _APIError(status, error, message, headers);
  }
};
var APIUserAbortError = class extends APIError {
  constructor({ message } = {}) {
    super(void 0, void 0, message || "Request was aborted.", void 0);
  }
};
var APIConnectionError = class extends APIError {
  constructor({ message, cause }) {
    super(void 0, void 0, message || "Connection error.", void 0);
    if (cause)
      this.cause = cause;
  }
};
var APIConnectionTimeoutError = class extends APIConnectionError {
  constructor({ message } = {}) {
    super({ message: message ?? "Request timed out." });
  }
};
var BadRequestError = class extends APIError {
};
var AuthenticationError = class extends APIError {
};
var PermissionDeniedError = class extends APIError {
};
var NotFoundError = class extends APIError {
};
var ConflictError = class extends APIError {
};
var UnprocessableEntityError = class extends APIError {
};
var RateLimitError = class extends APIError {
};
var InternalServerError = class extends APIError {
};
var LengthFinishReasonError = class extends OpenAIError {
  constructor() {
    super(`Could not parse response content as the length limit was reached`);
  }
};
var ContentFilterFinishReasonError = class extends OpenAIError {
  constructor() {
    super(`Could not parse response content as the request was rejected by the content filter`);
  }
};
var InvalidWebhookSignatureError = class extends Error {
  constructor(message) {
    super(message);
  }
};

// https://esm.sh/openai@5.12.0/denonext/internal/utils.development.mjs
import { Buffer as __Buffer$4 } from "node:buffer";

// https://esm.sh/openai@5.12.0/denonext/internal/utils/values.development.mjs
var startsWithSchemeRegexp = /^[a-z][a-z0-9+.-]*:/i;
var isAbsoluteURL = (url) => {
  return startsWithSchemeRegexp.test(url);
};
var isArray = (val) => (isArray = Array.isArray, isArray(val));
var isReadonlyArray = isArray;
function maybeObj(x16) {
  if (typeof x16 !== "object") {
    return {};
  }
  return x16 ?? {};
}
function isEmptyObj(obj) {
  if (!obj)
    return true;
  for (const _k in obj)
    return false;
  return true;
}
function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
function isObj(obj) {
  return obj != null && typeof obj === "object" && !Array.isArray(obj);
}
var validatePositiveInteger = (name, n17) => {
  if (typeof n17 !== "number" || !Number.isInteger(n17)) {
    throw new OpenAIError(`${name} must be an integer`);
  }
  if (n17 < 0) {
    throw new OpenAIError(`${name} must be a positive integer`);
  }
  return n17;
};
var safeJSON = (text) => {
  try {
    return JSON.parse(text);
  } catch (err) {
    return void 0;
  }
};

// https://esm.sh/openai@5.12.0/denonext/internal/utils/bytes.development.mjs
function concatBytes(buffers) {
  let length = 0;
  for (const buffer of buffers) {
    length += buffer.length;
  }
  const output = new Uint8Array(length);
  let index = 0;
  for (const buffer of buffers) {
    output.set(buffer, index);
    index += buffer.length;
  }
  return output;
}
var encodeUTF8_;
function encodeUTF8(str3) {
  let encoder;
  return (encodeUTF8_ ?? (encoder = new globalThis.TextEncoder(), encodeUTF8_ = encoder.encode.bind(encoder)))(str3);
}
var decodeUTF8_;
function decodeUTF8(bytes) {
  let decoder;
  return (decodeUTF8_ ?? (decoder = new globalThis.TextDecoder(), decodeUTF8_ = decoder.decode.bind(decoder)))(bytes);
}

// https://esm.sh/openai@5.12.0/denonext/internal/utils/env.development.mjs
import __Process$7 from "node:process";
var readEnv = (env2) => {
  if (typeof (0, __Process$7) !== "undefined") {
    return __Process$7.env?.[env2]?.trim() ?? void 0;
  }
  if (typeof globalThis.Deno !== "undefined") {
    return globalThis.Deno.env?.get?.(env2)?.trim();
  }
  return void 0;
};

// https://esm.sh/openai@5.12.0/denonext/internal/utils/log.development.mjs
var levelNumbers = {
  off: 0,
  error: 200,
  warn: 300,
  info: 400,
  debug: 500
};
var parseLogLevel = (maybeLevel, sourceName, client) => {
  if (!maybeLevel) {
    return void 0;
  }
  if (hasOwn(levelNumbers, maybeLevel)) {
    return maybeLevel;
  }
  loggerFor(client).warn(`${sourceName} was set to ${JSON.stringify(maybeLevel)}, expected one of ${JSON.stringify(Object.keys(levelNumbers))}`);
  return void 0;
};
function noop() {
}
function makeLogFn(fnLevel, logger4, logLevel) {
  if (!logger4 || levelNumbers[fnLevel] > levelNumbers[logLevel]) {
    return noop;
  } else {
    return logger4[fnLevel].bind(logger4);
  }
}
var noopLogger = {
  error: noop,
  warn: noop,
  info: noop,
  debug: noop
};
var cachedLoggers = /* @__PURE__ */ new WeakMap();
function loggerFor(client) {
  const logger4 = client.logger;
  const logLevel = client.logLevel ?? "off";
  if (!logger4) {
    return noopLogger;
  }
  const cachedLogger = cachedLoggers.get(logger4);
  if (cachedLogger && cachedLogger[0] === logLevel) {
    return cachedLogger[1];
  }
  const levelLogger = {
    error: makeLogFn("error", logger4, logLevel),
    warn: makeLogFn("warn", logger4, logLevel),
    info: makeLogFn("info", logger4, logLevel),
    debug: makeLogFn("debug", logger4, logLevel)
  };
  cachedLoggers.set(logger4, [logLevel, levelLogger]);
  return levelLogger;
}
var formatRequestDetails = (details) => {
  if (details.options) {
    details.options = { ...details.options };
    delete details.options["headers"];
  }
  if (details.headers) {
    details.headers = Object.fromEntries((details.headers instanceof Headers ? [...details.headers] : Object.entries(details.headers)).map(([name, value]) => [
      name,
      name.toLowerCase() === "authorization" || name.toLowerCase() === "cookie" || name.toLowerCase() === "set-cookie" ? "***" : value
    ]));
  }
  if ("retryOfRequestLogID" in details) {
    if (details.retryOfRequestLogID) {
      details.retryOf = details.retryOfRequestLogID;
    }
    delete details.retryOfRequestLogID;
  }
  return details;
};

// https://esm.sh/openai@5.12.0/denonext/internal/utils/uuid.development.mjs
var uuid4 = function() {
  const { crypto: crypto2 } = globalThis;
  if (crypto2?.randomUUID) {
    uuid4 = crypto2.randomUUID.bind(crypto2);
    return crypto2.randomUUID();
  }
  const u82 = new Uint8Array(1);
  const randomByte = crypto2 ? () => crypto2.getRandomValues(u82)[0] : () => Math.random() * 255 & 255;
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c18) => (+c18 ^ randomByte() & 15 >> +c18 / 4).toString(16));
};

// https://esm.sh/openai@5.12.0/denonext/internal/utils/sleep.development.mjs
var sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// https://esm.sh/openai@5.12.0/denonext/internal/utils.development.mjs
var toFloat32Array = (base64Str) => {
  if (typeof __Buffer$4 !== "undefined") {
    const buf = __Buffer$4.from(base64Str, "base64");
    return Array.from(new Float32Array(buf.buffer, buf.byteOffset, buf.length / Float32Array.BYTES_PER_ELEMENT));
  } else {
    const binaryStr = atob(base64Str);
    const len = binaryStr.length;
    const bytes = new Uint8Array(len);
    for (let i21 = 0; i21 < len; i21++) {
      bytes[i21] = binaryStr.charCodeAt(i21);
    }
    return Array.from(new Float32Array(bytes.buffer));
  }
};

// https://esm.sh/openai@5.12.0/denonext/client.development.mjs
import __Process$8 from "node:process";

// https://esm.sh/openai@5.12.0/denonext/internal/tslib.development.mjs
function __classPrivateFieldSet(receiver, state, value, kind, f14) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f14)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f14 : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f14.call(receiver, value) : f14 ? f14.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldGet(receiver, state, kind, f14) {
  if (kind === "a" && !f14)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f14 : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f14 : kind === "a" ? f14.call(receiver) : f14 ? f14.value : state.get(receiver);
}

// https://esm.sh/openai@5.12.0/denonext/version.development.mjs
var VERSION = "5.12.0";

// https://esm.sh/openai@5.12.0/denonext/internal/shims.development.mjs
function getDefaultFetch() {
  if (typeof fetch !== "undefined") {
    return fetch;
  }
  throw new Error("`fetch` is not defined as a global; Either pass `fetch` to the client, `new OpenAI({ fetch })` or polyfill the global, `globalThis.fetch = fetch`");
}
function makeReadableStream(...args) {
  const ReadableStream3 = globalThis.ReadableStream;
  if (typeof ReadableStream3 === "undefined") {
    throw new Error("`ReadableStream` is not defined as a global; You will need to polyfill it, `globalThis.ReadableStream = ReadableStream`");
  }
  return new ReadableStream3(...args);
}
function ReadableStreamFrom(iterable) {
  let iter = Symbol.asyncIterator in iterable ? iterable[Symbol.asyncIterator]() : iterable[Symbol.iterator]();
  return makeReadableStream({
    start() {
    },
    async pull(controller) {
      const { done, value } = await iter.next();
      if (done) {
        controller.close();
      } else {
        controller.enqueue(value);
      }
    },
    async cancel() {
      await iter.return?.();
    }
  });
}
function ReadableStreamToAsyncIterable(stream2) {
  if (stream2[Symbol.asyncIterator])
    return stream2;
  const reader = stream2.getReader();
  return {
    async next() {
      try {
        const result = await reader.read();
        if (result?.done)
          reader.releaseLock();
        return result;
      } catch (e7) {
        reader.releaseLock();
        throw e7;
      }
    },
    async return() {
      const cancelPromise = reader.cancel();
      reader.releaseLock();
      await cancelPromise;
      return { done: true, value: void 0 };
    },
    [Symbol.asyncIterator]() {
      return this;
    }
  };
}
async function CancelReadableStream(stream2) {
  if (stream2 === null || typeof stream2 !== "object")
    return;
  if (stream2[Symbol.asyncIterator]) {
    await stream2[Symbol.asyncIterator]().return?.();
    return;
  }
  const reader = stream2.getReader();
  const cancelPromise = reader.cancel();
  reader.releaseLock();
  await cancelPromise;
}

// https://esm.sh/openai@5.12.0/denonext/core/streaming.development.mjs
var _LineDecoder_buffer;
var _LineDecoder_carriageReturnIndex;
var LineDecoder = class {
  constructor() {
    _LineDecoder_buffer.set(this, void 0);
    _LineDecoder_carriageReturnIndex.set(this, void 0);
    __classPrivateFieldSet(this, _LineDecoder_buffer, new Uint8Array(), "f");
    __classPrivateFieldSet(this, _LineDecoder_carriageReturnIndex, null, "f");
  }
  decode(chunk) {
    if (chunk == null) {
      return [];
    }
    const binaryChunk = chunk instanceof ArrayBuffer ? new Uint8Array(chunk) : typeof chunk === "string" ? encodeUTF8(chunk) : chunk;
    __classPrivateFieldSet(this, _LineDecoder_buffer, concatBytes([__classPrivateFieldGet(this, _LineDecoder_buffer, "f"), binaryChunk]), "f");
    const lines = [];
    let patternIndex;
    while ((patternIndex = findNewlineIndex(__classPrivateFieldGet(this, _LineDecoder_buffer, "f"), __classPrivateFieldGet(this, _LineDecoder_carriageReturnIndex, "f"))) != null) {
      if (patternIndex.carriage && __classPrivateFieldGet(this, _LineDecoder_carriageReturnIndex, "f") == null) {
        __classPrivateFieldSet(this, _LineDecoder_carriageReturnIndex, patternIndex.index, "f");
        continue;
      }
      if (__classPrivateFieldGet(this, _LineDecoder_carriageReturnIndex, "f") != null && (patternIndex.index !== __classPrivateFieldGet(this, _LineDecoder_carriageReturnIndex, "f") + 1 || patternIndex.carriage)) {
        lines.push(decodeUTF8(__classPrivateFieldGet(this, _LineDecoder_buffer, "f").subarray(0, __classPrivateFieldGet(this, _LineDecoder_carriageReturnIndex, "f") - 1)));
        __classPrivateFieldSet(this, _LineDecoder_buffer, __classPrivateFieldGet(this, _LineDecoder_buffer, "f").subarray(__classPrivateFieldGet(this, _LineDecoder_carriageReturnIndex, "f")), "f");
        __classPrivateFieldSet(this, _LineDecoder_carriageReturnIndex, null, "f");
        continue;
      }
      const endIndex = __classPrivateFieldGet(this, _LineDecoder_carriageReturnIndex, "f") !== null ? patternIndex.preceding - 1 : patternIndex.preceding;
      const line = decodeUTF8(__classPrivateFieldGet(this, _LineDecoder_buffer, "f").subarray(0, endIndex));
      lines.push(line);
      __classPrivateFieldSet(this, _LineDecoder_buffer, __classPrivateFieldGet(this, _LineDecoder_buffer, "f").subarray(patternIndex.index), "f");
      __classPrivateFieldSet(this, _LineDecoder_carriageReturnIndex, null, "f");
    }
    return lines;
  }
  flush() {
    if (!__classPrivateFieldGet(this, _LineDecoder_buffer, "f").length) {
      return [];
    }
    return this.decode("\n");
  }
};
_LineDecoder_buffer = /* @__PURE__ */ new WeakMap(), _LineDecoder_carriageReturnIndex = /* @__PURE__ */ new WeakMap();
LineDecoder.NEWLINE_CHARS = /* @__PURE__ */ new Set(["\n", "\r"]);
LineDecoder.NEWLINE_REGEXP = /\r\n|[\n\r]/g;
function findNewlineIndex(buffer, startIndex) {
  const newline = 10;
  const carriage = 13;
  for (let i21 = startIndex ?? 0; i21 < buffer.length; i21++) {
    if (buffer[i21] === newline) {
      return { preceding: i21, index: i21 + 1, carriage: false };
    }
    if (buffer[i21] === carriage) {
      return { preceding: i21, index: i21 + 1, carriage: true };
    }
  }
  return null;
}
function findDoubleNewlineIndex(buffer) {
  const newline = 10;
  const carriage = 13;
  for (let i21 = 0; i21 < buffer.length - 1; i21++) {
    if (buffer[i21] === newline && buffer[i21 + 1] === newline) {
      return i21 + 2;
    }
    if (buffer[i21] === carriage && buffer[i21 + 1] === carriage) {
      return i21 + 2;
    }
    if (buffer[i21] === carriage && buffer[i21 + 1] === newline && i21 + 3 < buffer.length && buffer[i21 + 2] === carriage && buffer[i21 + 3] === newline) {
      return i21 + 4;
    }
  }
  return -1;
}
var _Stream_client;
var Stream = class _Stream {
  constructor(iterator, controller, client) {
    this.iterator = iterator;
    _Stream_client.set(this, void 0);
    this.controller = controller;
    __classPrivateFieldSet(this, _Stream_client, client, "f");
  }
  static fromSSEResponse(response, controller, client) {
    let consumed = false;
    const logger4 = client ? loggerFor(client) : console;
    async function* iterator() {
      if (consumed) {
        throw new OpenAIError("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");
      }
      consumed = true;
      let done = false;
      try {
        for await (const sse of _iterSSEMessages(response, controller)) {
          if (done)
            continue;
          if (sse.data.startsWith("[DONE]")) {
            done = true;
            continue;
          }
          if (sse.event === null || !sse.event.startsWith("thread.")) {
            let data;
            try {
              data = JSON.parse(sse.data);
            } catch (e7) {
              logger4.error(`Could not parse message into JSON:`, sse.data);
              logger4.error(`From chunk:`, sse.raw);
              throw e7;
            }
            if (data && data.error) {
              throw new APIError(void 0, data.error, void 0, response.headers);
            }
            yield data;
          } else {
            let data;
            try {
              data = JSON.parse(sse.data);
            } catch (e7) {
              console.error(`Could not parse message into JSON:`, sse.data);
              console.error(`From chunk:`, sse.raw);
              throw e7;
            }
            if (sse.event == "error") {
              throw new APIError(void 0, data.error, data.message, void 0);
            }
            yield { event: sse.event, data };
          }
        }
        done = true;
      } catch (e7) {
        if (isAbortError(e7))
          return;
        throw e7;
      } finally {
        if (!done)
          controller.abort();
      }
    }
    return new _Stream(iterator, controller, client);
  }
  /**
   * Generates a Stream from a newline-separated ReadableStream
   * where each item is a JSON value.
   */
  static fromReadableStream(readableStream, controller, client) {
    let consumed = false;
    async function* iterLines() {
      const lineDecoder = new LineDecoder();
      const iter = ReadableStreamToAsyncIterable(readableStream);
      for await (const chunk of iter) {
        for (const line of lineDecoder.decode(chunk)) {
          yield line;
        }
      }
      for (const line of lineDecoder.flush()) {
        yield line;
      }
    }
    async function* iterator() {
      if (consumed) {
        throw new OpenAIError("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");
      }
      consumed = true;
      let done = false;
      try {
        for await (const line of iterLines()) {
          if (done)
            continue;
          if (line)
            yield JSON.parse(line);
        }
        done = true;
      } catch (e7) {
        if (isAbortError(e7))
          return;
        throw e7;
      } finally {
        if (!done)
          controller.abort();
      }
    }
    return new _Stream(iterator, controller, client);
  }
  [(_Stream_client = /* @__PURE__ */ new WeakMap(), Symbol.asyncIterator)]() {
    return this.iterator();
  }
  /**
   * Splits the stream into two streams which can be
   * independently read from at different speeds.
   */
  tee() {
    const left = [];
    const right = [];
    const iterator = this.iterator();
    const teeIterator = (queue) => {
      return {
        next: () => {
          if (queue.length === 0) {
            const result = iterator.next();
            left.push(result);
            right.push(result);
          }
          return queue.shift();
        }
      };
    };
    return [
      new _Stream(() => teeIterator(left), this.controller, __classPrivateFieldGet(this, _Stream_client, "f")),
      new _Stream(() => teeIterator(right), this.controller, __classPrivateFieldGet(this, _Stream_client, "f"))
    ];
  }
  /**
   * Converts this stream to a newline-separated ReadableStream of
   * JSON stringified values in the stream
   * which can be turned back into a Stream with `Stream.fromReadableStream()`.
   */
  toReadableStream() {
    const self = this;
    let iter;
    return makeReadableStream({
      async start() {
        iter = self[Symbol.asyncIterator]();
      },
      async pull(ctrl) {
        try {
          const { value, done } = await iter.next();
          if (done)
            return ctrl.close();
          const bytes = encodeUTF8(JSON.stringify(value) + "\n");
          ctrl.enqueue(bytes);
        } catch (err) {
          ctrl.error(err);
        }
      },
      async cancel() {
        await iter.return?.();
      }
    });
  }
};
async function* _iterSSEMessages(response, controller) {
  if (!response.body) {
    controller.abort();
    if (typeof globalThis.navigator !== "undefined" && globalThis.navigator.product === "ReactNative") {
      throw new OpenAIError(`The default react-native fetch implementation does not support streaming. Please use expo/fetch: https://docs.expo.dev/versions/latest/sdk/expo/#expofetch-api`);
    }
    throw new OpenAIError(`Attempted to iterate over a response with no body`);
  }
  const sseDecoder = new SSEDecoder();
  const lineDecoder = new LineDecoder();
  const iter = ReadableStreamToAsyncIterable(response.body);
  for await (const sseChunk of iterSSEChunks(iter)) {
    for (const line of lineDecoder.decode(sseChunk)) {
      const sse = sseDecoder.decode(line);
      if (sse)
        yield sse;
    }
  }
  for (const line of lineDecoder.flush()) {
    const sse = sseDecoder.decode(line);
    if (sse)
      yield sse;
  }
}
async function* iterSSEChunks(iterator) {
  let data = new Uint8Array();
  for await (const chunk of iterator) {
    if (chunk == null) {
      continue;
    }
    const binaryChunk = chunk instanceof ArrayBuffer ? new Uint8Array(chunk) : typeof chunk === "string" ? encodeUTF8(chunk) : chunk;
    let newData = new Uint8Array(data.length + binaryChunk.length);
    newData.set(data);
    newData.set(binaryChunk, data.length);
    data = newData;
    let patternIndex;
    while ((patternIndex = findDoubleNewlineIndex(data)) !== -1) {
      yield data.slice(0, patternIndex);
      data = data.slice(patternIndex);
    }
  }
  if (data.length > 0) {
    yield data;
  }
}
var SSEDecoder = class {
  constructor() {
    this.event = null;
    this.data = [];
    this.chunks = [];
  }
  decode(line) {
    if (line.endsWith("\r")) {
      line = line.substring(0, line.length - 1);
    }
    if (!line) {
      if (!this.event && !this.data.length)
        return null;
      const sse = {
        event: this.event,
        data: this.data.join("\n"),
        raw: this.chunks
      };
      this.event = null;
      this.data = [];
      this.chunks = [];
      return sse;
    }
    this.chunks.push(line);
    if (line.startsWith(":")) {
      return null;
    }
    let [fieldname, _14, value] = partition(line, ":");
    if (value.startsWith(" ")) {
      value = value.substring(1);
    }
    if (fieldname === "event") {
      this.event = value;
    } else if (fieldname === "data") {
      this.data.push(value);
    }
    return null;
  }
};
function partition(str3, delimiter) {
  const index = str3.indexOf(delimiter);
  if (index !== -1) {
    return [str3.substring(0, index), delimiter, str3.substring(index + delimiter.length)];
  }
  return [str3, "", ""];
}

// https://esm.sh/openai@5.12.0/denonext/internal/parse.development.mjs
async function defaultParseResponse(client, props) {
  const { response, requestLogID, retryOfRequestLogID, startTime } = props;
  const body = await (async () => {
    if (props.options.stream) {
      loggerFor(client).debug("response", response.status, response.url, response.headers, response.body);
      if (props.options.__streamClass) {
        return props.options.__streamClass.fromSSEResponse(response, props.controller, client);
      }
      return Stream.fromSSEResponse(response, props.controller, client);
    }
    if (response.status === 204) {
      return null;
    }
    if (props.options.__binaryResponse) {
      return response;
    }
    const contentType = response.headers.get("content-type");
    const mediaType = contentType?.split(";")[0]?.trim();
    const isJSON = mediaType?.includes("application/json") || mediaType?.endsWith("+json");
    if (isJSON) {
      const json = await response.json();
      return addRequestID(json, response);
    }
    const text = await response.text();
    return text;
  })();
  loggerFor(client).debug(`[${requestLogID}] response parsed`, formatRequestDetails({
    retryOfRequestLogID,
    url: response.url,
    status: response.status,
    body,
    durationMs: Date.now() - startTime
  }));
  return body;
}
function addRequestID(value, response) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return value;
  }
  return Object.defineProperty(value, "_request_id", {
    value: response.headers.get("x-request-id"),
    enumerable: false
  });
}

// https://esm.sh/openai@5.12.0/denonext/core/api-promise.development.mjs
var _APIPromise_client;
var APIPromise = class _APIPromise extends Promise {
  constructor(client, responsePromise, parseResponse2 = defaultParseResponse) {
    super((resolve) => {
      resolve(null);
    });
    this.responsePromise = responsePromise;
    this.parseResponse = parseResponse2;
    _APIPromise_client.set(this, void 0);
    __classPrivateFieldSet(this, _APIPromise_client, client, "f");
  }
  _thenUnwrap(transform) {
    return new _APIPromise(__classPrivateFieldGet(this, _APIPromise_client, "f"), this.responsePromise, async (client, props) => addRequestID(transform(await this.parseResponse(client, props), props), props.response));
  }
  /**
   * Gets the raw `Response` instance instead of parsing the response
   * data.
   *
   * If you want to parse the response body but still get the `Response`
   * instance, you can use {@link withResponse()}.
   *
   * 👋 Getting the wrong TypeScript type for `Response`?
   * Try setting `"moduleResolution": "NodeNext"` or add `"lib": ["DOM"]`
   * to your `tsconfig.json`.
   */
  asResponse() {
    return this.responsePromise.then((p19) => p19.response);
  }
  /**
   * Gets the parsed response data, the raw `Response` instance and the ID of the request,
   * returned via the X-Request-ID header which is useful for debugging requests and reporting
   * issues to OpenAI.
   *
   * If you just want to get the raw `Response` instance without parsing it,
   * you can use {@link asResponse()}.
   *
   * 👋 Getting the wrong TypeScript type for `Response`?
   * Try setting `"moduleResolution": "NodeNext"` or add `"lib": ["DOM"]`
   * to your `tsconfig.json`.
   */
  async withResponse() {
    const [data, response] = await Promise.all([this.parse(), this.asResponse()]);
    return { data, response, request_id: response.headers.get("x-request-id") };
  }
  parse() {
    if (!this.parsedPromise) {
      this.parsedPromise = this.responsePromise.then((data) => this.parseResponse(__classPrivateFieldGet(this, _APIPromise_client, "f"), data));
    }
    return this.parsedPromise;
  }
  then(onfulfilled, onrejected) {
    return this.parse().then(onfulfilled, onrejected);
  }
  catch(onrejected) {
    return this.parse().catch(onrejected);
  }
  finally(onfinally) {
    return this.parse().finally(onfinally);
  }
};
_APIPromise_client = /* @__PURE__ */ new WeakMap();

// https://esm.sh/openai@5.12.0/denonext/core/pagination.development.mjs
var _AbstractPage_client;
var AbstractPage = class {
  constructor(client, response, body, options) {
    _AbstractPage_client.set(this, void 0);
    __classPrivateFieldSet(this, _AbstractPage_client, client, "f");
    this.options = options;
    this.response = response;
    this.body = body;
  }
  hasNextPage() {
    const items = this.getPaginatedItems();
    if (!items.length)
      return false;
    return this.nextPageRequestOptions() != null;
  }
  async getNextPage() {
    const nextOptions = this.nextPageRequestOptions();
    if (!nextOptions) {
      throw new OpenAIError("No next page expected; please check `.hasNextPage()` before calling `.getNextPage()`.");
    }
    return await __classPrivateFieldGet(this, _AbstractPage_client, "f").requestAPIList(this.constructor, nextOptions);
  }
  async *iterPages() {
    let page = this;
    yield page;
    while (page.hasNextPage()) {
      page = await page.getNextPage();
      yield page;
    }
  }
  async *[(_AbstractPage_client = /* @__PURE__ */ new WeakMap(), Symbol.asyncIterator)]() {
    for await (const page of this.iterPages()) {
      for (const item of page.getPaginatedItems()) {
        yield item;
      }
    }
  }
};
var PagePromise = class extends APIPromise {
  constructor(client, request, Page2) {
    super(client, request, async (client2, props) => new Page2(client2, props.response, await defaultParseResponse(client2, props), props.options));
  }
  /**
   * Allow auto-paginating iteration on an unawaited list call, eg:
   *
   *    for await (const item of client.items.list()) {
   *      console.log(item)
   *    }
   */
  async *[Symbol.asyncIterator]() {
    const page = await this;
    for await (const item of page) {
      yield item;
    }
  }
};
var Page = class extends AbstractPage {
  constructor(client, response, body, options) {
    super(client, response, body, options);
    this.data = body.data || [];
    this.object = body.object;
  }
  getPaginatedItems() {
    return this.data ?? [];
  }
  nextPageRequestOptions() {
    return null;
  }
};
var CursorPage = class extends AbstractPage {
  constructor(client, response, body, options) {
    super(client, response, body, options);
    this.data = body.data || [];
    this.has_more = body.has_more || false;
  }
  getPaginatedItems() {
    return this.data ?? [];
  }
  hasNextPage() {
    if (this.has_more === false) {
      return false;
    }
    return super.hasNextPage();
  }
  nextPageRequestOptions() {
    const data = this.getPaginatedItems();
    const id = data[data.length - 1]?.id;
    if (!id) {
      return null;
    }
    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        after: id
      }
    };
  }
};

// https://esm.sh/openai@5.12.0/denonext/internal/uploads.development.mjs
var checkFileSupport = () => {
  if (typeof File === "undefined") {
    const { process: process3 } = globalThis;
    const isOldNode = typeof process3?.versions?.node === "string" && parseInt(process3.versions.node.split(".")) < 20;
    throw new Error("`File` is not defined as a global, which is required for file uploads." + (isOldNode ? " Update to Node 20 LTS or newer, or set `globalThis.File` to `import('node:buffer').File`." : ""));
  }
};
function makeFile(fileBits, fileName, options) {
  checkFileSupport();
  return new File(fileBits, fileName ?? "unknown_file", options);
}
function getName(value) {
  return (typeof value === "object" && value !== null && ("name" in value && value.name && String(value.name) || "url" in value && value.url && String(value.url) || "filename" in value && value.filename && String(value.filename) || "path" in value && value.path && String(value.path)) || "").split(/[\\/]/).pop() || void 0;
}
var isAsyncIterable = (value) => value != null && typeof value === "object" && typeof value[Symbol.asyncIterator] === "function";
var multipartFormRequestOptions = async (opts, fetch2) => {
  return { ...opts, body: await createForm(opts.body, fetch2) };
};
var supportsFormDataMap = /* @__PURE__ */ new WeakMap();
function supportsFormData(fetchObject) {
  const fetch2 = typeof fetchObject === "function" ? fetchObject : fetchObject.fetch;
  const cached = supportsFormDataMap.get(fetch2);
  if (cached)
    return cached;
  const promise = (async () => {
    try {
      const FetchResponse = "Response" in fetch2 ? fetch2.Response : (await fetch2("data:,")).constructor;
      const data = new FormData();
      if (data.toString() === await new FetchResponse(data).text()) {
        return false;
      }
      return true;
    } catch {
      return true;
    }
  })();
  supportsFormDataMap.set(fetch2, promise);
  return promise;
}
var createForm = async (body, fetch2) => {
  if (!await supportsFormData(fetch2)) {
    throw new TypeError("The provided fetch function does not support file uploads with the current global FormData class.");
  }
  const form = new FormData();
  await Promise.all(Object.entries(body || {}).map(([key, value]) => addFormValue(form, key, value)));
  return form;
};
var isNamedBlob = (value) => value instanceof Blob && "name" in value;
var addFormValue = async (form, key, value) => {
  if (value === void 0)
    return;
  if (value == null) {
    throw new TypeError(`Received null for "${key}"; to pass null in FormData, you must use the string 'null'`);
  }
  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
    form.append(key, String(value));
  } else if (value instanceof Response) {
    form.append(key, makeFile([await value.blob()], getName(value)));
  } else if (isAsyncIterable(value)) {
    form.append(key, makeFile([await new Response(ReadableStreamFrom(value)).blob()], getName(value)));
  } else if (isNamedBlob(value)) {
    form.append(key, value, getName(value));
  } else if (Array.isArray(value)) {
    await Promise.all(value.map((entry) => addFormValue(form, key + "[]", entry)));
  } else if (typeof value === "object") {
    await Promise.all(Object.entries(value).map(([name, prop]) => addFormValue(form, `${key}[${name}]`, prop)));
  } else {
    throw new TypeError(`Invalid value given to form, expected a string, number, boolean, object, Array, File or Blob but got ${value} instead`);
  }
};

// https://esm.sh/openai@5.12.0/denonext/core/uploads.development.mjs
var isBlobLike = (value) => value != null && typeof value === "object" && typeof value.size === "number" && typeof value.type === "string" && typeof value.text === "function" && typeof value.slice === "function" && typeof value.arrayBuffer === "function";
var isFileLike = (value) => value != null && typeof value === "object" && typeof value.name === "string" && typeof value.lastModified === "number" && isBlobLike(value);
var isResponseLike = (value) => value != null && typeof value === "object" && typeof value.url === "string" && typeof value.blob === "function";
async function toFile(value, name, options) {
  checkFileSupport();
  value = await value;
  if (isFileLike(value)) {
    if (value instanceof File) {
      return value;
    }
    return makeFile([await value.arrayBuffer()], value.name);
  }
  if (isResponseLike(value)) {
    const blob = await value.blob();
    name || (name = new URL(value.url).pathname.split(/[\\/]/).pop());
    return makeFile(await getBytes(blob), name, options);
  }
  const parts = await getBytes(value);
  name || (name = getName(value));
  if (!options?.type) {
    const type = parts.find((part) => typeof part === "object" && "type" in part && part.type);
    if (typeof type === "string") {
      options = { ...options, type };
    }
  }
  return makeFile(parts, name, options);
}
async function getBytes(value) {
  let parts = [];
  if (typeof value === "string" || ArrayBuffer.isView(value) || // includes Uint8Array, Buffer, etc.
  value instanceof ArrayBuffer) {
    parts.push(value);
  } else if (isBlobLike(value)) {
    parts.push(value instanceof Blob ? value : await value.arrayBuffer());
  } else if (isAsyncIterable(value)) {
    for await (const chunk of value) {
      parts.push(...await getBytes(chunk));
    }
  } else {
    const constructor = value?.constructor?.name;
    throw new Error(`Unexpected data type: ${typeof value}${constructor ? `; constructor: ${constructor}` : ""}${propsForError(value)}`);
  }
  return parts;
}
function propsForError(value) {
  if (typeof value !== "object" || value === null)
    return "";
  const props = Object.getOwnPropertyNames(value);
  return `; props: [${props.map((p19) => `"${p19}"`).join(", ")}]`;
}

// https://esm.sh/openai@5.12.0/denonext/core/resource.development.mjs
var APIResource = class {
  constructor(client) {
    this._client = client;
  }
};

// https://esm.sh/openai@5.12.0/denonext/internal/utils/path.development.mjs
function encodeURIPath(str3) {
  return str3.replace(/[^A-Za-z0-9\-._~!$&'()*+,;=:@]+/g, encodeURIComponent);
}
var EMPTY = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.create(null));
var createPathTagFunction = (pathEncoder = encodeURIPath) => function path2(statics, ...params) {
  if (statics.length === 1)
    return statics[0];
  let postPath = false;
  const invalidSegments = [];
  const path3 = statics.reduce((previousValue, currentValue, index) => {
    if (/[?#]/.test(currentValue)) {
      postPath = true;
    }
    const value = params[index];
    let encoded = (postPath ? encodeURIComponent : pathEncoder)("" + value);
    if (index !== params.length && (value == null || typeof value === "object" && // handle values from other realms
    value.toString === Object.getPrototypeOf(Object.getPrototypeOf(value.hasOwnProperty ?? EMPTY) ?? EMPTY)?.toString)) {
      encoded = value + "";
      invalidSegments.push({
        start: previousValue.length + currentValue.length,
        length: encoded.length,
        error: `Value of type ${Object.prototype.toString.call(value).slice(8, -1)} is not a valid path parameter`
      });
    }
    return previousValue + currentValue + (index === params.length ? "" : encoded);
  }, "");
  const pathOnly = path3.split(/[?#]/, 1)[0];
  const invalidSegmentPattern = /(?<=^|\/)(?:\.|%2e){1,2}(?=\/|$)/gi;
  let match;
  while ((match = invalidSegmentPattern.exec(pathOnly)) !== null) {
    invalidSegments.push({
      start: match.index,
      length: match[0].length,
      error: `Value "${match[0]}" can't be safely passed as a path parameter`
    });
  }
  invalidSegments.sort((a11, b15) => a11.start - b15.start);
  if (invalidSegments.length > 0) {
    let lastEnd = 0;
    const underline = invalidSegments.reduce((acc, segment) => {
      const spaces = " ".repeat(segment.start - lastEnd);
      const arrows = "^".repeat(segment.length);
      lastEnd = segment.start + segment.length;
      return acc + spaces + arrows;
    }, "");
    throw new OpenAIError(`Path parameters result in path with invalid segments:
${invalidSegments.map((e7) => e7.error).join("\n")}
${path3}
${underline}`);
  }
  return path3;
};
var path = /* @__PURE__ */ createPathTagFunction(encodeURIPath);

// https://esm.sh/openai@5.12.0/denonext/lib/RunnableFunction.development.mjs
function isRunnableFunctionWithParse(fn) {
  return typeof fn.parse === "function";
}

// https://esm.sh/openai@5.12.0/denonext/lib/chatCompletionUtils.development.mjs
var isAssistantMessage = (message) => {
  return message?.role === "assistant";
};
var isToolMessage = (message) => {
  return message?.role === "tool";
};

// https://esm.sh/openai@5.12.0/denonext/lib/EventStream.development.mjs
var _EventStream_instances;
var _EventStream_connectedPromise;
var _EventStream_resolveConnectedPromise;
var _EventStream_rejectConnectedPromise;
var _EventStream_endPromise;
var _EventStream_resolveEndPromise;
var _EventStream_rejectEndPromise;
var _EventStream_listeners;
var _EventStream_ended;
var _EventStream_errored;
var _EventStream_aborted;
var _EventStream_catchingPromiseCreated;
var _EventStream_handleError;
var EventStream = class {
  constructor() {
    _EventStream_instances.add(this);
    this.controller = new AbortController();
    _EventStream_connectedPromise.set(this, void 0);
    _EventStream_resolveConnectedPromise.set(this, () => {
    });
    _EventStream_rejectConnectedPromise.set(this, () => {
    });
    _EventStream_endPromise.set(this, void 0);
    _EventStream_resolveEndPromise.set(this, () => {
    });
    _EventStream_rejectEndPromise.set(this, () => {
    });
    _EventStream_listeners.set(this, {});
    _EventStream_ended.set(this, false);
    _EventStream_errored.set(this, false);
    _EventStream_aborted.set(this, false);
    _EventStream_catchingPromiseCreated.set(this, false);
    __classPrivateFieldSet(this, _EventStream_connectedPromise, new Promise((resolve, reject) => {
      __classPrivateFieldSet(this, _EventStream_resolveConnectedPromise, resolve, "f");
      __classPrivateFieldSet(this, _EventStream_rejectConnectedPromise, reject, "f");
    }), "f");
    __classPrivateFieldSet(this, _EventStream_endPromise, new Promise((resolve, reject) => {
      __classPrivateFieldSet(this, _EventStream_resolveEndPromise, resolve, "f");
      __classPrivateFieldSet(this, _EventStream_rejectEndPromise, reject, "f");
    }), "f");
    __classPrivateFieldGet(this, _EventStream_connectedPromise, "f").catch(() => {
    });
    __classPrivateFieldGet(this, _EventStream_endPromise, "f").catch(() => {
    });
  }
  _run(executor) {
    setTimeout(() => {
      executor().then(() => {
        this._emitFinal();
        this._emit("end");
      }, __classPrivateFieldGet(this, _EventStream_instances, "m", _EventStream_handleError).bind(this));
    }, 0);
  }
  _connected() {
    if (this.ended)
      return;
    __classPrivateFieldGet(this, _EventStream_resolveConnectedPromise, "f").call(this);
    this._emit("connect");
  }
  get ended() {
    return __classPrivateFieldGet(this, _EventStream_ended, "f");
  }
  get errored() {
    return __classPrivateFieldGet(this, _EventStream_errored, "f");
  }
  get aborted() {
    return __classPrivateFieldGet(this, _EventStream_aborted, "f");
  }
  abort() {
    this.controller.abort();
  }
  /**
   * Adds the listener function to the end of the listeners array for the event.
   * No checks are made to see if the listener has already been added. Multiple calls passing
   * the same combination of event and listener will result in the listener being added, and
   * called, multiple times.
   * @returns this ChatCompletionStream, so that calls can be chained
   */
  on(event, listener) {
    const listeners = __classPrivateFieldGet(this, _EventStream_listeners, "f")[event] || (__classPrivateFieldGet(this, _EventStream_listeners, "f")[event] = []);
    listeners.push({ listener });
    return this;
  }
  /**
   * Removes the specified listener from the listener array for the event.
   * off() will remove, at most, one instance of a listener from the listener array. If any single
   * listener has been added multiple times to the listener array for the specified event, then
   * off() must be called multiple times to remove each instance.
   * @returns this ChatCompletionStream, so that calls can be chained
   */
  off(event, listener) {
    const listeners = __classPrivateFieldGet(this, _EventStream_listeners, "f")[event];
    if (!listeners)
      return this;
    const index = listeners.findIndex((l16) => l16.listener === listener);
    if (index >= 0)
      listeners.splice(index, 1);
    return this;
  }
  /**
   * Adds a one-time listener function for the event. The next time the event is triggered,
   * this listener is removed and then invoked.
   * @returns this ChatCompletionStream, so that calls can be chained
   */
  once(event, listener) {
    const listeners = __classPrivateFieldGet(this, _EventStream_listeners, "f")[event] || (__classPrivateFieldGet(this, _EventStream_listeners, "f")[event] = []);
    listeners.push({ listener, once: true });
    return this;
  }
  /**
   * This is similar to `.once()`, but returns a Promise that resolves the next time
   * the event is triggered, instead of calling a listener callback.
   * @returns a Promise that resolves the next time given event is triggered,
   * or rejects if an error is emitted.  (If you request the 'error' event,
   * returns a promise that resolves with the error).
   *
   * Example:
   *
   *   const message = await stream.emitted('message') // rejects if the stream errors
   */
  emitted(event) {
    return new Promise((resolve, reject) => {
      __classPrivateFieldSet(this, _EventStream_catchingPromiseCreated, true, "f");
      if (event !== "error")
        this.once("error", reject);
      this.once(event, resolve);
    });
  }
  async done() {
    __classPrivateFieldSet(this, _EventStream_catchingPromiseCreated, true, "f");
    await __classPrivateFieldGet(this, _EventStream_endPromise, "f");
  }
  _emit(event, ...args) {
    if (__classPrivateFieldGet(this, _EventStream_ended, "f")) {
      return;
    }
    if (event === "end") {
      __classPrivateFieldSet(this, _EventStream_ended, true, "f");
      __classPrivateFieldGet(this, _EventStream_resolveEndPromise, "f").call(this);
    }
    const listeners = __classPrivateFieldGet(this, _EventStream_listeners, "f")[event];
    if (listeners) {
      __classPrivateFieldGet(this, _EventStream_listeners, "f")[event] = listeners.filter((l16) => !l16.once);
      listeners.forEach(({ listener }) => listener(...args));
    }
    if (event === "abort") {
      const error = args[0];
      if (!__classPrivateFieldGet(this, _EventStream_catchingPromiseCreated, "f") && !listeners?.length) {
        Promise.reject(error);
      }
      __classPrivateFieldGet(this, _EventStream_rejectConnectedPromise, "f").call(this, error);
      __classPrivateFieldGet(this, _EventStream_rejectEndPromise, "f").call(this, error);
      this._emit("end");
      return;
    }
    if (event === "error") {
      const error = args[0];
      if (!__classPrivateFieldGet(this, _EventStream_catchingPromiseCreated, "f") && !listeners?.length) {
        Promise.reject(error);
      }
      __classPrivateFieldGet(this, _EventStream_rejectConnectedPromise, "f").call(this, error);
      __classPrivateFieldGet(this, _EventStream_rejectEndPromise, "f").call(this, error);
      this._emit("end");
    }
  }
  _emitFinal() {
  }
};
_EventStream_connectedPromise = /* @__PURE__ */ new WeakMap(), _EventStream_resolveConnectedPromise = /* @__PURE__ */ new WeakMap(), _EventStream_rejectConnectedPromise = /* @__PURE__ */ new WeakMap(), _EventStream_endPromise = /* @__PURE__ */ new WeakMap(), _EventStream_resolveEndPromise = /* @__PURE__ */ new WeakMap(), _EventStream_rejectEndPromise = /* @__PURE__ */ new WeakMap(), _EventStream_listeners = /* @__PURE__ */ new WeakMap(), _EventStream_ended = /* @__PURE__ */ new WeakMap(), _EventStream_errored = /* @__PURE__ */ new WeakMap(), _EventStream_aborted = /* @__PURE__ */ new WeakMap(), _EventStream_catchingPromiseCreated = /* @__PURE__ */ new WeakMap(), _EventStream_instances = /* @__PURE__ */ new WeakSet(), _EventStream_handleError = function _EventStream_handleError2(error) {
  __classPrivateFieldSet(this, _EventStream_errored, true, "f");
  if (error instanceof Error && error.name === "AbortError") {
    error = new APIUserAbortError();
  }
  if (error instanceof APIUserAbortError) {
    __classPrivateFieldSet(this, _EventStream_aborted, true, "f");
    return this._emit("abort", error);
  }
  if (error instanceof OpenAIError) {
    return this._emit("error", error);
  }
  if (error instanceof Error) {
    const openAIError = new OpenAIError(error.message);
    openAIError.cause = error;
    return this._emit("error", openAIError);
  }
  return this._emit("error", new OpenAIError(String(error)));
};

// https://esm.sh/openai@5.12.0/denonext/lib/parser.development.mjs
function isAutoParsableResponseFormat(response_format) {
  return response_format?.["$brand"] === "auto-parseable-response-format";
}
function isAutoParsableTool(tool2) {
  return tool2?.["$brand"] === "auto-parseable-tool";
}
function maybeParseChatCompletion(completion, params) {
  if (!params || !hasAutoParseableInput(params)) {
    return {
      ...completion,
      choices: completion.choices.map((choice) => ({
        ...choice,
        message: {
          ...choice.message,
          parsed: null,
          ...choice.message.tool_calls ? {
            tool_calls: choice.message.tool_calls
          } : void 0
        }
      }))
    };
  }
  return parseChatCompletion(completion, params);
}
function parseChatCompletion(completion, params) {
  const choices = completion.choices.map((choice) => {
    if (choice.finish_reason === "length") {
      throw new LengthFinishReasonError();
    }
    if (choice.finish_reason === "content_filter") {
      throw new ContentFilterFinishReasonError();
    }
    return {
      ...choice,
      message: {
        ...choice.message,
        ...choice.message.tool_calls ? {
          tool_calls: choice.message.tool_calls?.map((toolCall) => parseToolCall(params, toolCall)) ?? void 0
        } : void 0,
        parsed: choice.message.content && !choice.message.refusal ? parseResponseFormat(params, choice.message.content) : null
      }
    };
  });
  return { ...completion, choices };
}
function parseResponseFormat(params, content) {
  if (params.response_format?.type !== "json_schema") {
    return null;
  }
  if (params.response_format?.type === "json_schema") {
    if ("$parseRaw" in params.response_format) {
      const response_format = params.response_format;
      return response_format.$parseRaw(content);
    }
    return JSON.parse(content);
  }
  return null;
}
function parseToolCall(params, toolCall) {
  const inputTool = params.tools?.find((inputTool2) => inputTool2.function?.name === toolCall.function.name);
  return {
    ...toolCall,
    function: {
      ...toolCall.function,
      parsed_arguments: isAutoParsableTool(inputTool) ? inputTool.$parseRaw(toolCall.function.arguments) : inputTool?.function.strict ? JSON.parse(toolCall.function.arguments) : null
    }
  };
}
function shouldParseToolCall(params, toolCall) {
  if (!params) {
    return false;
  }
  const inputTool = params.tools?.find((inputTool2) => inputTool2.function?.name === toolCall.function.name);
  return isAutoParsableTool(inputTool) || inputTool?.function.strict || false;
}
function hasAutoParseableInput(params) {
  if (isAutoParsableResponseFormat(params.response_format)) {
    return true;
  }
  return params.tools?.some((t9) => isAutoParsableTool(t9) || t9.type === "function" && t9.function.strict === true) ?? false;
}
function validateInputTools(tools) {
  for (const tool2 of tools ?? []) {
    if (tool2.type !== "function") {
      throw new OpenAIError(`Currently only \`function\` tool types support auto-parsing; Received \`${tool2.type}\``);
    }
    if (tool2.function.strict !== true) {
      throw new OpenAIError(`The \`${tool2.function.name}\` tool is not marked with \`strict: true\`. Only strict function tools can be auto-parsed`);
    }
  }
}

// https://esm.sh/openai@5.12.0/denonext/lib/AbstractChatCompletionRunner.development.mjs
var _AbstractChatCompletionRunner_instances;
var _AbstractChatCompletionRunner_getFinalContent;
var _AbstractChatCompletionRunner_getFinalMessage;
var _AbstractChatCompletionRunner_getFinalFunctionToolCall;
var _AbstractChatCompletionRunner_getFinalFunctionToolCallResult;
var _AbstractChatCompletionRunner_calculateTotalUsage;
var _AbstractChatCompletionRunner_validateParams;
var _AbstractChatCompletionRunner_stringifyFunctionCallResult;
var DEFAULT_MAX_CHAT_COMPLETIONS = 10;
var AbstractChatCompletionRunner = class extends EventStream {
  constructor() {
    super(...arguments);
    _AbstractChatCompletionRunner_instances.add(this);
    this._chatCompletions = [];
    this.messages = [];
  }
  _addChatCompletion(chatCompletion) {
    this._chatCompletions.push(chatCompletion);
    this._emit("chatCompletion", chatCompletion);
    const message = chatCompletion.choices[0]?.message;
    if (message)
      this._addMessage(message);
    return chatCompletion;
  }
  _addMessage(message, emit = true) {
    if (!("content" in message))
      message.content = null;
    this.messages.push(message);
    if (emit) {
      this._emit("message", message);
      if (isToolMessage(message) && message.content) {
        this._emit("functionToolCallResult", message.content);
      } else if (isAssistantMessage(message) && message.tool_calls) {
        for (const tool_call of message.tool_calls) {
          if (tool_call.type === "function") {
            this._emit("functionToolCall", tool_call.function);
          }
        }
      }
    }
  }
  /**
   * @returns a promise that resolves with the final ChatCompletion, or rejects
   * if an error occurred or the stream ended prematurely without producing a ChatCompletion.
   */
  async finalChatCompletion() {
    await this.done();
    const completion = this._chatCompletions[this._chatCompletions.length - 1];
    if (!completion)
      throw new OpenAIError("stream ended without producing a ChatCompletion");
    return completion;
  }
  /**
   * @returns a promise that resolves with the content of the final ChatCompletionMessage, or rejects
   * if an error occurred or the stream ended prematurely without producing a ChatCompletionMessage.
   */
  async finalContent() {
    await this.done();
    return __classPrivateFieldGet(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_getFinalContent).call(this);
  }
  /**
   * @returns a promise that resolves with the the final assistant ChatCompletionMessage response,
   * or rejects if an error occurred or the stream ended prematurely without producing a ChatCompletionMessage.
   */
  async finalMessage() {
    await this.done();
    return __classPrivateFieldGet(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_getFinalMessage).call(this);
  }
  /**
   * @returns a promise that resolves with the content of the final FunctionCall, or rejects
   * if an error occurred or the stream ended prematurely without producing a ChatCompletionMessage.
   */
  async finalFunctionToolCall() {
    await this.done();
    return __classPrivateFieldGet(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_getFinalFunctionToolCall).call(this);
  }
  async finalFunctionToolCallResult() {
    await this.done();
    return __classPrivateFieldGet(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_getFinalFunctionToolCallResult).call(this);
  }
  async totalUsage() {
    await this.done();
    return __classPrivateFieldGet(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_calculateTotalUsage).call(this);
  }
  allChatCompletions() {
    return [...this._chatCompletions];
  }
  _emitFinal() {
    const completion = this._chatCompletions[this._chatCompletions.length - 1];
    if (completion)
      this._emit("finalChatCompletion", completion);
    const finalMessage = __classPrivateFieldGet(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_getFinalMessage).call(this);
    if (finalMessage)
      this._emit("finalMessage", finalMessage);
    const finalContent = __classPrivateFieldGet(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_getFinalContent).call(this);
    if (finalContent)
      this._emit("finalContent", finalContent);
    const finalFunctionCall = __classPrivateFieldGet(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_getFinalFunctionToolCall).call(this);
    if (finalFunctionCall)
      this._emit("finalFunctionToolCall", finalFunctionCall);
    const finalFunctionCallResult = __classPrivateFieldGet(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_getFinalFunctionToolCallResult).call(this);
    if (finalFunctionCallResult != null)
      this._emit("finalFunctionToolCallResult", finalFunctionCallResult);
    if (this._chatCompletions.some((c18) => c18.usage)) {
      this._emit("totalUsage", __classPrivateFieldGet(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_calculateTotalUsage).call(this));
    }
  }
  async _createChatCompletion(client, params, options) {
    const signal = options?.signal;
    if (signal) {
      if (signal.aborted)
        this.controller.abort();
      signal.addEventListener("abort", () => this.controller.abort());
    }
    __classPrivateFieldGet(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_validateParams).call(this, params);
    const chatCompletion = await client.chat.completions.create({ ...params, stream: false }, { ...options, signal: this.controller.signal });
    this._connected();
    return this._addChatCompletion(parseChatCompletion(chatCompletion, params));
  }
  async _runChatCompletion(client, params, options) {
    for (const message of params.messages) {
      this._addMessage(message, false);
    }
    return await this._createChatCompletion(client, params, options);
  }
  async _runTools(client, params, options) {
    const role = "tool";
    const { tool_choice = "auto", stream: stream2, ...restParams } = params;
    const singleFunctionToCall = typeof tool_choice !== "string" && tool_choice?.function?.name;
    const { maxChatCompletions = DEFAULT_MAX_CHAT_COMPLETIONS } = options || {};
    const inputTools = params.tools.map((tool2) => {
      if (isAutoParsableTool(tool2)) {
        if (!tool2.$callback) {
          throw new OpenAIError("Tool given to `.runTools()` that does not have an associated function");
        }
        return {
          type: "function",
          function: {
            function: tool2.$callback,
            name: tool2.function.name,
            description: tool2.function.description || "",
            parameters: tool2.function.parameters,
            parse: tool2.$parseRaw,
            strict: true
          }
        };
      }
      return tool2;
    });
    const functionsByName = {};
    for (const f14 of inputTools) {
      if (f14.type === "function") {
        functionsByName[f14.function.name || f14.function.function.name] = f14.function;
      }
    }
    const tools = "tools" in params ? inputTools.map((t9) => t9.type === "function" ? {
      type: "function",
      function: {
        name: t9.function.name || t9.function.function.name,
        parameters: t9.function.parameters,
        description: t9.function.description,
        strict: t9.function.strict
      }
    } : t9) : void 0;
    for (const message of params.messages) {
      this._addMessage(message, false);
    }
    for (let i21 = 0; i21 < maxChatCompletions; ++i21) {
      const chatCompletion = await this._createChatCompletion(client, {
        ...restParams,
        tool_choice,
        tools,
        messages: [...this.messages]
      }, options);
      const message = chatCompletion.choices[0]?.message;
      if (!message) {
        throw new OpenAIError(`missing message in ChatCompletion response`);
      }
      if (!message.tool_calls?.length) {
        return;
      }
      for (const tool_call of message.tool_calls) {
        if (tool_call.type !== "function")
          continue;
        const tool_call_id = tool_call.id;
        const { name, arguments: args } = tool_call.function;
        const fn = functionsByName[name];
        if (!fn) {
          const content2 = `Invalid tool_call: ${JSON.stringify(name)}. Available options are: ${Object.keys(functionsByName).map((name2) => JSON.stringify(name2)).join(", ")}. Please try again`;
          this._addMessage({ role, tool_call_id, content: content2 });
          continue;
        } else if (singleFunctionToCall && singleFunctionToCall !== name) {
          const content2 = `Invalid tool_call: ${JSON.stringify(name)}. ${JSON.stringify(singleFunctionToCall)} requested. Please try again`;
          this._addMessage({ role, tool_call_id, content: content2 });
          continue;
        }
        let parsed;
        try {
          parsed = isRunnableFunctionWithParse(fn) ? await fn.parse(args) : args;
        } catch (error) {
          const content2 = error instanceof Error ? error.message : String(error);
          this._addMessage({ role, tool_call_id, content: content2 });
          continue;
        }
        const rawContent = await fn.function(parsed, this);
        const content = __classPrivateFieldGet(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_stringifyFunctionCallResult).call(this, rawContent);
        this._addMessage({ role, tool_call_id, content });
        if (singleFunctionToCall) {
          return;
        }
      }
    }
    return;
  }
};
_AbstractChatCompletionRunner_instances = /* @__PURE__ */ new WeakSet(), _AbstractChatCompletionRunner_getFinalContent = function _AbstractChatCompletionRunner_getFinalContent2() {
  return __classPrivateFieldGet(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_getFinalMessage).call(this).content ?? null;
}, _AbstractChatCompletionRunner_getFinalMessage = function _AbstractChatCompletionRunner_getFinalMessage2() {
  let i21 = this.messages.length;
  while (i21-- > 0) {
    const message = this.messages[i21];
    if (isAssistantMessage(message)) {
      const ret = {
        ...message,
        content: message.content ?? null,
        refusal: message.refusal ?? null
      };
      return ret;
    }
  }
  throw new OpenAIError("stream ended without producing a ChatCompletionMessage with role=assistant");
}, _AbstractChatCompletionRunner_getFinalFunctionToolCall = function _AbstractChatCompletionRunner_getFinalFunctionToolCall2() {
  for (let i21 = this.messages.length - 1; i21 >= 0; i21--) {
    const message = this.messages[i21];
    if (isAssistantMessage(message) && message?.tool_calls?.length) {
      return message.tool_calls.at(-1)?.function;
    }
  }
  return;
}, _AbstractChatCompletionRunner_getFinalFunctionToolCallResult = function _AbstractChatCompletionRunner_getFinalFunctionToolCallResult2() {
  for (let i21 = this.messages.length - 1; i21 >= 0; i21--) {
    const message = this.messages[i21];
    if (isToolMessage(message) && message.content != null && typeof message.content === "string" && this.messages.some((x16) => x16.role === "assistant" && x16.tool_calls?.some((y15) => y15.type === "function" && y15.id === message.tool_call_id))) {
      return message.content;
    }
  }
  return;
}, _AbstractChatCompletionRunner_calculateTotalUsage = function _AbstractChatCompletionRunner_calculateTotalUsage2() {
  const total = {
    completion_tokens: 0,
    prompt_tokens: 0,
    total_tokens: 0
  };
  for (const { usage } of this._chatCompletions) {
    if (usage) {
      total.completion_tokens += usage.completion_tokens;
      total.prompt_tokens += usage.prompt_tokens;
      total.total_tokens += usage.total_tokens;
    }
  }
  return total;
}, _AbstractChatCompletionRunner_validateParams = function _AbstractChatCompletionRunner_validateParams2(params) {
  if (params.n != null && params.n > 1) {
    throw new OpenAIError("ChatCompletion convenience helpers only support n=1 at this time. To use n>1, please use chat.completions.create() directly.");
  }
}, _AbstractChatCompletionRunner_stringifyFunctionCallResult = function _AbstractChatCompletionRunner_stringifyFunctionCallResult2(rawContent) {
  return typeof rawContent === "string" ? rawContent : rawContent === void 0 ? "undefined" : JSON.stringify(rawContent);
};

// https://esm.sh/openai@5.12.0/denonext/resources/chat/chat.development.mjs
var Messages = class extends APIResource {
  /**
   * Get the messages in a stored chat completion. Only Chat Completions that have
   * been created with the `store` parameter set to `true` will be returned.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const chatCompletionStoreMessage of client.chat.completions.messages.list(
   *   'completion_id',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(completionID, query = {}, options) {
    return this._client.getAPIList(path`/chat/completions/${completionID}/messages`, CursorPage, { query, ...options });
  }
};
var ChatCompletionRunner = class _ChatCompletionRunner extends AbstractChatCompletionRunner {
  static runTools(client, params, options) {
    const runner = new _ChatCompletionRunner();
    const opts = {
      ...options,
      headers: { ...options?.headers, "X-Stainless-Helper-Method": "runTools" }
    };
    runner._run(() => runner._runTools(client, params, opts));
    return runner;
  }
  _addMessage(message, emit = true) {
    super._addMessage(message, emit);
    if (isAssistantMessage(message) && message.content) {
      this._emit("content", message.content);
    }
  }
};
var STR = 1;
var NUM = 2;
var ARR = 4;
var OBJ = 8;
var NULL = 16;
var BOOL = 32;
var NAN = 64;
var INFINITY = 128;
var MINUS_INFINITY = 256;
var INF = INFINITY | MINUS_INFINITY;
var SPECIAL = NULL | BOOL | INF | NAN;
var ATOM = STR | NUM | SPECIAL;
var COLLECTION = ARR | OBJ;
var ALL = ATOM | COLLECTION;
var Allow = {
  STR,
  NUM,
  ARR,
  OBJ,
  NULL,
  BOOL,
  NAN,
  INFINITY,
  MINUS_INFINITY,
  INF,
  SPECIAL,
  ATOM,
  COLLECTION,
  ALL
};
var PartialJSON = class extends Error {
};
var MalformedJSON = class extends Error {
};
function parseJSON(jsonString, allowPartial = Allow.ALL) {
  if (typeof jsonString !== "string") {
    throw new TypeError(`expecting str, got ${typeof jsonString}`);
  }
  if (!jsonString.trim()) {
    throw new Error(`${jsonString} is empty`);
  }
  return _parseJSON(jsonString.trim(), allowPartial);
}
var _parseJSON = (jsonString, allow) => {
  const length = jsonString.length;
  let index = 0;
  const markPartialJSON = (msg) => {
    throw new PartialJSON(`${msg} at position ${index}`);
  };
  const throwMalformedError = (msg) => {
    throw new MalformedJSON(`${msg} at position ${index}`);
  };
  const parseAny = () => {
    skipBlank();
    if (index >= length)
      markPartialJSON("Unexpected end of input");
    if (jsonString[index] === '"')
      return parseStr();
    if (jsonString[index] === "{")
      return parseObj();
    if (jsonString[index] === "[")
      return parseArr();
    if (jsonString.substring(index, index + 4) === "null" || Allow.NULL & allow && length - index < 4 && "null".startsWith(jsonString.substring(index))) {
      index += 4;
      return null;
    }
    if (jsonString.substring(index, index + 4) === "true" || Allow.BOOL & allow && length - index < 4 && "true".startsWith(jsonString.substring(index))) {
      index += 4;
      return true;
    }
    if (jsonString.substring(index, index + 5) === "false" || Allow.BOOL & allow && length - index < 5 && "false".startsWith(jsonString.substring(index))) {
      index += 5;
      return false;
    }
    if (jsonString.substring(index, index + 8) === "Infinity" || Allow.INFINITY & allow && length - index < 8 && "Infinity".startsWith(jsonString.substring(index))) {
      index += 8;
      return Infinity;
    }
    if (jsonString.substring(index, index + 9) === "-Infinity" || Allow.MINUS_INFINITY & allow && 1 < length - index && length - index < 9 && "-Infinity".startsWith(jsonString.substring(index))) {
      index += 9;
      return -Infinity;
    }
    if (jsonString.substring(index, index + 3) === "NaN" || Allow.NAN & allow && length - index < 3 && "NaN".startsWith(jsonString.substring(index))) {
      index += 3;
      return NaN;
    }
    return parseNum();
  };
  const parseStr = () => {
    const start = index;
    let escape2 = false;
    index++;
    while (index < length && (jsonString[index] !== '"' || escape2 && jsonString[index - 1] === "\\")) {
      escape2 = jsonString[index] === "\\" ? !escape2 : false;
      index++;
    }
    if (jsonString.charAt(index) == '"') {
      try {
        return JSON.parse(jsonString.substring(start, ++index - Number(escape2)));
      } catch (e7) {
        throwMalformedError(String(e7));
      }
    } else if (Allow.STR & allow) {
      try {
        return JSON.parse(jsonString.substring(start, index - Number(escape2)) + '"');
      } catch (e7) {
        return JSON.parse(jsonString.substring(start, jsonString.lastIndexOf("\\")) + '"');
      }
    }
    markPartialJSON("Unterminated string literal");
  };
  const parseObj = () => {
    index++;
    skipBlank();
    const obj = {};
    try {
      while (jsonString[index] !== "}") {
        skipBlank();
        if (index >= length && Allow.OBJ & allow)
          return obj;
        const key = parseStr();
        skipBlank();
        index++;
        try {
          const value = parseAny();
          Object.defineProperty(obj, key, { value, writable: true, enumerable: true, configurable: true });
        } catch (e7) {
          if (Allow.OBJ & allow)
            return obj;
          else
            throw e7;
        }
        skipBlank();
        if (jsonString[index] === ",")
          index++;
      }
    } catch (e7) {
      if (Allow.OBJ & allow)
        return obj;
      else
        markPartialJSON("Expected '}' at end of object");
    }
    index++;
    return obj;
  };
  const parseArr = () => {
    index++;
    const arr = [];
    try {
      while (jsonString[index] !== "]") {
        arr.push(parseAny());
        skipBlank();
        if (jsonString[index] === ",") {
          index++;
        }
      }
    } catch (e7) {
      if (Allow.ARR & allow) {
        return arr;
      }
      markPartialJSON("Expected ']' at end of array");
    }
    index++;
    return arr;
  };
  const parseNum = () => {
    if (index === 0) {
      if (jsonString === "-" && Allow.NUM & allow)
        markPartialJSON("Not sure what '-' is");
      try {
        return JSON.parse(jsonString);
      } catch (e7) {
        if (Allow.NUM & allow) {
          try {
            if ("." === jsonString[jsonString.length - 1])
              return JSON.parse(jsonString.substring(0, jsonString.lastIndexOf(".")));
            return JSON.parse(jsonString.substring(0, jsonString.lastIndexOf("e")));
          } catch (e22) {
          }
        }
        throwMalformedError(String(e7));
      }
    }
    const start = index;
    if (jsonString[index] === "-")
      index++;
    while (jsonString[index] && !",]}".includes(jsonString[index]))
      index++;
    if (index == length && !(Allow.NUM & allow))
      markPartialJSON("Unterminated number literal");
    try {
      return JSON.parse(jsonString.substring(start, index));
    } catch (e7) {
      if (jsonString.substring(start, index) === "-" && Allow.NUM & allow)
        markPartialJSON("Not sure what '-' is");
      try {
        return JSON.parse(jsonString.substring(start, jsonString.lastIndexOf("e")));
      } catch (e22) {
        throwMalformedError(String(e22));
      }
    }
  };
  const skipBlank = () => {
    while (index < length && " \n\r	".includes(jsonString[index])) {
      index++;
    }
  };
  return parseAny();
};
var partialParse = (input) => parseJSON(input, Allow.ALL ^ Allow.NUM);
var _ChatCompletionStream_instances;
var _ChatCompletionStream_params;
var _ChatCompletionStream_choiceEventStates;
var _ChatCompletionStream_currentChatCompletionSnapshot;
var _ChatCompletionStream_beginRequest;
var _ChatCompletionStream_getChoiceEventState;
var _ChatCompletionStream_addChunk;
var _ChatCompletionStream_emitToolCallDoneEvent;
var _ChatCompletionStream_emitContentDoneEvents;
var _ChatCompletionStream_endRequest;
var _ChatCompletionStream_getAutoParseableResponseFormat;
var _ChatCompletionStream_accumulateChatCompletion;
var ChatCompletionStream = class _ChatCompletionStream extends AbstractChatCompletionRunner {
  constructor(params) {
    super();
    _ChatCompletionStream_instances.add(this);
    _ChatCompletionStream_params.set(this, void 0);
    _ChatCompletionStream_choiceEventStates.set(this, void 0);
    _ChatCompletionStream_currentChatCompletionSnapshot.set(this, void 0);
    __classPrivateFieldSet(this, _ChatCompletionStream_params, params, "f");
    __classPrivateFieldSet(this, _ChatCompletionStream_choiceEventStates, [], "f");
  }
  get currentChatCompletionSnapshot() {
    return __classPrivateFieldGet(this, _ChatCompletionStream_currentChatCompletionSnapshot, "f");
  }
  /**
   * Intended for use on the frontend, consuming a stream produced with
   * `.toReadableStream()` on the backend.
   *
   * Note that messages sent to the model do not appear in `.on('message')`
   * in this context.
   */
  static fromReadableStream(stream2) {
    const runner = new _ChatCompletionStream(null);
    runner._run(() => runner._fromReadableStream(stream2));
    return runner;
  }
  static createChatCompletion(client, params, options) {
    const runner = new _ChatCompletionStream(params);
    runner._run(() => runner._runChatCompletion(client, { ...params, stream: true }, { ...options, headers: { ...options?.headers, "X-Stainless-Helper-Method": "stream" } }));
    return runner;
  }
  async _createChatCompletion(client, params, options) {
    super._createChatCompletion;
    const signal = options?.signal;
    if (signal) {
      if (signal.aborted)
        this.controller.abort();
      signal.addEventListener("abort", () => this.controller.abort());
    }
    __classPrivateFieldGet(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_beginRequest).call(this);
    const stream2 = await client.chat.completions.create({ ...params, stream: true }, { ...options, signal: this.controller.signal });
    this._connected();
    for await (const chunk of stream2) {
      __classPrivateFieldGet(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_addChunk).call(this, chunk);
    }
    if (stream2.controller.signal?.aborted) {
      throw new APIUserAbortError();
    }
    return this._addChatCompletion(__classPrivateFieldGet(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_endRequest).call(this));
  }
  async _fromReadableStream(readableStream, options) {
    const signal = options?.signal;
    if (signal) {
      if (signal.aborted)
        this.controller.abort();
      signal.addEventListener("abort", () => this.controller.abort());
    }
    __classPrivateFieldGet(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_beginRequest).call(this);
    this._connected();
    const stream2 = Stream.fromReadableStream(readableStream, this.controller);
    let chatId;
    for await (const chunk of stream2) {
      if (chatId && chatId !== chunk.id) {
        this._addChatCompletion(__classPrivateFieldGet(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_endRequest).call(this));
      }
      __classPrivateFieldGet(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_addChunk).call(this, chunk);
      chatId = chunk.id;
    }
    if (stream2.controller.signal?.aborted) {
      throw new APIUserAbortError();
    }
    return this._addChatCompletion(__classPrivateFieldGet(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_endRequest).call(this));
  }
  [(_ChatCompletionStream_params = /* @__PURE__ */ new WeakMap(), _ChatCompletionStream_choiceEventStates = /* @__PURE__ */ new WeakMap(), _ChatCompletionStream_currentChatCompletionSnapshot = /* @__PURE__ */ new WeakMap(), _ChatCompletionStream_instances = /* @__PURE__ */ new WeakSet(), _ChatCompletionStream_beginRequest = function _ChatCompletionStream_beginRequest22() {
    if (this.ended)
      return;
    __classPrivateFieldSet(this, _ChatCompletionStream_currentChatCompletionSnapshot, void 0, "f");
  }, _ChatCompletionStream_getChoiceEventState = function _ChatCompletionStream_getChoiceEventState22(choice) {
    let state = __classPrivateFieldGet(this, _ChatCompletionStream_choiceEventStates, "f")[choice.index];
    if (state) {
      return state;
    }
    state = {
      content_done: false,
      refusal_done: false,
      logprobs_content_done: false,
      logprobs_refusal_done: false,
      done_tool_calls: /* @__PURE__ */ new Set(),
      current_tool_call_index: null
    };
    __classPrivateFieldGet(this, _ChatCompletionStream_choiceEventStates, "f")[choice.index] = state;
    return state;
  }, _ChatCompletionStream_addChunk = function _ChatCompletionStream_addChunk22(chunk) {
    if (this.ended)
      return;
    const completion = __classPrivateFieldGet(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_accumulateChatCompletion).call(this, chunk);
    this._emit("chunk", chunk, completion);
    for (const choice of chunk.choices) {
      const choiceSnapshot = completion.choices[choice.index];
      if (choice.delta.content != null && choiceSnapshot.message?.role === "assistant" && choiceSnapshot.message?.content) {
        this._emit("content", choice.delta.content, choiceSnapshot.message.content);
        this._emit("content.delta", {
          delta: choice.delta.content,
          snapshot: choiceSnapshot.message.content,
          parsed: choiceSnapshot.message.parsed
        });
      }
      if (choice.delta.refusal != null && choiceSnapshot.message?.role === "assistant" && choiceSnapshot.message?.refusal) {
        this._emit("refusal.delta", {
          delta: choice.delta.refusal,
          snapshot: choiceSnapshot.message.refusal
        });
      }
      if (choice.logprobs?.content != null && choiceSnapshot.message?.role === "assistant") {
        this._emit("logprobs.content.delta", {
          content: choice.logprobs?.content,
          snapshot: choiceSnapshot.logprobs?.content ?? []
        });
      }
      if (choice.logprobs?.refusal != null && choiceSnapshot.message?.role === "assistant") {
        this._emit("logprobs.refusal.delta", {
          refusal: choice.logprobs?.refusal,
          snapshot: choiceSnapshot.logprobs?.refusal ?? []
        });
      }
      const state = __classPrivateFieldGet(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_getChoiceEventState).call(this, choiceSnapshot);
      if (choiceSnapshot.finish_reason) {
        __classPrivateFieldGet(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_emitContentDoneEvents).call(this, choiceSnapshot);
        if (state.current_tool_call_index != null) {
          __classPrivateFieldGet(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_emitToolCallDoneEvent).call(this, choiceSnapshot, state.current_tool_call_index);
        }
      }
      for (const toolCall of choice.delta.tool_calls ?? []) {
        if (state.current_tool_call_index !== toolCall.index) {
          __classPrivateFieldGet(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_emitContentDoneEvents).call(this, choiceSnapshot);
          if (state.current_tool_call_index != null) {
            __classPrivateFieldGet(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_emitToolCallDoneEvent).call(this, choiceSnapshot, state.current_tool_call_index);
          }
        }
        state.current_tool_call_index = toolCall.index;
      }
      for (const toolCallDelta of choice.delta.tool_calls ?? []) {
        const toolCallSnapshot = choiceSnapshot.message.tool_calls?.[toolCallDelta.index];
        if (!toolCallSnapshot?.type) {
          continue;
        }
        if (toolCallSnapshot?.type === "function") {
          this._emit("tool_calls.function.arguments.delta", {
            name: toolCallSnapshot.function?.name,
            index: toolCallDelta.index,
            arguments: toolCallSnapshot.function.arguments,
            parsed_arguments: toolCallSnapshot.function.parsed_arguments,
            arguments_delta: toolCallDelta.function?.arguments ?? ""
          });
        } else {
          assertNever(toolCallSnapshot?.type);
        }
      }
    }
  }, _ChatCompletionStream_emitToolCallDoneEvent = function _ChatCompletionStream_emitToolCallDoneEvent22(choiceSnapshot, toolCallIndex) {
    const state = __classPrivateFieldGet(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_getChoiceEventState).call(this, choiceSnapshot);
    if (state.done_tool_calls.has(toolCallIndex)) {
      return;
    }
    const toolCallSnapshot = choiceSnapshot.message.tool_calls?.[toolCallIndex];
    if (!toolCallSnapshot) {
      throw new Error("no tool call snapshot");
    }
    if (!toolCallSnapshot.type) {
      throw new Error("tool call snapshot missing `type`");
    }
    if (toolCallSnapshot.type === "function") {
      const inputTool = __classPrivateFieldGet(this, _ChatCompletionStream_params, "f")?.tools?.find((tool2) => tool2.type === "function" && tool2.function.name === toolCallSnapshot.function.name);
      this._emit("tool_calls.function.arguments.done", {
        name: toolCallSnapshot.function.name,
        index: toolCallIndex,
        arguments: toolCallSnapshot.function.arguments,
        parsed_arguments: isAutoParsableTool(inputTool) ? inputTool.$parseRaw(toolCallSnapshot.function.arguments) : inputTool?.function.strict ? JSON.parse(toolCallSnapshot.function.arguments) : null
      });
    } else {
      assertNever(toolCallSnapshot.type);
    }
  }, _ChatCompletionStream_emitContentDoneEvents = function _ChatCompletionStream_emitContentDoneEvents22(choiceSnapshot) {
    const state = __classPrivateFieldGet(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_getChoiceEventState).call(this, choiceSnapshot);
    if (choiceSnapshot.message.content && !state.content_done) {
      state.content_done = true;
      const responseFormat = __classPrivateFieldGet(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_getAutoParseableResponseFormat).call(this);
      this._emit("content.done", {
        content: choiceSnapshot.message.content,
        parsed: responseFormat ? responseFormat.$parseRaw(choiceSnapshot.message.content) : null
      });
    }
    if (choiceSnapshot.message.refusal && !state.refusal_done) {
      state.refusal_done = true;
      this._emit("refusal.done", { refusal: choiceSnapshot.message.refusal });
    }
    if (choiceSnapshot.logprobs?.content && !state.logprobs_content_done) {
      state.logprobs_content_done = true;
      this._emit("logprobs.content.done", { content: choiceSnapshot.logprobs.content });
    }
    if (choiceSnapshot.logprobs?.refusal && !state.logprobs_refusal_done) {
      state.logprobs_refusal_done = true;
      this._emit("logprobs.refusal.done", { refusal: choiceSnapshot.logprobs.refusal });
    }
  }, _ChatCompletionStream_endRequest = function _ChatCompletionStream_endRequest22() {
    if (this.ended) {
      throw new OpenAIError(`stream has ended, this shouldn't happen`);
    }
    const snapshot = __classPrivateFieldGet(this, _ChatCompletionStream_currentChatCompletionSnapshot, "f");
    if (!snapshot) {
      throw new OpenAIError(`request ended without sending any chunks`);
    }
    __classPrivateFieldSet(this, _ChatCompletionStream_currentChatCompletionSnapshot, void 0, "f");
    __classPrivateFieldSet(this, _ChatCompletionStream_choiceEventStates, [], "f");
    return finalizeChatCompletion(snapshot, __classPrivateFieldGet(this, _ChatCompletionStream_params, "f"));
  }, _ChatCompletionStream_getAutoParseableResponseFormat = function _ChatCompletionStream_getAutoParseableResponseFormat22() {
    const responseFormat = __classPrivateFieldGet(this, _ChatCompletionStream_params, "f")?.response_format;
    if (isAutoParsableResponseFormat(responseFormat)) {
      return responseFormat;
    }
    return null;
  }, _ChatCompletionStream_accumulateChatCompletion = function _ChatCompletionStream_accumulateChatCompletion22(chunk) {
    var _a3, _b, _c, _d;
    let snapshot = __classPrivateFieldGet(this, _ChatCompletionStream_currentChatCompletionSnapshot, "f");
    const { choices, ...rest } = chunk;
    if (!snapshot) {
      snapshot = __classPrivateFieldSet(this, _ChatCompletionStream_currentChatCompletionSnapshot, {
        ...rest,
        choices: []
      }, "f");
    } else {
      Object.assign(snapshot, rest);
    }
    for (const { delta, finish_reason, index, logprobs = null, ...other } of chunk.choices) {
      let choice = snapshot.choices[index];
      if (!choice) {
        choice = snapshot.choices[index] = { finish_reason, index, message: {}, logprobs, ...other };
      }
      if (logprobs) {
        if (!choice.logprobs) {
          choice.logprobs = Object.assign({}, logprobs);
        } else {
          const { content: content2, refusal: refusal2, ...rest3 } = logprobs;
          assertIsEmpty(rest3);
          Object.assign(choice.logprobs, rest3);
          if (content2) {
            (_a3 = choice.logprobs).content ?? (_a3.content = []);
            choice.logprobs.content.push(...content2);
          }
          if (refusal2) {
            (_b = choice.logprobs).refusal ?? (_b.refusal = []);
            choice.logprobs.refusal.push(...refusal2);
          }
        }
      }
      if (finish_reason) {
        choice.finish_reason = finish_reason;
        if (__classPrivateFieldGet(this, _ChatCompletionStream_params, "f") && hasAutoParseableInput(__classPrivateFieldGet(this, _ChatCompletionStream_params, "f"))) {
          if (finish_reason === "length") {
            throw new LengthFinishReasonError();
          }
          if (finish_reason === "content_filter") {
            throw new ContentFilterFinishReasonError();
          }
        }
      }
      Object.assign(choice, other);
      if (!delta)
        continue;
      const { content, refusal, function_call, role, tool_calls, ...rest2 } = delta;
      assertIsEmpty(rest2);
      Object.assign(choice.message, rest2);
      if (refusal) {
        choice.message.refusal = (choice.message.refusal || "") + refusal;
      }
      if (role)
        choice.message.role = role;
      if (function_call) {
        if (!choice.message.function_call) {
          choice.message.function_call = function_call;
        } else {
          if (function_call.name)
            choice.message.function_call.name = function_call.name;
          if (function_call.arguments) {
            (_c = choice.message.function_call).arguments ?? (_c.arguments = "");
            choice.message.function_call.arguments += function_call.arguments;
          }
        }
      }
      if (content) {
        choice.message.content = (choice.message.content || "") + content;
        if (!choice.message.refusal && __classPrivateFieldGet(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_getAutoParseableResponseFormat).call(this)) {
          choice.message.parsed = partialParse(choice.message.content);
        }
      }
      if (tool_calls) {
        if (!choice.message.tool_calls)
          choice.message.tool_calls = [];
        for (const { index: index2, id, type, function: fn, ...rest3 } of tool_calls) {
          const tool_call = (_d = choice.message.tool_calls)[index2] ?? (_d[index2] = {});
          Object.assign(tool_call, rest3);
          if (id)
            tool_call.id = id;
          if (type)
            tool_call.type = type;
          if (fn)
            tool_call.function ?? (tool_call.function = { name: fn.name ?? "", arguments: "" });
          if (fn?.name)
            tool_call.function.name = fn.name;
          if (fn?.arguments) {
            tool_call.function.arguments += fn.arguments;
            if (shouldParseToolCall(__classPrivateFieldGet(this, _ChatCompletionStream_params, "f"), tool_call)) {
              tool_call.function.parsed_arguments = partialParse(tool_call.function.arguments);
            }
          }
        }
      }
    }
    return snapshot;
  }, Symbol.asyncIterator)]() {
    const pushQueue = [];
    const readQueue = [];
    let done = false;
    this.on("chunk", (chunk) => {
      const reader = readQueue.shift();
      if (reader) {
        reader.resolve(chunk);
      } else {
        pushQueue.push(chunk);
      }
    });
    this.on("end", () => {
      done = true;
      for (const reader of readQueue) {
        reader.resolve(void 0);
      }
      readQueue.length = 0;
    });
    this.on("abort", (err) => {
      done = true;
      for (const reader of readQueue) {
        reader.reject(err);
      }
      readQueue.length = 0;
    });
    this.on("error", (err) => {
      done = true;
      for (const reader of readQueue) {
        reader.reject(err);
      }
      readQueue.length = 0;
    });
    return {
      next: async () => {
        if (!pushQueue.length) {
          if (done) {
            return { value: void 0, done: true };
          }
          return new Promise((resolve, reject) => readQueue.push({ resolve, reject })).then((chunk2) => chunk2 ? { value: chunk2, done: false } : { value: void 0, done: true });
        }
        const chunk = pushQueue.shift();
        return { value: chunk, done: false };
      },
      return: async () => {
        this.abort();
        return { value: void 0, done: true };
      }
    };
  }
  toReadableStream() {
    const stream2 = new Stream(this[Symbol.asyncIterator].bind(this), this.controller);
    return stream2.toReadableStream();
  }
};
function finalizeChatCompletion(snapshot, params) {
  const { id, choices, created, model: model2, system_fingerprint, ...rest } = snapshot;
  const completion = {
    ...rest,
    id,
    choices: choices.map(({ message, finish_reason, index, logprobs, ...choiceRest }) => {
      if (!finish_reason) {
        throw new OpenAIError(`missing finish_reason for choice ${index}`);
      }
      const { content = null, function_call, tool_calls, ...messageRest } = message;
      const role = message.role;
      if (!role) {
        throw new OpenAIError(`missing role for choice ${index}`);
      }
      if (function_call) {
        const { arguments: args, name } = function_call;
        if (args == null) {
          throw new OpenAIError(`missing function_call.arguments for choice ${index}`);
        }
        if (!name) {
          throw new OpenAIError(`missing function_call.name for choice ${index}`);
        }
        return {
          ...choiceRest,
          message: {
            content,
            function_call: { arguments: args, name },
            role,
            refusal: message.refusal ?? null
          },
          finish_reason,
          index,
          logprobs
        };
      }
      if (tool_calls) {
        return {
          ...choiceRest,
          index,
          finish_reason,
          logprobs,
          message: {
            ...messageRest,
            role,
            content,
            refusal: message.refusal ?? null,
            tool_calls: tool_calls.map((tool_call, i21) => {
              const { function: fn, type, id: id2, ...toolRest } = tool_call;
              const { arguments: args, name, ...fnRest } = fn || {};
              if (id2 == null) {
                throw new OpenAIError(`missing choices[${index}].tool_calls[${i21}].id
${str(snapshot)}`);
              }
              if (type == null) {
                throw new OpenAIError(`missing choices[${index}].tool_calls[${i21}].type
${str(snapshot)}`);
              }
              if (name == null) {
                throw new OpenAIError(`missing choices[${index}].tool_calls[${i21}].function.name
${str(snapshot)}`);
              }
              if (args == null) {
                throw new OpenAIError(`missing choices[${index}].tool_calls[${i21}].function.arguments
${str(snapshot)}`);
              }
              return { ...toolRest, id: id2, type, function: { ...fnRest, name, arguments: args } };
            })
          }
        };
      }
      return {
        ...choiceRest,
        message: { ...messageRest, content, role, refusal: message.refusal ?? null },
        finish_reason,
        index,
        logprobs
      };
    }),
    created,
    model: model2,
    object: "chat.completion",
    ...system_fingerprint ? { system_fingerprint } : {}
  };
  return maybeParseChatCompletion(completion, params);
}
function str(x16) {
  return JSON.stringify(x16);
}
function assertIsEmpty(obj) {
  return;
}
function assertNever(_x) {
}
var ChatCompletionStreamingRunner = class _ChatCompletionStreamingRunner extends ChatCompletionStream {
  static fromReadableStream(stream2) {
    const runner = new _ChatCompletionStreamingRunner(null);
    runner._run(() => runner._fromReadableStream(stream2));
    return runner;
  }
  static runTools(client, params, options) {
    const runner = new _ChatCompletionStreamingRunner(
      // @ts-expect-error TODO these types are incompatible
      params
    );
    const opts = {
      ...options,
      headers: { ...options?.headers, "X-Stainless-Helper-Method": "runTools" }
    };
    runner._run(() => runner._runTools(client, params, opts));
    return runner;
  }
};
var Completions = class extends APIResource {
  constructor() {
    super(...arguments);
    this.messages = new Messages(this._client);
  }
  create(body, options) {
    return this._client.post("/chat/completions", { body, ...options, stream: body.stream ?? false });
  }
  /**
   * Get a stored chat completion. Only Chat Completions that have been created with
   * the `store` parameter set to `true` will be returned.
   *
   * @example
   * ```ts
   * const chatCompletion =
   *   await client.chat.completions.retrieve('completion_id');
   * ```
   */
  retrieve(completionID, options) {
    return this._client.get(path`/chat/completions/${completionID}`, options);
  }
  /**
   * Modify a stored chat completion. Only Chat Completions that have been created
   * with the `store` parameter set to `true` can be modified. Currently, the only
   * supported modification is to update the `metadata` field.
   *
   * @example
   * ```ts
   * const chatCompletion = await client.chat.completions.update(
   *   'completion_id',
   *   { metadata: { foo: 'string' } },
   * );
   * ```
   */
  update(completionID, body, options) {
    return this._client.post(path`/chat/completions/${completionID}`, { body, ...options });
  }
  /**
   * List stored Chat Completions. Only Chat Completions that have been stored with
   * the `store` parameter set to `true` will be returned.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const chatCompletion of client.chat.completions.list()) {
   *   // ...
   * }
   * ```
   */
  list(query = {}, options) {
    return this._client.getAPIList("/chat/completions", CursorPage, { query, ...options });
  }
  /**
   * Delete a stored chat completion. Only Chat Completions that have been created
   * with the `store` parameter set to `true` can be deleted.
   *
   * @example
   * ```ts
   * const chatCompletionDeleted =
   *   await client.chat.completions.delete('completion_id');
   * ```
   */
  delete(completionID, options) {
    return this._client.delete(path`/chat/completions/${completionID}`, options);
  }
  parse(body, options) {
    validateInputTools(body.tools);
    return this._client.chat.completions.create(body, {
      ...options,
      headers: {
        ...options?.headers,
        "X-Stainless-Helper-Method": "chat.completions.parse"
      }
    })._thenUnwrap((completion) => parseChatCompletion(completion, body));
  }
  runTools(body, options) {
    if (body.stream) {
      return ChatCompletionStreamingRunner.runTools(this._client, body, options);
    }
    return ChatCompletionRunner.runTools(this._client, body, options);
  }
  /**
   * Creates a chat completion stream
   */
  stream(body, options) {
    return ChatCompletionStream.createChatCompletion(this._client, body, options);
  }
};
Completions.Messages = Messages;
var Chat = class extends APIResource {
  constructor() {
    super(...arguments);
    this.completions = new Completions(this._client);
  }
};
Chat.Completions = Completions;

// https://esm.sh/openai@5.12.0/denonext/resources/chat/completions/index.development.mjs
var Messages2 = class extends APIResource {
  /**
   * Get the messages in a stored chat completion. Only Chat Completions that have
   * been created with the `store` parameter set to `true` will be returned.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const chatCompletionStoreMessage of client.chat.completions.messages.list(
   *   'completion_id',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(completionID, query = {}, options) {
    return this._client.getAPIList(path`/chat/completions/${completionID}/messages`, CursorPage, { query, ...options });
  }
};
var ChatCompletionRunner2 = class _ChatCompletionRunner2 extends AbstractChatCompletionRunner {
  static runTools(client, params, options) {
    const runner = new _ChatCompletionRunner2();
    const opts = {
      ...options,
      headers: { ...options?.headers, "X-Stainless-Helper-Method": "runTools" }
    };
    runner._run(() => runner._runTools(client, params, opts));
    return runner;
  }
  _addMessage(message, emit = true) {
    super._addMessage(message, emit);
    if (isAssistantMessage(message) && message.content) {
      this._emit("content", message.content);
    }
  }
};
var STR2 = 1;
var NUM2 = 2;
var ARR2 = 4;
var OBJ2 = 8;
var NULL2 = 16;
var BOOL2 = 32;
var NAN2 = 64;
var INFINITY2 = 128;
var MINUS_INFINITY2 = 256;
var INF2 = INFINITY2 | MINUS_INFINITY2;
var SPECIAL2 = NULL2 | BOOL2 | INF2 | NAN2;
var ATOM2 = STR2 | NUM2 | SPECIAL2;
var COLLECTION2 = ARR2 | OBJ2;
var ALL2 = ATOM2 | COLLECTION2;
var Allow2 = {
  STR: STR2,
  NUM: NUM2,
  ARR: ARR2,
  OBJ: OBJ2,
  NULL: NULL2,
  BOOL: BOOL2,
  NAN: NAN2,
  INFINITY: INFINITY2,
  MINUS_INFINITY: MINUS_INFINITY2,
  INF: INF2,
  SPECIAL: SPECIAL2,
  ATOM: ATOM2,
  COLLECTION: COLLECTION2,
  ALL: ALL2
};
var PartialJSON2 = class extends Error {
};
var MalformedJSON2 = class extends Error {
};
function parseJSON2(jsonString, allowPartial = Allow2.ALL) {
  if (typeof jsonString !== "string") {
    throw new TypeError(`expecting str, got ${typeof jsonString}`);
  }
  if (!jsonString.trim()) {
    throw new Error(`${jsonString} is empty`);
  }
  return _parseJSON2(jsonString.trim(), allowPartial);
}
var _parseJSON2 = (jsonString, allow) => {
  const length = jsonString.length;
  let index = 0;
  const markPartialJSON = (msg) => {
    throw new PartialJSON2(`${msg} at position ${index}`);
  };
  const throwMalformedError = (msg) => {
    throw new MalformedJSON2(`${msg} at position ${index}`);
  };
  const parseAny = () => {
    skipBlank();
    if (index >= length)
      markPartialJSON("Unexpected end of input");
    if (jsonString[index] === '"')
      return parseStr();
    if (jsonString[index] === "{")
      return parseObj();
    if (jsonString[index] === "[")
      return parseArr();
    if (jsonString.substring(index, index + 4) === "null" || Allow2.NULL & allow && length - index < 4 && "null".startsWith(jsonString.substring(index))) {
      index += 4;
      return null;
    }
    if (jsonString.substring(index, index + 4) === "true" || Allow2.BOOL & allow && length - index < 4 && "true".startsWith(jsonString.substring(index))) {
      index += 4;
      return true;
    }
    if (jsonString.substring(index, index + 5) === "false" || Allow2.BOOL & allow && length - index < 5 && "false".startsWith(jsonString.substring(index))) {
      index += 5;
      return false;
    }
    if (jsonString.substring(index, index + 8) === "Infinity" || Allow2.INFINITY & allow && length - index < 8 && "Infinity".startsWith(jsonString.substring(index))) {
      index += 8;
      return Infinity;
    }
    if (jsonString.substring(index, index + 9) === "-Infinity" || Allow2.MINUS_INFINITY & allow && 1 < length - index && length - index < 9 && "-Infinity".startsWith(jsonString.substring(index))) {
      index += 9;
      return -Infinity;
    }
    if (jsonString.substring(index, index + 3) === "NaN" || Allow2.NAN & allow && length - index < 3 && "NaN".startsWith(jsonString.substring(index))) {
      index += 3;
      return NaN;
    }
    return parseNum();
  };
  const parseStr = () => {
    const start = index;
    let escape2 = false;
    index++;
    while (index < length && (jsonString[index] !== '"' || escape2 && jsonString[index - 1] === "\\")) {
      escape2 = jsonString[index] === "\\" ? !escape2 : false;
      index++;
    }
    if (jsonString.charAt(index) == '"') {
      try {
        return JSON.parse(jsonString.substring(start, ++index - Number(escape2)));
      } catch (e7) {
        throwMalformedError(String(e7));
      }
    } else if (Allow2.STR & allow) {
      try {
        return JSON.parse(jsonString.substring(start, index - Number(escape2)) + '"');
      } catch (e7) {
        return JSON.parse(jsonString.substring(start, jsonString.lastIndexOf("\\")) + '"');
      }
    }
    markPartialJSON("Unterminated string literal");
  };
  const parseObj = () => {
    index++;
    skipBlank();
    const obj = {};
    try {
      while (jsonString[index] !== "}") {
        skipBlank();
        if (index >= length && Allow2.OBJ & allow)
          return obj;
        const key = parseStr();
        skipBlank();
        index++;
        try {
          const value = parseAny();
          Object.defineProperty(obj, key, { value, writable: true, enumerable: true, configurable: true });
        } catch (e7) {
          if (Allow2.OBJ & allow)
            return obj;
          else
            throw e7;
        }
        skipBlank();
        if (jsonString[index] === ",")
          index++;
      }
    } catch (e7) {
      if (Allow2.OBJ & allow)
        return obj;
      else
        markPartialJSON("Expected '}' at end of object");
    }
    index++;
    return obj;
  };
  const parseArr = () => {
    index++;
    const arr = [];
    try {
      while (jsonString[index] !== "]") {
        arr.push(parseAny());
        skipBlank();
        if (jsonString[index] === ",") {
          index++;
        }
      }
    } catch (e7) {
      if (Allow2.ARR & allow) {
        return arr;
      }
      markPartialJSON("Expected ']' at end of array");
    }
    index++;
    return arr;
  };
  const parseNum = () => {
    if (index === 0) {
      if (jsonString === "-" && Allow2.NUM & allow)
        markPartialJSON("Not sure what '-' is");
      try {
        return JSON.parse(jsonString);
      } catch (e7) {
        if (Allow2.NUM & allow) {
          try {
            if ("." === jsonString[jsonString.length - 1])
              return JSON.parse(jsonString.substring(0, jsonString.lastIndexOf(".")));
            return JSON.parse(jsonString.substring(0, jsonString.lastIndexOf("e")));
          } catch (e22) {
          }
        }
        throwMalformedError(String(e7));
      }
    }
    const start = index;
    if (jsonString[index] === "-")
      index++;
    while (jsonString[index] && !",]}".includes(jsonString[index]))
      index++;
    if (index == length && !(Allow2.NUM & allow))
      markPartialJSON("Unterminated number literal");
    try {
      return JSON.parse(jsonString.substring(start, index));
    } catch (e7) {
      if (jsonString.substring(start, index) === "-" && Allow2.NUM & allow)
        markPartialJSON("Not sure what '-' is");
      try {
        return JSON.parse(jsonString.substring(start, jsonString.lastIndexOf("e")));
      } catch (e22) {
        throwMalformedError(String(e22));
      }
    }
  };
  const skipBlank = () => {
    while (index < length && " \n\r	".includes(jsonString[index])) {
      index++;
    }
  };
  return parseAny();
};
var partialParse2 = (input) => parseJSON2(input, Allow2.ALL ^ Allow2.NUM);
var _ChatCompletionStream_instances2;
var _ChatCompletionStream_params2;
var _ChatCompletionStream_choiceEventStates2;
var _ChatCompletionStream_currentChatCompletionSnapshot2;
var _ChatCompletionStream_beginRequest2;
var _ChatCompletionStream_getChoiceEventState2;
var _ChatCompletionStream_addChunk2;
var _ChatCompletionStream_emitToolCallDoneEvent2;
var _ChatCompletionStream_emitContentDoneEvents2;
var _ChatCompletionStream_endRequest2;
var _ChatCompletionStream_getAutoParseableResponseFormat2;
var _ChatCompletionStream_accumulateChatCompletion2;
var ChatCompletionStream2 = class _ChatCompletionStream2 extends AbstractChatCompletionRunner {
  constructor(params) {
    super();
    _ChatCompletionStream_instances2.add(this);
    _ChatCompletionStream_params2.set(this, void 0);
    _ChatCompletionStream_choiceEventStates2.set(this, void 0);
    _ChatCompletionStream_currentChatCompletionSnapshot2.set(this, void 0);
    __classPrivateFieldSet(this, _ChatCompletionStream_params2, params, "f");
    __classPrivateFieldSet(this, _ChatCompletionStream_choiceEventStates2, [], "f");
  }
  get currentChatCompletionSnapshot() {
    return __classPrivateFieldGet(this, _ChatCompletionStream_currentChatCompletionSnapshot2, "f");
  }
  /**
   * Intended for use on the frontend, consuming a stream produced with
   * `.toReadableStream()` on the backend.
   *
   * Note that messages sent to the model do not appear in `.on('message')`
   * in this context.
   */
  static fromReadableStream(stream2) {
    const runner = new _ChatCompletionStream2(null);
    runner._run(() => runner._fromReadableStream(stream2));
    return runner;
  }
  static createChatCompletion(client, params, options) {
    const runner = new _ChatCompletionStream2(params);
    runner._run(() => runner._runChatCompletion(client, { ...params, stream: true }, { ...options, headers: { ...options?.headers, "X-Stainless-Helper-Method": "stream" } }));
    return runner;
  }
  async _createChatCompletion(client, params, options) {
    super._createChatCompletion;
    const signal = options?.signal;
    if (signal) {
      if (signal.aborted)
        this.controller.abort();
      signal.addEventListener("abort", () => this.controller.abort());
    }
    __classPrivateFieldGet(this, _ChatCompletionStream_instances2, "m", _ChatCompletionStream_beginRequest2).call(this);
    const stream2 = await client.chat.completions.create({ ...params, stream: true }, { ...options, signal: this.controller.signal });
    this._connected();
    for await (const chunk of stream2) {
      __classPrivateFieldGet(this, _ChatCompletionStream_instances2, "m", _ChatCompletionStream_addChunk2).call(this, chunk);
    }
    if (stream2.controller.signal?.aborted) {
      throw new APIUserAbortError();
    }
    return this._addChatCompletion(__classPrivateFieldGet(this, _ChatCompletionStream_instances2, "m", _ChatCompletionStream_endRequest2).call(this));
  }
  async _fromReadableStream(readableStream, options) {
    const signal = options?.signal;
    if (signal) {
      if (signal.aborted)
        this.controller.abort();
      signal.addEventListener("abort", () => this.controller.abort());
    }
    __classPrivateFieldGet(this, _ChatCompletionStream_instances2, "m", _ChatCompletionStream_beginRequest2).call(this);
    this._connected();
    const stream2 = Stream.fromReadableStream(readableStream, this.controller);
    let chatId;
    for await (const chunk of stream2) {
      if (chatId && chatId !== chunk.id) {
        this._addChatCompletion(__classPrivateFieldGet(this, _ChatCompletionStream_instances2, "m", _ChatCompletionStream_endRequest2).call(this));
      }
      __classPrivateFieldGet(this, _ChatCompletionStream_instances2, "m", _ChatCompletionStream_addChunk2).call(this, chunk);
      chatId = chunk.id;
    }
    if (stream2.controller.signal?.aborted) {
      throw new APIUserAbortError();
    }
    return this._addChatCompletion(__classPrivateFieldGet(this, _ChatCompletionStream_instances2, "m", _ChatCompletionStream_endRequest2).call(this));
  }
  [(_ChatCompletionStream_params2 = /* @__PURE__ */ new WeakMap(), _ChatCompletionStream_choiceEventStates2 = /* @__PURE__ */ new WeakMap(), _ChatCompletionStream_currentChatCompletionSnapshot2 = /* @__PURE__ */ new WeakMap(), _ChatCompletionStream_instances2 = /* @__PURE__ */ new WeakSet(), _ChatCompletionStream_beginRequest2 = function _ChatCompletionStream_beginRequest22() {
    if (this.ended)
      return;
    __classPrivateFieldSet(this, _ChatCompletionStream_currentChatCompletionSnapshot2, void 0, "f");
  }, _ChatCompletionStream_getChoiceEventState2 = function _ChatCompletionStream_getChoiceEventState22(choice) {
    let state = __classPrivateFieldGet(this, _ChatCompletionStream_choiceEventStates2, "f")[choice.index];
    if (state) {
      return state;
    }
    state = {
      content_done: false,
      refusal_done: false,
      logprobs_content_done: false,
      logprobs_refusal_done: false,
      done_tool_calls: /* @__PURE__ */ new Set(),
      current_tool_call_index: null
    };
    __classPrivateFieldGet(this, _ChatCompletionStream_choiceEventStates2, "f")[choice.index] = state;
    return state;
  }, _ChatCompletionStream_addChunk2 = function _ChatCompletionStream_addChunk22(chunk) {
    if (this.ended)
      return;
    const completion = __classPrivateFieldGet(this, _ChatCompletionStream_instances2, "m", _ChatCompletionStream_accumulateChatCompletion2).call(this, chunk);
    this._emit("chunk", chunk, completion);
    for (const choice of chunk.choices) {
      const choiceSnapshot = completion.choices[choice.index];
      if (choice.delta.content != null && choiceSnapshot.message?.role === "assistant" && choiceSnapshot.message?.content) {
        this._emit("content", choice.delta.content, choiceSnapshot.message.content);
        this._emit("content.delta", {
          delta: choice.delta.content,
          snapshot: choiceSnapshot.message.content,
          parsed: choiceSnapshot.message.parsed
        });
      }
      if (choice.delta.refusal != null && choiceSnapshot.message?.role === "assistant" && choiceSnapshot.message?.refusal) {
        this._emit("refusal.delta", {
          delta: choice.delta.refusal,
          snapshot: choiceSnapshot.message.refusal
        });
      }
      if (choice.logprobs?.content != null && choiceSnapshot.message?.role === "assistant") {
        this._emit("logprobs.content.delta", {
          content: choice.logprobs?.content,
          snapshot: choiceSnapshot.logprobs?.content ?? []
        });
      }
      if (choice.logprobs?.refusal != null && choiceSnapshot.message?.role === "assistant") {
        this._emit("logprobs.refusal.delta", {
          refusal: choice.logprobs?.refusal,
          snapshot: choiceSnapshot.logprobs?.refusal ?? []
        });
      }
      const state = __classPrivateFieldGet(this, _ChatCompletionStream_instances2, "m", _ChatCompletionStream_getChoiceEventState2).call(this, choiceSnapshot);
      if (choiceSnapshot.finish_reason) {
        __classPrivateFieldGet(this, _ChatCompletionStream_instances2, "m", _ChatCompletionStream_emitContentDoneEvents2).call(this, choiceSnapshot);
        if (state.current_tool_call_index != null) {
          __classPrivateFieldGet(this, _ChatCompletionStream_instances2, "m", _ChatCompletionStream_emitToolCallDoneEvent2).call(this, choiceSnapshot, state.current_tool_call_index);
        }
      }
      for (const toolCall of choice.delta.tool_calls ?? []) {
        if (state.current_tool_call_index !== toolCall.index) {
          __classPrivateFieldGet(this, _ChatCompletionStream_instances2, "m", _ChatCompletionStream_emitContentDoneEvents2).call(this, choiceSnapshot);
          if (state.current_tool_call_index != null) {
            __classPrivateFieldGet(this, _ChatCompletionStream_instances2, "m", _ChatCompletionStream_emitToolCallDoneEvent2).call(this, choiceSnapshot, state.current_tool_call_index);
          }
        }
        state.current_tool_call_index = toolCall.index;
      }
      for (const toolCallDelta of choice.delta.tool_calls ?? []) {
        const toolCallSnapshot = choiceSnapshot.message.tool_calls?.[toolCallDelta.index];
        if (!toolCallSnapshot?.type) {
          continue;
        }
        if (toolCallSnapshot?.type === "function") {
          this._emit("tool_calls.function.arguments.delta", {
            name: toolCallSnapshot.function?.name,
            index: toolCallDelta.index,
            arguments: toolCallSnapshot.function.arguments,
            parsed_arguments: toolCallSnapshot.function.parsed_arguments,
            arguments_delta: toolCallDelta.function?.arguments ?? ""
          });
        } else {
          assertNever2(toolCallSnapshot?.type);
        }
      }
    }
  }, _ChatCompletionStream_emitToolCallDoneEvent2 = function _ChatCompletionStream_emitToolCallDoneEvent22(choiceSnapshot, toolCallIndex) {
    const state = __classPrivateFieldGet(this, _ChatCompletionStream_instances2, "m", _ChatCompletionStream_getChoiceEventState2).call(this, choiceSnapshot);
    if (state.done_tool_calls.has(toolCallIndex)) {
      return;
    }
    const toolCallSnapshot = choiceSnapshot.message.tool_calls?.[toolCallIndex];
    if (!toolCallSnapshot) {
      throw new Error("no tool call snapshot");
    }
    if (!toolCallSnapshot.type) {
      throw new Error("tool call snapshot missing `type`");
    }
    if (toolCallSnapshot.type === "function") {
      const inputTool = __classPrivateFieldGet(this, _ChatCompletionStream_params2, "f")?.tools?.find((tool2) => tool2.type === "function" && tool2.function.name === toolCallSnapshot.function.name);
      this._emit("tool_calls.function.arguments.done", {
        name: toolCallSnapshot.function.name,
        index: toolCallIndex,
        arguments: toolCallSnapshot.function.arguments,
        parsed_arguments: isAutoParsableTool(inputTool) ? inputTool.$parseRaw(toolCallSnapshot.function.arguments) : inputTool?.function.strict ? JSON.parse(toolCallSnapshot.function.arguments) : null
      });
    } else {
      assertNever2(toolCallSnapshot.type);
    }
  }, _ChatCompletionStream_emitContentDoneEvents2 = function _ChatCompletionStream_emitContentDoneEvents22(choiceSnapshot) {
    const state = __classPrivateFieldGet(this, _ChatCompletionStream_instances2, "m", _ChatCompletionStream_getChoiceEventState2).call(this, choiceSnapshot);
    if (choiceSnapshot.message.content && !state.content_done) {
      state.content_done = true;
      const responseFormat = __classPrivateFieldGet(this, _ChatCompletionStream_instances2, "m", _ChatCompletionStream_getAutoParseableResponseFormat2).call(this);
      this._emit("content.done", {
        content: choiceSnapshot.message.content,
        parsed: responseFormat ? responseFormat.$parseRaw(choiceSnapshot.message.content) : null
      });
    }
    if (choiceSnapshot.message.refusal && !state.refusal_done) {
      state.refusal_done = true;
      this._emit("refusal.done", { refusal: choiceSnapshot.message.refusal });
    }
    if (choiceSnapshot.logprobs?.content && !state.logprobs_content_done) {
      state.logprobs_content_done = true;
      this._emit("logprobs.content.done", { content: choiceSnapshot.logprobs.content });
    }
    if (choiceSnapshot.logprobs?.refusal && !state.logprobs_refusal_done) {
      state.logprobs_refusal_done = true;
      this._emit("logprobs.refusal.done", { refusal: choiceSnapshot.logprobs.refusal });
    }
  }, _ChatCompletionStream_endRequest2 = function _ChatCompletionStream_endRequest22() {
    if (this.ended) {
      throw new OpenAIError(`stream has ended, this shouldn't happen`);
    }
    const snapshot = __classPrivateFieldGet(this, _ChatCompletionStream_currentChatCompletionSnapshot2, "f");
    if (!snapshot) {
      throw new OpenAIError(`request ended without sending any chunks`);
    }
    __classPrivateFieldSet(this, _ChatCompletionStream_currentChatCompletionSnapshot2, void 0, "f");
    __classPrivateFieldSet(this, _ChatCompletionStream_choiceEventStates2, [], "f");
    return finalizeChatCompletion2(snapshot, __classPrivateFieldGet(this, _ChatCompletionStream_params2, "f"));
  }, _ChatCompletionStream_getAutoParseableResponseFormat2 = function _ChatCompletionStream_getAutoParseableResponseFormat22() {
    const responseFormat = __classPrivateFieldGet(this, _ChatCompletionStream_params2, "f")?.response_format;
    if (isAutoParsableResponseFormat(responseFormat)) {
      return responseFormat;
    }
    return null;
  }, _ChatCompletionStream_accumulateChatCompletion2 = function _ChatCompletionStream_accumulateChatCompletion22(chunk) {
    var _a3, _b, _c, _d;
    let snapshot = __classPrivateFieldGet(this, _ChatCompletionStream_currentChatCompletionSnapshot2, "f");
    const { choices, ...rest } = chunk;
    if (!snapshot) {
      snapshot = __classPrivateFieldSet(this, _ChatCompletionStream_currentChatCompletionSnapshot2, {
        ...rest,
        choices: []
      }, "f");
    } else {
      Object.assign(snapshot, rest);
    }
    for (const { delta, finish_reason, index, logprobs = null, ...other } of chunk.choices) {
      let choice = snapshot.choices[index];
      if (!choice) {
        choice = snapshot.choices[index] = { finish_reason, index, message: {}, logprobs, ...other };
      }
      if (logprobs) {
        if (!choice.logprobs) {
          choice.logprobs = Object.assign({}, logprobs);
        } else {
          const { content: content2, refusal: refusal2, ...rest3 } = logprobs;
          assertIsEmpty2(rest3);
          Object.assign(choice.logprobs, rest3);
          if (content2) {
            (_a3 = choice.logprobs).content ?? (_a3.content = []);
            choice.logprobs.content.push(...content2);
          }
          if (refusal2) {
            (_b = choice.logprobs).refusal ?? (_b.refusal = []);
            choice.logprobs.refusal.push(...refusal2);
          }
        }
      }
      if (finish_reason) {
        choice.finish_reason = finish_reason;
        if (__classPrivateFieldGet(this, _ChatCompletionStream_params2, "f") && hasAutoParseableInput(__classPrivateFieldGet(this, _ChatCompletionStream_params2, "f"))) {
          if (finish_reason === "length") {
            throw new LengthFinishReasonError();
          }
          if (finish_reason === "content_filter") {
            throw new ContentFilterFinishReasonError();
          }
        }
      }
      Object.assign(choice, other);
      if (!delta)
        continue;
      const { content, refusal, function_call, role, tool_calls, ...rest2 } = delta;
      assertIsEmpty2(rest2);
      Object.assign(choice.message, rest2);
      if (refusal) {
        choice.message.refusal = (choice.message.refusal || "") + refusal;
      }
      if (role)
        choice.message.role = role;
      if (function_call) {
        if (!choice.message.function_call) {
          choice.message.function_call = function_call;
        } else {
          if (function_call.name)
            choice.message.function_call.name = function_call.name;
          if (function_call.arguments) {
            (_c = choice.message.function_call).arguments ?? (_c.arguments = "");
            choice.message.function_call.arguments += function_call.arguments;
          }
        }
      }
      if (content) {
        choice.message.content = (choice.message.content || "") + content;
        if (!choice.message.refusal && __classPrivateFieldGet(this, _ChatCompletionStream_instances2, "m", _ChatCompletionStream_getAutoParseableResponseFormat2).call(this)) {
          choice.message.parsed = partialParse2(choice.message.content);
        }
      }
      if (tool_calls) {
        if (!choice.message.tool_calls)
          choice.message.tool_calls = [];
        for (const { index: index2, id, type, function: fn, ...rest3 } of tool_calls) {
          const tool_call = (_d = choice.message.tool_calls)[index2] ?? (_d[index2] = {});
          Object.assign(tool_call, rest3);
          if (id)
            tool_call.id = id;
          if (type)
            tool_call.type = type;
          if (fn)
            tool_call.function ?? (tool_call.function = { name: fn.name ?? "", arguments: "" });
          if (fn?.name)
            tool_call.function.name = fn.name;
          if (fn?.arguments) {
            tool_call.function.arguments += fn.arguments;
            if (shouldParseToolCall(__classPrivateFieldGet(this, _ChatCompletionStream_params2, "f"), tool_call)) {
              tool_call.function.parsed_arguments = partialParse2(tool_call.function.arguments);
            }
          }
        }
      }
    }
    return snapshot;
  }, Symbol.asyncIterator)]() {
    const pushQueue = [];
    const readQueue = [];
    let done = false;
    this.on("chunk", (chunk) => {
      const reader = readQueue.shift();
      if (reader) {
        reader.resolve(chunk);
      } else {
        pushQueue.push(chunk);
      }
    });
    this.on("end", () => {
      done = true;
      for (const reader of readQueue) {
        reader.resolve(void 0);
      }
      readQueue.length = 0;
    });
    this.on("abort", (err) => {
      done = true;
      for (const reader of readQueue) {
        reader.reject(err);
      }
      readQueue.length = 0;
    });
    this.on("error", (err) => {
      done = true;
      for (const reader of readQueue) {
        reader.reject(err);
      }
      readQueue.length = 0;
    });
    return {
      next: async () => {
        if (!pushQueue.length) {
          if (done) {
            return { value: void 0, done: true };
          }
          return new Promise((resolve, reject) => readQueue.push({ resolve, reject })).then((chunk2) => chunk2 ? { value: chunk2, done: false } : { value: void 0, done: true });
        }
        const chunk = pushQueue.shift();
        return { value: chunk, done: false };
      },
      return: async () => {
        this.abort();
        return { value: void 0, done: true };
      }
    };
  }
  toReadableStream() {
    const stream2 = new Stream(this[Symbol.asyncIterator].bind(this), this.controller);
    return stream2.toReadableStream();
  }
};
function finalizeChatCompletion2(snapshot, params) {
  const { id, choices, created, model: model2, system_fingerprint, ...rest } = snapshot;
  const completion = {
    ...rest,
    id,
    choices: choices.map(({ message, finish_reason, index, logprobs, ...choiceRest }) => {
      if (!finish_reason) {
        throw new OpenAIError(`missing finish_reason for choice ${index}`);
      }
      const { content = null, function_call, tool_calls, ...messageRest } = message;
      const role = message.role;
      if (!role) {
        throw new OpenAIError(`missing role for choice ${index}`);
      }
      if (function_call) {
        const { arguments: args, name } = function_call;
        if (args == null) {
          throw new OpenAIError(`missing function_call.arguments for choice ${index}`);
        }
        if (!name) {
          throw new OpenAIError(`missing function_call.name for choice ${index}`);
        }
        return {
          ...choiceRest,
          message: {
            content,
            function_call: { arguments: args, name },
            role,
            refusal: message.refusal ?? null
          },
          finish_reason,
          index,
          logprobs
        };
      }
      if (tool_calls) {
        return {
          ...choiceRest,
          index,
          finish_reason,
          logprobs,
          message: {
            ...messageRest,
            role,
            content,
            refusal: message.refusal ?? null,
            tool_calls: tool_calls.map((tool_call, i21) => {
              const { function: fn, type, id: id2, ...toolRest } = tool_call;
              const { arguments: args, name, ...fnRest } = fn || {};
              if (id2 == null) {
                throw new OpenAIError(`missing choices[${index}].tool_calls[${i21}].id
${str2(snapshot)}`);
              }
              if (type == null) {
                throw new OpenAIError(`missing choices[${index}].tool_calls[${i21}].type
${str2(snapshot)}`);
              }
              if (name == null) {
                throw new OpenAIError(`missing choices[${index}].tool_calls[${i21}].function.name
${str2(snapshot)}`);
              }
              if (args == null) {
                throw new OpenAIError(`missing choices[${index}].tool_calls[${i21}].function.arguments
${str2(snapshot)}`);
              }
              return { ...toolRest, id: id2, type, function: { ...fnRest, name, arguments: args } };
            })
          }
        };
      }
      return {
        ...choiceRest,
        message: { ...messageRest, content, role, refusal: message.refusal ?? null },
        finish_reason,
        index,
        logprobs
      };
    }),
    created,
    model: model2,
    object: "chat.completion",
    ...system_fingerprint ? { system_fingerprint } : {}
  };
  return maybeParseChatCompletion(completion, params);
}
function str2(x16) {
  return JSON.stringify(x16);
}
function assertIsEmpty2(obj) {
  return;
}
function assertNever2(_x) {
}
var ChatCompletionStreamingRunner2 = class _ChatCompletionStreamingRunner2 extends ChatCompletionStream2 {
  static fromReadableStream(stream2) {
    const runner = new _ChatCompletionStreamingRunner2(null);
    runner._run(() => runner._fromReadableStream(stream2));
    return runner;
  }
  static runTools(client, params, options) {
    const runner = new _ChatCompletionStreamingRunner2(
      // @ts-expect-error TODO these types are incompatible
      params
    );
    const opts = {
      ...options,
      headers: { ...options?.headers, "X-Stainless-Helper-Method": "runTools" }
    };
    runner._run(() => runner._runTools(client, params, opts));
    return runner;
  }
};
var Completions2 = class extends APIResource {
  constructor() {
    super(...arguments);
    this.messages = new Messages2(this._client);
  }
  create(body, options) {
    return this._client.post("/chat/completions", { body, ...options, stream: body.stream ?? false });
  }
  /**
   * Get a stored chat completion. Only Chat Completions that have been created with
   * the `store` parameter set to `true` will be returned.
   *
   * @example
   * ```ts
   * const chatCompletion =
   *   await client.chat.completions.retrieve('completion_id');
   * ```
   */
  retrieve(completionID, options) {
    return this._client.get(path`/chat/completions/${completionID}`, options);
  }
  /**
   * Modify a stored chat completion. Only Chat Completions that have been created
   * with the `store` parameter set to `true` can be modified. Currently, the only
   * supported modification is to update the `metadata` field.
   *
   * @example
   * ```ts
   * const chatCompletion = await client.chat.completions.update(
   *   'completion_id',
   *   { metadata: { foo: 'string' } },
   * );
   * ```
   */
  update(completionID, body, options) {
    return this._client.post(path`/chat/completions/${completionID}`, { body, ...options });
  }
  /**
   * List stored Chat Completions. Only Chat Completions that have been stored with
   * the `store` parameter set to `true` will be returned.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const chatCompletion of client.chat.completions.list()) {
   *   // ...
   * }
   * ```
   */
  list(query = {}, options) {
    return this._client.getAPIList("/chat/completions", CursorPage, { query, ...options });
  }
  /**
   * Delete a stored chat completion. Only Chat Completions that have been created
   * with the `store` parameter set to `true` can be deleted.
   *
   * @example
   * ```ts
   * const chatCompletionDeleted =
   *   await client.chat.completions.delete('completion_id');
   * ```
   */
  delete(completionID, options) {
    return this._client.delete(path`/chat/completions/${completionID}`, options);
  }
  parse(body, options) {
    validateInputTools(body.tools);
    return this._client.chat.completions.create(body, {
      ...options,
      headers: {
        ...options?.headers,
        "X-Stainless-Helper-Method": "chat.completions.parse"
      }
    })._thenUnwrap((completion) => parseChatCompletion(completion, body));
  }
  runTools(body, options) {
    if (body.stream) {
      return ChatCompletionStreamingRunner2.runTools(this._client, body, options);
    }
    return ChatCompletionRunner2.runTools(this._client, body, options);
  }
  /**
   * Creates a chat completion stream
   */
  stream(body, options) {
    return ChatCompletionStream2.createChatCompletion(this._client, body, options);
  }
};
Completions2.Messages = Messages2;

// https://esm.sh/openai@5.12.0/denonext/internal/headers.development.mjs
var brand_privateNullableHeaders = /* @__PURE__ */ Symbol("brand.privateNullableHeaders");
function* iterateHeaders(headers) {
  if (!headers)
    return;
  if (brand_privateNullableHeaders in headers) {
    const { values, nulls } = headers;
    yield* values.entries();
    for (const name of nulls) {
      yield [name, null];
    }
    return;
  }
  let shouldClear = false;
  let iter;
  if (headers instanceof Headers) {
    iter = headers.entries();
  } else if (isReadonlyArray(headers)) {
    iter = headers;
  } else {
    shouldClear = true;
    iter = Object.entries(headers ?? {});
  }
  for (let row of iter) {
    const name = row[0];
    if (typeof name !== "string")
      throw new TypeError("expected header name to be a string");
    const values = isReadonlyArray(row[1]) ? row[1] : [row[1]];
    let didClear = false;
    for (const value of values) {
      if (value === void 0)
        continue;
      if (shouldClear && !didClear) {
        didClear = true;
        yield [name, null];
      }
      yield [name, value];
    }
  }
}
var buildHeaders = (newHeaders) => {
  const targetHeaders = new Headers();
  const nullHeaders = /* @__PURE__ */ new Set();
  for (const headers of newHeaders) {
    const seenHeaders = /* @__PURE__ */ new Set();
    for (const [name, value] of iterateHeaders(headers)) {
      const lowerName = name.toLowerCase();
      if (!seenHeaders.has(lowerName)) {
        targetHeaders.delete(name);
        seenHeaders.add(lowerName);
      }
      if (value === null) {
        targetHeaders.delete(name);
        nullHeaders.add(lowerName);
      } else {
        targetHeaders.append(name, value);
        nullHeaders.delete(lowerName);
      }
    }
  }
  return { [brand_privateNullableHeaders]: true, values: targetHeaders, nulls: nullHeaders };
};

// https://esm.sh/openai@5.12.0/denonext/resources/audio/audio.development.mjs
var Speech = class extends APIResource {
  /**
   * Generates audio from the input text.
   *
   * @example
   * ```ts
   * const speech = await client.audio.speech.create({
   *   input: 'input',
   *   model: 'string',
   *   voice: 'ash',
   * });
   *
   * const content = await speech.blob();
   * console.log(content);
   * ```
   */
  create(body, options) {
    return this._client.post("/audio/speech", {
      body,
      ...options,
      headers: buildHeaders([{ Accept: "application/octet-stream" }, options?.headers]),
      __binaryResponse: true
    });
  }
};
var Transcriptions = class extends APIResource {
  create(body, options) {
    return this._client.post("/audio/transcriptions", multipartFormRequestOptions({
      body,
      ...options,
      stream: body.stream ?? false,
      __metadata: { model: body.model }
    }, this._client));
  }
};
var Translations = class extends APIResource {
  create(body, options) {
    return this._client.post("/audio/translations", multipartFormRequestOptions({ body, ...options, __metadata: { model: body.model } }, this._client));
  }
};
var Audio = class extends APIResource {
  constructor() {
    super(...arguments);
    this.transcriptions = new Transcriptions(this._client);
    this.translations = new Translations(this._client);
    this.speech = new Speech(this._client);
  }
};
Audio.Transcriptions = Transcriptions;
Audio.Translations = Translations;
Audio.Speech = Speech;

// https://esm.sh/openai@5.12.0/denonext/resources/batches.development.mjs
var Batches = class extends APIResource {
  /**
   * Creates and executes a batch from an uploaded file of requests
   */
  create(body, options) {
    return this._client.post("/batches", { body, ...options });
  }
  /**
   * Retrieves a batch.
   */
  retrieve(batchID, options) {
    return this._client.get(path`/batches/${batchID}`, options);
  }
  /**
   * List your organization's batches.
   */
  list(query = {}, options) {
    return this._client.getAPIList("/batches", CursorPage, { query, ...options });
  }
  /**
   * Cancels an in-progress batch. The batch will be in status `cancelling` for up to
   * 10 minutes, before changing to `cancelled`, where it will have partial results
   * (if any) available in the output file.
   */
  cancel(batchID, options) {
    return this._client.post(path`/batches/${batchID}/cancel`, options);
  }
};

// https://esm.sh/openai@5.12.0/denonext/resources/beta/beta.development.mjs
var Assistants = class extends APIResource {
  /**
   * Create an assistant with a model and instructions.
   *
   * @example
   * ```ts
   * const assistant = await client.beta.assistants.create({
   *   model: 'gpt-4o',
   * });
   * ```
   */
  create(body, options) {
    return this._client.post("/assistants", {
      body,
      ...options,
      headers: buildHeaders([{ "OpenAI-Beta": "assistants=v2" }, options?.headers])
    });
  }
  /**
   * Retrieves an assistant.
   *
   * @example
   * ```ts
   * const assistant = await client.beta.assistants.retrieve(
   *   'assistant_id',
   * );
   * ```
   */
  retrieve(assistantID, options) {
    return this._client.get(path`/assistants/${assistantID}`, {
      ...options,
      headers: buildHeaders([{ "OpenAI-Beta": "assistants=v2" }, options?.headers])
    });
  }
  /**
   * Modifies an assistant.
   *
   * @example
   * ```ts
   * const assistant = await client.beta.assistants.update(
   *   'assistant_id',
   * );
   * ```
   */
  update(assistantID, body, options) {
    return this._client.post(path`/assistants/${assistantID}`, {
      body,
      ...options,
      headers: buildHeaders([{ "OpenAI-Beta": "assistants=v2" }, options?.headers])
    });
  }
  /**
   * Returns a list of assistants.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const assistant of client.beta.assistants.list()) {
   *   // ...
   * }
   * ```
   */
  list(query = {}, options) {
    return this._client.getAPIList("/assistants", CursorPage, {
      query,
      ...options,
      headers: buildHeaders([{ "OpenAI-Beta": "assistants=v2" }, options?.headers])
    });
  }
  /**
   * Delete an assistant.
   *
   * @example
   * ```ts
   * const assistantDeleted =
   *   await client.beta.assistants.delete('assistant_id');
   * ```
   */
  delete(assistantID, options) {
    return this._client.delete(path`/assistants/${assistantID}`, {
      ...options,
      headers: buildHeaders([{ "OpenAI-Beta": "assistants=v2" }, options?.headers])
    });
  }
};
var Sessions = class extends APIResource {
  /**
   * Create an ephemeral API token for use in client-side applications with the
   * Realtime API. Can be configured with the same session parameters as the
   * `session.update` client event.
   *
   * It responds with a session object, plus a `client_secret` key which contains a
   * usable ephemeral API token that can be used to authenticate browser clients for
   * the Realtime API.
   *
   * @example
   * ```ts
   * const session =
   *   await client.beta.realtime.sessions.create();
   * ```
   */
  create(body, options) {
    return this._client.post("/realtime/sessions", {
      body,
      ...options,
      headers: buildHeaders([{ "OpenAI-Beta": "assistants=v2" }, options?.headers])
    });
  }
};
var TranscriptionSessions = class extends APIResource {
  /**
   * Create an ephemeral API token for use in client-side applications with the
   * Realtime API specifically for realtime transcriptions. Can be configured with
   * the same session parameters as the `transcription_session.update` client event.
   *
   * It responds with a session object, plus a `client_secret` key which contains a
   * usable ephemeral API token that can be used to authenticate browser clients for
   * the Realtime API.
   *
   * @example
   * ```ts
   * const transcriptionSession =
   *   await client.beta.realtime.transcriptionSessions.create();
   * ```
   */
  create(body, options) {
    return this._client.post("/realtime/transcription_sessions", {
      body,
      ...options,
      headers: buildHeaders([{ "OpenAI-Beta": "assistants=v2" }, options?.headers])
    });
  }
};
var Realtime = class extends APIResource {
  constructor() {
    super(...arguments);
    this.sessions = new Sessions(this._client);
    this.transcriptionSessions = new TranscriptionSessions(this._client);
  }
};
Realtime.Sessions = Sessions;
Realtime.TranscriptionSessions = TranscriptionSessions;
var Messages3 = class extends APIResource {
  /**
   * Create a message.
   *
   * @deprecated The Assistants API is deprecated in favor of the Responses API
   */
  create(threadID, body, options) {
    return this._client.post(path`/threads/${threadID}/messages`, {
      body,
      ...options,
      headers: buildHeaders([{ "OpenAI-Beta": "assistants=v2" }, options?.headers])
    });
  }
  /**
   * Retrieve a message.
   *
   * @deprecated The Assistants API is deprecated in favor of the Responses API
   */
  retrieve(messageID, params, options) {
    const { thread_id } = params;
    return this._client.get(path`/threads/${thread_id}/messages/${messageID}`, {
      ...options,
      headers: buildHeaders([{ "OpenAI-Beta": "assistants=v2" }, options?.headers])
    });
  }
  /**
   * Modifies a message.
   *
   * @deprecated The Assistants API is deprecated in favor of the Responses API
   */
  update(messageID, params, options) {
    const { thread_id, ...body } = params;
    return this._client.post(path`/threads/${thread_id}/messages/${messageID}`, {
      body,
      ...options,
      headers: buildHeaders([{ "OpenAI-Beta": "assistants=v2" }, options?.headers])
    });
  }
  /**
   * Returns a list of messages for a given thread.
   *
   * @deprecated The Assistants API is deprecated in favor of the Responses API
   */
  list(threadID, query = {}, options) {
    return this._client.getAPIList(path`/threads/${threadID}/messages`, CursorPage, {
      query,
      ...options,
      headers: buildHeaders([{ "OpenAI-Beta": "assistants=v2" }, options?.headers])
    });
  }
  /**
   * Deletes a message.
   *
   * @deprecated The Assistants API is deprecated in favor of the Responses API
   */
  delete(messageID, params, options) {
    const { thread_id } = params;
    return this._client.delete(path`/threads/${thread_id}/messages/${messageID}`, {
      ...options,
      headers: buildHeaders([{ "OpenAI-Beta": "assistants=v2" }, options?.headers])
    });
  }
};
var Steps = class extends APIResource {
  /**
   * Retrieves a run step.
   *
   * @deprecated The Assistants API is deprecated in favor of the Responses API
   */
  retrieve(stepID, params, options) {
    const { thread_id, run_id, ...query } = params;
    return this._client.get(path`/threads/${thread_id}/runs/${run_id}/steps/${stepID}`, {
      query,
      ...options,
      headers: buildHeaders([{ "OpenAI-Beta": "assistants=v2" }, options?.headers])
    });
  }
  /**
   * Returns a list of run steps belonging to a run.
   *
   * @deprecated The Assistants API is deprecated in favor of the Responses API
   */
  list(runID, params, options) {
    const { thread_id, ...query } = params;
    return this._client.getAPIList(path`/threads/${thread_id}/runs/${runID}/steps`, CursorPage, {
      query,
      ...options,
      headers: buildHeaders([{ "OpenAI-Beta": "assistants=v2" }, options?.headers])
    });
  }
};
var _AssistantStream_instances;
var _a;
var _AssistantStream_events;
var _AssistantStream_runStepSnapshots;
var _AssistantStream_messageSnapshots;
var _AssistantStream_messageSnapshot;
var _AssistantStream_finalRun;
var _AssistantStream_currentContentIndex;
var _AssistantStream_currentContent;
var _AssistantStream_currentToolCallIndex;
var _AssistantStream_currentToolCall;
var _AssistantStream_currentEvent;
var _AssistantStream_currentRunSnapshot;
var _AssistantStream_currentRunStepSnapshot;
var _AssistantStream_addEvent;
var _AssistantStream_endRequest;
var _AssistantStream_handleMessage;
var _AssistantStream_handleRunStep;
var _AssistantStream_handleEvent;
var _AssistantStream_accumulateRunStep;
var _AssistantStream_accumulateMessage;
var _AssistantStream_accumulateContent;
var _AssistantStream_handleRun;
var AssistantStream = class extends EventStream {
  constructor() {
    super(...arguments);
    _AssistantStream_instances.add(this);
    _AssistantStream_events.set(this, []);
    _AssistantStream_runStepSnapshots.set(this, {});
    _AssistantStream_messageSnapshots.set(this, {});
    _AssistantStream_messageSnapshot.set(this, void 0);
    _AssistantStream_finalRun.set(this, void 0);
    _AssistantStream_currentContentIndex.set(this, void 0);
    _AssistantStream_currentContent.set(this, void 0);
    _AssistantStream_currentToolCallIndex.set(this, void 0);
    _AssistantStream_currentToolCall.set(this, void 0);
    _AssistantStream_currentEvent.set(this, void 0);
    _AssistantStream_currentRunSnapshot.set(this, void 0);
    _AssistantStream_currentRunStepSnapshot.set(this, void 0);
  }
  [(_AssistantStream_events = /* @__PURE__ */ new WeakMap(), _AssistantStream_runStepSnapshots = /* @__PURE__ */ new WeakMap(), _AssistantStream_messageSnapshots = /* @__PURE__ */ new WeakMap(), _AssistantStream_messageSnapshot = /* @__PURE__ */ new WeakMap(), _AssistantStream_finalRun = /* @__PURE__ */ new WeakMap(), _AssistantStream_currentContentIndex = /* @__PURE__ */ new WeakMap(), _AssistantStream_currentContent = /* @__PURE__ */ new WeakMap(), _AssistantStream_currentToolCallIndex = /* @__PURE__ */ new WeakMap(), _AssistantStream_currentToolCall = /* @__PURE__ */ new WeakMap(), _AssistantStream_currentEvent = /* @__PURE__ */ new WeakMap(), _AssistantStream_currentRunSnapshot = /* @__PURE__ */ new WeakMap(), _AssistantStream_currentRunStepSnapshot = /* @__PURE__ */ new WeakMap(), _AssistantStream_instances = /* @__PURE__ */ new WeakSet(), Symbol.asyncIterator)]() {
    const pushQueue = [];
    const readQueue = [];
    let done = false;
    this.on("event", (event) => {
      const reader = readQueue.shift();
      if (reader) {
        reader.resolve(event);
      } else {
        pushQueue.push(event);
      }
    });
    this.on("end", () => {
      done = true;
      for (const reader of readQueue) {
        reader.resolve(void 0);
      }
      readQueue.length = 0;
    });
    this.on("abort", (err) => {
      done = true;
      for (const reader of readQueue) {
        reader.reject(err);
      }
      readQueue.length = 0;
    });
    this.on("error", (err) => {
      done = true;
      for (const reader of readQueue) {
        reader.reject(err);
      }
      readQueue.length = 0;
    });
    return {
      next: async () => {
        if (!pushQueue.length) {
          if (done) {
            return { value: void 0, done: true };
          }
          return new Promise((resolve, reject) => readQueue.push({ resolve, reject })).then((chunk2) => chunk2 ? { value: chunk2, done: false } : { value: void 0, done: true });
        }
        const chunk = pushQueue.shift();
        return { value: chunk, done: false };
      },
      return: async () => {
        this.abort();
        return { value: void 0, done: true };
      }
    };
  }
  static fromReadableStream(stream2) {
    const runner = new _a();
    runner._run(() => runner._fromReadableStream(stream2));
    return runner;
  }
  async _fromReadableStream(readableStream, options) {
    const signal = options?.signal;
    if (signal) {
      if (signal.aborted)
        this.controller.abort();
      signal.addEventListener("abort", () => this.controller.abort());
    }
    this._connected();
    const stream2 = Stream.fromReadableStream(readableStream, this.controller);
    for await (const event of stream2) {
      __classPrivateFieldGet(this, _AssistantStream_instances, "m", _AssistantStream_addEvent).call(this, event);
    }
    if (stream2.controller.signal?.aborted) {
      throw new APIUserAbortError();
    }
    return this._addRun(__classPrivateFieldGet(this, _AssistantStream_instances, "m", _AssistantStream_endRequest).call(this));
  }
  toReadableStream() {
    const stream2 = new Stream(this[Symbol.asyncIterator].bind(this), this.controller);
    return stream2.toReadableStream();
  }
  static createToolAssistantStream(runId, runs, params, options) {
    const runner = new _a();
    runner._run(() => runner._runToolAssistantStream(runId, runs, params, {
      ...options,
      headers: { ...options?.headers, "X-Stainless-Helper-Method": "stream" }
    }));
    return runner;
  }
  async _createToolAssistantStream(run2, runId, params, options) {
    const signal = options?.signal;
    if (signal) {
      if (signal.aborted)
        this.controller.abort();
      signal.addEventListener("abort", () => this.controller.abort());
    }
    const body = { ...params, stream: true };
    const stream2 = await run2.submitToolOutputs(runId, body, {
      ...options,
      signal: this.controller.signal
    });
    this._connected();
    for await (const event of stream2) {
      __classPrivateFieldGet(this, _AssistantStream_instances, "m", _AssistantStream_addEvent).call(this, event);
    }
    if (stream2.controller.signal?.aborted) {
      throw new APIUserAbortError();
    }
    return this._addRun(__classPrivateFieldGet(this, _AssistantStream_instances, "m", _AssistantStream_endRequest).call(this));
  }
  static createThreadAssistantStream(params, thread, options) {
    const runner = new _a();
    runner._run(() => runner._threadAssistantStream(params, thread, {
      ...options,
      headers: { ...options?.headers, "X-Stainless-Helper-Method": "stream" }
    }));
    return runner;
  }
  static createAssistantStream(threadId, runs, params, options) {
    const runner = new _a();
    runner._run(() => runner._runAssistantStream(threadId, runs, params, {
      ...options,
      headers: { ...options?.headers, "X-Stainless-Helper-Method": "stream" }
    }));
    return runner;
  }
  currentEvent() {
    return __classPrivateFieldGet(this, _AssistantStream_currentEvent, "f");
  }
  currentRun() {
    return __classPrivateFieldGet(this, _AssistantStream_currentRunSnapshot, "f");
  }
  currentMessageSnapshot() {
    return __classPrivateFieldGet(this, _AssistantStream_messageSnapshot, "f");
  }
  currentRunStepSnapshot() {
    return __classPrivateFieldGet(this, _AssistantStream_currentRunStepSnapshot, "f");
  }
  async finalRunSteps() {
    await this.done();
    return Object.values(__classPrivateFieldGet(this, _AssistantStream_runStepSnapshots, "f"));
  }
  async finalMessages() {
    await this.done();
    return Object.values(__classPrivateFieldGet(this, _AssistantStream_messageSnapshots, "f"));
  }
  async finalRun() {
    await this.done();
    if (!__classPrivateFieldGet(this, _AssistantStream_finalRun, "f"))
      throw Error("Final run was not received.");
    return __classPrivateFieldGet(this, _AssistantStream_finalRun, "f");
  }
  async _createThreadAssistantStream(thread, params, options) {
    const signal = options?.signal;
    if (signal) {
      if (signal.aborted)
        this.controller.abort();
      signal.addEventListener("abort", () => this.controller.abort());
    }
    const body = { ...params, stream: true };
    const stream2 = await thread.createAndRun(body, { ...options, signal: this.controller.signal });
    this._connected();
    for await (const event of stream2) {
      __classPrivateFieldGet(this, _AssistantStream_instances, "m", _AssistantStream_addEvent).call(this, event);
    }
    if (stream2.controller.signal?.aborted) {
      throw new APIUserAbortError();
    }
    return this._addRun(__classPrivateFieldGet(this, _AssistantStream_instances, "m", _AssistantStream_endRequest).call(this));
  }
  async _createAssistantStream(run2, threadId, params, options) {
    const signal = options?.signal;
    if (signal) {
      if (signal.aborted)
        this.controller.abort();
      signal.addEventListener("abort", () => this.controller.abort());
    }
    const body = { ...params, stream: true };
    const stream2 = await run2.create(threadId, body, { ...options, signal: this.controller.signal });
    this._connected();
    for await (const event of stream2) {
      __classPrivateFieldGet(this, _AssistantStream_instances, "m", _AssistantStream_addEvent).call(this, event);
    }
    if (stream2.controller.signal?.aborted) {
      throw new APIUserAbortError();
    }
    return this._addRun(__classPrivateFieldGet(this, _AssistantStream_instances, "m", _AssistantStream_endRequest).call(this));
  }
  static accumulateDelta(acc, delta) {
    for (const [key, deltaValue] of Object.entries(delta)) {
      if (!acc.hasOwnProperty(key)) {
        acc[key] = deltaValue;
        continue;
      }
      let accValue = acc[key];
      if (accValue === null || accValue === void 0) {
        acc[key] = deltaValue;
        continue;
      }
      if (key === "index" || key === "type") {
        acc[key] = deltaValue;
        continue;
      }
      if (typeof accValue === "string" && typeof deltaValue === "string") {
        accValue += deltaValue;
      } else if (typeof accValue === "number" && typeof deltaValue === "number") {
        accValue += deltaValue;
      } else if (isObj(accValue) && isObj(deltaValue)) {
        accValue = this.accumulateDelta(accValue, deltaValue);
      } else if (Array.isArray(accValue) && Array.isArray(deltaValue)) {
        if (accValue.every((x16) => typeof x16 === "string" || typeof x16 === "number")) {
          accValue.push(...deltaValue);
          continue;
        }
        for (const deltaEntry of deltaValue) {
          if (!isObj(deltaEntry)) {
            throw new Error(`Expected array delta entry to be an object but got: ${deltaEntry}`);
          }
          const index = deltaEntry["index"];
          if (index == null) {
            console.error(deltaEntry);
            throw new Error("Expected array delta entry to have an `index` property");
          }
          if (typeof index !== "number") {
            throw new Error(`Expected array delta entry \`index\` property to be a number but got ${index}`);
          }
          const accEntry = accValue[index];
          if (accEntry == null) {
            accValue.push(deltaEntry);
          } else {
            accValue[index] = this.accumulateDelta(accEntry, deltaEntry);
          }
        }
        continue;
      } else {
        throw Error(`Unhandled record type: ${key}, deltaValue: ${deltaValue}, accValue: ${accValue}`);
      }
      acc[key] = accValue;
    }
    return acc;
  }
  _addRun(run2) {
    return run2;
  }
  async _threadAssistantStream(params, thread, options) {
    return await this._createThreadAssistantStream(thread, params, options);
  }
  async _runAssistantStream(threadId, runs, params, options) {
    return await this._createAssistantStream(runs, threadId, params, options);
  }
  async _runToolAssistantStream(runId, runs, params, options) {
    return await this._createToolAssistantStream(runs, runId, params, options);
  }
};
_a = AssistantStream, _AssistantStream_addEvent = function _AssistantStream_addEvent2(event) {
  if (this.ended)
    return;
  __classPrivateFieldSet(this, _AssistantStream_currentEvent, event, "f");
  __classPrivateFieldGet(this, _AssistantStream_instances, "m", _AssistantStream_handleEvent).call(this, event);
  switch (event.event) {
    case "thread.created":
      break;
    case "thread.run.created":
    case "thread.run.queued":
    case "thread.run.in_progress":
    case "thread.run.requires_action":
    case "thread.run.completed":
    case "thread.run.incomplete":
    case "thread.run.failed":
    case "thread.run.cancelling":
    case "thread.run.cancelled":
    case "thread.run.expired":
      __classPrivateFieldGet(this, _AssistantStream_instances, "m", _AssistantStream_handleRun).call(this, event);
      break;
    case "thread.run.step.created":
    case "thread.run.step.in_progress":
    case "thread.run.step.delta":
    case "thread.run.step.completed":
    case "thread.run.step.failed":
    case "thread.run.step.cancelled":
    case "thread.run.step.expired":
      __classPrivateFieldGet(this, _AssistantStream_instances, "m", _AssistantStream_handleRunStep).call(this, event);
      break;
    case "thread.message.created":
    case "thread.message.in_progress":
    case "thread.message.delta":
    case "thread.message.completed":
    case "thread.message.incomplete":
      __classPrivateFieldGet(this, _AssistantStream_instances, "m", _AssistantStream_handleMessage).call(this, event);
      break;
    case "error":
      throw new Error("Encountered an error event in event processing - errors should be processed earlier");
    default:
      assertNever3(event);
  }
}, _AssistantStream_endRequest = function _AssistantStream_endRequest2() {
  if (this.ended) {
    throw new OpenAIError(`stream has ended, this shouldn't happen`);
  }
  if (!__classPrivateFieldGet(this, _AssistantStream_finalRun, "f"))
    throw Error("Final run has not been received");
  return __classPrivateFieldGet(this, _AssistantStream_finalRun, "f");
}, _AssistantStream_handleMessage = function _AssistantStream_handleMessage2(event) {
  const [accumulatedMessage, newContent] = __classPrivateFieldGet(this, _AssistantStream_instances, "m", _AssistantStream_accumulateMessage).call(this, event, __classPrivateFieldGet(this, _AssistantStream_messageSnapshot, "f"));
  __classPrivateFieldSet(this, _AssistantStream_messageSnapshot, accumulatedMessage, "f");
  __classPrivateFieldGet(this, _AssistantStream_messageSnapshots, "f")[accumulatedMessage.id] = accumulatedMessage;
  for (const content of newContent) {
    const snapshotContent = accumulatedMessage.content[content.index];
    if (snapshotContent?.type == "text") {
      this._emit("textCreated", snapshotContent.text);
    }
  }
  switch (event.event) {
    case "thread.message.created":
      this._emit("messageCreated", event.data);
      break;
    case "thread.message.in_progress":
      break;
    case "thread.message.delta":
      this._emit("messageDelta", event.data.delta, accumulatedMessage);
      if (event.data.delta.content) {
        for (const content of event.data.delta.content) {
          if (content.type == "text" && content.text) {
            let textDelta = content.text;
            let snapshot = accumulatedMessage.content[content.index];
            if (snapshot && snapshot.type == "text") {
              this._emit("textDelta", textDelta, snapshot.text);
            } else {
              throw Error("The snapshot associated with this text delta is not text or missing");
            }
          }
          if (content.index != __classPrivateFieldGet(this, _AssistantStream_currentContentIndex, "f")) {
            if (__classPrivateFieldGet(this, _AssistantStream_currentContent, "f")) {
              switch (__classPrivateFieldGet(this, _AssistantStream_currentContent, "f").type) {
                case "text":
                  this._emit("textDone", __classPrivateFieldGet(this, _AssistantStream_currentContent, "f").text, __classPrivateFieldGet(this, _AssistantStream_messageSnapshot, "f"));
                  break;
                case "image_file":
                  this._emit("imageFileDone", __classPrivateFieldGet(this, _AssistantStream_currentContent, "f").image_file, __classPrivateFieldGet(this, _AssistantStream_messageSnapshot, "f"));
                  break;
              }
            }
            __classPrivateFieldSet(this, _AssistantStream_currentContentIndex, content.index, "f");
          }
          __classPrivateFieldSet(this, _AssistantStream_currentContent, accumulatedMessage.content[content.index], "f");
        }
      }
      break;
    case "thread.message.completed":
    case "thread.message.incomplete":
      if (__classPrivateFieldGet(this, _AssistantStream_currentContentIndex, "f") !== void 0) {
        const currentContent = event.data.content[__classPrivateFieldGet(this, _AssistantStream_currentContentIndex, "f")];
        if (currentContent) {
          switch (currentContent.type) {
            case "image_file":
              this._emit("imageFileDone", currentContent.image_file, __classPrivateFieldGet(this, _AssistantStream_messageSnapshot, "f"));
              break;
            case "text":
              this._emit("textDone", currentContent.text, __classPrivateFieldGet(this, _AssistantStream_messageSnapshot, "f"));
              break;
          }
        }
      }
      if (__classPrivateFieldGet(this, _AssistantStream_messageSnapshot, "f")) {
        this._emit("messageDone", event.data);
      }
      __classPrivateFieldSet(this, _AssistantStream_messageSnapshot, void 0, "f");
  }
}, _AssistantStream_handleRunStep = function _AssistantStream_handleRunStep2(event) {
  const accumulatedRunStep = __classPrivateFieldGet(this, _AssistantStream_instances, "m", _AssistantStream_accumulateRunStep).call(this, event);
  __classPrivateFieldSet(this, _AssistantStream_currentRunStepSnapshot, accumulatedRunStep, "f");
  switch (event.event) {
    case "thread.run.step.created":
      this._emit("runStepCreated", event.data);
      break;
    case "thread.run.step.delta":
      const delta = event.data.delta;
      if (delta.step_details && delta.step_details.type == "tool_calls" && delta.step_details.tool_calls && accumulatedRunStep.step_details.type == "tool_calls") {
        for (const toolCall of delta.step_details.tool_calls) {
          if (toolCall.index == __classPrivateFieldGet(this, _AssistantStream_currentToolCallIndex, "f")) {
            this._emit("toolCallDelta", toolCall, accumulatedRunStep.step_details.tool_calls[toolCall.index]);
          } else {
            if (__classPrivateFieldGet(this, _AssistantStream_currentToolCall, "f")) {
              this._emit("toolCallDone", __classPrivateFieldGet(this, _AssistantStream_currentToolCall, "f"));
            }
            __classPrivateFieldSet(this, _AssistantStream_currentToolCallIndex, toolCall.index, "f");
            __classPrivateFieldSet(this, _AssistantStream_currentToolCall, accumulatedRunStep.step_details.tool_calls[toolCall.index], "f");
            if (__classPrivateFieldGet(this, _AssistantStream_currentToolCall, "f"))
              this._emit("toolCallCreated", __classPrivateFieldGet(this, _AssistantStream_currentToolCall, "f"));
          }
        }
      }
      this._emit("runStepDelta", event.data.delta, accumulatedRunStep);
      break;
    case "thread.run.step.completed":
    case "thread.run.step.failed":
    case "thread.run.step.cancelled":
    case "thread.run.step.expired":
      __classPrivateFieldSet(this, _AssistantStream_currentRunStepSnapshot, void 0, "f");
      const details = event.data.step_details;
      if (details.type == "tool_calls") {
        if (__classPrivateFieldGet(this, _AssistantStream_currentToolCall, "f")) {
          this._emit("toolCallDone", __classPrivateFieldGet(this, _AssistantStream_currentToolCall, "f"));
          __classPrivateFieldSet(this, _AssistantStream_currentToolCall, void 0, "f");
        }
      }
      this._emit("runStepDone", event.data, accumulatedRunStep);
      break;
    case "thread.run.step.in_progress":
      break;
  }
}, _AssistantStream_handleEvent = function _AssistantStream_handleEvent2(event) {
  __classPrivateFieldGet(this, _AssistantStream_events, "f").push(event);
  this._emit("event", event);
}, _AssistantStream_accumulateRunStep = function _AssistantStream_accumulateRunStep2(event) {
  switch (event.event) {
    case "thread.run.step.created":
      __classPrivateFieldGet(this, _AssistantStream_runStepSnapshots, "f")[event.data.id] = event.data;
      return event.data;
    case "thread.run.step.delta":
      let snapshot = __classPrivateFieldGet(this, _AssistantStream_runStepSnapshots, "f")[event.data.id];
      if (!snapshot) {
        throw Error("Received a RunStepDelta before creation of a snapshot");
      }
      let data = event.data;
      if (data.delta) {
        const accumulated = _a.accumulateDelta(snapshot, data.delta);
        __classPrivateFieldGet(this, _AssistantStream_runStepSnapshots, "f")[event.data.id] = accumulated;
      }
      return __classPrivateFieldGet(this, _AssistantStream_runStepSnapshots, "f")[event.data.id];
    case "thread.run.step.completed":
    case "thread.run.step.failed":
    case "thread.run.step.cancelled":
    case "thread.run.step.expired":
    case "thread.run.step.in_progress":
      __classPrivateFieldGet(this, _AssistantStream_runStepSnapshots, "f")[event.data.id] = event.data;
      break;
  }
  if (__classPrivateFieldGet(this, _AssistantStream_runStepSnapshots, "f")[event.data.id])
    return __classPrivateFieldGet(this, _AssistantStream_runStepSnapshots, "f")[event.data.id];
  throw new Error("No snapshot available");
}, _AssistantStream_accumulateMessage = function _AssistantStream_accumulateMessage2(event, snapshot) {
  let newContent = [];
  switch (event.event) {
    case "thread.message.created":
      return [event.data, newContent];
    case "thread.message.delta":
      if (!snapshot) {
        throw Error("Received a delta with no existing snapshot (there should be one from message creation)");
      }
      let data = event.data;
      if (data.delta.content) {
        for (const contentElement of data.delta.content) {
          if (contentElement.index in snapshot.content) {
            let currentContent = snapshot.content[contentElement.index];
            snapshot.content[contentElement.index] = __classPrivateFieldGet(this, _AssistantStream_instances, "m", _AssistantStream_accumulateContent).call(this, contentElement, currentContent);
          } else {
            snapshot.content[contentElement.index] = contentElement;
            newContent.push(contentElement);
          }
        }
      }
      return [snapshot, newContent];
    case "thread.message.in_progress":
    case "thread.message.completed":
    case "thread.message.incomplete":
      if (snapshot) {
        return [snapshot, newContent];
      } else {
        throw Error("Received thread message event with no existing snapshot");
      }
  }
  throw Error("Tried to accumulate a non-message event");
}, _AssistantStream_accumulateContent = function _AssistantStream_accumulateContent2(contentElement, currentContent) {
  return _a.accumulateDelta(currentContent, contentElement);
}, _AssistantStream_handleRun = function _AssistantStream_handleRun2(event) {
  __classPrivateFieldSet(this, _AssistantStream_currentRunSnapshot, event.data, "f");
  switch (event.event) {
    case "thread.run.created":
      break;
    case "thread.run.queued":
      break;
    case "thread.run.in_progress":
      break;
    case "thread.run.requires_action":
    case "thread.run.cancelled":
    case "thread.run.failed":
    case "thread.run.completed":
    case "thread.run.expired":
    case "thread.run.incomplete":
      __classPrivateFieldSet(this, _AssistantStream_finalRun, event.data, "f");
      if (__classPrivateFieldGet(this, _AssistantStream_currentToolCall, "f")) {
        this._emit("toolCallDone", __classPrivateFieldGet(this, _AssistantStream_currentToolCall, "f"));
        __classPrivateFieldSet(this, _AssistantStream_currentToolCall, void 0, "f");
      }
      break;
    case "thread.run.cancelling":
      break;
  }
};
function assertNever3(_x) {
}
var Runs = class extends APIResource {
  constructor() {
    super(...arguments);
    this.steps = new Steps(this._client);
  }
  create(threadID, params, options) {
    const { include, ...body } = params;
    return this._client.post(path`/threads/${threadID}/runs`, {
      query: { include },
      body,
      ...options,
      headers: buildHeaders([{ "OpenAI-Beta": "assistants=v2" }, options?.headers]),
      stream: params.stream ?? false
    });
  }
  /**
   * Retrieves a run.
   *
   * @deprecated The Assistants API is deprecated in favor of the Responses API
   */
  retrieve(runID, params, options) {
    const { thread_id } = params;
    return this._client.get(path`/threads/${thread_id}/runs/${runID}`, {
      ...options,
      headers: buildHeaders([{ "OpenAI-Beta": "assistants=v2" }, options?.headers])
    });
  }
  /**
   * Modifies a run.
   *
   * @deprecated The Assistants API is deprecated in favor of the Responses API
   */
  update(runID, params, options) {
    const { thread_id, ...body } = params;
    return this._client.post(path`/threads/${thread_id}/runs/${runID}`, {
      body,
      ...options,
      headers: buildHeaders([{ "OpenAI-Beta": "assistants=v2" }, options?.headers])
    });
  }
  /**
   * Returns a list of runs belonging to a thread.
   *
   * @deprecated The Assistants API is deprecated in favor of the Responses API
   */
  list(threadID, query = {}, options) {
    return this._client.getAPIList(path`/threads/${threadID}/runs`, CursorPage, {
      query,
      ...options,
      headers: buildHeaders([{ "OpenAI-Beta": "assistants=v2" }, options?.headers])
    });
  }
  /**
   * Cancels a run that is `in_progress`.
   *
   * @deprecated The Assistants API is deprecated in favor of the Responses API
   */
  cancel(runID, params, options) {
    const { thread_id } = params;
    return this._client.post(path`/threads/${thread_id}/runs/${runID}/cancel`, {
      ...options,
      headers: buildHeaders([{ "OpenAI-Beta": "assistants=v2" }, options?.headers])
    });
  }
  /**
   * A helper to create a run an poll for a terminal state. More information on Run
   * lifecycles can be found here:
   * https://platform.openai.com/docs/assistants/how-it-works/runs-and-run-steps
   */
  async createAndPoll(threadId, body, options) {
    const run2 = await this.create(threadId, body, options);
    return await this.poll(run2.id, { thread_id: threadId }, options);
  }
  /**
   * Create a Run stream
   *
   * @deprecated use `stream` instead
   */
  createAndStream(threadId, body, options) {
    return AssistantStream.createAssistantStream(threadId, this._client.beta.threads.runs, body, options);
  }
  /**
   * A helper to poll a run status until it reaches a terminal state. More
   * information on Run lifecycles can be found here:
   * https://platform.openai.com/docs/assistants/how-it-works/runs-and-run-steps
   */
  async poll(runId, params, options) {
    const headers = buildHeaders([
      options?.headers,
      {
        "X-Stainless-Poll-Helper": "true",
        "X-Stainless-Custom-Poll-Interval": options?.pollIntervalMs?.toString() ?? void 0
      }
    ]);
    while (true) {
      const { data: run2, response } = await this.retrieve(runId, params, {
        ...options,
        headers: { ...options?.headers, ...headers }
      }).withResponse();
      switch (run2.status) {
        //If we are in any sort of intermediate state we poll
        case "queued":
        case "in_progress":
        case "cancelling":
          let sleepInterval = 5e3;
          if (options?.pollIntervalMs) {
            sleepInterval = options.pollIntervalMs;
          } else {
            const headerInterval = response.headers.get("openai-poll-after-ms");
            if (headerInterval) {
              const headerIntervalMs = parseInt(headerInterval);
              if (!isNaN(headerIntervalMs)) {
                sleepInterval = headerIntervalMs;
              }
            }
          }
          await sleep(sleepInterval);
          break;
        //We return the run in any terminal state.
        case "requires_action":
        case "incomplete":
        case "cancelled":
        case "completed":
        case "failed":
        case "expired":
          return run2;
      }
    }
  }
  /**
   * Create a Run stream
   */
  stream(threadId, body, options) {
    return AssistantStream.createAssistantStream(threadId, this._client.beta.threads.runs, body, options);
  }
  submitToolOutputs(runID, params, options) {
    const { thread_id, ...body } = params;
    return this._client.post(path`/threads/${thread_id}/runs/${runID}/submit_tool_outputs`, {
      body,
      ...options,
      headers: buildHeaders([{ "OpenAI-Beta": "assistants=v2" }, options?.headers]),
      stream: params.stream ?? false
    });
  }
  /**
   * A helper to submit a tool output to a run and poll for a terminal run state.
   * More information on Run lifecycles can be found here:
   * https://platform.openai.com/docs/assistants/how-it-works/runs-and-run-steps
   */
  async submitToolOutputsAndPoll(runId, params, options) {
    const run2 = await this.submitToolOutputs(runId, params, options);
    return await this.poll(run2.id, params, options);
  }
  /**
   * Submit the tool outputs from a previous run and stream the run to a terminal
   * state. More information on Run lifecycles can be found here:
   * https://platform.openai.com/docs/assistants/how-it-works/runs-and-run-steps
   */
  submitToolOutputsStream(runId, params, options) {
    return AssistantStream.createToolAssistantStream(runId, this._client.beta.threads.runs, params, options);
  }
};
Runs.Steps = Steps;
var Threads = class extends APIResource {
  constructor() {
    super(...arguments);
    this.runs = new Runs(this._client);
    this.messages = new Messages3(this._client);
  }
  /**
   * Create a thread.
   *
   * @deprecated The Assistants API is deprecated in favor of the Responses API
   */
  create(body = {}, options) {
    return this._client.post("/threads", {
      body,
      ...options,
      headers: buildHeaders([{ "OpenAI-Beta": "assistants=v2" }, options?.headers])
    });
  }
  /**
   * Retrieves a thread.
   *
   * @deprecated The Assistants API is deprecated in favor of the Responses API
   */
  retrieve(threadID, options) {
    return this._client.get(path`/threads/${threadID}`, {
      ...options,
      headers: buildHeaders([{ "OpenAI-Beta": "assistants=v2" }, options?.headers])
    });
  }
  /**
   * Modifies a thread.
   *
   * @deprecated The Assistants API is deprecated in favor of the Responses API
   */
  update(threadID, body, options) {
    return this._client.post(path`/threads/${threadID}`, {
      body,
      ...options,
      headers: buildHeaders([{ "OpenAI-Beta": "assistants=v2" }, options?.headers])
    });
  }
  /**
   * Delete a thread.
   *
   * @deprecated The Assistants API is deprecated in favor of the Responses API
   */
  delete(threadID, options) {
    return this._client.delete(path`/threads/${threadID}`, {
      ...options,
      headers: buildHeaders([{ "OpenAI-Beta": "assistants=v2" }, options?.headers])
    });
  }
  createAndRun(body, options) {
    return this._client.post("/threads/runs", {
      body,
      ...options,
      headers: buildHeaders([{ "OpenAI-Beta": "assistants=v2" }, options?.headers]),
      stream: body.stream ?? false
    });
  }
  /**
   * A helper to create a thread, start a run and then poll for a terminal state.
   * More information on Run lifecycles can be found here:
   * https://platform.openai.com/docs/assistants/how-it-works/runs-and-run-steps
   */
  async createAndRunPoll(body, options) {
    const run2 = await this.createAndRun(body, options);
    return await this.runs.poll(run2.id, { thread_id: run2.thread_id }, options);
  }
  /**
   * Create a thread and stream the run back
   */
  createAndRunStream(body, options) {
    return AssistantStream.createThreadAssistantStream(body, this._client.beta.threads, options);
  }
};
Threads.Runs = Runs;
Threads.Messages = Messages3;
var Beta = class extends APIResource {
  constructor() {
    super(...arguments);
    this.realtime = new Realtime(this._client);
    this.assistants = new Assistants(this._client);
    this.threads = new Threads(this._client);
  }
};
Beta.Realtime = Realtime;
Beta.Assistants = Assistants;
Beta.Threads = Threads;

// https://esm.sh/openai@5.12.0/denonext/resources/completions.development.mjs
var Completions3 = class extends APIResource {
  create(body, options) {
    return this._client.post("/completions", { body, ...options, stream: body.stream ?? false });
  }
};

// https://esm.sh/openai@5.12.0/denonext/resources/containers/containers.development.mjs
var Content = class extends APIResource {
  /**
   * Retrieve Container File Content
   */
  retrieve(fileID, params, options) {
    const { container_id } = params;
    return this._client.get(path`/containers/${container_id}/files/${fileID}/content`, {
      ...options,
      headers: buildHeaders([{ Accept: "application/binary" }, options?.headers]),
      __binaryResponse: true
    });
  }
};
var Files = class extends APIResource {
  constructor() {
    super(...arguments);
    this.content = new Content(this._client);
  }
  /**
   * Create a Container File
   *
   * You can send either a multipart/form-data request with the raw file content, or
   * a JSON request with a file ID.
   */
  create(containerID, body, options) {
    return this._client.post(path`/containers/${containerID}/files`, multipartFormRequestOptions({ body, ...options }, this._client));
  }
  /**
   * Retrieve Container File
   */
  retrieve(fileID, params, options) {
    const { container_id } = params;
    return this._client.get(path`/containers/${container_id}/files/${fileID}`, options);
  }
  /**
   * List Container files
   */
  list(containerID, query = {}, options) {
    return this._client.getAPIList(path`/containers/${containerID}/files`, CursorPage, {
      query,
      ...options
    });
  }
  /**
   * Delete Container File
   */
  delete(fileID, params, options) {
    const { container_id } = params;
    return this._client.delete(path`/containers/${container_id}/files/${fileID}`, {
      ...options,
      headers: buildHeaders([{ Accept: "*/*" }, options?.headers])
    });
  }
};
Files.Content = Content;
var Containers = class extends APIResource {
  constructor() {
    super(...arguments);
    this.files = new Files(this._client);
  }
  /**
   * Create Container
   */
  create(body, options) {
    return this._client.post("/containers", { body, ...options });
  }
  /**
   * Retrieve Container
   */
  retrieve(containerID, options) {
    return this._client.get(path`/containers/${containerID}`, options);
  }
  /**
   * List Containers
   */
  list(query = {}, options) {
    return this._client.getAPIList("/containers", CursorPage, { query, ...options });
  }
  /**
   * Delete Container
   */
  delete(containerID, options) {
    return this._client.delete(path`/containers/${containerID}`, {
      ...options,
      headers: buildHeaders([{ Accept: "*/*" }, options?.headers])
    });
  }
};
Containers.Files = Files;

// https://esm.sh/openai@5.12.0/denonext/resources/embeddings.development.mjs
var Embeddings = class extends APIResource {
  /**
   * Creates an embedding vector representing the input text.
   *
   * @example
   * ```ts
   * const createEmbeddingResponse =
   *   await client.embeddings.create({
   *     input: 'The quick brown fox jumped over the lazy dog',
   *     model: 'text-embedding-3-small',
   *   });
   * ```
   */
  create(body, options) {
    const hasUserProvidedEncodingFormat = !!body.encoding_format;
    let encoding_format = hasUserProvidedEncodingFormat ? body.encoding_format : "base64";
    if (hasUserProvidedEncodingFormat) {
      loggerFor(this._client).debug("embeddings/user defined encoding_format:", body.encoding_format);
    }
    const response = this._client.post("/embeddings", {
      body: {
        ...body,
        encoding_format
      },
      ...options
    });
    if (hasUserProvidedEncodingFormat) {
      return response;
    }
    loggerFor(this._client).debug("embeddings/decoding base64 embeddings from base64");
    return response._thenUnwrap((response2) => {
      if (response2 && response2.data) {
        response2.data.forEach((embeddingBase64Obj) => {
          const embeddingBase64Str = embeddingBase64Obj.embedding;
          embeddingBase64Obj.embedding = toFloat32Array(embeddingBase64Str);
        });
      }
      return response2;
    });
  }
};

// https://esm.sh/openai@5.12.0/denonext/resources/evals/evals.development.mjs
var OutputItems = class extends APIResource {
  /**
   * Get an evaluation run output item by ID.
   */
  retrieve(outputItemID, params, options) {
    const { eval_id, run_id } = params;
    return this._client.get(path`/evals/${eval_id}/runs/${run_id}/output_items/${outputItemID}`, options);
  }
  /**
   * Get a list of output items for an evaluation run.
   */
  list(runID, params, options) {
    const { eval_id, ...query } = params;
    return this._client.getAPIList(path`/evals/${eval_id}/runs/${runID}/output_items`, CursorPage, { query, ...options });
  }
};
var Runs2 = class extends APIResource {
  constructor() {
    super(...arguments);
    this.outputItems = new OutputItems(this._client);
  }
  /**
   * Kicks off a new run for a given evaluation, specifying the data source, and what
   * model configuration to use to test. The datasource will be validated against the
   * schema specified in the config of the evaluation.
   */
  create(evalID, body, options) {
    return this._client.post(path`/evals/${evalID}/runs`, { body, ...options });
  }
  /**
   * Get an evaluation run by ID.
   */
  retrieve(runID, params, options) {
    const { eval_id } = params;
    return this._client.get(path`/evals/${eval_id}/runs/${runID}`, options);
  }
  /**
   * Get a list of runs for an evaluation.
   */
  list(evalID, query = {}, options) {
    return this._client.getAPIList(path`/evals/${evalID}/runs`, CursorPage, {
      query,
      ...options
    });
  }
  /**
   * Delete an eval run.
   */
  delete(runID, params, options) {
    const { eval_id } = params;
    return this._client.delete(path`/evals/${eval_id}/runs/${runID}`, options);
  }
  /**
   * Cancel an ongoing evaluation run.
   */
  cancel(runID, params, options) {
    const { eval_id } = params;
    return this._client.post(path`/evals/${eval_id}/runs/${runID}`, options);
  }
};
Runs2.OutputItems = OutputItems;
var Evals = class extends APIResource {
  constructor() {
    super(...arguments);
    this.runs = new Runs2(this._client);
  }
  /**
   * Create the structure of an evaluation that can be used to test a model's
   * performance. An evaluation is a set of testing criteria and the config for a
   * data source, which dictates the schema of the data used in the evaluation. After
   * creating an evaluation, you can run it on different models and model parameters.
   * We support several types of graders and datasources. For more information, see
   * the [Evals guide](https://platform.openai.com/docs/guides/evals).
   */
  create(body, options) {
    return this._client.post("/evals", { body, ...options });
  }
  /**
   * Get an evaluation by ID.
   */
  retrieve(evalID, options) {
    return this._client.get(path`/evals/${evalID}`, options);
  }
  /**
   * Update certain properties of an evaluation.
   */
  update(evalID, body, options) {
    return this._client.post(path`/evals/${evalID}`, { body, ...options });
  }
  /**
   * List evaluations for a project.
   */
  list(query = {}, options) {
    return this._client.getAPIList("/evals", CursorPage, { query, ...options });
  }
  /**
   * Delete an evaluation.
   */
  delete(evalID, options) {
    return this._client.delete(path`/evals/${evalID}`, options);
  }
};
Evals.Runs = Runs2;

// https://esm.sh/openai@5.12.0/denonext/resources/files.development.mjs
var Files2 = class extends APIResource {
  /**
   * Upload a file that can be used across various endpoints. Individual files can be
   * up to 512 MB, and the size of all files uploaded by one organization can be up
   * to 100 GB.
   *
   * The Assistants API supports files up to 2 million tokens and of specific file
   * types. See the
   * [Assistants Tools guide](https://platform.openai.com/docs/assistants/tools) for
   * details.
   *
   * The Fine-tuning API only supports `.jsonl` files. The input also has certain
   * required formats for fine-tuning
   * [chat](https://platform.openai.com/docs/api-reference/fine-tuning/chat-input) or
   * [completions](https://platform.openai.com/docs/api-reference/fine-tuning/completions-input)
   * models.
   *
   * The Batch API only supports `.jsonl` files up to 200 MB in size. The input also
   * has a specific required
   * [format](https://platform.openai.com/docs/api-reference/batch/request-input).
   *
   * Please [contact us](https://help.openai.com/) if you need to increase these
   * storage limits.
   */
  create(body, options) {
    return this._client.post("/files", multipartFormRequestOptions({ body, ...options }, this._client));
  }
  /**
   * Returns information about a specific file.
   */
  retrieve(fileID, options) {
    return this._client.get(path`/files/${fileID}`, options);
  }
  /**
   * Returns a list of files.
   */
  list(query = {}, options) {
    return this._client.getAPIList("/files", CursorPage, { query, ...options });
  }
  /**
   * Delete a file.
   */
  delete(fileID, options) {
    return this._client.delete(path`/files/${fileID}`, options);
  }
  /**
   * Returns the contents of the specified file.
   */
  content(fileID, options) {
    return this._client.get(path`/files/${fileID}/content`, {
      ...options,
      headers: buildHeaders([{ Accept: "application/binary" }, options?.headers]),
      __binaryResponse: true
    });
  }
  /**
   * Waits for the given file to be processed, default timeout is 30 mins.
   */
  async waitForProcessing(id, { pollInterval = 5e3, maxWait = 30 * 60 * 1e3 } = {}) {
    const TERMINAL_STATES = /* @__PURE__ */ new Set(["processed", "error", "deleted"]);
    const start = Date.now();
    let file = await this.retrieve(id);
    while (!file.status || !TERMINAL_STATES.has(file.status)) {
      await sleep(pollInterval);
      file = await this.retrieve(id);
      if (Date.now() - start > maxWait) {
        throw new APIConnectionTimeoutError({
          message: `Giving up on waiting for file ${id} to finish processing after ${maxWait} milliseconds.`
        });
      }
    }
    return file;
  }
};

// https://esm.sh/openai@5.12.0/denonext/resources/fine-tuning/fine-tuning.development.mjs
var Methods = class extends APIResource {
};
var Graders = class extends APIResource {
  /**
   * Run a grader.
   *
   * @example
   * ```ts
   * const response = await client.fineTuning.alpha.graders.run({
   *   grader: {
   *     input: 'input',
   *     name: 'name',
   *     operation: 'eq',
   *     reference: 'reference',
   *     type: 'string_check',
   *   },
   *   model_sample: 'model_sample',
   * });
   * ```
   */
  run(body, options) {
    return this._client.post("/fine_tuning/alpha/graders/run", { body, ...options });
  }
  /**
   * Validate a grader.
   *
   * @example
   * ```ts
   * const response =
   *   await client.fineTuning.alpha.graders.validate({
   *     grader: {
   *       input: 'input',
   *       name: 'name',
   *       operation: 'eq',
   *       reference: 'reference',
   *       type: 'string_check',
   *     },
   *   });
   * ```
   */
  validate(body, options) {
    return this._client.post("/fine_tuning/alpha/graders/validate", { body, ...options });
  }
};
var Alpha = class extends APIResource {
  constructor() {
    super(...arguments);
    this.graders = new Graders(this._client);
  }
};
Alpha.Graders = Graders;
var Permissions = class extends APIResource {
  /**
   * **NOTE:** Calling this endpoint requires an [admin API key](../admin-api-keys).
   *
   * This enables organization owners to share fine-tuned models with other projects
   * in their organization.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const permissionCreateResponse of client.fineTuning.checkpoints.permissions.create(
   *   'ft:gpt-4o-mini-2024-07-18:org:weather:B7R9VjQd',
   *   { project_ids: ['string'] },
   * )) {
   *   // ...
   * }
   * ```
   */
  create(fineTunedModelCheckpoint, body, options) {
    return this._client.getAPIList(path`/fine_tuning/checkpoints/${fineTunedModelCheckpoint}/permissions`, Page, { body, method: "post", ...options });
  }
  /**
   * **NOTE:** This endpoint requires an [admin API key](../admin-api-keys).
   *
   * Organization owners can use this endpoint to view all permissions for a
   * fine-tuned model checkpoint.
   *
   * @example
   * ```ts
   * const permission =
   *   await client.fineTuning.checkpoints.permissions.retrieve(
   *     'ft-AF1WoRqd3aJAHsqc9NY7iL8F',
   *   );
   * ```
   */
  retrieve(fineTunedModelCheckpoint, query = {}, options) {
    return this._client.get(path`/fine_tuning/checkpoints/${fineTunedModelCheckpoint}/permissions`, {
      query,
      ...options
    });
  }
  /**
   * **NOTE:** This endpoint requires an [admin API key](../admin-api-keys).
   *
   * Organization owners can use this endpoint to delete a permission for a
   * fine-tuned model checkpoint.
   *
   * @example
   * ```ts
   * const permission =
   *   await client.fineTuning.checkpoints.permissions.delete(
   *     'cp_zc4Q7MP6XxulcVzj4MZdwsAB',
   *     {
   *       fine_tuned_model_checkpoint:
   *         'ft:gpt-4o-mini-2024-07-18:org:weather:B7R9VjQd',
   *     },
   *   );
   * ```
   */
  delete(permissionID, params, options) {
    const { fine_tuned_model_checkpoint } = params;
    return this._client.delete(path`/fine_tuning/checkpoints/${fine_tuned_model_checkpoint}/permissions/${permissionID}`, options);
  }
};
var Checkpoints = class extends APIResource {
  constructor() {
    super(...arguments);
    this.permissions = new Permissions(this._client);
  }
};
Checkpoints.Permissions = Permissions;
var Checkpoints2 = class extends APIResource {
  /**
   * List checkpoints for a fine-tuning job.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const fineTuningJobCheckpoint of client.fineTuning.jobs.checkpoints.list(
   *   'ft-AF1WoRqd3aJAHsqc9NY7iL8F',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(fineTuningJobID, query = {}, options) {
    return this._client.getAPIList(path`/fine_tuning/jobs/${fineTuningJobID}/checkpoints`, CursorPage, { query, ...options });
  }
};
var Jobs = class extends APIResource {
  constructor() {
    super(...arguments);
    this.checkpoints = new Checkpoints2(this._client);
  }
  /**
   * Creates a fine-tuning job which begins the process of creating a new model from
   * a given dataset.
   *
   * Response includes details of the enqueued job including job status and the name
   * of the fine-tuned models once complete.
   *
   * [Learn more about fine-tuning](https://platform.openai.com/docs/guides/model-optimization)
   *
   * @example
   * ```ts
   * const fineTuningJob = await client.fineTuning.jobs.create({
   *   model: 'gpt-4o-mini',
   *   training_file: 'file-abc123',
   * });
   * ```
   */
  create(body, options) {
    return this._client.post("/fine_tuning/jobs", { body, ...options });
  }
  /**
   * Get info about a fine-tuning job.
   *
   * [Learn more about fine-tuning](https://platform.openai.com/docs/guides/model-optimization)
   *
   * @example
   * ```ts
   * const fineTuningJob = await client.fineTuning.jobs.retrieve(
   *   'ft-AF1WoRqd3aJAHsqc9NY7iL8F',
   * );
   * ```
   */
  retrieve(fineTuningJobID, options) {
    return this._client.get(path`/fine_tuning/jobs/${fineTuningJobID}`, options);
  }
  /**
   * List your organization's fine-tuning jobs
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const fineTuningJob of client.fineTuning.jobs.list()) {
   *   // ...
   * }
   * ```
   */
  list(query = {}, options) {
    return this._client.getAPIList("/fine_tuning/jobs", CursorPage, { query, ...options });
  }
  /**
   * Immediately cancel a fine-tune job.
   *
   * @example
   * ```ts
   * const fineTuningJob = await client.fineTuning.jobs.cancel(
   *   'ft-AF1WoRqd3aJAHsqc9NY7iL8F',
   * );
   * ```
   */
  cancel(fineTuningJobID, options) {
    return this._client.post(path`/fine_tuning/jobs/${fineTuningJobID}/cancel`, options);
  }
  /**
   * Get status updates for a fine-tuning job.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const fineTuningJobEvent of client.fineTuning.jobs.listEvents(
   *   'ft-AF1WoRqd3aJAHsqc9NY7iL8F',
   * )) {
   *   // ...
   * }
   * ```
   */
  listEvents(fineTuningJobID, query = {}, options) {
    return this._client.getAPIList(path`/fine_tuning/jobs/${fineTuningJobID}/events`, CursorPage, { query, ...options });
  }
  /**
   * Pause a fine-tune job.
   *
   * @example
   * ```ts
   * const fineTuningJob = await client.fineTuning.jobs.pause(
   *   'ft-AF1WoRqd3aJAHsqc9NY7iL8F',
   * );
   * ```
   */
  pause(fineTuningJobID, options) {
    return this._client.post(path`/fine_tuning/jobs/${fineTuningJobID}/pause`, options);
  }
  /**
   * Resume a fine-tune job.
   *
   * @example
   * ```ts
   * const fineTuningJob = await client.fineTuning.jobs.resume(
   *   'ft-AF1WoRqd3aJAHsqc9NY7iL8F',
   * );
   * ```
   */
  resume(fineTuningJobID, options) {
    return this._client.post(path`/fine_tuning/jobs/${fineTuningJobID}/resume`, options);
  }
};
Jobs.Checkpoints = Checkpoints2;
var FineTuning = class extends APIResource {
  constructor() {
    super(...arguments);
    this.methods = new Methods(this._client);
    this.jobs = new Jobs(this._client);
    this.checkpoints = new Checkpoints(this._client);
    this.alpha = new Alpha(this._client);
  }
};
FineTuning.Methods = Methods;
FineTuning.Jobs = Jobs;
FineTuning.Checkpoints = Checkpoints;
FineTuning.Alpha = Alpha;

// https://esm.sh/openai@5.12.0/denonext/resources/graders/graders.development.mjs
var GraderModels = class extends APIResource {
};
var Graders2 = class extends APIResource {
  constructor() {
    super(...arguments);
    this.graderModels = new GraderModels(this._client);
  }
};
Graders2.GraderModels = GraderModels;

// https://esm.sh/openai@5.12.0/denonext/resources/images.development.mjs
var Images = class extends APIResource {
  /**
   * Creates a variation of a given image. This endpoint only supports `dall-e-2`.
   *
   * @example
   * ```ts
   * const imagesResponse = await client.images.createVariation({
   *   image: fs.createReadStream('otter.png'),
   * });
   * ```
   */
  createVariation(body, options) {
    return this._client.post("/images/variations", multipartFormRequestOptions({ body, ...options }, this._client));
  }
  edit(body, options) {
    return this._client.post("/images/edits", multipartFormRequestOptions({ body, ...options, stream: body.stream ?? false }, this._client));
  }
  generate(body, options) {
    return this._client.post("/images/generations", { body, ...options, stream: body.stream ?? false });
  }
};

// https://esm.sh/openai@5.12.0/denonext/resources/models.development.mjs
var Models = class extends APIResource {
  /**
   * Retrieves a model instance, providing basic information about the model such as
   * the owner and permissioning.
   */
  retrieve(model2, options) {
    return this._client.get(path`/models/${model2}`, options);
  }
  /**
   * Lists the currently available models, and provides basic information about each
   * one such as the owner and availability.
   */
  list(options) {
    return this._client.getAPIList("/models", Page, options);
  }
  /**
   * Delete a fine-tuned model. You must have the Owner role in your organization to
   * delete a model.
   */
  delete(model2, options) {
    return this._client.delete(path`/models/${model2}`, options);
  }
};

// https://esm.sh/openai@5.12.0/denonext/resources/moderations.development.mjs
var Moderations = class extends APIResource {
  /**
   * Classifies if text and/or image inputs are potentially harmful. Learn more in
   * the [moderation guide](https://platform.openai.com/docs/guides/moderation).
   */
  create(body, options) {
    return this._client.post("/moderations", { body, ...options });
  }
};

// https://esm.sh/openai@5.12.0/denonext/resources/responses/responses.development.mjs
function maybeParseResponse(response, params) {
  if (!params || !hasAutoParseableInput2(params)) {
    return {
      ...response,
      output_parsed: null,
      output: response.output.map((item) => {
        if (item.type === "function_call") {
          return {
            ...item,
            parsed_arguments: null
          };
        }
        if (item.type === "message") {
          return {
            ...item,
            content: item.content.map((content) => ({
              ...content,
              parsed: null
            }))
          };
        } else {
          return item;
        }
      })
    };
  }
  return parseResponse(response, params);
}
function parseResponse(response, params) {
  const output = response.output.map((item) => {
    if (item.type === "function_call") {
      return {
        ...item,
        parsed_arguments: parseToolCall2(params, item)
      };
    }
    if (item.type === "message") {
      const content = item.content.map((content2) => {
        if (content2.type === "output_text") {
          return {
            ...content2,
            parsed: parseTextFormat(params, content2.text)
          };
        }
        return content2;
      });
      return {
        ...item,
        content
      };
    }
    return item;
  });
  const parsed = Object.assign({}, response, { output });
  if (!Object.getOwnPropertyDescriptor(response, "output_text")) {
    addOutputText(parsed);
  }
  Object.defineProperty(parsed, "output_parsed", {
    enumerable: true,
    get() {
      for (const output2 of parsed.output) {
        if (output2.type !== "message") {
          continue;
        }
        for (const content of output2.content) {
          if (content.type === "output_text" && content.parsed !== null) {
            return content.parsed;
          }
        }
      }
      return null;
    }
  });
  return parsed;
}
function parseTextFormat(params, content) {
  if (params.text?.format?.type !== "json_schema") {
    return null;
  }
  if ("$parseRaw" in params.text?.format) {
    const text_format = params.text?.format;
    return text_format.$parseRaw(content);
  }
  return JSON.parse(content);
}
function hasAutoParseableInput2(params) {
  if (isAutoParsableResponseFormat(params.text?.format)) {
    return true;
  }
  return false;
}
function isAutoParsableTool2(tool2) {
  return tool2?.["$brand"] === "auto-parseable-tool";
}
function getInputToolByName(input_tools, name) {
  return input_tools.find((tool2) => tool2.type === "function" && tool2.name === name);
}
function parseToolCall2(params, toolCall) {
  const inputTool = getInputToolByName(params.tools ?? [], toolCall.name);
  return {
    ...toolCall,
    ...toolCall,
    parsed_arguments: isAutoParsableTool2(inputTool) ? inputTool.$parseRaw(toolCall.arguments) : inputTool?.strict ? JSON.parse(toolCall.arguments) : null
  };
}
function addOutputText(rsp) {
  const texts = [];
  for (const output of rsp.output) {
    if (output.type !== "message") {
      continue;
    }
    for (const content of output.content) {
      if (content.type === "output_text") {
        texts.push(content.text);
      }
    }
  }
  rsp.output_text = texts.join("");
}
var _ResponseStream_instances;
var _ResponseStream_params;
var _ResponseStream_currentResponseSnapshot;
var _ResponseStream_finalResponse;
var _ResponseStream_beginRequest;
var _ResponseStream_addEvent;
var _ResponseStream_endRequest;
var _ResponseStream_accumulateResponse;
var ResponseStream = class _ResponseStream extends EventStream {
  constructor(params) {
    super();
    _ResponseStream_instances.add(this);
    _ResponseStream_params.set(this, void 0);
    _ResponseStream_currentResponseSnapshot.set(this, void 0);
    _ResponseStream_finalResponse.set(this, void 0);
    __classPrivateFieldSet(this, _ResponseStream_params, params, "f");
  }
  static createResponse(client, params, options) {
    const runner = new _ResponseStream(params);
    runner._run(() => runner._createOrRetrieveResponse(client, params, {
      ...options,
      headers: { ...options?.headers, "X-Stainless-Helper-Method": "stream" }
    }));
    return runner;
  }
  async _createOrRetrieveResponse(client, params, options) {
    const signal = options?.signal;
    if (signal) {
      if (signal.aborted)
        this.controller.abort();
      signal.addEventListener("abort", () => this.controller.abort());
    }
    __classPrivateFieldGet(this, _ResponseStream_instances, "m", _ResponseStream_beginRequest).call(this);
    let stream2;
    let starting_after = null;
    if ("response_id" in params) {
      stream2 = await client.responses.retrieve(params.response_id, { stream: true }, { ...options, signal: this.controller.signal, stream: true });
      starting_after = params.starting_after ?? null;
    } else {
      stream2 = await client.responses.create({ ...params, stream: true }, { ...options, signal: this.controller.signal });
    }
    this._connected();
    for await (const event of stream2) {
      __classPrivateFieldGet(this, _ResponseStream_instances, "m", _ResponseStream_addEvent).call(this, event, starting_after);
    }
    if (stream2.controller.signal?.aborted) {
      throw new APIUserAbortError();
    }
    return __classPrivateFieldGet(this, _ResponseStream_instances, "m", _ResponseStream_endRequest).call(this);
  }
  [(_ResponseStream_params = /* @__PURE__ */ new WeakMap(), _ResponseStream_currentResponseSnapshot = /* @__PURE__ */ new WeakMap(), _ResponseStream_finalResponse = /* @__PURE__ */ new WeakMap(), _ResponseStream_instances = /* @__PURE__ */ new WeakSet(), _ResponseStream_beginRequest = function _ResponseStream_beginRequest2() {
    if (this.ended)
      return;
    __classPrivateFieldSet(this, _ResponseStream_currentResponseSnapshot, void 0, "f");
  }, _ResponseStream_addEvent = function _ResponseStream_addEvent2(event, starting_after) {
    if (this.ended)
      return;
    const maybeEmit = (name, event2) => {
      if (starting_after == null || event2.sequence_number > starting_after) {
        this._emit(name, event2);
      }
    };
    const response = __classPrivateFieldGet(this, _ResponseStream_instances, "m", _ResponseStream_accumulateResponse).call(this, event);
    maybeEmit("event", event);
    switch (event.type) {
      case "response.output_text.delta": {
        const output = response.output[event.output_index];
        if (!output) {
          throw new OpenAIError(`missing output at index ${event.output_index}`);
        }
        if (output.type === "message") {
          const content = output.content[event.content_index];
          if (!content) {
            throw new OpenAIError(`missing content at index ${event.content_index}`);
          }
          if (content.type !== "output_text") {
            throw new OpenAIError(`expected content to be 'output_text', got ${content.type}`);
          }
          maybeEmit("response.output_text.delta", {
            ...event,
            snapshot: content.text
          });
        }
        break;
      }
      case "response.function_call_arguments.delta": {
        const output = response.output[event.output_index];
        if (!output) {
          throw new OpenAIError(`missing output at index ${event.output_index}`);
        }
        if (output.type === "function_call") {
          maybeEmit("response.function_call_arguments.delta", {
            ...event,
            snapshot: output.arguments
          });
        }
        break;
      }
      default:
        maybeEmit(event.type, event);
        break;
    }
  }, _ResponseStream_endRequest = function _ResponseStream_endRequest2() {
    if (this.ended) {
      throw new OpenAIError(`stream has ended, this shouldn't happen`);
    }
    const snapshot = __classPrivateFieldGet(this, _ResponseStream_currentResponseSnapshot, "f");
    if (!snapshot) {
      throw new OpenAIError(`request ended without sending any events`);
    }
    __classPrivateFieldSet(this, _ResponseStream_currentResponseSnapshot, void 0, "f");
    const parsedResponse = finalizeResponse(snapshot, __classPrivateFieldGet(this, _ResponseStream_params, "f"));
    __classPrivateFieldSet(this, _ResponseStream_finalResponse, parsedResponse, "f");
    return parsedResponse;
  }, _ResponseStream_accumulateResponse = function _ResponseStream_accumulateResponse2(event) {
    let snapshot = __classPrivateFieldGet(this, _ResponseStream_currentResponseSnapshot, "f");
    if (!snapshot) {
      if (event.type !== "response.created") {
        throw new OpenAIError(`When snapshot hasn't been set yet, expected 'response.created' event, got ${event.type}`);
      }
      snapshot = __classPrivateFieldSet(this, _ResponseStream_currentResponseSnapshot, event.response, "f");
      return snapshot;
    }
    switch (event.type) {
      case "response.output_item.added": {
        snapshot.output.push(event.item);
        break;
      }
      case "response.content_part.added": {
        const output = snapshot.output[event.output_index];
        if (!output) {
          throw new OpenAIError(`missing output at index ${event.output_index}`);
        }
        if (output.type === "message") {
          output.content.push(event.part);
        }
        break;
      }
      case "response.output_text.delta": {
        const output = snapshot.output[event.output_index];
        if (!output) {
          throw new OpenAIError(`missing output at index ${event.output_index}`);
        }
        if (output.type === "message") {
          const content = output.content[event.content_index];
          if (!content) {
            throw new OpenAIError(`missing content at index ${event.content_index}`);
          }
          if (content.type !== "output_text") {
            throw new OpenAIError(`expected content to be 'output_text', got ${content.type}`);
          }
          content.text += event.delta;
        }
        break;
      }
      case "response.function_call_arguments.delta": {
        const output = snapshot.output[event.output_index];
        if (!output) {
          throw new OpenAIError(`missing output at index ${event.output_index}`);
        }
        if (output.type === "function_call") {
          output.arguments += event.delta;
        }
        break;
      }
      case "response.completed": {
        __classPrivateFieldSet(this, _ResponseStream_currentResponseSnapshot, event.response, "f");
        break;
      }
    }
    return snapshot;
  }, Symbol.asyncIterator)]() {
    const pushQueue = [];
    const readQueue = [];
    let done = false;
    this.on("event", (event) => {
      const reader = readQueue.shift();
      if (reader) {
        reader.resolve(event);
      } else {
        pushQueue.push(event);
      }
    });
    this.on("end", () => {
      done = true;
      for (const reader of readQueue) {
        reader.resolve(void 0);
      }
      readQueue.length = 0;
    });
    this.on("abort", (err) => {
      done = true;
      for (const reader of readQueue) {
        reader.reject(err);
      }
      readQueue.length = 0;
    });
    this.on("error", (err) => {
      done = true;
      for (const reader of readQueue) {
        reader.reject(err);
      }
      readQueue.length = 0;
    });
    return {
      next: async () => {
        if (!pushQueue.length) {
          if (done) {
            return { value: void 0, done: true };
          }
          return new Promise((resolve, reject) => readQueue.push({ resolve, reject })).then((event2) => event2 ? { value: event2, done: false } : { value: void 0, done: true });
        }
        const event = pushQueue.shift();
        return { value: event, done: false };
      },
      return: async () => {
        this.abort();
        return { value: void 0, done: true };
      }
    };
  }
  /**
   * @returns a promise that resolves with the final Response, or rejects
   * if an error occurred or the stream ended prematurely without producing a REsponse.
   */
  async finalResponse() {
    await this.done();
    const response = __classPrivateFieldGet(this, _ResponseStream_finalResponse, "f");
    if (!response)
      throw new OpenAIError("stream ended without producing a ChatCompletion");
    return response;
  }
};
function finalizeResponse(snapshot, params) {
  return maybeParseResponse(snapshot, params);
}
var InputItems = class extends APIResource {
  /**
   * Returns a list of input items for a given response.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const responseItem of client.responses.inputItems.list(
   *   'response_id',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(responseID, query = {}, options) {
    return this._client.getAPIList(path`/responses/${responseID}/input_items`, CursorPage, { query, ...options });
  }
};
var Responses = class extends APIResource {
  constructor() {
    super(...arguments);
    this.inputItems = new InputItems(this._client);
  }
  create(body, options) {
    return this._client.post("/responses", { body, ...options, stream: body.stream ?? false })._thenUnwrap((rsp) => {
      if ("object" in rsp && rsp.object === "response") {
        addOutputText(rsp);
      }
      return rsp;
    });
  }
  retrieve(responseID, query = {}, options) {
    return this._client.get(path`/responses/${responseID}`, {
      query,
      ...options,
      stream: query?.stream ?? false
    })._thenUnwrap((rsp) => {
      if ("object" in rsp && rsp.object === "response") {
        addOutputText(rsp);
      }
      return rsp;
    });
  }
  /**
   * Deletes a model response with the given ID.
   *
   * @example
   * ```ts
   * await client.responses.delete(
   *   'resp_677efb5139a88190b512bc3fef8e535d',
   * );
   * ```
   */
  delete(responseID, options) {
    return this._client.delete(path`/responses/${responseID}`, {
      ...options,
      headers: buildHeaders([{ Accept: "*/*" }, options?.headers])
    });
  }
  parse(body, options) {
    return this._client.responses.create(body, options)._thenUnwrap((response) => parseResponse(response, body));
  }
  /**
   * Creates a model response stream
   */
  stream(body, options) {
    return ResponseStream.createResponse(this._client, body, options);
  }
  /**
   * Cancels a model response with the given ID. Only responses created with the
   * `background` parameter set to `true` can be cancelled.
   * [Learn more](https://platform.openai.com/docs/guides/background).
   *
   * @example
   * ```ts
   * const response = await client.responses.cancel(
   *   'resp_677efb5139a88190b512bc3fef8e535d',
   * );
   * ```
   */
  cancel(responseID, options) {
    return this._client.post(path`/responses/${responseID}/cancel`, options);
  }
};
Responses.InputItems = InputItems;

// https://esm.sh/openai@5.12.0/denonext/resources/uploads/uploads.development.mjs
var Parts = class extends APIResource {
  /**
   * Adds a
   * [Part](https://platform.openai.com/docs/api-reference/uploads/part-object) to an
   * [Upload](https://platform.openai.com/docs/api-reference/uploads/object) object.
   * A Part represents a chunk of bytes from the file you are trying to upload.
   *
   * Each Part can be at most 64 MB, and you can add Parts until you hit the Upload
   * maximum of 8 GB.
   *
   * It is possible to add multiple Parts in parallel. You can decide the intended
   * order of the Parts when you
   * [complete the Upload](https://platform.openai.com/docs/api-reference/uploads/complete).
   */
  create(uploadID, body, options) {
    return this._client.post(path`/uploads/${uploadID}/parts`, multipartFormRequestOptions({ body, ...options }, this._client));
  }
};
var Uploads = class extends APIResource {
  constructor() {
    super(...arguments);
    this.parts = new Parts(this._client);
  }
  /**
   * Creates an intermediate
   * [Upload](https://platform.openai.com/docs/api-reference/uploads/object) object
   * that you can add
   * [Parts](https://platform.openai.com/docs/api-reference/uploads/part-object) to.
   * Currently, an Upload can accept at most 8 GB in total and expires after an hour
   * after you create it.
   *
   * Once you complete the Upload, we will create a
   * [File](https://platform.openai.com/docs/api-reference/files/object) object that
   * contains all the parts you uploaded. This File is usable in the rest of our
   * platform as a regular File object.
   *
   * For certain `purpose` values, the correct `mime_type` must be specified. Please
   * refer to documentation for the
   * [supported MIME types for your use case](https://platform.openai.com/docs/assistants/tools/file-search#supported-files).
   *
   * For guidance on the proper filename extensions for each purpose, please follow
   * the documentation on
   * [creating a File](https://platform.openai.com/docs/api-reference/files/create).
   */
  create(body, options) {
    return this._client.post("/uploads", { body, ...options });
  }
  /**
   * Cancels the Upload. No Parts may be added after an Upload is cancelled.
   */
  cancel(uploadID, options) {
    return this._client.post(path`/uploads/${uploadID}/cancel`, options);
  }
  /**
   * Completes the
   * [Upload](https://platform.openai.com/docs/api-reference/uploads/object).
   *
   * Within the returned Upload object, there is a nested
   * [File](https://platform.openai.com/docs/api-reference/files/object) object that
   * is ready to use in the rest of the platform.
   *
   * You can specify the order of the Parts by passing in an ordered list of the Part
   * IDs.
   *
   * The number of bytes uploaded upon completion must match the number of bytes
   * initially specified when creating the Upload object. No Parts may be added after
   * an Upload is completed.
   */
  complete(uploadID, body, options) {
    return this._client.post(path`/uploads/${uploadID}/complete`, { body, ...options });
  }
};
Uploads.Parts = Parts;

// https://esm.sh/openai@5.12.0/denonext/resources/vector-stores/vector-stores.development.mjs
var allSettledWithThrow = async (promises) => {
  const results = await Promise.allSettled(promises);
  const rejected = results.filter((result) => result.status === "rejected");
  if (rejected.length) {
    for (const result of rejected) {
      console.error(result.reason);
    }
    throw new Error(`${rejected.length} promise(s) failed - see the above errors`);
  }
  const values = [];
  for (const result of results) {
    if (result.status === "fulfilled") {
      values.push(result.value);
    }
  }
  return values;
};
var FileBatches = class extends APIResource {
  /**
   * Create a vector store file batch.
   */
  create(vectorStoreID, body, options) {
    return this._client.post(path`/vector_stores/${vectorStoreID}/file_batches`, {
      body,
      ...options,
      headers: buildHeaders([{ "OpenAI-Beta": "assistants=v2" }, options?.headers])
    });
  }
  /**
   * Retrieves a vector store file batch.
   */
  retrieve(batchID, params, options) {
    const { vector_store_id } = params;
    return this._client.get(path`/vector_stores/${vector_store_id}/file_batches/${batchID}`, {
      ...options,
      headers: buildHeaders([{ "OpenAI-Beta": "assistants=v2" }, options?.headers])
    });
  }
  /**
   * Cancel a vector store file batch. This attempts to cancel the processing of
   * files in this batch as soon as possible.
   */
  cancel(batchID, params, options) {
    const { vector_store_id } = params;
    return this._client.post(path`/vector_stores/${vector_store_id}/file_batches/${batchID}/cancel`, {
      ...options,
      headers: buildHeaders([{ "OpenAI-Beta": "assistants=v2" }, options?.headers])
    });
  }
  /**
   * Create a vector store batch and poll until all files have been processed.
   */
  async createAndPoll(vectorStoreId, body, options) {
    const batch = await this.create(vectorStoreId, body);
    return await this.poll(vectorStoreId, batch.id, options);
  }
  /**
   * Returns a list of vector store files in a batch.
   */
  listFiles(batchID, params, options) {
    const { vector_store_id, ...query } = params;
    return this._client.getAPIList(path`/vector_stores/${vector_store_id}/file_batches/${batchID}/files`, CursorPage, { query, ...options, headers: buildHeaders([{ "OpenAI-Beta": "assistants=v2" }, options?.headers]) });
  }
  /**
   * Wait for the given file batch to be processed.
   *
   * Note: this will return even if one of the files failed to process, you need to
   * check batch.file_counts.failed_count to handle this case.
   */
  async poll(vectorStoreID, batchID, options) {
    const headers = buildHeaders([
      options?.headers,
      {
        "X-Stainless-Poll-Helper": "true",
        "X-Stainless-Custom-Poll-Interval": options?.pollIntervalMs?.toString() ?? void 0
      }
    ]);
    while (true) {
      const { data: batch, response } = await this.retrieve(batchID, { vector_store_id: vectorStoreID }, {
        ...options,
        headers
      }).withResponse();
      switch (batch.status) {
        case "in_progress":
          let sleepInterval = 5e3;
          if (options?.pollIntervalMs) {
            sleepInterval = options.pollIntervalMs;
          } else {
            const headerInterval = response.headers.get("openai-poll-after-ms");
            if (headerInterval) {
              const headerIntervalMs = parseInt(headerInterval);
              if (!isNaN(headerIntervalMs)) {
                sleepInterval = headerIntervalMs;
              }
            }
          }
          await sleep(sleepInterval);
          break;
        case "failed":
        case "cancelled":
        case "completed":
          return batch;
      }
    }
  }
  /**
   * Uploads the given files concurrently and then creates a vector store file batch.
   *
   * The concurrency limit is configurable using the `maxConcurrency` parameter.
   */
  async uploadAndPoll(vectorStoreId, { files, fileIds = [] }, options) {
    if (files == null || files.length == 0) {
      throw new Error(`No \`files\` provided to process. If you've already uploaded files you should use \`.createAndPoll()\` instead`);
    }
    const configuredConcurrency = options?.maxConcurrency ?? 5;
    const concurrencyLimit = Math.min(configuredConcurrency, files.length);
    const client = this._client;
    const fileIterator = files.values();
    const allFileIds = [...fileIds];
    async function processFiles(iterator) {
      for (let item of iterator) {
        const fileObj = await client.files.create({ file: item, purpose: "assistants" }, options);
        allFileIds.push(fileObj.id);
      }
    }
    const workers = Array(concurrencyLimit).fill(fileIterator).map(processFiles);
    await allSettledWithThrow(workers);
    return await this.createAndPoll(vectorStoreId, {
      file_ids: allFileIds
    });
  }
};
var Files3 = class extends APIResource {
  /**
   * Create a vector store file by attaching a
   * [File](https://platform.openai.com/docs/api-reference/files) to a
   * [vector store](https://platform.openai.com/docs/api-reference/vector-stores/object).
   */
  create(vectorStoreID, body, options) {
    return this._client.post(path`/vector_stores/${vectorStoreID}/files`, {
      body,
      ...options,
      headers: buildHeaders([{ "OpenAI-Beta": "assistants=v2" }, options?.headers])
    });
  }
  /**
   * Retrieves a vector store file.
   */
  retrieve(fileID, params, options) {
    const { vector_store_id } = params;
    return this._client.get(path`/vector_stores/${vector_store_id}/files/${fileID}`, {
      ...options,
      headers: buildHeaders([{ "OpenAI-Beta": "assistants=v2" }, options?.headers])
    });
  }
  /**
   * Update attributes on a vector store file.
   */
  update(fileID, params, options) {
    const { vector_store_id, ...body } = params;
    return this._client.post(path`/vector_stores/${vector_store_id}/files/${fileID}`, {
      body,
      ...options,
      headers: buildHeaders([{ "OpenAI-Beta": "assistants=v2" }, options?.headers])
    });
  }
  /**
   * Returns a list of vector store files.
   */
  list(vectorStoreID, query = {}, options) {
    return this._client.getAPIList(path`/vector_stores/${vectorStoreID}/files`, CursorPage, {
      query,
      ...options,
      headers: buildHeaders([{ "OpenAI-Beta": "assistants=v2" }, options?.headers])
    });
  }
  /**
   * Delete a vector store file. This will remove the file from the vector store but
   * the file itself will not be deleted. To delete the file, use the
   * [delete file](https://platform.openai.com/docs/api-reference/files/delete)
   * endpoint.
   */
  delete(fileID, params, options) {
    const { vector_store_id } = params;
    return this._client.delete(path`/vector_stores/${vector_store_id}/files/${fileID}`, {
      ...options,
      headers: buildHeaders([{ "OpenAI-Beta": "assistants=v2" }, options?.headers])
    });
  }
  /**
   * Attach a file to the given vector store and wait for it to be processed.
   */
  async createAndPoll(vectorStoreId, body, options) {
    const file = await this.create(vectorStoreId, body, options);
    return await this.poll(vectorStoreId, file.id, options);
  }
  /**
   * Wait for the vector store file to finish processing.
   *
   * Note: this will return even if the file failed to process, you need to check
   * file.last_error and file.status to handle these cases
   */
  async poll(vectorStoreID, fileID, options) {
    const headers = buildHeaders([
      options?.headers,
      {
        "X-Stainless-Poll-Helper": "true",
        "X-Stainless-Custom-Poll-Interval": options?.pollIntervalMs?.toString() ?? void 0
      }
    ]);
    while (true) {
      const fileResponse = await this.retrieve(fileID, {
        vector_store_id: vectorStoreID
      }, { ...options, headers }).withResponse();
      const file = fileResponse.data;
      switch (file.status) {
        case "in_progress":
          let sleepInterval = 5e3;
          if (options?.pollIntervalMs) {
            sleepInterval = options.pollIntervalMs;
          } else {
            const headerInterval = fileResponse.response.headers.get("openai-poll-after-ms");
            if (headerInterval) {
              const headerIntervalMs = parseInt(headerInterval);
              if (!isNaN(headerIntervalMs)) {
                sleepInterval = headerIntervalMs;
              }
            }
          }
          await sleep(sleepInterval);
          break;
        case "failed":
        case "completed":
          return file;
      }
    }
  }
  /**
   * Upload a file to the `files` API and then attach it to the given vector store.
   *
   * Note the file will be asynchronously processed (you can use the alternative
   * polling helper method to wait for processing to complete).
   */
  async upload(vectorStoreId, file, options) {
    const fileInfo = await this._client.files.create({ file, purpose: "assistants" }, options);
    return this.create(vectorStoreId, { file_id: fileInfo.id }, options);
  }
  /**
   * Add a file to a vector store and poll until processing is complete.
   */
  async uploadAndPoll(vectorStoreId, file, options) {
    const fileInfo = await this.upload(vectorStoreId, file, options);
    return await this.poll(vectorStoreId, fileInfo.id, options);
  }
  /**
   * Retrieve the parsed contents of a vector store file.
   */
  content(fileID, params, options) {
    const { vector_store_id } = params;
    return this._client.getAPIList(path`/vector_stores/${vector_store_id}/files/${fileID}/content`, Page, { ...options, headers: buildHeaders([{ "OpenAI-Beta": "assistants=v2" }, options?.headers]) });
  }
};
var VectorStores = class extends APIResource {
  constructor() {
    super(...arguments);
    this.files = new Files3(this._client);
    this.fileBatches = new FileBatches(this._client);
  }
  /**
   * Create a vector store.
   */
  create(body, options) {
    return this._client.post("/vector_stores", {
      body,
      ...options,
      headers: buildHeaders([{ "OpenAI-Beta": "assistants=v2" }, options?.headers])
    });
  }
  /**
   * Retrieves a vector store.
   */
  retrieve(vectorStoreID, options) {
    return this._client.get(path`/vector_stores/${vectorStoreID}`, {
      ...options,
      headers: buildHeaders([{ "OpenAI-Beta": "assistants=v2" }, options?.headers])
    });
  }
  /**
   * Modifies a vector store.
   */
  update(vectorStoreID, body, options) {
    return this._client.post(path`/vector_stores/${vectorStoreID}`, {
      body,
      ...options,
      headers: buildHeaders([{ "OpenAI-Beta": "assistants=v2" }, options?.headers])
    });
  }
  /**
   * Returns a list of vector stores.
   */
  list(query = {}, options) {
    return this._client.getAPIList("/vector_stores", CursorPage, {
      query,
      ...options,
      headers: buildHeaders([{ "OpenAI-Beta": "assistants=v2" }, options?.headers])
    });
  }
  /**
   * Delete a vector store.
   */
  delete(vectorStoreID, options) {
    return this._client.delete(path`/vector_stores/${vectorStoreID}`, {
      ...options,
      headers: buildHeaders([{ "OpenAI-Beta": "assistants=v2" }, options?.headers])
    });
  }
  /**
   * Search a vector store for relevant chunks based on a query and file attributes
   * filter.
   */
  search(vectorStoreID, body, options) {
    return this._client.getAPIList(path`/vector_stores/${vectorStoreID}/search`, Page, {
      body,
      method: "post",
      ...options,
      headers: buildHeaders([{ "OpenAI-Beta": "assistants=v2" }, options?.headers])
    });
  }
};
VectorStores.Files = Files3;
VectorStores.FileBatches = FileBatches;

// https://esm.sh/openai@5.12.0/denonext/resources/webhooks.development.mjs
import { Buffer as __Buffer$5 } from "node:buffer";
var _Webhooks_instances;
var _Webhooks_validateSecret;
var _Webhooks_getRequiredHeader;
var Webhooks = class extends APIResource {
  constructor() {
    super(...arguments);
    _Webhooks_instances.add(this);
  }
  /**
   * Validates that the given payload was sent by OpenAI and parses the payload.
   */
  async unwrap(payload, headers, secret = this._client.webhookSecret, tolerance = 300) {
    await this.verifySignature(payload, headers, secret, tolerance);
    return JSON.parse(payload);
  }
  /**
   * Validates whether or not the webhook payload was sent by OpenAI.
   *
   * An error will be raised if the webhook payload was not sent by OpenAI.
   *
   * @param payload - The webhook payload
   * @param headers - The webhook headers
   * @param secret - The webhook secret (optional, will use client secret if not provided)
   * @param tolerance - Maximum age of the webhook in seconds (default: 300 = 5 minutes)
   */
  async verifySignature(payload, headers, secret = this._client.webhookSecret, tolerance = 300) {
    if (typeof crypto === "undefined" || typeof crypto.subtle.importKey !== "function" || typeof crypto.subtle.verify !== "function") {
      throw new Error("Webhook signature verification is only supported when the `crypto` global is defined");
    }
    __classPrivateFieldGet(this, _Webhooks_instances, "m", _Webhooks_validateSecret).call(this, secret);
    const headersObj = buildHeaders([headers]).values;
    const signatureHeader = __classPrivateFieldGet(this, _Webhooks_instances, "m", _Webhooks_getRequiredHeader).call(this, headersObj, "webhook-signature");
    const timestamp = __classPrivateFieldGet(this, _Webhooks_instances, "m", _Webhooks_getRequiredHeader).call(this, headersObj, "webhook-timestamp");
    const webhookId = __classPrivateFieldGet(this, _Webhooks_instances, "m", _Webhooks_getRequiredHeader).call(this, headersObj, "webhook-id");
    const timestampSeconds = parseInt(timestamp, 10);
    if (isNaN(timestampSeconds)) {
      throw new InvalidWebhookSignatureError("Invalid webhook timestamp format");
    }
    const nowSeconds = Math.floor(Date.now() / 1e3);
    if (nowSeconds - timestampSeconds > tolerance) {
      throw new InvalidWebhookSignatureError("Webhook timestamp is too old");
    }
    if (timestampSeconds > nowSeconds + tolerance) {
      throw new InvalidWebhookSignatureError("Webhook timestamp is too new");
    }
    const signatures = signatureHeader.split(" ").map((part) => part.startsWith("v1,") ? part.substring(3) : part);
    const decodedSecret = secret.startsWith("whsec_") ? __Buffer$5.from(secret.replace("whsec_", ""), "base64") : __Buffer$5.from(secret, "utf-8");
    const signedPayload = webhookId ? `${webhookId}.${timestamp}.${payload}` : `${timestamp}.${payload}`;
    const key = await crypto.subtle.importKey("raw", decodedSecret, { name: "HMAC", hash: "SHA-256" }, false, ["verify"]);
    for (const signature of signatures) {
      try {
        const signatureBytes = __Buffer$5.from(signature, "base64");
        const isValid = await crypto.subtle.verify("HMAC", key, signatureBytes, new TextEncoder().encode(signedPayload));
        if (isValid) {
          return;
        }
      } catch {
        continue;
      }
    }
    throw new InvalidWebhookSignatureError("The given webhook signature does not match the expected signature");
  }
};
_Webhooks_instances = /* @__PURE__ */ new WeakSet(), _Webhooks_validateSecret = function _Webhooks_validateSecret2(secret) {
  if (typeof secret !== "string" || secret.length === 0) {
    throw new Error(`The webhook secret must either be set using the env var, OPENAI_WEBHOOK_SECRET, on the client class, OpenAI({ webhookSecret: '123' }), or passed to this function`);
  }
}, _Webhooks_getRequiredHeader = function _Webhooks_getRequiredHeader2(headers, name) {
  if (!headers) {
    throw new Error(`Headers are required`);
  }
  const value = headers.get(name);
  if (value === null || value === void 0) {
    throw new Error(`Missing required header: ${name}`);
  }
  return value;
};

// https://esm.sh/openai@5.12.0/denonext/client.development.mjs
var isRunningInBrowser = () => {
  return (
    // @ts-ignore
    typeof globalThis !== "undefined" && // @ts-ignore
    typeof globalThis.document !== "undefined" && // @ts-ignore
    typeof navigator !== "undefined"
  );
};
function getDetectedPlatform() {
  if (typeof Deno !== "undefined" && Deno.build != null) {
    return "deno";
  }
  if (typeof EdgeRuntime !== "undefined") {
    return "edge";
  }
  if (Object.prototype.toString.call(typeof (0, __Process$8) !== "undefined" ? __Process$8 : 0) === "[object process]") {
    return "node";
  }
  return "unknown";
}
var getPlatformProperties = () => {
  const detectedPlatform = getDetectedPlatform();
  if (detectedPlatform === "deno") {
    return {
      "X-Stainless-Lang": "js",
      "X-Stainless-Package-Version": VERSION,
      "X-Stainless-OS": normalizePlatform(Deno.build.os),
      "X-Stainless-Arch": normalizeArch(Deno.build.arch),
      "X-Stainless-Runtime": "deno",
      "X-Stainless-Runtime-Version": typeof Deno.version === "string" ? Deno.version : Deno.version?.deno ?? "unknown"
    };
  }
  if (typeof EdgeRuntime !== "undefined") {
    return {
      "X-Stainless-Lang": "js",
      "X-Stainless-Package-Version": VERSION,
      "X-Stainless-OS": "Unknown",
      "X-Stainless-Arch": `other:${EdgeRuntime}`,
      "X-Stainless-Runtime": "edge",
      "X-Stainless-Runtime-Version": __Process$8.version
    };
  }
  if (detectedPlatform === "node") {
    return {
      "X-Stainless-Lang": "js",
      "X-Stainless-Package-Version": VERSION,
      "X-Stainless-OS": normalizePlatform(__Process$8.platform ?? "unknown"),
      "X-Stainless-Arch": normalizeArch(__Process$8.arch ?? "unknown"),
      "X-Stainless-Runtime": "node",
      "X-Stainless-Runtime-Version": __Process$8.version ?? "unknown"
    };
  }
  const browserInfo = getBrowserInfo();
  if (browserInfo) {
    return {
      "X-Stainless-Lang": "js",
      "X-Stainless-Package-Version": VERSION,
      "X-Stainless-OS": "Unknown",
      "X-Stainless-Arch": "unknown",
      "X-Stainless-Runtime": `browser:${browserInfo.browser}`,
      "X-Stainless-Runtime-Version": browserInfo.version
    };
  }
  return {
    "X-Stainless-Lang": "js",
    "X-Stainless-Package-Version": VERSION,
    "X-Stainless-OS": "Unknown",
    "X-Stainless-Arch": "unknown",
    "X-Stainless-Runtime": "unknown",
    "X-Stainless-Runtime-Version": "unknown"
  };
};
function getBrowserInfo() {
  if (typeof navigator === "undefined" || !navigator) {
    return null;
  }
  const browserPatterns = [
    { key: "edge", pattern: /Edge(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
    { key: "ie", pattern: /MSIE(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
    { key: "ie", pattern: /Trident(?:.*rv\:(\d+)\.(\d+)(?:\.(\d+))?)?/ },
    { key: "chrome", pattern: /Chrome(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
    { key: "firefox", pattern: /Firefox(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
    { key: "safari", pattern: /(?:Version\W+(\d+)\.(\d+)(?:\.(\d+))?)?(?:\W+Mobile\S*)?\W+Safari/ }
  ];
  for (const { key, pattern } of browserPatterns) {
    const match = pattern.exec(navigator.userAgent);
    if (match) {
      const major = match[1] || 0;
      const minor = match[2] || 0;
      const patch = match[3] || 0;
      return { browser: key, version: `${major}.${minor}.${patch}` };
    }
  }
  return null;
}
var normalizeArch = (arch) => {
  if (arch === "x32")
    return "x32";
  if (arch === "x86_64" || arch === "x64")
    return "x64";
  if (arch === "arm")
    return "arm";
  if (arch === "aarch64" || arch === "arm64")
    return "arm64";
  if (arch)
    return `other:${arch}`;
  return "unknown";
};
var normalizePlatform = (platform) => {
  platform = platform.toLowerCase();
  if (platform.includes("ios"))
    return "iOS";
  if (platform === "android")
    return "Android";
  if (platform === "darwin")
    return "MacOS";
  if (platform === "win32")
    return "Windows";
  if (platform === "freebsd")
    return "FreeBSD";
  if (platform === "openbsd")
    return "OpenBSD";
  if (platform === "linux")
    return "Linux";
  if (platform)
    return `Other:${platform}`;
  return "Unknown";
};
var _platformHeaders;
var getPlatformHeaders = () => {
  return _platformHeaders ?? (_platformHeaders = getPlatformProperties());
};
var FallbackEncoder = ({ headers, body }) => {
  return {
    bodyHeaders: {
      "content-type": "application/json"
    },
    body: JSON.stringify(body)
  };
};
var default_format = "RFC3986";
var default_formatter = (v9) => String(v9);
var formatters = {
  RFC1738: (v9) => String(v9).replace(/%20/g, "+"),
  RFC3986: default_formatter
};
var RFC1738 = "RFC1738";
var has = (obj, key) => (has = Object.hasOwn ?? Function.prototype.call.bind(Object.prototype.hasOwnProperty), has(obj, key));
var hex_table = /* @__PURE__ */ (() => {
  const array = [];
  for (let i21 = 0; i21 < 256; ++i21) {
    array.push("%" + ((i21 < 16 ? "0" : "") + i21.toString(16)).toUpperCase());
  }
  return array;
})();
var limit = 1024;
var encode = (str3, _defaultEncoder, charset, _kind, format) => {
  if (str3.length === 0) {
    return str3;
  }
  let string = str3;
  if (typeof str3 === "symbol") {
    string = Symbol.prototype.toString.call(str3);
  } else if (typeof str3 !== "string") {
    string = String(str3);
  }
  if (charset === "iso-8859-1") {
    return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
      return "%26%23" + parseInt($0.slice(2), 16) + "%3B";
    });
  }
  let out = "";
  for (let j17 = 0; j17 < string.length; j17 += limit) {
    const segment = string.length >= limit ? string.slice(j17, j17 + limit) : string;
    const arr = [];
    for (let i21 = 0; i21 < segment.length; ++i21) {
      let c18 = segment.charCodeAt(i21);
      if (c18 === 45 || // -
      c18 === 46 || // .
      c18 === 95 || // _
      c18 === 126 || // ~
      c18 >= 48 && c18 <= 57 || // 0-9
      c18 >= 65 && c18 <= 90 || // a-z
      c18 >= 97 && c18 <= 122 || // A-Z
      format === RFC1738 && (c18 === 40 || c18 === 41)) {
        arr[arr.length] = segment.charAt(i21);
        continue;
      }
      if (c18 < 128) {
        arr[arr.length] = hex_table[c18];
        continue;
      }
      if (c18 < 2048) {
        arr[arr.length] = hex_table[192 | c18 >> 6] + hex_table[128 | c18 & 63];
        continue;
      }
      if (c18 < 55296 || c18 >= 57344) {
        arr[arr.length] = hex_table[224 | c18 >> 12] + hex_table[128 | c18 >> 6 & 63] + hex_table[128 | c18 & 63];
        continue;
      }
      i21 += 1;
      c18 = 65536 + ((c18 & 1023) << 10 | segment.charCodeAt(i21) & 1023);
      arr[arr.length] = hex_table[240 | c18 >> 18] + hex_table[128 | c18 >> 12 & 63] + hex_table[128 | c18 >> 6 & 63] + hex_table[128 | c18 & 63];
    }
    out += arr.join("");
  }
  return out;
};
function is_buffer(obj) {
  if (!obj || typeof obj !== "object") {
    return false;
  }
  return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
}
function maybe_map(val, fn) {
  if (isArray(val)) {
    const mapped = [];
    for (let i21 = 0; i21 < val.length; i21 += 1) {
      mapped.push(fn(val[i21]));
    }
    return mapped;
  }
  return fn(val);
}
var array_prefix_generators = {
  brackets(prefix) {
    return String(prefix) + "[]";
  },
  comma: "comma",
  indices(prefix, key) {
    return String(prefix) + "[" + key + "]";
  },
  repeat(prefix) {
    return String(prefix);
  }
};
var push_to_array = function(arr, value_or_array) {
  Array.prototype.push.apply(arr, isArray(value_or_array) ? value_or_array : [value_or_array]);
};
var toISOString;
var defaults = {
  addQueryPrefix: false,
  allowDots: false,
  allowEmptyArrays: false,
  arrayFormat: "indices",
  charset: "utf-8",
  charsetSentinel: false,
  delimiter: "&",
  encode: true,
  encodeDotInKeys: false,
  encoder: encode,
  encodeValuesOnly: false,
  format: default_format,
  formatter: default_formatter,
  /** @deprecated */
  indices: false,
  serializeDate(date) {
    return (toISOString ?? (toISOString = Function.prototype.call.bind(Date.prototype.toISOString)))(date);
  },
  skipNulls: false,
  strictNullHandling: false
};
function is_non_nullish_primitive(v9) {
  return typeof v9 === "string" || typeof v9 === "number" || typeof v9 === "boolean" || typeof v9 === "symbol" || typeof v9 === "bigint";
}
var sentinel = {};
function inner_stringify(object, prefix, generateArrayPrefix, commaRoundTrip, allowEmptyArrays, strictNullHandling, skipNulls, encodeDotInKeys, encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, sideChannel) {
  let obj = object;
  let tmp_sc = sideChannel;
  let step = 0;
  let find_flag = false;
  while ((tmp_sc = tmp_sc.get(sentinel)) !== void 0 && !find_flag) {
    const pos = tmp_sc.get(object);
    step += 1;
    if (typeof pos !== "undefined") {
      if (pos === step) {
        throw new RangeError("Cyclic object value");
      } else {
        find_flag = true;
      }
    }
    if (typeof tmp_sc.get(sentinel) === "undefined") {
      step = 0;
    }
  }
  if (typeof filter === "function") {
    obj = filter(prefix, obj);
  } else if (obj instanceof Date) {
    obj = serializeDate?.(obj);
  } else if (generateArrayPrefix === "comma" && isArray(obj)) {
    obj = maybe_map(obj, function(value) {
      if (value instanceof Date) {
        return serializeDate?.(value);
      }
      return value;
    });
  }
  if (obj === null) {
    if (strictNullHandling) {
      return encoder && !encodeValuesOnly ? (
        // @ts-expect-error
        encoder(prefix, defaults.encoder, charset, "key", format)
      ) : prefix;
    }
    obj = "";
  }
  if (is_non_nullish_primitive(obj) || is_buffer(obj)) {
    if (encoder) {
      const key_value = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, "key", format);
      return [
        formatter?.(key_value) + "=" + // @ts-expect-error
        formatter?.(encoder(obj, defaults.encoder, charset, "value", format))
      ];
    }
    return [formatter?.(prefix) + "=" + formatter?.(String(obj))];
  }
  const values = [];
  if (typeof obj === "undefined") {
    return values;
  }
  let obj_keys;
  if (generateArrayPrefix === "comma" && isArray(obj)) {
    if (encodeValuesOnly && encoder) {
      obj = maybe_map(obj, encoder);
    }
    obj_keys = [{ value: obj.length > 0 ? obj.join(",") || null : void 0 }];
  } else if (isArray(filter)) {
    obj_keys = filter;
  } else {
    const keys = Object.keys(obj);
    obj_keys = sort ? keys.sort(sort) : keys;
  }
  const encoded_prefix = encodeDotInKeys ? String(prefix).replace(/\./g, "%2E") : String(prefix);
  const adjusted_prefix = commaRoundTrip && isArray(obj) && obj.length === 1 ? encoded_prefix + "[]" : encoded_prefix;
  if (allowEmptyArrays && isArray(obj) && obj.length === 0) {
    return adjusted_prefix + "[]";
  }
  for (let j17 = 0; j17 < obj_keys.length; ++j17) {
    const key = obj_keys[j17];
    const value = (
      // @ts-ignore
      typeof key === "object" && typeof key.value !== "undefined" ? key.value : obj[key]
    );
    if (skipNulls && value === null) {
      continue;
    }
    const encoded_key = allowDots && encodeDotInKeys ? key.replace(/\./g, "%2E") : key;
    const key_prefix = isArray(obj) ? typeof generateArrayPrefix === "function" ? generateArrayPrefix(adjusted_prefix, encoded_key) : adjusted_prefix : adjusted_prefix + (allowDots ? "." + encoded_key : "[" + encoded_key + "]");
    sideChannel.set(object, step);
    const valueSideChannel = /* @__PURE__ */ new WeakMap();
    valueSideChannel.set(sentinel, sideChannel);
    push_to_array(values, inner_stringify(
      value,
      key_prefix,
      generateArrayPrefix,
      commaRoundTrip,
      allowEmptyArrays,
      strictNullHandling,
      skipNulls,
      encodeDotInKeys,
      // @ts-ignore
      generateArrayPrefix === "comma" && encodeValuesOnly && isArray(obj) ? null : encoder,
      filter,
      sort,
      allowDots,
      serializeDate,
      format,
      formatter,
      encodeValuesOnly,
      charset,
      valueSideChannel
    ));
  }
  return values;
}
function normalize_stringify_options(opts = defaults) {
  if (typeof opts.allowEmptyArrays !== "undefined" && typeof opts.allowEmptyArrays !== "boolean") {
    throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  }
  if (typeof opts.encodeDotInKeys !== "undefined" && typeof opts.encodeDotInKeys !== "boolean") {
    throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
  }
  if (opts.encoder !== null && typeof opts.encoder !== "undefined" && typeof opts.encoder !== "function") {
    throw new TypeError("Encoder has to be a function.");
  }
  const charset = opts.charset || defaults.charset;
  if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  }
  let format = default_format;
  if (typeof opts.format !== "undefined") {
    if (!has(formatters, opts.format)) {
      throw new TypeError("Unknown format option provided.");
    }
    format = opts.format;
  }
  const formatter = formatters[format];
  let filter = defaults.filter;
  if (typeof opts.filter === "function" || isArray(opts.filter)) {
    filter = opts.filter;
  }
  let arrayFormat;
  if (opts.arrayFormat && opts.arrayFormat in array_prefix_generators) {
    arrayFormat = opts.arrayFormat;
  } else if ("indices" in opts) {
    arrayFormat = opts.indices ? "indices" : "repeat";
  } else {
    arrayFormat = defaults.arrayFormat;
  }
  if ("commaRoundTrip" in opts && typeof opts.commaRoundTrip !== "boolean") {
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  }
  const allowDots = typeof opts.allowDots === "undefined" ? !!opts.encodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;
  return {
    addQueryPrefix: typeof opts.addQueryPrefix === "boolean" ? opts.addQueryPrefix : defaults.addQueryPrefix,
    // @ts-ignore
    allowDots,
    allowEmptyArrays: typeof opts.allowEmptyArrays === "boolean" ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
    arrayFormat,
    charset,
    charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
    commaRoundTrip: !!opts.commaRoundTrip,
    delimiter: typeof opts.delimiter === "undefined" ? defaults.delimiter : opts.delimiter,
    encode: typeof opts.encode === "boolean" ? opts.encode : defaults.encode,
    encodeDotInKeys: typeof opts.encodeDotInKeys === "boolean" ? opts.encodeDotInKeys : defaults.encodeDotInKeys,
    encoder: typeof opts.encoder === "function" ? opts.encoder : defaults.encoder,
    encodeValuesOnly: typeof opts.encodeValuesOnly === "boolean" ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
    filter,
    format,
    formatter,
    serializeDate: typeof opts.serializeDate === "function" ? opts.serializeDate : defaults.serializeDate,
    skipNulls: typeof opts.skipNulls === "boolean" ? opts.skipNulls : defaults.skipNulls,
    // @ts-ignore
    sort: typeof opts.sort === "function" ? opts.sort : null,
    strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
  };
}
function stringify(object, opts = {}) {
  let obj = object;
  const options = normalize_stringify_options(opts);
  let obj_keys;
  let filter;
  if (typeof options.filter === "function") {
    filter = options.filter;
    obj = filter("", obj);
  } else if (isArray(options.filter)) {
    filter = options.filter;
    obj_keys = filter;
  }
  const keys = [];
  if (typeof obj !== "object" || obj === null) {
    return "";
  }
  const generateArrayPrefix = array_prefix_generators[options.arrayFormat];
  const commaRoundTrip = generateArrayPrefix === "comma" && options.commaRoundTrip;
  if (!obj_keys) {
    obj_keys = Object.keys(obj);
  }
  if (options.sort) {
    obj_keys.sort(options.sort);
  }
  const sideChannel = /* @__PURE__ */ new WeakMap();
  for (let i21 = 0; i21 < obj_keys.length; ++i21) {
    const key = obj_keys[i21];
    if (options.skipNulls && obj[key] === null) {
      continue;
    }
    push_to_array(keys, inner_stringify(
      obj[key],
      key,
      // @ts-expect-error
      generateArrayPrefix,
      commaRoundTrip,
      options.allowEmptyArrays,
      options.strictNullHandling,
      options.skipNulls,
      options.encodeDotInKeys,
      options.encode ? options.encoder : null,
      options.filter,
      options.sort,
      options.allowDots,
      options.serializeDate,
      options.format,
      options.formatter,
      options.encodeValuesOnly,
      options.charset,
      sideChannel
    ));
  }
  const joined = keys.join(options.delimiter);
  let prefix = options.addQueryPrefix === true ? "?" : "";
  if (options.charsetSentinel) {
    if (options.charset === "iso-8859-1") {
      prefix += "utf8=%26%2310003%3B&";
    } else {
      prefix += "utf8=%E2%9C%93&";
    }
  }
  return joined.length > 0 ? prefix + joined : "";
}
var _OpenAI_instances;
var _a2;
var _OpenAI_encoder;
var _OpenAI_baseURLOverridden;
var OpenAI = class {
  /**
   * API Client for interfacing with the OpenAI API.
   *
   * @param {string | undefined} [opts.apiKey=process.env['OPENAI_API_KEY'] ?? undefined]
   * @param {string | null | undefined} [opts.organization=process.env['OPENAI_ORG_ID'] ?? null]
   * @param {string | null | undefined} [opts.project=process.env['OPENAI_PROJECT_ID'] ?? null]
   * @param {string | null | undefined} [opts.webhookSecret=process.env['OPENAI_WEBHOOK_SECRET'] ?? null]
   * @param {string} [opts.baseURL=process.env['OPENAI_BASE_URL'] ?? https://api.openai.com/v1] - Override the default base URL for the API.
   * @param {number} [opts.timeout=10 minutes] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {MergedRequestInit} [opts.fetchOptions] - Additional `RequestInit` options to be passed to `fetch` calls.
   * @param {Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {HeadersLike} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Record<string, string | undefined>} opts.defaultQuery - Default query parameters to include with every request to the API.
   * @param {boolean} [opts.dangerouslyAllowBrowser=false] - By default, client-side use of this library is not allowed, as it risks exposing your secret API credentials to attackers.
   */
  constructor({ baseURL = readEnv("OPENAI_BASE_URL"), apiKey = readEnv("OPENAI_API_KEY"), organization = readEnv("OPENAI_ORG_ID") ?? null, project = readEnv("OPENAI_PROJECT_ID") ?? null, webhookSecret = readEnv("OPENAI_WEBHOOK_SECRET") ?? null, ...opts } = {}) {
    _OpenAI_instances.add(this);
    _OpenAI_encoder.set(this, void 0);
    this.completions = new Completions3(this);
    this.chat = new Chat(this);
    this.embeddings = new Embeddings(this);
    this.files = new Files2(this);
    this.images = new Images(this);
    this.audio = new Audio(this);
    this.moderations = new Moderations(this);
    this.models = new Models(this);
    this.fineTuning = new FineTuning(this);
    this.graders = new Graders2(this);
    this.vectorStores = new VectorStores(this);
    this.webhooks = new Webhooks(this);
    this.beta = new Beta(this);
    this.batches = new Batches(this);
    this.uploads = new Uploads(this);
    this.responses = new Responses(this);
    this.evals = new Evals(this);
    this.containers = new Containers(this);
    if (apiKey === void 0) {
      throw new OpenAIError("The OPENAI_API_KEY environment variable is missing or empty; either provide it, or instantiate the OpenAI client with an apiKey option, like new OpenAI({ apiKey: 'My API Key' }).");
    }
    const options = {
      apiKey,
      organization,
      project,
      webhookSecret,
      ...opts,
      baseURL: baseURL || `https://api.openai.com/v1`
    };
    if (!options.dangerouslyAllowBrowser && isRunningInBrowser()) {
      throw new OpenAIError("It looks like you're running in a browser-like environment.\n\nThis is disabled by default, as it risks exposing your secret API credentials to attackers.\nIf you understand the risks and have appropriate mitigations in place,\nyou can set the `dangerouslyAllowBrowser` option to `true`, e.g.,\n\nnew OpenAI({ apiKey, dangerouslyAllowBrowser: true });\n\nhttps://help.openai.com/en/articles/5112595-best-practices-for-api-key-safety\n");
    }
    this.baseURL = options.baseURL;
    this.timeout = options.timeout ?? _a2.DEFAULT_TIMEOUT;
    this.logger = options.logger ?? console;
    const defaultLogLevel = "warn";
    this.logLevel = defaultLogLevel;
    this.logLevel = parseLogLevel(options.logLevel, "ClientOptions.logLevel", this) ?? parseLogLevel(readEnv("OPENAI_LOG"), "process.env['OPENAI_LOG']", this) ?? defaultLogLevel;
    this.fetchOptions = options.fetchOptions;
    this.maxRetries = options.maxRetries ?? 2;
    this.fetch = options.fetch ?? getDefaultFetch();
    __classPrivateFieldSet(this, _OpenAI_encoder, FallbackEncoder, "f");
    this._options = options;
    this.apiKey = apiKey;
    this.organization = organization;
    this.project = project;
    this.webhookSecret = webhookSecret;
  }
  /**
   * Create a new client instance re-using the same options given to the current client with optional overriding.
   */
  withOptions(options) {
    const client = new this.constructor({
      ...this._options,
      baseURL: this.baseURL,
      maxRetries: this.maxRetries,
      timeout: this.timeout,
      logger: this.logger,
      logLevel: this.logLevel,
      fetch: this.fetch,
      fetchOptions: this.fetchOptions,
      apiKey: this.apiKey,
      organization: this.organization,
      project: this.project,
      webhookSecret: this.webhookSecret,
      ...options
    });
    return client;
  }
  defaultQuery() {
    return this._options.defaultQuery;
  }
  validateHeaders({ values, nulls }) {
    return;
  }
  async authHeaders(opts) {
    return buildHeaders([{ Authorization: `Bearer ${this.apiKey}` }]);
  }
  stringifyQuery(query) {
    return stringify(query, { arrayFormat: "brackets" });
  }
  getUserAgent() {
    return `${this.constructor.name}/JS ${VERSION}`;
  }
  defaultIdempotencyKey() {
    return `stainless-node-retry-${uuid4()}`;
  }
  makeStatusError(status, error, message, headers) {
    return APIError.generate(status, error, message, headers);
  }
  buildURL(path2, query, defaultBaseURL) {
    const baseURL = !__classPrivateFieldGet(this, _OpenAI_instances, "m", _OpenAI_baseURLOverridden).call(this) && defaultBaseURL || this.baseURL;
    const url = isAbsoluteURL(path2) ? new URL(path2) : new URL(baseURL + (baseURL.endsWith("/") && path2.startsWith("/") ? path2.slice(1) : path2));
    const defaultQuery = this.defaultQuery();
    if (!isEmptyObj(defaultQuery)) {
      query = { ...defaultQuery, ...query };
    }
    if (typeof query === "object" && query && !Array.isArray(query)) {
      url.search = this.stringifyQuery(query);
    }
    return url.toString();
  }
  /**
   * Used as a callback for mutating the given `FinalRequestOptions` object.
   */
  async prepareOptions(options) {
  }
  /**
   * Used as a callback for mutating the given `RequestInit` object.
   *
   * This is useful for cases where you want to add certain headers based off of
   * the request properties, e.g. `method` or `url`.
   */
  async prepareRequest(request, { url, options }) {
  }
  get(path2, opts) {
    return this.methodRequest("get", path2, opts);
  }
  post(path2, opts) {
    return this.methodRequest("post", path2, opts);
  }
  patch(path2, opts) {
    return this.methodRequest("patch", path2, opts);
  }
  put(path2, opts) {
    return this.methodRequest("put", path2, opts);
  }
  delete(path2, opts) {
    return this.methodRequest("delete", path2, opts);
  }
  methodRequest(method, path2, opts) {
    return this.request(Promise.resolve(opts).then((opts2) => {
      return { method, path: path2, ...opts2 };
    }));
  }
  request(options, remainingRetries = null) {
    return new APIPromise(this, this.makeRequest(options, remainingRetries, void 0));
  }
  async makeRequest(optionsInput, retriesRemaining, retryOfRequestLogID) {
    const options = await optionsInput;
    const maxRetries = options.maxRetries ?? this.maxRetries;
    if (retriesRemaining == null) {
      retriesRemaining = maxRetries;
    }
    await this.prepareOptions(options);
    const { req, url, timeout } = await this.buildRequest(options, {
      retryCount: maxRetries - retriesRemaining
    });
    await this.prepareRequest(req, { url, options });
    const requestLogID = "log_" + (Math.random() * (1 << 24) | 0).toString(16).padStart(6, "0");
    const retryLogStr = retryOfRequestLogID === void 0 ? "" : `, retryOf: ${retryOfRequestLogID}`;
    const startTime = Date.now();
    loggerFor(this).debug(`[${requestLogID}] sending request`, formatRequestDetails({
      retryOfRequestLogID,
      method: options.method,
      url,
      options,
      headers: req.headers
    }));
    if (options.signal?.aborted) {
      throw new APIUserAbortError();
    }
    const controller = new AbortController();
    const response = await this.fetchWithTimeout(url, req, timeout, controller).catch(castToError);
    const headersTime = Date.now();
    if (response instanceof Error) {
      const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;
      if (options.signal?.aborted) {
        throw new APIUserAbortError();
      }
      const isTimeout = isAbortError(response) || /timed? ?out/i.test(String(response) + ("cause" in response ? String(response.cause) : ""));
      if (retriesRemaining) {
        loggerFor(this).info(`[${requestLogID}] connection ${isTimeout ? "timed out" : "failed"} - ${retryMessage}`);
        loggerFor(this).debug(`[${requestLogID}] connection ${isTimeout ? "timed out" : "failed"} (${retryMessage})`, formatRequestDetails({
          retryOfRequestLogID,
          url,
          durationMs: headersTime - startTime,
          message: response.message
        }));
        return this.retryRequest(options, retriesRemaining, retryOfRequestLogID ?? requestLogID);
      }
      loggerFor(this).info(`[${requestLogID}] connection ${isTimeout ? "timed out" : "failed"} - error; no more retries left`);
      loggerFor(this).debug(`[${requestLogID}] connection ${isTimeout ? "timed out" : "failed"} (error; no more retries left)`, formatRequestDetails({
        retryOfRequestLogID,
        url,
        durationMs: headersTime - startTime,
        message: response.message
      }));
      if (isTimeout) {
        throw new APIConnectionTimeoutError();
      }
      throw new APIConnectionError({ cause: response });
    }
    const specialHeaders = [...response.headers.entries()].filter(([name]) => name === "x-request-id").map(([name, value]) => ", " + name + ": " + JSON.stringify(value)).join("");
    const responseInfo = `[${requestLogID}${retryLogStr}${specialHeaders}] ${req.method} ${url} ${response.ok ? "succeeded" : "failed"} with status ${response.status} in ${headersTime - startTime}ms`;
    if (!response.ok) {
      const shouldRetry = await this.shouldRetry(response);
      if (retriesRemaining && shouldRetry) {
        const retryMessage2 = `retrying, ${retriesRemaining} attempts remaining`;
        await CancelReadableStream(response.body);
        loggerFor(this).info(`${responseInfo} - ${retryMessage2}`);
        loggerFor(this).debug(`[${requestLogID}] response error (${retryMessage2})`, formatRequestDetails({
          retryOfRequestLogID,
          url: response.url,
          status: response.status,
          headers: response.headers,
          durationMs: headersTime - startTime
        }));
        return this.retryRequest(options, retriesRemaining, retryOfRequestLogID ?? requestLogID, response.headers);
      }
      const retryMessage = shouldRetry ? `error; no more retries left` : `error; not retryable`;
      loggerFor(this).info(`${responseInfo} - ${retryMessage}`);
      const errText = await response.text().catch((err2) => castToError(err2).message);
      const errJSON = safeJSON(errText);
      const errMessage = errJSON ? void 0 : errText;
      loggerFor(this).debug(`[${requestLogID}] response error (${retryMessage})`, formatRequestDetails({
        retryOfRequestLogID,
        url: response.url,
        status: response.status,
        headers: response.headers,
        message: errMessage,
        durationMs: Date.now() - startTime
      }));
      const err = this.makeStatusError(response.status, errJSON, errMessage, response.headers);
      throw err;
    }
    loggerFor(this).info(responseInfo);
    loggerFor(this).debug(`[${requestLogID}] response start`, formatRequestDetails({
      retryOfRequestLogID,
      url: response.url,
      status: response.status,
      headers: response.headers,
      durationMs: headersTime - startTime
    }));
    return { response, options, controller, requestLogID, retryOfRequestLogID, startTime };
  }
  getAPIList(path2, Page2, opts) {
    return this.requestAPIList(Page2, { method: "get", path: path2, ...opts });
  }
  requestAPIList(Page2, options) {
    const request = this.makeRequest(options, null, void 0);
    return new PagePromise(this, request, Page2);
  }
  async fetchWithTimeout(url, init, ms, controller) {
    const { signal, method, ...options } = init || {};
    if (signal)
      signal.addEventListener("abort", () => controller.abort());
    const timeout = setTimeout(() => controller.abort(), ms);
    const isReadableBody = globalThis.ReadableStream && options.body instanceof globalThis.ReadableStream || typeof options.body === "object" && options.body !== null && Symbol.asyncIterator in options.body;
    const fetchOptions = {
      signal: controller.signal,
      ...isReadableBody ? { duplex: "half" } : {},
      method: "GET",
      ...options
    };
    if (method) {
      fetchOptions.method = method.toUpperCase();
    }
    try {
      return await this.fetch.call(void 0, url, fetchOptions);
    } finally {
      clearTimeout(timeout);
    }
  }
  async shouldRetry(response) {
    const shouldRetryHeader = response.headers.get("x-should-retry");
    if (shouldRetryHeader === "true")
      return true;
    if (shouldRetryHeader === "false")
      return false;
    if (response.status === 408)
      return true;
    if (response.status === 409)
      return true;
    if (response.status === 429)
      return true;
    if (response.status >= 500)
      return true;
    return false;
  }
  async retryRequest(options, retriesRemaining, requestLogID, responseHeaders) {
    let timeoutMillis;
    const retryAfterMillisHeader = responseHeaders?.get("retry-after-ms");
    if (retryAfterMillisHeader) {
      const timeoutMs = parseFloat(retryAfterMillisHeader);
      if (!Number.isNaN(timeoutMs)) {
        timeoutMillis = timeoutMs;
      }
    }
    const retryAfterHeader = responseHeaders?.get("retry-after");
    if (retryAfterHeader && !timeoutMillis) {
      const timeoutSeconds = parseFloat(retryAfterHeader);
      if (!Number.isNaN(timeoutSeconds)) {
        timeoutMillis = timeoutSeconds * 1e3;
      } else {
        timeoutMillis = Date.parse(retryAfterHeader) - Date.now();
      }
    }
    if (!(timeoutMillis && 0 <= timeoutMillis && timeoutMillis < 60 * 1e3)) {
      const maxRetries = options.maxRetries ?? this.maxRetries;
      timeoutMillis = this.calculateDefaultRetryTimeoutMillis(retriesRemaining, maxRetries);
    }
    await sleep(timeoutMillis);
    return this.makeRequest(options, retriesRemaining - 1, requestLogID);
  }
  calculateDefaultRetryTimeoutMillis(retriesRemaining, maxRetries) {
    const initialRetryDelay = 0.5;
    const maxRetryDelay = 8;
    const numRetries = maxRetries - retriesRemaining;
    const sleepSeconds = Math.min(initialRetryDelay * Math.pow(2, numRetries), maxRetryDelay);
    const jitter = 1 - Math.random() * 0.25;
    return sleepSeconds * jitter * 1e3;
  }
  async buildRequest(inputOptions, { retryCount = 0 } = {}) {
    const options = { ...inputOptions };
    const { method, path: path2, query, defaultBaseURL } = options;
    const url = this.buildURL(path2, query, defaultBaseURL);
    if ("timeout" in options)
      validatePositiveInteger("timeout", options.timeout);
    options.timeout = options.timeout ?? this.timeout;
    const { bodyHeaders, body } = this.buildBody({ options });
    const reqHeaders = await this.buildHeaders({ options: inputOptions, method, bodyHeaders, retryCount });
    const req = {
      method,
      headers: reqHeaders,
      ...options.signal && { signal: options.signal },
      ...globalThis.ReadableStream && body instanceof globalThis.ReadableStream && { duplex: "half" },
      ...body && { body },
      ...this.fetchOptions ?? {},
      ...options.fetchOptions ?? {}
    };
    return { req, url, timeout: options.timeout };
  }
  async buildHeaders({ options, method, bodyHeaders, retryCount }) {
    let idempotencyHeaders = {};
    if (this.idempotencyHeader && method !== "get") {
      if (!options.idempotencyKey)
        options.idempotencyKey = this.defaultIdempotencyKey();
      idempotencyHeaders[this.idempotencyHeader] = options.idempotencyKey;
    }
    const headers = buildHeaders([
      idempotencyHeaders,
      {
        Accept: "application/json",
        "User-Agent": this.getUserAgent(),
        "X-Stainless-Retry-Count": String(retryCount),
        ...options.timeout ? { "X-Stainless-Timeout": String(Math.trunc(options.timeout / 1e3)) } : {},
        ...getPlatformHeaders(),
        "OpenAI-Organization": this.organization,
        "OpenAI-Project": this.project
      },
      await this.authHeaders(options),
      this._options.defaultHeaders,
      bodyHeaders,
      options.headers
    ]);
    this.validateHeaders(headers);
    return headers.values;
  }
  buildBody({ options: { body, headers: rawHeaders } }) {
    if (!body) {
      return { bodyHeaders: void 0, body: void 0 };
    }
    const headers = buildHeaders([rawHeaders]);
    if (
      // Pass raw type verbatim
      ArrayBuffer.isView(body) || body instanceof ArrayBuffer || body instanceof DataView || typeof body === "string" && // Preserve legacy string encoding behavior for now
      headers.values.has("content-type") || // `Blob` is superset of `File`
      body instanceof Blob || // `FormData` -> `multipart/form-data`
      body instanceof FormData || // `URLSearchParams` -> `application/x-www-form-urlencoded`
      body instanceof URLSearchParams || // Send chunked stream (each chunk has own `length`)
      globalThis.ReadableStream && body instanceof globalThis.ReadableStream
    ) {
      return { bodyHeaders: void 0, body };
    } else if (typeof body === "object" && (Symbol.asyncIterator in body || Symbol.iterator in body && "next" in body && typeof body.next === "function")) {
      return { bodyHeaders: void 0, body: ReadableStreamFrom(body) };
    } else {
      return __classPrivateFieldGet(this, _OpenAI_encoder, "f").call(this, { body, headers });
    }
  }
};
_a2 = OpenAI, _OpenAI_encoder = /* @__PURE__ */ new WeakMap(), _OpenAI_instances = /* @__PURE__ */ new WeakSet(), _OpenAI_baseURLOverridden = function _OpenAI_baseURLOverridden2() {
  return this.baseURL !== "https://api.openai.com/v1";
};
OpenAI.OpenAI = _a2;
OpenAI.DEFAULT_TIMEOUT = 6e5;
OpenAI.OpenAIError = OpenAIError;
OpenAI.APIError = APIError;
OpenAI.APIConnectionError = APIConnectionError;
OpenAI.APIConnectionTimeoutError = APIConnectionTimeoutError;
OpenAI.APIUserAbortError = APIUserAbortError;
OpenAI.NotFoundError = NotFoundError;
OpenAI.ConflictError = ConflictError;
OpenAI.RateLimitError = RateLimitError;
OpenAI.BadRequestError = BadRequestError;
OpenAI.AuthenticationError = AuthenticationError;
OpenAI.InternalServerError = InternalServerError;
OpenAI.PermissionDeniedError = PermissionDeniedError;
OpenAI.UnprocessableEntityError = UnprocessableEntityError;
OpenAI.InvalidWebhookSignatureError = InvalidWebhookSignatureError;
OpenAI.toFile = toFile;
OpenAI.Completions = Completions3;
OpenAI.Chat = Chat;
OpenAI.Embeddings = Embeddings;
OpenAI.Files = Files2;
OpenAI.Images = Images;
OpenAI.Audio = Audio;
OpenAI.Moderations = Moderations;
OpenAI.Models = Models;
OpenAI.FineTuning = FineTuning;
OpenAI.Graders = Graders2;
OpenAI.VectorStores = VectorStores;
OpenAI.Webhooks = Webhooks;
OpenAI.Beta = Beta;
OpenAI.Batches = Batches;
OpenAI.Uploads = Uploads;
OpenAI.Responses = Responses;
OpenAI.Evals = Evals;
OpenAI.Containers = Containers;

// https://esm.sh/@ai-sdk/provider@1.1.3/denonext/provider.mjs
var i19 = "vercel.ai.error";
var er = Symbol.for(i19);
var l13;
var ar = class c16 extends Error {
  constructor({ name: e7, message: s9, cause: t9 }) {
    super(s9), this[l13] = true, this.name = e7, this.cause = t9;
  }
  static isInstance(e7) {
    return c16.hasMarker(e7, i19);
  }
  static hasMarker(e7, s9) {
    let t9 = Symbol.for(s9);
    return e7 != null && typeof e7 == "object" && t9 in e7 && typeof e7[t9] == "boolean" && e7[t9] === true;
  }
};
l13 = er;
var a9 = ar;
var m22 = "AI_APICallError";
var v7 = `vercel.ai.error.${m22}`;
var sr = Symbol.for(v7);
var u15;
var br = class extends a9 {
  constructor({ message: r39, url: e7, requestBodyValues: s9, statusCode: t9, responseHeaders: W13, responseBody: X9, cause: Y9, isRetryable: Z11 = t9 != null && (t9 === 408 || t9 === 409 || t9 === 429 || t9 >= 500), data: rr }) {
    super({ name: m22, message: r39, cause: Y9 }), this[u15] = true, this.url = e7, this.requestBodyValues = s9, this.statusCode = t9, this.responseHeaders = W13, this.responseBody = X9, this.isRetryable = Z11, this.data = rr;
  }
  static isInstance(r39) {
    return a9.hasMarker(r39, v7);
  }
};
u15 = sr;
var y14 = "AI_EmptyResponseBodyError";
var d16 = `vercel.ai.error.${y14}`;
var tr = Symbol.for(d16);
var h18;
var Ir = class extends a9 {
  constructor({ message: r39 = "Empty response body" } = {}) {
    super({ name: y14, message: r39 }), this[h18] = true;
  }
  static isInstance(r39) {
    return a9.hasMarker(r39, d16);
  }
};
h18 = tr;
function p17(r39) {
  return r39 == null ? "unknown error" : typeof r39 == "string" ? r39 : r39 instanceof Error ? r39.message : JSON.stringify(r39);
}
var b12 = "AI_InvalidArgumentError";
var I9 = `vercel.ai.error.${b12}`;
var nr = Symbol.for(I9);
var f12;
var fr = class extends a9 {
  constructor({ message: r39, cause: e7, argument: s9 }) {
    super({ name: b12, message: r39, cause: e7 }), this[f12] = true, this.argument = s9;
  }
  static isInstance(r39) {
    return a9.hasMarker(r39, I9);
  }
};
f12 = nr;
var E8 = "AI_InvalidPromptError";
var S8 = `vercel.ai.error.${E8}`;
var or = Symbol.for(S8);
var g13;
g13 = or;
var k9 = "AI_InvalidResponseDataError";
var _11 = `vercel.ai.error.${k9}`;
var ir = Symbol.for(_11);
var A9;
A9 = ir;
var $10 = "AI_JSONParseError";
var M11 = `vercel.ai.error.${$10}`;
var lr = Symbol.for(M11);
var x13;
var gr3 = class extends a9 {
  constructor({ text: r39, cause: e7 }) {
    super({ name: $10, message: `JSON parsing failed: Text: ${r39}.
Error message: ${p17(e7)}`, cause: e7 }), this[x13] = true, this.text = r39;
  }
  static isInstance(r39) {
    return a9.hasMarker(r39, M11);
  }
};
x13 = lr;
var N7 = "AI_LoadAPIKeyError";
var O8 = `vercel.ai.error.${N7}`;
var cr = Symbol.for(O8);
var P10;
P10 = cr;
var T5 = "AI_LoadSettingError";
var J11 = `vercel.ai.error.${T5}`;
var mr = Symbol.for(J11);
var V9;
V9 = mr;
var j12 = "AI_NoContentGeneratedError";
var C7 = `vercel.ai.error.${j12}`;
var vr2 = Symbol.for(C7);
var D8;
D8 = vr2;
var K11 = "AI_NoSuchModelError";
var R9 = `vercel.ai.error.${K11}`;
var ur = Symbol.for(R9);
var w14;
w14 = ur;
var B8 = "AI_TooManyEmbeddingValuesForCallError";
var F9 = `vercel.ai.error.${B8}`;
var yr = Symbol.for(F9);
var L6;
var Mr = class extends a9 {
  constructor(r39) {
    super({ name: B8, message: `Too many values for a single embedding call. The ${r39.provider} model "${r39.modelId}" can only embed up to ${r39.maxEmbeddingsPerCall} values per call, but ${r39.values.length} values were provided.` }), this[L6] = true, this.provider = r39.provider, this.modelId = r39.modelId, this.maxEmbeddingsPerCall = r39.maxEmbeddingsPerCall, this.values = r39.values;
  }
  static isInstance(r39) {
    return a9.hasMarker(r39, F9);
  }
};
L6 = yr;
var G9 = "AI_TypeValidationError";
var U9 = `vercel.ai.error.${G9}`;
var dr = Symbol.for(U9);
var q15;
var hr = class o15 extends a9 {
  constructor({ value: e7, cause: s9 }) {
    super({ name: G9, message: `Type validation failed: Value: ${JSON.stringify(e7)}.
Error message: ${p17(s9)}`, cause: s9 }), this[q15] = true, this.value = e7;
  }
  static isInstance(e7) {
    return a9.hasMarker(e7, U9);
  }
  static wrap({ value: e7, cause: s9 }) {
    return o15.isInstance(s9) && s9.value === e7 ? s9 : new o15({ value: e7, cause: s9 });
  }
};
q15 = dr;
var xr2 = hr;
var H11 = "AI_UnsupportedFunctionalityError";
var z8 = `vercel.ai.error.${H11}`;
var pr = Symbol.for(z8);
var Q8;
var Nr = class extends a9 {
  constructor({ functionality: r39, message: e7 = `'${r39}' functionality not supported.` }) {
    super({ name: H11, message: e7 }), this[Q8] = true, this.functionality = r39;
  }
  static isInstance(r39) {
    return a9.hasMarker(r39, z8);
  }
};
Q8 = pr;

// https://esm.sh/nanoid@3.3.11/denonext/non-secure.mjs
var h19 = (t9, e7 = 21) => (l16 = e7) => {
  let r39 = "", n17 = l16 | 0;
  for (; n17--; ) r39 += t9[Math.random() * t9.length | 0];
  return r39;
};

// https://esm.sh/secure-json-parse@2.7.0/denonext/secure-json-parse.mjs
import { Buffer as __Buffer$6 } from "node:buffer";
var F10 = Object.create;
var l14 = Object.defineProperty;
var b13 = Object.getOwnPropertyDescriptor;
var g14 = Object.getOwnPropertyNames;
var j13 = Object.getPrototypeOf;
var E9 = Object.prototype.hasOwnProperty;
var k10 = (r39, e7) => () => (e7 || r39((e7 = { exports: {} }).exports, e7), e7.exports);
var O9 = (r39, e7, t9, o18) => {
  if (e7 && typeof e7 == "object" || typeof e7 == "function") for (let n17 of g14(e7)) !E9.call(r39, n17) && n17 !== t9 && l14(r39, n17, { get: () => e7[n17], enumerable: !(o18 = b13(e7, n17)) || o18.enumerable });
  return r39;
};
var w15 = (r39, e7, t9) => (t9 = r39 != null ? F10(j13(r39)) : {}, O9(e7 || !r39 || !r39.__esModule ? l14(t9, "default", { value: r39, enumerable: true }) : t9, r39));
var m23 = k10((B11, f14) => {
  "use strict";
  var L9 = typeof __Buffer$6 < "u", p19 = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/, y15 = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
  function d19(r39, e7, t9) {
    t9 == null && e7 !== null && typeof e7 == "object" && (t9 = e7, e7 = void 0), L9 && __Buffer$6.isBuffer(r39) && (r39 = r39.toString()), r39 && r39.charCodeAt(0) === 65279 && (r39 = r39.slice(1));
    let o18 = JSON.parse(r39, e7);
    if (o18 === null || typeof o18 != "object") return o18;
    let n17 = t9 && t9.protoAction || "error", c18 = t9 && t9.constructorAction || "error";
    if (n17 === "ignore" && c18 === "ignore") return o18;
    if (n17 !== "ignore" && c18 !== "ignore") {
      if (p19.test(r39) === false && y15.test(r39) === false) return o18;
    } else if (n17 !== "ignore" && c18 === "ignore") {
      if (p19.test(r39) === false) return o18;
    } else if (y15.test(r39) === false) return o18;
    return _14(o18, { protoAction: n17, constructorAction: c18, safe: t9 && t9.safe });
  }
  function _14(r39, { protoAction: e7 = "error", constructorAction: t9 = "error", safe: o18 } = {}) {
    let n17 = [r39];
    for (; n17.length; ) {
      let c18 = n17;
      n17 = [];
      for (let s9 of c18) {
        if (e7 !== "ignore" && Object.prototype.hasOwnProperty.call(s9, "__proto__")) {
          if (o18 === true) return null;
          if (e7 === "error") throw new SyntaxError("Object contains forbidden prototype property");
          delete s9.__proto__;
        }
        if (t9 !== "ignore" && Object.prototype.hasOwnProperty.call(s9, "constructor") && Object.prototype.hasOwnProperty.call(s9.constructor, "prototype")) {
          if (o18 === true) return null;
          if (t9 === "error") throw new SyntaxError("Object contains forbidden prototype property");
          delete s9.constructor;
        }
        for (let h22 in s9) {
          let a11 = s9[h22];
          a11 && typeof a11 == "object" && n17.push(a11);
        }
      }
    }
    return r39;
  }
  function i21(r39, e7, t9) {
    let o18 = Error.stackTraceLimit;
    Error.stackTraceLimit = 0;
    try {
      return d19(r39, e7, t9);
    } finally {
      Error.stackTraceLimit = o18;
    }
  }
  function T9(r39, e7) {
    let t9 = Error.stackTraceLimit;
    Error.stackTraceLimit = 0;
    try {
      return d19(r39, e7, { safe: true });
    } catch {
      return null;
    } finally {
      Error.stackTraceLimit = t9;
    }
  }
  f14.exports = i21;
  f14.exports.default = i21;
  f14.exports.parse = i21;
  f14.exports.safeParse = T9;
  f14.exports.scan = _14;
});
var u16 = w15(m23());
var { parse: S9, safeParse: A10, scan: x14 } = u16;
var C8 = u16.default ?? u16;

// https://esm.sh/@ai-sdk/provider-utils@2.2.8/denonext/provider-utils.mjs
import __Process$10 from "node:process";
function _12(...e7) {
  return e7.reduce((t9, r39) => ({ ...t9, ...r39 ?? {} }), {});
}
function d17(e7) {
  let t9 = {};
  return e7.headers.forEach((r39, s9) => {
    t9[s9] = r39;
  }), t9;
}
var J12 = ({ prefix: e7, size: t9 = 16, alphabet: r39 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", separator: s9 = "-" } = {}) => {
  let o18 = h19(r39, t9);
  if (e7 == null) return o18;
  if (r39.includes(s9)) throw new fr({ argument: "separator", message: `The separator "${s9}" must not be part of the alphabet "${r39}".` });
  return (u18) => `${e7}${s9}${o18(u18)}`;
};
var Z8 = J12();
function P11(e7) {
  return Object.fromEntries(Object.entries(e7).filter(([t9, r39]) => r39 != null));
}
function h20(e7) {
  return e7 instanceof Error && (e7.name === "AbortError" || e7.name === "TimeoutError");
}
var T6 = Symbol.for("vercel.ai.validator");
function k11(e7) {
  return { [T6]: true, validate: e7 };
}
function L7(e7) {
  return typeof e7 == "object" && e7 !== null && T6 in e7 && e7[T6] === true && "validate" in e7;
}
function j14(e7) {
  return L7(e7) ? e7 : U10(e7);
}
function U10(e7) {
  return k11((t9) => {
    let r39 = e7.safeParse(t9);
    return r39.success ? { success: true, value: r39.data } : { success: false, error: r39.error };
  });
}
function N8({ value: e7, schema: t9 }) {
  let r39 = A11({ value: e7, schema: t9 });
  if (!r39.success) throw xr2.wrap({ value: e7, cause: r39.error });
  return r39.value;
}
function A11({ value: e7, schema: t9 }) {
  let r39 = j14(t9);
  try {
    if (r39.validate == null) return { success: true, value: e7 };
    let s9 = r39.validate(e7);
    return s9.success ? s9 : { success: false, error: xr2.wrap({ value: e7, cause: s9.error }) };
  } catch (s9) {
    return { success: false, error: xr2.wrap({ value: e7, cause: s9 }) };
  }
}
function D9({ text: e7, schema: t9 }) {
  try {
    let r39 = C8.parse(e7);
    return t9 == null ? r39 : N8({ value: r39, schema: t9 });
  } catch (r39) {
    throw gr3.isInstance(r39) || xr2.isInstance(r39) ? r39 : new gr3({ text: e7, cause: r39 });
  }
}
function S10({ text: e7, schema: t9 }) {
  try {
    let r39 = C8.parse(e7);
    if (t9 == null) return { success: true, value: r39, rawValue: r39 };
    let s9 = A11({ value: r39, schema: t9 });
    return s9.success ? { ...s9, rawValue: r39 } : s9;
  } catch (r39) {
    return { success: false, error: gr3.isInstance(r39) ? r39 : new gr3({ text: e7, cause: r39 }) };
  }
}
var G10 = () => globalThis.fetch;
var he6 = async ({ url: e7, headers: t9, body: r39, failedResponseHandler: s9, successfulResponseHandler: o18, abortSignal: u18, fetch: a11 }) => $11({ url: e7, headers: { "Content-Type": "application/json", ...t9 }, body: { content: JSON.stringify(r39), values: r39 }, failedResponseHandler: s9, successfulResponseHandler: o18, abortSignal: u18, fetch: a11 });
var $11 = async ({ url: e7, headers: t9 = {}, body: r39, successfulResponseHandler: s9, failedResponseHandler: o18, abortSignal: u18, fetch: a11 = G10() }) => {
  try {
    let i21 = await a11(e7, { method: "POST", headers: P11(t9), body: r39.content, signal: u18 }), n17 = d17(i21);
    if (!i21.ok) {
      let c18;
      try {
        c18 = await o18({ response: i21, url: e7, requestBodyValues: r39.values });
      } catch (f14) {
        throw h20(f14) || br.isInstance(f14) ? f14 : new br({ message: "Failed to process error response", cause: f14, statusCode: i21.status, url: e7, responseHeaders: n17, requestBodyValues: r39.values });
      }
      throw c18.value;
    }
    try {
      return await s9({ response: i21, url: e7, requestBodyValues: r39.values });
    } catch (c18) {
      throw c18 instanceof Error && (h20(c18) || br.isInstance(c18)) ? c18 : new br({ message: "Failed to process successful response", cause: c18, statusCode: i21.status, url: e7, responseHeaders: n17, requestBodyValues: r39.values });
    }
  } catch (i21) {
    if (h20(i21)) throw i21;
    if (i21 instanceof TypeError && i21.message === "fetch failed") {
      let n17 = i21.cause;
      if (n17 != null) throw new br({ message: `Cannot connect to API: ${n17.message}`, cause: n17, url: e7, requestBodyValues: r39.values, isRetryable: true });
    }
    throw i21;
  }
};
var ge4 = ({ errorSchema: e7, errorToMessage: t9, isRetryable: r39 }) => async ({ response: s9, url: o18, requestBodyValues: u18 }) => {
  let a11 = await s9.text(), i21 = d17(s9);
  if (a11.trim() === "") return { responseHeaders: i21, value: new br({ message: s9.statusText, url: o18, requestBodyValues: u18, statusCode: s9.status, responseHeaders: i21, responseBody: a11, isRetryable: r39?.(s9) }) };
  try {
    let n17 = D9({ text: a11, schema: e7 });
    return { responseHeaders: i21, value: new br({ message: t9(n17), url: o18, requestBodyValues: u18, statusCode: s9.status, responseHeaders: i21, responseBody: a11, data: n17, isRetryable: r39?.(s9, n17) }) };
  } catch {
    return { responseHeaders: i21, value: new br({ message: s9.statusText, url: o18, requestBodyValues: u18, statusCode: s9.status, responseHeaders: i21, responseBody: a11, isRetryable: r39?.(s9) }) };
  }
};
var be6 = (e7) => async ({ response: t9, url: r39, requestBodyValues: s9 }) => {
  let o18 = await t9.text(), u18 = S10({ text: o18, schema: e7 }), a11 = d17(t9);
  if (!u18.success) throw new br({ message: "Invalid JSON response", cause: u18.error, statusCode: t9.status, responseHeaders: a11, responseBody: o18, url: r39, requestBodyValues: s9 });
  return { responseHeaders: a11, value: u18.value, rawValue: u18.rawValue };
};
var { btoa: V10, atob: W12 } = globalThis;
function Se5(e7) {
  let t9 = "";
  for (let r39 = 0; r39 < e7.length; r39++) t9 += String.fromCodePoint(e7[r39]);
  return V10(t9);
}
function Pe6(e7) {
  return e7?.replace(/\/$/, "");
}

// https://esm.sh/partial-json@0.1.7/denonext/options.mjs
var options_exports = {};
__export(options_exports, {
  ALL: () => r38,
  ARR: () => p18,
  ATOM: () => u17,
  Allow: () => _13,
  BOOL: () => f13,
  COLLECTION: () => s8,
  INF: () => P12,
  INFINITY: () => a10,
  NAN: () => c17,
  NULL: () => i20,
  NUM: () => w16,
  OBJ: () => m24,
  SPECIAL: () => d18,
  STR: () => j15,
  _INFINITY: () => J13,
  __esModule: () => b14,
  default: () => n16
});
var e6 = Object.create;
var F11 = Object.defineProperty;
var l15 = Object.getOwnPropertyDescriptor;
var M12 = Object.getOwnPropertyNames;
var o16 = Object.getPrototypeOf;
var t8 = Object.prototype.hasOwnProperty;
var B9 = (L9, I11) => () => (I11 || L9((I11 = { exports: {} }).exports, I11), I11.exports);
var E10 = (L9, I11, O10, C10) => {
  if (I11 && typeof I11 == "object" || typeof I11 == "function") for (let A13 of M12(I11)) !t8.call(L9, A13) && A13 !== O10 && F11(L9, A13, { get: () => I11[A13], enumerable: !(C10 = l15(I11, A13)) || C10.enumerable });
  return L9;
};
var S11 = (L9, I11, O10) => (O10 = L9 != null ? e6(o16(L9)) : {}, E10(I11 || !L9 || !L9.__esModule ? F11(O10, "default", { value: L9, enumerable: true }) : O10, L9));
var R10 = B9((N9) => {
  "use strict";
  Object.defineProperty(N9, "__esModule", { value: true });
  N9.Allow = N9.ALL = N9.COLLECTION = N9.ATOM = N9.SPECIAL = N9.INF = N9._INFINITY = N9.INFINITY = N9.NAN = N9.BOOL = N9.NULL = N9.OBJ = N9.ARR = N9.NUM = N9.STR = void 0;
  N9.STR = 1;
  N9.NUM = 2;
  N9.ARR = 4;
  N9.OBJ = 8;
  N9.NULL = 16;
  N9.BOOL = 32;
  N9.NAN = 64;
  N9.INFINITY = 128;
  N9._INFINITY = 256;
  N9.INF = N9.INFINITY | N9._INFINITY;
  N9.SPECIAL = N9.NULL | N9.BOOL | N9.INF | N9.NAN;
  N9.ATOM = N9.STR | N9.NUM | N9.SPECIAL;
  N9.COLLECTION = N9.ARR | N9.OBJ;
  N9.ALL = N9.ATOM | N9.COLLECTION;
  N9.Allow = { STR: N9.STR, NUM: N9.NUM, ARR: N9.ARR, OBJ: N9.OBJ, NULL: N9.NULL, BOOL: N9.BOOL, NAN: N9.NAN, INFINITY: N9.INFINITY, _INFINITY: N9._INFINITY, INF: N9.INF, SPECIAL: N9.SPECIAL, ATOM: N9.ATOM, COLLECTION: N9.COLLECTION, ALL: N9.ALL };
  N9.default = N9.Allow;
});
var T7 = S11(R10());
var { __esModule: b14, Allow: _13, ALL: r38, COLLECTION: s8, ATOM: u17, SPECIAL: d18, INF: P12, _INFINITY: J13, INFINITY: a10, NAN: c17, BOOL: f13, NULL: i20, OBJ: m24, ARR: p18, NUM: w16, STR: j15 } = T7;
var n16 = T7.default ?? T7;

// https://esm.sh/partial-json@0.1.7/denonext/partial-json.mjs
var require7 = (n17) => {
  const e7 = (m26) => typeof m26.default < "u" ? m26.default : m26, c18 = (m26) => Object.assign({ __esModule: true }, m26);
  switch (n17) {
    case "partial-json/options":
      return c18(options_exports);
    default:
      console.error('module "' + n17 + '" not found');
      return null;
  }
};
var m25 = Object.create;
var o17 = Object.defineProperty;
var L8 = Object.getOwnPropertyDescriptor;
var x15 = Object.getOwnPropertyNames;
var B10 = Object.getPrototypeOf;
var M13 = Object.prototype.hasOwnProperty;
var A12 = ((t9) => typeof require7 < "u" ? require7 : typeof Proxy < "u" ? new Proxy(t9, { get: (r39, s9) => (typeof require7 < "u" ? require7 : r39)[s9] }) : t9)(function(t9) {
  if (typeof require7 < "u") return require7.apply(this, arguments);
  throw Error('Dynamic require of "' + t9 + '" is not supported');
});
var E11 = (t9, r39) => () => (r39 || t9((r39 = { exports: {} }).exports, r39), r39.exports);
var P13 = (t9, r39, s9, e7) => {
  if (r39 && typeof r39 == "object" || typeof r39 == "function") for (let i21 of x15(r39)) !M13.call(t9, i21) && i21 !== s9 && o17(t9, i21, { get: () => r39[i21], enumerable: !(e7 = L8(r39, i21)) || e7.enumerable });
  return t9;
};
var T8 = (t9, r39, s9) => (s9 = t9 != null ? m25(B10(t9)) : {}, P13(r39 || !t9 || !t9.__esModule ? o17(s9, "default", { value: t9, enumerable: true }) : s9, t9));
var w17 = E11((u18) => {
  "use strict";
  var U11 = u18 && u18.__createBinding || (Object.create ? function(t9, r39, s9, e7) {
    e7 === void 0 && (e7 = s9);
    var i21 = Object.getOwnPropertyDescriptor(r39, s9);
    (!i21 || ("get" in i21 ? !r39.__esModule : i21.writable || i21.configurable)) && (i21 = { enumerable: true, get: function() {
      return r39[s9];
    } }), Object.defineProperty(t9, e7, i21);
  } : function(t9, r39, s9, e7) {
    e7 === void 0 && (e7 = s9), t9[e7] = r39[s9];
  }), v9 = u18 && u18.__exportStar || function(t9, r39) {
    for (var s9 in t9) s9 !== "default" && !Object.prototype.hasOwnProperty.call(r39, s9) && U11(r39, t9, s9);
  };
  Object.defineProperty(u18, "__esModule", { value: true });
  u18.Allow = u18.MalformedJSON = u18.PartialJSON = u18.parseJSON = u18.parse = void 0;
  var f14 = A12("partial-json/options");
  Object.defineProperty(u18, "Allow", { enumerable: true, get: function() {
    return f14.Allow;
  } });
  v9(A12("partial-json/options"), u18);
  var O10 = class extends Error {
  };
  u18.PartialJSON = O10;
  var p19 = class extends Error {
  };
  u18.MalformedJSON = p19;
  function y15(t9, r39 = f14.Allow.ALL) {
    if (typeof t9 != "string") throw new TypeError(`expecting str, got ${typeof t9}`);
    if (!t9.trim()) throw new Error(`${t9} is empty`);
    return R11(t9.trim(), r39);
  }
  u18.parseJSON = y15;
  var R11 = (t9, r39) => {
    let s9 = t9.length, e7 = 0, i21 = (a11) => {
      throw new O10(`${a11} at position ${e7}`);
    }, N9 = (a11) => {
      throw new p19(`${a11} at position ${e7}`);
    }, d19 = () => (n17(), e7 >= s9 && i21("Unexpected end of input"), t9[e7] === '"' ? b15() : t9[e7] === "{" ? I11() : t9[e7] === "[" ? J15() : t9.substring(e7, e7 + 4) === "null" || f14.Allow.NULL & r39 && s9 - e7 < 4 && "null".startsWith(t9.substring(e7)) ? (e7 += 4, null) : t9.substring(e7, e7 + 4) === "true" || f14.Allow.BOOL & r39 && s9 - e7 < 4 && "true".startsWith(t9.substring(e7)) ? (e7 += 4, true) : t9.substring(e7, e7 + 5) === "false" || f14.Allow.BOOL & r39 && s9 - e7 < 5 && "false".startsWith(t9.substring(e7)) ? (e7 += 5, false) : t9.substring(e7, e7 + 8) === "Infinity" || f14.Allow.INFINITY & r39 && s9 - e7 < 8 && "Infinity".startsWith(t9.substring(e7)) ? (e7 += 8, 1 / 0) : t9.substring(e7, e7 + 9) === "-Infinity" || f14.Allow._INFINITY & r39 && 1 < s9 - e7 && s9 - e7 < 9 && "-Infinity".startsWith(t9.substring(e7)) ? (e7 += 9, -1 / 0) : t9.substring(e7, e7 + 3) === "NaN" || f14.Allow.NAN & r39 && s9 - e7 < 3 && "NaN".startsWith(t9.substring(e7)) ? (e7 += 3, NaN) : _14()), b15 = () => {
      let a11 = e7, c18 = false;
      for (e7++; e7 < s9 && (t9[e7] !== '"' || c18 && t9[e7 - 1] === "\\"); ) c18 = t9[e7] === "\\" ? !c18 : false, e7++;
      if (t9.charAt(e7) == '"') try {
        return JSON.parse(t9.substring(a11, ++e7 - Number(c18)));
      } catch (l16) {
        N9(String(l16));
      }
      else if (f14.Allow.STR & r39) try {
        return JSON.parse(t9.substring(a11, e7 - Number(c18)) + '"');
      } catch {
        return JSON.parse(t9.substring(a11, t9.lastIndexOf("\\")) + '"');
      }
      i21("Unterminated string literal");
    }, I11 = () => {
      e7++, n17();
      let a11 = {};
      try {
        for (; t9[e7] !== "}"; ) {
          if (n17(), e7 >= s9 && f14.Allow.OBJ & r39) return a11;
          let c18 = b15();
          n17(), e7++;
          try {
            let l16 = d19();
            a11[c18] = l16;
          } catch (l16) {
            if (f14.Allow.OBJ & r39) return a11;
            throw l16;
          }
          n17(), t9[e7] === "," && e7++;
        }
      } catch {
        if (f14.Allow.OBJ & r39) return a11;
        i21("Expected '}' at end of object");
      }
      return e7++, a11;
    }, J15 = () => {
      e7++;
      let a11 = [];
      try {
        for (; t9[e7] !== "]"; ) a11.push(d19()), n17(), t9[e7] === "," && e7++;
      } catch {
        if (f14.Allow.ARR & r39) return a11;
        i21("Expected ']' at end of array");
      }
      return e7++, a11;
    }, _14 = () => {
      if (e7 === 0) {
        t9 === "-" && N9("Not sure what '-' is");
        try {
          return JSON.parse(t9);
        } catch (c18) {
          if (f14.Allow.NUM & r39) try {
            return JSON.parse(t9.substring(0, t9.lastIndexOf("e")));
          } catch {
          }
          N9(String(c18));
        }
      }
      let a11 = e7;
      for (t9[e7] === "-" && e7++; t9[e7] && ",]}".indexOf(t9[e7]) === -1; ) e7++;
      e7 == s9 && !(f14.Allow.NUM & r39) && i21("Unterminated number literal");
      try {
        return JSON.parse(t9.substring(a11, e7));
      } catch {
        t9.substring(a11, e7) === "-" && i21("Not sure what '-' is");
        try {
          return JSON.parse(t9.substring(a11, t9.lastIndexOf("e")));
        } catch (l16) {
          N9(String(l16));
        }
      }
    }, n17 = () => {
      for (; e7 < s9 && ` 
\r	`.includes(t9[e7]); ) e7++;
    };
    return d19();
  }, W13 = y15;
  u18.parse = W13;
});
var h21 = T8(w17());
var { __esModule: Y8, Allow: C9, MalformedJSON: q16, PartialJSON: D10, parseJSON: z9, parse: G11, ALL: H12, COLLECTION: K12, ATOM: Q9, SPECIAL: V11, INF: X8, _INFINITY: Z9, INFINITY: k12, NAN: g15, BOOL: S12, NULL: j16, OBJ: ee5, ARR: te7, NUM: re6, STR: se7 } = h21;
var ae7 = h21.default ?? h21;

// https://esm.sh/ollama-ai-provider@1.2.0
init_zod_3_25();

// https://esm.sh/ollama-ai-provider@1.2.0/denonext/ollama-ai-provider.mjs
init_zod_3_25();
init_zod_3_25();
init_zod_3_25();
function v8(e7) {
  let t9 = [];
  for (let { content: s9, role: i21 } of e7) switch (i21) {
    case "system": {
      t9.push({ content: s9, role: "system" });
      break;
    }
    case "user": {
      t9.push({ ...s9.reduce((a11, n17) => {
        if (n17.type === "text") a11.content += n17.text;
        else {
          if (n17.type === "image" && n17.image instanceof URL) throw new Nr({ functionality: "Image URLs in user messages" });
          n17.type === "image" && n17.image instanceof Uint8Array && (a11.images = a11.images || [], a11.images.push(Se5(n17.image)));
        }
        return a11;
      }, { content: "" }), role: "user" });
      break;
    }
    case "assistant": {
      let a11 = [], n17 = [];
      for (let l16 of s9) switch (l16.type) {
        case "text": {
          a11.push(l16.text);
          break;
        }
        case "tool-call": {
          n17.push({ function: { arguments: l16.args, name: l16.toolName }, id: l16.toolCallId, type: "function" });
          break;
        }
        default: {
          let r39 = l16;
          throw new Error(`Unsupported part: ${r39}`);
        }
      }
      t9.push({ content: a11.join(","), role: "assistant", tool_calls: n17.length > 0 ? n17 : void 0 });
      break;
    }
    case "tool": {
      t9.push(...s9.map((a11) => ({ content: typeof a11.result == "object" ? JSON.stringify(a11.result) : `${a11.result}`, role: "tool", tool_call_id: a11.toolCallId })));
      break;
    }
    default: {
      let a11 = i21;
      throw new Error(`Unsupported role: ${a11}`);
    }
  }
  return t9;
}
var H13 = class {
  constructor({ tools: e7, type: t9 }) {
    this._firstMessage = true, this._tools = e7, this._toolPartial = "", this._toolCalls = [], this._type = t9, this._detectedToolCall = false;
  }
  get toolCalls() {
    return this._toolCalls;
  }
  get detectedToolCall() {
    return this._detectedToolCall;
  }
  parse({ controller: e7, delta: t9 }) {
    var s9;
    if (this.detectToolCall(t9), !this._detectedToolCall) return false;
    this._toolPartial += t9;
    let i21 = G11(this._toolPartial);
    Array.isArray(i21) || (i21 = [i21]);
    for (let [a11, n17] of i21.entries()) {
      let l16 = (s9 = JSON.stringify(n17?.parameters)) != null ? s9 : "";
      if (l16 === "") continue;
      this._toolCalls[a11] || (this._toolCalls[a11] = { function: { arguments: "", name: n17.name }, id: Z8(), type: "function" });
      let r39 = this._toolCalls[a11];
      r39.function.arguments = l16, e7.enqueue({ argsTextDelta: t9, toolCallId: r39.id, toolCallType: "function", toolName: r39.function.name, type: "tool-call-delta" });
    }
    return true;
  }
  finish({ controller: e7 }) {
    for (let t9 of this.toolCalls) e7.enqueue({ args: t9.function.arguments, toolCallId: t9.id, toolCallType: "function", toolName: t9.function.name, type: "tool-call" });
    return this.finishReason();
  }
  detectToolCall(e7) {
    !this._tools || this._tools.length === 0 || this._firstMessage && (this._type === "object-tool" ? this._detectedToolCall = true : this._type === "regular" && (e7.trim().startsWith("{") || e7.trim().startsWith("[")) && (this._detectedToolCall = true), this._firstMessage = false);
  }
  finishReason() {
    return this.detectedToolCall ? this._type === "object-tool" ? "stop" : "tool-calls" : "stop";
  }
};
function I10({ finishReason: e7, hasToolCalls: t9 }) {
  switch (e7) {
    case "stop":
      return t9 ? "tool-calls" : "stop";
    default:
      return "other";
  }
}
var k13 = be2.object({ error: be2.object({ code: be2.string().nullable(), message: be2.string(), param: be2.any().nullable(), type: be2.string() }) });
var w18 = ge4({ errorSchema: k13, errorToMessage: (e7) => e7.error.message });
function q17({ mode: e7 }) {
  var t9;
  let s9 = (t9 = e7.tools) != null && t9.length ? e7.tools : void 0, i21 = [], a11 = e7.toolChoice;
  if (s9 === void 0) return { tools: void 0, toolWarnings: i21 };
  let n17 = [];
  for (let r39 of s9) r39.type === "provider-defined" ? i21.push({ tool: r39, type: "unsupported-tool" }) : n17.push({ function: { description: r39.description, name: r39.name, parameters: r39.parameters }, type: "function" });
  if (a11 === void 0) return { tools: n17, toolWarnings: i21 };
  let l16 = a11.type;
  switch (l16) {
    case "auto":
      return { tools: n17, toolWarnings: i21 };
    case "none":
      return { tools: void 0, toolWarnings: i21 };
    default: {
      let r39 = l16;
      throw new Nr({ functionality: `Unsupported tool choice type: ${r39}` });
    }
  }
}
function J14(e7) {
  return Object.fromEntries(Object.entries(e7).filter(([, t9]) => t9 !== void 0));
}
var z10 = class extends TransformStream {
  constructor() {
    super({ flush: (e7) => {
      this.buffer.length !== 0 && e7.enqueue(this.buffer);
    }, transform: (e7, t9) => {
      for (e7 = this.buffer + e7; ; ) {
        let s9 = e7.indexOf(`
`);
        if (s9 === -1) break;
        t9.enqueue(e7.slice(0, s9)), e7 = e7.slice(s9 + 1);
      }
      this.buffer = e7;
    } }), this.buffer = "";
  }
};
var $12 = (e7) => async ({ response: t9 }) => {
  let s9 = d17(t9);
  if (t9.body === null) throw new Ir({});
  return { responseHeaders: s9, value: t9.body.pipeThrough(new TextDecoderStream()).pipeThrough(new z10()).pipeThrough(new TransformStream({ transform(i21, a11) {
    a11.enqueue(S10({ schema: e7, text: i21 }));
  } })) };
};
var F12 = class {
  constructor(e7, t9, s9) {
    this.modelId = e7, this.settings = t9, this.config = s9, this.specificationVersion = "v1", this.defaultObjectGenerationMode = "json", this.supportsImageUrls = false;
  }
  get supportsStructuredOutputs() {
    var e7;
    return (e7 = this.settings.structuredOutputs) != null ? e7 : false;
  }
  get provider() {
    return this.config.provider;
  }
  getArguments({ frequencyPenalty: e7, maxTokens: t9, mode: s9, presencePenalty: i21, prompt: a11, responseFormat: n17, seed: l16, stopSequences: r39, temperature: d19, topK: f14, topP: g16 }) {
    let m26 = s9.type, h22 = [];
    n17 !== void 0 && n17.type === "json" && n17.schema !== void 0 && !this.supportsStructuredOutputs && h22.push({ details: "JSON response format schema is only supported with structuredOutputs", setting: "responseFormat", type: "unsupported-setting" });
    let u18 = { format: n17?.type, model: this.modelId, options: J14({ f16_kv: this.settings.f16Kv, frequency_penalty: e7, low_vram: this.settings.lowVram, main_gpu: this.settings.mainGpu, min_p: this.settings.minP, mirostat: this.settings.mirostat, mirostat_eta: this.settings.mirostatEta, mirostat_tau: this.settings.mirostatTau, num_batch: this.settings.numBatch, num_ctx: this.settings.numCtx, num_gpu: this.settings.numGpu, num_keep: this.settings.numKeep, num_predict: t9, num_thread: this.settings.numThread, numa: this.settings.numa, penalize_newline: this.settings.penalizeNewline, presence_penalty: i21, repeat_last_n: this.settings.repeatLastN, repeat_penalty: this.settings.repeatPenalty, seed: l16, stop: r39, temperature: d19, tfs_z: this.settings.tfsZ, top_k: f14, top_p: g16, typical_p: this.settings.typicalP, use_mlock: this.settings.useMlock, use_mmap: this.settings.useMmap, vocab_only: this.settings.vocabOnly }) };
    switch (m26) {
      case "regular": {
        let { tools: p19, toolWarnings: c18 } = q17({ mode: s9 });
        return { args: { ...u18, messages: v8(a11), tools: p19 }, type: m26, warnings: [...h22, ...c18] };
      }
      case "object-json":
        return { args: { ...u18, format: this.supportsStructuredOutputs && s9.schema !== void 0 ? s9.schema : "json", messages: v8(a11) }, type: m26, warnings: h22 };
      case "object-tool":
        return { args: { ...u18, messages: v8(a11), tool_choice: { function: { name: s9.tool.name }, type: "function" }, tools: [{ function: { description: s9.tool.description, name: s9.tool.name, parameters: s9.tool.parameters }, type: "function" }] }, type: m26, warnings: h22 };
      default: {
        let p19 = m26;
        throw new Error(`Unsupported type: ${p19}`);
      }
    }
  }
  async doGenerate(e7) {
    var t9, s9;
    let { args: i21, warnings: a11 } = this.getArguments(e7), n17 = { ...i21, stream: false }, { responseHeaders: l16, value: r39 } = await he6({ abortSignal: e7.abortSignal, body: n17, failedResponseHandler: w18, fetch: this.config.fetch, headers: _12(this.config.headers(), e7.headers), successfulResponseHandler: be6(D11), url: `${this.config.baseURL}/chat` }), { messages: d19, ...f14 } = n17, g16 = (t9 = r39.message.tool_calls) == null ? void 0 : t9.map((m26) => {
      var h22;
      return { args: JSON.stringify(m26.function.arguments), toolCallId: (h22 = m26.id) != null ? h22 : Z8(), toolCallType: "function", toolName: m26.function.name };
    });
    return { finishReason: I10({ finishReason: r39.done_reason, hasToolCalls: g16 !== void 0 && g16.length > 0 }), rawCall: { rawPrompt: d19, rawSettings: f14 }, rawResponse: { headers: l16 }, request: { body: JSON.stringify(n17) }, text: (s9 = r39.message.content) != null ? s9 : void 0, toolCalls: g16, usage: { completionTokens: r39.eval_count || 0, promptTokens: r39.prompt_eval_count || 0 }, warnings: a11 };
  }
  async doStream(e7) {
    if (this.settings.simulateStreaming) {
      let u18 = await this.doGenerate(e7), p19 = new ReadableStream({ start(c18) {
        if (c18.enqueue({ type: "response-metadata", ...u18.response }), u18.text && c18.enqueue({ textDelta: u18.text, type: "text-delta" }), u18.toolCalls) for (let b15 of u18.toolCalls) c18.enqueue({ argsTextDelta: b15.args, toolCallId: b15.toolCallId, toolCallType: "function", toolName: b15.toolName, type: "tool-call-delta" }), c18.enqueue({ type: "tool-call", ...b15 });
        c18.enqueue({ finishReason: u18.finishReason, logprobs: u18.logprobs, providerMetadata: u18.providerMetadata, type: "finish", usage: u18.usage }), c18.close();
      } });
      return { rawCall: u18.rawCall, rawResponse: u18.rawResponse, stream: p19, warnings: u18.warnings };
    }
    let { args: t9, type: s9, warnings: i21 } = this.getArguments(e7), { responseHeaders: a11, value: n17 } = await he6({ abortSignal: e7.abortSignal, body: t9, failedResponseHandler: w18, fetch: this.config.fetch, headers: _12(this.config.headers(), e7.headers), successfulResponseHandler: $12(G12), url: `${this.config.baseURL}/chat` }), { messages: l16, ...r39 } = t9, d19 = e7.mode.type === "regular" ? e7.mode.tools : e7.mode.type === "object-tool" ? [e7.mode.tool] : void 0, f14 = new H13({ tools: d19, type: s9 }), g16 = "other", m26 = { completionTokens: Number.NaN, promptTokens: Number.NaN }, { experimentalStreamTools: h22 = true } = this.settings;
    return { rawCall: { rawPrompt: l16, rawSettings: r39 }, rawResponse: { headers: a11 }, request: { body: JSON.stringify(t9) }, stream: n17.pipeThrough(new TransformStream({ async flush(u18) {
      u18.enqueue({ finishReason: g16, type: "finish", usage: m26 });
    }, async transform(u18, p19) {
      if (!u18.success) {
        p19.enqueue({ error: u18.error, type: "error" });
        return;
      }
      let c18 = u18.value;
      if (c18.done) {
        g16 = f14.finish({ controller: p19 }), m26 = { completionTokens: c18.eval_count, promptTokens: c18.prompt_eval_count || 0 };
        return;
      }
      h22 && f14.parse({ controller: p19, delta: c18.message.content }) || c18.message.content !== null && p19.enqueue({ textDelta: c18.message.content, type: "text-delta" });
    } })), warnings: i21 };
  }
};
var D11 = be2.object({ created_at: be2.string(), done: be2.literal(true), done_reason: be2.string().optional().nullable(), eval_count: be2.number(), eval_duration: be2.number(), load_duration: be2.number().optional(), message: be2.object({ content: be2.string(), role: be2.string(), tool_calls: be2.array(be2.object({ function: be2.object({ arguments: be2.record(be2.any()), name: be2.string() }), id: be2.string().optional() })).optional().nullable() }), model: be2.string(), prompt_eval_count: be2.number().optional(), prompt_eval_duration: be2.number().optional(), total_duration: be2.number() });
var G12 = be2.discriminatedUnion("done", [be2.object({ created_at: be2.string(), done: be2.literal(false), message: be2.object({ content: be2.string(), role: be2.string() }), model: be2.string() }), be2.object({ created_at: be2.string(), done: be2.literal(true), eval_count: be2.number(), eval_duration: be2.number(), load_duration: be2.number().optional(), model: be2.string(), prompt_eval_count: be2.number().optional(), prompt_eval_duration: be2.number().optional(), total_duration: be2.number() })]);
var K13 = class {
  constructor(e7, t9, s9) {
    this.specificationVersion = "v1", this.modelId = e7, this.settings = t9, this.config = s9;
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
  async doEmbed({ abortSignal: e7, values: t9 }) {
    if (t9.length > this.maxEmbeddingsPerCall) throw new Mr({ maxEmbeddingsPerCall: this.maxEmbeddingsPerCall, modelId: this.modelId, provider: this.provider, values: t9 });
    let { responseHeaders: s9, value: i21 } = await he6({ abortSignal: e7, body: { input: t9, model: this.modelId }, failedResponseHandler: w18, fetch: this.config.fetch, headers: this.config.headers(), successfulResponseHandler: be6(Z10), url: `${this.config.baseURL}/embed` });
    return { embeddings: i21.embeddings, rawResponse: { headers: s9 }, usage: i21.prompt_eval_count ? { tokens: i21.prompt_eval_count } : void 0 };
  }
};
var Z10 = be2.object({ embeddings: be2.array(be2.array(be2.number())), prompt_eval_count: be2.number().nullable() });
function Q10(e7 = {}) {
  var t9;
  let s9 = (t9 = Pe6(e7.baseURL)) != null ? t9 : "http://127.0.0.1:11434/api", i21 = () => ({ ...e7.headers }), a11 = (r39, d19 = {}) => new F12(r39, d19, { baseURL: s9, fetch: e7.fetch, headers: i21, provider: "ollama.chat" }), n17 = (r39, d19 = {}) => new K13(r39, d19, { baseURL: s9, fetch: e7.fetch, headers: i21, provider: "ollama.embedding" }), l16 = function(r39, d19) {
    if (new.target) throw new Error("The Ollama model function cannot be called with the new keyword.");
    return a11(r39, d19);
  };
  return l16.chat = a11, l16.embedding = n17, l16.languageModel = a11, l16.textEmbedding = n17, l16.textEmbeddingModel = n17, l16;
}
var pe7 = Q10();

// main.js
var model = pe7("deepseek-r1:7b");
var getWeatherTool = tool({
  name: "get_weather",
  description: "Get the weather for a given city",
  parameters: be.object({ city: be.string() }),
  async execute({ city }) {
    return `The weather in ${city} is sunny`;
  }
});
var agent = new Agent({
  name: "Weather agent",
  instructions: "You provide weather information.",
  tools: [getWeatherTool],
  model
});
var stream = await run(agent, "What is the weather in San Francisco?", {
  stream: true
});
for await (const text of stream.toTextStream()) {
  process.stdout.write(text);
}
console.log();
