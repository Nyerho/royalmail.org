(function(e, t) {
    typeof exports == "object" && typeof module < "u" ? module.exports = t(require("vue"), require("ph-common/ph-common")) : typeof define == "function" && define.amd ? define(["vue", "ph-common/ph-common"], t) : (e = typeof globalThis < "u" ? globalThis : e || self, e.PhwMenuListView1DefaultV1 = t(e.Vue, e.phCommon))
})(this, function(e, t) {
    "use strict";
    const p = {
            "data-ps": "aed16245-div-2"
        },
        h = {
            class: "phs-widget-block-area ph-widget-box",
            "data-ps": "aed16245-div-3"
        },
        k = ["aria-label"],
        f = ["role"],
        g = ["role"],
        _ = ["aria-label", "target", "innerHTML"],
        m = {
            key: 1,
            class: "phw-icon-ctr",
            "data-ps": "aed16245-span-2"
        },
        B = {
            class: "phw-btn-icon phw-i-sz-3 phw-ml-1 phw-icon-flip",
            fill: "currentcolor",
            "aria-hidden": "true",
            "data-ps": "aed16245-svg-1"
        },
        y = {
            href: "#phw-cns-icon-ccpa-icon",
            "data-ps": "aed16245-use-1"
        },
        E = {
            key: 2,
            class: "phw-icon-ctr",
            "data-ps": "aed16245-span-2"
        },
        D = {
            key: 0,
            class: "phw-btn-icon phw-i-sz-3 phw-ml-1 phw-g-icon-white phw-icon-flip",
            fill: "currentcolor",
            "aria-hidden": "true",
            "data-ps": "aed16245-svg-1"
        },
        P = {
            href: "#phw-cns-icon-chevron-right",
            "data-ps": "aed16245-use-1"
        },
        V = {
            key: 1,
            class: "phw-btn-icon phw-i-sz-2 phw-ml-1 phw-g-icon-white",
            fill: "currentcolor",
            "aria-hidden": "true",
            "data-ps": "aed16245-svg-1"
        },
        b = {
            href: "#phw-cns-icon-external",
            "data-ps": "aed16245-use-1"
        },
        x = ["innerHTML"],
        L = {
            "data-ps": "aed16245-div-4"
        },
        M = ["role"],
        T = ["role"],
        z = ["target", "aria-label", "innerHTML"],
        S = {
            key: 1,
            class: "phw-icon-ctr",
            "data-ps": "aed16245-span-4"
        },
        H = {
            key: 0,
            class: "phw-btn-icon phw-i-sz-3 phw-ml-1 phw-g-icon-white phw-icon-flip",
            fill: "currentcolor",
            "aria-hidden": "true",
            "data-ps": "aed16245-svg-2"
        },
        u = {
            href: "#phw-cns-icon-chevron-right",
            "data-ps": "aed16245-use-2"
        },
        j = {
            key: 1,
            class: "phw-btn-icon phw-i-sz-2 phw-ml-1 phw-g-icon-white",
            fill: "currentcolor",
            "aria-hidden": "true",
            "data-ps": "aed16245-svg-1"
        },
        $ = {
            href: "#phw-cns-icon-external",
            "data-ps": "aed16245-use-1"
        };
    return ((r, i) => {
        const c = r.__vccOpts || r;
        for (const [s, o] of i) c[s] = o;
        return c
    })(e.defineComponent({
        __name: "MenuListView1DefaultComponent",
        props: {
            instanceId: null,
            contentId: null,
            theme: null,
            widgetTag: null,
            showIcon: {
                type: Boolean
            },
            propViewNine: null,
            showExternalIcon: {
                type: Boolean
            }
        },
        setup(r) {
            const i = r,
                c = e.ref(),
                s = e.ref();
            return e.onBeforeMount(() => {
                t.contentStore.getContent(i.contentId).then(o => {
                    s.value = o || {}
                })
            }), e.onMounted(() => {
                t.usePhCommon().init(c.value, s, i.instanceId)
            }), (o, Q) => {
                var a;
                return e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    ref_key: "element",
                    ref: c,
                    class: "phw-widget-ctr phw-widget-empty-ctr",
                    "data-ps": "aed16245-div-1"
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", p, [e.withDirectives((e.openBlock(), e.createElementBlock("div", h, [e.withDirectives((e.openBlock(), e.createElementBlock("nav", {
                    "aria-label": (a = s.value) == null ? void 0 : a.navigationAriaLabel,
                    class: "phw-f-nav-menu",
                    "data-ps": "aed16245-nav-1"
                }, [s.value && s.value.menuBlock ? e.withDirectives((e.openBlock(), e.createElementBlock("ul", {
                    key: 0,
                    class: e.normalizeClass([
                        [(i == null ? void 0 : i.propViewNine) == "true" ? "phw-d-lg-block phw-text-sm-c phw-mb-sm-2" : ""], "phw-d-flex phw-justify-content-between phw-list-none phw-m-0 phw-p-0 phw-flex-wrap"
                    ]),
                    role: s.value.menuBlock.length > 1 ? "list" : "presentation",
                    "data-ps": "aed16245-ul-1"
                }, [(e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(s.value.menuBlock, (n, O) => {
                    var w;
                    return e.withDirectives((e.openBlock(), e.createElementBlock("li", {
                        key: O,
                        class: e.normalizeClass([
                            [(i == null ? void 0 : i.propViewNine) == "true" ? o.$style["menu-width-ctrl"] : "", o.$style["phw-f-menu-list-item"]], "phw-f-menu-list-item phw-ml-2 phw-mr-2 phw-mr-lg-0 phw-ml-lg-0 phw-width-sm-4"
                        ]),
                        role: s.value.menuBlock.length > 1 ? "listitem" : void 0,
                        "data-ps": "aed16245-li-1"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                        class: e.normalizeClass([
                            [n && n.link && (n.link.linkType == "ccpaOneTrust" || n.link.linkType == "ccpa") ? "phw-d-flex phw-align-items-center" : i.showIcon ? "phw-d-flex phw-align-items-center phw-menu-icon-container" : ""],
                            [(i == null ? void 0 : i.propViewNine) == "true" ? "phw-justify-sm-content-center" : ""]
                        ]),
                        "data-ps": "aed16245-span-1"
                    }, [n && n.link ? e.withDirectives((e.openBlock(), e.createElementBlock("a", {
                        key: 0,
                        "aria-label": (w = n == null ? void 0 : n.link) == null ? void 0 : w.ariaLabel,
                        target: n.link.target,
                        class: "menu-items phw-td-none phw-g-footer-menu-list-link",
                        "data-ps": "aed16245-a-1",
                        innerHTML: n.link.text
                    }, null, 8, _)), [
                        [e.unref(t.vPhwSetting)],
                        [e.unref(t.vPhwHref), n.link.href]
                    ]) : e.createCommentVNode("", !0), n && n.link && (n.link.linkType == "ccpaOneTrust" || n.link.linkType == "ccpa") ? e.withDirectives((e.openBlock(), e.createElementBlock("span", m, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", B, [e.withDirectives(e.createElementVNode("use", y, null, 512), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : i.showIcon && n && n.link ? e.withDirectives((e.openBlock(), e.createElementBlock("span", E, [!r.showExternalIcon || n.link.target != "_blank" ? e.withDirectives((e.openBlock(), e.createElementBlock("svg", D, [e.withDirectives(e.createElementVNode("use", P, null, 512), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), r.showExternalIcon && n.link.target == "_blank" ? e.withDirectives((e.openBlock(), e.createElementBlock("svg", V, [e.withDirectives(e.createElementVNode("use", b, null, 512), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]), !(n && n.link) && n && n.folderItems ? e.withDirectives((e.openBlock(), e.createElementBlock("h2", {
                        key: 0,
                        class: e.normalizeClass(["phw-f-nav-heading phw-g-footer-menu-list-heading phw-mb-3 phw-mb-xl-2", [(i == null ? void 0 : i.propViewNine) == "true" ? "phw-pl-3 phw-pl-sm-0" : ""]]),
                        "data-ps": "aed16245-h2-1",
                        innerHTML: n.folderName
                    }, null, 10, x)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("div", L, [!(n && n.link) && n && n.folderItems ? e.withDirectives((e.openBlock(), e.createElementBlock("ul", {
                        key: 0,
                        class: e.normalizeClass(["phw-f-sub-nav phw-list-none phw-pl-3 phw-pl-sm-0 phw-mb-sm-1", [(i == null ? void 0 : i.propViewNine) == "true" ? o.$style["border-left-ctrl"] : ""]]),
                        "data-ph-component-name": "sub-navigation",
                        role: n.folderItems.length > 1 ? "list" : "presentation",
                        "data-ps": "aed16245-ul-2"
                    }, [(e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(n.folderItems, (l, q) => {
                        var d;
                        return e.withDirectives((e.openBlock(), e.createElementBlock("li", {
                            key: q,
                            class: "f-sub-list",
                            role: n.folderItems.length > 1 ? "listitem" : void 0,
                            "data-ph-component-name": "menu-item1",
                            "data-ps": "aed16245-li-2"
                        }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                            class: e.normalizeClass([
                                [i.showIcon ? "phw-d-flex phw-align-items-center phw-menu-icon-container phw-mb-2-5 phw-mb-xl-1-5" : "phw-mb-1 phw-d-inline-block"],
                                [(i == null ? void 0 : i.propViewNine) == "true" ? "phw-justify-sm-content-center" : ""]
                            ]),
                            "data-ps": "aed16245-span-3"
                        }, [l && l.link ? e.withDirectives((e.openBlock(), e.createElementBlock("a", {
                            key: 0,
                            target: l.link && l.link.target,
                            "aria-label": (d = l == null ? void 0 : l.link) == null ? void 0 : d.ariaLabel,
                            "data-ph-component-name": "menu-item-link1",
                            class: e.normalizeClass([
                                [i.showIcon ? "" : "phw-pt-050 phw-pb-050"], "phw-td-none phw-g-footer-menu-list-link"
                            ]),
                            "data-ps": "aed16245-a-2",
                            innerHTML: l.link.text
                        }, null, 10, z)), [
                            [e.unref(t.vPhwSetting)],
                            [e.unref(t.vPhwHref), l.link.href]
                        ]) : e.createCommentVNode("", !0), i.showIcon && l && l.link ? e.withDirectives((e.openBlock(), e.createElementBlock("span", S, [!r.showExternalIcon || !(l.link && l.link.target == "_blank") ? e.withDirectives((e.openBlock(), e.createElementBlock("svg", H, [e.withDirectives(e.createElementVNode("use", u, null, 512), [
                            [e.unref(t.vPhwSetting)]
                        ])])), [
                            [e.unref(t.vPhwSetting)]
                        ]) : e.createCommentVNode("", !0), r.showExternalIcon && l.link && l.link.target == "_blank" ? e.withDirectives((e.openBlock(), e.createElementBlock("svg", j, [e.withDirectives(e.createElementVNode("use", $, null, 512), [
                            [e.unref(t.vPhwSetting)]
                        ])])), [
                            [e.unref(t.vPhwSetting)]
                        ]) : e.createCommentVNode("", !0)])), [
                            [e.unref(t.vPhwSetting)]
                        ]) : e.createCommentVNode("", !0)], 2)), [
                            [e.unref(t.vPhwSetting)]
                        ])], 8, T)), [
                            [e.unref(t.vPhwSetting)]
                        ])
                    }), 128))], 10, M)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(t.vPhwSetting)]
                    ])], 10, g)), [
                        [e.unref(t.vPhwSetting)]
                    ])
                }), 128))], 10, f)), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)], 8, k)), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ])
            }
        }
    }), [
        ["__cssModules", {
            $style: {
                "phw-f-menu-list-item": "_phw-f-menu-list-item_lordp_3",
                "menu-width-ctrl": "_menu-width-ctrl_lordp_9",
                "border-left-ctrl": "_border-left-ctrl_lordp_21"
            }
        }]
    ])
});