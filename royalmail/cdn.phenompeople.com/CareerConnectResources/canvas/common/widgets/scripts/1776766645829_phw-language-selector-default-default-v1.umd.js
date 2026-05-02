(function(e, a) {
    typeof exports == "object" && typeof module < "u" ? module.exports = a(require("vue"), require("ph-common/ph-common")) : typeof define == "function" && define.amd ? define(["vue", "ph-common/ph-common"], a) : (e = typeof globalThis < "u" ? globalThis : e || self, e.PhwLanguageSelectorDefaultDefaultV1 = a(e.Vue, e.phCommon))
})(this, function(e, a) {
    "use strict";
    var na = Object.defineProperty;
    var sa = (e, a, E) => a in e ? na(e, a, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: E
    }) : e[a] = E;
    var S = (e, a, E) => (sa(e, typeof a != "symbol" ? a + "" : a, E), E);
    const E = {
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
    class xe {
        constructor() {
            S(this, "clearTimer");
            S(this, "listBoxElement");
            S(this, "comboBoxElement");
            S(this, "widgetElement");
            S(this, "widgetViewModel");
            S(this, "activeIndex", -1);
            S(this, "results", []);
            S(this, "name");
            S(this, "element");
            S(this, "isShowResultsOnFocus", "true");
            S(this, "isShowNoResults", "true");
            S(this, "isHideListBox", "true");
            S(this, "keyupDebounceHandler");
            S(this, "keydownDebounceHandler");
            S(this, "ignoreExpanded", !1);
            S(this, "ignoreComboExpanded", !1);
            S(this, "ignoreListBoxClickHandler", !1);
            S(this, "isEventraised", !1);
            S(this, "validationInfo", {
                listbox: {},
                input: {},
                widget: {}
            });
            S(this, "debounceTimer", 200)
        }
        init(t, i, n) {
            this.element = t, this.name = i && i.name, this.ignoreExpanded = i && i.ignoreExpanded, this.ignoreComboExpanded = i && i.ignoreComboExpanded, this.ignoreListBoxClickHandler = i && i.ignoreListBoxClickHandler;
            const h = a.getSiteSettings("debounceTimer");
            h && (this.debounceTimer = h), this.initiate(n);
            const c = this.validate();
            c && c.length && console.warn("A11y autocomplete setup is improper.Check errors ", c), this.setupEventListeners()
        }
        debounce(t, i) {
            let n;
            return function() {
                const h = this,
                    c = arguments;
                clearTimeout(n), n = setTimeout(() => t.apply(h, c), i)
            }
        }
        initiate(t) {
            this.comboBoxElement = this.element.parentElement, this.comboBoxElement && (this.comboBoxElement.hasAttribute("aria-haspopup") && (this.element.setAttribute("aria-haspopup", this.comboBoxElement.getAttribute("aria-haspopup")), this.comboBoxElement.getAttribute("role")), this.comboBoxElement.hasAttribute("aria-owns") && (this.element.setAttribute("aria-owns", this.comboBoxElement.getAttribute("aria-owns")), this.comboBoxElement.removeAttribute("aria-owns")), this.comboBoxElement.hasAttribute("role") && (this.element.setAttribute("role", this.comboBoxElement.getAttribute("role")), this.comboBoxElement.removeAttribute("role")));
            const i = this.element.getAttribute("aria-haspopup"),
                n = this.element.getAttribute("aria-owns"),
                h = this.element.getAttribute("role");
            this.validationInfo.input.ariaHaspopup = i, this.validationInfo.input.ariaOwns = i, this.validationInfo.input.role = h;
            const c = this.element.getAttribute("aria-autocomplete"),
                w = this.element.getAttribute("aria-controls");
            if (this.isHideListBox = this.element.getAttribute("data-show-listbox") ? this.element.getAttribute("data-show-listbox") : "true", this.isShowResultsOnFocus = this.element.getAttribute("showResultsOnFocus") || this.isShowResultsOnFocus, this.isShowNoResults = this.element.getAttribute("showNoResults") || this.isShowNoResults, this.validationInfo.input.ariaAutocomplete = c, this.validationInfo.input.ariaControls = w, this.listBoxElement = this.comboBoxElement.querySelector(`[data-labelledby=${n}]`), this.listBoxElement || (this.listBoxElement = this.comboBoxElement.parentElement && this.comboBoxElement.parentElement.querySelector(`[data-labelledby=${n}]`) || document.querySelector(`[data-labelledby=${n}]`)), this.listBoxElement) {
                this.validationInfo.listbox.exists = !0;
                const u = this.listBoxElement.getAttribute("data-labelledby");
                this.validationInfo.listbox.ariaLabelledby = u
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
                h = n.length > 0 ? Array.from(n).reduce((x, y) => x + y.offsetHeight, 0) : 0,
                {
                    scrollTop: c
                } = t,
                w = t.clientHeight,
                u = i.getBoundingClientRect(),
                H = t.getBoundingClientRect(),
                b = u.top - H.top + c,
                W = b + i.offsetHeight,
                T = c + h,
                m = c + w,
                _ = 2;
            if (b < T - _) {
                const x = Math.max(b - h, 0);
                t.scrollTop !== x && (t.scrollTop = x)
            } else if (W > m + _) {
                const x = t.scrollHeight - w,
                    y = Math.min(W - w, x);
                t.scrollTop !== y && (t.scrollTop = y)
            }
        }
        setActiveListItem(t) {
            if (this.listBoxElement) {
                const i = this.listBoxElement.querySelectorAll('[role="option"]'),
                    n = `${this.name}-result-item-`;
                for (let c = 0; c < i.length; c += 1) {
                    const w = i[c],
                        u = n + c;
                    w.setAttribute("id", u), !t && c === this.activeIndex ? (w.setAttribute("aria-selected", "true"), w.classList.add("listitem-focused"), this.element.setAttribute("aria-activedescendant", u)) : (w.removeAttribute("aria-selected"), w.classList.remove("listitem-focused"))
                }
                if (this.activeIndex === -1 && this.element.setAttribute("aria-activedescendant", ""), document == null ? void 0 : document.querySelector(".phw-s-language-selector-modal-popup")) this.scrollControlInDialog();
                else {
                    const c = this.listBoxElement;
                    if (c) {
                        const w = c.querySelector(`#${this.name}-result-item-${this.activeIndex}`);
                        w && w.scrollIntoView({
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
                case E.UP:
                case E.DOWN:
                case E.ESC:
                case E.RETURN:
                    t.preventDefault();
                    return
            }
            let n = -1;
            if (n = Object.keys(E).findIndex(h => i === E[h]), (this.isShowResultsOnFocus === "true" || this.element.value && this.element.value.length && n === -1) && this.updateResults(), this.validationInfo.input.ariaAutocomplete === "both") switch (i) {
                case E.BACKSPACE:
                    return;
                default:
                    this.widgetViewModel && this.widgetViewModel.setFieldValue && this.widgetViewModel.setFieldValue(this.name, this.activeIndex)
            } else E.BACKSPACE === i && this.updateResults()
        }
        findWidget() {
            return this.element.__vueParentComponent && this.element.__vueParentComponent.vnode.el
        }
        keydownHandler(t) {
            if (t.target) switch (t.which || t.keyCode) {
                case E.DOWN:
                    this.isListboxHidden() ? this.updateResults().then(() => {
                        this.moveDown()
                    }) : this.moveDown();
                    break;
                case E.UP:
                    this.isListboxHidden() ? this.updateResults().then(() => {
                        this.moveUp()
                    }) : this.moveUp();
                    break;
                case E.ESC:
                    this.clearFieldAndCloseListbox();
                    break;
                case E.RETURN:
                    this.activeIndex !== -1 && t.preventDefault(), this.onEnter();
                    return;
                case E.TAB:
                case (t.shiftKey && t.key === E.TAB):
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
                            c = i + n;
                        h.setAttribute("id", c)
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

    function ue(g, t, i) {
        const n = t;
        if (t && !t[i] && t.all && (n[i] = t.all), n && n[i]) {
            const h = [];
            let c = [];
            return g.forEach((w, u) => {
                w && u < n[i] && c.push(w), w && w.checked && u > n[i] && h.push(w)
            }), c = h.concat(c), c
        }
        return g
    }
    const be = (g, t, i, n, h, c) => {
            if (g && g.length && t && t.trim().length > 0) {
                const w = g.filter(u => {
                    const H = typeof u == "string";
                    let b = u;
                    return !H && !i ? g : (!H && i && (b = u[i] || ""), b = b.toLowerCase(), n ? b.startsWith(t.toLowerCase()) : b.indexOf(t.toLowerCase()) !== -1)
                });
                return c && h ? ue(w, h, c) : w
            }
            return c && h ? ue(g, h, c) : g || []
        },
        me = {
            v2: {
                ddoKey: "getRegionLocales",
                ddoKeySaveProfile: "editProfile",
                ddoKeyVideoScreen: "getVideoScreenLocales"
            }
        };

    function De(g, t) {
        const i = e.ref(!1),
            n = e.ref([]),
            h = e.ref([]),
            c = e.ref({}),
            w = e.ref(""),
            u = e.ref(!1),
            H = e.ref(!1),
            b = e.ref(!1),
            W = e.ref(!1);
        let T = [],
            m, _ = !0;
        const x = e.ref({}),
            y = "getUrl",
            V = e.ref(!1),
            B = e.ref(0);

        function le(l) {
            let o = me.v2.ddoKey;
            l && (o = me.v2.ddoKeyVideoScreen), a.getDDO(o, {}).then(r => {
                if (r && r.data)
                    if (r.data.length > 1) {
                        m = r.data || [];
                        let p;
                        l && (p = window.location.href.replace(a.phAppStore.baseUrl, "")), m.forEach(k => {
                            k.hasOwnProperty("id") && (k.id = parseInt(k.id), p && k.siteUrl && (k.siteUrl = `${k.siteUrl}/${p}`))
                        }), g.sortOption === "alphabet" && m.sort(Q(g.sortType)), g.sortOption === "source" && m.sort(Q("id")), J()
                    } else $();
                else z();
                K()
            }, r => {
                z()
            }), document.addEventListener("click", r => {
                const p = r.target;
                t.value && !t.value.contains(p) && (u.value = !1)
            }, !1)
        }

        function J() {
            let l, o;
            const r = {};
            for (l = 0; l < m.length; l += 1) m[l].siteUrl && m[l].siteUrl.length > 0 && (m[l].siteUrl = he(m[l].siteUrl)), m[l].isAvailableInMenu && (r[m[l].id] = l, m[l].children = []);
            for (l = 0; l < m.length; l += 1) {
                const p = a.phAppStore.locale;
                m[l].isAvailableInMenu && (m[l].locale === p && (c.value = m[l]), m[l].location === a.phAppStore.country && m[l], o = m[l], n.value.push(o), h.value.push(o), o.parentId !== null && m[r[o.parentId]] && m[r[o.parentId]].children.push(o))
            }
            n.value.forEach(p => {
                if (p.locale) {
                    const k = p.locale.split("_")[0];
                    T.indexOf(k) === -1 && T.push(k)
                }
            }), n.value.forEach(p => {
                if (p.locale) {
                    const k = ne(p);
                    p.level = k, p.displayName = p.displayName || ""
                }
            }), h.value.forEach(p => {
                p.displayName = p.displayName || ""
            }), d()
        }

        function ne(l) {
            let o = 1;
            return l.children && l.children.length > 0 && (m.sort(Q("locale")), l.children.forEach(r => {
                const p = ne(r) + 1;
                o = Math.max(p, o)
            })), o
        }

        function Q(l) {
            return function(o, r) {
                return o[l] > r[l] ? 1 : o[l] < r[l] ? -1 : 0
            }
        }

        function pe(l) {
            n.value = be(h.value, l, "displayName")
        }

        function se(l) {
            const o = "";
            if (w.value = o, pe(o), l) u.value = !1;
            else if (setTimeout(() => {
                    b.value = !0
                }, 1e3), setTimeout(() => {
                    b.value = !1
                }, 1500), g.languageSelectorPopUp) {
                const r = document.querySelector("#language-selector-popup");
                setTimeout(() => {
                    r && r.focus()
                }, 100)
            } else {
                const r = t.value.querySelector("#language-selector");
                setTimeout(() => {
                    r && r.focus()
                }, 100)
            }
        }

        function he(l) {
            const o = oe(l);
            return o.pathname && o.pathname !== null && o.pathname !== "" && o.pathname !== "/" ? l : `${l}/home`
        }

        function oe(l) {
            const o = document.createElement("a");
            return o.href = l, {
                protocol: o.protocol,
                hostname: o.hostname,
                port: o.port,
                pathname: o.pathname,
                search: o.search,
                hash: o.hash,
                host: o.host
            }
        }

        function X(l, o, r) {
            x.value = l, B.value = l.id;
            const p = window.location.href,
                {
                    pageName: k
                } = a.phAppStore,
                G = a.phAppStore.ddo.siteConfig.data.urlMap;
            t.value.querySelector(".mobile-language-selector").blur();
            let R = {},
                U = "",
                Z = "";
            const ae = {};
            if (k && G[k]) {
                const q = G[k],
                    ie = p.split("/");
                U = q.split("/").map((v, re) => {
                    if (v.startsWith(":")) {
                        const de = ie.findIndex(ce => ce === k) + re;
                        return Z = ie[de] || "", ae[v.substring(1)] = Z, Z
                    }
                    return v
                }).join("/")
            } else U = k;
            R = {
                reqPageName: a.phAppStore.pageName,
                pagePath: `/${U}`,
                reqLang: l.locale,
                ...ae
            }, g.enableSamePageRedirection ? a.getDDO(y, R).then(q => {
                u.value = !1, q.status === "success" ? ee(l, o, r) : (V.value = !0, we())
            }).catch(q => {
                console.error("Error fetching supported locale:", q)
            }) : ee(l, o, r)
        }

        function ee(l, o, r) {
            const p = l.siteUrl || l.value.siteUrl,
                k = l.locale || l.value.locale;
            if (l && !o) {
                const G = {
                    localeName: k
                };
                r || a.trackWidgetClick(t.value, "locale", G);
                let R = p;
                if (g.samePage && g.enableSamePageRedirection) {
                    let U = "";
                    U = "/" + location.pathname.split("/").slice(3).join("/"), R += U, location.search && location.search.trim() && (R += location.search)
                }
                location.assign(R)
            } else location.assign(p)
        }
        const ge = () => {
                te()
            },
            we = () => {
                V.value = !0, e.nextTick(() => {
                    const l = t.value.querySelector(".mobile-language-selector"),
                        o = t.value.querySelector(".ph-a11y-popup-start-focus");
                    a.dialogModal.openDialogPopup(t.value, "phw-a11y-modal-area-language-selector", l, o, ge.bind(this))
                })
            },
            te = () => {
                V.value = !1, u.value = !0, A(), a.dialogModal.closeDialogPopup()
            };

        function d() {
            for (let l = 0; l < n.value.length; l++)
                if (n.value[l]) {
                    let o = n.value[l].siteUrl;
                    g.samePage && (o += location.pathname, location.search && location.search.trim().length > 0 && (o += location.search)), n.value[l].locationUrl = o
                }
        }

        function f(l) {
            if (D(!0, null), w.value.length) {
                if (t.value !== null) {
                    const o = t.value.querySelector(".ph-a11y-dropdown-box .ph-a11y-search-area input");
                    o && o.hasAttribute("aria-activedescendant") && o.removeAttribute("aria-activedescendant")
                }
                n.value && (n.value = h.value.reduce((o, r) => (r.primaryDisplayName && r.displayName && o.push(r), o), []), n.value = be(n.value, w.value, "displayName")), T = [], n.value.forEach(o => {
                    if (o.locale) {
                        const r = o.locale.split("_")[0];
                        T.indexOf(r) === -1 && T.push(r)
                    }
                })
            } else n.value = JSON.parse(JSON.stringify(h.value));
            return setTimeout(() => {
                H.value = !0
            }, 1e3), setTimeout(() => {
                H.value = !1
            }, 1500), n.value
        }

        function L(l, o) {
            if (n.value.length && n.value[o] && (w.value = n.value[o].displayName, t.value !== null)) {
                const r = t.value.querySelector(".listitem-focused div");
                if (r && P(r), g.languageSelectorPopUp) {
                    const p = document.querySelector(".listitem-focused div");
                    p && P(p)
                }
            }
        }

        function M(l) {
            return n.value.findIndex(o => o.displayName === w.value)
        }

        function O(l, o, r) {
            var p, k;
            r && r.type === "mouseup" ? (p = t.value) != null && p.contains(r == null ? void 0 : r.target) || D(!1, r) : (k = t.value) != null && k.contains(document.activeElement) || D(!1, null)
        }

        function P(l) {
            if (l && document.createEvent) {
                const o = document.createEvent("MouseEvents");
                o.initEvent("click", !0, !1), l.dispatchEvent(o)
            } else l && document && document.createEventObject ? l.fireEvent("onclick") : l && typeof l.onclick == "function" && l.onclick()
        }

        function D(l, o) {
            return l ? u.value = !0 : setTimeout(() => {
                var p;
                const r = (p = t.value) == null ? void 0 : p.querySelector('[data-selector="language-slector"]');
                o ? r.contains(o == null ? void 0 : o.target) && (u.value = !1) : r && !r.contains(document.activeElement) && (u.value = !1)
            }, 10), !0
        }

        function A() {
            u.value = !u.value
        }

        function $() {
            if (t.value && (t.value.style.display = "none", g.parentElemRemove)) {
                let l = t.value.querySelector(g.parentElemRemove);
                l || (l = t.value.closest("li")), l && (l.style.display = "none")
            }
        }

        function z(l) {
            K(), g.isErrorMsgReqd ? i.value = !0 : $()
        }

        function K() {
            W.value = !1
        }
        const Y = function(l, o) {
                _ && l && (new xe().init(l, o, {
                    getFieldOptions: f,
                    setFieldValue: L,
                    clearFieldValue: se,
                    getActiveIndex: M,
                    getActiveIndexOnBlur: O
                }), _ = !1)
            },
            j = l => a.contentStore.getContent(l).then(o => o);

        function N(l, o) {
            var r;
            A(), l === "samePage" ? te() : location.assign((r = x == null ? void 0 : x.value) == null ? void 0 : r.siteUrl)
        }
        return {
            showDropdown: A,
            onBlurHandler: D,
            languageChanged: X,
            clearFieldValue: se,
            fetchRegionLocales: le,
            showErrorMsg: i,
            searchArray: h,
            isShowDropDown: u,
            choosenLanguage: c,
            filterKey: w,
            roots: n,
            showLoader: W,
            resultsUpdated: H,
            getFieldOptions: f,
            setFieldValue: L,
            getActiveIndex: M,
            autoCompleteInitiate: Y,
            lsTextCleared: b,
            getContent: j,
            isPopupOpen: V,
            closePopup: te,
            fnClickLocale: N
        }
    }
    const Pe = {
            key: 0,
            class: "phw-spinner-block",
            "data-ps": "b5aad147-div-2"
        },
        _e = {
            class: "phw-spinner-border phw-primary",
            role: "status",
            "data-ps": "b5aad147-div-3"
        },
        Ne = {
            class: "phw-visually-hidden",
            "data-ps": "b5aad147-span-1"
        },
        Ie = ["aria-label"],
        Ve = {
            class: "phw-icon-ctr",
            "data-ps": "b5aad147-span-6",
            "data-component": "language-selector-icon"
        },
        Le = {
            class: "phw-i-sz-3 phw-i-sz-xl-2-5 phw-i-sz-lg-3",
            "aria-hidden": "true",
            fill: "currentColor",
            "data-ps": "b5aad147-svg-4"
        },
        Te = {
            href: "#phw-cns-icon-globe",
            "data-ps": "b5aad147-use-4"
        },
        Ae = {
            class: "phw-i-sz-4",
            fill: "currentcolor",
            "data-ps": "b5aad147-svg-1"
        },
        Me = {
            href: "#phw-cns-icon-chevron-up",
            "data-ps": "b5aad147-use-1"
        },
        $e = {
            class: "phw-i-sz-4",
            fill: "currentcolor",
            "data-ps": "b5aad147-svg-2"
        },
        Fe = {
            href: "#phw-cns-icon-chevron-down",
            "data-ps": "b5aad147-use-2"
        },
        He = {
            key: 0,
            class: "phw-form-group phw-f-c-sm phw-card-block phw-pt-1 phw-pb-1 phw-pr-2 phw-pl-2",
            "data-selector": "language-slector",
            "data-ps": "b5aad147-div-6"
        },
        Oe = {
            class: "phw-input-group",
            "data-ps": "b5aad147-div-18"
        },
        Re = {
            class: "phw-visually-hidden",
            for: "language-selector",
            "data-ps": "b5aad147-label-1"
        },
        Ue = ["value", "placeholder"],
        ze = {
            class: "phw-icon-ctr phw-input-icon-left",
            "data-ps": "b5aad147-span-5"
        },
        Ke = {
            "aria-hidden": "true",
            class: e.normalizeClass(["phw-icon phw-i-sz-3"]),
            fill: "currentcolor",
            "data-ps": "b5aad147-svg-3"
        },
        qe = {
            href: "#phw-cns-icon-search",
            "data-ps": "b5aad147-use-3"
        },
        Ce = {
            class: "phw-icon-ctr",
            "data-ps": "b5aad147-span-6"
        },
        We = {
            class: "phw-icon phw-i-sz-3",
            "aria-hidden": "true",
            fill: "currentcolor",
            "data-ps": "b5aad147-svg-5"
        },
        je = {
            href: "#phw-cns-icon-close",
            "data-ps": "b5aad147-use-5"
        },
        Ge = {
            class: "phw-visually-hidden",
            "data-ps": "b5aad147-span-7"
        },
        Je = {
            "data-ph-at-id": "clear-globalsearch-text",
            "data-ps": "b5aad147-span-8"
        },
        Qe = ["aria-label", "data-ph-at-count"],
        Xe = ["data-index", "role", "data-ph-at-locale", "data-ph-at-href", "aria-selected", "onClick", "onKeyup"],
        Ye = ["data-ph-at-displayname-text"],
        Ze = {
            key: 0,
            class: "phw-visually-hidden",
            "data-ps": "b5aad147-div-9"
        },
        ve = {
            "data-ps": "b5aad147-span-10"
        },
        et = ["data-index", "data-ph-at-locale", "data-ph-at-href"],
        tt = ["data-ph-at-displayname-text", "onClick", "onKeyup"],
        at = {
            "data-ps": "b5aad147-div-10"
        },
        it = {
            "data-ps": "b5aad147-span-11"
        },
        lt = {
            class: "phw-visually-hidden",
            "aria-atomic": "true",
            "aria-live": "polite",
            "data-ps": "b5aad147-div-12"
        },
        nt = {
            key: 0,
            "data-ps": "b5aad147-div-13"
        },
        st = {
            key: 0,
            "data-ps": "b5aad147-span-12"
        },
        ot = {
            key: 1,
            "data-ps": "b5aad147-span-13"
        },
        rt = {
            key: 1,
            "data-ps": "b5aad147-span-14"
        },
        dt = {
            key: 2,
            "data-ps": "b5aad147-span-15"
        },
        ct = ["data-ph-at-count"],
        pt = ["data-index", "role", "aria-selected", "data-ph-at-locale", "data-ph-at-href", "onClick", "onKeyup"],
        ht = ["href", "data-ph-at-displayname-text"],
        gt = {
            key: 0,
            class: "phw-visually-hidden",
            "data-ps": "b5aad147-div-17"
        },
        wt = {
            "data-ps": "b5aad147-span-17"
        },
        ft = {
            key: 2,
            "data-hide-settings": "true",
            "data-ps": "b5aad147-div-18"
        },
        ut = {
            "data-hide-settings": "true",
            "data-ps": "b5aad147-div-20"
        },
        bt = {
            class: "modal-wrapper",
            "data-ph-at-id": "modalDialog",
            "data-ps": "b5aad147-div-21"
        },
        mt = {
            "data-hide-settings": "true",
            "data-ps": "b5aad147-div-22"
        },
        kt = ["aria-label"],
        yt = {
            class: "phw-icon-ctr",
            "data-ps": "b5aad147-span-25"
        },
        Bt = {
            href: "#phw-cns-icon-close",
            "data-ps": "b5aad147-use-6"
        },
        St = {
            class: "phw-modal-content phw-text-c phw-mb-2",
            "data-ps": "b5aad147-div-28"
        },
        Et = {
            href: "#phw-cns-icon-globe-1",
            "data-ps": "b5aad147-use-7"
        },
        xt = {
            "ally-label-heading": "ph-ally-unsaved-popup-heading",
            class: "phw-g-h2-card-title-dark-default phw-mb-2",
            "data-ph-at-id": "pageNotAvailableInSelectedLocale",
            "data-ps": "b5aad147-h2-1"
        },
        Dt = {
            id: "ph-ally-unsaved-popup-subHeading",
            class: "para-p phw-g-text-default-dark phw-mb-4",
            "data-ph-at-id": "pageNotAvailableInSelectedLocaleDescription",
            "data-ps": "b5aad147-div-32"
        },
        Pt = {
            class: e.normalizeClass(["phw-default-dialog", "phw-modal-md", "phw-s-lang-ally-model-area", "phw-p-0", "phw-pb-3"]),
            role: "dialog",
            "aria-modal": "true",
            "data-ps": "b5aad147-div-20"
        },
        _t = {
            class: "phw-pt-5 phw-pl-5 phw-pr-5",
            "data-ps": "b5aad147-div-21"
        },
        Nt = ["aria-label"],
        It = {
            class: "phw-icon-ctr",
            "data-ps": "b5aad147-span-19"
        },
        Vt = {
            class: "phw-i-sz-2-5",
            "aria-hidden": "true",
            fill: "currentcolor",
            "data-ps": "b5aad147-svg-6"
        },
        Lt = {
            href: "#phw-cns-icon-close",
            "data-ps": "b5aad147-use-6"
        },
        Tt = {
            "ally-label-heading": "",
            class: "phw-g-text-default-dark phw-g-h3-card-large-dark",
            "data-ps": "b5aad147-h2-1"
        },
        At = {
            "data-ps": "b5aad147-div-23"
        },
        Mt = {
            key: 0,
            class: "modal-search-group phw-form-group phw-pb-3 phw-pt-3 phw-pl-5 phw-pr-5",
            "data-ps": "b5aad147-div-24"
        },
        $t = {
            class: "phw-input-group",
            "data-ps": "b5aad147-div-25"
        },
        Ft = {
            class: "phw-visually-hidden",
            for: "language-selector-popup",
            "data-ps": "b5aad147-label-2"
        },
        Ht = ["value", "placeholder"],
        Ot = {
            class: "phw-icon-ctr phw-input-icon-left",
            "data-ps": "b5aad147-span-20"
        },
        Rt = {
            "aria-hidden": "true",
            class: "phw-icon phw-i-sz-3",
            fill: "currentcolor",
            "data-ps": "b5aad147-svg-7"
        },
        Ut = {
            href: "#phw-cns-icon-search",
            "data-ps": "b5aad147-use-7"
        },
        zt = {
            class: "phw-icon-ctr",
            "data-ps": "b5aad147-span-21"
        },
        Kt = {
            class: "phw-icon phw-i-sz-3",
            "aria-hidden": "true",
            fill: "currentcolor",
            "data-ps": "b5aad147-svg-8"
        },
        qt = {
            href: "#phw-cns-icon-close",
            "data-ps": "b5aad147-use-8"
        },
        Ct = {
            class: "phw-visually-hidden",
            "data-ps": "b5aad147-span-22"
        },
        Wt = {
            "data-ph-at-id": "clear-globalsearch-text",
            "data-ps": "b5aad147-span-23"
        },
        jt = ["aria-label", "data-ph-at-count"],
        Gt = ["data-index", "data-ph-at-locale", "data-ph-at-href", "aria-selected", "onClick", "onKeyup", "onKeydown"],
        Jt = ["data-ph-at-displayname-text"],
        Qt = {
            key: 0,
            class: "phw-visually-hidden",
            "data-ps": "b5aad147-div-28"
        },
        Xt = {
            "data-ps": "b5aad147-span-25"
        },
        Yt = {
            "data-ps": "b5aad147-div-29"
        },
        Zt = {
            "data-ps": "b5aad147-span-26"
        },
        vt = {
            class: "phw-visually-hidden",
            "aria-atomic": "true",
            "aria-live": "polite",
            "data-ps": "b5aad147-div-31"
        },
        ea = {
            key: 0,
            "data-ps": "b5aad147-div-32"
        },
        ta = {
            key: 0,
            "data-ps": "b5aad147-span-27"
        },
        aa = {
            key: 1,
            "data-ps": "b5aad147-span-28"
        },
        ia = {
            key: 1,
            "data-ps": "b5aad147-span-29"
        },
        la = {
            key: 2,
            "data-ps": "b5aad147-span-30"
        };
    return ((g, t) => {
        const i = g.__vccOpts || g;
        for (const [n, h] of t) i[n] = h;
        return i
    })(e.defineComponent({
        __name: "LanguageSelectorDefaultDefaultComponent",
        props: {
            instanceId: null,
            contentId: null,
            theme: null,
            widgetTag: null,
            videoScreen: {
                type: Boolean
            },
            samePage: {
                type: Boolean,
                default: !0
            },
            sortOption: {
                default: "alphabet"
            },
            isErrorMsgReqd: {
                type: Boolean,
                default: !1
            },
            sortType: {
                default: "locale"
            },
            content: null,
            parentElemRemove: null,
            noOfLocalesToGetSearch: {
                default: 3
            },
            countryFlag: {
                type: Boolean,
                default: !1
            },
            languageSelectorPresentInHeaderMobile: {
                default: "false"
            },
            showInMobileHeader: {
                type: Boolean,
                default: !1
            },
            languageSelectorPopUp: {
                type: Boolean,
                default: !1
            },
            classStyle: {
                type: Boolean
            },
            enableSamePageRedirection: {
                type: Boolean
            },
            footerLanguageSelector: {
                type: Boolean,
                default: !1
            }
        },
        setup(g) {
            const t = g,
                i = e.ref({}),
                n = e.ref(),
                h = e.ref();
            e.ref();
            const c = e.ref(),
                w = e.ref(),
                {
                    showDropdown: u,
                    onBlurHandler: H,
                    languageChanged: b,
                    fetchRegionLocales: W,
                    clearFieldValue: T,
                    showErrorMsg: m,
                    searchArray: _,
                    isShowDropDown: x,
                    choosenLanguage: y,
                    filterKey: V,
                    roots: B,
                    showLoader: le,
                    resultsUpdated: J,
                    autoCompleteInitiate: ne,
                    lsTextCleared: Q,
                    getContent: pe,
                    isPopupOpen: se,
                    closePopup: he,
                    fnClickLocale: oe
                } = De(t, n),
                X = e.ref(!1),
                ee = () => {
                    X.value = !1, a.dialogModal.closeDialogPopup()
                },
                ge = () => {
                    ee()
                },
                we = () => {
                    X.value = !0, X.value && e.nextTick(() => {
                        a.dialogModal.openDialogPopup(n.value, "phw-s-lang-ally-model-area", n.value.querySelector(".phw-s-language-block"), n.value.querySelector(".phw-modal-close"), ge.bind(this))
                    })
                },
                te = d => {
                    const f = '[data-ph-component-name="menu"] .language-selector-mobile',
                        L = () => {
                            const P = d.querySelectorAll(f);
                            return P.length > 0 && (P.forEach(D => D.remove()), console.log(`Removed ${P.length} language selector element(s) from mobile menu`)), P.length > 0
                        };
                    L() && console.log("Language selector elements removed immediately");
                    const M = new MutationObserver(P => {
                        let D = !1;
                        P.forEach(A => {
                            var $, z, K;
                            if (A.type === "childList") {
                                const Y = Array.from(A.addedNodes);
                                for (const j of Y)
                                    if (j.nodeType === Node.ELEMENT_NODE) {
                                        const N = j;
                                        if ((($ = N.matches) == null ? void 0 : $.call(N, f)) || ((z = N.querySelector) == null ? void 0 : z.call(N, f))) {
                                            D = !0;
                                            break
                                        }
                                        if ((K = N.querySelector) != null && K.call(N, f)) {
                                            D = !0;
                                            break
                                        }
                                    }
                            }
                        }), D && setTimeout(() => {
                            L()
                        }, 50)
                    });
                    M.observe(d, {
                        childList: !0,
                        subtree: !0,
                        attributes: !1,
                        characterData: !1
                    });
                    const O = setInterval(() => {
                        L()
                    }, 2e3);
                    setTimeout(() => {
                        M.disconnect(), clearInterval(O), console.log("Language selector monitoring stopped after 10 seconds")
                    }, 1e4), console.log("Language selector monitoring started - will continue for 10 seconds")
                };
            return e.onBeforeMount(() => {
                t.contentId ? pe(t.contentId).then(d => {
                    i.value = d || {}
                }) : i.value = t.content, W(t.videoScreen)
            }), e.onMounted(() => {
                a.usePhCommon().init(n.value, i, t.instanceId), setTimeout(() => {
                    var f, L, M, O, P, D, A;
                    if (ne(t.languageSelectorPopUp ? w.value : c.value, {
                            name: "language",
                            ignoreExpanded: !0
                        }), t.showInMobileHeader === !0 || t.languageSelectorPresentInHeaderMobile === "true") {
                        (L = (f = n.value) == null ? void 0 : f.closest('[data-component="language-selector"]')) == null || L.classList.remove("phw-d-sm-none"), (O = (M = n.value) == null ? void 0 : M.closest('[data-component="language-selector"]')) == null || O.classList.add("phw-d-sm-block"), (D = (P = n.value) == null ? void 0 : P.closest("section")) == null || D.classList.add("phw-posn-sm-static");
                        const $ = (A = n.value) == null ? void 0 : A.closest(".ph-header");
                        $ && te($)
                    }
                }, 1e3)
            }), (d, f) => {
                var M, O, P, D, A, $, z, K, Y, j, N, l, o, r, p, k, G, R, U, Z, ae, q, ie, fe, v, re, de, ce, ke, ye, Be, Se, Ee;
                const L = e.resolveDirective("phw-track");
                return e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    ref_key: "root",
                    ref: n,
                    class: "phw-widget-ctr phw-widget-empty-ctr",
                    "data-ps": "b5aad147-div-1"
                }, [e.unref(le) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", Pe, [e.withDirectives((e.openBlock(), e.createElementBlock("div", _e, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Ne, [e.createTextVNode(e.toDisplayString((M = i.value) == null ? void 0 : M.languageSelectedText), 1)])), [
                    [e.unref(a.vPhwSetting)]
                ])])), [
                    [e.unref(a.vPhwSetting)]
                ])])), [
                    [e.unref(a.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), !e.unref(m) && !e.unref(le) && i.value && ((O = e.unref(_)) == null ? void 0 : O.length) > 1 ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    key: 1,
                    class: e.normalizeClass(["phw-d-inline-flex phw-d-sm-block phw-posn-relative", [d.$style["language-selector-block"], t.languageSelectorPresentInHeaderMobile === "true" || t.showInMobileHeader === !0 ? "phw-posn-sm-static" : "phw-posn-sm-relative", t.footerLanguageSelector ? "phw-width-4 phw-align-items-center phw-justify-content-center" : ""]]),
                    "data-ps": "b5aad147-div-4"
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("button", e.mergeProps({
                    class: ["mobile-language-selector", ["phw-btn", "phw-gap-050", "phw-p-0", "phw-g-header-link", "phw-s-language-block", "phw-width-auto", "phw-gap-1", "phw-justify-sm-content-start", e.unref(_).length == 1 ? "single-language" : "", e.unref(_).length > 10 ? "" : "dropdown-arrow", t.classStyle ? d.$style["c-language-selector"] : ""]],
                    "aria-label": ((P = i.value) == null ? void 0 : P.languageSelectedText) + " " + e.unref(y).languageDisplayName + " " + e.unref(y).locationDisplayName
                }, t.languageSelectorPopUp ? {
                    "aria-haspopup": "dialog"
                } : {
                    "aria-expanded": e.unref(x) ? "true" : "false"
                }, {
                    "data-ps": "b5aad147-button-1",
                    "data-ph-at-id": "language-selector-button",
                    onClick: f[0] || (f[0] = s => t.languageSelectorPopUp ? we() : e.unref(u)())
                }), [e.withDirectives((e.openBlock(), e.createElementBlock("span", Ve, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", Le, [e.withDirectives(e.createElementVNode("use", Te, null, 512), [
                    [e.unref(a.vPhwSetting)]
                ])])), [
                    [e.unref(a.vPhwSetting)]
                ])])), [
                    [e.unref(a.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                    class: e.normalizeClass([
                        [t.languageSelectorPresentInHeaderMobile === "true" || t.showInMobileHeader === !0 ? "phw-d-sm-none" : ""], "phw-d-sm-block selected-country phw-c-b5aad147-selected-country phw-d-lg-none"
                    ]),
                    "data-ph-at-id": "selected-country",
                    "data-ps": "b5aad147-span-2"
                }, [e.createTextVNode(e.toDisplayString(e.unref(y).locationDisplayName), 1)], 2)), [
                    [e.unref(a.vPhwSetting)]
                ]), e.unref(x) && !t.languageSelectorPopUp ? e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                    key: 0,
                    class: e.normalizeClass(["phw-icon-ctr", d.$style["btn-icon"]]),
                    "data-ps": "b5aad147-span-3"
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", Ae, [e.withDirectives(e.createElementVNode("use", Me, null, 512), [
                    [e.unref(a.vPhwSetting)]
                ])])), [
                    [e.unref(a.vPhwSetting)]
                ])], 2)), [
                    [e.unref(a.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), !e.unref(x) && !t.languageSelectorPopUp ? e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                    key: 1,
                    class: e.normalizeClass(["phw-icon-ctr", d.$style["btn-icon"]]),
                    "data-ps": "b5aad147-span-4"
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", $e, [e.withDirectives(e.createElementVNode("use", Fe, null, 512), [
                    [e.unref(a.vPhwSetting)]
                ])])), [
                    [e.unref(a.vPhwSetting)]
                ])], 2)), [
                    [e.unref(a.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)], 16, Ie)), [
                    [e.vShow, !t.footerLanguageSelector],
                    [e.unref(a.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    class: e.normalizeClass(["phw-c-b5aad147-dropdown phw-content-block", [t.footerLanguageSelector ? ["phw-g-p-default-light"] : [d.$style["dropdown-box"], "phw-g-card-bg-light", "phw-stroke-dark", "phw-posn-absolute", "phw-g-p-default-dark"], e.unref(_).length > 10 ? "" : "dropdown-arrow", t.languageSelectorPresentInHeaderMobile === "true" || t.showInMobileHeader === !0 ? d.$style["language-selctor-dropdown-box"] : "phw-posn-sm-relative"]]),
                    "data-ps": "b5aad147-div-5"
                }, [t.footerLanguageSelector ? e.createCommentVNode("", !0) : e.withDirectives((e.openBlock(), e.createElementBlock("div", He, [e.withDirectives((e.openBlock(), e.createElementBlock("div", Oe, [e.withDirectives((e.openBlock(), e.createElementBlock("label", Re, [e.createTextVNode(e.toDisplayString(((D = i.value) == null ? void 0 : D.language) && ((A = i.value) == null ? void 0 : A.language.label)), 1)])), [
                    [e.unref(a.vPhwSetting)]
                ]), e.withDirectives(e.createElementVNode("input", {
                    id: "language-selector",
                    ref_key: "languageEle",
                    ref: c,
                    class: e.normalizeClass(["phw-input-icon-pl phw-s-language-input phw-g-text-field-style-1", e.unref(V) ? "phw-input-icon-pr" : ""]),
                    type: "text",
                    role: "combobox",
                    value: e.unref(V),
                    name: "language-listbox",
                    "aria-autocomplete": "list",
                    autocomplete: "off",
                    "aria-controls": "language-listbox",
                    "aria-owns": "language-listbox",
                    "aria-expanded": "true",
                    "data-ph-at-id": "language-selector",
                    placeholder: (($ = i.value) == null ? void 0 : $.language) && ((z = i.value) == null ? void 0 : z.language.placeholder),
                    "data-show-listbox": "false",
                    "data-ps": "b5aad147-input-1",
                    onInput: f[1] || (f[1] = s => {
                        var I;
                        return V.value = (I = s == null ? void 0 : s.target) == null ? void 0 : I.value
                    })
                }, null, 42, Ue), [
                    [e.unref(a.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", ze, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", Ke, [e.withDirectives(e.createElementVNode("use", qe, null, 512), [
                    [e.unref(a.vPhwSetting)]
                ])])), [
                    [e.unref(a.vPhwSetting)]
                ])])), [
                    [e.unref(a.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                    id: "clearFilterKey",
                    tabindex: "0",
                    "data-ph-at-id": "clear-feild-value",
                    class: "phw-input-icon-right phw-btn phw-g-btn-link phw-width-auto",
                    "data-ps": "b5aad147-a-1",
                    onClick: f[2] || (f[2] = s => e.unref(T)()),
                    onKeyup: f[3] || (f[3] = e.withKeys(s => e.unref(T)(), ["space"]))
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Ce, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", We, [e.withDirectives(e.createElementVNode("use", je, null, 512), [
                    [e.unref(a.vPhwSetting)]
                ])])), [
                    [e.unref(a.vPhwSetting)]
                ])])), [
                    [e.unref(a.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", Ge, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Je, [e.createTextVNode(e.toDisplayString((K = i.value) == null ? void 0 : K.clearText), 1)])), [
                    [e.unref(a.vPhwSetting)]
                ])])), [
                    [e.unref(a.vPhwSetting)]
                ])], 32)), [
                    [e.vShow, e.unref(V)],
                    [e.unref(a.vPhwSetting)]
                ])])), [
                    [e.unref(a.vPhwSetting)]
                ])])), [
                    [e.unref(a.vPhwSetting)]
                ]), t.footerLanguageSelector ? e.createCommentVNode("", !0) : e.withDirectives((e.openBlock(), e.createElementBlock("ul", {
                    key: 1,
                    id: "language-listbox",
                    class: e.normalizeClass([
                        ["phw-list-none", d.$style["language-selector-listbox"]], "phw-mb-0 phw-pl-0"
                    ]),
                    role: "listbox",
                    "aria-label": (Y = i.value) == null ? void 0 : Y.languageListBox,
                    "data-labelledby": "language-listbox",
                    tabindex: "-1",
                    "data-ph-at-id": "language-selector-options",
                    "data-ph-at-count": (j = e.unref(B)) == null ? void 0 : j.length,
                    "data-ps": "b5aad147-ul-1"
                }, [(e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(e.unref(B), (s, I) => {
                    var F;
                    return e.withDirectives((e.openBlock(), e.createElementBlock("li", {
                        key: I,
                        "data-index": I,
                        class: e.normalizeClass([d.$style["dropdown-list-item"], "phw-list-none", "phw-g-p-default-dark", "language-list-items", d.$style[s.displayName === e.unref(y).displayName ? "active" : ""]]),
                        role: t.languageSelectorPopUp ? "" : "option",
                        tabindex: "-1",
                        "data-ph-at-locale": s == null ? void 0 : s.locale,
                        "data-ph-at-href": s == null ? void 0 : s.siteUrl,
                        "data-ph-at-id": "language-selector-list-option",
                        "aria-selected": s.displayName === e.unref(y).displayName,
                        "data-ps": "b5aad147-li-2",
                        onClick: C => e.unref(b)(s, !1),
                        onKeyup: [e.withKeys(C => e.unref(b)(s, !1), ["enter"]), e.withKeys(C => e.unref(b)(s, !1), ["space"])]
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        class: e.normalizeClass(["phw-g-p-default-dark", "phw-pt-2", "phw-pb-2", "phw-pr-3", "phw-pl-3", d.$style["dropdown-list-button"], s.displayName == e.unref(y).displayName ? d.$style.active : "", "phw-d-flex", "phw-align-items-center", "phw-m-0", "phw-gap-1", "phw-width-4", "phw-text-l", "phw-td-none", "phw-card-block"]),
                        role: "link",
                        "data-ph-at-displayname-text": s.displayName,
                        "data-ps": "b5aad147-div-7"
                    }, [g.countryFlag ? e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                        key: 0,
                        class: e.normalizeClass(["flag flag-" + s.language]),
                        "data-ph-at-id": "country-flag",
                        "data-ps": "b5aad147-span-9"
                    }, null, 2)), [
                        [e.unref(a.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        class: e.normalizeClass([d.$style.country, "phw-width-4", "phw-d-block", "phw-word-break", "phw-g-text-small-dark"]),
                        "data-ph-at-id": "country",
                        "data-ps": "b5aad147-div-8"
                    }, [e.createTextVNode(e.toDisplayString(s.displayName) + " ", 1), s.displayName == e.unref(y).displayName ? e.withDirectives((e.openBlock(), e.createElementBlock("div", Ze, [e.withDirectives((e.openBlock(), e.createElementBlock("span", ve, [e.createTextVNode(e.toDisplayString((F = i.value) == null ? void 0 : F.selectedText), 1)])), [
                        [e.unref(a.vPhwSetting)]
                    ])])), [
                        [e.unref(a.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)], 2)), [
                        [e.unref(a.vPhwSetting)]
                    ])], 10, Ye)), [
                        [e.unref(a.vPhwSetting)]
                    ])], 42, Xe)), [
                        [e.unref(a.vPhwSetting)]
                    ])
                }), 128))], 10, Qe)), [
                    [e.unref(a.vPhwSetting)]
                ]), t.footerLanguageSelector ? e.withDirectives((e.openBlock(), e.createElementBlock("ul", {
                    key: 2,
                    class: e.normalizeClass([
                        ["phw-list-none", "phw-d-flex", "phw-flex-wrap", "phw-justify-content-center", d.$style["footer-language-selector-listbox"]], "phw-mb-0 phw-pl-0"
                    ]),
                    role: "list",
                    "data-ps": "b5aad147-ul-1"
                }, [(e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(e.unref(B), (s, I) => e.withDirectives((e.openBlock(), e.createElementBlock("li", {
                    key: I,
                    "data-index": I,
                    class: e.normalizeClass([d.$style["dropdown-list-item"], d.$style["footer-dropdown-list-button"], "phw-list-none", "phw-g-p-default-light", "language-list-items"]),
                    role: "listitem",
                    "data-ph-at-locale": s == null ? void 0 : s.locale,
                    "data-ph-at-href": s == null ? void 0 : s.siteUrl,
                    "data-ps": "b5aad147-li-2"
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("a", {
                    role: "link",
                    href: "javascript:void(0);",
                    class: e.normalizeClass(["phw-g-p-default-light", "phw-p-0", "phw-pl-2", "phw-pr-2", "phw-d-flex", "phw-align-items-center", "phw-m-0", "phw-gap-1", "phw-width-4", "phw-text-l", "phw-td-none", "phw-card-block"]),
                    "data-ph-at-displayname-text": s.displayName,
                    "data-ps": "b5aad147-div-7",
                    onClick: F => e.unref(b)(s, !1),
                    onKeyup: [e.withKeys(F => e.unref(b)(s, !1), ["enter"]), e.withKeys(F => e.unref(b)(s, !1), ["space"])]
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    class: e.normalizeClass([d.$style.country, "phw-width-4", "phw-d-block", "phw-word-break", "phw-g-text-small-light"]),
                    "data-ph-at-id": "country",
                    "data-ps": "b5aad147-div-8"
                }, [e.createTextVNode(e.toDisplayString(s.displayName), 1)], 2)), [
                    [e.unref(a.vPhwSetting)]
                ])], 40, tt)), [
                    [e.unref(a.vPhwSetting)]
                ])], 10, et)), [
                    [e.unref(a.vPhwSetting)]
                ])), 128))], 2)), [
                    [e.unref(a.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("div", at, [e.unref(B).length ? e.createCommentVNode("", !0) : e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    key: 0,
                    class: e.normalizeClass(["phw-text-l", ["phw-p-2", t.footerLanguageSelector ? "phw-g-p-default-light" : "phw-g-p-default-dark"]]),
                    "data-ps": "b5aad147-div-11"
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", it, [e.createTextVNode(e.toDisplayString((N = i.value) == null ? void 0 : N.noResultsFoundText), 1)])), [
                    [e.unref(a.vPhwSetting)]
                ])], 2)), [
                    [e.unref(a.vPhwSetting)]
                ])])), [
                    [e.unref(a.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", lt, [e.unref(B).length && e.unref(J) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", nt, [e.createTextVNode(e.toDisplayString(e.unref(B).length) + " ", 1), e.unref(B).length > 1 ? e.withDirectives((e.openBlock(), e.createElementBlock("span", st, [e.createTextVNode(e.toDisplayString((l = i.value) == null ? void 0 : l.suggestionsAvailable), 1)])), [
                    [e.unref(a.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.unref(B).length == 1 ? e.withDirectives((e.openBlock(), e.createElementBlock("span", ot, [e.createTextVNode(e.toDisplayString((o = i.value) == null ? void 0 : o.suggestionIsAvailable), 1)])), [
                    [e.unref(a.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)])), [
                    [e.unref(a.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), !e.unref(B).length && e.unref(J) ? e.withDirectives((e.openBlock(), e.createElementBlock("span", rt, [e.createTextVNode(e.toDisplayString((r = i.value) == null ? void 0 : r.noResultsFoundText), 1)])), [
                    [e.unref(a.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.unref(Q) ? e.withDirectives((e.openBlock(), e.createElementBlock("span", dt, [e.createTextVNode(e.toDisplayString((p = i.value) == null ? void 0 : p.textCleared), 1)])), [
                    [e.unref(a.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)])), [
                    [e.unref(a.vPhwSetting)]
                ])], 2)), [
                    [e.vShow, (e.unref(x) || t.footerLanguageSelector) && e.unref(_).length > g.noOfLocalesToGetSearch && !t.languageSelectorPopUp],
                    [e.unref(a.vPhwSetting)]
                ]), (e.unref(x) || t.footerLanguageSelector) && e.unref(_).length <= g.noOfLocalesToGetSearch && !t.languageSelectorPopUp ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    key: 0,
                    class: e.normalizeClass(["phw-content-block", [t.footerLanguageSelector ? ["phw-g-p-default-light", "phw-width-4"] : [d.$style["dropdown-box"], "phw-g-card-bg-light", "phw-stroke-dark", "phw-posn-absolute", "phw-g-p-default-dark"], e.unref(_).length > 10 ? "" : "dropdown-arrow", t.languageSelectorPresentInHeaderMobile === "true" || t.showInMobileHeader === !0 ? d.$style["language-selctor-dropdown-box"] : "phw-posn-sm-relative"]]),
                    "data-ps": "b5aad147-div-14"
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("ul", {
                    id: "language-listbox",
                    class: e.normalizeClass([
                        ["phw-list-none", t.footerLanguageSelector ? ["phw-d-flex", "phw-flex-wrap", "phw-justify-content-center", d.$style["footer-language-selector-listbox"]] : d.$style["language-selector-listbox"]], "phw-mb-0 phw-pl-0"
                    ]),
                    role: "listbox",
                    "data-ph-at-id": "language-selector-options",
                    "data-ph-at-count": (k = e.unref(B)) == null ? void 0 : k.length,
                    "aria-label": "language-list",
                    "data-labelledby": "language-listbox",
                    tabindex: "-1",
                    "data-ps": "b5aad147-ul-2"
                }, [(e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(e.unref(B), (s, I) => {
                    var F;
                    return e.withDirectives((e.openBlock(), e.createElementBlock("li", {
                        key: I,
                        "data-index": I,
                        class: e.normalizeClass([d.$style["dropdown-list-item"], t.footerLanguageSelector ? d.$style["footer-dropdown-list-button"] : "", "phw-list-none", t.footerLanguageSelector ? "phw-g-p-default-light" : "phw-g-p-default-dark", d.$style[s.displayName === e.unref(y).displayName ? "active" : ""]]),
                        role: t.languageSelectorPopUp ? "" : "option",
                        "aria-selected": s.displayName === e.unref(y).displayName,
                        tabindex: "0",
                        "data-ps": "b5aad147-li-3",
                        "data-ph-at-id": "language-selector-list-option",
                        "data-ph-at-locale": s == null ? void 0 : s.locale,
                        "data-ph-at-href": s == null ? void 0 : s.siteUrl,
                        onClick: C => e.unref(b)(s, !1),
                        onKeyup: [e.withKeys(C => e.unref(b)(s, !1), ["space"]), e.withKeys(C => e.unref(b)(s, !1), ["enter"])]
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        href: s.siteUrl,
                        role: "link",
                        class: e.normalizeClass([t.footerLanguageSelector ? ["phw-g-p-default-light", "phw-p-0", "phw-pl-2", "phw-pr-2"] : ["phw-g-p-default-dark", "phw-pt-2", "phw-pb-2", "phw-pr-3", "phw-pl-3", d.$style["dropdown-list-button"]], s.displayName == e.unref(y).displayName ? d.$style.active : "", "phw-d-flex", "phw-align-items-center", "phw-m-0", "phw-gap-1", "phw-width-4", "phw-text-l", "phw-td-none", "phw-card-block"]),
                        "data-ph-at-displayname-text": s.displayName,
                        "data-ps": "b5aad147-div-15"
                    }, [g.countryFlag ? e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                        key: 0,
                        class: e.normalizeClass(["flag flag-" + s.language]),
                        "data-ph-at-id": "country-flag",
                        "data-ps": "b5aad147-span-16"
                    }, null, 2)), [
                        [e.unref(a.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        class: e.normalizeClass([d.$style.country, "phw-width-4", "phw-d-block", "phw-word-break", t.footerLanguageSelector ? "phw-g-text-small-light" : "phw-g-text-small-dark"]),
                        "data-ph-at-id": "country",
                        "data-ps": "b5aad147-div-16"
                    }, [e.createTextVNode(e.toDisplayString(s.displayName) + " ", 1), s.displayName == e.unref(y).displayName ? e.withDirectives((e.openBlock(), e.createElementBlock("div", gt, [e.withDirectives((e.openBlock(), e.createElementBlock("span", wt, [e.createTextVNode(e.toDisplayString((F = i.value) == null ? void 0 : F.selectedText), 1)])), [
                        [e.unref(a.vPhwSetting)]
                    ])])), [
                        [e.unref(a.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)], 2)), [
                        [e.unref(a.vPhwSetting)]
                    ])], 10, ht)), [
                        [e.unref(a.vPhwSetting)]
                    ])], 42, pt)), [
                        [e.unref(a.vPhwSetting)]
                    ])
                }), 128))], 10, ct)), [
                    [e.unref(a.vPhwSetting)]
                ])], 2)), [
                    [e.unref(a.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)], 2)), [
                    [e.unref(a.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.unref(se) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", ft, [e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    class: e.normalizeClass([d.$style["popup-modal-backdrop"], "phw-a11y-modal-area-language-selector phw-default-dialog phw-modal-sm custom-modal"]),
                    "data-ps": "b5aad147-div-19"
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", ut, [e.withDirectives((e.openBlock(), e.createElementBlock("div", bt, [e.withDirectives((e.openBlock(), e.createElementBlock("div", mt, [e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    class: e.normalizeClass(["phw-d-flex phw-text-l phw-flex-row-reverse", d.$style["custom-modal-header"]]),
                    "data-ps": "b5aad147-div-23"
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                    class: "ph-a11y-popup-start-focus close phw-modal-close phw-btn phw-g-btn-link",
                    "data-ph-at-id": "close-link",
                    "aria-label": i.value.closePopupButtonAriaLabel,
                    "data-ps": "b5aad147-button-2",
                    onClick: f[4] || (f[4] = s => e.unref(he)())
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", yt, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", {
                    "aria-hidden": "true",
                    class: e.normalizeClass(d.$style["close-icon"]),
                    fill: "currentcolor",
                    "data-ps": "b5aad147-svg-6"
                }, [e.withDirectives(e.createElementVNode("use", Bt, null, 512), [
                    [e.unref(a.vPhwSetting)]
                ])], 2)), [
                    [e.unref(a.vPhwSetting)]
                ])])), [
                    [e.unref(a.vPhwSetting)]
                ])], 8, kt)), [
                    [e.unref(a.vPhwSetting)],
                    [L, "modal_close_click"]
                ])], 2)), [
                    [e.unref(a.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", St, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", {
                    "aria-hidden": "true",
                    class: e.normalizeClass([d.$style["modal-content-image"], "phw-mb-2"]),
                    viewBox: "0 0 80 81",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    "data-ps": "b5aad147-svg-7"
                }, [e.withDirectives(e.createElementVNode("use", Et, null, 512), [
                    [e.unref(a.vPhwSetting)]
                ])], 2)), [
                    [e.unref(a.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("h2", xt, [e.createTextVNode(e.toDisplayString((G = i.value) == null ? void 0 : G.pageNotAvailableInSelectedLocale), 1)])), [
                    [e.unref(a.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", Dt, [e.createTextVNode(e.toDisplayString((R = i.value) == null ? void 0 : R.pageNotAvailableInSelectedLocaleDescription), 1)])), [
                    [e.unref(a.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    class: e.normalizeClass(["phw-d-flex phw-justify-content-center phw-gap-2", d.$style["modal-footer"]]),
                    "data-ps": "b5aad147-div-33"
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                    class: "phw-btn phw-g-btn-plain",
                    "data-ph-at-id": "go-to-home-page",
                    "data-ps": "b5aad147-button-3",
                    onClick: f[5] || (f[5] = s => e.unref(oe)("homePage", !0))
                }, [e.createTextVNode(e.toDisplayString((U = i.value) == null ? void 0 : U.startFromHome), 1)])), [
                    [e.unref(a.vPhwSetting)],
                    [L, "go-to-home-page"]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                    class: "phw-btn phw-g-btn-primary phw-ml-3 phw-ml-sm-0 phw-mt-sm-1",
                    "data-ph-at-id": "stay-on-same-page",
                    "data-ps": "b5aad147-button-4",
                    onClick: f[6] || (f[6] = s => e.unref(oe)("samePage", !1))
                }, [e.createTextVNode(e.toDisplayString((Z = i.value) == null ? void 0 : Z.switchBack), 1)])), [
                    [e.unref(a.vPhwSetting)],
                    [L, "stay-on-same-page"]
                ])], 2)), [
                    [e.unref(a.vPhwSetting)]
                ])])), [
                    [e.unref(a.vPhwSetting)]
                ])])), [
                    [e.unref(a.vPhwSetting)]
                ])])), [
                    [e.unref(a.vPhwSetting)]
                ])])), [
                    [e.unref(a.vPhwSetting)]
                ])], 2)), [
                    [e.unref(a.vPhwSetting)]
                ])])), [
                    [e.unref(a.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), X.value && t.languageSelectorPopUp ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    key: 3,
                    ref_key: "languagePopupEle",
                    ref: h,
                    "data-ps": "b5aad147-div-19"
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", Pt, [e.withDirectives((e.openBlock(), e.createElementBlock("div", _t, [e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    class: e.normalizeClass(["phw-d-flex phw-align-items-center phw-flex-row-reverse phw-justify-content-between phw-pb-3", [d.$style["modal-header"]]]),
                    "data-ps": "b5aad147-div-22"
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                    class: "phw-modal-close phw-g-modal-close-button",
                    "aria-label": i.value.closeDialog,
                    "data-ph-at-id": "close-dialog",
                    "data-ps": "b5aad147-button-2",
                    onClick: f[7] || (f[7] = s => ee())
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", It, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", Vt, [e.withDirectives(e.createElementVNode("use", Lt, null, 512), [
                    [e.unref(a.vPhwSetting)]
                ])])), [
                    [e.unref(a.vPhwSetting)]
                ])])), [
                    [e.unref(a.vPhwSetting)]
                ])], 8, Nt)), [
                    [e.unref(a.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("h2", Tt, [e.createTextVNode(e.toDisplayString((ae = i.value) == null ? void 0 : ae.languageSelectorPopupTitle), 1)])), [
                    [e.unref(a.vPhwSetting)]
                ])], 2)), [
                    [e.unref(a.vPhwSetting)]
                ])])), [
                    [e.unref(a.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", At, [e.unref(_).length > g.noOfLocalesToGetSearch ? e.withDirectives((e.openBlock(), e.createElementBlock("div", Mt, [e.withDirectives((e.openBlock(), e.createElementBlock("div", $t, [e.withDirectives((e.openBlock(), e.createElementBlock("label", Ft, [e.createTextVNode(e.toDisplayString(((q = i.value) == null ? void 0 : q.language) && ((ie = i.value) == null ? void 0 : ie.language.label)), 1)])), [
                    [e.unref(a.vPhwSetting)]
                ]), e.withDirectives(e.createElementVNode("input", {
                    id: "language-selector-popup",
                    ref_key: "languageElePopup",
                    ref: w,
                    class: e.normalizeClass(["phw-input-icon-pl phw-s-language-input phw-g-text-field-style-1 phw-input-group", [e.unref(V) ? "phw-input-icon-pr" : ""]]),
                    type: "text",
                    role: "combobox",
                    value: e.unref(V),
                    name: "language-listbox-popup",
                    "aria-autocomplete": "list",
                    autocomplete: "off",
                    "aria-controls": "language-listbox-popup",
                    "aria-owns": "language-listbox-popup",
                    "aria-expanded": "true",
                    "data-ph-at-id": "language-selector-popup",
                    placeholder: ((fe = i.value) == null ? void 0 : fe.language) && ((v = i.value) == null ? void 0 : v.language.placeholder),
                    "data-show-listbox": "false",
                    "data-ps": "b5aad147-input-2",
                    onInput: f[8] || (f[8] = s => V.value = s.target.value)
                }, null, 42, Ht), [
                    [e.unref(a.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", Ot, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", Rt, [e.withDirectives(e.createElementVNode("use", Ut, null, 512), [
                    [e.unref(a.vPhwSetting)]
                ])])), [
                    [e.unref(a.vPhwSetting)]
                ])])), [
                    [e.unref(a.vPhwSetting)]
                ]), e.unref(V) ? e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                    key: 0,
                    id: "clearFilterKey",
                    tabindex: "0",
                    "data-ph-at-id": "clear-feild-value",
                    class: "phw-input-icon-right phw-btn phw-g-btn-link phw-width-auto",
                    "data-ps": "b5aad147-button-3",
                    onClick: f[9] || (f[9] = s => e.unref(T)()),
                    onKeyup: f[10] || (f[10] = e.withKeys(s => e.unref(T)(), ["space"]))
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", zt, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", Kt, [e.withDirectives(e.createElementVNode("use", qt, null, 512), [
                    [e.unref(a.vPhwSetting)]
                ])])), [
                    [e.unref(a.vPhwSetting)]
                ])])), [
                    [e.unref(a.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", Ct, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Wt, [e.createTextVNode(e.toDisplayString((re = i.value) == null ? void 0 : re.clearText), 1)])), [
                    [e.unref(a.vPhwSetting)]
                ])])), [
                    [e.unref(a.vPhwSetting)]
                ])], 32)), [
                    [e.unref(a.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)])), [
                    [e.unref(a.vPhwSetting)]
                ])])), [
                    [e.unref(a.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("ul", {
                    id: "language-listbox-popup",
                    class: e.normalizeClass([
                        [d.$style["language-selector-listbox"], "phw-list-none", d.$style["lang-modal-list"]], "phw-pl-0 phw-pt-1 phw-grid-3 phw-grid-md-2 phw-grid-sm-1 phw-s-language-selector-modal-popup phw-pl-5 phw-pr-5"
                    ]),
                    role: "listbox",
                    "aria-label": (de = i.value) == null ? void 0 : de.languageListBox,
                    "data-labelledby": "language-listbox-popup",
                    tabindex: "-1",
                    "data-ph-at-id": "language-selector-options",
                    "data-ph-at-count": (ce = e.unref(B)) == null ? void 0 : ce.length,
                    "data-ps": "b5aad147-ul-3"
                }, [(e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(e.unref(B), (s, I) => {
                    var F;
                    return e.withDirectives((e.openBlock(), e.createElementBlock("li", {
                        key: I,
                        "data-index": I,
                        class: e.normalizeClass([d.$style["dropdown-list-item"], "phw-list-none", "phw-g-p-default-dark", "language-list-items", d.$style[s.displayName === e.unref(y).displayName ? "active" : ""]]),
                        role: "option",
                        tabindex: "-1",
                        "data-ph-at-locale": s == null ? void 0 : s.locale,
                        "data-ph-at-href": s == null ? void 0 : s.siteUrl,
                        "data-ph-at-id": "language-selector-list-option",
                        "aria-selected": s.displayName === e.unref(y).displayName,
                        "data-ps": "b5aad147-li-4",
                        onClick: C => e.unref(b)(s, !1),
                        onKeyup: e.withKeys(C => e.unref(b)(s, !1), ["space"]),
                        onKeydown: e.withKeys(C => e.unref(b)(s, !1), ["enter"])
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        class: e.normalizeClass([d.$style["dropdown-list-button"], s.displayName == e.unref(y).displayName ? d.$style.active : "", "phw-d-flex", "phw-align-items-center", "phw-m-0", "phw-pt-1", "phw-pb-1", "phw-pr-3", "phw-gap-1", "phw-width-4", "phw-text-l", "phw-td-none", "phw-g-p-default-dark", "phw-card-block"]),
                        "data-ph-at-displayname-text": s.displayName,
                        "data-ps": "b5aad147-div-26"
                    }, [g.countryFlag ? e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                        key: 0,
                        class: e.normalizeClass(["flag flag-" + s.language]),
                        "data-ph-at-id": "country-flag",
                        "data-ps": "b5aad147-span-24"
                    }, null, 2)), [
                        [e.unref(a.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        class: e.normalizeClass([d.$style.country, "phw-width-4", "phw-d-block", "phw-word-break", "phw-g-text-small-dark"]),
                        "data-ph-at-id": "country",
                        "data-ps": "b5aad147-div-27"
                    }, [e.createTextVNode(e.toDisplayString(s.displayName) + " ", 1), s.displayName == e.unref(y).displayName ? e.withDirectives((e.openBlock(), e.createElementBlock("div", Qt, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Xt, [e.createTextVNode(e.toDisplayString((F = i.value) == null ? void 0 : F.selectedText), 1)])), [
                        [e.unref(a.vPhwSetting)]
                    ])])), [
                        [e.unref(a.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)], 2)), [
                        [e.unref(a.vPhwSetting)]
                    ])], 10, Jt)), [
                        [e.unref(a.vPhwSetting)]
                    ])], 42, Gt)), [
                        [e.unref(a.vPhwSetting)]
                    ])
                }), 128))], 10, jt)), [
                    [e.unref(a.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", Yt, [e.unref(B).length ? e.createCommentVNode("", !0) : e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    key: 0,
                    class: e.normalizeClass(["phw-text-l", ["phw-p-2", "phw-g-p-default-dark"]]),
                    "data-ps": "b5aad147-div-30"
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Zt, [e.createTextVNode(e.toDisplayString((ke = i.value) == null ? void 0 : ke.noResultsFoundText), 1)])), [
                    [e.unref(a.vPhwSetting)]
                ])])), [
                    [e.unref(a.vPhwSetting)]
                ])])), [
                    [e.unref(a.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", vt, [e.unref(B).length && e.unref(J) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", ea, [e.createTextVNode(e.toDisplayString(e.unref(B).length) + " ", 1), e.unref(B).length > 1 ? e.withDirectives((e.openBlock(), e.createElementBlock("span", ta, [e.createTextVNode(e.toDisplayString((ye = i.value) == null ? void 0 : ye.suggestionsAvailable), 1)])), [
                    [e.unref(a.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.unref(B).length == 1 ? e.withDirectives((e.openBlock(), e.createElementBlock("span", aa, [e.createTextVNode(e.toDisplayString((Be = i.value) == null ? void 0 : Be.suggestionIsAvailable), 1)])), [
                    [e.unref(a.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)])), [
                    [e.unref(a.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), !e.unref(B).length && e.unref(J) ? e.withDirectives((e.openBlock(), e.createElementBlock("span", ia, [e.createTextVNode(e.toDisplayString((Se = i.value) == null ? void 0 : Se.noResultsFoundText), 1)])), [
                    [e.unref(a.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.unref(Q) ? e.withDirectives((e.openBlock(), e.createElementBlock("span", la, [e.createTextVNode(e.toDisplayString((Ee = i.value) == null ? void 0 : Ee.textCleared), 1)])), [
                    [e.unref(a.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)])), [
                    [e.unref(a.vPhwSetting)]
                ])])), [
                    [e.unref(a.vPhwSetting)]
                ])])), [
                    [e.unref(a.vPhwSetting)]
                ])])), [
                    [e.unref(a.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)])), [
                    [e.unref(a.vPhwSetting)]
                ])
            }
        }
    }), [
        ["__cssModules", {
            $style: {
                "footer-language-selector-listbox": "_footer-language-selector-listbox_1661c_3",
                "footer-dropdown-list-button": "_footer-dropdown-list-button_1661c_9",
                "modal-header": "_modal-header_1661c_21",
                "c-language-selector": "_c-language-selector_1661c_27",
                "btn-icon": "_btn-icon_1661c_51",
                "custom-modal-header": "_custom-modal-header_1661c_59",
                "dropdown-box": "_dropdown-box_1661c_69",
                "language-selector-listbox": "_language-selector-listbox_1661c_115",
                country: "_country_1661c_115",
                "dropdown-list-button": "_dropdown-list-button_1661c_157",
                active: "_active_1661c_165",
                "input-group": "_input-group_1661c_173",
                "modal-content-image": "_modal-content-image_1661c_179",
                "language-selctor-dropdown-box": "_language-selctor-dropdown-box_1661c_219",
                "modal-footer": "_modal-footer_1661c_245",
                "lang-modal-list": "_lang-modal-list_1661c_255"
            }
        }]
    ])
});