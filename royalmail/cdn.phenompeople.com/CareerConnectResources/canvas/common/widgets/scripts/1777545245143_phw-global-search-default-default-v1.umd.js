(function(e, t) {
    typeof exports == "object" && typeof module < "u" ? module.exports = t(require("vue"), require("ph-common/ph-common")) : typeof define == "function" && define.amd ? define(["vue", "ph-common/ph-common"], t) : (e = typeof globalThis < "u" ? globalThis : e || self, e.PhwGlobalSearchDefaultDefaultV1 = t(e.Vue, e.phCommon))
})(this, function(e, t) {
    "use strict";
    var es = Object.defineProperty;
    var ts = (e, t, ue) => t in e ? es(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: ue
    }) : e[t] = ue;
    var H = (e, t, ue) => (ts(e, typeof t != "symbol" ? t + "" : t, ue), ue);

    function ue() {
        const i = {
                "errors.location.unsupportedBrowser": "Browser does not support location services",
                "errors.location.permissionDenied": "You have rejected access to your location",
                "errors.location.positionUnavailable": "Unable to determine your location"
            },
            d = e.ref();

        function a() {
            const g = {
                enableHighAccuracy: !0,
                maximumAge: 0
            };
            return new Promise(function(f, _) {
                function T(V) {
                    f(V)
                }

                function L(V) {
                    _(V.message)
                }
                window.navigator && window.navigator.geolocation ? window.navigator.geolocation.getCurrentPosition(T, L, g) : _(i["errors.location.unsupportedBrowser"])
            })
        }

        function o() {
            return a().then(g => (d.value = g, t.publishEvent("GeoLocation", g), g)).catch(g => (t.publishEvent("LocationError", g), g))
        }

        function p() {
            return d
        }
        return {
            getLocation: o,
            askForLocation: p
        }
    }

    function lt(i, d, a) {
        const o = d;
        if (d && !d[a] && d.all && (o[a] = d.all), o && o[a]) {
            const p = [];
            let g = [];
            return i.forEach((f, _) => {
                f && _ < o[a] && g.push(f), f && f.checked && _ > o[a] && p.push(f)
            }), g = p.concat(g), g
        }
        return i
    }
    const tt = (i, d, a, o, p, g) => {
            if (i && i.length && d && d.trim().length > 0) {
                const f = i.filter(_ => {
                    const T = typeof _ == "string";
                    let L = _;
                    return !T && !a ? i : (!T && a && (L = _[a] || ""), L = L.toLowerCase(), o ? L.startsWith(d.toLowerCase()) : L.indexOf(d.toLowerCase()) !== -1)
                });
                return g && p ? lt(f, p, g) : f
            }
            return g && p ? lt(i, p, g) : i || []
        },
        ee = {
            BACKSPACE: 8,
            TAB: 9,
            RETURN: 13,
            ESC: 27,
            SPACE: 32,
            PAGE_UP: 33,
            PAGE_DOWN: 34,
            END: 35,
            HOME: 36,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            DELETE: 46,
            SHIFT: 16
        };
    class Dt {
        constructor() {
            H(this, "clearTimer");
            H(this, "listBoxElement");
            H(this, "comboBoxElement");
            H(this, "widgetElement");
            H(this, "widgetViewModel");
            H(this, "activeIndex", -1);
            H(this, "results", []);
            H(this, "name");
            H(this, "element");
            H(this, "isShowResultsOnFocus", "true");
            H(this, "isShowNoResults", "true");
            H(this, "isHideListBox", "true");
            H(this, "keyupDebounceHandler");
            H(this, "keydownDebounceHandler");
            H(this, "ignoreExpanded", !1);
            H(this, "ignoreComboExpanded", !1);
            H(this, "ignoreListBoxClickHandler", !1);
            H(this, "isEventraised", !1);
            H(this, "validationInfo", {
                listbox: {},
                input: {},
                widget: {}
            });
            H(this, "debounceTimer", 200)
        }
        init(d, a, o) {
            this.element = d, this.name = a && a.name, this.ignoreExpanded = a && a.ignoreExpanded, this.ignoreComboExpanded = a && a.ignoreComboExpanded, this.ignoreListBoxClickHandler = a && a.ignoreListBoxClickHandler;
            const p = t.getSiteSettings("debounceTimer");
            p && (this.debounceTimer = p), this.initiate(o);
            const g = this.validate();
            g && g.length && console.warn("A11y autocomplete setup is improper.Check errors ", g), this.setupEventListeners()
        }
        debounce(d, a) {
            let o;
            return function() {
                const p = this,
                    g = arguments;
                clearTimeout(o), o = setTimeout(() => d.apply(p, g), a)
            }
        }
        initiate(d) {
            this.comboBoxElement = this.element.parentElement, this.comboBoxElement && (this.comboBoxElement.hasAttribute("aria-haspopup") && (this.element.setAttribute("aria-haspopup", this.comboBoxElement.getAttribute("aria-haspopup")), this.comboBoxElement.getAttribute("role")), this.comboBoxElement.hasAttribute("aria-owns") && (this.element.setAttribute("aria-owns", this.comboBoxElement.getAttribute("aria-owns")), this.comboBoxElement.removeAttribute("aria-owns")), this.comboBoxElement.hasAttribute("role") && (this.element.setAttribute("role", this.comboBoxElement.getAttribute("role")), this.comboBoxElement.removeAttribute("role")));
            const a = this.element.getAttribute("aria-haspopup"),
                o = this.element.getAttribute("aria-owns"),
                p = this.element.getAttribute("role");
            this.validationInfo.input.ariaHaspopup = a, this.validationInfo.input.ariaOwns = a, this.validationInfo.input.role = p;
            const g = this.element.getAttribute("aria-autocomplete"),
                f = this.element.getAttribute("aria-controls");
            if (this.isHideListBox = this.element.getAttribute("data-show-listbox") ? this.element.getAttribute("data-show-listbox") : "true", this.isShowResultsOnFocus = this.element.getAttribute("showResultsOnFocus") || this.isShowResultsOnFocus, this.isShowNoResults = this.element.getAttribute("showNoResults") || this.isShowNoResults, this.validationInfo.input.ariaAutocomplete = g, this.validationInfo.input.ariaControls = f, this.listBoxElement = this.comboBoxElement.querySelector(`[data-labelledby=${o}]`), this.listBoxElement || (this.listBoxElement = this.comboBoxElement.parentElement && this.comboBoxElement.parentElement.querySelector(`[data-labelledby=${o}]`) || document.querySelector(`[data-labelledby=${o}]`)), this.listBoxElement) {
                this.validationInfo.listbox.exists = !0;
                const _ = this.listBoxElement.getAttribute("data-labelledby");
                this.validationInfo.listbox.ariaLabelledby = _
            }
            this.widgetElement = this.findWidget(), this.validationInfo.widget.exists = this.widgetElement, this.widgetViewModel = d, this.validationInfo.widget.viewModelExist = this.widgetViewModel, this.validationInfo.widget.getFieldOptions = this.widgetViewModel ? this.widgetViewModel.getFieldOptions : void 0, this.validationInfo.widget.setFieldValue = this.widgetViewModel ? this.widgetViewModel.setFieldValue : void 0, this.validationInfo.widget.clearFieldValue = this.widgetViewModel ? this.widgetViewModel.clearFieldValue : void 0, this.validationInfo.widget.getActiveIndex = this.widgetViewModel ? this.widgetViewModel.getActiveIndex : void 0, this.validationInfo.widget.getActiveIndexOnBlur = this.widgetViewModel ? this.widgetViewModel.getActiveIndexOnFocusOut : void 0
        }
        validate() {
            const d = [];
            return this.validationInfo.input.ariaHaspopup || d.push("Missing aria-haspopup attribute on parent div"), this.validationInfo.input.ariaHaspopup || d.push("Missing  aria-owns attribute on parent div"), this.validationInfo.input.ariaOwns || d.push("Missing  aria-owns attribute on parent div"), this.validationInfo.input.ariaAutocomplete || d.push("Missing aria-autocomplete attribute on input elem"), this.validationInfo.input.ariaControls || d.push("Missing aria-controls attribute on input elem"), this.validationInfo.listbox.ariaLabelledby || d.push("Missing data-labelledby attribute on listbox elem"), this.validationInfo.widget.exists || d.push("Missing widget elem"), this.validationInfo.widget.viewModelExist || d.push("Missing widget viewmodel on widget elem"), this.validationInfo.widget.getFieldOptions || d.push("Missing getFieldOptions(fieldName) fn on widget elem"), this.validationInfo.widget.setFieldValue || d.push("Missing setFieldValue(fieldName, selectedItemIndex) fn on widget elem"), this.validationInfo.widget.clearFieldValue || d.push("Missing clearFieldValue(fieldName) fn on widget elem"), this.validationInfo.widget.getActiveIndex || d.push("Missing getActiveIndex(fieldName) fn on widget elem"), this.validationInfo.widget.getActiveIndexOnBlur, d
        }
        showListbox() {
            setTimeout(() => {
                this.setActiveListItem(), this.listBoxElement && this.listBoxElement.classList.remove("phw-d-none"), this.element && (this.validationInfo && this.validationInfo.input && this.validationInfo.input.role || "") === "combobox" && !this.ignoreComboExpanded && this.element.setAttribute("aria-expanded", "true")
            }, 10)
        }
        hideListbox() {
            this.isHideListBox === "true" && (this.listBoxElement && (this.activeIndex = -1, this.listBoxElement.classList.add("phw-d-none"), this.listBoxElement.removeAttribute("aria-expanded")), this.element && (this.validationInfo && this.validationInfo.input && this.validationInfo.input.role || "") === "combobox" && this.element.setAttribute("aria-expanded", "false"), this.clearActiveListItem())
        }
        isListboxHidden() {
            return this.listBoxElement ? this.listBoxElement.classList.contains("phw-d-none") : null
        }
        scrollControlInDialog() {
            const d = this.listBoxElement;
            if (!d) return;
            const a = d.querySelector(`#${this.name}-result-item-${this.activeIndex}`);
            if (!a) return;
            const o = d.querySelectorAll(".listbox-header"),
                p = o.length > 0 ? Array.from(o).reduce((I, z) => I + z.offsetHeight, 0) : 0,
                {
                    scrollTop: g
                } = d,
                f = d.clientHeight,
                _ = a.getBoundingClientRect(),
                T = d.getBoundingClientRect(),
                L = _.top - T.top + g,
                V = L + a.offsetHeight,
                te = g + p,
                S = g + f,
                $ = 2;
            if (L < te - $) {
                const I = Math.max(L - p, 0);
                d.scrollTop !== I && (d.scrollTop = I)
            } else if (V > S + $) {
                const I = d.scrollHeight - f,
                    z = Math.min(V - f, I);
                d.scrollTop !== z && (d.scrollTop = z)
            }
        }
        setActiveListItem(d) {
            if (this.listBoxElement) {
                const a = this.listBoxElement.querySelectorAll('[role="option"]'),
                    o = `${this.name}-result-item-`;
                for (let g = 0; g < a.length; g += 1) {
                    const f = a[g],
                        _ = o + g;
                    f.setAttribute("id", _), !d && g === this.activeIndex ? (f.setAttribute("aria-selected", "true"), f.classList.add("listitem-focused"), this.element.setAttribute("aria-activedescendant", _)) : (f.removeAttribute("aria-selected"), f.classList.remove("listitem-focused"))
                }
                if (this.activeIndex === -1 && this.element.setAttribute("aria-activedescendant", ""), document == null ? void 0 : document.querySelector(".phw-s-language-selector-modal-popup")) this.scrollControlInDialog();
                else {
                    const g = this.listBoxElement;
                    if (g) {
                        const f = g.querySelector(`#${this.name}-result-item-${this.activeIndex}`);
                        f && f.scrollIntoView({
                            block: "nearest"
                        })
                    }
                }
                this.validationInfo.input.ariaAutocomplete === "both" && this.widgetViewModel && this.widgetViewModel.setFieldValue && this.widgetViewModel.setFieldValue(this.name, this.activeIndex, this.validationInfo.input.ariaAutocomplete)
            }
        }
        clearActiveListItem() {
            this.setActiveListItem(!0)
        }
        updateResults() {
            const d = this.widgetViewModel;
            return new Promise(a => {
                if (d && d.getFieldOptions) {
                    const o = d.getFieldOptions(this.name);
                    !o && !o.then ? (console.warn("getFieldOptions(fieldName) is neither returning anything nor defined as a promise"), a([])) : o.then ? o.then(p => {
                        a(p), this.results = p, this.activeIndex = this.widgetViewModel.getActiveIndex(this.name), this.isShowResultsOnFocus === "false" && this.element.value.length === 0 ? this.hideListbox() : document.activeElement === this.element && this.showListbox(), this.isShowNoResults === "false" && !this.results.length && this.hideListbox()
                    }) : (a(o || []), this.results = o, this.activeIndex = this.widgetViewModel.getActiveIndex(this.name), this.isShowResultsOnFocus === "false" && this.element.value.length === 0 ? this.hideListbox() : document.activeElement === this.element && this.showListbox(), this.isShowNoResults === "false" && !this.results.length && this.hideListbox())
                } else a([])
            })
        }
        keyupHandler(d) {
            const a = d.which || d.keyCode;
            switch (a) {
                case ee.UP:
                case ee.DOWN:
                case ee.ESC:
                case ee.RETURN:
                    d.preventDefault();
                    return
            }
            let o = -1;
            if (o = Object.keys(ee).findIndex(p => a === ee[p]), (this.isShowResultsOnFocus === "true" || this.element.value && this.element.value.length && o === -1) && this.updateResults(), this.validationInfo.input.ariaAutocomplete === "both") switch (a) {
                case ee.BACKSPACE:
                    return;
                default:
                    this.widgetViewModel && this.widgetViewModel.setFieldValue && this.widgetViewModel.setFieldValue(this.name, this.activeIndex)
            } else ee.BACKSPACE === a && this.updateResults()
        }
        findWidget() {
            return this.element.__vueParentComponent && this.element.__vueParentComponent.vnode.el
        }
        keydownHandler(d) {
            if (d.target) switch (d.which || d.keyCode) {
                case ee.DOWN:
                    this.isListboxHidden() ? this.updateResults().then(() => {
                        this.moveDown()
                    }) : this.moveDown();
                    break;
                case ee.UP:
                    this.isListboxHidden() ? this.updateResults().then(() => {
                        this.moveUp()
                    }) : this.moveUp();
                    break;
                case ee.ESC:
                    this.clearFieldAndCloseListbox();
                    break;
                case ee.RETURN:
                    this.activeIndex !== -1 && d.preventDefault(), this.onEnter();
                    return;
                case ee.TAB:
                case (d.shiftKey && d.key === ee.TAB):
                    this.blurHandler(d);
                    return
            }
            return !0
        }
        focusHandler() {
            this.isShowResultsOnFocus === "true" && this.updateResults().then(() => {
                if (this.listBoxElement) {
                    const d = this.listBoxElement.querySelectorAll('[role="option"]'),
                        a = `${this.name}-result-item-`;
                    for (let o = 0; o < d.length; o += 1) {
                        const p = d[o],
                            g = a + o;
                        p.setAttribute("id", g)
                    }
                }
            })
        }
        listBoxClickHandler(d) {
            if (d.target) {
                const a = this.getLIElement(d.target);
                let o = -1;
                a && a.id && (o = parseInt(a.id.split(`${this.element.name}-result-item-`)[1]), this.activeIndex = o, this.onEnter(), this.hideListbox())
            }
        }
        getLIElement(d) {
            let a = d,
                o = a ? a.nodeName === "LI" : void 0;
            for (; a && !o;) a = a.parentElement, o = a ? a.nodeName === "LI" : void 0;
            return o ? a : void 0
        }
        blurHandler(d, a) {
            a ? d.target && d.target.nodeName !== "LI" && (clearTimeout(this.clearTimer), this.showListbox()) : this.clearTimer = setTimeout(() => {
                this.widgetViewModel && this.widgetViewModel.getActiveIndexOnBlur && this.widgetViewModel.getActiveIndexOnBlur(this.activeIndex, this.name, d), this.widgetViewModel && this.widgetViewModel.getFocusedField && this.widgetViewModel.getFocusedField() === this.name ? (this.widgetViewModel.setFocusedField && this.widgetViewModel.setFocusedField(), this.activeIndex = -1) : this.hideListbox()
            }, 300)
        }
        moveDown() {
            this.activeIndex += 1, this.activeIndex > this.results.length - 1 && (this.activeIndex = 0), this.setActiveListItem()
        }
        moveUp() {
            this.activeIndex -= 1, this.activeIndex < 0 && (this.activeIndex = this.results.length - 1), this.setActiveListItem()
        }
        onEnter() {
            return this.widgetViewModel && this.widgetViewModel.setFieldValue && this.widgetViewModel.setFieldValue(this.name, this.activeIndex), this.widgetViewModel.onEnterCallBack && this.widgetViewModel.onEnterCallBack(this.name, this.activeIndex), this.hideListbox(), !1
        }
        clearFieldAndCloseListbox() {
            this.widgetViewModel && this.widgetViewModel.clearFieldValue && this.widgetViewModel.clearFieldValue(this.name), this.hideListbox()
        }
        setupEventListeners() {
            const d = this.element;
            this.keyupDebounceHandler = this.debounce(this.keyupHandler, this.debounceTimer), this.keydownDebounceHandler = this.debounce(this.keydownHandler, this.debounceTimer), document.addEventListener("mouseup", this.hideDropdown.bind(this)), d.addEventListener("keyup", this.keyupDebounceHandler.bind(this)), d.addEventListener("keydown", this.keydownDebounceHandler.bind(this)), d.addEventListener("focus", this.focusHandler.bind(this)), this.listBoxElement && (this.ignoreListBoxClickHandler || this.listBoxElement.addEventListener("click", this.listBoxClickHandler.bind(this)), this.listBoxElement.addEventListener("focus", a => {
                this.blurHandler(a, !0)
            }), this.listBoxElement.addEventListener("blur", this.blurHandler.bind(this)))
        }
        hideDropdown(d) {
            !this.element.contains(d.target) && this.element !== d.target && !this.listBoxElement.contains(d.target) && this.listBoxElement !== d.target && this.blurHandler(d, !1)
        }
        destroyed() {
            const d = this.element;
            d.removeEventListener("keyup", this.keyupHandler), d.removeEventListener("keydown", this.keydownHandler), d.removeEventListener("keyup", this.keyupDebounceHandler), d.removeEventListener("keydown", this.keydownDebounceHandler), d.removeEventListener("focus", this.focusHandler), d.removeEventListener("blur", this.blurHandler), document.removeEventListener("mouseup", this.hideDropdown.bind(this)), this.listBoxElement && !this.ignoreListBoxClickHandler && this.listBoxElement.removeEventListener("click", this.listBoxClickHandler)
        }
    }
    const le = {
            ddoKey: "globalSearchV3",
            ddoKeyEvent: "globalSearchEventV3",
            landingpageddoKey: "getBusinessRules",
            ddoKeyMOSSEARCH: "globalSearchMOSTitles",
            ddoKeyGlobalSearchConfig: "globalSearchConfig",
            ddoKeyAgp: "getAgpMetaData",
            ddoKeyEagerLoad: "eagerLoadRefineSearch",
            ddoLocations: "locations",
            ddoPlaceAutoComplete: "placeAutoComplete"
        },
        xt = "ddoKey",
        Tt = "ddoKeyEvent",
        Nt = "ddoKeyMOSSEARCH",
        Lt = "ddoKeyGlobalSearchConfig",
        Ge = "globalSearch_keywords",
        Oe = "keywords",
        It = "ddoKeyAgp",
        Vt = "ddoLocations",
        Ct = "ddoPlaceAutoComplete",
        Mt = "ddoKeyEagerLoad",
        At = "landingpageddoKey",
        Ft = "phw-click-ctx",
        rt = "phw-tref",
        Rt = "phw-tk",
        Gt = "phw-tag",
        He = ".phw-s-header-search-icon",
        J = ".phw-s-a11y-search-box",
        Ot = "isCmsEnv",
        ot = ["allCategories", "suggestedJobs", "suggestedLocations", "suggestedCategories", "suggestedRecentSearches", "suggestedKeywords"],
        $e = "loc-less",
        Te = "loc-cat",
        Ht = "GeoLocation",
        zt = {
            cityCountry: "qkcityCountry",
            cityState: "qkcityState",
            location: "location",
            city: "qcity"
        },
        Ut = "inline_global_search_click";

    function Kt(i, d, a) {
        const o = e.ref([]),
            p = e.ref(!1),
            g = e.ref({}),
            f = e.ref(!1),
            _ = e.ref(!1),
            T = e.ref(!1),
            L = e.ref(!1),
            V = e.ref(!0),
            te = e.ref(!0),
            S = e.ref(!0),
            $ = e.ref(!1),
            I = e.ref(!1),
            z = e.ref(!1),
            U = e.ref([]),
            u = e.ref([]),
            K = e.ref([]),
            q = e.ref([]),
            he = e.ref([]),
            ne = e.ref([]),
            Ne = e.ref([]),
            j = e.ref([]),
            E = e.ref(""),
            N = e.ref(""),
            pe = e.ref(!1),
            O = e.ref(!1),
            X = e.ref(!1),
            me = e.ref(!1),
            R = e.ref(!0),
            ae = e.ref(!1);
        let ie = !0,
            re = !0;
        const m = {};
        let ge = !1,
            Le = !1,
            C = "",
            Q = [],
            v = [],
            Y = !1,
            oe = !1,
            W = "",
            Be, Z = [],
            se = !1,
            Ie = "",
            G, ye = !1;

        function Ke() {
            return {
                show: null,
                jobs: null,
                locations: null,
                categories: null,
                keywords: null,
                searched: null,
                boundaries: null
            }
        }
        const de = e.ref(Ke());

        function Ve(n) {
            const s = document.querySelectorAll(".phw-s-search-enabled");
            for (let c = 0; c < s.length; c++) {
                const r = s[c];
                n ? r.classList.add("phw-d-none") : r.classList.remove("phw-d-none")
            }
        }

        function qe(n) {
            var r, y;
            const s = document.querySelector(".phw-s-addition-widgets-block");
            n ? (r = s == null ? void 0 : s.parentElement) == null || r.classList.add("phw-width-4") : (y = s == null ? void 0 : s.parentElement) == null || y.classList.remove("phw-width-4");
            const c = s == null ? void 0 : s.children;
            Array.from(c || []).forEach(w => {
                w.getAttribute("data-component") !== "global-search" ? n ? w.classList.add("phw-d-none") : w.classList.remove("phw-d-none") : n ? w.classList.add("phw-width-4") : w.classList.remove("phw-width-4")
            })
        }

        function Ce() {
            ae.value = !1, Ve(!1), qe(!1), setTimeout(() => {
                const n = d.value.querySelector(".phw-s-global-search-icon");
                n && n.focus()
            }, 100)
        }

        function fe() {
            t.trackWidgetClick(d.value, Ut, {}), ae.value = !0, Ve(!0), qe(!0);
            const n = d.value.querySelector("input.phw-s-input-search");
            n && setTimeout(() => {
                n.focus()
            }, 100)
        }

        function at(n) {
            const s = d.value.querySelector(".phw-s-global-search");
            s && !s.contains(n.target.parentNode) && ae.value && Ce()
        }

        function Ee(n) {
            var c, r;
            const s = d.value.querySelector(".phw-s-mobile-search-backdrop");
            if (s) {
                const y = d.value.querySelector(".form-group");
                if (y && y.classList.contains("phw-s-mobile-search")) {
                    ce(n);
                    return
                }
                s.classList.add("phw-s-mobile-search-enabled");
                const w = n && n.target && n.target.closest(".phw-s-search-group"),
                    b = d.value.querySelector(".phw-s-header-global-search"),
                    D = document.body.children,
                    x = d.value.querySelector(He),
                    B = (c = d.value) == null ? void 0 : c.getAttribute("instanceid"),
                    P = (r = d.value) == null ? void 0 : r.getAttribute("funcwidgetid");
                if (b.setAttribute("instance-id", B), b.setAttribute("data-func-widget-id", P), w && y && Y && (!y.classList.contains("phw-s-mobile-search") && y.classList.add("phw-s-mobile-search"), !w.classList.contains("phw-s-mobile-search") && w.classList.add("phw-s-mobile-search"), setTimeout(() => {
                        !w.hasAttribute("aria-modal") && w.setAttribute("aria-modal", !0), !w.hasAttribute("role") && w.setAttribute("role", "dialog")
                    }, 150)), document.body.scrollTop = 0, document.body.style.overflow = "hidden", d.value.querySelector(He)) {
                    z.value = !0;
                    const M = d.value.querySelector("input.phw-s-input-search");
                    M && setTimeout(() => {
                        M.focus()
                    }, 100)
                }
                if (b && x && i.mobileSearchWithHeaderIcon && !(a != null && a.value)) {
                    b.remove();
                    for (let st = 0; st < D.length; st++) D[st].setAttribute("aria-hidden", "true");
                    const M = document.createElement("div"),
                        xe = document.createElement("div");
                    M.setAttribute("aria-modal", "true"), M.setAttribute("role", "dialog"), M.className = y.className, xe.className = w.className, xe.append(b), M.append(xe), document.body.append(M)
                }
                t.handleStyleInMobile('.phw-s-mobile-search [data-selector-id="global-search-mobile"]')
            }
        }

        function ce(n, s) {
            var D, x;
            const c = d.value.querySelectorAll(".phw-s-search-group"),
                r = d.value.querySelector(".form-group"),
                y = d.value.querySelector(".phw-s-mobile-search-enabled"),
                w = d.value.querySelector(He),
                b = document.querySelector('[role="dialog"] .phw-s-header-global-search');
            if (w && i.mobileSearchWithHeaderIcon && y && !(a != null && a.value)) {
                (x = (D = b == null ? void 0 : b.parentElement) == null ? void 0 : D.parentElement) == null || x.remove(), c[0].append(b);
                const B = document.body.children;
                for (let P = 0; P < B.length; P++) B[P].removeAttribute("aria-hidden")
            }
            if (c && r && y) {
                if (n && n.target || s) {
                    let B = d.value.querySelector(".phw-s-search-submit");
                    w && i.mobileSearchWithHeaderIcon ? B = w : document.body.style.overflow = "initial", B && setTimeout(() => {
                        B.focus()
                    }, 335)
                }
                y.classList.remove("phw-s-mobile-search-enabled"), r.classList.contains("phw-s-mobile-search") && r.classList.remove("phw-s-mobile-search");
                for (let B = 0; B < c.length; B++) c[B].classList.contains("phw-s-mobile-search") && c[B].classList.remove("phw-s-mobile-search"), c[B].hasAttribute("aria-modal") && c[B].removeAttribute("aria-modal"), c[B].hasAttribute("role") && c[B].removeAttribute("role");
                ye = !1, f.value = !1, T.value = !1, document.body.style.overflow = ""
            }
        }

        function je() {
            if (d.value) {
                const n = d.value.querySelector(He),
                    s = window.innerWidth;
                if (n && i.mobileSearchWithHeaderIcon) Y = !0, s <= 1024 ? n.addEventListener("click", Ee) : (Y = !1, n.removeEventListener("click", Ee), ce());
                else if (s <= 767) {
                    Y = !0;
                    const c = d.value.querySelectorAll("input.phw-s-input-search") || [];
                    for (let r = 0; r < c.length; r++) c[r].addEventListener("focusin", Ee)
                } else {
                    Y = !1;
                    const c = d.value.querySelectorAll("input.phw-s-input-search") || [];
                    for (let r = 0; r < c.length; r++) c[r].removeEventListener("focusin", Ee);
                    ce()
                }
            }
        }

        function be() {
            const n = t.getCachedDDO(le[It]),
                s = t.getCachedDDO(le[Mt]);
            if (n && n.data && n.data.lpKeyData && s) {
                g.value = {
                    totalHits: s.totalHits,
                    bannerText: n.data.lpKeyData.bannerText
                };
                const c = window.location.pathname;
                c && (i.searchUrl = c.replace("/", ""))
            }
        }

        function it() {
            let n = location.search;
            n = n.substr(1);
            const s = n.split("&");
            for (let c = 0; c < s.length; c++) {
                let r = s[c];
                if (r = r.split("="), r.length > 1 && ["keywords", "q"].indexOf(r[0]) !== -1) return decodeURIComponent(r[1])
            }
            return ""
        }

        function h() {
            i.militarySearch && i.isMOSCodeMandatory && !W.length && (R.value = !0)
        }

        function A() {
            if (p.value = i.isOnlyMilitarySearch, i.militarySearch && (oe = p.value || i.militarySearch), i.preFillSearchedKey && (E.value = it() || ""), (i.militarySearch && !i.isMOSCodeMandatory || !i.militarySearch) && (R.value = !1), i.isLandingPage && (i.rk = i.rk ? i.rk : t.getSessionParam("rk"), i.rk && i.rk.length > 0)) {
                const n = {},
                    s = {};
                s.landingPageKeys = [i.rk], n.pageIdentifier = s, t.getDDO(le[At], n).then(c => {
                    c && c.data && c.data[i.rk] && (C = c.data[i.rk].condition)
                })
            }
            i.mobileSearch && i.mobileSearchWithHeaderIcon && e.nextTick(() => {
                window.addEventListener("resize", () => {
                    je()
                }), je()
            }), setTimeout(() => {
                if (d.value) {
                    const n = d.value.querySelector(J) || document.querySelector(`[role="dialog"] ${J}`) || document.querySelector(J);
                    n && n.addEventListener("focus", () => {
                        pe.value = !0
                    })
                }
            }, 100), be(), t.subscribeEvent(Ht, n => {
                G = n
            }), G = ue().askForLocation()
        }

        function We() {
            t.getDDO(le[Lt], {}).then(n => {
                n && n.data && n.data.configured ? o.value = n.data.data || [] : o.value = ot
            }, n => {
                o.value = ot
            })
        }

        function Je() {
            f.value = !1, setTimeout(() => {
                $.value = !0
            }, 2e3), setTimeout(() => {
                $.value = !1
            }, 4e3), E.value = "", W = "", h(), p.value && (_.value = !1);
            const n = d.value.querySelector(J) || document.querySelector(`[role="dialog"] ${J}`) || document.querySelector(J);
            setTimeout(() => {
                n && n.focus()
            }, 100), pe.value = !0
        }

        function Ze() {
            me.value = !1, N.value = "", T.value = !1, setTimeout(() => {
                I.value = !0
            }, 2e3), setTimeout(() => {
                I.value = !1
            }, 4e3);
            const n = d.value.querySelector("#gllocationInput") || document.querySelector("#gllocationInput");
            setTimeout(() => {
                n && n.focus()
            }, 100), !i.usePhenomStorage && i.dataMode === $e && (L.value = !1)
        }

        function Me() {
            if (!oe) return new Promise(s => {
                s([])
            });
            const n = {};
            return n.size = 3, n.keywords = E.value, p.value && (n.size = 5), C && C.length > 0 && (n.condition = C), t.getDDO(le[Nt], n).then(s => (s = s && s.data || {}, s && s.results && s.results.length ? u.value = s.results : s.searchConfig && (u.value = [], oe = s.searchConfig.isMOSSearchEnabled), d.value && document.activeElement === (d.value.querySelector(J) || document.querySelector(`[role="dialog"] ${J}`) || document.querySelector(J)) && (f.value = !0, p.value && (R.value = !u.value.length, O.value = !0, setTimeout(() => {
                O.value = !1
            }, 1e3))), u.value))
        }

        function _e(n, s) {
            return s && s.searchValue && (delete m.field, delete m.sub_field, m.keywords = s.searchValue, m.category = "category", m.location = "location"), s && s.tabCondition && s.activeTab !== s.defaultTab ? m.condition = s.tabCondition : delete m.condition, s && s.condition && s.condition.length && (m.condition = s.condition), n === "globalSearchV3" ? (m.field = "category", m.sub_field = "internalCategoryId", m.location_size = i.locationSize || 2, m.category_size = i.categorySize || 2, m.job_size = i.jobSize || 3) : (n === "globalSearchLocations" || n === "locations") && (m.field = s.locationType || "location"), t.getDDO(n, m).then(c => {
                if (c.jobLocations && c.jobLocations.locations) {
                    const r = c.jobLocations.locations,
                        y = {};
                    Object.keys(r).forEach(w => {
                        const b = [];
                        if (Object.prototype.hasOwnProperty.call(r, w)) {
                            const D = r[w];
                            Object.keys(D).forEach(x => {
                                const B = D[x];
                                B.location = B.name, B.field = w, b.push(B)
                            })
                        }
                        y[w] = b
                    }), c[n] = {
                        locations: y
                    }
                }
                return c
            })
        }

        function Ae() {
            if (t.getSpecificTrackCtx(Ge) !== null) {
                const n = t.getSpecificTrackCtx(Oe) || [];
                de.value.searched = n.map(s => s.keyword), S.value = !0
            } else S.value = !1
        }

        function Ye() {
            const n = {};
            n.searchValue = E.value, C && C.length > 0 && (n.condition = C);
            const s = Me(),
                c = _e(le[Tt], n).then(r => {
                    var y, w, b, D, x, B;
                    if (K.value = ((w = (y = r == null ? void 0 : r.jobTitles) == null ? void 0 : y.data) == null ? void 0 : w.titles) || [], Ne.value = ((D = (b = r.jobTitles) == null ? void 0 : b.data) == null ? void 0 : D.suggestions) || [], K.value)
                        for (let P = 0; P < K.value.length; P++) {
                            let M = K.value[P].title.replace(/<em>/g, "");
                            M = M.replace(/<\/em>/g, "")
                        }
                    if (r.jobLocations && r.jobLocations.locations && !i.locationSearch) {
                        if (he.value = [], r.jobLocations.locations.city)
                            for (let P = 0; P < r.jobLocations.locations.city.length; P++) he.value.push(r.jobLocations.locations.city[P]);
                        if (r.jobLocations.locations.country)
                            for (let P = 0; P < r.jobLocations.locations.country.length; P++) he.value.push(r.jobLocations.locations.country[P]);
                        if (r.jobLocations.locations.state)
                            for (let P = 0; P < r.jobLocations.locations.state.length; P++) he.value.push(r.jobLocations.locations.state[P])
                    }
                    if (ne.value = (B = (x = r == null ? void 0 : r.jobCategories) == null ? void 0 : x.data) == null ? void 0 : B.agg, ne.value)
                        for (let P = 0; P < ne.value.length; P++) ne.value[P].key = ne.value[P].category;
                    return Ae(), document.activeElement === (d.value.querySelector(J) || document.querySelector(`[role="dialog"] ${J}`) || document.querySelector(J)) && (f.value = !0), V.value = !1, te.value = !0, q.value = [], v.length && v.forEach(P => {
                        if (P === "keywordsSearched") q.value = q.value.concat(Q.slice(0, 3));
                        else {
                            let M = "";
                            P === "suggestedJobs" ? M = K.value : P === "suggestedLocations" ? M = he.value : P === "suggestedCategories" ? M = ne.value : P === "suggestedKeywords" && (M = Ne.value), q.value = q.value.concat(M)
                        }
                    }), de.value.searched && (q.value = q.value.concat(de.value.searched.slice(0, 3))), q.value
                }, r => {});
            return Promise.all([c, s]).then(r => (O.value = !0, setTimeout(() => {
                O.value = !1
            }, 1e3), r[0].concat(r[1])))
        }

        function Xe(n) {
            if (n) {
                let s = "";
                n.title && (s = n.title), E.value = s.replace(/<(?:.|\n)*?>/gm, ""), W = n.mos_code, R.value = !1, f.value = !1
            } else h()
        }

        function Fe(n, s) {
            if (s === !0) {
                n && (E.value = n);
                let r = [];
                t.getSpecificTrackCtx(Ge) && (r = t.getSpecificTrackCtx(Ge)), E.value && E.value.length && (r.indexOf(E.value) === -1 || r.splice(Q.indexOf(E.value), 1), r.unshift(E.value), t.setSpecificTrackCtx(Ge, r))
            }
            return !0
        }

        function Qe() {
            let n = [];
            if (t.getSpecificTrackCtx(Oe) && (n = t.getSpecificTrackCtx(Oe)), E.value && E.value.length) {
                if (n !== null) {
                    for (let s = 0; s < n.length; s++)
                        if (n[s].keyword === E.value) {
                            n.splice(s, 1);
                            break
                        }
                } else n = [];
                n.unshift({
                    keyword: E.value,
                    timeStamp: new Date().toUTCString()
                }), t.setSpecificTrackCtx(Oe, n)
            }
        }

        function ve(n, s, c) {
            const r = n;
            r && r.setAttribute && r.setAttribute(Ft, s), r && r.getAttribute && r.getAttribute(Rt) && (r.setAttribute(rt, new Date().getTime() + ((1 + Math.random()) * 65536 | 0).toString(16).substring(0)), r.setAttribute(Gt, "global-search"), t.storePageTrackEventData(r.getAttribute(rt), c))
        }

        function Pe(n, s, c, r) {
            let y = "";
            if (r) try {
                let w = "";
                const b = "&";
                r = r.trim();
                const D = b + r,
                    x = /&[a-zA-Z0-9\s]+\=/g,
                    B = D.match(x);
                if (B) {
                    const P = D.split(x);
                    for (let M = 0; M < B.length; M++) {
                        const xe = B[M];
                        xe && P[M + 1] && (w += xe + encodeURIComponent(P[M + 1]))
                    }
                    w = w.replace("&", "")
                }
                y = w
            } catch {}
            return y
        }

        function l(n, s, c, r, y) {
            const w = Pe(n, s, c, r);
            return y = y || t.getUrl(s, c, w), y || ""
        }

        function k(n) {
            R.value = !1, T.value = !1, ye && ce(null, !0), N.value = n.description || n.key, Ie = n.place_id, h()
        }

        function F() {
            let n, s = "key";
            if (i.dataMode === $e && (s = "description"), n = tt(j.value, N.value, s), !(n && n.length) && j.value && j.value.length && j.value.length === 1 ? n = j.value : !(n && n.length) && j.value.length && (n = [j.value[0]]), n && n.length) {
                let c = 0;
                if (n.forEach((y, w) => {
                        const b = y.description || y.key;
                        N.value === b && (c = w)
                    }), i.dataMode === Te && N.value.length || i.dataMode !== Te) {
                    const y = n[c];
                    y && k(y)
                }
            }
        }

        function De(n) {
            ie = !0, n ? N.value = n : N.value = ""
        }

        function mt(n, s) {
            window.innerWidth <= 767 && (s = 1);
            let r = [];
            const y = [],
                w = Math.floor(n.length / s);
            let b = n.length % s,
                D = !1;
            for (let x = 0; x < s; x++) {
                const B = [];
                for (let P = 0; P < w; P++) {
                    let M = P + x * w;
                    D && (M += x), B.push(n[M])
                }
                b >= 1 ? (B.push(n[w * (x + 1) + x]), b -= 1, D = !0) : D = !1, r.push(B)
            }
            if (r.length) {
                for (let x = 0; x < r[0].length; x++)
                    for (let B = 0; B < r.length; B++) r[B][x] && y.push(r[B][x]);
                r = y
            }
            return r
        }

        function Jn() {
            const n = {};
            return n.searchValue = E.value, C && C.length > 0 && (n.condition = C), _e(le[xt], n).then(s => (s.data.category && s.data.category.forEach(c => {
                c.key || (c.key = c.category)
            }), d.value && document.activeElement === (d.value.querySelector(J) || document.querySelector(`[role="dialog"] ${J}`) || document.querySelector(J)) && (f.value = !0), Ae(), U.value = mt(s.data.category || [], i.categoryColumnCount), V.value = !0, te.value = !1, q.value = [], Q && (Q = Q.slice(0, 3)), q.value = q.value.concat(s.data.category), O.value = !0, setTimeout(() => {
                O.value = !1
            }, 1e3), U.value), s => {})
        }

        function nt(n, s, c) {
            Be = n;
            const r = {},
                y = {};
            if (re) switch (n) {
                case "typehead":
                    return T.value = !1, E.value.length > 0 ? (R.value = !1, h(), _.value = !0, p.value ? Me() : Ye()) : (p.value && !E.value.length && (_.value = !1), setTimeout(() => {
                        X.value = !0
                    }, 100), p.value ? (O.value = !0, setTimeout(() => {
                        O.value = !1
                    }, 1e3), []) : (_.value = !0, Jn()));
                case "location":
                    return s && (re = !1), i.dataMode === $e && (N.value.length ? L.value = !0 : L.value = !1), N.value && (R.value = !1), h(), f.value = !1, r.locationValue = N.value, C && C.length > 0 && (r.condition = C), j.value = j.value || [], se ? (se = !1, O.value = !0, setTimeout(() => {
                        O.value = !1
                    }, 1e3), []) : i.usePhenomStorage || i.dataMode === Te ? (L.value = !0, Z.length ? new Promise(w => {
                        T.value = !0, j.value = tt(Z, N.value || "", "key") || [], setTimeout(() => {
                            O.value = !0
                        }, 1e3), setTimeout(() => {
                            O.value = !1
                        }, 3e3), w(j.value)
                    }) : (r.locationType = i.locationType, ge = !0, _e(le[Vt], r).then(w => {
                        ie = !1;
                        const b = i.locationType || "location";
                        return Z = w.data[b] ? w.data[b] : [], j.value = tt(Z, N.value || "", "key"), c || (T.value = !0), O.value = !0, setTimeout(() => {
                            O.value = !1
                        }, 1e3), ge = !1, Le && setTimeout(() => {
                            we()
                        }, 10), j.value
                    }).catch(w => new Error(w)))) : (y.keywords = r.locationValue, r.condition && (y.condition = r.condition), ge = !0, t.getDDO(le[Ct], y).then(w => {
                        ie = !1, j.value = w.predictions || [];
                        const b = d.value.querySelector("#gllocationInput");
                        return N.value && b === document.activeElement ? (T.value = !0, O.value = !0, setTimeout(() => {
                            O.value = !1
                        }, 1e3)) : T.value = !1, ge = !1, Le && setTimeout(() => {
                            we()
                        }, 10), j.value
                    }).catch(w => {
                        throw new Error(w)
                    }));
                default:
                    return []
            }
            return null
        }

        function we() {
            if (t.queryParams.getQueryParam(Ot) === "true") return;
            if (ye) {
                ce();
                return
            }
            if (ie && nt("location", !0, !0), ge) {
                Le = !0;
                return
            }
            if (p.value && u.value.length) {
                let b = !1;
                u.value.forEach(D => {
                    D.title === E.value && (!W && D.mos_code && (W = D.mos_code), b = !0)
                }), b || (E.value = u.value[0].title, W = u.value[0].mos_code)
            }
            W || (Fe(E.value, !0), Qe()), me.value || F(), me.value = !1;
            const n = {};
            n.trait6 = E.value, t.trackWidgetClick(d.value, "page_search", n);
            let s, c = "";
            if (W && (c = `&ms=true&moscode=${W}`), i.searchUrl === "search-results") s = l(null, i.searchUrl, {}, `keywords=${E.value}${c}`);
            else {
                const b = i.searchUrl.indexOf("?") === -1 ? "?keywords=" : "&keywords=";
                s = t.getBaseUrl() + i.searchUrl + b + E.value + c
            }
            const r = t.queryParams.getQueryParam("moscode"),
                y = i.locationType || "location",
                w = `&${zt[y]||y}=`;
            if (i.dataMode === $e && Ie && N.value) {
                let b = E.value;
                i.searchUrl !== "search-results" && (b = encodeURIComponent(E.value));
                let D = `keywords=${b}&p=${Ie}${w}${N.value}`;
                if (G && G.coords && (D += `&latitude=${G.coords.latitude}&longitude=${G.coords.longitude}`), r && (D += `&ms=true&moscode=${r}`), C) s = `${window.location.origin+window.location.pathname}?${D}`;
                else if (i.searchUrl === "search-results") s = l(null, i.searchUrl, {}, D);
                else {
                    const x = i.searchUrl.indexOf("?") === -1 ? "?" : "&";
                    s = t.getBaseUrl() + i.searchUrl + x + D
                }
            } else if (i.dataMode === Te) {
                let b;
                b = "m=3";
                let D = E.value;
                if (i.searchUrl !== "search-results" && (D = encodeURIComponent(E.value)), E.value && (b += `&keywords=${D}`), N.value && (b += w + (i.searchUrl !== "search-results" ? encodeURIComponent(N.value) : N.value)), n.trait144 = N.value, i.searchUrl === "search-results") s = l(null, i.searchUrl, {}, b);
                else {
                    const x = i.searchUrl.indexOf("?") === -1 ? "?" : "&";
                    s = t.getBaseUrl() + i.searchUrl + x + b
                }
            } else if (i.dataMode === $e && N.value) {
                let b = "m=3",
                    D = E.value;
                if (i.searchUrl !== "search-results" && (D = encodeURIComponent(E.value)), E.value && (b += `&keywords=${D}`), N.value && (n.trait144 = N.value, i.isLocationValue ? b += `&lk=${i.searchUrl!=="search-results"?encodeURIComponent(N.value):N.value}` : b += w + (i.searchUrl !== "search-results" ? encodeURIComponent(N.value) : N.value)), C) s = `${window.location.origin+window.location.pathname}?${b}`;
                else if (i.searchUrl === "search-results") s = l(null, i.searchUrl, {}, b);
                else {
                    const x = i.searchUrl.indexOf("?") === -1 ? "?" : "&";
                    s = t.getBaseUrl() + i.searchUrl + x + b
                }
            }
            i.dataMode === $e && (n.trait144 = N.value), window.location.assign(s)
        }

        function et(n, s, c) {
            c && t.trackWidgetClick(d, c, {}), Xe(n), s && s.type === "click" && we()
        }

        function Zn(n) {
            v = n
        }

        function Yn(n) {
            return o.value.indexOf(n) === -1
        }

        function Xn(n, s, c, r, y, w) {
            if (t.trackWidgetClick(d, n, {}), i.partnerUrl) {
                const x = t.phAppStore.getParam("partnersUrl") || "";
                let B = l(s, c, r, y, w);
                B = B.replace(t.getBaseUrl(), x), window.location.assign(B);
                return
            }
            if (c === "job" || i.searchUrl === "search-results" || c === "category") {
                if (i.rk && i.rk.length && c !== "job" && (y = `&rk=${i.rk}`), c === "category" && i.searchUrl !== "search-results") {
                    y = `${y}&category=${encodeURIComponent(r.key||r.name||"")}`;
                    const x = Pe(s, i.searchUrl, r, y),
                        B = i.searchUrl.indexOf("?") === -1 ? "?" : "&";
                    window.location.assign(t.getBaseUrl() + i.searchUrl + B + x);
                    return
                }
                window.location.assign(l(s, c, r, y, w));
                return
            }
            const b = Pe(s, i.searchUrl, r, y),
                D = i.searchUrl.indexOf("?") === -1 ? "?" : "&";
            window.location.assign(t.getBaseUrl() + i.searchUrl + D + b)
        }

        function Re(n) {
            if (n)
                if (document.createEvent) {
                    const s = document.createEvent("MouseEvents");
                    s.initEvent("click", !0, !1), n.dispatchEvent(s)
                } else document.createEventObject ? n.fireEvent("onclick") : typeof n.onclick == "function" && n.onclick()
        }

        function Bt(n, s) {
            s && t.trackWidgetClick(d, s, {});
            const c = d.value.querySelector("#gllocationInput");
            c && c === document.activeElement || !Y && setTimeout(() => {
                !i.usePhenomStorage && i.dataMode === $e && (se = !0), c && c.focus(), T.value = !1
            }, 350), n && k(n), me.value = !0, i.locationClickRedirect && we()
        }

        function Et(n, s) {
            switch (n) {
                case "typehead":
                    if (E.value.length)
                        if (p.value) {
                            if (u.value.length && u.value[s]) {
                                et(u.value[s]), W = u.value[s].mos_code;
                                const c = d.value.querySelector("li.listitem-focused");
                                Re(c)
                            } else if (u.value.length && s === -1) {
                                et(u.value[0]), W = u.value[0].mos_code;
                                const c = d.value.querySelectorAll(".phw-s-suggested-mos-keywords-list li");
                                Re(c[0])
                            }
                            R.value = !1, h()
                        } else if (q.value.length && q.value[s]) {
                        const c = d.value.querySelector("li.listitem-focused");
                        !c && we(), Re(c)
                    } else we();
                    else if (p.value) {
                        if (de.value && de.value.searched && de.value.searched.length && de.value.searched[s]) {
                            et(de.value.searched[s]), W = u.value[s].mos_code;
                            const c = d.value.querySelector("li.listitem-focused");
                            Re(c)
                        }
                    } else if (U.value.length && U.value[s]) {
                        const c = d.value.querySelector("li.listitem-focused");
                        Re(c)
                    }
                    break;
                case "location":
                    (i.dataMode === $e && N.value || i.usePhenomStorage || i.dataMode === Te) && (s !== -1 ? Bt(j.value[s]) : (ye && ce(null, !0), we()));
                    break
            }
        }

        function _t(n) {
            let s = -1;
            switch (n) {
                case "typehead":
                    return E.value.length > 0 ? p.value ? u.value.forEach((c, r) => {
                        c.title === E.value && (s = r)
                    }) : q.value.forEach((c, r) => {
                        const y = c && c.key || c && c.category;
                        y && y === E.value && (s = r)
                    }) : U.value && U.value.length && U.value.forEach((c, r) => {
                        c.key === E.value && (s = r)
                    }), s;
                case "location":
                    N.value && j.value.forEach((c, r) => {
                        (c.key === N.value || c.description === N.value) && (s = r)
                    });
                    break
            }
            return -1
        }

        function Pt(n, s) {
            switch (s) {
                case "typehead":
                    {
                        const c = document.activeElement;X.value = !1,
                        (d.value.querySelector(J) || document.querySelector(`[role="dialog"] ${J}`) || document.querySelector(J)) !== c && (pe.value = !1);
                        const r = document.querySelectorAll(J),
                            y = Array.from(r).findIndex(x => x === c || x.contains(c)) !== -1,
                            w = c !== d.value.querySelector(".phw-s-keysearch-clear"),
                            b = d.value.querySelector(".phw-s-mobile-search-enabled"),
                            D = c === d.value.querySelector(".phw-s-keysearch-clear");
                        (!y && w && !b || D && !b) && (f.value = !1, _.value = !1);
                        break
                    }
                case "location":
                    (document.activeElement !== d.value.querySelector("#gllocationInput") && document.activeElement !== d.value.querySelector(".phw-s-keysearch-clear-location") && !d.value.querySelector(".phw-s-mobile-search-enabled") || document.activeElement === d.value.querySelector(".phw-s-keysearch-clear-location") && !d.value.querySelector(".phw-s-mobile-search-enabled")) && (T.value = !1, L.value = !1, F());
                    break
            }
        }

        function Qn() {
            return Be
        }

        function vn() {
            Be = void 0
        }
        return {
            fetchResultsConfig: We,
            enableSuggestionResults: o,
            isMilitarySearch: p,
            init: A,
            agpData: g,
            showDropDown: f,
            showDropDownExpanded: _,
            showLocationDropdownExpanded: L,
            showAllJobCategories: V,
            showJobSuggestions: te,
            showRecentSearches: S,
            typeheadClrTxt: $,
            locationClrTxt: I,
            isHeadSearchEnabled: z,
            clearBackdrop: ce,
            clearSearch: Je,
            isSuggestionVisible: Yn,
            allJobCategories: U,
            getUrlLocal: Xn,
            suggestedMOSKeywords: u,
            setMOSKeyword: et,
            setKeywordSuggested: Zn,
            suggestedJobs: K,
            suggestedJobResults: q,
            suggestedCategories: ne,
            suggestedLocations: he,
            suggestedKeywords: Ne,
            allSuggestions: de,
            updateLocalStrWithRecentSearchDetails: Fe,
            searchValue: E,
            locationValue: N,
            clearLocationSearch: Ze,
            showLocationDropdown: T,
            allLocations: j,
            setLocation: Bt,
            searchBoxBackdrop: pe,
            handleSubmitClick: we,
            resultsUpdated: O,
            isSearchInFocus: X,
            autoCompleteInitiate: function(n, s) {
                n && new Dt().init(n.value, s, {
                    getFieldOptions: nt,
                    setFieldValue: Et,
                    getActiveIndex: _t,
                    getActiveIndexOnBlur: Pt,
                    getFocusedField: Qn,
                    setFocusedField: vn
                })
            },
            getFieldOptions: nt,
            setFieldValue: Et,
            getActiveIndex: _t,
            getActiveIndexOnBlur: Pt,
            setTrackData: ve,
            isSubmitDisabled: R,
            setLocationInputValue: De,
            openGlobalSearchInline: fe,
            closeGlobalSearchInline: Ce,
            iconGlobalSearchFlag: ae,
            handleClickOutside: at
        }
    }

    function qt(i) {
        const d = e.ref(!1),
            a = e.ref(),
            o = e.ref(),
            p = e.ref([]),
            g = e.ref(!1);

        function f(I) {
            return t.contentStore.getContent(I).then(z => z)
        }

        function _(I) {
            return t.contentStore.getFilterdContent(I)
        }

        function T() {
            d.value ? d.value = !1 : d.value = !0
        }

        function L(I) {
            const z = i.value.querySelector(".phw-input-group-btn");
            (!z || !z.contains(I.target)) && (d.value = !1)
        }

        function V(I) {
            I.shiftKey && I.key === "Tab" && (d.value = !1)
        }
        const te = I => {
            I.currentTarget.contains(I.relatedTarget) || (d.value = !1)
        };

        function S(I) {
            I.key === "Escape" && d.value && (d.value = !1)
        }

        function $() {
            d.value = !1, setTimeout(() => {
                var z;
                const I = (z = i.value) == null ? void 0 : z.querySelector(".toggle-button");
                I instanceof HTMLElement && I.focus()
            }, 100)
        }
        return {
            getContent: f,
            getFilteredContent: _,
            handleKeydown: S,
            handleShiftTab: V,
            suggestionContent: p,
            handleClickOutside: L,
            handleTabOutFocusText: te,
            handleTabOutFocus: $,
            popup: a,
            toggleButton: o,
            flag: d,
            toggleFlag: T,
            showLoader: g
        }
    }
    const jt = {
            key: 0,
            class: "phw-widget-ctr phw-g-widget-bg-gray-1",
            "data-ps": "8b04cc32-div-2"
        },
        Wt = {
            key: 0,
            class: "phw-d-flex phw-justify-content-center",
            "data-ps": "8b04cc32-div-3"
        },
        Jt = {
            class: "phw-spinner-border phw-secondary",
            role: "status",
            "data-ps": "8b04cc32-div-4"
        },
        Zt = {
            class: "phw-visually-hidden",
            "aria-hidden": "true",
            "data-ps": "8b04cc32-span-1"
        },
        Yt = [e.createTextVNode("Loading...")],
        Xt = {
            key: 1,
            class: "phw-container",
            "data-ps": "8b04cc32-div-5"
        },
        Qt = {
            class: "phw-width-3 phw-m-0-auto phw-width-md-4",
            "data-ps": "8b04cc32-div-6"
        },
        vt = {
            class: "phw-text-c phw-g-p-default-dark phw-font-weight-600",
            "data-ph-at-id": "keyword-suggestion-heading",
            "data-ps": "8b04cc32-h2-1"
        },
        ed = ["role"],
        td = ["role"],
        dd = ["href"],
        ad = {
            key: 0,
            "data-ps": "8b04cc32-span-2"
        },
        id = {
            href: "#phw-cns-icon-search",
            "data-ps": "8b04cc32-use-1"
        },
        nd = ["aria-expanded"],
        sd = {
            class: "phw-d-inline-flex phw-align-items-center phw-s-category-count",
            "data-ps": "8b04cc32-div-8"
        },
        ld = ["aria-label", "aria-expanded"],
        rd = {
            key: 0,
            "data-ps": "8b04cc32-span-4"
        },
        od = {
            "data-ps": "8b04cc32-span-5"
        },
        cd = {
            key: 1,
            "data-ps": "8b04cc32-span-6"
        },
        $d = {
            "data-ps": "8b04cc32-span-7"
        },
        hd = ["role"],
        pd = ["role"],
        gd = ["href"],
        fd = {
            key: 0,
            "data-ps": "8b04cc32-span-8"
        },
        wd = {
            href: "#phw-cns-icon-search",
            "data-ps": "8b04cc32-use-2"
        },
        ud = ["aria-expanded"],
        kd = {
            class: "phw-d-inline-flex phw-align-items-center phw-s-category-count",
            "data-ps": "8b04cc32-div-13"
        },
        yd = ["aria-label", "aria-expanded"],
        bd = {
            key: 0,
            "data-ps": "8b04cc32-span-10"
        },
        Sd = {
            "data-ps": "8b04cc32-span-11"
        },
        md = {
            key: 1,
            "data-ps": "8b04cc32-span-12"
        },
        Bd = {
            "data-ps": "8b04cc32-span-13"
        },
        Ed = ["role"],
        _d = ["role"],
        Pd = ["href"],
        Dd = {
            key: 0,
            "data-ps": "8b04cc32-span-14"
        },
        xd = {
            href: "#phw-cns-icon-search",
            "data-ps": "8b04cc32-use-3"
        },
        Td = e.defineComponent({
            __name: "KeywordSuggestionDefultDefaultComponent",
            props: {
                instanceId: null,
                contentId: null,
                showIcon: {
                    type: Boolean
                },
                content: null,
                keywordSuggestionBindables: null,
                noOfKeywords: null,
                _contentFilterType: {
                    default: "static"
                },
                _contentModelType: {
                    default: "keyword_suggestion"
                }
            },
            setup(i) {
                const d = i,
                    a = e.ref(),
                    o = t.getDeviceType(),
                    p = e.ref(),
                    {
                        showLoader: g,
                        handleTabOutFocusText: f,
                        handleTabOutFocus: _,
                        toggleFlag: T,
                        flag: L,
                        suggestionContent: V,
                        getFilteredContent: te
                    } = qt(a);
                return e.onBeforeMount(() => {
                    g.value = !0, d.content ? p.value = d.content : t.contentStore.getContent(d.contentId).then(S => {
                        p.value = S || {}
                    }), V.value = te(d.contentId), g.value = !1
                }), e.onMounted(() => {
                    t.usePhCommon().init(a.value, p, d.instanceId)
                }), e.onBeforeUnmount(() => {}), (S, $) => {
                    var I, z, U;
                    return e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        ref_key: "element",
                        ref: a,
                        "data-ps": "8b04cc32-div-1"
                    }, [p.value ? e.withDirectives((e.openBlock(), e.createElementBlock("div", jt, [e.unref(g) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", Wt, [e.withDirectives((e.openBlock(), e.createElementBlock("div", Jt, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Zt, Yt)), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), !e.unref(g) && e.unref(V).length > 0 ? e.withDirectives((e.openBlock(), e.createElementBlock("div", Xt, [e.withDirectives((e.openBlock(), e.createElementBlock("div", Qt, [e.withDirectives((e.openBlock(), e.createElementBlock("h2", vt, [e.createTextVNode(e.toDisplayString((I = p.value) == null ? void 0 : I.widgetHeadingText), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]), (z = e.unref(V)) != null && z.length ? e.withDirectives((e.openBlock(), e.createElementBlock("ul", {
                        key: 0,
                        class: e.normalizeClass([e.unref(o) === "mobile" && [S.$style["hide-in-mobile-view"]], "phw-pt-2 phw-m-0 phw-p-0 phw-d-flex phw-flex-wrap phw-flex-grow phw-align-self-stretch phw-align-items-center phw-justify-content-center phw-list-none"]),
                        role: ((U = e.unref(V)) == null ? void 0 : U.length) > 1 ? "list" : "presentation",
                        "data-ps": "8b04cc32-ul-1"
                    }, [(e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(e.unref(V).slice(0, d.noOfKeywords), (u, K) => {
                        var q;
                        return e.withDirectives((e.openBlock(), e.createElementBlock("li", {
                            key: K,
                            class: e.normalizeClass(["phw-d-flex phw-pb-1 phw-align-items-center phw-pr-1 phw-s-eachNavItem", [e.unref(o) === "mobile" && S.$style["hide-in-mobile-view"]]]),
                            role: ((q = e.unref(V)) == null ? void 0 : q.length) > 1 ? "listitem" : "presentation",
                            "data-ps": "8b04cc32-li-1"
                        }, [e.withDirectives((e.openBlock(), e.createElementBlock("a", {
                            "data-ph-at-id": "quick-search-keyword",
                            class: e.normalizeClass([
                                [S.$style["link-color"], S.$style["border-radius-modal"], S.$style["phw-list-item-link"]], "phw-td-none phw-pt-1 phw-pb-1 phw-pl-1.5 phw-pr-1.5"
                            ]),
                            href: e.unref(t.getBaseUrl)() + "search-results?keywords=" + u.value.keywordText.value,
                            "data-ps": "8b04cc32-a-1"
                        }, [d.showIcon ? e.withDirectives((e.openBlock(), e.createElementBlock("span", ad, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", {
                            class: e.normalizeClass(["phw-btn-icon phw-i-sz-3 phw-ml-1 phw-icon-flip", [S.$style["tag-color"]]]),
                            fill: "currentcolor",
                            "aria-hidden": "true",
                            "data-ps": "8b04cc32-svg-1"
                        }, [e.withDirectives(e.createElementVNode("use", id, null, 512), [
                            [e.unref(t.vPhwSetting)]
                        ])], 2)), [
                            [e.unref(t.vPhwSetting)]
                        ])])), [
                            [e.unref(t.vPhwSetting)]
                        ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                            class: e.normalizeClass([
                                [S.$style["tag-color"]], "phw-mr-1"
                            ]),
                            "data-ps": "8b04cc32-span-3"
                        }, [e.createTextVNode(e.toDisplayString(u.value.keywordText.value), 1)], 2)), [
                            [e.unref(t.vPhwSetting)]
                        ])], 10, dd)), [
                            [e.unref(t.vPhwSetting)],
                            [e.unref(t.vPhwTrack), `${u.value.keywordText.value}_keyword_click`]
                        ])], 10, td)), [
                            [e.unref(t.vPhwSetting)]
                        ])
                    }), 128))], 10, ed)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(o) == "desktop" && e.unref(V).length > d.noOfKeywords ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: 1,
                        class: e.normalizeClass(["phw-form-group", "phw-input-group-btn", "phw-s-category-group", "phw-justify-content-center", "phw-pt-2"]),
                        "aria-expanded": !!e.unref(L),
                        "data-ps": "8b04cc32-div-7",
                        onFocusout: $[4] || ($[4] = (...u) => e.unref(f) && e.unref(f)(...u))
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", sd, [e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                        "aria-label": p.value.seeMoreDesktop,
                        "aria-expanded": !!e.unref(L),
                        class: e.normalizeClass([
                            [S.$style["see-more-button"], S.$style["border-radius-modal"], S.$style["icon-color-primary"]], "phw-btn phw-g-btn-link toggle-button"
                        ]),
                        "data-ph-at-id": "see-more-button",
                        "data-ps": "8b04cc32-button-1",
                        onClick: $[0] || ($[0] = (...u) => e.unref(T) && e.unref(T)(...u)),
                        onKeyup: $[1] || ($[1] = e.withKeys((...u) => e.unref(_) && e.unref(_)(...u), ["esc"]))
                    }, [e.unref(L) ? e.withDirectives((e.openBlock(), e.createElementBlock("span", cd, [e.withDirectives((e.openBlock(), e.createElementBlock("span", $d, [e.createTextVNode(e.toDisplayString(p.value.seeMoreDesktop), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.withDirectives((e.openBlock(), e.createElementBlock("span", rd, [e.withDirectives((e.openBlock(), e.createElementBlock("span", od, [e.createTextVNode(e.toDisplayString(p.value.seeMoreDesktop), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])], 42, ld)), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.unref(L) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: 0,
                        class: e.normalizeClass([
                            [S.$style["desktop-popup"], S.$style["border-radius-modal"]], "phw-posn-absolute phw-p-3 phw-width-4"
                        ]),
                        "data-ps": "8b04cc32-div-9",
                        onFocusout: $[2] || ($[2] = (...u) => e.unref(f) && e.unref(f)(...u)),
                        onKeyup: $[3] || ($[3] = e.withKeys((...u) => e.unref(_) && e.unref(_)(...u), ["esc"]))
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        class: e.normalizeClass([S.$style["popup-height"], "phw-d-inline-flex phw-gap-1 phw-flex-wrap"]),
                        "data-ps": "8b04cc32-div-10"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        role: e.unref(V).length > 1 ? "list" : "presentation",
                        class: e.normalizeClass([
                            [S.$style["popup-border"], S.$style["border-radius-modal"]], "phw-flex-wrap phw-list-none phw-d-flex phw-align-items-center phw-justify-content-center phw-p-050 phw-pl-1 phw-pr-1 phw-s-category-chips phw-p-sm-1"
                        ]),
                        "data-ps": "8b04cc32-div-11"
                    }, [(e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(e.unref(V).slice(d.noOfKeywords), (u, K) => e.withDirectives((e.openBlock(), e.createElementBlock("li", {
                        key: K,
                        role: e.unref(V).length > 1 ? "listitem" : "presentation",
                        class: "more-items",
                        "data-ps": "8b04cc32-li-2"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("a", {
                        "data-ph-at-id": "quick-search-keyword",
                        class: e.normalizeClass([
                            [S.$style["link-color"], S.$style["border-radius-modal"], S.$style["phw-list-item-link"]], "phw-td-none phw-g-widget-bg-gray-1 phw-pt-1 phw-pb-1 phw-pl-1.5 phw-pr-1.5"
                        ]),
                        href: e.unref(t.getBaseUrl)() + "search-results?keywords=" + u.value.keywordText.value,
                        "data-ps": "8b04cc32-a-2"
                    }, [d.showIcon ? e.withDirectives((e.openBlock(), e.createElementBlock("span", fd, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", {
                        class: e.normalizeClass(["phw-btn-icon phw-i-sz-3 phw-ml-1 phw-icon-flip", [S.$style["tag-color"]]]),
                        fill: "currentcolor",
                        "aria-hidden": "true",
                        "data-ps": "8b04cc32-svg-2"
                    }, [e.withDirectives(e.createElementVNode("use", wd, null, 512), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                        class: e.normalizeClass([
                            [S.$style["tag-color"]], "phw-mr-1"
                        ]),
                        "data-ps": "8b04cc32-span-9"
                    }, [e.createTextVNode(e.toDisplayString(u.value.keywordText.value), 1)], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ])], 10, gd)), [
                        [e.unref(t.vPhwSetting)],
                        [e.unref(t.vPhwTrack), `${u.value.keywordText.value}_keyword_click`]
                    ])], 8, pd)), [
                        [e.unref(t.vPhwSetting)]
                    ])), 128))], 10, hd)), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ])], 34)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(t.vPhwSetting)]
                    ])], 40, nd)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(o) == "mobile" ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: 2,
                        class: e.normalizeClass(["phw-form-group", "phw-input-group-btn", "phw-s-category-group", "phw-justify-content-center", "phw-pt-2"]),
                        "aria-expanded": !!e.unref(L),
                        "data-ps": "8b04cc32-div-12",
                        onFocusout: $[9] || ($[9] = (...u) => e.unref(f) && e.unref(f)(...u))
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", kd, [e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                        "aria-label": p.value.seeMoreMobile,
                        "aria-expanded": !!e.unref(L),
                        class: e.normalizeClass([
                            [S.$style["see-more-button"], S.$style["border-radius-modal"], S.$style["icon-color-primary"]], "phw-btn phw-g-btn-link toggle-button"
                        ]),
                        "data-ph-at-id": "see-more-button",
                        "data-ps": "8b04cc32-button-2",
                        onClick: $[5] || ($[5] = (...u) => e.unref(T) && e.unref(T)(...u)),
                        onKeyup: $[6] || ($[6] = e.withKeys((...u) => e.unref(_) && e.unref(_)(...u), ["esc"]))
                    }, [e.unref(L) ? e.withDirectives((e.openBlock(), e.createElementBlock("span", md, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Bd, [e.createTextVNode(e.toDisplayString(p.value.seeMoreMobile), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.withDirectives((e.openBlock(), e.createElementBlock("span", bd, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Sd, [e.createTextVNode(e.toDisplayString(p.value.seeMoreMobile), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])], 42, yd)), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.unref(L) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: 0,
                        class: e.normalizeClass([
                            [S.$style["mobile-popup"], S.$style["border-radius-modal"]], "phw-posn-absolute phw-p-3 phw-width-4"
                        ]),
                        "data-ps": "8b04cc32-div-14",
                        onFocusout: $[7] || ($[7] = (...u) => e.unref(f) && e.unref(f)(...u)),
                        onKeyup: $[8] || ($[8] = e.withKeys((...u) => e.unref(_) && e.unref(_)(...u), ["esc"]))
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        class: e.normalizeClass([S.$style["popup-height"], "phw-d-inline-flex phw-gap-1 phw-flex-wrap"]),
                        "data-ps": "8b04cc32-div-15"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        role: e.unref(V).length > 1 ? "list" : "presentation",
                        class: e.normalizeClass([
                            [S.$style["popup-border"], S.$style["border-radius-modal"]], "phw-flex-wrap phw-list-none phw-d-flex phw-align-items-center phw-justify-content-center phw-p-050 phw-pl-1 phw-pr-1 phw-s-category-chips phw-p-sm-1"
                        ]),
                        "data-ps": "8b04cc32-div-16"
                    }, [(e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(e.unref(V), (u, K) => e.withDirectives((e.openBlock(), e.createElementBlock("li", {
                        key: K,
                        role: e.unref(V).length > 1 ? "listitem" : "presentation",
                        class: "more-items",
                        "data-ps": "8b04cc32-li-3"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("a", {
                        "data-ph-at-id": "quick-search-keyword",
                        class: e.normalizeClass([
                            [S.$style["link-color"], S.$style["border-radius-modal"], S.$style["phw-list-item-link"]], "phw-td-none phw-g-widget-bg-gray-1 phw-pt-1 phw-pb-1 phw-pl-1.5 phw-pr-1.5"
                        ]),
                        href: e.unref(t.getBaseUrl)() + "search-results?keywords=" + u.value.keywordText.value,
                        "data-ps": "8b04cc32-a-3"
                    }, [d.showIcon ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Dd, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", {
                        class: e.normalizeClass(["phw-btn-icon phw-i-sz-3 phw-ml-1 phw-icon-flip", [S.$style["tag-color"]]]),
                        fill: "currentcolor",
                        "aria-hidden": "true",
                        "data-ps": "8b04cc32-svg-3"
                    }, [e.withDirectives(e.createElementVNode("use", xd, null, 512), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                        class: e.normalizeClass([
                            [S.$style["tag-color"]], "phw-mr-1"
                        ]),
                        "data-ps": "8b04cc32-span-15"
                    }, [e.createTextVNode(e.toDisplayString(u.value.keywordText.value), 1)], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ])], 10, Pd)), [
                        [e.unref(t.vPhwSetting)],
                        [e.unref(t.vPhwTrack), `${u.value.keywordText.value}_keyword_click`]
                    ])], 8, _d)), [
                        [e.unref(t.vPhwSetting)]
                    ])), 128))], 10, Ed)), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ])], 34)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(t.vPhwSetting)]
                    ])], 40, ud)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(t.vPhwSetting)]
                    ])
                }
            }
        }),
        Nd = {
            "phw-list-item-link": "_phw-list-item-link_17yfy_3",
            "link-color": "_link-color_17yfy_11",
            "tag-color": "_tag-color_17yfy_23",
            "hide-in-mobile-view": "_hide-in-mobile-view_17yfy_29",
            "mobile-popup": "_mobile-popup_17yfy_45",
            "desktop-popup": "_desktop-popup_17yfy_59",
            "popup-height": "_popup-height_17yfy_79",
            "popup-border": "_popup-border_17yfy_87",
            "see-more-button": "_see-more-button_17yfy_95",
            "border-radius-modal": "_border-radius-modal_17yfy_145",
            "icon-color-primary": "_icon-color-primary_17yfy_153"
        },
        ct = (i, d) => {
            const a = i.__vccOpts || i;
            for (const [o, p] of d) a[o] = p;
            return a
        },
        Ld = ct(Td, [
            ["__cssModules", {
                $style: Nd
            }]
        ]);

    function ke(i, d, a, o) {
        if (!i || !d) return "";
        if (typeof i == "object") {
            if (!a) return "";
            const p = d[a];
            let g = i[p];
            if (g || Object.keys(i).forEach(f => {
                    if (/[-*]/g.test(f)) {
                        const _ = f.replace("*", "");
                        if (p >= _ && (g = i[f]), !g) {
                            const T = f.split("-");
                            T && T.length === 2 && p >= T[0] && p <= T[1] && (g = i[f])
                        }
                    }
                }), !g)
                if (i.default) g = "default";
                else return "";
            return $t(g, d, o)
        }
        return $t(i, d, o)
    }

    function $t(i, d, a) {
        const o = /\{\{\s*(.*?)\s*\}\}/g,
            p = /\[\[\s*(.*?)\s*\]\]/g;
        return !i || typeof i != "string" || (i = i.replace(/&lt;/g, "<"), i = i.replace(/&gt;/g, ">"), i = i.replace(o, (g, f) => d.hasOwnProperty(f) ? d[f] : ""), a && (i = encodeURIComponent(i)), i = i.replace(p, (g, f) => {
            if (!f) return f
        })), i
    }
    const Id = {
        version: 4,
        country_calling_codes: {
            1: ["US", "AG", "AI", "AS", "BB", "BM", "BS", "CA", "DM", "DO", "GD", "GU", "JM", "KN", "KY", "LC", "MP", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"],
            7: ["RU", "KZ"],
            20: ["EG"],
            27: ["ZA"],
            30: ["GR"],
            31: ["NL"],
            32: ["BE"],
            33: ["FR"],
            34: ["ES"],
            36: ["HU"],
            39: ["IT", "VA"],
            40: ["RO"],
            41: ["CH"],
            43: ["AT"],
            44: ["GB", "GG", "IM", "JE"],
            45: ["DK"],
            46: ["SE"],
            47: ["NO", "SJ"],
            48: ["PL"],
            49: ["DE"],
            51: ["PE"],
            52: ["MX"],
            53: ["CU"],
            54: ["AR"],
            55: ["BR"],
            56: ["CL"],
            57: ["CO"],
            58: ["VE"],
            60: ["MY"],
            61: ["AU", "CC", "CX"],
            62: ["ID"],
            63: ["PH"],
            64: ["NZ"],
            65: ["SG"],
            66: ["TH"],
            81: ["JP"],
            82: ["KR"],
            84: ["VN"],
            86: ["CN"],
            90: ["TR"],
            91: ["IN"],
            92: ["PK"],
            93: ["AF"],
            94: ["LK"],
            95: ["MM"],
            98: ["IR"],
            211: ["SS"],
            212: ["MA", "EH"],
            213: ["DZ"],
            216: ["TN"],
            218: ["LY"],
            220: ["GM"],
            221: ["SN"],
            222: ["MR"],
            223: ["ML"],
            224: ["GN"],
            225: ["CI"],
            226: ["BF"],
            227: ["NE"],
            228: ["TG"],
            229: ["BJ"],
            230: ["MU"],
            231: ["LR"],
            232: ["SL"],
            233: ["GH"],
            234: ["NG"],
            235: ["TD"],
            236: ["CF"],
            237: ["CM"],
            238: ["CV"],
            239: ["ST"],
            240: ["GQ"],
            241: ["GA"],
            242: ["CG"],
            243: ["CD"],
            244: ["AO"],
            245: ["GW"],
            246: ["IO"],
            247: ["AC"],
            248: ["SC"],
            249: ["SD"],
            250: ["RW"],
            251: ["ET"],
            252: ["SO"],
            253: ["DJ"],
            254: ["KE"],
            255: ["TZ"],
            256: ["UG"],
            257: ["BI"],
            258: ["MZ"],
            260: ["ZM"],
            261: ["MG"],
            262: ["RE", "YT"],
            263: ["ZW"],
            264: ["NA"],
            265: ["MW"],
            266: ["LS"],
            267: ["BW"],
            268: ["SZ"],
            269: ["KM"],
            290: ["SH", "TA"],
            291: ["ER"],
            297: ["AW"],
            298: ["FO"],
            299: ["GL"],
            350: ["GI"],
            351: ["PT"],
            352: ["LU"],
            353: ["IE"],
            354: ["IS"],
            355: ["AL"],
            356: ["MT"],
            357: ["CY"],
            358: ["FI", "AX"],
            359: ["BG"],
            370: ["LT"],
            371: ["LV"],
            372: ["EE"],
            373: ["MD"],
            374: ["AM"],
            375: ["BY"],
            376: ["AD"],
            377: ["MC"],
            378: ["SM"],
            380: ["UA"],
            381: ["RS"],
            382: ["ME"],
            383: ["XK"],
            385: ["HR"],
            386: ["SI"],
            387: ["BA"],
            389: ["MK"],
            420: ["CZ"],
            421: ["SK"],
            423: ["LI"],
            500: ["FK"],
            501: ["BZ"],
            502: ["GT"],
            503: ["SV"],
            504: ["HN"],
            505: ["NI"],
            506: ["CR"],
            507: ["PA"],
            508: ["PM"],
            509: ["HT"],
            590: ["GP", "BL", "MF"],
            591: ["BO"],
            592: ["GY"],
            593: ["EC"],
            594: ["GF"],
            595: ["PY"],
            596: ["MQ"],
            597: ["SR"],
            598: ["UY"],
            599: ["CW", "BQ"],
            670: ["TL"],
            672: ["NF"],
            673: ["BN"],
            674: ["NR"],
            675: ["PG"],
            676: ["TO"],
            677: ["SB"],
            678: ["VU"],
            679: ["FJ"],
            680: ["PW"],
            681: ["WF"],
            682: ["CK"],
            683: ["NU"],
            685: ["WS"],
            686: ["KI"],
            687: ["NC"],
            688: ["TV"],
            689: ["PF"],
            690: ["TK"],
            691: ["FM"],
            692: ["MH"],
            850: ["KP"],
            852: ["HK"],
            853: ["MO"],
            855: ["KH"],
            856: ["LA"],
            880: ["BD"],
            886: ["TW"],
            960: ["MV"],
            961: ["LB"],
            962: ["JO"],
            963: ["SY"],
            964: ["IQ"],
            965: ["KW"],
            966: ["SA"],
            967: ["YE"],
            968: ["OM"],
            970: ["PS"],
            971: ["AE"],
            972: ["IL"],
            973: ["BH"],
            974: ["QA"],
            975: ["BT"],
            976: ["MN"],
            977: ["NP"],
            992: ["TJ"],
            993: ["TM"],
            994: ["AZ"],
            995: ["GE"],
            996: ["KG"],
            998: ["UZ"]
        },
        countries: {
            AC: ["247", "00", "(?:[01589]\\d|[46])\\d{4}", [5, 6]],
            AD: ["376", "00", "(?:1|6\\d)\\d{7}|[135-9]\\d{5}", [6, 8, 9],
                [
                    ["(\\d{3})(\\d{3})", "$1 $2", ["[135-9]"]],
                    ["(\\d{4})(\\d{4})", "$1 $2", ["1"]],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]
                ]
            ],
            AE: ["971", "00", "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}", [5, 6, 7, 8, 9, 10, 11, 12],
                [
                    ["(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]],
                    ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[236]|[479][2-8]"], "0$1"],
                    ["(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]],
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"]
                ], "0"
            ],
            AF: ["93", "00", "[2-7]\\d{8}", [9],
                [
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]
                ], "0"
            ],
            AG: ["1", "011", "(?:268|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([457]\\d{6})$|1", "268$1", 0, "268"],
            AI: ["1", "011", "(?:264|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2457]\\d{6})$|1", "264$1", 0, "264"],
            AL: ["355", "00", "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}", [6, 7, 8, 9],
                [
                    ["(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"],
                    ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[2-6]"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4"], "0$1"],
                    ["(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"]
                ], "0"
            ],
            AM: ["374", "00", "(?:[1-489]\\d|55|60|77)\\d{6}", [8],
                [
                    ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0 $1"],
                    ["(\\d{3})(\\d{5})", "$1 $2", ["2|3[12]"], "(0$1)"],
                    ["(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"],
                    ["(\\d{2})(\\d{6})", "$1 $2", ["[3-9]"], "0$1"]
                ], "0"
            ],
            AO: ["244", "00", "[29]\\d{8}", [9],
                [
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]
                ]
            ],
            AR: ["54", "00", "(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}", [10, 11],
                [
                    ["(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])", "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 1],
                    ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", 1],
                    ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", 1],
                    ["(\\d)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9(?:2[2-469]|3[3-578])", "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))", "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 0, "$1 $2 $3-$4"],
                    ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 15-$3-$4", ["91"], "0$1", 0, "$1 $2 $3-$4"],
                    ["(\\d{3})(\\d{3})(\\d{5})", "$1-$2-$3", ["8"], "0$1"],
                    ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9"], "0$1", 0, "$1 $2 $3-$4"]
                ], "0", 0, "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?", "9$1"
            ],
            AS: ["1", "011", "(?:[58]\\d\\d|684|900)\\d{7}", [10], 0, "1", 0, "([267]\\d{6})$|1", "684$1", 0, "684"],
            AT: ["43", "00", "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
                [
                    ["(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"],
                    ["(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"],
                    ["(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"],
                    ["(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:48|5[0-3579]|[6-9])|7(?:20|32|8)|[89]", "(?:31|4)6|51|6(?:485|5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"],
                    ["(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"],
                    ["(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]
                ], "0"
            ],
            AU: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}", [5, 6, 7, 8, 9, 10, 12],
                [
                    ["(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|4"], "0$1"],
                    ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"],
                    ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]
                ], "0", 0, "(183[12])|0", 0, 0, 0, [
                    ["(?:(?:2(?:(?:[0-26-9]\\d|3[0-8]|5[0135-9])\\d|4(?:[02-9]\\d|10))|3(?:(?:[0-3589]\\d|6[1-9]|7[0-35-9])\\d|4(?:[0-578]\\d|90))|7(?:[013-57-9]\\d|2[0-8])\\d)\\d\\d|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4])|[34]\\d\\d)|(?:6[0-8]|[78]\\d)\\d{3}|9(?:[02-9]\\d{3}|1(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79])))))\\d{3}", [9]],
                    ["4(?:79[01]|83[0-389]|94[0-478])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-37-9])\\d{6}", [9]],
                    ["180(?:0\\d{3}|2)\\d{3}", [7, 10]],
                    ["190[0-26]\\d{6}", [10]], 0, 0, 0, ["163\\d{2,6}", [5, 6, 7, 8, 9]],
                    ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]],
                    ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]
                ], "0011"
            ],
            AW: ["297", "00", "(?:[25-79]\\d\\d|800)\\d{4}", [7],
                [
                    ["(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]
                ]
            ],
            AX: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}", [5, 6, 7, 8, 9, 10, 11, 12], 0, "0", 0, 0, 0, 0, "18", 0, "00"],
            AZ: ["994", "00", "365\\d{6}|(?:[124579]\\d|60|88)\\d{7}", [9],
                [
                    ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["90"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[28]|2|365|46", "1[28]|2|365[45]|46", "1[28]|2|365(?:4|5[02])|46"], "(0$1)"],
                    ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[13-9]"], "0$1"]
                ], "0"
            ],
            BA: ["387", "00", "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}", [8, 9],
                [
                    ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-3]|[7-9]"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]|6[56]"], "0$1"],
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]
                ], "0"
            ],
            BB: ["1", "011", "(?:246|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "246$1", 0, "246"],
            BD: ["880", "00", "[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}", [6, 7, 8, 9, 10],
                [
                    ["(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-8]|[459]1"], "0$1"],
                    ["(\\d{3})(\\d{3,7})", "$1-$2", ["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:[15]|28|4[14])|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"], "0$1"],
                    ["(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]|2[23]"], "0$1"],
                    ["(\\d)(\\d{7,8})", "$1-$2", ["2"], "0$1"]
                ], "0"
            ],
            BE: ["32", "00", "4\\d{8}|[1-9]\\d{7}", [8, 9],
                [
                    ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"],
                    ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[239]|4[23]"], "0$1"],
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[15-8]"], "0$1"],
                    ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"]
                ], "0"
            ],
            BF: ["226", "00", "(?:[025-7]\\d|44)\\d{6}", [8],
                [
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[024-7]"]]
                ]
            ],
            BG: ["359", "00", "00800\\d{7}|[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}", [6, 7, 8, 9, 12],
                [
                    ["(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"],
                    ["(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"],
                    ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"],
                    ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]
                ], "0"
            ],
            BH: ["973", "00", "[136-9]\\d{7}", [8],
                [
                    ["(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[02-4679]"]]
                ]
            ],
            BI: ["257", "00", "(?:[267]\\d|31)\\d{6}", [8],
                [
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2367]"]]
                ]
            ],
            BJ: ["229", "00", "(?:01\\d|[24-689])\\d{7}", [8, 10],
                [
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-689]"]],
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["0"]]
                ]
            ],
            BL: ["590", "00", "(?:590\\d|7090)\\d{5}|(?:69|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [
                ["590(?:2[7-9]|3[3-7]|5[12]|87)\\d{4}"],
                ["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))|7090[0-4])\\d{4}"],
                ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]
            ]],
            BM: ["1", "011", "(?:441|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "441$1", 0, "441"],
            BN: ["673", "00", "[2-578]\\d{6}", [7],
                [
                    ["(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]
                ]
            ],
            BO: ["591", "00(?:1\\d)?", "8001\\d{5}|(?:[2-467]\\d|50)\\d{6}", [8, 9],
                [
                    ["(\\d)(\\d{7})", "$1 $2", ["[235]|4[46]"]],
                    ["(\\d{8})", "$1", ["[67]"]],
                    ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"]]
                ], "0", 0, "0(1\\d)?"
            ],
            BQ: ["599", "00", "(?:[34]1|7\\d)\\d{5}", [7], 0, 0, 0, 0, 0, 0, "[347]"],
            BR: ["55", "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "[1-467]\\d{9,10}|55[0-46-9]\\d{8}|[34]\\d{7}|55\\d{7,8}|(?:5[0-46-9]|[89]\\d)\\d{7,9}", [8, 9, 10, 11],
                [
                    ["(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37|86)", "300|4(?:0(?:0|20)|370|864)"]],
                    ["(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"],
                    ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"], "($1)"],
                    ["(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[16][1-9]|[2-57-9]"], "($1)"]
                ], "0", 0, "(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2"
            ],
            BS: ["1", "011", "(?:242|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([3-8]\\d{6})$|1", "242$1", 0, "242"],
            BT: ["975", "00", "[178]\\d{7}|[2-8]\\d{6}", [7, 8],
                [
                    ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-6]|7[246]|8[2-4]"]],
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|[78]"]]
                ]
            ],
            BW: ["267", "00", "(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}", [7, 8, 10],
                [
                    ["(\\d{2})(\\d{5})", "$1 $2", ["90"]],
                    ["(\\d{3})(\\d{4})", "$1 $2", ["[24-6]|3[15-9]"]],
                    ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37]"]],
                    ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["0"]],
                    ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["8"]]
                ]
            ],
            BY: ["375", "810", "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}", [6, 7, 8, 9, 10, 11],
                [
                    ["(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"],
                    ["(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"],
                    ["(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"],
                    ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:[56]|7[467])|2[1-3]"], "8 0$1"],
                    ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-4]"], "8 0$1"],
                    ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"]
                ], "8", 0, "0|80?", 0, 0, 0, 0, "8~10"
            ],
            BZ: ["501", "00", "(?:0800\\d|[2-8])\\d{6}", [7, 11],
                [
                    ["(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]],
                    ["(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]]
                ]
            ],
            CA: ["1", "011", "[2-9]\\d{9}|3\\d{6}", [7, 10], 0, "1", 0, 0, 0, 0, 0, [
                ["(?:2(?:04|[23]6|[48]9|5[07]|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|[26]8|3[178]|50|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|7[39])|9(?:0[25]|42))[2-9]\\d{6}", [10]],
                ["", [10]],
                ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", [10]],
                ["900[2-9]\\d{6}", [10]],
                ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:2[125-9]|33|44|66|77|88)|6(?:22|33))[2-9]\\d{6}", [10]], 0, ["310\\d{4}", [7]], 0, ["600[2-9]\\d{6}", [10]]
            ]],
            CC: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [
                ["8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}", [9]],
                ["4(?:79[01]|83[0-389]|94[0-478])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-37-9])\\d{6}", [9]],
                ["180(?:0\\d{3}|2)\\d{3}", [7, 10]],
                ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]],
                ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]
            ], "0011"],
            CD: ["243", "00", "(?:(?:[189]|5\\d)\\d|2)\\d{7}|[1-68]\\d{6}", [7, 8, 9, 10],
                [
                    ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"],
                    ["(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"],
                    ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"],
                    ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["5"], "0$1"]
                ], "0"
            ],
            CF: ["236", "00", "(?:[27]\\d{3}|8776)\\d{4}", [8],
                [
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[278]"]]
                ]
            ],
            CG: ["242", "00", "222\\d{6}|(?:0\\d|80)\\d{7}", [9],
                [
                    ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]],
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]]
                ]
            ],
            CH: ["41", "00", "8\\d{11}|[2-9]\\d{8}", [9, 12],
                [
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]|81"], "0$1"],
                    ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["8"], "0$1"]
                ], "0"
            ],
            CI: ["225", "00", "[02]\\d{9}", [10],
                [
                    ["(\\d{2})(\\d{2})(\\d)(\\d{5})", "$1 $2 $3 $4", ["2"]],
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3 $4", ["0"]]
                ]
            ],
            CK: ["682", "00", "[2-578]\\d{4}", [5],
                [
                    ["(\\d{2})(\\d{3})", "$1 $2", ["[2-578]"]]
                ]
            ],
            CL: ["56", "(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0", "12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}", [9, 10, 11],
                [
                    ["(\\d{5})(\\d{4})", "$1 $2", ["219", "2196"], "($1)"],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["60|809"]],
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]],
                    ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[1-36]"], "($1)"],
                    ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9(?:10|[2-9])"]],
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-8]|[1-9])"], "($1)"],
                    ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]],
                    ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
                    ["(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]
                ]
            ],
            CM: ["237", "00", "[26]\\d{8}|88\\d{6,7}", [8, 9],
                [
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]],
                    ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]|88"]]
                ]
            ],
            CN: ["86", "00|1(?:[12]\\d|79)\\d\\d00", "(?:(?:1[03-689]|2\\d)\\d\\d|6)\\d{8}|1\\d{10}|[126]\\d{6}(?:\\d(?:\\d{2})?)?|86\\d{5,6}|(?:[3-579]\\d|8[0-57-9])\\d{5,9}", [7, 8, 9, 10, 11, 12],
                [
                    ["(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2[0-57-9])[19]|3(?:[157]|35|49|9[1-68])|4(?:1[124-9]|2[179]|6[47-9]|7|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:07|1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3|4[13]|5[1-5]|7[0-79]|9[0-35-9])|(?:4[35]|59|85)[1-9]", "(?:10|2[0-57-9])(?:1[02]|9[56])|8078|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))1", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|80781|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))12", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|807812|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:078|1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123"], "0$1"],
                    ["(\\d{3})(\\d{5,6})", "$1 $2", ["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]", "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]", "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])", "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]],
                    ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"], "0$1", 1],
                    ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"], "0$1", 1],
                    ["(\\d{3})(\\d{7,8})", "$1 $2", ["9"]],
                    ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", 1],
                    ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", 1],
                    ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"]],
                    ["(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["[12]"], "0$1", 1]
                ], "0", 0, "(1(?:[12]\\d|79)\\d\\d)|0", 0, 0, 0, 0, "00"
            ],
            CO: ["57", "00(?:4(?:[14]4|56)|[579])", "(?:46|60\\d\\d)\\d{6}|(?:1\\d|[39])\\d{9}", [8, 10, 11],
                [
                    ["(\\d{4})(\\d{4})", "$1 $2", ["46"]],
                    ["(\\d{3})(\\d{7})", "$1 $2", ["6|90"], "($1)"],
                    ["(\\d{3})(\\d{7})", "$1 $2", ["3[0-357]|9[14]"]],
                    ["(\\d)(\\d{3})(\\d{7})", "$1-$2-$3", ["1"], "0$1", 0, "$1 $2 $3"]
                ], "0", 0, "0([3579]|4(?:[14]4|56))?"
            ],
            CR: ["506", "00", "(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}", [8, 10],
                [
                    ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[3-9]"]],
                    ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"]]
                ], 0, 0, "(19(?:0[0-2468]|1[09]|20|66|77|99))"
            ],
            CU: ["53", "119", "(?:[2-7]|8\\d\\d)\\d{7}|[2-47]\\d{6}|[34]\\d{5}", [6, 7, 8, 10],
                [
                    ["(\\d{2})(\\d{4,6})", "$1 $2", ["2[1-4]|[34]"], "(0$1)"],
                    ["(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"],
                    ["(\\d)(\\d{7})", "$1 $2", ["[56]"], "0$1"],
                    ["(\\d{3})(\\d{7})", "$1 $2", ["8"], "0$1"]
                ], "0"
            ],
            CV: ["238", "0", "(?:[2-59]\\d\\d|800)\\d{4}", [7],
                [
                    ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-589]"]]
                ]
            ],
            CW: ["599", "00", "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}", [7, 8],
                [
                    ["(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]],
                    ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]]
                ], 0, 0, 0, 0, 0, "[69]"
            ],
            CX: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [
                ["8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", [9]],
                ["4(?:79[01]|83[0-389]|94[0-478])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-37-9])\\d{6}", [9]],
                ["180(?:0\\d{3}|2)\\d{3}", [7, 10]],
                ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]],
                ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]
            ], "0011"],
            CY: ["357", "00", "(?:[279]\\d|[58]0)\\d{6}", [8],
                [
                    ["(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]
                ]
            ],
            CZ: ["420", "00", "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}", [9, 10, 11, 12],
                [
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]],
                    ["(\\d{2})(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["96"]],
                    ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]],
                    ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]
                ]
            ],
            DE: ["49", "00", "[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|2[13]|31|[46][1-8])\\d{1,9}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                [
                    ["(\\d{2})(\\d{3,13})", "$1 $2", ["3[02]|40|[68]9"], "0$1"],
                    ["(\\d{3})(\\d{3,12})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1", "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"], "0$1"],
                    ["(\\d{4})(\\d{2,11})", "$1 $2", ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"], "0$1"],
                    ["(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"],
                    ["(\\d{5})(\\d{2,10})", "$1 $2", ["3"], "0$1"],
                    ["(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"],
                    ["(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:3|80)|9"], "0$1"],
                    ["(\\d{3})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"],
                    ["(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"],
                    ["(\\d{5})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"],
                    ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
                    ["(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"],
                    ["(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"],
                    ["(\\d{5})(\\d{6})", "$1 $2", ["15[03568]", "15(?:[0568]|3[13])"], "0$1"],
                    ["(\\d{3})(\\d{8})", "$1 $2", ["18"], "0$1"],
                    ["(\\d{3})(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"],
                    ["(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"],
                    ["(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15"], "0$1"]
                ], "0"
            ],
            DJ: ["253", "00", "(?:2\\d|77)\\d{6}", [8],
                [
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]
                ]
            ],
            DK: ["45", "00", "[2-9]\\d{7}", [8],
                [
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]
                ]
            ],
            DM: ["1", "011", "(?:[58]\\d\\d|767|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "767$1", 0, "767"],
            DO: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "8001|8[024]9"],
            DZ: ["213", "00", "(?:[1-4]|[5-79]\\d|80)\\d{7}", [8, 9],
                [
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"],
                    ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"]
                ], "0"
            ],
            EC: ["593", "00", "1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}", [8, 9, 10, 11],
                [
                    ["(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[2-7]"], "(0$1)", 0, "$1-$2-$3"],
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"],
                    ["(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]
                ], "0"
            ],
            EE: ["372", "00", "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}", [7, 8, 10],
                [
                    ["(\\d{3})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]],
                    ["(\\d{4})(\\d{3,4})", "$1 $2", ["[45]|8(?:00|[1-49])", "[45]|8(?:00[1-9]|[1-49])"]],
                    ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]],
                    ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]
                ]
            ],
            EG: ["20", "00", "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}", [8, 9, 10],
                [
                    ["(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"],
                    ["(\\d{2})(\\d{6,7})", "$1 $2", ["1[35]|[4-6]|8[2468]|9[235-7]"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"],
                    ["(\\d{2})(\\d{8})", "$1 $2", ["1"], "0$1"]
                ], "0"
            ],
            EH: ["212", "00", "[5-8]\\d{8}", [9], 0, "0", 0, 0, 0, 0, "528[89]"],
            ER: ["291", "00", "[178]\\d{6}", [7],
                [
                    ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[178]"], "0$1"]
                ], "0"
            ],
            ES: ["34", "00", "[5-9]\\d{8}", [9],
                [
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]],
                    ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]]
                ]
            ],
            ET: ["251", "00", "(?:11|[2-579]\\d)\\d{7}", [9],
                [
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-579]"], "0$1"]
                ], "0"
            ],
            FI: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}", [5, 6, 7, 8, 9, 10, 11, 12],
                [
                    ["(\\d{5})", "$1", ["20[2-59]"], "0$1"],
                    ["(\\d{3})(\\d{3,7})", "$1 $2", ["(?:[1-3]0|[68])0|70[07-9]"], "0$1"],
                    ["(\\d{2})(\\d{4,8})", "$1 $2", ["[14]|2[09]|50|7[135]"], "0$1"],
                    ["(\\d{2})(\\d{6,10})", "$1 $2", ["7"], "0$1"],
                    ["(\\d)(\\d{4,9})", "$1 $2", ["(?:19|[2568])[1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"]
                ], "0", 0, 0, 0, 0, "1[03-79]|[2-9]", 0, "00"
            ],
            FJ: ["679", "0(?:0|52)", "45\\d{5}|(?:0800\\d|[235-9])\\d{6}", [7, 11],
                [
                    ["(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]],
                    ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]
                ], 0, 0, 0, 0, 0, 0, 0, "00"
            ],
            FK: ["500", "00", "[2-7]\\d{4}", [5]],
            FM: ["691", "00", "(?:[39]\\d\\d|820)\\d{4}", [7],
                [
                    ["(\\d{3})(\\d{4})", "$1 $2", ["[389]"]]
                ]
            ],
            FO: ["298", "00", "[2-9]\\d{5}", [6],
                [
                    ["(\\d{6})", "$1", ["[2-9]"]]
                ], 0, 0, "(10(?:01|[12]0|88))"
            ],
            FR: ["33", "00", "[1-9]\\d{8}", [9],
                [
                    ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"],
                    ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]
                ], "0"
            ],
            GA: ["241", "00", "(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}", [7, 8],
                [
                    ["(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"],
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]],
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["11|[67]"], "0$1"]
                ], 0, 0, "0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})", "$1"
            ],
            GB: ["44", "00", "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}", [7, 9, 10],
                [
                    ["(\\d{3})(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1"],
                    ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1"],
                    ["(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"],
                    ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"], "0$1"],
                    ["(\\d{4})(\\d{5,6})", "$1 $2", ["1(?:[2-69][02-9]|[78])"], "0$1"],
                    ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[25]|7(?:0|6[02-9])", "[25]|7(?:0|6(?:[03-9]|2[356]))"], "0$1"],
                    ["(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"]
                ], "0", 0, "0|180020", 0, 0, 0, [
                    ["(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0-35])|4(?:(?:[0-5]\\d|70)\\d|69[7-9])|(?:(?:5[0-26-9]|[78][0-49])\\d|6(?:[0-4]\\d|50))\\d)|(?:2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d|1(?:[0-7]\\d|8[0-3]))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d)\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}", [9, 10]],
                    ["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}", [10]],
                    ["80[08]\\d{7}|800\\d{6}|8001111"],
                    ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d", [7, 10]],
                    ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]],
                    ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]],
                    ["56\\d{8}", [10]]
                ], 0, " x"
            ],
            GD: ["1", "011", "(?:473|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "473$1", 0, "473"],
            GE: ["995", "00", "(?:[3-57]\\d\\d|800)\\d{6}", [9],
                [
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["32"], "0$1"],
                    ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[57]"]],
                    ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"]
                ], "0"
            ],
            GF: ["594", "00", "(?:[56]94\\d|7093)\\d{5}|(?:80|9\\d)\\d{7}", [9],
                [
                    ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]|9[47]"], "0$1"],
                    ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[89]"], "0$1"]
                ], "0"
            ],
            GG: ["44", "00", "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?", [7, 9, 10], 0, "0", 0, "([25-9]\\d{5})$|0|180020", "1481$1", 0, 0, [
                ["1481[25-9]\\d{5}", [10]],
                ["7(?:(?:781|839)\\d|911[17])\\d{5}", [10]],
                ["80[08]\\d{7}|800\\d{6}|8001111"],
                ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d", [7, 10]],
                ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]],
                ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]],
                ["56\\d{8}", [10]]
            ]],
            GH: ["233", "00", "(?:[235]\\d{3}|800)\\d{5}", [8, 9],
                [
                    ["(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"]
                ], "0"
            ],
            GI: ["350", "00", "(?:[25]\\d|60)\\d{6}", [8],
                [
                    ["(\\d{3})(\\d{5})", "$1 $2", ["2"]]
                ]
            ],
            GL: ["299", "00", "(?:19|[2-689]\\d|70)\\d{4}", [6],
                [
                    ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-9]"]]
                ]
            ],
            GM: ["220", "00", "[2-9]\\d{6}", [7],
                [
                    ["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]
                ]
            ],
            GN: ["224", "00", "722\\d{6}|(?:3|6\\d)\\d{7}", [8, 9],
                [
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]],
                    ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]
                ]
            ],
            GP: ["590", "00", "(?:590\\d|7090)\\d{5}|(?:69|80|9\\d)\\d{7}", [9],
                [
                    ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-79]"], "0$1"],
                    ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]
                ], "0", 0, 0, 0, 0, 0, [
                    ["590(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1-9]|5[3-579]|[68][0-689]|7[08]|9\\d)\\d{4}"],
                    ["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))|7090[0-4])\\d{4}"],
                    ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]
                ]
            ],
            GQ: ["240", "00", "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}", [9],
                [
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]],
                    ["(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]
                ]
            ],
            GR: ["30", "00", "5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}", [10, 11, 12],
                [
                    ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]],
                    ["(\\d{4})(\\d{6})", "$1 $2", ["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]],
                    ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2689]"]],
                    ["(\\d{3})(\\d{3,4})(\\d{5})", "$1 $2 $3", ["8"]]
                ]
            ],
            GT: ["502", "00", "80\\d{6}|(?:1\\d{3}|[2-7])\\d{7}", [8, 11],
                [
                    ["(\\d{4})(\\d{4})", "$1 $2", ["[2-8]"]],
                    ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]
                ]
            ],
            GU: ["1", "011", "(?:[58]\\d\\d|671|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "671$1", 0, "671"],
            GW: ["245", "00", "[49]\\d{8}|4\\d{6}", [7, 9],
                [
                    ["(\\d{3})(\\d{4})", "$1 $2", ["40"]],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]]
                ]
            ],
            GY: ["592", "001", "(?:[2-8]\\d{3}|9008)\\d{3}", [7],
                [
                    ["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]
                ]
            ],
            HK: ["852", "00(?:30|5[09]|[126-9]?)", "8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}", [5, 6, 7, 8, 9, 11],
                [
                    ["(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]],
                    ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]],
                    ["(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]
                ], 0, 0, 0, 0, 0, 0, 0, "00"
            ],
            HN: ["504", "00", "8\\d{10}|[237-9]\\d{7}", [8, 11],
                [
                    ["(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]
                ]
            ],
            HR: ["385", "00", "[2-69]\\d{8}|80\\d{5,7}|[1-79]\\d{7}|6\\d{6}", [7, 8, 9],
                [
                    ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["6[01]"], "0$1"],
                    ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"],
                    ["(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6|7[245]"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-57]"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]
                ], "0"
            ],
            HT: ["509", "00", "[2-589]\\d{7}", [8],
                [
                    ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-589]"]]
                ]
            ],
            HU: ["36", "00", "[235-7]\\d{8}|[1-9]\\d{7}", [8, 9],
                [
                    ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "(06 $1)"],
                    ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"], "(06 $1)"],
                    ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "06 $1"]
                ], "06"
            ],
            ID: ["62", "00[89]", "00[1-9]\\d{9,14}|(?:[1-36]|8\\d{5})\\d{6}|00\\d{9}|[1-9]\\d{8,10}|[2-9]\\d{7}", [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                [
                    ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]],
                    ["(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"],
                    ["(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"],
                    ["(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"],
                    ["(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"],
                    ["(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"],
                    ["(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"],
                    ["(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"]
                ], "0"
            ],
            IE: ["353", "00", "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}", [7, 8, 9, 10],
                [
                    ["(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)"],
                    ["(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"],
                    ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"],
                    ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2569]|4[1-69]|7[14]"], "(0$1)"],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"],
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[78]"], "0$1"],
                    ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]],
                    ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"],
                    ["(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8"], "0$1"]
                ], "0"
            ],
            IL: ["972", "0(?:0|1[2-9])", "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}", [7, 8, 9, 10, 11, 12],
                [
                    ["(\\d{4})(\\d{3})", "$1-$2", ["125"]],
                    ["(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]],
                    ["(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"],
                    ["(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]],
                    ["(\\d{4})(\\d{6})", "$1-$2", ["159"]],
                    ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]],
                    ["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["15"]]
                ], "0"
            ],
            IM: ["44", "00", "1624\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([25-8]\\d{5})$|0|180020", "1624$1", 0, "74576|(?:16|7[56])24"],
            IN: ["91", "00", "(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}", [8, 9, 10, 11, 12, 13],
                [
                    ["(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"], 0, 1],
                    ["(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], 0, 1],
                    ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], 0, 1],
                    ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"], "0$1", 1],
                    ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"], "0$1", 1],
                    ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807", "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"], "0$1", 1],
                    ["(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1", 1],
                    ["(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["1(?:6|8[06])", "1(?:6|8[06]0)"], 0, 1],
                    ["(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"], 0, 1]
                ], "0"
            ],
            IO: ["246", "00", "3\\d{6}", [7],
                [
                    ["(\\d{3})(\\d{4})", "$1 $2", ["3"]]
                ]
            ],
            IQ: ["964", "00", "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}", [8, 9, 10],
                [
                    ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]
                ], "0"
            ],
            IR: ["98", "00", "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}", [4, 5, 6, 7, 10],
                [
                    ["(\\d{4,5})", "$1", ["96"], "0$1"],
                    ["(\\d{2})(\\d{4,5})", "$1 $2", ["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"],
                    ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"]
                ], "0"
            ],
            IS: ["354", "00|1(?:0(?:01|[12]0)|100)", "(?:38\\d|[4-9])\\d{6}", [7, 9],
                [
                    ["(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]
                ], 0, 0, 0, 0, 0, 0, 0, "00"
            ],
            IT: ["39", "00", "0\\d{5,11}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:43|55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?", [6, 7, 8, 9, 10, 11, 12],
                [
                    ["(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]],
                    ["(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]],
                    ["(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]],
                    ["(\\d{4})(\\d{4})", "$1 $2", ["894"]],
                    ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]],
                    ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1(?:44|[679])|[378]|43"]],
                    ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]|14"]],
                    ["(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]],
                    ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]],
                    ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[03]"]]
                ], 0, 0, 0, 0, 0, 0, [
                    ["0(?:669[0-79]\\d{1,6}|831\\d{2,8})|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[2356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}"],
                    ["3[2-9]\\d{7,8}|(?:31|43)\\d{8}", [9, 10]],
                    ["80(?:0\\d{3}|3)\\d{3}", [6, 9]],
                    ["(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}", [6, 8, 9, 10]],
                    ["1(?:78\\d|99)\\d{6}", [9, 10]],
                    ["3[2-8]\\d{9,10}", [11, 12]], 0, 0, ["55\\d{8}", [10]],
                    ["84(?:[08]\\d{3}|[17])\\d{3}", [6, 9]]
                ]
            ],
            JE: ["44", "00", "1534\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([0-24-8]\\d{5})$|0|180020", "1534$1", 0, 0, [
                ["1534[0-24-8]\\d{5}"],
                ["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97\\d))\\d{5}"],
                ["80(?:07(?:35|81)|8901)\\d{4}"],
                ["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"],
                ["701511\\d{4}"], 0, ["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"],
                ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}"],
                ["56\\d{8}"]
            ]],
            JM: ["1", "011", "(?:[58]\\d\\d|658|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "658|876"],
            JO: ["962", "00", "(?:(?:[2689]|7\\d)\\d|32|427|53)\\d{6}", [8, 9],
                [
                    ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"],
                    ["(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"],
                    ["(\\d{2})(\\d{7})", "$1 $2", ["70"], "0$1"],
                    ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[47]"], "0$1"]
                ], "0"
            ],
            JP: ["81", "010", "00[1-9]\\d{6,14}|[25-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}", [8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                [
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"],
                    ["(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51)|9(?:80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60"], "0$1"],
                    ["(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["3|4(?:2[09]|7[01])|6[1-9]", "3|4(?:2(?:0|9[02-69])|7(?:0[019]|1))|6[1-9]"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[0459]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[26-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9]|9[29])|5(?:2|3(?:[045]|9[0-8])|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|3(?:[29]|60)|49|51|6(?:[0-24]|36|5[0-3589]|7[23]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3(?:[045]|9(?:[0-58]|6[4-9]|7[0-35689]))|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|60|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[2-57-9]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|7(?:2[2-468]|3[78])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"], "0$1"],
                    ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[289][2-9]|5[3-9]|7[2-4679]"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"],
                    ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[25-9]"], "0$1"]
                ], "0", 0, "(000[2569]\\d{4,6})$|(?:(?:003768)0?)|0", "$1"
            ],
            KE: ["254", "000", "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}", [7, 8, 9, 10],
                [
                    ["(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"],
                    ["(\\d{3})(\\d{6})", "$1 $2", ["[17]"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]
                ], "0"
            ],
            KG: ["996", "00", "8\\d{9}|[235-9]\\d{8}", [9, 10],
                [
                    ["(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[346]|[24-79])"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-79]|88"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", ["8"], "0$1"]
                ], "0"
            ],
            KH: ["855", "00[14-9]", "1\\d{9}|[1-9]\\d{7,8}", [8, 9, 10],
                [
                    ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"],
                    ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]
                ], "0"
            ],
            KI: ["686", "00", "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}", [5, 8], 0, "0"],
            KM: ["269", "00", "[3478]\\d{6}", [7],
                [
                    ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[3478]"]]
                ]
            ],
            KN: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "869$1", 0, "869"],
            KP: ["850", "00|99", "85\\d{6}|(?:19\\d|[2-7])\\d{7}", [8, 10],
                [
                    ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"],
                    ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"]
                ], "0"
            ],
            KR: ["82", "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))", "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}", [5, 6, 8, 9, 10, 11, 12, 13, 14],
                [
                    ["(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1"],
                    ["(\\d{4})(\\d{4})", "$1-$2", ["1"]],
                    ["(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[36]0|8"], "0$1"],
                    ["(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1"],
                    ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"],
                    ["(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1"]
                ], "0", 0, "0(8(?:[1-46-8]|5\\d\\d))?"
            ],
            KW: ["965", "00", "18\\d{5}|(?:[2569]\\d|41)\\d{6}", [7, 8],
                [
                    ["(\\d{4})(\\d{3,4})", "$1 $2", ["[169]|2(?:[235]|4[1-35-9])|52"]],
                    ["(\\d{3})(\\d{5})", "$1 $2", ["[245]"]]
                ]
            ],
            KY: ["1", "011", "(?:345|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "345$1", 0, "345"],
            KZ: ["7", "810", "(?:33622|8\\d{8})\\d{5}|[78]\\d{9}", [10, 14], 0, "8", 0, 0, 0, 0, "33622|7", 0, "8~10"],
            LA: ["856", "00", "[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}", [8, 9, 10],
                [
                    ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"],
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["3"], "0$1"],
                    ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[23]"], "0$1"]
                ], "0"
            ],
            LB: ["961", "00", "[27-9]\\d{7}|[13-9]\\d{6}", [7, 8],
                [
                    ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-6]|9[04-9])|8[02-9]"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27-9]"]]
                ], "0"
            ],
            LC: ["1", "011", "(?:[58]\\d\\d|758|900)\\d{7}", [10], 0, "1", 0, "([2-8]\\d{6})$|1", "758$1", 0, "758"],
            LI: ["423", "00", "[68]\\d{8}|(?:[2378]\\d|90)\\d{5}", [7, 9],
                [
                    ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2379]|8(?:0[09]|7)", "[2379]|8(?:0(?:02|9)|7)"]],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]],
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["69"]],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]
                ], "0", 0, "(1001)|0"
            ],
            LK: ["94", "00", "[1-9]\\d{8}", [9],
                [
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"]
                ], "0"
            ],
            LR: ["231", "00", "(?:[2457]\\d|33|88)\\d{7}|(?:2\\d|[4-6])\\d{6}", [7, 8, 9],
                [
                    ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["4[67]|[56]"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-578]"], "0$1"]
                ], "0"
            ],
            LS: ["266", "00", "(?:[256]\\d\\d|800)\\d{5}", [8],
                [
                    ["(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]
                ]
            ],
            LT: ["370", "00", "(?:[3469]\\d|52|[78]0)\\d{6}", [8],
                [
                    ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["52[0-7]"], "(0-$1)", 1],
                    ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0 $1", 1],
                    ["(\\d{2})(\\d{6})", "$1 $2", ["37|4(?:[15]|6[1-8])"], "(0-$1)", 1],
                    ["(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(0-$1)", 1]
                ], "0", 0, "[08]"
            ],
            LU: ["352", "00", "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}", [4, 5, 6, 7, 8, 9, 10, 11],
                [
                    ["(\\d{2})(\\d{3})", "$1 $2", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]],
                    ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]],
                    ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"]],
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["2(?:[0367]|4[3-8])"]],
                    ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80[01]|90[015]"]],
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"]],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]],
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["2(?:[0367]|4[3-8])"]],
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})", "$1 $2 $3 $4", ["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]]
                ], 0, 0, "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)"
            ],
            LV: ["371", "00", "(?:[268]\\d|78|90)\\d{6}", [8],
                [
                    ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2679]|8[01]"]]
                ]
            ],
            LY: ["218", "00", "[2-9]\\d{8}", [9],
                [
                    ["(\\d{2})(\\d{7})", "$1-$2", ["[2-9]"], "0$1"]
                ], "0"
            ],
            MA: ["212", "00", "[5-8]\\d{8}", [9],
                [
                    ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5[45]"], "0$1"],
                    ["(\\d{4})(\\d{5})", "$1-$2", ["5(?:2[2-46-9]|3[3-9]|9)|8(?:0[89]|92)"], "0$1"],
                    ["(\\d{2})(\\d{7})", "$1-$2", ["8"], "0$1"],
                    ["(\\d{3})(\\d{6})", "$1-$2", ["[5-7]"], "0$1"]
                ], "0", 0, 0, 0, 0, 0, [
                    ["5(?:2(?:[0-25-79]\\d|3[1-578]|4[02-46-8]|8[0235-7])|3(?:[0-47]\\d|5[02-9]|6[02-8]|8[014-9]|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}"],
                    ["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[0167]\\d|2[0-8]|5[0-5]|8[0-7]))\\d{6}"],
                    ["80[0-7]\\d{6}"],
                    ["89\\d{7}"], 0, 0, 0, 0, ["(?:592(?:4[0-2]|93)|80[89]\\d\\d)\\d{4}"]
                ]
            ],
            MC: ["377", "00", "(?:[3489]|6\\d)\\d{7}", [8, 9],
                [
                    ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"],
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[389]"]],
                    ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"]
                ], "0"
            ],
            MD: ["373", "00", "(?:[235-7]\\d|[89]0)\\d{6}", [8],
                [
                    ["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"],
                    ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"]
                ], "0"
            ],
            ME: ["382", "00", "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}", [8, 9],
                [
                    ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]
                ], "0"
            ],
            MF: ["590", "00", "(?:590\\d|7090)\\d{5}|(?:69|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [
                ["590(?:0[079]|[14]3|[27][79]|3[03-7]|5[0-268]|87)\\d{4}"],
                ["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))|7090[0-4])\\d{4}"],
                ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]
            ]],
            MG: ["261", "00", "[23]\\d{8}", [9],
                [
                    ["(\\d{2})(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"], "0$1"]
                ], "0", 0, "([24-9]\\d{6})$|0", "20$1"
            ],
            MH: ["692", "011", "329\\d{4}|(?:[256]\\d|45)\\d{5}", [7],
                [
                    ["(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]
                ], "1"
            ],
            MK: ["389", "00", "[2-578]\\d{7}", [8],
                [
                    ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2|34[47]|4(?:[37]7|5[47]|64)"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"],
                    ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"]
                ], "0"
            ],
            ML: ["223", "00", "[24-9]\\d{7}", [8],
                [
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]
                ]
            ],
            MM: ["95", "00", "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}", [6, 7, 8, 9, 10],
                [
                    ["(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"],
                    ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["4(?:[2-46]|5[3-5])|5|6(?:[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-5]|(?:60|86)[23]"], "0$1"],
                    ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|452|678|86", "[12]|452|6788|86"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[4-7]|8[1-35]"], "0$1"],
                    ["(\\d)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"], "0$1"],
                    ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"],
                    ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92"], "0$1"],
                    ["(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", ["9"], "0$1"]
                ], "0"
            ],
            MN: ["976", "001", "[12]\\d{7,9}|[5-9]\\d{7}", [8, 9, 10],
                [
                    ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"], "0$1"],
                    ["(\\d{4})(\\d{4})", "$1 $2", ["[5-9]"]],
                    ["(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"],
                    ["(\\d{4})(\\d{5,6})", "$1 $2", ["[12](?:27|3[2-8]|4[2-68]|5[1-4689])", "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"], "0$1"],
                    ["(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"]
                ], "0"
            ],
            MO: ["853", "00", "0800\\d{3}|(?:28|[68]\\d)\\d{6}", [7, 8],
                [
                    ["(\\d{4})(\\d{3})", "$1 $2", ["0"]],
                    ["(\\d{4})(\\d{4})", "$1 $2", ["[268]"]]
                ]
            ],
            MP: ["1", "011", "[58]\\d{9}|(?:67|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "670$1", 0, "670"],
            MQ: ["596", "00", "(?:596\\d|7091)\\d{5}|(?:69|[89]\\d)\\d{7}", [9],
                [
                    ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-79]|8(?:0[6-9]|[36])"], "0$1"],
                    ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]
                ], "0"
            ],
            MR: ["222", "00", "(?:[2-4]\\d\\d|800)\\d{5}", [8],
                [
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]
                ]
            ],
            MS: ["1", "011", "(?:[58]\\d\\d|664|900)\\d{7}", [10], 0, "1", 0, "([34]\\d{6})$|1", "664$1", 0, "664"],
            MT: ["356", "00", "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}", [8],
                [
                    ["(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]
                ]
            ],
            MU: ["230", "0(?:0|[24-7]0|3[03])", "(?:[57]|8\\d\\d)\\d{7}|[2-468]\\d{6}", [7, 8, 10],
                [
                    ["(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8[013]"]],
                    ["(\\d{4})(\\d{4})", "$1 $2", ["[57]"]],
                    ["(\\d{5})(\\d{5})", "$1 $2", ["8"]]
                ], 0, 0, 0, 0, 0, 0, 0, "020"
            ],
            MV: ["960", "0(?:0|19)", "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}", [7, 10],
                [
                    ["(\\d{3})(\\d{4})", "$1-$2", ["[34679]"]],
                    ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]]
                ], 0, 0, 0, 0, 0, 0, 0, "00"
            ],
            MW: ["265", "00", "(?:[1289]\\d|31|77)\\d{7}|1\\d{6}", [7, 9],
                [
                    ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"],
                    ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[137-9]"], "0$1"]
                ], "0"
            ],
            MX: ["52", "0[09]", "[2-9]\\d{9}", [10],
                [
                    ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"]],
                    ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"]]
                ], 0, 0, 0, 0, 0, 0, 0, "00"
            ],
            MY: ["60", "00", "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}", [8, 9, 10],
                [
                    ["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1(?:[02469]|[378][1-9]|53)|8", "1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8"], "0$1"],
                    ["(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"],
                    ["(\\d)(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1(?:[367]|80)"]],
                    ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"],
                    ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["1"], "0$1"]
                ], "0"
            ],
            MZ: ["258", "00", "(?:2|8\\d)\\d{7}", [8, 9],
                [
                    ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-79]"]],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]
                ]
            ],
            NA: ["264", "00", "[68]\\d{7,8}", [8, 9],
                [
                    ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["87"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]
                ], "0"
            ],
            NC: ["687", "00", "(?:050|[2-57-9]\\d\\d)\\d{3}", [6],
                [
                    ["(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[02-57-9]"]]
                ]
            ],
            NE: ["227", "00", "[027-9]\\d{7}", [8],
                [
                    ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]],
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[089]|2[013]|7[0467]"]]
                ]
            ],
            NF: ["672", "00", "[13]\\d{5}", [6],
                [
                    ["(\\d{2})(\\d{4})", "$1 $2", ["1[0-3]"]],
                    ["(\\d)(\\d{5})", "$1 $2", ["[13]"]]
                ], 0, 0, "([0-258]\\d{4})$", "3$1"
            ],
            NG: ["234", "009", "(?:20|9\\d)\\d{8}|[78]\\d{9,13}", [10, 11, 12, 13, 14],
                [
                    ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[7-9]"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["20[129]"], "0$1"],
                    ["(\\d{4})(\\d{2})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
                    ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"],
                    ["(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"]
                ], "0"
            ],
            NI: ["505", "00", "(?:1800|[25-8]\\d{3})\\d{4}", [8],
                [
                    ["(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]
                ]
            ],
            NL: ["31", "00", "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}", [5, 6, 7, 8, 9, 10, 11],
                [
                    ["(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"],
                    ["(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"],
                    ["(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-578]|91"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3", ["9"], "0$1"]
                ], "0"
            ],
            NO: ["47", "00", "(?:0|[2-9]\\d{3})\\d{4}", [5, 8],
                [
                    ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["8"]],
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]"]]
                ], 0, 0, 0, 0, 0, "[02-689]|7[0-8]"
            ],
            NP: ["977", "00", "(?:1\\d|9)\\d{9}|[1-9]\\d{7}", [8, 10, 11],
                [
                    ["(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"],
                    ["(\\d{2})(\\d{6})", "$1-$2", ["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"], "0$1"],
                    ["(\\d{3})(\\d{7})", "$1-$2", ["9"]]
                ], "0"
            ],
            NR: ["674", "00", "(?:222|444|(?:55|8\\d)\\d|666|777|999)\\d{4}", [7],
                [
                    ["(\\d{3})(\\d{4})", "$1 $2", ["[24-9]"]]
                ]
            ],
            NU: ["683", "00", "(?:[4-7]|888\\d)\\d{3}", [4, 7],
                [
                    ["(\\d{3})(\\d{4})", "$1 $2", ["8"]]
                ]
            ],
            NZ: ["64", "0(?:0|161)", "[1289]\\d{9}|50\\d{5}(?:\\d{2,3})?|[27-9]\\d{7,8}|(?:[34]\\d|6[0-35-9])\\d{6}|8\\d{4,6}", [5, 6, 7, 8, 9, 10],
                [
                    ["(\\d{2})(\\d{3,8})", "$1 $2", ["8[1-79]"], "0$1"],
                    ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["50[036-8]|8|90", "50(?:[0367]|88)|8|90"], "0$1"],
                    ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["24|[346]|7[2-57-9]|9[2-9]"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|[589]"], "0$1"],
                    ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1|2[028]"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:[169]|7[0-35-9])|7"], "0$1"]
                ], "0", 0, 0, 0, 0, 0, 0, "00"
            ],
            OM: ["968", "00", "(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}", [7, 8, 9],
                [
                    ["(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]],
                    ["(\\d{2})(\\d{6})", "$1 $2", ["2"]],
                    ["(\\d{4})(\\d{4})", "$1 $2", ["[179]"]]
                ]
            ],
            PA: ["507", "00", "(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}", [7, 8, 10, 11],
                [
                    ["(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]],
                    ["(\\d{4})(\\d{4})", "$1-$2", ["[68]"]],
                    ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]
                ]
            ],
            PE: ["51", "00|19(?:1[124]|77|90)00", "(?:[14-8]|9\\d)\\d{7}", [8, 9],
                [
                    ["(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)"],
                    ["(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"],
                    ["(\\d{2})(\\d{6})", "$1 $2", ["[4-8]"], "(0$1)"],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]
                ], "0", 0, 0, 0, 0, 0, 0, "00", " Anexo "
            ],
            PF: ["689", "00", "4\\d{5}(?:\\d{2})?|8\\d{7,8}", [6, 8, 9],
                [
                    ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]],
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4|8[7-9]"]],
                    ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]
                ]
            ],
            PG: ["675", "00|140[1-3]", "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}", [7, 8],
                [
                    ["(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85"]],
                    ["(\\d{4})(\\d{4})", "$1 $2", ["[78]"]]
                ], 0, 0, 0, 0, 0, 0, 0, "00"
            ],
            PH: ["63", "00", "(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}", [6, 8, 9, 10, 11, 12, 13],
                [
                    ["(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"],
                    ["(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"],
                    ["(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"],
                    ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"],
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|8[2-8]"], "(0$1)"],
                    ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"],
                    ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
                    ["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]
                ], "0"
            ],
            PK: ["92", "00", "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}", [8, 9, 10, 11, 12],
                [
                    ["(\\d{3})(\\d{3})(\\d{2,7})", "$1 $2 $3", ["[89]0"], "0$1"],
                    ["(\\d{4})(\\d{5})", "$1 $2", ["1"]],
                    ["(\\d{3})(\\d{6,7})", "$1 $2", ["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])", "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"], "(0$1)"],
                    ["(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)"],
                    ["(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"],
                    ["(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"], "(0$1)"],
                    ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[24-9]"], "(0$1)"]
                ], "0"
            ],
            PL: ["48", "00", "(?:6|8\\d\\d)\\d{7}|[1-9]\\d{6}(?:\\d{2})?|[26]\\d{5}", [6, 7, 8, 9, 10],
                [
                    ["(\\d{5})", "$1", ["19"]],
                    ["(\\d{3})(\\d{3})", "$1 $2", ["11|20|64"]],
                    ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1", "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]],
                    ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]],
                    ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2-8]|[2-7]|8[1-79]|9[145]"]],
                    ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["8"]]
                ]
            ],
            PM: ["508", "00", "[45]\\d{5}|(?:708|8\\d\\d)\\d{6}", [6, 9],
                [
                    ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]],
                    ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]
                ], "0"
            ],
            PR: ["1", "011", "(?:[589]\\d\\d|787)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "787|939"],
            PS: ["970", "00", "[2489]2\\d{6}|(?:1\\d|5)\\d{8}", [8, 9, 10],
                [
                    ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"],
                    ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]
                ], "0"
            ],
            PT: ["351", "00", "1693\\d{5}|(?:[26-9]\\d|30)\\d{7}", [9],
                [
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["16|[236-9]"]]
                ]
            ],
            PW: ["680", "01[12]", "(?:[24-8]\\d\\d|345|900)\\d{4}", [7],
                [
                    ["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]
                ]
            ],
            PY: ["595", "00", "59\\d{4,6}|9\\d{5,10}|(?:[2-46-8]\\d|5[0-8])\\d{4,7}", [6, 7, 8, 9, 10, 11],
                [
                    ["(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"],
                    ["(\\d{2})(\\d{5})", "$1 $2", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"],
                    ["(\\d{3})(\\d{4,5})", "$1 $2", ["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"], "(0$1)"],
                    ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"], "(0$1)"],
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["87"]],
                    ["(\\d{3})(\\d{6})", "$1 $2", ["9(?:[5-79]|8[1-7])"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]"], "0$1"],
                    ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]]
                ], "0"
            ],
            QA: ["974", "00", "800\\d{4}|(?:2|800)\\d{6}|(?:0080|[3-7])\\d{7}", [7, 8, 9, 11],
                [
                    ["(\\d{3})(\\d{4})", "$1 $2", ["2[136]|8"]],
                    ["(\\d{4})(\\d{4})", "$1 $2", ["[3-7]"]]
                ]
            ],
            RE: ["262", "00", "709\\d{6}|(?:26|[689]\\d)\\d{7}", [9],
                [
                    ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[26-9]"], "0$1"]
                ], "0", 0, 0, 0, 0, 0, [
                    ["26(?:2\\d\\d|3(?:0\\d|1[0-6]))\\d{4}"],
                    ["(?:69(?:2\\d\\d|3(?:[06][0-6]|1[0-3]|2[0-2]|3[0-39]|4\\d|5[0-5]|7[0-37]|8[0-8]|9[0-479]))|7092[0-3])\\d{4}"],
                    ["80\\d{7}"],
                    ["89[1-37-9]\\d{6}"], 0, 0, 0, 0, ["9(?:399[0-3]|479[0-6]|76(?:2[278]|3[0-37]))\\d{4}"],
                    ["8(?:1[019]|2[0156]|84|90)\\d{6}"]
                ]
            ],
            RO: ["40", "00", "(?:[236-8]\\d|90)\\d{7}|[23]\\d{5}", [6, 9],
                [
                    ["(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"],
                    ["(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[236-9]"], "0$1"]
                ], "0", 0, 0, 0, 0, 0, 0, 0, " int "
            ],
            RS: ["381", "00", "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}", [6, 7, 8, 9, 10, 11, 12],
                [
                    ["(\\d{3})(\\d{3,9})", "$1 $2", ["(?:2[389]|39)0|[7-9]"], "0$1"],
                    ["(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"]
                ], "0"
            ],
            RU: ["7", "810", "8\\d{13}|[347-9]\\d{9}", [10, 14],
                [
                    ["(\\d{4})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"], "8 ($1)", 1],
                    ["(\\d{5})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"], "8 ($1)", 1],
                    ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", 1],
                    ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[349]|8(?:[02-7]|1[1-8])"], "8 ($1)", 1],
                    ["(\\d{4})(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["8"], "8 ($1)"]
                ], "8", 0, 0, 0, 0, 0, [
                    ["336(?:[013-9]\\d|2[013-9])\\d{5}|(?:3(?:0[12]|4[1-35-79]|5[1-3]|65|8[1-58]|9[0145])|4(?:01|1[1356]|2[13467]|7[1-5]|8[1-7]|9[1-689])|8(?:1[1-8]|2[01]|3[13-6]|4[0-8]|5[15-7]|6[0-35-79]|7[1-37-9]))\\d{7}", [10]],
                    ["9\\d{9}", [10]],
                    ["8(?:0[04]|108\\d{3})\\d{7}"],
                    ["80[39]\\d{7}", [10]],
                    ["808\\d{7}", [10]]
                ], "8~10"
            ],
            RW: ["250", "00", "(?:06|[27]\\d\\d|[89]00)\\d{6}", [8, 9],
                [
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"]
                ], "0"
            ],
            SA: ["966", "00", "(?:[15]\\d|800|92)\\d{7}", [9, 10],
                [
                    ["(\\d{4})(\\d{5})", "$1 $2", ["9"]],
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]
                ], "0"
            ],
            SB: ["677", "0[01]", "[6-9]\\d{6}|[1-6]\\d{4}", [5, 7],
                [
                    ["(\\d{2})(\\d{5})", "$1 $2", ["6[89]|7|8[4-9]|9(?:[1-8]|9[0-8])"]]
                ]
            ],
            SC: ["248", "010|0[0-2]", "(?:[2489]\\d|64)\\d{5}", [7],
                [
                    ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]|9[57]"]]
                ], 0, 0, 0, 0, 0, 0, 0, "00"
            ],
            SD: ["249", "00", "[19]\\d{8}", [9],
                [
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]
                ], "0"
            ],
            SE: ["46", "00", "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}", [6, 7, 8, 9, 10, 12],
                [
                    ["(\\d{2})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1", 0, "$1 $2 $3"],
                    ["(\\d{3})(\\d{4})", "$1-$2", ["9(?:00|39|44|9)"], "0$1", 0, "$1 $2"],
                    ["(\\d{2})(\\d{3})(\\d{2})", "$1-$2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3"],
                    ["(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"],
                    ["(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3"],
                    ["(\\d{3})(\\d{2,3})(\\d{3})", "$1-$2 $3", ["9(?:00|39|44)"], "0$1", 0, "$1 $2 $3"],
                    ["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3 $4"],
                    ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["10|7"], "0$1", 0, "$1 $2 $3 $4"],
                    ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"],
                    ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3 $4"],
                    ["(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9"], "0$1", 0, "$1 $2 $3 $4"],
                    ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["[26]"], "0$1", 0, "$1 $2 $3 $4 $5"]
                ], "0"
            ],
            SG: ["65", "0[0-3]\\d", "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}", [8, 10, 11],
                [
                    ["(\\d{4})(\\d{4})", "$1 $2", ["[369]|8(?:0[1-9]|[1-9])"]],
                    ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]],
                    ["(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]],
                    ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]
                ]
            ],
            SH: ["290", "00", "(?:[256]\\d|8)\\d{3}", [4, 5], 0, 0, 0, 0, 0, 0, "[256]"],
            SI: ["386", "00|10(?:22|66|88|99)", "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}", [5, 6, 7, 8],
                [
                    ["(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"],
                    ["(\\d{3})(\\d{5})", "$1 $2", ["59|8"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[0139]|51|6"], "0$1"],
                    ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-57]"], "(0$1)"]
                ], "0", 0, 0, 0, 0, 0, 0, "00"
            ],
            SJ: ["47", "00", "0\\d{4}|(?:[489]\\d|79)\\d{6}", [5, 8], 0, 0, 0, 0, 0, 0, "79"],
            SK: ["421", "00", "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}", [6, 7, 9],
                [
                    ["(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"],
                    ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"],
                    ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"]
                ], "0"
            ],
            SL: ["232", "00", "(?:[237-9]\\d|66)\\d{6}", [8],
                [
                    ["(\\d{2})(\\d{6})", "$1 $2", ["[236-9]"], "(0$1)"]
                ], "0"
            ],
            SM: ["378", "00", "(?:0549|[5-7]\\d)\\d{6}", [8, 10],
                [
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]],
                    ["(\\d{4})(\\d{6})", "$1 $2", ["0"]]
                ], 0, 0, "([89]\\d{5})$", "0549$1"
            ],
            SN: ["221", "00", "(?:[378]\\d|93)\\d{7}", [9],
                [
                    ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]],
                    ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]]
                ]
            ],
            SO: ["252", "00", "[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}", [6, 7, 8, 9],
                [
                    ["(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]],
                    ["(\\d{6})", "$1", ["[134]"]],
                    ["(\\d)(\\d{6})", "$1 $2", ["[15]|2[0-79]|3[0-46-8]|4[0-7]"]],
                    ["(\\d)(\\d{7})", "$1 $2", ["(?:2|90)4|[67]"]],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[348]|64|79|90"]],
                    ["(\\d{2})(\\d{5,7})", "$1 $2", ["1|28|6[0-35-9]|7[67]|9[2-9]"]]
                ], "0"
            ],
            SR: ["597", "00", "(?:[2-5]|[6-8]\\d|90)\\d{5}", [6, 7],
                [
                    ["(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]],
                    ["(\\d{3})(\\d{3})", "$1-$2", ["[2-5]"]],
                    ["(\\d{3})(\\d{4})", "$1-$2", ["[6-9]"]]
                ]
            ],
            SS: ["211", "00", "[19]\\d{8}", [9],
                [
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]
                ], "0"
            ],
            ST: ["239", "00", "(?:22|9\\d)\\d{5}", [7],
                [
                    ["(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]
                ]
            ],
            SV: ["503", "00", "[267]\\d{7}|(?:80\\d|900)\\d{4}(?:\\d{4})?", [7, 8, 11],
                [
                    ["(\\d{3})(\\d{4})", "$1 $2", ["[89]"]],
                    ["(\\d{4})(\\d{4})", "$1 $2", ["[267]"]],
                    ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]
                ]
            ],
            SX: ["1", "011", "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "(5\\d{6})$|1", "721$1", 0, "721"],
            SY: ["963", "00", "[1-359]\\d{8}|[1-5]\\d{7}", [8, 9],
                [
                    ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-4]|5[1-3]"], "0$1", 1],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[59]"], "0$1", 1]
                ], "0"
            ],
            SZ: ["268", "00", "0800\\d{4}|(?:[237]\\d|900)\\d{6}", [8, 9],
                [
                    ["(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]],
                    ["(\\d{5})(\\d{4})", "$1 $2", ["9"]]
                ]
            ],
            TA: ["290", "00", "8\\d{3}", [4], 0, 0, 0, 0, 0, 0, "8"],
            TC: ["1", "011", "(?:[58]\\d\\d|649|900)\\d{7}", [10], 0, "1", 0, "([2-479]\\d{6})$|1", "649$1", 0, "649"],
            TD: ["235", "00|16", "(?:22|30|[689]\\d|77)\\d{6}", [8],
                [
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[236-9]"]]
                ], 0, 0, 0, 0, 0, 0, 0, "00"
            ],
            TG: ["228", "00", "[279]\\d{7}", [8],
                [
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]
                ]
            ],
            TH: ["66", "00[1-9]", "(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}", [8, 9, 10, 13],
                [
                    ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13-9]"], "0$1"],
                    ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]
                ], "0"
            ],
            TJ: ["992", "810", "[0-57-9]\\d{8}", [9],
                [
                    ["(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317"]],
                    ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["44[02-479]|[34]7"]],
                    ["(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3(?:[1245]|3[12])"]],
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[0-57-9]"]]
                ], 0, 0, 0, 0, 0, 0, 0, "8~10"
            ],
            TK: ["690", "00", "[2-47]\\d{3,6}", [4, 5, 6, 7]],
            TL: ["670", "00", "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}", [7, 8],
                [
                    ["(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]],
                    ["(\\d{4})(\\d{4})", "$1 $2", ["7"]]
                ]
            ],
            TM: ["993", "810", "(?:[1-6]\\d|71)\\d{6}", [8],
                [
                    ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"],
                    ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-5]"], "(8 $1)"],
                    ["(\\d{2})(\\d{6})", "$1 $2", ["[67]"], "8 $1"]
                ], "8", 0, 0, 0, 0, 0, 0, "8~10"
            ],
            TN: ["216", "00", "[2-57-9]\\d{7}", [8],
                [
                    ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]
                ]
            ],
            TO: ["676", "00", "(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}", [5, 7],
                [
                    ["(\\d{2})(\\d{3})", "$1-$2", ["[2-4]|50|6[09]|7[0-24-69]|8[05]"]],
                    ["(\\d{4})(\\d{3})", "$1 $2", ["0"]],
                    ["(\\d{3})(\\d{4})", "$1 $2", ["[5-9]"]]
                ]
            ],
            TR: ["90", "00", "4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}", [7, 10, 12, 13],
                [
                    ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[01589]|90"], "0$1", 1],
                    ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:[0-59]|61)", "5(?:[0-59]|61[06])", "5(?:[0-59]|61[06]1)"], "0$1", 1],
                    ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24][1-8]|3[1-9]"], "(0$1)", 1],
                    ["(\\d{3})(\\d{3})(\\d{6,7})", "$1 $2 $3", ["80"], "0$1", 1]
                ], "0"
            ],
            TT: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-46-8]\\d{6})$|1", "868$1", 0, "868"],
            TV: ["688", "00", "(?:2|7\\d\\d|90)\\d{4}", [5, 6, 7],
                [
                    ["(\\d{2})(\\d{3})", "$1 $2", ["2"]],
                    ["(\\d{2})(\\d{4})", "$1 $2", ["90"]],
                    ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]
                ]
            ],
            TW: ["886", "0(?:0[25-79]|19)", "[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}", [7, 8, 9, 10, 11],
                [
                    ["(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[258]0"], "0$1"],
                    ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]", "[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"], "0$1"],
                    ["(\\d{2})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["7"], "0$1"]
                ], "0", 0, 0, 0, 0, 0, 0, 0, "#"
            ],
            TZ: ["255", "00[056]", "(?:[25-8]\\d|41|90)\\d{7}", [9],
                [
                    ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"],
                    ["(\\d{2})(\\d{7})", "$1 $2", ["5"]],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"]
                ], "0"
            ],
            UA: ["380", "00", "[89]\\d{9}|[3-9]\\d{8}", [9, 10],
                [
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]", "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"], "0$1"],
                    ["(\\d{4})(\\d{5})", "$1 $2", ["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])", "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|89|9[1-9]"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]
                ], "0", 0, 0, 0, 0, 0, 0, "0~0"
            ],
            UG: ["256", "00[057]", "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}", [9],
                [
                    ["(\\d{4})(\\d{5})", "$1 $2", ["202", "2024"], "0$1"],
                    ["(\\d{3})(\\d{6})", "$1 $2", ["[27-9]|4(?:6[45]|[7-9])"], "0$1"],
                    ["(\\d{2})(\\d{7})", "$1 $2", ["[34]"], "0$1"]
                ], "0"
            ],
            US: ["1", "011", "[2-9]\\d{9}|3\\d{6}", [10],
                [
                    ["(\\d{3})(\\d{4})", "$1-$2", ["310"], 0, 1],
                    ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", ["[2-9]"], 0, 1, "$1-$2-$3"]
                ], "1", 0, 0, 0, 0, 0, [
                    ["3052(?:0[0-8]|[1-9]\\d)\\d{4}|(?:2742|305[3-9])\\d{6}|(?:472|983)[2-47-9]\\d{6}|(?:2(?:0[1-35-9]|1[02-9]|2[03-57-9]|3[1459]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-47-9]|1[02-9]|2[013-79]|3[0-24679]|4[167]|5[0-2]|6[01349]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[179]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[0156]|5[01679]|6[0-279]|78|8[0-269])|7(?:0[1-46-8]|1[2-9]|2[04-8]|3[0-247]|4[0378]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[0168]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-3589]|8[04-69]))[2-9]\\d{6}"],
                    [""],
                    ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
                    ["900[2-9]\\d{6}"],
                    ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}"], 0, 0, 0, ["305209\\d{4}"]
                ]
            ],
            UY: ["598", "0(?:0|1[3-9]\\d)", "0004\\d{2,9}|[1249]\\d{7}|2\\d{3,4}|(?:[49]\\d|80)\\d{5}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
                [
                    ["(\\d{4,5})", "$1", ["21"]],
                    ["(\\d{3})(\\d{3,4})", "$1 $2", ["0"]],
                    ["(\\d{3})(\\d{4})", "$1 $2", ["[49]0|8"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"],
                    ["(\\d{4})(\\d{4})", "$1 $2", ["[124]"]],
                    ["(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["0"]],
                    ["(\\d{3})(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3 $4", ["0"]]
                ], "0", 0, 0, 0, 0, 0, 0, "00", " int. "
            ],
            UZ: ["998", "00", "(?:20|33|[5-9]\\d)\\d{7}", [9],
                [
                    ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-9]"]]
                ]
            ],
            VA: ["39", "00", "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}", [6, 7, 8, 9, 10, 11, 12], 0, 0, 0, 0, 0, 0, "06698"],
            VC: ["1", "011", "(?:[58]\\d\\d|784|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "784$1", 0, "784"],
            VE: ["58", "00", "[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}", [10],
                [
                    ["(\\d{3})(\\d{7})", "$1-$2", ["[24-689]"], "0$1"]
                ], "0"
            ],
            VG: ["1", "011", "(?:284|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-578]\\d{6})$|1", "284$1", 0, "284"],
            VI: ["1", "011", "[58]\\d{9}|(?:34|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "340$1", 0, "340"],
            VN: ["84", "00", "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}", [7, 8, 9, 10],
                [
                    ["(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", 1],
                    ["(\\d{4})(\\d{4,6})", "$1 $2", ["1"], 0, 1],
                    ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["6"], "0$1", 1],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[357-9]"], "0$1", 1],
                    ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", 1],
                    ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", 1]
                ], "0"
            ],
            VU: ["678", "00", "[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}", [5, 7],
                [
                    ["(\\d{3})(\\d{4})", "$1 $2", ["[57-9]"]]
                ]
            ],
            WF: ["681", "00", "(?:40|72|8\\d{4})\\d{4}|[89]\\d{5}", [6, 9],
                [
                    ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[47-9]"]],
                    ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]
                ]
            ],
            WS: ["685", "0", "(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}", [5, 6, 7, 10],
                [
                    ["(\\d{5})", "$1", ["[2-5]|6[1-9]"]],
                    ["(\\d{3})(\\d{3,7})", "$1 $2", ["[68]"]],
                    ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]
                ]
            ],
            XK: ["383", "00", "2\\d{7,8}|3\\d{7,11}|(?:4\\d\\d|[89]00)\\d{5}", [8, 9, 10, 11, 12],
                [
                    ["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2|39"], "0$1"],
                    ["(\\d{2})(\\d{7,10})", "$1 $2", ["3"], "0$1"]
                ], "0"
            ],
            YE: ["967", "00", "(?:1|7\\d)\\d{7}|[1-7]\\d{6}", [7, 8, 9],
                [
                    ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7(?:[24-6]|8[0-7])"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"]
                ], "0"
            ],
            YT: ["262", "00", "7093\\d{5}|(?:80|9\\d)\\d{7}|(?:26|63)9\\d{6}", [9], 0, "0", 0, 0, 0, 0, 0, [
                ["269(?:0[0-467]|15|5[0-4]|6\\d|[78]0)\\d{4}"],
                ["(?:639(?:0[0-79]|1[019]|[267]\\d|3[09]|40|5[05-9]|9[04-79])|7093[5-7])\\d{4}"],
                ["80\\d{7}"], 0, 0, 0, 0, 0, ["9(?:(?:39|47)8[01]|769\\d)\\d{4}"]
            ]],
            ZA: ["27", "00", "[1-79]\\d{8}|8\\d{4,9}", [5, 6, 7, 8, 9, 10],
                [
                    ["(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-9]"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]
                ], "0"
            ],
            ZM: ["260", "00", "800\\d{6}|(?:21|[579]\\d|63)\\d{7}", [9],
                [
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"],
                    ["(\\d{2})(\\d{7})", "$1 $2", ["[579]"], "0$1"]
                ], "0"
            ],
            ZW: ["263", "00", "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}", [5, 6, 7, 8, 9, 10],
                [
                    ["(\\d{3})(\\d{3,5})", "$1 $2", ["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"], "0$1"],
                    ["(\\d)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["[49]"], "0$1"],
                    ["(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"],
                    ["(\\d{2})(\\d{7})", "$1 $2", ["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2", "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"], "(0$1)"],
                    ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
                    ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)", "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"], "0$1"],
                    ["(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"],
                    ["(\\d{2})(\\d{3,5})", "$1 $2", ["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"], "0$1"],
                    ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["29[013-9]|39|54"], "0$1"],
                    ["(\\d{4})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258|5483"], "0$1"]
                ], "0"
            ]
        },
        nonGeographic: {
            800: ["800", 0, "(?:00|[1-9]\\d)\\d{6}", [8],
                [
                    ["(\\d{4})(\\d{4})", "$1 $2", ["\\d"]]
                ], 0, 0, 0, 0, 0, 0, [0, 0, ["(?:00|[1-9]\\d)\\d{6}"]]
            ],
            808: ["808", 0, "[1-9]\\d{7}", [8],
                [
                    ["(\\d{4})(\\d{4})", "$1 $2", ["[1-9]"]]
                ], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, ["[1-9]\\d{7}"]]
            ],
            870: ["870", 0, "7\\d{11}|[235-7]\\d{8}", [9, 12],
                [
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-7]"]]
                ], 0, 0, 0, 0, 0, 0, [0, ["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"], 0, 0, 0, 0, 0, 0, ["2\\d{8}", [9]]]
            ],
            878: ["878", 0, "10\\d{10}", [12],
                [
                    ["(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3", ["1"]]
                ], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["10\\d{10}"]]
            ],
            881: ["881", 0, "6\\d{9}|[0-36-9]\\d{8}", [9, 10],
                [
                    ["(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[0-37-9]"]],
                    ["(\\d)(\\d{3})(\\d{5,6})", "$1 $2 $3", ["6"]]
                ], 0, 0, 0, 0, 0, 0, [0, ["6\\d{9}|[0-36-9]\\d{8}"]]
            ],
            882: ["882", 0, "[13]\\d{6}(?:\\d{2,5})?|[19]\\d{7}|(?:[25]\\d\\d|4)\\d{7}(?:\\d{2})?", [7, 8, 9, 10, 11, 12],
                [
                    ["(\\d{2})(\\d{5})", "$1 $2", ["16|342"]],
                    ["(\\d{2})(\\d{6})", "$1 $2", ["49"]],
                    ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["1[36]|9"]],
                    ["(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"]],
                    ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["16"]],
                    ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|23|3(?:[15]|4[57])|4|51"]],
                    ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["34"]],
                    ["(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["[1-35]"]]
                ], 0, 0, 0, 0, 0, 0, [0, ["342\\d{4}|(?:337|49)\\d{6}|(?:3(?:2|47|7\\d{3})|50\\d{3})\\d{7}", [7, 8, 9, 10, 12]], 0, 0, 0, ["348[57]\\d{7}", [11]], 0, 0, ["1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:345\\d|9[89])\\d{6}|(?:10|2(?:3|85\\d)|3(?:[15]|[69]\\d\\d)|4[15-8]|51)\\d{8}"]]
            ],
            883: ["883", 0, "(?:[1-4]\\d|51)\\d{6,10}", [8, 9, 10, 11, 12],
                [
                    ["(\\d{3})(\\d{3})(\\d{2,8})", "$1 $2 $3", ["[14]|2[24-689]|3[02-689]|51[24-9]"]],
                    ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"]],
                    ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["21"]],
                    ["(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["51[13]"]],
                    ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[235]"]]
                ], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["(?:2(?:00\\d\\d|10)|(?:370[1-9]|51\\d0)\\d)\\d{7}|51(?:00\\d{5}|[24-9]0\\d{4,7})|(?:1[0-79]|2[24-689]|3[02-689]|4[0-4])0\\d{5,9}"]]
            ],
            888: ["888", 0, "\\d{11}", [11],
                [
                    ["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]
                ], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, ["\\d{11}"]]
            ],
            979: ["979", 0, "[1359]\\d{8}", [9],
                [
                    ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[1359]"]]
                ], 0, 0, 0, 0, 0, 0, [0, 0, 0, ["[1359]\\d{8}"]]
            ]
        }
    };

    function ht(i, d) {
        var a = Array.prototype.slice.call(d);
        return a.push(Id), i.apply(this, a)
    }

    function pt(i, d) {
        i = i.split("-"), d = d.split("-");
        for (var a = i[0].split("."), o = d[0].split("."), p = 0; p < 3; p++) {
            var g = Number(a[p]),
                f = Number(o[p]);
            if (g > f) return 1;
            if (f > g) return -1;
            if (!isNaN(g) && isNaN(f)) return 1;
            if (isNaN(g) && !isNaN(f)) return -1
        }
        return i[1] && d[1] ? i[1] > d[1] ? 1 : i[1] < d[1] ? -1 : 0 : !i[1] && d[1] ? 1 : i[1] && !d[1] ? -1 : 0
    }
    var Vd = {}.constructor;

    function dt(i) {
        return i != null && i.constructor === Vd
    }

    function Se(i) {
        return Se = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(d) {
            return typeof d
        } : function(d) {
            return d && typeof Symbol == "function" && d.constructor === Symbol && d !== Symbol.prototype ? "symbol" : typeof d
        }, Se(i)
    }

    function ze(i, d) {
        if (!(i instanceof d)) throw new TypeError("Cannot call a class as a function")
    }

    function gt(i, d) {
        for (var a = 0; a < d.length; a++) {
            var o = d[a];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(i, Cd(o.key), o)
        }
    }

    function Ue(i, d, a) {
        return d && gt(i.prototype, d), a && gt(i, a), Object.defineProperty(i, "prototype", {
            writable: !1
        }), i
    }

    function Cd(i) {
        var d = Md(i, "string");
        return Se(d) == "symbol" ? d : d + ""
    }

    function Md(i, d) {
        if (Se(i) != "object" || !i) return i;
        var a = i[Symbol.toPrimitive];
        if (a !== void 0) {
            var o = a.call(i, d || "default");
            if (Se(o) != "object") return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (d === "string" ? String : Number)(i)
    }
    var Ad = "1.2.0",
        Fd = "1.7.35",
        ft = " ext. ",
        Rd = /^\d+$/,
        wt = function() {
            function i(d) {
                ze(this, i), zd(d), this.metadata = d, yt.call(this, d)
            }
            return Ue(i, [{
                key: "getCountries",
                value: function() {
                    return Object.keys(this.metadata.countries).filter(function(a) {
                        return a !== "001"
                    })
                }
            }, {
                key: "getCountryMetadata",
                value: function(a) {
                    return this.metadata.countries[a]
                }
            }, {
                key: "nonGeographic",
                value: function() {
                    if (!(this.v1 || this.v2 || this.v3)) return this.metadata.nonGeographic || this.metadata.nonGeographical
                }
            }, {
                key: "hasCountry",
                value: function(a) {
                    return this.getCountryMetadata(a) !== void 0
                }
            }, {
                key: "hasCallingCode",
                value: function(a) {
                    if (this.getCountryCodesForCallingCode(a)) return !0;
                    if (this.nonGeographic()) {
                        if (this.nonGeographic()[a]) return !0
                    } else {
                        var o = this.countryCallingCodes()[a];
                        if (o && o.length === 1 && o[0] === "001") return !0
                    }
                }
            }, {
                key: "isNonGeographicCallingCode",
                value: function(a) {
                    return this.nonGeographic() ? !!this.nonGeographic()[a] : !this.getCountryCodesForCallingCode(a)
                }
            }, {
                key: "country",
                value: function(a) {
                    return this.selectNumberingPlan(a)
                }
            }, {
                key: "selectNumberingPlan",
                value: function(a, o) {
                    if (a && Rd.test(a) && (o = a, a = null), a && a !== "001") {
                        if (!this.hasCountry(a)) throw new Error("Unknown country: ".concat(a));
                        this.numberingPlan = new ut(this.getCountryMetadata(a), this)
                    } else if (o) {
                        if (!this.hasCallingCode(o)) throw new Error("Unknown calling code: ".concat(o));
                        this.numberingPlan = new ut(this.getNumberingPlanMetadata(o), this)
                    } else this.numberingPlan = void 0;
                    return this
                }
            }, {
                key: "getCountryCodesForCallingCode",
                value: function(a) {
                    var o = this.countryCallingCodes()[a];
                    if (o) return o.length === 1 && o[0].length === 3 ? void 0 : o
                }
            }, {
                key: "getCountryCodeForCallingCode",
                value: function(a) {
                    var o = this.getCountryCodesForCallingCode(a);
                    if (o) return o[0]
                }
            }, {
                key: "getNumberingPlanMetadata",
                value: function(a) {
                    var o = this.getCountryCodeForCallingCode(a);
                    if (o) return this.getCountryMetadata(o);
                    if (this.nonGeographic()) {
                        var p = this.nonGeographic()[a];
                        if (p) return p
                    } else {
                        var g = this.countryCallingCodes()[a];
                        if (g && g.length === 1 && g[0] === "001") return this.metadata.countries["001"]
                    }
                }
            }, {
                key: "countryCallingCode",
                value: function() {
                    return this.numberingPlan.callingCode()
                }
            }, {
                key: "IDDPrefix",
                value: function() {
                    return this.numberingPlan.IDDPrefix()
                }
            }, {
                key: "defaultIDDPrefix",
                value: function() {
                    return this.numberingPlan.defaultIDDPrefix()
                }
            }, {
                key: "nationalNumberPattern",
                value: function() {
                    return this.numberingPlan.nationalNumberPattern()
                }
            }, {
                key: "possibleLengths",
                value: function() {
                    return this.numberingPlan.possibleLengths()
                }
            }, {
                key: "formats",
                value: function() {
                    return this.numberingPlan.formats()
                }
            }, {
                key: "nationalPrefixForParsing",
                value: function() {
                    return this.numberingPlan.nationalPrefixForParsing()
                }
            }, {
                key: "nationalPrefixTransformRule",
                value: function() {
                    return this.numberingPlan.nationalPrefixTransformRule()
                }
            }, {
                key: "leadingDigits",
                value: function() {
                    return this.numberingPlan.leadingDigits()
                }
            }, {
                key: "hasTypes",
                value: function() {
                    return this.numberingPlan.hasTypes()
                }
            }, {
                key: "type",
                value: function(a) {
                    return this.numberingPlan.type(a)
                }
            }, {
                key: "ext",
                value: function() {
                    return this.numberingPlan.ext()
                }
            }, {
                key: "countryCallingCodes",
                value: function() {
                    return this.v1 ? this.metadata.country_phone_code_to_countries : this.metadata.country_calling_codes
                }
            }, {
                key: "chooseCountryByCountryCallingCode",
                value: function(a) {
                    return this.selectNumberingPlan(a)
                }
            }, {
                key: "hasSelectedNumberingPlan",
                value: function() {
                    return this.numberingPlan !== void 0
                }
            }])
        }(),
        ut = function() {
            function i(d, a) {
                ze(this, i), this.globalMetadataObject = a, this.metadata = d, yt.call(this, a.metadata)
            }
            return Ue(i, [{
                key: "callingCode",
                value: function() {
                    return this.metadata[0]
                }
            }, {
                key: "getDefaultCountryMetadataForRegion",
                value: function() {
                    return this.globalMetadataObject.getNumberingPlanMetadata(this.callingCode())
                }
            }, {
                key: "IDDPrefix",
                value: function() {
                    if (!(this.v1 || this.v2)) return this.metadata[1]
                }
            }, {
                key: "defaultIDDPrefix",
                value: function() {
                    if (!(this.v1 || this.v2)) return this.metadata[12]
                }
            }, {
                key: "nationalNumberPattern",
                value: function() {
                    return this.v1 || this.v2 ? this.metadata[1] : this.metadata[2]
                }
            }, {
                key: "possibleLengths",
                value: function() {
                    if (!this.v1) return this.metadata[this.v2 ? 2 : 3]
                }
            }, {
                key: "_getFormats",
                value: function(a) {
                    return a[this.v1 ? 2 : this.v2 ? 3 : 4]
                }
            }, {
                key: "formats",
                value: function() {
                    var a = this,
                        o = this._getFormats(this.metadata) || this._getFormats(this.getDefaultCountryMetadataForRegion()) || [];
                    return o.map(function(p) {
                        return new Gd(p, a)
                    })
                }
            }, {
                key: "nationalPrefix",
                value: function() {
                    return this.metadata[this.v1 ? 3 : this.v2 ? 4 : 5]
                }
            }, {
                key: "_getNationalPrefixFormattingRule",
                value: function(a) {
                    return a[this.v1 ? 4 : this.v2 ? 5 : 6]
                }
            }, {
                key: "nationalPrefixFormattingRule",
                value: function() {
                    return this._getNationalPrefixFormattingRule(this.metadata) || this._getNationalPrefixFormattingRule(this.getDefaultCountryMetadataForRegion())
                }
            }, {
                key: "_nationalPrefixForParsing",
                value: function() {
                    return this.metadata[this.v1 ? 5 : this.v2 ? 6 : 7]
                }
            }, {
                key: "nationalPrefixForParsing",
                value: function() {
                    return this._nationalPrefixForParsing() || this.nationalPrefix()
                }
            }, {
                key: "nationalPrefixTransformRule",
                value: function() {
                    return this.metadata[this.v1 ? 6 : this.v2 ? 7 : 8]
                }
            }, {
                key: "_getNationalPrefixIsOptionalWhenFormatting",
                value: function() {
                    return !!this.metadata[this.v1 ? 7 : this.v2 ? 8 : 9]
                }
            }, {
                key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
                value: function() {
                    return this._getNationalPrefixIsOptionalWhenFormatting(this.metadata) || this._getNationalPrefixIsOptionalWhenFormatting(this.getDefaultCountryMetadataForRegion())
                }
            }, {
                key: "leadingDigits",
                value: function() {
                    return this.metadata[this.v1 ? 8 : this.v2 ? 9 : 10]
                }
            }, {
                key: "types",
                value: function() {
                    return this.metadata[this.v1 ? 9 : this.v2 ? 10 : 11]
                }
            }, {
                key: "hasTypes",
                value: function() {
                    return this.types() && this.types().length === 0 ? !1 : !!this.types()
                }
            }, {
                key: "type",
                value: function(a) {
                    if (this.hasTypes() && kt(this.types(), a)) return new Hd(kt(this.types(), a), this)
                }
            }, {
                key: "ext",
                value: function() {
                    return this.v1 || this.v2 ? ft : this.metadata[13] || ft
                }
            }])
        }(),
        Gd = function() {
            function i(d, a) {
                ze(this, i), this._format = d, this.metadata = a
            }
            return Ue(i, [{
                key: "pattern",
                value: function() {
                    return this._format[0]
                }
            }, {
                key: "format",
                value: function() {
                    return this._format[1]
                }
            }, {
                key: "leadingDigitsPatterns",
                value: function() {
                    return this._format[2] || []
                }
            }, {
                key: "nationalPrefixFormattingRule",
                value: function() {
                    return this._format[3] || this.metadata.nationalPrefixFormattingRule()
                }
            }, {
                key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
                value: function() {
                    return !!this._format[4] || this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat()
                }
            }, {
                key: "nationalPrefixIsMandatoryWhenFormattingInNationalFormat",
                value: function() {
                    return this.usesNationalPrefix() && !this.nationalPrefixIsOptionalWhenFormattingInNationalFormat()
                }
            }, {
                key: "usesNationalPrefix",
                value: function() {
                    return !!(this.nationalPrefixFormattingRule() && !Od.test(this.nationalPrefixFormattingRule()))
                }
            }, {
                key: "internationalFormat",
                value: function() {
                    return this._format[5] || this.format()
                }
            }])
        }(),
        Od = /^\(?\$1\)?$/,
        Hd = function() {
            function i(d, a) {
                ze(this, i), this.type = d, this.metadata = a
            }
            return Ue(i, [{
                key: "pattern",
                value: function() {
                    return this.metadata.v1 ? this.type : this.type[0]
                }
            }, {
                key: "possibleLengths",
                value: function() {
                    if (!this.metadata.v1) return this.type[1] || this.metadata.possibleLengths()
                }
            }])
        }();

    function kt(i, d) {
        switch (d) {
            case "FIXED_LINE":
                return i[0];
            case "MOBILE":
                return i[1];
            case "TOLL_FREE":
                return i[2];
            case "PREMIUM_RATE":
                return i[3];
            case "PERSONAL_NUMBER":
                return i[4];
            case "VOICEMAIL":
                return i[5];
            case "UAN":
                return i[6];
            case "PAGER":
                return i[7];
            case "VOIP":
                return i[8];
            case "SHARED_COST":
                return i[9]
        }
    }

    function zd(i) {
        if (!i) throw new Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");
        if (!dt(i) || !dt(i.countries)) throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(dt(i) ? "an object of shape: { " + Object.keys(i).join(", ") + " }" : "a " + Ud(i) + ": " + i, "."))
    }
    var Ud = function(d) {
        return Se(d)
    };

    function Kd(i, d) {
        if (d = new wt(d), d.hasCountry(i)) return d.selectNumberingPlan(i).countryCallingCode();
        throw new Error("Unknown country: ".concat(i))
    }

    function yt(i) {
        var d = i.version;
        typeof d == "number" ? (this.v1 = d === 1, this.v2 = d === 2, this.v3 = d === 3, this.v4 = d === 4) : d ? pt(d, Ad) === -1 ? this.v2 = !0 : pt(d, Fd) === -1 ? this.v3 = !0 : this.v4 = !0 : this.v1 = !0
    }

    function qd(i) {
        return new wt(i).getCountries()
    }

    function jd() {
        return ht(qd, arguments)
    }

    function bt() {
        return ht(Kd, arguments)
    }
    const Wd = {
        AC: "Ascension Island",
        AD: "Andorra",
        AE: "United Arab Emirates",
        AF: "Afghanistan",
        AG: "Antigua and Barbuda",
        AI: "Anguilla",
        AL: "Albania",
        AM: "Armenia",
        AO: "Angola",
        AR: "Argentina",
        AS: "American Samoa",
        AT: "Austria",
        AU: "Australia",
        AW: "Aruba",
        AX: "\xC5land Islands",
        AZ: "Azerbaijan",
        BA: "Bosnia and Herzegovina",
        BB: "Barbados",
        BD: "Bangladesh",
        BE: "Belgium",
        BF: "Burkina Faso",
        BG: "Bulgaria",
        BH: "Bahrain",
        BI: "Burundi",
        BJ: "Benin",
        BL: "Saint Barth\xE9lemy",
        BM: "Bermuda",
        BN: "Brunei Darussalam",
        BO: "Bolivia",
        BQ: "Caribbean Netherlands",
        BR: "Brazil",
        BS: "Bahamas",
        BT: "Bhutan",
        BW: "Botswana",
        BY: "Belarus",
        BZ: "Belize",
        CA: "Canada",
        CC: "Cocos (Keeling) Islands",
        CD: "Congo (Democratic Republic)",
        CF: "Central African Republic",
        CG: "Congo",
        CH: "Switzerland",
        CI: "C\xF4te d'Ivoire",
        CK: "Cook Islands",
        CL: "Chile",
        CM: "Cameroon",
        CN: "China",
        CO: "Colombia",
        CR: "Costa Rica",
        CU: "Cuba",
        CV: "Cabo Verde",
        CW: "Cura\xE7ao",
        CX: "Christmas Island",
        CY: "Cyprus",
        CZ: "Czech Republic",
        DE: "Germany",
        DJ: "Djibouti",
        DK: "Denmark",
        DM: "Dominica",
        DO: "Dominican Republic",
        DZ: "Algeria",
        EC: "Ecuador",
        EE: "Estonia",
        EG: "Egypt",
        EH: "Western Sahara",
        ER: "Eritrea",
        ES: "Spain",
        ET: "Ethiopia",
        FI: "Finland",
        FJ: "Fiji",
        FK: "Falkland Islands",
        FM: "Micronesia",
        FO: "Faroe Islands",
        FR: "France",
        GA: "Gabon",
        GB: "United Kingdom",
        GD: "Grenada",
        GE: "Georgia",
        GF: "French Guiana",
        GG: "Guernsey",
        GH: "Ghana",
        GI: "Gibraltar",
        GL: "Greenland",
        GM: "Gambia",
        GN: "Guinea",
        GP: "Guadeloupe",
        GQ: "Equatorial Guinea",
        GR: "Greece",
        GT: "Guatemala",
        GU: "Guam",
        GW: "Guinea-Bissau",
        GY: "Guyana",
        HK: "Hong Kong",
        HN: "Honduras",
        HR: "Croatia",
        HT: "Haiti",
        HU: "Hungary",
        ID: "Indonesia",
        IE: "Ireland",
        IL: "Israel",
        IM: "Isle of Man",
        IN: "India",
        IO: "British Indian Ocean Territory",
        IQ: "Iraq",
        IR: "Iran",
        IS: "Iceland",
        IT: "Italy",
        JE: "Jersey",
        JM: "Jamaica",
        JO: "Jordan",
        JP: "Japan",
        KE: "Kenya",
        KG: "Kyrgyzstan",
        KH: "Cambodia",
        KI: "Kiribati",
        KM: "Comoros",
        KN: "Saint Kitts and Nevis",
        KP: "North Korea",
        KR: "South Korea",
        KW: "Kuwait",
        KY: "Cayman Islands",
        KZ: "Kazakhstan",
        LA: "Laos",
        LB: "Lebanon",
        LC: "Saint Lucia",
        LI: "Liechtenstein",
        LK: "Sri Lanka",
        LR: "Liberia",
        LS: "Lesotho",
        LT: "Lithuania",
        LU: "Luxembourg",
        LV: "Latvia",
        LY: "Libya",
        MA: "Morocco",
        MC: "Monaco",
        MD: "Moldova",
        ME: "Montenegro",
        MF: "Saint Martin",
        MG: "Madagascar",
        MH: "Marshall Islands",
        MK: "North Macedonia",
        ML: "Mali",
        MM: "Myanmar",
        MN: "Mongolia",
        MO: "Macao",
        MP: "Northern Mariana Islands",
        MQ: "Martinique",
        MR: "Mauritania",
        MS: "Montserrat",
        MT: "Malta",
        MU: "Mauritius",
        MV: "Maldives",
        MW: "Malawi",
        MX: "Mexico",
        MY: "Malaysia",
        MZ: "Mozambique",
        NA: "Namibia",
        NC: "New Caledonia",
        NE: "Niger",
        NF: "Norfolk Island",
        NG: "Nigeria",
        NI: "Nicaragua",
        NL: "Netherlands",
        NO: "Norway",
        NP: "Nepal",
        NR: "Nauru",
        NU: "Niue",
        NZ: "New Zealand",
        OM: "Oman",
        PA: "Panama",
        PE: "Peru",
        PF: "French Polynesia",
        PG: "Papua New Guinea",
        PH: "Philippines",
        PK: "Pakistan",
        PL: "Poland",
        PM: "Saint Pierre and Miquelon",
        PR: "Puerto Rico",
        PS: "Palestine",
        PT: "Portugal",
        PW: "Palau",
        PY: "Paraguay",
        QA: "Qatar",
        RE: "R\xE9union",
        RO: "Romania",
        RS: "Serbia",
        RU: "Russia",
        RW: "Rwanda",
        SA: "Saudi Arabia",
        SB: "Solomon Islands",
        SC: "Seychelles",
        SD: "Sudan",
        SE: "Sweden",
        SG: "Singapore",
        SH: "Saint Helena",
        SI: "Slovenia",
        SJ: "Svalbard and Jan Mayen",
        SK: "Slovakia",
        SL: "Sierra Leone",
        SM: "San Marino",
        SN: "Senegal",
        SO: "Somalia",
        SR: "Suriname",
        SS: "South Sudan",
        ST: "Sao Tome and Principe",
        SV: "El Salvador",
        SX: "Sint Maarten",
        SY: "Syria",
        SZ: "Eswatini",
        TA: "Tristan da Cunha",
        TC: "Turks and Caicos Islands",
        TD: "Chad",
        TG: "Togo",
        TH: "Thailand",
        TJ: "Tajikistan",
        TK: "Tokelau",
        TL: "Timor-Leste",
        TM: "Turkmenistan",
        TN: "Tunisia",
        TO: "Tonga",
        TR: "Turkey",
        TT: "Trinidad and Tobago",
        TV: "Tuvalu",
        TW: "Taiwan",
        TZ: "Tanzania",
        UA: "Ukraine",
        UG: "Uganda",
        US: "United States",
        UY: "Uruguay",
        UZ: "Uzbekistan",
        VA: "Vatican City",
        VC: "Saint Vincent and the Grenadines",
        VE: "Venezuela",
        VG: "British Virgin Islands",
        VI: "U.S. Virgin Islands",
        VN: "Vietnam",
        VU: "Vanuatu",
        WF: "Wallis and Futuna",
        WS: "Samoa",
        XK: "Kosovo",
        YE: "Yemen",
        YT: "Mayotte",
        ZA: "South Africa",
        ZM: "Zambia",
        ZW: "Zimbabwe"
    };

    function St(i) {
        const d = i.toUpperCase().split("").map(a => 127397 + a.charCodeAt(0));
        return String.fromCodePoint(...d)
    }

    function Jd() {
        const i = [];
        return jd().forEach(a => {
            const o = Wd[a];
            if (o) try {
                const p = bt(a);
                i.push({
                    code: a,
                    name: o,
                    callingCode: `+${p}`,
                    flag: St(a)
                })
            } catch {
                console.warn(`Could not get calling code for ${a}: ${o}`)
            } else try {
                const p = bt(a);
                i.push({
                    code: a,
                    name: a,
                    callingCode: `+${p}`,
                    flag: St(a)
                })
            } catch {
                console.warn(`Could not get calling code for ${a}`)
            }
        }), i.sort((a, o) => a.code === "US" ? -1 : o.code === "US" ? 1 : a.name.localeCompare(o.name))
    }
    Jd();
    const Zd = {
            key: 0,
            class: "phw-d-flex phw-align-items-center",
            "data-ps": "015f7568-div-42"
        },
        Yd = ["aria-label"],
        Xd = {
            class: "phw-icon-ctr",
            "data-ps": "015f7568-span-72"
        },
        Qd = {
            class: "icon phw-i-sz-3",
            fill: "currentcolor",
            "aria-hidden": "true",
            "data-ps": "015f7568-svg-14"
        },
        vd = {
            href: "#phw-cns-icon-search",
            "data-ps": "015f7568-use-14"
        },
        ea = ["aria-hidden"],
        ta = ["aria-label"],
        da = {
            key: 0,
            class: "agp-content-block",
            "data-ps": "015f7568-div-2"
        },
        aa = {
            key: 0,
            "data-ph-at-id": "agp-heading",
            class: "agp-heading",
            "data-ps": "015f7568-h1-1"
        },
        ia = {
            "data-tag-type": "p",
            class: "apg-jobs-count",
            "data-ps": "015f7568-p-1"
        },
        na = ["aria-label"],
        sa = {
            class: "phw-icon-ctr",
            "data-ps": "015f7568-span-1"
        },
        la = {
            class: "icon",
            fill: "currentcolor",
            "aria-hidden": "true",
            "data-ps": "015f7568-svg-1"
        },
        ra = {
            href: "#phw-cns-icon-search",
            "data-ps": "015f7568-use-1"
        },
        oa = {
            class: "phw-posn-relative phw-width-4",
            "data-ps": "015f7568-div-44"
        },
        ca = ["aria-label"],
        $a = {
            class: "phw-icon-ctr",
            "data-ps": "015f7568-span-2"
        },
        ha = {
            class: "phw-icon-flip",
            fill: "currentcolor",
            "aria-hidden": "true",
            "data-ps": "015f7568-svg-2"
        },
        pa = {
            href: "#phw-cns-icon-arrow-left",
            "data-ps": "015f7568-use-2"
        },
        ga = ["aria-label"],
        fa = {
            class: "phw-icon-ctr",
            "data-ps": "015f7568-span-3"
        },
        wa = {
            class: "phw-i-sz-3 phw-icon-flip",
            fill: "currentcolor",
            "aria-hidden": "true",
            "data-ps": "015f7568-svg-3"
        },
        ua = {
            href: "#phw-cns-icon-arrow-left",
            "data-ps": "015f7568-use-3"
        },
        ka = {
            key: 2,
            class: "phw-icon-ctr phw-input-icon-left",
            "data-ps": "015f7568-span-4"
        },
        ya = {
            class: "phw-icon phw-i-sz-4",
            fill: "currentcolor",
            "aria-hidden": "true",
            "data-ps": "015f7568-svg-4"
        },
        ba = ["href"],
        Sa = {
            for: "typehead",
            class: "phw-visually-hidden",
            "data-ps": "015f7568-label-1"
        },
        ma = ["value", "placeholder", "aria-describedby", "aria-expanded"],
        Ba = ["aria-label"],
        Ea = {
            class: "phw-icon-ctr",
            "data-ps": "015f7568-span-5"
        },
        _a = {
            fill: "currentcolor",
            "aria-hidden": "true",
            class: "phw-icon phw-i-sz-4",
            "data-ps": "015f7568-svg-5"
        },
        Pa = {
            href: "#phw-cns-icon-close",
            "data-ps": "015f7568-use-5"
        },
        Da = ["aria-hidden", "aria-label"],
        xa = {
            key: 0,
            class: "gsdd-search-type-ahead gsdd-onclick-category phw-pl-3 phw-pr-3 phw-pl-lg-2 phw-pr-lg-2 phw-pl-sm-1 phw-pr-sm-1",
            "data-ph-at-id": "onclick-category",
            "data-ps": "015f7568-div-9"
        },
        Ta = {
            class: "gsdd-search-categories phw-p-1 phw-pl-0 phw-pr-0 phw-p-xl-050 phw-pl-xl-0 phw-pr-xl-0",
            "data-ps": "015f7568-div-10"
        },
        Na = ["data-ph-at-total-data-count", "aria-hidden"],
        La = {
            class: "phw-g-text-small-secondary",
            "data-ps": "015f7568-span-6"
        },
        Ia = ["aria-setsize", "aria-posinset", "onClick"],
        Va = ["data-assign", "data-ph-at-data-text", "data-ph-at-data-count"],
        Ca = {
            key: 0,
            class: "phw-icon-ctr",
            "data-ps": "015f7568-span-7"
        },
        Ma = {
            class: "icon",
            "aria-hidden": "true",
            fill: "currentcolor",
            "data-ps": "015f7568-svg-6"
        },
        Aa = {
            href: "#phw-cns-icon-briefcase-fill",
            "data-ps": "015f7568-use-6"
        },
        Fa = {
            class: "phw-visually-hidden",
            "data-ps": "015f7568-span-8"
        },
        Ra = {
            class: "phw-ws-nowrap phw-overflow-hidden phw-text-ellipsis",
            "data-ps": "015f7568-span-73"
        },
        Ga = {
            key: 0,
            class: "phw-visually-hidden",
            "data-ps": "015f7568-span-11"
        },
        Oa = {
            key: 1,
            class: "phw-visually-hidden",
            "data-ps": "015f7568-span-12"
        },
        Ha = ["aria-hidden", "data-ph-at-data-count"],
        za = {
            class: "phw-g-text-small-secondary",
            "data-ps": "015f7568-span-13"
        },
        Ua = ["onClick"],
        Ka = ["title", "data-ph-tevent-attr-trait60"],
        qa = ["innerHTML"],
        ja = {
            key: 1,
            role: "option",
            "data-ph-at-id": "no-data",
            "data-ps": "015f7568-li-5"
        },
        Wa = {
            "data-ph-at-id": "no-data-text",
            "data-ps": "015f7568-span-15"
        },
        Ja = ["data-phfc"],
        Za = ["data-ph-at-data-count", "aria-hidden"],
        Ya = {
            class: "phw-g-text-small-secondary",
            "data-ps": "015f7568-span-16"
        },
        Xa = ["aria-setsize", "aria-posinset", "onClick"],
        Qa = ["data-assign", "data-ph-tevent-attr-trait60", "data-ph-tevent-attr-trait14", "data-title", "data-jobid", "data-ph-at-job-title-text", "data-ph-at-job-id-text", "data-ph-at-job-seqno-text", "data-ph-at-job-location-text", "data-ph-at-job-category-text"],
        va = {
            class: "phw-visually-hidden",
            "data-ps": "015f7568-span-17"
        },
        ei = {
            "data-ph-at-id": "jobtitle-text",
            "data-ps": "015f7568-span-18"
        },
        ti = ["innerHTML"],
        di = {
            class: "phw-visually-hidden",
            "data-ps": "015f7568-span-21"
        },
        ai = ["data-ph-at-id"],
        ii = {
            key: 0,
            class: "phw-icon-ctr",
            "data-ps": "015f7568-span-23"
        },
        ni = {
            fill: "currentcolor",
            "aria-hidden": "true",
            "data-ps": "015f7568-svg-7"
        },
        si = ["href"],
        li = ["data-ph-at-data-count", "aria-hidden"],
        ri = {
            class: "phw-g-text-small-secondary",
            "data-ps": "015f7568-span-25"
        },
        oi = ["aria-setsize", "aria-posinset", "onClick"],
        ci = ["title", "data-ph-tevent-attr-trait60"],
        $i = {
            class: "phw-visually-hidden",
            "data-ps": "015f7568-span-26"
        },
        hi = ["innerHTML"],
        pi = ["data-ph-at-data-count", "aria-hidden"],
        gi = {
            class: "phw-g-text-small-secondary",
            "data-ps": "015f7568-span-28"
        },
        fi = ["aria-setsize", "aria-posinset", "onClick"],
        wi = ["data-assign", "data-ph-tevent-attr-trait60", "data-category", "data-ph-at-data-text", "data-ph-at-data-count"],
        ui = {
            class: "phw-visually-hidden",
            "data-ps": "015f7568-span-29"
        },
        ki = {
            "data-ph-at-id": "joblocation-text",
            "data-ps": "015f7568-span-30"
        },
        yi = {
            class: "phw-visually-hidden",
            "data-ps": "015f7568-span-71"
        },
        bi = ["data-ph-at-data-count", "aria-hidden"],
        Si = {
            class: "phw-g-text-small-secondary",
            "data-ps": "015f7568-span-32"
        },
        mi = ["aria-setsize", "aria-posinset", "onClick"],
        Bi = ["data-assign", "data-ph-tevent-attr-trait60", "data-category", "data-ph-at-data-text", "data-ph-at-data-count"],
        Ei = {
            class: "phw-visually-hidden",
            "data-ps": "015f7568-span-33"
        },
        _i = {
            key: "jobCategoryText",
            "data-ph-at-id": "jobcategory-text",
            "data-ps": "015f7568-span-34"
        },
        Pi = {
            key: 0,
            class: "phw-icon-ctr",
            "data-ps": "015f7568-span-35"
        },
        Di = {
            fill: "currentcolor",
            "aria-hidden": "true",
            "data-ps": "015f7568-svg-8"
        },
        xi = {
            href: "#phw-cns-icon-briefcase-fill",
            "data-ps": "015f7568-use-8"
        },
        Ti = {
            key: 0,
            class: "phw-visually-hidden",
            "data-ps": "015f7568-span-38"
        },
        Ni = {
            key: 1,
            class: "phw-visually-hidden",
            "data-ps": "015f7568-span-39"
        },
        Li = ["data-ph-at-data-count", "aria-hidden"],
        Ii = {
            class: "phw-g-text-small-secondary",
            "data-ps": "015f7568-span-40"
        },
        Vi = ["aria-setsize", "aria-posinset", "onClick"],
        Ci = ["data-assign", "data-ph-tevent-attr-trait60", "data-ph-at-data-text"],
        Mi = {
            class: "phw-visually-hidden",
            "data-ps": "015f7568-span-41"
        },
        Ai = {
            key: "recentSearchText",
            "data-ph-at-id": "recentsearch-text",
            "data-ps": "015f7568-span-42"
        },
        Fi = {
            class: "phw-icon-ctr",
            "data-ps": "015f7568-span-43"
        },
        Ri = {
            fill: "currentcolor",
            "aria-hidden": "true",
            "data-ps": "015f7568-svg-9"
        },
        Gi = {
            href: "#phw-cns-icon-recent-search",
            "data-ps": "015f7568-use-9"
        },
        Oi = ["data-ph-at-data-count", "aria-hidden"],
        Hi = {
            class: "phw-g-text-small-secondary",
            "data-ps": "015f7568-span-45"
        },
        zi = ["aria-setsize", "aria-posinset", "onClick"],
        Ui = ["data-assign", "data-ph-tevent-attr-trait60", "data-ph-at-data-text"],
        Ki = {
            class: "phw-visually-hidden",
            "data-ps": "015f7568-span-46"
        },
        qi = {
            key: "suggestedKeywordText",
            "data-ph-at-id": "suggestedkeyword-text",
            "data-ps": "015f7568-span-47"
        },
        ji = {
            key: 3,
            role: "option",
            class: "no-result phw-pl-2 phw-pr-2 phw-p-1",
            "data-ps": "015f7568-div-30"
        },
        Wi = {
            key: 0,
            id: "icon-global-search-header-txt",
            class: "phw-visually-hidden phw-d-none"
        },
        Ji = {
            "aria-live": "polite",
            "aria-atomic": "true",
            class: "phw-visually-hidden",
            "data-ps": "015f7568-div-31"
        },
        Zi = {
            key: 0,
            "data-ps": "015f7568-span-48"
        },
        Yi = {
            key: 0,
            "data-ps": "015f7568-span-49"
        },
        Xi = {
            key: 1,
            "data-ps": "015f7568-span-50"
        },
        Qi = {
            key: 2,
            "data-ps": "015f7568-span-51"
        },
        vi = {
            key: 3,
            "data-ps": "015f7568-span-52"
        },
        en = {
            key: 4,
            "data-ps": "015f7568-span-53"
        },
        tn = {
            key: 5,
            "data-ps": "015f7568-span-54"
        },
        dn = {
            "aria-live": "polite",
            "aria-atomic": "true",
            class: "phw-visually-hidden",
            "data-ps": "015f7568-div-32"
        },
        an = {
            key: 0,
            "data-ps": "015f7568-span-55"
        },
        nn = ["aria-label"],
        sn = {
            class: "phw-icon-ctr",
            "data-ps": "015f7568-span-56"
        },
        ln = {
            class: "phw-icon-flip",
            fill: "currentcolor",
            "aria-hidden": "true",
            "data-ps": "015f7568-svg-10"
        },
        rn = {
            href: "#phw-cns-icon-arrow-left",
            "data-ps": "015f7568-use-10"
        },
        on = {
            key: 1,
            class: "phw-icon-ctr phw-input-icon-left",
            "data-ps": "015f7568-span-57"
        },
        cn = {
            class: "phw-icon phw-i-sz-4",
            fill: "currentcolor",
            "aria-hidden": "true",
            "data-ps": "015f7568-svg-11"
        },
        $n = ["href"],
        hn = {
            class: "phw-visually-hidden",
            for: "gllocationInput",
            "data-ps": "015f7568-label-2"
        },
        pn = ["placeholder", "value", "aria-expanded"],
        gn = ["aria-label"],
        fn = {
            class: "phw-icon-ctr",
            "data-ps": "015f7568-span-58"
        },
        wn = {
            class: "phw-icon phw-i-sz-4",
            fill: "currentcolor",
            "aria-hidden": "true",
            "data-ps": "015f7568-svg-12"
        },
        un = {
            href: "#phw-cns-icon-close",
            "data-ps": "015f7568-use-12"
        },
        kn = ["aria-label", "aria-hidden"],
        yn = ["aria-label", "aria-hidden", "data-ph-at-data-count"],
        bn = {
            class: "phw-g-text-small-secondary",
            "data-ps": "015f7568-span-59"
        },
        Sn = ["aria-setsize", "aria-posinset", "onClick"],
        mn = ["data-ph-tevent-attr-trait60", "data-ph-at-data-text", "data-ph-at-data-count"],
        Bn = {
            class: "gsdd-jobs-category phw-line-clamp phw-line-clamp-1 phw-word-break",
            "data-ps": "015f7568-span-60"
        },
        En = {
            class: "phw-visually-hidden",
            "data-ps": "015f7568-span-62"
        },
        _n = ["aria-label", "aria-hidden", "data-ph-at-data-count"],
        Pn = {
            class: "phw-g-text-small-secondary",
            "data-ps": "015f7568-span-63"
        },
        Dn = ["aria-setsize", "aria-posinset", "onClick"],
        xn = ["data-ph-tevent-attr-trait60", "data-ph-at-data-text"],
        Tn = {
            role: "option",
            class: "no-result phw-pl-2 phw-pr-2 phw-p-1",
            "data-ps": "015f7568-div-37"
        },
        Nn = {
            "aria-live": "polite",
            "aria-atomic": "true",
            class: "phw-visually-hidden",
            "data-ps": "015f7568-div-38"
        },
        Ln = {
            key: 0,
            "data-ps": "015f7568-span-64"
        },
        In = {
            key: 0,
            "data-ps": "015f7568-span-65"
        },
        Vn = {
            key: 1,
            "data-ps": "015f7568-span-66"
        },
        Cn = {
            key: 2,
            "data-ps": "015f7568-span-67"
        },
        Mn = {
            "aria-live": "polite",
            "aria-atomic": "true",
            class: "phw-visually-hidden",
            "data-ps": "015f7568-div-39"
        },
        An = {
            key: 0,
            "data-ps": "015f7568-span-68"
        },
        Fn = ["aria-label", "disabled"],
        Rn = {
            key: 0,
            "data-ps": "015f7568-span-69"
        },
        Gn = {
            class: "phw-btn-icon phw-i-sz-3",
            fill: "currentcolor",
            "aria-hidden": "true",
            "data-ps": "015f7568-svg-13"
        },
        On = {
            href: "#phw-cns-icon-search",
            "data-ps": "015f7568-use-13"
        },
        Hn = ["aria-label"],
        zn = {
            class: "phw-icon-ctr",
            "data-ps": "015f7568-span-74"
        },
        Un = {
            class: "icon phw-i-sz-4",
            fill: "currentcolor",
            "aria-hidden": "true",
            "data-ps": "015f7568-svg-15"
        },
        Kn = {
            href: "#phw-cns-icon-close",
            "data-ps": "015f7568-use-15"
        },
        qn = {
            key: 0,
            class: "phw-mt-8 phw-mt-md-6 phw-mt-xs-4",
            "data-ps": "015f7568-div-44"
        },
        jn = e.defineComponent({
            __name: "GlobalSearchDefaultDefaultComponent",
            props: {
                contentId: null,
                jobInfoFields: {
                    default: [{
                        key: "location",
                        srKey: "locationText"
                    }, {
                        key: "category",
                        srKey: "categoryText"
                    }]
                },
                searchUrl: {
                    default: "search-results"
                },
                isLandingPage: {
                    default: 0
                },
                rk: {
                    default: ""
                },
                categoryColumnCount: {
                    default: 2
                },
                jobSize: {
                    default: 3
                },
                locationSize: {
                    default: 2
                },
                categorySize: {
                    default: 2
                },
                preFillSearchedKey: {
                    type: Boolean,
                    default: !0
                },
                partnerUrl: {
                    type: Boolean,
                    default: !1
                },
                isLocationValue: {
                    type: Boolean,
                    default: !0
                },
                isOnlyMilitarySearch: {
                    type: Boolean,
                    default: !1
                },
                usePhenomStorage: {
                    type: Boolean,
                    default: !1
                },
                dataMode: {
                    default: "loc-less"
                },
                locationType: {
                    default: ""
                },
                locationSearch: {
                    type: Boolean,
                    default: !1
                },
                mobileSearch: {
                    type: Boolean,
                    default: !1
                },
                militarySearch: {
                    type: Boolean,
                    default: !0
                },
                mobileSearchWithHeaderIcon: {
                    type: Boolean,
                    default: !1
                },
                showBtnIcon: {
                    type: Boolean,
                    default: !0
                },
                showBtnText: {
                    type: Boolean,
                    default: !0
                },
                showKeywordIcon: {
                    type: Boolean,
                    default: !0
                },
                showLocationIcon: {
                    type: Boolean,
                    default: !0
                },
                changeKeywordIcon: {
                    default: "search"
                },
                changeLocationIcon: {
                    default: "location"
                },
                isMOSCodeMandatory: {
                    type: Boolean
                },
                locationClickRedirect: {
                    type: Boolean
                },
                iconGlobalSearchHeaderView: {
                    type: Boolean
                },
                enableKeywordSuggestion: {
                    type: Boolean,
                    default: !1
                },
                keywordSuggestionShowIcon: {
                    type: Boolean
                },
                keywordSuggestionNoOfKeywords: null,
                showCategoryIcon: {
                    type: Boolean,
                    default: !0
                },
                showJobsSectionCategoryAndLocationIcon: {
                    type: Boolean,
                    default: !0
                }
            },
            setup(i) {
                const d = i,
                    a = e.ref({}),
                    o = e.ref(),
                    p = e.ref(!1),
                    g = e.ref(),
                    f = e.ref(),
                    _ = e.ref([]),
                    T = e.ref([]),
                    L = e.ref([]),
                    V = e.ref([]),
                    te = e.ref([]),
                    S = e.ref([]),
                    $ = { ...d
                    },
                    {
                        fetchResultsConfig: I,
                        init: z,
                        agpData: U,
                        showDropDown: u,
                        showLocationDropdown: K,
                        showDropDownExpanded: q,
                        showLocationDropdownExpanded: he,
                        showAllJobCategories: ne,
                        showJobSuggestions: Ne,
                        showRecentSearches: j,
                        typeheadClrTxt: E,
                        locationClrTxt: N,
                        isHeadSearchEnabled: pe,
                        clearBackdrop: O,
                        isMilitarySearch: X,
                        clearSearch: me,
                        enableSuggestionResults: R,
                        isSuggestionVisible: ae,
                        allJobCategories: ie,
                        getUrlLocal: re,
                        suggestedMOSKeywords: m,
                        setMOSKeyword: ge,
                        setKeywordSuggested: Le,
                        suggestedJobs: C,
                        suggestedJobResults: Q,
                        suggestedCategories: v,
                        suggestedLocations: Y,
                        suggestedKeywords: oe,
                        allSuggestions: W,
                        updateLocalStrWithRecentSearchDetails: Be,
                        searchValue: Z,
                        locationValue: se,
                        clearLocationSearch: Ie,
                        allLocations: G,
                        setLocation: ye,
                        searchBoxBackdrop: Ke,
                        handleSubmitClick: de,
                        resultsUpdated: Ve,
                        isSearchInFocus: qe,
                        autoCompleteInitiate: Ce,
                        setTrackData: fe,
                        isSubmitDisabled: at,
                        setLocationInputValue: Ee,
                        openGlobalSearchInline: ce,
                        closeGlobalSearchInline: je,
                        iconGlobalSearchFlag: be,
                        handleClickOutside: it
                    } = Kt($, o, p);
                return e.onBeforeMount(() => {
                    t.contentStore.getContent($.contentId || "").then(h => {
                        a.value = h
                    }), t.getParam("env") === "editor" && (p.value = !0)
                }), e.onMounted(() => {
                    t.usePhCommon().init(o.value, a, $.instanceId), I(), z(), setTimeout(() => {
                        Ce(g, {
                            name: "typehead",
                            ignoreExpanded: !0,
                            ignoreComboExpanded: !0,
                            ignoreListBoxClickHandler: !0
                        }), $.locationSearch && Ce(f, {
                            name: "location",
                            ignoreExpanded: !0,
                            ignoreComboExpanded: !0,
                            ignoreListBoxClickHandler: !0
                        })
                    }, 1e3), $.iconGlobalSearchHeaderView && document.addEventListener("click", it)
                }), (h, A) => {
                    var We, Je, Ze, Me, _e, Ae, Ye, Xe, Fe, Qe, ve, Pe;
                    return a.value ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: 0,
                        ref_key: "element",
                        ref: o,
                        class: e.normalizeClass([$.mobileSearch && $.mobileSearchWithHeaderIcon && e.unref(Ke) && !$.locationSearch ? h.$style["gsdd-blur-background"] : ""]),
                        "data-ps": "015f7568-div-41"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        class: e.normalizeClass([h.$style["form-group"], "phw-widget-ctr", "phw-widget-empty-ctr", "phw-g-widget-bg-white", $.iconGlobalSearchHeaderView ? "" : "phw-stroke-dark", $.mobileSearch && $.mobileSearchWithHeaderIcon ? "gs-stroke-none" : "", $.mobileSearch && $.mobileSearchWithHeaderIcon && e.unref(Ke) ? h.$style["gsdd-z-index"] : "", $.iconGlobalSearchHeaderView ? "phw-s-global-search" : ""]),
                        "data-ps": "015f7568-div-1"
                    }, [$.iconGlobalSearchHeaderView ? e.withDirectives((e.openBlock(), e.createElementBlock("div", Zd, [e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                        class: "phw-s-global-search-icon phw-btn phw-g-btn-link",
                        "aria-label": (Je = (We = a.value) == null ? void 0 : We.openGlobalSearchBtn) == null ? void 0 : Je.ariaLabel,
                        type: "button",
                        "data-ps": "015f7568-button-3",
                        onClick: A[0] || (A[0] = l => e.unref(ce)())
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Xd, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", Qd, [e.withDirectives(e.createElementVNode("use", vd, null, 512), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])], 8, Yd)), [
                        [e.vShow, !e.unref(be)],
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        class: e.normalizeClass([$.iconGlobalSearchHeaderView ? "phw-d-flex phw-align-items-start phw-flex-column" : "", h.$style["gsdd-modal-full-width"]]),
                        style: e.normalizeStyle($.iconGlobalSearchHeaderView ? e.unref(be) ? {
                            opacity: 1,
                            height: "100%",
                            width: "100%",
                            visibility: "visible",
                            transition: "opacity .6s ease-in-out",
                            overflow: "visible"
                        } : {
                            opacity: 0,
                            height: 0,
                            width: 0,
                            visibility: "hidden",
                            transition: "none",
                            overflow: "hidden"
                        } : ""),
                        "aria-hidden": $.iconGlobalSearchHeaderView ? e.unref(be) ? "false" : "true" : null,
                        "data-ps": "015f7568-div-43"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("form", {
                        class: e.normalizeClass(["gsdd-global-search-area", "phw-s-mobile-search-backdrop", "form-group", $.iconGlobalSearchHeaderView ? "phw-width-4 phw-posn-relative" : "", $.iconGlobalSearchHeaderView ? e.unref(be) ? "phw-d-block" : "phw-d-none" : ""]),
                        novalidate: "",
                        action: "",
                        "aria-label": a.value.formAriaLabel,
                        "data-ps": "015f7568-form-1",
                        onSubmit: A[10] || (A[10] = e.withModifiers(l => $.locationSearch && e.unref(de)(), ["prevent"]))
                    }, [e.unref(U) && e.unref(U).bannerText && e.unref(U).totalHits > 0 ? e.withDirectives((e.openBlock(), e.createElementBlock("div", da, [e.unref(U).bannerText ? e.withDirectives((e.openBlock(), e.createElementBlock("h1", aa, [e.createTextVNode(e.toDisplayString(e.unref(U).bannerText), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("div", ia, [e.createTextVNode(e.toDisplayString(e.unref(U).totalHits > 1 ? a.value.jobsDependsOnFilterPlural : e.unref(ke)((Ze = a.value) == null ? void 0 : Ze.jobsDependsOnFilter, {
                        jobsCount: e.unref(U).totalHits,
                        filterType: e.unref(U).filterType
                    })), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        class: e.normalizeClass(["gsdd-global-search phw-s-search-group", $.locationSearch ? "location-search" : "", !$.locationSearch && $.mobileSearchWithHeaderIcon ? "gsdd-mobile-search" : ""]),
                        "data-ps": "015f7568-div-3",
                        "data-hide-settings": "true"
                    }, [$.mobileSearch && $.mobileSearchWithHeaderIcon ? e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                        key: 0,
                        class: "phw-s-header-search-icon phw-btn phw-g-btn-link",
                        "aria-label": (Me = a.value) == null ? void 0 : Me.headerButtonAriaLabelText,
                        type: "button",
                        "data-ps": "015f7568-button-1"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", sa, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", la, [e.withDirectives(e.createElementVNode("use", ra, null, 512), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])], 8, na)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        class: e.normalizeClass([e.unref(u) ? "dropdown-open" : "dropdown-close", "gsdd-parent-block phw-s-header-global-search"]),
                        "data-ps": "015f7568-div-4"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        class: e.normalizeClass(["phw-s-search-group", [h.$style["gs-search-grp"]]]),
                        "data-ph-at-id": "keyword-category-location",
                        "data-ps": "015f7568-div-5"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        "aria-haspopup": "listbox",
                        class: e.normalizeClass([$.iconGlobalSearchHeaderView ? "phw-stroke-bottom-dark" : "", "phw-form-group", "phw-input-group-btn", "phw-f-c-lg", "phw-d-flex", "phw-flex-grow", "phw-d-sm-block"]),
                        "data-ps": "015f7568-div-6"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        class: e.normalizeClass(["phw-d-flex phw-flex-grow phw-d-sm-block phw-gap-1 gsdd-job-search", [e.unref(pe) ? "phw-d-lg-block" : ""]]),
                        "data-ps": "015f7568-div-45",
                        "data-selector-id": "global-search-mobile"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        class: e.normalizeClass([$.iconGlobalSearchHeaderView ? "" : "phw-m-1", $.locationSearch ? "phw-mb-sm-1" : "", "phw-input-group", "phw-s-search-group", "phw-mr-0", "phw-m-sm-0"]),
                        "data-ps": "015f7568-div-7"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", oa, [e.unref(pe) ? e.createCommentVNode("", !0) : e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                        key: 0,
                        class: e.normalizeClass([
                            [h.$style["mobile-back-button"], h.$style["gsdd-search-icon"]], "mobile-back-button phw-btn phw-g-btn-link phw-width-auto"
                        ]),
                        type: "button",
                        "aria-label": a.value.mobileBackBtn && a.value.mobileBackBtn.ariaLabel,
                        "ph-scroll": "#ph-search-backdrop",
                        "data-ps": "015f7568-a-1",
                        "data-ph-at-id": "mobile-back-button",
                        onClick: A[1] || (A[1] = l => e.unref(O)(l))
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", $a, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", ha, [e.withDirectives(e.createElementVNode("use", pa, null, 512), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])], 10, ca)), [
                        [e.unref(t.vPhwSetting)]
                    ]), !$.locationSearch && e.unref(pe) ? e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                        key: 1,
                        class: e.normalizeClass(["mobile-back-button phw-btn phw-g-btn-link phw-width-auto", [h.$style["mobile-back-button"], h.$style["gsdd-search-icon"]]]),
                        type: "button",
                        "data-ph-at-id": "mobile-back-button-header",
                        "aria-label": a.value.mobileBackBtn && a.value.mobileBackBtn.ariaLabel,
                        "data-ps": "015f7568-a-2",
                        onClick: A[2] || (A[2] = l => e.unref(O)(l))
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", fa, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", wa, [e.withDirectives(e.createElementVNode("use", ua, null, 512), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])], 10, ga)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), $.showKeywordIcon ? e.withDirectives((e.openBlock(), e.createElementBlock("span", ka, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", ya, [e.withDirectives(e.createElementVNode("use", {
                        href: `#phw-cns-icon-${i.changeKeywordIcon}`,
                        "data-ps": "015f7568-use-4"
                    }, null, 8, ba), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("label", Sa, [e.createTextVNode(e.toDisplayString(e.unref(X) ? a.value.militarysearchField && a.value.militarysearchField.label : $.locationSearch ? (_e = a.value.globalsearchField) == null ? void 0 : _e.doubleSearchAriaLabel : (Ae = a.value.globalsearchField) == null ? void 0 : Ae.ariaLabel), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives(e.createElementVNode("input", {
                        id: "typehead",
                        ref_key: "typeAheadEle",
                        ref: g,
                        type: "text",
                        role: "combobox",
                        class: e.normalizeClass([
                            [$.locationSearch && !$.iconGlobalSearchHeaderView ? "" : h.$style["gsdd-search-input"], $.iconGlobalSearchHeaderView ? h.$style["gsdd-popup-input-none"] : "", $.showKeywordIcon ? "phw-input-icon-pl" : "", e.unref(Z) || $.iconGlobalSearchHeaderView ? "phw-input-icon-pr" : ""], "phw-s-a11y-search-box phw-s-keywords phw-icon-left phw-g-text-field-large phw-s-input-search phw-height-4"
                        ]),
                        value: e.unref(Z),
                        placeholder: e.unref(X) ? a.value.militarysearchField && a.value.militarysearchField.placeholder : $.locationSearch ? (Ye = a.value.globalsearchField) == null ? void 0 : Ye.doubleSearchPlaceholder : (Xe = a.value.globalsearchField) == null ? void 0 : Xe.placeholder,
                        autocomplete: "off",
                        "aria-haspopup": "listbox",
                        "aria-autocomplete": "list",
                        "aria-controls": "typehead-listbox",
                        "aria-describedby": $.iconGlobalSearchHeaderView ? "icon-global-search-header-txt" : void 0,
                        "aria-expanded": e.unref(q) ? "true" : "false",
                        "data-ph-at-id": "globalsearch-input",
                        name: "typehead",
                        "aria-owns": "typehead-listbox",
                        "data-show-listbox": "false",
                        "data-ps": "015f7568-input-1",
                        onInput: A[3] || (A[3] = l => Z.value = l.target.value)
                    }, null, 42, ma), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                        tabindex: "0",
                        class: "phw-input-icon-right phw-btn phw-g-btn-link phw-s-keysearch-clear phw-d-flex phw-width-auto",
                        type: "button",
                        "data-ph-at-id": "clear-globalsearch-link",
                        "aria-label": (Qe = (Fe = a.value) == null ? void 0 : Fe.clearTxtBtn) == null ? void 0 : Qe.ariaLabel,
                        "data-ps": "015f7568-a-3",
                        onClick: A[4] || (A[4] = l => e.unref(me)())
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Ea, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", _a, [e.withDirectives(e.createElementVNode("use", Pa, null, 512), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])], 8, Ba)), [
                        [e.vShow, e.unref(Z) && !$.iconGlobalSearchHeaderView],
                        [e.unref(t.vPhwTrack), "clear_searches_click"],
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        id: "typehead-listbox",
                        class: e.normalizeClass([$.iconGlobalSearchHeaderView ? h.$style["gsdd-popup-search-suggestions"] : "", h.$style["gsdd-search-suggestions"], "gsdd-search-suggestions", "phw-p-1", "phw-pl-0", "phw-pr-0", "phw-p-xl-050", "phw-pl-xl-0", "phw-pr-xl-0", "phw-text-l"]),
                        role: "listbox",
                        tabindex: "-1",
                        "aria-hidden": e.unref(u) ? "false" : "true",
                        "aria-label": a.value.searchSuggestionsTxt,
                        "data-labelledby": "typehead-listbox",
                        "data-ps": "015f7568-div-8"
                    }, [e.unref(ne) && !e.unref(X) && (!e.unref(R) || e.unref(R).length && !e.unref(ae)("allCategories")) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", xa, [e.withDirectives((e.openBlock(), e.createElementBlock("div", Ta, [e.withDirectives((e.openBlock(), e.createElementBlock("ul", {
                        class: e.normalizeClass(["phw-list-none", "phw-p-0", "phw-m-0", $.categoryColumnCount === 2 ? "phw-grid phw-grid-2 phw-grid-sm-1 phw-gap-0" : ""]),
                        "data-ph-at-id": "category-list",
                        "data-ph-at-total-data-count": e.unref(ie).length,
                        "aria-hidden": e.unref(ie).length ? "false" : "true",
                        role: "group",
                        "aria-label": "Job Category suggestions",
                        "aria-labelledby": "category-heading",
                        tabindex: "-1",
                        "data-ps": "015f7568-ul-1"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("li", {
                        id: "category-heading",
                        role: "presentation",
                        class: e.normalizeClass([h.$style["gsdd-category-heading"], "phw-pb-050", $.categoryColumnCount === 2 ? h.$style["gsdd-cat-two-col"] : ""]),
                        "data-ps": "015f7568-li-1"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", La, [e.createTextVNode(e.toDisplayString(a.value.jobCategoriesText), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]), (e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(e.unref(ie), (l, k) => e.withDirectives((e.openBlock(), e.createElementBlock("li", {
                        key: k,
                        class: e.normalizeClass(["job-container-category_" + k, h.$style["gsdd-categories-suggested-list-li"], "phw-posn-relative", "phw-d-flex", $.categoryColumnCount === 2 ? ["phw-pr-050"] : ""]),
                        "data-ph-at-id": "category-list-item",
                        "aria-setsize": e.unref(ie).length,
                        "aria-posinset": k + 1,
                        role: "option",
                        tabindex: "-1",
                        "data-ps": "015f7568-li-2",
                        onClick: F => e.unref(re)("job_category_search_click", _.value[k], "category", l)
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        ref_for: !0,
                        ref_key: "categoryLinkEle",
                        ref: _,
                        "data-ph-at-id": "category-link",
                        "data-assign": e.unref(fe)(_.value[k], "category", l),
                        "data-ph-at-data-text": l.key,
                        "data-ph-at-data-count": l.total_count,
                        class: e.normalizeClass([
                            [h.$style["gsdd-link-elem"], "phw-width-4 phw-cursor-pointer"], "phw-d-flex phw-align-items-center phw-g-text-default-dark"
                        ]),
                        "data-ps": "015f7568-div-11"
                    }, [$.showCategoryIcon ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Ca, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", Ma, [e.withDirectives(e.createElementVNode("use", Aa, null, 512), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("span", Fa, [e.createTextVNode(e.toDisplayString(a.value.categoryText || "Category"), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                        class: e.normalizeClass(["gsdd-" + l.key, h.$style["gsdd-flex-auto"], "phw-word-break phw-d-flex phw-overflow-hidden"]),
                        "data-ps": "015f7568-span-9"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Ra, [e.createTextVNode(e.toDisplayString(l.key), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                        class: e.normalizeClass([h.$style["gsdd-jobs-count"], "gsdd-" + l.total_count, "phw-ml-050 phw-ws-nowrap"]),
                        "data-ps": "015f7568-span-10"
                    }, [e.createTextVNode(" (" + e.toDisplayString(e.unref(ke)(a.value.categoryCount, {
                        totalCategoryCount: l.total_count
                    })) + ") ", 1)], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]), l.total_count == 1 ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Ga, [e.createTextVNode(e.toDisplayString(a.value.globalsearchJobsCountSingler), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), l.total_count > 1 ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Oa, [e.createTextVNode(e.toDisplayString(a.value.globalsearchJobsCountPlural), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ])], 10, Va)), [
                        [e.unref(t.vPhwSetting)],
                        [e.unref(t.vPhwTrack), "job_category_search_click"]
                    ])], 10, Ia)), [
                        [e.unref(t.vPhwSetting)]
                    ])), 128))], 10, Na)), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.vShow, e.unref(ie) && e.unref(ie).length],
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(X) && e.unref(Z).length ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: 1,
                        class: e.normalizeClass([h.$style["phw-s-keyword-suggestions"], "phw-pl-3", "phw-pr-3", "phw-pl-lg-2", "phw-pr-lg-2", "phw-pl-sm-1", "phw-pr-sm-1"]),
                        "data-ps": "015f7568-div-12"
                    }, [e.unref(Z).length ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: 0,
                        class: e.normalizeClass([h.$style["gsdd-suggested-keywords-suggested"], "military", "phw-p-1", "phw-pl-0", "phw-pr-0"]),
                        "data-ph-at-id": "suggested-keywords",
                        "data-ps": "015f7568-div-13"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("ul", {
                        class: e.normalizeClass(["gsdd-suggested-keywords-list phw-s-suggested-mos-keywords-list", ["phw-list-none", "phw-p-0", "phw-m-0"]]),
                        "data-ph-at-id": "suggested-data-list",
                        "aria-hidden": e.unref(m).length ? "false" : "true",
                        "data-ph-at-data-count": e.unref(m).length,
                        role: "group",
                        tabindex: "-1",
                        "aria-label": "military suggestions",
                        "aria-labelledby": "military-heading",
                        "data-ps": "015f7568-ul-2"
                    }, [e.unref(m).length ? e.withDirectives((e.openBlock(), e.createElementBlock("li", {
                        key: 0,
                        id: "military-heading",
                        class: e.normalizeClass([h.$style["gsdd-category-heading"], "phw-pb-050"]),
                        role: "presentation",
                        "data-ps": "015f7568-li-3"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", za, [e.createTextVNode(e.toDisplayString(a.value.militaryCodeText), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), (e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(e.unref(m), (l, k) => e.withDirectives((e.openBlock(), e.createElementBlock("li", {
                        key: k,
                        role: "option",
                        class: e.normalizeClass(["phsSuggestedList_" + k, h.$style["gsdd-categories-suggested-list-li"], "phw-posn-relative", "phw-d-flex"]),
                        "data-ph-at-id": "suggested-data-list-item",
                        tabindex: "-1",
                        "data-ps": "015f7568-li-4",
                        onClick: F => e.unref(ge)(l, F, "type_ahead_search")
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        class: e.normalizeClass(["gsdd-mos-keyword", [h.$style["gsdd-link-elem"], "phw-g-text-default-dark phw-cursor-pointer"]]),
                        "data-ph-tevent-attr-trait59": "recent_keyword",
                        title: l.title,
                        "data-ph-tevent-attr-trait60": l.key,
                        "data-ps": "015f7568-div-14"
                    }, [e.withDirectives(e.createElementVNode("span", {
                        "data-ph-at-id": "jobtitle-text",
                        "data-ps": "015f7568-span-14",
                        innerHTML: l.title_html
                    }, null, 8, qa), [
                        [e.unref(t.vPhwSetting)]
                    ])], 10, Ka)), [
                        [e.unref(t.vPhwSetting)]
                    ])], 10, Ua)), [
                        [e.unref(t.vPhwSetting)]
                    ])), 128)), e.unref(m).length ? e.createCommentVNode("", !0) : e.withDirectives((e.openBlock(), e.createElementBlock("li", ja, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Wa, [e.createTextVNode(e.toDisplayString(a.value.noResultsText), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])], 8, Ha)), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(Ne) && !e.unref(X) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: 2,
                        class: e.normalizeClass([h.$style["phw-s-keyword-suggestions"], " phw-pl-3", "phw-pr-3", "phw-pl-lg-2", "phw-pr-lg-2", "phw-pl-sm-1", "phw-pr-sm-1"]),
                        "data-phfc": e.unref(Le)(["suggestedJobs", "suggestedLocations", "suggestedCategories", "keywordsSearched", "suggestedKeywords"]),
                        "data-ps": "015f7568-div-15"
                    }, [e.unref(C) && e.unref(C).length && (!e.unref(R) || e.unref(R).length && !e.unref(ae)("suggestedJobs")) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: 0,
                        class: e.normalizeClass([h.$style["gsdd-jobs-suggested"], "phw-p-1", "phw-pl-0", "phw-pr-0", "phw-p-xl-050", "phw-pl-xl-0", "phw-pr-xl-0"]),
                        "data-ph-at-id": "suggested-jobs",
                        "data-ps": "015f7568-div-16"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("ul", {
                        class: e.normalizeClass(["gsdd-jobs-list", ["phw-list-none", "phw-p-0", "phw-m-0"]]),
                        "data-ph-at-id": "suggested-data-list",
                        "data-ph-at-data-count": e.unref(C).length,
                        "aria-hidden": e.unref(C).length ? "false" : "true",
                        role: "group",
                        "aria-label": "Job suggestions",
                        "aria-labelledby": "job-heading",
                        tabindex: "-1",
                        "data-ps": "015f7568-ul-3"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("li", {
                        id: "job-heading",
                        role: "presentation",
                        class: e.normalizeClass([
                            [h.$style["gsdd-category-heading"], "phw-pb-050"], "phw-list-none"
                        ]),
                        "data-ps": "015f7568-li-6"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Ya, [e.createTextVNode(e.toDisplayString(a.value.jobHeadingText), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]), (e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(e.unref(C), (l, k) => e.withDirectives((e.openBlock(), e.createElementBlock("li", {
                        key: k,
                        role: "option",
                        "data-ph-at-id": "suggested-data-list-item",
                        class: e.normalizeClass(["phsJobsSuggested_" + k, h.$style["gsdd-suggested-list-li"], "phw-posn-relative", "phw-d-flex"]),
                        "aria-setsize": e.unref(Q).length + e.unref(m).length,
                        "aria-posinset": k + 1,
                        tabindex: "-1",
                        "data-ps": "015f7568-li-7",
                        onClick: F => e.unref(re)("type_ahead_search", V.value[k], "job", l)
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        ref_for: !0,
                        ref_key: "jobLinkEle",
                        ref: V,
                        "data-assign": e.unref(fe)(V.value[k], "job", l),
                        "data-ph-tevent-attr-trait59": "jobId",
                        "data-ph-tevent-attr-trait60": l.jobSeqNo,
                        "data-ph-tevent-attr-trait14": l.category,
                        "data-title": l.title_raw,
                        "data-jobid": l.id,
                        class: e.normalizeClass([h.$style["gsdd-link-elem"], "phw-g-text-default-dark phw-cursor-pointer", "phw-width-4"]),
                        "data-ph-at-id": "suggested-data-link",
                        "data-ph-at-job-title-text": l.title,
                        "data-ph-at-job-id-text": l.jobId,
                        "data-ph-at-job-seqno-text": l.jobSeqNo,
                        "data-ph-at-job-location-text": l.location,
                        "data-ph-at-job-category-text": l.category,
                        "data-ps": "015f7568-div-17"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        class: e.normalizeClass([h.$style["gsdd-job-title"]]),
                        "data-ps": "015f7568-div-18"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", va, [e.withDirectives((e.openBlock(), e.createElementBlock("span", ei, [e.createTextVNode(e.toDisplayString(a.value.jobTitleText), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives(e.createElementVNode("span", {
                        "data-ph-at-id": "jobtitle-text",
                        "data-ps": "015f7568-span-19",
                        innerHTML: l.title_html
                    }, null, 8, ti), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        class: e.normalizeClass([h.$style["gsdd-job-info"], "phw-mt-1", "phw-d-block"]),
                        "data-ph-at-id": "job-info",
                        "data-ps": "015f7568-div-19"
                    }, [(e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList($.jobInfoFields, (F, De) => e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                        key: De,
                        class: e.normalizeClass(["gsdd-job-" + F.key, "phw-d-inline-flex", "phw-align-items-center", "phw-g-text-small-secondary"]),
                        "data-ps": "015f7568-span-20"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", di, [e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                        "data-ph-at-id": F.key + "-text",
                        "data-ps": "015f7568-span-22"
                    }, [e.createTextVNode(e.toDisplayString(a.value[F.srKey]), 1)], 8, ai)), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]), $.showJobsSectionCategoryAndLocationIcon ? e.withDirectives((e.openBlock(), e.createElementBlock("span", ii, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", ni, [e.withDirectives(e.createElementVNode("use", {
                        href: "#" + F.icon,
                        "data-ps": "015f7568-use-7"
                    }, null, 8, si), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                        class: e.normalizeClass([h.$style["gsdd-flex-auto"], "phw-line-clamp phw-line-clamp-1 phw-word-break", "phw-g-text-small-secondary"]),
                        "data-ps": "015f7568-span-24"
                    }, [e.createTextVNode(e.toDisplayString(l[F.key]), 1)], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.vShow, l[F.key]],
                        [e.unref(t.vPhwSetting)]
                    ])), 128))], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ])], 10, Qa)), [
                        [e.unref(t.vPhwSetting)],
                        [e.unref(t.vPhwTrack), "type_ahead_search"]
                    ])], 10, Xa)), [
                        [e.unref(t.vPhwSetting)]
                    ])), 128))], 8, Za)), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(m) && e.unref(m).length ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: 1,
                        class: e.normalizeClass([h.$style["gsdd-suggested-keywords-suggested"], "military", "phw-p-1", "phw-pl-0", "phw-pr-0", "phw-p-xl-050", "phw-pl-xl-0", "phw-pr-xl-0"]),
                        "data-ph-at-id": "suggested-keywords",
                        "data-ps": "015f7568-div-20"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("ul", {
                        class: e.normalizeClass(["phw-s-suggested-mos-keywords-list", ["phw-list-none", "phw-p-0", "phw-m-0"]]),
                        "data-ph-at-id": "suggested-data-list",
                        "data-ph-at-data-count": e.unref(m).length,
                        "aria-hidden": e.unref(m).length ? "false" : "true",
                        role: "group",
                        "aria-label": "Military Job suggestions",
                        "aria-labelledby": "military-heading",
                        tabindex: "-1",
                        "data-ps": "015f7568-ul-4"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("li", {
                        id: "military-heading",
                        role: "presentation",
                        class: e.normalizeClass([h.$style["gsdd-category-heading"], "phw-pb-050"]),
                        "data-ps": "015f7568-li-8"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", ri, [e.createTextVNode(e.toDisplayString(a.value.militaryCodeText), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]), (e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(e.unref(m), (l, k) => e.withDirectives((e.openBlock(), e.createElementBlock("li", {
                        key: k,
                        role: "option",
                        class: e.normalizeClass(["phsSuggestedList_" + k, h.$style["gsdd-suggested-list-li"], "phw-posn-relative", "phw-d-flex"]),
                        "data-ph-at-id": "suggested-data-list-item",
                        "aria-setsize": e.unref(Q).length + e.unref(m).length,
                        "aria-posinset": e.unref(C).length + k + 1,
                        tabindex: "-1",
                        "data-ps": "015f7568-li-9",
                        onClick: F => e.unref(ge)(l, F, "type_ahead_search")
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        class: e.normalizeClass(["gsdd-mos-keyword", [h.$style["gsdd-link-elem"], "phw-g-text-default-dark phw-cursor-pointer"]]),
                        "data-ph-tevent-attr-trait59": "recent_keyword",
                        title: l.title,
                        "data-ph-tevent-attr-trait60": l.key,
                        "data-ps": "015f7568-div-21"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", $i, [e.createTextVNode(e.toDisplayString(a.value.militaryCodeText), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives(e.createElementVNode("span", {
                        "data-ph-at-id": "jobtitle-text",
                        "data-ps": "015f7568-span-27",
                        innerHTML: l.title_html
                    }, null, 8, hi), [
                        [e.unref(t.vPhwSetting)]
                    ])], 10, ci)), [
                        [e.unref(t.vPhwSetting)]
                    ])], 10, oi)), [
                        [e.unref(t.vPhwSetting)]
                    ])), 128))], 8, li)), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(Y) && e.unref(Y).length > 0 && (!e.unref(R) || e.unref(R).length && !e.unref(ae)("suggestedLocations")) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: 2,
                        class: e.normalizeClass([h.$style["gsdd-locations-suggested"], "phw-p-1", "phw-pl-0", "phw-pr-0", "phw-p-xl-050", "phw-pl-xl-0", "phw-pr-xl-0"]),
                        "data-ph-at-id": "suggested-locations",
                        "data-ps": "015f7568-div-22"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("ul", {
                        class: e.normalizeClass([h.$style["gsdd-locations-suggested-list"], "phw-list-none", "phw-p-0", "phw-m-0"]),
                        "data-ph-at-id": "suggested-data-list",
                        "data-ph-at-data-count": e.unref(Y).length,
                        "aria-hidden": e.unref(Y).length ? "false" : "true",
                        role: "group",
                        "aria-label": "location suggestions",
                        "aria-labelledby": "location-heading",
                        tabindex: "-1",
                        "data-ps": "015f7568-ul-5"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("li", {
                        id: "location-heading",
                        class: e.normalizeClass([h.$style["gsdd-category-heading"], "phw-pb-050"]),
                        role: "presentation",
                        "data-ps": "015f7568-li-10"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", gi, [e.createTextVNode(e.toDisplayString(a.value.locationText), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]), (e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(e.unref(Y), (l, k) => e.withDirectives((e.openBlock(), e.createElementBlock("li", {
                        key: k,
                        role: "option",
                        class: e.normalizeClass(["phsLocationsSuggested_" + k, h.$style["gsdd-locations-suggested-list-li"], h.$style["gsdd-suggested-list-li"], "phw-posn-relative", "phw-d-flex"]),
                        "data-ph-at-id": "suggested-data-cities-list-item",
                        "aria-setsize": e.unref(Q).length + e.unref(m).length,
                        "aria-posinset": e.unref(C).length + e.unref(m).length + k + 1,
                        tabindex: "-1",
                        "data-ps": "015f7568-li-11",
                        onClick: F => e.unref(re)("type_ahead_search", te.value[k], "search-results", l, (l.city ? "qcity=" + l.city : "") + (l.state ? "&qstate=" + l.state : "") + (l.country ? "&qcountry=" + l.country : ""))
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        ref_for: !0,
                        ref_key: "locationSugLinkEle",
                        ref: te,
                        "data-assign": e.unref(fe)(te.value[k], "search-results", l),
                        "data-ph-tevent-attr-trait59": "location",
                        "data-ph-tevent-attr-trait60": l.name,
                        "data-category": l.name,
                        "data-ph-at-id": "suggested-data-link",
                        class: e.normalizeClass([h.$style["gsdd-link-elem"], "phw-g-text-default-dark phw-cursor-pointer"]),
                        "data-ph-at-data-text": l.name,
                        "data-ph-at-data-count": l.count,
                        "data-ps": "015f7568-div-23"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", ui, [e.withDirectives((e.openBlock(), e.createElementBlock("span", ki, [e.createTextVNode(e.toDisplayString(a.value.locationText), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.createTextVNode(" " + e.toDisplayString(l.locationName) + " ", 1), e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                        class: e.normalizeClass([h.$style["gsdd-jobs-count"], "gsdd-" + l.count]),
                        "data-ps": "015f7568-span-31"
                    }, [e.createTextVNode(" (" + e.toDisplayString(e.unref(ke)(a.value.locationCount, {
                        totalLocationCount: l.count
                    })) + ") ", 1), e.withDirectives((e.openBlock(), e.createElementBlock("span", yi, [e.createTextVNode(e.toDisplayString(l.count > 1 ? a.value.jobLocationsText : a.value.jobLocationText), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ])], 10, wi)), [
                        [e.unref(t.vPhwSetting)],
                        [e.unref(t.vPhwTrack), "type_ahead_search"]
                    ])], 10, fi)), [
                        [e.unref(t.vPhwSetting)]
                    ])), 128))], 10, pi)), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(v) && e.unref(v).length > 0 && (!e.unref(R) || e.unref(R).length && !e.unref(ae)("suggestedCategories")) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: 3,
                        class: e.normalizeClass([h.$style["gsdd-categorys-suggested"], "phw-p-1", "phw-pl-0", "phw-pr-0", "phw-p-xl-050", "phw-pl-xl-0", "phw-pr-xl-0"]),
                        "data-ph-at-id": "suggested-categories",
                        "data-ps": "015f7568-div-24"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("ul", {
                        class: e.normalizeClass(["gsdd-categorys-suggested-list", ["phw-list-none", "phw-p-0", "phw-m-0"]]),
                        "data-ph-at-id": "suggested-data-list",
                        "data-ph-at-data-count": e.unref(v) && e.unref(v).length,
                        "aria-hidden": e.unref(v) && e.unref(v).length ? "false" : "true",
                        role: "group",
                        "aria-label": "category suggestions",
                        "aria-labelledby": "category-heading",
                        tabindex: "-1",
                        "data-ps": "015f7568-ul-6"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("li", {
                        id: "category-heading",
                        role: "presentation",
                        class: e.normalizeClass([h.$style["gsdd-category-heading"], "phw-pb-050"]),
                        "data-ps": "015f7568-li-12"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Si, [e.createTextVNode(e.toDisplayString(a.value.categoryText), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]), (e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(e.unref(v), (l, k) => e.withDirectives((e.openBlock(), e.createElementBlock("li", {
                        key: k,
                        role: "option",
                        class: e.normalizeClass(["phsCategorySuggested_" + k, h.$style["gsdd-suggested-list-li"], "phw-posn-relative", "phw-d-flex"]),
                        "data-ph-at-id": "suggested-data-list-item",
                        "aria-setsize": e.unref(Q).length + e.unref(m).length,
                        "aria-posinset": e.unref(C).length + e.unref(m).length + e.unref(Y).length + k + 1,
                        tabindex: "-1",
                        "data-ps": "015f7568-li-13",
                        onClick: F => e.unref(re)("type_ahead_search", T.value[k], "category", l)
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        ref_for: !0,
                        ref_key: "catSubLinkEle",
                        ref: T,
                        "data-assign": e.unref(fe)(T.value[k], "category", l),
                        "data-ph-tevent-attr-trait59": "category",
                        "data-ph-tevent-attr-trait60": l.category,
                        "data-category": l.category,
                        "data-ph-at-id": "suggested-data-link",
                        "data-ph-at-data-text": l.category,
                        class: e.normalizeClass([h.$style["gsdd-link-elem"], "phw-d-flex phw-cursor-pointer", "phw-align-items-center", "phw-g-text-default-dark", "phw-width-4"]),
                        "data-ph-at-data-count": l.count,
                        "data-ps": "015f7568-div-25"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Ei, [e.withDirectives((e.openBlock(), e.createElementBlock("span", _i, [e.createTextVNode(e.toDisplayString(a.value.categoryText), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]), $.showCategoryIcon ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Pi, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", Di, [e.withDirectives(e.createElementVNode("use", xi, null, 512), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                        class: e.normalizeClass([h.$style["gsdd-flex-auto"], "phw-line-clamp phw-line-clamp-1 phw-word-break"]),
                        "data-ps": "015f7568-span-36"
                    }, [e.createTextVNode(e.toDisplayString(l.category) + " ", 1), e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                        class: e.normalizeClass([h.$style["gsdd-jobs-count"], "gsdd-" + l.count]),
                        "data-ps": "015f7568-span-37"
                    }, [e.createTextVNode(" (" + e.toDisplayString(e.unref(ke)(a.value.categoryCount, {
                        totalCategoryCount: l.count
                    })) + ") ", 1)], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]), l.count == 1 ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Ti, [e.createTextVNode(e.toDisplayString(a.value.globalsearchJobsCountSingler), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), l.count > 1 ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Ni, [e.createTextVNode(e.toDisplayString(a.value.globalsearchJobsCountPlural), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ])], 10, Bi)), [
                        [e.unref(t.vPhwSetting)],
                        [e.unref(t.vPhwTrack), "type_ahead_search"]
                    ])], 10, mi)), [
                        [e.unref(t.vPhwSetting)]
                    ])), 128))], 8, bi)), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(W).searched && e.unref(W).searched.length && e.unref(j) && (!e.unref(R) || e.unref(R).length && !e.unref(ae)("suggestedRecentSearches")) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: 4,
                        class: e.normalizeClass([h.$style["gsdd-recentsearches-suggested"], "phw-p-1", "phw-pl-0", "phw-pr-0", "phw-p-xl-050", "phw-pl-xl-0", "phw-pr-xl-0"]),
                        "data-ph-at-id": "suggested-recentsearches",
                        "data-ps": "015f7568-div-26"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("ul", {
                        class: e.normalizeClass(["search-recentsearchs-list", ["phw-list-none", "phw-p-0", "phw-m-0"]]),
                        "data-ph-at-id": "suggested-data-list",
                        "data-ph-at-data-count": e.unref(W).searched.length,
                        "aria-hidden": e.unref(W).searched.length ? "false" : "true",
                        role: "group",
                        "aria-label": "recent search suggestions",
                        "aria-labelledby": "recent-search-heading",
                        tabindex: "-1",
                        "data-ps": "015f7568-ul-7"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("li", {
                        id: "recent-search-heading",
                        role: "presentation",
                        class: e.normalizeClass([h.$style["gsdd-category-heading"], "phw-pb-050"]),
                        "data-ps": "015f7568-li-14"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Ii, [e.createTextVNode(e.toDisplayString(a.value.recentSearchesText), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]), (e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(e.unref(W).searched, (l, k) => e.withDirectives((e.openBlock(), e.createElementBlock("li", {
                        key: k,
                        role: "option",
                        class: e.normalizeClass(["phsRecentSearchList_" + k, h.$style["gsdd-suggested-list-li"], "phw-posn-relative", "phw-d-flex"]),
                        "data-ph-at-id": "suggested-data-list-item",
                        "aria-setsize": e.unref(Q).length + e.unref(m).length,
                        "aria-posinset": (e.unref(C) ? e.unref(C).length : 0) + (e.unref(m) ? e.unref(m).length : 0) + (e.unref(Y) ? e.unref(Y).length : 0) + (e.unref(v) ? e.unref(v).length : 0) + k + 1,
                        tabindex: "-1",
                        "data-ps": "015f7568-li-15",
                        onClick: F => (e.unref(re)("type_ahead_search", L.value[k], "search-results", {
                            keyword: l
                        }, "keywords=" + l), e.unref(Be)(l))
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        ref_for: !0,
                        ref_key: "recentsearchsLinkEle",
                        ref: L,
                        "data-assign": e.unref(fe)(L.value[k], "search-results", {
                            keyword: l
                        }),
                        "data-ajax": "false",
                        class: e.normalizeClass([h.$style["gsdd-link-elem"], "phw-d-flex", "phw-align-items-center phw-cursor-pointer", "phw-g-text-default-dark"]),
                        "data-ph-tevent-attr-trait59": "recent_keyword",
                        "data-ph-tevent-attr-trait60": l,
                        "data-ph-at-id": "suggested-data-link",
                        "data-ph-at-data-text": l,
                        "data-ps": "015f7568-div-27"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Mi, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Ai, [e.createTextVNode(e.toDisplayString(a.value.recentSearchesText), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", Fi, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", Ri, [e.withDirectives(e.createElementVNode("use", Gi, null, 512), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                        class: e.normalizeClass([h.$style["gsdd-flex-auto"], "phw-line-clamp phw-line-clamp-1 phw-word-break"]),
                        "data-ps": "015f7568-span-44"
                    }, [e.createTextVNode(e.toDisplayString(l), 1)], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ])], 10, Ci)), [
                        [e.unref(t.vPhwSetting)],
                        [e.unref(t.vPhwTrack), "type_ahead_search"]
                    ])], 10, Vi)), [
                        [e.vShow, k < 3],
                        [e.unref(t.vPhwSetting)]
                    ])), 128))], 8, Li)), [
                        [e.vShow, e.unref(W).searched.length],
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(oe) && e.unref(oe).length > 0 && (!e.unref(R) || e.unref(R).length && !e.unref(ae)("suggestedKeywords")) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: 5,
                        class: e.normalizeClass([h.$style["gsdd-suggested-keywords-suggested"], "phw-p-1", "phw-pl-0", "phw-pr-0", "phw-p-xl-050", "phw-pl-xl-0", "phw-pr-xl-0"]),
                        "data-ph-at-id": "suggested-keywords",
                        "data-ps": "015f7568-div-28"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("ul", {
                        class: e.normalizeClass(["gsdd-suggested-keywords-list", ["phw-list-none", "phw-p-0", "phw-m-0"]]),
                        "data-ph-at-id": "suggested-data-list",
                        "data-ph-at-data-count": e.unref(oe).length,
                        "aria-hidden": e.unref(oe).length ? "false" : "true",
                        role: "group",
                        "aria-label": "keyword suggestions",
                        "aria-labelledby": "keyword-heading",
                        tabindex: "-1",
                        "data-ps": "015f7568-ul-8"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("li", {
                        id: "keyword-heading",
                        role: "presentation",
                        class: e.normalizeClass([h.$style["gsdd-category-heading"], "phw-pb-050"]),
                        "data-ps": "015f7568-li-16"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Hi, [e.createTextVNode(e.toDisplayString(a.value.suggestedKeywordsText), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]), (e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(e.unref(oe), (l, k) => {
                        var F, De;
                        return e.withDirectives((e.openBlock(), e.createElementBlock("li", {
                            key: k,
                            role: "option",
                            class: e.normalizeClass(["phsSuggestedList_" + k, h.$style["gsdd-suggested-list-li"], "phw-posn-relative", "phw-d-flex"]),
                            "data-ph-at-id": "suggested-data-list-item",
                            "aria-setsize": e.unref(Q).length + e.unref(m).length,
                            "aria-posinset": (e.unref(C) ? e.unref(C).length : 0) + (e.unref(m) ? e.unref(m).length : 0) + (e.unref(Y) ? e.unref(Y).length : 0) + (e.unref(v) ? e.unref(v).length : 0) + (((De = (F = e.unref(W)) == null ? void 0 : F.searched) == null ? void 0 : De.length) || 0) + k + 1,
                            tabindex: "-1",
                            "data-ps": "015f7568-li-17",
                            onClick: mt => (e.unref(re)("type_ahead_search", S.value[k], "search-results", {
                                keyword: l
                            }, "keywords=" + l), e.unref(Be)(l))
                        }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                            ref_for: !0,
                            ref_key: "suggestedKeywordsLinkEle",
                            ref: S,
                            "data-assign": e.unref(fe)(S.value[k], "search-results", {
                                keyword: l
                            }),
                            "data-ajax": "false",
                            class: e.normalizeClass([h.$style["gsdd-link-elem"], "phw-g-text-default-dark phw-cursor-pointer"]),
                            "data-ph-tevent-attr-trait59": "recent_keyword",
                            "data-ph-tevent-attr-trait60": l,
                            "data-ph-at-id": "suggested-data-link",
                            "data-ph-at-data-text": l,
                            "data-ps": "015f7568-div-29"
                        }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Ki, [e.withDirectives((e.openBlock(), e.createElementBlock("span", qi, [e.createTextVNode(e.toDisplayString(a.value.suggestedKeywordsText), 1)])), [
                            [e.unref(t.vPhwSetting)]
                        ])])), [
                            [e.unref(t.vPhwSetting)]
                        ]), e.createTextVNode(" " + e.toDisplayString(l), 1)], 10, Ui)), [
                            [e.unref(t.vPhwSetting)],
                            [e.unref(t.vPhwTrack), "type_ahead_search"]
                        ])], 10, zi)), [
                            [e.vShow, k < 3],
                            [e.unref(t.vPhwSetting)]
                        ])
                    }), 128))], 8, Oi)), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)], 10, Ja)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(Z) && !(e.unref(Q).length + e.unref(m).length) && !e.unref(X) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", ji, [e.createTextVNode(e.toDisplayString(a.value.noSuggestionsText), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)], 10, Da)), [
                        [e.vShow, e.unref(u)],
                        [e.unref(t.vPhwSetting)]
                    ]), $.iconGlobalSearchHeaderView ? (e.openBlock(), e.createElementBlock("div", Wi, e.toDisplayString(a.value.iconGlobalSearchHeaderTextSronly), 1)) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("div", Ji, [e.unref(Ve) ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Zi, [e.unref(u) && !e.unref(X) && e.unref(ne) && !e.unref(Z).length ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Yi, [e.createTextVNode(e.toDisplayString(a.value.suggestionsAvailableText), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), !e.unref(X) && e.unref(u) && e.unref(Z).length && e.unref(Q).length + e.unref(m).length > 0 ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Xi, [e.createTextVNode(e.toDisplayString(e.unref(ke)(a.value.suggestionsCount, {
                        count: e.unref(Q).length + e.unref(m).length
                    })), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), !e.unref(X) && e.unref(Z).length && !(e.unref(Q).length + e.unref(m).length) ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Qi, [e.createTextVNode(e.toDisplayString(a.value.noSuggestionsText), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(u) && e.unref(X) && e.unref(Z).length && e.unref(m) && e.unref(m).length > 0 ? e.withDirectives((e.openBlock(), e.createElementBlock("span", vi, [e.createTextVNode(e.toDisplayString(e.unref(ke)(a.value.militaryJobsAvailableText, {
                        count: e.unref(m).length
                    })), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(X) && !e.unref(Z).length && e.unref(qe) ? e.withDirectives((e.openBlock(), e.createElementBlock("span", en, [e.createTextVNode(e.toDisplayString(a.value.searchFocusMilitaryJobs), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(u) && e.unref(X) && e.unref(Z).length && !e.unref(m).length ? e.withDirectives((e.openBlock(), e.createElementBlock("span", tn, [e.createTextVNode(e.toDisplayString(a.value.noResultsText), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", dn, [e.unref(E) ? e.withDirectives((e.openBlock(), e.createElementBlock("span", an, [e.createTextVNode(e.toDisplayString(a.value.textClearedText), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]), $.locationSearch ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: 0,
                        class: e.normalizeClass(["phw-input-group phw-s-search-group location-filter-wrapper", [h.$style["location-filter"], $.iconGlobalSearchHeaderView ? "" : ["phw-p-1", "phw-pr-0", "phw-pl-0", "phw-p-sm-0"]]]),
                        "data-ps": "015f7568-div-33"
                    }, [$.locationSearch ? e.createCommentVNode("", !0) : e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                        key: 0,
                        class: e.normalizeClass([h.$style["mobile-back-button"], "mobile-back-button", "phw-btn", "phw-g-btn-link", "phw-width-auto"]),
                        type: "button",
                        "aria-label": a.value.mobileBackBtn && a.value.mobileBackBtn.ariaLabel,
                        "ph-scroll": "#ph-search-backdrop",
                        "data-ph-at-id": "mobile-back-button",
                        "data-ps": "015f7568-a-4",
                        onClick: A[5] || (A[5] = l => e.unref(O)(l))
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", sn, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", ln, [e.withDirectives(e.createElementVNode("use", rn, null, 512), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])], 10, nn)), [
                        [e.unref(t.vPhwSetting)]
                    ]), $.showLocationIcon ? e.withDirectives((e.openBlock(), e.createElementBlock("span", on, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", cn, [e.withDirectives(e.createElementVNode("use", {
                        href: `#phw-cns-icon-${$.changeLocationIcon}`,
                        "data-ps": "015f7568-use-11"
                    }, null, 8, $n), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("label", hn, [e.createTextVNode(e.toDisplayString(a.value.locationSearchField && a.value.locationSearchField.label), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives(e.createElementVNode("input", {
                        id: "gllocationInput",
                        ref_key: "locationEle",
                        ref: f,
                        type: "text",
                        role: "combobox",
                        name: "location",
                        placeholder: a.value.locationSearchField && a.value.locationSearchField.placeholder,
                        "aria-autocomplete": "list",
                        "aria-haspopup": "listbox",
                        class: e.normalizeClass([
                            [$.showLocationIcon ? "phw-input-icon-pl" : "", e.unref(se) ? "phw-input-icon-pr" : "", $.iconGlobalSearchHeaderView ? h.$style["gsdd-popup-input-none"] : "", $.locationSearch && !$.iconGlobalSearchHeaderView ? "" : h.$style["gsdd-search-input"]], "phw-s-keywords phw-g-text-field-large phw-icon-left phw-s-input-search phw-height-4"
                        ]),
                        value: e.unref(se),
                        autocomplete: "off",
                        "data-ph-at-id": "global-search-location-input",
                        "aria-expanded": e.unref(he) ? "true" : "false",
                        "aria-owns": "gllocationListbox",
                        "aria-controls": "gllocationListbox",
                        "data-ps": "015f7568-input-2",
                        onInput: A[6] || (A[6] = l => e.unref(Ee)(l.target.value))
                    }, null, 42, pn), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                        tabindex: "0",
                        class: "phw-input-icon-right phw-s-keysearch-clear-location phw-btn phw-g-btn-link phw-width-auto",
                        type: "button",
                        "data-ph-at-id": "clear-globalsearch-link",
                        "aria-label": a.value.clearLocBtn && a.value.clearLocBtn.ariaLabel,
                        "data-ps": "015f7568-a-5",
                        onClick: A[7] || (A[7] = l => e.unref(Ie)())
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", fn, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", wn, [e.withDirectives(e.createElementVNode("use", un, null, 512), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])], 8, gn)), [
                        [e.vShow, e.unref(se) && !$.iconGlobalSearchHeaderView],
                        [e.unref(t.vPhwTrack), "clear_searches_click"],
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        id: "gllocationListbox",
                        class: e.normalizeClass([$.iconGlobalSearchHeaderView ? h.$style["gsdd-popup-search-suggestions"] : "", h.$style["gsdd-search-suggestions"], "gsdd-search-suggestions", "phw-p-1", "phw-pl-3", "phw-pr-3", "phw-text-l", "phw-p-xl-050", "phw-pl-xl-3", "phw-pr-xl-3", "phw-pl-lg-2", "phw-pr-lg-2", "phw-pl-sm-1", "phw-pr-sm-1"]),
                        role: "listbox",
                        tabindex: "-1",
                        "data-labelledby": "gllocationListbox",
                        "aria-label": a.value.locationSuggestionsText,
                        "aria-hidden": e.unref(K) ? "false" : "true",
                        "data-ps": "015f7568-div-34"
                    }, [e.unref(G).length && $.dataMode == "loc-cat" ? e.withDirectives((e.openBlock(), e.createElementBlock("ul", {
                        key: 0,
                        "aria-label": a.value.locationSuggestionsText,
                        "aria-labelledby": "locations-heading",
                        tabindex: "-1",
                        role: "group",
                        "aria-hidden": e.unref(K) ? "false" : "true",
                        class: e.normalizeClass([h.$style["gsdd-locations-suggested-list"], "phw-list-none", "phw-p-1", "phw-pl-0", "phw-pr-0", "phw-m-0", "phw-p-xl-050", "phw-pl-xl-0", "phw-pr-xl-0"]),
                        "data-ph-at-data-count": e.unref(G).length,
                        "data-ps": "015f7568-ul-9"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("li", {
                        id: "locations-heading",
                        role: "presentation",
                        class: e.normalizeClass([h.$style["gsdd-category-heading"], "phw-pb-050"]),
                        "data-ps": "015f7568-li-18"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", bn, [e.createTextVNode(e.toDisplayString(a.value.locationText), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]), (e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(e.unref(G), (l, k) => e.withDirectives((e.openBlock(), e.createElementBlock("li", {
                        key: k,
                        role: "option",
                        class: e.normalizeClass(["phsLocationsSuggested_" + k, h.$style["gsdd-locations-suggested-list-li"], "phw-posn-relative", "phw-d-flex"]),
                        "aria-setsize": e.unref(G).length,
                        "aria-posinset": k + 1,
                        tabindex: "-1",
                        "data-ps": "015f7568-li-19",
                        onClick: F => e.unref(ye)(l, "type_ahead_search")
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        ref_for: !0,
                        ref: "linkEle",
                        class: e.normalizeClass([h.$style["gsdd-link-elem"], "phw-g-text-default-dark phw-cursor-pointer"]),
                        "data-ph-tevent-attr-trait59": "location",
                        "data-ph-tevent-attr-trait60": l.key,
                        "data-ph-at-data-text": l.key,
                        "data-ph-at-data-count": l.total_count,
                        "data-ps": "015f7568-div-35"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Bn, [e.createTextVNode(e.toDisplayString(l.key) + " ", 1), e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                        class: e.normalizeClass([h.$style["gsdd-jobs-count"], "phw-pl-1"]),
                        "data-ps": "015f7568-span-61"
                    }, [e.createTextVNode("(" + e.toDisplayString(l.total_count) + ")", 1)], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", En, [e.createTextVNode(e.toDisplayString(a.value.cateJobs), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ])], 10, mn)), [
                        [e.unref(t.vPhwSetting)]
                    ])], 10, Sn)), [
                        [e.unref(t.vPhwSetting)]
                    ])), 128))], 10, yn)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(G).length && $.dataMode == "loc-less" ? e.withDirectives((e.openBlock(), e.createElementBlock("ul", {
                        key: 1,
                        "aria-label": a.value.locationSuggestionsText,
                        "aria-labelledby": "locations-heading",
                        tabindex: "-1",
                        role: "group",
                        "aria-hidden": e.unref(K) ? "false" : "true",
                        class: e.normalizeClass(["gsdd-locations-suggested-list", ["phw-list-none", "phw-p-1", "phw-pl-0", "phw-pr-0", "phw-m-0", "phw-p-xl-050", "phw-pl-xl-0", "phw-pr-xl-0"]]),
                        "data-ph-at-id": "location-options",
                        "data-ph-at-data-count": e.unref(G).length,
                        "data-ps": "015f7568-ul-10"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("li", {
                        id: "locations-heading",
                        role: "presentation",
                        class: e.normalizeClass([h.$style["gsdd-category-heading"], "phw-pb-050"]),
                        "data-ps": "015f7568-li-20"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Pn, [e.createTextVNode(e.toDisplayString(a.value.locationText), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]), (e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(e.unref(G), (l, k) => e.withDirectives((e.openBlock(), e.createElementBlock("li", {
                        key: k,
                        role: "option",
                        class: e.normalizeClass(["phsLocationsSuggested_" + k, h.$style["gsdd-locations-suggested-list-li"], "phw-posn-relative", "phw-d-flex"]),
                        "aria-setsize": e.unref(G).length,
                        "aria-posinset": k + 1,
                        tabindex: "-1",
                        "data-ps": "015f7568-li-21",
                        "data-ph-at-id": "suggested-data-list-item",
                        onClick: F => e.unref(ye)(l, "type_ahead_search")
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        ref_for: !0,
                        ref: "linkEle",
                        class: e.normalizeClass([h.$style["gsdd-link-elem"], "phw-g-text-default-dark phw-cursor-pointer", "phw-line-clamp phw-line-clamp-1 phw-word-break"]),
                        "data-ph-tevent-attr-trait59": "location",
                        "data-ph-tevent-attr-trait60": l.description || l.key,
                        "data-ph-at-id": "suggested-data-link",
                        "data-ph-at-data-text": l.description || l.key,
                        "data-ps": "015f7568-div-36"
                    }, [e.createTextVNode(e.toDisplayString(l.description || l.key), 1)], 10, xn)), [
                        [e.unref(t.vPhwSetting)]
                    ])], 10, Dn)), [
                        [e.unref(t.vPhwSetting)]
                    ])), 128))], 8, _n)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("div", Tn, [e.createTextVNode(e.toDisplayString(a.value.noLocationsText), 1)])), [
                        [e.vShow, !e.unref(G).length],
                        [e.unref(t.vPhwSetting)]
                    ])], 10, kn)), [
                        [e.vShow, e.unref(K)],
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", Nn, [e.unref(Ve) ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Ln, [e.unref(K) && e.unref(G) && !e.unref(se) && e.unref(G).length ? e.withDirectives((e.openBlock(), e.createElementBlock("span", In, [e.createTextVNode(e.toDisplayString(a.value.locationSuggestionsAvailableText), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(K) && e.unref(se) && e.unref(G) && e.unref(G).length ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Vn, [e.createTextVNode(e.toDisplayString(e.unref(ke)(a.value.locationsSuggestionsCount, {
                        count: e.unref(G).length
                    })), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(K) && e.unref(se) && !e.unref(G).length ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Cn, [e.createTextVNode(e.toDisplayString(a.value.noLocationsText), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", Mn, [e.unref(N) ? e.withDirectives((e.openBlock(), e.createElementBlock("span", An, [e.createTextVNode(e.toDisplayString(a.value.textClearedText), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), $.iconGlobalSearchHeaderView ? e.createCommentVNode("", !0) : e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: 1,
                        class: e.normalizeClass([
                            [$.mobileSearch && $.mobileSearchWithHeaderIcon && !$.locationSearch ? "phw-d-md-none" : ""], "phw-input-btn-group phw-p-1 phw-pl-0 phw-p-sm-0"
                        ]),
                        "data-ps": "015f7568-div-40"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                        id: "ph-search-backdrop",
                        type: "button",
                        class: e.normalizeClass([
                            [h.$style["input-group-btn"]], "phw-btn phw-input-btn phw-s-search-submit phw-mt-sm-2 phw-g-btn-large-primary"
                        ]),
                        "data-ph-at-id": "globalsearch-button",
                        "aria-label": a.value.globalsearchButton && a.value.globalsearchButton.ariaLabel,
                        "data-ps": "015f7568-button-2",
                        disabled: e.unref(at),
                        onClick: A[8] || (A[8] = l => e.unref(de)())
                    }, [$.showBtnText ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Rn, [e.createTextVNode(e.toDisplayString(a.value.globalsearchButton && a.value.globalsearchButton.text), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), $.showBtnIcon ? e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                        key: 1,
                        class: e.normalizeClass([$.showBtnText ? "phw-ml-1" : "", "phw-icon-ctr"]),
                        "data-ps": "015f7568-span-70"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", Gn, [e.withDirectives(e.createElementVNode("use", On, null, 512), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)], 10, Fn)), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]), $.iconGlobalSearchHeaderView ? e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                        key: 1,
                        class: e.normalizeClass(["phw-btn phw-g-btn-link", h.$style["gsdd-close-btn"], $.iconGlobalSearchHeaderView && $.locationSearch && e.unref(be) ? h.$style["gsdd-close-btn-location-enabled"] : ""]),
                        "aria-label": (Pe = (ve = a.value) == null ? void 0 : ve.closeGlobalSearchBtn) == null ? void 0 : Pe.ariaLabel,
                        type: "button",
                        "data-ps": "015f7568-button-4",
                        onClick: A[9] || (A[9] = l => e.unref(je)())
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", zn, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", Un, [e.withDirectives(e.createElementVNode("use", Kn, null, 512), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])], 10, Hn)), [
                        [e.unref(t.vPhwSetting)],
                        [e.unref(t.vPhwTrack), "close_global_search_inline_click"]
                    ]) : e.createCommentVNode("", !0)], 42, ta)), [
                        [e.unref(t.vPhwSetting)]
                    ])], 14, ea)), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]), a.value.keywordSuggestionWidget && $.enableKeywordSuggestion && !$.iconGlobalSearchHeaderView ? e.withDirectives((e.openBlock(), e.createElementBlock("div", qn, [e.withDirectives(e.createVNode(e.unref(Ld), {
                        content: a.value && a.value.keywordSuggestionWidget,
                        "content-id": $.contentId,
                        "show-icon": i.keywordSuggestionShowIcon,
                        "no-of-keywords": i.keywordSuggestionNoOfKeywords,
                        "content-filter-type": "static",
                        "content-model-type": "keyword_suggestion",
                        "data-ps": "015f7568-KeywordSuggestionDefultDefaultV1-1"
                    }, null, 8, ["content", "content-id", "show-icon", "no-of-keywords"]), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)
                }
            }
        }),
        Wn = {
            "gsdd-blur-background": "_gsdd-blur-background_eqrp6_3",
            "gsdd-z-index": "_gsdd-z-index_eqrp6_23",
            "gsdd-close-btn": "_gsdd-close-btn_eqrp6_31",
            "gsdd-close-btn-location-enabled": "_gsdd-close-btn-location-enabled_eqrp6_45",
            "gsdd-link-elem": "_gsdd-link-elem_eqrp6_55",
            "gsdd-cat-two-col": "_gsdd-cat-two-col_eqrp6_69",
            "gsdd-search-suggestions": "_gsdd-search-suggestions_eqrp6_75",
            "gsdd-popup-search-suggestions": "_gsdd-popup-search-suggestions_eqrp6_97",
            "gsdd-search-input": "_gsdd-search-input_eqrp6_103",
            "gsdd-category-heading": "_gsdd-category-heading_eqrp6_109",
            "gsdd-categories-suggested-list-li": "_gsdd-categories-suggested-list-li_eqrp6_115",
            "gsdd-locations-suggested-list-li": "_gsdd-locations-suggested-list-li_eqrp6_117",
            "gsdd-suggested-list-li": "_gsdd-suggested-list-li_eqrp6_119",
            "gsdd-jobs-suggested": "_gsdd-jobs-suggested_eqrp6_207",
            "gsdd-suggested-keywords-list": "_gsdd-suggested-keywords-list_eqrp6_209",
            "gsdd-locations-suggested": "_gsdd-locations-suggested_eqrp6_117",
            "gsdd-categorys-suggested": "_gsdd-categorys-suggested_eqrp6_213",
            "gsdd-suggested-keywords-suggested": "_gsdd-suggested-keywords-suggested_eqrp6_215",
            "gsdd-recentsearches-suggested": "_gsdd-recentsearches-suggested_eqrp6_217",
            "phw-s-keyword-suggestions": "_phw-s-keyword-suggestions_eqrp6_223",
            "gsdd-categories-suggested-list": "_gsdd-categories-suggested-list_eqrp6_115",
            "gsdd-locations-suggested-list": "_gsdd-locations-suggested-list_eqrp6_117",
            "gsdd-field-key": "_gsdd-field-key_eqrp6_255",
            "gsdd-flex-auto": "_gsdd-flex-auto_eqrp6_263",
            "gsdd-job-title": "_gsdd-job-title_eqrp6_271",
            "gsdd-job-info": "_gsdd-job-info_eqrp6_319",
            "input-group-btn": "_input-group-btn_eqrp6_363",
            "mobile-back-button": "_mobile-back-button_eqrp6_379",
            "gs-search-grp": "_gs-search-grp_eqrp6_463",
            "gsdd-popup-input-none": "_gsdd-popup-input-none_eqrp6_475",
            "form-group": "_form-group_eqrp6_481"
        },
        is = "";
    return ct(jn, [
        ["__cssModules", {
            $style: Wn
        }]
    ])
});