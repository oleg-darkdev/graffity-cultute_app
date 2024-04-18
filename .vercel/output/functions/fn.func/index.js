globalThis.global = globalThis;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key2, value) => key2 in obj ? __defProp(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key2 of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key2) && key2 !== except)
        __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __publicField = (obj, key2, value) => {
  __defNormalProp(obj, typeof key2 !== "symbol" ? key2 + "" : key2, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};

// .svelte-kit/output/server/chunks/index.js
function noop() {
}
function run(fn) {
  return fn();
}
function blank_object() {
  return /* @__PURE__ */ Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
function subscribe(store, ...callbacks) {
  if (store == null) {
    return noop;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function set_current_component(component4) {
  current_component = component4;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function setContext(key2, context) {
  get_current_component().$$.context.set(key2, context);
  return context;
}
function getContext(key2) {
  return get_current_component().$$.context.get(key2);
}
function escape(value, is_attr = false) {
  const str = String(value);
  const pattern2 = is_attr ? ATTR_REGEX : CONTENT_REGEX;
  pattern2.lastIndex = 0;
  let escaped2 = "";
  let last = 0;
  while (pattern2.test(str)) {
    const i = pattern2.lastIndex - 1;
    const ch = str[i];
    escaped2 += str.substring(last, i) + (ch === "&" ? "&amp;" : ch === '"' ? "&quot;" : "&lt;");
    last = i + 1;
  }
  return escaped2 + str.substring(last);
}
function each(items, fn) {
  let str = "";
  for (let i = 0; i < items.length; i += 1) {
    str += fn(items[i], i);
  }
  return str;
}
function validate_component(component4, name) {
  if (!component4 || !component4.$$render) {
    if (name === "svelte:component")
      name += " this={...}";
    throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules. Otherwise you may need to fix a <${name}>.`);
  }
  return component4;
}
function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots, context) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(context || (parent_component ? parent_component.$$.context : [])),
      // these will be immediately discarded
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({ $$ });
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }
  return {
    render: (props = {}, { $$slots = {}, context = /* @__PURE__ */ new Map() } = {}) => {
      on_destroy = [];
      const result = { title: "", head: "", css: /* @__PURE__ */ new Set() };
      const html = $$render(result, props, {}, $$slots, context);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map((css3) => css3.code).join("\n"),
          map: null
          // TODO
        },
        head: result.title + result.head
      };
    },
    $$render
  };
}
function add_attribute(name, value, boolean) {
  if (value == null || boolean && !value)
    return "";
  const assignment = boolean && value === true ? "" : `="${escape(value, true)}"`;
  return ` ${name}${assignment}`;
}
var current_component, ATTR_REGEX, CONTENT_REGEX, missing_component, on_destroy;
var init_chunks = __esm({
  ".svelte-kit/output/server/chunks/index.js"() {
    ATTR_REGEX = /[&"]/g;
    CONTENT_REGEX = /[&<]/g;
    missing_component = {
      $$render: () => ""
    };
  }
});

// node_modules/cookie/index.js
var require_cookie = __commonJS({
  "node_modules/cookie/index.js"(exports) {
    "use strict";
    exports.parse = parse3;
    exports.serialize = serialize2;
    var __toString = Object.prototype.toString;
    var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    function parse3(str, options2) {
      if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
      }
      var obj = {};
      var opt = options2 || {};
      var dec = opt.decode || decode;
      var index4 = 0;
      while (index4 < str.length) {
        var eqIdx = str.indexOf("=", index4);
        if (eqIdx === -1) {
          break;
        }
        var endIdx = str.indexOf(";", index4);
        if (endIdx === -1) {
          endIdx = str.length;
        } else if (endIdx < eqIdx) {
          index4 = str.lastIndexOf(";", eqIdx - 1) + 1;
          continue;
        }
        var key2 = str.slice(index4, eqIdx).trim();
        if (void 0 === obj[key2]) {
          var val = str.slice(eqIdx + 1, endIdx).trim();
          if (val.charCodeAt(0) === 34) {
            val = val.slice(1, -1);
          }
          obj[key2] = tryDecode(val, dec);
        }
        index4 = endIdx + 1;
      }
      return obj;
    }
    function serialize2(name, val, options2) {
      var opt = options2 || {};
      var enc = opt.encode || encode2;
      if (typeof enc !== "function") {
        throw new TypeError("option encode is invalid");
      }
      if (!fieldContentRegExp.test(name)) {
        throw new TypeError("argument name is invalid");
      }
      var value = enc(val);
      if (value && !fieldContentRegExp.test(value)) {
        throw new TypeError("argument val is invalid");
      }
      var str = name + "=" + value;
      if (null != opt.maxAge) {
        var maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge)) {
          throw new TypeError("option maxAge is invalid");
        }
        str += "; Max-Age=" + Math.floor(maxAge);
      }
      if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain)) {
          throw new TypeError("option domain is invalid");
        }
        str += "; Domain=" + opt.domain;
      }
      if (opt.path) {
        if (!fieldContentRegExp.test(opt.path)) {
          throw new TypeError("option path is invalid");
        }
        str += "; Path=" + opt.path;
      }
      if (opt.expires) {
        var expires = opt.expires;
        if (!isDate(expires) || isNaN(expires.valueOf())) {
          throw new TypeError("option expires is invalid");
        }
        str += "; Expires=" + expires.toUTCString();
      }
      if (opt.httpOnly) {
        str += "; HttpOnly";
      }
      if (opt.secure) {
        str += "; Secure";
      }
      if (opt.priority) {
        var priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
        switch (priority) {
          case "low":
            str += "; Priority=Low";
            break;
          case "medium":
            str += "; Priority=Medium";
            break;
          case "high":
            str += "; Priority=High";
            break;
          default:
            throw new TypeError("option priority is invalid");
        }
      }
      if (opt.sameSite) {
        var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
          case true:
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return str;
    }
    function decode(str) {
      return str.indexOf("%") !== -1 ? decodeURIComponent(str) : str;
    }
    function encode2(val) {
      return encodeURIComponent(val);
    }
    function isDate(val) {
      return __toString.call(val) === "[object Date]" || val instanceof Date;
    }
    function tryDecode(str, decode2) {
      try {
        return decode2(str);
      } catch (e) {
        return str;
      }
    }
  }
});

// node_modules/set-cookie-parser/lib/set-cookie.js
var require_set_cookie = __commonJS({
  "node_modules/set-cookie-parser/lib/set-cookie.js"(exports, module) {
    "use strict";
    var defaultParseOptions = {
      decodeValues: true,
      map: false,
      silent: false
    };
    function isNonEmptyString(str) {
      return typeof str === "string" && !!str.trim();
    }
    function parseString2(setCookieValue, options2) {
      var parts = setCookieValue.split(";").filter(isNonEmptyString);
      var nameValuePairStr = parts.shift();
      var parsed = parseNameValuePair(nameValuePairStr);
      var name = parsed.name;
      var value = parsed.value;
      options2 = options2 ? Object.assign({}, defaultParseOptions, options2) : defaultParseOptions;
      try {
        value = options2.decodeValues ? decodeURIComponent(value) : value;
      } catch (e) {
        console.error(
          "set-cookie-parser encountered an error while decoding a cookie with value '" + value + "'. Set options.decodeValues to false to disable this feature.",
          e
        );
      }
      var cookie = {
        name,
        value
      };
      parts.forEach(function(part) {
        var sides = part.split("=");
        var key2 = sides.shift().trimLeft().toLowerCase();
        var value2 = sides.join("=");
        if (key2 === "expires") {
          cookie.expires = new Date(value2);
        } else if (key2 === "max-age") {
          cookie.maxAge = parseInt(value2, 10);
        } else if (key2 === "secure") {
          cookie.secure = true;
        } else if (key2 === "httponly") {
          cookie.httpOnly = true;
        } else if (key2 === "samesite") {
          cookie.sameSite = value2;
        } else {
          cookie[key2] = value2;
        }
      });
      return cookie;
    }
    function parseNameValuePair(nameValuePairStr) {
      var name = "";
      var value = "";
      var nameValueArr = nameValuePairStr.split("=");
      if (nameValueArr.length > 1) {
        name = nameValueArr.shift();
        value = nameValueArr.join("=");
      } else {
        value = nameValuePairStr;
      }
      return { name, value };
    }
    function parse3(input, options2) {
      options2 = options2 ? Object.assign({}, defaultParseOptions, options2) : defaultParseOptions;
      if (!input) {
        if (!options2.map) {
          return [];
        } else {
          return {};
        }
      }
      if (input.headers) {
        if (typeof input.headers.getSetCookie === "function") {
          input = input.headers.getSetCookie();
        } else if (input.headers["set-cookie"]) {
          input = input.headers["set-cookie"];
        } else {
          var sch = input.headers[Object.keys(input.headers).find(function(key2) {
            return key2.toLowerCase() === "set-cookie";
          })];
          if (!sch && input.headers.cookie && !options2.silent) {
            console.warn(
              "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
            );
          }
          input = sch;
        }
      }
      if (!Array.isArray(input)) {
        input = [input];
      }
      options2 = options2 ? Object.assign({}, defaultParseOptions, options2) : defaultParseOptions;
      if (!options2.map) {
        return input.filter(isNonEmptyString).map(function(str) {
          return parseString2(str, options2);
        });
      } else {
        var cookies = {};
        return input.filter(isNonEmptyString).reduce(function(cookies2, str) {
          var cookie = parseString2(str, options2);
          cookies2[cookie.name] = cookie;
          return cookies2;
        }, cookies);
      }
    }
    function splitCookiesString2(cookiesString) {
      if (Array.isArray(cookiesString)) {
        return cookiesString;
      }
      if (typeof cookiesString !== "string") {
        return [];
      }
      var cookiesStrings = [];
      var pos = 0;
      var start;
      var ch;
      var lastComma;
      var nextStart;
      var cookiesSeparatorFound;
      function skipWhitespace() {
        while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
          pos += 1;
        }
        return pos < cookiesString.length;
      }
      function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
      }
      while (pos < cookiesString.length) {
        start = pos;
        cookiesSeparatorFound = false;
        while (skipWhitespace()) {
          ch = cookiesString.charAt(pos);
          if (ch === ",") {
            lastComma = pos;
            pos += 1;
            skipWhitespace();
            nextStart = pos;
            while (pos < cookiesString.length && notSpecialChar()) {
              pos += 1;
            }
            if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
              cookiesSeparatorFound = true;
              pos = nextStart;
              cookiesStrings.push(cookiesString.substring(start, lastComma));
              start = pos;
            } else {
              pos = lastComma + 1;
            }
          } else {
            pos += 1;
          }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
          cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
      }
      return cookiesStrings;
    }
    module.exports = parse3;
    module.exports.parse = parse3;
    module.exports.parseString = parseString2;
    module.exports.splitCookiesString = splitCookiesString2;
  }
});

// node_modules/aos/dist/aos.js
var require_aos = __commonJS({
  "node_modules/aos/dist/aos.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.AOS = t() : e.AOS = t();
    }(exports, function() {
      return function(e) {
        function t(o) {
          if (n[o])
            return n[o].exports;
          var i = n[o] = { exports: {}, id: o, loaded: false };
          return e[o].call(i.exports, i, i.exports, t), i.loaded = true, i.exports;
        }
        var n = {};
        return t.m = e, t.c = n, t.p = "dist/", t(0);
      }([function(e, t, n) {
        "use strict";
        function o(e2) {
          return e2 && e2.__esModule ? e2 : { default: e2 };
        }
        var i = Object.assign || function(e2) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var n2 = arguments[t2];
            for (var o2 in n2)
              Object.prototype.hasOwnProperty.call(n2, o2) && (e2[o2] = n2[o2]);
          }
          return e2;
        }, r = n(1), a = (o(r), n(6)), u = o(a), c = n(7), s2 = o(c), f = n(8), d = o(f), l = n(9), p = o(l), m = n(10), b = o(m), v = n(11), y = o(v), g = n(14), h = o(g), w = [], k = false, x = { offset: 120, delay: 0, easing: "ease", duration: 400, disable: false, once: false, startEvent: "DOMContentLoaded", throttleDelay: 99, debounceDelay: 50, disableMutationObserver: false }, j = function() {
          var e2 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (e2 && (k = true), k)
            return w = (0, y.default)(w, x), (0, b.default)(w, x.once), w;
        }, O = function() {
          w = (0, h.default)(), j();
        }, M = function() {
          w.forEach(function(e2, t2) {
            e2.node.removeAttribute("data-aos"), e2.node.removeAttribute("data-aos-easing"), e2.node.removeAttribute("data-aos-duration"), e2.node.removeAttribute("data-aos-delay");
          });
        }, S = function(e2) {
          return e2 === true || "mobile" === e2 && p.default.mobile() || "phone" === e2 && p.default.phone() || "tablet" === e2 && p.default.tablet() || "function" == typeof e2 && e2() === true;
        }, _ = function(e2) {
          x = i(x, e2), w = (0, h.default)();
          var t2 = document.all && !window.atob;
          return S(x.disable) || t2 ? M() : (x.disableMutationObserver || d.default.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), x.disableMutationObserver = true), document.querySelector("body").setAttribute("data-aos-easing", x.easing), document.querySelector("body").setAttribute("data-aos-duration", x.duration), document.querySelector("body").setAttribute("data-aos-delay", x.delay), "DOMContentLoaded" === x.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? j(true) : "load" === x.startEvent ? window.addEventListener(x.startEvent, function() {
            j(true);
          }) : document.addEventListener(x.startEvent, function() {
            j(true);
          }), window.addEventListener("resize", (0, s2.default)(j, x.debounceDelay, true)), window.addEventListener("orientationchange", (0, s2.default)(j, x.debounceDelay, true)), window.addEventListener("scroll", (0, u.default)(function() {
            (0, b.default)(w, x.once);
          }, x.throttleDelay)), x.disableMutationObserver || d.default.ready("[data-aos]", O), w);
        };
        e.exports = { init: _, refresh: j, refreshHard: O };
      }, function(e, t) {
      }, , , , , function(e, t) {
        (function(t2) {
          "use strict";
          function n(e2, t3, n2) {
            function o2(t4) {
              var n3 = b2, o3 = v2;
              return b2 = v2 = void 0, k2 = t4, g2 = e2.apply(o3, n3);
            }
            function r2(e3) {
              return k2 = e3, h2 = setTimeout(f2, t3), M ? o2(e3) : g2;
            }
            function a2(e3) {
              var n3 = e3 - w2, o3 = e3 - k2, i2 = t3 - n3;
              return S ? j(i2, y2 - o3) : i2;
            }
            function c2(e3) {
              var n3 = e3 - w2, o3 = e3 - k2;
              return void 0 === w2 || n3 >= t3 || n3 < 0 || S && o3 >= y2;
            }
            function f2() {
              var e3 = O();
              return c2(e3) ? d2(e3) : void (h2 = setTimeout(f2, a2(e3)));
            }
            function d2(e3) {
              return h2 = void 0, _ && b2 ? o2(e3) : (b2 = v2 = void 0, g2);
            }
            function l2() {
              void 0 !== h2 && clearTimeout(h2), k2 = 0, b2 = w2 = v2 = h2 = void 0;
            }
            function p2() {
              return void 0 === h2 ? g2 : d2(O());
            }
            function m2() {
              var e3 = O(), n3 = c2(e3);
              if (b2 = arguments, v2 = this, w2 = e3, n3) {
                if (void 0 === h2)
                  return r2(w2);
                if (S)
                  return h2 = setTimeout(f2, t3), o2(w2);
              }
              return void 0 === h2 && (h2 = setTimeout(f2, t3)), g2;
            }
            var b2, v2, y2, g2, h2, w2, k2 = 0, M = false, S = false, _ = true;
            if ("function" != typeof e2)
              throw new TypeError(s2);
            return t3 = u(t3) || 0, i(n2) && (M = !!n2.leading, S = "maxWait" in n2, y2 = S ? x(u(n2.maxWait) || 0, t3) : y2, _ = "trailing" in n2 ? !!n2.trailing : _), m2.cancel = l2, m2.flush = p2, m2;
          }
          function o(e2, t3, o2) {
            var r2 = true, a2 = true;
            if ("function" != typeof e2)
              throw new TypeError(s2);
            return i(o2) && (r2 = "leading" in o2 ? !!o2.leading : r2, a2 = "trailing" in o2 ? !!o2.trailing : a2), n(e2, t3, { leading: r2, maxWait: t3, trailing: a2 });
          }
          function i(e2) {
            var t3 = "undefined" == typeof e2 ? "undefined" : c(e2);
            return !!e2 && ("object" == t3 || "function" == t3);
          }
          function r(e2) {
            return !!e2 && "object" == ("undefined" == typeof e2 ? "undefined" : c(e2));
          }
          function a(e2) {
            return "symbol" == ("undefined" == typeof e2 ? "undefined" : c(e2)) || r(e2) && k.call(e2) == d;
          }
          function u(e2) {
            if ("number" == typeof e2)
              return e2;
            if (a(e2))
              return f;
            if (i(e2)) {
              var t3 = "function" == typeof e2.valueOf ? e2.valueOf() : e2;
              e2 = i(t3) ? t3 + "" : t3;
            }
            if ("string" != typeof e2)
              return 0 === e2 ? e2 : +e2;
            e2 = e2.replace(l, "");
            var n2 = m.test(e2);
            return n2 || b.test(e2) ? v(e2.slice(2), n2 ? 2 : 8) : p.test(e2) ? f : +e2;
          }
          var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e2) {
            return typeof e2;
          } : function(e2) {
            return e2 && "function" == typeof Symbol && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
          }, s2 = "Expected a function", f = NaN, d = "[object Symbol]", l = /^\s+|\s+$/g, p = /^[-+]0x[0-9a-f]+$/i, m = /^0b[01]+$/i, b = /^0o[0-7]+$/i, v = parseInt, y = "object" == ("undefined" == typeof t2 ? "undefined" : c(t2)) && t2 && t2.Object === Object && t2, g = "object" == ("undefined" == typeof self ? "undefined" : c(self)) && self && self.Object === Object && self, h = y || g || Function("return this")(), w = Object.prototype, k = w.toString, x = Math.max, j = Math.min, O = function() {
            return h.Date.now();
          };
          e.exports = o;
        }).call(t, function() {
          return this;
        }());
      }, function(e, t) {
        (function(t2) {
          "use strict";
          function n(e2, t3, n2) {
            function i2(t4) {
              var n3 = b2, o2 = v2;
              return b2 = v2 = void 0, O = t4, g2 = e2.apply(o2, n3);
            }
            function r2(e3) {
              return O = e3, h2 = setTimeout(f2, t3), M ? i2(e3) : g2;
            }
            function u2(e3) {
              var n3 = e3 - w2, o2 = e3 - O, i3 = t3 - n3;
              return S ? x(i3, y2 - o2) : i3;
            }
            function s3(e3) {
              var n3 = e3 - w2, o2 = e3 - O;
              return void 0 === w2 || n3 >= t3 || n3 < 0 || S && o2 >= y2;
            }
            function f2() {
              var e3 = j();
              return s3(e3) ? d2(e3) : void (h2 = setTimeout(f2, u2(e3)));
            }
            function d2(e3) {
              return h2 = void 0, _ && b2 ? i2(e3) : (b2 = v2 = void 0, g2);
            }
            function l2() {
              void 0 !== h2 && clearTimeout(h2), O = 0, b2 = w2 = v2 = h2 = void 0;
            }
            function p2() {
              return void 0 === h2 ? g2 : d2(j());
            }
            function m2() {
              var e3 = j(), n3 = s3(e3);
              if (b2 = arguments, v2 = this, w2 = e3, n3) {
                if (void 0 === h2)
                  return r2(w2);
                if (S)
                  return h2 = setTimeout(f2, t3), i2(w2);
              }
              return void 0 === h2 && (h2 = setTimeout(f2, t3)), g2;
            }
            var b2, v2, y2, g2, h2, w2, O = 0, M = false, S = false, _ = true;
            if ("function" != typeof e2)
              throw new TypeError(c);
            return t3 = a(t3) || 0, o(n2) && (M = !!n2.leading, S = "maxWait" in n2, y2 = S ? k(a(n2.maxWait) || 0, t3) : y2, _ = "trailing" in n2 ? !!n2.trailing : _), m2.cancel = l2, m2.flush = p2, m2;
          }
          function o(e2) {
            var t3 = "undefined" == typeof e2 ? "undefined" : u(e2);
            return !!e2 && ("object" == t3 || "function" == t3);
          }
          function i(e2) {
            return !!e2 && "object" == ("undefined" == typeof e2 ? "undefined" : u(e2));
          }
          function r(e2) {
            return "symbol" == ("undefined" == typeof e2 ? "undefined" : u(e2)) || i(e2) && w.call(e2) == f;
          }
          function a(e2) {
            if ("number" == typeof e2)
              return e2;
            if (r(e2))
              return s2;
            if (o(e2)) {
              var t3 = "function" == typeof e2.valueOf ? e2.valueOf() : e2;
              e2 = o(t3) ? t3 + "" : t3;
            }
            if ("string" != typeof e2)
              return 0 === e2 ? e2 : +e2;
            e2 = e2.replace(d, "");
            var n2 = p.test(e2);
            return n2 || m.test(e2) ? b(e2.slice(2), n2 ? 2 : 8) : l.test(e2) ? s2 : +e2;
          }
          var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e2) {
            return typeof e2;
          } : function(e2) {
            return e2 && "function" == typeof Symbol && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
          }, c = "Expected a function", s2 = NaN, f = "[object Symbol]", d = /^\s+|\s+$/g, l = /^[-+]0x[0-9a-f]+$/i, p = /^0b[01]+$/i, m = /^0o[0-7]+$/i, b = parseInt, v = "object" == ("undefined" == typeof t2 ? "undefined" : u(t2)) && t2 && t2.Object === Object && t2, y = "object" == ("undefined" == typeof self ? "undefined" : u(self)) && self && self.Object === Object && self, g = v || y || Function("return this")(), h = Object.prototype, w = h.toString, k = Math.max, x = Math.min, j = function() {
            return g.Date.now();
          };
          e.exports = n;
        }).call(t, function() {
          return this;
        }());
      }, function(e, t) {
        "use strict";
        function n(e2) {
          var t2 = void 0, o2 = void 0, i2 = void 0;
          for (t2 = 0; t2 < e2.length; t2 += 1) {
            if (o2 = e2[t2], o2.dataset && o2.dataset.aos)
              return true;
            if (i2 = o2.children && n(o2.children))
              return true;
          }
          return false;
        }
        function o() {
          return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
        }
        function i() {
          return !!o();
        }
        function r(e2, t2) {
          var n2 = window.document, i2 = o(), r2 = new i2(a);
          u = t2, r2.observe(n2.documentElement, { childList: true, subtree: true, removedNodes: true });
        }
        function a(e2) {
          e2 && e2.forEach(function(e3) {
            var t2 = Array.prototype.slice.call(e3.addedNodes), o2 = Array.prototype.slice.call(e3.removedNodes), i2 = t2.concat(o2);
            if (n(i2))
              return u();
          });
        }
        Object.defineProperty(t, "__esModule", { value: true });
        var u = function() {
        };
        t.default = { isSupported: i, ready: r };
      }, function(e, t) {
        "use strict";
        function n(e2, t2) {
          if (!(e2 instanceof t2))
            throw new TypeError("Cannot call a class as a function");
        }
        function o() {
          return navigator.userAgent || navigator.vendor || window.opera || "";
        }
        Object.defineProperty(t, "__esModule", { value: true });
        var i = function() {
          function e2(e3, t2) {
            for (var n2 = 0; n2 < t2.length; n2++) {
              var o2 = t2[n2];
              o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(e3, o2.key, o2);
            }
          }
          return function(t2, n2, o2) {
            return n2 && e2(t2.prototype, n2), o2 && e2(t2, o2), t2;
          };
        }(), r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i, a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, u = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i, c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, s2 = function() {
          function e2() {
            n(this, e2);
          }
          return i(e2, [{ key: "phone", value: function() {
            var e3 = o();
            return !(!r.test(e3) && !a.test(e3.substr(0, 4)));
          } }, { key: "mobile", value: function() {
            var e3 = o();
            return !(!u.test(e3) && !c.test(e3.substr(0, 4)));
          } }, { key: "tablet", value: function() {
            return this.mobile() && !this.phone();
          } }]), e2;
        }();
        t.default = new s2();
      }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true });
        var n = function(e2, t2, n2) {
          var o2 = e2.node.getAttribute("data-aos-once");
          t2 > e2.position ? e2.node.classList.add("aos-animate") : "undefined" != typeof o2 && ("false" === o2 || !n2 && "true" !== o2) && e2.node.classList.remove("aos-animate");
        }, o = function(e2, t2) {
          var o2 = window.pageYOffset, i = window.innerHeight;
          e2.forEach(function(e3, r) {
            n(e3, i + o2, t2);
          });
        };
        t.default = o;
      }, function(e, t, n) {
        "use strict";
        function o(e2) {
          return e2 && e2.__esModule ? e2 : { default: e2 };
        }
        Object.defineProperty(t, "__esModule", { value: true });
        var i = n(12), r = o(i), a = function(e2, t2) {
          return e2.forEach(function(e3, n2) {
            e3.node.classList.add("aos-init"), e3.position = (0, r.default)(e3.node, t2.offset);
          }), e2;
        };
        t.default = a;
      }, function(e, t, n) {
        "use strict";
        function o(e2) {
          return e2 && e2.__esModule ? e2 : { default: e2 };
        }
        Object.defineProperty(t, "__esModule", { value: true });
        var i = n(13), r = o(i), a = function(e2, t2) {
          var n2 = 0, o2 = 0, i2 = window.innerHeight, a2 = { offset: e2.getAttribute("data-aos-offset"), anchor: e2.getAttribute("data-aos-anchor"), anchorPlacement: e2.getAttribute("data-aos-anchor-placement") };
          switch (a2.offset && !isNaN(a2.offset) && (o2 = parseInt(a2.offset)), a2.anchor && document.querySelectorAll(a2.anchor) && (e2 = document.querySelectorAll(a2.anchor)[0]), n2 = (0, r.default)(e2).top, a2.anchorPlacement) {
            case "top-bottom":
              break;
            case "center-bottom":
              n2 += e2.offsetHeight / 2;
              break;
            case "bottom-bottom":
              n2 += e2.offsetHeight;
              break;
            case "top-center":
              n2 += i2 / 2;
              break;
            case "bottom-center":
              n2 += i2 / 2 + e2.offsetHeight;
              break;
            case "center-center":
              n2 += i2 / 2 + e2.offsetHeight / 2;
              break;
            case "top-top":
              n2 += i2;
              break;
            case "bottom-top":
              n2 += e2.offsetHeight + i2;
              break;
            case "center-top":
              n2 += e2.offsetHeight / 2 + i2;
          }
          return a2.anchorPlacement || a2.offset || isNaN(t2) || (o2 = t2), n2 + o2;
        };
        t.default = a;
      }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true });
        var n = function(e2) {
          for (var t2 = 0, n2 = 0; e2 && !isNaN(e2.offsetLeft) && !isNaN(e2.offsetTop); )
            t2 += e2.offsetLeft - ("BODY" != e2.tagName ? e2.scrollLeft : 0), n2 += e2.offsetTop - ("BODY" != e2.tagName ? e2.scrollTop : 0), e2 = e2.offsetParent;
          return { top: n2, left: t2 };
        };
        t.default = n;
      }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true });
        var n = function(e2) {
          return e2 = e2 || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e2, function(e3) {
            return { node: e3 };
          });
        };
        t.default = n;
      }]);
    });
  }
});

// .svelte-kit/output/server/entries/pages/_layout.svelte.js
var layout_svelte_exports = {};
__export(layout_svelte_exports, {
  default: () => Layout
});
var import_aos, css, Layout;
var init_layout_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_layout.svelte.js"() {
    init_chunks();
    import_aos = __toESM(require_aos(), 1);
    css = {
      code: "h1, h2, h3, h4, h5, h6, .font-graffity{font-family:'graffity';line-height:1.2}.font-dollar{font-family:'dollar';line-height:1.2}html{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-transform:uppercase;text-rendering:optimizelegibility}@font-face{font-family:'graffity';font-style:normal;font-weight:500;src:local(''), /* Super Modern Browsers */ url('/fonts/graffity.woff') format('woff'),\r\n			/* Modern Browsers */ url('/fonts/graffity.ttf') format('truetype'),\r\n			/* Safari, Android, iOS */ url('/fonts/graffity.svg') format('svg')}@font-face{font-family:'dollar';font-style:normal;font-weight:500;src:url('/fonts/dollar.ttf') format('truetype')}",
      map: null
    };
    Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css);
      return `<main class="scrollbar-x-hide overflow-auto">${slots.default ? slots.default({}) : ``}
</main>`;
    });
  }
});

// .svelte-kit/output/server/nodes/0.js
var __exports = {};
__export(__exports, {
  component: () => component,
  fonts: () => fonts,
  imports: () => imports,
  index: () => index,
  stylesheets: () => stylesheets
});
var index, component_cache, component, imports, stylesheets, fonts;
var init__ = __esm({
  ".svelte-kit/output/server/nodes/0.js"() {
    index = 0;
    component = async () => component_cache ?? (component_cache = (await Promise.resolve().then(() => (init_layout_svelte(), layout_svelte_exports))).default);
    imports = ["_app/immutable/nodes/0.4baa5a85.js", "_app/immutable/chunks/index.7225970f.js"];
    stylesheets = ["_app/immutable/assets/0.e226c32d.css"];
    fonts = [];
  }
});

// .svelte-kit/output/server/entries/fallbacks/error.svelte.js
var error_svelte_exports = {};
__export(error_svelte_exports, {
  default: () => Error$1
});
var getStores, page, Error$1;
var init_error_svelte = __esm({
  ".svelte-kit/output/server/entries/fallbacks/error.svelte.js"() {
    init_chunks();
    getStores = () => {
      const stores = getContext("__svelte__");
      return {
        /** @type {typeof page} */
        page: {
          subscribe: stores.page.subscribe
        },
        /** @type {typeof navigating} */
        navigating: {
          subscribe: stores.navigating.subscribe
        },
        /** @type {typeof updated} */
        updated: stores.updated
      };
    };
    page = {
      subscribe(fn) {
        const store = getStores().page;
        return store.subscribe(fn);
      }
    };
    Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $page, $$unsubscribe_page;
      $$unsubscribe_page = subscribe(page, (value) => $page = value);
      $$unsubscribe_page();
      return `<h1>${escape($page.status)}</h1>
<p>${escape($page.error?.message)}</p>`;
    });
  }
});

// .svelte-kit/output/server/nodes/1.js
var __exports2 = {};
__export(__exports2, {
  component: () => component2,
  fonts: () => fonts2,
  imports: () => imports2,
  index: () => index2,
  stylesheets: () => stylesheets2
});
var index2, component_cache2, component2, imports2, stylesheets2, fonts2;
var init__2 = __esm({
  ".svelte-kit/output/server/nodes/1.js"() {
    index2 = 1;
    component2 = async () => component_cache2 ?? (component_cache2 = (await Promise.resolve().then(() => (init_error_svelte(), error_svelte_exports))).default);
    imports2 = ["_app/immutable/nodes/1.4e390ff4.js", "_app/immutable/chunks/index.7225970f.js", "_app/immutable/chunks/singletons.b691b050.js"];
    stylesheets2 = [];
    fonts2 = [];
  }
});

// .svelte-kit/output/server/entries/pages/_page.ts.js
var page_ts_exports = {};
var init_page_ts = __esm({
  ".svelte-kit/output/server/entries/pages/_page.ts.js"() {
  }
});

// .svelte-kit/output/server/entries/pages/_page.svelte.js
var page_svelte_exports = {};
__export(page_svelte_exports, {
  default: () => Page
});
var styles, faqData, artistExtensionData, ShowMoreDataBtn, css$6, StylesList, css$5, Hero, Faq, css$4, ArtistCard, css$3, ProfileCard, css$2, ReliseCard, About, css$1, AntySystemsProject, ArtistsSection, css2, VerticalSlider, Page;
var init_page_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_page.svelte.js"() {
    init_chunks();
    styles = [
      // https://www.graffiti-empire.com/graffiti-tags-and-handstyles/
      {
        title: "Tags",
        example: "tags.jpg",
        articleLink: "/",
        shortDesc: ["A tag can be defined as a stylised signature of the graffiti artist\u2019s name."],
        desc: [
          "The most common tools for graffiti tags include spray paint and marker pens.",
          "Tags can be found in every graffiti culture worldwide because they\u2019re the earliest method of modern-day graffiti \u2013 with graffiti writers like Cornbread from Philadelphia being the first to do a graffiti tag in 1965."
        ]
      },
      {
        title: "Etch",
        example: "etch.webp",
        articleLink: "/",
        shortDesc: [
          "Etched graffiti is a style where graffiti writers use an acid solution  to burn their tags on glass permanently."
        ],
        desc: [
          "It is also one of the most expensive types of graffiti in terms of property damage, as etched marks cannot be removed with cleaners.",
          "Instead, the glass must be replaced. This adds to its appeal, as etched marks are usually not removed due to the need to replace the entire glass."
        ]
      },
      {
        title: "Fat Cap",
        example: "fat-cap.jpg",
        articleLink: "/",
        shortDesc: [
          "Fat cap is a name for a special nozzle invented for graffiti art. It allows a wider stream of spray to come out of the can, creating the largest lines."
        ],
        desc: [
          `The nozzle is put on a can of spray paint, and was invented in the late 1960s by graffiti artist Supercool.`,
          `It is particularly used for tags, throw-ups and fillings, which are, due to the width of lines, defined as a special stylistic group named fat cap.`
        ]
      },
      {
        title: "Calligraphy",
        example: "calligraphy.jpg",
        articleLink: "/",
        shortDesc: [
          "Calligraphy graffiti (or calligraffiti) combines traditional calligraphy lettering with elements of graffiti culture."
        ],
        desc: [
          `This style of graffiti can be achieved using many different art supplies, such as calligraphy marker pens, calligraphy caps on spray paint and paintbrushes.`,
          `Because it\u2019s possible to do with many different mediums, calligraphy graffiti can range from tags, straight letter pieces, full-colour pieces and murals.`
        ]
      },
      {
        title: "Throw-ups",
        example: "throw-ups.jpg",
        articleLink: "/",
        shortDesc: [
          "Throw-ups are a style of graffiti characterised by rounded bubble letters with minimal negative space painted quickly (or \u2018thrown-up\u2019) on a surface."
        ],
        desc: [
          `The throw-up is usually the next progression from a tag. This comes as graffiti artists get more familiar with letter structures and strive for their names to be painted bigger, whilst also maintaining speed.`,
          `By avoiding negative space, sharp edges and intricate details, throw-ups are able to be painted quickly. Throw-ups contain two colours of paint \u2013 one for the fill and one for the outline.`,
          `High pressure spray paint is the medium of choice for throw-ups as the high output allows for maximum speed.`
        ]
      },
      {
        title: "Two letter throw-ups",
        example: "two-letter-throw-up.webp",
        articleLink: "/",
        shortDesc: [
          "Two letter throw-ups share a similar style to regular throw-ups, but they instead only contain two letters of the graffiti writer\u2019s tag. Most commonly, the first two letters."
        ],
        desc: [
          "This style of throw-up allows graffiti writers to paint their names up even faster, whilst also being able to fit into smaller spaces where a full throw-up isn\u2019t possible.",
          "JA One from New York and Oker from London are two infamous graffiti artists who are well known for their two letter throw-ups."
        ]
      },
      {
        title: "Simple",
        example: "simple.jpg",
        articleLink: "/",
        shortDesc: ["Letters in simple style basically look like normal letters. "],
        desc: [
          "The composition is not complex. Hence, they are easily readable. Colors and effects matter the most in simple style graffiti.",
          ""
        ]
      },
      // https://www.graffiti-empire.com/how-to-draw-graffiti-bubble-letters/
      {
        title: "Buble",
        example: "buble.jpg",
        articleLink: "/",
        shortDesc: [
          "Graffiti in bubble-style \u2013 look like they have been blown up with air. All edges are round."
        ],
        desc: [
          "The rounding of letters in classical throw-ups was the initial phase that led to the development of bubble style.",
          "The letters are round, circular and often overlapping partially one another, creating an image that seems to expand and bubble-up in a way."
        ]
      },
      {
        title: "Semi-wildstyle",
        example: "semi-wildstyle.jpg",
        articleLink: "/",
        shortDesc: ["Semi-wildstyle graffiti are more complex than simple style. "],
        desc: [
          `Letters are arranged in a more elaborate way and style elements are added.`,
          "This style is for beginners - it is characteristic of artists who are learning the basics and are ready to experiment their techniques."
        ]
      },
      {
        title: "Wildstyle",
        example: "wildstyle.jpg",
        articleLink: "/",
        shortDesc: [
          "The letters of wild style graffiti are very abstract and cannot be identified as letters easily."
        ],
        desc: [
          "Wildstyle is an intricate graffiti style that\u2019s all about interlocked letters, symbols, and dynamic shapes. Lots of style elements, like arrows and big serifs are added to the letters and make the composition very complex. The shadows of the letters fill the spaces between the letters and make the whole piece look compact.",
          "This style isn\u2019t for beginners\u2014it\u2019s the signature of artists who\u2019ve mastered the basics and are ready to showcase their advanced techniques."
        ]
      },
      {
        title: "Sharp",
        example: "sharp.jpg",
        articleLink: "/",
        shortDesc: [
          "In Sharp style the letters or abstract elements are sprayed or painted in as sharp and angular forms as possible."
        ],
        desc: [
          "Although in other styles sharp forms may be present, this style pushes them to their limits.",
          "Thinning, stretching and contorting of letters is extreme, which often renders these works to appear violent, aggressive and forceful."
        ]
      },
      {
        title: "3D",
        example: "3d.webp",
        articleLink: "/",
        shortDesc: [
          "Graffiti pieces with very three-dimensional compositions are called 3D-style graffiti."
        ],
        desc: [
          "As a result, the letters (can) have different vanishing points and optical illusions.",
          ""
        ]
      },
      {
        title: "Characters",
        example: "character.JPG",
        articleLink: "/",
        shortDesc: ["\u201ECharacter\u201C is an abbreviation of \u201Ccartoon character\u201D."],
        desc: [
          `They are usually painted next to a graffiti to create a scenario around the graffiti piece. Even so, some artists decide to just focus on characters.`,
          `Copying characters (from cartoons) is usually accepted, because they are only used as decorative elements. If the graffiti artist decides to focus on characters only, it is needed to bring in his/her own creativity though.`
        ]
      },
      {
        title: "Hollows",
        example: "hollows.jpg",
        articleLink: "/",
        shortDesc: [
          "Hollows are similar to throw-ups, except they only feature the letter outline in one colour with no fill-in."
        ],
        desc: [
          "Hollow graffiti is notoriously hard, however, as it can be obvious when lines have been done poorly. With only one colour and no fill-in to hide any errors, it\u2019s difficult to fix mistakes.",
          "Because of their difficulty, hollows can be a good display of a graffiti artist\u2019s skill as they require exceptional can control for them to look clean."
        ]
      },
      {
        title: "Pichacao",
        example: "picha\xE7\xE3o.jpg",
        articleLink: "/",
        shortDesc: [
          "Picha\xE7\xE3o (pronounced pi-cha-\xE7\xE3o) is a unique style of graffiti native to S\xE3o Paulo."
        ],
        desc: [
          `Roughly translated to \u201Cwall writings\u201D, Picha\xE7\xE3o is a form of tagging it\u2019s known for its cryptic lettering painted in hard to reach places across cities in Brazil.`,
          `Although Picha\xE7\xE3o writing began in the 1970s as a form of political and social protest, modern Picha\xE7\xE3o writers instead use it as a way to promote their graffiti name \u2013 much like traditional name-based graffiti.`,
          `Picha\xE7\xE3o can be easily recognised by its thin and aggressive lettering made possible by the use of spray paint, paintbrushes and paint rollers.`
        ]
      },
      {
        title: "Straight Letters",
        example: "straight-letter.webp",
        articleLink: "/",
        shortDesc: [
          "A straight letter piece is defined by its big, bold and often more readable letters in combination with the graffiti artist\u2019s personal flare."
        ],
        desc: [
          `This style of graffiti is commonly the next progression from a throw-up as it contains more detailed, sharper edges and has more negative space.`,
          `A straight letter is usually painted with speed in mind and uses only 2 \u2013 4 colours in a piece.`,
          `In London graffiti culture, a straight letter piece painted with silver chrome and black is commonly known as a \u2018Dub\u2019.`
        ]
      },
      {
        title: "Blockbuster",
        example: "blockbuster.jpg",
        articleLink: "/",
        shortDesc: [
          "A blockbuster is a style of graffiti characterised by huge straight letters painted using only 2 \u2013 3 colours."
        ],
        desc: [
          `Both spray paint and/or emulsion paint can be used to create blockbuster pieces.`,
          `Although a blockbuster can be painted anywhere, they\u2019re commonly found on large surfaces that are distanced from public view.`,
          `This means that there is a need to go huge in order to be seen, as a normal-sized piece may be missed. Common spots include highways, rooftops and abandoned buildings \u2013 but you can find blockbusters anywhere.`
        ]
      },
      {
        title: "Roller",
        example: "roller.jpg",
        articleLink: "/",
        shortDesc: [
          "Roller graffiti (also known as roll-ups) is a style that uses emulsion paint along with paint rollers to produce big pieces in hard-to-reach places."
        ],
        desc: [
          `A big limitation of spray paint is that unless you have access to a ladder, you\u2019re only able to paint as high as you can reach.`,
          `But by using an extended paint roller instead, graffiti artists can access spaces previously inaccessible with spray paint without needing a ladder.`,
          `Graffiti with a roller is much cheaper than spray paint.`
        ]
      },
      {
        title: "Heaven spot",
        example: "heaven-spot.webp",
        articleLink: "/",
        shortDesc: [
          "Although not strictly a graffiti style, a heaven spot is a piece painted in a high-up and difficult place."
        ],
        desc: [
          `As the name suggests, heaven relates to being high up in the sky. But it\u2019s also the place a writer might end up if they fall. Heaven spots can range from rooftops, towers, highway signs and more. Pretty much any graffiti piece which is high up in the air.`,
          `Both spray paint and emulsion paint are common tools for painting heaven spots.`
        ]
      },
      {
        title: "Murals",
        example: "mural.webp",
        articleLink: "/",
        shortDesc: [
          "Murals are large pieces of street art containing faces, characters, objects, abstract designs and sometimes letters often painted with permission."
        ],
        desc: [
          `The line between graffiti and street art becomes blurred with murals, as the previous graffiti styles we\u2019ve covered have been primarily name-based.`,
          ` Murals do not always contain a name or a tag, which puts them more in the category of street art.`,
          `As murals are usually commissioned, artists are able to spend as much time as they need to perfect their work, which is often not the case for other graffiti styles.`
        ]
      },
      // https://www.graffiti-empire.com/graffiti-tags-and-handstyles/
      {
        title: "Handstyle",
        example: "handstyle.jpg",
        articleLink: "/",
        shortDesc: [
          "Handstyle graffiti has become more popular within the design and fine art contexts, now becoming canonical as a stylistic quality of hand-lettering artworks."
        ],
        desc: [
          "Handstyle graffiti is a form of graffiti that is drawn on canvas, paper, and other two-dimensional surfaces. ",
          "This is a style of graffiti that generally describes artworks on a smaller scale, and is often seen to be incorporated into other artworks. It can be used not only as an art form. Graffiti-style texts have become a canonical form of writing that can be used for marketing, advertising and other creative purposes."
        ]
      },
      {
        title: "Sticker bombing",
        example: "sticker-bobing.jpg",
        articleLink: "/",
        shortDesc: [
          "Sticker bombing is a common type of graffiti where artists either write on blank stickers or print names and images on stickers and stick them up in public."
        ],
        desc: [
          `Sticker bombing is unique as it\u2019s not just used as a means of increasing someone\u2019s profile through a tag like traditional graffiti.`,
          `Stickers are also often used to raise awareness of social issues and to promote political agendas.`
        ]
      },
      // https://twistedsifter.com/2014/07/the-ultimate-banksy-gallery/
      {
        title: "Stencils",
        example: "stencils.webp",
        articleLink: "/",
        shortDesc: [
          "Artists then put the sheet plastic or metal with shapes cut out of it - on a surface and use spray paint to fill in the cut-out shapes, producing their artwork."
        ],
        desc: [
          "Stencil graffiti or stencil art is a style that uses a sheet of card, plastic or metal with shapes cut out of it.",
          `Stencil graffiti was made famous by "Banksy" through his popular pieces Girl with Balloon and Flower Thrower.`,
          `Since then, stencil graffiti has become more popular and often inherits a political or social message which is aimed at the wider public.`
        ]
      },
      {
        title: "Wheat paste",
        example: "wheat-paste.webp",
        articleLink: "/",
        shortDesc: [
          "Wheat paste is a style that uses wheat flour or starch mixed with water to adhere paper imagery to a surface."
        ],
        desc: [
          "Like stencils, stickers and murals \u2013 wheat paste falls more into the category of street art than traditional graffiti. This is because it focuses on images and symbols instead of a graffiti name.",
          "Wheat paste posters also often try to provoke a social or political message as they\u2019re commonly used by activist groups to raise awareness for their cause."
        ]
      },
      {
        title: "Brush",
        example: "brush.jpg",
        articleLink: "/",
        shortDesc: [
          "Relatively quick to execute once the initial design is settled, brush style stands for the use of brush or paint rollers which creates a smooth final effect."
        ],
        desc: [
          `Brush graffiti are devoid of unnecessary lines and petty details, but sometimes, brushes may be used for the execution of fine points, which creates a more painterly result.`
        ]
      },
      {
        title: "Anti-style",
        example: "anti-style.webp",
        articleLink: "/",
        shortDesc: [
          "Anti-style (also known as hipster graffiti and ignorant style) is a type of graffiti that completely ignores traditional graffiti conventions."
        ],
        desc: [
          "By ignoring these conventions, anti-style writers are strictly \u201Cagainst\u201D any graffiti traditional style. This is because many artists strive for respect and recognition, which is hard to achieve as an anti-style writer because this style only appeals to a small minority of graffiti artists.",
          "Anti-style can be hard to look at as pieces lack composition and flow. With no rules to follow, anti-style can be produced using any type of graffiti paint."
        ]
      }
    ];
    faqData = [
      {
        question: `Lorem ipsum dolor sit amet consectetur adipisicing elit`,
        answer: [
          `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque
									eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et
									itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!`,
          ``,
          ``
        ]
      }
    ];
    artistExtensionData = [
      {
        title: "Albany artists",
        country: "Albany",
        relise: "2025",
        cards: 80,
        price: "30",
        img: "albany.png",
        artists: [
          { nickName: "lorem1", link: "/" },
          { nickName: "lorem2", link: "/" },
          { nickName: "lorem3", link: "/" },
          { nickName: "lorem4", link: "/" },
          { nickName: "lorem5", link: "/" },
          { nickName: "lorem6", link: "/" },
          { nickName: "lorem7", link: "/" }
        ],
        del: "",
        features: []
      },
      {
        title: "Austria artists",
        country: "Austria",
        price: "24",
        relise: "2026",
        cards: 67,
        img: "austria.png",
        artists: [
          { nickName: "lorem1", link: "/" },
          { nickName: "lorem2", link: "/" },
          { nickName: "lorem3", link: "/" },
          { nickName: "lorem4", link: "/" },
          { nickName: "lorem5", link: "/" },
          { nickName: "lorem6", link: "/" },
          { nickName: "lorem7", link: "/" }
        ],
        del: "",
        features: [
          {
            title: "Artists",
            subTitle: ""
          }
        ]
      },
      {
        title: "Ukraine artists",
        country: "Ukraine",
        price: "20",
        relise: "2026",
        cards: 65,
        img: "ukraine.png",
        artists: [
          { nickName: "lorem1", link: "/" },
          { nickName: "lorem2", link: "/" },
          { nickName: "lorem3", link: "/" },
          { nickName: "lorem4", link: "/" },
          { nickName: "lorem5", link: "/" },
          { nickName: "lorem6", link: "/" },
          { nickName: "lorem7", link: "/" }
        ],
        del: "",
        features: [
          {
            title: "Artists",
            subTitle: ""
          }
        ]
      },
      {
        title: "Russia artists",
        country: "Russia",
        price: "40",
        relise: "2025",
        cards: 120,
        img: "russia.png",
        artists: [
          { nickName: "lorem1", link: "/" },
          { nickName: "lorem2", link: "/" },
          { nickName: "lorem3", link: "/" },
          { nickName: "lorem4", link: "/" },
          { nickName: "lorem5", link: "/" },
          { nickName: "lorem6", link: "/" },
          { nickName: "lorem7", link: "/" }
        ],
        del: "",
        features: [
          {
            title: "Artists",
            subTitle: ""
          }
        ]
      },
      {
        title: "Turkey artists",
        country: "Turkey",
        price: "30",
        relise: "2026",
        cards: 64,
        img: "turkey.png",
        artists: [
          { nickName: "lorem1", link: "/" },
          { nickName: "lorem2", link: "/" },
          { nickName: "lorem3", link: "/" },
          { nickName: "lorem4", link: "/" },
          { nickName: "lorem5", link: "/" },
          { nickName: "lorem6", link: "/" },
          { nickName: "lorem7", link: "/" }
        ],
        del: "",
        features: [
          {
            title: "Artists",
            subTitle: ""
          }
        ]
      },
      {
        title: "Sweden artists",
        country: "Sweden",
        price: "22",
        relise: "2028",
        cards: 60,
        img: "sweden.png",
        artists: [
          { nickName: "lorem1", link: "/" },
          { nickName: "lorem2", link: "/" },
          { nickName: "lorem3", link: "/" },
          { nickName: "lorem4", link: "/" },
          { nickName: "lorem5", link: "/" },
          { nickName: "lorem6", link: "/" },
          { nickName: "lorem7", link: "/" }
        ],
        del: "",
        features: [
          {
            title: "Artists",
            subTitle: ""
          }
        ]
      },
      {
        title: "Spain artists",
        country: "Spain",
        price: "30",
        relise: "2025",
        cards: 80,
        img: "spain.png",
        artists: [
          { nickName: "lorem1", link: "/" },
          { nickName: "lorem2", link: "/" },
          { nickName: "lorem3", link: "/" },
          { nickName: "lorem4", link: "/" },
          { nickName: "lorem5", link: "/" },
          { nickName: "lorem6", link: "/" },
          { nickName: "lorem7", link: "/" }
        ],
        del: "",
        features: [
          {
            title: "Artists",
            subTitle: ""
          }
        ]
      },
      {
        title: "Italy artists",
        country: "Italy",
        price: "30",
        relise: "2025",
        cards: 80,
        img: "italy.png",
        artists: [
          { nickName: "lorem1", link: "/" },
          { nickName: "lorem2", link: "/" },
          { nickName: "lorem3", link: "/" },
          { nickName: "lorem4", link: "/" },
          { nickName: "lorem5", link: "/" },
          { nickName: "lorem6", link: "/" },
          { nickName: "lorem7", link: "/" }
        ],
        del: "",
        features: [
          {
            title: "Artists",
            subTitle: ""
          }
        ]
      },
      {
        title: "Germany artists",
        country: "Germany",
        price: "50",
        relise: "2025",
        cards: 160,
        img: "germany.png",
        artists: [
          { nickName: "lorem1", link: "/" },
          { nickName: "lorem2", link: "/" },
          { nickName: "lorem3", link: "/" },
          { nickName: "lorem4", link: "/" },
          { nickName: "lorem5", link: "/" },
          { nickName: "lorem6", link: "/" },
          { nickName: "lorem7", link: "/" }
        ],
        del: "",
        features: [
          {
            title: "Artists",
            subTitle: ""
          }
        ]
      },
      {
        title: "Poland artists",
        country: "Poland",
        price: "20",
        relise: "2025",
        cards: 60,
        img: "poland.png",
        artists: [
          { nickName: "lorem1", link: "/" },
          { nickName: "lorem2", link: "/" },
          { nickName: "lorem3", link: "/" },
          { nickName: "lorem4", link: "/" },
          { nickName: "lorem5", link: "/" },
          { nickName: "lorem6", link: "/" },
          { nickName: "lorem7", link: "/" }
        ],
        del: "",
        features: [
          {
            title: "Artists",
            subTitle: ""
          }
        ]
      },
      {
        title: "France artists",
        country: "France",
        price: "50",
        relise: "2025",
        cards: 120,
        img: "france.png",
        artists: [
          { nickName: "lorem1", link: "/" },
          { nickName: "lorem2", link: "/" },
          { nickName: "lorem3", link: "/" },
          { nickName: "lorem4", link: "/" },
          { nickName: "lorem5", link: "/" },
          { nickName: "lorem6", link: "/" },
          { nickName: "lorem7", link: "/" }
        ],
        del: "",
        features: [
          {
            title: "Artists",
            subTitle: ""
          }
        ]
      },
      {
        title: "England artists",
        country: "England",
        price: "30",
        relise: "2025",
        cards: 100,
        img: "england.png",
        artists: [
          { nickName: "lorem1", link: "/" },
          { nickName: "lorem2", link: "/" },
          { nickName: "lorem3", link: "/" },
          { nickName: "lorem4", link: "/" },
          { nickName: "lorem5", link: "/" },
          { nickName: "lorem6", link: "/" },
          { nickName: "lorem7", link: "/" }
        ],
        del: "",
        features: [
          {
            title: "Artists",
            subTitle: ""
          }
        ]
      },
      {
        title: "Croatia artists",
        country: "Croatia",
        price: "20",
        relise: "2025",
        cards: 60,
        img: "croatia.png",
        artists: [
          { nickName: "lorem1", link: "/" },
          { nickName: "lorem2", link: "/" },
          { nickName: "lorem3", link: "/" },
          { nickName: "lorem4", link: "/" },
          { nickName: "lorem5", link: "/" },
          { nickName: "lorem6", link: "/" },
          { nickName: "lorem7", link: "/" }
        ],
        del: "",
        features: [
          {
            title: "Artists",
            subTitle: ""
          }
        ]
      },
      {
        title: "Czech artists",
        country: "Czech",
        price: "20",
        relise: "2025",
        cards: 60,
        img: "czech.png",
        artists: [
          { nickName: "lorem1", link: "/" },
          { nickName: "lorem2", link: "/" },
          { nickName: "lorem3", link: "/" },
          { nickName: "lorem4", link: "/" },
          { nickName: "lorem5", link: "/" },
          { nickName: "lorem6", link: "/" },
          { nickName: "lorem7", link: "/" }
        ],
        del: "",
        features: [
          {
            title: "Artists",
            subTitle: ""
          }
        ]
      }
    ];
    ShowMoreDataBtn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { showFull, link, title } = $$props;
      if ($$props.showFull === void 0 && $$bindings.showFull && showFull !== void 0)
        $$bindings.showFull(showFull);
      if ($$props.link === void 0 && $$bindings.link && link !== void 0)
        $$bindings.link(link);
      if ($$props.title === void 0 && $$bindings.title && title !== void 0)
        $$bindings.title(title);
      return `

<a${add_attribute("href", link, 0)} role="button" class="w-[300px] text-center mb-10 mt-4 font-graffity text-2xl transition duration-500 ease-in-out transform focus:outline-none hover:bg-yellow-400 px-4 py-6 text-2xl uppercase border-2 border-yellow-400 text-yellow-400 hover:text-black">${escape(showFull ? "Hide" : "SHOW")} ${escape(title)}</a>`;
    });
    css$6 = {
      code: ".img-fluid.svelte-pgwzm4.svelte-pgwzm4.svelte-pgwzm4{max-width:100%;height:auto}.graffity-list.svelte-pgwzm4 a.svelte-pgwzm4.svelte-pgwzm4{transition:all 0.5s;text-decoration:none}.video-container.svelte-pgwzm4.svelte-pgwzm4.svelte-pgwzm4{position:fixed;top:0;left:0;width:100%;height:100%;z-index:-2}video.svelte-pgwzm4.svelte-pgwzm4.svelte-pgwzm4{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.video-container.svelte-pgwzm4.svelte-pgwzm4.svelte-pgwzm4::after{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0, 0, 0, 0.9)}.graffity-list.svelte-pgwzm4.svelte-pgwzm4.svelte-pgwzm4{margin:60px 0px 0px;padding:0px 30px}.graffity-list.svelte-pgwzm4 .title.svelte-pgwzm4.svelte-pgwzm4{text-transform:uppercase;margin:0px auto 20px;text-align:center}.graffity-list.svelte-pgwzm4 ul li.svelte-pgwzm4.svelte-pgwzm4{cursor:pointer;position:relative;display:flex;display:-webkit-flex;align-items:center;-webkit-align-items:center;flex-wrap:wrap;-webkit-flex-wrap:wrap;padding:26px 0px;margin:0px -12px;opacity:0.4}.graffity-list.svelte-pgwzm4 ul li.svelte-pgwzm4.svelte-pgwzm4::after{opacity:1;width:0%}.graffity-list.svelte-pgwzm4 ul li.svelte-pgwzm4.svelte-pgwzm4:hover{opacity:1}.graffity-list.svelte-pgwzm4 ul li.svelte-pgwzm4.svelte-pgwzm4:hover::after{width:100%}.graffity-list.svelte-pgwzm4 ul li.svelte-pgwzm4>div.svelte-pgwzm4:not(.hover-img){padding:0px 12px}.graffity-list.svelte-pgwzm4 .index.svelte-pgwzm4.svelte-pgwzm4{width:calc((100% / 12) / 1.2)}.graffity-list.svelte-pgwzm4 .short-desc.svelte-pgwzm4.svelte-pgwzm4{width:calc((100% / 12) * 2.7)}.graffity-list.svelte-pgwzm4 .graffity-style.svelte-pgwzm4.svelte-pgwzm4{width:calc((100% / 12) * 1.8)}.graffity-list.svelte-pgwzm4 .description.svelte-pgwzm4.svelte-pgwzm4{width:100%}.graffity-list.svelte-pgwzm4 .redirect-link a.svelte-pgwzm4.svelte-pgwzm4{width:30px;height:30px;margin:0px auto;display:flex;display:-webkit-flex;justify-content:center;-webkit-justify-content:center;align-items:center;-webkit-align-items:center;border-radius:50%;background:#fff}.graffity-list.svelte-pgwzm4 .redirect-link svg.svelte-pgwzm4.svelte-pgwzm4{color:#000}.graffity-list.svelte-pgwzm4 .hover-img.svelte-pgwzm4.svelte-pgwzm4{pointer-events:none;position:absolute;z-index:-1;top:50%;left:0%;width:50vw;height:20vw}.graffity-list.svelte-pgwzm4 .hover-img img.svelte-pgwzm4.svelte-pgwzm4{transition:all 0.7s;-webkit-transition:all 0.7s;opacity:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover;border-radius:16px}.graffity-list.svelte-pgwzm4 li:hover .hover-img img.svelte-pgwzm4.svelte-pgwzm4{opacity:0.4}.spray.svelte-pgwzm4.svelte-pgwzm4.svelte-pgwzm4{width:85px;height:85px;position:fixed;top:0;left:0;pointer-events:none;z-index:99999;background-image:url(/images/spray.svg)}@media(min-width: 1200px) and (max-width: 1499px){}@media(min-width: 992px) and (max-width: 1199px){h2.svelte-pgwzm4.svelte-pgwzm4.svelte-pgwzm4{font-size:70px;line-height:90px}.graffity-list.svelte-pgwzm4 .hover-img.svelte-pgwzm4.svelte-pgwzm4{width:38vw;height:38vw}.graffity-list.svelte-pgwzm4 .hover-img img.svelte-pgwzm4.svelte-pgwzm4{border-radius:12px}}@media(min-width: 768px) and (max-width: 991px){h2.svelte-pgwzm4.svelte-pgwzm4.svelte-pgwzm4{font-size:18px;line-height:26px}.graffity-list.svelte-pgwzm4 .title.svelte-pgwzm4.svelte-pgwzm4{margin:0px auto 40px}.graffity-list.svelte-pgwzm4 .hover-img.svelte-pgwzm4.svelte-pgwzm4{width:38vw;height:38vw}.graffity-list.svelte-pgwzm4 .hover-img img.svelte-pgwzm4.svelte-pgwzm4{border-radius:12px}}@media(max-width: 767px){.graffity-list.svelte-pgwzm4.svelte-pgwzm4.svelte-pgwzm4{padding:0px 15px}.graffity-list.svelte-pgwzm4 .title.svelte-pgwzm4.svelte-pgwzm4{margin:0px auto 40px}.graffity-list.svelte-pgwzm4 ul li.svelte-pgwzm4>div.svelte-pgwzm4:not(.hover-img){padding:0px 8px}.graffity-list.svelte-pgwzm4 .index.svelte-pgwzm4.svelte-pgwzm4,.graffity-list.svelte-pgwzm4 .description.svelte-pgwzm4.svelte-pgwzm4{display:none}@media(max-width: 560px){.graffity-list.svelte-pgwzm4 .graffity-style.svelte-pgwzm4.svelte-pgwzm4{width:calc((100% / 12) * 4)}.graffity-list.svelte-pgwzm4 .redirect-link.svelte-pgwzm4.svelte-pgwzm4{width:calc((100% / 12) * 2)}}.graffity-list.svelte-pgwzm4 .graffity-style.svelte-pgwzm4.svelte-pgwzm4{width:calc((100% / 12) * 8)}.graffity-list.svelte-pgwzm4 .redirect-link.svelte-pgwzm4.svelte-pgwzm4{width:calc((100% / 12) * 2)}.graffity-list.svelte-pgwzm4 .hover-img.svelte-pgwzm4.svelte-pgwzm4{width:40vw;height:40vw}.graffity-list.svelte-pgwzm4 .hover-img img.svelte-pgwzm4.svelte-pgwzm4{border-radius:8px}}",
      map: null
    };
    StylesList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let showFull = false;
      $$result.css.add(css$6);
      let $$settled;
      let $$rendered;
      do {
        $$settled = true;
        $$rendered = `<div class="spray svelte-pgwzm4"></div>

<div class="video-container svelte-pgwzm4"><video playsinline autoplay muted loop class="svelte-pgwzm4"><source src="/videos/big.mp4" type="video/mp4"></video></div>


<section class="mb-20 md:py-20 lg:py-20 xl:py-20"><div class="graffity-list  svelte-pgwzm4"><h2 class="title max-w-xl text-3xl lg:text-6xl svelte-pgwzm4">Types of Graffiti That Define the Art</h2>
		<ul><li class="svelte-pgwzm4"><div class="index svelte-pgwzm4"><span></span></div>
				<div class="graffity-style max-w-sm svelte-pgwzm4"><span class="text-2xl">Title</span></div>
				<div class="short-desc svelte-pgwzm4"><span class="text-2xl">Short description</span></div>

				<div class="description max-w-md svelte-pgwzm4"><span class="text-2xl">Description</span></div>
				<div class="redirect-link svelte-pgwzm4"></div>
				<div class="hover-img svelte-pgwzm4"></div></li>

			<a name="styles" class="svelte-pgwzm4"></a>
			${each(showFull ? styles : styles.slice(0, 3), (style, i) => {
          return `<li class="hover:delay-550 group transform border-b-2 border-neutral-700 hover:-translate-y-4 hover:border-yellow-400 hover:transition hover:duration-1000 hover:ease-in-out hover:ease-in-out svelte-pgwzm4"><div class="index group-hover:text-yellow-400  svelte-pgwzm4"><span class="font-dollar text-6xl">${escape(i + 1)}</span></div>
					<div class="graffity-style group-hover:text-yellow-400 svelte-pgwzm4"><h2 class="text-xl md:text-4xl lg:text-4xl xl:text-4xl svelte-pgwzm4"${add_attribute("data-value", style.title, 0)}>${escape(style.title)}
						</h2></div>
					<div class="short-desc svelte-pgwzm4">${each(style.shortDesc, (desc) => {
            return `<p>${escape(desc)}
							</p>`;
          })}</div>

					<div class="description lg:max-w-3xl svelte-pgwzm4">${each(style.desc, (desc) => {
            return `<p class="mb-1.5">${escape(desc)}
							</p>`;
          })}</div>
					<div class="redirect-link svelte-pgwzm4"><a${add_attribute("href", style.articleLink, 0)} target="_blank" class="svelte-pgwzm4"><svg width="1.25rem" height="1.25rem" viewBox="0 0 16 16" fill="none" name="iconArrow" xmlns="http://www.w3.org/2000/svg" class="svelte-pgwzm4"><path d="M12.75 4C12.75 3.58579 12.4142 3.25 12 3.25C11.5858 3.25 11.25 3.58579 11.25 4H12.75ZM11.25 10C11.25 10.4142 11.5858 10.75 12 10.75C12.4142 10.75 12.75 10.4142 12.75 10H11.25ZM11.25 4V10H12.75V4H11.25Z" fill="currentColor"></path><path d="M12 4.75C12.4142 4.75 12.75 4.41421 12.75 4C12.75 3.58579 12.4142 3.25 12 3.25L12 4.75ZM6 3.25C5.58579 3.25 5.25 3.58579 5.25 4C5.25 4.41421 5.58579 4.75 6 4.75L6 3.25ZM12 3.25L6 3.25L6 4.75L12 4.75L12 3.25Z" fill="currentColor"></path><path d="M12.5303 4.53033C12.8232 4.23744 12.8232 3.76256 12.5303 3.46967C12.2374 3.17678 11.7626 3.17678 11.4697 3.46967L12.5303 4.53033ZM3.46967 11.4697C3.17678 11.7626 3.17678 12.2374 3.46967 12.5303C3.76256 12.8232 4.23744 12.8232 4.53033 12.5303L3.46967 11.4697ZM11.4697 3.46967L3.46967 11.4697L4.53033 12.5303L12.5303 4.53033L11.4697 3.46967Z" fill="currentColor"></path></svg>
						</a></div>
					<div class="hover-img svelte-pgwzm4"><img src="${"/images/styles/" + escape(style.example, true)}" alt="${"Example of a " + escape(style.title, true) + " style graffiti"}" class="img-fluid svelte-pgwzm4"></div>
				</li>`;
        })}</ul></div>

	<div class="flex items-center justify-center">${validate_component(ShowMoreDataBtn, "ShowMoreDataBtn").$$render(
          $$result,
          {
            link: "#styles",
            title: "Styles",
            showFull
          },
          {
            showFull: ($$value) => {
              showFull = $$value;
              $$settled = false;
            }
          },
          {}
        )}</div>
</section>`;
      } while (!$$settled);
      return $$rendered;
    });
    css$5 = {
      code: ":root{--black:rgb(0 0 0);--white:rgb(255 255 255);--yellow:rgb(255 213 28);--light-yellow:rgb(255 209 98 / 60%);--gray:rgb(167 167 167 / 30%);--logo-dimensions:18rem;--icon-dimensions:3rem;--full-w:100%;--full-h:100%;--h2-clamp:clamp(10.5rem, 15vw, 30rem);--default-font-size:1.8rem;--default-heading-size:4.5rem;--duration:0.2s;--short-duration:350ms;--gap:0.4rem;--default-padding:1.2rem;--z-20:20;--z-30:30;--letter-animation:5s;--step-letter-animation:0.35s}.svelte-vprakl.svelte-vprakl.svelte-vprakl::-moz-selection{-webkit-background-clip:text;-webkit-text-fill-color:var(--yellow);background-color:var(--gray);color:var(--yellow)}.svelte-vprakl.svelte-vprakl.svelte-vprakl::selection{-webkit-background-clip:text;-webkit-text-fill-color:var(--yellow);background-color:var(--gray);color:var(--yellow)}.gradient-text.svelte-vprakl.svelte-vprakl.svelte-vprakl{-webkit-background-clip:text;-webkit-text-fill-color:rgba(0, 0, 0, 0);background-image:linear-gradient(to bottom, var(--yellow), var(--light-yellow))}h2.svelte-vprakl.svelte-vprakl.svelte-vprakl{align-self:flex-end;display:inline-flex;flex-flow:row;font-size:var(--h2-clamp);line-height:0.75;margin:0 auto 6rem auto;position:relative;text-align:center;z-index:var(--z-30)}img.svelte-vprakl.svelte-vprakl.svelte-vprakl{display:block;max-width:var(--full-w);-o-object-fit:cover;object-fit:cover;width:var(--full-w)}a.svelte-vprakl.svelte-vprakl.svelte-vprakl{color:var(--white);cursor:pointer;text-decoration:none;touch-action:manipulation}nav.svelte-vprakl.svelte-vprakl.svelte-vprakl{background-color:var(--black);box-shadow:0 0.8rem 2.4rem var(--shadow-color), 0 1.6rem 5.6rem var(--shadow-color),\r\n			0 2.4rem 8rem var(--shadow-color);display:flex;flex-flow:row nowrap;grid-row:1;padding:var(--default-padding)}nav.svelte-vprakl ul.svelte-vprakl.svelte-vprakl{display:flex;flex-flow:row nowrap}nav.svelte-vprakl ul.svelte-vprakl.svelte-vprakl:nth-of-type(2){align-items:center;gap:var(--default-padding);justify-content:center;width:var(--full-w)}nav.svelte-vprakl ul.svelte-vprakl:nth-of-type(2) li.svelte-vprakl{align-items:center}nav.svelte-vprakl ul.svelte-vprakl:nth-of-type(2) li.svelte-vprakl:nth-child(-n + 3){display:none;border-bottom:0.4rem solid transparent;height:var(--full-h);padding:0 var(--default-padding);transition:border var(--short-duration) ease-in}nav.svelte-vprakl ul.svelte-vprakl:nth-of-type(2) li.svelte-vprakl:first-of-type,nav.svelte-vprakl ul.svelte-vprakl:nth-of-type(2) li.svelte-vprakl:last-of-type{margin-left:auto}nav.svelte-vprakl ul.svelte-vprakl:nth-of-type(2) li.svelte-vprakl:hover{border-color:var(--light-yellow)}nav.svelte-vprakl ul.svelte-vprakl:nth-of-type(2) li:hover a.svelte-vprakl{color:var(--yellow)}nav.svelte-vprakl img.svelte-vprakl.svelte-vprakl{width:calc(var(--logo-dimensions) / 2)}nav.svelte-vprakl a.svelte-vprakl.svelte-vprakl{transition:color var(--short-duration) ease-in}section.svelte-vprakl.svelte-vprakl.svelte-vprakl{display:flex;flex-flow:column wrap;grid-row:2;overflow:hidden}article.svelte-vprakl.svelte-vprakl.svelte-vprakl{display:grid;grid-template-columns:1fr;grid-template-rows:var(--full-h);position:relative;width:var(--full-w)}article.svelte-vprakl>.svelte-vprakl.svelte-vprakl{grid-column:1;grid-row:1}.panels.svelte-vprakl.svelte-vprakl.svelte-vprakl{display:grid;grid-template-columns:repeat(auto-fit, minmax(18.5rem, 1fr));z-index:var(--z-20)}@media(max-width: 560px){.panels.svelte-vprakl.svelte-vprakl.svelte-vprakl{display:flex;flex-direction:column}.panel.svelte-vprakl.svelte-vprakl.svelte-vprakl{height:120px}.big-text.svelte-vprakl.svelte-vprakl.svelte-vprakl{font-size:4rem;margin:0 auto -4rem auto}.geo-square.svelte-vprakl img.svelte-vprakl.svelte-vprakl{animation:svelte-vprakl-scale-in-ver-center var(--duration) cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards,\r\n				svelte-vprakl-slit-out-vertical 1s ease-in forwards;animation-delay:2s, 4.5s;opacity:0;width:350px;transform:scale(1.75)}.geo-square.svelte-vprakl.svelte-vprakl.svelte-vprakl{align-self:center;animation:svelte-vprakl-scale-in-hor-center var(--duration) cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards,\r\n			svelte-vprakl-scale-out-hor-left var(--duration) cubic-bezier(0.55, 0.085, 0.68, 0.53) forwards;animation-delay:1.5s, 5.5s;box-shadow:0 0 0 var(--default-padding) var(--yellow);display:grid;height:calc(var(--default-padding) * 12);margin:0 auto calc(var(--default-padding) * 4);opacity:0;position:relative;transition:color var(--duration);width:350px;z-index:var(--z-30)}}.panel.svelte-vprakl.svelte-vprakl.svelte-vprakl{animation:svelte-vprakl-scale-in-ver-center var(--duration) cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;box-shadow:rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,\r\n			rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;opacity:0;position:relative}.panel.svelte-vprakl a.svelte-vprakl.svelte-vprakl{font-size:var(--default-heading-size);left:0;margin:0 auto;position:absolute;right:0;top:0}.panel.svelte-vprakl img.svelte-vprakl.svelte-vprakl{filter:brightness(0.33)}.panel.svelte-vprakl span.svelte-vprakl.svelte-vprakl{align-items:center;display:flex;flex-flow:row wrap;height:-moz-fit-content;height:fit-content;justify-content:space-evenly;opacity:0;padding:var(--default-padding) var(--gap);position:relative;width:var(--full-w);z-index:var(--z-30)}.panel.svelte-vprakl span.svelte-vprakl.svelte-vprakl::before{background-color:var(--gray);bottom:0;content:'';display:block;left:0;position:absolute;right:0;top:0;transform:scaleY(0);transform-origin:bottom left;transition:transform var(--short-duration) ease-in-out;z-index:-1}.panel.svelte-vprakl:nth-of-type(1) span.svelte-vprakl.svelte-vprakl{animation:svelte-vprakl-slide-in-top var(--duration) cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards}.panel.svelte-vprakl:nth-of-type(2) span.svelte-vprakl.svelte-vprakl{animation:svelte-vprakl-slide-in-top var(--duration) cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards}.panel.svelte-vprakl:nth-of-type(3) span.svelte-vprakl.svelte-vprakl{animation:svelte-vprakl-slide-in-left var(--duration) cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards}.panel.svelte-vprakl:nth-of-type(4) span.svelte-vprakl.svelte-vprakl{animation:svelte-vprakl-slide-in-right var(--duration) cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards}.panel.svelte-vprakl.svelte-vprakl.svelte-vprakl:hover{box-shadow:rgba(255, 209, 98, 0.25) 0px 30px 60px -12px inset,\r\n			rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset}.panel.svelte-vprakl:hover span.svelte-vprakl.svelte-vprakl{color:var(--yellow)}.panel.svelte-vprakl:hover span.svelte-vprakl.svelte-vprakl::before{transform:scaleX(1);transform-origin:bottom center}.panel.svelte-vprakl.svelte-vprakl.svelte-vprakl:nth-of-type(1){animation-delay:6.35s}.panel.svelte-vprakl:nth-of-type(1) span.svelte-vprakl.svelte-vprakl{animation-delay:6.85s}.panel.svelte-vprakl.svelte-vprakl.svelte-vprakl:nth-of-type(2){animation-delay:6.7s}.panel.svelte-vprakl:nth-of-type(2) span.svelte-vprakl.svelte-vprakl{animation-delay:7.2s}.panel.svelte-vprakl.svelte-vprakl.svelte-vprakl:nth-of-type(3){animation-delay:7.05s}.panel.svelte-vprakl:nth-of-type(3) span.svelte-vprakl.svelte-vprakl{animation-delay:7.55s}.panel.svelte-vprakl.svelte-vprakl.svelte-vprakl:nth-of-type(4){animation-delay:7.4s}.panel.svelte-vprakl:nth-of-type(4) span.svelte-vprakl.svelte-vprakl{animation-delay:7.9s}.letter.svelte-vprakl.svelte-vprakl.svelte-vprakl{animation:svelte-vprakl-bounce-in-fwd var(--duration) cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;color:var(--yellow);display:inline;opacity:0}.letter.svelte-vprakl.svelte-vprakl.svelte-vprakl:nth-child(1){animation-delay:4.95s}.letter.svelte-vprakl.svelte-vprakl.svelte-vprakl:nth-child(2){animation-delay:5.3s}.letter.svelte-vprakl.svelte-vprakl.svelte-vprakl:nth-child(3){animation-delay:5.65s}.letter.svelte-vprakl.svelte-vprakl.svelte-vprakl:nth-child(4){animation-delay:6s}.letter.svelte-vprakl.svelte-vprakl.svelte-vprakl:nth-child(5){animation-delay:6.35s}.letter.svelte-vprakl.svelte-vprakl.svelte-vprakl:nth-child(6){animation-delay:6.7s}.letter.svelte-vprakl.svelte-vprakl.svelte-vprakl:nth-child(7){animation-delay:7.05s}@media(min-width: 560px){.geo-square.svelte-vprakl.svelte-vprakl.svelte-vprakl{align-self:center;animation:svelte-vprakl-scale-in-hor-center var(--duration) cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards,\r\n				svelte-vprakl-scale-out-hor-left var(--duration) cubic-bezier(0.55, 0.085, 0.68, 0.53) forwards;animation-delay:1.5s, 5.5s;box-shadow:0 0 0 var(--default-padding) var(--yellow);display:grid;height:calc(var(--default-padding) * 16);margin:0 auto calc(var(--default-padding) * 4);opacity:0;position:relative;transition:color var(--duration);width:calc(var(--default-padding) * 30);z-index:var(--z-30)}.geo-square.svelte-vprakl img.svelte-vprakl.svelte-vprakl{animation:svelte-vprakl-scale-in-ver-center var(--duration) cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards,\r\n				svelte-vprakl-slit-out-vertical 1s ease-in forwards;animation-delay:2s, 4.5s;opacity:0;height:var(--full-h);transform:scale(1.75)}}@media only screen and (min-width: 760px){nav.svelte-vprakl ul.svelte-vprakl:nth-of-type(2) li.svelte-vprakl:nth-child(-n + 3){display:flex}nav.svelte-vprakl img.svelte-vprakl.svelte-vprakl{width:var(--logo-dimensions)}article.svelte-vprakl.svelte-vprakl.svelte-vprakl{flex:1}h2.svelte-vprakl.svelte-vprakl.svelte-vprakl{margin:0 auto}.panel.svelte-vprakl:nth-of-type(1) span.svelte-vprakl.svelte-vprakl{animation:svelte-vprakl-slide-in-top var(--duration) cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards}.panel.svelte-vprakl:nth-of-type(2) span.svelte-vprakl.svelte-vprakl{animation:svelte-vprakl-slide-in-top var(--duration) cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards}.panel.svelte-vprakl:nth-of-type(3) span.svelte-vprakl.svelte-vprakl{animation:svelte-vprakl-slide-in-top var(--duration) cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards}.panel.svelte-vprakl:nth-of-type(4) span.svelte-vprakl.svelte-vprakl{animation:svelte-vprakl-slide-in-top var(--duration) cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards}.panel.svelte-vprakl.svelte-vprakl.svelte-vprakl:nth-of-type(1){animation-delay:6.35s}.panel.svelte-vprakl:nth-of-type(1) span.svelte-vprakl.svelte-vprakl{animation-delay:6.7s}.panel.svelte-vprakl.svelte-vprakl.svelte-vprakl:nth-of-type(2){animation-delay:6.7s}.panel.svelte-vprakl:nth-of-type(2) span.svelte-vprakl.svelte-vprakl{animation-delay:7.05s}.panel.svelte-vprakl.svelte-vprakl.svelte-vprakl:nth-of-type(3){animation-delay:7.05s}.panel.svelte-vprakl:nth-of-type(3) span.svelte-vprakl.svelte-vprakl{animation-delay:7.4s}.panel.svelte-vprakl.svelte-vprakl.svelte-vprakl:nth-of-type(4){animation-delay:7.4s}.panel.svelte-vprakl:nth-of-type(4) span.svelte-vprakl.svelte-vprakl{animation-delay:7.75s}}@keyframes svelte-vprakl-scale-in-ver-center{0%{transform:scaleY(0);opacity:1}100%{transform:scaleY(1);opacity:1}}@keyframes svelte-vprakl-scale-in-hor-center{0%{transform:scaleX(0);opacity:1}100%{transform:scaleX(1);opacity:1}}@keyframes svelte-vprakl-slit-out-vertical{0%{transform:translateZ(0) rotateY(0);opacity:1}54%{transform:translateZ(-160px) rotateY(87deg);opacity:1}100%{transform:translateZ(-800px) rotateY(90deg);opacity:0}}@keyframes svelte-vprakl-bounce-in-fwd{0%{transform:scale(0);animation-timing-function:ease-in;opacity:0}38%{transform:scale(1);animation-timing-function:ease-out;opacity:1}55%{transform:scale(0.7);animation-timing-function:ease-in}72%{transform:scale(1);animation-timing-function:ease-out}81%{transform:scale(0.84);animation-timing-function:ease-in}89%{transform:scale(1);animation-timing-function:ease-out}95%{transform:scale(0.95);animation-timing-function:ease-in}100%{opacity:1;transform:scale(1);animation-timing-function:ease-out}}@keyframes svelte-vprakl-slide-in-top{0%{transform:translateY(-100rem);opacity:0}100%{transform:translateY(0);opacity:1}}@keyframes svelte-vprakl-scale-out-hor-left{0%{transform:scaleX(1);transform-origin:0 0;opacity:1}100%{transform:scaleX(0);transform-origin:0 0;opacity:1}}@keyframes svelte-vprakl-slide-in-left{0%{transform:translateX(-1000px);opacity:0}100%{transform:translateX(0);opacity:1}}@keyframes svelte-vprakl-slide-in-right{0%{transform:translateX(1000px);opacity:0}100%{transform:translateX(0);opacity:1}}@media(prefers-reduced-motion: reduce){.svelte-vprakl.svelte-vprakl.svelte-vprakl{transition:none;animation:none}}",
      map: null
    };
    Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      const panels = [
        {
          title: "Styles",
          img: "styles.jpg",
          icon: "",
          link: "styles"
        },
        {
          title: "Artists",
          img: "artist.jpg",
          icon: "",
          link: "artists"
        },
        {
          title: "Pieces",
          img: "pieces.jpg",
          icon: "",
          link: "pieces"
        },
        {
          title: "Slang",
          img: "slang.jpg",
          icon: "",
          link: "slang"
        }
      ];
      const links = [
        { title: "ABOUT", link: "/" },
        {
          title: "APPLICATION",
          // about
          link: "/"
        },
        { title: "SHOP", link: "/" },
        { title: "F.A.Q.", link: "/" },
        {
          title: "CONTACT",
          // faq
          link: ""
        }
      ];
      $$result.css.add(css$5);
      return `
<section class="min-h-screen svelte-vprakl"><nav class="w-full  svelte-vprakl"><ul class="svelte-vprakl"><li class="svelte-vprakl"><a href="/" class="link svelte-vprakl"><img src="./images/logo.svg" class=" svelte-vprakl" alt="Logo of boardgame: Graffiti Chronicles"></a></li></ul>

		<ul class="svelte-vprakl">${each(links, (link) => {
        return `<li class="svelte-vprakl"><a${add_attribute("href", link.link, 0)} class="font-graffity text-md md:text-3xl lg:text-4xl svelte-vprakl">${escape(link.title)}</a>
				</li>`;
      })}

			</ul></nav>
	<div class=" svelte-vprakl"><article class="svelte-vprakl"><ul class="panels svelte-vprakl">${each(panels, (panel) => {
        return `<li class="panel max-w-md lg:w-full svelte-vprakl">
						<a href="/" class="svelte-vprakl"><span class="font-graffity svelte-vprakl">${escape(panel.title)}

								
							</span></a>
						<img src="${"/images/hero/" + escape(panel.img, true)}" class="h-full w-full svelte-vprakl"${add_attribute("alt", panel.title, 0)}>
					</li>`;
      })}</ul>

			<h2 class="big-text svelte-vprakl"><span class="gradient-text letter svelte-vprakl">E</span>
				<span class="gradient-text letter svelte-vprakl">X</span>
				<span class="gradient-text letter svelte-vprakl">P</span>
				<span class="gradient-text letter svelte-vprakl">L</span>
				<span class="gradient-text letter svelte-vprakl">O</span>
				<span class="gradient-text letter svelte-vprakl">R</span>
				<span class="gradient-text letter svelte-vprakl">E</span></h2>

			<span class="geo-square svelte-vprakl"><img src="/images/gifs/your_welcome.gif" alt="image of graffity, graphic purpose only" class="svelte-vprakl"></span></article></div></section>



`;
    });
    Faq = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<div class="p-8"><div class="mt-12 rounded-lg bg-white p-4 py-8 shadow-xl"><h4 class="text-center lg:text-6xl font-bold uppercase tracking-widest text-black">FAQ</h4>
		<p class="mt-2 text-center text-sm text-gray-600">Here are some of the frequently asked questions
		</p>
		<div class="mt-12 space-y-12 px-2 xl:px-16"><a name="#faq"></a>
			${each(faqData, (faq) => {
        return `<div class="mt-4 flex"><div><div class="flex h-16 items-center border-l-4 border-black"><span class="px-4 text-4xl text-black font-graffity">Q.</span></div>
						<div class="flex h-16 items-center border-l-4 border-gray-400"><span class="px-4 text-4xl text-gray-400 font-graffity">A.</span>
						</div></div>
					<div><div class="flex h-16 items-center"><span class="text-lg font-bold text-black ">${escape(faq.question)}?</span></div>
						<div class="flex items-center py-2">${each(faq.answer, (answer) => {
          return `<p class="mb-1 text-gray-500">${escape(answer)}
								</p>`;
        })}
						</div></div>
				</div>`;
      })}</div></div></div>`;
    });
    css$4 = {
      code: ".wrapper.svelte-fyu46x.svelte-fyu46x{width:450px;overflow:hidden}@media(max-width: 560px){.wrapper.svelte-fyu46x.svelte-fyu46x{width:350px;overflow:hidden}}.overviewInfo.svelte-fyu46x.svelte-fyu46x,.productSpecifications.svelte-fyu46x.svelte-fyu46x{padding:24px}.productImage.svelte-fyu46x.svelte-fyu46x{position:absolute;max-width:400px;width:auto;height:280px;transform:rotate(-90deg) translate(-56px, 66px);transition:ease 2s all}.productImage.svelte-fyu46x img.svelte-fyu46x{width:100%;height:400px}",
      map: null
    };
    ArtistCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { extension } = $$props;
      if ($$props.extension === void 0 && $$bindings.extension && extension !== void 0)
        $$bindings.extension(extension);
      $$result.css.add(css$4);
      return `<div class="hover:delay-550 group mb-10 border-2 border-neutral-900 pt-4 hover:-translate-y-1 hover:scale-105 hover:border-yellow-400 hover:transition hover:duration-1000 hover:ease-in-out"><div class="wrapper mx-auto h-full svelte-fyu46x"><div class="overviewInfo  svelte-fyu46x"><div class="relative mb-14 flex h-[250px] flex-col justify-between "><div class="mb-3 text-xl"><span>Artists</span>

					<h3 class="group-hover:text-yellow-400">${escape(extension.artists.length)}</h3></div>
				<div class="mb-3 text-xl"><span>Relise</span>

					<h3 class="group-hover:text-yellow-400">${escape(extension.relise)}</h3></div>
				<div class="mb-3 text-xl"><span>Cards</span>

					<h3 class="group-hover:text-yellow-400">${escape(extension.cards)}</h3></div>

				${each(extension.features, (data) => {
        return `<div class="mb-3 text-xl"><span>${escape(data.title)}</span>

						<h3 class="group-hover:text-yellow-400">${escape(extension.subTitle)}</h3>
					</div>`;
      })}
				<div class="text-xl "><span>Country</span>

					<h3 class="group-hover:text-yellow-400">${escape(extension.country)}</h3></div>
				

				<div class="productImage svelte-fyu46x"><img src="${"/images/extensions/" + escape(extension.img, true)}" alt="product: boardgame graffiti chronicles image" class="svelte-fyu46x"></div></div></div>
		

		<div class="productSpecifications h-full group-hover:bg-yellow-400 group-hover:transition group-hover:duration-1000 group-hover:ease-in-out svelte-fyu46x"><h1 class="mt-6 mb-2 text-2xl group-hover:text-black">${escape(extension.title)}</h1>
			<p class="mb-2 text-zinc-700 group-hover:text-black">This extension includes cards with the art of graffiti artists from the country of <a href="/" target="_blank" class="font-bold text-yellow-600 underline group-hover:text-black">${escape(extension.country)}</a>.
			</p>

			<p class="mb-10 text-zinc-700 group-hover:text-black">List of graffiti artists in this extension: <br>
				${each(extension.artists, (artist) => {
        return `<span class="mr-1"><a class="font-bold text-yellow-600 underline group-hover:text-black" target="_blank"${add_attribute("href", artist.link, 0)}>${escape(artist.nickName)},
						</a></span>`;
      })}</p>

			<div class="flex flex-row justify-between "><h3 class="font-dollar text-6xl text-yellow-400 group-hover:text-black">$ <span class="font-graffity text-yellow-400 group-hover:text-black">${escape(extension.price)}</span></h3>

				<button class="font-graffity mb-6 bg-yellow-400 px-3 py-5 text-2xl text-black group-hover:bg-black group-hover:text-yellow-400">Buy Now</button></div></div>
		</div>
</div>`;
    });
    css$3 = {
      code: ".inside.svelte-hzwoah.svelte-hzwoah{height:440px;width:310px;background:transparent;transition:border 1s;position:relative}.card.svelte-hzwoah.svelte-hzwoah{height:450px;width:320px;transition:background 0.8s;overflow:hidden;background:#000;box-shadow:0 70px 63px -60px #000;display:flex;justify-content:center;align-items:center;position:relative}.card0.svelte-hzwoah.svelte-hzwoah{background:url('/images/social/oleg_medvedev.png') center center no-repeat;background-size:350px}.wrap.svelte-hzwoah:hover .card0.svelte-hzwoah{background:url('/images/social/oleg_medvedev.png') left center no-repeat;background-size:600px}.wrap.svelte-hzwoah:hover .fa.svelte-hzwoah{opacity:1}.fa.svelte-hzwoah.svelte-hzwoah{opacity:0;transition:opacity 1s}.icons.svelte-hzwoah.svelte-hzwoah{position:absolute;left:7%;height:130px;top:226px;width:50px;display:flex;flex-direction:column;align-items:center;justify-content:space-around}",
      map: null
    };
    ProfileCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      const socialLinks = [
        {
          title: "Instagram",
          link: "",
          img: "instagram.png"
        },
        {
          title: "Facebook",
          link: "",
          img: "facebook.png"
        }
      ];
      $$result.css.add(css$3);
      return `
<div class="wrap hover:delay-550 group border-2 border-neutral-900 py-4 px-8 hover:-translate-y-1 hover:scale-105 hover:border-yellow-400 hover:transition hover:duration-1000 hover:ease-in-out svelte-hzwoah"><div class="mb-2 "><span class="text-xs font-bold uppercase tracking-widest text-yellow-600">Author</span>
		<a name="creator"></a>
		<h2 class="mb-0 mt-2 text-4xl text-yellow-400">Oleg <br>Medvedev</h2>
		<a href="https://www.linkedin.com/in/oleg-darkdev" class="underline" target="_blank">@oleg_darkdev</a></div>

	<div class="mb-1"><div class="card0 card svelte-hzwoah"><div class="inside  svelte-hzwoah"><div class="icons svelte-hzwoah">${each(socialLinks, (social) => {
        return `<a class="fa h-24 w-24 hover:-translate-y-1 hover:scale-110 hover:transition hover:duration-1000 hover:ease-in-out svelte-hzwoah"${add_attribute("href", social.link, 0)} target="_blank"><img src="${"/images/social/" + escape(social.img, true)}" class="h-full w-full" alt="${"Llogotype of " + escape(social.title, true)}">
						</a>`;
      })}</div></div></div></div>
</div>`;
    });
    css$2 = {
      code: ".wrapper.svelte-1gdh68.svelte-1gdh68{width:350px;overflow:hidden}.overviewInfo.svelte-1gdh68.svelte-1gdh68,.productSpecifications.svelte-1gdh68.svelte-1gdh68{padding:24px}.productImage.svelte-1gdh68.svelte-1gdh68{position:absolute;min-width:400px;width:auto;height:230px;transform:rotate(-90deg) translate(-56px, 66px);transition:ease 2s all}.productImage.svelte-1gdh68 img.svelte-1gdh68{width:100%;height:auto}.checkoutButton.svelte-1gdh68.svelte-1gdh68{display:flex;width:100%;overflow:hidden;box-shadow:-2px -2px 2px 0px rgba(80, 80, 80, 0.1), 2px 2px 3px 0px rgba(12, 12, 12, 0.3),\r\n			inset 0px 0px 0px 2px rgba(80, 80, 80, 0.2);margin-top:30px;justify-content:space-between;align-items:center}",
      map: null
    };
    ReliseCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      const reliseData = [
        { title: "release", subTitle: "Fall 2025" },
        { title: "complect", subTitle: "BOX + APP" },
        { title: "", subTitle: "" }
      ];
      $$result.css.add(css$2);
      return `<div class="hover:delay-550 group mb-10 border-2 border-neutral-900 py-4 hover:-translate-y-1 hover:scale-105 hover:border-yellow-400 hover:transition hover:duration-1000 hover:ease-in-out"><div class="wrapper mx-auto svelte-1gdh68"><div class="overviewInfo  svelte-1gdh68"><div class="relative mb-14 flex flex-col justify-between ">${each(reliseData, (data) => {
        return `
					<div class="mb-3 text-xl"><span>${escape(data.title)}</span>

						<h3 class="group-hover:text-yellow-400">${escape(data.subTitle)}</h3>
					</div>`;
      })}
				<div class="-mt-2 mb-4 text-xl"><span>PRICE</span>

					<h3 class="font-dollar -mt-2 text-3xl group-hover:text-yellow-400 ">$ <span class="font-graffity">50</span></h3></div>

				<div class="productImage svelte-1gdh68"><img src="/images/character.png" alt="product: boardgame graffiti chronicles image" class="svelte-1gdh68"></div></div></div>
		

		<div class="productSpecifications group-hover:bg-yellow-400 group-hover:transition group-hover:duration-1000 group-hover:ease-in-out svelte-1gdh68"><h1 class="mt-10 text-2xl group-hover:text-black">Lorem ipsum dolor</h1>
			<p class="group-hover:text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam.
			</p>

			<div class="checkoutButton bg-yellow-400 px-3 py-4 text-black group-hover:bg-black group-hover:text-yellow-400 svelte-1gdh68"><button class="flex flex-row items-center justify-center"><p class="font-dollar mr-4 text-4xl group-hover:text-yellow-400">$ <span class="font-graffity group-hover:text-yellow-400">50</span></p>

					<span class="font-graffity text-3xl">Pre-order now</span></button></div></div>
		</div>
</div>`;
    });
    About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      const socialLinks = [
        {
          title: "Instagram",
          link: "",
          img: "instagram.png"
        },
        {
          title: "Facebook",
          link: "",
          img: "facebook.png"
        },
        {
          title: "Youtube",
          link: "",
          img: "youtube.png"
        }
      ];
      return `<div class="mx-auto w-full px-5 lg:pb-24 xl:pb-24 lg:px-32"><div class="mx-auto flex max-w-5xl flex-col-reverse lg:flex-row"><div class="m-auto mt-12 w-full max-w-sm "><div class="flex w-full flex-col">${validate_component(ReliseCard, "ReliseCard").$$render($$result, {}, {}, {})}

				${validate_component(ProfileCard, "ProfileCard").$$render($$result, {}, {}, {})}</div></div>

		
		<div class="hover:delay-550 prose-md group prose mt-12 w-full w-full border-2 border-neutral-900 p-4 hover:-translate-y-1 hover:scale-105 hover:border-yellow-400 hover:bg-black hover:transition hover:duration-1000 hover:ease-in-out"><div class="mb-5 border-b border-gray-200"><div class="-mt-2 flex flex-wrap items-baseline">
					<p class="mt-1 ml-2">About the boardgame: <span class="text-yellow-600 font-bold">Graffity chronicles</span></p></div></div>
			<a name="#about"></a>
			<h1>Lorem ipsum is placeholder text.</h1>
			<p>Through the lens of a set of certitudes based on deductions founded on false premise.</p>
			<p>Turd polishing put a record on and see who dances, dog and pony show, nor one-sheet. Ensure
				to follow requirements when developing solutions three-martini lunch, that jerk from finance
				really threw me under the bus. Bob called an all-hands this afternoon.
			</p>
			<p>We&#39;ve got kpis for that this is a no-brainer viral engagement pixel pushing. Run it up the
				flagpole please use &quot;solutionise&quot; instead of solution ideas! :) dunder mifflin form without
				content style without meaning target rich environment. Three-martini lunch. Get buy-in
				prioritize these line items, or deliverables yet back to the drawing-board let&#39;s put a pin
				in that, close the loop. Manage expectations product market fit win-win-win. The horse is
				out of the barn poop, but can you put it on my calendar? but drink from the firehose, but
				quick-win.
			</p>
			<h1>&quot;Focus on the customer journey&quot;</h1>
			<p>If you could do that, that would be great this is a no-brainer, or Q1 regroup. Groom the
				backlog what do you feel you would bring to the table if you were hired for this position.
				Back of the net. Scope creep can you slack it to me? shotgun approach build on a culture of
				contribution and inclusion please advise soonest.
			</p>
			<h3>Is a no-brainer, or Q1 regroup.</h3>
			<p>Gain traction make it more corporate please we need to harvest synergy effects not enough
				bandwidth, and we want to empower the team with the right tools and guidance to uplevel our
				craft and build better nor low-hanging fruit the right info at the right time to the right
				people.
			</p>


			<div class="mt-4 mb-8"><span class="">More content on our social media:</span>

				<div class="-mt-8 flex flex-row flex-wrap">${each(socialLinks, (social) => {
        return `<a class="h-32 w-32 hover:-translate-y-1 hover:scale-110 hover:transition hover:duration-1000 hover:ease-in-out"${add_attribute("href", social.link, 0)} target="_blank"><img src="${"/images/social/" + escape(social.img, true)}" class="h-full w-full" alt="${"Llogotype of " + escape(social.title, true)}">
						</a>`;
      })}</div></div></div></div>
</div>`;
    });
    css$1 = {
      code: ".wrap-text.svelte-1orfzkm h2.svelte-1orfzkm{font-size:16rem;filter:opacity(0.5);line-height:1.3}@media(max-width: 560px){.wrap-text.svelte-1orfzkm h2.svelte-1orfzkm{display:none}}.nft.svelte-1orfzkm.svelte-1orfzkm{-webkit-user-select:none;-moz-user-select:none;user-select:none;margin:5rem auto;box-shadow:0 7px 20px 5px #00000088;border-radius:0.7rem;backdrop-filter:blur(7px);-webkit-backdrop-filter:blur(7px);overflow:hidden;transition:0.5s all}.nft.svelte-1orfzkm ins.svelte-1orfzkm{text-decoration:none}.nft.svelte-1orfzkm .main.svelte-1orfzkm{display:flex;flex-direction:column;width:90%;padding:1rem}.nft.svelte-1orfzkm .main .description.svelte-1orfzkm{color:#a89ec9}.nft.svelte-1orfzkm .main .tokenInfo .price ins.svelte-1orfzkm{margin-left:-0.3rem;margin-right:0.5rem}.nft.svelte-1orfzkm .main .tokenInfo .duration ins.svelte-1orfzkm{margin:0.5rem;margin-bottom:0.4rem}.nft.svelte-1orfzkm .main .creator ins.svelte-1orfzkm{color:#a89ec9;text-decoration:none}.nft.svelte-1orfzkm.svelte-1orfzkm:hover{box-shadow:0 7px 50px 10px #000000aa;transform:scale(1.015);filter:brightness(1.3)}.nft.svelte-1orfzkm:hover .svelte-1orfzkm::before{filter:brightness(0.5);top:-100%;left:200%}",
      map: null
    };
    AntySystemsProject = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css$1);
      return `<section class="wrap-text md:my-40 lg:my-40 xl:my-40 svelte-1orfzkm">
	<div class="relative my-0 hover:border-yellow-400 hover:transition hover:duration-1000 hover:ease-in-out md:my-20 lg:my-20 xl:my-20"><h2 class="absolute -inset-y-60 z-0 text-center  svelte-1orfzkm">Antisystem boardgames</h2>

		<div class="border-1 nft relative z-10 max-w-2xl border-neutral-900 hover:border-yellow-400  svelte-1orfzkm"><div class="main svelte-1orfzkm">
				<h3 class="mb-2 text-4xl svelte-1orfzkm">It&#39;s more than just a boardgame</h3>
				<p class="description mb-1 svelte-1orfzkm">This educational board game is part of a series of board games dedicated to the various
					anti-systemic movements and cultures that have resulted from state systems.
				</p>
				<span class="mb-6 svelte-1orfzkm"><ins class="svelte-1orfzkm">Creation of</ins> <a class="text-yellow-400 underline svelte-1orfzkm" href="">44Games</a>, by
					<a class="text-yellow-400 underline svelte-1orfzkm" href="#creator">Oleg Medvedev</a></span>
				<a href="#" class="text-tellow-500 inline-flex items-center font-semibold hover:text-yellow-400 md:mb-2 lg:mb-0 svelte-1orfzkm" title="read more">Learn More about antisystems boardgames
					<svg class="ml-2 h-4 w-4 svelte-1orfzkm" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path fill="none" d="M0 0h24v24H0z" class="svelte-1orfzkm"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" class="svelte-1orfzkm"></path></svg></a></div></div></div>
</section>`;
    });
    ArtistsSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let showFull = false;
      let $$settled;
      let $$rendered;
      do {
        $$settled = true;
        $$rendered = `<section class="my-20 flex min-h-screen w-full flex-col items-center justify-center pb-20 "><h2 class="font-graffity title max-w-xl text-center text-3xl lg:text-6xl">Artists by countries
	</h2>

	<a name="artists"></a>

	<div class="flex w-8/12 w-full flex-row flex-wrap lg:justify-between xl:justify-between justify-center ">${each(showFull ? artistExtensionData : artistExtensionData.slice(0, 4), (extension) => {
          return `${validate_component(ArtistCard, "ArtistCard").$$render($$result, { extension }, {}, {})}`;
        })}</div>

	${validate_component(ShowMoreDataBtn, "ShowMoreDataBtn").$$render(
          $$result,
          {
            link: "#artists",
            title: "Extensions",
            showFull
          },
          {
            showFull: ($$value) => {
              showFull = $$value;
              $$settled = false;
            }
          },
          {}
        )}</section>`;
      } while (!$$settled);
      return $$rendered;
    });
    css2 = {
      code: "@media(max-width: 560px){.slider-wrap.svelte-eygtdv.svelte-eygtdv{display:none}}.container.svelte-eygtdv.svelte-eygtdv{position:relative;overflow:hidden}.sidebar.svelte-eygtdv.svelte-eygtdv{width:35%;position:absolute;top:0;left:0;transition:transform 0.5s ease-in-out}.sidebar.svelte-eygtdv>div.svelte-eygtdv{display:flex;flex-direction:column;align-items:start;justify-content:start}.main-slide.svelte-eygtdv.svelte-eygtdv{position:absolute;top:0;left:35%;transition:transform 0.5s ease-in-out}.main-slide.svelte-eygtdv>div.svelte-eygtdv{background-repeat:no-repeat;background-size:cover;background-position:center center;height:100%;width:100%}button.svelte-eygtdv.svelte-eygtdv{border:none;color:#aaa;cursor:pointer;font-size:16px;padding:15px}button.svelte-eygtdv.svelte-eygtdv:hover{color:#222}button.svelte-eygtdv.svelte-eygtdv:focus{outline:none}.container.svelte-eygtdv .controls button.svelte-eygtdv{position:absolute;left:35%;top:50%;z-index:100}.container.svelte-eygtdv .controls .down-button.svelte-eygtdv{transform:translateX(-100%);border-top-left-radius:5px;border-bottom-left-radius:5px}.container.svelte-eygtdv .controls .up-button.svelte-eygtdv{transform:translateY(-100%);border-top-right-radius:5px;border-bottom-right-radius:5px}",
      map: null
    };
    VerticalSlider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      const slides = [
        {
          title: "Lorem ",
          subTitle: "Lorem ipsum is",
          desc: [
            "Lorem ipsum is placeholder text commonly used in the graphic.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
            ""
          ],
          img: "https://images.unsplash.com/photo-1580052305579-798aba758a1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        },
        {
          title: "Lorem ",
          subTitle: "Lorem ipsum is",
          desc: [
            "Lorem ipsum is placeholder text commonly used in the graphic.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
            ""
          ],
          img: "https://images.unsplash.com/photo-1607165697276-326e7955b6e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
        },
        {
          title: "Lorem ",
          subTitle: "Lorem ipsum is",
          desc: [
            "Lorem ipsum is placeholder text commonly used in the graphic.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
            ""
          ],
          img: "https://images.unsplash.com/photo-1604716053460-3f66248bf8de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        },
        {
          title: "Lorem ",
          subTitle: "Lorem ipsum is",
          desc: [
            "Lorem ipsum is placeholder text commonly used in the graphic.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
            ""
          ],
          img: "https://images.unsplash.com/photo-1536639335969-19c9bfc0a4c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        },
        {
          title: "Lorem ",
          subTitle: "Lorem ipsum is",
          desc: [
            "Lorem ipsum is placeholder text commonly used in the graphic.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
            ""
          ],
          img: "https://images.unsplash.com/photo-1487452066049-a710f7296400?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
        }
      ];
      $$result.css.add(css2);
      return `<section class="slider-wrap min-h-screen w-full  svelte-eygtdv"><h2 class="mt-20 mb-6 w-full text-center lg:text-6xl">Very useful app</h2>

	<div class="container mb-20 flex h-full w-full flex-col svelte-eygtdv"><a name="#app"></a>
		<div class="h-screen "><div class="sidebar h-full w-full svelte-eygtdv">${each(slides, (slide) => {
        return `<div class="prose h-full px-6 pt-8 text-left svelte-eygtdv"><h3 class="text-left text-4xl">${escape(slide.title)}</h3>
						<div class="mb-2 w-full border-b border-gray-200"><div class="-mt-2 flex flex-wrap items-baseline"><span class="text-left ">${escape(slide.subTitle)}</span>
								<p class="mt-0 -mb-2 ml-2">Transitions</p>
							</div></div>
						${each(slide.desc, (desc) => {
          return `<p class="-mb-4">${escape(desc)}</p>`;
        })}
					</div>`;
      })}</div>
			<div class="main-slide h-full w-full svelte-eygtdv">${each(slides, (slide) => {
        return `<div class="hover:delay-550 w-full hover:-translate-y-1 hover:scale-105 hover:transition hover:duration-1000 hover:ease-in-out  svelte-eygtdv" style="${"background-image: url(" + escape(slide.img, true) + ");"}"></div>`;
      })}</div>
			<div class="controls"><button class="down-button bg-white svelte-eygtdv"><i class="fas fa-arrow-down"></i></button>
				<button class="up-button bg-white svelte-eygtdv"><i class="fas fa-arrow-up"></i></button></div></div></div>
</section>`;
    });
    Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `${$$result.head += `<!-- HEAD_svelte-1aoday4_START -->${$$result.title = `<title>Graffity chronicles boardgame</title>`, ""}<!-- HEAD_svelte-1aoday4_END -->`, ""}

${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}

${validate_component(About, "About").$$render($$result, {}, {}, {})}

${validate_component(StylesList, "StylesList").$$render($$result, {}, {}, {})}


	${validate_component(VerticalSlider, "VerticalSlider").$$render($$result, {}, {}, {})}

${validate_component(ArtistsSection, "ArtistsSection").$$render($$result, {}, {}, {})}

${validate_component(AntySystemsProject, "AntySystemsProject").$$render($$result, {}, {}, {})}

${validate_component(Faq, "Faq").$$render($$result, {}, {}, {})}`;
    });
  }
});

// .svelte-kit/output/server/nodes/2.js
var __exports3 = {};
__export(__exports3, {
  component: () => component3,
  fonts: () => fonts3,
  imports: () => imports3,
  index: () => index3,
  stylesheets: () => stylesheets3,
  universal: () => page_ts_exports,
  universal_id: () => universal_id
});
var index3, component_cache3, component3, universal_id, imports3, stylesheets3, fonts3;
var init__3 = __esm({
  ".svelte-kit/output/server/nodes/2.js"() {
    init_page_ts();
    index3 = 2;
    component3 = async () => component_cache3 ?? (component_cache3 = (await Promise.resolve().then(() => (init_page_svelte(), page_svelte_exports))).default);
    universal_id = "src/routes/+page.ts";
    imports3 = ["_app/immutable/nodes/2.f3207c2f.js", "_app/immutable/chunks/index.7225970f.js"];
    stylesheets3 = ["_app/immutable/assets/2.6f7aec5a.css"];
    fonts3 = [];
  }
});

// .svelte-kit/output/server/chunks/internal.js
init_chunks();
var base = "";
var assets = base;
var initial = { base, assets };
function reset() {
  base = initial.base;
  assets = initial.assets;
}
var public_env = {};
function set_private_env(environment) {
}
function set_public_env(environment) {
  public_env = environment;
}
function afterUpdate() {
}
var Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page: page2 } = $$props;
  let { constructors } = $$props;
  let { components = [] } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page2 !== void 0)
    $$bindings.page(page2);
  if ($$props.constructors === void 0 && $$bindings.constructors && constructors !== void 0)
    $$bindings.constructors(constructors);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0)
    $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0)
    $$bindings.data_1(data_1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      stores.page.set(page2);
    }
    $$rendered = `



${constructors[1] ? `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(constructors[1] || missing_component, "svelte:component").$$render(
            $$result,
            { data: data_1, form, this: components[1] },
            {
              this: ($$value) => {
                components[1] = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}` : `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, form, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {}
    )}`}

${``}`;
  } while (!$$settled);
  return $$rendered;
});
var options = {
  app_template_contains_nonce: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  track_server_fetches: false,
  embedded: false,
  env_public_prefix: "PUBLIC_",
  env_private_prefix: "",
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root: Root,
  service_worker: false,
  templates: {
    app: ({ head, body, assets: assets2, nonce, env }) => '<!DOCTYPE html>\r\n<html lang="en" data-theme="dawn">\r\n	<head>\r\n		<meta charset="utf-8" />\r\n		<link rel="icon" href="' + assets2 + '/favicon.png" />\r\n		<meta name="viewport" content="width=device-width, initial-scale=1" />\r\n		' + head + "\r\n	</head>\r\n	<body >\r\n		<div>" + body + "</div>\r\n	</body>\r\n</html>\r\n",
    error: ({ status, message }) => '<!doctype html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family:
					system-ui,
					-apple-system,
					BlinkMacSystemFont,
					'Segoe UI',
					Roboto,
					Oxygen,
					Ubuntu,
					Cantarell,
					'Open Sans',
					'Helvetica Neue',
					sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
				margin: 0;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
  },
  version_hash: "n3r65a"
};
function get_hooks() {
  return {};
}

// node_modules/devalue/src/utils.js
var escaped = {
  "<": "\\u003C",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var DevalueError = class extends Error {
  /**
   * @param {string} message
   * @param {string[]} keys
   */
  constructor(message, keys) {
    super(message);
    this.name = "DevalueError";
    this.path = keys.join("");
  }
};
function is_primitive(thing) {
  return Object(thing) !== thing;
}
var object_proto_names = /* @__PURE__ */ Object.getOwnPropertyNames(
  Object.prototype
).sort().join("\0");
function is_plain_object(thing) {
  const proto = Object.getPrototypeOf(thing);
  return proto === Object.prototype || proto === null || Object.getOwnPropertyNames(proto).sort().join("\0") === object_proto_names;
}
function get_type(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function get_escaped_char(char) {
  switch (char) {
    case '"':
      return '\\"';
    case "<":
      return "\\u003C";
    case "\\":
      return "\\\\";
    case "\n":
      return "\\n";
    case "\r":
      return "\\r";
    case "	":
      return "\\t";
    case "\b":
      return "\\b";
    case "\f":
      return "\\f";
    case "\u2028":
      return "\\u2028";
    case "\u2029":
      return "\\u2029";
    default:
      return char < " " ? `\\u${char.charCodeAt(0).toString(16).padStart(4, "0")}` : "";
  }
}
function stringify_string(str) {
  let result = "";
  let last_pos = 0;
  const len = str.length;
  for (let i = 0; i < len; i += 1) {
    const char = str[i];
    const replacement = get_escaped_char(char);
    if (replacement) {
      result += str.slice(last_pos, i) + replacement;
      last_pos = i + 1;
    }
  }
  return `"${last_pos === 0 ? str : result + str.slice(last_pos)}"`;
}

// node_modules/devalue/src/uneval.js
var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
var unsafe_chars = /[<\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
function uneval(value, replacer) {
  const counts = /* @__PURE__ */ new Map();
  const keys = [];
  const custom = /* @__PURE__ */ new Map();
  function walk(thing) {
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys);
    }
    if (!is_primitive(thing)) {
      if (counts.has(thing)) {
        counts.set(thing, counts.get(thing) + 1);
        return;
      }
      counts.set(thing, 1);
      if (replacer) {
        const str2 = replacer(thing);
        if (typeof str2 === "string") {
          custom.set(thing, str2);
          return;
        }
      }
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "BigInt":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach((value2, i) => {
            keys.push(`[${i}]`);
            walk(value2);
            keys.pop();
          });
          break;
        case "Set":
          Array.from(thing).forEach(walk);
          break;
        case "Map":
          for (const [key2, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key2) ? stringify_primitive(key2) : "..."})`
            );
            walk(value2);
            keys.pop();
          }
          break;
        default:
          if (!is_plain_object(thing)) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys
            );
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys
            );
          }
          for (const key2 in thing) {
            keys.push(`.${key2}`);
            walk(thing[key2]);
            keys.pop();
          }
      }
    }
  }
  walk(value);
  const names = /* @__PURE__ */ new Map();
  Array.from(counts).filter((entry) => entry[1] > 1).sort((a, b) => b[1] - a[1]).forEach((entry, i) => {
    names.set(entry[0], get_name(i));
  });
  function stringify2(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (is_primitive(thing)) {
      return stringify_primitive(thing);
    }
    if (custom.has(thing)) {
      return custom.get(thing);
    }
    const type = get_type(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return `Object(${stringify2(thing.valueOf())})`;
      case "RegExp":
        return `new RegExp(${stringify_string(thing.source)}, "${thing.flags}")`;
      case "Date":
        return `new Date(${thing.getTime()})`;
      case "Array":
        const members = (
          /** @type {any[]} */
          thing.map(
            (v, i) => i in thing ? stringify2(v) : ""
          )
        );
        const tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return `[${members.join(",")}${tail}]`;
      case "Set":
      case "Map":
        return `new ${type}([${Array.from(thing).map(stringify2).join(",")}])`;
      default:
        const obj = `{${Object.keys(thing).map((key2) => `${safe_key(key2)}:${stringify2(thing[key2])}`).join(",")}}`;
        const proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return Object.keys(thing).length > 0 ? `Object.assign(Object.create(null),${obj})` : `Object.create(null)`;
        }
        return obj;
    }
  }
  const str = stringify2(value);
  if (names.size) {
    const params = [];
    const statements = [];
    const values = [];
    names.forEach((name, thing) => {
      params.push(name);
      if (custom.has(thing)) {
        values.push(
          /** @type {string} */
          custom.get(thing)
        );
        return;
      }
      if (is_primitive(thing)) {
        values.push(stringify_primitive(thing));
        return;
      }
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values.push(`Object(${stringify2(thing.valueOf())})`);
          break;
        case "RegExp":
          values.push(thing.toString());
          break;
        case "Date":
          values.push(`new Date(${thing.getTime()})`);
          break;
        case "Array":
          values.push(`Array(${thing.length})`);
          thing.forEach((v, i) => {
            statements.push(`${name}[${i}]=${stringify2(v)}`);
          });
          break;
        case "Set":
          values.push(`new Set`);
          statements.push(
            `${name}.${Array.from(thing).map((v) => `add(${stringify2(v)})`).join(".")}`
          );
          break;
        case "Map":
          values.push(`new Map`);
          statements.push(
            `${name}.${Array.from(thing).map(([k, v]) => `set(${stringify2(k)}, ${stringify2(v)})`).join(".")}`
          );
          break;
        default:
          values.push(
            Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}"
          );
          Object.keys(thing).forEach((key2) => {
            statements.push(
              `${name}${safe_prop(key2)}=${stringify2(thing[key2])}`
            );
          });
      }
    });
    statements.push(`return ${str}`);
    return `(function(${params.join(",")}){${statements.join(
      ";"
    )}}(${values.join(",")}))`;
  } else {
    return str;
  }
}
function get_name(num) {
  let name = "";
  do {
    name = chars[num % chars.length] + name;
    num = ~~(num / chars.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? `${name}0` : name;
}
function escape_unsafe_char(c) {
  return escaped[c] || c;
}
function escape_unsafe_chars(str) {
  return str.replace(unsafe_chars, escape_unsafe_char);
}
function safe_key(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? key2 : escape_unsafe_chars(JSON.stringify(key2));
}
function safe_prop(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? `.${key2}` : `[${escape_unsafe_chars(JSON.stringify(key2))}]`;
}
function stringify_primitive(thing) {
  if (typeof thing === "string")
    return stringify_string(thing);
  if (thing === void 0)
    return "void 0";
  if (thing === 0 && 1 / thing < 0)
    return "-0";
  const str = String(thing);
  if (typeof thing === "number")
    return str.replace(/^(-)?0\./, "$1.");
  if (typeof thing === "bigint")
    return thing + "n";
  return str;
}

// node_modules/devalue/src/constants.js
var UNDEFINED = -1;
var HOLE = -2;
var NAN = -3;
var POSITIVE_INFINITY = -4;
var NEGATIVE_INFINITY = -5;
var NEGATIVE_ZERO = -6;

// node_modules/devalue/src/stringify.js
function stringify(value, reducers) {
  const stringified = [];
  const indexes = /* @__PURE__ */ new Map();
  const custom = [];
  for (const key2 in reducers) {
    custom.push({ key: key2, fn: reducers[key2] });
  }
  const keys = [];
  let p = 0;
  function flatten(thing) {
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys);
    }
    if (indexes.has(thing))
      return indexes.get(thing);
    if (thing === void 0)
      return UNDEFINED;
    if (Number.isNaN(thing))
      return NAN;
    if (thing === Infinity)
      return POSITIVE_INFINITY;
    if (thing === -Infinity)
      return NEGATIVE_INFINITY;
    if (thing === 0 && 1 / thing < 0)
      return NEGATIVE_ZERO;
    const index5 = p++;
    indexes.set(thing, index5);
    for (const { key: key2, fn } of custom) {
      const value2 = fn(thing);
      if (value2) {
        stringified[index5] = `["${key2}",${flatten(value2)}]`;
        return index5;
      }
    }
    let str = "";
    if (is_primitive(thing)) {
      str = stringify_primitive2(thing);
    } else {
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          str = `["Object",${stringify_primitive2(thing)}]`;
          break;
        case "BigInt":
          str = `["BigInt",${thing}]`;
          break;
        case "Date":
          str = `["Date","${thing.toISOString()}"]`;
          break;
        case "RegExp":
          const { source, flags } = thing;
          str = flags ? `["RegExp",${stringify_string(source)},"${flags}"]` : `["RegExp",${stringify_string(source)}]`;
          break;
        case "Array":
          str = "[";
          for (let i = 0; i < thing.length; i += 1) {
            if (i > 0)
              str += ",";
            if (i in thing) {
              keys.push(`[${i}]`);
              str += flatten(thing[i]);
              keys.pop();
            } else {
              str += HOLE;
            }
          }
          str += "]";
          break;
        case "Set":
          str = '["Set"';
          for (const value2 of thing) {
            str += `,${flatten(value2)}`;
          }
          str += "]";
          break;
        case "Map":
          str = '["Map"';
          for (const [key2, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key2) ? stringify_primitive2(key2) : "..."})`
            );
            str += `,${flatten(key2)},${flatten(value2)}`;
          }
          str += "]";
          break;
        default:
          if (!is_plain_object(thing)) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys
            );
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys
            );
          }
          if (Object.getPrototypeOf(thing) === null) {
            str = '["null"';
            for (const key2 in thing) {
              keys.push(`.${key2}`);
              str += `,${stringify_string(key2)},${flatten(thing[key2])}`;
              keys.pop();
            }
            str += "]";
          } else {
            str = "{";
            let started = false;
            for (const key2 in thing) {
              if (started)
                str += ",";
              started = true;
              keys.push(`.${key2}`);
              str += `${stringify_string(key2)}:${flatten(thing[key2])}`;
              keys.pop();
            }
            str += "}";
          }
      }
    }
    stringified[index5] = str;
    return index5;
  }
  const index4 = flatten(value);
  if (index4 < 0)
    return `${index4}`;
  return `[${stringified.join(",")}]`;
}
function stringify_primitive2(thing) {
  const type = typeof thing;
  if (type === "string")
    return stringify_string(thing);
  if (thing instanceof String)
    return stringify_string(thing.toString());
  if (thing === void 0)
    return UNDEFINED.toString();
  if (thing === 0 && 1 / thing < 0)
    return NEGATIVE_ZERO.toString();
  if (type === "bigint")
    return `["BigInt","${thing}"]`;
  return String(thing);
}

// .svelte-kit/output/server/index.js
init_chunks();
var import_cookie = __toESM(require_cookie(), 1);
var set_cookie_parser = __toESM(require_set_cookie(), 1);
var DEV = false;
var SVELTE_KIT_ASSETS = "/_svelte_kit_assets";
var ENDPOINT_METHODS = ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"];
var PAGE_METHODS = ["GET", "POST", "HEAD"];
function negotiate(accept, types) {
  const parts = [];
  accept.split(",").forEach((str, i) => {
    const match = /([^/]+)\/([^;]+)(?:;q=([0-9.]+))?/.exec(str);
    if (match) {
      const [, type, subtype, q = "1"] = match;
      parts.push({ type, subtype, q: +q, i });
    }
  });
  parts.sort((a, b) => {
    if (a.q !== b.q) {
      return b.q - a.q;
    }
    if (a.subtype === "*" !== (b.subtype === "*")) {
      return a.subtype === "*" ? 1 : -1;
    }
    if (a.type === "*" !== (b.type === "*")) {
      return a.type === "*" ? 1 : -1;
    }
    return a.i - b.i;
  });
  let accepted;
  let min_priority = Infinity;
  for (const mimetype of types) {
    const [type, subtype] = mimetype.split("/");
    const priority = parts.findIndex(
      (part) => (part.type === type || part.type === "*") && (part.subtype === subtype || part.subtype === "*")
    );
    if (priority !== -1 && priority < min_priority) {
      accepted = mimetype;
      min_priority = priority;
    }
  }
  return accepted;
}
function is_content_type(request, ...types) {
  const type = request.headers.get("content-type")?.split(";", 1)[0].trim() ?? "";
  return types.includes(type.toLowerCase());
}
function is_form_content_type(request) {
  return is_content_type(
    request,
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain"
  );
}
var HttpError = class {
  /**
   * @param {number} status
   * @param {{message: string} extends App.Error ? (App.Error | string | undefined) : App.Error} body
   */
  constructor(status, body) {
    this.status = status;
    if (typeof body === "string") {
      this.body = { message: body };
    } else if (body) {
      this.body = body;
    } else {
      this.body = { message: `Error: ${status}` };
    }
  }
  toString() {
    return JSON.stringify(this.body);
  }
};
var Redirect = class {
  /**
   * @param {300 | 301 | 302 | 303 | 304 | 305 | 306 | 307 | 308} status
   * @param {string} location
   */
  constructor(status, location) {
    this.status = status;
    this.location = location;
  }
};
var NotFound = class extends Error {
  /**
   * @param {string} pathname
   */
  constructor(pathname) {
    super();
    this.status = 404;
    this.message = `Not found: ${pathname}`;
  }
};
var ActionFailure = class {
  /**
   * @param {number} status
   * @param {T} [data]
   */
  constructor(status, data) {
    this.status = status;
    this.data = data;
  }
};
function exec(match, params, matchers) {
  const result = {};
  const values = match.slice(1);
  const values_needing_match = values.filter((value) => value !== void 0);
  let buffered = 0;
  for (let i = 0; i < params.length; i += 1) {
    const param = params[i];
    let value = values[i - buffered];
    if (param.chained && param.rest && buffered) {
      value = values.slice(i - buffered, i + 1).filter((s2) => s2).join("/");
      buffered = 0;
    }
    if (value === void 0) {
      if (param.rest)
        result[param.name] = "";
      continue;
    }
    if (!param.matcher || matchers[param.matcher](value)) {
      result[param.name] = value;
      const next_param = params[i + 1];
      const next_value = values[i + 1];
      if (next_param && !next_param.rest && next_param.optional && next_value && param.chained) {
        buffered = 0;
      }
      if (!next_param && !next_value && Object.keys(result).length === values_needing_match.length) {
        buffered = 0;
      }
      continue;
    }
    if (param.optional && param.chained) {
      buffered++;
      continue;
    }
    return;
  }
  if (buffered)
    return;
  return result;
}
function error(status, body) {
  if (isNaN(status) || status < 400 || status > 599) {
    throw new Error(`HTTP error status codes must be between 400 and 599 \u2014 ${status} is invalid`);
  }
  return new HttpError(status, body);
}
function json(data, init2) {
  const body = JSON.stringify(data);
  const headers = new Headers(init2?.headers);
  if (!headers.has("content-length")) {
    headers.set("content-length", encoder$3.encode(body).byteLength.toString());
  }
  if (!headers.has("content-type")) {
    headers.set("content-type", "application/json");
  }
  return new Response(body, {
    ...init2,
    headers
  });
}
var encoder$3 = new TextEncoder();
function text(body, init2) {
  const headers = new Headers(init2?.headers);
  if (!headers.has("content-length")) {
    const encoded = encoder$3.encode(body);
    headers.set("content-length", encoded.byteLength.toString());
    return new Response(encoded, {
      ...init2,
      headers
    });
  }
  return new Response(body, {
    ...init2,
    headers
  });
}
function coalesce_to_error(err) {
  return err instanceof Error || err && /** @type {any} */
  err.name && /** @type {any} */
  err.message ? (
    /** @type {Error} */
    err
  ) : new Error(JSON.stringify(err));
}
function normalize_error(error2) {
  return (
    /** @type {import('../runtime/control.js').Redirect | import('../runtime/control.js').HttpError | Error} */
    error2
  );
}
function method_not_allowed(mod, method) {
  return text(`${method} method not allowed`, {
    status: 405,
    headers: {
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
      // "The server must generate an Allow header field in a 405 status code response"
      allow: allowed_methods(mod).join(", ")
    }
  });
}
function allowed_methods(mod) {
  const allowed = ENDPOINT_METHODS.filter((method) => method in mod);
  if ("GET" in mod || "HEAD" in mod)
    allowed.push("HEAD");
  return allowed;
}
function static_error_page(options2, status, message) {
  let page2 = options2.templates.error({ status, message });
  return text(page2, {
    headers: { "content-type": "text/html; charset=utf-8" },
    status
  });
}
async function handle_fatal_error(event, options2, error2) {
  error2 = error2 instanceof HttpError ? error2 : coalesce_to_error(error2);
  const status = error2 instanceof HttpError ? error2.status : 500;
  const body = await handle_error_and_jsonify(event, options2, error2);
  const type = negotiate(event.request.headers.get("accept") || "text/html", [
    "application/json",
    "text/html"
  ]);
  if (event.isDataRequest || type === "application/json") {
    return json(body, {
      status
    });
  }
  return static_error_page(options2, status, body.message);
}
async function handle_error_and_jsonify(event, options2, error2) {
  if (error2 instanceof HttpError) {
    return error2.body;
  }
  return await options2.hooks.handleError({ error: error2, event }) ?? {
    message: event.route.id === null && error2 instanceof NotFound ? "Not Found" : "Internal Error"
  };
}
function redirect_response(status, location) {
  const response = new Response(void 0, {
    status,
    headers: { location }
  });
  return response;
}
function clarify_devalue_error(event, error2) {
  if (error2.path) {
    return `Data returned from \`load\` while rendering ${event.route.id} is not serializable: ${error2.message} (data${error2.path})`;
  }
  if (error2.path === "") {
    return `Data returned from \`load\` while rendering ${event.route.id} is not a plain object`;
  }
  return error2.message;
}
function stringify_uses(node) {
  const uses = [];
  if (node.uses && node.uses.dependencies.size > 0) {
    uses.push(`"dependencies":${JSON.stringify(Array.from(node.uses.dependencies))}`);
  }
  if (node.uses && node.uses.params.size > 0) {
    uses.push(`"params":${JSON.stringify(Array.from(node.uses.params))}`);
  }
  if (node.uses?.parent)
    uses.push('"parent":1');
  if (node.uses?.route)
    uses.push('"route":1');
  if (node.uses?.url)
    uses.push('"url":1');
  return `"uses":{${uses.join(",")}}`;
}
function warn_with_callsite(message, offset = 0) {
  console.warn(message);
}
async function render_endpoint(event, mod, state) {
  const method = (
    /** @type {import('types').HttpMethod} */
    event.request.method
  );
  let handler = mod[method] || mod.fallback;
  if (method === "HEAD" && mod.GET && !mod.HEAD) {
    handler = mod.GET;
  }
  if (!handler) {
    return method_not_allowed(mod, method);
  }
  const prerender = mod.prerender ?? state.prerender_default;
  if (prerender && (mod.POST || mod.PATCH || mod.PUT || mod.DELETE)) {
    throw new Error("Cannot prerender endpoints that have mutative methods");
  }
  if (state.prerendering && !prerender) {
    if (state.depth > 0) {
      throw new Error(`${event.route.id} is not prerenderable`);
    } else {
      return new Response(void 0, { status: 204 });
    }
  }
  try {
    let response = await handler(
      /** @type {import('@sveltejs/kit').RequestEvent<Record<string, any>>} */
      event
    );
    if (!(response instanceof Response)) {
      throw new Error(
        `Invalid response from route ${event.url.pathname}: handler should return a Response object`
      );
    }
    if (state.prerendering) {
      response = new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: new Headers(response.headers)
      });
      response.headers.set("x-sveltekit-prerender", String(prerender));
    }
    return response;
  } catch (e) {
    if (e instanceof Redirect) {
      return new Response(void 0, {
        status: e.status,
        headers: { location: e.location }
      });
    }
    throw e;
  }
}
function is_endpoint_request(event) {
  const { method, headers } = event.request;
  if (ENDPOINT_METHODS.includes(method) && !PAGE_METHODS.includes(method)) {
    return true;
  }
  if (method === "POST" && headers.get("x-sveltekit-action") === "true")
    return false;
  const accept = event.request.headers.get("accept") ?? "*/*";
  return negotiate(accept, ["*", "text/html"]) !== "text/html";
}
function compact(arr) {
  return arr.filter(
    /** @returns {val is NonNullable<T>} */
    (val) => val != null
  );
}
var SCHEME = /^[a-z][a-z\d+\-.]+:/i;
var absolute = /^([a-z]+:)?\/?\//;
function resolve(base2, path) {
  if (SCHEME.test(path))
    return path;
  if (path[0] === "#")
    return base2 + path;
  const base_match = absolute.exec(base2);
  const path_match = absolute.exec(path);
  if (!base_match) {
    throw new Error(`bad base path: "${base2}"`);
  }
  const baseparts = path_match ? [] : base2.slice(base_match[0].length).split("/");
  const pathparts = path_match ? path.slice(path_match[0].length).split("/") : path.split("/");
  baseparts.pop();
  for (let i = 0; i < pathparts.length; i += 1) {
    const part = pathparts[i];
    if (part === ".")
      continue;
    else if (part === "..")
      baseparts.pop();
    else
      baseparts.push(part);
  }
  const prefix = path_match && path_match[0] || base_match && base_match[0] || "";
  return `${prefix}${baseparts.join("/")}`;
}
function normalize_path(path, trailing_slash) {
  if (path === "/" || trailing_slash === "ignore")
    return path;
  if (trailing_slash === "never") {
    return path.endsWith("/") ? path.slice(0, -1) : path;
  } else if (trailing_slash === "always" && !path.endsWith("/")) {
    return path + "/";
  }
  return path;
}
function decode_pathname(pathname) {
  return pathname.split("%25").map(decodeURI).join("%25");
}
function decode_params(params) {
  for (const key2 in params) {
    params[key2] = decodeURIComponent(params[key2]);
  }
  return params;
}
var tracked_url_properties = (
  /** @type {const} */
  [
    "href",
    "pathname",
    "search",
    "searchParams",
    "toString",
    "toJSON"
  ]
);
function make_trackable(url, callback) {
  const tracked = new URL(url);
  for (const property of tracked_url_properties) {
    Object.defineProperty(tracked, property, {
      get() {
        callback();
        return url[property];
      },
      enumerable: true,
      configurable: true
    });
  }
  {
    tracked[Symbol.for("nodejs.util.inspect.custom")] = (depth, opts, inspect) => {
      return inspect(url, opts);
    };
  }
  disable_hash(tracked);
  return tracked;
}
function disable_hash(url) {
  allow_nodejs_console_log(url);
  Object.defineProperty(url, "hash", {
    get() {
      throw new Error(
        "Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead"
      );
    }
  });
}
function disable_search(url) {
  allow_nodejs_console_log(url);
  for (const property of ["search", "searchParams"]) {
    Object.defineProperty(url, property, {
      get() {
        throw new Error(`Cannot access url.${property} on a page with prerendering enabled`);
      }
    });
  }
}
function allow_nodejs_console_log(url) {
  {
    url[Symbol.for("nodejs.util.inspect.custom")] = (depth, opts, inspect) => {
      return inspect(new URL(url), opts);
    };
  }
}
var DATA_SUFFIX = "/__data.json";
function has_data_suffix(pathname) {
  return pathname.endsWith(DATA_SUFFIX);
}
function add_data_suffix(pathname) {
  return pathname.replace(/\/$/, "") + DATA_SUFFIX;
}
function strip_data_suffix(pathname) {
  return pathname.slice(0, -DATA_SUFFIX.length);
}
function is_action_json_request(event) {
  const accept = negotiate(event.request.headers.get("accept") ?? "*/*", [
    "application/json",
    "text/html"
  ]);
  return accept === "application/json" && event.request.method === "POST";
}
async function handle_action_json_request(event, options2, server2) {
  const actions = server2?.actions;
  if (!actions) {
    const no_actions_error = error(405, "POST method not allowed. No actions exist for this page");
    return action_json(
      {
        type: "error",
        error: await handle_error_and_jsonify(event, options2, no_actions_error)
      },
      {
        status: no_actions_error.status,
        headers: {
          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
          // "The server must generate an Allow header field in a 405 status code response"
          allow: "GET"
        }
      }
    );
  }
  check_named_default_separate(actions);
  try {
    const data = await call_action(event, actions);
    if (false)
      ;
    if (data instanceof ActionFailure) {
      return action_json({
        type: "failure",
        status: data.status,
        // @ts-expect-error we assign a string to what is supposed to be an object. That's ok
        // because we don't use the object outside, and this way we have better code navigation
        // through knowing where the related interface is used.
        data: stringify_action_response(
          data.data,
          /** @type {string} */
          event.route.id
        )
      });
    } else {
      return action_json({
        type: "success",
        status: data ? 200 : 204,
        // @ts-expect-error see comment above
        data: stringify_action_response(
          data,
          /** @type {string} */
          event.route.id
        )
      });
    }
  } catch (e) {
    const err = normalize_error(e);
    if (err instanceof Redirect) {
      return action_json_redirect(err);
    }
    return action_json(
      {
        type: "error",
        error: await handle_error_and_jsonify(event, options2, check_incorrect_fail_use(err))
      },
      {
        status: err instanceof HttpError ? err.status : 500
      }
    );
  }
}
function check_incorrect_fail_use(error2) {
  return error2 instanceof ActionFailure ? new Error('Cannot "throw fail()". Use "return fail()"') : error2;
}
function action_json_redirect(redirect) {
  return action_json({
    type: "redirect",
    status: redirect.status,
    location: redirect.location
  });
}
function action_json(data, init2) {
  return json(data, init2);
}
function is_action_request(event) {
  return event.request.method === "POST";
}
async function handle_action_request(event, server2) {
  const actions = server2?.actions;
  if (!actions) {
    event.setHeaders({
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
      // "The server must generate an Allow header field in a 405 status code response"
      allow: "GET"
    });
    return {
      type: "error",
      error: error(405, "POST method not allowed. No actions exist for this page")
    };
  }
  check_named_default_separate(actions);
  try {
    const data = await call_action(event, actions);
    if (false)
      ;
    if (data instanceof ActionFailure) {
      return {
        type: "failure",
        status: data.status,
        data: data.data
      };
    } else {
      return {
        type: "success",
        status: 200,
        // @ts-expect-error this will be removed upon serialization, so `undefined` is the same as omission
        data
      };
    }
  } catch (e) {
    const err = normalize_error(e);
    if (err instanceof Redirect) {
      return {
        type: "redirect",
        status: err.status,
        location: err.location
      };
    }
    return {
      type: "error",
      error: check_incorrect_fail_use(err)
    };
  }
}
function check_named_default_separate(actions) {
  if (actions.default && Object.keys(actions).length > 1) {
    throw new Error(
      "When using named actions, the default action cannot be used. See the docs for more info: https://kit.svelte.dev/docs/form-actions#named-actions"
    );
  }
}
async function call_action(event, actions) {
  const url = new URL(event.request.url);
  let name = "default";
  for (const param of url.searchParams) {
    if (param[0].startsWith("/")) {
      name = param[0].slice(1);
      if (name === "default") {
        throw new Error('Cannot use reserved action name "default"');
      }
      break;
    }
  }
  const action = actions[name];
  if (!action) {
    throw new Error(`No action with name '${name}' found`);
  }
  if (!is_form_content_type(event.request)) {
    throw new Error(
      `Actions expect form-encoded data (received ${event.request.headers.get("content-type")})`
    );
  }
  return action(event);
}
function uneval_action_response(data, route_id) {
  return try_deserialize(data, uneval, route_id);
}
function stringify_action_response(data, route_id) {
  return try_deserialize(data, stringify, route_id);
}
function try_deserialize(data, fn, route_id) {
  try {
    return fn(data);
  } catch (e) {
    const error2 = (
      /** @type {any} */
      e
    );
    if ("path" in error2) {
      let message = `Data returned from action inside ${route_id} is not serializable: ${error2.message}`;
      if (error2.path !== "")
        message += ` (data.${error2.path})`;
      throw new Error(message);
    }
    throw error2;
  }
}
async function unwrap_promises(object, id) {
  for (const key2 in object) {
    if (typeof object[key2]?.then === "function") {
      return Object.fromEntries(
        await Promise.all(Object.entries(object).map(async ([key3, value]) => [key3, await value]))
      );
    }
  }
  return object;
}
var INVALIDATED_PARAM = "x-sveltekit-invalidated";
var TRAILING_SLASH_PARAM = "x-sveltekit-trailing-slash";
async function load_server_data({
  event,
  state,
  node,
  parent,
  // TODO 2.0: Remove this
  track_server_fetches
}) {
  if (!node?.server)
    return null;
  const uses = {
    dependencies: /* @__PURE__ */ new Set(),
    params: /* @__PURE__ */ new Set(),
    parent: false,
    route: false,
    url: false
  };
  const url = make_trackable(event.url, () => {
    uses.url = true;
  });
  if (state.prerendering) {
    disable_search(url);
  }
  const result = await node.server.load?.call(null, {
    ...event,
    fetch: (info, init2) => {
      const url2 = new URL(info instanceof Request ? info.url : info, event.url);
      if (track_server_fetches) {
        uses.dependencies.add(url2.href);
      }
      return event.fetch(info, init2);
    },
    /** @param {string[]} deps */
    depends: (...deps) => {
      for (const dep of deps) {
        const { href } = new URL(dep, event.url);
        uses.dependencies.add(href);
      }
    },
    params: new Proxy(event.params, {
      get: (target, key2) => {
        uses.params.add(key2);
        return target[
          /** @type {string} */
          key2
        ];
      }
    }),
    parent: async () => {
      uses.parent = true;
      return parent();
    },
    route: new Proxy(event.route, {
      get: (target, key2) => {
        uses.route = true;
        return target[
          /** @type {'id'} */
          key2
        ];
      }
    }),
    url
  });
  const data = result ? await unwrap_promises(result, node.server_id) : null;
  return {
    type: "data",
    data,
    uses,
    slash: node.server.trailingSlash
  };
}
async function load_data({
  event,
  fetched,
  node,
  parent,
  server_data_promise,
  state,
  resolve_opts,
  csr
}) {
  const server_data_node = await server_data_promise;
  if (!node?.universal?.load) {
    return server_data_node?.data ?? null;
  }
  const result = await node.universal.load.call(null, {
    url: event.url,
    params: event.params,
    data: server_data_node?.data ?? null,
    route: event.route,
    fetch: create_universal_fetch(event, state, fetched, csr, resolve_opts),
    setHeaders: event.setHeaders,
    depends: () => {
    },
    parent
  });
  const data = result ? await unwrap_promises(result, node.universal_id) : null;
  return data;
}
function b64_encode(buffer) {
  if (globalThis.Buffer) {
    return Buffer.from(buffer).toString("base64");
  }
  const little_endian = new Uint8Array(new Uint16Array([1]).buffer)[0] > 0;
  return btoa(
    new TextDecoder(little_endian ? "utf-16le" : "utf-16be").decode(
      new Uint16Array(new Uint8Array(buffer))
    )
  );
}
function create_universal_fetch(event, state, fetched, csr, resolve_opts) {
  const universal_fetch = async (input, init2) => {
    const cloned_body = input instanceof Request && input.body ? input.clone().body : null;
    const cloned_headers = input instanceof Request && [...input.headers].length ? new Headers(input.headers) : init2?.headers;
    let response = await event.fetch(input, init2);
    const url = new URL(input instanceof Request ? input.url : input, event.url);
    const same_origin = url.origin === event.url.origin;
    let dependency;
    if (same_origin) {
      if (state.prerendering) {
        dependency = { response, body: null };
        state.prerendering.dependencies.set(url.pathname, dependency);
      }
    } else {
      const mode = input instanceof Request ? input.mode : init2?.mode ?? "cors";
      if (mode === "no-cors") {
        response = new Response("", {
          status: response.status,
          statusText: response.statusText,
          headers: response.headers
        });
      } else {
        const acao = response.headers.get("access-control-allow-origin");
        if (!acao || acao !== event.url.origin && acao !== "*") {
          throw new Error(
            `CORS error: ${acao ? "Incorrect" : "No"} 'Access-Control-Allow-Origin' header is present on the requested resource`
          );
        }
      }
    }
    const proxy = new Proxy(response, {
      get(response2, key2, _receiver) {
        async function push_fetched(body, is_b64) {
          const status_number = Number(response2.status);
          if (isNaN(status_number)) {
            throw new Error(
              `response.status is not a number. value: "${response2.status}" type: ${typeof response2.status}`
            );
          }
          fetched.push({
            url: same_origin ? url.href.slice(event.url.origin.length) : url.href,
            method: event.request.method,
            request_body: (
              /** @type {string | ArrayBufferView | undefined} */
              input instanceof Request && cloned_body ? await stream_to_string(cloned_body) : init2?.body
            ),
            request_headers: cloned_headers,
            response_body: body,
            response: response2,
            is_b64
          });
        }
        if (key2 === "arrayBuffer") {
          return async () => {
            const buffer = await response2.arrayBuffer();
            if (dependency) {
              dependency.body = new Uint8Array(buffer);
            }
            if (buffer instanceof ArrayBuffer) {
              await push_fetched(b64_encode(buffer), true);
            }
            return buffer;
          };
        }
        async function text2() {
          const body = await response2.text();
          if (!body || typeof body === "string") {
            await push_fetched(body, false);
          }
          if (dependency) {
            dependency.body = body;
          }
          return body;
        }
        if (key2 === "text") {
          return text2;
        }
        if (key2 === "json") {
          return async () => {
            return JSON.parse(await text2());
          };
        }
        return Reflect.get(response2, key2, response2);
      }
    });
    if (csr) {
      const get = response.headers.get;
      response.headers.get = (key2) => {
        const lower = key2.toLowerCase();
        const value = get.call(response.headers, lower);
        if (value && !lower.startsWith("x-sveltekit-")) {
          const included = resolve_opts.filterSerializedResponseHeaders(lower, value);
          if (!included) {
            throw new Error(
              `Failed to get response header "${lower}" \u2014 it must be included by the \`filterSerializedResponseHeaders\` option: https://kit.svelte.dev/docs/hooks#server-hooks-handle (at ${event.route.id})`
            );
          }
        }
        return value;
      };
    }
    return proxy;
  };
  return (input, init2) => {
    const response = universal_fetch(input, init2);
    response.catch(() => {
    });
    return response;
  };
}
async function stream_to_string(stream) {
  let result = "";
  const reader = stream.getReader();
  const decoder = new TextDecoder();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    result += decoder.decode(value);
  }
  return result;
}
var subscriber_queue = [];
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run2(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0 && stop) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
function hash(...values) {
  let hash2 = 5381;
  for (const value of values) {
    if (typeof value === "string") {
      let i = value.length;
      while (i)
        hash2 = hash2 * 33 ^ value.charCodeAt(--i);
    } else if (ArrayBuffer.isView(value)) {
      const buffer = new Uint8Array(value.buffer, value.byteOffset, value.byteLength);
      let i = buffer.length;
      while (i)
        hash2 = hash2 * 33 ^ buffer[--i];
    } else {
      throw new TypeError("value must be a string or TypedArray");
    }
  }
  return (hash2 >>> 0).toString(36);
}
var escape_html_attr_dict = {
  "&": "&amp;",
  '"': "&quot;"
};
var escape_html_attr_regex = new RegExp(
  // special characters
  `[${Object.keys(escape_html_attr_dict).join("")}]|[\\ud800-\\udbff](?![\\udc00-\\udfff])|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\udc00-\\udfff]`,
  "g"
);
function escape_html_attr(str) {
  const escaped_str = str.replace(escape_html_attr_regex, (match) => {
    if (match.length === 2) {
      return match;
    }
    return escape_html_attr_dict[match] ?? `&#${match.charCodeAt(0)};`;
  });
  return `"${escaped_str}"`;
}
var replacements = {
  "<": "\\u003C",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var pattern = new RegExp(`[${Object.keys(replacements).join("")}]`, "g");
function serialize_data(fetched, filter, prerendering = false) {
  const headers = {};
  let cache_control = null;
  let age = null;
  let varyAny = false;
  for (const [key2, value] of fetched.response.headers) {
    if (filter(key2, value)) {
      headers[key2] = value;
    }
    if (key2 === "cache-control")
      cache_control = value;
    else if (key2 === "age")
      age = value;
    else if (key2 === "vary" && value.trim() === "*")
      varyAny = true;
  }
  const payload = {
    status: fetched.response.status,
    statusText: fetched.response.statusText,
    headers,
    body: fetched.response_body
  };
  const safe_payload = JSON.stringify(payload).replace(pattern, (match) => replacements[match]);
  const attrs = [
    'type="application/json"',
    "data-sveltekit-fetched",
    `data-url=${escape_html_attr(fetched.url)}`
  ];
  if (fetched.is_b64) {
    attrs.push("data-b64");
  }
  if (fetched.request_headers || fetched.request_body) {
    const values = [];
    if (fetched.request_headers) {
      values.push([...new Headers(fetched.request_headers)].join(","));
    }
    if (fetched.request_body) {
      values.push(fetched.request_body);
    }
    attrs.push(`data-hash="${hash(...values)}"`);
  }
  if (!prerendering && fetched.method === "GET" && cache_control && !varyAny) {
    const match = /s-maxage=(\d+)/g.exec(cache_control) ?? /max-age=(\d+)/g.exec(cache_control);
    if (match) {
      const ttl = +match[1] - +(age ?? "0");
      attrs.push(`data-ttl="${ttl}"`);
    }
  }
  return `<script ${attrs.join(" ")}>${safe_payload}<\/script>`;
}
var s = JSON.stringify;
var encoder$2 = new TextEncoder();
function sha256(data) {
  if (!key[0])
    precompute();
  const out = init.slice(0);
  const array2 = encode(data);
  for (let i = 0; i < array2.length; i += 16) {
    const w = array2.subarray(i, i + 16);
    let tmp;
    let a;
    let b;
    let out0 = out[0];
    let out1 = out[1];
    let out2 = out[2];
    let out3 = out[3];
    let out4 = out[4];
    let out5 = out[5];
    let out6 = out[6];
    let out7 = out[7];
    for (let i2 = 0; i2 < 64; i2++) {
      if (i2 < 16) {
        tmp = w[i2];
      } else {
        a = w[i2 + 1 & 15];
        b = w[i2 + 14 & 15];
        tmp = w[i2 & 15] = (a >>> 7 ^ a >>> 18 ^ a >>> 3 ^ a << 25 ^ a << 14) + (b >>> 17 ^ b >>> 19 ^ b >>> 10 ^ b << 15 ^ b << 13) + w[i2 & 15] + w[i2 + 9 & 15] | 0;
      }
      tmp = tmp + out7 + (out4 >>> 6 ^ out4 >>> 11 ^ out4 >>> 25 ^ out4 << 26 ^ out4 << 21 ^ out4 << 7) + (out6 ^ out4 & (out5 ^ out6)) + key[i2];
      out7 = out6;
      out6 = out5;
      out5 = out4;
      out4 = out3 + tmp | 0;
      out3 = out2;
      out2 = out1;
      out1 = out0;
      out0 = tmp + (out1 & out2 ^ out3 & (out1 ^ out2)) + (out1 >>> 2 ^ out1 >>> 13 ^ out1 >>> 22 ^ out1 << 30 ^ out1 << 19 ^ out1 << 10) | 0;
    }
    out[0] = out[0] + out0 | 0;
    out[1] = out[1] + out1 | 0;
    out[2] = out[2] + out2 | 0;
    out[3] = out[3] + out3 | 0;
    out[4] = out[4] + out4 | 0;
    out[5] = out[5] + out5 | 0;
    out[6] = out[6] + out6 | 0;
    out[7] = out[7] + out7 | 0;
  }
  const bytes = new Uint8Array(out.buffer);
  reverse_endianness(bytes);
  return base64(bytes);
}
var init = new Uint32Array(8);
var key = new Uint32Array(64);
function precompute() {
  function frac(x) {
    return (x - Math.floor(x)) * 4294967296;
  }
  let prime = 2;
  for (let i = 0; i < 64; prime++) {
    let is_prime = true;
    for (let factor = 2; factor * factor <= prime; factor++) {
      if (prime % factor === 0) {
        is_prime = false;
        break;
      }
    }
    if (is_prime) {
      if (i < 8) {
        init[i] = frac(prime ** (1 / 2));
      }
      key[i] = frac(prime ** (1 / 3));
      i++;
    }
  }
}
function reverse_endianness(bytes) {
  for (let i = 0; i < bytes.length; i += 4) {
    const a = bytes[i + 0];
    const b = bytes[i + 1];
    const c = bytes[i + 2];
    const d = bytes[i + 3];
    bytes[i + 0] = d;
    bytes[i + 1] = c;
    bytes[i + 2] = b;
    bytes[i + 3] = a;
  }
}
function encode(str) {
  const encoded = encoder$2.encode(str);
  const length = encoded.length * 8;
  const size = 512 * Math.ceil((length + 65) / 512);
  const bytes = new Uint8Array(size / 8);
  bytes.set(encoded);
  bytes[encoded.length] = 128;
  reverse_endianness(bytes);
  const words = new Uint32Array(bytes.buffer);
  words[words.length - 2] = Math.floor(length / 4294967296);
  words[words.length - 1] = length;
  return words;
}
var chars2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
function base64(bytes) {
  const l = bytes.length;
  let result = "";
  let i;
  for (i = 2; i < l; i += 3) {
    result += chars2[bytes[i - 2] >> 2];
    result += chars2[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result += chars2[(bytes[i - 1] & 15) << 2 | bytes[i] >> 6];
    result += chars2[bytes[i] & 63];
  }
  if (i === l + 1) {
    result += chars2[bytes[i - 2] >> 2];
    result += chars2[(bytes[i - 2] & 3) << 4];
    result += "==";
  }
  if (i === l) {
    result += chars2[bytes[i - 2] >> 2];
    result += chars2[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result += chars2[(bytes[i - 1] & 15) << 2];
    result += "=";
  }
  return result;
}
var array = new Uint8Array(16);
function generate_nonce() {
  crypto.getRandomValues(array);
  return base64(array);
}
var quoted = /* @__PURE__ */ new Set([
  "self",
  "unsafe-eval",
  "unsafe-hashes",
  "unsafe-inline",
  "none",
  "strict-dynamic",
  "report-sample",
  "wasm-unsafe-eval",
  "script"
]);
var crypto_pattern = /^(nonce|sha\d\d\d)-/;
var _use_hashes, _script_needs_csp, _style_needs_csp, _directives, _script_src, _style_src, _nonce;
var BaseProvider = class {
  /**
   * @param {boolean} use_hashes
   * @param {import('types').CspDirectives} directives
   * @param {string} nonce
   */
  constructor(use_hashes, directives, nonce) {
    /** @type {boolean} */
    __privateAdd(this, _use_hashes, void 0);
    /** @type {boolean} */
    __privateAdd(this, _script_needs_csp, void 0);
    /** @type {boolean} */
    __privateAdd(this, _style_needs_csp, void 0);
    /** @type {import('types').CspDirectives} */
    __privateAdd(this, _directives, void 0);
    /** @type {import('types').Csp.Source[]} */
    __privateAdd(this, _script_src, void 0);
    /** @type {import('types').Csp.Source[]} */
    __privateAdd(this, _style_src, void 0);
    /** @type {string} */
    __privateAdd(this, _nonce, void 0);
    __privateSet(this, _use_hashes, use_hashes);
    __privateSet(this, _directives, directives);
    const d = __privateGet(this, _directives);
    __privateSet(this, _script_src, []);
    __privateSet(this, _style_src, []);
    const effective_script_src = d["script-src"] || d["default-src"];
    const effective_style_src = d["style-src"] || d["default-src"];
    __privateSet(this, _script_needs_csp, !!effective_script_src && effective_script_src.filter((value) => value !== "unsafe-inline").length > 0);
    __privateSet(this, _style_needs_csp, !!effective_style_src && effective_style_src.filter((value) => value !== "unsafe-inline").length > 0);
    this.script_needs_nonce = __privateGet(this, _script_needs_csp) && !__privateGet(this, _use_hashes);
    this.style_needs_nonce = __privateGet(this, _style_needs_csp) && !__privateGet(this, _use_hashes);
    __privateSet(this, _nonce, nonce);
  }
  /** @param {string} content */
  add_script(content) {
    if (__privateGet(this, _script_needs_csp)) {
      if (__privateGet(this, _use_hashes)) {
        __privateGet(this, _script_src).push(`sha256-${sha256(content)}`);
      } else if (__privateGet(this, _script_src).length === 0) {
        __privateGet(this, _script_src).push(`nonce-${__privateGet(this, _nonce)}`);
      }
    }
  }
  /** @param {string} content */
  add_style(content) {
    if (__privateGet(this, _style_needs_csp)) {
      if (__privateGet(this, _use_hashes)) {
        __privateGet(this, _style_src).push(`sha256-${sha256(content)}`);
      } else if (__privateGet(this, _style_src).length === 0) {
        __privateGet(this, _style_src).push(`nonce-${__privateGet(this, _nonce)}`);
      }
    }
  }
  /**
   * @param {boolean} [is_meta]
   */
  get_header(is_meta = false) {
    const header = [];
    const directives = { ...__privateGet(this, _directives) };
    if (__privateGet(this, _style_src).length > 0) {
      directives["style-src"] = [
        ...directives["style-src"] || directives["default-src"] || [],
        ...__privateGet(this, _style_src)
      ];
    }
    if (__privateGet(this, _script_src).length > 0) {
      directives["script-src"] = [
        ...directives["script-src"] || directives["default-src"] || [],
        ...__privateGet(this, _script_src)
      ];
    }
    for (const key2 in directives) {
      if (is_meta && (key2 === "frame-ancestors" || key2 === "report-uri" || key2 === "sandbox")) {
        continue;
      }
      const value = (
        /** @type {string[] | true} */
        directives[key2]
      );
      if (!value)
        continue;
      const directive = [key2];
      if (Array.isArray(value)) {
        value.forEach((value2) => {
          if (quoted.has(value2) || crypto_pattern.test(value2)) {
            directive.push(`'${value2}'`);
          } else {
            directive.push(value2);
          }
        });
      }
      header.push(directive.join(" "));
    }
    return header.join("; ");
  }
};
_use_hashes = new WeakMap();
_script_needs_csp = new WeakMap();
_style_needs_csp = new WeakMap();
_directives = new WeakMap();
_script_src = new WeakMap();
_style_src = new WeakMap();
_nonce = new WeakMap();
var CspProvider = class extends BaseProvider {
  get_meta() {
    const content = this.get_header(true);
    if (!content) {
      return;
    }
    return `<meta http-equiv="content-security-policy" content=${escape_html_attr(content)}>`;
  }
};
var CspReportOnlyProvider = class extends BaseProvider {
  /**
   * @param {boolean} use_hashes
   * @param {import('types').CspDirectives} directives
   * @param {string} nonce
   */
  constructor(use_hashes, directives, nonce) {
    super(use_hashes, directives, nonce);
    if (Object.values(directives).filter((v) => !!v).length > 0) {
      const has_report_to = directives["report-to"]?.length ?? 0 > 0;
      const has_report_uri = directives["report-uri"]?.length ?? 0 > 0;
      if (!has_report_to && !has_report_uri) {
        throw Error(
          "`content-security-policy-report-only` must be specified with either the `report-to` or `report-uri` directives, or both"
        );
      }
    }
  }
};
var Csp = class {
  /**
   * @param {import('./types.js').CspConfig} config
   * @param {import('./types.js').CspOpts} opts
   */
  constructor({ mode, directives, reportOnly }, { prerender }) {
    /** @readonly */
    __publicField(this, "nonce", generate_nonce());
    /** @type {CspProvider} */
    __publicField(this, "csp_provider");
    /** @type {CspReportOnlyProvider} */
    __publicField(this, "report_only_provider");
    const use_hashes = mode === "hash" || mode === "auto" && prerender;
    this.csp_provider = new CspProvider(use_hashes, directives, this.nonce);
    this.report_only_provider = new CspReportOnlyProvider(use_hashes, reportOnly, this.nonce);
  }
  get script_needs_nonce() {
    return this.csp_provider.script_needs_nonce || this.report_only_provider.script_needs_nonce;
  }
  get style_needs_nonce() {
    return this.csp_provider.style_needs_nonce || this.report_only_provider.style_needs_nonce;
  }
  /** @param {string} content */
  add_script(content) {
    this.csp_provider.add_script(content);
    this.report_only_provider.add_script(content);
  }
  /** @param {string} content */
  add_style(content) {
    this.csp_provider.add_style(content);
    this.report_only_provider.add_style(content);
  }
};
function defer() {
  let fulfil;
  let reject;
  const promise = new Promise((f, r) => {
    fulfil = f;
    reject = r;
  });
  return { promise, fulfil, reject };
}
function create_async_iterator() {
  const deferred = [defer()];
  return {
    iterator: {
      [Symbol.asyncIterator]() {
        return {
          next: async () => {
            const next = await deferred[0].promise;
            if (!next.done)
              deferred.shift();
            return next;
          }
        };
      }
    },
    push: (value) => {
      deferred[deferred.length - 1].fulfil({
        value,
        done: false
      });
      deferred.push(defer());
    },
    done: () => {
      deferred[deferred.length - 1].fulfil({ done: true });
    }
  };
}
var updated = {
  ...readable(false),
  check: () => false
};
var encoder$1 = new TextEncoder();
async function render_response({
  branch,
  fetched,
  options: options2,
  manifest: manifest2,
  state,
  page_config,
  status,
  error: error2 = null,
  event,
  resolve_opts,
  action_result
}) {
  if (state.prerendering) {
    if (options2.csp.mode === "nonce") {
      throw new Error('Cannot use prerendering if config.kit.csp.mode === "nonce"');
    }
    if (options2.app_template_contains_nonce) {
      throw new Error("Cannot use prerendering if page template contains %sveltekit.nonce%");
    }
  }
  const { client } = manifest2._;
  const modulepreloads = new Set(client.imports);
  const stylesheets4 = new Set(client.stylesheets);
  const fonts4 = new Set(client.fonts);
  const link_header_preloads = /* @__PURE__ */ new Set();
  const inline_styles = /* @__PURE__ */ new Map();
  let rendered;
  const form_value = action_result?.type === "success" || action_result?.type === "failure" ? action_result.data ?? null : null;
  let base$1 = base;
  let assets$1 = assets;
  let base_expression = s(base);
  if (!state.prerendering?.fallback) {
    const segments = event.url.pathname.slice(base.length).split("/").slice(2);
    base$1 = segments.map(() => "..").join("/") || ".";
    base_expression = `new URL(${s(base$1)}, location).pathname.slice(0, -1)`;
    if (!assets || assets[0] === "/" && assets !== SVELTE_KIT_ASSETS) {
      assets$1 = base$1;
    }
  }
  if (page_config.ssr) {
    const props = {
      stores: {
        page: writable(null),
        navigating: writable(null),
        updated
      },
      constructors: await Promise.all(branch.map(({ node }) => node.component())),
      form: form_value
    };
    let data2 = {};
    for (let i = 0; i < branch.length; i += 1) {
      data2 = { ...data2, ...branch[i].data };
      props[`data_${i}`] = data2;
    }
    props.page = {
      error: error2,
      params: (
        /** @type {Record<string, any>} */
        event.params
      ),
      route: event.route,
      status,
      url: event.url,
      data: data2,
      form: form_value
    };
    {
      try {
        rendered = options2.root.render(props);
      } finally {
        reset();
      }
    }
    for (const { node } of branch) {
      for (const url of node.imports)
        modulepreloads.add(url);
      for (const url of node.stylesheets)
        stylesheets4.add(url);
      for (const url of node.fonts)
        fonts4.add(url);
      if (node.inline_styles) {
        Object.entries(await node.inline_styles()).forEach(([k, v]) => inline_styles.set(k, v));
      }
    }
  } else {
    rendered = { head: "", html: "", css: { code: "", map: null } };
  }
  let head = "";
  let body = rendered.html;
  const csp = new Csp(options2.csp, {
    prerender: !!state.prerendering
  });
  const prefixed = (path) => {
    if (path.startsWith("/")) {
      return base + path;
    }
    return `${assets$1}/${path}`;
  };
  if (inline_styles.size > 0) {
    const content = Array.from(inline_styles.values()).join("\n");
    const attributes = [];
    if (csp.style_needs_nonce)
      attributes.push(` nonce="${csp.nonce}"`);
    csp.add_style(content);
    head += `
	<style${attributes.join("")}>${content}</style>`;
  }
  for (const dep of stylesheets4) {
    const path = prefixed(dep);
    const attributes = ['rel="stylesheet"'];
    if (inline_styles.has(dep)) {
      attributes.push("disabled", 'media="(max-width: 0)"');
    } else {
      if (resolve_opts.preload({ type: "css", path })) {
        const preload_atts = ['rel="preload"', 'as="style"'];
        link_header_preloads.add(`<${encodeURI(path)}>; ${preload_atts.join(";")}; nopush`);
      }
    }
    head += `
		<link href="${path}" ${attributes.join(" ")}>`;
  }
  for (const dep of fonts4) {
    const path = prefixed(dep);
    if (resolve_opts.preload({ type: "font", path })) {
      const ext = dep.slice(dep.lastIndexOf(".") + 1);
      const attributes = [
        'rel="preload"',
        'as="font"',
        `type="font/${ext}"`,
        `href="${path}"`,
        "crossorigin"
      ];
      head += `
		<link ${attributes.join(" ")}>`;
    }
  }
  const global = `__sveltekit_${options2.version_hash}`;
  const { data, chunks } = get_data(
    event,
    options2,
    branch.map((b) => b.server_data),
    global
  );
  if (page_config.ssr && page_config.csr) {
    body += `
			${fetched.map(
      (item) => serialize_data(item, resolve_opts.filterSerializedResponseHeaders, !!state.prerendering)
    ).join("\n			")}`;
  }
  if (page_config.csr) {
    const included_modulepreloads = Array.from(modulepreloads, (dep) => prefixed(dep)).filter(
      (path) => resolve_opts.preload({ type: "js", path })
    );
    for (const path of included_modulepreloads) {
      link_header_preloads.add(`<${encodeURI(path)}>; rel="modulepreload"; nopush`);
      if (options2.preload_strategy !== "modulepreload") {
        head += `
		<link rel="preload" as="script" crossorigin="anonymous" href="${path}">`;
      } else if (state.prerendering) {
        head += `
		<link rel="modulepreload" href="${path}">`;
      }
    }
    const blocks = [];
    const properties = [
      assets && `assets: ${s(assets)}`,
      `base: ${base_expression}`,
      `env: ${s(public_env)}`
    ].filter(Boolean);
    if (chunks) {
      blocks.push("const deferred = new Map();");
      properties.push(`defer: (id) => new Promise((fulfil, reject) => {
							deferred.set(id, { fulfil, reject });
						})`);
      properties.push(`resolve: ({ id, data, error }) => {
							const { fulfil, reject } = deferred.get(id);
							deferred.delete(id);

							if (error) reject(error);
							else fulfil(data);
						}`);
    }
    blocks.push(`${global} = {
						${properties.join(",\n						")}
					};`);
    const args = ["app", "element"];
    blocks.push("const element = document.currentScript.parentElement;");
    if (page_config.ssr) {
      const serialized = { form: "null", error: "null" };
      blocks.push(`const data = ${data};`);
      if (form_value) {
        serialized.form = uneval_action_response(
          form_value,
          /** @type {string} */
          event.route.id
        );
      }
      if (error2) {
        serialized.error = uneval(error2);
      }
      const hydrate = [
        `node_ids: [${branch.map(({ node }) => node.index).join(", ")}]`,
        "data",
        `form: ${serialized.form}`,
        `error: ${serialized.error}`
      ];
      if (status !== 200) {
        hydrate.push(`status: ${status}`);
      }
      if (options2.embedded) {
        hydrate.push(`params: ${uneval(event.params)}`, `route: ${s(event.route)}`);
      }
      args.push(`{
							${hydrate.join(",\n							")}
						}`);
    }
    blocks.push(`Promise.all([
						import(${s(prefixed(client.start))}),
						import(${s(prefixed(client.app))})
					]).then(([kit, app]) => {
						kit.start(${args.join(", ")});
					});`);
    if (options2.service_worker) {
      const opts = "";
      blocks.push(`if ('serviceWorker' in navigator) {
						addEventListener('load', function () {
							navigator.serviceWorker.register('${prefixed("service-worker.js")}'${opts});
						});
					}`);
    }
    const init_app = `
				{
					${blocks.join("\n\n					")}
				}
			`;
    csp.add_script(init_app);
    body += `
			<script${csp.script_needs_nonce ? ` nonce="${csp.nonce}"` : ""}>${init_app}<\/script>
		`;
  }
  const headers = new Headers({
    "x-sveltekit-page": "true",
    "content-type": "text/html"
  });
  if (state.prerendering) {
    const http_equiv = [];
    const csp_headers = csp.csp_provider.get_meta();
    if (csp_headers) {
      http_equiv.push(csp_headers);
    }
    if (state.prerendering.cache) {
      http_equiv.push(`<meta http-equiv="cache-control" content="${state.prerendering.cache}">`);
    }
    if (http_equiv.length > 0) {
      head = http_equiv.join("\n") + head;
    }
  } else {
    const csp_header = csp.csp_provider.get_header();
    if (csp_header) {
      headers.set("content-security-policy", csp_header);
    }
    const report_only_header = csp.report_only_provider.get_header();
    if (report_only_header) {
      headers.set("content-security-policy-report-only", report_only_header);
    }
    if (link_header_preloads.size) {
      headers.set("link", Array.from(link_header_preloads).join(", "));
    }
  }
  head += rendered.head;
  const html = options2.templates.app({
    head,
    body,
    assets: assets$1,
    nonce: (
      /** @type {string} */
      csp.nonce
    ),
    env: public_env
  });
  const transformed = await resolve_opts.transformPageChunk({
    html,
    done: true
  }) || "";
  if (!chunks) {
    headers.set("etag", `"${hash(transformed)}"`);
  }
  return !chunks ? text(transformed, {
    status,
    headers
  }) : new Response(
    new ReadableStream({
      async start(controller) {
        controller.enqueue(encoder$1.encode(transformed + "\n"));
        for await (const chunk of chunks) {
          controller.enqueue(encoder$1.encode(chunk));
        }
        controller.close();
      },
      type: "bytes"
    }),
    {
      headers: {
        "content-type": "text/html"
      }
    }
  );
}
function get_data(event, options2, nodes, global) {
  let promise_id = 1;
  let count = 0;
  const { iterator, push, done } = create_async_iterator();
  function replacer(thing) {
    if (typeof thing?.then === "function") {
      const id = promise_id++;
      count += 1;
      thing.then(
        /** @param {any} data */
        (data) => ({ data })
      ).catch(
        /** @param {any} error */
        async (error2) => ({
          error: await handle_error_and_jsonify(event, options2, error2)
        })
      ).then(
        /**
         * @param {{data: any; error: any}} result
         */
        async ({ data, error: error2 }) => {
          count -= 1;
          let str;
          try {
            str = uneval({ id, data, error: error2 }, replacer);
          } catch (e) {
            error2 = await handle_error_and_jsonify(
              event,
              options2,
              new Error(`Failed to serialize promise while rendering ${event.route.id}`)
            );
            data = void 0;
            str = uneval({ id, data, error: error2 }, replacer);
          }
          push(`<script>${global}.resolve(${str})<\/script>
`);
          if (count === 0)
            done();
        }
      );
      return `${global}.defer(${id})`;
    }
  }
  try {
    const strings = nodes.map((node) => {
      if (!node)
        return "null";
      return `{"type":"data","data":${uneval(node.data, replacer)},${stringify_uses(node)}${node.slash ? `,"slash":${JSON.stringify(node.slash)}` : ""}}`;
    });
    return {
      data: `[${strings.join(",")}]`,
      chunks: count > 0 ? iterator : null
    };
  } catch (e) {
    throw new Error(clarify_devalue_error(
      event,
      /** @type {any} */
      e
    ));
  }
}
function get_option(nodes, option) {
  return nodes.reduce(
    (value, node) => {
      return (
        /** @type {Value} TypeScript's too dumb to understand this */
        node?.universal?.[option] ?? node?.server?.[option] ?? value
      );
    },
    /** @type {Value | undefined} */
    void 0
  );
}
async function respond_with_error({
  event,
  options: options2,
  manifest: manifest2,
  state,
  status,
  error: error2,
  resolve_opts
}) {
  if (event.request.headers.get("x-sveltekit-error")) {
    return static_error_page(
      options2,
      status,
      /** @type {Error} */
      error2.message
    );
  }
  const fetched = [];
  try {
    const branch = [];
    const default_layout = await manifest2._.nodes[0]();
    const ssr = get_option([default_layout], "ssr") ?? true;
    const csr = get_option([default_layout], "csr") ?? true;
    if (ssr) {
      state.error = true;
      const server_data_promise = load_server_data({
        event,
        state,
        node: default_layout,
        parent: async () => ({}),
        track_server_fetches: options2.track_server_fetches
      });
      const server_data = await server_data_promise;
      const data = await load_data({
        event,
        fetched,
        node: default_layout,
        parent: async () => ({}),
        resolve_opts,
        server_data_promise,
        state,
        csr
      });
      branch.push(
        {
          node: default_layout,
          server_data,
          data
        },
        {
          node: await manifest2._.nodes[1](),
          // 1 is always the root error
          data: null,
          server_data: null
        }
      );
    }
    return await render_response({
      options: options2,
      manifest: manifest2,
      state,
      page_config: {
        ssr,
        csr: get_option([default_layout], "csr") ?? true
      },
      status,
      error: await handle_error_and_jsonify(event, options2, error2),
      branch,
      fetched,
      event,
      resolve_opts
    });
  } catch (e) {
    if (e instanceof Redirect) {
      return redirect_response(e.status, e.location);
    }
    return static_error_page(
      options2,
      e instanceof HttpError ? e.status : 500,
      (await handle_error_and_jsonify(event, options2, e)).message
    );
  }
}
function once(fn) {
  let done = false;
  let result;
  return () => {
    if (done)
      return result;
    done = true;
    return result = fn();
  };
}
var encoder = new TextEncoder();
async function render_data(event, route, options2, manifest2, state, invalidated_data_nodes, trailing_slash) {
  if (!route.page) {
    return new Response(void 0, {
      status: 404
    });
  }
  try {
    const node_ids = [...route.page.layouts, route.page.leaf];
    const invalidated = invalidated_data_nodes ?? node_ids.map(() => true);
    let aborted = false;
    const url = new URL(event.url);
    url.pathname = normalize_path(url.pathname, trailing_slash);
    const new_event = { ...event, url };
    const functions = node_ids.map((n, i) => {
      return once(async () => {
        try {
          if (aborted) {
            return (
              /** @type {import('types').ServerDataSkippedNode} */
              {
                type: "skip"
              }
            );
          }
          const node = n == void 0 ? n : await manifest2._.nodes[n]();
          return load_server_data({
            event: new_event,
            state,
            node,
            parent: async () => {
              const data2 = {};
              for (let j = 0; j < i; j += 1) {
                const parent = (
                  /** @type {import('types').ServerDataNode | null} */
                  await functions[j]()
                );
                if (parent) {
                  Object.assign(data2, parent.data);
                }
              }
              return data2;
            },
            track_server_fetches: options2.track_server_fetches
          });
        } catch (e) {
          aborted = true;
          throw e;
        }
      });
    });
    const promises = functions.map(async (fn, i) => {
      if (!invalidated[i]) {
        return (
          /** @type {import('types').ServerDataSkippedNode} */
          {
            type: "skip"
          }
        );
      }
      return fn();
    });
    let length = promises.length;
    const nodes = await Promise.all(
      promises.map(
        (p, i) => p.catch(async (error2) => {
          if (error2 instanceof Redirect) {
            throw error2;
          }
          length = Math.min(length, i + 1);
          return (
            /** @type {import('types').ServerErrorNode} */
            {
              type: "error",
              error: await handle_error_and_jsonify(event, options2, error2),
              status: error2 instanceof HttpError ? error2.status : void 0
            }
          );
        })
      )
    );
    const { data, chunks } = get_data_json(event, options2, nodes);
    if (!chunks) {
      return json_response(data);
    }
    return new Response(
      new ReadableStream({
        async start(controller) {
          controller.enqueue(encoder.encode(data));
          for await (const chunk of chunks) {
            controller.enqueue(encoder.encode(chunk));
          }
          controller.close();
        },
        type: "bytes"
      }),
      {
        headers: {
          // we use a proprietary content type to prevent buffering.
          // the `text` prefix makes it inspectable
          "content-type": "text/sveltekit-data",
          "cache-control": "private, no-store"
        }
      }
    );
  } catch (e) {
    const error2 = normalize_error(e);
    if (error2 instanceof Redirect) {
      return redirect_json_response(error2);
    } else {
      return json_response(await handle_error_and_jsonify(event, options2, error2), 500);
    }
  }
}
function json_response(json2, status = 200) {
  return text(typeof json2 === "string" ? json2 : JSON.stringify(json2), {
    status,
    headers: {
      "content-type": "application/json",
      "cache-control": "private, no-store"
    }
  });
}
function redirect_json_response(redirect) {
  return json_response({
    type: "redirect",
    location: redirect.location
  });
}
function get_data_json(event, options2, nodes) {
  let promise_id = 1;
  let count = 0;
  const { iterator, push, done } = create_async_iterator();
  const reducers = {
    /** @param {any} thing */
    Promise: (thing) => {
      if (typeof thing?.then === "function") {
        const id = promise_id++;
        count += 1;
        let key2 = "data";
        thing.catch(
          /** @param {any} e */
          async (e) => {
            key2 = "error";
            return handle_error_and_jsonify(
              event,
              options2,
              /** @type {any} */
              e
            );
          }
        ).then(
          /** @param {any} value */
          async (value) => {
            let str;
            try {
              str = stringify(value, reducers);
            } catch (e) {
              const error2 = await handle_error_and_jsonify(
                event,
                options2,
                new Error(`Failed to serialize promise while rendering ${event.route.id}`)
              );
              key2 = "error";
              str = stringify(error2, reducers);
            }
            count -= 1;
            push(`{"type":"chunk","id":${id},"${key2}":${str}}
`);
            if (count === 0)
              done();
          }
        );
        return id;
      }
    }
  };
  try {
    const strings = nodes.map((node) => {
      if (!node)
        return "null";
      if (node.type === "error" || node.type === "skip") {
        return JSON.stringify(node);
      }
      return `{"type":"data","data":${stringify(node.data, reducers)},${stringify_uses(
        node
      )}${node.slash ? `,"slash":${JSON.stringify(node.slash)}` : ""}}`;
    });
    return {
      data: `{"type":"data","nodes":[${strings.join(",")}]}
`,
      chunks: count > 0 ? iterator : null
    };
  } catch (e) {
    throw new Error(clarify_devalue_error(
      event,
      /** @type {any} */
      e
    ));
  }
}
var MAX_DEPTH = 10;
async function render_page(event, page2, options2, manifest2, state, resolve_opts) {
  if (state.depth > MAX_DEPTH) {
    return text(`Not found: ${event.url.pathname}`, {
      status: 404
      // TODO in some cases this should be 500. not sure how to differentiate
    });
  }
  if (is_action_json_request(event)) {
    const node = await manifest2._.nodes[page2.leaf]();
    return handle_action_json_request(event, options2, node?.server);
  }
  try {
    const nodes = await Promise.all([
      // we use == here rather than === because [undefined] serializes as "[null]"
      ...page2.layouts.map((n) => n == void 0 ? n : manifest2._.nodes[n]()),
      manifest2._.nodes[page2.leaf]()
    ]);
    const leaf_node = (
      /** @type {import('types').SSRNode} */
      nodes.at(-1)
    );
    let status = 200;
    let action_result = void 0;
    if (is_action_request(event)) {
      action_result = await handle_action_request(event, leaf_node.server);
      if (action_result?.type === "redirect") {
        return redirect_response(action_result.status, action_result.location);
      }
      if (action_result?.type === "error") {
        const error2 = action_result.error;
        status = error2 instanceof HttpError ? error2.status : 500;
      }
      if (action_result?.type === "failure") {
        status = action_result.status;
      }
    }
    const should_prerender_data = nodes.some((node) => node?.server);
    const data_pathname = add_data_suffix(event.url.pathname);
    const should_prerender = get_option(nodes, "prerender") ?? false;
    if (should_prerender) {
      const mod = leaf_node.server;
      if (mod?.actions) {
        throw new Error("Cannot prerender pages with actions");
      }
    } else if (state.prerendering) {
      return new Response(void 0, {
        status: 204
      });
    }
    state.prerender_default = should_prerender;
    const fetched = [];
    if (get_option(nodes, "ssr") === false && !state.prerendering) {
      return await render_response({
        branch: [],
        fetched,
        page_config: {
          ssr: false,
          csr: get_option(nodes, "csr") ?? true
        },
        status,
        error: null,
        event,
        options: options2,
        manifest: manifest2,
        state,
        resolve_opts
      });
    }
    const branch = [];
    let load_error = null;
    const server_promises = nodes.map((node, i) => {
      if (load_error) {
        throw load_error;
      }
      return Promise.resolve().then(async () => {
        try {
          if (node === leaf_node && action_result?.type === "error") {
            throw action_result.error;
          }
          return await load_server_data({
            event,
            state,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                const parent = await server_promises[j];
                if (parent)
                  Object.assign(data, await parent.data);
              }
              return data;
            },
            track_server_fetches: options2.track_server_fetches
          });
        } catch (e) {
          load_error = /** @type {Error} */
          e;
          throw load_error;
        }
      });
    });
    const csr = get_option(nodes, "csr") ?? true;
    const load_promises = nodes.map((node, i) => {
      if (load_error)
        throw load_error;
      return Promise.resolve().then(async () => {
        try {
          return await load_data({
            event,
            fetched,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                Object.assign(data, await load_promises[j]);
              }
              return data;
            },
            resolve_opts,
            server_data_promise: server_promises[i],
            state,
            csr
          });
        } catch (e) {
          load_error = /** @type {Error} */
          e;
          throw load_error;
        }
      });
    });
    for (const p of server_promises)
      p.catch(() => {
      });
    for (const p of load_promises)
      p.catch(() => {
      });
    for (let i = 0; i < nodes.length; i += 1) {
      const node = nodes[i];
      if (node) {
        try {
          const server_data = await server_promises[i];
          const data = await load_promises[i];
          branch.push({ node, server_data, data });
        } catch (e) {
          const err = normalize_error(e);
          if (err instanceof Redirect) {
            if (state.prerendering && should_prerender_data) {
              const body = JSON.stringify({
                type: "redirect",
                location: err.location
              });
              state.prerendering.dependencies.set(data_pathname, {
                response: text(body),
                body
              });
            }
            return redirect_response(err.status, err.location);
          }
          const status2 = err instanceof HttpError ? err.status : 500;
          const error2 = await handle_error_and_jsonify(event, options2, err);
          while (i--) {
            if (page2.errors[i]) {
              const index4 = (
                /** @type {number} */
                page2.errors[i]
              );
              const node2 = await manifest2._.nodes[index4]();
              let j = i;
              while (!branch[j])
                j -= 1;
              return await render_response({
                event,
                options: options2,
                manifest: manifest2,
                state,
                resolve_opts,
                page_config: { ssr: true, csr: true },
                status: status2,
                error: error2,
                branch: compact(branch.slice(0, j + 1)).concat({
                  node: node2,
                  data: null,
                  server_data: null
                }),
                fetched
              });
            }
          }
          return static_error_page(options2, status2, error2.message);
        }
      } else {
        branch.push(null);
      }
    }
    if (state.prerendering && should_prerender_data) {
      let { data, chunks } = get_data_json(
        event,
        options2,
        branch.map((node) => node?.server_data)
      );
      if (chunks) {
        for await (const chunk of chunks) {
          data += chunk;
        }
      }
      state.prerendering.dependencies.set(data_pathname, {
        response: text(data),
        body: data
      });
    }
    return await render_response({
      event,
      options: options2,
      manifest: manifest2,
      state,
      resolve_opts,
      page_config: {
        csr: get_option(nodes, "csr") ?? true,
        ssr: get_option(nodes, "ssr") ?? true
      },
      status,
      error: null,
      branch: compact(branch),
      action_result,
      fetched
    });
  } catch (e) {
    return await respond_with_error({
      event,
      options: options2,
      manifest: manifest2,
      state,
      status: 500,
      error: e,
      resolve_opts
    });
  }
}
function deprecate_missing_path(opts, method) {
  if (opts.path === void 0) {
    warn_with_callsite(
      `Calling \`cookies.${method}(...)\` without specifying a \`path\` is deprecated, and will be disallowed in SvelteKit 2.0. Relative paths can be used`,
      1
    );
  }
  if (opts.path === "") {
    warn_with_callsite(
      `Calling \`cookies.${method}(...)\` with \`path: ''\` will behave differently in SvelteKit 2.0. Instead of using the browser default behaviour, it will set the cookie path to the current pathname`,
      1
    );
  }
}
function get_cookies(request, url, trailing_slash) {
  const header = request.headers.get("cookie") ?? "";
  const initial_cookies = (0, import_cookie.parse)(header, { decode: (value) => value });
  const normalized_url = normalize_path(url.pathname, trailing_slash);
  const default_path = normalized_url.split("/").slice(0, -1).join("/") || "/";
  const new_cookies = {};
  const defaults = {
    httpOnly: true,
    sameSite: "lax",
    secure: url.hostname === "localhost" && url.protocol === "http:" ? false : true
  };
  const cookies = {
    // The JSDoc param annotations appearing below for get, set and delete
    // are necessary to expose the `cookie` library types to
    // typescript users. `@type {import('@sveltejs/kit').Cookies}` above is not
    // sufficient to do so.
    /**
     * @param {string} name
     * @param {import('cookie').CookieParseOptions} opts
     */
    get(name, opts) {
      const c = new_cookies[name];
      if (c && domain_matches(url.hostname, c.options.domain) && path_matches(url.pathname, c.options.path)) {
        return c.value;
      }
      const decoder = opts?.decode || decodeURIComponent;
      const req_cookies = (0, import_cookie.parse)(header, { decode: decoder });
      const cookie = req_cookies[name];
      return cookie;
    },
    /**
     * @param {import('cookie').CookieParseOptions} opts
     */
    getAll(opts) {
      const decoder = opts?.decode || decodeURIComponent;
      const cookies2 = (0, import_cookie.parse)(header, { decode: decoder });
      for (const c of Object.values(new_cookies)) {
        if (domain_matches(url.hostname, c.options.domain) && path_matches(url.pathname, c.options.path)) {
          cookies2[c.name] = c.value;
        }
      }
      return Object.entries(cookies2).map(([name, value]) => ({ name, value }));
    },
    /**
     * @param {string} name
     * @param {string} value
     * @param {import('cookie').CookieSerializeOptions} opts
     */
    set(name, value, opts = {}) {
      deprecate_missing_path(opts, "set");
      set_internal(name, value, { ...defaults, ...opts });
    },
    /**
     * @param {string} name
     * @param {import('cookie').CookieSerializeOptions} opts
     */
    delete(name, opts = {}) {
      deprecate_missing_path(opts, "delete");
      cookies.set(name, "", {
        path: default_path,
        // TODO 2.0 remove this
        ...opts,
        maxAge: 0
      });
    },
    /**
     * @param {string} name
     * @param {string} value
     * @param {import('cookie').CookieSerializeOptions} opts
     */
    serialize(name, value, opts = {}) {
      deprecate_missing_path(opts, "serialize");
      return (0, import_cookie.serialize)(name, value, {
        ...defaults,
        ...opts
      });
    }
  };
  function get_cookie_header(destination, header2) {
    const combined_cookies = {
      // cookies sent by the user agent have lowest precedence
      ...initial_cookies
    };
    for (const key2 in new_cookies) {
      const cookie = new_cookies[key2];
      if (!domain_matches(destination.hostname, cookie.options.domain))
        continue;
      if (!path_matches(destination.pathname, cookie.options.path))
        continue;
      const encoder2 = cookie.options.encode || encodeURIComponent;
      combined_cookies[cookie.name] = encoder2(cookie.value);
    }
    if (header2) {
      const parsed = (0, import_cookie.parse)(header2, { decode: (value) => value });
      for (const name in parsed) {
        combined_cookies[name] = parsed[name];
      }
    }
    return Object.entries(combined_cookies).map(([name, value]) => `${name}=${value}`).join("; ");
  }
  function set_internal(name, value, opts) {
    let path = opts.path;
    if (!opts.domain || opts.domain === url.hostname) {
      if (path) {
        if (path[0] === ".")
          path = resolve(url.pathname, path);
      } else {
        path = default_path;
      }
    }
    new_cookies[name] = {
      name,
      value,
      options: {
        ...opts,
        path
      }
    };
  }
  return { cookies, new_cookies, get_cookie_header, set_internal };
}
function domain_matches(hostname, constraint) {
  if (!constraint)
    return true;
  const normalized = constraint[0] === "." ? constraint.slice(1) : constraint;
  if (hostname === normalized)
    return true;
  return hostname.endsWith("." + normalized);
}
function path_matches(path, constraint) {
  if (!constraint)
    return true;
  const normalized = constraint.endsWith("/") ? constraint.slice(0, -1) : constraint;
  if (path === normalized)
    return true;
  return path.startsWith(normalized + "/");
}
function add_cookies_to_headers(headers, cookies) {
  for (const new_cookie of cookies) {
    const { name, value, options: options2 } = new_cookie;
    headers.append("set-cookie", (0, import_cookie.serialize)(name, value, options2));
  }
}
function create_fetch({ event, options: options2, manifest: manifest2, state, get_cookie_header, set_internal }) {
  const server_fetch = async (info, init2) => {
    const original_request = normalize_fetch_input(info, init2, event.url);
    let mode = (info instanceof Request ? info.mode : init2?.mode) ?? "cors";
    let credentials = (info instanceof Request ? info.credentials : init2?.credentials) ?? "same-origin";
    return options2.hooks.handleFetch({
      event,
      request: original_request,
      fetch: async (info2, init3) => {
        const request = normalize_fetch_input(info2, init3, event.url);
        const url = new URL(request.url);
        if (!request.headers.has("origin")) {
          request.headers.set("origin", event.url.origin);
        }
        if (info2 !== original_request) {
          mode = (info2 instanceof Request ? info2.mode : init3?.mode) ?? "cors";
          credentials = (info2 instanceof Request ? info2.credentials : init3?.credentials) ?? "same-origin";
        }
        if ((request.method === "GET" || request.method === "HEAD") && (mode === "no-cors" && url.origin !== event.url.origin || url.origin === event.url.origin)) {
          request.headers.delete("origin");
        }
        if (url.origin !== event.url.origin) {
          if (`.${url.hostname}`.endsWith(`.${event.url.hostname}`) && credentials !== "omit") {
            const cookie = get_cookie_header(url, request.headers.get("cookie"));
            if (cookie)
              request.headers.set("cookie", cookie);
          }
          return fetch(request);
        }
        const prefix = assets || base;
        const decoded = decodeURIComponent(url.pathname);
        const filename = (decoded.startsWith(prefix) ? decoded.slice(prefix.length) : decoded).slice(1);
        const filename_html = `${filename}/index.html`;
        const is_asset = manifest2.assets.has(filename);
        const is_asset_html = manifest2.assets.has(filename_html);
        if (is_asset || is_asset_html) {
          const file = is_asset ? filename : filename_html;
          if (state.read) {
            const type = is_asset ? manifest2.mimeTypes[filename.slice(filename.lastIndexOf("."))] : "text/html";
            return new Response(state.read(file), {
              headers: type ? { "content-type": type } : {}
            });
          }
          return await fetch(request);
        }
        if (credentials !== "omit") {
          const cookie = get_cookie_header(url, request.headers.get("cookie"));
          if (cookie) {
            request.headers.set("cookie", cookie);
          }
          const authorization = event.request.headers.get("authorization");
          if (authorization && !request.headers.has("authorization")) {
            request.headers.set("authorization", authorization);
          }
        }
        if (!request.headers.has("accept")) {
          request.headers.set("accept", "*/*");
        }
        if (!request.headers.has("accept-language")) {
          request.headers.set(
            "accept-language",
            /** @type {string} */
            event.request.headers.get("accept-language")
          );
        }
        const response = await respond(request, options2, manifest2, {
          ...state,
          depth: state.depth + 1
        });
        const set_cookie = response.headers.get("set-cookie");
        if (set_cookie) {
          for (const str of set_cookie_parser.splitCookiesString(set_cookie)) {
            const { name, value, ...options3 } = set_cookie_parser.parseString(str);
            set_internal(
              name,
              value,
              /** @type {import('cookie').CookieSerializeOptions} */
              options3
            );
          }
        }
        return response;
      }
    });
  };
  return (input, init2) => {
    const response = server_fetch(input, init2);
    response.catch(() => {
    });
    return response;
  };
}
function normalize_fetch_input(info, init2, url) {
  if (info instanceof Request) {
    return info;
  }
  return new Request(typeof info === "string" ? new URL(info, url) : info, init2);
}
function validator(expected) {
  function validate(module, file) {
    if (!module)
      return;
    for (const key2 in module) {
      if (key2[0] === "_" || expected.has(key2))
        continue;
      const values = [...expected.values()];
      const hint = hint_for_supported_files(key2, file?.slice(file.lastIndexOf("."))) ?? `valid exports are ${values.join(", ")}, or anything with a '_' prefix`;
      throw new Error(`Invalid export '${key2}'${file ? ` in ${file}` : ""} (${hint})`);
    }
  }
  return validate;
}
function hint_for_supported_files(key2, ext = ".js") {
  const supported_files = [];
  if (valid_layout_exports.has(key2)) {
    supported_files.push(`+layout${ext}`);
  }
  if (valid_page_exports.has(key2)) {
    supported_files.push(`+page${ext}`);
  }
  if (valid_layout_server_exports.has(key2)) {
    supported_files.push(`+layout.server${ext}`);
  }
  if (valid_page_server_exports.has(key2)) {
    supported_files.push(`+page.server${ext}`);
  }
  if (valid_server_exports.has(key2)) {
    supported_files.push(`+server${ext}`);
  }
  if (supported_files.length > 0) {
    return `'${key2}' is a valid export in ${supported_files.slice(0, -1).join(", ")}${supported_files.length > 1 ? " or " : ""}${supported_files.at(-1)}`;
  }
}
var valid_layout_exports = /* @__PURE__ */ new Set([
  "load",
  "prerender",
  "csr",
  "ssr",
  "trailingSlash",
  "config"
]);
var valid_page_exports = /* @__PURE__ */ new Set([...valid_layout_exports, "entries"]);
var valid_layout_server_exports = /* @__PURE__ */ new Set([...valid_layout_exports]);
var valid_page_server_exports = /* @__PURE__ */ new Set([...valid_layout_server_exports, "actions", "entries"]);
var valid_server_exports = /* @__PURE__ */ new Set([
  "GET",
  "POST",
  "PATCH",
  "PUT",
  "DELETE",
  "OPTIONS",
  "HEAD",
  "fallback",
  "prerender",
  "trailingSlash",
  "config",
  "entries"
]);
var validate_layout_exports = validator(valid_layout_exports);
var validate_page_exports = validator(valid_page_exports);
var validate_layout_server_exports = validator(valid_layout_server_exports);
var validate_page_server_exports = validator(valid_page_server_exports);
var validate_server_exports = validator(valid_server_exports);
var default_transform = ({ html }) => html;
var default_filter = () => false;
var default_preload = ({ type }) => type === "js" || type === "css";
var page_methods = /* @__PURE__ */ new Set(["GET", "HEAD", "POST"]);
var allowed_page_methods = /* @__PURE__ */ new Set(["GET", "HEAD", "OPTIONS"]);
async function respond(request, options2, manifest2, state) {
  const url = new URL(request.url);
  if (options2.csrf_check_origin) {
    const forbidden = is_form_content_type(request) && (request.method === "POST" || request.method === "PUT" || request.method === "PATCH" || request.method === "DELETE") && request.headers.get("origin") !== url.origin;
    if (forbidden) {
      const csrf_error = error(403, `Cross-site ${request.method} form submissions are forbidden`);
      if (request.headers.get("accept") === "application/json") {
        return json(csrf_error.body, { status: csrf_error.status });
      }
      return text(csrf_error.body.message, { status: csrf_error.status });
    }
  }
  let decoded;
  try {
    decoded = decode_pathname(url.pathname);
  } catch {
    return text("Malformed URI", { status: 400 });
  }
  let route = null;
  let params = {};
  if (base && !state.prerendering?.fallback) {
    if (!decoded.startsWith(base)) {
      return text("Not found", { status: 404 });
    }
    decoded = decoded.slice(base.length) || "/";
  }
  const is_data_request = has_data_suffix(decoded);
  let invalidated_data_nodes;
  if (is_data_request) {
    decoded = strip_data_suffix(decoded) || "/";
    url.pathname = strip_data_suffix(url.pathname) + (url.searchParams.get(TRAILING_SLASH_PARAM) === "1" ? "/" : "") || "/";
    url.searchParams.delete(TRAILING_SLASH_PARAM);
    invalidated_data_nodes = url.searchParams.get(INVALIDATED_PARAM)?.split("").map((node) => node === "1");
    url.searchParams.delete(INVALIDATED_PARAM);
  }
  if (!state.prerendering?.fallback) {
    const matchers = await manifest2._.matchers();
    for (const candidate of manifest2._.routes) {
      const match = candidate.pattern.exec(decoded);
      if (!match)
        continue;
      const matched = exec(match, candidate.params, matchers);
      if (matched) {
        route = candidate;
        params = decode_params(matched);
        break;
      }
    }
  }
  let trailing_slash = void 0;
  const headers = {};
  let cookies_to_add = {};
  const event = {
    // @ts-expect-error `cookies` and `fetch` need to be created after the `event` itself
    cookies: null,
    // @ts-expect-error
    fetch: null,
    getClientAddress: state.getClientAddress || (() => {
      throw new Error(
        `${"@sveltejs/adapter-vercel"} does not specify getClientAddress. Please raise an issue`
      );
    }),
    locals: {},
    params,
    platform: state.platform,
    request,
    route: { id: route?.id ?? null },
    setHeaders: (new_headers) => {
      for (const key2 in new_headers) {
        const lower = key2.toLowerCase();
        const value = new_headers[key2];
        if (lower === "set-cookie") {
          throw new Error(
            "Use `event.cookies.set(name, value, options)` instead of `event.setHeaders` to set cookies"
          );
        } else if (lower in headers) {
          throw new Error(`"${key2}" header is already set`);
        } else {
          headers[lower] = value;
          if (state.prerendering && lower === "cache-control") {
            state.prerendering.cache = /** @type {string} */
            value;
          }
        }
      }
    },
    url,
    isDataRequest: is_data_request,
    isSubRequest: state.depth > 0
  };
  let resolve_opts = {
    transformPageChunk: default_transform,
    filterSerializedResponseHeaders: default_filter,
    preload: default_preload
  };
  try {
    if (route) {
      if (url.pathname === base || url.pathname === base + "/") {
        trailing_slash = "always";
      } else if (route.page) {
        const nodes = await Promise.all([
          // we use == here rather than === because [undefined] serializes as "[null]"
          ...route.page.layouts.map((n) => n == void 0 ? n : manifest2._.nodes[n]()),
          manifest2._.nodes[route.page.leaf]()
        ]);
        if (DEV)
          ;
        trailing_slash = get_option(nodes, "trailingSlash");
      } else if (route.endpoint) {
        const node = await route.endpoint();
        trailing_slash = node.trailingSlash;
        if (DEV)
          ;
      }
      if (!is_data_request) {
        const normalized = normalize_path(url.pathname, trailing_slash ?? "never");
        if (normalized !== url.pathname && !state.prerendering?.fallback) {
          return new Response(void 0, {
            status: 308,
            headers: {
              "x-sveltekit-normalize": "1",
              location: (
                // ensure paths starting with '//' are not treated as protocol-relative
                (normalized.startsWith("//") ? url.origin + normalized : normalized) + (url.search === "?" ? "" : url.search)
              )
            }
          });
        }
      }
    }
    const { cookies, new_cookies, get_cookie_header, set_internal } = get_cookies(
      request,
      url,
      trailing_slash ?? "never"
    );
    cookies_to_add = new_cookies;
    event.cookies = cookies;
    event.fetch = create_fetch({
      event,
      options: options2,
      manifest: manifest2,
      state,
      get_cookie_header,
      set_internal
    });
    if (state.prerendering && !state.prerendering.fallback)
      disable_search(url);
    const response = await options2.hooks.handle({
      event,
      resolve: (event2, opts) => resolve2(event2, opts).then((response2) => {
        for (const key2 in headers) {
          const value = headers[key2];
          response2.headers.set(
            key2,
            /** @type {string} */
            value
          );
        }
        add_cookies_to_headers(response2.headers, Object.values(cookies_to_add));
        if (state.prerendering && event2.route.id !== null) {
          response2.headers.set("x-sveltekit-routeid", encodeURI(event2.route.id));
        }
        return response2;
      })
    });
    if (response.status === 200 && response.headers.has("etag")) {
      let if_none_match_value = request.headers.get("if-none-match");
      if (if_none_match_value?.startsWith('W/"')) {
        if_none_match_value = if_none_match_value.substring(2);
      }
      const etag = (
        /** @type {string} */
        response.headers.get("etag")
      );
      if (if_none_match_value === etag) {
        const headers2 = new Headers({ etag });
        for (const key2 of [
          "cache-control",
          "content-location",
          "date",
          "expires",
          "vary",
          "set-cookie"
        ]) {
          const value = response.headers.get(key2);
          if (value)
            headers2.set(key2, value);
        }
        return new Response(void 0, {
          status: 304,
          headers: headers2
        });
      }
    }
    if (is_data_request && response.status >= 300 && response.status <= 308) {
      const location = response.headers.get("location");
      if (location) {
        return redirect_json_response(new Redirect(
          /** @type {any} */
          response.status,
          location
        ));
      }
    }
    return response;
  } catch (e) {
    if (e instanceof Redirect) {
      const response = is_data_request ? redirect_json_response(e) : route?.page && is_action_json_request(event) ? action_json_redirect(e) : redirect_response(e.status, e.location);
      add_cookies_to_headers(response.headers, Object.values(cookies_to_add));
      return response;
    }
    return await handle_fatal_error(event, options2, e);
  }
  async function resolve2(event2, opts) {
    try {
      if (opts) {
        if ("ssr" in opts) {
          throw new Error(
            "ssr has been removed, set it in the appropriate +layout.js instead. See the PR for more information: https://github.com/sveltejs/kit/pull/6197"
          );
        }
        resolve_opts = {
          transformPageChunk: opts.transformPageChunk || default_transform,
          filterSerializedResponseHeaders: opts.filterSerializedResponseHeaders || default_filter,
          preload: opts.preload || default_preload
        };
      }
      if (state.prerendering?.fallback) {
        return await render_response({
          event: event2,
          options: options2,
          manifest: manifest2,
          state,
          page_config: { ssr: false, csr: true },
          status: 200,
          error: null,
          branch: [],
          fetched: [],
          resolve_opts
        });
      }
      if (route) {
        const method = (
          /** @type {import('types').HttpMethod} */
          event2.request.method
        );
        let response;
        if (is_data_request) {
          response = await render_data(
            event2,
            route,
            options2,
            manifest2,
            state,
            invalidated_data_nodes,
            trailing_slash ?? "never"
          );
        } else if (route.endpoint && (!route.page || is_endpoint_request(event2))) {
          response = await render_endpoint(event2, await route.endpoint(), state);
        } else if (route.page) {
          if (page_methods.has(method)) {
            response = await render_page(event2, route.page, options2, manifest2, state, resolve_opts);
          } else {
            const allowed_methods2 = new Set(allowed_page_methods);
            const node = await manifest2._.nodes[route.page.leaf]();
            if (node?.server?.actions) {
              allowed_methods2.add("POST");
            }
            if (method === "OPTIONS") {
              response = new Response(null, {
                status: 204,
                headers: {
                  allow: Array.from(allowed_methods2.values()).join(", ")
                }
              });
            } else {
              const mod = [...allowed_methods2].reduce(
                (acc, curr) => {
                  acc[curr] = true;
                  return acc;
                },
                /** @type {Record<string, any>} */
                {}
              );
              response = method_not_allowed(mod, method);
            }
          }
        } else {
          throw new Error("This should never happen");
        }
        if (request.method === "GET" && route.page && route.endpoint) {
          const vary = response.headers.get("vary")?.split(",")?.map((v) => v.trim().toLowerCase());
          if (!(vary?.includes("accept") || vary?.includes("*"))) {
            response = new Response(response.body, {
              status: response.status,
              statusText: response.statusText,
              headers: new Headers(response.headers)
            });
            response.headers.append("Vary", "Accept");
          }
        }
        return response;
      }
      if (state.error && event2.isSubRequest) {
        return await fetch(request, {
          headers: {
            "x-sveltekit-error": "true"
          }
        });
      }
      if (state.error) {
        return text("Internal Server Error", {
          status: 500
        });
      }
      if (state.depth === 0) {
        return await respond_with_error({
          event: event2,
          options: options2,
          manifest: manifest2,
          state,
          status: 404,
          error: new NotFound(event2.url.pathname),
          resolve_opts
        });
      }
      if (state.prerendering) {
        return text("not found", { status: 404 });
      }
      return await fetch(request);
    } catch (e) {
      return await handle_fatal_error(event2, options2, e);
    } finally {
      event2.cookies.set = () => {
        throw new Error("Cannot use `cookies.set(...)` after the response has been generated");
      };
      event2.setHeaders = () => {
        throw new Error("Cannot use `setHeaders(...)` after the response has been generated");
      };
    }
  }
}
function filter_private_env(env, { public_prefix, private_prefix }) {
  return Object.fromEntries(
    Object.entries(env).filter(
      ([k]) => k.startsWith(private_prefix) && (public_prefix === "" || !k.startsWith(public_prefix))
    )
  );
}
function filter_public_env(env, { public_prefix, private_prefix }) {
  return Object.fromEntries(
    Object.entries(env).filter(
      ([k]) => k.startsWith(public_prefix) && (private_prefix === "" || !k.startsWith(private_prefix))
    )
  );
}
var _options, _manifest;
var Server = class {
  /** @param {import('@sveltejs/kit').SSRManifest} manifest */
  constructor(manifest2) {
    /** @type {import('types').SSROptions} */
    __privateAdd(this, _options, void 0);
    /** @type {import('@sveltejs/kit').SSRManifest} */
    __privateAdd(this, _manifest, void 0);
    __privateSet(this, _options, options);
    __privateSet(this, _manifest, manifest2);
  }
  /**
   * @param {{
   *   env: Record<string, string>
   * }} opts
   */
  async init({ env }) {
    set_private_env(
      filter_private_env(env, {
        public_prefix: __privateGet(this, _options).env_public_prefix,
        private_prefix: __privateGet(this, _options).env_private_prefix
      })
    );
    set_public_env(
      filter_public_env(env, {
        public_prefix: __privateGet(this, _options).env_public_prefix,
        private_prefix: __privateGet(this, _options).env_private_prefix
      })
    );
    if (!__privateGet(this, _options).hooks) {
      try {
        const module = await get_hooks();
        __privateGet(this, _options).hooks = {
          handle: module.handle || (({ event, resolve: resolve2 }) => resolve2(event)),
          handleError: module.handleError || (({ error: error2 }) => console.error(error2)),
          handleFetch: module.handleFetch || (({ request, fetch: fetch2 }) => fetch2(request))
        };
      } catch (error2) {
        {
          throw error2;
        }
      }
    }
  }
  /**
   * @param {Request} request
   * @param {import('types').RequestOptions} options
   */
  async respond(request, options2) {
    if (!(request instanceof Request)) {
      throw new Error(
        "The first argument to server.respond must be a Request object. See https://github.com/sveltejs/kit/pull/3384 for details"
      );
    }
    return respond(request, __privateGet(this, _options), __privateGet(this, _manifest), {
      ...options2,
      error: false,
      depth: 0
    });
  }
};
_options = new WeakMap();
_manifest = new WeakMap();

// .svelte-kit/vercel-tmp/fn/manifest.js
var manifest = (() => {
  function __memo(fn) {
    let value;
    return () => value ?? (value = value = fn());
  }
  return {
    appDir: "_app",
    appPath: "_app",
    assets: /* @__PURE__ */ new Set(["favicon.png", "favicon.svg", "fonts/dollar.ttf", "fonts/graffity.ttf", "images/character.png", "images/contact/facebook.avif", "images/contact/instagram.avif", "images/contact/youtube.avif", "images/extensions/albany.png", "images/extensions/austria.png", "images/extensions/croatia.png", "images/extensions/czech.png", "images/extensions/england.png", "images/extensions/france.png", "images/extensions/germany.png", "images/extensions/italy.png", "images/extensions/poland.png", "images/extensions/russia.png", "images/extensions/spain.png", "images/extensions/sweden.png", "images/extensions/turkey.png", "images/extensions/ukraine.png", "images/gifs/100_red.gif", "images/gifs/1_2_3_black.gif", "images/gifs/break_cyher_black.gif", "images/gifs/calling_black.gif", "images/gifs/chill_black.gif", "images/gifs/coming_soon_black.gif", "images/gifs/congrats_black.gif", "images/gifs/corona_black.gif", "images/gifs/cypher_qeeen.gif", "images/gifs/dont_stop__black.gif", "images/gifs/download_black.gif", "images/gifs/easy_black.gif", "images/gifs/fresh_black.gif", "images/gifs/happy_b-day.gif", "images/gifs/hell_yeth_black.gif", "images/gifs/hey_bo_black.gif", "images/gifs/i`m_done_black.gif", "images/gifs/i`m_done_red.gif", "images/gifs/lets_go__black.gif", "images/gifs/new)album_black.gif", "images/gifs/new_post_black.gif", "images/gifs/new_single_black.gif", "images/gifs/ohhhh_shit_black.gif", "images/gifs/omg_black.gif", "images/gifs/on_black.gif", "images/gifs/on_fire_black.gif", "images/gifs/order_now_black.gif", "images/gifs/out_now_black.gif", "images/gifs/release_date_black.gif", "images/gifs/scheriff_black.gif", "images/gifs/shit_black.gif", "images/gifs/stream_black.gif", "images/gifs/thanks_black.gif", "images/gifs/today_black.gif", "images/gifs/today_red.gif", "images/gifs/tommorow_black.gif", "images/gifs/tommorow_red.gif", "images/gifs/turn_up_black.gif", "images/gifs/whut_black.gif", "images/gifs/yeah_black.gif", "images/gifs/yes_black.gif", "images/gifs/your_welcome.gif", "images/gifs/zavor_black.gif", "images/hero/artist.jpg", "images/hero/pieces.jpg", "images/hero/slang.jpg", "images/hero/slang_1.jpg", "images/hero/styles.jpg", "images/icons.ai", "images/logo.svg", "images/social/facebook.png", "images/social/fb.avif", "images/social/fb.jpg", "images/social/inst.avif", "images/social/inst.jpg", "images/social/instagram.png", "images/social/messenger.jpg", "images/social/oleg_medvedev.ai", "images/social/oleg_medvedev.png", "images/social/social.ai", "images/social/youtube.avif", "images/social/youtube.jpg", "images/social/youtube.png", "images/spray.svg", "images/styles/3d.webp", "images/styles/anti-style.webp", "images/styles/blockbuster.jpg", "images/styles/blockbuster.webp", "images/styles/brush.jpg", "images/styles/buble.jpg", "images/styles/calligraphy.jpg", "images/styles/character.JPG", "images/styles/etch.webp", "images/styles/fat-cap.jpg", "images/styles/handstyle.jpg", "images/styles/heaven-spot.webp", "images/styles/hollows.jpg", "images/styles/mural.webp", "images/styles/picha\xE7\xE3o.jpg", "images/styles/roller.jpg", "images/styles/semi-wildstyle.jpg", "images/styles/sharp.jpg", "images/styles/simple.jpg", "images/styles/stencils.webp", "images/styles/sticker-bobing.jpg", "images/styles/straight-letter.webp", "images/styles/tags.jpg", "images/styles/throw-ups.jpg", "images/styles/two-letter-throw-up.webp", "images/styles/wheat-paste.webp", "images/styles/wildstyle.jpg", "videos/big.mp4", "videos/clear.mp4", "videos/light.mp4"]),
    mimeTypes: { ".png": "image/png", ".svg": "image/svg+xml", ".ttf": "font/ttf", ".avif": "image/avif", ".gif": "image/gif", ".jpg": "image/jpeg", ".ai": "application/postscript", ".webp": "image/webp", ".JPG": "image/jpeg", ".mp4": "video/mp4" },
    _: {
      client: { "start": "_app/immutable/entry/start.b7abff22.js", "app": "_app/immutable/entry/app.a86a44ea.js", "imports": ["_app/immutable/entry/start.b7abff22.js", "_app/immutable/chunks/index.7225970f.js", "_app/immutable/chunks/singletons.b691b050.js", "_app/immutable/entry/app.a86a44ea.js", "_app/immutable/chunks/index.7225970f.js"], "stylesheets": [], "fonts": [] },
      nodes: [
        __memo(() => Promise.resolve().then(() => (init__(), __exports))),
        __memo(() => Promise.resolve().then(() => (init__2(), __exports2))),
        __memo(() => Promise.resolve().then(() => (init__3(), __exports3)))
      ],
      routes: [
        {
          id: "/",
          pattern: /^\/$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 2 },
          endpoint: null
        }
      ],
      matchers: async () => {
        return {};
      }
    }
  };
})();

// .svelte-kit/vercel-tmp/fn/edge.js
var server = new Server(manifest);
var initialized = server.init({
  env: (
    /** @type {Record<string, string>} */
    process.env
  )
});
var edge_default = async (request, context) => {
  await initialized;
  return server.respond(request, {
    getClientAddress() {
      return (
        /** @type {string} */
        request.headers.get("x-forwarded-for")
      );
    },
    platform: {
      context
    }
  });
};
export {
  edge_default as default
};
/*! Bundled license information:

cookie/index.js:
  (*!
   * cookie
   * Copyright(c) 2012-2014 Roman Shtylman
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)
*/
//# sourceMappingURL=index.js.map
