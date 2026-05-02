(function(e, t) {
    typeof exports == "object" && typeof module < "u" ? module.exports = t(require("vue"), require("ph-common/ph-common")) : typeof define == "function" && define.amd ? define(["vue", "ph-common/ph-common"], t) : (e = typeof globalThis < "u" ? globalThis : e || self, e.PhwNpsDefaultDefaultV1 = t(e.Vue, e.phCommon))
})(this, function(e, t) {
    "use strict";

    function P() {
        function D(n) {
            const c = k();
            return c && c[n] ? c[n] : null
        }

        function h(n, c, r) {
            let f = `${I(n)}=${I(c)}`;
            if (c === null && (r.expiry = -1), r.expiry >= 0 && !r.expires) {
                const g = new Date;
                g.setHours(g.getHours() + r.expiry), r.expires = g
            }
            r.path && (f += `; path=${r.path}`), r.domain && (f += `; domain=${r.domain}`), r.expires && (f += `; expires=${r.expires.toUTCString()}`), r.secure && (f += "; secure"), document.cookie = f
        }

        function a(n) {
            document.cookie = `${n}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;`
        }

        function k() {
            return E(document.cookie)
        }

        function E(n) {
            const c = {},
                r = n.split(/ *; */);
            let f;
            if (r[0] === "") return c;
            for (let g = 0; g < r.length; ++g) f = r[g].split("="), c[l(f[0]) || ""] = l(f[1]);
            return c
        }

        function I(n) {
            try {
                return encodeURIComponent(n)
            } catch {
                return null
            }
        }

        function l(n) {
            try {
                return decodeURIComponent(n)
            } catch {
                return null
            }
        }

        function B() {
            const n = document.cookie,
                c = {},
                r = n.split(/ *; */);
            let f;
            if (r[0] === "") return c;
            for (let g = 0; g < r.length; ++g) f = r[g].split("="), c[decodeURIComponent(f[0])] = decodeURIComponent(f[1]);
            return c
        }

        function b(n) {
            const c = B();
            return c && c[n] ? c[n] : null
        }
        return {
            get: D,
            set: h,
            deleteCookie: a,
            getCookie: b
        }
    }
    const _e = "ignoreCookiePages",
        Be = "ignoreNpsPagesList",
        N = "PHPPPE_NPS",
        m = "npsInfo",
        ye = "submit_rating_click",
        ue = "send_feedback_click",
        T = "event",
        Z = "pageVisits",
        _ = "timer",
        Ee = "npsConfig",
        De = "feedback_load",
        Pe = "popup_close_click",
        X = {
            position: "bottom",
            npsCookieType: "once",
            flow: {
                pageVisits: [{
                    pageName: "apply"
                }],
                timer: {
                    time: "10000"
                },
                event: {
                    page_search: "3"
                }
            }
        };

    function Ne(D) {
        const h = D;
        let a = !1,
            k = !1,
            E = !1;
        const I = new Date;
        let l = {},
            B = X.flow,
            b = !1,
            n = X,
            c = !1;
        const r = e.ref(0),
            f = e.ref("ratingStep"),
            g = e.ref(!1),
            d = e.ref(""),
            p = e.ref(!1),
            x = e.ref("bottom");

        function C(i) {
            return t.contentStore.getContent(i)
        }

        function z() {
            t.localStore.getItem("nps_setCookie") && t.localStore.removeItem("nps_setCookie")
        }

        function L() {
            t.localStore.removeItem(m), t.localStore.removeItem("npsApply"), t.localStore.removeItem("npsEvent")
        }

        function O() {
            let i, s, o;
            k && z(), P().get(N) && P().get(N) === "a" ? L() : (E ? t.localStore.setItem("npsEvent", !0) : (i = new Date, s = i - I, o = (l[_] && parseInt(l[_].time, 10)) - s, o >= 0 ? l[_].time = o : l[_].time = 0), k || t.localStore.setItem(m, l))
        }

        function R() {
            return t.localStore.getItem(m)
        }

        function A() {
            const i = R();
            if (i && (i.length || Object.keys(m).length)) typeof i == "string" ? l = JSON.parse(i) : l = i;
            else if (!t.localStore.getItem("nps_setCookie")) {
                t.localStore.setItem(m, B);
                try {
                    l = JSON.parse(JSON.stringify(B))
                } catch {}
            }
        }

        function $(i) {
            k = !0, P().deleteCookie(N);
            const s = {
                path: "/",
                secure: !0
            };
            i === "a" ? P().set(N, i, s) : i === "p" && (P().set(N, i, s), t.localStore.setItem("nps_setCookie", "true"))
        }

        function V() {
            if ((t.getSiteSettings("ignoreNpsPagesList") || []).indexOf(t.phAppStore.pageName) !== -1) return;
            const s = R(),
                o = t.localStore.getItem("nps_setCookie"),
                y = P().get(N);
            if (!y && s || y && y === "p" && !o) {
                L(), g.value = !0, t.trackWidgetClick(h.value, De, {}), setTimeout(() => {
                    p.value = !0, setTimeout(() => {
                        p.value = !1
                    }, 300)
                }, 300), setTimeout(() => {
                    const w = h.value.querySelector(".phs-a11y-widget-live-area");
                    w && w.firstElementChild && b ? (w.firstElementChild.classList.add("hide"), w.firstElementChild.classList.remove("hide")) : w && w.firstElementChild && !b && (w.firstElementChild.innerHTML = "")
                }, 250);
                let {
                    npsCookieType: S
                } = n;
                S === "once" ? S = "a" : S = "p", $(S)
            } else L()
        }

        function M() {
            const i = l[_] && parseInt(l[_].time, 10),
                s = !!t.localStore.getItem("npsEvent");
            b = !s, i === 0 && (b = !1), setTimeout(() => {
                s ? V() : E || window.postMessage("NPSTimerOut", t.phAppStore.baseUrl)
            }, i)
        }

        function H(i) {
            if (k) return;
            const s = l[T] || {},
                o = i || "";
            s && s[o] && (Number.isNaN(l[T][o]) && (l[T][o] = parseInt(l[T][o], 10)), l[T][o] -= 1, l[T][o] === 0 && (l[_] = {}, l[_].time = 1e3, E = !0))
        }

        function U() {
            const i = l[Z] || [],
                {
                    pageName: s
                } = t.phAppStore;
            i.forEach(o => {
                if (o.pageName === "apply") {
                    const y = t.localStore.getItem("npsApply");
                    s === "apply" ? t.localStore.setItem("npsApply", "true") : s === "applythankyou" && y && (b = !1, V())
                } else o.pageName === s && (b = !1, V())
            })
        }

        function G() {
            l && Object.keys(l).forEach(i => {
                switch (i) {
                    case _:
                        M();
                        break;
                    case T:
                        H();
                        break;
                    case Z:
                        U();
                        break
                }
            })
        }

        function q(i) {
            r.value = i;
            const s = h.value.querySelectorAll("label svg");
            for (let o = 0; o < s.length; o++) o < i ? (s[o].classList.add("phw-g-icon-primary"), s[o].classList.remove("phw-g-icon-light")) : (s[o].classList.remove("phw-g-icon-primary"), s[o].classList.add("phw-g-icon-light"))
        }

        function F(i, s) {
            setTimeout(() => {
                i && h.value.querySelector(i) && h.value.querySelector(i).focus()
            }, s || 0)
        }

        function j() {
            const i = h.value.querySelector(".phs-a11y-widget-live-area");
            i && i.hasAttribute("aria-live") && (i.removeAttribute("aria-live"), i.removeAttribute("aria-atomic"), i.innerHTML = "")
        }

        function K(i) {
            if (i === "ratingStep") {
                const s = {
                    userRating: r.value
                };
                t.trackWidgetClick(h.value, ye, s), n.npsCookieType === "persistent" && (c = !0, $("a")), j(), f.value = "feedbackStep", F(".phw-s-close", 10)
            } else {
                f.value = "thankYou";
                const s = {
                    userFeedback: d.value
                };
                t.trackWidgetClick(h.value, ue, s), F(".phw-s-close", 10)
            }
        }

        function J() {
            k = !1, B && B.event && t.trackWidgetCallBack(H), A(), G(), window.addEventListener("message", i => {
                i.data === "NPSTimerOut" && document.visibilityState === "visible" && V()
            }, !1)
        }

        function W() {
            const i = t.getSiteSettings(_e) || [],
                s = t.getSiteSettings(Be) || [];
            if (i.concat(s).indexOf(t.phAppStore.pageName) !== -1) return;
            const y = P().get(N);
            if (y && y === "a") return;
            window.addEventListener("beforeunload", () => {
                a = !0, O()
            }), window.addEventListener("unload", () => {
                a || O()
            });
            let S = localStorage.getItem(m);
            if (S || S === "{}") try {
                S = JSON.parse(S), Object.keys(S).length || localStorage.removeItem(m)
            } catch {}
            t.getDDO(Ee, {}).then(w => {
                w && w.status === "success" && w.data && (n = w.data || X, x.value = n.position ? n.position : x.value, B = n.flow ? n.flow : {}, J())
            })
        }

        function Y() {
            h.value && (h.value.style.display = "none")
        }

        function Q() {
            const i = {};
            t.trackWidgetClick(h.value, Pe, i), n.npsCookieType === "persistent" && !c && $("p"), k = !1, j(), z(), A(), B[_] && B[_].time && M(), Y()
        }
        return {
            getContent: C,
            init: W,
            showNps: g,
            currentStep: f,
            closeNpsPopup: Q,
            userRating: q,
            userRatingValue: r,
            sendFeedback: K,
            feedBackInfo: d,
            hideSrText: p,
            position: x
        }
    }
    const me = {
            class: e.normalizeClass(["phs-a11y-widget-live-area", "phw-visually-hidden"]),
            "data-ps": "be717660-div-2"
        },
        Te = {
            "data-ps": "be717660-div-3"
        },
        Ie = {
            class: "phs-widget-wrapper",
            "data-ps": "be717660-div-4"
        },
        Ve = ["aria-label"],
        xe = {
            class: "phw-icon-ctr",
            "data-ps": "be717660-span-1"
        },
        Le = {
            class: "phw-i-sz-2-5",
            fill: "currentcolor",
            "aria-hidden": "true",
            "data-ps": "be717660-svg-1"
        },
        $e = {
            href: "#phw-cns-icon-close",
            "data-ps": "be717660-use-1"
        },
        ze = {
            "data-ps": "be717660-div-5"
        },
        Oe = {
            key: 0,
            class: e.normalizeClass(["phw-p-4"]),
            "data-ps": "be717660-div-6"
        },
        Re = {
            id: "npsHeading",
            class: e.normalizeClass(["phw-g-h2-card-sub-title-dark-small", "phw-text-c"]),
            "data-ph-at-id": "rating-heading",
            "data-ps": "be717660-h2-1"
        },
        Ae = {
            class: e.normalizeClass(["phw-pt-2", "phw-pb-2", "phw-pr-0", "phw-pl-0", "phw-text-c", "phw-d-flex", "phw-align-items-center", "phw-justify-content-center"]),
            "data-ps": "be717660-div-7"
        },
        Me = {
            class: "phw-posn-relative",
            "data-ps": "be717660-form-1"
        },
        He = {
            role: "group",
            "aria-labelledby": "npsHeading"
        },
        Fe = {
            class: "phw-visually-hidden"
        },
        je = ["aria-label"],
        Ce = {
            class: e.normalizeClass(["phw-mb-0"]),
            for: "noRating",
            "data-ps": "be717660-label-6"
        },
        Ue = {
            class: "phw-visually-hidden",
            "data-ps": "be717660-span-12"
        },
        Ge = ["aria-label"],
        qe = {
            class: "phw-visually-hidden",
            "data-ps": "be717660-span-10"
        },
        Ke = {
            class: "phw-icon-ctr phw-mr-1",
            "data-ps": "be717660-span-11"
        },
        Je = {
            fill: "currentcolor",
            "aria-hidden": "true",
            class: "phw-i-sz-4 phw-g-icon-light",
            "data-ps": "be717660-svg-6"
        },
        We = {
            href: "#phw-cns-icon-star-fill",
            "data-ps": "be717660-use-6"
        },
        Ye = ["aria-label"],
        Qe = {
            class: "phw-visually-hidden",
            "data-ps": "be717660-span-8"
        },
        Xe = {
            class: "phw-icon-ctr phw-mr-1",
            "data-ps": "be717660-span-9"
        },
        Ze = {
            fill: "currentcolor",
            "aria-hidden": "true",
            class: "phw-i-sz-4 phw-g-icon-light",
            "data-ps": "be717660-svg-5"
        },
        ve = {
            href: "#phw-cns-icon-star-fill",
            "data-ps": "be717660-use-5"
        },
        et = ["aria-label"],
        tt = {
            class: "phw-visually-hidden",
            "data-ps": "be717660-span-6"
        },
        it = {
            class: "phw-icon-ctr phw-mr-1",
            "data-ps": "be717660-span-7"
        },
        at = {
            fill: "currentcolor",
            "aria-hidden": "true",
            class: "phw-i-sz-4 phw-g-icon-light",
            "data-ps": "be717660-svg-4"
        },
        st = {
            href: "#phw-cns-icon-star-fill",
            "data-ps": "be717660-use-4"
        },
        nt = ["aria-label"],
        lt = {
            class: "phw-visually-hidden",
            "data-ps": "be717660-span-4"
        },
        rt = {
            class: "phw-icon-ctr phw-mr-1",
            "data-ps": "be717660-span-5"
        },
        ot = {
            fill: "currentcolor",
            "aria-hidden": "true",
            class: "phw-i-sz-4 phw-g-icon-light",
            "data-ps": "be717660-svg-3"
        },
        ct = {
            href: "#phw-cns-icon-star-fill",
            "data-ps": "be717660-use-3"
        },
        dt = ["aria-label"],
        pt = {
            class: "phw-visually-hidden",
            "data-ps": "be717660-span-2"
        },
        ft = {
            class: "phw-icon-ctr phw-mr-1",
            "data-ps": "be717660-span-3"
        },
        ht = {
            fill: "currentcolor",
            "aria-hidden": "true",
            class: "phw-i-sz-4 phw-g-icon-light",
            "data-ps": "be717660-svg-2"
        },
        gt = {
            href: "#phw-cns-icon-star-fill",
            "data-ps": "be717660-use-2"
        },
        wt = ["disabled", "aria-label"],
        bt = {
            key: 1,
            class: e.normalizeClass(["phw-p-4"]),
            "data-ps": "be717660-div-9"
        },
        kt = ["innerHTML"],
        St = ["innerHTML"],
        _t = ["innerHTML"],
        Bt = {
            for: "feedBackInfo",
            class: "phw-visually-hidden",
            "data-ps": "be717660-label-7"
        },
        yt = ["placeholder"],
        ut = ["disabled", "aria-label", "innerHTML"],
        Et = {
            key: 2,
            class: e.normalizeClass(["phw-p-4", "phw-text-c"]),
            "data-ps": "be717660-div-11"
        },
        Dt = {
            class: "phw-icon-ctr phw-mb-2",
            "data-ps": "be717660-span-13"
        },
        Pt = {
            fill: "currentcolor",
            class: "phw-i-sz-6 phw-g-icon-success",
            "aria-hidden": "true",
            "data-ps": "be717660-svg-7"
        },
        Nt = {
            href: "#phw-cns-icon-checkbox-filled",
            "data-ps": "be717660-use-7"
        },
        mt = {
            "data-tag-type": "p",
            class: "phw-mb-0 phw-text-c",
            "data-ps": "be717660-p-1"
        },
        Tt = {
            class: "assertive-area",
            "aria-live": "polite",
            "aria-atomic": "false",
            "data-ps": "be717660-div-12"
        },
        It = {
            key: 0,
            class: "phw-visually-hidden",
            "data-ps": "be717660-div-13"
        };
    return ((D, h) => {
        const a = D.__vccOpts || D;
        for (const [k, E] of h) a[k] = E;
        return a
    })(e.defineComponent({
        __name: "NpsDefaultDefaultComponent",
        props: {
            instanceId: null,
            contentId: null,
            theme: null,
            widgetTag: null
        },
        setup(D) {
            const h = D,
                a = e.ref({}),
                k = e.ref(),
                {
                    init: E,
                    showNps: I,
                    currentStep: l,
                    closeNpsPopup: B,
                    userRating: b,
                    userRatingValue: n,
                    sendFeedback: c,
                    feedBackInfo: r,
                    hideSrText: f,
                    position: g
                } = Ne(k);
            return e.onBeforeMount(() => {
                t.contentStore.getContent(h.contentId).then(d => {
                    a.value = d
                })
            }), e.onMounted(() => {
                t.usePhCommon().init(k.value, a, h.instanceId), E()
            }), (d, p) => {
                var x, C, z, L, O, R, A, $, V, M, H, U, G, q, F, j, K, J, W, Y, Q, i, s, o, y, S, w, v, ee, te, ie, ae, se, ne, le, re, oe, ce, de, pe, fe, he, ge, we, be, ke, Se;
                return e.unref(I) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    key: 0,
                    ref_key: "element",
                    ref: k,
                    class: e.normalizeClass([d.$style[e.unref(g)], d.$style["phs-widget-block-area"], "phw-stroke-dark", "phw-g-widget-bg-gray-1"]),
                    "data-ps": "be717660-div-1"
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", me, [e.withDirectives((e.openBlock(), e.createElementBlock("div", Te, [e.createTextVNode(e.toDisplayString((x = a.value) == null ? void 0 : x.heading), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", Ie, [e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                    type: "button",
                    class: e.normalizeClass([d.$style.close, "phw-s-close", "phw-d-flex", "phw-align-items-center"]),
                    "data-ph-at-id": "close-button",
                    "aria-label": e.unref(l) === "ratingStep" ? (C = a.value) == null ? void 0 : C.ratingSRcloseText : e.unref(l) === "feedbackStep" ? (z = a.value) == null ? void 0 : z.feedbackUserRatingSRcloseTxt : (L = a.value) == null ? void 0 : L.thankYouSRcloseTxt,
                    "data-ps": "be717660-button-1",
                    onClick: p[0] || (p[0] = u => e.unref(B)())
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", xe, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", Le, [e.withDirectives(e.createElementVNode("use", $e, null, 512), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ])], 10, Ve)), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", ze, [e.unref(l) === "ratingStep" ? e.withDirectives((e.openBlock(), e.createElementBlock("div", Oe, [e.withDirectives((e.openBlock(), e.createElementBlock("h2", Re, [e.createTextVNode(e.toDisplayString((O = a.value) == null ? void 0 : O.ratingHeadingText), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", Ae, [e.withDirectives((e.openBlock(), e.createElementBlock("form", Me, [e.createElementVNode("fieldset", He, [e.createElementVNode("legend", Fe, e.toDisplayString((R = a.value) == null ? void 0 : R.ratingHeadingText), 1), e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    class: e.normalizeClass(["phw-d-flex", "phw-align-items-center", "phw-justify-content-center", d.$style["stars-block"]]),
                    "data-ps": "be717660-div-8"
                }, [e.withDirectives(e.createElementVNode("input", {
                    id: "noRating",
                    type: "radio",
                    class: e.normalizeClass([d.$style["input-no-rate"], d.$style["star-input"]]),
                    name: "rating",
                    value: "0",
                    "aria-label": ($ = (A = a.value) == null ? void 0 : A.noRating) == null ? void 0 : $.ariaLabel,
                    "data-ph-at-positon": "0",
                    "data-ps": "be717660-input-6",
                    onChange: p[1] || (p[1] = u => e.unref(b)(0))
                }, null, 42, je), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("label", Ce, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Ue, [e.createTextVNode(e.toDisplayString((M = (V = a.value) == null ? void 0 : V.noRating) == null ? void 0 : M.label), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives(e.createElementVNode("input", {
                    id: "star1",
                    value: "1",
                    type: "radio",
                    name: "rating",
                    class: e.normalizeClass(d.$style["star-input"]),
                    "aria-label": (U = (H = a.value) == null ? void 0 : H.oneStar) == null ? void 0 : U.ariaLabel,
                    "data-ph-at-id": "rating-input",
                    "data-ph-at-positon": "1",
                    "data-ps": "be717660-input-5",
                    onChange: p[2] || (p[2] = u => e.unref(b)(1))
                }, null, 42, Ge), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("label", {
                    class: e.normalizeClass(["phw-s-unselected", d.$style["ph-unselected"], "phw-mb-0"]),
                    for: "star1",
                    "data-ps": "be717660-label-5"
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", qe, [e.createTextVNode(e.toDisplayString((q = (G = a.value) == null ? void 0 : G.oneStar) == null ? void 0 : q.label), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", Ke, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", Je, [e.withDirectives(e.createElementVNode("use", We, null, 512), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ])], 2)), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives(e.createElementVNode("input", {
                    id: "star2",
                    value: "2",
                    type: "radio",
                    name: "rating",
                    class: e.normalizeClass(d.$style["star-input"]),
                    "aria-label": (j = (F = a.value) == null ? void 0 : F.twoStar) == null ? void 0 : j.ariaLabel,
                    "data-ph-at-id": "rating-input",
                    "data-ph-at-positon": "2",
                    "data-ps": "be717660-input-4",
                    onChange: p[3] || (p[3] = u => e.unref(b)(2))
                }, null, 42, Ye), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("label", {
                    class: e.normalizeClass(["phw-s-unselected", d.$style["ph-unselected"], "phw-mb-0"]),
                    for: "star2",
                    "data-ps": "be717660-label-4"
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Qe, [e.createTextVNode(e.toDisplayString((J = (K = a.value) == null ? void 0 : K.twoStar) == null ? void 0 : J.label), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", Xe, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", Ze, [e.withDirectives(e.createElementVNode("use", ve, null, 512), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ])], 2)), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives(e.createElementVNode("input", {
                    id: "star3",
                    value: "3",
                    type: "radio",
                    name: "rating",
                    class: e.normalizeClass(d.$style["star-input"]),
                    "aria-label": (Y = (W = a.value) == null ? void 0 : W.threeStar) == null ? void 0 : Y.ariaLabel,
                    "data-ph-at-id": "rating-input",
                    "data-ph-at-positon": "3",
                    "data-ps": "be717660-input-3",
                    onChange: p[4] || (p[4] = u => e.unref(b)(3))
                }, null, 42, et), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("label", {
                    class: e.normalizeClass(["phw-s-unselected", d.$style["ph-unselected"], "phw-mb-0"]),
                    for: "star3",
                    "data-ps": "be717660-label-3"
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", tt, [e.createTextVNode(e.toDisplayString((i = (Q = a.value) == null ? void 0 : Q.threeStar) == null ? void 0 : i.label), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", it, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", at, [e.withDirectives(e.createElementVNode("use", st, null, 512), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ])], 2)), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives(e.createElementVNode("input", {
                    id: "star4",
                    value: "4",
                    type: "radio",
                    name: "rating",
                    class: e.normalizeClass(d.$style["star-input"]),
                    "aria-label": (o = (s = a.value) == null ? void 0 : s.fourStar) == null ? void 0 : o.ariaLabel,
                    "data-ph-at-id": "rating-input",
                    "data-ph-at-positon": "4",
                    "data-ps": "be717660-input-2",
                    onChange: p[5] || (p[5] = u => e.unref(b)(4))
                }, null, 42, nt), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("label", {
                    class: e.normalizeClass(["phw-s-unselected", d.$style["ph-unselected"], "phw-mb-0"]),
                    for: "star4",
                    "data-ps": "be717660-label-2"
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", lt, [e.createTextVNode(e.toDisplayString((S = (y = a.value) == null ? void 0 : y.fourStar) == null ? void 0 : S.label), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", rt, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", ot, [e.withDirectives(e.createElementVNode("use", ct, null, 512), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ])], 2)), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives(e.createElementVNode("input", {
                    id: "star5",
                    value: "5",
                    type: "radio",
                    name: "rating",
                    class: e.normalizeClass(d.$style["star-input"]),
                    "aria-label": (v = (w = a.value) == null ? void 0 : w.fiveStar) == null ? void 0 : v.ariaLabel,
                    "data-ph-at-id": "rating-input",
                    "data-ph-at-positon": "5",
                    "data-ps": "be717660-input-1",
                    onChange: p[6] || (p[6] = u => e.unref(b)(5))
                }, null, 42, dt), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("label", {
                    class: e.normalizeClass([d.$style["last-label"], d.$style["ph-unselected"], "phw-s-unselected", "phw-mb-0"]),
                    for: "star5",
                    "data-ps": "be717660-label-1"
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", pt, [e.createTextVNode(e.toDisplayString((te = (ee = a.value) == null ? void 0 : ee.fiveStar) == null ? void 0 : te.label), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", ft, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", ht, [e.withDirectives(e.createElementVNode("use", gt, null, 512), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ])], 2)), [
                    [e.unref(t.vPhwSetting)]
                ]), e.createElementVNode("span", {
                    class: e.normalizeClass(d.$style["star-focus-ring"]),
                    "data-ps": "be717660-span-14"
                }, null, 2)], 2)), [
                    [e.unref(t.vPhwSetting)]
                ])])])), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                    type: "button",
                    class: e.normalizeClass(["phw-btn", "phw-g-btn-primary", "phw-width-4"]),
                    disabled: !e.unref(n),
                    "aria-label": (ae = (ie = a.value) == null ? void 0 : ie.ratingButtonText) == null ? void 0 : ae.ariaLabel,
                    "data-ph-at-id": "send-feed-back-rating-step",
                    "data-ps": "be717660-button-2",
                    onClick: p[7] || (p[7] = u => e.unref(c)("ratingStep"))
                }, [e.createTextVNode(e.toDisplayString((ne = (se = a.value) == null ? void 0 : se.ratingButtonText) == null ? void 0 : ne.text), 1)], 8, wt)), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.unref(l) === "feedbackStep" ? e.withDirectives((e.openBlock(), e.createElementBlock("div", bt, [e.unref(n) >= 4 ? e.withDirectives((e.openBlock(), e.createElementBlock("h2", {
                    key: 0,
                    class: "phw-text-c phw-g-h2-card-sub-title-dark-small phw-pb-2",
                    "data-ph-at-id": "feed-back-rating-good",
                    "data-ps": "be717660-h2-2",
                    innerHTML: (le = a.value) == null ? void 0 : le.feedbackGoodRating
                }, null, 8, kt)), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.unref(n) === 3 ? e.withDirectives((e.openBlock(), e.createElementBlock("h2", {
                    key: 1,
                    class: "phw-text-c phw-g-h2-card-sub-title-dark-small phw-pb-2",
                    "data-ph-at-id": "feed-back-rating-avg",
                    "data-ps": "be717660-h2-3",
                    innerHTML: (re = a.value) == null ? void 0 : re.feedbackAvgRating
                }, null, 8, St)), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.unref(n) <= 2 ? e.withDirectives((e.openBlock(), e.createElementBlock("h2", {
                    key: 2,
                    class: "phw-text-c phw-g-h2-card-sub-title-dark-small phw-pb-2",
                    "data-ph-at-id": "feed-back-rating-poor",
                    "data-ps": "be717660-h2-4",
                    innerHTML: (oe = a.value) == null ? void 0 : oe.feedbackPoorRating
                }, null, 8, _t)), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    class: e.normalizeClass(d.$style["text-area-block"]),
                    "data-ps": "be717660-div-10"
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("label", Bt, [e.createTextVNode(e.toDisplayString((de = (ce = a.value) == null ? void 0 : ce.feedBackInfo) == null ? void 0 : de.label), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives(e.createElementVNode("textarea", {
                    id: "feedBackInfo",
                    "onUpdate:modelValue": p[8] || (p[8] = u => e.isRef(r) ? r.value = u : null),
                    class: e.normalizeClass(["phw-width-4", d.$style["text-area"]]),
                    type: "text",
                    name: "feedBackInfo",
                    placeholder: (fe = (pe = a.value) == null ? void 0 : pe.feedBackInfo) == null ? void 0 : fe.placeholder,
                    cols: "100",
                    "data-ph-at-id": "text-area",
                    "data-ps": "be717660-textarea-1"
                }, null, 10, yt), [
                    [e.vModelText, e.unref(r)],
                    [e.unref(t.vPhwSetting)]
                ])], 2)), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives(e.createElementVNode("button", {
                    type: "button",
                    class: e.normalizeClass(["phw-btn", "phw-g-btn-primary", "phw-width-4", "phw-mt-2"]),
                    disabled: !e.unref(r).length,
                    "aria-label": (ge = (he = a.value) == null ? void 0 : he.feedBackButtonText) == null ? void 0 : ge.ariaLabel,
                    "data-ph-at-id": "send-feed-back-step",
                    "data-ps": "be717660-button-3",
                    onClick: p[9] || (p[9] = u => e.unref(c)("feedbackStep")),
                    innerHTML: (be = (we = a.value) == null ? void 0 : we.feedBackButtonText) == null ? void 0 : be.text
                }, null, 8, ut), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.unref(l) === "thankYou" ? e.withDirectives((e.openBlock(), e.createElementBlock("div", Et, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Dt, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", Pt, [e.withDirectives(e.createElementVNode("use", Nt, null, 512), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", mt, [e.createTextVNode(e.toDisplayString((ke = a.value) == null ? void 0 : ke.thankYouText), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)])), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", Tt, [e.unref(I) && e.unref(f) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", It, [e.createTextVNode(e.toDisplayString((Se = a.value) == null ? void 0 : Se.infoAlertText), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)])), [
                    [e.unref(t.vPhwSetting)]
                ])], 2)), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)
            }
        }
    }), [
        ["__cssModules", {
            $style: {
                "phs-widget-block-area": "_phs-widget-block-area_ibklb_2",
                bottom: "_bottom_ibklb_13",
                top: "_top_ibklb_17",
                center: "_center_ibklb_22",
                "star-input": "_star-input_ibklb_31",
                "stars-block": "_stars-block_ibklb_42",
                "text-area": "_text-area_ibklb_56",
                close: "_close_ibklb_63",
                "star-focus-ring": "_star-focus-ring_ibklb_71",
                "input-no-rate": "_input-no-rate_ibklb_81"
            }
        }]
    ])
});