(function(e, n) {
    typeof exports == "object" && typeof module < "u" ? module.exports = n(require("vue"), require("ph-common/ph-common")) : typeof define == "function" && define.amd ? define(["vue", "ph-common/ph-common"], n) : (e = typeof globalThis < "u" ? globalThis : e || self, e.PhwCategoryOverviewView12DefaultV1 = n(e.Vue, e.phCommon))
})(this, function(e, n) {
    "use strict";

    function m(t, d, h, g) {
        if (!t || !d) return "";
        if (typeof t == "object") {
            if (!h) return "";
            const f = d[h];
            let a = t[f];
            if (a || Object.keys(t).forEach(w => {
                    if (/[-*]/g.test(w)) {
                        const x = w.replace("*", "");
                        if (f >= x && (a = t[w]), !a) {
                            const k = w.split("-");
                            k && k.length === 2 && f >= k[0] && f <= k[1] && (a = t[w])
                        }
                    }
                }), !a)
                if (t.default) a = "default";
                else return "";
            return O(a, d, g)
        }
        return O(t, d, g)
    }

    function O(t, d, h) {
        const g = /\{\{\s*(.*?)\s*\}\}/g,
            f = /\[\[\s*(.*?)\s*\]\]/g;
        return !t || typeof t != "string" || (t = t.replace(/&lt;/g, "<"), t = t.replace(/&gt;/g, ">"), t = t.replace(g, (a, w) => d[w] || ""), h && (t = encodeURIComponent(t)), t = t.replace(f, (a, w) => {
            if (!w) return w
        })), t
    }
    const R = "categories",
        we = "categoryMasterDataV2",
        j = e.ref({}),
        $ = [];

    function fe(t, d) {
        const {
            cardsPerRow: h,
            rowCount: g,
            showEvenMore: f,
            showEvenMoreCount: a,
            sliderOptions: w,
            showSlider: x
        } = t, k = e.ref(3);
        let I;
        const u = parseInt(a.toString(), 10),
            D = e.ref(!1),
            P = e.ref(!1),
            B = e.ref(!0),
            E = e.ref(!0),
            s = e.ref([]),
            l = e.ref([]),
            b = e.ref(0);

        function z(c) {
            return n.contentStore.getContent(c).then(p => {
                j.value = p
            })
        }
        const T = () => {
            I = h * g
        };

        function _() {
            E.value = !0, B.value = !0, l.value = s.value, e.nextTick(() => {
                n.DefaultSlider.initSliders(d.value, w)
            })
        }
        const C = () => {
                D.value = !1
            },
            y = () => {
                D.value = !0
            },
            S = () => {
                l.value = s.value.slice(0, I), b.value = s.value.length - l.value.length > u ? u : s.value.length - l.value.length, B.value = !1
            },
            V = () => {
                var c;
                if (k.value = h, l.value = s.value, (s == null ? void 0 : s.value) && !s.value.length) {
                    P.value = !0;
                    return
                }((c = l.value) == null ? void 0 : c.length) > I && S()
            },
            N = () => {
                const c = l.value.length;
                setTimeout(() => {
                    var o;
                    const r = (o = d.value) == null ? void 0 : o.querySelector(`[data-access-list-item="${c}"]`);
                    r == null || r.focus(), f && (b.value = s.value.length - l.value.length > u ? u : s.value.length - l.value.length)
                }, 10);
                const p = s.value.length - l.value.length;
                a < p && f ? l.value = s.value.slice(0, l.value.length + a) : (l.value = s.value, B.value = !0, E.value = !1)
            },
            L = () => {
                S(), E.value = !0, e.nextTick(() => {
                    var p;
                    const c = (p = d.value) == null ? void 0 : p.querySelector('[data-access="showMore"]');
                    c == null || c.focus(), c == null || c.scrollIntoView()
                })
            };

        function M() {
            s.value = [];
            const c = [],
                p = {
                    field: "category",
                    sub_field: "internalCategoryId",
                    ddoKey: R
                };
            return c.push(n.getDDO(R, p).then(r => {
                r.data && r.data.category && r.data.category.forEach(o => {
                    s.value.push(o)
                })
            })), c.push(n.getDDO(we).then(r => {
                r && r.data && r.data.categories && r.data.categories.forEach(o => {
                    $.push(o)
                })
            })), Promise.all(c).then(() => {
                const r = {};
                return s.value.forEach(o => {
                    r[o.internalId] = o
                }), $.forEach(o => {
                    r[o.categoryInternalId] && (r[o.categoryInternalId].hover_image = o.hover_image, r[o.categoryInternalId].icon_image = o.icon_image, r[o.categoryInternalId].categoryImageAltText = o.categoryImageAltText, r[o.categoryInternalId].url = o.url, r[o.categoryInternalId].description = o.description)
                }), T(), V(), C(), x && _(), s
            })
        }
        return {
            getData: M,
            getContent: z,
            content: j,
            unHideLoader: y,
            categories: s,
            setCategoryCount: T,
            initCategoryView: V,
            hideLoader: C,
            triggerSlider: _,
            showErrorMsg: P,
            showLoader: D,
            categoryViewModel: l,
            cardStyleClassSuffix: k,
            viewMore: N,
            remainCategoryCount: b,
            hideViewMore: B,
            viewLess: L,
            hideLess: E
        }
    }
    const pe = {
            class: "",
            "data-ps": "3ccd8e81-div-2"
        },
        ge = {
            class: "phw-d-flex phw-justify-content-center",
            "data-ps": "3ccd8e81-div-3"
        },
        ke = {
            class: "phw-spinner-border phw-primary",
            role: "status",
            "data-ps": "3ccd8e81-div-4"
        },
        ye = {
            class: "phw-visually-hidden",
            "data-ps": "3ccd8e81-span-1"
        },
        me = [e.createTextVNode("Loading...")],
        Be = {
            key: 0,
            class: "phw-container",
            "data-ps": "3ccd8e81-div-5"
        },
        _e = {
            class: e.normalizeClass(["phw-header-block", "phw-text-c"]),
            "data-ps": "3ccd8e81-div-6"
        },
        Se = {
            "data-slider-header": "true",
            "data-ph-at-id": "heading-text",
            "data-ps": "3ccd8e81-h2-1"
        },
        Ee = {
            "data-tag-type": "p",
            class: "phw-g-p-large-secondary phw-mt-2",
            "data-ph-at-id": "description-text",
            "data-ps": "3ccd8e81-p-1"
        },
        ue = {
            class: "phw-content-block phw-content-block-top-space",
            "data-ps": "3ccd8e81-div-7"
        },
        De = ["data-phw-slider-opts"],
        Pe = ["data-ph-at-widget-data-count", "role", "data-ph-at-count"],
        be = ["data-ph-at-index", "role", "data-item-idx"],
        Ve = ["data-access-list-item", "href", "aria-label", "data-ph-at-category-text", "data-ph-at-category-job-count"],
        xe = ["src", "alt"],
        Ie = {
            class: e.normalizeClass(["phw-word-break", "phw-g-text-x-large-dark", "phw-line-clamp phw-line-clamp-1 phw-line-clamp-sm-2"]),
            "data-ps": "3ccd8e81-div-13"
        },
        Te = {
            "data-tag-type": "p",
            class: e.normalizeClass(["phw-mt-auto", "phw-g-text-default-secondary", "phw-mt-1"]),
            "data-ph-at-id": "countLabel",
            "data-ps": "3ccd8e81-p-2"
        },
        Ce = {
            class: "splide__arrows phw-d-flex",
            "data-ps": "3ccd8e81-div-14"
        },
        Ne = {
            key: 0,
            class: e.normalizeClass(["phw-footer-block-top-space", "phw-mt-8", "phw-text-c", "phw-mt-xl-6", "phw-mt-sm-4"]),
            "data-ph-at-id": "navigation",
            "data-ps": "3ccd8e81-div-16"
        },
        Le = ["role", "aria-label"],
        Me = {
            key: 0,
            class: "phw-icon-ctr",
            "data-ps": "3ccd8e81-span-8"
        },
        Ae = {
            class: "icon phw-mr-1 phw-i-sz-3 phw-i-sz-lg-2",
            fill: "currentcolor",
            "aria-hidden": "true",
            "data-ps": "3ccd8e81-svg-3"
        },
        ze = {
            href: "#phw-cns-icon-maximize",
            "data-ps": "3ccd8e81-use-3"
        },
        Oe = {
            key: 1,
            "data-ph-at-id": "seemore-text",
            "data-ps": "3ccd8e81-span-9"
        },
        Re = {
            key: 2,
            "data-ph-at-id": "seemore-text",
            "data-ps": "3ccd8e81-span-10"
        },
        je = ["role", "aria-label"],
        $e = {
            key: 0,
            class: "phw-icon-ctr",
            "data-ps": "3ccd8e81-span-11"
        },
        qe = {
            class: "icon phw-mr-1 phw-i-sz-3 phw-i-sz-lg-2",
            fill: "currentcolor",
            "aria-hidden": "true",
            "data-ps": "3ccd8e81-svg-4"
        },
        He = {
            href: "#phw-cns-icon-minimize",
            "data-ps": "3ccd8e81-use-4"
        },
        Fe = {
            key: 1,
            "data-ph-at-id": "seeless-text",
            "data-ps": "3ccd8e81-span-12"
        },
        Ue = {
            key: 2,
            "data-ph-at-id": "seeless-text",
            "data-ps": "3ccd8e81-span-13"
        };
    return ((t, d) => {
        const h = t.__vccOpts || t;
        for (const [g, f] of d) h[g] = f;
        return h
    })(e.defineComponent({
        __name: "CategoryOverviewView12DefaultComponent",
        props: {
            instanceId: null,
            contentId: null,
            theme: null,
            widgetTag: null,
            sliderOptions: null,
            cardsPerRow: null,
            rowCount: null,
            cardsPerRowTablet: null,
            cardsPerRowMobile: null,
            showSlider: {
                type: Boolean
            },
            showEvenMore: {
                type: Boolean
            },
            showEvenMoreCount: null,
            showCategoryNameForAltText: {
                type: Boolean
            }
        },
        setup(t) {
            const d = t,
                h = e.ref(),
                {
                    getData: g,
                    getContent: f,
                    content: a,
                    unHideLoader: w,
                    setCategoryCount: x,
                    initCategoryView: k,
                    hideLoader: I,
                    triggerSlider: u,
                    showErrorMsg: D,
                    showLoader: P,
                    categoryViewModel: B,
                    cardStyleClassSuffix: E,
                    viewMore: s,
                    remainCategoryCount: l,
                    hideViewMore: b,
                    viewLess: z,
                    hideLess: T,
                    categories: _
                } = fe(d, h),
                C = btoa(JSON.stringify(d.sliderOptions));
            return e.onBeforeMount(() => {
                w(), g()
            }), e.onMounted(() => {
                f(d.contentId).then(() => {
                    n.usePhCommon().init(h.value, a, d.instanceId)
                })
            }), (y, S) => {
                var V, N, L, M, c, p, r, o, q, H, F, U, G, X, J, Z, Q, W, Y, K, v, ee, te, ne, ae, ie, oe;
                return e.unref(D) ? e.createCommentVNode("", !0) : e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    key: 0,
                    ref_key: "element",
                    ref: h,
                    class: "phw-widget-ctr phw-g-widget-bg-gray-1",
                    "data-ps": "3ccd8e81-div-1"
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", pe, [e.withDirectives((e.openBlock(), e.createElementBlock("div", ge, [e.withDirectives((e.openBlock(), e.createElementBlock("div", ke, [e.withDirectives((e.openBlock(), e.createElementBlock("span", ye, me)), [
                    [e.unref(n.vPhwSetting)]
                ])])), [
                    [e.unref(n.vPhwSetting)]
                ])])), [
                    [e.vShow, e.unref(P)],
                    [e.unref(n.vPhwSetting)]
                ]), !e.unref(P) && e.unref(a) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", Be, [e.withDirectives((e.openBlock(), e.createElementBlock("div", _e, [e.withDirectives((e.openBlock(), e.createElementBlock("h2", Se, [e.createTextVNode(e.toDisplayString(e.unref(a).heading), 1)])), [
                    [e.unref(n.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", Ee, [e.createTextVNode(e.toDisplayString(e.unref(a).description), 1)])), [
                    [e.unref(n.vPhwSetting)]
                ])])), [
                    [e.unref(n.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", ue, [e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    class: e.normalizeClass(t.showSlider ? "phw-slider" : ""),
                    "data-phw-slider-opts": t.showSlider ? e.unref(C) : void 0,
                    "data-ps": "3ccd8e81-div-8"
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    class: e.normalizeClass(t.showSlider ? "phw-slider-track" : ""),
                    "data-ps": "3ccd8e81-div-9"
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    class: e.normalizeClass([t.showSlider ? "phw-slider-list" : ["phw-grid", "phw-grid-" + e.unref(E), "phw-grid-lg-" + t.cardsPerRowTablet, "phw-grid-sm-" + t.cardsPerRowMobile]]),
                    "data-ph-at-widget-data-count": e.unref(_) && e.unref(_).length,
                    "data-ph-at-id": "category-list-view",
                    role: t.showSlider ? void 0 : e.unref(_).length > 1 ? "list" : "presentation",
                    "data-ph-at-count": (V = e.unref(B)) == null ? void 0 : V.length,
                    "data-ps": "3ccd8e81-div-10"
                }, [(e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(e.unref(B), (i, A) => {
                    var re, se, ce, le, de, he;
                    return e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: i.key,
                        class: e.normalizeClass(["phw-card-block phw-g-card-bg-white", [t.showSlider ? ["phw-slider-slide", y.$style["category-card"]] : y.$style["category-card"]]]),
                        "data-ph-at-index": A,
                        role: e.unref(_).length > 1 ? "listitem" : void 0,
                        "data-item-idx": A + 1,
                        "data-ps": "3ccd8e81-div-11"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("a", {
                        "data-access-list-item": A,
                        href: e.unref(n.getUrl)("category", i, "") || "",
                        class: e.normalizeClass(["category-" + A + 1, y.$style["phw-list-item-link"], "phw-d-block", "phw-td-none", "phw-height-4"]),
                        "aria-label": i.key + " " + (i.total_count != 1 ? e.unref(m)(e.unref(a).jobsText, i, "total_count") : e.unref(m)(e.unref(a).jobText, i, "total_count")),
                        "data-ph-component-name": "category-link-item",
                        "data-ph-at-id": "category-link",
                        "data-ph-at-category-text": i.key,
                        "data-ph-at-category-job-count": i.total_count,
                        "data-ps": "3ccd8e81-a-1"
                    }, [(i == null ? void 0 : i.icon_image) || ((se = (re = e.unref(a)) == null ? void 0 : re.defaultImage) == null ? void 0 : se.src) ? e.withDirectives((e.openBlock(), e.createElementBlock("figure", {
                        key: 0,
                        "aria-hidden": "true",
                        "key-role": "presentationRole",
                        role: "presentation",
                        class: e.normalizeClass([y.$style["category-icon-figure"], "phw-img-ctr", "phw-text-c", "phw-width-auto"]),
                        "data-ps": "3ccd8e81-figure-1"
                    }, [(i == null ? void 0 : i.icon_image) || ((le = (ce = e.unref(a)) == null ? void 0 : ce.defaultImage) == null ? void 0 : le.src) ? e.withDirectives((e.openBlock(), e.createElementBlock("img", {
                        key: 0,
                        src: (i == null ? void 0 : i.icon_image) || ((he = (de = e.unref(a)) == null ? void 0 : de.defaultImage) == null ? void 0 : he.src),
                        class: e.normalizeClass([y.$style["icon-Img"], "phw-width-4", "phw-height-4"]),
                        "data-ph-at-id": "category-image",
                        alt: t.showCategoryNameForAltText ? i == null ? void 0 : i.key : i == null ? void 0 : i.categoryImageAltText,
                        "data-ps": "3ccd8e81-img-1"
                    }, null, 10, xe)), [
                        [e.unref(n.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)], 2)), [
                        [e.unref(n.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        class: e.normalizeClass([y.$style["category-info"], "phw-stroke-bottom-dark", "phw-stroke-right-dark", "phw-stroke-left-dark", "phw-p-4", "phw-p-sm-3"]),
                        "aria-hidden": "true",
                        "data-ps": "3ccd8e81-div-12"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", Ie, [e.createTextVNode(e.toDisplayString(i.key), 1)])), [
                        [e.unref(n.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", Te, [e.createTextVNode(e.toDisplayString(e.unref(m)(e.unref(a).jobsText, i, "total_count")), 1)])), [
                        [e.unref(n.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(n.vPhwSetting)]
                    ])], 10, Ve)), [
                        [e.unref(n.vPhwSetting)],
                        [e.unref(n.vPhwTrack), "job_category_click"]
                    ])], 10, be)), [
                        [e.unref(n.vPhwSetting)]
                    ])
                }), 128))], 10, Pe)), [
                    [e.unref(n.vPhwSetting)]
                ])], 2)), [
                    [e.unref(n.vPhwSetting)]
                ]), e.withDirectives(e.createElementVNode("div", Ce, null, 512), [
                    [e.unref(n.vPhwSetting)]
                ])], 10, De)), [
                    [e.unref(n.vPhwSetting)]
                ])])), [
                    [e.unref(n.vPhwSetting)]
                ]), t.showSlider ? e.createCommentVNode("", !0) : e.withDirectives((e.openBlock(), e.createElementBlock("div", Ne, [e.unref(b) ? e.createCommentVNode("", !0) : e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                    key: 0,
                    ref: "'linkEle'",
                    "data-access": "showMore",
                    type: "button",
                    role: t.showEvenMore ? (L = (N = e.unref(a)) == null ? void 0 : N.showEvenMoreActionButton) == null ? void 0 : L.role : (c = (M = e.unref(a)) == null ? void 0 : M.showMoreActionButton) == null ? void 0 : c.role,
                    "aria-label": t.showEvenMore ? e.unref(m)((r = (p = e.unref(a)) == null ? void 0 : p.showEvenMoreActionButton) == null ? void 0 : r.ariaLabel, {
                        remainCategoryCount: e.unref(l)
                    }) : ((q = (o = e.unref(a)) == null ? void 0 : o.showMoreActionButton) == null ? void 0 : q.ariaLabel) + " " + ((H = e.unref(a)) == null ? void 0 : H.heading),
                    class: "phw-btn phw-g-btn-secondary",
                    "data-ph-at-id": "seemore-link",
                    "data-ps": "3ccd8e81-button-3",
                    onClick: S[0] || (S[0] = i => e.unref(s)())
                }, [t.showEvenMore ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Me, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", Ae, [e.withDirectives(e.createElementVNode("use", ze, null, 512), [
                    [e.unref(n.vPhwSetting)]
                ])])), [
                    [e.unref(n.vPhwSetting)]
                ])])), [
                    [e.unref(n.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), t.showEvenMore ? e.createCommentVNode("", !0) : e.withDirectives((e.openBlock(), e.createElementBlock("span", Oe, [e.createTextVNode(e.toDisplayString(e.unref(m)((U = (F = e.unref(a)) == null ? void 0 : F.showMoreActionButton) == null ? void 0 : U.text, {
                    remainCategoryCount: e.unref(l)
                })), 1)])), [
                    [e.unref(n.vPhwSetting)]
                ]), t.showEvenMore ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Re, [e.createTextVNode(e.toDisplayString(e.unref(m)((X = (G = e.unref(a)) == null ? void 0 : G.showEvenMoreActionButton) == null ? void 0 : X.text, {
                    remainCategoryCount: e.unref(l)
                })), 1)])), [
                    [e.unref(n.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)], 8, Le)), [
                    [e.unref(n.vPhwSetting)],
                    [e.unref(n.vPhwTrack), "category_see_more_click"]
                ]), e.unref(T) ? e.createCommentVNode("", !0) : e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                    key: 1,
                    ref: "'linkEle1'",
                    "data-access": "showLess",
                    type: "button",
                    class: "phw-btn phw-g-btn-secondary",
                    role: t.showEvenMore ? (Z = (J = e.unref(a)) == null ? void 0 : J.showLessAllActionButton) == null ? void 0 : Z.role : (W = (Q = e.unref(a)) == null ? void 0 : Q.showLessActionButton) == null ? void 0 : W.role,
                    "aria-label": t.showEvenMore ? e.unref(m)((K = (Y = e.unref(a)) == null ? void 0 : Y.showLessAllActionButton) == null ? void 0 : K.ariaLabel, {
                        remainCategoryCount: e.unref(l)
                    }) : ((ee = (v = e.unref(a)) == null ? void 0 : v.showLessActionButton) == null ? void 0 : ee.ariaLabel) + " " + ((te = e.unref(a)) == null ? void 0 : te.heading),
                    "data-ph-at-id": "seeless-link",
                    "data-ps": "3ccd8e81-button-4",
                    onClick: S[1] || (S[1] = i => e.unref(z)())
                }, [t.showEvenMore ? e.withDirectives((e.openBlock(), e.createElementBlock("span", $e, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", qe, [e.withDirectives(e.createElementVNode("use", He, null, 512), [
                    [e.unref(n.vPhwSetting)]
                ])])), [
                    [e.unref(n.vPhwSetting)]
                ])])), [
                    [e.unref(n.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), t.showEvenMore ? e.createCommentVNode("", !0) : e.withDirectives((e.openBlock(), e.createElementBlock("span", Fe, [e.createTextVNode(e.toDisplayString((ae = (ne = e.unref(a)) == null ? void 0 : ne.showLessActionButton) == null ? void 0 : ae.text), 1)])), [
                    [e.unref(n.vPhwSetting)]
                ]), t.showEvenMore ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Ue, [e.createTextVNode(e.toDisplayString((oe = (ie = e.unref(a)) == null ? void 0 : ie.showLessAllActionButton) == null ? void 0 : oe.text), 1)])), [
                    [e.unref(n.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)], 8, je)), [
                    [e.unref(n.vPhwSetting)],
                    [e.unref(n.vPhwTrack), "category_see_less_click"]
                ])])), [
                    [e.unref(n.vPhwSetting)]
                ])])), [
                    [e.unref(n.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)])), [
                    [e.unref(n.vPhwSetting)]
                ])])), [
                    [e.unref(n.vPhwSetting)]
                ])
            }
        }
    }), [
        ["__cssModules", {
            $style: {
                "category-icon-figure": "_category-icon-figure_1ogrk_3",
                "icon-Img": "_icon-Img_1ogrk_9",
                "phw-list-item-link": "_phw-list-item-link_1ogrk_15",
                "category-info": "_category-info_1ogrk_31"
            }
        }]
    ])
});