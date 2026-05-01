//tealium universal tag - utag.827 ut4.0.202605010910, Copyright 2026 Tealium.com Inc. All Rights Reserved.
try {
    (function(id, loader) {
        var u = {
            "id": id
        };
        utag.o[loader].sender[id] = u;
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
        u.ev = {
            "view": 1,
            "link": 1
        };
        u.hasgtagjs = function() {
            window.gtagRename = window.gtagRename || "" || "gtag";
            if (utag.ut.gtagScriptRequested) {
                return true;
            }
            var i, s = document.getElementsByTagName("script");
            for (i = 0; i < s.length; i++) {
                if (s[i].src && s[i].src.indexOf("gtag/js") >= 0) {
                    return true;
                }
            }
            window.dataLayer = window.dataLayer || [];
            if (typeof window[window.gtagRename] !== "function") {
                window[window.gtagRename] = function() {
                    dataLayer.push(arguments);
                };
                window[window.gtagRename]("js", new Date());
            }
            return false;
        };
        u.scriptrequested = u.hasgtagjs();
        u.o = window[window.gtagRename];
        u.map_func = function(arr, obj, item) {
            var i = arr.shift();
            obj[i] = obj[i] || {};
            if (arr.length > 0) {
                u.map_func(arr, obj[i], item);
            } else {
                obj[i] = item;
            }
        };
        u.hasOwn = function(o, a) {
            return o != null && Object.prototype.hasOwnProperty.call(o, a);
        };
        u.isEmptyObject = function(o, a) {
            for (a in o) {
                if (u.hasOwn(o, a)) {
                    return false;
                }
            }
            return true;
        };
        u.map = {
            "dc_advertiserId": "advertiser_id",
            "dc_counterMethod": "counting_method",
            "dc_activityGroup": "activity_group",
            "dc_activity": "activity",
            "_sm_827_5:true": "conversion",
            "channel_closer": "custom.u19",
            "cp.utag_main_ses_id": "custom.u18"
        };
        u.extend = [function(a, b) {
            try {
                b['_sm_827_5'] = "true";
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b, c, d, e, f, g) {
            if (1) {
                d = b['dom.pathname'];
                if (typeof d == 'undefined') return;
                c = [{
                    '/special-stamp-issues/royal-academy-of-arts': 'DC-4913528|royal004|lpg_r00e|Standard'
                }, {
                    '/special-stamp-issues/captain-cook': 'DC-4913528|lpgst0|lpg_r00|Standard'
                }, {
                    '/special-stamp-issues/game-of-thrones': 'DC-4913528|royal004|lpg_l000|Standard'
                }, {
                    '/special-stamp-issues/hampton-court-palace': 'DC-4913528|lpgst0|lpg_r0|Standard'
                }, {
                    '/issue-by-issue/star-wars/icat/starwars': 'DC-4913528|starw0|prd_s0|Standard'
                }, {
                    '/special-stamp-issues/the-royal-wedding': 'DC-4913528|royal004|lpg_r00d|Standard'
                }, {
                    '/special-stamp-issues/star-wars': 'DC-4913528|royal004|lpg_r0|Standard'
                }, {
                    '/starwars-confirmation': 'DC-4913528|starw0|ecm_r0|Standard'
                }, {
                    '/starwars-signup': 'DC-4913528|starw0|reg_r0|Standard'
                }, {
                    '/special-stamp-issues/the-old-vic': 'DC-4913528|royal004|lpg_r00f|Standard'
                }, {
                    '/special-stamp-issues/harry-potter': 'DC-4913528|lpg_r001|lpgst0|Standard'
                }, {
                    '/special-stamp-issues/the-first-world-war': 'DC-4913528|lpg stamps|lpg stamps|Standard'
                }, {
                    '/special-stamp-issues/hrh-prince-charles-70th-birthday': 'DC-4913528|lpgst0|lpg_p0|standard'
                }, {
                    '/special-stamp-issues/christmas-2018': 'DC-4913528|lpgst0|lpg_c0|standard'
                }, {
                    '/collectibles-and-gifts/black-friday': 'DC-4913528|lpg_b00|royal004|Standard'
                }, {
                    '/special-stamp-issues/stamp-classics': 'DC-4913528|lpg_r00g|royal004|Standard'
                }, {
                    '/special-stamp-issues/leonardo-da-vinci': 'DC-4913528|royal004|lpg_r00h|Standard'
                }, {
                    '/special-stamp-issues/birds': 'DC-4913528|lpg_r000|lpg_r007|Standard'
                }, {
                    '/special-stamp-issues/british-engineering': 'DC-4913528|lpg_s000|royal004|Standard'
                }, {
                    '/special-stamp-issues/queen-victoria-bicentenary': 'DC-4913528|lpg_r00i|royal004|Standard'
                }, {
                    '/special-stamp-issues/d-day-75th-anniversary': 'DC-4913528|lpg_d001|royal004|Standard'
                }, {
                    '/special-stamp-issues/curious-customs': 'DC-4913528|royal004|lpg_r00m|Standard'
                }, {
                    '/special-stamp-issues/forests': 'DC-4913528|royal004|lpg_r00l|Standard'
                }, {
                    '/special-stamp-issues/elton-john/elton-john-': 'DC-4913528|sales0|prd_r0|transactions'
                }, {
                    '/special-stamp-issues/elton-john': 'DC-4913528|lpgst0|lpg_r005|standard'
                }, {
                    '/special-stamp-issues/royal-navy-ships': 'DC-4913528|lpgst0|lpg_r004|Standard'
                }, {
                    '/special-stamp-issues/england-cricket': 'DC-4913528|lpgst0|lpg_r003|Standard'
                }, {
                    '/special-stamp-issues/gruffalo': 'DC-4913528|lpgst0|lpg_r006|Standard'
                }, {
                    '/special-stamp-issues/video-games': 'DC-4913528|lpgst0|hpg_r0|standard'
                }, {
                    '/special-stamp-issues/visions-of-the-universe': 'DC-4913528|lpgst0|lpg_r008|Standard'
                }, {
                    '/special-stamp-issues/james-bond': 'DC-4913528|lpgst0|hpg_r00|Standard'
                }, {
                    '/special-stamp-issues/the-romantic-poets': 'DC-4913528|lpgst0|_lpg_0|Standard'
                }, {
                    '/end-of-the-second-world-war': 'DC-4913528|lpgst0|lpg_r009|Standard'
                }, {
                    '/special-stamp-issues/coronation-street': 'DC-4913528|lpgst0|lpg_r00-|Standard'
                }, {
                    '/special-stamp-issues/roman-britain': 'DC-4913528|lpgst0|lpg_r00a|Standard'
                }, {
                    '/special-stamp-issues/queens-platinum-jubilee': 'DC-4913528|lpg_r000|lpg_r000|Standard'
                }, {
                    '/special-stamp-issues/palace-of-westminster': 'DC-4913528|lpgst0|lpg_r00c|Standard'
                }, {
                    '/special-stamp-issues/sherlock': 'DC-4913528|lpgst0|lpg_r00d|Standard'
                }, {
                    '/special-stamp-issues/rupert-bear': 'DC-4913528|lpgst0|lpg_s0|Standard'
                }, {
                    '/special-stamp-issues/brilliant-bugs': 'DC-4913528|lpgst0|lpg_r00e|Standard'
                }, {
                    '/special-stamp-issues/star-trek': 'DC-4913528|lpgst0|lpg_r00f|Standard'
                }, {
                    '/special-stamp-issues/christmas-2020': 'DC-4913528|lpgst0|lpg_r00g|Standard'
                }, {
                    '/special-stamp-issues/only-fools-and-horses': 'DC-4913528|lpgst0|lpg_r00h|Standard'
                }, {
                    '/special-stamp-issues/the-legend-of-king-arthur': 'DC-4913528|lpgst0|lpg_r00i|Standard'
                }, {
                    '/special-stamp-issues/classic-science-fiction': 'DC-4913528|lpgst0|lpg_r00j|Standard'
                }, {
                    '/special-stamp-issues/the-wars-of-the-roses': 'DC-4913528|lpgst0|lpg_r00k|Standard'
                }, {
                    '/special-stamp-issues/paul-mccartney': 'DC-4913528|lpg_r00|lpg_s0|Standard'
                }, {
                    '/special-stamp-issues/dennis-and-gnasher': 'DC-4913528|lpg_r00|lpg_r000|Standard'
                }, {
                    '/special-stamp-issues/wild-coasts': 'DC-4913528|lpg_r00|lpg_r001|Standard'
                }, {
                    '/special-stamp-issues/industrial-revolutions': 'DC-4913528|lpg_r00|lpg_r004|Standard'
                }, {
                    '/special-stamp-issues/british-army-vehicles': 'DC-4913528|lpg_r00|lpg_r003|Standard'
                }, {
                    '/special-stamp-issues/dc-collection': 'DC-4913528|lpg_r00|lpg_r002|Standard'
                }, {
                    '/special-stamp-issues/rugby-union': 'DC-4913528|lpg_r00|lpg_r005|Standard'
                }, {
                    '/special-stamp-issues/christmas-2021/gift-ideas': 'DC-4913528|lpg_r00|lpg_r008|Standard'
                }, {
                    '/special-stamp-issues/black-friday': 'DC-4913528|lpg_r00|lpg_r009|Standard'
                }, {
                    '/special-stamp-issues/annual-collections': 'DC-4913528|lpg_r00|lpg_r007|Standard'
                }, {
                    '/special-stamp-issues/rolling-stones': 'DC-4913528|prd_r0|prd_r0|Standard'
                }, {
                    '/special-stamp-issues/queen': 'DC-4913528|lpgst0|lpg_r00b|Standard'
                }, {
                    '/special-stamp-issues/the-stamp-art-of-david-gentleman': 'DC-4913528|lpg_r000|lpg_r003|Standard'
                }, {
                    '/special-stamp-issues/the-fa-cup': 'DC-4913528|lpg_r000|lpg_r004|Standard'
                }, {
                    '/special-stamp-issues/covid-heroes': 'DC-4913528|lpg_r000|lpg_r005|Standard'
                }, {
                    '/special-stamp-issues/birds-of-prey': 'DC-4913528|royal0|rmbop0|Standard'
                }, {
                    '/special-stamp-issues/unsung-heroes-women-of-wwii': 'DC-4913528|lpg_r000|lpg_r009|Standard'
                }, {
                    '/special-stamp-issues/cats': 'DC-4913528|lpg_r000|lpg_r00-|Standard'
                }, {
                    '/special-stamp-issues/transformers': 'DC-4913528|lpg_r000|lpg_r00d|Standard'
                }, {
                    '/special-stamp-issues/royal-marines': 'DC-4913528|lpg_r000|lpg_r00k|Standard'
                }, {
                    '/special-stamp-issues/iron-maiden': 'DC-4913528|lpgtr0|lpg_r00|Standard'
                }, {
                    '/special-stamp-issues/x-men': 'DC-4913528|lpgst0|ecm_r0|Standard'
                }];
                var m = false;
                for (e = 0; e < c.length; e++) {
                    for (f in utag.loader.GV(c[e])) {
                        if (d.toString().indexOf(f) > -1) {
                            b['dc_settings'] = c[e][f];
                            m = true
                        };
                    };
                    if (m) break
                };
                if (!m) b['dc_settings'] = '';
            }
        }, function(a, b) {
            try {
                if (typeof b['dc_settings'] != 'undefined' && b['dc_settings'] != '') {
                    try {
                        b['dc_advertiserId'] = b['dc_settings'].split("|")[0]
                    } catch (e) {};
                    try {
                        b['dc_activityGroup'] = b['dc_settings'].split("|")[1]
                    } catch (e) {};
                    try {
                        b['dc_activity'] = b['dc_settings'].split("|")[2]
                    } catch (e) {};
                    try {
                        b['dc_counterMethod'] = b['dc_settings'].split("|")[3]
                    } catch (e) {}
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if (1) {
                    if (b['dc_settings'] === '') {
                        return false;
                    }
                }
            } catch (e) {
                utag.DB(e)
            }
        }];
        u.send = function(a, b) {
            if (u.ev[a] || u.ev.all !== undefined) {
                utag.DB("send:827");
                utag.DB(b);
                var d, e, f, h, i, j, _event, p, key;
                u.data = {
                    "qsp_delim": "&",
                    "kvp_delim": "=",
                    "base_url": "https://www.googletagmanager.com/gtag/js",
                    "advertiser_id": "advertiser_id",
                    "activity_group": "activity_group",
                    "activity": "activity",
                    "counting_method": "counting_method",
                    "custom_scripts": "true",
                    "session_id": "",
                    "product_quantity": [],
                    "dc_custom_params": {},
                    "event_name": "",
                    "event": [],
                    "custom": {}
                };
                for (c = 0; c < u.extend.length; c++) {
                    try {
                        d = u.extend[c](a, b);
                        if (d == false) return
                    } catch (e) {
                        if (typeof utag_err != 'undefined') {
                            utag_err.push({
                                e: 'extension error:' + e,
                                s: utag.cfg.path + 'utag.' + id + '.js',
                                l: c,
                                t: 'ex'
                            })
                        }
                    }
                };
                utag.DB("send:827:EXTENSIONS");
                utag.DB(b);
                for (d in utag.loader.GV(u.map)) {
                    if (b[d] !== undefined && b[d] !== "") {
                        e = u.map[d].split(",");
                        for (f = 0; f < e.length; f++) {
                            u.map_func(e[f].split("."), u.data, b[d]);
                        }
                    } else {
                        h = d.split(":");
                        if (h.length === 2 && b[h[0]] === h[1]) {
                            if (u.map[d]) {
                                u.data.event = u.data.event.concat(u.map[d].split(","));
                            }
                        }
                    }
                }
                utag.DB("send:827:MAPPINGS");
                utag.DB(u.data);
                u.data.order_id = u.data.order_id || b._corder || "";
                u.data.order_total = u.data.order_total || b._ctotal || "";
                if (u.data.product_quantity.length === 0 && b._cquan !== undefined) {
                    u.data.product_quantity = b._cquan.slice(0);
                }
                if (typeof(u.data.advertiser_id) === "string") {
                    u.data.advertiser_id = u.data.advertiser_id.split(",");
                }
                if (typeof(u.data.activity_group) === "string") {
                    u.data.activity_group = u.data.activity_group.split(",");
                }
                if (typeof(u.data.activity) === "string") {
                    u.data.activity = u.data.activity.split(",");
                }
                if (typeof(u.data.counting_method) === "string") {
                    u.data.counting_method = u.data.counting_method.split(",");
                }
                if (typeof(u.data.session_id) === "string") {
                    u.data.session_id = u.data.session_id.split(",");
                }
                if (!u.data.advertiser_id) {
                    utag.DB(u.id + ": Tag not fired: Required attribute not populated");
                    return;
                }
                u.data.base_url += "?id=" + (u.data.advertiser_id[0]);
                for (i = 0; i < u.data.advertiser_id.length; i++) {
                    u.o("config", u.data.advertiser_id[i]);
                }
                if (u.data.order_id) {
                    for (i = 0; i < u.data.event.length; i++) {
                        if (u.data.event[i] === "purchase") {
                            p = true;
                        }
                    }
                    if (!p) {
                        u.data.event.push("purchase");
                    }
                }
                var total_qty = 1;
                if (typeof(u.data.product_quantity) === "number") {
                    total_qty = u.data.product_quantity;
                } else if (u.data.product_quantity.length === 1) {
                    total_qty = u.data.product_quantity[0];
                } else if (u.data.product_quantity.length > 1) {
                    for (i = 0; i < u.data.product_quantity.length; i++) {
                        total_qty += parseInt(u.data.product_quantity[i], 10);
                    }
                }
                for (i = 0; i < u.data.event.length; i++) {
                    _event = u.data.event[i];
                    for (j = 0; j < u.data.advertiser_id.length; j++) {
                        var eventIdData = {};
                        if (u.data.custom_scripts === "true" || u.data.custom_scripts) {
                            eventIdData.allow_custom_scripts = true;
                        } else if (u.data.custom_scripts === "false" || !u.data.custom_scripts) {
                            eventIdData.allow_custom_scripts = false;
                        }
                        if (u.data.session_id.length === 1 && u.data.session_id[0] !== "") {
                            eventIdData.session_id = u.data.session_id[0];
                        } else if (u.data.session_id[j] !== "") {
                            eventIdData.session_id = u.data.session_id[j];
                        }
                        if (u.data.order_total) {
                            eventIdData.value = u.data.order_total;
                            eventIdData.transaction_id = u.data.order_id;
                        }
                        if (u.data.product_quantity) {
                            eventIdData.quantity = total_qty;
                        }
                        for (key in u.data.custom) {
                            eventIdData[key] = u.data.custom[key];
                        }
                        if (!u.isEmptyObject(u.data.dc_custom_params)) {
                            eventIdData.dc_custom_params = {};
                            for (key in u.data.dc_custom_params) {
                                eventIdData.dc_custom_params[key] = u.data.dc_custom_params[key];
                            }
                        }
                        eventIdData.send_to = u.data.advertiser_id[j] + "/" + u.data.activity_group[j] + "/" + u.data.activity[j] + "+" + u.data.counting_method[j];
                        if (_event === "purchase") {
                            u.o("event", "purchase", eventIdData);
                        }
                        if (_event === "conversion") {
                            u.o("event", "conversion", eventIdData);
                        }
                    }
                }
                if (!u.hasgtagjs()) {
                    u.scriptrequested = true;
                    utag.ut.gtagScriptRequested = true;
                    u.loader({
                        "type": "script",
                        "src": u.data.base_url,
                        "cb": null,
                        "loc": "script",
                        "id": "utag_827",
                        "attrs": {}
                    });
                }
                utag.DB("send:827:COMPLETE");
            }
        };
        utag.o[loader].loader.LOAD(id);
    }("827", "royalmail.main"));
} catch (error) {
    utag.DB(error);
}