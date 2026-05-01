//tealium universal tag - utag.1008 ut4.0.202605010910, Copyright 2026 Tealium.com Inc. All Rights Reserved.
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
                if (b['dom.pathname'] == '/business/international/account' || b['dom.pathname'] == '/business/international/usa' || b['dom.pathname'] == '/business/international/canada' || b['dom.pathname'] == '/business/international/france' || b['dom.pathname'] == '/business/international/australia' || b['dom.pathname'] == '/business/international/digital') {
                    setPixel("https://www.googletagmanager.com/gtag/js?id=DC-4913528")
                    window.dataLayer = window.dataLayer || [];

                    function gtag() {
                        dataLayer.push(arguments);
                    }
                    gtag('js', new Date());
                    gtag('config', 'DC-4913528');
                    switch (utag_data["pageName"]) {
                        case "RM BUS >International >Account 1462 Form Confirmation":
                            sendTag("DC-4913528/lpg_r000/lpg_r00f+Standard");
                            break;
                        case "RM BUS >International >Usa 1463 Form Confirmation":
                            sendTag("DC-4913528/lpg_r000/lpg_r00g+Standard");
                            break;
                        case "RM BUS >International >Canada 1464 Form Confirmation":
                            sendTag("DC-4913528/lpg_r000/lpg_r00h+Standard");
                            break;
                        case "RM BUS >International >France 1465 Form Confirmation":
                            sendTag("DC-4913528/lpg_r000/lpg_r00i+Standard");
                            break;
                        case "RM BUS >International >Australia 1466 Form Confirmation":
                            sendTag("DC-4913528/lpg_r000/lpg_r00j+Standard");
                            break;
                        case "RM BUS >International >Digital 1557":
                            sendTag("DC-4913528/lpgst0/lpg_b0+Standard");
                            break;
                        case "RM BUS >International >Digital 1557 Form Confirmation":
                            sendTag("DC-4913528/royal004/eng_b0+Standard");
                            break;
                    }

                    function sendTag(to) {
                        gtag('event', 'conversion', {
                            'allow_custom_scripts': true,
                            'send_to': to
                        });
                    }

                    function setPixel(src) {
                        var p_tag = document.createElement('script');
                        p_tag.setAttribute('type', 'text/javascript');
                        p_tag.setAttribute('src', src);
                        document.body.appendChild(p_tag);
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
    })("1008", "royalmail.main");
} catch (error) {
    utag.DB(error);
}