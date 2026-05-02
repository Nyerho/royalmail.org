//tealium universal tag - utag.loader ut4.0.202605011123, Copyright 2026 Tealium.com Inc. All Rights Reserved.
(function(w) {
    if (typeof w.utag !== 'undefined' && typeof w.utag.e === 'object') {
        w.utag_events = w.utag.e;
        delete w.utag;
    }
}(window));
var utag_condload = false;
window.__tealium_twc_switch = false;
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
if (!utag_condload) {
    try {
        try {
            (function() {
                var extensionName = 'Extension UID: 466, \'Consent Cookie App to Webview Handshake\'';
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
        (function() {
            var c = ' ' + document.cookie;
            if (c.indexOf('split_segment=') < 0) {
                var r = parseInt((Math.random() * 100) + 1);
                var s = {
                    'segment_a': 50,
                    'segment_b': 50
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
                document.cookie = "split_segment=" + s + ";path=/;domain=" + location.hostname + ";expires=";
            }
        })();
    } catch (e) {
        console.log(e);
    }
}
if (typeof utag == "undefined" && !utag_condload) {
    var utag = {
        id: "royalmail.sendanitem",
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
                        c = 'utag_royalmail.sendanitem_' + a.id;
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
    utag.o['royalmail.sendanitem'] = utag;
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
        path: "//tags.tiqcdn.com/utag/royalmail/sendanitem/prod/",
        utid: "royalmail/sendanitem/202605011123",
        ignoreSessionStorage: false,
        ignoreLocalStorage: false,
        split_cookie: true
    };
    utag.cfg.v = utag.cfg.template + "202605011123";
    utag.cond = {
        269: 0,
        278: 0,
        287: 0,
        289: 0,
        291: 0,
        293: 0,
        294: 0
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
                case '269':
                    try {
                        c[269] |= (d['ut.env'].toString().indexOf('Tealium') > -1) || (d['dom.domain'].toString().indexOf('sendanitem-dev.storefeeder.com') > -1) || (d['dom.domain'].toString().indexOf('sendanitem-uat.storefeeder.com') > -1) || (d['dom.domain'].toString().indexOf('send.royalmail.com') > -1) || (d['dom.domain'].toString().indexOf('localhost') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '278':
                    try {
                        c[278] |= (d['dom.domain'].toString().toLowerCase() == 'send.royalmail.com'.toLowerCase() && d['dom.pathname'].toString().toLowerCase() == '/payment/thankyou'.toLowerCase()) || (d['dom.domain'].toString().toLowerCase() == 'sendanitem-dev.storefeeder.com'.toLowerCase() && d['dom.pathname'].toString().toLowerCase() == '/payment/thankyou'.toLowerCase()) || (d['dom.domain'].toString().toLowerCase() == 'sendanitem-uat.storefeeder.com'.toLowerCase() && d['dom.pathname'].toString().toLowerCase() == '/payment/thankyou'.toLowerCase())
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '287':
                    try {
                        c[287] |= (d['js_page.navigator.userAgent'].toString().toLowerCase().indexOf('RuxitSynthetic/1.0'.toLowerCase()) < 0) || (d['js_page.navigator.userAgent'].toString().indexOf('RuxitSynthetic/1.0') > -1 && typeof d['cp.teal_process_as'] != 'undefined' && d['cp.teal_process_as'] != '')
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '289':
                    try {
                        c[289] |= (d['productCategory'].toString().indexOf('Domestic') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '291':
                    try {
                        c[291] |= (d['dom.pathname'].toString().toLowerCase() == '/send/destination'.toLowerCase()) || (d['dom.pathname'].toString().toLowerCase() == '/send/sender'.toLowerCase()) || (d['dom.pathname'].toString().toLowerCase() == '/payment/processing'.toLowerCase()) || (d['dom.pathname'].toString().toLowerCase() == '/payment'.toLowerCase()) || (d['dom.pathname'].toString().toLowerCase() == '/payment/find'.toLowerCase())
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '293':
                    try {
                        c[293] |= (d['va.current_visit.properties.13017'].toString().toLowerCase() == 'true'.toLowerCase())
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '294':
                    try {
                        c[294] |= (d['dom.pathname'] == '/')
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
                    utag.DB('ext492, utag.gdpr.getSelectedCategories(): ' + utag.gdpr.getSelectedCategories());
                    b['consent_selectedCategoriesArray'] = utag.gdpr.getSelectedCategories();
                    b['consent_selectedCategoriesString'] = b['consent_selectedCategoriesArray'].toString();
                    utag.DB('ext492, consent_selectedCategoriesArray: ' + b['consent_selectedCategoriesArray']);
                    utag.DB('ext492, consent_selectedCategoriesString: ' + b['consent_selectedCategoriesString']);
                    b['consent_selectedCategoriesString'].indexOf('personalization'.toLowerCase()) > -1 ? b['consent_functional'] = 1 : b['consent_functional'] = 0;
                    utag.DB('ext492, consent_functional: ' + b['consent_functional']);
                    b['consent_selectedCategoriesString'].indexOf('analytics'.toLowerCase()) > -1 ? b['consent_performance'] = 1 : b['consent_performance'] = 0;
                    utag.DB('ext492, consent_performance: ' + b['consent_performance']);
                    b['consent_selectedCategoriesString'].indexOf('display_ads'.toLowerCase()) > -1 ? b['consent_advertising'] = 1 : b['consent_advertising'] = 0;
                    utag.DB('ext492, consent_advertising: ' + b['consent_advertising']);
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                utag.runonce = utag.runonce || {};
                utag.runonce.ext = utag.runonce.ext || {};
                if (typeof utag.runonce.ext[455] == 'undefined') {
                    utag.runonce.ext[455] = 1;
                    if (1) {
                        utag.data.cookieCMTimestamp = utag.gdpr.getCookieValues().ts;
                        var cookieTimestamp = parseInt(utag.data.cookieCMTimestamp);
                        var refreshTimestamp = utag.data["qp.timestamp"] || 1592902027000;
                        if (cookieTimestamp < refreshTimestamp && refreshTimestamp < (Date.now() * 1000) && utag.data["cp.utag_main__pn"] === "1") {
                            document.cookie = 'CONSENTMGR=; expires = Thu, 01 Jan 1970 00:00:00 GMT ;domain=royalmail.com';
                            delete utag.data["cp.CONSENTMGR"];
                            delete b["cp.CONSENTMGR"];
                            try {
                                window.__TEALIUM.adobe.target.css.remove()
                            } catch (e) {}
                            utag.gdpr.showExplicitConsent();
                            console.log("Shown Explicit Consent for Repermissioning");
                        }
                    }
                }
            } catch (e) {
                utag.DB(e)
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
                if (typeof b['crypto_dummy'] != 'undefined' && b['crypto_dummy'] != '') {
                    b['crypto_dummy'] = utag.ut.sha256.SHA256(b['crypto_dummy']).toString();
                }
            } catch (e) {}
        }, function(a, b) {
            try {
                if ((b['pageName'] == 'RM Send an Item>Basket' && b['consent_advertising'] == '1')) {
                    function validateEmail(mail) {
                        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
                            return true;
                        }
                        return false;
                    }

                    function captureEmail() {
                        var weightIsChecked = document.getElementsByName("confirmWeight")[0].checked,
                            nameIsChecked = document.getElementsByName("confirmTerms")[0].checked,
                            scraped_email = document.getElementsByName("purchaseEmail")[0].value;
                        if (scraped_email !== "" && validateEmail(scraped_email) && weightIsChecked && nameIsChecked) {
                            sessionStorage.setItem("as_send_email", scraped_email);
                        }
                    }
                    var element_pay_with_cc = document.querySelectorAll("[data-testid='pay-with-credit-card']")[0];
                    var element_pay_with_paypal = document.querySelectorAll("[data-testid='pay-with-paypal'")[0];
                    if (element_pay_with_cc) {
                        element_pay_with_cc.addEventListener("click", captureEmail, true);
                    }
                    if (element_pay_with_paypal) {
                        element_pay_with_paypal.addEventListener("click", captureEmail, true);
                    }
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            if (typeof(b.transactionProduct) == 'object' && b.transactionProduct.constructor != Array) {
                b.transactionProduct = [b.transactionProduct];
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
            try {
                utag.runonce = utag.runonce || {};
                utag.runonce.ext = utag.runonce.ext || {};
                if (typeof utag.runonce.ext[496] == 'undefined') {
                    utag.runonce.ext[496] = 1;
                    if (1) {
                        (function() {
                            window.tealiumEventTracker = window.tealiumEventTracker || {};
                            const originalView = utag.view;
                            utag.view = function(eventData) {
                                if (eventData ? .transactionID) {
                                    var eventID = JSON.stringify(eventData.pageName + "_" + eventData.transactionID);
                                    if (window.tealiumEventTracker[eventID]) {
                                        return;
                                    }
                                    window.tealiumEventTracker[eventID] = true;
                                }
                                originalView.apply(this, arguments);
                            }
                        })();
                    }
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
            try {
                if (1) {
                    try {
                        b['pageURL'] = b['dom.domain'] + b["dom.pathname"]
                    } catch (e) {}
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if (1) {
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
            if (typeof b.productQuantity === 'number') {
                b.productQuantity = "" + b.productQuantity;
            }
            if (typeof b.productPrice === 'number') {
                b.productPrice = "" + b.productPrice;
            }
        }, function(a, b) {
            try {
                if (1) {
                    b['pageApplicationName'] = 'SendAnItem'
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
            try {
                if ((typeof b['transactionTotal'] != 'undefined' && typeof b['transactionTotal'] != 'undefined' && b['transactionTotal'] != '')) {
                    try {
                        b['transactionTotal'] = b.transactionTotal.toString()
                    } catch (e) {}
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
                if (b['dom.domain'].toString().toLowerCase() == 'send.royalmail.com'.toLowerCase()) {
                    b['pageType'] = 'Responsive Web'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if (typeof b['surveyID'] != 'undefined' && b['surveyID'] != '') {
                    b['surveyEvent'] = '1'
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
        }, function(a, b) {
            try {
                if (typeof b['qp.cid'] != 'undefined' && b['qp.cid'] != '' || typeof b['pageCampaignID'] != 'undefined' && b['pageCampaignID'] != '' || typeof b['qp.CID'] != 'undefined' && b['qp.CID'] != '') {
                    b['cid_check'] = 'true'
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
                if ((typeof b['cp.acceptRMCookiePolicy'] == 'undefined' && b['dom.domain'].toString().indexOf('sendanitem-dev.storefeeder.com') > -1)) {
                    document.cookie = "acceptRMCookiePolicy=" + 'true' + ";path=/;domain=" + utag.cfg.domain + ";expires=";
                    b['cp.acceptRMCookiePolicy'] = 'true';
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if (typeof b['cp.CONSENTMGR'] != 'undefined') {
                    try {
                        b['cookieCMTimestamp'] = utag.gdpr.getCookieValues().ts
                    } catch (e) {};
                    try {
                        b['cookieCMPreferences'] = utag.gdpr.getSelectedCategories()
                    } catch (e) {}
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if (1) {
                    (function consent_datalayer() {
                        var category;
                        delete utag.data.cookieCMCategories;
                        if (utag.gdpr.getCookieValues().consent == "true" && utag.gdpr.getCookieValues().c1 !== undefined) {
                            for (i = 1; i <= utag.gdpr.getCategories().length; i++) {
                                var consentKey = "c" + i;
                                var consentValue = utag.gdpr.getCookieValues()[consentKey];
                                var consentPair;
                                if (i < utag.gdpr.getCategories().length) {
                                    consentPair = consentKey.concat(":" + consentValue + "|");
                                } else {
                                    consentPair = consentKey.concat(":" + consentValue);
                                }
                                if (typeof category !== 'undefined') {
                                    category += consentPair;
                                } else {
                                    category = consentPair;
                                }
                            }
                        }
                        if (category.indexOf(":0") == -1) {
                            utag.data.cookieCMCategories = "Explicit All";
                        } else {
                            utag.data.cookieCMCategories = category;
                        }
                        utag.DB("Consent Status: " + utag.data.cookieCMCategories);
                    })();
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b, c, d) {
            try {
                if (b['dom.pathname'].toString().toLowerCase() == '/payment/thankyou'.toLowerCase()) {
                    c = [b['productAttributesFormat'], b['productAttributesDestination']];
                    b['productAttributesString'] = c.join('|')
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((b['pageName'].toString().toLowerCase() == 'RM Send an Item>Collect>Exit Survey Form'.toLowerCase() && typeof b['formOption'] != 'undefined' && b['formOption'] != '') || (b['pageName'].toString().toLowerCase() == 'RM Send an Item>Send>Exit Survey Form'.toLowerCase() && typeof b['formOption'] != 'undefined' && b['formOption'] != '')) {
                    b['formOption'] = '';
                    b['formFreeText'] = ''
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
        }, function(a, b, c, d, e, f, g) {
            if (b['dom.domain'].toString().indexOf('send.royalmail.com') > -1 || b['dom.domain'].toString().indexOf('sendanitem-dev.storefeeder.com') > -1 || b['dom.domain'].toString().indexOf('sendanitem-uat.storefeeder.com') > -1) {
                d = b['dom.url'];
                if (typeof d == 'undefined') return;
                c = [{
                    '/payment/thankyou': 'Purchase - Domestic'
                }];
                var m = false;
                for (e = 0; e < c.length; e++) {
                    for (f in utag.loader.GV(c[e])) {
                        if (d.toString().indexOf(f) > -1) {
                            b['tag_purchased_product'] = c[e][f];
                            m = true
                        };
                    };
                    if (m) break
                };
                if (!m) b['tag_purchased_product'] = '';
            }
        }];
        utag.handler.cfg_extend = [{
            "end": 0,
            "bwq": 0,
            "alr": 0,
            "id": "492",
            "blr": 1
        }, {
            "blr": 1,
            "bwq": 0,
            "end": 0,
            "alr": 0,
            "id": "455"
        }, {
            "blr": 1,
            "bwq": 0,
            "end": 0,
            "alr": 0,
            "id": "479"
        }, {
            "id": "468",
            "end": 0,
            "bwq": 0,
            "alr": 0,
            "blr": 1
        }, {
            "blr": 1,
            "end": 0,
            "alr": 0,
            "bwq": 0,
            "id": "200"
        }, {
            "blr": 1,
            "id": "240",
            "end": 0,
            "alr": 0,
            "bwq": 0
        }, {
            "blr": 1,
            "end": 0,
            "alr": 0,
            "bwq": 0,
            "id": "496"
        }, {
            "id": "356",
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "blr": 0
        }, {
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "id": "461",
            "blr": 0
        }, {
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "id": "462",
            "blr": 0
        }, {
            "blr": 0,
            "bwq": 0,
            "end": 0,
            "alr": 1,
            "id": "11"
        }, {
            "id": "80",
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "blr": 0
        }, {
            "blr": 0,
            "id": "465",
            "end": 0,
            "alr": 1,
            "bwq": 0
        }, {
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "id": "246",
            "blr": 0
        }, {
            "id": "253",
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "blr": 0
        }, {
            "blr": 0,
            "id": "457",
            "end": 0,
            "alr": 1,
            "bwq": 0
        }, {
            "blr": 0,
            "id": "77",
            "end": 0,
            "alr": 1,
            "bwq": 0
        }, {
            "id": "3",
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "blr": 0
        }, {
            "id": "13",
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "blr": 0
        }, {
            "id": "67",
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "blr": 0
        }, {
            "blr": 0,
            "id": "68",
            "end": 0,
            "alr": 1,
            "bwq": 0
        }, {
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "id": "63",
            "blr": 0
        }, {
            "blr": 0,
            "id": "112",
            "end": 0,
            "alr": 1,
            "bwq": 0
        }, {
            "blr": 0,
            "id": "230",
            "end": 0,
            "alr": 1,
            "bwq": 0
        }, {
            "blr": 0,
            "bwq": 0,
            "end": 0,
            "alr": 1,
            "id": "170"
        }, {
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "id": "225",
            "blr": 0
        }, {
            "blr": 0,
            "end": 0,
            "alr": 1,
            "bwq": 0,
            "id": "226"
        }, {
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "id": "227",
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
            "blr": 0,
            "bwq": 0,
            "end": 0,
            "alr": 1,
            "id": "232"
        }, {
            "blr": 0,
            "id": "111",
            "end": 0,
            "alr": 1,
            "bwq": 0
        }, {
            "blr": 0,
            "bwq": 0,
            "end": 0,
            "alr": 1,
            "id": "259"
        }, {
            "id": "306",
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "blr": 0
        }, {
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "id": "316",
            "blr": 0
        }, {
            "blr": 0,
            "bwq": 0,
            "end": 0,
            "alr": 1,
            "id": "317"
        }, {
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "id": "318",
            "blr": 0
        }, {
            "id": "418",
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "blr": 0
        }, {
            "id": "420",
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "blr": 0
        }, {
            "id": "446",
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "blr": 0
        }, {
            "alr": 1,
            "end": 0,
            "bwq": 0,
            "id": "450",
            "blr": 0
        }, {
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "id": "454",
            "blr": 0
        }, {
            "blr": 0,
            "id": "456",
            "bwq": 0,
            "end": 0,
            "alr": 1
        }, {
            "blr": 0,
            "end": 0,
            "alr": 1,
            "bwq": 0,
            "id": "459"
        }, {
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "id": "464",
            "blr": 0
        }, {
            "id": "467",
            "end": 0,
            "bwq": 0,
            "alr": 1,
            "blr": 0
        }, {
            "blr": 0,
            "bwq": 0,
            "end": 0,
            "alr": 1,
            "id": "482"
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
                "553": {
                    load: 4,
                    tcat: 3,
                    send: 1,
                    v: 202411141123,
                    wait: 0,
                    tid: 7143
                },
                "523": {
                    load: utag.cond[278],
                    tcat: 3,
                    send: 1,
                    v: 202511251510,
                    wait: 1,
                    tid: 4049
                },
                "534": {
                    load: (((utag.cond[287]) && !(utag.cond[291]))),
                    tcat: 3,
                    send: 1,
                    v: 202510160823,
                    wait: 1,
                    tid: 20064
                },
                "547": {
                    load: (((utag.cond[278]) && (utag.cond[289]))),
                    tcat: 3,
                    send: 1,
                    v: 202509041244,
                    wait: 1,
                    tid: 6037
                },
                "550": {
                    load: 1,
                    tcat: 3,
                    send: 1,
                    v: 202511251510,
                    wait: 1,
                    tid: 20010
                },
                "551": {
                    load: (!(utag.cond[278])),
                    tcat: 3,
                    send: 1,
                    v: 202410151529,
                    wait: 1,
                    tid: 18048
                },
                "552": {
                    load: ((utag.cond[278])),
                    tcat: 3,
                    send: 1,
                    v: 202511251510,
                    wait: 1,
                    tid: 18048
                },
                "554": {
                    load: (!(utag.cond[278])),
                    tcat: 3,
                    send: 1,
                    v: 202505061145,
                    wait: 1,
                    tid: 1228
                },
                "555": {
                    load: ((utag.cond[278])),
                    tcat: 3,
                    send: 1,
                    v: 202505061145,
                    wait: 1,
                    tid: 1228
                },
                "557": {
                    load: 1,
                    tcat: 3,
                    send: 1,
                    v: 202501141458,
                    wait: 1,
                    tid: 25016
                },
                "558": {
                    load: (((utag.cond[278]) && (utag.cond[293]))),
                    tcat: 3,
                    send: 1,
                    v: 202601221427,
                    wait: 1,
                    tid: 20201
                },
                "560": {
                    load: ((utag.cond[294])),
                    tcat: 3,
                    send: 1,
                    v: 202508261315,
                    wait: 1,
                    tid: 6037
                }
            };
            utag.loader.cfgsort = ["553", "523", "534", "547", "550", "551", "552", "554", "555", "557", "558", "560"];
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
                "display_ads": {
                    "enabled": "1",
                    "id": 3
                },
                "email": {
                    "enabled": "1",
                    "id": 5
                },
                "search": {
                    "id": 4,
                    "enabled": "1"
                },
                "personalization": {
                    "enabled": "1",
                    "id": 6
                },
                "big_data": {
                    "enabled": "1",
                    "id": 8
                },
                "mobile": {
                    "id": 12,
                    "enabled": "1"
                },
                "monitoring": {
                    "id": 14,
                    "enabled": "1"
                },
                "misc": {
                    "enabled": "1",
                    "id": 9
                },
                "uncategorized": {
                    "enabled": "0",
                    "id": 16
                },
                "affiliates": {
                    "id": 2,
                    "enabled": "1"
                },
                "social": {
                    "enabled": "1",
                    "id": 7
                },
                "crm": {
                    "enabled": "1",
                    "id": 15
                },
                "cdp": {
                    "id": 11,
                    "enabled": "1"
                },
                "analytics": {
                    "enabled": "1",
                    "id": 1
                },
                "engagement": {
                    "enabled": "1",
                    "id": 13
                },
                "cookiematch": {
                    "enabled": "1",
                    "id": 10
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
            if (utag.data) {
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
            utag.gdpr.processQueue(response);
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
                    utag.gdpr.merge(data, event.data);
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
        shouldTagFire: function() {
            if (utag.gdpr.typeOf(utag.gdpr.trackUIDs) !== "array") return true;
            var lc = utag.loader.cfg,
                cs = utag.gdpr.getConsentState(),
                uid = utag.gdpr.trackUIDs.shift();
            if (utag.gdpr.typeOf(uid) === "undefined") return true;
            utag.DB("Consent Manager: Applying consent: " + uid);
            var csTYpe = utag.gdpr.typeOf(cs);
            var tag = lc[uid];
            var blockedTagLookup = utag.gdpr.dns ? utag.gdpr.dns.getBlockedDnsTagLookup() : {};
            if (!utag.gdpr.omittedTags[uid] && tag.load && tag.send && tag.tcat !== 0) {
                if ((csTYpe === "array" && cs[tag.tcat - 1].ct == "1") || (csTYpe === "number" && cs == 1) || parseInt(blockedTagLookup[uid]) === 1) {
                    utag.DB("Consent Manager: Applying consent: " + uid + " allowed to send");
                    return false;
                }
            } else if ((utag.gdpr.omittedTags[uid] || tag.tcat == 0) && tag.load) {
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
                } else {
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
            } else {
                utag.gdpr.setConsentValue(true);
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
    utag.preOld = utag.pre;
    utag.pre = function() {
        utag.preOld();
        if (utag.gdpr.consent_prompt.isEnabled === true && !(utag.cond[269])) {
            utag.gdpr.consent_prompt.isEnabled = false;
        }
        if (utag.gdpr.doNotSell.isEnabled === true && !(1)) {
            utag.gdpr.doNotSell.isEnabled = false;
        }
        utag.pre = utag.preOld;
    };
    utag.gdpr.consent_prompt.languages = {
        "en": {
            "custom_tokens": {
                "privacy_policy_url": "https://www.royalmail.com/privacy-notice",
                "letmechoose": "Let me choose",
                "decline_button": "Reject all"
            },
            "common_tokens": {
                "title": "Your Royal Mail cookie preferences",
                "confirmation_button": "Accept",
                "message": "We use cookies to help give you the best possible experience on our site:\n<br>1. “Strictly necessary” cookies are essential in supporting the website and are always on\n<br>2. “Functional” cookies boost the website’s performance\n<br>3. “Performance” cookies support site performance analysis\n<br>4. “Targeting” cookies help us personalise content and tailor ads for you\n<p>By clicking “Accept” you agree to our use of cookies as detailed in our <a href=\"http://www.royalmail.com/cookies-policy\"  tabindex=\"1\">Cookies policy</a>. To enable or disable specific types of cookie, click “Let me choose”.<p/>\n"
            },
            "isDefault": "true"
        }
    };
    utag.gdpr.consent_prompt.content.css = "#__tealiumGDPRecModal {    display: none;}#__tealiumGDPRecModal .privacy_prompt {    width: 100vw;    height: 100vh;    top: 0;    left: 0;    background: rgba(0, 0, 0, 0.35);    position: fixed;    z-index: 2000;    font-family: \'chevin-medium\', \'ChevinStd-Medium\', Helvetica Neue, Helvetica, Arial, \"Nimbus Sans L\", sans-serif;}#__tealiumGDPRecModal .privacy_prompt_container {    position: absolute;    width: 600px;    max-width: 100%;    max-height: 95vh;    overflow: auto;    text-align: left;    background-color: #FFF;    color: #444;    font-size: 14px;    z-index: 1000;    padding: 10px 10px 10px 10px;    margin: 0;    top: 50%;    left: 50%;    margin-right: -50%;    transform: translate(-50%, -50%);    border-radius: 10px;}#__tealiumGDPRecModal .privacy_prompt a {    text-decoration: none;    color: #0077bf;    font-size: 16px;}#__tealiumGDPRecModal .privacy_prompt a:focus {    outline: 2px solid #0b2f42 !important;    outline-offset: 2px !important;    color: #0b2f42 !important;}#__tealiumGDPRecModal .privacy_prompt_content {    padding-left: 30px;    padding-right: 30px;}#__tealiumGDPRecModal .privacy_prompt_content p {    font-family: \'chevin-medium\', \'ChevinStd-Medium\', \'chevin\', \'chevin-light\', Helvetica Neue, Helvetica, Arial, \"Nimbus Sans L\", sans-serif;    font-weight: 500;    font-size: 16px !important;    line-height: 22px !important;    color: #6C6C6C;    margin: 1em 0 0 0;}#__tealiumGDPRecModal .privacy_prompt h1 {    font-size: 2.6em !important;    color: #000000;    font-weight: 700;    font-family: \'chevin-medium\', \'chevin\', \'PFDINTextStd-Bold\', \'ChevinL\', \'chevin-bold\', \'chevin-demibold\', Helvetica Neue, Helvetica, Arial, sans-serif !important;    -webkit-font-smoothing: antialiased;    -moz-osx-font-smoothing: grayscale;    border-bottom: 2px dotted #949496 !important;    padding-top: 14px !important;    padding-bottom: 14px !important;    line-height: 1.2 !important;    margin: 0.5em 0 0;}#__tealiumGDPRecModal .privacy_prompt .option {    margin: 10px 0;    color: #444;}#__tealiumGDPRecModal .privacy_prompt_footer {    padding: 20px 30px !important;    overflow: auto;    display: inline-block !important;}#__tealiumGDPRecModal button {    box-shadow: none;}#__tealiumGDPRecModal button:hover {    box-shadow: none;    background: none;    border: none;    border-radius: 0;}#__tealiumGDPRecModal .privacy_prompt_footer .second_button {    text-align: center;    margin-left: 20px;    color: #0668a4 !important;    border: 2px solid #0668a4 !important;    font-size: 16px !important;    padding: 11px 30px !important;    min-width: 30px !important;    cursor: pointer;    font-weight: 600;    display: initial;    border-radius: 0 !important;    background: none !important;    box-shadow: none !important;    line-height: normal !important;    font-family: \'chevin-medium\', \'ChevinStd-Medium\', \'chevin\', \'chevin-light\', Helvetica Neue, Helvetica, Arial, \'Nimbus Sans L\', sans-serif !important;    vertical-align: unset !important;}#__tealiumGDPRecModal .privacy_prompt_footer .second_button:hover {    color: #259cdb !important;    border-color: #259cdb !important;    transform: translateY(-2px) !important;    -webkit-transition: .2s !important;    transition: .2s !important;    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.30) !important;}#__tealiumGDPRecModal .privacy_prompt_footer .second_button:focus {    outline: none !important;    color: #0B2f42 !important;    border-color: #0B2f42 !important;    transform: translateY(-2px) !important;    -webkit-transition: .2s !important;    transition: .2s !important;    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.30) !important;}#__tealiumGDPRecModal .privacy_prompt .mobile-hide {    display: block;}#__tealiumGDPRecModal .privacy_prompt a {    text-decoration: none !important;    border-bottom: 1px solid #6c6c6c !important;    padding: 0 0 2px 0;    color: #6c6c6c;    font-family: \'chevin-medium\', \'ChevinStd-Medium\', \'chevin\', \'chevin-light\', Helvetica Neue, Helvetica, Arial, \'Nimbus Sans L\', sans-serif !important;    font-size: 16px !important;    line-height: 22px !important;}#__tealiumGDPRecModal .privacy_prompt_footer .button {    font-size: 16px !important;    padding: 13px 30px !important;    min-width: 30px !important;    text-align: center !important;    background-color: #259cdb !important;    color: #FFF;    cursor: pointer;    font-weight: 600;    font-family: \'chevin-medium\', \'ChevinStd-Medium\', \'chevin\', \'chevin-light\', Helvetica Neue, Helvetica, Arial, \'Nimbus Sans L\', sans-serif !important;    display: initial;    border: 0 !important;    box-shadow: none !important;    line-height: normal !important;    vertical-align: unset !important;    width: auto !important;}#__tealiumGDPRecModal .privacy_prompt_footer .primaryConsentCta {    background: linear-gradient(90deg,#DA202A 2%,#FF4242 95%);    border-radius: 30px;    padding: 15px 30px !important;}#__tealiumGDPRecModal .privacy_prompt_footer .primaryConsentCta.right {    margin-left: 20px;}#__tealiumGDPRecModal .privacy_prompt a {    color: #DA202A;}#__tealiumGDPRecModal .privacy_prompt_footer .button:hover {    transform: translateY(-2px) !important;    -webkit-transition: .2s !important;    transition: .2s !important;    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.30) !important;    background: linear-gradient(90deg,#DA202A 2%,#FF4242 95%);}#__tealiumGDPRecModal .privacy_prompt_footer .button:focus {    outline: none !important;    border: 2px solid #0B2f42 !important;    transform: translateY(-2px) !important;    -webkit-transition: .2s !important;    transition: .2s !important;    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.30) !important;}#__tealiumGDPRecModal .privacy_prompt .button.left {    float: left;}#__tealiumGDPRecModal .privacy_prompt.explicit_consent>.privacy_prompt_container>.close_btn_thick {    position: absolute;    display: block;    top: 20px;    right: 20px;    text-decoration: none;    text-shadow: 0 1px 0 #fff;    color: #000000;    font: 18px/100% Arial, sans-serif !important;    font-weight: 700;    cursor: pointer;}#__tealiumGDPRecModal .privacy_prompt.explicit_consent>.privacy_prompt_container>.close_btn_thick:focus {    outline: 2px solid #0b2f42 !important;    outline-offset: 2px !important;    color: #0b2f42 !important;}#__tealiumGDPRecModal .privacy_prompt.explicit_consent>.privacy_prompt_container>.close_btn_thick:after {    content: \"\\2715\";}#__tealiumGDPRecModal .privacy_prompt table {    padding: 0px;    border-collapse: collapse;}#__tealiumGDPRecModal .privacy_prompt table tr {}#__tealiumGDPRecModal .privacy_prompt table th {    background-color: #FAFAFA;    border-bottom: 1px solid #EEE;    margin: 0px;    padding: 5px 8px;    font-weight: 400;    text-align: center;}#__tealiumGDPRecModal .privacy_prompt table td {    vertical-align: top;    padding: 10px 8px 5px 8px;}#__tealiumGDPRecModal .privacy_prompt table tr td:first-child {    min-width: 120px;    font-weight: 600;    color: #666;}#__tealiumGDPRecModal .privacy_prompt table tr td:last-child {    text-align: center;    min-width: 100px;}#__tealiumGDPRecModal .privacy_prompt input[type=\"checkbox\"].toggle {    opacity: 0;    position: absolute;    left: -99999px;}#__tealiumGDPRecModal .privacy_prompt input[type=\"checkbox\"].toggle+label {    height: 24px;    line-height: 24px;    background-color: #ccc;    padding: 0px 16px;    border-radius: 16px;    display: inline-block;    position: relative;    cursor: pointer;    -moz-transition: all 0.25s ease-in;    -o-transition: all 0.25s ease-in;    -webkit-transition: all 0.25s ease-in;    transition: all 0.25s ease-in;}#__tealiumGDPRecModal .privacy_prompt input[type=\"checkbox\"].toggle+label:before,.privacy_prompt input[type=\"checkbox\"].toggle+label:hover:before {    content: \" \";    position: absolute;    top: 2px;    left: 2px;    width: 26px;    height: 20px;    background: #fff;    z-index: 2;    -moz-transition: all 0.25s ease-in;    -o-transition: all 0.25s ease-in;    -webkit-transition: all 0.25s ease-in;    transition: all 0.25s ease-in;    -moz-border-radius: 14px;    -webkit-border-radius: 14px;    border-radius: 14px;}#__tealiumGDPRecModal .privacy_prompt input[type=\"checkbox\"].toggle+label .off,.privacy_prompt input[type=\"checkbox\"].toggle+label .on {    color: #fff;}#__tealiumGDPRecModal .privacy_prompt input[type=\"checkbox\"].toggle+label .off {    margin-left: 20px;    display: inline-block;}#__tealiumGDPRecModal .privacy_prompt input[type=\"checkbox\"].toggle+label .on {    display: none;}#__tealiumGDPRecModal .privacy_prompt input[type=\"checkbox\"].toggle:checked+label .off {    display: none;}#__tealiumGDPRecModal .privacy_prompt input[type=\"checkbox\"].toggle:checked+label .on {    margin-right: 20px;    display: inline-block;}#__tealiumGDPRecModal .privacy_prompt input[type=\"checkbox\"].toggle:checked+label,.privacy_prompt input[type=\"checkbox\"].toggle:focus:checked+label {    background-color: #3278c0;}#__tealiumGDPRecModal .privacy_prompt input[type=\"checkbox\"].toggle:checked+label:before,.privacy_prompt input[type=\"checkbox\"].toggle:checked+label:hover:before,.privacy_prompt input[type=\"checkbox\"].toggle:focus:checked+label:before,.privacy_prompt input[type=\"checkbox\"].toggle:focus:checked+label:hover:before {    background-position: 0 0;    top: 2px;    left: 100%;    margin-left: -28px;}#__tealiumGDPRecModal .privacy_prompt input[type=\"checkbox\"].toggle+label {    overflow: hidden;    text-overflow: ellipsis;    max-height: 24px;    height: 24px;}.consent_buttons {    display: inline-block;}.let_me_choose_link {    margin-left: 30px;    display: inline-block;}.let_me_choose_link div {    display: inline;}/* MEDIA QUERIES */@media (max-width: 639px) {    .let_me_choose_link {        margin-left: auto;        margin-right: auto;        display: block;        margin-top: 30px;    }    .let_me_choose_link div {        display: block;        text-align: center;    }    #__tealiumGDPRecModal .privacy_prompt_container {        width: 85%;        margin: 0 auto;        padding-left: 0;        padding-right: 0;    }    #__tealiumGDPRecModal .privacy_prompt_content {        padding-left: 2em;        padding-right: 3em;    }    #__tealiumGDPRecModal .privacy_prompt_content h1 {        font-size: 6vw;    }    #__tealiumGDPRecModal .privacy_prompt_footer {        padding: 20px 2em 30px 2em !important;        display: block !important;    }    #__tealiumGDPRecModal .privacy_prompt_footer .primaryConsentCta {        margin-right: 10px;    }    #__tealiumGDPRecModal .privacy_prompt_footer .primaryConsentCta.right {        margin-right: 0;        margin-left: 10px;    }    .consent_buttons {        display: block;        width: 290px;        margin-left: auto;        margin-right: auto;    }}@media (max-width: 568px) {    #__tealiumGDPRecModal .privacy_prompt_content {        padding-left: 2em;        padding-right: 2em;    }    #__tealiumGDPRecModal .privacy_prompt_content h1 {        font-size: 8.25vw !important;    }    #__tealiumGDPRecModal .privacy_prompt_footer {        padding: 20px 2em 30px 2em !important;    }}@media (max-width: 330px) {    #__tealiumGDPRecModal .privacy_prompt_container {        width: 90%;    }    #__tealiumGDPRecModal .privacy_prompt_content h1 {        font-size: 8.55vw !important;    }    #__tealiumGDPRecModal .privacy_prompt_content {        padding: 0 2em 0 2em !important;    }    #__tealiumGDPRecModal .privacy_prompt_footer {        padding: 20px 2em 30px 2em !important;    }}";
    utag.gdpr.consent_prompt.content.html = "<div class=\"privacy_prompt explicit_consent\">    <div class=\"privacy_prompt_container\" aria-modal=\"true\" role=\"dialog\" aria-labelledby=\"explicit_consent_title\">        <div class=\"privacy_prompt_content\">            <h1 id=\"explicit_consent_title\">{{title}}</h1>            <p>{{message}}</p>            <div class=\"option_set\" style=\"display: none;\">                <div class=\"option\">                    <input type=\"radio\" class=\"consentRadioButton\" id=\"privacy_pref_optin\" name=\"privacy_pref\"                        value=\"optin\">                    <label for=\"privacy_pref_optin\">{{opt_in}}</label>                </div>                <div class=\"option\">                    <input type=\"radio\" class=\"consentRadioButton\" id=\"privacy_pref_optout\" name=\"privacy_pref\"                        value=\"optout\">                    <label for=\"privacy_pref_optout\">{{opt_out}}</label>                </div>            </div>        </div>        <div class=\"privacy_prompt_footer\">            <div class=\"consent_buttons\">                <button type=\"button\" id=\"consent_prompt_submit\" class=\"button left primaryConsentCta\"                    tabindex=\"2\">{{confirmation_button}}</button>                <button type=\"button\" id=\"consent_prompt_decline\" class=\"button right primaryConsentCta\"                    tabindex=\"3\">{{decline_button}}</button>            </div>            <div class=\"let_me_choose_link\">                <div>                    <a id=\"let_me_choose\" href=\"#\" tabindex=\"4\">{{letmechoose}}</a>                </div>            </div>        </div>    </div></div>";
    utag.gdpr.consent_prompt.content.js = "var cookie_page=utag.data['dom.pathname'].match(/cookie-policy|cookies-policy|privacy-notice|cookiepolicy|cookies-policy-app/);if(!cookie_page){var popup=document.getElementById(\"__tealiumGDPRecModal\");popup.style.display=\"block\";}(function consent_prompt(){var $el=document.getElementById(\"consent_prompt_submit\"),$modal=document.getElementById(\"__tealiumGDPRecModal\"),$closeBtn=$modal.getElementsByClassName(\"close_btn_thick\")[0],$chooseBtn=document.getElementById(\"let_me_choose\"),$privacy_pref_optin=document.getElementById(\"privacy_pref_optin\"),$privacy_pref_optout=document.getElementById(\"privacy_pref_optout\"),$decline=document.getElementById(\"consent_prompt_decline\"),$focusableEls=$modal.querySelectorAll('.close_btn_thick, a[href]:not([disabled]), button:not([disabled]), input[type=\"radio\"]:not([disabled]), input[type=\"checkbox\"]:not([disabled])'),$firstFocusableEl=$focusableEls[0],$lastFocusableEl=$focusableEls[$focusableEls.length-1],KEYCODE_TAB=9;$modal.addEventListener('keydown',function(e){var isTabPressed=(e.key==='Tab'||e.keyCode===KEYCODE_TAB);if(!isTabPressed){return;}if(e.shiftKey){if(document.activeElement===$firstFocusableEl){$lastFocusableEl.focus();e.preventDefault();}}else{if(document.activeElement===$lastFocusableEl){$firstFocusableEl.focus();e.preventDefault();}}});var consentState=utag.gdpr.getConsentState();if(typeof consentState===\"number\"){if(consentState===1){$privacy_pref_optin.checked=true;}else if(consentState===-1){$privacy_pref_optout.checked=true;}}else{$privacy_pref_optin.checked=true;}var callBack=function(){if(this.id==='consent_prompt_submit'){$privacy_pref_optin.checked=true;$privacy_pref_optout.checked=false;}else if(this.id==='consent_prompt_decline'){$privacy_pref_optin.checked=false;$privacy_pref_optout.checked=true;document.cookie=\"user_allowed_save_cookie=\"+'%7B%221%22%3A1%7D'+\";path=/;domain=.royalmail.com;expires=\";}if($privacy_pref_optin.checked){utag.gdpr.setConsentValue(1);}else if($privacy_pref_optout.checked){var cats={1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:1,};utag.gdpr.setPreferencesValues(cats);}else{return;}closePrompt();};var closePrompt=function(){$modal.style.display=\"none\";};var letMeChoose=function(event){event.preventDefault();closePrompt();utag.gdpr.showConsentPreferences();};if(document.addEventListener){$el.addEventListener(\"click\",callBack,false);$decline.addEventListener(\"click\",callBack,false);$chooseBtn.addEventListener(\"click\",letMeChoose,false);}else if(document.attachEvent){$el.attachEvent(\"click\",callBack);$decline.addEventListener(\"click\",callBack,false);$chooseBtn.attachEvent(\"click\",letMeChoose);}else{$el.onclick=callBack;$decline.addEventListener(\"click\",callBack,false);$chooseBtn.onclick=letMeChoose;}}());";
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
            "common_tokens": {
                "message": "We use cookies to help give you the best possible experience on our site. These support site navigation, login, analysis of site performance, personalisation of content and ads, live chat, and shopping baskets features. Some are necessary for our\nsite to function, others are optional but could impact the features we offer.\n<br><br>\nBy clicking on the below selectors you can set consent preferences for each category of cookies. Choosing not to enable cookies may impact your experience of the\nsite and the services we are able to offer. To find out more about how we use cookies, visit our <a href=\"http://www.royalmail.com/cookies-policy\" data-di-id=\"di-id-33b25e8b-49c739e7\">Cookies policy</a>.",
                "confirmation_button": "Save preferences",
                "description": "Description",
                "yes": "On",
                "category": "Category",
                "title": "Your Royal Mail Cookie Preferences",
                "no": "Off",
                "status": "Status"
            },
            "categories": {
                "uncategorized": {
                    "notes": "",
                    "name": ""
                },
                "crm": {
                    "name": "Strictly necessary<span class=\"toTheRight\">Always on</span>",
                    "notes": "Strictly necessary cookies are used to enable the basic functions of this website like security.  As these cookies are essential, they cannot be switched off."
                },
                "social": {
                    "name": "",
                    "notes": ""
                },
                "affiliates": {
                    "notes": "",
                    "name": ""
                },
                "cdp": {
                    "notes": "",
                    "name": ""
                },
                "engagement": {
                    "notes": "",
                    "name": ""
                },
                "cookiematch": {
                    "notes": "",
                    "name": ""
                },
                "analytics": {
                    "notes": "Performance cookies allow us to update this website to cater for user preferences and improve performance. They collect information about how this website is used, e.g. which pages users visit most often and where error messages are delivered. These typically collect and process information at an aggregated and often anonymous level.",
                    "name": "Performance"
                },
                "big_data": {
                    "notes": "",
                    "name": ""
                },
                "personalization": {
                    "notes": "Functional cookies allow this website to remember the choices you make e.g., your username, log in details, language preferences and any customisations you make to website pages during your visit. They are used to provide features and services specific to individual users.",
                    "name": "Functional"
                },
                "search": {
                    "notes": "",
                    "name": ""
                },
                "email": {
                    "notes": "",
                    "name": ""
                },
                "display_ads": {
                    "notes": "These cookies do things like show you content and promotions that are relevant to you while browsing the Royal Mail Group and other websites, allow us to track sites you’ve visited beforehand, and help us assess the effectiveness of our marketing on other websites. It helps to limit the number of times those adverts are served to you and measure the effectiveness of campaigns. Switching off these cookies won’t reduce the number of promotions you see but will mean they are less personalised.",
                    "name": "Targeting or advertising cookies"
                },
                "monitoring": {
                    "name": "",
                    "notes": ""
                },
                "mobile": {
                    "name": "",
                    "notes": ""
                },
                "misc": {
                    "notes": "",
                    "name": ""
                }
            },
            "isDefault": "true",
            "custom_tokens": {
                "privacy_policy_url": "https://www.royalmail.com/privacy-notice",
                "acceptall": "Accept all",
                "radioyes": "Yes",
                "radiono": "No"
            }
        }
    };
    utag.gdpr.preferences_prompt.content.css = "#__tealiumGDPRcpPrefs .privacy_prompt {    width: 100vw;    height: 100vh;    top: 0;    left: 0;    background: rgba(0, 0, 0, 0.35);    position: fixed;    z-index: 2000;    font-family: \'chevin-medium\', \'ChevinStd-Medium\', Helvetica, Arial, \"Nimbus Sans L\", sans-serif;}#__tealiumGDPRcpPrefs .privacy_prompt_container {    position: absolute;    width: 570px;    max-width: 100%;    max-height: 95vh;    overflow: auto;    text-align: left;    background-color: #FFF;    color: #444;    font-size: 14px;    z-index: 1000;    padding: 10px 10px 10px 10px;    margin: 0;    top: 50%;    left: 50%;    margin-right: -50%;    transform: translate(-50%, -50%);    overflow-x: hidden;    border-radius: 10px;}#__tealiumGDPRcpPrefs .privacy_prompt a {    text-decoration: none;    border-bottom: 1px solid #6c6c6c !important;    padding: 0 0 2px 0;    color: #DA202A;    /* font-weight: 600; */    font-size: 16px !important;    line-height: 22px !important;    font-family: \'chevin-medium\', \'ChevinStd-Medium\', \'chevin\', \'chevin-light\', Helvetica Neue, Helvetica, Arial, \'Nimbus Sans L\', sans-serif !important;}#__tealiumGDPRcpPrefs .privacy_prompt a:focus {    outline: 2px solid #0b2f42 !important;    outline-offset: 2px !important;    color: #0b2f42 !important;}#__tealiumGDPRcpPrefs .privacy_prompt_content {    padding-left: 3em;    padding-right: 3em;}#__tealiumGDPRcpPrefs .privacy_prompt_content p {    font-size: 16px !important;    line-height: 22px !important;    color: #6c6c6c;    font-family: \'chevin-medium\', \'ChevinStd-Medium\', \'chevin\', \'chevin-light\', Helvetica Neue, Helvetica, Arial, \"Nimbus Sans L\", sans-serif !important;    margin: 1em 0 0 0;}#__tealiumGDPRcpPrefs .privacy_prompt h1 {    font-size: 2.7em !important;    color: #000000;    font-weight: 700;    font-family: \'chevin-medium\', \'chevin\', \'PFDINTextStd-Bold\', \'ChevinL\', \'chevin-bold\', \'chevin-demibold\', Helvetica Neue, Helvetica, Arial, sans-serif !important;    -webkit-font-smoothing: antialiased;    -moz-osx-font-smoothing: grayscale;    border-bottom: 2px dotted #949496;    padding-top: 14px !important;    padding-bottom: 14px !important;    line-height: 1.2 !important;    margin: 0.75em 0 0;}#__tealiumGDPRcpPrefs .privacy_prompt .option {    margin: 10px 0px;    color: #444;}#__tealiumGDPRcpPrefs .privacy_prompt .option div.title {    font-family: \'chevin-medium\', \'chevin\', \'PFDINTextStd-Bold\', \'ChevinL\', \'chevin-bold\', \'chevin-demibold\', Helvetica Neue, Helvetica, Arial, sans-serif !important;    -webkit-font-smoothing: antialiased;    -moz-osx-font-smoothing: grayscale;    color: #000000;    font-weight: 700;    font-size: 17px !important;    margin: 25px 0 5px;}#__tealiumGDPRcpPrefs .privacy_prompt .option div.description {    font-size: 16px !important;    line-height: 22px !important;    color: #6c6c6c;    margin-top: 10px;    margin-bottom: 15px;    font-family: \'chevin-medium\', \'ChevinStd-Medium\', \'chevin\', \'chevin-light\', Helvetica Neue, Helvetica, Arial, \"Nimbus Sans L\", sans-serif !important;}#__tealiumGDPRcpPrefs .privacy_prompt_footer {    padding: 20px 3em 30px 3em;    display: inline-block;}#__tealiumGDPRcpPrefs .hide_error {    display: none;}#__tealiumGDPRcpPrefs .privacy_prompt_footer #error_message p {    font-size: 16px !important;    font-weight: 600;    color: #da202a;    font-family: \'chevin-medium\', \'ChevinStd-Medium\', \'chevin\', \'chevin-light\', Helvetica Neue, Helvetica, Arial, \'Nimbus Sans L\', sans-serif !important;    margin-top: 1em;    margin-bottom: 1em;}#__tealiumGDPRcpPrefs .privacy_prompt_footer .disabled {    opacity: 1 !important;    pointer-events: auto !important;}#__tealiumGDPRcpPrefs button {    box-shadow: none;}#__tealiumGDPRcpPrefs button:hover {    box-shadow: none;    background: none;    border: none;    border-radius: 0;}#__tealiumGDPRcpPrefs .privacy_prompt_footer .button {    text-align: center !important;    background-color: #259cdb !important;    color: #ffffff !important;    font-size: 16px !important;    padding: 13px 30px !important;    min-width: 30px !important;    cursor: pointer;    font-weight: 600;    display: initial;    user-select: none;    font-family: \'chevin-medium\', \'ChevinStd-Medium\', \'chevin\', \'chevin-light\', Helvetica Neue, Helvetica, Arial, \'Nimbus Sans L\', sans-serif !important;    border: 0 !important;    border-radius: 0;    box-shadow: none !important;    line-height: normal !important;    vertical-align: unset !important;    width: auto !important;}#__tealiumGDPRcpPrefs .privacy_prompt_footer .button:hover {    transform: translateY(-2px);    -webkit-transition: .2s !important;    transition: .2s !important;    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.30) !important;    background: linear-gradient(90deg,#DA202A 2%,#FF4242 95%);}#__tealiumGDPRcpPrefs .privacy_prompt_footer .button:focus {    outline: none !important;    border: 2px solid #0B2f42 !important;    padding: 11px 28px !important;    transform: translateY(-2px) !important;    -webkit-transition: .2s !important;    transition: .2s !important;    /* background-image: linear-gradient(to right, #259cdb, #1ba8f4) !important; */    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.30) !important;}#__tealiumGDPRcpPrefs .privacy_prompt_footer .second_button {    text-align: center !important;    margin-left: 15px !important;    color: #0668a4 !important;    border: 2px solid #0668a4 !important;    font-size: 16px !important;    padding: 11px 60px !important;    min-width: 30px;    cursor: pointer;    font-weight: 600;    display: initial;    user-select: none;    font-family: \'chevin-medium\', \'ChevinStd-Medium\', \'chevin\', \'chevin-light\', Helvetica Neue, Helvetica, Arial, \'Nimbus Sans L\', sans-serif !important;    border-radius: 0 !important;    background: none !important;    box-shadow: none !important;    line-height: normal !important;    vertical-align: unset !important;}#__tealiumGDPRcpPrefs .privacy_prompt_footer .second_button:hover {    color: #259cdb !important;    border-color: #259cdb !important;    transform: translateY(-2px) !important;    -webkit-transition: .2s !important;    transition: .2s !important;    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.30) !important;}#__tealiumGDPRcpPrefs .privacy_prompt_footer .second_button:focus {    outline: none !important;    color: #0B2f42 !important;    border-color: #0B2f42 !important;    transform: translateY(-2px) !important;    -webkit-transition: .2s !important;    transition: .2s !important;    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.30) !important;}#__tealiumGDPRcpPrefs .privacy_prompt .second_button.right {    float: right;}#__tealiumGDPRcpPrefs .privacy_prompt .button.left {    float: left;}#__tealiumGDPRcpPrefs .privacy_prompt.consent_preferences>.privacy_prompt_container>.close_btn_thick {    position: absolute;    display: block;    top: 20px;    right: 20px;    text-decoration: none;    text-shadow: 0 1px 0 #fff;    color: #000000;    font: 18px/100% Arial, sans-serif !important;    font-weight: 700;    cursor: pointer;}#__tealiumGDPRcpPrefs .privacy_prompt.consent_preferences>.privacy_prompt_container>.close_btn_thick:focus {    outline: 2px solid #0b2f42 !important;    outline-offset: 2px !important;    color: #0b2f42 !important;}#__tealiumGDPRcpPrefs .privacy_prompt.consent_preferences>.privacy_prompt_container>.close_btn_thick:after {    content: \"\\2715\";}#__tealiumGDPRcpPrefs .privacy_prompt .logo {    float: right;}#__tealiumGDPRcpPrefs .privacy_prompt table {    padding: 0px;    border-collapse: collapse;    margin: 0 auto;}#__tealiumGDPRcpPrefs .privacy_prompt table tr:first-child>th {    width: 33%;}#__tealiumGDPRcpPrefs .privacy_prompt table th {    background-color: #FAFAFA;    border-bottom: 1px solid #EEE;    margin: 0px;    padding: 5px 8px;    font-weight: 400;    text-align: center;}#__tealiumGDPRcpPrefs .privacy_prompt table td {    vertical-align: top;    padding: 10px 8px 5px 8px;}#__tealiumGDPRcpPrefs .privacy_prompt table tr td:first-child {    min-width: 120px;    font-weight: 600;    color: #666;}#__tealiumGDPRcpPrefs .privacy_prompt table tr td:last-child {    text-align: center;    min-width: 100px;}#__tealiumGDPRcpPrefs .privacy_prompt label {    line-height: 0;    font-size: 16px !important;    color: #000000;    cursor: pointer;    font-family: \'chevin-medium\', Helvetica Neue, Helvetica, Arial, \"Nimbus Sans L\", sans-serif !important;    font-weight: 700;    display: inline-block;    vertical-align: middle;    margin: 0 15px 0 0;}#__tealiumGDPRcpPrefs .privacy_prompt input[type=\"radio\"] {    -webkit-appearance: none;    -moz-appearance: none;    appearance: none;    border-radius: 50%;    width: 22px;    height: 22px;    border: 2px solid #6c6c6c !important;    transition: 0.2s all linear;    margin: 0 5px 0 0;    vertical-align: middle;    cursor: pointer;    display: inline-block !important;    position: static !important;}#__tealiumGDPRcpPrefs .privacy_prompt input[type=\"radio\"]:hover {    border-color: #0096D0 !important;}#__tealiumGDPRcpPrefs .privacy_prompt input[type=\"radio\"]:focus {    border-color: #0567A4 !important;    outline-offset: 2px !important;    box-shadow: 0 0 0 2px #0b2f42;    outline: 2px solid transparent;}#__tealiumGDPRcpPrefs .privacy_prompt input[type=\"radio\"]:active {    border: 2px solid #0567A4 !important;    outline-offset: 2px !important;    box-shadow: 0 0 0 2px #0b2f42;    outline: 2px solid transparent;}#__tealiumGDPRcpPrefs .privacy_prompt input[type=\"radio\"]:checked {    border: 4px solid #fff !important;    outline: #0b2f42 auto 2px !important;    background-color: #DA202A;}#__tealiumGDPRcpPrefs .privacy_prompt input[type=\"radio\"]:checked:focus {    border: 4px solid #fff !important;    outline-offset: 2px !important;    box-shadow: 0 0 0 2px #0b2f42;    outline: 2px solid transparent;}/* Override duplicate radio buttons */#__tealiumGDPRcpPrefs .privacy_prompt input[type=\"radio\"]::before {    display: none;}#__tealiumGDPRcpPrefs .privacy_prompt input[type=\"radio\"]:checked::after {    display: none;}#__tealiumGDPRcpPrefs .consent_prefs_toggle_buttons {    display: inline-block;    width: 100%;}#__tealiumGDPRcpPrefs .consent_prefs_save_button {    display: inline-block;    width: 100%;}#__tealiumGDPRcpPrefs #preferences_prompt_submit.primaryConsentCta {    background: linear-gradient(90deg,#DA202A 2%,#FF4242 95%);    border-radius: 30px;    padding: 15px 30px !important;}#__tealiumGDPRcpPrefs #accept_all_prompt_submit {    margin-left: 0 !important;}/* Cat15 & Cat6 toggle to buttons style */#__tealiumGDPRcpPrefs .static_option label::before {    display: none;    position: absolute;    content: \"\";    height: 30px;    width: 30px;    top: 0;    left: 0;    right: 0;    bottom: 0;    background-color: white;    -webkit-transition: .4s;    transition: .4s;}#__tealiumGDPRcpPrefs .privacy_prompt .static_option input[type=\"checkbox\"].toggle+label {    border-radius: 0;    text-align: center;    width: 97px;    padding: 0;}#__tealiumGDPRcpPrefs .privacy_prompt .static_option input[type=\"checkbox\"].toggle:checked+label .on {    margin-right: 0;}#__tealiumGDPRcpPrefs .privacy_prompt .static_option input[type=\"checkbox\"].toggle+label .off {    margin-left: 0;}#__tealiumGDPRcpPrefs .privacy_prompt .gdpr_btn_container {    display: inline-block;}#__tealiumGDPRcpPrefs .privacy_prompt .visitor_id_container {    display: inline-block;    margin: 1rem 0 0;}#__tealiumGDPRcpPrefs .privacy_prompt .visitor_id_container.hide_visitor_id {    display: none;}#__tealiumGDPRcpPrefs .privacy_prompt .visitor_id_container p {    font-size: 0.9rem;}#__tealiumGDPRcpPrefs .toTheRight {    float: right;}@media (min-width: 781px) {    #__tealiumGDPRcpPrefs .toTheRight {        padding-right: 15px;    }}/* MEDIA QUERIES */@media (max-width: 780px) {    #__tealiumGDPRcpPrefs .privacy_prompt_container {        width: 80%;        margin: 0 auto;    }    #__tealiumGDPRcpPrefs .privacy_prompt_content .prefmessage {        float: none;        width: 100%;    }    #__tealiumGDPRcpPrefs .privacy_prompt_content h1 {        text-align: left;    }    #__tealiumGDPRcpPrefs .privacy_prompt_content img {        float: none;        margin: 0 auto 10px auto;    }    #__tealiumGDPRcpPrefs .privacy_prompt_content table,    #__tealiumGDPRcpPrefs .privacy_prompt_content thead,    #__tealiumGDPRcpPrefs .privacy_prompt_content tbody,    #__tealiumGDPRcpPrefs .privacy_prompt_content th,    #__tealiumGDPRcpPrefs .privacy_prompt_content td,    #__tealiumGDPRcpPrefs .privacy_prompt_content tr {        position: relative;        height: 100%;    }    #__tealiumGDPRcpPrefs .privacy_prompt_content table tbody tr {        display: block;    }    #__tealiumGDPRcpPrefs .privacy_prompt_content tbody tr {        margin: 0 0 1rem 0;    }    #__tealiumGDPRcpPrefs .privacy_prompt_content tbody tr td:first-child {        display: inline-block;    }    #__tealiumGDPRcpPrefs .privacy_prompt_content tbody tr td:nth-child(2) {        width: 100%;        display: block;    }    #__tealiumGDPRcpPrefs .privacy_prompt_content tbody tr td:nth-child(3) {        min-width: 0 !important;        position: absolute;        right: 0;        top: -2%;        padding-right: 0px;    }    #__tealiumGDPRcpPrefs .privacy_prompt_content tbody tr:first-child {        position: absolute;        top: -9999px;        left: -9999px;    }}@media (max-width: 639px) {    #__tealiumGDPRcpPrefs .privacy_prompt_container {        width: 85%;        margin: 0 auto;    }    #__tealiumGDPRcpPrefs .privacy_prompt_content {        padding-left: 2em;        padding-right: 2em;    }    #__tealiumGDPRcpPrefs .privacy_prompt_content h1 {        font-size: 6vw;    }    #__tealiumGDPRcpPrefs .privacy_prompt_footer {        padding: 30px 2em !important;        display: block !important;    }    #__tealiumGDPRcpPrefs .privacy_prompt_footer .button {        font-size: 16px;        padding: 13px 1.5px !important;        float: none;        display: block !important;        border: 0;        border-radius: 0;    }    #__tealiumGDPRcpPrefs .privacy_prompt_footer .second_button {        margin-left: 0 !important;        margin-top: 0.75em;        width: 100%;        font-size: 16px;        padding: 13px 0 !important;        float: none;        display: block !important;    }    #__tealiumGDPRcpPrefs .privacy_prompt .second_button.right {        float: none;    }    #__tealiumGDPRcpPrefs .privacy_prompt .button.left {        float: none;    }    #__tealiumGDPRcpPrefs .privacy_prompt .visitor_id_container p {        font-size: 0.6rem;    }}@media (max-width: 568px) {    #__tealiumGDPRcpPrefs .privacy_prompt_footer .button {        width: 100% !important;        font-size: 16px;        padding: 13px 5px !important;    }    #__tealiumGDPRcpPrefs .privacy_prompt_footer .second_button {        width: 100%;        font-size: 16px;        padding: 13px 3px !important;    }    #__tealiumGDPRcpPrefs .privacy_prompt_content {        padding-left: 1em !important;        padding-right: 1em !important;    }    #__tealiumGDPRcpPrefs .privacy_prompt_content h1 {        font-size: 8.25vw !important;    }    #__tealiumGDPRcpPrefs .privacy_prompt_footer {        padding: 20px 1em 30px 1em !important;    }}@media (max-width: 330px) {    #__tealiumGDPRcpPrefs .privacy_prompt_footer {        padding: 20px 1em 30px 1em !important;    }}";
    utag.gdpr.preferences_prompt.content.html = "<div class=\"privacy_prompt consent_preferences\">  <div class=\"privacy_prompt_container\" aria-modal=\"true\" role=\"dialog\" aria-labelledby=\"consent_preferences_title\">      <div class=\"close_btn_thick\" tabindex=\"1\"></div>      <div class=\"privacy_prompt_content\">          <h1 id=\"consent_preferences_title\">{{title}}</h1>          <p>{{message}}</p>          <div class=\"options\">              <!--option-->              <div class=\"option\">                  <div class=\"title\">{{category_crm_title}}</div> <!--  // EBIZ-19143 -->                  <div class=\"description\">{{category_crm_description}}</div>                  <div class=\"switchHolder\" style=\"display: none;\">                      <input type=\"checkbox\" class=\"toggle\" disabled=disabled id=\"toggle_cat15\" checked/>                      <input type=\"checkbox\" class=\"toggle_no\" disabled=disabled id=\"toggle_cat15_no\" />                      <label for=\"toggle_cat15\"> <span class=\"on\">On</span> <span class=\"off\">{{no}}</span></label>                  </div>              </div>              <!--option-->              <div class=\"option\">                  <div class=\"title\">{{category_personalization_title}}</div>                  <div class=\"description\">{{category_personalization_description}}</div>                  <div class=\"switchHolder\">                      <input type=\"radio\" class=\"consentRadioButton consentRadioButton_yes\" name=\"toggle_cat6\" class=\"toggle\" id=\"toggle_cat6\" tabindex=\"3\">                      <label class=\"on\" for=\"toggle_cat6\">                          {{radioyes}}                      </label>                      <input type=\"radio\" class=\"consentRadioButton consentRadioButton_no\" name=\"toggle_cat6\" id=\"toggle_cat6_no\" tabindex=\"3\">                      <label class=\"off\" for=\"toggle_cat6_no\">                          {{radiono}}                      </label>                  </div>              </div>              <!--option-->              <div class=\"option\">                  <div class=\"title\">{{category_analytics_title}}</div>                  <div class=\"description\">{{category_analytics_description}}</div>                  <div class=\"switchHolder\">                      <input type=\"radio\" class=\"consentRadioButton consentRadioButton_yes\" name=\"toggle_cat1\" class=\"toggle\" id=\"toggle_cat1\" tabindex=\"3\">                      <label class=\"on\" for=\"toggle_cat1\">                          {{radioyes}}                      </label>                      <input type=\"radio\" class=\"consentRadioButton consentRadioButton_no\" name=\"toggle_cat1\" id=\"toggle_cat1_no\" tabindex=\"3\">                      <label class=\"off\" for=\"toggle_cat1_no\">                          {{radiono}}                      </label>                  </div>              </div>              <!--option-->              <div class=\"option\">                  <div class=\"title\">{{category_display_ads_title}}</div>                  <div class=\"description\">{{category_display_ads_description}}</div>                  <div class=\"switchHolder\">                      <input type=\"radio\" class=\"consentRadioButton consentRadioButton_yes\" name=\"toggle_cat3\" class=\"toggle\" id=\"toggle_cat3\" tabindex=\"4\">                      <label class=\"on\" for=\"toggle_cat3\">                          {{radioyes}}                      </label>                      <input type=\"radio\" class=\"consentRadioButton consentRadioButton_no\" name=\"toggle_cat3\" id=\"toggle_cat3_no\" tabindex=\"4\">                      <label class=\"off\" for=\"toggle_cat3_no\">                          {{radiono}}                      </label>                  </div>              </div>              <!--option-->              <div class=\"option hide\" style=\"display:none;\">                  <div class=\"title\">{{category_engagement_title}}</div>                  <div class=\"description\">{{category_engagement_description}}</div>                  <div class=\"switchHolder\">                      <input type=\"checkbox\" class=\"toggle\" id=\"toggle_cat13\" />                      <label for=\"toggle_cat13\"> <span class=\"on\">{{yes}}</span> <span                              class=\"off\">{{no}}</span></label>                  </div>              </div>              <!--option-->              <div class=\"option hide\" style=\"display:none;\">                  <div class=\"title\">{{category_search_title}}</div>                  <div class=\"description\">{{category_search_description}}</div>                  <div class=\"switchHolder\">                      <input type=\"checkbox\" class=\"toggle\" id=\"toggle_cat4\" />                      <label for=\"toggle_cat4\"> <span class=\"on\">{{yes}}</span> <span                              class=\"off\">{{no}}</span></label>                  </div>              </div>              <!--option-->              <div class=\"option hide\" style=\"display:none;\">                  <div class=\"title\">{{category_email_title}}</div>                  <div class=\"description\">{{category_email_description}}</div>                  <div class=\"switchHolder\">                      <input type=\"checkbox\" class=\"toggle\" id=\"toggle_cat5\" />                      <label for=\"toggle_cat5\"> <span class=\"on\">{{yes}}</span> <span                              class=\"off\">{{no}}</span></label>                  </div>              </div>              <!--option-->              <div class=\"option hide\" style=\"display:none;\">                  <div class=\"title\">{{category_social_title}}</div>                  <div class=\"description\">{{category_social_description}}</div>                  <div class=\"switchHolder\">                      <input type=\"checkbox\" class=\"toggle\" id=\"toggle_cat7\" />                      <label for=\"toggle_cat7\"> <span class=\"on\">{{yes}}</span> <span                              class=\"off\">{{no}}</span></label>                  </div>              </div>              <!--option-->              <div class=\"option hide\" style=\"display:none;\">                  <div class=\"title\">{{category_big_data_title}}</div>                  <div class=\"description\">{{category_big_data_description}}</div>                  <div class=\"switchHolder\">                      <input type=\"checkbox\" class=\"toggle\" id=\"toggle_cat8\" />                      <label for=\"toggle_cat8\"> <span class=\"on\">{{yes}}</span> <span                              class=\"off\">{{no}}</span></label>                  </div>              </div>              <!--option-->              <div class=\"option hide\" style=\"display:none;\">                  <div class=\"title\">{{category_misc_title}}</div>                  <div class=\"description\">{{category_misc_description}}</div>                  <div class=\"switchHolder\">                      <input type=\"checkbox\" class=\"toggle\" id=\"toggle_cat9\" />                      <label for=\"toggle_cat9\"> <span class=\"on\">{{yes}}</span> <span                              class=\"off\">{{no}}</span></label>                  </div>              </div>              <!--option-->              <div class=\"option hide\" style=\"display:none;\">                  <div class=\"title\">{{category_cookiematch_title}}</div>                  <div class=\"description\">{{category_cookiematch_description}}</div>                  <div class=\"switchHolder\">                      <input type=\"checkbox\" class=\"toggle\" id=\"toggle_cat10\" />                      <label for=\"toggle_cat10\"> <span class=\"on\">{{yes}}</span> <span                              class=\"off\">{{no}}</span></label>                  </div>              </div>              <!--option-->              <div class=\"option hide\" style=\"display:none;\">                  <div class=\"title\">{{category_cdp_title}}</div>                  <div class=\"description\">{{category_cdp_description}}</div>                  <div class=\"switchHolder\">                      <input type=\"checkbox\" class=\"toggle\" id=\"toggle_cat11\" />                      <label for=\"toggle_cat11\"> <span class=\"on\">{{yes}}</span> <span                              class=\"off\">{{no}}</span></label>                  </div>              </div>              <!--option-->              <div class=\"option hide\" style=\"display:none;\">                  <div class=\"title\">{{category_mobile_title}}</div>                  <div class=\"description\">{{category_mobile_description}}</div>                  <div class=\"switchHolder\">                      <input type=\"checkbox\" class=\"toggle\" id=\"toggle_cat12\" />                      <label for=\"toggle_cat12\"> <span class=\"on\">{{yes}}</span> <span                              class=\"off\">{{no}}</span></label>                  </div>              </div>              <!--option-->              <div class=\"option hide\" style=\"display:none;\">                  <div class=\"title\">{{category_monitoring_title}}</div>                  <div class=\"description\">{{category_monitoring_description}}</div>                  <div class=\"switchHolder\">                      <input type=\"checkbox\" class=\"toggle\" id=\"toggle_cat14\" />                      <label for=\"toggle_cat14\"> <span class=\"on\">{{yes}}</span> <span                              class=\"off\">{{no}}</span></label>                  </div>              </div>              <!--option-->              <div class=\"option hide\" style=\"display:none;\">                  <div class=\"title\">{{category_affiliates_title}}</div>                  <div class=\"description\">{{category_affiliates_description}}</div>                  <div class=\"switchHolder\">                      <input type=\"checkbox\" class=\"toggle\" id=\"toggle_cat2\" />                      <label for=\"toggle_cat2\"> <span class=\"on\">{{yes}}</span> <span                              class=\"off\">{{no}}</span></label>                  </div>              </div>              <!-- end of options -->          </div>      </div>      <div class=\"privacy_prompt_footer\">          <div id=\"error_message\" class=\"hide_error\">              <p>Please select your cookie preferences.</p>          </div>          <div class=\"gdpr_btn_container\">              <div class=\"consent_prefs_save_button\">                  <button type=\"button\" id=\"preferences_prompt_submit\" class=\"button left disabled primaryConsentCta\"                      tabindex=\"7\">{{confirmation_button}}</button>              </div>          </div>          <div class=\"visitor_id_container hide_visitor_id\">              <p>No visitor ID</p>          </div>      </div>  </div></div>";
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
                utag.gdpr.trackUIDs = utag.gdpr.trackUIDs.concat(a.cfg.uids);
            }
            return utag.track_old.apply(this, arguments);
        }
    };
    utag.loader.OU_old = utag.loader.OU;
    utag.loader.OU = function(tid) {
        try {
            utag.loader.OU_old(tid);
        } catch (e) {
            utag.DB(e);
        }
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
                if (utag.gdpr.consent_prompt.isEnabled) {
                    if (!utag.gdpr.consent_prompt.noShow) {
                        if (!utag.gdpr.getConsentState()) {
                            utag.gdpr.showExplicitConsent();
                        }
                    }
                }
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
//tealium universal tag - utag.553 ut4.0.202605011123, Copyright 2026 Tealium.com Inc. All Rights Reserved.
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
            utag.DB('send:553:CALLBACK');
            u.callback();
            utag.DB('send:553:CALLBACK:COMPLETE');
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
                    tealium_consent: "true",
                    ad_storage_consent: b["google_ad_storage_consent"] || "denied",
                    analytics_storage_consent: b["google_analytics_storage_consent"] || "denied",
                    ads_data_redaction: b["google_ads_data_redaction"] || "true",
                    url_passthrough: b["google_url_passthrough"] || "false",
                    wait_for_update: "",
                    ad_user_data: b["google_ad_user_data_consent"] || "denied",
                    ad_personalization: b["google_ad_personalization_consent"] || "denied",
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
                utag.DB('send:553:MAPPINGS');
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
                        }, null, ["553"]);
                    });
                    if (!u.hasgtagjs()) {
                        u.scriptrequested = true;
                        utag.ut.gtagScriptRequested = true;
                        u.loader({
                            type: "script",
                            src: u.data.base_url,
                            cb: u.loaderCallback,
                            loc: "script",
                            id: "utag_553",
                            attrs: {}
                        });
                    } else {
                        u.callback();
                    }
                }
            }
        };
        utag.o[loader].loader.LOAD(id);
    })("553", "royalmail.sendanitem");
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