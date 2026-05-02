//tealium universal tag - utag.933 ut4.0.202605010910, Copyright 2026 Tealium.com Inc. All Rights Reserved.
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
            u = utag.o[loader].sender[id] = {
                "id": id
            };
        } catch (e) {
            u = utag.sender[id];
        }
        utag.globals = window.utag.globals || {};
        u.toBoolean = function(val) {
            val = String(val) || "";
            return val === true || val.toLowerCase() === "true" || val.toLowerCase() === "on";
        };
        u.ev = {
            "all": 1
        };
        u.do_enrichment = function() {};
        u.deepCopy = function(input) {
            var key, copy;
            if (typeof input === "object" && input !== null) {
                if (utag.ut.typeOf(input) === "array") {
                    copy = [];
                } else {
                    copy = {};
                }
                for (key in input) {
                    if (typeof input[key] === "object") {
                        copy[key] = u.deepCopy(input[key]);
                    } else {
                        copy[key] = input[key];
                    }
                }
            } else {
                copy = input;
            }
            return copy;
        }
        u.get_account_profile = function(s) {
            var p;
            if (u.visitor_service_override || u.tag_config_server.indexOf("tealiumiq.com") === -1) {
                p = [u.tag_config_server.split("//")[1], u.account, u.profile]
            } else if (u.tag_config_server === u.event_url) {
                p = [s.substring(s.indexOf(u.server_domain)).split("/")[1], u.account, u.profile]
            } else {
                p = s.substring(s.indexOf(u.server_domain)).split("/");
            }
            return p;
        };

        function infixParameters(url, params) {
            var updated_url, url_parts = url.split("?");
            if (params) {
                if (url_parts[1] === undefined) {
                    updated_url = url + "?" + params;
                } else if (url_parts[1] === "") {
                    updated_url = url + params;
                } else {
                    updated_url = url_parts[0] + "?" + params + "&" + url_parts[1];
                }
            } else {
                updated_url = url;
            }
            return updated_url;
        }
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
            try {
                timing = localStorage.getItem("tealium_timing");
                t = window.performance.timing;
                if (timing !== null && timing !== "{}" && typeof b !== "undefined" && u.performance_timing_count === 0) {
                    utag.ut.merge(b, utag.ut.flatten({
                        timing: JSON.parse(timing)
                    }), 1);
                }
            } catch (e) {
                utag.DB(e);
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
        u.validateProtocol = function(address, force_ssl) {
            if (/^https?:\/\//i.test(address)) {
                if (force_ssl) {
                    if (/^http:\/\//i.test(address)) {
                        address = address.toLowerCase().replace("http", "https");
                    }
                }
            } else {
                if (/^\/\//.test(address)) {
                    if (force_ssl) {
                        address = "https:" + address;
                    } else {
                        address = location.protocol + address;
                    }
                } else {
                    if (force_ssl) {
                        address = "https://" + address;
                    } else {
                        address = location.protocol + "//" + address;
                    }
                }
            }
            return address;
        }
        u.server_domain = "tealiumiq.com";
        u.server_prefix = "";
        u.tag_config_server = "";
        u.tag_config_sampling = "100" || "100";
        if (utag.cfg.utagdb) {
            u.tag_config_sampling = "100";
        }
        u.tag_config_region = "eu-west-1" || "default";
        u.region = "";
        u.performance_timing_count = 0;
        u.event_url = '//collect.tealiumiq.com/event';
        u.account = utag.cfg.utid.split("/")[0];
        u.data_source = "63i291";
        u.profile = "main2019" || utag.cfg.utid.split("/")[1];
        u.visitor_service_override = '';
        u.request_increment = 1;
        u.iab_v20_compliance = true;
        u.tc_string = "";
        u.use_sendBeacon = 'true';
        u.use_event_endpoint = 'false';
        u.tealium_cookie_domain = '';
        u.tealium_cookie_expiry = '';
        u.data_enrichment = "frequent";
        u.send_udo_variables = "true" || true;
        u.send_dom_values = "true" || true;
        u.send_cookie_values = "true" || true;
        u.send_meta_values = "true" || true;
        u.send_query_param_values = "true" || true;
        u.send_localstorage_variables = "false" || false;
        u.send_sessionstorage_variables = "false" || false;
        u.profile_specific_vid = 0;
        u.enrichment_polling = 1;
        u.enrichment_polling_delay = 500;
        u.enrichment_enabled = {};
        u.suppress_v_id_generation = false;
        u.map = {
            "visitorEmailHashed256": "visitorEmailHashed"
        };
        u.extend = [function(a, b) {
            try {
                if (1) {
                    if (window.localStorage && window.localStorage.getItem('mage-cache-storage')) {
                        var ls = JSON.parse(localStorage.getItem('mage-cache-storage'));
                        if (typeof(ls['cart']) == 'object') {
                            b.as_cartId = ls['cart'].cartId || '';
                            b.as_cartCount = ls['cart'].summary_count || 0;
                            b.as_cartSubtotal = ls['cart'].subtotalAmount || 0;
                        }
                    }
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if (1) {
                    const c_gcl_aw = utag.loader.RC("_gcl_aw");
                    if (c_gcl_aw && /GCL\.[^\.]+\..+/.test(c_gcl_aw)) {
                        b.gclid = c_gcl_aw.match(/GCL\.[^\.]+\.(.+)/)[1];
                    }
                    if (b.pageURL.indexOf("shop.royalmail.com/checkout") >= 0) {
                        const shopBasketFormContextValues = sessionStorage.getItem('shopBasketFormContextValues') && JSON.parse(sessionStorage.getItem('shopBasketFormContextValues'));
                        if (shopBasketFormContextValues.purchaseEmail) b.visitorEmail = shopBasketFormContextValues.purchaseEmail;
                        if (shopBasketFormContextValues.purchasePhone) b.visitorPhone = shopBasketFormContextValues.purchasePhone;
                    }
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if (1) {
                    if (a !== "view") {
                        return;
                    }
                    var path = b["dom.pathname"],
                        hash = b["dom.hash"],
                        path_hash = hash ? path + "#" + hash : path;
                    if (path_hash === "/keep-safe#/confirmation" || path_hash === "/keep-safe#/order-confirmation") {
                        b.capi_event = "Purchase - Keepsafe";
                        b.tealium_event = "purchase";
                    } else if (path_hash === "/checkout/onepage/success/") {
                        b.capi_event = "Purchase - Stamps";
                        b.tealium_event = "purchase";
                    } else if (path.indexOf("/po-box") != -1 && hash.indexOf("/confirmation") != -1) {
                        b.capi_event = "Purchase - POBox";
                        b.tealium_event = "purchase";
                    }
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if (1) {
                    if (b.tealium_event && b.tealium_event === "momentsiq_submit" && b.momentsiq_id === "1034") {
                        b.as_email_consolidated = b.momentsiq_answer1;
                    }
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if (1) {
                    var pN = b['pageName'] || "";
                    pN = pN.toLowerCase();
                    pN = pN.replace(/^rm web application/i, 'rm web app');
                    if (pN == 'rm web app >postcode finder' || pN == 'rm_web_app >tracking details overlay >full tracking details' || pN == 'rm web app >personal >track your items >result' || pN == 'rm web app >personal >track your items >search error' || pN == 'rm web app >postcode finder >result') {
                        return false;
                    }
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            if (jQuery('.itemtot').text() === "0" && b.visitorGUID) {
                b.basket_open = "false";
            }
        }, function(a, b) {
            if (b.pageApplicationName === "Mailshot Maker") {
                if (utag.ut.typeOf(b.productSKU) === "array") {
                    for (var i = 0; i < b.productSKU.length; i++) {
                        if (b.productSKU[i] === "RMMSOL-PRINTANDPOST") {
                            b.msm_design_in_basket = "true";
                        }
                    }
                    if (b.msm_design_in_basket !== "true") {
                        b.msm_design_in_basket = "false";
                    }
                }
            }
            if (b.pageApplicationName === "Mailshot Maker") {
                if (utag.ut.typeOf(b.productSKU) === "array") {
                    for (var i = 0; i < b.productSKU.length; i++) {
                        if (b.productSKU[i] === "RMMSOL-DATA-RENTAL" || b.productSKU[i] === "RMMSOL-YOUR-DATA") {
                            b.msm_data_in_basket = "true";
                        }
                    }
                    if (b.msm_data_in_basket !== "true") {
                        b.msm_data_in_basket = "false";
                    }
                }
            }
            if (b.pageApplicationName === "Mailshot Maker") {
                if (utag.ut.typeOf(b.productSKU) === "array") {
                    for (var i = 0; i < b.productSKU.length; i++) {
                        if (b.productSKU[i] === "RMMSOL-DATA-RENTAL") {
                            b.msm_data_in_basket_rm = "true";
                        }
                        if (b.productSKU[i] === "RMMSOL-YOUR-DATA") {
                            b.msm_data_in_basket_own = "true";
                        }
                    }
                    if (b.msm_data_in_basket_rm !== "true") {
                        b.msm_data_in_basket_rm = "false";
                    }
                    if (b.msm_data_in_basket_own !== "true") {
                        b.msm_data_in_basket_own = "false";
                    }
                }
            }
            if (b.pageApplicationName === "Mailshot Maker") {
                if (utag.ut.typeOf(b.productSKU) === "array") {
                    for (var i = 0; i < b.productSKU.length; i++) {
                        if (b.productSKU[i] === "RMMSOL-SAMPLE") {
                            b.msm_free_sample_ordered = "true";
                        }
                    }
                    if (b.msm_free_sample_ordered !== "true") {
                        b.msm_free_sample_ordered = "false";
                    }
                }
            }
            if (b.pageApplicationName === "Mailshot Maker") {
                if (utag.ut.typeOf(b.productSKU) === "array") {
                    b.msm_basket_interaction = "true";
                } else {
                    b.msm_basket_interaction = "false"
                };
            }
        }, function(a, b) {
            if (/^MSM: /.test(b['visitorGUID'])) {
                b['visitorGUID'] = b['visitorGUID'].replace(/^MSM: /, 'MSM_');
            }
        }, function(a, b) {
            if (!b['msm_mailshot_name'] && window.campaignTitle && window.campaignTitle != 'Untitled mailshot' && b['pageName'] && b['pageName'] == 'RM Web App >MSM >Mailshots >Mailshot details') {
                b['msm_mailshot_name'] = window.campaignTitle;
            }
        }, function(a, b) {
            try {
                if (1) {
                    b['mailmen_companyname'] = b['qp.companyname'];
                    b['mailmen_email'] = b['qp.email'];
                    b['mailmen_emailPermissions'] = b['qp.emailPermissions'];
                    b['mailmen_firstname'] = b['qp.firstname'];
                    b['mailmen_postPermissions'] = b['qp.postPermissions'];
                    b['mailmen_surname'] = b['qp.surname'];
                    b['mailmen_title'] = b['qp.title'];
                    b['mailmen_uid'] = b['qp.uid'];
                    b['mailmen_zipPostal'] = b['qp.zipPostal']
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            if (b['dom.domain'].indexOf('mailmen.co.uk') > -1) {
                if (b['dom.pathname'] == '/campaigns/lifestages/fledglings') {
                    b['mailmen_segment'] = 'Fledglings';
                } else if (b['dom.pathname'] == '/campaigns/lifestages/sharers') {
                    b['mailmen_segment'] = 'Sharers';
                } else if (b['dom.pathname'] == '/campaigns/lifestages/couples') {
                    b['mailmen_segment'] = 'Couples';
                } else if (b['dom.pathname'] == '/campaigns/lifestages/youngfamilies') {
                    b['mailmen_segment'] = 'Young families';
                } else if (b['dom.pathname'] == '/campaigns/lifestages/olderfamilies') {
                    b['mailmen_segment'] = 'Older families';
                } else if (b['dom.pathname'] == '/campaigns/lifestages/emptynesters') {
                    b['mailmen_segment'] = 'Empty nesters';
                } else if (b['dom.pathname'] == '/campaigns/lifestages/retirees') {
                    b['mailmen_segment'] = 'Retirees';
                }
            }
        }, function(a, b) {
            try {
                if ((typeof b['qp.campaignId'] != 'undefined' && typeof b['qp.campaignId'] != 'undefined' && b['qp.campaignId'] != '' && b['dom.domain'].toString().toLowerCase() == 'mailshotmaker.royalmail.com'.toLowerCase())) {
                    b['msm_mailshot_id'] = b['qp.campaignId']
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if (1) {
                    try {
                        b['as_ut_event'] = a
                    } catch (e) {}
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if ((typeof b['pageTestExperimentID'] != 'undefined' && b['pageTestExperimentID'] != '' && typeof b['pageTestVariation'] != 'undefined' && b['pageTestVariation'] != '')) {
                    try {
                        b['as_ad_show_key'] = b['pageTestExperimentID'] + ',' + b['pageTestVariation']
                    } catch (e) {}
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if (1) {
                    if ((b['pageApplicationName'] == 'Personal-Keepsafe' && b['pageApplicationStep'] == 'Make Payment - New Card')) {
                        b['visitorRMPPost'] = b['cp.utag_main_kpspostperm'];
                        b['visitorRMPPhone'] = b['cp.utag_main_kpsphoneperm'];
                        b['visitorRMPEmail'] = b['cp.utag_main_kpsemailperm'];
                        b['visitorRMPOther'] = b['cp.utag_main_kpsotherperm'];
                        b['kps_first_name'] = b['cp.utag_main_kpsfname'];
                        b['kps_last_name'] = b['cp.utag_main_kpslname'];
                        b['kps_title'] = b['cp.utag_main_kpstitle'];
                    }
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if (1) {
                    utag.DB('D8 version');
                    var sendIfPresent = function(skey, bkey) {
                        if (sessionStorage.getItem(skey)) {
                            b[bkey] = sessionStorage.getItem(skey);
                        }
                    };
                    sendIfPresent('teal_pobox_personal_business_radio', 'po_box_personal_business_radio');
                    sendIfPresent('teal_pobox_pcode', 'pobox_pcode');
                    sendIfPresent('teal_pobox_address1', 'pobox_address1');
                    sendIfPresent('teal_pobox_address2', 'pobox_address2');
                    sendIfPresent('teal_pobox_address3', 'pobox_address3');
                    sendIfPresent('teal_pobox_title', 'pobox_title');
                    sendIfPresent('teal_pobox_fname', 'pobox_fname');
                    sendIfPresent('teal_pobox_lname', 'pobox_lname');
                    sendIfPresent('teal_poboxStartDateEpoch', 'poboxStartDateEpoch');
                    sendIfPresent('teal_poboxEndDateEpoch', 'poboxEndDateEpoch');
                    sendIfPresent('teal_poboxEndDateString', 'poboxEndDateString');
                    sendIfPresent('teal_pobox_pcode', 'poboxEndDateString');
                    sendIfPresent('teal_poboxDuration', 'poboxDuration');
                    sendIfPresent('teal_pobox_reason', 'poboxReason');
                    sendIfPresent('teal_poboxServiceType', 'poboxServiceType');
                    sendIfPresent('teal_poboxPrice', 'poboxPrice');
                    sendIfPresent('teal_pobox_email', 'pobox_email');
                    sendIfPresent('teal_pobox_guest_or_login', 'pobox_guest_or_login');
                    sendIfPresent('teal_pobox_moving_home_selected', 'teal_pobox_moving_home_selected');
                    b.poboxPaymentErrors = jQuery('.error').length;
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if ((typeof b['qp.dcttl'] != 'undefined' && b['qp.dcttl'] != '' && b['ut.env'] == 'dev')) {
                    b['_dc_ttl_'] = b['qp.dcttl']
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if (1) {
                    if (b.pageName.toLowerCase().indexOf('RM Web App >Redirections >Step 2 - New Names'.toLowerCase()) === 0) {
                        b.redirectionsOldPCode = b['cp.utag_main_redirectionsOldPCode'];
                        b.redirectionsNewPCode = b['cp.utag_main_redirectionsNewPCode'];
                    } else if (b.pageName.toLowerCase().indexOf('RM Web App >Redirections >Step 3 - New Dates'.toLowerCase()) === 0) {
                        b.redirectionsPAppTitle = b['cp.utag_main_redirectionsTitle'];
                        b.redirectionsPAppFName = b['cp.utag_main_redirectionsFName'];
                        b.redirectionsPAppLName = b['cp.utag_main_redirectionsLName'];
                    } else if (b.pageName.toLowerCase().indexOf('RM Web App >Redirections >Step 4 - New Summary'.toLowerCase()) === 0) {
                        b.redirectionsStartDateEpoch = b['cp.utag_main_redirectionsStartDateEpoch'];
                        b.redirectionsEndDateEpoch = b['cp.utag_main_redirectionsEndDateEpoch'];
                    } else if (b['dom.pathname'].toLowerCase().indexOf('/redirections/renewal/payment-billing-address/'.toLowerCase()) === 0) {
                        b.redirectionsPAppTitle = b['cp.utag_main_redirectionsTitle'];
                        b.redirectionsPAppFName = b['cp.utag_main_redirectionsFName'];
                        b.redirectionsPAppLName = b['cp.utag_main_redirectionsLName'];
                        b.redirectionsOldPCode = b['cp.utag_main_redirectionsOldPCode'];
                        b.redirectionsNewPCode = b['cp.utag_main_redirectionsNewPCode'];
                        b.redirectionsStartDateEpoch = b['cp.utag_main_redirectionsStartDateEpoch'];
                        b.redirectionsEndDateEpoch = b['cp.utag_main_redirectionsEndDateEpoch'];
                    } else if (b.pageName.toLowerCase().indexOf('RM Web App >Redirections >Step 5 - New Payment'.toLowerCase()) === 0 && b['cp.utag_main_redirectionsAlternativeEmail']) {
                        b.redirectionsAlternativeEmail = b['cp.utag_main_redirectionsAlternativeEmail'];
                    }
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if (1) {
                    b['as_epoch'] = '01-01-1970'
                }
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b) {
            try {
                if (1) {
                    if (b['cp.as_email_address']) {
                        b.as_email_address_cp_ucase = b['cp.as_email_address'].toUpperCase();
                    }
                    if (b.as_email_address) {
                        b.as_email_address_ucase = b.as_email_address.toUpperCase();
                    }
                    if (b.visitorEmail) {
                        b.visitorEmail_ucase = b.visitorEmail.toUpperCase();
                    }
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if (1) {
                    var dt = new Date();
                    var e = Math.floor(dt.getTime() / 1000);
                    e += 3600 * 8;
                    b.as_epoch_plus_8h = e;
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            var d = new Date();
            var year = d.getUTCFullYear();
            var month = (d.getUTCMonth() + 1).toString();
            if (month.length === 1) {
                month = "0" + month;
            }
            var day_of_month = d.getUTCDate().toString();
            if (day_of_month.length === 1) {
                day_of_month = "0" + day_of_month;
            }
            var hour = d.getUTCHours().toString()
            if (hour.length === 1) {
                hour = "0" + hour;
            }
            var minutes = d.getUTCMinutes().toString()
            if (minutes.length === 1) {
                minutes = "0" + minutes;
            }
            var seconds = d.getUTCSeconds().toString()
            if (seconds.length === 1) {
                seconds = "0" + seconds;
            }
            b.timeTimestampZ = year + '-' + month + '-' + day_of_month + " " + hour + ":" + minutes + ":" + seconds + ".000";
        }, function(a, b) {
            try {
                if (1) {
                    if (b.as_epoch_plus_8h) {
                        b.as_epoch_gmt = b.as_epoch_plus_8h - (3600 * 8);
                    }
                    if (b.redirectionsStartDateEpoch) {
                        b.redirectionsStartDateEpoch_gmt = b.redirectionsStartDateEpoch - (3600 * 8);
                    }
                    if (b.redirectionsEndDateEpoch) {
                        b.redirectionsEndDateEpoch_gmt = b.redirectionsEndDateEpoch - (3600 * 8);
                    }
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if (1) {
                    if (/^GA(\d+\.){3}\d+$/.test(b['cp._ga'])) {
                        var a = b['cp._ga'].split('.');
                        b['ga_cid'] = a[2] + '.' + a[3];
                    } else {
                        b['ga_cid'] = b['cp._ga'];
                    }
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if ((/^\/redirections\/renewal\/complete\//i.test(b['dom.pathname']) && typeof b['transactionID'] != 'undefined' && b['transactionID'] != '')) {
                    b.transaction_id_minus_er_prefix = b.transactionID.replace(/^ER_/, '');
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            u.enrichment_polling = 2;
            u.enrichment_polling_delay = 2100;
            if (b["dom.pathname"] === "/checkout/") {
                u.enrichment_polling = 4;
            };
        }, function(a, b) {
            try {
                if (1) {
                    var extensionName = 'Extension UID: 910, \'Collect tag - fix cookie with undefinedmain2019\'';
                    if (typeof(b.tealium_visitor_id) == 'string' && b.tealium_visitor_id.indexOf('undefinedmain2019') !== -1) {
                        var key;
                        for (key in b) {
                            if (Object.prototype.hasOwnProperty.call(b, key)) {
                                var val = b[key];
                                if (typeof val === 'string' && val.indexOf('undefinedmain2019') !== -1) {
                                    delete b[key];
                                }
                            }
                        }
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
                        var genVid = function(t, a, b) {
                            t = new Date().getTime();
                            a = pad(t, 12);
                            b = "" + Math.random();
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
                            utag.v_id = a;
                            return utag.v_id;
                        };
                        var consentCookies = utag.gdpr && typeof utag.gdpr.getCookieValues === 'function' && utag.gdpr.getCookieValues();
                        var consentCookieId = consentCookies && consentCookies.id;
                        if (consentCookieId && consentCookieId.toString().indexOf('undefinedmain2019') !== -1) consentCookieId = '';
                        u.visitor_id = consentCookieId || genVid();
                        utag.loader.SC("utag_main", {
                            v_id: u.visitor_id
                        });
                        if (/main2019$/.test(u.visitor_id) == false) {
                            u.visitor_id += 'main2019';
                        }
                        b["cp.utag_main_v_id"] = u.visitor_id;
                        b["ut.visitor_id"] = u.visitor_id;
                        b.tealium_visitor_id = u.visitor_id;
                    }
                    b.tealium_delete_3rd_party_vid_cookies = true;
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
                if (a === 'update_consent_cookie') {
                    utag.DB('Update Consent Cookie event supressed.');
                    return;
                }
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
                utag.DB("send:933:EXTENSIONS");
                utag.DB(b);
                c = [];
                Object.keys(utag.loader.GV(u.map)).forEach(function(mapping_key) {
                    if (b[mapping_key] !== undefined && b[mapping_key] !== '') {
                        var destinations = u.map[mapping_key].split(',');
                        destinations.forEach(function(parameter) {
                            u[parameter] = b[mapping_key];
                        });
                    }
                });
                utag.DB("send:933:MAPPINGS");
                utag.DB(u);
                u.use_sendBeacon = u.toBoolean(u.use_sendBeacon);
                u.use_event_endpoint = u.toBoolean(u.use_event_endpoint);
                u.send_udo_variables = u.toBoolean(u.send_udo_variables);
                u.send_cookie_values = u.toBoolean(u.send_cookie_values);
                u.send_dom_values = u.toBoolean(u.send_dom_values);
                u.send_meta_values = u.toBoolean(u.send_meta_values);
                u.send_query_param_values = u.toBoolean(u.send_query_param_values);
                u.send_localstorage_variables = u.toBoolean(u.send_localstorage_variables);
                u.send_sessionstorage_variables = u.toBoolean(u.send_sessionstorage_variables);
                if (u.tag_config_server.indexOf("-collect." + u.server_domain) > 1) {
                    u.server_prefix = u.tag_config_server.split("collect." + u.server_domain)[0];
                    if (u.tag_config_server.indexOf("/i.gif") < 0) {
                        u.tag_config_server = "https://" + [u.server_prefix + "collect." + u.server_domain, u.account, u.profile, "2", "i.gif"].join("/");
                    }
                }
                if (u.tag_config_server === "") {
                    if (u.use_event_endpoint) {
                        u.tag_config_server = u.event_url;
                    } else if (u.tag_config_region === "default") {
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
                var q = u.tag_config_server.indexOf("?");
                if (q > 0 && (q + 1) == u.tag_config_server.length) {
                    u.tag_config_server = u.tag_config_server.replace("?", "");
                }
                u.server_list = u.tag_config_server.split("|");
                if (u.tealium_cookie_domain) {
                    b.tealium_cookie_domain = u.tealium_cookie_domain;
                }
                if (u.tealium_cookie_expiry) {
                    b.tealium_cookie_expiry = parseInt(u.tealium_cookie_expiry);
                }
                if (u.iab_v20_compliance === true || u.iab_v20_compliance === "true") {
                    if (typeof __tcfapi === "function") {
                        __tcfapi("getTCData", 2, function(tcData, success) {
                            if (success) {
                                u.tc_string = "gdpr=";
                                if (tcData.gdprApplies === true) {
                                    u.tc_string += "1";
                                } else if (tcData.gdprApplies === false) {
                                    u.tc_string += "0";
                                } else {
                                    u.tc_string += String(tcData.gdprApplies);
                                }
                                u.tc_string += "&gdpr_consent=" + tcData.tcString;
                                execute_send();
                            }
                        });
                    } else {
                        var frame = window;
                        var cmpFrame;
                        var cmpCallbacks = {};
                        while (frame) {
                            try {
                                if (frame.frames["__tcfapiLocator"]) {
                                    cmpFrame = frame;
                                    break;
                                }
                            } catch (error) {
                                utag.DB(error);
                            }
                            if (frame === window.top) {
                                break;
                            }
                            frame = frame.parent;
                        }
                        if (!cmpFrame) {
                            execute_send();
                        } else {
                            window.__tcfapi = function(cmd, version, callback, arg) {
                                var callId = String(Math.random());
                                var msg = {
                                    __tcfapiCall: {
                                        command: cmd,
                                        parameter: arg,
                                        version: version,
                                        callId: callId
                                    }
                                };
                                cmpCallbacks[callId] = callback;
                                cmpFrame.postMessage(msg, "*");
                            };
                            window.tealiumiabPostMessageHandler = function(event) {
                                var json = {};
                                try {
                                    json = typeof event.data === "string" ? JSON.parse(event.data) : event.data;
                                } catch (error) {
                                    utag.DB(error);
                                }
                                var payload = json.__tcfapiReturn;
                                if (payload) {
                                    if (typeof cmpCallbacks[payload.callId] === "function") {
                                        cmpCallbacks[payload.callId](payload.returnValue, payload.success);
                                        cmpCallbacks[payload.callId] = null;
                                    }
                                }
                            };
                            window.addEventListener("message", tealiumiabPostMessageHandler, false);
                            __tcfapi("getTCData", 2, function(tcData, success) {
                                if (success) {
                                    u.tc_string = "gdpr=";
                                    if (tcData.gdprApplies === true) {
                                        u.tc_string += "1";
                                    } else if (tcData.gdprApplies === false) {
                                        u.tc_string += "0";
                                    } else {
                                        u.tc_string += String(tcData.gdprApplies);
                                    }
                                    u.tc_string += "&gdpr_consent=" + tcData.tcString;
                                    execute_send();
                                }
                            });
                        }
                    }
                } else {
                    execute_send();
                }

                function execute_send() {
                    if (u.data_source) {
                        b.tealium_datasource = u.data_source;
                    }
                    u.make_enrichment_request = false;
                    if (!u.is_in_sample_group(b)) {
                        return false;
                    }
                    u.get_performance_timing(b);
                    for (i = 0; i < u.server_list.length; i++) {
                        if (u.server_list[i].toLowerCase().indexOf("http") === -1) {
                            u.server_list[i] = u.validateProtocol(u.server_list[i], true);
                        }
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
                    u.data.data = b;
                    for (d in u.data.data) {
                        if ((d + '').indexOf("qp.") === 0) {
                            u.data.data[d] = encodeURIComponent(u.data.data[d]);
                        } else if ((d + '').indexOf("va.") === 0) {
                            delete u.data.data[d];
                        }
                    }
                    if (!u.suppress_v_id_generation) {
                        var consentCookies = utag.gdpr && typeof utag.gdpr.getCookieValues === 'function' && utag.gdpr.getCookieValues();
                        var consentCookieId = consentCookies && consentCookies.id;
                        u.visitor_id = u.visitor_id || b.tealium_visitor_id || b["cp.utag_main_v_id"] || consentCookieId || utag.ut.vi((new Date()).getTime());
                        utag.loader.SC("utag_main", {
                            v_id: u.visitor_id
                        });
                        b["cp.utag_main_v_id"] = u.visitor_id;
                        b["ut.visitor_id"] = u.visitor_id;
                        b["tealium_visitor_id"] = u.visitor_id;
                    }
                    if (!b["cp.utag_main_dc_event"]) {
                        b["cp.utag_main_dc_visit"] = (1 + (b["cp.utag_main_dc_visit"] ? parseInt(b["cp.utag_main_dc_visit"]) : 0)) + "";
                    }
                    b["cp.utag_main_dc_event"] = (1 + (b["cp.utag_main_dc_event"] ? parseInt(b["cp.utag_main_dc_event"]) : 0)) + "";
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
                        u.visitor_id = u.visitor_id || b.tealium_visitor_id || b["cp.utag_main_v_id"];
                        if (u.data_enrichment === "frequent" || (u.data_enrichment === "infrequent" && parseInt(u.visit_num) > 1 && parseInt(b["cp.utag_main_dc_event"]) <= 5 && u.visit_num !== u.va_update)) {
                            u.make_enrichment_request = true;
                        }
                        u.visitor_service_request = function(t, server) {
                            var s, p = u.get_account_profile(server);
                            if (u.visitor_service_override) {
                                s = u.validateProtocol(u.visitor_service_override, true);
                            } else {
                                s = u.validateProtocol(u.server_prefix, true) + "visitor-service" + (u.region ? "-" + u.region : "").replace(/[^-A-Za-z0-9+_.]/g, "") + "." + u.server_domain;
                            }
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
                            var vid = u.visitor_id;
                            if (u.profile_specific_vid === 1) {
                                vid += p[2];
                            }
                            var srcUrl = s + '/' + p[1] + '/' + p[2] + '/' + vid.replace(/[\?\&]callback=.*/g, '') + '?callback=utag.ut%5B%22writeva' + p[2] + '%22%5D&rnd=' + t;
                            if (b.tealium_cookie_domain) {
                                srcUrl = srcUrl + '&tealium_cookie_domain=' + b.tealium_cookie_domain
                                if (b.tealium_cookie_expiry) {
                                    srcUrl = srcUrl + '&tealium_cookie_expiry=' + b.tealium_cookie_expiry
                                }
                            }
                            utag.ut.loader({
                                id: 'tealium_visitor_service_933' + p[2] + '_' + u.request_increment++,
                                src: srcUrl
                            });
                        };
                        u.do_enrichment = function(server, enrichment_polling, enrichment_polling_delay) {
                            if (typeof utag.ut.loader != "undefined") {
                                for (i = 0; i < enrichment_polling; i++) {
                                    setTimeout(function() {
                                        u.visitor_service_request((new Date).getTime(), server);
                                    }, i * enrichment_polling_delay + 1);
                                }
                            }
                        };
                    }
                    var json_string, regExpReplace = new RegExp(u.visitor_id, "g");
                    if (b.tealium_random && typeof utag.globals[b.tealium_random] === "object") {
                        for (var downstream_param in utag.globals[b.tealium_random]) {
                            u.data.data[downstream_param] = u.deepCopy(utag.globals[b.tealium_random][downstream_param]);
                        }
                    }

                    function getSendData(useEventData, server) {
                        var dataStringify = u.data;
                        var filterObject = u.data.data
                        if (useEventData) {
                            dataStringify = u.data.data;
                            filterObject = u.data.data;
                            u.data.data.tealium_profile = u.profile;
                        }
                        Object.keys(filterObject).forEach(dataKey => {
                            if (['cp.trace_id', 'tealium_account', 'tealium_profile'].indexOf(dataKey) !== -1) {
                                return;
                            }
                            if (dataKey.indexOf('cp.') === 0) {
                                !u.send_cookie_values && delete filterObject[dataKey];
                                return;
                            }
                            if (dataKey.indexOf('meta.') === 0) {
                                !u.send_meta_values && delete filterObject[dataKey];
                                return;
                            }
                            if (dataKey.indexOf('qp.') === 0) {
                                !u.send_query_param_values && delete filterObject[dataKey];
                                return;
                            }
                            if (dataKey.indexOf('ls.') === 0) {
                                !u.send_localstorage_variables && delete filterObject[dataKey];
                                return;
                            }
                            if (dataKey.indexOf('ss.') === 0) {
                                !u.send_sessionstorage_variables && delete filterObject[dataKey];
                                return;
                            }
                            if (dataKey.indexOf('dom.') === 0) {
                                !u.send_dom_values && delete filterObject[dataKey];
                                return;
                            }
                            if (dataKey.indexOf('dom.') !== 0 && dataKey.indexOf('ss.') !== 0 && dataKey.indexOf('ls.') !== 0 && dataKey.indexOf('qp.') !== 0 && dataKey.indexOf('meta.') !== 0 && dataKey.indexOf('cp.') !== 0) {
                                !u.send_udo_variables && delete filterObject[dataKey];
                                return;
                            }
                        });
                        json_string = JSON.stringify(dataStringify);
                        if (u.profile_specific_vid === 1 && u.visitor_id) {
                            json_string = json_string.replace(regExpReplace, u.visitor_id + u.get_account_profile(server)[2]);
                        }
                        if (useEventData) {
                            return json_string;
                        }
                        var formData = new FormData();
                        formData.append("data", json_string);
                        return formData;
                    }

                    function postData(server_index, enrichment_polling, enrichment_polling_delay, useEventData) {
                        if (server_index + 1 > u.server_list.length) {
                            return;
                        }
                        var xhr = new XMLHttpRequest();
                        var server = u.validateProtocol(u.server_list[server_index], true);
                        var data = getSendData(useEventData, server);
                        u.region = utag.loader.RC("utag_main")["dc_region"] || u.region || "";
                        if (typeof navigator.sendBeacon === 'function' && u.region !== "" && u.use_sendBeacon) {
                            u.server_list.forEach(function(serverItem) {
                                var beaconSent = navigator.sendBeacon(infixParameters(serverItem, u.tc_string), data);
                                if (!beaconSent) {
                                    xhr.open("post", infixParameters(serverItem, u.tc_string), true);
                                    xhr.withCredentials = true;
                                    xhr.send(data);
                                }
                                if (u.make_enrichment_request && u.enrichment_enabled[serverItem]) {
                                    u.do_enrichment(serverItem, enrichment_polling, enrichment_polling_delay);
                                }
                            });
                            utag.DB("Data sent using sendBeacon");
                            return;
                        }
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
                                postData(server_index + 1, enrichment_polling, enrichment_polling_delay, useEventData);
                                if (u.make_enrichment_request && u.enrichment_enabled[server]) {
                                    u.do_enrichment(server, enrichment_polling, enrichment_polling_delay);
                                }
                            }
                        });
                        if (u.server_list[server_index].toLowerCase().indexOf("http") !== 0) {
                            u.server_list[server_index] = u.validateProtocol(u.server_list[server_index], true);
                        }
                        var serverUrl = infixParameters(u.server_list[server_index], u.tc_string);
                        xhr.open("post", serverUrl, true);
                        xhr.withCredentials = true;
                        xhr.send(data);
                    }
                    if (u.use_event_endpoint && (u.tag_config_server === u.event_url || u.tag_config_region !== "default") && window.FormData) {
                        postData(0, u.enrichment_polling, u.enrichment_polling_delay, true);
                    } else if (window.FormData) {
                        postData(0, u.enrichment_polling, u.enrichment_polling_delay, false);
                    } else {
                        for (i = 0; i < u.server_list.length; i++) {
                            (function(i, enrichment_polling, enrichment_polling_delay) {
                                var server = u.server_list[i];
                                setTimeout(function() {
                                    json_string = JSON.stringify(u.data);
                                    if (u.profile_specific_vid == 1 && u.visitor_id) {
                                        json_string = json_string.replace(regExpReplace, u.visitor_id + u.get_account_profile(server)[2]);
                                    }
                                    var img = new Image();
                                    img.src = server + "?" + (u.tc_string ? u.tc_string + "&" : "") + "data=" + encodeURIComponent(json_string);
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
    })("933", "royalmail.main");
} catch (e) {
    utag.DB(e);
}