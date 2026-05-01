//tealium universal tag - utag.1006 ut4.0.202605010910, Copyright 2026 Tealium.com Inc. All Rights Reserved.
try {
    (function(id, loader) {
        var u = {};
        utag.o[loader].sender[id] = u;
        if (utag.ut === undefined) {
            utag.ut = {};
        }
        if (utag.ut.loader === undefined) {
            u.loader = function(o) {
                var b, c, l, a = document;
                if (o.type === "iframe") {
                    b = a.createElement("iframe");
                    o.attrs = o.attrs || {
                        "height": "1",
                        "width": "1",
                        "style": "display:none"
                    };
                    for (l in utag.loader.GV(o.attrs)) {
                        b.setAttribute(l, o.attrs[l]);
                    }
                    b.setAttribute("src", o.src);
                } else if (o.type == "img") {
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
                    for (l in utag.loader.GV(o.attrs)) {
                        b[l] = o.attrs[l];
                    }
                    b.src = o.src;
                }
                if (o.id) {
                    b.id = o.id
                };
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
        } else {
            u.loader = utag.ut.loader;
        }
        u.ev = {
            view: 1
        };
        u.initialized = false;
        u.map = {};
        u.extend = [function(a, b) {
            try {
                if (1) {
                    window.gtag = window.gtag || function() {
                        (window.dataLayer = window.dataLayer || []).push(arguments);
                    };

                    function send7starsTag(to, payload, eventName) {
                        var obj = payload || {};
                        var eventData = {
                            'allow_custom_scripts': true,
                            'send_to': to
                        };
                        for (var key in obj) {
                            if (obj.hasOwnProperty(key)) {
                                eventData[key] = obj[key];
                            }
                        }
                        var ev = eventName || 'conversion';
                        gtag('event', ev, eventData);
                    }
                    async function hashSHA256(input) {
                        const str = typeof input === 'string' ? input.trim() : String(input);
                        const encoder = new TextEncoder();
                        const data = encoder.encode(str);
                        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
                        const hashArray = Array.from(new Uint8Array(hashBuffer));
                        const hashHex = hashArray
                            .map(byte => byte.toString(16).padStart(2, '0'))
                            .join('');
                        return hashHex;
                    }
                    setPixel7stars("https://www.googletagmanager.com/gtag/js?id=DC-12881203");
                    window.dataLayer = window.dataLayer || [];

                    function gtag() {
                        dataLayer.push(arguments);
                    }
                    gtag('js', new Date());
                    gtag('config', 'DC-12881203');
                    gtag('event', 'conversion', {
                        'allow_custom_scripts': true,
                        'send_to': 'DC-12881203/allpa0/allpa0+standard',
                        'u23': document.location.href
                    });
                    gtag('event', 'conversion', {
                        'allow_custom_scripts': true,
                        'send_to': 'DC-12881203/retarget/siteuniq+unique',
                        'u23': document.location.href
                    });
                    if ((document.location.host == 'shop.royalmail.com' && document.location.pathname != "/checkout/onepage/success/") || document.location.pathname == "/nextlevel") {
                        ! function(w, d) {
                            if (!w.rdt) {
                                var p = w.rdt = function() {
                                    p.sendEvent ? p.sendEvent.apply(p, arguments) : p.callQueue.push(arguments)
                                };
                                p.callQueue = [];
                                var t = d.createElement("script");
                                t.src = "https://www.redditstatic.com/ads/pixel.js", t.async = !0;
                                var s = d.getElementsByTagName("script")[0];
                                s.parentNode.insertBefore(t, s)
                            }
                        }(window, document);
                        rdt('init', 't2_ax7vaycz2', {
                            "optOut": false,
                            "useDecimalCurrencyValues": true
                        });
                        rdt('track', 'PageVisit');
                        window._qevents = window._qevents || [];
                        (function() {
                            var elem = document.createElement('script');
                            elem.src = (document.location.protocol == "https:" ? "https://secure" : "http://edge") + ".quantserve.com/quant.js";
                            elem.async = true;
                            elem.type = "text/javascript";
                            var scpt = document.getElementsByTagName('script')[0];
                            scpt.parentNode.insertBefore(elem, scpt);
                        })();
                        window._qevents.push({
                            "qacct": "p-XX9YvsCd2Ce4d",
                            "labels": "_fp.event.PageView"
                        });
                    }
                    switch (document.location.pathname) {
                        case "/":
                            send7starsTag("DC-12881203/retarget/lp-home+standard");
                            break;
                        case "/courier-parcel":
                            send7starsTag("DC-12881203/retarget/lp-courp+standard");
                            break;
                        case "/parcel-delivery":
                            send7starsTag("DC-12881203/retarget/lp-pdl+standard");
                            break;
                        case "/send-cheap-parcel":
                            send7starsTag("DC-12881203/retarget/lp-scp+standard");
                            break;
                        case "/receiving/po-box":
                            send7starsTag("DC-12881203/retarget/lp-pobox+standard");
                            (function(c, w, v) {
                                function getUrlParameter(e) {
                                    var t = new RegExp("[\?&]" + e + "=([^&#]*)").exec(location.search);
                                    return null === t ? "" : decodeURIComponent(t[1].replace(/\+/g, " "))
                                }

                                function setCookie(e, t) {
                                    var r, n = w.location.host,
                                        a = n.substring(n.indexOf("."));
                                    (a.match(/\./g).length < 2 || ".co" === a.substring(0, a.indexOf(".", 1))) && (a = "." + n), r = 'domain=' + a;
                                    var i = new Date,
                                        o = i.getTime() + 31536e6;
                                    i.setTime(o);
                                    var c = "expires=" + i.toUTCString();
                                    v.cookie = 'e' + '=' + 't' + ';' + 'c' + ';' + 'r' + ';path=/;sameSite=none;Secure=true'
                                }
                                var tdclid_sn = getUrlParameter("tdclid_sn");
                                tdclid_sn && setCookie("tdclid_sn", tdclid_sn);
                                var q = '?org=' + c.organization + '&prog=' + c.programId;
                                w.tdfallback = function(e) {
                                    var t, r = v.getElementsByTagName("script")[0];
                                    (t = v.createElement("script")).src = e + q, r.parentNode.insertBefore(t, r)
                                };
                                (function(i, s, o, g, r, a, m) {
                                    i['TDConversionObject'] = r;
                                    i[r] = i[r] || function() {
                                        (i[r].q = i[r].q || []).push(arguments)
                                    }, i[r].l = 1 * new Date();
                                    a = s.createElement(o), m = s.getElementsByTagName(o)[0];
                                    a.async = 1;
                                    a.src = g;
                                    m.parentNode.insertBefore(a, m)
                                })(window, document, 'script', 'https://sdk.tradedoubler.com/trsdk' + q, 'tdconv');
                                tdconv('init', c);
                            })({
                                organization: '2439580',
                                programId: '382610',
                                program: false,
                                element: 'iframe'
                            }, window, document);
                            tdconv('tracking-consent', '[TRACKING_CONSENT]');
                            break;
                        case "/business-parcel-delivery":
                            send7starsTag("DC-12881203/retarget/lp-bpdl+standard");
                            var script = document.createElement('script');
                            script.async = true;
                            script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-11087551000';
                            document.head.appendChild(script);
                            window.dataLayer = window.dataLayer || [];

                            function gtag() {
                                dataLayer.push(arguments);
                            }
                            gtag('js', new Date());
                            gtag('config', 'AW-11087551000');
                            gtag('config', 'AW-11087551000/zTaKCMv7tZAaEJi0-qYp', {
                                'phone_conversion_number': '0800 177 7324'
                            });
                            break;
                        case "/receiving/keepsafe":
                            send7starsTag("DC-12881203/retarget/lp-ks+standard");
                            (function(c, w, v) {
                                function getUrlParameter(e) {
                                    var t = new RegExp("[\?&]" + e + "=([^&#]*)").exec(location.search);
                                    return null === t ? "" : decodeURIComponent(t[1].replace(/\+/g, " "))
                                }

                                function setCookie(e, t) {
                                    var r, n = w.location.host,
                                        a = n.substring(n.indexOf("."));
                                    (a.match(/\./g).length < 2 || ".co" === a.substring(0, a.indexOf(".", 1))) && (a = "." + n), r = 'domain=' + a;
                                    var i = new Date,
                                        o = i.getTime() + 31536e6;
                                    i.setTime(o);
                                    var c = "expires=" + i.toUTCString();
                                    v.cookie = 'e' + '=' + 't' + ';' + 'c' + ';' + 'r' + ';path=/;sameSite=none;Secure=true'
                                }
                                var tdclid_sn = getUrlParameter("tdclid_sn");
                                tdclid_sn && setCookie("tdclid_sn", tdclid_sn);
                                var q = '?org=' + c.organization + '&prog=' + c.programId;
                                w.tdfallback = function(e) {
                                    var t, r = v.getElementsByTagName("script")[0];
                                    (t = v.createElement("script")).src = e + q, r.parentNode.insertBefore(t, r)
                                };
                                (function(i, s, o, g, r, a, m) {
                                    i['TDConversionObject'] = r;
                                    i[r] = i[r] || function() {
                                        (i[r].q = i[r].q || []).push(arguments)
                                    }, i[r].l = 1 * new Date();
                                    a = s.createElement(o), m = s.getElementsByTagName(o)[0];
                                    a.async = 1;
                                    a.src = g;
                                    m.parentNode.insertBefore(a, m)
                                })(window, document, 'script', 'https://sdk.tradedoubler.com/trsdk' + q, 'tdconv');
                                tdconv('init', c);
                            })({
                                organization: '2439580',
                                programId: '382610',
                                program: false,
                                element: 'iframe'
                            }, window, document);
                            tdconv('tracking-consent', '[TRACKING_CONSENT]');
                            break;
                        case "/start-your-redirection":
                            send7starsTag("DC-12881203/retarget/lp-redir+standard");
                            break;
                        case "/business-campaign/door-to-door/doordrops":
                            send7starsTag("DC-12881203/retarget/lp-d2d+standard");
                            break;
                        case "/health/pharmacy2u":
                            send7starsTag("DC-12881203/p2u/lp-p2u+standard");
                            break;
                        case "/business-parcel-delivery-confirmation":
                            send7starsTag("DC-12881203/leads/typ-bpdl+transactions", {
                                'value': 1,
                                "dc_custom_params": {
                                    "ord": b['qp.sid']
                                }
                            });
                            break;
                        case "/special-stamp-issues/flowers":
                            send7starsTag("DC-12881203/stamps/lp-flowr+standard")
                            break;
                        case "/special-stamp-issues/flying-scotsman":
                            send7starsTag("DC-12881203/stamps/lp-fscot+standard")
                            break;
                        case "/special-stamp-issues/definitives-his-majesty-king-charles":
                            send7starsTag("DC-12881203/stamps/lp-hmkc+standard")
                            break;
                        case "/checkout/cart/":
                            send7starsTag("DC-12881203/ecomm/ecmshbsk+standard", {
                                "dc_custom_params": {
                                    "match_id": b['tealium_random'],
                                    "ord": b['tealium_random']
                                }
                            });
                            break;
                        case "/receiving/redirection/concessions":
                            send7starsTag("DC-12881203/retarget/lp-rdcon+standard");
                            ! function(w, d) {
                                if (!w.rdt) {
                                    var p = w.rdt = function() {
                                        p.sendEvent ? p.sendEvent.apply(p, arguments) : p.callQueue.push(arguments)
                                    };
                                    p.callQueue = [];
                                    var t = d.createElement("script");
                                    t.src = "https://www.redditstatic.com/ads/pixel.js", t.async = !0;
                                    var s = d.getElementsByTagName("script")[0];
                                    s.parentNode.insertBefore(t, s)
                                }
                            }(window, document);
                            rdt('init', 't2_ax7vaycz2', {
                                "optOut": false,
                                "useDecimalCurrencyValues": true
                            });
                            rdt('track', 'PageVisit');
                            break;
                        case "/green":
                            send7starsTag("DC-12881203/retarget/lp-green+standard");
                            break;
                        case "/special-stamp-issues/his-majesty-king-charles-a-new-reign":
                            send7starsTag("DC-12881203/stamps/speci0+standard");
                            break;
                        case "/parcel-sending-options/thank-you":
                            send7starsTag("DC-12881203/retarget/typ-bpso+standard");
                            break;
                        case "/green/thank-you":
                            window.lintrk('track', {
                                conversion_id: 12387514
                            });
                            break;
                        case "/in-good-hands/thank-you":
                            send7starsTag("DC-12881203/retarget/typ-igh+unique");
                            window.lintrk('track', {
                                conversion_id: 13460010
                            });
                            break;
                        case "/special-stamp-issues/blackadder":
                            send7starsTag("DC-12881203/lp-blkad/stamps+standard");
                            break;
                        case "/business-campaign/door-to-door/doordrops-form-success":
                            send7starsTag("DC-12881203/retarget/typ-d2d+unique");
                            break;
                        case "/stamps-and-supplies/subscriptions/sign-up-form/thank-you":
                            send7starsTag("DC-12881203/stamps/typ-stsu+unique", {
                                "dc_custom_params": {
                                    "match_id": b['tealium_random'],
                                    "ord": 1,
                                    "num": b['tealium_random']
                                }
                            });
                            ! function(w, d) {
                                if (!w.rdt) {
                                    var p = w.rdt = function() {
                                        p.sendEvent ? p.sendEvent.apply(p, arguments) : p.callQueue.push(arguments)
                                    };
                                    p.callQueue = [];
                                    var t = d.createElement("script");
                                    t.src = "https://www.redditstatic.com/ads/pixel.js";
                                    t.async = !0;
                                    var s = d.getElementsByTagName("script")[0];
                                    s.parentNode.insertBefore(t, s)
                                }
                            }(window, document);
                            rdt('init', 't2_ax7vaycz2', {
                                "optOut": false,
                                "useDecimalCurrencyValues": true
                            });
                            rdt('track', 'Custom', {
                                customEventName: 'Subscribe',
                                externalId: b['tealium_random'],
                                conversionId: b['tealium_random']
                            });
                            break;
                        case "/checkout/onepage/success/":
                            var categories = (Array.isArray(b.productCategory) ? b.productCategory : [b.productCategory]) || [];
                            var subcategories = b.productSubcategory && Array.isArray(b.productSubcategory) ? b.productSubcategory.join('|') : '';
                            if (categories.some(cat => /philatelic/i.test(cat)) && a === "view") {
                                let philatelicQuantities = 0;
                                const philatelicValues = [];
                                const philatelicCategories = [];
                                const philatelicSubcategories = [];
                                for (let i = 0; i <= categories.length; i++) {
                                    if (/philatelic/i.test(categories[i])) {
                                        const quantity = Number(b.productQuantity[i]) || 1;
                                        philatelicQuantities += quantity;
                                        philatelicValues.push(Number(b.productPrice[i]) * quantity);
                                        philatelicCategories.push(categories[i]);
                                        philatelicSubcategories.push(b.productSubcategory[i]);
                                    }
                                }
                                send7starsTag("DC-12881203/sales/ecmstamp+transactions", {
                                    value: (philatelicValues.reduce((sum, value) => sum + value, 0) + Number(b.transactionDeliveryCharge)) || 0,
                                    currency: 'GBP',
                                    transaction_id: b.transactionID || b['tealium_random'],
                                    quantity: philatelicQuantities,
                                    u1: b._cprodname && Array.isArray(b._cprodname) ? b._cprodname.join('|') : '',
                                    u16: b.transactionTotal || 0,
                                    u20: b.transactionID,
                                    u24: philatelicCategories.join('|'),
                                    u25: philatelicSubcategories.join('|'),
                                    u26: "TRUE",
                                    "dc_custom_params": {
                                        "match_id": b['tealium_random']
                                    }
                                }, 'purchase');
                            }! function(w, d) {
                                if (!w.rdt) {
                                    var p = w.rdt = function() {
                                        p.sendEvent ? p.sendEvent.apply(p, arguments) : p.callQueue.push(arguments)
                                    };
                                    p.callQueue = [];
                                    var t = d.createElement("script");
                                    t.src = "https://www.redditstatic.com/ads/pixel.js";
                                    t.async = !0;
                                    var s = d.getElementsByTagName("script")[0];
                                    s.parentNode.insertBefore(t, s)
                                }
                            }(window, document);
                            rdt('init', 't2_ax7vaycz2', {
                                "optOut": false,
                                "useDecimalCurrencyValues": true
                            });
                            (async function() {
                                try {
                                    const rawEmail = b.visitorEmail || '';
                                    const normalizedEmail = rawEmail.trim().toLowerCase();
                                    const hashedEmail = normalizedEmail ? await hashSHA256(normalizedEmail) : null;
                                    const rawTransactionID = b.transactionID || '';
                                    const normalizedTransactionID = rawTransactionID.trim().toLowerCase();
                                    const hashedTransactionID = normalizedTransactionID ? await hashSHA256(normalizedTransactionID) : null;
                                    rdt('track', 'Purchase', {
                                        currency: "GBP",
                                        itemCount: b.productID.length,
                                        externalId: b.transactionID,
                                        value: b.transactionTotal,
                                        conversionId: b['tealium_random'],
                                        email: hashedEmail
                                    });
                                    rdt('track', 'Custom', {
                                        customEventName: 'Purchase - Stamps',
                                        itemCount: b.productID.length,
                                        value: b.transactionTotal,
                                        currency: "GBP",
                                        externalId: b.transactionID,
                                        conversionId: b['tealium_random'],
                                        email: hashedEmail
                                    });
                                } catch (error) {}
                            })();
                            initializeTikTokAnalytics();
                            ttq.track('CompletePayment', {
                                value: b.transactionTotal,
                                currency: 'GBP',
                            });
                            window._qevents = window._qevents || [];
                            (function() {
                                var elem = document.createElement('script');
                                elem.src = (document.location.protocol == "https:" ? "https://secure" : "http://edge") + ".quantserve.com/quant.js";
                                elem.async = true;
                                elem.type = "text/javascript";
                                var scpt = document.getElementsByTagName('script')[0];
                                scpt.parentNode.insertBefore(elem, scpt);
                            })();
                            window._qevents.push({
                                "qacct": "p-XX9YvsCd2Ce4d",
                                "labels": "_fp.event.Stamp Purchase,_fp.pcat.Stamps",
                                "orderid": b.transactionID,
                                "revenue": b.transactionTotal,
                                "event": "refresh"
                            });
                            (function(w, d) {
                                var id = 'spdt-capture',
                                    n = 'script';
                                if (!d.getElementById(id)) {
                                    w.spdt = w.spdt || function() {
                                        (w.spdt.q = w.spdt.q || []).push(arguments);
                                    };
                                    var e = d.createElement(n);
                                    e.id = id;
                                    e.async = 1;
                                    e.src = 'https://pixel.byspotify.com/ping.min.js';
                                    var s = d.getElementsByTagName(n)[0];
                                    s.parentNode.insertBefore(e, s);
                                }
                                w.spdt('conf', {
                                    key: '50713e3c274c45f4b9698588326daec6'
                                });
                                w.spdt('purchase', {
                                    order_id: b.transactionID,
                                    discount_code: '',
                                    is_new_customer: '',
                                    value: b.transactionTotal,
                                    currency: 'GBP',
                                });
                            })(window, document);
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
                            (async function() {
                                try {
                                    const rawEmail = b.visitorEmail || '';
                                    const normalizedEmail = rawEmail.trim().toLowerCase();
                                    const hashedEmail = normalizedEmail ? await hashSHA256(normalizedEmail) : null;
                                    utag_data.visitorEmailHashed256 = hashedEmail;
                                    fbq('track', 'Purchase - Stamps', {
                                        currency: b.transactionCurrency,
                                        value: b.transactionTotal,
                                        order_id: b.transactionID,
                                        content_type: "product",
                                        em: hashedEmail ? [hashedEmail] : [],
                                        content_ids: b.productSKU
                                    }, {
                                        eventID: b.transactionID
                                    });
                                    fbq('track', 'Purchase', {
                                        currency: b.transactionCurrency,
                                        value: b.transactionTotal,
                                        order_id: b.transactionID,
                                        content_type: "product",
                                        content_category: "Stamps",
                                        em: hashedEmail ? [hashedEmail] : [],
                                        content_ids: b.productSKU
                                    }, {
                                        eventID: b.transactionID
                                    });
                                } catch (error) {
                                    console.error('Facebook tracking error:', error);
                                }
                            })();
                            break;
                        case "/special-stamp-issues/warhammer":
                            send7starsTag("DC-12881203/lp-wh/stamps+standard");
                            break;
                        case "/in-good-hands":
                            send7starsTag("DC-12881203/retarget/lp-igh+standard");
                            break;
                        case "/special-stamp-issues/harry-potter":
                            send7starsTag("DC-12881203/stamps/lp-hpott+standard");
                            break;
                        case "/business/delivery-solutions/food-and-drink":
                            send7starsTag("DC-12881203/retarget/btnfdgit+standard");
                            break;
                        case "/stamps-and-supplies/subscriptions/sign-up-form":
                            send7starsTag("DC-12881203/stamps/reg-stsu+standard", {
                                "dc_custom_params": {
                                    "match_id": b['tealium_random'],
                                    "ord": b['tealium_random']
                                }
                            });
                            break;
                        case "/stamps-and-supplies/subscriptions":
                            send7starsTag("DC-12881203/stamps/lp-stsub+standard", {
                                "dc_custom_params": {
                                    "match_id": b['tealium_random'],
                                    "ord": b['tealium_random']
                                }
                            });
                            break;
                        case "/sending/send-small-parcels":
                            send7starsTag("DC-12881203/retarget/lp-spd+standard");
                            break;
                        case "/sending/cheap-parcel-delivery":
                            send7starsTag("DC-12881203/retarget/lp-cpd+standard");
                            break;
                        case "/business-campaign/door-to-door/leaflet-distribution-pricing":
                            send7starsTag("DC-12881203/retarget/lp-d2dpr+standard");
                            var script = document.createElement('script');
                            script.async = true;
                            script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-385288156';
                            document.head.appendChild(script);
                            window.dataLayer = window.dataLayer || [];

                            function gtag() {
                                dataLayer.push(arguments);
                            }
                            gtag('js', new Date());
                            gtag('config', 'AW-385288156');
                            gtag('config', 'AW-385288156/7s0_CIvBteQaENyP3LcB', {
                                'phone_conversion_number': '0800 177 7812'
                            });
                            break;
                        case "/international-parcel-sending/thank-you":
                            send7starsTag("DC-12881203/retarget/typ-ips+unique");
                            break;
                        case "/nextlevel/thank-you":
                            window.lintrk('track', {
                                conversion_id: 22388306
                            });
                            break;
                        case "/christmas":
                            send7starsTag("DC-12881203/retarget/lp-xmas+standard");
                            break;
                        case "/subscriptions-and-gifts/christmas-gift-ideas":
                            send7starsTag("DC-12881203/stamps/lp-xmgft+standard");
                            break;
                        case "/subscriptions-and-gifts/subscriptions":
                            send7starsTag("DC-12881203/stamps/lp-sbgft+standard");
                            break;
                    }
                    if (document.location.href.indexOf('/business/parcel-delivery/sector?source=food-drink') != -1) {
                        send7starsTag("DC-12881203/retarget/regfdfs+standard");
                    }
                    switch (utag_data["pageName"]) {
                        case "RM BUS >International >Account 1462 Form Confirmation":
                        case "RM BUS >International >Usa 1463 Form Confirmation":
                        case "RM BUS >International >Canada 1464 Form Confirmation":
                        case "RM BUS >International >France 1465 Form Confirmation":
                        case "RM BUS >International >Australia 1466 Form Confirmation":
                            send7starsTag("DC-12881203/bizintl/typ-acfm+standard");
                            break;
                        case "RM BUS >International >Account 1462":
                            send7starsTag("DC-12881203/bizintl/lp-acc+standard");
                            break;
                        case "RM BUS >International >Australia 1466":
                            send7starsTag("DC-12881203/bizintl/lp-aus+standard");
                            break;
                        case "RM BUS >International >Canada 1464":
                            send7starsTag("DC-12881203/bizintl/lp-can+standard");
                            break;
                        case "RM BUS >International >France 1465":
                            send7starsTag("DC-12881203/bizintl/lp-fra+standard");
                            break;
                        case "RM BUS >International >Usa 1463":
                            send7starsTag("DC-12881203/bizintl/lp-usa+standard");
                            break;
                        case "RM Web App >Receiving Mail > Keepsafe >Get a Quote":
                            send7starsTag("DC-12881203/retarget/ecmksapp+standard");
                            break;
                    }
                    if (document.location.host == "shop.royalmail.com") {
                        (function(w, d) {
                            var id = 'spdt-capture',
                                n = 'script';
                            if (!d.getElementById(id)) {
                                w.spdt = w.spdt || function() {
                                    (w.spdt.q = w.spdt.q || []).push(arguments);
                                };
                                var e = d.createElement(n);
                                e.id = id;
                                e.async = 1;
                                e.src = 'https://pixel.byspotify.com/ping.min.js';
                                var s = d.getElementsByTagName(n)[0];
                                s.parentNode.insertBefore(e, s);
                            }
                            w.spdt('conf', {
                                key: '50713e3c274c45f4b9698588326daec6'
                            });
                            w.spdt('view');
                        })(window, document);
                    }

                    function setPixel7stars(src) {
                        var p_tag = document.createElement('script');
                        p_tag.setAttribute('type', 'text/javascript');
                        p_tag.setAttribute('src', src);
                        document.body.appendChild(p_tag);
                    }

                    function initializeTikTokAnalytics() {
                        ! function(w, d, t) {
                            w.TiktokAnalyticsObject = t;
                            var ttq = w[t] = w[t] || [];
                            ttq.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie"];
                            ttq.setAndDefer = function(t, e) {
                                t[e] = function() {
                                    t.push([e].concat(Array.prototype.slice.call(arguments, 0)))
                                }
                            };
                            for (var i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i]);
                            ttq.instance = function(t) {
                                for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++)
                                    ttq.setAndDefer(e, ttq.methods[n]);
                                return e
                            };
                            ttq.load = function(e, n) {
                                var i = "https://analytics.tiktok.com/i18n/pixel/events.js";
                                ttq._i = ttq._i || {}, ttq._i[e] = [], ttq._i[e]._u = i, ttq._t = ttq._t || {}, ttq._t[e] = +new Date, ttq._o = ttq._o || {}, ttq._o[e] = n || {};
                                n = document.createElement("script");
                                n.type = "text/javascript", n.async = !0, n.src = i + "?sdkid=" + e + "&lib=" + t;
                                e = document.getElementsByTagName("script")[0];
                                e.parentNode.insertBefore(n, e)
                            };
                            ttq.load('CHD6PQBC77U6I2JC2PLG');
                            ttq.page();
                        }(window, document, 'ttq');
                    }
                    if (document.location.href.indexOf('/business/parcel-delivery/sector?source=food-drink') != -1) {
                        ! function(f, b, e, v, n, t, s) {
                            if (f.fbq) return;
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
                        fbq('track', 'Get in Touch Button');
                    }
                    if (document.location.pathname == "/health/pharmacy2u") {
                        ! function(f, b, e, v, n, t, s) {
                            if (f.fbq) return;
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
                        fbq('track', 'Health');
                    }
                    var path_hash = document.location.pathname + document.location.hash;
                    switch (path_hash) {
                        case "/":
                        case "/green":
                            ! function(f, b, e, v, n, t, s) {
                                if (f.fbq) return;
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
                            fbq('track', 'PageView');
                            break;
                        case "/keep-safe#/order-confirmation":
                        case "/keep-safe#/confirmation":
                            ! function(f, b, e, v, n, t, s) {
                                if (f.fbq) return;
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
                            (async function() {
                                try {
                                    const rawEmail = b.visitorEmail || '';
                                    const normalizedEmail = rawEmail.trim().toLowerCase();
                                    const hashedEmail = normalizedEmail ? await hashSHA256(normalizedEmail) : null;
                                    fbq('track', 'Purchase - Keepsafe', {
                                        currency: b.transactionCurrency,
                                        value: b.transactionTotal,
                                        order_id: b.transactionID,
                                        content_type: "product",
                                        em: hashedEmail ? [hashedEmail] : []
                                    }, {
                                        eventID: b.transactionID
                                    });
                                    fbq('track', 'Purchase', {
                                        currency: b.transactionCurrency,
                                        value: b.transactionTotal,
                                        order_id: b.transactionID,
                                        content_type: "product",
                                        content_category: "Keepsafe",
                                        em: hashedEmail ? [hashedEmail] : []
                                    }, {
                                        eventID: b.transactionID
                                    });
                                } catch (error) {}
                            })();
                            (function(c, w, v) {
                                function getUrlParameter(e) {
                                    var t = new RegExp("[\?&]" + e + "=([^&#]*)").exec(location.search);
                                    return null === t ? "" : decodeURIComponent(t[1].replace(/\+/g, " "))
                                }

                                function setCookie(e, t) {
                                    var r, n = w.location.host,
                                        a = n.substring(n.indexOf("."));
                                    (a.match(/\./g).length < 2 || ".co" === a.substring(0, a.indexOf(".", 1))) && (a = "." + n), r = 'domain=' + a;
                                    var i = new Date,
                                        o = i.getTime() + 31536e6;
                                    i.setTime(o);
                                    var c = "expires=" + i.toUTCString();
                                    v.cookie = 'e' + '=' + 't' + ';' + 'c' + ';' + 'r' + ';path=/;sameSite=none;Secure=true'
                                }
                                var tdclid_sn = getUrlParameter("tdclid_sn");
                                tdclid_sn && setCookie("tdclid_sn", tdclid_sn);
                                var q = '?org=' + c.organization + '&prog=' + c.programId;
                                w.tdfallback = function(e) {
                                    var t, r = v.getElementsByTagName("script")[0];
                                    (t = v.createElement("script")).src = e + q, r.parentNode.insertBefore(t, r)
                                };
                                (function(i, s, o, g, r, a, m) {
                                    i['TDConversionObject'] = r;
                                    i[r] = i[r] || function() {
                                        (i[r].q = i[r].q || []).push(arguments)
                                    }, i[r].l = 1 * new Date();
                                    a = s.createElement(o), m = s.getElementsByTagName(o)[0];
                                    a.async = 1;
                                    a.src = g;
                                    m.parentNode.insertBefore(a, m)
                                })(window, document, 'script', 'https://sdk.tradedoubler.com/trsdk' + q, 'tdconv');
                                tdconv('init', c);
                            })({
                                organization: '2439580',
                                programId: '382610',
                                program: false,
                                element: 'iframe'
                            }, window, document);
                            tdconv('tracking-consent', '[TRACKING_CONSENT]');
                            var transactionTotal = b.transactionTotal;
                            var transactionTotalString = transactionTotal ? transactionTotal.toString() : "";
                            var eventId = 460661;
                            switch (transactionTotalString) {
                                case "21.50":
                                    eventId = 460661;
                                    break;
                                case "25.00":
                                    eventId = 460663;
                                    break;
                                case "30.50":
                                    eventId = 461085;
                                    break;
                                case "38.00":
                                    eventId = 460665;
                                    break;
                                case "70.50":
                                    eventId = 460761;
                                    break;
                                case "104.00":
                                    eventId = 460763;
                                    break;
                            }
                            var TDConversion = {
                                transactionId: b.transactionID,
                                ordervalue: b.transactionTotal,
                                currency: b.transactionCurrency,
                                event: eventId,
                                cdt: {
                                    extId: '',
                                    extType: 1
                                },
                                eventTime: '',
                                validOn: '',
                                products: []
                            };
                            tdconv('track', 'sale', TDConversion);
                            tdfallback('https://a.imgstatic.eu/trsdk');
                            break;
                        case "/po-box#/confirmation":
                            ! function(f, b, e, v, n, t, s) {
                                if (f.fbq) return;
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
                            (async function() {
                                try {
                                    const rawEmail = b.visitorEmail || '';
                                    const normalizedEmail = rawEmail.trim().toLowerCase();
                                    const hashedEmail = normalizedEmail ? await hashSHA256(normalizedEmail) : null;
                                    fbq('track', 'Purchase - PO Box', {
                                        currency: b.transactionCurrency,
                                        value: b.transactionTotal,
                                        order_id: b.transactionID,
                                        content_type: "product",
                                        em: hashedEmail ? [hashedEmail] : []
                                    }, {
                                        eventID: b.transactionID
                                    });
                                } catch (error) {}
                            })();
                            (function(c, w, v) {
                                function getUrlParameter(e) {
                                    var t = new RegExp("[\?&]" + e + "=([^&#]*)").exec(location.search);
                                    return null === t ? "" : decodeURIComponent(t[1].replace(/\+/g, " "))
                                }

                                function setCookie(e, t) {
                                    var r, n = w.location.host,
                                        a = n.substring(n.indexOf("."));
                                    (a.match(/\./g).length < 2 || ".co" === a.substring(0, a.indexOf(".", 1))) && (a = "." + n), r = 'domain=' + a;
                                    var i = new Date,
                                        o = i.getTime() + 31536e6;
                                    i.setTime(o);
                                    var c = "expires=" + i.toUTCString();
                                    v.cookie = 'e' + '=' + 't' + ';' + 'c' + ';' + 'r' + ';path=/;sameSite=none;Secure=true'
                                }
                                var tdclid_sn = getUrlParameter("tdclid_sn");
                                tdclid_sn && setCookie("tdclid_sn", tdclid_sn);
                                var q = '?org=' + c.organization + '&prog=' + c.programId;
                                w.tdfallback = function(e) {
                                    var t, r = v.getElementsByTagName("script")[0];
                                    (t = v.createElement("script")).src = e + q, r.parentNode.insertBefore(t, r)
                                };
                                (function(i, s, o, g, r, a, m) {
                                    i['TDConversionObject'] = r;
                                    i[r] = i[r] || function() {
                                        (i[r].q = i[r].q || []).push(arguments)
                                    }, i[r].l = 1 * new Date();
                                    a = s.createElement(o), m = s.getElementsByTagName(o)[0];
                                    a.async = 1;
                                    a.src = g;
                                    m.parentNode.insertBefore(a, m)
                                })(window, document, 'script', 'https://sdk.tradedoubler.com/trsdk' + q, 'tdconv');
                                tdconv('init', c);
                            })({
                                organization: '2439580',
                                programId: '382610',
                                program: false,
                                element: 'iframe'
                            }, window, document);
                            tdconv('tracking-consent', '[TRACKING_CONSENT]');
                            var pobDuration = b.transactionProduct && b.transactionProduct[0] && b.transactionProduct[0].productAttributes && b.transactionProduct[0].productAttributes.POBduration;
                            var eventId = 460655;
                            switch (pobDuration.toString()) {
                                case '3':
                                    eventId = 460655;
                                    break;
                                case '6':
                                    eventId = 460657;
                                    break;
                                case '12':
                                    eventId = 460659;
                                    break;
                            }
                            var TDConversion = {
                                transactionId: b.transactionID,
                                ordervalue: b.transactionTotal,
                                currency: b.transactionCurrency,
                                event: eventId,
                                cdt: {
                                    extId: '',
                                    extType: 1
                                },
                                eventTime: '',
                                validOn: '',
                                products: []
                            };
                            tdconv('track', 'sale', TDConversion);
                            tdfallback('https://a.imgstatic.eu/trsdk');
                            break;
                        case "/po-box":
                        case "/po-box#/your-details":
                        case "/po-box#/service-details":
                        case "/po-box#/check-details":
                            (function(c, w, v) {
                                function getUrlParameter(e) {
                                    var t = new RegExp("[\?&]" + e + "=([^&#]*)").exec(location.search);
                                    return null === t ? "" : decodeURIComponent(t[1].replace(/\+/g, " "))
                                }

                                function setCookie(e, t) {
                                    var r, n = w.location.host,
                                        a = n.substring(n.indexOf("."));
                                    (a.match(/\./g).length < 2 || ".co" === a.substring(0, a.indexOf(".", 1))) && (a = "." + n), r = 'domain=' + a;
                                    var i = new Date,
                                        o = i.getTime() + 31536e6;
                                    i.setTime(o);
                                    var c = "expires=" + i.toUTCString();
                                    v.cookie = 'e' + '=' + 't' + ';' + 'c' + ';' + 'r' + ';path=/;sameSite=none;Secure=true'
                                }
                                var tdclid_sn = getUrlParameter("tdclid_sn");
                                tdclid_sn && setCookie("tdclid_sn", tdclid_sn);
                                var q = '?org=' + c.organization + '&prog=' + c.programId;
                                w.tdfallback = function(e) {
                                    var t, r = v.getElementsByTagName("script")[0];
                                    (t = v.createElement("script")).src = e + q, r.parentNode.insertBefore(t, r)
                                };
                                (function(i, s, o, g, r, a, m) {
                                    i['TDConversionObject'] = r;
                                    i[r] = i[r] || function() {
                                        (i[r].q = i[r].q || []).push(arguments)
                                    }, i[r].l = 1 * new Date();
                                    a = s.createElement(o), m = s.getElementsByTagName(o)[0];
                                    a.async = 1;
                                    a.src = g;
                                    m.parentNode.insertBefore(a, m)
                                })(window, document, 'script', 'https://sdk.tradedoubler.com/trsdk' + q, 'tdconv');
                                tdconv('init', c);
                            })({
                                organization: '2439580',
                                programId: '382610',
                                program: false,
                                element: 'iframe'
                            }, window, document);
                            tdconv('tracking-consent', '[TRACKING_CONSENT]');
                            break;
                        case "/deliverreturns/thank-you":
                            setTimeout(function() {
                                if (typeof window.lintrk === 'function') {
                                    window.lintrk('track', {
                                        conversion_id: 24765146
                                    });
                                }
                            }, 2000);
                            break;
                        case "/deliverinternational/thank-you":
                            setTimeout(function() {
                                if (typeof window.lintrk === 'function') {
                                    window.lintrk('track', {
                                        conversion_id: 24765138
                                    });
                                }
                            }, 2000);
                            break;
                    }
                }
            } catch (e) {
                utag.DB(e)
            }
        }];
        u.send = function(a, b) {
            if (u.ev[a] || u.ev.all !== undefined) {
                var c, d, e, f, i;
                u.data = {};
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
                for (d in utag.loader.GV(u.map)) {
                    if (b[d] !== undefined && b[d] !== "") {
                        e = u.map[d].split(",");
                        for (f = 0; f < e.length; f++) {
                            u.data[e[f]] = b[d];
                        }
                    }
                }
            }
        };
        utag.o[loader].loader.LOAD(id);
    })("1006", "royalmail.main");
} catch (error) {
    utag.DB(error);
}