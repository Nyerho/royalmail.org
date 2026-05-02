(function(e, t) {
    typeof exports == "object" && typeof module < "u" ? module.exports = t(require("vue"), require("ph-common/ph-common")) : typeof define == "function" && define.amd ? define(["vue", "ph-common/ph-common"], t) : (e = typeof globalThis < "u" ? globalThis : e || self, e.PhwGlassdoorWidgetView2DefaultV1 = t(e.Vue, e.phCommon))
})(this, function(e, t) {
    "use strict";
    const hi = "glassdoorReviews";
    let E = {},
        y = {},
        f = 0;
    async function wi(n) {
        return f = x(screen.width, n), await t.getDDO(hi).then(a => {
            var s, l, i, r, p, h;
            return a && a.data && ((s = a == null ? void 0 : a.data) != null && s.companyAndCEOReviews, E = ((l = a == null ? void 0 : a.data) == null ? void 0 : l.companyInterviewExperience) || {}, E.employer = E.employer || {}, (i = a == null ? void 0 : a.data) != null && i.companyAndCEOReviews.reviews, (r = a == null ? void 0 : a.data) != null && r.companyPhotosAndInfo.companyPhotos, y = ((p = a == null ? void 0 : a.data) == null ? void 0 : p.companyAndCEOReviews.employer) || {
                a: "sd"
            }, y.companyAverageRating = y == null ? void 0 : y.overallRating, (h = a == null ? void 0 : a.data) == null || h.companyAndCEOReviews.ceo), null
        })
    }

    function k(n, a, s, l, i) {
        if (l) {
            const r = l.getContext("2d"),
                p = Math.PI * 2 * (n / a);
            return r.beginPath(), r.arc(i.rw / 2, i.rh / 2, i.rh / 2 - i.lineWidth, i.end, i.end + p, !1), r.lineWidth = i.lineWidth, r.strokeStyle = getComputedStyle(r.canvas).getPropertyValue(s) || s, r.stroke(), i.end + p
        }
    }

    function gi(n, a, s, l, i) {
        const r = n.target.window.innerWidth,
            p = x(r, s);
        f !== p && (s = s || {}, a = a || {}, f = p, s.rh = p, s.rw = p, a.rh = p, a.rw = p, B(a, s, l, i, !0))
    }

    function x(n, a) {
        return n > 1200 ? a.largeScreenDonutSize : n <= 1200 && n >= 768 ? a.mediumScreenDonutSize : a.smallScreenDonutSize
    }
    const fi = (n, a) => {
            var s, l, i, r, p, h, d, w, o, c, g;
            return n.companyInterviewExperienceObj = n.companyInterviewExperienceObj || {}, n.companyInterviewExperienceObj.employer = n.companyInterviewExperienceObj.employer || {}, a ? (n.companyInterviewExperienceObj.employer.overallPosExperiencePercent = Math.floor((s = n == null ? void 0 : n.companyInterviewExperienceObj) == null ? void 0 : s.employer.overallPosExperiencePercent), n.companyInterviewExperienceObj.employer.overallNeutExperiencePercent = Math.floor((i = (l = n == null ? void 0 : n.companyInterviewExperienceObj) == null ? void 0 : l.employer) == null ? void 0 : i.overallNeutExperiencePercent), n.companyInterviewExperienceObj.employer.overallNegExperiencePercent = Math.floor((p = (r = n == null ? void 0 : n.companyInterviewExperienceObj) == null ? void 0 : r.employer) == null ? void 0 : p.overallNegExperiencePercent)) : (n.companyInterviewExperienceObj.employer.overallPosExperiencePercent = Math.round((d = (h = n == null ? void 0 : n.companyInterviewExperienceObj) == null ? void 0 : h.employer) == null ? void 0 : d.overallPosExperiencePercent), n.companyInterviewExperienceObj.employer.overallNeutExperiencePercent = Math.round((o = (w = n == null ? void 0 : n.companyInterviewExperienceObj) == null ? void 0 : w.employer) == null ? void 0 : o.overallNeutExperiencePercent), n.companyInterviewExperienceObj.employer.overallNegExperiencePercent = Math.round((g = (c = n == null ? void 0 : n.companyInterviewExperienceObj) == null ? void 0 : c.employer) == null ? void 0 : g.overallNegExperiencePercent)), n.companyInterviewExperienceObj.employer.overallPosExperiencePercent = 100 - (n.companyInterviewExperienceObj.employer.overallNeutExperiencePercent + n.companyInterviewExperienceObj.employer.overallNegExperiencePercent), n
        },
        B = (n, a, s, l, i) => {
            var h, d;
            if (a = a || {}, n = n || {}, i) {
                const w = [];
                w.push(l.querySelector(".interviewExperienceDonut")), w.push(l.querySelector(".ceoExperienceDonut")), w.forEach(o => {
                    o.getContext("2d").clearRect(0, 0, o.width, o.height)
                })
            } else a.rh = f, a.rw = f, n.rh = f, n.rw = f;
            const r = { ...n
                },
                p = { ...a
                };
            if (r.isEnabled) {
                const w = l.querySelector(".interviewExperienceDonut"),
                    o = (h = s == null ? void 0 : s.companyInterviewExperienceObj) == null ? void 0 : h.employer,
                    c = (o == null ? void 0 : o.overallPosExperiencePercent) + (o == null ? void 0 : o.overallNeutExperiencePercent) + (o == null ? void 0 : o.overallNegExperiencePercent);
                r.end = k(o == null ? void 0 : o.overallPosExperiencePercent, c, r == null ? void 0 : r.positiveColor, w, r), r.end = k(o == null ? void 0 : o.overallNeutExperiencePercent, c, r == null ? void 0 : r.neutralColor, w, r), r.end = k(o == null ? void 0 : o.overallNegExperiencePercent, c, r == null ? void 0 : r.negativeColor, w, r)
            }
            if (p.showSinglePi) {
                const w = (d = s == null ? void 0 : s.ceoData) == null ? void 0 : d.pctApprove,
                    o = 100 - w,
                    c = w + o,
                    g = l.querySelector(".ceoExperienceDonut");
                p.end = k(w, c, p.singlePiStoke, g, p), p.end = k(o, c, p.remainingPiStoke, g, p)
            }
            return s
        },
        yi = {
            key: 0,
            class: "phw-spinner-border phw-primary phw-text-c",
            role: "status",
            "data-ps": "768cc4d6-div-30"
        },
        ki = {
            class: "phw-visually-hidden",
            "data-ps": "768cc4d6-span-36"
        },
        mi = {
            key: 1,
            class: "phw-container",
            "data-ps": "768cc4d6-div-31"
        },
        Ei = {
            class: "phw-header-block phw-text-c",
            "data-ps": "768cc4d6-div-32"
        },
        xi = {
            "data-map-id": "widget-heading",
            "data-component": "widget-title",
            "data-ph-at-id": "heading-text",
            "data-ps": "768cc4d6-h2-2"
        },
        Bi = {
            class: "phw-content-block phw-content-block-top-space",
            "data-ps": "768cc4d6-div-33"
        },
        _i = {
            key: 0,
            class: "phw-d-flex phw-align-items-center",
            "aria-hidden": "true",
            "data-ps": "768cc4d6-div-36"
        },
        Si = ["data-ph-at-text"],
        Pi = {
            class: "phw-icon-ctr",
            "data-ps": "768cc4d6-span-37"
        },
        vi = {
            href: "#phw-cns-icon-star-fill",
            "data-ps": "768cc4d6-use-12"
        },
        Di = {
            class: "phw-icon-ctr",
            "data-ps": "768cc4d6-span-38"
        },
        Ni = {
            href: "#phw-cns-icon-star-fill",
            "data-ps": "768cc4d6-use-13"
        },
        Vi = {
            class: "phw-icon-ctr",
            "data-ps": "768cc4d6-span-39"
        },
        Ti = {
            href: "#phw-cns-icon-star-fill",
            "data-ps": "768cc4d6-use-14"
        },
        zi = {
            class: "phw-icon-ctr",
            "data-ps": "768cc4d6-span-40"
        },
        Ii = {
            href: "#phw-cns-icon-star-fill",
            "data-ps": "768cc4d6-use-15"
        },
        $i = {
            class: "phw-icon-ctr",
            "data-ps": "768cc4d6-span-41"
        },
        Ri = {
            href: "#phw-cns-icon-star-fill",
            "data-ps": "768cc4d6-use-16"
        },
        bi = {
            class: "phw-icon-ctr",
            "data-ps": "768cc4d6-span-42"
        },
        Ai = {
            href: "#phw-cns-icon-star-fill",
            "data-ps": "768cc4d6-use-17"
        },
        Mi = {
            class: "phw-icon-ctr",
            "data-ps": "768cc4d6-span-43"
        },
        Li = {
            href: "#phw-cns-icon-star-fill",
            "data-ps": "768cc4d6-use-18"
        },
        Hi = {
            class: "phw-icon-ctr",
            "data-ps": "768cc4d6-span-44"
        },
        Wi = {
            href: "#phw-cns-icon-star-fill",
            "data-ps": "768cc4d6-use-19"
        },
        qi = {
            class: "phw-icon-ctr",
            "data-ps": "768cc4d6-span-45"
        },
        Gi = {
            href: "#phw-cns-icon-star-fill",
            "data-ps": "768cc4d6-use-20"
        },
        Fi = {
            class: "phw-icon-ctr",
            "data-ps": "768cc4d6-span-46"
        },
        Ki = {
            href: "#phw-cns-icon-star-fill",
            "data-ps": "768cc4d6-use-21"
        },
        Oi = {
            class: "phw-g-text-default-dark phw-visually-hidden",
            "data-ph-at-id": "glassdoor-total-rating-text",
            "data-ps": "768cc4d6-div-41"
        },
        Ui = {
            class: "phw-visually-hidden",
            "data-ps": "768cc4d6-div-42"
        },
        ji = ["src", "alt"],
        Ji = {
            key: 1,
            "data-ph-at-id": "ceo-image",
            "data-ps": "768cc4d6-span-47"
        },
        Qi = ["src", "alt"],
        Xi = ["data-ph-at-name-text", "data-ph-at-title-text"],
        Yi = {
            class: "phw-mb-050 phw-g-h3-glassdoor-small-dark",
            role: "presentation",
            "data-ps": "768cc4d6-h3-4"
        },
        Zi = {
            "data-tag-type": "p",
            class: "phw-g-p-small-dark",
            "data-ps": "768cc4d6-p-4"
        },
        Ci = ["data-ph-at-text"],
        ui = ["width", "height"],
        ec = {
            key: 0,
            class: "phw-posn-center phw-text-c phw-g-text-large-secondary",
            "data-ps": "768cc4d6-span-48"
        },
        tc = {
            class: "phw-ml-5 phw-ml-xl-2 phw-ml-sm-4 phw-ml-xs-2",
            "data-ps": "768cc4d6-div-48"
        },
        ic = {
            "data-tag-type": "p",
            class: "phw-visually-hidden",
            "data-ps": "768cc4d6-p-5"
        },
        cc = ["innerHTML"],
        nc = ["data-ph-at-text"],
        ac = ["innerHTML"],
        lc = ["data-ph-at-text"],
        rc = ["width", "height"],
        sc = {
            class: "phw-ml-5 phw-ml-xl-2 phw-ml-sm-4 phw-ml-xs-2",
            "data-ps": "768cc4d6-div-51"
        },
        oc = ["innerHTML"],
        pc = {
            role: "list",
            "data-ps": "768cc4d6-div-52"
        },
        dc = {
            class: "phw-d-flex phw-align-items-center phw-width-4",
            "data-ps": "768cc4d6-span-53"
        },
        hc = ["data-ph-at-text"],
        wc = ["innerHTML"],
        gc = {
            class: "phw-visually-hidden",
            "data-ps": "768cc4d6-span-52"
        },
        fc = ["data-ph-at-text"],
        yc = ["innerHTML"],
        kc = {
            class: "phw-visually-hidden",
            "data-ps": "768cc4d6-span-58"
        },
        mc = ["data-ph-at-text"],
        Ec = {
            class: e.normalizeClass(["phw-d-flex", "phw-align-items-center", "phw-width-4"]),
            "data-ps": "768cc4d6-span-65"
        },
        xc = ["innerHTML"],
        Bc = {
            class: "phw-visually-hidden",
            "data-ps": "768cc4d6-span-64"
        },
        _c = ["href"],
        Sc = {
            class: "phw-visually-hidden",
            "data-ps": "768cc4d6-span-68"
        },
        Pc = {
            class: "phw-icon-ctr",
            "data-ps": "768cc4d6-span-70"
        },
        vc = {
            class: "phw-mr-1 p-mr-xs-054",
            fill: "currentcolor",
            "data-ps": "768cc4d6-svg-22"
        },
        Dc = {
            href: "#phw-cns-icon-external",
            "data-ps": "768cc4d6-use-22"
        };
    return ((n, a) => {
        const s = n.__vccOpts || n;
        for (const [l, i] of a) s[l] = i;
        return s
    })(e.defineComponent({
        __name: "GlassdoorWidgetView2DefaultComponent",
        props: {
            instanceId: null,
            contentId: null,
            theme: null,
            widgetTag: null,
            ceoDonut: null,
            interviewDonut: null,
            count: null,
            minimalView: {
                type: Boolean
            }
        },
        setup(n) {
            const a = n,
                s = e.ref(null),
                l = e.ref(),
                i = e.ref({}),
                r = e.ref(!0),
                p = "view_all_glassdoor_reviews_click",
                h = e.ref(a.ceoDonut),
                d = e.ref(a.interviewDonut),
                w = e.ref([]);

            function o() {
                window.addEventListener("resize", c => {
                    gi(c, d.value, h.value, i.value, s.value)
                })
            }
            return e.onBeforeMount(async () => {
                await t.contentStore.getContent(a.contentId).then(c => {
                    l.value = c
                }).catch(() => {
                    l.value = {}
                }), r.value = !0, await wi(h.value).then(c => {
                    var g, m;
                    i.value = c, (g = i.value) != null && g.companyReviews && (w.value = (m = i.value) == null ? void 0 : m.companyReviews.slice(0, a.count), o())
                }).catch(() => {
                    r.value = !1
                }), r.value = !1
            }), e.onUpdated(async () => {
                var c;
                i.value = fi(i.value, (c = a == null ? void 0 : a.interviewDonut) == null ? void 0 : c.useFloor), B(d.value, h.value, i.value, s.value, !1)
            }), e.onMounted(() => {
                t.usePhCommon().init(s.value, l, a.instanceId)
            }), (c, g) => {
                var m, _, S, P, v, D, N, V, T, z, I, $, R, b, A, M, L, H, W, q, G, F, K, O, U, j, J, Q, X, Y, Z, C, u, ee, te, ie, ce, ne, ae, le, re, se, oe, pe, de, he, we, ge, fe, ye, ke, me, Ee, xe, Be, _e, Se, Pe, ve, De, Ne, Ve, Te, ze, Ie, $e, Re, be, Ae, Me, Le, He, We, qe, Ge, Fe, Ke, Oe, Ue, je, Je, Qe, Xe, Ye, Ze, Ce, ue, et, tt, it, ct, nt, at, lt, rt, st, ot, pt, dt, ht, wt, gt, ft, yt, kt, mt, Et, xt, Bt, _t, St, Pt, vt, Dt, Nt, Vt, Tt, zt, It, $t, Rt, bt, At, Mt, Lt, Ht, Wt, qt, Gt, Ft, Kt, Ot, Ut, jt, Jt, Qt, Xt, Yt, Zt, Ct, ut, ei, ti, ii, ci, ni, ai, li, ri, si, oi, pi, di;
                return e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    ref_key: "root",
                    ref: s,
                    class: "phw-widget-ctr phw-posn-relative",
                    "data-ps": "768cc4d6-div-29"
                }, [r.value && l.value ? e.withDirectives((e.openBlock(), e.createElementBlock("div", yi, [e.withDirectives((e.openBlock(), e.createElementBlock("span", ki, [e.createTextVNode(e.toDisplayString((m = l.value) == null ? void 0 : m.heading), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), !r.value && i.value ? e.withDirectives((e.openBlock(), e.createElementBlock("div", mi, [e.withDirectives((e.openBlock(), e.createElementBlock("div", Ei, [e.withDirectives((e.openBlock(), e.createElementBlock("h2", xi, [e.createTextVNode(e.toDisplayString((_ = l.value) == null ? void 0 : _.heading), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", Bi, [e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    class: e.normalizeClass([c.$style["gd-minimal-block"], "phw-card-block phw-stroke-dark phw-mt-sm-4", "phw-d-flex phw-justify-content-between phw-flex-wrap", "phw-g-card-bg-white"]),
                    role: "list",
                    "data-ps": "768cc4d6-div-34"
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    class: e.normalizeClass([c.$style["gd-ceo-approve"], c.$style["gd-overall-rating"], "phw-p-2 phw-p-xl-1-5 phw-p-lg-2 phw-width-lg-2 phw-width-sm-4 phw-stroke-right-dark", "phw-d-flex phw-align-items-center phw-justify-content-center phw-justify-sm-content-start"]),
                    role: "listitem",
                    "data-ps": "768cc4d6-div-35"
                }, [i.value && ((S = i.value) == null ? void 0 : S.employerData) && ((v = (P = i.value) == null ? void 0 : P.employerData) == null ? void 0 : v.companyAverageRating) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", _i, [e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    class: e.normalizeClass([c.$style["gd-review-count"], "phw-text-c phw-g-text-glassdoor-rating-style-1 phw-pr-2"]),
                    "data-ps": "768cc4d6-div-37"
                }, [e.createTextVNode(e.toDisplayString(i.value && ((D = i.value) == null ? void 0 : D.employerData) && ((V = (N = i.value) == null ? void 0 : N.employerData) == null ? void 0 : V.companyAverageRating)), 1)], 2)), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    class: e.normalizeClass(["phw-posn-relative"]),
                    "data-ph-at-id": "glassdoor-overall-rating",
                    "data-ph-at-text": ((T = i.value) == null ? void 0 : T.employerData) && ((I = (z = i.value) == null ? void 0 : z.employerData) == null ? void 0 : I.companyAverageRating),
                    "aria-hidden": "true",
                    "data-ps": "768cc4d6-div-38"
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    class: e.normalizeClass(c.$style["gd-ui-star-empty"]),
                    "data-ps": "768cc4d6-div-39"
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Pi, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", {
                    class: e.normalizeClass(["phw-g-icon-light", c.$style["star-rating-icon"]]),
                    fill: "currentcolor",
                    "data-ps": "768cc4d6-svg-12"
                }, [e.withDirectives(e.createElementVNode("use", vi, null, 512), [
                    [e.unref(t.vPhwSetting)]
                ])], 2)), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", Di, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", {
                    class: e.normalizeClass(["phw-g-icon-light", c.$style["star-rating-icon"]]),
                    fill: "currentcolor",
                    "data-ps": "768cc4d6-svg-13"
                }, [e.withDirectives(e.createElementVNode("use", Ni, null, 512), [
                    [e.unref(t.vPhwSetting)]
                ])], 2)), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", Vi, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", {
                    class: e.normalizeClass(["phw-g-icon-light", c.$style["star-rating-icon"]]),
                    fill: "currentcolor",
                    "data-ps": "768cc4d6-svg-14"
                }, [e.withDirectives(e.createElementVNode("use", Ti, null, 512), [
                    [e.unref(t.vPhwSetting)]
                ])], 2)), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", zi, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", {
                    class: e.normalizeClass(["phw-g-icon-light", c.$style["star-rating-icon"]]),
                    fill: "currentcolor",
                    "data-ps": "768cc4d6-svg-15"
                }, [e.withDirectives(e.createElementVNode("use", Ii, null, 512), [
                    [e.unref(t.vPhwSetting)]
                ])], 2)), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", $i, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", {
                    class: e.normalizeClass(["phw-g-icon-light", c.$style["star-rating-icon"]]),
                    fill: "currentcolor",
                    "data-ps": "768cc4d6-svg-16"
                }, [e.withDirectives(e.createElementVNode("use", Ri, null, 512), [
                    [e.unref(t.vPhwSetting)]
                ])], 2)), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ])], 2)), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    class: e.normalizeClass([c.$style["gd-ui-star-fill"], "phw-posn-absolute"]),
                    style: e.normalizeStyle("width:" + ((($ = i.value) == null ? void 0 : $.employerData) && ((b = (R = i.value) == null ? void 0 : R.employerData) == null ? void 0 : b.companyAverageRating) * 100) / 5 + "%"),
                    "data-ps": "768cc4d6-div-40"
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", bi, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", {
                    class: e.normalizeClass(["phw-g-icon-primary", c.$style["star-rating-icon"]]),
                    fill: "currentcolor",
                    "data-ps": "768cc4d6-svg-17"
                }, [e.withDirectives(e.createElementVNode("use", Ai, null, 512), [
                    [e.unref(t.vPhwSetting)]
                ])], 2)), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", Mi, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", {
                    class: e.normalizeClass(["phw-g-icon-primary", c.$style["star-rating-icon"]]),
                    fill: "currentcolor",
                    "data-ps": "768cc4d6-svg-18"
                }, [e.withDirectives(e.createElementVNode("use", Li, null, 512), [
                    [e.unref(t.vPhwSetting)]
                ])], 2)), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", Hi, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", {
                    class: e.normalizeClass(["phw-g-icon-primary", c.$style["star-rating-icon"]]),
                    fill: "currentcolor",
                    "data-ps": "768cc4d6-svg-19"
                }, [e.withDirectives(e.createElementVNode("use", Wi, null, 512), [
                    [e.unref(t.vPhwSetting)]
                ])], 2)), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", qi, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", {
                    class: e.normalizeClass(["phw-g-icon-primary", c.$style["star-rating-icon"]]),
                    fill: "currentcolor",
                    "data-ps": "768cc4d6-svg-20"
                }, [e.withDirectives(e.createElementVNode("use", Gi, null, 512), [
                    [e.unref(t.vPhwSetting)]
                ])], 2)), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", Fi, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", {
                    class: e.normalizeClass(["phw-g-icon-primary", c.$style["star-rating-icon"]]),
                    fill: "currentcolor",
                    "data-ps": "768cc4d6-svg-21"
                }, [e.withDirectives(e.createElementVNode("use", Ki, null, 512), [
                    [e.unref(t.vPhwSetting)]
                ])], 2)), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ])], 6)), [
                    [e.unref(t.vPhwSetting)]
                ])], 8, Si)), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", Oi, [e.createTextVNode(e.toDisplayString(((A = i.value) == null ? void 0 : A.employerData) && ((L = (M = i.value) == null ? void 0 : M.employerData) == null ? void 0 : L.numberOfRatings) + " " + ((H = l.value) == null ? void 0 : H["glassdoor-rating-text"])), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("div", Ui, [e.createTextVNode(e.toDisplayString(((W = l.value) == null ? void 0 : W.overallRatingText) + " " + ((G = (q = i.value) == null ? void 0 : q.employerData) == null ? void 0 : G.companyAverageRating) + " " + ((F = l.value) == null ? void 0 : F.glassdoorRatingOutOfText) + " " + ((O = (K = i.value) == null ? void 0 : K.employerData) == null ? void 0 : O.numberOfRatings) + " " + ((U = l.value) == null ? void 0 : U.approveOfCeoRatingText)), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ])], 2)), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    class: e.normalizeClass([c.$style["gd-ceo-approve"], "phw-d-flex phw-width-lg-2 phw-width-sm-4 phw-stroke-right-dark", "phw-align-items-center", "phw-justify-content-center phw-justify-sm-content-start", "phw-p-2 phw-p-xl-1-5 phw-p-lg-2"]),
                    role: "listitem",
                    "data-ps": "768cc4d6-div-43"
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    class: e.normalizeClass([c.$style["gd-approve-chart"], "phw-posn-relative phw-d-flex phw-align-items-center"]),
                    "data-ps": "768cc4d6-div-44"
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("figure", {
                    class: e.normalizeClass([c.$style["gd-ceo-avatar"], "phw-img-ctr"]),
                    "data-ps": "768cc4d6-figure-2"
                }, [((Q = (J = (j = i.value) == null ? void 0 : j.ceoData) == null ? void 0 : J.image) == null ? void 0 : Q.src) || ((Y = (X = l.value) == null ? void 0 : X.defaultImg) == null ? void 0 : Y.src) ? e.withDirectives((e.openBlock(), e.createElementBlock("img", {
                    key: 0,
                    src: ((Z = i.value) == null ? void 0 : Z.ceoData) && ((u = (C = i.value) == null ? void 0 : C.ceoData) == null ? void 0 : u.image) && ((ie = (te = (ee = i.value) == null ? void 0 : ee.ceoData) == null ? void 0 : te.image) == null ? void 0 : ie.src) || ((ne = (ce = l.value) == null ? void 0 : ce.defaultImg) == null ? void 0 : ne.src),
                    class: "phw-object-fit-cover phw-height-4 phw-width-4",
                    alt: (ae = l.value) == null ? void 0 : ae.ceoNameAltText,
                    "data-ps": "768cc4d6-img-3"
                }, null, 8, ji)), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), ((le = i.value) == null ? void 0 : le.ceoData) && ((se = (re = i.value) == null ? void 0 : re.ceoData) == null ? void 0 : se.image) && !((de = (pe = (oe = i.value) == null ? void 0 : oe.ceoData) == null ? void 0 : pe.image) != null && de.src) ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Ji, [e.withDirectives(e.createElementVNode("img", {
                    src: ((he = i.value) == null ? void 0 : he.ceoData) && ((ge = (we = i.value) == null ? void 0 : we.ceoData) == null ? void 0 : ge.image) && ((ke = (ye = (fe = i.value) == null ? void 0 : fe.ceoData) == null ? void 0 : ye.image) == null ? void 0 : ke.src),
                    class: "phw-object-fit-cover phw-height-4 phw-width-4",
                    alt: (me = l.value) == null ? void 0 : me.ceoNameAltText,
                    "data-ps": "768cc4d6-img-4"
                }, null, 8, Qi), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)], 2)), [
                    [e.unref(t.vPhwSetting)]
                ])], 2)), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    class: "phw-ml-5 phw-ml-xl-2 phw-ml-sm-4 phw-ml-xs-2",
                    "data-ph-at-id": "ceo-details",
                    "data-ph-at-name-text": ((Ee = i.value) == null ? void 0 : Ee.ceoData) && ((Be = (xe = i.value) == null ? void 0 : xe.ceoData) == null ? void 0 : Be.name),
                    "data-ph-at-title-text": ((_e = i.value) == null ? void 0 : _e.ceoData) && ((Pe = (Se = i.value) == null ? void 0 : Se.ceoData) == null ? void 0 : Pe.title),
                    "data-ps": "768cc4d6-div-45"
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("h3", Yi, [e.createTextVNode(e.toDisplayString(((ve = i.value) == null ? void 0 : ve.ceoData) && ((Ne = (De = i.value) == null ? void 0 : De.ceoData) == null ? void 0 : Ne.name)), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", Zi, [e.createTextVNode(e.toDisplayString(((Ve = i.value) == null ? void 0 : Ve.ceoData) && ((ze = (Te = i.value) == null ? void 0 : Te.ceoData) == null ? void 0 : ze.title)), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ])], 8, Xi)), [
                    [e.unref(t.vPhwSetting)]
                ])], 2)), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    class: e.normalizeClass([c.$style["gd-ceo-approve"], c.$style["gd-ceo-approve-rating"], "phw-d-flex phw-width-lg-2 phw-width-sm-4 phw-stroke-right-dark", "phw-align-items-center", "phw-justify-content-center phw-justify-sm-content-start", "phw-p-2 phw-p-xl-1-5 phw-p-lg-2"]),
                    role: "listitem",
                    "data-ps": "768cc4d6-div-46"
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    class: e.normalizeClass([c.$style["gd-approve-chart"], "phw-posn-relative phw-d-flex phw-align-items-center"]),
                    "data-ph-at-id": "ceo-percent-approve",
                    "data-ph-at-text": ((Ie = i.value) == null ? void 0 : Ie.ceoData) && ((Re = ($e = i.value) == null ? void 0 : $e.ceoData) == null ? void 0 : Re.pctApprove),
                    "aria-hidden": "true",
                    "data-ps": "768cc4d6-div-47"
                }, [e.withDirectives(e.createElementVNode("canvas", {
                    class: "ceoExperienceDonut",
                    width: h.value && ((be = h.value) == null ? void 0 : be.rw),
                    height: h.value && ((Ae = h.value) == null ? void 0 : Ae.rh),
                    "data-ps": "768cc4d6-canvas-3"
                }, null, 8, ui), [
                    [e.unref(t.vPhwSetting)]
                ]), (Me = a == null ? void 0 : a.ceoDonut) != null && Me.showSinglePercent ? e.withDirectives((e.openBlock(), e.createElementBlock("span", ec, [e.createTextVNode(e.toDisplayString(((Le = i.value) == null ? void 0 : Le.ceoData) && ((We = (He = i.value) == null ? void 0 : He.ceoData) == null ? void 0 : We.pctApprove)) + "%", 1)])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)], 10, Ci)), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", tc, [e.withDirectives((e.openBlock(), e.createElementBlock("div", ic, [e.createTextVNode(e.toDisplayString((qe = l.value) == null ? void 0 : qe.ceoApproveText) + " " + e.toDisplayString(((Ge = i.value) == null ? void 0 : Ge.ceoData) && ((Ke = (Fe = i.value) == null ? void 0 : Fe.ceoData) == null ? void 0 : Ke.pctApprove)) + "% " + e.toDisplayString((Oe = l.value) == null ? void 0 : Oe.glassdoorForRatingText) + " " + e.toDisplayString(((Ue = i.value) == null ? void 0 : Ue.ceoData) && ((Je = (je = i.value) == null ? void 0 : je.ceoData) == null ? void 0 : Je.numberOfRatings)) + " " + e.toDisplayString((Qe = l.value) == null ? void 0 : Qe.approveOfCeoRatingText), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives(e.createElementVNode("h3", {
                    class: "phw-mb-050 phw-g-h3-glassdoor-small-dark",
                    "aria-hidden": "true",
                    "data-ps": "768cc4d6-h3-5",
                    innerHTML: (Xe = l.value) == null ? void 0 : Xe.ceoApproveText
                }, null, 8, cc), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    "data-tag-type": "p",
                    class: "phw-g-p-small-dark phw-mb-0",
                    "aria-hidden": "true",
                    "data-ph-at-text": ((Ye = i.value) == null ? void 0 : Ye.ceoData) && ((Ce = (Ze = i.value) == null ? void 0 : Ze.ceoData) == null ? void 0 : Ce.numberOfRatings),
                    "data-ph-at-id": "ceo-number-of-rating",
                    "data-ps": "768cc4d6-p-6"
                }, [e.createTextVNode(e.toDisplayString(((ue = i.value) == null ? void 0 : ue.ceoData) && ((tt = (et = i.value) == null ? void 0 : et.ceoData) == null ? void 0 : tt.numberOfRatings)) + " ", 1), e.withDirectives(e.createElementVNode("span", {
                    "data-ph-at-id": "ceo-ratings-text",
                    "data-ps": "768cc4d6-span-49",
                    innerHTML: (it = l.value) == null ? void 0 : it.approveOfCeoRatingText
                }, null, 8, ac), [
                    [e.unref(t.vPhwSetting)]
                ])], 8, nc)), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ])], 2)), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    class: e.normalizeClass([c.$style["gd-ceo-approve-interview-exp"], c.$style["gd-ceo-approve"], "phw-d-flex phw-width-lg-2 phw-width-sm-4", "phw-align-items-center", "phw-justify-content-center phw-justify-sm-content-start", "phw-p-2 phw-p-xl-1-5 phw-p-lg-2"]),
                    role: "listitem",
                    "data-ps": "768cc4d6-div-49"
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    class: e.normalizeClass([c.$style["gd-approve-chart"], "phw-posn-relative phw-d-flex phw-align-items-center"]),
                    "data-ph-at-id": "interview-exp-percent",
                    "data-ph-at-text": d.value && ((ct = d.value) == null ? void 0 : ct.rh),
                    "data-ps": "768cc4d6-div-50"
                }, [e.withDirectives(e.createElementVNode("canvas", {
                    class: "interviewExperienceDonut",
                    width: d.value && ((nt = d.value) == null ? void 0 : nt.rw),
                    height: d.value && ((at = d.value) == null ? void 0 : at.rh),
                    "data-ps": "768cc4d6-canvas-4"
                }, null, 8, rc), [
                    [e.unref(t.vPhwSetting)]
                ])], 10, lc)), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", sc, [e.withDirectives(e.createElementVNode("h3", {
                    class: "phw-mb-050 phw-g-h3-glassdoor-small-dark",
                    role: "presentation",
                    "data-ph-at-id": "interview-exp-text",
                    "data-ps": "768cc4d6-h3-6",
                    innerHTML: (lt = l.value) == null ? void 0 : lt.interviewExp
                }, null, 8, oc), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", pc, [e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    class: e.normalizeClass([c.$style["gd-exp-fill-percent"], "phw-d-flex phw-g-p-small-dark phw-mb-1", "phw-align-items-center", "phw-justify-content-between"]),
                    role: "listitem",
                    "data-ps": "768cc4d6-div-53"
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", dc, [e.withDirectives(e.createElementVNode("span", {
                    class: e.normalizeClass([c.$style["gd-exp-fill"], "phw-d-block", "phw-mr-1"]),
                    style: e.normalizeStyle((rt = d.value) != null && rt.positiveColor.startsWith("--") ? "background-color: var(" + ((st = d.value) == null ? void 0 : st.positiveColor) + ")" : "background-color: " + ((ot = d.value) == null ? void 0 : ot.positiveColor)),
                    "data-ps": "768cc4d6-span-54"
                }, null, 6), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                    class: e.normalizeClass([c.$style["gd-exp-details-label"], "phw-mr-3", "phw-mr-xs-2"]),
                    "data-ph-at-id": "positive-data",
                    "data-ph-at-text": (ht = (dt = (pt = i.value) == null ? void 0 : pt.companyInterviewExperienceObj) == null ? void 0 : dt.employer) == null ? void 0 : ht.overallPosExperiencePercent,
                    "data-ps": "768cc4d6-span-50"
                }, [e.withDirectives(e.createElementVNode("span", {
                    "data-ph-at-id": "positive-text",
                    "aria-hidden": "true",
                    "data-ps": "768cc4d6-span-51",
                    innerHTML: (wt = l.value) == null ? void 0 : wt.positiveText
                }, null, 8, wc), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", gc, [e.createTextVNode(e.toDisplayString((gt = l.value) == null ? void 0 : gt.positiveText) + " " + e.toDisplayString((kt = (yt = (ft = i.value) == null ? void 0 : ft.companyInterviewExperienceObj) == null ? void 0 : yt.employer) == null ? void 0 : kt.overallPosExperiencePercent) + "%", 1)])), [
                    [e.unref(t.vPhwSetting)]
                ])], 10, hc)), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                    "aria-hidden": "true",
                    class: e.normalizeClass(c.$style["gd-percent-text"]),
                    "data-ps": "768cc4d6-span-55"
                }, [e.createTextVNode(e.toDisplayString((xt = (Et = (mt = i.value) == null ? void 0 : mt.companyInterviewExperienceObj) == null ? void 0 : Et.employer) == null ? void 0 : xt.overallPosExperiencePercent) + "%", 1)], 2)), [
                    [e.unref(t.vPhwSetting)]
                ])], 2)), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    class: e.normalizeClass([c.$style["gd-exp-fill-percent"], "phw-d-flex phw-g-p-small-dark phw-mb-1", "phw-align-items-center", "phw-justify-content-between"]),
                    role: "listitem",
                    "data-ps": "768cc4d6-div-54"
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                    class: e.normalizeClass([c.$style["gd-exp-details-label"], "phw-d-flex phw-align-items-center phw-width-4"]),
                    "data-ph-at-id": "neutral-data",
                    "data-ph-at-text": (_t = (Bt = i.value) == null ? void 0 : Bt.employerData) == null ? void 0 : _t.overallNeutExperiencePercent,
                    "data-ps": "768cc4d6-span-56"
                }, [e.withDirectives(e.createElementVNode("span", {
                    class: e.normalizeClass([c.$style["gd-exp-fill"], "phw-d-block", "phw-mr-1"]),
                    style: e.normalizeStyle((St = d.value) != null && St.neutralColor.startsWith("--") ? "background-color: var(" + ((Pt = d.value) == null ? void 0 : Pt.neutralColor) + ")" : "background-color: " + ((vt = d.value) == null ? void 0 : vt.neutralColor)),
                    "data-ps": "768cc4d6-span-60"
                }, null, 6), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives(e.createElementVNode("span", {
                    "data-ph-at-id": "neutral-text",
                    "aria-hidden": "true",
                    "data-ps": "768cc4d6-span-57",
                    innerHTML: (Dt = l.value) == null ? void 0 : Dt.neutralText
                }, null, 8, yc), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", kc, [e.createTextVNode(e.toDisplayString((Nt = l.value) == null ? void 0 : Nt.neutralText) + " " + e.toDisplayString(((Vt = i.value) == null ? void 0 : Vt.companyInterviewExperienceObj) && ((zt = (Tt = i.value) == null ? void 0 : Tt.companyInterviewExperienceObj) == null ? void 0 : zt.employer) && ((Rt = ($t = (It = i.value) == null ? void 0 : It.companyInterviewExperienceObj) == null ? void 0 : $t.employer) == null ? void 0 : Rt.overallNeutExperiencePercent)) + "%", 1)])), [
                    [e.unref(t.vPhwSetting)]
                ])], 10, fc)), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                    "aria-hidden": "true",
                    class: e.normalizeClass(c.$style["gd-percent-text"]),
                    "data-ps": "768cc4d6-span-61"
                }, [e.createTextVNode(e.toDisplayString(((bt = i.value) == null ? void 0 : bt.companyAndCeoReviewObj) && ((Mt = (At = i.value) == null ? void 0 : At.companyInterviewExperienceObj) == null ? void 0 : Mt.employer) && ((Wt = (Ht = (Lt = i.value) == null ? void 0 : Lt.companyInterviewExperienceObj) == null ? void 0 : Ht.employer) == null ? void 0 : Wt.overallNeutExperiencePercent)) + "%", 1)], 2)), [
                    [e.unref(t.vPhwSetting)]
                ])], 2)), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    class: e.normalizeClass([c.$style["gd-exp-fill-percent"], "phw-d-flex phw-g-p-small-dark", "phw-align-items-center", "phw-justify-content-between"]),
                    role: "listitem",
                    "data-ps": "768cc4d6-div-55"
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                    class: e.normalizeClass([c.$style["gd-exp-details-label"], "phw-d-flex phw-align-items-center phw-width-4"]),
                    "data-ph-at-id": "positive-data",
                    "data-ph-at-text": ((qt = i.value) == null ? void 0 : qt.employerData) && ((Ft = (Gt = i.value) == null ? void 0 : Gt.employerData) == null ? void 0 : Ft.overallNegExperiencePercent),
                    "data-ps": "768cc4d6-span-62"
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Ec, [e.withDirectives(e.createElementVNode("span", {
                    class: e.normalizeClass([c.$style["gd-exp-fill"], "phw-d-block", "phw-mr-1"]),
                    style: e.normalizeStyle((Kt = d.value) != null && Kt.negativeColor.startsWith("--") ? "background-color: var(" + ((Ot = d.value) == null ? void 0 : Ot.negativeColor) + ")" : "background-color: " + ((Ut = d.value) == null ? void 0 : Ut.negativeColor)),
                    "data-ps": "768cc4d6-span-66"
                }, null, 6), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives(e.createElementVNode("span", {
                    "data-ph-at-id": "negative-text",
                    "aria-hidden": "true",
                    "data-ps": "768cc4d6-span-63",
                    innerHTML: (jt = l.value) == null ? void 0 : jt.negetiveText
                }, null, 8, xc), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", Bc, [e.createTextVNode(e.toDisplayString((Jt = l.value) == null ? void 0 : Jt.negetiveText) + " " + e.toDisplayString(((Qt = i.value) == null ? void 0 : Qt.companyInterviewExperienceObj) && ((Yt = (Xt = i.value) == null ? void 0 : Xt.companyInterviewExperienceObj) == null ? void 0 : Yt.employer) && ((ut = (Ct = (Zt = i.value) == null ? void 0 : Zt.companyInterviewExperienceObj) == null ? void 0 : Ct.employer) == null ? void 0 : ut.overallNegExperiencePercent)) + "%", 1)])), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ])], 10, mc)), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                    "aria-hidden": "true",
                    class: e.normalizeClass(c.$style["gd-percent-text"]),
                    "data-ps": "768cc4d6-span-67"
                }, [e.createTextVNode(e.toDisplayString(((ei = i.value) == null ? void 0 : ei.companyInterviewExperienceObj) && ((ii = (ti = i.value) == null ? void 0 : ti.companyInterviewExperienceObj) == null ? void 0 : ii.employer) && ((ai = (ni = (ci = i.value) == null ? void 0 : ci.companyInterviewExperienceObj) == null ? void 0 : ni.employer) == null ? void 0 : ai.overallNegExperiencePercent)) + "%", 1)], 2)), [
                    [e.unref(t.vPhwSetting)]
                ])], 2)), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ])], 2)), [
                    [e.unref(t.vPhwSetting)]
                ])], 2)), [
                    [e.unref(t.vPhwSetting)]
                ]), n.minimalView ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    key: 0,
                    class: e.normalizeClass([c.$style["gd-view-more-link"], "phw-text-c phw-mt-4 phw-mt-md-3 phw-text-md-c"]),
                    "data-ps": "768cc4d6-div-56"
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("a", {
                    ref: "linkEle",
                    href: ((li = i.value) == null ? void 0 : li.companyAndCeoReviewObj) && ((si = (ri = i.value) == null ? void 0 : ri.companyAndCeoReviewObj) == null ? void 0 : si.attributionURL),
                    target: "_blank",
                    "data-ph-at-id": "view-more-link",
                    class: "phw-btn phw-g-btn-default",
                    "data-ps": "768cc4d6-a-2"
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Sc, [e.createTextVNode(e.toDisplayString((oi = l.value) == null ? void 0 : oi["glassdoor-all-review-link-text"]) + " " + e.toDisplayString((pi = l.value) == null ? void 0 : pi.externallink), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                    class: e.normalizeClass([c.$style["gd-view-more"]]),
                    "data-ph-at-id": "view-all-text",
                    "data-ps": "768cc4d6-span-69"
                }, [e.createTextVNode(e.toDisplayString((di = l.value) == null ? void 0 : di["glassdoor-all-review-link-text"]), 1)], 2)), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", Pc, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", vc, [e.withDirectives(e.createElementVNode("use", Dc, null, 512), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ])], 8, _c)), [
                    [e.unref(t.vPhwSetting)],
                    [e.unref(t.vPhwTrack), p]
                ])], 2)), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)])), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)])), [
                    [e.unref(t.vPhwSetting)]
                ])
            }
        }
    }), [
        ["__cssModules", {
            $style: {
                "gd-ceo-approve": "_gd-ceo-approve_12vmp_3",
                "gd-overall-rating": "_gd-overall-rating_12vmp_13",
                "star-rating-icon": "_star-rating-icon_12vmp_19",
                "gd-ceo-avatar": "_gd-ceo-avatar_12vmp_27",
                "gd-ui-star-fill": "_gd-ui-star-fill_12vmp_41",
                "gd-percent-text": "_gd-percent-text_12vmp_61",
                "gd-exp-fill": "_gd-exp-fill_12vmp_69",
                "gd-exp-fill-percent": "_gd-exp-fill-percent_12vmp_81",
                "gd-view-more": "_gd-view-more_12vmp_89",
                "gd-ceo-approve-rating": "_gd-ceo-approve-rating_12vmp_151",
                "gd-review-count": "_gd-review-count_12vmp_171"
            }
        }]
    ])
});