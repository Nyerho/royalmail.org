(function(e, i) {
    typeof exports == "object" && typeof module < "u" ? module.exports = i(require("vue"), require("ph-common/ph-common")) : typeof define == "function" && define.amd ? define(["vue", "ph-common/ph-common"], i) : (e = typeof globalThis < "u" ? globalThis : e || self, e.PhwCookiePopupView2DefaultV1 = i(e.Vue, e.phCommon))
})(this, function(e, i) {
    "use strict";

    function q() {
        function p(g) {
            const u = A();
            return u && u[g] ? u[g] : null
        }

        function _(g, u, k) {
            let c = `${h(g)}=${h(u)}`;
            if (u === null && (k.expiry = -1), k.expiry >= 0 && !k.expires) {
                const S = new Date;
                S.setHours(S.getHours() + k.expiry), k.expires = S
            }
            k.path && (c += `; path=${k.path}`), k.domain && (c += `; domain=${k.domain}`), k.expires && (c += `; expires=${k.expires.toUTCString()}`), k.secure && (c += "; secure"), document.cookie = c
        }

        function P(g) {
            document.cookie = `${g}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;`
        }

        function A() {
            return b(document.cookie)
        }

        function b(g) {
            const u = {},
                k = g.split(/ *; */);
            let c;
            if (k[0] === "") return u;
            for (let S = 0; S < k.length; ++S) c = k[S].split("="), u[w(c[0]) || ""] = w(c[1]);
            return u
        }

        function h(g) {
            try {
                return encodeURIComponent(g)
            } catch {
                return null
            }
        }

        function w(g) {
            try {
                return decodeURIComponent(g)
            } catch {
                return null
            }
        }

        function U() {
            const g = document.cookie,
                u = {},
                k = g.split(/ *; */);
            let c;
            if (k[0] === "") return u;
            for (let S = 0; S < k.length; ++S) c = k[S].split("="), u[decodeURIComponent(c[0])] = decodeURIComponent(c[1]);
            return u
        }

        function B(g) {
            const u = U();
            return u && u[g] ? u[g] : null
        }
        return {
            get: p,
            set: _,
            deleteCookie: P,
            getCookie: B
        }
    }

    function Ce() {
        const p = "close_cookie_popup",
            _ = "ph:gdpr:cookie:accepted",
            P = "ph:gdpr:cookie:declined",
            A = "externalCookieConfig",
            b = "externalCookieTrustArcConfig",
            h = "externalCookieGenericConfig",
            w = "ignoreCookiePages",
            U = "ph:gdpr:OptanonWrapperUpdated",
            B = "storeOneTrustCookieSession",
            g = {
                C0001: "essential",
                1: "essential",
                C0002: "performance",
                2: "performance",
                C0003: "functional",
                3: "functional",
                C0004: "analytics",
                4: "analytics",
                C0005: "social",
                5: "social"
            },
            u = {
                1: "essential",
                2: "functional",
                3: "analytics",
                4: "social",
                TA001: "essential",
                TA002: "functional",
                TA003: "analytics",
                TA004: "social"
            };
        let k = !0,
            c = "",
            S = "",
            X = g,
            Y = u;
        const D = i.getSiteSettings(h),
            ne = "PHPPPE_GCC",
            {
                get: J,
                set: T,
                deleteCookie: C,
                getCookie: V
            } = q(),
            y = window;

        function H(t) {
            return i.contentStore.getContent(t).then(n => n)
        }

        function Z() {
            return k
        }

        function O(t, n, o, r) {
            o && (c = o), k = n;
            const l = !!c,
                s = i.getSiteSettings("gdpr") || {};
            S = s && (s.hasOwnProperty("cookieTypeV1") || s.hasOwnProperty("cookieType")) ? s.cookieTypeV1 || s.cookieType : "sticky", n ? S === "tentative" ? c ? c = "a" : r ? (c = "d", k = !1, i.removeRecomContentFromLocalStorage()) : c = "u" : S === "sticky" && !l ? (r && (k = !1), c = "s") : c = "a" : c = "d", E(), (!n || l && c !== "u") && i.publishEvent(p, {
                cookieValue: c
            }), (!n || c === "s") && i.removeRecomContentFromLocalStorage();
            const a = {};
            let d = "";
            d = n ? "cookies_allow_click" : "cookies_decline_click", i.trackWidgetClick(t, d, a), G()
        }

        function E(t, n) {
            const o = new Date;
            o.setTime(o.getTime() + 7776e6);
            const r = {
                    expires: o,
                    path: "/",
                    secure: !0
                },
                l = i.getSiteSettings("gdpr");
            l && l.parentDomainCookie && (l.parentDomain ? r.domain = l.parentDomain : r.domain = I(".com")), T(t || ne, n || c, r)
        }

        function I(t) {
            const n = window.location.hostname.indexOf(".");
            t || (t = ".com");
            const o = n < window.location.hostname.indexOf(t);
            let r;
            return o ? r = window.location.hostname.substring(n === -1 ? 0 : n + 1) : r = window.location.hostname, r
        }

        function G() {
            c === "d" ? m(P) : c === "a" && m(_)
        }

        function m(t, n) {
            const o = new CustomEvent(t, {
                bubbles: !0,
                detail: n || {}
            });
            document.dispatchEvent(o)
        }

        function x(t) {
            t.styleUrl && (t.styleUrl = t.styleUrl.startsWith("http") ? t.styleUrl : `${i.getCdnUrl()}/${t.styleUrl}`, i.loadStyle("trustArcStyle", t.styleUrl))
        }

        function Q(t) {
            t.dependentScriptUrl && (t.dependentScriptUrl = t.dependentScriptUrl.startsWith("http") ? t.dependentScriptUrl : `${i.getCdnUrl()}/${t.dependentScriptUrl}`, i.loadScript("trustArcScript", t.dependentScriptUrl, !0))
        }

        function v(t) {
            return X[t]
        }

        function j(t) {
            const n = [];
            for (let o = 0; o < t.length; o++) t[o] !== "" && v(t[o]) && n.push(v(t[o]));
            return n
        }

        function ee(t, n) {
            n = n || {};
            let o = [];
            const r = (t == null ? void 0 : t.availOnAllowedCookies) || [];
            let l = (n == null ? void 0 : n.groups) || y.OnetrustActiveGroups,
                s = !0;
            if (l) {
                l = l.split(",");
                for (let d = 0; d < r.length; d++)
                    if (r[d] && l.indexOf(r[d]) === -1) {
                        s = !1;
                        break
                    }
                c = "d", s && (c = "a"), E();
                const a = {};
                if (t && t.trackCookieMap && t.trackCookieMap.cookieMap) {
                    const d = j(l);
                    o = $(t.trackCookieMap.cookieMap, d), a.disabledCookies = o, a.cookieMap = t.trackCookieMap.cookieMap, M(t, d), K(t, o), R(t, o)
                }
                m(U, a)
            }
        }

        function se(t, n, o) {
            try {
                i.loadScript("genericScript", t.scriptUrl, !0, !1, o).then(() => {
                    n && n()
                })
            } catch (r) {
                console.log("Error in inserting script", r)
            }
        }
        async function te(t) {
            t.scriptUrl && !t.scriptUrl.startsWith("http") && (t.scriptUrl = `${i.getCdnUrl()}/${t.scriptUrl}`), t.preRequisiteScriptUrl && !t.preRequisiteScriptUrl.startsWith("http") && (t.preRequisiteScriptUrl = `${i.getCdnUrl()}/${t.preRequisiteScriptUrl}`), X = t.cookieCategoryConfig || g, x(t);
            const n = () => {
                const o = document.createElement("script");
                o.src = t.scriptUrl, o.setAttribute("data-document-language", "true"), o.type = "text/javascript", o.setAttribute("async", ""), o.setAttribute("data-domain-script", t.domainKey), o.setAttribute("charset", "UTF-8"), t.dataLanguage && o.setAttribute("data-language", t.dataLanguage), t.ignoreOverrideOptanon ? t.ignoreOverrideOptanon && (y.phApp.OptanonWrapper = ee.bind(null, t)) : y.OptanonWrapper = ee.bind(null, t), o.onload = () => {
                    Q(t)
                };
                const r = document.getElementsByTagName("script")[0];
                r && r.parentNode && r.parentNode.insertBefore(o, r)
            };
            if (t.preRequisiteScriptUrl) try {
                await i.loadScript("'phw:cookie-popup:preRequisiteScript'", t.preRequisiteScriptUrl)
            } catch (o) {
                console.error("Prerequisite script failed to load, continuing with external cookie script", o)
            }
            n()
        }

        function ae(t) {
            const n = [];
            return t.forEach(o => {
                o && n.push(o.toString())
            }), n
        }

        function ke(t) {
            return t && t === "internal" ? "i" : t
        }

        function re(t) {
            let n = i.getLocale();
            switch (n = n.split("_"), t) {
                case "VISITED_COUNTRY":
                    return n[1];
                case "VISITED_LANG":
                    return n[0];
                case "VISITED_VARIANT":
                    return ke(window.phApp.siteType);
                default:
                    return ""
            }
        }

        function M(t, n) {
            const o = new Date;
            o.setTime(o.getTime() + 7776e6);
            const r = {
                expires: o,
                path: "/"
            };
            t.trackCookieMap && t.trackCookieMap.csCookies && n && n.forEach(l => {
                const s = t.trackCookieMap.csCookies[l];
                s && s.forEach(a => {
                    a !== "VISITED_VARIANT" && re(a) !== "external" && q().set(a, re(a), r)
                })
            })
        }

        function K(t, n) {
            t.trackCookieMap && t.trackCookieMap.csCookies && n && n.forEach(o => {
                (t.trackCookieMap.csCookies[o] || []).forEach(l => {
                    q().deleteCookie(l)
                })
            })
        }

        function oe(t) {
            return Y[t]
        }

        function ie(t) {
            const n = [];
            for (let o = 0; o < t.length; o++) t[o] !== "" && n.push(oe(t[o]));
            return n
        }

        function $(t, n) {
            const o = [];
            return Object.keys(t).forEach(r => {
                n.includes(r) || o.push(r)
            }), o
        }

        function R(t, n) {
            const o = {},
                r = [];
            t.trackCookieMap && t.trackCookieMap.csCookies && n && (n.forEach(l => {
                (t.trackCookieMap.csCookies[l] || []).forEach(a => {
                    r.includes(a) || r.push(a)
                })
            }), o.onetrustDisabledCookies = r, i.getDDO(B, o))
        }

        function F(t, n) {
            let o = [];
            const r = t.availOnAllowedCookies || [];
            let l = !0;
            for (let a = 0; a < r.length; a++)
                if (r[a] && n.indexOf(r[a]) === -1) {
                    l = !1;
                    break
                }
            c = "d", l && (c = "a"), E();
            const s = {};
            if (D) {
                o = $(t.trackCookieMap.cookieMap, n), s.disabledCookies = o, s.cookieMap = t.trackCookieMap.cookieMap, M(t, n), K(t, o), m(U, s);
                return
            }
            if (t.trackCookieMap && t.trackCookieMap.cookieMap) {
                const a = ie(n);
                o = $(t.trackCookieMap.cookieMap, a), s.disabledCookies = o, s.cookieMap = t.trackCookieMap.cookieMap, M(t, a), K(t, o), R(t, o)
            }
            m(U, s)
        }

        function ce(t, n) {
            let {
                data: o
            } = n;
            if (typeof o == "string" && (o = JSON.parse(o)), o.message === "submit_preferences" || o.message === "remove_iframe") {
                let r = y.phApp.baseDomain || t.currentDomain;
                r = r.replace(/https?:\/\//g, "");
                const l = y.truste.cma.callApi("getGDPRConsentDecision", r),
                    s = ae(l.consentDecision);
                F(t, s)
            }
        }

        function W(t) {
            var d;
            if (!document.getElementById("consent_blackbar")) {
                const f = document.createElement("div");
                f.setAttribute("id", "consent_blackbar"), document.body.appendChild(f)
            }
            t.scriptUrl && !t.scriptUrl.startsWith("http") && (t.scriptUrl = `${i.getCdnUrl()}/${t.scriptUrl}`), Y = t.cookieCategoryConfig || u, x(t);
            const o = document.createElement("script");
            o.src = t.scriptUrl, o.setAttribute("data-document-language", "true"), o.type = "text/javascript", o.setAttribute("async", ""), o.setAttribute("charset", "UTF-8");
            let r = y.phApp.baseDomain || t.currentDomain;
            r = r.replace(/https?:\/\//g, "");
            const l = {
                    PrivacyManagerAPI: {
                        action: "getConsent",
                        timestamp: new Date().getTime(),
                        self: r
                    }
                },
                s = JSON.stringify(l);
            y.top.postMessage(s, "*"), o.onload = () => {
                window.addEventListener("message", f => {
                    ce(t, f)
                }), setTimeout(() => {
                    let f = q().get("notice_gdpr_prefs");
                    if (f) {
                        f = f.slice(0, -1), f = f.split(",");
                        for (let N = 0; N < f.length; N++) f[N] = Number(f[N]) + 1
                    }
                    const L = ae(f || []);
                    F(t, L)
                }, 150)
            };
            const a = document.getElementsByTagName("script")[0];
            a && ((d = a.parentNode) == null || d.insertBefore(o, a))
        }

        function z() {
            if (D) {
                const t = D.attributes;
                if (D.scriptUrl && se(D, null, t), x(D), D.cookieName) {
                    const n = D.cookieName,
                        o = i.getSiteSettings(n);
                    if (o) {
                        const {
                            scriptUrl: r,
                            styleUrl: l
                        } = o;
                        r && i.loadScript(n, o.scriptUrl), l && i.loadStyle(n, o.styleUrl)
                    }
                }
                document.addEventListener("ph:externalCookieEvent", n => {
                    F(D, n.detail)
                })
            }
        }

        function le() {
            const t = i.getSiteSettings(A),
                n = i.getSiteSettings(b),
                o = i.getSiteSettings(w) || [],
                r = i.getPageName();
            let l = !1;
            return o.indexOf(r) !== -1 ? !1 : (t ? (te(t), l = !0) : n ? (W(n), l = !0) : D && (l = !0, z()), l)
        }
        return {
            setGdprCookie: O,
            setCookie: E,
            getParentDomain: I,
            raiseGdprActionEvent: G,
            raiseActionEvent: m,
            getContent: H,
            getIsAccepted: Z,
            getExternalCookieEnabled: le
        }
    }

    function _e(p, _, P, A) {
        if (!p || !_) return "";
        if (typeof p == "object") {
            if (!P) return "";
            const b = _[P];
            let h = p[b];
            if (h || Object.keys(p).forEach(w => {
                    if (/[-*]/g.test(w)) {
                        const U = w.replace("*", "");
                        if (b >= U && (h = p[w]), !h) {
                            const B = w.split("-");
                            B && B.length === 2 && b >= B[0] && b <= B[1] && (h = p[w])
                        }
                    }
                }), !h)
                if (p.default) h = "default";
                else return "";
            return de(h, _, A)
        }
        return de(p, _, A)
    }

    function de(p, _, P) {
        const A = /\{\{\s*(.*?)\s*\}\}/g,
            b = /\[\[\s*(.*?)\s*\]\]/g;
        return !p || typeof p != "string" || (p = p.replace(/&lt;/g, "<"), p = p.replace(/&gt;/g, ">"), p = p.replace(A, (h, w) => _.hasOwnProperty(w) ? _[w] : ""), P && (p = encodeURIComponent(p)), p = p.replace(b, (h, w) => {
            if (!w) return w
        })), p
    }
    const Pe = ["aria-label", "role"],
        be = ["aria-label"],
        Te = {
            key: 0,
            class: e.normalizeClass(["phw-mb-6", "phw-mb-md-4"]),
            "data-ps": "1c9eaf98-figure-1"
        },
        De = ["src", "alt"],
        Oe = ["innerHTML"],
        me = {
            class: "phw-btn phw-btn-lg phw-g-btn-secondary phw-width-sm-4",
            "data-ph-at-id": "cookie-settings-link-btn",
            "data-ps": "1c9eaf98-a-1"
        },
        Ae = {
            "data-ph-at-id": "cookie-settings-link-btn-text",
            "data-ps": "1c9eaf98-span-2"
        },
        Be = {
            class: "phw-icon-ctr phw-mr-1",
            "data-ps": "1c9eaf98-span-3"
        },
        Ne = {
            class: "phw-i-sz-3",
            "aria-hidden": "true",
            fill: "currentcolor",
            "data-ps": "1c9eaf98-svg-1"
        },
        Ue = {
            href: "#phw-cns-icon-close",
            "data-ps": "1c9eaf98-use-1"
        },
        xe = {
            "data-ps": "1c9eaf98-span-4"
        },
        Ie = {
            class: "phw-icon-ctr phw-mr-1",
            "data-ps": "1c9eaf98-span-5"
        },
        Me = {
            class: "phw-i-sz-3",
            "aria-hidden": "true",
            fill: "currentcolor",
            "data-ps": "1c9eaf98-svg-2"
        },
        Re = {
            href: "#phw-cns-icon-check",
            "data-ps": "1c9eaf98-use-2"
        },
        Le = {
            "data-ph-at-id": "cookie-allow-link-text",
            "phae-ref": "2",
            "data-ps": "1c9eaf98-span-6"
        },
        Ve = {
            key: 1,
            class: "popup-modal-backdrop phcriticalhide",
            "data-ps": "1c9eaf98-div-5"
        },
        Ge = {
            class: "modal fade in show phw-s-consent-modal phw-posn-center phw-m-0",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "consent-text-area",
            "data-ps": "1c9eaf98-div-6"
        },
        $e = {
            class: "modal-dialog phw-text-c",
            "data-ps": "1c9eaf98-div-7"
        },
        qe = {
            class: "consent-text-area",
            "data-ph-at-id": "consent-text",
            "data-ps": "1c9eaf98-div-8"
        },
        He = {
            class: "phw-g-text-default-dark",
            "data-ph-at-id": "pii-consent-text",
            "data-ps": "1c9eaf98-span-7"
        },
        je = {
            class: "cookie-button-area phw-mt-2",
            "data-ps": "1c9eaf98-div-9"
        },
        Ke = {
            class: "phw-icon-ctr phw-mr-1",
            "data-ps": "1c9eaf98-span-8"
        },
        Fe = {
            class: "phw-i-sz-3",
            "aria-hidden": "true",
            fill: "currentcolor",
            "data-ps": "1c9eaf98-svg-3"
        },
        We = {
            href: "#phw-cns-icon-check",
            "data-ps": "1c9eaf98-use-3"
        },
        ze = {
            "data-ph-at-id": "pii-consent-accept-link-text",
            "data-ps": "1c9eaf98-span-9"
        };
    return ((p, _) => {
        const P = p.__vccOpts || p;
        for (const [A, b] of _) P[A] = b;
        return P
    })(e.defineComponent({
        __name: "CookiePopupView2DefaultComponent",
        props: {
            instanceId: null,
            contentId: null,
            theme: null,
            widgetTag: null,
            doNotHide: {
                type: Boolean
            }
        },
        setup(p) {
            const {
                instanceId: _,
                contentId: P,
                theme: A,
                widgetTag: b,
                doNotHide: h
            } = p, w = {
                COOKIE_POPUP: 2
            }, U = "PHPPPE_GCC", B = "PHPPPE_PC", g = "top", u = ".phw-s-cookie-banner", k = "close_cookie_popup", c = "ph:gdpr:consent:closed", S = "handle-sticky-elements", X = '[as-element*="header"] .ph-sticky-header, .header-layout .pcs-sticky-header ,.header-layout .ph-sticky-block-fixed', Y = '[as-element^="ph-cvd"][placement="header"] .ph-sticky-header', D = "ignoreCookiePages", ne = "COOKIE_POPUP", J = {
                top: "cookie-popup-top",
                bottom: "cookie-popup-bottom"
            };
            e.ref(0);
            const T = e.ref(null),
                C = e.ref(),
                V = e.ref({
                    showDeclineButton: !0,
                    showCookieSettingsButton: !1
                }),
                y = e.ref(!1),
                H = e.ref(!1);
            let Z = !1,
                O = e.ref(),
                E = "",
                I = "",
                G, m;
            const {
                setGdprCookie: x,
                setCookie: Q,
                raiseGdprActionEvent: v,
                raiseActionEvent: j,
                getContent: ee,
                getExternalCookieEnabled: se
            } = Ce(), {
                get: te,
                set: ae,
                deleteCookie: ke,
                getCookie: re
            } = q();
            e.onBeforeMount(() => {
                ee(P).then(s => {
                    C.value = s
                })
            }), e.onMounted(() => {
                O = T.value, i.usePhCommon().init(O, C, _);
                const s = i.getSiteSettings(D) || [],
                    a = i.getPageName();
                if (s.includes(a)) {
                    y.value = !1;
                    return
                }
                se() || (K(), G = i.getSiteSettings("gdpr") || {}, G && G.position, m = i.phAppStore.siteSettings && i.phAppStore.siteSettings.gdpr && i.phAppStore.siteSettings.gdpr.positionNumber ? i.phAppStore.siteSettings.gdpr.positionNumber : w[ne])
            });
            const M = () => {
                    setTimeout(() => {
                        document.body.setAttribute("tabindex", "-1"), document.body.focus(), document.body.removeAttribute("tabindex")
                    }, 20)
                },
                K = () => {
                    const s = i.getSiteSettings("gdpr") || {};
                    I = s && (s.hasOwnProperty("cookieTypeV1") || s.hasOwnProperty("cookieType")) ? s.cookieTypeV1 || s.cookieType : "sticky", s && s.cookieWindowType, m = s && s.position || g, E = te(U);
                    const a = {};
                    s && s.hasOwnProperty("showDecline") ? a.showDeclineButton = s.showDecline : a.showDeclineButton = !1, s && s.hasOwnProperty("showCookieSettings") ? a.showCookieSettingsButton = s.showCookieSettings : a.showCookieSettingsButton = !1, V.value = a, y.value = E === "s" || !1, Z = s.piiConsent, E ? (I === "tentative" && E === "u" || I === "sticky" && E === "s" ? (oe(), h && (E = "d", I === "tentative" ? x(T, !0, E, h) : x(T, !1, E, h), Q(), i.removeRecomContentFromLocalStorage())) : z(), v(), j(c)) : setTimeout(() => {
                        y.value = !0, oe()
                    }, 10), i.subscribeEvent(k, f => {
                        h || (i.dialogModal.closeDialogPopup(), M(), y.value = !1, W())
                    });
                    const d = te(B);
                    Z && !d && t()
                },
                oe = () => {
                    const s = i.getSiteSettings("gdpr");
                    h || $(), s && !E && x(T, !0, E, h), setTimeout(() => {
                        R()
                    }, 0), window.addEventListener("resize", () => {
                        R()
                    }), F(), ie()
                },
                ie = () => {
                    setTimeout(() => {
                        var s;
                        i.dialogModal.openDialogPopup(T.value, "phw-s-cookie-banner", document.body, (s = T.value) == null ? void 0 : s.querySelector(".phw-s-cookie-allow-link"))
                    }, 20)
                },
                $ = () => {
                    const s = y.value,
                        a = document.querySelector("body");
                    a && (s ? a.classList.contains(J[m]) || (a.className = `${a.className} ${J[m]}`) : a.className = a.className.replace(J[m], ""))
                },
                R = s => {
                    setTimeout(() => {
                        y.value ? s || R(!0) : (z(), window.removeEventListener("resize", () => {
                            R()
                        }))
                    }, 10)
                },
                F = () => {
                    O != null && O.querySelector(".ph-a11y-modal-area") && setTimeout(() => {
                        O != null && O.querySelector(".ph-a11y-modal-area"), O != null && O.querySelector(".ph-a11y-popup-start-focus"), document.activeElement || document.querySelector("body"), ce()
                    }, 0)
                },
                ce = (s, a) => {
                    document.addEventListener("keyup", d => {
                        d.key === "Escape" || d.keyCode === 27 || d.which
                    })
                },
                W = s => {
                    $(), le(), z()
                },
                z = () => {
                    O && (O.style.display = "none")
                },
                le = () => {
                    const s = document.querySelector("body"),
                        a = document.querySelector(u),
                        d = document.querySelector(Y),
                        f = document.querySelector(X),
                        L = document.querySelector(".header-layout .pcs-sticky-header");
                    if (d && a.offsetHeight) {
                        let N = s.style.paddingTop;
                        N = `${parseInt(N,10)-a.offsetHeight}px`, s.style.paddingTop = N, d.style.top = "0px", f && (f.style.top = s.style.paddingTop)
                    } else s.style.removeProperty("padding-top"), f && (f.style.top = "0px", L && (L.style.top = "0px"), f.style.marginTop = null)
                },
                t = () => {
                    H.value = !0, setTimeout(() => {
                        var d;
                        const s = "phw-s-consent-modal",
                            a = (d = T.value) == null ? void 0 : d.querySelector(".phw-s-allow-consent");
                        i.dialogModal.openDialogPopup(T.value, s, document.body, a)
                    }, 100)
                },
                n = () => {
                    x(T, !0, E, h), y.value = !1, W(), j(c), setTimeout(() => {
                        i.publishEvent(S, {})
                    }, 10), i.dialogModal.closeDialogPopup(), M()
                },
                o = () => {
                    x(T, !1, E, h), y.value = !1, W(), j(c), i.dialogModal.closeDialogPopup(), M()
                },
                r = () => {
                    i.dialogModal.closeDialogPopup(), H.value = !1, Q(B, "a"), ie()
                },
                l = () => {
                    n()
                };
            return (s, a) => {
                var d, f, L, N, ue, fe, he, ge, we, Se, ye, Ee;
                return y.value && e.unref(C) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    key: 0,
                    ref_key: "root",
                    ref: T,
                    class: "phw-widget-ctr phw-p-0 phw-widget-empty-ctr",
                    "aria-label": (d = e.unref(C)) == null ? void 0 : d.cookieAriaLabel,
                    role: (f = e.unref(C)) == null ? void 0 : f.regionRole,
                    "data-ps": "1c9eaf98-div-1"
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    class: "phw-container phw-p-10 phw-p-md-6 phw-p-sm-3 phw-s-cookie-banner phw-text-c phw-posn-center phw-m-0",
                    "data-ph-at-id": "cookie-popup-area",
                    "aria-label": (L = e.unref(C)) == null ? void 0 : L.cookieAriaLabel,
                    "data-ps": "1c9eaf98-div-2",
                    onKeyup: a[3] || (a[3] = e.withKeys(pe => l(), ["esc"]))
                }, [(N = e.unref(C)) != null && N.logoImageSrc ? e.withDirectives((e.openBlock(), e.createElementBlock("figure", Te, [e.withDirectives(e.createElementVNode("img", {
                    class: e.normalizeClass(s.$style["gdpr-logo"]),
                    src: (ue = e.unref(C)) == null ? void 0 : ue.logoImageSrc,
                    alt: (fe = e.unref(C)) == null ? void 0 : fe.logoImageAlt,
                    "data-ps": "1c9eaf98-img-1"
                }, null, 10, De), [
                    [e.unref(i.vPhwSetting)]
                ])])), [
                    [e.unref(i.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    "data-tag-type": "p",
                    class: e.normalizeClass(["phw-g-p-default-dark", "phw-mb-0", "phw-overflow-auto", s.$style["cookie-popup-area"], V.value.showDeclineButton ? "decline-enabled" : ""]),
                    "data-ph-at-id": "cookie-text",
                    "data-ps": "1c9eaf98-div-3"
                }, [e.withDirectives(e.createElementVNode("span", {
                    "data-ph-at-id": "cookie-text",
                    "data-ps": "1c9eaf98-span-1",
                    innerHTML: e.unref(_e)((he = e.unref(C)) == null ? void 0 : he.cookietextAreaText, {
                        baseUrl: e.unref(i.getBaseUrl)()
                    })
                }, null, 8, Oe), [
                    [e.unref(i.vPhwSetting)]
                ])], 2)), [
                    [e.unref(i.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    class: e.normalizeClass(["phw-d-flex phw-justify-content-center phw-mt-2 phw-gap-4 phw-flex-sm-column phw-gap-sm-2", ["phw-p-xs-0", V.value.showDeclineButton ? "decline-enabled" : ""]]),
                    "data-ps": "1c9eaf98-div-4"
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("a", me, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Ae, [e.createTextVNode(e.toDisplayString((ge = e.unref(C)) == null ? void 0 : ge.popupCookieSettingsButton.text), 1)])), [
                    [e.unref(i.vPhwSetting)]
                ])])), [
                    [e.vShow, V.value.showCookieSettingsButton],
                    [e.unref(i.vPhwSetting)],
                    [e.unref(i.vPhwHref), "cookiesettings"]
                ]), V.value.showDeclineButton ? e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                    key: 0,
                    class: "phw-btn phw-btn-lg phw-g-btn-primary phw-width-sm-4",
                    "data-ph-at-id": "cookie-close-link",
                    "data-ps": "1c9eaf98-button-1",
                    onClick: a[0] || (a[0] = pe => o())
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Be, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", Ne, [e.withDirectives(e.createElementVNode("use", Ue, null, 512), [
                    [e.unref(i.vPhwSetting)]
                ])])), [
                    [e.unref(i.vPhwSetting)]
                ])])), [
                    [e.unref(i.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", xe, [e.createTextVNode(e.toDisplayString((we = e.unref(C)) == null ? void 0 : we.denyCookiesText), 1)])), [
                    [e.unref(i.vPhwSetting)]
                ])])), [
                    [e.unref(i.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                    class: "phw-btn phw-btn-lg phw-g-btn-primary phw-width-sm-4 phw-s-cookie-allow-link",
                    "data-ph-at-id": "cookie-allow-link",
                    phae: "ph-cookie-popup-v2",
                    "phae-type": "click",
                    "phae-main": "2",
                    "data-ps": "1c9eaf98-button-2",
                    onClick: a[1] || (a[1] = pe => n())
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Ie, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", Me, [e.withDirectives(e.createElementVNode("use", Re, null, 512), [
                    [e.unref(i.vPhwSetting)]
                ])])), [
                    [e.unref(i.vPhwSetting)]
                ])])), [
                    [e.unref(i.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", Le, [e.createTextVNode(e.toDisplayString((Se = e.unref(C)) == null ? void 0 : Se.allowCookiesText), 1)])), [
                    [e.unref(i.vPhwSetting)]
                ])])), [
                    [e.unref(i.vPhwSetting)]
                ])], 2)), [
                    [e.unref(i.vPhwSetting)]
                ]), H.value ? e.withDirectives((e.openBlock(), e.createElementBlock("div", Ve, [e.withDirectives((e.openBlock(), e.createElementBlock("div", Ge, [e.withDirectives((e.openBlock(), e.createElementBlock("div", $e, [e.withDirectives((e.openBlock(), e.createElementBlock("div", qe, [e.withDirectives((e.openBlock(), e.createElementBlock("span", He, [e.createTextVNode(e.toDisplayString((ye = e.unref(C)) == null ? void 0 : ye.piiConsentTextBlock), 1)])), [
                    [e.unref(i.vPhwSetting)]
                ])])), [
                    [e.unref(i.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", je, [e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                    class: "phw-btn phw-g-btn-primary phw-s-allow-consent wctrl phw-width-sm-4",
                    "data-ph-at-id": "pii-consent-accept-link",
                    "data-ps": "1c9eaf98-button-3",
                    onClick: a[2] || (a[2] = pe => r())
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Ke, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", Fe, [e.withDirectives(e.createElementVNode("use", We, null, 512), [
                    [e.unref(i.vPhwSetting)]
                ])])), [
                    [e.unref(i.vPhwSetting)]
                ])])), [
                    [e.unref(i.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", ze, [e.createTextVNode(e.toDisplayString((Ee = e.unref(C)) == null ? void 0 : Ee.piiConsentAcceptLink), 1)])), [
                    [e.unref(i.vPhwSetting)]
                ])])), [
                    [e.unref(i.vPhwSetting)]
                ])])), [
                    [e.unref(i.vPhwSetting)]
                ])])), [
                    [e.unref(i.vPhwSetting)]
                ])])), [
                    [e.unref(i.vPhwSetting)]
                ])])), [
                    [e.unref(i.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)], 40, be)), [
                    [e.unref(i.vPhwSetting)]
                ])], 8, Pe)), [
                    [e.unref(i.vPhwSetting)],
                    [e.unref(i.vPhwSticky)]
                ]) : e.createCommentVNode("", !0)
            }
        }
    }), [
        ["__cssModules", {
            $style: {
                "gdpr-logo": "_gdpr-logo_6f3di_2",
                "cookie-popup-area": "_cookie-popup-area_6f3di_5"
            }
        }]
    ])
});