//tealium universal tag - utag.loader ut4.0.202605011042, Copyright 2026 Tealium.com Inc. All Rights Reserved.
(function(w) {
    if (typeof w.utag !== 'undefined' && typeof w.utag.e === 'object') {
        w.utag_events = w.utag.e;
        delete w.utag;
    }
}(window));
var utag_condload = false;
window.__tealium_twc_switch = false;
try {
    try {
        window.utag_cfg_ovrd = window.utag_cfg_ovrd || {};
        window.utag_cfg_ovrd.split_cookie = false;
    } catch (e) {
        console.log(e)
    }
} catch (e) {
    console.log(e);
}
if (!utag_condload) {
    try {
        window.utag_data = window.utag_data || {};
        if (window.performance && window.performance.timing && window.performance.timing.navigationStart) {
            window.utag_data.pageStartTime = window.performance.timing.navigationStart;
        } else {
            window.utag_data.pageStartTime = new Date().getTime();
        }
    } catch (e) {
        console.log(e);
    }
}
if (!utag_condload) {
    try {
        try {
            Drupal.settings.rmg_tealium.tealium_data.pageName = Drupal.settings.rmg_tealium.tealium_data.pageName.replace(/\u2013/g, "-");
        } catch (e) {}
        if (typeof(window.s) === "undefined") window.s = new Object;
        if (typeof(window.s.events) === "undefined") window.s.events = "";
        window.s.t = function() {
            window.s.tRunOnce = 1;
        };
        window.s.tl = function(target, type, linkName) {
            var data = s;
            data.eventTarget = s;
            data.link_type = type;
            data.link_name = linkName;
            data.pageName = tealium_s.pageName || s.pageName;
            utag.link(data);
        };
    } catch (e) {
        console.log(e);
    }
}
if (!utag_condload) {
    try {
        (function(a, b, c) {
            if (typeof utag_data == 'undefined') utag_data = {};
            a = location.pathname.split('/');
            b = (a.length > 9) ? 9 : a.length;
            for (c = 1; c < b; c++) {
                utag_data['_pathname' + c] = (typeof a[c] != 'undefined') ? a[c] : ''
            }
        })();
    } catch (e) {
        console.log(e);
    }
}
if (!utag_condload) {
    try {
        var dlp = document.location.pathname;
        if (dlp === "/user/register/personal" || dlp === "/user/register" || dlp === "/user/login" || dlp === "/discounts-payment/online-postage/create" || dlp === "/discounts-payment/online-postage/home") {
            var firejQueryTealium = true;
        }
        if (window.utag_data && window.utag_data.pageApplicationName === "RML - My Account") {
            var firejQueryTealium = true;
        }
        if (typeof firejQueryTealium !== "undefined" && firejQueryTealium) {
            ! function(a, b) {
                "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
                    if (!a.document) throw new Error("jQuery requires a window with a document");
                    return b(a)
                } : b(a)
            }("undefined" != typeof window ? window : this, function(a, b) {
                var c = [],
                    d = c.slice,
                    e = c.concat,
                    f = c.push,
                    g = c.indexOf,
                    h = {},
                    i = h.toString,
                    j = h.hasOwnProperty,
                    k = {},
                    l = "1.11.3",
                    m = function(a, b) {
                        return new m.fn.init(a, b)
                    },
                    n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                    o = /^-ms-/,
                    p = /-([\da-z])/gi,
                    q = function(a, b) {
                        return b.toUpperCase()
                    };
                m.fn = m.prototype = {
                    jquery: l,
                    constructor: m,
                    selector: "",
                    length: 0,
                    toArray: function() {
                        return d.call(this)
                    },
                    get: function(a) {
                        return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
                    },
                    pushStack: function(a) {
                        var b = m.merge(this.constructor(), a);
                        return b.prevObject = this, b.context = this.context, b
                    },
                    each: function(a, b) {
                        return m.each(this, a, b)
                    },
                    map: function(a) {
                        return this.pushStack(m.map(this, function(b, c) {
                            return a.call(b, c, b)
                        }))
                    },
                    slice: function() {
                        return this.pushStack(d.apply(this, arguments))
                    },
                    first: function() {
                        return this.eq(0)
                    },
                    last: function() {
                        return this.eq(-1)
                    },
                    eq: function(a) {
                        var b = this.length,
                            c = +a + (0 > a ? b : 0);
                        return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
                    },
                    end: function() {
                        return this.prevObject || this.constructor(null)
                    },
                    push: f,
                    sort: c.sort,
                    splice: c.splice
                }, m.extend = m.fn.extend = function() {
                    var a, b, c, d, e, f, g = arguments[0] || {},
                        h = 1,
                        i = arguments.length,
                        j = !1;
                    for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || m.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
                        if (null != (e = arguments[h]))
                            for (d in e) a = g[d], c = e[d], g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1, f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {}, g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c));
                    return g
                }, m.extend({
                    expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""),
                    isReady: !0,
                    error: function(a) {
                        throw new Error(a)
                    },
                    noop: function() {},
                    isFunction: function(a) {
                        return "function" === m.type(a)
                    },
                    isArray: Array.isArray || function(a) {
                        return "array" === m.type(a)
                    },
                    isWindow: function(a) {
                        return null != a && a == a.window
                    },
                    isNumeric: function(a) {
                        return !m.isArray(a) && a - parseFloat(a) + 1 >= 0
                    },
                    isEmptyObject: function(a) {
                        var b;
                        for (b in a) return !1;
                        return !0
                    },
                    isPlainObject: function(a) {
                        var b;
                        if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a)) return !1;
                        try {
                            if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf")) return !1
                        } catch (c) {
                            return !1
                        }
                        if (k.ownLast)
                            for (b in a) return j.call(a, b);
                        for (b in a);
                        return void 0 === b || j.call(a, b)
                    },
                    type: function(a) {
                        return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
                    },
                    globalEval: function(b) {
                        b && m.trim(b) && (a.execScript || function(b) {
                            a.eval.call(a, b)
                        })(b)
                    },
                    camelCase: function(a) {
                        return a.replace(o, "ms-").replace(p, q)
                    },
                    nodeName: function(a, b) {
                        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
                    },
                    each: function(a, b, c) {
                        var d, e = 0,
                            f = a.length,
                            g = r(a);
                        if (c) {
                            if (g) {
                                for (; f > e; e++)
                                    if (d = b.apply(a[e], c), d === !1) break
                            } else
                                for (e in a)
                                    if (d = b.apply(a[e], c), d === !1) break
                        } else if (g) {
                            for (; f > e; e++)
                                if (d = b.call(a[e], e, a[e]), d === !1) break
                        } else
                            for (e in a)
                                if (d = b.call(a[e], e, a[e]), d === !1) break;
                        return a
                    },
                    trim: function(a) {
                        return null == a ? "" : (a + "").replace(n, "")
                    },
                    makeArray: function(a, b) {
                        var c = b || [];
                        return null != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
                    },
                    inArray: function(a, b, c) {
                        var d;
                        if (b) {
                            if (g) return g.call(b, a, c);
                            for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                                if (c in b && b[c] === a) return c
                        }
                        return -1
                    },
                    merge: function(a, b) {
                        var c = +b.length,
                            d = 0,
                            e = a.length;
                        while (c > d) a[e++] = b[d++];
                        if (c !== c)
                            while (void 0 !== b[d]) a[e++] = b[d++];
                        return a.length = e, a
                    },
                    grep: function(a, b, c) {
                        for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
                        return e
                    },
                    map: function(a, b, c) {
                        var d, f = 0,
                            g = a.length,
                            h = r(a),
                            i = [];
                        if (h)
                            for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d);
                        else
                            for (f in a) d = b(a[f], f, c), null != d && i.push(d);
                        return e.apply([], i)
                    },
                    guid: 1,
                    proxy: function(a, b) {
                        var c, e, f;
                        return "string" == typeof b && (f = a[b], b = a, a = f), m.isFunction(a) ? (c = d.call(arguments, 2), e = function() {
                            return a.apply(b || this, c.concat(d.call(arguments)))
                        }, e.guid = a.guid = a.guid || m.guid++, e) : void 0
                    },
                    now: function() {
                        return +new Date
                    },
                    support: k
                }), m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
                    h["[object " + b + "]"] = b.toLowerCase()
                });

                function r(a) {
                    var b = "length" in a && a.length,
                        c = m.type(a);
                    return "function" === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
                }
                var s = function(a) {
                    var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
                        v = a.document,
                        w = 0,
                        x = 0,
                        y = ha(),
                        z = ha(),
                        A = ha(),
                        B = function(a, b) {
                            return a === b && (l = !0), 0
                        },
                        C = 1 << 31,
                        D = {}.hasOwnProperty,
                        E = [],
                        F = E.pop,
                        G = E.push,
                        H = E.push,
                        I = E.slice,
                        J = function(a, b) {
                            for (var c = 0, d = a.length; d > c; c++)
                                if (a[c] === b) return c;
                            return -1
                        },
                        K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                        L = "[\\x20\\t\\r\\n\\f]",
                        M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                        N = M.replace("w", "w#"),
                        O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]",
                        P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)",
                        Q = new RegExp(L + "+", "g"),
                        R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
                        S = new RegExp("^" + L + "*," + L + "*"),
                        T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
                        U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
                        V = new RegExp(P),
                        W = new RegExp("^" + N + "$"),
                        X = {
                            ID: new RegExp("^#(" + M + ")"),
                            CLASS: new RegExp("^\\.(" + M + ")"),
                            TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
                            ATTR: new RegExp("^" + O),
                            PSEUDO: new RegExp("^" + P),
                            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                            bool: new RegExp("^(?:" + K + ")$", "i"),
                            needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
                        },
                        Y = /^(?:input|select|textarea|button)$/i,
                        Z = /^h\d$/i,
                        $ = /^[^{]+\{\s*\[native \w/,
                        _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                        aa = /[+~]/,
                        ba = /'|\\/g,
                        ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
                        da = function(a, b, c) {
                            var d = "0x" + b - 65536;
                            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
                        },
                        ea = function() {
                            m()
                        };
                    try {
                        H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
                    } catch (fa) {
                        H = {
                            apply: E.length ? function(a, b) {
                                G.apply(a, I.call(b))
                            } : function(a, b) {
                                var c = a.length,
                                    d = 0;
                                while (a[c++] = b[d++]);
                                a.length = c - 1
                            }
                        }
                    }

                    function ga(a, b, d, e) {
                        var f, h, j, k, l, o, r, s, w, x;
                        if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) return d;
                        if (!e && p) {
                            if (11 !== k && (f = _.exec(a)))
                                if (j = f[1]) {
                                    if (9 === k) {
                                        if (h = b.getElementById(j), !h || !h.parentNode) return d;
                                        if (h.id === j) return d.push(h), d
                                    } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d
                                } else {
                                    if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                                    if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), d
                                }
                            if (c.qsa && (!q || !q.test(a))) {
                                if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                                    o = g(a), (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
                                    while (l--) o[l] = s + ra(o[l]);
                                    w = aa.test(a) && pa(b.parentNode) || b, x = o.join(",")
                                }
                                if (x) try {
                                    return H.apply(d, w.querySelectorAll(x)), d
                                } catch (y) {} finally {
                                    r || b.removeAttribute("id")
                                }
                            }
                        }
                        return i(a.replace(R, "$1"), b, d, e)
                    }

                    function ha() {
                        var a = [];

                        function b(c, e) {
                            return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
                        }
                        return b
                    }

                    function ia(a) {
                        return a[u] = !0, a
                    }

                    function ja(a) {
                        var b = n.createElement("div");
                        try {
                            return !!a(b)
                        } catch (c) {
                            return !1
                        } finally {
                            b.parentNode && b.parentNode.removeChild(b), b = null
                        }
                    }

                    function ka(a, b) {
                        var c = a.split("|"),
                            e = a.length;
                        while (e--) d.attrHandle[c[e]] = b
                    }

                    function la(a, b) {
                        var c = b && a,
                            d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
                        if (d) return d;
                        if (c)
                            while (c = c.nextSibling)
                                if (c === b) return -1;
                        return a ? 1 : -1
                    }

                    function ma(a) {
                        return function(b) {
                            var c = b.nodeName.toLowerCase();
                            return "input" === c && b.type === a
                        }
                    }

                    function na(a) {
                        return function(b) {
                            var c = b.nodeName.toLowerCase();
                            return ("input" === c || "button" === c) && b.type === a
                        }
                    }

                    function oa(a) {
                        return ia(function(b) {
                            return b = +b, ia(function(c, d) {
                                var e, f = a([], c.length, b),
                                    g = f.length;
                                while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                            })
                        })
                    }

                    function pa(a) {
                        return a && "undefined" != typeof a.getElementsByTagName && a
                    }
                    c = ga.support = {}, f = ga.isXML = function(a) {
                        var b = a && (a.ownerDocument || a).documentElement;
                        return b ? "HTML" !== b.nodeName : !1
                    }, m = ga.setDocument = function(a) {
                        var b, e, g = a ? a.ownerDocument || a : v;
                        return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)), p = !f(g), c.attributes = ja(function(a) {
                            return a.className = "i", !a.getAttribute("className")
                        }), c.getElementsByTagName = ja(function(a) {
                            return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length
                        }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function(a) {
                            return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length
                        }), c.getById ? (d.find.ID = function(a, b) {
                            if ("undefined" != typeof b.getElementById && p) {
                                var c = b.getElementById(a);
                                return c && c.parentNode ? [c] : []
                            }
                        }, d.filter.ID = function(a) {
                            var b = a.replace(ca, da);
                            return function(a) {
                                return a.getAttribute("id") === b
                            }
                        }) : (delete d.find.ID, d.filter.ID = function(a) {
                            var b = a.replace(ca, da);
                            return function(a) {
                                var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                                return c && c.value === b
                            }
                        }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                            return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
                        } : function(a, b) {
                            var c, d = [],
                                e = 0,
                                f = b.getElementsByTagName(a);
                            if ("*" === a) {
                                while (c = f[e++]) 1 === c.nodeType && d.push(c);
                                return d
                            }
                            return f
                        }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                            return p ? b.getElementsByClassName(a) : void 0
                        }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function(a) {
                            o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
                        }), ja(function(a) {
                            var b = g.createElement("input");
                            b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
                        })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function(a) {
                            c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P)
                        }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function(a, b) {
                            var c = 9 === a.nodeType ? a.documentElement : a,
                                d = b && b.parentNode;
                            return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                        } : function(a, b) {
                            if (b)
                                while (b = b.parentNode)
                                    if (b === a) return !0;
                            return !1
                        }, B = b ? function(a, b) {
                            if (a === b) return l = !0, 0;
                            var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                            return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
                        } : function(a, b) {
                            if (a === b) return l = !0, 0;
                            var c, d = 0,
                                e = a.parentNode,
                                f = b.parentNode,
                                h = [a],
                                i = [b];
                            if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                            if (e === f) return la(a, b);
                            c = a;
                            while (c = c.parentNode) h.unshift(c);
                            c = b;
                            while (c = c.parentNode) i.unshift(c);
                            while (h[d] === i[d]) d++;
                            return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
                        }, g) : n
                    }, ga.matches = function(a, b) {
                        return ga(a, null, null, b)
                    }, ga.matchesSelector = function(a, b) {
                        if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
                            var d = s.call(a, b);
                            if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
                        } catch (e) {}
                        return ga(b, n, null, [a]).length > 0
                    }, ga.contains = function(a, b) {
                        return (a.ownerDocument || a) !== n && m(a), t(a, b)
                    }, ga.attr = function(a, b) {
                        (a.ownerDocument || a) !== n && m(a);
                        var e = d.attrHandle[b.toLowerCase()],
                            f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
                        return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
                    }, ga.error = function(a) {
                        throw new Error("Syntax error, unrecognized expression: " + a)
                    }, ga.uniqueSort = function(a) {
                        var b, d = [],
                            e = 0,
                            f = 0;
                        if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                            while (b = a[f++]) b === a[f] && (e = d.push(f));
                            while (e--) a.splice(d[e], 1)
                        }
                        return k = null, a
                    }, e = ga.getText = function(a) {
                        var b, c = "",
                            d = 0,
                            f = a.nodeType;
                        if (f) {
                            if (1 === f || 9 === f || 11 === f) {
                                if ("string" == typeof a.textContent) return a.textContent;
                                for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                            } else if (3 === f || 4 === f) return a.nodeValue
                        } else
                            while (b = a[d++]) c += e(b);
                        return c
                    }, d = ga.selectors = {
                        cacheLength: 50,
                        createPseudo: ia,
                        match: X,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function(a) {
                                return a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                            },
                            CHILD: function(a) {
                                return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a
                            },
                            PSEUDO: function(a) {
                                var b, c = !a[6] && a[2];
                                return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function(a) {
                                var b = a.replace(ca, da).toLowerCase();
                                return "*" === a ? function() {
                                    return !0
                                } : function(a) {
                                    return a.nodeName && a.nodeName.toLowerCase() === b
                                }
                            },
                            CLASS: function(a) {
                                var b = y[a + " "];
                                return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                                    return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                                })
                            },
                            ATTR: function(a, b, c) {
                                return function(d) {
                                    var e = ga.attr(d, a);
                                    return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                                }
                            },
                            CHILD: function(a, b, c, d, e) {
                                var f = "nth" !== a.slice(0, 3),
                                    g = "last" !== a.slice(-4),
                                    h = "of-type" === b;
                                return 1 === d && 0 === e ? function(a) {
                                    return !!a.parentNode
                                } : function(b, c, i) {
                                    var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                                        q = b.parentNode,
                                        r = h && b.nodeName.toLowerCase(),
                                        s = !i && !h;
                                    if (q) {
                                        if (f) {
                                            while (p) {
                                                l = b;
                                                while (l = l[p])
                                                    if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                                o = p = "only" === a && !o && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                            k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                                            while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                                if (1 === l.nodeType && ++m && l === b) {
                                                    k[a] = [w, n, m];
                                                    break
                                                }
                                        } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];
                                        else
                                            while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                                if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break;
                                        return m -= e, m === d || m % d === 0 && m / d >= 0
                                    }
                                }
                            },
                            PSEUDO: function(a, b) {
                                var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                                return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function(a, c) {
                                    var d, f = e(a, b),
                                        g = f.length;
                                    while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
                                }) : function(a) {
                                    return e(a, 0, c)
                                }) : e
                            }
                        },
                        pseudos: {
                            not: ia(function(a) {
                                var b = [],
                                    c = [],
                                    d = h(a.replace(R, "$1"));
                                return d[u] ? ia(function(a, b, c, e) {
                                    var f, g = d(a, null, e, []),
                                        h = a.length;
                                    while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                                }) : function(a, e, f) {
                                    return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                                }
                            }),
                            has: ia(function(a) {
                                return function(b) {
                                    return ga(a, b).length > 0
                                }
                            }),
                            contains: ia(function(a) {
                                return a = a.replace(ca, da),
                                    function(b) {
                                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                                    }
                            }),
                            lang: ia(function(a) {
                                return W.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(ca, da).toLowerCase(),
                                    function(b) {
                                        var c;
                                        do
                                            if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                                        return !1
                                    }
                            }),
                            target: function(b) {
                                var c = a.location && a.location.hash;
                                return c && c.slice(1) === b.id
                            },
                            root: function(a) {
                                return a === o
                            },
                            focus: function(a) {
                                return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                            },
                            enabled: function(a) {
                                return a.disabled === !1
                            },
                            disabled: function(a) {
                                return a.disabled === !0
                            },
                            checked: function(a) {
                                var b = a.nodeName.toLowerCase();
                                return "input" === b && !!a.checked || "option" === b && !!a.selected
                            },
                            selected: function(a) {
                                return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                            },
                            empty: function(a) {
                                for (a = a.firstChild; a; a = a.nextSibling)
                                    if (a.nodeType < 6) return !1;
                                return !0
                            },
                            parent: function(a) {
                                return !d.pseudos.empty(a)
                            },
                            header: function(a) {
                                return Z.test(a.nodeName)
                            },
                            input: function(a) {
                                return Y.test(a.nodeName)
                            },
                            button: function(a) {
                                var b = a.nodeName.toLowerCase();
                                return "input" === b && "button" === a.type || "button" === b
                            },
                            text: function(a) {
                                var b;
                                return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                            },
                            first: oa(function() {
                                return [0]
                            }),
                            last: oa(function(a, b) {
                                return [b - 1]
                            }),
                            eq: oa(function(a, b, c) {
                                return [0 > c ? c + b : c]
                            }),
                            even: oa(function(a, b) {
                                for (var c = 0; b > c; c += 2) a.push(c);
                                return a
                            }),
                            odd: oa(function(a, b) {
                                for (var c = 1; b > c; c += 2) a.push(c);
                                return a
                            }),
                            lt: oa(function(a, b, c) {
                                for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                                return a
                            }),
                            gt: oa(function(a, b, c) {
                                for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                                return a
                            })
                        }
                    }, d.pseudos.nth = d.pseudos.eq;
                    for (b in {
                            radio: !0,
                            checkbox: !0,
                            file: !0,
                            password: !0,
                            image: !0
                        }) d.pseudos[b] = ma(b);
                    for (b in {
                            submit: !0,
                            reset: !0
                        }) d.pseudos[b] = na(b);

                    function qa() {}
                    qa.prototype = d.filters = d.pseudos, d.setFilters = new qa, g = ga.tokenize = function(a, b) {
                        var c, e, f, g, h, i, j, k = z[a + " "];
                        if (k) return b ? 0 : k.slice(0);
                        h = a, i = [], j = d.preFilter;
                        while (h) {
                            (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                                value: c,
                                type: e[0].replace(R, " ")
                            }), h = h.slice(c.length));
                            for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                                value: c,
                                type: g,
                                matches: e
                            }), h = h.slice(c.length));
                            if (!c) break
                        }
                        return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
                    };

                    function ra(a) {
                        for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
                        return d
                    }

                    function sa(a, b, c) {
                        var d = b.dir,
                            e = c && "parentNode" === d,
                            f = x++;
                        return b.first ? function(b, c, f) {
                            while (b = b[d])
                                if (1 === b.nodeType || e) return a(b, c, f)
                        } : function(b, c, g) {
                            var h, i, j = [w, f];
                            if (g) {
                                while (b = b[d])
                                    if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                            } else
                                while (b = b[d])
                                    if (1 === b.nodeType || e) {
                                        if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];
                                        if (i[d] = j, j[2] = a(b, c, g)) return !0
                                    }
                        }
                    }

                    function ta(a) {
                        return a.length > 1 ? function(b, c, d) {
                            var e = a.length;
                            while (e--)
                                if (!a[e](b, c, d)) return !1;
                            return !0
                        } : a[0]
                    }

                    function ua(a, b, c) {
                        for (var d = 0, e = b.length; e > d; d++) ga(a, b[d], c);
                        return c
                    }

                    function va(a, b, c, d, e) {
                        for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
                        return g
                    }

                    function wa(a, b, c, d, e, f) {
                        return d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia(function(f, g, h, i) {
                            var j, k, l, m = [],
                                n = [],
                                o = g.length,
                                p = f || ua(b || "*", h.nodeType ? [h] : h, []),
                                q = !a || !f && b ? p : va(p, m, a, h, i),
                                r = c ? e || (f ? a : o || d) ? [] : g : q;
                            if (c && c(q, r, h, i), d) {
                                j = va(r, n), d(j, [], h, i), k = j.length;
                                while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                            }
                            if (f) {
                                if (e || a) {
                                    if (e) {
                                        j = [], k = r.length;
                                        while (k--)(l = r[k]) && j.push(q[k] = l);
                                        e(null, r = [], j, i)
                                    }
                                    k = r.length;
                                    while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                                }
                            } else r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
                        })
                    }

                    function xa(a) {
                        for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function(a) {
                                return a === b
                            }, h, !0), l = sa(function(a) {
                                return J(b, a) > -1
                            }, h, !0), m = [function(a, c, d) {
                                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                                return b = null, e
                            }]; f > i; i++)
                            if (c = d.relative[a[i].type]) m = [sa(ta(m), c)];
                            else {
                                if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                                    for (e = ++i; f > e; e++)
                                        if (d.relative[a[e].type]) break;
                                    return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({
                                        value: " " === a[i - 2].type ? "*" : ""
                                    })).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a))
                                }
                                m.push(c)
                            }
                        return ta(m)
                    }

                    function ya(a, b) {
                        var c = b.length > 0,
                            e = a.length > 0,
                            f = function(f, g, h, i, k) {
                                var l, m, o, p = 0,
                                    q = "0",
                                    r = f && [],
                                    s = [],
                                    t = j,
                                    u = f || e && d.find.TAG("*", k),
                                    v = w += null == t ? 1 : Math.random() || .1,
                                    x = u.length;
                                for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                                    if (e && l) {
                                        m = 0;
                                        while (o = a[m++])
                                            if (o(l, g, h)) {
                                                i.push(l);
                                                break
                                            }
                                        k && (w = v)
                                    }
                                    c && ((l = !o && l) && p--, f && r.push(l))
                                }
                                if (p += q, c && q !== p) {
                                    m = 0;
                                    while (o = b[m++]) o(r, s, g, h);
                                    if (f) {
                                        if (p > 0)
                                            while (q--) r[q] || s[q] || (s[q] = F.call(i));
                                        s = va(s)
                                    }
                                    H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i)
                                }
                                return k && (w = v, j = t), r
                            };
                        return c ? ia(f) : f
                    }
                    return h = ga.compile = function(a, b) {
                        var c, d = [],
                            e = [],
                            f = A[a + " "];
                        if (!f) {
                            b || (b = g(a)), c = b.length;
                            while (c--) f = xa(b[c]), f[u] ? d.push(f) : e.push(f);
                            f = A(a, ya(e, d)), f.selector = a
                        }
                        return f
                    }, i = ga.select = function(a, b, e, f) {
                        var i, j, k, l, m, n = "function" == typeof a && a,
                            o = !f && g(a = n.selector || a);
                        if (e = e || [], 1 === o.length) {
                            if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                                if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], !b) return e;
                                n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                            }
                            i = X.needsContext.test(a) ? 0 : j.length;
                            while (i--) {
                                if (k = j[i], d.relative[l = k.type]) break;
                                if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
                                    if (j.splice(i, 1), a = f.length && ra(j), !a) return H.apply(e, f), e;
                                    break
                                }
                            }
                        }
                        return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e
                    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function(a) {
                        return 1 & a.compareDocumentPosition(n.createElement("div"))
                    }), ja(function(a) {
                        return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
                    }) || ka("type|href|height|width", function(a, b, c) {
                        return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
                    }), c.attributes && ja(function(a) {
                        return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
                    }) || ka("value", function(a, b, c) {
                        return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
                    }), ja(function(a) {
                        return null == a.getAttribute("disabled")
                    }) || ka(K, function(a, b, c) {
                        var d;
                        return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
                    }), ga
                }(a);
                m.find = s, m.expr = s.selectors, m.expr[":"] = m.expr.pseudos, m.unique = s.uniqueSort, m.text = s.getText, m.isXMLDoc = s.isXML, m.contains = s.contains;
                var t = m.expr.match.needsContext,
                    u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
                    v = /^.[^:#\[\.,]*$/;

                function w(a, b, c) {
                    if (m.isFunction(b)) return m.grep(a, function(a, d) {
                        return !!b.call(a, d, a) !== c
                    });
                    if (b.nodeType) return m.grep(a, function(a) {
                        return a === b !== c
                    });
                    if ("string" == typeof b) {
                        if (v.test(b)) return m.filter(b, a, c);
                        b = m.filter(b, a)
                    }
                    return m.grep(a, function(a) {
                        return m.inArray(a, b) >= 0 !== c
                    })
                }
                m.filter = function(a, b, c) {
                    var d = b[0];
                    return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [d] : [] : m.find.matches(a, m.grep(b, function(a) {
                        return 1 === a.nodeType
                    }))
                }, m.fn.extend({
                    find: function(a) {
                        var b, c = [],
                            d = this,
                            e = d.length;
                        if ("string" != typeof a) return this.pushStack(m(a).filter(function() {
                            for (b = 0; e > b; b++)
                                if (m.contains(d[b], this)) return !0
                        }));
                        for (b = 0; e > b; b++) m.find(a, d[b], c);
                        return c = this.pushStack(e > 1 ? m.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
                    },
                    filter: function(a) {
                        return this.pushStack(w(this, a || [], !1))
                    },
                    not: function(a) {
                        return this.pushStack(w(this, a || [], !0))
                    },
                    is: function(a) {
                        return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length
                    }
                });
                var x, y = a.document,
                    z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
                    A = m.fn.init = function(a, b) {
                        var c, d;
                        if (!a) return this;
                        if ("string" == typeof a) {
                            if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a);
                            if (c[1]) {
                                if (b = b instanceof m ? b[0] : b, m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), u.test(c[1]) && m.isPlainObject(b))
                                    for (c in b) m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                                return this
                            }
                            if (d = y.getElementById(c[2]), d && d.parentNode) {
                                if (d.id !== c[2]) return x.find(a);
                                this.length = 1, this[0] = d
                            }
                            return this.context = y, this.selector = a, this
                        }
                        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), m.makeArray(a, this))
                    };
                A.prototype = m.fn, x = m(y);
                var B = /^(?:parents|prev(?:Until|All))/,
                    C = {
                        children: !0,
                        contents: !0,
                        next: !0,
                        prev: !0
                    };
                m.extend({
                    dir: function(a, b, c) {
                        var d = [],
                            e = a[b];
                        while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c))) 1 === e.nodeType && d.push(e), e = e[b];
                        return d
                    },
                    sibling: function(a, b) {
                        for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
                        return c
                    }
                }), m.fn.extend({
                    has: function(a) {
                        var b, c = m(a, this),
                            d = c.length;
                        return this.filter(function() {
                            for (b = 0; d > b; b++)
                                if (m.contains(this, c[b])) return !0
                        })
                    },
                    closest: function(a, b) {
                        for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++)
                            for (c = this[d]; c && c !== b; c = c.parentNode)
                                if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) {
                                    f.push(c);
                                    break
                                }
                        return this.pushStack(f.length > 1 ? m.unique(f) : f)
                    },
                    index: function(a) {
                        return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                    },
                    add: function(a, b) {
                        return this.pushStack(m.unique(m.merge(this.get(), m(a, b))))
                    },
                    addBack: function(a) {
                        return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
                    }
                });

                function D(a, b) {
                    do a = a[b]; while (a && 1 !== a.nodeType);
                    return a
                }
                m.each({
                    parent: function(a) {
                        var b = a.parentNode;
                        return b && 11 !== b.nodeType ? b : null
                    },
                    parents: function(a) {
                        return m.dir(a, "parentNode")
                    },
                    parentsUntil: function(a, b, c) {
                        return m.dir(a, "parentNode", c)
                    },
                    next: function(a) {
                        return D(a, "nextSibling")
                    },
                    prev: function(a) {
                        return D(a, "previousSibling")
                    },
                    nextAll: function(a) {
                        return m.dir(a, "nextSibling")
                    },
                    prevAll: function(a) {
                        return m.dir(a, "previousSibling")
                    },
                    nextUntil: function(a, b, c) {
                        return m.dir(a, "nextSibling", c)
                    },
                    prevUntil: function(a, b, c) {
                        return m.dir(a, "previousSibling", c)
                    },
                    siblings: function(a) {
                        return m.sibling((a.parentNode || {}).firstChild, a)
                    },
                    children: function(a) {
                        return m.sibling(a.firstChild)
                    },
                    contents: function(a) {
                        return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes)
                    }
                }, function(a, b) {
                    m.fn[a] = function(c, d) {
                        var e = m.map(this, b, c);
                        return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = m.filter(d, e)), this.length > 1 && (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())), this.pushStack(e)
                    }
                });
                var E = /\S+/g,
                    F = {};

                function G(a) {
                    var b = F[a] = {};
                    return m.each(a.match(E) || [], function(a, c) {
                        b[c] = !0
                    }), b
                }
                m.Callbacks = function(a) {
                    a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);
                    var b, c, d, e, f, g, h = [],
                        i = !a.once && [],
                        j = function(l) {
                            for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++)
                                if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                                    c = !1;
                                    break
                                }
                            b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable())
                        },
                        k = {
                            add: function() {
                                if (h) {
                                    var d = h.length;
                                    ! function f(b) {
                                        m.each(b, function(b, c) {
                                            var d = m.type(c);
                                            "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c)
                                        })
                                    }(arguments), b ? e = h.length : c && (g = d, j(c))
                                }
                                return this
                            },
                            remove: function() {
                                return h && m.each(arguments, function(a, c) {
                                    var d;
                                    while ((d = m.inArray(c, h, d)) > -1) h.splice(d, 1), b && (e >= d && e--, f >= d && f--)
                                }), this
                            },
                            has: function(a) {
                                return a ? m.inArray(a, h) > -1 : !(!h || !h.length)
                            },
                            empty: function() {
                                return h = [], e = 0, this
                            },
                            disable: function() {
                                return h = i = c = void 0, this
                            },
                            disabled: function() {
                                return !h
                            },
                            lock: function() {
                                return i = void 0, c || k.disable(), this
                            },
                            locked: function() {
                                return !i
                            },
                            fireWith: function(a, c) {
                                return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this
                            },
                            fire: function() {
                                return k.fireWith(this, arguments), this
                            },
                            fired: function() {
                                return !!d
                            }
                        };
                    return k
                }, m.extend({
                    Deferred: function(a) {
                        var b = [
                                ["resolve", "done", m.Callbacks("once memory"), "resolved"],
                                ["reject", "fail", m.Callbacks("once memory"), "rejected"],
                                ["notify", "progress", m.Callbacks("memory")]
                            ],
                            c = "pending",
                            d = {
                                state: function() {
                                    return c
                                },
                                always: function() {
                                    return e.done(arguments).fail(arguments), this
                                },
                                then: function() {
                                    var a = arguments;
                                    return m.Deferred(function(c) {
                                        m.each(b, function(b, f) {
                                            var g = m.isFunction(a[b]) && a[b];
                                            e[f[1]](function() {
                                                var a = g && g.apply(this, arguments);
                                                a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                            })
                                        }), a = null
                                    }).promise()
                                },
                                promise: function(a) {
                                    return null != a ? m.extend(a, d) : d
                                }
                            },
                            e = {};
                        return d.pipe = d.then, m.each(b, function(a, f) {
                            var g = f[2],
                                h = f[3];
                            d[f[1]] = g.add, h && g.add(function() {
                                c = h
                            }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                                return e[f[0] + "With"](this === e ? d : this, arguments), this
                            }, e[f[0] + "With"] = g.fireWith
                        }), d.promise(e), a && a.call(e, e), e
                    },
                    when: function(a) {
                        var b = 0,
                            c = d.call(arguments),
                            e = c.length,
                            f = 1 !== e || a && m.isFunction(a.promise) ? e : 0,
                            g = 1 === f ? a : m.Deferred(),
                            h = function(a, b, c) {
                                return function(e) {
                                    b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                                }
                            },
                            i, j, k;
                        if (e > 1)
                            for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
                        return f || g.resolveWith(k, c), g.promise()
                    }
                });
                var H;
                m.fn.ready = function(a) {
                    return m.ready.promise().done(a), this
                }, m.extend({
                    isReady: !1,
                    readyWait: 1,
                    holdReady: function(a) {
                        a ? m.readyWait++ : m.ready(!0)
                    },
                    ready: function(a) {
                        if (a === !0 ? !--m.readyWait : !m.isReady) {
                            if (!y.body) return setTimeout(m.ready);
                            m.isReady = !0, a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [m]), m.fn.triggerHandler && (m(y).triggerHandler("ready"), m(y).off("ready")))
                        }
                    }
                });

                function I() {
                    y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1), a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J), a.detachEvent("onload", J))
                }

                function J() {
                    (y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(), m.ready())
                }
                m.ready.promise = function(b) {
                    if (!H)
                        if (H = m.Deferred(), "complete" === y.readyState) setTimeout(m.ready);
                        else if (y.addEventListener) y.addEventListener("DOMContentLoaded", J, !1), a.addEventListener("load", J, !1);
                    else {
                        y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);
                        var c = !1;
                        try {
                            c = null == a.frameElement && y.documentElement
                        } catch (d) {}
                        c && c.doScroll && ! function e() {
                            if (!m.isReady) {
                                try {
                                    c.doScroll("left")
                                } catch (a) {
                                    return setTimeout(e, 50)
                                }
                                I(), m.ready()
                            }
                        }()
                    }
                    return H.promise(b)
                };
                var K = "undefined",
                    L;
                for (L in m(k)) break;
                k.ownLast = "0" !== L, k.inlineBlockNeedsLayout = !1, m(function() {
                        var a, b, c, d;
                        c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d))
                    }),
                    function() {
                        var a = y.createElement("div");
                        if (null == k.deleteExpando) {
                            k.deleteExpando = !0;
                            try {
                                delete a.test
                            } catch (b) {
                                k.deleteExpando = !1
                            }
                        }
                        a = null
                    }(), m.acceptData = function(a) {
                        var b = m.noData[(a.nodeName + " ").toLowerCase()],
                            c = +a.nodeType || 1;
                        return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
                    };
                var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                    N = /([A-Z])/g;

                function O(a, b, c) {
                    if (void 0 === c && 1 === a.nodeType) {
                        var d = "data-" + b.replace(N, "-$1").toLowerCase();
                        if (c = a.getAttribute(d), "string" == typeof c) {
                            try {
                                c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : M.test(c) ? m.parseJSON(c) : c
                            } catch (e) {}
                            m.data(a, b, c)
                        } else c = void 0
                    }
                    return c
                }

                function P(a) {
                    var b;
                    for (b in a)
                        if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
                    return !0
                }

                function Q(a, b, d, e) {
                    if (m.acceptData(a)) {
                        var f, g, h = m.expando,
                            i = a.nodeType,
                            j = i ? m.cache : a,
                            k = i ? a[h] : a[h] && h;
                        if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || m.guid++ : h), j[k] || (j[k] = i ? {} : {
                            toJSON: m.noop
                        }), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[m.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[m.camelCase(b)])) : f = g, f
                    }
                }

                function R(a, b, c) {
                    if (m.acceptData(a)) {
                        var d, e, f = a.nodeType,
                            g = f ? m.cache : a,
                            h = f ? a[m.expando] : m.expando;
                        if (g[h]) {
                            if (b && (d = c ? g[h] : g[h].data)) {
                                m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [b] : (b = m.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                                while (e--) delete d[b[e]];
                                if (c ? !P(d) : !m.isEmptyObject(d)) return
                            }(c || (delete g[h].data, P(g[h]))) && (f ? m.cleanData([a], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
                        }
                    }
                }
                m.extend({
                    cache: {},
                    noData: {
                        "applet ": !0,
                        "embed ": !0,
                        "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
                    },
                    hasData: function(a) {
                        return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando], !!a && !P(a)
                    },
                    data: function(a, b, c) {
                        return Q(a, b, c)
                    },
                    removeData: function(a, b) {
                        return R(a, b)
                    },
                    _data: function(a, b, c) {
                        return Q(a, b, c, !0)
                    },
                    _removeData: function(a, b) {
                        return R(a, b, !0)
                    }
                }), m.fn.extend({
                    data: function(a, b) {
                        var c, d, e, f = this[0],
                            g = f && f.attributes;
                        if (void 0 === a) {
                            if (this.length && (e = m.data(f), 1 === f.nodeType && !m._data(f, "parsedAttrs"))) {
                                c = g.length;
                                while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)), O(f, d, e[d])));
                                m._data(f, "parsedAttrs", !0)
                            }
                            return e
                        }
                        return "object" == typeof a ? this.each(function() {
                            m.data(this, a)
                        }) : arguments.length > 1 ? this.each(function() {
                            m.data(this, a, b)
                        }) : f ? O(f, a, m.data(f, a)) : void 0
                    },
                    removeData: function(a) {
                        return this.each(function() {
                            m.removeData(this, a)
                        })
                    }
                }), m.extend({
                    queue: function(a, b, c) {
                        var d;
                        return a ? (b = (b || "fx") + "queue", d = m._data(a, b), c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)), d || []) : void 0
                    },
                    dequeue: function(a, b) {
                        b = b || "fx";
                        var c = m.queue(a, b),
                            d = c.length,
                            e = c.shift(),
                            f = m._queueHooks(a, b),
                            g = function() {
                                m.dequeue(a, b)
                            };
                        "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
                    },
                    _queueHooks: function(a, b) {
                        var c = b + "queueHooks";
                        return m._data(a, c) || m._data(a, c, {
                            empty: m.Callbacks("once memory").add(function() {
                                m._removeData(a, b + "queue"), m._removeData(a, c)
                            })
                        })
                    }
                }), m.fn.extend({
                    queue: function(a, b) {
                        var c = 2;
                        return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                            var c = m.queue(this, a, b);
                            m._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a)
                        })
                    },
                    dequeue: function(a) {
                        return this.each(function() {
                            m.dequeue(this, a)
                        })
                    },
                    clearQueue: function(a) {
                        return this.queue(a || "fx", [])
                    },
                    promise: function(a, b) {
                        var c, d = 1,
                            e = m.Deferred(),
                            f = this,
                            g = this.length,
                            h = function() {
                                --d || e.resolveWith(f, [f])
                            };
                        "string" != typeof a && (b = a, a = void 0), a = a || "fx";
                        while (g--) c = m._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
                        return h(), e.promise(b)
                    }
                });
                var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                    T = ["Top", "Right", "Bottom", "Left"],
                    U = function(a, b) {
                        return a = b || a, "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a)
                    },
                    V = m.access = function(a, b, c, d, e, f, g) {
                        var h = 0,
                            i = a.length,
                            j = null == c;
                        if ("object" === m.type(c)) {
                            e = !0;
                            for (h in c) m.access(a, b, h, c[h], !0, f, g)
                        } else if (void 0 !== d && (e = !0, m.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                                return j.call(m(a), c)
                            })), b))
                            for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
                        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
                    },
                    W = /^(?:checkbox|radio)$/i;
                ! function() {
                    var a = y.createElement("input"),
                        b = y.createElement("div"),
                        c = y.createDocumentFragment();
                    if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", k.leadingWhitespace = 3 === b.firstChild.nodeType, k.tbody = !b.getElementsByTagName("tbody").length, k.htmlSerialize = !!b.getElementsByTagName("link").length, k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), k.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, k.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function() {
                            k.noCloneEvent = !1
                        }), b.cloneNode(!0).click()), null == k.deleteExpando) {
                        k.deleteExpando = !0;
                        try {
                            delete b.test
                        } catch (d) {
                            k.deleteExpando = !1
                        }
                    }
                }(),
                function() {
                    var b, c, d = y.createElement("div");
                    for (b in {
                            submit: !0,
                            change: !0,
                            focusin: !0
                        }) c = "on" + b, (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), k[b + "Bubbles"] = d.attributes[c].expando === !1);
                    d = null
                }();
                var X = /^(?:input|select|textarea)$/i,
                    Y = /^key/,
                    Z = /^(?:mouse|pointer|contextmenu)|click/,
                    $ = /^(?:focusinfocus|focusoutblur)$/,
                    _ = /^([^.]*)(?:\.(.+)|)$/;

                function aa() {
                    return !0
                }

                function ba() {
                    return !1
                }

                function ca() {
                    try {
                        return y.activeElement
                    } catch (a) {}
                }
                m.event = {
                    global: {},
                    add: function(a, b, c, d, e) {
                        var f, g, h, i, j, k, l, n, o, p, q, r = m._data(a);
                        if (r) {
                            c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = m.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) {
                                return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments)
                            }, k.elem = a), b = (b || "").match(E) || [""], h = b.length;
                            while (h--) f = _.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = m.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = m.event.special[o] || {}, l = m.extend({
                                type: o,
                                origType: q,
                                data: d,
                                handler: c,
                                guid: c.guid,
                                selector: e,
                                needsContext: e && m.expr.match.needsContext.test(e),
                                namespace: p.join(".")
                            }, i), (n = g[o]) || (n = g[o] = [], n.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? n.splice(n.delegateCount++, 0, l) : n.push(l), m.event.global[o] = !0);
                            a = null
                        }
                    },
                    remove: function(a, b, c, d, e) {
                        var f, g, h, i, j, k, l, n, o, p, q, r = m.hasData(a) && m._data(a);
                        if (r && (k = r.events)) {
                            b = (b || "").match(E) || [""], j = b.length;
                            while (j--)
                                if (h = _.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                                    l = m.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, n = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = n.length;
                                    while (f--) g = n[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1), g.selector && n.delegateCount--, l.remove && l.remove.call(a, g));
                                    i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle), delete k[o])
                                } else
                                    for (o in k) m.event.remove(a, o + b[j], c, d, !0);
                            m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events"))
                        }
                    },
                    trigger: function(b, c, d, e) {
                        var f, g, h, i, k, l, n, o = [d || y],
                            p = j.call(b, "type") ? b.type : b,
                            q = j.call(b, "namespace") ? b.namespace.split(".") : [];
                        if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[m.expando] ? b : new m.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : m.makeArray(c, [b]), k = m.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
                            if (!e && !k.noBubble && !m.isWindow(d)) {
                                for (i = k.delegateType || p, $.test(i + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), l = h;
                                l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a)
                            }
                            n = 0;
                            while ((h = o[n++]) && !b.isPropagationStopped()) b.type = n > 1 ? i : k.bindType || p, f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
                            if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) {
                                l = d[g], l && (d[g] = null), m.event.triggered = p;
                                try {
                                    d[p]()
                                } catch (r) {}
                                m.event.triggered = void 0, l && (d[g] = l)
                            }
                            return b.result
                        }
                    },
                    dispatch: function(a) {
                        a = m.event.fix(a);
                        var b, c, e, f, g, h = [],
                            i = d.call(arguments),
                            j = (m._data(this, "events") || {})[a.type] || [],
                            k = m.event.special[a.type] || {};
                        if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                            h = m.event.handlers.call(this, a, j), b = 0;
                            while ((f = h[b++]) && !a.isPropagationStopped()) {
                                a.currentTarget = f.elem, g = 0;
                                while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()))
                            }
                            return k.postDispatch && k.postDispatch.call(this, a), a.result
                        }
                    },
                    handlers: function(a, b) {
                        var c, d, e, f, g = [],
                            h = b.delegateCount,
                            i = a.target;
                        if (h && i.nodeType && (!a.button || "click" !== a.type))
                            for (; i != this; i = i.parentNode || this)
                                if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                                    for (e = [], f = 0; h > f; f++) d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null, [i]).length), e[c] && e.push(d);
                                    e.length && g.push({
                                        elem: i,
                                        handlers: e
                                    })
                                }
                        return h < b.length && g.push({
                            elem: this,
                            handlers: b.slice(h)
                        }), g
                    },
                    fix: function(a) {
                        if (a[m.expando]) return a;
                        var b, c, d, e = a.type,
                            f = a,
                            g = this.fixHooks[e];
                        g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new m.Event(f), b = d.length;
                        while (b--) c = d[b], a[c] = f[c];
                        return a.target || (a.target = f.srcElement || y), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
                    },
                    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                    fixHooks: {},
                    keyHooks: {
                        props: "char charCode key keyCode".split(" "),
                        filter: function(a, b) {
                            return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
                        }
                    },
                    mouseHooks: {
                        props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                        filter: function(a, b) {
                            var c, d, e, f = b.button,
                                g = b.fromElement;
                            return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
                        }
                    },
                    special: {
                        load: {
                            noBubble: !0
                        },
                        focus: {
                            trigger: function() {
                                if (this !== ca() && this.focus) try {
                                    return this.focus(), !1
                                } catch (a) {}
                            },
                            delegateType: "focusin"
                        },
                        blur: {
                            trigger: function() {
                                return this === ca() && this.blur ? (this.blur(), !1) : void 0
                            },
                            delegateType: "focusout"
                        },
                        click: {
                            trigger: function() {
                                return m.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                            },
                            _default: function(a) {
                                return m.nodeName(a.target, "a")
                            }
                        },
                        beforeunload: {
                            postDispatch: function(a) {
                                void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                            }
                        }
                    },
                    simulate: function(a, b, c, d) {
                        var e = m.extend(new m.Event, c, {
                            type: a,
                            isSimulated: !0,
                            originalEvent: {}
                        });
                        d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
                    }
                }, m.removeEvent = y.removeEventListener ? function(a, b, c) {
                    a.removeEventListener && a.removeEventListener(b, c, !1)
                } : function(a, b, c) {
                    var d = "on" + b;
                    a.detachEvent && (typeof a[d] === K && (a[d] = null), a.detachEvent(d, c))
                }, m.Event = function(a, b) {
                    return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? aa : ba) : this.type = a, b && m.extend(this, b), this.timeStamp = a && a.timeStamp || m.now(), void(this[m.expando] = !0)) : new m.Event(a, b)
                }, m.Event.prototype = {
                    isDefaultPrevented: ba,
                    isPropagationStopped: ba,
                    isImmediatePropagationStopped: ba,
                    preventDefault: function() {
                        var a = this.originalEvent;
                        this.isDefaultPrevented = aa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
                    },
                    stopPropagation: function() {
                        var a = this.originalEvent;
                        this.isPropagationStopped = aa, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
                    },
                    stopImmediatePropagation: function() {
                        var a = this.originalEvent;
                        this.isImmediatePropagationStopped = aa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
                    }
                }, m.each({
                    mouseenter: "mouseover",
                    mouseleave: "mouseout",
                    pointerenter: "pointerover",
                    pointerleave: "pointerout"
                }, function(a, b) {
                    m.event.special[a] = {
                        delegateType: b,
                        bindType: b,
                        handle: function(a) {
                            var c, d = this,
                                e = a.relatedTarget,
                                f = a.handleObj;
                            return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
                        }
                    }
                }), k.submitBubbles || (m.event.special.submit = {
                    setup: function() {
                        return m.nodeName(this, "form") ? !1 : void m.event.add(this, "click._submit keypress._submit", function(a) {
                            var b = a.target,
                                c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form : void 0;
                            c && !m._data(c, "submitBubbles") && (m.event.add(c, "submit._submit", function(a) {
                                a._submit_bubble = !0
                            }), m._data(c, "submitBubbles", !0))
                        })
                    },
                    postDispatch: function(a) {
                        a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && m.event.simulate("submit", this.parentNode, a, !0))
                    },
                    teardown: function() {
                        return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit")
                    }
                }), k.changeBubbles || (m.event.special.change = {
                    setup: function() {
                        return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (m.event.add(this, "propertychange._change", function(a) {
                            "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
                        }), m.event.add(this, "click._change", function(a) {
                            this._just_changed && !a.isTrigger && (this._just_changed = !1), m.event.simulate("change", this, a, !0)
                        })), !1) : void m.event.add(this, "beforeactivate._change", function(a) {
                            var b = a.target;
                            X.test(b.nodeName) && !m._data(b, "changeBubbles") && (m.event.add(b, "change._change", function(a) {
                                !this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a, !0)
                            }), m._data(b, "changeBubbles", !0))
                        })
                    },
                    handle: function(a) {
                        var b = a.target;
                        return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
                    },
                    teardown: function() {
                        return m.event.remove(this, "._change"), !X.test(this.nodeName)
                    }
                }), k.focusinBubbles || m.each({
                    focus: "focusin",
                    blur: "focusout"
                }, function(a, b) {
                    var c = function(a) {
                        m.event.simulate(b, a.target, m.event.fix(a), !0)
                    };
                    m.event.special[b] = {
                        setup: function() {
                            var d = this.ownerDocument || this,
                                e = m._data(d, b);
                            e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1)
                        },
                        teardown: function() {
                            var d = this.ownerDocument || this,
                                e = m._data(d, b) - 1;
                            e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0), m._removeData(d, b))
                        }
                    }
                }), m.fn.extend({
                    on: function(a, b, c, d, e) {
                        var f, g;
                        if ("object" == typeof a) {
                            "string" != typeof b && (c = c || b, b = void 0);
                            for (f in a) this.on(f, b, c, a[f], e);
                            return this
                        }
                        if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = ba;
                        else if (!d) return this;
                        return 1 === e && (g = d, d = function(a) {
                            return m().off(a), g.apply(this, arguments)
                        }, d.guid = g.guid || (g.guid = m.guid++)), this.each(function() {
                            m.event.add(this, a, d, c, b)
                        })
                    },
                    one: function(a, b, c, d) {
                        return this.on(a, b, c, d, 1)
                    },
                    off: function(a, b, c) {
                        var d, e;
                        if (a && a.preventDefault && a.handleObj) return d = a.handleObj, m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
                        if ("object" == typeof a) {
                            for (e in a) this.off(e, b, a[e]);
                            return this
                        }
                        return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = ba), this.each(function() {
                            m.event.remove(this, a, c, b)
                        })
                    },
                    trigger: function(a, b) {
                        return this.each(function() {
                            m.event.trigger(a, b, this)
                        })
                    },
                    triggerHandler: function(a, b) {
                        var c = this[0];
                        return c ? m.event.trigger(a, b, c, !0) : void 0
                    }
                });

                function da(a) {
                    var b = ea.split("|"),
                        c = a.createDocumentFragment();
                    if (c.createElement)
                        while (b.length) c.createElement(b.pop());
                    return c
                }
                var ea = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
                    fa = / jQuery\d+="(?:null|\d+)"/g,
                    ga = new RegExp("<(?:" + ea + ")[\\s/>]", "i"),
                    ha = /^\s+/,
                    ia = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
                    ja = /<([\w:]+)/,
                    ka = /<tbody/i,
                    la = /<|&#?\w+;/,
                    ma = /<(?:script|style|link)/i,
                    na = /checked\s*(?:[^=]|=\s*.checked.)/i,
                    oa = /^$|\/(?:java|ecma)script/i,
                    pa = /^true\/(.*)/,
                    qa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
                    ra = {
                        option: [1, "<select multiple='multiple'>", "</select>"],
                        legend: [1, "<fieldset>", "</fieldset>"],
                        area: [1, "<map>", "</map>"],
                        param: [1, "<object>", "</object>"],
                        thead: [1, "<table>", "</table>"],
                        tr: [2, "<table><tbody>", "</tbody></table>"],
                        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                        _default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
                    },
                    sa = da(y),
                    ta = sa.appendChild(y.createElement("div"));
                ra.optgroup = ra.option, ra.tbody = ra.tfoot = ra.colgroup = ra.caption = ra.thead, ra.th = ra.td;

                function ua(a, b) {
                    var c, d, e = 0,
                        f = typeof a.getElementsByTagName !== K ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== K ? a.querySelectorAll(b || "*") : void 0;
                    if (!f)
                        for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ua(d, b));
                    return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f) : f
                }

                function va(a) {
                    W.test(a.type) && (a.defaultChecked = a.checked)
                }

                function wa(a, b) {
                    return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
                }

                function xa(a) {
                    return a.type = (null !== m.find.attr(a, "type")) + "/" + a.type, a
                }

                function ya(a) {
                    var b = pa.exec(a.type);
                    return b ? a.type = b[1] : a.removeAttribute("type"), a
                }

                function za(a, b) {
                    for (var c, d = 0; null != (c = a[d]); d++) m._data(c, "globalEval", !b || m._data(b[d], "globalEval"))
                }

                function Aa(a, b) {
                    if (1 === b.nodeType && m.hasData(a)) {
                        var c, d, e, f = m._data(a),
                            g = m._data(b, f),
                            h = f.events;
                        if (h) {
                            delete g.handle, g.events = {};
                            for (c in h)
                                for (d = 0, e = h[c].length; e > d; d++) m.event.add(b, c, h[c][d])
                        }
                        g.data && (g.data = m.extend({}, g.data))
                    }
                }

                function Ba(a, b) {
                    var c, d, e;
                    if (1 === b.nodeType) {
                        if (c = b.nodeName.toLowerCase(), !k.noCloneEvent && b[m.expando]) {
                            e = m._data(b);
                            for (d in e.events) m.removeEvent(b, d, e.handle);
                            b.removeAttribute(m.expando)
                        }
                        "script" === c && b.text !== a.text ? (xa(b).text = a.text, ya(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
                    }
                }
                m.extend({
                    clone: function(a, b, c) {
                        var d, e, f, g, h, i = m.contains(a.ownerDocument, a);
                        if (k.html5Clone || m.isXMLDoc(a) || !ga.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (ta.innerHTML = a.outerHTML, ta.removeChild(f = ta.firstChild)), !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a)))
                            for (d = ua(f), h = ua(a), g = 0; null != (e = h[g]); ++g) d[g] && Ba(e, d[g]);
                        if (b)
                            if (c)
                                for (h = h || ua(a), d = d || ua(f), g = 0; null != (e = h[g]); g++) Aa(e, d[g]);
                            else Aa(a, f);
                        return d = ua(f, "script"), d.length > 0 && za(d, !i && ua(a, "script")), d = h = e = null, f
                    },
                    buildFragment: function(a, b, c, d) {
                        for (var e, f, g, h, i, j, l, n = a.length, o = da(b), p = [], q = 0; n > q; q++)
                            if (f = a[q], f || 0 === f)
                                if ("object" === m.type(f)) m.merge(p, f.nodeType ? [f] : f);
                                else if (la.test(f)) {
                            h = h || o.appendChild(b.createElement("div")), i = (ja.exec(f) || ["", ""])[1].toLowerCase(), l = ra[i] || ra._default, h.innerHTML = l[1] + f.replace(ia, "<$1></$2>") + l[2], e = l[0];
                            while (e--) h = h.lastChild;
                            if (!k.leadingWhitespace && ha.test(f) && p.push(b.createTextNode(ha.exec(f)[0])), !k.tbody) {
                                f = "table" !== i || ka.test(f) ? "<table>" !== l[1] || ka.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length;
                                while (e--) m.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j)
                            }
                            m.merge(p, h.childNodes), h.textContent = "";
                            while (h.firstChild) h.removeChild(h.firstChild);
                            h = o.lastChild
                        } else p.push(b.createTextNode(f));
                        h && o.removeChild(h), k.appendChecked || m.grep(ua(p, "input"), va), q = 0;
                        while (f = p[q++])
                            if ((!d || -1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f), h = ua(o.appendChild(f), "script"), g && za(h), c)) {
                                e = 0;
                                while (f = h[e++]) oa.test(f.type || "") && c.push(f)
                            }
                        return h = null, o
                    },
                    cleanData: function(a, b) {
                        for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null != (d = a[h]); h++)
                            if ((b || m.acceptData(d)) && (f = d[i], g = f && j[f])) {
                                if (g.events)
                                    for (e in g.events) n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle);
                                j[f] && (delete j[f], l ? delete d[i] : typeof d.removeAttribute !== K ? d.removeAttribute(i) : d[i] = null, c.push(f))
                            }
                    }
                }), m.fn.extend({
                    text: function(a) {
                        return V(this, function(a) {
                            return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a))
                        }, null, a, arguments.length)
                    },
                    append: function() {
                        return this.domManip(arguments, function(a) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var b = wa(this, a);
                                b.appendChild(a)
                            }
                        })
                    },
                    prepend: function() {
                        return this.domManip(arguments, function(a) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var b = wa(this, a);
                                b.insertBefore(a, b.firstChild)
                            }
                        })
                    },
                    before: function() {
                        return this.domManip(arguments, function(a) {
                            this.parentNode && this.parentNode.insertBefore(a, this)
                        })
                    },
                    after: function() {
                        return this.domManip(arguments, function(a) {
                            this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
                        })
                    },
                    remove: function(a, b) {
                        for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || m.cleanData(ua(c)), c.parentNode && (b && m.contains(c.ownerDocument, c) && za(ua(c, "script")), c.parentNode.removeChild(c));
                        return this
                    },
                    empty: function() {
                        for (var a, b = 0; null != (a = this[b]); b++) {
                            1 === a.nodeType && m.cleanData(ua(a, !1));
                            while (a.firstChild) a.removeChild(a.firstChild);
                            a.options && m.nodeName(a, "select") && (a.options.length = 0)
                        }
                        return this
                    },
                    clone: function(a, b) {
                        return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                            return m.clone(this, a, b)
                        })
                    },
                    html: function(a) {
                        return V(this, function(a) {
                            var b = this[0] || {},
                                c = 0,
                                d = this.length;
                            if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(fa, "") : void 0;
                            if (!("string" != typeof a || ma.test(a) || !k.htmlSerialize && ga.test(a) || !k.leadingWhitespace && ha.test(a) || ra[(ja.exec(a) || ["", ""])[1].toLowerCase()])) {
                                a = a.replace(ia, "<$1></$2>");
                                try {
                                    for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (m.cleanData(ua(b, !1)), b.innerHTML = a);
                                    b = 0
                                } catch (e) {}
                            }
                            b && this.empty().append(a)
                        }, null, a, arguments.length)
                    },
                    replaceWith: function() {
                        var a = arguments[0];
                        return this.domManip(arguments, function(b) {
                            a = this.parentNode, m.cleanData(ua(this)), a && a.replaceChild(b, this)
                        }), a && (a.length || a.nodeType) ? this : this.remove()
                    },
                    detach: function(a) {
                        return this.remove(a, !0)
                    },
                    domManip: function(a, b) {
                        a = e.apply([], a);
                        var c, d, f, g, h, i, j = 0,
                            l = this.length,
                            n = this,
                            o = l - 1,
                            p = a[0],
                            q = m.isFunction(p);
                        if (q || l > 1 && "string" == typeof p && !k.checkClone && na.test(p)) return this.each(function(c) {
                            var d = n.eq(c);
                            q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
                        });
                        if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) {
                            for (g = m.map(ua(i, "script"), xa), f = g.length; l > j; j++) d = i, j !== o && (d = m.clone(d, !0, !0), f && m.merge(g, ua(d, "script"))), b.call(this[j], d, j);
                            if (f)
                                for (h = g[g.length - 1].ownerDocument, m.map(g, ya), j = 0; f > j; j++) d = g[j], oa.test(d.type || "") && !m._data(d, "globalEval") && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qa, "")));
                            i = c = null
                        }
                        return this
                    }
                }), m.each({
                    appendTo: "append",
                    prependTo: "prepend",
                    insertBefore: "before",
                    insertAfter: "after",
                    replaceAll: "replaceWith"
                }, function(a, b) {
                    m.fn[a] = function(a) {
                        for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), m(g[d])[b](c), f.apply(e, c.get());
                        return this.pushStack(e)
                    }
                });
                var Ca, Da = {};

                function Ea(b, c) {
                    var d, e = m(c.createElement(b)).appendTo(c.body),
                        f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], "display");
                    return e.detach(), f
                }

                function Fa(a) {
                    var b = y,
                        c = Da[a];
                    return c || (c = Ea(a, b), "none" !== c && c || (Ca = (Ca || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ca[0].contentWindow || Ca[0].contentDocument).document, b.write(), b.close(), c = Ea(a, b), Ca.detach()), Da[a] = c), c
                }! function() {
                    var a;
                    k.shrinkWrapBlocks = function() {
                        if (null != a) return a;
                        a = !1;
                        var b, c, d;
                        return c = y.getElementsByTagName("body")[0], c && c.style ? (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(y.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0
                    }
                }();
                var Ga = /^margin/,
                    Ha = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
                    Ia, Ja, Ka = /^(top|right|bottom|left)$/;
                a.getComputedStyle ? (Ia = function(b) {
                    return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
                }, Ja = function(a, b, c) {
                    var d, e, f, g, h = a.style;
                    return c = c || Ia(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)), Ha.test(g) && Ga.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
                }) : y.documentElement.currentStyle && (Ia = function(a) {
                    return a.currentStyle
                }, Ja = function(a, b, c) {
                    var d, e, f, g, h = a.style;
                    return c = c || Ia(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Ha.test(g) && !Ka.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
                });

                function La(a, b) {
                    return {
                        get: function() {
                            var c = a();
                            if (null != c) return c ? void delete this.get : (this.get = b).apply(this, arguments)
                        }
                    }
                }! function() {
                    var b, c, d, e, f, g, h;
                    if (b = y.createElement("div"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = d && d.style) {
                        c.cssText = "float:left;opacity:.5", k.opacity = "0.5" === c.opacity, k.cssFloat = !!c.cssFloat, b.style.backgroundClip = "content-box", b.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === b.style.backgroundClip, k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing, m.extend(k, {
                            reliableHiddenOffsets: function() {
                                return null == g && i(), g
                            },
                            boxSizingReliable: function() {
                                return null == f && i(), f
                            },
                            pixelPosition: function() {
                                return null == e && i(), e
                            },
                            reliableMarginRight: function() {
                                return null == h && i(), h
                            }
                        });

                        function i() {
                            var b, c, d, i;
                            c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", e = f = !1, h = !0, a.getComputedStyle && (e = "1%" !== (a.getComputedStyle(b, null) || {}).top, f = "4px" === (a.getComputedStyle(b, null) || {
                                width: "4px"
                            }).width, i = b.appendChild(y.createElement("div")), i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", b.style.width = "1px", h = !parseFloat((a.getComputedStyle(i, null) || {}).marginRight), b.removeChild(i)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = b.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", g = 0 === i[0].offsetHeight, g && (i[0].style.display = "", i[1].style.display = "none", g = 0 === i[0].offsetHeight), c.removeChild(d))
                        }
                    }
                }(), m.swap = function(a, b, c, d) {
                    var e, f, g = {};
                    for (f in b) g[f] = a.style[f], a.style[f] = b[f];
                    e = c.apply(a, d || []);
                    for (f in b) a.style[f] = g[f];
                    return e
                };
                var Ma = /alpha\([^)]*\)/i,
                    Na = /opacity\s*=\s*([^)]*)/,
                    Oa = /^(none|table(?!-c[ea]).+)/,
                    Pa = new RegExp("^(" + S + ")(.*)$", "i"),
                    Qa = new RegExp("^([+-])=(" + S + ")", "i"),
                    Ra = {
                        position: "absolute",
                        visibility: "hidden",
                        display: "block"
                    },
                    Sa = {
                        letterSpacing: "0",
                        fontWeight: "400"
                    },
                    Ta = ["Webkit", "O", "Moz", "ms"];

                function Ua(a, b) {
                    if (b in a) return b;
                    var c = b.charAt(0).toUpperCase() + b.slice(1),
                        d = b,
                        e = Ta.length;
                    while (e--)
                        if (b = Ta[e] + c, b in a) return b;
                    return d
                }

                function Va(a, b) {
                    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = m._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && U(d) && (f[g] = m._data(d, "olddisplay", Fa(d.nodeName)))) : (e = U(d), (c && "none" !== c || !e) && m._data(d, "olddisplay", e ? c : m.css(d, "display"))));
                    for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
                    return a
                }

                function Wa(a, b, c) {
                    var d = Pa.exec(b);
                    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
                }

                function Xa(a, b, c, d, e) {
                    for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += m.css(a, c + T[f], !0, e)), d ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)), "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e))) : (g += m.css(a, "padding" + T[f], !0, e), "padding" !== c && (g += m.css(a, "border" + T[f] + "Width", !0, e)));
                    return g
                }

                function Ya(a, b, c) {
                    var d = !0,
                        e = "width" === b ? a.offsetWidth : a.offsetHeight,
                        f = Ia(a),
                        g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f);
                    if (0 >= e || null == e) {
                        if (e = Ja(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ha.test(e)) return e;
                        d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
                    }
                    return e + Xa(a, b, c || (g ? "border" : "content"), d, f) + "px"
                }
                m.extend({
                    cssHooks: {
                        opacity: {
                            get: function(a, b) {
                                if (b) {
                                    var c = Ja(a, "opacity");
                                    return "" === c ? "1" : c
                                }
                            }
                        }
                    },
                    cssNumber: {
                        columnCount: !0,
                        fillOpacity: !0,
                        flexGrow: !0,
                        flexShrink: !0,
                        fontWeight: !0,
                        lineHeight: !0,
                        opacity: !0,
                        order: !0,
                        orphans: !0,
                        widows: !0,
                        zIndex: !0,
                        zoom: !0
                    },
                    cssProps: {
                        "float": k.cssFloat ? "cssFloat" : "styleFloat"
                    },
                    style: function(a, b, c, d) {
                        if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                            var e, f, g, h = m.camelCase(b),
                                i = a.style;
                            if (b = m.cssProps[h] || (m.cssProps[h] = Ua(i, h)), g = m.cssHooks[b] || m.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                            if (f = typeof c, "string" === f && (e = Qa.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || m.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
                                i[b] = c
                            } catch (j) {}
                        }
                    },
                    css: function(a, b, c, d) {
                        var e, f, g, h = m.camelCase(b);
                        return b = m.cssProps[h] || (m.cssProps[h] = Ua(a.style, h)), g = m.cssHooks[b] || m.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Ja(a, b, d)), "normal" === f && b in Sa && (f = Sa[b]), "" === c || c ? (e = parseFloat(f), c === !0 || m.isNumeric(e) ? e || 0 : f) : f
                    }
                }), m.each(["height", "width"], function(a, b) {
                    m.cssHooks[b] = {
                        get: function(a, c, d) {
                            return c ? Oa.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Ra, function() {
                                return Ya(a, b, d)
                            }) : Ya(a, b, d) : void 0
                        },
                        set: function(a, c, d) {
                            var e = d && Ia(a);
                            return Wa(a, c, d ? Xa(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e), e) : 0)
                        }
                    }
                }), k.opacity || (m.cssHooks.opacity = {
                    get: function(a, b) {
                        return Na.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
                    },
                    set: function(a, b) {
                        var c = a.style,
                            d = a.currentStyle,
                            e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                            f = d && d.filter || c.filter || "";
                        c.zoom = 1, (b >= 1 || "" === b) && "" === m.trim(f.replace(Ma, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Ma.test(f) ? f.replace(Ma, e) : f + " " + e)
                    }
                }), m.cssHooks.marginRight = La(k.reliableMarginRight, function(a, b) {
                    return b ? m.swap(a, {
                        display: "inline-block"
                    }, Ja, [a, "marginRight"]) : void 0
                }), m.each({
                    margin: "",
                    padding: "",
                    border: "Width"
                }, function(a, b) {
                    m.cssHooks[a + b] = {
                        expand: function(c) {
                            for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + T[d] + b] = f[d] || f[d - 2] || f[0];
                            return e
                        }
                    }, Ga.test(a) || (m.cssHooks[a + b].set = Wa)
                }), m.fn.extend({
                    css: function(a, b) {
                        return V(this, function(a, b, c) {
                            var d, e, f = {},
                                g = 0;
                            if (m.isArray(b)) {
                                for (d = Ia(a), e = b.length; e > g; g++) f[b[g]] = m.css(a, b[g], !1, d);
                                return f
                            }
                            return void 0 !== c ? m.style(a, b, c) : m.css(a, b)
                        }, a, b, arguments.length > 1)
                    },
                    show: function() {
                        return Va(this, !0)
                    },
                    hide: function() {
                        return Va(this)
                    },
                    toggle: function(a) {
                        return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                            U(this) ? m(this).show() : m(this).hide()
                        })
                    }
                });

                function Za(a, b, c, d, e) {
                    return new Za.prototype.init(a, b, c, d, e)
                }
                m.Tween = Za, Za.prototype = {
                    constructor: Za,
                    init: function(a, b, c, d, e, f) {
                        this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (m.cssNumber[c] ? "" : "px")
                    },
                    cur: function() {
                        var a = Za.propHooks[this.prop];
                        return a && a.get ? a.get(this) : Za.propHooks._default.get(this)
                    },
                    run: function(a) {
                        var b, c = Za.propHooks[this.prop];
                        return this.options.duration ? this.pos = b = m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Za.propHooks._default.set(this), this
                    }
                }, Za.prototype.init.prototype = Za.prototype, Za.propHooks = {
                    _default: {
                        get: function(a) {
                            var b;
                            return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
                        },
                        set: function(a) {
                            m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
                        }
                    }
                }, Za.propHooks.scrollTop = Za.propHooks.scrollLeft = {
                    set: function(a) {
                        a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
                    }
                }, m.easing = {
                    linear: function(a) {
                        return a
                    },
                    swing: function(a) {
                        return .5 - Math.cos(a * Math.PI) / 2
                    }
                }, m.fx = Za.prototype.init, m.fx.step = {};
                var $a, _a, ab = /^(?:toggle|show|hide)$/,
                    bb = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
                    cb = /queueHooks$/,
                    db = [ib],
                    eb = {
                        "*": [function(a, b) {
                            var c = this.createTween(a, b),
                                d = c.cur(),
                                e = bb.exec(b),
                                f = e && e[3] || (m.cssNumber[a] ? "" : "px"),
                                g = (m.cssNumber[a] || "px" !== f && +d) && bb.exec(m.css(c.elem, a)),
                                h = 1,
                                i = 20;
                            if (g && g[3] !== f) {
                                f = f || g[3], e = e || [], g = +d || 1;
                                do h = h || ".5", g /= h, m.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                            }
                            return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
                        }]
                    };

                function fb() {
                    return setTimeout(function() {
                        $a = void 0
                    }), $a = m.now()
                }

                function gb(a, b) {
                    var c, d = {
                            height: a
                        },
                        e = 0;
                    for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = T[e], d["margin" + c] = d["padding" + c] = a;
                    return b && (d.opacity = d.width = a), d
                }

                function hb(a, b, c) {
                    for (var d, e = (eb[b] || []).concat(eb["*"]), f = 0, g = e.length; g > f; f++)
                        if (d = e[f].call(c, b, a)) return d
                }

                function ib(a, b, c) {
                    var d, e, f, g, h, i, j, l, n = this,
                        o = {},
                        p = a.style,
                        q = a.nodeType && U(a),
                        r = m._data(a, "fxshow");
                    c.queue || (h = m._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
                        h.unqueued || i()
                    }), h.unqueued++, n.always(function() {
                        n.always(function() {
                            h.unqueued--, m.queue(a, "fx").length || h.empty.fire()
                        })
                    })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = m.css(a, "display"), l = "none" === j ? m._data(a, "olddisplay") || Fa(a.nodeName) : j, "inline" === l && "none" === m.css(a, "float") && (k.inlineBlockNeedsLayout && "inline" !== Fa(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", k.shrinkWrapBlocks() || n.always(function() {
                        p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
                    }));
                    for (d in b)
                        if (e = b[d], ab.exec(e)) {
                            if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                                if ("show" !== e || !r || void 0 === r[d]) continue;
                                q = !0
                            }
                            o[d] = r && r[d] || m.style(a, d)
                        } else j = void 0;
                    if (m.isEmptyObject(o)) "inline" === ("none" === j ? Fa(a.nodeName) : j) && (p.display = j);
                    else {
                        r ? "hidden" in r && (q = r.hidden) : r = m._data(a, "fxshow", {}), f && (r.hidden = !q), q ? m(a).show() : n.done(function() {
                            m(a).hide()
                        }), n.done(function() {
                            var b;
                            m._removeData(a, "fxshow");
                            for (b in o) m.style(a, b, o[b])
                        });
                        for (d in o) g = hb(q ? r[d] : 0, d, n), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
                    }
                }

                function jb(a, b) {
                    var c, d, e, f, g;
                    for (c in a)
                        if (d = m.camelCase(c), e = b[d], f = a[c], m.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = m.cssHooks[d], g && "expand" in g) {
                            f = g.expand(f), delete a[d];
                            for (c in f) c in a || (a[c] = f[c], b[c] = e)
                        } else b[d] = e
                }

                function kb(a, b, c) {
                    var d, e, f = 0,
                        g = db.length,
                        h = m.Deferred().always(function() {
                            delete i.elem
                        }),
                        i = function() {
                            if (e) return !1;
                            for (var b = $a || fb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                            return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
                        },
                        j = h.promise({
                            elem: a,
                            props: m.extend({}, b),
                            opts: m.extend(!0, {
                                specialEasing: {}
                            }, c),
                            originalProperties: b,
                            originalOptions: c,
                            startTime: $a || fb(),
                            duration: c.duration,
                            tweens: [],
                            createTween: function(b, c) {
                                var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                                return j.tweens.push(d), d
                            },
                            stop: function(b) {
                                var c = 0,
                                    d = b ? j.tweens.length : 0;
                                if (e) return this;
                                for (e = !0; d > c; c++) j.tweens[c].run(1);
                                return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                            }
                        }),
                        k = j.props;
                    for (jb(k, j.opts.specialEasing); g > f; f++)
                        if (d = db[f].call(j, a, k, j.opts)) return d;
                    return m.map(k, hb, j), m.isFunction(j.opts.start) && j.opts.start.call(a, j), m.fx.timer(m.extend(i, {
                        elem: a,
                        anim: j,
                        queue: j.opts.queue
                    })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
                }
                m.Animation = m.extend(kb, {
                        tweener: function(a, b) {
                            m.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], eb[c] = eb[c] || [], eb[c].unshift(b)
                        },
                        prefilter: function(a, b) {
                            b ? db.unshift(a) : db.push(a)
                        }
                    }), m.speed = function(a, b, c) {
                        var d = a && "object" == typeof a ? m.extend({}, a) : {
                            complete: c || !c && b || m.isFunction(a) && a,
                            duration: a,
                            easing: c && b || b && !m.isFunction(b) && b
                        };
                        return d.duration = m.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                            m.isFunction(d.old) && d.old.call(this), d.queue && m.dequeue(this, d.queue)
                        }, d
                    }, m.fn.extend({
                        fadeTo: function(a, b, c, d) {
                            return this.filter(U).css("opacity", 0).show().end().animate({
                                opacity: b
                            }, a, c, d)
                        },
                        animate: function(a, b, c, d) {
                            var e = m.isEmptyObject(a),
                                f = m.speed(b, c, d),
                                g = function() {
                                    var b = kb(this, m.extend({}, a), f);
                                    (e || m._data(this, "finish")) && b.stop(!0)
                                };
                            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
                        },
                        stop: function(a, b, c) {
                            var d = function(a) {
                                var b = a.stop;
                                delete a.stop, b(c)
                            };
                            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                                var b = !0,
                                    e = null != a && a + "queueHooks",
                                    f = m.timers,
                                    g = m._data(this);
                                if (e) g[e] && g[e].stop && d(g[e]);
                                else
                                    for (e in g) g[e] && g[e].stop && cb.test(e) && d(g[e]);
                                for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                                (b || !c) && m.dequeue(this, a)
                            })
                        },
                        finish: function(a) {
                            return a !== !1 && (a = a || "fx"), this.each(function() {
                                var b, c = m._data(this),
                                    d = c[a + "queue"],
                                    e = c[a + "queueHooks"],
                                    f = m.timers,
                                    g = d ? d.length : 0;
                                for (c.finish = !0, m.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                                delete c.finish
                            })
                        }
                    }), m.each(["toggle", "show", "hide"], function(a, b) {
                        var c = m.fn[b];
                        m.fn[b] = function(a, d, e) {
                            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gb(b, !0), a, d, e)
                        }
                    }), m.each({
                        slideDown: gb("show"),
                        slideUp: gb("hide"),
                        slideToggle: gb("toggle"),
                        fadeIn: {
                            opacity: "show"
                        },
                        fadeOut: {
                            opacity: "hide"
                        },
                        fadeToggle: {
                            opacity: "toggle"
                        }
                    }, function(a, b) {
                        m.fn[a] = function(a, c, d) {
                            return this.animate(b, a, c, d)
                        }
                    }), m.timers = [], m.fx.tick = function() {
                        var a, b = m.timers,
                            c = 0;
                        for ($a = m.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
                        b.length || m.fx.stop(), $a = void 0
                    }, m.fx.timer = function(a) {
                        m.timers.push(a), a() ? m.fx.start() : m.timers.pop()
                    }, m.fx.interval = 13, m.fx.start = function() {
                        _a || (_a = setInterval(m.fx.tick, m.fx.interval))
                    }, m.fx.stop = function() {
                        clearInterval(_a), _a = null
                    }, m.fx.speeds = {
                        slow: 600,
                        fast: 200,
                        _default: 400
                    }, m.fn.delay = function(a, b) {
                        return a = m.fx ? m.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                            var d = setTimeout(b, a);
                            c.stop = function() {
                                clearTimeout(d)
                            }
                        })
                    },
                    function() {
                        var a, b, c, d, e;
                        b = y.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = y.createElement("select"), e = c.appendChild(y.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", k.getSetAttribute = "t" !== b.className, k.style = /top/.test(d.getAttribute("style")), k.hrefNormalized = "/a" === d.getAttribute("href"), k.checkOn = !!a.value, k.optSelected = e.selected, k.enctype = !!y.createElement("form").enctype, c.disabled = !0, k.optDisabled = !e.disabled, a = y.createElement("input"), a.setAttribute("value", ""), k.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), k.radioValue = "t" === a.value
                    }();
                var lb = /\r/g;
                m.fn.extend({
                    val: function(a) {
                        var b, c, d, e = this[0]; {
                            if (arguments.length) return d = m.isFunction(a), this.each(function(c) {
                                var e;
                                1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, function(a) {
                                    return null == a ? "" : a + ""
                                })), b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                            });
                            if (e) return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(lb, "") : null == c ? "" : c)
                        }
                    }
                }), m.extend({
                    valHooks: {
                        option: {
                            get: function(a) {
                                var b = m.find.attr(a, "value");
                                return null != b ? b : m.trim(m.text(a))
                            }
                        },
                        select: {
                            get: function(a) {
                                for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                                    if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) {
                                        if (b = m(c).val(), f) return b;
                                        g.push(b)
                                    }
                                return g
                            },
                            set: function(a, b) {
                                var c, d, e = a.options,
                                    f = m.makeArray(b),
                                    g = e.length;
                                while (g--)
                                    if (d = e[g], m.inArray(m.valHooks.option.get(d), f) >= 0) try {
                                        d.selected = c = !0
                                    } catch (h) {
                                        d.scrollHeight
                                    } else d.selected = !1;
                                return c || (a.selectedIndex = -1), e
                            }
                        }
                    }
                }), m.each(["radio", "checkbox"], function() {
                    m.valHooks[this] = {
                        set: function(a, b) {
                            return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0
                        }
                    }, k.checkOn || (m.valHooks[this].get = function(a) {
                        return null === a.getAttribute("value") ? "on" : a.value
                    })
                });
                var mb, nb, ob = m.expr.attrHandle,
                    pb = /^(?:checked|selected)$/i,
                    qb = k.getSetAttribute,
                    rb = k.input;
                m.fn.extend({
                    attr: function(a, b) {
                        return V(this, m.attr, a, b, arguments.length > 1)
                    },
                    removeAttr: function(a) {
                        return this.each(function() {
                            m.removeAttr(this, a)
                        })
                    }
                }), m.extend({
                    attr: function(a, b, c) {
                        var d, e, f = a.nodeType;
                        if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(), d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nb : mb)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void m.removeAttr(a, b))
                    },
                    removeAttr: function(a, b) {
                        var c, d, e = 0,
                            f = b && b.match(E);
                        if (f && 1 === a.nodeType)
                            while (c = f[e++]) d = m.propFix[c] || c, m.expr.match.bool.test(c) ? rb && qb || !pb.test(c) ? a[d] = !1 : a[m.camelCase("default-" + c)] = a[d] = !1 : m.attr(a, c, ""), a.removeAttribute(qb ? c : d)
                    },
                    attrHooks: {
                        type: {
                            set: function(a, b) {
                                if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) {
                                    var c = a.value;
                                    return a.setAttribute("type", b), c && (a.value = c), b
                                }
                            }
                        }
                    }
                }), nb = {
                    set: function(a, b, c) {
                        return b === !1 ? m.removeAttr(a, c) : rb && qb || !pb.test(c) ? a.setAttribute(!qb && m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c] = !0, c
                    }
                }, m.each(m.expr.match.bool.source.match(/\w+/g), function(a, b) {
                    var c = ob[b] || m.find.attr;
                    ob[b] = rb && qb || !pb.test(b) ? function(a, b, d) {
                        var e, f;
                        return d || (f = ob[b], ob[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, ob[b] = f), e
                    } : function(a, b, c) {
                        return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null
                    }
                }), rb && qb || (m.attrHooks.value = {
                    set: function(a, b, c) {
                        return m.nodeName(a, "input") ? void(a.defaultValue = b) : mb && mb.set(a, b, c)
                    }
                }), qb || (mb = {
                    set: function(a, b, c) {
                        var d = a.getAttributeNode(c);
                        return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
                    }
                }, ob.id = ob.name = ob.coords = function(a, b, c) {
                    var d;
                    return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
                }, m.valHooks.button = {
                    get: function(a, b) {
                        var c = a.getAttributeNode(b);
                        return c && c.specified ? c.value : void 0
                    },
                    set: mb.set
                }, m.attrHooks.contenteditable = {
                    set: function(a, b, c) {
                        mb.set(a, "" === b ? !1 : b, c)
                    }
                }, m.each(["width", "height"], function(a, b) {
                    m.attrHooks[b] = {
                        set: function(a, c) {
                            return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
                        }
                    }
                })), k.style || (m.attrHooks.style = {
                    get: function(a) {
                        return a.style.cssText || void 0
                    },
                    set: function(a, b) {
                        return a.style.cssText = b + ""
                    }
                });
                var sb = /^(?:input|select|textarea|button|object)$/i,
                    tb = /^(?:a|area)$/i;
                m.fn.extend({
                    prop: function(a, b) {
                        return V(this, m.prop, a, b, arguments.length > 1)
                    },
                    removeProp: function(a) {
                        return a = m.propFix[a] || a, this.each(function() {
                            try {
                                this[a] = void 0, delete this[a]
                            } catch (b) {}
                        })
                    }
                }), m.extend({
                    propFix: {
                        "for": "htmlFor",
                        "class": "className"
                    },
                    prop: function(a, b, c) {
                        var d, e, f, g = a.nodeType;
                        if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !m.isXMLDoc(a), f && (b = m.propFix[b] || b, e = m.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
                    },
                    propHooks: {
                        tabIndex: {
                            get: function(a) {
                                var b = m.find.attr(a, "tabindex");
                                return b ? parseInt(b, 10) : sb.test(a.nodeName) || tb.test(a.nodeName) && a.href ? 0 : -1
                            }
                        }
                    }
                }), k.hrefNormalized || m.each(["href", "src"], function(a, b) {
                    m.propHooks[b] = {
                        get: function(a) {
                            return a.getAttribute(b, 4)
                        }
                    }
                }), k.optSelected || (m.propHooks.selected = {
                    get: function(a) {
                        var b = a.parentNode;
                        return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
                    }
                }), m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                    m.propFix[this.toLowerCase()] = this
                }), k.enctype || (m.propFix.enctype = "encoding");
                var ub = /[\t\r\n\f]/g;
                m.fn.extend({
                    addClass: function(a) {
                        var b, c, d, e, f, g, h = 0,
                            i = this.length,
                            j = "string" == typeof a && a;
                        if (m.isFunction(a)) return this.each(function(b) {
                            m(this).addClass(a.call(this, b, this.className))
                        });
                        if (j)
                            for (b = (a || "").match(E) || []; i > h; h++)
                                if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ub, " ") : " ")) {
                                    f = 0;
                                    while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                                    g = m.trim(d), c.className !== g && (c.className = g)
                                }
                        return this
                    },
                    removeClass: function(a) {
                        var b, c, d, e, f, g, h = 0,
                            i = this.length,
                            j = 0 === arguments.length || "string" == typeof a && a;
                        if (m.isFunction(a)) return this.each(function(b) {
                            m(this).removeClass(a.call(this, b, this.className))
                        });
                        if (j)
                            for (b = (a || "").match(E) || []; i > h; h++)
                                if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ub, " ") : "")) {
                                    f = 0;
                                    while (e = b[f++])
                                        while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");
                                    g = a ? m.trim(d) : "", c.className !== g && (c.className = g)
                                }
                        return this
                    },
                    toggleClass: function(a, b) {
                        var c = typeof a;
                        return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function(c) {
                            m(this).toggleClass(a.call(this, c, this.className, b), b)
                        } : function() {
                            if ("string" === c) {
                                var b, d = 0,
                                    e = m(this),
                                    f = a.match(E) || [];
                                while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                            } else(c === K || "boolean" === c) && (this.className && m._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : m._data(this, "__className__") || "")
                        })
                    },
                    hasClass: function(a) {
                        for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                            if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ub, " ").indexOf(b) >= 0) return !0;
                        return !1
                    }
                }), m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
                    m.fn[b] = function(a, c) {
                        return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
                    }
                }), m.fn.extend({
                    hover: function(a, b) {
                        return this.mouseenter(a).mouseleave(b || a)
                    },
                    bind: function(a, b, c) {
                        return this.on(a, null, b, c)
                    },
                    unbind: function(a, b) {
                        return this.off(a, null, b)
                    },
                    delegate: function(a, b, c, d) {
                        return this.on(b, a, c, d)
                    },
                    undelegate: function(a, b, c) {
                        return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
                    }
                });
                var vb = m.now(),
                    wb = /\?/,
                    xb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
                m.parseJSON = function(b) {
                    if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
                    var c, d = null,
                        e = m.trim(b + "");
                    return e && !m.trim(e.replace(xb, function(a, b, e, f) {
                        return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
                    })) ? Function("return " + e)() : m.error("Invalid JSON: " + b)
                }, m.parseXML = function(b) {
                    var c, d;
                    if (!b || "string" != typeof b) return null;
                    try {
                        a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
                    } catch (e) {
                        c = void 0
                    }
                    return c && c.documentElement && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b), c
                };
                var yb, zb, Ab = /#.*$/,
                    Bb = /([?&])_=[^&]*/,
                    Cb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
                    Db = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
                    Eb = /^(?:GET|HEAD)$/,
                    Fb = /^\/\//,
                    Gb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
                    Hb = {},
                    Ib = {},
                    Jb = "*/".concat("*");
                try {
                    zb = location.href
                } catch (Kb) {
                    zb = y.createElement("a"), zb.href = "", zb = zb.href
                }
                yb = Gb.exec(zb.toLowerCase()) || [];

                function Lb(a) {
                    return function(b, c) {
                        "string" != typeof b && (c = b, b = "*");
                        var d, e = 0,
                            f = b.toLowerCase().match(E) || [];
                        if (m.isFunction(c))
                            while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
                    }
                }

                function Mb(a, b, c, d) {
                    var e = {},
                        f = a === Ib;

                    function g(h) {
                        var i;
                        return e[h] = !0, m.each(a[h] || [], function(a, h) {
                            var j = h(b, c, d);
                            return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
                        }), i
                    }
                    return g(b.dataTypes[0]) || !e["*"] && g("*")
                }

                function Nb(a, b) {
                    var c, d, e = m.ajaxSettings.flatOptions || {};
                    for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
                    return c && m.extend(!0, a, c), a
                }

                function Ob(a, b, c) {
                    var d, e, f, g, h = a.contents,
                        i = a.dataTypes;
                    while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
                    if (e)
                        for (g in h)
                            if (h[g] && h[g].test(e)) {
                                i.unshift(g);
                                break
                            }
                    if (i[0] in c) f = i[0];
                    else {
                        for (g in c) {
                            if (!i[0] || a.converters[g + " " + i[0]]) {
                                f = g;
                                break
                            }
                            d || (d = g)
                        }
                        f = f || d
                    }
                    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
                }

                function Pb(a, b, c, d) {
                    var e, f, g, h, i, j = {},
                        k = a.dataTypes.slice();
                    if (k[1])
                        for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
                    f = k.shift();
                    while (f)
                        if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                            if ("*" === f) f = i;
                            else if ("*" !== i && i !== f) {
                        if (g = j[i + " " + f] || j["* " + f], !g)
                            for (e in j)
                                if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                    g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                                    break
                                }
                        if (g !== !0)
                            if (g && a["throws"]) b = g(b);
                            else try {
                                b = g(b)
                            } catch (l) {
                                return {
                                    state: "parsererror",
                                    error: g ? l : "No conversion from " + i + " to " + f
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: b
                    }
                }
                m.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: zb,
                        type: "GET",
                        isLocal: Db.test(yb[1]),
                        global: !0,
                        processData: !0,
                        async: !0,
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        accepts: {
                            "*": Jb,
                            text: "text/plain",
                            html: "text/html",
                            xml: "application/xml, text/xml",
                            json: "application/json, text/javascript"
                        },
                        contents: {
                            xml: /xml/,
                            html: /html/,
                            json: /json/
                        },
                        responseFields: {
                            xml: "responseXML",
                            text: "responseText",
                            json: "responseJSON"
                        },
                        converters: {
                            "* text": String,
                            "text html": !0,
                            "text json": m.parseJSON,
                            "text xml": m.parseXML
                        },
                        flatOptions: {
                            url: !0,
                            context: !0
                        }
                    },
                    ajaxSetup: function(a, b) {
                        return b ? Nb(Nb(a, m.ajaxSettings), b) : Nb(m.ajaxSettings, a)
                    },
                    ajaxPrefilter: Lb(Hb),
                    ajaxTransport: Lb(Ib),
                    ajax: function(a, b) {
                        "object" == typeof a && (b = a, a = void 0), b = b || {};
                        var c, d, e, f, g, h, i, j, k = m.ajaxSetup({}, b),
                            l = k.context || k,
                            n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event,
                            o = m.Deferred(),
                            p = m.Callbacks("once memory"),
                            q = k.statusCode || {},
                            r = {},
                            s = {},
                            t = 0,
                            u = "canceled",
                            v = {
                                readyState: 0,
                                getResponseHeader: function(a) {
                                    var b;
                                    if (2 === t) {
                                        if (!j) {
                                            j = {};
                                            while (b = Cb.exec(f)) j[b[1].toLowerCase()] = b[2]
                                        }
                                        b = j[a.toLowerCase()]
                                    }
                                    return null == b ? null : b
                                },
                                getAllResponseHeaders: function() {
                                    return 2 === t ? f : null
                                },
                                setRequestHeader: function(a, b) {
                                    var c = a.toLowerCase();
                                    return t || (a = s[c] = s[c] || a, r[a] = b), this
                                },
                                overrideMimeType: function(a) {
                                    return t || (k.mimeType = a), this
                                },
                                statusCode: function(a) {
                                    var b;
                                    if (a)
                                        if (2 > t)
                                            for (b in a) q[b] = [q[b], a[b]];
                                        else v.always(a[v.status]);
                                    return this
                                },
                                abort: function(a) {
                                    var b = a || u;
                                    return i && i.abort(b), x(0, b), this
                                }
                            };
                        if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || zb) + "").replace(Ab, "").replace(Fb, yb[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (c = Gb.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === yb[1] && c[2] === yb[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (yb[3] || ("http:" === yb[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)), Mb(Hb, k, b, v), 2 === t) return v;
                        h = m.event && k.global, h && 0 === m.active++ && m.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Eb.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (wb.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Bb.test(e) ? e.replace(Bb, "$1_=" + vb++) : e + (wb.test(e) ? "&" : "?") + "_=" + vb++)), k.ifModified && (m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]), m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Jb + "; q=0.01" : "") : k.accepts["*"]);
                        for (d in k.headers) v.setRequestHeader(d, k.headers[d]);
                        if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
                        u = "abort";
                        for (d in {
                                success: 1,
                                error: 1,
                                complete: 1
                            }) v[d](k[d]);
                        if (i = Mb(Ib, k, b, v)) {
                            v.readyState = 1, h && n.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function() {
                                v.abort("timeout")
                            }, k.timeout));
                            try {
                                t = 1, i.send(r, x)
                            } catch (w) {
                                if (!(2 > t)) throw w;
                                x(-1, w)
                            }
                        } else x(-1, "No Transport");

                        function x(a, b, c, d) {
                            var j, r, s, u, w, x = b;
                            2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Ob(k, v, c)), u = Pb(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (m.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (m.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (n.trigger("ajaxComplete", [v, k]), --m.active || m.event.trigger("ajaxStop")))
                        }
                        return v
                    },
                    getJSON: function(a, b, c) {
                        return m.get(a, b, c, "json")
                    },
                    getScript: function(a, b) {
                        return m.get(a, void 0, b, "script")
                    }
                }), m.each(["get", "post"], function(a, b) {
                    m[b] = function(a, c, d, e) {
                        return m.isFunction(c) && (e = e || d, d = c, c = void 0), m.ajax({
                            url: a,
                            type: b,
                            dataType: e,
                            data: c,
                            success: d
                        })
                    }
                }), m._evalUrl = function(a) {
                    return m.ajax({
                        url: a,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    })
                }, m.fn.extend({
                    wrapAll: function(a) {
                        if (m.isFunction(a)) return this.each(function(b) {
                            m(this).wrapAll(a.call(this, b))
                        });
                        if (this[0]) {
                            var b = m(a, this[0].ownerDocument).eq(0).clone(!0);
                            this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                                var a = this;
                                while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
                                return a
                            }).append(this)
                        }
                        return this
                    },
                    wrapInner: function(a) {
                        return this.each(m.isFunction(a) ? function(b) {
                            m(this).wrapInner(a.call(this, b))
                        } : function() {
                            var b = m(this),
                                c = b.contents();
                            c.length ? c.wrapAll(a) : b.append(a)
                        })
                    },
                    wrap: function(a) {
                        var b = m.isFunction(a);
                        return this.each(function(c) {
                            m(this).wrapAll(b ? a.call(this, c) : a)
                        })
                    },
                    unwrap: function() {
                        return this.parent().each(function() {
                            m.nodeName(this, "body") || m(this).replaceWith(this.childNodes)
                        }).end()
                    }
                }), m.expr.filters.hidden = function(a) {
                    return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && "none" === (a.style && a.style.display || m.css(a, "display"))
                }, m.expr.filters.visible = function(a) {
                    return !m.expr.filters.hidden(a)
                };
                var Qb = /%20/g,
                    Rb = /\[\]$/,
                    Sb = /\r?\n/g,
                    Tb = /^(?:submit|button|image|reset|file)$/i,
                    Ub = /^(?:input|select|textarea|keygen)/i;

                function Vb(a, b, c, d) {
                    var e;
                    if (m.isArray(b)) m.each(b, function(b, e) {
                        c || Rb.test(a) ? d(a, e) : Vb(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
                    });
                    else if (c || "object" !== m.type(b)) d(a, b);
                    else
                        for (e in b) Vb(a + "[" + e + "]", b[e], c, d)
                }
                m.param = function(a, b) {
                    var c, d = [],
                        e = function(a, b) {
                            b = m.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                        };
                    if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) || a.jquery && !m.isPlainObject(a)) m.each(a, function() {
                        e(this.name, this.value)
                    });
                    else
                        for (c in a) Vb(c, a[c], b, e);
                    return d.join("&").replace(Qb, "+")
                }, m.fn.extend({
                    serialize: function() {
                        return m.param(this.serializeArray())
                    },
                    serializeArray: function() {
                        return this.map(function() {
                            var a = m.prop(this, "elements");
                            return a ? m.makeArray(a) : this
                        }).filter(function() {
                            var a = this.type;
                            return this.name && !m(this).is(":disabled") && Ub.test(this.nodeName) && !Tb.test(a) && (this.checked || !W.test(a))
                        }).map(function(a, b) {
                            var c = m(this).val();
                            return null == c ? null : m.isArray(c) ? m.map(c, function(a) {
                                return {
                                    name: b.name,
                                    value: a.replace(Sb, "\r\n")
                                }
                            }) : {
                                name: b.name,
                                value: c.replace(Sb, "\r\n")
                            }
                        }).get()
                    }
                }), m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
                    return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zb() || $b()
                } : Zb;
                var Wb = 0,
                    Xb = {},
                    Yb = m.ajaxSettings.xhr();
                a.attachEvent && a.attachEvent("onunload", function() {
                    for (var a in Xb) Xb[a](void 0, !0)
                }), k.cors = !!Yb && "withCredentials" in Yb, Yb = k.ajax = !!Yb, Yb && m.ajaxTransport(function(a) {
                    if (!a.crossDomain || k.cors) {
                        var b;
                        return {
                            send: function(c, d) {
                                var e, f = a.xhr(),
                                    g = ++Wb;
                                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                                    for (e in a.xhrFields) f[e] = a.xhrFields[e];
                                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                                for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                                f.send(a.hasContent && a.data || null), b = function(c, e) {
                                    var h, i, j;
                                    if (b && (e || 4 === f.readyState))
                                        if (delete Xb[g], b = void 0, f.onreadystatechange = m.noop, e) 4 !== f.readyState && f.abort();
                                        else {
                                            j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                                            try {
                                                i = f.statusText
                                            } catch (k) {
                                                i = ""
                                            }
                                            h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                                        }
                                    j && d(h, i, j, f.getAllResponseHeaders())
                                }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Xb[g] = b : b()
                            },
                            abort: function() {
                                b && b(void 0, !0)
                            }
                        }
                    }
                });

                function Zb() {
                    try {
                        return new a.XMLHttpRequest
                    } catch (b) {}
                }

                function $b() {
                    try {
                        return new a.ActiveXObject("Microsoft.XMLHTTP")
                    } catch (b) {}
                }
                m.ajaxSetup({
                    accepts: {
                        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                    },
                    contents: {
                        script: /(?:java|ecma)script/
                    },
                    converters: {
                        "text script": function(a) {
                            return m.globalEval(a), a
                        }
                    }
                }), m.ajaxPrefilter("script", function(a) {
                    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
                }), m.ajaxTransport("script", function(a) {
                    if (a.crossDomain) {
                        var b, c = y.head || m("head")[0] || y.documentElement;
                        return {
                            send: function(d, e) {
                                b = y.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                                    (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
                                }, c.insertBefore(b, c.firstChild)
                            },
                            abort: function() {
                                b && b.onload(void 0, !0)
                            }
                        }
                    }
                });
                var _b = [],
                    ac = /(=)\?(?=&|$)|\?\?/;
                m.ajaxSetup({
                    jsonp: "callback",
                    jsonpCallback: function() {
                        var a = _b.pop() || m.expando + "_" + vb++;
                        return this[a] = !0, a
                    }
                }), m.ajaxPrefilter("json jsonp", function(b, c, d) {
                    var e, f, g, h = b.jsonp !== !1 && (ac.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ac.test(b.data) && "data");
                    return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(ac, "$1" + e) : b.jsonp !== !1 && (b.url += (wb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
                        return g || m.error(e + " was not called"), g[0]
                    }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
                        g = arguments
                    }, d.always(function() {
                        a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _b.push(e)), g && m.isFunction(f) && f(g[0]), g = f = void 0
                    }), "script") : void 0
                }), m.parseHTML = function(a, b, c) {
                    if (!a || "string" != typeof a) return null;
                    "boolean" == typeof b && (c = b, b = !1), b = b || y;
                    var d = u.exec(a),
                        e = !c && [];
                    return d ? [b.createElement(d[1])] : (d = m.buildFragment([a], b, e), e && e.length && m(e).remove(), m.merge([], d.childNodes))
                };
                var bc = m.fn.load;
                m.fn.load = function(a, b, c) {
                    if ("string" != typeof a && bc) return bc.apply(this, arguments);
                    var d, e, f, g = this,
                        h = a.indexOf(" ");
                    return h >= 0 && (d = m.trim(a.slice(h, a.length)), a = a.slice(0, h)), m.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && m.ajax({
                        url: a,
                        type: f,
                        dataType: "html",
                        data: b
                    }).done(function(a) {
                        e = arguments, g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a)
                    }).complete(c && function(a, b) {
                        g.each(c, e || [a.responseText, b, a])
                    }), this
                }, m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
                    m.fn[b] = function(a) {
                        return this.on(b, a)
                    }
                }), m.expr.filters.animated = function(a) {
                    return m.grep(m.timers, function(b) {
                        return a === b.elem
                    }).length
                };
                var cc = a.document.documentElement;

                function dc(a) {
                    return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
                }
                m.offset = {
                    setOffset: function(a, b, c) {
                        var d, e, f, g, h, i, j, k = m.css(a, "position"),
                            l = m(a),
                            n = {};
                        "static" === k && (a.style.position = "relative"), h = l.offset(), f = m.css(a, "top"), i = m.css(a, "left"), j = ("absolute" === k || "fixed" === k) && m.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), m.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (n.top = b.top - h.top + g), null != b.left && (n.left = b.left - h.left + e), "using" in b ? b.using.call(a, n) : l.css(n)
                    }
                }, m.fn.extend({
                    offset: function(a) {
                        if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                            m.offset.setOffset(this, a, b)
                        });
                        var b, c, d = {
                                top: 0,
                                left: 0
                            },
                            e = this[0],
                            f = e && e.ownerDocument;
                        if (f) return b = f.documentElement, m.contains(b, e) ? (typeof e.getBoundingClientRect !== K && (d = e.getBoundingClientRect()), c = dc(f), {
                            top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                            left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
                        }) : d
                    },
                    position: function() {
                        if (this[0]) {
                            var a, b, c = {
                                    top: 0,
                                    left: 0
                                },
                                d = this[0];
                            return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), m.nodeName(a[0], "html") || (c = a.offset()), c.top += m.css(a[0], "borderTopWidth", !0), c.left += m.css(a[0], "borderLeftWidth", !0)), {
                                top: b.top - c.top - m.css(d, "marginTop", !0),
                                left: b.left - c.left - m.css(d, "marginLeft", !0)
                            }
                        }
                    },
                    offsetParent: function() {
                        return this.map(function() {
                            var a = this.offsetParent || cc;
                            while (a && !m.nodeName(a, "html") && "static" === m.css(a, "position")) a = a.offsetParent;
                            return a || cc
                        })
                    }
                }), m.each({
                    scrollLeft: "pageXOffset",
                    scrollTop: "pageYOffset"
                }, function(a, b) {
                    var c = /Y/.test(b);
                    m.fn[a] = function(d) {
                        return V(this, function(a, d, e) {
                            var f = dc(a);
                            return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e)
                        }, a, d, arguments.length, null)
                    }
                }), m.each(["top", "left"], function(a, b) {
                    m.cssHooks[b] = La(k.pixelPosition, function(a, c) {
                        return c ? (c = Ja(a, b), Ha.test(c) ? m(a).position()[b] + "px" : c) : void 0
                    })
                }), m.each({
                    Height: "height",
                    Width: "width"
                }, function(a, b) {
                    m.each({
                        padding: "inner" + a,
                        content: b,
                        "": "outer" + a
                    }, function(c, d) {
                        m.fn[d] = function(d, e) {
                            var f = arguments.length && (c || "boolean" != typeof d),
                                g = c || (d === !0 || e === !0 ? "margin" : "border");
                            return V(this, function(b, c, d) {
                                var e;
                                return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g)
                            }, b, f ? d : void 0, f, null)
                        }
                    })
                }), m.fn.size = function() {
                    return this.length
                }, m.fn.andSelf = m.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
                    return m
                });
                var ec = a.jQuery,
                    fc = a.$;
                return m.noConflict = function(b) {
                    return a.$ === m && (a.$ = fc), b && a.jQuery === m && (a.jQuery = ec), m
                }, typeof b === K && (a.jQuery = a.$ = m), m
            });
            var jQueryTealium = jQuery.noConflict(true);
        }
    } catch (e) {
        console.log(e);
    }
}
if (!utag_condload) {
    try {
        try {
            window.cookieFilter = {
                typeOf: function(e) {
                    return ({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
                },
                getCookieValues: function() {
                    var values = {},
                        rcd = (function() {
                            var value = "; " + document.cookie;
                            var parts = value.split("; CONSENTMGR=");
                            if (parts.length == 2)
                                return utag.ut.decode(parts.pop().split(";").shift());
                        }()),
                        cd = this.typeOf(rcd) === "string" ? rcd : "";
                    if (cd) {
                        var i, optOut, optOutData = decodeURI(cd).split("|");
                        for (i = 0; i < optOutData.length; i++) {
                            optOut = optOutData[i].split(":");
                            values[optOut[0]] = optOut[1];
                        }
                    }
                    return values;
                },
                config: {
                    default: false,
                    cookieArr: [{
                        name: /AKA_A2/,
                        category: "c1"
                    }, {
                        name: /channelcloser/,
                        category: "c1"
                    }, {
                        name: /channelflow/,
                        category: "c1"
                    }, {
                        name: /channeloriginator/,
                        category: "c1"
                    }, {
                        name: /_tpsample/,
                        category: "c1"
                    }, {
                        name: /as_email_address/,
                        category: "c3"
                    }, {
                        name: /as_email_address_unconfirmed/,
                        category: "c3"
                    }, {
                        name: /as_first_name/,
                        category: "c3"
                    }, {
                        name: /as_first_name_unconfirmed/,
                        category: "c3"
                    }, {
                        name: /as_last_name/,
                        category: "c3"
                    }, {
                        name: /as_last_name_unconfirmed/,
                        category: "c3"
                    }, {
                        name: /as_login_name/,
                        category: "c3"
                    }, {
                        name: /as_marketing_email/,
                        category: "c3"
                    }, {
                        name: /as_marketing_email_unconfirmed/,
                        category: "c3"
                    }, {
                        name: /as_marketing_phone/,
                        category: "c3"
                    }, {
                        name: /as_marketing_phone_unconfirmed/,
                        category: "c3"
                    }, {
                        name: /as_marketing_post/,
                        category: "c3"
                    }, {
                        name: /as_marketing_post_unconfirmed/,
                        category: "c3"
                    }, {
                        name: /as_marketing_sms/,
                        category: "c3"
                    }, {
                        name: /as_marketing_sms_unconfirmed/,
                        category: "c3"
                    }, {
                        name: /as_title/,
                        category: "c3"
                    }, {
                        name: /as_title_unconfirmed/,
                        category: "c3"
                    }, ]
                },
                setCookie: function(value) {
                    var name = value.split("=")[0];
                    var cookieMatch = false;
                    var config = window.cookieFilter.config;
                    for (var x = 0; x < config.cookieArr.length; x++) {
                        if (name.match(config.cookieArr[x].name)) {
                            var consent = cookieFilter.getCookieValues();
                            var cat = config.cookieArr[x].category;
                            if (Object.keys(consent).length == 0) {
                                cookieMatch = true;
                                break;
                            } else if (cat && ((typeof(consent[cat] == "undefined") && !consent.consent) || consent[cat] == "0")) {
                                cookieMatch = true;
                                break;
                            }
                        }
                    }
                    if (cookieMatch === config.default) {
                        cookieFilter.docCookie.set.call(document, value);
                        console.log("setting the cookie " + name)
                    } else {
                        console.log("blocking the cookie " + name)
                    }
                },
                docCookie: Object.getOwnPropertyDescriptor(Document.prototype, 'cookie') || Object.getOwnPropertyDescriptor(HTMLDocument.prototype, 'cookie'),
                init: function() {
                    if (this.docCookie) {
                        Object.defineProperty(document, 'cookie', {
                            get: function() {
                                return cookieFilter.docCookie.get.call(document);
                            },
                            set: this.setCookie
                        });
                    }
                }
            }
            cookieFilter.init()
        } catch (e) {
            console.log(e)
        }
    } catch (e) {
        console.log(e);
    }
}
if (typeof utag == "undefined" && !utag_condload) {
    var utag = {
        id: "royalmail.clickanddrop",
        o: {},
        sender: {},
        send: {},
        rpt: {
            ts: {
                a: new Date()
            }
        },
        dbi: [],
        db_log: [],
        loader: {
            q: [],
            lc: 0,
            f: {},
            p: 0,
            ol: 0,
            wq: [],
            lq: [],
            bq: {},
            bk: {},
            rf: 0,
            ri: 0,
            rp: 0,
            rq: [],
            blr_always: 1,
            ready_q: [],
            sendq: {
                "pending": 0
            },
            run_ready_q: function() {
                for (var i = 0; i < utag.loader.ready_q.length; i++) {
                    utag.DB("READY_Q:" + i);
                    try {
                        utag.loader.ready_q[i]()
                    } catch (e) {
                        utag.DB(e)
                    };
                }
            },
            lh: function(a, b, c) {
                a = "" + location.hostname;
                b = a.split(".");
                c = (/\.co\.|\.com\.|\.org\.|\.edu\.|\.net\.|\.asn\.|\...\.jp$/.test(a)) ? 3 : 2;
                return b.splice(b.length - c, c).join(".");
            },
            WQ: function(a, b, c, d, g) {
                utag.DB('WQ:' + utag.loader.wq.length);
                try {
                    if (utag.udoname && utag.udoname.indexOf(".") < 0) {
                        utag.ut.merge(utag.data, window[utag.udoname], 0);
                    }
                    if (utag.cfg.load_rules_at_wait) {
                        utag.handler.LR(utag.data);
                    }
                } catch (e) {
                    utag.DB(e)
                };
                d = 0;
                g = [];
                for (a = 0; a < utag.loader.wq.length; a++) {
                    b = utag.loader.wq[a];
                    b.load = utag.loader.cfg[b.id].load;
                    if (b.load == 4) {
                        this.f[b.id] = 0;
                        utag.loader.LOAD(b.id)
                    } else if (b.load > 0) {
                        g.push(b);
                        d++;
                    } else {
                        this.f[b.id] = 1;
                    }
                }
                if (utag.cfg.nonblocking_tags === true) {
                    var promises = [];
                    var addExecutionPromise = function(self, functionToExecute, args, tagId) {
                        promises.push(async function() {
                            try {
                                setTimeout(function() {
                                    functionToExecute.apply(self, args)
                                }, 1)
                            } catch (e) {
                                utag.DB && utag.DB(e);
                            }
                        })
                    }
                    for (a = 0; a < g.length; a++) {
                        addExecutionPromise(this, utag.loader.AS, [g[a]], g[a].id)
                    }
                    var settlePromisesInSequence = async function(promises) {
                        const results = [];
                        for (var i = 0; i < promises.length; i++) {
                            var result = await promises[i]();
                            results.push(result);
                        }
                        return results;
                    }
                    settlePromisesInSequence(promises)
                        .then(function(results) {
                            utag.DB('PROMISE RESULTS ' + results)
                            if (d == 0) {
                                utag.loader.END();
                            }
                        })
                } else {
                    for (a = 0; a < g.length; a++) {
                        utag.loader.AS(g[a]);
                    }
                    if (d == 0) {
                        utag.loader.END();
                    }
                }
            },
            AS: function(a, b, c, d) {
                utag.send[a.id] = a;
                if (typeof a.src == 'undefined' || !utag.ut.hasOwn(a, 'src')) {
                    a.src = utag.cfg.path + ((typeof a.name != 'undefined') ? a.name : 'ut' + 'ag.' + a.id + '.js')
                }
                a.src += (a.src.indexOf('?') > 0 ? '&' : '?') + 'utv=' + (a.v ? utag.cfg.template + a.v : utag.cfg.v);
                utag.rpt['l_' + a.id] = a.src;
                b = document;
                this.f[a.id] = 0;
                if (a.load == 2) {
                    utag.DB("Attach sync: " + a.src);
                    a.uid = a.id;
                    b.write('<script id="utag_' + a.id + '" src="' + a.src + '"></scr' + 'ipt>')
                    if (typeof a.cb != 'undefined') a.cb();
                } else if (a.load == 1 || a.load == 3) {
                    if (b.createElement) {
                        c = 'utag_royalmail.clickanddrop_' + a.id;
                        if (!b.getElementById(c)) {
                            d = {
                                src: a.src,
                                id: c,
                                uid: a.id,
                                loc: a.loc
                            }
                            if (a.load == 3) {
                                d.type = "iframe"
                            };
                            if (typeof a.cb != 'undefined') d.cb = a.cb;
                            utag.ut.loader(d);
                        }
                    }
                }
            },
            GV: function(a, b, c) {
                b = {};
                for (c in a) {
                    if (a.hasOwnProperty(c) && typeof a[c] != "function") b[c] = a[c];
                }
                return b
            },
            OU: function(tid, tcat, a, b, c, d, f, g) {
                g = {};
                utag.loader.RDcp(g);
                try {
                    if (typeof g['cp.OPTOUTMULTI'] != 'undefined') {
                        c = utag.loader.cfg;
                        a = utag.ut.decode(g['cp.OPTOUTMULTI']).split('|');
                        for (d = 0; d < a.length; d++) {
                            b = a[d].split(':');
                            if (b[1] * 1 !== 0) {
                                if (b[0].indexOf('c') == 0) {
                                    for (f in utag.loader.GV(c)) {
                                        if (c[f].tcat == b[0].substring(1)) c[f].load = 0;
                                        if (c[f].tid == tid && c[f].tcat == b[0].substring(1)) return true;
                                    }
                                    if (tcat == b[0].substring(1)) return true;
                                } else if (b[0] * 1 == 0) {
                                    utag.cfg.nocookie = true
                                } else {
                                    for (f in utag.loader.GV(c)) {
                                        if (c[f].tid == b[0]) c[f].load = 0
                                    }
                                    if (tid == b[0]) return true;
                                }
                            }
                        }
                    }
                } catch (e) {
                    utag.DB(e)
                }
                return false;
            },
            RDdom: function(o) {
                var d = document || {},
                    l = location || {};
                o["dom.referrer"] = d.referrer;
                o["dom.title"] = "" + d.title;
                o["dom.domain"] = "" + l.hostname;
                o["dom.query_string"] = ("" + l.search).substring(1);
                o["dom.hash"] = ("" + l.hash).substring(1);
                o["dom.url"] = "" + d.URL;
                o["dom.pathname"] = "" + l.pathname;
                o["dom.viewport_height"] = window.innerHeight || (d.documentElement ? d.documentElement.clientHeight : 960);
                o["dom.viewport_width"] = window.innerWidth || (d.documentElement ? d.documentElement.clientWidth : 960);
            },
            RDcp: function(o, b, c, d) {
                b = utag.loader.RC();
                for (d in b) {
                    if (d.match(/utag_(.*)/)) {
                        for (c in utag.loader.GV(b[d])) {
                            o["cp.utag_" + RegExp.$1 + "_" + c] = b[d][c];
                        }
                    }
                }
                for (c in utag.loader.GV((utag.cl && !utag.cl['_all_']) ? utag.cl : b)) {
                    if (c.indexOf("utag_") < 0 && typeof b[c] != "undefined") o["cp." + c] = b[c];
                }
            },
            getCookieState: function(key) {
                utag.loader.cookieState = utag.loader.cookieState || {};
                return utag.loader.cookieState[key];
            },
            setCookieState: function(key, value) {
                utag.loader.cookieState = utag.loader.cookieState || {};
                utag.loader.cookieState[key] = value;
                return utag.loader.cookieState[key];
            },
            hasSplitUtagMainCookie: function() {
                if (utag.loader.getCookieState('hasSplit') === true && utag.cfg.split_cookie === true) return true
                if (utag.loader.getCookieState('hasSplit') === false && utag.cfg.split_cookie === false) return false
                var hasSplitCookies = document.cookie.includes("utag_main_")
                utag.loader.setCookieState('hasSplit', hasSplitCookies)
                return hasSplitCookies;
            },
            hasUtagMainCookie: function() {
                if (utag.loader.getCookieState('hasUnsplit') === true && utag.cfg.split_cookie === false) return true
                if (utag.loader.getCookieState('hasUnsplit') === false && utag.cfg.split_cookie === true) return false
                var hasUnsplitCookie = document.cookie.includes("utag_main=")
                utag.loader.setCookieState('hasUnsplit', hasUnsplitCookie)
                return hasUnsplitCookie;
            },
            convertingToSplitCookies: function() {
                return utag.cfg.split_cookie && utag.loader.hasUtagMainCookie();
            },
            revertingSplitCookies: function() {
                return !utag.cfg.split_cookie && utag.loader.hasSplitUtagMainCookie();
            },
            readIndividualCookies: function() {
                if (!document.cookie || document.cookie === "") {
                    return {};
                }
                var cookies = document.cookie.split("; ");
                return cookies.reduce(function(result, cookie) {
                    var kv = cookie.split("=");
                    if (kv[0].startsWith("utag_")) {
                        var cookieName = kv[0].split("_")[1];
                        var cookieNameWithTag = "utag_" + cookieName;
                        if (!result[cookieNameWithTag]) {
                            result[cookieNameWithTag] = {};
                        }
                        var nameTrimmed = kv[0].replace(cookieNameWithTag + "_", "");
                        result[cookieNameWithTag][nameTrimmed] = String(kv[1]).replace(/%3B/g, ';')
                    }
                    return result;
                }, {});
            },
            RDqp: function(o, a, b, c) {
                a = location.search + (location.hash + '').replace("#", "&");
                if (utag.cfg.lowerqp) {
                    a = a.toLowerCase()
                };
                if (a.length > 1) {
                    b = a.substring(1).split('&');
                    for (a = 0; a < b.length; a++) {
                        c = b[a].split("=");
                        if (c.length > 1) {
                            o["qp." + c[0]] = utag.ut.decode(c[1])
                        }
                    }
                }
            },
            RDmeta: function(o, a, b, h) {
                a = document.getElementsByTagName("meta");
                for (b = 0; b < a.length; b++) {
                    try {
                        h = a[b].name || a[b].getAttribute("property") || "";
                    } catch (e) {
                        h = "";
                        utag.DB(e)
                    };
                    if (utag.cfg.lowermeta) {
                        h = h.toLowerCase()
                    };
                    if (h != "") {
                        o["meta." + h] = a[b].content
                    }
                }
            },
            RDva: function(o) {
                var readAttr = function(o, l) {
                    var a = "",
                        b;
                    a = localStorage.getItem(l);
                    if (!a || a == "{}") return;
                    b = utag.ut.flatten({
                        va: JSON.parse(a)
                    });
                    utag.ut.merge(o, b, 1);
                }
                try {
                    readAttr(o, "tealium_va");
                    readAttr(o, "tealium_va_" + o["ut.account"] + "_" + o["ut.profile"]);
                } catch (e) {
                    utag.DB(e)
                }
            },
            RDut: function(o, a) {
                var t = {};
                var d = new Date();
                var m = (utag.ut.typeOf(d.toISOString) == "function");
                o["ut.domain"] = utag.cfg.domain;
                o["ut.version"] = utag.cfg.v;
                o["ut.event"] = a || "view";
                t["tealium_event"] = o["tealium_event"] || o["ut.event"]
                t["tealium_visitor_id"] = (o["tealium_visitor_id"] || o["cp.utag_main_v_id"] || o["ut.visitor_id"]);
                o["ut.visitor_id"] = o["cp.utag_main_v_id"];
                t["tealium_session_id"] = o["ut.session_id"] = o["cp.utag_main_ses_id"];
                t["tealium_session_number"] = o["cp.utag_main__sn"];
                t["tealium_session_event_number"] = o["cp.utag_main__se"];
                try {
                    t["tealium_datasource"] = utag.cfg.datasource;
                    t["tealium_account"] = o["ut.account"] = utag.cfg.utid.split("/")[0];
                    t["tealium_profile"] = o["ut.profile"] = utag.cfg.utid.split("/")[1];
                    t["tealium_environment"] = o["ut.env"] = "prod";
                } catch (e) {
                    utag.DB(e)
                }
                t["tealium_random"] = Math.random().toFixed(16).substring(2);
                t["tealium_library_name"] = "ut" + "ag.js";
                t["tealium_library_version"] = (utag.cfg.template + "0").substring(2);
                t["tealium_timestamp_epoch"] = Math.floor(d.getTime() / 1000);
                t["tealium_timestamp_utc"] = (m ? d.toISOString() : "");
                d.setHours(d.getHours() - (d.getTimezoneOffset() / 60));
                t["tealium_timestamp_local"] = (m ? d.toISOString().replace("Z", "") : "");
                if (utag.cfg.disable_tealium_attribute_override) {
                    utag.ut.merge(o, t, 1);
                } else {
                    utag.ut.merge(o, t, 0);
                }
            },
            RDses: function(o, a, c) {
                a = (new Date()).getTime();
                c = (a + parseInt(utag.cfg.session_timeout)) + "";
                if (!o["cp.utag_main_ses_id"]) {
                    o["cp.utag_main_ses_id"] = a + "";
                    o["cp.utag_main__ss"] = "1";
                    o["cp.utag_main__se"] = "1";
                    o["cp.utag_main__sn"] = (1 + parseInt(o["cp.utag_main__sn"] || 0)) + "";
                } else {
                    o["cp.utag_main__ss"] = "0";
                    o["cp.utag_main__se"] = (1 + parseInt(o["cp.utag_main__se"] || 0)) + "";
                }
                o["cp.utag_main__pn"] = o["cp.utag_main__pn"] || "1";
                o["cp.utag_main__st"] = c;
                var ses_id = utag.loader.addExpSessionFlag(o["cp.utag_main_ses_id"] || a);
                var pn = utag.loader.addExpSessionFlag(o["cp.utag_main__pn"]);
                var ss = utag.loader.addExpSessionFlag(o["cp.utag_main__ss"]);
                var st = utag.loader.addExpSessionFlag(c);
                var se = utag.loader.addExpSessionFlag(o["cp.utag_main__se"]);
                utag.loader.SC("utag_main", {
                    _sn: (o["cp.utag_main__sn"] || 1),
                    _se: se,
                    _ss: ss,
                    _st: st,
                    ses_id: ses_id,
                    _pn: pn
                });
            },
            containsExpSessionFlag: function(v) {
                return String(v).replace(/%3B/g, ';').includes(";exp-session");
            },
            addExpSessionFlag: function(v) {
                return utag.loader.containsExpSessionFlag(v) ? v : v + ";exp-session";
            },
            containsExpFlag: function(v) {
                return String(v).replace(/%3B/g, ';').includes(";exp-");
            },
            addExpFlag: function(v, x) {
                return utag.loader.containsExpFlag(v) ? v : v + ";exp-" + String(x);
            },
            RDpv: function(o) {
                if (typeof utag.pagevars == "function") {
                    utag.DB("Read page variables");
                    utag.pagevars(o);
                }
            },
            RDlocalStorage: function(o) {
                if (utag.cfg.ignoreLocalStorage) {
                    return;
                }
                Object.keys(window.localStorage).forEach(function(localStorageKey) {
                    o["ls." + localStorageKey] = window.localStorage[localStorageKey];
                });
            },
            RDsessionStorage: function(o) {
                if (utag.cfg.ignoreSessionStorage) {
                    return;
                }
                Object.keys(window.sessionStorage).forEach(function(sessionStorageKey) {
                    o["ss." + sessionStorageKey] = window.sessionStorage[sessionStorageKey];
                });
            },
            convertCustomMultiCookies: function() {
                var cookiesToConvert = {}
                if (utag.loader.convertingToSplitCookies()) {
                    utag.loader.mapUtagCookies(function(parentCookie) {
                        cookiesToConvert[parentCookie.key] = cookiesToConvert[parentCookie.key] || {}
                        parentCookie.value.split('$').forEach(function(subCookie) {
                            var key = subCookie.split(':')[0]
                            var value = subCookie.split(':')[1]
                            cookiesToConvert[parentCookie.key][key] = (String(value).indexOf('%3Bexp-') !== -1 && String(value).indexOf('%3Bexp-session') === -1) ? String(value).replace(/%3B/g, ';') + 'u' : String(value).replace(/%3B/g, ';');
                        })
                    })
                } else if (utag.loader.revertingSplitCookies()) {
                    utag.loader.mapUtagCookies(function(splitCookie) {
                        var parentCookieName = splitCookie.key.match(/^utag_[^_]*/)[0];
                        var subCookieName = splitCookie.key.split(parentCookieName + '_')[1];
                        cookiesToConvert[parentCookieName] = cookiesToConvert[parentCookieName] || {};
                        cookiesToConvert[parentCookieName][subCookieName] = (String(splitCookie.value).indexOf('%3Bexp-') !== -1 && String(splitCookie.value).indexOf('%3Bexp-session')) === -1 ? String(splitCookie.value).replace(/%3B/g, ';') + 'u' : String(splitCookie.value).replace(/%3B/g, ';');
                    })
                }
                if (utag.loader.convertingToSplitCookies()) {
                    utag.loader.getUtagCookies().forEach(function(cookie) {
                        utag.loader.deleteCookie(cookie.key);
                    });
                } else if (utag.loader.revertingSplitCookies()) {
                    utag.loader.deleteIndividualCookies();
                }
                Object.keys(cookiesToConvert).forEach(function(key) {
                    utag.loader.SC(key, cookiesToConvert[key]);
                });
            },
            RD: function(o, a) {
                utag.DB("utag.loader.RD");
                utag.DB(o);
                utag.loader.RDcp(o);
                if (utag.cfg.split_cookie) {
                    utag.loader.checkCookiesAgainstWhitelist();
                }
                if (utag.loader.convertingToSplitCookies() || utag.loader.revertingSplitCookies()) {
                    utag.loader.convertCustomMultiCookies();
                }
                if (!utag.loader.rd_flag) {
                    utag.loader.rd_flag = 1;
                    o["cp.utag_main__pn"] = (1 + parseInt(o["cp.utag_main__pn"] || 0)) + "";
                    var setVId = window.utag_cfg_ovrd && window.utag_cfg_ovrd.always_set_v_id || false;
                    if (setVId) {
                        o["cp.utag_main_v_id"] = o["cp.utag_main_v_id"] || utag.ut.vi((new Date()).getTime());
                        utag.loader.SC("utag_main", {
                            "v_id": o["cp.utag_main_v_id"]
                        });
                    }
                    utag.loader.RDses(o);
                }
                if (a && !utag.cfg.noview) utag.loader.RDses(o);
                utag.loader.RDqp(o);
                utag.loader.RDmeta(o);
                utag.loader.RDdom(o);
                utag.loader.RDut(o, a || "view");
                utag.loader.RDpv(o);
                utag.loader.RDva(o);
                utag.loader.RDlocalStorage(o);
                utag.loader.RDsessionStorage(o);
            },
            whitelistDefined: function() {
                return utag.cfg.split_cookie_allowlist && Array.isArray(utag.cfg.split_cookie_allowlist);
            },
            cookieIsAllowed: function(key) {
                return !utag.loader.whitelistDefined() || utag.cfg.split_cookie_allowlist.includes(key);
            },
            checkCookiesAgainstWhitelist: function() {
                if (!utag.loader.whitelistDefined()) {
                    return;
                }
                utag.loader.mapUtagCookies(function(cookie) {
                    if (!utag.loader.cookieIsAllowed(cookie.key.replace("utag_main_", ""))) {
                        utag.loader.deleteCookie(cookie.key);
                    }
                }, true);
            },
            deleteIndividualCookies: function() {
                utag.loader.mapUtagCookies(function(cookie) {
                    utag.loader.deleteCookie(cookie.key);
                });
            },
            deleteCookie: function(key) {
                document.cookie = key + "=; path=/;domain=" + utag.cfg.domain + ";max-age=0;";
            },
            getUtagCookies: function(onlyUtagMain = false) {
                var cookies = document.cookie.split("; ");
                var result = [];
                for (var i = 0; i < cookies.length; i++) {
                    var cookie = cookies[i];
                    if (cookie.startsWith(onlyUtagMain ? "utag_main_" : "utag_")) {
                        var kv = cookie.split("=");
                        result.push({
                            key: kv[0],
                            value: kv[1]
                        });
                    }
                }
                return result;
            },
            mapUtagCookies: function(mapFunction, onlyUtagMain = false) {
                var cookies = utag.loader.getUtagCookies(onlyUtagMain);
                for (var i = 0; i < cookies.length; i++) {
                    var cookie = cookies[i];
                    mapFunction(cookie);
                }
            },
            filterArray: function(array, predicate) {
                var y = 0;
                for (var x = 0; x < array.length; x++) {
                    if (predicate(array[x])) {
                        array[y] = array[x];
                        y++;
                    }
                }
                array.length = y;
            },
            RC: function(a, x, b, c, d, e, f, g, h, i, j, k, l, m, n, o, v, ck, cv, r, s, t) {
                o = {};
                b = ("" + document.cookie != "") ? (document.cookie).split("; ") : [];
                r = /^(.*?)=(.*)$/;
                s = /^(.*);exp-(.*)$/;
                t = (new Date()).getTime();
                var newMultiCookies;
                if (utag.loader.hasSplitUtagMainCookie()) {
                    newMultiCookies = utag.loader.readIndividualCookies();
                    utag.loader.filterArray(b, function(cookie) {
                        return !cookie.startsWith("utag_")
                    });
                }
                for (c = 0; c < b.length; c++) {
                    if (b[c].match(r)) {
                        ck = RegExp.$1;
                        cv = RegExp.$2;
                    }
                    e = utag.ut.decode(cv);
                    if (typeof ck != "undefined") {
                        if (ck.indexOf("ulog") == 0 || ck.indexOf("utag_") == 0) {
                            e = cv.split("$");
                            g = [];
                            j = {};
                            for (f = 0; f < e.length; f++) {
                                try {
                                    g = e[f].split(":");
                                    if (g.length > 2) {
                                        g[1] = g.slice(1).join(":");
                                    }
                                    v = "";
                                    if (("" + g[1]).indexOf("~") == 0) {
                                        h = g[1].substring(1).split("|");
                                        for (i = 0; i < h.length; i++) h[i] = utag.ut.decode(h[i]);
                                        v = h
                                    } else v = utag.ut.decode(g[1]);
                                    j[g[0]] = v;
                                } catch (er) {
                                    utag.DB(er)
                                };
                            }
                            o[ck] = {};
                            for (f in utag.loader.GV(j)) {
                                if (utag.ut.typeOf(j[f]) == "array") {
                                    n = [];
                                    for (m = 0; m < j[f].length; m++) {
                                        if (j[f][m].match(s)) {
                                            k = (RegExp.$2 == "session") ? (typeof j._st != "undefined" ? j._st : t - 1) : parseInt(RegExp.$2);
                                            if (k > t) n[m] = (x == 0) ? j[f][m] : RegExp.$1;
                                        }
                                    }
                                    j[f] = n.join("|");
                                } else {
                                    j[f] = "" + j[f];
                                    if (j[f].match(s)) {
                                        k = (RegExp.$2 == "session") ? (typeof j._st != "undefined" ? j._st : t - 1) : parseInt(RegExp.$2);
                                        j[f] = (k < t) ? null : (x == 0 ? j[f] : RegExp.$1);
                                    }
                                }
                                if (j[f]) o[ck][f] = j[f];
                            }
                        } else if (utag.cl[ck] || utag.cl['_all_']) {
                            o[ck] = e
                        }
                    }
                }
                if (newMultiCookies) {
                    Object.keys(newMultiCookies).forEach(function(tag) {
                        o[tag] = {};
                        Object.keys(newMultiCookies[tag]).forEach(function(key) {
                            o[tag][key] = newMultiCookies[tag][key].split(';exp-')[0]
                        })
                    });
                }
                return (a) ? (o[a] ? o[a] : {}) : o;
            },
            SC: function(a, b, c, d, e, f, g, h, i, j, k, x, v) {
                if (!a) return 0;
                if (a == "utag_main" && utag.cfg.nocookie) return 0;
                v = "";
                var date = new Date();
                var exp = new Date();
                var data;
                exp.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
                x = exp.toGMTString();
                if (c && c === "da" || (utag.cfg.split_cookie && c === 'd')) {
                    x = "Thu, 31 Dec 2009 00:00:00 GMT";
                    data = utag.loader.GV(b);
                } else if (a.indexOf("utag_") != 0 && a.indexOf("ulog") != 0) {
                    if (typeof b != "object") {
                        v = b
                    }
                } else {
                    if (utag.cfg.split_cookie) {
                        d = utag.loader.readIndividualCookies()[a] || {};
                        data = utag.loader.GV(b);
                    } else {
                        d = utag.loader.RC(a, 0);
                    }
                    for (e in utag.loader.GV(b)) {
                        f = "" + b[e];
                        if (f.match(/^(.*);exp-(\d+)(\w)$/)) {
                            g = date.getTime() + parseInt(RegExp.$2) * ((RegExp.$3 == "h") ? 3600000 : 86400000);
                            if (RegExp.$3 == "u") g = parseInt(RegExp.$2);
                            f = RegExp.$1 + ";exp-" + g;
                        }
                        if (c == "i") {
                            if (d[e] == null) d[e] = f;
                        } else if (c == "d") delete d[e];
                        else if (c == "a") d[e] = (d[e] != null) ? (f - 0) + (d[e] - 0) : f;
                        else if (c == "ap" || c == "au") {
                            if (d[e] == null) d[e] = f;
                            else {
                                if (d[e].indexOf("|") > 0) {
                                    d[e] = d[e].split("|")
                                }
                                g = (utag.ut.typeOf(d[e]) == "array") ? d[e] : [d[e]];
                                g.push(f);
                                if (c == "au") {
                                    h = {};
                                    k = {};
                                    for (i = 0; i < g.length; i++) {
                                        if (g[i].match(/^(.*);exp-(.*)$/)) {
                                            j = RegExp.$1;
                                        }
                                        if (typeof k[j] == "undefined") {
                                            k[j] = 1;
                                            h[g[i]] = 1;
                                        }
                                    }
                                    g = [];
                                    for (i in utag.loader.GV(h)) {
                                        g.push(i);
                                    }
                                }
                                d[e] = g
                            }
                        } else d[e] = f;
                    }
                    if (utag.loader.convertingToSplitCookies() === true) {
                        delete d[a];
                    }
                    data = utag.loader.GV(d);
                    h = new Array();
                    for (g in data) {
                        if (utag.ut.typeOf(d[g]) == "array") {
                            for (c = 0; c < d[g].length; c++) {
                                d[g][c] = encodeURIComponent(d[g][c])
                            }
                            h.push(g + ":~" + d[g].join("|"))
                        } else h.push((g + ":").replace(/[\,\$\;\?]/g, "") + encodeURIComponent(d[g]))
                    }
                    if (h.length == 0) {
                        h.push("");
                        x = ""
                    }
                    v = (h.join("$"));
                }
                if (utag.cfg.split_cookie && c !== 'da' && c !== 'd') {
                    utag.loader.prepareAndWriteCookies(a, data, x);
                } else if (utag.cfg.split_cookie) {
                    utag.loader.mapUtagCookies(function(cookieInfo) {
                        var cookiesToDelete = Object.keys(data || {}).map(function(key) {
                            return a + '_' + key
                        });
                        if ((c === 'da' && cookieInfo.key.startsWith(a)) || (c === 'd' && cookiesToDelete.indexOf(cookieInfo.key) !== -1)) {
                            document.cookie = cookieInfo.key + "=" + v + ";path=/;domain=" + utag.cfg.domain + ";expires=" + x + (utag.cfg.secure_cookie ? ";secure" : "");
                        }
                    })
                } else {
                    document.cookie = a + "=" + v + ";path=/;domain=" + utag.cfg.domain + ";expires=" + x + (utag.cfg.secure_cookie ? ";secure" : "");
                }
                return 1
            },
            prepareAndWriteCookies: function(tag, data, expiration) {
                var defaultSessionExpirationCookies = ["_pn", "_ss", "_st", "_ses_id", "_se"];
                var originalExpiration = expiration;
                if (Object.keys(data).length > 0) {
                    for (var key in data) {
                        expiration = originalExpiration;
                        if (!utag.loader.cookieIsAllowed(key)) {
                            continue;
                        }
                        var value = String(data[key]);
                        if (defaultSessionExpirationCookies.includes(key)) {
                            value = utag.loader.addExpSessionFlag(value);
                        }
                        if (value.match(/exp-(\d+|session)$/)) {
                            var expValue = RegExp.$1;
                            if (expValue === "session" && !!utag.cfg.session_timeout) {
                                value = utag.loader.addExpSessionFlag(value);
                                expiration = new Date();
                                expiration.setTime(expiration.getTime() + parseInt(utag.cfg.session_timeout));
                                expiration = expiration.toGMTString();
                            } else {
                                var expInt = parseInt(expValue);
                                if (!!expInt) {
                                    value = utag.loader.addExpFlag(value, expInt);
                                    expiration = new Date(expInt);
                                    expiration = expiration.toGMTString();
                                }
                            }
                        }
                        utag.loader.writeCookie(tag + "_" + key, value, expiration);
                    }
                    utag.loader.deleteCookie(tag);
                }
            },
            writeCookie: function(key, value, expiration) {
                if (value.includes(";")) {
                    value = value.replace(/;/g, encodeURIComponent(";"));
                }
                document.cookie = key + "=" + value + ";path=/;domain=" + utag.cfg.domain + ";expires=" + expiration + (utag.cfg.secure_cookie ? ";secure" : "");
            },
            LOAD: function(a, b, c, d) {
                if (!utag.loader.cfg) {
                    return
                }
                if (this.ol == 0) {
                    if (utag.loader.cfg[a].block && utag.loader.cfg[a].cbf) {
                        this.f[a] = 1;
                        delete utag.loader.bq[a];
                    }
                    for (b in utag.loader.GV(utag.loader.bq)) {
                        if (utag.loader.cfg[a].load == 4 && utag.loader.cfg[a].wait == 0) {
                            utag.loader.bk[a] = 1;
                            utag.DB("blocked: " + a);
                        }
                        utag.DB("blocking: " + b);
                        return;
                    }
                    utag.loader.INIT();
                    return;
                }
                utag.DB('utag.loader.LOAD:' + a);
                if (this.f[a] == 0) {
                    this.f[a] = 1;
                    if (utag.cfg.noview != true) {
                        if (utag.loader.cfg[a].send) {
                            utag.DB("SENDING: " + a);
                            try {
                                if (utag.loader.sendq.pending > 0 && utag.loader.sendq[a]) {
                                    utag.DB("utag.loader.LOAD:sendq: " + a);
                                    while (d = utag.loader.sendq[a].shift()) {
                                        utag.DB(d);
                                        utag.sender[a].send(d.event, utag.handler.C(d.data));
                                        utag.loader.sendq.pending--;
                                    }
                                } else {
                                    utag.sender[a].send('view', utag.handler.C(utag.data));
                                }
                                utag.rpt['s_' + a] = 0;
                            } catch (e) {
                                utag.DB(e);
                                utag.rpt['s_' + a] = 1;
                            }
                        }
                    }
                    if (utag.loader.rf == 0) return;
                    for (b in utag.loader.GV(this.f)) {
                        if (this.f[b] == 0 || this.f[b] == 2) return
                    }
                    utag.loader.END();
                }
            },
            EV: function(a, b, c, d) {
                if (b == "ready") {
                    if (!utag.data) {
                        try {
                            utag.cl = {
                                '_all_': 1
                            };
                            utag.loader.initdata();
                            utag.loader.RD(utag.data);
                        } catch (e) {
                            utag.DB(e)
                        };
                    }
                    if ((document.attachEvent || utag.cfg.dom_complete) ? document.readyState === "complete" : document.readyState !== "loading") setTimeout(c, 1);
                    else {
                        utag.loader.ready_q.push(c);
                        var RH;
                        if (utag.loader.ready_q.length <= 1) {
                            if (document.addEventListener) {
                                RH = function() {
                                    document.removeEventListener("DOMContentLoaded", RH, false);
                                    utag.loader.run_ready_q()
                                };
                                if (!utag.cfg.dom_complete) document.addEventListener("DOMContentLoaded", RH, false);
                                window.addEventListener("load", utag.loader.run_ready_q, false);
                            } else if (document.attachEvent) {
                                RH = function() {
                                    if (document.readyState === "complete") {
                                        document.detachEvent("onreadystatechange", RH);
                                        utag.loader.run_ready_q()
                                    }
                                };
                                document.attachEvent("onreadystatechange", RH);
                                window.attachEvent("onload", utag.loader.run_ready_q);
                            }
                        }
                    }
                } else {
                    if (a.addEventListener) {
                        a.addEventListener(b, c, false)
                    } else if (a.attachEvent) {
                        a.attachEvent(((d == 1) ? "" : "on") + b, c)
                    }
                }
            },
            END: function(b, c, d, e, v, w) {
                if (this.ended) {
                    return
                };
                this.ended = 1;
                utag.DB("loader.END");
                b = utag.data;
                if (utag.handler.base && utag.handler.base != '*') {
                    e = utag.handler.base.split(",");
                    for (d = 0; d < e.length; d++) {
                        if (typeof b[e[d]] != "undefined") utag.handler.df[e[d]] = b[e[d]]
                    }
                } else if (utag.handler.base == '*') {
                    utag.ut.merge(utag.handler.df, b, 1);
                }
                utag.rpt['r_0'] = "t";
                for (var r in utag.loader.GV(utag.cond)) {
                    utag.rpt['r_' + r] = (utag.cond[r]) ? "t" : "f";
                }
                utag.rpt.ts['s'] = new Date();
                v = utag.cfg.path;
                if (b["cp.utag_main__ss"] == 1 && !utag.cfg.no_session_count) utag.ut.loader({
                    src: v + "ut" + "ag" + ".v.js?a=" + utag.cfg.utid + (utag.cfg.nocookie ? "&nocookie=1" : "&cb=" + (new Date).getTime()),
                    id: "tiqapp"
                })
                if (utag.cfg.noview != true) utag.handler.RE('view', b, "end");
                utag.handler.INIT();
            }
        },
        DB: function(a, b) {
            if (utag.cfg.utagdb === false) {
                return;
            } else if (typeof utag.cfg.utagdb == "undefined") {
                b = document.cookie + '';
                utag.cfg.utagdb = ((b.indexOf('utagdb=true') >= 0) ? true : false);
            }
            if (utag.cfg.utagdb === true) {
                var t;
                if (utag.ut.typeOf(a) == "object") {
                    t = utag.handler.C(a)
                } else {
                    t = a
                }
                utag.db_log.push(t);
                try {
                    if (!utag.cfg.noconsole) console.log(t)
                } catch (e) {}
            }
        },
        RP: function(a, b, c) {
            if (typeof a != 'undefined' && typeof a.src != 'undefined' && a.src != '') {
                b = [];
                for (c in utag.loader.GV(a)) {
                    if (c != 'src') b.push(c + '=' + escape(a[c]))
                }
                this.dbi.push((new Image()).src = a.src + '?utv=' + utag.cfg.v + '&utid=' + utag.cfg.utid + '&' + (b.join('&')))
            }
        },
        view: function(a, c, d) {
            return this.track({
                event: 'view',
                data: a || {},
                cfg: {
                    cb: c,
                    uids: d
                }
            })
        },
        link: function(a, c, d) {
            return this.track({
                event: 'link',
                data: a || {},
                cfg: {
                    cb: c,
                    uids: d
                }
            })
        },
        track: function(a, b, c, d, e) {
            a = a || {};
            if (typeof a == "string") {
                a = {
                    event: a,
                    data: b || {},
                    cfg: {
                        cb: c,
                        uids: d
                    }
                }
            }
            a.data = { ...a.data
            }
            for (e in utag.loader.GV(utag.o)) {
                utag.o[e].handler.trigger(a.event || "view", a.data || a, a.cfg || {
                    cb: b,
                    uids: c
                })
            }
            a.cfg = a.cfg || {
                cb: b
            };
            if (typeof a.cfg.cb == "function") a.cfg.cb();
            return true
        },
        handler: {
            base: "",
            df: {},
            o: {},
            send: {},
            iflag: 0,
            INIT: function(a, b, c) {
                utag.DB('utag.handler.INIT');
                if (utag.initcatch) {
                    utag.initcatch = 0;
                    return
                }
                this.iflag = 1;
                a = utag.loader.q.length;
                if (a > 0) {
                    utag.DB("Loader queue");
                    for (b = 0; b < a; b++) {
                        c = utag.loader.q[b];
                        utag.handler.trigger(c.a, c.b, c.c)
                    }
                }
            },
            test: function() {
                return 1
            },
            LR: function(b) {
                utag.DB("Load Rules");
                for (var d in utag.loader.GV(utag.cond)) {
                    utag.cond[d] = false;
                }
                utag.DB(b);
                utag.loader.loadrules(b);
                utag.DB(utag.cond);
                utag.loader.initcfg();
                utag.loader.OU();
                for (var r in utag.loader.GV(utag.cond)) {
                    utag.rpt['r_' + r] = (utag.cond[r]) ? "t" : "f";
                }
            },
            RE: function(a, b, c, d, e, f, g) {
                if (c != "alr" && !this.cfg_extend) {
                    return 0;
                }
                utag.DB("RE: " + c);
                if (c == "alr") utag.DB("All Tags EXTENSIONS");
                utag.DB(b);
                if (typeof this.extend != "undefined") {
                    g = 0;
                    for (d = 0; d < this.extend.length; d++) {
                        try {
                            e = 0;
                            if (typeof this.cfg_extend != "undefined") {
                                f = this.cfg_extend[d];
                                if (typeof f.count == "undefined") f.count = 0;
                                if (f[a] == 0 || (f.once == 1 && f.count > 0) || f[c] == 0) {
                                    e = 1
                                } else {
                                    if (f[c] == 1) {
                                        g = 1
                                    };
                                    f.count++
                                }
                            }
                            if (e != 1) {
                                this.extend[d](a, b);
                                utag.rpt['ex_' + d] = 0
                            }
                        } catch (er) {
                            utag.DB(er);
                            utag.rpt['ex_' + d] = 1;
                            utag.ut.error({
                                e: er.message,
                                s: utag.cfg.path + 'utag.js',
                                l: d,
                                t: 'ge'
                            });
                        }
                    }
                    utag.DB(b);
                    return g;
                }
            },
            trigger: function(a, b, c, d, e, f) {
                utag.DB('trigger:' + a + (c && c.uids ? ":" + c.uids.join(",") : ""));
                b = b || {};
                utag.DB(b);
                if (!this.iflag) {
                    utag.DB("trigger:called before tags loaded");
                    for (d in utag.loader.f) {
                        if (!(utag.loader.f[d] === 1)) utag.DB('Tag ' + d + ' did not LOAD')
                    }
                    utag.loader.q.push({
                        a: a,
                        b: utag.handler.C(b),
                        c: c
                    });
                    return;
                }
                utag.ut.merge(b, this.df, 0);
                utag.loader.RD(b, a);
                utag.cfg.noview = false;

                function sendTag(a, b, d) {
                    try {
                        if (typeof utag.sender[d] != "undefined") {
                            utag.DB("SENDING: " + d);
                            utag.sender[d].send(a, utag.handler.C(b));
                            utag.rpt['s_' + d] = 0;
                        } else if (utag.loader.cfg[d].load != 2) {
                            utag.loader.sendq[d] = utag.loader.sendq[d] || [];
                            utag.loader.sendq[d].push({
                                "event": a,
                                "data": utag.handler.C(b)
                            });
                            utag.loader.sendq.pending++;
                            utag.loader.AS({
                                id: d,
                                load: 1
                            });
                        }
                    } catch (e) {
                        utag.DB(e)
                    }
                }
                if (utag.cfg.nonblocking_tags === true) {
                    var promises = [];
                    var addExecutionPromise = function(self, functionToExecute, args, tagId) {
                        promises.push(async function() {
                            try {
                                setTimeout(function() {
                                    functionToExecute.apply(self, args)
                                }, 1)
                            } catch (e) {
                                utag.DB && utag.DB(e);
                            }
                        })
                    }
                }
                if (c && c.uids) {
                    if (!utag.cfg.suppress_before_load_rules_with_uids) {
                        this.RE(a, b, "blr");
                    }
                    this.RE(a, b, "alr");
                    for (f = 0; f < c.uids.length; f++) {
                        d = c.uids[f];
                        if (utag.loader.cfg[d] && !utag.loader.OU(utag.loader.cfg[d].tid)) {
                            if (utag.cfg.nonblocking_tags === true) {
                                addExecutionPromise(this, sendTag, [a, b, d], d)
                            } else {
                                sendTag(a, b, d);
                            }
                        }
                    }
                } else if (utag.cfg.load_rules_ajax) {
                    this.RE(a, b, "blr");
                    this.LR(b);
                    this.RE(a, b, "alr");
                    for (f = 0; f < utag.loader.cfgsort.length; f++) {
                        d = utag.loader.cfgsort[f];
                        if (utag.loader.cfg[d].load && utag.loader.cfg[d].send) {
                            if (utag.cfg.nonblocking_tags === true) {
                                addExecutionPromise(this, sendTag, [a, b, d], d)
                            } else {
                                sendTag(a, b, d);
                            }
                        }
                    }
                } else {
                    this.RE(a, b, "alr");
                    for (d in utag.loader.GV(utag.sender)) {
                        if (utag.cfg.nonblocking_tags === true) {
                            addExecutionPromise(this, sendTag, [a, b, d], d)
                        } else {
                            sendTag(a, b, d);
                        }
                    }
                }
                if (utag.cfg.nonblocking_tags === true) {
                    var settlePromisesInSequence = async function(promises) {
                        utag.DB('PROMISES ACTIVE - ' + JSON.stringify(promises), null, 2);
                        const results = [];
                        for (var i = 0; i < promises.length; i++) {
                            var result = await promises[i]();
                            results.push(result);
                        }
                        return results;
                    }
                    var thisRe = this.RE.bind(this);
                    settlePromisesInSequence(promises)
                        .then(function(results) {
                            utag.DB('PROMISE RESULTS ' + results)
                            thisRe(a, b, "end");
                        })
                } else {
                    this.RE(a, b, "end");
                }
            },
            C: function(a, b, c) {
                b = {};
                for (c in utag.loader.GV(a)) {
                    if (utag.ut.typeOf(a[c]) == "array") {
                        b[c] = a[c].slice(0)
                    } else {
                        b[c] = a[c]
                    }
                }
                return b
            }
        },
        ut: {
            pad: function(a, b, c, d) {
                a = "" + ((a - 0).toString(16));
                d = '';
                if (b > a.length) {
                    for (c = 0; c < (b - a.length); c++) {
                        d += '0'
                    }
                }
                return "" + d + a
            },
            vi: function(t, a, b) {
                if (!utag.v_id) {
                    a = this.pad(t, 12);
                    b = "" + Math.random();
                    a += this.pad(b.substring(2, b.length), 16);
                    try {
                        a += this.pad((navigator.plugins.length ? navigator.plugins.length : 0), 2);
                        a += this.pad(navigator.userAgent.length, 3);
                        a += this.pad(document.URL.length, 4);
                        a += this.pad(navigator.appVersion.length, 3);
                        a += this.pad(screen.width + screen.height + parseInt((screen.colorDepth) ? screen.colorDepth : screen.pixelDepth), 5)
                    } catch (e) {
                        utag.DB(e);
                        a += "12345"
                    };
                    utag.v_id = a;
                }
                return utag.v_id
            },
            hasOwn: function(o, a) {
                return o != null && Object.prototype.hasOwnProperty.call(o, a)
            },
            isEmptyObject: function(o, a) {
                for (a in o) {
                    if (utag.ut.hasOwn(o, a)) return false
                }
                return true
            },
            isEmpty: function(o) {
                var t = utag.ut.typeOf(o);
                if (t == "number") {
                    return isNaN(o)
                } else if (t == "boolean") {
                    return false
                } else if (t == "string") {
                    return o.length === 0
                } else return utag.ut.isEmptyObject(o)
            },
            typeOf: function(e) {
                return ({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
            },
            flatten: function(o) {
                var a = {};

                function r(c, p) {
                    if (Object(c) !== c || utag.ut.typeOf(c) == "array") {
                        a[p] = c;
                    } else {
                        if (utag.ut.isEmptyObject(c)) {} else {
                            for (var d in c) {
                                r(c[d], p ? p + "." + d : d);
                            }
                        }
                    }
                }
                r(o, "");
                return a;
            },
            merge: function(a, b, c, d) {
                if (c) {
                    for (d in utag.loader.GV(b)) {
                        a[d] = b[d]
                    }
                } else {
                    for (d in utag.loader.GV(b)) {
                        if (typeof a[d] == "undefined") a[d] = b[d]
                    }
                }
            },
            decode: function(a, b) {
                b = "";
                try {
                    b = decodeURIComponent(a)
                } catch (e) {
                    utag.DB(e)
                };
                if (b == "") {
                    b = unescape(a)
                };
                return b
            },
            encode: function(a, b) {
                b = "";
                try {
                    b = encodeURIComponent(a)
                } catch (e) {
                    utag.DB(e)
                };
                if (b == "") {
                    b = escape(a)
                };
                return b
            },
            error: function(a, b, c) {
                if (typeof utag_err != "undefined") {
                    utag_err.push(a)
                }
            },
            loader: function(o, a, b, c, l, m) {
                utag.DB(o);
                a = document;
                if (o.type == "iframe") {
                    m = a.getElementById(o.id);
                    if (m && m.tagName == "IFRAME") {
                        m.parentNode.removeChild(m);
                    }
                    b = a.createElement("iframe");
                    o.attrs = o.attrs || {};
                    utag.ut.merge(o.attrs, {
                        "height": "1",
                        "width": "1",
                        "style": "display:none"
                    }, 0);
                } else if (o.type == "img") {
                    utag.DB("Attach img: " + o.src);
                    b = new Image();
                } else {
                    b = a.createElement("script");
                    b.language = "javascript";
                    b.type = "text/javascript";
                    b.async = 1;
                    b.charset = "utf-8";
                }
                if (o.id) {
                    b.id = o.id
                };
                for (l in utag.loader.GV(o.attrs)) {
                    b.setAttribute(l, o.attrs[l])
                }
                b.setAttribute("src", o.src);
                if (typeof o.cb == "function") {
                    if (b.addEventListener) {
                        b.addEventListener("load", function() {
                            o.cb()
                        }, false);
                    } else {
                        b.onreadystatechange = function() {
                            if (this.readyState == 'complete' || this.readyState == 'loaded') {
                                this.onreadystatechange = null;
                                o.cb()
                            }
                        };
                    }
                }
                if (typeof o.error == "function") {
                    utag.loader.EV(b, "error", o.error);
                }
                if (o.type != "img") {
                    l = o.loc || "head";
                    c = a.getElementsByTagName(l)[0];
                    if (c) {
                        utag.DB("Attach to " + l + ": " + o.src);
                        if (l == "script") {
                            c.parentNode.insertBefore(b, c);
                        } else {
                            c.appendChild(b)
                        }
                    }
                }
            }
        }
    };
    utag.o['royalmail.clickanddrop'] = utag;
    utag.cfg = {
        template: "ut4.54.",
        load_rules_ajax: true,
        load_rules_at_wait: false,
        lowerqp: false,
        noconsole: false,
        session_timeout: 1800000,
        readywait: 0,
        noload: 0,
        domain: utag.loader.lh(),
        datasource: "##UTDATASOURCE##".replace("##" + "UTDATASOURCE##", ""),
        secure_cookie: ("##UTSECURECOOKIE##".replace("##" + "UTSECURECOOKIE##", "") === "true") ? true : false,
        path: "//tags.tiqcdn.com/utag/royalmail/clickanddrop/prod/",
        utid: "royalmail/clickanddrop/202605011042",
        ignoreSessionStorage: false,
        ignoreLocalStorage: false,
        split_cookie: true
    };
    utag.cfg.v = utag.cfg.template + "202605011042";
    utag.cond = {
        108: 0,
        109: 0,
        110: 0,
        271: 0,
        274: 0,
        275: 0,
        276: 0,
        279: 0
    };
    utag.pagevars = function(ud) {
        ud = ud || utag.data;
        try {
            ud['js_page.navigator.userAgent'] = navigator.userAgent
        } catch (e) {
            utag.DB(e)
        };
        try {
            ud['js_page.jQuery'] = jQuery
        } catch (e) {
            utag.DB(e)
        };
    };
    utag.loader.initdata = function() {
        try {
            utag.data = (typeof utag_data != 'undefined') ? utag_data : {};
            utag.udoname = 'utag_data';
        } catch (e) {
            utag.data = {};
            utag.DB('idf:' + e);
        }
    };
    utag.loader.loadrules = function(_pd, _pc) {
        var d = _pd || utag.data;
        var c = _pc || utag.cond;
        for (var l in utag.loader.GV(c)) {
            switch (l) {
                case '108':
                    try {
                        c[108] |= (d['dom.pathname'].toString().toLowerCase() == '/orders/quick-delivery/'.toLowerCase() && d['dom.domain'] == 'parcel.royalmail.com')
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '109':
                    try {
                        c[109] |= (d['dom.pathname'].toString().toLowerCase() == '/orders/payment-confirmation/'.toLowerCase() && d['dom.domain'] == 'parcel.royalmail.com')
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '110':
                    try {
                        c[110] |= (d['dom.pathname'] == '/' && d['dom.domain'] == 'parcel.royalmail.com')
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '271':
                    try {
                        c[271] |= (d['dom.domain'].toString().toLowerCase() == 'parcel.royalmail.com'.toLowerCase())
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '274':
                    try {
                        c[274] |= (d['dom.pathname'] == '/register/confirmation')
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '275':
                    try {
                        c[275] |= (d['pageApplicationName'].toString().toLowerCase().indexOf('Click & Drop OBA'.toLowerCase()) > -1 && d['pageApplicationStep'].toString().toLowerCase() == 'Payment-Confirmation'.toLowerCase())
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '276':
                    try {
                        c[276] |= (d['dom.pathname'] == '/payments/details/' && d['dom.query_string'].toString().indexOf('paymentsuccess=1') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '279':
                    try {
                        c[279] |= (d['dom.domain'] == 'auth.parcel.royalmail.com' && /^\/register\/(oba|confirmation).*/.test(d['dom.pathname']))
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
            }
        }
    };
    utag.pre = function() {
        utag.loader.initdata();
        utag.pagevars();
        try {
            utag.loader.RD(utag.data)
        } catch (e) {
            utag.DB(e)
        };
        utag.loader.loadrules();
    };
    utag.loader.GET = function() {
        utag.cl = {
            '_all_': 1
        };
        utag.pre();
        utag.handler.extend = [function(a, b) {
            try {
                if (1) {
                    utag.DB('ext475, utag.gdpr.getSelectedCategories(): ' + utag.gdpr.getSelectedCategories());
                    b['consent_selectedCategoriesArray'] = utag.gdpr.getSelectedCategories();
                    b['consent_selectedCategoriesString'] = b['consent_selectedCategoriesArray'].toString();
                    utag.DB('ext465, consent_selectedCategoriesArray: ' + b['consent_selectedCategoriesArray']);
                    utag.DB('ext465, consent_selectedCategoriesString: ' + b['consent_selectedCategoriesString']);
                    b['consent_selectedCategoriesString'].indexOf('personalization'.toLowerCase()) > -1 ? b['consent_functional'] = 1 : b['consent_functional'] = 0;
                    utag.DB('ext465, consent_functional: ' + b['consent_functional']);
                    b['consent_selectedCategoriesString'].indexOf('analytics'.toLowerCase()) > -1 ? b['consent_performance'] = 1 : b['consent_performance'] = 0;
                    utag.DB('ext465, consent_performance: ' + b['consent_performance']);
                    b['consent_selectedCategoriesString'].indexOf('display_ads'.toLowerCase()) > -1 ? b['consent_advertising'] = 1 : b['consent_advertising'] = 0;
                    utag.DB('ext465, consent_advertising: ' + b['consent_advertising']);
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if (typeof b['visitorGUID'] == 'undefined') {
                    try {
                        b['visitorGUID'] = (b.visitorGuid) ? b.visitorGuid : undefined;
                    } catch (e) {}
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            var inherit_function = function(varName) {
                if (!b[varName] && utag.data[varName]) {
                    b[varName] = utag.data[varName];
                }
            }
            inherit_function("pageName");
            inherit_function("pageMenuTree");
            inherit_function("pageBreadCrumb");
            inherit_function("pageApplicationName");
            inherit_function("pageApplicationStep");
            inherit_function("pageTemplate");
            inherit_function("pageLanguage");
            inherit_function("visitorGUID");
            inherit_function("visitorSegment");
            inherit_function("visitor3MPEmail");
            inherit_function("visitor3MPOther");
            inherit_function("visitor3MPPhone");
            inherit_function("visitor3MPPost");
            inherit_function("visitorEmail");
            inherit_function("visitorRMPEmail");
            inherit_function("visitorRMPOther");
            inherit_function("visitorRMPPhone");
            inherit_function("visitorRMPPost");
        }, function(a, b) {
            try {
                if (1) {
                    try {
                        b['pageURL'] = b['dom.domain'] + b["dom.pathname"]
                    } catch (e) {};
                    try {
                        b['pageReferralURL'] = b['dom.referrer'].match(/\/\/(.*)/)[1]
                    } catch (e) {}
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            if (typeof b.productQuantity === 'number') {
                b.productQuantity = "" + b.productQuantity;
            }
            if (typeof b.productPrice === 'number') {
                b.productPrice = "" + b.productPrice;
            }
        }, function(a, b) {
            try {
                if (1) {
                    try {
                        b['pageCampaignID'] = (b['qp.campaignid'] || b['qp.cid'] || b['qp.CID'] || '').toUpperCase()
                    } catch (e) {};
                    try {
                        b['pageInternalCampaignID'] = (b['qp.intcampaignid'] || b['qp.iid'] || '').toUpperCase()
                    } catch (e) {}
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((typeof b['pageApplicationStep'] != 'undefined' && b['pageApplicationStep'].toString().toLowerCase().indexOf('Payment Failed'.toLowerCase()) > -1)) {
                    b['transactionID'] = ''
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((b['dom.domain'] == 'parcel.royalmail.com' && b['dom.pathname'].toString().indexOf('payment-confirmation') > -1)) {
                    try {
                        b['transactionID'] = jQuery("#form1 div.in div table.form tbody tr:eq(0) td:eq(1)").text()
                    } catch (e) {}
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((b['dom.domain'] == 'parcel.royalmail.com' && b['dom.pathname'].toString().indexOf('payment-confirmation') > -1)) {
                    try {
                        b['transactionTotal'] = jQuery("#form1 div.in div table.form tbody tr:eq(1) td:eq(1)").text().substr(1)
                    } catch (e) {};
                    try {
                        b['productPrice'] = [jQuery("#form1 div.in div table.form tbody tr:eq(1) td:eq(1)").text().substr(1)]
                    } catch (e) {}
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((b['dom.domain'] == 'parcel.royalmail.com' && b['dom.pathname'].toString().indexOf('payment-confirmation') > -1)) {
                    try {
                        b['productSKU'] = ["Click & Drop"]
                    } catch (e) {}
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((b['dom.domain'] == 'parcel.royalmail.com' && b['dom.pathname'].toString().indexOf('payment-confirmation') > -1)) {
                    try {
                        b['productCategory'] = ['Online Postage']
                    } catch (e) {}
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((b['dom.domain'] == 'parcel.royalmail.com' && b['dom.pathname'].toString().indexOf('payment-confirmation') > -1)) {
                    try {
                        b['productQuantity'] = [1]
                    } catch (e) {}
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((b['dom.domain'] == 'parcel.royalmail.com' && b['dom.pathname'].toString().indexOf('payment-confirmation') > -1)) {
                    try {
                        b['productName'] = ['Click & Drop']
                    } catch (e) {}
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((b['paymentSuccessful'].toString().toLowerCase() == 'TRUE'.toLowerCase() && typeof b['transactionID'] != 'undefined' && b['transactionID'] != '' && typeof b['transactionTotal'] != 'undefined' && b['transactionTotal'] != '')) {
                    b['pageName'] = 'RM Web App > Click & Drop >Regular >Payment-Confirmation';
                    b['pageApplicationName'] = 'Click & Drop OBA';
                    b['pageApplicationStep'] = 'Payment-Confirmation';
                    b['pageBreadCrumb'] = 'Home|Regular|Payment-Details';
                    b['pageLanguage'] = 'en-gb';
                    b['pageMenuTree'] = 'Click & Drop|Regular|Payment-Details';
                    b['pageNodeID'] = 'RM Web App > Click & Drop >Regular >Payment-Confirmation';
                    b['pageTemplate'] = 'Payment-Confirmation';
                    b['visitorSegment'] = 'Regular (OBA Account)';
                    b['productSKU'] = 'J2GEN1';
                    b['productName'] = 'Click_Drop_J201';
                    b['productQuantity'] = '1';
                    b['productPrice'] = b['transactionTotal']
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if (1) {
                    if (b.productSKU === "J2GEN1") {
                        b.productName = [b.productName];
                        b.productSKU = [b.productSKU];
                        b.productQuantity = [b.productQuantity];
                        b.productCategory = [b.productCategory];
                        b.productPrice = [b.productPrice];
                        b.productSubcategory = [b.productSubcategory];
                    }
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            function toType(obj) {
                return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
            }
            if (toType(b.conversionProduct) === "string" && b.conversionProduct.indexOf("{") > -1 && b.conversionProduct.indexOf("}") > -1) {
                if (window.JSON && typeof JSON.parse === "function") {
                    b.conversionProduct = JSON.parse(b.conversionProduct);
                } else
                if (window.jQuery && typeof jQuery.parseJSON === "function") {
                    b.conversionProduct = jQuery.parseJSON(b.conversionProduct);
                }
            }
            if (toType(b.conversionProduct) === "object") {
                var eCommChecker = function(varName) {
                    if (b["conversionProduct"][varName]) {
                        b[varName] = b["conversionProduct"][varName]
                        if (toType(b[varName]) !== "array") {
                            b[varName] = [b[varName]];
                        }
                    }
                }
                var productKiller = function(varName) {
                    if (b[varName]) {
                        delete b[varName];
                    }
                }
                productKiller('productName');
                productKiller('productSKU');
                productKiller('productQuantity');
                productKiller('productCategory');
                productKiller('productSubcategory');
                eCommChecker('productName');
                eCommChecker('productSKU');
                eCommChecker('productCategory');
                eCommChecker('productQuantity');
                eCommChecker('productSubcategory');
                if (toType(b.conversionProduct.productAttributes) === "object") {
                    function capitalizeFirstLetter(string) {
                        return string.charAt(0).toUpperCase() + string.slice(1);
                    }
                    for (varName in b.conversionProduct.productAttributes) {
                        var newVarName = capitalizeFirstLetter(varName);
                        b["productAttributes" + newVarName] = b.conversionProduct.productAttributes[varName];
                    }
                }
            }
        }, function(a, b) {
            function toType(obj) {
                return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
            }

            function arrayChecker(varName) {
                if (typeof b[varName] !== "undefined" && toType(b[varName]) !== "array") {
                    b[varName] = [b[varName]];
                }
            }
            arrayChecker('productName');
            arrayChecker('productCategory');
            arrayChecker('productSKU');
            arrayChecker('productSubcategory');
            arrayChecker('productPrice');
            arrayChecker('productQuantity');
        }, function(a, b) {
            function toType(obj) {
                return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
            }
            if (toType(b.conversionProduct) === "object") {
                var eCommChecker = function(varName) {
                    if (b["conversionProduct"][varName]) {
                        b[varName] = b["conversionProduct"][varName]
                        if (toType(b[varName]) !== "array") {
                            b[varName] = [b[varName]];
                        }
                    }
                }
                eCommChecker('productSKU');
                eCommChecker('productCategory');
                eCommChecker('productQuantity');
                if (toType(b.conversionProduct.productAttributes) === "object") {
                    function capitalizeFirstLetter(string) {
                        return string.charAt(0).toUpperCase() + string.slice(1);
                    }
                    for (varName in b.conversionProduct.productAttributes) {
                        var newVarName = capitalizeFirstLetter(varName);
                        b["productAttributes" + newVarName] = b.conversionProduct.productAttributes[varName];
                    }
                }
            }
        }, function(a, b) {
            if (b.pageApplicationName == 'My Delivery Preference' && typeof(b.transactionProduct) == 'object' && b.transactionProduct.constructor != Array) {
                b.transactionProduct = [b.transactionProduct];
            }
            if (b.transactionProduct && b.transactionProduct.length > 0) {
                b.productQuantity = [];
                b.productName = [];
                b.productPrice = [];
                b.productSKU = [];
                b.productID = [];
                b.productCategory = [];
                b.productSubcategory = [];
                b.productAttributes = [];
                var i;
                for (i = 0; i < b.transactionProduct.length; i++) {
                    var currentItem = b.transactionProduct[i];
                    b.productQuantity.push(currentItem.productQuantity || "1");
                    b.productName.push(currentItem.productName || "");
                    b.productSKU.push(currentItem.productSKU || currentItem.productName || "");
                    b.productID.push(currentItem.productID || "");
                    b.productPrice.push(currentItem.productPrice || "0");
                    b.productCategory.push(currentItem.productCategory || "");
                    b.productSubcategory.push(currentItem.productSubcategory || "");
                    b.productAttributes.push(currentItem.productAttributes || {});
                }
            } else if (b.pageApplicationName === "Create Online Postage" && !/Online Postage Payment|Online postage shopping basket|Pay by|Thank you/.test(b.pageApplicationStep)) {
                b.productQuantity = [b.productQuantity || "1"];
                b.productName = [b.productName || ""];
                b.productPrice = [b.productPrice || "0"];
                b.productCategory = [b.productCategory || ""];
                b.productSubcategory = [b.productSubcategory || ""];
                b.productAttributes = [b.productAttributes || {}];
                if (b.productName) {
                    b.productSKU = b.productName.slice(0);
                }
            }
        }, function(a, b) {
            try {
                if (typeof b['productSKU'] == 'undefined' || typeof b['productSKU'] != 'undefined' && b['productSKU'] == '') {
                    b['productSKU'] = b['productName']
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b, c, d) {
            b._ccity = '';
            b._ccountry = '';
            b._ccurrency = '';
            b._ccustid = '';
            b._corder = (typeof b['transactionID'] != 'undefined') ? b['transactionID'] : '';
            b._cpromo = '';
            b._cship = '';
            b._cstate = '';
            b._cstore = '';
            b._csubtotal = '';
            b._ctax = '';
            b._ctotal = (typeof b['transactionTotal'] != 'undefined') ? b['transactionTotal'] : '';
            b._ctype = '';
            b._czip = '';
            b._cprod = (typeof b['productSKU'] != 'undefined' && b['productSKU'].length > 0) ? b['productSKU'] : [];
            b._cprodname = (typeof b['productName'] != 'undefined' && b['productName'].length > 0) ? b['productName'] : [];
            b._cbrand = [];
            b._ccat = (typeof b['productCategory'] != 'undefined' && b['productCategory'].length > 0) ? b['productCategory'] : [];
            b._ccat2 = (typeof b['productSubcategory'] != 'undefined' && b['productSubcategory'].length > 0) ? b['productSubcategory'] : [];
            b._cquan = (typeof b['productQuantity'] != 'undefined' && b['productQuantity'].length > 0) ? b['productQuantity'] : [];
            b._cprice = (typeof b['productPrice'] != 'undefined' && b['productPrice'].length > 0) ? b['productPrice'] : [];
            b._csku = [];
            b._cpdisc = [];
            if (b._cprod.length == 0) {
                b._cprod = b._csku.slice()
            };
            if (b._cprodname.length == 0) {
                b._cprodname = b._csku.slice()
            };

            function tf(a) {
                if (a == '' || isNaN(parseFloat(a))) {
                    return a
                } else {
                    return (parseFloat(a)).toFixed(2)
                }
            };
            b._ctotal = tf(b._ctotal);
            b._csubtotal = tf(b._csubtotal);
            b._ctax = tf(b._ctax);
            b._cship = tf(b._cship);
            for (c = 0; c < b._cprice.length; c++) {
                b._cprice[c] = tf(b._cprice[c])
            };
            for (c = 0; c < b._cpdisc.length; c++) {
                b._cpdisc[c] = tf(b._cpdisc[c])
            };
        }, function(a, b) {
            var crumbs = (b.pageBreadCrumb || "").split("|");
            b.pageBreadCrumb0 = crumbs[0] || "";
            b.pageBreadCrumb1 = crumbs[1] || "";
            b.pageBreadCrumb2 = crumbs[2] || "";
            b.pageBreadCrumb3 = crumbs[3] || "";
            b.pageBreadCrumb4 = crumbs[4] || "";
            b.pageBreadCrumb5 = crumbs[5] || "";
            b.pageBreadCrumb6 = crumbs[6] || "";
            var last = 0;
            for (var i = 1; i < 7; i++) {
                if (crumbs[i]) {
                    last = i;
                }
            }
            b.pageBreadCrumbLast1 = "";
            b.pageBreadCrumbLast2 = "";
            if (last > 1) {
                b.pageBreadCrumbLast2 += crumbs[last - 1] + " >";
            }
            b.pageBreadCrumbLast2 += crumbs[last];
            b.pageBreadCrumbLast1 = crumbs[last];
            b.pageBreadCrumbCampaign = b.pageBreadCrumbLast2;
            if (b.pageCampaignID) {
                b.pageBreadCrumbCampaign += " >" + b.pageCampaignID;
            }
        }, function(a, b) {
            try {
                if ((typeof b['visitorGUID'] != 'undefined' && b['visitorGUID'] != '' && typeof b['cp.rm_login_attempt'] != 'undefined')) {
                    try {
                        b['user_logged_in'] = 'event11';
                        document.cookie = "rm_login_attempt=1;path=/;domain=" + utag.cfg.domain + ";expires=Thu, 31 Dec 2009 00:00:00 GMT";
                    } catch (e) {}
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if (b['dom.domain'].toString().toLowerCase() != 'm.royalmail.com'.toLowerCase() || !/^M\.RM/i.test(b['pageName'])) {
                    b['pageType'] = 'Fixed Web'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if (b['dom.domain'].toString().toLowerCase() == 'm.royalmail.com'.toLowerCase() || /^M\.RM/i.test(b['pageName'])) {
                    b['pageType'] = 'Mobile Web'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if (1) {
                    try {
                        b['CurrentDate'] = (today = new Date(), date = today.getDate(), month = today.getMonth() + 1, year = today.getFullYear(), (date < 10 ? "0" + date.toString() : date.toString()) + "-" + (month < 10 ? "0" + month.toString() : month.toString()) + "-" + year)
                    } catch (e) {}
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((typeof b['pageName'] != 'undefined' && b['pageName'] != '' && /^RM Web Application/i.test(b['pageName']))) {
                    try {
                        b['pageName'] = b.pageName.replace("RM Web Application", "RM Web App")
                    } catch (e) {}
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            if (b['pageOverlayType']) {
                var prefix_map = {
                    "business": "RM_BUS ",
                    "corporate": "RM_COR ",
                    "personal": "RM_PER ",
                    "track-your-item": "RM_Web_App ",
                    "find-a-postcode": "RM_Web_App ",
                    "price-finder": "RM_Web_App ",
                    "delivery-and-collection-office-finder": "RM_Web_App ",
                    "rml-shared-track-your-item": "RM_Web_App ",
                    "rml-shared-find-a-postcode": "RM_Web_App ",
                    "rml-shared-price-finder": "RM_Web_App ",
                    "obavideos": "RM_BUS ",
                    "default": "RM "
                };
                var prefix = prefix_map[b['dom.pathname'].split('/')[1]] || prefix_map["default"];
                b['pageName'] = prefix + ">" + b["pageOverlayType"] + " Overlay >" + b["pageOverlayTitle"];
                b['pageBreadCrumb1'] = b["pageOverlayType"] + " Overlay";
                b['pageBreadCrumbLast2'] = b["pageOverlayType"] + " Overlay >" + b['pageBreadCrumbLast2'];
                b['pageBreadCrumbCampaign'] = b["pageOverlayType"] + " Overlay >" + b['pageBreadCrumbCampaign'];
            }
        }, function(a, b) {
            try {
                if ((b['dom.pathname'].toString().toLowerCase() == '/business/node/986/done'.toLowerCase() && b['dom.domain'].toString().indexOf('royalmail.com') > -1)) {
                    b['form_confirmation_check'] = 'true'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if (1) {
                    try {
                        b['siteSearchResults'] = "" + (b.siteSearchResults !== undefined ? b.siteSearchResults : "")
                    } catch (e) {}
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b, c, d) {
            try {
                if ((/^\/business\//i.test(b['dom.pathname']) && !/^RM/.test(b['pageName']))) {
                    c = ['RM ', b['pageName']];
                    b['pageName'] = c.join('')
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                b.ua = window.navigator.userAgent;
            } catch (e) {}
            try {
                b.appCN = window.navigator.appCodeName;
            } catch (e) {}
            try {
                b.appN = window.navigator.appName;
            } catch (e) {}
            try {
                b.appV = window.navigator.appVersion;
            } catch (e) {}
            try {
                b.platform = window.navigator.platform;
            } catch (e) {}
            try {
                b.utagv = window.utag.cfg.v;
            } catch (e) {}
            try {
                b.utagenv = window.utag.cfg.path;
            } catch (e) {}
        }, function(a, b) {
            try {
                if (/^RM Web App/.test(b['pageName'])) {
                    b['sc_channel'] = 'Web Application'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if (typeof b['dom.referrer'] != 'undefined' && b['dom.referrer'] != '') {
                    try {
                        b['domainRefererr'] = utag.data['dom.referrer'].match(/^(http(s|)\:\/\/)((\w+|\.)+)/)[3]
                    } catch (e) {}
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b, c, d, e, f, g) {
            if (1) {
                d = b['domainRefererr'];
                if (typeof d == 'undefined') return;
                c = [{
                    '.sol.es': 'Search Engine|Sol'
                }, {
                    '100.nu': 'Search Engine|100.nu'
                }, {
                    '100hot.com': 'Search Engine|100Hot'
                }, {
                    '123.cl': 'Search Engine|123.cl'
                }, {
                    '1st-spot.net': 'Search Engine|1st-Spot'
                }, {
                    '216.15.192.226': 'Search Engine|Metacrawler - Germany'
                }, {
                    '216.15.219.34': 'Search Engine|Metacrawler - Germany'
                }, {
                    '2look4it.com': 'Search Engine|2Look4It'
                }, {
                    '37.com': 'Search Engine|37.com'
                }, {
                    '3721.com': 'Search Engine|3721.com'
                }, {
                    'aaa.com.au': 'Search Engine|Matilda'
                }, {
                    'Abacho.com': 'Search Engine|Abacho.com'
                }, {
                    'abcsok.no': 'Search Engine|Startsiden'
                }, {
                    'abrexa.co.uk': 'Search Engine|Abrexa UK'
                }, {
                    'acesearch.co.uk': 'Search Engine|AceSearch'
                }, {
                    'ad.searchteria.co.jp': 'Search Engine|Searchteria'
                }, {
                    'adfree4u.com': 'Search Engine|AdmCity'
                }, {
                    'aeiwi.com': 'Search Engine|Aeiwi'
                }, {
                    'afrogoogle.com': 'Search Engine|Afrogoogle'
                }, {
                    'afterpage.com': 'Search Engine|Afterpage'
                }, {
                    'alcanseek.com': 'Search Engine|Alcanseek'
                }, {
                    'aldn.jp': 'Search Engine|aldn.jp'
                }, {
                    'allamericasbest.com': 'Search Engine|All Americas Best'
                }, {
                    'allbusiness.comfind.com': 'Search Engine|ComFind'
                }, {
                    'allsearchengines.co.uk': 'Search Engine|AllSearchEngines'
                }, {
                    'alltheweb.com': 'Search Engine|All The Web'
                }, {
                    'altavista.co': 'Search Engine|AltaVista'
                }, {
                    'altavista.de': 'Search Engine|AltaVista - Germany'
                }, {
                    'ananzi.co.za': 'Search Engine|Ananzi'
                }, {
                    'anzwers.com': 'Search Engine|ANZWERS'
                }, {
                    'aol.co.uk': 'Search Engine|AOL - United Kingdom'
                }, {
                    'aol.com': 'Search Engine|AOL'
                }, {
                    'aol.fr': 'Search Engine|AOL - France'
                }, {
                    'apali.com': 'Search Engine|Apali'
                }, {
                    'aport.ru': 'Search Engine|Aport'
                }, {
                    'ar.search.yahoo.com': 'Search Engine|Yahoo! - Argentina'
                }, {
                    'ar.yahoo.com': 'Search Engine|Yahoo! - Argentina'
                }, {
                    'arianna.libero.it': 'Search Engine|Libero-Ricerca'
                }, {
                    'asia.search.yahoo.com': 'Search Engine|Yahoo! - Asia'
                }, {
                    'asia.yahoo.com': 'Search Engine|Yahoo! - Asia'
                }, {
                    'ask.co.uk': 'Search Engine|Ask Jeeves'
                }, {
                    'ask.com': 'Search Engine|Ask Jeeves'
                }, {
                    'ask.jp': 'Search Engine|Ask - Japan'
                }, {
                    'at.search.yahoo.com': 'Search Engine|Yahoo! - Austria'
                }, {
                    'atlas.cz': 'Search Engine|Atlas.cz'
                }, {
                    'au.anzwers.yahoo.com': 'Search Engine|au.Anzwers'
                }, {
                    'au.search.yahoo.com': 'Search Engine|Yahoo! - Australia'
                }, {
                    'au.yahoo.com': 'Search Engine|Yahoo! - Australia'
                }, {
                    'auok.auone.jp': 'Search Engine|auok.auone.jp'
                }, {
                    'auone.jp': 'Search Engine|Auone.jp'
                }, {
                    'austronaut.at': 'Search Engine|AustroNaut'
                }, {
                    'avg.com': 'Search Engine|Avg'
                }, {
                    'baidu.com': 'Search Engine|Baidu'
                }, {
                    'baidu.com.br': 'Search Engine|Baidu'
                }, {
                    'baidu.jp': 'Search Engine|Baidu Japan'
                }, {
                    'beguide.com': 'Search Engine|BeGuide.com'
                }, {
                    'bellnet.de': 'Search Engine|Bellnet'
                }, {
                    'beocity.com': 'Search Engine|Beocity'
                }, {
                    'berlingske.dk': 'Search Engine|Berlingske'
                }, {
                    'biglobe.ne.jp': 'Search Engine|Biglobe.ne.jp'
                }, {
                    'bing.com': 'Search Engine|Microsoft Bing'
                }, {
                    'blekko.com': 'Search Engine|Blekko'
                }, {
                    'blue.ah-ha.com': 'Search Engine|ah-ha'
                }, {
                    'br.search.yahoo.com': 'Search Engine|Yahoo! - Brazil'
                }, {
                    'br.yahoo.com': 'Search Engine|Yahoo! - Brazil'
                }, {
                    'brujula.net/brazil': 'Search Engine|La Brujula'
                }, {
                    'busca.uol.com.br': 'Search Engine|UOL Busca'
                }, {
                    'buscapique.com': 'Search Engine|BUSCApique'
                }, {
                    'business.com/search': 'Search Engine|Business.com'
                }, {
                    'buyersindex.com': 'Search Engine|BuyersIndex'
                }, {
                    'bytesearch.com': 'Search Engine|ByteSearch'
                }, {
                    'ca.altavista.com': 'Search Engine|AltaVista - Canada'
                }, {
                    'ca.search.yahoo.com': 'Search Engine|Yahoo! - Canada'
                }, {
                    'ca.yahoo.com': 'Search Engine|Yahoo! - Canada'
                }, {
                    'cafesta.com': 'Search Engine|Cafesta'
                }, {
                    'centre.ru': 'Search Engine|Search Centre'
                }, {
                    'centrum.cz': 'Search Engine|Centrum.cz'
                }, {
                    'cf.search.yahoo.com': 'Search Engine|Yahoo! - Canada (French)'
                }, {
                    'ch.altavista.com': 'Search Engine|AltaVista - Switzerland'
                }, {
                    'ch.search.yahoo.com': 'Search Engine|Yahoo! - Switzerland'
                }, {
                    'chinese.yahoo.com': 'Search Engine|Yahoo! - Chinese (US)'
                }, {
                    'chubba.com': 'Search Engine|Chubba'
                }, {
                    'clix.pt': 'Search Engine|Clix'
                }, {
                    'cn.yahoo.com': 'Search Engine|Yahoo! - China'
                }, {
                    'cnet.search.com': 'Search Engine|CNET Search.com'
                }, {
                    'columbus-finder.de': 'Search Engine|Columbus-Finder'
                }, {
                    'comcast.net': 'Search Engine|Comcast'
                }, {
                    'conexcol.com': 'Search Engine|Conexcol'
                }, {
                    'crooz.jp': 'Search Engine|Crooz'
                }, {
                    'ct.search.yahoo.com': 'Search Engine|Yahoo! - Catalan'
                }, {
                    'ct.yahoo.com': 'Search Engine|Yahoo! - Catalan'
                }, {
                    'cuil.com': 'Search Engine|Cuil'
                }, {
                    'cyberbritain.co.uk': 'Search Engine|CyberBritain.com'
                }, {
                    'data.ru': 'Search Engine|Data.ru'
                }, {
                    'daum.net': 'Search Engine|Daum'
                }, {
                    'dazzo.com': 'Search Engine|Dazzo!'
                }, {
                    'de.search.yahoo.com': 'Search Engine|Yahoo! - Germany'
                }, {
                    'de.yahoo.com': 'Search Engine|Yahoo! - Germany'
                }, {
                    'debriefing.com': 'Search Engine|ComFind'
                }, {
                    'dejanews.com': 'Search Engine|DejaNews'
                }, {
                    'deoji.com': 'Search Engine|Deoji'
                }, {
                    'dialindia.com': 'Search Engine|DialIndia'
                }, {
                    'Dictionary.com': 'Search Engine|Dictionary.com'
                }, {
                    'dino-online.de': 'Search Engine|Dino Online'
                }, {
                    'dion.excite.co.jp': 'Search Engine|Dion'
                }, {
                    'dir.bg': 'Search Engine|Dir.bg'
                }, {
                    'dir.m.livedoor.com': 'Search Engine|Livedoor - Mobile'
                }, {
                    'directhit.com': 'Search Engine|DirectHit'
                }, {
                    'directory.verita.com': 'Search Engine|Verita'
                }, {
                    'dk.altavista.com': 'Search Engine|AltaVista - Denmark'
                }, {
                    'dk.kelkoo.com': 'Search Engine|Kelkoo - Denmark'
                }, {
                    'dk.search.yahoo.com': 'Search Engine|Yahoo! - Denmark'
                }, {
                    'dk.yahoo.com': 'Search Engine|Yahoo! - Denmark'
                }, {
                    'dmoz.com': 'Search Engine|Dmoz'
                }, {
                    'dmoz.org': 'Search Engine|Open Directory Project'
                }, {
                    'docomo.ne.jp': 'Search Engine|Docomo.ne.jp'
                }, {
                    'doginfo.com': 'Search Engine|dog.com'
                }, {
                    'dogpile.com': 'Search Engine|Dogpile'
                }, {
                    'dreamwiz.com': 'Search Engine|DreamWiz'
                }, {
                    'duckduckgo.com': 'Search Engine|DuckDuckGo'
                }, {
                    'dxpnet.com': 'Search Engine|Riot'
                }, {
                    'eerstekeuze.nl': 'Search Engine|eerstekeuze.nl'
                }, {
                    'egyptsearch.com': 'Search Engine|EgyptSearch'
                }, {
                    'empas.com': 'Search Engine|Empas'
                }, {
                    'enhance.com': 'Search Engine|Enhance'
                }, {
                    'eniro.dk': 'Search Engine|Eniro'
                }, {
                    'eniro.fi': 'Search Engine|Eniro - Finland'
                }, {
                    'eniro.se': 'Search Engine|Eniro - Sweden'
                }, {
                    'es.altavista.com': 'Search Engine|AltaVista - Spain'
                }, {
                    'es.search.yahoo.com': 'Search Engine|Yahoo! - Spain'
                }, {
                    'es.yahoo.com': 'Search Engine|Yahoo! - Spain'
                }, {
                    'espanol.search.yahoo.com': 'Search Engine|Yahoo! - Spanish (US : Telemundo)'
                }, {
                    'euregio.net': 'Search Engine|Euregio'
                }, {
                    'euroseek.com': 'Search Engine|Euroseek'
                }, {
                    'excite.ca': 'Search Engine|Excite - Canada'
                }, {
                    'excite.ch': 'Search Engine|Excite - Switzerland'
                }, {
                    'excite.co.jp': 'Search Engine|Excite - Japan'
                }, {
                    'excite.com.au': 'Search Engine|Excite - Australia'
                }, {
                    'excite.de': 'Search Engine|Excite - Germany'
                }, {
                    'excite.fr': 'Search Engine|Excite - France'
                }, {
                    'excitesearch.netscape.com': 'Search Engine|Excite - Netscape'
                }, {
                    'exploora.com.br': 'Search Engine|Exploora'
                }, {
                    'ezsch.ezweb.ne.jp': 'Search Engine|Google @ EZweb'
                }, {
                    'fansites.com': 'Search Engine|Fansites.com'
                }, {
                    'fastsearch.com': 'Search Engine|Fast'
                }, {
                    'feynd.com': 'Search Engine|Feynd'
                }, {
                    'fi.search.yahoo.com': 'Search Engine|Yahoo! - Finland'
                }, {
                    'finalsearch.com': 'Search Engine|Final Search'
                }, {
                    'find.wanadoo.nl': 'Search Engine|find.wanadoo.nl'
                }, {
                    'findit-quick.com': 'Search Engine|Findit-Quick'
                }, {
                    'findlink.com': 'Search Engine|FindLink'
                }, {
                    'findwhat.com': 'Search Engine|FindWhat'
                }, {
                    'fireball.de': 'Search Engine|Fireball'
                }, {
                    'fishhoo.com': 'Search Engine|FishHoo!'
                }, {
                    'fleecethenet.co.uk': 'Search Engine|FleeceTheNet'
                }, {
                    'flix.de': 'Search Engine|Flix.de'
                }, {
                    'fqgoogle.com': 'Search Engine|Fqgoogle'
                }, {
                    'fr.altavista.com': 'Search Engine|AltaVista - France'
                }, {
                    'fr.ch.msn.com': 'Search Engine|MSN - Switzerland'
                }, {
                    'fr.search.yahoo.com': 'Search Engine|Yahoo! - France'
                }, {
                    'fr.yahoo.com': 'Search Engine|Yahoo! - France'
                }, {
                    'froute.crooz.jp': 'Search Engine|froute.crooz'
                }, {
                    'fullwebinfo.com': 'Search Engine|FullWebinfo Directory & Search Engine'
                }, {
                    'galaxy.tradewave.com': 'Search Engine|Galaxy'
                }, {
                    'galileu.com': 'Search Engine|Galileu'
                }, {
                    'generalsearch.com': 'Search Engine|General Search'
                }, {
                    'geoboz.com': 'Search Engine|GeoBoz Search'
                }, {
                    'globecrawler.com': 'Search Engine|Globe Crawler'
                }, {
                    'globelists.theglobe.com': 'Search Engine|The Globe Search'
                }, {
                    'go.mail.ru/search': 'Search Engine|Mail.ru'
                }, {
                    'go2net.com': 'Search Engine|Go2net Metacrawler'
                }, {
                    'gobutton.com': 'Search Engine|GoButton'
                }, {
                    'godado.it': 'Search Engine|Godado'
                }, {
                    'goeureka.com.au': 'Search Engine|GoEureka'
                }, {
                    'gohip.com': 'Search Engine|GoHip'
                }, {
                    'goo.ne.jp': 'Search Engine|Goo (Jp.)'
                }, {
                    'google.ae': 'Search Engine|Google - United Arab Emirates'
                }, {
                    'google.am': 'Search Engine|Google - Armenia'
                }, {
                    'google.as': 'Search Engine|Google - American Samoa'
                }, {
                    'google.at': 'Search Engine|Google - Austria'
                }, {
                    'google.az': 'Search Engine|Google - Azerbaijan'
                }, {
                    'google.ba': 'Search Engine|Google - Bosnia-Hercegovina'
                }, {
                    'google.be': 'Search Engine|Google - Belgium'
                }, {
                    'google.bg': 'Search Engine|Google - Bulgaria'
                }, {
                    'google.bi': 'Search Engine|Google - Burundi'
                }, {
                    'google.bj': 'Search Engine|Google - Benin'
                }, {
                    'google.bs': 'Search Engine|Google - The Bahamas'
                }, {
                    'google.by': 'Search Engine|Google - Belarus'
                }, {
                    'google.ca': 'Search Engine|Google - Canada'
                }, {
                    'google.cat': 'Search Engine|Google - Catalan'
                }, {
                    'google.cd': 'Search Engine|Google - Rep. Dem. du Congo'
                }, {
                    'google.cg': 'Search Engine|Google - Rep. du Congo'
                }, {
                    'google.ch': 'Search Engine|Google - Switzerland'
                }, {
                    'google.ci': 'Search Engine|Google - Cote DIvoire'
                }, {
                    'google.cl': 'Search Engine|Google - Chile'
                }, {
                    'google.cm': 'Search Engine|Google - Cameroun'
                }, {
                    'google.cn': 'Search Engine|Google - China'
                }, {
                    'google.cn/search?client=aff-sina': 'Search Engine|Sina - China'
                }, {
                    'google.co': 'Search Engine|Google'
                }, {
                    'google.co.ao': 'Search Engine|Google - Angola'
                }, {
                    'google.co.bw': 'Search Engine|Google - Botswana'
                }, {
                    'google.co.ck': 'Search Engine|Google - Cook Islands'
                }, {
                    'google.co.cr': 'Search Engine|Google - Costa Rica'
                }, {
                    'google.co.ek': 'Search Engine|Google.co.ek'
                }, {
                    'google.co.id': 'Search Engine|Google - Indonesia'
                }, {
                    'google.co.il': 'Search Engine|Google - Israel'
                }, {
                    'google.co.in': 'Search Engine|Google - India'
                }, {
                    'google.co.jp': 'Search Engine|Google - Japan'
                }, {
                    'google.co.ke': 'Search Engine|Google - Kenya'
                }, {
                    'google.co.kr': 'Search Engine|Google - Korea'
                }, {
                    'google.co.kw': 'Search Engine|Google - Kuwait'
                }, {
                    'google.co.ls': 'Search Engine|Google - Lesotho'
                }, {
                    'google.co.ma': 'Search Engine|Google - Morocco'
                }, {
                    'google.co.mz': 'Search Engine|Google - Mozambique'
                }, {
                    'google.co.nz': 'Search Engine|Google - New Zealand'
                }, {
                    'google.co.th': 'Search Engine|Google - Thailand'
                }, {
                    'google.co.tz': 'Search Engine|Google - Tanzania'
                }, {
                    'google.co.ug': 'Search Engine|Google - Uganda'
                }, {
                    'google.co.uk': 'Search Engine|Google - United Kingdom'
                }, {
                    'google.co.uz': 'Search Engine|Google - Uzbekiston'
                }, {
                    'google.co.ve': 'Search Engine|Google - Venezuela'
                }, {
                    'google.co.vi': 'Search Engine|Google - Virgin Islands'
                }, {
                    'google.co.yu': 'Search Engine|Google - Yugoslavia'
                }, {
                    'google.co.za': 'Search Engine|Google - South Africa'
                }, {
                    'google.co.zm': 'Search Engine|Google - Zambia'
                }, {
                    'google.co.zw': 'Search Engine|Google - Zimbabwe'
                }, {
                    'google.com': 'Search Engine|Google'
                }, {
                    'google.com.af': 'Search Engine|Google - Afghanistan'
                }, {
                    'google.com.ag': 'Search Engine|Google - Antigua and Barbuda'
                }, {
                    'google.com.ai': 'Search Engine|Google - Anguilla'
                }, {
                    'google.com.ar': 'Search Engine|Google - Argentina'
                }, {
                    'google.com.au': 'Search Engine|Google - Australia'
                }, {
                    'google.com.bd': 'Search Engine|Google - Bangladesh'
                }, {
                    'google.com.bh': 'Search Engine|Google - Bahrain'
                }, {
                    'google.com.bn': 'Search Engine|Google - Brunei'
                }, {
                    'google.com.bo': 'Search Engine|Google - Bolivia'
                }, {
                    'google.com.br': 'Search Engine|Google - Brasil'
                }, {
                    'google.com.by': 'Search Engine|Google - Belarus'
                }, {
                    'google.com.bz': 'Search Engine|Google - Belize'
                }, {
                    'google.com.co': 'Search Engine|Google - Colombia'
                }, {
                    'google.com.cu': 'Search Engine|Google - Cuba'
                }, {
                    'google.com.cy': 'Search Engine|Google - Cyprus'
                }, {
                    'google.com.do': 'Search Engine|Google - Dominican Republic'
                }, {
                    'google.com.ec': 'Search Engine|Google - Ecuador'
                }, {
                    'google.com.eg': 'Search Engine|Google - Egypt'
                }, {
                    'google.com.et': 'Search Engine|Google - Ethiopia'
                }, {
                    'google.com.fj': 'Search Engine|Google - Fiji'
                }, {
                    'google.com.gh': 'Search Engine|Google - Ghana'
                }, {
                    'google.com.gi': 'Search Engine|Google - Isle of Gibraltar'
                }, {
                    'google.com.gt': 'Search Engine|Google - Guatemala'
                }, {
                    'google.com.hk': 'Search Engine|Google - Hong Kong'
                }, {
                    'google.com.iq': 'Search Engine|Google - Iraq'
                }, {
                    'google.com.jm': 'Search Engine|Google - Jamaica'
                }, {
                    'google.com.kh': 'Search Engine|Google - Cambodia'
                }, {
                    'google.com.kw': 'Search Engine|Google - Kuwait'
                }, {
                    'google.com.lb': 'Search Engine|Google - Lebanon'
                }, {
                    'google.com.ly': 'Search Engine|Google - Libya'
                }, {
                    'google.com.mm': 'Search Engine|Google - Myanmar'
                }, {
                    'google.com.mt': 'Search Engine|Google - Malta'
                }, {
                    'google.com.mx': 'Search Engine|Google - Mexico'
                }, {
                    'google.com.my': 'Search Engine|Google - Malaysia'
                }, {
                    'google.com.na': 'Search Engine|Google - Namibia'
                }, {
                    'google.com.nf': 'Search Engine|Google - Norfolk Island'
                }, {
                    'google.com.ng': 'Search Engine|Google - Nigeria'
                }, {
                    'google.com.ni': 'Search Engine|Google - Nicaragua'
                }, {
                    'google.com.np': 'Search Engine|Google - Nepal'
                }, {
                    'google.com.om': 'Search Engine|Google - Oman'
                }, {
                    'google.com.pa': 'Search Engine|Google - Panama'
                }, {
                    'google.com.pe': 'Search Engine|Google - Peru'
                }, {
                    'google.com.pg': 'Search Engine|Google - Papua New Guinea'
                }, {
                    'google.com.ph': 'Search Engine|Google - Philippines'
                }, {
                    'google.com.pk': 'Search Engine|Google - Pakistan'
                }, {
                    'google.com.pr': 'Search Engine|Google - Puerto Rico'
                }, {
                    'google.com.py': 'Search Engine|Google - Paraguay'
                }, {
                    'google.com.qa': 'Search Engine|Google - Qatar'
                }, {
                    'google.com.sa': 'Search Engine|Google - Saudi Arabia'
                }, {
                    'google.com.sb': 'Search Engine|Google - Solomon Islands'
                }, {
                    'google.com.sg': 'Search Engine|Google - Singapore'
                }, {
                    'google.com.sl': 'Search Engine|Google - Sierra Leone'
                }, {
                    'google.com.sv': 'Search Engine|Google - El Salvador'
                }, {
                    'google.com.tj': 'Search Engine|Google - Tajikistan'
                }, {
                    'google.com.tn': 'Search Engine|Google - Tunisia'
                }, {
                    'google.com.tr': 'Search Engine|Google - Turkey'
                }, {
                    'google.com.tw': 'Search Engine|Google - Taiwan'
                }, {
                    'google.com.ua': 'Search Engine|Google - Ukraine'
                }, {
                    'google.com.uy': 'Search Engine|Google - Uruguay'
                }, {
                    'google.com.vc': 'Search Engine|Google - Saint Vincent and the Grenadine'
                }, {
                    'google.com.vn': 'Search Engine|Google - Viet Nam'
                }, {
                    'google.cz': 'Search Engine|Google - Czech Republic'
                }, {
                    'google.de': 'Search Engine|Google - Germany'
                }, {
                    'google.dj': 'Search Engine|Google - Djibouti'
                }, {
                    'google.dk': 'Search Engine|Google - Denmark'
                }, {
                    'google.dm': 'Search Engine|Google - Dominica'
                }, {
                    'google.dz': 'Search Engine|Google - Algerie'
                }, {
                    'google.ee': 'Search Engine|Google - Estonia'
                }, {
                    'google.es': 'Search Engine|Google - Spain'
                }, {
                    'google.fi': 'Search Engine|Google - Finland'
                }, {
                    'google.fm': 'Search Engine|Google - Micronesia'
                }, {
                    'google.fr': 'Search Engine|Google - France'
                }, {
                    'google.ge': 'Search Engine|Google - Repulic of Georgia'
                }, {
                    'google.gg': 'Search Engine|Google - Guernsey'
                }, {
                    'google.gl': 'Search Engine|Google - Greenland'
                }, {
                    'google.gm': 'Search Engine|Google - The Gambia'
                }, {
                    'google.gp': 'Search Engine|Google - Guadeloupe'
                }, {
                    'google.gr': 'Search Engine|Google - Greece'
                }, {
                    'google.gy': 'Search Engine|Google - Guyana'
                }, {
                    'google.hn': 'Search Engine|Google - Honduras'
                }, {
                    'google.hr': 'Search Engine|Google - Croatia'
                }, {
                    'google.ht': 'Search Engine|Google - Haiti'
                }, {
                    'google.hu': 'Search Engine|Google - Hungary'
                }, {
                    'google.ie': 'Search Engine|Google - Ireland'
                }, {
                    'google.im': 'Search Engine|Google - Isle of Man'
                }, {
                    'google.iq': 'Search Engine|Google - Iraq'
                }, {
                    'google.is': 'Search Engine|Google - Island'
                }, {
                    'google.it': 'Search Engine|Google - Italy'
                }, {
                    'google.je': 'Search Engine|Google - Jersey'
                }, {
                    'google.jo': 'Search Engine|Google - Jordan'
                }, {
                    'google.kg': 'Search Engine|Google - Kyrgyzstan'
                }, {
                    'google.ki': 'Search Engine|Google - Kiribati'
                }, {
                    'google.kz': 'Search Engine|Google - Kazakhstan'
                }, {
                    'google.la': 'Search Engine|Google - Laos'
                }, {
                    'google.li': 'Search Engine|Google - Liechtenstein'
                }, {
                    'google.lk': 'Search Engine|Google - Sri Lanka'
                }, {
                    'google.lt': 'Search Engine|Google - Lithuania'
                }, {
                    'google.lu': 'Search Engine|Google - Luxembourg'
                }, {
                    'google.lv': 'Search Engine|Google - Latvia'
                }, {
                    'google.md': 'Search Engine|Google - Moldova'
                }, {
                    'google.me': 'Search Engine|Google - Crna Gora'
                }, {
                    'google.mg': 'Search Engine|Google - Madagasikara'
                }, {
                    'google.ml': 'Search Engine|Google - Mali'
                }, {
                    'google.mn': 'Search Engine|Google - Mongolia'
                }, {
                    'google.ms': 'Search Engine|Google - Montserrat'
                }, {
                    'google.mu': 'Search Engine|Google - Mauritius'
                }, {
                    'google.mv': 'Search Engine|Google - Maldives'
                }, {
                    'google.mw': 'Search Engine|Google - Malawi'
                }, {
                    'google.nl': 'Search Engine|Google - Netherlands'
                }, {
                    'google.no': 'Search Engine|Google - Norway'
                }, {
                    'google.nr': 'Search Engine|Google - Nauru'
                }, {
                    'google.nu': 'Search Engine|Google - Niue'
                }, {
                    'google.pl': 'Search Engine|Google - Poland'
                }, {
                    'google.pn': 'Search Engine|Google - Pitcairn Islands'
                }, {
                    'google.ps': 'Search Engine|Google - Palestinian territories'
                }, {
                    'google.pt': 'Search Engine|Google - Portugal'
                }, {
                    'google.ro': 'Search Engine|Google - Romania'
                }, {
                    'google.rs': 'Search Engine|Google - Serbia'
                }, {
                    'google.ru': 'Search Engine|Google - Russia'
                }, {
                    'google.rw': 'Search Engine|Google - Rwanda'
                }, {
                    'google.sc': 'Search Engine|Google - Seychelles'
                }, {
                    'google.se': 'Search Engine|Google - Sweden'
                }, {
                    'google.sh': 'Search Engine|Google - Saint Helena'
                }, {
                    'google.si': 'Search Engine|Google - Slovenia'
                }, {
                    'google.sina.com': 'Search Engine|Sina - North America'
                }, {
                    'google.sina.com.hk': 'Search Engine|Sina - Hong Kong'
                }, {
                    'google.sina.com.tw': 'Search Engine|Sina - Taiwan'
                }, {
                    'google.sk': 'Search Engine|Google - Slovakia'
                }, {
                    'google.sm': 'Search Engine|Google - San Marino'
                }, {
                    'google.sn': 'Search Engine|Google - Senegal'
                }, {
                    'google.st': 'Search Engine|Google - Sao Tome and Principe'
                }, {
                    'google.startsiden.no': 'Search Engine|Google - Norway (Startsiden)'
                }, {
                    'google.tg': 'Search Engine|Google - Togo'
                }, {
                    'google.tk': 'Search Engine|Google - Tokelau'
                }, {
                    'google.tm': 'Search Engine|Google - Turkmenistan'
                }, {
                    'google.tn': 'Search Engine|Google - Tunisia'
                }, {
                    'google.to': 'Search Engine|Google - Tonga'
                }, {
                    'google.tp': 'Search Engine|Google - Timor-Leste'
                }, {
                    'google.tt': 'Search Engine|Google - Trinidad and Tobago'
                }, {
                    'google.vg': 'Search Engine|Google - British Virgin Islands'
                }, {
                    'google.vu': 'Search Engine|Google - Vanuatu'
                }, {
                    'google.ws': 'Search Engine|Google - Samoa'
                }, {
                    'googleadservices.com': 'Search Engine|googleadservices.com'
                }, {
                    'googlesyndication.com': 'Search Engine|Google'
                }, {
                    'grippo.com.ar': 'Search Engine|Grippo'
                }, {
                    'haosou.com': 'Search Engine|Haosou'
                }, {
                    'help-site.com': 'Search Engine|Help-Site'
                }, {
                    'hermia.com': 'Search Engine|CyberBritain.com'
                }, {
                    'heureka.hu': 'Search Engine|Heureka'
                }, {
                    'highway61.com': 'Search Engine|Highway61'
                }, {
                    'hispavista.com': 'Search Engine|HispaVista'
                }, {
                    'hk.search.yahoo.com': 'Search Engine|Yahoo! - Hong Kong'
                }, {
                    'hk.yahoo.com': 'Search Engine|Yahoo! - Hong Kong'
                }, {
                    'holms.ru': 'Search Engine|Holms.ru'
                }, {
                    'home.snap.com': 'Search Engine|Snap'
                }, {
                    'hotbot.co.uk': 'Search Engine|Hotbot - United Kingdom'
                }, {
                    'hotbot.lycos.com': 'Search Engine|HotBot'
                }, {
                    'hotindex.com': 'Search Engine|HotIndex'
                }, {
                    'hotlaunch.com': 'Search Engine|HotLaunch.com'
                }, {
                    'huifa.cl': 'Search Engine|Huifa'
                }, {
                    'icqit.com': 'Search Engine|icq'
                }, {
                    'id.search.yahoo.com': 'Search Engine|Yahoo! - Indonesia'
                }, {
                    'id.yahoo.com': 'Search Engine|Yahoo! - Indonesia'
                }, {
                    'idealist.com': 'Search Engine|idealist.com'
                }, {
                    'ilse.nl': 'Search Engine|Ilse'
                }, {
                    'in.search.yahoo.com': 'Search Engine|Yahoo! - India'
                }, {
                    'in.yahoo.com': 'Search Engine|Yahoo! - India'
                }, {
                    'infinisearch.net': 'Search Engine|InfiniSearch'
                }, {
                    'infoseek.co.jp': 'Search Engine|Infoseek - Japan'
                }, {
                    'infoseek.co.uk': 'Search Engine|InfoSeek - UK'
                }, {
                    'infoseek.com': 'Search Engine|InfoSeek'
                }, {
                    'infoseek.de': 'Search Engine|InfoSeek - Germany'
                }, {
                    'infoseek.go.com': 'Search Engine|InfoSeek'
                }, {
                    'infospace.com': 'Search Engine|InfoSpace'
                }, {
                    'infotiger.com': 'Search Engine|InfoTiger'
                }, {
                    'interavisos.hypermart.net': 'Search Engine|Proyecto Celeste'
                }, {
                    'internet-times.com': 'Search Engine|Internet Times'
                }, {
                    'internettrash.com': 'Search Engine|InternetTrash'
                }, {
                    'intra.whatUseek.com': 'Search Engine|WhatUSeek'
                }, {
                    'ioport.com': 'Search Engine|IOport'
                }, {
                    'istmania.com/belice': 'Search Engine|Istmania'
                }, {
                    'i-stores.com': 'Search Engine|i-Stores'
                }, {
                    'it.altavista.com': 'Search Engine|AltaVista - Italy'
                }, {
                    'it.search.yahoo.com': 'Search Engine|Yahoo! - Italy'
                }, {
                    'it.yahoo.com': 'Search Engine|Yahoo! - Italy'
                }, {
                    'item.froute.jp': 'Search Engine|Froute'
                }, {
                    'iwon.com': 'Search Engine|iWon'
                }, {
                    'ixquick.com': 'Search Engine|ixquick'
                }, {
                    'jayde.com': 'Search Engine|Jayde'
                }, {
                    'jopinet.com': 'Search Engine|Jopinet'
                }, {
                    'jumpcity.com': 'Search Engine|Jump City'
                }, {
                    'kakaku.com': 'Search Engine|Kakaku'
                }, {
                    'kanoodle.com': 'Search Engine|Kanoodle.com'
                }, {
                    'kazazz.com': 'Search Engine|KaZaZZ'
                }, {
                    'kelkoo.se': 'Search Engine|Kelkoo - Sweden'
                }, {
                    'khoj.com': 'Search Engine|Khoj'
                }, {
                    'kids.yahoo.com': 'Search Engine|Yahoo! - Kids'
                }, {
                    'kids.yahoo.com/search': 'Search Engine|Yahoo! - Kids'
                }, {
                    'kolumbus.fi': 'Search Engine|Kolumbus'
                }, {
                    'kr.search.yahoo.com': 'Search Engine|Yahoo! - Korea'
                }, {
                    'kr.yahoo.com': 'Search Engine|Yahoo! - Korea'
                }, {
                    'kvasir.no': 'Search Engine|Kvasir'
                }, {
                    'libero.it': 'Search Engine|Libero'
                }, {
                    'limeysearch.co.uk': 'Search Engine|Limey Search'
                }, {
                    'linkcenter.com': 'Search Engine|Link Center'
                }, {
                    'linkcentre': 'Search Engine|Linkcentre'
                }, {
                    'linkcentre.com': 'Search Engine|Linkcentre'
                }, {
                    'linkmaster.com': 'Search Engine|Link Master'
                }, {
                    'linkopedia.com': 'Search Engine|Linkopedia'
                }, {
                    'ListOfLists.com': 'Search Engine|ListOfLists'
                }, {
                    'locate.com': 'Search Engine|Locate'
                }, {
                    'lokace.com': 'Search Engine|Lokace'
                }, {
                    'lookabout.stormpages.com': 'Search Engine|AussieSeek'
                }, {
                    'looksmart.co.uk': 'Search Engine|LookSmart'
                }, {
                    'looksmart.com': 'Search Engine|LookSmart'
                }, {
                    'loquax.co.uk': 'Search Engine|Loquax Open Directory'
                }, {
                    'luxpoint.lu': 'Search Engine|LuXPoint'
                }, {
                    'lycol.de': 'Search Engine|Lycos - Germany'
                }, {
                    'lycol.nl': 'Search Engine|Lycos - Netherlands'
                }, {
                    'lycos.co.uk': 'Search Engine|Lycos - United Kingdom'
                }, {
                    'lycos.com': 'Search Engine|Lycos'
                }, {
                    'lycos.es': 'Search Engine|Lycos - Spain'
                }, {
                    'lycos.fr': 'Search Engine|Lycos - France'
                }, {
                    'lycos.it': 'Search Engine|Lycos - Italy'
                }, {
                    'm.baidu.com': 'Search Engine|m.baidu.com'
                }, {
                    'm.baidu.jp': 'Search Engine|m.baidu'
                }, {
                    'm.bing.com': 'Search Engine|m.bing'
                }, {
                    'm.live.com': 'Search Engine|MSN LiveSearch Mobile'
                }, {
                    'm.mixi.jp': 'Search Engine|m.mixi.jp'
                }, {
                    'magellan': 'Search Engine|Magellan'
                }, {
                    'mail.ru/search': 'Search Engine|Mail.ru'
                }, {
                    'malaysia.search.yahoo.com': 'Search Engine|Yahoo! - Malaysia'
                }, {
                    'malaysia.yahoo.com': 'Search Engine|Yahoo! - Malaysia'
                }, {
                    'mamma.com': 'Search Engine|Mamma'
                }, {
                    'marchsearch.com': 'Search Engine|MarchSearch'
                }, {
                    'matkurja.com/slo': 'Search Engine|MatKurja'
                }, {
                    'maxban.com': 'Search Engine|MaxBan'
                }, {
                    'mbkn.jp': 'Search Engine|mbkn.jp'
                }, {
                    'mcfind.com': 'Search Engine|McFind.com'
                }, {
                    'metacrawler.com': 'Search Engine|Metacrawler'
                }, {
                    'metadog.com': 'Search Engine|MetaDog.com'
                }, {
                    'metaeureka.com': 'Search Engine|metaEureka'
                }, {
                    'metagopher.com': 'Search Engine|MetaGopher'
                }, {
                    'metaiq': 'Search Engine|MetaIQ.com'
                }, {
                    'metakereso.com': 'Search Engine|Metakereso'
                }, {
                    'metapro.com': 'Search Engine|MetaDog.com'
                }, {
                    'mirago.co.uk': 'Search Engine|Mirago'
                }, {
                    'mobile.yahoo.co.jp': 'Search Engine|YahooJapan - Mobile'
                }, {
                    'monstercrawler.com': 'Search Engine|Monster Crawler'
                }, {
                    'msn.co.nz': 'Search Engine|MSN - New Zealand'
                }, {
                    'msn.co.uk': 'Search Engine|MSN - United Kingdom'
                }, {
                    'msn.com': 'Search Engine|MSN'
                }, {
                    'msxml.excite.com': 'Search Engine|Excite'
                }, {
                    'multimeta.com': 'Search Engine|MultiMeta'
                }, {
                    'mx.search.yahoo.com': 'Search Engine|Yahoo! - Mexico'
                }, {
                    'mx.yahoo.com': 'Search Engine|Yahoo! - Mexico'
                }, {
                    'mygo.com': 'Search Engine|myGO'
                }, {
                    'myway.com': 'Search Engine|MyWay.com'
                }, {
                    'mywebsearch.com': 'Search Engine|Mywebsearch'
                }, {
                    'nate.com': 'Search Engine|Nate.com'
                }, {
                    'naver.com': 'Search Engine|Naver'
                }, {
                    'nbci.com': 'Search Engine|NBCi'
                }, {
                    'net1000.net': 'Search Engine|Net 1000.net'
                }, {
                    'net1000_net.search.everyone.net': 'Search Engine|Net 1000.net'
                }, {
                    'netbreach.com': 'Search Engine|NetBreach'
                }, {
                    'net-fetch.com': 'Search Engine|Net-Fetch.com Web Directory'
                }, {
                    'netfinderusa.com': 'Search Engine|NetFinder USA'
                }, {
                    'netgoat.com': 'Search Engine|NetGoat'
                }, {
                    'netscape.com': 'Search Engine|Netscape Search'
                }, {
                    'netsearch.org': 'Search Engine|NetSearch'
                }, {
                    'netsearchvoyager.com': 'Search Engine|NetSearch'
                }, {
                    'netsprint.pl': 'Search Engine|NetSprint'
                }, {
                    'nexet.net': 'Search Engine|Nexet Open Directory'
                }, {
                    'nifty.com': 'Search Engine|Nifty'
                }, {
                    'nl.altavista.com': 'Search Engine|AltaVista - Netherlands'
                }, {
                    'nl.excite.com': 'Search Engine|Excite - Dutch'
                }, {
                    'nl.search.yahoo.com': 'Search Engine|Yahoo! - Netherlands'
                }, {
                    'nl.yahoo.com': 'Search Engine|Yahoo! - Netherlands'
                }, {
                    'no.altavista.com': 'Search Engine|AltaVista - Norway'
                }, {
                    'no.kelkoo.com': 'Search Engine|Kelkoo - Norway'
                }, {
                    'no.search.yahoo.com': 'Search Engine|Yahoo! - Norway'
                }, {
                    'no.yahoo.com': 'Search Engine|Yahoo! - Norway'
                }, {
                    'nomade.fr': 'Search Engine|Nomade'
                }, {
                    'northernlight.com': 'Search Engine|Northern Light'
                }, {
                    'ntsearch.com': 'Search Engine|NTsearch'
                }, {
                    'nz.search.yahoo.com': 'Search Engine|Yahoo! - New Zealand'
                }, {
                    'nz.yahoo.com': 'Search Engine|Yahoo! - New Zealand'
                }, {
                    'odn.excite.co.jp': 'Search Engine|ODN'
                }, {
                    'officialsearch.com': 'Search Engine|Official Search'
                }, {
                    'ohnew.co.jp': 'Search Engine|Oh! New? Mobile'
                }, {
                    'oingo.com': 'Search Engine|Oingo'
                }, {
                    'oneseek.com': 'Search Engine|oneSeek.com'
                }, {
                    'onwashington.com': 'Search Engine|onwashington.com'
                }, {
                    'orbit.net': 'Search Engine|Orbit.net'
                }, {
                    'overture.com': 'Search Engine|Overture'
                }, {
                    'ozu.es': 'Search Engine|Ozu'
                }, {
                    'pagemontreal.com': 'Search Engine|toutMontreal'
                }, {
                    'pandia.com': 'Search Engine|Pandia Plus'
                }, {
                    'passagen.se': 'Search Engine|Passagen'
                }, {
                    'ph.search.yahoo.com': 'Search Engine|Yahoo! - Philippines'
                }, {
                    'ph.yahoo.com': 'Search Engine|Yahoo! - Philippines'
                }, {
                    'pi.net/zoeken': 'Search Engine|Planet - Zoekpagina'
                }, {
                    'pngnetsearch.com': 'Search Engine|Papua New Guinea Search'
                }, {
                    'point2.com': 'Search Engine|Point2'
                }, {
                    'polishworld.com': 'Search Engine|PolishWorld'
                }, {
                    'powersearch.com': 'Search Engine|Power Search'
                }, {
                    'PremierStores.com': 'Search Engine|Premier Stores Directory'
                }, {
                    'profusion.com': 'Search Engine|Profusion'
                }, {
                    'p-search.virtualave.net': 'Search Engine|Andromeda Search'
                }, {
                    'qc.yahoo.com': 'Search Engine|Yahoo! - Canada (French)'
                }, {
                    'qihoo.com': 'Search Engine|Qihoo'
                }, {
                    'qksearch.com': 'Search Engine|QkSearch'
                }, {
                    'quepasa.com': 'Search Engine|Quepasa'
                }, {
                    'questfinder.com': 'Search Engine|QuestFinder'
                }, {
                    'questfinder.net': 'Search Engine|QuestFinder'
                }, {
                    'rageworld.com': 'Search Engine|RageWorld.com'
                }, {
                    'rakuten.co.jp': 'Search Engine|Rakuten.co.jp'
                }, {
                    'rambler.ru': 'Search Engine|Rambler'
                }, {
                    'rambler.ru/search': 'Search Engine|Rambler'
                }, {
                    'rambler.ru/srch': 'Search Engine|Rambler'
                }, {
                    'rank.stars.ru': 'Search Engine|IT InfoArt Stars'
                }, {
                    'recherche.aol.fr': 'Search Engine|AOL - France'
                }, {
                    'reference.com': 'Search Engine|Reference.com'
                }, {
                    'rex-search.com': 'Search Engine|Rex Search'
                }, {
                    'rocketlinks.com': 'Search Engine|RocketLinks.com'
                }, {
                    'rol.ro': 'Search Engine|ROL.ro'
                }, {
                    'ru.search.yahoo.com': 'Search Engine|Yahoo! - Russia'
                }, {
                    'ru.yahoo.com': 'Search Engine|Yahoo! - Russia'
                }, {
                    's.luna.tv': 'Search Engine|Lunascape'
                }, {
                    's.mbga.jp': 'Search Engine|Mobagee Search'
                }, {
                    'sapo.pt': 'Search Engine|Sapo'
                }, {
                    'savvy.search.com': 'Search Engine|SavvySearch'
                }, {
                    'savvysearch.com': 'Search Engine|SavvySearch'
                }, {
                    'scopie.com': 'Search Engine|Scopie'
                }, {
                    'scour.com': 'Search Engine|Scour'
                }, {
                    'scrubtheweb.com': 'Search Engine|Scrub the Web'
                }, {
                    'se.altavista.com': 'Search Engine|AltaVista - Sweden'
                }, {
                    'se.pricerunner.com': 'Search Engine|Pricerunner.se'
                }, {
                    'se.search.yahoo.com': 'Search Engine|Yahoo! - Sweden'
                }, {
                    'se.yahoo.com': 'Search Engine|Yahoo! - Sweden'
                }, {
                    'search.about.com': 'Search Engine|About.com'
                }, {
                    'search.aol.ca': 'Search Engine|AOL.com Search'
                }, {
                    'search.aol.co.uk': 'Search Engine|AOL - United Kingdom'
                }, {
                    'search.aol.com': 'Search Engine|AOL.com Search'
                }, {
                    'search.auone.jp': 'Search Engine|au'
                }, {
                    'search.avg.com': 'Search Engine|AVG Secure Search'
                }, {
                    'search.azby.fmworld.net': 'Search Engine|FMWORLD'
                }, {
                    'search.biglobe.ne.jp': 'Search Engine|Biglobe'
                }, {
                    'search.bluewin.ch': 'Search Engine|Blue Window'
                }, {
                    'search.bluewindow.ch': 'Search Engine|Blue Window'
                }, {
                    'search.ch': 'Search Engine|Search.ch'
                }, {
                    'search.cn.yahoo.com': 'Search Engine|Yahoo! - China'
                }, {
                    'search.com': 'Search Engine|7search.com'
                }, {
                    'search.comcast.net': 'Search Engine|search.comcast.net'
                }, {
                    'search.curryguide.com': 'Search Engine|CurryGuide'
                }, {
                    'search.daum.net': 'Search Engine|Daum'
                }, {
                    'search.dmoz.com': 'Search Engine|Dmoz'
                }, {
                    'search.dreamwiz.com': 'Search Engine|DreamWiz'
                }, {
                    'search.earthlink.net': 'Search Engine|Earthlink Search'
                }, {
                    'search.empas.com': 'Search Engine|Empas'
                }, {
                    'search.excite.ca': 'Search Engine|Excite Canada'
                }, {
                    'search.fenrir-inc.com': 'Search Engine|Sleipnir'
                }, {
                    'search.fr.msn.ca': 'Search Engine|MSN - Canada'
                }, {
                    'search.fresheye.com': 'Search Engine|FreshEye'
                }, {
                    'search.froute.jp': 'Search Engine|Froute'
                }, {
                    'search.goo.ne.jp/yomiuri': 'Search Engine|YOL'
                }, {
                    'search.icq.com': 'Search Engine|icq'
                }, {
                    'search.ilse.nl': 'Search Engine|ilse.nl'
                }, {
                    'search.infomak.com': 'Search Engine|InfoMak'
                }, {
                    'search.irl.com': 'Search Engine|Search.IRL.com'
                }, {
                    'search.jword.jp': 'Search Engine|JWord'
                }, {
                    'search.kbg.jp': 'Search Engine|Biglobe'
                }, {
                    'search.latam.msn.com': 'Search Engine|MSN - Latin America'
                }, {
                    'search.live.com': 'Search Engine|Live.com'
                }, {
                    'search.livedoor.com': 'Search Engine|Livedoor.com'
                }, {
                    'search.lycos.com': 'Search Engine|Lycos'
                }, {
                    'search.lycos.de': 'Search Engine|Lycos - Germany'
                }, {
                    'search.lycos.nl': 'Search Engine|Lycos - Netherlands'
                }, {
                    'search.m.infoseek.co.jp': 'Search Engine|InfoSeek - Japan'
                }, {
                    'search.metacrawler.com': 'Search Engine|Metacrawler'
                }, {
                    'search.metajump.com': 'Search Engine|Surf Gopher'
                }, {
                    'search.mobile.goo.ne.jp': 'Search Engine|Goo (Japan)'
                }, {
                    'search.msn.at': 'Search Engine|MSN - Austria'
                }, {
                    'search.msn.be': 'Search Engine|MSN - Belgium'
                }, {
                    'search.msn.ch': 'Search Engine|MSN - Switzerland'
                }, {
                    'search.msn.co.id': 'Search Engine|MSN - Indonesia (English)'
                }, {
                    'search.msn.co.il': 'Search Engine|MSN - Isreal'
                }, {
                    'search.msn.co.in': 'Search Engine|MSN - India (English)'
                }, {
                    'search.msn.co.jp': 'Search Engine|MSN - Japan'
                }, {
                    'search.msn.co.kr': 'Search Engine|MSN - Korea'
                }, {
                    'search.msn.co.za': 'Search Engine|MSN - South Africa'
                }, {
                    'search.msn.com.br': 'Search Engine|MSN - Brazil'
                }, {
                    'search.msn.com.cn': 'Search Engine|MSN - Peoples Republic of China'
                }, {
                    'search.msn.com.hk': 'Search Engine|MSN - Hong Kong S.A.R.'
                }, {
                    'search.msn.com.my': 'Search Engine|MSN - Malaysia'
                }, {
                    'search.msn.com.ph': 'Search Engine|MSN - Republic of the Phlippines'
                }, {
                    'search.msn.com.sg': 'Search Engine|MSN - Singapore'
                }, {
                    'search.msn.com.tr': 'Search Engine|MSN - Turkey'
                }, {
                    'search.msn.com.tw': 'Search Engine|MSN - Taiwan'
                }, {
                    'search.msn.de': 'Search Engine|MSN - Germany'
                }, {
                    'search.msn.dk': 'Search Engine|MSN - Denmark'
                }, {
                    'search.msn.es': 'Search Engine|MSN - Spain'
                }, {
                    'search.msn.fr': 'Search Engine|MSN - France'
                }, {
                    'search.msn.ie': 'Search Engine|MSN - Ireland'
                }, {
                    'search.msn.it': 'Search Engine|MSN - Italy'
                }, {
                    'search.msn.nl': 'Search Engine|MSN - Netherlands'
                }, {
                    'search.msn.no': 'Search Engine|MSN - Norway'
                }, {
                    'search.msn.se': 'Search Engine|MSN - Sweden'
                }, {
                    'search.myjcom.jp': 'Search Engine|J:COM'
                }, {
                    'search.mywebsearch.com': 'Search Engine|mywebsearch'
                }, {
                    'search.nate.com': 'Search Engine|Nate.com'
                }, {
                    'search.NationalDirectory.com': 'Search Engine|National Directory'
                }, {
                    'search.naver.com': 'Search Engine|Naver'
                }, {
                    'search.nifty.com': 'Search Engine|Nifty'
                }, {
                    'search.ninemsn.com.au': 'Search Engine|NineMSN'
                }, {
                    'search.oznetwork.com.au': 'Search Engine|Ozsearch'
                }, {
                    'search.prodigy.msn.com': 'Search Engine|MSN - Mexico'
                }, {
                    'search.rr.com': 'Search Engine|RoadRunner'
                }, {
                    'search.start.sony.jp': 'Search Engine|My VAIO'
                }, {
                    'search.stopat.com': 'Search Engine|StopAt'
                }, {
                    'search.ukmax.com': 'Search Engine|UK Max'
                }, {
                    'search.wanadoo.co.uk': 'Search Engine|Wanadoo'
                }, {
                    'search.yahoo.co.jp': 'Search Engine|Yahoo! - Japan'
                }, {
                    'search.yahoo.com': 'Search Engine|Yahoo!'
                }, {
                    'searchalot.com': 'Search Engine|Searchalot'
                }, {
                    'searchcity.co.uk': 'Search Engine|Search City'
                }, {
                    'searches.org': 'Search Engine|1001 Searches'
                }, {
                    'searchexcite.netscape.com': 'Search Engine|Excite - Netscape'
                }, {
                    'searchhound.com': 'Search Engine|SearchHound'
                }, {
                    'searchiberia.com': 'Search Engine|Search Iberia'
                }, {
                    'searchidea.com': 'Search Engine|Idea Web'
                }, {
                    'searchit.com': 'Search Engine|SearchIt'
                }, {
                    'searchking.com': 'Search Engine|Search King'
                }, {
                    'searchnz.co.nz': 'Search Engine|SearchNZ'
                }, {
                    'searchoodle.com': 'Search Engine|Searchoodle'
                }, {
                    'searchport.org': 'Search Engine|Searchport'
                }, {
                    'search-results.com': 'Search Engine|search-results.com'
                }, {
                    'searchviking.com': 'Search Engine|Search Viking'
                }, {
                    'seeq.com': 'Search Engine|InfoPage.com'
                }, {
                    'sensis.com.au': 'Search Engine|Sensis.com.au'
                }, {
                    'serbiancafe.com': 'Search Engine|SerbianCafe'
                }, {
                    'sesam.no/search': 'Search Engine|Sesam'
                }, {
                    'seznam.cz': 'Search Engine|Seznam.cz'
                }, {
                    'sg.search.yahoo.com': 'Search Engine|Yahoo! - Singapore'
                }, {
                    'sg.yahoo.com': 'Search Engine|Yahoo! - Singapore'
                }, {
                    'sherlock.cz': 'Search Engine|Sherlock.cz'
                }, {
                    'shopping.search.jp': 'Search Engine|Aladdin'
                }, {
                    'shoppingaide.com': 'Search Engine|ShoppingAide'
                }, {
                    'simplesearch.com': 'Search Engine|Simple Search'
                }, {
                    'simplypets.com': 'Search Engine|SimplyPets.com'
                }, {
                    'smartbeak.com': 'Search Engine|SmartBeak.com'
                }, {
                    'smartpages.com': 'Search Engine|SmartPages.com'
                }, {
                    'so.360.cn': 'Search Engine|so.360.cn'
                }, {
                    'so.com': 'Search Engine|so.com'
                }, {
                    'soeg.jubii.dk': 'Search Engine|Jubii'
                }, {
                    'soeg.ofir.dk': 'Search Engine|Ofir'
                }, {
                    'sogou.com': 'Search Engine|Sogou'
                }, {
                    'soneraplaza.fi': 'Search Engine|Sonera Plaza'
                }, {
                    'so-net.ne.jp': 'Search Engine|So-net'
                }, {
                    'soquick.com': 'Search Engine|SoQuick.com'
                }, {
                    'soso.com': 'Search Engine|SoSo'
                }, {
                    'southasia.net': 'Search Engine|SouthAsia.net'
                }, {
                    'spiderbot.net': 'Search Engine|SpiderBot'
                }, {
                    'splatsearch.com': 'Search Engine|Splat!'
                }, {
                    'spray.se': 'Search Engine|Spray'
                }, {
                    'starmedia.com': 'Search Engine|Starmedia'
                }, {
                    'startgoogle.startpagina.nl': 'Search Engine|Google - Netherlands (Startpagina)'
                }, {
                    'startpagina.nl': 'Search Engine|Startpagina - Netherlands'
                }, {
                    'stpt.com': 'Search Engine|Starting Point'
                }, {
                    'suche.aol.de': 'Search Engine|AOL - Germany'
                }, {
                    'suche.aolsvc.de': 'Search Engine|AOL - Germany'
                }, {
                    'suche.ch': 'Search Engine|Suche - Switzerland'
                }, {
                    'suche.web.de': 'Search Engine|Suche - Germany'
                }, {
                    'suchen.abacho.de': 'Search Engine|Abacho - Germany'
                }, {
                    'suchmaschine.com': 'Search Engine|Suchmaschine'
                }, {
                    'sunbrain.com': 'Search Engine|Sun Brain'
                }, {
                    'supercrawler.com': 'Search Engine|Supercrawler.com'
                }, {
                    'supereva.it': 'Search Engine|Supereva'
                }, {
                    'supersnooper.com': 'Search Engine|Super Snooper'
                }, {
                    'surf.sk': 'Search Engine|Surf.sk'
                }, {
                    'surfboard.nl': 'Search Engine|Surfboard (Ixquick)'
                }, {
                    'surfcentral.net': 'Search Engine|Surf Central'
                }, {
                    'surfcentral-net': 'Search Engine|Surf Central'
                }, {
                    'surfer.ch': 'Search Engine|Surfer.ch'
                }, {
                    'swift.kerna.ie': 'Search Engine|Swift Guide'
                }, {
                    'sympatico.msn.ca': 'Search Engine|MSN - Canada'
                }, {
                    'szm.sk': 'Search Engine|szm.sk'
                }, {
                    't1msn.com.mx': 'Search Engine|MSN - Mexico'
                }, {
                    'tapuz.co.il': 'Search Engine|Tapuz'
                }, {
                    'telefrance.com': 'Search Engine|allZone'
                }, {
                    'telemundo.yahoo.com': 'Search Engine|Yahoo! - Spanish (US : Telemundo)'
                }, {
                    'teoma.com': 'Search Engine|Teoma'
                }, {
                    'terra.es': 'Search Engine|Terra'
                }, {
                    'th.search.yahoo.com': 'Search Engine|Yahoo! - Thailand'
                }, {
                    'th.yahoo.com': 'Search Engine|Yahoo! - Thailand'
                }, {
                    'thebestmall.com': 'Search Engine|theBestMall'
                }, {
                    'thebighub.com': 'Search Engine|theBigHub.com'
                }, {
                    'thebrazilbridge.com': 'Search Engine|TheBrazilBridge'
                }, {
                    'theglobe.com': 'Search Engine|The Globe Search'
                }, {
                    'theinfodepot.com': 'Search Engine|theinfodepot.com'
                }, {
                    'themegaweb.com': 'Search Engine|globito!'
                }, {
                    'thenet1.com': 'Search Engine|The Net 1'
                }, {
                    'thestomp.hypermart.net': 'Search Engine|Stomp!'
                }, {
                    'theyellowpages.com': 'Search Engine|TheYellowPages'
                }, {
                    'thunderstone.com': 'Search Engine|Thunderstone'
                }, {
                    'tipmoto.com': 'Search Engine|TipMoto'
                }, {
                    'tiscali.co.uk': 'Search Engine|Tiscali'
                }, {
                    'tiscali.it': 'Search Engine|Tiscali'
                }, {
                    'tjohoo.se': 'Search Engine|Tjohoo'
                }, {
                    'tkmf.jp': 'Search Engine|tkmf.jp'
                }, {
                    'todocl.cl': 'Search Engine|TodoCl'
                }, {
                    'togglebot.com': 'Search Engine|ToggleBot!'
                }, {
                    'toile.com': 'Search Engine|Toile du Quebec'
                }, {
                    'toocool.com': 'Search Engine|TooCool'
                }, {
                    'toozen.com': 'Search Engine|TooZen'
                }, {
                    'topfile.com': 'Search Engine|TopFile.com'
                }, {
                    'totalseek.com': 'Search Engine|totalSEEK'
                }, {
                    'track.nl': 'Search Engine|track.nl'
                }, {
                    'trovator.com': 'Search Engine|Trovator'
                }, {
                    'truesearch.com': 'Search Engine|TrueSearch.com'
                }, {
                    'tw.search.yahoo.com': 'Search Engine|Yahoo! - Taiwan'
                }, {
                    'tw.yahoo.com': 'Search Engine|Yahoo! - Taiwan'
                }, {
                    'uk.altavista.com': 'Search Engine|AltaVista - United Kingdom'
                }, {
                    'uk.ask.com': 'Search Engine|Ask Jeeves - United Kingdom'
                }, {
                    'uk.search.msn.com': 'Search Engine|MSN - United Kingdom'
                }, {
                    'uk.search.yahoo.com': 'Search Engine|Yahoo! - UK and Ireland'
                }, {
                    'uk.yahoo.com': 'Search Engine|Yahoo! - UK and Ireland'
                }, {
                    'ukindex.co.uk': 'Search Engine|ukindex'
                }, {
                    'ukplus.com': 'Search Engine|UK Plus'
                }, {
                    'uksearcher.co.uk': 'Search Engine|UK Searcher'
                }, {
                    'up4u.com': 'Search Engine|Up4U'
                }, {
                    'urbandictionary.com': 'Search Engine|Urbandictionary'
                }, {
                    'usseek.com': 'Search Engine|Usseek'
                }, {
                    'vietgate.net': 'Search Engine|VietGate'
                }, {
                    'vinden.nl': 'Search Engine|Vinden'
                }, {
                    'vindex.nl': 'Search Engine|Vindex'
                }, {
                    'virgilio.it': 'Search Engine|Virgilio'
                }, {
                    'virtualpromote.com': 'Search Engine|JimWorld Open Directory'
                }, {
                    'vn.search.yahoo.com': 'Search Engine|Yahoo! - Viet Nam'
                }, {
                    'vn.yahoo.com': 'Search Engine|Yahoo! - Viet Nam'
                }, {
                    'voila.fr': 'Search Engine|Voila'
                }, {
                    'wakwak.com': 'Search Engine|WAKWAK'
                }, {
                    'walla.co.il': 'Search Engine|Walla'
                }, {
                    'waypages.com': 'Search Engine|Waypages'
                }, {
                    'web.de': 'Search Engine|Web.de'
                }, {
                    'webalta.ru': 'Search Engine|Webalta'
                }, {
                    'webbel.be': 'Search Engine|Webbel'
                }, {
                    'webcrawler.com': 'Search Engine|WebCrawler'
                }, {
                    'webpath.net': 'Search Engine|Webpath'
                }, {
                    'web-search.com': 'Search Engine|Web-Search'
                }, {
                    'websearch.rakuten.co.jp': 'Search Engine|Rakuten'
                }, {
                    'websearch2k.com': 'Search Engine|WebSearch 2K'
                }, {
                    'websiteforever.com': 'Search Engine|Websiteforever'
                }, {
                    'webstudio.fi': 'Search Engine|WebStudio'
                }, {
                    'webtop.com': 'Search Engine|WebTop'
                }, {
                    'webtrawler.com': 'Search Engine|Web Trawler'
                }, {
                    'webwombat.com': 'Search Engine|Web Wombat'
                }, {
                    'webwombat.com.au': 'Search Engine|Web Wombat (Au.)'
                }, {
                    'wepa.com': 'Search Engine|Wepa'
                }, {
                    'whatsnu.com': 'Search Engine|WhatsNu'
                }, {
                    'wisenut.com': 'Search Engine|WiseNut'
                }, {
                    'wizzler.com': 'Search Engine|Wizzler.com'
                }, {
                    'worldbazaar.com': 'Search Engine|WorldBazaar'
                }, {
                    'worldlight.com': 'Search Engine|Worldlight'
                }, {
                    'wow.pl': 'Search Engine|WOW'
                }, {
                    'woyaa.com': 'Search Engine|WoYaa'
                }, {
                    'wp.pl': 'Search Engine|Wirtualna Polska'
                }, {
                    'wsearch.ocn.ne.jp': 'Search Engine|OCN'
                }, {
                    'yahoo.co.jp': 'Search Engine|Yahoo - Japan'
                }, {
                    'yahoo.com': 'Search Engine|Yahoo'
                }, {
                    'yandex': 'Search Engine|Yandex - Russia'
                }, {
                    'yandex.by': 'Search Engine|Yandex - Belarus'
                }, {
                    'yandex.com': 'Search Engine|Yandex'
                }, {
                    'yandex.com.tr': 'Search Engine|Yandex - Turkey'
                }, {
                    'yandex.kz': 'Search Engine|Yandex - Kazakhstan'
                }, {
                    'yandex.net': 'Search Engine|Yandex'
                }, {
                    'yandex.ru': 'Search Engine|Yandex - Russia'
                }, {
                    'yandex.ua': 'Search Engine|Yandex - Ukraine'
                }, {
                    'yappo.jp': 'Search Engine|iYappo'
                }, {
                    'yeehaa.com': 'Search Engine|Yeehaa'
                }, {
                    'yehey.com': 'Search Engine|Yehey'
                }, {
                    'yicha.jp': 'Search Engine|Yicha'
                }, {
                    'youdao.com': 'Search Engine|Youdao'
                }, {
                    'yupi.com': 'Search Engine|Yupi'
                }, {
                    'zbozi.cz': 'Search Engine|Zbozi.cz'
                }, {
                    'zensearch.com': 'Search Engine|ZenSearch'
                }, {
                    'zhongsou.com': 'Search Engine|Zhongsou'
                }, {
                    'zinos.com': 'Search Engine|Zinos'
                }, {
                    'zoek.nl': 'Search Engine|Zoek'
                }, {
                    'zoeken.hetnet.nl': 'Search Engine|zoeken.hetnet.nl'
                }, {
                    'zoeken.nl': 'Search Engine|zoeken.nl'
                }];
                var m = false;
                for (e = 0; e < c.length; e++) {
                    for (f in utag.loader.GV(c[e])) {
                        if (d.toString().indexOf(f) > -1) {
                            b['domainReferrerClass'] = c[e][f];
                            m = true
                        };
                    };
                    if (m) break
                };
                if (!m) b['domainReferrerClass'] = '';
            }
        }, function(a, b) {
            var current_date = Math.floor(Date.now() / 1000);
            var min_date = 1440496503;
            var max_date = 1444780800;
            if (current_date > min_date && current_date < max_date) {
                b.pegasusPreorderWindow = "true";
            } else {
                b.pegasusPreorderWindow = "false";
            }
        }, function(a, b) {
            var productSkuVarName = "productSKU";
            var pegasusOutputArrayName = "pegasusSkuArray";
            var pegasusOutputStringName = "pegasusSkuString";
            var pegasusASlistName = "va.property_sets.6087";

            function toType(obj) {
                return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
            }
            var pegasusArray = ["20150410", "20150411", "20150412", "20150413", "20150414", "20150415", "20150416", "20150417", "20150418", "20150419", "20150420", "20150421", "20150422", "20150423", "20150424", "20150425", "20150426", "20150427", "20150428", "20150429", "20150430", "20150431", "20150432", "20150433", "20150434", "20150435", "20150436", "20150437", "20150438", "20150439", "20150440", "20150441", "20150442", "20150443", "20150444", "20150445"];
            var productSKU = b[productSkuVarName];
            if (toType(productSKU) === "array") {
                var pegasusSKUs = [];
                for (var i = 0; i < productSKU.length; i++) {
                    for (var j = 0; j < pegasusArray.length; j++) {
                        if (productSKU[i].trim() === pegasusArray[j]) {
                            pegasusSKUs.push(productSKU[i]);
                        }
                    }
                }
                var names = pegasusSKUs;
                var uniqueNames = [];
                jQuery.each(names, function(i, el) {
                    if ($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
                });
                if (toType(b[pegasusASlistName]) === "array") {
                    uniqueNames = uniqueNames.concat(b[pegasusASlistName]);
                }
                b[pegasusOutputArrayName] = uniqueNames;
                b[pegasusOutputStringName] = uniqueNames.join('|');
            }
        }, function(a, b) {
            try {
                if (typeof b['visitorEmail'] != 'undefined' && b['visitorEmail'] != '') {
                    b['visitorEmailHashed'] = b['visitorEmail']
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            utag.ut.md5 = function(t, n) {
                var r;
                if ("undefined" != typeof window && window.crypto && (r = window.crypto), !r && "undefined" != typeof window && window.msCrypto && (r = window.msCrypto), !r && "undefined" != typeof global && global.crypto && (r = global.crypto), !r && "function" == typeof require) try {
                    r = require("crypto")
                } catch (t) {}
                var e = function() {
                        if (r) {
                            if ("function" == typeof r.getRandomValues) try {
                                return r.getRandomValues(new Uint32Array(1))[0]
                            } catch (t) {}
                            if ("function" == typeof r.randomBytes) try {
                                return r.randomBytes(4).readInt32LE()
                            } catch (t) {}
                        }
                        throw new Error("Native crypto module could not be used to get secure random number.")
                    },
                    i = Object.create || function() {
                        function t() {}
                        return function(n) {
                            var r;
                            return t.prototype = n, r = new t, t.prototype = null, r
                        }
                    }(),
                    o = {},
                    s = o.lib = {},
                    a = s.Base = {
                        extend: function(t) {
                            var n = i(this);
                            return t && n.mixIn(t), n.hasOwnProperty("init") && this.init !== n.init || (n.init = function() {
                                n.$super.init.apply(this, arguments)
                            }), n.init.prototype = n, n.$super = this, n
                        },
                        create: function() {
                            var t = this.extend();
                            return t.init.apply(t, arguments), t
                        },
                        init: function() {},
                        mixIn: function(t) {
                            for (var n in t) t.hasOwnProperty(n) && (this[n] = t[n]);
                            t.hasOwnProperty("toString") && (this.toString = t.toString)
                        },
                        clone: function() {
                            return this.init.prototype.extend(this)
                        }
                    },
                    c = s.WordArray = a.extend({
                        init: function(t, n) {
                            t = this.words = t || [], this.sigBytes = null != n ? n : 4 * t.length
                        },
                        toString: function(t) {
                            return (t || f).stringify(this)
                        },
                        concat: function(t) {
                            var n = this.words,
                                r = t.words,
                                e = this.sigBytes,
                                i = t.sigBytes;
                            if (this.clamp(), e % 4)
                                for (var o = 0; o < i; o++) {
                                    var s = r[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                                    n[e + o >>> 2] |= s << 24 - (e + o) % 4 * 8
                                } else
                                    for (o = 0; o < i; o += 4) n[e + o >>> 2] = r[o >>> 2];
                            return this.sigBytes += i, this
                        },
                        clamp: function() {
                            var n = this.words,
                                r = this.sigBytes;
                            n[r >>> 2] &= 4294967295 << 32 - r % 4 * 8, n.length = t.ceil(r / 4)
                        },
                        clone: function() {
                            var t = a.clone.call(this);
                            return t.words = this.words.slice(0), t
                        },
                        random: function(t) {
                            for (var n = [], r = 0; r < t; r += 4) n.push(e());
                            return new c.init(n, t)
                        }
                    }),
                    u = o.enc = {},
                    f = u.Hex = {
                        stringify: function(t) {
                            for (var n = t.words, r = t.sigBytes, e = [], i = 0; i < r; i++) {
                                var o = n[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                                e.push((o >>> 4).toString(16)), e.push((15 & o).toString(16))
                            }
                            return e.join("")
                        },
                        parse: function(t) {
                            for (var n = t.length, r = [], e = 0; e < n; e += 2) r[e >>> 3] |= parseInt(t.substr(e, 2), 16) << 24 - e % 8 * 4;
                            return new c.init(r, n / 2)
                        }
                    },
                    h = u.Latin1 = {
                        stringify: function(t) {
                            for (var n = t.words, r = t.sigBytes, e = [], i = 0; i < r; i++) {
                                var o = n[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                                e.push(String.fromCharCode(o))
                            }
                            return e.join("")
                        },
                        parse: function(t) {
                            for (var n = t.length, r = [], e = 0; e < n; e++) r[e >>> 2] |= (255 & t.charCodeAt(e)) << 24 - e % 4 * 8;
                            return new c.init(r, n)
                        }
                    },
                    d = u.Utf8 = {
                        stringify: function(t) {
                            try {
                                return decodeURIComponent(escape(h.stringify(t)))
                            } catch (t) {
                                throw new Error("Malformed UTF-8 data")
                            }
                        },
                        parse: function(t) {
                            return h.parse(unescape(encodeURIComponent(t)))
                        }
                    },
                    l = s.BufferedBlockAlgorithm = a.extend({
                        reset: function() {
                            this._data = new c.init, this._nDataBytes = 0
                        },
                        _append: function(t) {
                            "string" == typeof t && (t = d.parse(t)), this._data.concat(t), this._nDataBytes += t.sigBytes
                        },
                        _process: function(n) {
                            var r, e = this._data,
                                i = e.words,
                                o = e.sigBytes,
                                s = this.blockSize,
                                a = o / (4 * s),
                                u = (a = n ? t.ceil(a) : t.max((0 | a) - this._minBufferSize, 0)) * s,
                                f = t.min(4 * u, o);
                            if (u) {
                                for (var h = 0; h < u; h += s) this._doProcessBlock(i, h);
                                r = i.splice(0, u), e.sigBytes -= f
                            }
                            return new c.init(r, f)
                        },
                        clone: function() {
                            var t = a.clone.call(this);
                            return t._data = this._data.clone(), t
                        },
                        _minBufferSize: 0
                    }),
                    p = (s.Hasher = l.extend({
                        cfg: a.extend(),
                        init: function(t) {
                            this.cfg = this.cfg.extend(t), this.reset()
                        },
                        reset: function() {
                            l.reset.call(this), this._doReset()
                        },
                        update: function(t) {
                            return this._append(t), this._process(), this
                        },
                        finalize: function(t) {
                            return t && this._append(t), this._doFinalize()
                        },
                        blockSize: 16,
                        _createHelper: function(t) {
                            return function(n, r) {
                                return new t.init(r).finalize(n)
                            }
                        },
                        _createHmacHelper: function(t) {
                            return function(n, r) {
                                return new p.HMAC.init(t, r).finalize(n)
                            }
                        }
                    }), o.algo = {});
                return o
            }(Math);
            (function(t) {
                var n = utag.ut.md5,
                    r = n.lib,
                    e = r.WordArray,
                    i = r.Hasher,
                    o = n.algo,
                    s = [];
                ! function() {
                    for (var n = 0; n < 64; n++) s[n] = 4294967296 * t.abs(t.sin(n + 1)) | 0
                }();
                var a = o.MD5 = i.extend({
                    _doReset: function() {
                        this._hash = new e.init([1732584193, 4023233417, 2562383102, 271733878])
                    },
                    _doProcessBlock: function(t, n) {
                        for (var r = 0; r < 16; r++) {
                            var e = n + r,
                                i = t[e];
                            t[e] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8)
                        }
                        var o = this._hash.words,
                            a = t[n + 0],
                            d = t[n + 1],
                            l = t[n + 2],
                            p = t[n + 3],
                            y = t[n + 4],
                            g = t[n + 5],
                            w = t[n + 6],
                            v = t[n + 7],
                            _ = t[n + 8],
                            m = t[n + 9],
                            B = t[n + 10],
                            x = t[n + 11],
                            b = t[n + 12],
                            S = t[n + 13],
                            H = t[n + 14],
                            z = t[n + 15],
                            C = o[0],
                            M = o[1],
                            A = o[2],
                            D = o[3];
                        C = c(C, M, A, D, a, 7, s[0]), D = c(D, C, M, A, d, 12, s[1]), A = c(A, D, C, M, l, 17, s[2]), M = c(M, A, D, C, p, 22, s[3]), C = c(C, M, A, D, y, 7, s[4]), D = c(D, C, M, A, g, 12, s[5]), A = c(A, D, C, M, w, 17, s[6]), M = c(M, A, D, C, v, 22, s[7]), C = c(C, M, A, D, _, 7, s[8]), D = c(D, C, M, A, m, 12, s[9]), A = c(A, D, C, M, B, 17, s[10]), M = c(M, A, D, C, x, 22, s[11]), C = c(C, M, A, D, b, 7, s[12]), D = c(D, C, M, A, S, 12, s[13]), A = c(A, D, C, M, H, 17, s[14]), C = u(C, M = c(M, A, D, C, z, 22, s[15]), A, D, d, 5, s[16]), D = u(D, C, M, A, w, 9, s[17]), A = u(A, D, C, M, x, 14, s[18]), M = u(M, A, D, C, a, 20, s[19]), C = u(C, M, A, D, g, 5, s[20]), D = u(D, C, M, A, B, 9, s[21]), A = u(A, D, C, M, z, 14, s[22]), M = u(M, A, D, C, y, 20, s[23]), C = u(C, M, A, D, m, 5, s[24]), D = u(D, C, M, A, H, 9, s[25]), A = u(A, D, C, M, p, 14, s[26]), M = u(M, A, D, C, _, 20, s[27]), C = u(C, M, A, D, S, 5, s[28]), D = u(D, C, M, A, l, 9, s[29]), A = u(A, D, C, M, v, 14, s[30]), C = f(C, M = u(M, A, D, C, b, 20, s[31]), A, D, g, 4, s[32]), D = f(D, C, M, A, _, 11, s[33]), A = f(A, D, C, M, x, 16, s[34]), M = f(M, A, D, C, H, 23, s[35]), C = f(C, M, A, D, d, 4, s[36]), D = f(D, C, M, A, y, 11, s[37]), A = f(A, D, C, M, v, 16, s[38]), M = f(M, A, D, C, B, 23, s[39]), C = f(C, M, A, D, S, 4, s[40]), D = f(D, C, M, A, a, 11, s[41]), A = f(A, D, C, M, p, 16, s[42]), M = f(M, A, D, C, w, 23, s[43]), C = f(C, M, A, D, m, 4, s[44]), D = f(D, C, M, A, b, 11, s[45]), A = f(A, D, C, M, z, 16, s[46]), C = h(C, M = f(M, A, D, C, l, 23, s[47]), A, D, a, 6, s[48]), D = h(D, C, M, A, v, 10, s[49]), A = h(A, D, C, M, H, 15, s[50]), M = h(M, A, D, C, g, 21, s[51]), C = h(C, M, A, D, b, 6, s[52]), D = h(D, C, M, A, p, 10, s[53]), A = h(A, D, C, M, B, 15, s[54]), M = h(M, A, D, C, d, 21, s[55]), C = h(C, M, A, D, _, 6, s[56]), D = h(D, C, M, A, z, 10, s[57]), A = h(A, D, C, M, w, 15, s[58]), M = h(M, A, D, C, S, 21, s[59]), C = h(C, M, A, D, y, 6, s[60]), D = h(D, C, M, A, x, 10, s[61]), A = h(A, D, C, M, l, 15, s[62]), M = h(M, A, D, C, m, 21, s[63]), o[0] = o[0] + C | 0, o[1] = o[1] + M | 0, o[2] = o[2] + A | 0, o[3] = o[3] + D | 0
                    },
                    _doFinalize: function() {
                        var n = this._data,
                            r = n.words,
                            e = 8 * this._nDataBytes,
                            i = 8 * n.sigBytes;
                        r[i >>> 5] |= 128 << 24 - i % 32;
                        var o = t.floor(e / 4294967296),
                            s = e;
                        r[15 + (i + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), r[14 + (i + 64 >>> 9 << 4)] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8), n.sigBytes = 4 * (r.length + 1), this._process();
                        for (var a = this._hash, c = a.words, u = 0; u < 4; u++) {
                            var f = c[u];
                            c[u] = 16711935 & (f << 8 | f >>> 24) | 4278255360 & (f << 24 | f >>> 8)
                        }
                        return a
                    },
                    clone: function() {
                        var t = i.clone.call(this);
                        return t._hash = this._hash.clone(), t
                    }
                });

                function c(t, n, r, e, i, o, s) {
                    var a = t + (n & r | ~n & e) + i + s;
                    return (a << o | a >>> 32 - o) + n
                }

                function u(t, n, r, e, i, o, s) {
                    var a = t + (n & e | r & ~e) + i + s;
                    return (a << o | a >>> 32 - o) + n
                }

                function f(t, n, r, e, i, o, s) {
                    var a = t + (n ^ r ^ e) + i + s;
                    return (a << o | a >>> 32 - o) + n
                }

                function h(t, n, r, e, i, o, s) {
                    var a = t + (r ^ (n | ~e)) + i + s;
                    return (a << o | a >>> 32 - o) + n
                }
                n.MD5 = i._createHelper(a), n.HmacMD5 = i._createHmacHelper(a)
            }(Math));
            try {
                if (typeof b['visitorEmailHashed'] != 'undefined' && b['visitorEmailHashed'] != '') {
                    b['visitorEmailHashed'] = utag.ut.md5.MD5(b['visitorEmailHashed']).toString();
                }
            } catch (e) {}
        }, function(a, b) {
            if (typeof b['cp.s_vi'] === undefined && typeof b['cp.s_fid'] === undefined) {
                if (document.cookie.indexOf('s_vi=') > -1) {
                    b['cp.s_vi'] = document.cookie.match(/s_vi=(.+?);\s/)[1];
                } else if (document.cookie.indexOf('s_fid=') > -1) {
                    b['cp.s_fid'] = document.cookie.match(/s_fid=(.+?);\s/)[1];
                }
            }
            if (typeof b['cp.s_vi'] !== undefined) {
                b.visitorWAID = b['cp.s_vi'].match(/([\d\w]+-[\d\w]+)/)[0]
            } else if (typeof b['cp.s_fid'] !== undefined) {
                b.visitorWAID = b['cp.s_fid'];
            }
        }, function(a, b, c, d, e, f, g) {
            if (1) {
                d = b['pageCampaignID'];
                if (typeof d == 'undefined') return;
                c = [{
                    '_EM_': 'Email Marketing'
                }, {
                    '_DD_': 'Digital Display'
                }, {
                    '_SM_': 'Paid Search'
                }, {
                    '_SB_': 'Social Media'
                }, {
                    '_SS_': 'Sponsorship'
                }, {
                    '_AF_': 'Affiliate Marketing'
                }, {
                    '_DM_': 'Direct Mail'
                }, {
                    '_PR_': 'Public Relations'
                }, {
                    '_OH_': 'Out of Home'
                }, {
                    '_DL_': 'Doordrop Leaflets'
                }, {
                    '_NP_': 'National Press'
                }, {
                    '_RP_': 'Regional Press'
                }, {
                    '_SP_': 'Specialist Press'
                }];
                var m = false;
                for (e = 0; e < c.length; e++) {
                    for (f in utag.loader.GV(c[e])) {
                        if (d.toString().indexOf(f) > -1) {
                            b['pageTrafficSource'] = c[e][f];
                            m = true
                        };
                    };
                    if (m) break
                };
                if (!m) b['pageTrafficSource'] = '';
            }
        }, function(a, b) {
            try {
                if (typeof b['pageInternalCampaignID'] != 'undefined' && b['pageInternalCampaignID'] != '') {
                    b['pageTrafficSource'] = 'On-site Promotion'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b, c, d, e, f, g) {
            if (1) {
                d = b['pageLanguage'];
                if (typeof d == 'undefined') return;
                c = [{
                    'EN': 'en-gb'
                }, {
                    'en': 'en-gb'
                }, {
                    'English': 'en-gb'
                }, {
                    'english': 'en-gb'
                }, {
                    'en-gb': 'en-gb'
                }, {
                    'welsh': 'cy'
                }, {
                    'Welsh': 'cy'
                }, {
                    'CY': 'cy'
                }, {
                    'cy': 'cy'
                }];
                var m = false;
                for (e = 0; e < c.length; e++) {
                    for (f in utag.loader.GV(c[e])) {
                        if (d == f) {
                            b['pageLanguage'] = c[e][f];
                            m = true
                        };
                    };
                    if (m) break
                };
                if (!m) b['pageLanguage'] = 'en-gb';
            }
        }, function(a, b) {
            try {
                if ((/^Search Engine/.test(b['domainReferrerClass']) && typeof b['pageCampaignID'] != 'undefined' && b['pageCampaignID'] == '' && typeof b['pageInternalCampaignID'] != 'undefined' && b['pageInternalCampaignID'] == '')) {
                    b['pageTrafficSource'] = 'Organic Search'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((typeof b['dom.referrer'] != 'undefined' && b['dom.referrer'] == '' && typeof b['pageCampaignID'] != 'undefined' && b['pageCampaignID'] == '' && typeof b['pageInternalCampaignID'] != 'undefined' && b['pageInternalCampaignID'] == '')) {
                    b['pageTrafficSource'] = 'Direct Traffic'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if (/^RM BUS/.test(b['pageName'])) {
                    b['sc_channel'] = 'Business'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((b['domainRefererr'].toString().toLowerCase().indexOf('royalmail'.toLowerCase()) > -1 && typeof b['pageCampaignID'] != 'undefined' && b['pageCampaignID'] == '' && typeof b['pageInternalCampaignID'] != 'undefined' && b['pageInternalCampaignID'] == '' && !/^Search Engine/i.test(b['domainReferrerClass']))) {
                    b['pageTrafficSource'] = 'Internal Traffic'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if (typeof b['pageTrafficSource'] == 'undefined' || typeof b['pageTrafficSource'] != 'undefined' && b['pageTrafficSource'] == '') {
                    b['pageTrafficSource'] = 'Referrer (Other)'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((b['dom.domain'].toString().toLowerCase() == 'parcel.royalmail.com'.toLowerCase() && b['dom.pathname'].toString().toLowerCase() == '/orders/quick-delivery/'.toLowerCase() && b['pageApplicationStep'].toString().toLowerCase() == 'Step 1: Enter Delivery Details'.toLowerCase())) {
                    b['pageName'] = 'RM Web App > Royal Mail Click & Drop > Quick Delivery >Step 1. Enter Delivery Details'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b, c, d, e, f, g, h, i, j, t, o) {
            o = {
                channel: '',
                category: '',
                exp: 0
            };
            if (a == 'view') {
                if (b['pageCampaignID'].toString().toLowerCase().indexOf('_EM_'.toLowerCase()) > -1) {
                    o.channel = 'EM';
                    o.category = 'email'
                } else if (b['pageCampaignID'].toString().toLowerCase().indexOf('_DD_'.toLowerCase()) > -1) {
                    o.channel = 'DD';
                    o.category = 'displayads'
                } else if (b['pageCampaignID'].toString().toLowerCase().indexOf('_SM_'.toLowerCase()) > -1) {
                    o.channel = 'SM';
                    o.category = 'paidsearch'
                } else if (b['pageCampaignID'].toString().toLowerCase().indexOf('_SB_'.toLowerCase()) > -1) {
                    o.channel = 'SB';
                    o.category = 'socialmedia'
                } else if (b['pageCampaignID'].toString().toLowerCase().indexOf('_SS_'.toLowerCase()) > -1) {
                    o.channel = 'SS';
                    o.category = 'sponsorships'
                } else if (b['pageCampaignID'].toString().toLowerCase().indexOf('_AF_'.toLowerCase()) > -1) {
                    o.channel = 'AM';
                    o.category = 'affiliate'
                } else if (b['pageCampaignID'].toString().toLowerCase().indexOf('_DM_'.toLowerCase()) > -1) {
                    o.channel = 'DM';
                    o.category = 'other'
                } else if (b['pageCampaignID'].toString().toLowerCase().indexOf('_PR_'.toLowerCase()) > -1) {
                    o.channel = 'PR';
                    o.category = 'other'
                } else if (b['pageCampaignID'].toString().toLowerCase().indexOf('_OH_'.toLowerCase()) > -1) {
                    o.channel = 'OH';
                    o.category = 'other'
                } else if (b['pageCampaignID'].toString().toLowerCase().indexOf('_DL_'.toLowerCase()) > -1) {
                    o.channel = 'DL';
                    o.category = 'other'
                } else if (b['pageCampaignID'].toString().toLowerCase().indexOf('_NP_'.toLowerCase()) > -1) {
                    o.channel = 'NP';
                    o.category = 'other'
                } else if (b['pageCampaignID'].toString().toLowerCase().indexOf('_RP_'.toLowerCase()) > -1) {
                    o.channel = 'RP';
                    o.category = 'other'
                } else if (b['pageCampaignID'].toString().toLowerCase().indexOf('_SP_'.toLowerCase()) > -1) {
                    o.channel = 'SP';
                    o.category = 'other'
                } else if (/^Search Engine/i.test(b['domainReferrerClass'])) {
                    o.channel = 'OS';
                    o.category = 'naturalsearch'
                } else if (typeof b['dom.referrer'] != 'undefined' && b['dom.referrer'] != '' && b['pageTrafficSource'] == 'Referrer (Other)') {
                    o.channel = 'RO';
                    o.category = 'other'
                } else if (typeof b['dom.referrer'] != 'undefined' && b['dom.referrer'] == '') {
                    o.channel = 'DT';
                    o.category = 'other'
                }
                var dd = (isNaN(utag.cfg.domain.replace('.', ''))) ? utag.cfg.domain : location.hostname;
                dd = ' domain=' + dd + '; path=/;';
                if (o.channel != '') {
                    var exp = 0;
                    var expd = new Date(0).toGMTString();
                    if (typeof b['cp.channelflow'] == 'undefined' && b['cp.channelflow'] != '') {
                        b['cp.channelflow'] = o.channel + '|' + o.category + '|' + exp;
                    } else {
                        var ncf = [];
                        var bcf = b['cp.channelflow'].split(',');
                        for (var i = bcf.length - 1; i > -1; i--) {
                            var chan = bcf[i].split('|');
                            if (i == (bcf.length - 1) && chan[0] == o.channel && chan[1] == o.category) {
                                bcf[i] = o.channel + '|' + o.category + '|' + exp;
                            } else if (i == (bcf.length - 1) && chan[0] != o.channel) {
                                ncf.push(o.channel + '|' + o.category + '|' + exp);
                            }
                        }
                        bcf = bcf.concat(ncf);
                        b['cp.channelflow'] = bcf.join();
                    }
                    document.cookie = 'channelflow=' + b['cp.channelflow'] + ';' + dd;
                    if (typeof b['cp.channeloriginator'] == 'undefined') {
                        b['cp.channeloriginator'] = o.channel;
                        document.cookie = 'channeloriginator=' + o.channel + ';' + dd;
                    }
                    b['cp.channelcloser'] = o.channel;
                    document.cookie = 'channelcloser=' + o.channel + ';' + dd;
                }
                if (typeof b['cp.channelflow'] != 'undefined') {
                    c = b['cp.channelflow'].split(','), e = [], f = [];
                    for (d = 0; d < c.length; d++) {
                        g = c[d].split('|');
                        if (!g[2] || g[2] == 0 || parseInt(g[2]) >= (new Date().getTime() - 86400000 * o.exp)) {
                            e.push(g[0]);
                            f.push(g[1])
                        }
                    };
                    if (e.length > 0) {
                        b['channel_originator'] = e[0];
                        b['channel_category_originator'] = f[0];
                        b['channel_closer'] = e[e.length - 1];
                        b['channel_category_closer'] = f[f.length - 1];
                        b['channel_path'] = e.join(',');
                        b['channel_category_path'] = f.join(',');
                        if (e.length == 1) {
                            b['channel_influencer'] = e[0];
                            b['channel_category_influencer'] = f[0];
                        } else {
                            e.pop();
                            f.pop();
                            e.shift();
                            f.shift();
                            t = {};
                            g = [];
                            h = [];
                            for (i = 0; i < e.length; i++) {
                                if (t[e[i] + '|' + f[i]] != 1) {
                                    g.push(e[i]);
                                    h.push(f[i])
                                } else t[e[i] + '|' + f[i]] = 1
                            };
                            e = g;
                            f = h;
                            b['channel_influencer'] = e.join(',');
                            b['channel_category_influencer'] = f.join(',');
                            b['channel_influencer_length'] = e.length;
                        }
                    } else {
                        b['channel_originator'] = '';
                        b['channel_category_originator'] = '';
                        b['channel_closer'] = '';
                        b['channel_category_closer'] = '';
                        b['channel_influencer'] = '';
                        b['channel_category_influencer'] = '';
                        b['channel_path'] = '';
                        b['channel_category_path'] = '';
                    }
                    var c = {
                            o: '0',
                            i: '0',
                            c: '0'
                        },
                        cc = {
                            o: 0,
                            i: 0,
                            c: 0
                        },
                        cv = b['va.badges.5943'];
                    if (parseFloat(cv) > 0) {
                        cc.o = cv * parseFloat(c.o / 100);
                        if (b['channel_influencer_length'] < 1) b['channel_influencer_length'] = 1;
                        cc.i = parseFloat((cv * parseFloat(c.i / 100)) / b['channel_influencer_length']);
                        cc.c = cv * parseFloat(c.c / 100);
                        for (i in utag.loader.GV(cc)) {
                            cc[i] = cc[i].toFixed(2);
                        }
                    };
                    b['channel_influencer_credit'] = cc.i;
                    b['channel_originator_credit'] = cc.o;
                    b['channel_closer_credit'] = cc.c;
                }
            }
        }, function(a, b) {
            if ((typeof utag.loader.RC("channelflow")) === "string") {
                utag.loader.SC("channelflow", encodeURIComponent(utag.loader.RC("channelflow")));
            }
        }, function(a, b) {
            try {
                if (1) {
                    try {
                        b['channel_path'] = b.channel_path.replace(/,/g, "|")
                    } catch (e) {}
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            var d = new Date();
            var n = d.getTime();
            b.timeEpoch = n;
        }, function(a, b) {
            try {
                if ((typeof b['visitorGUID'] != 'undefined' && b['visitorGUID'] != '' && b['visitorGUID'].toString().indexOf('SF-1') < 0)) {
                    b['visistorLoggedIn'] = '1'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((b['dom.referrer'].toString().toLowerCase().indexOf('/user/register'.toLowerCase()) > -1 && typeof b['visitorGUID'] != 'undefined' && b['visitorGUID'] != '' && b['visitorGUID'].toString().indexOf('SF-1') < 0)) {
                    b['visitorRegistration'] = '1'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if (typeof b['pageErrorType'] != 'undefined' && b['pageErrorType'] != '') {
                    b['pageErrorEvent'] = '1'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b, c, d, e, f, g) {
            if (1) {
                d = b['surveyCsat'];
                if (typeof d == 'undefined') return;
                c = [{
                    '7': '1'
                }, {
                    '6': '0.8333'
                }, {
                    '5': '0.6667'
                }, {
                    '4': '0.50'
                }, {
                    '3': '0.3333'
                }, {
                    '2': '0.1667'
                }, {
                    '1': '0'
                }];
                var m = false;
                for (e = 0; e < c.length; e++) {
                    for (f in utag.loader.GV(c[e])) {
                        if (d == f) {
                            b['surveyMeanSat'] = c[e][f];
                            m = true
                        };
                    };
                    if (m) break
                };
                if (!m) b['surveyMeanSat'] = '';
            }
        }, function(a, b) {
            try {
                if (b['linkText'].toString().indexOf('.pdf') > -1) {
                    b['downloadEvent'] = 'pdf'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b, c, d) {
            try {
                if (typeof b['visitorGUID'] != 'undefined' && b['visitorGUID'] != '') {
                    c = [b['visitorRMPEmail'], b['visitorRMPPost'], b['visitorRMPPhone'], b['visitorRMPOther']];
                    b['visitorRMPCombined'] = c.join('|')
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((b['paymentSuccessful'].toString().toLowerCase() == 'TRUE'.toLowerCase() && typeof b['transactionID'] != 'undefined' && b['transactionID'] != '' && typeof b['transactionTotal'] != 'undefined' && b['transactionTotal'] != '')) {
                    b['pageName'] = 'RM Web App > Click & Drop >Regular >Payment-Confirmation';
                    b['pageApplicationName'] = 'Click & Drop OBA';
                    b['pageApplicationStep'] = 'Payment-Confirmation';
                    b['pageBreadCrumb'] = 'Home|Regular|Payment-Details';
                    b['pageLanguage'] = 'en-gb';
                    b['pageMenuTree'] = 'Click & Drop|Regular|Payment-Details';
                    b['pageNodeID'] = 'RM Web App > Click & Drop >Regular >Payment-Confirmation';
                    b['pageTemplate'] = 'Payment-Confirmation';
                    b['visitorSegment'] = 'Regular (OBA Account)';
                    b['productSKU'] = 'J2GEN1';
                    b['productName'] = 'Click_Drop_J201';
                    b['productQuantity'] = '1';
                    b['productPrice'] = b['transactionTotal']
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((b['paymentSuccessful'].toString().toLowerCase() == 'FALSE'.toLowerCase() && b['dom.domain'].toString().toLowerCase().indexOf('business.parcel.royalmail.com'.toLowerCase()) > -1) || (b['paymentSuccessful'].toString().toLowerCase().indexOf('FALSE'.toLowerCase()) > -1 && b['dom.domain'].toString().indexOf('.storefeeder.com') > -1)) {
                    b['pageName'] = 'RM Web App > Click & Drop >Regular >Payment-Failed';
                    b['pageApplicationName'] = 'Click & Drop OBA';
                    b['pageApplicationStep'] = 'Payment-Failed';
                    b['pageBreadCrumb'] = 'Home|Regular|Payment-Details';
                    b['pageLanguage'] = 'en-gb';
                    b['pageMenuTree'] = 'Click & Drop|Regular|Payment-Details';
                    b['pageNodeID'] = 'RM Web App > Click & Drop >Regular >Payment-Failed';
                    b['pageTemplate'] = 'Payment-Failed';
                    b['visitorSegment'] = 'Regular (OBA Account)';
                    b['productSKU'] = 'J2GEN1';
                    b['productName'] = 'Click_Drop_J201';
                    b['productQuantity'] = '1'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            var date = new Date();
            b.as_timestamp = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        }, function(a, b) {
            var d = new Date();
            var weekday = new Array(7);
            weekday[0] = "Sunday";
            weekday[1] = "Monday";
            weekday[2] = "Tuesday";
            weekday[3] = "Wednesday";
            weekday[4] = "Thursday";
            weekday[5] = "Friday";
            weekday[6] = "Saturday";
            var day_of_week = weekday[d.getDay()];
            var year = d.getFullYear();
            var month = (d.getMonth() + 1).toString();
            if (month.length === 1) {
                month = "0" + month;
            }
            var day_of_month = d.getDate().toString();
            if (day_of_month.length === 1) {
                day_of_month = "0" + day_of_month;
            }
            var hour = d.getHours().toString()
            if (hour.length === 1) {
                hour = "0" + hour;
            }
            var minutes = d.getMinutes().toString()
            if (minutes.length === 1) {
                minutes = "0" + minutes;
            }
            var seconds = d.getSeconds().toString()
            if (seconds.length === 1) {
                seconds = "0" + minutes;
            }
            b.timeTimestamp = year + '-' + month + '-' + day_of_month + " " + hour + ":" + minutes + ":" + seconds + ".000";
        }];
        utag.handler.cfg_extend = [{
            "id": "475",
            "end": 0,
            "bwq": 0,
            "alr": 0,
            "blr": 1
        }, {
            "blr": 0,
            "id": "356",
            "bwq": 0,
            "end": 0,
            "alr": 1
        }, {
            "id": "353",
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "blr": 0
        }, {
            "blr": 0,
            "end": 0,
            "alr": 1,
            "bwq": 0,
            "id": "9"
        }, {
            "blr": 0,
            "end": 0,
            "alr": 1,
            "bwq": 0,
            "id": "80"
        }, {
            "blr": 0,
            "end": 0,
            "alr": 1,
            "bwq": 0,
            "id": "11"
        }, {
            "blr": 0,
            "id": "89",
            "bwq": 0,
            "end": 0,
            "alr": 1
        }, {
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "id": "127",
            "blr": 0
        }, {
            "id": "128",
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "blr": 0
        }, {
            "blr": 0,
            "id": "129",
            "end": 0,
            "alr": 1,
            "bwq": 0
        }, {
            "blr": 0,
            "end": 0,
            "alr": 1,
            "bwq": 0,
            "id": "131"
        }, {
            "blr": 0,
            "id": "130",
            "end": 0,
            "alr": 1,
            "bwq": 0
        }, {
            "blr": 0,
            "bwq": 0,
            "end": 0,
            "alr": 1,
            "id": "132"
        }, {
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "id": "459",
            "blr": 0
        }, {
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "id": "461",
            "blr": 0
        }, {
            "blr": 0,
            "end": 0,
            "alr": 1,
            "bwq": 0,
            "id": "246"
        }, {
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "id": "253",
            "blr": 0
        }, {
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "id": "240",
            "blr": 0
        }, {
            "blr": 0,
            "bwq": 0,
            "end": 0,
            "alr": 1,
            "id": "200"
        }, {
            "id": "77",
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "blr": 0
        }, {
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "id": "3",
            "blr": 0
        }, {
            "blr": 0,
            "end": 0,
            "alr": 1,
            "bwq": 0,
            "id": "13"
        }, {
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "id": "28",
            "blr": 0
        }, {
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "id": "68",
            "blr": 0
        }, {
            "id": "336",
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "blr": 0
        }, {
            "blr": 0,
            "id": "67",
            "end": 0,
            "alr": 1,
            "bwq": 0
        }, {
            "blr": 0,
            "id": "161",
            "end": 0,
            "alr": 1,
            "bwq": 0
        }, {
            "blr": 0,
            "bwq": 0,
            "end": 0,
            "alr": 1,
            "id": "106"
        }, {
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "id": "403",
            "blr": 0
        }, {
            "blr": 0,
            "id": "96",
            "bwq": 0,
            "end": 0,
            "alr": 1
        }, {
            "id": "150",
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "blr": 0
        }, {
            "id": "112",
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "blr": 0
        }, {
            "blr": 0,
            "bwq": 0,
            "end": 0,
            "alr": 1,
            "id": "166"
        }, {
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "id": "230",
            "blr": 0
        }, {
            "blr": 0,
            "id": "170",
            "bwq": 0,
            "end": 0,
            "alr": 1
        }, {
            "blr": 0,
            "id": "262",
            "bwq": 0,
            "end": 0,
            "alr": 1
        }, {
            "blr": 0,
            "id": "263",
            "end": 0,
            "alr": 1,
            "bwq": 0
        }, {
            "blr": 0,
            "end": 0,
            "alr": 1,
            "bwq": 0,
            "id": "266"
        }, {
            "blr": 0,
            "end": 0,
            "alr": 1,
            "bwq": 0,
            "id": "265"
        }, {
            "blr": 0,
            "bwq": 0,
            "end": 0,
            "alr": 1,
            "id": "314"
        }, {
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "id": "225",
            "blr": 0
        }, {
            "id": "226",
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "blr": 0
        }, {
            "blr": 0,
            "id": "111",
            "end": 0,
            "alr": 1,
            "bwq": 0
        }, {
            "blr": 0,
            "end": 0,
            "alr": 1,
            "bwq": 0,
            "id": "227"
        }, {
            "blr": 0,
            "id": "228",
            "bwq": 0,
            "end": 0,
            "alr": 1
        }, {
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "id": "165",
            "blr": 0
        }, {
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "id": "229",
            "blr": 0
        }, {
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "id": "232",
            "blr": 0
        }, {
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "id": "123",
            "blr": 0
        }, {
            "blr": 0,
            "id": "259",
            "bwq": 0,
            "end": 0,
            "alr": 1
        }, {
            "blr": 0,
            "id": "258",
            "bwq": 0,
            "end": 0,
            "alr": 1
        }, {
            "blr": 0,
            "end": 0,
            "alr": 1,
            "bwq": 0,
            "id": "264"
        }, {
            "blr": 0,
            "end": 0,
            "alr": 1,
            "bwq": 0,
            "id": "306"
        }, {
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "id": "316",
            "blr": 0
        }, {
            "blr": 0,
            "end": 0,
            "alr": 1,
            "bwq": 0,
            "id": "317"
        }, {
            "blr": 0,
            "id": "318",
            "bwq": 0,
            "end": 0,
            "alr": 1
        }, {
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "id": "334",
            "blr": 0
        }, {
            "id": "420",
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "blr": 0
        }, {
            "id": "446",
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "blr": 0
        }, {
            "blr": 0,
            "id": "462",
            "end": 0,
            "alr": 1,
            "bwq": 0
        }, {
            "blr": 0,
            "bwq": 0,
            "end": 0,
            "alr": 1,
            "id": "463"
        }, {
            "blr": 0,
            "id": "233",
            "bwq": 0,
            "end": 0,
            "alr": 1
        }, {
            "blr": 0,
            "end": 0,
            "alr": 1,
            "bwq": 0,
            "id": "234"
        }];
        if (utag.gdpr) {
            var consentEnabled = true;
            var preferencesEnabled = true;
            var doNotSellEnabled = false;
            utag.gdpr.doNotSell = utag.gdpr.doNotSell || {};
            utag.gdpr.preferences_prompt = utag.gdpr.preferences_prompt || {};
            utag.gdpr.consent_prompt = utag.gdpr.consent_prompt || {};
            utag.gdpr.applyConsentState = function() {
                var enforcementMode = utag.gdpr.getEnforcementMode();
                if (enforcementMode === 'none') return;
                utag.DB('Consent Manager: Applying consent');
                try {
                    var i, lc = utag.loader.cfg,
                        cs = utag.gdpr.getConsentState(),
                        ot = utag.gdpr.omittedTags || {};
                    if (typeof cs === 'number') {
                        if ((utag.gdpr.consent_prompt.isEnabled && parseInt(cs) !== 1) || ((!consentEnabled && preferencesEnabled && enforcementMode === 'opt-in') && (parseInt(cs) === -1 || parseInt(cs) === 0))) {
                            utag.DB('Consent Manager: Setting all tags to off');
                            for (i in utag.loader.GV(lc)) {
                                if (typeof ot[i] === 'undefined') {
                                    lc[i].load = 0;
                                }
                            }
                        }
                    } else if (((utag.gdpr.consent_prompt.isEnabled || utag.gdpr.preferences_prompt.isEnabled) || (!consentEnabled && preferencesEnabled)) && enforcementMode === 'opt-in') {
                        utag.DB('Consent Manager: Partial Consent');
                        for (i in utag.loader.GV(lc)) {
                            if (typeof ot[i] === 'undefined') {
                                if (lc[i].tcat > 0 && cs[lc[i].tcat - 1].ct != '1') {
                                    lc[i].load = 0;
                                }
                            }
                        }
                    }
                    var btl = utag.gdpr.dns ? utag.gdpr.dns.getBlockedDnsTagLookup() : null;
                    utag.DB('Consent Manager: Do Not Sell Tags');
                    if (enforcementMode === 'opt-out' && btl) {
                        for (i in utag.loader.GV(lc)) {
                            if (parseInt(btl[i]) === 1) {
                                lc[i].load = 0;
                            }
                        }
                    }
                    try {
                        if (window.tealiumConsentRegister && window.tealiumConsentRegister.currentDecision === null) {
                            var cookieValues = utag.gdpr.getCookieValues();
                            var hasDnsCookie = typeof cookieValues.dns === 'string';
                            var hasConsentCookie = typeof cookieValues.consent === 'string';
                            var decisionType = (enforcementMode === 'opt-in' && hasConsentCookie) || (enforcementMode === 'opt-out' && hasDnsCookie) ? 'explicit' : 'implicit';
                            var decision = (decisionType === 'implicit' && enforcementMode === 'opt-in') ? [] : utag.gdpr.getSelectedCategories();
                            decision.unshift('always_on');
                            decision.type = decisionType;
                            window.tealiumConsentRegister.addConsentDecision(decision);
                        }
                    } catch (e) {
                        utag.DB(e);
                    }
                } catch (e) {
                    utag.DB(e);
                }
            };
            utag.gdpr.promptEnabledSetting = function() {
                if (!utag.gdpr.dr && (utag.cfg.readywait || utag.cfg.waittimer)) {
                    utag.gdpr.dr = 1;
                    return;
                }
                utag.gdpr.consent_prompt.wasInitiallyEnabled = consentEnabled;
                utag.gdpr.preferences_prompt.wasInitiallyEnabled = preferencesEnabled;
                utag.gdpr.doNotSell.wasInitiallyEnabled = doNotSellEnabled;
                if (consentEnabled === true && !(1)) {
                    utag.gdpr.consent_prompt.isEnabled = false;
                }
                if (preferencesEnabled === true && (consentEnabled === true && !(1))) {
                    utag.gdpr.preferences_prompt.isEnabled = false;
                }
                if (doNotSellEnabled === true && !(1)) {
                    utag.gdpr.doNotSell.isEnabled = false;
                }
                if (preferencesEnabled === true && consentEnabled === false && !(1)) {
                    utag.gdpr.preferences_prompt.isEnabled = true;
                }
            };
            var splitGdprModules = false;
            if (typeof utag.gdpr.getEnforcementMode !== 'function') {
                splitGdprModules = true;
            }
            utag.gdpr.getEnforcementMode = function() {
                utag.gdpr.promptEnabledSetting();
                var optInModulesAreActive = (utag.gdpr.consent_prompt && utag.gdpr.consent_prompt.isEnabled === true);
                var optOutModuleIsActive = (utag.gdpr.doNotSell && utag.gdpr.doNotSell.isEnabled === true);
                var optInPreferencesOnly = (!optInModulesAreActive && !utag.gdpr.consent_prompt.wasInitiallyEnabled && utag.gdpr.preferences_prompt.wasInitiallyEnabled && !optOutModuleIsActive) || (splitGdprModules && utag.gdpr.preferences_prompt && utag.gdpr.preferences_prompt.wasInitiallyEnabled);
                var enforcementMode = 'opt-in';
                if (optOutModuleIsActive && !optInModulesAreActive) enforcementMode = 'opt-out';
                if (!optOutModuleIsActive && optInPreferencesOnly) enforcementMode = 'opt-in';
                if (!optOutModuleIsActive && !optInModulesAreActive && !optInPreferencesOnly) enforcementMode = 'none';
                return enforcementMode;
            };
        }
        utag.loader.initcfg = function() {
            utag.loader.cfg = {
                "188": {
                    load: utag.cond[108],
                    tcat: 3,
                    send: 1,
                    v: 201807171256,
                    wait: 1,
                    tid: 4001
                },
                "189": {
                    load: utag.cond[109],
                    tcat: 3,
                    send: 1,
                    v: 201807171256,
                    wait: 1,
                    tid: 4001
                },
                "190": {
                    load: utag.cond[110],
                    tcat: 3,
                    send: 1,
                    v: 201807171256,
                    wait: 1,
                    tid: 4001
                },
                "285": {
                    load: utag.cond[108],
                    tcat: 3,
                    send: 1,
                    v: 201807171256,
                    wait: 1,
                    tid: 4001
                },
                "286": {
                    load: utag.cond[109],
                    tcat: 3,
                    send: 1,
                    v: 201807171256,
                    wait: 1,
                    tid: 4001
                },
                "287": {
                    load: utag.cond[110],
                    tcat: 3,
                    send: 1,
                    v: 201807171256,
                    wait: 1,
                    tid: 4001
                },
                "514": {
                    load: utag.cond[271],
                    tcat: 3,
                    send: 1,
                    v: 202010060818,
                    wait: 1,
                    tid: 4001
                },
                "517": {
                    load: utag.cond[110],
                    tcat: 3,
                    send: 1,
                    v: 202302081153,
                    wait: 1,
                    tid: 4001
                },
                "521": {
                    load: utag.cond[274],
                    tcat: 3,
                    send: 1,
                    v: 202511251626,
                    wait: 1,
                    tid: 4001
                },
                "522": {
                    load: ((utag.cond[275])),
                    tcat: 3,
                    send: 1,
                    v: 202303081044,
                    wait: 1,
                    tid: 4001
                },
                "525": {
                    load: ((utag.cond[276])),
                    tcat: 3,
                    send: 1,
                    v: 202303211144,
                    wait: 1,
                    tid: 4001
                },
                "526": {
                    load: 1,
                    tcat: 3,
                    send: 1,
                    v: 202304251230,
                    wait: 1,
                    tid: 4001
                },
                "527": {
                    load: 1,
                    tcat: 3,
                    send: 1,
                    v: 202304251230,
                    wait: 1,
                    tid: 4001
                },
                "536": {
                    load: ((utag.cond[279])),
                    tcat: 3,
                    send: 1,
                    v: 202511251626,
                    wait: 1,
                    tid: 20064
                }
            };
            utag.loader.cfgsort = ["188", "189", "190", "285", "286", "287", "514", "517", "521", "522", "525", "526", "527", "536"];
            if (utag.gdpr && utag.gdpr.getEnforcementMode() === 'opt-in') {
                Object.keys(utag.loader.cfg).forEach(function(tagId) {
                    if (utag.loader.cfg[tagId].tcat === 16) {
                        utag.DB('Consent Manager: Removing uncategorized tag from utag.loader.cfg in opt-in mode: ' + tagId);
                        delete utag.loader.cfg[tagId];
                        utag.loader.cfgsort = utag.loader.cfgsort.filter(function(id) {
                            return id !== tagId;
                        });
                    }
                })
            }
        }
        utag.loader.initcfg();
        try {
            utag.gdpr.applyConsentState();
        } catch (e) {
            utag.DB(e)
        }
    }
    utag.gdpr = {
        trackUIDs: [],
        consent_prompt: {
            noShow: false,
            isEnabled: true,
            content: {}
        },
        preferences_prompt: {
            single_cookie: false,
            noShow: false,
            isEnabled: true,
            defaultState: false,
            content: {},
            categories: {
                "engagement": {
                    "id": 13,
                    "enabled": "1"
                },
                "cookiematch": {
                    "enabled": "1",
                    "id": 10
                },
                "analytics": {
                    "enabled": "1",
                    "id": 1
                },
                "cdp": {
                    "id": 11,
                    "enabled": "1"
                },
                "social": {
                    "id": 7,
                    "enabled": "1"
                },
                "affiliates": {
                    "enabled": "1",
                    "id": 2
                },
                "crm": {
                    "id": 15,
                    "enabled": "1"
                },
                "uncategorized": {
                    "id": 16,
                    "enabled": "0"
                },
                "misc": {
                    "id": 9,
                    "enabled": "1"
                },
                "mobile": {
                    "enabled": "1",
                    "id": 12
                },
                "monitoring": {
                    "enabled": "1",
                    "id": 14
                },
                "email": {
                    "id": 5,
                    "enabled": "1"
                },
                "search": {
                    "enabled": "1",
                    "id": 4
                },
                "display_ads": {
                    "id": 3,
                    "enabled": "1"
                },
                "big_data": {
                    "enabled": "1",
                    "id": 8
                },
                "personalization": {
                    "enabled": "1",
                    "id": 6
                }
            }
        },
        doNotSell: {
            noShow: false,
            isEnabled: false
        },
        getCategories: function(onlyEnabledCats) {
            if (!(utag.gdpr.preferences_prompt && utag.gdpr.preferences_prompt.categories)) {
                return [];
            }
            var length = utag.gdpr.keys(utag.gdpr.preferences_prompt.categories).length,
                cats = new Array(length),
                gdpr_cats = utag.gdpr.preferences_prompt.categories;
            for (var cat in gdpr_cats) {
                if (!gdpr_cats.hasOwnProperty(cat)) {
                    continue;
                }
                var isCatEnabled = gdpr_cats[cat].enabled === true || gdpr_cats[cat].enabled == 1;
                if (onlyEnabledCats && !isCatEnabled) {
                    continue;
                }
                cats[gdpr_cats[cat].id - 1] = cat;
            }
            for (var i = cats.length - 1; i >= 0; i--) {
                if (cats[i] === undefined) {
                    cats.splice(i, 1);
                }
            }
            return cats;
        },
        getSelectedCategories: function() {
            var sc = [],
                gc = utag.gdpr.getCategories(),
                cs = utag.gdpr.getConsentState(),
                i;
            try {
                if (typeof cs === "number") {
                    return (parseInt(cs) === 1) ? gc : sc;
                } else {
                    for (i in utag.loader.GV(cs)) {
                        if ("1" === cs[i].ct) {
                            sc.push(gc[i]);
                        }
                    }
                }
            } catch (e) {
                utag.DB(e);
            }
            return sc;
        },
        getCategoryLanguage: function(category) {
            if (!(utag.gdpr.preferences_prompt && utag.gdpr.preferences_prompt.categories)) {
                return [];
            }
            var language = utag.gdpr.getLanguage(utag.gdpr.preferences_prompt);
            return utag.gdpr.preferences_prompt.languages[language].categories[category];
        },
        getConsentState: function() {
            var re = /^c\d+/,
                cd = utag.gdpr.getCookieValues(),
                np = 1,
                gc = utag.gdpr.getCategories(),
                pc = (function(gc) {
                    var pc = [];
                    for (var i = 0; i < gc.length; i++) {
                        pc.push({
                            ct: null,
                            name: gc[i]
                        });
                    }
                    return pc;
                }(gc)),
                filteredCD = (function(cd) {
                    var d = {};
                    for (var prop in cd) {
                        if (!cd.hasOwnProperty(prop)) {
                            continue;
                        }
                        if (re.test(prop)) {
                            d[prop] = cd[prop];
                        }
                    }
                    return d;
                }(cd));
            filteredCD = utag.gdpr.sortedObject(filteredCD, function(val1, val2) {
                var idx1 = parseInt((val1 || "").substring(1), 10),
                    idx2 = parseInt((val2 || "").substring(1), 10);
                if (isNaN(idx1) || isNaN(idx2)) {
                    return 0;
                }
                return idx1 > idx2 ? 1 : -1;
            });
            for (var cn in utag.loader.GV(filteredCD)) {
                if (cn.match(re)) {
                    var idx = parseInt(cn.substring(1), 10) - 1,
                        ct = gc[idx];
                    pc[idx].ct = cd[cn];
                    if (cd[cn] * 1 !== 1) {
                        np = 0;
                    }
                }
            }
            if (cd.consent) {
                if (cd.consent === true || cd.consent === "true") {
                    return np ? np : pc;
                } else {
                    return -1;
                }
            } else if (np === 0) {
                return pc;
            } else {
                return 0;
            }
        },
        getCookieValues: function() {
            var values = {},
                rcd = (function() {
                    var value = "; " + document.cookie;
                    var parts = value.split("; " + utag.gdpr.cookieNS + "=");
                    if (parts.length == 2) return utag.ut.decode(parts.pop().split(";").shift());
                }()),
                cd = utag.gdpr.typeOf(rcd) === "string" ? rcd : "";
            if (utag.data && cd) {
                utag.data["cp." + utag.gdpr.cookieNS] = cd;
            }
            if (cd) {
                var i, optOut, optOutData = decodeURI(cd).split("|");
                for (i = 0; i < optOutData.length; i++) {
                    optOut = optOutData[i].split(":");
                    values[optOut[0]] = optOut[1];
                }
            }
            utag.gdpr.values = values;
            return values;
        },
        getDeTokenizedContent: function(data, _lang) {
            if (utag.gdpr.isEmpty(data)) return null;
            var tokenRegExpPattern = /{{(.*?)}}/gm,
                token_match = /[{}]/g,
                two_part = /display_ads|big_data/;
            var lang = utag.gdpr.getLanguage(data, _lang),
                langData = utag.gdpr.clone(data.languages[lang]);
            for (var t1 in utag.gdpr.sortedObject(langData.common_tokens)) {
                if (!langData.common_tokens.hasOwnProperty(t1)) {
                    continue;
                }
                langData.common_tokens[t1] = tokenReplace(langData.common_tokens[t1]);
            }
            for (var t2 in utag.gdpr.sortedObject(langData.custom_tokens)) {
                if (!langData.custom_tokens.hasOwnProperty(t2)) {
                    continue;
                }
                langData.custom_tokens[t2] = tokenReplace(langData.custom_tokens[t2]);
            }

            function tokenReplace(str) {
                if (!str) return str;
                var replacements = str.match(tokenRegExpPattern);
                if (!replacements) return str;
                for (var i = 0; i < replacements.length; i++) {
                    var token = replacements[i].replace(token_match, "") || "";
                    var regExpReplaceAll = new RegExp(replacements[i], "g");
                    if (langData.common_tokens[token]) {
                        str = str.replace(regExpReplaceAll, langData.common_tokens[token]);
                    } else if (langData.custom_tokens[token]) {
                        str = str.replace(regExpReplaceAll, langData.custom_tokens[token]);
                    } else if (langData.categories && token.indexOf("category_") > -1) {
                        var split_token = token.split("_");
                        if (token.match(two_part)) {
                            split_token[1] = split_token[1] + "_" + split_token[2];
                            split_token.splice(2, 1);
                        }
                        var category = langData.categories[split_token[1]],
                            key = {
                                "title": "name",
                                "description": "notes"
                            }[split_token[2]];
                        if (category[key]) {
                            str = str.replace(regExpReplaceAll, category[key]);
                        }
                    }
                }
                return str;
            }
            return {
                language: lang,
                tokens: langData,
                js: tokenReplace(data.content.js),
                html: tokenReplace(data.content.html),
                css: tokenReplace(data.content.css)
            };
        },
        getLanguage: function(promptData, preferredLang) {
            var udoName = window.utag.udoname || "utag_data";
            var dataObject = window.utag.data || window[udoName];
            var langLocale = (preferredLang || dataObject[window.utag.cfg.gdprDLRef] || (navigator.languages && navigator.languages[0] || navigator.language || navigator.userLanguage)).toLowerCase();
            var lang = (langLocale || "").split("-")[0];
            if (!promptData) {
                return langLocale;
            }
            var languages = promptData.languages;
            return languages[langLocale] ? langLocale : languages[lang] ? lang : promptData.defaultLang;
        },
        getTokenLanguage: function(promptData, token, lang) {
            if (utag.gdpr.isEmpty(promptData)) return null;
            if (utag.gdpr.isEmpty(token)) return null;
            var getDeTokenizedContent = utag.gdpr.getDeTokenizedContent(promptData, lang);
            var langData = getDeTokenizedContent.tokens;
            if (lang && getDeTokenizedContent.language !== lang) return null;
            if (utag.gdpr.isEmpty(langData)) return null;
            if (langData.common_tokens[token]) {
                return langData.common_tokens[token];
            } else if (langData.custom_tokens[token]) {
                return langData.custom_tokens[token];
            } else if (langData.categories && token.indexOf("category_") > -1) {
                var split_token = token.split("_"),
                    category = langData.categories[split_token[1]];
                if (category[split_token[2]]) {
                    return category[split_token[2]];
                }
            }
            return null;
        },
        refreshCookie: function() {
            if (utag && utag.DB) {
                utag.DB("utag.gdpr.refreshCookie has been deprecated");
            }
        },
        setCookie: function(cookieData) {
            utag.DB("Consent Manager: Set Cookie");
            if (utag.gdpr.typeOf(cookieData) !== "object") {
                return;
            }
            if (utag.gdpr.keys(cookieData).length === 0) {
                return;
            }
            var consentType = utag.gdpr.typeOf(cookieData.consent);
            if (consentType === "number") {
                cookieData.consent = cookieData.consent == 1;
                consentType = utag.gdpr.typeOf(cookieData.consent);
            }
            if (consentType !== "boolean" && !(consentType === "string" && (cookieData.consent.toLowerCase() === "true" || cookieData.consent.toLowerCase() === "false"))) {
                utag.DB("Invalid option sent to setCookie [consent must be true/false]");
                return;
            }
            if (utag.gdpr.typeOf(cookieData.ts) !== "number" || (cookieData.ts.toString().length !== 13)) {
                cookieData.ts = new Date().getTime();
            }
            utag.gdpr.values = cookieData;
            var mo2Val = [];
            for (var i in utag.loader.GV(cookieData)) {
                if (/^(consent|dns|ts|c\d+)$/.test(i)) {
                    mo2Val.push(i + ":" + cookieData[i]);
                } else {
                    utag.DB("Invalid option sent to setCookie [" + i + "], is unknown");
                }
            }
            var daysToSet = utag.gdpr.consentPeriod;
            if (!daysToSet) {
                var expiryMonths = cookieData.dns == undefined ? 12 : 13;
                var today = new Date();
                today.setMonth(today.getMonth() + expiryMonths);
                daysToSet = Math.ceil((today.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
            }
            var expiry = new Date(cookieData.ts);
            expiry.setDate(expiry.getDate() + daysToSet);
            var cookie_string = [utag.gdpr.cookieNS + "=" + encodeURI(mo2Val.join("|")), "path=" + utag.gdpr.path, "expires=" + expiry.toGMTString()];
            if (utag.gdpr.domain) {
                cookie_string.push("domain=" + utag.gdpr.domain);
            }
            document.cookie = cookie_string.join("; ");
            utag.data["cp." + utag.gdpr.cookieNS] = mo2Val.join("|");
        },
        defaultConsentForDoNotSell: function(key, cookieData) {
            if (key === 'dns') {
                var consentType = utag.gdpr.typeOf(cookieData.consent);
                if (consentType === "undefined") {
                    utag.DB("Consent Manager: Defaulting missing consent for Do Not Sell.");
                    cookieData.consent = "true";
                }
            }
            return cookieData;
        },
        setCookieValue: function(key, value) {
            utag.DB("Consent Manager: Set Cookie Value");
            if (!key || (utag.gdpr.typeOf(value) === "undefined" || utag.gdpr.typeOf(value) === "null")) return;
            var cookieData = utag.handler.C(utag.gdpr.getCookieValues());
            cookieData[key] = value;
            cookieData = utag.gdpr.defaultConsentForDoNotSell(key, cookieData);
            utag.gdpr.setCookie(cookieData);
        },
        setConsentValue: function(_response) {
            utag.DB("Consent Manager: Set Consent Value: " + _response);
            var valid = {
                true: 1,
                "true": 1,
                1: 1,
                false: 0,
                "false": 0,
                0: 0
            };
            if (!valid.hasOwnProperty(_response)) {
                throw new Error("No response supplied");
            }
            var response = valid[_response] === 1;
            utag.gdpr.setCookieValue("ts", new Date().getTime());
            utag.gdpr.setCookieValue("consent", response);
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "https://collect.tealiumiq.com/event");
            if (response) {
                xhr.send('{"tealium_account":"royalmail","tealium_profile":"' + (utag.gdpr.eventProfile || "eventstore") + '","tealium_event":"grant_full_consent","consent_categories":"' + utag.gdpr.getCategories(true).join(", ") + '","policy":"gdpr", "tealium_visitor_id" : "' + utag.data['tealium_visitor_id'] + '"}');
            } else {
                xhr.send('{"tealium_account":"royalmail","tealium_profile":"' + (utag.gdpr.eventProfile || "eventstore") + '","tealium_event":"decline_consent","consent_categories":"","policy":"gdpr", "tealium_visitor_id" : "' + utag.data['tealium_visitor_id'] + '"}');
            }
        },
        setPreferencesValues: function(categories, noCollect) {
            utag.DB("Consent Manager: Set Preferences Values");
            var i, fld, cookie_data = utag.gdpr.getCookieValues(),
                lookup = {},
                rgx = /\D/,
                names = utag.gdpr.getCategories(),
                chosen_list = [],
                consent_seen = false,
                decline_seen = false,
                crgx = /c\d/;
            if (utag.gdpr.typeOf(categories) !== "object") {
                utag.DB("Categories is not type object.");
                return;
            }
            try {
                for (i = 0; i < names.length; i++) {
                    lookup[names[i]] = "c" + (i + 1);
                }
                for (var cat in categories) {
                    if (!categories.hasOwnProperty(cat)) {
                        continue;
                    }
                    if (categories[cat] !== "1" && categories[cat] !== "0" && categories[cat] !== 1 && categories[cat] !== 0) {
                        continue;
                    }
                    if (cat.match(rgx)) {
                        cookie_data[lookup[cat]] = categories[cat];
                        if (categories[cat] != 0) {
                            chosen_list.push(cat);
                        }
                    } else {
                        cookie_data["c" + cat] = categories[cat];
                        if (categories[cat] != 0) {
                            chosen_list.push(names[cat - 1]);
                        }
                    }
                }
                for (fld in utag.loader.GV(cookie_data)) {
                    if (fld.match(crgx)) {
                        if (cookie_data[fld] != 0) {
                            consent_seen = true;
                        } else {
                            decline_seen = true;
                        }
                    }
                }
                cookie_data["ts"] = new Date().getTime();
                cookie_data["consent"] = consent_seen;
                utag.gdpr.setCookie(cookie_data);
                utag.gdpr.processQueue(consent_seen);
            } catch (e) {
                utag.DB(e);
            }
            if (noCollect) {
                return;
            }
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "https://collect.tealiumiq.com/event");
            if (decline_seen) {
                if (consent_seen) {
                    xhr.send('{"tealium_account":"royalmail","tealium_profile":"' + (utag.gdpr.eventProfile || "eventstore") + '","tealium_event":"grant_partial_consent","consent_categories":"' + chosen_list.join(",") + '","policy":"gdpr", "tealium_visitor_id" : "' + utag.data['tealium_visitor_id'] + '"}');
                } else {
                    xhr.send('{"tealium_account":"royalmail","tealium_profile":"' + (utag.gdpr.eventProfile || "eventstore") + '","tealium_event":"decline_consent","consent_categories":"","policy":"gdpr", "tealium_visitor_id" : "' + utag.data['tealium_visitor_id'] + '"}');
                }
            } else if (!decline_seen && consent_seen) {
                xhr.send('{"tealium_account":"royalmail","tealium_profile":"' + (utag.gdpr.eventProfile || "eventstore") + '","tealium_event":"grant_full_consent","consent_categories":"' + utag.gdpr.getCategories(true).join(", ") + '","policy":"gdpr", "tealium_visitor_id" : "' + utag.data['tealium_visitor_id'] + '"}');
            }
        },
        setAllCategories: function(state, noCollect) {
            utag.DB("Consent Manager: Set Preferences All Categories: " + state);
            if (state === undefined) return;
            if (utag.gdpr.typeOf(state) !== "boolean") return;
            var allCats = utag.gdpr.getCategories(),
                prefs = {};
            for (var i = 0; i < allCats.length; i++) {
                prefs["" + (i + 1)] = state ? "1" : "0";
            }
            utag.gdpr.setPreferencesValues(prefs, noCollect);
        },
        setPreferencesFromList: function(list) {
            utag.DB("Consent Manager: Set Preferences From List");
            var prefs = {},
                allCats = utag.gdpr.getCategories();
            if (utag.gdpr.typeOf(list) !== "array") {
                utag.DB("List should be of type array");
                return;
            }
            for (var i = 0; i < list.length; i++) {
                prefs[list[i]] = "1";
            }
            for (var j = 0; j < allCats.length; j++) {
                if (!prefs[allCats[j]]) {
                    prefs[allCats[j]] = "0";
                }
            }
            utag.gdpr.setPreferencesValues(prefs);
        },
        processQueue: function(consent_seen) {
            utag.DB("Consent Manager: Processing Consent Queue");
            if (utag.gdpr.noqueue) {
                return;
            }
            if (!consent_seen) {
                utag.gdpr.queue = [];
                return;
            }
            utag.DB("Consent Manager: Processing Consent Queue Length: " + utag.gdpr.queue.length);
            var event, data, conds = {};
            utag.gdpr.merge(conds, utag.cond);
            for (var i = 0; i < utag.gdpr.queue.length; i++) {
                event = utag.gdpr.queue[i];
                if (!(event.cfg && event.cfg.uids)) {
                    data = {};
                    utag.loader.RD(data, event.event);
                    utag.gdpr.merge(data, event.data, true);
                    for (var cond in conds) {
                        if (!conds.hasOwnProperty(cond)) {
                            continue;
                        }
                        conds[cond] = 0;
                    }
                    utag.handler.RE(event.event, data, "blr");
                    utag.loader.loadrules(data, conds);
                    event.cfg = event.cfg || {};
                    event.cfg.uids = [];
                    event.data = data;
                    utag.cond = conds;
                    utag.loader.initcfg();
                    utag.gdpr.applyConsentState();
                    var consentState = utag.gdpr.getConsentState();
                    var csType = utag.gdpr.typeOf(consentState);
                    for (var id in utag.loader.GV(utag.loader.cfg)) {
                        if (utag.gdpr.omittedTags[id]) continue;
                        var tag = utag.loader.cfg[id];
                        if (tag.load && tag.send) {
                            if (tag.tcat !== 0) {
                                if ((csType === "array" && consentState[tag.tcat - 1].ct == "1") || (csType === "number" && consentState == 1)) {
                                    event.cfg.uids.push(id);
                                }
                            } else if (tag.tcat === 0) {
                                event.cfg.uids.push(id);
                            }
                        }
                    }
                }
                if (event.cfg.uids) {
                    for (var indexCfgUID = event.cfg.uids.length - 1; indexCfgUID > -1; indexCfgUID--) {
                        if (!utag.gdpr.omittedTags[event.cfg.uids[indexCfgUID]]) continue;
                        event.cfg.uids.splice(indexCfgUID, 1);
                    }
                    utag.gdpr.trackUIDs = utag.gdpr.trackUIDs.concat(event.cfg.uids);
                }
                utag.track_old.call(this, event);
            }
            utag.gdpr.queue = [];
        },
        typeOf: function(e) {
            return ({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
        },
        merge: function(a, b, c, d) {
            if (c) {
                for (d in utag.loader.GV(b)) {
                    a[d] = b[d];
                }
            } else {
                for (d in utag.loader.GV(b)) {
                    if (typeof a[d] == "undefined")
                        a[d] = b[d];
                }
            }
        },
        shouldTagFire: function(taguid) {
            if (!taguid && utag.gdpr.typeOf(utag.gdpr.trackUIDs) !== "array") return true;
            var lc = utag.loader.cfg,
                cs = utag.gdpr.getConsentState(),
                uid = taguid || utag.gdpr.trackUIDs.shift();
            if (utag.gdpr.typeOf(uid) === "undefined") return true;
            utag.DB("Consent Manager: Applying consent: " + uid);
            var csTYpe = utag.gdpr.typeOf(cs);
            var tag = lc[uid];
            var blockedTagLookup = utag.gdpr.dns ? utag.gdpr.dns.getBlockedDnsTagLookup() : {};
            if (!utag.gdpr.omittedTags[uid] && tag.send && tag.tcat !== 0) {
                if ((csTYpe === "array" && cs[tag.tcat - 1].ct == "1") || (csTYpe === "number" && cs == 1) || parseInt(blockedTagLookup[uid]) === 1) {
                    utag.DB("Consent Manager: Applying consent: " + uid + " allowed to send");
                    return false;
                }
            } else if ((utag.gdpr.omittedTags[uid] || tag.tcat == 0) && tag.send) {
                utag.DB("Consent Manager: Omitted Tag: " + uid + " allowed to send");
                return false;
            }
            utag.DB("Consent Manager: Applying consent: " + uid + " not allowed to send");
            return true;
        },
        applyConsentState: function() {
            utag.DB("Consent Manager: Applying consent");
            try {
                var i, lc = utag.loader.cfg,
                    cs = utag.gdpr.getConsentState(),
                    ot = utag.gdpr.omittedTags;
                if (typeof cs === "number") {
                    if ((utag.gdpr.consent_prompt.isEnabled && parseInt(cs) !== 1) || ((!utag.gdpr.consent_prompt.isEnabled && utag.gdpr.preferences_prompt.isEnabled) && parseInt(cs) === -1)) {
                        utag.DB("Consent Manager: Setting all tags to off");
                        for (i in utag.loader.GV(lc)) {
                            if (typeof ot[i] === "undefined") {
                                lc[i].load = 0;
                            }
                        }
                    }
                } else if (utag.gdpr.consent_prompt.isEnabled || utag.gdpr.preferences_prompt.isEnabled) {
                    utag.DB("Consent Manager: Partial Consent");
                    for (i in utag.loader.GV(lc)) {
                        if (typeof ot[i] === "undefined") {
                            if (lc[i].tcat > 0 && cs[lc[i].tcat - 1].ct != "1") {
                                lc[i].load = 0;
                            }
                        }
                    }
                }
                var btl = utag.gdpr.dns ? utag.gdpr.dns.getBlockedDnsTagLookup() : null;
                utag.DB("Consent Manager: Do Not Sell Tags");
                if (btl) {
                    for (i in utag.loader.GV(lc)) {
                        if (parseInt(btl[i]) === 1) {
                            lc[i].load = 0;
                        }
                    }
                }
            } catch (e) {
                utag.DB(e);
            }
        },
        updateConsentCookie: function(consent_categories) {
            utag.DB("Consent Manager: Updating consent cookie");
            var list, listType = utag.gdpr.typeOf(consent_categories);
            if (listType === "string") {
                list = consent_categories.split(/\s*,\s*/);
            } else if (listType !== "array") {
                list = [];
            } else {
                list = consent_categories.slice();
            }
            if (list.length === 0) {
                utag.gdpr.setConsentValue(false);
                utag.gdpr.setAllCategories(false);
                return;
            }
            utag.gdpr.setPreferencesFromList(list);
        },
        keys: function(obj) {
            if (Object.keys) {
                return Object.keys(obj);
            }
            var array = [];
            for (var prop in obj) {
                if (!obj.hasOwnProperty(prop)) {
                    continue;
                }
                array.push(prop);
            }
            return array;
        },
        sortedObject: function(obj, func) {
            var _obj = {};
            if (obj !== undefined) {
                var _k1 = utag.gdpr.keys(obj).sort(func);
                for (var z = 0; z < _k1.length; z++) {
                    _obj[_k1[z]] = obj[_k1[z]];
                }
            }
            return _obj;
        },
        clone: function(a) {
            var level = 0;
            return cloner(a);

            function cloner(a) {
                var b = {};
                var c;
                level++;
                if (level === 5) return a;
                for (c in utag.loader.GV(a)) {
                    if (utag.gdpr.typeOf(a[c]) === "array") {
                        b[c] = a[c].slice(0)
                    } else if (utag.gdpr.typeOf(a[c]) === "object") {
                        b[c] = cloner(a[c]);
                    } else {
                        b[c] = a[c];
                    }
                }
                level--;
                return b;
            }
        },
        isEmpty: function(obj) {
            var t = utag.gdpr.typeOf(obj);
            switch (t) {
                case "string":
                case "array":
                    return obj.length === 0;
                case "object":
                    for (var p in obj) {
                        if (!obj.hasOwnProperty(p)) {
                            continue;
                        }
                        return false;
                    }
                default:
                    return true;
            }
        },
        queue: [],
        domain: window.utag_cfg_ovrd && window.utag_cfg_ovrd.domain || utag.cfg.domain,
        path: window.utag_cfg_ovrd && window.utag_cfg_ovrd.cookie_path || "/",
        noqueue: window.utag_cfg_ovrd && window.utag_cfg_ovrd.nogdprqueue || false,
        noview: window.utag_cfg_ovrd && window.utag_cfg_ovrd.noview || false,
        consentPeriod: (window.utag_cfg_ovrd && window.utag_cfg_ovrd.consentPeriod) || 0,
        cookieNS: window.utag_cfg_ovrd && window.utag_cfg_ovrd.cmcookiens || "CONSENTMGR",
        eventProfile: window.utag_cfg_ovrd && window.utag_cfg_ovrd.cmeventprofile || "eventstore" || "main",
        omittedTags: {}
    };
    if (window.utag_cfg_ovrd && window.utag_cfg_ovrd.domain == "") {
        utag.gdpr.domain = "";
    }
    utag.loader.initdataOld = utag.loader.initdata;
    utag.loader.initdata = function() {
        utag.loader.initdataOld();
        if (utag.gdpr.getConsentState() !== 0) return;
        if (utag.gdpr.noview) return;
        if (!utag.loader.rd_flag && !utag.gdpr.noqueue) {
            utag.gdpr.queue.push({
                event: "view",
                data: utag.handler.C(utag.data)
            });
        }
    };
    utag.gdpr.promptEnabledSetting = function() {
        if (!utag.gdpr.dr && (utag.cfg.readywait || utag.cfg.waittimer)) {
            utag.gdpr.dr = 1;
            return;
        }
        if (utag.gdpr.consent_prompt.isEnabled === true && !(1)) {
            utag.gdpr.consent_prompt.isEnabled = false;
        }
        if (utag.gdpr.doNotSell.isEnabled === true && !(1)) {
            utag.gdpr.doNotSell.isEnabled = false;
        }
    }
    utag.preOld = utag.pre;
    utag.pre = function() {
        utag.preOld();
        utag.gdpr.promptEnabledSetting();
        utag.pre = utag.preOld;
    };
    utag.gdpr.consent_prompt.languages = {
        "en": {
            "custom_tokens": {
                "letmechoose": "Let me choose",
                "decline_button": "Reject all",
                "privacy_policy_url": "https://www.royalmail.com/privacy-notice"
            },
            "common_tokens": {
                "confirmation_button": "Accept all",
                "message": "We use cookies to help give you the best possible experience on our site:\n<br>1. “Strictly necessary” cookies are essential in supporting the website and are always on\n<br>2. “Functional” cookies boost the website’s performance\n<br>3. “Performance” cookies support site performance analysis\n<br>4. “Targeting” cookies help us personalise content and tailor ads for you\n<p>By clicking “Accept” you agree to our use of cookies as detailed in our <a href=\"http://www.royalmail.com/cookies-policy\"  tabindex=\"1\">Cookies policy</a>. To enable or disable specific types of cookie, click “Let me choose”.<p/>\n",
                "title": "Your Royal Mail cookie preferences"
            },
            "isDefault": "true"
        }
    };
    utag.gdpr.consent_prompt.content.css = "#__tealiumGDPRecModal {    display: none;}#__tealiumGDPRecModal .privacy_prompt {    width: 100vw;    height: 100vh;    top: 0;    left: 0;    background: rgba(0, 0, 0, 0.35);    position: fixed;    z-index: 2000;    font-family: \'chevin-medium\', \'ChevinStd-Medium\', Helvetica Neue, Helvetica, Arial, \"Nimbus Sans L\", sans-serif;}#__tealiumGDPRecModal .privacy_prompt_container {    position: absolute;    width: 600px;    max-width: 100%;    max-height: 95vh;    overflow: auto;    text-align: left;    background-color: #FFF;    color: #444;    font-size: 14px;    z-index: 1000;    padding: 10px 10px 10px 10px;    margin: 0;    top: 50%;    left: 50%;    margin-right: -50%;    transform: translate(-50%, -50%);    border-radius: 10px;}#__tealiumGDPRecModal .privacy_prompt a {    text-decoration: none;    color: #0077bf;    font-size: 16px;}#__tealiumGDPRecModal .privacy_prompt a:focus {    outline: 2px solid #0b2f42 !important;    outline-offset: 2px !important;    color: #0b2f42 !important;}#__tealiumGDPRecModal .privacy_prompt_content {    padding-left: 30px;    padding-right: 30px;}#__tealiumGDPRecModal .privacy_prompt_content p {    font-family: \'chevin-medium\', \'ChevinStd-Medium\', \'chevin\', \'chevin-light\', Helvetica Neue, Helvetica, Arial, \"Nimbus Sans L\", sans-serif;    font-weight: 500;    font-size: 16px !important;    line-height: 22px !important;    color: #6C6C6C;    margin: 1em 0 0 0;}#__tealiumGDPRecModal .privacy_prompt h1 {    font-size: 2.6em !important;    color: #000000;    font-weight: 700;    font-family: \'chevin-medium\', \'chevin\', \'PFDINTextStd-Bold\', \'ChevinL\', \'chevin-bold\', \'chevin-demibold\', Helvetica Neue, Helvetica, Arial, sans-serif !important;    -webkit-font-smoothing: antialiased;    -moz-osx-font-smoothing: grayscale;    border-bottom: 2px dotted #949496 !important;    padding-top: 14px !important;    padding-bottom: 14px !important;    line-height: 1.2 !important;    margin: 0.5em 0 0;}#__tealiumGDPRecModal .privacy_prompt .option {    margin: 10px 0;    color: #444;}#__tealiumGDPRecModal .privacy_prompt_footer {    padding: 20px 30px !important;    overflow: auto;    display: inline-block !important;}#__tealiumGDPRecModal button {    box-shadow: none;}#__tealiumGDPRecModal button:hover {    box-shadow: none;    background: none;    border: none;    border-radius: 0;}#__tealiumGDPRecModal .privacy_prompt_footer .second_button {    text-align: center;    margin-left: 20px;    color: #0668a4 !important;    border: 2px solid #0668a4 !important;    font-size: 16px !important;    padding: 11px 30px !important;    min-width: 30px !important;    cursor: pointer;    font-weight: 600;    display: initial;    border-radius: 0 !important;    background: none !important;    box-shadow: none !important;    line-height: normal !important;    font-family: \'chevin-medium\', \'ChevinStd-Medium\', \'chevin\', \'chevin-light\', Helvetica Neue, Helvetica, Arial, \'Nimbus Sans L\', sans-serif !important;    vertical-align: unset !important;}#__tealiumGDPRecModal .privacy_prompt_footer .second_button:hover {    color: #259cdb !important;    border-color: #259cdb !important;    transform: translateY(-2px) !important;    -webkit-transition: .2s !important;    transition: .2s !important;    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.30) !important;}#__tealiumGDPRecModal .privacy_prompt_footer .second_button:focus {    outline: none !important;    color: #0B2f42 !important;    border-color: #0B2f42 !important;    transform: translateY(-2px) !important;    -webkit-transition: .2s !important;    transition: .2s !important;    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.30) !important;}#__tealiumGDPRecModal .privacy_prompt .mobile-hide {    display: block;}#__tealiumGDPRecModal .privacy_prompt a {    text-decoration: none !important;    border-bottom: 1px solid #6c6c6c !important;    padding: 0 0 2px 0;    color: #6c6c6c;    font-family: \'chevin-medium\', \'ChevinStd-Medium\', \'chevin\', \'chevin-light\', Helvetica Neue, Helvetica, Arial, \'Nimbus Sans L\', sans-serif !important;    font-size: 16px !important;    line-height: 22px !important;}#__tealiumGDPRecModal .privacy_prompt_footer .button {    font-size: 16px !important;    padding: 13px 30px !important;    min-width: 30px !important;    text-align: center !important;    background-color: #259cdb !important;    color: #FFF;    cursor: pointer;    font-weight: 600;    font-family: \'chevin-medium\', \'ChevinStd-Medium\', \'chevin\', \'chevin-light\', Helvetica Neue, Helvetica, Arial, \'Nimbus Sans L\', sans-serif !important;    display: initial;    border: 0 !important;    box-shadow: none !important;    line-height: normal !important;    vertical-align: unset !important;    width: auto !important;}#__tealiumGDPRecModal .privacy_prompt_footer .primaryConsentCta {    background: linear-gradient(90deg,#DA202A 2%,#FF4242 95%);    border-radius: 30px;    padding: 15px 30px !important;}#__tealiumGDPRecModal .privacy_prompt_footer .primaryConsentCta.right {    margin-left: 20px;}#__tealiumGDPRecModal .privacy_prompt a {    color: #DA202A;}#__tealiumGDPRecModal .privacy_prompt_footer .button:hover {    transform: translateY(-2px) !important;    -webkit-transition: .2s !important;    transition: .2s !important;    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.30) !important;    background: linear-gradient(90deg,#DA202A 2%,#FF4242 95%);}#__tealiumGDPRecModal .privacy_prompt_footer .button:focus {    outline: none !important;    border: 2px solid #0B2f42 !important;    transform: translateY(-2px) !important;    -webkit-transition: .2s !important;    transition: .2s !important;    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.30) !important;}#__tealiumGDPRecModal .privacy_prompt .button.left {    float: left;}#__tealiumGDPRecModal .privacy_prompt.explicit_consent>.privacy_prompt_container>.close_btn_thick {    position: absolute;    display: block;    top: 20px;    right: 20px;    text-decoration: none;    text-shadow: 0 1px 0 #fff;    color: #000000;    font: 18px/100% Arial, sans-serif !important;    font-weight: 700;    cursor: pointer;}#__tealiumGDPRecModal .privacy_prompt.explicit_consent>.privacy_prompt_container>.close_btn_thick:focus {    outline: 2px solid #0b2f42 !important;    outline-offset: 2px !important;    color: #0b2f42 !important;}#__tealiumGDPRecModal .privacy_prompt.explicit_consent>.privacy_prompt_container>.close_btn_thick:after {    content: \"\\2715\";}#__tealiumGDPRecModal .privacy_prompt table {    padding: 0px;    border-collapse: collapse;}#__tealiumGDPRecModal .privacy_prompt table tr {}#__tealiumGDPRecModal .privacy_prompt table th {    background-color: #FAFAFA;    border-bottom: 1px solid #EEE;    margin: 0px;    padding: 5px 8px;    font-weight: 400;    text-align: center;}#__tealiumGDPRecModal .privacy_prompt table td {    vertical-align: top;    padding: 10px 8px 5px 8px;}#__tealiumGDPRecModal .privacy_prompt table tr td:first-child {    min-width: 120px;    font-weight: 600;    color: #666;}#__tealiumGDPRecModal .privacy_prompt table tr td:last-child {    text-align: center;    min-width: 100px;}#__tealiumGDPRecModal .privacy_prompt input[type=\"checkbox\"].toggle {    opacity: 0;    position: absolute;    left: -99999px;}#__tealiumGDPRecModal .privacy_prompt input[type=\"checkbox\"].toggle+label {    height: 24px;    line-height: 24px;    background-color: #ccc;    padding: 0px 16px;    border-radius: 16px;    display: inline-block;    position: relative;    cursor: pointer;    -moz-transition: all 0.25s ease-in;    -o-transition: all 0.25s ease-in;    -webkit-transition: all 0.25s ease-in;    transition: all 0.25s ease-in;}#__tealiumGDPRecModal .privacy_prompt input[type=\"checkbox\"].toggle+label:before,.privacy_prompt input[type=\"checkbox\"].toggle+label:hover:before {    content: \" \";    position: absolute;    top: 2px;    left: 2px;    width: 26px;    height: 20px;    background: #fff;    z-index: 2;    -moz-transition: all 0.25s ease-in;    -o-transition: all 0.25s ease-in;    -webkit-transition: all 0.25s ease-in;    transition: all 0.25s ease-in;    -moz-border-radius: 14px;    -webkit-border-radius: 14px;    border-radius: 14px;}#__tealiumGDPRecModal .privacy_prompt input[type=\"checkbox\"].toggle+label .off,.privacy_prompt input[type=\"checkbox\"].toggle+label .on {    color: #fff;}#__tealiumGDPRecModal .privacy_prompt input[type=\"checkbox\"].toggle+label .off {    margin-left: 20px;    display: inline-block;}#__tealiumGDPRecModal .privacy_prompt input[type=\"checkbox\"].toggle+label .on {    display: none;}#__tealiumGDPRecModal .privacy_prompt input[type=\"checkbox\"].toggle:checked+label .off {    display: none;}#__tealiumGDPRecModal .privacy_prompt input[type=\"checkbox\"].toggle:checked+label .on {    margin-right: 20px;    display: inline-block;}#__tealiumGDPRecModal .privacy_prompt input[type=\"checkbox\"].toggle:checked+label,.privacy_prompt input[type=\"checkbox\"].toggle:focus:checked+label {    background-color: #3278c0;}#__tealiumGDPRecModal .privacy_prompt input[type=\"checkbox\"].toggle:checked+label:before,.privacy_prompt input[type=\"checkbox\"].toggle:checked+label:hover:before,.privacy_prompt input[type=\"checkbox\"].toggle:focus:checked+label:before,.privacy_prompt input[type=\"checkbox\"].toggle:focus:checked+label:hover:before {    background-position: 0 0;    top: 2px;    left: 100%;    margin-left: -28px;}#__tealiumGDPRecModal .privacy_prompt input[type=\"checkbox\"].toggle+label {    overflow: hidden;    text-overflow: ellipsis;    max-height: 24px;    height: 24px;}.consent_buttons {    display: inline-block;}.let_me_choose_link {    margin-left: 30px;    display: inline-block;}.let_me_choose_link div {    display: inline;}/* MEDIA QUERIES */@media (min-width: 640px) {    .let_me_choose_link {        position: relative;        top: -20px;    }}@media (max-width: 639px) {    .let_me_choose_link {        margin-left: auto;        margin-right: auto;        display: block;        margin-top: 70px;    }    .let_me_choose_link div {        display: block;        text-align: center;    }    #__tealiumGDPRecModal .privacy_prompt_container {        width: 85%;        margin: 0 auto;        padding-left: 0;        padding-right: 0;    }    #__tealiumGDPRecModal .privacy_prompt_content {        padding-left: 2em;        padding-right: 3em;    }    #__tealiumGDPRecModal .privacy_prompt_content h1 {        font-size: 6vw;    }    #__tealiumGDPRecModal .privacy_prompt_footer {        padding: 20px 2em 30px 2em !important;        display: block !important;    }    #__tealiumGDPRecModal .privacy_prompt_footer .primaryConsentCta {        margin-right: 10px;    }    #__tealiumGDPRecModal .privacy_prompt_footer .primaryConsentCta.right {        margin-right: 0;        margin-left: 10px;        position: relative;        left: -15px;    }    .consent_buttons {        display: block;        width: 290px;        margin-left: auto;        margin-right: auto;    }}@media (max-width: 568px) {    #__tealiumGDPRecModal .privacy_prompt_content {        padding-left: 2em;        padding-right: 2em;    }    #__tealiumGDPRecModal .privacy_prompt_content h1 {        font-size: 8.25vw !important;    }    #__tealiumGDPRecModal .privacy_prompt_footer {        padding: 20px 2em 30px 2em !important;    }}@media (max-width: 330px) {    #__tealiumGDPRecModal .privacy_prompt_container {        width: 90%;    }    #__tealiumGDPRecModal .privacy_prompt_content h1 {        font-size: 8.55vw !important;    }    #__tealiumGDPRecModal .privacy_prompt_content {        padding: 0 2em 0 2em !important;    }    #__tealiumGDPRecModal .privacy_prompt_footer {        padding: 20px 2em 30px 2em !important;    }}";
    utag.gdpr.consent_prompt.content.html = "<div class=\"privacy_prompt explicit_consent\">    <div class=\"privacy_prompt_container\" aria-modal=\"true\" role=\"dialog\" aria-labelledby=\"explicit_consent_title\">        <div class=\"privacy_prompt_content\">            <h1 id=\"explicit_consent_title\">{{title}}</h1>            <p>{{message}}</p>            <div class=\"option_set\" style=\"display: none;\">                <div class=\"option\">                    <input type=\"radio\" class=\"consentRadioButton\" id=\"privacy_pref_optin\" name=\"privacy_pref\"                        value=\"optin\">                    <label for=\"privacy_pref_optin\">{{opt_in}}</label>                </div>                <div class=\"option\">                    <input type=\"radio\" class=\"consentRadioButton\" id=\"privacy_pref_optout\" name=\"privacy_pref\"                        value=\"optout\">                    <label for=\"privacy_pref_optout\">{{opt_out}}</label>                </div>            </div>        </div>        <div class=\"privacy_prompt_footer\">            <div class=\"consent_buttons\">                <button type=\"button\" id=\"consent_prompt_submit\" class=\"button left primaryConsentCta\"                    tabindex=\"2\">{{confirmation_button}}</button>                <button type=\"button\" id=\"consent_prompt_decline\" class=\"button right primaryConsentCta\"                    tabindex=\"3\">{{decline_button}}</button>            </div>            <div class=\"let_me_choose_link\">                <div>                    <a id=\"let_me_choose\" href=\"#\" tabindex=\"4\">{{letmechoose}}</a>                </div>            </div>        </div>    </div></div>";
    utag.gdpr.consent_prompt.content.js = "var cookie_page=utag.data['dom.pathname'].match(/cookie-policy|cookies-policy|privacy-notice|cookiepolicy|cookies-policy-app/);if(!cookie_page){var popup=document.getElementById(\"__tealiumGDPRecModal\");popup.style.display=\"block\";}(function consent_prompt(){var $el=document.getElementById(\"consent_prompt_submit\"),$modal=document.getElementById(\"__tealiumGDPRecModal\"),$closeBtn=$modal.getElementsByClassName(\"close_btn_thick\")[0],$chooseBtn=document.getElementById(\"let_me_choose\"),$privacy_pref_optin=document.getElementById(\"privacy_pref_optin\"),$privacy_pref_optout=document.getElementById(\"privacy_pref_optout\"),$decline=document.getElementById(\"consent_prompt_decline\"),$focusableEls=$modal.querySelectorAll('.close_btn_thick, a[href]:not([disabled]), button:not([disabled]), input[type=\"radio\"]:not([disabled]), input[type=\"checkbox\"]:not([disabled])'),$firstFocusableEl=$focusableEls[0],$lastFocusableEl=$focusableEls[$focusableEls.length-1],KEYCODE_TAB=9;$modal.addEventListener('keydown',function(e){var isTabPressed=(e.key==='Tab'||e.keyCode===KEYCODE_TAB);if(!isTabPressed){return;}if(e.shiftKey){if(document.activeElement===$firstFocusableEl){$lastFocusableEl.focus();e.preventDefault();}}else{if(document.activeElement===$lastFocusableEl){$firstFocusableEl.focus();e.preventDefault();}}});var consentState=utag.gdpr.getConsentState();if(typeof consentState===\"number\"){if(consentState===1){$privacy_pref_optin.checked=true;}else if(consentState===-1){$privacy_pref_optout.checked=true;}}else{$privacy_pref_optin.checked=true;}var callBack=function(){if(this.id==='consent_prompt_submit'){$privacy_pref_optin.checked=true;$privacy_pref_optout.checked=false;}else if(this.id==='consent_prompt_decline'){$privacy_pref_optin.checked=false;$privacy_pref_optout.checked=true;}if($privacy_pref_optin.checked){utag.gdpr.setConsentValue(1);}else if($privacy_pref_optout.checked){var cats={1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:1,};utag.gdpr.setPreferencesValues(cats);}else{return;}closePrompt();};var closePrompt=function(){$modal.style.display=\"none\";};var letMeChoose=function(event){event.preventDefault();closePrompt();utag.gdpr.showConsentPreferences();};if(document.addEventListener){$el.addEventListener(\"click\",callBack,false);$decline.addEventListener(\"click\",callBack,false);$chooseBtn.addEventListener(\"click\",letMeChoose,false);}else if(document.attachEvent){$el.attachEvent(\"click\",callBack);$decline.addEventListener(\"click\",callBack,false);$chooseBtn.attachEvent(\"click\",letMeChoose);}else{$el.onclick=callBack;$decline.addEventListener(\"click\",callBack,false);$chooseBtn.onclick=letMeChoose;}}());";
    utag.gdpr.consent_prompt.defaultLang = "en";
    utag.gdpr.showExplicitConsent = function(_lang) {
        var cn = document.getElementById("__tealiumGDPRecStyle");
        if (cn) {
            cn.parentNode.removeChild(cn);
        }
        var hn = document.getElementById("__tealiumGDPRecModal");
        if (hn) {
            hn.parentNode.removeChild(hn);
        }
        var sn = document.getElementById("__tealiumGDPRecScript");
        if (sn) {
            sn.parentNode.removeChild(sn);
        }
        var dtc = utag.gdpr.getDeTokenizedContent(utag.gdpr.consent_prompt, _lang);
        var head = document.head || document.getElementsByTagName("head")[0],
            style = document.createElement("style"),
            mDiv = document.createElement("div"),
            scr = document.createElement("script"),
            body = document.body || document.getElementsByTagName("body")[0];
        style.type = "text/css";
        style.id = "__tealiumGDPRecStyle";
        if (style.styleSheet) {
            style.styleSheet.cssText = dtc.css;
        } else {
            style.appendChild(document.createTextNode(dtc.css));
        }
        head.appendChild(style);
        mDiv.innerHTML = dtc.html;
        mDiv.id = "__tealiumGDPRecModal";
        body.appendChild(mDiv);
        scr.language = "javascript";
        scr.type = "text/javascript";
        scr.text = "try{" + dtc.js + "} catch(e){utag.DB(e)}";
        scr.id = "__tealiumGDPRecScript";
        head.appendChild(scr);
    };
    utag.gdpr.preferences_prompt.languages = {
        "en": {
            "categories": {
                "analytics": {
                    "name": "Performance",
                    "notes": "Performance cookies allow us to update this website to cater for user preferences and improve performance. They collect information about how this website is used, e.g. which pages users visit most often and where error messages are delivered. These typically collect and process information at an aggregated and often anonymous level."
                },
                "engagement": {
                    "notes": "",
                    "name": ""
                },
                "cookiematch": {
                    "name": "",
                    "notes": ""
                },
                "cdp": {
                    "name": "",
                    "notes": ""
                },
                "crm": {
                    "notes": "Strictly necessary cookies are used to enable the basic functions of this website like security.  As these cookies are essential, they cannot be switched off.",
                    "name": "Strictly necessary<span class=\"toTheRight\">Always on</span>"
                },
                "affiliates": {
                    "notes": "",
                    "name": ""
                },
                "social": {
                    "name": "",
                    "notes": ""
                },
                "uncategorized": {
                    "notes": "",
                    "name": ""
                },
                "misc": {
                    "notes": "",
                    "name": ""
                },
                "monitoring": {
                    "notes": "",
                    "name": ""
                },
                "mobile": {
                    "notes": "",
                    "name": ""
                },
                "personalization": {
                    "name": "Functional",
                    "notes": "Functional cookies allow this website to remember the choices you make e.g., your username, log in details, language preferences and any customisations you make to website pages during your visit. They are used to provide features and services specific to individual users."
                },
                "big_data": {
                    "name": "",
                    "notes": ""
                },
                "display_ads": {
                    "name": "Targeting or advertising cookies",
                    "notes": "These cookies do things like show you content and promotions that are relevant to you while browsing the Royal Mail Group and other websites, allow us to track sites you’ve visited beforehand, and help us assess the effectiveness of our marketing on other websites. It helps to limit the number of times those adverts are served to you and measure the effectiveness of campaigns. Switching off these cookies won’t reduce the number of promotions you see but will mean they are less personalised."
                },
                "email": {
                    "notes": "",
                    "name": ""
                },
                "search": {
                    "notes": "",
                    "name": ""
                }
            },
            "common_tokens": {
                "message": "We use cookies to help give you the best possible experience on our site. These support site navigation, login, analysis of site performance, personalisation of content and ads, live chat, and shopping baskets features. Some are necessary for our site to function, others are optional but could impact the features we offer.<br><br>By clicking on the below selectors you can set consent preferences for each category of cookies. Choosing not to enable cookies may impact your experience of the site and the services we are able to offer. To find out more about how we use cookies, visit our <a href=\"http://www.royalmail.com/cookies-policy\" data-di-id=\"di-id-33b25e8b-49c739e7\" tabindex=\"2\">Cookies policy</a>.",
                "confirmation_button": "Save preferences",
                "description": "Description",
                "yes": "On",
                "category": "Category",
                "no": "Off",
                "status": "Status",
                "title": "Your Royal Mail Cookie Preferences"
            },
            "isDefault": "true",
            "custom_tokens": {
                "acceptall": "Accept all",
                "privacy_policy_url": "https://www.royalmail.com/privacy-notice",
                "radiono": "No",
                "radioyes": "Yes"
            }
        }
    };
    utag.gdpr.preferences_prompt.content.css = "#__tealiumGDPRcpPrefs .privacy_prompt {    width: 100vw;    height: 100vh;    top: 0;    left: 0;    background: rgba(0, 0, 0, 0.35);    position: fixed;    z-index: 2000;    font-family: \'chevin-medium\', \'ChevinStd-Medium\', Helvetica, Arial, \"Nimbus Sans L\", sans-serif;}#__tealiumGDPRcpPrefs .privacy_prompt_container {    position: absolute;    width: 570px;    max-width: 100%;    max-height: 95vh;    overflow: auto;    text-align: left;    background-color: #FFF;    color: #444;    font-size: 14px;    z-index: 1000;    padding: 10px 10px 10px 10px;    margin: 0;    top: 50%;    left: 50%;    margin-right: -50%;    transform: translate(-50%, -50%);    overflow-x: hidden;    border-radius: 10px;}#__tealiumGDPRcpPrefs .privacy_prompt a {    text-decoration: none;    border-bottom: 1px solid #6c6c6c !important;    padding: 0 0 2px 0;    color: #DA202A;    /* font-weight: 600; */    font-size: 16px !important;    line-height: 22px !important;    font-family: \'chevin-medium\', \'ChevinStd-Medium\', \'chevin\', \'chevin-light\', Helvetica Neue, Helvetica, Arial, \'Nimbus Sans L\', sans-serif !important;}#__tealiumGDPRcpPrefs .privacy_prompt a:focus {    outline: 2px solid #0b2f42 !important;    outline-offset: 2px !important;    color: #0b2f42 !important;}#__tealiumGDPRcpPrefs .privacy_prompt_content {    padding-left: 3em;    padding-right: 3em;}#__tealiumGDPRcpPrefs .privacy_prompt_content p {    font-size: 16px !important;    line-height: 22px !important;    color: #6c6c6c;    font-family: \'chevin-medium\', \'ChevinStd-Medium\', \'chevin\', \'chevin-light\', Helvetica Neue, Helvetica, Arial, \"Nimbus Sans L\", sans-serif !important;    margin: 1em 0 0 0;}#__tealiumGDPRcpPrefs .privacy_prompt h1 {    font-size: 2.7em !important;    color: #000000;    font-weight: 700;    font-family: \'chevin-medium\', \'chevin\', \'PFDINTextStd-Bold\', \'ChevinL\', \'chevin-bold\', \'chevin-demibold\', Helvetica Neue, Helvetica, Arial, sans-serif !important;    -webkit-font-smoothing: antialiased;    -moz-osx-font-smoothing: grayscale;    border-bottom: 2px dotted #949496;    padding-top: 14px !important;    padding-bottom: 14px !important;    line-height: 1.2 !important;    margin: 0.75em 0 0;}#__tealiumGDPRcpPrefs .privacy_prompt .option {    margin: 10px 0px;    color: #444;}#__tealiumGDPRcpPrefs .privacy_prompt .option div.title {    font-family: \'chevin-medium\', \'chevin\', \'PFDINTextStd-Bold\', \'ChevinL\', \'chevin-bold\', \'chevin-demibold\', Helvetica Neue, Helvetica, Arial, sans-serif !important;    -webkit-font-smoothing: antialiased;    -moz-osx-font-smoothing: grayscale;    color: #000000;    font-weight: 700;    font-size: 17px !important;    margin: 25px 0 5px;}#__tealiumGDPRcpPrefs .privacy_prompt .option div.description {    font-size: 16px !important;    line-height: 22px !important;    color: #6c6c6c;    margin-top: 10px;    margin-bottom: 15px;    font-family: \'chevin-medium\', \'ChevinStd-Medium\', \'chevin\', \'chevin-light\', Helvetica Neue, Helvetica, Arial, \"Nimbus Sans L\", sans-serif !important;}#__tealiumGDPRcpPrefs .privacy_prompt_footer {    padding: 20px 3em 30px 3em;    display: inline-block;}#__tealiumGDPRcpPrefs .hide_error {    display: none;}#__tealiumGDPRcpPrefs .privacy_prompt_footer #error_message p {    font-size: 16px !important;    font-weight: 600;    color: #da202a;    font-family: \'chevin-medium\', \'ChevinStd-Medium\', \'chevin\', \'chevin-light\', Helvetica Neue, Helvetica, Arial, \'Nimbus Sans L\', sans-serif !important;    margin-top: 1em;    margin-bottom: 1em;}#__tealiumGDPRcpPrefs .privacy_prompt_footer .disabled {    opacity: 1 !important;    pointer-events: auto !important;}#__tealiumGDPRcpPrefs button {    box-shadow: none;}#__tealiumGDPRcpPrefs button:hover {    box-shadow: none;    background: none;    border: none;    border-radius: 0;}#__tealiumGDPRcpPrefs .privacy_prompt_footer .button {    text-align: center !important;    background-color: #259cdb !important;    color: #ffffff !important;    font-size: 16px !important;    padding: 13px 30px !important;    min-width: 30px !important;    cursor: pointer;    font-weight: 600;    display: initial;    user-select: none;    font-family: \'chevin-medium\', \'ChevinStd-Medium\', \'chevin\', \'chevin-light\', Helvetica Neue, Helvetica, Arial, \'Nimbus Sans L\', sans-serif !important;    border: 0 !important;    border-radius: 0;    box-shadow: none !important;    line-height: normal !important;    vertical-align: unset !important;    width: auto !important;}#__tealiumGDPRcpPrefs .privacy_prompt_footer .button:hover {    transform: translateY(-2px);    -webkit-transition: .2s !important;    transition: .2s !important;    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.30) !important;    background: linear-gradient(90deg,#DA202A 2%,#FF4242 95%);}#__tealiumGDPRcpPrefs .privacy_prompt_footer .button:focus {    outline: none !important;    border: 2px solid #0B2f42 !important;    padding: 11px 28px !important;    transform: translateY(-2px) !important;    -webkit-transition: .2s !important;    transition: .2s !important;    /* background-image: linear-gradient(to right, #259cdb, #1ba8f4) !important; */    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.30) !important;}#__tealiumGDPRcpPrefs .privacy_prompt_footer .second_button {    text-align: center !important;    margin-left: 15px !important;    color: #0668a4 !important;    border: 2px solid #0668a4 !important;    font-size: 16px !important;    padding: 11px 60px !important;    min-width: 30px;    cursor: pointer;    font-weight: 600;    display: initial;    user-select: none;    font-family: \'chevin-medium\', \'ChevinStd-Medium\', \'chevin\', \'chevin-light\', Helvetica Neue, Helvetica, Arial, \'Nimbus Sans L\', sans-serif !important;    border-radius: 0 !important;    background: none !important;    box-shadow: none !important;    line-height: normal !important;    vertical-align: unset !important;}#__tealiumGDPRcpPrefs .privacy_prompt_footer .second_button:hover {    color: #259cdb !important;    border-color: #259cdb !important;    transform: translateY(-2px) !important;    -webkit-transition: .2s !important;    transition: .2s !important;    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.30) !important;}#__tealiumGDPRcpPrefs .privacy_prompt_footer .second_button:focus {    outline: none !important;    color: #0B2f42 !important;    border-color: #0B2f42 !important;    transform: translateY(-2px) !important;    -webkit-transition: .2s !important;    transition: .2s !important;    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.30) !important;}#__tealiumGDPRcpPrefs .privacy_prompt .second_button.right {    float: right;}#__tealiumGDPRcpPrefs .privacy_prompt .button.left {    float: left;}#__tealiumGDPRcpPrefs .privacy_prompt.consent_preferences>.privacy_prompt_container>.close_btn_thick {    position: absolute;    display: block;    top: 20px;    right: 20px;    text-decoration: none;    text-shadow: 0 1px 0 #fff;    color: #000000;    font: 18px/100% Arial, sans-serif !important;    font-weight: 700;    cursor: pointer;}#__tealiumGDPRcpPrefs .privacy_prompt.consent_preferences>.privacy_prompt_container>.close_btn_thick:focus {    outline: 2px solid #0b2f42 !important;    outline-offset: 2px !important;    color: #0b2f42 !important;}#__tealiumGDPRcpPrefs .privacy_prompt.consent_preferences>.privacy_prompt_container>.close_btn_thick:after {    content: \"\\2715\";}#__tealiumGDPRcpPrefs .privacy_prompt .logo {    float: right;}#__tealiumGDPRcpPrefs .privacy_prompt table {    padding: 0px;    border-collapse: collapse;    margin: 0 auto;}#__tealiumGDPRcpPrefs .privacy_prompt table tr:first-child>th {    width: 33%;}#__tealiumGDPRcpPrefs .privacy_prompt table th {    background-color: #FAFAFA;    border-bottom: 1px solid #EEE;    margin: 0px;    padding: 5px 8px;    font-weight: 400;    text-align: center;}#__tealiumGDPRcpPrefs .privacy_prompt table td {    vertical-align: top;    padding: 10px 8px 5px 8px;}#__tealiumGDPRcpPrefs .privacy_prompt table tr td:first-child {    min-width: 120px;    font-weight: 600;    color: #666;}#__tealiumGDPRcpPrefs .privacy_prompt table tr td:last-child {    text-align: center;    min-width: 100px;}#__tealiumGDPRcpPrefs .privacy_prompt label {    line-height: 0;    font-size: 16px !important;    color: #000000;    cursor: pointer;    font-family: \'chevin-medium\', Helvetica Neue, Helvetica, Arial, \"Nimbus Sans L\", sans-serif !important;    font-weight: 700;    display: inline-block;    vertical-align: middle;    margin: 0 15px 0 0;}#__tealiumGDPRcpPrefs .privacy_prompt input[type=\"radio\"] {    -webkit-appearance: none;    -moz-appearance: none;    appearance: none;    border-radius: 50%;    width: 22px;    height: 22px;    border: 2px solid #6c6c6c !important;    transition: 0.2s all linear;    margin: 0 5px 0 0;    vertical-align: middle;    cursor: pointer;    display: inline-block !important;    position: static !important;}#__tealiumGDPRcpPrefs .privacy_prompt input[type=\"radio\"]:hover {    border-color: #0096D0 !important;}#__tealiumGDPRcpPrefs .privacy_prompt input[type=\"radio\"]:focus {    border-color: #0567A4 !important;    outline-offset: 2px !important;    box-shadow: 0 0 0 2px #0b2f42;    outline: 2px solid transparent;}#__tealiumGDPRcpPrefs .privacy_prompt input[type=\"radio\"]:active {    border: 2px solid #0567A4 !important;    outline-offset: 2px !important;    box-shadow: 0 0 0 2px #0b2f42;    outline: 2px solid transparent;}#__tealiumGDPRcpPrefs .privacy_prompt input[type=\"radio\"]:checked {    border: 4px solid #fff !important;    outline: #0b2f42 auto 2px !important;    background-color: #DA202A;}#__tealiumGDPRcpPrefs .privacy_prompt input[type=\"radio\"]:checked:focus {    border: 4px solid #fff !important;    outline-offset: 2px !important;    box-shadow: 0 0 0 2px #0b2f42;    outline: 2px solid transparent;}/* Override duplicate radio buttons */#__tealiumGDPRcpPrefs .privacy_prompt input[type=\"radio\"]::before {    display: none;}#__tealiumGDPRcpPrefs .privacy_prompt input[type=\"radio\"]:checked::after {    display: none;}#__tealiumGDPRcpPrefs .consent_prefs_toggle_buttons {    display: inline-block;    width: 100%;}#__tealiumGDPRcpPrefs .consent_prefs_save_button {    display: inline-block;    width: 100%;}#__tealiumGDPRcpPrefs #preferences_prompt_submit.primaryConsentCta {    background: linear-gradient(90deg,#DA202A 2%,#FF4242 95%);    border-radius: 30px;    padding: 15px 30px !important;}#__tealiumGDPRcpPrefs #accept_all_prompt_submit {    margin-left: 0 !important;}/* Cat15 & Cat6 toggle to buttons style */#__tealiumGDPRcpPrefs .static_option label::before {    display: none;    position: absolute;    content: \"\";    height: 30px;    width: 30px;    top: 0;    left: 0;    right: 0;    bottom: 0;    background-color: white;    -webkit-transition: .4s;    transition: .4s;}#__tealiumGDPRcpPrefs .privacy_prompt .static_option input[type=\"checkbox\"].toggle+label {    border-radius: 0;    text-align: center;    width: 97px;    padding: 0;}#__tealiumGDPRcpPrefs .privacy_prompt .static_option input[type=\"checkbox\"].toggle:checked+label .on {    margin-right: 0;}#__tealiumGDPRcpPrefs .privacy_prompt .static_option input[type=\"checkbox\"].toggle+label .off {    margin-left: 0;}#__tealiumGDPRcpPrefs .privacy_prompt .gdpr_btn_container {    display: inline-block;}#__tealiumGDPRcpPrefs .privacy_prompt .visitor_id_container {    display: inline-block;    margin: 1rem 0 0;}#__tealiumGDPRcpPrefs .privacy_prompt .visitor_id_container.hide_visitor_id {    display: none;}#__tealiumGDPRcpPrefs .privacy_prompt .visitor_id_container p {    font-size: 0.9rem;}#__tealiumGDPRcpPrefs .toTheRight {    float: right;}@media (min-width: 781px) {    #__tealiumGDPRcpPrefs .toTheRight {        padding-right: 15px;    }}/* MEDIA QUERIES */@media (max-width: 780px) {    #__tealiumGDPRcpPrefs .privacy_prompt_container {        width: 80%;        margin: 0 auto;    }    #__tealiumGDPRcpPrefs .privacy_prompt_content .prefmessage {        float: none;        width: 100%;    }    #__tealiumGDPRcpPrefs .privacy_prompt_content h1 {        text-align: left;    }    #__tealiumGDPRcpPrefs .privacy_prompt_content img {        float: none;        margin: 0 auto 10px auto;    }    #__tealiumGDPRcpPrefs .privacy_prompt_content table,    #__tealiumGDPRcpPrefs .privacy_prompt_content thead,    #__tealiumGDPRcpPrefs .privacy_prompt_content tbody,    #__tealiumGDPRcpPrefs .privacy_prompt_content th,    #__tealiumGDPRcpPrefs .privacy_prompt_content td,    #__tealiumGDPRcpPrefs .privacy_prompt_content tr {        position: relative;        height: 100%;    }    #__tealiumGDPRcpPrefs .privacy_prompt_content table tbody tr {        display: block;    }    #__tealiumGDPRcpPrefs .privacy_prompt_content tbody tr {        margin: 0 0 1rem 0;    }    #__tealiumGDPRcpPrefs .privacy_prompt_content tbody tr td:first-child {        display: inline-block;    }    #__tealiumGDPRcpPrefs .privacy_prompt_content tbody tr td:nth-child(2) {        width: 100%;        display: block;    }    #__tealiumGDPRcpPrefs .privacy_prompt_content tbody tr td:nth-child(3) {        min-width: 0 !important;        position: absolute;        right: 0;        top: -2%;        padding-right: 0px;    }    #__tealiumGDPRcpPrefs .privacy_prompt_content tbody tr:first-child {        position: absolute;        top: -9999px;        left: -9999px;    }}@media (max-width: 639px) {    #__tealiumGDPRcpPrefs .privacy_prompt_container {        width: 85%;        margin: 0 auto;    }    #__tealiumGDPRcpPrefs .privacy_prompt_content {        padding-left: 2em;        padding-right: 2em;    }    #__tealiumGDPRcpPrefs .privacy_prompt_content h1 {        font-size: 6vw;    }    #__tealiumGDPRcpPrefs .privacy_prompt_footer {        padding: 30px 2em !important;        display: block !important;    }    #__tealiumGDPRcpPrefs .privacy_prompt_footer .button {        font-size: 16px;        padding: 13px 1.5px !important;        float: none;        display: block !important;        border: 0;        border-radius: 0;    }    #__tealiumGDPRcpPrefs .privacy_prompt_footer .second_button {        margin-left: 0 !important;        margin-top: 0.75em;        width: 100%;        font-size: 16px;        padding: 13px 0 !important;        float: none;        display: block !important;    }    #__tealiumGDPRcpPrefs .privacy_prompt .second_button.right {        float: none;    }    #__tealiumGDPRcpPrefs .privacy_prompt .button.left {        float: none;    }    #__tealiumGDPRcpPrefs .privacy_prompt .visitor_id_container p {        font-size: 0.6rem;    }}@media (max-width: 568px) {    #__tealiumGDPRcpPrefs .privacy_prompt_footer .button {        width: 100% !important;        font-size: 16px;        padding: 13px 5px !important;    }    #__tealiumGDPRcpPrefs .privacy_prompt_footer .second_button {        width: 100%;        font-size: 16px;        padding: 13px 3px !important;    }    #__tealiumGDPRcpPrefs .privacy_prompt_content {        padding-left: 1em !important;        padding-right: 1em !important;    }    #__tealiumGDPRcpPrefs .privacy_prompt_content h1 {        font-size: 8.25vw !important;    }    #__tealiumGDPRcpPrefs .privacy_prompt_footer {        padding: 20px 1em 30px 1em !important;    }}@media (max-width: 330px) {    #__tealiumGDPRcpPrefs .privacy_prompt_footer {        padding: 20px 1em 30px 1em !important;    }}";
    utag.gdpr.preferences_prompt.content.html = "<div class=\"privacy_prompt consent_preferences\">    <div class=\"privacy_prompt_container\" aria-modal=\"true\" role=\"dialog\" aria-labelledby=\"consent_preferences_title\">        <div class=\"close_btn_thick\" tabindex=\"1\"></div>        <div class=\"privacy_prompt_content\">            <h1 id=\"consent_preferences_title\">{{title}}</h1>            <p>{{message}}</p>            <div class=\"options\">                <!--option-->                <div class=\"option\">                    <div class=\"title\">{{category_crm_title}}</div> <!--  // EBIZ-19143 -->                    <div class=\"description\">{{category_crm_description}}</div>                    <div class=\"switchHolder\" style=\"display: none;\">                        <input type=\"checkbox\" class=\"toggle\" disabled=disabled id=\"toggle_cat15\" checked/>                        <input type=\"checkbox\" class=\"toggle_no\" disabled=disabled id=\"toggle_cat15_no\" />                        <label for=\"toggle_cat15\"> <span class=\"on\">On</span> <span class=\"off\">{{no}}</span></label>                    </div>                </div>                <!--option-->                <div class=\"option\">                    <div class=\"title\">{{category_personalization_title}}</div>                    <div class=\"description\">{{category_personalization_description}}</div>                      <div class=\"switchHolder\">                        <input type=\"radio\" class=\"consentRadioButton consentRadioButton_yes\" name=\"toggle_cat6\" class=\"toggle\" id=\"toggle_cat6\" tabindex=\"3\">                        <label class=\"on\" for=\"toggle_cat6\">                            {{radioyes}}                        </label>                        <input type=\"radio\" class=\"consentRadioButton consentRadioButton_no\" name=\"toggle_cat6\" id=\"toggle_cat6_no\" tabindex=\"3\">                        <label class=\"off\" for=\"toggle_cat6_no\">                            {{radiono}}                        </label>                    </div>                </div>                <!--option-->                <div class=\"option\">                    <div class=\"title\">{{category_analytics_title}}</div>                    <div class=\"description\">{{category_analytics_description}}</div>                    <div class=\"switchHolder\">                        <input type=\"radio\" class=\"consentRadioButton consentRadioButton_yes\" name=\"toggle_cat1\" class=\"toggle\" id=\"toggle_cat1\" tabindex=\"3\">                        <label class=\"on\" for=\"toggle_cat1\">                            {{radioyes}}                        </label>                        <input type=\"radio\" class=\"consentRadioButton consentRadioButton_no\" name=\"toggle_cat1\" id=\"toggle_cat1_no\" tabindex=\"3\">                        <label class=\"off\" for=\"toggle_cat1_no\">                            {{radiono}}                        </label>                    </div>                </div>                <!--option-->                <div class=\"option\">                    <div class=\"title\">{{category_display_ads_title}}</div>                    <div class=\"description\">{{category_display_ads_description}}</div>                    <div class=\"switchHolder\">                        <input type=\"radio\" class=\"consentRadioButton consentRadioButton_yes\" name=\"toggle_cat3\" class=\"toggle\" id=\"toggle_cat3\" tabindex=\"4\">                        <label class=\"on\" for=\"toggle_cat3\">                            {{radioyes}}                        </label>                        <input type=\"radio\" class=\"consentRadioButton consentRadioButton_no\" name=\"toggle_cat3\" id=\"toggle_cat3_no\" tabindex=\"4\">                        <label class=\"off\" for=\"toggle_cat3_no\">                            {{radiono}}                        </label>                    </div>                </div>                    <!--option-->                <div class=\"option hide\" style=\"display:none;\">                    <div class=\"title\">{{category_engagement_title}}</div>                    <div class=\"description\">{{category_engagement_description}}</div>                    <div class=\"switchHolder\">                        <input type=\"checkbox\" class=\"toggle\" id=\"toggle_cat13\" />                        <label for=\"toggle_cat13\"> <span class=\"on\">{{yes}}</span> <span                                class=\"off\">{{no}}</span></label>                    </div>                </div>                <!--option-->                <div class=\"option hide\" style=\"display:none;\">                    <div class=\"title\">{{category_search_title}}</div>                    <div class=\"description\">{{category_search_description}}</div>                    <div class=\"switchHolder\">                        <input type=\"checkbox\" class=\"toggle\" id=\"toggle_cat4\" />                        <label for=\"toggle_cat4\"> <span class=\"on\">{{yes}}</span> <span                                class=\"off\">{{no}}</span></label>                    </div>                </div>                <!--option-->                <div class=\"option hide\" style=\"display:none;\">                    <div class=\"title\">{{category_email_title}}</div>                    <div class=\"description\">{{category_email_description}}</div>                    <div class=\"switchHolder\">                        <input type=\"checkbox\" class=\"toggle\" id=\"toggle_cat5\" />                        <label for=\"toggle_cat5\"> <span class=\"on\">{{yes}}</span> <span                                class=\"off\">{{no}}</span></label>                    </div>                </div>                <!--option-->                <div class=\"option hide\" style=\"display:none;\">                    <div class=\"title\">{{category_social_title}}</div>                    <div class=\"description\">{{category_social_description}}</div>                    <div class=\"switchHolder\">                        <input type=\"checkbox\" class=\"toggle\" id=\"toggle_cat7\" />                        <label for=\"toggle_cat7\"> <span class=\"on\">{{yes}}</span> <span                                class=\"off\">{{no}}</span></label>                    </div>                </div>                <!--option-->                <div class=\"option hide\" style=\"display:none;\">                    <div class=\"title\">{{category_big_data_title}}</div>                    <div class=\"description\">{{category_big_data_description}}</div>                    <div class=\"switchHolder\">                        <input type=\"checkbox\" class=\"toggle\" id=\"toggle_cat8\" />                        <label for=\"toggle_cat8\"> <span class=\"on\">{{yes}}</span> <span                                class=\"off\">{{no}}</span></label>                    </div>                </div>                <!--option-->                <div class=\"option hide\" style=\"display:none;\">                    <div class=\"title\">{{category_misc_title}}</div>                    <div class=\"description\">{{category_misc_description}}</div>                    <div class=\"switchHolder\">                        <input type=\"checkbox\" class=\"toggle\" id=\"toggle_cat9\" />                        <label for=\"toggle_cat9\"> <span class=\"on\">{{yes}}</span> <span                                class=\"off\">{{no}}</span></label>                    </div>                </div>                <!--option-->                <div class=\"option hide\" style=\"display:none;\">                    <div class=\"title\">{{category_cookiematch_title}}</div>                    <div class=\"description\">{{category_cookiematch_description}}</div>                    <div class=\"switchHolder\">                        <input type=\"checkbox\" class=\"toggle\" id=\"toggle_cat10\" />                        <label for=\"toggle_cat10\"> <span class=\"on\">{{yes}}</span> <span                                class=\"off\">{{no}}</span></label>                    </div>                </div>                <!--option-->                <div class=\"option hide\" style=\"display:none;\">                    <div class=\"title\">{{category_cdp_title}}</div>                    <div class=\"description\">{{category_cdp_description}}</div>                    <div class=\"switchHolder\">                        <input type=\"checkbox\" class=\"toggle\" id=\"toggle_cat11\" />                        <label for=\"toggle_cat11\"> <span class=\"on\">{{yes}}</span> <span                                class=\"off\">{{no}}</span></label>                    </div>                </div>                <!--option-->                <div class=\"option hide\" style=\"display:none;\">                    <div class=\"title\">{{category_mobile_title}}</div>                    <div class=\"description\">{{category_mobile_description}}</div>                    <div class=\"switchHolder\">                        <input type=\"checkbox\" class=\"toggle\" id=\"toggle_cat12\" />                        <label for=\"toggle_cat12\"> <span class=\"on\">{{yes}}</span> <span                                class=\"off\">{{no}}</span></label>                    </div>                </div>                <!--option-->                <div class=\"option hide\" style=\"display:none;\">                    <div class=\"title\">{{category_monitoring_title}}</div>                    <div class=\"description\">{{category_monitoring_description}}</div>                    <div class=\"switchHolder\">                        <input type=\"checkbox\" class=\"toggle\" id=\"toggle_cat14\" />                        <label for=\"toggle_cat14\"> <span class=\"on\">{{yes}}</span> <span                                class=\"off\">{{no}}</span></label>                    </div>                </div>                  <!--option-->                <div class=\"option hide\" style=\"display:none;\">                    <div class=\"title\">{{category_affiliates_title}}</div>                    <div class=\"description\">{{category_affiliates_description}}</div>                    <div class=\"switchHolder\">                        <input type=\"checkbox\" class=\"toggle\" id=\"toggle_cat2\" />                        <label for=\"toggle_cat2\"> <span class=\"on\">{{yes}}</span> <span                                class=\"off\">{{no}}</span></label>                    </div>                </div>                  <!-- end of options -->            </div>        </div>        <div class=\"privacy_prompt_footer\">            <div id=\"error_message\" class=\"hide_error\">                <p>Please select your cookie preferences.</p>            </div>            <div class=\"gdpr_btn_container\">                <div class=\"consent_prefs_save_button\">                    <button type=\"button\" id=\"preferences_prompt_submit\" class=\"button left disabled primaryConsentCta\"                        tabindex=\"7\">{{confirmation_button}}</button>                </div>            </div>            <div class=\"visitor_id_container hide_visitor_id\">                <p>No visitor ID</p>            </div>        </div>    </div>  </div>";
    utag.gdpr.preferences_prompt.content.js = "(function preferences_prompt(){var el=document.getElementById(\"preferences_prompt_submit\"),modal=document.getElementById(\"__tealiumGDPRcpPrefs\"),closeBtn=modal.getElementsByClassName(\"close_btn_thick\")[0],body=modal.getElementsByClassName(\"consent_preferences\")[0],reg_match=/\\d+$/,i,focusableEls=modal.querySelectorAll('.close_btn_thick, a[href]:not([disabled]), button:not([disabled]), input[type=\"radio\"]:not([disabled]), input[type=\"checkbox\"]:not([disabled])'),firstFocusableEl=focusableEls[0],lastFocusableEl=focusableEls[focusableEls.length-1],KEYCODE_TAB=9;firstFocusableEl.focus();modal.addEventListener('keydown',function(e){var isTabPressed=(e.key==='Tab'||e.keyCode===KEYCODE_TAB);if(!isTabPressed){return;}if(e.shiftKey){if(document.activeElement===firstFocusableEl){lastFocusableEl.focus();e.preventDefault();}}else{if(document.activeElement===lastFocusableEl){firstFocusableEl.focus();e.preventDefault();}}});var error_message=document.getElementById('error_message');function radioButtonsStatus(){var toggle_cat1=document.querySelector('input[name=\"toggle_cat1\"]:checked');var toggle_cat3=document.querySelector('input[name=\"toggle_cat3\"]:checked');var toggle_cat6=document.querySelector('input[name=\"toggle_cat6\"]:checked');var check=toggle_cat1!==null&&toggle_cat3!==null&&toggle_cat6!==null;return check;}var callBack=function(){var checkRadio=radioButtonsStatus();if(checkRadio===false){error_message.classList.remove('hide_error');return;}else{error_message.classList.add('hide_error');this.classList.remove('disabled');var inputs=body.getElementsByClassName(\"toggle\"),cats={};for(var i=0;i<inputs.length;i++){var obj=inputs[i];cats[obj.id.match(reg_match)[0]]=obj.checked?1:0;}if(cats[3]){[cats[11]=1];}else{[cats[11]=0];}document.getElementById(\"toggle_cat1\").checked?cats[1]=1:cats[1]=0;document.getElementById(\"toggle_cat3\").checked?cats[3]=1:cats[3]=0;document.getElementById(\"toggle_cat6\").checked?cats[6]=1:cats[6]=0;utag.gdpr.setPreferencesValues(cats);closePrompt();}};var closePrompt=function(){var status=radioButtonsStatus();var consent_manager=document.cookie.indexOf(\"CONSENTMGR\");if(consent_manager>-1){modal.style.display=\"none\";}else{modal.style.display=\"none\";utag.gdpr.showExplicitConsent();}};modal.addEventListener(\"keydown\",function(e){var KEYCODE_ESC=27,isEscPressed=(e.key==='Escape'||e.keyCode===KEYCODE_ESC);if(isEscPressed){closePrompt();}});if(document.cookie.indexOf(\"CONSENTMGR\")>-1){var consentState=utag.gdpr.getConsentState();if(typeof consentState===\"number\"){var _state=false;if(consentState===1||consentState===-1){_state=consentState===1;}else{_state=!!utag.gdpr.preferences_prompt.defaultState;}for(i=0;i<utag.gdpr.getCategories().length;i++){var toggleEl=document.querySelector('#toggle_cat'+(i+1));if(window.getComputedStyle(toggleEl).display!==\"none\"&&window.getComputedStyle(toggleEl).visibility!==\"hidden\"){var check_yes=document.getElementById(\"toggle_cat\"+(i+1));var check_no=document.getElementById(\"toggle_cat\"+(i+1)+\"_no\");if(check_yes){check_yes.checked=_state;}if(check_no){check_no.checked=!_state;}}}}else{for(i=0;i<consentState.length;i++){var toggleEl=document.querySelector('#toggle_cat'+(i+1));if(window.getComputedStyle(toggleEl).display!==\"none\"&&window.getComputedStyle(toggleEl).visibility!==\"hidden\"){var check_yes=document.getElementById(\"toggle_cat\"+(i+1));var check_no=document.getElementById(\"toggle_cat\"+(i+1)+\"_no\");if(check_yes){check_yes.checked=_state;}if(consentState[i].ct!==\"1\"){if(check_yes){check_yes.checked=false;}if(check_no){check_no.checked=true;}continue;}if(check_yes){check_yes.checked=true;}if(check_no){check_no.checked=false;}}}}}else{}if(utag.data.tealium_visitor_id&&!utag.ut.isEmpty(utag.loader.RC('CONSENTMGR'))&&utag.loader.RC('CONSENTMGR').match(/consent:(1|true)/g)){var visitorIdContainer=document.querySelector('.visitor_id_container');visitorIdContainer.children[0].textContent=\"ID: \"+utag.data.tealium_visitor_id;visitorIdContainer.classList.remove(\"hide_visitor_id\");}if(document.addEventListener){el.addEventListener(\"click\",callBack,false);closeBtn.addEventListener(\"click\",closePrompt,false);}else if(document.attachEvent){el.attachEvent(\"click\",callBack);closeBtn.attachEvent(\"click\",closePrompt);}else{el.onclick=callBack;closeBtn.onclick=closePrompt;}}());";
    utag.gdpr.preferences_prompt.defaultLang = "en";
    utag.gdpr.showConsentPreferences = function(_lang) {
        function cloneObject(source, target, depth) {
            if (depth === undefined) {
                depth = 1;
            } else if (depth === -1) {
                utag.DB("Max Clone depth exceeded, using reference");
                return source;
            }
            if (window.JSON) {
                return JSON.parse(JSON.stringify(source));
            }
            target = target || {};
            for (var prop in source) {
                if (!source.hasOwnProperty(prop)) {
                    continue;
                }
                switch (utag.gdpr.typeOf(source[prop])) {
                    case "array":
                        target[prop] = source[prop].slice(0);
                        break;
                    case "object":
                        target[prop] = cloneObject(source[prop], target[prop], --depth);
                        break;
                    default:
                        target[prop] = source[prop];
                }
            }
            return target;
        }
        try {
            if (utag.gdpr.preferences_prompt.noShow) {
                return;
            }
            var cn = document.getElementById("__tealiumGDPRcpStyle");
            if (cn) {
                cn.parentNode.removeChild(cn);
            }
            var hn = document.getElementById("__tealiumGDPRcpPrefs");
            if (hn) {
                hn.parentNode.removeChild(hn);
            }
            var sn = document.getElementById("__tealiumGDPRcpPrefsScript");
            if (sn) {
                sn.parentNode.removeChild(sn);
            }
            var promptData = cloneObject(utag.gdpr.preferences_prompt);
            var activeCats = utag.gdpr.getCategories(true);
            var cats = '';
            var id;
            for (var i = 0; i < activeCats.length; i++) {
                id = utag.gdpr.preferences_prompt.categories[activeCats[i]].id;
                cats += '<tr><td>{{category_' + activeCats[i] + '_title}}</td><td>{{category_' + activeCats[i] + '_description}}</td><td><input type="checkbox" class="toggle" id="toggle_cat' + id + '"/><label for="toggle_cat' + id + '"> <span class="on">{{yes}}</span> <span class="off">{{no}}</span></label></td></tr>';
            }
            promptData.content.html = promptData.content.html.replace('<!--CATEGORIES-->', cats);
            var dtc = utag.gdpr.getDeTokenizedContent(promptData, _lang);
            var head = document.head || document.getElementsByTagName("head")[0],
                style = document.createElement("style"),
                mDiv = document.createElement("div"),
                scr = document.createElement("script"),
                body = document.body || document.getElementsByTagName("body")[0];
            style.type = "text/css";
            style.id = "__tealiumGDPRcpStyle";
            if (style.styleSheet) {
                style.styleSheet.cssText = dtc.css;
            } else {
                style.appendChild(document.createTextNode(dtc.css));
            }
            head.appendChild(style);
            mDiv.innerHTML = dtc.html;
            mDiv.id = "__tealiumGDPRcpPrefs";
            body.appendChild(mDiv);
            scr.language = "javascript";
            scr.type = "text/javascript";
            scr.text = "try{" + dtc.js + "} catch(e){utag.DB(e)}";
            scr.id = "__tealiumGDPRcpPrefsScript";
            head.appendChild(scr);
        } catch (e) {
            utag.DB(e);
        }
    };
    utag.gdpr.dns = null;
    utag.track_old = utag.track;
    utag.track = function(a, b, c, d) {
        if (typeof a == "string") a = {
            event: a,
            data: b,
            cfg: {
                cb: c,
                uids: d
            }
        };
        if (a.event === "update_consent_cookie" && b.consent_categories) {
            utag.gdpr.updateConsentCookie(b.consent_categories);
        } else if (a.event === "set_dns_state" && typeof b.do_not_sell !== 'undefined') {
            utag.gdpr.dns.setDnsState(b.do_not_sell);
        } else {
            if (utag.gdpr.getConsentState() === 0) {
                if (!utag.gdpr.noqueue) utag.gdpr.queue.push({
                    event: a.event,
                    data: utag.handler.C(a.data),
                    cfg: utag.handler.C(a.cfg)
                });
            }
            if (a.cfg.uids) {
                var uids = [];
                for (var i = 0; i < a.cfg.uids.length; i++) {
                    if (!utag.gdpr.shouldTagFire(a.cfg.uids[i])) {
                        uids.push(a.cfg.uids[i]);
                    }
                }
                a.cfg.uids = uids;
                utag.gdpr.trackUIDs = utag.gdpr.trackUIDs.concat(uids);
            }
            return utag.track_old.apply(this, arguments);
        }
    };
    utag.loader.OU_old = utag.loader.OU;
    utag.loader.OU = function(tid) {
        try {
            if (utag.gdpr.typeOf(tid) !== "undefined") {
                return utag.gdpr.shouldTagFire();
            }
            utag.gdpr.applyConsentState();
        } catch (e) {
            utag.DB(e);
        }
    };
    if (utag.gdpr.preferences_prompt.single_cookie) {
        window.utag_cfg_ovrd = window.utag_cfg_ovrd || {};
        utag.loader.SC("utag_main", null, "da");
        window.utag_cfg_ovrd.nocookie = true;
    }
    if (!utag.gdpr.consent_prompt.isEnabled && !utag.gdpr.doNotSell.isEnabled && utag.gdpr.getConsentState() == 0) {
        utag.gdpr.setAllCategories(utag.gdpr.preferences_prompt.defaultState, !0);
    }
    if (typeof utag_cfg_ovrd != 'undefined') {
        for (utag._i in utag.loader.GV(utag_cfg_ovrd)) utag.cfg[utag._i] = utag_cfg_ovrd[utag._i]
    };
    if (typeof utag_cfg_ovrd != 'undefined') {
        for (utag._i in utag.loader.GV(utag_cfg_ovrd)) utag.cfg[utag._i] = utag_cfg_ovrd[utag._i]
    };
    utag.loader.PINIT = function(a, b, c) {
        utag.DB("Pre-INIT");
        if (utag.cfg.noload) {
            return;
        }
        try {
            this.GET();
            if (utag.handler.RE('view', utag.data, "blr")) {
                utag.handler.LR(utag.data);
            }
        } catch (e) {
            utag.DB(e)
        };
        a = this.cfg;
        c = 0;
        for (b in this.GV(a)) {
            if (a[b].block == 1 || (a[b].load > 0 && (typeof a[b].src != 'undefined' && a[b].src != ''))) {
                a[b].block = 1;
                c = 1;
                this.bq[b] = 1;
            }
        }
        if (c == 1) {
            for (b in this.GV(a)) {
                if (a[b].block) {
                    a[b].id = b;
                    if (a[b].load == 4) a[b].load = 1;
                    a[b].cb = function() {
                        var d = this.uid;
                        utag.loader.cfg[d].cbf = 1;
                        utag.loader.LOAD(d)
                    };
                    this.AS(a[b]);
                }
            }
        }
        if (c == 0) this.INIT();
    };
    utag.loader.INIT = function(a, b, c, d, e) {
        utag.DB('utag.loader.INIT');
        if (this.ol == 1) return -1;
        else this.ol = 1;
        if (utag.cfg.noview != true) utag.handler.RE('view', utag.data, "alr");
        utag.rpt.ts['i'] = new Date();
        d = this.cfgsort;
        for (a = 0; a < d.length; a++) {
            e = d[a];
            b = this.cfg[e];
            b.id = e;
            if (b.block != 1) {
                if (utag.loader.bk[b.id] || ((utag.cfg.readywait || utag.cfg.noview) && b.load == 4)) {
                    this.f[b.id] = 0;
                    utag.loader.LOAD(b.id)
                } else if (b.wait == 1 && utag.loader.rf == 0) {
                    utag.DB('utag.loader.INIT: waiting ' + b.id);
                    this.wq.push(b)
                    this.f[b.id] = 2;
                } else if (b.load > 0) {
                    utag.DB('utag.loader.INIT: loading ' + b.id);
                    this.lq.push(b);
                    this.AS(b);
                }
            }
        }
        if (this.wq.length > 0) utag.loader.EV('', 'ready', function(a) {
            if (utag.loader.rf == 0) {
                utag.DB('READY:utag.loader.wq');
                utag.loader.rf = 1;
                utag.loader.WQ();
            }
        });
        else if (this.lq.length > 0) utag.loader.rf = 1;
        else if (this.lq.length == 0) utag.loader.END();
        return 1
    };
    utag.loader.EV('', 'ready', function(a) {
        if (utag.loader.efr != 1) {
            utag.loader.efr = 1;
            try {
                if (utag.cfg.readywait || utag.cfg.waittimer) {
                    utag.loader.EV("", "ready", function() {
                        setTimeout(function() {
                            utag.gdpr.promptEnabledSetting();
                            cmExplicitDomReady();
                            cmDNSDomReady();
                        }, utag.cfg.waittimer || 1);
                    });
                } else {
                    utag.gdpr.promptEnabledSetting();
                    cmExplicitDomReady();
                    cmDNSDomReady();
                }

                function cmExplicitDomReady() {
                    try {
                        if (utag.gdpr.consent_prompt.isEnabled) {
                            if (!utag.gdpr.consent_prompt.noShow) {
                                if (!utag.gdpr.getConsentState()) {
                                    utag.gdpr.showExplicitConsent();
                                }
                            }
                        }
                    } catch (e) {
                        utag.DB(e);
                    }
                }

                function cmDNSDomReady() {
                    try {
                        if (utag.gdpr.doNotSell.isEnabled) {
                            if (!utag.gdpr.doNotSell.noShow) {
                                if (!utag.gdpr.dns.getDnsState()) {
                                    utag.gdpr.showDoNotSellBanner();
                                }
                            }
                        }
                    } catch (e) {
                        utag.DB(e);
                    }
                }
            } catch (e) {
                utag.DB(e);
            }
            try {
                try {
                    if (utag.data['dom.domain'].toString().indexOf('business.parcel.royalmail.com') > -1) {
                        switch (document.location.pathname) {
                            case "/payments/details/":
                                if (document.location.search.indexOf("paymentsuccess=1") > -1) {
                                    var pa = b.productAttributesString || "";
                                    ! function(f, b, e, v, n, t, s) {
                                        if (f.fbq && typeof f.fbq.getState === 'function') return;
                                        n = f.fbq = function() {
                                            n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
                                        };
                                        if (!f._fbq) f._fbq = n;
                                        n.push = n;
                                        n.loaded = !0;
                                        n.version = '2.0';
                                        n.queue = [];
                                        t = b.createElement(e);
                                        t.async = !0;
                                        t.src = v;
                                        s = b.getElementsByTagName(e)[0];
                                        s.parentNode.insertBefore(t, s)
                                    }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
                                    fbq('init', '133310348781036');
                                    var cat = "";
                                    if (pa.toLowerCase().indexOf('gbr') === -1) {
                                        cat = 'Business Parcels International';
                                    } else {
                                        cat = 'Business Parcels Domestic';
                                    }
                                    fbq('track', 'Purchase', {
                                        currency: b.transactionCurrency,
                                        value: b.transactionTotal,
                                        order_id: b.transactionID,
                                        content_category: cat
                                    });
                                    (function() {
                                        if (!window.gtag) {
                                            var p_tag = document.createElement('script');
                                            p_tag.setAttribute('type', 'text/javascript');
                                            p_tag.setAttribute('src', "https://www.googletagmanager.com/gtag/js?id=DC-12881203");
                                            document.body.appendChild(p_tag);
                                            window.dataLayer = window.dataLayer || [];
                                            window.gtag = function() {
                                                dataLayer.push(arguments);
                                            }
                                            gtag('js', new Date());
                                            gtag('config', 'DC-12881203');
                                        }
                                        var category = pa.indexOf('gbr') > -1 ? 'ecmpbi' : 'ecmbpd';
                                        var to = "DC-12881203/sales/" + category + "+transactions"
                                        var eventData = {
                                            'allow_custom_scripts': true,
                                            'send_to': to,
                                            'value': b.transactionTotal || 0,
                                            'currency': b.transactionCurrency || 'GBP',
                                            'transaction_id': b.transactionID || b.tealium_random,
                                            'quantity': productQuantity
                                        };
                                        gtag('event', 'purchase', eventData);
                                    })()
                                }
                                break;
                        }
                    }
                } catch (e) {
                    utag.DB(e)
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce == 'undefined') utag.runonce = {};
                    if (typeof utag.runonce[116] == 'undefined') {
                        utag.runonce[116] = 1;
                        jQuery('#Main_btnDeliveryDetailsContinue').bind('click', function(e) {
                            utag.view({
                                "pageName": 'RM Web App > Royal Mail Click & Drop > Quick Delivery >Step 2. Choose a size',
                                "pageApplicationStep": 'Step 2: Choose a size'
                            })
                        })
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[117] == 'undefined') {
                        utag.runonce[117] = 1;
                        jQuery('#Main_btnPackageFormatContinue').bind('click', function(e) {
                            utag.view({
                                "pageName": 'RM Web App > Royal Mail Click & Drop > Quick Delivery >Step 3. Choose a service',
                                "pageApplicationStep": 'Step 3: Choose a service'
                            })
                        })
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[118] == 'undefined') {
                        utag.runonce[118] = 1;
                        jQuery('#Main_btnServiceContinue').bind('click', function(e) {
                            utag.view({
                                "pageName": 'RM Web App > Royal Mail Click & Drop > Quick Delivery >Step 4. Add recipient details',
                                "pageApplicationStep": 'Step 4: Add recipient details'
                            })
                        })
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[119] == 'undefined') {
                        utag.runonce[119] = 1;
                        jQuery('#Main_btnRecipientDetailsContinue').bind('click', function(e) {
                            utag.view({
                                "pageName": 'RM Web App > Royal Mail Click & Drop > Quick Delivery >Step 5. Add sender details',
                                "pageApplicationStep": 'Step 5: Add sender details'
                            })
                        })
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[121] == 'undefined') {
                        utag.runonce[121] = 1;
                        jQuery('#Main_btnSenderDetailsContinue').bind('click', function(e) {
                            utag.view({
                                "pageName": 'RM Web App > Royal Mail Click & Drop > Quick Delivery >Step 6. Summary & confirmation',
                                "pageApplicationStep": 'Step 6: Summary & confirmation'
                            })
                        })
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[125] == 'undefined') {
                        utag.runonce[125] = 1;
                        jQuery('#Main_btnSenderDetailsSkip1.skip.right.small').bind('click', function(e) {
                            utag.view({
                                "pageName": 'RM Web App > Royal Mail Click & Drop > Quick Delivery >Step 6. Summary & confirmation',
                                "pageApplicationStep": 'Step 6: Summary & confirmation'
                            })
                        })
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[124] == 'undefined') {
                        utag.runonce[124] = 1;
                        jQuery('#Main_btnSenderDetailsSkip2.skip.right.small').bind('click', function(e) {
                            utag.view({
                                "pageName": 'RM Web App > Royal Mail Click & Drop > Quick Delivery >Step 6. Summary & confirmation',
                                "pageApplicationStep": 'Step 6: Summary & confirmation'
                            })
                        })
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (1) {
                    if (typeof utag.runonce[122] == 'undefined') {
                        utag.runonce[122] = 1;
                        jQuery('#Main_btnConfirmAndProceed').bind('click', function(e) {
                            utag.view({
                                "pageName": 'RM Web App > Royal Mail Click & Drop > Quick Delivery >Step 7. Paypal Payment Details',
                                "pageApplicationStep": 'Step 7. Paypal Payment Details'
                            })
                        })
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                (function() {
                    if (!((utag.data['dom.domain'] == 'parcel.royalmail.com' && utag.data['dom.pathname'].toString().indexOf('payment-confirmation') > -1))) {
                        return;
                    }
                    try {
                        utag.data['transactionID'] = jQuery('#form1 div.in div table.form tbody tr:eq(0) td:eq(1)').text()
                    } catch (e) {}
                    try {
                        utag.data['transactionTotal'] = jQuery('#form1 div.in div table.form tbody tr:eq(1) td:eq(1)').text().substr(1)
                    } catch (e) {};
                    try {
                        utag.data['productPrice'] = [jQuery('#form1 div.in div table.form tbody tr:eq(1) td:eq(1)').text().substr(1)];
                    } catch (e) {};
                })();
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (typeof utag.runonce == 'undefined') utag.runonce = {};
                utag.jdh = function(h, i, j, k) {
                    h = utag.jdhc.length;
                    if (h == 0) window.clearInterval(utag.jdhi);
                    else {
                        for (i = 0; i < h; i++) {
                            j = utag.jdhc[i];
                            k = jQuery(j.i).is(":visible") ? 1 : 0;
                            if (k != j.s) {
                                if (j.e == (j.s = k)) jQuery(j.i).trigger(j.e ? "afterShow" : "afterHide")
                            }
                        }
                    }
                };
                utag.jdhi = window.setInterval(utag.jdh, 250);
                utag.jdhc = [];
                if ((utag.data['dom.pathname'].toString().toLowerCase().indexOf('/personal/search/google_cse_adv/'.toLowerCase()) > -1 && utag.data['consent_performance'] == '1')) {
                    if (typeof utag.runonce[419] == 'undefined') {
                        utag.runonce[419] = 1;
                        jQuery(document.body).on('click', 'a[href$=".pdf"]', function(e) {
                            var linkText = e.srcElement.innerText;
                            var linkRef = e.srcElement.href;
                            utag.track({
                                event: 'link',
                                data: {
                                    "linkText": linkText,
                                    "linkRef": linkRef
                                },
                                cfg: {
                                    cb: null,
                                    uids: [1]
                                }
                            });
                        })
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                try {
                    if (/^\/register/.test(utag.data['dom.pathname'])) {
                        var currentPath = window.location.pathname;
                        try {
                            if (currentPath.indexOf('/olp') > -1 || currentPath.indexOf('/oba') > -1) {
                                var poll = function(selector, timeout, callback) {
                                    if (document.querySelector(selector)) {
                                        callback(document.querySelector(selector));
                                    } else if (timeout > 0) {
                                        setTimeout(poll, 100, selector, timeout - 100, callback);
                                    }
                                }
                                var saveEmailInStorage = function() {
                                    var emailInput = document.querySelector('input#Email');
                                    if (!!emailInput ? .value) {
                                        sessionStorage.setItem('__user_email__', emailInput.value);
                                    }
                                    poll('form .cnd-bottom-buttons button[type="submit"]', 5000, function(btn) {
                                        btn.addEventListener('click', function(e) {
                                            var emailInput = document.querySelector('input#Email');
                                            if (!emailInput) {
                                                utag.DB('Email input not found on /register/olp page');
                                            }
                                            var email = emailInput.value;
                                            sessionStorage.setItem('__user_email__', email);
                                        });
                                    });
                                }
                                saveEmailInStorage();
                            } else if (currentPath.indexOf('/confirmation') > -1) {
                                var email = sessionStorage.getItem('__user_email__') || '';
                                if (!email) {
                                    utag.DB('No email found in sessionStorage for /register/thank-you page');
                                } else {
                                    utag.DB('Populating email in /register/confirmation page: ' + email);
                                    utag.data['visitorEmail'] = email;
                                }
                            }
                        } catch (error) {
                            utag.DB('Extn:Registration - Extract and Set Email::error:');
                            console.error(error);
                        }
                    }
                } catch (e) {
                    utag.DB(e)
                }
            } catch (e) {
                utag.DB(e)
            };
        }
    });
    (function(w) {
        var i = 0
        if ((typeof w.utag_events === 'object' && w.utag_events.length > 0)) {
            while (w.utag_events.length) {
                d = w.utag_events.shift();
                (function(d) {
                    setTimeout(function() {
                        utag.track({
                            event: d.d,
                            data: d.a,
                            cfg: {
                                cb: d.b,
                                uids: d.c
                            }
                        });
                    }, 150 * i);
                })(d);
                i++;
            }
        }
    }(window));
    if (utag.cfg.readywait || utag.cfg.waittimer) {
        utag.loader.EV('', 'ready', function(a) {
            if (utag.loader.rf == 0) {
                utag.loader.rf = 1;
                utag.cfg.readywait = 1;
                utag.DB('READY:utag.cfg.readywait');
                setTimeout(function() {
                    utag.loader.PINIT()
                }, utag.cfg.waittimer || 1);
            }
        })
    } else {
        utag.loader.PINIT()
    }
}