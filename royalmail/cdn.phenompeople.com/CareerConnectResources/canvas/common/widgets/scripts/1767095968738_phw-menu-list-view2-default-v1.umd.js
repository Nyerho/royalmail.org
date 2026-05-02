(function(e, i) {
    typeof exports == "object" && typeof module < "u" ? module.exports = i(require("vue"), require("ph-common/ph-common")) : typeof define == "function" && define.amd ? define(["vue", "ph-common/ph-common"], i) : (e = typeof globalThis < "u" ? globalThis : e || self, e.PhwMenuListView2DefaultV1 = i(e.Vue, e.phCommon))
})(this, function(e, i) {
    "use strict";

    function $(u, l, y, E, b, L, a) {
        let B = -1,
            f = -1,
            q = -1,
            v = -1;

        function s() {
            var o;
            const n = ((o = b.value) == null ? void 0 : o.querySelectorAll(".phw-s-eachNavItem"))[B];
            setTimeout(() => {
                !(n != null && n.contains(document.activeElement)) && B !== -1 && (u.value.menuBlock[B].showMore = !1, B = -1, document.removeEventListener("keyup", s), document.removeEventListener("mouseup", s))
            }, 6)
        }

        function M(t) {
            var o;
            if (!((o = b.value) == null ? void 0 : o.querySelectorAll(".phw-s-eachNavItem")[t].querySelector(".phw-s-sub-menu-list-folder"))) {
                const r = window.innerHeight - 100,
                    m = b.value.querySelector(".phw-s-menu-active .phw-sub-nav");
                m && (m.style.maxHeight = `${r}px`, m.style.overflowY = "auto")
            }
        }

        function D(t, n, o) {
            var w, c, _;
            const r = (w = b.value) == null ? void 0 : w.querySelectorAll(".phw-s-eachNavItem"),
                m = (c = b.value) == null ? void 0 : c.querySelector(".phw-s-menu-list-2-row");
            n || (u.value.menuBlock[t].showMore = !u.value.menuBlock[t].showMore, (_ = o.currentTarget) == null || _.focus(), u.value.menuBlock[t].showMore ? setTimeout(() => {
                B = t, document.addEventListener("keyup", s), document.addEventListener("mouseup", s), !E.expandMenuOnHover && m && (a == null ? void 0 : a.value) === "desktop" && M(t)
            }, 8) : (document.removeEventListener("keyup", s), document.removeEventListener("mouseup", s))), n && (u.value.menuBlock[t].showMore = !1, e.nextTick(() => {
                const g = r[t],
                    S = g && g.querySelector("button");
                S && S.focus()
            }))
        }

        function d() {
            var r;
            const n = ((r = b.value) == null ? void 0 : r.querySelectorAll(".phw-s-eachNavItem"))[B],
                o = n == null ? void 0 : n.querySelectorAll(".phw-s-subNavItem")[f];
            setTimeout(() => {
                !(o != null && o.contains(document.activeElement)) && f !== -1 && B !== -1 && (u.value.menuBlock[B].folderItems[f].showMore = !1, f = -1, document.removeEventListener("keyup", d), document.removeEventListener("mouseup", d))
            }, 4)
        }

        function P(t, n, o) {
            var _;
            const r = window.innerHeight,
                m = (_ = b.value) == null ? void 0 : _.querySelectorAll(".phw-s-eachNavItem")[t],
                w = m == null ? void 0 : m.querySelectorAll(".phw-s-subNavItem")[n];
            if (w == null ? void 0 : w.querySelectorAll(".phw-s-subNavNestedItem")) {
                const g = w.getBoundingClientRect().top,
                    S = r - g,
                    h = w.querySelector('[data-ph-at-id="menu-item-container-3"]');
                h && (g > 350 ? (h.style.maxHeight = `${g-100}px`, h.style.overflowY = "auto", h.style.top = "auto", h.style.bottom = "0") : (h.style.maxHeight = `${S-50}px`, h.style.overflowY = "auto"))
            }
        }

        function V(t, n, o, r) {
            var c, _, g, S;
            const m = (c = b.value) == null ? void 0 : c.querySelectorAll(".phw-s-eachNavItem"),
                w = (_ = b.value) == null ? void 0 : _.querySelector(".phw-s-menu-list-2-row");
            if (!o)
                if (u.value.menuBlock[t].folderItems[n].showMore = !u.value.menuBlock[t].folderItems[n].showMore, (g = r.currentTarget) == null || g.focus(), u.value.menuBlock[t].folderItems[n].showMore) setTimeout(() => {
                    f = n, document.addEventListener("keyup", d), document.addEventListener("mouseup", d), !E.expandMenuOnHover && w && (a == null ? void 0 : a.value) === "desktop" && P(t, n)
                }, 6);
                else {
                    document.removeEventListener("keyup", d), document.removeEventListener("mouseup", d);
                    const h = (S = b.value) == null ? void 0 : S.querySelectorAll(".phw-s-eachNavItem")[t],
                        k = h == null ? void 0 : h.querySelector(".phw-s-sub-nav-items");
                    k && (k.style.maxHeight = "", k.style.overflowY = "")
                }
            o && (u.value.menuBlock[t].folderItems[n].showMore = !1, e.nextTick(() => {
                const h = m[t],
                    k = h == null ? void 0 : h.querySelectorAll(".phw-s-subNavItem")[n],
                    p = k && k.querySelector("button");
                p && p.focus()
            }))
        }

        function I() {
            var m;
            const n = ((m = b.value) == null ? void 0 : m.querySelectorAll(".phw-s-eachNavItem"))[B],
                o = n == null ? void 0 : n.querySelectorAll(".phw-s-subNavItem")[f],
                r = o == null ? void 0 : o.querySelectorAll(".phw-s-subNavNestedItem")[q];
            setTimeout(() => {
                !(r != null && r.contains(document.activeElement)) && f !== -1 && B !== -1 && q !== -1 && (u.value.menuBlock[B].folderItems[f].folderItems[q].showMore = !1, q = -1, document.removeEventListener("keyup", I), document.removeEventListener("mouseup", I))
            }, 2)
        }

        function ce(t, n, o, r, m) {
            var _, g, S;
            const w = (_ = b.value) == null ? void 0 : _.querySelectorAll(".phw-s-eachNavItem"),
                c = (g = b.value) == null ? void 0 : g.querySelector(".phw-s-menu-list-2-row");
            r || (u.value.menuBlock[t].folderItems[n].folderItems[o].showMore = !u.value.menuBlock[t].folderItems[n].folderItems[o].showMore, (S = m.currentTarget) == null || S.focus(), u.value.menuBlock[t].folderItems[n].folderItems[o].showMore ? setTimeout(() => {
                q = o, document.addEventListener("keyup", I), document.addEventListener("mouseup", I), !E.expandMenuOnHover && c && (a == null ? void 0 : a.value) === "desktop" && P(t, n)
            }, 5) : (document.removeEventListener("keyup", I), document.removeEventListener("mouseup", I))), r && (u.value.menuBlock[t].folderItems[n].folderItems[o].showMore = !1, e.nextTick(() => {
                const h = w[t],
                    k = h == null ? void 0 : h.querySelectorAll(".phw-s-subNavItem")[n],
                    p = k == null ? void 0 : k.querySelectorAll(".phw-s-subNavNestedItem")[o],
                    O = p && p.querySelector("button");
                O && O.focus()
            }))
        }

        function A() {
            var m;
            const t = (m = b.value) == null ? void 0 : m.querySelectorAll(".phw-s-eachNavItem")[B],
                n = t == null ? void 0 : t.querySelectorAll(".phw-s-subNavItem")[f],
                o = n == null ? void 0 : n.querySelectorAll(".phw-s-subNavNestedItem")[q],
                r = o == null ? void 0 : o.querySelectorAll(".phw-s-subsubNavNestedItem")[v];
            setTimeout(() => {
                !(r != null && r.contains(document.activeElement)) && f !== -1 && B !== -1 && q !== -1 && v !== -1 && (u.value.menuBlock[B].folderItems[f].folderItems[q].folderItems[v].showMore = !1, v = -1, document.removeEventListener("keyup", A), document.removeEventListener("mouseup", A))
            }, 2)
        }

        function ue(t, n, o, r, m, w) {
            var k, p;
            const c = (k = b.value) == null ? void 0 : k.querySelectorAll(".phw-s-eachNavItem")[t],
                _ = c == null ? void 0 : c.querySelectorAll(".phw-s-subNavItem")[n],
                g = _ == null ? void 0 : _.querySelectorAll(".phw-s-subNavNestedItem")[o],
                S = g == null ? void 0 : g.querySelectorAll(".phw-s-subsubNavNestedItem")[r],
                h = S && S.querySelector("button");
            m || (u.value.menuBlock[t].folderItems[n].folderItems[o].folderItems[r].showMore = !u.value.menuBlock[t].folderItems[n].folderItems[o].folderItems[r].showMore, (p = w.currentTarget) == null || p.focus(), u.value.menuBlock[t].folderItems[n].folderItems[o].folderItems[r].showMore ? setTimeout(() => {
                v = r, document.addEventListener("keyup", A), document.addEventListener("mouseup", A)
            }, 2) : (document.removeEventListener("keyup", A), document.removeEventListener("mouseup", A))), m && (u.value.menuBlock[t].folderItems[n].folderItems[o].showMore = !1, e.nextTick(() => {
                h && h.focus()
            }))
        }
        const z = t => {
            t && t.focus && t.focus()
        };

        function me() {
            const t = document.querySelector(".nav-mobile-block"),
                n = document.querySelectorAll(".phw-hamburger-block button"),
                o = t == null ? void 0 : t.querySelectorAll("a[href]:not([disabled]), button:not([disabled])");
            if (o.length) {
                const r = n[0],
                    m = o[o.length - 1];
                r.addEventListener("focusout", w => {
                    var c;
                    (c = t == null ? void 0 : t.parentElement) != null && c.contains(w.relatedTarget) || z(m)
                }), m.addEventListener("focusout", w => {
                    var c;
                    (c = t == null ? void 0 : t.parentElement) != null && c.contains(w.relatedTarget) || z(r)
                })
            }
        }

        function H(t) {
            var S, h, k;
            y.value = t;
            let n = (S = l.value) == null ? void 0 : S.querySelector('[data-mobile-view="header-menu"]');
            const o = document.body.children,
                r = ((h = l.value) == null ? void 0 : h.querySelector(".nav-mobile-block")) || document.querySelector(".nav-mobile-block"),
                m = (k = r.closest("[data-func-widget-id]")) == null ? void 0 : k.getAttribute("data-func-widget-id"),
                w = E == null ? void 0 : E.instanceId;
            !L.value && (a == null ? void 0 : a.value) === "mobile" && r.setAttribute("data-func-widget-id", m), !L.value && (a == null ? void 0 : a.value) === "mobile" && r.setAttribute("instance-id", w);
            const c = document.querySelector(".phw-s-custom-button-mobile"),
                _ = '.phw-mobile-menu-active[data-mobile-view="header-menu"]',
                g = '.phw-mobile-drop-active[data-mobile-view="header-menu"]';
            if (!t && (a == null ? void 0 : a.value) === "desktop" && setTimeout(() => {
                    me()
                }, 200), t) {
                c == null || c.classList.remove("phw-d-block"), n = document.querySelector(`${_},${g}`), r && r.classList.remove("phw-mobile-menu-active", "phw-mobile-drop-active"), n && n.classList.remove("phw-mobile-menu-active", "phw-mobile-drop-active"), document.body.style.overflow = "", !L.value && (a == null ? void 0 : a.value) === "mobile" && n.remove();
                for (let p = 0; p < o.length && !L.value; p++) o[p].removeAttribute("aria-hidden");
                !L.value && (a == null ? void 0 : a.value) === "mobile" && l.value.append(n)
            } else {
                c == null || c.classList.add("phw-d-block"), r && r.classList.add("phw-mobile-menu-active"), document.body.style.overflow = "hidden", i.handleStyleInMobile('[data-selector-id="mobile-menu"],.phw-s-nav-block'), !L.value && (a == null ? void 0 : a.value) === "mobile" && n.remove();
                for (let p = 0; p < o.length && !L.value; p++) o[p].setAttribute("aria-hidden", "true");
                !L.value && (a == null ? void 0 : a.value) === "mobile" && document.body.append(n)
            }
            setTimeout(() => {
                const p = l.value && l.value.querySelector('[data-menulist-button="mobile-button"]');
                p && p.focus()
            }, 10)
        }

        function he(t) {
            var n;
            (n = l.value) != null && n.contains(t.target) || H(!0)
        }

        function we(t, n) {
            let o = t.value;
            o = window.innerWidth;
            const r = document.querySelector(".ph-header .phw-s-header"),
                m = document.querySelector(".ph-header"),
                w = document.querySelector(".ph-page"),
                c = document.querySelector(".ph-footer"),
                _ = "ph:refreshSliders";
            if (m && o >= e.ref(1200).value) {
                w.classList.add("phw-s-vertical-menu"), c.classList.add("phw-s-vertical-menu");
                const g = r.querySelector(".phw-s-small-logo-block");
                g.style.height = "100%", setTimeout(() => {
                    var p;
                    const S = i.getHeight(m),
                        h = (p = n.value) == null ? void 0 : p.querySelector(".phw-s-nav-block"),
                        k = h.offsetWidth;
                    h.style.top = `${S}px`, h.style.height = `calc(100vh - ${S}px)`, w.style.width = `calc(100% - ${k}px)`, w.style.marginInlineStart = `${k}px`, c.style.width = `calc(100% - ${k}px)`, c.style.marginInlineStart = `${k}px`, i.raiseCustomEvent(_, {})
                }, 500)
            } else w.style.width = "", w.style.marginInlineStart = "", c.style.width = "", c.style.marginInlineStart = ""
        }
        return {
            handlNavItem: D,
            handlSubNavItem: V,
            handlSubNavNestedItem: ce,
            handleSubSubNavNestedItem: ue,
            handleMobileView: H,
            handleOutSideClick: he,
            headerBlockHeight: we,
            handleAnchorLinkClick: t => {
                if (t && t.includes("#")) {
                    const n = parseInt(E.maxAllowedMenuItems, 10) !== 1,
                        o = !y.value;
                    n && o && H(!0)
                }
            }
        }
    }
    const F = ["role", "data-ph-at-count"],
        R = ["data-ph-at-index", "role"],
        Y = ["target", "aria-label", "innerHTML"],
        j = {
            key: 1,
            class: "phw-icon-ctr",
            "data-ps": "45165f2b-span-8"
        },
        N = {
            class: "phw-btn-icon phw-i-sz-3 phw-ml-1 phw-icon-flip",
            fill: "currentcolor",
            "aria-hidden": "true",
            "data-ps": "45165f2b-svg-7"
        },
        C = {
            href: "#phw-cns-icon-ccpa-icon",
            "data-ps": "45165f2b-use-7"
        },
        W = {
            key: 2,
            class: "phw-icon-ctr",
            "data-ps": "45165f2b-span-8"
        },
        G = {
            href: "#phw-cns-icon-chevron-right",
            "data-ps": "45165f2b-use-7"
        },
        J = {
            href: "#phw-cns-icon-external",
            "data-ps": "45165f2b-use-8"
        },
        Q = ["aria-expanded", "aria-label", "onClick"],
        U = ["innerHTML"],
        X = {
            class: "phw-icon-ctr",
            "data-ps": "45165f2b-span-2"
        },
        Z = {
            class: "icon phw-i-sz-4 phw-i-sz-sm-3",
            fill: "currentcolor",
            "data-ps": "45165f2b-svg-1"
        },
        K = {
            href: "#phw-cns-icon-chevron-up",
            "data-ps": "45165f2b-use-1"
        },
        x = {
            class: "phw-i-sz-4 phw-i-sz-sm-3",
            fill: "currentcolor",
            "data-ps": "45165f2b-svg-2"
        },
        T = {
            href: "#phw-cns-icon-chevron-down",
            "data-ps": "45165f2b-use-2"
        },
        ee = {
            "data-ps": "45165f2b-div-2"
        },
        te = ["data-ph-at-count", "data-list", "role"],
        ne = ["data-ph-at-index", "role"],
        le = ["target", "aria-label", "onKeyup", "innerHTML"],
        oe = {
            key: 1,
            class: "phw-icon-ctr",
            "data-ps": "45165f2b-span-10"
        },
        se = {
            href: "#phw-cns-icon-chevron-right",
            "data-ps": "45165f2b-use-9"
        },
        ie = {
            href: "#phw-cns-icon-external",
            "data-ps": "45165f2b-use-10"
        },
        re = e.defineComponent({
            __name: "MenuListView2DefaultComponent",
            props: {
                instanceId: null,
                contentId: null,
                theme: null,
                widgetTag: null,
                showIcon: {
                    type: Boolean
                },
                dividerEnable: {
                    type: Boolean
                },
                showExternalIcon: {
                    type: Boolean
                },
                maxAllowedMenuItems: null,
                menuItem: null,
                menuItemButton: null,
                menuItemLists: null,
                menuItemIcon: null,
                menuItemStroke: null,
                menuItemAlign: null,
                menuItemAlignCenter: null
            },
            setup(u) {
                const l = u,
                    y = e.ref(),
                    E = e.ref();
                e.ref([]);
                const b = e.ref(!0),
                    L = e.ref(),
                    a = e.ref(!1);
                e.onBeforeMount(() => {
                    i.contentStore.getContent(l.contentId).then(f => {
                        y.value = f || {}
                    })
                }), e.onMounted(() => {
                    i.usePhCommon().init(E.value, y, l.instanceId)
                });
                const {
                    handlNavItem: B
                } = $(y, E, b, l, L, a);
                return (f, q) => {
                    var v;
                    return e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        ref_key: "element",
                        ref: E,
                        class: e.normalizeClass(["phw-widget-ctr phw-widget-empty-ctr", f.$style["mlv2-menu-list-view2"]]),
                        "data-ps": "45165f2b-div-1"
                    }, [y.value && y.value.menuBlock ? e.withDirectives((e.openBlock(), e.createElementBlock("ul", {
                        key: 0,
                        ref_key: "menuItemsBar",
                        ref: L,
                        class: e.normalizeClass([
                            [l == null ? void 0 : l.menuItemAlign, f.$style["mlv2-menu-list"], (l == null ? void 0 : l.menuItemAlignCenter) == "true" ? "phw-justify-content-center" : "phw-justify-content-end phw-flex-sm-column phw-align-sm-items-start"], "phw-d-flex phw-align-items-center phw-list-none phw-m-0 phw-p-0 phw-flex-wrap"
                        ]),
                        role: y.value.menuBlock.length > 1 ? "list" : "presentation",
                        "data-ph-at-count": (v = y.value.menuBlock) == null ? void 0 : v.lenth,
                        "data-ph-at-id": "menu-item-container-1",
                        "data-ps": "45165f2b-ul-1"
                    }, [(e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(y.value.menuBlock.slice(0, u.maxAllowedMenuItems), (s, M) => {
                        var D;
                        return e.withDirectives((e.openBlock(), e.createElementBlock("li", {
                            key: M,
                            "data-ph-at-id": "menu-item-nested-1",
                            "data-ph-at-index": M,
                            class: e.normalizeClass([
                                [l == null ? void 0 : l.menuItemStroke, f.$style["mlv2-menu-list-item"],
                                    [(l == null ? void 0 : l.menuItemAlignCenter) == "true", f.$style["mlv9-menu-list-item"]]
                                ], "phw-posn-relative phw-s-eachNavItem"
                            ]),
                            role: y.value.menuBlock.length > 1 ? "listitem" : void 0,
                            "data-ps": "45165f2b-li-1"
                        }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                            class: e.normalizeClass(s && s.link && (s.link.linkType == "ccpaOneTrust" || s.link.linkType == "ccpa") ? "phw-d-flex phw-align-items-center" : l.showIcon ? "phw-d-flex phw-align-items-center phw-menu-icon-container" : ""),
                            "data-ps": "45165f2b-span-7"
                        }, [s && s.link ? e.withDirectives((e.openBlock(), e.createElementBlock("a", {
                            key: 0,
                            target: s.link && s.link.target,
                            "aria-label": (D = s == null ? void 0 : s.link) == null ? void 0 : D.ariaLabel,
                            "data-ph-at-id": "menu-item-link-nested-1",
                            class: e.normalizeClass([l == null ? void 0 : l.menuItem, "phw-p-0 phw-m-0 phw-g-footer-bottom-menu-list-link"]),
                            "data-ps": "45165f2b-a-1",
                            innerHTML: s.link.text
                        }, null, 10, Y)), [
                            [e.unref(i.vPhwSetting)],
                            [e.unref(i.vPhwHref), s.link.href]
                        ]) : e.createCommentVNode("", !0), s && s.link && (s.link.linkType == "ccpaOneTrust" || s.link.linkType == "ccpa") ? e.withDirectives((e.openBlock(), e.createElementBlock("span", j, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", N, [e.withDirectives(e.createElementVNode("use", C, null, 512), [
                            [e.unref(i.vPhwSetting)]
                        ])])), [
                            [e.unref(i.vPhwSetting)]
                        ])])), [
                            [e.unref(i.vPhwSetting)]
                        ]) : l.showIcon && s && s.link ? e.withDirectives((e.openBlock(), e.createElementBlock("span", W, [!u.showExternalIcon || s.link.target != "_blank" ? e.withDirectives((e.openBlock(), e.createElementBlock("svg", {
                            key: 0,
                            class: e.normalizeClass(["phw-btn-icon phw-i-sz-3 phw-ml-1 phw-g-icon-white phw-icon-flip", l == null ? void 0 : l.menuItemIcon]),
                            fill: "currentcolor",
                            "aria-hidden": "true",
                            "data-ps": "45165f2b-svg-7"
                        }, [e.withDirectives(e.createElementVNode("use", G, null, 512), [
                            [e.unref(i.vPhwSetting)]
                        ])], 2)), [
                            [e.unref(i.vPhwSetting)]
                        ]) : e.createCommentVNode("", !0), u.showExternalIcon && s.link.target == "_blank" ? e.withDirectives((e.openBlock(), e.createElementBlock("svg", {
                            key: 1,
                            class: e.normalizeClass(["phw-btn-icon phw-i-sz-2 phw-ml-1 phw-g-icon-white", l == null ? void 0 : l.menuItemIcon]),
                            fill: "currentcolor",
                            "aria-hidden": "true",
                            "data-ps": "45165f2b-svg-8"
                        }, [e.withDirectives(e.createElementVNode("use", J, null, 512), [
                            [e.unref(i.vPhwSetting)]
                        ])], 2)), [
                            [e.unref(i.vPhwSetting)]
                        ]) : e.createCommentVNode("", !0)])), [
                            [e.unref(i.vPhwSetting)]
                        ]) : e.createCommentVNode("", !0)], 2)), [
                            [e.unref(i.vPhwSetting)]
                        ]), !(s && s.link) && s && s.folderItems ? e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                            key: 0,
                            class: e.normalizeClass([l == null ? void 0 : l.menuItemButton, f.$style["mlv2-menu-link"], "phw-dropdown", "phw-m-0", "phw-p-0", "phw-text-l", "phw-s-navButton" + M, "phw-align-items-center", "phw-g-footer-bottom-menu-list-link"]),
                            "data-ph-at-id": "button-nested-1",
                            "aria-expanded": s.showMore ? "true" : "false",
                            "data-ps": "45165f2b-button-1",
                            "aria-label": s == null ? void 0 : s.ariaLabel,
                            onClick: d => e.unref(B)(M, !1, d)
                        }, [e.withDirectives(e.createElementVNode("span", {
                            "data-ps": "45165f2b-span-1",
                            innerHTML: s.folderName
                        }, null, 8, U), [
                            [e.unref(i.vPhwSetting)]
                        ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", X, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", Z, [e.withDirectives(e.createElementVNode("use", K, null, 512), [
                            [e.unref(i.vPhwSetting)]
                        ])])), [
                            [e.vShow, s.showMore],
                            [e.unref(i.vPhwSetting)]
                        ]), e.withDirectives((e.openBlock(), e.createElementBlock("svg", x, [e.withDirectives(e.createElementVNode("use", T, null, 512), [
                            [e.unref(i.vPhwSetting)]
                        ])])), [
                            [e.vShow, !s.showMore],
                            [e.unref(i.vPhwSetting)]
                        ])])), [
                            [e.unref(i.vPhwSetting)]
                        ])], 10, Q)), [
                            [e.unref(i.vPhwSetting)]
                        ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("div", ee, [!(s && s.link) && s && s.folderItems ? e.withDirectives((e.openBlock(), e.createElementBlock("ul", {
                            key: 0,
                            "data-ph-at-count": s.folderItems.length,
                            "data-ph-at-id": "menu-item-container-2",
                            "data-list": "menu-list-" + M,
                            class: e.normalizeClass([
                                [l == null ? void 0 : l.menuItemLists, f.$style["mlv2-menu-sub-nav"]], "phw-posn-absolute phw-posn-sm-relative phw-list-none phw-g-card-bg-darker phw-p-0"
                            ]),
                            "data-ph-component-name": "sub-navigation",
                            role: s.folderItems.length > 1 ? "list" : "presentation",
                            "data-ps": "45165f2b-ul-2"
                        }, [(e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(s.folderItems, (d, P) => {
                            var V;
                            return e.withDirectives((e.openBlock(), e.createElementBlock("li", {
                                key: P,
                                "data-ph-at-index": P,
                                "data-ph-at-id": "menu-item-nested-2",
                                class: e.normalizeClass([f.$style["mlv2-menu-sub-nav-list"], "phw-mt-2 phw-mb-2 phw-mr-2 phw-ml-1 phw-ml-sm-0 phw-posn-relative phw-s-subNavItem"]),
                                role: s.folderItems.length > 1 ? "listitem" : void 0,
                                "data-ph-component-name": "menu-item1",
                                "data-ps": "45165f2b-li-2"
                            }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                                class: e.normalizeClass(l.showIcon ? "phw-d-flex phw-align-items-center phw-menu-icon-container" : ""),
                                "data-ps": "45165f2b-span-9"
                            }, [d && d.link ? e.withDirectives((e.openBlock(), e.createElementBlock("a", {
                                key: 0,
                                target: d.link && d.link.target,
                                "aria-label": (V = d == null ? void 0 : d.link) == null ? void 0 : V.ariaLabel,
                                "data-ph-at-id": "menu-item-link-nested-2",
                                "data-ph-component-name": "menu-item-link1",
                                class: e.normalizeClass([
                                    [l == null ? void 0 : l.menuItem, f.$style["mlv2-menu-sub-nav-link"]], "phw-m-0 phw-p-0 phw-g-footer-bottom-menu-list-link"
                                ]),
                                "data-ps": "45165f2b-a-2",
                                onKeyup: e.withKeys(I => e.unref(B)(M, !0, I), ["esc"]),
                                innerHTML: d.link.text
                            }, null, 42, le)), [
                                [e.unref(i.vPhwSetting)],
                                [e.unref(i.vPhwHref), d.link.href]
                            ]) : e.createCommentVNode("", !0), l.showIcon && d && d.link ? e.withDirectives((e.openBlock(), e.createElementBlock("span", oe, [!u.showExternalIcon || !(d.link && d.link.target == "_blank") ? e.withDirectives((e.openBlock(), e.createElementBlock("svg", {
                                key: 0,
                                class: e.normalizeClass(["phw-btn-icon phw-i-sz-3 phw-ml-1 phw-g-icon-white phw-icon-flip", l == null ? void 0 : l.menuItemIcon]),
                                fill: "currentcolor",
                                "aria-hidden": "true",
                                "data-ps": "45165f2b-svg-9"
                            }, [e.withDirectives(e.createElementVNode("use", se, null, 512), [
                                [e.unref(i.vPhwSetting)]
                            ])], 2)), [
                                [e.unref(i.vPhwSetting)]
                            ]) : e.createCommentVNode("", !0), u.showExternalIcon && d.link && d.link.target == "_blank" ? e.withDirectives((e.openBlock(), e.createElementBlock("svg", {
                                key: 1,
                                class: e.normalizeClass(["phw-btn-icon phw-i-sz-2 phw-ml-1 phw-g-icon-white", l == null ? void 0 : l.menuItemIcon]),
                                fill: "currentcolor",
                                "aria-hidden": "true",
                                "data-ps": "45165f2b-svg-10"
                            }, [e.withDirectives(e.createElementVNode("use", ie, null, 512), [
                                [e.unref(i.vPhwSetting)]
                            ])], 2)), [
                                [e.unref(i.vPhwSetting)]
                            ]) : e.createCommentVNode("", !0)])), [
                                [e.unref(i.vPhwSetting)]
                            ]) : e.createCommentVNode("", !0)], 2)), [
                                [e.unref(i.vPhwSetting)]
                            ])], 10, ne)), [
                                [e.unref(i.vPhwSetting)]
                            ])
                        }), 128))], 10, te)), [
                            [e.unref(i.vPhwSetting)]
                        ]) : e.createCommentVNode("", !0)])), [
                            [e.vShow, s.showMore],
                            [e.unref(i.vPhwSetting)]
                        ])], 10, R)), [
                            [e.unref(i.vPhwSetting)]
                        ])
                    }), 128))], 10, F)), [
                        [e.unref(i.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)], 2)), [
                        [e.unref(i.vPhwSetting)]
                    ])
                }
            }
        }),
        ae = {
            "mlv2-menu-link": "_mlv2-menu-link_11nep_3",
            "mlv2-menu-sub-nav": "_mlv2-menu-sub-nav_11nep_19",
            "phw-dropdown": "_phw-dropdown_11nep_33",
            active: "_active_11nep_33",
            "mlv2-menu-sub-nav-link": "_mlv2-menu-sub-nav-link_11nep_41",
            "mlv2-menu-list-item": "_mlv2-menu-list-item_11nep_49",
            "phw-menu-expanded": "_phw-menu-expanded_11nep_77",
            close: "_close_11nep_77",
            "mlv2-menu-list-view2": "_mlv2-menu-list-view2_11nep_85",
            "phw-menu-btn": "_phw-menu-btn_11nep_85",
            "mlv2-menu-list": "_mlv2-menu-list_11nep_49",
            "mlv9-menu-list-item": "_mlv9-menu-list-item_11nep_153"
        },
        pe = "";
    return ((u, l) => {
        const y = u.__vccOpts || u;
        for (const [E, b] of l) y[E] = b;
        return y
    })(re, [
        ["__cssModules", {
            $style: ae
        }]
    ])
});