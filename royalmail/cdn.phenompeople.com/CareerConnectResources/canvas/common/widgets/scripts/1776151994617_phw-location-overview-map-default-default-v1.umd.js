(function(e, o) {
    typeof exports == "object" && typeof module < "u" ? module.exports = o(require("vue"), require("ph-common/ph-common")) : typeof define == "function" && define.amd ? define(["vue", "ph-common/ph-common"], o) : (e = typeof globalThis < "u" ? globalThis : e || self, e.PhwLocationOverviewMapDefaultDefaultV1 = o(e.Vue, e.phCommon))
})(this, function(e, o) {
    "use strict";
    var Ii = Object.defineProperty;
    var Ci = (e, o, le) => o in e ? Ii(e, o, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: le
    }) : e[o] = le;
    var L = (e, o, le) => (Ci(e, typeof o != "symbol" ? o + "" : o, le), le);
    const le = "ph:searchResults",
        Mt = "ph:mapDataTotalJobs",
        Qe = "refineMapSearch",
        Tt = "getBusinessRules",
        Pt = "locationmapsettings",
        _e = {
            city: "qcity",
            country: "qcountry",
            state: "qstate",
            location: "location",
            category: "category"
        };
    let et = "",
        Ae = !1,
        R = {},
        tt = {},
        Fe = null,
        q = ["country", "state", "city", "location", "storeName", "category"],
        b = {};
    async function Bt(d) {
        return await o.contentStore.getContent(d).then(t => t)
    }
    async function Lt(d) {
        return b = d, Ae || (b.rk && b.rk.length > 0 && await Ct().then(async t => {
            t && t.data && t.data[b.rk] && (b.country = t.data[b.rk].selected_fields, Fe = t.data[b.rk].condition)
        }), await dt().then(async t => {
            t.allFields && (q = t.allFields), b.allFields && b.allFields.length && (q = b.allFields), await Dt().then(() => {
                R = JSON.parse(JSON.stringify(t)), nt()
            })
        })), {
            assetUrls: R,
            locations: et
        }
    }

    function It(d) {
        Ae = d, Ae && o.subscribeEvent(le, t => {
            if (tt = t.totalJobs, o.publishEvent(Mt, {
                    totalJobs: tt
                }), !t.sortFilter) {
                const i = {};
                t.searchSelectionKeys.forEach(n => {
                    i[n.facet] = []
                }), t.searchSelectionKeys.forEach(n => {
                    i[n.facet].push(n.name)
                }), _t(i)
            }
        })
    }

    function Ct() {
        if (b.rk && b.rk.length > 0) {
            const d = {},
                t = {};
            return t.landingPageKeys = [b.rk], d.pageIdentifier = t, o.getDDO(Tt, d)
        }
    }
    async function dt() {
        return o.getSiteSettings("locationmapsettings"), await o.getDDO(Pt).then(d => {
            if (d && d.data && d.data.settings) return d.data.settings
        })
    }

    function Dt() {
        return it({
            country: [],
            state: []
        })
    }

    function Nt(d, t) {
        d && t && d.forEach(i => {
            if (i.field && i.value && t[i.field] && t[i.field].length) {
                const n = [],
                    h = t[i.field];
                i.value.forEach(u => {
                    u.key && h.indexOf(u.key) != -1 && n.push(u)
                }), i.value = n
            }
        })
    }
    async function it(d) {
        q.indexOf(b.locationKey) == -1 && q.push(b.locationKey), Ae && (q = ["country", "state", "city", "location", "storeName", "category", "type"]);
        const t = {
            selected_fields: d,
            all_fields: q,
            maps: !0,
            aggfield: b.locationKey,
            locale: o.phAppStore.locale,
            counts: !0,
            pageName: o.phAppStore.pageName,
            pageType: o.phAppStore.pageType
        };
        return b.country && (t.selected_fields = b.country), Fe && (t.condition = Fe), await o.getDDO(Qe, t).then(i => {
            let n = i[Qe] || i;
            n = n.data;
            const h = [],
                u = {};
            Ae && Nt(n.aggregations, d), n && n.aggregations && (n.aggregations.map(r => {
                r.field == b.locationKey && r.value.map(k => {
                    u[k.key.trim()] = k
                })
            }), n.aggregations.map((r, k) => {
                r.field === b.locationKey && r.value.map((w, S) => {
                    if (w.key.length > 0) {
                        u[w.key.trim()].latlong = w.latlong;
                        let v;
                        q.indexOf(b.locationKey) != -1 && (v = `${_e[b.locationKey]||`qk${b.locationKey}`}=${encodeURIComponent(w.key||"")}`), q.forEach(A => {
                            if (A !== b.locationKey && w[A]) try {
                                _e[A] ? v = `${v}&${_e[A]}=${encodeURIComponent(w[A]||"")}` : v = `${v}&qk${A}=${encodeURIComponent(w[A]||"")}`
                            } catch {}
                        }), b.rk && b.rk.length && (v = `${v}&rk=${b.rk}`);
                        const I = o.getUrl("search-results", {}, v);
                        w.locationUrl = I, w.locationKey = b.locationKey, u[w.key.trim()] && u[w.key.trim()].city && u[w.key.trim()].city.length > 0 || (u[w.key.trim()].city = w.key), u[w.key] && h.push(u[w.key])
                    }
                })
            }), et = h)
        })
    }

    function nt() {
        if (!R || !Object.keys(R).length) return;
        const d = R;
        let t, i;
        return t = b.markerImgName ? b.markerImgName : d.markerImageUrl.url, i = b.clusterImgName ? b.clusterImgName : d.clusterImageUrl.url, R.bgType = b.bgType ? b.bgType : R.bgType, R.markerImageUrl.url = t, R.clusterImageUrl.height = b.clusterImgHeight || d.clusterImageUrl.height, R.clusterImageUrl.width = b.clusterImgWidth || d.clusterImageUrl.width, R.clusterImageUrl.url = i, R.clusterTextColor = b.clusterTextColor || d.clusterTextColor, R.clusterTextFontSize = b.clusterTextFontSize || d.clusterTextFontSize, R
    }
    async function _t(d) {
        await dt().then(async t => {
            t.allFields && (q = t.allFields), b.allFields && b.allFields.length && (q = b.allFields), await it(d).then(() => {
                R = JSON.parse(JSON.stringify(t)), nt()
            })
        })
    }

    function at(d, t, i, n) {
        if (!d || !t) return "";
        if (typeof d == "object") {
            if (!i) return "";
            const h = t[i];
            let u = d[h];
            if (u || Object.keys(d).forEach(r => {
                    if (/[-*]/g.test(r)) {
                        const k = r.replace("*", "");
                        if (h >= k && (u = d[r]), !u) {
                            const w = r.split("-");
                            w && w.length === 2 && h >= w[0] && h <= w[1] && (u = d[r])
                        }
                    }
                }), !u)
                if (d.default) u = "default";
                else return "";
            return ot(u, t, n)
        }
        return ot(d, t, n)
    }

    function ot(d, t, i) {
        const n = /\{\{\s*(.*?)\s*\}\}/g,
            h = /\[\[\s*(.*?)\s*\]\]/g;
        return !d || typeof d != "string" || (d = d.replace(/&lt;/g, "<"), d = d.replace(/&gt;/g, ">"), d = d.replace(n, (u, r) => t.hasOwnProperty(r) ? t[r] : ""), i && (d = encodeURIComponent(d)), d = d.replace(h, (u, r) => {
            if (!r) return r
        })), d
    }
    const U = {
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
    class Ft {
        constructor() {
            L(this, "clearTimer");
            L(this, "listBoxElement");
            L(this, "comboBoxElement");
            L(this, "widgetElement");
            L(this, "widgetViewModel");
            L(this, "activeIndex", -1);
            L(this, "results", []);
            L(this, "name");
            L(this, "element");
            L(this, "isShowResultsOnFocus", "true");
            L(this, "isShowNoResults", "true");
            L(this, "isHideListBox", "true");
            L(this, "keyupDebounceHandler");
            L(this, "keydownDebounceHandler");
            L(this, "ignoreExpanded", !1);
            L(this, "ignoreComboExpanded", !1);
            L(this, "ignoreListBoxClickHandler", !1);
            L(this, "isEventraised", !1);
            L(this, "validationInfo", {
                listbox: {},
                input: {},
                widget: {}
            });
            L(this, "debounceTimer", 200)
        }
        init(t, i, n) {
            this.element = t, this.name = i && i.name, this.ignoreExpanded = i && i.ignoreExpanded, this.ignoreComboExpanded = i && i.ignoreComboExpanded, this.ignoreListBoxClickHandler = i && i.ignoreListBoxClickHandler;
            const h = o.getSiteSettings("debounceTimer");
            h && (this.debounceTimer = h), this.initiate(n);
            const u = this.validate();
            u && u.length && console.warn("A11y autocomplete setup is improper.Check errors ", u), this.setupEventListeners()
        }
        debounce(t, i) {
            let n;
            return function() {
                const h = this,
                    u = arguments;
                clearTimeout(n), n = setTimeout(() => t.apply(h, u), i)
            }
        }
        initiate(t) {
            this.comboBoxElement = this.element.parentElement, this.comboBoxElement && (this.comboBoxElement.hasAttribute("aria-haspopup") && (this.element.setAttribute("aria-haspopup", this.comboBoxElement.getAttribute("aria-haspopup")), this.comboBoxElement.getAttribute("role")), this.comboBoxElement.hasAttribute("aria-owns") && (this.element.setAttribute("aria-owns", this.comboBoxElement.getAttribute("aria-owns")), this.comboBoxElement.removeAttribute("aria-owns")), this.comboBoxElement.hasAttribute("role") && (this.element.setAttribute("role", this.comboBoxElement.getAttribute("role")), this.comboBoxElement.removeAttribute("role")));
            const i = this.element.getAttribute("aria-haspopup"),
                n = this.element.getAttribute("aria-owns"),
                h = this.element.getAttribute("role");
            this.validationInfo.input.ariaHaspopup = i, this.validationInfo.input.ariaOwns = i, this.validationInfo.input.role = h;
            const u = this.element.getAttribute("aria-autocomplete"),
                r = this.element.getAttribute("aria-controls");
            if (this.isHideListBox = this.element.getAttribute("data-show-listbox") ? this.element.getAttribute("data-show-listbox") : "true", this.isShowResultsOnFocus = this.element.getAttribute("showResultsOnFocus") || this.isShowResultsOnFocus, this.isShowNoResults = this.element.getAttribute("showNoResults") || this.isShowNoResults, this.validationInfo.input.ariaAutocomplete = u, this.validationInfo.input.ariaControls = r, this.listBoxElement = this.comboBoxElement.querySelector(`[data-labelledby=${n}]`), this.listBoxElement || (this.listBoxElement = this.comboBoxElement.parentElement && this.comboBoxElement.parentElement.querySelector(`[data-labelledby=${n}]`) || document.querySelector(`[data-labelledby=${n}]`)), this.listBoxElement) {
                this.validationInfo.listbox.exists = !0;
                const k = this.listBoxElement.getAttribute("data-labelledby");
                this.validationInfo.listbox.ariaLabelledby = k
            }
            this.widgetElement = this.findWidget(), this.validationInfo.widget.exists = this.widgetElement, this.widgetViewModel = t, this.validationInfo.widget.viewModelExist = this.widgetViewModel, this.validationInfo.widget.getFieldOptions = this.widgetViewModel ? this.widgetViewModel.getFieldOptions : void 0, this.validationInfo.widget.setFieldValue = this.widgetViewModel ? this.widgetViewModel.setFieldValue : void 0, this.validationInfo.widget.clearFieldValue = this.widgetViewModel ? this.widgetViewModel.clearFieldValue : void 0, this.validationInfo.widget.getActiveIndex = this.widgetViewModel ? this.widgetViewModel.getActiveIndex : void 0, this.validationInfo.widget.getActiveIndexOnBlur = this.widgetViewModel ? this.widgetViewModel.getActiveIndexOnFocusOut : void 0
        }
        validate() {
            const t = [];
            return this.validationInfo.input.ariaHaspopup || t.push("Missing aria-haspopup attribute on parent div"), this.validationInfo.input.ariaHaspopup || t.push("Missing  aria-owns attribute on parent div"), this.validationInfo.input.ariaOwns || t.push("Missing  aria-owns attribute on parent div"), this.validationInfo.input.ariaAutocomplete || t.push("Missing aria-autocomplete attribute on input elem"), this.validationInfo.input.ariaControls || t.push("Missing aria-controls attribute on input elem"), this.validationInfo.listbox.ariaLabelledby || t.push("Missing data-labelledby attribute on listbox elem"), this.validationInfo.widget.exists || t.push("Missing widget elem"), this.validationInfo.widget.viewModelExist || t.push("Missing widget viewmodel on widget elem"), this.validationInfo.widget.getFieldOptions || t.push("Missing getFieldOptions(fieldName) fn on widget elem"), this.validationInfo.widget.setFieldValue || t.push("Missing setFieldValue(fieldName, selectedItemIndex) fn on widget elem"), this.validationInfo.widget.clearFieldValue || t.push("Missing clearFieldValue(fieldName) fn on widget elem"), this.validationInfo.widget.getActiveIndex || t.push("Missing getActiveIndex(fieldName) fn on widget elem"), this.validationInfo.widget.getActiveIndexOnBlur, t
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
            const t = this.listBoxElement;
            if (!t) return;
            const i = t.querySelector(`#${this.name}-result-item-${this.activeIndex}`);
            if (!i) return;
            const n = t.querySelectorAll(".listbox-header"),
                h = n.length > 0 ? Array.from(n).reduce((O, C) => O + C.offsetHeight, 0) : 0,
                {
                    scrollTop: u
                } = t,
                r = t.clientHeight,
                k = i.getBoundingClientRect(),
                w = t.getBoundingClientRect(),
                S = k.top - w.top + u,
                v = S + i.offsetHeight,
                I = u + h,
                A = u + r,
                M = 2;
            if (S < I - M) {
                const O = Math.max(S - h, 0);
                t.scrollTop !== O && (t.scrollTop = O)
            } else if (v > A + M) {
                const O = t.scrollHeight - r,
                    C = Math.min(v - r, O);
                t.scrollTop !== C && (t.scrollTop = C)
            }
        }
        setActiveListItem(t) {
            if (this.listBoxElement) {
                const i = this.listBoxElement.querySelectorAll('[role="option"]'),
                    n = `${this.name}-result-item-`;
                for (let u = 0; u < i.length; u += 1) {
                    const r = i[u],
                        k = n + u;
                    r.setAttribute("id", k), !t && u === this.activeIndex ? (r.setAttribute("aria-selected", "true"), r.classList.add("listitem-focused"), this.element.setAttribute("aria-activedescendant", k)) : (r.removeAttribute("aria-selected"), r.classList.remove("listitem-focused"))
                }
                if (this.activeIndex === -1 && this.element.setAttribute("aria-activedescendant", ""), document == null ? void 0 : document.querySelector(".phw-s-language-selector-modal-popup")) this.scrollControlInDialog();
                else {
                    const u = this.listBoxElement;
                    if (u) {
                        const r = u.querySelector(`#${this.name}-result-item-${this.activeIndex}`);
                        r && r.scrollIntoView({
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
            const t = this.widgetViewModel;
            return new Promise(i => {
                if (t && t.getFieldOptions) {
                    const n = t.getFieldOptions(this.name);
                    !n && !n.then ? (console.warn("getFieldOptions(fieldName) is neither returning anything nor defined as a promise"), i([])) : n.then ? n.then(h => {
                        i(h), this.results = h, this.activeIndex = this.widgetViewModel.getActiveIndex(this.name), this.isShowResultsOnFocus === "false" && this.element.value.length === 0 ? this.hideListbox() : document.activeElement === this.element && this.showListbox(), this.isShowNoResults === "false" && !this.results.length && this.hideListbox()
                    }) : (i(n || []), this.results = n, this.activeIndex = this.widgetViewModel.getActiveIndex(this.name), this.isShowResultsOnFocus === "false" && this.element.value.length === 0 ? this.hideListbox() : document.activeElement === this.element && this.showListbox(), this.isShowNoResults === "false" && !this.results.length && this.hideListbox())
                } else i([])
            })
        }
        keyupHandler(t) {
            const i = t.which || t.keyCode;
            switch (i) {
                case U.UP:
                case U.DOWN:
                case U.ESC:
                case U.RETURN:
                    t.preventDefault();
                    return
            }
            let n = -1;
            if (n = Object.keys(U).findIndex(h => i === U[h]), (this.isShowResultsOnFocus === "true" || this.element.value && this.element.value.length && n === -1) && this.updateResults(), this.validationInfo.input.ariaAutocomplete === "both") switch (i) {
                case U.BACKSPACE:
                    return;
                default:
                    this.widgetViewModel && this.widgetViewModel.setFieldValue && this.widgetViewModel.setFieldValue(this.name, this.activeIndex)
            } else U.BACKSPACE === i && this.updateResults()
        }
        findWidget() {
            return this.element.__vueParentComponent && this.element.__vueParentComponent.vnode.el
        }
        keydownHandler(t) {
            if (t.target) switch (t.which || t.keyCode) {
                case U.DOWN:
                    this.isListboxHidden() ? this.updateResults().then(() => {
                        this.moveDown()
                    }) : this.moveDown();
                    break;
                case U.UP:
                    this.isListboxHidden() ? this.updateResults().then(() => {
                        this.moveUp()
                    }) : this.moveUp();
                    break;
                case U.ESC:
                    this.clearFieldAndCloseListbox();
                    break;
                case U.RETURN:
                    this.activeIndex !== -1 && t.preventDefault(), this.onEnter();
                    return;
                case U.TAB:
                case (t.shiftKey && t.key === U.TAB):
                    this.blurHandler(t);
                    return
            }
            return !0
        }
        focusHandler() {
            this.isShowResultsOnFocus === "true" && this.updateResults().then(() => {
                if (this.listBoxElement) {
                    const t = this.listBoxElement.querySelectorAll('[role="option"]'),
                        i = `${this.name}-result-item-`;
                    for (let n = 0; n < t.length; n += 1) {
                        const h = t[n],
                            u = i + n;
                        h.setAttribute("id", u)
                    }
                }
            })
        }
        listBoxClickHandler(t) {
            if (t.target) {
                const i = this.getLIElement(t.target);
                let n = -1;
                i && i.id && (n = parseInt(i.id.split(`${this.element.name}-result-item-`)[1]), this.activeIndex = n, this.onEnter(), this.hideListbox())
            }
        }
        getLIElement(t) {
            let i = t,
                n = i ? i.nodeName === "LI" : void 0;
            for (; i && !n;) i = i.parentElement, n = i ? i.nodeName === "LI" : void 0;
            return n ? i : void 0
        }
        blurHandler(t, i) {
            i ? t.target && t.target.nodeName !== "LI" && (clearTimeout(this.clearTimer), this.showListbox()) : this.clearTimer = setTimeout(() => {
                this.widgetViewModel && this.widgetViewModel.getActiveIndexOnBlur && this.widgetViewModel.getActiveIndexOnBlur(this.activeIndex, this.name, t), this.widgetViewModel && this.widgetViewModel.getFocusedField && this.widgetViewModel.getFocusedField() === this.name ? (this.widgetViewModel.setFocusedField && this.widgetViewModel.setFocusedField(), this.activeIndex = -1) : this.hideListbox()
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
            const t = this.element;
            this.keyupDebounceHandler = this.debounce(this.keyupHandler, this.debounceTimer), this.keydownDebounceHandler = this.debounce(this.keydownHandler, this.debounceTimer), document.addEventListener("mouseup", this.hideDropdown.bind(this)), t.addEventListener("keyup", this.keyupDebounceHandler.bind(this)), t.addEventListener("keydown", this.keydownDebounceHandler.bind(this)), t.addEventListener("focus", this.focusHandler.bind(this)), this.listBoxElement && (this.ignoreListBoxClickHandler || this.listBoxElement.addEventListener("click", this.listBoxClickHandler.bind(this)), this.listBoxElement.addEventListener("focus", i => {
                this.blurHandler(i, !0)
            }), this.listBoxElement.addEventListener("blur", this.blurHandler.bind(this)))
        }
        hideDropdown(t) {
            !this.element.contains(t.target) && this.element !== t.target && !this.listBoxElement.contains(t.target) && this.listBoxElement !== t.target && this.blurHandler(t, !1)
        }
        destroyed() {
            const t = this.element;
            t.removeEventListener("keyup", this.keyupHandler), t.removeEventListener("keydown", this.keydownHandler), t.removeEventListener("keyup", this.keyupDebounceHandler), t.removeEventListener("keydown", this.keydownDebounceHandler), t.removeEventListener("focus", this.focusHandler), t.removeEventListener("blur", this.blurHandler), document.removeEventListener("mouseup", this.hideDropdown.bind(this)), this.listBoxElement && !this.ignoreListBoxClickHandler && this.listBoxElement.removeEventListener("click", this.listBoxClickHandler)
        }
    }

    function st() {
        return {
            MAP_PROVIDERS: {
                GOOGLE: "google",
                MAPBOX: "mapbox"
            },
            GLOBAL_VAR_GOOGLE: "google",
            DEFAULT_MAPBOX_BG_TYPE: "streets",
            MAP_SCRIPTS: {
                google: {
                    apiScript: "https://maps.googleapis.com/maps/api/js",
                    clusterJsScript: "markerclusterer-v1.js",
                    gmapsInfoBoxScript: "gmaps-infobox-v1.js"
                },
                mapbox: {
                    mapboxScript: "mapbox-gl-v1.3.0.js",
                    superClusterJsScript: "supercluster.min.js",
                    mapboxTurf: "mapbox-turf.min-v1.js",
                    mapboxSearch: "mapbox-gl-geocoder.min.js",
                    mapboxDirections: "mapbox-gl-directions.js"
                }
            },
            DEFAULT_GOOGLE_BG_TYPE: "retro",
            mapConfig: {
                enableDirections: {
                    modules: [{
                        name: "job"
                    }, {
                        name: "event"
                    }]
                }
            },
            MAP_BOX_DATE_LINE: {
                mapboxTileSetId: "phenompeople.8t381n4o",
                mapboxTileSetUrl: "mapbox://phenompeople.8t381n4o",
                mapboxTileSetSource: "dateline-2g6kzo"
            },
            MAP_LOAD_MODES: {
                STATIC: "s",
                STATIC_INLINE: "si",
                JS: "i",
                NONE: "n"
            },
            MAP_STYLES: {
                mapbox: "https://api.mapbox.com/mapbox-gl-js/v2.9.2/mapbox-gl.css"
            }
        }
    }
    const Rt = window;

    function Ot() {
        let d, t;
        const i = {
            rootMargin: "100px"
        };

        function n() {
            Rt.IntersectionObserver && (d = new IntersectionObserver(u => {
                u.forEach(r => {
                    if (r.isIntersecting) {
                        const k = r.target;
                        t(), d.unobserve(k)
                    }
                })
            }, i))
        }
        n();

        function h(u, r) {
            t = r, d.observe(u)
        }
        return {
            observeMap: h
        }
    }

    function Gt() {
        let d, t, i, n, h, u;

        function r() {
            u !== void 0 && clearTimeout(u), u = void 0
        }
        const {
            turf: k
        } = window, w = (y, H) => {
            let D;
            return function() {
                const j = this,
                    G = arguments;
                clearTimeout(D), D = setTimeout(() => y.apply(j, G), H)
            }
        };

        function S(y) {
            const H = {
                width: 24,
                height: 24
            };
            if (!y && !y.layers) throw new Error("An array of layers is required");
            if (!y && !y.accessibleLabelProperty) throw new Error("a valid accessibleLabelProperty is required");
            n = Object.assign(H, y)
        }

        function v() {
            t && t.forEach(y => {
                y.marker && (i.getCanvasContainer().removeChild(y.marker), delete y.marker)
            })
        }

        function I() {
            r(), v(), t = i.queryRenderedFeatures({
                layers: n.layers
            }), t.map((y, H) => {
                let {
                    width: D,
                    height: j
                } = n;
                n.clusterText = n.clusterText || "", n.clusterLocationText = n.clusterLocationText || "", n.markerText = n.markerText || "";
                const G = y.properties[n.accessibleLabelProperty];
                let ee;
                y.layer.id === "cluster-count" && y.properties.point_count && (ee = `${y.properties.point_count} ${n.clusterLocationText||"cluster"}`), y.marker = document.createElement("button"), y.marker.setAttribute("aria-label", G ? `${G} ${n.markerText}` : `${n.clusterText} ${ee}`), y.marker.setAttribute("title", G ? `${G} ${n.markerText}` : `${n.clusterText} ${ee}`), n.searchResultMode ? (y.marker.setAttribute("tabindex", -1), y.marker.setAttribute("aria-hidden", !0)) : y.marker.setAttribute("tabindex", 0), y.marker.setAttribute("role", "button"), y.marker.setAttribute("type", "button"), y.marker.setAttribute("data-index", H), y.marker.style.display = "block";
                let N;
                if (y.geometry.type === "Point") N = i.project(y.geometry.coordinates);
                else {
                    const T = k.bboxPolygon(y),
                        P = i.project([T[0], T[1]]),
                        c = i.project([T[2], T[3]]);
                    D = Math.abs(c.x - P.x), j = Math.abs(c.y - P.y), N = {
                        x: (c.x + P.x) / 2,
                        y: (c.y + P.y) / 2
                    }
                }
                return y.marker.style.width = `${D}px`, y.marker.style.height = `${j}px`, y.marker.style.transform = `translate(-50%, -50%) translate(${N.x}px, ${N.y}px)`, y.marker.className = "mapboxgl-accessibility-marker", y.layer.id === "unclustered-count" ? y.marker.addEventListener("click", T => {
                    const P = parseInt(T.target.getAttribute("data-index"));
                    P !== -1 && setTimeout(() => {
                        n.handleMarker(t[P], P)
                    })
                }) : y.marker.addEventListener("click", T => {
                    const P = parseInt(T.target.getAttribute("data-index"));
                    if (P !== -1) {
                        const c = t[P].properties.cluster_id,
                            {
                                coordinates: m
                            } = t[P]._geometry;
                        n.handleCluster(c, m)
                    }
                    i.zoomTo(12)
                }), i.getCanvasContainer().appendChild(y.marker), y
            })
        }

        function A() {
            r(), v()
        }

        function M() {
            i.isMoving() || d()
        }

        function O(y) {
            return i = y, d = w(I, 100), i.on("movestart", A), i.on("moveend", M), i.on("render", M), h = document.createElement("div"), h
        }

        function C() {
            h.parentNode.removeChild(h), i.off("movestart", A), i.off("moveend", M), i.off("render", M), r()
        }
        return {
            initiator: S,
            onRemove: C,
            onAdd: O,
            _movestart: A,
            _render: M,
            queryFeatures: I,
            clearMarkers: v
        }
    }
    const E = window,
        Vt = 10,
        Ut = "450px",
        Re = "map_location_selector",
        Ht = "map_cluster_selector",
        rt = "view_all_jobs_click",
        lt = {
            jobLocation: "",
            restaurants: "food_and_drink",
            shopping: "",
            parking: ""
        },
        $t = ["CN", "IN", "US"],
        Kt = {
            driving: "icon-car-3",
            walking: "icon-walk",
            cycling: "icon-bicycle"
        },
        Wt = "ph:marker",
        ct = "marker_close_click",
        $e = st(),
        ut = 'button, a, input, canvas, select, textarea, [tabindex]:not([tabindex="-1"])';
    let Le, Ie, Ce;

    function jt(d) {
        let {
            searchResultMode: t,
            hideLocationPopup: i,
            providerOptions: n,
            mapboxGeoSearch: h,
            enableMapboxDirections: u,
            element: r,
            mapData: k,
            resolveMapData: w,
            totalJobs: S,
            prepareMarkerInfoWindowContent: v,
            freezeScreen: I,
            travelType: A,
            content: M,
            http: O,
            travelDuration: C,
            noRootFound: y,
            errorMsg: H,
            searchString: D,
            showAllJobLocations: j,
            isDestinationSet: G,
            showTransportDirections: ee,
            hideLoader: N,
            unhideLoader: T,
            props: P
        } = d, c, m, V = {}, z, te, Y, ue, X, Q;
        const F = r.value.querySelector("#map");

        function xe(a) {
            if (!E.mapboxgl && n.apiKey) {
                const $ = $e.MAP_SCRIPTS[$e.MAP_PROVIDERS.MAPBOX],
                    p = o.getSiteSettings("mapBoxGlScript") || $.mapboxScript,
                    s = n.mapboxTurf || $.mapboxTurf,
                    l = n.platformAssetsBaseUrl + p,
                    f = n.platformAssetsBaseUrl + s,
                    g = $e.MAP_STYLES[$e.MAP_PROVIDERS.MAPBOX];
                o.loadStyle("mapboxStyles", g), T(), J("turfSrc", f).then(() => {
                    J("mapBoxScript", l).then(() => {
                        if (h) {
                            const x = n.mapboxSearch || $.mapboxSearch,
                                B = n.platformAssetsBaseUrl + x;
                            J("geoCoderSrc", B)
                        }
                        if (u) {
                            const x = n.mapboxDirections || $.mapboxDirections,
                                B = n.platformAssetsBaseUrl + x;
                            J("directionsSrc", B)
                        }!u && !h && (pe(), N())
                    })
                })
            } else pe(), N()
        }

        function J(a, $) {
            const {
                phw: p
            } = window;
            return p && p.platform, o.loadScript(a, $)
        }

        function Se(a) {
            a.searchType = "marker", a.isSearchType && (a.searchType = "search bar"), o.trackWidgetClick(r, Re, a), setTimeout(() => {
                const $ = r.value.querySelector("#map .phs-location-link");
                $ && $.addEventListener("click", () => {
                    o.trackWidgetClick($, rt, a)
                })
            }, 500)
        }

        function de() {
            if (V.features.forEach((a, $) => {
                    m.extend(a.geometry.coordinates)
                }), E.turf) {
                const $ = {
                        type: "FeatureCollection",
                        features: k.reduce((l, f) => {
                            const g = he(f);
                            return l.push(g), l
                        }, [])
                    },
                    p = E.turf.extent($),
                    s = [p[0] - 1, p[1] - 1, p[2] + 1, p[3] + 1];
                c.fitBounds(s, {
                    padding: {
                        top: 10,
                        bottom: 25,
                        left: 25,
                        right: 50
                    }
                }, {
                    animate: !1
                })
            } else c.fitBounds(m, {
                animate: !1
            });
            c.fitBounds(m, {
                animate: !1
            }), V.features.length < Vt && c.setZoom(c.getZoom() - 1)
        }

        function he(a) {
            const $ = {};
            $.type = "Feature", $.geometry = {}, $.geometry.type = "Point", $.properties = {}, $.properties.type = "Point";
            for (const p in a) a[p] && ($.properties[p] = a[p]);
            if (a.key) {
                const p = a.key.trim();
                $.properties.key = p, $.key = p, $.properties.count = a.count
            }
            return $.geometry.coordinates = [], $.geometry.coordinates.push(a.latlong.lon), $.geometry.coordinates.push(a.latlong.lat), $
        }

        function pe() {
            T();
            const a = w();
            if (k = a, !a || !Object.keys(a).length) return;
            const $ = Z(a);
            if (E.mapboxgl.accessToken = n.apiKey, n.baseApiUrl && (E.mapboxgl.baseApiUrl = n.baseApiUrl), m = new E.mapboxgl.LngLatBounds, F && $ && $.length) {
                if (F.style.minHeight = F.style.minHeight || Ut, c = new E.mapboxgl.Map({
                        container: F,
                        style: qe(n.bgType),
                        attributionControl: !1,
                        zoom: n.zoomMap,
                        renderWorldCopies: !0,
                        scrollZoom: !1,
                        dragRotate: !1,
                        sprite: "mapbox://sprites/mapbox/bright-v8"
                    }), Ee(), de(), N(), $ && $.length === 1 ? (!t || t && S !== 0) && ge(!0) : (n.useClusters || $ && $.length > 1) && (!t || t && S !== 0) && ge(!1), h) {
                    const p = new E.MapboxGeocoder({
                        accessToken: E.mapboxgl.accessToken,
                        mapboxgl: E.mapboxgl,
                        marker: !1,
                        types: "country,region,postcode,district,place,locality,neighborhood,address"
                    });
                    r.value.querySelector("#geocoder").appendChild(p.onAdd(c))
                }
                if (c.addControl(new E.mapboxgl.NavigationControl), c.on("zoomend", () => {
                        new E.mapboxgl.Popup({
                            closeOnClick: !0
                        });
                        const p = r.value.getElementsByClassName("mapboxgl-popup");
                        p[0] && p.length > 1 && p[0].remove()
                    }), t) {
                    const p = r.value.querySelector("#map"),
                        s = p.querySelectorAll("[tabindex]");
                    s && s.forEach(g => {
                        g && g.setAttribute("tabindex", "-1"), g && g.setAttribute("aria-hidden", "true")
                    });
                    const l = r.value.querySelectorAll(".mapboxgl-ctrl button,.mapboxgl-ctrl a");
                    for (let g = 0; g < l.length; g++) l[g] && l[g].setAttribute("tabindex", "-1"), l[g] && l[g].setAttribute("aria-hidden", "true");
                    const f = p.querySelector(".mapboxgl-ctrl-compass");
                    f.classList && f.classList.add("hide"), setTimeout(() => {
                        const g = p.querySelectorAll(".phs-location-link, .infoTitle, .infoState, .mapboxgl-popup-close-button");
                        for (let x = 0; x < g.length; x++) g[x] && g[x].setAttribute("tabindex", "-1"), g[x] && g[x].setAttribute("aria-hidden", "true")
                    }, 500)
                } else c.addControl(new E.mapboxgl.FullscreenControl)
            }
            N()
        }

        function Ee() {
            const a = F.querySelector("canvas");
            a == null || a.removeAttribute("aria-label"), a.setAttribute("tabindex", -1)
        }

        function fe() {
            const a = o.phAppStore.worldViewMapBoxCountry;
            if (!a || $t.indexOf(a) === -1) return;
            ["admin-0-boundary", "admin-1-boundary", "admin-0-boundary-disputed", "admin-1-boundary-bg", "admin-0-boundary-bg"].forEach(p => {
                try {
                    c.getFilter(p) && c.setFilter(p, ["match", ["get", "worldview"],
                        ["all", a], !0, !1
                    ])
                } catch {}
            })
        }

        function ie() {
            const a = {
                mapRef: c
            };
            r.value.querySelector(".mapboxgl-ctrl-shrink") ? (F.setAttribute("role", "dialog"), F.setAttribute("aria-modal", "true"), ne(F, !1)) : (F.setAttribute("role", "region"), F.removeAttribute("aria-modal"), ne(F, !0), setTimeout(() => {
                a.mapRef.resize()
            }, 300))
        }

        function ne(a, $) {
            $ ? (Le = null, Ie = null, Ce = null, a.removeEventListener("keydown", ae)) : (Le = a.querySelectorAll(ut)[0], Ie = a.querySelectorAll(ut), Ce = Ie[Ie.length - 1], a.addEventListener("keydown", ae, !0))
        }

        function ae(a) {
            (a.key === "Tab" || a.keyCode === 9) && (a.shiftKey ? document.activeElement === Le && (Ce.focus(), a.preventDefault()) : document.activeElement === Ce && (Le.focus(), a.preventDefault()))
        }

        function ge(a) {
            c.on("load", () => {
                if (c.resize(), de(), c.loadImage(n.assetUrls.clusterAssetUrl, ($, p) => {
                        c.addImage("clusterImg", p), c.loadImage(n.assetUrls.pinAssetUrl, (s, l) => {
                            c.addImage("markerImg", l), c.addSource("location", {
                                type: "geojson",
                                data: V,
                                cluster: !0,
                                clusterMaxZoom: 14,
                                clusterRadius: n.clusterRadius
                            }), c.addLayer({
                                id: "cluster-count",
                                type: "symbol",
                                source: "location",
                                filter: ["has", "point_count"],
                                layout: {
                                    "icon-image": "clusterImg",
                                    "icon-size": .75,
                                    "text-field": "{point_count_abbreviated}",
                                    "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                                    "text-size": parseInt(n.assetUrls.styles[0].textSize)
                                },
                                paint: {
                                    "text-color": n.assetUrls.styles[0].textColor
                                }
                            }), c.addLayer({
                                id: "unclustered-count",
                                type: "symbol",
                                source: "location",
                                filter: ["!", ["has", "point_count"]],
                                layout: {
                                    "icon-image": "markerImg",
                                    "icon-size": 1
                                },
                                paint: {
                                    "text-color": "red"
                                }
                            });
                            const f = Gt();
                            f.initiator({
                                accessibleLabelProperty: "city",
                                layers: ["unclustered-count", "cluster-count"],
                                handleMarker: me,
                                handleCluster: ve,
                                markerText: M.markerText,
                                clusterText: M.clusterText,
                                clusterLocationText: M.clusterLocationText,
                                searchResultMode: t
                            }), c.addControl(f), c.addLayer({
                                id: $e.MAP_BOX_DATE_LINE.mapboxTileSetId,
                                type: "line",
                                source: {
                                    type: "vector",
                                    url: $e.MAP_BOX_DATE_LINE.mapboxTileSetUrl
                                },
                                "source-layer": $e.MAP_BOX_DATE_LINE.mapboxTileSetSource,
                                layout: {
                                    "line-join": "round",
                                    "line-cap": "round"
                                },
                                paint: {
                                    "line-color": n.dateLineColor || "#045572",
                                    "line-width": 2,
                                    "line-dasharray": [5, 2]
                                }
                            }), c.on("mouseenter", "cluster-count", () => {
                                c.getCanvas().style.cursor = "pointer"
                            }), c.on("mouseleave", "cluster-count", () => {
                                c.getCanvas().style.cursor = ""
                            }), c.on("mouseenter", "unclustered-count", () => {
                                c.getCanvas().style.cursor = "pointer"
                            }), c.on("mouseleave", "unclustered-count", () => {
                                c.getCanvas().style.cursor = ""
                            }), c.on("click", "unclustered-count", g => {
                                const x = g.features[0];
                                me(x), Se(x)
                            }), c.on("click", "cluster-count", g => {
                                ye(g)
                            }), ie()
                        })
                    }), a) {
                    const $ = new E.mapboxgl.LngLatBounds,
                        p = Z(k);
                    if (p && p && p.length && (p.forEach((l, f) => {
                            p.length === 1 && c.setZoom(12);
                            const g = new E.mapboxgl.LngLat(parseFloat(l.latLngObj[0]), parseFloat(l.latLngObj[1]));
                            $.extend(g);
                            const x = v(l.data.properties);
                            c.loadImage(n.assetUrls.pinAssetUrl, (B, _) => {
                                let re, W;
                                W = new E.mapboxgl.Popup, _ && (_.alt = "location marker", _.role = "button", _.setAttribute("key-alt", "location marker")), (i === "false" || i === !1) && (W = new E.mapboxgl.Popup().setHTML(x).setLngLat(g).addTo(c)), re = new E.mapboxgl.Marker(_).setLngLat(g).setPopup(W).addTo(c), W.on("open", () => {
                                    o.trackWidgetClick(r, Re, l)
                                }), W.on("close", () => {
                                    o.trackWidgetClick(r, ct, {})
                                }), p.length === 1 && !W.isOpen() && (P == null ? void 0 : P.defaultSingleLocationPopup) && (re.togglePopup(), setTimeout(() => {
                                    const At = r.value.querySelector(".map .phs-location-link");
                                    At && At.addEventListener("click", () => {
                                        o.trackWidgetClick(r, rt, l)
                                    })
                                }, 100))
                            })
                        }), u && !z)) {
                        let l = !1;
                        z = new E.MapboxDirections({
                            accessToken: E.mapboxgl.accessToken
                        }), c.addControl(z, "top-left"), z.setDestination(`${myLatLng.lng},${myLatLng.lat}`), z.on("origin", f => {
                            if (f && f.feature && f.feature.geometry && f.feature.geometry.coordinates && f.feature.geometry.coordinates.length) {
                                const g = {};
                                g.longitude = f.feature.geometry.coordinates[0], g.latitude = f.feature.geometry.coordinates[1], o.localStore.setItem("userLocation", JSON.stringify(g)), mark && mark.remove(), l = !0
                            }
                        }), z.on("clear", f => {
                            f && mark && l && (mark.addTo(c), popup.addTo(c), l = !1)
                        })
                    }
                    const s = m.getCenter();
                    c.setCenter(s), c.setZoom(c.getZoom() - 1), c.on("load", () => {
                        c.resize(), ie(), fe(), be()
                    })
                }
                fe()
            })
        }

        function me(a, $) {
            a.isSearchType = !1, t && X !== a.properties.city && Q !== a.properties.count ? (X = a.properties.city, Q = a.properties.count, Be()) : t || (setTimeout(() => {
                se(a, $)
            }, 50), be(a, void 0, !0))
        }

        function ve(a, $) {
            c.getSource("location").getClusterExpansionZoom(a, (s, l) => {
                s || c.easeTo({
                    center: $,
                    zoom: l
                })
            }), o.trackWidgetClick(r.value, Ht, {
                clusterId: a
            });
            const p = r.value.querySelector("#map");
            p && (p.setAttribute("tabindex", "0"), p.setAttribute("aria-label", "map"), setTimeout(() => {
                p.focus()
            }, 250))
        }

        function ye(a) {
            const $ = c.queryRenderedFeatures(a.point, {
                    layers: ["cluster-count"]
                }),
                p = $[0].properties.cluster_id;
            c.getSource("location").getClusterExpansionZoom(p, (l, f) => {
                l || c.easeTo({
                    center: $[0].geometry.coordinates,
                    zoom: f
                })
            });
            const s = r.value.querySelector("#map");
            s && (s.setAttribute("tabindex", "0"), s.setAttribute("aria-label", "map"), setTimeout(() => {
                s.focus()
            }, 250))
        }

        function oe(a) {
            const $ = {};
            if ($.features = [], Array.isArray(a)) return a.forEach(p => {
                const s = K(p);
                $.features.push(s)
            }), V = $, $.features;
            if (!Array.isArray(a)) return K(a)
        }

        function K(a) {
            const $ = {};
            $.type = "Feature", $.geometry = {}, $.geometry.type = "Point", $.properties = {}, $.type = "Point";
            for (const p in a) a[p] && ($.properties[p] = a[p]);
            if (a && a.key) {
                const p = a.key.trim();
                $.properties.key = p, $.key = p, $.properties.count = a.count
            }
            return $.geometry.coordinates = [], $.geometry.coordinates.push(a.latlong.lon), $.geometry.coordinates.push(a.latlong.lat), $
        }

        function Z(a) {
            const $ = oe(a),
                p = Array.isArray($),
                s = [];
            return p ? $.forEach(l => {
                l.geometry.coordinates ? s.push({
                    latLngObj: l.geometry.coordinates,
                    data: l
                }) : s.push({
                    latLngObj: {
                        lat: parseFloat(l.latitude),
                        lng: parseFloat(l.longitude)
                    },
                    data: l
                })
            }) : s.push({
                latLngObj: {
                    lat: parseFloat(a.latitude),
                    lng: parseFloat(a.longitude)
                },
                data: a
            }), s
        }

        function se(a, $) {
            a.locationSearchKey = a.properties.locationKey;
            const p = v(a.properties),
                s = r.value.getElementsByClassName("mapboxgl-popup");
            s[0] && s[0].remove(), new E.mapboxgl.Popup({
                closeOnClick: !0
            }).setLngLat(a.geometry.coordinates).setHTML(p).addTo(c);
            const l = o.dialogModal.fetchElem(r.value, ".phw-s-close-button"),
                f = r.value.querySelector("#map .mapboxgl-popup-content");
            if (l && l.setAttribute("aria-hidden", "true"), f) {
                const g = r.value.querySelector(".mapboxgl-control-container"),
                    x = r.value.querySelector(".mapboxgl-canvas-container"),
                    B = f.querySelector(".mapboxgl-popup-close-button");
                B.setAttribute("aria-label", M.closePopupAriaLabel || "close dialogue"), Math.random().toString(36).replace(/[^a-z]+/g, ""), t ? (f.setAttribute("tabindex", "-1"), f.setAttribute("aria-hidden", "true"), f.setAttribute("role", "dialog"), f.setAttribute("aria-modal", "true")) : (g && (g.setAttribute("aria-hidden", "true"), f.setAttribute("aria-hidden", "false"), g.setAttribute("tabindex", "-1")), x && x.setAttribute("aria-hidden", "true"), f.setAttribute("tabindex", "0"), f.setAttribute("role", "dialog"), f.setAttribute("aria-modal", "true"), f.setAttribute("aria-label", M.locationDetailsPopupAriaLabel || "location details")), B.addEventListener("click", () => {
                    l && l.removeAttribute("aria-hidden"), g && (g.removeAttribute("aria-hidden"), f.removeAttribute("aria-hidden")), x && x.removeAttribute("aria-hidden"), r.value.removeEventListener("keydown", _), We(a.properties, $)
                });
                const _ = re => {
                    if (re.keyCode === 27) {
                        let W = new Event("click");
                        B.dispatchEvent(W), r.value.removeEventListener("keydown", _)
                    }
                };
                r.value.addEventListener("keydown", _), B.focus(), ne(f, !1)
            }
        }

        function We(a, $) {
            o.trackWidgetClick(r, ct, {
                markerData: a
            });
            const p = r.value.querySelector(`#map .mapboxgl-accessibility-marker[data-index='${$}']`);
            return p && p.focus(), !0
        }

        function je(a) {
            const $ = oe(a);
            o.trackWidgetClick(r.value, Re, a), c.flyTo({
                center: $.geometry.coordinates,
                zoom: n.zoomMap,
                animate: !1
            }), $.isSearchType = !0, se($, 0)
        }

        function ze() {
            new E.mapboxgl.Popup({
                closeOnClick: !0
            });
            const a = r.value.getElementsByClassName("mapboxgl-popup");
            a[0] && a[0].remove(), c.flyTo({
                zoom: n.zoomMap
            }), de()
        }

        function qe(a) {
            a = {
                retro: "outdoors",
                silver: "light",
                night: "navigationPreviewNight",
                abuergine: "navigationGuidanceNight"
            }[a] || a;
            const p = {
                streets: "mapbox://styles/mapbox/streets-v11",
                outdoors: "mapbox://styles/mapbox/outdoors-v11",
                light: "mapbox://styles/mapbox/light-v10",
                dark: "mapbox://styles/mapbox/dark-v10",
                satellite: "mapbox://styles/mapbox/satellite-v9",
                satelliteStreets: "mapbox://styles/mapbox/satellite-streets-v11",
                navigationPreview: "mapbox://styles/mapbox/navigation-preview-day-v4",
                navigationPreviewNight: "mapbox://styles/mapbox/navigation-preview-night-v4",
                navigationGuidanceDay: "mapbox://styles/mapbox/navigation-guidance-day-v4",
                navigationGuidanceNight: "mapbox://styles/mapbox/navigation-guidance-night-v4",
                mapboxCN: {
                    streets: "mapbox://styles/mapbox/streets-zh-v1",
                    light: "mapbox://styles/mapbox/light-zh-v1",
                    dark: "mapbox://styles/mapbox/dark-zh-v1"
                }
            };
            if (n.isMapboxcn && n.mapConfigKey) {
                const {
                    mapConfigKey: l
                } = n;
                return p[l][a] || p[l].streets
            }
            const s = o.phAppStore.worldViewMapBoxCountry;
            return !s || $t.indexOf(s) === -1 ? `${p[a]||p.streets}?optimize=true` : p[a] || p.streets
        }

        function Je(a) {
            lt[a] && c.setFilter("poi-label", ["==", "class", lt[a]])
        }

        function Pe() {
            let a = 0;
            const $ = setInterval(() => {
                !c.isMoving() && a !== 0 && (I = !1, clearInterval($)), a++
            }, 100)
        }

        function be(a, $, p) {
            let s;
            I = !0, $ ? (s = [a.latlong.lon, a.latlong.lat], c.flyTo({
                center: s,
                zoom: n.zoomMap,
                animate: !0
            })) : s = a ? a.geometry.coordinates : Z(a)[0].latLngObj;
            let l = a;
            p && (G = !0, ee = !0, j = !1, Pe(), l = a.properties), ue = a !== void 0 ? l.cityStateCountry : a[0].cityStateCountry, Y = new E.mapboxgl.LngLat(s[0], s[1]), Pe(), a || c.addLayer({
                id: "point",
                type: "circle",
                source: {
                    type: "geojson",
                    data: {
                        type: "FeatureCollection",
                        features: [{
                            type: "Feature",
                            properties: {},
                            geometry: {
                                type: "Point",
                                coordinates: Y
                            }
                        }]
                    }
                }
            })
        }

        function Ze(a, $) {
            I = !0;
            const p = a.geometry.coordinates.length - 1,
                s = a.geometry.coordinates[p],
                l = new E.mapboxgl.LngLat(s[0], s[1]);
            te && te.remove();
            const f = document.createElement("img");
            f.src = n.assetUrls.pinAssetUrl, te = new E.mapboxgl.Marker(f).setLngLat(l).addTo(c), Pe(), c.getSource("route") ? c.getSource("route").setData(a) : c.addLayer({
                id: "route",
                type: "line",
                source: {
                    type: "geojson",
                    data: a
                },
                paint: {
                    "line-color": "#658eff",
                    "line-width": 5,
                    "line-opacity": 1
                }
            });
            const g = a.geometry.coordinates.reduce(function(re, W) {
                return re.extend(W)
            }, new E.mapboxgl.LngLatBounds(0, 0));
            c.fitBounds(g, {
                padding: 20
            });
            const x = a.geometry.coordinates[Math.floor(p / 2)],
                B = Kt[A],
                _ = r.value.getElementsByClassName("mapboxgl-popup");
            _[0] && _[0].remove(), new E.mapboxgl.Popup({
                closeButton: !1,
                closeOnClick: !1
            }).setLngLat(x).setHTML(`<div class="icon-and-time">
                  <i class="icon ${B}" aria-hidden="true"></i>
                  <span class="hours">${C.hours?`${C.hours}hr`:""}</span>
                  <span class="minutes">${C.minutes?`${C.minutes}min`:""}</span>
                </div>
                <div class="distance">
                  <span class="distance-km">${$}km</span>
                  </div>`).addTo(c)
        }

        function Ye(a) {
            O.fetch(a).then($ => $.json()).then($ => {
                if ($.code === "Ok" && $.routes.length !== 0) {
                    const p = $.routes[0],
                        s = p.geometry.coordinates,
                        l = {
                            type: "Feature",
                            properties: {},
                            geometry: {
                                type: "LineString",
                                coordinates: s
                            }
                        };
                    C = p.duration, C.distance = (p.distance / 1e3).toFixed(1), Ze(l, C.distance), y = !1, H = void 0
                } else y = !0, H = `Sorry, we could not calculate ${A} directions from "${ue}" to "${D}"`
            })
        }

        function Xe(a) {
            const $ = `https://api.mapbox.com/directions/v5/mapbox/${A}/${Y.lng},${Y.lat};${a.geometry.coordinates[0]},${a.geometry.coordinates[1]}?access_token=${n.apiKey}&geometries=geojson`;
            Ye($)
        }

        function Be() {
            o.publishEvent(Wt, {
                city: X,
                count: Q
            })
        }
        return {
            loadMap: xe,
            gotoMarker: je,
            resetCluster: ze,
            setDestination: be,
            getRoute: Xe,
            fetchPlaces: Je
        }
    }

    function ht(d, t, i) {
        const n = t;
        if (t && !t[i] && t.all && (n[i] = t.all), n && n[i]) {
            const h = [];
            let u = [];
            return d.forEach((r, k) => {
                r && k < n[i] && u.push(r), r && r.checked && k > n[i] && h.push(r)
            }), u = h.concat(u), u
        }
        return d
    }
    const zt = (d, t, i, n, h, u) => {
            if (d && d.length && t && t.trim().length > 0) {
                const r = d.filter(k => {
                    const w = typeof k == "string";
                    let S = k;
                    return !w && !i ? d : (!w && i && (S = k[i] || ""), S = S.toLowerCase(), n ? S.startsWith(t.toLowerCase()) : S.indexOf(t.toLowerCase()) !== -1)
                });
                return u && h ? ht(r, h, u) : r
            }
            return u && h ? ht(d, h, u) : d || []
        },
        qt = "ph-pin-info-window",
        Jt = "clear_search_click",
        Zt = window,
        Yt = "ph:mapDataTotalJobs";
    let Xt;
    const Qt = {
            ddoKey: "",
            jobDetailDDOKey: "jobDetail",
            apiScript: "https://maps.googleapis.com/maps/api/js",
            apiKey: "AIzaSyDkcktRULLQ5kwHIVz0I0mfXEUzj-LFuuI",
            apiLibraries: "",
            mapboxScript: "mapbox-gl-v1.js",
            locationmapsettings: "locationmapsettings"
        },
        Me = st();
    let pt = Me.MAP_PROVIDERS.MAPBOX,
        Te = Me.DEFAULT_MAPBOX_BG_TYPE,
        Oe, Ge, Ve, Ue;
    const ed = !1;
    let ce, td, we = !1,
        He, ft = !0;

    function dd(d, t, i) {
        let n, h, u = !1,
            r = {},
            k = {},
            w = 0,
            S = !1,
            v = !1,
            I = !0,
            A = !1,
            M = !0,
            O = !1,
            {
                noRootFound: C
            } = d,
            {
                jobSearchString: y
            } = d,
            {
                travelType: H
            } = d;
        const D = e.ref([]),
            j = e.ref(!1),
            G = e.ref(!1),
            ee = e.ref(!1),
            N = e.ref(""),
            T = e.ref(!1),
            P = e.ref(!1),
            c = e.ref(!1);
        let m = d && d.mapData && JSON.parse(JSON.stringify(d.mapData)),
            V = d && d.assetUrls && JSON.parse(JSON.stringify(d.assetUrls));
        const {
            searchResultMode: z
        } = d, {
            hideLocationPopup: te
        } = d, {
            isPopup: Y
        } = d;
        o.subscribeEvent(Yt, s => {
            n = s.totalJobs
        });

        function ue() {
            if (m = xe(m), m === void 0 || m && Object.keys(m).length === 0) G.value = !1, fe();
            else {
                a(), Xe(), de();
                const {
                    userAgent: s
                } = navigator, l = s && (s.indexOf("Trident") !== -1 || s.indexOf("MSIE") !== -1);
                Zt.IntersectionObserver && !l ? Ot().observeMap(t.value, X) : X()
            }
        }

        function X() {
            m && m.multi_location && m.multi_location.length > 1 && (be(), m.multi_location, I = !1);
            const s = o.getSiteSettings("googleMapApiKey"),
                l = o.getSiteSettings("maps"),
                f = o.getSiteSettings("mapkeyConfig") ? o.getSiteSettings("mapkeyConfig").mapbox : "",
                g = o.getSiteSettings("isMapboxcn");
            g && l && l[f] && (l.mapbox = l[f]);
            const x = l ? l[pt] || {} : {};
            !x.apiKey && s && (x.apiKey = s, x.provider = Me.GLOBAL_VAR_GOOGLE, pt = Me.GLOBAL_VAR_GOOGLE, Te = Me.DEFAULT_GOOGLE_BG_TYPE), r = x, r.isMapboxcn = g, r.mapConfigKey = f || "", r.platformAssetsBaseUrl = o.phAppStore.platformAssetsBaseUrl && o.phAppStore.platformAssetsBaseUrl() || "", r.useClusters = S, r.zoomMap = d.zoomMap || 12, r.bgType = Te, r.dateLineColor = d.dateLineColor, r.clusterRadius = d.clusterRadius >= 35 ? d.clusterRadius : 35;
            const B = o.getSiteSettings("mapConfig");
            if (B && B.enableDirections && B.enableDirections.modules && m && m.multi_location) {
                const {
                    pageName: _
                } = o.phAppStore, {
                    pageType: re
                } = o.phAppStore;
                B.enableDirections.modules.forEach(W => {
                    (W.name === re || W.name === _) && (O = !0)
                })
            }
            D.value = [...m], V ? Q(r) : F().then(_ => {
                V = _, Q()
            })
        }

        function Q(s) {
            r = s || r, r.assetUrls = J(), !Y && he()
        }

        function F() {
            return o.getDDO(Qt.locationmapsettings, {}).then(s => {
                if (s && s.data && s.data.settings) return s.data.settings
            })
        }

        function xe(s) {
            if (Array.isArray(s) && s.length) {
                const l = [];
                return s.forEach(f => {
                    f && f.latlong && l.push(f)
                }), l
            }
            return s
        }

        function J() {
            if (!V || !Object.keys(V).length) return;
            const s = V,
                l = o.phAppStore.cdnUrl,
                f = l + (s.markerImageUrl && s.markerImageUrl.url),
                g = l + (s.clusterImageUrl && s.clusterImageUrl.url);
            return Oe = Oe || s.clusterImageUrl.width, Ge = Ge || s.clusterImageUrl.height, Ve = Ve || s.clusterTextColor, Ue = Ue || s.clusterTextFontSize, Te = s.bgType || Te, r.bgType = Te, r.clusterRadius = s.clusterRadius || r.clusterRadius, r.zoomMap = s.zoomMap || d.zoomMap || 12, V = {
                pinAssetUrl: f,
                clusterAssetUrl: g,
                styles: [{
                    url: g,
                    width: Oe,
                    height: Ge,
                    textColor: Ve,
                    textSize: Ue,
                    fontFamily: "inherit"
                }]
            }, V
        }

        function Se() {
            if (!m) {
                Be();
                return
            }
            if (!S) return m.multi_location;
            if (S) return m;
            Be()
        }

        function de() {
            m && m.multi_location && Object.keys(m.multi_location).length ? S = !1 : Array.isArray(m) && m.length && (S = !0)
        }

        function he() {
            k = jt({
                searchResultMode: z,
                hideLocationPopup: te,
                providerOptions: r,
                mapboxGeoSearch: ed,
                enableMapboxDirections: O,
                element: t,
                mapData: m,
                resolveMapData: Se,
                totalJobs: n,
                prepareMarkerInfoWindowContent: pe,
                freezeScreen: !1,
                travelType: H,
                content: i,
                http: {},
                travelDuration: He,
                noRootFound: C,
                errorMsg: td,
                searchString: ce,
                showAllJobLocations: A,
                isDestinationSet: u,
                showTransportDirections: I,
                hideLoader: Be,
                unhideLoader: a,
                props: d
            }), k && k.loadMap()
        }

        function pe(s) {
            const l = s || m;
            return Ee(d.pinTmplSelector || qt, l)
        }

        function Ee(s, l, f) {
            let g = t.value.querySelector(`#${s}`);
            g || (g = t.value.querySelector(`.${s}`));
            const x = g.cloneNode(!0);
            if (x) {
                const B = x.querySelector(".info-box"),
                    _ = at(B.innerHTML, l);
                return B.innerHTML = _, B.innerHTML
            }
            return ""
        }

        function fe(s) {
            d.isErrorMsgReqd && (j.value = !0)
        }

        function ie(s) {
            c.value = !0, setTimeout(() => {
                c.value = !1
            }, 50), Array.isArray(m) && m.length && !s ? v = !1 : v = !0
        }

        function ne(s) {
            s && (N.value = s.key, k.gotoMarker(s), setTimeout(() => {
                T.value = !1, v = !1
            }, 250))
        }

        function ae() {
            const s = {};
            if (s.trait6 = N.value, o.processTrackingEvent(Jt, s), N.value = "", k.resetCluster(), t.value) {
                const l = t.value.querySelector("#location-selector");
                setTimeout(() => {
                    l && l.focus(), ie()
                }, 250)
            }
        }

        function ge(s, l) {
            l ? T.value = !0 : (w && clearTimeout(w), w = setTimeout(() => {
                v || (T.value = !1)
            }, 350))
        }

        function me(s) {
            if (G.value = !0, G.value) {
                document.querySelector(".ph-a11y-map-button"), s.querySelector(".ph-a11y-close-btn"), s.querySelector(".ph-ally-map-box");
                const l = s.querySelector(".popup-modal-backdrop");
                l && l.classList.add("active"), M && (M = !1, setTimeout(() => {
                    he()
                }, 0))
            }
        }

        function ve() {
            G.value = !1
        }

        function ye(s) {
            T.value = !0;
            const l = t.value.querySelector(".ph-a11y-dropdown-box input");
            return l && l.hasAttribute("aria-activedescendant") && l.removeAttribute("aria-activedescendant"), m && (D.value = [...m].reduce((f, g) => (g.key && f.push(g), f), []), D.value = zt(m, N.value, "key")), D.value.sort(function(f, g) {
                return f.key < g.key ? -1 : f.key > g.key ? 1 : 0
            }), c.value = !0, setTimeout(() => {
                c.value = !1
            }, 1e3), D.value
        }

        function oe(s, l) {
            if (m.length && m[l] && T.value) {
                N.value = m[l].key;
                const f = t.value.querySelectorAll(".phw-s-location-option")[l];
                f && se(f)
            }
        }

        function K(s) {
            const l = t.value.querySelector("#location-listbox .listitem-focused"),
                f = l && l.getAttribute("data-index") || -1;
            return parseInt(f, 10)
        }

        function Z(s) {
            N.value && !T.value && ae(), T.value || (N.value = ""), T.value = !1
        }

        function se(s) {
            if (document.createEvent) {
                const l = document.createEvent("MouseEvents");
                l.initEvent("click", !0, !1), s.dispatchEvent(l)
            } else document.createEventObject ? s.fireEvent("onclick") : typeof s.onclick == "function" && s.onclick()
        }

        function We(s) {
            if (ce && ce.length > 0) {
                He = void 0;
                const f = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURI(ce)}.json?access_token=${r.apiKey}`;
                Xt.fetch(f).then(g => g.json()).then(g => {
                    g.features.length > 0 && g.features
                })
            }
        }

        function je() {
            ce = "", C = !1
        }

        function ze(s) {
            if (s || we !== !0) {
                const l = y.toLowerCase().trim() || "";
                l === "" && m.multi_location, m.multi_location.filter(f => {
                    if (f.cityStateCountry) return f.cityStateCountry.toLowerCase().includes(l)
                })
            } else we = !1
        }

        function qe() {
            we = !we, we && ze()
        }

        function Je(s, l) {
            if (u = !0, k.setDestination(s, !0), be(), l) {
                const f = l.target.closest(".phs-location-overview-map-area"),
                    g = setTimeout(() => {
                        const x = f.querySelector(".transport-button.driving");
                        x && x.focus(), l && l.stopPropagation(), clearTimeout(g)
                    })
            }
        }

        function Pe(s) {
            if (m.multi_location, A = !1, y = "", ce = "", C = !1, be(), s && s.target) {
                const l = s.target.closest(".phs-location-overview-map-area");
                if (l) {
                    const f = setTimeout(() => {
                        const g = l.querySelector(".inputArea input");
                        g && g.focus(), clearTimeout(f)
                    }, 100)
                }
            }
        }

        function be() {
            I = !I, A = !A
        }

        function Ze(s) {
            h = s, ce = s.place_name, Ye(d.travelType)
        }

        function Ye(s) {
            s = ["walking", "cycling", "driving"].includes(s) ? s : "driving", He = void 0, H = s, h && k.getRoute(h, H)
        }

        function Xe() {
            document.addEventListener("click", s => {
                s.target.closest(".inputArea") || (we = !1)
            })
        }

        function Be() {
            P.value = !1
        }

        function a() {
            P.value = !0
        }

        function $() {
            document.activeElement !== t.value.querySelector("#location-selector") && (T.value = !1)
        }
        return {
            initiator: ue,
            showMap: G,
            mapData: m,
            toggleMap: me,
            showErrorMsg: j,
            isIEBrowser: ee,
            closeLocationDialog: ve,
            searchArray: D,
            showLoader: P,
            filterKey: N,
            fetchJobLocations: ie,
            resetCluster: ae,
            blurHandler: ge,
            gotoMarker: ne,
            showLocationDropdown: T,
            suggestionTextUpdate: c,
            getFieldOptions: ye,
            setFieldValue: oe,
            clearFieldValue: Z,
            getActiveIndex: K,
            clickNearByJobs: qe,
            setDestination: Je,
            getDirection: Ze,
            backToAllLocation: Pe,
            clearSearch: je,
            getLocationSearchResults: We,
            autoCompleteInitiate: function(s, l) {
                ft && (new Ft().init(s, l, {
                    getFieldOptions: ye,
                    setFieldValue: oe,
                    clearFieldValue: Z,
                    getActiveIndex: K,
                    getActiveIndexOnBlur: $
                }), ft = !1)
            }
        }
    }
    const id = {
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

    function gt(d, t) {
        var i = Array.prototype.slice.call(t);
        return i.push(id), d.apply(this, i)
    }

    function mt(d, t) {
        d = d.split("-"), t = t.split("-");
        for (var i = d[0].split("."), n = t[0].split("."), h = 0; h < 3; h++) {
            var u = Number(i[h]),
                r = Number(n[h]);
            if (u > r) return 1;
            if (r > u) return -1;
            if (!isNaN(u) && isNaN(r)) return 1;
            if (isNaN(u) && !isNaN(r)) return -1
        }
        return d[1] && t[1] ? d[1] > t[1] ? 1 : d[1] < t[1] ? -1 : 0 : !d[1] && t[1] ? 1 : d[1] && !t[1] ? -1 : 0
    }
    var nd = {}.constructor;

    function Ke(d) {
        return d != null && d.constructor === nd
    }

    function ke(d) {
        return ke = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
            return typeof t
        } : function(t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, ke(d)
    }

    function De(d, t) {
        if (!(d instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function yt(d, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(d, ad(n.key), n)
        }
    }

    function Ne(d, t, i) {
        return t && yt(d.prototype, t), i && yt(d, i), Object.defineProperty(d, "prototype", {
            writable: !1
        }), d
    }

    function ad(d) {
        var t = od(d, "string");
        return ke(t) == "symbol" ? t : t + ""
    }

    function od(d, t) {
        if (ke(d) != "object" || !d) return d;
        var i = d[Symbol.toPrimitive];
        if (i !== void 0) {
            var n = i.call(d, t || "default");
            if (ke(n) != "object") return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (t === "string" ? String : Number)(d)
    }
    var sd = "1.2.0",
        rd = "1.7.35",
        bt = " ext. ",
        ld = /^\d+$/,
        wt = function() {
            function d(t) {
                De(this, d), hd(t), this.metadata = t, St.call(this, t)
            }
            return Ne(d, [{
                key: "getCountries",
                value: function() {
                    return Object.keys(this.metadata.countries).filter(function(i) {
                        return i !== "001"
                    })
                }
            }, {
                key: "getCountryMetadata",
                value: function(i) {
                    return this.metadata.countries[i]
                }
            }, {
                key: "nonGeographic",
                value: function() {
                    if (!(this.v1 || this.v2 || this.v3)) return this.metadata.nonGeographic || this.metadata.nonGeographical
                }
            }, {
                key: "hasCountry",
                value: function(i) {
                    return this.getCountryMetadata(i) !== void 0
                }
            }, {
                key: "hasCallingCode",
                value: function(i) {
                    if (this.getCountryCodesForCallingCode(i)) return !0;
                    if (this.nonGeographic()) {
                        if (this.nonGeographic()[i]) return !0
                    } else {
                        var n = this.countryCallingCodes()[i];
                        if (n && n.length === 1 && n[0] === "001") return !0
                    }
                }
            }, {
                key: "isNonGeographicCallingCode",
                value: function(i) {
                    return this.nonGeographic() ? !!this.nonGeographic()[i] : !this.getCountryCodesForCallingCode(i)
                }
            }, {
                key: "country",
                value: function(i) {
                    return this.selectNumberingPlan(i)
                }
            }, {
                key: "selectNumberingPlan",
                value: function(i, n) {
                    if (i && ld.test(i) && (n = i, i = null), i && i !== "001") {
                        if (!this.hasCountry(i)) throw new Error("Unknown country: ".concat(i));
                        this.numberingPlan = new kt(this.getCountryMetadata(i), this)
                    } else if (n) {
                        if (!this.hasCallingCode(n)) throw new Error("Unknown calling code: ".concat(n));
                        this.numberingPlan = new kt(this.getNumberingPlanMetadata(n), this)
                    } else this.numberingPlan = void 0;
                    return this
                }
            }, {
                key: "getCountryCodesForCallingCode",
                value: function(i) {
                    var n = this.countryCallingCodes()[i];
                    if (n) return n.length === 1 && n[0].length === 3 ? void 0 : n
                }
            }, {
                key: "getCountryCodeForCallingCode",
                value: function(i) {
                    var n = this.getCountryCodesForCallingCode(i);
                    if (n) return n[0]
                }
            }, {
                key: "getNumberingPlanMetadata",
                value: function(i) {
                    var n = this.getCountryCodeForCallingCode(i);
                    if (n) return this.getCountryMetadata(n);
                    if (this.nonGeographic()) {
                        var h = this.nonGeographic()[i];
                        if (h) return h
                    } else {
                        var u = this.countryCallingCodes()[i];
                        if (u && u.length === 1 && u[0] === "001") return this.metadata.countries["001"]
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
                value: function(i) {
                    return this.numberingPlan.type(i)
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
                value: function(i) {
                    return this.selectNumberingPlan(i)
                }
            }, {
                key: "hasSelectedNumberingPlan",
                value: function() {
                    return this.numberingPlan !== void 0
                }
            }])
        }(),
        kt = function() {
            function d(t, i) {
                De(this, d), this.globalMetadataObject = i, this.metadata = t, St.call(this, i.metadata)
            }
            return Ne(d, [{
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
                value: function(i) {
                    return i[this.v1 ? 2 : this.v2 ? 3 : 4]
                }
            }, {
                key: "formats",
                value: function() {
                    var i = this,
                        n = this._getFormats(this.metadata) || this._getFormats(this.getDefaultCountryMetadataForRegion()) || [];
                    return n.map(function(h) {
                        return new $d(h, i)
                    })
                }
            }, {
                key: "nationalPrefix",
                value: function() {
                    return this.metadata[this.v1 ? 3 : this.v2 ? 4 : 5]
                }
            }, {
                key: "_getNationalPrefixFormattingRule",
                value: function(i) {
                    return i[this.v1 ? 4 : this.v2 ? 5 : 6]
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
                value: function(i) {
                    if (this.hasTypes() && xt(this.types(), i)) return new ud(xt(this.types(), i), this)
                }
            }, {
                key: "ext",
                value: function() {
                    return this.v1 || this.v2 ? bt : this.metadata[13] || bt
                }
            }])
        }(),
        $d = function() {
            function d(t, i) {
                De(this, d), this._format = t, this.metadata = i
            }
            return Ne(d, [{
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
                    return !!(this.nationalPrefixFormattingRule() && !cd.test(this.nationalPrefixFormattingRule()))
                }
            }, {
                key: "internationalFormat",
                value: function() {
                    return this._format[5] || this.format()
                }
            }])
        }(),
        cd = /^\(?\$1\)?$/,
        ud = function() {
            function d(t, i) {
                De(this, d), this.type = t, this.metadata = i
            }
            return Ne(d, [{
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

    function xt(d, t) {
        switch (t) {
            case "FIXED_LINE":
                return d[0];
            case "MOBILE":
                return d[1];
            case "TOLL_FREE":
                return d[2];
            case "PREMIUM_RATE":
                return d[3];
            case "PERSONAL_NUMBER":
                return d[4];
            case "VOICEMAIL":
                return d[5];
            case "UAN":
                return d[6];
            case "PAGER":
                return d[7];
            case "VOIP":
                return d[8];
            case "SHARED_COST":
                return d[9]
        }
    }

    function hd(d) {
        if (!d) throw new Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");
        if (!Ke(d) || !Ke(d.countries)) throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(Ke(d) ? "an object of shape: { " + Object.keys(d).join(", ") + " }" : "a " + pd(d) + ": " + d, "."))
    }
    var pd = function(t) {
        return ke(t)
    };

    function fd(d, t) {
        if (t = new wt(t), t.hasCountry(d)) return t.selectNumberingPlan(d).countryCallingCode();
        throw new Error("Unknown country: ".concat(d))
    }

    function St(d) {
        var t = d.version;
        typeof t == "number" ? (this.v1 = t === 1, this.v2 = t === 2, this.v3 = t === 3, this.v4 = t === 4) : t ? mt(t, sd) === -1 ? this.v2 = !0 : mt(t, rd) === -1 ? this.v3 = !0 : this.v4 = !0 : this.v1 = !0
    }

    function gd(d) {
        return new wt(d).getCountries()
    }

    function md() {
        return gt(gd, arguments)
    }

    function Et() {
        return gt(fd, arguments)
    }
    const yd = {
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

    function vt(d) {
        const t = d.toUpperCase().split("").map(i => 127397 + i.charCodeAt(0));
        return String.fromCodePoint(...t)
    }

    function bd() {
        const d = [];
        return md().forEach(i => {
            const n = yd[i];
            if (n) try {
                const h = Et(i);
                d.push({
                    code: i,
                    name: n,
                    callingCode: `+${h}`,
                    flag: vt(i)
                })
            } catch {
                console.warn(`Could not get calling code for ${i}: ${n}`)
            } else try {
                const h = Et(i);
                d.push({
                    code: i,
                    name: i,
                    callingCode: `+${h}`,
                    flag: vt(i)
                })
            } catch {
                console.warn(`Could not get calling code for ${i}`)
            }
        }), d.sort((i, n) => i.code === "US" ? -1 : n.code === "US" ? 1 : i.name.localeCompare(n.name))
    }
    bd();
    const wd = {
            class: "phw-icon-ctr",
            "data-ps": "9685cd8d-span-2"
        },
        kd = {
            class: "icon phw-mr-1",
            fill: "currentcolor",
            "aria-hidden": "true",
            "data-ps": "9685cd8d-svg-1"
        },
        xd = {
            href: "#phw-cns-icon-location-fill",
            "data-ps": "9685cd8d-use-1"
        },
        Sd = {
            "data-ps": "9685cd8d-span-3"
        },
        Ed = {
            key: 0,
            "data-ph-at-id": "heading-text",
            "data-ps": "9685cd8d-h2-2"
        },
        vd = ["innerHTML"],
        Ad = {
            key: 2,
            class: "phw-text-c",
            "data-ps": "9685cd8d-div-2"
        },
        Md = {
            class: "phw-spinner-border phw-primary",
            "data-ps": "9685cd8d-div-3"
        },
        Td = {
            class: "phw-visually-hidden",
            "data-ps": "9685cd8d-span-1"
        },
        Pd = ["aria-label"],
        Bd = {
            key: 0,
            class: "content-block",
            "data-ps": "9685cd8d-div-5"
        },
        Ld = {
            class: "phw-icon-ctr",
            "data-ps": "9685cd8d-span-4"
        },
        Id = {
            class: "icon",
            fill: "currentcolor",
            "aria-hidden": "true",
            "data-ps": "9685cd8d-svg-2"
        },
        Cd = {
            href: "#phw-cns-icon-close",
            "data-ps": "9685cd8d-use-2"
        },
        Dd = ["innerHTML"],
        Nd = {
            id: "ph-pin-info-window",
            class: "phw-d-none",
            "data-ps": "9685cd8d-div-6"
        },
        _d = {
            class: "info-box",
            "data-ps": "9685cd8d-div-7"
        },
        Fd = {
            tkeys: "1",
            "data-ps": "9685cd8d-div-8"
        },
        Rd = {
            tkeys: "1",
            "data-ps": "9685cd8d-div-9"
        },
        Od = {
            tkeys: "1",
            "data-ps": "9685cd8d-div-10"
        },
        Gd = {
            key: 1,
            class: "content-block",
            "data-ps": "9685cd8d-div-17"
        },
        Vd = {
            class: "phw-icon-ctr",
            "data-ps": "9685cd8d-span-6"
        },
        Ud = {
            class: "icon",
            fill: "currentcolor",
            "aria-hidden": "true",
            "data-ps": "9685cd8d-svg-3"
        },
        Hd = {
            href: "#phw-cns-icon-close",
            "data-ps": "9685cd8d-use-3"
        },
        Kd = ["innerHTML"],
        Wd = {
            id: "ph-pin-info-window-no-link",
            class: "phw-d-none",
            "data-ps": "9685cd8d-div-19"
        },
        jd = {
            class: "info-box phw-p-4",
            "data-ps": "9685cd8d-div-20"
        },
        zd = {
            class: "phw-g-h2-card-sub-title-dark-small",
            tkeys: "1",
            "data-ps": "9685cd8d-span-8",
            "ally-label-heading": ""
        },
        qd = {
            class: "phw-g-h2-card-sub-title-dark-small",
            tkeys: "1",
            "data-ps": "9685cd8d-span-9"
        },
        Jd = {
            class: "phw-g-h2-card-sub-title-dark-small",
            tkeys: "1",
            "data-ps": "9685cd8d-span-10"
        },
        Zd = {
            key: 1,
            id: "ph-pin-info-window",
            class: "phw-d-none",
            style: {
                display: "none"
            },
            "data-ps": "9685cd8d-div-21"
        },
        Yd = {
            class: "infoBlock info-box",
            "data-ps": "9685cd8d-div-22"
        },
        Xd = {
            class: "info-details",
            "data-ps": "9685cd8d-div-23",
            "data-ph-at-id": "location-block"
        },
        Qd = {
            tkeys: "1",
            class: "infoTitle",
            "data-ps": "9685cd8d-h3-1",
            "data-ph-at-id": "location-block-title",
            "ally-label-heading": ""
        },
        ei = {
            tkeys: "1",
            class: "infoState phw-g-user-name-prefix",
            "data-ps": "9685cd8d-div-24"
        },
        ti = {
            key: 0,
            class: "job-link",
            "data-ps": "9685cd8d-div-25"
        },
        di = ["href"],
        ii = {
            class: "phw-icon-ctr",
            "data-ps": "9685cd8d-span-11"
        },
        ni = {
            class: "phw-icon-flip",
            fill: "currentcolor",
            "aria-hidden": "true",
            "data-ps": "9685cd8d-svg-4"
        },
        ai = {
            href: "#phw-cns-icon-chevron-right",
            "data-ps": "9685cd8d-use-4"
        },
        oi = {
            id: "ph-cluster-info-window",
            class: "phw-d-none",
            style: {
                display: "none"
            },
            "data-ps": "9685cd8d-div-26"
        },
        si = {
            class: "phw-form-group phw-width-3",
            "data-ps": "9685cd8d-div-30"
        },
        ri = {
            "aria-owns": "location-listbox",
            class: "phw-posn-relative phw-input-group",
            "data-ps": "9685cd8d-div-29"
        },
        li = {
            class: "phw-icon-ctr phw-input-icon-left",
            "data-ps": "9685cd8d-span-12"
        },
        $i = {
            href: "#phw-cns-icon-search",
            "data-ps": "9685cd8d-use-5"
        },
        ci = ["aria-label", "placeholder"],
        ui = {
            class: "phw-icon-ctr",
            "data-ps": "9685cd8d-span-13"
        },
        hi = {
            class: "icon phw-icon phw-i-sz-3",
            fill: "currentcolor",
            "aria-hidden": "true",
            "data-ps": "9685cd8d-svg-6"
        },
        pi = {
            href: "#phw-cns-icon-close",
            "data-ps": "9685cd8d-use-6"
        },
        fi = {
            class: "phw-visually-hidden",
            "data-ps": "9685cd8d-span-14"
        },
        gi = ["innerHTML"],
        mi = {
            key: 0,
            class: "phw-visually-hidden",
            tabindex: "-1",
            "data-ps": "9685cd8d-div-33"
        },
        yi = ["innerHTML"],
        bi = ["aria-label"],
        wi = ["data-index", "data-ph-at-index"],
        ki = ["onClick"],
        xi = {
            "data-ps": "9685cd8d-span-16"
        },
        Si = {
            key: 1,
            id: "geocoder",
            class: "geo-coder",
            "data-ps": "9685cd8d-div-35"
        },
        Ei = {
            key: 2,
            class: "no-data-view",
            "data-ps": "9685cd8d-div-37"
        },
        vi = ["innerHTML"],
        Ai = {
            key: 0,
            tabindex: "0",
            class: "no-locations",
            "data-ps": "9685cd8d-div-39"
        },
        Mi = ["innerHTML"],
        Ti = e.defineComponent({
            __name: "LocationMapDefaultDefaultComponent",
            props: {
                instanceId: null,
                contentId: null,
                theme: null,
                widgetTag: null,
                mapData: null,
                assetUrls: null,
                searchResultMode: {
                    type: Boolean
                },
                hideLocationPopup: {
                    type: Boolean
                },
                isPopup: {
                    type: Boolean
                },
                currentJobObject: {
                    type: Boolean
                },
                mapboxGeoSearch: {
                    type: Boolean
                },
                hideTitle: {
                    type: Boolean
                },
                hideSubTitle: {
                    type: Boolean
                },
                content: null,
                zoomMap: null,
                isErrorMsgReqd: {
                    type: Boolean
                },
                provider: null,
                mode: null,
                pinTmplSelector: null,
                clusterRadius: null,
                dateLineColor: null,
                jobSearchString: null,
                noRootFound: {
                    type: Boolean
                },
                showAllLocations: {
                    type: Boolean
                },
                showMapInPopUp: {
                    type: Boolean
                },
                travelType: null,
                defaultSingleLocationPopup: {
                    type: Boolean
                }
            },
            setup(d) {
                const t = d,
                    i = e.ref(null),
                    n = e.ref(),
                    {
                        initiator: h,
                        showMap: u,
                        mapData: r,
                        toggleMap: k,
                        showErrorMsg: w,
                        isIEBrowser: S,
                        closeLocationDialog: v,
                        searchArray: I,
                        showLoader: A,
                        filterKey: M,
                        fetchJobLocations: O,
                        resetCluster: C,
                        blurHandler: y,
                        gotoMarker: H,
                        showLocationDropdown: D,
                        suggestionTextUpdate: j,
                        getFieldOptions: G,
                        setFieldValue: ee,
                        clearFieldValue: N,
                        getActiveIndex: T,
                        autoCompleteInitiate: P
                    } = dd(t, i, t.content);
                return e.onMounted(() => {
                    o.usePhCommon().init(i.value, t.content, t.instanceId), h(), t.mapboxGeoSearch || setTimeout(() => {
                        P(n.value, {
                            name: "location"
                        })
                    }, 1e3)
                }), e.onUpdated(() => {
                    t.mapboxGeoSearch || P(n.value, {
                        name: "location"
                    })
                }), (c, m) => {
                    var V, z, te, Y, ue, X, Q, F, xe, J, Se, de, he, pe, Ee, fe, ie, ne, ae, ge, me, ve, ye, oe;
                    return e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        ref_key: "element",
                        ref: i,
                        class: "phw-widget-ctr phw-widget-empty-ctr",
                        "data-ps": "9685cd8d-div-41"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        class: e.normalizeClass(d.showMapInPopUp ? "" : "phw-container"),
                        "data-ps": "9685cd8d-div-1"
                    }, [d.isPopup ? e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                        key: 0,
                        class: e.normalizeClass([c.$style["ph-a11y-map-button"], "phw-btn", "phw-g-primary-btn"]),
                        "data-ps": "9685cd8d-button-1",
                        onClick: m[0] || (m[0] = K => e.unref(k)(i.value))
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", wd, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", kd, [e.withDirectives(e.createElementVNode("use", xd, null, 512), [
                        [e.unref(o.vPhwSetting)]
                    ])])), [
                        [e.unref(o.vPhwSetting)]
                    ])])), [
                        [e.unref(o.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", Sd, [e.createTextVNode(e.toDisplayString((V = d.content) == null ? void 0 : V.locBtnText), 1)])), [
                        [e.unref(o.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(o.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), !d.hideTitle || !d.hideSubTitle && (e.unref(u) && d.isPopup || !d.isPopup) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: 1,
                        class: e.normalizeClass(["phw-pb-8 phw-t-center phw-text-c phw-pb-xl-6 phw-pb-sm-4", [c.$style["lm-widget-heading"]]]),
                        "data-ps": "9685cd8d-div-18"
                    }, [d.hideTitle ? e.createCommentVNode("", !0) : e.withDirectives((e.openBlock(), e.createElementBlock("h2", Ed, [e.createTextVNode(e.toDisplayString((z = d.content) == null ? void 0 : z.widgetHeadingText), 1)])), [
                        [e.unref(o.vPhwSetting)]
                    ]), d.hideSubTitle ? e.createCommentVNode("", !0) : e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: 1,
                        "data-tag-type": "p",
                        class: "phw-g-p-default-dark",
                        "data-ph-at-id": "sub-heading-text",
                        "data-ps": "9685cd8d-p-1",
                        innerHTML: (te = d.content) == null ? void 0 : te.widgetSubHeadingText
                    }, null, 8, vd)), [
                        [e.unref(o.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(o.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(A) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", Ad, [e.withDirectives((e.openBlock(), e.createElementBlock("div", Md, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Td, [e.createTextVNode(e.toDisplayString((Y = d.content) == null ? void 0 : Y.loadingText), 1)])), [
                        [e.unref(o.vPhwSetting)]
                    ])])), [
                        [e.unref(o.vPhwSetting)]
                    ])])), [
                        [e.unref(o.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        class: e.normalizeClass(["ph-ally-map-box", d.isPopup == !0 ? "dialog-block" : ""]),
                        "data-ps": "9685cd8d-div-4",
                        role: "region",
                        "aria-label": ((ue = d.content) == null ? void 0 : ue.mapRegionAriaLabel) || "map"
                    }, [e.unref(r) && e.unref(r).multi_location && !e.unref(w) && !e.unref(S) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", Bd, [d.isPopup ? e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                        key: 0,
                        class: "close ph-a11y-close-btn phw-btn phw-g-btn-link",
                        tabindex: "0",
                        "data-ps": "9685cd8d-a-1",
                        onClick: m[1] || (m[1] = K => e.unref(v)())
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Ld, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", Id, [e.withDirectives(e.createElementVNode("use", Cd, null, 512), [
                        [e.unref(o.vPhwSetting)]
                    ])])), [
                        [e.unref(o.vPhwSetting)]
                    ])])), [
                        [e.unref(o.vPhwSetting)]
                    ]), e.withDirectives(e.createElementVNode("span", {
                        class: "phw-visually-hidden",
                        "data-ps": "9685cd8d-span-5",
                        innerHTML: (X = d.content) == null ? void 0 : X.closePopupText
                    }, null, 8, Dd), [
                        [e.unref(o.vPhwSetting)]
                    ])])), [
                        [e.unref(o.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("div", Nd, [e.withDirectives((e.openBlock(), e.createElementBlock("div", _d, [e.withDirectives((e.openBlock(), e.createElementBlock("div", Fd, [e.createTextVNode(e.toDisplayString((Q = d.content) == null ? void 0 : Q.pinInfoAddressLine1), 1)])), [
                        [e.unref(o.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", Rd, [e.createTextVNode(e.toDisplayString((F = d.content) == null ? void 0 : F.pinInfoAddressLine2), 1)])), [
                        [e.unref(o.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", Od, [e.createTextVNode(e.toDisplayString((xe = d.content) == null ? void 0 : xe.pinInfoAddressLine3), 1)])), [
                        [e.unref(o.vPhwSetting)]
                    ])])), [
                        [e.unref(o.vPhwSetting)]
                    ])])), [
                        [e.unref(o.vPhwSetting)]
                    ])])), [
                        [e.unref(o.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(r) && e.unref(r).length && !e.unref(w) && !e.unref(S) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", Gd, [d.isPopup ? e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                        key: 0,
                        class: "close ph-a11y-close-btn phw-btn phw-g-btn-link",
                        tabindex: "0",
                        "data-ps": "9685cd8d-a-2",
                        onClick: m[2] || (m[2] = K => e.unref(v)())
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Vd, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", Ud, [e.withDirectives(e.createElementVNode("use", Hd, null, 512), [
                        [e.unref(o.vPhwSetting)]
                    ])])), [
                        [e.unref(o.vPhwSetting)]
                    ])])), [
                        [e.unref(o.vPhwSetting)]
                    ]), e.withDirectives(e.createElementVNode("span", {
                        class: "phw-visually-hidden",
                        "data-ps": "9685cd8d-span-7",
                        innerHTML: (J = d.content) == null ? void 0 : J.closePopupText
                    }, null, 8, Kd), [
                        [e.unref(o.vPhwSetting)]
                    ])])), [
                        [e.unref(o.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("div", Wd, [e.withDirectives((e.openBlock(), e.createElementBlock("div", jd, [e.withDirectives((e.openBlock(), e.createElementBlock("span", zd, [e.createTextVNode(e.toDisplayString((Se = d.content) == null ? void 0 : Se.pinInfoAddressLine1), 1)])), [
                        [e.unref(o.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", qd, [e.createTextVNode(e.toDisplayString((de = d.content) == null ? void 0 : de.pinInfoAddressLine2), 1)])), [
                        [e.unref(o.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", Jd, [e.createTextVNode(e.toDisplayString((he = d.content) == null ? void 0 : he.pinInfoAddressLine3), 1)])), [
                        [e.unref(o.vPhwSetting)]
                    ])])), [
                        [e.unref(o.vPhwSetting)]
                    ])])), [
                        [e.unref(o.vPhwSetting)]
                    ]), t.mapboxGeoSearch ? e.createCommentVNode("", !0) : e.withDirectives((e.openBlock(), e.createElementBlock("div", Zd, [e.withDirectives((e.openBlock(), e.createElementBlock("div", Yd, [e.withDirectives((e.openBlock(), e.createElementBlock("div", Xd, [e.withDirectives((e.openBlock(), e.createElementBlock("h3", Qd, [e.createTextVNode(e.toDisplayString((pe = d.content) == null ? void 0 : pe.pinInfoTitle), 1)])), [
                        [e.unref(o.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", ei, [e.createTextVNode(e.toDisplayString((Ee = d.content) == null ? void 0 : Ee.pinInfoState), 1)])), [
                        [e.unref(o.vPhwSetting)]
                    ])])), [
                        [e.unref(o.vPhwSetting)]
                    ]), (fe = d.content) != null && fe.pinLink ? e.withDirectives((e.openBlock(), e.createElementBlock("div", ti, [e.withDirectives((e.openBlock(), e.createElementBlock("a", {
                        href: (ie = d.content) == null ? void 0 : ie.pinLink,
                        tkeys: "1",
                        class: "phs-location-link",
                        "data-ph-at-id": "location-map-job-link",
                        "data-ps": "9685cd8d-a-3"
                    }, [e.createTextVNode(e.toDisplayString((ne = d.content) == null ? void 0 : ne.pinLinkText), 1)], 8, di)), [
                        [e.unref(o.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", ii, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", ni, [e.withDirectives(e.createElementVNode("use", ai, null, 512), [
                        [e.unref(o.vPhwSetting)]
                    ])])), [
                        [e.unref(o.vPhwSetting)]
                    ])])), [
                        [e.unref(o.vPhwSetting)]
                    ])])), [
                        [e.unref(o.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(o.vPhwSetting)]
                    ])])), [
                        [e.unref(o.vPhwSetting)]
                    ]), e.withDirectives(e.createElementVNode("div", oi, null, 512), [
                        [e.unref(o.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        class: e.normalizeClass(["phw-posn-relative phw-p-0", [c.$style["lw-location-overview-map-area"], "ph-widget-box"]]),
                        "data-ps": "9685cd8d-div-27"
                    }, [t.mapboxGeoSearch ? e.createCommentVNode("", !0) : e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: 0,
                        class: e.normalizeClass([c.$style.inputArea, "ph-a11y-dropdown-box"]),
                        "aria-haspopup": "listbox",
                        "data-ps": "9685cd8d-div-28"
                    }, [e.createElementVNode("div", si, [e.withDirectives((e.openBlock(), e.createElementBlock("div", ri, [e.withDirectives((e.openBlock(), e.createElementBlock("span", li, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", {
                        class: e.normalizeClass(["icon phw-icon", [c.$style["keyword-icon"], "form-control-feedback", "phw-i-sz-3", "phw-i-sz-xl-2-5"]]),
                        fill: "currentcolor",
                        "aria-hidden": "true",
                        "data-ps": "9685cd8d-svg-5"
                    }, [e.withDirectives(e.createElementVNode("use", $i, null, 512), [
                        [e.unref(o.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(o.vPhwSetting)]
                    ])])), [
                        [e.unref(o.vPhwSetting)]
                    ]), e.withDirectives(e.createElementVNode("input", {
                        id: "location-selector",
                        ref_key: "locationInputEle",
                        ref: n,
                        "onUpdate:modelValue": m[3] || (m[3] = K => e.isRef(M) ? M.value = K : null),
                        role: "combobox",
                        class: e.normalizeClass(["phw-g-text-field-style-2", e.unref(M) ? "phw-input-icon-pr" : ""]),
                        type: "text",
                        "data-show-listbox": "false",
                        "aria-autocomplete": "list",
                        autocomplete: "off",
                        name: "location-listbox",
                        "data-ph-at-id": "location-search-input",
                        "aria-owns": "location-listbox",
                        "aria-controls": "location-listbox",
                        "aria-haspopup": "listbox",
                        "aria-expanded": "false",
                        "aria-label": d.content.locationTitleText,
                        placeholder: d.content.searchPlaceHolderText,
                        "data-ps": "9685cd8d-input-1"
                    }, null, 10, ci), [
                        [e.vModelText, e.unref(M)],
                        [e.unref(o.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                        class: e.normalizeClass([c.$style["location-clear-icon"], "form-control-feedback", "phs-keysearch-clear", "phw-input-icon-right", "phw-btn", "phw-g-btn-link"]),
                        "data-ph-at-id": "clear-locationsearch-link",
                        "data-ps": "9685cd8d-button-2",
                        onClick: m[4] || (m[4] = K => e.unref(C)())
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", ui, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", hi, [e.withDirectives(e.createElementVNode("use", pi, null, 512), [
                        [e.unref(o.vPhwSetting)]
                    ])])), [
                        [e.unref(o.vPhwSetting)]
                    ])])), [
                        [e.unref(o.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", fi, [e.withDirectives(e.createElementVNode("div", {
                        "data-ph-at-id": "clear-eventsearch-text",
                        "data-ps": "9685cd8d-div-31",
                        innerHTML: (ae = d.content) == null ? void 0 : ae.locationClearText
                    }, null, 8, gi), [
                        [e.unref(o.vPhwSetting)]
                    ])])), [
                        [e.unref(o.vPhwSetting)]
                    ])], 2)), [
                        [e.vShow, e.unref(M)],
                        [e.unref(o.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        class: e.normalizeClass([c.$style["no-result-block"], "phw-list-none", "phw-pl-0"]),
                        "aria-live": "assertive",
                        "aria-atomic": "true",
                        "data-ps": "9685cd8d-div-32"
                    }, [e.unref(D) && e.unref(I).length && e.unref(j) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", mi, [e.createTextVNode(e.toDisplayString(e.unref(at)((ge = d.content) == null ? void 0 : ge.suggestionText, {
                        count: e.unref(I).length
                    })), 1)])), [
                        [e.unref(o.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(D) && (!e.unref(r) || !e.unref(I).length) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: 1,
                        class: e.normalizeClass([c.$style["location-no-data"]]),
                        "data-ps": "9685cd8d-div-34",
                        innerHTML: (me = d.content) == null ? void 0 : me.noResultFoundText
                    }, null, 10, yi)), [
                        [e.unref(o.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)], 2)), [
                        [e.unref(o.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("ul", {
                        id: "location-listbox",
                        role: "listbox",
                        "data-labelledby": "location-listbox",
                        "aria-label": (ve = d.content) == null ? void 0 : ve.locationSuggestionsText,
                        tabindex: "-1",
                        class: e.normalizeClass([
                            ["phw-list-none", "phw-p-0", c.$style["on-focus"], c.$style["ph-location-list"], e.unref(D) ? "" : "phw-d-none"], "phw-pt-050"
                        ]),
                        "data-ps": "9685cd8d-ul-1"
                    }, [(e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(e.unref(I), (K, Z) => e.withDirectives((e.openBlock(), e.createElementBlock("li", {
                        key: Z,
                        "data-index": Z,
                        class: "ph-a11y-dropdown-list-item",
                        role: "option",
                        tabindex: "-1",
                        "data-ph-at-id": "location-search-option",
                        "data-ph-at-index": Z,
                        "aria-selected": "false",
                        "data-ps": "9685cd8d-li-1"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        style: {
                            cursor: "pointer"
                        },
                        class: e.normalizeClass(["phw-g-text-default-dark phw-d-block phw-s-location-option", c.$style["location-list-item"]]),
                        onBlur: m[5] || (m[5] = se => e.unref(y)(se, !0)),
                        onFocus: m[6] || (m[6] = se => e.unref(O)(!0)),
                        onClick: se => e.unref(H)(K)
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", xi, [e.createTextVNode(e.toDisplayString((K.key || "").trim()), 1)])), [
                        [e.unref(o.vPhwSetting)]
                    ])], 42, ki)), [
                        [e.unref(o.vPhwSetting)]
                    ])], 8, wi)), [
                        [e.unref(o.vPhwSetting)]
                    ])), 128))], 10, bi)), [
                        [e.vShow, e.unref(D)],
                        [e.unref(o.vPhwSetting)]
                    ])])), [
                        [e.unref(o.vPhwSetting)]
                    ])])], 2)), [
                        [e.unref(o.vPhwSetting)]
                    ]), t.mapboxGeoSearch ? e.withDirectives((e.openBlock(), e.createElementBlock("div", Si, null, 512)), [
                        [e.unref(o.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.withDirectives(e.createElementVNode("div", {
                        id: "map",
                        tabindex: "0",
                        class: e.normalizeClass([c.$style.map]),
                        "data-ps": "9685cd8d-div-36"
                    }, null, 2), [
                        [e.unref(o.vPhwSetting)]
                    ])], 2)), [
                        [e.vShow, !e.unref(A) && !e.unref(w)],
                        [e.unref(o.vPhwSetting)]
                    ])])), [
                        [e.unref(o.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(w) || e.unref(S) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", Ei, [e.withDirectives(e.createElementVNode("div", {
                        class: e.normalizeClass(["ie-support-text", e.unref(S) ? "inIE" : "hide"]),
                        "data-ps": "9685cd8d-div-38",
                        innerHTML: (ye = d.content) == null ? void 0 : ye.infoTextForIE
                    }, null, 10, vi), [
                        [e.vShow, e.unref(S)],
                        [e.unref(o.vPhwSetting)]
                    ]), e.unref(S) ? e.createCommentVNode("", !0) : e.withDirectives((e.openBlock(), e.createElementBlock("div", Ai, [e.withDirectives(e.createElementVNode("div", {
                        "data-ps": "9685cd8d-div-40",
                        innerHTML: (oe = d.content) == null ? void 0 : oe.noLocations
                    }, null, 8, Mi), [
                        [e.unref(o.vPhwSetting)]
                    ])])), [
                        [e.unref(o.vPhwSetting)]
                    ])])), [
                        [e.unref(o.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)], 10, Pd)), [
                        [e.vShow, (e.unref(u) && d.isPopup || !d.isPopup) && !e.unref(A)],
                        [e.unref(o.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(o.vPhwSetting)]
                    ])])), [
                        [e.unref(o.vPhwSetting)]
                    ])
                }
            }
        }),
        Pi = {
            "lm-widget-heading": "_lm-widget-heading_tas6d_3",
            "ph-a11y-map-button": "_ph-a11y-map-button_tas6d_13",
            inputArea: "_inputArea_tas6d_23",
            "on-focus": "_on-focus_tas6d_41",
            "ph-location-list": "_ph-location-list_tas6d_41",
            "no-result-block": "_no-result-block_tas6d_43",
            "location-list-item": "_location-list-item_tas6d_95",
            "location-no-data": "_location-no-data_tas6d_115",
            map: "_map_tas6d_127"
        },
        _i = "",
        Bi = ((d, t) => {
            const i = d.__vccOpts || d;
            for (const [n, h] of t) i[n] = h;
            return i
        })(Ti, [
            ["__cssModules", {
                $style: Pi
            }]
        ]),
        Li = {
            ref: "elem",
            class: "phw-widget-ctr",
            "data-ps": "8c9db1cd-div-1"
        };
    return e.defineComponent({
        __name: "LocationOverviewMapDefaultDefaultComponent",
        props: {
            instanceId: null,
            contentId: null,
            theme: null,
            widgetTag: null,
            locationKey: {
                default: "city"
            },
            rk: null,
            country: null,
            allFields: null,
            markerImgName: null,
            clusterImgName: null,
            clusterImgWidth: null,
            clusterImgHeight: null,
            clusterTextColor: null,
            clusterTextFontSize: null,
            bgType: null,
            hideLocationPopup: {
                type: Boolean,
                default: !1
            },
            searchResultMode: {
                type: Boolean,
                default: !1
            },
            hideTitle: {
                type: Boolean,
                default: !1
            },
            hideSubTitle: {
                type: Boolean,
                default: !0
            }
        },
        setup(d) {
            const t = d,
                i = e.ref(),
                n = e.ref(),
                h = e.ref(),
                u = e.ref();
            return e.onBeforeMount(async () => {
                It(t.searchResultMode), await Lt(t).then(r => {
                    n.value = r.assetUrls, h.value = r.locations
                }), await Bt(t.contentId).then(r => {
                    u.value = r
                })
            }), e.onMounted(() => {
                o.usePhCommon().init(i.value, u, t.instanceId)
            }), (r, k) => e.withDirectives((e.openBlock(), e.createElementBlock("div", Li, [u.value && h.value && h.value.length ? e.withDirectives((e.openBlock(), e.createBlock(e.unref(Bi), {
                key: 0,
                ref_key: "element",
                ref: i,
                "map-data": h.value,
                "asset-urls": n.value,
                "is-popup": !1,
                "hide-sub-title": t.hideSubTitle,
                "hide-title": t.hideTitle,
                "search-result-mode": t.searchResultMode,
                "hide-location-popup": t.hideLocationPopup,
                content: u.value.locationMap,
                "content-id": "phw-location-overview-map-default-default-v1",
                "data-ps": "8c9db1cd-LocationMapDefaultDefaultComponent-1"
            }, null, 8, ["map-data", "asset-urls", "hide-sub-title", "hide-title", "search-result-mode", "hide-location-popup", "content"])), [
                [e.unref(o.vPhwSetting)]
            ]) : e.createCommentVNode("", !0)])), [
                [e.unref(o.vPhwSetting)]
            ])
        }
    })
});