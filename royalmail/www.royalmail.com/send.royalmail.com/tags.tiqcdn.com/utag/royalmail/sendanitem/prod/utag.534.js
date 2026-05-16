//tealium universal tag - utag.534 ut4.0.202605011123, Copyright 2026 Tealium.com Inc. All Rights Reserved.
if (typeof JSON !== 'object') {
    JSON = {};
}
(function() {
    'use strict';
    var rx_one = /^[\],:{}\s]*$/,
        rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
        rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        rx_four = /(?:^|:|,)(?:\s*\[)+/g,
        rx_escapable = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;

    function f(n) {
        return n < 10 ? '0' + n : n;
    }

    function this_value() {
        return this.valueOf();
    }
    if (typeof Date.prototype.toJSON !== 'function') {
        Date.prototype.toJSON = function() {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + '-' +
                f(this.getUTCMonth() + 1) + '-' + f(this.getUTCDate()) + 'T' + f(this.getUTCHours()) + ':' + f(this.getUTCMinutes()) + ':' +
                f(this.getUTCSeconds()) + 'Z' : null;
        };
        Boolean.prototype.toJSON = this_value;
        Number.prototype.toJSON = this_value;
        String.prototype.toJSON = this_value;
    }
    var gap, indent, meta, rep;

    function quote(string) {
        rx_escapable.lastIndex = 0;
        return rx_escapable.test(string) ? '"' + string.replace(rx_escapable, function(a) {
            var c = meta[a];
            return typeof c === 'string' ? c : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
    }

    function str(key, holder) {
        var i, k, v, length, mind = gap,
            partial, value = holder[key];
        if (value && typeof value === 'object' && typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }
        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }
        switch (typeof value) {
            case 'string':
                return quote(value);
            case 'number':
                return isFinite(value) ? String(value) : 'null';
            case 'boolean':
            case 'null':
                return String(value);
            case 'object':
                if (!value) {
                    return 'null';
                }
                gap += indent;
                partial = [];
                if (Object.prototype.toString.apply(value) === '[object Array]') {
                    length = value.length;
                    for (i = 0; i < length; i += 1) {
                        partial[i] = str(i, value) || 'null';
                    }
                    v = partial.length === 0 ? '[]' : gap ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' : '[' + partial.join(',') + ']';
                    gap = mind;
                    return v;
                }
                if (rep && typeof rep === 'object') {
                    length = rep.length;
                    for (i = 0; i < length; i += 1) {
                        if (typeof rep[i] === 'string') {
                            k = rep[i];
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (gap ? ': ' : ':') + v);
                            }
                        }
                    }
                } else {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (gap ? ': ' : ':') + v);
                            }
                        }
                    }
                }
                v = partial.length === 0 ? '{}' : gap ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' : '{' + partial.join(',') + '}';
                gap = mind;
                return v;
        }
    }
    if (typeof JSON.stringify !== 'function') {
        meta = {
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"': '\\"',
            '\\': '\\\\'
        };
        JSON.stringify = function(value, replacer, space) {
            var i;
            gap = '';
            indent = '';
            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }
            } else if (typeof space === 'string') {
                indent = space;
            }
            rep = replacer;
            if (replacer && typeof replacer !== 'function' && (typeof replacer !== 'object' || typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }
            return str('', {
                '': value
            });
        };
    }
}());
try {
    (function(id, loader, u) {
        try {
            u = utag.o[loader].sender[id] = {};
        } catch (e) {
            u = utag.sender[id];
        }
        u.ev = {
            "all": 1
        };
        u.server_domain = "tealiumiq.com";
        u.server_prefix = "";
        u.tag_config_server = "https://collect.tealiumiq.com/event";
        u.tag_config_sampling = "100" || "100";
        if (utag.cfg.utagdb) {
            u.tag_config_sampling = "100";
        }
        u.tag_config_region = "eu-west-1" || "default";
        u.region = "";
        u.performance_timing_count = 0;
        u.account = utag.cfg.utid.split("/")[0];
        u.data_source = "";
        u.profile = "main2019" || utag.cfg.utid.split("/")[1];
        if (u.tag_config_server.indexOf("-collect." + u.server_domain) > 1) {
            u.server_prefix = u.tag_config_server.split("collect." + u.server_domain)[0];
            if (u.tag_config_server.indexOf("/i.gif") < 0) {
                u.tag_config_server = "https://" + [u.server_prefix + "collect." + u.server_domain, u.account, u.profile, "2", "i.gif"].join("/");
            }
        }
        if (u.tag_config_server === "") {
            if (u.tag_config_region === "default") {
                u.tag_config_server = "https://" + [u.server_prefix + "collect." + u.server_domain, u.account, u.profile, "2", "i.gif"].join("/");
            } else {
                u.tag_config_server = "https://" + [u.server_prefix + "collect-" + u.tag_config_region + "." + u.server_domain, u.account, u.profile, "2", "i.gif"].join("/");
            }
        }
        if (u.tag_config_server.indexOf("-collect-") > -1) {
            u.server_prefix = u.tag_config_server.split("collect-")[0];
        }
        if (u.tag_config_region !== "default" && u.tag_config_server.indexOf(u.server_prefix + "collect." + u.server_domain) > 0) {
            u.tag_config_server = u.tag_config_server.replace(u.server_prefix + "collect." + u.server_domain, u.server_prefix + "collect-" + u.tag_config_region + "." + u.server_domain);
            u.region = u.tag_config_region;
        }
        u.data_enrichment = "frequent";
        u.profile_specific_vid = 0;
        u.enrichment_polling = 2;
        u.enrichment_polling_delay = 500;
        u.do_enrichment = function() {};
        var q = u.tag_config_server.indexOf("?");
        if (q > 0 && (q + 1) == u.tag_config_server.length) {
            u.tag_config_server = u.tag_config_server.replace("?", "");
        }
        u.server_list = u.tag_config_server.split("|");
        u.enrichment_enabled = {};
        u.get_account_profile = function(s) {
            return ["tealiumiq.com", "royalmail", "main2019", "2", "i.gif"];
        };
        u.is_in_sample_group = function(b) {
            var group = "100";
            if (u.tag_config_sampling === "" || u.tag_config_sampling === "100") {
                return true;
            }
            if (b["cp.utag_main_dc_group"]) {
                group = b["cp.utag_main_dc_group"];
            } else {
                group = Math.floor(Math.random() * 100) + 1;
                utag.loader.SC("utag_main", {
                    "dc_group": group
                });
            }
            if (parseInt(group) <= parseInt(u.tag_config_sampling)) {
                return true;
            } else {
                return false;
            }
        };
        u.get_performance_timing = function(b) {
            var t, timing;
            var data = {};

            function subtract(val1, val2) {
                var difference = 0;
                if (val1 > val2) {
                    difference = val1 - val2;
                }
                return difference;
            }
            if (typeof localStorage != "undefined" && JSON.parse && window.performance && window.performance.timing) {
                t = window.performance.timing;
                timing = localStorage.getItem("tealium_timing");
                if (timing !== null && timing !== "{}" && typeof b !== "undefined" && u.performance_timing_count === 0) {
                    utag.ut.merge(b, utag.ut.flatten({
                        timing: JSON.parse(timing)
                    }), 1);
                }
            } else {
                return;
            }
            u.performance_timing_count++;
            for (var k in t) {
                if ((k.indexOf("dom") === 0 || k.indexOf("load") === 0) && t[k] === 0 && u.performance_timing_count < 20) {
                    setTimeout(u.get_performance_timing, 1000);
                }
            }
            data["domain"] = location.hostname + "";
            data["pathname"] = location.pathname + "";
            data["query_string"] = ("" + location.search).substring(1);
            data["timestamp"] = (new Date()).getTime();
            data["dns"] = subtract(t.domainLookupEnd, t.domainLookupStart);
            data["connect"] = subtract(t.connectEnd, t.connectStart);
            data["response"] = subtract(t.responseEnd, t.responseStart);
            data["dom_loading_to_interactive"] = subtract(t.domInteractive, t.domLoading);
            data["dom_interactive_to_complete"] = subtract(t.domComplete, t.domInteractive);
            data["load"] = subtract(t.loadEventEnd, t.loadEventStart);
            data["time_to_first_byte"] = subtract(t.responseStart, t.connectEnd);
            data["front_end"] = subtract(t.loadEventStart, t.responseEnd);
            data["fetch_to_response"] = subtract(t.responseStart, t.fetchStart);
            data["fetch_to_complete"] = subtract(t.domComplete, t.fetchStart);
            data["fetch_to_interactive"] = subtract(t.domInteractive, t.fetchStart);
            try {
                localStorage.setItem("tealium_timing", JSON.stringify(data));
            } catch (e) {
                utag.DB(e);
            }
        };
        u.map = {};
        u.extend = [function(a, b) {
            try {
                if (1) {
                    const c_gcl_aw = utag.loader.RC("_gcl_aw");
                    if (c_gcl_aw && /GCL\.[^\.]+\..+/.test(c_gcl_aw)) {
                        b.gclid = c_gcl_aw.match(/GCL\.[^\.]+\.(.+)/)[1];
                    }
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if (typeof b['transactionID'] != 'undefined') {
                    try {
                        b['floodlightTransactionID'] = b.transactionID.replace(/-/g, '');
                    } catch (e) {}
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if (b['pageName'] == 'RM Send an Item>Payment>Thank You') {
                    if (sessionStorage && sessionStorage.getItem("as_send_email")) {
                        b.as_email_send_scraped = sessionStorage.getItem("as_send_email");
                    }
                    sessionStorage.removeItem("as_send_email");
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if (1) {
                    var switchingKeyName = "as_email_consolidated_send";
                    var switchingKeyValue;
                    window.utag.visitorSwitching = window.utag.visitorSwitching || {
                        v: function() {
                            var pad = function(a, b, c, d) {
                                a = "" + (a - 0).toString(16);
                                d = "";
                                if (b > a.length) {
                                    for (c = 0; c < b - a.length; c++) {
                                        d += "0";
                                    }
                                }
                                return "" + d + a;
                            };
                            var d = new Date().getTime();
                            var a = pad(d, 12);
                            var b = "" + Math.random();
                            a += pad(b.substring(2, b.length), 16);
                            try {
                                a += pad(navigator.plugins.length ? navigator.plugins.length : 0, 2);
                                a += pad(navigator.userAgent.length, 3);
                                a += pad(document.URL.length, 4);
                                a += pad(navigator.appVersion.length, 3);
                                a += pad(screen.width +
                                    screen.height +
                                    parseInt(screen.colorDepth ? screen.colorDepth : screen.pixelDepth), 5);
                            } catch (e) {
                                utag.DB(e);
                                a += "12345";
                            }
                            return a;
                        },
                        storeInUtagMainCookie: function(b, name, value, storeSession) {
                            var sess = storeSession ? ";exp-session" : "";
                            var c = {};
                            c[name] = value + sess;
                            utag.loader.SC("utag_main", c);
                            b["cp.utag_main_" + name] = value;
                        },
                        getFromUtagMainCookie: function(b, name, lowerCase) {
                            var rv = b["cp.utag_main_" + name];
                            if (rv && lowerCase) {
                                rv = rv.toLowerCase();
                            }
                            return rv;
                        },
                        deleteFromUtagMainCookie: function(b, name) {
                            var c = {};
                            c[name] = "";
                            utag.loader.SC("utag_main", c, "d'");
                            delete b["cp.utag_main_" + name];
                        },
                        lsTest: function() {
                            var test = "test";
                            try {
                                localStorage.setItem(test, test);
                                localStorage.removeItem(test);
                                return true;
                            } catch (e) {
                                return false;
                            }
                        },
                        getFromStorage: function(b, key) {
                            if (this.lsTest()) {
                                return localStorage.getItem(key);
                            } else {
                                return this.getFromUtagMainCookie(b, key, false);
                            }
                        },
                        putInStorage: function(b, key, value) {
                            if (this.lsTest()) {
                                localStorage.setItem(key, value);
                            } else {
                                this.storeInUtagMainCookie(b, key, value, false);
                            }
                        },
                        HashVisitorId: function(key, value) {
                            var shaSalt = b.tealium_account + '/' + b.tealium_profile + '/' + key + '/';
                            return utag.ut.sha256
                                .SHA256(shaSalt + value)
                                .toString();
                        }
                    };
                    var s = window.utag.visitorSwitching;
                    var LAST_LOGGED_ID = "last_logged_in_email";
                    var CHANGED_AS_ID = "changed_as_id";
                    var V_ID = "v_id";
                    if (b.pageName == "RM Send an Item>Payment>Thank You" && sessionStorage && sessionStorage.getItem("as_send_email")) {
                        b.as_email_send_scraped = sessionStorage.getItem("as_send_email");
                        sessionStorage.removeItem("as_send_email");
                    }
                    b.as_email_consolidated_send = b.as_email_consolidated_send || b.visitorEmail || b.as_email_send_scraped;
                    b.visitorEmail = b.visitorEmail || b.as_email_consolidated_send;
                    if (!b.visitorEmail && window.sessionStorage && window.sessionStorage.getItem('sendAnItemBasketFormContextValues')) {
                        try {
                            var ss = JSON.parse(window.sessionStorage.getItem('sendAnItemBasketFormContextValues'));
                            if (ss.purchaseEmail) {
                                b.as_email_consolidated = ss.purchaseEmail.toLowerCase();
                                b.visitorEmail = b.visitorEmail || b.as_email_consolidated;
                            }
                        } catch (e) {
                            console.log('visitorEmail not found in ss')
                        }
                    }
                    if (b[switchingKeyName] && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(b[switchingKeyName])) {
                        switchingKeyValue = b[switchingKeyName];
                        b.salt_sha_id = s.HashVisitorId(switchingKeyName, switchingKeyValue)
                    }
                    if (b.salt_sha_id && s.getFromUtagMainCookie(b, LAST_LOGGED_ID, true) && b.salt_sha_id !== s.getFromUtagMainCookie(b, LAST_LOGGED_ID, true)) {
                        var key = "tealium_vi_id_" + b.salt_sha_id;
                        var vi = "";
                        if (s.getFromStorage(b, key)) {
                            vi = s.getFromStorage(b, key);
                        } else {
                            vi = s.v();
                        }
                        s.storeInUtagMainCookie(b, CHANGED_AS_ID, vi, false);
                        try {
                            localStorage.removeItem('tealium_va');
                            localStorage.removeItem('tealium_va_' + b.tealium_account + '_' + b.tealium_profile);
                        } catch (e) {}
                    }
                    if (s.getFromUtagMainCookie(b, CHANGED_AS_ID, false)) {
                        b.tealium_visitor_id = s.getFromUtagMainCookie(b, CHANGED_AS_ID, false);
                        b.as_changed_as_id = "true";
                    } else {
                        b.tealium_visitor_id = s.getFromUtagMainCookie(b, V_ID, false);
                        b.as_changed_as_id = "false";
                    }
                    if (b.salt_sha_id) {
                        s.storeInUtagMainCookie(b, LAST_LOGGED_ID, b.salt_sha_id, false);
                        var key = "tealium_vi_id_" + b.salt_sha_id;
                        s.putInStorage(b, key, b.tealium_visitor_id);
                    }
                    u.visitor_id = b.tealium_visitor_id;
                    if (/main2019$/.test(b.tealium_visitor_id) == false) {
                        b.tealium_visitor_id += 'main2019';
                    }
                    b.as_original_visitor_id = s.getFromUtagMainCookie(b, V_ID, false);
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
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if (b['pageName'] == 'RM Send an Item>Payment>Thank You') {
                    function basketTotalperFormat(item, index) {
                        var lineTotal, lineQuantity;
                        if (item !== "RM Collection" && b.productAttributesFormat[index] === "Letter" && b.productQuantity && utag.ut.typeOf(b.productQuantity) === "array" && b.productPrice && utag.ut.typeOf(b.productPrice) === "array" && b.productPrice[index] !== "undefined" && b.productCategory && utag.ut.typeOf(b.productCategory) === "array") {
                            lineTotal = parseFloat(b.productQuantity[index]) * parseFloat(b.productPrice[index]);
                            lineQuantity = parseFloat(b.productQuantity[index]);
                            b.as_send_label_total = (b.as_send_label_total) ? b.as_send_label_total + lineTotal : lineTotal;
                            b.as_send_letters_price = (b.as_send_letters_price) ? b.as_send_letters_price + lineTotal : lineTotal;
                            b.as_send_letters_qty = (b.as_send_letters_qty) ? b.as_send_letters_qty + lineQuantity : lineQuantity;
                            if (b.productCategory[index] === "Domestic") {
                                b.as_send_domestic_price = (b.as_send_domestic_price) ? b.as_send_domestic_price + lineTotal : lineTotal;
                            } else if (b.productCategory[index] === "International") {
                                b.as_send_international_price = (b.as_send_international_price) ? b.as_send_international_price + lineTotal : lineTotal;
                            }
                        } else if (item !== "RM Collection" && b.productAttributesFormat[index] === "SmallParcel" && b.productQuantity && utag.ut.typeOf(b.productQuantity) === "array" && b.productPrice && utag.ut.typeOf(b.productPrice) === "array" && b.productPrice[index] !== "undefined" && b.productCategory && utag.ut.typeOf(b.productCategory) === "array") {
                            lineTotal = parseFloat(b.productQuantity[index]) * parseFloat(b.productPrice[index]);
                            lineQuantity = parseFloat(b.productQuantity[index]);
                            b.as_send_label_total = (b.as_send_label_total) ? b.as_send_label_total + lineTotal : lineTotal;
                            b.as_send_sparcels_price = (b.as_send_sparcels_price) ? b.as_send_sparcels_price + lineTotal : lineTotal;
                            b.as_send_sparcels_qty = (b.as_send_sparcels_qty) ? b.as_send_sparcels_qty + lineQuantity : lineQuantity;
                            if (b.productCategory[index] === "Domestic") {
                                b.as_send_domestic_price = (b.as_send_domestic_price) ? b.as_send_domestic_price + lineTotal : lineTotal;
                            } else if (b.productCategory[index] === "International") {
                                b.as_send_international_price = (b.as_send_international_price) ? b.as_send_international_price + lineTotal : lineTotal;
                            }
                        } else if (item !== "RM Collection" && b.productAttributesFormat[index] === "MediumParcel" && b.productQuantity && utag.ut.typeOf(b.productQuantity) === "array" && b.productPrice && utag.ut.typeOf(b.productPrice) === "array" && b.productPrice[index] !== "undefined" && b.productCategory && utag.ut.typeOf(b.productCategory) === "array") {
                            lineTotal = parseFloat(b.productQuantity[index]) * parseFloat(b.productPrice[index]);
                            lineQuantity = parseFloat(b.productQuantity[index]);
                            b.as_send_label_total = (b.as_send_label_total) ? b.as_send_label_total + lineTotal : lineTotal;
                            b.as_send_mparcels_price = (b.as_send_sparcels_price) ? b.as_send_sparcels_price + lineTotal : lineTotal;
                            b.as_send_mparcels_qty = (b.as_send_sparcels_qty) ? b.as_send_sparcels_qty + lineQuantity : lineQuantity;
                            if (b.productCategory[index] === "Domestic") {
                                b.as_send_domestic_price = (b.as_send_domestic_price) ? b.as_send_domestic_price + lineTotal : lineTotal;
                            } else if (b.productCategory[index] === "International") {
                                b.as_send_international_price = (b.as_send_international_price) ? b.as_send_international_price + lineTotal : lineTotal;
                            }
                        } else if (item === "RM Collection" && b.productQuantity && utag.ut.typeOf(b.productQuantity) === "array" && b.productPrice && utag.ut.typeOf(b.productPrice) === "array" && b.productPrice[index] !== "undefined") {
                            lineTotal = parseFloat(b.productQuantity[index]) * parseFloat(b.productPrice[index]);
                            lineQuantity = parseFloat(b.productQuantity[index]);
                            b.as_send_collection_price = (b.as_send_collection_price) ? b.as_send_collection_price + lineTotal : lineTotal;
                            b.as_send_collection_qty = (b.as_send_collection_qty) ? b.as_send_collection_qty + lineQuantity : lineQuantity;
                        }
                    }
                    b.as_send_label_total, b.as_send_letters_price, b.as_send_sparcels_price, b.as_send_mparcels_price, b.as_send_collection_price, b.as_send_letters_qty, b.as_send_sparcels_qty, b.as_send_mparcels_qty, b.as_send_collection_qty, b.as_send_domestic_price, b.as_send_international_price;
                    b.productSKU.forEach(basketTotalperFormat);
                    var utag_cookie = utag.loader.RC("utag_main");
                    if (utag_cookie && utag_cookie.sndcnv == "1") {
                        utag.loader.SC("utag_main", {
                            "sndcnv": ""
                        }, "d");
                        return false
                    } else {
                        utag.loader.SC("utag_main", {
                            "sndcnv": "1;exp-session"
                        }, "")
                    }
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if (b['pageName'] == 'RM Send an Item>Basket') {
                    function getFirstProduct(item, index) {
                        if (item !== "RM Collection" && b.productName && utag.ut.typeOf(b.productName) === "array" && b.productAttributesFormat && utag.ut.typeOf(b.productAttributesFormat) === "array" && b.productAttributesWeight && utag.ut.typeOf(b.productCategory) === "array" && b.productAttributesCompensationValue && utag.ut.typeOf(b.productAttributesCompensationValue) === "array" && b.productAttributesDestination && utag.ut.typeOf(b.productAttributesDestination) === "array" && b.productPrice && utag.ut.typeOf(b.productPrice) === "array") {
                            b.as_send_first_product_name = b.productName[index];
                            b.as_send_first_product_format = b.productAttributesFormat[index];
                            b.as_send_first_product_weight = b.productAttributesWeight[index];
                            b.as_send_first_product_compensation = b.productAttributesCompensationValue[index];
                            b.as_send_first_product_destination = b.productAttributesDestination[index];
                            b.as_send_first_product_price = b.productPrice[index];
                        }
                    }
                    b.as_send_first_product_name = "", b.as_send_first_product_format = "", b.as_send_first_product_weight = "", b.as_send_first_product_compensation = "", b.as_send_first_product_destination = "", b.as_send_first_product_price = "";
                    b.productSKU.forEach(getFirstProduct);
                    b.as_send_first_product_all = b.productSKU.join();
                }
            } catch (e) {
                utag.DB(e)
            }
        }];
        u.send = function(a, b) {
            var c, d, i;
            if (u.ev[a] || typeof u.ev["all"] !== "undefined") {
                if (a === "remote_api") {
                    utag.DB("Remote API event suppressed.");
                    return;
                }
                if (typeof __cmp === "function") {
                    __cmp("getVendorConsents", [522], function(consents, is_successful) {
                        var consented_to_tealium = consents.vendorConsents[522];
                        var consented_to_purposes = consents.purposeConsents[2] && consents.purposeConsents[3] && consents.purposeConsents[5];
                        if (consented_to_tealium && consented_to_purposes) {
                            execute_send();
                        } else {
                            utag.DB("Detected that consent was not granted for Tealium and/or its listed purposes. Aborting Tealium Collect.");
                        }
                    });
                } else {
                    execute_send();
                }

                function execute_send() {
                    if (u.data_source) {
                        b.tealium_datasource = u.data_source;
                    }
                    u.make_enrichment_request = false;
                    try {
                        if (utag.gdpr.consent_prompt.isEnabled || utag.gdpr.getConsentState()) {
                            b["consent_categories"] = utag.gdpr.getSelectedCategories();
                            b["policy"] = "gdpr";
                        }
                    } catch (e) {
                        utag.DB(e)
                    }
                    for (c = 0; c < u.extend.length; c++) {
                        try {
                            d = u.extend[c](a, b);
                            if (d == false) return
                        } catch (e) {}
                    };
                    if (!u.is_in_sample_group(b)) {
                        return false;
                    }
                    u.get_performance_timing(b);
                    for (i = 0; i < u.server_list.length; i++) {
                        if (u.enrichment_enabled[i] !== false) {
                            u.enrichment_enabled[u.server_list[i]] = true;
                        }
                    }
                    if (u.server_list.length > 1) {
                        u.profile_specific_vid = 1;
                    }
                    u.data = utag.datacloud || {};
                    u.data["loader.cfg"] = {};
                    for (d in utag.loader.GV(utag.loader.cfg)) {
                        if (utag.loader.cfg[d].load && utag.loader.cfg[d].send) {
                            utag.loader.cfg[d].executed = 1;
                        } else {
                            utag.loader.cfg[d].executed = 0;
                        }
                        u.data["loader.cfg"][d] = utag.loader.GV(utag.loader.cfg[d]);
                    }
                    b.tealium_trace_id = b['cp.trace_id'];
                    b.tealium_account = 'royalmail';
                    b.tealium_profile = 'main2019';
                    u.data.data = b;
                    for (d in u.data.data) {
                        if ((d + '').indexOf("qp.") === 0) {
                            u.data.data[d] = encodeURIComponent(u.data.data[d]);
                        } else if ((d + '').indexOf("va.") === 0) {
                            delete u.data.data[d];
                        }
                    }
                    if (!b["cp.utag_main_dc_event"]) {
                        b["cp.utag_main_dc_visit"] = (1 + (b["cp.utag_main_dc_visit"] ? parseInt(b["cp.utag_main_dc_visit"]) : 0)) + '';
                    }
                    b["cp.utag_main_dc_event"] = (1 + (b["cp.utag_main_dc_event"] ? parseInt(b["cp.utag_main_dc_event"]) : 0)) + '';
                    utag.loader.SC("utag_main", {
                        "dc_visit": b["cp.utag_main_dc_visit"],
                        "dc_event": b["cp.utag_main_dc_event"] + ";exp-session"
                    });
                    utag.data["cp.utag_main_dc_visit"] = b["cp.utag_main_dc_visit"];
                    utag.data["cp.utag_main_dc_event"] = b["cp.utag_main_dc_event"];
                    var dt = new Date();
                    u.data.browser = {};
                    try {
                        u.data.browser["height"] = window.innerHeight || document.body.clientHeight;
                        u.data.browser["width"] = window.innerWidth || document.body.clientWidth;
                        u.data.browser["screen_height"] = screen.height;
                        u.data.browser["screen_width"] = screen.width;
                        u.data.browser["timezone_offset"] = dt.getTimezoneOffset();
                    } catch (e) {
                        utag.DB(e);
                    }
                    u.data["event"] = a + '';
                    u.data["post_time"] = dt.getTime();
                    if (u.data_enrichment === "frequent" || u.data_enrichment === "infrequent") {
                        u.visit_num = b["cp.utag_main_dc_visit"];
                        if (parseInt(u.visit_num) > 1 && b["cp.utag_main_dc_event"] === "1") {
                            u.enrichment_polling = 2;
                        }
                        try {
                            u.va_update = parseInt(localStorage.getItem("tealium_va_update") || 0);
                        } catch (e) {
                            utag.DB(e);
                        }
                        u.visitor_id = u.visitor_id || b.tealium_visitor_id || b['cp.utag_main_v_id'];
                        if (u.data_enrichment === "frequent" || (u.data_enrichment === "infrequent" && parseInt(u.visit_num) > 1 && parseInt(b["cp.utag_main_dc_event"]) <= 5 && u.visit_num !== u.va_update)) {
                            u.make_enrichment_request = true;
                        }
                        u.visitor_service_request = function(t, server) {
                            var s = "https://" + u.server_prefix + "visitor-service" + (u.region ? "-" + u.region : "").replace(/[^-A-Za-z0-9+_.]/g, "") + "." + u.server_domain;
                            var p = u.get_account_profile(server);
                            (function(p) {
                                var prefix = "tealium_va";
                                var key = "_" + p[1] + "_" + p[2];
                                utag.ut["writeva" + p[2]] = function(o) {
                                    utag.DB("Visitor Attributes: " + prefix + key);
                                    utag.DB(o);
                                    var str = JSON.stringify(o);
                                    if (str !== "{}" && str !== "") {
                                        try {
                                            localStorage.setItem("tealium_va_update", utag.data["cp.utag_main_dc_visit"]);
                                            localStorage.setItem(prefix, str);
                                            localStorage.setItem(prefix + key, str);
                                        } catch (e) {
                                            utag.DB(e);
                                        }
                                        if (typeof tealium_enrichment === "function") {
                                            tealium_enrichment(o, prefix + key);
                                        }
                                    }
                                };
                            }(p.slice(0)));
                            var vid = utag.dle_visitor_id || u.visitor_id;
                            if (u.profile_specific_vid === 1) {
                                vid += p[2];
                            }
                            utag.ut.loader({
                                id: "tealium_visitor_service_534" + p[2],
                                src: s + "/" + p[1] + "/" + p[2] + "/" + vid.replace(/\?callback=.*/g, "") + "?callback=utag.ut%5B%22writeva" + p[2] + "%22%5D&rnd=" + t
                            });
                        };
                        u.do_enrichment = function(server, enrichment_polling, enrichment_polling_delay) {
                            if (typeof utag.ut.loader != "undefined") {
                                var counter = 0;
                                var doIt = function() {
                                    counter++;
                                    if (counter < enrichment_polling) {
                                        u.visitor_service_request((new Date).getTime(), server);
                                        u.enrichTimeoutPointer = setTimeout(function() {
                                            doIt();
                                        }, enrichment_polling_delay + 1);
                                    }
                                };
                                u.enrichTimeoutPointer = setTimeout(function() {
                                    doIt();
                                }, enrichment_polling_delay + 1);
                            }
                        };
                    }
                    var json_string;
                    var regExpReplace = new RegExp(u.visitor_id, "g");
                    if (window.FormData && !utag.useImageForCollect) {
                        function postData(server_index, enrichment_polling, enrichment_polling_delay) {
                            if (server_index + 1 > u.server_list.length) {
                                return;
                            }
                            var xhr = new XMLHttpRequest();
                            var server = u.server_list[server_index];
                            xhr.addEventListener("readystatechange", function() {
                                if (xhr.readyState === 3) {
                                    try {
                                        u.region = xhr.getResponseHeader("X-Region") || u.region || "";
                                    } catch (res_error) {
                                        utag.DB(res_error);
                                        u.region = u.region || "";
                                    }
                                    if (u.region) utag.loader.SC("utag_main", {
                                        "dc_region": u.region + ";exp-session"
                                    });
                                    utag.DB("dc_region:" + u.region);
                                } else if (xhr.readyState === 4) {
                                    postData(server_index + 1, enrichment_polling, enrichment_polling_delay);
                                    if (u.make_enrichment_request && u.enrichment_enabled[server]) {
                                        u.do_enrichment(server, enrichment_polling, enrichment_polling_delay);
                                    }
                                }
                            });
                            xhr.open("post", u.server_list[server_index], true);
                            xhr.withCredentials = true;
                            json_string = JSON.stringify(u.data.data);
                            if (u.profile_specific_vid === 1 && u.visitor_id) {
                                json_string = json_string.replace(regExpReplace, u.visitor_id + u.get_account_profile(server)[2]);
                            }
                            xhr.send(json_string);
                        }
                        postData(0, u.enrichment_polling, u.enrichment_polling_delay);
                    } else {
                        for (i = 0; i < u.server_list.length; i++) {
                            (function(i, enrichment_polling, enrichment_polling_delay) {
                                var server = u.server_list[i];
                                setTimeout(function() {
                                    if (u.profile_specific_vid == 1 && u.visitor_id) {
                                        u.data.data['tealium_visitor_id'] += u.get_account_profile(server)[2];
                                    }
                                    query_string = [];
                                    for (var key in u.data.data) {
                                        if (!u.data.data.hasOwnProperty(key)) continue;
                                        query_string.push(encodeURIComponent(key) + '=' + encodeURIComponent(u.data.data[key]));
                                    }
                                    var img = new Image();
                                    img.src = server + "?" + query_string.join('&');
                                    if (u.make_enrichment_request && u.enrichment_enabled[server]) {
                                        u.do_enrichment(server, enrichment_polling, enrichment_polling_delay);
                                    }
                                }, i * 700);
                            }(i, u.enrichment_polling, u.enrichment_polling_delay));
                        }
                    }
                }
            }
        };
        try {
            utag.o[loader].loader.LOAD(id);
        } catch (e) {
            utag.loader.LOAD(id);
        }
    })('534', 'royalmail.sendanitem');
} catch (e) {
    utag.DB(e);
}