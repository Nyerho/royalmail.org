(function(e, t) {
    typeof exports == "object" && typeof module < "u" ? module.exports = t(require("vue"), require("ph-common/ph-common")) : typeof define == "function" && define.amd ? define(["vue", "ph-common/ph-common"], t) : (e = typeof globalThis < "u" ? globalThis : e || self, e.PhwCandidateloginDefaultHeaderDefaultV1 = t(e.Vue, e.phCommon))
})(this, function(e, t) {
    "use strict";
    var D1 = Object.defineProperty;
    var b1 = (e, t, Le) => t in e ? D1(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: Le
    }) : e[t] = Le;
    var md = (e, t, Le) => (b1(e, typeof t != "symbol" ? t + "" : t, Le), Le);

    function Le(n, a, d, s, w, l, B) {
        const F = "validateJwtToken",
            U = "mergedProfileV2",
            A = "candidateLogin",
            m = "candidateRegister",
            x = "oneTimeLoginLink",
            g = "candidateResetPassword",
            u = "candidateResetPasswordLink",
            o = "validateOtp",
            N = "eagerLoadFyfSession",
            b = "getPiiConsentConfig",
            z = "getPrivacyConsentsConfig",
            G = "getCanvasMasterBundle",
            j = "signIn",
            v = "signUp",
            P = "signIn",
            de = "forgotPassword",
            re = "resetPasswordLink",
            Z = "resetPassword",
            I = "EMAIL_PASSWORD",
            M = "LOGIN_LINK",
            q = "jobCartUpdatedCount",
            T = "ph:candidateLoggedinEvent",
            _e = "ph:bot:removeProfile",
            oe = "ph:site:removeProfile",
            Ce = "candidateProfileUpdated",
            k = "getUserProfileData",
            V = "profile_signIn_click",
            O = "profile_signUp_click",
            J = "login_link_click",
            Y = "resend_login_link_click",
            ee = "reset_password_link_click",
            le = "reset_password_click",
            Ed = "ph:ex:jobCartUpdatedCount",
            Ie = "openCreateProfilePopup",
            H = ".ph-a11y-popup-start-focus",
            f = "navItems",
            pt = "fyf",
            ce = "apply",
            ht = "fyf_container",
            Bd = "resumeSearch",
            At = "save_job_widget",
            Ot = "save_toast",
            ud = "visitor",
            Dd = "#phw-s-time-out-timer",
            gt = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            Rt = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
            Ft = /^((?!\.)(?!.*\.\.)(?!.*\.$)([A-Za-z0-9._]*[A-Za-z0-9_])|(".+"))@((\[[0-9]{1,3}(\.[0-9]{1,3}){3}])|(([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}))$/,
            X = {
                upperCase: {
                    regex: /(.*[A-Z].*)/,
                    literal: "",
                    hasError: !1
                },
                lowerCase: {
                    regex: /(.*[a-z].*)/,
                    literal: "",
                    hasError: !1
                },
                numeric: {
                    regex: /(.*\d.*)/,
                    literal: "",
                    hasError: !1
                },
                passwordLength: {
                    regex: /(.{8,})/,
                    literal: "",
                    hasError: !1
                }
            },
            Me = {
                ESC: 27,
                TAB: 9,
                RETURN: 13,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40,
                BACKSPACE: 8
            },
            ne = {
                fyf_signIn: "fyfSignInHeading",
                fyf_signUp: "fyfSignUpHeading",
                apply_signIn: "applySignInHeading",
                apply_signUp: "applySignUpHeading",
                visitor_saved_jobs_signUp: "savedJobsSignUpHeading",
                visitor_saved_jobs_signIn: "savedJobsSignInHeading"
            };
        class Xe {
            constructor() {
                md(this, "email", {
                    error: !1,
                    code: "",
                    srHidden: !1
                });
                md(this, "password", {
                    error: !1,
                    code: "",
                    srHidden: !1
                });
                md(this, "server", {
                    error: !1,
                    code: ""
                })
            }
        }
        const Ut = e.ref("myprofile");
        e.ref(!1);
        const Qe = e.ref(!1),
            ve = e.ref(!1),
            $e = e.ref(!1),
            et = e.ref(!1),
            R = e.ref(!1),
            Ee = e.ref(!0),
            y = e.ref(new Xe),
            L = e.ref({
                email: "",
                password: ""
            }),
            fe = e.ref(l.flowType),
            pe = e.ref(!1),
            p = e.ref(!1),
            h = e.ref(!1),
            Be = e.ref(!1),
            he = e.ref(!1),
            we = e.ref(!1),
            ae = e.ref(!1),
            ke = e.ref(!1),
            tt = e.ref(!1),
            ye = e.ref(!1),
            Gt = e.ref(!1),
            me = e.ref(!1),
            D = e.ref({}),
            ue = e.ref(j),
            ie = e.ref(!1),
            Ae = e.ref(!1),
            Oe = e.ref({
                profile: {}
            }),
            K = e.ref({}),
            Re = e.ref({}),
            dt = e.ref(!1),
            wt = e.ref(!1),
            at = e.ref(!1),
            nt = e.ref(!1),
            kt = e.ref(!1),
            De = e.ref(!1),
            be = e.ref(!0),
            Ht = 3e4,
            zt = 5e3,
            Q = e.ref({
                rpToken: "",
                newPassword: "",
                password: ""
            });
        let Se = !1;
        const Kt = {},
            W = e.ref(!1);
        let it = !1,
            Fe = "",
            Ue = !1,
            Ge = "",
            He = !0,
            yt = "",
            te, mt = !1;
        const St = e.ref(!1),
            rt = e.ref(I),
            Ne = e.ref(!0),
            Wt = () => {
                l && l.widgetContext && l.widgetContext.triggerPopup && Je(l.flowType), Jt(), Yt(), yt = t.phAppStore.getSegmentedUserState, ye.value = !0, Pt(), t.getSiteSettings("consentPrefill") === !1 && (He = !1), wt.value = t.getSiteSettings("preferredName"), mt = t.getSiteSettings("oneTimeLoginLink"), mt && (rt.value = M), fe.value = fe.value || v, $t().then(() => {
                    qt(), Zt(), l.widgetContext = l.widgetContext || {}, l.widgetContext, me.value
                }), kd(), Fe = fe.value, localStorage.getItem("_li") && (Ee.value = !1), document.addEventListener("mouseup", Nt, !0), document.addEventListener("keyup", Nt, !0), Fe === Z && pd()
            };

        function jt() {
            const i = t.getSiteSettings(f) || {};
            i.candidateHome, !i.candidateHome && Qt()
        }
        const qt = () => {
                if (l.widgetContext && l.widgetContext.context && l.widgetContext.context.length && te) {
                    const {
                        context: i
                    } = l.widgetContext;
                    switch (i) {
                        case pt:
                        case ht:
                            te[ne.fyf_signIn], te[ne.fyf_signUp];
                            break;
                        case ce:
                            te[ne.apply_signIn], te[ne.apply_signUp];
                            break
                    }
                }
            },
            Zt = () => {
                (!l.widgetContext || l.widgetContext && l.widgetContext.context !== ce) && (yt === ud && !Ue && te ? (te[ne.visitor_saved_jobs_signIn], te[ne.visitor_saved_jobs_signUp]) : Ue && te && (te[ne.fyf_signIn], te[ne.fyf_signUp]))
            },
            Jt = () => {
                t.getDDO(b, {}).then(i => {
                    if (i && i.status && i.status === "success" && i.data) window.phApp && window.phApp.ddo && (window.phApp.ddo[b] = i), D.value = i.data, ze();
                    else {
                        const r = t.getSiteSettings("piiConsentConfig");
                        r && (D.value = JSON.parse(JSON.stringify(r)), ze())
                    }
                })
            },
            Yt = () => {
                t.getDDO(z, {}).then(i => {
                    if (i && i.status && i.status === "success" && i.data)
                        if (window.phApp && window.phApp.ddo && (window.phApp.ddo[z] = i), i.data[0] && i.data[0].isPrivacyConsent) D.value = [...i.data, ...D.value], ze();
                        else {
                            const r = i.data.map(c => c.type);
                            t.getDDO(G, {
                                globalTexts: r
                            }).then(c => {
                                const E = (c == null ? void 0 : c.data) || {};
                                i.data.forEach($ => {
                                    $.isPrivacyConsent = !0, $.consentText = E[$.type] || ""
                                }), D.value = [...i.data, ...D.value], ze()
                            })
                        }
                })
            },
            ze = () => {
                D.value && D.value.length && (K.value = {}, K.value.consentData = D.value, rt.value === M ? K.value.submit = ut : K.value.submit = Dt, K.value.submitFocus = n.value.querySelector(".submit"), Re.value.consentData = D.value, Re.value.checkConsentError = ot, Re.value.handleError = Xt)
            },
            Xt = () => {
                ie.value && (K.value && K.value.triggerPopup && K.value.triggerPopup(!0), t.trackWidgetClick(n, "pii-popup-trigger", {}), st())
            },
            Qt = () => {
                if (n.value && n.value instanceof HTMLElement && (n.value.style && (n.value.style.display = "none"), l.parentElemRemove)) {
                    let i = n.value.querySelector(l.parentElemRemove);
                    i || (i = n.value.closest("li")), i && (i.style.display = "none")
                }
            },
            se = () => {
                dt.value = !1
            },
            Ke = () => {
                dt.value = !0
            },
            We = i => {
                y.value.server.error = !0, y.value.server.code = i
            },
            vt = i => {
                pe.value = i ? Ft.test(L.value.email || "") : gt.test(L.value.email || "")
            },
            ed = i => {
                const r = document.querySelector('[id="createPassword"]');
                r && r.removeAttribute("aria-describedby"), i = i || L.value.password, p.value = Rt.test(i), y.value.password.error ? (Pe('[id="errorCreatePasswordSrOnly"]'), r && r.setAttribute("aria-describedby", "errorCreatePasswordSrOnly")) : r && r.setAttribute("aria-describedby", "errorCreatePassword")
            },
            Te = (i, r) => {
                y.value.email.error = !1, i ? y.value.email.srHidden = !0 : y.value.email.srHidden = !1;
                let c = !1;
                return L.value.email ? (r ? Ft.test(L.value.email) : gt.test(L.value.email)) ? (y.value.email.code = void 0, c = !1) : (y.value.email.code = "E102", c = !0) : (y.value.email.code = "E101", c = !0), y.value.email.error = c, c === !0 && !i && Pe('[id="errorCreateEmail"]'), c
            },
            td = () => {
                Be.value = !Be.value, h.value = !0, setTimeout(() => {
                    h.value = !1
                }, 50)
            },
            je = (i, r, c, E) => {
                i = i || L.value.password, y.value.password.error = !1, c ? y.value.password.srHidden = !0 : y.value.password.srHidden = !1;
                let $ = !1;
                return r ? i.length ? (y.value.password.code = void 0, $ = !1) : (y.value.password.code = "E101", $ = !0) : Rt.test(i) ? (y.value.password.code = void 0, Object.keys(X).forEach(_ => {
                    X[_].hasError = !1
                }), $ = !1) : (Object.keys(X).forEach(_ => {
                    X[_].regex.test(i) ? X[_].hasError = !1 : X[_].hasError = !0
                }), $ = !0), $ === !0 && !r && !E && (Pe('[id="errorCreatePasswordSrOnly"]'), he.value = !he.value, setTimeout(() => {
                    he.value = !he.value
                }, 1e3)), setTimeout(() => {
                    y.value.password.error = $
                }, 0), $
            },
            Pt = () => {
                ke.value = t.getSiteSettings("privacyDataConsentCheckBox")
            },
            dd = () => {
                we.value && (ae.value = !1)
            },
            qe = () => {
                y.value.server.error = !1, y.value.server.code = ""
            },
            C = i => {
                i && i.focus && i.focus()
            },
            xe = () => {
                setTimeout(() => {
                    if (y.value.email.error) C(a.value);
                    else if (y.value.password.error) {
                        C(d.value);
                        const i = document.querySelector('[id="createPassword"]');
                        i && i.setAttribute("aria-describedby", "errorCreatePasswordSrOnly"), C(d.value)
                    }
                }, 0)
            },
            ad = () => {
                it = !1, D.value && D.value.length && D.value.forEach(i => {
                    !i.optional && !i.isChecked && (it = !0)
                }), it || (ie.value = !1)
            },
            st = i => {
                D.value && D.value.length >= 3 && (Ke(), se(), ad(), setTimeout(() => {
                    C(".back-btn")
                }, 50))
            },
            ot = () => (ie.value = !1, D.value && D.value.length > 0 && D.value.forEach(i => {
                !i.optional && !i.isChecked && (ie.value = !0)
            }), ie.value),
            _t = () => je(Q.value.newPassword),
            nd = () => {
                if (W.value = !Se && _t(), qe(), !W.value && !Se) {
                    Q.value.rpToken = Q.value.rpToken || t.queryParams.getQueryParam("rp");
                    const i = {
                        rpToken: Q.value.rpToken,
                        newPassword: Q.value.newPassword
                    };
                    t.getDDO(g, i).then(r => {
                        r && r.status === "success" ? (t.trackWidgetClick(n, le, {}), ge(), Q.value.password = "", ft(P)) : r && r.status === "failure" && r.code === 403 ? (Q.value.password = "", Se = !0) : We("E500")
                    })
                } else C(d.value)
            },
            Et = () => {
                const i = {
                    flowType: "candidateProfile"
                };
                t.getDDO(N, i).then(r => {})
            },
            lt = () => {
                t.localStore.setItem("_li", "1")
            },
            id = i => {
                t.publishEvent(T, i), t.raiseCustomEvent(T, i), t.publishEvent(q, {})
            },
            ct = (i, r) => {
                t.getDDO(U, {}).then(c => {
                    var E;
                    if (c && Object.keys(c).length && c.status === "success") {
                        if (r ? (Ge = c.email, Ge && (L.value.email = Ge)) : (Oe.value.profile = c || {}, t.publishEvent("emailLoggedIn", (E = c == null ? void 0 : c.data) == null ? void 0 : E.email)), i) {
                            id(c);
                            const $ = {
                                context: "candidateProfile"
                            };
                            l.widgetContext = l.widgetContext || {
                                context: "header"
                            }, $.widgetContext = l.widgetContext.context, t.publishEvent(k, $)
                        }
                        D.value && D.value.length && He && D.value.forEach($ => {
                            $.isPrivacyConsent ? c && c.consentMap && c.consentMap[$.type] && c.consentMap[$.type].status === "GRANTED" && ($.isChecked = !0) : c && c[$.type] && ($.isChecked = !0)
                        })
                    } else me.value = !1;
                    se()
                }).catch(c => {
                    se()
                })
            },
            ge = () => {
                y.value = new Xe, Object.keys(X).length && Object.keys(X).forEach(i => {
                    X[i] && (X[i].hasError = !1)
                })
            },
            $t = i => (Ke(), t.getDDO(F, {}).then(r => {
                var c, E, $, _;
                if (r && r.data) {
                    if (me.value = r.data.isValidToken && !r.data.isAnonymous && !l.expiredStatusPage, r.data.isSocialLogin && lt(), ((c = r == null ? void 0 : r.data) == null ? void 0 : c.isSiteLogin) || ((E = r == null ? void 0 : r.data) == null ? void 0 : E.isSocialLogin)) {
                        const Ve = (($ = r == null ? void 0 : r.data) == null ? void 0 : $.isSiteLogin) || !1,
                            yd = ((_ = r == null ? void 0 : r.data) == null ? void 0 : _.isSocialLogin) || !1;
                        t.publishEvent("checkLoginStatus", {
                            isSiteloggedIn: Ve,
                            isSocialLoggedin: yd
                        })
                    }
                    me.value ? (Ue = !0, ct(i || !1, !1)) : r.data.isAnonymous ? (Ue = !0, ct(i || !1, !0)) : se()
                } else se();
                return kt.value = !0, !0
            }, r => {
                se()
            })),
            rd = () => {
                tt.value = !1, t.dialogModal.closeDialogPopup()
            },
            Ze = i => {
                !i && rd(), L.value.password = "", L.value.email = "", Q.value.newPassword = "", ue.value = j, fe.value = Fe, pe.value = !1, p.value = !1, Be.value = !1, ae.value = !1, ie.value = !1, et.value = !1, Qe.value = !1, Ne.value = !0, ge(), l.widgetContext && l.widgetContext.context && (l.widgetContext.context === ht || l.widgetContext.context === Bd || l.widgetContext.context === At || l.widgetContext.context === Ot) && l.widgetContext.closePopup && l.widgetContext.closePopup(void 0, !0)
            },
            Pe = i => {
                const r = t.dialogModal.fetchElem(n.value, i);
                r && (r.setAttribute("aria-live", "assertive"), r.setAttribute("aria-atomic", "true"), setTimeout(() => {
                    r.removeAttribute("aria-live"), r.removeAttribute("aria-atomic")
                }, 100))
            },
            Bt = (i, r, c) => {
                const E = t.dialogModal.fetchElem(n.value, c),
                    $ = t.dialogModal.fetchElem(n.value, i),
                    _ = n.value.querySelector(r);
                t.dialogModal.fetchElem(n.value, Dd), t.dialogModal.replaceModal(E, _, $), $e.value = !1, Ne.value = !1
            },
            sd = () => {
                const i = {
                    email: L.value.email,
                    isSystemDefaultPage: !0,
                    metaData: {}
                };
                D.value.length && D.value.forEach(r => {
                    r.isPrivacyConsent ? (i.metaData.consentMap || (i.metaData.consentMap = {}), r.type && (r.isChecked ? i.metaData.consentMap[r.type] = {
                        status: "GRANTED",
                        consentDate: new Date().toISOString().split(".")[0] + "Z"
                    } : r.optional && (i.metaData.consentMap[r.type] = {
                        status: "UNKNOWN",
                        consentDate: new Date().toISOString().split(".")[0] + "Z"
                    }))) : r.type && (i.metaData[r.type] = !!r.isChecked)
                }), $e.value = !0, t.getDDO(x, i).then(r => {
                    var c;
                    if (r && r.status === "success") {
                        const E = {
                            context: l.widgetContext || t.phAppStore.getPageName
                        };
                        t.trackWidgetClick(n, Y, E), ve.value = !0, R.value = !0, $e.value = !1, De.value = !0, setTimeout(() => {
                            C(s.value), be.value = !1
                        }, 200), setTimeout(() => {
                            De.value = !1, be.value = !0;
                            const $ = document.querySelector(".phw-s-resend-btn");
                            $ instanceof HTMLElement && $.focus()
                        }, zt)
                    } else R.value = !1, ve.value = !0, $e.value = !1, Lt((c = B.value) == null ? void 0 : c.resendSuccessText)
                })
            },
            ut = i => {
                ae.value = !1;
                const r = Te(!0);
                W.value = r;
                const c = l.widgetContext && l.widgetContext.context || "";
                ot(), setTimeout(() => {
                    if (W.value) {
                        if (r && Pe('[id="errorCreateEmail"]'), xe(), ke.value && !we.value) {
                            ae.value = !0;
                            return
                        }
                        return
                    }
                    if (qe(), ie.value && !W.value) {
                        K.value && K.value.triggerPopup && K.value.triggerPopup(!0), st();
                        return
                    }
                    if (W.value) xe();
                    else {
                        if (bt(!0), $e.value = !0, ke.value && !we.value) {
                            ae.value = !0;
                            return
                        }
                        const E = {
                            email: L.value.email,
                            isSystemDefaultPage: !0,
                            metaData: {}
                        };
                        !ye.value && (E.unTrustedDevice = !0), c === ce && t.trackWidgetClick(n, "ch_signin_trigger_apply_ty", {}), D.value.length && D.value.forEach($ => {
                            $.isPrivacyConsent ? (E.metaData.consentMap || (E.metaData.consentMap = {}), $.type && ($.isChecked ? E.metaData.consentMap[$.type] = {
                                status: "GRANTED",
                                consentDate: new Date().toISOString().split(".")[0] + "Z"
                            } : $.optional && (E.metaData.consentMap[$.type] = {
                                status: "UNKNOWN",
                                consentDate: new Date().toISOString().split(".")[0] + "Z"
                            }))) : $.type && (E.metaData[$.type] = !!$.isChecked)
                        }), t.getDDO(x, E).then($ => {
                            if ($ && $.status === "success") {
                                Qe.value = !0, ve.value = !0, et.value = !0, R.value = !0, t.publishEvent("checkOTLSent", {
                                    isOneTimeLoginLinkSent: !0
                                });
                                const _ = {
                                    context: l.widgetContext || t.phAppStore.getPageName
                                };
                                t.trackWidgetClick(n, J, _), $e.value = !1, i ? e.nextTick(() => {
                                    Bt(".ph-a11y-email-triggred-close-btn", ".phw-s-login-link", ".phw-s-is-email-trigred")
                                }) : (Ne.value = !1, e.nextTick(() => {
                                    const Ve = n.value.querySelector(".phw-s-focus-success-heading");
                                    C(Ve)
                                }))
                            } else Qe.value = !0, $e.value = !1, et.value = !0, i ? e.nextTick(() => {
                                Bt(".ph-a11y-email-triggred-close-btn", ".phw-s-login-link", ".phw-s-is-email-trigred")
                            }) : (Ne.value = !1, e.nextTick(() => {
                                const _ = n.value.querySelector(".phw-s-focus-failure-heading");
                                C(_)
                            }))
                        })
                    }
                }, 150)
            },
            Dt = () => {
                ae.value = !1;
                const i = Te(!0, !0),
                    r = je(L.value.password, !1, i, !0);
                W.value = i || r;
                const c = l.widgetContext && l.widgetContext.context || "";
                ot(), setTimeout(() => {
                    var E;
                    if (W.value) {
                        if (i ? Pe('[id="errorCreateEmail"]') : r && (he.value = !he.value, Pe('[id="errorCreatePasswordSrOnly"]')), xe(), ke.value && !we.value) {
                            ae.value = !0;
                            return
                        }
                        return
                    }
                    if (qe(), ie.value && !W.value) {
                        K.value && K.value.triggerPopup && K.value.triggerPopup(!0), st();
                        return
                    }
                    if (W.value) xe();
                    else {
                        if (bt(!0), ke.value && !we.value) {
                            ae.value = !0;
                            return
                        }
                        const $ = {
                            email: L.value.email,
                            password: L.value.password
                        };
                        !ye.value && ($.unTrustedDevice = !0), c === ce && t.trackWidgetClick(n, "ch_signin_trigger_apply_ty", {}), $.profile = $.profile || {}, D.value && ((E = D.value) == null || E.forEach(_ => {
                            _.isPrivacyConsent ? ($.profile.consentMap || ($.profile.consentMap = {}), _.type && (_.isChecked ? $.profile.consentMap[_.type] = {
                                status: "GRANTED",
                                consentDate: new Date().toISOString().split(".")[0] + "Z"
                            } : _.optional && ($.profile.consentMap[_.type] = {
                                status: "UNKNOWN",
                                consentDate: new Date().toISOString().split(".")[0] + "Z"
                            }))) : _.type && ($.profile[_.type] = !!_.isChecked)
                        })), t.getDDO(m, $).then(_ => {
                            if (_ && _.status === "success" && _.code === 200) {
                                setTimeout(() => {
                                    at.value = !0, setTimeout(() => {
                                        at.value = !1
                                    }, 2e3)
                                }, 1e3), Et();
                                const Ve = {
                                    context: l.widgetContext || t.phAppStore.getPageName
                                };
                                t.trackWidgetClick(n, O, Ve), Ze(), $t(!0), ge(), lt(), c === ce && t.trackWidgetClick(n, "ch_signup_apply_ty", {})
                            } else _ && _.status === "failure" && _.code === 405 && _.data ? (pe.value = !1, y.value.email.error = !0, y.value.email.code = "E103", y.value.email.socialProvider = _.data.socialProvider, C(a.value)) : _ && _.status === "failure" && _.code === 402 ? (pe.value = !1, y.value.email.error = !0, y.value.email.code = "E104", C(a.value)) : We("E500")
                        })
                    }
                }, 150)
            },
            bt = i => {
                i ? t.trackWidgetClick(n, "pii-consent-submit", {}) : t.trackWidgetClick(n, "pii-consent-done", {}), setTimeout(() => {
                    C(".phw-s-consents-link")
                }, 100)
            },
            Nt = i => {
                const r = od(i, "post-sign-in-action-area");
                r !== void 0 && (Ae.value = r)
            },
            od = (i, r) => {
                let c = i.target,
                    E = !1,
                    $, _;
                if (i.keyCode === Me.RETURN || i.keyCode === Me.TAB || i.keyCode === void 0)
                    for (; c;)
                        if (c = c.parentElement, _ = c && c.classList, _) {
                            if (c === null || !_.contains(r)) E = !0;
                            else if (_.contains(r)) {
                                E = !1;
                                break
                            }
                        } else c || (E = !0);
                return (E || i.keyCode === Me.ESC) && ($ = !1), $
            },
            ld = () => {
                const i = Te(!0),
                    r = je(L.value.password, !0, i);
                W.value = i || r, qe();
                const c = l.widgetContext && l.widgetContext.context || "";
                if (W.value) xe();
                else {
                    const E = {
                        email: L.value.email,
                        password: L.value.password
                    };
                    t.publishEvent("emailCandidate", E.email), !ye.value && (E.unTrustedDevice = !0), c === ce && t.trackWidgetClick(n, "ch_signin_trigger_apply_ty", {}), t.getDDO(A, E).then($ => {
                        if ($ && $.status === "success" && $.code === 200) {
                            setTimeout(() => {
                                nt.value = !0, setTimeout(() => {
                                    nt.value = !1
                                }, 2e3)
                            }, 1e3), Et();
                            const _ = {
                                context: l.widgetContext || t.phAppStore.getPageName
                            };
                            t.trackWidgetClick(n, V, _), Fe === Z ? window.location.href = t.phAppStore.baseUrl : ($t(!0), Ze(), ge()), t.raiseCustomEvent(Ed, {}), lt(), c === ce && t.trackWidgetClick(n, "ch_signin_apply_ty", {})
                        } else $ && $.status === "failure" && $.code === 405 && $.data ? (pe.value = !1, y.value.email.error = !0, y.value.email.code = "E103", y.value.email.socialProvider = $.data.socialProvider, C(a.value)) : $ && $.status === "failure" && $.code === 404 ? (p.value = !1, y.value.password.error = !0, y.value.password.code = "E103", C(d.value)) : $ && $.status === "failure" && $.code === 401 ? (pe.value = !1, y.value.email.error = !0, y.value.email.code = "E105", C(a.value)) : We("E500")
                    })
                }
            },
            ft = (i, r) => {
                ge(), fe.value = i, ue.value = r || j, L.value.password = "", Q.value.newPassword = "", Be.value = !1, p.value = !1, ye.value = !0, ae.value = !1, Object.keys(X).forEach(c => {
                    X[c].hasError = !1
                }), setTimeout(() => {
                    C(a.value)
                }, 250), e.nextTick(() => {
                    window.handleAriaLabelledby(!1)
                })
            },
            cd = () => {
                setTimeout(() => {
                    Tt(!0)
                }, 100)
            },
            $d = () => {
                ge(), Ke(), se(), ue.value = de, setTimeout(() => {
                    C(a.value)
                }, 250)
            },
            Tt = i => {
                if (W.value = Te(!0), W.value) C(a.value);
                else {
                    const r = {
                        email: L.value.email
                    };
                    t.getDDO(u, r).then(c => {
                        c && (c.status === "success" || c.status === 200 || c.status === "failure" && c.code === 401) ? (t.trackWidgetClick(n, ee, {}), ge(), Ke(), se(), ue.value = re, i ? (De.value = !0, setTimeout(() => {
                            C(s.value), be.value = !1
                        }, 200), setTimeout(() => {
                            De.value = !1, be.value = !0
                        }, Ht)) : l && l.widgetContext && l.widgetContext.context && (l.widgetContext.context === pt || l.widgetContext.context === ht) ? e.nextTick(() => {
                            C(w.value)
                        }) : setTimeout(() => {
                            const E = t.dialogModal.fetchElem(n.value, H);
                            C(E)
                        }, 100), Se = !1) : c && c.status === "failure" && c.code === 401 ? (pe.value = !1, y.value.email.error = !0, y.value.email.code = "E105", C(a.value)) : (Lt(B.value.technicalIssueText), We("E500"))
                    })
                }
            },
            fd = () => {
                Ae.value = !Ae.value
            },
            pd = () => {
                Q.value.rpToken = t.queryParams.getQueryParam("rp");
                const i = {
                    rpToken: Q.value.rpToken
                };
                t.getDDO(o, i).then(r => {
                    r && r.status === "success" ? Se = !1 : r && r.status === "failure" && r.code === 403 && (Se = !0, ft(P, de))
                }, r => {})
            },
            xt = i => {
                const r = i && i.detail;
                Oe.value.profile = r || {}, me.value = !0, D.value && D.value.length && He && D.value.forEach(c => {
                    c.isPrivacyConsent ? r && r.consentMap && r.consentMap[c.type] && r.consentMap[c.type].status === "GRANTED" && (c.isChecked = !0) : r && r[c.type] && (c.isChecked = !0)
                })
            },
            hd = i => {
                i.detail.context !== "candidateProfile" && ct(!1, !0)
            },
            Vt = () => {
                Ge = "", L.value.email = "", Oe.value.profile = {}, D.value && D.value.length && He && D.value.forEach(i => {
                    i.isChecked = !1
                })
            },
            Lt = i => {
                if (i) {
                    const r = document.createElement("span");
                    r.setAttribute("class", "phw-visually-hidden"), r.setAttribute("aria-live", "assertive"), r.setAttribute("aria-atomic", "true"), document.body.appendChild(r), setTimeout(() => {
                        r.innerText = i, setTimeout(() => {
                            r.remove()
                        }, 1e3)
                    }, 200)
                }
            },
            gd = i => t.contentStore.getContent(i).then(r => r),
            Je = i => {
                tt.value = !0, fe.value = i, e.nextTick(() => {
                    var E, $;
                    let r;
                    St.value ? r = document.querySelector(".phw-s-go-to-profile") : l.widgetContext && l.widgetContext.closeSelector ? r = l.widgetContext.closeSelector : r = (E = n == null ? void 0 : n.value) == null ? void 0 : E.querySelector(".phw-s-after-close");
                    const c = ($ = n == null ? void 0 : n.value) == null ? void 0 : $.querySelector(".ph-a11y-popup-start-focus");
                    t.dialogModal.openDialogPopup(n == null ? void 0 : n.value, "phw-a11y-modal-area", r, c, wd.bind(this))
                }), setTimeout(() => {
                    C(a.value)
                }, 50)
            },
            wd = () => {
                Ze(!0)
            },
            Ct = () => {
                St.value = !0, Ee.value ? Je("signUp") : Je("signIn")
            },
            kd = () => {
                document.addEventListener(Ce, xt), document.addEventListener(T, xt), document.addEventListener(k, hd), document.addEventListener(oe, Vt), document.addEventListener(_e, Vt), t.subscribeEvent(Ie, Ct), document.addEventListener(Ie, () => {
                    setTimeout(() => {
                        Ct()
                    }, 100)
                })
            };
        return {
            onWidgetLoad: Wt,
            signInModel: L,
            isValidEmail: pe,
            checkEmailValidation: vt,
            ErrorModel: Xe,
            validateEmail: Te,
            errors: y,
            showHidePassword: td,
            isPasswordVisible: Be,
            checkPasswordValidation: ed,
            isValidPassword: p,
            validatePassword: je,
            showPasswordSrOnly: h,
            pwdRegexMap: X,
            isPrivacyDataConsentCheckBoxRequired: Pt,
            privacyConsentReqFlag: ke,
            isPrivacyConsentChecked: dd,
            privacyDataConsent: we,
            piiConsentData: D,
            masterLiteralData: Kt,
            signup: Dt,
            signedIn: ld,
            isLoggedIn: me,
            step: ue,
            staySignIn: ye,
            forgotPassword: $d,
            changeFlowType: ft,
            resendPswrdResetLink: cd,
            sendPswdResetLink: Tt,
            privacyConsentError: ae,
            piiConsentError: ie,
            flowType: fe,
            isHeadingDisabled: Gt,
            isFirstTimeUser: Ee,
            preferredName: wt,
            profileDetails: Oe,
            closePopup: Ze,
            isshowDropDown: Ae,
            showDropdown: fd,
            getContent: gd,
            passwordErrorSrOnly: he,
            resetPasswordModel: Q,
            resetPassword: nd,
            validateNewPassword: _t,
            openPopup: Je,
            isPopupOpen: tt,
            piiConsentContext: K,
            showLoader: dt,
            emailRegex: gt,
            isTokenCallDone: kt,
            checkCandidateHomeEnabled: jt,
            signUpSuccessSr: at,
            signInSuccessSr: nt,
            hasErrors: W,
            isEmailResent: De,
            isResentBtnEnable: be,
            profileUrl: Ut,
            emailSendTried: et,
            sendOneTimeLoginLink: ut,
            isOneTimeLoginLinkSent: R,
            resendOneTimeLoginLink: sd,
            socialLoginContext: Re,
            showOneTineLoginLinkLoader: $e,
            signUpStep: rt,
            STEP_EMAIL_PASSWORD: I,
            STEP_LOGIN_LINK: M,
            isEmailTriggeredByUser: Qe,
            isEmailTriggeredSuccessfully: ve,
            beforeEmailTrigred: Ne
        }
    }
    const ga = "csrfToken",
        wa = {
            FACEBOOK: "facebook",
            MICROSOFT: "microsoft",
            LINKEDIN: "linkedIn",
            GOOGLE: "google",
            LOGIN: "google-signin"
        },
        ka = () => {
            let {
                locale: n
            } = t.phAppStore;
            return n = n.split("_"), n = `/${n[1]}/${n[0]}/`, n
        },
        ya = (n, a) => {
            const d = wa;
            let s = `${n.loginUrl}?response_type=${n.response_type}&`;
            switch (a) {
                case d.MICROSOFT:
                case d.LINKEDIN:
                    s += `client_id=${encodeURIComponent(n.clientId)}&`;
                    break;
                case d.GOOGLE:
                case d.LOGIN:
                    s += `client_id=${encodeURIComponent(n.clientId)}&access_type=offline&approval_prompt=auto&`;
                    break;
                case d.FACEBOOK:
                    s += `client_id=${encodeURIComponent(n.clientId)}&`;
                    break
            }
            return a ? (s += `redirect_uri=${encodeURIComponent(n.redirectUriPath)}`, n.scope && (s += `&scope=${encodeURIComponent(n.scope)}`), n.state && (s += `&state=${encodeURIComponent(n.state)}`), s) : !1
        },
        ma = (n, a, d) => {
            let s = t.queryParams.getQueryParam("qpage") || "";
            s = decodeURIComponent(s);
            let {
                name: w
            } = a;
            const {
                profileValidation: l
            } = a, B = a.redirectUri || window.location.href;
            w && w.toLocaleLowerCase() === "linkedin" && (w = "linkedIn");
            const F = t.getSiteSettings("oauth");
            if (!F || !F[w]) return;
            const U = t.queryParams.getQueryParam("page") || "",
                A = F[w],
                m = ka(),
                {
                    locale: x
                } = t.phAppStore;
            let g = window.location.pathname;
            s || (g += window.location.search);
            const u = {
                page: g,
                protocol: window.location.protocol,
                localePath: m,
                qpage: s,
                pagename: U,
                locale: x,
                siteVariant: n,
                rurl: encodeURIComponent(B)
            };
            if (d && Object.keys(d).length)
                for (const o in d) u.hasOwnProperty(o) || (u[o] = d[o]);
            return l && (u.profileValidation = !0), t.phAppStore.csrfToken && (u[ga] = t.phAppStore.csrfToken), A ? (A.redirectUriPath = t.phAppStore.rootDomain + A.redirectUri, A.state = JSON.stringify(u), ya(A, w)) : !1
        };

    function Sa(n, a) {
        const d = "mergedProfile",
            s = "validateJwtToken",
            w = "getIMLandingPage",
            l = "socialConnectOptions",
            B = "createConsentProfile",
            F = "social-logout",
            U = "secure-url-click",
            A = "social_login_click",
            m = e.ref(a),
            x = {},
            g = e.ref(!1),
            u = e.ref(!1),
            o = e.ref(!1),
            N = e.ref(["facebook", "linkedin", "live", "google"]),
            b = e.ref(!1);
        let z = "external",
            G = "";
        e.onBeforeMount(() => {
            v(), z = t.phAppStore.siteType, z === "internal" && I(), P(), m.value.piiconsent && !Object.keys(m.value.piiconsent) && (m.value.piiconsent = m.value.piiconsent || {}), g.value = !1, de(), q(), M(), T(), document.addEventListener(F, () => {}), document.addEventListener(U, k => {
                G = (k.detail && k.detail.data || {}).redirectUri
            }), t.queryParams.getQueryParam("atsRedirectUrl")
        }), e.onMounted(() => {});
        const j = () => {
                b.value = !1
            },
            v = () => {
                b.value = !0
            },
            P = () => {
                o.value = t.getSiteSettings("privacyDataConsentCheckBox"), m.value.profileLoginFlow = m.value.profileLoginFlow || ""
            },
            de = () => {
                t.getDDO(l, {}).then(k => {
                    k && k.status && k.status.toUpperCase() === "SUCCESS" ? (z = m.value.variantType || z, N.value.external = k.data && k.data[z], (k.data && !k.data.external || !k.data.external.length) && k.data[z] && (N.value.external = k.data[z]), (!m.value.fyfStepLandInfo || !m.value.fyfStepLandInfo.socialOptions || !m.value.fyfStepLandInfo.socialOptions.length) && (m.value.fyfStepLandInfo.socialOptions = [], N.value && N.value.external && N.value.external.forEach(V => {
                        m.value.fyfStepLandInfo.socialOptions.push(V.name)
                    })), j(), Z()) : (j(), Z())
                })
            },
            re = () => {
                u.value && (g.value = !1)
            },
            Z = () => {
                setTimeout(() => {
                    var V;
                    const k = (V = n.value) == null ? void 0 : V.querySelector("#social-container");
                    if (k) {
                        const O = [],
                            J = k.children.length;
                        for (let Y = 0; Y < J; Y++) {
                            const ee = k.children[0];
                            O[Y] = ee, k.removeChild(ee)
                        }
                        N.value.internal.forEach(Y => {
                            const ee = O.find(le => le.id === Y.name);
                            ee && k && k.appendChild(ee)
                        })
                    }
                    j()
                }, 250)
            },
            I = () => {
                t.getDDO(w, {}).then(k => {
                    k.stepId
                }, k => {})
            },
            M = () => {
                t.getSiteSettings("oauth")
            },
            q = () => {
                t.getDDO(d, {}).then(k => {
                    k && k.socialAccounts && k.socialAccounts.forEach(V => {
                        x[V.social] = V.status
                    })
                })
            },
            T = () => {
                const k = {};
                t.getDDO(s, k).then(V => {
                    V.data.isValidToken && V.data.isAnonymous
                }, V => {
                    j()
                })
            },
            _e = () => {
                const k = t.getSiteSettings("redirectPage") || [],
                    V = t.getPageName() || "";
                return k && k.includes(V)
            };
        return {
            enabledSocial: N,
            privacyConsentReqFlag: o,
            privacyDataConsent: u,
            privacyConsentError: g,
            showLoader: b,
            propData: m,
            doProfileLogin: k => {
                if (m.value.piiconsent && m.value.piiconsent.consentData && m.value.piiconsent.consentData.length) {
                    if (m.value.piiconsent && m.value.piiconsent.checkConsentError() && m.value.profileLoginFlow === "signUp") {
                        m.value.piiconsent.handleError && m.value.piiconsent.handleError();
                        return
                    }
                } else if (o.value && (g.value = !1, !u.value && m.value.profileLoginFlow === "signUp")) {
                    g.value = !0;
                    return
                }
                const V = {},
                    O = {};
                V.trait213 = k.name, t.trackWidgetClick(n.value, A, V), m.value.redirectPage && m.value.redirectPage.length && (G = "/"), _e() && (G = "/");
                const J = {
                    name: k.name,
                    redirectUri: G || window.location.href
                };
                m.value.fyfStepLandInfo && m.value.fyfStepLandInfo.optIn && (O.optIn = m.value.fyfStepLandInfo.optIn);
                const Y = ma(k.userType, J, O);
                if (m.value.fyfStepLandInfo && m.value.fyfStepLandInfo.context === "fyf" && localStorage.setItem("fyfStepLandInfo", m.value.fyfStepLandInfo), m.value.piiconsent && m.value.piiconsent.consentData && m.value.piiconsent.consentData.length && m.value.profileLoginFlow === "signUp") {
                    const ee = {
                        profile: {}
                    };
                    m.value.piiconsent.consentData.forEach(le => {
                        le.type && (ee.profile[le.type] = !!le.isChecked)
                    }), t.getDDO(B, ee).then(le => {
                        Y && (window.location.href = Y)
                    })
                } else Y && (window.location.href = Y)
            },
            getContent: k => t.contentStore.getContent(k).then(V => V),
            isPrivacySocialConsentChecked: re
        }
    }
    const Pa = {
            class: "phw-widget-ctr phw-widget-empty-ctr",
            "data-ps": "a043fe7b-div-1"
        },
        _a = {
            key: 0,
            class: "show-loader",
            "data-ps": "646a2971-div-2"
        },
        Ea = {
            class: "phw-spinner-border phw-primary",
            role: "status",
            "data-ps": "646a2971-div-3"
        },
        Ba = {
            class: "phw-visually-hidden",
            "data-ps": "646a2971-span-1"
        },
        ua = [e.createTextVNode("Loading...")],
        Da = {
            key: 2,
            class: "social-checkbox-btn-groupset",
            "data-ps": "a043fe7b-div-3"
        },
        ba = {
            class: "social-input-checkbox-label phw-d-flex phw-align-items-center",
            "data-ps": "a043fe7b-label-1"
        },
        Na = ["aria-checked"],
        Ta = {
            class: "checkbox-text phw-g-text-default-dark phw-ml-050",
            "data-ps": "a043fe7b-span-2"
        },
        xa = {
            class: "social-data-consent-link",
            "data-ph-at-id": "data-consent-link",
            target: "_blank",
            "data-ps": "a043fe7b-a-1"
        },
        Va = {
            class: "social-termsLink",
            "data-ph-at-id": "terms-consent-link",
            target: "_blank",
            "data-ps": "a043fe7b-a-2"
        },
        La = {
            "aria-live": "assertive",
            "aria-atomic": "true",
            "data-ps": "a043fe7b-div-4"
        },
        Ca = {
            key: 0,
            class: "social-consent-error-msg phw-d-block phw-text-l",
            "data-ps": "a043fe7b-div-5"
        },
        Ia = {
            class: "social-alert-msg phw-error-color",
            "data-ps": "a043fe7b-span-3"
        },
        Ma = ["role"],
        Aa = ["role"],
        Oa = ["icon-name", "aria-label", "data-ph-at-source", "onClick"],
        Ra = {
            class: "phw-icon-ctr",
            "data-ps": "a043fe7b-span-4"
        },
        Fa = ["href"],
        Ua = e.defineComponent({
            __name: "SocialconnectDefaultDefaultComponent",
            props: {
                mode: {
                    default: ""
                },
                redirectPage: {
                    default: ""
                },
                profileLoginFlow: null,
                piiconsent: {
                    default: "socialLoginContext"
                },
                fyfStepLandInfo: {
                    default: () => ({})
                },
                contentId: null,
                instanceId: null,
                content: null,
                seperatorText: null,
                candidateLogin: {
                    type: Boolean
                },
                fcFyf: {
                    type: Boolean
                },
                expiredStatusPage: {
                    type: Boolean
                }
            },
            setup(n) {
                const a = n,
                    d = e.ref(),
                    s = e.ref({}),
                    {
                        enabledSocial: w,
                        privacyConsentReqFlag: l,
                        privacyDataConsent: B,
                        privacyConsentError: F,
                        showLoader: U,
                        propData: A,
                        doProfileLogin: m,
                        getContent: x,
                        isPrivacySocialConsentChecked: g
                    } = Sa(d, a);
                e.onBeforeMount(() => {
                    a.contentId ? x(a.contentId || "").then(o => {
                        s.value = o
                    }) : s.value = a.content
                }), e.onMounted(() => {
                    t.usePhCommon().init(d.value, s, a.instanceId || "")
                });
                const u = o => {
                    const N = s.value ? s.value[o] : void 0;
                    return N == null ? void 0 : N.ariaLabel
                };
                return (o, N) => {
                    var b, z, G, j, v, P, de, re, Z, I, M, q, T, _e, oe, Ce, k, V;
                    return e.withDirectives((e.openBlock(), e.createElementBlock("div", Pa, [e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        id: "social-container",
                        ref_key: "element",
                        ref: d,
                        class: "social-connect-block phw-text-c",
                        "data-ps": "a043fe7b-div-2"
                    }, [e.unref(U) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", _a, [e.withDirectives((e.openBlock(), e.createElementBlock("div", Ea, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Ba, ua)), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), !a.expiredStatusPage && a.candidateLogin && ((z = (b = e.unref(w)) == null ? void 0 : b.external) == null ? void 0 : z.length) > 0 ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: 1,
                        class: e.normalizeClass([
                            [a.fcFyf ? o.$style["fc-seperator"] : o.$style.seperator], "phw-g-text-default-dark no-scroll phw-text-c"
                        ]),
                        "data-ps": "61f36d81-div-71"
                    }, [e.createTextVNode(e.toDisplayString(a.seperatorText), 1)], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(l) && a.profileLoginFlow == "signUp" && ((j = (G = e.unref(w)) == null ? void 0 : G.external) == null ? void 0 : j.length) > 0 ? e.withDirectives((e.openBlock(), e.createElementBlock("div", Da, [e.withDirectives((e.openBlock(), e.createElementBlock("label", ba, [e.withDirectives(e.createElementVNode("input", {
                        "onUpdate:modelValue": N[0] || (N[0] = O => e.isRef(B) ? B.value = O : null),
                        type: "checkbox",
                        "aria-checked": e.unref(B) ? "true" : "false",
                        role: "checkbox",
                        "data-ph-at-id": "checkbox-button",
                        "aria-label": "I have read and agree to the Privacy Policy and Terms of Use.",
                        "data-ps": "a043fe7b-input-1",
                        onChange: N[1] || (N[1] = O => e.unref(g)())
                    }, null, 40, Na), [
                        [e.vModelCheckbox, e.unref(B)],
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", Ta, [e.createTextVNode(e.toDisplayString((v = s.value) == null ? void 0 : v.privacyPolicyCheckboxText) + " ", 1), e.withDirectives((e.openBlock(), e.createElementBlock("a", xa, [e.createTextVNode(e.toDisplayString((de = (P = s.value) == null ? void 0 : P.privacyPolicy) == null ? void 0 : de.text), 1)])), [
                        [e.unref(t.vPhwSetting)],
                        [e.unref(t.vPhwHref), (Z = (re = s.value) == null ? void 0 : re.privacyPolicy) == null ? void 0 : Z.href]
                    ]), e.createTextVNode(e.toDisplayString((I = s.value) == null ? void 0 : I.privacyPolicyCheckboxSeparatorText) + " ", 1), e.withDirectives((e.openBlock(), e.createElementBlock("a", Va, [e.createTextVNode(e.toDisplayString((q = (M = s.value) == null ? void 0 : M.termsLink) == null ? void 0 : q.text), 1)])), [
                        [e.unref(t.vPhwSetting)],
                        [e.unref(t.vPhwHref), (_e = (T = s.value) == null ? void 0 : T.termsLink) == null ? void 0 : _e.href]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("div", La, [e.unref(F) && e.unref(l) && a.profileLoginFlow == "signUp" && ((Ce = (oe = e.unref(w)) == null ? void 0 : oe.external) == null ? void 0 : Ce.length) > 0 ? e.withDirectives((e.openBlock(), e.createElementBlock("div", Ca, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Ia, [e.createTextVNode(e.toDisplayString((k = s.value) == null ? void 0 : k.privacyPolicyCheckboxErrorText), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("ul", {
                        role: e.unref(A).fyfStepLandInfo.socialOptions.length > 1 ? "list" : "presentation",
                        class: e.normalizeClass(["phw-gird phw-m-0 phw-p-0 phw-d-flex phw-justify-content-center phw-mt-4 phw-mb-5 phw-mt-xl-2 phw-mb-xl-3", o.$style["grid-gap"]]),
                        "data-ps": "a043fe7b-ul-1"
                    }, [(e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList((V = e.unref(w)) == null ? void 0 : V.external, O => {
                        var J;
                        return e.withDirectives((e.openBlock(), e.createElementBlock("li", {
                            key: O.id,
                            role: e.unref(A).fyfStepLandInfo.socialOptions.length > 1 ? "listitem" : void 0,
                            "key-role": "listItemRole",
                            class: e.normalizeClass([o.$style["social-icon-list"], "phw-list-none"]),
                            "data-ps": "a043fe7b-li-1"
                        }, [e.withDirectives((e.openBlock(), e.createElementBlock("a", {
                            href: "javascript:void(0);",
                            role: "button",
                            "icon-name": O.name,
                            class: e.normalizeClass(["phw-d-flex phw-justify-content-center phw-align-items-center", [o.$style["icon-action"], o.$style["icon-" + O.name]]]),
                            "aria-label": u(O.name),
                            "data-ps": "a043fe7b-a-3",
                            "data-ph-at-id": "social-login",
                            "data-ph-at-source": O.name,
                            onClick: Y => e.unref(m)(O)
                        }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Ra, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", {
                            fill: "currentcolor",
                            "aria-hidden": "true",
                            class: e.normalizeClass([o.$style["social-icon"]]),
                            "data-ps": "a043fe7b-svg-1"
                        }, [e.withDirectives(e.createElementVNode("use", {
                            href: "#" + (O.settings && O.settings.icon),
                            "data-ps": "a043fe7b-use-1"
                        }, null, 8, Fa), [
                            [e.unref(t.vPhwSetting)]
                        ])], 2)), [
                            [e.unref(t.vPhwSetting)]
                        ])])), [
                            [e.unref(t.vPhwSetting)]
                        ])], 10, Oa)), [
                            [e.unref(t.vPhwSetting)]
                        ])], 10, Aa)), [
                            [e.vShow, ((J = e.unref(w)) == null ? void 0 : J.external) && (e.unref(A).fyfStepLandInfo.socialOptions && e.unref(A).fyfStepLandInfo.socialOptions.indexOf(O.name) >= 0 || !e.unref(A).fyfStepLandInfo.socialOptions)],
                            [e.unref(t.vPhwSetting)]
                        ])
                    }), 128))], 10, Ma)), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])
                }
            }
        }),
        Ga = {
            "grid-gap": "_grid-gap_menng_3",
            "icon-action": "_icon-action_menng_11",
            "icon-linkedIn": "_icon-linkedIn_menng_27",
            "icon-facebook": "_icon-facebook_menng_35",
            "icon-google": "_icon-google_menng_43",
            "icon-glassdoor": "_icon-glassdoor_menng_51",
            "icon-twitter": "_icon-twitter_menng_59",
            "icon-instagram": "_icon-instagram_menng_67",
            "icon-printrest": "_icon-printrest_menng_75",
            "icon-whatsapp": "_icon-whatsapp_menng_83",
            "icon-telegram": "_icon-telegram_menng_91",
            "social-icon": "_social-icon_menng_99",
            seperator: "_seperator_menng_111",
            "fc-seperator": "_fc-seperator_menng_153"
        },
        Sd = (n, a) => {
            const d = n.__vccOpts || n;
            for (const [s, w] of a) d[s] = w;
            return d
        },
        Ha = Sd(Ua, [
            ["__cssModules", {
                $style: Ga
            }]
        ]);

    function za(n, a) {
        const d = e.ref(!1),
            s = e.ref(!1),
            w = e.ref(!1),
            l = () => {
                s.value = !1;
                const g = n;
                g.widgetContext.consentData && g.widgetContext.consentData.length && g.widgetContext.consentData.forEach(u => {
                    !u.optional && !u.isChecked && (s.value = !0)
                }), !s.value && g.widgetContext.widgetRef && (g.widgetContext.widgetRef.piiConsentError = !1)
            },
            B = (g, u) => {
                var N;
                d.value = !1, g ? t.trackWidgetClick(a.value, "pii-consent-submit", {}) : t.trackWidgetClick(a.value, "pii-consent-done", {}), !u && t.dialogModal.closeDialogPopup();
                const o = (N = a == null ? void 0 : a.value) == null ? void 0 : N.querySelector(".phw-s-after-close-btn");
                e.nextTick(() => {
                    o == null || o.focus()
                })
            },
            F = () => {
                var u;
                B(void 0, !0);
                const g = (u = a == null ? void 0 : a.value) == null ? void 0 : u.querySelector(".phw-s-after-close-btn");
                setTimeout(() => {
                    g == null || g.focus()
                }, 100)
            },
            U = g => {
                d.value = !0, w.value = !!g, l(), e.nextTick(() => {
                    setTimeout(() => {
                        const u = document.querySelector(".phw-s-after-close-btn"),
                            o = document.querySelector(".ph-a11y-popup-start-focus");
                        t.dialogModal.openDialogPopup(a.value, "phw-a11y-modal-area", u, o, F.bind(this), !0)
                    }, 10)
                })
            },
            A = () => {
                n.widgetContext && n.widgetContext.submit && (n.widgetContext.submit(!0), B(!0))
            },
            m = g => t.contentStore.getContent(g).then(u => u),
            x = n;
        return x.widgetContext && (x.widgetContext.triggerPopup = U), {
            getContent: m,
            triggerConsentPopup: U,
            showConsentPopup: d,
            closePopup: B,
            isButtonDisabled: l,
            submitData: w,
            triggerSubmitData: A,
            isDisabled: s
        }
    }
    const Ka = {
            "data-ps": "370f3a32-div-2"
        },
        Wa = {
            class: "phw-visually-hidden required-checkbox",
            "data-ps": "370f3a32-span-1"
        },
        ja = {
            class: "modal-dialog modal fade in show ph-a11y-modal-area phw-posn-relative",
            "aria-describedby": "ph-ally-delete-popup-heading",
            "data-ps": "370f3a32-div-4"
        },
        qa = {
            class: "phw-modal-header phw-flex-row-reverse"
        },
        Za = ["aria-label"],
        Ja = {
            class: "phw-icon-ctr",
            "data-ps": "370f3a32-span-2"
        },
        Ya = {
            fill: "currentcolor",
            "aria-hidden": "true",
            "data-ps": "370f3a32-svg-1"
        },
        Xa = {
            href: "#phw-cns-icon-close",
            "data-ps": "370f3a32-use-1"
        },
        Qa = {
            "ally-label-heading": "",
            class: "phw-text-c",
            "data-ph-at-id": "consent-text",
            "data-ps": "370f3a32-h3-1"
        },
        va = {
            key: 0,
            "data-tag-type": "p",
            class: "consent-description pii-consent-section phw-g-p-default-secondary phw-mt-2",
            "data-ph-at-id": "consent-description",
            "data-ps": "370f3a32-div-8"
        },
        en = ["data-ph-at-count"],
        tn = ["data-ph-at-index"],
        dn = ["id", "onUpdate:modelValue", "aria-required"],
        an = ["for"],
        nn = {
            "data-ps": "370f3a32-span-3"
        },
        rn = [e.createTextVNode("*")],
        sn = ["id", "innerHTML"],
        on = {
            class: "phw-text-c phw-mt-3",
            "data-ph-component-name": "submit-button",
            "data-ps": "370f3a32-div-6"
        },
        ln = ["disabled"],
        cn = Sd(e.defineComponent({
            __name: "ConsentPopupDefaultDefaultComponent",
            props: {
                instanceId: null,
                contentId: null,
                theme: null,
                widgetContext: null,
                content: null,
                signUpStep: null
            },
            setup(n) {
                const a = n,
                    d = e.ref(null),
                    s = e.ref({}),
                    {
                        getContent: w,
                        triggerConsentPopup: l,
                        showConsentPopup: B,
                        closePopup: F,
                        isButtonDisabled: U,
                        submitData: A,
                        isDisabled: m,
                        triggerSubmitData: x
                    } = za(a, d);
                return e.onMounted(() => {
                    t.usePhCommon().init(d.value, s, a.instanceId)
                }), e.onBeforeMount(() => {
                    a.contentId ? w(a.contentId || "").then(g => {
                        s.value = g
                    }) : s.value = a.content
                }), (g, u) => {
                    var o, N, b, z, G, j, v, P, de, re, Z, I;
                    return e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        ref_key: "element",
                        ref: d,
                        class: "phw-widget-ctr phw-widget-empty-ctr",
                        "data-ps": "370f3a32-div-1"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", Ka, [e.withDirectives((e.openBlock(), e.createElementBlock("a", {
                        href: "javascript:void(0)",
                        class: "consents-link ph-a11y-popup-close-focus phw-s-after-close-btn ph-line-height-1_5 phw-d-inline-block",
                        "data-ph-at-id": "consents-link",
                        "data-modal-content-id": "show-consent-popup",
                        "data-ps": "370f3a32-a-1",
                        onClick: u[0] || (u[0] = M => e.unref(l)())
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Wa, [e.createTextVNode(e.toDisplayString((o = s.value) == null ? void 0 : o.requiredText), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.createElementVNode("span", null, e.toDisplayString((N = s.value) == null ? void 0 : N.consentsLinkText), 1)])), [
                        [e.unref(t.vPhwTrack), "pii-popup-link"],
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.unref(B) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: 0,
                        class: e.normalizeClass(["phw-modal phw-a11y-modal-area", g.$style["active-backdrop"]]),
                        "data-ps": "370f3a32-div-3",
                        "aria-modal": "true"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", ja, [e.createElementVNode("div", qa, [e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                        class: "phw-modal-close phw-g-modal-close-button phw-d-flex",
                        "data-ph-at-id": "close-link",
                        "data-ps": "370f3a32-button-1",
                        "aria-label": (b = s.value) == null ? void 0 : b.closeBtnLable,
                        onClick: u[1] || (u[1] = M => e.unref(F)())
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Ja, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", Ya, [e.withDirectives(e.createElementVNode("use", Xa, null, 512), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])], 8, Za)), [
                        [e.unref(t.vPhwSetting)],
                        [e.unref(t.vPhwTrack), "pii-popup-close"]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("h3", Qa, [e.createTextVNode(e.toDisplayString((z = s.value) == null ? void 0 : z.consentHeading), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ])]), (G = s.value) != null && G.consentDescription ? e.withDirectives((e.openBlock(), e.createElementBlock("div", va, [e.createTextVNode(e.toDisplayString((j = s.value) == null ? void 0 : j.consentDescription), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), n.widgetContext.consentData && n.widgetContext.consentData.length ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: 1,
                        role: "list",
                        class: "pii-consent-section phw-mt-3",
                        "data-ph-at-id": "consent-container",
                        "data-ph-at-count": (P = (v = n.widgetContext) == null ? void 0 : v.consentData) == null ? void 0 : P.length,
                        "data-ps": "370f3a32-div-5"
                    }, [(e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(n.widgetContext.consentData, (M, q) => e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: M.id,
                        "data-ph-at-id": "consent-div",
                        "data-ph-at-index": q,
                        role: "listitem",
                        class: "phw-form-check phw-mb-2",
                        "data-ps": "370f3a32-div-7"
                    }, [e.withDirectives(e.createElementVNode("input", {
                        id: "consent" + q,
                        "onUpdate:modelValue": T => M.isChecked = T,
                        type: "checkbox",
                        class: "phw-form-check-group",
                        "data-ph-at-id": "consent-checkbox",
                        "aria-required": M.optional ? !1 : "true",
                        "data-ps": "370f3a32-input-1",
                        onChange: u[2] || (u[2] = T => e.unref(U)())
                    }, null, 40, dn), [
                        [e.vModelCheckbox, M.isChecked],
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("label", {
                        for: "consent" + q,
                        class: "phw-check-label",
                        "data-ps": "370f3a32-label-1"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", nn, [M.optional ? e.createCommentVNode("", !0) : e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                        key: 0,
                        class: e.normalizeClass([g.$style["required-star"], "consent-mandatory"]),
                        "aria-hidden": "true",
                        "data-ps": "370f3a32-span-5"
                    }, rn, 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives(e.createElementVNode("span", {
                        id: "checkbox-label-" + q,
                        class: "phw-g-text-default-dark",
                        "data-ps": "370f3a32-span-4",
                        innerHTML: M.isPrivacyConsent && M.consentText ? M.consentText : s.value && s.value[M.type + "Text"]
                    }, null, 8, sn), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])], 8, an)), [
                        [e.unref(t.vPhwSetting)]
                    ])], 8, tn)), [
                        [e.unref(t.vPhwSetting)]
                    ])), 128))], 8, en)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("div", on, [e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                        class: "phw-btn phw-g-btn-primary",
                        "data-ph-at-id": "consent-done-link",
                        disabled: e.unref(m),
                        "data-ps": "370f3a32-button-2",
                        onClick: u[3] || (u[3] = M => e.unref(A) ? e.unref(x)() : e.unref(F)())
                    }, [e.createTextVNode(e.toDisplayString(e.unref(A) ? (a == null ? void 0 : a.signUpStep) === "loginLink" ? (Z = (re = s.value) == null ? void 0 : re.sendOneTimeLoginLinkText) == null ? void 0 : Z.text : (I = s.value) == null ? void 0 : I.submitText : (de = s.value) == null ? void 0 : de.doneText), 1)], 8, ln)), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(t.vPhwSetting)]
                    ])
                }
            }
        }), [
            ["__cssModules", {
                $style: {
                    "required-star": "_required-star_1nv03_3"
                }
            }]
        ]);

    function Pd(n, a, d, s) {
        if (!n || !a) return "";
        if (typeof n == "object") {
            if (!d) return "";
            const w = a[d];
            let l = n[w];
            if (l || Object.keys(n).forEach(B => {
                    if (/[-*]/g.test(B)) {
                        const F = B.replace("*", "");
                        if (w >= F && (l = n[B]), !l) {
                            const U = B.split("-");
                            U && U.length === 2 && w >= U[0] && w <= U[1] && (l = n[B])
                        }
                    }
                }), !l)
                if (n.default) l = "default";
                else return "";
            return Nd(l, a, s)
        }
        return Nd(n, a, s)
    }

    function Nd(n, a, d) {
        const s = /\{\{\s*(.*?)\s*\}\}/g,
            w = /\[\[\s*(.*?)\s*\]\]/g;
        return !n || typeof n != "string" || (n = n.replace(/&lt;/g, "<"), n = n.replace(/&gt;/g, ">"), n = n.replace(s, (l, B) => a.hasOwnProperty(B) ? a[B] : ""), d && (n = encodeURIComponent(n)), n = n.replace(w, (l, B) => {
            if (!B) return B
        })), n
    }
    const $n = {
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

    function Td(n, a) {
        var d = Array.prototype.slice.call(a);
        return d.push($n), n.apply(this, d)
    }

    function xd(n, a) {
        n = n.split("-"), a = a.split("-");
        for (var d = n[0].split("."), s = a[0].split("."), w = 0; w < 3; w++) {
            var l = Number(d[w]),
                B = Number(s[w]);
            if (l > B) return 1;
            if (B > l) return -1;
            if (!isNaN(l) && isNaN(B)) return 1;
            if (isNaN(l) && !isNaN(B)) return -1
        }
        return n[1] && a[1] ? n[1] > a[1] ? 1 : n[1] < a[1] ? -1 : 0 : !n[1] && a[1] ? 1 : n[1] && !a[1] ? -1 : 0
    }
    var fn = {}.constructor;

    function _d(n) {
        return n != null && n.constructor === fn
    }

    function Ye(n) {
        return Ye = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
            return typeof a
        } : function(a) {
            return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
        }, Ye(n)
    }

    function It(n, a) {
        if (!(n instanceof a)) throw new TypeError("Cannot call a class as a function")
    }

    function Vd(n, a) {
        for (var d = 0; d < a.length; d++) {
            var s = a[d];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(n, pn(s.key), s)
        }
    }

    function Mt(n, a, d) {
        return a && Vd(n.prototype, a), d && Vd(n, d), Object.defineProperty(n, "prototype", {
            writable: !1
        }), n
    }

    function pn(n) {
        var a = hn(n, "string");
        return Ye(a) == "symbol" ? a : a + ""
    }

    function hn(n, a) {
        if (Ye(n) != "object" || !n) return n;
        var d = n[Symbol.toPrimitive];
        if (d !== void 0) {
            var s = d.call(n, a || "default");
            if (Ye(s) != "object") return s;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (a === "string" ? String : Number)(n)
    }
    var gn = "1.2.0",
        wn = "1.7.35",
        Ld = " ext. ",
        kn = /^\d+$/,
        Cd = function() {
            function n(a) {
                It(this, n), Pn(a), this.metadata = a, Ad.call(this, a)
            }
            return Mt(n, [{
                key: "getCountries",
                value: function() {
                    return Object.keys(this.metadata.countries).filter(function(d) {
                        return d !== "001"
                    })
                }
            }, {
                key: "getCountryMetadata",
                value: function(d) {
                    return this.metadata.countries[d]
                }
            }, {
                key: "nonGeographic",
                value: function() {
                    if (!(this.v1 || this.v2 || this.v3)) return this.metadata.nonGeographic || this.metadata.nonGeographical
                }
            }, {
                key: "hasCountry",
                value: function(d) {
                    return this.getCountryMetadata(d) !== void 0
                }
            }, {
                key: "hasCallingCode",
                value: function(d) {
                    if (this.getCountryCodesForCallingCode(d)) return !0;
                    if (this.nonGeographic()) {
                        if (this.nonGeographic()[d]) return !0
                    } else {
                        var s = this.countryCallingCodes()[d];
                        if (s && s.length === 1 && s[0] === "001") return !0
                    }
                }
            }, {
                key: "isNonGeographicCallingCode",
                value: function(d) {
                    return this.nonGeographic() ? !!this.nonGeographic()[d] : !this.getCountryCodesForCallingCode(d)
                }
            }, {
                key: "country",
                value: function(d) {
                    return this.selectNumberingPlan(d)
                }
            }, {
                key: "selectNumberingPlan",
                value: function(d, s) {
                    if (d && kn.test(d) && (s = d, d = null), d && d !== "001") {
                        if (!this.hasCountry(d)) throw new Error("Unknown country: ".concat(d));
                        this.numberingPlan = new Id(this.getCountryMetadata(d), this)
                    } else if (s) {
                        if (!this.hasCallingCode(s)) throw new Error("Unknown calling code: ".concat(s));
                        this.numberingPlan = new Id(this.getNumberingPlanMetadata(s), this)
                    } else this.numberingPlan = void 0;
                    return this
                }
            }, {
                key: "getCountryCodesForCallingCode",
                value: function(d) {
                    var s = this.countryCallingCodes()[d];
                    if (s) return s.length === 1 && s[0].length === 3 ? void 0 : s
                }
            }, {
                key: "getCountryCodeForCallingCode",
                value: function(d) {
                    var s = this.getCountryCodesForCallingCode(d);
                    if (s) return s[0]
                }
            }, {
                key: "getNumberingPlanMetadata",
                value: function(d) {
                    var s = this.getCountryCodeForCallingCode(d);
                    if (s) return this.getCountryMetadata(s);
                    if (this.nonGeographic()) {
                        var w = this.nonGeographic()[d];
                        if (w) return w
                    } else {
                        var l = this.countryCallingCodes()[d];
                        if (l && l.length === 1 && l[0] === "001") return this.metadata.countries["001"]
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
                value: function(d) {
                    return this.numberingPlan.type(d)
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
                value: function(d) {
                    return this.selectNumberingPlan(d)
                }
            }, {
                key: "hasSelectedNumberingPlan",
                value: function() {
                    return this.numberingPlan !== void 0
                }
            }])
        }(),
        Id = function() {
            function n(a, d) {
                It(this, n), this.globalMetadataObject = d, this.metadata = a, Ad.call(this, d.metadata)
            }
            return Mt(n, [{
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
                value: function(d) {
                    return d[this.v1 ? 2 : this.v2 ? 3 : 4]
                }
            }, {
                key: "formats",
                value: function() {
                    var d = this,
                        s = this._getFormats(this.metadata) || this._getFormats(this.getDefaultCountryMetadataForRegion()) || [];
                    return s.map(function(w) {
                        return new yn(w, d)
                    })
                }
            }, {
                key: "nationalPrefix",
                value: function() {
                    return this.metadata[this.v1 ? 3 : this.v2 ? 4 : 5]
                }
            }, {
                key: "_getNationalPrefixFormattingRule",
                value: function(d) {
                    return d[this.v1 ? 4 : this.v2 ? 5 : 6]
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
                value: function(d) {
                    if (this.hasTypes() && Md(this.types(), d)) return new Sn(Md(this.types(), d), this)
                }
            }, {
                key: "ext",
                value: function() {
                    return this.v1 || this.v2 ? Ld : this.metadata[13] || Ld
                }
            }])
        }(),
        yn = function() {
            function n(a, d) {
                It(this, n), this._format = a, this.metadata = d
            }
            return Mt(n, [{
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
                    return !!(this.nationalPrefixFormattingRule() && !mn.test(this.nationalPrefixFormattingRule()))
                }
            }, {
                key: "internationalFormat",
                value: function() {
                    return this._format[5] || this.format()
                }
            }])
        }(),
        mn = /^\(?\$1\)?$/,
        Sn = function() {
            function n(a, d) {
                It(this, n), this.type = a, this.metadata = d
            }
            return Mt(n, [{
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

    function Md(n, a) {
        switch (a) {
            case "FIXED_LINE":
                return n[0];
            case "MOBILE":
                return n[1];
            case "TOLL_FREE":
                return n[2];
            case "PREMIUM_RATE":
                return n[3];
            case "PERSONAL_NUMBER":
                return n[4];
            case "VOICEMAIL":
                return n[5];
            case "UAN":
                return n[6];
            case "PAGER":
                return n[7];
            case "VOIP":
                return n[8];
            case "SHARED_COST":
                return n[9]
        }
    }

    function Pn(n) {
        if (!n) throw new Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");
        if (!_d(n) || !_d(n.countries)) throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(_d(n) ? "an object of shape: { " + Object.keys(n).join(", ") + " }" : "a " + _n(n) + ": " + n, "."))
    }
    var _n = function(a) {
        return Ye(a)
    };

    function En(n, a) {
        if (a = new Cd(a), a.hasCountry(n)) return a.selectNumberingPlan(n).countryCallingCode();
        throw new Error("Unknown country: ".concat(n))
    }

    function Ad(n) {
        var a = n.version;
        typeof a == "number" ? (this.v1 = a === 1, this.v2 = a === 2, this.v3 = a === 3, this.v4 = a === 4) : a ? xd(a, gn) === -1 ? this.v2 = !0 : xd(a, wn) === -1 ? this.v3 = !0 : this.v4 = !0 : this.v1 = !0
    }

    function Bn(n) {
        return new Cd(n).getCountries()
    }

    function un() {
        return Td(Bn, arguments)
    }

    function Od() {
        return Td(En, arguments)
    }
    const Dn = {
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

    function Rd(n) {
        const a = n.toUpperCase().split("").map(d => 127397 + d.charCodeAt(0));
        return String.fromCodePoint(...a)
    }

    function bn() {
        const n = [];
        return un().forEach(d => {
            const s = Dn[d];
            if (s) try {
                const w = Od(d);
                n.push({
                    code: d,
                    name: s,
                    callingCode: `+${w}`,
                    flag: Rd(d)
                })
            } catch {
                console.warn(`Could not get calling code for ${d}: ${s}`)
            } else try {
                const w = Od(d);
                n.push({
                    code: d,
                    name: d,
                    callingCode: `+${w}`,
                    flag: Rd(d)
                })
            } catch {
                console.warn(`Could not get calling code for ${d}`)
            }
        }), n.sort((d, s) => d.code === "US" ? -1 : s.code === "US" ? 1 : d.name.localeCompare(s.name))
    }
    bn();
    const Nn = {
            "data-ps": "61f36d81-div-2"
        },
        Tn = {
            key: 0,
            class: "sign-out-block-mobile",
            "data-ps": "61f36d81-div-3"
        },
        xn = ["data-ph-at-id"],
        Vn = {
            "data-component": "profile-icon",
            class: "phw-icon-ctr phw-mr-050",
            "data-ps": "61f36d81-span-3"
        },
        Ln = {
            fill: "currentcolor",
            "aria-hidden": "true",
            class: "phw-i-sz-3 phw-i-sz-xl-2-5 phw-i-sz-lg-3",
            "data-ps": "61f36d81-svg-2"
        },
        Cn = {
            href: "#phw-cns-icon-user",
            "data-ps": "61f36d81-use-2"
        },
        In = {
            "data-hide-settings": "true",
            class: "phw-d-sm-block phw-d-lg-none",
            "data-ps": "61f36d81-span-4"
        },
        Mn = {
            class: "post-sign-in-action-area",
            "data-ps": "61f36d81-div-5"
        },
        An = ["aria-expanded"],
        On = {
            "data-ps": "61f36d81-span-6",
            "data-show-setting": "true"
        },
        Rn = {
            key: 1,
            class: "phw-icon-ctr phw-mr-050",
            "data-ps": "61f36d81-span-7"
        },
        Fn = {
            fill: "currentcolor",
            "aria-hidden": "true",
            class: "phw-i-sz-3",
            "data-ps": "61f36d81-svg-1"
        },
        Un = {
            href: "#phw-cns-icon-user",
            "data-ps": "61f36d81-use-1"
        },
        Gn = ["title"],
        Hn = {
            class: "phw-visually-hidden",
            "data-ps": "61f36d81-span-78"
        },
        zn = {
            key: 1,
            class: "phw-d-none phw-d-sm-block",
            "data-ps": "61f36d81-div-6"
        },
        Kn = {
            "data-ps": "61f36d81-span-10"
        },
        Wn = {
            key: 1,
            class: "phw-icon-ctr phw-mr-050",
            "data-ps": "61f36d81-span-11"
        },
        jn = {
            fill: "currentcolor",
            "aria-hidden": "true",
            class: "phw-i-sz-3 phw-g-icon-primary",
            "data-ps": "61f36d81-svg-1"
        },
        qn = {
            href: "#phw-cns-icon-user",
            "data-ps": "61f36d81-use-1"
        },
        Zn = ["title"],
        Jn = {
            "data-ps": "61f36d81-li-3",
            role: "listitem",
            class: "phw-list-none"
        },
        Yn = {
            "data-ph-at-id": "personal-account",
            class: "phw-btn phw-g-btn-link phw-d-sm-block phw-width-auto phw-list-none",
            "data-ps": "61f36d81-a-4"
        },
        Xn = {
            "data-ps": "61f36d81-span-13"
        },
        Qn = {
            key: 1,
            class: "phw-icon-ctr phw-mr-050",
            "data-ps": "61f36d81-span-14"
        },
        vn = {
            fill: "currentcolor",
            "aria-hidden": "true",
            class: "phw-i-sz-3 phw-g-icon-primary",
            "data-ps": "61f36d81-svg-1"
        },
        ei = {
            href: "#phw-cns-icon-user",
            "data-ps": "61f36d81-use-1"
        },
        ti = ["title"],
        di = ["title"],
        ai = {
            role: "list",
            class: "user-actions-list",
            "data-ps": "61f36d81-div-11"
        },
        ni = {
            "data-ph-tevent-attr-trait62": "My Profile",
            class: e.normalizeClass(["phw-btn", "phw-g-btn-link"]),
            "data-ps": "61f36d81-a-5",
            "data-ph-at-id": "my-profile-link"
        },
        ii = {
            class: e.normalizeClass(["phw-btn", "phw-g-btn-link"]),
            "data-ph-at-criteria": "logout",
            "data-ph-at-id": "heading-text",
            "data-ps": "61f36d81-a-6"
        },
        ri = {
            key: 2,
            class: "phw-a11y-modal-area phw-default-dialog phw-modal-sm",
            "data-ps": "61f36d81-div-14"
        },
        si = {
            class: "phw-posn-relative phw-modal-sm",
            "data-ps": "61f36d81-div-15"
        },
        oi = ["aria-label"],
        li = {
            class: "phw-icon-ctr",
            "data-ps": "61f36d81-span-16"
        },
        ci = {
            href: "#phw-cns-icon-close",
            "data-ps": "61f36d81-use-3"
        },
        $i = {
            key: 1,
            "data-ps": "61f36d81-div-16"
        },
        fi = {
            key: 0,
            class: "sign-in-area",
            "data-ps": "61f36d81-div-17"
        },
        pi = {
            class: "sign-in-heading-block",
            "data-ph-at-id": "heading-block",
            "data-ps": "61f36d81-div-18"
        },
        hi = {
            key: 0,
            class: "sign-in-heading-block",
            "data-ps": "61f36d81-div-19"
        },
        gi = {
            "ally-label-heading": "",
            class: "phw-mb-5 phw-mb-xl-4 phw-ml-1 phw-mr-1 phw-mr-sm-2 phw-ml-sm-2 phw-mb-sm-3 phw-text-c phw-g-h2-card-title-dark-default",
            "data-ps": "61f36d81-h2-1",
            "data-ph-at-id": "sign-in-popup-heading"
        },
        wi = {
            key: 1,
            class: "phw-text-c phw-mb-4 phw-mb-xl-3",
            "data-ps": "61f36d81-div-20"
        },
        ki = {
            "data-tag-type": "p",
            class: "phw-g-p-large-dark phw-mb-0",
            "data-ps": "61f36d81-p-1"
        },
        yi = {
            key: 2,
            class: "resend-password-heading phw-text-c",
            "data-ps": "61f36d81-div-21"
        },
        mi = {
            "ally-label-heading": "",
            class: "phw-g-h2-card-title-dark-default phw-mb-5 phw-mb-xl-4",
            "data-ps": "61f36d81-h2-3",
            "data-ph-at-id": "reset-password-heading"
        },
        Si = ["innerHTML"],
        Pi = {
            class: "form-group",
            "data-ph-at-id": "sign-in-block",
            "data-ps": "61f36d81-div-23"
        },
        _i = {
            key: 0,
            "data-ph-at-id": "email-block",
            class: "phw-form-group phw-form phw-mb-4 phw-mb-xl-3",
            "data-ps": "61f36d81-div-24"
        },
        Ei = {
            for: "signinEmail",
            class: "phw-d-block",
            "data-ps": "61f36d81-label-1"
        },
        Bi = {
            class: "phw-input-group phw-flex-column",
            "data-ps": "61f36d81-div-25"
        },
        ui = {
            class: "phw-input-group",
            "data-ps": "61f36d81-div-26"
        },
        Di = ["placeholder"],
        bi = {
            key: 0,
            class: "phw-icon-ctr",
            "data-ps": "61f36d81-span-18"
        },
        Ni = {
            href: "#phw-cns-icon-info-circle",
            "data-ps": "61f36d81-use-4"
        },
        Ti = {
            key: 1,
            class: "phw-icon-ctr",
            "data-ps": "61f36d81-span-19"
        },
        xi = {
            href: "#phw-cns-icon-check",
            "data-ps": "61f36d81-use-5"
        },
        Vi = {
            "aria-live": "assertive",
            "aria-atomic": "true",
            "data-ps": "61f36d81-div-27"
        },
        Li = {
            key: 0,
            class: "phw-visually-hidden",
            "data-ps": "61f36d81-span-20"
        },
        Ci = {
            key: 1,
            class: "phw-visually-hidden",
            "data-ps": "61f36d81-span-21"
        },
        Ii = {
            id: "errorCreateEmail",
            "data-ps": "61f36d81-div-28"
        },
        Mi = {
            key: 0,
            class: "email-error-block phw-mt-1",
            "data-ps": "61f36d81-div-77"
        },
        Ai = {
            "aria-live": "assertive",
            "aria-atomic": "true",
            "data-ps": "61f36d81-div-29"
        },
        Oi = {
            key: 0,
            class: "phw-error-color",
            "data-ph-at-id": "invalid-email-error",
            "data-ps": "61f36d81-span-22"
        },
        Ri = {
            key: 1,
            class: "phw-error-color",
            "data-ps": "61f36d81-span-23"
        },
        Fi = {
            key: 0,
            class: "phw-error-color",
            "data-ph-at-id": "invalid-email-error",
            "data-ps": "61f36d81-span-24"
        },
        Ui = {
            key: 1,
            class: "phw-error-color",
            "data-ps": "61f36d81-span-25"
        },
        Gi = {
            key: 2,
            class: "phw-error-color",
            "data-ps": "61f36d81-span-26"
        },
        Hi = {
            key: 3,
            class: "phw-error-color",
            "data-ps": "61f36d81-span-27"
        },
        zi = {
            key: 1,
            class: "phw-form-group phw-form phw-mb-4 phw-mb-xl-3",
            "data-ph-at-id": "password-block",
            "data-ps": "61f36d81-div-30"
        },
        Ki = {
            for: "signinPassword",
            class: "phw-d-block",
            "data-ps": "61f36d81-label-2"
        },
        Wi = {
            class: "phw-input-group phw-flex-column",
            "data-ps": "61f36d81-div-31"
        },
        ji = {
            class: "phw-input-group",
            "data-ps": "61f36d81-div-32"
        },
        qi = ["placeholder", "type"],
        Zi = {
            key: 0,
            class: "phw-icon-ctr",
            "data-ps": "61f36d81-span-28"
        },
        Ji = {
            href: "#phw-cns-icon-info-circle",
            "data-ps": "61f36d81-use-6"
        },
        Yi = ["aria-label"],
        Xi = {
            key: 0,
            class: "phw-icon-ctr phw-i-sz-3 phw-justify-content-center",
            "data-ps": "61f36d81-span-29"
        },
        Qi = {
            href: "#phw-cns-icon-show",
            "data-ps": "61f36d81-use-7"
        },
        vi = {
            href: "#phw-cns-icon-hide",
            "data-ps": "61f36d81-use-8"
        },
        er = {
            id: "errorPassword",
            class: "phw-mt-1",
            "data-ps": "61f36d81-div-34"
        },
        tr = {
            "aria-live": "assertive",
            "aria-atomic": "true",
            "data-ps": "61f36d81-div-35"
        },
        dr = {
            key: 0,
            class: "phw-error-color",
            "data-ps": "61f36d81-span-30"
        },
        ar = {
            key: 1,
            class: "phw-error-color",
            "data-ps": "61f36d81-span-31"
        },
        nr = {
            key: 0,
            class: "phw-error-color",
            "data-ps": "61f36d81-span-32"
        },
        ir = {
            key: 1,
            class: "phw-error-color",
            "data-ps": "61f36d81-span-33"
        },
        rr = {
            key: 2,
            "aria-live": "assertive",
            "aria-atomic": "true",
            "data-ps": "61f36d81-div-36"
        },
        sr = {
            key: 0,
            class: "alert-box",
            "data-ps": "61f36d81-div-37"
        },
        or = {
            key: 0,
            class: "phw-icon-ctr",
            "data-ps": "61f36d81-span-34"
        },
        lr = {
            href: "#phw-cns-icon-info-circle",
            "data-ps": "61f36d81-use-9"
        },
        cr = {
            key: 1,
            class: "alert-msg",
            "data-ps": "61f36d81-span-35"
        },
        $r = {
            class: "form-container",
            "data-ps": "61f36d81-div-39"
        },
        fr = {
            class: "each-option",
            "data-ps": "61f36d81-span-36"
        },
        pr = {
            for: "staySignIn",
            class: "phw-mb-0 phw-d-flex phw-align-items-center",
            "data-ps": "61f36d81-label-3"
        },
        hr = ["aria-checked", "aria-label"],
        gr = {
            class: "phw-ml-1 phw-g-text-default-dark",
            "data-ps": "61f36d81-span-37"
        },
        wr = {
            class: "phw-d-sm-block phw-mt-sm-2",
            "data-ps": "61f36d81-span-38"
        },
        kr = {
            key: 4,
            "data-ps": "61f36d81-div-41"
        },
        yr = {
            key: 0,
            class: "alert-box",
            "data-ps": "61f36d81-div-42"
        },
        mr = {
            key: 0,
            class: "alert-msg",
            "data-ps": "61f36d81-span-39"
        },
        Sr = {
            key: 5,
            class: "form-group-row",
            "data-ps": "61f36d81-div-43"
        },
        Pr = {
            class: "form-container",
            "data-ps": "61f36d81-div-44"
        },
        _r = {
            key: 0,
            class: "phw-mb-4 phw-mb-xl-3 phw-mt-2 phw-text-c",
            "data-ps": "61f36d81-div-45"
        },
        Er = {
            id: "cd-pf-receive-email",
            class: "phw-g-p-default-dark",
            "data-ps": "61f36d81-span-40"
        },
        Br = ["disabled"],
        ur = {
            key: 1,
            class: "phw-text-c",
            "data-ps": "61f36d81-div-46"
        },
        Dr = {
            key: 2,
            class: "sign-up-block",
            "data-ps": "61f36d81-div-47"
        },
        br = {
            class: "show-loader phw-spinner-block",
            "data-ps": "61f36d81-div-90"
        },
        Nr = {
            key: 0,
            "data-ps": "61f36d81-div-91"
        },
        Tr = {
            key: 0,
            "ally-label-heading": "",
            class: "phw-mb-5 phw-mb-xl-4 phw-mb-sm-3 phw-ml-1 phw-mr-1 phw-text-c phw-g-h2-card-title-dark-default phw-mr-sm-2 phw-ml-sm-2",
            "data-ps": "61f36d81-h2-4",
            "data-ph-at-id": "create-acc-heading"
        },
        xr = {
            key: 1,
            "ally-label-heading": "",
            class: "phw-text-l phw-mb-3 phw-mb-xl-3 phw-mb-sm-3 phw-text-c phw-g-text-xx-large-primary",
            "data-ph-at-id": "Login-acc-heading",
            "data-ps": "61f36d81-h2-5"
        },
        Vr = {
            key: 2,
            class: "phw-g-h2-card-title-primary-small phw-d-block phw-mb-5 phw-mb-xl-4 phw-mb-sm-3",
            "data-ps": "61f36d81-span-86"
        },
        Lr = {
            class: "login-form",
            "data-ps": "61f36d81-div-48"
        },
        Cr = {
            class: "form-group",
            "data-ph-at-id": "sign-up-block",
            "data-ps": "61f36d81-div-49"
        },
        Ir = {
            class: "phw-form-group phw-form phw-mb-4 phw-mb-xl-3",
            "data-ph-at-id": "email-block",
            "data-ps": "61f36d81-div-50"
        },
        Mr = {
            for: "createEmail",
            class: "phw-d-block",
            "data-ps": "61f36d81-label-4"
        },
        Ar = {
            class: "phw-input-group phw-flex-column",
            "data-ps": "61f36d81-div-51"
        },
        Or = {
            class: "phw-input-group",
            "data-ps": "61f36d81-div-52"
        },
        Rr = ["placeholder"],
        Fr = {
            key: 0,
            class: "phw-icon-ctr",
            "data-ps": "61f36d81-span-41"
        },
        Ur = {
            href: "#phw-cns-icon-info-circle",
            "data-ps": "61f36d81-use-10"
        },
        Gr = {
            key: 1,
            class: "phw-icon-ctr",
            "data-ps": "61f36d81-span-42"
        },
        Hr = {
            href: "#phw-cns-icon-check",
            "data-ps": "61f36d81-use-11"
        },
        zr = {
            id: "errorCreateEmail",
            class: "",
            "data-ps": "61f36d81-div-53"
        },
        Kr = {
            key: 0,
            class: "error-mail-block phw-mt-1",
            "data-ps": "61f36d81-div-78"
        },
        Wr = {
            key: 0,
            class: "phw-error-color",
            "data-ps": "61f36d81-span-43"
        },
        jr = {
            key: 1,
            class: "phw-error-color",
            "data-ps": "61f36d81-span-44"
        },
        qr = {
            key: 2,
            class: "phw-error-color",
            "data-ps": "61f36d81-span-45"
        },
        Zr = {
            key: 3,
            class: "phw-error-color",
            "data-ps": "61f36d81-span-46"
        },
        Jr = {
            key: 4,
            class: "phw-error-color",
            "data-ps": "61f36d81-span-47"
        },
        Yr = {
            key: 5,
            class: "phw-error-color",
            "data-ph-at-id": "already-exist-email-error",
            "data-ps": "61f36d81-span-48"
        },
        Xr = {
            key: 0,
            class: "phw-form-group phw-form phw-mb-4 phw-mb-xl-3",
            "data-ph-at-id": "password-block",
            "data-ps": "61f36d81-div-54"
        },
        Qr = {
            for: "createPassword",
            class: "phw-d-block",
            "data-ps": "61f36d81-label-5"
        },
        vr = {
            class: "phw-input-group phw-flex-column",
            "data-ps": "61f36d81-div-55"
        },
        es = {
            class: "phw-input-group",
            "data-ps": "61f36d81-div-56"
        },
        ts = ["aria-describedby", "placeholder", "type"],
        ds = {
            key: 0,
            class: "phw-icon-ctr",
            "data-ps": "61f36d81-span-49"
        },
        as = {
            href: "#phw-cns-icon-check",
            "data-ps": "61f36d81-use-12"
        },
        ns = {
            key: 1,
            class: "phw-icon-ctr",
            "data-ps": "61f36d81-span-50"
        },
        is = {
            href: "#phw-cns-icon-info-circle",
            "data-ps": "61f36d81-use-13"
        },
        rs = ["aria-label"],
        ss = {
            key: 0,
            class: "phw-icon-ctr phw-i-sz-3 phw-justify-content-center",
            "data-ps": "61f36d81-span-51"
        },
        os = {
            href: "#phw-cns-icon-show",
            "data-ps": "61f36d81-use-14"
        },
        ls = {
            href: "#phw-cns-icon-hide",
            "data-ps": "61f36d81-use-15"
        },
        cs = {
            "aria-live": "assertive",
            "aria-atomic": "true",
            "data-ps": "61f36d81-div-58"
        },
        $s = {
            key: 0,
            class: "phw-visually-hidden",
            "data-ps": "61f36d81-span-52"
        },
        fs = {
            key: 1,
            class: "phw-visually-hidden",
            "data-ps": "61f36d81-span-53"
        },
        ps = {
            id: "errorCreatePasswordSrOnly",
            class: "form-alert phw-visually-hidden",
            "data-ps": "61f36d81-div-59"
        },
        hs = {
            key: 0,
            role: "text",
            "data-ps": "61f36d81-div-60"
        },
        gs = {
            key: 0,
            "data-ps": "61f36d81-span-54"
        },
        ws = {
            key: 1,
            "data-ps": "61f36d81-span-55"
        },
        ks = {
            key: 1,
            role: "text",
            "data-ps": "61f36d81-div-61"
        },
        ys = {
            key: 0,
            "data-ps": "61f36d81-span-54"
        },
        ms = {
            key: 1,
            "data-ps": "61f36d81-span-55"
        },
        Ss = {
            id: "errorCreatePassword",
            class: "phw-mt-1 phw-g-text-small-secondary",
            role: "text",
            "data-ps": "61f36d81-div-61"
        },
        Ps = {
            key: 0,
            class: "checkbox-btn-groupset phw-mb-2 phw-mt-2",
            "data-ps": "61f36d81-div-62"
        },
        _s = {
            for: "privacyDataConsent",
            class: "phw-mb-0 phw-d-flex phw-align-items-center",
            "data-ps": "61f36d81-label-6"
        },
        Es = ["aria-checked"],
        Bs = {
            class: "phw-g-text-default-dark phw-ml-050",
            "data-ps": "61f36d81-span-64"
        },
        us = {
            class: "privacy-data-consent-link",
            target: "_blank",
            "data-ph-at-id": "privicy-policy-link",
            "data-ps": "61f36d81-a-12"
        },
        Ds = {
            class: "termsLink-data-consent-link",
            target: "_blank",
            "data-ph-at-id": "terms-link",
            "data-ps": "61f36d81-a-13"
        },
        bs = ["data-ph-at-count"],
        Ns = {
            key: 0,
            "data-tag-type": "p",
            class: "consent-heading pii-consent-section phw-g-p-default-secondary",
            "data-ph-at-id": "consent-heading",
            "data-ps": "61f36d81-div-85"
        },
        Ts = ["id", "onUpdate:modelValue", "aria-invalid", "data-ph-at-index", "aria-checked", "aria-required"],
        xs = ["for"],
        Vs = {
            class: "checkbox-text",
            "data-ps": "61f36d81-span-79"
        },
        Ls = ["innerHTML"],
        Cs = {
            key: 0,
            class: "phw-asterisk-color",
            "aria-hidden": "true",
            "data-ps": "61f36d81-span-81"
        },
        Is = [e.createTextVNode("*")],
        Ms = {
            key: 1,
            "data-tag-type": "p",
            class: "consent-description pii-consent-section phw-g-p-default-secondary",
            "data-ph-at-id": "consent-description",
            "data-ps": "61f36d81-div-86"
        },
        As = {
            key: 2,
            class: "phw-s-consents-link phw-mb-2",
            "data-ps": "61f36d81-div-81"
        },
        Os = {
            class: "phw-mb-1",
            "aria-live": "assertive",
            "aria-atomic": "true",
            "data-ps": "61f36d81-div-65"
        },
        Rs = {
            key: 0,
            class: "data-consent-error-msg",
            "data-ps": "61f36d81-div-66"
        },
        Fs = {
            class: "phw-error-color",
            "data-ps": "61f36d81-span-70"
        },
        Us = ["aria-live", "aria-atomic", "role"],
        Gs = {
            key: 0,
            id: "consent-error-dk1signup",
            class: "pii-consent-error phw-error-color phw-d-block phw-mb-2",
            "data-ps": "61f36d81-span-71"
        },
        Hs = {
            class: "form-container",
            "data-ps": "61f36d81-div-69"
        },
        zs = {
            class: "phw-s-is-email-trigred phw-modal-sm",
            "data-ps": "61f36d81-div-93"
        },
        Ks = {
            key: 0,
            class: "phw-mr-1 phw-ml-1 phw-mr-sm-2 phw-ml-sm-2 phw-posn-relative",
            "data-ps": "61f36d81-div-102"
        },
        Ws = ["aria-label"],
        js = {
            class: "phw-icon-ctr",
            "data-ps": "61f36d81-span-16"
        },
        qs = {
            href: "#phw-cns-icon-close",
            "data-ps": "61f36d81-use-3"
        },
        Zs = {
            key: 0,
            "data-ps": "61f36d81-div-103"
        },
        Js = {
            key: 0,
            "data-ps": "61f36d81-div-94"
        },
        Ys = ["innerHTML"],
        Xs = {
            class: "phw-d-block phw-g-h2-card-title-primary-small",
            "data-ps": "61f36d81-span-100"
        },
        Qs = {
            class: "phw-mt-5 phw-mb-5 phw-mt-sm-3 phw-mb-sm-3 phw-d-flex phw-justify-content-center",
            "data-ps": "61f36d81-div-104"
        },
        vs = {
            class: "phw-icon-ctr",
            "data-ps": "61f36d81-span-101"
        },
        e1 = {
            href: "#phw-cns-icon-email-wrap",
            "data-ps": "61f36d81-use-20"
        },
        t1 = {
            class: "phw-d-block phw-g-p-default-primary",
            "data-ps": "61f36d81-span-102"
        },
        d1 = {
            key: 1,
            class: "",
            "data-ps": "61f36d81-div-105"
        },
        a1 = {
            key: 0,
            "data-ps": "61f36d81-div-100"
        },
        n1 = ["innerHTML"],
        i1 = {
            class: "phw-mt-5 phw-mb-5 phw-mt-sm-3 phw-mb-sm-3 phw-d-flex phw-justify-content-center",
            "data-ps": "61f36d81-div-106"
        },
        r1 = {
            class: "phw-icon-ctr",
            "data-ps": "61f36d81-span-103"
        },
        s1 = {
            href: "#phw-cns-icon-email-wrap",
            "data-ps": "61f36d81-use-21"
        },
        o1 = {
            class: "phw-d-block phw-g-p-default-primary",
            "data-ps": "61f36d81-span-104"
        },
        l1 = {
            class: "phw-icon-ctr phw-mr-1",
            "data-ps": "61f36d81-span-88"
        },
        c1 = {
            fill: "currentcolor",
            "aria-hidden": "true",
            class: "phw-i-sz-3 phw-g-icon-success",
            "data-ps": "61f36d81-svg-22"
        },
        $1 = {
            href: "#phw-cns-icon-circle-check",
            "data-ps": "61f36d81-use-22"
        },
        f1 = ["aria-label", "disabled"],
        p1 = {
            key: 3,
            class: "phw-mt-5 phw-mt-xl-3 phw-ml-1 phw-mr-1",
            "data-ps": "61f36d81-div-70"
        },
        h1 = {
            key: 0,
            class: "phw-text-c",
            "data-ps": "61f36d81-div-72"
        },
        g1 = {
            class: "phw-g-text-default-dark",
            "data-ps": "61f36d81-span-72"
        },
        w1 = {
            key: 1,
            class: "phw-text-c",
            "data-ps": "61f36d81-div-73"
        },
        k1 = {
            class: "phw-g-text-default-dark",
            "data-ps": "61f36d81-span-73"
        },
        y1 = {
            class: "phw-mt-4 phw-mt-xl-3 phw-d-flex phw-justify-content-center",
            "data-ps": "61f36d81-div-74"
        },
        m1 = ["aria-label"],
        S1 = ["aria-label"],
        P1 = {
            class: "phw-visually-hidden",
            "aria-live": "assertive",
            "aria-atomic": "true",
            "data-ps": "61f36d81-div-82"
        },
        _1 = {
            key: 0,
            "data-ps": "61f36d81-span-82"
        },
        E1 = {
            class: "phw-visually-hidden",
            "aria-live": "assertive",
            "aria-atomic": "true",
            "data-ps": "61f36d81-div-83"
        },
        B1 = {
            key: 0,
            "data-ps": "61f36d81-span-83"
        };
    return Sd(e.defineComponent({
        __name: "CandidateloginDefaultHeaderDefaultComponent",
        props: {
            flowType: null,
            widgetContext: {
                default: ""
            },
            hideOnMobile: null,
            contentId: {
                default: ""
            },
            instanceId: null,
            content: null,
            parentElemRemove: null,
            classStyle: {
                type: Boolean
            }
        },
        setup(n) {
            const a = n,
                d = e.ref(),
                s = e.ref(),
                w = e.ref(),
                l = e.ref(),
                B = e.ref(),
                F = e.ref(),
                U = e.ref(),
                {
                    onWidgetLoad: A,
                    checkEmailValidation: m,
                    signInModel: x,
                    isValidEmail: g,
                    validateEmail: u,
                    errors: o,
                    showHidePassword: N,
                    isPasswordVisible: b,
                    checkPasswordValidation: z,
                    isValidPassword: G,
                    validatePassword: j,
                    showPasswordSrOnly: v,
                    pwdRegexMap: P,
                    privacyConsentReqFlag: de,
                    isPrivacyConsentChecked: re,
                    privacyDataConsent: Z,
                    piiConsentData: I,
                    signup: M,
                    isLoggedIn: q,
                    step: T,
                    signedIn: _e,
                    staySignIn: oe,
                    forgotPassword: Ce,
                    changeFlowType: k,
                    resendPswrdResetLink: V,
                    sendPswdResetLink: O,
                    flowType: J,
                    privacyConsentError: Y,
                    piiConsentError: ee,
                    piiConsentContext: le,
                    isHeadingDisabled: Ed,
                    isFirstTimeUser: Ie,
                    preferredName: H,
                    profileDetails: f,
                    closePopup: pt,
                    isshowDropDown: ce,
                    showDropdown: ht,
                    getContent: Bd,
                    passwordErrorSrOnly: At,
                    openPopup: Ot,
                    isPopupOpen: ud,
                    showLoader: Dd,
                    isTokenCallDone: gt,
                    checkCandidateHomeEnabled: Rt,
                    signUpSuccessSr: Ft,
                    signInSuccessSr: X,
                    hasErrors: Me,
                    isEmailResent: ne,
                    isResentBtnEnable: Xe,
                    profileUrl: Ut,
                    sendOneTimeLoginLink: Qe,
                    resendOneTimeLoginLink: ve,
                    socialLoginContext: $e,
                    showOneTineLoginLinkLoader: et,
                    signUpStep: R,
                    STEP_EMAIL_PASSWORD: Ee,
                    STEP_LOGIN_LINK: y,
                    isEmailTriggeredByUser: L,
                    isEmailTriggeredSuccessfully: fe,
                    beforeEmailTrigred: pe
                } = Le(s, w, B, F, U, a, d);
            return e.onBeforeMount(() => {
                A(), a.contentId ? Bd(a.contentId).then(p => {
                    d.value = p || {}
                }) : d.value = a.content
            }), e.onMounted(() => {
                t.usePhCommon().init(s.value, d, a.instanceId), Rt()
            }), (p, h) => {
                var Be, he, we, ae, ke, tt, ye, Gt, me, D, ue, ie, Ae, Oe, K, Re, dt, wt, at, nt, kt, De, be, Ht, zt, Q, Se, Kt, W, it, Fe, Ue, Ge, He, yt, te, mt, St, rt, Ne, Wt, jt, qt, Zt, Jt, Yt, ze, Xt, Qt, se, Ke, We, vt, ed, Te, td, je, Pt, dd, qe, C, xe, ad, st, ot, _t, nd, Et, lt, id, ct, ge, $t, rd, Ze, Pe, Bt, sd, ut, Dt, bt, Nt, od, ld, ft, cd, $d, Tt, fd, pd, xt, hd, Vt, Lt, gd, Je, wd, Ct, kd, i, r, c, E, $, _, Ve, yd, Fd, Ud, Gd, Hd, zd, Kd, Wd, jd, qd, Zd, Jd, Yd, Xd, Qd, vd, ea, ta, da, aa, na, ia, ra, sa, oa, la, ca, $a, fa, pa, ha;
                return e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    ref_key: "element",
                    ref: s,
                    class: "phw-widget-empty-ctr phw-widget-ctr",
                    "data-ps": "61f36d81-div-1"
                }, [e.withDirectives(e.createElementVNode("div", Nn, null, 512), [
                    [e.unref(t.vPhwSetting)]
                ]), e.unref(q) && a.flowType == "signout" ? e.withDirectives((e.openBlock(), e.createElementBlock("div", Tn, [e.withDirectives((e.openBlock(), e.createElementBlock("a", {
                    class: e.normalizeClass([p.$style["sign-out-btn"], "phw-btn phw-g-btn-link"]),
                    "data-ph-at-id": "sign-out-text",
                    "data-ps": "61f36d81-a-1"
                }, [e.createTextVNode(e.toDisplayString((he = (Be = e.unref(d)) == null ? void 0 : Be.signOutButton) == null ? void 0 : he.text), 1)], 2)), [
                    [e.unref(t.vPhwSetting)],
                    [e.unref(t.vPhwHref), "{{linkDomain}}logout"]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), a.widgetContext.context !== "fyf_container" && !e.unref(Ed) && a.flowType !== "signout" && !e.unref(Dd) && a.widgetContext.context !== "resumeSearch" && a.widgetContext.context !== "save_job_widget" && a.widgetContext.context !== "save_toast" ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    key: 1,
                    class: e.normalizeClass(["phw-posn-relative phw-xs-pb-2", p.$style["content-block"]]),
                    "data-ps": "61f36d81-div-4"
                }, [!e.unref(q) && e.unref(gt) ? e.withDirectives((e.openBlock(), e.createElementBlock("a", {
                    key: 0,
                    class: e.normalizeClass(["phw-s-login-link phw-btn phw-d-flex phw-align-items-center phw-modal-sign-up phw-s-after-close phw-g-header-link phw-d-inline-flex phw-align-items-center phw-justify-content-start", a.classStyle ? p.$style["c-sign-up-link"] : ""]),
                    role: "button",
                    href: "javascript:void(0)",
                    tabindex: "0",
                    "data-ps": "61f36d81-a-3",
                    "data-ph-at-id": e.unref(Ie) ? "sign-up-link" : "sign-in-link",
                    onClick: h[0] || (h[0] = S => e.unref(Ie) || e.unref(R) === e.unref(y) ? e.unref(Ot)("signUp") : e.unref(Ot)("signIn"))
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Vn, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", Ln, [e.withDirectives(e.createElementVNode("use", Cn, null, 512), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", In, [e.createTextVNode(e.toDisplayString(e.unref(R) === e.unref(y) ? (ae = (we = e.unref(d)) == null ? void 0 : we.loginLinkText) == null ? void 0 : ae.text : e.unref(Ie) && e.unref(R) === e.unref(Ee) ? (ke = e.unref(d)) == null ? void 0 : ke.createAccountLinkText : (tt = e.unref(d)) == null ? void 0 : tt.signInAccountLinkText), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ])], 10, xn)), [
                    [e.unref(t.vPhwSetting)],
                    [e.unref(t.vPhwTrack), e.unref(Ie) ? e.unref(R) === e.unref(y) ? "one_time_login_link_click" : "signUp_click" : e.unref(R) === e.unref(y) ? "one_time_login_link_click" : "signIn_click"]
                ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("div", Mn, [e.unref(q) ? e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                    key: 0,
                    "data-ph-at-id": "drop-down-for-profile",
                    class: "phw-btn phw-g-btn-link phw-g-header-link phw-d-sm-none",
                    "aria-expanded": e.unref(ce) ? "true" : "false",
                    "data-ps": "61f36d81-button-1",
                    onClick: h[1] || (h[1] = S => e.unref(ht)())
                }, [e.unref(H) && e.unref(f).profile.preferredName || e.unref(f).profile.firstName || e.unref(f).profile.email ? e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                    key: 0,
                    class: e.normalizeClass(p.$style["user-avatar-initials"]),
                    "aria-hidden": "true",
                    "data-show-setting": "true",
                    "data-ps": "61f36d81-span-5"
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", On, [e.createTextVNode(e.toDisplayString(e.unref(H) && e.unref(f).profile.preferredName && e.unref(f).profile.preferredName.substring(0, 1) || e.unref(f).profile.firstName && e.unref(f).profile.firstName.substring(0, 1) || e.unref(f).profile.email && e.unref(f).profile.email.substring(0, 1)), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ])], 2)), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), !(e.unref(H) && e.unref(f).profile.preferredName) && !e.unref(f).profile.firstName && !e.unref(f).profile.email ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Rn, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", Fn, [e.withDirectives(e.createElementVNode("use", Un, null, 512), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                    class: e.normalizeClass([p.$style["user-name"], a.classStyle ? p.$style["c-sign-up-link"] : ""]),
                    "data-ps": "61f36d81-span-74",
                    title: e.unref(H) && e.unref(f).profile.preferredName || e.unref(f).profile.firstName || e.unref(f).profile.email
                }, [e.createTextVNode(e.toDisplayString(e.unref(H) && e.unref(f).profile.preferredName || e.unref(f).profile.firstName || e.unref(f).profile.email), 1)], 10, Gn)), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", Hn, [e.createTextVNode(e.toDisplayString((ye = e.unref(d)) == null ? void 0 : ye.profileText), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ])], 8, An)), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.unref(q) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", zn, [e.unref(f).profile.firstName || e.unref(f).profile.email ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    key: 0,
                    class: e.normalizeClass([p.$style["user-details"], "phw-pb-1-5"]),
                    "data-ps": "61f36d81-div-7"
                }, [e.unref(H) && e.unref(f).profile.preferredName || e.unref(f).profile.firstName || e.unref(f).profile.email ? e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                    key: 0,
                    class: e.normalizeClass(p.$style["mobile-logged-in-user-name"]),
                    "aria-hidden": "true",
                    "data-ps": "61f36d81-span-9"
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Kn, [e.createTextVNode(e.toDisplayString(e.unref(H) && e.unref(f).profile.preferredName && e.unref(f).profile.preferredName.substring(0, 1) || e.unref(f).profile.firstName && e.unref(f).profile.firstName.substring(0, 1) || e.unref(f).profile.email && e.unref(f).profile.email.substring(0, 1)), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ])], 2)), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), !(e.unref(H) && e.unref(f).profile.preferredName) && !e.unref(f).profile.firstName && !e.unref(f).profile.email ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Wn, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", jn, [e.withDirectives(e.createElementVNode("use", qn, null, 512), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("ul", {
                    role: "list",
                    "data-ps": "61f36d81-ul-1",
                    class: e.normalizeClass(p.$style["candidate-lists"])
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("li", {
                    class: e.normalizeClass([e.unref(H) && e.unref(f).profile.preferredName || e.unref(f).profile.firstName ? "phw-list-none phw-g-text-default-dark" : p.$style["user-detail-listitem"], "phw-list-none"]),
                    "data-ph-at-id": "heading-text",
                    title: e.unref(H) && e.unref(f).profile.preferredName ? e.unref(f).profile.preferredName : e.unref(f).profile.firstName ? e.unref(f).profile.firstName + " " + (e.unref(f).profile.lastName || "") : e.unref(f).profile.email,
                    "data-ps": "61f36d81-li-1"
                }, [e.createTextVNode(e.toDisplayString(e.unref(H) && e.unref(f).profile.preferredName ? e.unref(f).profile.preferredName : e.unref(f).profile.firstName ? e.unref(f).profile.firstName + " " + (e.unref(f).profile.lastName || "") : e.unref(f).profile.email), 1)], 10, Zn)), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("li", Jn, [e.withDirectives((e.openBlock(), e.createElementBlock("a", Yn, [e.createTextVNode(e.toDisplayString((Gt = e.unref(d)) == null ? void 0 : Gt.personalAccountLinkText), 1)])), [
                    [e.unref(t.vPhwSetting)],
                    [e.unref(t.vPhwTrack), "view_profile_click"],
                    [e.unref(t.vPhwHref), e.unref(Ut)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ])], 2)), [
                    [e.unref(t.vPhwSetting)]
                ])], 2)), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.unref(ce) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    key: 2,
                    class: e.normalizeClass(p.$style["logged-in-drop-down"]),
                    "data-ps": "61f36d81-div-8"
                }, [e.unref(f).profile.firstName || e.unref(f).profile.email ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    key: 0,
                    class: e.normalizeClass(p.$style["logged-in-user-details"]),
                    "data-ps": "61f36d81-div-9"
                }, [e.unref(H) && e.unref(f).profile.preferredName || e.unref(f).profile.firstName || e.unref(f).profile.email ? e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                    key: 0,
                    class: e.normalizeClass([p.$style["user-avatar-initials"], p.$style["logged-in-user-name"]]),
                    "aria-hidden": "true",
                    "data-ps": "61f36d81-span-12"
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Xn, [e.createTextVNode(e.toDisplayString(e.unref(H) && e.unref(f).profile.preferredName && e.unref(f).profile.preferredName.substring(0, 1) || e.unref(f).profile.firstName && e.unref(f).profile.firstName.substring(0, 1) || e.unref(f).profile.email && e.unref(f).profile.email.substring(0, 1)), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ])], 2)), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), !(e.unref(H) && e.unref(f).profile.preferredName) && !e.unref(f).profile.firstName && !e.unref(f).profile.email ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Qn, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", vn, [e.withDirectives(e.createElementVNode("use", ei, null, 512), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.createElementVNode("div", {
                    class: e.normalizeClass(p.$style["canditate-action-block"]),
                    "data-ps": "61f36d81-div-84"
                }, [e.unref(H) && e.unref(f).profile.preferredName || e.unref(f).profile.firstName + e.unref(f).profile.lastName ? e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                    key: 0,
                    class: "phw-g-text-default-semibold-dark phw-d-inline-block phw-line-clamp phw-line-clamp-1",
                    "data-ph-at-id": "heading-text",
                    "data-ps": "61f36d81-span-85",
                    title: e.unref(H) && e.unref(f).profile.preferredName || e.unref(f).profile.firstName + " " + e.unref(f).profile.lastName
                }, [e.createTextVNode(e.toDisplayString(e.unref(H) && e.unref(f).profile.preferredName || (e.unref(f).profile.firstName ? e.unref(f).profile.firstName : "") + " " + (e.unref(f).profile.lastName ? e.unref(f).profile.lastName : "")), 1)], 8, ti)), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                    class: e.normalizeClass(["phw-g-text-default-secondary phw-d-block", p.$style["drop-down-user-name"]]),
                    title: e.unref(f).profile.email,
                    "data-ps": "61f36d81-span-15"
                }, [e.createTextVNode(e.toDisplayString(e.unref(f).profile.email), 1)], 10, di)), [
                    [e.unref(t.vPhwSetting)]
                ])], 2)], 2)), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    class: e.normalizeClass(p.$style["user-actions"]),
                    "data-ps": "61f36d81-div-10"
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", ai, [e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    role: "listitem",
                    class: e.normalizeClass(p.$style["user-actions-listitem"]),
                    "data-ps": "61f36d81-div-12"
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("a", ni, [e.createTextVNode(e.toDisplayString((me = e.unref(d)) == null ? void 0 : me.personalAccountLinkText), 1)])), [
                    [e.unref(t.vPhwTrack), "view_profile_click"],
                    [e.unref(t.vPhwSetting)],
                    [e.unref(t.vPhwHref), e.unref(Ut)]
                ])], 2)), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    role: "listitem",
                    class: e.normalizeClass(p.$style["user-actions-listitem"]),
                    "data-ps": "61f36d81-div-13"
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("a", ii, [e.createTextVNode(e.toDisplayString((ue = (D = e.unref(d)) == null ? void 0 : D.signOutButton) == null ? void 0 : ue.text), 1)])), [
                    [e.unref(t.vPhwSetting)],
                    [e.unref(t.vPhwTrack), "signout_click"],
                    [e.unref(t.vPhwHref), "{{linkDomain}}logout"]
                ])], 2)), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ])], 2)), [
                    [e.unref(t.vPhwSetting)]
                ])], 2)), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)])), [
                    [e.unref(t.vPhwSetting)]
                ])], 2)), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.unref(ud) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", ri, [e.withDirectives((e.openBlock(), e.createElementBlock("div", si, [e.unref(L) ? e.createCommentVNode("", !0) : e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                    key: 0,
                    ref_key: "resendCloseButton",
                    ref: l,
                    class: e.normalizeClass(["ph-a11y-popup-start-focus close phw-modal-close", p.$style["close-popup"]]),
                    "aria-label": (ie = e.unref(d)) == null ? void 0 : ie.closePopupButtonAriaLabel,
                    "data-ph-at-id": "close-link",
                    "data-ps": "61f36d81-button-2",
                    onClick: h[2] || (h[2] = S => e.unref(pt)())
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", li, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", {
                    fill: "currentcolor",
                    "aria-hidden": "true",
                    class: e.normalizeClass(p.$style["close-btn"]),
                    "data-ps": "61f36d81-svg-3"
                }, [e.withDirectives(e.createElementVNode("use", ci, null, 512), [
                    [e.unref(t.vPhwSetting)]
                ])], 2)), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ])], 10, oi)), [
                    [e.unref(t.vPhwTrack), "modal_close_click"],
                    [e.unref(t.vPhwSetting)]
                ]), e.unref(q) ? e.createCommentVNode("", !0) : e.withDirectives((e.openBlock(), e.createElementBlock("div", $i, [e.unref(J) === "signIn" ? e.withDirectives((e.openBlock(), e.createElementBlock("div", fi, [e.withDirectives((e.openBlock(), e.createElementBlock("div", pi, [e.unref(T) === "signIn" ? e.withDirectives((e.openBlock(), e.createElementBlock("div", hi, [e.withDirectives((e.openBlock(), e.createElementBlock("h2", gi, [e.createTextVNode(e.toDisplayString((Ae = e.unref(d)) == null ? void 0 : Ae.signInPopUpHeading), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.unref(T) === "forgotPassword" ? e.withDirectives((e.openBlock(), e.createElementBlock("div", wi, [e.withDirectives((e.openBlock(), e.createElementBlock("h2", {
                    "ally-label-heading": "",
                    class: e.normalizeClass([p.$style.heading, "phw-text-c phw-mb-5 phw-mb-xl-4 phw-g-h2-card-title-dark-default"]),
                    "data-ps": "61f36d81-h2-2",
                    "data-ph-at-id": "forgot-password-heading"
                }, [e.createTextVNode(e.toDisplayString((Oe = e.unref(d)) == null ? void 0 : Oe.forgotPasswordPopUpHeading), 1)], 2)), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", ki, [e.createTextVNode(e.toDisplayString((K = e.unref(d)) == null ? void 0 : K.forgotPasswordPopUpSubHeading), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.unref(T) === "resetPasswordLink" ? e.withDirectives((e.openBlock(), e.createElementBlock("div", yi, [e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    ref_key: "pcsA11yResetPasswordHeading",
                    ref: U,
                    tabindex: "-1",
                    "data-ps": "61f36d81-div-22"
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("h2", mi, [e.createTextVNode(e.toDisplayString((Re = e.unref(d)) == null ? void 0 : Re.resetPasswordPopUpHeading), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives(e.createElementVNode("span", {
                    class: "phw-d-block phw-text-c phw-g-p-default-secondary",
                    "data-ps": "61f36d81-span-17",
                    innerHTML: e.unref(Pd)((dt = e.unref(d)) == null ? void 0 : dt.resetPasswordPopUpSubHeading1, {
                        emailId: e.unref(x).email
                    })
                }, null, 8, Si), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)])), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("form", {
                    class: e.normalizeClass(e.unref(T) === "forgotPassword" ? "phw-s-forgot-Password-form" : ""),
                    "data-ps": "61f36d81-form-1"
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", Pi, [e.unref(T) != "resetPasswordLink" ? e.withDirectives((e.openBlock(), e.createElementBlock("div", _i, [e.withDirectives((e.openBlock(), e.createElementBlock("label", Ei, [e.createTextVNode(e.toDisplayString(((wt = e.unref(d)) == null ? void 0 : wt.createAccountEmailFormLabel) || ((at = e.unref(d)) == null ? void 0 : at.signInEmailFormLabel)), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", Bi, [e.withDirectives((e.openBlock(), e.createElementBlock("div", ui, [e.withDirectives(e.createElementVNode("input", {
                    id: "signinEmail",
                    ref_key: "loginEmail",
                    ref: w,
                    "onUpdate:modelValue": h[3] || (h[3] = S => e.unref(x).email = S),
                    "aria-label": "Enter email",
                    autocomplete: "email",
                    "aria-describedby": "errorCreateEmail",
                    class: "phw-g-text-field-style-1 phw-icon-right phw-input-icon-pr-lg",
                    placeholder: (nt = e.unref(d)) == null ? void 0 : nt.signInEmailFormPlaceHolder,
                    type: "email",
                    "data-ph-at-id": "input",
                    "data-ph-at-flow": "sign-in-email",
                    "data-ps": "61f36d81-input-1",
                    onKeyup: h[4] || (h[4] = S => e.unref(m)()),
                    onChange: h[5] || (h[5] = S => e.unref(u)())
                }, null, 40, Di), [
                    [e.vModelText, e.unref(x).email],
                    [e.unref(t.vPhwSetting)]
                ]), e.unref(o).email.error && !e.unref(g) ? e.withDirectives((e.openBlock(), e.createElementBlock("span", bi, [e.unref(o).email.error && !e.unref(g) ? e.withDirectives((e.openBlock(), e.createElementBlock("svg", {
                    key: 0,
                    class: e.normalizeClass([p.$style["error-icon"], "phw-g-icon-failure"]),
                    fill: "currentcolor",
                    "aria-hidden": "true",
                    "data-ps": "61f36d81-svg-4"
                }, [e.withDirectives(e.createElementVNode("use", Ni, null, 512), [
                    [e.unref(t.vPhwSetting)]
                ])], 2)), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.unref(g) ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Ti, [e.unref(g) ? e.withDirectives((e.openBlock(), e.createElementBlock("svg", {
                    key: 0,
                    class: e.normalizeClass([p.$style["verified-credential"], "phw-g-icon-success"]),
                    fill: "currentcolor",
                    "aria-hidden": "true",
                    "data-ps": "61f36d81-svg-5"
                }, [e.withDirectives(e.createElementVNode("use", xi, null, 512), [
                    [e.unref(t.vPhwSetting)]
                ])], 2)), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("div", Vi, [e.unref(b) && e.unref(v) ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Li, [e.createTextVNode(e.toDisplayString((kt = e.unref(d)) == null ? void 0 : kt.passwordVisibleSrOnly), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), !e.unref(b) && e.unref(v) ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Ci, [e.createTextVNode(e.toDisplayString((De = e.unref(d)) == null ? void 0 : De.passwordInVisibleSrOnly), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)])), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", Ii, [e.unref(o).email.error ? e.withDirectives((e.openBlock(), e.createElementBlock("div", Mi, [e.withDirectives((e.openBlock(), e.createElementBlock("div", Ai, [e.unref(o).email.error && e.unref(o).email.code === "E101" && !e.unref(g) && !e.unref(o).email.srHidden ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Oi, [e.createTextVNode(e.toDisplayString((be = e.unref(d)) == null ? void 0 : be.errorMessageEmptyEmail), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.unref(o).email.error && e.unref(o).email.code === "E102" && !e.unref(g) && !e.unref(o).email.srHidden ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Ri, [e.createTextVNode(e.toDisplayString((Ht = e.unref(d)) == null ? void 0 : Ht.errorMessageInvalidEmail), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)])), [
                    [e.unref(t.vPhwSetting)]
                ]), e.unref(o).email.error && e.unref(o).email.code === "E101" && !e.unref(g) && e.unref(o).email.srHidden ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Fi, [e.createTextVNode(e.toDisplayString((zt = e.unref(d)) == null ? void 0 : zt.errorMessageEmptyEmail), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.unref(o).email.error && e.unref(o).email.code === "E102" && !e.unref(g) && e.unref(o).email.srHidden ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Ui, [e.createTextVNode(e.toDisplayString((Q = e.unref(d)) == null ? void 0 : Q.errorMessageInvalidEmail), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.unref(o).email.error && e.unref(o).email.code === "E103" ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Gi, null, 512)), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.unref(o).email.error && e.unref(o).email.code === "E105" ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Hi, [e.createTextVNode(e.toDisplayString((Se = e.unref(d)) == null ? void 0 : Se.noAccountError) + " ", 1), e.withDirectives((e.openBlock(), e.createElementBlock("a", {
                    class: "phw-g-btn-link phw-g-text-default-dark",
                    href: "javascript:void(0);",
                    role: "button",
                    "data-ps": "61f36d81-a-7",
                    "data-ph-at-id": "switch-to-sign-up",
                    onClick: h[6] || (h[6] = S => e.unref(k)("signUp"))
                }, [e.createTextVNode(e.toDisplayString((W = (Kt = e.unref(d)) == null ? void 0 : Kt.createAccountButton) == null ? void 0 : W.text), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)])), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.unref(T) === "signIn" ? e.withDirectives((e.openBlock(), e.createElementBlock("div", zi, [e.withDirectives((e.openBlock(), e.createElementBlock("label", Ki, [e.createTextVNode(e.toDisplayString((it = e.unref(d)) == null ? void 0 : it.signInPasswordFormLabel), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", Wi, [e.withDirectives((e.openBlock(), e.createElementBlock("div", ji, [e.withDirectives(e.createElementVNode("input", {
                    id: "signinPassword",
                    ref_key: "loginPassword",
                    ref: B,
                    "onUpdate:modelValue": h[7] || (h[7] = S => e.unref(x).password = S),
                    "aria-label": "Enter password",
                    class: "phw-g-text-field-style-1 phw-icon-right phw-input-icon-pr-lg",
                    placeholder: (Fe = e.unref(d)) == null ? void 0 : Fe.signInPasswordFormPlaceHolder,
                    type: e.unref(b) ? "text" : "password",
                    "aria-describedby": "errorPassword",
                    "data-ph-at-id": "input",
                    autocomplete: "current-password",
                    "data-ps": "61f36d81-input-2",
                    onChange: h[8] || (h[8] = S => e.unref(j)(e.unref(x).password, !0))
                }, null, 40, qi), [
                    [e.vModelDynamic, e.unref(x).password],
                    [e.unref(t.vPhwSetting)]
                ]), e.unref(o).password.error && !e.unref(G) ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Zi, [e.unref(o).password.error && !e.unref(G) ? e.withDirectives((e.openBlock(), e.createElementBlock("svg", {
                    key: 0,
                    class: e.normalizeClass([p.$style["error-icon"], "phw-g-icon-failure"]),
                    fill: "currentcolor",
                    "aria-hidden": "true",
                    "data-ps": "61f36d81-svg-6"
                }, [e.withDirectives(e.createElementVNode("use", Ji, null, 512), [
                    [e.unref(t.vPhwSetting)]
                ])], 2)), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    class: e.normalizeClass(p.$style["pswrd-visibility"] + " " + (e.unref(o).password.error ? p.$style["error-password-icon"] : "")),
                    "data-ps": "61f36d81-div-33"
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                    type: "button",
                    class: e.normalizeClass(["phw-d-flex phw-btn phw-g-btn-link", p.$style["pswrd-visibility-btn"]]),
                    "aria-label": e.unref(b) ? "Hide password" : "Show password",
                    "data-ph-at-id": "eye-icon-button",
                    "data-ps": "61f36d81-button-3",
                    onClick: h[9] || (h[9] = S => e.unref(N)())
                }, [e.unref(b) || !e.unref(b) ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Xi, [e.unref(b) ? e.withDirectives((e.openBlock(), e.createElementBlock("svg", {
                    key: 0,
                    class: e.normalizeClass([p.$style["icon-eye"], "phw-g-icon-dark"]),
                    fill: "currentcolor",
                    "aria-hidden": "true",
                    "data-ph-at-id": "eye-icon-open",
                    "data-ps": "61f36d81-svg-7"
                }, [e.withDirectives(e.createElementVNode("use", Qi, null, 512), [
                    [e.unref(t.vPhwSetting)]
                ])], 2)), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.unref(b) ? e.createCommentVNode("", !0) : e.withDirectives((e.openBlock(), e.createElementBlock("svg", {
                    key: 1,
                    class: e.normalizeClass([p.$style["icon-eye"], "phw-g-icon-dark"]),
                    fill: "currentcolor",
                    "aria-hidden": "true",
                    "data-ph-at-id": "eye-icon-close",
                    "data-ps": "61f36d81-svg-8"
                }, [e.withDirectives(e.createElementVNode("use", vi, null, 512), [
                    [e.unref(t.vPhwSetting)]
                ])], 2)), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)], 10, Yi)), [
                    [e.unref(t.vPhwSetting)]
                ])], 2)), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", er, [e.withDirectives((e.openBlock(), e.createElementBlock("div", tr, [e.unref(o).password.error && e.unref(o).password.code === "E101" && !e.unref(o).password.srHidden ? e.withDirectives((e.openBlock(), e.createElementBlock("span", dr, [e.createTextVNode(e.toDisplayString((Ue = e.unref(d)) == null ? void 0 : Ue.errorMessageEmptyPassword), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.unref(o).password.error && e.unref(o).password.code === "E103" && !e.unref(o).password.srHidden ? e.withDirectives((e.openBlock(), e.createElementBlock("span", ar, [e.createTextVNode(e.toDisplayString((Ge = e.unref(d)) == null ? void 0 : Ge.errorIncorrectPassword), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)])), [
                    [e.unref(t.vPhwSetting)]
                ]), e.unref(o).password.error && e.unref(o).password.code === "E101" && e.unref(o).password.srHidden ? e.withDirectives((e.openBlock(), e.createElementBlock("span", nr, [e.createTextVNode(e.toDisplayString((He = e.unref(d)) == null ? void 0 : He.errorMessageEmptyPassword), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.unref(o).password.error && e.unref(o).password.code === "E103" && e.unref(o).password.srHidden ? e.withDirectives((e.openBlock(), e.createElementBlock("span", ir, [e.createTextVNode(e.toDisplayString((yt = e.unref(d)) == null ? void 0 : yt.errorIncorrectPassword), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)])), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.unref(T) === "signIn" ? e.withDirectives((e.openBlock(), e.createElementBlock("div", rr, [e.unref(o).server.error && e.unref(T) === "signIn" ? e.withDirectives((e.openBlock(), e.createElementBlock("div", sr, [e.unref(o).email.error && !e.unref(g) ? e.withDirectives((e.openBlock(), e.createElementBlock("span", or, [e.unref(o).email.error && !e.unref(g) ? e.withDirectives((e.openBlock(), e.createElementBlock("svg", {
                    key: 0,
                    class: e.normalizeClass([p.$style["error-icon"], "phw-g-icon-failure"]),
                    fill: "currentcolor",
                    "aria-hidden": "true",
                    "data-ph-at-id": "eye-icon-open",
                    "data-ps": "61f36d81-svg-9"
                }, [e.withDirectives(e.createElementVNode("use", lr, null, 512), [
                    [e.unref(t.vPhwSetting)]
                ])], 2)), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.unref(o).server.code === "E500" ? e.withDirectives((e.openBlock(), e.createElementBlock("span", cr, [e.createTextVNode(e.toDisplayString((te = e.unref(d)) == null ? void 0 : te.technicalIssueText), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.unref(T) === "signIn" ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    key: 3,
                    class: e.normalizeClass(p.$style["form-group-row"]),
                    "data-ps": "61f36d81-div-38"
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", $r, [e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                    type: "button",
                    class: "phw-btn phw-g-btn-primary phw-width-4",
                    "data-ph-at-id": "submit-button",
                    "data-ps": "61f36d81-button-4",
                    onClick: h[10] || (h[10] = S => e.unref(_e)())
                }, [e.createTextVNode(e.toDisplayString((St = (mt = e.unref(d)) == null ? void 0 : mt.signInButton) == null ? void 0 : St.text), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    class: e.normalizeClass(["phw-d-flex phw-justify-content-between phw-align-items-center phw-mt-2 phw-mt-sm-2 phw-d-sm-block", p.$style["stay-and-forgot-pass-block"]]),
                    "data-ps": "61f36d81-div-40"
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", fr, [e.withDirectives((e.openBlock(), e.createElementBlock("label", pr, [e.withDirectives(e.createElementVNode("input", {
                    id: "staySignIn",
                    "onUpdate:modelValue": h[11] || (h[11] = S => e.isRef(oe) ? oe.value = S : null),
                    type: "checkbox",
                    role: "checkbox",
                    "data-ph-at-id": "stay-sign-in",
                    class: "phw-form-input-group",
                    "aria-checked": e.unref(oe) ? "true" : "false",
                    "aria-label": (rt = e.unref(d)) == null ? void 0 : rt.staySignedInCheckboxAriaLabel,
                    "data-ps": "61f36d81-input-3"
                }, null, 8, hr), [
                    [e.vModelCheckbox, e.unref(oe)],
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", gr, [e.createTextVNode(e.toDisplayString((Ne = e.unref(d)) == null ? void 0 : Ne.staySignedInCheckboxText), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", wr, [e.withDirectives((e.openBlock(), e.createElementBlock("a", {
                    href: "javascript:void(0);",
                    role: "button",
                    "data-ph-at-id": "forgot-password-link",
                    class: "phw-btn phw-g-btn-link",
                    "data-ps": "61f36d81-a-8",
                    onClick: h[12] || (h[12] = S => e.unref(Ce)())
                }, [e.createTextVNode(e.toDisplayString((jt = (Wt = e.unref(d)) == null ? void 0 : Wt.forgotPasswordLink) == null ? void 0 : jt.text), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ])], 2)), [
                    [e.unref(t.vPhwSetting)]
                ])], 2)), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.unref(T) === "forgotPassword" ? e.withDirectives((e.openBlock(), e.createElementBlock("div", kr, [e.unref(o).server.error && e.unref(T) === "forgotPassword" ? e.withDirectives((e.openBlock(), e.createElementBlock("div", yr, [e.unref(o).server.code === "E500" ? e.withDirectives((e.openBlock(), e.createElementBlock("span", mr, [e.createTextVNode(e.toDisplayString((qt = e.unref(d)) == null ? void 0 : qt.technicalIssueText), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.unref(T) === "forgotPassword" ? e.withDirectives((e.openBlock(), e.createElementBlock("div", Sr, [e.withDirectives((e.openBlock(), e.createElementBlock("div", Pr, [e.withDirectives((e.openBlock(), e.createElementBlock("a", {
                    href: "javascript:void(0)",
                    role: "button",
                    class: "phw-btn phw-g-btn-primary phw-width-4",
                    "data-ph-at-id": "submit-button",
                    "data-ps": "61f36d81-a-9",
                    onClick: h[13] || (h[13] = S => e.unref(O)())
                }, [e.createTextVNode(e.toDisplayString((Jt = (Zt = e.unref(d)) == null ? void 0 : Zt.resetPasswordButton) == null ? void 0 : Jt.text), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)])), [
                    [e.unref(t.vPhwSetting)]
                ])], 2)), [
                    [e.unref(t.vPhwSetting)]
                ]), e.unref(T) === "resetPasswordLink" ? e.withDirectives((e.openBlock(), e.createElementBlock("div", _r, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Er, [e.createTextVNode(e.toDisplayString((Yt = e.unref(d)) == null ? void 0 : Yt.resentEmailButtonLabel), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                    class: e.normalizeClass(["phw-ml-1 phw-p-0 phw-g-btn-link-candidate-login phw-td-none", e.unref(ne) ? p.$style["resend-btn-disabled"] : p.$style["resent-btn"]]),
                    disabled: !e.unref(Xe),
                    "data-ps": "61f36d81-a-10",
                    "data-ph-at-id": "resend-mail-link",
                    onClick: h[14] || (h[14] = S => e.unref(V)())
                }, [e.createTextVNode(e.toDisplayString((ze = e.unref(d)) == null ? void 0 : ze.resentEmailButtonText), 1)], 10, Br)), [
                    [e.unref(t.vPhwSetting)]
                ]), e.unref(ne) ? e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                    key: 0,
                    ref_key: "resendEmailSucessText",
                    ref: F,
                    class: "phw-s-email-resent-text phw-g-text-small-primary phw-d-block phw-mt-2",
                    tabindex: "-1",
                    "data-ps": "61f36d81-span-84"
                }, [e.createTextVNode(e.toDisplayString((Xt = e.unref(d)) == null ? void 0 : Xt.emailResendSuccessText), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.unref(T) === "resetPasswordLink" ? e.withDirectives((e.openBlock(), e.createElementBlock("div", ur, [e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                    type: "button",
                    class: "signInBtn phw-btn phw-g-btn-secondary",
                    "data-ph-at-id": "signin-link",
                    "data-ps": "61f36d81-button-5",
                    onClick: h[15] || (h[15] = S => e.unref(k)("signIn"))
                }, [e.createTextVNode(e.toDisplayString((se = (Qt = e.unref(d)) == null ? void 0 : Qt.returnSigninText) == null ? void 0 : se.text), 1)])), [
                    [e.unref(t.vPhwSetting)],
                    [e.unref(t.vPhwTrack), "return_to_signIn_click"]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)])), [
                    [e.unref(t.vPhwSetting)]
                ]), e.unref(J) === "signUp" ? e.withDirectives((e.openBlock(), e.createElementBlock("div", Dr, [e.withDirectives(e.createElementVNode("div", br, null, 512), [
                    [e.vShow, e.unref(et)],
                    [e.unref(t.vPhwSetting)]
                ]), e.unref(pe) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", Nr, [e.unref(R) === e.unref(Ee) ? e.withDirectives((e.openBlock(), e.createElementBlock("h2", Tr, [e.createTextVNode(e.toDisplayString((Ke = e.unref(d)) == null ? void 0 : Ke.createAccountPopUpHeading), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.unref(R) === e.unref(y) ? e.withDirectives((e.openBlock(), e.createElementBlock("h2", xr, [e.createTextVNode(e.toDisplayString((We = e.unref(d)) == null ? void 0 : We.oneTimeLoginPopUpHeading), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.unref(R) === e.unref(y) ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Vr, [e.createTextVNode(e.toDisplayString((vt = e.unref(d)) == null ? void 0 : vt.oneTimeLoginPopupSubHeading), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("div", Lr, [e.withDirectives((e.openBlock(), e.createElementBlock("div", Cr, [e.withDirectives((e.openBlock(), e.createElementBlock("div", Ir, [e.withDirectives((e.openBlock(), e.createElementBlock("label", Mr, [e.createTextVNode(e.toDisplayString((ed = e.unref(d)) == null ? void 0 : ed.signInEmailFormLabel), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", Ar, [e.withDirectives((e.openBlock(), e.createElementBlock("div", Or, [e.withDirectives(e.createElementVNode("input", {
                    id: "createEmail",
                    ref_key: "loginEmail",
                    ref: w,
                    "onUpdate:modelValue": h[16] || (h[16] = S => e.unref(x).email = S),
                    "aria-label": "Enter email",
                    class: e.normalizeClass([e.unref(o).email.error ? p.$style["error-input"] : "", "phw-g-text-field-style-1 phw-icon-right phw-input-icon-pr-lg"]),
                    placeholder: (Te = e.unref(d)) == null ? void 0 : Te.createAccountEmailFormPlaceHolder,
                    type: "email",
                    "aria-describedby": "errorCreateEmail",
                    autocomplete: "email",
                    "aria-required": "true",
                    "data-ph-at-id": "input",
                    "data-ph-at-flow": "create-acc-email",
                    "data-ps": "61f36d81-input-4",
                    onKeyup: h[17] || (h[17] = S => e.unref(m)(!0)),
                    onChange: h[18] || (h[18] = S => e.unref(u)(!1, !0))
                }, null, 42, Rr), [
                    [e.vModelText, e.unref(x).email],
                    [e.unref(t.vPhwSetting)]
                ]), e.unref(o).email.error && !e.unref(g) ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Fr, [e.unref(o).email.error && !e.unref(g) ? e.withDirectives((e.openBlock(), e.createElementBlock("svg", {
                    key: 0,
                    class: e.normalizeClass([p.$style["error-icon"], "phw-g-icon-failure"]),
                    fill: "currentcolor",
                    "aria-hidden": "true",
                    "data-ph-at-id": "email-error-icon",
                    "data-ps": "61f36d81-svg-10"
                }, [e.withDirectives(e.createElementVNode("use", Ur, null, 512), [
                    [e.unref(t.vPhwSetting)]
                ])], 2)), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.unref(g) ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Gr, [e.unref(g) ? e.withDirectives((e.openBlock(), e.createElementBlock("svg", {
                    key: 0,
                    class: e.normalizeClass([p.$style["verified-credential"], "phw-g-icon-success"]),
                    fill: "currentcolor",
                    "aria-hidden": "true",
                    "data-ph-at-id": "email-success-icon",
                    "data-ps": "61f36d81-svg-11"
                }, [e.withDirectives(e.createElementVNode("use", Hr, null, 512), [
                    [e.unref(t.vPhwSetting)]
                ])], 2)), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)])), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", zr, [e.unref(o).email.error ? e.withDirectives((e.openBlock(), e.createElementBlock("div", Kr, [e.unref(o).email.error && e.unref(o).email.code === "E101" && !e.unref(g) && !e.unref(o).email.srHidden ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Wr, [e.createTextVNode(e.toDisplayString((td = e.unref(d)) == null ? void 0 : td.errorMessageEmptyEmail), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.unref(o).email.error && e.unref(o).email.code === "E102" && !e.unref(g) && !e.unref(o).email.srHidden ? e.withDirectives((e.openBlock(), e.createElementBlock("span", jr, [e.createTextVNode(e.toDisplayString((je = e.unref(d)) == null ? void 0 : je.errorMessageInvalidEmail), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.unref(o).email.error && e.unref(o).email.code === "E101" && !e.unref(g) && e.unref(o).email.srHidden ? e.withDirectives((e.openBlock(), e.createElementBlock("span", qr, [e.createTextVNode(e.toDisplayString((Pt = e.unref(d)) == null ? void 0 : Pt.errorMessageEmptyEmail), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.unref(o).email.error && e.unref(o).email.code === "E102" && !e.unref(g) && e.unref(o).email.srHidden ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Zr, [e.createTextVNode(e.toDisplayString((dd = e.unref(d)) == null ? void 0 : dd.errorMessageInvalidEmail), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.unref(o).email.error && e.unref(o).email.code === "E103" ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Jr, null, 512)), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.unref(o).email.error && e.unref(o).email.code === "E104" ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Yr, [e.createTextVNode(e.toDisplayString((qe = e.unref(d)) == null ? void 0 : qe.emailInUseError) + " ", 1), e.withDirectives((e.openBlock(), e.createElementBlock("a", {
                    class: "create-account",
                    href: "javascript:void(0);",
                    role: "button",
                    "data-ph-at-id": "already-exist-email-sign-in-button",
                    "data-ps": "61f36d81-a-11",
                    onClick: h[19] || (h[19] = S => e.unref(k)("signIn"))
                }, [e.createTextVNode(e.toDisplayString((xe = (C = e.unref(d)) == null ? void 0 : C.signInButton) == null ? void 0 : xe.text), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)])), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ]), e.unref(R) === e.unref(Ee) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", Xr, [e.withDirectives((e.openBlock(), e.createElementBlock("label", Qr, [e.createTextVNode(e.toDisplayString((ad = e.unref(d)) == null ? void 0 : ad.createAccountFormLabel), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", vr, [e.withDirectives((e.openBlock(), e.createElementBlock("div", es, [e.withDirectives(e.createElementVNode("input", {
                    id: "createPassword",
                    ref_key: "loginPassword",
                    ref: B,
                    "onUpdate:modelValue": h[20] || (h[20] = S => e.unref(x).password = S),
                    "aria-describedby": e.unref(o).password.error ? "errorCreatePasswordSrOnly" : "errorCreatePassword",
                    "aria-required": "true",
                    autocomplete: "new-password",
                    "aria-label": "Enter Password",
                    class: e.normalizeClass(["phw-g-text-field-style-1 phw-icon-right phw-input-icon-pr-lg", e.unref(o).password.error ? p.$style["error-input"] : ""]),
                    placeholder: (st = e.unref(d)) == null ? void 0 : st.signUpPasswordFormPlaceHolder,
                    type: e.unref(b) ? "text" : "password",
                    "data-ph-at-id": "input",
                    "data-ph-at-flow": "create-acc-password",
                    "data-ps": "61f36d81-input-5",
                    onKeyup: h[21] || (h[21] = S => e.unref(z)()),
                    onChange: h[22] || (h[22] = S => e.unref(j)())
                }, null, 42, ts), [
                    [e.vModelDynamic, e.unref(x).password],
                    [e.unref(t.vPhwSetting)]
                ]), e.unref(G) ? e.withDirectives((e.openBlock(), e.createElementBlock("span", ds, [e.unref(G) ? e.withDirectives((e.openBlock(), e.createElementBlock("svg", {
                    key: 0,
                    class: e.normalizeClass([p.$style["verified-credential"], "phw-g-icon-success"]),
                    fill: "currentcolor",
                    "aria-hidden": "true",
                    "data-ph-at-id": "password-success-icon",
                    "data-ps": "61f36d81-svg-12"
                }, [e.withDirectives(e.createElementVNode("use", as, null, 512), [
                    [e.unref(t.vPhwSetting)]
                ])], 2)), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.unref(o).password.error && !e.unref(G) ? e.withDirectives((e.openBlock(), e.createElementBlock("span", ns, [e.unref(o).password.error && !e.unref(G) ? e.withDirectives((e.openBlock(), e.createElementBlock("svg", {
                    key: 0,
                    class: e.normalizeClass([p.$style["error-icon"], "phw-g-icon-failure"]),
                    fill: "currentcolor",
                    "aria-hidden": "true",
                    "data-ph-at-id": "password-error-icon",
                    "data-ps": "61f36d81-svg-13"
                }, [e.withDirectives(e.createElementVNode("use", is, null, 512), [
                    [e.unref(t.vPhwSetting)]
                ])], 2)), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    class: e.normalizeClass(p.$style["pswrd-visibility"] + " " + (e.unref(o).password.error || e.unref(G) ? p.$style["error-password-icon"] : "")),
                    "data-ps": "61f36d81-div-57"
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                    type: "button",
                    class: e.normalizeClass(["phw-d-flex phw-btn phw-g-btn-link", p.$style["pswrd-visibility-btn"]]),
                    "aria-label": e.unref(b) ? "Hide password" : "Show password",
                    "data-ph-at-id": "eye-icon-button",
                    "data-ps": "61f36d81-button-6",
                    onClick: h[23] || (h[23] = S => e.unref(N)())
                }, [e.unref(b) || !e.unref(b) ? e.withDirectives((e.openBlock(), e.createElementBlock("span", ss, [e.unref(b) ? e.withDirectives((e.openBlock(), e.createElementBlock("svg", {
                    key: 0,
                    class: e.normalizeClass([p.$style["icon-eye"], "phw-g-icon-dark"]),
                    fill: "currentcolor",
                    "aria-hidden": "true",
                    "data-ph-at-id": "eye-icon-open",
                    "data-ps": "61f36d81-svg-14"
                }, [e.withDirectives(e.createElementVNode("use", os, null, 512), [
                    [e.unref(t.vPhwSetting)]
                ])], 2)), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.unref(b) ? e.createCommentVNode("", !0) : e.withDirectives((e.openBlock(), e.createElementBlock("svg", {
                    key: 1,
                    class: e.normalizeClass([p.$style["icon-eye"], "phw-g-icon-dark"]),
                    fill: "currentcolor",
                    "aria-hidden": "true",
                    "data-ph-at-id": "eye-icon-close",
                    "data-ps": "61f36d81-svg-15"
                }, [e.withDirectives(e.createElementVNode("use", ls, null, 512), [
                    [e.unref(t.vPhwSetting)]
                ])], 2)), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)], 10, rs)), [
                    [e.unref(t.vPhwSetting)]
                ])], 2)), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", cs, [e.unref(b) && e.unref(v) ? e.withDirectives((e.openBlock(), e.createElementBlock("span", $s, [e.createTextVNode(e.toDisplayString((ot = e.unref(d)) == null ? void 0 : ot.passwordVisibleSrOnly), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), !e.unref(b) && e.unref(v) ? e.withDirectives((e.openBlock(), e.createElementBlock("span", fs, [e.createTextVNode(e.toDisplayString((_t = e.unref(d)) == null ? void 0 : _t.passwordInVisibleSrOnly), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)])), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", ps, [e.unref(At) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", hs, [e.unref(P).passwordLength.hasError || e.unref(P).numeric.hasError || e.unref(P).lowerCase.hasError || e.unref(P).upperCase.hasError ? e.withDirectives((e.openBlock(), e.createElementBlock("span", gs, [e.createTextVNode(e.toDisplayString((nd = e.unref(d)) == null ? void 0 : nd.errorSrOnly), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.unref(P).passwordLength.hasError || e.unref(P).numeric.hasError || e.unref(P).lowerCase.hasError || e.unref(P).upperCase.hasError ? e.withDirectives((e.openBlock(), e.createElementBlock("span", ws, [e.createTextVNode(e.toDisplayString((Et = e.unref(d)) == null ? void 0 : Et.passwordErrorRequirementText), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.unref(P).passwordLength.hasError ? e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                    key: 2,
                    class: e.normalizeClass(e.unref(P).passwordLength.hasError ? "error-msg" : ""),
                    "data-ps": "61f36d81-span-56"
                }, [e.createTextVNode(e.toDisplayString((lt = e.unref(d)) == null ? void 0 : lt.createAccErrorStatement2), 1)], 2)), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.unref(P).numeric.hasError ? e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                    key: 3,
                    class: e.normalizeClass(e.unref(P).numeric.hasError ? "error-msg" : ""),
                    "data-ps": "61f36d81-span-57"
                }, [e.createTextVNode(e.toDisplayString((id = e.unref(d)) == null ? void 0 : id.createAccErrorStatement3), 1)], 2)), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.unref(P).lowerCase.hasError ? e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                    key: 4,
                    class: e.normalizeClass(e.unref(P).lowerCase.hasError ? "error-msg" : ""),
                    "data-ps": "61f36d81-span-58"
                }, [e.createTextVNode(e.toDisplayString((ct = e.unref(d)) == null ? void 0 : ct.createAccErrorStatement4), 1)], 2)), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.unref(P).upperCase.hasError ? e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                    key: 5,
                    class: e.normalizeClass(e.unref(P).upperCase.hasError ? "error-msg" : ""),
                    "data-ps": "61f36d81-span-59"
                }, [e.createTextVNode(e.toDisplayString((ge = e.unref(d)) == null ? void 0 : ge.createAccErrorStatement5), 1)], 2)), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.unref(At) ? e.createCommentVNode("", !0) : e.withDirectives((e.openBlock(), e.createElementBlock("div", ks, [e.unref(P).passwordLength.hasError || e.unref(P).numeric.hasError || e.unref(P).lowerCase.hasError || e.unref(P).upperCase.hasError ? e.withDirectives((e.openBlock(), e.createElementBlock("span", ys, [e.createTextVNode(e.toDisplayString(($t = e.unref(d)) == null ? void 0 : $t.errorSrOnly), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.unref(P).passwordLength.hasError || e.unref(P).numeric.hasError || e.unref(P).lowerCase.hasError || e.unref(P).upperCase.hasError ? e.withDirectives((e.openBlock(), e.createElementBlock("span", ms, [e.createTextVNode(e.toDisplayString((rd = e.unref(d)) == null ? void 0 : rd.passwordErrorRequirementText), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.unref(P).passwordLength.hasError ? e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                    key: 2,
                    class: e.normalizeClass(e.unref(P).passwordLength.hasError ? "error-msg" : ""),
                    "data-ps": "61f36d81-span-56"
                }, [e.createTextVNode(e.toDisplayString((Ze = e.unref(d)) == null ? void 0 : Ze.createAccErrorStatement2), 1)], 2)), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.unref(P).numeric.hasError ? e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                    key: 3,
                    class: e.normalizeClass(e.unref(P).numeric.hasError ? "error-msg" : ""),
                    "data-ps": "61f36d81-span-57"
                }, [e.createTextVNode(e.toDisplayString((Pe = e.unref(d)) == null ? void 0 : Pe.createAccErrorStatement3), 1)], 2)), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.unref(P).lowerCase.hasError ? e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                    key: 4,
                    class: e.normalizeClass(e.unref(P).lowerCase.hasError ? "error-msg" : ""),
                    "data-ps": "61f36d81-span-58"
                }, [e.createTextVNode(e.toDisplayString((Bt = e.unref(d)) == null ? void 0 : Bt.createAccErrorStatement4), 1)], 2)), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.unref(P).upperCase.hasError ? e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                    key: 5,
                    class: e.normalizeClass(e.unref(P).upperCase.hasError ? "error-msg" : ""),
                    "data-ps": "61f36d81-span-59"
                }, [e.createTextVNode(e.toDisplayString((sd = e.unref(d)) == null ? void 0 : sd.createAccErrorStatement5), 1)], 2)), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)])), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", Ss, [e.createTextVNode(e.toDisplayString((ut = e.unref(d)) == null ? void 0 : ut.createAccErrorStatement1) + " ", 1), e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                    "data-ph-at-id": "password-error-msg-1",
                    class: e.normalizeClass(e.unref(P).passwordLength.hasError ? p.$style["error-msg"] : ""),
                    "data-ps": "61f36d81-span-60"
                }, [e.createTextVNode(e.toDisplayString((Dt = e.unref(d)) == null ? void 0 : Dt.createAccErrorStatement2), 1)], 2)), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                    "data-ph-at-id": "password-error-msg-2",
                    class: e.normalizeClass(e.unref(P).numeric.hasError ? p.$style["error-msg"] : ""),
                    "data-ps": "61f36d81-span-61"
                }, [e.createTextVNode(e.toDisplayString((bt = e.unref(d)) == null ? void 0 : bt.createAccErrorStatement3), 1)], 2)), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                    "data-ph-at-id": "password-error-msg-3",
                    class: e.normalizeClass(e.unref(P).lowerCase.hasError ? p.$style["error-msg"] : ""),
                    "data-ps": "61f36d81-span-62"
                }, [e.createTextVNode(e.toDisplayString((Nt = e.unref(d)) == null ? void 0 : Nt.createAccErrorStatement4), 1)], 2)), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                    "data-ph-at-id": "password-error-msg-4",
                    class: e.normalizeClass(e.unref(P).upperCase.hasError ? p.$style["error-msg"] : ""),
                    "data-ps": "61f36d81-span-63"
                }, [e.createTextVNode(e.toDisplayString((od = e.unref(d)) == null ? void 0 : od.createAccErrorStatement5), 1)], 2)), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)])), [
                    [e.unref(t.vPhwSetting)]
                ]), e.unref(de) && !(e.unref(I) && e.unref(I).length) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", Ps, [e.withDirectives((e.openBlock(), e.createElementBlock("label", _s, [e.withDirectives(e.createElementVNode("input", {
                    id: "privacyDataConsent",
                    "onUpdate:modelValue": h[24] || (h[24] = S => e.isRef(Z) ? Z.value = S : null),
                    type: "checkbox",
                    "aria-checked": e.unref(Z) ? "true" : "false",
                    role: "checkbox",
                    "data-ph-at-id": "checkbox-button",
                    "data-ph-at-type": "privacy-data-consent",
                    "aria-label": "I have read and agree to the Privacy Policy.",
                    class: e.normalizeClass(p.$style["stay-check-box"]),
                    "data-ps": "61f36d81-input-6",
                    onChange: h[25] || (h[25] = S => e.unref(re)())
                }, null, 42, Es), [
                    [e.vModelCheckbox, e.unref(Z)],
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", Bs, [e.createTextVNode(e.toDisplayString(((ld = e.unref(d)) == null ? void 0 : ld.privacyPolicyCheckboxText) || "I have read and agree to the ") + " ", 1), e.withDirectives((e.openBlock(), e.createElementBlock("a", us, [e.createTextVNode(e.toDisplayString((cd = (ft = e.unref(d)) == null ? void 0 : ft.privacyPolicy) == null ? void 0 : cd.text), 1)])), [
                    [e.unref(t.vPhwSetting)],
                    [e.unref(t.vPhwHref), ((Tt = ($d = e.unref(d)) == null ? void 0 : $d.privacyPolicy) == null ? void 0 : Tt.href) || "javascript:void(0);"]
                ]), e.createTextVNode(e.toDisplayString((fd = e.unref(d)) == null ? void 0 : fd.privacyPolicyCheckboxSeparatorText) + " ", 1), e.withDirectives((e.openBlock(), e.createElementBlock("a", Ds, [e.createTextVNode(e.toDisplayString((xt = (pd = e.unref(d)) == null ? void 0 : pd.termsOfUseText) == null ? void 0 : xt.text), 1)])), [
                    [e.unref(t.vPhwSetting)],
                    [e.unref(t.vPhwHref), ((Vt = (hd = e.unref(d)) == null ? void 0 : hd.termsOfUseText) == null ? void 0 : Vt.href) || "javascript:void(0)"]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.unref(I) && e.unref(I).length && e.unref(I).length < 3 ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    key: 1,
                    "data-ph-at-id": "consent-container",
                    "data-ph-at-count": (Lt = e.unref(I)) == null ? void 0 : Lt.length,
                    class: "phw-flex-wrap phw-mt-2 phw-mb-2 phw-d-flex phw-gap-2 phw-flex-column",
                    "data-ph-component-name": "pii-consent-data",
                    "data-ps": "61f36d81-div-79"
                }, [(gd = e.unref(d)) != null && gd.piiconsentInfoHeading ? e.withDirectives((e.openBlock(), e.createElementBlock("div", Ns, [e.createTextVNode(e.toDisplayString((Je = e.unref(d)) == null ? void 0 : Je.piiconsentInfoHeading), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), (e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(e.unref(I), (S, bd) => e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    key: S.type,
                    class: "phw-form-check",
                    "data-ps": "61f36d81-div-80"
                }, [e.withDirectives(e.createElementVNode("input", {
                    id: "pii-consent-checkbox-" + bd,
                    "onUpdate:modelValue": u1 => S.isChecked = u1,
                    "aria-invalid": !S.optional && e.unref(ee) ? "true" : void 0,
                    type: "checkbox",
                    class: "phw-form-check-group",
                    "data-ph-at-index": bd,
                    "data-ph-at-id": "consent-check-box",
                    "aria-checked": S.isChecked ? "true" : "false",
                    "aria-required": !S.optional,
                    "data-ps": "61f36d81-input-8"
                }, null, 8, Ts), [
                    [e.vModelCheckbox, S.isChecked],
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("label", {
                    for: "pii-consent-checkbox-" + bd,
                    class: "phw-mb-0 p1 phw-check-label",
                    "data-ps": "61f36d81-label-8"
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Vs, [e.withDirectives(e.createElementVNode("span", {
                    class: "phw-g-text-default-dark",
                    "data-ps": "61f36d81-span-80",
                    innerHTML: S.isPrivacyConsent && S.consentText ? S.consentText : e.unref(d)[S.type + "Text"]
                }, null, 8, Ls), [
                    [e.unref(t.vPhwSetting)]
                ]), S.optional ? e.createCommentVNode("", !0) : e.withDirectives((e.openBlock(), e.createElementBlock("span", Cs, Is)), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ])], 8, xs)), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ])), 128)), (wd = e.unref(d)) != null && wd.piiconsentInfoDescription ? e.withDirectives((e.openBlock(), e.createElementBlock("div", Ms, [e.createTextVNode(e.toDisplayString((Ct = e.unref(d)) == null ? void 0 : Ct.piiconsentInfoDescription), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)], 8, bs)), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.unref(I) && e.unref(I).length && e.unref(I).length >= 3 ? e.withDirectives((e.openBlock(), e.createElementBlock("div", As, [e.withDirectives(e.createVNode(e.unref(cn), {
                    "widget-context": e.unref(le),
                    content: (kd = e.unref(d)) == null ? void 0 : kd.dataConsentWdgt,
                    "sign-up-step": e.unref(R),
                    "data-ps": "61f36d81-consentpopupdefaultdefaultv1-1"
                }, null, 8, ["widget-context", "content", "sign-up-step"]), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("div", Os, [e.unref(Y) && e.unref(de) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", Rs, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Fs, [e.createTextVNode(e.toDisplayString((i = e.unref(d)) == null ? void 0 : i.privacyPolicyCheckboxErrorText), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)])), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    "aria-live": e.unref(Me) || e.unref(I).length >= 3 ? void 0 : "polite",
                    "aria-atomic": e.unref(Me) || e.unref(I).length >= 3 ? void 0 : !0,
                    role: e.unref(Me) || e.unref(I).length >= 3 ? void 0 : "alert",
                    "data-ps": "61f36d81-div-67"
                }, [e.unref(ee) ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Gs, [e.createTextVNode(e.toDisplayString((r = e.unref(d)) == null ? void 0 : r.piiConsentError), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)], 8, Us)), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    class: e.normalizeClass(p.$style["form-group-row"]),
                    "data-ps": "61f36d81-div-68"
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", Hs, [e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                    type: "button",
                    class: "phw-btn phw-g-btn-primary phw-width-4",
                    "data-ph-at-id": "submit-button",
                    "data-ps": "61f36d81-button-7",
                    onClick: h[26] || (h[26] = S => e.unref(R) === e.unref(y) ? e.unref(Qe)(!0) : e.unref(M)())
                }, [e.createTextVNode(e.toDisplayString(e.unref(R) === e.unref(y) ? (E = (c = e.unref(d)) == null ? void 0 : c.oneTimeLoginButton) == null ? void 0 : E.text : (_ = ($ = e.unref(d)) == null ? void 0 : $.createAccountButton) == null ? void 0 : _.text), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ])], 2)), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("div", zs, [e.unref(L) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", Ks, [e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                    ref_key: "resendCloseButton",
                    ref: l,
                    class: e.normalizeClass(["ph-a11y-email-triggred-close-btn close phw-modal-close", p.$style["close-popup"]]),
                    "aria-label": (Ve = e.unref(d)) == null ? void 0 : Ve.closePopupButtonAriaLabel,
                    "data-ph-at-id": "close-link",
                    "data-ps": "61f36d81-button-2",
                    onClick: h[27] || (h[27] = S => e.unref(pt)())
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", js, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", {
                    fill: "currentcolor",
                    "aria-hidden": "true",
                    class: e.normalizeClass(p.$style["close-btn"]),
                    "data-ps": "61f36d81-svg-3"
                }, [e.withDirectives(e.createElementVNode("use", qs, null, 512), [
                    [e.unref(t.vPhwSetting)]
                ])], 2)), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ])], 10, Ws)), [
                    [e.unref(t.vPhwSetting)],
                    [e.unref(t.vPhwTrack), "modal_close_click"]
                ]), e.unref(fe) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", Zs, [e.unref(R) === e.unref(y) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", Js, [e.withDirectives(e.createElementVNode("h2", {
                    "ally-label-heading": "",
                    class: e.normalizeClass([p.$style["email-success-head"], "phw-text-l phw-mb-3 phw-mb-xl-3 phw-mb-sm-3 phw-text-c phw-g-h2-card-title-primary-default"]),
                    "data-ps": "61f36d81-h2-6",
                    innerHTML: e.unref(Pd)((yd = e.unref(d)) == null ? void 0 : yd.oneTimeLoginSuccessHeading, {
                        emailId: e.unref(x).email
                    })
                }, null, 10, Ys), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", Xs, [e.createTextVNode(e.toDisplayString((Fd = e.unref(d)) == null ? void 0 : Fd.oneTimeLoginSuccessSubHeading), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", Qs, [e.withDirectives((e.openBlock(), e.createElementBlock("span", vs, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", {
                    class: e.normalizeClass(p.$style["email-success-fail"]),
                    fill: "currentcolor",
                    "aria-hidden": "true",
                    "data-ph-at-id": "email-success-icon",
                    "data-ps": "61f36d81-svg-20"
                }, [e.withDirectives(e.createElementVNode("use", e1, null, 512), [
                    [e.unref(t.vPhwSetting)]
                ])], 2)), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", t1, [e.createTextVNode(e.toDisplayString((Ud = e.unref(d)) == null ? void 0 : Ud.oneTimeLoginSuccessText), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.unref(fe) ? e.createCommentVNode("", !0) : e.withDirectives((e.openBlock(), e.createElementBlock("div", d1, [e.unref(R) === e.unref(y) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", a1, [e.withDirectives(e.createElementVNode("h2", {
                    "ally-label-heading": "",
                    class: e.normalizeClass(["phw-text-l phw-text-c phw-g-h2-card-title-primary-default", p.$style["email-success-head"]]),
                    "data-ps": "61f36d81-h2-7",
                    innerHTML: e.unref(Pd)((Gd = e.unref(d)) == null ? void 0 : Gd.oneTimeLoginFailedHeading, {
                        emailId: e.unref(x).email
                    })
                }, null, 10, n1), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", i1, [e.withDirectives((e.openBlock(), e.createElementBlock("span", r1, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", {
                    fill: "currentcolor",
                    class: e.normalizeClass(p.$style["email-success-fail"]),
                    "aria-hidden": "true",
                    "data-ph-at-id": "email-success-icon",
                    "data-ps": "61f36d81-svg-21"
                }, [e.withDirectives(e.createElementVNode("use", s1, null, 512), [
                    [e.unref(t.vPhwSetting)]
                ])], 2)), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", o1, [e.createTextVNode(e.toDisplayString((Hd = e.unref(d)) == null ? void 0 : Hd.oneTimeLoginFailedText), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)])), [
                    [e.unref(t.vPhwSetting)]
                ]), e.unref(ne) ? e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                    key: 2,
                    ref_key: "resendEmailSucessText",
                    ref: F,
                    class: "phw-s-email-resent-text phw-g-text-default-semibold-primary phw-d-flex phw-align-items-center phw-justify-content-start phw-mb-1 phw-mt-1",
                    tabindex: "-1",
                    "data-ps": "61f36d81-span-87"
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", l1, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", c1, [e.withDirectives(e.createElementVNode("use", $1, null, 512), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ]), e.createTextVNode(" " + e.toDisplayString((zd = e.unref(d)) == null ? void 0 : zd.emailResendSuccessText), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.unref(R) === e.unref(y) ? e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                    key: 3,
                    "aria-label": (Wd = (Kd = e.unref(d)) == null ? void 0 : Kd.oneTimeLoginResendEmailBtn) == null ? void 0 : Wd.ariaLabel,
                    disabled: !e.unref(Xe),
                    class: "phw-btn phw-g-btn-secondary phw-width-4 phw-mt-3 phw-s-resend-btn",
                    "data-ps": "61f36d81-button-9",
                    onClick: h[28] || (h[28] = S => e.unref(ve)())
                }, [e.createTextVNode(e.toDisplayString((qd = (jd = e.unref(d)) == null ? void 0 : jd.oneTimeLoginResendEmailBtn) == null ? void 0 : qd.text), 1)], 8, f1)), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)])), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.unref(J) === "signIn" && e.unref(T) === "signIn" || e.unref(J) === "signUp" && !e.unref(L) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", p1, [e.withDirectives(e.createVNode(Ha, {
                    piiconsent: e.unref($e),
                    "profile-login-flow": e.unref(J),
                    "seperator-text": (Zd = e.unref(d)) == null ? void 0 : Zd.seperatorText,
                    "candidate-login": !0,
                    content: e.unref(d).phwSocialconnectDefaultDefaultV1,
                    "data-ps": "61f36d81-socialconnect-1"
                }, null, 8, ["piiconsent", "profile-login-flow", "seperator-text", "content"]), [
                    [e.unref(t.vPhwSetting)]
                ]), e.unref(J) === "signIn" ? e.withDirectives((e.openBlock(), e.createElementBlock("div", h1, [e.withDirectives((e.openBlock(), e.createElementBlock("span", g1, [e.createTextVNode(e.toDisplayString((Jd = e.unref(d)) == null ? void 0 : Jd.createAccountButtonLabel), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("a", {
                    class: e.normalizeClass([p.$style["sign-in-up-link"], "phw-ml-1 phw-btn phw-g-btn-link"]),
                    href: "javascript:void(0);",
                    role: "button",
                    "data-ps": "61f36d81-a-14",
                    "data-ph-at-id": "switch-to-sign-up",
                    onClick: h[29] || (h[29] = S => e.unref(k)("signUp"))
                }, [e.createTextVNode(e.toDisplayString((Xd = (Yd = e.unref(d)) == null ? void 0 : Yd.createAccountButton) == null ? void 0 : Xd.text), 1)], 2)), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.unref(J) === "signUp" && e.unref(R) === e.unref(Ee) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", w1, [e.withDirectives((e.openBlock(), e.createElementBlock("span", k1, [e.createTextVNode(e.toDisplayString((Qd = e.unref(d)) == null ? void 0 : Qd.signInButtonLabel), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("a", {
                    class: e.normalizeClass([p.$style["sign-in-up-link"], "phw-btn phw-g-btn-link phw-ml-1"]),
                    "data-ph-at-id": "sign-up-button",
                    href: "javascript:void(0);",
                    role: "button",
                    "data-ps": "61f36d81-a-15",
                    onClick: h[30] || (h[30] = S => e.unref(k)("signIn"))
                }, [e.createTextVNode(e.toDisplayString((ea = (vd = e.unref(d)) == null ? void 0 : vd.signInButton) == null ? void 0 : ea.text), 1)], 2)), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("div", y1, [e.withDirectives((e.openBlock(), e.createElementBlock("a", {
                    class: e.normalizeClass(["phw-pt-0 phw-pb-0 phw-pl-0 phw-pr-2 phw-g-btn-link-candidate-login", p.$style.termsLink]),
                    target: "_blank",
                    "aria-label": ((da = (ta = e.unref(d)) == null ? void 0 : ta.termsOfUseText) == null ? void 0 : da.ariaLabel) || "",
                    "data-ps": "61f36d81-a-16",
                    "data-ph-at-id": "terms-of-use"
                }, [e.createTextVNode(e.toDisplayString((na = (aa = e.unref(d)) == null ? void 0 : aa.termsOfUseText) == null ? void 0 : na.text), 1)], 10, m1)), [
                    [e.unref(t.vPhwSetting)],
                    [e.unref(t.vPhwHref), ((ra = (ia = e.unref(d)) == null ? void 0 : ia.termsOfUseText) == null ? void 0 : ra.href) || "javascript:void(0)"]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("a", {
                    class: e.normalizeClass(["phw-g-btn-link-candidate-login phw-pl-2 phw-pt-0 phw-pb-0 phw-pr-0", p.$style.privacyPolicyLink]),
                    target: "_blank",
                    "aria-label": ((oa = (sa = e.unref(d)) == null ? void 0 : sa.privacyPolicy) == null ? void 0 : oa.ariaLabel) || "",
                    "data-ps": "61f36d81-a-17",
                    "data-ph-at-id": "privacy-policy"
                }, [e.createTextVNode(e.toDisplayString((ca = (la = e.unref(d)) == null ? void 0 : la.privacyPolicy) == null ? void 0 : ca.text), 1)], 10, S1)), [
                    [e.unref(t.vPhwSetting)],
                    [e.unref(t.vPhwHref), ((fa = ($a = e.unref(d)) == null ? void 0 : $a.privacyPolicy) == null ? void 0 : fa.href) || "javascript:void(0)"]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)])), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("div", P1, [e.unref(X) ? e.withDirectives((e.openBlock(), e.createElementBlock("span", _1, [e.createTextVNode(e.toDisplayString((pa = e.unref(d)) == null ? void 0 : pa.loggedInText), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)])), [
                    [e.unref(t.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", E1, [e.unref(Ft) ? e.withDirectives((e.openBlock(), e.createElementBlock("span", B1, [e.createTextVNode(e.toDisplayString((ha = e.unref(d)) == null ? void 0 : ha.registeredText), 1)])), [
                    [e.unref(t.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)])), [
                    [e.unref(t.vPhwSetting)]
                ])])), [
                    [e.unref(t.vPhwSetting)]
                ])
            }
        }
    }), [
        ["__cssModules", {
            $style: {
                "c-sign-up-link": "_c-sign-up-link_ymzd1_3",
                "email-success-head": "_email-success-head_ymzd1_29",
                termsLink: "_termsLink_ymzd1_35",
                "email-success-fail": "_email-success-fail_ymzd1_41",
                "user-detail-listitem": "_user-detail-listitem_ymzd1_49",
                "candidate-lists": "_candidate-lists_ymzd1_51",
                "close-popup": "_close-popup_ymzd1_59",
                "close-btn": "_close-btn_ymzd1_77",
                "signin-signup-link": "_signin-signup-link_ymzd1_87",
                "user-avatar-initials": "_user-avatar-initials_ymzd1_97",
                "user-name": "_user-name_ymzd1_121",
                "logged-in-drop-down": "_logged-in-drop-down_ymzd1_137",
                "logged-in-user-name": "_logged-in-user-name_ymzd1_169",
                "logged-in-user-details": "_logged-in-user-details_ymzd1_183",
                "canditate-action-block": "_canditate-action-block_ymzd1_195",
                "drop-down-user-name": "_drop-down-user-name_ymzd1_201",
                "user-actions": "_user-actions_ymzd1_217",
                "user-actions-listitem": "_user-actions-listitem_ymzd1_225",
                "verified-credential": "_verified-credential_ymzd1_233",
                "error-icon": "_error-icon_ymzd1_235",
                "pswrd-visibility": "_pswrd-visibility_ymzd1_251",
                "pswrd-visibility-btn": "_pswrd-visibility-btn_ymzd1_265",
                "error-password-icon": "_error-password-icon_ymzd1_275",
                "icon-eye": "_icon-eye_ymzd1_283",
                "resent-btn": "_resent-btn_ymzd1_291",
                "resend-btn-disabled": "_resend-btn-disabled_ymzd1_307",
                "error-input": "_error-input_ymzd1_327",
                "error-msg": "_error-msg_ymzd1_335",
                "stay-and-forgot-pass-block": "_stay-and-forgot-pass-block_ymzd1_345",
                "content-block": "_content-block_ymzd1_355",
                "mobile-logged-in-user-name": "_mobile-logged-in-user-name_ymzd1_363",
                "user-details": "_user-details_ymzd1_385",
                heading: "_heading_ymzd1_401",
                "cd-sign-up-link": "_cd-sign-up-link_ymzd1_409",
                "modal-body-wrapper": "_modal-body-wrapper_ymzd1_417",
                "popup-body": "_popup-body_ymzd1_431",
                "sign-out-btn": "_sign-out-btn_ymzd1_455"
            }
        }]
    ])
});