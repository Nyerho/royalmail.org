//tealium universal tag - utag.869 ut4.0.202605010910, Copyright 2026 Tealium.com Inc. All Rights Reserved.
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
            "_sm_869_5:true": "conversion",
            "channel_closer": "custom.u19",
            "cp.utag_main_ses_id": "custom.u18"
        };
        u.extend = [function(a, b) {
            try {
                b['_sm_869_5'] = "true";
            } catch (e) {
                utag.DB(e);
            }
        }, function(a, b, c, d, e, f, g) {
            if (1) {
                d = b['dom.pathname'];
                if (typeof d == 'undefined') return;
                c = [{
                    '/business/node/1201/done': 'DC-4913528|royal004|ecm_r0|Standard'
                }, {
                    '/business/services/sending/bulk-discounts/call-back-form': 'DC-4913528|royal004|lpg_r00b|Standard'
                }, {
                    '/business/services/sending/specialist-services/door-to-door': 'DC-4913528|marke0|marke000|Standard'
                }, {
                    '/business-parcel-delivery': 'DC-4913528|busin0|bpdlpage|Standard'
                }, {
                    '/business-parcel-delivery-confirmation': 'DC-4913528|busin0|bpdsubmi|Standard'
                }, {
                    '/courier-parcel': 'DC-4913528|busin0|lpg_r000|Standard'
                }, {
                    '/delivery-and-collection-office-finder': 'DC-4913528|royal004|rmdel0|Standard'
                }, {
                    '/fastforward': 'DC-4913528|royal004|lpg_f00|Standard'
                }, {
                    '/id-fraud-centre/services/redirection': 'DC-4913528|royal004|lpg_f0|Standard'
                }, {
                    '/keepsafe-mail-safety': 'DC-4913528|royal004|lpg_r008|Standard'
                }, {
                    '/latest-news': 'DC-4913528|royal004|lpg_r009|Standard'
                }, {
                    '/parcel-delivery': 'DC-4913528|busin0|lpg_r0|Standard'
                }, {
                    '/personal/how-buy-our-services/online-postage/online-postage': 'DC-4913528|rmtar0|tar_onlp|Standard'
                }, {
                    '/personal/receiving-mail/keepsafe': 'DC-4913528|royal004|lpg_n0|Standard'
                }, {
                    '/personal/receiving-mail/redirection': 'DC-4913528|redir00|royal335|Unique'
                }, {
                    '/personal/receiving-mail/update-your-address': 'DC-4913528|royal004|lpg_a0|Standard'
                }, {
                    '/personal/receiving-mail/update-your-address/confirmation': 'DC-4913528|royal004|ecm_a0|Standard'
                }, {
                    '/personal/uk-delivery/online-postage': 'DC-4913528|rmoct0|rmoct_op|Standard'
                }, {
                    '/reacheuropeforless': 'DC-4913528|royal004|lpg_r00c|Standard'
                }, {
                    '/redirections/new/addresses': 'DC-4913528|redir00|royal149|Standard'
                }, {
                    '/redirections/new/dates': 'DC-4913528|redir00|royal873|Standard'
                }, {
                    '/redirections/new/names': 'DC-4913528|redir00|royal187|Standard'
                }, {
                    '/redirections/new/summary': 'DC-4913528|redir00|royal656|Standard'
                }, {
                    '/send-cheap-parcel': 'DC-4913528|busin0|lpg_r00|Standard'
                }, {
                    '/business/services/marketing/catalogues': 'DC-5570019|engag0|catal0|Standard'
                }, {
                    '/business-marketing/mail-made-easy/directory/contact': 'DC-5570019|engag0|mme-f0|Standard'
                }, {
                    '/business-marketing/mail-made-easy/directory/contact/thank-you': 'DC-5570019|conve0|mme-f00|Standard'
                }, {
                    '/business-marketing/mail-made-easy/overview': 'DC-5570019|engag0|mme-l0|Standard'
                }, {
                    '/business-marketing/mail-made-easy/directory': 'DC-5570019|engag0|mme-p0|Standard'
                }, {
                    '/branch-finder': 'DC-4913528|royal004|lpg_r000|Standard'
                }, {
                    '/start-your-redirection-p2': 'DC-4913528|redir00|lpg_r50|Standard'
                }, {
                    '/start-your-redirection': 'DC-4913528|redir00|lpg_r007|Standard'
                }, {
                    '/business-parcel-delivery-dis': 'DC-4913528|busin0|lpg_r002|Standard'
                }, {
                    '/personal/international-delivery': 'DC-4913528|lpg_r00j|lpgpa0|Standard'
                }, {
                    '/australia': 'DC-4913528|lpg_r00|lpgpa0|Standard'
                }, {
                    '/belgium': 'DC-4913528|lpg_r009|lpgpa0|Standard'
                }, {
                    '/canada': 'DC-4913528|lpg_r002|lpgpa0|Standard'
                }, {
                    '/china': 'DC-4913528|lpg_r00d|lpgpa0|Standard'
                }, {
                    '/personal/international-delivery/compare-options': 'DC-4913528|lpg_r00i|lpgpa0|Standard'
                }, {
                    '/czech-republic': 'DC-4913528|lpg_r00g|lpgpa0|Standard'
                }, {
                    '/denmark': 'DC-4913528|lpg_r00f|lpgpa0|Standard'
                }, {
                    '/france': 'DC-4913528|lpgpa0|lpg_r000|Standard'
                }, {
                    '/germany': 'DC-4913528|lpg_r001|lpgpa0|Standard'
                }, {
                    '/india': 'DC-4913528|lpg_r00|lpgpa0|Standard'
                }, {
                    '/ireland': 'DC-4913528|lpg_r002|lpgst0|Standard'
                }, {
                    '/italy': 'DC-4913528|lpg_r004|lpgpa0|Standard'
                }, {
                    '/netherlands': 'DC-4913528|lpg_r006|lpgpa0|Standard'
                }, {
                    '/nigeria': 'DC-4913528|lpg_r00b|lpgpa0|Standard'
                }, {
                    '/norway': 'DC-4913528|lpg_r00e|lpgpa0|Standard'
                }, {
                    '/new-zealand': 'DC-4913528|lpg_r005|lpgpa0|Standard'
                }, {
                    '/pakistan': 'DC-4913528|lpg_r00a|lpgpa0|Standard'
                }, {
                    '/Philippines': 'DC-4913528|lpg_r00c|lpgpa0|Standard'
                }, {
                    '/portugal': 'DC-4913528|lpg_r007|lpgpa0|Standard'
                }, {
                    '/romania': 'DC-4913528|lpg_r008|lpgpa0|Standard'
                }, {
                    '/spain': 'DC-4913528|lpg_r003|lpgpa0|Standard'
                }, {
                    '/united-states-america': 'DC-4913528|lpg_r0|lpgpa0|Standard'
                }, {
                    '/business-parcel-delivery-dis-confirmation': 'DC-4913528|busin0|ecm_r0|Standard'
                }, {
                    '/special-stamp-issues/marvel': 'DC-4913528|lpgst0|lpg-r0|Standard'
                }, {
                    '/business/grow-your-international-business/australia': 'DC-4913528|lpgpa0|lpg_a0|Standard'
                }, {
                    '/business/grow-your-international-business': 'DC-4913528|lpgpa0|lpg_i0|Standard'
                }, {
                    '/business/grow-your-international-business/usa': 'DC-4913528|lpgpa0|lpg_u0|Standard'
                }, {
                    '/business/node/1424/done': 'DC-4913528|reg_bp1|reg_i000|Standard'
                }, {
                    '/keepsafe-mail-safety': 'DC-4913528|royal004|lpg_r008|Standard'
                }, {
                    '/redirections/new/addresses': 'DC-4913528|redir00|royal149|Standard'
                }, {
                    '/personal/receiving-mail/update-your-address': 'DC-4913528|royal004|lpg_a0|Standard'
                }, {
                    '/personal/receiving-mail/update-your-address/confirmation': 'DC-4913528|royal004|ecm_a0|Standard'
                }, {
                    '/business/node/1310/done': 'DC-4913528|royal004|lpg_r00k|Standard'
                }, {
                    '/business/parcel-products-contact-form': 'DC-4913528|royal004|lpg_r00j|Standard'
                }, {
                    '/business/grow-your-international-business/contact-form': 'DC-4913528|royal004|reg_i0|Standard'
                }, {
                    '/business/node/1474/done': 'DC-4913528|royal004|ecm_b0|Standard'
                }, {
                    '/business/grow-your-international-business/china': 'DC-4913528|royal004|lpg_b000|Standard'
                }, {
                    '/business/parcel-delivery': 'DC-4913528|busin0|bpdlpage|Standard'
                }, {
                    '/downloadapp': 'DC-4913528|lpgpa0|lpg_r00l|Standard'
                }, {
                    '/business/manage-mail/redirection/form': 'DC-4913528|redir00|lpg_r00-|Standard'
                }, {
                    '/business/manage-mail/redirection/form/thank-you': 'DC-4913528|redir00|lpg_r00a|Standard'
                }, {
                    '/business-marketing/mail-made-easy/directory/request-a-callback/thank-you': 'DC-5570019|searc00|conve0|Standard'
                }, {
                    '/business/marketing/mail/thanks': 'DC-5570019|conve0|searc0|Standard'
                }, {
                    '/business/mail/marketing/hybrid-mail': 'DC-5570019|engag0|2020-0|Standard'
                }, {
                    '/business/marketing/mail/readyforbusiness': 'DC-5570019|engag0|2020-001|Standard'
                }, {
                    '/business/marketing/mail/doordropshalfprice': 'DC-5570019|engag0|2020-002|Standard'
                }, {
                    '/business/mail/marketing/hybrid-mail-2': 'DC-5570019|engag0|2020-003|Standard'
                }, {
                    '/business/marketing/mail/contact/thanks': 'DC-5570019|conve0|2020-001|Standard'
                }, {
                    '/business-parcel-delivery-dis/thank-you': 'DC-4913528|busin0|ecm_r0|Standard'
                }, {
                    '/business/marketing/mail/doordropshalfprice/form/thank-you': 'DC-5570019|conve0|2020-004|Standard'
                }, {
                    '/business/marketing/mail/readyforbusiness/form/thank-you': 'DC-5570019|conve0|2020-005|Standard'
                }, {
                    '/business/mail/marketing/hybrid-mail-web-form/thank-you': 'DC-5570019|conve0|2020-006|Standard'
                }, {
                    '/collection': 'DC-4913528|rmpar00|lpg_r0|Standard'
                }, {
                    '/business/parcels/collections': 'DC-4913528|rmpar00|lpg_r00|Standard'
                }, {
                    '/helloworld': 'DC-4913528|lpgpa0|lpg_r00n|Standard'
                }, {
                    '/delivertracked': 'DC-4913528|lpgtr0|lpg_r0|Standard'
                }, {
                    '/business-campaign/door-to-door/doordrops': 'DC-4913528|lpg_r00|lpg_d0|Standard'
                }, {
                    '/business-campaign/door-to-door/leaflet-distribution-pricing': 'DC-4913528|lpg_r00|lpg_d00|Standard'
                }, {
                    '/business-campaign/door-to-door/what-are-doordrops': 'DC-4913528|lpg_r00|lpg_d000|Standard'
                }, {
                    '/business-campaign/door-to-door/how-do-doordrops-work': 'DC-4913528|lpg_r00|lpg_d001|Standard'
                }, {
                    '/business-campaign/door-to-door/doordrops-form-success': 'DC-4913528|reg_r0|reg_d0|Standard'
                }, {
                    '/import-one-stop-shop-ioss': 'DC-4913528|lpg_r00|lpg_r0|Standard'
                }, {
                    '/deliverreturns': 'DC-4913528|lpg_r00|lpg_r00|Standard'
                }, {
                    '/deliverreturns/thank-you': 'DC-4913528|reg_r0|reg_r0|Standard'
                }, {
                    '/special-stamp-issues/christmas-2021': 'DC-4913528|lpg_r00|lpg_r006|Standard'
                }, {
                    '/delivertracked/thank-you': 'DC-4913528|reg_r0|reg_r00|Standard'
                }, {
                    '/current-postage-prices/online-parcel-price-reduction': 'DC-4913528|lpg_r000|lpg_r0|Standard'
                }, {
                    '/sending/barcode-stamps/videos': 'DC-4913528|lpg_r000|lpg_r001|Standard'
                }, {
                    '/sending/stamps/penny-black': 'DC-4913528|lpg_r00|lpg_r00-|Standard'
                }, {
                    '/sending/international/international-tracked': 'DC-4913528|lpg_r000|lpg_r00|Standard'
                }, {
                    '/sending/barcoded-stamps': 'DC-4913528|lpg_r000|lpg_r002|Standard'
                }, {
                    '/parcel-sending-options': 'DC-4913528|lpg_r000|lpg_r006|Standard'
                }, {
                    '/sending/international/online-pricing': 'DC-4913528|lpg_r000|lpg_r008|Standard'
                }, {
                    'health/pharmacy2u': 'DC-4913528|lpg_r000|lpg_r00b|Standard'
                }, {
                    '/parcel-sending-options/thank-you': 'DC-4913528|rmtha0|ecm_r0|Standard'
                }, {
                    '/business/international/parcel-delivery': 'DC-4913528|lpg_r000|lpg_r00e|Standard'
                }];
                var m = false;
                for (e = 0; e < c.length; e++) {
                    for (f in utag.loader.GV(c[e])) {
                        if (d == f) {
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
                utag.DB("send:869");
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
                utag.DB("send:869:EXTENSIONS");
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
                utag.DB("send:869:MAPPINGS");
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
                        "id": "utag_869",
                        "attrs": {}
                    });
                }
                utag.DB("send:869:COMPLETE");
            }
        };
        utag.o[loader].loader.LOAD(id);
    }("869", "royalmail.main"));
} catch (error) {
    utag.DB(error);
}