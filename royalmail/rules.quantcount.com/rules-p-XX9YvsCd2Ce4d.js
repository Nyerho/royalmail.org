/*
 Quantcast measurement tag
 Copyright (c) 2008-2026, Quantcast Corp.
*/
'use strict';
(function(g, k, f) {
    var l = function(a) {
            var b = f.createElement("a");
            b.href = a;
            return b
        },
        m = [/^http[s]?:\/\/((adservice.google.*)|([^\/]*fls\.doubleclick\.net))\/.*~oref=(?<url>[^;\n]*)/, /^http[s]?:\/\/[^\/]*tealium.*\/.*page_url=(?<url>[^&]*)/, /^(?<domain>http[s]?:\/\/[^\/]*\/)wpm@[^\/]*\/.*\/modern\/(?<url>.*)/],
        q = function(a, b, d) {
            return a ? "nc" === a ? !b || !d || 0 > b.indexOf(d) : "eq" === a ? b === d : "sw" === a ? 0 === b.indexOf(d) : "ew" === a ? (a = b.length - d.length, b = b.lastIndexOf(d, a), -1 !== b && b === a) : "c" === a ? 0 <= b.indexOf(d) :
                !1 : !1
        },
        n = function(a, b, d) {
            if (k.top !== k.self) {
                try {
                    for (var h = 0; h < m.length; h++) {
                        var e = f.location.href.match(m[h]);
                        if (e && e.groups.url) {
                            var c = e.groups.url;
                            e.groups.domain && (c = e.groups.domain + c);
                            c = decodeURIComponent(c);
                            break
                        }
                    }
                } catch (r) {}
                c = c ? l(c) : l(f.referrer)
            } else c = f.location;
            c = c.href;
            q(b, c, d) ? a(c) : a(!1)
        },
        p = function(a) {
            return "array" === {}.toString.call(a).match(/\s([a-zA-Z]+)/)[1].toLowerCase() ? {
                labels: a.join(",")
            } : {
                labels: "" + a
            }
        };
    try {
        __qc("defaults", g, {
            labels: "_fp.event.Default"
        })
    } catch (a) {}
    __qc.apply(null, ["rules", [g, null, [
                [p, "_fp.event.special-stamp-christmas"]
            ],
            [
                [n, "eq", "https://shop.royalmail.com/special-stamp-issues/christmas-2025"]
            ]
        ],
        [g, null, [
                [p, "_fp.event.special-stamp-strangerthings"]
            ],
            [
                [n, "c", "special-stamp-issues/stranger-things"]
            ]
        ]
    ])
})("p-XX9YvsCd2Ce4d", window, document);