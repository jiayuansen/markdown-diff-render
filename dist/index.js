(function(){ try {var elementStyle = document.createElement('style'); elementStyle.appendChild(document.createTextNode("/*!\n  Theme: GitHub Dark\n  Description: Dark theme as seen on github.com\n  Author: github.com\n  Maintainer: @Hirse\n  Updated: 2021-05-15\n\n  Outdated base version: https://github.com/primer/github-syntax-dark\n  Current colors taken from GitHub's CSS\n*/.hljs{color:#c9d1d9;background:#0d1117}.hljs-doctag,.hljs-keyword,.hljs-meta .hljs-keyword,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_{color:#ff7b72}.hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_{color:#d2a8ff}.hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-variable,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id{color:#79c0ff}.hljs-regexp,.hljs-string,.hljs-meta .hljs-string{color:#a5d6ff}.hljs-built_in,.hljs-symbol{color:#ffa657}.hljs-comment,.hljs-code,.hljs-formula{color:#8b949e}.hljs-name,.hljs-quote,.hljs-selector-tag,.hljs-selector-pseudo{color:#7ee787}.hljs-subst{color:#c9d1d9}.hljs-section{color:#1f6feb;font-weight:700}.hljs-bullet{color:#f2cc60}.hljs-emphasis{color:#c9d1d9;font-style:italic}.hljs-strong{color:#c9d1d9;font-weight:700}.hljs-addition{color:#aff5b4;background-color:#033a16}.hljs-deletion{color:#ffdcd7;background-color:#67060c}pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}/*!\n  Theme: GitHub\n  Description: Light theme as seen on github.com\n  Author: github.com\n  Maintainer: @Hirse\n  Updated: 2021-05-15\n\n  Outdated base version: https://github.com/primer/github-syntax-light\n  Current colors taken from GitHub's CSS\n*/.hljs{color:#24292e;background:#fff}.hljs-doctag,.hljs-keyword,.hljs-meta .hljs-keyword,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_{color:#d73a49}.hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_{color:#6f42c1}.hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-variable,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id{color:#005cc5}.hljs-regexp,.hljs-string,.hljs-meta .hljs-string{color:#032f62}.hljs-built_in,.hljs-symbol{color:#e36209}.hljs-comment,.hljs-code,.hljs-formula{color:#6a737d}.hljs-name,.hljs-quote,.hljs-selector-tag,.hljs-selector-pseudo{color:#22863a}.hljs-subst{color:#24292e}.hljs-section{color:#005cc5;font-weight:700}.hljs-bullet{color:#735c0f}.hljs-emphasis{color:#24292e;font-style:italic}.hljs-strong{color:#24292e;font-weight:700}.hljs-addition{color:#22863a;background-color:#f0fff4}.hljs-deletion{color:#b31d28;background-color:#ffeef0}")); document.head.appendChild(elementStyle);} catch(e) {console.error('vite-plugin-css-injected-by-js', e);} })();var xo = Object.defineProperty;
var wo = (e, t, n) => t in e ? xo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Cn = (e, t, n) => wo(e, typeof t != "symbol" ? t + "" : t, n);
function Lr(e) {
  if (e)
    throw e;
}
function lr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var In, Br;
function So() {
  if (Br) return In;
  Br = 1;
  var e = Object.prototype.hasOwnProperty, t = Object.prototype.toString, n = Object.defineProperty, r = Object.getOwnPropertyDescriptor, i = function(c) {
    return typeof Array.isArray == "function" ? Array.isArray(c) : t.call(c) === "[object Array]";
  }, o = function(c) {
    if (!c || t.call(c) !== "[object Object]")
      return !1;
    var d = e.call(c, "constructor"), u = c.constructor && c.constructor.prototype && e.call(c.constructor.prototype, "isPrototypeOf");
    if (c.constructor && !d && !u)
      return !1;
    var p;
    for (p in c)
      ;
    return typeof p > "u" || e.call(c, p);
  }, a = function(c, d) {
    n && d.name === "__proto__" ? n(c, d.name, {
      enumerable: !0,
      configurable: !0,
      value: d.newValue,
      writable: !0
    }) : c[d.name] = d.newValue;
  }, s = function(c, d) {
    if (d === "__proto__")
      if (e.call(c, d)) {
        if (r)
          return r(c, d).value;
      } else return;
    return c[d];
  };
  return In = function l() {
    var c, d, u, p, f, g, m = arguments[0], y = 1, h = arguments.length, S = !1;
    for (typeof m == "boolean" && (S = m, m = arguments[1] || {}, y = 2), (m == null || typeof m != "object" && typeof m != "function") && (m = {}); y < h; ++y)
      if (c = arguments[y], c != null)
        for (d in c)
          u = s(m, d), p = s(c, d), m !== p && (S && p && (o(p) || (f = i(p))) ? (f ? (f = !1, g = u && i(u) ? u : []) : g = u && o(u) ? u : {}, a(m, { name: d, newValue: l(S, g, p) })) : typeof p < "u" && a(m, { name: d, newValue: p }));
    return m;
  }, In;
}
var No = So();
const On = /* @__PURE__ */ lr(No);
function Xn(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function To() {
  const e = [], t = { run: n, use: r };
  return t;
  function n(...i) {
    let o = -1;
    const a = i.pop();
    if (typeof a != "function")
      throw new TypeError("Expected function as last argument, not " + a);
    s(null, ...i);
    function s(l, ...c) {
      const d = e[++o];
      let u = -1;
      if (l) {
        a(l);
        return;
      }
      for (; ++u < i.length; )
        (c[u] === null || c[u] === void 0) && (c[u] = i[u]);
      i = c, d ? Ao(d, s)(...c) : a(null, ...c);
    }
  }
  function r(i) {
    if (typeof i != "function")
      throw new TypeError(
        "Expected `middelware` to be a function, not " + i
      );
    return e.push(i), t;
  }
}
function Ao(e, t) {
  let n;
  return r;
  function r(...a) {
    const s = e.length > a.length;
    let l;
    s && a.push(i);
    try {
      l = e.apply(this, a);
    } catch (c) {
      const d = (
        /** @type {Error} */
        c
      );
      if (s && n)
        throw d;
      return i(d);
    }
    s || (l && l.then && typeof l.then == "function" ? l.then(o, i) : l instanceof Error ? i(l) : o(l));
  }
  function i(a, ...s) {
    n || (n = !0, t(a, ...s));
  }
  function o(a) {
    i(null, a);
  }
}
function Mt(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? Pr(e.position) : "start" in e || "end" in e ? Pr(e) : "line" in e || "column" in e ? Qn(e) : "";
}
function Qn(e) {
  return Fr(e && e.line) + ":" + Fr(e && e.column);
}
function Pr(e) {
  return Qn(e && e.start) + "-" + Qn(e && e.end);
}
function Fr(e) {
  return e && typeof e == "number" ? e : 1;
}
class Ie extends Error {
  /**
   * Create a message for `reason`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {Options | null | undefined} [options]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | Options | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns
   *   Instance of `VFileMessage`.
   */
  // eslint-disable-next-line complexity
  constructor(t, n, r) {
    super(), typeof n == "string" && (r = n, n = void 0);
    let i = "", o = {}, a = !1;
    if (n && ("line" in n && "column" in n ? o = { place: n } : "start" in n && "end" in n ? o = { place: n } : "type" in n ? o = {
      ancestors: [n],
      place: n.position
    } : o = { ...n }), typeof t == "string" ? i = t : !o.cause && t && (a = !0, i = t.message, o.cause = t), !o.ruleId && !o.source && typeof r == "string") {
      const l = r.indexOf(":");
      l === -1 ? o.ruleId = r : (o.source = r.slice(0, l), o.ruleId = r.slice(l + 1));
    }
    if (!o.place && o.ancestors && o.ancestors) {
      const l = o.ancestors[o.ancestors.length - 1];
      l && (o.place = l.position);
    }
    const s = o.place && "start" in o.place ? o.place.start : o.place;
    this.ancestors = o.ancestors || void 0, this.cause = o.cause || void 0, this.column = s ? s.column : void 0, this.fatal = void 0, this.file, this.message = i, this.line = s ? s.line : void 0, this.name = Mt(o.place) || "1:1", this.place = o.place || void 0, this.reason = this.message, this.ruleId = o.ruleId || void 0, this.source = o.source || void 0, this.stack = a && o.cause && typeof o.cause.stack == "string" ? o.cause.stack : "", this.actual, this.expected, this.note, this.url;
  }
}
Ie.prototype.file = "";
Ie.prototype.name = "";
Ie.prototype.reason = "";
Ie.prototype.message = "";
Ie.prototype.stack = "";
Ie.prototype.column = void 0;
Ie.prototype.line = void 0;
Ie.prototype.ancestors = void 0;
Ie.prototype.cause = void 0;
Ie.prototype.fatal = void 0;
Ie.prototype.place = void 0;
Ie.prototype.ruleId = void 0;
Ie.prototype.source = void 0;
const Ke = { basename: Co, dirname: Io, extname: Oo, join: vo, sep: "/" };
function Co(e, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  Ft(e);
  let n = 0, r = -1, i = e.length, o;
  if (t === void 0 || t.length === 0 || t.length > e.length) {
    for (; i--; )
      if (e.codePointAt(i) === 47) {
        if (o) {
          n = i + 1;
          break;
        }
      } else r < 0 && (o = !0, r = i + 1);
    return r < 0 ? "" : e.slice(n, r);
  }
  if (t === e)
    return "";
  let a = -1, s = t.length - 1;
  for (; i--; )
    if (e.codePointAt(i) === 47) {
      if (o) {
        n = i + 1;
        break;
      }
    } else
      a < 0 && (o = !0, a = i + 1), s > -1 && (e.codePointAt(i) === t.codePointAt(s--) ? s < 0 && (r = i) : (s = -1, r = a));
  return n === r ? r = a : r < 0 && (r = e.length), e.slice(n, r);
}
function Io(e) {
  if (Ft(e), e.length === 0)
    return ".";
  let t = -1, n = e.length, r;
  for (; --n; )
    if (e.codePointAt(n) === 47) {
      if (r) {
        t = n;
        break;
      }
    } else r || (r = !0);
  return t < 0 ? e.codePointAt(0) === 47 ? "/" : "." : t === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, t);
}
function Oo(e) {
  Ft(e);
  let t = e.length, n = -1, r = 0, i = -1, o = 0, a;
  for (; t--; ) {
    const s = e.codePointAt(t);
    if (s === 47) {
      if (a) {
        r = t + 1;
        break;
      }
      continue;
    }
    n < 0 && (a = !0, n = t + 1), s === 46 ? i < 0 ? i = t : o !== 1 && (o = 1) : i > -1 && (o = -1);
  }
  return i < 0 || n < 0 || // We saw a non-dot character immediately before the dot.
  o === 0 || // The (right-most) trimmed path component is exactly `..`.
  o === 1 && i === n - 1 && i === r + 1 ? "" : e.slice(i, n);
}
function vo(...e) {
  let t = -1, n;
  for (; ++t < e.length; )
    Ft(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
  return n === void 0 ? "." : Ro(n);
}
function Ro(e) {
  Ft(e);
  const t = e.codePointAt(0) === 47;
  let n = Mo(e, !t);
  return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function Mo(e, t) {
  let n = "", r = 0, i = -1, o = 0, a = -1, s, l;
  for (; ++a <= e.length; ) {
    if (a < e.length)
      s = e.codePointAt(a);
    else {
      if (s === 47)
        break;
      s = 47;
    }
    if (s === 47) {
      if (!(i === a - 1 || o === 1)) if (i !== a - 1 && o === 2) {
        if (n.length < 2 || r !== 2 || n.codePointAt(n.length - 1) !== 46 || n.codePointAt(n.length - 2) !== 46) {
          if (n.length > 2) {
            if (l = n.lastIndexOf("/"), l !== n.length - 1) {
              l < 0 ? (n = "", r = 0) : (n = n.slice(0, l), r = n.length - 1 - n.lastIndexOf("/")), i = a, o = 0;
              continue;
            }
          } else if (n.length > 0) {
            n = "", r = 0, i = a, o = 0;
            continue;
          }
        }
        t && (n = n.length > 0 ? n + "/.." : "..", r = 2);
      } else
        n.length > 0 ? n += "/" + e.slice(i + 1, a) : n = e.slice(i + 1, a), r = a - i - 1;
      i = a, o = 0;
    } else s === 46 && o > -1 ? o++ : o = -1;
  }
  return n;
}
function Ft(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const Do = { cwd: Lo };
function Lo() {
  return "/";
}
function Jn(e) {
  return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && // @ts-expect-error: indexing is fine.
  e.auth === void 0);
}
function Bo(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!Jn(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw t.code = "ERR_INVALID_ARG_TYPE", t;
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw t.code = "ERR_INVALID_URL_SCHEME", t;
  }
  return Po(e);
}
function Po(e) {
  if (e.hostname !== "") {
    const r = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    throw r.code = "ERR_INVALID_FILE_URL_HOST", r;
  }
  const t = e.pathname;
  let n = -1;
  for (; ++n < t.length; )
    if (t.codePointAt(n) === 37 && t.codePointAt(n + 1) === 50) {
      const r = t.codePointAt(n + 2);
      if (r === 70 || r === 102) {
        const i = new TypeError(
          "File URL path must not include encoded / characters"
        );
        throw i.code = "ERR_INVALID_FILE_URL_PATH", i;
      }
    }
  return decodeURIComponent(t);
}
const vn = (
  /** @type {const} */
  [
    "history",
    "path",
    "basename",
    "stem",
    "extname",
    "dirname"
  ]
);
class Fo {
  /**
   * Create a new virtual file.
   *
   * `options` is treated as:
   *
   * *   `string` or `Uint8Array` — `{value: options}`
   * *   `URL` — `{path: options}`
   * *   `VFile` — shallow copies its data over to the new file
   * *   `object` — all fields are shallow copied over to the new file
   *
   * Path related fields are set in the following order (least specific to
   * most specific): `history`, `path`, `basename`, `stem`, `extname`,
   * `dirname`.
   *
   * You cannot set `dirname` or `extname` without setting either `history`,
   * `path`, `basename`, or `stem` too.
   *
   * @param {Compatible | null | undefined} [value]
   *   File value.
   * @returns
   *   New instance.
   */
  constructor(t) {
    let n;
    t ? Jn(t) ? n = { path: t } : typeof t == "string" || zo(t) ? n = { value: t } : n = t : n = {}, this.cwd = "cwd" in n ? "" : Do.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let r = -1;
    for (; ++r < vn.length; ) {
      const o = vn[r];
      o in n && n[o] !== void 0 && n[o] !== null && (this[o] = o === "history" ? [...n[o]] : n[o]);
    }
    let i;
    for (i in n)
      vn.includes(i) || (this[i] = n[i]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? Ke.basename(this.path) : void 0;
  }
  /**
   * Set basename (including extname) (`'index.min.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} basename
   *   Basename.
   * @returns {undefined}
   *   Nothing.
   */
  set basename(t) {
    Mn(t, "basename"), Rn(t, "basename"), this.path = Ke.join(this.dirname || "", t);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? Ke.dirname(this.path) : void 0;
  }
  /**
   * Set the parent path (example: `'~'`).
   *
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} dirname
   *   Dirname.
   * @returns {undefined}
   *   Nothing.
   */
  set dirname(t) {
    zr(this.basename, "dirname"), this.path = Ke.join(t || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? Ke.extname(this.path) : void 0;
  }
  /**
   * Set the extname (including dot) (example: `'.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} extname
   *   Extname.
   * @returns {undefined}
   *   Nothing.
   */
  set extname(t) {
    if (Rn(t, "extname"), zr(this.dirname, "extname"), t) {
      if (t.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (t.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = Ke.join(this.dirname, this.stem + (t || ""));
  }
  /**
   * Get the full path (example: `'~/index.min.js'`).
   *
   * @returns {string}
   *   Path.
   */
  get path() {
    return this.history[this.history.length - 1];
  }
  /**
   * Set the full path (example: `'~/index.min.js'`).
   *
   * Cannot be nullified.
   * You can set a file URL (a `URL` object with a `file:` protocol) which will
   * be turned into a path with `url.fileURLToPath`.
   *
   * @param {URL | string} path
   *   Path.
   * @returns {undefined}
   *   Nothing.
   */
  set path(t) {
    Jn(t) && (t = Bo(t)), Mn(t, "path"), this.path !== t && this.history.push(t);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? Ke.basename(this.path, this.extname) : void 0;
  }
  /**
   * Set the stem (basename w/o extname) (example: `'index.min'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} stem
   *   Stem.
   * @returns {undefined}
   *   Nothing.
   */
  set stem(t) {
    Mn(t, "stem"), Rn(t, "stem"), this.path = Ke.join(this.dirname || "", t + (this.extname || ""));
  }
  // Normal prototypal methods.
  /**
   * Create a fatal message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `true` (error; file not usable)
   * and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {never}
   *   Never.
   * @throws {VFileMessage}
   *   Message.
   */
  fail(t, n, r) {
    const i = this.message(t, n, r);
    throw i.fatal = !0, i;
  }
  /**
   * Create an info message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `undefined` (info; change
   * likely not needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  info(t, n, r) {
    const i = this.message(t, n, r);
    return i.fatal = void 0, i;
  }
  /**
   * Create a message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `false` (warning; change may be
   * needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  message(t, n, r) {
    const i = new Ie(
      // @ts-expect-error: the overloads are fine.
      t,
      n,
      r
    );
    return this.path && (i.name = this.path + ":" + i.name, i.file = this.path), i.fatal = !1, this.messages.push(i), i;
  }
  /**
   * Serialize the file.
   *
   * > **Note**: which encodings are supported depends on the engine.
   * > For info on Node.js, see:
   * > <https://nodejs.org/api/util.html#whatwg-supported-encodings>.
   *
   * @param {string | null | undefined} [encoding='utf8']
   *   Character encoding to understand `value` as when it’s a `Uint8Array`
   *   (default: `'utf-8'`).
   * @returns {string}
   *   Serialized file.
   */
  toString(t) {
    return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(t || void 0).decode(this.value);
  }
}
function Rn(e, t) {
  if (e && e.includes(Ke.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + Ke.sep + "`"
    );
}
function Mn(e, t) {
  if (!e)
    throw new Error("`" + t + "` cannot be empty");
}
function zr(e, t) {
  if (!e)
    throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function zo(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const Uo = (
  /**
   * @type {new <Parameters extends Array<unknown>, Result>(property: string | symbol) => (...parameters: Parameters) => Result}
   */
  /** @type {unknown} */
  /**
   * @this {Function}
   * @param {string | symbol} property
   * @returns {(...parameters: Array<unknown>) => unknown}
   */
  function(e) {
    const r = (
      /** @type {Record<string | symbol, Function>} */
      // Prototypes do exist.
      // type-coverage:ignore-next-line
      this.constructor.prototype
    ), i = r[e], o = function() {
      return i.apply(o, arguments);
    };
    return Object.setPrototypeOf(o, r), o;
  }
), $o = {}.hasOwnProperty;
class cr extends Uo {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = To();
  }
  /**
   * Copy a processor.
   *
   * @deprecated
   *   This is a private internal method and should not be used.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   New *unfrozen* processor ({@linkcode Processor}) that is
   *   configured to work the same as its ancestor.
   *   When the descendant processor is configured in the future it does not
   *   affect the ancestral processor.
   */
  copy() {
    const t = (
      /** @type {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>} */
      new cr()
    );
    let n = -1;
    for (; ++n < this.attachers.length; ) {
      const r = this.attachers[n];
      t.use(...r);
    }
    return t.data(On(!0, {}, this.namespace)), t;
  }
  /**
   * Configure the processor with info available to all plugins.
   * Information is stored in an object.
   *
   * Typically, options can be given to a specific plugin, but sometimes it
   * makes sense to have information shared with several plugins.
   * For example, a list of HTML elements that are self-closing, which is
   * needed during all phases.
   *
   * > **Note**: setting information cannot occur on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * > **Note**: to register custom data in TypeScript, augment the
   * > {@linkcode Data} interface.
   *
   * @example
   *   This example show how to get and set info:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   const processor = unified().data('alpha', 'bravo')
   *
   *   processor.data('alpha') // => 'bravo'
   *
   *   processor.data() // => {alpha: 'bravo'}
   *
   *   processor.data({charlie: 'delta'})
   *
   *   processor.data() // => {charlie: 'delta'}
   *   ```
   *
   * @template {keyof Data} Key
   *
   * @overload
   * @returns {Data}
   *
   * @overload
   * @param {Data} dataset
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Key} key
   * @returns {Data[Key]}
   *
   * @overload
   * @param {Key} key
   * @param {Data[Key]} value
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @param {Data | Key} [key]
   *   Key to get or set, or entire dataset to set, or nothing to get the
   *   entire dataset (optional).
   * @param {Data[Key]} [value]
   *   Value to set (optional).
   * @returns {unknown}
   *   The current processor when setting, the value at `key` when getting, or
   *   the entire dataset when getting without key.
   */
  data(t, n) {
    return typeof t == "string" ? arguments.length === 2 ? (Bn("data", this.frozen), this.namespace[t] = n, this) : $o.call(this.namespace, t) && this.namespace[t] || void 0 : t ? (Bn("data", this.frozen), this.namespace = t, this) : this.namespace;
  }
  /**
   * Freeze a processor.
   *
   * Frozen processors are meant to be extended and not to be configured
   * directly.
   *
   * When a processor is frozen it cannot be unfrozen.
   * New processors working the same way can be created by calling the
   * processor.
   *
   * It’s possible to freeze processors explicitly by calling `.freeze()`.
   * Processors freeze automatically when `.parse()`, `.run()`, `.runSync()`,
   * `.stringify()`, `.process()`, or `.processSync()` are called.
   *
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   The current processor.
   */
  freeze() {
    if (this.frozen)
      return this;
    const t = (
      /** @type {Processor} */
      /** @type {unknown} */
      this
    );
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [n, ...r] = this.attachers[this.freezeIndex];
      if (r[0] === !1)
        continue;
      r[0] === !0 && (r[0] = void 0);
      const i = n.call(t, ...r);
      typeof i == "function" && this.transformers.use(i);
    }
    return this.frozen = !0, this.freezeIndex = Number.POSITIVE_INFINITY, this;
  }
  /**
   * Parse text to a syntax tree.
   *
   * > **Note**: `parse` freezes the processor if not already *frozen*.
   *
   * > **Note**: `parse` performs the parse phase, not the run phase or other
   * > phases.
   *
   * @param {Compatible | undefined} [file]
   *   file to parse (optional); typically `string` or `VFile`; any value
   *   accepted as `x` in `new VFile(x)`.
   * @returns {ParseTree extends undefined ? Node : ParseTree}
   *   Syntax tree representing `file`.
   */
  parse(t) {
    this.freeze();
    const n = Vt(t), r = this.parser || this.Parser;
    return Dn("parse", r), r(String(n), n);
  }
  /**
   * Process the given file as configured on the processor.
   *
   * > **Note**: `process` freezes the processor if not already *frozen*.
   *
   * > **Note**: `process` performs the parse, run, and stringify phases.
   *
   * @overload
   * @param {Compatible | undefined} file
   * @param {ProcessCallback<VFileWithOutput<CompileResult>>} done
   * @returns {undefined}
   *
   * @overload
   * @param {Compatible | undefined} [file]
   * @returns {Promise<VFileWithOutput<CompileResult>>}
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`]; any value accepted as
   *   `x` in `new VFile(x)`.
   * @param {ProcessCallback<VFileWithOutput<CompileResult>> | undefined} [done]
   *   Callback (optional).
   * @returns {Promise<VFile> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise a promise, rejected with a fatal error or resolved with the
   *   processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  process(t, n) {
    const r = this;
    return this.freeze(), Dn("process", this.parser || this.Parser), Ln("process", this.compiler || this.Compiler), n ? i(void 0, n) : new Promise(i);
    function i(o, a) {
      const s = Vt(t), l = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        r.parse(s)
      );
      r.run(l, s, function(d, u, p) {
        if (d || !u || !p)
          return c(d);
        const f = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          u
        ), g = r.stringify(f, p);
        Go(g) ? p.value = g : p.result = g, c(
          d,
          /** @type {VFileWithOutput<CompileResult>} */
          p
        );
      });
      function c(d, u) {
        d || !u ? a(d) : o ? o(u) : n(void 0, u);
      }
    }
  }
  /**
   * Process the given file as configured on the processor.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `processSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `processSync` performs the parse, run, and stringify phases.
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`; any value accepted as
   *   `x` in `new VFile(x)`.
   * @returns {VFileWithOutput<CompileResult>}
   *   The processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  processSync(t) {
    let n = !1, r;
    return this.freeze(), Dn("processSync", this.parser || this.Parser), Ln("processSync", this.compiler || this.Compiler), this.process(t, i), Hr("processSync", "process", n), r;
    function i(o, a) {
      n = !0, Lr(o), r = a;
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * > **Note**: `run` freezes the processor if not already *frozen*.
   *
   * > **Note**: `run` performs the run phase, not other phases.
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} file
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} [file]
   * @returns {Promise<TailTree extends undefined ? Node : TailTree>}
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {(
   *   RunCallback<TailTree extends undefined ? Node : TailTree> |
   *   Compatible
   * )} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} [done]
   *   Callback (optional).
   * @returns {Promise<TailTree extends undefined ? Node : TailTree> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise, a promise rejected with a fatal error or resolved with the
   *   transformed tree.
   */
  run(t, n, r) {
    $r(t), this.freeze();
    const i = this.transformers;
    return !r && typeof n == "function" && (r = n, n = void 0), r ? o(void 0, r) : new Promise(o);
    function o(a, s) {
      const l = Vt(n);
      i.run(t, l, c);
      function c(d, u, p) {
        const f = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          u || t
        );
        d ? s(d) : a ? a(f) : r(void 0, f, p);
      }
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `runSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `runSync` performs the run phase, not other phases.
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {TailTree extends undefined ? Node : TailTree}
   *   Transformed tree.
   */
  runSync(t, n) {
    let r = !1, i;
    return this.run(t, n, o), Hr("runSync", "run", r), i;
    function o(a, s) {
      Lr(a), i = s, r = !0;
    }
  }
  /**
   * Compile a syntax tree.
   *
   * > **Note**: `stringify` freezes the processor if not already *frozen*.
   *
   * > **Note**: `stringify` performs the stringify phase, not the run phase
   * > or other phases.
   *
   * @param {CompileTree extends undefined ? Node : CompileTree} tree
   *   Tree to compile.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {CompileResult extends undefined ? Value : CompileResult}
   *   Textual representation of the tree (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most compilers
   *   > return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  stringify(t, n) {
    this.freeze();
    const r = Vt(n), i = this.compiler || this.Compiler;
    return Ln("stringify", i), $r(t), i(t, r);
  }
  /**
   * Configure the processor to use a plugin, a list of usable values, or a
   * preset.
   *
   * If the processor is already using a plugin, the previous plugin
   * configuration is changed based on the options that are passed in.
   * In other words, the plugin is not added a second time.
   *
   * > **Note**: `use` cannot be called on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * @example
   *   There are many ways to pass plugins to `.use()`.
   *   This example gives an overview:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   unified()
   *     // Plugin with options:
   *     .use(pluginA, {x: true, y: true})
   *     // Passing the same plugin again merges configuration (to `{x: true, y: false, z: true}`):
   *     .use(pluginA, {y: false, z: true})
   *     // Plugins:
   *     .use([pluginB, pluginC])
   *     // Two plugins, the second with options:
   *     .use([pluginD, [pluginE, {}]])
   *     // Preset with plugins and settings:
   *     .use({plugins: [pluginF, [pluginG, {}]], settings: {position: false}})
   *     // Settings only:
   *     .use({settings: {position: false}})
   *   ```
   *
   * @template {Array<unknown>} [Parameters=[]]
   * @template {Node | string | undefined} [Input=undefined]
   * @template [Output=Input]
   *
   * @overload
   * @param {Preset | null | undefined} [preset]
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {PluggableList} list
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Plugin<Parameters, Input, Output>} plugin
   * @param {...(Parameters | [boolean])} parameters
   * @returns {UsePlugin<ParseTree, HeadTree, TailTree, CompileTree, CompileResult, Input, Output>}
   *
   * @param {PluggableList | Plugin | Preset | null | undefined} value
   *   Usable value.
   * @param {...unknown} parameters
   *   Parameters, when a plugin is given as a usable value.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   Current processor.
   */
  use(t, ...n) {
    const r = this.attachers, i = this.namespace;
    if (Bn("use", this.frozen), t != null) if (typeof t == "function")
      l(t, n);
    else if (typeof t == "object")
      Array.isArray(t) ? s(t) : a(t);
    else
      throw new TypeError("Expected usable value, not `" + t + "`");
    return this;
    function o(c) {
      if (typeof c == "function")
        l(c, []);
      else if (typeof c == "object")
        if (Array.isArray(c)) {
          const [d, ...u] = (
            /** @type {PluginTuple<Array<unknown>>} */
            c
          );
          l(d, u);
        } else
          a(c);
      else
        throw new TypeError("Expected usable value, not `" + c + "`");
    }
    function a(c) {
      if (!("plugins" in c) && !("settings" in c))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      s(c.plugins), c.settings && (i.settings = On(!0, i.settings, c.settings));
    }
    function s(c) {
      let d = -1;
      if (c != null) if (Array.isArray(c))
        for (; ++d < c.length; ) {
          const u = c[d];
          o(u);
        }
      else
        throw new TypeError("Expected a list of plugins, not `" + c + "`");
    }
    function l(c, d) {
      let u = -1, p = -1;
      for (; ++u < r.length; )
        if (r[u][0] === c) {
          p = u;
          break;
        }
      if (p === -1)
        r.push([c, ...d]);
      else if (d.length > 0) {
        let [f, ...g] = d;
        const m = r[p][1];
        Xn(m) && Xn(f) && (f = On(!0, m, f)), r[p] = [c, f, ...g];
      }
    }
  }
}
const Ur = new cr().freeze();
function Dn(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `parser`");
}
function Ln(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function Bn(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function $r(e) {
  if (!Xn(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function Hr(e, t, n) {
  if (!n)
    throw new Error(
      "`" + e + "` finished async. Use `" + t + "` instead"
    );
}
function Vt(e) {
  return Ho(e) ? e : new Fo(e);
}
function Ho(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function Go(e) {
  return typeof e == "string" || Ko(e);
}
function Ko(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const qo = {};
function ur(e, t) {
  const n = qo, r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, i = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return Fi(e, r, i);
}
function Fi(e, t, n) {
  if (Wo(e)) {
    if ("value" in e)
      return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return Gr(e.children, t, n);
  }
  return Array.isArray(e) ? Gr(e, t, n) : "";
}
function Gr(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; )
    r[i] = Fi(e[i], t, n);
  return r.join("");
}
function Wo(e) {
  return !!(e && typeof e == "object");
}
const Kr = document.createElement("i");
function dr(e) {
  const t = "&" + e + ";";
  Kr.innerHTML = t;
  const n = Kr.textContent;
  return (
    // @ts-expect-error: TypeScript is wrong that `textContent` on elements can
    // yield `null`.
    n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n
  );
}
function Le(e, t, n, r) {
  const i = e.length;
  let o = 0, a;
  if (t < 0 ? t = -t > i ? 0 : i + t : t = t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4)
    a = Array.from(r), a.unshift(t, n), e.splice(...a);
  else
    for (n && e.splice(t, n); o < r.length; )
      a = r.slice(o, o + 1e4), a.unshift(t, 0), e.splice(...a), o += 1e4, t += 1e4;
}
function Pe(e, t) {
  return e.length > 0 ? (Le(e, e.length, 0, t), e) : t;
}
const qr = {}.hasOwnProperty;
function zi(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; )
    Yo(t, e[n]);
  return t;
}
function Yo(e, t) {
  let n;
  for (n in t) {
    const i = (qr.call(e, n) ? e[n] : void 0) || (e[n] = {}), o = t[n];
    let a;
    if (o)
      for (a in o) {
        qr.call(i, a) || (i[a] = []);
        const s = o[a];
        Vo(
          // @ts-expect-error Looks like a list.
          i[a],
          Array.isArray(s) ? s : s ? [s] : []
        );
      }
  }
}
function Vo(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; )
    (t[n].add === "after" ? e : r).push(t[n]);
  Le(e, 0, 0, r);
}
function Ui(e, t) {
  const n = Number.parseInt(e, t);
  return (
    // C0 except for HT, LF, FF, CR, space.
    n < 9 || n === 11 || n > 13 && n < 32 || // Control character (DEL) of C0, and C1 controls.
    n > 126 && n < 160 || // Lone high surrogates and low surrogates.
    n > 55295 && n < 57344 || // Noncharacters.
    n > 64975 && n < 65008 || /* eslint-disable no-bitwise */
    (n & 65535) === 65535 || (n & 65535) === 65534 || /* eslint-enable no-bitwise */
    // Out of range
    n > 1114111 ? "�" : String.fromCodePoint(n)
  );
}
function Ue(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const Te = st(/[A-Za-z]/), xe = st(/[\dA-Za-z]/), Zo = st(/[#-'*+\--9=?A-Z^-~]/);
function cn(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const jn = st(/\d/), Xo = st(/[\dA-Fa-f]/), Qo = st(/[!-/:-@[-`{-~]/);
function H(e) {
  return e !== null && e < -2;
}
function de(e) {
  return e !== null && (e < 0 || e === 32);
}
function Q(e) {
  return e === -2 || e === -1 || e === 32;
}
const mn = st(new RegExp("\\p{P}|\\p{S}", "u")), pt = st(/\s/);
function st(e) {
  return t;
  function t(n) {
    return n !== null && n > -1 && e.test(String.fromCharCode(n));
  }
}
function wt(e) {
  const t = [];
  let n = -1, r = 0, i = 0;
  for (; ++n < e.length; ) {
    const o = e.charCodeAt(n);
    let a = "";
    if (o === 37 && xe(e.charCodeAt(n + 1)) && xe(e.charCodeAt(n + 2)))
      i = 2;
    else if (o < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o)) || (a = String.fromCharCode(o));
    else if (o > 55295 && o < 57344) {
      const s = e.charCodeAt(n + 1);
      o < 56320 && s > 56319 && s < 57344 ? (a = String.fromCharCode(o, s), i = 1) : a = "�";
    } else
      a = String.fromCharCode(o);
    a && (t.push(e.slice(r, n), encodeURIComponent(a)), r = n + i + 1, a = ""), i && (n += i, i = 0);
  }
  return t.join("") + e.slice(r);
}
function te(e, t, n, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let o = 0;
  return a;
  function a(l) {
    return Q(l) ? (e.enter(n), s(l)) : t(l);
  }
  function s(l) {
    return Q(l) && o++ < i ? (e.consume(l), s) : (e.exit(n), t(l));
  }
}
const Jo = {
  tokenize: jo
};
function jo(e) {
  const t = e.attempt(this.parser.constructs.contentInitial, r, i);
  let n;
  return t;
  function r(s) {
    if (s === null) {
      e.consume(s);
      return;
    }
    return e.enter("lineEnding"), e.consume(s), e.exit("lineEnding"), te(e, t, "linePrefix");
  }
  function i(s) {
    return e.enter("paragraph"), o(s);
  }
  function o(s) {
    const l = e.enter("chunkText", {
      contentType: "text",
      previous: n
    });
    return n && (n.next = l), n = l, a(s);
  }
  function a(s) {
    if (s === null) {
      e.exit("chunkText"), e.exit("paragraph"), e.consume(s);
      return;
    }
    return H(s) ? (e.consume(s), e.exit("chunkText"), o) : (e.consume(s), a);
  }
}
const es = {
  tokenize: ts
}, Wr = {
  tokenize: ns
};
function ts(e) {
  const t = this, n = [];
  let r = 0, i, o, a;
  return s;
  function s(x) {
    if (r < n.length) {
      const N = n[r];
      return t.containerState = N[1], e.attempt(N[0].continuation, l, c)(x);
    }
    return c(x);
  }
  function l(x) {
    if (r++, t.containerState._closeFlow) {
      t.containerState._closeFlow = void 0, i && S();
      const N = t.events.length;
      let I = N, k;
      for (; I--; )
        if (t.events[I][0] === "exit" && t.events[I][1].type === "chunkFlow") {
          k = t.events[I][1].end;
          break;
        }
      h(r);
      let A = N;
      for (; A < t.events.length; )
        t.events[A][1].end = {
          ...k
        }, A++;
      return Le(t.events, I + 1, 0, t.events.slice(N)), t.events.length = A, c(x);
    }
    return s(x);
  }
  function c(x) {
    if (r === n.length) {
      if (!i)
        return p(x);
      if (i.currentConstruct && i.currentConstruct.concrete)
        return g(x);
      t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
    }
    return t.containerState = {}, e.check(Wr, d, u)(x);
  }
  function d(x) {
    return i && S(), h(r), p(x);
  }
  function u(x) {
    return t.parser.lazy[t.now().line] = r !== n.length, a = t.now().offset, g(x);
  }
  function p(x) {
    return t.containerState = {}, e.attempt(Wr, f, g)(x);
  }
  function f(x) {
    return r++, n.push([t.currentConstruct, t.containerState]), p(x);
  }
  function g(x) {
    if (x === null) {
      i && S(), h(0), e.consume(x);
      return;
    }
    return i = i || t.parser.flow(t.now()), e.enter("chunkFlow", {
      _tokenizer: i,
      contentType: "flow",
      previous: o
    }), m(x);
  }
  function m(x) {
    if (x === null) {
      y(e.exit("chunkFlow"), !0), h(0), e.consume(x);
      return;
    }
    return H(x) ? (e.consume(x), y(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, s) : (e.consume(x), m);
  }
  function y(x, N) {
    const I = t.sliceStream(x);
    if (N && I.push(null), x.previous = o, o && (o.next = x), o = x, i.defineSkip(x.start), i.write(I), t.parser.lazy[x.start.line]) {
      let k = i.events.length;
      for (; k--; )
        if (
          // The token starts before the line ending…
          i.events[k][1].start.offset < a && // …and either is not ended yet…
          (!i.events[k][1].end || // …or ends after it.
          i.events[k][1].end.offset > a)
        )
          return;
      const A = t.events.length;
      let O = A, L, w;
      for (; O--; )
        if (t.events[O][0] === "exit" && t.events[O][1].type === "chunkFlow") {
          if (L) {
            w = t.events[O][1].end;
            break;
          }
          L = !0;
        }
      for (h(r), k = A; k < t.events.length; )
        t.events[k][1].end = {
          ...w
        }, k++;
      Le(t.events, O + 1, 0, t.events.slice(A)), t.events.length = k;
    }
  }
  function h(x) {
    let N = n.length;
    for (; N-- > x; ) {
      const I = n[N];
      t.containerState = I[1], I[0].exit.call(t, e);
    }
    n.length = x;
  }
  function S() {
    i.write([null]), o = void 0, i = void 0, t.containerState._closeFlow = void 0;
  }
}
function ns(e, t, n) {
  return te(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function xt(e) {
  if (e === null || de(e) || pt(e))
    return 1;
  if (mn(e))
    return 2;
}
function bn(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) {
    const o = e[i].resolveAll;
    o && !r.includes(o) && (t = o(t, n), r.push(o));
  }
  return t;
}
const er = {
  name: "attention",
  resolveAll: rs,
  tokenize: is
};
function rs(e, t) {
  let n = -1, r, i, o, a, s, l, c, d;
  for (; ++n < e.length; )
    if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
      for (r = n; r--; )
        if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && // If the markers are the same:
        t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
          if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3))
            continue;
          l = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
          const u = {
            ...e[r][1].end
          }, p = {
            ...e[n][1].start
          };
          Yr(u, -l), Yr(p, l), a = {
            type: l > 1 ? "strongSequence" : "emphasisSequence",
            start: u,
            end: {
              ...e[r][1].end
            }
          }, s = {
            type: l > 1 ? "strongSequence" : "emphasisSequence",
            start: {
              ...e[n][1].start
            },
            end: p
          }, o = {
            type: l > 1 ? "strongText" : "emphasisText",
            start: {
              ...e[r][1].end
            },
            end: {
              ...e[n][1].start
            }
          }, i = {
            type: l > 1 ? "strong" : "emphasis",
            start: {
              ...a.start
            },
            end: {
              ...s.end
            }
          }, e[r][1].end = {
            ...a.start
          }, e[n][1].start = {
            ...s.end
          }, c = [], e[r][1].end.offset - e[r][1].start.offset && (c = Pe(c, [["enter", e[r][1], t], ["exit", e[r][1], t]])), c = Pe(c, [["enter", i, t], ["enter", a, t], ["exit", a, t], ["enter", o, t]]), c = Pe(c, bn(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), c = Pe(c, [["exit", o, t], ["enter", s, t], ["exit", s, t], ["exit", i, t]]), e[n][1].end.offset - e[n][1].start.offset ? (d = 2, c = Pe(c, [["enter", e[n][1], t], ["exit", e[n][1], t]])) : d = 0, Le(e, r - 1, n - r + 3, c), n = r + c.length - d - 2;
          break;
        }
    }
  for (n = -1; ++n < e.length; )
    e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
  return e;
}
function is(e, t) {
  const n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = xt(r);
  let o;
  return a;
  function a(l) {
    return o = l, e.enter("attentionSequence"), s(l);
  }
  function s(l) {
    if (l === o)
      return e.consume(l), s;
    const c = e.exit("attentionSequence"), d = xt(l), u = !d || d === 2 && i || n.includes(l), p = !i || i === 2 && d || n.includes(r);
    return c._open = !!(o === 42 ? u : u && (i || !p)), c._close = !!(o === 42 ? p : p && (d || !u)), t(l);
  }
}
function Yr(e, t) {
  e.column += t, e.offset += t, e._bufferIndex += t;
}
const as = {
  name: "autolink",
  tokenize: os
};
function os(e, t, n) {
  let r = 0;
  return i;
  function i(f) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(f), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), o;
  }
  function o(f) {
    return Te(f) ? (e.consume(f), a) : f === 64 ? n(f) : c(f);
  }
  function a(f) {
    return f === 43 || f === 45 || f === 46 || xe(f) ? (r = 1, s(f)) : c(f);
  }
  function s(f) {
    return f === 58 ? (e.consume(f), r = 0, l) : (f === 43 || f === 45 || f === 46 || xe(f)) && r++ < 32 ? (e.consume(f), s) : (r = 0, c(f));
  }
  function l(f) {
    return f === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(f), e.exit("autolinkMarker"), e.exit("autolink"), t) : f === null || f === 32 || f === 60 || cn(f) ? n(f) : (e.consume(f), l);
  }
  function c(f) {
    return f === 64 ? (e.consume(f), d) : Zo(f) ? (e.consume(f), c) : n(f);
  }
  function d(f) {
    return xe(f) ? u(f) : n(f);
  }
  function u(f) {
    return f === 46 ? (e.consume(f), r = 0, d) : f === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(f), e.exit("autolinkMarker"), e.exit("autolink"), t) : p(f);
  }
  function p(f) {
    if ((f === 45 || xe(f)) && r++ < 63) {
      const g = f === 45 ? p : u;
      return e.consume(f), g;
    }
    return n(f);
  }
}
const zt = {
  partial: !0,
  tokenize: ss
};
function ss(e, t, n) {
  return r;
  function r(o) {
    return Q(o) ? te(e, i, "linePrefix")(o) : i(o);
  }
  function i(o) {
    return o === null || H(o) ? t(o) : n(o);
  }
}
const $i = {
  continuation: {
    tokenize: cs
  },
  exit: us,
  name: "blockQuote",
  tokenize: ls
};
function ls(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    if (a === 62) {
      const s = r.containerState;
      return s.open || (e.enter("blockQuote", {
        _container: !0
      }), s.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(a), e.exit("blockQuoteMarker"), o;
    }
    return n(a);
  }
  function o(a) {
    return Q(a) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(a), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(a));
  }
}
function cs(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return Q(a) ? te(e, o, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(a) : o(a);
  }
  function o(a) {
    return e.attempt($i, t, n)(a);
  }
}
function us(e) {
  e.exit("blockQuote");
}
const Hi = {
  name: "characterEscape",
  tokenize: ds
};
function ds(e, t, n) {
  return r;
  function r(o) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(o), e.exit("escapeMarker"), i;
  }
  function i(o) {
    return Qo(o) ? (e.enter("characterEscapeValue"), e.consume(o), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(o);
  }
}
const Gi = {
  name: "characterReference",
  tokenize: fs
};
function fs(e, t, n) {
  const r = this;
  let i = 0, o, a;
  return s;
  function s(u) {
    return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(u), e.exit("characterReferenceMarker"), l;
  }
  function l(u) {
    return u === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(u), e.exit("characterReferenceMarkerNumeric"), c) : (e.enter("characterReferenceValue"), o = 31, a = xe, d(u));
  }
  function c(u) {
    return u === 88 || u === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(u), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), o = 6, a = Xo, d) : (e.enter("characterReferenceValue"), o = 7, a = jn, d(u));
  }
  function d(u) {
    if (u === 59 && i) {
      const p = e.exit("characterReferenceValue");
      return a === xe && !dr(r.sliceSerialize(p)) ? n(u) : (e.enter("characterReferenceMarker"), e.consume(u), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
    }
    return a(u) && i++ < o ? (e.consume(u), d) : n(u);
  }
}
const Vr = {
  partial: !0,
  tokenize: gs
}, Zr = {
  concrete: !0,
  name: "codeFenced",
  tokenize: ps
};
function ps(e, t, n) {
  const r = this, i = {
    partial: !0,
    tokenize: I
  };
  let o = 0, a = 0, s;
  return l;
  function l(k) {
    return c(k);
  }
  function c(k) {
    const A = r.events[r.events.length - 1];
    return o = A && A[1].type === "linePrefix" ? A[2].sliceSerialize(A[1], !0).length : 0, s = k, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), d(k);
  }
  function d(k) {
    return k === s ? (a++, e.consume(k), d) : a < 3 ? n(k) : (e.exit("codeFencedFenceSequence"), Q(k) ? te(e, u, "whitespace")(k) : u(k));
  }
  function u(k) {
    return k === null || H(k) ? (e.exit("codeFencedFence"), r.interrupt ? t(k) : e.check(Vr, m, N)(k)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), p(k));
  }
  function p(k) {
    return k === null || H(k) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), u(k)) : Q(k) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), te(e, f, "whitespace")(k)) : k === 96 && k === s ? n(k) : (e.consume(k), p);
  }
  function f(k) {
    return k === null || H(k) ? u(k) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), g(k));
  }
  function g(k) {
    return k === null || H(k) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), u(k)) : k === 96 && k === s ? n(k) : (e.consume(k), g);
  }
  function m(k) {
    return e.attempt(i, N, y)(k);
  }
  function y(k) {
    return e.enter("lineEnding"), e.consume(k), e.exit("lineEnding"), h;
  }
  function h(k) {
    return o > 0 && Q(k) ? te(e, S, "linePrefix", o + 1)(k) : S(k);
  }
  function S(k) {
    return k === null || H(k) ? e.check(Vr, m, N)(k) : (e.enter("codeFlowValue"), x(k));
  }
  function x(k) {
    return k === null || H(k) ? (e.exit("codeFlowValue"), S(k)) : (e.consume(k), x);
  }
  function N(k) {
    return e.exit("codeFenced"), t(k);
  }
  function I(k, A, O) {
    let L = 0;
    return w;
    function w($) {
      return k.enter("lineEnding"), k.consume($), k.exit("lineEnding"), v;
    }
    function v($) {
      return k.enter("codeFencedFence"), Q($) ? te(k, D, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)($) : D($);
    }
    function D($) {
      return $ === s ? (k.enter("codeFencedFenceSequence"), K($)) : O($);
    }
    function K($) {
      return $ === s ? (L++, k.consume($), K) : L >= a ? (k.exit("codeFencedFenceSequence"), Q($) ? te(k, q, "whitespace")($) : q($)) : O($);
    }
    function q($) {
      return $ === null || H($) ? (k.exit("codeFencedFence"), A($)) : O($);
    }
  }
}
function gs(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return a === null ? n(a) : (e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), o);
  }
  function o(a) {
    return r.parser.lazy[r.now().line] ? n(a) : t(a);
  }
}
const Pn = {
  name: "codeIndented",
  tokenize: ms
}, hs = {
  partial: !0,
  tokenize: bs
};
function ms(e, t, n) {
  const r = this;
  return i;
  function i(c) {
    return e.enter("codeIndented"), te(e, o, "linePrefix", 5)(c);
  }
  function o(c) {
    const d = r.events[r.events.length - 1];
    return d && d[1].type === "linePrefix" && d[2].sliceSerialize(d[1], !0).length >= 4 ? a(c) : n(c);
  }
  function a(c) {
    return c === null ? l(c) : H(c) ? e.attempt(hs, a, l)(c) : (e.enter("codeFlowValue"), s(c));
  }
  function s(c) {
    return c === null || H(c) ? (e.exit("codeFlowValue"), a(c)) : (e.consume(c), s);
  }
  function l(c) {
    return e.exit("codeIndented"), t(c);
  }
}
function bs(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return r.parser.lazy[r.now().line] ? n(a) : H(a) ? (e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), i) : te(e, o, "linePrefix", 5)(a);
  }
  function o(a) {
    const s = r.events[r.events.length - 1];
    return s && s[1].type === "linePrefix" && s[2].sliceSerialize(s[1], !0).length >= 4 ? t(a) : H(a) ? i(a) : n(a);
  }
}
const _s = {
  name: "codeText",
  previous: ys,
  resolve: Es,
  tokenize: ks
};
function Es(e) {
  let t = e.length - 4, n = 3, r, i;
  if ((e[n][1].type === "lineEnding" || e[n][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
    for (r = n; ++r < t; )
      if (e[r][1].type === "codeTextData") {
        e[n][1].type = "codeTextPadding", e[t][1].type = "codeTextPadding", n += 2, t -= 2;
        break;
      }
  }
  for (r = n - 1, t++; ++r <= t; )
    i === void 0 ? r !== t && e[r][1].type !== "lineEnding" && (i = r) : (r === t || e[r][1].type === "lineEnding") && (e[i][1].type = "codeTextData", r !== i + 2 && (e[i][1].end = e[r - 1][1].end, e.splice(i + 2, r - i - 2), t -= r - i - 2, r = i + 2), i = void 0);
  return e;
}
function ys(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function ks(e, t, n) {
  let r = 0, i, o;
  return a;
  function a(u) {
    return e.enter("codeText"), e.enter("codeTextSequence"), s(u);
  }
  function s(u) {
    return u === 96 ? (e.consume(u), r++, s) : (e.exit("codeTextSequence"), l(u));
  }
  function l(u) {
    return u === null ? n(u) : u === 32 ? (e.enter("space"), e.consume(u), e.exit("space"), l) : u === 96 ? (o = e.enter("codeTextSequence"), i = 0, d(u)) : H(u) ? (e.enter("lineEnding"), e.consume(u), e.exit("lineEnding"), l) : (e.enter("codeTextData"), c(u));
  }
  function c(u) {
    return u === null || u === 32 || u === 96 || H(u) ? (e.exit("codeTextData"), l(u)) : (e.consume(u), c);
  }
  function d(u) {
    return u === 96 ? (e.consume(u), i++, d) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(u)) : (o.type = "codeTextData", c(u));
  }
}
class xs {
  /**
   * @param {ReadonlyArray<T> | null | undefined} [initial]
   *   Initial items (optional).
   * @returns
   *   Splice buffer.
   */
  constructor(t) {
    this.left = t ? [...t] : [], this.right = [];
  }
  /**
   * Array access;
   * does not move the cursor.
   *
   * @param {number} index
   *   Index.
   * @return {T}
   *   Item.
   */
  get(t) {
    if (t < 0 || t >= this.left.length + this.right.length)
      throw new RangeError("Cannot access index `" + t + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
    return t < this.left.length ? this.left[t] : this.right[this.right.length - t + this.left.length - 1];
  }
  /**
   * The length of the splice buffer, one greater than the largest index in the
   * array.
   */
  get length() {
    return this.left.length + this.right.length;
  }
  /**
   * Remove and return `list[0]`;
   * moves the cursor to `0`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  shift() {
    return this.setCursor(0), this.right.pop();
  }
  /**
   * Slice the buffer to get an array;
   * does not move the cursor.
   *
   * @param {number} start
   *   Start.
   * @param {number | null | undefined} [end]
   *   End (optional).
   * @returns {Array<T>}
   *   Array of items.
   */
  slice(t, n) {
    const r = n ?? Number.POSITIVE_INFINITY;
    return r < this.left.length ? this.left.slice(t, r) : t > this.left.length ? this.right.slice(this.right.length - r + this.left.length, this.right.length - t + this.left.length).reverse() : this.left.slice(t).concat(this.right.slice(this.right.length - r + this.left.length).reverse());
  }
  /**
   * Mimics the behavior of Array.prototype.splice() except for the change of
   * interface necessary to avoid segfaults when patching in very large arrays.
   *
   * This operation moves cursor is moved to `start` and results in the cursor
   * placed after any inserted items.
   *
   * @param {number} start
   *   Start;
   *   zero-based index at which to start changing the array;
   *   negative numbers count backwards from the end of the array and values
   *   that are out-of bounds are clamped to the appropriate end of the array.
   * @param {number | null | undefined} [deleteCount=0]
   *   Delete count (default: `0`);
   *   maximum number of elements to delete, starting from start.
   * @param {Array<T> | null | undefined} [items=[]]
   *   Items to include in place of the deleted items (default: `[]`).
   * @return {Array<T>}
   *   Any removed items.
   */
  splice(t, n, r) {
    const i = n || 0;
    this.setCursor(Math.trunc(t));
    const o = this.right.splice(this.right.length - i, Number.POSITIVE_INFINITY);
    return r && It(this.left, r), o.reverse();
  }
  /**
   * Remove and return the highest-numbered item in the array, so
   * `list[list.length - 1]`;
   * Moves the cursor to `length`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  pop() {
    return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
  }
  /**
   * Inserts a single item to the high-numbered side of the array;
   * moves the cursor to `length`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  push(t) {
    this.setCursor(Number.POSITIVE_INFINITY), this.left.push(t);
  }
  /**
   * Inserts many items to the high-numbered side of the array.
   * Moves the cursor to `length`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  pushMany(t) {
    this.setCursor(Number.POSITIVE_INFINITY), It(this.left, t);
  }
  /**
   * Inserts a single item to the low-numbered side of the array;
   * Moves the cursor to `0`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  unshift(t) {
    this.setCursor(0), this.right.push(t);
  }
  /**
   * Inserts many items to the low-numbered side of the array;
   * moves the cursor to `0`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  unshiftMany(t) {
    this.setCursor(0), It(this.right, t.reverse());
  }
  /**
   * Move the cursor to a specific position in the array. Requires
   * time proportional to the distance moved.
   *
   * If `n < 0`, the cursor will end up at the beginning.
   * If `n > length`, the cursor will end up at the end.
   *
   * @param {number} n
   *   Position.
   * @return {undefined}
   *   Nothing.
   */
  setCursor(t) {
    if (!(t === this.left.length || t > this.left.length && this.right.length === 0 || t < 0 && this.left.length === 0))
      if (t < this.left.length) {
        const n = this.left.splice(t, Number.POSITIVE_INFINITY);
        It(this.right, n.reverse());
      } else {
        const n = this.right.splice(this.left.length + this.right.length - t, Number.POSITIVE_INFINITY);
        It(this.left, n.reverse());
      }
  }
}
function It(e, t) {
  let n = 0;
  if (t.length < 1e4)
    e.push(...t);
  else
    for (; n < t.length; )
      e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
function Ki(e) {
  const t = {};
  let n = -1, r, i, o, a, s, l, c;
  const d = new xs(e);
  for (; ++n < d.length; ) {
    for (; n in t; )
      n = t[n];
    if (r = d.get(n), n && r[1].type === "chunkFlow" && d.get(n - 1)[1].type === "listItemPrefix" && (l = r[1]._tokenizer.events, o = 0, o < l.length && l[o][1].type === "lineEndingBlank" && (o += 2), o < l.length && l[o][1].type === "content"))
      for (; ++o < l.length && l[o][1].type !== "content"; )
        l[o][1].type === "chunkText" && (l[o][1]._isInFirstContentOfListItem = !0, o++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(t, ws(d, n)), n = t[n], c = !0);
    else if (r[1]._container) {
      for (o = n, i = void 0; o--; )
        if (a = d.get(o), a[1].type === "lineEnding" || a[1].type === "lineEndingBlank")
          a[0] === "enter" && (i && (d.get(i)[1].type = "lineEndingBlank"), a[1].type = "lineEnding", i = o);
        else if (!(a[1].type === "linePrefix" || a[1].type === "listItemIndent")) break;
      i && (r[1].end = {
        ...d.get(i)[1].start
      }, s = d.slice(i, n), s.unshift(r), d.splice(i, n - i + 1, s));
    }
  }
  return Le(e, 0, Number.POSITIVE_INFINITY, d.slice(0)), !c;
}
function ws(e, t) {
  const n = e.get(t)[1], r = e.get(t)[2];
  let i = t - 1;
  const o = [];
  let a = n._tokenizer;
  a || (a = r.parser[n.contentType](n.start), n._contentTypeTextTrailing && (a._contentTypeTextTrailing = !0));
  const s = a.events, l = [], c = {};
  let d, u, p = -1, f = n, g = 0, m = 0;
  const y = [m];
  for (; f; ) {
    for (; e.get(++i)[1] !== f; )
      ;
    o.push(i), f._tokenizer || (d = r.sliceStream(f), f.next || d.push(null), u && a.defineSkip(f.start), f._isInFirstContentOfListItem && (a._gfmTasklistFirstContentOfListItem = !0), a.write(d), f._isInFirstContentOfListItem && (a._gfmTasklistFirstContentOfListItem = void 0)), u = f, f = f.next;
  }
  for (f = n; ++p < s.length; )
    // Find a void token that includes a break.
    s[p][0] === "exit" && s[p - 1][0] === "enter" && s[p][1].type === s[p - 1][1].type && s[p][1].start.line !== s[p][1].end.line && (m = p + 1, y.push(m), f._tokenizer = void 0, f.previous = void 0, f = f.next);
  for (a.events = [], f ? (f._tokenizer = void 0, f.previous = void 0) : y.pop(), p = y.length; p--; ) {
    const h = s.slice(y[p], y[p + 1]), S = o.pop();
    l.push([S, S + h.length - 1]), e.splice(S, 2, h);
  }
  for (l.reverse(), p = -1; ++p < l.length; )
    c[g + l[p][0]] = g + l[p][1], g += l[p][1] - l[p][0] - 1;
  return c;
}
const Ss = {
  resolve: Ts,
  tokenize: As
}, Ns = {
  partial: !0,
  tokenize: Cs
};
function Ts(e) {
  return Ki(e), e;
}
function As(e, t) {
  let n;
  return r;
  function r(s) {
    return e.enter("content"), n = e.enter("chunkContent", {
      contentType: "content"
    }), i(s);
  }
  function i(s) {
    return s === null ? o(s) : H(s) ? e.check(Ns, a, o)(s) : (e.consume(s), i);
  }
  function o(s) {
    return e.exit("chunkContent"), e.exit("content"), t(s);
  }
  function a(s) {
    return e.consume(s), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
      contentType: "content",
      previous: n
    }), n = n.next, i;
  }
}
function Cs(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), te(e, o, "linePrefix");
  }
  function o(a) {
    if (a === null || H(a))
      return n(a);
    const s = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") && s && s[1].type === "linePrefix" && s[2].sliceSerialize(s[1], !0).length >= 4 ? t(a) : e.interrupt(r.parser.constructs.flow, n, t)(a);
  }
}
function qi(e, t, n, r, i, o, a, s, l) {
  const c = l || Number.POSITIVE_INFINITY;
  let d = 0;
  return u;
  function u(h) {
    return h === 60 ? (e.enter(r), e.enter(i), e.enter(o), e.consume(h), e.exit(o), p) : h === null || h === 32 || h === 41 || cn(h) ? n(h) : (e.enter(r), e.enter(a), e.enter(s), e.enter("chunkString", {
      contentType: "string"
    }), m(h));
  }
  function p(h) {
    return h === 62 ? (e.enter(o), e.consume(h), e.exit(o), e.exit(i), e.exit(r), t) : (e.enter(s), e.enter("chunkString", {
      contentType: "string"
    }), f(h));
  }
  function f(h) {
    return h === 62 ? (e.exit("chunkString"), e.exit(s), p(h)) : h === null || h === 60 || H(h) ? n(h) : (e.consume(h), h === 92 ? g : f);
  }
  function g(h) {
    return h === 60 || h === 62 || h === 92 ? (e.consume(h), f) : f(h);
  }
  function m(h) {
    return !d && (h === null || h === 41 || de(h)) ? (e.exit("chunkString"), e.exit(s), e.exit(a), e.exit(r), t(h)) : d < c && h === 40 ? (e.consume(h), d++, m) : h === 41 ? (e.consume(h), d--, m) : h === null || h === 32 || h === 40 || cn(h) ? n(h) : (e.consume(h), h === 92 ? y : m);
  }
  function y(h) {
    return h === 40 || h === 41 || h === 92 ? (e.consume(h), m) : m(h);
  }
}
function Wi(e, t, n, r, i, o) {
  const a = this;
  let s = 0, l;
  return c;
  function c(f) {
    return e.enter(r), e.enter(i), e.consume(f), e.exit(i), e.enter(o), d;
  }
  function d(f) {
    return s > 999 || f === null || f === 91 || f === 93 && !l || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    f === 94 && !s && "_hiddenFootnoteSupport" in a.parser.constructs ? n(f) : f === 93 ? (e.exit(o), e.enter(i), e.consume(f), e.exit(i), e.exit(r), t) : H(f) ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), d) : (e.enter("chunkString", {
      contentType: "string"
    }), u(f));
  }
  function u(f) {
    return f === null || f === 91 || f === 93 || H(f) || s++ > 999 ? (e.exit("chunkString"), d(f)) : (e.consume(f), l || (l = !Q(f)), f === 92 ? p : u);
  }
  function p(f) {
    return f === 91 || f === 92 || f === 93 ? (e.consume(f), s++, u) : u(f);
  }
}
function Yi(e, t, n, r, i, o) {
  let a;
  return s;
  function s(p) {
    return p === 34 || p === 39 || p === 40 ? (e.enter(r), e.enter(i), e.consume(p), e.exit(i), a = p === 40 ? 41 : p, l) : n(p);
  }
  function l(p) {
    return p === a ? (e.enter(i), e.consume(p), e.exit(i), e.exit(r), t) : (e.enter(o), c(p));
  }
  function c(p) {
    return p === a ? (e.exit(o), l(a)) : p === null ? n(p) : H(p) ? (e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), te(e, c, "linePrefix")) : (e.enter("chunkString", {
      contentType: "string"
    }), d(p));
  }
  function d(p) {
    return p === a || p === null || H(p) ? (e.exit("chunkString"), c(p)) : (e.consume(p), p === 92 ? u : d);
  }
  function u(p) {
    return p === a || p === 92 ? (e.consume(p), d) : d(p);
  }
}
function Dt(e, t) {
  let n;
  return r;
  function r(i) {
    return H(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : Q(i) ? te(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i);
  }
}
const Is = {
  name: "definition",
  tokenize: vs
}, Os = {
  partial: !0,
  tokenize: Rs
};
function vs(e, t, n) {
  const r = this;
  let i;
  return o;
  function o(f) {
    return e.enter("definition"), a(f);
  }
  function a(f) {
    return Wi.call(
      r,
      e,
      s,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(f);
  }
  function s(f) {
    return i = Ue(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), f === 58 ? (e.enter("definitionMarker"), e.consume(f), e.exit("definitionMarker"), l) : n(f);
  }
  function l(f) {
    return de(f) ? Dt(e, c)(f) : c(f);
  }
  function c(f) {
    return qi(
      e,
      d,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(f);
  }
  function d(f) {
    return e.attempt(Os, u, u)(f);
  }
  function u(f) {
    return Q(f) ? te(e, p, "whitespace")(f) : p(f);
  }
  function p(f) {
    return f === null || H(f) ? (e.exit("definition"), r.parser.defined.push(i), t(f)) : n(f);
  }
}
function Rs(e, t, n) {
  return r;
  function r(s) {
    return de(s) ? Dt(e, i)(s) : n(s);
  }
  function i(s) {
    return Yi(e, o, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(s);
  }
  function o(s) {
    return Q(s) ? te(e, a, "whitespace")(s) : a(s);
  }
  function a(s) {
    return s === null || H(s) ? t(s) : n(s);
  }
}
const Ms = {
  name: "hardBreakEscape",
  tokenize: Ds
};
function Ds(e, t, n) {
  return r;
  function r(o) {
    return e.enter("hardBreakEscape"), e.consume(o), i;
  }
  function i(o) {
    return H(o) ? (e.exit("hardBreakEscape"), t(o)) : n(o);
  }
}
const Ls = {
  name: "headingAtx",
  resolve: Bs,
  tokenize: Ps
};
function Bs(e, t) {
  let n = e.length - 2, r = 3, i, o;
  return e[r][1].type === "whitespace" && (r += 2), n - 2 > r && e[n][1].type === "whitespace" && (n -= 2), e[n][1].type === "atxHeadingSequence" && (r === n - 1 || n - 4 > r && e[n - 2][1].type === "whitespace") && (n -= r + 1 === n ? 2 : 4), n > r && (i = {
    type: "atxHeadingText",
    start: e[r][1].start,
    end: e[n][1].end
  }, o = {
    type: "chunkText",
    start: e[r][1].start,
    end: e[n][1].end,
    contentType: "text"
  }, Le(e, r, n - r + 1, [["enter", i, t], ["enter", o, t], ["exit", o, t], ["exit", i, t]])), e;
}
function Ps(e, t, n) {
  let r = 0;
  return i;
  function i(d) {
    return e.enter("atxHeading"), o(d);
  }
  function o(d) {
    return e.enter("atxHeadingSequence"), a(d);
  }
  function a(d) {
    return d === 35 && r++ < 6 ? (e.consume(d), a) : d === null || de(d) ? (e.exit("atxHeadingSequence"), s(d)) : n(d);
  }
  function s(d) {
    return d === 35 ? (e.enter("atxHeadingSequence"), l(d)) : d === null || H(d) ? (e.exit("atxHeading"), t(d)) : Q(d) ? te(e, s, "whitespace")(d) : (e.enter("atxHeadingText"), c(d));
  }
  function l(d) {
    return d === 35 ? (e.consume(d), l) : (e.exit("atxHeadingSequence"), s(d));
  }
  function c(d) {
    return d === null || d === 35 || de(d) ? (e.exit("atxHeadingText"), s(d)) : (e.consume(d), c);
  }
}
const Fs = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "search",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], Xr = ["pre", "script", "style", "textarea"], zs = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: Hs,
  tokenize: Gs
}, Us = {
  partial: !0,
  tokenize: qs
}, $s = {
  partial: !0,
  tokenize: Ks
};
function Hs(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); )
    ;
  return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function Gs(e, t, n) {
  const r = this;
  let i, o, a, s, l;
  return c;
  function c(E) {
    return d(E);
  }
  function d(E) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(E), u;
  }
  function u(E) {
    return E === 33 ? (e.consume(E), p) : E === 47 ? (e.consume(E), o = !0, m) : E === 63 ? (e.consume(E), i = 3, r.interrupt ? t : b) : Te(E) ? (e.consume(E), a = String.fromCharCode(E), y) : n(E);
  }
  function p(E) {
    return E === 45 ? (e.consume(E), i = 2, f) : E === 91 ? (e.consume(E), i = 5, s = 0, g) : Te(E) ? (e.consume(E), i = 4, r.interrupt ? t : b) : n(E);
  }
  function f(E) {
    return E === 45 ? (e.consume(E), r.interrupt ? t : b) : n(E);
  }
  function g(E) {
    const we = "CDATA[";
    return E === we.charCodeAt(s++) ? (e.consume(E), s === we.length ? r.interrupt ? t : D : g) : n(E);
  }
  function m(E) {
    return Te(E) ? (e.consume(E), a = String.fromCharCode(E), y) : n(E);
  }
  function y(E) {
    if (E === null || E === 47 || E === 62 || de(E)) {
      const we = E === 47, Be = a.toLowerCase();
      return !we && !o && Xr.includes(Be) ? (i = 1, r.interrupt ? t(E) : D(E)) : Fs.includes(a.toLowerCase()) ? (i = 6, we ? (e.consume(E), h) : r.interrupt ? t(E) : D(E)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(E) : o ? S(E) : x(E));
    }
    return E === 45 || xe(E) ? (e.consume(E), a += String.fromCharCode(E), y) : n(E);
  }
  function h(E) {
    return E === 62 ? (e.consume(E), r.interrupt ? t : D) : n(E);
  }
  function S(E) {
    return Q(E) ? (e.consume(E), S) : w(E);
  }
  function x(E) {
    return E === 47 ? (e.consume(E), w) : E === 58 || E === 95 || Te(E) ? (e.consume(E), N) : Q(E) ? (e.consume(E), x) : w(E);
  }
  function N(E) {
    return E === 45 || E === 46 || E === 58 || E === 95 || xe(E) ? (e.consume(E), N) : I(E);
  }
  function I(E) {
    return E === 61 ? (e.consume(E), k) : Q(E) ? (e.consume(E), I) : x(E);
  }
  function k(E) {
    return E === null || E === 60 || E === 61 || E === 62 || E === 96 ? n(E) : E === 34 || E === 39 ? (e.consume(E), l = E, A) : Q(E) ? (e.consume(E), k) : O(E);
  }
  function A(E) {
    return E === l ? (e.consume(E), l = null, L) : E === null || H(E) ? n(E) : (e.consume(E), A);
  }
  function O(E) {
    return E === null || E === 34 || E === 39 || E === 47 || E === 60 || E === 61 || E === 62 || E === 96 || de(E) ? I(E) : (e.consume(E), O);
  }
  function L(E) {
    return E === 47 || E === 62 || Q(E) ? x(E) : n(E);
  }
  function w(E) {
    return E === 62 ? (e.consume(E), v) : n(E);
  }
  function v(E) {
    return E === null || H(E) ? D(E) : Q(E) ? (e.consume(E), v) : n(E);
  }
  function D(E) {
    return E === 45 && i === 2 ? (e.consume(E), ne) : E === 60 && i === 1 ? (e.consume(E), le) : E === 62 && i === 4 ? (e.consume(E), oe) : E === 63 && i === 3 ? (e.consume(E), b) : E === 93 && i === 5 ? (e.consume(E), ce) : H(E) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(Us, ue, K)(E)) : E === null || H(E) ? (e.exit("htmlFlowData"), K(E)) : (e.consume(E), D);
  }
  function K(E) {
    return e.check($s, q, ue)(E);
  }
  function q(E) {
    return e.enter("lineEnding"), e.consume(E), e.exit("lineEnding"), $;
  }
  function $(E) {
    return E === null || H(E) ? K(E) : (e.enter("htmlFlowData"), D(E));
  }
  function ne(E) {
    return E === 45 ? (e.consume(E), b) : D(E);
  }
  function le(E) {
    return E === 47 ? (e.consume(E), a = "", V) : D(E);
  }
  function V(E) {
    if (E === 62) {
      const we = a.toLowerCase();
      return Xr.includes(we) ? (e.consume(E), oe) : D(E);
    }
    return Te(E) && a.length < 8 ? (e.consume(E), a += String.fromCharCode(E), V) : D(E);
  }
  function ce(E) {
    return E === 93 ? (e.consume(E), b) : D(E);
  }
  function b(E) {
    return E === 62 ? (e.consume(E), oe) : E === 45 && i === 2 ? (e.consume(E), b) : D(E);
  }
  function oe(E) {
    return E === null || H(E) ? (e.exit("htmlFlowData"), ue(E)) : (e.consume(E), oe);
  }
  function ue(E) {
    return e.exit("htmlFlow"), t(E);
  }
}
function Ks(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return H(a) ? (e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), o) : n(a);
  }
  function o(a) {
    return r.parser.lazy[r.now().line] ? n(a) : t(a);
  }
}
function qs(e, t, n) {
  return r;
  function r(i) {
    return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(zt, t, n);
  }
}
const Ws = {
  name: "htmlText",
  tokenize: Ys
};
function Ys(e, t, n) {
  const r = this;
  let i, o, a;
  return s;
  function s(b) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(b), l;
  }
  function l(b) {
    return b === 33 ? (e.consume(b), c) : b === 47 ? (e.consume(b), I) : b === 63 ? (e.consume(b), x) : Te(b) ? (e.consume(b), O) : n(b);
  }
  function c(b) {
    return b === 45 ? (e.consume(b), d) : b === 91 ? (e.consume(b), o = 0, g) : Te(b) ? (e.consume(b), S) : n(b);
  }
  function d(b) {
    return b === 45 ? (e.consume(b), f) : n(b);
  }
  function u(b) {
    return b === null ? n(b) : b === 45 ? (e.consume(b), p) : H(b) ? (a = u, le(b)) : (e.consume(b), u);
  }
  function p(b) {
    return b === 45 ? (e.consume(b), f) : u(b);
  }
  function f(b) {
    return b === 62 ? ne(b) : b === 45 ? p(b) : u(b);
  }
  function g(b) {
    const oe = "CDATA[";
    return b === oe.charCodeAt(o++) ? (e.consume(b), o === oe.length ? m : g) : n(b);
  }
  function m(b) {
    return b === null ? n(b) : b === 93 ? (e.consume(b), y) : H(b) ? (a = m, le(b)) : (e.consume(b), m);
  }
  function y(b) {
    return b === 93 ? (e.consume(b), h) : m(b);
  }
  function h(b) {
    return b === 62 ? ne(b) : b === 93 ? (e.consume(b), h) : m(b);
  }
  function S(b) {
    return b === null || b === 62 ? ne(b) : H(b) ? (a = S, le(b)) : (e.consume(b), S);
  }
  function x(b) {
    return b === null ? n(b) : b === 63 ? (e.consume(b), N) : H(b) ? (a = x, le(b)) : (e.consume(b), x);
  }
  function N(b) {
    return b === 62 ? ne(b) : x(b);
  }
  function I(b) {
    return Te(b) ? (e.consume(b), k) : n(b);
  }
  function k(b) {
    return b === 45 || xe(b) ? (e.consume(b), k) : A(b);
  }
  function A(b) {
    return H(b) ? (a = A, le(b)) : Q(b) ? (e.consume(b), A) : ne(b);
  }
  function O(b) {
    return b === 45 || xe(b) ? (e.consume(b), O) : b === 47 || b === 62 || de(b) ? L(b) : n(b);
  }
  function L(b) {
    return b === 47 ? (e.consume(b), ne) : b === 58 || b === 95 || Te(b) ? (e.consume(b), w) : H(b) ? (a = L, le(b)) : Q(b) ? (e.consume(b), L) : ne(b);
  }
  function w(b) {
    return b === 45 || b === 46 || b === 58 || b === 95 || xe(b) ? (e.consume(b), w) : v(b);
  }
  function v(b) {
    return b === 61 ? (e.consume(b), D) : H(b) ? (a = v, le(b)) : Q(b) ? (e.consume(b), v) : L(b);
  }
  function D(b) {
    return b === null || b === 60 || b === 61 || b === 62 || b === 96 ? n(b) : b === 34 || b === 39 ? (e.consume(b), i = b, K) : H(b) ? (a = D, le(b)) : Q(b) ? (e.consume(b), D) : (e.consume(b), q);
  }
  function K(b) {
    return b === i ? (e.consume(b), i = void 0, $) : b === null ? n(b) : H(b) ? (a = K, le(b)) : (e.consume(b), K);
  }
  function q(b) {
    return b === null || b === 34 || b === 39 || b === 60 || b === 61 || b === 96 ? n(b) : b === 47 || b === 62 || de(b) ? L(b) : (e.consume(b), q);
  }
  function $(b) {
    return b === 47 || b === 62 || de(b) ? L(b) : n(b);
  }
  function ne(b) {
    return b === 62 ? (e.consume(b), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(b);
  }
  function le(b) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(b), e.exit("lineEnding"), V;
  }
  function V(b) {
    return Q(b) ? te(e, ce, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(b) : ce(b);
  }
  function ce(b) {
    return e.enter("htmlTextData"), a(b);
  }
}
const fr = {
  name: "labelEnd",
  resolveAll: Qs,
  resolveTo: Js,
  tokenize: js
}, Vs = {
  tokenize: el
}, Zs = {
  tokenize: tl
}, Xs = {
  tokenize: nl
};
function Qs(e) {
  let t = -1;
  const n = [];
  for (; ++t < e.length; ) {
    const r = e[t][1];
    if (n.push(e[t]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
      const i = r.type === "labelImage" ? 4 : 2;
      r.type = "data", t += i;
    }
  }
  return e.length !== n.length && Le(e, 0, e.length, n), e;
}
function Js(e, t) {
  let n = e.length, r = 0, i, o, a, s;
  for (; n--; )
    if (i = e[n][1], o) {
      if (i.type === "link" || i.type === "labelLink" && i._inactive)
        break;
      e[n][0] === "enter" && i.type === "labelLink" && (i._inactive = !0);
    } else if (a) {
      if (e[n][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (o = n, i.type !== "labelLink")) {
        r = 2;
        break;
      }
    } else i.type === "labelEnd" && (a = n);
  const l = {
    type: e[o][1].type === "labelLink" ? "link" : "image",
    start: {
      ...e[o][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  }, c = {
    type: "label",
    start: {
      ...e[o][1].start
    },
    end: {
      ...e[a][1].end
    }
  }, d = {
    type: "labelText",
    start: {
      ...e[o + r + 2][1].end
    },
    end: {
      ...e[a - 2][1].start
    }
  };
  return s = [["enter", l, t], ["enter", c, t]], s = Pe(s, e.slice(o + 1, o + r + 3)), s = Pe(s, [["enter", d, t]]), s = Pe(s, bn(t.parser.constructs.insideSpan.null, e.slice(o + r + 4, a - 3), t)), s = Pe(s, [["exit", d, t], e[a - 2], e[a - 1], ["exit", c, t]]), s = Pe(s, e.slice(a + 1)), s = Pe(s, [["exit", l, t]]), Le(e, o, e.length, s), e;
}
function js(e, t, n) {
  const r = this;
  let i = r.events.length, o, a;
  for (; i--; )
    if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
      o = r.events[i][1];
      break;
    }
  return s;
  function s(p) {
    return o ? o._inactive ? u(p) : (a = r.parser.defined.includes(Ue(r.sliceSerialize({
      start: o.end,
      end: r.now()
    }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(p), e.exit("labelMarker"), e.exit("labelEnd"), l) : n(p);
  }
  function l(p) {
    return p === 40 ? e.attempt(Vs, d, a ? d : u)(p) : p === 91 ? e.attempt(Zs, d, a ? c : u)(p) : a ? d(p) : u(p);
  }
  function c(p) {
    return e.attempt(Xs, d, u)(p);
  }
  function d(p) {
    return t(p);
  }
  function u(p) {
    return o._balanced = !0, n(p);
  }
}
function el(e, t, n) {
  return r;
  function r(u) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(u), e.exit("resourceMarker"), i;
  }
  function i(u) {
    return de(u) ? Dt(e, o)(u) : o(u);
  }
  function o(u) {
    return u === 41 ? d(u) : qi(e, a, s, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(u);
  }
  function a(u) {
    return de(u) ? Dt(e, l)(u) : d(u);
  }
  function s(u) {
    return n(u);
  }
  function l(u) {
    return u === 34 || u === 39 || u === 40 ? Yi(e, c, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(u) : d(u);
  }
  function c(u) {
    return de(u) ? Dt(e, d)(u) : d(u);
  }
  function d(u) {
    return u === 41 ? (e.enter("resourceMarker"), e.consume(u), e.exit("resourceMarker"), e.exit("resource"), t) : n(u);
  }
}
function tl(e, t, n) {
  const r = this;
  return i;
  function i(s) {
    return Wi.call(r, e, o, a, "reference", "referenceMarker", "referenceString")(s);
  }
  function o(s) {
    return r.parser.defined.includes(Ue(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(s) : n(s);
  }
  function a(s) {
    return n(s);
  }
}
function nl(e, t, n) {
  return r;
  function r(o) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), i;
  }
  function i(o) {
    return o === 93 ? (e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), e.exit("reference"), t) : n(o);
  }
}
const rl = {
  name: "labelStartImage",
  resolveAll: fr.resolveAll,
  tokenize: il
};
function il(e, t, n) {
  const r = this;
  return i;
  function i(s) {
    return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(s), e.exit("labelImageMarker"), o;
  }
  function o(s) {
    return s === 91 ? (e.enter("labelMarker"), e.consume(s), e.exit("labelMarker"), e.exit("labelImage"), a) : n(s);
  }
  function a(s) {
    return s === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(s) : t(s);
  }
}
const al = {
  name: "labelStartLink",
  resolveAll: fr.resolveAll,
  tokenize: ol
};
function ol(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(a), e.exit("labelMarker"), e.exit("labelLink"), o;
  }
  function o(a) {
    return a === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(a) : t(a);
  }
}
const Fn = {
  name: "lineEnding",
  tokenize: sl
};
function sl(e, t) {
  return n;
  function n(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), te(e, t, "linePrefix");
  }
}
const sn = {
  name: "thematicBreak",
  tokenize: ll
};
function ll(e, t, n) {
  let r = 0, i;
  return o;
  function o(c) {
    return e.enter("thematicBreak"), a(c);
  }
  function a(c) {
    return i = c, s(c);
  }
  function s(c) {
    return c === i ? (e.enter("thematicBreakSequence"), l(c)) : r >= 3 && (c === null || H(c)) ? (e.exit("thematicBreak"), t(c)) : n(c);
  }
  function l(c) {
    return c === i ? (e.consume(c), r++, l) : (e.exit("thematicBreakSequence"), Q(c) ? te(e, s, "whitespace")(c) : s(c));
  }
}
const Ce = {
  continuation: {
    tokenize: fl
  },
  exit: gl,
  name: "list",
  tokenize: dl
}, cl = {
  partial: !0,
  tokenize: hl
}, ul = {
  partial: !0,
  tokenize: pl
};
function dl(e, t, n) {
  const r = this, i = r.events[r.events.length - 1];
  let o = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, a = 0;
  return s;
  function s(f) {
    const g = r.containerState.type || (f === 42 || f === 43 || f === 45 ? "listUnordered" : "listOrdered");
    if (g === "listUnordered" ? !r.containerState.marker || f === r.containerState.marker : jn(f)) {
      if (r.containerState.type || (r.containerState.type = g, e.enter(g, {
        _container: !0
      })), g === "listUnordered")
        return e.enter("listItemPrefix"), f === 42 || f === 45 ? e.check(sn, n, c)(f) : c(f);
      if (!r.interrupt || f === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), l(f);
    }
    return n(f);
  }
  function l(f) {
    return jn(f) && ++a < 10 ? (e.consume(f), l) : (!r.interrupt || a < 2) && (r.containerState.marker ? f === r.containerState.marker : f === 41 || f === 46) ? (e.exit("listItemValue"), c(f)) : n(f);
  }
  function c(f) {
    return e.enter("listItemMarker"), e.consume(f), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || f, e.check(
      zt,
      // Can’t be empty when interrupting.
      r.interrupt ? n : d,
      e.attempt(cl, p, u)
    );
  }
  function d(f) {
    return r.containerState.initialBlankLine = !0, o++, p(f);
  }
  function u(f) {
    return Q(f) ? (e.enter("listItemPrefixWhitespace"), e.consume(f), e.exit("listItemPrefixWhitespace"), p) : n(f);
  }
  function p(f) {
    return r.containerState.size = o + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(f);
  }
}
function fl(e, t, n) {
  const r = this;
  return r.containerState._closeFlow = void 0, e.check(zt, i, o);
  function i(s) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, te(e, t, "listItemIndent", r.containerState.size + 1)(s);
  }
  function o(s) {
    return r.containerState.furtherBlankLines || !Q(s) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, a(s)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(ul, t, a)(s));
  }
  function a(s) {
    return r.containerState._closeFlow = !0, r.interrupt = void 0, te(e, e.attempt(Ce, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(s);
  }
}
function pl(e, t, n) {
  const r = this;
  return te(e, i, "listItemIndent", r.containerState.size + 1);
  function i(o) {
    const a = r.events[r.events.length - 1];
    return a && a[1].type === "listItemIndent" && a[2].sliceSerialize(a[1], !0).length === r.containerState.size ? t(o) : n(o);
  }
}
function gl(e) {
  e.exit(this.containerState.type);
}
function hl(e, t, n) {
  const r = this;
  return te(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function i(o) {
    const a = r.events[r.events.length - 1];
    return !Q(o) && a && a[1].type === "listItemPrefixWhitespace" ? t(o) : n(o);
  }
}
const Qr = {
  name: "setextUnderline",
  resolveTo: ml,
  tokenize: bl
};
function ml(e, t) {
  let n = e.length, r, i, o;
  for (; n--; )
    if (e[n][0] === "enter") {
      if (e[n][1].type === "content") {
        r = n;
        break;
      }
      e[n][1].type === "paragraph" && (i = n);
    } else
      e[n][1].type === "content" && e.splice(n, 1), !o && e[n][1].type === "definition" && (o = n);
  const a = {
    type: "setextHeading",
    start: {
      ...e[r][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  };
  return e[i][1].type = "setextHeadingText", o ? (e.splice(i, 0, ["enter", a, t]), e.splice(o + 1, 0, ["exit", e[r][1], t]), e[r][1].end = {
    ...e[o][1].end
  }) : e[r][1] = a, e.push(["exit", a, t]), e;
}
function bl(e, t, n) {
  const r = this;
  let i;
  return o;
  function o(c) {
    let d = r.events.length, u;
    for (; d--; )
      if (r.events[d][1].type !== "lineEnding" && r.events[d][1].type !== "linePrefix" && r.events[d][1].type !== "content") {
        u = r.events[d][1].type === "paragraph";
        break;
      }
    return !r.parser.lazy[r.now().line] && (r.interrupt || u) ? (e.enter("setextHeadingLine"), i = c, a(c)) : n(c);
  }
  function a(c) {
    return e.enter("setextHeadingLineSequence"), s(c);
  }
  function s(c) {
    return c === i ? (e.consume(c), s) : (e.exit("setextHeadingLineSequence"), Q(c) ? te(e, l, "lineSuffix")(c) : l(c));
  }
  function l(c) {
    return c === null || H(c) ? (e.exit("setextHeadingLine"), t(c)) : n(c);
  }
}
const _l = {
  tokenize: El
};
function El(e) {
  const t = this, n = e.attempt(
    // Try to parse a blank line.
    zt,
    r,
    // Try to parse initial flow (essentially, only code).
    e.attempt(this.parser.constructs.flowInitial, i, te(e, e.attempt(this.parser.constructs.flow, i, e.attempt(Ss, i)), "linePrefix"))
  );
  return n;
  function r(o) {
    if (o === null) {
      e.consume(o);
      return;
    }
    return e.enter("lineEndingBlank"), e.consume(o), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n;
  }
  function i(o) {
    if (o === null) {
      e.consume(o);
      return;
    }
    return e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), t.currentConstruct = void 0, n;
  }
}
const yl = {
  resolveAll: Zi()
}, kl = Vi("string"), xl = Vi("text");
function Vi(e) {
  return {
    resolveAll: Zi(e === "text" ? wl : void 0),
    tokenize: t
  };
  function t(n) {
    const r = this, i = this.parser.constructs[e], o = n.attempt(i, a, s);
    return a;
    function a(d) {
      return c(d) ? o(d) : s(d);
    }
    function s(d) {
      if (d === null) {
        n.consume(d);
        return;
      }
      return n.enter("data"), n.consume(d), l;
    }
    function l(d) {
      return c(d) ? (n.exit("data"), o(d)) : (n.consume(d), l);
    }
    function c(d) {
      if (d === null)
        return !0;
      const u = i[d];
      let p = -1;
      if (u)
        for (; ++p < u.length; ) {
          const f = u[p];
          if (!f.previous || f.previous.call(r, r.previous))
            return !0;
        }
      return !1;
    }
  }
}
function Zi(e) {
  return t;
  function t(n, r) {
    let i = -1, o;
    for (; ++i <= n.length; )
      o === void 0 ? n[i] && n[i][1].type === "data" && (o = i, i++) : (!n[i] || n[i][1].type !== "data") && (i !== o + 2 && (n[o][1].end = n[i - 1][1].end, n.splice(o + 2, i - o - 2), i = o + 2), o = void 0);
    return e ? e(n, r) : n;
  }
}
function wl(e, t) {
  let n = 0;
  for (; ++n <= e.length; )
    if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
      const r = e[n - 1][1], i = t.sliceStream(r);
      let o = i.length, a = -1, s = 0, l;
      for (; o--; ) {
        const c = i[o];
        if (typeof c == "string") {
          for (a = c.length; c.charCodeAt(a - 1) === 32; )
            s++, a--;
          if (a) break;
          a = -1;
        } else if (c === -2)
          l = !0, s++;
        else if (c !== -1) {
          o++;
          break;
        }
      }
      if (t._contentTypeTextTrailing && n === e.length && (s = 0), s) {
        const c = {
          type: n === e.length || l || s < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: o ? a : r.start._bufferIndex + a,
            _index: r.start._index + o,
            line: r.end.line,
            column: r.end.column - s,
            offset: r.end.offset - s
          },
          end: {
            ...r.end
          }
        };
        r.end = {
          ...c.start
        }, r.start.offset === r.end.offset ? Object.assign(r, c) : (e.splice(n, 0, ["enter", c, t], ["exit", c, t]), n += 2);
      }
      n++;
    }
  return e;
}
const Sl = {
  42: Ce,
  43: Ce,
  45: Ce,
  48: Ce,
  49: Ce,
  50: Ce,
  51: Ce,
  52: Ce,
  53: Ce,
  54: Ce,
  55: Ce,
  56: Ce,
  57: Ce,
  62: $i
}, Nl = {
  91: Is
}, Tl = {
  [-2]: Pn,
  [-1]: Pn,
  32: Pn
}, Al = {
  35: Ls,
  42: sn,
  45: [Qr, sn],
  60: zs,
  61: Qr,
  95: sn,
  96: Zr,
  126: Zr
}, Cl = {
  38: Gi,
  92: Hi
}, Il = {
  [-5]: Fn,
  [-4]: Fn,
  [-3]: Fn,
  33: rl,
  38: Gi,
  42: er,
  60: [as, Ws],
  91: al,
  92: [Ms, Hi],
  93: fr,
  95: er,
  96: _s
}, Ol = {
  null: [er, yl]
}, vl = {
  null: [42, 95]
}, Rl = {
  null: []
}, Ml = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: vl,
  contentInitial: Nl,
  disable: Rl,
  document: Sl,
  flow: Al,
  flowInitial: Tl,
  insideSpan: Ol,
  string: Cl,
  text: Il
}, Symbol.toStringTag, { value: "Module" }));
function Dl(e, t, n) {
  let r = {
    _bufferIndex: -1,
    _index: 0,
    line: n && n.line || 1,
    column: n && n.column || 1,
    offset: n && n.offset || 0
  };
  const i = {}, o = [];
  let a = [], s = [];
  const l = {
    attempt: A(I),
    check: A(k),
    consume: S,
    enter: x,
    exit: N,
    interrupt: A(k, {
      interrupt: !0
    })
  }, c = {
    code: null,
    containerState: {},
    defineSkip: m,
    events: [],
    now: g,
    parser: e,
    previous: null,
    sliceSerialize: p,
    sliceStream: f,
    write: u
  };
  let d = t.tokenize.call(c, l);
  return t.resolveAll && o.push(t), c;
  function u(v) {
    return a = Pe(a, v), y(), a[a.length - 1] !== null ? [] : (O(t, 0), c.events = bn(o, c.events, c), c.events);
  }
  function p(v, D) {
    return Bl(f(v), D);
  }
  function f(v) {
    return Ll(a, v);
  }
  function g() {
    const {
      _bufferIndex: v,
      _index: D,
      line: K,
      column: q,
      offset: $
    } = r;
    return {
      _bufferIndex: v,
      _index: D,
      line: K,
      column: q,
      offset: $
    };
  }
  function m(v) {
    i[v.line] = v.column, w();
  }
  function y() {
    let v;
    for (; r._index < a.length; ) {
      const D = a[r._index];
      if (typeof D == "string")
        for (v = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === v && r._bufferIndex < D.length; )
          h(D.charCodeAt(r._bufferIndex));
      else
        h(D);
    }
  }
  function h(v) {
    d = d(v);
  }
  function S(v) {
    H(v) ? (r.line++, r.column = 1, r.offset += v === -3 ? 2 : 1, w()) : v !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    a[r._index].length && (r._bufferIndex = -1, r._index++)), c.previous = v;
  }
  function x(v, D) {
    const K = D || {};
    return K.type = v, K.start = g(), c.events.push(["enter", K, c]), s.push(K), K;
  }
  function N(v) {
    const D = s.pop();
    return D.end = g(), c.events.push(["exit", D, c]), D;
  }
  function I(v, D) {
    O(v, D.from);
  }
  function k(v, D) {
    D.restore();
  }
  function A(v, D) {
    return K;
    function K(q, $, ne) {
      let le, V, ce, b;
      return Array.isArray(q) ? (
        /* c8 ignore next 1 */
        ue(q)
      ) : "tokenize" in q ? (
        // Looks like a construct.
        ue([
          /** @type {Construct} */
          q
        ])
      ) : oe(q);
      function oe(ge) {
        return We;
        function We(Oe) {
          const Ye = Oe !== null && ge[Oe], ve = Oe !== null && ge.null, tt = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(Ye) ? Ye : Ye ? [Ye] : [],
            ...Array.isArray(ve) ? ve : ve ? [ve] : []
          ];
          return ue(tt)(Oe);
        }
      }
      function ue(ge) {
        return le = ge, V = 0, ge.length === 0 ? ne : E(ge[V]);
      }
      function E(ge) {
        return We;
        function We(Oe) {
          return b = L(), ce = ge, ge.partial || (c.currentConstruct = ge), ge.name && c.parser.constructs.disable.null.includes(ge.name) ? Be() : ge.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            D ? Object.assign(Object.create(c), D) : c,
            l,
            we,
            Be
          )(Oe);
        }
      }
      function we(ge) {
        return v(ce, b), $;
      }
      function Be(ge) {
        return b.restore(), ++V < le.length ? E(le[V]) : ne;
      }
    }
  }
  function O(v, D) {
    v.resolveAll && !o.includes(v) && o.push(v), v.resolve && Le(c.events, D, c.events.length - D, v.resolve(c.events.slice(D), c)), v.resolveTo && (c.events = v.resolveTo(c.events, c));
  }
  function L() {
    const v = g(), D = c.previous, K = c.currentConstruct, q = c.events.length, $ = Array.from(s);
    return {
      from: q,
      restore: ne
    };
    function ne() {
      r = v, c.previous = D, c.currentConstruct = K, c.events.length = q, s = $, w();
    }
  }
  function w() {
    r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
  }
}
function Ll(e, t) {
  const n = t.start._index, r = t.start._bufferIndex, i = t.end._index, o = t.end._bufferIndex;
  let a;
  if (n === i)
    a = [e[n].slice(r, o)];
  else {
    if (a = e.slice(n, i), r > -1) {
      const s = a[0];
      typeof s == "string" ? a[0] = s.slice(r) : a.shift();
    }
    o > 0 && a.push(e[i].slice(0, o));
  }
  return a;
}
function Bl(e, t) {
  let n = -1;
  const r = [];
  let i;
  for (; ++n < e.length; ) {
    const o = e[n];
    let a;
    if (typeof o == "string")
      a = o;
    else switch (o) {
      case -5: {
        a = "\r";
        break;
      }
      case -4: {
        a = `
`;
        break;
      }
      case -3: {
        a = `\r
`;
        break;
      }
      case -2: {
        a = t ? " " : "	";
        break;
      }
      case -1: {
        if (!t && i) continue;
        a = " ";
        break;
      }
      default:
        a = String.fromCharCode(o);
    }
    i = o === -2, r.push(a);
  }
  return r.join("");
}
function Pl(e) {
  const r = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      zi([Ml, ...(e || {}).extensions || []])
    ),
    content: i(Jo),
    defined: [],
    document: i(es),
    flow: i(_l),
    lazy: {},
    string: i(kl),
    text: i(xl)
  };
  return r;
  function i(o) {
    return a;
    function a(s) {
      return Dl(r, o, s);
    }
  }
}
function Fl(e) {
  for (; !Ki(e); )
    ;
  return e;
}
const Jr = /[\0\t\n\r]/g;
function zl() {
  let e = 1, t = "", n = !0, r;
  return i;
  function i(o, a, s) {
    const l = [];
    let c, d, u, p, f;
    for (o = t + (typeof o == "string" ? o.toString() : new TextDecoder(a || void 0).decode(o)), u = 0, t = "", n && (o.charCodeAt(0) === 65279 && u++, n = void 0); u < o.length; ) {
      if (Jr.lastIndex = u, c = Jr.exec(o), p = c && c.index !== void 0 ? c.index : o.length, f = o.charCodeAt(p), !c) {
        t = o.slice(u);
        break;
      }
      if (f === 10 && u === p && r)
        l.push(-3), r = void 0;
      else
        switch (r && (l.push(-5), r = void 0), u < p && (l.push(o.slice(u, p)), e += p - u), f) {
          case 0: {
            l.push(65533), e++;
            break;
          }
          case 9: {
            for (d = Math.ceil(e / 4) * 4, l.push(-2); e++ < d; ) l.push(-1);
            break;
          }
          case 10: {
            l.push(-4), e = 1;
            break;
          }
          default:
            r = !0, e = 1;
        }
      u = p + 1;
    }
    return s && (r && l.push(-5), t && l.push(t), l.push(null)), l;
  }
}
const Ul = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function $l(e) {
  return e.replace(Ul, Hl);
}
function Hl(e, t, n) {
  if (t)
    return t;
  if (n.charCodeAt(0) === 35) {
    const i = n.charCodeAt(1), o = i === 120 || i === 88;
    return Ui(n.slice(o ? 2 : 1), o ? 16 : 10);
  }
  return dr(n) || e;
}
const Xi = {}.hasOwnProperty;
function Gl(e, t, n) {
  return typeof t != "string" && (n = t, t = void 0), Kl(n)(Fl(Pl(n).document().write(zl()(e, t, !0))));
}
function Kl(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: o(mt),
      autolinkProtocol: L,
      autolinkEmail: L,
      atxHeading: o(ht),
      blockQuote: o(ve),
      characterEscape: L,
      characterReference: L,
      codeFenced: o(tt),
      codeFencedFenceInfo: a,
      codeFencedFenceMeta: a,
      codeIndented: o(tt, a),
      codeText: o(St, a),
      codeTextData: L,
      data: L,
      codeFlowValue: L,
      definition: o(Nt),
      definitionDestinationString: a,
      definitionLabelString: a,
      definitionTitleString: a,
      emphasis: o(Tt),
      hardBreakEscape: o(re),
      hardBreakTrailing: o(re),
      htmlFlow: o(Ve, a),
      htmlFlowData: L,
      htmlText: o(Ve, a),
      htmlTextData: L,
      image: o(Ze),
      label: a,
      link: o(mt),
      listItem: o(yn),
      listItemValue: p,
      listOrdered: o(At, u),
      listUnordered: o(At),
      paragraph: o(kn),
      reference: E,
      referenceString: a,
      resourceDestinationString: a,
      resourceTitleString: a,
      setextHeading: o(ht),
      strong: o($t),
      thematicBreak: o(Ht)
    },
    exit: {
      atxHeading: l(),
      atxHeadingSequence: I,
      autolink: l(),
      autolinkEmail: Ye,
      autolinkProtocol: Oe,
      blockQuote: l(),
      characterEscapeValue: w,
      characterReferenceMarkerHexadecimal: Be,
      characterReferenceMarkerNumeric: Be,
      characterReferenceValue: ge,
      characterReference: We,
      codeFenced: l(y),
      codeFencedFence: m,
      codeFencedFenceInfo: f,
      codeFencedFenceMeta: g,
      codeFlowValue: w,
      codeIndented: l(h),
      codeText: l($),
      codeTextData: w,
      data: w,
      definition: l(),
      definitionDestinationString: N,
      definitionLabelString: S,
      definitionTitleString: x,
      emphasis: l(),
      hardBreakEscape: l(D),
      hardBreakTrailing: l(D),
      htmlFlow: l(K),
      htmlFlowData: w,
      htmlText: l(q),
      htmlTextData: w,
      image: l(le),
      label: ce,
      labelText: V,
      lineEnding: v,
      link: l(ne),
      listItem: l(),
      listOrdered: l(),
      listUnordered: l(),
      paragraph: l(),
      referenceString: we,
      resourceDestinationString: b,
      resourceTitleString: oe,
      resource: ue,
      setextHeading: l(O),
      setextHeadingLineSequence: A,
      setextHeadingText: k,
      strong: l(),
      thematicBreak: l()
    }
  };
  Qi(t, (e || {}).mdastExtensions || []);
  const n = {};
  return r;
  function r(T) {
    let M = {
      type: "root",
      children: []
    };
    const W = {
      stack: [M],
      tokenStack: [],
      config: t,
      enter: s,
      exit: c,
      buffer: a,
      resume: d,
      data: n
    }, j = [];
    let ie = -1;
    for (; ++ie < T.length; )
      if (T[ie][1].type === "listOrdered" || T[ie][1].type === "listUnordered")
        if (T[ie][0] === "enter")
          j.push(ie);
        else {
          const Re = j.pop();
          ie = i(T, Re, ie);
        }
    for (ie = -1; ++ie < T.length; ) {
      const Re = t[T[ie][0]];
      Xi.call(Re, T[ie][1].type) && Re[T[ie][1].type].call(Object.assign({
        sliceSerialize: T[ie][2].sliceSerialize
      }, W), T[ie][1]);
    }
    if (W.tokenStack.length > 0) {
      const Re = W.tokenStack[W.tokenStack.length - 1];
      (Re[1] || jr).call(W, void 0, Re[0]);
    }
    for (M.position = {
      start: ot(T.length > 0 ? T[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: ot(T.length > 0 ? T[T.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, ie = -1; ++ie < t.transforms.length; )
      M = t.transforms[ie](M) || M;
    return M;
  }
  function i(T, M, W) {
    let j = M - 1, ie = -1, Re = !1, Qe, Fe, nt, lt;
    for (; ++j <= W; ) {
      const Se = T[j];
      switch (Se[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          Se[0] === "enter" ? ie++ : ie--, lt = void 0;
          break;
        }
        case "lineEndingBlank": {
          Se[0] === "enter" && (Qe && !lt && !ie && !nt && (nt = j), lt = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          lt = void 0;
      }
      if (!ie && Se[0] === "enter" && Se[1].type === "listItemPrefix" || ie === -1 && Se[0] === "exit" && (Se[1].type === "listUnordered" || Se[1].type === "listOrdered")) {
        if (Qe) {
          let rt = j;
          for (Fe = void 0; rt--; ) {
            const Me = T[rt];
            if (Me[1].type === "lineEnding" || Me[1].type === "lineEndingBlank") {
              if (Me[0] === "exit") continue;
              Fe && (T[Fe][1].type = "lineEndingBlank", Re = !0), Me[1].type = "lineEnding", Fe = rt;
            } else if (!(Me[1].type === "linePrefix" || Me[1].type === "blockQuotePrefix" || Me[1].type === "blockQuotePrefixWhitespace" || Me[1].type === "blockQuoteMarker" || Me[1].type === "listItemIndent")) break;
          }
          nt && (!Fe || nt < Fe) && (Qe._spread = !0), Qe.end = Object.assign({}, Fe ? T[Fe][1].start : Se[1].end), T.splice(Fe || j, 0, ["exit", Qe, Se[2]]), j++, W++;
        }
        if (Se[1].type === "listItemPrefix") {
          const rt = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, Se[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          Qe = rt, T.splice(j, 0, ["enter", rt, Se[2]]), j++, W++, nt = void 0, lt = !0;
        }
      }
    }
    return T[M][1]._spread = Re, W;
  }
  function o(T, M) {
    return W;
    function W(j) {
      s.call(this, T(j), j), M && M.call(this, j);
    }
  }
  function a() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function s(T, M, W) {
    this.stack[this.stack.length - 1].children.push(T), this.stack.push(T), this.tokenStack.push([M, W || void 0]), T.position = {
      start: ot(M.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function l(T) {
    return M;
    function M(W) {
      T && T.call(this, W), c.call(this, W);
    }
  }
  function c(T, M) {
    const W = this.stack.pop(), j = this.tokenStack.pop();
    if (j)
      j[0].type !== T.type && (M ? M.call(this, T, j[0]) : (j[1] || jr).call(this, T, j[0]));
    else throw new Error("Cannot close `" + T.type + "` (" + Mt({
      start: T.start,
      end: T.end
    }) + "): it’s not open");
    W.position.end = ot(T.end);
  }
  function d() {
    return ur(this.stack.pop());
  }
  function u() {
    this.data.expectingFirstListItemValue = !0;
  }
  function p(T) {
    if (this.data.expectingFirstListItemValue) {
      const M = this.stack[this.stack.length - 2];
      M.start = Number.parseInt(this.sliceSerialize(T), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function f() {
    const T = this.resume(), M = this.stack[this.stack.length - 1];
    M.lang = T;
  }
  function g() {
    const T = this.resume(), M = this.stack[this.stack.length - 1];
    M.meta = T;
  }
  function m() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function y() {
    const T = this.resume(), M = this.stack[this.stack.length - 1];
    M.value = T.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function h() {
    const T = this.resume(), M = this.stack[this.stack.length - 1];
    M.value = T.replace(/(\r?\n|\r)$/g, "");
  }
  function S(T) {
    const M = this.resume(), W = this.stack[this.stack.length - 1];
    W.label = M, W.identifier = Ue(this.sliceSerialize(T)).toLowerCase();
  }
  function x() {
    const T = this.resume(), M = this.stack[this.stack.length - 1];
    M.title = T;
  }
  function N() {
    const T = this.resume(), M = this.stack[this.stack.length - 1];
    M.url = T;
  }
  function I(T) {
    const M = this.stack[this.stack.length - 1];
    if (!M.depth) {
      const W = this.sliceSerialize(T).length;
      M.depth = W;
    }
  }
  function k() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function A(T) {
    const M = this.stack[this.stack.length - 1];
    M.depth = this.sliceSerialize(T).codePointAt(0) === 61 ? 1 : 2;
  }
  function O() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function L(T) {
    const W = this.stack[this.stack.length - 1].children;
    let j = W[W.length - 1];
    (!j || j.type !== "text") && (j = Xe(), j.position = {
      start: ot(T.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, W.push(j)), this.stack.push(j);
  }
  function w(T) {
    const M = this.stack.pop();
    M.value += this.sliceSerialize(T), M.position.end = ot(T.end);
  }
  function v(T) {
    const M = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const W = M.children[M.children.length - 1];
      W.position.end = ot(T.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(M.type) && (L.call(this, T), w.call(this, T));
  }
  function D() {
    this.data.atHardBreak = !0;
  }
  function K() {
    const T = this.resume(), M = this.stack[this.stack.length - 1];
    M.value = T;
  }
  function q() {
    const T = this.resume(), M = this.stack[this.stack.length - 1];
    M.value = T;
  }
  function $() {
    const T = this.resume(), M = this.stack[this.stack.length - 1];
    M.value = T;
  }
  function ne() {
    const T = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const M = this.data.referenceType || "shortcut";
      T.type += "Reference", T.referenceType = M, delete T.url, delete T.title;
    } else
      delete T.identifier, delete T.label;
    this.data.referenceType = void 0;
  }
  function le() {
    const T = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const M = this.data.referenceType || "shortcut";
      T.type += "Reference", T.referenceType = M, delete T.url, delete T.title;
    } else
      delete T.identifier, delete T.label;
    this.data.referenceType = void 0;
  }
  function V(T) {
    const M = this.sliceSerialize(T), W = this.stack[this.stack.length - 2];
    W.label = $l(M), W.identifier = Ue(M).toLowerCase();
  }
  function ce() {
    const T = this.stack[this.stack.length - 1], M = this.resume(), W = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, W.type === "link") {
      const j = T.children;
      W.children = j;
    } else
      W.alt = M;
  }
  function b() {
    const T = this.resume(), M = this.stack[this.stack.length - 1];
    M.url = T;
  }
  function oe() {
    const T = this.resume(), M = this.stack[this.stack.length - 1];
    M.title = T;
  }
  function ue() {
    this.data.inReference = void 0;
  }
  function E() {
    this.data.referenceType = "collapsed";
  }
  function we(T) {
    const M = this.resume(), W = this.stack[this.stack.length - 1];
    W.label = M, W.identifier = Ue(this.sliceSerialize(T)).toLowerCase(), this.data.referenceType = "full";
  }
  function Be(T) {
    this.data.characterReferenceType = T.type;
  }
  function ge(T) {
    const M = this.sliceSerialize(T), W = this.data.characterReferenceType;
    let j;
    W ? (j = Ui(M, W === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : j = dr(M);
    const ie = this.stack[this.stack.length - 1];
    ie.value += j;
  }
  function We(T) {
    const M = this.stack.pop();
    M.position.end = ot(T.end);
  }
  function Oe(T) {
    w.call(this, T);
    const M = this.stack[this.stack.length - 1];
    M.url = this.sliceSerialize(T);
  }
  function Ye(T) {
    w.call(this, T);
    const M = this.stack[this.stack.length - 1];
    M.url = "mailto:" + this.sliceSerialize(T);
  }
  function ve() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function tt() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function St() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function Nt() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function Tt() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function ht() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function re() {
    return {
      type: "break"
    };
  }
  function Ve() {
    return {
      type: "html",
      value: ""
    };
  }
  function Ze() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function mt() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function At(T) {
    return {
      type: "list",
      ordered: T.type === "listOrdered",
      start: null,
      spread: T._spread,
      children: []
    };
  }
  function yn(T) {
    return {
      type: "listItem",
      spread: T._spread,
      checked: null,
      children: []
    };
  }
  function kn() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function $t() {
    return {
      type: "strong",
      children: []
    };
  }
  function Xe() {
    return {
      type: "text",
      value: ""
    };
  }
  function Ht() {
    return {
      type: "thematicBreak"
    };
  }
}
function ot(e) {
  return {
    line: e.line,
    column: e.column,
    offset: e.offset
  };
}
function Qi(e, t) {
  let n = -1;
  for (; ++n < t.length; ) {
    const r = t[n];
    Array.isArray(r) ? Qi(e, r) : ql(e, r);
  }
}
function ql(e, t) {
  let n;
  for (n in t)
    if (Xi.call(t, n))
      switch (n) {
        case "canContainEols": {
          const r = t[n];
          r && e[n].push(...r);
          break;
        }
        case "transforms": {
          const r = t[n];
          r && e[n].push(...r);
          break;
        }
        case "enter":
        case "exit": {
          const r = t[n];
          r && Object.assign(e[n], r);
          break;
        }
      }
}
function jr(e, t) {
  throw e ? new Error("Cannot close `" + e.type + "` (" + Mt({
    start: e.start,
    end: e.end
  }) + "): a different token (`" + t.type + "`, " + Mt({
    start: t.start,
    end: t.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + t.type + "`, " + Mt({
    start: t.start,
    end: t.end
  }) + ") is still open");
}
function ei(e) {
  const t = this;
  t.parser = n;
  function n(r) {
    return Gl(r, {
      ...t.data("settings"),
      ...e,
      // Note: these options are not in the readme.
      // The goal is for them to be set by plugins on `data` instead of being
      // passed by users.
      extensions: t.data("micromarkExtensions") || [],
      mdastExtensions: t.data("fromMarkdownExtensions") || []
    });
  }
}
function Wl(e, t) {
  const n = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Yl(e, t) {
  const n = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(t, n), [e.applyData(t, n), { type: "text", value: `
` }];
}
function Vl(e, t) {
  const n = t.value ? t.value + `
` : "", r = {};
  t.lang && (r.className = ["language-" + t.lang]);
  let i = {
    type: "element",
    tagName: "code",
    properties: r,
    children: [{ type: "text", value: n }]
  };
  return t.meta && (i.data = { meta: t.meta }), e.patch(t, i), i = e.applyData(t, i), i = { type: "element", tagName: "pre", properties: {}, children: [i] }, e.patch(t, i), i;
}
function Zl(e, t) {
  const n = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Xl(e, t) {
  const n = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Ql(e, t) {
  const n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(t.identifier).toUpperCase(), i = wt(r.toLowerCase()), o = e.footnoteOrder.indexOf(r);
  let a, s = e.footnoteCounts.get(r);
  s === void 0 ? (s = 0, e.footnoteOrder.push(r), a = e.footnoteOrder.length) : a = o + 1, s += 1, e.footnoteCounts.set(r, s);
  const l = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + n + "fn-" + i,
      id: n + "fnref-" + i + (s > 1 ? "-" + s : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"]
    },
    children: [{ type: "text", value: String(a) }]
  };
  e.patch(t, l);
  const c = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [l]
  };
  return e.patch(t, c), e.applyData(t, c);
}
function Jl(e, t) {
  const n = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function jl(e, t) {
  if (e.options.allowDangerousHtml) {
    const n = { type: "raw", value: t.value };
    return e.patch(t, n), e.applyData(t, n);
  }
}
function Ji(e, t) {
  const n = t.referenceType;
  let r = "]";
  if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference")
    return [{ type: "text", value: "![" + t.alt + r }];
  const i = e.all(t), o = i[0];
  o && o.type === "text" ? o.value = "[" + o.value : i.unshift({ type: "text", value: "[" });
  const a = i[i.length - 1];
  return a && a.type === "text" ? a.value += r : i.push({ type: "text", value: r }), i;
}
function ec(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return Ji(e, t);
  const i = { src: wt(r.url || ""), alt: t.alt };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const o = { type: "element", tagName: "img", properties: i, children: [] };
  return e.patch(t, o), e.applyData(t, o);
}
function tc(e, t) {
  const n = { src: wt(t.url) };
  t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = { type: "element", tagName: "img", properties: n, children: [] };
  return e.patch(t, r), e.applyData(t, r);
}
function nc(e, t) {
  const n = { type: "text", value: t.value.replace(/\r?\n|\r/g, " ") };
  e.patch(t, n);
  const r = {
    type: "element",
    tagName: "code",
    properties: {},
    children: [n]
  };
  return e.patch(t, r), e.applyData(t, r);
}
function rc(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return Ji(e, t);
  const i = { href: wt(r.url || "") };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const o = {
    type: "element",
    tagName: "a",
    properties: i,
    children: e.all(t)
  };
  return e.patch(t, o), e.applyData(t, o);
}
function ic(e, t) {
  const n = { href: wt(t.url) };
  t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: n,
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function ac(e, t, n) {
  const r = e.all(t), i = n ? oc(n) : ji(t), o = {}, a = [];
  if (typeof t.checked == "boolean") {
    const d = r[0];
    let u;
    d && d.type === "element" && d.tagName === "p" ? u = d : (u = { type: "element", tagName: "p", properties: {}, children: [] }, r.unshift(u)), u.children.length > 0 && u.children.unshift({ type: "text", value: " " }), u.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: t.checked, disabled: !0 },
      children: []
    }), o.className = ["task-list-item"];
  }
  let s = -1;
  for (; ++s < r.length; ) {
    const d = r[s];
    (i || s !== 0 || d.type !== "element" || d.tagName !== "p") && a.push({ type: "text", value: `
` }), d.type === "element" && d.tagName === "p" && !i ? a.push(...d.children) : a.push(d);
  }
  const l = r[r.length - 1];
  l && (i || l.type !== "element" || l.tagName !== "p") && a.push({ type: "text", value: `
` });
  const c = { type: "element", tagName: "li", properties: o, children: a };
  return e.patch(t, c), e.applyData(t, c);
}
function oc(e) {
  let t = !1;
  if (e.type === "list") {
    t = e.spread || !1;
    const n = e.children;
    let r = -1;
    for (; !t && ++r < n.length; )
      t = ji(n[r]);
  }
  return t;
}
function ji(e) {
  const t = e.spread;
  return t ?? e.children.length > 1;
}
function sc(e, t) {
  const n = {}, r = e.all(t);
  let i = -1;
  for (typeof t.start == "number" && t.start !== 1 && (n.start = t.start); ++i < r.length; ) {
    const a = r[i];
    if (a.type === "element" && a.tagName === "li" && a.properties && Array.isArray(a.properties.className) && a.properties.className.includes("task-list-item")) {
      n.className = ["contains-task-list"];
      break;
    }
  }
  const o = {
    type: "element",
    tagName: t.ordered ? "ol" : "ul",
    properties: n,
    children: e.wrap(r, !0)
  };
  return e.patch(t, o), e.applyData(t, o);
}
function lc(e, t) {
  const n = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function cc(e, t) {
  const n = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, n), e.applyData(t, n);
}
function uc(e, t) {
  const n = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const ea = na("end"), ta = na("start");
function na(e) {
  return t;
  function t(n) {
    const r = n && n.position && n.position[e] || {};
    if (typeof r.line == "number" && r.line > 0 && typeof r.column == "number" && r.column > 0)
      return {
        line: r.line,
        column: r.column,
        offset: typeof r.offset == "number" && r.offset > -1 ? r.offset : void 0
      };
  }
}
function dc(e) {
  const t = ta(e), n = ea(e);
  if (t && n)
    return { start: t, end: n };
}
function fc(e, t) {
  const n = e.all(t), r = n.shift(), i = [];
  if (r) {
    const a = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: e.wrap([r], !0)
    };
    e.patch(t.children[0], a), i.push(a);
  }
  if (n.length > 0) {
    const a = {
      type: "element",
      tagName: "tbody",
      properties: {},
      children: e.wrap(n, !0)
    }, s = ta(t.children[1]), l = ea(t.children[t.children.length - 1]);
    s && l && (a.position = { start: s, end: l }), i.push(a);
  }
  const o = {
    type: "element",
    tagName: "table",
    properties: {},
    children: e.wrap(i, !0)
  };
  return e.patch(t, o), e.applyData(t, o);
}
function pc(e, t, n) {
  const r = n ? n.children : void 0, o = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", a = n && n.type === "table" ? n.align : void 0, s = a ? a.length : t.children.length;
  let l = -1;
  const c = [];
  for (; ++l < s; ) {
    const u = t.children[l], p = {}, f = a ? a[l] : void 0;
    f && (p.align = f);
    let g = { type: "element", tagName: o, properties: p, children: [] };
    u && (g.children = e.all(u), e.patch(u, g), g = e.applyData(u, g)), c.push(g);
  }
  const d = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: e.wrap(c, !0)
  };
  return e.patch(t, d), e.applyData(t, d);
}
function gc(e, t) {
  const n = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const ti = 9, ni = 32;
function hc(e) {
  const t = String(e), n = /\r?\n|\r/g;
  let r = n.exec(t), i = 0;
  const o = [];
  for (; r; )
    o.push(
      ri(t.slice(i, r.index), i > 0, !0),
      r[0]
    ), i = r.index + r[0].length, r = n.exec(t);
  return o.push(ri(t.slice(i), i > 0, !1)), o.join("");
}
function ri(e, t, n) {
  let r = 0, i = e.length;
  if (t) {
    let o = e.codePointAt(r);
    for (; o === ti || o === ni; )
      r++, o = e.codePointAt(r);
  }
  if (n) {
    let o = e.codePointAt(i - 1);
    for (; o === ti || o === ni; )
      i--, o = e.codePointAt(i - 1);
  }
  return i > r ? e.slice(r, i) : "";
}
function mc(e, t) {
  const n = { type: "text", value: hc(String(t.value)) };
  return e.patch(t, n), e.applyData(t, n);
}
function bc(e, t) {
  const n = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(t, n), e.applyData(t, n);
}
const _c = {
  blockquote: Wl,
  break: Yl,
  code: Vl,
  delete: Zl,
  emphasis: Xl,
  footnoteReference: Ql,
  heading: Jl,
  html: jl,
  imageReference: ec,
  image: tc,
  inlineCode: nc,
  linkReference: rc,
  link: ic,
  listItem: ac,
  list: sc,
  paragraph: lc,
  // @ts-expect-error: root is different, but hard to type.
  root: cc,
  strong: uc,
  table: fc,
  tableCell: gc,
  tableRow: pc,
  text: mc,
  thematicBreak: bc,
  toml: Zt,
  yaml: Zt,
  definition: Zt,
  footnoteDefinition: Zt
};
function Zt() {
}
const ra = -1, _n = 0, Lt = 1, un = 2, pr = 3, gr = 4, hr = 5, mr = 6, ia = 7, aa = 8, ii = typeof self == "object" ? self : globalThis, Ec = (e, t) => {
  const n = (i, o) => (e.set(o, i), i), r = (i) => {
    if (e.has(i))
      return e.get(i);
    const [o, a] = t[i];
    switch (o) {
      case _n:
      case ra:
        return n(a, i);
      case Lt: {
        const s = n([], i);
        for (const l of a)
          s.push(r(l));
        return s;
      }
      case un: {
        const s = n({}, i);
        for (const [l, c] of a)
          s[r(l)] = r(c);
        return s;
      }
      case pr:
        return n(new Date(a), i);
      case gr: {
        const { source: s, flags: l } = a;
        return n(new RegExp(s, l), i);
      }
      case hr: {
        const s = n(/* @__PURE__ */ new Map(), i);
        for (const [l, c] of a)
          s.set(r(l), r(c));
        return s;
      }
      case mr: {
        const s = n(/* @__PURE__ */ new Set(), i);
        for (const l of a)
          s.add(r(l));
        return s;
      }
      case ia: {
        const { name: s, message: l } = a;
        return n(new ii[s](l), i);
      }
      case aa:
        return n(BigInt(a), i);
      case "BigInt":
        return n(Object(BigInt(a)), i);
      case "ArrayBuffer":
        return n(new Uint8Array(a).buffer, a);
      case "DataView": {
        const { buffer: s } = new Uint8Array(a);
        return n(new DataView(s), a);
      }
    }
    return n(new ii[o](a), i);
  };
  return r;
}, ai = (e) => Ec(/* @__PURE__ */ new Map(), e)(0), _t = "", { toString: yc } = {}, { keys: kc } = Object, Ot = (e) => {
  const t = typeof e;
  if (t !== "object" || !e)
    return [_n, t];
  const n = yc.call(e).slice(8, -1);
  switch (n) {
    case "Array":
      return [Lt, _t];
    case "Object":
      return [un, _t];
    case "Date":
      return [pr, _t];
    case "RegExp":
      return [gr, _t];
    case "Map":
      return [hr, _t];
    case "Set":
      return [mr, _t];
    case "DataView":
      return [Lt, n];
  }
  return n.includes("Array") ? [Lt, n] : n.includes("Error") ? [ia, n] : [un, n];
}, Xt = ([e, t]) => e === _n && (t === "function" || t === "symbol"), xc = (e, t, n, r) => {
  const i = (a, s) => {
    const l = r.push(a) - 1;
    return n.set(s, l), l;
  }, o = (a) => {
    if (n.has(a))
      return n.get(a);
    let [s, l] = Ot(a);
    switch (s) {
      case _n: {
        let d = a;
        switch (l) {
          case "bigint":
            s = aa, d = a.toString();
            break;
          case "function":
          case "symbol":
            if (e)
              throw new TypeError("unable to serialize " + l);
            d = null;
            break;
          case "undefined":
            return i([ra], a);
        }
        return i([s, d], a);
      }
      case Lt: {
        if (l) {
          let p = a;
          return l === "DataView" ? p = new Uint8Array(a.buffer) : l === "ArrayBuffer" && (p = new Uint8Array(a)), i([l, [...p]], a);
        }
        const d = [], u = i([s, d], a);
        for (const p of a)
          d.push(o(p));
        return u;
      }
      case un: {
        if (l)
          switch (l) {
            case "BigInt":
              return i([l, a.toString()], a);
            case "Boolean":
            case "Number":
            case "String":
              return i([l, a.valueOf()], a);
          }
        if (t && "toJSON" in a)
          return o(a.toJSON());
        const d = [], u = i([s, d], a);
        for (const p of kc(a))
          (e || !Xt(Ot(a[p]))) && d.push([o(p), o(a[p])]);
        return u;
      }
      case pr:
        return i([s, a.toISOString()], a);
      case gr: {
        const { source: d, flags: u } = a;
        return i([s, { source: d, flags: u }], a);
      }
      case hr: {
        const d = [], u = i([s, d], a);
        for (const [p, f] of a)
          (e || !(Xt(Ot(p)) || Xt(Ot(f)))) && d.push([o(p), o(f)]);
        return u;
      }
      case mr: {
        const d = [], u = i([s, d], a);
        for (const p of a)
          (e || !Xt(Ot(p))) && d.push(o(p));
        return u;
      }
    }
    const { message: c } = a;
    return i([s, { name: l, message: c }], a);
  };
  return o;
}, oi = (e, { json: t, lossy: n } = {}) => {
  const r = [];
  return xc(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
}, dn = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (e, t) => t && ("json" in t || "lossy" in t) ? ai(oi(e, t)) : structuredClone(e)
) : (e, t) => ai(oi(e, t));
function wc(e, t) {
  const n = [{ type: "text", value: "↩" }];
  return t > 1 && n.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(t) }]
  }), n;
}
function Sc(e, t) {
  return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function Nc(e) {
  const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || wc, r = e.options.footnoteBackLabel || Sc, i = e.options.footnoteLabel || "Footnotes", o = e.options.footnoteLabelTagName || "h2", a = e.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, s = [];
  let l = -1;
  for (; ++l < e.footnoteOrder.length; ) {
    const c = e.footnoteById.get(
      e.footnoteOrder[l]
    );
    if (!c)
      continue;
    const d = e.all(c), u = String(c.identifier).toUpperCase(), p = wt(u.toLowerCase());
    let f = 0;
    const g = [], m = e.footnoteCounts.get(u);
    for (; m !== void 0 && ++f <= m; ) {
      g.length > 0 && g.push({ type: "text", value: " " });
      let S = typeof n == "string" ? n : n(l, f);
      typeof S == "string" && (S = { type: "text", value: S }), g.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + t + "fnref-" + p + (f > 1 ? "-" + f : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof r == "string" ? r : r(l, f),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(S) ? S : [S]
      });
    }
    const y = d[d.length - 1];
    if (y && y.type === "element" && y.tagName === "p") {
      const S = y.children[y.children.length - 1];
      S && S.type === "text" ? S.value += " " : y.children.push({ type: "text", value: " " }), y.children.push(...g);
    } else
      d.push(...g);
    const h = {
      type: "element",
      tagName: "li",
      properties: { id: t + "fn-" + p },
      children: e.wrap(d, !0)
    };
    e.patch(c, h), s.push(h);
  }
  if (s.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: o,
          properties: {
            ...dn(a),
            id: "footnote-label"
          },
          children: [{ type: "text", value: i }]
        },
        { type: "text", value: `
` },
        {
          type: "element",
          tagName: "ol",
          properties: {},
          children: e.wrap(s, !0)
        },
        { type: "text", value: `
` }
      ]
    };
}
const Ut = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {Check}
   */
  function(e) {
    if (e == null)
      return Ic;
    if (typeof e == "function")
      return En(e);
    if (typeof e == "object")
      return Array.isArray(e) ? Tc(e) : Ac(e);
    if (typeof e == "string")
      return Cc(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function Tc(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = Ut(e[n]);
  return En(r);
  function r(...i) {
    let o = -1;
    for (; ++o < t.length; )
      if (t[o].apply(this, i)) return !0;
    return !1;
  }
}
function Ac(e) {
  const t = (
    /** @type {Record<string, unknown>} */
    e
  );
  return En(n);
  function n(r) {
    const i = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      r
    );
    let o;
    for (o in e)
      if (i[o] !== t[o]) return !1;
    return !0;
  }
}
function Cc(e) {
  return En(t);
  function t(n) {
    return n && n.type === e;
  }
}
function En(e) {
  return t;
  function t(n, r, i) {
    return !!(Oc(n) && e.call(
      this,
      n,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function Ic() {
  return !0;
}
function Oc(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const oa = [], vc = !0, tr = !1, Rc = "skip";
function sa(e, t, n, r) {
  let i;
  typeof t == "function" && typeof n != "function" ? (r = n, n = t) : i = t;
  const o = Ut(i), a = r ? -1 : 1;
  s(e, void 0, [])();
  function s(l, c, d) {
    const u = (
      /** @type {Record<string, unknown>} */
      l && typeof l == "object" ? l : {}
    );
    if (typeof u.type == "string") {
      const f = (
        // `hast`
        typeof u.tagName == "string" ? u.tagName : (
          // `xast`
          typeof u.name == "string" ? u.name : void 0
        )
      );
      Object.defineProperty(p, "name", {
        value: "node (" + (l.type + (f ? "<" + f + ">" : "")) + ")"
      });
    }
    return p;
    function p() {
      let f = oa, g, m, y;
      if ((!t || o(l, c, d[d.length - 1] || void 0)) && (f = Mc(n(l, d)), f[0] === tr))
        return f;
      if ("children" in l && l.children) {
        const h = (
          /** @type {UnistParent} */
          l
        );
        if (h.children && f[0] !== Rc)
          for (m = (r ? h.children.length : -1) + a, y = d.concat(h); m > -1 && m < h.children.length; ) {
            const S = h.children[m];
            if (g = s(S, m, y)(), g[0] === tr)
              return g;
            m = typeof g[1] == "number" ? g[1] : m + a;
          }
      }
      return f;
    }
  }
}
function Mc(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [vc, e] : e == null ? oa : [e];
}
function br(e, t, n, r) {
  let i, o, a;
  typeof t == "function" && typeof n != "function" ? (o = void 0, a = t, i = n) : (o = t, a = n, i = r), sa(e, o, s, i);
  function s(l, c) {
    const d = c[c.length - 1], u = d ? d.children.indexOf(l) : void 0;
    return a(l, u, d);
  }
}
const nr = {}.hasOwnProperty, Dc = {};
function Lc(e, t) {
  const n = t || Dc, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), a = { ..._c, ...n.handlers }, s = {
    all: c,
    applyData: Pc,
    definitionById: r,
    footnoteById: i,
    footnoteCounts: o,
    footnoteOrder: [],
    handlers: a,
    one: l,
    options: n,
    patch: Bc,
    wrap: zc
  };
  return br(e, function(d) {
    if (d.type === "definition" || d.type === "footnoteDefinition") {
      const u = d.type === "definition" ? r : i, p = String(d.identifier).toUpperCase();
      u.has(p) || u.set(p, d);
    }
  }), s;
  function l(d, u) {
    const p = d.type, f = s.handlers[p];
    if (nr.call(s.handlers, p) && f)
      return f(s, d, u);
    if (s.options.passThrough && s.options.passThrough.includes(p)) {
      if ("children" in d) {
        const { children: m, ...y } = d, h = dn(y);
        return h.children = s.all(d), h;
      }
      return dn(d);
    }
    return (s.options.unknownHandler || Fc)(s, d, u);
  }
  function c(d) {
    const u = [];
    if ("children" in d) {
      const p = d.children;
      let f = -1;
      for (; ++f < p.length; ) {
        const g = s.one(p[f], d);
        if (g) {
          if (f && p[f - 1].type === "break" && (!Array.isArray(g) && g.type === "text" && (g.value = si(g.value)), !Array.isArray(g) && g.type === "element")) {
            const m = g.children[0];
            m && m.type === "text" && (m.value = si(m.value));
          }
          Array.isArray(g) ? u.push(...g) : u.push(g);
        }
      }
    }
    return u;
  }
}
function Bc(e, t) {
  e.position && (t.position = dc(e));
}
function Pc(e, t) {
  let n = t;
  if (e && e.data) {
    const r = e.data.hName, i = e.data.hChildren, o = e.data.hProperties;
    if (typeof r == "string")
      if (n.type === "element")
        n.tagName = r;
      else {
        const a = "children" in n ? n.children : [n];
        n = { type: "element", tagName: r, properties: {}, children: a };
      }
    n.type === "element" && o && Object.assign(n.properties, dn(o)), "children" in n && n.children && i !== null && i !== void 0 && (n.children = i);
  }
  return n;
}
function Fc(e, t) {
  const n = t.data || {}, r = "value" in t && !(nr.call(n, "hProperties") || nr.call(n, "hChildren")) ? { type: "text", value: t.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function zc(e, t) {
  const n = [];
  let r = -1;
  for (t && n.push({ type: "text", value: `
` }); ++r < e.length; )
    r && n.push({ type: "text", value: `
` }), n.push(e[r]);
  return t && e.length > 0 && n.push({ type: "text", value: `
` }), n;
}
function si(e) {
  let t = 0, n = e.charCodeAt(t);
  for (; n === 9 || n === 32; )
    t++, n = e.charCodeAt(t);
  return e.slice(t);
}
function li(e, t) {
  const n = Lc(e, t), r = n.one(e, void 0), i = Nc(n), o = Array.isArray(r) ? { type: "root", children: r } : r || { type: "root", children: [] };
  return i && o.children.push({ type: "text", value: `
` }, i), o;
}
function Uc(e, t) {
  return e && "run" in e ? async function(n, r) {
    const i = (
      /** @type {HastRoot} */
      li(n, { file: r, ...t })
    );
    await e.run(i, r);
  } : function(n, r) {
    return (
      /** @type {HastRoot} */
      li(n, { file: r, ...e || t })
    );
  };
}
function ci(e, t) {
  const n = String(e);
  if (typeof t != "string")
    throw new TypeError("Expected character");
  let r = 0, i = n.indexOf(t);
  for (; i !== -1; )
    r++, i = n.indexOf(t, i + t.length);
  return r;
}
function la(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function $c(e, t, n) {
  const i = Ut((n || {}).ignore || []), o = Hc(t);
  let a = -1;
  for (; ++a < o.length; )
    sa(e, "text", s);
  function s(c, d) {
    let u = -1, p;
    for (; ++u < d.length; ) {
      const f = d[u], g = p ? p.children : void 0;
      if (i(
        f,
        g ? g.indexOf(f) : void 0,
        p
      ))
        return;
      p = f;
    }
    if (p)
      return l(c, d);
  }
  function l(c, d) {
    const u = d[d.length - 1], p = o[a][0], f = o[a][1];
    let g = 0;
    const y = u.children.indexOf(c);
    let h = !1, S = [];
    p.lastIndex = 0;
    let x = p.exec(c.value);
    for (; x; ) {
      const N = x.index, I = {
        index: x.index,
        input: x.input,
        stack: [...d, c]
      };
      let k = f(...x, I);
      if (typeof k == "string" && (k = k.length > 0 ? { type: "text", value: k } : void 0), k === !1 ? p.lastIndex = N + 1 : (g !== N && S.push({
        type: "text",
        value: c.value.slice(g, N)
      }), Array.isArray(k) ? S.push(...k) : k && S.push(k), g = N + x[0].length, h = !0), !p.global)
        break;
      x = p.exec(c.value);
    }
    return h ? (g < c.value.length && S.push({ type: "text", value: c.value.slice(g) }), u.children.splice(y, 1, ...S)) : S = [c], y + S.length;
  }
}
function Hc(e) {
  const t = [];
  if (!Array.isArray(e))
    throw new TypeError("Expected find and replace tuple or list of tuples");
  const n = !e[0] || Array.isArray(e[0]) ? e : [e];
  let r = -1;
  for (; ++r < n.length; ) {
    const i = n[r];
    t.push([Gc(i[0]), Kc(i[1])]);
  }
  return t;
}
function Gc(e) {
  return typeof e == "string" ? new RegExp(la(e), "g") : e;
}
function Kc(e) {
  return typeof e == "function" ? e : function() {
    return e;
  };
}
const zn = "phrasing", Un = ["autolink", "link", "image", "label"];
function qc() {
  return {
    transforms: [Jc],
    enter: {
      literalAutolink: Yc,
      literalAutolinkEmail: $n,
      literalAutolinkHttp: $n,
      literalAutolinkWww: $n
    },
    exit: {
      literalAutolink: Qc,
      literalAutolinkEmail: Xc,
      literalAutolinkHttp: Vc,
      literalAutolinkWww: Zc
    }
  };
}
function Wc() {
  return {
    unsafe: [
      {
        character: "@",
        before: "[+\\-.\\w]",
        after: "[\\-.\\w]",
        inConstruct: zn,
        notInConstruct: Un
      },
      {
        character: ".",
        before: "[Ww]",
        after: "[\\-.\\w]",
        inConstruct: zn,
        notInConstruct: Un
      },
      {
        character: ":",
        before: "[ps]",
        after: "\\/",
        inConstruct: zn,
        notInConstruct: Un
      }
    ]
  };
}
function Yc(e) {
  this.enter({ type: "link", title: null, url: "", children: [] }, e);
}
function $n(e) {
  this.config.enter.autolinkProtocol.call(this, e);
}
function Vc(e) {
  this.config.exit.autolinkProtocol.call(this, e);
}
function Zc(e) {
  this.config.exit.data.call(this, e);
  const t = this.stack[this.stack.length - 1];
  t.type, t.url = "http://" + this.sliceSerialize(e);
}
function Xc(e) {
  this.config.exit.autolinkEmail.call(this, e);
}
function Qc(e) {
  this.exit(e);
}
function Jc(e) {
  $c(
    e,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, jc],
      [new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)", "gu"), eu]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function jc(e, t, n, r, i) {
  let o = "";
  if (!ca(i) || (/^w/i.test(t) && (n = t + n, t = "", o = "http://"), !tu(n)))
    return !1;
  const a = nu(n + r);
  if (!a[0]) return !1;
  const s = {
    type: "link",
    title: null,
    url: o + t + a[0],
    children: [{ type: "text", value: t + a[0] }]
  };
  return a[1] ? [s, { type: "text", value: a[1] }] : s;
}
function eu(e, t, n, r) {
  return (
    // Not an expected previous character.
    !ca(r, !0) || // Label ends in not allowed character.
    /[-\d_]$/.test(n) ? !1 : {
      type: "link",
      title: null,
      url: "mailto:" + t + "@" + n,
      children: [{ type: "text", value: t + "@" + n }]
    }
  );
}
function tu(e) {
  const t = e.split(".");
  return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])));
}
function nu(e) {
  const t = /[!"&'),.:;<>?\]}]+$/.exec(e);
  if (!t)
    return [e, void 0];
  e = e.slice(0, t.index);
  let n = t[0], r = n.indexOf(")");
  const i = ci(e, "(");
  let o = ci(e, ")");
  for (; r !== -1 && i > o; )
    e += n.slice(0, r + 1), n = n.slice(r + 1), r = n.indexOf(")"), o++;
  return [e, n];
}
function ca(e, t) {
  const n = e.input.charCodeAt(e.index - 1);
  return (e.index === 0 || pt(n) || mn(n)) && // If it’s an email, the previous character should not be a slash.
  (!t || n !== 47);
}
ua.peek = du;
function ru() {
  this.buffer();
}
function iu(e) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
}
function au() {
  this.buffer();
}
function ou(e) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    e
  );
}
function su(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.type, n.identifier = Ue(
    this.sliceSerialize(e)
  ).toLowerCase(), n.label = t;
}
function lu(e) {
  this.exit(e);
}
function cu(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.type, n.identifier = Ue(
    this.sliceSerialize(e)
  ).toLowerCase(), n.label = t;
}
function uu(e) {
  this.exit(e);
}
function du() {
  return "[";
}
function ua(e, t, n, r) {
  const i = n.createTracker(r);
  let o = i.move("[^");
  const a = n.enter("footnoteReference"), s = n.enter("reference");
  return o += i.move(
    n.safe(n.associationId(e), { after: "]", before: o })
  ), s(), a(), o += i.move("]"), o;
}
function fu() {
  return {
    enter: {
      gfmFootnoteCallString: ru,
      gfmFootnoteCall: iu,
      gfmFootnoteDefinitionLabelString: au,
      gfmFootnoteDefinition: ou
    },
    exit: {
      gfmFootnoteCallString: su,
      gfmFootnoteCall: lu,
      gfmFootnoteDefinitionLabelString: cu,
      gfmFootnoteDefinition: uu
    }
  };
}
function pu(e) {
  let t = !1;
  return e && e.firstLineBlank && (t = !0), {
    handlers: { footnoteDefinition: n, footnoteReference: ua },
    // This is on by default already.
    unsafe: [{ character: "[", inConstruct: ["label", "phrasing", "reference"] }]
  };
  function n(r, i, o, a) {
    const s = o.createTracker(a);
    let l = s.move("[^");
    const c = o.enter("footnoteDefinition"), d = o.enter("label");
    return l += s.move(
      o.safe(o.associationId(r), { before: l, after: "]" })
    ), d(), l += s.move("]:"), r.children && r.children.length > 0 && (s.shift(4), l += s.move(
      (t ? `
` : " ") + o.indentLines(
        o.containerFlow(r, s.current()),
        t ? da : gu
      )
    )), c(), l;
  }
}
function gu(e, t, n) {
  return t === 0 ? e : da(e, t, n);
}
function da(e, t, n) {
  return (n ? "" : "    ") + e;
}
const hu = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
fa.peek = yu;
function mu() {
  return {
    canContainEols: ["delete"],
    enter: { strikethrough: _u },
    exit: { strikethrough: Eu }
  };
}
function bu() {
  return {
    unsafe: [
      {
        character: "~",
        inConstruct: "phrasing",
        notInConstruct: hu
      }
    ],
    handlers: { delete: fa }
  };
}
function _u(e) {
  this.enter({ type: "delete", children: [] }, e);
}
function Eu(e) {
  this.exit(e);
}
function fa(e, t, n, r) {
  const i = n.createTracker(r), o = n.enter("strikethrough");
  let a = i.move("~~");
  return a += n.containerPhrasing(e, {
    ...i.current(),
    before: a,
    after: "~"
  }), a += i.move("~~"), o(), a;
}
function yu() {
  return "~";
}
function ku(e) {
  return e.length;
}
function xu(e, t) {
  const n = t || {}, r = (n.align || []).concat(), i = n.stringLength || ku, o = [], a = [], s = [], l = [];
  let c = 0, d = -1;
  for (; ++d < e.length; ) {
    const m = [], y = [];
    let h = -1;
    for (e[d].length > c && (c = e[d].length); ++h < e[d].length; ) {
      const S = wu(e[d][h]);
      if (n.alignDelimiters !== !1) {
        const x = i(S);
        y[h] = x, (l[h] === void 0 || x > l[h]) && (l[h] = x);
      }
      m.push(S);
    }
    a[d] = m, s[d] = y;
  }
  let u = -1;
  if (typeof r == "object" && "length" in r)
    for (; ++u < c; )
      o[u] = ui(r[u]);
  else {
    const m = ui(r);
    for (; ++u < c; )
      o[u] = m;
  }
  u = -1;
  const p = [], f = [];
  for (; ++u < c; ) {
    const m = o[u];
    let y = "", h = "";
    m === 99 ? (y = ":", h = ":") : m === 108 ? y = ":" : m === 114 && (h = ":");
    let S = n.alignDelimiters === !1 ? 1 : Math.max(
      1,
      l[u] - y.length - h.length
    );
    const x = y + "-".repeat(S) + h;
    n.alignDelimiters !== !1 && (S = y.length + S + h.length, S > l[u] && (l[u] = S), f[u] = S), p[u] = x;
  }
  a.splice(1, 0, p), s.splice(1, 0, f), d = -1;
  const g = [];
  for (; ++d < a.length; ) {
    const m = a[d], y = s[d];
    u = -1;
    const h = [];
    for (; ++u < c; ) {
      const S = m[u] || "";
      let x = "", N = "";
      if (n.alignDelimiters !== !1) {
        const I = l[u] - (y[u] || 0), k = o[u];
        k === 114 ? x = " ".repeat(I) : k === 99 ? I % 2 ? (x = " ".repeat(I / 2 + 0.5), N = " ".repeat(I / 2 - 0.5)) : (x = " ".repeat(I / 2), N = x) : N = " ".repeat(I);
      }
      n.delimiterStart !== !1 && !u && h.push("|"), n.padding !== !1 && // Don’t add the opening space if we’re not aligning and the cell is
      // empty: there will be a closing space.
      !(n.alignDelimiters === !1 && S === "") && (n.delimiterStart !== !1 || u) && h.push(" "), n.alignDelimiters !== !1 && h.push(x), h.push(S), n.alignDelimiters !== !1 && h.push(N), n.padding !== !1 && h.push(" "), (n.delimiterEnd !== !1 || u !== c - 1) && h.push("|");
    }
    g.push(
      n.delimiterEnd === !1 ? h.join("").replace(/ +$/, "") : h.join("")
    );
  }
  return g.join(`
`);
}
function wu(e) {
  return e == null ? "" : String(e);
}
function ui(e) {
  const t = typeof e == "string" ? e.codePointAt(0) : 0;
  return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0;
}
function Su(e, t, n, r) {
  const i = n.enter("blockquote"), o = n.createTracker(r);
  o.move("> "), o.shift(2);
  const a = n.indentLines(
    n.containerFlow(e, o.current()),
    Nu
  );
  return i(), a;
}
function Nu(e, t, n) {
  return ">" + (n ? "" : " ") + e;
}
function Tu(e, t) {
  return di(e, t.inConstruct, !0) && !di(e, t.notInConstruct, !1);
}
function di(e, t, n) {
  if (typeof t == "string" && (t = [t]), !t || t.length === 0)
    return n;
  let r = -1;
  for (; ++r < t.length; )
    if (e.includes(t[r]))
      return !0;
  return !1;
}
function fi(e, t, n, r) {
  let i = -1;
  for (; ++i < n.unsafe.length; )
    if (n.unsafe[i].character === `
` && Tu(n.stack, n.unsafe[i]))
      return /[ \t]/.test(r.before) ? "" : " ";
  return `\\
`;
}
function Au(e, t) {
  const n = String(e);
  let r = n.indexOf(t), i = r, o = 0, a = 0;
  if (typeof t != "string")
    throw new TypeError("Expected substring");
  for (; r !== -1; )
    r === i ? ++o > a && (a = o) : o = 1, i = r + t.length, r = n.indexOf(t, i);
  return a;
}
function Cu(e, t) {
  return !!(t.options.fences === !1 && e.value && // If there’s no info…
  !e.lang && // And there’s a non-whitespace character…
  /[^ \r\n]/.test(e.value) && // And the value doesn’t start or end in a blank…
  !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value));
}
function Iu(e) {
  const t = e.options.fence || "`";
  if (t !== "`" && t !== "~")
    throw new Error(
      "Cannot serialize code with `" + t + "` for `options.fence`, expected `` ` `` or `~`"
    );
  return t;
}
function Ou(e, t, n, r) {
  const i = Iu(n), o = e.value || "", a = i === "`" ? "GraveAccent" : "Tilde";
  if (Cu(e, n)) {
    const u = n.enter("codeIndented"), p = n.indentLines(o, vu);
    return u(), p;
  }
  const s = n.createTracker(r), l = i.repeat(Math.max(Au(o, i) + 1, 3)), c = n.enter("codeFenced");
  let d = s.move(l);
  if (e.lang) {
    const u = n.enter(`codeFencedLang${a}`);
    d += s.move(
      n.safe(e.lang, {
        before: d,
        after: " ",
        encode: ["`"],
        ...s.current()
      })
    ), u();
  }
  if (e.lang && e.meta) {
    const u = n.enter(`codeFencedMeta${a}`);
    d += s.move(" "), d += s.move(
      n.safe(e.meta, {
        before: d,
        after: `
`,
        encode: ["`"],
        ...s.current()
      })
    ), u();
  }
  return d += s.move(`
`), o && (d += s.move(o + `
`)), d += s.move(l), c(), d;
}
function vu(e, t, n) {
  return (n ? "" : "    ") + e;
}
function _r(e) {
  const t = e.options.quote || '"';
  if (t !== '"' && t !== "'")
    throw new Error(
      "Cannot serialize title with `" + t + "` for `options.quote`, expected `\"`, or `'`"
    );
  return t;
}
function Ru(e, t, n, r) {
  const i = _r(n), o = i === '"' ? "Quote" : "Apostrophe", a = n.enter("definition");
  let s = n.enter("label");
  const l = n.createTracker(r);
  let c = l.move("[");
  return c += l.move(
    n.safe(n.associationId(e), {
      before: c,
      after: "]",
      ...l.current()
    })
  ), c += l.move("]: "), s(), // If there’s no url, or…
  !e.url || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (s = n.enter("destinationLiteral"), c += l.move("<"), c += l.move(
    n.safe(e.url, { before: c, after: ">", ...l.current() })
  ), c += l.move(">")) : (s = n.enter("destinationRaw"), c += l.move(
    n.safe(e.url, {
      before: c,
      after: e.title ? " " : `
`,
      ...l.current()
    })
  )), s(), e.title && (s = n.enter(`title${o}`), c += l.move(" " + i), c += l.move(
    n.safe(e.title, {
      before: c,
      after: i,
      ...l.current()
    })
  ), c += l.move(i), s()), a(), c;
}
function Mu(e) {
  const t = e.options.emphasis || "*";
  if (t !== "*" && t !== "_")
    throw new Error(
      "Cannot serialize emphasis with `" + t + "` for `options.emphasis`, expected `*`, or `_`"
    );
  return t;
}
function Bt(e) {
  return "&#x" + e.toString(16).toUpperCase() + ";";
}
function fn(e, t, n) {
  const r = xt(e), i = xt(t);
  return r === void 0 ? i === void 0 ? (
    // Letter inside:
    // we have to encode *both* letters for `_` as it is looser.
    // it already forms for `*` (and GFMs `~`).
    n === "_" ? { inside: !0, outside: !0 } : { inside: !1, outside: !1 }
  ) : i === 1 ? (
    // Whitespace inside: encode both (letter, whitespace).
    { inside: !0, outside: !0 }
  ) : (
    // Punctuation inside: encode outer (letter)
    { inside: !1, outside: !0 }
  ) : r === 1 ? i === void 0 ? (
    // Letter inside: already forms.
    { inside: !1, outside: !1 }
  ) : i === 1 ? (
    // Whitespace inside: encode both (whitespace).
    { inside: !0, outside: !0 }
  ) : (
    // Punctuation inside: already forms.
    { inside: !1, outside: !1 }
  ) : i === void 0 ? (
    // Letter inside: already forms.
    { inside: !1, outside: !1 }
  ) : i === 1 ? (
    // Whitespace inside: encode inner (whitespace).
    { inside: !0, outside: !1 }
  ) : (
    // Punctuation inside: already forms.
    { inside: !1, outside: !1 }
  );
}
pa.peek = Du;
function pa(e, t, n, r) {
  const i = Mu(n), o = n.enter("emphasis"), a = n.createTracker(r), s = a.move(i);
  let l = a.move(
    n.containerPhrasing(e, {
      after: i,
      before: s,
      ...a.current()
    })
  );
  const c = l.charCodeAt(0), d = fn(
    r.before.charCodeAt(r.before.length - 1),
    c,
    i
  );
  d.inside && (l = Bt(c) + l.slice(1));
  const u = l.charCodeAt(l.length - 1), p = fn(r.after.charCodeAt(0), u, i);
  p.inside && (l = l.slice(0, -1) + Bt(u));
  const f = a.move(i);
  return o(), n.attentionEncodeSurroundingInfo = {
    after: p.outside,
    before: d.outside
  }, s + l + f;
}
function Du(e, t, n) {
  return n.options.emphasis || "*";
}
function Lu(e, t) {
  let n = !1;
  return br(e, function(r) {
    if ("value" in r && /\r?\n|\r/.test(r.value) || r.type === "break")
      return n = !0, tr;
  }), !!((!e.depth || e.depth < 3) && ur(e) && (t.options.setext || n));
}
function Bu(e, t, n, r) {
  const i = Math.max(Math.min(6, e.depth || 1), 1), o = n.createTracker(r);
  if (Lu(e, n)) {
    const d = n.enter("headingSetext"), u = n.enter("phrasing"), p = n.containerPhrasing(e, {
      ...o.current(),
      before: `
`,
      after: `
`
    });
    return u(), d(), p + `
` + (i === 1 ? "=" : "-").repeat(
      // The whole size…
      p.length - // Minus the position of the character after the last EOL (or
      // 0 if there is none)…
      (Math.max(p.lastIndexOf("\r"), p.lastIndexOf(`
`)) + 1)
    );
  }
  const a = "#".repeat(i), s = n.enter("headingAtx"), l = n.enter("phrasing");
  o.move(a + " ");
  let c = n.containerPhrasing(e, {
    before: "# ",
    after: `
`,
    ...o.current()
  });
  return /^[\t ]/.test(c) && (c = Bt(c.charCodeAt(0)) + c.slice(1)), c = c ? a + " " + c : a, n.options.closeAtx && (c += " " + a), l(), s(), c;
}
ga.peek = Pu;
function ga(e) {
  return e.value || "";
}
function Pu() {
  return "<";
}
ha.peek = Fu;
function ha(e, t, n, r) {
  const i = _r(n), o = i === '"' ? "Quote" : "Apostrophe", a = n.enter("image");
  let s = n.enter("label");
  const l = n.createTracker(r);
  let c = l.move("![");
  return c += l.move(
    n.safe(e.alt, { before: c, after: "]", ...l.current() })
  ), c += l.move("]("), s(), // If there’s no url but there is a title…
  !e.url && e.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (s = n.enter("destinationLiteral"), c += l.move("<"), c += l.move(
    n.safe(e.url, { before: c, after: ">", ...l.current() })
  ), c += l.move(">")) : (s = n.enter("destinationRaw"), c += l.move(
    n.safe(e.url, {
      before: c,
      after: e.title ? " " : ")",
      ...l.current()
    })
  )), s(), e.title && (s = n.enter(`title${o}`), c += l.move(" " + i), c += l.move(
    n.safe(e.title, {
      before: c,
      after: i,
      ...l.current()
    })
  ), c += l.move(i), s()), c += l.move(")"), a(), c;
}
function Fu() {
  return "!";
}
ma.peek = zu;
function ma(e, t, n, r) {
  const i = e.referenceType, o = n.enter("imageReference");
  let a = n.enter("label");
  const s = n.createTracker(r);
  let l = s.move("![");
  const c = n.safe(e.alt, {
    before: l,
    after: "]",
    ...s.current()
  });
  l += s.move(c + "]["), a();
  const d = n.stack;
  n.stack = [], a = n.enter("reference");
  const u = n.safe(n.associationId(e), {
    before: l,
    after: "]",
    ...s.current()
  });
  return a(), n.stack = d, o(), i === "full" || !c || c !== u ? l += s.move(u + "]") : i === "shortcut" ? l = l.slice(0, -1) : l += s.move("]"), l;
}
function zu() {
  return "!";
}
ba.peek = Uu;
function ba(e, t, n) {
  let r = e.value || "", i = "`", o = -1;
  for (; new RegExp("(^|[^`])" + i + "([^`]|$)").test(r); )
    i += "`";
  for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++o < n.unsafe.length; ) {
    const a = n.unsafe[o], s = n.compilePattern(a);
    let l;
    if (a.atBreak)
      for (; l = s.exec(r); ) {
        let c = l.index;
        r.charCodeAt(c) === 10 && r.charCodeAt(c - 1) === 13 && c--, r = r.slice(0, c) + " " + r.slice(l.index + 1);
      }
  }
  return i + r + i;
}
function Uu() {
  return "`";
}
function _a(e, t) {
  const n = ur(e);
  return !!(!t.options.resourceLink && // If there’s a url…
  e.url && // And there’s a no title…
  !e.title && // And the content of `node` is a single text node…
  e.children && e.children.length === 1 && e.children[0].type === "text" && // And if the url is the same as the content…
  (n === e.url || "mailto:" + n === e.url) && // And that starts w/ a protocol…
  /^[a-z][a-z+.-]+:/i.test(e.url) && // And that doesn’t contain ASCII control codes (character escapes and
  // references don’t work), space, or angle brackets…
  !/[\0- <>\u007F]/.test(e.url));
}
Ea.peek = $u;
function Ea(e, t, n, r) {
  const i = _r(n), o = i === '"' ? "Quote" : "Apostrophe", a = n.createTracker(r);
  let s, l;
  if (_a(e, n)) {
    const d = n.stack;
    n.stack = [], s = n.enter("autolink");
    let u = a.move("<");
    return u += a.move(
      n.containerPhrasing(e, {
        before: u,
        after: ">",
        ...a.current()
      })
    ), u += a.move(">"), s(), n.stack = d, u;
  }
  s = n.enter("link"), l = n.enter("label");
  let c = a.move("[");
  return c += a.move(
    n.containerPhrasing(e, {
      before: c,
      after: "](",
      ...a.current()
    })
  ), c += a.move("]("), l(), // If there’s no url but there is a title…
  !e.url && e.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (l = n.enter("destinationLiteral"), c += a.move("<"), c += a.move(
    n.safe(e.url, { before: c, after: ">", ...a.current() })
  ), c += a.move(">")) : (l = n.enter("destinationRaw"), c += a.move(
    n.safe(e.url, {
      before: c,
      after: e.title ? " " : ")",
      ...a.current()
    })
  )), l(), e.title && (l = n.enter(`title${o}`), c += a.move(" " + i), c += a.move(
    n.safe(e.title, {
      before: c,
      after: i,
      ...a.current()
    })
  ), c += a.move(i), l()), c += a.move(")"), s(), c;
}
function $u(e, t, n) {
  return _a(e, n) ? "<" : "[";
}
ya.peek = Hu;
function ya(e, t, n, r) {
  const i = e.referenceType, o = n.enter("linkReference");
  let a = n.enter("label");
  const s = n.createTracker(r);
  let l = s.move("[");
  const c = n.containerPhrasing(e, {
    before: l,
    after: "]",
    ...s.current()
  });
  l += s.move(c + "]["), a();
  const d = n.stack;
  n.stack = [], a = n.enter("reference");
  const u = n.safe(n.associationId(e), {
    before: l,
    after: "]",
    ...s.current()
  });
  return a(), n.stack = d, o(), i === "full" || !c || c !== u ? l += s.move(u + "]") : i === "shortcut" ? l = l.slice(0, -1) : l += s.move("]"), l;
}
function Hu() {
  return "[";
}
function Er(e) {
  const t = e.options.bullet || "*";
  if (t !== "*" && t !== "+" && t !== "-")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  return t;
}
function Gu(e) {
  const t = Er(e), n = e.options.bulletOther;
  if (!n)
    return t === "*" ? "-" : "*";
  if (n !== "*" && n !== "+" && n !== "-")
    throw new Error(
      "Cannot serialize items with `" + n + "` for `options.bulletOther`, expected `*`, `+`, or `-`"
    );
  if (n === t)
    throw new Error(
      "Expected `bullet` (`" + t + "`) and `bulletOther` (`" + n + "`) to be different"
    );
  return n;
}
function Ku(e) {
  const t = e.options.bulletOrdered || ".";
  if (t !== "." && t !== ")")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bulletOrdered`, expected `.` or `)`"
    );
  return t;
}
function ka(e) {
  const t = e.options.rule || "*";
  if (t !== "*" && t !== "-" && t !== "_")
    throw new Error(
      "Cannot serialize rules with `" + t + "` for `options.rule`, expected `*`, `-`, or `_`"
    );
  return t;
}
function qu(e, t, n, r) {
  const i = n.enter("list"), o = n.bulletCurrent;
  let a = e.ordered ? Ku(n) : Er(n);
  const s = e.ordered ? a === "." ? ")" : "." : Gu(n);
  let l = t && n.bulletLastUsed ? a === n.bulletLastUsed : !1;
  if (!e.ordered) {
    const d = e.children ? e.children[0] : void 0;
    if (
      // Bullet could be used as a thematic break marker:
      (a === "*" || a === "-") && // Empty first list item:
      d && (!d.children || !d.children[0]) && // Directly in two other list items:
      n.stack[n.stack.length - 1] === "list" && n.stack[n.stack.length - 2] === "listItem" && n.stack[n.stack.length - 3] === "list" && n.stack[n.stack.length - 4] === "listItem" && // That are each the first child.
      n.indexStack[n.indexStack.length - 1] === 0 && n.indexStack[n.indexStack.length - 2] === 0 && n.indexStack[n.indexStack.length - 3] === 0 && (l = !0), ka(n) === a && d
    ) {
      let u = -1;
      for (; ++u < e.children.length; ) {
        const p = e.children[u];
        if (p && p.type === "listItem" && p.children && p.children[0] && p.children[0].type === "thematicBreak") {
          l = !0;
          break;
        }
      }
    }
  }
  l && (a = s), n.bulletCurrent = a;
  const c = n.containerFlow(e, r);
  return n.bulletLastUsed = a, n.bulletCurrent = o, i(), c;
}
function Wu(e) {
  const t = e.options.listItemIndent || "one";
  if (t !== "tab" && t !== "one" && t !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return t;
}
function Yu(e, t, n, r) {
  const i = Wu(n);
  let o = n.bulletCurrent || Er(n);
  t && t.type === "list" && t.ordered && (o = (typeof t.start == "number" && t.start > -1 ? t.start : 1) + (n.options.incrementListMarker === !1 ? 0 : t.children.indexOf(e)) + o);
  let a = o.length + 1;
  (i === "tab" || i === "mixed" && (t && t.type === "list" && t.spread || e.spread)) && (a = Math.ceil(a / 4) * 4);
  const s = n.createTracker(r);
  s.move(o + " ".repeat(a - o.length)), s.shift(a);
  const l = n.enter("listItem"), c = n.indentLines(
    n.containerFlow(e, s.current()),
    d
  );
  return l(), c;
  function d(u, p, f) {
    return p ? (f ? "" : " ".repeat(a)) + u : (f ? o : o + " ".repeat(a - o.length)) + u;
  }
}
function Vu(e, t, n, r) {
  const i = n.enter("paragraph"), o = n.enter("phrasing"), a = n.containerPhrasing(e, r);
  return o(), i(), a;
}
const Zu = (
  /** @type {(node?: unknown) => node is Exclude<PhrasingContent, Html>} */
  Ut([
    "break",
    "delete",
    "emphasis",
    // To do: next major: removed since footnotes were added to GFM.
    "footnote",
    "footnoteReference",
    "image",
    "imageReference",
    "inlineCode",
    // Enabled by `mdast-util-math`:
    "inlineMath",
    "link",
    "linkReference",
    // Enabled by `mdast-util-mdx`:
    "mdxJsxTextElement",
    // Enabled by `mdast-util-mdx`:
    "mdxTextExpression",
    "strong",
    "text",
    // Enabled by `mdast-util-directive`:
    "textDirective"
  ])
);
function Xu(e, t, n, r) {
  return (e.children.some(function(a) {
    return Zu(a);
  }) ? n.containerPhrasing : n.containerFlow).call(n, e, r);
}
function Qu(e) {
  const t = e.options.strong || "*";
  if (t !== "*" && t !== "_")
    throw new Error(
      "Cannot serialize strong with `" + t + "` for `options.strong`, expected `*`, or `_`"
    );
  return t;
}
xa.peek = Ju;
function xa(e, t, n, r) {
  const i = Qu(n), o = n.enter("strong"), a = n.createTracker(r), s = a.move(i + i);
  let l = a.move(
    n.containerPhrasing(e, {
      after: i,
      before: s,
      ...a.current()
    })
  );
  const c = l.charCodeAt(0), d = fn(
    r.before.charCodeAt(r.before.length - 1),
    c,
    i
  );
  d.inside && (l = Bt(c) + l.slice(1));
  const u = l.charCodeAt(l.length - 1), p = fn(r.after.charCodeAt(0), u, i);
  p.inside && (l = l.slice(0, -1) + Bt(u));
  const f = a.move(i + i);
  return o(), n.attentionEncodeSurroundingInfo = {
    after: p.outside,
    before: d.outside
  }, s + l + f;
}
function Ju(e, t, n) {
  return n.options.strong || "*";
}
function ju(e, t, n, r) {
  return n.safe(e.value, r);
}
function ed(e) {
  const t = e.options.ruleRepetition || 3;
  if (t < 3)
    throw new Error(
      "Cannot serialize rules with repetition `" + t + "` for `options.ruleRepetition`, expected `3` or more"
    );
  return t;
}
function td(e, t, n) {
  const r = (ka(n) + (n.options.ruleSpaces ? " " : "")).repeat(ed(n));
  return n.options.ruleSpaces ? r.slice(0, -1) : r;
}
const wa = {
  blockquote: Su,
  break: fi,
  code: Ou,
  definition: Ru,
  emphasis: pa,
  hardBreak: fi,
  heading: Bu,
  html: ga,
  image: ha,
  imageReference: ma,
  inlineCode: ba,
  link: Ea,
  linkReference: ya,
  list: qu,
  listItem: Yu,
  paragraph: Vu,
  root: Xu,
  strong: xa,
  text: ju,
  thematicBreak: td
};
function nd() {
  return {
    enter: {
      table: rd,
      tableData: pi,
      tableHeader: pi,
      tableRow: ad
    },
    exit: {
      codeText: od,
      table: id,
      tableData: Hn,
      tableHeader: Hn,
      tableRow: Hn
    }
  };
}
function rd(e) {
  const t = e._align;
  this.enter(
    {
      type: "table",
      align: t.map(function(n) {
        return n === "none" ? null : n;
      }),
      children: []
    },
    e
  ), this.data.inTable = !0;
}
function id(e) {
  this.exit(e), this.data.inTable = void 0;
}
function ad(e) {
  this.enter({ type: "tableRow", children: [] }, e);
}
function Hn(e) {
  this.exit(e);
}
function pi(e) {
  this.enter({ type: "tableCell", children: [] }, e);
}
function od(e) {
  let t = this.resume();
  this.data.inTable && (t = t.replace(/\\([\\|])/g, sd));
  const n = this.stack[this.stack.length - 1];
  n.type, n.value = t, this.exit(e);
}
function sd(e, t) {
  return t === "|" ? t : e;
}
function ld(e) {
  const t = e || {}, n = t.tableCellPadding, r = t.tablePipeAlign, i = t.stringLength, o = n ? " " : "|";
  return {
    unsafe: [
      { character: "\r", inConstruct: "tableCell" },
      { character: `
`, inConstruct: "tableCell" },
      // A pipe, when followed by a tab or space (padding), or a dash or colon
      // (unpadded delimiter row), could result in a table.
      { atBreak: !0, character: "|", after: "[	 :-]" },
      // A pipe in a cell must be encoded.
      { character: "|", inConstruct: "tableCell" },
      // A colon must be followed by a dash, in which case it could start a
      // delimiter row.
      { atBreak: !0, character: ":", after: "-" },
      // A delimiter row can also start with a dash, when followed by more
      // dashes, a colon, or a pipe.
      // This is a stricter version than the built in check for lists, thematic
      // breaks, and setex heading underlines though:
      // <https://github.com/syntax-tree/mdast-util-to-markdown/blob/51a2038/lib/unsafe.js#L57>
      { atBreak: !0, character: "-", after: "[:|-]" }
    ],
    handlers: {
      inlineCode: p,
      table: a,
      tableCell: l,
      tableRow: s
    }
  };
  function a(f, g, m, y) {
    return c(d(f, m, y), f.align);
  }
  function s(f, g, m, y) {
    const h = u(f, m, y), S = c([h]);
    return S.slice(0, S.indexOf(`
`));
  }
  function l(f, g, m, y) {
    const h = m.enter("tableCell"), S = m.enter("phrasing"), x = m.containerPhrasing(f, {
      ...y,
      before: o,
      after: o
    });
    return S(), h(), x;
  }
  function c(f, g) {
    return xu(f, {
      align: g,
      // @ts-expect-error: `markdown-table` types should support `null`.
      alignDelimiters: r,
      // @ts-expect-error: `markdown-table` types should support `null`.
      padding: n,
      // @ts-expect-error: `markdown-table` types should support `null`.
      stringLength: i
    });
  }
  function d(f, g, m) {
    const y = f.children;
    let h = -1;
    const S = [], x = g.enter("table");
    for (; ++h < y.length; )
      S[h] = u(y[h], g, m);
    return x(), S;
  }
  function u(f, g, m) {
    const y = f.children;
    let h = -1;
    const S = [], x = g.enter("tableRow");
    for (; ++h < y.length; )
      S[h] = l(y[h], f, g, m);
    return x(), S;
  }
  function p(f, g, m) {
    let y = wa.inlineCode(f, g, m);
    return m.stack.includes("tableCell") && (y = y.replace(/\|/g, "\\$&")), y;
  }
}
function cd() {
  return {
    exit: {
      taskListCheckValueChecked: gi,
      taskListCheckValueUnchecked: gi,
      paragraph: dd
    }
  };
}
function ud() {
  return {
    unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
    handlers: { listItem: fd }
  };
}
function gi(e) {
  const t = this.stack[this.stack.length - 2];
  t.type, t.checked = e.type === "taskListCheckValueChecked";
}
function dd(e) {
  const t = this.stack[this.stack.length - 2];
  if (t && t.type === "listItem" && typeof t.checked == "boolean") {
    const n = this.stack[this.stack.length - 1];
    n.type;
    const r = n.children[0];
    if (r && r.type === "text") {
      const i = t.children;
      let o = -1, a;
      for (; ++o < i.length; ) {
        const s = i[o];
        if (s.type === "paragraph") {
          a = s;
          break;
        }
      }
      a === n && (r.value = r.value.slice(1), r.value.length === 0 ? n.children.shift() : n.position && r.position && typeof r.position.start.offset == "number" && (r.position.start.column++, r.position.start.offset++, n.position.start = Object.assign({}, r.position.start)));
    }
  }
  this.exit(e);
}
function fd(e, t, n, r) {
  const i = e.children[0], o = typeof e.checked == "boolean" && i && i.type === "paragraph", a = "[" + (e.checked ? "x" : " ") + "] ", s = n.createTracker(r);
  o && s.move(a);
  let l = wa.listItem(e, t, n, {
    ...r,
    ...s.current()
  });
  return o && (l = l.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, c)), l;
  function c(d) {
    return d + a;
  }
}
function pd() {
  return [
    qc(),
    fu(),
    mu(),
    nd(),
    cd()
  ];
}
function gd(e) {
  return {
    extensions: [
      Wc(),
      pu(e),
      bu(),
      ld(e),
      ud()
    ]
  };
}
const hd = {
  tokenize: kd,
  partial: !0
}, Sa = {
  tokenize: xd,
  partial: !0
}, Na = {
  tokenize: wd,
  partial: !0
}, Ta = {
  tokenize: Sd,
  partial: !0
}, md = {
  tokenize: Nd,
  partial: !0
}, Aa = {
  name: "wwwAutolink",
  tokenize: Ed,
  previous: Ia
}, Ca = {
  name: "protocolAutolink",
  tokenize: yd,
  previous: Oa
}, et = {
  name: "emailAutolink",
  tokenize: _d,
  previous: va
}, qe = {};
function bd() {
  return {
    text: qe
  };
}
let ut = 48;
for (; ut < 123; )
  qe[ut] = et, ut++, ut === 58 ? ut = 65 : ut === 91 && (ut = 97);
qe[43] = et;
qe[45] = et;
qe[46] = et;
qe[95] = et;
qe[72] = [et, Ca];
qe[104] = [et, Ca];
qe[87] = [et, Aa];
qe[119] = [et, Aa];
function _d(e, t, n) {
  const r = this;
  let i, o;
  return a;
  function a(u) {
    return !rr(u) || !va.call(r, r.previous) || yr(r.events) ? n(u) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), s(u));
  }
  function s(u) {
    return rr(u) ? (e.consume(u), s) : u === 64 ? (e.consume(u), l) : n(u);
  }
  function l(u) {
    return u === 46 ? e.check(md, d, c)(u) : u === 45 || u === 95 || xe(u) ? (o = !0, e.consume(u), l) : d(u);
  }
  function c(u) {
    return e.consume(u), i = !0, l;
  }
  function d(u) {
    return o && i && Te(r.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(u)) : n(u);
  }
}
function Ed(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return a !== 87 && a !== 119 || !Ia.call(r, r.previous) || yr(r.events) ? n(a) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(hd, e.attempt(Sa, e.attempt(Na, o), n), n)(a));
  }
  function o(a) {
    return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(a);
  }
}
function yd(e, t, n) {
  const r = this;
  let i = "", o = !1;
  return a;
  function a(u) {
    return (u === 72 || u === 104) && Oa.call(r, r.previous) && !yr(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), i += String.fromCodePoint(u), e.consume(u), s) : n(u);
  }
  function s(u) {
    if (Te(u) && i.length < 5)
      return i += String.fromCodePoint(u), e.consume(u), s;
    if (u === 58) {
      const p = i.toLowerCase();
      if (p === "http" || p === "https")
        return e.consume(u), l;
    }
    return n(u);
  }
  function l(u) {
    return u === 47 ? (e.consume(u), o ? c : (o = !0, l)) : n(u);
  }
  function c(u) {
    return u === null || cn(u) || de(u) || pt(u) || mn(u) ? n(u) : e.attempt(Sa, e.attempt(Na, d), n)(u);
  }
  function d(u) {
    return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(u);
  }
}
function kd(e, t, n) {
  let r = 0;
  return i;
  function i(a) {
    return (a === 87 || a === 119) && r < 3 ? (r++, e.consume(a), i) : a === 46 && r === 3 ? (e.consume(a), o) : n(a);
  }
  function o(a) {
    return a === null ? n(a) : t(a);
  }
}
function xd(e, t, n) {
  let r, i, o;
  return a;
  function a(c) {
    return c === 46 || c === 95 ? e.check(Ta, l, s)(c) : c === null || de(c) || pt(c) || c !== 45 && mn(c) ? l(c) : (o = !0, e.consume(c), a);
  }
  function s(c) {
    return c === 95 ? r = !0 : (i = r, r = void 0), e.consume(c), a;
  }
  function l(c) {
    return i || r || !o ? n(c) : t(c);
  }
}
function wd(e, t) {
  let n = 0, r = 0;
  return i;
  function i(a) {
    return a === 40 ? (n++, e.consume(a), i) : a === 41 && r < n ? o(a) : a === 33 || a === 34 || a === 38 || a === 39 || a === 41 || a === 42 || a === 44 || a === 46 || a === 58 || a === 59 || a === 60 || a === 63 || a === 93 || a === 95 || a === 126 ? e.check(Ta, t, o)(a) : a === null || de(a) || pt(a) ? t(a) : (e.consume(a), i);
  }
  function o(a) {
    return a === 41 && r++, e.consume(a), i;
  }
}
function Sd(e, t, n) {
  return r;
  function r(s) {
    return s === 33 || s === 34 || s === 39 || s === 41 || s === 42 || s === 44 || s === 46 || s === 58 || s === 59 || s === 63 || s === 95 || s === 126 ? (e.consume(s), r) : s === 38 ? (e.consume(s), o) : s === 93 ? (e.consume(s), i) : (
      // `<` is an end.
      s === 60 || // So is whitespace.
      s === null || de(s) || pt(s) ? t(s) : n(s)
    );
  }
  function i(s) {
    return s === null || s === 40 || s === 91 || de(s) || pt(s) ? t(s) : r(s);
  }
  function o(s) {
    return Te(s) ? a(s) : n(s);
  }
  function a(s) {
    return s === 59 ? (e.consume(s), r) : Te(s) ? (e.consume(s), a) : n(s);
  }
}
function Nd(e, t, n) {
  return r;
  function r(o) {
    return e.consume(o), i;
  }
  function i(o) {
    return xe(o) ? n(o) : t(o);
  }
}
function Ia(e) {
  return e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || de(e);
}
function Oa(e) {
  return !Te(e);
}
function va(e) {
  return !(e === 47 || rr(e));
}
function rr(e) {
  return e === 43 || e === 45 || e === 46 || e === 95 || xe(e);
}
function yr(e) {
  let t = e.length, n = !1;
  for (; t--; ) {
    const r = e[t][1];
    if ((r.type === "labelLink" || r.type === "labelImage") && !r._balanced) {
      n = !0;
      break;
    }
    if (r._gfmAutolinkLiteralWalkedInto) {
      n = !1;
      break;
    }
  }
  return e.length > 0 && !n && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), n;
}
const Td = {
  tokenize: Dd,
  partial: !0
};
function Ad() {
  return {
    document: {
      91: {
        name: "gfmFootnoteDefinition",
        tokenize: vd,
        continuation: {
          tokenize: Rd
        },
        exit: Md
      }
    },
    text: {
      91: {
        name: "gfmFootnoteCall",
        tokenize: Od
      },
      93: {
        name: "gfmPotentialFootnoteCall",
        add: "after",
        tokenize: Cd,
        resolveTo: Id
      }
    }
  };
}
function Cd(e, t, n) {
  const r = this;
  let i = r.events.length;
  const o = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let a;
  for (; i--; ) {
    const l = r.events[i][1];
    if (l.type === "labelImage") {
      a = l;
      break;
    }
    if (l.type === "gfmFootnoteCall" || l.type === "labelLink" || l.type === "label" || l.type === "image" || l.type === "link")
      break;
  }
  return s;
  function s(l) {
    if (!a || !a._balanced)
      return n(l);
    const c = Ue(r.sliceSerialize({
      start: a.end,
      end: r.now()
    }));
    return c.codePointAt(0) !== 94 || !o.includes(c.slice(1)) ? n(l) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(l), e.exit("gfmFootnoteCallLabelMarker"), t(l));
  }
}
function Id(e, t) {
  let n = e.length;
  for (; n--; )
    if (e[n][1].type === "labelImage" && e[n][0] === "enter") {
      e[n][1];
      break;
    }
  e[n + 1][1].type = "data", e[n + 3][1].type = "gfmFootnoteCallLabelMarker";
  const r = {
    type: "gfmFootnoteCall",
    start: Object.assign({}, e[n + 3][1].start),
    end: Object.assign({}, e[e.length - 1][1].end)
  }, i = {
    type: "gfmFootnoteCallMarker",
    start: Object.assign({}, e[n + 3][1].end),
    end: Object.assign({}, e[n + 3][1].end)
  };
  i.end.column++, i.end.offset++, i.end._bufferIndex++;
  const o = {
    type: "gfmFootnoteCallString",
    start: Object.assign({}, i.end),
    end: Object.assign({}, e[e.length - 1][1].start)
  }, a = {
    type: "chunkString",
    contentType: "string",
    start: Object.assign({}, o.start),
    end: Object.assign({}, o.end)
  }, s = [
    // Take the `labelImageMarker` (now `data`, the `!`)
    e[n + 1],
    e[n + 2],
    ["enter", r, t],
    // The `[`
    e[n + 3],
    e[n + 4],
    // The `^`.
    ["enter", i, t],
    ["exit", i, t],
    // Everything in between.
    ["enter", o, t],
    ["enter", a, t],
    ["exit", a, t],
    ["exit", o, t],
    // The ending (`]`, properly parsed and labelled).
    e[e.length - 2],
    e[e.length - 1],
    ["exit", r, t]
  ];
  return e.splice(n, e.length - n + 1, ...s), e;
}
function Od(e, t, n) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let o = 0, a;
  return s;
  function s(u) {
    return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(u), e.exit("gfmFootnoteCallLabelMarker"), l;
  }
  function l(u) {
    return u !== 94 ? n(u) : (e.enter("gfmFootnoteCallMarker"), e.consume(u), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), e.enter("chunkString").contentType = "string", c);
  }
  function c(u) {
    if (
      // Too long.
      o > 999 || // Closing brace with nothing.
      u === 93 && !a || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      u === null || u === 91 || de(u)
    )
      return n(u);
    if (u === 93) {
      e.exit("chunkString");
      const p = e.exit("gfmFootnoteCallString");
      return i.includes(Ue(r.sliceSerialize(p))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(u), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(u);
    }
    return de(u) || (a = !0), o++, e.consume(u), u === 92 ? d : c;
  }
  function d(u) {
    return u === 91 || u === 92 || u === 93 ? (e.consume(u), o++, c) : c(u);
  }
}
function vd(e, t, n) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let o, a = 0, s;
  return l;
  function l(g) {
    return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(g), e.exit("gfmFootnoteDefinitionLabelMarker"), c;
  }
  function c(g) {
    return g === 94 ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(g), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), e.enter("chunkString").contentType = "string", d) : n(g);
  }
  function d(g) {
    if (
      // Too long.
      a > 999 || // Closing brace with nothing.
      g === 93 && !s || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      g === null || g === 91 || de(g)
    )
      return n(g);
    if (g === 93) {
      e.exit("chunkString");
      const m = e.exit("gfmFootnoteDefinitionLabelString");
      return o = Ue(r.sliceSerialize(m)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(g), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), p;
    }
    return de(g) || (s = !0), a++, e.consume(g), g === 92 ? u : d;
  }
  function u(g) {
    return g === 91 || g === 92 || g === 93 ? (e.consume(g), a++, d) : d(g);
  }
  function p(g) {
    return g === 58 ? (e.enter("definitionMarker"), e.consume(g), e.exit("definitionMarker"), i.includes(o) || i.push(o), te(e, f, "gfmFootnoteDefinitionWhitespace")) : n(g);
  }
  function f(g) {
    return t(g);
  }
}
function Rd(e, t, n) {
  return e.check(zt, t, e.attempt(Td, t, n));
}
function Md(e) {
  e.exit("gfmFootnoteDefinition");
}
function Dd(e, t, n) {
  const r = this;
  return te(e, i, "gfmFootnoteDefinitionIndent", 5);
  function i(o) {
    const a = r.events[r.events.length - 1];
    return a && a[1].type === "gfmFootnoteDefinitionIndent" && a[2].sliceSerialize(a[1], !0).length === 4 ? t(o) : n(o);
  }
}
function Ld(e) {
  let n = (e || {}).singleTilde;
  const r = {
    name: "strikethrough",
    tokenize: o,
    resolveAll: i
  };
  return n == null && (n = !0), {
    text: {
      126: r
    },
    insideSpan: {
      null: [r]
    },
    attentionMarkers: {
      null: [126]
    }
  };
  function i(a, s) {
    let l = -1;
    for (; ++l < a.length; )
      if (a[l][0] === "enter" && a[l][1].type === "strikethroughSequenceTemporary" && a[l][1]._close) {
        let c = l;
        for (; c--; )
          if (a[c][0] === "exit" && a[c][1].type === "strikethroughSequenceTemporary" && a[c][1]._open && // If the sizes are the same:
          a[l][1].end.offset - a[l][1].start.offset === a[c][1].end.offset - a[c][1].start.offset) {
            a[l][1].type = "strikethroughSequence", a[c][1].type = "strikethroughSequence";
            const d = {
              type: "strikethrough",
              start: Object.assign({}, a[c][1].start),
              end: Object.assign({}, a[l][1].end)
            }, u = {
              type: "strikethroughText",
              start: Object.assign({}, a[c][1].end),
              end: Object.assign({}, a[l][1].start)
            }, p = [["enter", d, s], ["enter", a[c][1], s], ["exit", a[c][1], s], ["enter", u, s]], f = s.parser.constructs.insideSpan.null;
            f && Le(p, p.length, 0, bn(f, a.slice(c + 1, l), s)), Le(p, p.length, 0, [["exit", u, s], ["enter", a[l][1], s], ["exit", a[l][1], s], ["exit", d, s]]), Le(a, c - 1, l - c + 3, p), l = c + p.length - 2;
            break;
          }
      }
    for (l = -1; ++l < a.length; )
      a[l][1].type === "strikethroughSequenceTemporary" && (a[l][1].type = "data");
    return a;
  }
  function o(a, s, l) {
    const c = this.previous, d = this.events;
    let u = 0;
    return p;
    function p(g) {
      return c === 126 && d[d.length - 1][1].type !== "characterEscape" ? l(g) : (a.enter("strikethroughSequenceTemporary"), f(g));
    }
    function f(g) {
      const m = xt(c);
      if (g === 126)
        return u > 1 ? l(g) : (a.consume(g), u++, f);
      if (u < 2 && !n) return l(g);
      const y = a.exit("strikethroughSequenceTemporary"), h = xt(g);
      return y._open = !h || h === 2 && !!m, y._close = !m || m === 2 && !!h, s(g);
    }
  }
}
class Bd {
  /**
   * Create a new edit map.
   */
  constructor() {
    this.map = [];
  }
  /**
   * Create an edit: a remove and/or add at a certain place.
   *
   * @param {number} index
   * @param {number} remove
   * @param {Array<Event>} add
   * @returns {undefined}
   */
  add(t, n, r) {
    Pd(this, t, n, r);
  }
  // To do: add this when moving to `micromark`.
  // /**
  //  * Create an edit: but insert `add` before existing additions.
  //  *
  //  * @param {number} index
  //  * @param {number} remove
  //  * @param {Array<Event>} add
  //  * @returns {undefined}
  //  */
  // addBefore(index, remove, add) {
  //   addImplementation(this, index, remove, add, true)
  // }
  /**
   * Done, change the events.
   *
   * @param {Array<Event>} events
   * @returns {undefined}
   */
  consume(t) {
    if (this.map.sort(function(o, a) {
      return o[0] - a[0];
    }), this.map.length === 0)
      return;
    let n = this.map.length;
    const r = [];
    for (; n > 0; )
      n -= 1, r.push(t.slice(this.map[n][0] + this.map[n][1]), this.map[n][2]), t.length = this.map[n][0];
    r.push(t.slice()), t.length = 0;
    let i = r.pop();
    for (; i; ) {
      for (const o of i)
        t.push(o);
      i = r.pop();
    }
    this.map.length = 0;
  }
}
function Pd(e, t, n, r) {
  let i = 0;
  if (!(n === 0 && r.length === 0)) {
    for (; i < e.map.length; ) {
      if (e.map[i][0] === t) {
        e.map[i][1] += n, e.map[i][2].push(...r);
        return;
      }
      i += 1;
    }
    e.map.push([t, n, r]);
  }
}
function Fd(e, t) {
  let n = !1;
  const r = [];
  for (; t < e.length; ) {
    const i = e[t];
    if (n) {
      if (i[0] === "enter")
        i[1].type === "tableContent" && r.push(e[t + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
      else if (i[1].type === "tableContent") {
        if (e[t - 1][1].type === "tableDelimiterMarker") {
          const o = r.length - 1;
          r[o] = r[o] === "left" ? "center" : "right";
        }
      } else if (i[1].type === "tableDelimiterRow")
        break;
    } else i[0] === "enter" && i[1].type === "tableDelimiterRow" && (n = !0);
    t += 1;
  }
  return r;
}
function zd() {
  return {
    flow: {
      null: {
        name: "table",
        tokenize: Ud,
        resolveAll: $d
      }
    }
  };
}
function Ud(e, t, n) {
  const r = this;
  let i = 0, o = 0, a;
  return s;
  function s(w) {
    let v = r.events.length - 1;
    for (; v > -1; ) {
      const q = r.events[v][1].type;
      if (q === "lineEnding" || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
      q === "linePrefix") v--;
      else break;
    }
    const D = v > -1 ? r.events[v][1].type : null, K = D === "tableHead" || D === "tableRow" ? k : l;
    return K === k && r.parser.lazy[r.now().line] ? n(w) : K(w);
  }
  function l(w) {
    return e.enter("tableHead"), e.enter("tableRow"), c(w);
  }
  function c(w) {
    return w === 124 || (a = !0, o += 1), d(w);
  }
  function d(w) {
    return w === null ? n(w) : H(w) ? o > 1 ? (o = 0, r.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(w), e.exit("lineEnding"), f) : n(w) : Q(w) ? te(e, d, "whitespace")(w) : (o += 1, a && (a = !1, i += 1), w === 124 ? (e.enter("tableCellDivider"), e.consume(w), e.exit("tableCellDivider"), a = !0, d) : (e.enter("data"), u(w)));
  }
  function u(w) {
    return w === null || w === 124 || de(w) ? (e.exit("data"), d(w)) : (e.consume(w), w === 92 ? p : u);
  }
  function p(w) {
    return w === 92 || w === 124 ? (e.consume(w), u) : u(w);
  }
  function f(w) {
    return r.interrupt = !1, r.parser.lazy[r.now().line] ? n(w) : (e.enter("tableDelimiterRow"), a = !1, Q(w) ? te(e, g, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(w) : g(w));
  }
  function g(w) {
    return w === 45 || w === 58 ? y(w) : w === 124 ? (a = !0, e.enter("tableCellDivider"), e.consume(w), e.exit("tableCellDivider"), m) : I(w);
  }
  function m(w) {
    return Q(w) ? te(e, y, "whitespace")(w) : y(w);
  }
  function y(w) {
    return w === 58 ? (o += 1, a = !0, e.enter("tableDelimiterMarker"), e.consume(w), e.exit("tableDelimiterMarker"), h) : w === 45 ? (o += 1, h(w)) : w === null || H(w) ? N(w) : I(w);
  }
  function h(w) {
    return w === 45 ? (e.enter("tableDelimiterFiller"), S(w)) : I(w);
  }
  function S(w) {
    return w === 45 ? (e.consume(w), S) : w === 58 ? (a = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(w), e.exit("tableDelimiterMarker"), x) : (e.exit("tableDelimiterFiller"), x(w));
  }
  function x(w) {
    return Q(w) ? te(e, N, "whitespace")(w) : N(w);
  }
  function N(w) {
    return w === 124 ? g(w) : w === null || H(w) ? !a || i !== o ? I(w) : (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(w)) : I(w);
  }
  function I(w) {
    return n(w);
  }
  function k(w) {
    return e.enter("tableRow"), A(w);
  }
  function A(w) {
    return w === 124 ? (e.enter("tableCellDivider"), e.consume(w), e.exit("tableCellDivider"), A) : w === null || H(w) ? (e.exit("tableRow"), t(w)) : Q(w) ? te(e, A, "whitespace")(w) : (e.enter("data"), O(w));
  }
  function O(w) {
    return w === null || w === 124 || de(w) ? (e.exit("data"), A(w)) : (e.consume(w), w === 92 ? L : O);
  }
  function L(w) {
    return w === 92 || w === 124 ? (e.consume(w), O) : O(w);
  }
}
function $d(e, t) {
  let n = -1, r = !0, i = 0, o = [0, 0, 0, 0], a = [0, 0, 0, 0], s = !1, l = 0, c, d, u;
  const p = new Bd();
  for (; ++n < e.length; ) {
    const f = e[n], g = f[1];
    f[0] === "enter" ? g.type === "tableHead" ? (s = !1, l !== 0 && (hi(p, t, l, c, d), d = void 0, l = 0), c = {
      type: "table",
      start: Object.assign({}, g.start),
      // Note: correct end is set later.
      end: Object.assign({}, g.end)
    }, p.add(n, 0, [["enter", c, t]])) : g.type === "tableRow" || g.type === "tableDelimiterRow" ? (r = !0, u = void 0, o = [0, 0, 0, 0], a = [0, n + 1, 0, 0], s && (s = !1, d = {
      type: "tableBody",
      start: Object.assign({}, g.start),
      // Note: correct end is set later.
      end: Object.assign({}, g.end)
    }, p.add(n, 0, [["enter", d, t]])), i = g.type === "tableDelimiterRow" ? 2 : d ? 3 : 1) : i && (g.type === "data" || g.type === "tableDelimiterMarker" || g.type === "tableDelimiterFiller") ? (r = !1, a[2] === 0 && (o[1] !== 0 && (a[0] = a[1], u = Qt(p, t, o, i, void 0, u), o = [0, 0, 0, 0]), a[2] = n)) : g.type === "tableCellDivider" && (r ? r = !1 : (o[1] !== 0 && (a[0] = a[1], u = Qt(p, t, o, i, void 0, u)), o = a, a = [o[1], n, 0, 0])) : g.type === "tableHead" ? (s = !0, l = n) : g.type === "tableRow" || g.type === "tableDelimiterRow" ? (l = n, o[1] !== 0 ? (a[0] = a[1], u = Qt(p, t, o, i, n, u)) : a[1] !== 0 && (u = Qt(p, t, a, i, n, u)), i = 0) : i && (g.type === "data" || g.type === "tableDelimiterMarker" || g.type === "tableDelimiterFiller") && (a[3] = n);
  }
  for (l !== 0 && hi(p, t, l, c, d), p.consume(t.events), n = -1; ++n < t.events.length; ) {
    const f = t.events[n];
    f[0] === "enter" && f[1].type === "table" && (f[1]._align = Fd(t.events, n));
  }
  return e;
}
function Qt(e, t, n, r, i, o) {
  const a = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData", s = "tableContent";
  n[0] !== 0 && (o.end = Object.assign({}, Et(t.events, n[0])), e.add(n[0], 0, [["exit", o, t]]));
  const l = Et(t.events, n[1]);
  if (o = {
    type: a,
    start: Object.assign({}, l),
    // Note: correct end is set later.
    end: Object.assign({}, l)
  }, e.add(n[1], 0, [["enter", o, t]]), n[2] !== 0) {
    const c = Et(t.events, n[2]), d = Et(t.events, n[3]), u = {
      type: s,
      start: Object.assign({}, c),
      end: Object.assign({}, d)
    };
    if (e.add(n[2], 0, [["enter", u, t]]), r !== 2) {
      const p = t.events[n[2]], f = t.events[n[3]];
      if (p[1].end = Object.assign({}, f[1].end), p[1].type = "chunkText", p[1].contentType = "text", n[3] > n[2] + 1) {
        const g = n[2] + 1, m = n[3] - n[2] - 1;
        e.add(g, m, []);
      }
    }
    e.add(n[3] + 1, 0, [["exit", u, t]]);
  }
  return i !== void 0 && (o.end = Object.assign({}, Et(t.events, i)), e.add(i, 0, [["exit", o, t]]), o = void 0), o;
}
function hi(e, t, n, r, i) {
  const o = [], a = Et(t.events, n);
  i && (i.end = Object.assign({}, a), o.push(["exit", i, t])), r.end = Object.assign({}, a), o.push(["exit", r, t]), e.add(n + 1, 0, o);
}
function Et(e, t) {
  const n = e[t], r = n[0] === "enter" ? "start" : "end";
  return n[1][r];
}
const Hd = {
  name: "tasklistCheck",
  tokenize: Kd
};
function Gd() {
  return {
    text: {
      91: Hd
    }
  };
}
function Kd(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return (
      // Exit if there’s stuff before.
      r.previous !== null || // Exit if not in the first content that is the first child of a list
      // item.
      !r._gfmTasklistFirstContentOfListItem ? n(l) : (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(l), e.exit("taskListCheckMarker"), o)
    );
  }
  function o(l) {
    return de(l) ? (e.enter("taskListCheckValueUnchecked"), e.consume(l), e.exit("taskListCheckValueUnchecked"), a) : l === 88 || l === 120 ? (e.enter("taskListCheckValueChecked"), e.consume(l), e.exit("taskListCheckValueChecked"), a) : n(l);
  }
  function a(l) {
    return l === 93 ? (e.enter("taskListCheckMarker"), e.consume(l), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), s) : n(l);
  }
  function s(l) {
    return H(l) ? t(l) : Q(l) ? e.check({
      tokenize: qd
    }, t, n)(l) : n(l);
  }
}
function qd(e, t, n) {
  return te(e, r, "whitespace");
  function r(i) {
    return i === null ? n(i) : t(i);
  }
}
function Wd(e) {
  return zi([
    bd(),
    Ad(),
    Ld(e),
    zd(),
    Gd()
  ]);
}
const Yd = {};
function Vd(e) {
  const t = (
    /** @type {Processor<Root>} */
    this
  ), n = e || Yd, r = t.data(), i = r.micromarkExtensions || (r.micromarkExtensions = []), o = r.fromMarkdownExtensions || (r.fromMarkdownExtensions = []), a = r.toMarkdownExtensions || (r.toMarkdownExtensions = []);
  i.push(Wd(n)), o.push(pd()), a.push(gd(n));
}
var Gn = { exports: {} }, mi;
function Zd() {
  return mi || (mi = 1, function(e) {
    (function() {
      var t;
      t = e.exports = i, t.format = i, t.vsprintf = r, typeof console < "u" && typeof console.log == "function" && (t.printf = n);
      function n() {
        console.log(i.apply(null, arguments));
      }
      function r(o, a) {
        return i.apply(null, [o].concat(a));
      }
      function i(o) {
        for (var a = 1, s = [].slice.call(arguments), l = 0, c = o.length, d = "", u, p = !1, f, g, m = !1, y, h = function() {
          return s[a++];
        }, S = function() {
          for (var x = ""; /\d/.test(o[l]); )
            x += o[l++], u = o[l];
          return x.length > 0 ? parseInt(x) : null;
        }; l < c; ++l)
          if (u = o[l], p)
            switch (p = !1, u == "." ? (m = !1, u = o[++l]) : u == "0" && o[l + 1] == "." ? (m = !0, l += 2, u = o[l]) : m = !0, y = S(), u) {
              case "b":
                d += parseInt(h(), 10).toString(2);
                break;
              case "c":
                f = h(), typeof f == "string" || f instanceof String ? d += f : d += String.fromCharCode(parseInt(f, 10));
                break;
              case "d":
                d += parseInt(h(), 10);
                break;
              case "f":
                g = String(parseFloat(h()).toFixed(y || 6)), d += m ? g : g.replace(/^0/, "");
                break;
              case "j":
                d += JSON.stringify(h());
                break;
              case "o":
                d += "0" + parseInt(h(), 10).toString(8);
                break;
              case "s":
                d += h();
                break;
              case "x":
                d += "0x" + parseInt(h(), 10).toString(16);
                break;
              case "X":
                d += "0x" + parseInt(h(), 10).toString(16).toUpperCase();
                break;
              default:
                d += u;
                break;
            }
          else u === "%" ? p = !0 : d += u;
        return d;
      }
    })();
  }(Gn)), Gn.exports;
}
var Xd = Zd();
const Qd = /* @__PURE__ */ lr(Xd), Jt = Object.assign(dt(Error), {
  eval: dt(EvalError),
  range: dt(RangeError),
  reference: dt(ReferenceError),
  syntax: dt(SyntaxError),
  type: dt(TypeError),
  uri: dt(URIError)
});
function dt(e) {
  return t.displayName = e.displayName || e.name, t;
  function t(n, ...r) {
    const i = n && Qd(n, ...r);
    return new e(i);
  }
}
const jt = {}.hasOwnProperty, bi = {
  yaml: "-",
  toml: "+"
};
function kr(e) {
  const t = [];
  let n = -1;
  const r = Array.isArray(e) ? e : e ? [e] : ["yaml"];
  for (; ++n < r.length; )
    t[n] = Jd(r[n]);
  return t;
}
function Jd(e) {
  let t = e;
  if (typeof t == "string") {
    if (!jt.call(bi, t))
      throw Jt("Missing matter definition for `%s`", t);
    t = {
      type: t,
      marker: bi[t]
    };
  } else if (typeof t != "object")
    throw Jt("Expected matter to be an object, not `%j`", t);
  if (!jt.call(t, "type"))
    throw Jt("Missing `type` in matter `%j`", t);
  if (!jt.call(t, "fence") && !jt.call(t, "marker"))
    throw Jt("Missing `marker` or `fence` in matter `%j`", t);
  return t;
}
function jd(e) {
  const t = kr(e), n = {};
  let r = -1;
  for (; ++r < t.length; ) {
    const i = t[r], o = ir(i, "open").charCodeAt(0), a = ef(i), s = n[o];
    Array.isArray(s) ? s.push(a) : n[o] = [a];
  }
  return {
    flow: n
  };
}
function ef(e) {
  const t = e.anywhere, n = (
    /** @type {TokenType} */
    e.type
  ), r = (
    /** @type {TokenType} */
    n + "Fence"
  ), i = (
    /** @type {TokenType} */
    r + "Sequence"
  ), o = (
    /** @type {TokenType} */
    n + "Value"
  ), a = {
    tokenize: d,
    partial: !0
  };
  let s, l = 0;
  return {
    tokenize: c,
    concrete: !0
  };
  function c(u, p, f) {
    const g = this;
    return m;
    function m(A) {
      const O = g.now();
      return (
        // Indent not allowed.
        O.column === 1 && // Normally, only allowed in first line.
        (O.line === 1 || t) && (s = ir(e, "open"), l = 0, A === s.charCodeAt(l)) ? (u.enter(n), u.enter(r), u.enter(i), y(A)) : f(A)
      );
    }
    function y(A) {
      return l === s.length ? (u.exit(i), Q(A) ? (u.enter("whitespace"), h(A)) : S(A)) : A === s.charCodeAt(l++) ? (u.consume(A), y) : f(A);
    }
    function h(A) {
      return Q(A) ? (u.consume(A), h) : (u.exit("whitespace"), S(A));
    }
    function S(A) {
      return H(A) ? (u.exit(r), u.enter("lineEnding"), u.consume(A), u.exit("lineEnding"), s = ir(e, "close"), l = 0, u.attempt(a, k, x)) : f(A);
    }
    function x(A) {
      return A === null || H(A) ? I(A) : (u.enter(o), N(A));
    }
    function N(A) {
      return A === null || H(A) ? (u.exit(o), I(A)) : (u.consume(A), N);
    }
    function I(A) {
      return A === null ? f(A) : (u.enter("lineEnding"), u.consume(A), u.exit("lineEnding"), u.attempt(a, k, x));
    }
    function k(A) {
      return u.exit(n), p(A);
    }
  }
  function d(u, p, f) {
    let g = 0;
    return m;
    function m(x) {
      return x === s.charCodeAt(g) ? (u.enter(r), u.enter(i), y(x)) : f(x);
    }
    function y(x) {
      return g === s.length ? (u.exit(i), Q(x) ? (u.enter("whitespace"), h(x)) : S(x)) : x === s.charCodeAt(g++) ? (u.consume(x), y) : f(x);
    }
    function h(x) {
      return Q(x) ? (u.consume(x), h) : (u.exit("whitespace"), S(x));
    }
    function S(x) {
      return x === null || H(x) ? (u.exit(r), p(x)) : f(x);
    }
  }
}
function ir(e, t) {
  return e.marker ? _i(e.marker, t).repeat(3) : (
    // @ts-expect-error: They’re mutually exclusive.
    _i(e.fence, t)
  );
}
function _i(e, t) {
  return typeof e == "string" ? e : e[t];
}
function tf(e) {
  const t = kr(e), n = {}, r = {};
  let i = -1;
  for (; ++i < t.length; ) {
    const o = t[i];
    n[o.type] = nf(o), r[o.type] = rf, r[o.type + "Value"] = af;
  }
  return { enter: n, exit: r };
}
function nf(e) {
  return t;
  function t(n) {
    this.enter({ type: e.type, value: "" }, n), this.buffer();
  }
}
function rf(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  this.exit(e), n.value = t.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "");
}
function af(e) {
  this.config.enter.data.call(this, e), this.config.exit.data.call(this, e);
}
function of(e) {
  const t = [], n = {}, r = kr(e);
  let i = -1;
  for (; ++i < r.length; ) {
    const o = r[i];
    n[o.type] = sf(o);
    const a = ar(o, "open");
    t.push({
      atBreak: !0,
      character: a.charAt(0),
      after: la(a.charAt(1))
    });
  }
  return { unsafe: t, handlers: n };
}
function sf(e) {
  const t = ar(e, "open"), n = ar(e, "close");
  return r;
  function r(i) {
    return t + (i.value ? `
` + i.value : "") + `
` + n;
  }
}
function ar(e, t) {
  return e.marker ? Ei(e.marker, t).repeat(3) : (
    // @ts-expect-error: They’re mutually exclusive.
    Ei(e.fence, t)
  );
}
function Ei(e, t) {
  return typeof e == "string" ? e : e[t];
}
const lf = "yaml";
function cf(e) {
  const t = (
    /** @type {Processor} */
    this
  ), n = e || lf, r = t.data(), i = r.micromarkExtensions || (r.micromarkExtensions = []), o = r.fromMarkdownExtensions || (r.fromMarkdownExtensions = []), a = r.toMarkdownExtensions || (r.toMarkdownExtensions = []);
  i.push(jd(n)), o.push(tf(n)), a.push(of(n));
}
const yi = (
  // Note: overloads like this are needed to support optional generics.
  /**
   * @type {(
   *   (<Kind extends UnistParent, Check extends Test>(parent: Kind, index: Child<Kind> | number, test: Check) => Matches<Child<Kind>, Check> | undefined) &
   *   (<Kind extends UnistParent>(parent: Kind, index: Child<Kind> | number, test?: null | undefined) => Child<Kind> | undefined)
   * )}
   */
  /**
   * @param {UnistParent} parent
   * @param {UnistNode | number} index
   * @param {Test} [test]
   * @returns {UnistNode | undefined}
   */
  function(e, t, n) {
    const r = Ut(n);
    if (!e || !e.type || !e.children)
      throw new Error("Expected parent node");
    if (typeof t == "number") {
      if (t < 0 || t === Number.POSITIVE_INFINITY)
        throw new Error("Expected positive finite number as index");
    } else if (t = e.children.indexOf(t), t < 0)
      throw new Error("Expected child node or index");
    for (; ++t < e.children.length; )
      if (r(e.children[t], t, e))
        return e.children[t];
  }
), gt = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends TestFunction>(test: Condition) => (element: unknown, index?: number | null | undefined, parent?: Parents | null | undefined, context?: unknown) => element is Element & Predicate<Condition, Element>) &
   *   (<Condition extends string>(test: Condition) => (element: unknown, index?: number | null | undefined, parent?: Parents | null | undefined, context?: unknown) => element is Element & {tagName: Condition}) &
   *   ((test?: null | undefined) => (element?: unknown, index?: number | null | undefined, parent?: Parents | null | undefined, context?: unknown) => element is Element) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test | null | undefined} [test]
   * @returns {Check}
   */
  function(e) {
    if (e == null)
      return ff;
    if (typeof e == "string")
      return df(e);
    if (typeof e == "object")
      return uf(e);
    if (typeof e == "function")
      return xr(e);
    throw new Error("Expected function, string, or array as `test`");
  }
);
function uf(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = gt(e[n]);
  return xr(r);
  function r(...i) {
    let o = -1;
    for (; ++o < t.length; )
      if (t[o].apply(this, i)) return !0;
    return !1;
  }
}
function df(e) {
  return xr(t);
  function t(n) {
    return n.tagName === e;
  }
}
function xr(e) {
  return t;
  function t(n, r, i) {
    return !!(pf(n) && e.call(
      this,
      n,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function ff(e) {
  return !!(e && typeof e == "object" && "type" in e && e.type === "element" && "tagName" in e && typeof e.tagName == "string");
}
function pf(e) {
  return e !== null && typeof e == "object" && "type" in e && "tagName" in e;
}
const ki = /\n/g, xi = /[\t ]+/g, or = gt("br"), wi = gt(kf), gf = gt("p"), Si = gt("tr"), hf = gt([
  // List from: <https://html.spec.whatwg.org/multipage/rendering.html#hidden-elements>
  "datalist",
  "head",
  "noembed",
  "noframes",
  "noscript",
  // Act as if we support scripting.
  "rp",
  "script",
  "style",
  "template",
  "title",
  // Hidden attribute.
  yf,
  // From: <https://html.spec.whatwg.org/multipage/rendering.html#flow-content-3>
  xf
]), Ra = gt([
  "address",
  // Flow content
  "article",
  // Sections and headings
  "aside",
  // Sections and headings
  "blockquote",
  // Flow content
  "body",
  // Page
  "caption",
  // `table-caption`
  "center",
  // Flow content (legacy)
  "dd",
  // Lists
  "dialog",
  // Flow content
  "dir",
  // Lists (legacy)
  "dl",
  // Lists
  "dt",
  // Lists
  "div",
  // Flow content
  "figure",
  // Flow content
  "figcaption",
  // Flow content
  "footer",
  // Flow content
  "form,",
  // Flow content
  "h1",
  // Sections and headings
  "h2",
  // Sections and headings
  "h3",
  // Sections and headings
  "h4",
  // Sections and headings
  "h5",
  // Sections and headings
  "h6",
  // Sections and headings
  "header",
  // Flow content
  "hgroup",
  // Sections and headings
  "hr",
  // Flow content
  "html",
  // Page
  "legend",
  // Flow content
  "li",
  // Lists (as `display: list-item`)
  "listing",
  // Flow content (legacy)
  "main",
  // Flow content
  "menu",
  // Lists
  "nav",
  // Sections and headings
  "ol",
  // Lists
  "p",
  // Flow content
  "plaintext",
  // Flow content (legacy)
  "pre",
  // Flow content
  "section",
  // Sections and headings
  "ul",
  // Lists
  "xmp"
  // Flow content (legacy)
]);
function mf(e, t) {
  const n = t || {}, r = "children" in e ? e.children : [], i = Ra(e), o = La(e, {
    whitespace: n.whitespace || "normal"
  }), a = [];
  (e.type === "text" || e.type === "comment") && a.push(
    ...Da(e, {
      breakBefore: !0,
      breakAfter: !0
    })
  );
  let s = -1;
  for (; ++s < r.length; )
    a.push(
      ...Ma(
        r[s],
        // @ts-expect-error: `tree` is a parent if we’re here.
        e,
        {
          whitespace: o,
          breakBefore: s ? void 0 : i,
          breakAfter: s < r.length - 1 ? or(r[s + 1]) : i
        }
      )
    );
  const l = [];
  let c;
  for (s = -1; ++s < a.length; ) {
    const d = a[s];
    typeof d == "number" ? c !== void 0 && d > c && (c = d) : d && (c !== void 0 && c > -1 && l.push(`
`.repeat(c) || " "), c = -1, l.push(d));
  }
  return l.join("");
}
function Ma(e, t, n) {
  return e.type === "element" ? bf(e, t, n) : e.type === "text" ? n.whitespace === "normal" ? Da(e, n) : _f(e) : [];
}
function bf(e, t, n) {
  const r = La(e, n), i = e.children || [];
  let o = -1, a = [];
  if (hf(e))
    return a;
  let s, l;
  for (or(e) || Si(e) && // @ts-expect-error: something up with types of parents.
  yi(t, e, Si) ? l = `
` : gf(e) ? (s = 2, l = 2) : Ra(e) && (s = 1, l = 1); ++o < i.length; )
    a = a.concat(
      Ma(i[o], e, {
        whitespace: r,
        breakBefore: o ? void 0 : s,
        breakAfter: o < i.length - 1 ? or(i[o + 1]) : l
      })
    );
  return wi(e) && // @ts-expect-error: something up with types of parents.
  yi(t, e, wi) && a.push("	"), s && a.unshift(s), l && a.push(l), a;
}
function Da(e, t) {
  const n = String(e.value), r = [], i = [];
  let o = 0;
  for (; o <= n.length; ) {
    ki.lastIndex = o;
    const l = ki.exec(n), c = l && "index" in l ? l.index : n.length;
    r.push(
      // Any sequence of collapsible spaces and tabs immediately preceding or
      // following a segment break is removed.
      Ef(
        // […] ignoring bidi formatting characters (characters with the
        // Bidi_Control property [UAX9]: ALM, LTR, RTL, LRE-RLO, LRI-PDI) as if
        // they were not there.
        n.slice(o, c).replace(/[\u061C\u200E\u200F\u202A-\u202E\u2066-\u2069]/g, ""),
        o === 0 ? t.breakBefore : !0,
        c === n.length ? t.breakAfter : !0
      )
    ), o = c + 1;
  }
  let a = -1, s;
  for (; ++a < r.length; )
    r[a].charCodeAt(r[a].length - 1) === 8203 || a < r.length - 1 && r[a + 1].charCodeAt(0) === 8203 ? (i.push(r[a]), s = void 0) : r[a] ? (typeof s == "number" && i.push(s), i.push(r[a]), s = 0) : (a === 0 || a === r.length - 1) && i.push(0);
  return i;
}
function _f(e) {
  return [String(e.value)];
}
function Ef(e, t, n) {
  const r = [];
  let i = 0, o;
  for (; i < e.length; ) {
    xi.lastIndex = i;
    const a = xi.exec(e);
    o = a ? a.index : e.length, !i && !o && a && !t && r.push(""), i !== o && r.push(e.slice(i, o)), i = a ? o + a[0].length : o;
  }
  return i !== o && !n && r.push(""), r.join(" ");
}
function La(e, t) {
  if (e.type === "element") {
    const n = e.properties || {};
    switch (e.tagName) {
      case "listing":
      case "plaintext":
      case "xmp":
        return "pre";
      case "nobr":
        return "nowrap";
      case "pre":
        return n.wrap ? "pre-wrap" : "pre";
      case "td":
      case "th":
        return n.noWrap ? "nowrap" : t.whitespace;
      case "textarea":
        return "pre-wrap";
    }
  }
  return t.whitespace;
}
function yf(e) {
  return !!(e.properties || {}).hidden;
}
function kf(e) {
  return e.tagName === "td" || e.tagName === "th";
}
function xf(e) {
  return e.tagName === "dialog" && !(e.properties || {}).open;
}
function wf(e) {
  const t = e.regex, n = e.COMMENT("//", "$", { contains: [{ begin: /\\\n/ }] }), r = "decltype\\(auto\\)", i = "[a-zA-Z_]\\w*::", a = "(?!struct)(" + r + "|" + t.optional(i) + "[a-zA-Z_]\\w*" + t.optional("<[^<>]+>") + ")", s = {
    className: "type",
    begin: "\\b[a-z\\d_]*_t\\b"
  }, c = {
    className: "string",
    variants: [
      {
        begin: '(u8?|U|L)?"',
        end: '"',
        illegal: "\\n",
        contains: [e.BACKSLASH_ESCAPE]
      },
      {
        begin: "(u8?|U|L)?'(" + "\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)" + "|.)",
        end: "'",
        illegal: "."
      },
      e.END_SAME_AS_BEGIN({
        begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
        end: /\)([^()\\ ]{0,16})"/
      })
    ]
  }, d = {
    className: "number",
    variants: [
      // Floating-point literal.
      {
        begin: "[+-]?(?:(?:[0-9](?:'?[0-9])*\\.(?:[0-9](?:'?[0-9])*)?|\\.[0-9](?:'?[0-9])*)(?:[Ee][+-]?[0-9](?:'?[0-9])*)?|[0-9](?:'?[0-9])*[Ee][+-]?[0-9](?:'?[0-9])*|0[Xx](?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*(?:\\.(?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)?)?|\\.[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)[Pp][+-]?[0-9](?:'?[0-9])*)(?:[Ff](?:16|32|64|128)?|(BF|bf)16|[Ll]|)"
      },
      // Integer literal.
      {
        begin: "[+-]?\\b(?:0[Bb][01](?:'?[01])*|0[Xx][0-9A-Fa-f](?:'?[0-9A-Fa-f])*|0(?:'?[0-7])*|[1-9](?:'?[0-9])*)(?:[Uu](?:LL?|ll?)|[Uu][Zz]?|(?:LL?|ll?)[Uu]?|[Zz][Uu]|)"
        // Note: there are user-defined literal suffixes too, but perhaps having the custom suffix not part of the
        // literal highlight actually makes it stand out more.
      }
    ],
    relevance: 0
  }, u = {
    className: "meta",
    begin: /#\s*[a-z]+\b/,
    end: /$/,
    keywords: { keyword: "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include" },
    contains: [
      {
        begin: /\\\n/,
        relevance: 0
      },
      e.inherit(c, { className: "string" }),
      {
        className: "string",
        begin: /<.*?>/
      },
      n,
      e.C_BLOCK_COMMENT_MODE
    ]
  }, p = {
    className: "title",
    begin: t.optional(i) + e.IDENT_RE,
    relevance: 0
  }, f = t.optional(i) + e.IDENT_RE + "\\s*\\(", g = [
    "alignas",
    "alignof",
    "and",
    "and_eq",
    "asm",
    "atomic_cancel",
    "atomic_commit",
    "atomic_noexcept",
    "auto",
    "bitand",
    "bitor",
    "break",
    "case",
    "catch",
    "class",
    "co_await",
    "co_return",
    "co_yield",
    "compl",
    "concept",
    "const_cast|10",
    "consteval",
    "constexpr",
    "constinit",
    "continue",
    "decltype",
    "default",
    "delete",
    "do",
    "dynamic_cast|10",
    "else",
    "enum",
    "explicit",
    "export",
    "extern",
    "false",
    "final",
    "for",
    "friend",
    "goto",
    "if",
    "import",
    "inline",
    "module",
    "mutable",
    "namespace",
    "new",
    "noexcept",
    "not",
    "not_eq",
    "nullptr",
    "operator",
    "or",
    "or_eq",
    "override",
    "private",
    "protected",
    "public",
    "reflexpr",
    "register",
    "reinterpret_cast|10",
    "requires",
    "return",
    "sizeof",
    "static_assert",
    "static_cast|10",
    "struct",
    "switch",
    "synchronized",
    "template",
    "this",
    "thread_local",
    "throw",
    "transaction_safe",
    "transaction_safe_dynamic",
    "true",
    "try",
    "typedef",
    "typeid",
    "typename",
    "union",
    "using",
    "virtual",
    "volatile",
    "while",
    "xor",
    "xor_eq"
  ], m = [
    "bool",
    "char",
    "char16_t",
    "char32_t",
    "char8_t",
    "double",
    "float",
    "int",
    "long",
    "short",
    "void",
    "wchar_t",
    "unsigned",
    "signed",
    "const",
    "static"
  ], y = [
    "any",
    "auto_ptr",
    "barrier",
    "binary_semaphore",
    "bitset",
    "complex",
    "condition_variable",
    "condition_variable_any",
    "counting_semaphore",
    "deque",
    "false_type",
    "flat_map",
    "flat_set",
    "future",
    "imaginary",
    "initializer_list",
    "istringstream",
    "jthread",
    "latch",
    "lock_guard",
    "multimap",
    "multiset",
    "mutex",
    "optional",
    "ostringstream",
    "packaged_task",
    "pair",
    "promise",
    "priority_queue",
    "queue",
    "recursive_mutex",
    "recursive_timed_mutex",
    "scoped_lock",
    "set",
    "shared_future",
    "shared_lock",
    "shared_mutex",
    "shared_timed_mutex",
    "shared_ptr",
    "stack",
    "string_view",
    "stringstream",
    "timed_mutex",
    "thread",
    "true_type",
    "tuple",
    "unique_lock",
    "unique_ptr",
    "unordered_map",
    "unordered_multimap",
    "unordered_multiset",
    "unordered_set",
    "variant",
    "vector",
    "weak_ptr",
    "wstring",
    "wstring_view"
  ], h = [
    "abort",
    "abs",
    "acos",
    "apply",
    "as_const",
    "asin",
    "atan",
    "atan2",
    "calloc",
    "ceil",
    "cerr",
    "cin",
    "clog",
    "cos",
    "cosh",
    "cout",
    "declval",
    "endl",
    "exchange",
    "exit",
    "exp",
    "fabs",
    "floor",
    "fmod",
    "forward",
    "fprintf",
    "fputs",
    "free",
    "frexp",
    "fscanf",
    "future",
    "invoke",
    "isalnum",
    "isalpha",
    "iscntrl",
    "isdigit",
    "isgraph",
    "islower",
    "isprint",
    "ispunct",
    "isspace",
    "isupper",
    "isxdigit",
    "labs",
    "launder",
    "ldexp",
    "log",
    "log10",
    "make_pair",
    "make_shared",
    "make_shared_for_overwrite",
    "make_tuple",
    "make_unique",
    "malloc",
    "memchr",
    "memcmp",
    "memcpy",
    "memset",
    "modf",
    "move",
    "pow",
    "printf",
    "putchar",
    "puts",
    "realloc",
    "scanf",
    "sin",
    "sinh",
    "snprintf",
    "sprintf",
    "sqrt",
    "sscanf",
    "std",
    "stderr",
    "stdin",
    "stdout",
    "strcat",
    "strchr",
    "strcmp",
    "strcpy",
    "strcspn",
    "strlen",
    "strncat",
    "strncmp",
    "strncpy",
    "strpbrk",
    "strrchr",
    "strspn",
    "strstr",
    "swap",
    "tan",
    "tanh",
    "terminate",
    "to_underlying",
    "tolower",
    "toupper",
    "vfprintf",
    "visit",
    "vprintf",
    "vsprintf"
  ], N = {
    type: m,
    keyword: g,
    literal: [
      "NULL",
      "false",
      "nullopt",
      "nullptr",
      "true"
    ],
    built_in: ["_Pragma"],
    _type_hints: y
  }, I = {
    className: "function.dispatch",
    relevance: 0,
    keywords: {
      // Only for relevance, not highlighting.
      _hint: h
    },
    begin: t.concat(
      /\b/,
      /(?!decltype)/,
      /(?!if)/,
      /(?!for)/,
      /(?!switch)/,
      /(?!while)/,
      e.IDENT_RE,
      t.lookahead(/(<[^<>]+>|)\s*\(/)
    )
  }, k = [
    I,
    u,
    s,
    n,
    e.C_BLOCK_COMMENT_MODE,
    d,
    c
  ], A = {
    // This mode covers expression context where we can't expect a function
    // definition and shouldn't highlight anything that looks like one:
    // `return some()`, `else if()`, `(x*sum(1, 2))`
    variants: [
      {
        begin: /=/,
        end: /;/
      },
      {
        begin: /\(/,
        end: /\)/
      },
      {
        beginKeywords: "new throw return else",
        end: /;/
      }
    ],
    keywords: N,
    contains: k.concat([
      {
        begin: /\(/,
        end: /\)/,
        keywords: N,
        contains: k.concat(["self"]),
        relevance: 0
      }
    ]),
    relevance: 0
  }, O = {
    className: "function",
    begin: "(" + a + "[\\*&\\s]+)+" + f,
    returnBegin: !0,
    end: /[{;=]/,
    excludeEnd: !0,
    keywords: N,
    illegal: /[^\w\s\*&:<>.]/,
    contains: [
      {
        // to prevent it from being confused as the function title
        begin: r,
        keywords: N,
        relevance: 0
      },
      {
        begin: f,
        returnBegin: !0,
        contains: [p],
        relevance: 0
      },
      // needed because we do not have look-behind on the below rule
      // to prevent it from grabbing the final : in a :: pair
      {
        begin: /::/,
        relevance: 0
      },
      // initializers
      {
        begin: /:/,
        endsWithParent: !0,
        contains: [
          c,
          d
        ]
      },
      // allow for multiple declarations, e.g.:
      // extern void f(int), g(char);
      {
        relevance: 0,
        match: /,/
      },
      {
        className: "params",
        begin: /\(/,
        end: /\)/,
        keywords: N,
        relevance: 0,
        contains: [
          n,
          e.C_BLOCK_COMMENT_MODE,
          c,
          d,
          s,
          // Count matching parentheses.
          {
            begin: /\(/,
            end: /\)/,
            keywords: N,
            relevance: 0,
            contains: [
              "self",
              n,
              e.C_BLOCK_COMMENT_MODE,
              c,
              d,
              s
            ]
          }
        ]
      },
      s,
      n,
      e.C_BLOCK_COMMENT_MODE,
      u
    ]
  };
  return {
    name: "C++",
    aliases: [
      "cc",
      "c++",
      "h++",
      "hpp",
      "hh",
      "hxx",
      "cxx"
    ],
    keywords: N,
    illegal: "</",
    classNameAliases: { "function.dispatch": "built_in" },
    contains: [].concat(
      A,
      O,
      I,
      k,
      [
        u,
        {
          // containers: ie, `vector <int> rooms (9);`
          begin: "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function|flat_map|flat_set)\\s*<(?!<)",
          end: ">",
          keywords: N,
          contains: [
            "self",
            s
          ]
        },
        {
          begin: e.IDENT_RE + "::",
          keywords: N
        },
        {
          match: [
            // extra complexity to deal with `enum class` and `enum struct`
            /\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,
            /\s+/,
            /\w+/
          ],
          className: {
            1: "keyword",
            3: "title.class"
          }
        }
      ]
    )
  };
}
function Sf(e) {
  const t = {
    type: [
      "boolean",
      "byte",
      "word",
      "String"
    ],
    built_in: [
      "KeyboardController",
      "MouseController",
      "SoftwareSerial",
      "EthernetServer",
      "EthernetClient",
      "LiquidCrystal",
      "RobotControl",
      "GSMVoiceCall",
      "EthernetUDP",
      "EsploraTFT",
      "HttpClient",
      "RobotMotor",
      "WiFiClient",
      "GSMScanner",
      "FileSystem",
      "Scheduler",
      "GSMServer",
      "YunClient",
      "YunServer",
      "IPAddress",
      "GSMClient",
      "GSMModem",
      "Keyboard",
      "Ethernet",
      "Console",
      "GSMBand",
      "Esplora",
      "Stepper",
      "Process",
      "WiFiUDP",
      "GSM_SMS",
      "Mailbox",
      "USBHost",
      "Firmata",
      "PImage",
      "Client",
      "Server",
      "GSMPIN",
      "FileIO",
      "Bridge",
      "Serial",
      "EEPROM",
      "Stream",
      "Mouse",
      "Audio",
      "Servo",
      "File",
      "Task",
      "GPRS",
      "WiFi",
      "Wire",
      "TFT",
      "GSM",
      "SPI",
      "SD"
    ],
    _hints: [
      "setup",
      "loop",
      "runShellCommandAsynchronously",
      "analogWriteResolution",
      "retrieveCallingNumber",
      "printFirmwareVersion",
      "analogReadResolution",
      "sendDigitalPortPair",
      "noListenOnLocalhost",
      "readJoystickButton",
      "setFirmwareVersion",
      "readJoystickSwitch",
      "scrollDisplayRight",
      "getVoiceCallStatus",
      "scrollDisplayLeft",
      "writeMicroseconds",
      "delayMicroseconds",
      "beginTransmission",
      "getSignalStrength",
      "runAsynchronously",
      "getAsynchronously",
      "listenOnLocalhost",
      "getCurrentCarrier",
      "readAccelerometer",
      "messageAvailable",
      "sendDigitalPorts",
      "lineFollowConfig",
      "countryNameWrite",
      "runShellCommand",
      "readStringUntil",
      "rewindDirectory",
      "readTemperature",
      "setClockDivider",
      "readLightSensor",
      "endTransmission",
      "analogReference",
      "detachInterrupt",
      "countryNameRead",
      "attachInterrupt",
      "encryptionType",
      "readBytesUntil",
      "robotNameWrite",
      "readMicrophone",
      "robotNameRead",
      "cityNameWrite",
      "userNameWrite",
      "readJoystickY",
      "readJoystickX",
      "mouseReleased",
      "openNextFile",
      "scanNetworks",
      "noInterrupts",
      "digitalWrite",
      "beginSpeaker",
      "mousePressed",
      "isActionDone",
      "mouseDragged",
      "displayLogos",
      "noAutoscroll",
      "addParameter",
      "remoteNumber",
      "getModifiers",
      "keyboardRead",
      "userNameRead",
      "waitContinue",
      "processInput",
      "parseCommand",
      "printVersion",
      "readNetworks",
      "writeMessage",
      "blinkVersion",
      "cityNameRead",
      "readMessage",
      "setDataMode",
      "parsePacket",
      "isListening",
      "setBitOrder",
      "beginPacket",
      "isDirectory",
      "motorsWrite",
      "drawCompass",
      "digitalRead",
      "clearScreen",
      "serialEvent",
      "rightToLeft",
      "setTextSize",
      "leftToRight",
      "requestFrom",
      "keyReleased",
      "compassRead",
      "analogWrite",
      "interrupts",
      "WiFiServer",
      "disconnect",
      "playMelody",
      "parseFloat",
      "autoscroll",
      "getPINUsed",
      "setPINUsed",
      "setTimeout",
      "sendAnalog",
      "readSlider",
      "analogRead",
      "beginWrite",
      "createChar",
      "motorsStop",
      "keyPressed",
      "tempoWrite",
      "readButton",
      "subnetMask",
      "debugPrint",
      "macAddress",
      "writeGreen",
      "randomSeed",
      "attachGPRS",
      "readString",
      "sendString",
      "remotePort",
      "releaseAll",
      "mouseMoved",
      "background",
      "getXChange",
      "getYChange",
      "answerCall",
      "getResult",
      "voiceCall",
      "endPacket",
      "constrain",
      "getSocket",
      "writeJSON",
      "getButton",
      "available",
      "connected",
      "findUntil",
      "readBytes",
      "exitValue",
      "readGreen",
      "writeBlue",
      "startLoop",
      "IPAddress",
      "isPressed",
      "sendSysex",
      "pauseMode",
      "gatewayIP",
      "setCursor",
      "getOemKey",
      "tuneWrite",
      "noDisplay",
      "loadImage",
      "switchPIN",
      "onRequest",
      "onReceive",
      "changePIN",
      "playFile",
      "noBuffer",
      "parseInt",
      "overflow",
      "checkPIN",
      "knobRead",
      "beginTFT",
      "bitClear",
      "updateIR",
      "bitWrite",
      "position",
      "writeRGB",
      "highByte",
      "writeRed",
      "setSpeed",
      "readBlue",
      "noStroke",
      "remoteIP",
      "transfer",
      "shutdown",
      "hangCall",
      "beginSMS",
      "endWrite",
      "attached",
      "maintain",
      "noCursor",
      "checkReg",
      "checkPUK",
      "shiftOut",
      "isValid",
      "shiftIn",
      "pulseIn",
      "connect",
      "println",
      "localIP",
      "pinMode",
      "getIMEI",
      "display",
      "noBlink",
      "process",
      "getBand",
      "running",
      "beginSD",
      "drawBMP",
      "lowByte",
      "setBand",
      "release",
      "bitRead",
      "prepare",
      "pointTo",
      "readRed",
      "setMode",
      "noFill",
      "remove",
      "listen",
      "stroke",
      "detach",
      "attach",
      "noTone",
      "exists",
      "buffer",
      "height",
      "bitSet",
      "circle",
      "config",
      "cursor",
      "random",
      "IRread",
      "setDNS",
      "endSMS",
      "getKey",
      "micros",
      "millis",
      "begin",
      "print",
      "write",
      "ready",
      "flush",
      "width",
      "isPIN",
      "blink",
      "clear",
      "press",
      "mkdir",
      "rmdir",
      "close",
      "point",
      "yield",
      "image",
      "BSSID",
      "click",
      "delay",
      "read",
      "text",
      "move",
      "peek",
      "beep",
      "rect",
      "line",
      "open",
      "seek",
      "fill",
      "size",
      "turn",
      "stop",
      "home",
      "find",
      "step",
      "tone",
      "sqrt",
      "RSSI",
      "SSID",
      "end",
      "bit",
      "tan",
      "cos",
      "sin",
      "pow",
      "map",
      "abs",
      "max",
      "min",
      "get",
      "run",
      "put"
    ],
    literal: [
      "DIGITAL_MESSAGE",
      "FIRMATA_STRING",
      "ANALOG_MESSAGE",
      "REPORT_DIGITAL",
      "REPORT_ANALOG",
      "INPUT_PULLUP",
      "SET_PIN_MODE",
      "INTERNAL2V56",
      "SYSTEM_RESET",
      "LED_BUILTIN",
      "INTERNAL1V1",
      "SYSEX_START",
      "INTERNAL",
      "EXTERNAL",
      "DEFAULT",
      "OUTPUT",
      "INPUT",
      "HIGH",
      "LOW"
    ]
  }, n = wf(e), r = (
    /** @type {Record<string,any>} */
    n.keywords
  );
  return r.type = [
    ...r.type,
    ...t.type
  ], r.literal = [
    ...r.literal,
    ...t.literal
  ], r.built_in = [
    ...r.built_in,
    ...t.built_in
  ], r._hints = t._hints, n.name = "Arduino", n.aliases = ["ino"], n.supersetOf = "cpp", n;
}
function Nf(e) {
  const t = e.regex, n = {}, r = {
    begin: /\$\{/,
    end: /\}/,
    contains: [
      "self",
      {
        begin: /:-/,
        contains: [n]
      }
      // default values
    ]
  };
  Object.assign(n, {
    className: "variable",
    variants: [
      { begin: t.concat(
        /\$[\w\d#@][\w\d_]*/,
        // negative look-ahead tries to avoid matching patterns that are not
        // Perl at all like $ident$, @ident@, etc.
        "(?![\\w\\d])(?![$])"
      ) },
      r
    ]
  });
  const i = {
    className: "subst",
    begin: /\$\(/,
    end: /\)/,
    contains: [e.BACKSLASH_ESCAPE]
  }, o = e.inherit(
    e.COMMENT(),
    {
      match: [
        /(^|\s)/,
        /#.*$/
      ],
      scope: {
        2: "comment"
      }
    }
  ), a = {
    begin: /<<-?\s*(?=\w+)/,
    starts: { contains: [
      e.END_SAME_AS_BEGIN({
        begin: /(\w+)/,
        end: /(\w+)/,
        className: "string"
      })
    ] }
  }, s = {
    className: "string",
    begin: /"/,
    end: /"/,
    contains: [
      e.BACKSLASH_ESCAPE,
      n,
      i
    ]
  };
  i.contains.push(s);
  const l = {
    match: /\\"/
  }, c = {
    className: "string",
    begin: /'/,
    end: /'/
  }, d = {
    match: /\\'/
  }, u = {
    begin: /\$?\(\(/,
    end: /\)\)/,
    contains: [
      {
        begin: /\d+#[0-9a-f]+/,
        className: "number"
      },
      e.NUMBER_MODE,
      n
    ]
  }, p = [
    "fish",
    "bash",
    "zsh",
    "sh",
    "csh",
    "ksh",
    "tcsh",
    "dash",
    "scsh"
  ], f = e.SHEBANG({
    binary: `(${p.join("|")})`,
    relevance: 10
  }), g = {
    className: "function",
    begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
    returnBegin: !0,
    contains: [e.inherit(e.TITLE_MODE, { begin: /\w[\w\d_]*/ })],
    relevance: 0
  }, m = [
    "if",
    "then",
    "else",
    "elif",
    "fi",
    "time",
    "for",
    "while",
    "until",
    "in",
    "do",
    "done",
    "case",
    "esac",
    "coproc",
    "function",
    "select"
  ], y = [
    "true",
    "false"
  ], h = { match: /(\/[a-z._-]+)+/ }, S = [
    "break",
    "cd",
    "continue",
    "eval",
    "exec",
    "exit",
    "export",
    "getopts",
    "hash",
    "pwd",
    "readonly",
    "return",
    "shift",
    "test",
    "times",
    "trap",
    "umask",
    "unset"
  ], x = [
    "alias",
    "bind",
    "builtin",
    "caller",
    "command",
    "declare",
    "echo",
    "enable",
    "help",
    "let",
    "local",
    "logout",
    "mapfile",
    "printf",
    "read",
    "readarray",
    "source",
    "sudo",
    "type",
    "typeset",
    "ulimit",
    "unalias"
  ], N = [
    "autoload",
    "bg",
    "bindkey",
    "bye",
    "cap",
    "chdir",
    "clone",
    "comparguments",
    "compcall",
    "compctl",
    "compdescribe",
    "compfiles",
    "compgroups",
    "compquote",
    "comptags",
    "comptry",
    "compvalues",
    "dirs",
    "disable",
    "disown",
    "echotc",
    "echoti",
    "emulate",
    "fc",
    "fg",
    "float",
    "functions",
    "getcap",
    "getln",
    "history",
    "integer",
    "jobs",
    "kill",
    "limit",
    "log",
    "noglob",
    "popd",
    "print",
    "pushd",
    "pushln",
    "rehash",
    "sched",
    "setcap",
    "setopt",
    "stat",
    "suspend",
    "ttyctl",
    "unfunction",
    "unhash",
    "unlimit",
    "unsetopt",
    "vared",
    "wait",
    "whence",
    "where",
    "which",
    "zcompile",
    "zformat",
    "zftp",
    "zle",
    "zmodload",
    "zparseopts",
    "zprof",
    "zpty",
    "zregexparse",
    "zsocket",
    "zstyle",
    "ztcp"
  ], I = [
    "chcon",
    "chgrp",
    "chown",
    "chmod",
    "cp",
    "dd",
    "df",
    "dir",
    "dircolors",
    "ln",
    "ls",
    "mkdir",
    "mkfifo",
    "mknod",
    "mktemp",
    "mv",
    "realpath",
    "rm",
    "rmdir",
    "shred",
    "sync",
    "touch",
    "truncate",
    "vdir",
    "b2sum",
    "base32",
    "base64",
    "cat",
    "cksum",
    "comm",
    "csplit",
    "cut",
    "expand",
    "fmt",
    "fold",
    "head",
    "join",
    "md5sum",
    "nl",
    "numfmt",
    "od",
    "paste",
    "ptx",
    "pr",
    "sha1sum",
    "sha224sum",
    "sha256sum",
    "sha384sum",
    "sha512sum",
    "shuf",
    "sort",
    "split",
    "sum",
    "tac",
    "tail",
    "tr",
    "tsort",
    "unexpand",
    "uniq",
    "wc",
    "arch",
    "basename",
    "chroot",
    "date",
    "dirname",
    "du",
    "echo",
    "env",
    "expr",
    "factor",
    // "false", // keyword literal already
    "groups",
    "hostid",
    "id",
    "link",
    "logname",
    "nice",
    "nohup",
    "nproc",
    "pathchk",
    "pinky",
    "printenv",
    "printf",
    "pwd",
    "readlink",
    "runcon",
    "seq",
    "sleep",
    "stat",
    "stdbuf",
    "stty",
    "tee",
    "test",
    "timeout",
    // "true", // keyword literal already
    "tty",
    "uname",
    "unlink",
    "uptime",
    "users",
    "who",
    "whoami",
    "yes"
  ];
  return {
    name: "Bash",
    aliases: [
      "sh",
      "zsh"
    ],
    keywords: {
      $pattern: /\b[a-z][a-z0-9._-]+\b/,
      keyword: m,
      literal: y,
      built_in: [
        ...S,
        ...x,
        // Shell modifiers
        "set",
        "shopt",
        ...N,
        ...I
      ]
    },
    contains: [
      f,
      // to catch known shells and boost relevancy
      e.SHEBANG(),
      // to catch unknown shells but still highlight the shebang
      g,
      u,
      o,
      a,
      h,
      s,
      l,
      c,
      d,
      n
    ]
  };
}
function Tf(e) {
  const t = e.regex, n = e.COMMENT("//", "$", { contains: [{ begin: /\\\n/ }] }), r = "decltype\\(auto\\)", i = "[a-zA-Z_]\\w*::", a = "(" + r + "|" + t.optional(i) + "[a-zA-Z_]\\w*" + t.optional("<[^<>]+>") + ")", s = {
    className: "type",
    variants: [
      { begin: "\\b[a-z\\d_]*_t\\b" },
      { match: /\batomic_[a-z]{3,6}\b/ }
    ]
  }, c = {
    className: "string",
    variants: [
      {
        begin: '(u8?|U|L)?"',
        end: '"',
        illegal: "\\n",
        contains: [e.BACKSLASH_ESCAPE]
      },
      {
        begin: "(u8?|U|L)?'(" + "\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)" + "|.)",
        end: "'",
        illegal: "."
      },
      e.END_SAME_AS_BEGIN({
        begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
        end: /\)([^()\\ ]{0,16})"/
      })
    ]
  }, d = {
    className: "number",
    variants: [
      { match: /\b(0b[01']+)/ },
      { match: /(-?)\b([\d']+(\.[\d']*)?|\.[\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)/ },
      { match: /(-?)\b(0[xX][a-fA-F0-9]+(?:'[a-fA-F0-9]+)*(?:\.[a-fA-F0-9]*(?:'[a-fA-F0-9]*)*)?(?:[pP][-+]?[0-9]+)?(l|L)?(u|U)?)/ },
      { match: /(-?)\b\d+(?:'\d+)*(?:\.\d*(?:'\d*)*)?(?:[eE][-+]?\d+)?/ }
    ],
    relevance: 0
  }, u = {
    className: "meta",
    begin: /#\s*[a-z]+\b/,
    end: /$/,
    keywords: { keyword: "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef elifdef elifndef include" },
    contains: [
      {
        begin: /\\\n/,
        relevance: 0
      },
      e.inherit(c, { className: "string" }),
      {
        className: "string",
        begin: /<.*?>/
      },
      n,
      e.C_BLOCK_COMMENT_MODE
    ]
  }, p = {
    className: "title",
    begin: t.optional(i) + e.IDENT_RE,
    relevance: 0
  }, f = t.optional(i) + e.IDENT_RE + "\\s*\\(", y = {
    keyword: [
      "asm",
      "auto",
      "break",
      "case",
      "continue",
      "default",
      "do",
      "else",
      "enum",
      "extern",
      "for",
      "fortran",
      "goto",
      "if",
      "inline",
      "register",
      "restrict",
      "return",
      "sizeof",
      "typeof",
      "typeof_unqual",
      "struct",
      "switch",
      "typedef",
      "union",
      "volatile",
      "while",
      "_Alignas",
      "_Alignof",
      "_Atomic",
      "_Generic",
      "_Noreturn",
      "_Static_assert",
      "_Thread_local",
      // aliases
      "alignas",
      "alignof",
      "noreturn",
      "static_assert",
      "thread_local",
      // not a C keyword but is, for all intents and purposes, treated exactly like one.
      "_Pragma"
    ],
    type: [
      "float",
      "double",
      "signed",
      "unsigned",
      "int",
      "short",
      "long",
      "char",
      "void",
      "_Bool",
      "_BitInt",
      "_Complex",
      "_Imaginary",
      "_Decimal32",
      "_Decimal64",
      "_Decimal96",
      "_Decimal128",
      "_Decimal64x",
      "_Decimal128x",
      "_Float16",
      "_Float32",
      "_Float64",
      "_Float128",
      "_Float32x",
      "_Float64x",
      "_Float128x",
      // modifiers
      "const",
      "static",
      "constexpr",
      // aliases
      "complex",
      "bool",
      "imaginary"
    ],
    literal: "true false NULL",
    // TODO: apply hinting work similar to what was done in cpp.js
    built_in: "std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr"
  }, h = [
    u,
    s,
    n,
    e.C_BLOCK_COMMENT_MODE,
    d,
    c
  ], S = {
    // This mode covers expression context where we can't expect a function
    // definition and shouldn't highlight anything that looks like one:
    // `return some()`, `else if()`, `(x*sum(1, 2))`
    variants: [
      {
        begin: /=/,
        end: /;/
      },
      {
        begin: /\(/,
        end: /\)/
      },
      {
        beginKeywords: "new throw return else",
        end: /;/
      }
    ],
    keywords: y,
    contains: h.concat([
      {
        begin: /\(/,
        end: /\)/,
        keywords: y,
        contains: h.concat(["self"]),
        relevance: 0
      }
    ]),
    relevance: 0
  }, x = {
    begin: "(" + a + "[\\*&\\s]+)+" + f,
    returnBegin: !0,
    end: /[{;=]/,
    excludeEnd: !0,
    keywords: y,
    illegal: /[^\w\s\*&:<>.]/,
    contains: [
      {
        // to prevent it from being confused as the function title
        begin: r,
        keywords: y,
        relevance: 0
      },
      {
        begin: f,
        returnBegin: !0,
        contains: [e.inherit(p, { className: "title.function" })],
        relevance: 0
      },
      // allow for multiple declarations, e.g.:
      // extern void f(int), g(char);
      {
        relevance: 0,
        match: /,/
      },
      {
        className: "params",
        begin: /\(/,
        end: /\)/,
        keywords: y,
        relevance: 0,
        contains: [
          n,
          e.C_BLOCK_COMMENT_MODE,
          c,
          d,
          s,
          // Count matching parentheses.
          {
            begin: /\(/,
            end: /\)/,
            keywords: y,
            relevance: 0,
            contains: [
              "self",
              n,
              e.C_BLOCK_COMMENT_MODE,
              c,
              d,
              s
            ]
          }
        ]
      },
      s,
      n,
      e.C_BLOCK_COMMENT_MODE,
      u
    ]
  };
  return {
    name: "C",
    aliases: ["h"],
    keywords: y,
    // Until differentiations are added between `c` and `cpp`, `c` will
    // not be auto-detected to avoid auto-detect conflicts between C and C++
    disableAutodetect: !0,
    illegal: "</",
    contains: [].concat(
      S,
      x,
      h,
      [
        u,
        {
          begin: e.IDENT_RE + "::",
          keywords: y
        },
        {
          className: "class",
          beginKeywords: "enum class struct union",
          end: /[{;:<>=]/,
          contains: [
            { beginKeywords: "final class struct" },
            e.TITLE_MODE
          ]
        }
      ]
    ),
    exports: {
      preprocessor: u,
      strings: c,
      keywords: y
    }
  };
}
function Af(e) {
  const t = e.regex, n = e.COMMENT("//", "$", { contains: [{ begin: /\\\n/ }] }), r = "decltype\\(auto\\)", i = "[a-zA-Z_]\\w*::", a = "(?!struct)(" + r + "|" + t.optional(i) + "[a-zA-Z_]\\w*" + t.optional("<[^<>]+>") + ")", s = {
    className: "type",
    begin: "\\b[a-z\\d_]*_t\\b"
  }, c = {
    className: "string",
    variants: [
      {
        begin: '(u8?|U|L)?"',
        end: '"',
        illegal: "\\n",
        contains: [e.BACKSLASH_ESCAPE]
      },
      {
        begin: "(u8?|U|L)?'(" + "\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)" + "|.)",
        end: "'",
        illegal: "."
      },
      e.END_SAME_AS_BEGIN({
        begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
        end: /\)([^()\\ ]{0,16})"/
      })
    ]
  }, d = {
    className: "number",
    variants: [
      // Floating-point literal.
      {
        begin: "[+-]?(?:(?:[0-9](?:'?[0-9])*\\.(?:[0-9](?:'?[0-9])*)?|\\.[0-9](?:'?[0-9])*)(?:[Ee][+-]?[0-9](?:'?[0-9])*)?|[0-9](?:'?[0-9])*[Ee][+-]?[0-9](?:'?[0-9])*|0[Xx](?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*(?:\\.(?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)?)?|\\.[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)[Pp][+-]?[0-9](?:'?[0-9])*)(?:[Ff](?:16|32|64|128)?|(BF|bf)16|[Ll]|)"
      },
      // Integer literal.
      {
        begin: "[+-]?\\b(?:0[Bb][01](?:'?[01])*|0[Xx][0-9A-Fa-f](?:'?[0-9A-Fa-f])*|0(?:'?[0-7])*|[1-9](?:'?[0-9])*)(?:[Uu](?:LL?|ll?)|[Uu][Zz]?|(?:LL?|ll?)[Uu]?|[Zz][Uu]|)"
        // Note: there are user-defined literal suffixes too, but perhaps having the custom suffix not part of the
        // literal highlight actually makes it stand out more.
      }
    ],
    relevance: 0
  }, u = {
    className: "meta",
    begin: /#\s*[a-z]+\b/,
    end: /$/,
    keywords: { keyword: "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include" },
    contains: [
      {
        begin: /\\\n/,
        relevance: 0
      },
      e.inherit(c, { className: "string" }),
      {
        className: "string",
        begin: /<.*?>/
      },
      n,
      e.C_BLOCK_COMMENT_MODE
    ]
  }, p = {
    className: "title",
    begin: t.optional(i) + e.IDENT_RE,
    relevance: 0
  }, f = t.optional(i) + e.IDENT_RE + "\\s*\\(", g = [
    "alignas",
    "alignof",
    "and",
    "and_eq",
    "asm",
    "atomic_cancel",
    "atomic_commit",
    "atomic_noexcept",
    "auto",
    "bitand",
    "bitor",
    "break",
    "case",
    "catch",
    "class",
    "co_await",
    "co_return",
    "co_yield",
    "compl",
    "concept",
    "const_cast|10",
    "consteval",
    "constexpr",
    "constinit",
    "continue",
    "decltype",
    "default",
    "delete",
    "do",
    "dynamic_cast|10",
    "else",
    "enum",
    "explicit",
    "export",
    "extern",
    "false",
    "final",
    "for",
    "friend",
    "goto",
    "if",
    "import",
    "inline",
    "module",
    "mutable",
    "namespace",
    "new",
    "noexcept",
    "not",
    "not_eq",
    "nullptr",
    "operator",
    "or",
    "or_eq",
    "override",
    "private",
    "protected",
    "public",
    "reflexpr",
    "register",
    "reinterpret_cast|10",
    "requires",
    "return",
    "sizeof",
    "static_assert",
    "static_cast|10",
    "struct",
    "switch",
    "synchronized",
    "template",
    "this",
    "thread_local",
    "throw",
    "transaction_safe",
    "transaction_safe_dynamic",
    "true",
    "try",
    "typedef",
    "typeid",
    "typename",
    "union",
    "using",
    "virtual",
    "volatile",
    "while",
    "xor",
    "xor_eq"
  ], m = [
    "bool",
    "char",
    "char16_t",
    "char32_t",
    "char8_t",
    "double",
    "float",
    "int",
    "long",
    "short",
    "void",
    "wchar_t",
    "unsigned",
    "signed",
    "const",
    "static"
  ], y = [
    "any",
    "auto_ptr",
    "barrier",
    "binary_semaphore",
    "bitset",
    "complex",
    "condition_variable",
    "condition_variable_any",
    "counting_semaphore",
    "deque",
    "false_type",
    "flat_map",
    "flat_set",
    "future",
    "imaginary",
    "initializer_list",
    "istringstream",
    "jthread",
    "latch",
    "lock_guard",
    "multimap",
    "multiset",
    "mutex",
    "optional",
    "ostringstream",
    "packaged_task",
    "pair",
    "promise",
    "priority_queue",
    "queue",
    "recursive_mutex",
    "recursive_timed_mutex",
    "scoped_lock",
    "set",
    "shared_future",
    "shared_lock",
    "shared_mutex",
    "shared_timed_mutex",
    "shared_ptr",
    "stack",
    "string_view",
    "stringstream",
    "timed_mutex",
    "thread",
    "true_type",
    "tuple",
    "unique_lock",
    "unique_ptr",
    "unordered_map",
    "unordered_multimap",
    "unordered_multiset",
    "unordered_set",
    "variant",
    "vector",
    "weak_ptr",
    "wstring",
    "wstring_view"
  ], h = [
    "abort",
    "abs",
    "acos",
    "apply",
    "as_const",
    "asin",
    "atan",
    "atan2",
    "calloc",
    "ceil",
    "cerr",
    "cin",
    "clog",
    "cos",
    "cosh",
    "cout",
    "declval",
    "endl",
    "exchange",
    "exit",
    "exp",
    "fabs",
    "floor",
    "fmod",
    "forward",
    "fprintf",
    "fputs",
    "free",
    "frexp",
    "fscanf",
    "future",
    "invoke",
    "isalnum",
    "isalpha",
    "iscntrl",
    "isdigit",
    "isgraph",
    "islower",
    "isprint",
    "ispunct",
    "isspace",
    "isupper",
    "isxdigit",
    "labs",
    "launder",
    "ldexp",
    "log",
    "log10",
    "make_pair",
    "make_shared",
    "make_shared_for_overwrite",
    "make_tuple",
    "make_unique",
    "malloc",
    "memchr",
    "memcmp",
    "memcpy",
    "memset",
    "modf",
    "move",
    "pow",
    "printf",
    "putchar",
    "puts",
    "realloc",
    "scanf",
    "sin",
    "sinh",
    "snprintf",
    "sprintf",
    "sqrt",
    "sscanf",
    "std",
    "stderr",
    "stdin",
    "stdout",
    "strcat",
    "strchr",
    "strcmp",
    "strcpy",
    "strcspn",
    "strlen",
    "strncat",
    "strncmp",
    "strncpy",
    "strpbrk",
    "strrchr",
    "strspn",
    "strstr",
    "swap",
    "tan",
    "tanh",
    "terminate",
    "to_underlying",
    "tolower",
    "toupper",
    "vfprintf",
    "visit",
    "vprintf",
    "vsprintf"
  ], N = {
    type: m,
    keyword: g,
    literal: [
      "NULL",
      "false",
      "nullopt",
      "nullptr",
      "true"
    ],
    built_in: ["_Pragma"],
    _type_hints: y
  }, I = {
    className: "function.dispatch",
    relevance: 0,
    keywords: {
      // Only for relevance, not highlighting.
      _hint: h
    },
    begin: t.concat(
      /\b/,
      /(?!decltype)/,
      /(?!if)/,
      /(?!for)/,
      /(?!switch)/,
      /(?!while)/,
      e.IDENT_RE,
      t.lookahead(/(<[^<>]+>|)\s*\(/)
    )
  }, k = [
    I,
    u,
    s,
    n,
    e.C_BLOCK_COMMENT_MODE,
    d,
    c
  ], A = {
    // This mode covers expression context where we can't expect a function
    // definition and shouldn't highlight anything that looks like one:
    // `return some()`, `else if()`, `(x*sum(1, 2))`
    variants: [
      {
        begin: /=/,
        end: /;/
      },
      {
        begin: /\(/,
        end: /\)/
      },
      {
        beginKeywords: "new throw return else",
        end: /;/
      }
    ],
    keywords: N,
    contains: k.concat([
      {
        begin: /\(/,
        end: /\)/,
        keywords: N,
        contains: k.concat(["self"]),
        relevance: 0
      }
    ]),
    relevance: 0
  }, O = {
    className: "function",
    begin: "(" + a + "[\\*&\\s]+)+" + f,
    returnBegin: !0,
    end: /[{;=]/,
    excludeEnd: !0,
    keywords: N,
    illegal: /[^\w\s\*&:<>.]/,
    contains: [
      {
        // to prevent it from being confused as the function title
        begin: r,
        keywords: N,
        relevance: 0
      },
      {
        begin: f,
        returnBegin: !0,
        contains: [p],
        relevance: 0
      },
      // needed because we do not have look-behind on the below rule
      // to prevent it from grabbing the final : in a :: pair
      {
        begin: /::/,
        relevance: 0
      },
      // initializers
      {
        begin: /:/,
        endsWithParent: !0,
        contains: [
          c,
          d
        ]
      },
      // allow for multiple declarations, e.g.:
      // extern void f(int), g(char);
      {
        relevance: 0,
        match: /,/
      },
      {
        className: "params",
        begin: /\(/,
        end: /\)/,
        keywords: N,
        relevance: 0,
        contains: [
          n,
          e.C_BLOCK_COMMENT_MODE,
          c,
          d,
          s,
          // Count matching parentheses.
          {
            begin: /\(/,
            end: /\)/,
            keywords: N,
            relevance: 0,
            contains: [
              "self",
              n,
              e.C_BLOCK_COMMENT_MODE,
              c,
              d,
              s
            ]
          }
        ]
      },
      s,
      n,
      e.C_BLOCK_COMMENT_MODE,
      u
    ]
  };
  return {
    name: "C++",
    aliases: [
      "cc",
      "c++",
      "h++",
      "hpp",
      "hh",
      "hxx",
      "cxx"
    ],
    keywords: N,
    illegal: "</",
    classNameAliases: { "function.dispatch": "built_in" },
    contains: [].concat(
      A,
      O,
      I,
      k,
      [
        u,
        {
          // containers: ie, `vector <int> rooms (9);`
          begin: "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function|flat_map|flat_set)\\s*<(?!<)",
          end: ">",
          keywords: N,
          contains: [
            "self",
            s
          ]
        },
        {
          begin: e.IDENT_RE + "::",
          keywords: N
        },
        {
          match: [
            // extra complexity to deal with `enum class` and `enum struct`
            /\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,
            /\s+/,
            /\w+/
          ],
          className: {
            1: "keyword",
            3: "title.class"
          }
        }
      ]
    )
  };
}
function Cf(e) {
  const t = [
    "bool",
    "byte",
    "char",
    "decimal",
    "delegate",
    "double",
    "dynamic",
    "enum",
    "float",
    "int",
    "long",
    "nint",
    "nuint",
    "object",
    "sbyte",
    "short",
    "string",
    "ulong",
    "uint",
    "ushort"
  ], n = [
    "public",
    "private",
    "protected",
    "static",
    "internal",
    "protected",
    "abstract",
    "async",
    "extern",
    "override",
    "unsafe",
    "virtual",
    "new",
    "sealed",
    "partial"
  ], r = [
    "default",
    "false",
    "null",
    "true"
  ], i = [
    "abstract",
    "as",
    "base",
    "break",
    "case",
    "catch",
    "class",
    "const",
    "continue",
    "do",
    "else",
    "event",
    "explicit",
    "extern",
    "finally",
    "fixed",
    "for",
    "foreach",
    "goto",
    "if",
    "implicit",
    "in",
    "interface",
    "internal",
    "is",
    "lock",
    "namespace",
    "new",
    "operator",
    "out",
    "override",
    "params",
    "private",
    "protected",
    "public",
    "readonly",
    "record",
    "ref",
    "return",
    "scoped",
    "sealed",
    "sizeof",
    "stackalloc",
    "static",
    "struct",
    "switch",
    "this",
    "throw",
    "try",
    "typeof",
    "unchecked",
    "unsafe",
    "using",
    "virtual",
    "void",
    "volatile",
    "while"
  ], o = [
    "add",
    "alias",
    "and",
    "ascending",
    "args",
    "async",
    "await",
    "by",
    "descending",
    "dynamic",
    "equals",
    "file",
    "from",
    "get",
    "global",
    "group",
    "init",
    "into",
    "join",
    "let",
    "nameof",
    "not",
    "notnull",
    "on",
    "or",
    "orderby",
    "partial",
    "record",
    "remove",
    "required",
    "scoped",
    "select",
    "set",
    "unmanaged",
    "value|0",
    "var",
    "when",
    "where",
    "with",
    "yield"
  ], a = {
    keyword: i.concat(o),
    built_in: t,
    literal: r
  }, s = e.inherit(e.TITLE_MODE, { begin: "[a-zA-Z](\\.?\\w)*" }), l = {
    className: "number",
    variants: [
      { begin: "\\b(0b[01']+)" },
      { begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)" },
      { begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)" }
    ],
    relevance: 0
  }, c = {
    className: "string",
    begin: /"""("*)(?!")(.|\n)*?"""\1/,
    relevance: 1
  }, d = {
    className: "string",
    begin: '@"',
    end: '"',
    contains: [{ begin: '""' }]
  }, u = e.inherit(d, { illegal: /\n/ }), p = {
    className: "subst",
    begin: /\{/,
    end: /\}/,
    keywords: a
  }, f = e.inherit(p, { illegal: /\n/ }), g = {
    className: "string",
    begin: /\$"/,
    end: '"',
    illegal: /\n/,
    contains: [
      { begin: /\{\{/ },
      { begin: /\}\}/ },
      e.BACKSLASH_ESCAPE,
      f
    ]
  }, m = {
    className: "string",
    begin: /\$@"/,
    end: '"',
    contains: [
      { begin: /\{\{/ },
      { begin: /\}\}/ },
      { begin: '""' },
      p
    ]
  }, y = e.inherit(m, {
    illegal: /\n/,
    contains: [
      { begin: /\{\{/ },
      { begin: /\}\}/ },
      { begin: '""' },
      f
    ]
  });
  p.contains = [
    m,
    g,
    d,
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE,
    l,
    e.C_BLOCK_COMMENT_MODE
  ], f.contains = [
    y,
    g,
    u,
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE,
    l,
    e.inherit(e.C_BLOCK_COMMENT_MODE, { illegal: /\n/ })
  ];
  const h = { variants: [
    c,
    m,
    g,
    d,
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE
  ] }, S = {
    begin: "<",
    end: ">",
    contains: [
      { beginKeywords: "in out" },
      s
    ]
  }, x = e.IDENT_RE + "(<" + e.IDENT_RE + "(\\s*,\\s*" + e.IDENT_RE + ")*>)?(\\[\\])?", N = {
    // prevents expressions like `@class` from incorrect flagging
    // `class` as a keyword
    begin: "@" + e.IDENT_RE,
    relevance: 0
  };
  return {
    name: "C#",
    aliases: [
      "cs",
      "c#"
    ],
    keywords: a,
    illegal: /::/,
    contains: [
      e.COMMENT(
        "///",
        "$",
        {
          returnBegin: !0,
          contains: [
            {
              className: "doctag",
              variants: [
                {
                  begin: "///",
                  relevance: 0
                },
                { begin: "<!--|-->" },
                {
                  begin: "</?",
                  end: ">"
                }
              ]
            }
          ]
        }
      ),
      e.C_LINE_COMMENT_MODE,
      e.C_BLOCK_COMMENT_MODE,
      {
        className: "meta",
        begin: "#",
        end: "$",
        keywords: { keyword: "if else elif endif define undef warning error line region endregion pragma checksum" }
      },
      h,
      l,
      {
        beginKeywords: "class interface",
        relevance: 0,
        end: /[{;=]/,
        illegal: /[^\s:,]/,
        contains: [
          { beginKeywords: "where class" },
          s,
          S,
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE
        ]
      },
      {
        beginKeywords: "namespace",
        relevance: 0,
        end: /[{;=]/,
        illegal: /[^\s:]/,
        contains: [
          s,
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE
        ]
      },
      {
        beginKeywords: "record",
        relevance: 0,
        end: /[{;=]/,
        illegal: /[^\s:]/,
        contains: [
          s,
          S,
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE
        ]
      },
      {
        // [Attributes("")]
        className: "meta",
        begin: "^\\s*\\[(?=[\\w])",
        excludeBegin: !0,
        end: "\\]",
        excludeEnd: !0,
        contains: [
          {
            className: "string",
            begin: /"/,
            end: /"/
          }
        ]
      },
      {
        // Expression keywords prevent 'keyword Name(...)' from being
        // recognized as a function definition
        beginKeywords: "new return throw await else",
        relevance: 0
      },
      {
        className: "function",
        begin: "(" + x + "\\s+)+" + e.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(",
        returnBegin: !0,
        end: /\s*[{;=]/,
        excludeEnd: !0,
        keywords: a,
        contains: [
          // prevents these from being highlighted `title`
          {
            beginKeywords: n.join(" "),
            relevance: 0
          },
          {
            begin: e.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(",
            returnBegin: !0,
            contains: [
              e.TITLE_MODE,
              S
            ],
            relevance: 0
          },
          { match: /\(\)/ },
          {
            className: "params",
            begin: /\(/,
            end: /\)/,
            excludeBegin: !0,
            excludeEnd: !0,
            keywords: a,
            relevance: 0,
            contains: [
              h,
              l,
              e.C_BLOCK_COMMENT_MODE
            ]
          },
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE
        ]
      },
      N
    ]
  };
}
const If = (e) => ({
  IMPORTANT: {
    scope: "meta",
    begin: "!important"
  },
  BLOCK_COMMENT: e.C_BLOCK_COMMENT_MODE,
  HEXCOLOR: {
    scope: "number",
    begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
  },
  FUNCTION_DISPATCH: {
    className: "built_in",
    begin: /[\w-]+(?=\()/
  },
  ATTRIBUTE_SELECTOR_MODE: {
    scope: "selector-attr",
    begin: /\[/,
    end: /\]/,
    illegal: "$",
    contains: [
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE
    ]
  },
  CSS_NUMBER_MODE: {
    scope: "number",
    begin: e.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
    relevance: 0
  },
  CSS_VARIABLE: {
    className: "attr",
    begin: /--[A-Za-z_][A-Za-z0-9_-]*/
  }
}), Of = [
  "a",
  "abbr",
  "address",
  "article",
  "aside",
  "audio",
  "b",
  "blockquote",
  "body",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "dd",
  "del",
  "details",
  "dfn",
  "div",
  "dl",
  "dt",
  "em",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "header",
  "hgroup",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "main",
  "mark",
  "menu",
  "nav",
  "object",
  "ol",
  "optgroup",
  "option",
  "p",
  "picture",
  "q",
  "quote",
  "samp",
  "section",
  "select",
  "source",
  "span",
  "strong",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "tr",
  "ul",
  "var",
  "video"
], vf = [
  "defs",
  "g",
  "marker",
  "mask",
  "pattern",
  "svg",
  "switch",
  "symbol",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feFlood",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMorphology",
  "feOffset",
  "feSpecularLighting",
  "feTile",
  "feTurbulence",
  "linearGradient",
  "radialGradient",
  "stop",
  "circle",
  "ellipse",
  "image",
  "line",
  "path",
  "polygon",
  "polyline",
  "rect",
  "text",
  "use",
  "textPath",
  "tspan",
  "foreignObject",
  "clipPath"
], Rf = [
  ...Of,
  ...vf
], Mf = [
  "any-hover",
  "any-pointer",
  "aspect-ratio",
  "color",
  "color-gamut",
  "color-index",
  "device-aspect-ratio",
  "device-height",
  "device-width",
  "display-mode",
  "forced-colors",
  "grid",
  "height",
  "hover",
  "inverted-colors",
  "monochrome",
  "orientation",
  "overflow-block",
  "overflow-inline",
  "pointer",
  "prefers-color-scheme",
  "prefers-contrast",
  "prefers-reduced-motion",
  "prefers-reduced-transparency",
  "resolution",
  "scan",
  "scripting",
  "update",
  "width",
  // TODO: find a better solution?
  "min-width",
  "max-width",
  "min-height",
  "max-height"
].sort().reverse(), Df = [
  "active",
  "any-link",
  "blank",
  "checked",
  "current",
  "default",
  "defined",
  "dir",
  // dir()
  "disabled",
  "drop",
  "empty",
  "enabled",
  "first",
  "first-child",
  "first-of-type",
  "fullscreen",
  "future",
  "focus",
  "focus-visible",
  "focus-within",
  "has",
  // has()
  "host",
  // host or host()
  "host-context",
  // host-context()
  "hover",
  "indeterminate",
  "in-range",
  "invalid",
  "is",
  // is()
  "lang",
  // lang()
  "last-child",
  "last-of-type",
  "left",
  "link",
  "local-link",
  "not",
  // not()
  "nth-child",
  // nth-child()
  "nth-col",
  // nth-col()
  "nth-last-child",
  // nth-last-child()
  "nth-last-col",
  // nth-last-col()
  "nth-last-of-type",
  //nth-last-of-type()
  "nth-of-type",
  //nth-of-type()
  "only-child",
  "only-of-type",
  "optional",
  "out-of-range",
  "past",
  "placeholder-shown",
  "read-only",
  "read-write",
  "required",
  "right",
  "root",
  "scope",
  "target",
  "target-within",
  "user-invalid",
  "valid",
  "visited",
  "where"
  // where()
].sort().reverse(), Lf = [
  "after",
  "backdrop",
  "before",
  "cue",
  "cue-region",
  "first-letter",
  "first-line",
  "grammar-error",
  "marker",
  "part",
  "placeholder",
  "selection",
  "slotted",
  "spelling-error"
].sort().reverse(), Bf = [
  "accent-color",
  "align-content",
  "align-items",
  "align-self",
  "alignment-baseline",
  "all",
  "anchor-name",
  "animation",
  "animation-composition",
  "animation-delay",
  "animation-direction",
  "animation-duration",
  "animation-fill-mode",
  "animation-iteration-count",
  "animation-name",
  "animation-play-state",
  "animation-range",
  "animation-range-end",
  "animation-range-start",
  "animation-timeline",
  "animation-timing-function",
  "appearance",
  "aspect-ratio",
  "backdrop-filter",
  "backface-visibility",
  "background",
  "background-attachment",
  "background-blend-mode",
  "background-clip",
  "background-color",
  "background-image",
  "background-origin",
  "background-position",
  "background-position-x",
  "background-position-y",
  "background-repeat",
  "background-size",
  "baseline-shift",
  "block-size",
  "border",
  "border-block",
  "border-block-color",
  "border-block-end",
  "border-block-end-color",
  "border-block-end-style",
  "border-block-end-width",
  "border-block-start",
  "border-block-start-color",
  "border-block-start-style",
  "border-block-start-width",
  "border-block-style",
  "border-block-width",
  "border-bottom",
  "border-bottom-color",
  "border-bottom-left-radius",
  "border-bottom-right-radius",
  "border-bottom-style",
  "border-bottom-width",
  "border-collapse",
  "border-color",
  "border-end-end-radius",
  "border-end-start-radius",
  "border-image",
  "border-image-outset",
  "border-image-repeat",
  "border-image-slice",
  "border-image-source",
  "border-image-width",
  "border-inline",
  "border-inline-color",
  "border-inline-end",
  "border-inline-end-color",
  "border-inline-end-style",
  "border-inline-end-width",
  "border-inline-start",
  "border-inline-start-color",
  "border-inline-start-style",
  "border-inline-start-width",
  "border-inline-style",
  "border-inline-width",
  "border-left",
  "border-left-color",
  "border-left-style",
  "border-left-width",
  "border-radius",
  "border-right",
  "border-right-color",
  "border-right-style",
  "border-right-width",
  "border-spacing",
  "border-start-end-radius",
  "border-start-start-radius",
  "border-style",
  "border-top",
  "border-top-color",
  "border-top-left-radius",
  "border-top-right-radius",
  "border-top-style",
  "border-top-width",
  "border-width",
  "bottom",
  "box-align",
  "box-decoration-break",
  "box-direction",
  "box-flex",
  "box-flex-group",
  "box-lines",
  "box-ordinal-group",
  "box-orient",
  "box-pack",
  "box-shadow",
  "box-sizing",
  "break-after",
  "break-before",
  "break-inside",
  "caption-side",
  "caret-color",
  "clear",
  "clip",
  "clip-path",
  "clip-rule",
  "color",
  "color-interpolation",
  "color-interpolation-filters",
  "color-profile",
  "color-rendering",
  "color-scheme",
  "column-count",
  "column-fill",
  "column-gap",
  "column-rule",
  "column-rule-color",
  "column-rule-style",
  "column-rule-width",
  "column-span",
  "column-width",
  "columns",
  "contain",
  "contain-intrinsic-block-size",
  "contain-intrinsic-height",
  "contain-intrinsic-inline-size",
  "contain-intrinsic-size",
  "contain-intrinsic-width",
  "container",
  "container-name",
  "container-type",
  "content",
  "content-visibility",
  "counter-increment",
  "counter-reset",
  "counter-set",
  "cue",
  "cue-after",
  "cue-before",
  "cursor",
  "cx",
  "cy",
  "direction",
  "display",
  "dominant-baseline",
  "empty-cells",
  "enable-background",
  "field-sizing",
  "fill",
  "fill-opacity",
  "fill-rule",
  "filter",
  "flex",
  "flex-basis",
  "flex-direction",
  "flex-flow",
  "flex-grow",
  "flex-shrink",
  "flex-wrap",
  "float",
  "flood-color",
  "flood-opacity",
  "flow",
  "font",
  "font-display",
  "font-family",
  "font-feature-settings",
  "font-kerning",
  "font-language-override",
  "font-optical-sizing",
  "font-palette",
  "font-size",
  "font-size-adjust",
  "font-smooth",
  "font-smoothing",
  "font-stretch",
  "font-style",
  "font-synthesis",
  "font-synthesis-position",
  "font-synthesis-small-caps",
  "font-synthesis-style",
  "font-synthesis-weight",
  "font-variant",
  "font-variant-alternates",
  "font-variant-caps",
  "font-variant-east-asian",
  "font-variant-emoji",
  "font-variant-ligatures",
  "font-variant-numeric",
  "font-variant-position",
  "font-variation-settings",
  "font-weight",
  "forced-color-adjust",
  "gap",
  "glyph-orientation-horizontal",
  "glyph-orientation-vertical",
  "grid",
  "grid-area",
  "grid-auto-columns",
  "grid-auto-flow",
  "grid-auto-rows",
  "grid-column",
  "grid-column-end",
  "grid-column-start",
  "grid-gap",
  "grid-row",
  "grid-row-end",
  "grid-row-start",
  "grid-template",
  "grid-template-areas",
  "grid-template-columns",
  "grid-template-rows",
  "hanging-punctuation",
  "height",
  "hyphenate-character",
  "hyphenate-limit-chars",
  "hyphens",
  "icon",
  "image-orientation",
  "image-rendering",
  "image-resolution",
  "ime-mode",
  "initial-letter",
  "initial-letter-align",
  "inline-size",
  "inset",
  "inset-area",
  "inset-block",
  "inset-block-end",
  "inset-block-start",
  "inset-inline",
  "inset-inline-end",
  "inset-inline-start",
  "isolation",
  "justify-content",
  "justify-items",
  "justify-self",
  "kerning",
  "left",
  "letter-spacing",
  "lighting-color",
  "line-break",
  "line-height",
  "line-height-step",
  "list-style",
  "list-style-image",
  "list-style-position",
  "list-style-type",
  "margin",
  "margin-block",
  "margin-block-end",
  "margin-block-start",
  "margin-bottom",
  "margin-inline",
  "margin-inline-end",
  "margin-inline-start",
  "margin-left",
  "margin-right",
  "margin-top",
  "margin-trim",
  "marker",
  "marker-end",
  "marker-mid",
  "marker-start",
  "marks",
  "mask",
  "mask-border",
  "mask-border-mode",
  "mask-border-outset",
  "mask-border-repeat",
  "mask-border-slice",
  "mask-border-source",
  "mask-border-width",
  "mask-clip",
  "mask-composite",
  "mask-image",
  "mask-mode",
  "mask-origin",
  "mask-position",
  "mask-repeat",
  "mask-size",
  "mask-type",
  "masonry-auto-flow",
  "math-depth",
  "math-shift",
  "math-style",
  "max-block-size",
  "max-height",
  "max-inline-size",
  "max-width",
  "min-block-size",
  "min-height",
  "min-inline-size",
  "min-width",
  "mix-blend-mode",
  "nav-down",
  "nav-index",
  "nav-left",
  "nav-right",
  "nav-up",
  "none",
  "normal",
  "object-fit",
  "object-position",
  "offset",
  "offset-anchor",
  "offset-distance",
  "offset-path",
  "offset-position",
  "offset-rotate",
  "opacity",
  "order",
  "orphans",
  "outline",
  "outline-color",
  "outline-offset",
  "outline-style",
  "outline-width",
  "overflow",
  "overflow-anchor",
  "overflow-block",
  "overflow-clip-margin",
  "overflow-inline",
  "overflow-wrap",
  "overflow-x",
  "overflow-y",
  "overlay",
  "overscroll-behavior",
  "overscroll-behavior-block",
  "overscroll-behavior-inline",
  "overscroll-behavior-x",
  "overscroll-behavior-y",
  "padding",
  "padding-block",
  "padding-block-end",
  "padding-block-start",
  "padding-bottom",
  "padding-inline",
  "padding-inline-end",
  "padding-inline-start",
  "padding-left",
  "padding-right",
  "padding-top",
  "page",
  "page-break-after",
  "page-break-before",
  "page-break-inside",
  "paint-order",
  "pause",
  "pause-after",
  "pause-before",
  "perspective",
  "perspective-origin",
  "place-content",
  "place-items",
  "place-self",
  "pointer-events",
  "position",
  "position-anchor",
  "position-visibility",
  "print-color-adjust",
  "quotes",
  "r",
  "resize",
  "rest",
  "rest-after",
  "rest-before",
  "right",
  "rotate",
  "row-gap",
  "ruby-align",
  "ruby-position",
  "scale",
  "scroll-behavior",
  "scroll-margin",
  "scroll-margin-block",
  "scroll-margin-block-end",
  "scroll-margin-block-start",
  "scroll-margin-bottom",
  "scroll-margin-inline",
  "scroll-margin-inline-end",
  "scroll-margin-inline-start",
  "scroll-margin-left",
  "scroll-margin-right",
  "scroll-margin-top",
  "scroll-padding",
  "scroll-padding-block",
  "scroll-padding-block-end",
  "scroll-padding-block-start",
  "scroll-padding-bottom",
  "scroll-padding-inline",
  "scroll-padding-inline-end",
  "scroll-padding-inline-start",
  "scroll-padding-left",
  "scroll-padding-right",
  "scroll-padding-top",
  "scroll-snap-align",
  "scroll-snap-stop",
  "scroll-snap-type",
  "scroll-timeline",
  "scroll-timeline-axis",
  "scroll-timeline-name",
  "scrollbar-color",
  "scrollbar-gutter",
  "scrollbar-width",
  "shape-image-threshold",
  "shape-margin",
  "shape-outside",
  "shape-rendering",
  "speak",
  "speak-as",
  "src",
  // @font-face
  "stop-color",
  "stop-opacity",
  "stroke",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke-width",
  "tab-size",
  "table-layout",
  "text-align",
  "text-align-all",
  "text-align-last",
  "text-anchor",
  "text-combine-upright",
  "text-decoration",
  "text-decoration-color",
  "text-decoration-line",
  "text-decoration-skip",
  "text-decoration-skip-ink",
  "text-decoration-style",
  "text-decoration-thickness",
  "text-emphasis",
  "text-emphasis-color",
  "text-emphasis-position",
  "text-emphasis-style",
  "text-indent",
  "text-justify",
  "text-orientation",
  "text-overflow",
  "text-rendering",
  "text-shadow",
  "text-size-adjust",
  "text-transform",
  "text-underline-offset",
  "text-underline-position",
  "text-wrap",
  "text-wrap-mode",
  "text-wrap-style",
  "timeline-scope",
  "top",
  "touch-action",
  "transform",
  "transform-box",
  "transform-origin",
  "transform-style",
  "transition",
  "transition-behavior",
  "transition-delay",
  "transition-duration",
  "transition-property",
  "transition-timing-function",
  "translate",
  "unicode-bidi",
  "user-modify",
  "user-select",
  "vector-effect",
  "vertical-align",
  "view-timeline",
  "view-timeline-axis",
  "view-timeline-inset",
  "view-timeline-name",
  "view-transition-name",
  "visibility",
  "voice-balance",
  "voice-duration",
  "voice-family",
  "voice-pitch",
  "voice-range",
  "voice-rate",
  "voice-stress",
  "voice-volume",
  "white-space",
  "white-space-collapse",
  "widows",
  "width",
  "will-change",
  "word-break",
  "word-spacing",
  "word-wrap",
  "writing-mode",
  "x",
  "y",
  "z-index",
  "zoom"
].sort().reverse();
function Pf(e) {
  const t = e.regex, n = If(e), r = { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ }, i = "and or not only", o = /@-?\w[\w]*(-\w+)*/, a = "[a-zA-Z-][a-zA-Z0-9_-]*", s = [
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE
  ];
  return {
    name: "CSS",
    case_insensitive: !0,
    illegal: /[=|'\$]/,
    keywords: { keyframePosition: "from to" },
    classNameAliases: {
      // for visual continuity with `tag {}` and because we
      // don't have a great class for this?
      keyframePosition: "selector-tag"
    },
    contains: [
      n.BLOCK_COMMENT,
      r,
      // to recognize keyframe 40% etc which are outside the scope of our
      // attribute value mode
      n.CSS_NUMBER_MODE,
      {
        className: "selector-id",
        begin: /#[A-Za-z0-9_-]+/,
        relevance: 0
      },
      {
        className: "selector-class",
        begin: "\\." + a,
        relevance: 0
      },
      n.ATTRIBUTE_SELECTOR_MODE,
      {
        className: "selector-pseudo",
        variants: [
          { begin: ":(" + Df.join("|") + ")" },
          { begin: ":(:)?(" + Lf.join("|") + ")" }
        ]
      },
      // we may actually need this (12/2020)
      // { // pseudo-selector params
      //   begin: /\(/,
      //   end: /\)/,
      //   contains: [ hljs.CSS_NUMBER_MODE ]
      // },
      n.CSS_VARIABLE,
      {
        className: "attribute",
        begin: "\\b(" + Bf.join("|") + ")\\b"
      },
      // attribute values
      {
        begin: /:/,
        end: /[;}{]/,
        contains: [
          n.BLOCK_COMMENT,
          n.HEXCOLOR,
          n.IMPORTANT,
          n.CSS_NUMBER_MODE,
          ...s,
          // needed to highlight these as strings and to avoid issues with
          // illegal characters that might be inside urls that would tigger the
          // languages illegal stack
          {
            begin: /(url|data-uri)\(/,
            end: /\)/,
            relevance: 0,
            // from keywords
            keywords: { built_in: "url data-uri" },
            contains: [
              ...s,
              {
                className: "string",
                // any character other than `)` as in `url()` will be the start
                // of a string, which ends with `)` (from the parent mode)
                begin: /[^)]/,
                endsWithParent: !0,
                excludeEnd: !0
              }
            ]
          },
          n.FUNCTION_DISPATCH
        ]
      },
      {
        begin: t.lookahead(/@/),
        end: "[{;]",
        relevance: 0,
        illegal: /:/,
        // break on Less variables @var: ...
        contains: [
          {
            className: "keyword",
            begin: o
          },
          {
            begin: /\s/,
            endsWithParent: !0,
            excludeEnd: !0,
            relevance: 0,
            keywords: {
              $pattern: /[a-z-]+/,
              keyword: i,
              attribute: Mf.join(" ")
            },
            contains: [
              {
                begin: /[a-z-]+(?=:)/,
                className: "attribute"
              },
              ...s,
              n.CSS_NUMBER_MODE
            ]
          }
        ]
      },
      {
        className: "selector-tag",
        begin: "\\b(" + Rf.join("|") + ")\\b"
      }
    ]
  };
}
function Ff(e) {
  const t = e.regex;
  return {
    name: "Diff",
    aliases: ["patch"],
    contains: [
      {
        className: "meta",
        relevance: 10,
        match: t.either(
          /^@@ +-\d+,\d+ +\+\d+,\d+ +@@/,
          /^\*\*\* +\d+,\d+ +\*\*\*\*$/,
          /^--- +\d+,\d+ +----$/
        )
      },
      {
        className: "comment",
        variants: [
          {
            begin: t.either(
              /Index: /,
              /^index/,
              /={3,}/,
              /^-{3}/,
              /^\*{3} /,
              /^\+{3}/,
              /^diff --git/
            ),
            end: /$/
          },
          { match: /^\*{15}$/ }
        ]
      },
      {
        className: "addition",
        begin: /^\+/,
        end: /$/
      },
      {
        className: "deletion",
        begin: /^-/,
        end: /$/
      },
      {
        className: "addition",
        begin: /^!/,
        end: /$/
      }
    ]
  };
}
function zf(e) {
  const o = {
    keyword: [
      "break",
      "case",
      "chan",
      "const",
      "continue",
      "default",
      "defer",
      "else",
      "fallthrough",
      "for",
      "func",
      "go",
      "goto",
      "if",
      "import",
      "interface",
      "map",
      "package",
      "range",
      "return",
      "select",
      "struct",
      "switch",
      "type",
      "var"
    ],
    type: [
      "bool",
      "byte",
      "complex64",
      "complex128",
      "error",
      "float32",
      "float64",
      "int8",
      "int16",
      "int32",
      "int64",
      "string",
      "uint8",
      "uint16",
      "uint32",
      "uint64",
      "int",
      "uint",
      "uintptr",
      "rune"
    ],
    literal: [
      "true",
      "false",
      "iota",
      "nil"
    ],
    built_in: [
      "append",
      "cap",
      "close",
      "complex",
      "copy",
      "imag",
      "len",
      "make",
      "new",
      "panic",
      "print",
      "println",
      "real",
      "recover",
      "delete"
    ]
  };
  return {
    name: "Go",
    aliases: ["golang"],
    keywords: o,
    illegal: "</",
    contains: [
      e.C_LINE_COMMENT_MODE,
      e.C_BLOCK_COMMENT_MODE,
      {
        className: "string",
        variants: [
          e.QUOTE_STRING_MODE,
          e.APOS_STRING_MODE,
          {
            begin: "`",
            end: "`"
          }
        ]
      },
      {
        className: "number",
        variants: [
          {
            match: /-?\b0[xX]\.[a-fA-F0-9](_?[a-fA-F0-9])*[pP][+-]?\d(_?\d)*i?/,
            // hex without a present digit before . (making a digit afterwards required)
            relevance: 0
          },
          {
            match: /-?\b0[xX](_?[a-fA-F0-9])+((\.([a-fA-F0-9](_?[a-fA-F0-9])*)?)?[pP][+-]?\d(_?\d)*)?i?/,
            // hex with a present digit before . (making a digit afterwards optional)
            relevance: 0
          },
          {
            match: /-?\b0[oO](_?[0-7])*i?/,
            // leading 0o octal
            relevance: 0
          },
          {
            match: /-?\.\d(_?\d)*([eE][+-]?\d(_?\d)*)?i?/,
            // decimal without a present digit before . (making a digit afterwards required)
            relevance: 0
          },
          {
            match: /-?\b\d(_?\d)*(\.(\d(_?\d)*)?)?([eE][+-]?\d(_?\d)*)?i?/,
            // decimal with a present digit before . (making a digit afterwards optional)
            relevance: 0
          }
        ]
      },
      {
        begin: /:=/
        // relevance booster
      },
      {
        className: "function",
        beginKeywords: "func",
        end: "\\s*(\\{|$)",
        excludeEnd: !0,
        contains: [
          e.TITLE_MODE,
          {
            className: "params",
            begin: /\(/,
            end: /\)/,
            endsParent: !0,
            keywords: o,
            illegal: /["']/
          }
        ]
      }
    ]
  };
}
function Uf(e) {
  const t = e.regex, n = /[_A-Za-z][_0-9A-Za-z]*/;
  return {
    name: "GraphQL",
    aliases: ["gql"],
    case_insensitive: !0,
    disableAutodetect: !1,
    keywords: {
      keyword: [
        "query",
        "mutation",
        "subscription",
        "type",
        "input",
        "schema",
        "directive",
        "interface",
        "union",
        "scalar",
        "fragment",
        "enum",
        "on"
      ],
      literal: [
        "true",
        "false",
        "null"
      ]
    },
    contains: [
      e.HASH_COMMENT_MODE,
      e.QUOTE_STRING_MODE,
      e.NUMBER_MODE,
      {
        scope: "punctuation",
        match: /[.]{3}/,
        relevance: 0
      },
      {
        scope: "punctuation",
        begin: /[\!\(\)\:\=\[\]\{\|\}]{1}/,
        relevance: 0
      },
      {
        scope: "variable",
        begin: /\$/,
        end: /\W/,
        excludeEnd: !0,
        relevance: 0
      },
      {
        scope: "meta",
        match: /@\w+/,
        excludeEnd: !0
      },
      {
        scope: "symbol",
        begin: t.concat(n, t.lookahead(/\s*:/)),
        relevance: 0
      }
    ],
    illegal: [
      /[;<']/,
      /BEGIN/
    ]
  };
}
function $f(e) {
  const t = e.regex, n = {
    className: "number",
    relevance: 0,
    variants: [
      { begin: /([+-]+)?[\d]+_[\d_]+/ },
      { begin: e.NUMBER_RE }
    ]
  }, r = e.COMMENT();
  r.variants = [
    {
      begin: /;/,
      end: /$/
    },
    {
      begin: /#/,
      end: /$/
    }
  ];
  const i = {
    className: "variable",
    variants: [
      { begin: /\$[\w\d"][\w\d_]*/ },
      { begin: /\$\{(.*?)\}/ }
    ]
  }, o = {
    className: "literal",
    begin: /\bon|off|true|false|yes|no\b/
  }, a = {
    className: "string",
    contains: [e.BACKSLASH_ESCAPE],
    variants: [
      {
        begin: "'''",
        end: "'''",
        relevance: 10
      },
      {
        begin: '"""',
        end: '"""',
        relevance: 10
      },
      {
        begin: '"',
        end: '"'
      },
      {
        begin: "'",
        end: "'"
      }
    ]
  }, s = {
    begin: /\[/,
    end: /\]/,
    contains: [
      r,
      o,
      i,
      a,
      n,
      "self"
    ],
    relevance: 0
  }, l = /[A-Za-z0-9_-]+/, c = /"(\\"|[^"])*"/, d = /'[^']*'/, u = t.either(
    l,
    c,
    d
  ), p = t.concat(
    u,
    "(\\s*\\.\\s*",
    u,
    ")*",
    t.lookahead(/\s*=\s*[^#\s]/)
  );
  return {
    name: "TOML, also INI",
    aliases: ["toml"],
    case_insensitive: !0,
    illegal: /\S/,
    contains: [
      r,
      {
        className: "section",
        begin: /\[+/,
        end: /\]+/
      },
      {
        begin: p,
        className: "attr",
        starts: {
          end: /$/,
          contains: [
            r,
            s,
            o,
            i,
            a,
            n
          ]
        }
      }
    ]
  };
}
var yt = "[0-9](_*[0-9])*", en = `\\.(${yt})`, tn = "[0-9a-fA-F](_*[0-9a-fA-F])*", Ni = {
  className: "number",
  variants: [
    // DecimalFloatingPointLiteral
    // including ExponentPart
    { begin: `(\\b(${yt})((${en})|\\.)?|(${en}))[eE][+-]?(${yt})[fFdD]?\\b` },
    // excluding ExponentPart
    { begin: `\\b(${yt})((${en})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
    { begin: `(${en})[fFdD]?\\b` },
    { begin: `\\b(${yt})[fFdD]\\b` },
    // HexadecimalFloatingPointLiteral
    { begin: `\\b0[xX]((${tn})\\.?|(${tn})?\\.(${tn}))[pP][+-]?(${yt})[fFdD]?\\b` },
    // DecimalIntegerLiteral
    { begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" },
    // HexIntegerLiteral
    { begin: `\\b0[xX](${tn})[lL]?\\b` },
    // OctalIntegerLiteral
    { begin: "\\b0(_*[0-7])*[lL]?\\b" },
    // BinaryIntegerLiteral
    { begin: "\\b0[bB][01](_*[01])*[lL]?\\b" }
  ],
  relevance: 0
};
function Ba(e, t, n) {
  return n === -1 ? "" : e.replace(t, (r) => Ba(e, t, n - 1));
}
function Hf(e) {
  const t = e.regex, n = "[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*", r = n + Ba("(?:<" + n + "~~~(?:\\s*,\\s*" + n + "~~~)*>)?", /~~~/g, 2), l = {
    keyword: [
      "synchronized",
      "abstract",
      "private",
      "var",
      "static",
      "if",
      "const ",
      "for",
      "while",
      "strictfp",
      "finally",
      "protected",
      "import",
      "native",
      "final",
      "void",
      "enum",
      "else",
      "break",
      "transient",
      "catch",
      "instanceof",
      "volatile",
      "case",
      "assert",
      "package",
      "default",
      "public",
      "try",
      "switch",
      "continue",
      "throws",
      "protected",
      "public",
      "private",
      "module",
      "requires",
      "exports",
      "do",
      "sealed",
      "yield",
      "permits",
      "goto",
      "when"
    ],
    literal: [
      "false",
      "true",
      "null"
    ],
    type: [
      "char",
      "boolean",
      "long",
      "float",
      "int",
      "byte",
      "short",
      "double"
    ],
    built_in: [
      "super",
      "this"
    ]
  }, c = {
    className: "meta",
    begin: "@" + n,
    contains: [
      {
        begin: /\(/,
        end: /\)/,
        contains: ["self"]
        // allow nested () inside our annotation
      }
    ]
  }, d = {
    className: "params",
    begin: /\(/,
    end: /\)/,
    keywords: l,
    relevance: 0,
    contains: [e.C_BLOCK_COMMENT_MODE],
    endsParent: !0
  };
  return {
    name: "Java",
    aliases: ["jsp"],
    keywords: l,
    illegal: /<\/|#/,
    contains: [
      e.COMMENT(
        "/\\*\\*",
        "\\*/",
        {
          relevance: 0,
          contains: [
            {
              // eat up @'s in emails to prevent them to be recognized as doctags
              begin: /\w+@/,
              relevance: 0
            },
            {
              className: "doctag",
              begin: "@[A-Za-z]+"
            }
          ]
        }
      ),
      // relevance boost
      {
        begin: /import java\.[a-z]+\./,
        keywords: "import",
        relevance: 2
      },
      e.C_LINE_COMMENT_MODE,
      e.C_BLOCK_COMMENT_MODE,
      {
        begin: /"""/,
        end: /"""/,
        className: "string",
        contains: [e.BACKSLASH_ESCAPE]
      },
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      {
        match: [
          /\b(?:class|interface|enum|extends|implements|new)/,
          /\s+/,
          n
        ],
        className: {
          1: "keyword",
          3: "title.class"
        }
      },
      {
        // Exceptions for hyphenated keywords
        match: /non-sealed/,
        scope: "keyword"
      },
      {
        begin: [
          t.concat(/(?!else)/, n),
          /\s+/,
          n,
          /\s+/,
          /=(?!=)/
        ],
        className: {
          1: "type",
          3: "variable",
          5: "operator"
        }
      },
      {
        begin: [
          /record/,
          /\s+/,
          n
        ],
        className: {
          1: "keyword",
          3: "title.class"
        },
        contains: [
          d,
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE
        ]
      },
      {
        // Expression keywords prevent 'keyword Name(...)' from being
        // recognized as a function definition
        beginKeywords: "new throw return else",
        relevance: 0
      },
      {
        begin: [
          "(?:" + r + "\\s+)",
          e.UNDERSCORE_IDENT_RE,
          /\s*(?=\()/
        ],
        className: { 2: "title.function" },
        keywords: l,
        contains: [
          {
            className: "params",
            begin: /\(/,
            end: /\)/,
            keywords: l,
            relevance: 0,
            contains: [
              c,
              e.APOS_STRING_MODE,
              e.QUOTE_STRING_MODE,
              Ni,
              e.C_BLOCK_COMMENT_MODE
            ]
          },
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE
        ]
      },
      Ni,
      c
    ]
  };
}
const Ti = "[A-Za-z$_][0-9A-Za-z$_]*", Gf = [
  "as",
  // for exports
  "in",
  "of",
  "if",
  "for",
  "while",
  "finally",
  "var",
  "new",
  "function",
  "do",
  "return",
  "void",
  "else",
  "break",
  "catch",
  "instanceof",
  "with",
  "throw",
  "case",
  "default",
  "try",
  "switch",
  "continue",
  "typeof",
  "delete",
  "let",
  "yield",
  "const",
  "class",
  // JS handles these with a special rule
  // "get",
  // "set",
  "debugger",
  "async",
  "await",
  "static",
  "import",
  "from",
  "export",
  "extends",
  // It's reached stage 3, which is "recommended for implementation":
  "using"
], Kf = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], Pa = [
  // Fundamental objects
  "Object",
  "Function",
  "Boolean",
  "Symbol",
  // numbers and dates
  "Math",
  "Date",
  "Number",
  "BigInt",
  // text
  "String",
  "RegExp",
  // Indexed collections
  "Array",
  "Float32Array",
  "Float64Array",
  "Int8Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Int16Array",
  "Int32Array",
  "Uint16Array",
  "Uint32Array",
  "BigInt64Array",
  "BigUint64Array",
  // Keyed collections
  "Set",
  "Map",
  "WeakSet",
  "WeakMap",
  // Structured data
  "ArrayBuffer",
  "SharedArrayBuffer",
  "Atomics",
  "DataView",
  "JSON",
  // Control abstraction objects
  "Promise",
  "Generator",
  "GeneratorFunction",
  "AsyncFunction",
  // Reflection
  "Reflect",
  "Proxy",
  // Internationalization
  "Intl",
  // WebAssembly
  "WebAssembly"
], Fa = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], za = [
  "setInterval",
  "setTimeout",
  "clearInterval",
  "clearTimeout",
  "require",
  "exports",
  "eval",
  "isFinite",
  "isNaN",
  "parseFloat",
  "parseInt",
  "decodeURI",
  "decodeURIComponent",
  "encodeURI",
  "encodeURIComponent",
  "escape",
  "unescape"
], qf = [
  "arguments",
  "this",
  "super",
  "console",
  "window",
  "document",
  "localStorage",
  "sessionStorage",
  "module",
  "global"
  // Node.js
], Wf = [].concat(
  za,
  Pa,
  Fa
);
function Yf(e) {
  const t = e.regex, n = (V, { after: ce }) => {
    const b = "</" + V[0].slice(1);
    return V.input.indexOf(b, ce) !== -1;
  }, r = Ti, i = {
    begin: "<>",
    end: "</>"
  }, o = /<[A-Za-z0-9\\._:-]+\s*\/>/, a = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (V, ce) => {
      const b = V[0].length + V.index, oe = V.input[b];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        oe === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        oe === ","
      ) {
        ce.ignoreMatch();
        return;
      }
      oe === ">" && (n(V, { after: b }) || ce.ignoreMatch());
      let ue;
      const E = V.input.substring(b);
      if (ue = E.match(/^\s*=/)) {
        ce.ignoreMatch();
        return;
      }
      if ((ue = E.match(/^\s+extends\s+/)) && ue.index === 0) {
        ce.ignoreMatch();
        return;
      }
    }
  }, s = {
    $pattern: Ti,
    keyword: Gf,
    literal: Kf,
    built_in: Wf,
    "variable.language": qf
  }, l = "[0-9](_?[0-9])*", c = `\\.(${l})`, d = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", u = {
    className: "number",
    variants: [
      // DecimalLiteral
      { begin: `(\\b(${d})((${c})|\\.)?|(${c}))[eE][+-]?(${l})\\b` },
      { begin: `\\b(${d})\\b((${c})\\b|\\.)?|(${c})\\b` },
      // DecimalBigIntegerLiteral
      { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
      // NonDecimalIntegerLiteral
      { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
      { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
      { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
      // LegacyOctalIntegerLiteral (does not include underscore separators)
      // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
      { begin: "\\b0[0-7]+n?\\b" }
    ],
    relevance: 0
  }, p = {
    className: "subst",
    begin: "\\$\\{",
    end: "\\}",
    keywords: s,
    contains: []
    // defined later
  }, f = {
    begin: ".?html`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        p
      ],
      subLanguage: "xml"
    }
  }, g = {
    begin: ".?css`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        p
      ],
      subLanguage: "css"
    }
  }, m = {
    begin: ".?gql`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        p
      ],
      subLanguage: "graphql"
    }
  }, y = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      e.BACKSLASH_ESCAPE,
      p
    ]
  }, S = {
    className: "comment",
    variants: [
      e.COMMENT(
        /\/\*\*(?!\/)/,
        "\\*/",
        {
          relevance: 0,
          contains: [
            {
              begin: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [
                {
                  className: "doctag",
                  begin: "@[A-Za-z]+"
                },
                {
                  className: "type",
                  begin: "\\{",
                  end: "\\}",
                  excludeEnd: !0,
                  excludeBegin: !0,
                  relevance: 0
                },
                {
                  className: "variable",
                  begin: r + "(?=\\s*(-)|$)",
                  endsParent: !0,
                  relevance: 0
                },
                // eat spaces (not newlines) so we can find
                // types or variables
                {
                  begin: /(?=[^\n])\s/,
                  relevance: 0
                }
              ]
            }
          ]
        }
      ),
      e.C_BLOCK_COMMENT_MODE,
      e.C_LINE_COMMENT_MODE
    ]
  }, x = [
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE,
    f,
    g,
    m,
    y,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    u
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  p.contains = x.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: s,
    contains: [
      "self"
    ].concat(x)
  });
  const N = [].concat(S, p.contains), I = N.concat([
    // eat recursive parens in sub expressions
    {
      begin: /(\s*)\(/,
      end: /\)/,
      keywords: s,
      contains: ["self"].concat(N)
    }
  ]), k = {
    className: "params",
    // convert this to negative lookbehind in v12
    begin: /(\s*)\(/,
    // to match the parms with
    end: /\)/,
    excludeBegin: !0,
    excludeEnd: !0,
    keywords: s,
    contains: I
  }, A = {
    variants: [
      // class Car extends vehicle
      {
        match: [
          /class/,
          /\s+/,
          r,
          /\s+/,
          /extends/,
          /\s+/,
          t.concat(r, "(", t.concat(/\./, r), ")*")
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          5: "keyword",
          7: "title.class.inherited"
        }
      },
      // class Car
      {
        match: [
          /class/,
          /\s+/,
          r
        ],
        scope: {
          1: "keyword",
          3: "title.class"
        }
      }
    ]
  }, O = {
    relevance: 0,
    match: t.either(
      // Hard coded exceptions
      /\bJSON/,
      // Float32Array, OutT
      /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
      // CSSFactory, CSSFactoryT
      /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
      // FPs, FPsT
      /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
      // P
      // single letters are not highlighted
      // BLAH
      // this will be flagged as a UPPER_CASE_CONSTANT instead
    ),
    className: "title.class",
    keywords: {
      _: [
        // se we still get relevance credit for JS library classes
        ...Pa,
        ...Fa
      ]
    }
  }, L = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  }, w = {
    variants: [
      {
        match: [
          /function/,
          /\s+/,
          r,
          /(?=\s*\()/
        ]
      },
      // anonymous function
      {
        match: [
          /function/,
          /\s*(?=\()/
        ]
      }
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    label: "func.def",
    contains: [k],
    illegal: /%/
  }, v = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function D(V) {
    return t.concat("(?!", V.join("|"), ")");
  }
  const K = {
    match: t.concat(
      /\b/,
      D([
        ...za,
        "super",
        "import"
      ].map((V) => `${V}\\s*\\(`)),
      r,
      t.lookahead(/\s*\(/)
    ),
    className: "title.function",
    relevance: 0
  }, q = {
    begin: t.concat(/\./, t.lookahead(
      t.concat(r, /(?![0-9A-Za-z$_(])/)
    )),
    end: r,
    excludeBegin: !0,
    keywords: "prototype",
    className: "property",
    relevance: 0
  }, $ = {
    match: [
      /get|set/,
      /\s+/,
      r,
      /(?=\()/
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      {
        // eat to avoid empty params
        begin: /\(\)/
      },
      k
    ]
  }, ne = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>", le = {
    match: [
      /const|var|let/,
      /\s+/,
      r,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      t.lookahead(ne)
    ],
    keywords: "async",
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      k
    ]
  };
  return {
    name: "JavaScript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: s,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS: I, CLASS_REFERENCE: O },
    illegal: /#(?![$_A-z])/,
    contains: [
      e.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      L,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      f,
      g,
      m,
      y,
      S,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      u,
      O,
      {
        scope: "attr",
        match: r + t.lookahead(":"),
        relevance: 0
      },
      le,
      {
        // "value" container
        begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          S,
          e.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: ne,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [
              {
                className: "params",
                variants: [
                  {
                    begin: e.UNDERSCORE_IDENT_RE,
                    relevance: 0
                  },
                  {
                    className: null,
                    begin: /\(\s*\)/,
                    skip: !0
                  },
                  {
                    begin: /(\s*)\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: s,
                    contains: I
                  }
                ]
              }
            ]
          },
          {
            // could be a comma delimited list of params to a function call
            begin: /,/,
            relevance: 0
          },
          {
            match: /\s+/,
            relevance: 0
          },
          {
            // JSX
            variants: [
              { begin: i.begin, end: i.end },
              { match: o },
              {
                begin: a.begin,
                // we carefully check the opening tag to see if it truly
                // is a tag and not a false positive
                "on:begin": a.isTrulyOpeningTag,
                end: a.end
              }
            ],
            subLanguage: "xml",
            contains: [
              {
                begin: a.begin,
                end: a.end,
                skip: !0,
                contains: ["self"]
              }
            ]
          }
        ]
      },
      w,
      {
        // prevent this from getting swallowed up by function
        // since they appear "function like"
        beginKeywords: "while if switch catch for"
      },
      {
        // we have to count the parens to make sure we actually have the correct
        // bounding ( ).  There could be any number of sub-expressions inside
        // also surrounded by parens.
        begin: "\\b(?!function)" + e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        // end parens
        returnBegin: !0,
        label: "func.def",
        contains: [
          k,
          e.inherit(e.TITLE_MODE, { begin: r, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      q,
      // hack: prevents detection of keywords in some circumstances
      // .keyword()
      // $keyword = x
      {
        match: "\\$" + r,
        relevance: 0
      },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: "title.function" },
        contains: [k]
      },
      K,
      v,
      A,
      $,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
function Vf(e) {
  const t = {
    className: "attr",
    begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/,
    relevance: 1.01
  }, n = {
    match: /[{}[\],:]/,
    className: "punctuation",
    relevance: 0
  }, r = [
    "true",
    "false",
    "null"
  ], i = {
    scope: "literal",
    beginKeywords: r.join(" ")
  };
  return {
    name: "JSON",
    aliases: ["jsonc"],
    keywords: {
      literal: r
    },
    contains: [
      t,
      n,
      e.QUOTE_STRING_MODE,
      i,
      e.C_NUMBER_MODE,
      e.C_LINE_COMMENT_MODE,
      e.C_BLOCK_COMMENT_MODE
    ],
    illegal: "\\S"
  };
}
var kt = "[0-9](_*[0-9])*", nn = `\\.(${kt})`, rn = "[0-9a-fA-F](_*[0-9a-fA-F])*", Zf = {
  className: "number",
  variants: [
    // DecimalFloatingPointLiteral
    // including ExponentPart
    { begin: `(\\b(${kt})((${nn})|\\.)?|(${nn}))[eE][+-]?(${kt})[fFdD]?\\b` },
    // excluding ExponentPart
    { begin: `\\b(${kt})((${nn})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
    { begin: `(${nn})[fFdD]?\\b` },
    { begin: `\\b(${kt})[fFdD]\\b` },
    // HexadecimalFloatingPointLiteral
    { begin: `\\b0[xX]((${rn})\\.?|(${rn})?\\.(${rn}))[pP][+-]?(${kt})[fFdD]?\\b` },
    // DecimalIntegerLiteral
    { begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" },
    // HexIntegerLiteral
    { begin: `\\b0[xX](${rn})[lL]?\\b` },
    // OctalIntegerLiteral
    { begin: "\\b0(_*[0-7])*[lL]?\\b" },
    // BinaryIntegerLiteral
    { begin: "\\b0[bB][01](_*[01])*[lL]?\\b" }
  ],
  relevance: 0
};
function Xf(e) {
  const t = {
    keyword: "abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual",
    built_in: "Byte Short Char Int Long Boolean Float Double Void Unit Nothing",
    literal: "true false null"
  }, n = {
    className: "keyword",
    begin: /\b(break|continue|return|this)\b/,
    starts: { contains: [
      {
        className: "symbol",
        begin: /@\w+/
      }
    ] }
  }, r = {
    className: "symbol",
    begin: e.UNDERSCORE_IDENT_RE + "@"
  }, i = {
    className: "subst",
    begin: /\$\{/,
    end: /\}/,
    contains: [e.C_NUMBER_MODE]
  }, o = {
    className: "variable",
    begin: "\\$" + e.UNDERSCORE_IDENT_RE
  }, a = {
    className: "string",
    variants: [
      {
        begin: '"""',
        end: '"""(?=[^"])',
        contains: [
          o,
          i
        ]
      },
      // Can't use built-in modes easily, as we want to use STRING in the meta
      // context as 'meta-string' and there's no syntax to remove explicitly set
      // classNames in built-in modes.
      {
        begin: "'",
        end: "'",
        illegal: /\n/,
        contains: [e.BACKSLASH_ESCAPE]
      },
      {
        begin: '"',
        end: '"',
        illegal: /\n/,
        contains: [
          e.BACKSLASH_ESCAPE,
          o,
          i
        ]
      }
    ]
  };
  i.contains.push(a);
  const s = {
    className: "meta",
    begin: "@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*" + e.UNDERSCORE_IDENT_RE + ")?"
  }, l = {
    className: "meta",
    begin: "@" + e.UNDERSCORE_IDENT_RE,
    contains: [
      {
        begin: /\(/,
        end: /\)/,
        contains: [
          e.inherit(a, { className: "string" }),
          "self"
        ]
      }
    ]
  }, c = Zf, d = e.COMMENT(
    "/\\*",
    "\\*/",
    { contains: [e.C_BLOCK_COMMENT_MODE] }
  ), u = { variants: [
    {
      className: "type",
      begin: e.UNDERSCORE_IDENT_RE
    },
    {
      begin: /\(/,
      end: /\)/,
      contains: []
      // defined later
    }
  ] }, p = u;
  return p.variants[1].contains = [u], u.variants[1].contains = [p], {
    name: "Kotlin",
    aliases: [
      "kt",
      "kts"
    ],
    keywords: t,
    contains: [
      e.COMMENT(
        "/\\*\\*",
        "\\*/",
        {
          relevance: 0,
          contains: [
            {
              className: "doctag",
              begin: "@[A-Za-z]+"
            }
          ]
        }
      ),
      e.C_LINE_COMMENT_MODE,
      d,
      n,
      r,
      s,
      l,
      {
        className: "function",
        beginKeywords: "fun",
        end: "[(]|$",
        returnBegin: !0,
        excludeEnd: !0,
        keywords: t,
        relevance: 5,
        contains: [
          {
            begin: e.UNDERSCORE_IDENT_RE + "\\s*\\(",
            returnBegin: !0,
            relevance: 0,
            contains: [e.UNDERSCORE_TITLE_MODE]
          },
          {
            className: "type",
            begin: /</,
            end: />/,
            keywords: "reified",
            relevance: 0
          },
          {
            className: "params",
            begin: /\(/,
            end: /\)/,
            endsParent: !0,
            keywords: t,
            relevance: 0,
            contains: [
              {
                begin: /:/,
                end: /[=,\/]/,
                endsWithParent: !0,
                contains: [
                  u,
                  e.C_LINE_COMMENT_MODE,
                  d
                ],
                relevance: 0
              },
              e.C_LINE_COMMENT_MODE,
              d,
              s,
              l,
              a,
              e.C_NUMBER_MODE
            ]
          },
          d
        ]
      },
      {
        begin: [
          /class|interface|trait/,
          /\s+/,
          e.UNDERSCORE_IDENT_RE
        ],
        beginScope: {
          3: "title.class"
        },
        keywords: "class interface trait",
        end: /[:\{(]|$/,
        excludeEnd: !0,
        illegal: "extends implements",
        contains: [
          { beginKeywords: "public protected internal private constructor" },
          e.UNDERSCORE_TITLE_MODE,
          {
            className: "type",
            begin: /</,
            end: />/,
            excludeBegin: !0,
            excludeEnd: !0,
            relevance: 0
          },
          {
            className: "type",
            begin: /[,:]\s*/,
            end: /[<\(,){\s]|$/,
            excludeBegin: !0,
            returnEnd: !0
          },
          s,
          l
        ]
      },
      a,
      {
        className: "meta",
        begin: "^#!/usr/bin/env",
        end: "$",
        illegal: `
`
      },
      c
    ]
  };
}
const Qf = (e) => ({
  IMPORTANT: {
    scope: "meta",
    begin: "!important"
  },
  BLOCK_COMMENT: e.C_BLOCK_COMMENT_MODE,
  HEXCOLOR: {
    scope: "number",
    begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
  },
  FUNCTION_DISPATCH: {
    className: "built_in",
    begin: /[\w-]+(?=\()/
  },
  ATTRIBUTE_SELECTOR_MODE: {
    scope: "selector-attr",
    begin: /\[/,
    end: /\]/,
    illegal: "$",
    contains: [
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE
    ]
  },
  CSS_NUMBER_MODE: {
    scope: "number",
    begin: e.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
    relevance: 0
  },
  CSS_VARIABLE: {
    className: "attr",
    begin: /--[A-Za-z_][A-Za-z0-9_-]*/
  }
}), Jf = [
  "a",
  "abbr",
  "address",
  "article",
  "aside",
  "audio",
  "b",
  "blockquote",
  "body",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "dd",
  "del",
  "details",
  "dfn",
  "div",
  "dl",
  "dt",
  "em",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "header",
  "hgroup",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "main",
  "mark",
  "menu",
  "nav",
  "object",
  "ol",
  "optgroup",
  "option",
  "p",
  "picture",
  "q",
  "quote",
  "samp",
  "section",
  "select",
  "source",
  "span",
  "strong",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "tr",
  "ul",
  "var",
  "video"
], jf = [
  "defs",
  "g",
  "marker",
  "mask",
  "pattern",
  "svg",
  "switch",
  "symbol",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feFlood",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMorphology",
  "feOffset",
  "feSpecularLighting",
  "feTile",
  "feTurbulence",
  "linearGradient",
  "radialGradient",
  "stop",
  "circle",
  "ellipse",
  "image",
  "line",
  "path",
  "polygon",
  "polyline",
  "rect",
  "text",
  "use",
  "textPath",
  "tspan",
  "foreignObject",
  "clipPath"
], ep = [
  ...Jf,
  ...jf
], tp = [
  "any-hover",
  "any-pointer",
  "aspect-ratio",
  "color",
  "color-gamut",
  "color-index",
  "device-aspect-ratio",
  "device-height",
  "device-width",
  "display-mode",
  "forced-colors",
  "grid",
  "height",
  "hover",
  "inverted-colors",
  "monochrome",
  "orientation",
  "overflow-block",
  "overflow-inline",
  "pointer",
  "prefers-color-scheme",
  "prefers-contrast",
  "prefers-reduced-motion",
  "prefers-reduced-transparency",
  "resolution",
  "scan",
  "scripting",
  "update",
  "width",
  // TODO: find a better solution?
  "min-width",
  "max-width",
  "min-height",
  "max-height"
].sort().reverse(), Ua = [
  "active",
  "any-link",
  "blank",
  "checked",
  "current",
  "default",
  "defined",
  "dir",
  // dir()
  "disabled",
  "drop",
  "empty",
  "enabled",
  "first",
  "first-child",
  "first-of-type",
  "fullscreen",
  "future",
  "focus",
  "focus-visible",
  "focus-within",
  "has",
  // has()
  "host",
  // host or host()
  "host-context",
  // host-context()
  "hover",
  "indeterminate",
  "in-range",
  "invalid",
  "is",
  // is()
  "lang",
  // lang()
  "last-child",
  "last-of-type",
  "left",
  "link",
  "local-link",
  "not",
  // not()
  "nth-child",
  // nth-child()
  "nth-col",
  // nth-col()
  "nth-last-child",
  // nth-last-child()
  "nth-last-col",
  // nth-last-col()
  "nth-last-of-type",
  //nth-last-of-type()
  "nth-of-type",
  //nth-of-type()
  "only-child",
  "only-of-type",
  "optional",
  "out-of-range",
  "past",
  "placeholder-shown",
  "read-only",
  "read-write",
  "required",
  "right",
  "root",
  "scope",
  "target",
  "target-within",
  "user-invalid",
  "valid",
  "visited",
  "where"
  // where()
].sort().reverse(), $a = [
  "after",
  "backdrop",
  "before",
  "cue",
  "cue-region",
  "first-letter",
  "first-line",
  "grammar-error",
  "marker",
  "part",
  "placeholder",
  "selection",
  "slotted",
  "spelling-error"
].sort().reverse(), np = [
  "accent-color",
  "align-content",
  "align-items",
  "align-self",
  "alignment-baseline",
  "all",
  "anchor-name",
  "animation",
  "animation-composition",
  "animation-delay",
  "animation-direction",
  "animation-duration",
  "animation-fill-mode",
  "animation-iteration-count",
  "animation-name",
  "animation-play-state",
  "animation-range",
  "animation-range-end",
  "animation-range-start",
  "animation-timeline",
  "animation-timing-function",
  "appearance",
  "aspect-ratio",
  "backdrop-filter",
  "backface-visibility",
  "background",
  "background-attachment",
  "background-blend-mode",
  "background-clip",
  "background-color",
  "background-image",
  "background-origin",
  "background-position",
  "background-position-x",
  "background-position-y",
  "background-repeat",
  "background-size",
  "baseline-shift",
  "block-size",
  "border",
  "border-block",
  "border-block-color",
  "border-block-end",
  "border-block-end-color",
  "border-block-end-style",
  "border-block-end-width",
  "border-block-start",
  "border-block-start-color",
  "border-block-start-style",
  "border-block-start-width",
  "border-block-style",
  "border-block-width",
  "border-bottom",
  "border-bottom-color",
  "border-bottom-left-radius",
  "border-bottom-right-radius",
  "border-bottom-style",
  "border-bottom-width",
  "border-collapse",
  "border-color",
  "border-end-end-radius",
  "border-end-start-radius",
  "border-image",
  "border-image-outset",
  "border-image-repeat",
  "border-image-slice",
  "border-image-source",
  "border-image-width",
  "border-inline",
  "border-inline-color",
  "border-inline-end",
  "border-inline-end-color",
  "border-inline-end-style",
  "border-inline-end-width",
  "border-inline-start",
  "border-inline-start-color",
  "border-inline-start-style",
  "border-inline-start-width",
  "border-inline-style",
  "border-inline-width",
  "border-left",
  "border-left-color",
  "border-left-style",
  "border-left-width",
  "border-radius",
  "border-right",
  "border-right-color",
  "border-right-style",
  "border-right-width",
  "border-spacing",
  "border-start-end-radius",
  "border-start-start-radius",
  "border-style",
  "border-top",
  "border-top-color",
  "border-top-left-radius",
  "border-top-right-radius",
  "border-top-style",
  "border-top-width",
  "border-width",
  "bottom",
  "box-align",
  "box-decoration-break",
  "box-direction",
  "box-flex",
  "box-flex-group",
  "box-lines",
  "box-ordinal-group",
  "box-orient",
  "box-pack",
  "box-shadow",
  "box-sizing",
  "break-after",
  "break-before",
  "break-inside",
  "caption-side",
  "caret-color",
  "clear",
  "clip",
  "clip-path",
  "clip-rule",
  "color",
  "color-interpolation",
  "color-interpolation-filters",
  "color-profile",
  "color-rendering",
  "color-scheme",
  "column-count",
  "column-fill",
  "column-gap",
  "column-rule",
  "column-rule-color",
  "column-rule-style",
  "column-rule-width",
  "column-span",
  "column-width",
  "columns",
  "contain",
  "contain-intrinsic-block-size",
  "contain-intrinsic-height",
  "contain-intrinsic-inline-size",
  "contain-intrinsic-size",
  "contain-intrinsic-width",
  "container",
  "container-name",
  "container-type",
  "content",
  "content-visibility",
  "counter-increment",
  "counter-reset",
  "counter-set",
  "cue",
  "cue-after",
  "cue-before",
  "cursor",
  "cx",
  "cy",
  "direction",
  "display",
  "dominant-baseline",
  "empty-cells",
  "enable-background",
  "field-sizing",
  "fill",
  "fill-opacity",
  "fill-rule",
  "filter",
  "flex",
  "flex-basis",
  "flex-direction",
  "flex-flow",
  "flex-grow",
  "flex-shrink",
  "flex-wrap",
  "float",
  "flood-color",
  "flood-opacity",
  "flow",
  "font",
  "font-display",
  "font-family",
  "font-feature-settings",
  "font-kerning",
  "font-language-override",
  "font-optical-sizing",
  "font-palette",
  "font-size",
  "font-size-adjust",
  "font-smooth",
  "font-smoothing",
  "font-stretch",
  "font-style",
  "font-synthesis",
  "font-synthesis-position",
  "font-synthesis-small-caps",
  "font-synthesis-style",
  "font-synthesis-weight",
  "font-variant",
  "font-variant-alternates",
  "font-variant-caps",
  "font-variant-east-asian",
  "font-variant-emoji",
  "font-variant-ligatures",
  "font-variant-numeric",
  "font-variant-position",
  "font-variation-settings",
  "font-weight",
  "forced-color-adjust",
  "gap",
  "glyph-orientation-horizontal",
  "glyph-orientation-vertical",
  "grid",
  "grid-area",
  "grid-auto-columns",
  "grid-auto-flow",
  "grid-auto-rows",
  "grid-column",
  "grid-column-end",
  "grid-column-start",
  "grid-gap",
  "grid-row",
  "grid-row-end",
  "grid-row-start",
  "grid-template",
  "grid-template-areas",
  "grid-template-columns",
  "grid-template-rows",
  "hanging-punctuation",
  "height",
  "hyphenate-character",
  "hyphenate-limit-chars",
  "hyphens",
  "icon",
  "image-orientation",
  "image-rendering",
  "image-resolution",
  "ime-mode",
  "initial-letter",
  "initial-letter-align",
  "inline-size",
  "inset",
  "inset-area",
  "inset-block",
  "inset-block-end",
  "inset-block-start",
  "inset-inline",
  "inset-inline-end",
  "inset-inline-start",
  "isolation",
  "justify-content",
  "justify-items",
  "justify-self",
  "kerning",
  "left",
  "letter-spacing",
  "lighting-color",
  "line-break",
  "line-height",
  "line-height-step",
  "list-style",
  "list-style-image",
  "list-style-position",
  "list-style-type",
  "margin",
  "margin-block",
  "margin-block-end",
  "margin-block-start",
  "margin-bottom",
  "margin-inline",
  "margin-inline-end",
  "margin-inline-start",
  "margin-left",
  "margin-right",
  "margin-top",
  "margin-trim",
  "marker",
  "marker-end",
  "marker-mid",
  "marker-start",
  "marks",
  "mask",
  "mask-border",
  "mask-border-mode",
  "mask-border-outset",
  "mask-border-repeat",
  "mask-border-slice",
  "mask-border-source",
  "mask-border-width",
  "mask-clip",
  "mask-composite",
  "mask-image",
  "mask-mode",
  "mask-origin",
  "mask-position",
  "mask-repeat",
  "mask-size",
  "mask-type",
  "masonry-auto-flow",
  "math-depth",
  "math-shift",
  "math-style",
  "max-block-size",
  "max-height",
  "max-inline-size",
  "max-width",
  "min-block-size",
  "min-height",
  "min-inline-size",
  "min-width",
  "mix-blend-mode",
  "nav-down",
  "nav-index",
  "nav-left",
  "nav-right",
  "nav-up",
  "none",
  "normal",
  "object-fit",
  "object-position",
  "offset",
  "offset-anchor",
  "offset-distance",
  "offset-path",
  "offset-position",
  "offset-rotate",
  "opacity",
  "order",
  "orphans",
  "outline",
  "outline-color",
  "outline-offset",
  "outline-style",
  "outline-width",
  "overflow",
  "overflow-anchor",
  "overflow-block",
  "overflow-clip-margin",
  "overflow-inline",
  "overflow-wrap",
  "overflow-x",
  "overflow-y",
  "overlay",
  "overscroll-behavior",
  "overscroll-behavior-block",
  "overscroll-behavior-inline",
  "overscroll-behavior-x",
  "overscroll-behavior-y",
  "padding",
  "padding-block",
  "padding-block-end",
  "padding-block-start",
  "padding-bottom",
  "padding-inline",
  "padding-inline-end",
  "padding-inline-start",
  "padding-left",
  "padding-right",
  "padding-top",
  "page",
  "page-break-after",
  "page-break-before",
  "page-break-inside",
  "paint-order",
  "pause",
  "pause-after",
  "pause-before",
  "perspective",
  "perspective-origin",
  "place-content",
  "place-items",
  "place-self",
  "pointer-events",
  "position",
  "position-anchor",
  "position-visibility",
  "print-color-adjust",
  "quotes",
  "r",
  "resize",
  "rest",
  "rest-after",
  "rest-before",
  "right",
  "rotate",
  "row-gap",
  "ruby-align",
  "ruby-position",
  "scale",
  "scroll-behavior",
  "scroll-margin",
  "scroll-margin-block",
  "scroll-margin-block-end",
  "scroll-margin-block-start",
  "scroll-margin-bottom",
  "scroll-margin-inline",
  "scroll-margin-inline-end",
  "scroll-margin-inline-start",
  "scroll-margin-left",
  "scroll-margin-right",
  "scroll-margin-top",
  "scroll-padding",
  "scroll-padding-block",
  "scroll-padding-block-end",
  "scroll-padding-block-start",
  "scroll-padding-bottom",
  "scroll-padding-inline",
  "scroll-padding-inline-end",
  "scroll-padding-inline-start",
  "scroll-padding-left",
  "scroll-padding-right",
  "scroll-padding-top",
  "scroll-snap-align",
  "scroll-snap-stop",
  "scroll-snap-type",
  "scroll-timeline",
  "scroll-timeline-axis",
  "scroll-timeline-name",
  "scrollbar-color",
  "scrollbar-gutter",
  "scrollbar-width",
  "shape-image-threshold",
  "shape-margin",
  "shape-outside",
  "shape-rendering",
  "speak",
  "speak-as",
  "src",
  // @font-face
  "stop-color",
  "stop-opacity",
  "stroke",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke-width",
  "tab-size",
  "table-layout",
  "text-align",
  "text-align-all",
  "text-align-last",
  "text-anchor",
  "text-combine-upright",
  "text-decoration",
  "text-decoration-color",
  "text-decoration-line",
  "text-decoration-skip",
  "text-decoration-skip-ink",
  "text-decoration-style",
  "text-decoration-thickness",
  "text-emphasis",
  "text-emphasis-color",
  "text-emphasis-position",
  "text-emphasis-style",
  "text-indent",
  "text-justify",
  "text-orientation",
  "text-overflow",
  "text-rendering",
  "text-shadow",
  "text-size-adjust",
  "text-transform",
  "text-underline-offset",
  "text-underline-position",
  "text-wrap",
  "text-wrap-mode",
  "text-wrap-style",
  "timeline-scope",
  "top",
  "touch-action",
  "transform",
  "transform-box",
  "transform-origin",
  "transform-style",
  "transition",
  "transition-behavior",
  "transition-delay",
  "transition-duration",
  "transition-property",
  "transition-timing-function",
  "translate",
  "unicode-bidi",
  "user-modify",
  "user-select",
  "vector-effect",
  "vertical-align",
  "view-timeline",
  "view-timeline-axis",
  "view-timeline-inset",
  "view-timeline-name",
  "view-transition-name",
  "visibility",
  "voice-balance",
  "voice-duration",
  "voice-family",
  "voice-pitch",
  "voice-range",
  "voice-rate",
  "voice-stress",
  "voice-volume",
  "white-space",
  "white-space-collapse",
  "widows",
  "width",
  "will-change",
  "word-break",
  "word-spacing",
  "word-wrap",
  "writing-mode",
  "x",
  "y",
  "z-index",
  "zoom"
].sort().reverse(), rp = Ua.concat($a).sort().reverse();
function ip(e) {
  const t = Qf(e), n = rp, r = "and or not only", i = "[\\w-]+", o = "(" + i + "|@\\{" + i + "\\})", a = [], s = [], l = function(x) {
    return {
      // Less strings are not multiline (also include '~' for more consistent coloring of "escaped" strings)
      className: "string",
      begin: "~?" + x + ".*?" + x
    };
  }, c = function(x, N, I) {
    return {
      className: x,
      begin: N,
      relevance: I
    };
  }, d = {
    $pattern: /[a-z-]+/,
    keyword: r,
    attribute: tp.join(" ")
  }, u = {
    // used only to properly balance nested parens inside mixin call, def. arg list
    begin: "\\(",
    end: "\\)",
    contains: s,
    keywords: d,
    relevance: 0
  };
  s.push(
    e.C_LINE_COMMENT_MODE,
    e.C_BLOCK_COMMENT_MODE,
    l("'"),
    l('"'),
    t.CSS_NUMBER_MODE,
    // fixme: it does not include dot for numbers like .5em :(
    {
      begin: "(url|data-uri)\\(",
      starts: {
        className: "string",
        end: "[\\)\\n]",
        excludeEnd: !0
      }
    },
    t.HEXCOLOR,
    u,
    c("variable", "@@?" + i, 10),
    c("variable", "@\\{" + i + "\\}"),
    c("built_in", "~?`[^`]*?`"),
    // inline javascript (or whatever host language) *multiline* string
    {
      // @media features (it’s here to not duplicate things in AT_RULE_MODE with extra PARENS_MODE overriding):
      className: "attribute",
      begin: i + "\\s*:",
      end: ":",
      returnBegin: !0,
      excludeEnd: !0
    },
    t.IMPORTANT,
    { beginKeywords: "and not" },
    t.FUNCTION_DISPATCH
  );
  const p = s.concat({
    begin: /\{/,
    end: /\}/,
    contains: a
  }), f = {
    beginKeywords: "when",
    endsWithParent: !0,
    contains: [{ beginKeywords: "and not" }].concat(s)
    // using this form to override VALUE’s 'function' match
  }, g = {
    begin: o + "\\s*:",
    returnBegin: !0,
    end: /[;}]/,
    relevance: 0,
    contains: [
      { begin: /-(webkit|moz|ms|o)-/ },
      t.CSS_VARIABLE,
      {
        className: "attribute",
        begin: "\\b(" + np.join("|") + ")\\b",
        end: /(?=:)/,
        starts: {
          endsWithParent: !0,
          illegal: "[<=$]",
          relevance: 0,
          contains: s
        }
      }
    ]
  }, m = {
    className: "keyword",
    begin: "@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",
    starts: {
      end: "[;{}]",
      keywords: d,
      returnEnd: !0,
      contains: s,
      relevance: 0
    }
  }, y = {
    className: "variable",
    variants: [
      // using more strict pattern for higher relevance to increase chances of Less detection.
      // this is *the only* Less specific statement used in most of the sources, so...
      // (we’ll still often loose to the css-parser unless there's '//' comment,
      // simply because 1 variable just can't beat 99 properties :)
      {
        begin: "@" + i + "\\s*:",
        relevance: 15
      },
      { begin: "@" + i }
    ],
    starts: {
      end: "[;}]",
      returnEnd: !0,
      contains: p
    }
  }, h = {
    // first parse unambiguous selectors (i.e. those not starting with tag)
    // then fall into the scary lookahead-discriminator variant.
    // this mode also handles mixin definitions and calls
    variants: [
      {
        begin: "[\\.#:&\\[>]",
        end: "[;{}]"
        // mixin calls end with ';'
      },
      {
        begin: o,
        end: /\{/
      }
    ],
    returnBegin: !0,
    returnEnd: !0,
    illegal: `[<='$"]`,
    relevance: 0,
    contains: [
      e.C_LINE_COMMENT_MODE,
      e.C_BLOCK_COMMENT_MODE,
      f,
      c("keyword", "all\\b"),
      c("variable", "@\\{" + i + "\\}"),
      // otherwise it’s identified as tag
      {
        begin: "\\b(" + ep.join("|") + ")\\b",
        className: "selector-tag"
      },
      t.CSS_NUMBER_MODE,
      c("selector-tag", o, 0),
      c("selector-id", "#" + o),
      c("selector-class", "\\." + o, 0),
      c("selector-tag", "&", 0),
      t.ATTRIBUTE_SELECTOR_MODE,
      {
        className: "selector-pseudo",
        begin: ":(" + Ua.join("|") + ")"
      },
      {
        className: "selector-pseudo",
        begin: ":(:)?(" + $a.join("|") + ")"
      },
      {
        begin: /\(/,
        end: /\)/,
        relevance: 0,
        contains: p
      },
      // argument list of parametric mixins
      { begin: "!important" },
      // eat !important after mixin call or it will be colored as tag
      t.FUNCTION_DISPATCH
    ]
  }, S = {
    begin: i + `:(:)?(${n.join("|")})`,
    returnBegin: !0,
    contains: [h]
  };
  return a.push(
    e.C_LINE_COMMENT_MODE,
    e.C_BLOCK_COMMENT_MODE,
    m,
    y,
    S,
    g,
    h,
    f,
    t.FUNCTION_DISPATCH
  ), {
    name: "Less",
    case_insensitive: !0,
    illegal: `[=>'/<($"]`,
    contains: a
  };
}
function ap(e) {
  const t = "\\[=*\\[", n = "\\]=*\\]", r = {
    begin: t,
    end: n,
    contains: ["self"]
  }, i = [
    e.COMMENT("--(?!" + t + ")", "$"),
    e.COMMENT(
      "--" + t,
      n,
      {
        contains: [r],
        relevance: 10
      }
    )
  ];
  return {
    name: "Lua",
    aliases: ["pluto"],
    keywords: {
      $pattern: e.UNDERSCORE_IDENT_RE,
      literal: "true false nil",
      keyword: "and break do else elseif end for goto if in local not or repeat return then until while",
      built_in: (
        // Metatags and globals:
        "_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall arg self coroutine resume yield status wrap create running debug getupvalue debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv io lines write close flush open output type read stderr stdin input stdout popen tmpfile math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower table setn insert getn foreachi maxn foreach concat sort remove"
      )
    },
    contains: i.concat([
      {
        className: "function",
        beginKeywords: "function",
        end: "\\)",
        contains: [
          e.inherit(e.TITLE_MODE, { begin: "([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*" }),
          {
            className: "params",
            begin: "\\(",
            endsWithParent: !0,
            contains: i
          }
        ].concat(i)
      },
      e.C_NUMBER_MODE,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      {
        className: "string",
        begin: t,
        end: n,
        contains: [r],
        relevance: 5
      }
    ])
  };
}
function op(e) {
  const t = {
    className: "variable",
    variants: [
      {
        begin: "\\$\\(" + e.UNDERSCORE_IDENT_RE + "\\)",
        contains: [e.BACKSLASH_ESCAPE]
      },
      { begin: /\$[@%<?\^\+\*]/ }
    ]
  }, n = {
    className: "string",
    begin: /"/,
    end: /"/,
    contains: [
      e.BACKSLASH_ESCAPE,
      t
    ]
  }, r = {
    className: "variable",
    begin: /\$\([\w-]+\s/,
    end: /\)/,
    keywords: { built_in: "subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value" },
    contains: [
      t,
      n
      // Added QUOTE_STRING as they can be a part of functions
    ]
  }, i = { begin: "^" + e.UNDERSCORE_IDENT_RE + "\\s*(?=[:+?]?=)" }, o = {
    className: "meta",
    begin: /^\.PHONY:/,
    end: /$/,
    keywords: {
      $pattern: /[\.\w]+/,
      keyword: ".PHONY"
    }
  }, a = {
    className: "section",
    begin: /^[^\s]+:/,
    end: /$/,
    contains: [t]
  };
  return {
    name: "Makefile",
    aliases: [
      "mk",
      "mak",
      "make"
    ],
    keywords: {
      $pattern: /[\w-]+/,
      keyword: "define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath"
    },
    contains: [
      e.HASH_COMMENT_MODE,
      t,
      n,
      r,
      i,
      o,
      a
    ]
  };
}
function sp(e) {
  const t = e.regex, n = {
    begin: /<\/?[A-Za-z_]/,
    end: ">",
    subLanguage: "xml",
    relevance: 0
  }, r = {
    begin: "^[-\\*]{3,}",
    end: "$"
  }, i = {
    className: "code",
    variants: [
      // TODO: fix to allow these to work with sublanguage also
      { begin: "(`{3,})[^`](.|\\n)*?\\1`*[ ]*" },
      { begin: "(~{3,})[^~](.|\\n)*?\\1~*[ ]*" },
      // needed to allow markdown as a sublanguage to work
      {
        begin: "```",
        end: "```+[ ]*$"
      },
      {
        begin: "~~~",
        end: "~~~+[ ]*$"
      },
      { begin: "`.+?`" },
      {
        begin: "(?=^( {4}|\\t))",
        // use contains to gobble up multiple lines to allow the block to be whatever size
        // but only have a single open/close tag vs one per line
        contains: [
          {
            begin: "^( {4}|\\t)",
            end: "(\\n)$"
          }
        ],
        relevance: 0
      }
    ]
  }, o = {
    className: "bullet",
    begin: "^[ 	]*([*+-]|(\\d+\\.))(?=\\s+)",
    end: "\\s+",
    excludeEnd: !0
  }, a = {
    begin: /^\[[^\n]+\]:/,
    returnBegin: !0,
    contains: [
      {
        className: "symbol",
        begin: /\[/,
        end: /\]/,
        excludeBegin: !0,
        excludeEnd: !0
      },
      {
        className: "link",
        begin: /:\s*/,
        end: /$/,
        excludeBegin: !0
      }
    ]
  }, s = /[A-Za-z][A-Za-z0-9+.-]*/, l = {
    variants: [
      // too much like nested array access in so many languages
      // to have any real relevance
      {
        begin: /\[.+?\]\[.*?\]/,
        relevance: 0
      },
      // popular internet URLs
      {
        begin: /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
        relevance: 2
      },
      {
        begin: t.concat(/\[.+?\]\(/, s, /:\/\/.*?\)/),
        relevance: 2
      },
      // relative urls
      {
        begin: /\[.+?\]\([./?&#].*?\)/,
        relevance: 1
      },
      // whatever else, lower relevance (might not be a link at all)
      {
        begin: /\[.*?\]\(.*?\)/,
        relevance: 0
      }
    ],
    returnBegin: !0,
    contains: [
      {
        // empty strings for alt or link text
        match: /\[(?=\])/
      },
      {
        className: "string",
        relevance: 0,
        begin: "\\[",
        end: "\\]",
        excludeBegin: !0,
        returnEnd: !0
      },
      {
        className: "link",
        relevance: 0,
        begin: "\\]\\(",
        end: "\\)",
        excludeBegin: !0,
        excludeEnd: !0
      },
      {
        className: "symbol",
        relevance: 0,
        begin: "\\]\\[",
        end: "\\]",
        excludeBegin: !0,
        excludeEnd: !0
      }
    ]
  }, c = {
    className: "strong",
    contains: [],
    // defined later
    variants: [
      {
        begin: /_{2}(?!\s)/,
        end: /_{2}/
      },
      {
        begin: /\*{2}(?!\s)/,
        end: /\*{2}/
      }
    ]
  }, d = {
    className: "emphasis",
    contains: [],
    // defined later
    variants: [
      {
        begin: /\*(?![*\s])/,
        end: /\*/
      },
      {
        begin: /_(?![_\s])/,
        end: /_/,
        relevance: 0
      }
    ]
  }, u = e.inherit(c, { contains: [] }), p = e.inherit(d, { contains: [] });
  c.contains.push(p), d.contains.push(u);
  let f = [
    n,
    l
  ];
  return [
    c,
    d,
    u,
    p
  ].forEach((h) => {
    h.contains = h.contains.concat(f);
  }), f = f.concat(c, d), {
    name: "Markdown",
    aliases: [
      "md",
      "mkdown",
      "mkd"
    ],
    contains: [
      {
        className: "section",
        variants: [
          {
            begin: "^#{1,6}",
            end: "$",
            contains: f
          },
          {
            begin: "(?=^.+?\\n[=-]{2,}$)",
            contains: [
              { begin: "^[=-]*$" },
              {
                begin: "^",
                end: "\\n",
                contains: f
              }
            ]
          }
        ]
      },
      n,
      o,
      c,
      d,
      {
        className: "quote",
        begin: "^>\\s+",
        contains: f,
        end: "$"
      },
      i,
      r,
      l,
      a,
      {
        //https://spec.commonmark.org/0.31.2/#entity-references
        scope: "literal",
        match: /&([a-zA-Z0-9]+|#[0-9]{1,7}|#[Xx][0-9a-fA-F]{1,6});/
      }
    ]
  };
}
function lp(e) {
  const t = {
    className: "built_in",
    begin: "\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+"
  }, n = /[a-zA-Z@][a-zA-Z0-9_]*/, s = {
    "variable.language": [
      "this",
      "super"
    ],
    $pattern: n,
    keyword: [
      "while",
      "export",
      "sizeof",
      "typedef",
      "const",
      "struct",
      "for",
      "union",
      "volatile",
      "static",
      "mutable",
      "if",
      "do",
      "return",
      "goto",
      "enum",
      "else",
      "break",
      "extern",
      "asm",
      "case",
      "default",
      "register",
      "explicit",
      "typename",
      "switch",
      "continue",
      "inline",
      "readonly",
      "assign",
      "readwrite",
      "self",
      "@synchronized",
      "id",
      "typeof",
      "nonatomic",
      "IBOutlet",
      "IBAction",
      "strong",
      "weak",
      "copy",
      "in",
      "out",
      "inout",
      "bycopy",
      "byref",
      "oneway",
      "__strong",
      "__weak",
      "__block",
      "__autoreleasing",
      "@private",
      "@protected",
      "@public",
      "@try",
      "@property",
      "@end",
      "@throw",
      "@catch",
      "@finally",
      "@autoreleasepool",
      "@synthesize",
      "@dynamic",
      "@selector",
      "@optional",
      "@required",
      "@encode",
      "@package",
      "@import",
      "@defs",
      "@compatibility_alias",
      "__bridge",
      "__bridge_transfer",
      "__bridge_retained",
      "__bridge_retain",
      "__covariant",
      "__contravariant",
      "__kindof",
      "_Nonnull",
      "_Nullable",
      "_Null_unspecified",
      "__FUNCTION__",
      "__PRETTY_FUNCTION__",
      "__attribute__",
      "getter",
      "setter",
      "retain",
      "unsafe_unretained",
      "nonnull",
      "nullable",
      "null_unspecified",
      "null_resettable",
      "class",
      "instancetype",
      "NS_DESIGNATED_INITIALIZER",
      "NS_UNAVAILABLE",
      "NS_REQUIRES_SUPER",
      "NS_RETURNS_INNER_POINTER",
      "NS_INLINE",
      "NS_AVAILABLE",
      "NS_DEPRECATED",
      "NS_ENUM",
      "NS_OPTIONS",
      "NS_SWIFT_UNAVAILABLE",
      "NS_ASSUME_NONNULL_BEGIN",
      "NS_ASSUME_NONNULL_END",
      "NS_REFINED_FOR_SWIFT",
      "NS_SWIFT_NAME",
      "NS_SWIFT_NOTHROW",
      "NS_DURING",
      "NS_HANDLER",
      "NS_ENDHANDLER",
      "NS_VALUERETURN",
      "NS_VOIDRETURN"
    ],
    literal: [
      "false",
      "true",
      "FALSE",
      "TRUE",
      "nil",
      "YES",
      "NO",
      "NULL"
    ],
    built_in: [
      "dispatch_once_t",
      "dispatch_queue_t",
      "dispatch_sync",
      "dispatch_async",
      "dispatch_once"
    ],
    type: [
      "int",
      "float",
      "char",
      "unsigned",
      "signed",
      "short",
      "long",
      "double",
      "wchar_t",
      "unichar",
      "void",
      "bool",
      "BOOL",
      "id|0",
      "_Bool"
    ]
  }, l = {
    $pattern: n,
    keyword: [
      "@interface",
      "@class",
      "@protocol",
      "@implementation"
    ]
  };
  return {
    name: "Objective-C",
    aliases: [
      "mm",
      "objc",
      "obj-c",
      "obj-c++",
      "objective-c++"
    ],
    keywords: s,
    illegal: "</",
    contains: [
      t,
      e.C_LINE_COMMENT_MODE,
      e.C_BLOCK_COMMENT_MODE,
      e.C_NUMBER_MODE,
      e.QUOTE_STRING_MODE,
      e.APOS_STRING_MODE,
      {
        className: "string",
        variants: [
          {
            begin: '@"',
            end: '"',
            illegal: "\\n",
            contains: [e.BACKSLASH_ESCAPE]
          }
        ]
      },
      {
        className: "meta",
        begin: /#\s*[a-z]+\b/,
        end: /$/,
        keywords: { keyword: "if else elif endif define undef warning error line pragma ifdef ifndef include" },
        contains: [
          {
            begin: /\\\n/,
            relevance: 0
          },
          e.inherit(e.QUOTE_STRING_MODE, { className: "string" }),
          {
            className: "string",
            begin: /<.*?>/,
            end: /$/,
            illegal: "\\n"
          },
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE
        ]
      },
      {
        className: "class",
        begin: "(" + l.keyword.join("|") + ")\\b",
        end: /(\{|$)/,
        excludeEnd: !0,
        keywords: l,
        contains: [e.UNDERSCORE_TITLE_MODE]
      },
      {
        begin: "\\." + e.UNDERSCORE_IDENT_RE,
        relevance: 0
      }
    ]
  };
}
function cp(e) {
  const t = e.regex, n = [
    "abs",
    "accept",
    "alarm",
    "and",
    "atan2",
    "bind",
    "binmode",
    "bless",
    "break",
    "caller",
    "chdir",
    "chmod",
    "chomp",
    "chop",
    "chown",
    "chr",
    "chroot",
    "class",
    "close",
    "closedir",
    "connect",
    "continue",
    "cos",
    "crypt",
    "dbmclose",
    "dbmopen",
    "defined",
    "delete",
    "die",
    "do",
    "dump",
    "each",
    "else",
    "elsif",
    "endgrent",
    "endhostent",
    "endnetent",
    "endprotoent",
    "endpwent",
    "endservent",
    "eof",
    "eval",
    "exec",
    "exists",
    "exit",
    "exp",
    "fcntl",
    "field",
    "fileno",
    "flock",
    "for",
    "foreach",
    "fork",
    "format",
    "formline",
    "getc",
    "getgrent",
    "getgrgid",
    "getgrnam",
    "gethostbyaddr",
    "gethostbyname",
    "gethostent",
    "getlogin",
    "getnetbyaddr",
    "getnetbyname",
    "getnetent",
    "getpeername",
    "getpgrp",
    "getpriority",
    "getprotobyname",
    "getprotobynumber",
    "getprotoent",
    "getpwent",
    "getpwnam",
    "getpwuid",
    "getservbyname",
    "getservbyport",
    "getservent",
    "getsockname",
    "getsockopt",
    "given",
    "glob",
    "gmtime",
    "goto",
    "grep",
    "gt",
    "hex",
    "if",
    "index",
    "int",
    "ioctl",
    "join",
    "keys",
    "kill",
    "last",
    "lc",
    "lcfirst",
    "length",
    "link",
    "listen",
    "local",
    "localtime",
    "log",
    "lstat",
    "lt",
    "ma",
    "map",
    "method",
    "mkdir",
    "msgctl",
    "msgget",
    "msgrcv",
    "msgsnd",
    "my",
    "ne",
    "next",
    "no",
    "not",
    "oct",
    "open",
    "opendir",
    "or",
    "ord",
    "our",
    "pack",
    "package",
    "pipe",
    "pop",
    "pos",
    "print",
    "printf",
    "prototype",
    "push",
    "q|0",
    "qq",
    "quotemeta",
    "qw",
    "qx",
    "rand",
    "read",
    "readdir",
    "readline",
    "readlink",
    "readpipe",
    "recv",
    "redo",
    "ref",
    "rename",
    "require",
    "reset",
    "return",
    "reverse",
    "rewinddir",
    "rindex",
    "rmdir",
    "say",
    "scalar",
    "seek",
    "seekdir",
    "select",
    "semctl",
    "semget",
    "semop",
    "send",
    "setgrent",
    "sethostent",
    "setnetent",
    "setpgrp",
    "setpriority",
    "setprotoent",
    "setpwent",
    "setservent",
    "setsockopt",
    "shift",
    "shmctl",
    "shmget",
    "shmread",
    "shmwrite",
    "shutdown",
    "sin",
    "sleep",
    "socket",
    "socketpair",
    "sort",
    "splice",
    "split",
    "sprintf",
    "sqrt",
    "srand",
    "stat",
    "state",
    "study",
    "sub",
    "substr",
    "symlink",
    "syscall",
    "sysopen",
    "sysread",
    "sysseek",
    "system",
    "syswrite",
    "tell",
    "telldir",
    "tie",
    "tied",
    "time",
    "times",
    "tr",
    "truncate",
    "uc",
    "ucfirst",
    "umask",
    "undef",
    "unless",
    "unlink",
    "unpack",
    "unshift",
    "untie",
    "until",
    "use",
    "utime",
    "values",
    "vec",
    "wait",
    "waitpid",
    "wantarray",
    "warn",
    "when",
    "while",
    "write",
    "x|0",
    "xor",
    "y|0"
  ], r = /[dualxmsipngr]{0,12}/, i = {
    $pattern: /[\w.]+/,
    keyword: n.join(" ")
  }, o = {
    className: "subst",
    begin: "[$@]\\{",
    end: "\\}",
    keywords: i
  }, a = {
    begin: /->\{/,
    end: /\}/
    // contains defined later
  }, s = {
    scope: "attr",
    match: /\s+:\s*\w+(\s*\(.*?\))?/
  }, l = {
    scope: "variable",
    variants: [
      { begin: /\$\d/ },
      {
        begin: t.concat(
          /[$%@](?!")(\^\w\b|#\w+(::\w+)*|\{\w+\}|\w+(::\w*)*)/,
          // negative look-ahead tries to avoid matching patterns that are not
          // Perl at all like $ident$, @ident@, etc.
          "(?![A-Za-z])(?![@$%])"
        )
      },
      {
        // Only $= is a special Perl variable and one can't declare @= or %=.
        begin: /[$%@](?!")[^\s\w{=]|\$=/,
        relevance: 0
      }
    ],
    contains: [s]
  }, c = {
    className: "number",
    variants: [
      // decimal numbers:
      // include the case where a number starts with a dot (eg. .9), and
      // the leading 0? avoids mixing the first and second match on 0.x cases
      { match: /0?\.[0-9][0-9_]+\b/ },
      // include the special versioned number (eg. v5.38)
      { match: /\bv?(0|[1-9][0-9_]*(\.[0-9_]+)?|[1-9][0-9_]*)\b/ },
      // non-decimal numbers:
      { match: /\b0[0-7][0-7_]*\b/ },
      { match: /\b0x[0-9a-fA-F][0-9a-fA-F_]*\b/ },
      { match: /\b0b[0-1][0-1_]*\b/ }
    ],
    relevance: 0
  }, d = [
    e.BACKSLASH_ESCAPE,
    o,
    l
  ], u = [
    /!/,
    /\//,
    /\|/,
    /\?/,
    /'/,
    /"/,
    // valid but infrequent and weird
    /#/
    // valid but infrequent and weird
  ], p = (m, y, h = "\\1") => {
    const S = h === "\\1" ? h : t.concat(h, y);
    return t.concat(
      t.concat("(?:", m, ")"),
      y,
      /(?:\\.|[^\\\/])*?/,
      S,
      /(?:\\.|[^\\\/])*?/,
      h,
      r
    );
  }, f = (m, y, h) => t.concat(
    t.concat("(?:", m, ")"),
    y,
    /(?:\\.|[^\\\/])*?/,
    h,
    r
  ), g = [
    l,
    e.HASH_COMMENT_MODE,
    e.COMMENT(
      /^=\w/,
      /=cut/,
      { endsWithParent: !0 }
    ),
    a,
    {
      className: "string",
      contains: d,
      variants: [
        {
          begin: "q[qwxr]?\\s*\\(",
          end: "\\)",
          relevance: 5
        },
        {
          begin: "q[qwxr]?\\s*\\[",
          end: "\\]",
          relevance: 5
        },
        {
          begin: "q[qwxr]?\\s*\\{",
          end: "\\}",
          relevance: 5
        },
        {
          begin: "q[qwxr]?\\s*\\|",
          end: "\\|",
          relevance: 5
        },
        {
          begin: "q[qwxr]?\\s*<",
          end: ">",
          relevance: 5
        },
        {
          begin: "qw\\s+q",
          end: "q",
          relevance: 5
        },
        {
          begin: "'",
          end: "'",
          contains: [e.BACKSLASH_ESCAPE]
        },
        {
          begin: '"',
          end: '"'
        },
        {
          begin: "`",
          end: "`",
          contains: [e.BACKSLASH_ESCAPE]
        },
        {
          begin: /\{\w+\}/,
          relevance: 0
        },
        {
          begin: "-?\\w+\\s*=>",
          relevance: 0
        }
      ]
    },
    c,
    {
      // regexp container
      begin: "(\\/\\/|" + e.RE_STARTERS_RE + "|\\b(split|return|print|reverse|grep)\\b)\\s*",
      keywords: "split return print reverse grep",
      relevance: 0,
      contains: [
        e.HASH_COMMENT_MODE,
        {
          className: "regexp",
          variants: [
            // allow matching common delimiters
            { begin: p("s|tr|y", t.either(...u, { capture: !0 })) },
            // and then paired delmis
            { begin: p("s|tr|y", "\\(", "\\)") },
            { begin: p("s|tr|y", "\\[", "\\]") },
            { begin: p("s|tr|y", "\\{", "\\}") }
          ],
          relevance: 2
        },
        {
          className: "regexp",
          variants: [
            {
              // could be a comment in many languages so do not count
              // as relevant
              begin: /(m|qr)\/\//,
              relevance: 0
            },
            // prefix is optional with /regex/
            { begin: f("(?:m|qr)?", /\//, /\//) },
            // allow matching common delimiters
            { begin: f("m|qr", t.either(...u, { capture: !0 }), /\1/) },
            // allow common paired delmins
            { begin: f("m|qr", /\(/, /\)/) },
            { begin: f("m|qr", /\[/, /\]/) },
            { begin: f("m|qr", /\{/, /\}/) }
          ]
        }
      ]
    },
    {
      className: "function",
      beginKeywords: "sub method",
      end: "(\\s*\\(.*?\\))?[;{]",
      excludeEnd: !0,
      relevance: 5,
      contains: [e.TITLE_MODE, s]
    },
    {
      className: "class",
      beginKeywords: "class",
      end: "[;{]",
      excludeEnd: !0,
      relevance: 5,
      contains: [e.TITLE_MODE, s, c]
    },
    {
      begin: "-\\w\\b",
      relevance: 0
    },
    {
      begin: "^__DATA__$",
      end: "^__END__$",
      subLanguage: "mojolicious",
      contains: [
        {
          begin: "^@@.*",
          end: "$",
          className: "comment"
        }
      ]
    }
  ];
  return o.contains = g, a.contains = g, {
    name: "Perl",
    aliases: [
      "pl",
      "pm"
    ],
    keywords: i,
    contains: g
  };
}
function up(e) {
  const t = e.regex, n = /(?![A-Za-z0-9])(?![$])/, r = t.concat(
    /[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/,
    n
  ), i = t.concat(
    /(\\?[A-Z][a-z0-9_\x7f-\xff]+|\\?[A-Z]+(?=[A-Z][a-z0-9_\x7f-\xff])){1,}/,
    n
  ), o = t.concat(
    /[A-Z]+/,
    n
  ), a = {
    scope: "variable",
    match: "\\$+" + r
  }, s = {
    scope: "meta",
    variants: [
      { begin: /<\?php/, relevance: 10 },
      // boost for obvious PHP
      { begin: /<\?=/ },
      // less relevant per PSR-1 which says not to use short-tags
      { begin: /<\?/, relevance: 0.1 },
      { begin: /\?>/ }
      // end php tag
    ]
  }, l = {
    scope: "subst",
    variants: [
      { begin: /\$\w+/ },
      {
        begin: /\{\$/,
        end: /\}/
      }
    ]
  }, c = e.inherit(e.APOS_STRING_MODE, { illegal: null }), d = e.inherit(e.QUOTE_STRING_MODE, {
    illegal: null,
    contains: e.QUOTE_STRING_MODE.contains.concat(l)
  }), u = {
    begin: /<<<[ \t]*(?:(\w+)|"(\w+)")\n/,
    end: /[ \t]*(\w+)\b/,
    contains: e.QUOTE_STRING_MODE.contains.concat(l),
    "on:begin": (q, $) => {
      $.data._beginMatch = q[1] || q[2];
    },
    "on:end": (q, $) => {
      $.data._beginMatch !== q[1] && $.ignoreMatch();
    }
  }, p = e.END_SAME_AS_BEGIN({
    begin: /<<<[ \t]*'(\w+)'\n/,
    end: /[ \t]*(\w+)\b/
  }), f = `[ 	
]`, g = {
    scope: "string",
    variants: [
      d,
      c,
      u,
      p
    ]
  }, m = {
    scope: "number",
    variants: [
      { begin: "\\b0[bB][01]+(?:_[01]+)*\\b" },
      // Binary w/ underscore support
      { begin: "\\b0[oO][0-7]+(?:_[0-7]+)*\\b" },
      // Octals w/ underscore support
      { begin: "\\b0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*\\b" },
      // Hex w/ underscore support
      // Decimals w/ underscore support, with optional fragments and scientific exponent (e) suffix.
      { begin: "(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?" }
    ],
    relevance: 0
  }, y = [
    "false",
    "null",
    "true"
  ], h = [
    // Magic constants:
    // <https://www.php.net/manual/en/language.constants.predefined.php>
    "__CLASS__",
    "__DIR__",
    "__FILE__",
    "__FUNCTION__",
    "__COMPILER_HALT_OFFSET__",
    "__LINE__",
    "__METHOD__",
    "__NAMESPACE__",
    "__TRAIT__",
    // Function that look like language construct or language construct that look like function:
    // List of keywords that may not require parenthesis
    "die",
    "echo",
    "exit",
    "include",
    "include_once",
    "print",
    "require",
    "require_once",
    // These are not language construct (function) but operate on the currently-executing function and can access the current symbol table
    // 'compact extract func_get_arg func_get_args func_num_args get_called_class get_parent_class ' +
    // Other keywords:
    // <https://www.php.net/manual/en/reserved.php>
    // <https://www.php.net/manual/en/language.types.type-juggling.php>
    "array",
    "abstract",
    "and",
    "as",
    "binary",
    "bool",
    "boolean",
    "break",
    "callable",
    "case",
    "catch",
    "class",
    "clone",
    "const",
    "continue",
    "declare",
    "default",
    "do",
    "double",
    "else",
    "elseif",
    "empty",
    "enddeclare",
    "endfor",
    "endforeach",
    "endif",
    "endswitch",
    "endwhile",
    "enum",
    "eval",
    "extends",
    "final",
    "finally",
    "float",
    "for",
    "foreach",
    "from",
    "global",
    "goto",
    "if",
    "implements",
    "instanceof",
    "insteadof",
    "int",
    "integer",
    "interface",
    "isset",
    "iterable",
    "list",
    "match|0",
    "mixed",
    "new",
    "never",
    "object",
    "or",
    "private",
    "protected",
    "public",
    "readonly",
    "real",
    "return",
    "string",
    "switch",
    "throw",
    "trait",
    "try",
    "unset",
    "use",
    "var",
    "void",
    "while",
    "xor",
    "yield"
  ], S = [
    // Standard PHP library:
    // <https://www.php.net/manual/en/book.spl.php>
    "Error|0",
    "AppendIterator",
    "ArgumentCountError",
    "ArithmeticError",
    "ArrayIterator",
    "ArrayObject",
    "AssertionError",
    "BadFunctionCallException",
    "BadMethodCallException",
    "CachingIterator",
    "CallbackFilterIterator",
    "CompileError",
    "Countable",
    "DirectoryIterator",
    "DivisionByZeroError",
    "DomainException",
    "EmptyIterator",
    "ErrorException",
    "Exception",
    "FilesystemIterator",
    "FilterIterator",
    "GlobIterator",
    "InfiniteIterator",
    "InvalidArgumentException",
    "IteratorIterator",
    "LengthException",
    "LimitIterator",
    "LogicException",
    "MultipleIterator",
    "NoRewindIterator",
    "OutOfBoundsException",
    "OutOfRangeException",
    "OuterIterator",
    "OverflowException",
    "ParentIterator",
    "ParseError",
    "RangeException",
    "RecursiveArrayIterator",
    "RecursiveCachingIterator",
    "RecursiveCallbackFilterIterator",
    "RecursiveDirectoryIterator",
    "RecursiveFilterIterator",
    "RecursiveIterator",
    "RecursiveIteratorIterator",
    "RecursiveRegexIterator",
    "RecursiveTreeIterator",
    "RegexIterator",
    "RuntimeException",
    "SeekableIterator",
    "SplDoublyLinkedList",
    "SplFileInfo",
    "SplFileObject",
    "SplFixedArray",
    "SplHeap",
    "SplMaxHeap",
    "SplMinHeap",
    "SplObjectStorage",
    "SplObserver",
    "SplPriorityQueue",
    "SplQueue",
    "SplStack",
    "SplSubject",
    "SplTempFileObject",
    "TypeError",
    "UnderflowException",
    "UnexpectedValueException",
    "UnhandledMatchError",
    // Reserved interfaces:
    // <https://www.php.net/manual/en/reserved.interfaces.php>
    "ArrayAccess",
    "BackedEnum",
    "Closure",
    "Fiber",
    "Generator",
    "Iterator",
    "IteratorAggregate",
    "Serializable",
    "Stringable",
    "Throwable",
    "Traversable",
    "UnitEnum",
    "WeakReference",
    "WeakMap",
    // Reserved classes:
    // <https://www.php.net/manual/en/reserved.classes.php>
    "Directory",
    "__PHP_Incomplete_Class",
    "parent",
    "php_user_filter",
    "self",
    "static",
    "stdClass"
  ], N = {
    keyword: h,
    literal: ((q) => {
      const $ = [];
      return q.forEach((ne) => {
        $.push(ne), ne.toLowerCase() === ne ? $.push(ne.toUpperCase()) : $.push(ne.toLowerCase());
      }), $;
    })(y),
    built_in: S
  }, I = (q) => q.map(($) => $.replace(/\|\d+$/, "")), k = { variants: [
    {
      match: [
        /new/,
        t.concat(f, "+"),
        // to prevent built ins from being confused as the class constructor call
        t.concat("(?!", I(S).join("\\b|"), "\\b)"),
        i
      ],
      scope: {
        1: "keyword",
        4: "title.class"
      }
    }
  ] }, A = t.concat(r, "\\b(?!\\()"), O = { variants: [
    {
      match: [
        t.concat(
          /::/,
          t.lookahead(/(?!class\b)/)
        ),
        A
      ],
      scope: { 2: "variable.constant" }
    },
    {
      match: [
        /::/,
        /class/
      ],
      scope: { 2: "variable.language" }
    },
    {
      match: [
        i,
        t.concat(
          /::/,
          t.lookahead(/(?!class\b)/)
        ),
        A
      ],
      scope: {
        1: "title.class",
        3: "variable.constant"
      }
    },
    {
      match: [
        i,
        t.concat(
          "::",
          t.lookahead(/(?!class\b)/)
        )
      ],
      scope: { 1: "title.class" }
    },
    {
      match: [
        i,
        /::/,
        /class/
      ],
      scope: {
        1: "title.class",
        3: "variable.language"
      }
    }
  ] }, L = {
    scope: "attr",
    match: t.concat(r, t.lookahead(":"), t.lookahead(/(?!::)/))
  }, w = {
    relevance: 0,
    begin: /\(/,
    end: /\)/,
    keywords: N,
    contains: [
      L,
      a,
      O,
      e.C_BLOCK_COMMENT_MODE,
      g,
      m,
      k
    ]
  }, v = {
    relevance: 0,
    match: [
      /\b/,
      // to prevent keywords from being confused as the function title
      t.concat("(?!fn\\b|function\\b|", I(h).join("\\b|"), "|", I(S).join("\\b|"), "\\b)"),
      r,
      t.concat(f, "*"),
      t.lookahead(/(?=\()/)
    ],
    scope: { 3: "title.function.invoke" },
    contains: [w]
  };
  w.contains.push(v);
  const D = [
    L,
    O,
    e.C_BLOCK_COMMENT_MODE,
    g,
    m,
    k
  ], K = {
    begin: t.concat(
      /#\[\s*\\?/,
      t.either(
        i,
        o
      )
    ),
    beginScope: "meta",
    end: /]/,
    endScope: "meta",
    keywords: {
      literal: y,
      keyword: [
        "new",
        "array"
      ]
    },
    contains: [
      {
        begin: /\[/,
        end: /]/,
        keywords: {
          literal: y,
          keyword: [
            "new",
            "array"
          ]
        },
        contains: [
          "self",
          ...D
        ]
      },
      ...D,
      {
        scope: "meta",
        variants: [
          { match: i },
          { match: o }
        ]
      }
    ]
  };
  return {
    case_insensitive: !1,
    keywords: N,
    contains: [
      K,
      e.HASH_COMMENT_MODE,
      e.COMMENT("//", "$"),
      e.COMMENT(
        "/\\*",
        "\\*/",
        { contains: [
          {
            scope: "doctag",
            match: "@[A-Za-z]+"
          }
        ] }
      ),
      {
        match: /__halt_compiler\(\);/,
        keywords: "__halt_compiler",
        starts: {
          scope: "comment",
          end: e.MATCH_NOTHING_RE,
          contains: [
            {
              match: /\?>/,
              scope: "meta",
              endsParent: !0
            }
          ]
        }
      },
      s,
      {
        scope: "variable.language",
        match: /\$this\b/
      },
      a,
      v,
      O,
      {
        match: [
          /const/,
          /\s/,
          r
        ],
        scope: {
          1: "keyword",
          3: "variable.constant"
        }
      },
      k,
      {
        scope: "function",
        relevance: 0,
        beginKeywords: "fn function",
        end: /[;{]/,
        excludeEnd: !0,
        illegal: "[$%\\[]",
        contains: [
          { beginKeywords: "use" },
          e.UNDERSCORE_TITLE_MODE,
          {
            begin: "=>",
            // No markup, just a relevance booster
            endsParent: !0
          },
          {
            scope: "params",
            begin: "\\(",
            end: "\\)",
            excludeBegin: !0,
            excludeEnd: !0,
            keywords: N,
            contains: [
              "self",
              K,
              a,
              O,
              e.C_BLOCK_COMMENT_MODE,
              g,
              m
            ]
          }
        ]
      },
      {
        scope: "class",
        variants: [
          {
            beginKeywords: "enum",
            illegal: /[($"]/
          },
          {
            beginKeywords: "class interface trait",
            illegal: /[:($"]/
          }
        ],
        relevance: 0,
        end: /\{/,
        excludeEnd: !0,
        contains: [
          { beginKeywords: "extends implements" },
          e.UNDERSCORE_TITLE_MODE
        ]
      },
      // both use and namespace still use "old style" rules (vs multi-match)
      // because the namespace name can include `\` and we still want each
      // element to be treated as its own *individual* title
      {
        beginKeywords: "namespace",
        relevance: 0,
        end: ";",
        illegal: /[.']/,
        contains: [e.inherit(e.UNDERSCORE_TITLE_MODE, { scope: "title.class" })]
      },
      {
        beginKeywords: "use",
        relevance: 0,
        end: ";",
        contains: [
          // TODO: title.function vs title.class
          {
            match: /\b(as|const|function)\b/,
            scope: "keyword"
          },
          // TODO: could be title.class or title.function
          e.UNDERSCORE_TITLE_MODE
        ]
      },
      g,
      m
    ]
  };
}
function dp(e) {
  return {
    name: "PHP template",
    subLanguage: "xml",
    contains: [
      {
        begin: /<\?(php|=)?/,
        end: /\?>/,
        subLanguage: "php",
        contains: [
          // We don't want the php closing tag ?> to close the PHP block when
          // inside any of the following blocks:
          {
            begin: "/\\*",
            end: "\\*/",
            skip: !0
          },
          {
            begin: 'b"',
            end: '"',
            skip: !0
          },
          {
            begin: "b'",
            end: "'",
            skip: !0
          },
          e.inherit(e.APOS_STRING_MODE, {
            illegal: null,
            className: null,
            contains: null,
            skip: !0
          }),
          e.inherit(e.QUOTE_STRING_MODE, {
            illegal: null,
            className: null,
            contains: null,
            skip: !0
          })
        ]
      }
    ]
  };
}
function fp(e) {
  return {
    name: "Plain text",
    aliases: [
      "text",
      "txt"
    ],
    disableAutodetect: !0
  };
}
function pp(e) {
  const t = e.regex, n = new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*", "u"), r = [
    "and",
    "as",
    "assert",
    "async",
    "await",
    "break",
    "case",
    "class",
    "continue",
    "def",
    "del",
    "elif",
    "else",
    "except",
    "finally",
    "for",
    "from",
    "global",
    "if",
    "import",
    "in",
    "is",
    "lambda",
    "match",
    "nonlocal|10",
    "not",
    "or",
    "pass",
    "raise",
    "return",
    "try",
    "while",
    "with",
    "yield"
  ], s = {
    $pattern: /[A-Za-z]\w+|__\w+__/,
    keyword: r,
    built_in: [
      "__import__",
      "abs",
      "all",
      "any",
      "ascii",
      "bin",
      "bool",
      "breakpoint",
      "bytearray",
      "bytes",
      "callable",
      "chr",
      "classmethod",
      "compile",
      "complex",
      "delattr",
      "dict",
      "dir",
      "divmod",
      "enumerate",
      "eval",
      "exec",
      "filter",
      "float",
      "format",
      "frozenset",
      "getattr",
      "globals",
      "hasattr",
      "hash",
      "help",
      "hex",
      "id",
      "input",
      "int",
      "isinstance",
      "issubclass",
      "iter",
      "len",
      "list",
      "locals",
      "map",
      "max",
      "memoryview",
      "min",
      "next",
      "object",
      "oct",
      "open",
      "ord",
      "pow",
      "print",
      "property",
      "range",
      "repr",
      "reversed",
      "round",
      "set",
      "setattr",
      "slice",
      "sorted",
      "staticmethod",
      "str",
      "sum",
      "super",
      "tuple",
      "type",
      "vars",
      "zip"
    ],
    literal: [
      "__debug__",
      "Ellipsis",
      "False",
      "None",
      "NotImplemented",
      "True"
    ],
    type: [
      "Any",
      "Callable",
      "Coroutine",
      "Dict",
      "List",
      "Literal",
      "Generic",
      "Optional",
      "Sequence",
      "Set",
      "Tuple",
      "Type",
      "Union"
    ]
  }, l = {
    className: "meta",
    begin: /^(>>>|\.\.\.) /
  }, c = {
    className: "subst",
    begin: /\{/,
    end: /\}/,
    keywords: s,
    illegal: /#/
  }, d = {
    begin: /\{\{/,
    relevance: 0
  }, u = {
    className: "string",
    contains: [e.BACKSLASH_ESCAPE],
    variants: [
      {
        begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
        end: /'''/,
        contains: [
          e.BACKSLASH_ESCAPE,
          l
        ],
        relevance: 10
      },
      {
        begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
        end: /"""/,
        contains: [
          e.BACKSLASH_ESCAPE,
          l
        ],
        relevance: 10
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])'''/,
        end: /'''/,
        contains: [
          e.BACKSLASH_ESCAPE,
          l,
          d,
          c
        ]
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])"""/,
        end: /"""/,
        contains: [
          e.BACKSLASH_ESCAPE,
          l,
          d,
          c
        ]
      },
      {
        begin: /([uU]|[rR])'/,
        end: /'/,
        relevance: 10
      },
      {
        begin: /([uU]|[rR])"/,
        end: /"/,
        relevance: 10
      },
      {
        begin: /([bB]|[bB][rR]|[rR][bB])'/,
        end: /'/
      },
      {
        begin: /([bB]|[bB][rR]|[rR][bB])"/,
        end: /"/
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])'/,
        end: /'/,
        contains: [
          e.BACKSLASH_ESCAPE,
          d,
          c
        ]
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])"/,
        end: /"/,
        contains: [
          e.BACKSLASH_ESCAPE,
          d,
          c
        ]
      },
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE
    ]
  }, p = "[0-9](_?[0-9])*", f = `(\\b(${p}))?\\.(${p})|\\b(${p})\\.`, g = `\\b|${r.join("|")}`, m = {
    className: "number",
    relevance: 0,
    variants: [
      // exponentfloat, pointfloat
      // https://docs.python.org/3.9/reference/lexical_analysis.html#floating-point-literals
      // optionally imaginary
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      // Note: no leading \b because floats can start with a decimal point
      // and we don't want to mishandle e.g. `fn(.5)`,
      // no trailing \b for pointfloat because it can end with a decimal point
      // and we don't want to mishandle e.g. `0..hex()`; this should be safe
      // because both MUST contain a decimal point and so cannot be confused with
      // the interior part of an identifier
      {
        begin: `(\\b(${p})|(${f}))[eE][+-]?(${p})[jJ]?(?=${g})`
      },
      {
        begin: `(${f})[jJ]?`
      },
      // decinteger, bininteger, octinteger, hexinteger
      // https://docs.python.org/3.9/reference/lexical_analysis.html#integer-literals
      // optionally "long" in Python 2
      // https://docs.python.org/2.7/reference/lexical_analysis.html#integer-and-long-integer-literals
      // decinteger is optionally imaginary
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      {
        begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${g})`
      },
      {
        begin: `\\b0[bB](_?[01])+[lL]?(?=${g})`
      },
      {
        begin: `\\b0[oO](_?[0-7])+[lL]?(?=${g})`
      },
      {
        begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${g})`
      },
      // imagnumber (digitpart-based)
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      {
        begin: `\\b(${p})[jJ](?=${g})`
      }
    ]
  }, y = {
    className: "comment",
    begin: t.lookahead(/# type:/),
    end: /$/,
    keywords: s,
    contains: [
      {
        // prevent keywords from coloring `type`
        begin: /# type:/
      },
      // comment within a datatype comment includes no keywords
      {
        begin: /#/,
        end: /\b\B/,
        endsWithParent: !0
      }
    ]
  }, h = {
    className: "params",
    variants: [
      // Exclude params in functions without params
      {
        className: "",
        begin: /\(\s*\)/,
        skip: !0
      },
      {
        begin: /\(/,
        end: /\)/,
        excludeBegin: !0,
        excludeEnd: !0,
        keywords: s,
        contains: [
          "self",
          l,
          m,
          u,
          e.HASH_COMMENT_MODE
        ]
      }
    ]
  };
  return c.contains = [
    u,
    m,
    l
  ], {
    name: "Python",
    aliases: [
      "py",
      "gyp",
      "ipython"
    ],
    unicodeRegex: !0,
    keywords: s,
    illegal: /(<\/|\?)|=>/,
    contains: [
      l,
      m,
      {
        // very common convention
        scope: "variable.language",
        match: /\bself\b/
      },
      {
        // eat "if" prior to string so that it won't accidentally be
        // labeled as an f-string
        beginKeywords: "if",
        relevance: 0
      },
      { match: /\bor\b/, scope: "keyword" },
      u,
      y,
      e.HASH_COMMENT_MODE,
      {
        match: [
          /\bdef/,
          /\s+/,
          n
        ],
        scope: {
          1: "keyword",
          3: "title.function"
        },
        contains: [h]
      },
      {
        variants: [
          {
            match: [
              /\bclass/,
              /\s+/,
              n,
              /\s*/,
              /\(\s*/,
              n,
              /\s*\)/
            ]
          },
          {
            match: [
              /\bclass/,
              /\s+/,
              n
            ]
          }
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          6: "title.class.inherited"
        }
      },
      {
        className: "meta",
        begin: /^[\t ]*@/,
        end: /(?=#)|$/,
        contains: [
          m,
          h,
          u
        ]
      }
    ]
  };
}
function gp(e) {
  return {
    aliases: ["pycon"],
    contains: [
      {
        className: "meta.prompt",
        starts: {
          // a space separates the REPL prefix from the actual code
          // this is purely for cleaner HTML output
          end: / |$/,
          starts: {
            end: "$",
            subLanguage: "python"
          }
        },
        variants: [
          { begin: /^>>>(?=[ ]|$)/ },
          { begin: /^\.\.\.(?=[ ]|$)/ }
        ]
      }
    ]
  };
}
function hp(e) {
  const t = e.regex, n = /(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/, r = t.either(
    // Special case: only hexadecimal binary powers can contain fractions
    /0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/,
    // Hexadecimal numbers without fraction and optional binary power
    /0[xX][0-9a-fA-F]+(?:[pP][+-]?\d+)?[Li]?/,
    // Decimal numbers
    /(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?[Li]?/
  ), i = /[=!<>:]=|\|\||&&|:::?|<-|<<-|->>|->|\|>|[-+*\/?!$&|:<=>@^~]|\*\*/, o = t.either(
    /[()]/,
    /[{}]/,
    /\[\[/,
    /[[\]]/,
    /\\/,
    /,/
  );
  return {
    name: "R",
    keywords: {
      $pattern: n,
      keyword: "function if in break next repeat else for while",
      literal: "NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10",
      built_in: (
        // Builtin constants
        "LETTERS letters month.abb month.name pi T F abs acos acosh all any anyNA Arg as.call as.character as.complex as.double as.environment as.integer as.logical as.null.default as.numeric as.raw asin asinh atan atanh attr attributes baseenv browser c call ceiling class Conj cos cosh cospi cummax cummin cumprod cumsum digamma dim dimnames emptyenv exp expression floor forceAndCall gamma gc.time globalenv Im interactive invisible is.array is.atomic is.call is.character is.complex is.double is.environment is.expression is.finite is.function is.infinite is.integer is.language is.list is.logical is.matrix is.na is.name is.nan is.null is.numeric is.object is.pairlist is.raw is.recursive is.single is.symbol lazyLoadDBfetch length lgamma list log max min missing Mod names nargs nzchar oldClass on.exit pos.to.env proc.time prod quote range Re rep retracemem return round seq_along seq_len seq.int sign signif sin sinh sinpi sqrt standardGeneric substitute sum switch tan tanh tanpi tracemem trigamma trunc unclass untracemem UseMethod xtfrm"
      )
    },
    contains: [
      // Roxygen comments
      e.COMMENT(
        /#'/,
        /$/,
        { contains: [
          {
            // Handle `@examples` separately to cause all subsequent code
            // until the next `@`-tag on its own line to be kept as-is,
            // preventing highlighting. This code is example R code, so nested
            // doctags shouldn’t be treated as such. See
            // `test/markup/r/roxygen.txt` for an example.
            scope: "doctag",
            match: /@examples/,
            starts: {
              end: t.lookahead(t.either(
                // end if another doc comment
                /\n^#'\s*(?=@[a-zA-Z]+)/,
                // or a line with no comment
                /\n^(?!#')/
              )),
              endsParent: !0
            }
          },
          {
            // Handle `@param` to highlight the parameter name following
            // after.
            scope: "doctag",
            begin: "@param",
            end: /$/,
            contains: [
              {
                scope: "variable",
                variants: [
                  { match: n },
                  { match: /`(?:\\.|[^`\\])+`/ }
                ],
                endsParent: !0
              }
            ]
          },
          {
            scope: "doctag",
            match: /@[a-zA-Z]+/
          },
          {
            scope: "keyword",
            match: /\\[a-zA-Z]+/
          }
        ] }
      ),
      e.HASH_COMMENT_MODE,
      {
        scope: "string",
        contains: [e.BACKSLASH_ESCAPE],
        variants: [
          e.END_SAME_AS_BEGIN({
            begin: /[rR]"(-*)\(/,
            end: /\)(-*)"/
          }),
          e.END_SAME_AS_BEGIN({
            begin: /[rR]"(-*)\{/,
            end: /\}(-*)"/
          }),
          e.END_SAME_AS_BEGIN({
            begin: /[rR]"(-*)\[/,
            end: /\](-*)"/
          }),
          e.END_SAME_AS_BEGIN({
            begin: /[rR]'(-*)\(/,
            end: /\)(-*)'/
          }),
          e.END_SAME_AS_BEGIN({
            begin: /[rR]'(-*)\{/,
            end: /\}(-*)'/
          }),
          e.END_SAME_AS_BEGIN({
            begin: /[rR]'(-*)\[/,
            end: /\](-*)'/
          }),
          {
            begin: '"',
            end: '"',
            relevance: 0
          },
          {
            begin: "'",
            end: "'",
            relevance: 0
          }
        ]
      },
      // Matching numbers immediately following punctuation and operators is
      // tricky since we need to look at the character ahead of a number to
      // ensure the number is not part of an identifier, and we cannot use
      // negative look-behind assertions. So instead we explicitly handle all
      // possible combinations of (operator|punctuation), number.
      // TODO: replace with negative look-behind when available
      // { begin: /(?<![a-zA-Z0-9._])0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/ },
      // { begin: /(?<![a-zA-Z0-9._])0[xX][0-9a-fA-F]+([pP][+-]?\d+)?[Li]?/ },
      // { begin: /(?<![a-zA-Z0-9._])(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?[Li]?/ }
      {
        relevance: 0,
        variants: [
          {
            scope: {
              1: "operator",
              2: "number"
            },
            match: [
              i,
              r
            ]
          },
          {
            scope: {
              1: "operator",
              2: "number"
            },
            match: [
              /%[^%]*%/,
              r
            ]
          },
          {
            scope: {
              1: "punctuation",
              2: "number"
            },
            match: [
              o,
              r
            ]
          },
          {
            scope: { 2: "number" },
            match: [
              /[^a-zA-Z0-9._]|^/,
              // not part of an identifier, or start of document
              r
            ]
          }
        ]
      },
      // Operators/punctuation when they're not directly followed by numbers
      {
        // Relevance boost for the most common assignment form.
        scope: { 3: "operator" },
        match: [
          n,
          /\s+/,
          /<-/,
          /\s+/
        ]
      },
      {
        scope: "operator",
        relevance: 0,
        variants: [
          { match: i },
          { match: /%[^%]*%/ }
        ]
      },
      {
        scope: "punctuation",
        relevance: 0,
        match: o
      },
      {
        // Escaped identifier
        begin: "`",
        end: "`",
        contains: [{ begin: /\\./ }]
      }
    ]
  };
}
function mp(e) {
  const t = e.regex, n = "([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)", r = t.either(
    /\b([A-Z]+[a-z0-9]+)+/,
    // ends in caps
    /\b([A-Z]+[a-z0-9]+)+[A-Z]+/
  ), i = t.concat(r, /(::\w+)*/), a = {
    "variable.constant": [
      "__FILE__",
      "__LINE__",
      "__ENCODING__"
    ],
    "variable.language": [
      "self",
      "super"
    ],
    keyword: [
      "alias",
      "and",
      "begin",
      "BEGIN",
      "break",
      "case",
      "class",
      "defined",
      "do",
      "else",
      "elsif",
      "end",
      "END",
      "ensure",
      "for",
      "if",
      "in",
      "module",
      "next",
      "not",
      "or",
      "redo",
      "require",
      "rescue",
      "retry",
      "return",
      "then",
      "undef",
      "unless",
      "until",
      "when",
      "while",
      "yield",
      ...[
        "include",
        "extend",
        "prepend",
        "public",
        "private",
        "protected",
        "raise",
        "throw"
      ]
    ],
    built_in: [
      "proc",
      "lambda",
      "attr_accessor",
      "attr_reader",
      "attr_writer",
      "define_method",
      "private_constant",
      "module_function"
    ],
    literal: [
      "true",
      "false",
      "nil"
    ]
  }, s = {
    className: "doctag",
    begin: "@[A-Za-z]+"
  }, l = {
    begin: "#<",
    end: ">"
  }, c = [
    e.COMMENT(
      "#",
      "$",
      { contains: [s] }
    ),
    e.COMMENT(
      "^=begin",
      "^=end",
      {
        contains: [s],
        relevance: 10
      }
    ),
    e.COMMENT("^__END__", e.MATCH_NOTHING_RE)
  ], d = {
    className: "subst",
    begin: /#\{/,
    end: /\}/,
    keywords: a
  }, u = {
    className: "string",
    contains: [
      e.BACKSLASH_ESCAPE,
      d
    ],
    variants: [
      {
        begin: /'/,
        end: /'/
      },
      {
        begin: /"/,
        end: /"/
      },
      {
        begin: /`/,
        end: /`/
      },
      {
        begin: /%[qQwWx]?\(/,
        end: /\)/
      },
      {
        begin: /%[qQwWx]?\[/,
        end: /\]/
      },
      {
        begin: /%[qQwWx]?\{/,
        end: /\}/
      },
      {
        begin: /%[qQwWx]?</,
        end: />/
      },
      {
        begin: /%[qQwWx]?\//,
        end: /\//
      },
      {
        begin: /%[qQwWx]?%/,
        end: /%/
      },
      {
        begin: /%[qQwWx]?-/,
        end: /-/
      },
      {
        begin: /%[qQwWx]?\|/,
        end: /\|/
      },
      // in the following expressions, \B in the beginning suppresses recognition of ?-sequences
      // where ? is the last character of a preceding identifier, as in: `func?4`
      { begin: /\B\?(\\\d{1,3})/ },
      { begin: /\B\?(\\x[A-Fa-f0-9]{1,2})/ },
      { begin: /\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/ },
      { begin: /\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/ },
      { begin: /\B\?\\(c|C-)[\x20-\x7e]/ },
      { begin: /\B\?\\?\S/ },
      // heredocs
      {
        // this guard makes sure that we have an entire heredoc and not a false
        // positive (auto-detect, etc.)
        begin: t.concat(
          /<<[-~]?'?/,
          t.lookahead(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/)
        ),
        contains: [
          e.END_SAME_AS_BEGIN({
            begin: /(\w+)/,
            end: /(\w+)/,
            contains: [
              e.BACKSLASH_ESCAPE,
              d
            ]
          })
        ]
      }
    ]
  }, p = "[1-9](_?[0-9])*|0", f = "[0-9](_?[0-9])*", g = {
    className: "number",
    relevance: 0,
    variants: [
      // decimal integer/float, optionally exponential or rational, optionally imaginary
      { begin: `\\b(${p})(\\.(${f}))?([eE][+-]?(${f})|r)?i?\\b` },
      // explicit decimal/binary/octal/hexadecimal integer,
      // optionally rational and/or imaginary
      { begin: "\\b0[dD][0-9](_?[0-9])*r?i?\\b" },
      { begin: "\\b0[bB][0-1](_?[0-1])*r?i?\\b" },
      { begin: "\\b0[oO][0-7](_?[0-7])*r?i?\\b" },
      { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b" },
      // 0-prefixed implicit octal integer, optionally rational and/or imaginary
      { begin: "\\b0(_?[0-7])+r?i?\\b" }
    ]
  }, m = {
    variants: [
      {
        match: /\(\)/
      },
      {
        className: "params",
        begin: /\(/,
        end: /(?=\))/,
        excludeBegin: !0,
        endsParent: !0,
        keywords: a
      }
    ]
  }, k = [
    u,
    {
      variants: [
        {
          match: [
            /class\s+/,
            i,
            /\s+<\s+/,
            i
          ]
        },
        {
          match: [
            /\b(class|module)\s+/,
            i
          ]
        }
      ],
      scope: {
        2: "title.class",
        4: "title.class.inherited"
      },
      keywords: a
    },
    {
      match: [
        /(include|extend)\s+/,
        i
      ],
      scope: {
        2: "title.class"
      },
      keywords: a
    },
    {
      relevance: 0,
      match: [
        i,
        /\.new[. (]/
      ],
      scope: {
        1: "title.class"
      }
    },
    {
      relevance: 0,
      match: /\b[A-Z][A-Z_0-9]+\b/,
      className: "variable.constant"
    },
    {
      relevance: 0,
      match: r,
      scope: "title.class"
    },
    {
      match: [
        /def/,
        /\s+/,
        n
      ],
      scope: {
        1: "keyword",
        3: "title.function"
      },
      contains: [
        m
      ]
    },
    {
      // swallow namespace qualifiers before symbols
      begin: e.IDENT_RE + "::"
    },
    {
      className: "symbol",
      begin: e.UNDERSCORE_IDENT_RE + "(!|\\?)?:",
      relevance: 0
    },
    {
      className: "symbol",
      begin: ":(?!\\s)",
      contains: [
        u,
        { begin: n }
      ],
      relevance: 0
    },
    g,
    {
      // negative-look forward attempts to prevent false matches like:
      // @ident@ or $ident$ that might indicate this is not ruby at all
      className: "variable",
      begin: "(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"
    },
    {
      className: "params",
      begin: /\|(?!=)/,
      end: /\|/,
      excludeBegin: !0,
      excludeEnd: !0,
      relevance: 0,
      // this could be a lot of things (in other languages) other than params
      keywords: a
    },
    {
      // regexp container
      begin: "(" + e.RE_STARTERS_RE + "|unless)\\s*",
      keywords: "unless",
      contains: [
        {
          className: "regexp",
          contains: [
            e.BACKSLASH_ESCAPE,
            d
          ],
          illegal: /\n/,
          variants: [
            {
              begin: "/",
              end: "/[a-z]*"
            },
            {
              begin: /%r\{/,
              end: /\}[a-z]*/
            },
            {
              begin: "%r\\(",
              end: "\\)[a-z]*"
            },
            {
              begin: "%r!",
              end: "![a-z]*"
            },
            {
              begin: "%r\\[",
              end: "\\][a-z]*"
            }
          ]
        }
      ].concat(l, c),
      relevance: 0
    }
  ].concat(l, c);
  d.contains = k, m.contains = k;
  const w = [
    {
      begin: /^\s*=>/,
      starts: {
        end: "$",
        contains: k
      }
    },
    {
      className: "meta.prompt",
      begin: "^(" + "[>?]>" + "|" + "[\\w#]+\\(\\w+\\):\\d+:\\d+[>*]" + "|" + "(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>" + ")(?=[ ])",
      starts: {
        end: "$",
        keywords: a,
        contains: k
      }
    }
  ];
  return c.unshift(l), {
    name: "Ruby",
    aliases: [
      "rb",
      "gemspec",
      "podspec",
      "thor",
      "irb"
    ],
    keywords: a,
    illegal: /\/\*/,
    contains: [e.SHEBANG({ binary: "ruby" })].concat(w).concat(c).concat(k)
  };
}
function bp(e) {
  const t = e.regex, n = /(r#)?/, r = t.concat(n, e.UNDERSCORE_IDENT_RE), i = t.concat(n, e.IDENT_RE), o = {
    className: "title.function.invoke",
    relevance: 0,
    begin: t.concat(
      /\b/,
      /(?!let|for|while|if|else|match\b)/,
      i,
      t.lookahead(/\s*\(/)
    )
  }, a = "([ui](8|16|32|64|128|size)|f(32|64))?", s = [
    "abstract",
    "as",
    "async",
    "await",
    "become",
    "box",
    "break",
    "const",
    "continue",
    "crate",
    "do",
    "dyn",
    "else",
    "enum",
    "extern",
    "false",
    "final",
    "fn",
    "for",
    "if",
    "impl",
    "in",
    "let",
    "loop",
    "macro",
    "match",
    "mod",
    "move",
    "mut",
    "override",
    "priv",
    "pub",
    "ref",
    "return",
    "self",
    "Self",
    "static",
    "struct",
    "super",
    "trait",
    "true",
    "try",
    "type",
    "typeof",
    "union",
    "unsafe",
    "unsized",
    "use",
    "virtual",
    "where",
    "while",
    "yield"
  ], l = [
    "true",
    "false",
    "Some",
    "None",
    "Ok",
    "Err"
  ], c = [
    // functions
    "drop ",
    // traits
    "Copy",
    "Send",
    "Sized",
    "Sync",
    "Drop",
    "Fn",
    "FnMut",
    "FnOnce",
    "ToOwned",
    "Clone",
    "Debug",
    "PartialEq",
    "PartialOrd",
    "Eq",
    "Ord",
    "AsRef",
    "AsMut",
    "Into",
    "From",
    "Default",
    "Iterator",
    "Extend",
    "IntoIterator",
    "DoubleEndedIterator",
    "ExactSizeIterator",
    "SliceConcatExt",
    "ToString",
    // macros
    "assert!",
    "assert_eq!",
    "bitflags!",
    "bytes!",
    "cfg!",
    "col!",
    "concat!",
    "concat_idents!",
    "debug_assert!",
    "debug_assert_eq!",
    "env!",
    "eprintln!",
    "panic!",
    "file!",
    "format!",
    "format_args!",
    "include_bytes!",
    "include_str!",
    "line!",
    "local_data_key!",
    "module_path!",
    "option_env!",
    "print!",
    "println!",
    "select!",
    "stringify!",
    "try!",
    "unimplemented!",
    "unreachable!",
    "vec!",
    "write!",
    "writeln!",
    "macro_rules!",
    "assert_ne!",
    "debug_assert_ne!"
  ], d = [
    "i8",
    "i16",
    "i32",
    "i64",
    "i128",
    "isize",
    "u8",
    "u16",
    "u32",
    "u64",
    "u128",
    "usize",
    "f32",
    "f64",
    "str",
    "char",
    "bool",
    "Box",
    "Option",
    "Result",
    "String",
    "Vec"
  ];
  return {
    name: "Rust",
    aliases: ["rs"],
    keywords: {
      $pattern: e.IDENT_RE + "!?",
      type: d,
      keyword: s,
      literal: l,
      built_in: c
    },
    illegal: "</",
    contains: [
      e.C_LINE_COMMENT_MODE,
      e.COMMENT("/\\*", "\\*/", { contains: ["self"] }),
      e.inherit(e.QUOTE_STRING_MODE, {
        begin: /b?"/,
        illegal: null
      }),
      {
        className: "symbol",
        // negative lookahead to avoid matching `'`
        begin: /'[a-zA-Z_][a-zA-Z0-9_]*(?!')/
      },
      {
        scope: "string",
        variants: [
          { begin: /b?r(#*)"(.|\n)*?"\1(?!#)/ },
          {
            begin: /b?'/,
            end: /'/,
            contains: [
              {
                scope: "char.escape",
                match: /\\('|\w|x\w{2}|u\w{4}|U\w{8})/
              }
            ]
          }
        ]
      },
      {
        className: "number",
        variants: [
          { begin: "\\b0b([01_]+)" + a },
          { begin: "\\b0o([0-7_]+)" + a },
          { begin: "\\b0x([A-Fa-f0-9_]+)" + a },
          { begin: "\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)" + a }
        ],
        relevance: 0
      },
      {
        begin: [
          /fn/,
          /\s+/,
          r
        ],
        className: {
          1: "keyword",
          3: "title.function"
        }
      },
      {
        className: "meta",
        begin: "#!?\\[",
        end: "\\]",
        contains: [
          {
            className: "string",
            begin: /"/,
            end: /"/,
            contains: [
              e.BACKSLASH_ESCAPE
            ]
          }
        ]
      },
      {
        begin: [
          /let/,
          /\s+/,
          /(?:mut\s+)?/,
          r
        ],
        className: {
          1: "keyword",
          3: "keyword",
          4: "variable"
        }
      },
      // must come before impl/for rule later
      {
        begin: [
          /for/,
          /\s+/,
          r,
          /\s+/,
          /in/
        ],
        className: {
          1: "keyword",
          3: "variable",
          5: "keyword"
        }
      },
      {
        begin: [
          /type/,
          /\s+/,
          r
        ],
        className: {
          1: "keyword",
          3: "title.class"
        }
      },
      {
        begin: [
          /(?:trait|enum|struct|union|impl|for)/,
          /\s+/,
          r
        ],
        className: {
          1: "keyword",
          3: "title.class"
        }
      },
      {
        begin: e.IDENT_RE + "::",
        keywords: {
          keyword: "Self",
          built_in: c,
          type: d
        }
      },
      {
        className: "punctuation",
        begin: "->"
      },
      o
    ]
  };
}
const _p = (e) => ({
  IMPORTANT: {
    scope: "meta",
    begin: "!important"
  },
  BLOCK_COMMENT: e.C_BLOCK_COMMENT_MODE,
  HEXCOLOR: {
    scope: "number",
    begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
  },
  FUNCTION_DISPATCH: {
    className: "built_in",
    begin: /[\w-]+(?=\()/
  },
  ATTRIBUTE_SELECTOR_MODE: {
    scope: "selector-attr",
    begin: /\[/,
    end: /\]/,
    illegal: "$",
    contains: [
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE
    ]
  },
  CSS_NUMBER_MODE: {
    scope: "number",
    begin: e.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
    relevance: 0
  },
  CSS_VARIABLE: {
    className: "attr",
    begin: /--[A-Za-z_][A-Za-z0-9_-]*/
  }
}), Ep = [
  "a",
  "abbr",
  "address",
  "article",
  "aside",
  "audio",
  "b",
  "blockquote",
  "body",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "dd",
  "del",
  "details",
  "dfn",
  "div",
  "dl",
  "dt",
  "em",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "header",
  "hgroup",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "main",
  "mark",
  "menu",
  "nav",
  "object",
  "ol",
  "optgroup",
  "option",
  "p",
  "picture",
  "q",
  "quote",
  "samp",
  "section",
  "select",
  "source",
  "span",
  "strong",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "tr",
  "ul",
  "var",
  "video"
], yp = [
  "defs",
  "g",
  "marker",
  "mask",
  "pattern",
  "svg",
  "switch",
  "symbol",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feFlood",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMorphology",
  "feOffset",
  "feSpecularLighting",
  "feTile",
  "feTurbulence",
  "linearGradient",
  "radialGradient",
  "stop",
  "circle",
  "ellipse",
  "image",
  "line",
  "path",
  "polygon",
  "polyline",
  "rect",
  "text",
  "use",
  "textPath",
  "tspan",
  "foreignObject",
  "clipPath"
], kp = [
  ...Ep,
  ...yp
], xp = [
  "any-hover",
  "any-pointer",
  "aspect-ratio",
  "color",
  "color-gamut",
  "color-index",
  "device-aspect-ratio",
  "device-height",
  "device-width",
  "display-mode",
  "forced-colors",
  "grid",
  "height",
  "hover",
  "inverted-colors",
  "monochrome",
  "orientation",
  "overflow-block",
  "overflow-inline",
  "pointer",
  "prefers-color-scheme",
  "prefers-contrast",
  "prefers-reduced-motion",
  "prefers-reduced-transparency",
  "resolution",
  "scan",
  "scripting",
  "update",
  "width",
  // TODO: find a better solution?
  "min-width",
  "max-width",
  "min-height",
  "max-height"
].sort().reverse(), wp = [
  "active",
  "any-link",
  "blank",
  "checked",
  "current",
  "default",
  "defined",
  "dir",
  // dir()
  "disabled",
  "drop",
  "empty",
  "enabled",
  "first",
  "first-child",
  "first-of-type",
  "fullscreen",
  "future",
  "focus",
  "focus-visible",
  "focus-within",
  "has",
  // has()
  "host",
  // host or host()
  "host-context",
  // host-context()
  "hover",
  "indeterminate",
  "in-range",
  "invalid",
  "is",
  // is()
  "lang",
  // lang()
  "last-child",
  "last-of-type",
  "left",
  "link",
  "local-link",
  "not",
  // not()
  "nth-child",
  // nth-child()
  "nth-col",
  // nth-col()
  "nth-last-child",
  // nth-last-child()
  "nth-last-col",
  // nth-last-col()
  "nth-last-of-type",
  //nth-last-of-type()
  "nth-of-type",
  //nth-of-type()
  "only-child",
  "only-of-type",
  "optional",
  "out-of-range",
  "past",
  "placeholder-shown",
  "read-only",
  "read-write",
  "required",
  "right",
  "root",
  "scope",
  "target",
  "target-within",
  "user-invalid",
  "valid",
  "visited",
  "where"
  // where()
].sort().reverse(), Sp = [
  "after",
  "backdrop",
  "before",
  "cue",
  "cue-region",
  "first-letter",
  "first-line",
  "grammar-error",
  "marker",
  "part",
  "placeholder",
  "selection",
  "slotted",
  "spelling-error"
].sort().reverse(), Np = [
  "accent-color",
  "align-content",
  "align-items",
  "align-self",
  "alignment-baseline",
  "all",
  "anchor-name",
  "animation",
  "animation-composition",
  "animation-delay",
  "animation-direction",
  "animation-duration",
  "animation-fill-mode",
  "animation-iteration-count",
  "animation-name",
  "animation-play-state",
  "animation-range",
  "animation-range-end",
  "animation-range-start",
  "animation-timeline",
  "animation-timing-function",
  "appearance",
  "aspect-ratio",
  "backdrop-filter",
  "backface-visibility",
  "background",
  "background-attachment",
  "background-blend-mode",
  "background-clip",
  "background-color",
  "background-image",
  "background-origin",
  "background-position",
  "background-position-x",
  "background-position-y",
  "background-repeat",
  "background-size",
  "baseline-shift",
  "block-size",
  "border",
  "border-block",
  "border-block-color",
  "border-block-end",
  "border-block-end-color",
  "border-block-end-style",
  "border-block-end-width",
  "border-block-start",
  "border-block-start-color",
  "border-block-start-style",
  "border-block-start-width",
  "border-block-style",
  "border-block-width",
  "border-bottom",
  "border-bottom-color",
  "border-bottom-left-radius",
  "border-bottom-right-radius",
  "border-bottom-style",
  "border-bottom-width",
  "border-collapse",
  "border-color",
  "border-end-end-radius",
  "border-end-start-radius",
  "border-image",
  "border-image-outset",
  "border-image-repeat",
  "border-image-slice",
  "border-image-source",
  "border-image-width",
  "border-inline",
  "border-inline-color",
  "border-inline-end",
  "border-inline-end-color",
  "border-inline-end-style",
  "border-inline-end-width",
  "border-inline-start",
  "border-inline-start-color",
  "border-inline-start-style",
  "border-inline-start-width",
  "border-inline-style",
  "border-inline-width",
  "border-left",
  "border-left-color",
  "border-left-style",
  "border-left-width",
  "border-radius",
  "border-right",
  "border-right-color",
  "border-right-style",
  "border-right-width",
  "border-spacing",
  "border-start-end-radius",
  "border-start-start-radius",
  "border-style",
  "border-top",
  "border-top-color",
  "border-top-left-radius",
  "border-top-right-radius",
  "border-top-style",
  "border-top-width",
  "border-width",
  "bottom",
  "box-align",
  "box-decoration-break",
  "box-direction",
  "box-flex",
  "box-flex-group",
  "box-lines",
  "box-ordinal-group",
  "box-orient",
  "box-pack",
  "box-shadow",
  "box-sizing",
  "break-after",
  "break-before",
  "break-inside",
  "caption-side",
  "caret-color",
  "clear",
  "clip",
  "clip-path",
  "clip-rule",
  "color",
  "color-interpolation",
  "color-interpolation-filters",
  "color-profile",
  "color-rendering",
  "color-scheme",
  "column-count",
  "column-fill",
  "column-gap",
  "column-rule",
  "column-rule-color",
  "column-rule-style",
  "column-rule-width",
  "column-span",
  "column-width",
  "columns",
  "contain",
  "contain-intrinsic-block-size",
  "contain-intrinsic-height",
  "contain-intrinsic-inline-size",
  "contain-intrinsic-size",
  "contain-intrinsic-width",
  "container",
  "container-name",
  "container-type",
  "content",
  "content-visibility",
  "counter-increment",
  "counter-reset",
  "counter-set",
  "cue",
  "cue-after",
  "cue-before",
  "cursor",
  "cx",
  "cy",
  "direction",
  "display",
  "dominant-baseline",
  "empty-cells",
  "enable-background",
  "field-sizing",
  "fill",
  "fill-opacity",
  "fill-rule",
  "filter",
  "flex",
  "flex-basis",
  "flex-direction",
  "flex-flow",
  "flex-grow",
  "flex-shrink",
  "flex-wrap",
  "float",
  "flood-color",
  "flood-opacity",
  "flow",
  "font",
  "font-display",
  "font-family",
  "font-feature-settings",
  "font-kerning",
  "font-language-override",
  "font-optical-sizing",
  "font-palette",
  "font-size",
  "font-size-adjust",
  "font-smooth",
  "font-smoothing",
  "font-stretch",
  "font-style",
  "font-synthesis",
  "font-synthesis-position",
  "font-synthesis-small-caps",
  "font-synthesis-style",
  "font-synthesis-weight",
  "font-variant",
  "font-variant-alternates",
  "font-variant-caps",
  "font-variant-east-asian",
  "font-variant-emoji",
  "font-variant-ligatures",
  "font-variant-numeric",
  "font-variant-position",
  "font-variation-settings",
  "font-weight",
  "forced-color-adjust",
  "gap",
  "glyph-orientation-horizontal",
  "glyph-orientation-vertical",
  "grid",
  "grid-area",
  "grid-auto-columns",
  "grid-auto-flow",
  "grid-auto-rows",
  "grid-column",
  "grid-column-end",
  "grid-column-start",
  "grid-gap",
  "grid-row",
  "grid-row-end",
  "grid-row-start",
  "grid-template",
  "grid-template-areas",
  "grid-template-columns",
  "grid-template-rows",
  "hanging-punctuation",
  "height",
  "hyphenate-character",
  "hyphenate-limit-chars",
  "hyphens",
  "icon",
  "image-orientation",
  "image-rendering",
  "image-resolution",
  "ime-mode",
  "initial-letter",
  "initial-letter-align",
  "inline-size",
  "inset",
  "inset-area",
  "inset-block",
  "inset-block-end",
  "inset-block-start",
  "inset-inline",
  "inset-inline-end",
  "inset-inline-start",
  "isolation",
  "justify-content",
  "justify-items",
  "justify-self",
  "kerning",
  "left",
  "letter-spacing",
  "lighting-color",
  "line-break",
  "line-height",
  "line-height-step",
  "list-style",
  "list-style-image",
  "list-style-position",
  "list-style-type",
  "margin",
  "margin-block",
  "margin-block-end",
  "margin-block-start",
  "margin-bottom",
  "margin-inline",
  "margin-inline-end",
  "margin-inline-start",
  "margin-left",
  "margin-right",
  "margin-top",
  "margin-trim",
  "marker",
  "marker-end",
  "marker-mid",
  "marker-start",
  "marks",
  "mask",
  "mask-border",
  "mask-border-mode",
  "mask-border-outset",
  "mask-border-repeat",
  "mask-border-slice",
  "mask-border-source",
  "mask-border-width",
  "mask-clip",
  "mask-composite",
  "mask-image",
  "mask-mode",
  "mask-origin",
  "mask-position",
  "mask-repeat",
  "mask-size",
  "mask-type",
  "masonry-auto-flow",
  "math-depth",
  "math-shift",
  "math-style",
  "max-block-size",
  "max-height",
  "max-inline-size",
  "max-width",
  "min-block-size",
  "min-height",
  "min-inline-size",
  "min-width",
  "mix-blend-mode",
  "nav-down",
  "nav-index",
  "nav-left",
  "nav-right",
  "nav-up",
  "none",
  "normal",
  "object-fit",
  "object-position",
  "offset",
  "offset-anchor",
  "offset-distance",
  "offset-path",
  "offset-position",
  "offset-rotate",
  "opacity",
  "order",
  "orphans",
  "outline",
  "outline-color",
  "outline-offset",
  "outline-style",
  "outline-width",
  "overflow",
  "overflow-anchor",
  "overflow-block",
  "overflow-clip-margin",
  "overflow-inline",
  "overflow-wrap",
  "overflow-x",
  "overflow-y",
  "overlay",
  "overscroll-behavior",
  "overscroll-behavior-block",
  "overscroll-behavior-inline",
  "overscroll-behavior-x",
  "overscroll-behavior-y",
  "padding",
  "padding-block",
  "padding-block-end",
  "padding-block-start",
  "padding-bottom",
  "padding-inline",
  "padding-inline-end",
  "padding-inline-start",
  "padding-left",
  "padding-right",
  "padding-top",
  "page",
  "page-break-after",
  "page-break-before",
  "page-break-inside",
  "paint-order",
  "pause",
  "pause-after",
  "pause-before",
  "perspective",
  "perspective-origin",
  "place-content",
  "place-items",
  "place-self",
  "pointer-events",
  "position",
  "position-anchor",
  "position-visibility",
  "print-color-adjust",
  "quotes",
  "r",
  "resize",
  "rest",
  "rest-after",
  "rest-before",
  "right",
  "rotate",
  "row-gap",
  "ruby-align",
  "ruby-position",
  "scale",
  "scroll-behavior",
  "scroll-margin",
  "scroll-margin-block",
  "scroll-margin-block-end",
  "scroll-margin-block-start",
  "scroll-margin-bottom",
  "scroll-margin-inline",
  "scroll-margin-inline-end",
  "scroll-margin-inline-start",
  "scroll-margin-left",
  "scroll-margin-right",
  "scroll-margin-top",
  "scroll-padding",
  "scroll-padding-block",
  "scroll-padding-block-end",
  "scroll-padding-block-start",
  "scroll-padding-bottom",
  "scroll-padding-inline",
  "scroll-padding-inline-end",
  "scroll-padding-inline-start",
  "scroll-padding-left",
  "scroll-padding-right",
  "scroll-padding-top",
  "scroll-snap-align",
  "scroll-snap-stop",
  "scroll-snap-type",
  "scroll-timeline",
  "scroll-timeline-axis",
  "scroll-timeline-name",
  "scrollbar-color",
  "scrollbar-gutter",
  "scrollbar-width",
  "shape-image-threshold",
  "shape-margin",
  "shape-outside",
  "shape-rendering",
  "speak",
  "speak-as",
  "src",
  // @font-face
  "stop-color",
  "stop-opacity",
  "stroke",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke-width",
  "tab-size",
  "table-layout",
  "text-align",
  "text-align-all",
  "text-align-last",
  "text-anchor",
  "text-combine-upright",
  "text-decoration",
  "text-decoration-color",
  "text-decoration-line",
  "text-decoration-skip",
  "text-decoration-skip-ink",
  "text-decoration-style",
  "text-decoration-thickness",
  "text-emphasis",
  "text-emphasis-color",
  "text-emphasis-position",
  "text-emphasis-style",
  "text-indent",
  "text-justify",
  "text-orientation",
  "text-overflow",
  "text-rendering",
  "text-shadow",
  "text-size-adjust",
  "text-transform",
  "text-underline-offset",
  "text-underline-position",
  "text-wrap",
  "text-wrap-mode",
  "text-wrap-style",
  "timeline-scope",
  "top",
  "touch-action",
  "transform",
  "transform-box",
  "transform-origin",
  "transform-style",
  "transition",
  "transition-behavior",
  "transition-delay",
  "transition-duration",
  "transition-property",
  "transition-timing-function",
  "translate",
  "unicode-bidi",
  "user-modify",
  "user-select",
  "vector-effect",
  "vertical-align",
  "view-timeline",
  "view-timeline-axis",
  "view-timeline-inset",
  "view-timeline-name",
  "view-transition-name",
  "visibility",
  "voice-balance",
  "voice-duration",
  "voice-family",
  "voice-pitch",
  "voice-range",
  "voice-rate",
  "voice-stress",
  "voice-volume",
  "white-space",
  "white-space-collapse",
  "widows",
  "width",
  "will-change",
  "word-break",
  "word-spacing",
  "word-wrap",
  "writing-mode",
  "x",
  "y",
  "z-index",
  "zoom"
].sort().reverse();
function Tp(e) {
  const t = _p(e), n = Sp, r = wp, i = "@[a-z-]+", o = "and or not only", s = {
    className: "variable",
    begin: "(\\$" + "[a-zA-Z-][a-zA-Z0-9_-]*" + ")\\b",
    relevance: 0
  };
  return {
    name: "SCSS",
    case_insensitive: !0,
    illegal: "[=/|']",
    contains: [
      e.C_LINE_COMMENT_MODE,
      e.C_BLOCK_COMMENT_MODE,
      // to recognize keyframe 40% etc which are outside the scope of our
      // attribute value mode
      t.CSS_NUMBER_MODE,
      {
        className: "selector-id",
        begin: "#[A-Za-z0-9_-]+",
        relevance: 0
      },
      {
        className: "selector-class",
        begin: "\\.[A-Za-z0-9_-]+",
        relevance: 0
      },
      t.ATTRIBUTE_SELECTOR_MODE,
      {
        className: "selector-tag",
        begin: "\\b(" + kp.join("|") + ")\\b",
        // was there, before, but why?
        relevance: 0
      },
      {
        className: "selector-pseudo",
        begin: ":(" + r.join("|") + ")"
      },
      {
        className: "selector-pseudo",
        begin: ":(:)?(" + n.join("|") + ")"
      },
      s,
      {
        // pseudo-selector params
        begin: /\(/,
        end: /\)/,
        contains: [t.CSS_NUMBER_MODE]
      },
      t.CSS_VARIABLE,
      {
        className: "attribute",
        begin: "\\b(" + Np.join("|") + ")\\b"
      },
      { begin: "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b" },
      {
        begin: /:/,
        end: /[;}{]/,
        relevance: 0,
        contains: [
          t.BLOCK_COMMENT,
          s,
          t.HEXCOLOR,
          t.CSS_NUMBER_MODE,
          e.QUOTE_STRING_MODE,
          e.APOS_STRING_MODE,
          t.IMPORTANT,
          t.FUNCTION_DISPATCH
        ]
      },
      // matching these here allows us to treat them more like regular CSS
      // rules so everything between the {} gets regular rule highlighting,
      // which is what we want for page and font-face
      {
        begin: "@(page|font-face)",
        keywords: {
          $pattern: i,
          keyword: "@page @font-face"
        }
      },
      {
        begin: "@",
        end: "[{;]",
        returnBegin: !0,
        keywords: {
          $pattern: /[a-z-]+/,
          keyword: o,
          attribute: xp.join(" ")
        },
        contains: [
          {
            begin: i,
            className: "keyword"
          },
          {
            begin: /[a-z-]+(?=:)/,
            className: "attribute"
          },
          s,
          e.QUOTE_STRING_MODE,
          e.APOS_STRING_MODE,
          t.HEXCOLOR,
          t.CSS_NUMBER_MODE
        ]
      },
      t.FUNCTION_DISPATCH
    ]
  };
}
function Ap(e) {
  return {
    name: "Shell Session",
    aliases: [
      "console",
      "shellsession"
    ],
    contains: [
      {
        className: "meta.prompt",
        // We cannot add \s (spaces) in the regular expression otherwise it will be too broad and produce unexpected result.
        // For instance, in the following example, it would match "echo /path/to/home >" as a prompt:
        // echo /path/to/home > t.exe
        begin: /^\s{0,3}[/~\w\d[\]()@-]*[>%$#][ ]?/,
        starts: {
          end: /[^\\](?=\s*$)/,
          subLanguage: "bash"
        }
      }
    ]
  };
}
function Cp(e) {
  const t = e.regex, n = e.COMMENT("--", "$"), r = {
    scope: "string",
    variants: [
      {
        begin: /'/,
        end: /'/,
        contains: [{ match: /''/ }]
      }
    ]
  }, i = {
    begin: /"/,
    end: /"/,
    contains: [{ match: /""/ }]
  }, o = [
    "true",
    "false",
    // Not sure it's correct to call NULL literal, and clauses like IS [NOT] NULL look strange that way.
    // "null",
    "unknown"
  ], a = [
    "double precision",
    "large object",
    "with timezone",
    "without timezone"
  ], s = [
    "bigint",
    "binary",
    "blob",
    "boolean",
    "char",
    "character",
    "clob",
    "date",
    "dec",
    "decfloat",
    "decimal",
    "float",
    "int",
    "integer",
    "interval",
    "nchar",
    "nclob",
    "national",
    "numeric",
    "real",
    "row",
    "smallint",
    "time",
    "timestamp",
    "varchar",
    "varying",
    // modifier (character varying)
    "varbinary"
  ], l = [
    "add",
    "asc",
    "collation",
    "desc",
    "final",
    "first",
    "last",
    "view"
  ], c = [
    "abs",
    "acos",
    "all",
    "allocate",
    "alter",
    "and",
    "any",
    "are",
    "array",
    "array_agg",
    "array_max_cardinality",
    "as",
    "asensitive",
    "asin",
    "asymmetric",
    "at",
    "atan",
    "atomic",
    "authorization",
    "avg",
    "begin",
    "begin_frame",
    "begin_partition",
    "between",
    "bigint",
    "binary",
    "blob",
    "boolean",
    "both",
    "by",
    "call",
    "called",
    "cardinality",
    "cascaded",
    "case",
    "cast",
    "ceil",
    "ceiling",
    "char",
    "char_length",
    "character",
    "character_length",
    "check",
    "classifier",
    "clob",
    "close",
    "coalesce",
    "collate",
    "collect",
    "column",
    "commit",
    "condition",
    "connect",
    "constraint",
    "contains",
    "convert",
    "copy",
    "corr",
    "corresponding",
    "cos",
    "cosh",
    "count",
    "covar_pop",
    "covar_samp",
    "create",
    "cross",
    "cube",
    "cume_dist",
    "current",
    "current_catalog",
    "current_date",
    "current_default_transform_group",
    "current_path",
    "current_role",
    "current_row",
    "current_schema",
    "current_time",
    "current_timestamp",
    "current_path",
    "current_role",
    "current_transform_group_for_type",
    "current_user",
    "cursor",
    "cycle",
    "date",
    "day",
    "deallocate",
    "dec",
    "decimal",
    "decfloat",
    "declare",
    "default",
    "define",
    "delete",
    "dense_rank",
    "deref",
    "describe",
    "deterministic",
    "disconnect",
    "distinct",
    "double",
    "drop",
    "dynamic",
    "each",
    "element",
    "else",
    "empty",
    "end",
    "end_frame",
    "end_partition",
    "end-exec",
    "equals",
    "escape",
    "every",
    "except",
    "exec",
    "execute",
    "exists",
    "exp",
    "external",
    "extract",
    "false",
    "fetch",
    "filter",
    "first_value",
    "float",
    "floor",
    "for",
    "foreign",
    "frame_row",
    "free",
    "from",
    "full",
    "function",
    "fusion",
    "get",
    "global",
    "grant",
    "group",
    "grouping",
    "groups",
    "having",
    "hold",
    "hour",
    "identity",
    "in",
    "indicator",
    "initial",
    "inner",
    "inout",
    "insensitive",
    "insert",
    "int",
    "integer",
    "intersect",
    "intersection",
    "interval",
    "into",
    "is",
    "join",
    "json_array",
    "json_arrayagg",
    "json_exists",
    "json_object",
    "json_objectagg",
    "json_query",
    "json_table",
    "json_table_primitive",
    "json_value",
    "lag",
    "language",
    "large",
    "last_value",
    "lateral",
    "lead",
    "leading",
    "left",
    "like",
    "like_regex",
    "listagg",
    "ln",
    "local",
    "localtime",
    "localtimestamp",
    "log",
    "log10",
    "lower",
    "match",
    "match_number",
    "match_recognize",
    "matches",
    "max",
    "member",
    "merge",
    "method",
    "min",
    "minute",
    "mod",
    "modifies",
    "module",
    "month",
    "multiset",
    "national",
    "natural",
    "nchar",
    "nclob",
    "new",
    "no",
    "none",
    "normalize",
    "not",
    "nth_value",
    "ntile",
    "null",
    "nullif",
    "numeric",
    "octet_length",
    "occurrences_regex",
    "of",
    "offset",
    "old",
    "omit",
    "on",
    "one",
    "only",
    "open",
    "or",
    "order",
    "out",
    "outer",
    "over",
    "overlaps",
    "overlay",
    "parameter",
    "partition",
    "pattern",
    "per",
    "percent",
    "percent_rank",
    "percentile_cont",
    "percentile_disc",
    "period",
    "portion",
    "position",
    "position_regex",
    "power",
    "precedes",
    "precision",
    "prepare",
    "primary",
    "procedure",
    "ptf",
    "range",
    "rank",
    "reads",
    "real",
    "recursive",
    "ref",
    "references",
    "referencing",
    "regr_avgx",
    "regr_avgy",
    "regr_count",
    "regr_intercept",
    "regr_r2",
    "regr_slope",
    "regr_sxx",
    "regr_sxy",
    "regr_syy",
    "release",
    "result",
    "return",
    "returns",
    "revoke",
    "right",
    "rollback",
    "rollup",
    "row",
    "row_number",
    "rows",
    "running",
    "savepoint",
    "scope",
    "scroll",
    "search",
    "second",
    "seek",
    "select",
    "sensitive",
    "session_user",
    "set",
    "show",
    "similar",
    "sin",
    "sinh",
    "skip",
    "smallint",
    "some",
    "specific",
    "specifictype",
    "sql",
    "sqlexception",
    "sqlstate",
    "sqlwarning",
    "sqrt",
    "start",
    "static",
    "stddev_pop",
    "stddev_samp",
    "submultiset",
    "subset",
    "substring",
    "substring_regex",
    "succeeds",
    "sum",
    "symmetric",
    "system",
    "system_time",
    "system_user",
    "table",
    "tablesample",
    "tan",
    "tanh",
    "then",
    "time",
    "timestamp",
    "timezone_hour",
    "timezone_minute",
    "to",
    "trailing",
    "translate",
    "translate_regex",
    "translation",
    "treat",
    "trigger",
    "trim",
    "trim_array",
    "true",
    "truncate",
    "uescape",
    "union",
    "unique",
    "unknown",
    "unnest",
    "update",
    "upper",
    "user",
    "using",
    "value",
    "values",
    "value_of",
    "var_pop",
    "var_samp",
    "varbinary",
    "varchar",
    "varying",
    "versioning",
    "when",
    "whenever",
    "where",
    "width_bucket",
    "window",
    "with",
    "within",
    "without",
    "year"
  ], d = [
    "abs",
    "acos",
    "array_agg",
    "asin",
    "atan",
    "avg",
    "cast",
    "ceil",
    "ceiling",
    "coalesce",
    "corr",
    "cos",
    "cosh",
    "count",
    "covar_pop",
    "covar_samp",
    "cume_dist",
    "dense_rank",
    "deref",
    "element",
    "exp",
    "extract",
    "first_value",
    "floor",
    "json_array",
    "json_arrayagg",
    "json_exists",
    "json_object",
    "json_objectagg",
    "json_query",
    "json_table",
    "json_table_primitive",
    "json_value",
    "lag",
    "last_value",
    "lead",
    "listagg",
    "ln",
    "log",
    "log10",
    "lower",
    "max",
    "min",
    "mod",
    "nth_value",
    "ntile",
    "nullif",
    "percent_rank",
    "percentile_cont",
    "percentile_disc",
    "position",
    "position_regex",
    "power",
    "rank",
    "regr_avgx",
    "regr_avgy",
    "regr_count",
    "regr_intercept",
    "regr_r2",
    "regr_slope",
    "regr_sxx",
    "regr_sxy",
    "regr_syy",
    "row_number",
    "sin",
    "sinh",
    "sqrt",
    "stddev_pop",
    "stddev_samp",
    "substring",
    "substring_regex",
    "sum",
    "tan",
    "tanh",
    "translate",
    "translate_regex",
    "treat",
    "trim",
    "trim_array",
    "unnest",
    "upper",
    "value_of",
    "var_pop",
    "var_samp",
    "width_bucket"
  ], u = [
    "current_catalog",
    "current_date",
    "current_default_transform_group",
    "current_path",
    "current_role",
    "current_schema",
    "current_transform_group_for_type",
    "current_user",
    "session_user",
    "system_time",
    "system_user",
    "current_time",
    "localtime",
    "current_timestamp",
    "localtimestamp"
  ], p = [
    "create table",
    "insert into",
    "primary key",
    "foreign key",
    "not null",
    "alter table",
    "add constraint",
    "grouping sets",
    "on overflow",
    "character set",
    "respect nulls",
    "ignore nulls",
    "nulls first",
    "nulls last",
    "depth first",
    "breadth first"
  ], f = d, g = [
    ...c,
    ...l
  ].filter((I) => !d.includes(I)), m = {
    scope: "variable",
    match: /@[a-z0-9][a-z0-9_]*/
  }, y = {
    scope: "operator",
    match: /[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,
    relevance: 0
  }, h = {
    match: t.concat(/\b/, t.either(...f), /\s*\(/),
    relevance: 0,
    keywords: { built_in: f }
  };
  function S(I) {
    return t.concat(
      /\b/,
      t.either(...I.map((k) => k.replace(/\s+/, "\\s+"))),
      /\b/
    );
  }
  const x = {
    scope: "keyword",
    match: S(p),
    relevance: 0
  };
  function N(I, {
    exceptions: k,
    when: A
  } = {}) {
    const O = A;
    return k = k || [], I.map((L) => L.match(/\|\d+$/) || k.includes(L) ? L : O(L) ? `${L}|0` : L);
  }
  return {
    name: "SQL",
    case_insensitive: !0,
    // does not include {} or HTML tags `</`
    illegal: /[{}]|<\//,
    keywords: {
      $pattern: /\b[\w\.]+/,
      keyword: N(g, { when: (I) => I.length < 3 }),
      literal: o,
      type: s,
      built_in: u
    },
    contains: [
      {
        scope: "type",
        match: S(a)
      },
      x,
      h,
      m,
      r,
      i,
      e.C_NUMBER_MODE,
      e.C_BLOCK_COMMENT_MODE,
      n,
      y
    ]
  };
}
function Ha(e) {
  return e ? typeof e == "string" ? e : e.source : null;
}
function vt(e) {
  return se("(?=", e, ")");
}
function se(...e) {
  return e.map((n) => Ha(n)).join("");
}
function Ip(e) {
  const t = e[e.length - 1];
  return typeof t == "object" && t.constructor === Object ? (e.splice(e.length - 1, 1), t) : {};
}
function Ne(...e) {
  return "(" + (Ip(e).capture ? "" : "?:") + e.map((r) => Ha(r)).join("|") + ")";
}
const wr = (e) => se(
  /\b/,
  e,
  /\w$/.test(e) ? /\b/ : /\B/
), Op = [
  "Protocol",
  // contextual
  "Type"
  // contextual
].map(wr), Ai = [
  "init",
  "self"
].map(wr), vp = [
  "Any",
  "Self"
], Kn = [
  // strings below will be fed into the regular `keywords` engine while regex
  // will result in additional modes being created to scan for those keywords to
  // avoid conflicts with other rules
  "actor",
  "any",
  // contextual
  "associatedtype",
  "async",
  "await",
  /as\?/,
  // operator
  /as!/,
  // operator
  "as",
  // operator
  "borrowing",
  // contextual
  "break",
  "case",
  "catch",
  "class",
  "consume",
  // contextual
  "consuming",
  // contextual
  "continue",
  "convenience",
  // contextual
  "copy",
  // contextual
  "default",
  "defer",
  "deinit",
  "didSet",
  // contextual
  "distributed",
  "do",
  "dynamic",
  // contextual
  "each",
  "else",
  "enum",
  "extension",
  "fallthrough",
  /fileprivate\(set\)/,
  "fileprivate",
  "final",
  // contextual
  "for",
  "func",
  "get",
  // contextual
  "guard",
  "if",
  "import",
  "indirect",
  // contextual
  "infix",
  // contextual
  /init\?/,
  /init!/,
  "inout",
  /internal\(set\)/,
  "internal",
  "in",
  "is",
  // operator
  "isolated",
  // contextual
  "nonisolated",
  // contextual
  "lazy",
  // contextual
  "let",
  "macro",
  "mutating",
  // contextual
  "nonmutating",
  // contextual
  /open\(set\)/,
  // contextual
  "open",
  // contextual
  "operator",
  "optional",
  // contextual
  "override",
  // contextual
  "package",
  "postfix",
  // contextual
  "precedencegroup",
  "prefix",
  // contextual
  /private\(set\)/,
  "private",
  "protocol",
  /public\(set\)/,
  "public",
  "repeat",
  "required",
  // contextual
  "rethrows",
  "return",
  "set",
  // contextual
  "some",
  // contextual
  "static",
  "struct",
  "subscript",
  "super",
  "switch",
  "throws",
  "throw",
  /try\?/,
  // operator
  /try!/,
  // operator
  "try",
  // operator
  "typealias",
  /unowned\(safe\)/,
  // contextual
  /unowned\(unsafe\)/,
  // contextual
  "unowned",
  // contextual
  "var",
  "weak",
  // contextual
  "where",
  "while",
  "willSet"
  // contextual
], Ci = [
  "false",
  "nil",
  "true"
], Rp = [
  "assignment",
  "associativity",
  "higherThan",
  "left",
  "lowerThan",
  "none",
  "right"
], Mp = [
  "#colorLiteral",
  "#column",
  "#dsohandle",
  "#else",
  "#elseif",
  "#endif",
  "#error",
  "#file",
  "#fileID",
  "#fileLiteral",
  "#filePath",
  "#function",
  "#if",
  "#imageLiteral",
  "#keyPath",
  "#line",
  "#selector",
  "#sourceLocation",
  "#warning"
], Ii = [
  "abs",
  "all",
  "any",
  "assert",
  "assertionFailure",
  "debugPrint",
  "dump",
  "fatalError",
  "getVaList",
  "isKnownUniquelyReferenced",
  "max",
  "min",
  "numericCast",
  "pointwiseMax",
  "pointwiseMin",
  "precondition",
  "preconditionFailure",
  "print",
  "readLine",
  "repeatElement",
  "sequence",
  "stride",
  "swap",
  "swift_unboxFromSwiftValueWithType",
  "transcode",
  "type",
  "unsafeBitCast",
  "unsafeDowncast",
  "withExtendedLifetime",
  "withUnsafeMutablePointer",
  "withUnsafePointer",
  "withVaList",
  "withoutActuallyEscaping",
  "zip"
], Ga = Ne(
  /[/=\-+!*%<>&|^~?]/,
  /[\u00A1-\u00A7]/,
  /[\u00A9\u00AB]/,
  /[\u00AC\u00AE]/,
  /[\u00B0\u00B1]/,
  /[\u00B6\u00BB\u00BF\u00D7\u00F7]/,
  /[\u2016-\u2017]/,
  /[\u2020-\u2027]/,
  /[\u2030-\u203E]/,
  /[\u2041-\u2053]/,
  /[\u2055-\u205E]/,
  /[\u2190-\u23FF]/,
  /[\u2500-\u2775]/,
  /[\u2794-\u2BFF]/,
  /[\u2E00-\u2E7F]/,
  /[\u3001-\u3003]/,
  /[\u3008-\u3020]/,
  /[\u3030]/
), Ka = Ne(
  Ga,
  /[\u0300-\u036F]/,
  /[\u1DC0-\u1DFF]/,
  /[\u20D0-\u20FF]/,
  /[\uFE00-\uFE0F]/,
  /[\uFE20-\uFE2F]/
  // TODO: The following characters are also allowed, but the regex isn't supported yet.
  // /[\u{E0100}-\u{E01EF}]/u
), qn = se(Ga, Ka, "*"), qa = Ne(
  /[a-zA-Z_]/,
  /[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/,
  /[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/,
  /[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/,
  /[\u1E00-\u1FFF]/,
  /[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/,
  /[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/,
  /[\u2C00-\u2DFF\u2E80-\u2FFF]/,
  /[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/,
  /[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/,
  /[\uFE47-\uFEFE\uFF00-\uFFFD]/
  // Should be /[\uFE47-\uFFFD]/, but we have to exclude FEFF.
  // The following characters are also allowed, but the regexes aren't supported yet.
  // /[\u{10000}-\u{1FFFD}\u{20000-\u{2FFFD}\u{30000}-\u{3FFFD}\u{40000}-\u{4FFFD}]/u,
  // /[\u{50000}-\u{5FFFD}\u{60000-\u{6FFFD}\u{70000}-\u{7FFFD}\u{80000}-\u{8FFFD}]/u,
  // /[\u{90000}-\u{9FFFD}\u{A0000-\u{AFFFD}\u{B0000}-\u{BFFFD}\u{C0000}-\u{CFFFD}]/u,
  // /[\u{D0000}-\u{DFFFD}\u{E0000-\u{EFFFD}]/u
), pn = Ne(
  qa,
  /\d/,
  /[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/
), Ge = se(qa, pn, "*"), an = se(/[A-Z]/, pn, "*"), Dp = [
  "attached",
  "autoclosure",
  se(/convention\(/, Ne("swift", "block", "c"), /\)/),
  "discardableResult",
  "dynamicCallable",
  "dynamicMemberLookup",
  "escaping",
  "freestanding",
  "frozen",
  "GKInspectable",
  "IBAction",
  "IBDesignable",
  "IBInspectable",
  "IBOutlet",
  "IBSegueAction",
  "inlinable",
  "main",
  "nonobjc",
  "NSApplicationMain",
  "NSCopying",
  "NSManaged",
  se(/objc\(/, Ge, /\)/),
  "objc",
  "objcMembers",
  "propertyWrapper",
  "requires_stored_property_inits",
  "resultBuilder",
  "Sendable",
  "testable",
  "UIApplicationMain",
  "unchecked",
  "unknown",
  "usableFromInline",
  "warn_unqualified_access"
], Lp = [
  "iOS",
  "iOSApplicationExtension",
  "macOS",
  "macOSApplicationExtension",
  "macCatalyst",
  "macCatalystApplicationExtension",
  "watchOS",
  "watchOSApplicationExtension",
  "tvOS",
  "tvOSApplicationExtension",
  "swift"
];
function Bp(e) {
  const t = {
    match: /\s+/,
    relevance: 0
  }, n = e.COMMENT(
    "/\\*",
    "\\*/",
    { contains: ["self"] }
  ), r = [
    e.C_LINE_COMMENT_MODE,
    n
  ], i = {
    match: [
      /\./,
      Ne(...Op, ...Ai)
    ],
    className: { 2: "keyword" }
  }, o = {
    // Consume .keyword to prevent highlighting properties and methods as keywords.
    match: se(/\./, Ne(...Kn)),
    relevance: 0
  }, a = Kn.filter((re) => typeof re == "string").concat(["_|0"]), s = Kn.filter((re) => typeof re != "string").concat(vp).map(wr), l = { variants: [
    {
      className: "keyword",
      match: Ne(...s, ...Ai)
    }
  ] }, c = {
    $pattern: Ne(
      /\b\w+/,
      // regular keywords
      /#\w+/
      // number keywords
    ),
    keyword: a.concat(Mp),
    literal: Ci
  }, d = [
    i,
    o,
    l
  ], u = {
    // Consume .built_in to prevent highlighting properties and methods.
    match: se(/\./, Ne(...Ii)),
    relevance: 0
  }, p = {
    className: "built_in",
    match: se(/\b/, Ne(...Ii), /(?=\()/)
  }, f = [
    u,
    p
  ], g = {
    // Prevent -> from being highlighting as an operator.
    match: /->/,
    relevance: 0
  }, m = {
    className: "operator",
    relevance: 0,
    variants: [
      { match: qn },
      {
        // dot-operator: only operators that start with a dot are allowed to use dots as
        // characters (..., ...<, .*, etc). So there rule here is: a dot followed by one or more
        // characters that may also include dots.
        match: `\\.(\\.|${Ka})+`
      }
    ]
  }, y = [
    g,
    m
  ], h = "([0-9]_*)+", S = "([0-9a-fA-F]_*)+", x = {
    className: "number",
    relevance: 0,
    variants: [
      // decimal floating-point-literal (subsumes decimal-literal)
      { match: `\\b(${h})(\\.(${h}))?([eE][+-]?(${h}))?\\b` },
      // hexadecimal floating-point-literal (subsumes hexadecimal-literal)
      { match: `\\b0x(${S})(\\.(${S}))?([pP][+-]?(${h}))?\\b` },
      // octal-literal
      { match: /\b0o([0-7]_*)+\b/ },
      // binary-literal
      { match: /\b0b([01]_*)+\b/ }
    ]
  }, N = (re = "") => ({
    className: "subst",
    variants: [
      { match: se(/\\/, re, /[0\\tnr"']/) },
      { match: se(/\\/, re, /u\{[0-9a-fA-F]{1,8}\}/) }
    ]
  }), I = (re = "") => ({
    className: "subst",
    match: se(/\\/, re, /[\t ]*(?:[\r\n]|\r\n)/)
  }), k = (re = "") => ({
    className: "subst",
    label: "interpol",
    begin: se(/\\/, re, /\(/),
    end: /\)/
  }), A = (re = "") => ({
    begin: se(re, /"""/),
    end: se(/"""/, re),
    contains: [
      N(re),
      I(re),
      k(re)
    ]
  }), O = (re = "") => ({
    begin: se(re, /"/),
    end: se(/"/, re),
    contains: [
      N(re),
      k(re)
    ]
  }), L = {
    className: "string",
    variants: [
      A(),
      A("#"),
      A("##"),
      A("###"),
      O(),
      O("#"),
      O("##"),
      O("###")
    ]
  }, w = [
    e.BACKSLASH_ESCAPE,
    {
      begin: /\[/,
      end: /\]/,
      relevance: 0,
      contains: [e.BACKSLASH_ESCAPE]
    }
  ], v = {
    begin: /\/[^\s](?=[^/\n]*\/)/,
    end: /\//,
    contains: w
  }, D = (re) => {
    const Ve = se(re, /\//), Ze = se(/\//, re);
    return {
      begin: Ve,
      end: Ze,
      contains: [
        ...w,
        {
          scope: "comment",
          begin: `#(?!.*${Ze})`,
          end: /$/
        }
      ]
    };
  }, K = {
    scope: "regexp",
    variants: [
      D("###"),
      D("##"),
      D("#"),
      v
    ]
  }, q = { match: se(/`/, Ge, /`/) }, $ = {
    className: "variable",
    match: /\$\d+/
  }, ne = {
    className: "variable",
    match: `\\$${pn}+`
  }, le = [
    q,
    $,
    ne
  ], V = {
    match: /(@|#(un)?)available/,
    scope: "keyword",
    starts: { contains: [
      {
        begin: /\(/,
        end: /\)/,
        keywords: Lp,
        contains: [
          ...y,
          x,
          L
        ]
      }
    ] }
  }, ce = {
    scope: "keyword",
    match: se(/@/, Ne(...Dp), vt(Ne(/\(/, /\s+/)))
  }, b = {
    scope: "meta",
    match: se(/@/, Ge)
  }, oe = [
    V,
    ce,
    b
  ], ue = {
    match: vt(/\b[A-Z]/),
    relevance: 0,
    contains: [
      {
        // Common Apple frameworks, for relevance boost
        className: "type",
        match: se(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/, pn, "+")
      },
      {
        // Type identifier
        className: "type",
        match: an,
        relevance: 0
      },
      {
        // Optional type
        match: /[?!]+/,
        relevance: 0
      },
      {
        // Variadic parameter
        match: /\.\.\./,
        relevance: 0
      },
      {
        // Protocol composition
        match: se(/\s+&\s+/, vt(an)),
        relevance: 0
      }
    ]
  }, E = {
    begin: /</,
    end: />/,
    keywords: c,
    contains: [
      ...r,
      ...d,
      ...oe,
      g,
      ue
    ]
  };
  ue.contains.push(E);
  const we = {
    match: se(Ge, /\s*:/),
    keywords: "_|0",
    relevance: 0
  }, Be = {
    begin: /\(/,
    end: /\)/,
    relevance: 0,
    keywords: c,
    contains: [
      "self",
      we,
      ...r,
      K,
      ...d,
      ...f,
      ...y,
      x,
      L,
      ...le,
      ...oe,
      ue
    ]
  }, ge = {
    begin: /</,
    end: />/,
    keywords: "repeat each",
    contains: [
      ...r,
      ue
    ]
  }, We = {
    begin: Ne(
      vt(se(Ge, /\s*:/)),
      vt(se(Ge, /\s+/, Ge, /\s*:/))
    ),
    end: /:/,
    relevance: 0,
    contains: [
      {
        className: "keyword",
        match: /\b_\b/
      },
      {
        className: "params",
        match: Ge
      }
    ]
  }, Oe = {
    begin: /\(/,
    end: /\)/,
    keywords: c,
    contains: [
      We,
      ...r,
      ...d,
      ...y,
      x,
      L,
      ...oe,
      ue,
      Be
    ],
    endsParent: !0,
    illegal: /["']/
  }, Ye = {
    match: [
      /(func|macro)/,
      /\s+/,
      Ne(q.match, Ge, qn)
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      ge,
      Oe,
      t
    ],
    illegal: [
      /\[/,
      /%/
    ]
  }, ve = {
    match: [
      /\b(?:subscript|init[?!]?)/,
      /\s*(?=[<(])/
    ],
    className: { 1: "keyword" },
    contains: [
      ge,
      Oe,
      t
    ],
    illegal: /\[|%/
  }, tt = {
    match: [
      /operator/,
      /\s+/,
      qn
    ],
    className: {
      1: "keyword",
      3: "title"
    }
  }, St = {
    begin: [
      /precedencegroup/,
      /\s+/,
      an
    ],
    className: {
      1: "keyword",
      3: "title"
    },
    contains: [ue],
    keywords: [
      ...Rp,
      ...Ci
    ],
    end: /}/
  }, Nt = {
    match: [
      /class\b/,
      /\s+/,
      /func\b/,
      /\s+/,
      /\b[A-Za-z_][A-Za-z0-9_]*\b/
    ],
    scope: {
      1: "keyword",
      3: "keyword",
      5: "title.function"
    }
  }, Tt = {
    match: [
      /class\b/,
      /\s+/,
      /var\b/
    ],
    scope: {
      1: "keyword",
      3: "keyword"
    }
  }, ht = {
    begin: [
      /(struct|protocol|class|extension|enum|actor)/,
      /\s+/,
      Ge,
      /\s*/
    ],
    beginScope: {
      1: "keyword",
      3: "title.class"
    },
    keywords: c,
    contains: [
      ge,
      ...d,
      {
        begin: /:/,
        end: /\{/,
        keywords: c,
        contains: [
          {
            scope: "title.class.inherited",
            match: an
          },
          ...d
        ],
        relevance: 0
      }
    ]
  };
  for (const re of L.variants) {
    const Ve = re.contains.find((mt) => mt.label === "interpol");
    Ve.keywords = c;
    const Ze = [
      ...d,
      ...f,
      ...y,
      x,
      L,
      ...le
    ];
    Ve.contains = [
      ...Ze,
      {
        begin: /\(/,
        end: /\)/,
        contains: [
          "self",
          ...Ze
        ]
      }
    ];
  }
  return {
    name: "Swift",
    keywords: c,
    contains: [
      ...r,
      Ye,
      ve,
      Nt,
      Tt,
      ht,
      tt,
      St,
      {
        beginKeywords: "import",
        end: /$/,
        contains: [...r],
        relevance: 0
      },
      K,
      ...d,
      ...f,
      ...y,
      x,
      L,
      ...le,
      ...oe,
      ue,
      Be
    ]
  };
}
const gn = "[A-Za-z$_][0-9A-Za-z$_]*", Wa = [
  "as",
  // for exports
  "in",
  "of",
  "if",
  "for",
  "while",
  "finally",
  "var",
  "new",
  "function",
  "do",
  "return",
  "void",
  "else",
  "break",
  "catch",
  "instanceof",
  "with",
  "throw",
  "case",
  "default",
  "try",
  "switch",
  "continue",
  "typeof",
  "delete",
  "let",
  "yield",
  "const",
  "class",
  // JS handles these with a special rule
  // "get",
  // "set",
  "debugger",
  "async",
  "await",
  "static",
  "import",
  "from",
  "export",
  "extends",
  // It's reached stage 3, which is "recommended for implementation":
  "using"
], Ya = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], Va = [
  // Fundamental objects
  "Object",
  "Function",
  "Boolean",
  "Symbol",
  // numbers and dates
  "Math",
  "Date",
  "Number",
  "BigInt",
  // text
  "String",
  "RegExp",
  // Indexed collections
  "Array",
  "Float32Array",
  "Float64Array",
  "Int8Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Int16Array",
  "Int32Array",
  "Uint16Array",
  "Uint32Array",
  "BigInt64Array",
  "BigUint64Array",
  // Keyed collections
  "Set",
  "Map",
  "WeakSet",
  "WeakMap",
  // Structured data
  "ArrayBuffer",
  "SharedArrayBuffer",
  "Atomics",
  "DataView",
  "JSON",
  // Control abstraction objects
  "Promise",
  "Generator",
  "GeneratorFunction",
  "AsyncFunction",
  // Reflection
  "Reflect",
  "Proxy",
  // Internationalization
  "Intl",
  // WebAssembly
  "WebAssembly"
], Za = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], Xa = [
  "setInterval",
  "setTimeout",
  "clearInterval",
  "clearTimeout",
  "require",
  "exports",
  "eval",
  "isFinite",
  "isNaN",
  "parseFloat",
  "parseInt",
  "decodeURI",
  "decodeURIComponent",
  "encodeURI",
  "encodeURIComponent",
  "escape",
  "unescape"
], Qa = [
  "arguments",
  "this",
  "super",
  "console",
  "window",
  "document",
  "localStorage",
  "sessionStorage",
  "module",
  "global"
  // Node.js
], Ja = [].concat(
  Xa,
  Va,
  Za
);
function Pp(e) {
  const t = e.regex, n = (V, { after: ce }) => {
    const b = "</" + V[0].slice(1);
    return V.input.indexOf(b, ce) !== -1;
  }, r = gn, i = {
    begin: "<>",
    end: "</>"
  }, o = /<[A-Za-z0-9\\._:-]+\s*\/>/, a = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (V, ce) => {
      const b = V[0].length + V.index, oe = V.input[b];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        oe === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        oe === ","
      ) {
        ce.ignoreMatch();
        return;
      }
      oe === ">" && (n(V, { after: b }) || ce.ignoreMatch());
      let ue;
      const E = V.input.substring(b);
      if (ue = E.match(/^\s*=/)) {
        ce.ignoreMatch();
        return;
      }
      if ((ue = E.match(/^\s+extends\s+/)) && ue.index === 0) {
        ce.ignoreMatch();
        return;
      }
    }
  }, s = {
    $pattern: gn,
    keyword: Wa,
    literal: Ya,
    built_in: Ja,
    "variable.language": Qa
  }, l = "[0-9](_?[0-9])*", c = `\\.(${l})`, d = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", u = {
    className: "number",
    variants: [
      // DecimalLiteral
      { begin: `(\\b(${d})((${c})|\\.)?|(${c}))[eE][+-]?(${l})\\b` },
      { begin: `\\b(${d})\\b((${c})\\b|\\.)?|(${c})\\b` },
      // DecimalBigIntegerLiteral
      { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
      // NonDecimalIntegerLiteral
      { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
      { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
      { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
      // LegacyOctalIntegerLiteral (does not include underscore separators)
      // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
      { begin: "\\b0[0-7]+n?\\b" }
    ],
    relevance: 0
  }, p = {
    className: "subst",
    begin: "\\$\\{",
    end: "\\}",
    keywords: s,
    contains: []
    // defined later
  }, f = {
    begin: ".?html`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        p
      ],
      subLanguage: "xml"
    }
  }, g = {
    begin: ".?css`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        p
      ],
      subLanguage: "css"
    }
  }, m = {
    begin: ".?gql`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        p
      ],
      subLanguage: "graphql"
    }
  }, y = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      e.BACKSLASH_ESCAPE,
      p
    ]
  }, S = {
    className: "comment",
    variants: [
      e.COMMENT(
        /\/\*\*(?!\/)/,
        "\\*/",
        {
          relevance: 0,
          contains: [
            {
              begin: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [
                {
                  className: "doctag",
                  begin: "@[A-Za-z]+"
                },
                {
                  className: "type",
                  begin: "\\{",
                  end: "\\}",
                  excludeEnd: !0,
                  excludeBegin: !0,
                  relevance: 0
                },
                {
                  className: "variable",
                  begin: r + "(?=\\s*(-)|$)",
                  endsParent: !0,
                  relevance: 0
                },
                // eat spaces (not newlines) so we can find
                // types or variables
                {
                  begin: /(?=[^\n])\s/,
                  relevance: 0
                }
              ]
            }
          ]
        }
      ),
      e.C_BLOCK_COMMENT_MODE,
      e.C_LINE_COMMENT_MODE
    ]
  }, x = [
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE,
    f,
    g,
    m,
    y,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    u
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  p.contains = x.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: s,
    contains: [
      "self"
    ].concat(x)
  });
  const N = [].concat(S, p.contains), I = N.concat([
    // eat recursive parens in sub expressions
    {
      begin: /(\s*)\(/,
      end: /\)/,
      keywords: s,
      contains: ["self"].concat(N)
    }
  ]), k = {
    className: "params",
    // convert this to negative lookbehind in v12
    begin: /(\s*)\(/,
    // to match the parms with
    end: /\)/,
    excludeBegin: !0,
    excludeEnd: !0,
    keywords: s,
    contains: I
  }, A = {
    variants: [
      // class Car extends vehicle
      {
        match: [
          /class/,
          /\s+/,
          r,
          /\s+/,
          /extends/,
          /\s+/,
          t.concat(r, "(", t.concat(/\./, r), ")*")
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          5: "keyword",
          7: "title.class.inherited"
        }
      },
      // class Car
      {
        match: [
          /class/,
          /\s+/,
          r
        ],
        scope: {
          1: "keyword",
          3: "title.class"
        }
      }
    ]
  }, O = {
    relevance: 0,
    match: t.either(
      // Hard coded exceptions
      /\bJSON/,
      // Float32Array, OutT
      /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
      // CSSFactory, CSSFactoryT
      /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
      // FPs, FPsT
      /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
      // P
      // single letters are not highlighted
      // BLAH
      // this will be flagged as a UPPER_CASE_CONSTANT instead
    ),
    className: "title.class",
    keywords: {
      _: [
        // se we still get relevance credit for JS library classes
        ...Va,
        ...Za
      ]
    }
  }, L = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  }, w = {
    variants: [
      {
        match: [
          /function/,
          /\s+/,
          r,
          /(?=\s*\()/
        ]
      },
      // anonymous function
      {
        match: [
          /function/,
          /\s*(?=\()/
        ]
      }
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    label: "func.def",
    contains: [k],
    illegal: /%/
  }, v = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function D(V) {
    return t.concat("(?!", V.join("|"), ")");
  }
  const K = {
    match: t.concat(
      /\b/,
      D([
        ...Xa,
        "super",
        "import"
      ].map((V) => `${V}\\s*\\(`)),
      r,
      t.lookahead(/\s*\(/)
    ),
    className: "title.function",
    relevance: 0
  }, q = {
    begin: t.concat(/\./, t.lookahead(
      t.concat(r, /(?![0-9A-Za-z$_(])/)
    )),
    end: r,
    excludeBegin: !0,
    keywords: "prototype",
    className: "property",
    relevance: 0
  }, $ = {
    match: [
      /get|set/,
      /\s+/,
      r,
      /(?=\()/
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      {
        // eat to avoid empty params
        begin: /\(\)/
      },
      k
    ]
  }, ne = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>", le = {
    match: [
      /const|var|let/,
      /\s+/,
      r,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      t.lookahead(ne)
    ],
    keywords: "async",
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      k
    ]
  };
  return {
    name: "JavaScript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: s,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS: I, CLASS_REFERENCE: O },
    illegal: /#(?![$_A-z])/,
    contains: [
      e.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      L,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      f,
      g,
      m,
      y,
      S,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      u,
      O,
      {
        scope: "attr",
        match: r + t.lookahead(":"),
        relevance: 0
      },
      le,
      {
        // "value" container
        begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          S,
          e.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: ne,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [
              {
                className: "params",
                variants: [
                  {
                    begin: e.UNDERSCORE_IDENT_RE,
                    relevance: 0
                  },
                  {
                    className: null,
                    begin: /\(\s*\)/,
                    skip: !0
                  },
                  {
                    begin: /(\s*)\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: s,
                    contains: I
                  }
                ]
              }
            ]
          },
          {
            // could be a comma delimited list of params to a function call
            begin: /,/,
            relevance: 0
          },
          {
            match: /\s+/,
            relevance: 0
          },
          {
            // JSX
            variants: [
              { begin: i.begin, end: i.end },
              { match: o },
              {
                begin: a.begin,
                // we carefully check the opening tag to see if it truly
                // is a tag and not a false positive
                "on:begin": a.isTrulyOpeningTag,
                end: a.end
              }
            ],
            subLanguage: "xml",
            contains: [
              {
                begin: a.begin,
                end: a.end,
                skip: !0,
                contains: ["self"]
              }
            ]
          }
        ]
      },
      w,
      {
        // prevent this from getting swallowed up by function
        // since they appear "function like"
        beginKeywords: "while if switch catch for"
      },
      {
        // we have to count the parens to make sure we actually have the correct
        // bounding ( ).  There could be any number of sub-expressions inside
        // also surrounded by parens.
        begin: "\\b(?!function)" + e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        // end parens
        returnBegin: !0,
        label: "func.def",
        contains: [
          k,
          e.inherit(e.TITLE_MODE, { begin: r, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      q,
      // hack: prevents detection of keywords in some circumstances
      // .keyword()
      // $keyword = x
      {
        match: "\\$" + r,
        relevance: 0
      },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: "title.function" },
        contains: [k]
      },
      K,
      v,
      A,
      $,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
function Fp(e) {
  const t = e.regex, n = Pp(e), r = gn, i = [
    "any",
    "void",
    "number",
    "boolean",
    "string",
    "object",
    "never",
    "symbol",
    "bigint",
    "unknown"
  ], o = {
    begin: [
      /namespace/,
      /\s+/,
      e.IDENT_RE
    ],
    beginScope: {
      1: "keyword",
      3: "title.class"
    }
  }, a = {
    beginKeywords: "interface",
    end: /\{/,
    excludeEnd: !0,
    keywords: {
      keyword: "interface extends",
      built_in: i
    },
    contains: [n.exports.CLASS_REFERENCE]
  }, s = {
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use strict['"]/
  }, l = [
    "type",
    // "namespace",
    "interface",
    "public",
    "private",
    "protected",
    "implements",
    "declare",
    "abstract",
    "readonly",
    "enum",
    "override",
    "satisfies"
  ], c = {
    $pattern: gn,
    keyword: Wa.concat(l),
    literal: Ya,
    built_in: Ja.concat(i),
    "variable.language": Qa
  }, d = {
    className: "meta",
    begin: "@" + r
  }, u = (m, y, h) => {
    const S = m.contains.findIndex((x) => x.label === y);
    if (S === -1)
      throw new Error("can not find mode to replace");
    m.contains.splice(S, 1, h);
  };
  Object.assign(n.keywords, c), n.exports.PARAMS_CONTAINS.push(d);
  const p = n.contains.find((m) => m.scope === "attr"), f = Object.assign(
    {},
    p,
    { match: t.concat(r, t.lookahead(/\s*\?:/)) }
  );
  n.exports.PARAMS_CONTAINS.push([
    n.exports.CLASS_REFERENCE,
    // class reference for highlighting the params types
    p,
    // highlight the params key
    f
    // Added for optional property assignment highlighting
  ]), n.contains = n.contains.concat([
    d,
    o,
    a,
    f
    // Added for optional property assignment highlighting
  ]), u(n, "shebang", e.SHEBANG()), u(n, "use_strict", s);
  const g = n.contains.find((m) => m.label === "func.def");
  return g.relevance = 0, Object.assign(n, {
    name: "TypeScript",
    aliases: [
      "ts",
      "tsx",
      "mts",
      "cts"
    ]
  }), n;
}
function zp(e) {
  const t = e.regex, n = {
    className: "string",
    begin: /"(""|[^/n])"C\b/
  }, r = {
    className: "string",
    begin: /"/,
    end: /"/,
    illegal: /\n/,
    contains: [
      {
        // double quote escape
        begin: /""/
      }
    ]
  }, i = /\d{1,2}\/\d{1,2}\/\d{4}/, o = /\d{4}-\d{1,2}-\d{1,2}/, a = /(\d|1[012])(:\d+){0,2} *(AM|PM)/, s = /\d{1,2}(:\d{1,2}){1,2}/, l = {
    className: "literal",
    variants: [
      {
        // #YYYY-MM-DD# (ISO-Date) or #M/D/YYYY# (US-Date)
        begin: t.concat(/# */, t.either(o, i), / *#/)
      },
      {
        // #H:mm[:ss]# (24h Time)
        begin: t.concat(/# */, s, / *#/)
      },
      {
        // #h[:mm[:ss]] A# (12h Time)
        begin: t.concat(/# */, a, / *#/)
      },
      {
        // date plus time
        begin: t.concat(
          /# */,
          t.either(o, i),
          / +/,
          t.either(a, s),
          / *#/
        )
      }
    ]
  }, c = {
    className: "number",
    relevance: 0,
    variants: [
      {
        // Float
        begin: /\b\d[\d_]*((\.[\d_]+(E[+-]?[\d_]+)?)|(E[+-]?[\d_]+))[RFD@!#]?/
      },
      {
        // Integer (base 10)
        begin: /\b\d[\d_]*((U?[SIL])|[%&])?/
      },
      {
        // Integer (base 16)
        begin: /&H[\dA-F_]+((U?[SIL])|[%&])?/
      },
      {
        // Integer (base 8)
        begin: /&O[0-7_]+((U?[SIL])|[%&])?/
      },
      {
        // Integer (base 2)
        begin: /&B[01_]+((U?[SIL])|[%&])?/
      }
    ]
  }, d = {
    className: "label",
    begin: /^\w+:/
  }, u = e.COMMENT(/'''/, /$/, { contains: [
    {
      className: "doctag",
      begin: /<\/?/,
      end: />/
    }
  ] }), p = e.COMMENT(null, /$/, { variants: [
    { begin: /'/ },
    {
      // TODO: Use multi-class for leading spaces
      begin: /([\t ]|^)REM(?=\s)/
    }
  ] });
  return {
    name: "Visual Basic .NET",
    aliases: ["vb"],
    case_insensitive: !0,
    classNameAliases: { label: "symbol" },
    keywords: {
      keyword: "addhandler alias aggregate ansi as async assembly auto binary by byref byval call case catch class compare const continue custom declare default delegate dim distinct do each equals else elseif end enum erase error event exit explicit finally for friend from function get global goto group handles if implements imports in inherits interface into iterator join key let lib loop me mid module mustinherit mustoverride mybase myclass namespace narrowing new next notinheritable notoverridable of off on operator option optional order overloads overridable overrides paramarray partial preserve private property protected public raiseevent readonly redim removehandler resume return select set shadows shared skip static step stop structure strict sub synclock take text then throw to try unicode until using when where while widening with withevents writeonly yield",
      built_in: (
        // Operators https://docs.microsoft.com/dotnet/visual-basic/language-reference/operators
        "addressof and andalso await directcast gettype getxmlnamespace is isfalse isnot istrue like mod nameof new not or orelse trycast typeof xor cbool cbyte cchar cdate cdbl cdec cint clng cobj csbyte cshort csng cstr cuint culng cushort"
      ),
      type: (
        // Data types https://docs.microsoft.com/dotnet/visual-basic/language-reference/data-types
        "boolean byte char date decimal double integer long object sbyte short single string uinteger ulong ushort"
      ),
      literal: "true false nothing"
    },
    illegal: "//|\\{|\\}|endif|gosub|variant|wend|^\\$ ",
    contains: [
      n,
      r,
      l,
      c,
      d,
      u,
      p,
      {
        className: "meta",
        // TODO: Use multi-class for indentation once available
        begin: /[\t ]*#(const|disable|else|elseif|enable|end|externalsource|if|region)\b/,
        end: /$/,
        keywords: { keyword: "const disable else elseif enable end externalsource if region then" },
        contains: [p]
      }
    ]
  };
}
function Up(e) {
  e.regex;
  const t = e.COMMENT(/\(;/, /;\)/);
  t.contains.push("self");
  const n = e.COMMENT(/;;/, /$/), r = [
    "anyfunc",
    "block",
    "br",
    "br_if",
    "br_table",
    "call",
    "call_indirect",
    "data",
    "drop",
    "elem",
    "else",
    "end",
    "export",
    "func",
    "global.get",
    "global.set",
    "local.get",
    "local.set",
    "local.tee",
    "get_global",
    "get_local",
    "global",
    "if",
    "import",
    "local",
    "loop",
    "memory",
    "memory.grow",
    "memory.size",
    "module",
    "mut",
    "nop",
    "offset",
    "param",
    "result",
    "return",
    "select",
    "set_global",
    "set_local",
    "start",
    "table",
    "tee_local",
    "then",
    "type",
    "unreachable"
  ], i = {
    begin: [
      /(?:func|call|call_indirect)/,
      /\s+/,
      /\$[^\s)]+/
    ],
    className: {
      1: "keyword",
      3: "title.function"
    }
  }, o = {
    className: "variable",
    begin: /\$[\w_]+/
  }, a = {
    match: /(\((?!;)|\))+/,
    className: "punctuation",
    relevance: 0
  }, s = {
    className: "number",
    relevance: 0,
    // borrowed from Prism, TODO: split out into variants
    match: /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/
  }, l = {
    // look-ahead prevents us from gobbling up opcodes
    match: /(i32|i64|f32|f64)(?!\.)/,
    className: "type"
  }, c = {
    className: "keyword",
    // borrowed from Prism, TODO: split out into variants
    match: /\b(f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))\b/
  };
  return {
    name: "WebAssembly",
    keywords: {
      $pattern: /[\w.]+/,
      keyword: r
    },
    contains: [
      n,
      t,
      {
        match: [
          /(?:offset|align)/,
          /\s*/,
          /=/
        ],
        className: {
          1: "keyword",
          3: "operator"
        }
      },
      o,
      a,
      i,
      e.QUOTE_STRING_MODE,
      l,
      c,
      s
    ]
  };
}
function $p(e) {
  const t = e.regex, n = t.concat(/[\p{L}_]/u, t.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u), r = /[\p{L}0-9._:-]+/u, i = {
    className: "symbol",
    begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
  }, o = {
    begin: /\s/,
    contains: [
      {
        className: "keyword",
        begin: /#?[a-z_][a-z1-9_-]+/,
        illegal: /\n/
      }
    ]
  }, a = e.inherit(o, {
    begin: /\(/,
    end: /\)/
  }), s = e.inherit(e.APOS_STRING_MODE, { className: "string" }), l = e.inherit(e.QUOTE_STRING_MODE, { className: "string" }), c = {
    endsWithParent: !0,
    illegal: /</,
    relevance: 0,
    contains: [
      {
        className: "attr",
        begin: r,
        relevance: 0
      },
      {
        begin: /=\s*/,
        relevance: 0,
        contains: [
          {
            className: "string",
            endsParent: !0,
            variants: [
              {
                begin: /"/,
                end: /"/,
                contains: [i]
              },
              {
                begin: /'/,
                end: /'/,
                contains: [i]
              },
              { begin: /[^\s"'=<>`]+/ }
            ]
          }
        ]
      }
    ]
  };
  return {
    name: "HTML, XML",
    aliases: [
      "html",
      "xhtml",
      "rss",
      "atom",
      "xjb",
      "xsd",
      "xsl",
      "plist",
      "wsf",
      "svg"
    ],
    case_insensitive: !0,
    unicodeRegex: !0,
    contains: [
      {
        className: "meta",
        begin: /<![a-z]/,
        end: />/,
        relevance: 10,
        contains: [
          o,
          l,
          s,
          a,
          {
            begin: /\[/,
            end: /\]/,
            contains: [
              {
                className: "meta",
                begin: /<![a-z]/,
                end: />/,
                contains: [
                  o,
                  a,
                  l,
                  s
                ]
              }
            ]
          }
        ]
      },
      e.COMMENT(
        /<!--/,
        /-->/,
        { relevance: 10 }
      ),
      {
        begin: /<!\[CDATA\[/,
        end: /\]\]>/,
        relevance: 10
      },
      i,
      // xml processing instructions
      {
        className: "meta",
        end: /\?>/,
        variants: [
          {
            begin: /<\?xml/,
            relevance: 10,
            contains: [
              l
            ]
          },
          {
            begin: /<\?[a-z][a-z0-9]+/
          }
        ]
      },
      {
        className: "tag",
        /*
        The lookahead pattern (?=...) ensures that 'begin' only matches
        '<style' as a single word, followed by a whitespace or an
        ending bracket.
        */
        begin: /<style(?=\s|>)/,
        end: />/,
        keywords: { name: "style" },
        contains: [c],
        starts: {
          end: /<\/style>/,
          returnEnd: !0,
          subLanguage: [
            "css",
            "xml"
          ]
        }
      },
      {
        className: "tag",
        // See the comment in the <style tag about the lookahead pattern
        begin: /<script(?=\s|>)/,
        end: />/,
        keywords: { name: "script" },
        contains: [c],
        starts: {
          end: /<\/script>/,
          returnEnd: !0,
          subLanguage: [
            "javascript",
            "handlebars",
            "xml"
          ]
        }
      },
      // we need this for now for jSX
      {
        className: "tag",
        begin: /<>|<\/>/
      },
      // open tag
      {
        className: "tag",
        begin: t.concat(
          /</,
          t.lookahead(t.concat(
            n,
            // <tag/>
            // <tag>
            // <tag ...
            t.either(/\/>/, />/, /\s/)
          ))
        ),
        end: /\/?>/,
        contains: [
          {
            className: "name",
            begin: n,
            relevance: 0,
            starts: c
          }
        ]
      },
      // close tag
      {
        className: "tag",
        begin: t.concat(
          /<\//,
          t.lookahead(t.concat(
            n,
            />/
          ))
        ),
        contains: [
          {
            className: "name",
            begin: n,
            relevance: 0
          },
          {
            begin: />/,
            relevance: 0,
            endsParent: !0
          }
        ]
      }
    ]
  };
}
function Hp(e) {
  const t = "true false yes no null", n = "[\\w#;/?:@&=+$,.~*'()[\\]]+", r = {
    className: "attr",
    variants: [
      // added brackets support and special char support
      { begin: /[\w*@][\w*@ :()\./-]*:(?=[ \t]|$)/ },
      {
        // double quoted keys - with brackets and special char support
        begin: /"[\w*@][\w*@ :()\./-]*":(?=[ \t]|$)/
      },
      {
        // single quoted keys - with brackets and special char support
        begin: /'[\w*@][\w*@ :()\./-]*':(?=[ \t]|$)/
      }
    ]
  }, i = {
    className: "template-variable",
    variants: [
      {
        // jinja templates Ansible
        begin: /\{\{/,
        end: /\}\}/
      },
      {
        // Ruby i18n
        begin: /%\{/,
        end: /\}/
      }
    ]
  }, o = {
    className: "string",
    relevance: 0,
    begin: /'/,
    end: /'/,
    contains: [
      {
        match: /''/,
        scope: "char.escape",
        relevance: 0
      }
    ]
  }, a = {
    className: "string",
    relevance: 0,
    variants: [
      {
        begin: /"/,
        end: /"/
      },
      { begin: /\S+/ }
    ],
    contains: [
      e.BACKSLASH_ESCAPE,
      i
    ]
  }, s = e.inherit(a, { variants: [
    {
      begin: /'/,
      end: /'/,
      contains: [
        {
          begin: /''/,
          relevance: 0
        }
      ]
    },
    {
      begin: /"/,
      end: /"/
    },
    { begin: /[^\s,{}[\]]+/ }
  ] }), p = {
    className: "number",
    begin: "\\b" + "[0-9]{4}(-[0-9][0-9]){0,2}" + "([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?" + "(\\.[0-9]*)?" + "([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?" + "\\b"
  }, f = {
    end: ",",
    endsWithParent: !0,
    excludeEnd: !0,
    keywords: t,
    relevance: 0
  }, g = {
    begin: /\{/,
    end: /\}/,
    contains: [f],
    illegal: "\\n",
    relevance: 0
  }, m = {
    begin: "\\[",
    end: "\\]",
    contains: [f],
    illegal: "\\n",
    relevance: 0
  }, y = [
    r,
    {
      className: "meta",
      begin: "^---\\s*$",
      relevance: 10
    },
    {
      // multi line string
      // Blocks start with a | or > followed by a newline
      //
      // Indentation of subsequent lines must be the same to
      // be considered part of the block
      className: "string",
      begin: "[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"
    },
    {
      // Ruby/Rails erb
      begin: "<%[%=-]?",
      end: "[%-]?%>",
      subLanguage: "ruby",
      excludeBegin: !0,
      excludeEnd: !0,
      relevance: 0
    },
    {
      // named tags
      className: "type",
      begin: "!\\w+!" + n
    },
    // https://yaml.org/spec/1.2/spec.html#id2784064
    {
      // verbatim tags
      className: "type",
      begin: "!<" + n + ">"
    },
    {
      // primary tags
      className: "type",
      begin: "!" + n
    },
    {
      // secondary tags
      className: "type",
      begin: "!!" + n
    },
    {
      // fragment id &ref
      className: "meta",
      begin: "&" + e.UNDERSCORE_IDENT_RE + "$"
    },
    {
      // fragment reference *ref
      className: "meta",
      begin: "\\*" + e.UNDERSCORE_IDENT_RE + "$"
    },
    {
      // array listing
      className: "bullet",
      // TODO: remove |$ hack when we have proper look-ahead support
      begin: "-(?=[ ]|$)",
      relevance: 0
    },
    e.HASH_COMMENT_MODE,
    {
      beginKeywords: t,
      keywords: { literal: t }
    },
    p,
    // numbers are any valid C-style number that
    // sit isolated from other words
    {
      className: "number",
      begin: e.C_NUMBER_RE + "\\b",
      relevance: 0
    },
    g,
    m,
    o,
    a
  ], h = [...y];
  return h.pop(), h.push(s), f.contains = h, {
    name: "YAML",
    case_insensitive: !0,
    aliases: ["yml"],
    contains: y
  };
}
const Gp = {
  arduino: Sf,
  bash: Nf,
  c: Tf,
  cpp: Af,
  csharp: Cf,
  css: Pf,
  diff: Ff,
  go: zf,
  graphql: Uf,
  ini: $f,
  java: Hf,
  javascript: Yf,
  json: Vf,
  kotlin: Xf,
  less: ip,
  lua: ap,
  makefile: op,
  markdown: sp,
  objectivec: lp,
  perl: cp,
  php: up,
  "php-template": dp,
  plaintext: fp,
  python: pp,
  "python-repl": gp,
  r: hp,
  ruby: mp,
  rust: bp,
  scss: Tp,
  shell: Ap,
  sql: Cp,
  swift: Bp,
  typescript: Fp,
  vbnet: zp,
  wasm: Up,
  xml: $p,
  yaml: Hp
};
var Wn, Oi;
function Kp() {
  if (Oi) return Wn;
  Oi = 1;
  function e(_) {
    return _ instanceof Map ? _.clear = _.delete = _.set = function() {
      throw new Error("map is read-only");
    } : _ instanceof Set && (_.add = _.clear = _.delete = function() {
      throw new Error("set is read-only");
    }), Object.freeze(_), Object.getOwnPropertyNames(_).forEach((C) => {
      const B = _[C], Z = typeof B;
      (Z === "object" || Z === "function") && !Object.isFrozen(B) && e(B);
    }), _;
  }
  class t {
    /**
     * @param {CompiledMode} mode
     */
    constructor(C) {
      C.data === void 0 && (C.data = {}), this.data = C.data, this.isMatchIgnored = !1;
    }
    ignoreMatch() {
      this.isMatchIgnored = !0;
    }
  }
  function n(_) {
    return _.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
  }
  function r(_, ...C) {
    const B = /* @__PURE__ */ Object.create(null);
    for (const Z in _)
      B[Z] = _[Z];
    return C.forEach(function(Z) {
      for (const he in Z)
        B[he] = Z[he];
    }), /** @type {T} */
    B;
  }
  const i = "</span>", o = (_) => !!_.scope, a = (_, { prefix: C }) => {
    if (_.startsWith("language:"))
      return _.replace("language:", "language-");
    if (_.includes(".")) {
      const B = _.split(".");
      return [
        `${C}${B.shift()}`,
        ...B.map((Z, he) => `${Z}${"_".repeat(he + 1)}`)
      ].join(" ");
    }
    return `${C}${_}`;
  };
  class s {
    /**
     * Creates a new HTMLRenderer
     *
     * @param {Tree} parseTree - the parse tree (must support `walk` API)
     * @param {{classPrefix: string}} options
     */
    constructor(C, B) {
      this.buffer = "", this.classPrefix = B.classPrefix, C.walk(this);
    }
    /**
     * Adds texts to the output stream
     *
     * @param {string} text */
    addText(C) {
      this.buffer += n(C);
    }
    /**
     * Adds a node open to the output stream (if needed)
     *
     * @param {Node} node */
    openNode(C) {
      if (!o(C)) return;
      const B = a(
        C.scope,
        { prefix: this.classPrefix }
      );
      this.span(B);
    }
    /**
     * Adds a node close to the output stream (if needed)
     *
     * @param {Node} node */
    closeNode(C) {
      o(C) && (this.buffer += i);
    }
    /**
     * returns the accumulated buffer
    */
    value() {
      return this.buffer;
    }
    // helpers
    /**
     * Builds a span element
     *
     * @param {string} className */
    span(C) {
      this.buffer += `<span class="${C}">`;
    }
  }
  const l = (_ = {}) => {
    const C = { children: [] };
    return Object.assign(C, _), C;
  };
  class c {
    constructor() {
      this.rootNode = l(), this.stack = [this.rootNode];
    }
    get top() {
      return this.stack[this.stack.length - 1];
    }
    get root() {
      return this.rootNode;
    }
    /** @param {Node} node */
    add(C) {
      this.top.children.push(C);
    }
    /** @param {string} scope */
    openNode(C) {
      const B = l({ scope: C });
      this.add(B), this.stack.push(B);
    }
    closeNode() {
      if (this.stack.length > 1)
        return this.stack.pop();
    }
    closeAllNodes() {
      for (; this.closeNode(); ) ;
    }
    toJSON() {
      return JSON.stringify(this.rootNode, null, 4);
    }
    /**
     * @typedef { import("./html_renderer").Renderer } Renderer
     * @param {Renderer} builder
     */
    walk(C) {
      return this.constructor._walk(C, this.rootNode);
    }
    /**
     * @param {Renderer} builder
     * @param {Node} node
     */
    static _walk(C, B) {
      return typeof B == "string" ? C.addText(B) : B.children && (C.openNode(B), B.children.forEach((Z) => this._walk(C, Z)), C.closeNode(B)), C;
    }
    /**
     * @param {Node} node
     */
    static _collapse(C) {
      typeof C != "string" && C.children && (C.children.every((B) => typeof B == "string") ? C.children = [C.children.join("")] : C.children.forEach((B) => {
        c._collapse(B);
      }));
    }
  }
  class d extends c {
    /**
     * @param {*} options
     */
    constructor(C) {
      super(), this.options = C;
    }
    /**
     * @param {string} text
     */
    addText(C) {
      C !== "" && this.add(C);
    }
    /** @param {string} scope */
    startScope(C) {
      this.openNode(C);
    }
    endScope() {
      this.closeNode();
    }
    /**
     * @param {Emitter & {root: DataNode}} emitter
     * @param {string} name
     */
    __addSublanguage(C, B) {
      const Z = C.root;
      B && (Z.scope = `language:${B}`), this.add(Z);
    }
    toHTML() {
      return new s(this, this.options).value();
    }
    finalize() {
      return this.closeAllNodes(), !0;
    }
  }
  function u(_) {
    return _ ? typeof _ == "string" ? _ : _.source : null;
  }
  function p(_) {
    return m("(?=", _, ")");
  }
  function f(_) {
    return m("(?:", _, ")*");
  }
  function g(_) {
    return m("(?:", _, ")?");
  }
  function m(..._) {
    return _.map((B) => u(B)).join("");
  }
  function y(_) {
    const C = _[_.length - 1];
    return typeof C == "object" && C.constructor === Object ? (_.splice(_.length - 1, 1), C) : {};
  }
  function h(..._) {
    return "(" + (y(_).capture ? "" : "?:") + _.map((Z) => u(Z)).join("|") + ")";
  }
  function S(_) {
    return new RegExp(_.toString() + "|").exec("").length - 1;
  }
  function x(_, C) {
    const B = _ && _.exec(C);
    return B && B.index === 0;
  }
  const N = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
  function I(_, { joinWith: C }) {
    let B = 0;
    return _.map((Z) => {
      B += 1;
      const he = B;
      let me = u(Z), z = "";
      for (; me.length > 0; ) {
        const F = N.exec(me);
        if (!F) {
          z += me;
          break;
        }
        z += me.substring(0, F.index), me = me.substring(F.index + F[0].length), F[0][0] === "\\" && F[1] ? z += "\\" + String(Number(F[1]) + he) : (z += F[0], F[0] === "(" && B++);
      }
      return z;
    }).map((Z) => `(${Z})`).join(C);
  }
  const k = /\b\B/, A = "[a-zA-Z]\\w*", O = "[a-zA-Z_]\\w*", L = "\\b\\d+(\\.\\d+)?", w = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", v = "\\b(0b[01]+)", D = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", K = (_ = {}) => {
    const C = /^#![ ]*\//;
    return _.binary && (_.begin = m(
      C,
      /.*\b/,
      _.binary,
      /\b.*/
    )), r({
      scope: "meta",
      begin: C,
      end: /$/,
      relevance: 0,
      /** @type {ModeCallback} */
      "on:begin": (B, Z) => {
        B.index !== 0 && Z.ignoreMatch();
      }
    }, _);
  }, q = {
    begin: "\\\\[\\s\\S]",
    relevance: 0
  }, $ = {
    scope: "string",
    begin: "'",
    end: "'",
    illegal: "\\n",
    contains: [q]
  }, ne = {
    scope: "string",
    begin: '"',
    end: '"',
    illegal: "\\n",
    contains: [q]
  }, le = {
    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
  }, V = function(_, C, B = {}) {
    const Z = r(
      {
        scope: "comment",
        begin: _,
        end: C,
        contains: []
      },
      B
    );
    Z.contains.push({
      scope: "doctag",
      // hack to avoid the space from being included. the space is necessary to
      // match here to prevent the plain text rule below from gobbling up doctags
      begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
      end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
      excludeBegin: !0,
      relevance: 0
    });
    const he = h(
      // list of common 1 and 2 letter words in English
      "I",
      "a",
      "is",
      "so",
      "us",
      "to",
      "at",
      "if",
      "in",
      "it",
      "on",
      // note: this is not an exhaustive list of contractions, just popular ones
      /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
      // contractions - can't we'd they're let's, etc
      /[A-Za-z]+[-][a-z]+/,
      // `no-way`, etc.
      /[A-Za-z][a-z]{2,}/
      // allow capitalized words at beginning of sentences
    );
    return Z.contains.push(
      {
        // TODO: how to include ", (, ) without breaking grammars that use these for
        // comment delimiters?
        // begin: /[ ]+([()"]?([A-Za-z'-]{3,}|is|a|I|so|us|[tT][oO]|at|if|in|it|on)[.]?[()":]?([.][ ]|[ ]|\))){3}/
        // ---
        // this tries to find sequences of 3 english words in a row (without any
        // "programming" type syntax) this gives us a strong signal that we've
        // TRULY found a comment - vs perhaps scanning with the wrong language.
        // It's possible to find something that LOOKS like the start of the
        // comment - but then if there is no readable text - good chance it is a
        // false match and not a comment.
        //
        // for a visual example please see:
        // https://github.com/highlightjs/highlight.js/issues/2827
        begin: m(
          /[ ]+/,
          // necessary to prevent us gobbling up doctags like /* @author Bob Mcgill */
          "(",
          he,
          /[.]?[:]?([.][ ]|[ ])/,
          "){3}"
        )
        // look for 3 words in a row
      }
    ), Z;
  }, ce = V("//", "$"), b = V("/\\*", "\\*/"), oe = V("#", "$"), ue = {
    scope: "number",
    begin: L,
    relevance: 0
  }, E = {
    scope: "number",
    begin: w,
    relevance: 0
  }, we = {
    scope: "number",
    begin: v,
    relevance: 0
  }, Be = {
    scope: "regexp",
    begin: /\/(?=[^/\n]*\/)/,
    end: /\/[gimuy]*/,
    contains: [
      q,
      {
        begin: /\[/,
        end: /\]/,
        relevance: 0,
        contains: [q]
      }
    ]
  }, ge = {
    scope: "title",
    begin: A,
    relevance: 0
  }, We = {
    scope: "title",
    begin: O,
    relevance: 0
  }, Oe = {
    // excludes method names from keyword processing
    begin: "\\.\\s*" + O,
    relevance: 0
  };
  var ve = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    APOS_STRING_MODE: $,
    BACKSLASH_ESCAPE: q,
    BINARY_NUMBER_MODE: we,
    BINARY_NUMBER_RE: v,
    COMMENT: V,
    C_BLOCK_COMMENT_MODE: b,
    C_LINE_COMMENT_MODE: ce,
    C_NUMBER_MODE: E,
    C_NUMBER_RE: w,
    END_SAME_AS_BEGIN: function(_) {
      return Object.assign(
        _,
        {
          /** @type {ModeCallback} */
          "on:begin": (C, B) => {
            B.data._beginMatch = C[1];
          },
          /** @type {ModeCallback} */
          "on:end": (C, B) => {
            B.data._beginMatch !== C[1] && B.ignoreMatch();
          }
        }
      );
    },
    HASH_COMMENT_MODE: oe,
    IDENT_RE: A,
    MATCH_NOTHING_RE: k,
    METHOD_GUARD: Oe,
    NUMBER_MODE: ue,
    NUMBER_RE: L,
    PHRASAL_WORDS_MODE: le,
    QUOTE_STRING_MODE: ne,
    REGEXP_MODE: Be,
    RE_STARTERS_RE: D,
    SHEBANG: K,
    TITLE_MODE: ge,
    UNDERSCORE_IDENT_RE: O,
    UNDERSCORE_TITLE_MODE: We
  });
  function tt(_, C) {
    _.input[_.index - 1] === "." && C.ignoreMatch();
  }
  function St(_, C) {
    _.className !== void 0 && (_.scope = _.className, delete _.className);
  }
  function Nt(_, C) {
    C && _.beginKeywords && (_.begin = "\\b(" + _.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", _.__beforeBegin = tt, _.keywords = _.keywords || _.beginKeywords, delete _.beginKeywords, _.relevance === void 0 && (_.relevance = 0));
  }
  function Tt(_, C) {
    Array.isArray(_.illegal) && (_.illegal = h(..._.illegal));
  }
  function ht(_, C) {
    if (_.match) {
      if (_.begin || _.end) throw new Error("begin & end are not supported with match");
      _.begin = _.match, delete _.match;
    }
  }
  function re(_, C) {
    _.relevance === void 0 && (_.relevance = 1);
  }
  const Ve = (_, C) => {
    if (!_.beforeMatch) return;
    if (_.starts) throw new Error("beforeMatch cannot be used with starts");
    const B = Object.assign({}, _);
    Object.keys(_).forEach((Z) => {
      delete _[Z];
    }), _.keywords = B.keywords, _.begin = m(B.beforeMatch, p(B.begin)), _.starts = {
      relevance: 0,
      contains: [
        Object.assign(B, { endsParent: !0 })
      ]
    }, _.relevance = 0, delete B.beforeMatch;
  }, Ze = [
    "of",
    "and",
    "for",
    "in",
    "not",
    "or",
    "if",
    "then",
    "parent",
    // common variable name
    "list",
    // common variable name
    "value"
    // common variable name
  ], mt = "keyword";
  function At(_, C, B = mt) {
    const Z = /* @__PURE__ */ Object.create(null);
    return typeof _ == "string" ? he(B, _.split(" ")) : Array.isArray(_) ? he(B, _) : Object.keys(_).forEach(function(me) {
      Object.assign(
        Z,
        At(_[me], C, me)
      );
    }), Z;
    function he(me, z) {
      C && (z = z.map((F) => F.toLowerCase())), z.forEach(function(F) {
        const Y = F.split("|");
        Z[Y[0]] = [me, yn(Y[0], Y[1])];
      });
    }
  }
  function yn(_, C) {
    return C ? Number(C) : kn(_) ? 0 : 1;
  }
  function kn(_) {
    return Ze.includes(_.toLowerCase());
  }
  const $t = {}, Xe = (_) => {
    console.error(_);
  }, Ht = (_, ...C) => {
    console.log(`WARN: ${_}`, ...C);
  }, T = (_, C) => {
    $t[`${_}/${C}`] || (console.log(`Deprecated as of ${_}. ${C}`), $t[`${_}/${C}`] = !0);
  }, M = new Error();
  function W(_, C, { key: B }) {
    let Z = 0;
    const he = _[B], me = {}, z = {};
    for (let F = 1; F <= C.length; F++)
      z[F + Z] = he[F], me[F + Z] = !0, Z += S(C[F - 1]);
    _[B] = z, _[B]._emit = me, _[B]._multi = !0;
  }
  function j(_) {
    if (Array.isArray(_.begin)) {
      if (_.skip || _.excludeBegin || _.returnBegin)
        throw Xe("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), M;
      if (typeof _.beginScope != "object" || _.beginScope === null)
        throw Xe("beginScope must be object"), M;
      W(_, _.begin, { key: "beginScope" }), _.begin = I(_.begin, { joinWith: "" });
    }
  }
  function ie(_) {
    if (Array.isArray(_.end)) {
      if (_.skip || _.excludeEnd || _.returnEnd)
        throw Xe("skip, excludeEnd, returnEnd not compatible with endScope: {}"), M;
      if (typeof _.endScope != "object" || _.endScope === null)
        throw Xe("endScope must be object"), M;
      W(_, _.end, { key: "endScope" }), _.end = I(_.end, { joinWith: "" });
    }
  }
  function Re(_) {
    _.scope && typeof _.scope == "object" && _.scope !== null && (_.beginScope = _.scope, delete _.scope);
  }
  function Qe(_) {
    Re(_), typeof _.beginScope == "string" && (_.beginScope = { _wrap: _.beginScope }), typeof _.endScope == "string" && (_.endScope = { _wrap: _.endScope }), j(_), ie(_);
  }
  function Fe(_) {
    function C(z, F) {
      return new RegExp(
        u(z),
        "m" + (_.case_insensitive ? "i" : "") + (_.unicodeRegex ? "u" : "") + (F ? "g" : "")
      );
    }
    class B {
      constructor() {
        this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
      }
      // @ts-ignore
      addRule(F, Y) {
        Y.position = this.position++, this.matchIndexes[this.matchAt] = Y, this.regexes.push([Y, F]), this.matchAt += S(F) + 1;
      }
      compile() {
        this.regexes.length === 0 && (this.exec = () => null);
        const F = this.regexes.map((Y) => Y[1]);
        this.matcherRe = C(I(F, { joinWith: "|" }), !0), this.lastIndex = 0;
      }
      /** @param {string} s */
      exec(F) {
        this.matcherRe.lastIndex = this.lastIndex;
        const Y = this.matcherRe.exec(F);
        if (!Y)
          return null;
        const Ee = Y.findIndex((Ct, xn) => xn > 0 && Ct !== void 0), be = this.matchIndexes[Ee];
        return Y.splice(0, Ee), Object.assign(Y, be);
      }
    }
    class Z {
      constructor() {
        this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
      }
      // @ts-ignore
      getMatcher(F) {
        if (this.multiRegexes[F]) return this.multiRegexes[F];
        const Y = new B();
        return this.rules.slice(F).forEach(([Ee, be]) => Y.addRule(Ee, be)), Y.compile(), this.multiRegexes[F] = Y, Y;
      }
      resumingScanAtSamePosition() {
        return this.regexIndex !== 0;
      }
      considerAll() {
        this.regexIndex = 0;
      }
      // @ts-ignore
      addRule(F, Y) {
        this.rules.push([F, Y]), Y.type === "begin" && this.count++;
      }
      /** @param {string} s */
      exec(F) {
        const Y = this.getMatcher(this.regexIndex);
        Y.lastIndex = this.lastIndex;
        let Ee = Y.exec(F);
        if (this.resumingScanAtSamePosition() && !(Ee && Ee.index === this.lastIndex)) {
          const be = this.getMatcher(0);
          be.lastIndex = this.lastIndex + 1, Ee = be.exec(F);
        }
        return Ee && (this.regexIndex += Ee.position + 1, this.regexIndex === this.count && this.considerAll()), Ee;
      }
    }
    function he(z) {
      const F = new Z();
      return z.contains.forEach((Y) => F.addRule(Y.begin, { rule: Y, type: "begin" })), z.terminatorEnd && F.addRule(z.terminatorEnd, { type: "end" }), z.illegal && F.addRule(z.illegal, { type: "illegal" }), F;
    }
    function me(z, F) {
      const Y = (
        /** @type CompiledMode */
        z
      );
      if (z.isCompiled) return Y;
      [
        St,
        // do this early so compiler extensions generally don't have to worry about
        // the distinction between match/begin
        ht,
        Qe,
        Ve
      ].forEach((be) => be(z, F)), _.compilerExtensions.forEach((be) => be(z, F)), z.__beforeBegin = null, [
        Nt,
        // do this later so compiler extensions that come earlier have access to the
        // raw array if they wanted to perhaps manipulate it, etc.
        Tt,
        // default to 1 relevance if not specified
        re
      ].forEach((be) => be(z, F)), z.isCompiled = !0;
      let Ee = null;
      return typeof z.keywords == "object" && z.keywords.$pattern && (z.keywords = Object.assign({}, z.keywords), Ee = z.keywords.$pattern, delete z.keywords.$pattern), Ee = Ee || /\w+/, z.keywords && (z.keywords = At(z.keywords, _.case_insensitive)), Y.keywordPatternRe = C(Ee, !0), F && (z.begin || (z.begin = /\B|\b/), Y.beginRe = C(Y.begin), !z.end && !z.endsWithParent && (z.end = /\B|\b/), z.end && (Y.endRe = C(Y.end)), Y.terminatorEnd = u(Y.end) || "", z.endsWithParent && F.terminatorEnd && (Y.terminatorEnd += (z.end ? "|" : "") + F.terminatorEnd)), z.illegal && (Y.illegalRe = C(
        /** @type {RegExp | string} */
        z.illegal
      )), z.contains || (z.contains = []), z.contains = [].concat(...z.contains.map(function(be) {
        return lt(be === "self" ? z : be);
      })), z.contains.forEach(function(be) {
        me(
          /** @type Mode */
          be,
          Y
        );
      }), z.starts && me(z.starts, F), Y.matcher = he(Y), Y;
    }
    if (_.compilerExtensions || (_.compilerExtensions = []), _.contains && _.contains.includes("self"))
      throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
    return _.classNameAliases = r(_.classNameAliases || {}), me(
      /** @type Mode */
      _
    );
  }
  function nt(_) {
    return _ ? _.endsWithParent || nt(_.starts) : !1;
  }
  function lt(_) {
    return _.variants && !_.cachedVariants && (_.cachedVariants = _.variants.map(function(C) {
      return r(_, { variants: null }, C);
    })), _.cachedVariants ? _.cachedVariants : nt(_) ? r(_, { starts: _.starts ? r(_.starts) : null }) : Object.isFrozen(_) ? r(_) : _;
  }
  var Se = "11.11.1";
  class rt extends Error {
    constructor(C, B) {
      super(C), this.name = "HTMLInjectionError", this.html = B;
    }
  }
  const Me = n, Sr = r, Nr = Symbol("nomatch"), no = 7, Tr = function(_) {
    const C = /* @__PURE__ */ Object.create(null), B = /* @__PURE__ */ Object.create(null), Z = [];
    let he = !0;
    const me = "Could not find the language '{}', did you forget to load/include a language module?", z = { disableAutodetect: !0, name: "Plain text", contains: [] };
    let F = {
      ignoreUnescapedHTML: !1,
      throwUnescapedHTML: !1,
      noHighlightRe: /^(no-?highlight)$/i,
      languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
      classPrefix: "hljs-",
      cssSelector: "pre code",
      languages: null,
      // beta configuration options, subject to change, welcome to discuss
      // https://github.com/highlightjs/highlight.js/issues/1086
      __emitter: d
    };
    function Y(R) {
      return F.noHighlightRe.test(R);
    }
    function Ee(R) {
      let G = R.className + " ";
      G += R.parentNode ? R.parentNode.className : "";
      const ee = F.languageDetectRe.exec(G);
      if (ee) {
        const fe = it(ee[1]);
        return fe || (Ht(me.replace("{}", ee[1])), Ht("Falling back to no-highlight mode for this block.", R)), fe ? ee[1] : "no-highlight";
      }
      return G.split(/\s+/).find((fe) => Y(fe) || it(fe));
    }
    function be(R, G, ee) {
      let fe = "", _e = "";
      typeof G == "object" ? (fe = R, ee = G.ignoreIllegals, _e = G.language) : (T("10.7.0", "highlight(lang, code, ...args) has been deprecated."), T("10.7.0", `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`), _e = R, fe = G), ee === void 0 && (ee = !0);
      const ze = {
        code: fe,
        language: _e
      };
      Kt("before:highlight", ze);
      const at = ze.result ? ze.result : Ct(ze.language, ze.code, ee);
      return at.code = ze.code, Kt("after:highlight", at), at;
    }
    function Ct(R, G, ee, fe) {
      const _e = /* @__PURE__ */ Object.create(null);
      function ze(P, U) {
        return P.keywords[U];
      }
      function at() {
        if (!X.keywords) {
          ye.addText(pe);
          return;
        }
        let P = 0;
        X.keywordPatternRe.lastIndex = 0;
        let U = X.keywordPatternRe.exec(pe), J = "";
        for (; U; ) {
          J += pe.substring(P, U.index);
          const ae = He.case_insensitive ? U[0].toLowerCase() : U[0], ke = ze(X, ae);
          if (ke) {
            const [Je, yo] = ke;
            if (ye.addText(J), J = "", _e[ae] = (_e[ae] || 0) + 1, _e[ae] <= no && (Yt += yo), Je.startsWith("_"))
              J += U[0];
            else {
              const ko = He.classNameAliases[Je] || Je;
              $e(U[0], ko);
            }
          } else
            J += U[0];
          P = X.keywordPatternRe.lastIndex, U = X.keywordPatternRe.exec(pe);
        }
        J += pe.substring(P), ye.addText(J);
      }
      function qt() {
        if (pe === "") return;
        let P = null;
        if (typeof X.subLanguage == "string") {
          if (!C[X.subLanguage]) {
            ye.addText(pe);
            return;
          }
          P = Ct(X.subLanguage, pe, !0, Dr[X.subLanguage]), Dr[X.subLanguage] = /** @type {CompiledMode} */
          P._top;
        } else
          P = wn(pe, X.subLanguage.length ? X.subLanguage : null);
        X.relevance > 0 && (Yt += P.relevance), ye.__addSublanguage(P._emitter, P.language);
      }
      function De() {
        X.subLanguage != null ? qt() : at(), pe = "";
      }
      function $e(P, U) {
        P !== "" && (ye.startScope(U), ye.addText(P), ye.endScope());
      }
      function Or(P, U) {
        let J = 1;
        const ae = U.length - 1;
        for (; J <= ae; ) {
          if (!P._emit[J]) {
            J++;
            continue;
          }
          const ke = He.classNameAliases[P[J]] || P[J], Je = U[J];
          ke ? $e(Je, ke) : (pe = Je, at(), pe = ""), J++;
        }
      }
      function vr(P, U) {
        return P.scope && typeof P.scope == "string" && ye.openNode(He.classNameAliases[P.scope] || P.scope), P.beginScope && (P.beginScope._wrap ? ($e(pe, He.classNameAliases[P.beginScope._wrap] || P.beginScope._wrap), pe = "") : P.beginScope._multi && (Or(P.beginScope, U), pe = "")), X = Object.create(P, { parent: { value: X } }), X;
      }
      function Rr(P, U, J) {
        let ae = x(P.endRe, J);
        if (ae) {
          if (P["on:end"]) {
            const ke = new t(P);
            P["on:end"](U, ke), ke.isMatchIgnored && (ae = !1);
          }
          if (ae) {
            for (; P.endsParent && P.parent; )
              P = P.parent;
            return P;
          }
        }
        if (P.endsWithParent)
          return Rr(P.parent, U, J);
      }
      function ho(P) {
        return X.matcher.regexIndex === 0 ? (pe += P[0], 1) : (An = !0, 0);
      }
      function mo(P) {
        const U = P[0], J = P.rule, ae = new t(J), ke = [J.__beforeBegin, J["on:begin"]];
        for (const Je of ke)
          if (Je && (Je(P, ae), ae.isMatchIgnored))
            return ho(U);
        return J.skip ? pe += U : (J.excludeBegin && (pe += U), De(), !J.returnBegin && !J.excludeBegin && (pe = U)), vr(J, P), J.returnBegin ? 0 : U.length;
      }
      function bo(P) {
        const U = P[0], J = G.substring(P.index), ae = Rr(X, P, J);
        if (!ae)
          return Nr;
        const ke = X;
        X.endScope && X.endScope._wrap ? (De(), $e(U, X.endScope._wrap)) : X.endScope && X.endScope._multi ? (De(), Or(X.endScope, P)) : ke.skip ? pe += U : (ke.returnEnd || ke.excludeEnd || (pe += U), De(), ke.excludeEnd && (pe = U));
        do
          X.scope && ye.closeNode(), !X.skip && !X.subLanguage && (Yt += X.relevance), X = X.parent;
        while (X !== ae.parent);
        return ae.starts && vr(ae.starts, P), ke.returnEnd ? 0 : U.length;
      }
      function _o() {
        const P = [];
        for (let U = X; U !== He; U = U.parent)
          U.scope && P.unshift(U.scope);
        P.forEach((U) => ye.openNode(U));
      }
      let Wt = {};
      function Mr(P, U) {
        const J = U && U[0];
        if (pe += P, J == null)
          return De(), 0;
        if (Wt.type === "begin" && U.type === "end" && Wt.index === U.index && J === "") {
          if (pe += G.slice(U.index, U.index + 1), !he) {
            const ae = new Error(`0 width match regex (${R})`);
            throw ae.languageName = R, ae.badRule = Wt.rule, ae;
          }
          return 1;
        }
        if (Wt = U, U.type === "begin")
          return mo(U);
        if (U.type === "illegal" && !ee) {
          const ae = new Error('Illegal lexeme "' + J + '" for mode "' + (X.scope || "<unnamed>") + '"');
          throw ae.mode = X, ae;
        } else if (U.type === "end") {
          const ae = bo(U);
          if (ae !== Nr)
            return ae;
        }
        if (U.type === "illegal" && J === "")
          return pe += `
`, 1;
        if (Tn > 1e5 && Tn > U.index * 3)
          throw new Error("potential infinite loop, way more iterations than matches");
        return pe += J, J.length;
      }
      const He = it(R);
      if (!He)
        throw Xe(me.replace("{}", R)), new Error('Unknown language: "' + R + '"');
      const Eo = Fe(He);
      let Nn = "", X = fe || Eo;
      const Dr = {}, ye = new F.__emitter(F);
      _o();
      let pe = "", Yt = 0, ct = 0, Tn = 0, An = !1;
      try {
        if (He.__emitTokens)
          He.__emitTokens(G, ye);
        else {
          for (X.matcher.considerAll(); ; ) {
            Tn++, An ? An = !1 : X.matcher.considerAll(), X.matcher.lastIndex = ct;
            const P = X.matcher.exec(G);
            if (!P) break;
            const U = G.substring(ct, P.index), J = Mr(U, P);
            ct = P.index + J;
          }
          Mr(G.substring(ct));
        }
        return ye.finalize(), Nn = ye.toHTML(), {
          language: R,
          value: Nn,
          relevance: Yt,
          illegal: !1,
          _emitter: ye,
          _top: X
        };
      } catch (P) {
        if (P.message && P.message.includes("Illegal"))
          return {
            language: R,
            value: Me(G),
            illegal: !0,
            relevance: 0,
            _illegalBy: {
              message: P.message,
              index: ct,
              context: G.slice(ct - 100, ct + 100),
              mode: P.mode,
              resultSoFar: Nn
            },
            _emitter: ye
          };
        if (he)
          return {
            language: R,
            value: Me(G),
            illegal: !1,
            relevance: 0,
            errorRaised: P,
            _emitter: ye,
            _top: X
          };
        throw P;
      }
    }
    function xn(R) {
      const G = {
        value: Me(R),
        illegal: !1,
        relevance: 0,
        _top: z,
        _emitter: new F.__emitter(F)
      };
      return G._emitter.addText(R), G;
    }
    function wn(R, G) {
      G = G || F.languages || Object.keys(C);
      const ee = xn(R), fe = G.filter(it).filter(Ir).map(
        (De) => Ct(De, R, !1)
      );
      fe.unshift(ee);
      const _e = fe.sort((De, $e) => {
        if (De.relevance !== $e.relevance) return $e.relevance - De.relevance;
        if (De.language && $e.language) {
          if (it(De.language).supersetOf === $e.language)
            return 1;
          if (it($e.language).supersetOf === De.language)
            return -1;
        }
        return 0;
      }), [ze, at] = _e, qt = ze;
      return qt.secondBest = at, qt;
    }
    function ro(R, G, ee) {
      const fe = G && B[G] || ee;
      R.classList.add("hljs"), R.classList.add(`language-${fe}`);
    }
    function Sn(R) {
      let G = null;
      const ee = Ee(R);
      if (Y(ee)) return;
      if (Kt(
        "before:highlightElement",
        { el: R, language: ee }
      ), R.dataset.highlighted) {
        console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", R);
        return;
      }
      if (R.children.length > 0 && (F.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(R)), F.throwUnescapedHTML))
        throw new rt(
          "One of your code blocks includes unescaped HTML.",
          R.innerHTML
        );
      G = R;
      const fe = G.textContent, _e = ee ? be(fe, { language: ee, ignoreIllegals: !0 }) : wn(fe);
      R.innerHTML = _e.value, R.dataset.highlighted = "yes", ro(R, ee, _e.language), R.result = {
        language: _e.language,
        // TODO: remove with version 11.0
        re: _e.relevance,
        relevance: _e.relevance
      }, _e.secondBest && (R.secondBest = {
        language: _e.secondBest.language,
        relevance: _e.secondBest.relevance
      }), Kt("after:highlightElement", { el: R, result: _e, text: fe });
    }
    function io(R) {
      F = Sr(F, R);
    }
    const ao = () => {
      Gt(), T("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
    };
    function oo() {
      Gt(), T("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
    }
    let Ar = !1;
    function Gt() {
      function R() {
        Gt();
      }
      if (document.readyState === "loading") {
        Ar || window.addEventListener("DOMContentLoaded", R, !1), Ar = !0;
        return;
      }
      document.querySelectorAll(F.cssSelector).forEach(Sn);
    }
    function so(R, G) {
      let ee = null;
      try {
        ee = G(_);
      } catch (fe) {
        if (Xe("Language definition for '{}' could not be registered.".replace("{}", R)), he)
          Xe(fe);
        else
          throw fe;
        ee = z;
      }
      ee.name || (ee.name = R), C[R] = ee, ee.rawDefinition = G.bind(null, _), ee.aliases && Cr(ee.aliases, { languageName: R });
    }
    function lo(R) {
      delete C[R];
      for (const G of Object.keys(B))
        B[G] === R && delete B[G];
    }
    function co() {
      return Object.keys(C);
    }
    function it(R) {
      return R = (R || "").toLowerCase(), C[R] || C[B[R]];
    }
    function Cr(R, { languageName: G }) {
      typeof R == "string" && (R = [R]), R.forEach((ee) => {
        B[ee.toLowerCase()] = G;
      });
    }
    function Ir(R) {
      const G = it(R);
      return G && !G.disableAutodetect;
    }
    function uo(R) {
      R["before:highlightBlock"] && !R["before:highlightElement"] && (R["before:highlightElement"] = (G) => {
        R["before:highlightBlock"](
          Object.assign({ block: G.el }, G)
        );
      }), R["after:highlightBlock"] && !R["after:highlightElement"] && (R["after:highlightElement"] = (G) => {
        R["after:highlightBlock"](
          Object.assign({ block: G.el }, G)
        );
      });
    }
    function fo(R) {
      uo(R), Z.push(R);
    }
    function po(R) {
      const G = Z.indexOf(R);
      G !== -1 && Z.splice(G, 1);
    }
    function Kt(R, G) {
      const ee = R;
      Z.forEach(function(fe) {
        fe[ee] && fe[ee](G);
      });
    }
    function go(R) {
      return T("10.7.0", "highlightBlock will be removed entirely in v12.0"), T("10.7.0", "Please use highlightElement now."), Sn(R);
    }
    Object.assign(_, {
      highlight: be,
      highlightAuto: wn,
      highlightAll: Gt,
      highlightElement: Sn,
      // TODO: Remove with v12 API
      highlightBlock: go,
      configure: io,
      initHighlighting: ao,
      initHighlightingOnLoad: oo,
      registerLanguage: so,
      unregisterLanguage: lo,
      listLanguages: co,
      getLanguage: it,
      registerAliases: Cr,
      autoDetection: Ir,
      inherit: Sr,
      addPlugin: fo,
      removePlugin: po
    }), _.debugMode = function() {
      he = !1;
    }, _.safeMode = function() {
      he = !0;
    }, _.versionString = Se, _.regex = {
      concat: m,
      lookahead: p,
      either: h,
      optional: g,
      anyNumberOfTimes: f
    };
    for (const R in ve)
      typeof ve[R] == "object" && e(ve[R]);
    return Object.assign(_, ve), _;
  }, bt = Tr({});
  return bt.newInstance = () => Tr({}), Wn = bt, bt.HighlightJS = bt, bt.default = bt, Wn;
}
var qp = /* @__PURE__ */ Kp();
const Wp = /* @__PURE__ */ lr(qp), vi = {}, Yp = "hljs-";
function Vp(e) {
  const t = Wp.newInstance();
  return e && o(e), {
    highlight: n,
    highlightAuto: r,
    listLanguages: i,
    register: o,
    registerAlias: a,
    registered: s
  };
  function n(l, c, d) {
    const u = d || vi, p = typeof u.prefix == "string" ? u.prefix : Yp;
    if (!t.getLanguage(l))
      throw new Error("Unknown language: `" + l + "` is not registered");
    t.configure({ __emitter: Zp, classPrefix: p });
    const f = (
      /** @type {HighlightResult & {_emitter: HastEmitter}} */
      t.highlight(c, { ignoreIllegals: !0, language: l })
    );
    if (f.errorRaised)
      throw new Error("Could not highlight with `Highlight.js`", {
        cause: f.errorRaised
      });
    const g = f._emitter.root, m = (
      /** @type {RootData} */
      g.data
    );
    return m.language = f.language, m.relevance = f.relevance, g;
  }
  function r(l, c) {
    const u = (c || vi).subset || i();
    let p = -1, f = 0, g;
    for (; ++p < u.length; ) {
      const m = u[p];
      if (!t.getLanguage(m)) continue;
      const y = n(m, l, c);
      y.data && y.data.relevance !== void 0 && y.data.relevance > f && (f = y.data.relevance, g = y);
    }
    return g || {
      type: "root",
      children: [],
      data: { language: void 0, relevance: f }
    };
  }
  function i() {
    return t.listLanguages();
  }
  function o(l, c) {
    if (typeof l == "string")
      t.registerLanguage(l, c);
    else {
      let d;
      for (d in l)
        Object.hasOwn(l, d) && t.registerLanguage(d, l[d]);
    }
  }
  function a(l, c) {
    if (typeof l == "string")
      t.registerAliases(
        // Note: copy needed because hljs doesn’t accept readonly arrays yet.
        typeof c == "string" ? c : [...c],
        { languageName: l }
      );
    else {
      let d;
      for (d in l)
        if (Object.hasOwn(l, d)) {
          const u = l[d];
          t.registerAliases(
            // Note: copy needed because hljs doesn’t accept readonly arrays yet.
            typeof u == "string" ? u : [...u],
            { languageName: d }
          );
        }
    }
  }
  function s(l) {
    return !!t.getLanguage(l);
  }
}
class Zp {
  /**
   * @param {Readonly<HljsOptions>} options
   *   Configuration.
   * @returns
   *   Instance.
   */
  constructor(t) {
    this.options = t, this.root = {
      type: "root",
      children: [],
      data: { language: void 0, relevance: 0 }
    }, this.stack = [this.root];
  }
  /**
   * @param {string} value
   *   Text to add.
   * @returns {undefined}
   *   Nothing.
   *
   */
  addText(t) {
    if (t === "") return;
    const n = this.stack[this.stack.length - 1], r = n.children[n.children.length - 1];
    r && r.type === "text" ? r.value += t : n.children.push({ type: "text", value: t });
  }
  /**
   *
   * @param {unknown} rawName
   *   Name to add.
   * @returns {undefined}
   *   Nothing.
   */
  startScope(t) {
    this.openNode(String(t));
  }
  /**
   * @returns {undefined}
   *   Nothing.
   */
  endScope() {
    this.closeNode();
  }
  /**
   * @param {HastEmitter} other
   *   Other emitter.
   * @param {string} name
   *   Name of the sublanguage.
   * @returns {undefined}
   *   Nothing.
   */
  __addSublanguage(t, n) {
    const r = this.stack[this.stack.length - 1], i = (
      /** @type {Array<ElementContent>} */
      t.root.children
    );
    n ? r.children.push({
      type: "element",
      tagName: "span",
      properties: { className: [n] },
      children: i
    }) : r.children.push(...i);
  }
  /**
   * @param {string} name
   *   Name to add.
   * @returns {undefined}
   *   Nothing.
   */
  openNode(t) {
    const n = this, r = t.split(".").map(function(a, s) {
      return s ? a + "_".repeat(s) : n.options.classPrefix + a;
    }), i = this.stack[this.stack.length - 1], o = {
      type: "element",
      tagName: "span",
      properties: { className: r },
      children: []
    };
    i.children.push(o), this.stack.push(o);
  }
  /**
   * @returns {undefined}
   *   Nothing.
   */
  closeNode() {
    this.stack.pop();
  }
  /**
   * @returns {undefined}
   *   Nothing.
   */
  finalize() {
  }
  /**
   * @returns {string}
   *   Nothing.
   */
  toHTML() {
    return "";
  }
}
const Xp = {};
function Qp(e) {
  const t = e || Xp, n = t.aliases, r = t.detect || !1, i = t.languages || Gp, o = t.plainText, a = t.prefix, s = t.subset;
  let l = "hljs";
  const c = Vp(i);
  if (n && c.registerAlias(n), a) {
    const d = a.indexOf("-");
    l = d === -1 ? a : a.slice(0, d);
  }
  return function(d, u) {
    br(d, "element", function(p, f, g) {
      if (p.tagName !== "code" || !g || g.type !== "element" || g.tagName !== "pre")
        return;
      const m = Jp(p);
      if (m === !1 || !m && !r || m && o && o.includes(m))
        return;
      Array.isArray(p.properties.className) || (p.properties.className = []), p.properties.className.includes(l) || p.properties.className.unshift(l);
      const y = mf(p, { whitespace: "pre" });
      let h;
      try {
        h = m ? c.highlight(m, y, { prefix: a }) : c.highlightAuto(y, { prefix: a, subset: s });
      } catch (S) {
        const x = (
          /** @type {Error} */
          S
        );
        if (m && /Unknown language/.test(x.message)) {
          u.message(
            "Cannot highlight as `" + m + "`, it’s not registered",
            {
              ancestors: [g, p],
              cause: x,
              place: p.position,
              ruleId: "missing-language",
              source: "rehype-highlight"
            }
          );
          return;
        }
        throw x;
      }
      !m && h.data && h.data.language && p.properties.className.push("language-" + h.data.language), h.children.length > 0 && (p.children = /** @type {Array<ElementContent>} */
      h.children);
    });
  };
}
function Jp(e) {
  const t = e.properties.className;
  let n = -1;
  if (!Array.isArray(t))
    return;
  let r;
  for (; ++n < t.length; ) {
    const i = String(t[n]);
    if (i === "no-highlight" || i === "nohighlight")
      return !1;
    !r && i.slice(0, 5) === "lang-" && (r = i.slice(5)), !r && i.slice(0, 9) === "language-" && (r = i.slice(9));
  }
  return r;
}
function jp(e, t) {
  return document.createElement(e, t);
}
function eg(e, t, n) {
  return document.createElementNS(e, t, n);
}
function tg() {
  return ft(document.createDocumentFragment());
}
function ng(e) {
  return document.createTextNode(e);
}
function rg(e) {
  return document.createComment(e);
}
function ig(e, t, n) {
  if (je(e)) {
    let r = e;
    for (; r && je(r); )
      r = ft(r).parent;
    e = r ?? e;
  }
  je(t) && (t = ft(t, e)), n && je(n) && (n = ft(n).firstChildNode), e.insertBefore(t, n);
}
function ag(e, t) {
  e.removeChild(t);
}
function og(e, t) {
  je(t) && (t = ft(t, e)), e.appendChild(t);
}
function ja(e) {
  if (je(e)) {
    for (; e && je(e); )
      e = ft(e).parent;
    return e ?? null;
  }
  return e.parentNode;
}
function sg(e) {
  var t;
  if (je(e)) {
    const n = ft(e), r = ja(n);
    if (r && n.lastChildNode) {
      const i = Array.from(r.childNodes), o = i.indexOf(n.lastChildNode);
      return (t = i[o + 1]) !== null && t !== void 0 ? t : null;
    }
    return null;
  }
  return e.nextSibling;
}
function lg(e) {
  return e.tagName;
}
function cg(e, t) {
  e.textContent = t;
}
function ug(e) {
  return e.textContent;
}
function dg(e) {
  return e.nodeType === 1;
}
function fg(e) {
  return e.nodeType === 3;
}
function pg(e) {
  return e.nodeType === 8;
}
function je(e) {
  return e.nodeType === 11;
}
function ft(e, t) {
  var n, r, i;
  const o = e;
  return (n = o.parent) !== null && n !== void 0 || (o.parent = t ?? null), (r = o.firstChildNode) !== null && r !== void 0 || (o.firstChildNode = e.firstChild), (i = o.lastChildNode) !== null && i !== void 0 || (o.lastChildNode = e.lastChild), o;
}
const gg = {
  createElement: jp,
  createElementNS: eg,
  createTextNode: ng,
  createDocumentFragment: tg,
  createComment: rg,
  insertBefore: ig,
  removeChild: ag,
  appendChild: og,
  parentNode: ja,
  nextSibling: sg,
  tagName: lg,
  setTextContent: cg,
  getTextContent: ug,
  isElement: dg,
  isText: fg,
  isComment: pg,
  isDocumentFragment: je
};
function Pt(e, t, n, r, i) {
  const o = t === void 0 ? void 0 : t.key;
  return { sel: e, data: t, children: n, text: r, elm: i, key: o };
}
const hn = Array.isArray;
function ln(e) {
  return typeof e == "string" || typeof e == "number" || e instanceof String || e instanceof Number;
}
function on(e) {
  return e === void 0;
}
function Ae(e) {
  return e !== void 0;
}
const Yn = Pt("", {}, [], void 0, void 0);
function Rt(e, t) {
  var n, r;
  const i = e.key === t.key, o = ((n = e.data) === null || n === void 0 ? void 0 : n.is) === ((r = t.data) === null || r === void 0 ? void 0 : r.is), a = e.sel === t.sel, s = !e.sel && e.sel === t.sel ? typeof e.text == typeof t.text : !0;
  return a && i && o && s;
}
function hg() {
  throw new Error("The document fragment is not supported on this platform.");
}
function mg(e, t) {
  return e.isElement(t);
}
function bg(e, t) {
  return e.isDocumentFragment(t);
}
function _g(e, t, n) {
  var r;
  const i = {};
  for (let o = t; o <= n; ++o) {
    const a = (r = e[o]) === null || r === void 0 ? void 0 : r.key;
    a !== void 0 && (i[a] = o);
  }
  return i;
}
const Eg = [
  "create",
  "update",
  "remove",
  "destroy",
  "pre",
  "post"
];
function yg(e, t, n) {
  const r = {
    create: [],
    update: [],
    remove: [],
    destroy: [],
    pre: [],
    post: []
  }, i = gg;
  for (const g of Eg)
    for (const m of e) {
      const y = m[g];
      y !== void 0 && r[g].push(y);
    }
  function o(g) {
    const m = g.id ? "#" + g.id : "", y = g.getAttribute("class"), h = y ? "." + y.split(" ").join(".") : "";
    return Pt(i.tagName(g).toLowerCase() + m + h, {}, [], void 0, g);
  }
  function a(g) {
    return Pt(void 0, {}, [], void 0, g);
  }
  function s(g, m) {
    return function() {
      if (--m === 0) {
        const h = i.parentNode(g);
        h !== null && i.removeChild(h, g);
      }
    };
  }
  function l(g, m) {
    var y, h, S, x;
    let N, I = g.data;
    if (I !== void 0) {
      const O = (y = I.hook) === null || y === void 0 ? void 0 : y.init;
      Ae(O) && (O(g), I = g.data);
    }
    const k = g.children, A = g.sel;
    if (A === "!")
      on(g.text) && (g.text = ""), g.elm = i.createComment(g.text);
    else if (A === "")
      g.elm = i.createTextNode(g.text);
    else if (A !== void 0) {
      const O = A.indexOf("#"), L = A.indexOf(".", O), w = O > 0 ? O : A.length, v = L > 0 ? L : A.length, D = O !== -1 || L !== -1 ? A.slice(0, Math.min(w, v)) : A, K = g.elm = Ae(I) && Ae(N = I.ns) ? i.createElementNS(N, D, I) : i.createElement(D, I);
      for (w < v && K.setAttribute("id", A.slice(w + 1, v)), L > 0 && K.setAttribute("class", A.slice(v + 1).replace(/\./g, " ")), N = 0; N < r.create.length; ++N)
        r.create[N](Yn, g);
      if (ln(g.text) && (!hn(k) || k.length === 0) && i.appendChild(K, i.createTextNode(g.text)), hn(k))
        for (N = 0; N < k.length; ++N) {
          const $ = k[N];
          $ != null && i.appendChild(K, l($, m));
        }
      const q = g.data.hook;
      Ae(q) && ((h = q.create) === null || h === void 0 || h.call(q, Yn, g), q.insert && m.push(g));
    } else if (!((S = void 0) === null || S === void 0) && S.fragments && g.children) {
      for (g.elm = ((x = i.createDocumentFragment) !== null && x !== void 0 ? x : hg)(), N = 0; N < r.create.length; ++N)
        r.create[N](Yn, g);
      for (N = 0; N < g.children.length; ++N) {
        const O = g.children[N];
        O != null && i.appendChild(g.elm, l(O, m));
      }
    } else
      g.elm = i.createTextNode(g.text);
    return g.elm;
  }
  function c(g, m, y, h, S, x) {
    for (; h <= S; ++h) {
      const N = y[h];
      N != null && i.insertBefore(g, l(N, x), m);
    }
  }
  function d(g) {
    var m, y;
    const h = g.data;
    if (h !== void 0) {
      (y = (m = h == null ? void 0 : h.hook) === null || m === void 0 ? void 0 : m.destroy) === null || y === void 0 || y.call(m, g);
      for (let S = 0; S < r.destroy.length; ++S)
        r.destroy[S](g);
      if (g.children !== void 0)
        for (let S = 0; S < g.children.length; ++S) {
          const x = g.children[S];
          x != null && typeof x != "string" && d(x);
        }
    }
  }
  function u(g, m, y, h) {
    for (var S, x; y <= h; ++y) {
      let N, I;
      const k = m[y];
      if (k != null)
        if (Ae(k.sel)) {
          d(k), N = r.remove.length + 1, I = s(k.elm, N);
          for (let O = 0; O < r.remove.length; ++O)
            r.remove[O](k, I);
          const A = (x = (S = k == null ? void 0 : k.data) === null || S === void 0 ? void 0 : S.hook) === null || x === void 0 ? void 0 : x.remove;
          Ae(A) ? A(k, I) : I();
        } else k.children ? (d(k), u(g, k.children, 0, k.children.length - 1)) : i.removeChild(g, k.elm);
    }
  }
  function p(g, m, y, h) {
    let S = 0, x = 0, N = m.length - 1, I = m[0], k = m[N], A = y.length - 1, O = y[0], L = y[A], w, v, D, K;
    for (; S <= N && x <= A; )
      I == null ? I = m[++S] : k == null ? k = m[--N] : O == null ? O = y[++x] : L == null ? L = y[--A] : Rt(I, O) ? (f(I, O, h), I = m[++S], O = y[++x]) : Rt(k, L) ? (f(k, L, h), k = m[--N], L = y[--A]) : Rt(I, L) ? (f(I, L, h), i.insertBefore(g, I.elm, i.nextSibling(k.elm)), I = m[++S], L = y[--A]) : Rt(k, O) ? (f(k, O, h), i.insertBefore(g, k.elm, I.elm), k = m[--N], O = y[++x]) : (w === void 0 && (w = _g(m, S, N)), v = w[O.key], on(v) ? (i.insertBefore(g, l(O, h), I.elm), O = y[++x]) : on(w[L.key]) ? (i.insertBefore(g, l(L, h), i.nextSibling(k.elm)), L = y[--A]) : (D = m[v], D.sel !== O.sel ? i.insertBefore(g, l(O, h), I.elm) : (f(D, O, h), m[v] = void 0, i.insertBefore(g, D.elm, I.elm)), O = y[++x]));
    x <= A && (K = y[A + 1] == null ? null : y[A + 1].elm, c(g, K, y, x, A, h)), S <= N && u(g, m, S, N);
  }
  function f(g, m, y) {
    var h, S, x, N, I, k, A, O;
    const L = (h = m.data) === null || h === void 0 ? void 0 : h.hook;
    (S = L == null ? void 0 : L.prepatch) === null || S === void 0 || S.call(L, g, m);
    const w = m.elm = g.elm;
    if (g === m)
      return;
    if (m.data !== void 0 || Ae(m.text) && m.text !== g.text) {
      (x = m.data) !== null && x !== void 0 || (m.data = {}), (N = g.data) !== null && N !== void 0 || (g.data = {});
      for (let K = 0; K < r.update.length; ++K)
        r.update[K](g, m);
      (A = (k = (I = m.data) === null || I === void 0 ? void 0 : I.hook) === null || k === void 0 ? void 0 : k.update) === null || A === void 0 || A.call(k, g, m);
    }
    const v = g.children, D = m.children;
    on(m.text) ? Ae(v) && Ae(D) ? v !== D && p(w, v, D, y) : Ae(D) ? (Ae(g.text) && i.setTextContent(w, ""), c(w, null, D, 0, D.length - 1, y)) : Ae(v) ? u(w, v, 0, v.length - 1) : Ae(g.text) && i.setTextContent(w, "") : g.text !== m.text && (Ae(v) && u(w, v, 0, v.length - 1), i.setTextContent(w, m.text)), (O = L == null ? void 0 : L.postpatch) === null || O === void 0 || O.call(L, g, m);
  }
  return function(m, y) {
    let h, S, x;
    const N = [];
    for (h = 0; h < r.pre.length; ++h)
      r.pre[h]();
    for (mg(i, m) ? m = o(m) : bg(i, m) && (m = a(m)), Rt(m, y) ? f(m, y, N) : (S = m.elm, x = i.parentNode(S), l(y, N), x !== null && (i.insertBefore(x, y.elm, i.nextSibling(S)), u(x, [m], 0, 0))), h = 0; h < N.length; ++h)
      N[h].data.hook.insert(N[h]);
    for (h = 0; h < r.post.length; ++h)
      r.post[h]();
    return y;
  };
}
function eo(e, t, n) {
  if (e.ns = "http://www.w3.org/2000/svg", n !== "foreignObject" && t !== void 0)
    for (let r = 0; r < t.length; ++r) {
      const i = t[r];
      if (typeof i == "string")
        continue;
      const o = i.data;
      o !== void 0 && eo(o, i.children, i.sel);
    }
}
function Vn(e, t, n) {
  let r = {}, i, o, a;
  if (n !== void 0 ? (t !== null && (r = t), hn(n) ? i = n : ln(n) ? o = n.toString() : n && n.sel && (i = [n])) : t != null && (hn(t) ? i = t : ln(t) ? o = t.toString() : t && t.sel ? i = [t] : r = t), i !== void 0)
    for (a = 0; a < i.length; ++a)
      ln(i[a]) && (i[a] = Pt(void 0, void 0, void 0, i[a], void 0));
  return e.startsWith("svg") && (e.length === 3 || e[3] === "." || e[3] === "#") && eo(r, i, e), Pt(e, r, i, o, void 0);
}
const kg = "http://www.w3.org/1999/xlink", xg = "http://www.w3.org/2000/xmlns/", wg = "http://www.w3.org/XML/1998/namespace", Ri = 58, Sg = 120, Ng = 109;
function Mi(e, t) {
  let n;
  const r = t.elm;
  let i = e.data.attrs, o = t.data.attrs;
  if (!(!i && !o) && i !== o) {
    i = i || {}, o = o || {};
    for (n in o) {
      const a = o[n];
      i[n] !== a && (a === !0 ? r.setAttribute(n, "") : a === !1 ? r.removeAttribute(n) : n.charCodeAt(0) !== Sg ? r.setAttribute(n, a) : n.charCodeAt(3) === Ri ? r.setAttributeNS(wg, n, a) : n.charCodeAt(5) === Ri ? n.charCodeAt(1) === Ng ? r.setAttributeNS(xg, n, a) : r.setAttributeNS(kg, n, a) : r.setAttribute(n, a));
    }
    for (n in i)
      n in o || r.removeAttribute(n);
  }
}
const Tg = {
  create: Mi,
  update: Mi
};
function Di(e, t) {
  let n, r;
  const i = t.elm;
  let o = e.data.class, a = t.data.class;
  if (!(!o && !a) && o !== a) {
    o = o || {}, a = a || {};
    for (r in o)
      o[r] && !Object.prototype.hasOwnProperty.call(a, r) && i.classList.remove(r);
    for (r in a)
      n = a[r], n !== o[r] && i.classList[n ? "add" : "remove"](r);
  }
}
const Ag = { create: Di, update: Di };
function to(e, t, n) {
  if (typeof e == "function")
    e.call(t, n, t);
  else if (typeof e == "object")
    for (let r = 0; r < e.length; r++)
      to(e[r], t, n);
}
function Cg(e, t) {
  const n = e.type, r = t.data.on;
  r && r[n] && to(r[n], t, e);
}
function Ig() {
  return function e(t) {
    Cg(t, e.vnode);
  };
}
function Zn(e, t) {
  const n = e.data.on, r = e.listener, i = e.elm, o = t && t.data.on, a = t && t.elm;
  let s;
  if (n !== o) {
    if (n && r)
      if (o)
        for (s in n)
          o[s] || i.removeEventListener(s, r, !1);
      else
        for (s in n)
          i.removeEventListener(s, r, !1);
    if (o) {
      const l = t.listener = e.listener || Ig();
      if (l.vnode = t, n)
        for (s in o)
          n[s] || a.addEventListener(s, l, !1);
      else
        for (s in o)
          a.addEventListener(s, l, !1);
    }
  }
}
const Og = {
  create: Zn,
  update: Zn,
  destroy: Zn
};
function Li(e, t) {
  let n, r, i;
  const o = t.elm;
  let a = e.data.props, s = t.data.props;
  if (!(!a && !s) && a !== s) {
    a = a || {}, s = s || {};
    for (n in s)
      r = s[n], i = a[n], i !== r && (n !== "value" || o[n] !== r) && (o[n] = r);
  }
}
const vg = { create: Li, update: Li }, Bi = typeof (window == null ? void 0 : window.requestAnimationFrame) == "function" ? window.requestAnimationFrame.bind(window) : setTimeout, Rg = function(e) {
  Bi(function() {
    Bi(e);
  });
};
let sr = !1;
function Mg(e, t, n) {
  Rg(function() {
    e[t] = n;
  });
}
function Pi(e, t) {
  let n, r;
  const i = t.elm;
  let o = e.data.style, a = t.data.style;
  if (!o && !a || o === a)
    return;
  o = o || {}, a = a || {};
  const s = "delayed" in o;
  for (r in o)
    r in a || (r[0] === "-" && r[1] === "-" ? i.style.removeProperty(r) : i.style[r] = "");
  for (r in a)
    if (n = a[r], r === "delayed" && a.delayed)
      for (const l in a.delayed)
        n = a.delayed[l], (!s || n !== o.delayed[l]) && Mg(i.style, l, n);
    else r !== "remove" && n !== o[r] && (r[0] === "-" && r[1] === "-" ? i.style.setProperty(r, n) : i.style[r] = n);
}
function Dg(e) {
  let t, n;
  const r = e.elm, i = e.data.style;
  if (!(!i || !(t = i.destroy)))
    for (n in t)
      r.style[n] = t[n];
}
function Lg(e, t) {
  const n = e.data.style;
  if (!n || !n.remove) {
    t();
    return;
  }
  sr || (e.elm.offsetLeft, sr = !0);
  let r;
  const i = e.elm;
  let o = 0;
  const a = n.remove;
  let s = 0;
  const l = [];
  for (r in a)
    l.push(r), i.style[r] = a[r];
  const d = getComputedStyle(i)["transition-property"].split(", ");
  for (; o < d.length; ++o)
    l.indexOf(d[o]) !== -1 && s++;
  i.addEventListener("transitionend", function(u) {
    u.target === i && --s, s === 0 && t();
  });
}
function Bg() {
  sr = !1;
}
const Pg = {
  pre: Bg,
  create: Pi,
  update: Pi,
  destroy: Dg,
  remove: Lg
};
class zg {
  constructor(t, n) {
    Cn(this, "patch");
    Cn(this, "oldVnode");
    if (this.container = t, this.opt = n, !(t instanceof HTMLElement))
      throw new Error("Invalid argument: an HTML element is required for rendering.");
    t.replaceChildren(), this.patch = yg([
      Ag,
      Pg,
      vg,
      Tg,
      Og
    ]);
    const r = document.createElement("div");
    t.append(r), this.oldVnode = Vn("div", this.props), this.patch(r, this.oldVnode), this.highlight();
  }
  render(t) {
    if (!t || typeof t != "string")
      throw new Error("Invalid argument: parameter is not a valid markdown text.");
    const n = this.mast(t);
    this.hast(n).then((r) => {
      const i = this.vnode(r, !0);
      this.html(i), this.oldVnode = i;
    });
  }
  mast(t) {
    return Ur().use(ei).parse(t);
  }
  hast(t) {
    return Ur().use(ei).use(cf).use(Vd).use(Uc).use(Qp, { detect: !0 }).run(t);
  }
  vnode(t, n = !1) {
    if (t.type === "text") return t.value;
    const r = t.tagName || "div", i = {};
    if (t.properties)
      for (const [a, s] of Object.entries(t.properties))
        i[a] = Array.isArray(s) ? s.join(" ") : s;
    const o = (t.children || []).map(this.vnode.bind(this));
    return n === !0 ? Vn(r, { props: i, ...this.props }, o) : Vn(r, { props: i }, o);
  }
  highlight() {
    var t;
    try {
      ((t = this.opt) == null ? void 0 : t.codeTheme) === "dark" ? Promise.resolve({                }) : Promise.resolve({           });
    } catch (n) {
      console.warn(n);
    }
  }
  html(t) {
    this.patch(this.oldVnode, t);
  }
  get dom() {
    return this.container.firstChild;
  }
  get props() {
    const { opt: t } = this, n = t != null && t.className ? t.className.split(" ") : [], r = {}, i = (t == null ? void 0 : t.attrs) || {};
    for (const o of n)
      Object.assign(r, { [o]: !0 });
    return { class: r, attrs: i, style: t == null ? void 0 : t.style, on: t == null ? void 0 : t.on };
  }
}
export {
  zg as default
};
