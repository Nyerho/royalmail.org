/* @buildInfo {"builtAt":"__builtAt__","buildNumber":"__buildNumber__","commitRevision":"__commitRevision__","builtBy":"__builtBy__"} */
var launch = function(d) {
    "use strict";
    const {
        phApp: c
    } = window, {
        widgetApiEndpoint: S,
        deviceType: g,
        locale: f,
        pageId: p,
        refNum: l
    } = c, k = "csrfToken", m = c.siteType, {
        phModule: A
    } = c, P = new URLSearchParams({
        deviceType: g,
        locale: f,
        pageId: p,
        refNum: l,
        siteVariant: m
    }).toString();

    function a(e) {
        try {
            return c.ddo.siteConfig.data.siteSettings[e] ? c.ddo.siteConfig.data.siteSettings[e] : c.ddo.siteConfig.data[e]
        } catch (t) {
            return console.error(t), null
        }
    }

    function v(e, t) {
        c.ddo[e] = t
    }
    const D = () => {
        const e = document.getElementById(k);
        return e && e.innerText || ""
    };

    function T(e, t) {
        const n = a("cdnConfig");
        if (n && (n == null ? void 0 : n.cdnDdos.includes(e))) {
            const o = n.cdnUrl + "/api/" + l + "/" + e + "?" + P;
            return fetch(o).then(r => r.json()).then(r => r[e]).catch(r => (console.error(r), r))
        }
        return c.ddo[e] ? c.ddo[e] : fetch(S, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": D()
            },
            body: JSON.stringify({
                deviceType: g,
                locale: f,
                pageId: p,
                refNum: l,
                siteVariant: m,
                ddoKey: e,
                phModule: A
            })
        }).then(o => o.json()).then(o => (t && v(e, o[e]), o[e])).catch(o => (console.error(o), o))
    }
    const {
        phApp: s
    } = window, q = (e, t) => {
        const n = new CustomEvent(e, {
            bubbles: !0,
            detail: t
        });
        document.dispatchEvent(n)
    };

    function M(e, t) {
        s.dynaData.widgets = s.dynaData.widgets || {}, s.dynaData.widgets[t] = e, s.conditions = s.conditions || {}, s.conditions[t] = e.conditions
    }

    function y(e) {
        const t = document.querySelector(".phw-sticky-top-all,.ph-header");
        Array.isArray(e.widgets) && (e.widgets.reverse(), s.dynaData = s.dynaData || {}, s.dynaData.widgetData = e.widgetData, e.widgets.forEach(n => {
            const {
                instanceId: o
            } = n;
            if (n.selector) try {
                const i = document.querySelector(n.selector);
                i ? i.insertAdjacentHTML("beforebegin", n.structure) : t == null || t.insertAdjacentHTML("afterbegin", n.structure)
            } catch (i) {
                console.error(i)
            } else t == null || t.insertAdjacentHTML("afterbegin", n.structure);
            M(n, o)
        })), q("loadDynamicWidgets", {})
    }

    function L() {
        T("dynaData", !0).then(t => {
            const n = t.data;
            n && y(n)
        })
    }
    const j = window,
        {
            phApp: u
        } = j,
        E = "phw-element-id",
        C = () => {
            const e = document.createElement("script");
            let t = a("phwPxScrVerionUrl") || "";
            const n = document.querySelector("head");
            t && n && (t.startsWith("http") || (t = u.cdnUrl + "/" + t), e.setAttribute("src", t), e.setAttribute("async", ""), e.setAttribute("defer", ""), n.appendChild(e))
        },
        H = () => {
            const e = ["externalCookieConfig", "externalCookieTrustArcConfig", "externalCookieIubendaConfig", "externalCookieDidomiConfig", "externalCookieOsanoConfig", "externalCookieGenericConfig"];
            for (let t = 0; t < e.length; t++) {
                const n = e[t];
                if (a(n)) return !0
            }
            return !1
        },
        W = () => {
            const t = (document.cookie || "").includes("PHPPPE_CVD"),
                n = document.querySelector('[ph-module="cvd"], [data-widget="phw-cvd"]'),
                o = a("ignoreCovidWidgetPagesList") || [];
            let i = !1;
            const {
                pageName: r
            } = u;
            return o.indexOf(r) !== -1 && (i = !0), !t && n && !i
        },
        x = () => {
            if (W()) {
                const e = document.querySelector('[ph-module="cvd"], [data-widget="phw-cvd"]');
                e && (e.style.minHeight = "100px")
            }
        },
        O = () => {
            var n;
            const e = document.querySelectorAll("[ph-data-src]"),
                t = e.length;
            for (let o = 0; o < t; o++) {
                const i = (n = e[o]) == null ? void 0 : n.getAttribute("ph-data-src");
                i && (e[o].setAttribute("src", i), e[o].removeAttribute("ph-data-src"))
            }
        };

    function I(e) {
        return e === "automationEngine" && a("unifiedFlowEnabled") && (u.blockHvhBundleLoad === void 0 || u.blockHvhBundleLoad === !0)
    }

    function _(e) {
        try {
            const t = a(`${e}PagesList`);
            if (t && Array.isArray(t) && !I(e)) return t.includes(u.pageName)
        } catch (t) {
            console.error("Error occured while checking if the page is module specific", t)
        }
        return !1
    }

    function F(e, t) {
        try {
            if (document.querySelector(`[${E}="${e==null?void 0:e.elementId}"]`)) return;
            const n = document.createElement(e.tag);
            Object.keys(e.attributes).forEach(o => {
                n.setAttribute(o, e.attributes[o])
            }), n.setAttribute("phw-module-id", t), n.setAttribute(E, e.elementId), document.head.appendChild(n)
        } catch (n) {
            console.error(`Error occured while injecting element for module ${t}`, n)
        }
    }

    function b() {
        try {
            const e = a("elementsToLoadByModule") || {};
            Object.entries(e).forEach(([t, n]) => {
                _(t) && n.forEach(o => {
                    F(o, t)
                })
            })
        } catch (e) {
            console.error("Error occured while injecting module specific elements", e)
        }
    }

    function N() {
        try {
            document.querySelectorAll("section[data-static-widget-id]").forEach(t => {
                !t.hasAttribute("type") && t.setAttribute("type", "static");
                const n = t.getAttribute("data-static-widget-id");
                n && !t.hasAttribute("data-widget") && t.setAttribute("data-widget", n)
            })
        } catch (e) {
            console.error("Error occured while adding required attributes for static widgets", e)
        }
    }
    N(), x(), C(), O(), L(), b();

    function B() {
        try {
            const e = document.cookie || "";
            return e.includes("PHPPPE_GCC=a") || e.includes("PHPPPE_GCC=d")
        } catch {
            return !1
        }
    }

    function U() {
        try {
            const e = a("ignoreCookiePages") || [],
                t = u.pageName || "";
            return e.includes(t)
        } catch {
            return !1
        }
    }

    function h() {
        try {
            if (U() || H() || B()) {
                const t = document.querySelector('section.phw-widget[data-func-widget-id="zk5Thu"]');
                t && t.style.setProperty("min-height", "auto");
                const n = document.querySelector(".phw-sticky-top-all");
                n && n.style.setProperty("min-height", "auto")
            }
        } catch (e) {
            console.error("Error occurred in removeDynamicMinHeightStyle function:", e)
        }
    }

    function $() {
        try {
            h()
        } catch (e) {
            console.error("Error occurred in handleMinHeightForCookiePopup function:", e)
        }
    }

    function w() {
        let e = document.querySelector(".phw-sticky-top-all");
        if (!e) {
            const r = document.querySelector(".ph-header");
            e = document.createElement("div"), r == null || r.insertAdjacentElement("beforebegin", e), e.classList.add("phw-sticky-top-all")
        }
        const t = document.querySelector(".ph-header"),
            n = document.querySelector('[type="header"]'),
            o = (n == null ? void 0 : n.querySelector(".phw-header-fixed-transparent")) || (n == null ? void 0 : n.querySelector(".phw-header-fixed"));
        t != null && t.children && Array.from(t.children).forEach(r => {
            r !== n && !e.contains(r) && e.appendChild(r)
        }), o && !e.contains(t) && e.appendChild(t);
        const i = document.querySelector('[data-widget-tag*="phw-job-detail-sticky-header"]');
        i && !e.contains(i) && e.appendChild(i)
    }
    return document.addEventListener("ph:gdpr:cookie:accepted", () => {
        h()
    }), document.addEventListener("ph:gdpr:cookie:declined", () => {
        h()
    }), w(), $(), d.injectElementsByModule = b, d.laodDynamicWidgetData = y, d.loadPxHdlrScript = C, d.wrapStickyElements = w, Object.defineProperties(d, {
        __esModule: {
            value: !0
        },
        [Symbol.toStringTag]: {
            value: "Module"
        }
    }), d
}({});