//tealium universal tag - utag.loader ut4.0.202605010910, Copyright 2026 Tealium.com Inc. All Rights Reserved.
(function(w) {
    if (typeof w.utag !== 'undefined' && typeof w.utag.e === 'object') {
        w.utag_events = w.utag.e;
        delete w.utag;
    }
}(window));
if (typeof utag_err == 'undefined') var utag_err = [];
window._tealium_old_error = window._tealium_old_error || window.onerror || function() {};
window.onerror = function(m, u, l) {
    if (typeof u !== 'undefined' && u.indexOf('/utag.') > 0 && utag_err.length < 5) utag_err.push({
        e: m,
        s: u,
        l: l,
        t: 'js'
    });
    window._tealium_old_error(m, u, l)
};
var utag_condload = false;
window.__tealium_twc_switch = false;
try {
    try {
        var logThisEnabled = /utagdb=true/.test(document.cookie) ? true : false;
        logThis = (logString) => {
            this.logThisEnabled ? console.log(logString) : '';
        }
        window.rmg_consent = window.rmg_consent || {};
    } catch (e) {
        console.log(e)
    }
} catch (e) {
    console.log(e);
}
if (!utag_condload) {
    try {
        try {
            var extensionName = 'Extension UID: 893, \'Transfer consent from Tealium to Trust Arc\'';
            window.utag_cfg_ovrd = window.utag_cfg_ovrd || {};
            window.utag_cfg_ovrd.split_cookie = false;
            if (/\.royalmail\.com/.test(window.location.hostname)) {
                showTrustArcBanner = () => {}
                hideTrustArcBanner = () => {}
                getConsentChoices = () => {
                    logThis(extensionName + ', getConsentChoices');
                    var tealiumConsentCookieValuesString = document.cookie.replace(/(?:(?:^|.*;\s*)CONSENTMGR\s*\=\s*([^;]*).*$)|^.*$/, "$1");
                    logThis(extensionName + ', tealiumConsentCookieValues: ', tealiumConsentCookieValuesString);
                    var consentChoices = {};
                    if (tealiumConsentCookieValuesString !== '') {
                        var tealiumConsentCookieValuesArr = [];
                        if (tealiumConsentCookieValuesString.indexOf('consent:') > -1 && !/c[\d]:/.test(tealiumConsentCookieValuesString)) {
                            if (tealiumConsentCookieValuesString.indexOf('consent:false') > -1) {
                                tealiumConsentCookieValuesArr = ['c1:0', 'c3:0', 'c6:0']
                                logThis(extensionName + ', consent is false, tealiumConsentCookieValuesArr: ', tealiumConsentCookieValuesArr);
                            } else if (tealiumConsentCookieValuesString.indexOf('consent:true') > -1) {
                                tealiumConsentCookieValuesArr = ['c1:1', 'c3:1', 'c6:1']
                                logThis(extensionName + ', consent is true, tealiumConsentCookieValuesArr: ', tealiumConsentCookieValuesArr);
                            }
                        } else {
                            tealiumConsentCookieValuesArr = tealiumConsentCookieValuesString.split('%7C').filter(consentPair => /c1:|c3:|c6:/.test(consentPair));
                        }
                        logThis(extensionName + ', tealiumConsentCookieValuesArr: ', tealiumConsentCookieValuesArr);
                        var tealiumConsentCategoryMapping = {
                            'c1': 'performance',
                            'c3': 'advertising',
                            'c6': 'functional',
                        };
                        var consentBits = [];
                        var tealiumConsentCookieValuesArrIndex = 0;
                        for (tealiumConsentCookieValuesArrIndex = 0; tealiumConsentCookieValuesArrIndex < tealiumConsentCookieValuesArr.length; tealiumConsentCookieValuesArrIndex++) {
                            consentBits = tealiumConsentCookieValuesArr[tealiumConsentCookieValuesArrIndex].split(':');
                            if (consentBits[1] === '1') {
                                consentChoices[tealiumConsentCategoryMapping[consentBits[0]]] = true;
                            } else {
                                consentChoices[tealiumConsentCategoryMapping[consentBits[0]]] = false;
                            }
                        }
                        logThis(extensionName + ', consentChoices: ', consentChoices);
                    } else {
                        consentChoices = undefined;
                    }
                    return consentChoices;
                }
                setCookieExpiration = () => {}
                getTrustArcVisitorId = () => {}
                transferConsentChoices = () => {}
                var trustArcConsentCategoryMapping = {
                    'functional': '1',
                    'performance': '2',
                    'advertising': '3',
                };
                removeTealiumConsentChoices = () => {}
                getTrustArcConsentCategories = () => {
                    logThis(extensionName + ', getTrustArcConsentCategories');
                    if (/notice_gdpr_prefs=(.+?):?;\s/.test(document.cookie)) {
                        window.rmg_consent['consent_selectedCategoriesArray'] = document.cookie.match(/notice_gdpr_prefs=(\d+(?:,\d+)*)/)[1].split(',');
                        logThis(extensionName + ', consent_selectedCategoriesArray: ' + window.rmg_consent['consent_selectedCategoriesArray']);
                        window.rmg_consent['consent_selectedCategoriesString'] = window.rmg_consent['consent_selectedCategoriesArray'].toString();
                        logThis(extensionName + ', consent_selectedCategoriesString: ' + window.rmg_consent['consent_selectedCategoriesString']);
                        window.rmg_consent['consent_selectedCategoriesString'].indexOf(1) > -1 ? window.rmg_consent['consent_functional'] = 1 : window.rmg_consent['consent_functional'] = 0;
                        logThis(extensionName + ', consent_functional: ' + window.rmg_consent['consent_functional']);
                        window.rmg_consent['consent_selectedCategoriesString'].indexOf(2) > -1 ? window.rmg_consent['consent_performance'] = 1 : window.rmg_consent['consent_performance'] = 0;
                        logThis(extensionName + ', consent_performance: ' + window.rmg_consent['consent_performance']);
                        window.rmg_consent['consent_selectedCategoriesString'].indexOf(3) > -1 ? window.rmg_consent['consent_advertising'] = 1 : window.rmg_consent['consent_advertising'] = 0;
                        logThis(extensionName + ', consent_advertising: ' + window.rmg_consent['consent_advertising']);
                        var trustArcConsentNumericCategoryMapping = {
                            '0': 'strictly necessary',
                            '1': 'functional',
                            '2': 'performance',
                            '3': 'advertising',
                        };
                        window.rmg_consent['consent_selectedCategoriesNamesArray'] = [];
                        window.rmg_consent['consent_selectedCategoriesArray'].map(function(selectCategoryNumber) {
                            window.rmg_consent['consent_selectedCategoriesNamesArray'].push(trustArcConsentNumericCategoryMapping[selectCategoryNumber]);
                        });
                        logThis(extensionName + ', consent_selectedCategoriesNamesArray: ' + window.rmg_consent['consent_selectedCategoriesNamesArray'].toString());
                    }
                }
                transferConsent = () => {
                    logThis(extensionName + ', transferConsent');
                    var tealiumConsentChoices = getConsentChoices();
                    logThis(extensionName + ', transferConsent, tealiumConsentChoices: ', tealiumConsentChoices);
                    if (tealiumConsentChoices !== 'undefined') {
                        var trustArcConsentChoicesCookieString = '0,';
                        Object.keys(tealiumConsentChoices).map(function(tealiumConsentChoiceName) {
                            logThis(extensionName + ', transferConsent, tealiumConsentChoiceName: ', tealiumConsentChoiceName, ', ' + trustArcConsentCategoryMapping[tealiumConsentChoiceName]);
                            trustArcConsentChoicesCookieString += tealiumConsentChoices[tealiumConsentChoiceName] ? trustArcConsentCategoryMapping[tealiumConsentChoiceName] + ',' : '';
                            window.rmg_consent['consent_' + tealiumConsentChoiceName] = 1;
                            logThis(extensionName + ', transferConsent, window.rmg_consent.consent_' + tealiumConsentChoiceName, ': ' + window.rmg_consent['consent_' + tealiumConsentChoiceName]);
                            logThis(extensionName + ', transferConsent, trustArcConsentChoicesCookieString: ', trustArcConsentChoicesCookieString);
                        });
                        trustArcConsentChoicesCookieString = trustArcConsentChoicesCookieString.replace(/,$/, '');
                        logThis(extensionName + ', transferConsent, trustArcConsentChoicesCookieString: ', trustArcConsentChoicesCookieString);
                        document.cookie = 'notice_gdpr_prefs=' + trustArcConsentChoicesCookieString + ';domain=.royalmail.com;path=/;expiry=' + (364 * 24 * 3600);
                    }
                }
                if (document.cookie.indexOf('CONSENTMGR') > -1 && document.cookie.indexOf('notice_gdpr_prefs') === -1) {
                    transferConsent();
                } else {
                    getTrustArcConsentCategories();
                }
                window.rmg_consent.getTrustArcConsentCategories = getTrustArcConsentCategories;
            }
        } catch (e) {
            console.log(e)
        }
    } catch (e) {
        console.log(e);
    }
}
if (!utag_condload) {
    try {
        try {
            var extensionName = 'Extension UID: 885, \'Inject Trust Arc\'';
            if (window.location.hostname == 'obaemergency.royalmail.com' || sessionStorage.getItem('taInject') == 'true') {
                var hideBuiltInBanner = document.createElement('style');
                hideBuiltInBanner.id = 'hideBuiltInBanner';
                hideBuiltInBanner.innerText = '[data-testid="cookie-banner"] {display: none !important}';
                document.head.appendChild(hideBuiltInBanner);
                injectTrustArc = () => {
                    var taScript = document.createElement('script');
                    taScript.id = 'taNotice';
                    taScript.src = 'https://consent.trustarc.com/notice?domain=royalmail.com&c=teconsent&js=nj&noticeType=bb&text=true&gtm=1&pcookie&country=gb';
                    taScript.async;
                    document.head.appendChild(taScript);
                };
                injectTrustArc();
            }
        } catch (e) {
            console.log(e)
        }
    } catch (e) {
        console.log(e);
    }
}
if (!utag_condload) {
    try {
        var path = document.location.pathname.match(/\/apps\/(\w*)/);
        var redirect = "";
        if (/\/apps\//.test(path)) {
            if (path[1] === "android") {
                redirect = "https://play.google.com/store/apps/details?id=eu.intelligentar.royalmail.smilers&hl=en_GB";
            } else if (path[1] === "ipad") {
                redirect = "https://itunes.apple.com/gb/app/royal-mail-smilers-hd/id550926930?mt=8";
            } else if (path[1] === "iphone") {
                redirect = "https://itunes.apple.com/gb/app/royal-mail-smilers/id550637399?mt=8";
            }
            (function retry(retries) {
                if (retries === 0) {
                    utag.DB("utag.loader.ended did not make it in time!");
                    return false;
                } else {
                    if (window.utag && window.utag.loader && window.utag.loader.ended) {
                        window.setTimeout(function() {
                            document.location.href = redirect;
                        }, 350);
                    } else {
                        window.setTimeout(function() {
                            retry.call(window, --retries);
                        }, 100);
                    }
                }
                return true;
            })(50);
        }
    } catch (e) {
        console.log(e);
    }
}
if (!utag_condload) {
    try {
        try {
            (function() {
                var extensionName = 'Extension UID: 770, \'Consent Cookie App to Webview Handshake\'';
                var loader_lh_copy = function(a, b, c) {
                    a = "" + location.hostname;
                    b = a.split(".");
                    c = (/\.co\.|\.com\.|\.org\.|\.edu\.|\.net\.|\.asn\.|\...\.jp$/.test(a)) ? 3 : 2;
                    return b.splice(b.length - c, c).join(".");
                }
                var consent_regex = document.location.search.match(/consent=([^&#]*)/);
                if (consent_regex === null) {
                    return;
                }
                consent_status = true;
                var cookieData = {
                    ts: new Date().getTime(),
                    consent: consent_status
                };
                var consent_string = consent_regex[1];
                var categories_strings = consent_string.match(/c\d{2}\d/g);
                var consent_string_isInNewFormat = /\%7C/.test(consent_string);
                var i = 0;
                var cat = '';
                var val = '';
                if (consent_string_isInNewFormat) {
                    consent_string = decodeURIComponent(consent_string);
                    categories_strings = consent_string.split('|');
                    for (i in categories_strings) {
                        cat = categories_strings[i].split(':')[0], val = categories_strings[i].split(':')[1];
                        cookieData[cat] = val;
                    }
                } else {
                    for (i in categories_strings) {
                        cat = categories_strings[i].substring(0, 3), val = categories_strings[i].substring(3, 4);
                        cookieData[cat] = val;
                    }
                }
                var cookieArr = [];
                i = 0;
                for (i in cookieData) {
                    if (cookieData.hasOwnProperty(i) && /^(consent|dns|ts|c\d+)$/.test(i)) {
                        cookieArr.push(i + ":" + cookieData[i]);
                    }
                }
                var domain = (window.utag_cfg_ovrd && window.utag_cfg_ovrd.domain) ? window.utag_cfg_ovrd.domain : loader_lh_copy();
                var cookie_string = "CONSENTMGR=" + encodeURI(cookieArr.join("|")) + "; path=/; domain=" + domain;
                document.cookie = 'CONSENTMGR=; Max-Age=0; path=/; domain=' + domain;
                document.cookie = cookie_string;
            })();
        } catch (e) {
            console.log(e)
        }
    } catch (e) {
        console.log(e);
    }
}
if (!utag_condload) {
    try {
        try {
            (function() {
                    window.utag_data = window.utag_data || {};
                    var u = window.utag_data;
                    var pN = u['pageName'] || "";
                    pN = pN.toLowerCase();
                    pN = pN.replace(/^rm web application/i, 'rm web app');
                    if (pN == 'rm web app >track and trace >search' || pN == 'rm homepage' || pN == 'rm web app >pricefinder >search' || (pN == 'rm web app >track and trace >result' && u.pageErrorMessage)) {
                        u['collect_tag_load'] = 'no';
                    }
                }
                ());
        } catch (e) {
            console.log(e)
        }
    } catch (e) {
        console.log(e);
    }
}
if (!utag_condload) {
    try {
        window.trackOverlay = window.trackOverlay || function(data) {
            if (/^Email this page/.test(document.title)) {
                return;
            } else {
                utag.view(data);
            }
        }
    } catch (e) {
        console.log(e);
    }
}
if (!utag_condload) {
    try {
        if (document.location.href.indexOf('https://www.royalmail.com/track-your-item') > -1) {
            window.utag_cfg_ovrd = window.utag_cfg_ovrd || {};
            window.utag_cfg_ovrd.dom_complete = true;
        }
    } catch (e) {
        console.log(e);
    }
}
if (!utag_condload) {
    try {
        if (window.utag_data && /^RM Email this page webform/.test(window.utag_data.pageName) || /^Email this page/.test(document.title)) {
            window.utag_cfg_ovrd = window.utag_cfg_ovrd || {};
            window.utag_cfg_ovrd.noload = true;
        }
    } catch (e) {
        console.log(e);
    }
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
        if (dlp === '/business/user/register' || dlp === "/user/register/personal" || dlp === "/user/register" || dlp === "/user/login" || dlp === "/discounts-payment/online-postage/create" || dlp === "/discounts-payment/online-postage/home") {
            var firejQueryTealium = true;
        }
        if (window.utag_data && (window.utag_data.pageApplicationName === "RML - My Account" || window.utag_data.pageApplicationName === "My Account")) {
            var firejQueryTealium = true;
        }
        if (window.location.hostname === 'personal.help.royalmail.com' && typeof jQuery === 'undefined') {
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
        (function() {
            var l = document.location;
            if (l.hostname == 'www.royalmail.com' && l.pathname == '/find-a-postcode') {
                jQuery(document).ready(function() {
                    var imageLocation = '//www.royalmail.com/sites/default/files/landscape-gardens-2016-08-300x200-web.jpg';
                    var linkLocation = 'http://www.royalmail.com/landscapegardensstamps?iid=PEPF_LandscapeGardens_DD_03';
                    if (window.utag.data['ut.env'] == 'dev') {
                        var t;
                        var e = function() {
                            if (jQuery('.envelope').is(":visible")) {
                                window.clearTimeout(t);
                                jQuery('.contextual-collapsible').click();
                                var d = document.createElement('div');
                                var a = document.createElement('a');
                                a.href = linkLocation;
                                d.id = 'w-T18-banner';
                                a.rel = 'nofollow';
                                a.target = '_blank';
                                a.innerHTML = '<img src="' + imageLocation + '">';
                                d.appendChild(a);
                                jQuery('#rml-postcode-finder > div.rightsidebar.left').prepend(d);
                            } else {
                                t = window.setTimeout(e, 500);
                            }
                        };
                        t = window.setTimeout(e, 500);
                    }
                });
            }
        })();
    } catch (e) {
        console.log(e);
    }
}
if (!utag_condload) {
    try {
        (function() {
            var audienceList = {};
            audienceList['Test Diagnostic Audience'] = {
                imageLocation: '//www.royalmail.com/sites/default/files/Beatrix-Potter-Track-Trace-300x200.jpg',
                linkLocation: 'http://www.royalmail.com/beatrixpotterstamps?iid=PETT_BeatrixPotter_DD_01',
                pageTestExperimentID: 'e1Beatrix',
                pageTestVariation: 'vBeatrix1',
                daysToShowAfterJoinedAudience: 30,
                howManyTimesToShowThisTestVariation: 3,
                IDOfTallyToCheckHowManyTimesTestVariationHasBeenShownRecently: '7012'
            };
            audienceList['Default'] = {
                imageLocation: '//www.royalmail.com/sites/default/files/landscape-gardens-2016-08-300x200-web.jpg',
                linkLocation: 'http://www.royalmail.com/landscapegardensstamps?iid=PETT_LandscapeGardens_DD_04',
                pageTestExperimentID: 'eDefault1',
                pageTestVariation: 'vDefault1'
            };
            var hostNamesToRun = /www\.royalmail\.com/;
            var pathsToRun = /^\/track-your-item/;
            var queryToRun = /tealiumdev=true/;
            var pageApplicationNameToRun = /Track and Trace/;
            var pageApplicationStepToShowAds = /Result/;
            var l = document.location;
            if (queryToRun.test(l.search) && hostNamesToRun.test(l.hostname) && pathsToRun.test(l.pathname) && pageApplicationNameToRun.test(window.utag_data['pageApplicationName']) && pageApplicationStepToShowAds.test(window.utag_data['pageApplicationStep'])) {
                window.tealium_rm_local_vp = window.tealium_rm_local_vp || JSON.parse(localStorage.getItem('tealium_va'));
                var vp = window.tealium_rm_local_vp;
                var al, thisAudienceListObject;
                if (vp && vp.audiences) {
                    outer: for (al in audienceList) {
                        if (audienceList.hasOwnProperty(al)) {
                            thisAudienceListObject = audienceList[al];
                            for (var am in vp.audiences) {
                                if (vp.audiences.hasOwnProperty(am)) {
                                    var amName = vp.audiences[am];
                                    if (al == amName) {
                                        var joinedAt = new Date(vp.audiences_joined_at[am].$date);
                                        var now = new Date();
                                        var daysAgoJoined = (now - joinedAt) / (1000 * 60 * 60 * 24);
                                        if (daysAgoJoined <= thisAudienceListObject.daysToShowAfterJoinedAudience) {
                                            var timesShownRecently = 0;
                                            if (vp.current_visit && vp.current_visit.metric_sets) {
                                                var metricSet = vp.current_visit.metric_sets[thisAudienceListObject.IDOfTallyToCheckHowManyTimesTestVariationHasBeenShownRecently];
                                                if (metricSet) {
                                                    var theKey = thisAudienceListObject.pageTestExperimentID + ',' + thisAudienceListObject.pageTestVariation;
                                                    timesShownRecently = metricSet[theKey] || 0;
                                                }
                                            }
                                            if (timesShownRecently < thisAudienceListObject.howManyTimesToShowThisTestVariation) {
                                                break outer;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                if (!thisAudienceListObject) {
                    thisAudienceListObject = audienceList['Default'];
                }
                window.utag_data = window.utag_data || {};
                window.utag_data['pageTestVariation'] = thisAudienceListObject.pageTestVariation;
                window.utag_data['pageTestExperimentID'] = thisAudienceListObject.pageTestExperimentID;
                var imageLocation = thisAudienceListObject.imageLocation;
                var linkLocation = thisAudienceListObject.linkLocation;
                jQuery(document).ready(function() {
                    if (jQuery('.your-deliveries').length >= 1) {
                        jQuery(document).ready(function() {
                            var d = function() {
                                jQuery('.contextual-collapsible').click();
                                var a = document.createElement('a');
                                a.href = linkLocation;
                                a.id = 'wt-mup';
                                a.rel = 'nofollow';
                                a.target = '_blank';
                                a.innerHTML = '<img src="' + imageLocation + '">';
                                jQuery('#track-your-item > div.rightsidebar.left').append(a);
                                window.setTimeout(function() {
                                    var o = jQuery('#wt_overlay')[0];
                                    o.parentNode.removeChild(o);
                                }, 500);
                            };
                            window.setTimeout(d, 100);
                        });
                    }
                });
            } else if (queryToRun.test(l.search) && hostNamesToRun.test(l.hostname) && pathsToRun.test(l.pathname) && pageApplicationNameToRun.test(window.utag_data['pageApplicationName'])) {
                jQuery(document).ready(function() {
                    window.setTimeout(function() {
                        var o = jQuery('#wt_overlay')[0];
                        o.parentNode.removeChild(o);
                    }, 500);
                });
            }
        })();
    } catch (e) {
        console.log(e);
    }
}
if (!utag_condload) {
    try {
        (function() {
            if (window.utag_data['pageApplicationName'] === 'Redirections' && window.utag_data['pageApplicationStep'] === 'New Confirmation') {
                jQuery(document).ready(function() {
                    var imageLocation = '//www.royalmail.com/sites/default/files/landscape-gardens-2016-08-300x200-web.jpg';
                    var linkLocation = 'http://www.royalmail.com/landscapegardensstamps?iid=PERD_LandscapeGardens_DD_05';
                    if (window.utag.data['ut.env'] == 'dev') {
                        var a = document.createElement('a');
                        a.href = linkLocation;
                        a.id = 'teal-link';
                        a.rel = 'nofollow';
                        a.target = '_blank';
                        a.innerHTML = '<img src="' + imageLocation + '">';
                        a.style = "float:right; margin-top:20px;";
                        jQuery("div[role='main']").prepend(a);
                    }
                });
            }
        })();
    } catch (e) {
        console.log(e);
    }
}
if (!utag_condload) {
    try {
        (function() {
            var l = document.location;
            if (l.pathname === '/personal/receiving-mail/redelivery/confirmed') {
                jQuery(document).ready(function() {
                    var imageLocation = '//www.royalmail.com/sites/default/files/landscape-gardens-2016-08-300x200-web.jpg';
                    var linkLocation = 'http://www.royalmail.com/landscapegardensstamps?iid=PERE_LandscapeGardens_DD_06';
                    if (window.utag.data['ut.env'] == 'dev') {
                        var a = document.createElement('a');
                        var d = document.createElement('div');
                        a.href = linkLocation;
                        a.id = 'wt45_banner';
                        a.rel = 'nofollow';
                        a.target = '_blank';
                        a.innerHTML = '<img src="' + imageLocation + '">';
                        d.style = "margin-top:17px;";
                        d.appendChild(a);
                        jQuery('.faq_collection').prepend(d);
                    }
                });
            }
        })();
    } catch (e) {
        console.log(e);
    }
}
if (!utag_condload) {
    try {
        (function() {
            var l = document.location;
            if (l.hostname == 'www.royalmail.com' && l.pathname == '/business/find-a-postcode') {
                jQuery(document).ready(function() {
                    var imageLocation = '//www.royalmail.com/sites/default/files/landscape-gardens-2016-08-300x200-web.jpg';
                    var linkLocation = 'http://www.royalmail.com/landscapegardensstamps?iid=BUPF_LandscapeGardens_DD_07';
                    if (window.utag.data['ut.env'] == 'dev') {
                        (function() {
                            var t;
                            var e = function() {
                                if (jQuery('.address').is(":visible")) {
                                    window.clearTimeout(t);
                                    var d = document.createElement('d');
                                    var a = document.createElement('a');
                                    a.href = linkLocation;
                                    d.id = 'w-T41-banner';
                                    a.rel = 'nofollow';
                                    a.target = '_blank';
                                    a.innerHTML = '<img src="' + imageLocation + '">';
                                    d.appendChild(a);
                                    jQuery('.region-sidebar-second').prepend(d);
                                } else {
                                    t = window.setTimeout(e, 500);
                                }
                            };
                            t = window.setTimeout(e, 500);
                        })
                        ();
                    }
                });
            }
        })();
    } catch (e) {
        console.log(e);
    }
}
if (!utag_condload) {
    try {
        (function() {
            var l = document.location;
            if (l.hostname == 'www.royalmail.com' && /^\/business\/track-your-item/.test(l.pathname) && /parcel_tracking_number=/.test(l.search)) {
                jQuery(document).ready(function() {
                    var imageLocation = '//www.royalmail.com/sites/default/files/landscape-gardens-2016-08-300x200-web.jpg';
                    var linkLocation = 'http://www.royalmail.com/landscapegardensstamps?iid=BUTT_LandscapeGardens_DD_08';
                    if (window.utag.data['ut.env'] == 'dev') {
                        if (jQuery('.tracking-results').length >= 1) {
                            jQuery(document).ready(function() {
                                var d = function() {
                                    var d = document.createElement('div');
                                    var a = document.createElement('a');
                                    a.href = linkLocation;
                                    d.id = 'teal-link';
                                    a.rel = 'nofollow';
                                    a.target = '_blank';
                                    a.innerHTML = '<img src="' + imageLocation + '">';
                                    d.style = "float:right; float:top;";
                                    d.appendChild(a);
                                    jQuery('#edit-track-and-trace-form-block').prepend(d);
                                    window.setTimeout(function() {
                                        var o = jQuery('#wt_overlay')[0];
                                        o.parentNode.removeChild(o);
                                    }, 500);
                                };
                                window.setTimeout(d, 100);
                            });
                        } else {
                            window.setTimeout(function() {
                                var o = jQuery('#wt_overlay')[0];
                                o.parentNode.removeChild(o);
                            }, 500);
                        }
                    }
                });
            }
        })();
    } catch (e) {
        console.log(e);
    }
}
if (!utag_condload) {
    try {
        try {
            if (document.location.pathname === "/po-box" || document.location.pathname === "/track-your-item" || document.location.pathname === "/personal/receiving-mail/pay-a-fee/pay" || document.location.pathname === "/business/pay-invoice/" || document.location.pathname === "/app/webforms/claim" || document.location.pathname === "/app/webforms/contact/c/32" || document.location.pathname === "/app/webforms/contact/c/310" || document.location.pathname === "/app/webforms/contact/c/45" || document.location.pathname === "/app/webforms/contact/c/317" || document.location.pathname === "/app/webforms/contact/c/46" || document.location.pathname === "/app/webforms/fee_refund") {
                window.utag_cfg_ovrd = window.utag_cfg_ovrd || {};
                window.utag_cfg_ovrd.noview = true;
            }
        } catch (e) {
            console.log(e)
        }
    } catch (e) {
        console.log(e);
    }
}
if (!utag_condload) {
    try {
        try {
            window.utag_cfg_ovrd = window.utag_cfg_ovrd || {};
            window.utag_cfg_ovrd.gdprDLRef = "pageLanguage";
        } catch (e) {
            console.log(e)
        }
    } catch (e) {
        console.log(e);
    }
}
if (!utag_condload) {
    try {
        try {
            window.utag_cfg_ovrd = window.utag_cfg_ovrd || {};
            window.utag_cfg_ovrd.consentPeriod = 341;
            window.utag_cfg_ovrd.split_cookie = false;
        } catch (e) {
            console.log(e)
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
                        if (cookieFilter.getCookieValues().consent == 'false' || cookieFilter.getCookieValues().consent == false) {} else {
                            cookieFilter.docCookie.set.call(document, value);
                        }
                    } else {}
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
if (!utag_condload) {
    try {
        try {
            if (window.location.pathname.indexOf('/downloadapp/nd1') == 0) {
                var userAgent = window.navigator && window.navigator.userAgent,
                    newURL;
                if (/android/i.test(userAgent)) {
                    newURL = "https://play.google.com/store/apps/details?id=com.royalmail.app.droid";
                } else if (/iPad|iPhone|iPod/.test(userAgent)) {
                    newURL = "https://apps.apple.com/gb/app/royal-mail/id1435168829";
                } else {
                    newURL = "https://www.royalmail.com/downloadapp"
                }
                window.location.replace(newURL);
                window.utag_cfg_ovrd = window.utag_cfg_ovrd || {};
                window.utag_cfg_ovrd.noload = true;
            }
        } catch (e) {
            console.log(e)
        }
    } catch (e) {
        console.log(e);
    }
}
if (typeof utag == "undefined" && !utag_condload) {
    var utag = {
        id: "royalmail.main",
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
                        c = 'utag_royalmail.main_' + a.id;
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
                t["tealium_visitor_id"] = o["tealium_visitor_id"] = o["ut.visitor_id"] = o["cp.utag_main_v_id"];
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
                utag.ut.merge(o, t, 1);
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
                (function(a, b, c, l) {
                    if (typeof utag_err != 'undefined' && utag_err.length > 0) {
                        a = '//uconnect.tealiumiq.com/ulog/_error?utid=' + utag.cfg.utid;
                        l = utag_err.length > 5 ? 5 : utag_err.length;
                        for (b = 0; b < l; b++) {
                            c = utag_err[b];
                            a += '&e' + b + '=' + encodeURIComponent(c.t + '::' + c.l + '::' + c.s + '::' + c.e);
                        }
                        utag.dbi.push((new Image()).src = a);
                    }
                })();
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
    utag.o['royalmail.main'] = utag;
    utag.cfg = {
        template: "ut4.53.",
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
        path: "//tags.tiqcdn.com/utag/royalmail/main/prod/",
        utid: "royalmail/main/202605010910",
        ignoreSessionStorage: false,
        ignoreLocalStorage: false,
        split_cookie: true
    };
    utag.cfg.v = utag.cfg.template + "202605010910";
    utag.cond = {
        134: 0,
        246: 0,
        279: 0,
        324: 0,
        325: 0,
        343: 0,
        413: 0,
        414: 0,
        435: 0,
        436: 0,
        441: 0,
        463: 0,
        464: 0,
        474: 0,
        475: 0,
        484: 0,
        492: 0,
        495: 0,
        496: 0,
        502: 0,
        503: 0,
        505: 0,
        508: 0,
        509: 0,
        512: 0,
        516: 0,
        517: 0,
        518: 0,
        520: 0,
        524: 0,
        526: 0,
        528: 0,
        530: 0,
        533: 0,
        534: 0,
        535: 0,
        538: 0,
        543: 0,
        544: 0,
        545: 0,
        547: 0,
        549: 0,
        554: 0,
        555: 0,
        556: 0
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
        try {
            ud['js_page.fire_dc'] = fire_dc
        } catch (e) {
            utag.DB(e)
        };
    };
    utag.loader.chkCanRunTime = function(s, e, d, t, o, i) {
        try {
            o = {
                is: [s, e],
                dt: [],
                tm: [],
                hd: 0,
                ms: 0
            };
            for (i = 0; i < 2; i++) {
                d = o.is[i].substring(0, 8);
                t = o.is[i].substring(8);
                o.dt[i] = new Date();
                if (d !== '--------') {
                    o.dt[i].setFullYear(d.substring(0, 4));
                    o.dt[i].setMonth(parseInt(d.substring(4, 6)) - 1);
                    o.dt[i].setDate(d.substring(6, 8));
                }
                if (t !== '----') {
                    o.dt[i].setHours(t.substring(0, 2));
                    o.dt[i].setMinutes(t.substring(2, 4));
                } else {
                    o.dt[i].setHours(o.hd);
                    o.dt[i].setMinutes(o.ms);
                }
                o.dt[i].setSeconds(o.ms);
                o.tm[i] = o.dt[i].getTime();
                o.hd = 23;
                o.ms = 59;
            }
            o.n = new Date().getTime();
            return (o.n >= o.tm[0] && o.n <= o.tm[1]);
        } catch (e) {
            return false;
        }
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
                case '134':
                    try {
                        c[134] |= (/^\/redirections\/new\/complete\//i.test(d['dom.pathname']) && d['pageApplicationStep'] == 'New Confirmation')
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '246':
                    try {
                        c[246] |= (/^\/redirections\/new\/complete\//i.test(d['dom.pathname']) && d['pageApplicationStep'].toString().toLowerCase() == 'New Confirmation'.toLowerCase()) || (/^\/redirections\/renewal\/complete\//i.test(d['dom.pathname']) && d['pageApplicationStep'].toString().toLowerCase() == 'Renew Confirmation'.toLowerCase())
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '279':
                    try {
                        c[279] |= (d['dom.url'].toString().indexOf('/business-campaign/door-to-door/') > -1 && d['dom.domain'].toString().indexOf('royalmail.com') > -1) || (d['dom.url'].toString().indexOf('/business/mail/marketing/hybrid-mail') > -1 && d['dom.domain'].toString().indexOf('royalmail.com') > -1) || (d['dom.url'].toString().indexOf('/business/marketing/mail/readyforbusiness') > -1 && d['dom.domain'].toString().indexOf('royalmail.com') > -1) || (d['dom.url'].toString().indexOf('/business/marketing/mail/doordropshalfprice') > -1 && d['dom.domain'].toString().indexOf('royalmail.com') > -1) || (d['dom.url'].toString().indexOf('/business/marketing/mail/back2business') > -1 && d['dom.domain'].toString().indexOf('royalmail.com') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '324':
                    try {
                        c[324] |= (d['dom.domain'].toString().toLowerCase().indexOf('royalmail.com'.toLowerCase()) > -1 && d['dom.pathname'].toString().toLowerCase() == '/business/catalogues-download-report'.toLowerCase())
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '325':
                    try {
                        c[325] |= (d['dom.domain'].toString().toLowerCase().indexOf('royalmail.com'.toLowerCase()) > -1 && d['dom.pathname'].toString().toLowerCase() == '/business/node/1264/done'.toLowerCase())
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '343':
                    try {
                        c[343] |= (d['dom.domain'].toString().toLowerCase().indexOf('mailshotmaker.royalmail.com'.toLowerCase()) > -1 && typeof d['visitorGUID'] != 'undefined' && d['visitorGUID'] != '' && d['dom.pathname'].toString().toLowerCase().indexOf('/register'.toLowerCase()) > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '413':
                    try {
                        c[413] |= (d['dom.pathname'].toString().toLowerCase() == '/checkout/cart/'.toLowerCase())
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '414':
                    try {
                        c[414] |= (d['dom.pathname'].toString().toLowerCase() == '/checkout/onepage/success/'.toLowerCase())
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '435':
                    try {
                        c[435] |= (d['dom.pathname'].toString().indexOf('/keep-safe') > -1 && d['dom.hash'].toString().indexOf('/order-confirmation') > -1) || (d['dom.pathname'].toString().indexOf('/keep-safe') > -1 && d['dom.hash'].toString().indexOf('/confirmation') > -1) || (d['pageApplicationStep'].toString().indexOf('Payment Confirmation') > -1 && d['pageApplicationName'].toString().indexOf('Keepsafe') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '436':
                    try {
                        c[436] |= (d['dom.pathname'].toString().indexOf('/po-box') > -1 && d['dom.hash'].toString().indexOf('/confirmation') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '441':
                    try {
                        c[441] |= (d['dom.domain'].toString().toLowerCase() == 'personal.help.royalmail.com'.toLowerCase() && d['dom.pathname'].toString().toLowerCase() == '/app/webforms/serviceupdates'.toLowerCase())
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '463':
                    try {
                        c[463] |= (d['pageName'].toString().toLowerCase() == 'RM BUS >Parcel delivery 1'.toLowerCase())
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '464':
                    try {
                        c[464] |= (d['pageName'].toString().toLowerCase() == 'RM BUS >Parcel delivery >Form Confirmation 1'.toLowerCase())
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '474':
                    try {
                        c[474] |= (d['dom.url'] == 'https://www.royalmail.com/business/grow-your-international-business/contact-form?source=Business-USA')
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '475':
                    try {
                        c[475] |= (d['dom.url'] == 'https://www.royalmail.com/business/grow-your-international-business/contact-form?source=Business-Australia')
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '484':
                    try {
                        c[484] |= (/^\/redirections\/new\/payment\//i.test(d['dom.pathname']) && d['dom.pathname'].toString().toLowerCase().indexOf('/redirections/new/payment-failed'.toLowerCase()) < 0)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '492':
                    try {
                        c[492] |= (d['dom.pathname'].toString().toLowerCase() == '/business/get-going'.toLowerCase() && d['pageName'].toString().indexOf('RM BUS >Get Going >Form Confirmation') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '495':
                    try {
                        c[495] |= (d['dom.domain'].toString().indexOf('royalmail.com') > -1 && d['dom.pathname'].toString().toLowerCase().indexOf('/yearoftracked'.toLowerCase()) > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '496':
                    try {
                        c[496] |= (d['pageApplicationName'] == 'RM Shop' && d['pageApplicationStep'] == 'Homepage')
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '502':
                    try {
                        c[502] |= (d['dom.pathname'] == '/deliverreturns/') || (d['dom.pathname'] == '/deliverreturns/thank-you') || (d['dom.pathname'] == '/deliverreturns') || (d['dom.pathname'] == '/helloworld') || (d['dom.pathname'] == '/business/international/parcel-delivery' && d['qp.source'].toString().toLowerCase().indexOf('HelloWorld'.toLowerCase()) > -1 && d['pageName'].toString().indexOf('RM BUS >International >Parcel Delivery 867') > -1) || (d['dom.pathname'] == '/business/international/parcel-delivery' && d['qp.source'].toString().toLowerCase().indexOf('HelloWorld'.toLowerCase()) > -1 && d['pageName'].toString().indexOf('RM BUS >International >Parcel Delivery 867 Form Confirmation') > -1) || (d['dom.pathname'] == '/delivertracked') || (d['dom.pathname'] == '/delivertracked/') || (d['dom.pathname'] == '/delivertracked/thank-you') || (d['dom.pathname'] == '/sending/barcoded-stamps') || (d['dom.pathname'] == '/sending/stamps/penny-black') || (d['dom.pathname'] == '/sending/barcode-stamps/videos') || (d['dom.pathname'] == '/sending/international/international-tracked') || (d['dom.pathname'] == '/sending/international/online-pricing') || (d['dom.pathname'].toString().toLowerCase() == '/business/parcel-delivery/sector'.toLowerCase() && d['dom.query_string'].toString().toLowerCase() == 'source=food-drink'.toLowerCase()) || (d['dom.pathname'].toString().toLowerCase() == '/stamps-and-supplies/subscriptions'.toLowerCase()) || (d['dom.pathname'].toString().toLowerCase() == '/christmas'.toLowerCase())
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '503':
                    try {
                        c[503] |= (d['dom.domain'].toString().indexOf('shop.royalmail.com') > -1) || (d['dom.domain'].toString().indexOf('prdfastmag.royalmail.com') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '505':
                    try {
                        c[505] |= (d['dom.pathname'] == '/delivertracked') || (d['dom.pathname'] == '/delivertracked/thank-you') || (d['dom.pathname'] == '/deliverreturns') || (d['dom.pathname'] == '/deliverreturns/thank-you')
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '508':
                    try {
                        c[508] |= (typeof d['dom.url'] != 'undefined' && d['dom.url'].toString().toLowerCase() == 'https://www.royalmail.com/business/manage-mail/relay'.toLowerCase()) || (typeof d['dom.url'] != 'undefined' && d['dom.url'].toString().toLowerCase().indexOf('https://www.royalmail.com/business/manage-mail/relay/parts'.toLowerCase()) > -1) || (typeof d['dom.url'] != 'undefined' && d['dom.url'].toString().toLowerCase().indexOf('https://www.royalmail.com/business/manage-mail/relay/finance'.toLowerCase()) > -1) || (typeof d['dom.url'] != 'undefined' && d['dom.url'].toString().toLowerCase().indexOf('https://www.royalmail.com/business/manage-mail/relay/retail'.toLowerCase()) > -1) || (typeof d['dom.url'] != 'undefined' && d['dom.url'].toString().toLowerCase().indexOf('https://www.royalmail.com/business/manage-mail/relay/callback-form'.toLowerCase()) > -1) || (typeof d['dom.url'] != 'undefined' && d['dom.url'].toString().toLowerCase().indexOf('https://www.royalmail.com/business/parcels/relay/callback-form/thank-you'.toLowerCase()) > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '509':
                    try {
                        c[509] |= (d['dom.domain'].toString().indexOf('royalmail.com') > -1 && d['dom.title'].toString().indexOf('Royal Mail and Pharmacy2U') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '512':
                    try {
                        c[512] |= (d['dom.domain'].toString().indexOf('royalmail.com') > -1 && d['dom.pathname'].toString().toLowerCase() == '/receiving/redirection/concessions'.toLowerCase())
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '516':
                    try {
                        c[516] |= (d['dom.pathname'] == '/') || (d['dom.pathname'] == '/green')
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '517':
                    try {
                        c[517] |= (typeof d['fb_custom_event'] != 'undefined' && typeof d['fb_custom_event'] != 'undefined' && d['fb_custom_event'] != '')
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '518':
                    try {
                        c[518] |= (d['dom.pathname'].toString().toLowerCase() == '/in-good-hands'.toLowerCase())
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '520':
                    try {
                        c[520] |= (d['dom.pathname'] == '/in-good-hands/thank-you')
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '524':
                    try {
                        c[524] |= (d['dom.pathname'].toString().toLowerCase() == '/keep-safe'.toLowerCase()) || (d['dom.pathname'].toString().toLowerCase() == '/receiving/keepsafe'.toLowerCase())
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '526':
                    try {
                        c[526] |= (d['dom.pathname'].toString().toLowerCase().indexOf('track-your-item'.toLowerCase()) > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '528':
                    try {
                        c[528] |= (d['shopEvent'].toString().indexOf('scAdd') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '530':
                    try {
                        c[530] |= (d['va.current_visit.properties.12943'] == 'true' && typeof d['va.current_visit.properties.12943'] != 'undefined' && d['dom.url'].toString().indexOf('checkout/onepage/success') > -1 && d['productCategory'].toString().indexOf('philatelic') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '533':
                    try {
                        c[533] |= (d['dom.pathname'].toString().indexOf('/better-mile-widget') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '534':
                    try {
                        c[534] |= (d['dom.pathname'].toString().toLowerCase() == '/stamps-and-supplies/subscriptions/sign-up-form/thank-you'.toLowerCase())
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '535':
                    try {
                        c[535] |= (/^\/register(\/(your\-details|address\-and\-phone\-number|submit|check\-your\-email|success(\/redirect)?))?$/.test(d['dom.pathname'])) || (/^\/user\/register\/(personal|business)$/.test(d['dom.pathname'])) || (/^\/register\/set\-password\/.+/.test(d['dom.pathname'])) || (/^(\/cy)?\/change\-delivery\-option$/.test(d['dom.pathname'])) || (/^(\/cy)?\/find\-a\-postcode$/.test(d['dom.pathname'])) || (/^\/services-near-you/i.test(d['dom.pathname']))
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '538':
                    try {
                        c[538] |= (/^www(qa|qt)?\.royalmail\.com$/.test(d['dom.domain']) && /^\/receiving\/(keepsafe|po-box).*/.test(d['dom.pathname'])) || (/^www(qa|qt)?\.royalmail\.com$/.test(d['dom.domain']) && d['dom.pathname'] == '/keep-safe' && /^\/(check-details|confirmation)$/.test(d['dom.hash'])) || (d['dom.domain'].toString().toLowerCase() == 'shop.royalmail.com'.toLowerCase() && /^\/(checkout\/onepage\/success\/)?$/.test(d['dom.pathname'])) || (d['dom.domain'].toString().toLowerCase() == 'prdfastmag.royalmail.com'.toLowerCase() && /^\/(checkout\/onepage\/success\/)?$/.test(d['dom.pathname'])) || (d['dom.domain'].toString().toLowerCase() == 'shop.royalmail.com'.toLowerCase() && d['dom.pathname'].toString().toLowerCase().indexOf('/checkout/'.toLowerCase()) > -1 && d['dom.pathname'].toString().toLowerCase() != '/checkout/cart/'.toLowerCase()) || (d['dom.domain'].toString().toLowerCase() == 'prdfastmag.royalmail.com'.toLowerCase() && d['dom.pathname'].toString().toLowerCase().indexOf('/checkout/'.toLowerCase()) > -1 && d['dom.pathname'].toString().toLowerCase() != '/checkout/cart/'.toLowerCase()) || (d['tealium_event'] == 'momentsiq_submit') || (d['tealium_event'].toString().toLowerCase() == 'link'.toLowerCase() && d['dom.domain'].toString().toLowerCase() == 'shop.royalmail.com'.toLowerCase() && /.*(scAdd|miniBasket|remove).*/.test(d['shopEvent'])) || (d['tealium_event'].toString().toLowerCase() == 'view'.toLowerCase() && d['dom.domain'].toString().toLowerCase() == 'shop.royalmail.com'.toLowerCase() && d['shopEvent'].toString().toLowerCase() == 'basketView'.toLowerCase()) || (d['dom.pathname'].toString().toLowerCase().indexOf('/po-box'.toLowerCase()) > -1 && /^www(qa|qt)?\.royalmail\.com$/.test(d['dom.domain'])) || (/^https:\/\/www\.royalmail\.com\/cpp/i.test(d['dom.url']) && /^PoBox/i.test(d['qp.appName'])) || (/^https:\/\/www\.royalmail\.com\/cpp/i.test(d['dom.url']) && d['qp.orderKey'].toString().toLowerCase().indexOf('POBOX'.toLowerCase()) > -1) || (/^www(qa|qt)?\.royalmail\.com$/.test(d['dom.domain']) && /^\/(delivermore|delivermore-ezine|delivermore4-ezine|delivermore\/thank-you)\/?$/.test(d['dom.pathname'])) || (/^www(qa|qt)?\.royalmail\.com$/.test(d['dom.domain']) && /^\/(deliverreturns|deliverreturns-ezine|deliverreturns\/thank-you)\/?$/.test(d['dom.pathname'])) || (/^www(qa|qt)?\.royalmail\.com$/.test(d['dom.domain']) && /^\/(oba\/account-authorisation|user\/oba-registration-confirmation)\/?$/.test(d['dom.pathname'])) || (/^www(qa|qt)?\.royalmail\.com$/.test(d['dom.domain']) && /^\/business\/(parcel-delivery\/landing|parcel-delivery|get-going|parcels\/contact)\/?$/.test(d['dom.pathname'])) || (/^www(qa|qt)?\.royalmail\.com$/.test(d['dom.domain']) && /^\/stamps-and-supplies\/subscriptions(\/sign-up-form(\/thank-you)?)?\/?$/.test(d['dom.pathname']))
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '543':
                    try {
                        c[543] |= (d['pageApplicationName'] == 'RM Shop' && d['pageTemplate'] == 'Product Detail')
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '544':
                    try {
                        c[544] |= (d['va.current_visit.properties.12945'] == 'true' && typeof d['va.current_visit.properties.12945'] != 'undefined') || (typeof d['va.current_visit.properties.12945'] == 'undefined')
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '545':
                    try {
                        c[545] |= (d['dom.pathname'].toString().toLowerCase() == '/business/delivery-solutions/food-and-drink'.toLowerCase())
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '547':
                    try {
                        c[547] |= (d['dom.pathname'].toString().indexOf('/checkout/') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '549':
                    try {
                        c[549] |= (d['dom.pathname'] == '/nextlevel')
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '554':
                    try {
                        c[554] |= (utag.loader.chkCanRunTime("202510170000", "202511142359")) && ((/^www(qa|qt)?\.royalmail\.com$/.test(d['dom.domain']) && /^\/business.*$/.test(d['dom.pathname'])))
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '555':
                    try {
                        c[555] |= (d['tealium_event'].toString().toLowerCase() == 'view'.toLowerCase() && d['dom.pathname'].toString().toLowerCase() == '/christmas'.toLowerCase())
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '556':
                    try {
                        c[556] |= (d['dom.url'].toString().indexOf('services-near-you#/results') > -1)
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
                    var extensionName = 'Extension UID: 820, \'Get consent categories\'';
                    b['consent_selectedCategoriesArray'] = document.cookie.match(/notice_gdpr_prefs=(\d+(?:,\d+)*)/)[1].split(',') || window.rmg_consent.consent_selectedCategoriesArray;
                    b['consent_selectedCategoriesString'] = b['consent_selectedCategoriesArray'].toString();
                    utag.DB(extensionName + ', consent_selectedCategoriesArray: ' + b['consent_selectedCategoriesArray']);
                    utag.DB(extensionName + ', consent_selectedCategoriesString: ' + b['consent_selectedCategoriesString']);
                    b['consent_selectedCategoriesString'].indexOf(1) > -1 ? b['consent_functional'] = 1 : b['consent_functional'] = 0;
                    utag.DB(extensionName + ', consent_functional: ' + b['consent_functional']);
                    b['consent_selectedCategoriesString'].indexOf(2) > -1 ? b['consent_performance'] = 1 : b['consent_performance'] = 0;
                    utag.DB(extensionName + ', consent_performance: ' + b['consent_performance']);
                    b['consent_selectedCategoriesString'].indexOf(3) > -1 ? b['consent_advertising'] = 1 : b['consent_advertising'] = 0;
                    utag.DB(extensionName + ', consent_advertising: ' + b['consent_advertising']);
                    window.rmg_consent.getTrustArcConsentCategories();
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b, c, d, e, f, g) {
            if (1) {
                d = b['pageNodeID'];
                if (typeof d == 'undefined') return;
                c = [{
                    'sku_AS31B': 'Y'
                }, {
                    'sku_MZ111': 'Y'
                }, {
                    'sku_AP409': 'Y'
                }, {
                    'sku_YB059': 'Y'
                }, {
                    'sku_AT090': 'Y'
                }, {
                    'sku_AS55B': 'Y'
                }, {
                    'sku_AS56B': 'Y'
                }, {
                    'sku_AS58B': 'Y'
                }, {
                    'sku_AS59B': 'Y'
                }, {
                    'sku_N3076': 'Y'
                }, {
                    'sku_N3077': 'Y'
                }, {
                    'sku_N3078': 'Y'
                }, {
                    'sku_PK068': 'Y'
                }, {
                    'sku_N3079': 'Y'
                }, {
                    'sku_VA294': 'Y'
                }, {
                    'sku_VA295': 'Y'
                }, {
                    'sku_N3109': 'Y'
                }, {
                    'sku_AS3093': 'Y'
                }, {
                    'sku_AP437': 'Y'
                }, {
                    'sku_NG006': 'Y'
                }, {
                    'sku_NG007': 'Y'
                }, {
                    'sku_NG008': 'Y'
                }, {
                    'sku_YB072': 'Y'
                }, {
                    'sku_YB073': 'Y'
                }, {
                    'sku_AQ255': 'Y'
                }, {
                    'sku_AW066': 'Y'
                }, {
                    'sku_AM050': 'Y'
                }, {
                    'sku_AM048': 'Y'
                }, {
                    'sku_AM049': 'Y'
                }, {
                    'sku_AM052': 'Y'
                }, {
                    'sku_AS3093M': 'Y'
                }, {
                    'sku_AS3093N': 'Y'
                }, {
                    'sku_AS3093P': 'Y'
                }, {
                    'sku_AT098': 'Y'
                }, {
                    'sku_AS3093COLL': 'Y'
                }, {
                    'sku_UB407': 'Y'
                }, {
                    'sku_UB406': 'Y'
                }, {
                    'sku_AS3093BFS': 'Y'
                }, {
                    'sku_AS3093BHS': 'Y'
                }, {
                    'sku_AS3093CFS': 'Y'
                }, {
                    'sku_AS3093CHS': 'Y'
                }, {
                    'sku_N3110': 'Y'
                }, {
                    'sku_N3111': 'Y'
                }, {
                    'sku_PK088': 'Y'
                }, {
                    'sku_PK092': 'Y'
                }, {
                    'sku_PK087': 'Y'
                }, {
                    'sku_AE380': 'Y'
                }, {
                    'sku_PK093': 'Y'
                }, {
                    'sku_ZS050': 'Y'
                }, {
                    'sku_AS3257': 'Y'
                }, {
                    'sku_AS3257BFS': 'Y'
                }, {
                    'sku_AS3257CFS': 'Y'
                }, {
                    'sku_AS3257BHS': 'Y'
                }, {
                    'sku_AS3257CHS': 'Y'
                }, {
                    'sku_MZ129': 'Y'
                }, {
                    'sku_AW064': 'Y'
                }, {
                    'sku_AW065': 'Y'
                }, {
                    'sku_HE073': 'Y'
                }, {
                    'sku_AP440': 'Y'
                }, {
                    'sku_AQ258': 'Y'
                }, {
                    'sku_YB074': 'Y'
                }, {
                    'sku_YB075': 'Y'
                }, {
                    'sku_UB412': 'Y'
                }, {
                    'sku_AT102': 'Y'
                }, {
                    'sku_AM054': 'Y'
                }, {
                    'sku_AM055': 'Y'
                }, {
                    'sku_AM057': 'Y'
                }, {
                    'sku_AW072': 'Y'
                }, {
                    'sku_MZ129A': 'Y'
                }, {
                    'sku_N3115': 'Y'
                }, {
                    'sku_N3116': 'Y'
                }, {
                    'sku_N3119': 'Y'
                }, {
                    'sku_PK091': 'Y'
                }, {
                    'sku_PK090': 'Y'
                }, {
                    'sku_N3133': 'Y'
                }, {
                    'sku_N3134': 'Y'
                }, {
                    'sku_N3135': 'Y'
                }, {
                    'sku_N3136': 'Y'
                }, {
                    'sku_N3137': 'Y'
                }, {
                    'sku_N3138': 'Y'
                }, {
                    'sku_N3139': 'Y'
                }, {
                    'sku_N3140': 'Y'
                }, {
                    'sku_N3141': 'Y'
                }, {
                    'sku_N3142': 'Y'
                }, {
                    '20150410': 'Y'
                }, {
                    '20150411': 'Y'
                }, {
                    '20150412': 'Y'
                }, {
                    '20150413': 'Y'
                }, {
                    '20150433': 'Y'
                }, {
                    '20150434': 'Y'
                }, {
                    '20150436': 'Y'
                }, {
                    '20150438': 'Y'
                }, {
                    '20150439': 'Y'
                }, {
                    '20150440': 'Y'
                }, {
                    '20150441': 'Y'
                }, {
                    '20150442': 'Y'
                }, {
                    '20150444': 'Y'
                }, {
                    '20150445': 'Y'
                }, {
                    '20160430': 'Y'
                }, {
                    '20160431': 'Y'
                }, {
                    '20160433': 'Y'
                }, {
                    '20176001': 'Y'
                }, {
                    '20176002': 'Y'
                }, {
                    '20176003': 'Y'
                }, {
                    '20176004': 'Y'
                }, {
                    '20176005': 'Y'
                }, {
                    '20176011': 'Y'
                }, {
                    '20176012': 'Y'
                }, {
                    '20176013': 'Y'
                }, {
                    '20176014': 'Y'
                }, {
                    '20176015': 'Y'
                }, {
                    '20176016': 'Y'
                }, {
                    '20176017': 'Y'
                }, {
                    '20176019': 'Y'
                }, {
                    '20176021': 'Y'
                }, {
                    '20176022': 'Y'
                }, {
                    '20176023': 'Y'
                }, {
                    '20176024': 'Y'
                }, {
                    '20176025': 'Y'
                }, {
                    '20176027': 'Y'
                }, {
                    '20176026': 'Y'
                }, {
                    '20176028': 'Y'
                }, {
                    '20176029': 'Y'
                }, {
                    '20176030': 'Y'
                }, {
                    '20176031': 'Y'
                }, {
                    '20176032': 'Y'
                }, {
                    '20176033': 'Y'
                }, {
                    '20176034': 'Y'
                }, {
                    '20176035': 'Y'
                }, {
                    '20176036': 'Y'
                }, {
                    '20176037': 'Y'
                }, {
                    '20176038': 'Y'
                }, {
                    '20178501': 'Y'
                }, {
                    '20178505': 'Y'
                }, {
                    '20178506': 'Y'
                }, {
                    '20178507': 'Y'
                }, {
                    '20178508': 'Y'
                }, {
                    '20178509': 'Y'
                }, {
                    '20178510': 'Y'
                }, {
                    '20178513': 'Y'
                }, {
                    '20178516': 'Y'
                }, {
                    '20178519': 'Y'
                }, {
                    '20178520': 'Y'
                }, {
                    '20178521': 'Y'
                }, {
                    '20178522': 'Y'
                }, {
                    '20178523': 'Y'
                }, {
                    '20178524': 'Y'
                }, {
                    '20178525': 'Y'
                }, {
                    '20178526': 'Y'
                }, {
                    '20178527': 'Y'
                }, {
                    '20178529': 'Y'
                }, {
                    '20178530': 'Y'
                }, {
                    '20178532': 'Y'
                }, {
                    '20178533': 'Y'
                }, {
                    '20178534': 'Y'
                }, {
                    '20178535': 'Y'
                }, {
                    '20178536': 'Y'
                }, {
                    '20178537': 'Y'
                }, {
                    '20173133': 'Y'
                }, {
                    '20173134': 'Y'
                }, {
                    '20173135': 'Y'
                }, {
                    '20173136': 'Y'
                }, {
                    '20173137': 'Y'
                }, {
                    '20173138': 'Y'
                }, {
                    '20173139': 'Y'
                }, {
                    '20173140': 'Y'
                }, {
                    '20173141': 'Y'
                }, {
                    '20173142': 'Y'
                }, {
                    'sku_AP354': 'Y'
                }, {
                    'sku_AS4123': 'Y'
                }, {
                    'sku_AS4123BFS': 'Y'
                }, {
                    'sku_AS4123CFS': 'Y'
                }, {
                    'sku_AS4123BHS': 'Y'
                }, {
                    'sku_AS4123CHS': 'Y'
                }, {
                    'sku_MZ134': 'Y'
                }, {
                    'sku_AF439T-STD': 'Y'
                }, {
                    'sku_AF439T-ALT': 'Y'
                }, {
                    'sku_MF132T-ALT': 'Y'
                }, {
                    'sku_MF132T-STD': 'Y'
                }, {
                    'sku_HF084T-STD': 'Y'
                }, {
                    'sku_AE394': 'Y'
                }, {
                    'sku_ME129': 'Y'
                }, {
                    'sku_YB080': 'Y'
                }, {
                    'sku_AW085': 'Y'
                }, {
                    'sku_N3153': 'Y'
                }, {
                    'sku_PZ036': 'Y'
                }, {
                    'sku_YB079': 'Y'
                }, {
                    'sku_HE076': 'Y'
                }, {
                    'sku_AS4123R': 'Y'
                }, {
                    'sku_AS4123S': 'Y'
                }, {
                    'sku_AS4123T': 'Y'
                }, {
                    'sku_MZ134A': 'Y'
                }, {
                    'sku_AQ269': 'Y'
                }, {
                    'sku_AW086': 'Y'
                }, {
                    'sku_AT104': 'Y'
                }, {
                    'sku_AM058': 'Y'
                }, {
                    'sku_AM059': 'Y'
                }, {
                    'sku_AM060': 'Y'
                }, {
                    'sku_AM061': 'Y'
                }, {
                    'sku_N3154': 'Y'
                }, {
                    'sku_N3155': 'Y'
                }, {
                    'sku_AW102': 'Y'
                }, {
                    'sku_N6001': 'Y'
                }, {
                    'sku_PK095': 'Y'
                }, {
                    'sku_AP452': 'Y'
                }, {
                    'sku_UB418': 'Y'
                }, {
                    'sku_HF084T-ALT': 'Y'
                }, {
                    'sku_AP453': 'Y'
                }, {
                    'sku_MZ135': 'Y'
                }, {
                    'sku_AT105': 'Y'
                }, {
                    'sku_UB419': 'Y'
                }, {
                    'sku_AF440T-STD': 'Y'
                }, {
                    'sku_MF133T-ALT': 'Y'
                }, {
                    'sku_MF133T-STD': 'Y'
                }, {
                    'sku_AW087': 'Y'
                }, {
                    'sku_UB420': 'Y'
                }, {
                    'sku_N3164': 'Y'
                }, {
                    'sku_PK105': 'Y'
                }, {
                    'sku_AS4278': 'Y'
                }, {
                    'sku_AF441T-STD': 'Y'
                }, {
                    'sku_AF441T-ALT': 'Y'
                }, {
                    'sku_HF085T-ALT': 'Y'
                }, {
                    'sku_HF085T-STD': 'Y'
                }, {
                    'sku_AE396': 'Y'
                }, {
                    'sku_AW093': 'Y'
                }, {
                    'sku_AP456': 'Y'
                }, {
                    'sku_YB081': 'Y'
                }, {
                    'sku_AQ273': 'Y'
                }, {
                    'sku_HE077': 'Y'
                }, {
                    'sku_VA302': 'Y'
                }, {
                    'sku_VA303': 'Y'
                }, {
                    'sku_VA304': 'Y'
                }, {
                    'sku_N6002': 'Y'
                }, {
                    'sku_PK106': 'Y'
                }, {
                    'sku_AS4355': 'Y'
                }, {
                    'sku_AS4355R': 'Y'
                }, {
                    'sku_MZ138': 'Y'
                }, {
                    'sku_AP457': 'Y'
                }, {
                    'sku_YB082': 'Y'
                }, {
                    'sku_MZ138A': 'Y'
                }, {
                    'sku_MF136T-STD': 'Y'
                }, {
                    'sku_MF136T-ALT': 'Y'
                }, {
                    'sku_HF086T-STD': 'Y'
                }, {
                    'sku_HF086T-ALT': 'Y'
                }, {
                    'sku_AW099': 'Y'
                }, {
                    'sku_AW100': 'Y'
                }, {
                    'sku_AE397': 'Y'
                }, {
                    'sku_ME133': 'Y'
                }, {
                    'sku_AT107': 'Y'
                }, {
                    'sku_UB421': 'Y'
                }, {
                    'sku_AM062': 'Y'
                }, {
                    'sku_AM065': 'Y'
                }, {
                    'sku_AM063': 'Y'
                }, {
                    'sku_AM066': 'Y'
                }, {
                    'sku_AQ274': 'Y'
                }, {
                    'sku_AW104': 'Y'
                }, {
                    'sku_AW110': 'Y'
                }, {
                    'sku_YB083': 'Y'
                }, {
                    'sku_PZ039': 'Y'
                }, {
                    'sku_N3156': 'Y'
                }, {
                    'sku_N3157': 'Y'
                }, {
                    'sku_N3158': 'Y'
                }, {
                    'sku_N3165': 'Y'
                }, {
                    'sku_N3166': 'Y'
                }, {
                    'sku_N3159': 'Y'
                }, {
                    'sku_N3160': 'Y'
                }, {
                    'sku_N3161': 'Y'
                }, {
                    'sku_AF442T-STD': 'Y'
                }, {
                    'sku_AF442T-ALT': 'Y'
                }, {
                    'sku_AM067': 'Y'
                }, {
                    'sku_AS4355BFS': 'Y'
                }, {
                    'sku_AS4355CFS': 'Y'
                }, {
                    'sku_AS4355CHS': 'Y'
                }, {
                    'sku_AS4355BHS': 'Y'
                }, {
                    'sku_AM068': 'Y'
                }];
                var m = false;
                for (e = 0; e < c.length; e++) {
                    for (f in utag.loader.GV(c[e])) {
                        if (d == f) {
                            b['fbproductSKUList'] = c[e][f];
                            m = true
                        };
                    };
                    if (m) break
                };
                if (!m) b['fbproductSKUList'] = '';
            }
        }, function(a, b) {
            try {
                if (1) {
                    utag.ut.merge(b, utag.data, 0);
                    utag.ut.merge(utag.data, b, 1);
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if ((typeof b['cp.user_allowed_save_cookie'] == 'undefined' && b['dom.domain'].toString().toLowerCase().indexOf('shop.royalmail.com'.toLowerCase()) > -1) || (typeof b['cp.user_allowed_save_cookie'] == 'undefined' && b['dom.domain'].toString().toLowerCase().indexOf('stgfastmag.royalmail.com'.toLowerCase()) > -1) || (typeof b['cp.user_allowed_save_cookie'] == 'undefined' && b['dom.domain'].toString().toLowerCase().indexOf('prdfastmag.royalmail.com'.toLowerCase()) > -1)) {
                    document.cookie = "user_allowed_save_cookie=" + '%7B%221%22%3A1%7D' + ";path=/;domain=" + utag.cfg.domain + ";expires=";
                    b['cp.user_allowed_save_cookie'] = '%7B%221%22%3A1%7D';
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b, c, d, e, f, g) {
            if (1) {
                d = b['productSKU'];
                if (typeof d == 'undefined') return;
                c = [{
                    'PK130': 'Queen Issue 2020'
                }, {
                    'AE416': 'Queen Issue 2020'
                }, {
                    'AF461-ALT': 'Queen Issue 2020'
                }, {
                    'AF461-STD': 'Queen Issue 2020'
                }, {
                    'AN185': 'Queen Issue 2020'
                }, {
                    'AN186': 'Queen Issue 2020'
                }, {
                    'AN187': 'Queen Issue 2020'
                }, {
                    'AP477': 'Queen Issue 2020'
                }, {
                    'AQ293': 'Queen Issue 2020'
                }, {
                    'AS6000': 'Queen Issue 2020'
                }, {
                    'AS6000AFS': 'Queen Issue 2020'
                }, {
                    'AS6000AHS': 'Queen Issue 2020'
                }, {
                    'AS6000BFS': 'Queen Issue 2020'
                }, {
                    'AS6000BHS': 'Queen Issue 2020'
                }, {
                    'AT117': 'Queen Issue 2020'
                }, {
                    'AT118': 'Queen Issue 2020'
                }, {
                    'AW151': 'Queen Issue 2020'
                }, {
                    'AW152': 'Queen Issue 2020'
                }, {
                    'AW153': 'Queen Issue 2020'
                }, {
                    'AW154': 'Queen Issue 2020'
                }, {
                    'HF092-ALT': 'Queen Issue 2020'
                }, {
                    'HF092-STD': 'Queen Issue 2020'
                }, {
                    'MF151-ALT': 'Queen Issue 2020'
                }, {
                    'MF151-STD': 'Queen Issue 2020'
                }, {
                    'MZ155': 'Queen Issue 2020'
                }, {
                    'N3219': 'Queen Issue 2020'
                }, {
                    'N3220': 'Queen Issue 2020'
                }, {
                    'N3221': 'Queen Issue 2020'
                }, {
                    'N3222': 'Queen Issue 2020'
                }, {
                    'N6006': 'Queen Issue 2020'
                }, {
                    'PK131': 'Queen Issue 2020'
                }, {
                    'PZ048': 'Queen Issue 2020'
                }, {
                    'S1013': 'Queen Issue 2020'
                }, {
                    'S1014': 'Queen Issue 2020'
                }, {
                    'UB434': 'Queen Issue 2020'
                }, {
                    'YB092': 'Queen Issue 2020'
                }, {
                    'AS6200': 'Sherlock Issue 2020'
                }, {
                    'MZ157': 'Sherlock Issue 2020'
                }, {
                    'AP479': 'Sherlock Issue 2020'
                }, {
                    'AF463': 'Sherlock Issue 2020'
                }, {
                    'MF153': 'Sherlock Issue 2020'
                }, {
                    'AW157': 'Sherlock Issue 2020'
                }, {
                    'AW158': 'Sherlock Issue 2020'
                }, {
                    'AT119': 'Sherlock Issue 2020'
                }, {
                    'AE418': 'Sherlock Issue 2020'
                }, {
                    'AQ295': 'Sherlock Issue 2020'
                }, {
                    'UB436': 'Sherlock Issue 2020'
                }, {
                    'AS6200D': 'Sherlock Issue 2020'
                }, {
                    'AS6200E': 'Sherlock Issue 2020'
                }, {
                    'AS6200F': 'Sherlock Issue 2020'
                }, {
                    'N3225': 'Sherlock Issue 2020'
                }, {
                    'N6007': 'Sherlock Issue 2020'
                }, {
                    'N3226': 'Sherlock Issue 2020'
                }, {
                    'N3227': 'Sherlock Issue 2020'
                }, {
                    'N6008': 'Sherlock Issue 2020'
                }, {
                    'N3228': 'Sherlock Issue 2020'
                }, {
                    'N3230': 'Sherlock Issue 2020'
                }, {
                    'N3231': 'Sherlock Issue 2020'
                }, {
                    'AM073': 'Sherlock Issue 2020'
                }, {
                    'AM074': 'Sherlock Issue 2020'
                }, {
                    'AM075': 'Sherlock Issue 2020'
                }, {
                    'AM076': 'Sherlock Issue 2020'
                }, {
                    'PK134': 'Sherlock Issue 2020'
                }, {
                    'N3234': 'Sherlock Issue 2020'
                }, {
                    'AE419': 'Rupert Bear Issue 2020'
                }, {
                    'AF464-ALT': 'Rupert Bear Issue 2020'
                }, {
                    'AF464-STD': 'Rupert Bear Issue 2020'
                }, {
                    'AP480': 'Rupert Bear Issue 2020'
                }, {
                    'AQ296': 'Rupert Bear Issue 2020'
                }, {
                    'AS6300': 'Rupert Bear Issue 2020'
                }, {
                    'AS6300AFS': 'Rupert Bear Issue 2020'
                }, {
                    'AS6300AHS': 'Rupert Bear Issue 2020'
                }, {
                    'AS6300BFS': 'Rupert Bear Issue 2020'
                }, {
                    'AS6300BHS': 'Rupert Bear Issue 2020'
                }, {
                    'AW159': 'Rupert Bear Issue 2020'
                }, {
                    'N3229': 'Rupert Bear Issue 2020'
                }, {
                    'AS6300CFS': 'Rupert Bear Issue 2020'
                }, {
                    'AS6300CHS': 'Rupert Bear Issue 2020'
                }, {
                    'AS6300DFS': 'Rupert Bear Issue 2020'
                }, {
                    'AS6300DHS': 'Rupert Bear Issue 2020'
                }, {
                    'AE420': 'Brilliant Bugs Issue 2020'
                }, {
                    'AF465-ALT': 'Brilliant Bugs Issue 2020'
                }, {
                    'AF465-STD': 'Brilliant Bugs Issue 2020'
                }, {
                    'AP481': 'Brilliant Bugs Issue 2020'
                }, {
                    'AQ297': 'Brilliant Bugs Issue 2020'
                }, {
                    'AS6400': 'Brilliant Bugs Issue 2020'
                }, {
                    'AW160': 'Brilliant Bugs Issue 2020'
                }, {
                    'N3232': 'Brilliant Bugs Issue 2020'
                }, {
                    'N3235': 'Brilliant Bugs Issue 2020'
                }, {
                    'D300': 'Brilliant Bugs Issue 2020'
                }, {
                    'AE422': 'Star Trek Issue 2020'
                }, {
                    'AF467-ALT': 'Star Trek Issue 2020'
                }, {
                    'AF467-STD': 'Star Trek Issue 2020'
                }, {
                    'AM077': 'Star Trek Issue 2020'
                }, {
                    'AM078': 'Star Trek Issue 2020'
                }, {
                    'AM079': 'Star Trek Issue 2020'
                }, {
                    'AM080': 'Star Trek Issue 2020'
                }, {
                    'AP483': 'Star Trek Issue 2020'
                }, {
                    'AQ299': 'Star Trek Issue 2020'
                }, {
                    'AS6600': 'Star Trek Issue 2020'
                }, {
                    'AS6600AFS': 'Star Trek Issue 2020'
                }, {
                    'AS6600AHS': 'Star Trek Issue 2020'
                }, {
                    'AS6600BFS': 'Star Trek Issue 2020'
                }, {
                    'AS6600BHS': 'Star Trek Issue 2020'
                }, {
                    'AS6600C': 'Star Trek Issue 2020'
                }, {
                    'AS6600D': 'Star Trek Issue 2020'
                }, {
                    'AS6600E': 'Star Trek Issue 2020'
                }, {
                    'AS6600F': 'Star Trek Issue 2020'
                }, {
                    'AS6600G': 'Star Trek Issue 2020'
                }, {
                    'AS6600H': 'Star Trek Issue 2020'
                }, {
                    'AS6600J': 'Star Trek Issue 2020'
                }, {
                    'AT121': 'Star Trek Issue 2020'
                }, {
                    'AW163': 'Star Trek Issue 2020'
                }, {
                    'AW164': 'Star Trek Issue 2020'
                }, {
                    'AW173': 'Star Trek Issue 2020'
                }, {
                    'HF093-ALT': 'Star Trek Issue 2020'
                }, {
                    'HF093-STD': 'Star Trek Issue 2020'
                }, {
                    'MF155-ALT': 'Star Trek Issue 2020'
                }, {
                    'MF155-STD': 'Star Trek Issue 2020'
                }, {
                    'MZ159': 'Star Trek Issue 2020'
                }, {
                    'MZ159A': 'Star Trek Issue 2020'
                }, {
                    'N3237': 'Star Trek Issue 2020'
                }, {
                    'N3238': 'Star Trek Issue 2020'
                }, {
                    'N3239': 'Star Trek Issue 2020'
                }, {
                    'N3240': 'Star Trek Issue 2020'
                }, {
                    'N3241': 'Star Trek Issue 2020'
                }, {
                    'N3242': 'Star Trek Issue 2020'
                }, {
                    'PZ050': 'Star Trek Issue 2020'
                }, {
                    'UB439': 'Star Trek Issue 2020'
                }, {
                    'YB093': 'Star Trek Issue 2020'
                }, {
                    'YB094': 'Star Trek Issue 2020'
                }, {
                    'AS6500BS': 'Christmas Issue 2020'
                }, {
                    'AS6500AS': 'Christmas Issue 2020'
                }, {
                    'AS6500HS': 'Christmas Issue 2020'
                }, {
                    'AS6500GS': 'Christmas Issue 2020'
                }, {
                    'AS6500CS': 'Christmas Issue 2020'
                }, {
                    'AS6500DS': 'Christmas Issue 2020'
                }, {
                    'AS6500ES': 'Christmas Issue 2020'
                }, {
                    'AS6500FS': 'Christmas Issue 2020'
                }, {
                    'AE421': 'Christmas Issue 2020'
                }, {
                    'AF466-ALT': 'Christmas Issue 2020'
                }, {
                    'AF466-STD': 'Christmas Issue 2020'
                }, {
                    'AP482': 'Christmas Issue 2020'
                }, {
                    'AQ298': 'Christmas Issue 2020'
                }, {
                    'AS6500': 'Christmas Issue 2020'
                }, {
                    'AS6500AFS': 'Christmas Issue 2020'
                }, {
                    'AS6500AHS': 'Christmas Issue 2020'
                }, {
                    'AS6500BFS': 'Christmas Issue 2020'
                }, {
                    'AS6500BHS': 'Christmas Issue 2020'
                }, {
                    'AT120': 'Christmas Issue 2020'
                }, {
                    'AW161': 'Christmas Issue 2020'
                }, {
                    'AW162': 'Christmas Issue 2020'
                }, {
                    'MF154-ALT': 'Christmas Issue 2020'
                }, {
                    'MF154-STD': 'Christmas Issue 2020'
                }, {
                    'MZ158': 'Christmas Issue 2020'
                }, {
                    'UB437': 'Christmas Issue 2020'
                }, {
                    'UB438': 'Christmas Issue 2020'
                }, {
                    'AY123': 'Annual Collection Issue 2020'
                }, {
                    'AR073': 'Annual Collection Issue 2020'
                }, {
                    'PC031': 'Annual Collection Issue 2020'
                }, {
                    'PC030': 'Annual Collection Issue 2020'
                }, {
                    'AE411': 'James Bond Issue 2020'
                }, {
                    'AF456-ALT': 'James Bond Issue 2020'
                }, {
                    'AF456-STD': 'James Bond Issue 2020'
                }, {
                    'AN175': 'James Bond Issue 2020'
                }, {
                    'AN177': 'James Bond Issue 2020'
                }, {
                    'AN179': 'James Bond Issue 2020'
                }, {
                    'AP472': 'James Bond Issue 2020'
                }, {
                    'AQ288': 'James Bond Issue 2020'
                }, {
                    'AS5500': 'James Bond Issue 2020'
                }, {
                    'AS5500C': 'James Bond Issue 2020'
                }, {
                    'AS5500D': 'James Bond Issue 2020'
                }, {
                    'AS5500E': 'James Bond Issue 2020'
                }, {
                    'AS5500M': 'James Bond Issue 2020'
                }, {
                    'AT113': 'James Bond Issue 2020'
                }, {
                    'AW137': 'James Bond Issue 2020'
                }, {
                    'AW138': 'James Bond Issue 2020'
                }, {
                    'AW139': 'James Bond Issue 2020'
                }, {
                    'AW140': 'James Bond Issue 2020'
                }, {
                    'HF090-ALT': 'James Bond Issue 2020'
                }, {
                    'HF090-STD': 'James Bond Issue 2020'
                }, {
                    'MF146-ALT': 'James Bond Issue 2020'
                }, {
                    'MF146-STD': 'James Bond Issue 2020'
                }, {
                    'MZ149': 'James Bond Issue 2020'
                }, {
                    'MZ149A': 'James Bond Issue 2020'
                }, {
                    'MZ149B': 'James Bond Issue 2020'
                }, {
                    'N3187': 'James Bond Issue 2020'
                }, {
                    'N3188': 'James Bond Issue 2020'
                }, {
                    'N3190': 'James Bond Issue 2020'
                }, {
                    'N3202': 'James Bond Issue 2020'
                }, {
                    'N3203': 'James Bond Issue 2020'
                }, {
                    'N3204': 'James Bond Issue 2020'
                }, {
                    'N3205': 'James Bond Issue 2020'
                }, {
                    'N3206': 'James Bond Issue 2020'
                }, {
                    'N3207': 'James Bond Issue 2020'
                }, {
                    'PZ044': 'James Bond Issue 2020'
                }, {
                    'UB430': 'James Bond Issue 2020'
                }, {
                    'YB088': 'James Bond Issue 2020'
                }, {
                    'YB089': 'James Bond Issue 2020'
                }, {
                    'AN174': 'James Bond Issue 2020'
                }, {
                    'AN176': 'James Bond Issue 2020'
                }, {
                    'AN178': 'James Bond Issue 2020'
                }, {
                    'AS5500AFS': 'James Bond Issue 2020'
                }, {
                    'AS5500AHS': 'James Bond Issue 2020'
                }, {
                    'AS5500BFS': 'James Bond Issue 2020'
                }, {
                    'AS5500BHS': 'James Bond Issue 2020'
                }, {
                    'N3243': 'James Bond Issue 2020'
                }, {
                    'AT122': 'James Bond Issue 2020'
                }, {
                    'AW174': 'James Bond Issue 2020'
                }, {
                    'AW175': 'James Bond Issue 2020'
                }, {
                    'AW176': 'James Bond Issue 2020'
                }, {
                    'N3244': 'James Bond Issue 2020'
                }];
                if (typeof b['productIssue'] === 'undefined') {
                    b['productIssue'] = [];
                }
                for (var h = 0; h < d.length; h++) {
                    var m = false;
                    for (e = 0; e < c.length; e++) {
                        for (f in utag.loader.GV(c[e])) {
                            if (d[h] == f) {
                                b['productIssue'][h] = c[e][f];
                                m = true
                            };
                        };
                        if (m) break
                    };
                    if (!m) b['productIssue'][h] = '';
                };
            }
        }, function(a, b) {
            try {
                if (b['pageApplicationName'].toString().toLowerCase() == 'Track and Trace'.toLowerCase() || b['pageApplicationName'].toString().toLowerCase() == 'Postcode Finder'.toLowerCase() || b['pageApplicationName'].toString().toLowerCase() == 'Services Near You'.toLowerCase() || (b['dom.domain'].toString().toLowerCase().indexOf('www.royalmail.com'.toLowerCase()) > -1 && b['dom.pathname'] == '/') || b['pageApplicationName'].toString().toLowerCase() == 'Pricefinder'.toLowerCase() || b['dom.domain'] == 'parcel.royalmail.com' || b['pageApplicationName'].toString().indexOf('Fee to Pay') > -1 || b['dom.domain'].toString().indexOf('personal.help.royalmail.com') > -1 || b['dom.domain'].toString().indexOf('business.help.royalmail.com') > -1 || b['dom.pathname'].toString().indexOf('/change-delivery-option') > -1 || b['dom.pathname'].toString().indexOf('/receiving-mail/redelivery') > -1 || b['dom.pathname'].toString().indexOf('/track-my-return') > -1 || b['dom.pathname'].toString().indexOf('/priority-postboxes') > -1) {
                    b['collect_tag_load'] = 'no'
                }
            } catch (e) {
                utag.DB(e);
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
            if (toType(b.conversionProduct) === "array") {
                b.conversionProduct = b.conversionProduct[0];
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
            if (typeof(b.transactionProduct) == 'object' && b.transactionProduct.constructor != Array) {
                b.transactionProduct = [b.transactionProduct];
            }
            if (typeof(b.transactionProduct) == 'string') {
                try {
                    b.transactionProduct = JSON.parse(b.transactionProduct);
                } catch (e) {
                    utag.DB('Error parsing transactionProduct string');
                }
            }

            function capitalizeFirstLetter(string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
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
                b.productURL = [];
                b.productImageThumbnailURL = [];
                b.productImageBaseURL = [];
                b.serviceName = [];
                var i;
                for (i = 0; i < b.transactionProduct.length; i++) {
                    var currentItem = b.transactionProduct[i];
                    b.productQuantity.push(currentItem.productQuantity || "1");
                    b.productName.push(currentItem.productName || "");
                    b.productSKU.push(currentItem.productSKU || currentItem.productSku || currentItem.productName || "");
                    b.productID.push(currentItem.productID || "");
                    b.productPrice.push(currentItem.productPrice || "0");
                    b.productCategory.push(currentItem.productCategory || "");
                    b.productSubcategory.push(currentItem.productSubcategory || "");
                    b.productURL.push(currentItem.productURL || "0");
                    b.productImageThumbnailURL.push(currentItem.productImageThumbnailURL || "");
                    b.productImageBaseURL.push(currentItem.productImageBaseURL || "");
                    b.serviceName.push(currentItem.serviceName || "");
                    b.productAttributes.push(currentItem.productAttributes || {});
                    for (varName in currentItem.productAttributes) {
                        var newVarName = capitalizeFirstLetter(varName);
                        if (b["productAttributes" + newVarName]) {
                            b["productAttributes" + newVarName].push(currentItem.productAttributes[varName])
                        } else {
                            b["productAttributes" + newVarName] = [currentItem.productAttributes[varName]];
                        }
                    }
                }
            }
        }, function(a, b, c, d, e, f, g) {
            if (1) {
                d = b['productSKU'];
                if (typeof d == 'undefined') return;
                c = [{
                    'CN22/250': 'omit'
                }, {
                    'CN22W/250': 'omit'
                }, {
                    'CN23/50': 'omit'
                }, {
                    'CN23WELSH': 'omit'
                }, {
                    'LN2': 'omit'
                }, {
                    'MBG': 'omit'
                }, {
                    'MISC1462': 'omit'
                }, {
                    'MP GREEN': 'omit'
                }, {
                    'MP RED': 'omit'
                }, {
                    'MP WHITE': 'omit'
                }, {
                    'MTY': 'omit'
                }, {
                    'MYO': 'omit'
                }, {
                    'OE1057': 'omit'
                }, {
                    'P1038': 'omit'
                }, {
                    'P2223/500': 'omit'
                }, {
                    'P2297/100': 'omit'
                }, {
                    'P25A': 'omit'
                }, {
                    'P25WELSH': 'omit'
                }, {
                    'P4558': 'omit'
                }, {
                    'P4671': 'omit'
                }, {
                    'P4723/500': 'omit'
                }, {
                    'P4939CT': 'omit'
                }, {
                    'P5000CT': 'omit'
                }, {
                    'P5067CT': 'omit'
                }, {
                    'P5068CT': 'omit'
                }, {
                    'P5084': 'omit'
                }, {
                    'P5627C': 'omit'
                }, {
                    'P5629C': 'omit'
                }, {
                    'P5631C': 'omit'
                }, {
                    'P5640C': 'omit'
                }, {
                    'P6138C': 'omit'
                }, {
                    'P6139C': 'omit'
                }, {
                    'P6270/500': 'omit'
                }, {
                    'P6273': 'omit'
                }, {
                    'P6276/100': 'omit'
                }, {
                    'P6312': 'omit'
                }, {
                    'P6315': 'omit'
                }, {
                    'P6321': 'omit'
                }, {
                    'P6396/500': 'omit'
                }, {
                    'P6397': 'omit'
                }, {
                    'P6398/100': 'omit'
                }, {
                    'P6403': 'omit'
                }, {
                    'P6404': 'omit'
                }, {
                    'P6404W': 'omit'
                }, {
                    'P6405': 'omit'
                }, {
                    'P6406': 'omit'
                }, {
                    'P6406W': 'omit'
                }, {
                    'P6407': 'omit'
                }, {
                    'P6408': 'omit'
                }, {
                    'P6408W': 'omit'
                }, {
                    'P6467': 'omit'
                }, {
                    'P6522/500': 'omit'
                }, {
                    'P6544': 'omit'
                }, {
                    'P6565': 'omit'
                }, {
                    'P6590': 'omit'
                }, {
                    'P6602W': 'omit'
                }, {
                    'P6644': 'omit'
                }, {
                    'P6645': 'omit'
                }, {
                    'P6646': 'omit'
                }, {
                    'P6647': 'omit'
                }, {
                    'P6648C': 'omit'
                }, {
                    'P6668C': 'omit'
                }, {
                    'P6696': 'omit'
                }, {
                    'P6709': 'omit'
                }, {
                    'RMDG21D6': 'omit'
                }, {
                    'RMDG22D7': 'omit'
                }, {
                    'RMDG23D4': 'omit'
                }, {
                    'RMDG24D5': 'omit'
                }, {
                    'SCP2135CX': 'omit'
                }, {
                    'SCP2619CX': 'omit'
                }, {
                    'SP126': 'omit'
                }, {
                    'SP301B': 'omit'
                }, {
                    'SS950': 'omit'
                }, {
                    'SS956': 'omit'
                }, {
                    'P6741': 'omit'
                }, {
                    'AE430': 'omit'
                }, {
                    'AF475-ALT': 'omit'
                }, {
                    'AF475-STD': 'omit'
                }, {
                    'AP493': 'omit'
                }, {
                    'AQ309': 'omit'
                }, {
                    'AS7400': 'omit'
                }, {
                    'AS7400AFS': 'omit'
                }, {
                    'AS7400AHS': 'omit'
                }, {
                    'AS7400BFS': 'omit'
                }, {
                    'AS7400BHS': 'omit'
                }, {
                    'AT128': 'omit'
                }, {
                    'AW191': 'omit'
                }, {
                    'AW192': 'omit'
                }, {
                    'MF161-ALT': 'omit'
                }, {
                    'MF161-STD': 'omit'
                }, {
                    'MZ165': 'omit'
                }, {
                    'N3259': 'omit'
                }, {
                    'N3261': 'omit'
                }, {
                    'PZ055': 'omit'
                }, {
                    'UB445': 'omit'
                }];
                if (typeof b['trustpilotOmit'] === 'undefined') {
                    b['trustpilotOmit'] = [];
                }
                for (var h = 0; h < d.length; h++) {
                    var m = false;
                    for (e = 0; e < c.length; e++) {
                        for (f in utag.loader.GV(c[e])) {
                            if (d[h] == f) {
                                b['trustpilotOmit'][h] = c[e][f];
                                m = true
                            };
                        };
                        if (m) break
                    };
                    if (!m) b['trustpilotOmit'][h] = '';
                };
            }
        }, function(a, b, c, d, e, f, g) {
            if (1) {
                d = b['productSKU'];
                if (typeof d == 'undefined') return;
                c = [{
                    '99999': 'omit'
                }, {
                    'AG007': 'omit'
                }, {
                    'AG008': 'omit'
                }, {
                    'AT135': 'omit'
                }];
                if (typeof b['trustpilotOmit'] === 'undefined') {
                    b['trustpilotOmit'] = [];
                }
                for (var h = 0; h < d.length; h++) {
                    var m = false;
                    for (e = 0; e < c.length; e++) {
                        for (f in utag.loader.GV(c[e])) {
                            if (d[h] == f) {
                                b['trustpilotOmit'][h] = c[e][f];
                                m = true
                            };
                        };
                        if (m) break
                    };
                    if (!m) b['trustpilotOmit'][h] = '';
                };
            }
        }, function(a, b) {
            try {
                if (typeof b['qp.sid'] != 'undefined' && b['qp.sid'] != '' || typeof b['visitorFormID'] != 'undefined' && b['visitorFormID'] != '' || typeof b['formSID'] != 'undefined' && b['formSID'] != '') {
                    b['sid_check'] = 'true'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if (1) {
                    if (b.fb_custom_event) {
                        delete b.fb_custom_event;
                    }
                    if (a !== "view") {
                        return;
                    }
                    var path = b["dom.pathname"],
                        hash = b["dom.hash"],
                        path_hash = hash ? path + "#" + hash : path;
                    if (path_hash === "/keep-safe#/confirmation" || path_hash === "/keep-safe#/order-confirmation" || (b.pageApplicationName.indexOf("Keepsafe") > -1 && b.pageApplicationStep.indexOf("Payment confirmation") > -1)) {
                        b.fb_custom_event = "Purchase - Keepsafe";
                    } else if (path_hash === "/checkout/onepage/success/" && b.productName && b.productName.join().indexOf("Stamp") > -1) {
                        b.fb_custom_event = "Purchase - Stamps";
                    }
                    var isRedirectionPath = path.indexOf("/redirections/new/complete/") > -1 || path.indexOf("/redirections/renewal/complete/") > -1;
                    var isConfirmationStep = b.pageApplicationStep == "New Confirmation" || b.pageApplicationStep == "Renew Confirmation";
                    if (isRedirectionPath && isConfirmationStep) {
                        b.fb_custom_event = "Purchase - Redirection";
                    }
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if (1) {
                    var extensionName = 'Extension UID: 896, \'Content modification - add Tealium query params to links\'';
                    utag.DB(extensionName + ', b.consent_performance: ' + b.consent_performance);
                    if (b.consent_performance == 1) {
                        var intervalId = setInterval(function() {
                            utag.DB(extensionName + ', waiting for window.utag.rmg.tealiumQueryParameterString: ' + window.utag.rmg.tealiumQueryParameterString);
                            if (typeof window.utag.rmg.tealiumQueryParameterString === 'string') {
                                utag.DB(extensionName + ', clearing 100ms interval');
                                clearInterval(intervalId);
                                addAdobeMcToLinks()
                            }
                        }, 100);
                        setTimeout(function() {
                            utag.DB(extensionName + ', clearing 1sec interval');
                            clearInterval(intervalId);
                        }, 1000);

                        function addAdobeMcToLinks() {
                            utag.DB(extensionName + ', in addAdobeMcToLinks');
                            var linkDomainToFindRegex = /^https:\/\/.*royalmailmagic\.com/;
                            var domainLinksToUpdate = Array.from(document.querySelectorAll('main article a')).filter(a => a.href.match(linkDomainToFindRegex));
                            utag.DB(extensionName + ', domainLinksToUpdate:');
                            utag.DB(domainLinksToUpdate);
                            var adobeMc = window.utag.rmg.tealiumQueryParameterString;
                            var hrefValue = '';
                            domainLinksToUpdate.map((domainLinkToUpdate) => {
                                hrefValue = domainLinkToUpdate.getAttribute('href');
                                domainLinkToUpdate.setAttribute('href', hrefValue + (/\?/.test(hrefValue) ? '&' : '?') + adobeMc);
                            });
                        }
                    }
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if (1) {
                    const extensionName = 'Extension UID: 899, \'Consent clean-up\'';
                    var logUtagDbStatus = /utagdb=true/.test(document.cookie);
                    logUtagDbStatus ? console.log('in extensionName: ' + extensionName) : ';'
                    window.rmg_consent = window.rmg_consent || {};
                    window.rmg_consent.consentCleanUp = function() {
                        const cookieCategoryMap = {
                            functional: {},
                            performance: {
                                'AMCVS_BB331CFE53309F560A490D45%40AdobeOrg': 1,
                                'AMCV_BB331CFE53309F560A490D45%40AdobeOrg': 1,
                                's_ecid': 1,
                                's_cc': 1,
                                's_sq': 1,
                                's_vi': 1,
                                's_vi_#': 1,
                                's_fid': 1,
                                's_sv_sid': 1,
                                'demdex': 1,
                                'dpm': 1,
                                'ev_sync_dd': 1,
                                'everest_g_v2': 1,
                                'recently_viewed_product': 1,
                                'recently_compared_product_previous': 1,
                                'bm_sv': 1,
                                '_gid': 1,
                                'mbox': 1,
                                '_gat_tealium_0': 1,
                                '_ga': 1,
                                'collect': 1,
                                'ictf_master': 1,
                                'ictf_il': 1,
                                'ictf_in': 1,
                                'ict_0': 1,
                                'ict_master': 1,
                                'da_lid': 1,
                                'da_sid': 1,
                                'da_ajax': 1,
                                '_da_da_sessionId': 1,
                                'di_last_session_time': 1,
                                'di_page_counter': 1,
                                'di_ga_tracked': 1,
                                'di_res_list': 1,
                                'di_tab_active': 1,
                                'di_tab_hash': 1,
                                'QSI_History': 1,
                                'QST': 1,
                                'QSI_HistorySession': 1,
                                '__cfduid': 1,
                                'Survey ID': 1,
                                'TV Squared': 1,
                                '_pk_id': 1,
                                '_pk_ses': 1,
                                'channelcloser': 1,
                                'channelflow': 1,
                                'channeloriginator': 1,
                                '_ga_VPT5PDKD94': 1,
                                '_gac_UA-19437109': 1,
                                '_gali': 1,
                                '_gac_UA-194371090-1': 1,
                            },
                            advertising: {
                                'demdex': 1,
                                'dpm': 1,
                                'everest_g_v2': 1,
                                's_cc': 1,
                                's_vi': 1,
                                's_fid': 1,
                                'mbox': 1,
                                'DSID': 1,
                                'FLC': 1,
                                'AID': 1,
                                'TAID': 1,
                                'SIDCC': 1,
                                '__Secure-3PAPISID': 1,
                                '__Secure-APISID': 1,
                                '__Secure-SSID': 1,
                                'SSID': 1,
                                '__Secure-3PSID': 1,
                                'SID': 1,
                                'APISID': 1,
                                '__Secure-HSID': 1,
                                'SAPISID': 1,
                                'HSID': 1,
                                'NID': 1,
                                'ANID': 1,
                                '1P_JAR': 1,
                                'IDE': 1,
                                'exchange_uid': 1,
                                '__gads': 1,
                                '__gac': 1,
                                '__gcl': 1,
                                '_gcl_au': 1,
                                '_gcl_aw': 1,
                                '_gcl_dc': 1,
                                '_gcl_gs': 1,
                                'test_cookie': 1,
                                '_dlt': 1,
                                'analytics_storage': 1,
                                'ad_storage': 1,
                                'ad_user-data': 1,
                                'ad_personalization': 1,
                                '_fbp': 1,
                                'fr': 1,
                                'datr': 1,
                                'reg_ext_ref': 1,
                                'reg_fb_gate': 1,
                                'reg_fb_ref': 1,
                                'sb': 1,
                                'uuid': 1,
                                'MUID': 1,
                                '_uetsid': 1,
                                'muc': 1,
                                'des_opt_in': 1,
                                'guest_id': 1,
                                'personalization_id': 1,
                                'lidc': 1,
                                'lang': 1,
                                'bscookie': 1,
                                'bcookie': 1,
                                'li_fat_id': 1,
                                'li-oatml': 1,
                                '_guid': 1,
                                'BizographicsOptOut': 1,
                                'li_sugr': 1,
                                'UserMatchHistory': 1,
                                'utag_main_v_id': 1,
                                'TAPID': 1,
                                '_va#': 1,
                                'TEALIUMID': 1,
                                'ELOQUA ': 1,
                                'SAMESITESET': 1,
                                'ELQSTATUS': 1,
                                'uids': 1,
                                'sess': 1,
                                'icu': 1,
                                'anj': 1,
                                'usersync': 1,
                                'token': 1,
                                'pses': 1,
                                'Bid': 1,
                                'Cid': 1,
                                'Opt-token': 1,
                                'mc': 1,
                                '__qca': 1,
                                'd': 1,
                                'VISITOR_INFO1_LIVE': 1,
                                'VISITOR_PRIVACY_METADATA': 1,
                                'YSC': 1,
                                '_rdt_uuid': 1,
                                '_rdt_cid': 1,
                                '_rdt_em': 1,
                                '_spdt': 1,
                                'ad-id': 1,
                                'ad-privacy': 1,
                                'Axids': 1,
                                'A3': 1,
                                'IDSYNC': 1,
                                'tduid': 1,
                                'tdclid_sn': 1,
                                'cf_chl_3': 1,
                                'visitor_email': 1,
                                'vt': 1,
                            },
                        };
                        let browserCookieList = [];
                        document.cookie.split(';').map(function(cookieItem) {
                            browserCookieList.push(cookieItem.replace(/^\s/, '').replace(/=.*/, ''));
                        });
                        logUtagDbStatus ? console.log(extensionName + ', browserCookieList: ' + browserCookieList) : '';
                        const consentCategories = ['functional', 'performance', 'advertising'];
                        const domainsToCheck = ['.' + utag.loader.lh(), '.' + window.location.hostname, utag.loader.lh(), window.location.hostname, ];
                        for (let consentCategoryIndex = 0; consentCategoryIndex < consentCategories.length; consentCategoryIndex++) {
                            if (!new RegExp(consentCategories[consentCategoryIndex], 'i').test(window.rmg_consent.consent_selectedCategoriesNamesArray.join())) {
                                logUtagDbStatus ? console.log(extensionName + ', cleaning: ' + consentCategories[consentCategoryIndex]) : '';
                                for (let browserCookieIndex = 0; browserCookieIndex < browserCookieList.length; browserCookieIndex++) {
                                    if (typeof(cookieCategoryMap[consentCategories[consentCategoryIndex]][browserCookieList[browserCookieIndex]]) !== 'undefined') {
                                        for (let domainIndex = 0; domainIndex < domainsToCheck.length; domainIndex++) {
                                            if (document.cookie.indexOf(browserCookieList[browserCookieIndex]) > -1) {
                                                logUtagDbStatus ? console.log('\n\n' + extensionName + ', found ' + consentCategories[consentCategoryIndex] + ' cookie to clean: ' + browserCookieList[browserCookieIndex]) : '';
                                                cookieCleanString = browserCookieList[browserCookieIndex] + '=false;domain=' + domainsToCheck[domainIndex] + ';expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;';
                                                logUtagDbStatus ? console.log(extensionName + ', cookieCleanString: "' + cookieCleanString + '"') : '';
                                                document.cookie = cookieCleanString;
                                            } else {
                                                logUtagDbStatus ? console.log(extensionName + ', ' + consentCategories[consentCategoryIndex] + ' cookie cleaned: ' + browserCookieList[browserCookieIndex]) : '';
                                                break;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    };
                    window.rmg_consent.consentCleanUp();
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                utag.runonce = utag.runonce || {};
                utag.runonce.ext = utag.runonce.ext || {};
                if (typeof utag.runonce.ext[904] == 'undefined') {
                    utag.runonce.ext[904] = 1;
                    if (b['consent_performance'] == '1') {
                        const extensionName = 'Extension UID: 846, \'AA Phone Click Link tracking\'';
                        utag.DB(extensionName + ', starting');

                        function handlePhoneClick(e) {
                            const pages = ["/business-campaign/door-to-door/leaflet-distribution-pricing-form", "/business-parcel-delivery", "/business/parcel-delivery"];
                            const target = e.target.closest('a');
                            const path = document.location.pathname;
                            if (target && pages.indexOf(path) >= 0 && target.getAttribute('href') ? .startsWith('tel:')) {
                                const phoneNumber = target.getAttribute('href').replace(/^tel:/i, '').trim() || 'unknown';
                                utag.link({
                                    eventName: 'cta_call',
                                    eventValue: 'call_'.concat(phoneNumber),
                                    aaLinkName: 'call click '.concat(phoneNumber)
                                }, null, [899]);
                            }
                        }
                        document.addEventListener('click', handlePhoneClick);
                    }
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if (1) {
                    b['tealium_visitor_id_hash'] = b['tealium_visitor_id']
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            utag.ut.sha256 = function(t, n) {
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
            ! function(r) {
                var t = utag.ut.sha256,
                    e = t.lib,
                    a = e.WordArray,
                    n = e.Hasher,
                    s = t.algo,
                    o = [],
                    i = [];
                ! function() {
                    function t(t) {
                        for (var e = r.sqrt(t), a = 2; a <= e; a++)
                            if (!(t % a)) return !1;
                        return !0
                    }

                    function e(r) {
                        return 4294967296 * (r - (0 | r)) | 0
                    }
                    for (var a = 2, n = 0; n < 64;) t(a) && (n < 8 && (o[n] = e(r.pow(a, .5))), i[n] = e(r.pow(a, 1 / 3)), n++), a++
                }();
                var h = [],
                    c = s.SHA256 = n.extend({
                        _doReset: function() {
                            this._hash = new a.init(o.slice(0))
                        },
                        _doProcessBlock: function(r, t) {
                            for (var e = this._hash.words, a = e[0], n = e[1], s = e[2], o = e[3], c = e[4], l = e[5], u = e[6], f = e[7], _ = 0; _ < 64; _++) {
                                if (_ < 16) h[_] = 0 | r[t + _];
                                else {
                                    var v = h[_ - 15],
                                        d = (v << 25 | v >>> 7) ^ (v << 14 | v >>> 18) ^ v >>> 3,
                                        H = h[_ - 2],
                                        g = (H << 15 | H >>> 17) ^ (H << 13 | H >>> 19) ^ H >>> 10;
                                    h[_] = d + h[_ - 7] + g + h[_ - 16]
                                }
                                var p = a & n ^ a & s ^ n & s,
                                    w = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22),
                                    y = f + ((c << 26 | c >>> 6) ^ (c << 21 | c >>> 11) ^ (c << 7 | c >>> 25)) + (c & l ^ ~c & u) + i[_] + h[_];
                                f = u, u = l, l = c, c = o + y | 0, o = s, s = n, n = a, a = y + (w + p) | 0
                            }
                            e[0] = e[0] + a | 0, e[1] = e[1] + n | 0, e[2] = e[2] + s | 0, e[3] = e[3] + o | 0, e[4] = e[4] + c | 0, e[5] = e[5] + l | 0, e[6] = e[6] + u | 0, e[7] = e[7] + f | 0
                        },
                        _doFinalize: function() {
                            var t = this._data,
                                e = t.words,
                                a = 8 * this._nDataBytes,
                                n = 8 * t.sigBytes;
                            return e[n >>> 5] |= 128 << 24 - n % 32, e[14 + (n + 64 >>> 9 << 4)] = r.floor(a / 4294967296), e[15 + (n + 64 >>> 9 << 4)] = a, t.sigBytes = 4 * e.length, this._process(), this._hash
                        },
                        clone: function() {
                            var r = n.clone.call(this);
                            return r._hash = this._hash.clone(), r
                        }
                    });
                t.SHA256 = n._createHelper(c), t.HmacSHA256 = n._createHmacHelper(c)
            }(Math);
            try {
                if (typeof b['tealium_visitor_id_hash'] != 'undefined' && b['tealium_visitor_id_hash'] != '') {
                    b['tealium_visitor_id_hash'] = utag.ut.sha256.SHA256(b['tealium_visitor_id_hash']).toString();
                }
            } catch (e) {}
        }, function(a, b) {
            if (typeof b.productQuantity === 'number') {
                b.productQuantity = "" + b.productQuantity;
            }
            if (typeof b.productPrice === 'number') {
                b.productPrice = "" + b.productPrice;
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
        }, function(a, b, c, d) {
            try {
                if ((b['pageApplicationStep'].toString().toLowerCase().indexOf('Location Details'.toLowerCase()) > -1 && b['pageApplicationName'].toString().toLowerCase().indexOf('Services Near You'.toLowerCase()) > -1)) {
                    c = ['Home|Services Near You', b['productAttributesLocationName']];
                    b['pageBreadCrumb'] = c.join('|')
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
                        b['productName'] = ['Click & Drop']
                    } catch (e) {}
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((b['pageErrorType'].toString().indexOf(' ') > -1 && b['dom.domain'].toString().indexOf('parcel.royalmail.com') > -1)) {
                    b['pageErrorMessage'] = '';
                    b['pageErrorType'] = ''
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
                        b['productCategory'] = ['Online Postage']
                    } catch (e) {}
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if (b['pageName'].toString().toLowerCase().indexOf('QP Form'.toLowerCase()) > -1 || b['pageName'].toString().toLowerCase().indexOf('QP Error'.toLowerCase()) > -1) {
                    b['productSKU'] = ''
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if (b['pageApplicationName'].toString().toLowerCase() == 'keepsafe'.toLowerCase()) {
                    b['pageApplicationName'] = 'Personal-Keepsafe'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if (b['dom.url'].toString().toLowerCase().indexOf('/keep-safe/#/process'.toLowerCase()) > -1) {
                    b['pageName'] = 'RM Web App >Receiving Mail >Receiving Services >Keepsafe >Checkout >Processing Order';
                    b['pageBreadCrumb'] = 'Home|Receiving Mail|Keepsafe|Processing Order';
                    b['pageName'] = 'Receiving Mail|Receiving Services|Keepsafe|Processing Order';
                    b['pageApplicationName'] = 'Personal-Keepsafe';
                    b['pageApplicationStep'] = 'Processing Payment';
                    b['pagePersona'] = 'Personal';
                    b['pageLanguage'] = 'en-gb';
                    b['pageTemplate'] = 'Keepsafe Application'
                }
            } catch (e) {
                utag.DB(e);
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
                productKiller('productID');
                productKiller('serviceName');
                eCommChecker('productName');
                eCommChecker('productSKU');
                eCommChecker('productCategory');
                eCommChecker('productQuantity');
                eCommChecker('productSubcategory');
                eCommChecker('productID');
                eCommChecker('serviceName');
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
            try {
                if ((b['dom.domain'].toString().indexOf('mydeliveries.royalmail.com') > -1 && typeof b['transactionId'] != 'undefined' && b['transactionId'] != '')) {
                    b['transactionID'] = b['transactionId']
                }
            } catch (e) {
                utag.DB(e);
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
            try {
                if ((b['pageApplicationName'].toString().toLowerCase() == 'Personal-Keepsafe'.toLowerCase() && typeof b['transactionID'] != 'undefined' && typeof b['transactionID'] != 'undefined' && b['transactionID'] != '' && !/^KS_02/i.test(b['transactionID']))) {
                    c = ['KS_02', b['transactionID']];
                    b['transactionID'] = c.join('_')
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b, c, d) {
            try {
                if ((b['pageApplicationName'].toString().toLowerCase() == 'Online-Invoice-Payment'.toLowerCase() && typeof b['transactionID'] != 'undefined' && typeof b['transactionID'] != 'undefined' && b['transactionID'] != '' && !/^OIP_01/i.test(b['transactionID']) && !/^OIP-01/i.test(b['transactionID']))) {
                    c = ['OIP_01', b['transactionID']];
                    b['transactionID'] = c.join('_')
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if (b['pageApplicationName'].toString().toLowerCase() == 'Track and Trace'.toLowerCase()) {
                    b['productSKU'] = b['productAttributesServiceName']
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b, c, d) {
            b._ccity = '';
            b._ccountry = '';
            b._ccurrency = (typeof b['transactionCurrency'] != 'undefined') ? b['transactionCurrency'] : '';
            b._ccustid = '';
            b._corder = (typeof b['transactionID'] != 'undefined') ? b['transactionID'] : '';
            b._cpromo = (typeof b['transactionPromoCode'] != 'undefined') ? b['transactionPromoCode'] : '';
            b._cship = (typeof b['transactionDelivery'] != 'undefined') ? b['transactionDelivery'] : '';
            b._cstate = '';
            b._cstore = '';
            b._csubtotal = '';
            b._ctax = (typeof b['transactionTax'] != 'undefined') ? b['transactionTax'] : '';
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
                if (b['dom.domain'].toString().toLowerCase() == 'm.royalmail.com'.toLowerCase() || /^M\.RM/i.test(b['pageName'])) {
                    b['pageType'] = 'Mobile Web'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if (typeof b['pageType'] != 'undefined' && b['pageType'] == '') {
                    b['pageType'] = 'Fixed Web'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            if (/\/verify\//.test(b['dom.pathname'])) {
                var c = [];
                for (var d in b) {
                    if (/^\_pathname/.test(d)) {
                        c.push(b["_pathname" + d.match(/\d/)[0]]);
                    }
                }
                if (c[c.length - 1] === "") {
                    c.pop();
                }
                b.pageMenuTree = c.join("|");
            }
        }, function(a, b) {
            if (/\/verify\//.test(b['dom.pathname'])) {
                var c = [];
                for (var d in b) {
                    if (/^\_pathname/.test(d)) {
                        c.push(b["_pathname" + d.match(/\d/)[0]]);
                    }
                }
                if (c[c.length - 1] === "") {
                    c.pop();
                }
                b.pageName = c.join(" >");
            }
        }, function(a, b, c, d, e, f, g) {
            if (1) {
                d = b['pageOverlayType'];
                if (typeof d == 'undefined') return;
                c = [{
                    'Global Email': 'Global Email'
                }, {
                    'Help Guide': 'Help Guide'
                }, {
                    'Help Article': 'Help Article'
                }, {
                    'Tracking Details': 'Tracking Details'
                }, {
                    'Video': 'Video'
                }, {
                    'Map': 'Map'
                }, {
                    'Email Us Form': '>Email Us CTA >Form'
                }, {
                    'Email Us Error': '>Email Us CTA >Error'
                }, {
                    'Email Us Confirmed': '>Email Us CTA >Confirmed'
                }, {
                    'Call Back Form': '>Call Back CTA >Form'
                }, {
                    'Call Back Error': '>Call Back CTA >Error'
                }, {
                    'Call Back Confirmed': '>Call Back CTA >Confirmed'
                }, {
                    'Email PCAF Result': 'Email PCAF >Result'
                }, {
                    'Email PCAF Result Confirmed': 'Email PCAF >Result Confirmed'
                }, {
                    'Email PCAF Enquiry Form': 'Email PCAF >Enquiry Form'
                }, {
                    'Email PCAF Enquiry Confirmed': 'Email PCAF >Enquiry Confirmed'
                }, {
                    'Email PF Results': 'Email PF >Results'
                }, {
                    'Email PF Results Confirmed': 'Email PF >Results Confirmed'
                }];
                var m = false;
                for (e = 0; e < c.length; e++) {
                    for (f in utag.loader.GV(c[e])) {
                        if (d == f) {
                            b['pageOverlayType'] = c[e][f];
                            m = true
                        };
                    };
                    if (m) break
                };
            }
        }, function(a, b) {
            try {
                if (b['pageOverlayType'].toString().toLowerCase() == 'Tracking Details'.toLowerCase()) {
                    b['pageOverlayTitle'] = 'Full tracking details'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if (typeof b['pageOverlayType'] != 'undefined' && b['pageOverlayType'] != '') {
                    b['pageTestExperimentID'] = '';
                    b['pageTestVariation'] = ''
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
                if (b['dom.pathname'].toString().toLowerCase() == '/corporate'.toLowerCase() || b['dom.pathname'].toString().toLowerCase() == '/corporate/'.toLowerCase() || b['dom.pathname'].toString().toLowerCase() == '/corporate#'.toLowerCase()) {
                    b['pageName'] = 'RM COR >Homepage'
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
        }, function(a, b, c, d, e, f, g) {
            if (1) {
                d = b['pageApplicationStep'];
                if (typeof d == 'undefined') return;
                c = [{
                    'Request': 'Request New Password'
                }, {
                    'Email Sent Confirmation': 'Request New Password Confirmation'
                }, {
                    'Reset': 'Reset Password'
                }, {
                    'Error	Reset': 'Password Error'
                }, {
                    'Password Reset Confirmation': 'Reset Password Confirmation'
                }, {
                    'Manage Royal Mail Accounts': 'Manage Royal Mail Accounts'
                }, {
                    'Contact Preferences Confirmation': 'Contact Preferences Confirmation'
                }, {
                    'Edit Business Details Confirmation': 'Edit Business Details Confirmation'
                }];
                var m = false;
                for (e = 0; e < c.length; e++) {
                    for (f in utag.loader.GV(c[e])) {
                        if (d == f) {
                            b['pageApplicationStep'] = c[e][f];
                            m = true
                        };
                    };
                    if (m) break
                };
            }
        }, function(a, b) {
            try {
                if (typeof b['qp.sid'] != 'undefined' && b['qp.sid'] != '') {
                    b['visitorFormID'] = b['qp.sid']
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if (typeof b['formSID'] != 'undefined' && b['formSID'] != '') {
                    b['visitorFormID'] = b['formSID']
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b, c, d) {
            try {
                if ((typeof b['qp.sid'] != 'undefined' && b['qp.sid'] != '' && !/^WEB/.test(b['qp.sid']))) {
                    c = ['WEB', b['qp.sid']];
                    b['visitorFormID'] = c.join('')
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b, c, d) {
            try {
                if ((typeof b['formSID'] != 'undefined' && typeof b['formSID'] != 'undefined' && b['formSID'] != '' && !/^WEB/.test(b['formSID']))) {
                    c = ['WEB', b['formSID']];
                    b['formSID'] = c.join('')
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b, c, d) {
            try {
                if ((typeof b['formSID'] != 'undefined' && typeof b['formSID'] != 'undefined' && b['formSID'] != '' && b['pageName'].toString().toLowerCase().indexOf('confirm'.toLowerCase()) < 0) || (typeof b['visitorFormID'] != 'undefined' && typeof b['visitorFormID'] != 'undefined' && b['visitorFormID'] != '' && b['pageName'].toString().toLowerCase().indexOf('confirm'.toLowerCase()) < 0)) {
                    c = [b['pageName'], ' Form Confirmation'];
                    b['pageName'] = c.join('')
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b, c, d) {
            try {
                if ((typeof b['visitorFormID'] != 'undefined' && typeof b['visitorFormID'] != 'undefined' && b['visitorFormID'] != '' && !/^WEB/.test(b['visitorFormID']))) {
                    c = ['WEB', b['visitorFormID']];
                    b['visitorFormID'] = c.join('')
                }
            } catch (e) {
                utag.DB(e);
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
        }, function(a, b) {
            try {
                if ((typeof b['pageName'] != 'undefined' && b['pageName'] != '' && !/^RM Web App/i.test(b['pageName']) && !/^RM PER/i.test(b['pageName']) && /^\/personal/.test(b['dom.pathname']))) {
                    try {
                        b['pageName'] = b.pageName.replace("RM", "RM PER >")
                    } catch (e) {}
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((/^\/find-a-postcode/i.test(b['dom.pathname']) && typeof b['pageApplicationStep'] == 'undefined' && b['pageApplicationName'].toString().toLowerCase().indexOf('Cookie Consent Manager'.toLowerCase()) < 0) || (/^\/find-a-postcode/i.test(b['dom.pathname']) && typeof b['pageApplicationStep'] != 'undefined' && b['pageApplicationStep'] == '' && b['pageApplicationName'].toString().toLowerCase().indexOf('Cookie Consent Manager'.toLowerCase()) < 0) || (/^\/rml-shared-find-a-postcode/i.test(b['dom.pathname']) && typeof b['pageApplicationStep'] == 'undefined' && b['pageApplicationName'].toString().toLowerCase().indexOf('Cookie Consent Manager'.toLowerCase()) < 0) || (/^\/rml-shared-find-a-postcode/.test(b['dom.pathname']) && typeof b['pageApplicationStep'] != 'undefined' && b['pageApplicationStep'] == '' && b['pageApplicationName'].toString().toLowerCase().indexOf('Cookie Consent Manager'.toLowerCase()) < 0)) {
                    b['pageApplicationStep'] = 'Search'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((typeof b['pageErrorMessage'] != 'undefined' && b['pageErrorMessage'] != '' && b['dom.pathname'].toString().toLowerCase() == '/track-your-item'.toLowerCase())) {
                    b['pageErrorType'] = 'Field Validation'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((typeof b['pageName'] != 'undefined' && b['pageName'] != '' && /^\/business/i.test(b['dom.pathname']))) {
                    try {
                        b['pageName'] = b.pageName.replace("RM business", "RM BUS")
                    } catch (e) {}
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if (/^RM PER/.test(b['pageName']) || b['dom.pathname'] == '/') {
                    b['sc_channel'] = 'Personal'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if (/www\.mailmen\.co\.uk$/i.test(b['dom.domain'])) {
                    b['sc_channel'] = 'Mailmen'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if (/^RM Web App/.test(b['pageName']) || b['dom.domain'].toString().indexOf('shop.royalmail.com') > -1 || b['dom.domain'].toString().indexOf('parcel.royalmail.com') > -1 || b['dom.domain'].toString().indexOf('stgfastmag.royalmail.com') > -1) {
                    b['sc_channel'] = 'Web Application'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((typeof b['pageName'] != 'undefined' && b['pageName'] != '' && /^\/corporate/i.test(b['dom.pathname']))) {
                    try {
                        b['pageName'] = b.pageName.replace("RM Corporate", "RM COR")
                    } catch (e) {}
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((typeof b['pageName'] != 'undefined' && b['pageName'] != '' && b['pageTemplate'].toString().toLowerCase() == 'Product Information'.toLowerCase() && b['sc_channel'] == 'Business')) {
                    try {
                        b['pageName'] = b.pageName.replace("International", "Int.")
                    } catch (e) {}
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
            }
        }, function(a, b) {
            var date = new Date();
            b.as_timestamp = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        }, function(a, b) {
            try {
                if ((typeof b['pageName'] != 'undefined' && b['pageName'] != '' && b['pageOverlayType'].toString().toLowerCase() == 'Product View'.toLowerCase() && b['pageApplicationName'].toString().toLowerCase() == 'RM Shop'.toLowerCase() && !/^RM Shop/i.test(b['pageName'])) || (typeof b['pageName'] != 'undefined' && b['pageName'] != '' && b['pageApplicationName'].toString().toLowerCase() == 'RM Shop'.toLowerCase() && /Global Email$/i.test(b['pageOverlayType']) && !/^RM Shop/i.test(b['pageName']))) {
                    try {
                        b['pageName'] = b.pageName.replace("RM ", "RM Shop ")
                    } catch (e) {}
                }
            } catch (e) {
                utag.DB(e);
            }
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
                seconds = "0" + seconds;
            }
            b.timeTimestamp = year + '-' + month + '-' + day_of_month + " " + hour + ":" + minutes + ":" + seconds + ".000";
        }, function(a, b) {
            try {
                if ((typeof b['as_email_address_unconfirmed'] != 'undefined' && b['as_email_address_unconfirmed'] != '' && b['consent_advertising'] == '1')) {
                    document.cookie = "as_email_address_unconfirmed=" + b['as_email_address_unconfirmed'] + ";path=/;domain=" + utag.cfg.domain + ";expires=";
                    b['cp.as_email_address_unconfirmed'] = b['as_email_address_unconfirmed'];
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((typeof b['as_email_address'] != 'undefined' && b['as_email_address'] != '' && b['consent_advertising'] == '1')) {
                    document.cookie = "as_email_address=" + b['as_email_address'] + ";path=/;domain=" + utag.cfg.domain + ";expires=";
                    b['cp.as_email_address'] = b['as_email_address'];
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if (b['dom.pathname'].toString().toLowerCase() == '/business'.toLowerCase() || b['dom.pathname'].toString().toLowerCase() == '/business/'.toLowerCase() || b['dom.pathname'].toString().toLowerCase() == '/business#'.toLowerCase()) {
                    b['pageName'] = 'RM BUS >Homepage'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((typeof b['as_marketing_email'] != 'undefined' && b['as_marketing_email'] != '' && b['consent_advertising'] == '1')) {
                    document.cookie = "as_marketing_email=" + b['as_marketing_email'] + ";path=/;domain=" + utag.cfg.domain + ";expires=";
                    b['cp.as_marketing_email'] = b['as_marketing_email'];
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((typeof b['as_login_name'] != 'undefined' && b['as_login_name'] != '' && b['consent_advertising'] == '1')) {
                    document.cookie = "as_login_name=" + b['as_login_name'] + ";path=/;domain=" + utag.cfg.domain + ";expires=";
                    b['cp.as_login_name'] = b['as_login_name'];
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            function lowercaseVars(s) {
                if (utag.data[s]) {
                    utag.data[s] = utag.data[s].toLowerCase();
                }
                if (b[s]) {
                    b[s] = b[s].toLowerCase();
                }
            }
            lowercaseVars('as_email_address');
            lowercaseVars('as_email_address_unconfirmed');
            lowercaseVars('cp.as_email_address');
            lowercaseVars('cp.as_email_address_unconfirmed');
        }, function(a, b) {
            var current_date = Math.floor(Date.now() / 1000);
            var min_date = 1440496503;
            var max_date = 1444780800;
            if (current_date > min_date && current_date < max_date) {
                b.pegasusPreorderWindow = "true";
            } else {
                b.pegasusPreorderWindow = "false";
            }
        }, function(a, b, c, d, e, f, g) {
            if (1) {
                d = b['pageName'];
                if (typeof d == 'undefined') return;
                c = [{
                    'RM BUS >Business >My Account >Edit your profile': 'RM BUS >Business >My Account >Edit Profile'
                }, {
                    'RM BUS >Business >My Account >Edit your profile error': 'RM BUS >Business >My Account >Edit Profile Error'
                }, {
                    'RM BUS >Business >My Account >Edit your profile confirmation': 'RM BUS >Business >My Account >Edit Profile Confirmation'
                }, {
                    'RM BUS >Business >My Account >Communication preferences': 'RM BUS >Business >My Account >Contact Preferences'
                }, {
                    'RM BUS >Business >My Account >Communication preferences confirmation': 'RM BUS >Business >My Account >Contact Preferences Confirmation'
                }, {
                    'RM BUS >Business >My Account >Manage your Royal Mail Accounts': 'RM BUS >Business >My Account >Manage Royal Mail Accounts'
                }, {
                    '“RM BUS >Business >Request new password': 'RM BUS >Business >Login >Request New Password'
                }, {
                    'RM BUS >Business >Request new password >Confirmation': 'RM BUS >Business >Login >Request New Password Confirmation'
                }, {
                    'RM BUS >Business >Reset your password': 'RM BUS >Business >Log In >Password Reset'
                }, {
                    'RM BUS >Business >Reset your password error': 'RM BUS >Business >Log In >Password Reset Error'
                }, {
                    'RM BUS >Business >Reset your password >Confirmation': 'RM BUS >Business >Log In >Password Reset Confirmation'
                }, {
                    'RM BUS >Business >Forgotten your password?': 'RM BUS >Business >Log In >Password Reminder'
                }, {
                    'RM BUS >Business >Forgotten your password? >Confirmation': 'RM BUS >Business >Log In >Password Reminder Confirmation'
                }];
                var m = false;
                for (e = 0; e < c.length; e++) {
                    for (f in utag.loader.GV(c[e])) {
                        if (d == f) {
                            b['pageName'] = c[e][f];
                            m = true
                        };
                    };
                    if (m) break
                };
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
        }, function(a, b, c, d, e, f, g) {
            if (1) {
                d = b['pageMenuTree'];
                if (typeof d == 'undefined') return;
                c = [{
                    'Business|Forgotten your password?': 'Business|Log In'
                }, {
                    'Business|Log Out': 'Business|Log In'
                }, {
                    'Business|Password Confirmation sent': 'Business|Log In'
                }, {
                    'Business|Request new password': 'Business|Log In'
                }, {
                    'Business|New password request email sent': 'Business|Log In'
                }, {
                    'Business|Reset your password': 'Business|Log In'
                }, {
                    'Business|Reset your password confirmation': 'Business|Log In'
                }];
                var m = false;
                for (e = 0; e < c.length; e++) {
                    for (f in utag.loader.GV(c[e])) {
                        if (d == f) {
                            b['pageMenuTree'] = c[e][f];
                            m = true
                        };
                    };
                    if (m) break
                };
            }
        }, function(a, b, c, d, e, f, g) {
            if (1) {
                d = b['domainRefererr'];
                if (typeof d == 'undefined') return;
                c = [{
                    'royalmailgroup.com': 'Internal|royalmailgroup.com'
                }, {
                    'shop.royalmail.com': 'Internal|shop.royalmail.com'
                }, {
                    'mailshotmaker.royalmail.com': 'Internal|mailshotmaker.royalmail.com'
                }, {
                    'ecustomeropinions.com': 'Internal|ecustomeropinions.com'
                }, {
                    'addressnow.co.uk': 'Internal|addressnow.co.uk'
                }, {
                    'royalmailsameday.com': 'Internal|royalmailsameday.com'
                }, {
                    'royalmail.com': 'Internal|royalmail.com'
                }, {
                    'marketreach.co.uk': 'Internal|marketreach.co.uk'
                }, {
                    'royalmailtechnical.com': 'Internal|royalmailtechnical.com'
                }, {
                    'royalmailtracking.online': 'Internal|royalmailtracking.online'
                }, {
                    'royalmail.eu.qualtrics.com': 'Internal|royalmail.eu.qualtrics.com'
                }, {
                    'paypal.com': 'Internal|paypal.com'
                }, {
                    'payments.worldpay.com': 'Internal|payments.worldpay.com'
                }, {
                    'uat.venda.com': 'Internal|uat.venda.com'
                }, {
                    'rm-production-mso.hugoandcat.co.uk': 'Internal|rm-production-mso.hugoandcat.co.uk'
                }, {
                    'rm-uat-mso.hugoandcat.co.uk': 'Internal|rm-uat-mso.hugoandcat.co.uk'
                }, {
                    'worldpay.com/app/hpp/56-0/payment/start': 'Internal|worldpay.com/app/hpp/56-0/payment/start'
                }, {
                    'worldpay.com/app/hpp/57-0/payment/start': 'Internal|worldpay.com/app/hpp/57-0/payment/start'
                }, {
                    'worldpay.com': 'Internal|worldpay.com'
                }, {
                    'hpp.worldpay.com/app/hpp/56-0/payment/start': 'Internal|hpp.worldpay.com/app/hpp/56-0/payment/start'
                }, {
                    'payments.worldpay.com/app/hpp/payment/start': 'Internal|payments.worldpay.com/app/hpp/payment/start'
                }, {
                    'secure7.arcot.com': 'Internal|secure7.arcot.com'
                }, {
                    'secure5.arcot.com': 'Internal|secure5.arcot.com'
                }, {
                    'secure6.arcot.com': 'Internal|secure6.arcot.com'
                }, {
                    'secure4.arcot.com': 'Internal|secure4.arcot.com'
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
            }
        }, function(a, b) {
            try {
                if (typeof b['pageInternalCampaignID'] != 'undefined' && b['pageInternalCampaignID'] != '') {
                    b['pageTrafficSource'] = 'On-site Promotion'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((/^Search Engine/.test(b['domainReferrerClass']) && typeof b['pageCampaignID'] != 'undefined' && b['pageCampaignID'] == '' && typeof b['pageInternalCampaignID'] != 'undefined' && b['pageInternalCampaignID'] == '')) {
                    b['pageTrafficSource'] = 'Organic Search'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b, c, d, e, f, g) {
            if (1) {
                d = b['pageApplicationName'];
                if (typeof d == 'undefined') return;
                c = [{
                    'New Password': 'Log In'
                }];
                var m = false;
                for (e = 0; e < c.length; e++) {
                    for (f in utag.loader.GV(c[e])) {
                        if (d == f) {
                            b['pageApplicationName'] = c[e][f];
                            m = true
                        };
                    };
                    if (m) break
                };
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
                if ((b['domainRefererr'].toString().toLowerCase().indexOf('royalmail'.toLowerCase()) > -1 && typeof b['pageCampaignID'] != 'undefined' && b['pageCampaignID'] == '' && typeof b['pageInternalCampaignID'] != 'undefined' && b['pageInternalCampaignID'] == '') || (b['domainReferrerClass'].toString().toLowerCase().indexOf('Internal'.toLowerCase()) > -1 && typeof b['pageCampaignID'] != 'undefined' && b['pageCampaignID'] == '' && typeof b['pageInternalCampaignID'] != 'undefined' && b['pageInternalCampaignID'] == '')) {
                    b['pageTrafficSource'] = 'Internal Traffic'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((typeof b['pageTrafficSource'] != 'undefined' && b['pageTrafficSource'] == '' && typeof b['domainRefererr'] != 'undefined' && typeof b['domainRefererr'] != 'undefined' && b['domainRefererr'] != '')) {
                    b['pageTrafficSource'] = 'Referrer (Other)'
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
                } else if (b['pageCampaignID'].toString().indexOf('_OS_') > -1) {
                    o.channel = 'OS';
                    o.category = 'socialmedia'
                } else if (/^Search Engine/.test(b['domainReferrerClass'])) {
                    o.channel = 'NS';
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
                        cv = b[''];
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
            try {
                if ((typeof b['eventName'] != 'undefined' && b['eventName'] != '' && /^(royalmail\.uat\.venda\.com|shop\.royalmail\.com|rmgsmilers\.uat\.venda\.com)$/.test(b['dom.domain']) && b['eventName'].toString().toLowerCase() != 'rm_shop_signup_panel_loaded'.toLowerCase())) {
                    b['shopEvent'] = b['eventName']
                }
            } catch (e) {
                utag.DB(e);
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
            try {
                if (/^\/uStore\/Customization/i.test(b['dom.pathname'])) {
                    b['pageName'] = 'RM Shop >Stamps, collectibles & gifts >Smilers>Customization';
                    b['pageMenuTree'] = 'RM Shop|Personal shop|Stamps, collectibles & gifts|Smilers';
                    b['pageBreadCrumb'] = 'Shop|Personal shop|Stamps, collectibles & gifts|Smilers'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if (/^\/uStore\/OrderFinalStep/i.test(b['dom.pathname'])) {
                    b['pageName'] = 'RM Shop >Stamps, collectibles & gifts >Smilers>OrderFinalStep';
                    b['pageMenuTree'] = 'RM Shop|Personal shop|Stamps, collectibles & gifts|Smilers';
                    b['pageBreadCrumb'] = 'Shop|Personal shop|Stamps, collectibles & gifts|Smilers'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            function toType(obj) {
                return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
            }
            if (document.domain === "shop.royalmail.com" || document.domain === "stgfastmag.royalmail.com") {
                if (toType(b.eventName) === "array" && b.eventName.join(',').indexOf('scAdd') > -1 && a !== "basket_data") {
                    setTimeout(function() {
                        utag.basket_grabber_shop("basket grab - add to basket");
                    }, 1000);
                } else if (a === "basket_data") {
                    delete utag.data.eventName;
                }
            }
        }, function(a, b) {
            if (b.pageName === "RM Shop >Checkout >Order Confirmation") {
                b.basket_open = "false";
            }
        }, function(a, b) {
            function toType(obj) {
                return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
            }
            if (document.domain === "shop.royalmail.com" || document.domain === "stgfastmag.royalmail.com") {
                if (toType(b.eventName) === "array" && b.eventName.join(',').indexOf('scAdd') > -1) {
                    b.as_event_name = "shop : add to basket";
                }
            }
        }, function(a, b) {
            try {
                if ((b['dom.domain'].toString().indexOf('royalmailsameday.com') > -1 && b['dom.pathname'] == '/')) {
                    b['pageName'] = 'RM MS >Sameday >Homepage'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b, c, d) {
            try {
                if ((b['dom.domain'].toString().toLowerCase().indexOf('bookings.royalmailsameday.com'.toLowerCase()) > -1 && !/^RM MS/.test(b['pageName']))) {
                    c = ['RM MS >Sameday', b['pageName']];
                    b['pageName'] = c.join(' >')
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((b['dom.pathname'].toString().toLowerCase() == '/personal/receiving-mail/redirection'.toLowerCase() && typeof b['visitorGUID'] != 'undefined' && b['visitorGUID'] != '' && typeof b['pageApplicationName'] != 'undefined' && b['pageApplicationName'].toString().indexOf('Cookie Consent Manager') < 0) || (b['dom.pathname'].toString().toLowerCase() == '/personal/receiving-mail/redirection'.toLowerCase() && typeof b['visitorGUID'] != 'undefined' && b['visitorGUID'] != '' && typeof b['pageApplicationName'] == 'undefined')) {
                    b['pageApplicationStep'] = 'Step 0 - Product Page (Logged In)'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((b['dom.pathname'].toString().toLowerCase() == '/personal/receiving-mail/redirection'.toLowerCase() && typeof b['visitorGUID'] != 'undefined' && b['visitorGUID'] == '' && b['pageApplicationName'].toString().indexOf('Cookie Consent Manager') < 0) || (b['dom.pathname'].toString().toLowerCase() == '/personal/receiving-mail/redirection'.toLowerCase() && typeof b['visitorGUID'] == 'undefined' && b['pageApplicationName'].toString().indexOf('Cookie Consent Manager') < 0) || (b['dom.pathname'].toString().toLowerCase() == '/personal/receiving-mail/redirection'.toLowerCase() && typeof b['pageApplicationName'] != 'undefined' && b['pageApplicationName'].toString().indexOf('Cookie Consent Manager') < 0 && typeof b['visitorGUID'] == 'undefined') || (b['dom.pathname'].toString().toLowerCase() == '/personal/receiving-mail/redirection'.toLowerCase() && typeof b['pageApplicationName'] == 'undefined' && typeof b['visitorGUID'] == 'undefined')) {
                    b['pageApplicationStep'] = 'Step 0 - Product Page (Logged Out)'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b, c, d) {
            try {
                if ((b['dom.pathname'].toString().toLowerCase() == '/personal/receiving-mail/redirection'.toLowerCase() && b['pageErrorType'].toString().toLowerCase() == 'Field Validation'.toLowerCase())) {
                    c = [b['pageName'], ' >Error'];
                    b['pageName'] = c.join('')
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b, c, d) {
            try {
                if ((b['pageBreadCrumb'].toString().toLowerCase() == 'Home|Order still processing'.toLowerCase() && b['pageName'].toString().indexOf('Order still processing') < 0)) {
                    c = [b['pageName'], 'Order still processing'];
                    b['pageName'] = c.join(' >')
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            var d = new Date();
            var n = d.getTime();
            b.timeEpoch = n;
        }, function(a, b) {
            if (typeof b['cp.s_vi'] === "undefined" && typeof b['cp.s_fid'] === "undefined") {
                if (document.cookie.indexOf('s_vi=') > -1) {
                    b['cp.s_vi'] = document.cookie.match(/s_vi=(.+?);\s/)[1];
                } else if (document.cookie.indexOf('s_fid=') > -1) {
                    b['cp.s_fid'] = document.cookie.match(/s_fid=(.+?);\s/)[1];
                }
            }
            if (typeof b['cp.s_vi'] !== "undefined") {
                b.visitorWAID = b['cp.s_vi'].match(/([\d\w]+-[\d\w]+)/)[0]
            } else if (typeof b['cp.s_fid'] !== "undefined") {
                b.visitorWAID = b['cp.s_fid'];
            }
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
                if ((b['dom.referrer'].toString().toLowerCase().indexOf('/user/register'.toLowerCase()) > -1 && typeof b['visitorGUID'] != 'undefined' && b['visitorGUID'] != '' && b['visitorGUID'].toString().indexOf('SF-1') < 0) || (b['dom.pathname'].toString().toLowerCase().indexOf('/register'.toLowerCase()) > -1 && b['dom.domain'].toString().indexOf('mailshotmaker.royalmail.com') > -1 && typeof b['visitorGUID'] != 'undefined' && b['visitorGUID'] != '')) {
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
        }, function(a, b) {
            if (b['consent_advertising'] == 1) {
                utag.DB('in ext321 "AS : Previous Page Name Persisting"');
                b['previous_page_values'] = b['cp.utag_main__prevpage'];
                if (a === "view") {
                    utag.data.page_current_view_count = (utag.data.page_current_view_count) ? utag.data.page_current_view_count + 1 : 1;
                }
                if (a === "view" && utag.cfg.noview !== true || (utag.cfg.noview === true && utag.data.page_current_view_count > 1)) {
                    var htmlChecker = function(varName) {
                        return b[varName];
                    }
                    var page_name = htmlChecker('pageName');
                    var page_type = htmlChecker('pageType');
                    var page_section = htmlChecker('page_section');
                    utag.loader.SC('utag_main', {
                        '_prevpage': page_name + '::' + page_type + '::' + page_section + ';exp-1h'
                    })
                }
                if (b.previous_page_values) {
                    b.previous_page_values = b.previous_page_values.toLowerCase();
                }
                b.previous_page_values = (b.previous_page_vars === 'undefined') ? "unknown::unknown::unknown" : b.previous_page_values;
                if (b.previous_page_values) {
                    var prev_vars = b.previous_page_values.split('::');
                }
                if (prev_vars) {
                    if (prev_vars[0] && prev_vars[0] !== "undefined") {
                        b.previousPageName = prev_vars[0];
                    }
                    if (prev_vars[1] && prev_vars[1] !== "undefined") {
                        b.previousPageType = prev_vars[1];
                    }
                    if (prev_vars[2] && prev_vars[2] !== "undefined") {
                        b.previousPageSection = prev_vars[2];
                    }
                }
            }
        }, function(a, b) {
            try {
                if ((b['pageApplicationName'] == 'Fee to Pay' && b['pageApplicationStep'].toString().toLowerCase().indexOf('Details from card'.toLowerCase()) > -1)) {
                    b['transactionID'] = ''
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
                if ((b['dom.domain'].toString().toLowerCase().indexOf('help.royalmail.com'.toLowerCase()) > -1 && typeof b['helpRatingEvent'] == 'undefined')) {
                    b['pageHelpEvent'] = '1'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((typeof b['transactionDiscount'] != 'undefined' && b['transactionDiscount'] != '' && b['pageName'].toString().toLowerCase().indexOf('confirmation'.toLowerCase()) > -1)) {
                    b['transactionDiscountEvent'] = '1'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if (b['linkText'].toString().indexOf('.pdf') > -1) {
                    b['downloadEvent'] = 'pdf'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b, c, d, e, f, g) {
            if (1) {
                d = b['productSKU'];
                if (typeof d == 'undefined') return;
                c = [{
                    '01': 'Online Invoice Payment - PSS 01'
                }, {
                    '02': 'Keepsafe - PSS 02'
                }, {
                    '03': 'PO Box - PSS 03'
                }];
                var m = false;
                for (e = 0; e < c.length; e++) {
                    for (f in utag.loader.GV(c[e])) {
                        if (d == f) {
                            b['productSKU'] = c[e][f];
                            m = true
                        };
                    };
                    if (m) break
                };
            }
        }, function(a, b) {
            try {
                if ((b['dom.pathname'] == '/business/contact-us-confirmation' && /^RM BUS >Products & Services >Sending >Publishing and advertising >Door to Door >Contact us confirmation/i.test(b['pageName']))) {
                    b['pageName'] = 'RM BUS >Products & Services >Sending >Publishing and advertising >Door to Door >Contact us confirmation';
                    b['pageBreadCrumb'] = 'Home|Products & Services|Sending|Door to Door|Contact us confirmation'
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
        }, function(a, b, c, d) {
            try {
                if (typeof b['pageTestVariation'] != 'undefined' && b['pageTestVariation'] != '') {
                    c = [b['pageTestExperimentID'], b['pageTestVariation']];
                    b['pageTestExperimentTestVariationConcatentation'] = c.join('|')
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
                if (/^www\.royalmail\.com\/redirections\/new\/complete/i.test(b['pageURL'])) {
                    b['pageURL'] = 'www.royalmail.com/redirections/new/complete/id'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if (/^www\.royalmail\.com\/redirections\/renewal\/complete/i.test(b['pageURL'])) {
                    b['pageURL'] = 'www.royalmail.com/redirections/renewal/complete/id'
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
                if ((b['dom.url'].toString().indexOf('www.royalmail.com/saas_login/redirect ') > -1 && b['pageName'] == 'RM')) {
                    b['pageName'] = 'RM >SAAS Login > Redirect'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b, c, d) {
            try {
                if ((b['pageName'].toString().toLowerCase().indexOf('error'.toLowerCase()) < 0 && typeof b['pageErrorType'] != 'undefined' && b['pageErrorType'] != '' && typeof b['cp.supress_487'] == 'undefined')) {
                    c = [b['pageName'], ' >Error'];
                    b['pageName'] = c.join('')
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b, c, d) {
            try {
                if ((b['pageApplicationStep'].toString().toLowerCase().indexOf('error'.toLowerCase()) < 0 && typeof b['pageErrorType'] != 'undefined' && b['pageErrorType'] != '')) {
                    c = [b['pageApplicationStep'], ' >Error'];
                    b['pageApplicationStep'] = c.join('')
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
        }, function(a, b) {
            try {
                if (/^RM COR/.test(b['pageName'])) {
                    b['sc_channel'] = 'Corporate'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((b['dom.domain'].toString().indexOf('mailshotmaker.royalmail.com') > -1 && b['dom.pathname'].toString().toLowerCase().indexOf('/register'.toLowerCase()) > -1 && typeof b['visitorGUID'] != 'undefined' && b['visitorGUID'] != '')) {
                    b['pageName'] = 'RM Web App >MSM >Registration Form Confirmation';
                    b['pageApplicationStep'] = 'Registration Confirmation'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((b['pageApplicationName'].toString().toLowerCase() == 'Redirections'.toLowerCase() && b['pageApplicationStep'].toString().toLowerCase() == 'New Confirmation'.toLowerCase())) {
                    try {
                        b['transactionID'] = b['transactionID'].toString();
                    } catch (e) {}
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
                if ((b['dom.pathname'].toString().indexOf('/redirections/new/complete/') > -1 && typeof b['transactionID'] != 'undefined' && typeof b['transactionID'] != 'undefined' && b['transactionID'] != '')) {
                    b['is_redirection'] = 'true'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((b['dom.domain'].toString().indexOf('shop.royalmail.com') > -1 && b['dom.pathname'].toString().indexOf('/checkout/onepage/success/') > -1) || (b['dom.domain'].toString().indexOf('prdfastmag.royalmail.com') > -1 && b['dom.pathname'].toString().indexOf('/checkout/onepage/success/') > -1)) {
                    b['trustpilot_template_id'] = '5f3d277966e58500010cfe34';
                    b['trustpilot_tags'] = '01SC'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((typeof b['is_redirection'] != 'undefined' && b['is_redirection'].toString().indexOf('true') > -1)) {
                    b['trustpilot_template_id'] = '5af40fccab9049000159887a';
                    b['trustpilot_tags'] = '02RD'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if (b['pageName'] == 'RM PER > Receiving mail >Tools >Pay a Fee 47412517') {
                    b['pageApplicationName'] = ''
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((b['pageName'] == 'RM PER > Receiving mail >Tools >Pay a Fee 47412517' && b['pageApplicationName'].toString().indexOf('Cookie Consent Manager') < 0)) {
                    b['pageApplicationStep'] = ''
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            if (typeof b['cp._tpsample'] == 'undefined' || b['cp._tpsample'] == '') {
                var r = parseInt((Math.random() * 100) + 1);
                var s = {
                    'in': 25,
                    'out': 75
                };
                var g = {},
                    k = 0,
                    i;
                for (i in s) {
                    if (!s.hasOwnProperty(i)) {
                        continue;
                    }
                    k++;
                    g[i] = {};
                    g[i].min = k;
                    k = k + s[i] - 1;
                    g[i].max = k;
                }
                for (i in g) {
                    if (!g.hasOwnProperty(i)) {
                        continue;
                    }
                    if (r >= g[i].min && r <= g[i].max) {
                        s = i;
                        break;
                    }
                }
                document.cookie = "_tpsample=" + s + ";path=/;domain=" + utag.cfg.domain + ";expires=";
                b['cp._tpsample'] = s;
            }
        }, function(a, b) {
            try {
                if (b['dom.pathname'].toString().toLowerCase() == '/node/47493800/done'.toLowerCase()) {
                    b['visitorProfilingOptOut'] = 'true'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if (typeof b['botChatEvent'] != 'undefined' && b['botChatEvent'] != '') {
                    b['botChatEventCounter'] = '1'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if (typeof b['botChatEvent'] != 'undefined' && b['botChatEvent'] != '') {
                    b['botChatEventCounter'] = '1'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if (typeof b['eventType'] != 'undefined' && b['eventType'] != '') {
                    b['eventTypeCounter'] = '1'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((typeof b['as_first_name_unconfirmed'] != 'undefined' && b['as_first_name_unconfirmed'] != '' && b['consent_advertising'] == '1')) {
                    document.cookie = "as_first_name_unconfirmed=" + b['as_first_name_unconfirmed'] + ";path=/;domain=" + utag.cfg.domain + ";expires=";
                    b['cp.as_first_name_unconfirmed'] = b['as_first_name_unconfirmed'];
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            if (b['consent_advertising'] == 1) {
                utag.DB('in ext223 "AS : Format persisted first name/last name/title"');

                function capitaliseCookies(s) {
                    if (utag.data[s]) {
                        utag.data[s] = utag.data[s].toLowerCase();
                        utag.data[s] = utag.data[s][0].toUpperCase() + utag.data[s].slice(1);
                    }
                }
                capitaliseCookies('cp.as_first_name');
                capitaliseCookies('cp.as_last_name');
                capitaliseCookies('cp.as_title');
                capitaliseCookies('cp.as_first_name_unconfirmed');
                capitaliseCookies('cp.as_last_name_unconfirmed');
                capitaliseCookies('cp.as_title_unconfirmed');
            }
        }, function(a, b, c, d, e, f, g) {
            if (1) {
                d = b['pageApplicationStep'];
                if (typeof d == 'undefined') return;
                c = [{
                    'Explicit Consent View': 'explicit_view'
                }, {
                    'Explicit Consent Save': 'explicit_save'
                }, {
                    'Advanced Settings View': 'preference_view'
                }, {
                    'Advanced Settings Save': 'preference_save'
                }];
                var m = false;
                for (e = 0; e < c.length; e++) {
                    for (f in utag.loader.GV(c[e])) {
                        if (d == f) {
                            b['cookieConsentEvent'] = c[e][f];
                            m = true
                        };
                    };
                    if (m) break
                };
                if (!m) b['cookieConsentEvent'] = '';
            }
        }, function(a, b) {
            try {
                if (typeof b['transactionID'] != 'undefined' && b['transactionID'] != '') {
                    b['transactionID_DFA'] = b['transactionID']
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((typeof b['transactionID'] != 'undefined' && b['transactionID'] != '' && /^ER_/i.test(b['transactionID']))) {
                    try {
                        b['transactionID_DFA'] = b.transactionID.replace("ER_", "ER")
                    } catch (e) {}
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((b['dom.pathname'].toString().indexOf('pay-a-fee') > -1 && typeof b['botChatType'] != 'undefined' && typeof b['botChatType'] != 'undefined' && b['botChatType'] != '')) {
                    b['botChatType'] = 'Fee to Pay Assistant'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((b['dom.pathname'].toString().indexOf('redelivery') > -1 && typeof b['botChatType'] != 'undefined' && typeof b['botChatType'] != 'undefined' && b['botChatType'] != '')) {
                    b['botChatType'] = 'Redelivery Assistant'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((typeof b['pageName'] != 'undefined' && b['pageName'] != '' && /^RM Web App >Personal >Track Your Items >Result >TA/i.test(b['pageName']) && b['dom.pathname'].toString().indexOf('/pay-a-fee') > -1 && b['botChatType'].toString().indexOf('Fee to Pay Assistant') > -1)) {
                    try {
                        b['pageName'] = b.pageName.replace("RM Web App >Personal >Track Your Items >Result >TA", "RM Receiving mail >Tools >Pay a fee 23584012 >FA")
                    } catch (e) {}
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((typeof b['pageName'] != 'undefined' && b['pageName'] != '' && /^RM Web App >Personal >Track Your Items >Result >TA/i.test(b['pageName']) && b['dom.pathname'].toString().indexOf('/redelivery') > -1 && b['botChatType'].toString().indexOf('Redelivery Assistant') > -1)) {
                    try {
                        b['pageName'] = b.pageName.replace("RM Web App >Personal >Track Your Items >Result >TA", "RM Receiving mail >Receiving services >Redelivery 19353861 >RA")
                    } catch (e) {}
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((typeof b['pageApplicationStep'] != 'undefined' && b['pageApplicationStep'] != '' && /^TA/i.test(b['pageApplicationStep']) && b['dom.pathname'].toString().indexOf('/pay-a-fee') > -1 && b['botChatType'].toString().indexOf('Fee to Pay Assistant') > -1)) {
                    try {
                        b['pageApplicationStep'] = b.pageApplicationStep.replace("TA", "FA")
                    } catch (e) {}
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((typeof b['as_marketing_phone_unconfirmed'] != 'undefined' && b['as_marketing_phone_unconfirmed'] != '' && b['consent_advertising'] == '1')) {
                    document.cookie = "as_marketing_phone_unconfirmed=" + b['as_marketing_phone_unconfirmed'] + ";path=/;domain=" + utag.cfg.domain + ";expires=";
                    b['cp.as_marketing_phone_unconfirmed'] = b['as_marketing_phone_unconfirmed'];
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((typeof b['pageApplicationStep'] != 'undefined' && b['pageApplicationStep'] != '' && /^TA/i.test(b['pageApplicationStep']) && b['dom.pathname'].toString().indexOf('/redelivery') > -1 && b['botChatType'].toString().indexOf('Redelivery Assistant') > -1)) {
                    try {
                        b['pageApplicationStep'] = b.pageApplicationStep.replace("TA", "RA")
                    } catch (e) {}
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((typeof b['productSKU'] != 'undefined' && b['dom.pathname'].toString().toLowerCase().indexOf('/redirection'.toLowerCase()) > -1 && b['dom.domain'].toString().toLowerCase().indexOf('royalmail.com'.toLowerCase()) > -1)) {
                    b['productGroup'] = 'REDIRECTION'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((typeof b['productSKU'] != 'undefined' && b['dom.pathname'].toString().toLowerCase().indexOf('/keep-safe'.toLowerCase()) > -1 && b['dom.domain'].toString().toLowerCase().indexOf('royalmail.com'.toLowerCase()) > -1)) {
                    b['productGroup'] = 'KEEPSAFE'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((typeof b['as_marketing_post_unconfirmed'] != 'undefined' && b['as_marketing_post_unconfirmed'] != '' && b['consent_advertising'] == '1')) {
                    document.cookie = "as_marketing_post_unconfirmed=" + b['as_marketing_post_unconfirmed'] + ";path=/;domain=" + utag.cfg.domain + ";expires=";
                    b['cp.as_marketing_post_unconfirmed'] = b['as_marketing_post_unconfirmed'];
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((typeof b['productSKU'] != 'undefined' && b['dom.domain'].toString().toLowerCase().indexOf('shop.royalmail.com'.toLowerCase()) > -1) || (typeof b['productSKU'] != 'undefined' && b['dom.domain'].toString().toLowerCase().indexOf('stgfastmag.royalmail.com'.toLowerCase()) > -1)) {
                    b['productGroup'] = 'RM_SHOP'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((typeof b['productSKU'] != 'undefined' && b['dom.domain'].toString().toLowerCase().indexOf('royalmail.com'.toLowerCase()) > -1 && b['dom.pathname'].toString().toLowerCase().indexOf('/pay-a-fee'.toLowerCase()) > -1)) {
                    b['productGroup'] = 'FEE_TO_PAY'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((typeof b['productSKU'] != 'undefined' && b['dom.domain'].toString().toLowerCase().indexOf('parcel.royalmail.com'.toLowerCase()) > -1)) {
                    b['productGroup'] = 'CLICK_AND_DROP'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((typeof b['as_marketing_email_unconfirmed'] != 'undefined' && b['as_marketing_email_unconfirmed'] != '' && b['consent_advertising'] == '1')) {
                    document.cookie = "as_marketing_email_unconfirmed=" + b['as_marketing_email_unconfirmed'] + ";path=/;domain=" + utag.cfg.domain + ";expires=";
                    b['cp.as_marketing_email_unconfirmed'] = b['as_marketing_email_unconfirmed'];
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((typeof b['productSKU'] != 'undefined' && b['dom.domain'].toString().toLowerCase().indexOf('royalmail.com'.toLowerCase()) > -1 && b['dom.pathname'].toString().toLowerCase().indexOf('/po-box'.toLowerCase()) > -1)) {
                    b['productGroup'] = 'PO_BOX'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((typeof b['cp.OPT_IN_CONSENT'] == 'undefined' && b['dom.domain'].toString().indexOf('royalmail.com') > -1) || (typeof b['cp.OPT_IN_CONSENT'] == 'undefined' && b['dom.domain'].toString().indexOf('custhelp.com') > -1)) {
                    document.cookie = "OPT_IN_CONSENT=" + 'OPT-IN-CC' + ";path=/;domain=" + utag.cfg.domain + ";expires=";
                    b['cp.OPT_IN_CONSENT'] = 'OPT-IN-CC';
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((typeof b['cp.cookie_msg'] == 'undefined' && b['dom.domain'].toString().indexOf('personal.help.royalmail.com') > -1) || (typeof b['cp.cookie_msg'] == 'undefined' && b['ut.domain'].toString().indexOf('tst.custhelp.com') > -1)) {
                    if (typeof b['cp.cookie_msg'] == 'undefined') {
                        document.cookie = "cookie_msg=" + 'viewed' + ";path=/;domain=" + utag.cfg.domain + ";expires=";
                        b['cp.cookie_msg'] = 'viewed';
                    }
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((typeof b['as_marketing_sms_unconfirmed'] != 'undefined' && b['as_marketing_sms_unconfirmed'] != '' && b['consent_advertising'] == '1')) {
                    document.cookie = "as_marketing_sms_unconfirmed=" + b['as_marketing_sms_unconfirmed'] + ";path=/;domain=" + utag.cfg.domain + ";expires=";
                    b['cp.as_marketing_sms_unconfirmed'] = b['as_marketing_sms_unconfirmed'];
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((typeof b['serviceName'] != 'undefined' && typeof b['serviceName'] != 'undefined' && b['serviceName'] != '')) {
                    b['productAttributesServiceName'] = b['serviceName']
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if (b['pageName'].toString().toLowerCase() == 'RM Shop >Stamps-signup >Confirmation'.toLowerCase()) {
                    b['eventName'] = 'newsletter_signup'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((b['productAttributesHMMS_Post_Permission'].toString().indexOf('Y') > -1 && typeof b['transactionID'] != 'undefined' && b['transactionID'] != '')) {
                    b['eventName'] = 'HMMSYes'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((typeof b['as_last_name_unconfirmed'] != 'undefined' && b['as_last_name_unconfirmed'] != '' && b['consent_advertising'] == '1')) {
                    document.cookie = "as_last_name_unconfirmed=" + b['as_last_name_unconfirmed'] + ";path=/;domain=" + utag.cfg.domain + ";expires=";
                    b['cp.as_last_name_unconfirmed'] = b['as_last_name_unconfirmed'];
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((b['productAttributesNCOA'].toString().indexOf('Y') > -1 && typeof b['transactionID'] != 'undefined' && b['transactionID'] != '')) {
                    b['eventName'] = 'NCOAYes'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b, c, d) {
            try {
                if ((b['dom.domain'].toString().toLowerCase() == 'www.royalmail.com'.toLowerCase() && b['dom.pathname'] == '/business/marketing/mail/contact/thanks' && b['dom.referrer'].toString().indexOf('/business/marketing/mail/doordropshalfprice/form') > -1)) {
                    c = [b['visitorFormID'], b['pageNodeID']];
                    b['visitorFormID'] = c.join('_')
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((typeof b['as_title_unconfirmed'] != 'undefined' && b['as_title_unconfirmed'] != '' && b['consent_advertising'] == '1')) {
                    document.cookie = "as_title_unconfirmed=" + b['as_title_unconfirmed'] + ";path=/;domain=" + utag.cfg.domain + ";expires=";
                    b['cp.as_title_unconfirmed'] = b['as_title_unconfirmed'];
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((typeof b['as_marketing_phone'] != 'undefined' && b['as_marketing_phone'] != '' && b['consent_advertising'] == '1')) {
                    document.cookie = "as_marketing_phone=" + b['as_marketing_phone'] + ";path=/;domain=" + utag.cfg.domain + ";expires=";
                    b['cp.as_marketing_phone'] = b['as_marketing_phone'];
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((typeof b['as_marketing_post'] != 'undefined' && b['as_marketing_post'] != '' && b['consent_advertising'] == '1')) {
                    document.cookie = "as_marketing_post=" + b['as_marketing_post'] + ";path=/;domain=" + utag.cfg.domain + ";expires=";
                    b['cp.as_marketing_post'] = b['as_marketing_post'];
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((typeof b['as_marketing_sms'] != 'undefined' && b['as_marketing_sms'] != '' && b['consent_advertising'] == '1')) {
                    document.cookie = "as_marketing_sms=" + b['as_marketing_sms'] + ";path=/;domain=" + utag.cfg.domain + ";expires=";
                    b['cp.as_marketing_sms'] = b['as_marketing_sms'];
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((typeof b['as_first_name'] != 'undefined' && b['as_first_name'] != '' && b['consent_advertising'] == '1')) {
                    document.cookie = "as_first_name=" + b['as_first_name'] + ";path=/;domain=" + utag.cfg.domain + ";expires=";
                    b['cp.as_first_name'] = b['as_first_name'];
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((typeof b['as_last_name'] != 'undefined' && b['as_last_name'] != '' && b['consent_advertising'] == '1')) {
                    document.cookie = "as_last_name=" + b['as_last_name'] + ";path=/;domain=" + utag.cfg.domain + ";expires=";
                    b['cp.as_last_name'] = b['as_last_name'];
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((typeof b['as_title'] != 'undefined' && b['as_title'] != '' && b['consent_advertising'] == '1')) {
                    document.cookie = "as_title=" + b['as_title'] + ";path=/;domain=" + utag.cfg.domain + ";expires=";
                    b['cp.as_title'] = b['as_title'];
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if (typeof b['qp.consent'] != 'undefined' && b['qp.consent'] != '') {
                    b['cookieConsentEvent'] = 'pass_through'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if (1) {
                    if (b['consent_advertising'] == 1) {
                        utag.DB('in ext723 "TAS: Canonicalise email and visitor switch detection"');
                        var collectTagID = 933;
                        var shaSalt = b.tealium_account + '/' + b.tealium_profile + '/as_email_consolidated_send/';
                        var v = function() {
                            var pad = function(a, b, c, d) {
                                a = "" + ((a - 0).toString(16));
                                d = '';
                                if (b > a.length) {
                                    for (c = 0; c < (b - a.length); c++) {
                                        d += '0';
                                    }
                                }
                                return "" + d + a;
                            };
                            var d = new Date().getTime();
                            var a = pad(d, 12);
                            var b = "" + Math.random();
                            a += pad(b.substring(2, b.length), 16);
                            try {
                                a += pad((navigator.plugins.length ? navigator.plugins.length : 0), 2);
                                a += pad(navigator.userAgent.length, 3);
                                a += pad(document.URL.length, 4);
                                a += pad(navigator.appVersion.length, 3);
                                a += pad(screen.width + screen.height + parseInt((screen.colorDepth) ? screen.colorDepth : screen.pixelDepth), 5);
                            } catch (e) {
                                utag.DB(e);
                                a += "12345";
                            }
                            return a;
                        };
                        var storeInUtagMainCookie = function(b, name, value, storeSession, isPii) {
                            var sess = storeSession ? ";exp-session" : "";
                            var c = {};
                            isPii = isPii || false;
                            if (isPii) {
                                value = utag.ut.sha256.SHA256(shaSalt + value).toString()
                            };
                            c[name] = value + sess;
                            utag.loader.SC("utag_main", c);
                            b['cp.utag_main_' + name] = value;
                        };
                        var deleteFromUtagMainCookie = function(b, name) {
                            var c = {};
                            c[name] = "";
                            utag.loader.SC("utag_main", c, "d'");
                            delete b['cp.utag_main_' + name];
                        };
                        var getFromUtagMainCookie = function(b, name, lowerCase) {
                            var rv = b['cp.utag_main_' + name];
                            if (rv && lowerCase) {
                                rv = rv.toLowerCase();
                            }
                            return rv;
                        };

                        function getDirectCookie(cname) {
                            var name = cname + "=";
                            var ca = document.cookie.split(';');
                            for (var i = 0; i < ca.length; i++) {
                                var c = ca[i];
                                while (c.charAt(0) == ' ') {
                                    c = c.substring(1);
                                }
                                if (c.indexOf(name) == 0) {
                                    return c.substring(name.length, c.length);
                                }
                            }
                            return "";
                        }
                        var readDirectCookieValue = function(name) {
                            var rv = '';
                            try {
                                var re = new RegExp('(^|\\$)' + name + ':[^$]+');
                                var utag_main_string = getDirectCookie("utag_main");
                                rv = utag_main_string.match(re)[0].split(':')[1];
                            } catch (e) {
                                rv = e.toString();
                            }
                            return rv;
                        };
                        var ALT_EMAIL_VIDS = "alternative_email_vids";
                        var ALT_EMAIL_EMAIL = "alternative_email_email";
                        var IS_USING_ALT_EMAIL = "is_using_alternative_email";
                        var LAST_LOGGED_EMAIL = "last_logged_in_email";
                        var LAST_LOGGED_GUID = "last_logged_in_guid";
                        var CHANGED_AS_ID = "changed_as_id";
                        var V_ID = "v_id";
                        b.as_email_consolidated = b.as_email_consolidated || b.visitorEmail || b.as_email_address || b['cp.as_email_address'];
                        if (b.as_email_consolidated) {
                            b.as_email_consolidated = b.as_email_consolidated.toLowerCase();
                            b.visitorEmail = b.visitorEmail || b.as_email_consolidated;
                        }
                        if (!b.visitorEmail && window.localStorage && window.localStorage.getItem('mage-cache-storage')) {
                            try {
                                var ls = JSON.parse(localStorage.getItem('mage-cache-storage'));
                                if (ls['checkout-data'] && ls['checkout-data'].validatedEmailValue) {
                                    b.as_email_consolidated = ls['checkout-data'].validatedEmailValue.toLowerCase();
                                    b.visitorEmail = b.visitorEmail || b.as_email_consolidated;
                                }
                            } catch (e) {
                                console.log('visitorEmail not found in ls')
                            }
                        }
                        if (b.redirectionsAlternativeEmail) {
                            b.redirectionsAlternativeEmail = b.redirectionsAlternativeEmail.toLowerCase();
                        }
                        var logged_in_user_change = false;
                        var email_change = false;
                        var guid_change = false;
                        if (!b.alternative_email_call) {
                            if (b.as_email_consolidated && getFromUtagMainCookie(b, LAST_LOGGED_EMAIL, true) && utag.ut.sha256.SHA256(shaSalt + b.as_email_consolidated).toString() !== getFromUtagMainCookie(b, LAST_LOGGED_EMAIL, true)) {
                                logged_in_user_change = true;
                                email_change = true;
                            }
                            if (b.visitorGUID && getFromUtagMainCookie(b, LAST_LOGGED_GUID, false) && b.visitorGUID.toString() !== getFromUtagMainCookie(b, LAST_LOGGED_GUID, false)) {
                                logged_in_user_change = true;
                                guid_change = true;
                            }
                        }
                        if (email_change && !guid_change && !b.changed_email_which_call && b.pageApplicationName && b.pageApplicationName.toLowerCase() == 'RML My account - My profile'.toLowerCase() && b.pageApplicationStep && b.pageApplicationStep.toLowerCase() == 'RML My Profile Update Confirmation'.toLowerCase()) {
                            if (a != 'view') {
                                return false;
                            }
                            b.user_has_changed_email_on_profile = 'true';
                            b.new_email_address_changed_to = b.as_email_consolidated;
                            b.as_email_consolidated = getFromUtagMainCookie(b, LAST_LOGGED_EMAIL, true);
                            b.changed_email_which_call = 'old_profile_change';
                            setTimeout(function() {
                                b.changed_email_which_call = 'new_profile_change';
                                b.old_email_address_changed_from = b.as_email_consolidated;
                                b.as_email_consolidated = b.new_email_address_changed_to;
                                delete b.new_email_address_changed_to;
                                utag.view(b, null, [collectTagID]);
                            }, 500);
                        }
                        if (b.pageApplicationName == 'Redirections' && !b.changed_email_which_call && b.pageApplicationStep == 'Step 5 - New Payment' && b.redirectionsAlternativeEmail) {
                            if (a != 'view') {
                                return false;
                            }
                            b.user_has_used_alternative_email = 'true';
                            b.new_email_address_changed_to = b.redirectionsAlternativeEmail;
                            b.changed_email_which_call = 'old_alternative';
                            b.alternative_email_call = 'true';
                            setTimeout(function() {
                                storeInUtagMainCookie(b, ALT_EMAIL_EMAIL, b.redirectionsAlternativeEmail, true);
                                b.changed_email_which_call = 'new_alternative';
                                b.old_email_address_changed_from = b.as_email_consolidated;
                                b.as_email_consolidated = b.redirectionsAlternativeEmail;
                                b.alternative_email_call = 'true';
                                storeInUtagMainCookie(b, IS_USING_ALT_EMAIL, "yes", true);
                                delete b.new_email_address_changed_to;
                                utag.view(b, null, [collectTagID]);
                            }, 500);
                        }
                        if (b.pageApplicationName == 'Redirections' && b.pageApplicationStep == 'Step 5 - New Payment' && !b.redirectionsAlternativeEmail && !b.changed_email_which_call && getFromUtagMainCookie(b, ALT_EMAIL_EMAIL, true)) {
                            if (a != 'view') {
                                return false;
                            }
                            setTimeout(function() {
                                b.changed_email_which_call = 'old_alternative';
                                b.old_email_address_changed_from = b.as_email_consolidated;
                                b.as_email_consolidated = getFromUtagMainCookie(b, ALT_EMAIL_EMAIL, true);
                                b.alternative_email_call = 'true';
                                delete b.new_email_address_changed_to;
                                utag.view(b, null, [collectTagID]);
                                deleteFromUtagMainCookie(b, ALT_EMAIL_EMAIL);
                            }, 500);
                        }
                        if (b.pageApplicationName == 'Redirections' && (b.pageApplicationStep == 'Step 1 - New Addresses' || b.pageApplicationStep == 'Step 2 - New Names' || b.pageApplicationStep == 'Step 3 - New Dates' || b.pageApplicationStep == 'Step 4 - New Summary') && b.pageName != 'RM Web App >Redirections >New Confirmation' && getFromUtagMainCookie(b, IS_USING_ALT_EMAIL, false) == 'yes' && !b.changed_email_which_call && getFromUtagMainCookie(b, ALT_EMAIL_EMAIL, true)) {
                            if (a != 'view') {
                                return false;
                            }
                            storeInUtagMainCookie(b, IS_USING_ALT_EMAIL, "no", true);
                            b.user_has_used_alternative_email = 'false';
                            b.changed_email_which_call = 'original_reverted';
                            b.alternative_email_call = 'true';
                            setTimeout(function() {
                                b.changed_email_which_call = 'alternative_reverted';
                                b.as_email_consolidated = getFromUtagMainCookie(b, ALT_EMAIL_EMAIL, true);
                                b.alternative_email_call = 'true';
                                utag.view(b, null, [collectTagID]);
                            }, 500);
                        }
                        if (!b.alternative_email_call) {
                            if (b.as_email_consolidated) {
                                storeInUtagMainCookie(b, LAST_LOGGED_EMAIL, b.as_email_consolidated, false, true);
                            }
                            if (b.visitorGUID) {
                                storeInUtagMainCookie(b, LAST_LOGGED_GUID, b.visitorGUID, false);
                            }
                        }
                        if (logged_in_user_change && (!b.changed_email_which_call || b.changed_email_which_call == 'new_profile_change')) {
                            var vi = v();
                            storeInUtagMainCookie(b, CHANGED_AS_ID, vi, false);
                        }
                        delete b.tealium_vid_direct_existing_email;
                        delete b.tealium_vid_direct_new_email;
                        delete b.tealium_vid_direct_changed_as_id;
                        delete b.tealium_vid_direct_v_id;
                        b.trackingUsingSessionVids = 'false';
                        if (b.as_email_consolidated && ((getFromUtagMainCookie(b, IS_USING_ALT_EMAIL, false) == 'yes' && b.pageApplicationName == 'Redirections') || (b.alternative_email_call))) {
                            if ((b.pageName == 'RM Web App >Redirections >New Confirmation') || (b.pageName && b.pageName.indexOf('RM Web App >Redirections >Payment failed') > 0) || (b.pageName == 'RM Web App >Redirections >Order Unsuccessful')) {
                                if (getFromUtagMainCookie(b, ALT_EMAIL_EMAIL, true)) {
                                    b.as_email_consolidated = getFromUtagMainCookie(b, ALT_EMAIL_EMAIL, true);
                                }
                            }
                            if (b.as_email_consolidated && getFromUtagMainCookie(b, LAST_LOGGED_EMAIL, true) && b.as_email_consolidated == getFromUtagMainCookie(b, LAST_LOGGED_EMAIL, true)) {
                                b.trackingUsingSessionVids = 'false';
                            } else {
                                b.trackingUsingSessionVids = 'true';
                                b.as_changed_as_id = 'true';
                                var c = getFromUtagMainCookie(b, ALT_EMAIL_VIDS, false) || "{}";
                                var j = JSON.parse(c);
                                if (j[b.as_email_consolidated]) {
                                    b.tealium_visitor_id = j[b.as_email_consolidated];
                                    b.tealium_vid_direct_existing_email = readDirectCookieValue(ALT_EMAIL_VIDS);
                                } else {
                                    var vi = v();
                                    j[b.as_email_consolidated] = vi;
                                    b.tealium_visitor_id = vi;
                                    var s = JSON.stringify(j);
                                    storeInUtagMainCookie(b, ALT_EMAIL_VIDS, s, true);
                                    b.tealium_vid_direct_new_email = readDirectCookieValue(ALT_EMAIL_VIDS);
                                }
                            }
                        }
                        if (b.trackingUsingSessionVids == 'false') {
                            if (getFromUtagMainCookie(b, CHANGED_AS_ID, false)) {
                                b.tealium_visitor_id = getFromUtagMainCookie(b, CHANGED_AS_ID, false);
                                b.tealium_vid_direct_changed_as_id = readDirectCookieValue(CHANGED_AS_ID);
                                b.as_changed_as_id = 'true';
                            } else {
                                b.tealium_visitor_id = getFromUtagMainCookie(b, V_ID, false);
                                b.tealium_vid_direct_v_id = readDirectCookieValue(V_ID);
                                b.as_changed_as_id = 'false';
                            }
                        }
                        if (/main2019$/.test(b.tealium_visitor_id) == false) {
                            b.tealium_visitor_id += 'main2019';
                        }
                        b.as_original_visitor_id = getFromUtagMainCookie(b, V_ID, false);
                        if (/main2019$/.test(b.as_original_visitor_id) == false) {
                            b.as_original_visitor_id += 'main2019';
                        }
                        utag.dle_visitor_id = b.tealium_visitor_id;
                        delete b['cp.utag_main_v_id'];
                        b.as_ut_visitor_id = 'missing';
                        if (b['ut.visitor_id'] && typeof(b['ut.visitor_id']) == 'string') {
                            b.as_ut_visitor_id = b['ut.visitor_id'] + '[b]';
                            if (b.tealium_visitor_id == 'undefinedmain2019' && b.as_changed_as_id == 'false') {
                                b.as_ut_visitor_id = b['ut.visitor_id'] + '[bu]';
                                b.tealium_visitor_id = b['ut.visitor_id'] + 'main2019';
                            }
                        }
                        if (utag && utag.data && utag.data['ut.visitor_id'] && typeof(utag.data['ut.visitor_id']) == 'string') {
                            b.as_ut_visitor_id = utag.data['ut.visitor_id'] + '[u]';
                            if (b.tealium_visitor_id == 'undefinedmain2019' && b.as_changed_as_id == 'false') {
                                b.as_ut_visitor_id = utag.data['ut.visitor_id'] + '[uu]';
                                b.tealium_visitor_id = utag.data['ut.visitor_id'] + 'main2019';
                            }
                        }
                    }
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if (1) {
                    function set_conversion_id(id) {
                        b["gads_conversion_id"] = id;
                    }

                    function set_conversion_label(label) {
                        b["gads_conversion_label"] = label;
                    }

                    function set_page_type(type) {
                        b["gads_conversion_page_type"] = type;
                    }
                    var current_url = b["dom.url"] && b["dom.url"].toLowerCase();
                    var page_name = b["pageName"] && b["pageName"].toLowerCase();
                    var path_name = b["dom.pathname"] && b["dom.pathname"].toLowerCase();
                    var domain = b["dom.domain"] && b["dom.domain"].toLowerCase();
                    var application_step = b["pageApplicationStep"] && b["pageApplicationStep"].toLowerCase();
                    if (path_name == "/personal/receiving-mail/keepsafe".toLowerCase() || path_name == "/receiving/keepsafe".toLowerCase() || path_name == "/personal/receiving-mail".toLowerCase() || path_name == "/receiving".toLowerCase()) {
                        set_conversion_id("AW-858383395");
                        set_page_type("other");
                    }
                    if (page_name == "RM Web App >Receiving Mail >Receiving Services >Keepsafe >Order Confirmation".toLowerCase()) {
                        set_conversion_id("AW-858383395");
                        set_conversion_label("FNzjCKrA_m8Qo8inmQM");
                        set_page_type("other");
                    }
                    if (domain == "addressnow.royalmail.com") {
                        set_conversion_id("AW-877100757");
                        set_page_type("other");
                        if (application_step == "Registration Confirmation".toLowerCase()) {
                            set_conversion_label("ybMCOj7tnEQ1f2dogM");
                        }
                    }
                    if ((domain.indexOf("royalmail.com") > -1 && path_name == "/start-your-redirection-p2".toLowerCase()) || path_name == "/start-your-redirection".toLowerCase() || path_name == "/personal/receiving-mail/redirection".toLowerCase()) {
                        set_conversion_id("AW-997614747");
                        set_page_type("other");
                    }
                    if (path_name.indexOf("/redirections/new/complete/") > -1 && (application_step == "New Confirmation".toLowerCase() || application_step == "Renew Confirmation".toLowerCase())) {
                        set_conversion_id("AW-997614747");
                        set_conversion_label("U0RnCOiYhXAQm8nZ2wM");
                        set_page_type("other");
                    }
                    if ((domain.indexOf("royalmail.com") > -1 && path_name == "/parcel-delivery".toLowerCase()) || path_name == "/courier-parcel".toLowerCase() || path_name == "/send-cheap-parcel".toLowerCase() || path_name == "/business".toLowerCase() || path_name == "/business/services/sending/parcels".toLowerCase() || path_name == "/business/services/sending/parcels-uk".toLowerCase() || path_name == "/business/services/sending/parcels-uk/next-day-delivery".toLowerCase() || path_name == "/business/services/sending/bulk-discounts".toLowerCase() || path_name == "/business/segment/marketplace".toLowerCase() || path_name == "/business/segment/marketplace/ebay-business-tools-and-services".toLowerCase() || path_name == "/business/parcels".toLowerCase() || path_name == "/business/shipping/uk-services".toLowerCase() || path_name == "/business/shipping/uk-services/special-delivery-guaranteed".toLowerCase() || path_name == "/business/guides-and-insights/selling-on-online-marketplaces".toLowerCase()) {
                        set_conversion_id("AW-970252592");
                        set_page_type("other");
                    }
                    if ((domain.indexOf("royalmail.com") > -1 && path_name == "/business-parcel-delivery-confirmation".toLowerCase()) || page_name == "RM BUS >Campaign >Business_Parcel_Delivery >Confirmation LP 40610284") {
                        set_conversion_id("AW-970252592");
                        set_conversion_label("swt-CMr-628QsMLTzgM");
                        set_page_type("other");
                    }
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if (b['consent_advertising'] == '1') {
                    function daysBetweenDates(date1, date2) {
                        try {
                            const secondsPerDay = 24 * 60 * 60;
                            const diffInSeconds = date2 - date1;
                            return Math.round(diffInSeconds / secondsPerDay);
                        } catch (error) {
                            return undefined;
                        }
                    }

                    function toUnixTimestamp(dateStr) {
                        try {
                            const [day, month, year] = dateStr.split('/').map(Number);
                            return Math.floor(Date.UTC(year, month - 1, day) / 1000);
                        } catch (error) {
                            return undefined;
                        }
                    }

                    function parseDate(dateStr) {
                        const [day, month, year] = dateStr.split('/').map(Number);
                        return new Date(year, month - 1, day);
                    }
                    const cb = function(mutationList, observer) {
                        for (var i = 0; i < mutationList.length; i++) {
                            if (mutationList[i].type === 'attributes' && mutationList[i].attributeName === 'value') {
                                const input = mutationList[i].target;
                                if (input.id === 'start-date-input-id') {
                                    sessionStorage.setItem('keepsafe_start_date', toUnixTimestamp(input.value));
                                } else if (input.id === 'delivery-date-input-id') {
                                    sessionStorage.setItem('keepsafe_end_date', toUnixTimestamp(input.value));
                                }
                            }
                        }
                    }
                    var o1 = new MutationObserver(cb),
                        o2 = new MutationObserver(cb);
                    var poll = function(selector, timeout, callback) {
                        if (document.querySelector(selector)) {
                            callback(document.querySelector(selector));
                        } else if (timeout > 0) {
                            setTimeout(poll, 100, selector, timeout - 100, callback);
                        }
                    }
                    if ((b['pageApplicationName'] == 'Keepsafe' || b['pageApplicationName'] == 'Personal-Keepsafe') && b['pageApplicationStep'] == "Get a Quote") {
                        var start_date = document.querySelector('#start-date-input-id'),
                            end_date = document.querySelector('#delivery-date-input-id');
                        if (start_date && end_date) {
                            b['keepsafe_start_date'] = toUnixTimestamp(start_date.value);
                            b['keepsafe_end_date'] = toUnixTimestamp(end_date.value);
                            b['keepsafe_duration'] = daysBetweenDates(b['keepsafe_start_date'], b['keepsafe_end_date']);
                            if (b['transactionProduct'].length > 0) {
                                b['keepsafe_price'] = parseFloat(b['transactionProduct'][0].productPrice)
                            }
                            if (window.sessionStorage) {
                                if (o1 && o2) {
                                    o1.disconnect();
                                    o2.disconnect();
                                    o1.observe(start_date, {
                                        attributes: true,
                                        attributeFilter: ['value']
                                    });
                                    o2.observe(end_date, {
                                        attributes: true,
                                        attributeFilter: ['value']
                                    });
                                }
                                sessionStorage.setItem('keepsafe_start_date', toUnixTimestamp(start_date.value));
                                sessionStorage.setItem('keepsafe_end_date', toUnixTimestamp(end_date.value));
                            }
                        }
                    } else if ((b['pageApplicationName'] == 'Keepsafe' || b['pageApplicationName'] == 'Personal-Keepsafe') && b['pageApplicationStep'] === 'Your Details') {
                        poll('#btn-continue', 5000, function(btn) {
                            btn.addEventListener('click', function() {
                                var email = document.querySelector('#email-id') ? .value;
                                if (email) {
                                    sessionStorage.setItem('keepsafe_visitor_email', email);
                                    b['visitorEmail'] = email;
                                } else if (utag && utag.DB) {
                                    utag.DB('Keepsafe email not found');
                                }
                            });
                        })
                    } else if ((b['pageApplicationName'] == 'Keepsafe' || b['pageApplicationName'] == 'Personal-Keepsafe') && b['dom.hash'] === '/confirmation') {
                        if (window.sessionStorage) {
                            var start_date = sessionStorage.getItem('keepsafe_start_date'),
                                end_date = sessionStorage.getItem('keepsafe_end_date'),
                                email = sessionStorage.getItem('keepsafe_visitor_email');
                            if (start_date) {
                                b['keepsafe_start_date'] = start_date;
                            }
                            if (end_date) {
                                b['keepsafe_end_date'] = end_date;
                            }
                            if (email) {
                                b['visitorEmail'] = email;
                            }
                            if (o1 && o2) {
                                o1.disconnect();
                                o2.disconnect();
                            }
                        }
                    }
                    if (b['pageApplicationName'] === 'POBox' && b['pageApplicationStep'] === 'Your Details') {
                        poll('#btn-continue', 5000, function(btn) {
                            btn.addEventListener('click', function() {
                                var email = document.querySelector('#email-id') ? .value;
                                if (email) {
                                    sessionStorage.setItem('pobox_visitor_email', email);
                                    b['visitorEmail'] = email;
                                } else if (utag && utag.DB) {
                                    utag.DB('POBox email not found');
                                }
                            });
                        })
                    } else if (b['pageApplicationName'] == 'POBox' && b['dom.hash'] === '/confirmation') {
                        if (window.sessionStorage) {
                            var email = sessionStorage.getItem('pobox_visitor_email');
                            if (email) {
                                b['visitorEmail'] = email;
                            }
                        }
                    }
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                utag.runonce = utag.runonce || {};
                utag.runonce.ext = utag.runonce.ext || {};
                if (typeof utag.runonce.ext[892] == 'undefined') {
                    utag.runonce.ext[892] = 1;
                    if ((typeof b['pageURL'] != 'undefined' && b['pageURL'].toString().toLowerCase() == 'shop.royalmail.com/checkout/'.toLowerCase() && typeof b['pageTemplate'] != 'undefined' && b['pageTemplate'].toString().toLowerCase().indexOf('Address'.toLowerCase()) > -1)) {
                        try {
                            const shopBasketFormContextValues = sessionStorage.getItem('shopBasketFormContextValues') ? JSON.parse(sessionStorage.getItem('shopBasketFormContextValues')) : {};
                            document.addEventListener('keydown', (e) => {
                                const emailField = e.target.closest('#customer-email');
                                if (emailField && e.key === 'Enter') {
                                    shopBasketFormContextValues.purchaseEmail = emailField.value;
                                    sessionStorage.setItem('shopBasketFormContextValues', JSON.stringify(shopBasketFormContextValues));
                                }
                            });
                            document.addEventListener('click', (e) => {
                                const continueLogin = e.target.closest('button.continue-login');
                                const continueForm = e.target.closest('#opc-shipping_method button.continue.primary');
                                if (continueLogin) {
                                    const emailField = document.getElementById('customer-email');
                                    if (emailField && emailField.value) {
                                        shopBasketFormContextValues.purchaseEmail = emailField.value;
                                        sessionStorage.setItem('shopBasketFormContextValues', JSON.stringify(shopBasketFormContextValues));
                                    }
                                }
                                if (continueForm) {
                                    const phoneField = document.querySelector('input[name="telephone"]');
                                    if (phoneField && phoneField.value) {
                                        shopBasketFormContextValues.purchasePhone = phoneField.value;
                                        sessionStorage.setItem('shopBasketFormContextValues', JSON.stringify(shopBasketFormContextValues));
                                    }
                                }
                            });
                        } catch (e) {
                            utag.DB(`RM Shop shopBasketFormContextValues error:${e}`)
                        }
                    }
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if (1) {
                    var extensionName = 'Extension UID: 894, \'Google Consent Mode - Consent purpose mapping\'';
                    if (typeof tealiumConsentRegister != "undefined") {
                        b.consent_decision = (tealiumConsentRegister && tealiumConsentRegister.currentDecision) || [];
                        b.google_ad_storage_consent = b.consent_decision.indexOf("3") !== -1 ? "granted" : "denied";
                        b.google_ad_user_data_consent = b.consent_decision.indexOf("3") !== -1 ? "granted" : "denied";
                        b.google_analytics_storage_consent = b.consent_decision.indexOf("2") !== -1 ? "granted" : "denied";
                        b.google_ad_personalization_consent = b.consent_decision.indexOf("3") !== -1 ? "granted" : "denied";
                        b.google_ads_data_redaction = "false";
                        b.google_url_passthrough = "false";
                    }
                }
            } catch (e) {
                utag.DB(e)
            }
        }];
        utag.handler.cfg_extend = [{
            "id": "820",
            "end": 0,
            "bwq": 0,
            "alr": 0,
            "blr": 1
        }, {
            "end": 0,
            "bwq": 0,
            "alr": 0,
            "id": "571",
            "blr": 1
        }, {
            "blr": 1,
            "end": 0,
            "alr": 0,
            "bwq": 0,
            "id": "640"
        }, {
            "alr": 0,
            "end": 0,
            "bwq": 0,
            "id": "704",
            "blr": 1
        }, {
            "blr": 1,
            "end": 0,
            "alr": 0,
            "bwq": 0,
            "id": "742"
        }, {
            "id": "756",
            "end": 0,
            "bwq": 0,
            "alr": 0,
            "blr": 1
        }, {
            "id": "253",
            "alr": 0,
            "end": 0,
            "bwq": 0,
            "blr": 1
        }, {
            "blr": 1,
            "id": "240",
            "bwq": 0,
            "end": 0,
            "alr": 0
        }, {
            "id": "200",
            "alr": 0,
            "end": 0,
            "bwq": 0,
            "blr": 1
        }, {
            "alr": 0,
            "end": 0,
            "bwq": 0,
            "id": "759",
            "blr": 1
        }, {
            "blr": 1,
            "id": "758",
            "end": 0,
            "alr": 0,
            "bwq": 0
        }, {
            "id": "138",
            "alr": 0,
            "end": 0,
            "bwq": 0,
            "blr": 1
        }, {
            "blr": 1,
            "id": "810",
            "end": 0,
            "alr": 0,
            "bwq": 0
        }, {
            "blr": 1,
            "id": "896",
            "end": 0,
            "alr": 0,
            "bwq": 0
        }, {
            "blr": 1,
            "id": "899",
            "end": 0,
            "alr": 0,
            "bwq": 0
        }, {
            "blr": 1,
            "end": 0,
            "alr": 0,
            "bwq": 0,
            "id": "904"
        }, {
            "blr": 0,
            "id": "766",
            "end": 0,
            "alr": 1,
            "bwq": 0
        }, {
            "blr": 0,
            "end": 0,
            "alr": 1,
            "bwq": 0,
            "id": "765"
        }, {
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "id": "80",
            "blr": 0
        }, {
            "id": "129",
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "blr": 0
        }, {
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "id": "614",
            "blr": 0
        }, {
            "blr": 0,
            "id": "130",
            "end": 0,
            "alr": 1,
            "bwq": 0
        }, {
            "blr": 0,
            "end": 0,
            "alr": 1,
            "bwq": 0,
            "id": "356"
        }, {
            "blr": 0,
            "bwq": 0,
            "end": 0,
            "alr": 1,
            "id": "353"
        }, {
            "blr": 0,
            "id": "9",
            "end": 0,
            "alr": 1,
            "bwq": 0
        }, {
            "blr": 0,
            "bwq": 0,
            "end": 0,
            "alr": 1,
            "id": "11"
        }, {
            "id": "89",
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "blr": 0
        }, {
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "id": "132",
            "blr": 0
        }, {
            "id": "672",
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "blr": 0
        }, {
            "id": "127",
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "blr": 0
        }, {
            "id": "128",
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "blr": 0
        }, {
            "blr": 0,
            "id": "131",
            "bwq": 0,
            "end": 0,
            "alr": 1
        }, {
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "id": "245",
            "blr": 0
        }, {
            "id": "389",
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "blr": 0
        }, {
            "id": "391",
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "blr": 0
        }, {
            "id": "246",
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "blr": 0
        }, {
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "id": "385",
            "blr": 0
        }, {
            "blr": 0,
            "id": "77",
            "bwq": 0,
            "end": 0,
            "alr": 1
        }, {
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "id": "390",
            "blr": 0
        }, {
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "id": "393",
            "blr": 0
        }, {
            "id": "643",
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "blr": 0
        }, {
            "blr": 0,
            "end": 0,
            "alr": 1,
            "bwq": 0,
            "id": "3"
        }, {
            "blr": 0,
            "id": "13",
            "bwq": 0,
            "end": 0,
            "alr": 1
        }, {
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "id": "67",
            "blr": 0
        }, {
            "blr": 0,
            "id": "336",
            "bwq": 0,
            "end": 0,
            "alr": 1
        }, {
            "blr": 0,
            "id": "68",
            "bwq": 0,
            "end": 0,
            "alr": 1
        }, {
            "id": "148",
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "blr": 0
        }, {
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "id": "149",
            "blr": 0
        }, {
            "id": "135",
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "blr": 0
        }, {
            "blr": 0,
            "bwq": 0,
            "end": 0,
            "alr": 1,
            "id": "328"
        }, {
            "blr": 0,
            "id": "272",
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
            "id": "106",
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "blr": 0
        }, {
            "id": "157",
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "blr": 0
        }, {
            "blr": 0,
            "id": "150",
            "end": 0,
            "alr": 1,
            "bwq": 0
        }, {
            "id": "198",
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "blr": 0
        }, {
            "id": "493",
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "blr": 0
        }, {
            "id": "647",
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "blr": 0
        }, {
            "blr": 0,
            "id": "645",
            "bwq": 0,
            "end": 0,
            "alr": 1
        }, {
            "id": "646",
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "blr": 0
        }, {
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "id": "763",
            "blr": 0
        }, {
            "id": "644",
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "blr": 0
        }, {
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "id": "403",
            "blr": 0
        }, {
            "blr": 0,
            "id": "96",
            "bwq": 0,
            "end": 0,
            "alr": 1
        }, {
            "id": "160",
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "blr": 0
        }, {
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "id": "110",
            "blr": 0
        }, {
            "blr": 0,
            "end": 0,
            "alr": 1,
            "bwq": 0,
            "id": "113"
        }, {
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "id": "158",
            "blr": 0
        }, {
            "blr": 0,
            "end": 0,
            "alr": 1,
            "bwq": 0,
            "id": "163"
        }, {
            "id": "443",
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "blr": 0
        }, {
            "id": "166",
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "blr": 0
        }, {
            "blr": 0,
            "id": "155",
            "bwq": 0,
            "end": 0,
            "alr": 1
        }, {
            "id": "238",
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "blr": 0
        }, {
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "id": "230",
            "blr": 0
        }, {
            "blr": 0,
            "id": "170",
            "end": 0,
            "alr": 1,
            "bwq": 0
        }, {
            "id": "233",
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "blr": 0
        }, {
            "blr": 0,
            "id": "176",
            "end": 0,
            "alr": 1,
            "bwq": 0
        }, {
            "blr": 0,
            "id": "234",
            "end": 0,
            "alr": 1,
            "bwq": 0
        }, {
            "blr": 0,
            "id": "183",
            "end": 0,
            "alr": 1,
            "bwq": 0
        }, {
            "blr": 0,
            "end": 0,
            "alr": 1,
            "bwq": 0,
            "id": "184"
        }, {
            "blr": 0,
            "id": "154",
            "end": 0,
            "alr": 1,
            "bwq": 0
        }, {
            "blr": 0,
            "end": 0,
            "alr": 1,
            "bwq": 0,
            "id": "192"
        }, {
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "id": "195",
            "blr": 0
        }, {
            "id": "235",
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "blr": 0
        }, {
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "id": "262",
            "blr": 0
        }, {
            "blr": 0,
            "id": "197",
            "end": 0,
            "alr": 1,
            "bwq": 0
        }, {
            "blr": 0,
            "end": 0,
            "alr": 1,
            "bwq": 0,
            "id": "263"
        }, {
            "blr": 0,
            "bwq": 0,
            "end": 0,
            "alr": 1,
            "id": "266"
        }, {
            "blr": 0,
            "id": "265",
            "end": 0,
            "alr": 1,
            "bwq": 0
        }, {
            "blr": 0,
            "bwq": 0,
            "end": 0,
            "alr": 1,
            "id": "196"
        }, {
            "id": "642",
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "blr": 0
        }, {
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "id": "225",
            "blr": 0
        }, {
            "id": "226",
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "blr": 0
        }, {
            "id": "227",
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "blr": 0
        }, {
            "id": "199",
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "blr": 0
        }, {
            "blr": 0,
            "id": "228",
            "bwq": 0,
            "end": 0,
            "alr": 1
        }, {
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "id": "229",
            "blr": 0
        }, {
            "id": "232",
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "blr": 0
        }, {
            "id": "259",
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "blr": 0
        }, {
            "id": "257",
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "blr": 0
        }, {
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "id": "258",
            "blr": 0
        }, {
            "blr": 0,
            "id": "264",
            "bwq": 0,
            "end": 0,
            "alr": 1
        }, {
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "id": "268",
            "blr": 0
        }, {
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "id": "269",
            "blr": 0
        }, {
            "id": "282",
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "blr": 0
        }, {
            "blr": 0,
            "end": 0,
            "alr": 1,
            "bwq": 0,
            "id": "283"
        }, {
            "blr": 0,
            "id": "284",
            "bwq": 0,
            "end": 0,
            "alr": 1
        }, {
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "id": "307",
            "blr": 0
        }, {
            "blr": 0,
            "id": "309",
            "bwq": 0,
            "end": 0,
            "alr": 1
        }, {
            "blr": 0,
            "id": "301",
            "bwq": 0,
            "end": 0,
            "alr": 1
        }, {
            "id": "302",
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "blr": 0
        }, {
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "id": "303",
            "blr": 0
        }, {
            "id": "304",
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "blr": 0
        }, {
            "blr": 0,
            "bwq": 0,
            "end": 0,
            "alr": 1,
            "id": "306"
        }, {
            "blr": 0,
            "id": "314",
            "end": 0,
            "alr": 1,
            "bwq": 0
        }, {
            "blr": 0,
            "id": "316",
            "end": 0,
            "alr": 1,
            "bwq": 0
        }, {
            "id": "317",
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "blr": 0
        }, {
            "id": "318",
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "blr": 0
        }, {
            "blr": 0,
            "id": "321",
            "end": 0,
            "alr": 1,
            "bwq": 0
        }, {
            "id": "332",
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "blr": 0
        }, {
            "id": "334",
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "blr": 0
        }, {
            "id": "338",
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "blr": 0
        }, {
            "blr": 0,
            "id": "411",
            "bwq": 0,
            "end": 0,
            "alr": 1
        }, {
            "id": "420",
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "blr": 0
        }, {
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "id": "424",
            "blr": 0
        }, {
            "id": "444",
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "blr": 0
        }, {
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "id": "446",
            "blr": 0
        }, {
            "blr": 0,
            "id": "457",
            "bwq": 0,
            "end": 0,
            "alr": 1
        }, {
            "id": "111",
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "blr": 0
        }, {
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "id": "469",
            "blr": 0
        }, {
            "blr": 0,
            "end": 0,
            "alr": 1,
            "bwq": 0,
            "id": "470"
        }, {
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "id": "112",
            "blr": 0
        }, {
            "blr": 0,
            "end": 0,
            "alr": 1,
            "bwq": 0,
            "id": "471"
        }, {
            "id": "487",
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "blr": 0
        }, {
            "id": "488",
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "blr": 0
        }, {
            "blr": 0,
            "id": "123",
            "bwq": 0,
            "end": 0,
            "alr": 1
        }, {
            "id": "164",
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "blr": 0
        }, {
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "id": "511",
            "blr": 0
        }, {
            "blr": 0,
            "id": "513",
            "end": 0,
            "alr": 1,
            "bwq": 0
        }, {
            "id": "165",
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "blr": 0
        }, {
            "blr": 0,
            "id": "522",
            "end": 0,
            "alr": 1,
            "bwq": 0
        }, {
            "blr": 0,
            "id": "524",
            "end": 0,
            "alr": 1,
            "bwq": 0
        }, {
            "blr": 0,
            "id": "523",
            "end": 0,
            "alr": 1,
            "bwq": 0
        }, {
            "blr": 0,
            "end": 0,
            "alr": 1,
            "bwq": 0,
            "id": "561"
        }, {
            "blr": 0,
            "id": "562",
            "end": 0,
            "alr": 1,
            "bwq": 0
        }, {
            "blr": 0,
            "end": 0,
            "alr": 1,
            "bwq": 0,
            "id": "590"
        }, {
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "id": "598",
            "blr": 0
        }, {
            "id": "609",
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "blr": 0
        }, {
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "id": "615",
            "blr": 0
        }, {
            "blr": 0,
            "id": "616",
            "end": 0,
            "alr": 1,
            "bwq": 0
        }, {
            "blr": 0,
            "end": 0,
            "alr": 1,
            "bwq": 0,
            "id": "202"
        }, {
            "blr": 0,
            "bwq": 0,
            "end": 0,
            "alr": 1,
            "id": "223"
        }, {
            "blr": 0,
            "id": "653",
            "end": 0,
            "alr": 1,
            "bwq": 0
        }, {
            "blr": 0,
            "bwq": 0,
            "end": 0,
            "alr": 1,
            "id": "656"
        }, {
            "id": "657",
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "blr": 0
        }, {
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "id": "666",
            "blr": 0
        }, {
            "id": "667",
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "blr": 0
        }, {
            "id": "668",
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "blr": 0
        }, {
            "id": "669",
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "blr": 0
        }, {
            "blr": 0,
            "id": "670",
            "bwq": 0,
            "end": 0,
            "alr": 1
        }, {
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "id": "186",
            "blr": 0
        }, {
            "id": "671",
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "blr": 0
        }, {
            "id": "673",
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "blr": 0
        }, {
            "id": "674",
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "blr": 0
        }, {
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "id": "187",
            "blr": 0
        }, {
            "blr": 0,
            "id": "675",
            "bwq": 0,
            "end": 0,
            "alr": 1
        }, {
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "id": "676",
            "blr": 0
        }, {
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "id": "677",
            "blr": 0
        }, {
            "id": "188",
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "blr": 0
        }, {
            "blr": 0,
            "end": 0,
            "alr": 1,
            "bwq": 0,
            "id": "678"
        }, {
            "blr": 0,
            "id": "701",
            "bwq": 0,
            "end": 0,
            "alr": 1
        }, {
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "id": "706",
            "blr": 0
        }, {
            "blr": 0,
            "id": "189",
            "bwq": 0,
            "end": 0,
            "alr": 1
        }, {
            "blr": 0,
            "id": "734",
            "bwq": 0,
            "end": 0,
            "alr": 1
        }, {
            "id": "746",
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "blr": 0
        }, {
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "id": "749",
            "blr": 0
        }, {
            "id": "203",
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "blr": 0
        }, {
            "blr": 0,
            "bwq": 0,
            "end": 0,
            "alr": 1,
            "id": "750"
        }, {
            "blr": 0,
            "id": "752",
            "end": 0,
            "alr": 1,
            "bwq": 0
        }, {
            "blr": 0,
            "id": "204",
            "end": 0,
            "alr": 1,
            "bwq": 0
        }, {
            "id": "190",
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "blr": 0
        }, {
            "id": "191",
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "blr": 0
        }, {
            "blr": 0,
            "id": "193",
            "end": 0,
            "alr": 1,
            "bwq": 0
        }, {
            "id": "205",
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "blr": 0
        }, {
            "id": "206",
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "blr": 0
        }, {
            "id": "207",
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "blr": 0
        }, {
            "blr": 0,
            "id": "771",
            "bwq": 0,
            "end": 0,
            "alr": 1
        }, {
            "id": "723",
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "blr": 0
        }, {
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "id": "776",
            "blr": 0
        }, {
            "id": "825",
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "blr": 0
        }, {
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "id": "892",
            "blr": 0
        }, {
            "blr": 0,
            "id": "894",
            "bwq": 0,
            "end": 0,
            "alr": 1
        }];
        if (utag.gdpr) {
            var consentEnabled = false;
            var preferencesEnabled = false;
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
                "524": {
                    load: utag.cond[279],
                    send: 1,
                    v: 202102040925,
                    wait: 0,
                    tid: 9022
                },
                "991": {
                    load: 4,
                    send: ((utag.cond[518])),
                    v: 202508220900,
                    wait: 0,
                    tid: 6037
                },
                "981": {
                    load: utag.cond[512],
                    send: 1,
                    v: 202508220900,
                    wait: 0,
                    tid: 6037
                },
                "978": {
                    load: utag.cond[436],
                    send: 1,
                    v: 202411051044,
                    wait: 0,
                    tid: 6026
                },
                "1019": {
                    load: ((utag.cond[534])),
                    send: 1,
                    v: 202508220900,
                    wait: 0,
                    tid: 6037
                },
                "950": {
                    load: ((utag.cond[502] || utag.cond[509] || utag.cond[524] || utag.cond[549])),
                    send: 1,
                    v: 202508220900,
                    wait: 0,
                    tid: 6037
                },
                "527": {
                    load: utag.cond[134],
                    send: 1,
                    v: 202411051044,
                    wait: 0,
                    tid: 6026
                },
                "1025": {
                    load: 4,
                    send: 1,
                    v: 202601301219,
                    wait: 0,
                    tid: 7143
                },
                "869": {
                    load: 1,
                    send: 1,
                    v: 202302031634,
                    wait: 1,
                    tid: 4049
                },
                "827": {
                    load: 1,
                    send: 1,
                    v: 202512181149,
                    wait: 1,
                    tid: 4049
                },
                "870": {
                    load: 1,
                    send: 1,
                    v: 202102040925,
                    wait: 1,
                    tid: 4049
                },
                "875": {
                    load: utag.cond[246],
                    send: 1,
                    v: 202302031634,
                    wait: 1,
                    tid: 4049
                },
                "876": {
                    load: utag.cond[441],
                    send: 1,
                    v: 202102040925,
                    wait: 1,
                    tid: 4049
                },
                "877": {
                    load: utag.cond[436],
                    send: 1,
                    v: 202604141400,
                    wait: 1,
                    tid: 4049
                },
                "881": {
                    load: utag.cond[413],
                    send: 1,
                    v: 202508220900,
                    wait: 1,
                    tid: 4049
                },
                "883": {
                    load: utag.cond[343],
                    send: 1,
                    v: 202102040925,
                    wait: 1,
                    tid: 4049
                },
                "884": {
                    load: utag.cond[325],
                    send: 1,
                    v: 202102040925,
                    wait: 1,
                    tid: 4049
                },
                "885": {
                    load: utag.cond[324],
                    send: 1,
                    v: 202102040925,
                    wait: 1,
                    tid: 4049
                },
                "888": {
                    load: utag.cond[464],
                    send: 1,
                    v: 202102040925,
                    wait: 1,
                    tid: 4049
                },
                "889": {
                    load: utag.cond[463],
                    send: 1,
                    v: 202102040925,
                    wait: 1,
                    tid: 4049
                },
                "911": {
                    load: utag.cond[475],
                    send: 1,
                    v: 202102040925,
                    wait: 1,
                    tid: 4049
                },
                "912": {
                    load: utag.cond[474],
                    send: 1,
                    v: 202102040925,
                    wait: 1,
                    tid: 4049
                },
                "918": {
                    load: 1,
                    send: 1,
                    v: 202508220900,
                    wait: 1,
                    tid: 4049
                },
                "929": {
                    load: utag.cond[484],
                    send: 1,
                    v: 202102040925,
                    wait: 1,
                    tid: 4049
                },
                "935": {
                    load: utag.cond[492],
                    send: 1,
                    v: 202102040925,
                    wait: 1,
                    tid: 4001
                },
                "944": {
                    load: utag.cond[495],
                    send: 1,
                    v: 202102040925,
                    wait: 1,
                    tid: 7133
                },
                "953": {
                    load: 1,
                    send: 1,
                    v: 202108191301,
                    wait: 1,
                    tid: 7132
                },
                "957": {
                    load: utag.cond[505],
                    send: 1,
                    v: 202111111057,
                    wait: 1,
                    tid: 12047
                },
                "959": {
                    load: utag.cond[508],
                    send: 1,
                    v: 202202231122,
                    wait: 1,
                    tid: 7133
                },
                "965": {
                    load: 1,
                    send: 1,
                    v: 202204261503,
                    wait: 1,
                    tid: 7132
                },
                "966": {
                    load: utag.cond[509],
                    send: 1,
                    v: 202207050945,
                    wait: 1,
                    tid: 7133
                },
                "967": {
                    load: utag.cond[509],
                    send: 1,
                    v: 202207050945,
                    wait: 1,
                    tid: 7142
                },
                "969": {
                    load: 1,
                    send: 1,
                    v: 202207200832,
                    wait: 1,
                    tid: 5001
                },
                "980": {
                    load: utag.cond[512],
                    send: 1,
                    v: 202302151713,
                    wait: 1,
                    tid: 4049
                },
                "985": {
                    load: utag.cond[414],
                    send: 1,
                    v: 202508220900,
                    wait: 1,
                    tid: 4049
                },
                "986": {
                    load: utag.cond[435],
                    send: 1,
                    v: 202604141400,
                    wait: 1,
                    tid: 4049
                },
                "988": {
                    load: 1,
                    send: 1,
                    v: 202304111120,
                    wait: 1,
                    tid: 12047
                },
                "989": {
                    load: ((utag.cond[516] || utag.cond[517] || utag.cond[520] || utag.cond[545])),
                    send: 1,
                    v: 202508220900,
                    wait: 1,
                    tid: 6037
                },
                "933": {
                    load: (((utag.cond[538] || utag.cond[554]) && !(utag.cond[526] || utag.cond[533] || utag.cond[535]))),
                    send: 1,
                    v: 202603271121,
                    wait: 1,
                    tid: 20064
                },
                "1006": {
                    load: 1,
                    send: 1,
                    v: 202604141400,
                    wait: 1,
                    tid: 20010
                },
                "1008": {
                    load: 1,
                    send: 1,
                    v: 202401231915,
                    wait: 1,
                    tid: 20010
                },
                "1014": {
                    load: (((utag.cond[528]) && (utag.cond[503]))),
                    send: 1,
                    v: 202503131255,
                    wait: 1,
                    tid: 20010
                },
                "1016": {
                    load: ((utag.cond[530])),
                    send: 1,
                    v: 202505131406,
                    wait: 1,
                    tid: 20201
                },
                "1034": {
                    load: (((utag.cond[496] || utag.cond[543]) && (utag.cond[544]))),
                    send: 1,
                    v: 202603271121,
                    wait: 1,
                    tid: 20201
                },
                "1049": {
                    load: ((utag.cond[555])),
                    send: 1,
                    v: 202512181149,
                    wait: 1,
                    tid: 20119
                },
                "1050": {
                    load: ((utag.cond[555])),
                    send: 1,
                    v: 202512181149,
                    wait: 1,
                    tid: 18048
                }
            };
            utag.loader.cfgsort = ["524", "991", "981", "978", "1019", "950", "527", "1025", "869", "827", "870", "875", "876", "877", "881", "883", "884", "885", "888", "889", "911", "912", "918", "929", "935", "944", "953", "957", "959", "965", "966", "967", "969", "980", "985", "986", "988", "989", "933", "1006", "1008", "1014", "1016", "1034", "1049", "1050"];
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
    }
    if (typeof utag_cfg_ovrd != 'undefined') {
        for (utag._i in utag.loader.GV(utag_cfg_ovrd)) utag.cfg[utag._i] = utag_cfg_ovrd[utag._i]
    };
    try {
        (function(window) {
            function evaluateLoadRule(id) {
                if (!id) return false;
                if (id === "all") return true;
                var config = {};
                config[id] = 0;
                var data = window.utag.loader.GV(window.utag_data);
                window.utag.cl = {
                    "_all_": 1
                };
                window.utag.loader.rd_flag = 1;
                window.utag.loader.RD(data);
                window.utag.loader.loadrules(data, config);
                window.utag.cl = undefined;
                window.utag.loader.rd_flag = undefined;
                return Boolean(config[id]);
            }

            function checkLoadRulesConflict(map) {
                if (!map) return true;
                var counter = 0;
                for (var key in map) {
                    if (map[key]) counter += 1;
                }
                if (counter > 1) return true;
                return false;
            }

            function canIntegrationLoad(id) {
                return Boolean(!window.tealiumCmpIntegration.loadRules.hasConflict && window.tealiumCmpIntegration.loadRules.loadMap[id]);
            }
            window.tealiumCmpIntegration = window.tealiumCmpIntegration || {};
            window.tealiumCmpIntegration.loadRules = {};
            window.tealiumCmpIntegration.loadRules.canIntegrationLoad = canIntegrationLoad;
            window.tealiumCmpIntegration.loadRules.loadMap = {
                "3a946e5f-87e8-4814-8eff-743da5cb1619": evaluateLoadRule("all")
            };
            window.tealiumCmpIntegration.loadRules.exemptionMap = {};
            window.tealiumCmpIntegration.loadRules.hasConflict = checkLoadRulesConflict(window.tealiumCmpIntegration.loadRules.loadMap);
        })(window);
        if (window.tealiumCmpIntegration.loadRules.canIntegrationLoad("3a946e5f-87e8-4814-8eff-743da5cb1619")) {
            window.tealiumCmpIntegration = window.tealiumCmpIntegration || {};
            window.tealiumCmpIntegration.map = {
                "trustarc_0108c325-3499-4e4a-f4a2-a56e2f6c85ab": {
                    "1": [],
                    "3": ["527", "827", "869", "870", "875", "876", "877", "881", "883", "884", "885", "888", "889", "911", "912", "918", "929", "933", "935", "950", "953", "957", "965", "969", "978", "980", "981", "985", "986", "988", "989", "991", "1006", "1008", "1014", "1016", "1019", "1034", "1045", "1050", "1049"],
                    "0": ["1025"],
                    "2": ["524", "944", "959", "966", "967"]
                }
            };
            window.tealiumCmpIntegration.refiringAllowed = [524, 527, 827, 869, 870, 875, 876, 877, 881, 883, 884, 885, 888, 889, 911, 912, 918, 929, 933, 935, 944, 950, 953, 957, 959, 965, 966, 967, 969, 978, 980, 981, 985, 986, 988, 989, 991, 1006, 1008, 1014, 1016, 1019, 1025, 1034, 1045, 1049, 1050];
            window.tealiumCmpIntegration.tiqGroupName = "0";;
            (function trustarc(window) {
                window.tealiumCmpIntegration = window.tealiumCmpIntegration || {}
                window.tealiumCmpIntegration.cmpName = 'TrustArc'
                window.tealiumCmpIntegration.cmpIntegrationVersion = 'trustarc-1.0.3'
                window.tealiumCmpIntegration.cmpFetchCurrentConsentDecision = cmpFetchCurrentConsentDecision
                window.tealiumCmpIntegration.cmpFetchCurrentLookupKey = cmpFetchCurrentLookupKey
                window.tealiumCmpIntegration.cmpCheckIfOptInModel = cmpCheckIfOptInModel
                window.tealiumCmpIntegration.cmpCheckForWellFormedDecision = cmpCheckForWellFormedDecision
                window.tealiumCmpIntegration.cmpCheckForExplicitConsentDecision = cmpCheckForExplicitConsentDecision
                window.tealiumCmpIntegration.cmpCheckForTiqConsent = cmpCheckForTiqConsent
                window.tealiumCmpIntegration.cmpConvertResponseToGroupList = cmpConvertResponseToGroupList
                window.tealiumCmpIntegration.cmpConvertResponseToLookupObject = cmpConvertResponseToLookupObject

                function cmpCheckIfOptInModel() {
                    var euNoticeMatch = /notice_behavior/.test(document.cookie) ? document.cookie.match(/notice_behavior=(.*?),eu/)[1] : 'expressed';
                    var modeCookieValue = (truste && truste.util && typeof truste.util.readCookie === 'function' && truste.util.readCookie('notice_behavior')) || euNoticeMatch + '|eu';
                    return modeCookieValue.indexOf(euNoticeMatch) === 0;
                }

                function cmpFetchCurrentConsentDecision() {
                    if (!window.truste || !window.truste.util || typeof window.truste.util.readCookie !== 'function') return false
                    var cookieValue = window.truste.util.readCookie(truste.eu.COOKIE_GDPR_PREF_NAME) || '0,'
                    var map = (window.tealiumCmpIntegration && window.tealiumCmpIntegration.map && Object.keys(window.tealiumCmpIntegration.map)[0] && window.tealiumCmpIntegration.map[Object.keys(window.tealiumCmpIntegration.map)[0]]) || {}
                    if (cmpCheckIfOptInModel() === false && cmpCheckForExplicitConsentDecision() === false) {
                        cookieValue = Object.keys(map).join(',')
                    }
                    return {
                        cookie: cookieValue
                    }
                }

                function cmpFetchCurrentLookupKey() {
                    return (window.tealiumCmpIntegration && window.tealiumCmpIntegration.map && Object.keys(window.tealiumCmpIntegration.map)[0]) || '(Vendor ID check disabled)'
                }

                function cmpCheckForWellFormedDecision(cmpRawOutput) {
                    if (typeof cmpRawOutput !== 'object') return false
                    if (typeof cmpRawOutput.cookie !== 'string') return false
                    return true
                }

                function cmpCheckForExplicitConsentDecision(cmpRawOutput) {
                    if (!window.truste || !window.truste.util || typeof window.truste.util.readCookie !== 'function') return false
                    return typeof window.truste.util.readCookie(truste.eu.COOKIE_GDPR_PREF_NAME) === 'string'
                }

                function cmpConvertResponseToLookupObject(cmpRawOutput) {
                    if (!cmpCheckForWellFormedDecision(cmpRawOutput)) return []
                    const cookieConsentValues = cmpRawOutput.cookie.split(':')[0].split(',')
                    const extraSplit = []
                    cookieConsentValues.forEach((el) => {
                        if (!el) return
                        extraSplit.push.apply(extraSplit, el.split('|'))
                    })
                    const trustArcMap = {
                        0: 'Required',
                        1: 'Functional',
                        2: 'Personalization/Advertising'
                    }
                    const output = {}
                    extraSplit.forEach((key) => {
                        if (key !== '') {
                            output[key] = trustArcMap[key] || 'Category name unknown'
                        }
                    })
                    return output
                }

                function cmpConvertResponseToGroupList(cmpRawOutput) {
                    var permittedPurposesWithNames = cmpConvertResponseToLookupObject(cmpRawOutput)
                    var keysOrValues = 'keys'
                    return Object[keysOrValues](permittedPurposesWithNames)
                }

                function cmpCheckForTiqConsent(cmpRawOutput, tiqGroupName) {
                    if (cmpCheckForWellFormedDecision(cmpRawOutput) !== true) return false
                    tiqGroupName = tiqGroupName || 'tiq-group-name-missing'
                    var allowedGroups = cmpConvertResponseToGroupList(cmpRawOutput)
                    return allowedGroups.indexOf(tiqGroupName) !== -1
                }
            })(window)
        }
        var hasLoadRuleMatch = Object.values(window.tealiumCmpIntegration.loadRules.loadMap).some(value => !!value);
        var hasExemptionMatch = Object.values(window.tealiumCmpIntegration.loadRules.exemptionMap).some(value => !!value);
        if (hasLoadRuleMatch || !hasExemptionMatch) {
            (function(window) {
                var version = "v1.2.1";
                window.tealiumCmpIntegration = window.tealiumCmpIntegration || {};
                window.tealiumCmpIntegration.cmpName = window.tealiumCmpIntegration.cmpName || "Unnamed CMP";
                var nameOfFullGroupArray = window.tealiumCmpIntegration.nameOfFullGroupArray || "tci.purposes_with_consent_all";
                var nameOfUnprocessedGroupArray = window.tealiumCmpIntegration.nameOfUnprocessedGroupArray || "tci.purposes_with_consent_unprocessed";
                var nameOfProcessedGroupArray = window.tealiumCmpIntegration.nameOfProcessedGroupArray || "tci.purposes_with_consent_processed";
                var nameOfConsentTypeString = window.tealiumCmpIntegration.nameOfConsentTypeString || "tci.consent_type";
                var nameOfEventIdString = window.tealiumCmpIntegration.nameOfConsentTypeString || "tci.event_id";
                var nameOfImplicitQueueMarker = window.tealiumCmpIntegration.nameOfImplicitQueueMarker || "tci.from_implicit_queue"
                tealiumCmpIntegration.suppressConsentRegister = tealiumCmpIntegration.suppressConsentRegister || false;
                var refiringAllowed = window.tealiumCmpIntegration.refiringAllowed || [];
                var nameOfConsentPollingEvent = window.tealiumCmpIntegration.nameOfConsentPollingEvent || "tiq_cmp_consent_polling";
                var consentTimeoutInterval = 250;
                var tiqInDebugMode = /utagdb=true/.test(document.cookie);
                var tealiumEnvironment = getTealiumEnvironment() || "prod";
                var tiqGroupName = window.tealiumCmpIntegration.tiqGroupName || "_missing_";
                var cmpFetchCurrentConsentDecision = (typeof window.tealiumCmpIntegration.cmpFetchCurrentConsentDecision === "function" && window.tealiumCmpIntegration.cmpFetchCurrentConsentDecision) || function() {};
                var cmpCheckForWellFormedDecision = (typeof window.tealiumCmpIntegration.cmpCheckForWellFormedDecision === "function" && window.tealiumCmpIntegration.cmpCheckForWellFormedDecision) || function() {};
                var cmpFetchCurrentLookupKey = (typeof window.tealiumCmpIntegration.cmpFetchCurrentLookupKey === "function" && window.tealiumCmpIntegration.cmpFetchCurrentLookupKey) || function() {};
                var cmpCheckForExplicitConsentDecision = (typeof window.tealiumCmpIntegration.cmpCheckForExplicitConsentDecision === "function" && window.tealiumCmpIntegration.cmpCheckForExplicitConsentDecision) || function() {};
                var cmpCheckForTiqConsent = (typeof window.tealiumCmpIntegration.cmpCheckForTiqConsent === "function" && window.tealiumCmpIntegration.cmpCheckForTiqConsent) || function() {};
                var cmpConvertResponseToGroupList = (typeof window.tealiumCmpIntegration.cmpConvertResponseToGroupList === "function" && window.tealiumCmpIntegration.cmpConvertResponseToGroupList) || function() {};
                var cmpCheckIfOptInModel = (typeof window.tealiumCmpIntegration.cmpCheckIfOptInModel === "function" && window.tealiumCmpIntegration.cmpCheckIfOptInModel) || function() {};
                window.tealiumCmpIntegration.version = version;
                window.tealiumCmpIntegration.logger = logger;
                window.tealiumCmpIntegration.getCurrentConsentDecision = getCurrentConsentDecision;
                window.tealiumCmpIntegration.cmpFetchCurrentLookupKey = cmpFetchCurrentLookupKey;
                window.tealiumCmpIntegration.isNoviewSet = window.utag_cfg_ovrd && window.utag_cfg_ovrd.noview === true;
                window.tealiumCmpIntegration.nameOfFullGroupArray = nameOfFullGroupArray;
                window.tealiumCmpIntegration.nameOfConsentTypeString = nameOfConsentTypeString;
                window.tealiumCmpIntegration.nameOfUnprocessedGroupArray = nameOfUnprocessedGroupArray;
                window.tealiumCmpIntegration.nameOfProcessedGroupArray = nameOfProcessedGroupArray;
                window.tealiumCmpIntegration.implicitEventQueue = window.tealiumCmpIntegration.implicitEventQueue || [];
                window.tealiumCmpIntegration.earlyEventQueue = window.tealiumCmpIntegration.earlyEventQueue || [];
                var map = window.tealiumCmpIntegration.map || {};
                window.tealiumCmpIntegration.tagBasedMap = generateTagBasedMap();
                var alreadyLoggedMessageIds = {};

                function messageNotLoggedYet(messageId) {
                    var output = false;
                    if (typeof alreadyLoggedMessageIds[messageId] === "undefined") {
                        alreadyLoggedMessageIds[messageId] = true;
                        output = true;
                    }
                    return output;
                }

                function buildConsentDecisionFromRawCmpOutput(cmpRawOutput) {
                    var vendorArray = cmpConvertResponseToGroupList(cmpRawOutput) || [];
                    var isWellFormed = cmpCheckForWellFormedDecision(cmpRawOutput);
                    if (!isWellFormed) {
                        vendorArray.type = "missing-well-formed-response";
                        return vendorArray;
                    }
                    var tagBasedMap = generateTagBasedMap();
                    var currentSettingsIdHasMapping = typeof tagBasedMap === "object" && Object.keys(tagBasedMap).length > 0;
                    if (!currentSettingsIdHasMapping) {
                        vendorArray.type = "missing-map";
                        return vendorArray;
                    }
                    vendorArray.type = cmpCheckForExplicitConsentDecision(cmpRawOutput) ? "explicit" : "implicit";
                    var tiqGroupName = window.tealiumCmpIntegration.tiqGroupName || "_missing_";
                    if (cmpCheckForTiqConsent(cmpRawOutput, tiqGroupName) === false) {
                        vendorArray.type = "missing-tiq-consent";
                    }
                    return vendorArray;
                }
                class TealiumConsentRegister {
                    constructor() {
                        this.currentDecision = null;
                        this.decisions = [];
                    }
                    addConsentDecision(decision) {
                        if (!decision || (decision.type !== 'implicit' && decision.type !== 'explicit')) {
                            return;
                        }
                        if (!this.isNewDecision(this.currentDecision, decision)) {
                            return;
                        }
                        const eventType = this.currentDecision === null ? 'consent_loaded' : 'consent_updated';
                        this.currentDecision = decision;
                        this.decisions.push(decision);
                        const event = new CustomEvent(eventType, {
                            detail: {
                                decision: decision
                            }
                        });
                        window.dispatchEvent(event);
                    }
                    getCurrentDecision() {
                        return this.currentDecision;
                    }
                    getAllDecisions() {
                        return this.decisions;
                    }
                    isNewDecision(desc1, desc2) {
                        if (!desc1 || !desc2 || desc1.length !== desc2.length || desc1.type !== desc2.type) return true;
                        for (let i = 0; i < desc1.length; i++) {
                            if (desc1[i] !== desc2[i]) {
                                return true;
                            }
                        }
                        return false;
                    }
                }

                function reactToCmpResponse(cmpResponse) {
                    var cmpFound = typeof cmpResponse === "object";
                    var foundWellFormedConsentDecision = cmpCheckForWellFormedDecision(cmpResponse);
                    var tagBasedMap = generateTagBasedMap();
                    var foundMapEntryForActiveSetting = Object.keys(tagBasedMap).length > 0;
                    var foundExplicitConsent = cmpCheckForExplicitConsentDecision(cmpResponse);
                    var tiqIsAllowedToFire = cmpCheckForTiqConsent(cmpResponse, tiqGroupName);
                    var tiqIsLoaded = window.tealiumCmpIntegration.isTiqReady || (window.utag && window.utag.handler && window.utag.handler.iflag === 1);
                    var conflictingIntegrations = window.tealiumCmpIntegration.loadRules.hasConflict;
                    var noEnforcementRuleApplies = (Object.values(window.tealiumCmpIntegration.loadRules.loadMap)).indexOf(true) === -1;
                    var currentDecision = buildConsentDecisionFromRawCmpOutput(cmpResponse);
                    try {
                        if (!window.tealiumCmpIntegration.suppressConsentRegister) {
                            window.tealiumConsentRegister = window.tealiumConsentRegister || new TealiumConsentRegister();
                            window.tealiumConsentRegister.addConsentDecision(currentDecision);
                        }
                    } catch (e) {
                        console.warn(e)
                    }

                    function checkLater() {
                        if (!window.tealiumCmpIntegration.alreadyPolling) {
                            window.tealiumCmpIntegration.alreadyPolling = true;
                            return window.setTimeout(recheckForCmpAndConsent, consentTimeoutInterval);
                        }
                    }

                    function checkLaterIfNeeded() {
                        if (cmpCheckIfOptInModel() === true) {
                            return checkLater();
                        }
                        if (cmpCheckIfOptInModel() === false && !window.tealiumCmpIntegration.isTiqReady) {
                            return checkLater();
                        }
                    }
                    if (tiqIsLoaded) {
                        window.tealiumCmpIntegration.isTiqReady = true;
                    }
                    if (conflictingIntegrations) {
                        if (messageNotLoggedYet(0)) {
                            var message = "Conflicting consent integrations found:\n";
                            var loadMap = window.tealiumCmpIntegration.loadRules.loadMap;
                            Object.keys(loadMap).forEach(function(key) {
                                if (loadMap[key])
                                    message += "\n- " + key
                            });
                            message += "\n\nStopping TiQ (no cookies set/removed, no tags fired).\n\nNo further polling."
                            logger(message);
                        }
                        stopTiq();
                    } else if (noEnforcementRuleApplies) {
                        if (messageNotLoggedYet(10))
                            logger("Consent Integrations are active on this environment, but none of the enforcement rules apply to this page, and no exemption applies.\n\nStopping TiQ (no cookies set/removed, no tags fired).");
                        stopTiq();
                    } else if (!cmpFound) {
                        if (messageNotLoggedYet(1))
                            logger("No CMP found on page.\n\nStopping TiQ (no cookies set/removed, no tags fired).\n\nPolling for changes.");
                        checkLater();
                        stopTiq();
                    } else if (!foundMapEntryForActiveSetting) {
                        if (messageNotLoggedYet(2))
                            logger("No map found for current CMP Lookup Key.\n\nStopping TiQ (no cookies set/removed, no tags fired).\n\nNo retries.");
                        stopTiq();
                    } else if (!foundWellFormedConsentDecision) {
                        if (messageNotLoggedYet(3))
                            logger("Found CMP and got response, but didn't understand the response.\n\nStopping TiQ (no cookies set/removed, no tags fired).\n\nPolling for changes.");
                        checkLater();
                        stopTiq();
                    } else if (!tiqIsAllowedToFire) {
                        if (messageNotLoggedYet(4))
                            logger("Found CMP and got well-formed response, but TiQ (window.tealiumCmpIntegration.tiqGroupName, defined as " +
                                window.tealiumCmpIntegration.tiqGroupName +
                                ") isn't allowed to run based on the response.\n\nStopping TiQ (no cookies set/removed, no tags fired).\n\nPolling for changes.");
                        checkLaterIfNeeded();
                        stopTiq();
                    } else if (!foundExplicitConsent) {
                        if (cmpCheckIfOptInModel() === true) {
                            checkLaterIfNeeded();
                            if (messageNotLoggedYet(5))
                                logger("Found CMP and got well-formed IMPLICIT response which includes TiQ.\n\nAllowing certain tags to fire based on IMPLICIT consent.\n\nPolling for changes (opt-in mode).");
                        } else {
                            if (messageNotLoggedYet(5))
                                logger("Found CMP and got well-formed IMPLICIT response which includes TiQ.\n\nAllowing certain tags to fire based on IMPLICIT consent.\n\nNo further polling (opt-out mode)");
                        }
                        if (tiqIsLoaded) {
                            processEarlyQueue();
                        } else {
                            checkLaterIfNeeded();
                        }
                        triggerOrQueue();
                    } else if (foundExplicitConsent) {
                        if (messageNotLoggedYet(6))
                            logger("Found CMP and got well-formed EXPLICIT response which includes TiQ.\n\nAllowing certain tags to fire based on EXPLICIT consent.\n\nNo further polling.");
                        processEarlyQueue();
                        processImplicitQueue();
                        triggerOrQueue();
                    } else {
                        if (messageNotLoggedYet(7))
                            logger("Something unexpected went wrong.\n\nStopping TiQ (no cookies set/removed, no tags fired).\n\nNo retries.");
                        stopTiq();
                    }
                    if (!window.tealiumCmpIntegration.suppressConsentRegister && !window.tealiumCmpIntegration.alreadyPolling) {
                        window.tealiumCmpIntegration.pollingWouldHaveStopped = true;
                        return checkLater();
                    }
                }

                function overrideUtagFunctions() {
                    if (window.utag.handler.trigger.toString().indexOf("tealiumCmpIntegration") !== -1) {
                        return true;
                    }
                    window.utag.loader.initdata_old = window.utag.loader.initdata;
                    window.utag.loader.initdata = newUtagLoaderInitdata;
                    window.utag.handler.trigger_old = window.utag.handler.trigger;
                    window.utag.handler.trigger = newUtagHandlerTrigger;
                    window.utag.handler.RE_old = window.utag.handler.RE;
                    window.utag.handler.RE = newUtagHandlerRE;
                    logger("Overrode utag functions!");
                    if (window.utag.handler.trigger.toString().indexOf("tealiumCmpIntegration") !== -1) {
                        return true;
                    }
                    return false;
                }

                function getNewConsents(implicit, explicit) {
                    implicit = implicit || [];
                    explicit = explicit || [];
                    var changes = [];
                    for (var i = 0; i < explicit.length; i++) {
                        if (implicit.indexOf(explicit[i]) === -1) {
                            changes.push(explicit[i]);
                        }
                    }
                    return changes;
                }

                function allPurposesHaveConsent(consentedServices, assignedPurposesString) {
                    if (!consentedServices || !assignedPurposesString || typeof assignedPurposesString !== 'string') return false;
                    var splitPurposeIds = assignedPurposesString.split(',');
                    for (var i = 0; i < splitPurposeIds.length; i++) {
                        if (consentedServices.indexOf(splitPurposeIds[i]) === -1) return false;
                    }
                    return true;
                }

                function allPurposesHaveBeenPreviouslyProcessed(alreadyProcessedGroups, assignedPurposesString) {
                    if (!alreadyProcessedGroups || !assignedPurposesString || typeof assignedPurposesString !== 'string') return true;
                    var splitPurposeIds = assignedPurposesString.split(',');
                    for (var i = 0; i < splitPurposeIds.length; i++) {
                        if (alreadyProcessedGroups.indexOf(splitPurposeIds[i]) === -1) return false;
                    }
                    return true;
                }

                function blockTagsBasedOnConsent(tagBasedMap, configObject, consentedServices, alreadyProcessedGroups, notProcessedGroups, refiringAllowed) {
                    if (Array.isArray(consentedServices) !== true) {
                        consentedServices = [];
                    }
                    tagBasedMap = tagBasedMap || {};
                    var utagFunctionsHaveBeenOverridden = window.utag.handler.trigger.toString().indexOf("tealiumCmpIntegration") !== -1;
                    if (utagFunctionsHaveBeenOverridden !== true) {
                        window.utag.handler.trigger = function() {
                            if (messageNotLoggedYet(8)) {
                                logger("Tags have been disabled because the required utag.loader edit hasn't been done successfully and the tealiumCmpIntegration is active.");
                            }
                        };
                        consentedServices = [];
                    }
                    if (!window.tealiumCmpIntegration.bundledTags) {
                        var cfg = window.utag.loader.cfg;
                        var tags = Object.keys(cfg);
                        window.tealiumCmpIntegration.bundledTags = tags.filter(function(tag) {
                            return cfg[tag].load === 4
                        });
                    }
                    var deactivatedTags = [];
                    alreadyProcessedGroups = alreadyProcessedGroups || [];
                    var tiqIsAllowed = tiqGroupName && consentedServices.indexOf(tiqGroupName) !== -1;
                    var allTagUids = Object.keys(configObject);
                    var assignedPurposeIds;
                    var isAllowed;
                    for (var i = 0; i < allTagUids.length; i++) {
                        isAllowed = false;
                        assignedPurposeIds = tagBasedMap[allTagUids[i]] || [];
                        if (assignedPurposeIds) {
                            isAllowed = tiqIsAllowed && allPurposesHaveConsent(consentedServices, assignedPurposeIds) && (!allPurposesHaveBeenPreviouslyProcessed(alreadyProcessedGroups, assignedPurposeIds) || (notProcessedGroups.length > 0 && refiringAllowed.indexOf(Number(allTagUids[i])) !== -1));
                        }
                        if (isAllowed === true) {
                            configObject[allTagUids[i]].consent = 1;
                        } else {
                            configObject[allTagUids[i]].load = 0;
                            configObject[allTagUids[i]].send = 0;
                            configObject[allTagUids[i]].consent = 0;
                            deactivatedTags.push(allTagUids[i]);
                        }
                    }
                    if (messageNotLoggedYet(9)) {
                        logger("Blocked tags: " +
                            JSON.stringify(deactivatedTags, null, 2) +
                            (tiqIsAllowed ? "" : "\n\nAll tags blocked because Tealium iQ isn't allowed to fire."));
                    }
                    return configObject;
                }

                function newUtagHandlerRE(a, b, c) {
                    if (c == "alr") {
                        var tagBasedMap = generateTagBasedMap();
                        var currentlyAllowedVendors = getCurrentConsentDecision();
                        var alreadyProcessed = b[nameOfImplicitQueueMarker] === 1 ? window.tealiumCmpIntegration.implicitServices : [];
                        var notProcessed = getNewConsents(alreadyProcessed, currentlyAllowedVendors);
                        b[nameOfFullGroupArray] = currentlyAllowedVendors;
                        b[nameOfConsentTypeString] = currentlyAllowedVendors && currentlyAllowedVendors.type;
                        b[nameOfUnprocessedGroupArray] = notProcessed;
                        b[nameOfProcessedGroupArray] = alreadyProcessed;
                        logger("Called block logic:\n\nAllowed: " +
                            JSON.stringify(currentlyAllowedVendors, null, 2) +
                            "\n\nAlready processed: " +
                            (alreadyProcessed ? JSON.stringify(alreadyProcessed, null, 2) : "(none)"));
                        logger("Map:\n\n" +
                            JSON.stringify(map, null, 2) +
                            "\n\nActive CMP Lookup Key: " +
                            cmpFetchCurrentLookupKey() +
                            "\n\nMap has entry for current settingsId: " +
                            (typeof map[cmpFetchCurrentLookupKey()] === "object" ? "true" : "false") +
                            "\n\nTag-based map for the active key: " +
                            JSON.stringify(tagBasedMap, null, 2) +
                            "\n\nTags configured to refire: " +
                            JSON.stringify(refiringAllowed.map(tag => String(tag)), null, 2));
                        logger("Consent confirmed: " +
                            currentlyAllowedVendors.type +
                            " : " +
                            JSON.stringify(currentlyAllowedVendors, null, 2));
                        var newCfg = blockTagsBasedOnConsent(tagBasedMap, window.utag.loader.cfg, currentlyAllowedVendors, alreadyProcessed, notProcessed, refiringAllowed);
                        window.utag.loader.cfg = newCfg;
                    }
                    var r = window.utag.handler.RE_old(a, b, c);
                    return r;
                }

                function newUtagLoaderInitdata() {
                    window.utag.loader.initdata_old();
                    if (!window.tealiumCmpIntegration.isNoviewSet && !window.tealiumCmpIntegration.alreadyFiredInitialViewEvent) {
                        var consentedServices = getCurrentConsentDecision();
                        if (consentedServices.type === "missing-well-formed-response") {
                            return;
                        }
                        window.tealiumCmpIntegration.alreadyFiredInitialViewEvent = true;
                        if (consentedServices.type === "implicit") {
                            window.tealiumCmpIntegration.implicitServices = consentedServices;
                            var viewEvent = {
                                event: "view",
                                data: window.utag.handler.C(window.utag.data),
                            };
                            viewEvent.data[nameOfEventIdString] = storeOriginalEvent(viewEvent);
                            queueEventWithoutFiringImplicitServices(viewEvent);
                        }
                    }
                }

                function generateTagBasedMap() {
                    var tagBasedMap = getTagBasedMap(map);
                    window.tealiumCmpIntegration.tagBasedMap = tagBasedMap;
                    return tagBasedMap;
                }

                function newUtagHandlerTrigger(a, b, c) {
                    var isPureConsentEvent = a === nameOfConsentPollingEvent && !b && !c;
                    var isNoviewSet = window.tealiumCmpIntegration.isNoviewSet || true;
                    var consentedServices = getCurrentConsentDecision();
                    var consentType = (consentedServices && consentedServices.type) || "none";
                    var isCmpReady = consentType === "implicit" || consentType === "explicit";
                    var isTealiumReady = window.tealiumCmpIntegration.isTiqReady || (window.utag && window.utag.handler && window.utag.handler.iflag === 1) || (window.utag && window.utag.PINITCalled === true);
                    if (isTealiumReady) {
                        window.tealiumCmpIntegration.isTiqReady = true;
                    }
                    if (!isPureConsentEvent) {
                        logger("utag.handler.trigger called with:\n\n" + JSON.stringify(arguments, null, 2));
                        b = b || {};
                        b[nameOfEventIdString] = b[nameOfEventIdString] || storeOriginalEvent(a, b, c);
                    }
                    if (!isCmpReady && !isTealiumReady) {
                        consentedServices.type = "tealium-and-cmp-loading";
                        logger("Waiting for CMP and Tealium to be ready, queueing early event.");
                        queueEarlyEvent(a, b, c);
                        return false;
                    } else if (!isCmpReady) {
                        consentedServices.type = "cmp-loading";
                        logger("CMP is still loading, queueing early event");
                        queueEarlyEvent(a, b, c);
                        return false;
                    } else if (!isTealiumReady) {
                        consentedServices.type = "tealium-still-loading";
                        logger("Tealium iQ is still loading, queueing early event");
                        queueEarlyEvent(a, b, c);
                        return false;
                    }
                    var hasTagUidArray = c && typeof c === "object" && c.uids && window.utag.ut.typeOf(c.uids) === "array";
                    var uidMap = generateTagBasedMap();
                    var allowedTagUids = [];
                    var blockedTagUids = [];
                    var assignedPurposeIds;
                    var tagUid;
                    var hasConsent;
                    if (hasTagUidArray) {
                        for (var i = 0; i < c.uids.length; i++) {
                            tagUid = c.uids[i];
                            assignedPurposeIds = uidMap[tagUid] || "(missing)";
                            hasConsent = utag.loader.cfg[tagUid] && utag.loader.cfg[tagUid].consent === 1;
                            if (hasConsent) {
                                allowedTagUids.push(tagUid);
                            } else {
                                blockedTagUids.push(tagUid);
                            }
                        }
                        c.originalUids = c.uids.slice();
                        c.uids = allowedTagUids.slice();
                        c.blockedTagUids = blockedTagUids.slice();
                        logger("Call included tagUid array:\n\n" +
                            JSON.stringify(c.originalUids) +
                            "\n\nwhich was replaced by the filtered version (after consent and refire considerations):\n\n" +
                            JSON.stringify(c.uids));
                    }
                    if (consentType === "explicit") {
                        processEarlyQueue();
                        processImplicitQueue();
                        triggerTiqLoad();
                        if (!isPureConsentEvent) {
                            return window.utag.handler.trigger_old(a, b, c);
                        }
                    } else if (consentType === "implicit") {
                        processEarlyQueue();
                        triggerTiqLoad();
                        window.tealiumCmpIntegration.implicitServices = consentedServices;
                        if (!isNoviewSet && isTealiumReady && !window.tealiumCmpIntegration.alreadyFiredInitialViewEvent) {
                            window.tealiumCmpIntegration.alreadyFiredInitialViewEvent = true;
                            queueEventAndFireImplicitServices("view", window.utag.handler.C(window.utag.data));
                        }
                        if (!isPureConsentEvent) {
                            return queueEventAndFireImplicitServices(a, b, c);
                        }
                    } else if (consentType === "missing-map") {
                        logger("Something went wrong - all tags were blocked because no consent map was found for the active setting ID.");
                        return false;
                    } else if (consentType === "missing-tiq-consent") {
                        logger('Something went wrong - all tags were blocked because no consent was found for "' +
                            tiqGroupName +
                            '", configured Tealium iQ name.\n\nConsent found: ' +
                            JSON.stringify(consentedServices, null, 2));
                        return false;
                    } else {
                        logger("Something went wrong - all tags were blocked because the consent response was not understood.");
                        return false;
                    }
                }
                var dequeuingInterval = 150;

                function processEarlyQueue() {
                    if (window.tealiumCmpIntegration.alreadyProcessingEarlyQueue !== true) {
                        window.tealiumCmpIntegration.earlyEventQueue = window.tealiumCmpIntegration.earlyEventQueue || [];
                        var count = 1;
                        var trackCallGenerator = function(event) {
                            return function() {
                                window.utag.track(event);
                            };
                        };
                        while (window.tealiumCmpIntegration.earlyEventQueue.length > 0) {
                            window.tealiumCmpIntegration.alreadyProcessingEarlyQueue = true;
                            var queuedEvent = window.tealiumCmpIntegration.earlyEventQueue.shift();
                            queuedEvent.data[nameOfProcessedGroupArray] = [];
                            logger("Processing queued early event for currently consented tags: " + JSON.stringify(queuedEvent, null, 2));
                            var trackCall = trackCallGenerator(queuedEvent);
                            window.setTimeout(trackCall, count * dequeuingInterval);
                            count++;
                        }
                    }
                }

                function processImplicitQueue() {
                    var count = 1;
                    var trackCallGenerator = function(event) {
                        return function() {
                            var originalEventCopy = JSON.parse(JSON.stringify(window.tealiumCmpIntegration.originalEvents[event.data[nameOfEventIdString]]));
                            originalEventCopy.data[nameOfImplicitQueueMarker] = 1;
                            return window.utag.track(originalEventCopy);
                        };
                    };
                    var alreadyLogged = false;
                    if (window.tealiumCmpIntegration.alreadyProcessingImplicitQueue !== true) {
                        window.tealiumCmpIntegration.implicitEventQueue = window.tealiumCmpIntegration.implicitEventQueue || [];
                        while (window.tealiumCmpIntegration.implicitEventQueue.length > 0) {
                            if (!alreadyLogged) {
                                alreadyLogged = true;
                                logger("Explicit consent tracking request received - processing past implicitly tracked events (" +
                                    window.tealiumCmpIntegration.implicitEventQueue.length +
                                    ") for any new explicit tags.");
                            }
                            window.tealiumCmpIntegration.alreadyProcessingImplicitQueue = true;
                            var queuedEvent = window.tealiumCmpIntegration.implicitEventQueue.shift();
                            logger("Triggering event for explicitly-consented tags: " + JSON.stringify(queuedEvent));
                            var trackCall = trackCallGenerator(queuedEvent);
                            window.setTimeout(trackCall, count * dequeuingInterval);
                            count++;
                        }
                    }
                }

                function storeOriginalEvent(a, b, c) {
                    a = a || {};
                    if (typeof b === "object") {
                        b = JSON.parse(JSON.stringify(b));
                    }
                    if (typeof a === "string") {
                        a = {
                            event: a,
                            data: b || {},
                            cfg: c
                        };
                    }
                    var event_id = String(Date.now()) + String(Math.round(Date.now() * Math.random() * 10000));
                    a.data[nameOfEventIdString] = event_id;
                    window.tealiumCmpIntegration.originalEvents = window.tealiumCmpIntegration.originalEvents || {};
                    window.tealiumCmpIntegration.originalEvents[event_id] = a;
                    logger("Stored original event " + event_id + "!");
                    return event_id;
                }

                function queueEarlyEvent(a, b, c) {
                    a = a || {};
                    if (typeof b === "object") {
                        b = JSON.parse(JSON.stringify(b));
                    }
                    if (typeof a === "string") {
                        a = {
                            event: a,
                            data: b || {},
                            cfg: c
                        };
                    }
                    a.data[nameOfEventIdString] = a.data[nameOfEventIdString] || storeOriginalEvent(a, b, c);
                    window.tealiumCmpIntegration.earlyEventQueue = window.tealiumCmpIntegration.earlyEventQueue || [];
                    window.tealiumCmpIntegration.earlyEventQueue.push(a);
                    logger("Queued early event!");
                }

                function queueEventWithoutFiringImplicitServices(a, b, c) {
                    a = a || {};
                    if (typeof b === "object") {
                        b = JSON.parse(JSON.stringify(b));
                    }
                    if (typeof a === "string") {
                        a = {
                            event: a,
                            data: b || {},
                            cfg: c
                        };
                    }
                    a.data[nameOfEventIdString] = a.data[nameOfEventIdString] || storeOriginalEvent(a, b, c);
                    var newUids;
                    if (a && a.cfg && window.utag.ut.typeOf(a.cfg.uids) === "array") {
                        newUids = a.cfg.blockedTagUids.slice();
                        for (var i = 0; i < refiringAllowed.length; i++) {
                            if (a.cfg.originalUids && a.cfg.originalUids.indexOf(refiringAllowed[i]) !== -1 && newUids.indexOf(refiringAllowed[i]) === -1 && (b[nameOfUnprocessedGroupArray] && b[nameOfUnprocessedGroupArray].length > 0)) {
                                newUids.push(refiringAllowed[i]);
                            }
                        }
                        a.cfg.uids = newUids;
                    }
                    delete a.data[nameOfProcessedGroupArray];
                    delete a.data[nameOfFullGroupArray];
                    delete a.data[nameOfUnprocessedGroupArray];
                    window.tealiumCmpIntegration.implicitEventQueue = window.tealiumCmpIntegration.implicitEventQueue || [];
                    if (window.tealiumCmpIntegration.cmpCheckIfOptInModel()) {
                        window.tealiumCmpIntegration.implicitEventQueue.push(a);
                    }
                }

                function queueEventAndFireImplicitServices(a, b, c) {
                    window.utag.handler.trigger_old(a, b, c);
                    logger("Implicit consent tracking request fired (or queued, if utag hasn't loaded).");
                    return queueEventWithoutFiringImplicitServices(a, b, c);
                }

                function getTagBasedMap(map) {
                    if (typeof map !== "object") return {};
                    var settingsId = cmpFetchCurrentLookupKey() || "";
                    if (typeof settingsId !== "string" || settingsId === "") return {};
                    var settingSpecificMap = map[settingsId] || {};
                    var purposeIds = Object.keys(settingSpecificMap);
                    var uidMap = {};
                    for (var i = 0; i < purposeIds.length; i++) {
                        for (var j = 0; j < settingSpecificMap[purposeIds[i]].length; j++) {
                            uidMap[settingSpecificMap[purposeIds[i]][j]] = uidMap[settingSpecificMap[purposeIds[i]][j]] || []
                            uidMap[settingSpecificMap[purposeIds[i]][j]].push(purposeIds[i]);
                        }
                    }
                    Object.keys(uidMap).forEach((tag) => {
                        uidMap[tag] = uidMap[tag].join(',')
                    })
                    return uidMap;
                }

                function recheckForCmpAndConsent() {
                    var newConsentResponse = cmpFetchCurrentConsentDecision();
                    window.tealiumCmpIntegration.alreadyPolling = false;
                    reactToCmpResponse(newConsentResponse);
                }

                function getCurrentConsentDecision() {
                    var freshConsent = cmpFetchCurrentConsentDecision();
                    return buildConsentDecisionFromRawCmpOutput(freshConsent);
                }

                function logger(message, showOutsideDebugMode) {
                    if (typeof tealiumEnvironment === "undefined" || tealiumEnvironment === "prod") {
                        showOutsideDebugMode = false;
                    }
                    if (showOutsideDebugMode || tiqInDebugMode) {
                        message = "\n" + message + "\n";
                        var formattedArr = [];
                        formattedArr.push("****************");
                        var messageArr = message.split("\n");
                        messageArr.forEach(function(messageLine) {
                            formattedArr.push("*  " + messageLine);
                        });
                        formattedArr.push("****************");
                        var outputString = formattedArr.join("\n");
                        console.log(outputString);
                    }
                }

                function stopTiq() {
                    window.utag_cfg_ovrd = window.utag_cfg_ovrd || {};
                    window.utag_cfg_ovrd.noload = true;
                }

                function triggerTiqLoad() {
                    if (!(window.utag && window.utag.loader && window.utag.loader.PINIT)) {
                        return true;
                    }
                    if (!window.utag.handler || !window.utag.handler.iflag) {
                        window.utag.cfg.noload = false;
                        if (!window.utag.PINITCalled) {
                            window.utag.loader.rd_flag = undefined;
                            window.utag.loader.PINIT();
                            for (var i in window.utag.loader.GV(window.utag.loader.cfg)) {
                                var tag = window.utag.loader.cfg[i];
                                if (tag.load === 4 && tag.wait === 0) {
                                    window.utag.loader.LOAD(i);
                                }
                            }
                            window.utag.PINITCalled = true;
                        }
                        return true;
                    }
                    return false;
                }

                function triggerOrQueue() {
                    var successfullyTriggeredLoadIfNeeded = triggerTiqLoad();
                    if (!successfullyTriggeredLoadIfNeeded) {
                        return window.utag.handler.trigger(nameOfConsentPollingEvent);
                    }
                }

                function getTealiumEnvironment() {
                    var allScripts = document.getElementsByTagName("script");
                    var re = /\/([^/]*)\/utag\.js(\?.*)*$/;
                    for (var i = 0; i < allScripts.length; i++) {
                        var result = re.exec(allScripts[i].src);
                        if (result && result[1]) {
                            return result[1];
                        }
                    }
                    return "prod";
                }
                if (window.utag_cfg_ovrd && window.utag_cfg_ovrd.noload === true) return false;
                logger("TiQ CMP integration active: " +
                    window.tealiumCmpIntegration.cmpName +
                    (tiqInDebugMode ? "\n\nDEBUGGING TIP: Use /SENDING|\\*\\*\\*\\*/ in the browser console as the 'filter' to show only CMP and tag send notifications." : "\n\nActivate TiQ Debug Mode for more details: https://docs.tealium.com/platforms/javascript/debugging/"));
                overrideUtagFunctions();
                var data = window.utag.loader.GV(window.utag_data);
                window.utag.cl = {
                    "_all_": 1
                };
                window.utag.loader.rd_flag = 1;
                window.utag.loader.RD(data);
                window.utag.loader.loadrules(data);
                window.utag.cl = undefined;
                var cmpResponse = cmpFetchCurrentConsentDecision();
                reactToCmpResponse(cmpResponse);
            })(window);
        }
    } catch (e) {
        utag.DB(e)
    }
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
                try {
                    if (utag.data['dom.pathname'].toString().toLowerCase() == '/services-near-you/parcelforce-depots'.toLowerCase() || utag.data['dom.pathname'].toString().toLowerCase() == '/services-near-you/parcel-postboxes'.toLowerCase() || utag.data['dom.pathname'].toString().toLowerCase() == '/services-near-you/parcel-lockers'.toLowerCase()) {
                        var extensionName = 'Extension UID: 907, \'Content modification - FRML - beta banner\'';
                        utag.DB(extensionName);
                        let betaBannerIidMap = {
                            '/services-near-you/parcelforce-depots': 'SNY_PFWDEPOTS_BANNER_FRML',
                            '/services-near-you/parcel-postboxes': 'SNY_PPB_BANNER_FRML',
                            '/services-near-you/parcel-lockers': 'SNY_PL_BANNER_FRML',
                        };
                        const betaBannerHtml = "<div id=\"paragraph-24252\" class=\"paragraph paragraph-cta-strip-wrapper paragraph--type--cta-strip paragraph--view-mode--default\">  <div class=\"container container-width-fixed\">    <div class=\"ctastrip-wrapper   ctastrip-top-padding ctastrip-bottom-padding\">      <div id=\"paragraph-24252\" class=\"paragraph paragraph-cta-strip-wrapper paragraph--type--cta-strip paragraph--view-mode--default dark-mode-royal-mail-red row cta-has-image no-white-link\">        <div class=\"cta-strip-img\">          <div class=\"field-tabbed-ctm-image field field--name-field-tabbed-ctm-image field--type-entity-reference field--label-hidden field__item\">            <article>              <div class=\"name field field--name-name field--type-string field--label-above\">                <div class=\"field__label\">Name</div>                <div class=\"field__item\">frame_5333.png</div>              </div>              <div class=\"langcode field field--name-langcode field--type-language field--label-above\">                <div class=\"field__label\">Language</div>                <div class=\"field__item\">Not applicable</div>              </div>              <div class=\"field-media-image field field--name-field-media-image field--type-image field--label-visually_hidden\">                <div class=\"field__label visually-hidden\">Single Upload</div>                <div class=\"field__item\"> <a href=\"/find-locations/?IID=SNY_PFWDEPOTS_BANNER_FRML\"><img src=\"/sites/royalmail.com/files/2026-03/frame_5333.png\" width=\"258\" height=\"158\" loading=\"lazy\" typeof=\"foaf:Image\">                  </a>                </div>              </div>            </article>          </div>        </div>        <div class=\"cta-strip-text no-white-link\">          <div class=\"field-v2-process-title field field--name-field-v2-process-title field--type-text-long field--label-hidden field__item\">            <h2><span style=\"font-family:PF DinText Std Bold;\"><span style=\"color:#ffffff;\">Try our                  new</span> <span style=\"color:#fdda24;\">Royal Mail Locations tool</span></span>            </h2>            <p><span style=\"color:#ffffff;\">Be the first to try our new and improved 'Find Royal                Mail Locations' tool to find your nearest Royal Mail pick-up or drop-off                point.</span></p>          </div>        </div>        <div class=\"cta-strip-buttons\">          <div class=\"cta-button-red no-white-link\">            <a class=\"cta-primary-button cta-tertiary dark-mode-primary-button primary-button-dark-mode-royal-mail-red\" href=\"/find-locations/?IID=" + betaBannerIidMap[utag.data['dom.pathname'].toString().toLowerCase()] + "\" title=\"Search now\" id=\"paragraph-24252\" target=\"\">              <span class=\"cta-text\">Search now</span>            </a>          </div>        </div>      </div>    </div>  </div></div>";
                        const betaBannerVisbilityEl = document.createElement('style');
                        betaBannerVisbilityEl.id = 'betaBannerVisbility';
                        betaBannerVisbilityEl.textContent = ".findLocationsBetaBanner {display: none;}@media (min-width: 1200px) {  .findLocationsBetaBanner {display: block;} .findLocationsBetaBanner .paragraph-cta-strip-wrapper .ctastrip-wrapper.ctastrip-bottom-padding {padding-top: 0;}}";
                        document.head.appendChild(betaBannerVisbilityEl);
                        const findLocationsBetaBanner = document.createElement('div');
                        findLocationsBetaBanner.id = 'findLocationsBetaBanner';
                        findLocationsBetaBanner.classList.add('field__item', 'findLocationsBetaBanner');
                        findLocationsBetaBanner.innerHTML = betaBannerHtml;
                        const addBannerAfterThis = 'article .field__item:nth-child(2)';
                        document.querySelector(addBannerAfterThis).after(findLocationsBetaBanner);
                    }
                } catch (e) {
                    utag.DB(e)
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                try {
                    if (1) {
                        var extensionName = 'Extension UID: 886, \'Content modification - Trust Arc placeholder divs\'';
                        if (window.location.hostname == 'obaemergency.royalmail.com' || sessionStorage.getItem('taInject') == 'true') {
                            addTrustArcPlaceholdersDivs = () => {
                                var taBannerContainer = document.createElement('div');
                                taBannerContainer.id = 'taBannerContainer';
                                taBannerContainer.innerHTML = '<div id="consent_blackbar"></div>';
                                document.body.appendChild(taBannerContainer);
                                var truste_accessible_linkContainer = document.createElement('style');
                                truste_accessible_linkContainer.id = 'truste_accessible_linkContainer';
                                truste_accessible_linkContainer.innerText = '#teconsent .truste_accessible_link{font-family: inherit; font-weight: inherit; color: lab(85.1236% -.612259 -3.7138); text-decoration: none;} #teconsent .truste_accessible_link:hover{color: #fff;}';
                                document.head.appendChild(truste_accessible_linkContainer);
                                var taPrefsContainer = document.createElement('li');
                                taPrefsContainer.id = 'teconsent';
                                var footerLinks = document.querySelectorAll('[data-testid="footer-links-list"] li');
                                for (var footerLinksIndex = 0; footerLinksIndex < footerLinks.length; footerLinksIndex++) {
                                    if (/privacy|cookie/i.test(footerLinks[footerLinksIndex].innerText)) {
                                        footerLinks[footerLinksIndex].after(taPrefsContainer);
                                        break;
                                    }
                                }
                            };
                            addTrustArcPlaceholdersDivs();
                        }
                    }
                } catch (e) {
                    utag.DB(e)
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                try {
                    if (1) {
                        try {
                            var results = document.querySelector('.search-results-content .search-results-items');
                            if (results) {
                                results.addEventListener('click', function(e) {
                                    var t = e.target;
                                    if (t.tagName === 'A') {
                                        e.preventDefault();
                                        var url = t.getAttribute('href');
                                        url = url + (url.indexOf('?') > -1 ? '&' : '?') + 'iid=RM_ONSITE_SEARCH';
                                        window.location.href = url;
                                    }
                                })
                            }
                        } catch (error) {}
                    }
                } catch (e) {
                    utag.DB(e)
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                try {
                    if (utag.data['pageName'] == 'RM Shop >Checkout >Address') {
                        setTimeout(function() {
                            const button = document.querySelector('.action.primary.continue-login');
                            if (button) {
                                button.addEventListener('click', function() {
                                    utag.DB("Continue login action triggered!");
                                    const emailInput = document.getElementById("customer-email");
                                    if (emailInput) {
                                        utag.link({
                                            "tealium_event": "email_input",
                                            "as_email_consolidated": emailInput.value
                                        });
                                    } else {
                                        utag.DB("Email input field not found!");
                                    }
                                });
                            } else {
                                utag.DB("Button with class 'action primary continue-login' not found!");
                            }
                        }, 4000);
                    }
                } catch (e) {
                    utag.DB(e)
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                try {
                    if (utag.data['dom.pathname'] == '/downloadapp') {
                        if (window ? .rmg_consent ? .consent_performance == 1 || utag.gdpr.getSelectedCategories().indexOf('analytics') > -1) {
                            var ios = jQuery('a[href="https://apps.apple.com/gb/app/royal-mail/id1435168829"]')[0];
                            var android = jQuery('a[href="https://play.google.com/store/apps/details?id=com.royalmail.app.droid"]')[0];
                        }
                        if (ios) {
                            ios.href = "https://5c7660eeb56360dc10eb2c43.c00.adobe.com/?a.deeplink.id=5cefdf6a405312483838cc66&ctxa.launch.campaign.trackingcode=zh1hm1oq&ctxDevice=Desktop&ctxa.launch.campaign.source=Web&ctxa.launch.campaign.medium=RMmain&ctxa.launch.campaign.content=Download+Page+IOS+link"
                        }
                        if (android) {
                            android.href = "https://5c7660eeb56360dc10eb2c43.c00.adobe.com/?a.deeplink.id=5cefe142405312483838cc79&ctxa.launch.campaign.trackingcode=69khed69&ctxDevice=Desktop&ctxa.launch.campaign.source=Web&ctxa.launch.campaign.medium=RMmain&ctxa.launch.campaign.content=Download+Page+Android+link"
                        }
                    }
                } catch (e) {
                    utag.DB(e)
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                try {
                    if ((utag.data['qp.cid'].toString().indexOf('_DD_') > -1 && utag.data['dom.pathname'].toString().indexOf('/business-parcel-delivery') > -1) || (utag.data['qp.CID'].toString().indexOf('_DD_') > -1 && utag.data['dom.pathname'].toString().indexOf('/business-parcel-delivery') > -1)) {
                        if (typeof window.jQuery === "function") {
                            jQuery("#rmCampaign h2 strong, a.tel>strong").text("0800 328 2298");
                        }
                    }
                } catch (e) {
                    utag.DB(e)
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                try {
                    if ((utag.data['qp.cid'].toString().indexOf('_SM_') > -1 && utag.data['dom.pathname'].toString().indexOf('/business-parcel-delivery') > -1) || (utag.data['qp.CID'].toString().indexOf('_SM_') > -1 && utag.data['dom.pathname'].toString().indexOf('/business-parcel-delivery') > -1)) {
                        if (typeof window.jQuery === "function") {
                            jQuery("#rmCampaign h2 strong, a.tel>strong").text("0800 996 1657");
                        }
                    }
                } catch (e) {
                    utag.DB(e)
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                try {
                    if ((utag.cond[556])) {
                        (function(runOnce, trackingEvent, delay) {
                            function tealiumHashChange(event) {
                                var timeout, data = {
                                    "tealium_event": "hash_change",
                                    "iq_event_id": "hash_change_events_906",
                                };
                                if (delay !== null) {
                                    timeout = setTimeout(function() {
                                        utag.track(trackingEvent, data);
                                        clearTimeout(timeout);
                                    }, delay);
                                } else {
                                    utag.track(trackingEvent, data);
                                }
                                if (runOnce) {
                                    window.removeEventListener("hashchange", tealiumHashChange);
                                }
                            }
                            window.addEventListener("hashchange", tealiumHashChange);
                        })(false, "link", 100);
                    }
                } catch (e) {
                    utag.DB(e)
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (jQuery("form").length > 0) {
                    jQuery("form").bind("focusout.tealium", "input", function(e) {
                        if (jQuery(e.target).closest('form').attr('id') === "user-register") {
                            var label = (jQuery(e.target).prev().text().match(/[A-z\s]+/) || [])[0] || "";
                            window.utag.events = window.utag.events || {};
                            window.utag.events.formTracking = window.utag.events.formTracking || {};
                            window.utag.events.formTracking.lastInput = label;
                        }
                    })
                    jQuery(window).bind("unload.tealium", function() {
                        if (window.utag.events && window.utag.events.formTracking) {
                            var success = utag.link(window.utag.events.formTracking);
                            console.log(success);
                        } else {
                            utag.DB("Form Tracking: utag.events.formTracking does not exist");
                        }
                    })
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                jQuery('#cp-search').bind('capturePlusCallback', function(response) {
                    var postcode = jQuery('div#tealiumdata .postcode').text();
                    var searches = jQuery('div#tealiumdata .remaining-searches').text();
                    var pageName = />Result$/.test(utag.data.pageName) ? utag.data.pageName : '' + utag.data.pageName + ' >Result';
                    utag.view({
                        'pageName': pageName,
                        'pageApplicationStep': 'Result',
                        'productAttributes': '' + utag.data.pageApplicationName + '|' + postcode + '|' + searches,
                        'pageApplicationSearch': 'PCAF'
                    })
                });
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
                if (utag.data['consent_advertising'] == 1) {
                    utag.DB('in ext310 "AS : Username grabber"');
                    var userNameGrabber = function() {
                        var username_grabbed = false;
                        var username = jQuery('[class="login left"]').find('span')[0];
                        if (typeof username !== "undefined") {
                            username = username.innerHTML.replace(/\s+/g, " ");
                            if (username.indexOf('My Account - ') > -1) {
                                username = username.split('My Account - ')[1];
                            }
                            if (username !== "") {
                                username = username.trim();
                            }
                            if (username && username.indexOf('Log in or register') > -1) {
                                username = "";
                            }
                            if (typeof username !== "undefined" && username !== "") {
                                var username_grabbed = true
                            }
                        }
                        if (utag.data['va.properties.visitor_id'] && username_grabbed === true) {
                            if (!utag.data['va.properties.5654']) {
                                utag.track('audiencestream', {
                                    as_event_name: 'grab user name',
                                    as_login_name: username
                                });
                            } else if (username !== utag.data['va.properties.5654']) {
                                utag.track('audiencestream', {
                                    as_event_name: 'grab user name',
                                    as_login_name: username
                                });
                            }
                        }
                    }
                    if (document.domain === "shop.royalmail.com" || document.domain === "stgfastmag.royalmail.com") {
                        userNameGrabber();
                    }
                    if (document.domain === "www.royalmail.com" || document.domain === "wwwqt.royalmail.com" || document.domain === "wwwqa.royalmail.com") {
                        setTimeout(function() {
                            userNameGrabber();
                        }, 2000);
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (utag.data['consent_advertising'] == 1) {
                    utag.DB('in ext179 "AS : Grab unconfirmed email (login forms)"');
                    if (typeof jQueryTealium !== "undefined") {
                        jQueryTealium(document.body).on('mousedown', 'input[id="edit-submit"]', function() {
                            var email_address = jQueryTealium('input[id="edit-name"]').val();
                            if (email_address && email_address.indexOf('@') > -1) {
                                utag.track('audiencestream', {
                                    as_event_name: 'grab email on login submit',
                                    as_email_address_unconfirmed: email_address
                                });
                                document.cookie = "userdatachanged=true; expires=Thu, 18 Dec 2050 12:00:00 UTC; path=/;domain=" + utag.cfg.domain;
                            }
                        });
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (utag.data['consent_advertising'] == 1) {
                    utag.DB('in ext181 "AS : Grab unconfirmed email (login widget)"');
                    setTimeout(function() {
                        try {
                            jQuery('[value="Login"]').mousedown(function() {
                                var email_address = jQuery('#edit-name').val();
                                if (email_address && email_address.indexOf('@') > -1) {
                                    utag.track('audiencestream', {
                                        as_event_name: 'login submit',
                                        as_email_address_unconfirmed: email_address
                                    });
                                    document.cookie = "userdatachanged=true; expires=Thu, 18 Dec 2050 12:00:00 UTC; path=/;domain=" + utag.cfg.domain;
                                }
                            });
                        } catch (err) {}
                    }, 1000);
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (utag.data['consent_advertising'] == 1) {
                    utag.DB('in ext180 "AS : Grab unconfirmed data (registration submit)"');

                    function capitalise(s) {
                        if (typeof s !== "undefined") {
                            s = s.toLowerCase();
                            return s && s[0].toUpperCase() + s.slice(1);
                        }
                    }
                    if (typeof jQueryTealium !== "undefined") {
                        jQueryTealium(document.body).on('mousedown', 'input[id="edit-next"],[id="edit-register"],[id="wt-btn"][class*="btn_primary_register"]', function() {
                            var business = false;
                            if (document.location.pathname === '/business/user/register') {
                                business = true;
                            }
                            var emailSelector = business ? 'input[id="edit-mail-email"]' : 'input[id="edit-mail"]';
                            var emailConfirmSelector = business ? 'input[id="edit-mail-email-confirm"]' : '#edit-confirm-mail';
                            var mPostSelector = business ? '#edit-marketing-gpost-channel' : '#edit-inform-by-post-royalmail';
                            var mPhoneSelector = business ? '#edit-marketing-gtelephone-channel' : '#edit-inform-by-telephone-royalmail';
                            var mEmailSelector = business ? '#edit-marketing-gemail-channel' : '#edit-inform-by-email-royalmail';
                            var mSMSSelector = business ? '#edit-marketing-gtext-and-other-channel' : '#edit-inform-by-other-royalmail';
                            var email_address = jQueryTealium(emailSelector).val();
                            var email_address_confirm = jQueryTealium(emailConfirmSelector).val();
                            var first_name = capitalise(jQueryTealium('#edit-first-name').val());
                            var last_name = capitalise(jQueryTealium('#edit-last-name').val());
                            var title_salutation = "";
                            if (business) {
                                title_salutation = capitalise(jQueryTealium("#edit-title option:selected").text());
                            } else {
                                title_salutation = capitalise(jQueryTealium('#edit-title-of-person').val());
                            }
                            var marketing_post = jQueryTealium(mPostSelector).prop('checked');
                            var marketing_phone = jQueryTealium(mPhoneSelector).prop('checked');
                            var marketing_email = jQueryTealium(mEmailSelector).prop('checked');
                            var marketing_sms = jQueryTealium(mSMSSelector).prop('checked');
                            if (marketing_post === true) {
                                marketing_post = "opt out";
                            } else if (marketing_post === false) {
                                marketing_post = "opt in";
                            } else {
                                marketing_post = "unknown";
                            }
                            if (marketing_phone === true) {
                                marketing_phone = "opt out";
                            } else if (marketing_phone === false) {
                                marketing_phone = "opt in";
                            } else {
                                marketing_phone = "unknown";
                            }
                            if (marketing_email === true) {
                                marketing_email = "opt out";
                            } else if (marketing_email === false) {
                                marketing_email = "opt in";
                            } else {
                                marketing_email = "unknown";
                            }
                            if (marketing_sms === true) {
                                marketing_sms = "opt out";
                            } else if (marketing_sms === false) {
                                marketing_sms = "opt in";
                            } else {
                                marketing_sms = "unknown";
                            }
                            if (email_address && email_address.indexOf('@') > -1 && email_address === email_address_confirm) {
                                var writeCookie = function(pkey, pvalue) {
                                    if (typeof pvalue != 'undefined' && pvalue != '') {
                                        document.cookie = pkey + "=" + pvalue + ";path=/;domain=" + utag.cfg.domain;
                                    }
                                };
                                writeCookie('as_email_address_unconfirmed', email_address);
                                writeCookie('as_marketing_post_unconfirmed', marketing_post);
                                writeCookie('as_marketing_phone_unconfirmed', marketing_phone);
                                writeCookie('as_marketing_email_unconfirmed', marketing_email);
                                writeCookie('as_marketing_sms_unconfirmed', marketing_sms);
                                writeCookie('as_first_name_unconfirmed', first_name);
                                writeCookie('as_last_name_unconfirmed', last_name);
                                writeCookie('as_title_unconfirmed', title_salutation);
                                utag.track('audiencestream', {
                                    as_event_name: 'registration submit',
                                    as_email_address_unconfirmed: email_address,
                                    as_marketing_post_unconfirmed: marketing_post,
                                    as_marketing_phone_unconfirmed: marketing_phone,
                                    as_marketing_email_unconfirmed: marketing_email,
                                    as_marketing_sms_unconfirmed: marketing_sms,
                                    as_first_name_unconfirmed: first_name,
                                    as_last_name_unconfirmed: last_name,
                                    as_title_unconfirmed: title_salutation
                                });
                                document.cookie = "userdatachanged=true; expires=Thu, 18 Dec 2050 12:00:00 UTC; path=/;domain=" + utag.cfg.domain;
                            }
                        });
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (utag.data['consent_advertising'] == 1) {
                    utag.DB('in ext185 "AS : Grab unconfirmed data (registration update)"');

                    function capitalise(s) {
                        if (typeof s !== "undefined") {
                            s = s.toLowerCase();
                            return s && s[0].toUpperCase() + s.slice(1);
                        }
                    }
                    if (typeof jQueryTealium !== "undefined") {
                        jQueryTealium(document.body).on('mousedown', 'input[id="edit-update"],[id="edit-save-details"],[id="edit-submit"]', function() {
                            var business = false;
                            if (/^\/business\/user\/\d+\/edit/i.test(document.location.pathname)) {
                                business = true;
                            }
                            var email_address = jQueryTealium('input[id="edit-mail"]').val();
                            var first_name = capitalise(jQueryTealium('#edit-first-name').val());
                            var last_name = capitalise(jQueryTealium('#edit-last-name').val());
                            var title_salutation = "",
                                newGDPRForm = false;
                            if (business) {
                                title_salutation = capitalise(jQueryTealium("#edit-title option:selected").text());
                                if (jQueryTealium('#edit-marketing-gpost-channel-0').length) {
                                    newGDPRForm = true;
                                }
                            } else {
                                title_salutation = capitalise(jQueryTealium('#edit-title-of-person').val());
                                if (jQueryTealium('#edit-inform-by-post-royalmail-0').length) {
                                    newGDPRForm = true;
                                }
                            }
                            var marketing_post, marketing_phone, marketing_email, marketing_sms;
                            var postSelector = business ? '#edit-marketing-gpost-channel' : '#edit-inform-by-post-royalmail';
                            var phoneSelector = business ? '#edit-marketing-gtelephone-channel' : '#edit-inform-by-telephone-royalmail';
                            var emailSelector = business ? '#edit-marketing-gemail-channel' : '#edit-inform-by-email-royalmail';
                            var smsSelector = business ? '#edit-marketing-gtext-channel' : '#edit-inform-by-other-royalmail';
                            if (!newGDPRForm) {
                                marketing_post = jQueryTealium(postSelector).prop('checked');
                                marketing_phone = jQueryTealium(phoneSelector).prop('checked');
                                marketing_email = jQueryTealium(emailSelector).prop('checked');
                                marketing_sms = jQueryTealium(smsSelector).prop('checked');
                            } else {
                                var yesOrNoOrNone = function(selector) {
                                    var yesSelected = jQueryTealium(selector + '-0').prop('checked');
                                    var noSelected = jQueryTealium(selector + '-1').prop('checked');
                                    if (yesSelected) return true;
                                    if (noSelected) return false;
                                    return undefined;
                                };
                                marketing_post = yesOrNoOrNone(postSelector);
                                marketing_phone = yesOrNoOrNone(phoneSelector);
                                marketing_email = yesOrNoOrNone(emailSelector);
                                marketing_sms = yesOrNoOrNone(smsSelector);
                            }
                            if (marketing_post === true) {
                                marketing_post = "opt out";
                            } else if (marketing_post === false) {
                                marketing_post = "opt in";
                            } else {
                                marketing_post = "unknown";
                            }
                            if (marketing_phone === true) {
                                marketing_phone = "opt out";
                            } else if (marketing_phone === false) {
                                marketing_phone = "opt in";
                            } else {
                                marketing_phone = "unknown";
                            }
                            if (marketing_email === true) {
                                marketing_email = "opt out";
                            } else if (marketing_email === false) {
                                marketing_email = "opt in";
                            } else {
                                marketing_email = "unknown";
                            }
                            if (marketing_sms === true) {
                                marketing_sms = "opt out";
                            } else if (marketing_sms === false) {
                                marketing_sms = "opt in";
                            } else {
                                marketing_sms = "unknown";
                            }
                            var o = {
                                as_event_name: 'registration submit'
                            };
                            if (email_address && email_address.indexOf('@') > -1) o.as_email_address_unconfirmed = email_address;
                            if (marketing_post) o.as_marketing_post_unconfirmed = marketing_post;
                            if (marketing_phone) o.as_marketing_phone_unconfirmed = marketing_phone;
                            if (marketing_email) o.as_marketing_email_unconfirmed = marketing_email;
                            if (marketing_sms) o.as_marketing_sms_unconfirmed = marketing_sms;
                            if (first_name) o.as_first_name_unconfirmed = first_name;
                            if (last_name) o.as_last_name_unconfirmed = last_name;
                            if (title_salutation) o.as_title_unconfirmed = title_salutation;
                            utag.track('audiencestream', o);
                            document.cookie = "userdatachanged=true; expires=Thu, 18 Dec 2050 12:00:00 UTC; path=/;domain=" + utag.cfg.domain;
                        });
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (utag.data['consent_advertising'] == 1) {
                    utag.DB('in ext178 "AS : Grab user data once logged in"');
                    if (window.utag_data && utag_data.pageApplicationStep === "RML My Profile Password Confirmation") {
                        var grabUserData = false;
                    }
                    if (!utag.data['cp.as_email_address_unconfirmed']) {
                        var grabUserData = false;
                    }
                    if (typeof grabUserData !== "undefined" && grabUserData !== false || typeof grabUserData === "undefined") {
                        try {
                            var cookieChanger = function(cookieName, cookieValue, expiryDate) {
                                document.cookie = cookieName + "=" + cookieValue + "; expires=" + expiryDate + "; path=/;domain=" + utag.cfg.domain;
                            };
                            var logged_in = false;
                            if (utag.data.visitorGUID) {
                                logged_in = true;
                            }
                            if (logged_in === true) {
                                try {
                                    var login_name = jQuery('.rml-account-block-title').text().split('My Account')[1].split('-')[1].trim();
                                } catch (err) {}
                                try {
                                    if (typeof login_name === "undefined") {
                                        var login_name = jQuery('[class="login left"]').children().first().text().trim();
                                    }
                                } catch (err) {}
                                var email_address = utag.data['cp.as_email_address_unconfirmed'];
                                var first_name = utag.data['cp.as_first_name_unconfirmed'];
                                var last_name = utag.data['cp.as_last_name_unconfirmed'];
                                var title_salutation = utag.data['cp.as_title_unconfirmed'];
                                var marketing_post = utag.data['cp.as_marketing_post_unconfirmed'];
                                var marketing_phone = utag.data['cp.as_marketing_phone_unconfirmed'];
                                var marketing_email = utag.data['cp.as_marketing_email_unconfirmed'];
                                var marketing_sms = utag.data['cp.as_marketing_sms_unconfirmed'];
                                if (email_address && (!marketing_post || !first_name)) {
                                    utag.track('audiencestream', {
                                        as_event_name: 'grab login data',
                                        as_login_name: login_name,
                                        as_email_address: email_address,
                                        as_marketing_post: marketing_post,
                                        as_marketing_phone: marketing_phone,
                                        as_marketing_email: marketing_email,
                                        as_marketing_sms: marketing_sms
                                    });
                                    cookieChanger("userdatachanged", "false", "Thu, 18 Dec 2050 12:00:00 UTC");
                                    cookieChanger("as_email_address_unconfirmed", "false", "Thu, 18 Dec 2000 12:00:00 UTC");
                                    cookieChanger("as_first_name_unconfirmed", "false", "Thu, 18 Dec 2000 12:00:00 UTC");
                                    cookieChanger("as_last_name_unconfirmed", "false", "Thu, 18 Dec 2000 12:00:00 UTC");
                                    cookieChanger("as_title_unconfirmed", "false", "Thu, 18 Dec 2000 12:00:00 UTC");
                                    cookieChanger("as_marketing_post_unconfirmed", "false", "Thu, 18 Dec 2000 12:00:00 UTC");
                                    cookieChanger("as_marketing_phone_unconfirmed", "false", "Thu, 18 Dec 2000 12:00:00 UTC");
                                    cookieChanger("as_marketing_email_unconfirmed", "false", "Thu, 18 Dec 2000 12:00:00 UTC");
                                    cookieChanger("as_marketing_sms_unconfirmed", "false", "Thu, 18 Dec 2000 12:00:00 UTC");
                                } else
                                if (email_address && marketing_post && marketing_phone && marketing_email && marketing_sms) {
                                    utag.track('audiencestream', {
                                        as_event_name: 'grab login data',
                                        as_login_name: login_name,
                                        as_email_address: email_address,
                                        as_marketing_post: marketing_post,
                                        as_marketing_phone: marketing_phone,
                                        as_marketing_email: marketing_email,
                                        as_marketing_sms: marketing_sms,
                                        as_first_name: first_name,
                                        as_last_name: last_name,
                                        as_title: title_salutation
                                    });
                                    cookieChanger("userdatachanged", "false", "Thu, 18 Dec 2050 12:00:00 UTC");
                                    cookieChanger("as_email_address_unconfirmed", "false", "Thu, 18 Dec 2000 12:00:00 UTC");
                                    cookieChanger("as_first_name_unconfirmed", "false", "Thu, 18 Dec 2000 12:00:00 UTC");
                                    cookieChanger("as_last_name_unconfirmed", "false", "Thu, 18 Dec 2000 12:00:00 UTC");
                                    cookieChanger("as_title_unconfirmed", "false", "Thu, 18 Dec 2000 12:00:00 UTC");
                                    cookieChanger("as_marketing_post_unconfirmed", "false", "Thu, 18 Dec 2000 12:00:00 UTC");
                                    cookieChanger("as_marketing_phone_unconfirmed", "false", "Thu, 18 Dec 2000 12:00:00 UTC");
                                    cookieChanger("as_marketing_email_unconfirmed", "false", "Thu, 18 Dec 2000 12:00:00 UTC");
                                    cookieChanger("as_marketing_sms_unconfirmed", "false", "Thu, 18 Dec 2000 12:00:00 UTC");
                                }
                            } else {
                                cookieChanger("userdatachanged", "false", "Thu, 18 Dec 2050 12:00:00 UTC");
                            }
                        } catch (err) {}
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (utag.data['consent_advertising'] == 1) {
                    utag.DB('in ext194 "AS : Kill all user data cookies if not logged in"');
                    var cookieDelete = function(cookieName) {
                        document.cookie = cookieName + "=; expires=Thu, 18 Dec 2000 12:00:00 UTC; path=/;domain=" + utag.cfg.domain;
                        delete utag.data['cp.' + cookieName];
                    }
                    if ((!utag.data.visitorGUID && utag.data['dom.domain'] === "www.royalmail.com") || (!utag.data.visitorGUID && utag.data['dom.domain'] === "wwwqt.royalmail.com") || (!utag.data.visitorGUID && utag.data['dom.domain'] === "wwwqa.royalmail.com") || (!utag.data.visitorGUID && location.protocol !== "https:")) {
                        if (!utag.data.pageName || utag.data.pageName !== "RM BUS >Business >Registration >Company Details") {
                            cookieDelete("as_email_address_unconfirmed");
                            cookieDelete("as_marketing_post_unconfirmed");
                            cookieDelete("as_marketing_phone_unconfirmed");
                            cookieDelete("as_marketing_email_unconfirmed");
                            cookieDelete("as_marketing_sms_unconfirmed");
                            cookieDelete("as_last_name_unconfirmed");
                            cookieDelete("as_first_name_unconfirmed");
                            cookieDelete("as_title_unconfirmed");
                        }
                        cookieDelete("as_login_name");
                        cookieDelete("as_email_address");
                        cookieDelete("as_marketing_post");
                        cookieDelete("as_marketing_phone");
                        cookieDelete("as_marketing_email");
                        cookieDelete("as_marketing_sms");
                        cookieDelete("as_last_name");
                        cookieDelete("as_first_name");
                        cookieDelete("as_title");
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (utag.data['consent_advertising'] == 1) {
                    utag.DB('in ext280 "AS : 1 of 4 : Shop Abandon Basket (define function)"');
                    utag.basket_grabber_shop = function(as_flag) {
                        jQuery.ajax(document.location.protocol + '//shop.royalmail.com/page/home&layout=minicart_detail', {
                            type: 'GET',
                            success: function(basket_data) {
                                var urlShortener = function(varName, searchString) {
                                    var toType = function(obj) {
                                        return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
                                    }
                                    if (toType(searchString) === "array") {
                                        for (var i = 0; i < searchString.length; i++) {
                                            if (varName.indexOf(searchString[i]) > -1) {
                                                var tempString = varName.split(searchString[i]);
                                                var returnString = tempString[1];
                                            }
                                        }
                                    } else if (toType(searchString) === "string") {
                                        if (varName.indexOf(searchString) > -1) {
                                            var tempString = varName.split(searchString);
                                            var returnString = tempString[1];
                                        }
                                    }
                                    if (varName.indexOf('/') === 0) {
                                        returnString = varName.slice(1);
                                    }
                                    return returnString;
                                }
                                var undisplayed_line_item_calculator = function(lines) {
                                    var displayed_quantity = 0;
                                    for (var i = 1; i < lines + 1; i++) {
                                        var quantity = (data["basket_product_quantity_" + i]) ? parseFloat(data["basket_product_quantity_" + i]) : 0;
                                        displayed_quantity = displayed_quantity + quantity;
                                    }
                                    data["basket_email_undisplayed_items_" + lines] = data.basket_quantity - displayed_quantity;
                                }
                                var product_data = jQuery(basket_data).find('[id="minicart_products"]');
                                var basket_totals = jQuery(basket_data).find('[id="minicart_totals"]')
                                var data = {};
                                data.basket = {};
                                data.basket.total = jQuery(basket_totals).find('#updatemdTotal').text().replace(/[^0-9\.,]+/g, "");
                                data.basket_total = data.basket.total;
                                data.basket.items = [];
                                jQuery(product_data).children().each(function() {
                                    var basket_item = {}
                                    basket_item.product_id = jQuery(this).find('.prodref').text();
                                    basket_item.product_name = jQuery(this).find('[class="details"]').find('h2').find('a').text();
                                    basket_item.product_href = jQuery(this).find('[class="details"]').find('h2').find('a').attr('href');
                                    if (basket_item.product_href.indexOf('/') === 0) {
                                        basket_item.product_href = document.location.protocol + "//" + document.domain + basket_item.product_href;
                                    }
                                    basket_item.product_image_url = jQuery(this).find('.image').find('img').attr('src');
                                    if (basket_item.product_image_url.indexOf('/') === 0) {
                                        basket_item.product_image_url = document.location.protocol + "//" + document.domain + basket_item.product_image_url;
                                    }
                                    basket_item.product_quantity = jQuery(this).find('.eachqty').text();
                                    basket_item.product_price = jQuery(this).find('.details').find('.price').text();
                                    if (basket_item.product_price) {
                                        basket_item.product_price = basket_item.product_price.replace(/[^0-9\.,]+/g, "")
                                    };
                                    if (basket_item.product_price && basket_item.product_quantity) {
                                        var price = parseFloat(basket_item.product_price);
                                        var quantity = parseFloat(basket_item.product_quantity);
                                        basket_item.product_price_line_item = parseFloat(price * quantity).toFixed(2);
                                    }
                                    data.basket.items.push(basket_item);
                                });
                                for (var i = 0; i < data.basket.items.length; i++) {
                                    data['basket_product_id_' + [i + 1]] = data.basket.items[i].product_id;
                                    data['basket_product_name_' + [i + 1]] = data.basket.items[i].product_name;
                                    data['basket_product_href_' + [i + 1]] = data.basket.items[i].product_href;
                                    data['basket_product_image_url_' + [i + 1]] = data.basket.items[i].product_image_url;
                                    data['basket_product_quantity_' + [i + 1]] = data.basket.items[i].product_quantity;
                                    data['basket_product_price_' + [i + 1]] = data.basket.items[i].product_price;
                                    data['basket_product_price_line_item_' + [i + 1]] = data.basket.items[i].product_price_line_item;
                                };
                                data.as_flag = as_flag;
                                data.basket_array_product_id = [];
                                data.basket_array_product_name = [];
                                data.basket_array_product_href = [];
                                data.basket_array_product_image_url = [];
                                data.basket_array_product_quantity = [];
                                data.basket_array_product_price = [];
                                data.basket_array_product_price_line_item = [];
                                for (var i = 0; i < data.basket.items.length; i++) {
                                    data.basket_array_product_id.push(data.basket.items[i].product_id);
                                    data.basket_array_product_name.push(data.basket.items[i].product_name);
                                    data.basket_array_product_href.push(data.basket.items[i].product_href);
                                    data.basket_array_product_image_url.push(data.basket.items[i].product_image_url);
                                    data.basket_array_product_quantity.push(data.basket.items[i].product_quantity);
                                    data.basket_array_product_price.push(data.basket.items[i].product_price);
                                    data.basket_array_product_price_line_item.push(data.basket.items[i].product_price_line_item);
                                };
                                data.basket_quantity = 0;
                                for (var i in data.basket_array_product_quantity) {
                                    var quantity = parseFloat(data.basket_array_product_quantity[i]);
                                    data.basket_quantity += quantity;
                                }
                                data.as_shop_api_call = "true";
                                data.basket_line_items = data.basket_array_product_name.length;
                                undisplayed_line_item_calculator(1);
                                undisplayed_line_item_calculator(2);
                                undisplayed_line_item_calculator(3);
                                undisplayed_line_item_calculator(4);
                                undisplayed_line_item_calculator(5);
                                undisplayed_line_item_calculator(6);
                                undisplayed_line_item_calculator(7);
                                undisplayed_line_item_calculator(8);
                                undisplayed_line_item_calculator(9);
                                undisplayed_line_item_calculator(10);
                                if (data.basket_product_id_1) {
                                    data.basket_open = "true";
                                    utag.track('basket_data', data);
                                } else {
                                    utag.track('basket_data', {
                                        basket_open: "false"
                                    });
                                }
                            }
                        });
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if ((document.domain === "shop.royalmail.com" || document.domain === "stgfastmag.royalmail.com") && utag.data.pageApplicationName === "RM Shop" && utag.data.pageApplicationStep.match(/View Basket|Payment Details|Payment Details Error/)) {
                    utag.basket_grabber_shop("basket grab - page load");
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (jQuery('.itemtot').text() === "0" && utag.data.visitorGUID) {
                    utag.data.basket_open = "false";
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                var rate_yes = document.querySelector("#rn_AnswerFeedbackCustom_13_RatingYesButton,#rn_MobileAnswerFeedbackCustom_5_RatingYesButton");
                var rate_no = document.querySelector("#rn_AnswerFeedbackCustom_13_RatingNoButton,#rn_MobileAnswerFeedbackCustom_5_RatingNoButton");
                rate_yes.addEventListener("click", function() {
                    utag.link({
                        "helpRatingEvent": 'Yes'
                    })
                });
                rate_no.addEventListener("click", function() {
                    utag.link({
                        "helpRatingEvent": 'No'
                    })
                });
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (utag.data['consent_advertising'] == 1) {
                    utag.DB('in ext355 "AS : MSM : Grab Customer Details"');

                    function capitalise(s) {
                        if (typeof s !== "undefined") {
                            s = s.toLowerCase();
                            return s && s[0].toUpperCase() + s.slice(1);
                        }
                    }
                    var timeoutTries = 0;
                    var scrapeMailshotName = function() {
                        if (typeof jQuery !== "undefined") {
                            jQuery(document.body).on('mousedown', 'button:contains(OK)', function() {
                                var mailshot_name = jQuery('#campaignname').val();
                                if (mailshot_name && mailshot_name != 'Untitled mailshot') {
                                    utag.link({
                                        msm_mailshot_name: mailshot_name
                                    }, null, ["933"]);
                                }
                            });
                        } else {
                            timeoutTries++;
                            if (timeoutTries < 5) {
                                setTimeout(scrapeMailshotName, 1000);
                            }
                        }
                    }
                    if (document.location.href.indexOf('https://mailshotmaker.royalmail.com/campaigns/campaign-hub/?campaignId=') > -1) {
                        scrapeMailshotName();
                    }
                    var scrapeRegistrationOverlay = function() {
                        if (typeof jQuery !== "undefined") {
                            jQuery(document.body).on('mousedown', 'span[data-bind="click: showRegisterTwo"]', function() {
                                var first_name = capitalise(jQuery('#firstname').val());
                                var last_name = capitalise(jQuery('#lastname').val());
                                var title_salutation = capitalise(jQuery('#title').val());
                                utag.loader.SC("utag_main", {
                                    "_msm_name_f": first_name,
                                    "_msm_name_l": last_name,
                                    "_msm_title": title_salutation
                                });
                            });
                        } else {
                            timeoutTries++;
                            if (timeoutTries < 5) {
                                setTimeout(scrapeRegistrationOverlay, 1000);
                            }
                        }
                    }
                    if (document.location.href.indexOf('https://mailshotmaker.royalmail.com/create-canvas/') > -1) {
                        scrapeRegistrationOverlay();
                    }
                    var scrapeRegistration = function() {
                        if (typeof jQuery !== "undefined") {
                            jQuery(document.body).on('mousedown', 'a[data-bind="click: $root.proceedToStage2"]', function() {
                                var first_name = capitalise(jQuery('#ViewModel_FirstName').val());
                                var last_name = capitalise(jQuery('#ViewModel_LastName').val());
                                var title_salutation = capitalise(jQuery('#select2-ViewModel_Title-container').attr('title'));
                                utag.loader.SC("utag_main", {
                                    "_msm_name_f": first_name,
                                    "_msm_name_l": last_name,
                                    "_msm_title": title_salutation
                                });
                            });
                        } else {
                            timeoutTries++;
                            if (timeoutTries < 5) {
                                setTimeout(scrapeRegistration, 1000);
                            }
                        }
                    }
                    if (document.location.href.indexOf('https://mailshotmaker.royalmail.com/register/') > -1) {
                        scrapeRegistration();
                    }
                    var scrapeUpdateDetails = function() {
                        if (typeof jQuery !== "undefined") {
                            jQuery(document.body).on('mousedown', 'input[data-bind="click: submitPersonalDetails"]', function() {
                                var first_name = capitalise(jQuery('#FirstName').val());
                                var last_name = capitalise(jQuery('#LastName').val());
                                var title_salutation = capitalise(jQuery('#select2-Title-container').attr('title'));
                                utag.loader.SC("utag_main", {
                                    "_msm_name_f": first_name,
                                    "_msm_name_l": last_name,
                                    "_msm_title": title_salutation
                                });
                            });
                        } else {
                            timeoutTries++;
                            if (timeoutTries < 5) {
                                setTimeout(scrapeUpdateDetails, 1000);
                            }
                        }
                    }
                    if (document.location.href.indexOf('https://mailshotmaker.royalmail.com/profile/personal-details/') > -1) {
                        scrapeUpdateDetails();
                    }
                    if (document.domain.indexOf('mailshotmaker.royalmail.com') > -1 && utag.data.visitorEmail && utag.data.visitorEmail.indexOf("@") > -1 && utag.data['cp.utag_main__msm_name_f']) {
                        utag.data.as_event_name = "grab MSM customer details";
                        utag.data.as_first_name = (utag.data['cp.utag_main__msm_name_f']) ? utag.data['cp.utag_main__msm_name_f'] : undefined;
                        utag.data.as_last_name = utag.data['cp.utag_main__msm_name_l'] ? utag.data['cp.utag_main__msm_name_l'] : undefined;
                        utag.data.as_title = utag.data['cp.utag_main__msm_title'] ? utag.data['cp.utag_main__msm_title'] : undefined;
                        utag.loader.SC("utag_main", {
                            "_msm_name_f": undefined,
                            "_msm_name_l": undefined,
                            "_msm_title": undefined
                        }, "d");
                    }
                }
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
                if (utag.data['dom.pathname'].toString().toLowerCase().indexOf('/personal/search/google_cse_adv/'.toLowerCase()) > -1) {
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
                    if (utag.data['dom.pathname'] == '/redirections/new/addresses') {
                        jQuery(jQuery("fieldset.summary-security.section b")[0]).insertAfter("fieldset.summary-security.section").wrap("<p></p>");
                    }
                } catch (e) {
                    utag.DB(e)
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                try {
                    if (1) {
                        if (utag.data['consent_advertising'] == 1) {
                            utag.DB('in ext432 "Keepsafe form scraping"');
                            setTimeout(function() {
                                var j;
                                if (utag.data.pageApplicationName == "Personal-Keepsafe") {
                                    setInterval(function() {
                                        if (utag.data['pageApplicationName'] == 'Personal-Keepsafe' && utag.data['pageApplicationStep'] == 'Enter Name Details') {
                                            j = jQuery('a.forward-action');
                                            if (j.length == 1 && !j.attr('data-teal-kpbound')) {
                                                j.attr('data-teal-kpbound', 'true');
                                                j.bind('click', function(e) {
                                                    var toProperCase = function(s) {
                                                        if (s.match(/[A-Z]/) && s.match(/[a-z]/)) {
                                                            return s;
                                                        } else {
                                                            return s.toLowerCase().replace(/^(.)|\s(.)/g, function($1) {
                                                                return $1.toUpperCase();
                                                            });
                                                        }
                                                    };
                                                    window.teal_as_keepsafe_fname = toProperCase(jQuery('input[name=firstname]').val());
                                                    window.teal_as_keepsafe_lname = toProperCase(jQuery('input[name=lastname]').val());
                                                    window.teal_as_keepsafe_title = jQuery('#edit-title-of-person option:selected').val();
                                                });
                                            }
                                        } else if (utag.data['pageApplicationName'] == 'Personal-Keepsafe' && utag.data['pageApplicationStep'] == 'Enter Dates') {
                                            j = jQuery('a.forward-action');
                                            if (j.length == 1 && !j.attr('data-teal-kpbound')) {
                                                j.attr('data-teal-kpbound', 'true');
                                                j.bind('click', function(e) {
                                                    var months = {
                                                        "Jan": 0,
                                                        "Feb": 1,
                                                        "Mar": 2,
                                                        "Apr": 3,
                                                        "May": 4,
                                                        "Jun": 5,
                                                        "Jul": 6,
                                                        "Aug": 7,
                                                        "Sept": 8,
                                                        "Oct": 9,
                                                        "Nov": 10,
                                                        "Dec": 11
                                                    };
                                                    var sd = parseInt(jQuery('#start-date-day option:selected').text());
                                                    var sm = jQuery('#start-date-month option:selected').text();
                                                    var smn = months[sm];
                                                    var sy = parseInt(jQuery('#start-date-year option:selected').text());
                                                    var sdt = new Date(Date.UTC(sy, smn, sd));
                                                    var se = sdt.getTime() / 1000;
                                                    se += 3600 * 8;
                                                    window.teal_as_keepsafe_se = se;
                                                    var ed = parseInt(jQuery('#end-date-day option:selected').text());
                                                    var em = jQuery('#end-date-month option:selected').text();
                                                    var emn = months[em];
                                                    var ey = parseInt(jQuery('#end-date-year option:selected').text());
                                                    var edt = new Date(Date.UTC(ey, emn, ed));
                                                    var ee = edt.getTime() / 1000;
                                                    ee += 3600 * 8;
                                                    window.teal_as_keepsafe_ee = ee;
                                                    var one_day = 60 * 60 * 24;
                                                    var difference_s = ee - se;
                                                    window.teal_as_keepsafe_dur = Math.round(difference_s / one_day);
                                                    var price = jQuery('.selected-price-row > td:nth-child(2)').text();
                                                    price = price.replace(/[^0-9.]/g, '');
                                                    window.teal_as_keepsafe_price = price;
                                                });
                                            }
                                        } else if (utag.data['pageApplicationStep'] == 'Order Summary' && utag.data['pageApplicationName'] == 'Personal-Keepsafe') {
                                            j = jQuery('button.call-to-action');
                                            if (j.length == 1 && !j.attr('data-teal-kpbound')) {
                                                j.attr('data-teal-kpbound', 'true');
                                                j.bind('click', function(e) {
                                                    var email = jQuery('#edit-email').val();
                                                    var visitorRMPPost = jQuery('#edit-inform-by-post-royalmail').is(':checked') ? 0 : 1;
                                                    var visitorRMPPhone = jQuery('#edit-inform-by-telephone-royalmail').is(':checked') ? 0 : 1;
                                                    var visitorRMPEmail = jQuery('#edit-inform-by-email-royalmail').is(':checked') ? 0 : 1;
                                                    var visitorRMPOther = jQuery('#edit-inform-by-other-royalmail').is(':checked') ? 0 : 1;
                                                    var address = jQuery('li[data-ng-bind-html="orderSummary.data.address"]').html();
                                                    var addressArr = address.split('<br>');
                                                    var l = addressArr.length;
                                                    var pcode = addressArr[l - 1];
                                                    var address1 = '',
                                                        address2 = '',
                                                        address3 = '';
                                                    if (l >= 2) {
                                                        address1 = addressArr[0];
                                                    }
                                                    if (l >= 3) {
                                                        address2 = addressArr[1];
                                                    }
                                                    if (l >= 4) {
                                                        address3 = addressArr[2];
                                                    }
                                                    utag.loader.SC("utag_main", {
                                                        "kpsfname": window.teal_as_keepsafe_fname + ";exp-7d",
                                                        "kpslname": window.teal_as_keepsafe_lname + ";exp-7d",
                                                        "kpstitle": window.teal_as_keepsafe_title + ";exp-7d",
                                                        "kpsadd1": address1 + ";exp-7d",
                                                        "kpsadd2": address2 + ";exp-7d",
                                                        "kpsadd3": address3 + ";exp-7d",
                                                        "kpspcode": pcode + ";exp-7d",
                                                        "kpsstarte": window.teal_as_keepsafe_se + ";exp-7d",
                                                        "kpsende": window.teal_as_keepsafe_ee + ";exp-7d",
                                                        "kpsdur": window.teal_as_keepsafe_dur + ";exp-7d",
                                                        "kpsprice": window.teal_as_keepsafe_price + ";exp-7d",
                                                        "kpsemail": email + ";exp-7d",
                                                        "kpspostperm": visitorRMPPost + ";exp-7d",
                                                        "kpsphoneperm": visitorRMPPhone + ";exp-7d",
                                                        "kpsemailperm": visitorRMPEmail + ";exp-7d",
                                                        "kpsotherperm": visitorRMPOther + ";exp-7d"
                                                    });
                                                });
                                            }
                                        }
                                    }, 300);
                                }
                            }, 500);
                        }
                    }
                } catch (e) {
                    utag.DB(e)
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                try {
                    if ((utag.data['qp.cid'].toString().indexOf('_SM_') > -1 && utag.data['dom.pathname'].toString().indexOf('/business-parcel-delivery') > -1) || (utag.data['qp.CID'].toString().indexOf('_SM_') > -1 && utag.data['dom.pathname'].toString().indexOf('/business-parcel-delivery') > -1)) {
                        if (typeof window.jQuery === "function") {
                            jQuery("#formContainer.right.infoBox a.tel strong").text("0800 996 1657");
                        }
                        if (typeof window.jQuery === "function") {
                            jQuery("#rmCampaign div.section.grey div.content h2 strong").text("0800 996 1657");
                        }
                    }
                } catch (e) {
                    utag.DB(e)
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                try {
                    if ((utag.data['qp.cid'].toString().indexOf('_DD_') > -1 && utag.data['dom.pathname'].toString().indexOf('/business-parcel-delivery') > -1)) {
                        if (typeof window.jQuery === "function") {
                            jQuery("#rmCampaign h2 strong, a.tel>strong").text("0800 328 2298");
                        }
                        if (typeof window.jQuery === "function") {
                            jQuery("#rmCampaign div.section.grey div.content h2 strong").text("0800 328 2298");
                        }
                    }
                } catch (e) {
                    utag.DB(e)
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                try {
                    if (1) {
                        if (utag.data['consent_advertising'] == 1) {
                            utag.DB('in ext767 "PO Box Form Scraping Gather Data D8 July2021"');
                            utag.DB('D8 version');
                            var j;
                            if (/\/po-box$/i.test(utag.data['dom.pathname'])) {
                                setInterval(function() {
                                    if (utag.data.pageName
                                        .toLowerCase()
                                        .indexOf('rm web app >receiving mail > po box > apply online >get a quote') === 0) {
                                        j = jQuery('input[type=radio][name="move-address"][value="Yes"]');
                                        if (j.length == 1 && !j.attr('data-teal-kpbound')) {
                                            j.attr('data-teal-kpbound', 'true');
                                            j.bind('change', function(e) {
                                                if (this.checked && this.value == 'Yes') {
                                                    sessionStorage.setItem('teal_pobox_moving_home_selected', 'Y');
                                                }
                                            });
                                        }
                                        j = jQuery('#btn-guest, #btn-login, #btn-continue');
                                        j.each(function() {
                                            if (!jQuery(this).attr('data-teal-kpbound')) {
                                                jQuery(this).attr('data-teal-kpbound', 'true');
                                                jQuery(this).bind('mousedown', function(e) {
                                                    sessionStorage.setItem('teal_pobox_guest_or_login', this.id);
                                                    sessionStorage.setItem('teal_pobox_personal_business_radio', jQuery('input[name=type-of-use]:checked').val());
                                                    var inputDate = jQuery('#date-input-id').val().split('/');
                                                    var sd = inputDate[0];
                                                    var smn = inputDate[1] - 1;
                                                    var sy = inputDate[2];
                                                    var sdt = new Date(Date.UTC(sy, smn, sd));
                                                    var se = sdt.getTime() / 1000;
                                                    se += 3600 * 8;
                                                    sessionStorage.setItem('teal_poboxStartDateEpoch', se);
                                                    var calendarMonthAdd = function(date, months) {
                                                        var ret = new Date(date);
                                                        var checkRollover = function() {
                                                            if (ret.getDate() != date.getDate()) ret.setDate(0);
                                                        };
                                                        ret.setMonth(ret.getMonth() + months);
                                                        checkRollover();
                                                        return ret;
                                                    };
                                                    var duration = jQuery('input[name=duration]:checked').val();
                                                    if (duration == '1') {
                                                        duration = '3';
                                                    }
                                                    sessionStorage.setItem('teal_poboxDuration', duration);
                                                    var edt = calendarMonthAdd(sdt, parseInt(duration));
                                                    var ee = edt.getTime() / 1000;
                                                    ee += 3600 * 8;
                                                    sessionStorage.setItem('teal_poboxEndDateEpoch', ee);
                                                    var endDate = new Date(ee * 1000);
                                                    var format00 = function(input) {
                                                        return input.toString().length >= 2 ? input : '0' + input;
                                                    };
                                                    var endDateString = endDate.getFullYear() +
                                                        '-' +
                                                        format00(endDate.getMonth() + 1) +
                                                        '-' +
                                                        format00(endDate.getDate());
                                                    sessionStorage.setItem('teal_poboxEndDateString', endDateString);
                                                    var serviceType = jQuery('input[name=service]:checked').val();
                                                    sessionStorage.setItem('teal_poboxServiceType', serviceType);
                                                    var price = jQuery('.price-section')
                                                        .text()
                                                        .match(/\d+\.\d+/)[0];
                                                    sessionStorage.setItem('teal_poboxPrice', price);
                                                });
                                            }
                                        });
                                    } else if (utag.data.pageName
                                        .toLowerCase()
                                        .indexOf('rm web app >receiving mail > po box > apply online >your details') === 0) {
                                        j = jQuery('#btn-continue');
                                        if (j.length == 1 && !j.attr('data-teal-kpbound')) {
                                            j.attr('data-teal-kpbound', 'true');
                                            j.bind('mousedown', function(e) {
                                                sessionStorage.setItem('teal_pobox_pcode', jQuery('#postcode').val());
                                                var add1 = [];
                                                add1.push(jQuery('#flat-number').val());
                                                add1.push(jQuery('#building-number').val());
                                                add1.push(jQuery('#building-name').val());
                                                sessionStorage.setItem('teal_pobox_address1', add1.join(' '));
                                                sessionStorage.setItem('teal_pobox_address2', jQuery('#street').val());
                                                sessionStorage.setItem('teal_pobox_address3', jQuery('#city-or-town').val());
                                                sessionStorage.setItem('teal_pobox_title', jQuery('#title-id').val());
                                                sessionStorage.setItem('teal_pobox_fname', jQuery('#first-name-id').val());
                                                sessionStorage.setItem('teal_pobox_lname', jQuery('#last-name-id').val());
                                                sessionStorage.setItem('teal_pobox_email', jQuery('#email-id').val());
                                            });
                                        }
                                    } else if (utag.data.pageName
                                        .toLowerCase()
                                        .indexOf('rm web app >receiving mail > po box > apply online >service details') === 0) {
                                        j = jQuery('#btn-continue');
                                        if (j.length == 1 && !j.attr('data-teal-kpbound')) {
                                            j.attr('data-teal-kpbound', 'true');
                                            j.bind('mousedown', function(e) {
                                                sessionStorage.setItem('teal_pobox_reason', jQuery('input[name=reason]:checked').val());
                                            });
                                        }
                                    }
                                }, 300);
                            }
                        }
                    }
                } catch (e) {
                    utag.DB(e)
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (/^RM Web App >Redirections >Step . - (New Addresses|New Names|Renew Renewal details|New Dates|New Summary( error)?)$/.test(utag.data['pageName'])) {
                    if (typeof utag.runonce[514] == 'undefined') {
                        utag.runonce[514] = 1;
                        jQuery('body').bind('mousedown', function(e) {
                            if (utag.data['consent_advertising'] == 1) {
                                utag.DB('in ext514 "Redirections Form Scraping Gather Data"');
                                var findPCode = function(address, delimiter, howFarBack) {
                                    var addressArr = address.split(delimiter);
                                    var l = addressArr.length;
                                    return addressArr[l - howFarBack];
                                };
                                var findDate = function(d, m, y) {
                                    var dt = new Date(Date.UTC(y, m - 1, d));
                                    var e = Math.floor(dt.getTime() / 1000);
                                    e += 3600 * 8;
                                    return e;
                                };
                                var t = jQuery(e.target)[0].id;
                                if ((t == 'addresses_continue' || t == 'edit-buttons-save-and-exit') && utag.data.pageName.toLowerCase()
                                    .indexOf('RM Web App >Redirections >Step 1 - New Addresses'.toLowerCase()) === 0) {
                                    var oldAddress = jQuery('#captureplus_address_old').html();
                                    var newAddress = jQuery('#captureplus_address_new').html();
                                    var newIntlPostcode = jQuery('#edit-new-address-paf-addressfield-international-zipcode').val();
                                    var oldPCode = findPCode(oldAddress, '<br>', 2);
                                    var newPCode = newIntlPostcode ? newIntlPostcode : findPCode(newAddress, '<br>', 2);
                                    utag.loader.SC("utag_main", {
                                        "redirectionsOldPCode": oldPCode + ";exp-7d",
                                        "redirectionsNewPCode": newPCode + ";exp-7d"
                                    });
                                } else if ((t == 'names_continue' || t == 'edit-buttons-save-and-exit') && utag.data.pageName.toLowerCase()
                                    .indexOf('RM Web App >Redirections >Step 2 - New Names'.toLowerCase()) === 0) {
                                    var title = jQuery('#edit-primary-applicant-title').val();
                                    var fname = jQuery('#edit-primary-applicant-first-name').val();
                                    var lname = jQuery('#edit-primary-applicant-last-name').val();
                                    utag.loader.SC("utag_main", {
                                        "redirectionsTitle": title + ";exp-7d",
                                        "redirectionsFName": fname + ";exp-7d",
                                        "redirectionsLName": lname + ";exp-7d"
                                    });
                                } else if ((t == 'details_continue' || t == 'edit-buttons-save-and-exit') && utag.data.pageName.toLowerCase()
                                    .indexOf('RM Web App >Redirections >Step 2 - Renew Renewal details'.toLowerCase()) === 0) {
                                    var oldAddress = jQuery('fieldset.summary-addresses.section > p:nth-child(2)').html();
                                    var newAddress = jQuery('fieldset.summary-addresses.section > p:nth-child(3)').html();
                                    var oldPCode = findPCode(oldAddress, ',', 1);
                                    var newPCode = findPCode(newAddress, ',', 1);
                                    var startDate = jQuery('fieldset.summary-dates.section.last > p:nth-child(3)').html().split('<br>')[1];
                                    var endDate = jQuery('#renewal_end_date > p:nth-child(3)').html();
                                    var parseDate = function(d) {
                                        var darr = d.split(' ');
                                        var dd = /\d+/.exec(darr[0])[0];
                                        var dm = /^.{3}/.exec(darr[1])[0];
                                        var dy = darr[2];
                                        var months = {
                                            "Jan": "01",
                                            "Feb": "02",
                                            "Mar": "03",
                                            "Apr": "04",
                                            "May": "05",
                                            "Jun": "06",
                                            "Jul": "07",
                                            "Aug": "08",
                                            "Sept": "09",
                                            "Oct": "10",
                                            "Nov": "11",
                                            "Dec": "12"
                                        };
                                        return findDate(dd, months[dm], dy);
                                    };
                                    var se = parseDate(startDate);
                                    var ee = parseDate(endDate);
                                    var primaryApplicant = jQuery('fieldset.summary-names.section > div:nth-child(2) > p').html();
                                    primaryApplicant = /[^>]+$/.exec(primaryApplicant)[0];
                                    var pArr = primaryApplicant.match(/\w+/g);
                                    var title = pArr[0];
                                    var fname = pArr[1];
                                    var lname = pArr[pArr.length - 1];
                                    utag.loader.SC("utag_main", {
                                        "redirectionsOldPCode": oldPCode + ";exp-7d",
                                        "redirectionsNewPCode": newPCode + ";exp-7d",
                                        "redirectionsStartDateEpoch": se + ";exp-7d",
                                        "redirectionsEndDateEpoch": ee + ";exp-7d",
                                        "redirectionsTitle": title + ";exp-7d",
                                        "redirectionsFName": fname + ";exp-7d",
                                        "redirectionsLName": lname + ";exp-7d"
                                    });
                                } else if ((t == 'dates_continue' || t == 'edit-buttons-save-and-exit') && utag.data.pageName.toLowerCase()
                                    .indexOf('RM Web App >Redirections >Step 3 - New Dates'.toLowerCase()) === 0) {
                                    var sd = jQuery('#edit-start-date-day').val();
                                    var smn = jQuery('#edit-start-date-month').val();
                                    var sy = jQuery('#edit-start-date-year').val();
                                    var ed = jQuery('#edit-end-date-day').val();
                                    var emn = jQuery('#edit-end-date-month').val();
                                    var ey = jQuery('#edit-end-date-year').val();
                                    var se = findDate(sd, smn, sy);
                                    var ee = findDate(ed, emn, ey);
                                    utag.loader.SC("utag_main", {
                                        "redirectionsStartDateEpoch": se + ";exp-7d",
                                        "redirectionsEndDateEpoch": ee + ";exp-7d"
                                    });
                                } else if ((t == 'summary_continue' || t == 'edit-buttons-save-and-exit') && utag.data.pageName.toLowerCase().indexOf('RM Web App >Redirections >Step 4 - New Summary'.toLowerCase()) === 0) {
                                    var alternativeChecked = jQuery('#edit-contact-details-email-choose-alternative-email').is(':checked');
                                    if (alternativeChecked) {
                                        var altEmail = jQuery('#edit-redirection-contact-details-alternative-email').val().toLowerCase();
                                        var altEmailConfirm = jQuery('#edit-redirection-contact-details-alternative-email-confirm').val().toLowerCase();
                                        if (altEmail === altEmailConfirm && altEmail.indexOf('@') > 0) {
                                            utag.loader.SC("utag_main", {
                                                "redirectionsAlternativeEmail": altEmail + ";exp-7d"
                                            });
                                        }
                                    } else {
                                        utag.loader.SC("utag_main", {
                                            "redirectionsAlternativeEmail": ""
                                        }, "d");
                                    }
                                }
                            }
                        });
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                try {
                    if (utag.data['dom.url'].toString().indexOf('royalmail.com/enquire-register-oba') > -1 || utag.data['dom.url'].toString().indexOf('royalmail.com/business/user/register') > -1 || (utag.data['dom.url'].toString().indexOf('royalmail.com/business/user') > -1 && utag.data['dom.url'].toString().indexOf('/edit-marketing-preferences') > -1) || utag.data['dom.url'].toString().indexOf('royalmail.com/user/register/personal') > -1 || (utag.data['dom.url'].toString().indexOf('royalmail.com/user/') > -1 && utag.data['dom.url'].toString().indexOf('/edit') > -1)) {
                        var $element = jQuery('a[href*="/marketing_consent/rmg"]');
                        var counter = 0;

                        function checkUpdate() {
                            counter++;
                            if ($element.length > 0) {
                                clearInterval(interval);
                                $element.parent().html($element.parent().html().replace(/\<a.*\/a\>/, "Royal Mail Group "));
                            } else if (counter === 20) {
                                clearInterval(interval);
                            }
                        }
                        if ($element.length == 0) {
                            var interval = setInterval(function() {
                                checkUpdate()
                            }, 1000);
                        } else {
                            $element.parent().html($element.parent().html().replace(/\<a.*\/a\>/, "Royal Mail Group "));
                        }
                    }
                } catch (e) {
                    utag.DB(e)
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                try {
                    if (utag.data['dom.domain'].toString().indexOf('royalmail.com') > -1) {
                        jQuery('#block-cookie_policy-0').hide()
                    }
                } catch (e) {
                    utag.DB(e)
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                try {
                    if (utag.data['dom.domain'].toString().indexOf('royalmail.com') > -1) {
                        jQuery('#sliding-popup').hide()
                    }
                } catch (e) {
                    utag.DB(e)
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                try {
                    if (utag.data['dom.domain'].toString().indexOf('personal.help.royalmail.com') > -1) {
                        jQuery('#block-cookie_policy-0').hide()
                    }
                } catch (e) {
                    utag.DB(e)
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                try {
                    if ((utag.data['dom.domain'].toString().indexOf('royalmail.com') > -1 && /^\/business/i.test(utag.data['dom.pathname']))) {
                        jQuery('#sliding-popup').hide()
                    }
                } catch (e) {
                    utag.DB(e)
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                try {
                    if (utag.data['dom.domain'].toString().indexOf('business.help.royalmail.com') > -1) {
                        jQuery('#block-rmg-cookie-policy-cookie-policy').hide()
                    }
                } catch (e) {
                    utag.DB(e)
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                try {
                    if ((utag.data['dom.domain'].toString().indexOf('www.royalmail.com') > -1 && utag.data['dom.url'].toString().toLowerCase().indexOf(' https://www.royalmail.com/personal/receiving-mail/pay-a-fee/pay#/'.toLowerCase()) > -1)) {
                        if (jQuery) {
                            var x = 0;
                            var checkExist = setInterval(function() {
                                if (jQuery('#customs').length) {
                                    jQuery('#customs').bind('change', function(e) {
                                        div = jQuery('#reason-radios.card__selection ul li p.ng-scope.ng-binding');
                                        if (div.length > 0) {
                                            div.hide();
                                        }
                                    });
                                    clearInterval(checkExist);
                                } else if (++x === 10) {
                                    clearInterval(checkExist);
                                }
                            }, 100);
                        }
                    }
                } catch (e) {
                    utag.DB(e)
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                try {
                    if ((utag.data['dom.domain'].toString().indexOf('www.royalmail.com') > -1 && utag.data['dom.pathname'].toString().indexOf('/personal/receiving-mail/pay-a-fee/customs') > -1 && utag.data['dom.hash'].toString().indexOf('/charge-exception') > -1)) {
                        if (jQuery) {
                            var x = 0;
                            var checkExist = setInterval(function() {
                                if (jQuery(".exception-details").length) {
                                    var textReplace = jQuery(".exception-details > p").text();
                                    if (textReplace.indexOf("any taxes or duties to pay for this item.") >= 0) {
                                        jQuery(".exception-details").html("<p>We seem to have a problem processing your customs charge. Please try again.<p>If your barcode is still not recognised, you can <a href='https://www.royalmail.com/personal/receiving-mail/pay-a-fee/pay#'>pay your customs charges here</a>.</p>");
                                        clearInterval(checkExist);
                                    }
                                } else if (++x === 10) {
                                    clearInterval(checkExist);
                                }
                            }, 100);
                        }
                    }
                } catch (e) {
                    utag.DB(e)
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (utag.data['dom.title'].toString().indexOf('Royal Mail and Pharmacy2U') > -1) {
                    if (typeof utag.runonce[777] == 'undefined') {
                        utag.runonce[777] = 1;
                        jQuery('.content-cta-primary').bind('click', function(e) {
                            utag.link({
                                "ga_event_category": 'p2u_cta',
                                "ga_event_action": 'p2u_registration',
                                "ga_event_label": utag.data['dom.url']
                            })
                        })
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (utag.data['dom.title'].toString().indexOf('Royal Mail and Pharmacy2U') > -1) {
                    if (typeof utag.runonce[778] == 'undefined') {
                        utag.runonce[778] = 1;
                        jQuery('a[href*="apps.apple.com"]').bind('click', function(e) {
                            utag.link({
                                "ga_event_category": 'p2u_cta',
                                "ga_event_action": 'p2u_app_store',
                                "ga_event_label": this.href
                            })
                        })
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (utag.data['dom.title'].toString().indexOf('Royal Mail and Pharmacy2U') > -1) {
                    if (typeof utag.runonce[779] == 'undefined') {
                        utag.runonce[779] = 1;
                        jQuery('a[href*="play.google.com/store"]').bind('click', function(e) {
                            utag.link({
                                "ga_event_category": 'p2u_cta',
                                "ga_event_action": 'p2u_play_store',
                                "ga_event_label": this.href
                            })
                        })
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                try {
                    if (utag.data['dom.domain'].toString().indexOf('shop.royalmail.com') > -1) {
                        (function() {
                            var previousShopEvent = '';

                            function checkShopEvent() {
                                if (utag && utag.data && utag.data.shopEvent) {
                                    var currentShopEvent = utag.data.shopEvent.join(',');
                                    if (currentShopEvent !== previousShopEvent) {
                                        previousShopEvent = currentShopEvent;
                                        if (currentShopEvent.indexOf('scAdd') > -1) {
                                            utag.link(utag.data, null, [1014]);
                                        }
                                    }
                                }
                            }
                            setInterval(checkShopEvent, 500);
                        })();
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
//tealium universal tag - utag.991 ut4.0.202605010910, Copyright 2026 Tealium.com Inc. All Rights Reserved.
(function(f) {
    if (f.fbq) return;
    var n = f.fbq = function() {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = "2.0";
    n.queue = [];
    n.agent = "tmtealium";
})(window);
try {
    (function(id, loader) {
        var u = {
                "id": id
            },
            md5;
        utag.o[loader].sender[id] = u;
        utag.globals = utag.globals || {};
        if (utag.ut === undefined) {
            utag.ut = {};
        }
        var match = /ut\d\.(\d*)\..*/.exec(utag.cfg.v);
        if (utag.ut.loader === undefined || !match || parseInt(match[1]) < 41) {
            u.loader = function(o, a, b, c, l, m) {
                utag.DB(o);
                a = document;
                if (o.type == "iframe") {
                    m = a.getElementById(o.id);
                    if (m && m.tagName == "IFRAME") {
                        b = m;
                    } else {
                        b = a.createElement("iframe");
                    }
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
                    b.id = o.id;
                }
                for (l in utag.loader.GV(o.attrs)) {
                    b.setAttribute(l, o.attrs[l]);
                }
                b.setAttribute("src", o.src);
                if (typeof o.cb == "function") {
                    if (b.addEventListener) {
                        b.addEventListener("load", function() {
                            o.cb();
                        }, false);
                    } else {
                        b.onreadystatechange = function() {
                            if (this.readyState == "complete" || this.readyState == "loaded") {
                                this.onreadystatechange = null;
                                o.cb();
                            }
                        };
                    }
                }
                if (o.type != "img" && !m) {
                    l = o.loc || "head";
                    c = a.getElementsByTagName(l)[0];
                    if (c) {
                        utag.DB("Attach to " + l + ": " + o.src);
                        if (l == "script") {
                            c.parentNode.insertBefore(b, c);
                        } else {
                            c.appendChild(b);
                        }
                    }
                }
            };
        } else {
            u.loader = utag.ut.loader;
        }
        if (utag.ut.typeOf === undefined) {
            u.typeOf = function(e) {
                return ({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
            };
        } else {
            u.typeOf = utag.ut.typeOf;
        }
        if (utag.ut.md5 === undefined) {
            md5 = function(t, n) {
                var r;
                if ("undefined" != typeof window && window.crypto && (r = window.crypto), !r && "undefined" != typeof window && window.msCrypto && (r = window.msCrypto), !r && "undefined" != typeof global && global.crypto && (r = global.crypto), !r && "function" == typeof require) try {
                    r = require("crypto")
                } catch (t) {}
                var e = function() {
                        if (r) {
                            if ("function" == typeof r.getRandomValues)
                                try {
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
                var n = md5,
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
        } else {
            md5 = utag.ut.md5;
        }
        u.ev = {
            "view": 1,
            "link": 1
        };
        u.scriptrequested = false;
        u.pixels_initialized = {};
        u.clearEmptyKeys = function(object) {
            for (var key in object) {
                if (object[key] === "" || object[key] === undefined || object[key] === null || object[key] === NaN || (utag.ut.typeOf(object[key]) === "array" && object[key].length === 0)) {
                    delete object[key];
                }
            }
            return object;
        };
        u.generateEventID = function(event, data, lookup_id) {
            var hash_input = (data["tealium_timestamp_epoch"] || (function() {
                    var d = new Date();
                    return Math.floor(d.getTime() / 1000);
                })()) + "-" + lookup_id + "-" + event + "-" + id,
                event_id = md5.MD5(hash_input).toString();
            return event_id;
        };
        u.isEmptyObject = function(object) {
            if (typeof Object.keys === "function") {
                if (Object.keys(object).length === 0) {
                    return true;
                } else {
                    return false;
                }
            } else {
                var key;
                for (key in object) {
                    if (object.hasOwnProperty(key)) {
                        return false;
                    }
                }
                return true;
            }
        };
        u.toBoolean = function(val) {
            val = val || "";
            return val === true || val.toLowerCase() === "true" || val.toLowerCase() === "on";
        };
        u.map_func = function(arr, obj, item) {
            var i = arr.shift();
            obj[i] = obj[i] || {};
            if (arr.length > 0) {
                u.map_func(arr, obj[i], item);
            } else {
                obj[i] = item;
            }
        };
        u.processAMData = function(data) {
            var processed_data = {},
                key;
            for (key in data) {
                if (data.hasOwnProperty(key)) {
                    if (key === "ph" || key === "ge" || key === "db" || key === "zp") {
                        key = key.replace(/\s/g, "").toLowerCase();
                    }
                    if (key === "ph") {
                        data[key] = data[key].replace(/[^\d]/g, "");
                    } else if (key === "ge") {
                        if (data[key] !== "m" && data[key] !== "f") {
                            utag.DB(u.id + ": Advanced Matching property 'ge' in wrong format. Removed from init call");
                            continue;
                        }
                    } else if (key === "db") {
                        if (data[key].length !== 8) {
                            utag.DB(u.id + ": Advanced Matching property 'db' is not the correct length. Removed from init call");
                            continue;
                        }
                    } else if (key === "zp") {
                        data[key] = data[key].replace(/[^\d]/g, "");
                        if (data[key].length > 5) {
                            utag.DB(u.id + ": Advanced Matching property 'zp' is too long. Removed from init call");
                            continue;
                        }
                    }
                }
                processed_data[key] = data[key];
            }
            return u.clearEmptyKeys(processed_data);
        };
        u.getEventContentsObject = function(event_data, event_name) {
            if (!event_data.content_ids) {
                return null;
            }
            var delivery_category = event_name === 'Purchase' ? event_data.delivery_category : '';
            return event_data.content_ids.map(function(content_id, index) {
                return u.clearEmptyKeys({
                    id: content_id,
                    quantity: parseInt(u.data.product_quantity[index]),
                    item_price: parseFloat(u.data.product_unit_price[index]),
                    delivery_category: delivery_category
                })
            })
        }
        u.map = {
            "tealium_random": "event_id"
        };
        u.extend = [];
        u.send = function(a, b) {
            if (u.ev[a] || u.ev.all !== undefined) {
                utag.DB("send:991");
                utag.DB(b);
                var c, d, e, f, h, i, j, k, l, key, pixel_list, event, base_tracking_type = "track",
                    event_data = {},
                    event_id = "",
                    event_name = "",
                    event_tracking_type = "",
                    fb_param = "",
                    has_purchase = false,
                    lookup_id = "",
                    tracking_queue = [],
                    standard_events_lookup = {
                        "AddPaymentInfo": {
                            "fb_params": ["content_category", "content_ids", "contents", "currency", "value"]
                        },
                        "AddToCart": {
                            "fb_params": ["content_ids", "content_name", "content_type", "contents", "currency", "value"]
                        },
                        "AddToWishlist": {
                            "fb_params": ["content_name", "content_category", "content_ids", "contents", "currency", "value"]
                        },
                        "CompleteRegistration": {
                            "fb_params": ["content_name", "currency", "status", "value"]
                        },
                        "Contact": {
                            "fb_params": []
                        },
                        "CustomizeProduct": {
                            "fb_params": []
                        },
                        "Donate": {
                            "fb_params": []
                        },
                        "FindLocation": {
                            "fb_params": []
                        },
                        "InitiateCheckout": {
                            "fb_params": ["content_category", "content_ids", "contents", "currency", "num_items", "value"]
                        },
                        "Lead": {
                            "fb_params": ["content_category", "content_name", "currency", "value"]
                        },
                        "PageView": {
                            "fb_params": []
                        },
                        "Purchase": {
                            "fb_params": ["content_ids", "content_name", "content_type", "contents", "num_items", "currency", "value", "delivery_category"],
                            "req_params": ["currency", "value"]
                        },
                        "Schedule": {
                            "fb_params": []
                        },
                        "Search": {
                            "fb_params": ["content_category", "content_ids", "contents", "currency", "search_string", "value"]
                        },
                        "StartTrial": {
                            "fb_params": ["currency", "predicted_ltv", "value"]
                        },
                        "SubmitApplication": {
                            "fb_params": []
                        },
                        "Subscribe": {
                            "fb_params": ["currency", "predicted_ltv", "value"]
                        },
                        "ViewContent": {
                            "fb_params": ["content_ids", "content_name", "content_type", "contents", "currency", "value"]
                        }
                    },
                    standard_params_lookup = {
                        "content_category": function() {
                            return u.data.content_category || u.data.product_category;
                        },
                        "content_name": function() {
                            return u.data.content_name || u.data.product_name;
                        },
                        "content_ids": function() {
                            return u.data.content_ids || u.data.product_id;
                        },
                        "content_type": function() {
                            return u.data.content_type;
                        },
                        "contents": function() {
                            return u.data.contents;
                        },
                        "currency": function() {
                            return u.data.currency || u.data.order_currency;
                        },
                        "delivery_category": function() {
                            return u.data.delivery_category;
                        },
                        "num_items": function() {
                            var i, num;
                            if (typeof u.data.num_items !== "undefined" && u.data.num_items !== "") {
                                num = u.data.num_items;
                            } else {
                                if (u.data.calc_items === true || u.data.calc_items === "true") {
                                    num = 0;
                                    for (i = 0; i < u.data.product_quantity.length; i++) {
                                        num += parseInt(u.data.product_quantity[i]);
                                    }
                                }
                            }
                            if (typeof num !== "undefined" && num !== "") {
                                num = parseInt(num);
                            }
                            return num;
                        },
                        "predicted_ltv": function() {
                            return u.data.predicted_ltv;
                        },
                        "search_string": function() {
                            return u.data.search_string;
                        },
                        "status": function() {
                            return u.data.status;
                        },
                        "value": function(event) {
                            var val = "";
                            if (typeof u.data.value !== "undefined" && u.data.value !== "") {
                                val = u.data.value;
                            } else {
                                if ((event === "AddToCart" || event === "ViewContent") && u.data.product_unit_price.length > 0) {
                                    val = u.data.product_unit_price[0];
                                } else if (event === "Purchase") {
                                    val = u.data.order_subtotal;
                                }
                            }
                            if (typeof val !== "undefined" && val !== "") {
                                val = parseFloat(val);
                            }
                            return val;
                        }
                    };
                u.processing_options = function() {
                    var key, ldu_option;
                    for (key in u.data.lmt_data.ldu_types) {
                        if (u.data.lmt_data.ldu_types[key] === "true" || u.data.lmt_data.ldu_types[key] === true) {
                            ldu_option = key;
                        }
                    }
                    if (u.data.lmt_data.use_ldu === "true" || u.data.lmt_data.use_ldu === true) {
                        switch (ldu_option) {
                            case "california":
                                u.data.lmt_data.country = 1;
                                u.data.lmt_data.state = 1000;
                                break;
                            case "geolocate":
                                u.data.lmt_data.country = 0;
                                u.data.lmt_data.state = 0;
                                break;
                            default:
                                break;
                        }
                        fbq("dataProcessingOptions", u.data.lmt_data.prcs_optns, u.data.lmt_data.country, u.data.lmt_data.state);
                    } else if (u.data.lmt_data.use_ldu === "false" || u.data.lmt_data.use_ldu === false) {
                        fbq("dataProcessingOptions", []);
                    }
                }
                u.data = {
                    "base_url": "https://connect.facebook.net/en_US/fbevents.js",
                    "advanced_matching": "true",
                    "generate_event_id": "true",
                    "pixel_id": "133310348781036",
                    "autoConfig": true,
                    "auto_page_view": true,
                    "calc_items": true,
                    "consent": "",
                    "disablePushState": false,
                    "track_single": true,
                    "lmt_data": {
                        "prcs_optns": ["LDU"],
                        "country": 0,
                        "state": 0
                    },
                    useContentsObject: false,
                    "order_id": "",
                    "order_subtotal": "",
                    "order_currency": "",
                    "delivery_category": "",
                    "product_id": [],
                    "product_name": [],
                    "product_category": [],
                    "product_unit_price": [],
                    "product_quantity": [],
                    "content_category": "",
                    "content_ids": "",
                    "content_name": "",
                    "content_type": "",
                    "contents": null,
                    "currency": "",
                    "num_items": "",
                    "predicted_ltv": "",
                    "search_string": "",
                    "status": "",
                    "value": "",
                    "movieref": "",
                    "availability": "",
                    "body_style": "",
                    "checkin_date": "",
                    "checkout_date": "",
                    "city": "",
                    "country": "",
                    "departing_arrival_date": "",
                    "departing_departure_date": "",
                    "destination_airport": "",
                    "destination_ids": "",
                    "drivetrain": "",
                    "exterior_color": "",
                    "fuel_type": "",
                    "hotel_score": "",
                    "lease_end_date": "",
                    "lease_start_date": "",
                    "listing_type": "",
                    "make": "",
                    "model": "",
                    "neighborhood": "",
                    "num_adults": "",
                    "num_children": "",
                    "num_infants": "",
                    "origin_airport": "",
                    "postal_code": "",
                    "preferred_baths_range": "",
                    "preferred_beds_range": "",
                    "preferred_num_stops": "",
                    "preferred_price_range": "",
                    "price": "",
                    "property_type": "",
                    "region": "",
                    "returning_arrival_date": "",
                    "returning_departure_date": "",
                    "state_of_vehicle": "",
                    "transmission": "",
                    "travel_class": "",
                    "travel_end": "",
                    "travel_start": "",
                    "user_score": "",
                    "year": "",
                    "am": {},
                    "custom": {},
                    "event_queue": []
                };
                utag.DB("send:991:EXTENSIONS");
                utag.DB(b);
                for (d in utag.loader.GV(u.map)) {
                    if (b[d] !== undefined && b[d] !== "") {
                        e = u.map[d].split(",");
                        for (f = 0; f < e.length; f++) {
                            if (u.data.hasOwnProperty(e[f]) || e[f].indexOf(".") > -1) {
                                u.map_func(e[f].split("."), u.data, b[d]);
                            } else {
                                u.data.custom[e[f]] = b[d];
                            }
                        }
                    } else {
                        h = d.split(":");
                        if (h.length === 2 && b[h[0]] === h[1]) {
                            if (u.map[d]) {
                                u.data.event_queue = u.data.event_queue.concat(u.map[d].split(","));
                            }
                        } else if (h.length === 3 && b[h[0]] === h[1]) {
                            if (u.map[d]) {
                                u.data[h[2]] = u.map[d];
                            }
                        }
                    }
                }
                utag.DB("send:991:MAPPINGS");
                utag.DB(u.data);
                if (!u.data.pixel_id) {
                    utag.DB(u.id + ": Tag not fired: Required attribute 'pixel_id' not populated.");
                    return;
                }
                if (u.data.consent === "grant" || u.data.consent === "revoke") {
                    fbq("consent", u.data.consent);
                }
                if (u.data.disablePushState === "true" || u.data.disablePushState === true) {
                    fbq.disablePushState = true;
                }
                if (u.data.generate_event_id === "true" || u.data.generate_event_id === true) {
                    lookup_id = b.tealium_random;
                    if (typeof lookup_id !== "undefined") {
                        utag.globals[lookup_id] = window.utag.globals[lookup_id] || {};
                    } else {
                        lookup_id = Math.random().toFixed(16).substring(2);
                        utag.DB("send:991: The tealium_random variable was not defined. Any Facebook event IDs generated will not be collected by Tealium Collect. Please ensure you are using the latest version of utag.js to generate a tealium_random value.");
                    }
                }
                if (u.data.track_single === true || u.data.track_single === "true") {
                    base_tracking_type += "Single";
                }
                u.data.order_currency = u.data.order_currency || b._ccurrency || "";
                u.data.order_id = u.data.order_id || b._corder || "";
                u.data.order_subtotal = u.data.order_subtotal || b._csubtotal || "";
                if (u.data.product_category.length === 0 && b._ccat !== undefined) {
                    u.data.product_category = b._ccat.slice(0);
                }
                if (u.data.product_id.length === 0 && b._cprod !== undefined) {
                    u.data.product_id = b._cprod.slice(0);
                }
                if (u.data.product_name.length === 0 && b._cprodname !== undefined) {
                    u.data.product_name = b._cprodname.slice(0);
                }
                if (u.data.product_quantity.length === 0 && b._cquan !== undefined) {
                    u.data.product_quantity = b._cquan.slice(0);
                }
                if (u.data.product_unit_price.length === 0 && b._cprice !== undefined) {
                    u.data.product_unit_price = b._cprice.slice(0);
                }
                if (a === "view" && (u.data.auto_page_view === true || u.data.auto_page_view === "true")) {
                    u.data.event_queue.push("PageView");
                }
                for (i = 0; i < u.data.event_queue.length; i++) {
                    if (u.data.event_queue[i] === "Purchase") {
                        has_purchase = true;
                    }
                }
                if (u.data.order_id && !has_purchase) {
                    u.data.event_queue.push("Purchase");
                }
                for (i = 0; i < u.data.event_queue.length; i++) {
                    event_name = u.data.event_queue[i].replace(/ /g, '_');
                    event_tracking_type = base_tracking_type;
                    event_data = {};
                    if (u.data.generate_event_id === "true" || u.data.generate_event_id === true) {
                        if (b.tealium_random) {
                            event_id = u.generateEventID(event_name, b, lookup_id);
                            if (window.utag.globals[b.tealium_random]) {
                                window.utag.globals[b.tealium_random]["fb_event_id_" + event_name] = event_id;
                                window.utag.globals[b.tealium_random]["fb_event_id_" + event_name + "_" + id] = event_id;
                            }
                        } else {
                            utag.DB("send:991: Event ID Generation is enabled, but the tealium_random value was not found in the data layer. No event ID was generated for " + event_name);
                        }
                        window.utag.globals[lookup_id]["fb_event_id_" + event_name] = event_id;
                    }
                    if (typeof standard_events_lookup[event_name] === "undefined") {
                        event_tracking_type += "Custom";
                    } else {
                        for (j = 0; j < standard_events_lookup[event_name].fb_params.length; j++) {
                            fb_param = standard_events_lookup[event_name].fb_params[j];
                            event_data[fb_param] = standard_params_lookup[fb_param](event_name);
                        }
                    }
                    for (key in u.data.custom) {
                        if (u.data.custom.hasOwnProperty(key)) {
                            event_data[key] = u.data.custom[key];
                        }
                    }
                    if (typeof u.data[event_name] === "object") {
                        for (key in u.data[event_name]) {
                            if (u.data[event_name].hasOwnProperty(key)) {
                                if (key === "value" && utag.ut.typeOf(u.data[event_name][key]) === "array" && u.data[event_name][key].length > 0) {
                                    event_data[key] = parseFloat(u.data[event_name][key][0]);
                                } else {
                                    event_data[key] = u.data[event_name][key];
                                }
                            }
                        }
                    }
                    if (event_name === "Purchase") {
                        for (key in standard_events_lookup[event_name].req_params) {
                            if (standard_events_lookup[event_name].req_params.hasOwnProperty(key)) {
                                if (!event_data[standard_events_lookup[event_name].req_params[key]]) {
                                    utag.DB("send:991:" + event_name + " tracking: The required parameter '" + standard_events_lookup[event_name].req_params[key] + "' is empty. ");
                                    continue;
                                }
                            }
                        }
                    }
                    if (u.toBoolean(u.data.useContentsObject) && !event_data.contents) {
                        event_data.contents = u.getEventContentsObject(event_data, event_name)
                    }
                    tracking_queue.push(u.clearEmptyKeys({
                        "event_tracking_type": event_tracking_type,
                        "event_name": event_name,
                        "event_data": event_data,
                        "event_id": event_id
                    }));
                }
                pixel_list = u.data.pixel_id.split(/\s*,\s*/);
                for (k = 0; k < pixel_list.length; k++) {
                    if (u.data.autoConfig === "false" || u.data.autoConfig === false) {
                        fbq("set", "autoConfig", false, pixel_list[k]);
                    }
                    if (a === "view") {
                        if (!u.pixels_initialized[pixel_list[k]]) {
                            u.processing_options();
                            if (u.data.advanced_matching === "true" || u.data.advanced_matching === true) {
                                u.data.am = u.processAMData(u.data.am);
                                if (u.isEmptyObject(u.data.am)) {
                                    utag.DB("Advanced Matching is enabled, but no Advanced Matching data was mapped.");
                                }
                                fbq("init", pixel_list[k], u.data.am);
                            } else {
                                fbq("init", pixel_list[k]);
                            }
                            u.pixels_initialized[pixel_list[k]] = true;
                        } else if (u.data.advanced_matching === "true" || u.data.advanced_matching === true) {
                            fbq("init", pixel_list[k], u.processAMData(u.data.am));
                        }
                    }
                    if (u.data.track_single === true || u.data.track_single === "true") {
                        for (l = 0; l < tracking_queue.length; l++) {
                            if (tracking_queue[l].event_id) {
                                fbq(tracking_queue[l].event_tracking_type, pixel_list[k], tracking_queue[l].event_name, u.clearEmptyKeys(tracking_queue[l].event_data), {
                                    eventID: tracking_queue[l].event_id
                                });
                            } else {
                                fbq(tracking_queue[l].event_tracking_type, pixel_list[k], tracking_queue[l].event_name, u.clearEmptyKeys(tracking_queue[l].event_data));
                            }
                        }
                    }
                }
                if (u.data.track_single !== true && u.data.track_single !== "true") {
                    for (l = 0; l < tracking_queue.length; l++) {
                        if (tracking_queue[l].event_id) {
                            fbq(tracking_queue[l].event_tracking_type, tracking_queue[l].event_name, u.clearEmptyKeys(tracking_queue[l].event_data), {
                                eventID: tracking_queue[l].event_id
                            });
                        } else {
                            fbq(tracking_queue[l].event_tracking_type, tracking_queue[l].event_name, u.clearEmptyKeys(tracking_queue[l].event_data));
                        }
                    }
                }
                if (!u.scriptrequested) {
                    u.scriptrequested = true;
                    u.loader({
                        "type": "script",
                        "src": u.data.base_url,
                        "cb": null,
                        "loc": "script",
                        "id": "utag_991",
                        "attrs": {}
                    });
                }
                utag.DB("send:991:COMPLETE");
            }
        };
        utag.o[loader].loader.LOAD(id);
    }("991", "royalmail.main"));
} catch (error) {
    utag.DB(error);
}

//tealium universal tag - utag.1025 ut4.0.202605010910, Copyright 2026 Tealium.com Inc. All Rights Reserved.
try {
    (function(id, loader) {
        var u = {};
        u.ev = {
            "view": 1
        };
        u.initialized = false;
        utag.o[loader].sender[id] = u;
        if (utag === undefined) {
            utag = {};
        }
        if (utag.ut === undefined) {
            utag.ut = {};
        }
        if (utag.ut.loader === undefined) {
            u.loader = function(o) {
                var a, b, c, l;
                a = document;
                if (o.type === "iframe") {
                    b = a.createElement("iframe");
                    b.setAttribute("height", "1");
                    b.setAttribute("width", "1");
                    b.setAttribute("style", "display:none");
                    b.setAttribute("src", o.src);
                } else if (o.type === "img") {
                    utag.DB("Attach img: " + o.src);
                    b = new Image();
                    b.src = o.src;
                    return;
                } else {
                    b = a.createElement("script");
                    b.language = "javascript";
                    b.type = "text/javascript";
                    b.async = 1;
                    b.charset = "utf-8";
                    b.src = o.src;
                }
                if (o.id) {
                    b.id = o.id;
                }
                if (typeof o.cb === "function") {
                    if (b.addEventListener) {
                        b.addEventListener("load", function() {
                            o.cb();
                        }, false);
                    } else {
                        b.onreadystatechange = function() {
                            if (this.readyState === "complete" || this.readyState === "loaded") {
                                this.onreadystatechange = null;
                                o.cb();
                            }
                        };
                    }
                }
                l = o.loc || "head";
                c = a.getElementsByTagName(l)[0];
                if (c) {
                    utag.DB("Attach to " + l + ": " + o.src);
                    if (l === "script") {
                        c.parentNode.insertBefore(b, c);
                    } else {
                        c.appendChild(b);
                    }
                }
            };
        } else {
            u.loader = utag.ut.loader;
        }
        u.checkForDefaultDecision = function() {
            var dataLayerArray = window.dataLayer || [];
            for (var i = dataLayerArray.length - 1; i >= 0; i--) {
                if (dataLayerArray[i][0] === "consent" && dataLayerArray[i][1] === "default") {
                    return true;
                }
            }
            return false;
        };
        u.getPreviousDecision = function() {
            var dataLayerArray = window.dataLayer || [];
            var extraCommands = ["url_passthrough", "ads_data_redaction"];
            var decision = {};
            dataLayerArray.forEach(function(data) {
                if (data[0] === "consent") {
                    decision.consent = decision.consent || data[2];
                }
                extraCommands.forEach(function(command) {
                    if (data[0] === "set" && data[1] === command) {
                        decision[command] = decision[command] || data[2];
                    }
                });
            });
            return decision;
        };
        u.isDeepEqual = function(object1, object2) {
            function isObject(object) {
                return object !== null && typeof object === "object";
            }
            var keys1 = Object.keys(object1);
            var keys2 = Object.keys(object2);
            if (keys1.length !== keys2.length) return false;
            for (var i = 0; i < keys1.length; i++) {
                var value1 = object1[keys1[i]];
                var value2 = object2[keys1[i]];
                var areObjects = isObject(value1) && isObject(value2);
                if ((areObjects && !u.isDeepEqual(value1, value2)) || (!areObjects && value1 !== value2)) return false;
            }
            return true;
        }
        u.toBoolean = function(val) {
            val = String(val) || "";
            return val === true || val.toLowerCase() === "true" || val.toLowerCase() === "on";
        };
        u.mapFunc = function(arr, obj, item) {
            var i = arr.shift();
            obj[i] = obj[i] || {};
            if (arr.length > 0) {
                u.mapFunc(arr, obj[i], item);
            } else {
                obj[i] = item;
            }
        };
        u.getConsentValue = function(itemConsent) {
            var googleConsentValues = ['granted', 'denied'];
            var googleConsentValuesByKey = googleConsentValues.reduce(function(acc, value) {
                acc[value] = value;
                return acc;
            }, {});
            if (!u.data.tealium_consent || (!utag.gdpr && u.data.tealium_consent)) {
                return googleConsentValues.indexOf(itemConsent) === -1 ? googleConsentValuesByKey.denied : itemConsent;
            } else if (utag.gdpr && u.data.tealium_consent) {
                var consentState = utag.gdpr.getConsentState();
                if (consentState === 1) {
                    return googleConsentValuesByKey.granted;
                }
                if (consentState === -1 || consentState === 0) {
                    return googleConsentValuesByKey.denied;
                }
                if (Array.isArray(consentState)) {
                    var selectedCategories = utag.gdpr.getSelectedCategories();
                    if (googleConsentValues.indexOf(itemConsent) === -1) {
                        return selectedCategories.indexOf(itemConsent) === -1 ? googleConsentValuesByKey.denied : googleConsentValuesByKey.granted;
                    }
                    return itemConsent;
                }
                return googleConsentValuesByKey.denied;
            }
        };
        u.hasgtagjs = function() {
            var data_layer_name = "dataLayer";
            window[data_layer_name] = window[data_layer_name] || [];
            window.gtagRename = window.gtagRename || "gtag";
            if (utag.ut.gtagScriptRequested || (typeof window[window.gtagRename] === "function" && typeof window[data_layer_name] === "object")) {
                return true;
            }
            var i, s = document.getElementsByTagName("script");
            for (i = 0; i < s.length; i++) {
                if (s[i].src && s[i].src.indexOf("gtag/js") >= 0 && s[i].id && s[i].id.indexOf("utag") > -1) {
                    return true;
                }
            }
            if (typeof window[window.gtagRename] !== "function") {
                window[window.gtagRename] = function() {
                    window[data_layer_name].push(arguments);
                };
                var cross_track = u.toBoolean(u.data.cross_domain_flag),
                    cross_track_domains = u.data.cross_domains;
                if (cross_track && cross_track_domains !== "") {
                    window[window.gtagRename]("set", "linker", {
                        domains: cross_track_domains.split(","),
                        accept_incoming: true
                    });
                }
                window[window.gtagRename]("js", new Date());
            }
            return false;
        };
        u.loaderCallback = function() {
            utag.DB('send:1025:CALLBACK');
            u.callback();
            utag.DB('send:1025:CALLBACK:COMPLETE');
        };
        u.callback = function() {
            var thisDecision = {
                consent: {
                    ad_storage: u.data.ad_storage_consent,
                    analytics_storage: u.data.analytics_storage_consent,
                    wait_for_update: u.data.wait_for_update,
                    ad_user_data: u.data.ad_user_data,
                    ad_personalization: u.data.ad_personalization
                },
                url_passthrough: u.data.url_passthrough,
                ads_data_redaction: u.data.ads_data_redaction
            };
            if (!u.checkForDefaultDecision()) {
                u.o("set", "url_passthrough", thisDecision.url_passthrough);
                u.o("set", "ads_data_redaction", thisDecision.ads_data_redaction);
                u.o("consent", "default", thisDecision.consent);
            }
            if (!u.isDeepEqual(u.getPreviousDecision(), thisDecision)) {
                u.o("set", "url_passthrough", thisDecision.url_passthrough);
                u.o("set", "ads_data_redaction", thisDecision.ads_data_redaction);
                u.o("consent", "update", thisDecision.consent);
            }
            u.data.events.forEach(function(eventName) {
                u.sendEvent(eventName);
            });
        };
        u.sendEvent = function(eventName) {
            var eventData = {
                ad_storage: u.data.ad_storage_consent,
                analytics_storage: u.data.analytics_storage_consent,
                wait_for_update: u.data.wait_for_update,
                ad_user_data: u.data.ad_user_data,
                ad_personalization: u.data.ad_personalization,
            };
            utag.ut.merge(eventData, u.data[eventName], 1);
            u.o('consent', eventName, eventData);
        };
        u.map = {};
        u.extend = [];
        u.send = function(utag_event, data_layer) {
            if (u.ev[utag_event] || u.ev.all !== undefined) {
                var a, b, c, d, e, f;
                a = utag_event;
                b = data_layer;
                u.data = {
                    base_url: "https://www.googletagmanager.com/gtag/js",
                    tealium_consent: "false",
                    ad_storage_consent: b["google_ad_storage_consent"] || "display_ads",
                    analytics_storage_consent: b["google_analytics_storage_consent"] || "analytics",
                    ads_data_redaction: b["google_ads_data_redaction"] || "false",
                    url_passthrough: b["google_url_passthrough"] || "false",
                    wait_for_update: "",
                    ad_user_data: b["google_ad_user_data_consent"] || "display_ads",
                    ad_personalization: b["google_ad_personalization_consent"] || "display_ads",
                    custom: {},
                    events: []
                };
                Object.keys(utag.loader.GV(u.map)).forEach(function(mapping_key) {
                    if (data_layer[mapping_key] !== undefined && data_layer[mapping_key] !== '') {
                        var destinations = u.map[mapping_key].split(',');
                        destinations.forEach(function(parameter) {
                            u.mapFunc(parameter.split('.'), u.data, data_layer[mapping_key]);
                        });
                    } else {
                        var event_destinations = mapping_key.split(':');
                        if (event_destinations.length === 2 && String(data_layer[event_destinations[0]]) === String(event_destinations[1])) {
                            if (u.map[mapping_key]) {
                                u.data.events = u.data.events.concat(u.map[mapping_key].split(','));
                            }
                        }
                    }
                });
                utag.DB('send:1025:MAPPINGS');
                utag.DB(u.data);
                u.data.tealium_consent = u.toBoolean(u.data.tealium_consent);
                u.data.url_passthrough = u.toBoolean(u.data.url_passthrough);
                u.data.ads_data_redaction = u.toBoolean(u.data.ads_data_redaction);
                u.data.wait_for_update = Number(u.data.wait_for_update) || 0;
                u.data.ad_storage_consent = u.getConsentValue(u.data.ad_storage_consent);
                u.data.analytics_storage_consent = u.getConsentValue(u.data.analytics_storage_consent);
                u.data.ad_user_data = u.getConsentValue(u.data.ad_user_data);
                u.data.ad_personalization = u.getConsentValue(u.data.ad_personalization);
                u.scriptrequested = u.hasgtagjs();
                u.o = window[window.gtagRename];
                if (u.initialized) {
                    u.callback();
                } else {
                    u.initialized = true;
                    window.addEventListener("consent_updated", function() {
                        utag.view({
                            tealium_event: "consent_update_for_google_consent_mode"
                        }, null, ["1025"]);
                    });
                    if (!u.hasgtagjs()) {
                        u.scriptrequested = true;
                        utag.ut.gtagScriptRequested = true;
                        u.loader({
                            type: "script",
                            src: u.data.base_url,
                            cb: u.loaderCallback,
                            loc: "script",
                            id: "utag_1025",
                            attrs: {}
                        });
                    } else {
                        u.callback();
                    }
                }
            }
        };
        utag.o[loader].loader.LOAD(id);
    })("1025", "royalmail.main");
} catch (error) {
    utag.DB(error);
}
(function() {
    if (typeof utag != 'undefined' && !utag_condload) {
        utag.initcatch = true;
        for (var i in utag.loader.GV(utag.loader.cfg)) {
            var b = utag.loader.cfg[i];
            if (b.load != 4) {
                utag.initcatch = false;
                break
            };
            if (b.wait == 1) {
                utag.initcatch = false;
                break
            }
        };
        if (utag.initcatch) utag.handler.INIT();
    }
})();