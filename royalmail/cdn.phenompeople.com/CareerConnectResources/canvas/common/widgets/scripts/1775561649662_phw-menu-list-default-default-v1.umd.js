(function(e, t) {
    typeof exports == "object" && typeof module < "u" ? module.exports = t(require("vue"), require("ph-common/ph-common")) : typeof define == "function" && define.amd ? define(["vue", "ph-common/ph-common"], t) : (e = typeof globalThis < "u" ? globalThis : e || self, e.PhwMenuListDefaultDefaultV1 = t(e.Vue, e.phCommon))
})(this, function(e, t) {
    "use strict";
    var R1 = Object.defineProperty;
    var H1 = (e, t, et) => t in e ? R1(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: et
    }) : e[t] = et;
    var ce = (e, t, et) => (H1(e, typeof t != "symbol" ? t + "" : t, et), et);

    function et(i, a, n, r, w, s, h) {
        const x = "validateJwtToken",
            G = "mergedProfileV2",
            V = "candidateLogin",
            D = "candidateRegister",
            H = "oneTimeLoginLink",
            m = "candidateResetPassword",
            I = "candidateResetPasswordLink",
            c = "validateOtp",
            F = "eagerLoadFyfSession",
            z = "getPiiConsentConfig",
            q = "getPrivacyConsentsConfig",
            ee = "getCanvasMasterBundle",
            v = "signIn",
            le = "signUp",
            M = "signIn",
            fe = "forgotPassword",
            pe = "resetPasswordLink",
            re = "resetPassword",
            N = "EMAIL_PASSWORD",
            W = "LOGIN_LINK",
            g = "jobCartUpdatedCount",
            o = "ph:candidateLoggedinEvent",
            _ = "ph:bot:removeProfile",
            A = "ph:site:removeProfile",
            l = "candidateProfileUpdated",
            f = "getUserProfileData",
            E = "profile_signIn_click",
            O = "profile_signUp_click",
            T = "login_link_click",
            R = "resend_login_link_click",
            L = "reset_password_link_click",
            K = "reset_password_click",
            Z = "ph:ex:jobCartUpdatedCount",
            we = "openCreateProfilePopup",
            ne = ".ph-a11y-popup-start-focus",
            u = "navItems",
            Se = "fyf",
            se = "apply",
            $ = "fyf_container",
            b = "resumeSearch",
            C = "save_job_widget",
            Y = "save_toast",
            te = "visitor",
            Ne = "#phw-s-time-out-timer",
            ue = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            Ee = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
            Te = /^((?!\.)(?!.*\.\.)(?!.*\.$)([A-Za-z0-9._]*[A-Za-z0-9_])|(".+"))@((\[[0-9]{1,3}(\.[0-9]{1,3}){3}])|(([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}))$/,
            he = {
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
            me = {
                ESC: 27,
                TAB: 9,
                RETURN: 13,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40,
                BACKSPACE: 8
            },
            $e = {
                fyf_signIn: "fyfSignInHeading",
                fyf_signUp: "fyfSignUpHeading",
                apply_signIn: "applySignInHeading",
                apply_signUp: "applySignUpHeading",
                visitor_saved_jobs_signUp: "savedJobsSignUpHeading",
                visitor_saved_jobs_signIn: "savedJobsSignInHeading"
            };
        class Ae {
            constructor() {
                ce(this, "email", {
                    error: !1,
                    code: "",
                    srHidden: !1
                });
                ce(this, "password", {
                    error: !1,
                    code: "",
                    srHidden: !1
                });
                ce(this, "server", {
                    error: !1,
                    code: ""
                })
            }
        }
        const Ve = e.ref("myprofile");
        e.ref(!1);
        const Le = e.ref(!1),
            De = e.ref(!1),
            ye = e.ref(!1),
            Fe = e.ref(!1),
            oe = e.ref(!1),
            Ie = e.ref(!0),
            U = e.ref(new Ae),
            ae = e.ref({
                email: "",
                password: ""
            }),
            k = e.ref(s.flowType),
            de = e.ref(!1),
            y = e.ref(!1),
            P = e.ref(!1),
            je = e.ref(!1),
            Ce = e.ref(!1),
            Re = e.ref(!1),
            _e = e.ref(!1),
            He = e.ref(!1),
            gt = e.ref(!1),
            Ue = e.ref(!1),
            Qt = e.ref(!1),
            ze = e.ref(!1),
            Q = e.ref({}),
            We = e.ref(v),
            xe = e.ref(!1),
            tt = e.ref(!1),
            at = e.ref({
                profile: {}
            }),
            ge = e.ref({}),
            nt = e.ref({}),
            kt = e.ref(!1),
            Tt = e.ref(!1),
            mt = e.ref(!1),
            ut = e.ref(!1),
            Vt = e.ref(!1),
            Je = e.ref(!1),
            Ze = e.ref(!0),
            vt = 3e4,
            ea = 5e3,
            be = e.ref({
                rpToken: "",
                newPassword: "",
                password: ""
            });
        let qe = !1;
        const ta = {},
            ke = e.ref(!1);
        let yt = !1,
            it = "",
            rt = !1,
            st = "",
            dt = !0,
            Lt = "",
            Pe, It = !1;
        const Mt = e.ref(!1),
            bt = e.ref(N),
            Ye = e.ref(!0),
            aa = () => {
                s && s.widgetContext && s.widgetContext.triggerPopup && wt(s.flowType), sa(), da(), Lt = t.phAppStore.getSegmentedUserState, Ue.value = !0, At(), t.getSiteSettings("consentPrefill") === !1 && (dt = !1), Tt.value = t.getSiteSettings("preferredName"), It = t.getSiteSettings("oneTimeLoginLink"), It && (bt.value = W), k.value = k.value || le, _t().then(() => {
                    ia(), ra(), s.widgetContext = s.widgetContext || {}, s.widgetContext, ze.value
                }), Ta(), it = k.value, localStorage.getItem("_li") && (Ie.value = !1), document.addEventListener("mouseup", zt, !0), document.addEventListener("keyup", zt, !0), it === re && _a(), wa() && $a()
            };

        function na() {
            const d = t.getSiteSettings(u) || {};
            d.candidateHome, !d.candidateHome && oa()
        }
        const ia = () => {
                if (s.widgetContext && s.widgetContext.context && s.widgetContext.context.length && Pe) {
                    const {
                        context: d
                    } = s.widgetContext;
                    switch (d) {
                        case Se:
                        case $:
                            Pe[$e.fyf_signIn], Pe[$e.fyf_signUp];
                            break;
                        case se:
                            Pe[$e.apply_signIn], Pe[$e.apply_signUp];
                            break
                    }
                }
            },
            ra = () => {
                (!s.widgetContext || s.widgetContext && s.widgetContext.context !== se) && (Lt === te && !rt && Pe ? (Pe[$e.visitor_saved_jobs_signIn], Pe[$e.visitor_saved_jobs_signUp]) : rt && Pe && (Pe[$e.fyf_signIn], Pe[$e.fyf_signUp]))
            },
            sa = () => {
                t.getDDO(z, {}).then(d => {
                    if (d && d.status && d.status === "success" && d.data) window.phApp && window.phApp.ddo && (window.phApp.ddo[z] = d), Q.value = d.data, lt();
                    else {
                        const p = t.getSiteSettings("piiConsentConfig");
                        p && (Q.value = JSON.parse(JSON.stringify(p)), lt())
                    }
                })
            },
            da = () => {
                t.getDDO(q, {}).then(d => {
                    if (d && d.status && d.status === "success" && d.data)
                        if (window.phApp && window.phApp.ddo && (window.phApp.ddo[q] = d), d.data[0] && d.data[0].isPrivacyConsent) Q.value = [...d.data, ...Q.value], lt();
                        else {
                            const p = d.data.map(B => B.type);
                            t.getDDO(ee, {
                                globalTexts: p
                            }).then(B => {
                                const X = (B == null ? void 0 : B.data) || {};
                                d.data.forEach(S => {
                                    S.isPrivacyConsent = !0, S.consentText = X[S.type] || ""
                                }), Q.value = [...d.data, ...Q.value], lt()
                            })
                        }
                })
            },
            lt = () => {
                Q.value && Q.value.length && (ge.value = {}, ge.value.consentData = Q.value, bt.value === W ? ge.value.submit = Rt : ge.value.submit = Ht, ge.value.submitFocus = i.value.querySelector(".submit"), nt.value.consentData = Q.value, nt.value.checkConsentError = St, nt.value.handleError = la)
            },
            la = () => {
                xe.value && (ge.value && ge.value.triggerPopup && ge.value.triggerPopup(!0), t.trackWidgetClick(i, "pii-popup-trigger", {}), Bt())
            },
            oa = () => {
                if (i.value && i.value instanceof HTMLElement && (i.value.style && (i.value.style.display = "none"), s.parentElemRemove)) {
                    let d = i.value.querySelector(s.parentElemRemove);
                    d || (d = i.value.closest("li")), d && (d.style.display = "none")
                }
            },
            Me = () => {
                kt.value = !1
            },
            ot = () => {
                kt.value = !0
            },
            ct = d => {
                U.value.server.error = !0, U.value.server.code = d
            },
            ca = d => {
                de.value = d ? Te.test(ae.value.email || "") : ue.test(ae.value.email || "")
            },
            pa = d => {
                const p = document.querySelector('[id="createPassword"]');
                p && p.removeAttribute("aria-describedby"), d = d || ae.value.password, y.value = Ee.test(d), U.value.password.error ? (Ge('[id="errorCreatePasswordSrOnly"]'), p && p.setAttribute("aria-describedby", "errorCreatePasswordSrOnly")) : p && p.setAttribute("aria-describedby", "errorCreatePassword")
            },
            Xe = (d, p) => {
                U.value.email.error = !1, d ? U.value.email.srHidden = !0 : U.value.email.srHidden = !1;
                let B = !1;
                return ae.value.email ? (p ? Te.test(ae.value.email) : ue.test(ae.value.email)) ? (U.value.email.code = void 0, B = !1) : (U.value.email.code = "E102", B = !0) : (U.value.email.code = "E101", B = !0), U.value.email.error = B, B === !0 && !d && Ge('[id="errorCreateEmail"]'), B
            },
            fa = () => {
                je.value = !je.value, P.value = !0, setTimeout(() => {
                    P.value = !1
                }, 50)
            },
            pt = (d, p, B, X) => {
                d = d || ae.value.password, U.value.password.error = !1, B ? U.value.password.srHidden = !0 : U.value.password.srHidden = !1;
                let S = !1;
                return p ? d.length ? (U.value.password.code = void 0, S = !1) : (U.value.password.code = "E101", S = !0) : Ee.test(d) ? (U.value.password.code = void 0, Object.keys(he).forEach(J => {
                    he[J].hasError = !1
                }), S = !1) : (Object.keys(he).forEach(J => {
                    he[J].regex.test(d) ? he[J].hasError = !1 : he[J].hasError = !0
                }), S = !0), S === !0 && !p && !X && (Ge('[id="errorCreatePasswordSrOnly"]'), Ce.value = !Ce.value, setTimeout(() => {
                    Ce.value = !Ce.value
                }, 1e3)), setTimeout(() => {
                    U.value.password.error = S
                }, 0), S
            },
            At = () => {
                He.value = t.getSiteSettings("privacyDataConsentCheckBox")
            },
            ha = () => {
                Re.value && (_e.value = !1)
            },
            ft = () => {
                U.value.server.error = !1, U.value.server.code = ""
            },
            ie = d => {
                d && d.focus && d.focus()
            },
            wa = () => {
                const d = s && s.widgetContext && s.widgetContext.context;
                return d === Se || d === $
            },
            $a = () => {
                e.nextTick(() => {
                    setTimeout(() => {
                        ie(a.value)
                    }, 0)
                })
            },
            Qe = () => {
                setTimeout(() => {
                    if (U.value.email.error) ie(a.value);
                    else if (U.value.password.error) {
                        ie(n.value);
                        const d = document.querySelector('[id="createPassword"]');
                        d && d.setAttribute("aria-describedby", "errorCreatePasswordSrOnly"), ie(n.value)
                    }
                }, 0)
            },
            ga = () => {
                yt = !1, Q.value && Q.value.length && Q.value.forEach(d => {
                    !d.optional && !d.isChecked && (yt = !0)
                }), yt || (xe.value = !1)
            },
            Bt = d => {
                Q.value && Q.value.length >= 3 && (ot(), Me(), ga(), setTimeout(() => {
                    ie(".back-btn")
                }, 50))
            },
            St = () => (xe.value = !1, Q.value && Q.value.length > 0 && Q.value.forEach(d => {
                !d.optional && !d.isChecked && (xe.value = !0)
            }), xe.value),
            Ct = () => pt(be.value.newPassword),
            ka = () => {
                if (ke.value = !qe && Ct(), ft(), !ke.value && !qe) {
                    be.value.rpToken = be.value.rpToken || t.queryParams.getQueryParam("rp");
                    const d = {
                        rpToken: be.value.rpToken,
                        newPassword: be.value.newPassword
                    };
                    t.getDDO(m, d).then(p => {
                        p && p.status === "success" ? (t.trackWidgetClick(i, K, {}), Oe(), be.value.password = "", Dt(M)) : p && p.status === "failure" && p.code === 403 ? (be.value.password = "", qe = !0) : ct("E500")
                    })
                } else ie(n.value)
            },
            Ot = () => {
                const d = {
                    flowType: "candidateProfile"
                };
                t.getDDO(F, d).then(p => {})
            },
            Et = () => {
                t.localStore.setItem("_li", "1")
            },
            ma = d => {
                t.publishEvent(o, d), t.raiseCustomEvent(o, d), t.publishEvent(g, {})
            },
            Pt = (d, p) => {
                t.getDDO(G, {}).then(B => {
                    var X;
                    if (B && Object.keys(B).length && B.status === "success") {
                        if (p ? (st = B.email, st && (ae.value.email = st)) : (at.value.profile = B || {}, t.publishEvent("emailLoggedIn", (X = B == null ? void 0 : B.data) == null ? void 0 : X.email)), d) {
                            ma(B);
                            const S = {
                                context: "candidateProfile"
                            };
                            s.widgetContext = s.widgetContext || {
                                context: "header"
                            }, S.widgetContext = s.widgetContext.context, t.publishEvent(f, S)
                        }
                        Q.value && Q.value.length && dt && Q.value.forEach(S => {
                            S.isPrivacyConsent ? B && B.consentMap && B.consentMap[S.type] && B.consentMap[S.type].status === "GRANTED" && (S.isChecked = !0) : B && B[S.type] && (S.isChecked = !0)
                        })
                    } else ze.value = !1;
                    Me()
                }).catch(B => {
                    Me()
                })
            },
            Oe = () => {
                U.value = new Ae, Object.keys(he).length && Object.keys(he).forEach(d => {
                    he[d] && (he[d].hasError = !1)
                })
            },
            _t = d => (ot(), t.getDDO(x, {}).then(p => {
                var B, X, S, J;
                if (p && p.data) {
                    if (ze.value = p.data.isValidToken && !p.data.isAnonymous && !s.expiredStatusPage, p.data.isSocialLogin && Et(), ((B = p == null ? void 0 : p.data) == null ? void 0 : B.isSiteLogin) || ((X = p == null ? void 0 : p.data) == null ? void 0 : X.isSocialLogin)) {
                        const ve = ((S = p == null ? void 0 : p.data) == null ? void 0 : S.isSiteLogin) || !1,
                            Va = ((J = p == null ? void 0 : p.data) == null ? void 0 : J.isSocialLogin) || !1;
                        t.publishEvent("checkLoginStatus", {
                            isSiteloggedIn: ve,
                            isSocialLoggedin: Va
                        })
                    }
                    ze.value ? (rt = !0, Pt(d || !1, !1)) : p.data.isAnonymous ? (rt = !0, Pt(d || !1, !0)) : Me()
                } else Me();
                return Vt.value = !0, !0
            }, p => {
                Me()
            })),
            ua = () => {
                gt.value = !1, t.dialogModal.closeDialogPopup()
            },
            ht = d => {
                !d && ua(), ae.value.password = "", ae.value.email = "", be.value.newPassword = "", We.value = v, k.value = it, de.value = !1, y.value = !1, je.value = !1, _e.value = !1, xe.value = !1, Fe.value = !1, Le.value = !1, Ye.value = !0, Oe(), s.widgetContext && s.widgetContext.context && (s.widgetContext.context === $ || s.widgetContext.context === b || s.widgetContext.context === C || s.widgetContext.context === Y) && s.widgetContext.closePopup && s.widgetContext.closePopup(void 0, !0)
            },
            Ge = d => {
                const p = t.dialogModal.fetchElem(i.value, d);
                p && (p.setAttribute("aria-live", "assertive"), p.setAttribute("aria-atomic", "true"), setTimeout(() => {
                    p.removeAttribute("aria-live"), p.removeAttribute("aria-atomic")
                }, 100))
            },
            Ft = (d, p, B) => {
                const X = t.dialogModal.fetchElem(i.value, B),
                    S = t.dialogModal.fetchElem(i.value, d),
                    J = i.value.querySelector(p);
                t.dialogModal.fetchElem(i.value, Ne), t.dialogModal.replaceModal(X, J, S), ye.value = !1, Ye.value = !1
            },
            ya = () => {
                const d = {
                    email: ae.value.email,
                    isSystemDefaultPage: !0,
                    metaData: {}
                };
                Q.value.length && Q.value.forEach(p => {
                    p.isPrivacyConsent ? (d.metaData.consentMap || (d.metaData.consentMap = {}), p.type && (p.isChecked ? d.metaData.consentMap[p.type] = {
                        status: "GRANTED",
                        consentDate: new Date().toISOString().split(".")[0] + "Z"
                    } : p.optional && (d.metaData.consentMap[p.type] = {
                        status: "UNKNOWN",
                        consentDate: new Date().toISOString().split(".")[0] + "Z"
                    }))) : p.type && (d.metaData[p.type] = !!p.isChecked)
                }), ye.value = !0, t.getDDO(H, d).then(p => {
                    var B;
                    if (p && p.status === "success") {
                        const X = {
                            context: s.widgetContext || t.phAppStore.getPageName
                        };
                        t.trackWidgetClick(i, R, X), De.value = !0, oe.value = !0, ye.value = !1, Je.value = !0, setTimeout(() => {
                            ie(r.value), Ze.value = !1
                        }, 200), setTimeout(() => {
                            Je.value = !1, Ze.value = !0;
                            const S = document.querySelector(".phw-s-resend-btn");
                            S instanceof HTMLElement && S.focus()
                        }, ea)
                    } else oe.value = !1, De.value = !1, ye.value = !1, jt((B = h.value) == null ? void 0 : B.resendSuccessText)
                })
            },
            Rt = d => {
                _e.value = !1;
                const p = Xe(!0);
                ke.value = p;
                const B = s.widgetContext && s.widgetContext.context || "";
                St(), setTimeout(() => {
                    if (ke.value) {
                        if (p && Ge('[id="errorCreateEmail"]'), Qe(), He.value && !Re.value) {
                            _e.value = !0;
                            return
                        }
                        return
                    }
                    if (ft(), xe.value && !ke.value) {
                        ge.value && ge.value.triggerPopup && ge.value.triggerPopup(!0), Bt();
                        return
                    }
                    if (ke.value) Qe();
                    else {
                        if (Ut(!0), ye.value = !0, He.value && !Re.value) {
                            _e.value = !0;
                            return
                        }
                        const X = {
                            email: ae.value.email,
                            isSystemDefaultPage: !0,
                            metaData: {}
                        };
                        !Ue.value && (X.unTrustedDevice = !0), B === se && t.trackWidgetClick(i, "ch_signin_trigger_apply_ty", {}), Q.value.length && Q.value.forEach(S => {
                            S.isPrivacyConsent ? (X.metaData.consentMap || (X.metaData.consentMap = {}), S.type && (S.isChecked ? X.metaData.consentMap[S.type] = {
                                status: "GRANTED",
                                consentDate: new Date().toISOString().split(".")[0] + "Z"
                            } : S.optional && (X.metaData.consentMap[S.type] = {
                                status: "UNKNOWN",
                                consentDate: new Date().toISOString().split(".")[0] + "Z"
                            }))) : S.type && (X.metaData[S.type] = !!S.isChecked)
                        }), t.getDDO(H, X).then(S => {
                            if (S && S.status === "success") {
                                Le.value = !0, De.value = !0, Fe.value = !0, oe.value = !0, t.publishEvent("checkOTLSent", {
                                    isOneTimeLoginLinkSent: !0
                                });
                                const J = {
                                    context: s.widgetContext || t.phAppStore.getPageName
                                };
                                t.trackWidgetClick(i, T, J), ye.value = !1, d ? e.nextTick(() => {
                                    Ft(".ph-a11y-email-triggred-close-btn", ".phw-s-login-link", ".phw-s-is-email-trigred")
                                }) : (Ye.value = !1, e.nextTick(() => {
                                    const ve = i.value.querySelector(".phw-s-focus-success-heading");
                                    ie(ve)
                                }))
                            } else Le.value = !0, De.value = !1, ye.value = !1, Fe.value = !0, d ? e.nextTick(() => {
                                Ft(".ph-a11y-email-triggred-close-btn", ".phw-s-login-link", ".phw-s-is-email-trigred")
                            }) : (Ye.value = !1, e.nextTick(() => {
                                const J = i.value.querySelector(".phw-s-focus-failure-heading");
                                ie(J)
                            }))
                        })
                    }
                }, 150)
            },
            Ht = () => {
                _e.value = !1;
                const d = Xe(!0, !0),
                    p = pt(ae.value.password, !1, d, !0);
                ke.value = d || p;
                const B = s.widgetContext && s.widgetContext.context || "";
                St(), setTimeout(() => {
                    var X;
                    if (ke.value) {
                        if (d ? Ge('[id="errorCreateEmail"]') : p && (Ce.value = !Ce.value, Ge('[id="errorCreatePasswordSrOnly"]')), Qe(), He.value && !Re.value) {
                            _e.value = !0;
                            return
                        }
                        return
                    }
                    if (ft(), xe.value && !ke.value) {
                        ge.value && ge.value.triggerPopup && ge.value.triggerPopup(!0), Bt();
                        return
                    }
                    if (ke.value) Qe();
                    else {
                        if (Ut(!0), He.value && !Re.value) {
                            _e.value = !0;
                            return
                        }
                        const S = {
                            email: ae.value.email,
                            password: ae.value.password
                        };
                        !Ue.value && (S.unTrustedDevice = !0), B === se && t.trackWidgetClick(i, "ch_signin_trigger_apply_ty", {}), S.profile = S.profile || {}, Q.value && ((X = Q.value) == null || X.forEach(J => {
                            J.isPrivacyConsent ? (S.profile.consentMap || (S.profile.consentMap = {}), J.type && (J.isChecked ? S.profile.consentMap[J.type] = {
                                status: "GRANTED",
                                consentDate: new Date().toISOString().split(".")[0] + "Z"
                            } : J.optional && (S.profile.consentMap[J.type] = {
                                status: "UNKNOWN",
                                consentDate: new Date().toISOString().split(".")[0] + "Z"
                            }))) : J.type && (S.profile[J.type] = !!J.isChecked)
                        })), t.getDDO(D, S).then(J => {
                            if (J && J.status === "success" && J.code === 200) {
                                t.raiseCustomEvent(Z, {}), setTimeout(() => {
                                    mt.value = !0, setTimeout(() => {
                                        mt.value = !1
                                    }, 2e3)
                                }, 1e3), Ot();
                                const ve = {
                                    context: s.widgetContext || t.phAppStore.getPageName
                                };
                                t.trackWidgetClick(i, O, ve), ht(), _t(!0), Oe(), Et(), B === se && t.trackWidgetClick(i, "ch_signup_apply_ty", {})
                            } else J && J.status === "failure" && J.code === 405 && J.data ? (de.value = !1, U.value.email.error = !0, U.value.email.code = "E103", U.value.email.socialProvider = J.data.socialProvider, ie(a.value)) : J && J.status === "failure" && J.code === 402 ? (de.value = !1, U.value.email.error = !0, U.value.email.code = "E104", ie(a.value)) : ct("E500")
                        })
                    }
                }, 150)
            },
            Ut = d => {
                d ? t.trackWidgetClick(i, "pii-consent-submit", {}) : t.trackWidgetClick(i, "pii-consent-done", {}), setTimeout(() => {
                    ie(".phw-s-consents-link")
                }, 100)
            },
            zt = d => {
                const p = ba(d, "post-sign-in-action-area");
                p !== void 0 && (tt.value = p)
            },
            ba = (d, p) => {
                let B = d.target,
                    X = !1,
                    S, J;
                if (d.keyCode === me.RETURN || d.keyCode === me.TAB || d.keyCode === void 0)
                    for (; B;)
                        if (B = B.parentElement, J = B && B.classList, J) {
                            if (B === null || !J.contains(p)) X = !0;
                            else if (J.contains(p)) {
                                X = !1;
                                break
                            }
                        } else B || (X = !0);
                return (X || d.keyCode === me.ESC) && (S = !1), S
            },
            Ba = () => {
                const d = Xe(!0),
                    p = pt(ae.value.password, !0, d);
                ke.value = d || p, ft();
                const B = s.widgetContext && s.widgetContext.context || "";
                if (ke.value) Qe();
                else {
                    const X = {
                        email: ae.value.email,
                        password: ae.value.password
                    };
                    t.publishEvent("emailCandidate", X.email), !Ue.value && (X.unTrustedDevice = !0), B === se && t.trackWidgetClick(i, "ch_signin_trigger_apply_ty", {}), t.getDDO(V, X).then(S => {
                        if (S && S.status === "success" && S.code === 200) {
                            t.raiseCustomEvent(Z, {}), setTimeout(() => {
                                ut.value = !0, setTimeout(() => {
                                    ut.value = !1
                                }, 2e3)
                            }, 1e3), Ot();
                            const J = {
                                context: s.widgetContext || t.phAppStore.getPageName
                            };
                            t.trackWidgetClick(i, E, J), it === re ? window.location.href = t.phAppStore.baseUrl : (_t(!0), ht(), Oe()), t.raiseCustomEvent(Z, {}), Et(), B === se && t.trackWidgetClick(i, "ch_signin_apply_ty", {})
                        } else S && S.status === "failure" && S.code === 405 && S.data ? (de.value = !1, U.value.email.error = !0, U.value.email.code = "E103", U.value.email.socialProvider = S.data.socialProvider, ie(a.value)) : S && S.status === "failure" && S.code === 404 ? (y.value = !1, U.value.password.error = !0, U.value.password.code = "E103", ie(n.value)) : S && S.status === "failure" && S.code === 401 ? (de.value = !1, U.value.email.error = !0, U.value.email.code = "E105", ie(a.value)) : ct("E500")
                    })
                }
            },
            Dt = (d, p) => {
                Oe(), k.value = d, We.value = p || v, ae.value.password = "", be.value.newPassword = "", je.value = !1, y.value = !1, Ue.value = !0, _e.value = !1, Object.keys(he).forEach(B => {
                    he[B].hasError = !1
                }), setTimeout(() => {
                    ie(a.value)
                }, 250), e.nextTick(() => {
                    window.handleAriaLabelledby(!1)
                })
            },
            Sa = () => {
                setTimeout(() => {
                    qt(!0)
                }, 100)
            },
            Ea = () => {
                Oe(), ot(), Me(), We.value = fe, setTimeout(() => {
                    ie(a.value)
                }, 250)
            },
            qt = d => {
                if (ke.value = Xe(!0), ke.value) ie(a.value);
                else {
                    const p = {
                        email: ae.value.email
                    };
                    t.getDDO(I, p).then(B => {
                        B && (B.status === "success" || B.status === 200 || B.status === "failure" && B.code === 401) ? (t.trackWidgetClick(i, L, {}), Oe(), ot(), Me(), We.value = pe, d ? (Je.value = !0, setTimeout(() => {
                            ie(r.value), Ze.value = !1
                        }, 200), setTimeout(() => {
                            Je.value = !1, Ze.value = !0
                        }, vt)) : s && s.widgetContext && s.widgetContext.context && (s.widgetContext.context === Se || s.widgetContext.context === $) ? e.nextTick(() => {
                            ie(w.value)
                        }) : setTimeout(() => {
                            const X = t.dialogModal.fetchElem(i.value, ne);
                            ie(X)
                        }, 100), qe = !1) : B && B.status === "failure" && B.code === 401 ? (de.value = !1, U.value.email.error = !0, U.value.email.code = "E105", ie(a.value)) : (jt(h.value.technicalIssueText), ct("E500"))
                    })
                }
            },
            Pa = () => {
                tt.value = !tt.value
            },
            _a = () => {
                be.value.rpToken = t.queryParams.getQueryParam("rp");
                const d = {
                    rpToken: be.value.rpToken
                };
                t.getDDO(c, d).then(p => {
                    p && p.status === "success" ? qe = !1 : p && p.status === "failure" && p.code === 403 && (qe = !0, Dt(M, fe))
                }, p => {})
            },
            Gt = d => {
                const p = d && d.detail;
                at.value.profile = p || {}, ze.value = !0, Q.value && Q.value.length && dt && Q.value.forEach(B => {
                    B.isPrivacyConsent ? p && p.consentMap && p.consentMap[B.type] && p.consentMap[B.type].status === "GRANTED" && (B.isChecked = !0) : p && p[B.type] && (B.isChecked = !0)
                })
            },
            Da = d => {
                d.detail.context !== "candidateProfile" && Pt(!1, !0)
            },
            Kt = () => {
                st = "", ae.value.email = "", at.value.profile = {}, Q.value && Q.value.length && dt && Q.value.forEach(d => {
                    d.isChecked = !1
                })
            },
            jt = d => {
                if (d) {
                    const p = document.createElement("span");
                    p.setAttribute("class", "phw-visually-hidden"), p.setAttribute("aria-live", "assertive"), p.setAttribute("aria-atomic", "true"), document.body.appendChild(p), setTimeout(() => {
                        p.innerText = d, setTimeout(() => {
                            p.remove()
                        }, 1e3)
                    }, 200)
                }
            },
            xa = d => t.contentStore.getContent(d).then(p => p),
            wt = d => {
                gt.value = !0, k.value = d, e.nextTick(() => {
                    var X, S;
                    let p;
                    Mt.value ? p = document.querySelector(".phw-s-go-to-profile") : s.widgetContext && s.widgetContext.closeSelector ? p = s.widgetContext.closeSelector : p = (X = i == null ? void 0 : i.value) == null ? void 0 : X.querySelector(".phw-s-after-close");
                    const B = (S = i == null ? void 0 : i.value) == null ? void 0 : S.querySelector(".ph-a11y-popup-start-focus");
                    t.dialogModal.openDialogPopup(i == null ? void 0 : i.value, "phw-a11y-modal-area", p, B, Na.bind(this))
                }), setTimeout(() => {
                    ie(a.value)
                }, 50)
            },
            Na = () => {
                ht(!0)
            },
            Wt = () => {
                Mt.value = !0, Ie.value ? wt("signUp") : wt("signIn")
            },
            Ta = () => {
                document.addEventListener(l, Gt), document.addEventListener(o, Gt), document.addEventListener(f, Da), document.addEventListener(A, Kt), document.addEventListener(_, Kt), t.subscribeEvent(we, Wt), document.addEventListener(we, () => {
                    setTimeout(() => {
                        Wt()
                    }, 100)
                })
            };
        return {
            onWidgetLoad: aa,
            signInModel: ae,
            isValidEmail: de,
            checkEmailValidation: ca,
            ErrorModel: Ae,
            validateEmail: Xe,
            errors: U,
            showHidePassword: fa,
            isPasswordVisible: je,
            checkPasswordValidation: pa,
            isValidPassword: y,
            validatePassword: pt,
            showPasswordSrOnly: P,
            pwdRegexMap: he,
            isPrivacyDataConsentCheckBoxRequired: At,
            privacyConsentReqFlag: He,
            isPrivacyConsentChecked: ha,
            privacyDataConsent: Re,
            piiConsentData: Q,
            masterLiteralData: ta,
            signup: Ht,
            signedIn: Ba,
            isLoggedIn: ze,
            step: We,
            staySignIn: Ue,
            forgotPassword: Ea,
            changeFlowType: Dt,
            resendPswrdResetLink: Sa,
            sendPswdResetLink: qt,
            privacyConsentError: _e,
            piiConsentError: xe,
            flowType: k,
            isHeadingDisabled: Qt,
            isFirstTimeUser: Ie,
            preferredName: Tt,
            profileDetails: at,
            closePopup: ht,
            isshowDropDown: tt,
            showDropdown: Pa,
            getContent: xa,
            passwordErrorSrOnly: Ce,
            resetPasswordModel: be,
            resetPassword: ka,
            validateNewPassword: Ct,
            openPopup: wt,
            isPopupOpen: gt,
            piiConsentContext: ge,
            showLoader: kt,
            emailRegex: ue,
            isTokenCallDone: Vt,
            checkCandidateHomeEnabled: na,
            signUpSuccessSr: mt,
            signInSuccessSr: ut,
            hasErrors: ke,
            isEmailResent: Je,
            isResentBtnEnable: Ze,
            profileUrl: Ve,
            emailSendTried: Fe,
            sendOneTimeLoginLink: Rt,
            isOneTimeLoginLinkSent: oe,
            resendOneTimeLoginLink: ya,
            socialLoginContext: nt,
            showOneTineLoginLinkLoader: ye,
            signUpStep: bt,
            STEP_EMAIL_PASSWORD: N,
            STEP_LOGIN_LINK: W,
            isEmailTriggeredByUser: Le,
            isEmailTriggeredSuccessfully: De,
            beforeEmailTrigred: Ye
        }
    }
    const Pn = "csrfToken",
        _n = {
            FACEBOOK: "facebook",
            MICROSOFT: "microsoft",
            LINKEDIN: "linkedIn",
            GOOGLE: "google",
            LOGIN: "google-signin"
        },
        Dn = () => {
            let {
                locale: i
            } = t.phAppStore;
            return i = i.split("_"), i = `/${i[1]}/${i[0]}/`, i
        },
        xn = (i, a) => {
            const n = _n;
            let r = `${i.loginUrl}?response_type=${i.response_type}&`;
            switch (a) {
                case n.MICROSOFT:
                case n.LINKEDIN:
                    r += `client_id=${encodeURIComponent(i.clientId)}&`;
                    break;
                case n.GOOGLE:
                case n.LOGIN:
                    r += `client_id=${encodeURIComponent(i.clientId)}&access_type=offline&approval_prompt=auto&`;
                    break;
                case n.FACEBOOK:
                    r += `client_id=${encodeURIComponent(i.clientId)}&`;
                    break
            }
            return a ? (r += `redirect_uri=${encodeURIComponent(i.redirectUriPath)}`, i.scope && (r += `&scope=${encodeURIComponent(i.scope)}`), i.state && (r += `&state=${encodeURIComponent(i.state)}`), r) : !1
        },
        Nn = (i, a, n) => {
            let r = t.queryParams.getQueryParam("qpage") || "";
            r = decodeURIComponent(r);
            let {
                name: w
            } = a;
            const {
                profileValidation: s
            } = a, h = a.redirectUri || window.location.href;
            w && w.toLocaleLowerCase() === "linkedin" && (w = "linkedIn");
            const x = t.getSiteSettings("oauth");
            if (!x || !x[w]) return;
            const G = t.queryParams.getQueryParam("page") || "",
                V = x[w],
                D = Dn(),
                {
                    locale: H
                } = t.phAppStore;
            let m = window.location.pathname;
            r || (m += window.location.search);
            const I = {
                page: m,
                protocol: window.location.protocol,
                localePath: D,
                qpage: r,
                pagename: G,
                locale: H,
                siteVariant: i,
                rurl: encodeURIComponent(h)
            };
            if (n && Object.keys(n).length)
                for (const c in n) I.hasOwnProperty(c) || (I[c] = n[c]);
            return s && (I.profileValidation = !0), t.phAppStore.csrfToken && (I[Pn] = t.phAppStore.csrfToken), V ? (V.redirectUriPath = t.phAppStore.rootDomain + V.redirectUri, V.state = JSON.stringify(I), xn(V, w)) : !1
        };

    function Tn(i, a) {
        const n = "mergedProfile",
            r = "validateJwtToken",
            w = "getIMLandingPage",
            s = "socialConnectOptions",
            h = "createConsentProfile",
            x = "social-logout",
            G = "secure-url-click",
            V = "social_login_click",
            D = e.ref(a),
            H = {},
            m = e.ref(!1),
            I = e.ref(!1),
            c = e.ref(!1),
            F = e.ref(["facebook", "linkedin", "live", "google"]),
            z = e.ref(!1);
        let q = "external",
            ee = "";
        e.onBeforeMount(() => {
            le(), q = t.phAppStore.siteType, q === "internal" && N(), M(), D.value.piiconsent && !Object.keys(D.value.piiconsent) && (D.value.piiconsent = D.value.piiconsent || {}), m.value = !1, fe(), g(), W(), o(), document.addEventListener(x, () => {}), document.addEventListener(G, f => {
                ee = (f.detail && f.detail.data || {}).redirectUri
            }), t.queryParams.getQueryParam("atsRedirectUrl")
        }), e.onMounted(() => {});
        const v = () => {
                z.value = !1
            },
            le = () => {
                z.value = !0
            },
            M = () => {
                c.value = t.getSiteSettings("privacyDataConsentCheckBox"), D.value.profileLoginFlow = D.value.profileLoginFlow || ""
            },
            fe = () => {
                t.getDDO(s, {}).then(f => {
                    f && f.status && f.status.toUpperCase() === "SUCCESS" ? (q = D.value.variantType || q, F.value.external = f.data && f.data[q], (f.data && !f.data.external || !f.data.external.length) && f.data[q] && (F.value.external = f.data[q]), (!D.value.fyfStepLandInfo || !D.value.fyfStepLandInfo.socialOptions || !D.value.fyfStepLandInfo.socialOptions.length) && (D.value.fyfStepLandInfo.socialOptions = [], F.value && F.value.external && F.value.external.forEach(E => {
                        D.value.fyfStepLandInfo.socialOptions.push(E.name)
                    })), v(), re()) : (v(), re())
                })
            },
            pe = () => {
                I.value && (m.value = !1)
            },
            re = () => {
                setTimeout(() => {
                    var E;
                    const f = (E = i.value) == null ? void 0 : E.querySelector("#social-container");
                    if (f) {
                        const O = [],
                            T = f.children.length;
                        for (let R = 0; R < T; R++) {
                            const L = f.children[0];
                            O[R] = L, f.removeChild(L)
                        }
                        F.value.internal.forEach(R => {
                            const L = O.find(K => K.id === R.name);
                            L && f && f.appendChild(L)
                        })
                    }
                    v()
                }, 250)
            },
            N = () => {
                t.getDDO(w, {}).then(f => {
                    f.stepId
                }, f => {})
            },
            W = () => {
                t.getSiteSettings("oauth")
            },
            g = () => {
                t.getDDO(n, {}).then(f => {
                    f && f.socialAccounts && f.socialAccounts.forEach(E => {
                        H[E.social] = E.status
                    })
                })
            },
            o = () => {
                const f = {};
                t.getDDO(r, f).then(E => {
                    E.data.isValidToken && E.data.isAnonymous
                }, E => {
                    v()
                })
            },
            _ = () => {
                const f = t.getSiteSettings("redirectPage") || [],
                    E = t.getPageName() || "";
                return f && f.includes(E)
            };
        return {
            enabledSocial: F,
            privacyConsentReqFlag: c,
            privacyDataConsent: I,
            privacyConsentError: m,
            showLoader: z,
            propData: D,
            doProfileLogin: f => {
                if (D.value.piiconsent && D.value.piiconsent.consentData && D.value.piiconsent.consentData.length) {
                    if (D.value.piiconsent && D.value.piiconsent.checkConsentError() && D.value.profileLoginFlow === "signUp") {
                        D.value.piiconsent.handleError && D.value.piiconsent.handleError();
                        return
                    }
                } else if (c.value && (m.value = !1, !I.value && D.value.profileLoginFlow === "signUp")) {
                    m.value = !0;
                    return
                }
                const E = {},
                    O = {};
                E.trait213 = f.name, t.trackWidgetClick(i.value, V, E), D.value.redirectPage && D.value.redirectPage.length && (ee = "/"), _() && (ee = "/");
                const T = {
                    name: f.name,
                    redirectUri: ee || window.location.href
                };
                D.value.fyfStepLandInfo && D.value.fyfStepLandInfo.optIn && (O.optIn = D.value.fyfStepLandInfo.optIn);
                const R = Nn(f.userType, T, O);
                if (D.value.fyfStepLandInfo && D.value.fyfStepLandInfo.context === "fyf" && localStorage.setItem("fyfStepLandInfo", D.value.fyfStepLandInfo), D.value.piiconsent && D.value.piiconsent.consentData && D.value.piiconsent.consentData.length && D.value.profileLoginFlow === "signUp") {
                    const L = {
                        profile: {}
                    };
                    D.value.piiconsent.consentData.forEach(K => {
                        K.type && (L.profile[K.type] = !!K.isChecked)
                    }), t.getDDO(h, L).then(K => {
                        R && (window.location.href = R)
                    })
                } else R && (window.location.href = R)
            },
            getContent: f => t.contentStore.getContent(f).then(E => E),
            isPrivacySocialConsentChecked: pe
        }
    }
    const Vn = {
            class: "phw-widget-ctr phw-widget-empty-ctr",
            "data-ps": "a043fe7b-div-1"
        },
        Ln = {
            key: 0,
            class: "show-loader",
            "data-ps": "646a2971-div-2"
        },
        In = {
            class: "phw-spinner-border phw-primary",
            role: "status",
            "data-ps": "646a2971-div-3"
        },
        Mn = {
            class: "phw-visually-hidden",
            "data-ps": "646a2971-span-1"
        },
        An = [e.createTextVNode("Loading...")],
        Cn = {
            key: 2,
            class: "social-checkbox-btn-groupset",
            "data-ps": "a043fe7b-div-3"
        },
        On = {
            class: "social-input-checkbox-label phw-d-flex phw-align-items-center",
            "data-ps": "a043fe7b-label-1"
        },
        Fn = ["aria-checked"],
        Rn = {
            class: "checkbox-text phw-g-text-default-dark phw-ml-050",
            "data-ps": "a043fe7b-span-2"
        },
        Hn = {
            class: "social-data-consent-link",
            "data-ph-at-id": "data-consent-link",
            target: "_blank",
            "data-ps": "a043fe7b-a-1"
        },
        Un = {
            class: "social-termsLink",
            "data-ph-at-id": "terms-consent-link",
            target: "_blank",
            "data-ps": "a043fe7b-a-2"
        },
        zn = {
            "aria-live": "assertive",
            "aria-atomic": "true",
            "data-ps": "a043fe7b-div-4"
        },
        qn = {
            key: 0,
            class: "social-consent-error-msg phw-d-block phw-text-l",
            "data-ps": "a043fe7b-div-5"
        },
        Gn = {
            class: "social-alert-msg phw-error-color",
            "data-ps": "a043fe7b-span-3"
        },
        Kn = ["role"],
        jn = ["role"],
        Wn = ["icon-name", "aria-label", "data-ph-at-source", "onClick"],
        Jn = {
            class: "phw-icon-ctr",
            "data-ps": "a043fe7b-span-4"
        },
        Zn = ["href"],
        Yn = e.defineComponent({
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
            setup(i) {
                const a = i,
                    n = e.ref(),
                    r = e.ref({}),
                    {
                        enabledSocial: w,
                        privacyConsentReqFlag: s,
                        privacyDataConsent: h,
                        privacyConsentError: x,
                        showLoader: G,
                        propData: V,
                        doProfileLogin: D,
                        getContent: H,
                        isPrivacySocialConsentChecked: m
                    } = Tn(n, a);
                e.onBeforeMount(() => {
                    a.contentId ? H(a.contentId || "").then(c => {
                        r.value = c
                    }) : r.value = a.content
                }), e.onMounted(() => {
                    t.usePhCommon().init(n.value, r, a.instanceId || "")
                });
                const I = c => {
                    const F = r.value ? r.value[c] : void 0;
                    return F == null ? void 0 : F.ariaLabel
                };
                return (c, F) => {
                    var z, q, ee, v, le, M, fe, pe, re, N, W, g, o, _, A, l, f, E;
                    return e.withDirectives((e.openBlock(), e.createElementBlock("div", Vn, [e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        id: "social-container",
                        ref_key: "element",
                        ref: n,
                        class: "social-connect-block phw-text-c",
                        "data-ps": "a043fe7b-div-2"
                    }, [e.unref(G) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", Ln, [e.withDirectives((e.openBlock(), e.createElementBlock("div", In, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Mn, An)), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), !a.expiredStatusPage && a.candidateLogin && ((q = (z = e.unref(w)) == null ? void 0 : z.external) == null ? void 0 : q.length) > 0 ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: 1,
                        class: e.normalizeClass([
                            [a.fcFyf ? c.$style["fc-seperator"] : c.$style.seperator], "phw-g-text-default-dark no-scroll phw-text-c"
                        ]),
                        "data-ps": "61f36d81-div-71"
                    }, [e.createTextVNode(e.toDisplayString(a.seperatorText), 1)], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(s) && a.profileLoginFlow == "signUp" && ((v = (ee = e.unref(w)) == null ? void 0 : ee.external) == null ? void 0 : v.length) > 0 ? e.withDirectives((e.openBlock(), e.createElementBlock("div", Cn, [e.withDirectives((e.openBlock(), e.createElementBlock("label", On, [e.withDirectives(e.createElementVNode("input", {
                        "onUpdate:modelValue": F[0] || (F[0] = O => e.isRef(h) ? h.value = O : null),
                        type: "checkbox",
                        "aria-checked": e.unref(h) ? "true" : "false",
                        role: "checkbox",
                        "data-ph-at-id": "checkbox-button",
                        "aria-label": "I have read and agree to the Privacy Policy and Terms of Use.",
                        "data-ps": "a043fe7b-input-1",
                        onChange: F[1] || (F[1] = O => e.unref(m)())
                    }, null, 40, Fn), [
                        [e.vModelCheckbox, e.unref(h)],
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", Rn, [e.createTextVNode(e.toDisplayString((le = r.value) == null ? void 0 : le.privacyPolicyCheckboxText) + " ", 1), e.withDirectives((e.openBlock(), e.createElementBlock("a", Hn, [e.createTextVNode(e.toDisplayString((fe = (M = r.value) == null ? void 0 : M.privacyPolicy) == null ? void 0 : fe.text), 1)])), [
                        [e.unref(t.vPhwSetting)],
                        [e.unref(t.vPhwHref), (re = (pe = r.value) == null ? void 0 : pe.privacyPolicy) == null ? void 0 : re.href]
                    ]), e.createTextVNode(e.toDisplayString((N = r.value) == null ? void 0 : N.privacyPolicyCheckboxSeparatorText) + " ", 1), e.withDirectives((e.openBlock(), e.createElementBlock("a", Un, [e.createTextVNode(e.toDisplayString((g = (W = r.value) == null ? void 0 : W.termsLink) == null ? void 0 : g.text), 1)])), [
                        [e.unref(t.vPhwSetting)],
                        [e.unref(t.vPhwHref), (_ = (o = r.value) == null ? void 0 : o.termsLink) == null ? void 0 : _.href]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("div", zn, [e.unref(x) && e.unref(s) && a.profileLoginFlow == "signUp" && ((l = (A = e.unref(w)) == null ? void 0 : A.external) == null ? void 0 : l.length) > 0 ? e.withDirectives((e.openBlock(), e.createElementBlock("div", qn, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Gn, [e.createTextVNode(e.toDisplayString((f = r.value) == null ? void 0 : f.privacyPolicyCheckboxErrorText), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("ul", {
                        role: e.unref(V).fyfStepLandInfo.socialOptions.length > 1 ? "list" : "presentation",
                        class: e.normalizeClass(["phw-gird phw-m-0 phw-p-0 phw-d-flex phw-justify-content-center phw-mt-4 phw-mb-5 phw-mt-xl-2 phw-mb-xl-3", c.$style["grid-gap"]]),
                        "data-ps": "a043fe7b-ul-1"
                    }, [(e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList((E = e.unref(w)) == null ? void 0 : E.external, O => {
                        var T;
                        return e.withDirectives((e.openBlock(), e.createElementBlock("li", {
                            key: O.id,
                            role: e.unref(V).fyfStepLandInfo.socialOptions.length > 1 ? "listitem" : void 0,
                            "key-role": "listItemRole",
                            class: e.normalizeClass([c.$style["social-icon-list"], "phw-list-none"]),
                            "data-ps": "a043fe7b-li-1"
                        }, [e.withDirectives((e.openBlock(), e.createElementBlock("a", {
                            href: "javascript:void(0);",
                            role: "button",
                            "icon-name": O.name,
                            class: e.normalizeClass(["phw-d-flex phw-justify-content-center phw-align-items-center", [c.$style["icon-action"], c.$style["icon-" + O.name]]]),
                            "aria-label": I(O.name),
                            "data-ps": "a043fe7b-a-3",
                            "data-ph-at-id": "social-login",
                            "data-ph-at-source": O.name,
                            onClick: R => e.unref(D)(O)
                        }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Jn, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", {
                            fill: "currentcolor",
                            "aria-hidden": "true",
                            class: e.normalizeClass([c.$style["social-icon"]]),
                            "data-ps": "a043fe7b-svg-1"
                        }, [e.withDirectives(e.createElementVNode("use", {
                            href: "#" + (O.settings && O.settings.icon),
                            "data-ps": "a043fe7b-use-1"
                        }, null, 8, Zn), [
                            [e.unref(t.vPhwSetting)]
                        ])], 2)), [
                            [e.unref(t.vPhwSetting)]
                        ])])), [
                            [e.unref(t.vPhwSetting)]
                        ])], 10, Wn)), [
                            [e.unref(t.vPhwSetting)]
                        ])], 10, jn)), [
                            [e.vShow, ((T = e.unref(w)) == null ? void 0 : T.external) && (e.unref(V).fyfStepLandInfo.socialOptions && e.unref(V).fyfStepLandInfo.socialOptions.indexOf(O.name) >= 0 || !e.unref(V).fyfStepLandInfo.socialOptions)],
                            [e.unref(t.vPhwSetting)]
                        ])
                    }), 128))], 10, Kn)), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])
                }
            }
        }),
        Xn = {
            "grid-gap": "_grid-gap_1pbmj_2",
            "icon-action": "_icon-action_1pbmj_6",
            "icon-linkedIn": "_icon-linkedIn_1pbmj_14",
            "icon-facebook": "_icon-facebook_1pbmj_18",
            "icon-google": "_icon-google_1pbmj_22",
            "icon-glassdoor": "_icon-glassdoor_1pbmj_26",
            "icon-twitter": "_icon-twitter_1pbmj_30",
            "icon-instagram": "_icon-instagram_1pbmj_34",
            "icon-printrest": "_icon-printrest_1pbmj_38",
            "icon-whatsapp": "_icon-whatsapp_1pbmj_42",
            "icon-telegram": "_icon-telegram_1pbmj_46",
            "social-icon": "_social-icon_1pbmj_50",
            seperator: "_seperator_1pbmj_56",
            "fc-seperator": "_fc-seperator_1pbmj_77"
        },
        xt = (i, a) => {
            const n = i.__vccOpts || i;
            for (const [r, w] of a) n[r] = w;
            return n
        },
        Qn = xt(Yn, [
            ["__cssModules", {
                $style: Xn
            }]
        ]);

    function vn(i, a) {
        const n = e.ref(!1),
            r = e.ref(!1),
            w = e.ref(!1),
            s = () => {
                r.value = !1;
                const m = i;
                m.widgetContext.consentData && m.widgetContext.consentData.length && m.widgetContext.consentData.forEach(I => {
                    !I.optional && !I.isChecked && (r.value = !0)
                }), !r.value && m.widgetContext.widgetRef && (m.widgetContext.widgetRef.piiConsentError = !1)
            },
            h = (m, I) => {
                var F;
                n.value = !1, m ? t.trackWidgetClick(a.value, "pii-consent-submit", {}) : t.trackWidgetClick(a.value, "pii-consent-done", {}), !I && t.dialogModal.closeDialogPopup();
                const c = (F = a == null ? void 0 : a.value) == null ? void 0 : F.querySelector(".phw-s-after-close-btn");
                e.nextTick(() => {
                    c == null || c.focus()
                })
            },
            x = () => {
                var I;
                h(void 0, !0);
                const m = (I = a == null ? void 0 : a.value) == null ? void 0 : I.querySelector(".phw-s-after-close-btn");
                setTimeout(() => {
                    m == null || m.focus()
                }, 100)
            },
            G = m => {
                n.value = !0, w.value = !!m, s(), e.nextTick(() => {
                    setTimeout(() => {
                        const I = document.querySelector(".phw-s-after-close-btn"),
                            c = document.querySelector(".ph-a11y-popup-start-focus");
                        t.dialogModal.openDialogPopup(a.value, "phw-a11y-modal-area", I, c, x.bind(this), !0)
                    }, 10)
                })
            },
            V = () => {
                i.widgetContext && i.widgetContext.submit && (i.widgetContext.submit(!0), h(!0))
            },
            D = m => t.contentStore.getContent(m).then(I => I),
            H = i;
        return H.widgetContext && (H.widgetContext.triggerPopup = G), {
            getContent: D,
            triggerConsentPopup: G,
            showConsentPopup: n,
            closePopup: h,
            isButtonDisabled: s,
            submitData: w,
            triggerSubmitData: V,
            isDisabled: r
        }
    }
    const ei = {
            "data-ps": "370f3a32-div-2"
        },
        ti = {
            class: "phw-visually-hidden required-checkbox",
            "data-ps": "370f3a32-span-1"
        },
        ai = {
            class: "modal-dialog modal fade in show ph-a11y-modal-area phw-posn-relative",
            "aria-describedby": "ph-ally-delete-popup-heading",
            "data-ps": "370f3a32-div-4"
        },
        ni = {
            class: "phw-modal-header phw-flex-row-reverse"
        },
        ii = ["aria-label"],
        ri = {
            class: "phw-icon-ctr",
            "data-ps": "370f3a32-span-2"
        },
        si = {
            fill: "currentcolor",
            "aria-hidden": "true",
            "data-ps": "370f3a32-svg-1"
        },
        di = {
            href: "#phw-cns-icon-close",
            "data-ps": "370f3a32-use-1"
        },
        li = {
            "ally-label-heading": "",
            class: "phw-text-c",
            "data-ph-at-id": "consent-text",
            "data-ps": "370f3a32-h3-1"
        },
        oi = {
            key: 0,
            "data-tag-type": "p",
            class: "consent-description pii-consent-section phw-g-p-default-secondary phw-mt-2",
            "data-ph-at-id": "consent-description",
            "data-ps": "370f3a32-div-8"
        },
        ci = ["data-ph-at-count"],
        pi = ["data-ph-at-index"],
        fi = ["id", "onUpdate:modelValue", "aria-required"],
        hi = ["for"],
        wi = {
            "data-ps": "370f3a32-span-3"
        },
        $i = [e.createTextVNode("*")],
        gi = ["id", "innerHTML"],
        ki = {
            class: "phw-text-c phw-mt-3",
            "data-ph-component-name": "submit-button",
            "data-ps": "370f3a32-div-6"
        },
        mi = ["disabled"],
        ui = xt(e.defineComponent({
            __name: "ConsentPopupDefaultDefaultComponent",
            props: {
                instanceId: null,
                contentId: null,
                theme: null,
                widgetContext: null,
                content: null,
                signUpStep: null
            },
            setup(i) {
                const a = i,
                    n = e.ref(null),
                    r = e.ref({}),
                    {
                        getContent: w,
                        triggerConsentPopup: s,
                        showConsentPopup: h,
                        closePopup: x,
                        isButtonDisabled: G,
                        submitData: V,
                        isDisabled: D,
                        triggerSubmitData: H
                    } = vn(a, n);
                return e.onMounted(() => {
                    t.usePhCommon().init(n.value, r, a.instanceId)
                }), e.onBeforeMount(() => {
                    a.contentId ? w(a.contentId || "").then(m => {
                        r.value = m
                    }) : r.value = a.content
                }), (m, I) => {
                    var c, F, z, q, ee, v, le, M, fe, pe, re, N;
                    return e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        ref_key: "element",
                        ref: n,
                        class: "phw-widget-ctr phw-widget-empty-ctr",
                        "data-ps": "370f3a32-div-1"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", ei, [e.withDirectives((e.openBlock(), e.createElementBlock("a", {
                        href: "javascript:void(0)",
                        class: "consents-link ph-a11y-popup-close-focus phw-s-after-close-btn ph-line-height-1_5 phw-d-inline-block",
                        "data-ph-at-id": "consents-link",
                        "data-modal-content-id": "show-consent-popup",
                        "data-ps": "370f3a32-a-1",
                        onClick: I[0] || (I[0] = W => e.unref(s)())
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", ti, [e.createTextVNode(e.toDisplayString((c = r.value) == null ? void 0 : c.requiredText), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.createElementVNode("span", null, e.toDisplayString((F = r.value) == null ? void 0 : F.consentsLinkText), 1)])), [
                        [e.unref(t.vPhwTrack), "pii-popup-link"],
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.unref(h) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: 0,
                        class: e.normalizeClass(["phw-modal phw-a11y-modal-area", m.$style["active-backdrop"]]),
                        "data-ps": "370f3a32-div-3",
                        "aria-modal": "true"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", ai, [e.createElementVNode("div", ni, [e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                        class: "ph-a11y-popup-start-focus phw-modal-close phw-g-modal-close-button phw-d-flex",
                        "data-ph-at-id": "close-link",
                        "data-ps": "370f3a32-button-1",
                        "aria-label": (z = r.value) == null ? void 0 : z.closeBtnLable,
                        onClick: I[1] || (I[1] = W => e.unref(x)())
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", ri, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", si, [e.withDirectives(e.createElementVNode("use", di, null, 512), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])], 8, ii)), [
                        [e.unref(t.vPhwSetting)],
                        [e.unref(t.vPhwTrack), "pii-popup-close"]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("h3", li, [e.createTextVNode(e.toDisplayString((q = r.value) == null ? void 0 : q.consentHeading), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ])]), (ee = r.value) != null && ee.consentDescription ? e.withDirectives((e.openBlock(), e.createElementBlock("div", oi, [e.createTextVNode(e.toDisplayString((v = r.value) == null ? void 0 : v.consentDescription), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), i.widgetContext.consentData && i.widgetContext.consentData.length ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: 1,
                        role: "list",
                        class: "pii-consent-section phw-mt-3",
                        "data-ph-at-id": "consent-container",
                        "data-ph-at-count": (M = (le = i.widgetContext) == null ? void 0 : le.consentData) == null ? void 0 : M.length,
                        "data-ps": "370f3a32-div-5"
                    }, [(e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(i.widgetContext.consentData, (W, g) => e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: W.id,
                        "data-ph-at-id": "consent-div",
                        "data-ph-at-index": g,
                        role: "listitem",
                        class: "phw-form-check phw-mb-2",
                        "data-ps": "370f3a32-div-7"
                    }, [e.withDirectives(e.createElementVNode("input", {
                        id: "consent" + g,
                        "onUpdate:modelValue": o => W.isChecked = o,
                        type: "checkbox",
                        class: "phw-form-check-group",
                        "data-ph-at-id": "consent-checkbox",
                        "aria-required": W.optional ? !1 : "true",
                        "data-ps": "370f3a32-input-1",
                        onChange: I[2] || (I[2] = o => e.unref(G)())
                    }, null, 40, fi), [
                        [e.vModelCheckbox, W.isChecked],
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("label", {
                        for: "consent" + g,
                        class: "phw-check-label",
                        "data-ps": "370f3a32-label-1"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", wi, [W.optional ? e.createCommentVNode("", !0) : e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                        key: 0,
                        class: e.normalizeClass([m.$style["required-star"], "consent-mandatory"]),
                        "aria-hidden": "true",
                        "data-ps": "370f3a32-span-5"
                    }, $i, 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives(e.createElementVNode("span", {
                        id: "checkbox-label-" + g,
                        class: "phw-g-text-default-dark",
                        "data-ps": "370f3a32-span-4",
                        innerHTML: W.isPrivacyConsent && W.consentText ? W.consentText : r.value && r.value[W.type + "Text"]
                    }, null, 8, gi), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])], 8, hi)), [
                        [e.unref(t.vPhwSetting)]
                    ])], 8, pi)), [
                        [e.unref(t.vPhwSetting)]
                    ])), 128))], 8, ci)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("div", ki, [e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                        class: "phw-btn phw-g-btn-primary",
                        "data-ph-at-id": "consent-done-link",
                        disabled: e.unref(D),
                        "data-ps": "370f3a32-button-2",
                        onClick: I[3] || (I[3] = W => e.unref(V) ? e.unref(H)() : e.unref(x)())
                    }, [e.createTextVNode(e.toDisplayString(e.unref(V) ? (a == null ? void 0 : a.signUpStep) === "loginLink" ? (re = (pe = r.value) == null ? void 0 : pe.sendOneTimeLoginLinkText) == null ? void 0 : re.text : (N = r.value) == null ? void 0 : N.submitText : (fe = r.value) == null ? void 0 : fe.doneText), 1)], 8, mi)), [
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

    function La(i, a, n, r) {
        if (!i || !a) return "";
        if (typeof i == "object") {
            if (!n) return "";
            const w = a[n];
            let s = i[w];
            if (s || Object.keys(i).forEach(h => {
                    if (/[-*]/g.test(h)) {
                        const x = h.replace("*", "");
                        if (w >= x && (s = i[h]), !s) {
                            const G = h.split("-");
                            G && G.length === 2 && w >= G[0] && w <= G[1] && (s = i[h])
                        }
                    }
                }), !s)
                if (i.default) s = "default";
                else return "";
            return Aa(s, a, r)
        }
        return Aa(i, a, r)
    }

    function Aa(i, a, n) {
        const r = /\{\{\s*(.*?)\s*\}\}/g,
            w = /\[\[\s*(.*?)\s*\]\]/g;
        return !i || typeof i != "string" || (i = i.replace(/&lt;/g, "<"), i = i.replace(/&gt;/g, ">"), i = i.replace(r, (s, h) => a.hasOwnProperty(h) ? a[h] : ""), n && (i = encodeURIComponent(i)), i = i.replace(w, (s, h) => {
            if (!h) return h
        })), i
    }
    const yi = {
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

    function Ca(i, a) {
        var n = Array.prototype.slice.call(a);
        return n.push(yi), i.apply(this, n)
    }

    function Oa(i, a) {
        i = i.split("-"), a = a.split("-");
        for (var n = i[0].split("."), r = a[0].split("."), w = 0; w < 3; w++) {
            var s = Number(n[w]),
                h = Number(r[w]);
            if (s > h) return 1;
            if (h > s) return -1;
            if (!isNaN(s) && isNaN(h)) return 1;
            if (isNaN(s) && !isNaN(h)) return -1
        }
        return i[1] && a[1] ? i[1] > a[1] ? 1 : i[1] < a[1] ? -1 : 0 : !i[1] && a[1] ? 1 : i[1] && !a[1] ? -1 : 0
    }
    var bi = {}.constructor;

    function Ia(i) {
        return i != null && i.constructor === bi
    }

    function $t(i) {
        return $t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
            return typeof a
        } : function(a) {
            return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
        }, $t(i)
    }

    function Jt(i, a) {
        if (!(i instanceof a)) throw new TypeError("Cannot call a class as a function")
    }

    function Fa(i, a) {
        for (var n = 0; n < a.length; n++) {
            var r = a[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(i, Bi(r.key), r)
        }
    }

    function Zt(i, a, n) {
        return a && Fa(i.prototype, a), n && Fa(i, n), Object.defineProperty(i, "prototype", {
            writable: !1
        }), i
    }

    function Bi(i) {
        var a = Si(i, "string");
        return $t(a) == "symbol" ? a : a + ""
    }

    function Si(i, a) {
        if ($t(i) != "object" || !i) return i;
        var n = i[Symbol.toPrimitive];
        if (n !== void 0) {
            var r = n.call(i, a || "default");
            if ($t(r) != "object") return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (a === "string" ? String : Number)(i)
    }
    var Ei = "1.2.0",
        Pi = "1.7.35",
        Ra = " ext. ",
        _i = /^\d+$/,
        Ha = function() {
            function i(a) {
                Jt(this, i), Ti(a), this.metadata = a, qa.call(this, a)
            }
            return Zt(i, [{
                key: "getCountries",
                value: function() {
                    return Object.keys(this.metadata.countries).filter(function(n) {
                        return n !== "001"
                    })
                }
            }, {
                key: "getCountryMetadata",
                value: function(n) {
                    return this.metadata.countries[n]
                }
            }, {
                key: "nonGeographic",
                value: function() {
                    if (!(this.v1 || this.v2 || this.v3)) return this.metadata.nonGeographic || this.metadata.nonGeographical
                }
            }, {
                key: "hasCountry",
                value: function(n) {
                    return this.getCountryMetadata(n) !== void 0
                }
            }, {
                key: "hasCallingCode",
                value: function(n) {
                    if (this.getCountryCodesForCallingCode(n)) return !0;
                    if (this.nonGeographic()) {
                        if (this.nonGeographic()[n]) return !0
                    } else {
                        var r = this.countryCallingCodes()[n];
                        if (r && r.length === 1 && r[0] === "001") return !0
                    }
                }
            }, {
                key: "isNonGeographicCallingCode",
                value: function(n) {
                    return this.nonGeographic() ? !!this.nonGeographic()[n] : !this.getCountryCodesForCallingCode(n)
                }
            }, {
                key: "country",
                value: function(n) {
                    return this.selectNumberingPlan(n)
                }
            }, {
                key: "selectNumberingPlan",
                value: function(n, r) {
                    if (n && _i.test(n) && (r = n, n = null), n && n !== "001") {
                        if (!this.hasCountry(n)) throw new Error("Unknown country: ".concat(n));
                        this.numberingPlan = new Ua(this.getCountryMetadata(n), this)
                    } else if (r) {
                        if (!this.hasCallingCode(r)) throw new Error("Unknown calling code: ".concat(r));
                        this.numberingPlan = new Ua(this.getNumberingPlanMetadata(r), this)
                    } else this.numberingPlan = void 0;
                    return this
                }
            }, {
                key: "getCountryCodesForCallingCode",
                value: function(n) {
                    var r = this.countryCallingCodes()[n];
                    if (r) return r.length === 1 && r[0].length === 3 ? void 0 : r
                }
            }, {
                key: "getCountryCodeForCallingCode",
                value: function(n) {
                    var r = this.getCountryCodesForCallingCode(n);
                    if (r) return r[0]
                }
            }, {
                key: "getNumberingPlanMetadata",
                value: function(n) {
                    var r = this.getCountryCodeForCallingCode(n);
                    if (r) return this.getCountryMetadata(r);
                    if (this.nonGeographic()) {
                        var w = this.nonGeographic()[n];
                        if (w) return w
                    } else {
                        var s = this.countryCallingCodes()[n];
                        if (s && s.length === 1 && s[0] === "001") return this.metadata.countries["001"]
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
                value: function(n) {
                    return this.numberingPlan.type(n)
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
                value: function(n) {
                    return this.selectNumberingPlan(n)
                }
            }, {
                key: "hasSelectedNumberingPlan",
                value: function() {
                    return this.numberingPlan !== void 0
                }
            }])
        }(),
        Ua = function() {
            function i(a, n) {
                Jt(this, i), this.globalMetadataObject = n, this.metadata = a, qa.call(this, n.metadata)
            }
            return Zt(i, [{
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
                value: function(n) {
                    return n[this.v1 ? 2 : this.v2 ? 3 : 4]
                }
            }, {
                key: "formats",
                value: function() {
                    var n = this,
                        r = this._getFormats(this.metadata) || this._getFormats(this.getDefaultCountryMetadataForRegion()) || [];
                    return r.map(function(w) {
                        return new Di(w, n)
                    })
                }
            }, {
                key: "nationalPrefix",
                value: function() {
                    return this.metadata[this.v1 ? 3 : this.v2 ? 4 : 5]
                }
            }, {
                key: "_getNationalPrefixFormattingRule",
                value: function(n) {
                    return n[this.v1 ? 4 : this.v2 ? 5 : 6]
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
                value: function(n) {
                    if (this.hasTypes() && za(this.types(), n)) return new Ni(za(this.types(), n), this)
                }
            }, {
                key: "ext",
                value: function() {
                    return this.v1 || this.v2 ? Ra : this.metadata[13] || Ra
                }
            }])
        }(),
        Di = function() {
            function i(a, n) {
                Jt(this, i), this._format = a, this.metadata = n
            }
            return Zt(i, [{
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
                    return !!(this.nationalPrefixFormattingRule() && !xi.test(this.nationalPrefixFormattingRule()))
                }
            }, {
                key: "internationalFormat",
                value: function() {
                    return this._format[5] || this.format()
                }
            }])
        }(),
        xi = /^\(?\$1\)?$/,
        Ni = function() {
            function i(a, n) {
                Jt(this, i), this.type = a, this.metadata = n
            }
            return Zt(i, [{
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

    function za(i, a) {
        switch (a) {
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

    function Ti(i) {
        if (!i) throw new Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");
        if (!Ia(i) || !Ia(i.countries)) throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(Ia(i) ? "an object of shape: { " + Object.keys(i).join(", ") + " }" : "a " + Vi(i) + ": " + i, "."))
    }
    var Vi = function(a) {
        return $t(a)
    };

    function Li(i, a) {
        if (a = new Ha(a), a.hasCountry(i)) return a.selectNumberingPlan(i).countryCallingCode();
        throw new Error("Unknown country: ".concat(i))
    }

    function qa(i) {
        var a = i.version;
        typeof a == "number" ? (this.v1 = a === 1, this.v2 = a === 2, this.v3 = a === 3, this.v4 = a === 4) : a ? Oa(a, Ei) === -1 ? this.v2 = !0 : Oa(a, Pi) === -1 ? this.v3 = !0 : this.v4 = !0 : this.v1 = !0
    }

    function Ii(i) {
        return new Ha(i).getCountries()
    }

    function Mi() {
        return Ca(Ii, arguments)
    }

    function Ga() {
        return Ca(Li, arguments)
    }
    const Be = {
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
    class Ai {
        constructor() {
            ce(this, "clearTimer");
            ce(this, "listBoxElement");
            ce(this, "comboBoxElement");
            ce(this, "widgetElement");
            ce(this, "widgetViewModel");
            ce(this, "activeIndex", -1);
            ce(this, "results", []);
            ce(this, "name");
            ce(this, "element");
            ce(this, "isShowResultsOnFocus", "true");
            ce(this, "isShowNoResults", "true");
            ce(this, "isHideListBox", "true");
            ce(this, "keyupDebounceHandler");
            ce(this, "keydownDebounceHandler");
            ce(this, "ignoreExpanded", !1);
            ce(this, "ignoreComboExpanded", !1);
            ce(this, "ignoreListBoxClickHandler", !1);
            ce(this, "isEventraised", !1);
            ce(this, "validationInfo", {
                listbox: {},
                input: {},
                widget: {}
            });
            ce(this, "debounceTimer", 200)
        }
        init(a, n, r) {
            this.element = a, this.name = n && n.name, this.ignoreExpanded = n && n.ignoreExpanded, this.ignoreComboExpanded = n && n.ignoreComboExpanded, this.ignoreListBoxClickHandler = n && n.ignoreListBoxClickHandler;
            const w = t.getSiteSettings("debounceTimer");
            w && (this.debounceTimer = w), this.initiate(r);
            const s = this.validate();
            s && s.length && console.warn("A11y autocomplete setup is improper.Check errors ", s), this.setupEventListeners()
        }
        debounce(a, n) {
            let r;
            return function() {
                const w = this,
                    s = arguments;
                clearTimeout(r), r = setTimeout(() => a.apply(w, s), n)
            }
        }
        initiate(a) {
            this.comboBoxElement = this.element.parentElement, this.comboBoxElement && (this.comboBoxElement.hasAttribute("aria-haspopup") && (this.element.setAttribute("aria-haspopup", this.comboBoxElement.getAttribute("aria-haspopup")), this.comboBoxElement.getAttribute("role")), this.comboBoxElement.hasAttribute("aria-owns") && (this.element.setAttribute("aria-owns", this.comboBoxElement.getAttribute("aria-owns")), this.comboBoxElement.removeAttribute("aria-owns")), this.comboBoxElement.hasAttribute("role") && (this.element.setAttribute("role", this.comboBoxElement.getAttribute("role")), this.comboBoxElement.removeAttribute("role")));
            const n = this.element.getAttribute("aria-haspopup"),
                r = this.element.getAttribute("aria-owns"),
                w = this.element.getAttribute("role");
            this.validationInfo.input.ariaHaspopup = n, this.validationInfo.input.ariaOwns = n, this.validationInfo.input.role = w;
            const s = this.element.getAttribute("aria-autocomplete"),
                h = this.element.getAttribute("aria-controls");
            if (this.isHideListBox = this.element.getAttribute("data-show-listbox") ? this.element.getAttribute("data-show-listbox") : "true", this.isShowResultsOnFocus = this.element.getAttribute("showResultsOnFocus") || this.isShowResultsOnFocus, this.isShowNoResults = this.element.getAttribute("showNoResults") || this.isShowNoResults, this.validationInfo.input.ariaAutocomplete = s, this.validationInfo.input.ariaControls = h, this.listBoxElement = this.comboBoxElement.querySelector(`[data-labelledby=${r}]`), this.listBoxElement || (this.listBoxElement = this.comboBoxElement.parentElement && this.comboBoxElement.parentElement.querySelector(`[data-labelledby=${r}]`) || document.querySelector(`[data-labelledby=${r}]`)), this.listBoxElement) {
                this.validationInfo.listbox.exists = !0;
                const x = this.listBoxElement.getAttribute("data-labelledby");
                this.validationInfo.listbox.ariaLabelledby = x
            }
            this.widgetElement = this.findWidget(), this.validationInfo.widget.exists = this.widgetElement, this.widgetViewModel = a, this.validationInfo.widget.viewModelExist = this.widgetViewModel, this.validationInfo.widget.getFieldOptions = this.widgetViewModel ? this.widgetViewModel.getFieldOptions : void 0, this.validationInfo.widget.setFieldValue = this.widgetViewModel ? this.widgetViewModel.setFieldValue : void 0, this.validationInfo.widget.clearFieldValue = this.widgetViewModel ? this.widgetViewModel.clearFieldValue : void 0, this.validationInfo.widget.getActiveIndex = this.widgetViewModel ? this.widgetViewModel.getActiveIndex : void 0, this.validationInfo.widget.getActiveIndexOnBlur = this.widgetViewModel ? this.widgetViewModel.getActiveIndexOnFocusOut : void 0
        }
        validate() {
            const a = [];
            return this.validationInfo.input.ariaHaspopup || a.push("Missing aria-haspopup attribute on parent div"), this.validationInfo.input.ariaHaspopup || a.push("Missing  aria-owns attribute on parent div"), this.validationInfo.input.ariaOwns || a.push("Missing  aria-owns attribute on parent div"), this.validationInfo.input.ariaAutocomplete || a.push("Missing aria-autocomplete attribute on input elem"), this.validationInfo.input.ariaControls || a.push("Missing aria-controls attribute on input elem"), this.validationInfo.listbox.ariaLabelledby || a.push("Missing data-labelledby attribute on listbox elem"), this.validationInfo.widget.exists || a.push("Missing widget elem"), this.validationInfo.widget.viewModelExist || a.push("Missing widget viewmodel on widget elem"), this.validationInfo.widget.getFieldOptions || a.push("Missing getFieldOptions(fieldName) fn on widget elem"), this.validationInfo.widget.setFieldValue || a.push("Missing setFieldValue(fieldName, selectedItemIndex) fn on widget elem"), this.validationInfo.widget.clearFieldValue || a.push("Missing clearFieldValue(fieldName) fn on widget elem"), this.validationInfo.widget.getActiveIndex || a.push("Missing getActiveIndex(fieldName) fn on widget elem"), this.validationInfo.widget.getActiveIndexOnBlur, a
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
            const a = this.listBoxElement;
            if (!a) return;
            const n = a.querySelector(`#${this.name}-result-item-${this.activeIndex}`);
            if (!n) return;
            const r = a.querySelectorAll(".listbox-header"),
                w = r.length > 0 ? Array.from(r).reduce((c, F) => c + F.offsetHeight, 0) : 0,
                {
                    scrollTop: s
                } = a,
                h = a.clientHeight,
                x = n.getBoundingClientRect(),
                G = a.getBoundingClientRect(),
                V = x.top - G.top + s,
                D = V + n.offsetHeight,
                H = s + w,
                m = s + h,
                I = 2;
            if (V < H - I) {
                const c = Math.max(V - w, 0);
                a.scrollTop !== c && (a.scrollTop = c)
            } else if (D > m + I) {
                const c = a.scrollHeight - h,
                    F = Math.min(D - h, c);
                a.scrollTop !== F && (a.scrollTop = F)
            }
        }
        setActiveListItem(a) {
            if (this.listBoxElement) {
                const n = this.listBoxElement.querySelectorAll('[role="option"]'),
                    r = `${this.name}-result-item-`;
                for (let s = 0; s < n.length; s += 1) {
                    const h = n[s],
                        x = r + s;
                    h.setAttribute("id", x), !a && s === this.activeIndex ? (h.setAttribute("aria-selected", "true"), h.classList.add("listitem-focused"), this.element.setAttribute("aria-activedescendant", x)) : (h.removeAttribute("aria-selected"), h.classList.remove("listitem-focused"))
                }
                if (this.activeIndex === -1 && this.element.setAttribute("aria-activedescendant", ""), document == null ? void 0 : document.querySelector(".phw-s-language-selector-modal-popup")) this.scrollControlInDialog();
                else {
                    const s = this.listBoxElement;
                    if (s) {
                        const h = s.querySelector(`#${this.name}-result-item-${this.activeIndex}`);
                        h && h.scrollIntoView({
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
            const a = this.widgetViewModel;
            return new Promise(n => {
                if (a && a.getFieldOptions) {
                    const r = a.getFieldOptions(this.name);
                    !r && !r.then ? (console.warn("getFieldOptions(fieldName) is neither returning anything nor defined as a promise"), n([])) : r.then ? r.then(w => {
                        n(w), this.results = w, this.activeIndex = this.widgetViewModel.getActiveIndex(this.name), this.isShowResultsOnFocus === "false" && this.element.value.length === 0 ? this.hideListbox() : document.activeElement === this.element && this.showListbox(), this.isShowNoResults === "false" && !this.results.length && this.hideListbox()
                    }) : (n(r || []), this.results = r, this.activeIndex = this.widgetViewModel.getActiveIndex(this.name), this.isShowResultsOnFocus === "false" && this.element.value.length === 0 ? this.hideListbox() : document.activeElement === this.element && this.showListbox(), this.isShowNoResults === "false" && !this.results.length && this.hideListbox())
                } else n([])
            })
        }
        keyupHandler(a) {
            const n = a.which || a.keyCode;
            switch (n) {
                case Be.UP:
                case Be.DOWN:
                case Be.ESC:
                case Be.RETURN:
                    a.preventDefault();
                    return
            }
            let r = -1;
            if (r = Object.keys(Be).findIndex(w => n === Be[w]), (this.isShowResultsOnFocus === "true" || this.element.value && this.element.value.length && r === -1) && this.updateResults(), this.validationInfo.input.ariaAutocomplete === "both") switch (n) {
                case Be.BACKSPACE:
                    return;
                default:
                    this.widgetViewModel && this.widgetViewModel.setFieldValue && this.widgetViewModel.setFieldValue(this.name, this.activeIndex)
            } else Be.BACKSPACE === n && this.updateResults()
        }
        findWidget() {
            return this.element.__vueParentComponent && this.element.__vueParentComponent.vnode.el
        }
        keydownHandler(a) {
            if (a.target) switch (a.which || a.keyCode) {
                case Be.DOWN:
                    this.isListboxHidden() ? this.updateResults().then(() => {
                        this.moveDown()
                    }) : this.moveDown();
                    break;
                case Be.UP:
                    this.isListboxHidden() ? this.updateResults().then(() => {
                        this.moveUp()
                    }) : this.moveUp();
                    break;
                case Be.ESC:
                    this.clearFieldAndCloseListbox();
                    break;
                case Be.RETURN:
                    this.activeIndex !== -1 && a.preventDefault(), this.onEnter();
                    return;
                case Be.TAB:
                case (a.shiftKey && a.key === Be.TAB):
                    this.blurHandler(a);
                    return
            }
            return !0
        }
        focusHandler() {
            this.isShowResultsOnFocus === "true" && this.updateResults().then(() => {
                if (this.listBoxElement) {
                    const a = this.listBoxElement.querySelectorAll('[role="option"]'),
                        n = `${this.name}-result-item-`;
                    for (let r = 0; r < a.length; r += 1) {
                        const w = a[r],
                            s = n + r;
                        w.setAttribute("id", s)
                    }
                }
            })
        }
        listBoxClickHandler(a) {
            if (a.target) {
                const n = this.getLIElement(a.target);
                let r = -1;
                n && n.id && (r = parseInt(n.id.split(`${this.element.name}-result-item-`)[1]), this.activeIndex = r, this.onEnter(), this.hideListbox())
            }
        }
        getLIElement(a) {
            let n = a,
                r = n ? n.nodeName === "LI" : void 0;
            for (; n && !r;) n = n.parentElement, r = n ? n.nodeName === "LI" : void 0;
            return r ? n : void 0
        }
        blurHandler(a, n) {
            n ? a.target && a.target.nodeName !== "LI" && (clearTimeout(this.clearTimer), this.showListbox()) : this.clearTimer = setTimeout(() => {
                this.widgetViewModel && this.widgetViewModel.getActiveIndexOnBlur && this.widgetViewModel.getActiveIndexOnBlur(this.activeIndex, this.name, a), this.widgetViewModel && this.widgetViewModel.getFocusedField && this.widgetViewModel.getFocusedField() === this.name ? (this.widgetViewModel.setFocusedField && this.widgetViewModel.setFocusedField(), this.activeIndex = -1) : this.hideListbox()
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
            const a = this.element;
            this.keyupDebounceHandler = this.debounce(this.keyupHandler, this.debounceTimer), this.keydownDebounceHandler = this.debounce(this.keydownHandler, this.debounceTimer), document.addEventListener("mouseup", this.hideDropdown.bind(this)), a.addEventListener("keyup", this.keyupDebounceHandler.bind(this)), a.addEventListener("keydown", this.keydownDebounceHandler.bind(this)), a.addEventListener("focus", this.focusHandler.bind(this)), this.listBoxElement && (this.ignoreListBoxClickHandler || this.listBoxElement.addEventListener("click", this.listBoxClickHandler.bind(this)), this.listBoxElement.addEventListener("focus", n => {
                this.blurHandler(n, !0)
            }), this.listBoxElement.addEventListener("blur", this.blurHandler.bind(this)))
        }
        hideDropdown(a) {
            !this.element.contains(a.target) && this.element !== a.target && !this.listBoxElement.contains(a.target) && this.listBoxElement !== a.target && this.blurHandler(a, !1)
        }
        destroyed() {
            const a = this.element;
            a.removeEventListener("keyup", this.keyupHandler), a.removeEventListener("keydown", this.keydownHandler), a.removeEventListener("keyup", this.keyupDebounceHandler), a.removeEventListener("keydown", this.keydownDebounceHandler), a.removeEventListener("focus", this.focusHandler), a.removeEventListener("blur", this.blurHandler), document.removeEventListener("mouseup", this.hideDropdown.bind(this)), this.listBoxElement && !this.ignoreListBoxClickHandler && this.listBoxElement.removeEventListener("click", this.listBoxClickHandler)
        }
    }
    const Ci = {
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

    function Ka(i) {
        const a = i.toUpperCase().split("").map(n => 127397 + n.charCodeAt(0));
        return String.fromCodePoint(...a)
    }

    function Oi() {
        const i = [];
        return Mi().forEach(n => {
            const r = Ci[n];
            if (r) try {
                const w = Ga(n);
                i.push({
                    code: n,
                    name: r,
                    callingCode: `+${w}`,
                    flag: Ka(n)
                })
            } catch {
                console.warn(`Could not get calling code for ${n}: ${r}`)
            } else try {
                const w = Ga(n);
                i.push({
                    code: n,
                    name: n,
                    callingCode: `+${w}`,
                    flag: Ka(n)
                })
            } catch {
                console.warn(`Could not get calling code for ${n}`)
            }
        }), i.sort((n, r) => n.code === "US" ? -1 : r.code === "US" ? 1 : n.name.localeCompare(r.name))
    }
    Oi();
    const Fi = {
            "data-ps": "61f36d81-div-2"
        },
        Ri = {
            key: 0,
            class: "sign-out-block-mobile",
            "data-ps": "61f36d81-div-3"
        },
        Hi = ["data-ph-at-id"],
        Ui = {
            "data-component": "profile-icon",
            class: "phw-icon-ctr phw-mr-050",
            "data-ps": "61f36d81-span-3"
        },
        zi = {
            fill: "currentcolor",
            "aria-hidden": "true",
            class: "phw-i-sz-3 phw-i-sz-xl-2-5 phw-i-sz-lg-3",
            "data-ps": "61f36d81-svg-2"
        },
        qi = {
            href: "#phw-cns-icon-user",
            "data-ps": "61f36d81-use-2"
        },
        Gi = {
            "data-hide-settings": "true",
            class: "phw-d-sm-block phw-d-lg-none",
            "data-ps": "61f36d81-span-4"
        },
        Ki = {
            class: "post-sign-in-action-area",
            "data-ps": "61f36d81-div-5"
        },
        ji = ["aria-expanded"],
        Wi = {
            "data-ps": "61f36d81-span-6",
            "data-show-setting": "true"
        },
        Ji = {
            key: 1,
            class: "phw-icon-ctr phw-mr-050",
            "data-ps": "61f36d81-span-7"
        },
        Zi = {
            fill: "currentcolor",
            "aria-hidden": "true",
            class: "phw-i-sz-3",
            "data-ps": "61f36d81-svg-1"
        },
        Yi = {
            href: "#phw-cns-icon-user",
            "data-ps": "61f36d81-use-1"
        },
        Xi = ["title"],
        Qi = {
            class: "phw-visually-hidden",
            "data-ps": "61f36d81-span-78"
        },
        vi = {
            key: 1,
            class: "phw-d-none phw-d-sm-block",
            "data-ps": "61f36d81-div-6"
        },
        er = {
            "data-ps": "61f36d81-span-10"
        },
        tr = {
            key: 1,
            class: "phw-icon-ctr phw-mr-050",
            "data-ps": "61f36d81-span-11"
        },
        ar = {
            fill: "currentcolor",
            "aria-hidden": "true",
            class: "phw-i-sz-3 phw-g-icon-primary",
            "data-ps": "61f36d81-svg-1"
        },
        nr = {
            href: "#phw-cns-icon-user",
            "data-ps": "61f36d81-use-1"
        },
        ir = ["title"],
        rr = {
            "data-ps": "61f36d81-li-3",
            role: "listitem",
            class: "phw-list-none"
        },
        sr = {
            "data-ph-at-id": "personal-account",
            class: "phw-btn phw-g-btn-link phw-d-sm-block phw-width-auto phw-list-none",
            "data-ps": "61f36d81-a-4"
        },
        dr = {
            "data-ps": "61f36d81-span-13"
        },
        lr = {
            key: 1,
            class: "phw-icon-ctr phw-mr-050",
            "data-ps": "61f36d81-span-14"
        },
        or = {
            fill: "currentcolor",
            "aria-hidden": "true",
            class: "phw-i-sz-3 phw-g-icon-primary",
            "data-ps": "61f36d81-svg-1"
        },
        cr = {
            href: "#phw-cns-icon-user",
            "data-ps": "61f36d81-use-1"
        },
        pr = ["title"],
        fr = ["title"],
        hr = {
            role: "list",
            class: "user-actions-list",
            "data-ps": "61f36d81-div-11"
        },
        wr = {
            "data-ph-tevent-attr-trait62": "My Profile",
            class: e.normalizeClass(["phw-btn", "phw-g-btn-link"]),
            "data-ps": "61f36d81-a-5",
            "data-ph-at-id": "my-profile-link"
        },
        $r = {
            class: e.normalizeClass(["phw-btn", "phw-g-btn-link"]),
            "data-ph-at-criteria": "logout",
            "data-ph-at-id": "heading-text",
            "data-ps": "61f36d81-a-6"
        },
        gr = {
            key: 2,
            class: "phw-a11y-modal-area phw-default-dialog phw-modal-sm",
            "data-ps": "61f36d81-div-14"
        },
        kr = {
            class: "phw-posn-relative phw-modal-sm",
            "data-ps": "61f36d81-div-15"
        },
        mr = ["aria-label"],
        ur = {
            class: "phw-icon-ctr",
            "data-ps": "61f36d81-span-16"
        },
        yr = {
            href: "#phw-cns-icon-close",
            "data-ps": "61f36d81-use-3"
        },
        br = {
            key: 1,
            "data-ps": "61f36d81-div-16"
        },
        Br = {
            key: 0,
            class: "sign-in-area",
            "data-ps": "61f36d81-div-17"
        },
        Sr = {
            class: "sign-in-heading-block",
            "data-ph-at-id": "heading-block",
            "data-ps": "61f36d81-div-18"
        },
        Er = {
            key: 0,
            class: "sign-in-heading-block",
            "data-ps": "61f36d81-div-19"
        },
        Pr = {
            "ally-label-heading": "",
            class: "phw-mb-5 phw-mb-xl-4 phw-ml-1 phw-mr-1 phw-mr-sm-2 phw-ml-sm-2 phw-mb-sm-3 phw-text-c phw-g-h2-card-title-dark-default",
            "data-ps": "61f36d81-h2-1",
            "data-ph-at-id": "sign-in-popup-heading"
        },
        _r = {
            key: 1,
            class: "phw-text-c phw-mb-4 phw-mb-xl-3",
            "data-ps": "61f36d81-div-20"
        },
        Dr = {
            "data-tag-type": "p",
            class: "phw-g-p-large-dark phw-mb-0",
            "data-ps": "61f36d81-p-1"
        },
        xr = {
            key: 2,
            class: "resend-password-heading phw-text-c",
            "data-ps": "61f36d81-div-21"
        },
        Nr = {
            "ally-label-heading": "",
            class: "phw-g-h2-card-title-dark-default phw-mb-5 phw-mb-xl-4",
            "data-ps": "61f36d81-h2-3",
            "data-ph-at-id": "reset-password-heading"
        },
        Tr = ["innerHTML"],
        Vr = {
            class: "form-group",
            "data-ph-at-id": "sign-in-block",
            "data-ps": "61f36d81-div-23"
        },
        Lr = {
            key: 0,
            "data-ph-at-id": "email-block",
            class: "phw-form-group phw-form phw-mb-4 phw-mb-xl-3",
            "data-ps": "61f36d81-div-24"
        },
        Ir = {
            for: "signinEmail",
            class: "phw-d-block",
            "data-ps": "61f36d81-label-1"
        },
        Mr = {
            class: "phw-input-group phw-flex-column",
            "data-ps": "61f36d81-div-25"
        },
        Ar = {
            class: "phw-input-group",
            "data-ps": "61f36d81-div-26"
        },
        Cr = ["placeholder"],
        Or = {
            key: 0,
            class: "phw-icon-ctr",
            "data-ps": "61f36d81-span-18"
        },
        Fr = {
            href: "#phw-cns-icon-info-circle",
            "data-ps": "61f36d81-use-4"
        },
        Rr = {
            key: 1,
            class: "phw-icon-ctr",
            "data-ps": "61f36d81-span-19"
        },
        Hr = {
            href: "#phw-cns-icon-check",
            "data-ps": "61f36d81-use-5"
        },
        Ur = {
            "aria-live": "assertive",
            "aria-atomic": "true",
            "data-ps": "61f36d81-div-27"
        },
        zr = {
            key: 0,
            class: "phw-visually-hidden",
            "data-ps": "61f36d81-span-20"
        },
        qr = {
            key: 1,
            class: "phw-visually-hidden",
            "data-ps": "61f36d81-span-21"
        },
        Gr = {
            id: "errorCreateEmail",
            "data-ps": "61f36d81-div-28"
        },
        Kr = {
            key: 0,
            class: "email-error-block phw-mt-1",
            "data-ps": "61f36d81-div-77"
        },
        jr = {
            "aria-live": "assertive",
            "aria-atomic": "true",
            "data-ps": "61f36d81-div-29"
        },
        Wr = {
            key: 0,
            class: "phw-error-color",
            "data-ph-at-id": "invalid-email-error",
            "data-ps": "61f36d81-span-22"
        },
        Jr = {
            key: 1,
            class: "phw-error-color",
            "data-ps": "61f36d81-span-23"
        },
        Zr = {
            key: 0,
            class: "phw-error-color",
            "data-ph-at-id": "invalid-email-error",
            "data-ps": "61f36d81-span-24"
        },
        Yr = {
            key: 1,
            class: "phw-error-color",
            "data-ps": "61f36d81-span-25"
        },
        Xr = {
            key: 2,
            class: "phw-error-color",
            "data-ps": "61f36d81-span-26"
        },
        Qr = {
            key: 3,
            class: "phw-error-color",
            "data-ps": "61f36d81-span-27"
        },
        vr = {
            key: 1,
            class: "phw-form-group phw-form phw-mb-4 phw-mb-xl-3",
            "data-ph-at-id": "password-block",
            "data-ps": "61f36d81-div-30"
        },
        es = {
            for: "signinPassword",
            class: "phw-d-block",
            "data-ps": "61f36d81-label-2"
        },
        ts = {
            class: "phw-input-group phw-flex-column",
            "data-ps": "61f36d81-div-31"
        },
        as = {
            class: "phw-input-group",
            "data-ps": "61f36d81-div-32"
        },
        ns = ["placeholder", "type"],
        is = {
            key: 0,
            class: "phw-icon-ctr",
            "data-ps": "61f36d81-span-28"
        },
        rs = {
            href: "#phw-cns-icon-info-circle",
            "data-ps": "61f36d81-use-6"
        },
        ss = ["aria-label"],
        ds = {
            key: 0,
            class: "phw-icon-ctr phw-i-sz-3 phw-justify-content-center",
            "data-ps": "61f36d81-span-29"
        },
        ls = {
            href: "#phw-cns-icon-show",
            "data-ps": "61f36d81-use-7"
        },
        os = {
            href: "#phw-cns-icon-hide",
            "data-ps": "61f36d81-use-8"
        },
        cs = {
            id: "errorPassword",
            class: "phw-mt-1",
            "data-ps": "61f36d81-div-34"
        },
        ps = {
            "aria-live": "assertive",
            "aria-atomic": "true",
            "data-ps": "61f36d81-div-35"
        },
        fs = {
            key: 0,
            class: "phw-error-color",
            "data-ps": "61f36d81-span-30"
        },
        hs = {
            key: 1,
            class: "phw-error-color",
            "data-ps": "61f36d81-span-31"
        },
        ws = {
            key: 0,
            class: "phw-error-color",
            "data-ps": "61f36d81-span-32"
        },
        $s = {
            key: 1,
            class: "phw-error-color",
            "data-ps": "61f36d81-span-33"
        },
        gs = {
            key: 2,
            "aria-live": "assertive",
            "aria-atomic": "true",
            "data-ps": "61f36d81-div-36"
        },
        ks = {
            key: 0,
            class: "alert-box",
            "data-ps": "61f36d81-div-37"
        },
        ms = {
            key: 0,
            class: "phw-icon-ctr",
            "data-ps": "61f36d81-span-34"
        },
        us = {
            href: "#phw-cns-icon-info-circle",
            "data-ps": "61f36d81-use-9"
        },
        ys = {
            key: 1,
            class: "alert-msg",
            "data-ps": "61f36d81-span-35"
        },
        bs = {
            class: "form-container",
            "data-ps": "61f36d81-div-39"
        },
        Bs = {
            class: "each-option",
            "data-ps": "61f36d81-span-36"
        },
        Ss = {
            for: "staySignIn",
            class: "phw-mb-0 phw-d-flex phw-align-items-center",
            "data-ps": "61f36d81-label-3"
        },
        Es = ["aria-checked", "aria-label"],
        Ps = {
            class: "phw-ml-1 phw-g-text-default-dark",
            "data-ps": "61f36d81-span-37"
        },
        _s = {
            class: "phw-d-sm-block phw-mt-sm-2",
            "data-ps": "61f36d81-span-38"
        },
        Ds = {
            key: 4,
            "data-ps": "61f36d81-div-41"
        },
        xs = {
            key: 0,
            class: "alert-box",
            "data-ps": "61f36d81-div-42"
        },
        Ns = {
            key: 0,
            class: "alert-msg",
            "data-ps": "61f36d81-span-39"
        },
        Ts = {
            key: 5,
            class: "form-group-row",
            "data-ps": "61f36d81-div-43"
        },
        Vs = {
            class: "form-container",
            "data-ps": "61f36d81-div-44"
        },
        Ls = {
            key: 0,
            class: "phw-mb-4 phw-mb-xl-3 phw-mt-2 phw-text-c",
            "data-ps": "61f36d81-div-45"
        },
        Is = {
            id: "cd-pf-receive-email",
            class: "phw-g-p-default-dark",
            "data-ps": "61f36d81-span-40"
        },
        Ms = ["disabled"],
        As = {
            key: 1,
            class: "phw-text-c",
            "data-ps": "61f36d81-div-46"
        },
        Cs = {
            key: 2,
            class: "sign-up-block",
            "data-ps": "61f36d81-div-47"
        },
        Os = {
            class: "show-loader phw-spinner-block",
            "data-ps": "61f36d81-div-90"
        },
        Fs = {
            key: 0,
            "data-ps": "61f36d81-div-91"
        },
        Rs = {
            key: 0,
            "ally-label-heading": "",
            class: "phw-mb-5 phw-mb-xl-4 phw-mb-sm-3 phw-ml-1 phw-mr-1 phw-text-c phw-g-h2-card-title-dark-default phw-mr-sm-2 phw-ml-sm-2",
            "data-ps": "61f36d81-h2-4",
            "data-ph-at-id": "create-acc-heading"
        },
        Hs = {
            key: 1,
            "ally-label-heading": "",
            class: "phw-text-l phw-mb-3 phw-mb-xl-3 phw-mb-sm-3 phw-text-c phw-g-text-xx-large-primary",
            "data-ph-at-id": "Login-acc-heading",
            "data-ps": "61f36d81-h2-5"
        },
        Us = {
            key: 2,
            class: "phw-g-h2-card-title-primary-small phw-d-block phw-mb-5 phw-mb-xl-4 phw-mb-sm-3",
            "data-ps": "61f36d81-span-86"
        },
        zs = {
            class: "login-form",
            "data-ps": "61f36d81-div-48"
        },
        qs = {
            class: "form-group",
            "data-ph-at-id": "sign-up-block",
            "data-ps": "61f36d81-div-49"
        },
        Gs = {
            class: "phw-form-group phw-form phw-mb-4 phw-mb-xl-3",
            "data-ph-at-id": "email-block",
            "data-ps": "61f36d81-div-50"
        },
        Ks = {
            for: "createEmail",
            class: "phw-d-block",
            "data-ps": "61f36d81-label-4"
        },
        js = {
            class: "phw-input-group phw-flex-column",
            "data-ps": "61f36d81-div-51"
        },
        Ws = {
            class: "phw-input-group",
            "data-ps": "61f36d81-div-52"
        },
        Js = ["placeholder"],
        Zs = {
            key: 0,
            class: "phw-icon-ctr",
            "data-ps": "61f36d81-span-41"
        },
        Ys = {
            href: "#phw-cns-icon-info-circle",
            "data-ps": "61f36d81-use-10"
        },
        Xs = {
            key: 1,
            class: "phw-icon-ctr",
            "data-ps": "61f36d81-span-42"
        },
        Qs = {
            href: "#phw-cns-icon-check",
            "data-ps": "61f36d81-use-11"
        },
        vs = {
            id: "errorCreateEmail",
            class: "",
            "data-ps": "61f36d81-div-53"
        },
        ed = {
            key: 0,
            class: "error-mail-block phw-mt-1",
            "data-ps": "61f36d81-div-78"
        },
        td = {
            key: 0,
            class: "phw-error-color",
            "data-ps": "61f36d81-span-43"
        },
        ad = {
            key: 1,
            class: "phw-error-color",
            "data-ps": "61f36d81-span-44"
        },
        nd = {
            key: 2,
            class: "phw-error-color",
            "data-ps": "61f36d81-span-45"
        },
        id = {
            key: 3,
            class: "phw-error-color",
            "data-ps": "61f36d81-span-46"
        },
        rd = {
            key: 4,
            class: "phw-error-color",
            "data-ps": "61f36d81-span-47"
        },
        sd = {
            key: 5,
            class: "phw-error-color",
            "data-ph-at-id": "already-exist-email-error",
            "data-ps": "61f36d81-span-48"
        },
        dd = {
            key: 0,
            class: "phw-form-group phw-form phw-mb-4 phw-mb-xl-3",
            "data-ph-at-id": "password-block",
            "data-ps": "61f36d81-div-54"
        },
        ld = {
            for: "createPassword",
            class: "phw-d-block",
            "data-ps": "61f36d81-label-5"
        },
        od = {
            class: "phw-input-group phw-flex-column",
            "data-ps": "61f36d81-div-55"
        },
        cd = {
            class: "phw-input-group",
            "data-ps": "61f36d81-div-56"
        },
        pd = ["aria-describedby", "placeholder", "type"],
        fd = {
            key: 0,
            class: "phw-icon-ctr",
            "data-ps": "61f36d81-span-49"
        },
        hd = {
            href: "#phw-cns-icon-check",
            "data-ps": "61f36d81-use-12"
        },
        wd = {
            key: 1,
            class: "phw-icon-ctr",
            "data-ps": "61f36d81-span-50"
        },
        $d = {
            href: "#phw-cns-icon-info-circle",
            "data-ps": "61f36d81-use-13"
        },
        gd = ["aria-label"],
        kd = {
            key: 0,
            class: "phw-icon-ctr phw-i-sz-3 phw-justify-content-center",
            "data-ps": "61f36d81-span-51"
        },
        md = {
            href: "#phw-cns-icon-show",
            "data-ps": "61f36d81-use-14"
        },
        ud = {
            href: "#phw-cns-icon-hide",
            "data-ps": "61f36d81-use-15"
        },
        yd = {
            "aria-live": "assertive",
            "aria-atomic": "true",
            "data-ps": "61f36d81-div-58"
        },
        bd = {
            key: 0,
            class: "phw-visually-hidden",
            "data-ps": "61f36d81-span-52"
        },
        Bd = {
            key: 1,
            class: "phw-visually-hidden",
            "data-ps": "61f36d81-span-53"
        },
        Sd = {
            id: "errorCreatePasswordSrOnly",
            class: "form-alert phw-visually-hidden",
            "data-ps": "61f36d81-div-59"
        },
        Ed = {
            key: 0,
            role: "text",
            "data-ps": "61f36d81-div-60"
        },
        Pd = {
            key: 0,
            "data-ps": "61f36d81-span-54"
        },
        _d = {
            key: 1,
            "data-ps": "61f36d81-span-55"
        },
        Dd = {
            key: 1,
            role: "text",
            "data-ps": "61f36d81-div-61"
        },
        xd = {
            key: 0,
            "data-ps": "61f36d81-span-54"
        },
        Nd = {
            key: 1,
            "data-ps": "61f36d81-span-55"
        },
        Td = {
            id: "errorCreatePassword",
            class: "phw-mt-1 phw-g-text-small-secondary",
            role: "text",
            "data-ps": "61f36d81-div-61"
        },
        Vd = {
            key: 0,
            class: "checkbox-btn-groupset phw-mb-2 phw-mt-2",
            "data-ps": "61f36d81-div-62"
        },
        Ld = {
            for: "privacyDataConsent",
            class: "phw-mb-0 phw-d-flex phw-align-items-center",
            "data-ps": "61f36d81-label-6"
        },
        Id = ["aria-checked"],
        Md = {
            class: "phw-g-text-default-dark phw-ml-050",
            "data-ps": "61f36d81-span-64"
        },
        Ad = {
            class: "privacy-data-consent-link",
            target: "_blank",
            "data-ph-at-id": "privicy-policy-link",
            "data-ps": "61f36d81-a-12"
        },
        Cd = {
            class: "termsLink-data-consent-link",
            target: "_blank",
            "data-ph-at-id": "terms-link",
            "data-ps": "61f36d81-a-13"
        },
        Od = ["data-ph-at-count"],
        Fd = {
            key: 0,
            "data-tag-type": "p",
            class: "consent-heading pii-consent-section phw-g-p-default-secondary",
            "data-ph-at-id": "consent-heading",
            "data-ps": "61f36d81-div-85"
        },
        Rd = ["id", "onUpdate:modelValue", "aria-invalid", "data-ph-at-index", "aria-checked", "aria-required"],
        Hd = ["for"],
        Ud = {
            class: "checkbox-text",
            "data-ps": "61f36d81-span-79"
        },
        zd = ["innerHTML"],
        qd = {
            key: 0,
            class: "phw-asterisk-color",
            "aria-hidden": "true",
            "data-ps": "61f36d81-span-81"
        },
        Gd = [e.createTextVNode("*")],
        Kd = {
            key: 1,
            "data-tag-type": "p",
            class: "consent-description pii-consent-section phw-g-p-default-secondary",
            "data-ph-at-id": "consent-description",
            "data-ps": "61f36d81-div-86"
        },
        jd = {
            key: 2,
            class: "phw-s-consents-link phw-mb-2",
            "data-ps": "61f36d81-div-81"
        },
        Wd = {
            class: "phw-mb-1",
            "aria-live": "assertive",
            "aria-atomic": "true",
            "data-ps": "61f36d81-div-65"
        },
        Jd = {
            key: 0,
            class: "data-consent-error-msg",
            "data-ps": "61f36d81-div-66"
        },
        Zd = {
            class: "phw-error-color",
            "data-ps": "61f36d81-span-70"
        },
        Yd = ["aria-live", "aria-atomic", "role"],
        Xd = {
            key: 0,
            id: "consent-error-dk1signup",
            class: "pii-consent-error phw-error-color phw-d-block phw-mb-2",
            "data-ps": "61f36d81-span-71"
        },
        Qd = {
            class: "form-container",
            "data-ps": "61f36d81-div-69"
        },
        vd = {
            class: "phw-s-is-email-trigred phw-modal-sm",
            "data-ps": "61f36d81-div-93"
        },
        el = {
            key: 0,
            class: "phw-mr-1 phw-ml-1 phw-mr-sm-2 phw-ml-sm-2 phw-posn-relative",
            "data-ps": "61f36d81-div-102"
        },
        tl = ["aria-label"],
        al = {
            class: "phw-icon-ctr",
            "data-ps": "61f36d81-span-16"
        },
        nl = {
            href: "#phw-cns-icon-close",
            "data-ps": "61f36d81-use-3"
        },
        il = {
            key: 0,
            "data-ps": "61f36d81-div-103"
        },
        rl = {
            key: 0,
            "data-ps": "61f36d81-div-94"
        },
        sl = ["innerHTML"],
        dl = {
            class: "phw-d-block phw-g-h2-card-title-primary-small",
            "data-ps": "61f36d81-span-100"
        },
        ll = {
            class: "phw-mt-5 phw-mb-5 phw-mt-sm-3 phw-mb-sm-3 phw-d-flex phw-justify-content-center",
            "data-ps": "61f36d81-div-104"
        },
        ol = {
            class: "phw-icon-ctr",
            "data-ps": "61f36d81-span-101"
        },
        cl = {
            href: "#phw-cns-icon-email-wrap",
            "data-ps": "61f36d81-use-20"
        },
        pl = {
            class: "phw-d-block phw-g-p-default-primary",
            "data-ps": "61f36d81-span-102"
        },
        fl = {
            key: 1,
            class: "",
            "data-ps": "61f36d81-div-105"
        },
        hl = {
            key: 0,
            "data-ps": "61f36d81-div-100"
        },
        wl = ["innerHTML"],
        $l = {
            class: "phw-mt-5 phw-mb-5 phw-mt-sm-3 phw-mb-sm-3 phw-d-flex phw-justify-content-center",
            "data-ps": "61f36d81-div-106"
        },
        gl = {
            class: "phw-icon-ctr",
            "data-ps": "61f36d81-span-103"
        },
        kl = {
            href: "#phw-cns-icon-email-wrap",
            "data-ps": "61f36d81-use-21"
        },
        ml = {
            class: "phw-d-block phw-g-p-default-primary",
            "data-ps": "61f36d81-span-104"
        },
        ul = {
            class: "phw-icon-ctr phw-mr-1",
            "data-ps": "61f36d81-span-88"
        },
        yl = {
            fill: "currentcolor",
            "aria-hidden": "true",
            class: "phw-i-sz-3 phw-g-icon-success",
            "data-ps": "61f36d81-svg-22"
        },
        bl = {
            href: "#phw-cns-icon-circle-check",
            "data-ps": "61f36d81-use-22"
        },
        Bl = ["aria-label", "disabled"],
        Sl = {
            key: 3,
            class: "phw-mt-5 phw-mt-xl-3 phw-ml-1 phw-mr-1",
            "data-ps": "61f36d81-div-70"
        },
        El = {
            key: 0,
            class: "phw-text-c",
            "data-ps": "61f36d81-div-72"
        },
        Pl = {
            class: "phw-g-text-default-dark",
            "data-ps": "61f36d81-span-72"
        },
        _l = {
            key: 1,
            class: "phw-text-c",
            "data-ps": "61f36d81-div-73"
        },
        Dl = {
            class: "phw-g-text-default-dark",
            "data-ps": "61f36d81-span-73"
        },
        xl = {
            class: "phw-mt-4 phw-mt-xl-3 phw-d-flex phw-justify-content-center",
            "data-ps": "61f36d81-div-74"
        },
        Nl = ["aria-label"],
        Tl = ["aria-label"],
        Vl = {
            class: "phw-visually-hidden",
            "aria-live": "assertive",
            "aria-atomic": "true",
            "data-ps": "61f36d81-div-82"
        },
        Ll = {
            key: 0,
            "data-ps": "61f36d81-span-82"
        },
        Il = {
            class: "phw-visually-hidden",
            "aria-live": "assertive",
            "aria-atomic": "true",
            "data-ps": "61f36d81-div-83"
        },
        Ml = {
            key: 0,
            "data-ps": "61f36d81-span-83"
        },
        ja = xt(e.defineComponent({
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
            setup(i) {
                const a = i,
                    n = e.ref(),
                    r = e.ref(),
                    w = e.ref(),
                    s = e.ref(),
                    h = e.ref(),
                    x = e.ref(),
                    G = e.ref(),
                    {
                        onWidgetLoad: V,
                        checkEmailValidation: D,
                        signInModel: H,
                        isValidEmail: m,
                        validateEmail: I,
                        errors: c,
                        showHidePassword: F,
                        isPasswordVisible: z,
                        checkPasswordValidation: q,
                        isValidPassword: ee,
                        validatePassword: v,
                        showPasswordSrOnly: le,
                        pwdRegexMap: M,
                        privacyConsentReqFlag: fe,
                        isPrivacyConsentChecked: pe,
                        privacyDataConsent: re,
                        piiConsentData: N,
                        signup: W,
                        isLoggedIn: g,
                        step: o,
                        signedIn: _,
                        staySignIn: A,
                        forgotPassword: l,
                        changeFlowType: f,
                        resendPswrdResetLink: E,
                        sendPswdResetLink: O,
                        flowType: T,
                        privacyConsentError: R,
                        piiConsentError: L,
                        piiConsentContext: K,
                        isHeadingDisabled: Z,
                        isFirstTimeUser: we,
                        preferredName: ne,
                        profileDetails: u,
                        closePopup: Se,
                        isshowDropDown: se,
                        showDropdown: $,
                        getContent: b,
                        passwordErrorSrOnly: C,
                        openPopup: Y,
                        isPopupOpen: te,
                        showLoader: Ne,
                        isTokenCallDone: ue,
                        checkCandidateHomeEnabled: Ee,
                        signUpSuccessSr: Te,
                        signInSuccessSr: he,
                        hasErrors: me,
                        isEmailResent: $e,
                        isResentBtnEnable: Ae,
                        profileUrl: Ve,
                        sendOneTimeLoginLink: Le,
                        resendOneTimeLoginLink: De,
                        socialLoginContext: ye,
                        showOneTineLoginLinkLoader: Fe,
                        signUpStep: oe,
                        STEP_EMAIL_PASSWORD: Ie,
                        STEP_LOGIN_LINK: U,
                        isEmailTriggeredByUser: ae,
                        isEmailTriggeredSuccessfully: k,
                        beforeEmailTrigred: de
                    } = et(r, w, h, x, G, a, n);
                return e.onBeforeMount(() => {
                    V(), a.contentId ? b(a.contentId).then(y => {
                        n.value = y || {}
                    }) : n.value = a.content
                }), e.onMounted(() => {
                    t.usePhCommon().init(r.value, n, a.instanceId), Ee()
                }), (y, P) => {
                    var je, Ce, Re, _e, He, gt, Ue, Qt, ze, Q, We, xe, tt, at, ge, nt, kt, Tt, mt, ut, Vt, Je, Ze, vt, ea, be, qe, ta, ke, yt, it, rt, st, dt, Lt, Pe, It, Mt, bt, Ye, aa, na, ia, ra, sa, da, lt, la, oa, Me, ot, ct, ca, pa, Xe, fa, pt, At, ha, ft, ie, wa, $a, Qe, ga, Bt, St, Ct, ka, Ot, Et, ma, Pt, Oe, _t, ua, ht, Ge, Ft, ya, Rt, Ht, Ut, zt, ba, Ba, Dt, Sa, Ea, qt, Pa, _a, Gt, Da, Kt, jt, xa, wt, Na, Wt, Ta, d, p, B, X, S, J, ve, Va, Ya, Xa, Qa, va, en, tn, an, nn, rn, sn, dn, ln, on, cn, pn, fn, hn, wn, $n, gn, kn, mn, un, yn, bn, Bn, Sn, En;
                    return e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        ref_key: "element",
                        ref: r,
                        class: "phw-widget-empty-ctr phw-widget-ctr",
                        "data-ps": "61f36d81-div-1"
                    }, [e.withDirectives(e.createElementVNode("div", Fi, null, 512), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.unref(g) && a.flowType == "signout" ? e.withDirectives((e.openBlock(), e.createElementBlock("div", Ri, [e.withDirectives((e.openBlock(), e.createElementBlock("a", {
                        class: e.normalizeClass([y.$style["sign-out-btn"], "phw-btn phw-g-btn-link"]),
                        "data-ph-at-id": "sign-out-text",
                        "data-ps": "61f36d81-a-1"
                    }, [e.createTextVNode(e.toDisplayString((Ce = (je = e.unref(n)) == null ? void 0 : je.signOutButton) == null ? void 0 : Ce.text), 1)], 2)), [
                        [e.unref(t.vPhwSetting)],
                        [e.unref(t.vPhwHref), "{{linkDomain}}logout"]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), a.widgetContext.context !== "fyf_container" && !e.unref(Z) && a.flowType !== "signout" && !e.unref(Ne) && a.widgetContext.context !== "resumeSearch" && a.widgetContext.context !== "save_job_widget" && a.widgetContext.context !== "save_toast" ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: 1,
                        class: e.normalizeClass(["phw-posn-relative phw-xs-pb-2", y.$style["content-block"]]),
                        "data-ps": "61f36d81-div-4"
                    }, [!e.unref(g) && e.unref(ue) ? e.withDirectives((e.openBlock(), e.createElementBlock("a", {
                        key: 0,
                        class: e.normalizeClass(["phw-s-login-link phw-btn phw-d-flex phw-align-items-center phw-modal-sign-up phw-s-after-close phw-g-header-link phw-d-inline-flex phw-align-items-center phw-justify-content-start", a.classStyle ? y.$style["c-sign-up-link"] : ""]),
                        role: "button",
                        href: "javascript:void(0)",
                        tabindex: "0",
                        "data-ps": "61f36d81-a-3",
                        "data-ph-at-id": e.unref(we) ? "sign-up-link" : "sign-in-link",
                        onClick: P[0] || (P[0] = j => e.unref(we) || e.unref(oe) === e.unref(U) ? e.unref(Y)("signUp") : e.unref(Y)("signIn"))
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Ui, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", zi, [e.withDirectives(e.createElementVNode("use", qi, null, 512), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", Gi, [e.createTextVNode(e.toDisplayString(e.unref(oe) === e.unref(U) ? (_e = (Re = e.unref(n)) == null ? void 0 : Re.loginLinkText) == null ? void 0 : _e.text : e.unref(we) && e.unref(oe) === e.unref(Ie) ? (He = e.unref(n)) == null ? void 0 : He.createAccountLinkText : (gt = e.unref(n)) == null ? void 0 : gt.signInAccountLinkText), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ])], 10, Hi)), [
                        [e.unref(t.vPhwSetting)],
                        [e.unref(t.vPhwTrack), e.unref(we) ? e.unref(oe) === e.unref(U) ? "one_time_login_link_click" : "signUp_click" : e.unref(oe) === e.unref(U) ? "one_time_login_link_click" : "signIn_click"]
                    ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("div", Ki, [e.unref(g) ? e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                        key: 0,
                        "data-ph-at-id": "drop-down-for-profile",
                        class: "phw-btn phw-g-btn-link phw-g-header-link phw-d-sm-none",
                        "aria-expanded": e.unref(se) ? "true" : "false",
                        "data-ps": "61f36d81-button-1",
                        onClick: P[1] || (P[1] = j => e.unref($)())
                    }, [e.unref(ne) && e.unref(u).profile.preferredName || e.unref(u).profile.firstName || e.unref(u).profile.email ? e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                        key: 0,
                        class: e.normalizeClass(y.$style["user-avatar-initials"]),
                        "aria-hidden": "true",
                        "data-show-setting": "true",
                        "data-ps": "61f36d81-span-5"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Wi, [e.createTextVNode(e.toDisplayString(e.unref(ne) && e.unref(u).profile.preferredName && e.unref(u).profile.preferredName.substring(0, 1) || e.unref(u).profile.firstName && e.unref(u).profile.firstName.substring(0, 1) || e.unref(u).profile.email && e.unref(u).profile.email.substring(0, 1)), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), !(e.unref(ne) && e.unref(u).profile.preferredName) && !e.unref(u).profile.firstName && !e.unref(u).profile.email ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Ji, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", Zi, [e.withDirectives(e.createElementVNode("use", Yi, null, 512), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                        class: e.normalizeClass([y.$style["user-name"], a.classStyle ? y.$style["c-sign-up-link"] : ""]),
                        "data-ps": "61f36d81-span-74",
                        title: e.unref(ne) && e.unref(u).profile.preferredName || e.unref(u).profile.firstName || e.unref(u).profile.email
                    }, [e.createTextVNode(e.toDisplayString(e.unref(ne) && e.unref(u).profile.preferredName || e.unref(u).profile.firstName || e.unref(u).profile.email), 1)], 10, Xi)), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", Qi, [e.createTextVNode(e.toDisplayString((Ue = e.unref(n)) == null ? void 0 : Ue.profileText), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ])], 8, ji)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(g) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", vi, [e.unref(u).profile.firstName || e.unref(u).profile.email ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: 0,
                        class: e.normalizeClass([y.$style["user-details"], "phw-pb-1-5"]),
                        "data-ps": "61f36d81-div-7"
                    }, [e.unref(ne) && e.unref(u).profile.preferredName || e.unref(u).profile.firstName || e.unref(u).profile.email ? e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                        key: 0,
                        class: e.normalizeClass(y.$style["mobile-logged-in-user-name"]),
                        "aria-hidden": "true",
                        "data-ps": "61f36d81-span-9"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", er, [e.createTextVNode(e.toDisplayString(e.unref(ne) && e.unref(u).profile.preferredName && e.unref(u).profile.preferredName.substring(0, 1) || e.unref(u).profile.firstName && e.unref(u).profile.firstName.substring(0, 1) || e.unref(u).profile.email && e.unref(u).profile.email.substring(0, 1)), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), !(e.unref(ne) && e.unref(u).profile.preferredName) && !e.unref(u).profile.firstName && !e.unref(u).profile.email ? e.withDirectives((e.openBlock(), e.createElementBlock("span", tr, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", ar, [e.withDirectives(e.createElementVNode("use", nr, null, 512), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("ul", {
                        role: "list",
                        "data-ps": "61f36d81-ul-1",
                        class: e.normalizeClass(y.$style["candidate-lists"])
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("li", {
                        class: e.normalizeClass([e.unref(ne) && e.unref(u).profile.preferredName || e.unref(u).profile.firstName ? "phw-list-none phw-g-text-default-dark" : y.$style["user-detail-listitem"], "phw-list-none"]),
                        "data-ph-at-id": "heading-text",
                        title: e.unref(ne) && e.unref(u).profile.preferredName ? e.unref(u).profile.preferredName : e.unref(u).profile.firstName ? e.unref(u).profile.firstName + " " + (e.unref(u).profile.lastName || "") : e.unref(u).profile.email,
                        "data-ps": "61f36d81-li-1"
                    }, [e.createTextVNode(e.toDisplayString(e.unref(ne) && e.unref(u).profile.preferredName ? e.unref(u).profile.preferredName : e.unref(u).profile.firstName ? e.unref(u).profile.firstName + " " + (e.unref(u).profile.lastName || "") : e.unref(u).profile.email), 1)], 10, ir)), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("li", rr, [e.withDirectives((e.openBlock(), e.createElementBlock("a", sr, [e.createTextVNode(e.toDisplayString((Qt = e.unref(n)) == null ? void 0 : Qt.personalAccountLinkText), 1)])), [
                        [e.unref(t.vPhwSetting)],
                        [e.unref(t.vPhwTrack), "view_profile_click"],
                        [e.unref(t.vPhwHref), e.unref(Ve)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(se) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: 2,
                        class: e.normalizeClass(y.$style["logged-in-drop-down"]),
                        "data-ps": "61f36d81-div-8"
                    }, [e.unref(u).profile.firstName || e.unref(u).profile.email ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: 0,
                        class: e.normalizeClass(y.$style["logged-in-user-details"]),
                        "data-ps": "61f36d81-div-9"
                    }, [e.unref(ne) && e.unref(u).profile.preferredName || e.unref(u).profile.firstName || e.unref(u).profile.email ? e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                        key: 0,
                        class: e.normalizeClass([y.$style["user-avatar-initials"], y.$style["logged-in-user-name"]]),
                        "aria-hidden": "true",
                        "data-ps": "61f36d81-span-12"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", dr, [e.createTextVNode(e.toDisplayString(e.unref(ne) && e.unref(u).profile.preferredName && e.unref(u).profile.preferredName.substring(0, 1) || e.unref(u).profile.firstName && e.unref(u).profile.firstName.substring(0, 1) || e.unref(u).profile.email && e.unref(u).profile.email.substring(0, 1)), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), !(e.unref(ne) && e.unref(u).profile.preferredName) && !e.unref(u).profile.firstName && !e.unref(u).profile.email ? e.withDirectives((e.openBlock(), e.createElementBlock("span", lr, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", or, [e.withDirectives(e.createElementVNode("use", cr, null, 512), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.createElementVNode("div", {
                        class: e.normalizeClass(y.$style["canditate-action-block"]),
                        "data-ps": "61f36d81-div-84"
                    }, [e.unref(ne) && e.unref(u).profile.preferredName || e.unref(u).profile.firstName + e.unref(u).profile.lastName ? e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                        key: 0,
                        class: "phw-g-text-default-semibold-dark phw-d-inline-block phw-line-clamp phw-line-clamp-1",
                        "data-ph-at-id": "heading-text",
                        "data-ps": "61f36d81-span-85",
                        title: e.unref(ne) && e.unref(u).profile.preferredName || e.unref(u).profile.firstName + " " + e.unref(u).profile.lastName
                    }, [e.createTextVNode(e.toDisplayString(e.unref(ne) && e.unref(u).profile.preferredName || (e.unref(u).profile.firstName ? e.unref(u).profile.firstName : "") + " " + (e.unref(u).profile.lastName ? e.unref(u).profile.lastName : "")), 1)], 8, pr)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                        class: e.normalizeClass(["phw-g-text-default-secondary phw-d-block", y.$style["drop-down-user-name"]]),
                        title: e.unref(u).profile.email,
                        "data-ps": "61f36d81-span-15"
                    }, [e.createTextVNode(e.toDisplayString(e.unref(u).profile.email), 1)], 10, fr)), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        class: e.normalizeClass(y.$style["user-actions"]),
                        "data-ps": "61f36d81-div-10"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", hr, [e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        role: "listitem",
                        class: e.normalizeClass(y.$style["user-actions-listitem"]),
                        "data-ps": "61f36d81-div-12"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("a", wr, [e.createTextVNode(e.toDisplayString((ze = e.unref(n)) == null ? void 0 : ze.personalAccountLinkText), 1)])), [
                        [e.unref(t.vPhwTrack), "view_profile_click"],
                        [e.unref(t.vPhwSetting)],
                        [e.unref(t.vPhwHref), e.unref(Ve)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        role: "listitem",
                        class: e.normalizeClass(y.$style["user-actions-listitem"]),
                        "data-ps": "61f36d81-div-13"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("a", $r, [e.createTextVNode(e.toDisplayString((We = (Q = e.unref(n)) == null ? void 0 : Q.signOutButton) == null ? void 0 : We.text), 1)])), [
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
                    ]) : e.createCommentVNode("", !0), e.unref(te) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", gr, [e.withDirectives((e.openBlock(), e.createElementBlock("div", kr, [e.unref(ae) ? e.createCommentVNode("", !0) : e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                        key: 0,
                        ref_key: "resendCloseButton",
                        ref: s,
                        class: e.normalizeClass(["ph-a11y-popup-start-focus close phw-modal-close", y.$style["close-popup"]]),
                        "aria-label": (xe = e.unref(n)) == null ? void 0 : xe.closePopupButtonAriaLabel,
                        "data-ph-at-id": "close-link",
                        "data-ps": "61f36d81-button-2",
                        onClick: P[2] || (P[2] = j => e.unref(Se)())
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", ur, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", {
                        fill: "currentcolor",
                        "aria-hidden": "true",
                        class: e.normalizeClass(y.$style["close-btn"]),
                        "data-ps": "61f36d81-svg-3"
                    }, [e.withDirectives(e.createElementVNode("use", yr, null, 512), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])], 10, mr)), [
                        [e.unref(t.vPhwTrack), "modal_close_click"],
                        [e.unref(t.vPhwSetting)]
                    ]), e.unref(g) ? e.createCommentVNode("", !0) : e.withDirectives((e.openBlock(), e.createElementBlock("div", br, [e.unref(T) === "signIn" ? e.withDirectives((e.openBlock(), e.createElementBlock("div", Br, [e.withDirectives((e.openBlock(), e.createElementBlock("div", Sr, [e.unref(o) === "signIn" ? e.withDirectives((e.openBlock(), e.createElementBlock("div", Er, [e.withDirectives((e.openBlock(), e.createElementBlock("h2", Pr, [e.createTextVNode(e.toDisplayString((tt = e.unref(n)) == null ? void 0 : tt.signInPopUpHeading), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(o) === "forgotPassword" ? e.withDirectives((e.openBlock(), e.createElementBlock("div", _r, [e.withDirectives((e.openBlock(), e.createElementBlock("h2", {
                        "ally-label-heading": "",
                        class: e.normalizeClass([y.$style.heading, "phw-text-c phw-mb-5 phw-mb-xl-4 phw-g-h2-card-title-dark-default"]),
                        "data-ps": "61f36d81-h2-2",
                        "data-ph-at-id": "forgot-password-heading"
                    }, [e.createTextVNode(e.toDisplayString((at = e.unref(n)) == null ? void 0 : at.forgotPasswordPopUpHeading), 1)], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", Dr, [e.createTextVNode(e.toDisplayString((ge = e.unref(n)) == null ? void 0 : ge.forgotPasswordPopUpSubHeading), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(o) === "resetPasswordLink" ? e.withDirectives((e.openBlock(), e.createElementBlock("div", xr, [e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        ref_key: "pcsA11yResetPasswordHeading",
                        ref: G,
                        tabindex: "-1",
                        "data-ps": "61f36d81-div-22"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("h2", Nr, [e.createTextVNode(e.toDisplayString((nt = e.unref(n)) == null ? void 0 : nt.resetPasswordPopUpHeading), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives(e.createElementVNode("span", {
                        class: "phw-d-block phw-text-c phw-g-p-default-secondary",
                        "data-ps": "61f36d81-span-17",
                        innerHTML: e.unref(La)((kt = e.unref(n)) == null ? void 0 : kt.resetPasswordPopUpSubHeading1, {
                            emailId: e.unref(H).email
                        })
                    }, null, 8, Tr), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("form", {
                        class: e.normalizeClass(e.unref(o) === "forgotPassword" ? "phw-s-forgot-Password-form" : ""),
                        "data-ps": "61f36d81-form-1"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", Vr, [e.unref(o) != "resetPasswordLink" ? e.withDirectives((e.openBlock(), e.createElementBlock("div", Lr, [e.withDirectives((e.openBlock(), e.createElementBlock("label", Ir, [e.createTextVNode(e.toDisplayString(((Tt = e.unref(n)) == null ? void 0 : Tt.createAccountEmailFormLabel) || ((mt = e.unref(n)) == null ? void 0 : mt.signInEmailFormLabel)), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", Mr, [e.withDirectives((e.openBlock(), e.createElementBlock("div", Ar, [e.withDirectives(e.createElementVNode("input", {
                        id: "signinEmail",
                        ref_key: "loginEmail",
                        ref: w,
                        "onUpdate:modelValue": P[3] || (P[3] = j => e.unref(H).email = j),
                        "aria-label": "Enter email",
                        autocomplete: "email",
                        "aria-describedby": "errorCreateEmail",
                        class: "phw-g-text-field-style-1 phw-icon-right phw-input-icon-pr-lg",
                        placeholder: (ut = e.unref(n)) == null ? void 0 : ut.signInEmailFormPlaceHolder,
                        type: "email",
                        "data-ph-at-id": "input",
                        "data-ph-at-flow": "sign-in-email",
                        "data-ps": "61f36d81-input-1",
                        onKeyup: P[4] || (P[4] = j => e.unref(D)()),
                        onChange: P[5] || (P[5] = j => e.unref(I)())
                    }, null, 40, Cr), [
                        [e.vModelText, e.unref(H).email],
                        [e.unref(t.vPhwSetting)]
                    ]), e.unref(c).email.error && !e.unref(m) ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Or, [e.unref(c).email.error && !e.unref(m) ? e.withDirectives((e.openBlock(), e.createElementBlock("svg", {
                        key: 0,
                        class: e.normalizeClass([y.$style["error-icon"], "phw-g-icon-failure"]),
                        fill: "currentcolor",
                        "aria-hidden": "true",
                        "data-ps": "61f36d81-svg-4"
                    }, [e.withDirectives(e.createElementVNode("use", Fr, null, 512), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(m) ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Rr, [e.unref(m) ? e.withDirectives((e.openBlock(), e.createElementBlock("svg", {
                        key: 0,
                        class: e.normalizeClass([y.$style["verified-credential"], "phw-g-icon-success"]),
                        fill: "currentcolor",
                        "aria-hidden": "true",
                        "data-ps": "61f36d81-svg-5"
                    }, [e.withDirectives(e.createElementVNode("use", Hr, null, 512), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("div", Ur, [e.unref(z) && e.unref(le) ? e.withDirectives((e.openBlock(), e.createElementBlock("span", zr, [e.createTextVNode(e.toDisplayString((Vt = e.unref(n)) == null ? void 0 : Vt.passwordVisibleSrOnly), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), !e.unref(z) && e.unref(le) ? e.withDirectives((e.openBlock(), e.createElementBlock("span", qr, [e.createTextVNode(e.toDisplayString((Je = e.unref(n)) == null ? void 0 : Je.passwordInVisibleSrOnly), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", Gr, [e.unref(c).email.error ? e.withDirectives((e.openBlock(), e.createElementBlock("div", Kr, [e.withDirectives((e.openBlock(), e.createElementBlock("div", jr, [e.unref(c).email.error && e.unref(c).email.code === "E101" && !e.unref(m) && !e.unref(c).email.srHidden ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Wr, [e.createTextVNode(e.toDisplayString((Ze = e.unref(n)) == null ? void 0 : Ze.errorMessageEmptyEmail), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(c).email.error && e.unref(c).email.code === "E102" && !e.unref(m) && !e.unref(c).email.srHidden ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Jr, [e.createTextVNode(e.toDisplayString((vt = e.unref(n)) == null ? void 0 : vt.errorMessageInvalidEmail), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.unref(c).email.error && e.unref(c).email.code === "E101" && !e.unref(m) && e.unref(c).email.srHidden ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Zr, [e.createTextVNode(e.toDisplayString((ea = e.unref(n)) == null ? void 0 : ea.errorMessageEmptyEmail), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(c).email.error && e.unref(c).email.code === "E102" && !e.unref(m) && e.unref(c).email.srHidden ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Yr, [e.createTextVNode(e.toDisplayString((be = e.unref(n)) == null ? void 0 : be.errorMessageInvalidEmail), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(c).email.error && e.unref(c).email.code === "E103" ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Xr, null, 512)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(c).email.error && e.unref(c).email.code === "E105" ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Qr, [e.createTextVNode(e.toDisplayString((qe = e.unref(n)) == null ? void 0 : qe.noAccountError) + " ", 1), e.withDirectives((e.openBlock(), e.createElementBlock("a", {
                        class: "phw-g-btn-link phw-g-text-default-dark",
                        href: "javascript:void(0);",
                        role: "button",
                        "data-ps": "61f36d81-a-7",
                        "data-ph-at-id": "switch-to-sign-up",
                        onClick: P[6] || (P[6] = j => e.unref(f)("signUp"))
                    }, [e.createTextVNode(e.toDisplayString((ke = (ta = e.unref(n)) == null ? void 0 : ta.createAccountButton) == null ? void 0 : ke.text), 1)])), [
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
                    ]) : e.createCommentVNode("", !0), e.unref(o) === "signIn" ? e.withDirectives((e.openBlock(), e.createElementBlock("div", vr, [e.withDirectives((e.openBlock(), e.createElementBlock("label", es, [e.createTextVNode(e.toDisplayString((yt = e.unref(n)) == null ? void 0 : yt.signInPasswordFormLabel), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", ts, [e.withDirectives((e.openBlock(), e.createElementBlock("div", as, [e.withDirectives(e.createElementVNode("input", {
                        id: "signinPassword",
                        ref_key: "loginPassword",
                        ref: h,
                        "onUpdate:modelValue": P[7] || (P[7] = j => e.unref(H).password = j),
                        "aria-label": "Enter password",
                        class: "phw-g-text-field-style-1 phw-icon-right phw-input-icon-pr-lg",
                        placeholder: (it = e.unref(n)) == null ? void 0 : it.signInPasswordFormPlaceHolder,
                        type: e.unref(z) ? "text" : "password",
                        "aria-describedby": "errorPassword",
                        "data-ph-at-id": "input",
                        autocomplete: "current-password",
                        "data-ps": "61f36d81-input-2",
                        onChange: P[8] || (P[8] = j => e.unref(v)(e.unref(H).password, !0))
                    }, null, 40, ns), [
                        [e.vModelDynamic, e.unref(H).password],
                        [e.unref(t.vPhwSetting)]
                    ]), e.unref(c).password.error && !e.unref(ee) ? e.withDirectives((e.openBlock(), e.createElementBlock("span", is, [e.unref(c).password.error && !e.unref(ee) ? e.withDirectives((e.openBlock(), e.createElementBlock("svg", {
                        key: 0,
                        class: e.normalizeClass([y.$style["error-icon"], "phw-g-icon-failure"]),
                        fill: "currentcolor",
                        "aria-hidden": "true",
                        "data-ps": "61f36d81-svg-6"
                    }, [e.withDirectives(e.createElementVNode("use", rs, null, 512), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        class: e.normalizeClass(y.$style["pswrd-visibility"] + " " + (e.unref(c).password.error ? y.$style["error-password-icon"] : "")),
                        "data-ps": "61f36d81-div-33"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                        type: "button",
                        class: e.normalizeClass(["phw-d-flex phw-btn phw-g-btn-link", y.$style["pswrd-visibility-btn"]]),
                        "aria-label": e.unref(z) ? "Hide password" : "Show password",
                        "data-ph-at-id": "eye-icon-button",
                        "data-ps": "61f36d81-button-3",
                        onClick: P[9] || (P[9] = j => e.unref(F)())
                    }, [e.unref(z) || !e.unref(z) ? e.withDirectives((e.openBlock(), e.createElementBlock("span", ds, [e.unref(z) ? e.withDirectives((e.openBlock(), e.createElementBlock("svg", {
                        key: 0,
                        class: e.normalizeClass([y.$style["icon-eye"], "phw-g-icon-dark"]),
                        fill: "currentcolor",
                        "aria-hidden": "true",
                        "data-ph-at-id": "eye-icon-open",
                        "data-ps": "61f36d81-svg-7"
                    }, [e.withDirectives(e.createElementVNode("use", ls, null, 512), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(z) ? e.createCommentVNode("", !0) : e.withDirectives((e.openBlock(), e.createElementBlock("svg", {
                        key: 1,
                        class: e.normalizeClass([y.$style["icon-eye"], "phw-g-icon-dark"]),
                        fill: "currentcolor",
                        "aria-hidden": "true",
                        "data-ph-at-id": "eye-icon-close",
                        "data-ps": "61f36d81-svg-8"
                    }, [e.withDirectives(e.createElementVNode("use", os, null, 512), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)], 10, ss)), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", cs, [e.withDirectives((e.openBlock(), e.createElementBlock("div", ps, [e.unref(c).password.error && e.unref(c).password.code === "E101" && !e.unref(c).password.srHidden ? e.withDirectives((e.openBlock(), e.createElementBlock("span", fs, [e.createTextVNode(e.toDisplayString((rt = e.unref(n)) == null ? void 0 : rt.errorMessageEmptyPassword), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(c).password.error && e.unref(c).password.code === "E103" && !e.unref(c).password.srHidden ? e.withDirectives((e.openBlock(), e.createElementBlock("span", hs, [e.createTextVNode(e.toDisplayString((st = e.unref(n)) == null ? void 0 : st.errorIncorrectPassword), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.unref(c).password.error && e.unref(c).password.code === "E101" && e.unref(c).password.srHidden ? e.withDirectives((e.openBlock(), e.createElementBlock("span", ws, [e.createTextVNode(e.toDisplayString((dt = e.unref(n)) == null ? void 0 : dt.errorMessageEmptyPassword), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(c).password.error && e.unref(c).password.code === "E103" && e.unref(c).password.srHidden ? e.withDirectives((e.openBlock(), e.createElementBlock("span", $s, [e.createTextVNode(e.toDisplayString((Lt = e.unref(n)) == null ? void 0 : Lt.errorIncorrectPassword), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(o) === "signIn" ? e.withDirectives((e.openBlock(), e.createElementBlock("div", gs, [e.unref(c).server.error && e.unref(o) === "signIn" ? e.withDirectives((e.openBlock(), e.createElementBlock("div", ks, [e.unref(c).email.error && !e.unref(m) ? e.withDirectives((e.openBlock(), e.createElementBlock("span", ms, [e.unref(c).email.error && !e.unref(m) ? e.withDirectives((e.openBlock(), e.createElementBlock("svg", {
                        key: 0,
                        class: e.normalizeClass([y.$style["error-icon"], "phw-g-icon-failure"]),
                        fill: "currentcolor",
                        "aria-hidden": "true",
                        "data-ph-at-id": "eye-icon-open",
                        "data-ps": "61f36d81-svg-9"
                    }, [e.withDirectives(e.createElementVNode("use", us, null, 512), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(c).server.code === "E500" ? e.withDirectives((e.openBlock(), e.createElementBlock("span", ys, [e.createTextVNode(e.toDisplayString((Pe = e.unref(n)) == null ? void 0 : Pe.technicalIssueText), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(o) === "signIn" ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: 3,
                        class: e.normalizeClass(y.$style["form-group-row"]),
                        "data-ps": "61f36d81-div-38"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", bs, [e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                        type: "button",
                        class: "phw-btn phw-g-btn-primary phw-width-4",
                        "data-ph-at-id": "submit-button",
                        "data-ps": "61f36d81-button-4",
                        onClick: P[10] || (P[10] = j => e.unref(_)())
                    }, [e.createTextVNode(e.toDisplayString((Mt = (It = e.unref(n)) == null ? void 0 : It.signInButton) == null ? void 0 : Mt.text), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        class: e.normalizeClass(["phw-d-flex phw-justify-content-between phw-align-items-center phw-mt-2 phw-mt-sm-2 phw-d-sm-block", y.$style["stay-and-forgot-pass-block"]]),
                        "data-ps": "61f36d81-div-40"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Bs, [e.withDirectives((e.openBlock(), e.createElementBlock("label", Ss, [e.withDirectives(e.createElementVNode("input", {
                        id: "staySignIn",
                        "onUpdate:modelValue": P[11] || (P[11] = j => e.isRef(A) ? A.value = j : null),
                        type: "checkbox",
                        role: "checkbox",
                        "data-ph-at-id": "stay-sign-in",
                        class: "phw-form-input-group",
                        "aria-checked": e.unref(A) ? "true" : "false",
                        "aria-label": (bt = e.unref(n)) == null ? void 0 : bt.staySignedInCheckboxAriaLabel,
                        "data-ps": "61f36d81-input-3"
                    }, null, 8, Es), [
                        [e.vModelCheckbox, e.unref(A)],
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", Ps, [e.createTextVNode(e.toDisplayString((Ye = e.unref(n)) == null ? void 0 : Ye.staySignedInCheckboxText), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", _s, [e.withDirectives((e.openBlock(), e.createElementBlock("a", {
                        href: "javascript:void(0);",
                        role: "button",
                        "data-ph-at-id": "forgot-password-link",
                        class: "phw-btn phw-g-btn-link",
                        "data-ps": "61f36d81-a-8",
                        onClick: P[12] || (P[12] = j => e.unref(l)())
                    }, [e.createTextVNode(e.toDisplayString((na = (aa = e.unref(n)) == null ? void 0 : aa.forgotPasswordLink) == null ? void 0 : na.text), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(o) === "forgotPassword" ? e.withDirectives((e.openBlock(), e.createElementBlock("div", Ds, [e.unref(c).server.error && e.unref(o) === "forgotPassword" ? e.withDirectives((e.openBlock(), e.createElementBlock("div", xs, [e.unref(c).server.code === "E500" ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Ns, [e.createTextVNode(e.toDisplayString((ia = e.unref(n)) == null ? void 0 : ia.technicalIssueText), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(o) === "forgotPassword" ? e.withDirectives((e.openBlock(), e.createElementBlock("div", Ts, [e.withDirectives((e.openBlock(), e.createElementBlock("div", Vs, [e.withDirectives((e.openBlock(), e.createElementBlock("a", {
                        href: "javascript:void(0)",
                        role: "button",
                        class: "phw-btn phw-g-btn-primary phw-width-4",
                        "data-ph-at-id": "submit-button",
                        "data-ps": "61f36d81-a-9",
                        onClick: P[13] || (P[13] = j => e.unref(O)())
                    }, [e.createTextVNode(e.toDisplayString((sa = (ra = e.unref(n)) == null ? void 0 : ra.resetPasswordButton) == null ? void 0 : sa.text), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.unref(o) === "resetPasswordLink" ? e.withDirectives((e.openBlock(), e.createElementBlock("div", Ls, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Is, [e.createTextVNode(e.toDisplayString((da = e.unref(n)) == null ? void 0 : da.resentEmailButtonLabel), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                        class: e.normalizeClass(["phw-ml-1 phw-p-0 phw-g-btn-link-candidate-login phw-td-none", e.unref($e) ? y.$style["resend-btn-disabled"] : y.$style["resent-btn"]]),
                        disabled: !e.unref(Ae),
                        "data-ps": "61f36d81-a-10",
                        "data-ph-at-id": "resend-mail-link",
                        onClick: P[14] || (P[14] = j => e.unref(E)())
                    }, [e.createTextVNode(e.toDisplayString((lt = e.unref(n)) == null ? void 0 : lt.resentEmailButtonText), 1)], 10, Ms)), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.unref($e) ? e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                        key: 0,
                        ref_key: "resendEmailSucessText",
                        ref: x,
                        class: "phw-s-email-resent-text phw-g-text-small-primary phw-d-block phw-mt-2",
                        tabindex: "-1",
                        "data-ps": "61f36d81-span-84"
                    }, [e.createTextVNode(e.toDisplayString((la = e.unref(n)) == null ? void 0 : la.emailResendSuccessText), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(o) === "resetPasswordLink" ? e.withDirectives((e.openBlock(), e.createElementBlock("div", As, [e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                        type: "button",
                        class: "signInBtn phw-btn phw-g-btn-secondary",
                        "data-ph-at-id": "signin-link",
                        "data-ps": "61f36d81-button-5",
                        onClick: P[15] || (P[15] = j => e.unref(f)("signIn"))
                    }, [e.createTextVNode(e.toDisplayString((Me = (oa = e.unref(n)) == null ? void 0 : oa.returnSigninText) == null ? void 0 : Me.text), 1)])), [
                        [e.unref(t.vPhwSetting)],
                        [e.unref(t.vPhwTrack), "return_to_signIn_click"]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.unref(T) === "signUp" ? e.withDirectives((e.openBlock(), e.createElementBlock("div", Cs, [e.withDirectives(e.createElementVNode("div", Os, null, 512), [
                        [e.vShow, e.unref(Fe)],
                        [e.unref(t.vPhwSetting)]
                    ]), e.unref(de) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", Fs, [e.unref(oe) === e.unref(Ie) ? e.withDirectives((e.openBlock(), e.createElementBlock("h2", Rs, [e.createTextVNode(e.toDisplayString((ot = e.unref(n)) == null ? void 0 : ot.createAccountPopUpHeading), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(oe) === e.unref(U) ? e.withDirectives((e.openBlock(), e.createElementBlock("h2", Hs, [e.createTextVNode(e.toDisplayString((ct = e.unref(n)) == null ? void 0 : ct.oneTimeLoginPopUpHeading), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(oe) === e.unref(U) ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Us, [e.createTextVNode(e.toDisplayString((ca = e.unref(n)) == null ? void 0 : ca.oneTimeLoginPopupSubHeading), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("div", zs, [e.withDirectives((e.openBlock(), e.createElementBlock("div", qs, [e.withDirectives((e.openBlock(), e.createElementBlock("div", Gs, [e.withDirectives((e.openBlock(), e.createElementBlock("label", Ks, [e.createTextVNode(e.toDisplayString((pa = e.unref(n)) == null ? void 0 : pa.signInEmailFormLabel), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", js, [e.withDirectives((e.openBlock(), e.createElementBlock("div", Ws, [e.withDirectives(e.createElementVNode("input", {
                        id: "createEmail",
                        ref_key: "loginEmail",
                        ref: w,
                        "onUpdate:modelValue": P[16] || (P[16] = j => e.unref(H).email = j),
                        "aria-label": "Enter email",
                        class: e.normalizeClass([e.unref(c).email.error ? y.$style["error-input"] : "", "phw-g-text-field-style-1 phw-icon-right phw-input-icon-pr-lg"]),
                        placeholder: (Xe = e.unref(n)) == null ? void 0 : Xe.createAccountEmailFormPlaceHolder,
                        type: "email",
                        "aria-describedby": "errorCreateEmail",
                        autocomplete: "email",
                        "aria-required": "true",
                        "data-ph-at-id": "input",
                        "data-ph-at-flow": "create-acc-email",
                        "data-ps": "61f36d81-input-4",
                        onKeyup: P[17] || (P[17] = j => e.unref(D)(!0)),
                        onChange: P[18] || (P[18] = j => e.unref(I)(!1, !0))
                    }, null, 42, Js), [
                        [e.vModelText, e.unref(H).email],
                        [e.unref(t.vPhwSetting)]
                    ]), e.unref(c).email.error && !e.unref(m) ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Zs, [e.unref(c).email.error && !e.unref(m) ? e.withDirectives((e.openBlock(), e.createElementBlock("svg", {
                        key: 0,
                        class: e.normalizeClass([y.$style["error-icon"], "phw-g-icon-failure"]),
                        fill: "currentcolor",
                        "aria-hidden": "true",
                        "data-ph-at-id": "email-error-icon",
                        "data-ps": "61f36d81-svg-10"
                    }, [e.withDirectives(e.createElementVNode("use", Ys, null, 512), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(m) ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Xs, [e.unref(m) ? e.withDirectives((e.openBlock(), e.createElementBlock("svg", {
                        key: 0,
                        class: e.normalizeClass([y.$style["verified-credential"], "phw-g-icon-success"]),
                        fill: "currentcolor",
                        "aria-hidden": "true",
                        "data-ph-at-id": "email-success-icon",
                        "data-ps": "61f36d81-svg-11"
                    }, [e.withDirectives(e.createElementVNode("use", Qs, null, 512), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", vs, [e.unref(c).email.error ? e.withDirectives((e.openBlock(), e.createElementBlock("div", ed, [e.unref(c).email.error && e.unref(c).email.code === "E101" && !e.unref(m) && !e.unref(c).email.srHidden ? e.withDirectives((e.openBlock(), e.createElementBlock("span", td, [e.createTextVNode(e.toDisplayString((fa = e.unref(n)) == null ? void 0 : fa.errorMessageEmptyEmail), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(c).email.error && e.unref(c).email.code === "E102" && !e.unref(m) && !e.unref(c).email.srHidden ? e.withDirectives((e.openBlock(), e.createElementBlock("span", ad, [e.createTextVNode(e.toDisplayString((pt = e.unref(n)) == null ? void 0 : pt.errorMessageInvalidEmail), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(c).email.error && e.unref(c).email.code === "E101" && !e.unref(m) && e.unref(c).email.srHidden ? e.withDirectives((e.openBlock(), e.createElementBlock("span", nd, [e.createTextVNode(e.toDisplayString((At = e.unref(n)) == null ? void 0 : At.errorMessageEmptyEmail), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(c).email.error && e.unref(c).email.code === "E102" && !e.unref(m) && e.unref(c).email.srHidden ? e.withDirectives((e.openBlock(), e.createElementBlock("span", id, [e.createTextVNode(e.toDisplayString((ha = e.unref(n)) == null ? void 0 : ha.errorMessageInvalidEmail), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(c).email.error && e.unref(c).email.code === "E103" ? e.withDirectives((e.openBlock(), e.createElementBlock("span", rd, null, 512)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(c).email.error && e.unref(c).email.code === "E104" ? e.withDirectives((e.openBlock(), e.createElementBlock("span", sd, [e.createTextVNode(e.toDisplayString((ft = e.unref(n)) == null ? void 0 : ft.emailInUseError) + " ", 1), e.withDirectives((e.openBlock(), e.createElementBlock("a", {
                        class: "create-account",
                        href: "javascript:void(0);",
                        role: "button",
                        "data-ph-at-id": "already-exist-email-sign-in-button",
                        "data-ps": "61f36d81-a-11",
                        onClick: P[19] || (P[19] = j => e.unref(f)("signIn"))
                    }, [e.createTextVNode(e.toDisplayString((wa = (ie = e.unref(n)) == null ? void 0 : ie.signInButton) == null ? void 0 : wa.text), 1)])), [
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
                    ]), e.unref(oe) === e.unref(Ie) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", dd, [e.withDirectives((e.openBlock(), e.createElementBlock("label", ld, [e.createTextVNode(e.toDisplayString(($a = e.unref(n)) == null ? void 0 : $a.createAccountFormLabel), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", od, [e.withDirectives((e.openBlock(), e.createElementBlock("div", cd, [e.withDirectives(e.createElementVNode("input", {
                        id: "createPassword",
                        ref_key: "loginPassword",
                        ref: h,
                        "onUpdate:modelValue": P[20] || (P[20] = j => e.unref(H).password = j),
                        "aria-describedby": e.unref(c).password.error ? "errorCreatePasswordSrOnly" : "errorCreatePassword",
                        "aria-required": "true",
                        autocomplete: "new-password",
                        "aria-label": "Enter Password",
                        class: e.normalizeClass(["phw-g-text-field-style-1 phw-icon-right phw-input-icon-pr-lg", e.unref(c).password.error ? y.$style["error-input"] : ""]),
                        placeholder: (Qe = e.unref(n)) == null ? void 0 : Qe.signUpPasswordFormPlaceHolder,
                        type: e.unref(z) ? "text" : "password",
                        "data-ph-at-id": "input",
                        "data-ph-at-flow": "create-acc-password",
                        "data-ps": "61f36d81-input-5",
                        onKeyup: P[21] || (P[21] = j => e.unref(q)()),
                        onChange: P[22] || (P[22] = j => e.unref(v)())
                    }, null, 42, pd), [
                        [e.vModelDynamic, e.unref(H).password],
                        [e.unref(t.vPhwSetting)]
                    ]), e.unref(ee) ? e.withDirectives((e.openBlock(), e.createElementBlock("span", fd, [e.unref(ee) ? e.withDirectives((e.openBlock(), e.createElementBlock("svg", {
                        key: 0,
                        class: e.normalizeClass([y.$style["verified-credential"], "phw-g-icon-success"]),
                        fill: "currentcolor",
                        "aria-hidden": "true",
                        "data-ph-at-id": "password-success-icon",
                        "data-ps": "61f36d81-svg-12"
                    }, [e.withDirectives(e.createElementVNode("use", hd, null, 512), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(c).password.error && !e.unref(ee) ? e.withDirectives((e.openBlock(), e.createElementBlock("span", wd, [e.unref(c).password.error && !e.unref(ee) ? e.withDirectives((e.openBlock(), e.createElementBlock("svg", {
                        key: 0,
                        class: e.normalizeClass([y.$style["error-icon"], "phw-g-icon-failure"]),
                        fill: "currentcolor",
                        "aria-hidden": "true",
                        "data-ph-at-id": "password-error-icon",
                        "data-ps": "61f36d81-svg-13"
                    }, [e.withDirectives(e.createElementVNode("use", $d, null, 512), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        class: e.normalizeClass(y.$style["pswrd-visibility"] + " " + (e.unref(c).password.error || e.unref(ee) ? y.$style["error-password-icon"] : "")),
                        "data-ps": "61f36d81-div-57"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                        type: "button",
                        class: e.normalizeClass(["phw-d-flex phw-btn phw-g-btn-link", y.$style["pswrd-visibility-btn"]]),
                        "aria-label": e.unref(z) ? "Hide password" : "Show password",
                        "data-ph-at-id": "eye-icon-button",
                        "data-ps": "61f36d81-button-6",
                        onClick: P[23] || (P[23] = j => e.unref(F)())
                    }, [e.unref(z) || !e.unref(z) ? e.withDirectives((e.openBlock(), e.createElementBlock("span", kd, [e.unref(z) ? e.withDirectives((e.openBlock(), e.createElementBlock("svg", {
                        key: 0,
                        class: e.normalizeClass([y.$style["icon-eye"], "phw-g-icon-dark"]),
                        fill: "currentcolor",
                        "aria-hidden": "true",
                        "data-ph-at-id": "eye-icon-open",
                        "data-ps": "61f36d81-svg-14"
                    }, [e.withDirectives(e.createElementVNode("use", md, null, 512), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(z) ? e.createCommentVNode("", !0) : e.withDirectives((e.openBlock(), e.createElementBlock("svg", {
                        key: 1,
                        class: e.normalizeClass([y.$style["icon-eye"], "phw-g-icon-dark"]),
                        fill: "currentcolor",
                        "aria-hidden": "true",
                        "data-ph-at-id": "eye-icon-close",
                        "data-ps": "61f36d81-svg-15"
                    }, [e.withDirectives(e.createElementVNode("use", ud, null, 512), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)], 10, gd)), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", yd, [e.unref(z) && e.unref(le) ? e.withDirectives((e.openBlock(), e.createElementBlock("span", bd, [e.createTextVNode(e.toDisplayString((ga = e.unref(n)) == null ? void 0 : ga.passwordVisibleSrOnly), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), !e.unref(z) && e.unref(le) ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Bd, [e.createTextVNode(e.toDisplayString((Bt = e.unref(n)) == null ? void 0 : Bt.passwordInVisibleSrOnly), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", Sd, [e.unref(C) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", Ed, [e.unref(M).passwordLength.hasError || e.unref(M).numeric.hasError || e.unref(M).lowerCase.hasError || e.unref(M).upperCase.hasError ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Pd, [e.createTextVNode(e.toDisplayString((St = e.unref(n)) == null ? void 0 : St.errorSrOnly), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(M).passwordLength.hasError || e.unref(M).numeric.hasError || e.unref(M).lowerCase.hasError || e.unref(M).upperCase.hasError ? e.withDirectives((e.openBlock(), e.createElementBlock("span", _d, [e.createTextVNode(e.toDisplayString((Ct = e.unref(n)) == null ? void 0 : Ct.passwordErrorRequirementText), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(M).passwordLength.hasError ? e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                        key: 2,
                        class: e.normalizeClass(e.unref(M).passwordLength.hasError ? "error-msg" : ""),
                        "data-ps": "61f36d81-span-56"
                    }, [e.createTextVNode(e.toDisplayString((ka = e.unref(n)) == null ? void 0 : ka.createAccErrorStatement2), 1)], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(M).numeric.hasError ? e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                        key: 3,
                        class: e.normalizeClass(e.unref(M).numeric.hasError ? "error-msg" : ""),
                        "data-ps": "61f36d81-span-57"
                    }, [e.createTextVNode(e.toDisplayString((Ot = e.unref(n)) == null ? void 0 : Ot.createAccErrorStatement3), 1)], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(M).lowerCase.hasError ? e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                        key: 4,
                        class: e.normalizeClass(e.unref(M).lowerCase.hasError ? "error-msg" : ""),
                        "data-ps": "61f36d81-span-58"
                    }, [e.createTextVNode(e.toDisplayString((Et = e.unref(n)) == null ? void 0 : Et.createAccErrorStatement4), 1)], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(M).upperCase.hasError ? e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                        key: 5,
                        class: e.normalizeClass(e.unref(M).upperCase.hasError ? "error-msg" : ""),
                        "data-ps": "61f36d81-span-59"
                    }, [e.createTextVNode(e.toDisplayString((ma = e.unref(n)) == null ? void 0 : ma.createAccErrorStatement5), 1)], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(C) ? e.createCommentVNode("", !0) : e.withDirectives((e.openBlock(), e.createElementBlock("div", Dd, [e.unref(M).passwordLength.hasError || e.unref(M).numeric.hasError || e.unref(M).lowerCase.hasError || e.unref(M).upperCase.hasError ? e.withDirectives((e.openBlock(), e.createElementBlock("span", xd, [e.createTextVNode(e.toDisplayString((Pt = e.unref(n)) == null ? void 0 : Pt.errorSrOnly), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(M).passwordLength.hasError || e.unref(M).numeric.hasError || e.unref(M).lowerCase.hasError || e.unref(M).upperCase.hasError ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Nd, [e.createTextVNode(e.toDisplayString((Oe = e.unref(n)) == null ? void 0 : Oe.passwordErrorRequirementText), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(M).passwordLength.hasError ? e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                        key: 2,
                        class: e.normalizeClass(e.unref(M).passwordLength.hasError ? "error-msg" : ""),
                        "data-ps": "61f36d81-span-56"
                    }, [e.createTextVNode(e.toDisplayString((_t = e.unref(n)) == null ? void 0 : _t.createAccErrorStatement2), 1)], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(M).numeric.hasError ? e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                        key: 3,
                        class: e.normalizeClass(e.unref(M).numeric.hasError ? "error-msg" : ""),
                        "data-ps": "61f36d81-span-57"
                    }, [e.createTextVNode(e.toDisplayString((ua = e.unref(n)) == null ? void 0 : ua.createAccErrorStatement3), 1)], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(M).lowerCase.hasError ? e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                        key: 4,
                        class: e.normalizeClass(e.unref(M).lowerCase.hasError ? "error-msg" : ""),
                        "data-ps": "61f36d81-span-58"
                    }, [e.createTextVNode(e.toDisplayString((ht = e.unref(n)) == null ? void 0 : ht.createAccErrorStatement4), 1)], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(M).upperCase.hasError ? e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                        key: 5,
                        class: e.normalizeClass(e.unref(M).upperCase.hasError ? "error-msg" : ""),
                        "data-ps": "61f36d81-span-59"
                    }, [e.createTextVNode(e.toDisplayString((Ge = e.unref(n)) == null ? void 0 : Ge.createAccErrorStatement5), 1)], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", Td, [e.createTextVNode(e.toDisplayString((Ft = e.unref(n)) == null ? void 0 : Ft.createAccErrorStatement1) + " ", 1), e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                        "data-ph-at-id": "password-error-msg-1",
                        class: e.normalizeClass(e.unref(M).passwordLength.hasError ? y.$style["error-msg"] : ""),
                        "data-ps": "61f36d81-span-60"
                    }, [e.createTextVNode(e.toDisplayString((ya = e.unref(n)) == null ? void 0 : ya.createAccErrorStatement2), 1)], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                        "data-ph-at-id": "password-error-msg-2",
                        class: e.normalizeClass(e.unref(M).numeric.hasError ? y.$style["error-msg"] : ""),
                        "data-ps": "61f36d81-span-61"
                    }, [e.createTextVNode(e.toDisplayString((Rt = e.unref(n)) == null ? void 0 : Rt.createAccErrorStatement3), 1)], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                        "data-ph-at-id": "password-error-msg-3",
                        class: e.normalizeClass(e.unref(M).lowerCase.hasError ? y.$style["error-msg"] : ""),
                        "data-ps": "61f36d81-span-62"
                    }, [e.createTextVNode(e.toDisplayString((Ht = e.unref(n)) == null ? void 0 : Ht.createAccErrorStatement4), 1)], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                        "data-ph-at-id": "password-error-msg-4",
                        class: e.normalizeClass(e.unref(M).upperCase.hasError ? y.$style["error-msg"] : ""),
                        "data-ps": "61f36d81-span-63"
                    }, [e.createTextVNode(e.toDisplayString((Ut = e.unref(n)) == null ? void 0 : Ut.createAccErrorStatement5), 1)], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.unref(fe) && !(e.unref(N) && e.unref(N).length) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", Vd, [e.withDirectives((e.openBlock(), e.createElementBlock("label", Ld, [e.withDirectives(e.createElementVNode("input", {
                        id: "privacyDataConsent",
                        "onUpdate:modelValue": P[24] || (P[24] = j => e.isRef(re) ? re.value = j : null),
                        type: "checkbox",
                        "aria-checked": e.unref(re) ? "true" : "false",
                        role: "checkbox",
                        "data-ph-at-id": "checkbox-button",
                        "data-ph-at-type": "privacy-data-consent",
                        "aria-label": "I have read and agree to the Privacy Policy.",
                        class: e.normalizeClass(y.$style["stay-check-box"]),
                        "data-ps": "61f36d81-input-6",
                        onChange: P[25] || (P[25] = j => e.unref(pe)())
                    }, null, 42, Id), [
                        [e.vModelCheckbox, e.unref(re)],
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", Md, [e.createTextVNode(e.toDisplayString(((zt = e.unref(n)) == null ? void 0 : zt.privacyPolicyCheckboxText) || "I have read and agree to the ") + " ", 1), e.withDirectives((e.openBlock(), e.createElementBlock("a", Ad, [e.createTextVNode(e.toDisplayString((Ba = (ba = e.unref(n)) == null ? void 0 : ba.privacyPolicy) == null ? void 0 : Ba.text), 1)])), [
                        [e.unref(t.vPhwSetting)],
                        [e.unref(t.vPhwHref), ((Sa = (Dt = e.unref(n)) == null ? void 0 : Dt.privacyPolicy) == null ? void 0 : Sa.href) || "javascript:void(0);"]
                    ]), e.createTextVNode(e.toDisplayString((Ea = e.unref(n)) == null ? void 0 : Ea.privacyPolicyCheckboxSeparatorText) + " ", 1), e.withDirectives((e.openBlock(), e.createElementBlock("a", Cd, [e.createTextVNode(e.toDisplayString((Pa = (qt = e.unref(n)) == null ? void 0 : qt.termsOfUseText) == null ? void 0 : Pa.text), 1)])), [
                        [e.unref(t.vPhwSetting)],
                        [e.unref(t.vPhwHref), ((Gt = (_a = e.unref(n)) == null ? void 0 : _a.termsOfUseText) == null ? void 0 : Gt.href) || "javascript:void(0)"]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(N) && e.unref(N).length && e.unref(N).length < 3 ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: 1,
                        "data-ph-at-id": "consent-container",
                        "data-ph-at-count": (Da = e.unref(N)) == null ? void 0 : Da.length,
                        class: "phw-flex-wrap phw-mt-2 phw-mb-2 phw-d-flex phw-gap-2 phw-flex-column",
                        "data-ph-component-name": "pii-consent-data",
                        "data-ps": "61f36d81-div-79"
                    }, [(Kt = e.unref(n)) != null && Kt.piiconsentInfoHeading ? e.withDirectives((e.openBlock(), e.createElementBlock("div", Fd, [e.createTextVNode(e.toDisplayString((jt = e.unref(n)) == null ? void 0 : jt.piiconsentInfoHeading), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), (e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(e.unref(N), (j, Ma) => e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: j.type,
                        class: "phw-form-check",
                        "data-ps": "61f36d81-div-80"
                    }, [e.withDirectives(e.createElementVNode("input", {
                        id: "pii-consent-checkbox-" + Ma,
                        "onUpdate:modelValue": F1 => j.isChecked = F1,
                        "aria-invalid": !j.optional && e.unref(L) ? "true" : void 0,
                        type: "checkbox",
                        class: "phw-form-check-group",
                        "data-ph-at-index": Ma,
                        "data-ph-at-id": "consent-check-box",
                        "aria-checked": j.isChecked ? "true" : "false",
                        "aria-required": !j.optional,
                        "data-ps": "61f36d81-input-8"
                    }, null, 8, Rd), [
                        [e.vModelCheckbox, j.isChecked],
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("label", {
                        for: "pii-consent-checkbox-" + Ma,
                        class: "phw-mb-0 p1 phw-check-label",
                        "data-ps": "61f36d81-label-8"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Ud, [e.withDirectives(e.createElementVNode("span", {
                        class: "phw-g-text-default-dark",
                        "data-ps": "61f36d81-span-80",
                        innerHTML: j.isPrivacyConsent && j.consentText ? j.consentText : e.unref(n)[j.type + "Text"]
                    }, null, 8, zd), [
                        [e.unref(t.vPhwSetting)]
                    ]), j.optional ? e.createCommentVNode("", !0) : e.withDirectives((e.openBlock(), e.createElementBlock("span", qd, Gd)), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])], 8, Hd)), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])), 128)), (xa = e.unref(n)) != null && xa.piiconsentInfoDescription ? e.withDirectives((e.openBlock(), e.createElementBlock("div", Kd, [e.createTextVNode(e.toDisplayString((wt = e.unref(n)) == null ? void 0 : wt.piiconsentInfoDescription), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)], 8, Od)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(N) && e.unref(N).length && e.unref(N).length >= 3 ? e.withDirectives((e.openBlock(), e.createElementBlock("div", jd, [e.withDirectives(e.createVNode(e.unref(ui), {
                        "widget-context": e.unref(K),
                        content: (Na = e.unref(n)) == null ? void 0 : Na.dataConsentWdgt,
                        "sign-up-step": e.unref(oe),
                        "data-ps": "61f36d81-consentpopupdefaultdefaultv1-1"
                    }, null, 8, ["widget-context", "content", "sign-up-step"]), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("div", Wd, [e.unref(R) && e.unref(fe) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", Jd, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Zd, [e.createTextVNode(e.toDisplayString((Wt = e.unref(n)) == null ? void 0 : Wt.privacyPolicyCheckboxErrorText), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        "aria-live": e.unref(me) || e.unref(N).length >= 3 ? void 0 : "polite",
                        "aria-atomic": e.unref(me) || e.unref(N).length >= 3 ? void 0 : !0,
                        role: e.unref(me) || e.unref(N).length >= 3 ? void 0 : "alert",
                        "data-ps": "61f36d81-div-67"
                    }, [e.unref(L) ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Xd, [e.createTextVNode(e.toDisplayString((Ta = e.unref(n)) == null ? void 0 : Ta.piiConsentError), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)], 8, Yd)), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        class: e.normalizeClass(y.$style["form-group-row"]),
                        "data-ps": "61f36d81-div-68"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", Qd, [e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                        type: "button",
                        class: "phw-btn phw-g-btn-primary phw-width-4",
                        "data-ph-at-id": "submit-button",
                        "data-ps": "61f36d81-button-7",
                        onClick: P[26] || (P[26] = j => e.unref(oe) === e.unref(U) ? e.unref(Le)(!0) : e.unref(W)())
                    }, [e.createTextVNode(e.toDisplayString(e.unref(oe) === e.unref(U) ? (p = (d = e.unref(n)) == null ? void 0 : d.oneTimeLoginButton) == null ? void 0 : p.text : (X = (B = e.unref(n)) == null ? void 0 : B.createAccountButton) == null ? void 0 : X.text), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("div", vd, [e.unref(ae) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", el, [e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                        ref_key: "resendCloseButton",
                        ref: s,
                        class: e.normalizeClass(["ph-a11y-email-triggred-close-btn close phw-modal-close", y.$style["close-popup"]]),
                        "aria-label": (S = e.unref(n)) == null ? void 0 : S.closePopupButtonAriaLabel,
                        "data-ph-at-id": "close-link",
                        "data-ps": "61f36d81-button-2",
                        onClick: P[27] || (P[27] = j => e.unref(Se)())
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", al, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", {
                        fill: "currentcolor",
                        "aria-hidden": "true",
                        class: e.normalizeClass(y.$style["close-btn"]),
                        "data-ps": "61f36d81-svg-3"
                    }, [e.withDirectives(e.createElementVNode("use", nl, null, 512), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])], 10, tl)), [
                        [e.unref(t.vPhwSetting)],
                        [e.unref(t.vPhwTrack), "modal_close_click"]
                    ]), e.unref(k) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", il, [e.unref(oe) === e.unref(U) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", rl, [e.withDirectives(e.createElementVNode("h2", {
                        "ally-label-heading": "",
                        class: e.normalizeClass([y.$style["email-success-head"], "phw-text-l phw-mb-3 phw-mb-xl-3 phw-mb-sm-3 phw-text-c phw-g-h2-card-title-primary-default"]),
                        "data-ps": "61f36d81-h2-6",
                        innerHTML: e.unref(La)((J = e.unref(n)) == null ? void 0 : J.oneTimeLoginSuccessHeading, {
                            emailId: e.unref(H).email
                        })
                    }, null, 10, sl), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", dl, [e.createTextVNode(e.toDisplayString((ve = e.unref(n)) == null ? void 0 : ve.oneTimeLoginSuccessSubHeading), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", ll, [e.withDirectives((e.openBlock(), e.createElementBlock("span", ol, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", {
                        class: e.normalizeClass(y.$style["email-success-fail"]),
                        fill: "currentcolor",
                        "aria-hidden": "true",
                        "data-ph-at-id": "email-success-icon",
                        "data-ps": "61f36d81-svg-20"
                    }, [e.withDirectives(e.createElementVNode("use", cl, null, 512), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", pl, [e.createTextVNode(e.toDisplayString((Va = e.unref(n)) == null ? void 0 : Va.oneTimeLoginSuccessText), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(k) ? e.createCommentVNode("", !0) : e.withDirectives((e.openBlock(), e.createElementBlock("div", fl, [e.unref(oe) === e.unref(U) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", hl, [e.withDirectives(e.createElementVNode("h2", {
                        "ally-label-heading": "",
                        class: e.normalizeClass(["phw-text-l phw-text-c phw-g-h2-card-title-primary-default", y.$style["email-success-head"]]),
                        "data-ps": "61f36d81-h2-7",
                        innerHTML: e.unref(La)((Ya = e.unref(n)) == null ? void 0 : Ya.oneTimeLoginFailedHeading, {
                            emailId: e.unref(H).email
                        })
                    }, null, 10, wl), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", $l, [e.withDirectives((e.openBlock(), e.createElementBlock("span", gl, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", {
                        fill: "currentcolor",
                        class: e.normalizeClass(y.$style["email-success-fail"]),
                        "aria-hidden": "true",
                        "data-ph-at-id": "email-success-icon",
                        "data-ps": "61f36d81-svg-21"
                    }, [e.withDirectives(e.createElementVNode("use", kl, null, 512), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", ml, [e.createTextVNode(e.toDisplayString((Xa = e.unref(n)) == null ? void 0 : Xa.oneTimeLoginFailedText), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.unref($e) ? e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                        key: 2,
                        ref_key: "resendEmailSucessText",
                        ref: x,
                        class: "phw-s-email-resent-text phw-g-text-default-semibold-primary phw-d-flex phw-align-items-center phw-justify-content-start phw-mb-1 phw-mt-1",
                        tabindex: "-1",
                        "data-ps": "61f36d81-span-87"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", ul, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", yl, [e.withDirectives(e.createElementVNode("use", bl, null, 512), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.createTextVNode(" " + e.toDisplayString((Qa = e.unref(n)) == null ? void 0 : Qa.emailResendSuccessText), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(oe) === e.unref(U) ? e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                        key: 3,
                        "aria-label": (en = (va = e.unref(n)) == null ? void 0 : va.oneTimeLoginResendEmailBtn) == null ? void 0 : en.ariaLabel,
                        disabled: !e.unref(Ae),
                        class: "phw-btn phw-g-btn-secondary phw-width-4 phw-mt-3 phw-s-resend-btn",
                        "data-ps": "61f36d81-button-9",
                        onClick: P[28] || (P[28] = j => e.unref(De)())
                    }, [e.createTextVNode(e.toDisplayString((an = (tn = e.unref(n)) == null ? void 0 : tn.oneTimeLoginResendEmailBtn) == null ? void 0 : an.text), 1)], 8, Bl)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(T) === "signIn" && e.unref(o) === "signIn" || e.unref(T) === "signUp" && !e.unref(ae) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", Sl, [e.withDirectives(e.createVNode(Qn, {
                        piiconsent: e.unref(ye),
                        "profile-login-flow": e.unref(T),
                        "seperator-text": (nn = e.unref(n)) == null ? void 0 : nn.seperatorText,
                        "candidate-login": !0,
                        content: e.unref(n).phwSocialconnectDefaultDefaultV1,
                        "data-ps": "61f36d81-socialconnect-1"
                    }, null, 8, ["piiconsent", "profile-login-flow", "seperator-text", "content"]), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.unref(T) === "signIn" ? e.withDirectives((e.openBlock(), e.createElementBlock("div", El, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Pl, [e.createTextVNode(e.toDisplayString((rn = e.unref(n)) == null ? void 0 : rn.createAccountButtonLabel), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("a", {
                        class: e.normalizeClass([y.$style["sign-in-up-link"], "phw-ml-1 phw-btn phw-g-btn-link"]),
                        href: "javascript:void(0);",
                        role: "button",
                        "data-ps": "61f36d81-a-14",
                        "data-ph-at-id": "switch-to-sign-up",
                        onClick: P[29] || (P[29] = j => e.unref(f)("signUp"))
                    }, [e.createTextVNode(e.toDisplayString((dn = (sn = e.unref(n)) == null ? void 0 : sn.createAccountButton) == null ? void 0 : dn.text), 1)], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(T) === "signUp" && e.unref(oe) === e.unref(Ie) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", _l, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Dl, [e.createTextVNode(e.toDisplayString((ln = e.unref(n)) == null ? void 0 : ln.signInButtonLabel), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("a", {
                        class: e.normalizeClass([y.$style["sign-in-up-link"], "phw-btn phw-g-btn-link phw-ml-1"]),
                        "data-ph-at-id": "sign-up-button",
                        href: "javascript:void(0);",
                        role: "button",
                        "data-ps": "61f36d81-a-15",
                        onClick: P[30] || (P[30] = j => e.unref(f)("signIn"))
                    }, [e.createTextVNode(e.toDisplayString((cn = (on = e.unref(n)) == null ? void 0 : on.signInButton) == null ? void 0 : cn.text), 1)], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("div", xl, [e.withDirectives((e.openBlock(), e.createElementBlock("a", {
                        class: e.normalizeClass(["phw-pt-0 phw-pb-0 phw-pl-0 phw-pr-2 phw-g-btn-link-candidate-login", y.$style.termsLink]),
                        target: "_blank",
                        "aria-label": ((fn = (pn = e.unref(n)) == null ? void 0 : pn.termsOfUseText) == null ? void 0 : fn.ariaLabel) || "",
                        "data-ps": "61f36d81-a-16",
                        "data-ph-at-id": "terms-of-use"
                    }, [e.createTextVNode(e.toDisplayString((wn = (hn = e.unref(n)) == null ? void 0 : hn.termsOfUseText) == null ? void 0 : wn.text), 1)], 10, Nl)), [
                        [e.unref(t.vPhwSetting)],
                        [e.unref(t.vPhwHref), ((gn = ($n = e.unref(n)) == null ? void 0 : $n.termsOfUseText) == null ? void 0 : gn.href) || "javascript:void(0)"]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("a", {
                        class: e.normalizeClass(["phw-g-btn-link-candidate-login phw-pl-2 phw-pt-0 phw-pb-0 phw-pr-0", y.$style.privacyPolicyLink]),
                        target: "_blank",
                        "aria-label": ((mn = (kn = e.unref(n)) == null ? void 0 : kn.privacyPolicy) == null ? void 0 : mn.ariaLabel) || "",
                        "data-ps": "61f36d81-a-17",
                        "data-ph-at-id": "privacy-policy"
                    }, [e.createTextVNode(e.toDisplayString((yn = (un = e.unref(n)) == null ? void 0 : un.privacyPolicy) == null ? void 0 : yn.text), 1)], 10, Tl)), [
                        [e.unref(t.vPhwSetting)],
                        [e.unref(t.vPhwHref), ((Bn = (bn = e.unref(n)) == null ? void 0 : bn.privacyPolicy) == null ? void 0 : Bn.href) || "javascript:void(0)"]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("div", Vl, [e.unref(he) ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Ll, [e.createTextVNode(e.toDisplayString((Sn = e.unref(n)) == null ? void 0 : Sn.loggedInText), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", Il, [e.unref(Te) ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Ml, [e.createTextVNode(e.toDisplayString((En = e.unref(n)) == null ? void 0 : En.registeredText), 1)])), [
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
                    "c-sign-up-link": "_c-sign-up-link_e5v6q_2",
                    "email-success-head": "_email-success-head_e5v6q_15",
                    termsLink: "_termsLink_e5v6q_18",
                    "email-success-fail": "_email-success-fail_e5v6q_21",
                    "user-detail-listitem": "_user-detail-listitem_e5v6q_25",
                    "candidate-lists": "_candidate-lists_e5v6q_26",
                    "close-popup": "_close-popup_e5v6q_30",
                    "close-btn": "_close-btn_e5v6q_39",
                    "signin-signup-link": "_signin-signup-link_e5v6q_44",
                    "user-avatar-initials": "_user-avatar-initials_e5v6q_49",
                    "user-name": "_user-name_e5v6q_61",
                    "logged-in-drop-down": "_logged-in-drop-down_e5v6q_69",
                    "logged-in-user-name": "_logged-in-user-name_e5v6q_85",
                    "logged-in-user-details": "_logged-in-user-details_e5v6q_92",
                    "canditate-action-block": "_canditate-action-block_e5v6q_98",
                    "drop-down-user-name": "_drop-down-user-name_e5v6q_101",
                    "user-actions": "_user-actions_e5v6q_109",
                    "user-actions-listitem": "_user-actions-listitem_e5v6q_113",
                    "verified-credential": "_verified-credential_e5v6q_117",
                    "error-icon": "_error-icon_e5v6q_118",
                    "pswrd-visibility": "_pswrd-visibility_e5v6q_126",
                    "pswrd-visibility-btn": "_pswrd-visibility-btn_e5v6q_133",
                    "error-password-icon": "_error-password-icon_e5v6q_138",
                    "icon-eye": "_icon-eye_e5v6q_142",
                    "resent-btn": "_resent-btn_e5v6q_146",
                    "resend-btn-disabled": "_resend-btn-disabled_e5v6q_154",
                    "error-input": "_error-input_e5v6q_164",
                    "error-msg": "_error-msg_e5v6q_168",
                    "stay-and-forgot-pass-block": "_stay-and-forgot-pass-block_e5v6q_173",
                    "content-block": "_content-block_e5v6q_178",
                    "mobile-logged-in-user-name": "_mobile-logged-in-user-name_e5v6q_182",
                    "user-details": "_user-details_e5v6q_193",
                    heading: "_heading_e5v6q_201",
                    "cd-sign-up-link": "_cd-sign-up-link_e5v6q_205",
                    "modal-body-wrapper": "_modal-body-wrapper_e5v6q_209",
                    "popup-body": "_popup-body_e5v6q_216",
                    "sign-out-btn": "_sign-out-btn_e5v6q_228"
                }
            }]
        ]);

    function Wa(i, a, n) {
        const r = a;
        if (a && !a[n] && a.all && (r[n] = a.all), r && r[n]) {
            const w = [];
            let s = [];
            return i.forEach((h, x) => {
                h && x < r[n] && s.push(h), h && h.checked && x > r[n] && w.push(h)
            }), s = w.concat(s), s
        }
        return i
    }
    const Ja = (i, a, n, r, w, s) => {
            if (i && i.length && a && a.trim().length > 0) {
                const h = i.filter(x => {
                    const G = typeof x == "string";
                    let V = x;
                    return !G && !n ? i : (!G && n && (V = x[n] || ""), V = V.toLowerCase(), r ? V.startsWith(a.toLowerCase()) : V.indexOf(a.toLowerCase()) !== -1)
                });
                return s && w ? Wa(h, w, s) : h
            }
            return s && w ? Wa(i, w, s) : i || []
        },
        Za = {
            v2: {
                ddoKey: "getRegionLocales",
                ddoKeySaveProfile: "editProfile",
                ddoKeyVideoScreen: "getVideoScreenLocales"
            }
        };

    function Al(i, a) {
        const n = e.ref(!1),
            r = e.ref([]),
            w = e.ref([]),
            s = e.ref({}),
            h = e.ref(""),
            x = e.ref(!1),
            G = e.ref(!1),
            V = e.ref(!1),
            D = e.ref(!1);
        let H = [],
            m, I = !0;
        const c = e.ref({}),
            F = "getUrl",
            z = e.ref(!1),
            q = e.ref(0);

        function ee($) {
            let b = Za.v2.ddoKey;
            $ && (b = Za.v2.ddoKeyVideoScreen), t.getDDO(b, {}).then(C => {
                if (C && C.data)
                    if (C.data.length > 1) {
                        m = C.data || [];
                        let Y;
                        $ && (Y = window.location.href.replace(t.phAppStore.baseUrl, "")), m.forEach(te => {
                            te.hasOwnProperty("id") && (te.id = parseInt(te.id), Y && te.siteUrl && (te.siteUrl = `${te.siteUrl}/${Y}`))
                        }), i.sortOption === "alphabet" && m.sort(M(i.sortType)), i.sortOption === "source" && m.sort(M("id")), v()
                    } else Z();
                else we();
                ne()
            }, C => {
                we()
            }), document.addEventListener("click", C => {
                const Y = C.target;
                a.value && !a.value.contains(Y) && (x.value = !1)
            }, !1)
        }

        function v() {
            let $, b;
            const C = {};
            for ($ = 0; $ < m.length; $ += 1) m[$].siteUrl && m[$].siteUrl.length > 0 && (m[$].siteUrl = re(m[$].siteUrl)), m[$].isAvailableInMenu && (C[m[$].id] = $, m[$].children = []);
            for ($ = 0; $ < m.length; $ += 1) {
                const Y = t.phAppStore.locale;
                m[$].isAvailableInMenu && (m[$].locale === Y && (s.value = m[$]), m[$].location === t.phAppStore.country && m[$], b = m[$], r.value.push(b), w.value.push(b), b.parentId !== null && m[C[b.parentId]] && m[C[b.parentId]].children.push(b))
            }
            r.value.forEach(Y => {
                if (Y.locale) {
                    const te = Y.locale.split("_")[0];
                    H.indexOf(te) === -1 && H.push(te)
                }
            }), r.value.forEach(Y => {
                if (Y.locale) {
                    const te = le(Y);
                    Y.level = te, Y.displayName = Y.displayName || ""
                }
            }), w.value.forEach(Y => {
                Y.displayName = Y.displayName || ""
            }), l()
        }

        function le($) {
            let b = 1;
            return $.children && $.children.length > 0 && (m.sort(M("locale")), $.children.forEach(C => {
                const Y = le(C) + 1;
                b = Math.max(Y, b)
            })), b
        }

        function M($) {
            return function(b, C) {
                return b[$] > C[$] ? 1 : b[$] < C[$] ? -1 : 0
            }
        }

        function fe($) {
            r.value = Ja(w.value, $, "displayName")
        }

        function pe($) {
            const b = "";
            if (h.value = b, fe(b), $) x.value = !1;
            else if (setTimeout(() => {
                    V.value = !0
                }, 1e3), setTimeout(() => {
                    V.value = !1
                }, 1500), i.languageSelectorPopUp) {
                const C = document.querySelector("#language-selector-popup");
                setTimeout(() => {
                    C && C.focus()
                }, 100)
            } else {
                const C = a.value.querySelector("#language-selector");
                setTimeout(() => {
                    C && C.focus()
                }, 100)
            }
        }

        function re($) {
            const b = N($);
            return b.pathname && b.pathname !== null && b.pathname !== "" && b.pathname !== "/" ? $ : `${$}/home`
        }

        function N($) {
            const b = document.createElement("a");
            return b.href = $, {
                protocol: b.protocol,
                hostname: b.hostname,
                port: b.port,
                pathname: b.pathname,
                search: b.search,
                hash: b.hash,
                host: b.host
            }
        }

        function W($, b, C) {
            c.value = $, q.value = $.id;
            const Y = window.location.href,
                {
                    pageName: te
                } = t.phAppStore,
                Ne = t.phAppStore.ddo.siteConfig.data.urlMap;
            a.value.querySelector(".mobile-language-selector").blur();
            let ue = {},
                Ee = "",
                Te = "";
            const he = {};
            if (te && Ne[te]) {
                const me = Ne[te],
                    $e = Y.split("/");
                Ee = me.split("/").map((Ve, Le) => {
                    if (Ve.startsWith(":")) {
                        const De = $e.findIndex(ye => ye === te) + Le;
                        return Te = $e[De] || "", he[Ve.substring(1)] = Te, Te
                    }
                    return Ve
                }).join("/")
            } else Ee = te;
            ue = {
                reqPageName: t.phAppStore.pageName,
                pagePath: `/${Ee}`,
                reqLang: $.locale,
                ...he
            }, i.enableSamePageRedirection ? t.getDDO(F, ue).then(me => {
                x.value = !1, me.status === "success" ? g($, b, C) : (z.value = !0, _())
            }).catch(me => {
                console.error("Error fetching supported locale:", me)
            }) : g($, b, C)
        }

        function g($, b, C) {
            const Y = $.siteUrl || $.value.siteUrl,
                te = $.locale || $.value.locale;
            if ($ && !b) {
                const Ne = {
                    localeName: te
                };
                C || t.trackWidgetClick(a.value, "locale", Ne);
                let ue = Y;
                if (i.samePage && i.enableSamePageRedirection) {
                    let Ee = "";
                    Ee = "/" + location.pathname.split("/").slice(3).join("/"), ue += Ee, location.search && location.search.trim() && (ue += location.search)
                }
                location.assign(ue)
            } else location.assign(Y)
        }
        const o = () => {
                A()
            },
            _ = () => {
                z.value = !0, e.nextTick(() => {
                    const $ = a.value.querySelector(".mobile-language-selector"),
                        b = a.value.querySelector(".ph-a11y-popup-start-focus");
                    t.dialogModal.openDialogPopup(a.value, "phw-a11y-modal-area-language-selector", $, b, o.bind(this))
                })
            },
            A = () => {
                z.value = !1, x.value = !0, K(), t.dialogModal.closeDialogPopup()
            };

        function l() {
            for (let $ = 0; $ < r.value.length; $++)
                if (r.value[$]) {
                    let b = r.value[$].siteUrl;
                    i.samePage && (b += location.pathname, location.search && location.search.trim().length > 0 && (b += location.search)), r.value[$].locationUrl = b
                }
        }

        function f($) {
            if (L(!0, null), h.value.length) {
                if (a.value !== null) {
                    const b = a.value.querySelector(".ph-a11y-dropdown-box .ph-a11y-search-area input");
                    b && b.hasAttribute("aria-activedescendant") && b.removeAttribute("aria-activedescendant")
                }
                r.value && (r.value = w.value.reduce((b, C) => (C.primaryDisplayName && C.displayName && b.push(C), b), []), r.value = Ja(r.value, h.value, "displayName")), H = [], r.value.forEach(b => {
                    if (b.locale) {
                        const C = b.locale.split("_")[0];
                        H.indexOf(C) === -1 && H.push(C)
                    }
                })
            } else r.value = JSON.parse(JSON.stringify(w.value));
            return setTimeout(() => {
                G.value = !0
            }, 1e3), setTimeout(() => {
                G.value = !1
            }, 1500), r.value
        }

        function E($, b) {
            if (r.value.length && r.value[b] && (h.value = r.value[b].displayName, a.value !== null)) {
                const C = a.value.querySelector(".listitem-focused div");
                if (C && R(C), i.languageSelectorPopUp) {
                    const Y = document.querySelector(".listitem-focused div");
                    Y && R(Y)
                }
            }
        }

        function O($) {
            return r.value.findIndex(b => b.displayName === h.value)
        }

        function T($, b, C) {
            var Y, te;
            C && C.type === "mouseup" ? (Y = a.value) != null && Y.contains(C == null ? void 0 : C.target) || L(!1, C) : (te = a.value) != null && te.contains(document.activeElement) || L(!1, null)
        }

        function R($) {
            if ($ && document.createEvent) {
                const b = document.createEvent("MouseEvents");
                b.initEvent("click", !0, !1), $.dispatchEvent(b)
            } else $ && document && document.createEventObject ? $.fireEvent("onclick") : $ && typeof $.onclick == "function" && $.onclick()
        }

        function L($, b) {
            return $ ? x.value = !0 : setTimeout(() => {
                var Y;
                const C = (Y = a.value) == null ? void 0 : Y.querySelector('[data-selector="language-slector"]');
                b ? C.contains(b == null ? void 0 : b.target) && (x.value = !1) : C && !C.contains(document.activeElement) && (x.value = !1)
            }, 10), !0
        }

        function K() {
            x.value = !x.value
        }

        function Z() {
            if (a.value && (a.value.style.display = "none", i.parentElemRemove)) {
                let $ = a.value.querySelector(i.parentElemRemove);
                $ || ($ = a.value.closest("li")), $ && ($.style.display = "none")
            }
        }

        function we($) {
            ne(), i.isErrorMsgReqd ? n.value = !0 : Z()
        }

        function ne() {
            D.value = !1
        }
        const u = function($, b) {
                I && $ && (new Ai().init($, b, {
                    getFieldOptions: f,
                    setFieldValue: E,
                    clearFieldValue: pe,
                    getActiveIndex: O,
                    getActiveIndexOnBlur: T
                }), I = !1)
            },
            Se = $ => t.contentStore.getContent($).then(b => b);

        function se($, b) {
            var C;
            K(), $ === "samePage" ? A() : location.assign((C = c == null ? void 0 : c.value) == null ? void 0 : C.siteUrl)
        }
        return {
            showDropdown: K,
            onBlurHandler: L,
            languageChanged: W,
            clearFieldValue: pe,
            fetchRegionLocales: ee,
            showErrorMsg: n,
            searchArray: w,
            isShowDropDown: x,
            choosenLanguage: s,
            filterKey: h,
            roots: r,
            showLoader: D,
            resultsUpdated: G,
            getFieldOptions: f,
            setFieldValue: E,
            getActiveIndex: O,
            autoCompleteInitiate: u,
            lsTextCleared: V,
            getContent: Se,
            isPopupOpen: z,
            closePopup: A,
            fnClickLocale: se
        }
    }
    const Cl = {
            key: 0,
            class: "phw-spinner-block",
            "data-ps": "b5aad147-div-2"
        },
        Ol = {
            class: "phw-spinner-border phw-primary",
            role: "status",
            "data-ps": "b5aad147-div-3"
        },
        Fl = {
            class: "phw-visually-hidden",
            "data-ps": "b5aad147-span-1"
        },
        Rl = ["aria-label"],
        Hl = {
            class: "phw-icon-ctr",
            "data-ps": "b5aad147-span-6",
            "data-component": "language-selector-icon"
        },
        Ul = {
            class: "phw-i-sz-3 phw-i-sz-xl-2-5 phw-i-sz-lg-3",
            "aria-hidden": "true",
            fill: "currentColor",
            "data-ps": "b5aad147-svg-4"
        },
        zl = {
            href: "#phw-cns-icon-globe",
            "data-ps": "b5aad147-use-4"
        },
        ql = {
            class: "phw-i-sz-4",
            fill: "currentcolor",
            "data-ps": "b5aad147-svg-1"
        },
        Gl = {
            href: "#phw-cns-icon-chevron-up",
            "data-ps": "b5aad147-use-1"
        },
        Kl = {
            class: "phw-i-sz-4",
            fill: "currentcolor",
            "data-ps": "b5aad147-svg-2"
        },
        jl = {
            href: "#phw-cns-icon-chevron-down",
            "data-ps": "b5aad147-use-2"
        },
        Wl = {
            key: 0,
            class: "phw-form-group phw-f-c-sm phw-card-block phw-pt-1 phw-pb-1 phw-pr-2 phw-pl-2",
            "data-selector": "language-slector",
            "data-ps": "b5aad147-div-6"
        },
        Jl = {
            class: "phw-input-group",
            "data-ps": "b5aad147-div-18"
        },
        Zl = {
            class: "phw-visually-hidden",
            for: "language-selector",
            "data-ps": "b5aad147-label-1"
        },
        Yl = ["value", "placeholder"],
        Xl = {
            class: "phw-icon-ctr phw-input-icon-left",
            "data-ps": "b5aad147-span-5"
        },
        Ql = {
            "aria-hidden": "true",
            class: e.normalizeClass(["phw-icon phw-i-sz-3"]),
            fill: "currentcolor",
            "data-ps": "b5aad147-svg-3"
        },
        vl = {
            href: "#phw-cns-icon-search",
            "data-ps": "b5aad147-use-3"
        },
        eo = {
            class: "phw-icon-ctr",
            "data-ps": "b5aad147-span-6"
        },
        to = {
            class: "phw-icon phw-i-sz-3",
            "aria-hidden": "true",
            fill: "currentcolor",
            "data-ps": "b5aad147-svg-5"
        },
        ao = {
            href: "#phw-cns-icon-close",
            "data-ps": "b5aad147-use-5"
        },
        no = {
            class: "phw-visually-hidden",
            "data-ps": "b5aad147-span-7"
        },
        io = {
            "data-ph-at-id": "clear-globalsearch-text",
            "data-ps": "b5aad147-span-8"
        },
        ro = ["aria-label", "data-ph-at-count"],
        so = ["data-index", "role", "data-ph-at-locale", "data-ph-at-href", "aria-selected", "onClick", "onKeyup"],
        lo = ["data-ph-at-displayname-text"],
        oo = {
            key: 0,
            class: "phw-visually-hidden",
            "data-ps": "b5aad147-div-9"
        },
        co = {
            "data-ps": "b5aad147-span-10"
        },
        po = ["data-index", "data-ph-at-locale", "data-ph-at-href"],
        fo = ["data-ph-at-displayname-text", "onClick", "onKeyup"],
        ho = {
            "data-ps": "b5aad147-div-10"
        },
        wo = {
            "data-ps": "b5aad147-span-11"
        },
        $o = {
            class: "phw-visually-hidden",
            "aria-atomic": "true",
            "aria-live": "polite",
            "data-ps": "b5aad147-div-12"
        },
        go = {
            key: 0,
            "data-ps": "b5aad147-div-13"
        },
        ko = {
            key: 0,
            "data-ps": "b5aad147-span-12"
        },
        mo = {
            key: 1,
            "data-ps": "b5aad147-span-13"
        },
        uo = {
            key: 1,
            "data-ps": "b5aad147-span-14"
        },
        yo = {
            key: 2,
            "data-ps": "b5aad147-span-15"
        },
        bo = ["data-ph-at-count"],
        Bo = ["data-index", "role", "aria-selected", "data-ph-at-locale", "data-ph-at-href", "onClick", "onKeyup"],
        So = ["href", "data-ph-at-displayname-text"],
        Eo = {
            key: 0,
            class: "phw-visually-hidden",
            "data-ps": "b5aad147-div-17"
        },
        Po = {
            "data-ps": "b5aad147-span-17"
        },
        _o = {
            key: 2,
            "data-hide-settings": "true",
            "data-ps": "b5aad147-div-18"
        },
        Do = {
            "data-hide-settings": "true",
            "data-ps": "b5aad147-div-20"
        },
        xo = {
            class: "modal-wrapper",
            "data-ph-at-id": "modalDialog",
            "data-ps": "b5aad147-div-21"
        },
        No = {
            "data-hide-settings": "true",
            "data-ps": "b5aad147-div-22"
        },
        To = ["aria-label"],
        Vo = {
            class: "phw-icon-ctr",
            "data-ps": "b5aad147-span-25"
        },
        Lo = {
            href: "#phw-cns-icon-close",
            "data-ps": "b5aad147-use-6"
        },
        Io = {
            class: "phw-modal-content phw-text-c phw-mb-2",
            "data-ps": "b5aad147-div-28"
        },
        Mo = {
            href: "#phw-cns-icon-globe-1",
            "data-ps": "b5aad147-use-7"
        },
        Ao = {
            "ally-label-heading": "ph-ally-unsaved-popup-heading",
            class: "phw-g-h2-card-title-dark-default phw-mb-2",
            "data-ph-at-id": "pageNotAvailableInSelectedLocale",
            "data-ps": "b5aad147-h2-1"
        },
        Co = {
            id: "ph-ally-unsaved-popup-subHeading",
            class: "para-p phw-g-text-default-dark phw-mb-4",
            "data-ph-at-id": "pageNotAvailableInSelectedLocaleDescription",
            "data-ps": "b5aad147-div-32"
        },
        Oo = {
            class: e.normalizeClass(["phw-default-dialog", "phw-modal-md", "phw-s-lang-ally-model-area", "phw-p-0", "phw-pb-3"]),
            role: "dialog",
            "aria-modal": "true",
            "data-ps": "b5aad147-div-20"
        },
        Fo = {
            class: "phw-pt-5 phw-pl-5 phw-pr-5",
            "data-ps": "b5aad147-div-21"
        },
        Ro = ["aria-label"],
        Ho = {
            class: "phw-icon-ctr",
            "data-ps": "b5aad147-span-19"
        },
        Uo = {
            class: "phw-i-sz-2-5",
            "aria-hidden": "true",
            fill: "currentcolor",
            "data-ps": "b5aad147-svg-6"
        },
        zo = {
            href: "#phw-cns-icon-close",
            "data-ps": "b5aad147-use-6"
        },
        qo = {
            "ally-label-heading": "",
            class: "phw-g-text-default-dark phw-g-h3-card-large-dark",
            "data-ps": "b5aad147-h2-1"
        },
        Go = {
            "data-ps": "b5aad147-div-23"
        },
        Ko = {
            key: 0,
            class: "modal-search-group phw-form-group phw-pb-3 phw-pt-3 phw-pl-5 phw-pr-5",
            "data-ps": "b5aad147-div-24"
        },
        jo = {
            class: "phw-input-group",
            "data-ps": "b5aad147-div-25"
        },
        Wo = {
            class: "phw-visually-hidden",
            for: "language-selector-popup",
            "data-ps": "b5aad147-label-2"
        },
        Jo = ["value", "placeholder"],
        Zo = {
            class: "phw-icon-ctr phw-input-icon-left",
            "data-ps": "b5aad147-span-20"
        },
        Yo = {
            "aria-hidden": "true",
            class: "phw-icon phw-i-sz-3",
            fill: "currentcolor",
            "data-ps": "b5aad147-svg-7"
        },
        Xo = {
            href: "#phw-cns-icon-search",
            "data-ps": "b5aad147-use-7"
        },
        Qo = {
            class: "phw-icon-ctr",
            "data-ps": "b5aad147-span-21"
        },
        vo = {
            class: "phw-icon phw-i-sz-3",
            "aria-hidden": "true",
            fill: "currentcolor",
            "data-ps": "b5aad147-svg-8"
        },
        ec = {
            href: "#phw-cns-icon-close",
            "data-ps": "b5aad147-use-8"
        },
        tc = {
            class: "phw-visually-hidden",
            "data-ps": "b5aad147-span-22"
        },
        ac = {
            "data-ph-at-id": "clear-globalsearch-text",
            "data-ps": "b5aad147-span-23"
        },
        nc = ["aria-label", "data-ph-at-count"],
        ic = ["data-index", "data-ph-at-locale", "data-ph-at-href", "aria-selected", "onClick", "onKeyup", "onKeydown"],
        rc = ["data-ph-at-displayname-text"],
        sc = {
            key: 0,
            class: "phw-visually-hidden",
            "data-ps": "b5aad147-div-28"
        },
        dc = {
            "data-ps": "b5aad147-span-25"
        },
        lc = {
            "data-ps": "b5aad147-div-29"
        },
        oc = {
            "data-ps": "b5aad147-span-26"
        },
        cc = {
            class: "phw-visually-hidden",
            "aria-atomic": "true",
            "aria-live": "polite",
            "data-ps": "b5aad147-div-31"
        },
        pc = {
            key: 0,
            "data-ps": "b5aad147-div-32"
        },
        fc = {
            key: 0,
            "data-ps": "b5aad147-span-27"
        },
        hc = {
            key: 1,
            "data-ps": "b5aad147-span-28"
        },
        wc = {
            key: 1,
            "data-ps": "b5aad147-span-29"
        },
        $c = {
            key: 2,
            "data-ps": "b5aad147-span-30"
        },
        gc = xt(e.defineComponent({
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
            setup(i) {
                const a = i,
                    n = e.ref({}),
                    r = e.ref(),
                    w = e.ref();
                e.ref();
                const s = e.ref(),
                    h = e.ref(),
                    {
                        showDropdown: x,
                        onBlurHandler: G,
                        languageChanged: V,
                        fetchRegionLocales: D,
                        clearFieldValue: H,
                        showErrorMsg: m,
                        searchArray: I,
                        isShowDropDown: c,
                        choosenLanguage: F,
                        filterKey: z,
                        roots: q,
                        showLoader: ee,
                        resultsUpdated: v,
                        autoCompleteInitiate: le,
                        lsTextCleared: M,
                        getContent: fe,
                        isPopupOpen: pe,
                        closePopup: re,
                        fnClickLocale: N
                    } = Al(a, r),
                    W = e.ref(!1),
                    g = () => {
                        W.value = !1, t.dialogModal.closeDialogPopup()
                    },
                    o = () => {
                        g()
                    },
                    _ = () => {
                        W.value = !0, W.value && e.nextTick(() => {
                            t.dialogModal.openDialogPopup(r.value, "phw-s-lang-ally-model-area", r.value.querySelector(".phw-s-language-block"), r.value.querySelector(".phw-modal-close"), o.bind(this))
                        })
                    },
                    A = l => {
                        const f = '[data-ph-component-name="menu"] .language-selector-mobile',
                            E = () => {
                                const R = l.querySelectorAll(f);
                                return R.length > 0 && (R.forEach(L => L.remove()), console.log(`Removed ${R.length} language selector element(s) from mobile menu`)), R.length > 0
                            };
                        E() && console.log("Language selector elements removed immediately");
                        const O = new MutationObserver(R => {
                            let L = !1;
                            R.forEach(K => {
                                var Z, we, ne;
                                if (K.type === "childList") {
                                    const u = Array.from(K.addedNodes);
                                    for (const Se of u)
                                        if (Se.nodeType === Node.ELEMENT_NODE) {
                                            const se = Se;
                                            if (((Z = se.matches) == null ? void 0 : Z.call(se, f)) || ((we = se.querySelector) == null ? void 0 : we.call(se, f))) {
                                                L = !0;
                                                break
                                            }
                                            if ((ne = se.querySelector) != null && ne.call(se, f)) {
                                                L = !0;
                                                break
                                            }
                                        }
                                }
                            }), L && setTimeout(() => {
                                E()
                            }, 50)
                        });
                        O.observe(l, {
                            childList: !0,
                            subtree: !0,
                            attributes: !1,
                            characterData: !1
                        });
                        const T = setInterval(() => {
                            E()
                        }, 2e3);
                        setTimeout(() => {
                            O.disconnect(), clearInterval(T), console.log("Language selector monitoring stopped after 10 seconds")
                        }, 1e4), console.log("Language selector monitoring started - will continue for 10 seconds")
                    };
                return e.onBeforeMount(() => {
                    a.contentId ? fe(a.contentId).then(l => {
                        n.value = l || {}
                    }) : n.value = a.content, D(a.videoScreen)
                }), e.onMounted(() => {
                    t.usePhCommon().init(r.value, n, a.instanceId), setTimeout(() => {
                        var f, E, O, T, R, L, K;
                        if (le(a.languageSelectorPopUp ? h.value : s.value, {
                                name: "language",
                                ignoreExpanded: !0
                            }), a.showInMobileHeader === !0 || a.languageSelectorPresentInHeaderMobile === "true") {
                            (E = (f = r.value) == null ? void 0 : f.closest('[data-component="language-selector"]')) == null || E.classList.remove("phw-d-sm-none"), (T = (O = r.value) == null ? void 0 : O.closest('[data-component="language-selector"]')) == null || T.classList.add("phw-d-sm-block"), (L = (R = r.value) == null ? void 0 : R.closest("section")) == null || L.classList.add("phw-posn-sm-static");
                            const Z = (K = r.value) == null ? void 0 : K.closest(".ph-header");
                            Z && A(Z)
                        }
                    }, 1e3)
                }), (l, f) => {
                    var O, T, R, L, K, Z, we, ne, u, Se, se, $, b, C, Y, te, Ne, ue, Ee, Te, he, me, $e, Ae, Ve, Le, De, ye, Fe, oe, Ie, U, ae;
                    const E = e.resolveDirective("phw-track");
                    return e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        ref_key: "root",
                        ref: r,
                        class: "phw-widget-ctr phw-widget-empty-ctr",
                        "data-ps": "b5aad147-div-1"
                    }, [e.unref(ee) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", Cl, [e.withDirectives((e.openBlock(), e.createElementBlock("div", Ol, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Fl, [e.createTextVNode(e.toDisplayString((O = n.value) == null ? void 0 : O.languageSelectedText), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), !e.unref(m) && !e.unref(ee) && n.value && ((T = e.unref(I)) == null ? void 0 : T.length) > 1 ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: 1,
                        class: e.normalizeClass(["phw-d-inline-flex phw-d-sm-block phw-posn-relative", [l.$style["language-selector-block"], a.languageSelectorPresentInHeaderMobile === "true" || a.showInMobileHeader === !0 ? "phw-posn-sm-static" : "phw-posn-sm-relative", a.footerLanguageSelector ? "phw-width-4 phw-align-items-center phw-justify-content-center" : ""]]),
                        "data-ps": "b5aad147-div-4"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("button", e.mergeProps({
                        class: ["mobile-language-selector", ["phw-btn", "phw-gap-050", "phw-p-0", "phw-g-header-link", "phw-s-language-block", "phw-width-auto", "phw-gap-1", "phw-justify-sm-content-start", e.unref(I).length == 1 ? "single-language" : "", e.unref(I).length > 10 ? "" : "dropdown-arrow", a.classStyle ? l.$style["c-language-selector"] : ""]],
                        "aria-label": ((R = n.value) == null ? void 0 : R.languageSelectedText) + " " + e.unref(F).languageDisplayName + " " + e.unref(F).locationDisplayName
                    }, a.languageSelectorPopUp ? {
                        "aria-haspopup": "dialog"
                    } : {
                        "aria-expanded": e.unref(c) ? "true" : "false"
                    }, {
                        "data-ps": "b5aad147-button-1",
                        "data-ph-at-id": "language-selector-button",
                        onClick: f[0] || (f[0] = k => a.languageSelectorPopUp ? _() : e.unref(x)())
                    }), [e.withDirectives((e.openBlock(), e.createElementBlock("span", Hl, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", Ul, [e.withDirectives(e.createElementVNode("use", zl, null, 512), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                        class: e.normalizeClass([
                            [a.languageSelectorPresentInHeaderMobile === "true" || a.showInMobileHeader === !0 ? "phw-d-sm-none" : ""], "phw-d-sm-block selected-country phw-c-b5aad147-selected-country phw-d-lg-none"
                        ]),
                        "data-ph-at-id": "selected-country",
                        "data-ps": "b5aad147-span-2"
                    }, [e.createTextVNode(e.toDisplayString(e.unref(F).locationDisplayName), 1)], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.unref(c) && !a.languageSelectorPopUp ? e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                        key: 0,
                        class: e.normalizeClass(["phw-icon-ctr", l.$style["btn-icon"]]),
                        "data-ps": "b5aad147-span-3"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", ql, [e.withDirectives(e.createElementVNode("use", Gl, null, 512), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), !e.unref(c) && !a.languageSelectorPopUp ? e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                        key: 1,
                        class: e.normalizeClass(["phw-icon-ctr", l.$style["btn-icon"]]),
                        "data-ps": "b5aad147-span-4"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", Kl, [e.withDirectives(e.createElementVNode("use", jl, null, 512), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)], 16, Rl)), [
                        [e.vShow, !a.footerLanguageSelector],
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        class: e.normalizeClass(["phw-c-b5aad147-dropdown phw-content-block", [a.footerLanguageSelector ? ["phw-g-p-default-light"] : [l.$style["dropdown-box"], "phw-g-card-bg-light", "phw-stroke-dark", "phw-posn-absolute", "phw-g-p-default-dark"], e.unref(I).length > 10 ? "" : "dropdown-arrow", a.languageSelectorPresentInHeaderMobile === "true" || a.showInMobileHeader === !0 ? l.$style["language-selctor-dropdown-box"] : "phw-posn-sm-relative"]]),
                        "data-ps": "b5aad147-div-5"
                    }, [a.footerLanguageSelector ? e.createCommentVNode("", !0) : e.withDirectives((e.openBlock(), e.createElementBlock("div", Wl, [e.withDirectives((e.openBlock(), e.createElementBlock("div", Jl, [e.withDirectives((e.openBlock(), e.createElementBlock("label", Zl, [e.createTextVNode(e.toDisplayString(((L = n.value) == null ? void 0 : L.language) && ((K = n.value) == null ? void 0 : K.language.label)), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives(e.createElementVNode("input", {
                        id: "language-selector",
                        ref_key: "languageEle",
                        ref: s,
                        class: e.normalizeClass(["phw-input-icon-pl phw-s-language-input phw-g-text-field-style-1", e.unref(z) ? "phw-input-icon-pr" : ""]),
                        type: "text",
                        role: "combobox",
                        value: e.unref(z),
                        name: "language-listbox",
                        "aria-autocomplete": "list",
                        autocomplete: "off",
                        "aria-controls": "language-listbox",
                        "aria-owns": "language-listbox",
                        "aria-expanded": "true",
                        "data-ph-at-id": "language-selector",
                        placeholder: ((Z = n.value) == null ? void 0 : Z.language) && ((we = n.value) == null ? void 0 : we.language.placeholder),
                        "data-show-listbox": "false",
                        "data-ps": "b5aad147-input-1",
                        onInput: f[1] || (f[1] = k => {
                            var de;
                            return z.value = (de = k == null ? void 0 : k.target) == null ? void 0 : de.value
                        })
                    }, null, 42, Yl), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", Xl, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", Ql, [e.withDirectives(e.createElementVNode("use", vl, null, 512), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                        id: "clearFilterKey",
                        tabindex: "0",
                        "data-ph-at-id": "clear-feild-value",
                        class: "phw-input-icon-right phw-btn phw-g-btn-link phw-width-auto",
                        "data-ps": "b5aad147-a-1",
                        onClick: f[2] || (f[2] = k => e.unref(H)()),
                        onKeyup: f[3] || (f[3] = e.withKeys(k => e.unref(H)(), ["space"]))
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", eo, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", to, [e.withDirectives(e.createElementVNode("use", ao, null, 512), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", no, [e.withDirectives((e.openBlock(), e.createElementBlock("span", io, [e.createTextVNode(e.toDisplayString((ne = n.value) == null ? void 0 : ne.clearText), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])], 32)), [
                        [e.vShow, e.unref(z)],
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]), a.footerLanguageSelector ? e.createCommentVNode("", !0) : e.withDirectives((e.openBlock(), e.createElementBlock("ul", {
                        key: 1,
                        id: "language-listbox",
                        class: e.normalizeClass([
                            ["phw-list-none", l.$style["language-selector-listbox"]], "phw-mb-0 phw-pl-0"
                        ]),
                        role: "listbox",
                        "aria-label": (u = n.value) == null ? void 0 : u.languageListBox,
                        "data-labelledby": "language-listbox",
                        tabindex: "-1",
                        "data-ph-at-id": "language-selector-options",
                        "data-ph-at-count": (Se = e.unref(q)) == null ? void 0 : Se.length,
                        "data-ps": "b5aad147-ul-1"
                    }, [(e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(e.unref(q), (k, de) => {
                        var y;
                        return e.withDirectives((e.openBlock(), e.createElementBlock("li", {
                            key: de,
                            "data-index": de,
                            class: e.normalizeClass([l.$style["dropdown-list-item"], "phw-list-none", "phw-g-p-default-dark", "language-list-items", l.$style[k.displayName === e.unref(F).displayName ? "active" : ""]]),
                            role: a.languageSelectorPopUp ? "" : "option",
                            tabindex: "-1",
                            "data-ph-at-locale": k == null ? void 0 : k.locale,
                            "data-ph-at-href": k == null ? void 0 : k.siteUrl,
                            "data-ph-at-id": "language-selector-list-option",
                            "aria-selected": k.displayName === e.unref(F).displayName,
                            "data-ps": "b5aad147-li-2",
                            onClick: P => e.unref(V)(k, !1),
                            onKeyup: [e.withKeys(P => e.unref(V)(k, !1), ["enter"]), e.withKeys(P => e.unref(V)(k, !1), ["space"])]
                        }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                            class: e.normalizeClass(["phw-g-p-default-dark", "phw-pt-2", "phw-pb-2", "phw-pr-3", "phw-pl-3", l.$style["dropdown-list-button"], k.displayName == e.unref(F).displayName ? l.$style.active : "", "phw-d-flex", "phw-align-items-center", "phw-m-0", "phw-gap-1", "phw-width-4", "phw-text-l", "phw-td-none", "phw-card-block"]),
                            role: "link",
                            "data-ph-at-displayname-text": k.displayName,
                            "data-ps": "b5aad147-div-7"
                        }, [i.countryFlag ? e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                            key: 0,
                            class: e.normalizeClass(["flag flag-" + k.language]),
                            "data-ph-at-id": "country-flag",
                            "data-ps": "b5aad147-span-9"
                        }, null, 2)), [
                            [e.unref(t.vPhwSetting)]
                        ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                            class: e.normalizeClass([l.$style.country, "phw-width-4", "phw-d-block", "phw-word-break", "phw-g-text-small-dark"]),
                            "data-ph-at-id": "country",
                            "data-ps": "b5aad147-div-8"
                        }, [e.createTextVNode(e.toDisplayString(k.displayName) + " ", 1), k.displayName == e.unref(F).displayName ? e.withDirectives((e.openBlock(), e.createElementBlock("div", oo, [e.withDirectives((e.openBlock(), e.createElementBlock("span", co, [e.createTextVNode(e.toDisplayString((y = n.value) == null ? void 0 : y.selectedText), 1)])), [
                            [e.unref(t.vPhwSetting)]
                        ])])), [
                            [e.unref(t.vPhwSetting)]
                        ]) : e.createCommentVNode("", !0)], 2)), [
                            [e.unref(t.vPhwSetting)]
                        ])], 10, lo)), [
                            [e.unref(t.vPhwSetting)]
                        ])], 42, so)), [
                            [e.unref(t.vPhwSetting)]
                        ])
                    }), 128))], 10, ro)), [
                        [e.unref(t.vPhwSetting)]
                    ]), a.footerLanguageSelector ? e.withDirectives((e.openBlock(), e.createElementBlock("ul", {
                        key: 2,
                        class: e.normalizeClass([
                            ["phw-list-none", "phw-d-flex", "phw-flex-wrap", "phw-justify-content-center", l.$style["footer-language-selector-listbox"]], "phw-mb-0 phw-pl-0"
                        ]),
                        role: "list",
                        "data-ps": "b5aad147-ul-1"
                    }, [(e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(e.unref(q), (k, de) => e.withDirectives((e.openBlock(), e.createElementBlock("li", {
                        key: de,
                        "data-index": de,
                        class: e.normalizeClass([l.$style["dropdown-list-item"], l.$style["footer-dropdown-list-button"], "phw-list-none", "phw-g-p-default-light", "language-list-items"]),
                        role: "listitem",
                        "data-ph-at-locale": k == null ? void 0 : k.locale,
                        "data-ph-at-href": k == null ? void 0 : k.siteUrl,
                        "data-ps": "b5aad147-li-2"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("a", {
                        role: "link",
                        href: "javascript:void(0);",
                        class: e.normalizeClass(["phw-g-p-default-light", "phw-p-0", "phw-pl-2", "phw-pr-2", "phw-d-flex", "phw-align-items-center", "phw-m-0", "phw-gap-1", "phw-width-4", "phw-text-l", "phw-td-none", "phw-card-block"]),
                        "data-ph-at-displayname-text": k.displayName,
                        "data-ps": "b5aad147-div-7",
                        onClick: y => e.unref(V)(k, !1),
                        onKeyup: [e.withKeys(y => e.unref(V)(k, !1), ["enter"]), e.withKeys(y => e.unref(V)(k, !1), ["space"])]
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        class: e.normalizeClass([l.$style.country, "phw-width-4", "phw-d-block", "phw-word-break", "phw-g-text-small-light"]),
                        "data-ph-at-id": "country",
                        "data-ps": "b5aad147-div-8"
                    }, [e.createTextVNode(e.toDisplayString(k.displayName), 1)], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ])], 40, fo)), [
                        [e.unref(t.vPhwSetting)]
                    ])], 10, po)), [
                        [e.unref(t.vPhwSetting)]
                    ])), 128))], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("div", ho, [e.unref(q).length ? e.createCommentVNode("", !0) : e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: 0,
                        class: e.normalizeClass(["phw-text-l", ["phw-p-2", a.footerLanguageSelector ? "phw-g-p-default-light" : "phw-g-p-default-dark"]]),
                        "data-ps": "b5aad147-div-11"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", wo, [e.createTextVNode(e.toDisplayString((se = n.value) == null ? void 0 : se.noResultsFoundText), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", $o, [e.unref(q).length && e.unref(v) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", go, [e.createTextVNode(e.toDisplayString(e.unref(q).length) + " ", 1), e.unref(q).length > 1 ? e.withDirectives((e.openBlock(), e.createElementBlock("span", ko, [e.createTextVNode(e.toDisplayString(($ = n.value) == null ? void 0 : $.suggestionsAvailable), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(q).length == 1 ? e.withDirectives((e.openBlock(), e.createElementBlock("span", mo, [e.createTextVNode(e.toDisplayString((b = n.value) == null ? void 0 : b.suggestionIsAvailable), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), !e.unref(q).length && e.unref(v) ? e.withDirectives((e.openBlock(), e.createElementBlock("span", uo, [e.createTextVNode(e.toDisplayString((C = n.value) == null ? void 0 : C.noResultsFoundText), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(M) ? e.withDirectives((e.openBlock(), e.createElementBlock("span", yo, [e.createTextVNode(e.toDisplayString((Y = n.value) == null ? void 0 : Y.textCleared), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.vShow, (e.unref(c) || a.footerLanguageSelector) && e.unref(I).length > i.noOfLocalesToGetSearch && !a.languageSelectorPopUp],
                        [e.unref(t.vPhwSetting)]
                    ]), (e.unref(c) || a.footerLanguageSelector) && e.unref(I).length <= i.noOfLocalesToGetSearch && !a.languageSelectorPopUp ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: 0,
                        class: e.normalizeClass(["phw-content-block", [a.footerLanguageSelector ? ["phw-g-p-default-light", "phw-width-4"] : [l.$style["dropdown-box"], "phw-g-card-bg-light", "phw-stroke-dark", "phw-posn-absolute", "phw-g-p-default-dark"], e.unref(I).length > 10 ? "" : "dropdown-arrow", a.languageSelectorPresentInHeaderMobile === "true" || a.showInMobileHeader === !0 ? l.$style["language-selctor-dropdown-box"] : "phw-posn-sm-relative"]]),
                        "data-ps": "b5aad147-div-14"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("ul", {
                        id: "language-listbox",
                        class: e.normalizeClass([
                            ["phw-list-none", a.footerLanguageSelector ? ["phw-d-flex", "phw-flex-wrap", "phw-justify-content-center", l.$style["footer-language-selector-listbox"]] : l.$style["language-selector-listbox"]], "phw-mb-0 phw-pl-0"
                        ]),
                        role: "listbox",
                        "data-ph-at-id": "language-selector-options",
                        "data-ph-at-count": (te = e.unref(q)) == null ? void 0 : te.length,
                        "aria-label": "language-list",
                        "data-labelledby": "language-listbox",
                        tabindex: "-1",
                        "data-ps": "b5aad147-ul-2"
                    }, [(e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(e.unref(q), (k, de) => {
                        var y;
                        return e.withDirectives((e.openBlock(), e.createElementBlock("li", {
                            key: de,
                            "data-index": de,
                            class: e.normalizeClass([l.$style["dropdown-list-item"], a.footerLanguageSelector ? l.$style["footer-dropdown-list-button"] : "", "phw-list-none", a.footerLanguageSelector ? "phw-g-p-default-light" : "phw-g-p-default-dark", l.$style[k.displayName === e.unref(F).displayName ? "active" : ""]]),
                            role: a.languageSelectorPopUp ? "" : "option",
                            "aria-selected": k.displayName === e.unref(F).displayName,
                            tabindex: "0",
                            "data-ps": "b5aad147-li-3",
                            "data-ph-at-id": "language-selector-list-option",
                            "data-ph-at-locale": k == null ? void 0 : k.locale,
                            "data-ph-at-href": k == null ? void 0 : k.siteUrl,
                            onClick: P => e.unref(V)(k, !1),
                            onKeyup: [e.withKeys(P => e.unref(V)(k, !1), ["space"]), e.withKeys(P => e.unref(V)(k, !1), ["enter"])]
                        }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                            href: k.siteUrl,
                            role: "link",
                            class: e.normalizeClass([a.footerLanguageSelector ? ["phw-g-p-default-light", "phw-p-0", "phw-pl-2", "phw-pr-2"] : ["phw-g-p-default-dark", "phw-pt-2", "phw-pb-2", "phw-pr-3", "phw-pl-3", l.$style["dropdown-list-button"]], k.displayName == e.unref(F).displayName ? l.$style.active : "", "phw-d-flex", "phw-align-items-center", "phw-m-0", "phw-gap-1", "phw-width-4", "phw-text-l", "phw-td-none", "phw-card-block"]),
                            "data-ph-at-displayname-text": k.displayName,
                            "data-ps": "b5aad147-div-15"
                        }, [i.countryFlag ? e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                            key: 0,
                            class: e.normalizeClass(["flag flag-" + k.language]),
                            "data-ph-at-id": "country-flag",
                            "data-ps": "b5aad147-span-16"
                        }, null, 2)), [
                            [e.unref(t.vPhwSetting)]
                        ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                            class: e.normalizeClass([l.$style.country, "phw-width-4", "phw-d-block", "phw-word-break", a.footerLanguageSelector ? "phw-g-text-small-light" : "phw-g-text-small-dark"]),
                            "data-ph-at-id": "country",
                            "data-ps": "b5aad147-div-16"
                        }, [e.createTextVNode(e.toDisplayString(k.displayName) + " ", 1), k.displayName == e.unref(F).displayName ? e.withDirectives((e.openBlock(), e.createElementBlock("div", Eo, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Po, [e.createTextVNode(e.toDisplayString((y = n.value) == null ? void 0 : y.selectedText), 1)])), [
                            [e.unref(t.vPhwSetting)]
                        ])])), [
                            [e.unref(t.vPhwSetting)]
                        ]) : e.createCommentVNode("", !0)], 2)), [
                            [e.unref(t.vPhwSetting)]
                        ])], 10, So)), [
                            [e.unref(t.vPhwSetting)]
                        ])], 42, Bo)), [
                            [e.unref(t.vPhwSetting)]
                        ])
                    }), 128))], 10, bo)), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(pe) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", _o, [e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        class: e.normalizeClass([l.$style["popup-modal-backdrop"], "phw-a11y-modal-area-language-selector phw-default-dialog phw-modal-sm custom-modal"]),
                        "data-ps": "b5aad147-div-19"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", Do, [e.withDirectives((e.openBlock(), e.createElementBlock("div", xo, [e.withDirectives((e.openBlock(), e.createElementBlock("div", No, [e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        class: e.normalizeClass(["phw-d-flex phw-text-l phw-flex-row-reverse", l.$style["custom-modal-header"]]),
                        "data-ps": "b5aad147-div-23"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                        class: "ph-a11y-popup-start-focus close phw-modal-close phw-btn phw-g-btn-link",
                        "data-ph-at-id": "close-link",
                        "aria-label": n.value.closePopupButtonAriaLabel,
                        "data-ps": "b5aad147-button-2",
                        onClick: f[4] || (f[4] = k => e.unref(re)())
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Vo, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", {
                        "aria-hidden": "true",
                        class: e.normalizeClass(l.$style["close-icon"]),
                        fill: "currentcolor",
                        "data-ps": "b5aad147-svg-6"
                    }, [e.withDirectives(e.createElementVNode("use", Lo, null, 512), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])], 8, To)), [
                        [e.unref(t.vPhwSetting)],
                        [E, "modal_close_click"]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", Io, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", {
                        "aria-hidden": "true",
                        class: e.normalizeClass([l.$style["modal-content-image"], "phw-mb-2"]),
                        viewBox: "0 0 80 81",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        "data-ps": "b5aad147-svg-7"
                    }, [e.withDirectives(e.createElementVNode("use", Mo, null, 512), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("h2", Ao, [e.createTextVNode(e.toDisplayString((Ne = n.value) == null ? void 0 : Ne.pageNotAvailableInSelectedLocale), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", Co, [e.createTextVNode(e.toDisplayString((ue = n.value) == null ? void 0 : ue.pageNotAvailableInSelectedLocaleDescription), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        class: e.normalizeClass(["phw-d-flex phw-justify-content-center phw-gap-2", l.$style["modal-footer"]]),
                        "data-ps": "b5aad147-div-33"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                        class: "phw-btn phw-g-btn-secondary phw-g-btn-plain",
                        "data-ph-at-id": "go-to-home-page",
                        "data-ps": "b5aad147-button-3",
                        onClick: f[5] || (f[5] = k => e.unref(N)("homePage", !0))
                    }, [e.createTextVNode(e.toDisplayString((Ee = n.value) == null ? void 0 : Ee.startFromHome), 1)])), [
                        [e.unref(t.vPhwSetting)],
                        [E, "go-to-home-page"]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                        class: "phw-btn phw-g-btn-primary phw-ml-3 phw-ml-sm-0 phw-mt-sm-1",
                        "data-ph-at-id": "stay-on-same-page",
                        "data-ps": "b5aad147-button-4",
                        onClick: f[6] || (f[6] = k => e.unref(N)("samePage", !1))
                    }, [e.createTextVNode(e.toDisplayString((Te = n.value) == null ? void 0 : Te.switchBack), 1)])), [
                        [e.unref(t.vPhwSetting)],
                        [E, "stay-on-same-page"]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), W.value && a.languageSelectorPopUp ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: 3,
                        ref_key: "languagePopupEle",
                        ref: w,
                        "data-ps": "b5aad147-div-19"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", Oo, [e.withDirectives((e.openBlock(), e.createElementBlock("div", Fo, [e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        class: e.normalizeClass(["phw-d-flex phw-align-items-center phw-flex-row-reverse phw-justify-content-between phw-pb-3", [l.$style["modal-header"]]]),
                        "data-ps": "b5aad147-div-22"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                        class: "phw-modal-close phw-g-modal-close-button",
                        "aria-label": n.value.closeDialog,
                        "data-ph-at-id": "close-dialog",
                        "data-ps": "b5aad147-button-2",
                        onClick: f[7] || (f[7] = k => g())
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Ho, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", Uo, [e.withDirectives(e.createElementVNode("use", zo, null, 512), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])], 8, Ro)), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("h2", qo, [e.createTextVNode(e.toDisplayString((he = n.value) == null ? void 0 : he.languageSelectorPopupTitle), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", Go, [e.unref(I).length > i.noOfLocalesToGetSearch ? e.withDirectives((e.openBlock(), e.createElementBlock("div", Ko, [e.withDirectives((e.openBlock(), e.createElementBlock("div", jo, [e.withDirectives((e.openBlock(), e.createElementBlock("label", Wo, [e.createTextVNode(e.toDisplayString(((me = n.value) == null ? void 0 : me.language) && (($e = n.value) == null ? void 0 : $e.language.label)), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives(e.createElementVNode("input", {
                        id: "language-selector-popup",
                        ref_key: "languageElePopup",
                        ref: h,
                        class: e.normalizeClass(["phw-input-icon-pl phw-s-language-input phw-g-text-field-style-1 phw-input-group", [e.unref(z) ? "phw-input-icon-pr" : ""]]),
                        type: "text",
                        role: "combobox",
                        value: e.unref(z),
                        name: "language-listbox-popup",
                        "aria-autocomplete": "list",
                        autocomplete: "off",
                        "aria-controls": "language-listbox-popup",
                        "aria-owns": "language-listbox-popup",
                        "aria-expanded": "true",
                        "data-ph-at-id": "language-selector-popup",
                        placeholder: ((Ae = n.value) == null ? void 0 : Ae.language) && ((Ve = n.value) == null ? void 0 : Ve.language.placeholder),
                        "data-show-listbox": "false",
                        "data-ps": "b5aad147-input-2",
                        onInput: f[8] || (f[8] = k => z.value = k.target.value)
                    }, null, 42, Jo), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", Zo, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", Yo, [e.withDirectives(e.createElementVNode("use", Xo, null, 512), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.unref(z) ? e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                        key: 0,
                        id: "clearFilterKey",
                        tabindex: "0",
                        "data-ph-at-id": "clear-feild-value",
                        class: "phw-input-icon-right phw-btn phw-g-btn-link phw-width-auto",
                        "data-ps": "b5aad147-button-3",
                        onClick: f[9] || (f[9] = k => e.unref(H)()),
                        onKeyup: f[10] || (f[10] = e.withKeys(k => e.unref(H)(), ["space"]))
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Qo, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", vo, [e.withDirectives(e.createElementVNode("use", ec, null, 512), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", tc, [e.withDirectives((e.openBlock(), e.createElementBlock("span", ac, [e.createTextVNode(e.toDisplayString((Le = n.value) == null ? void 0 : Le.clearText), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])], 32)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("ul", {
                        id: "language-listbox-popup",
                        class: e.normalizeClass([
                            [l.$style["language-selector-listbox"], "phw-list-none", l.$style["lang-modal-list"]], "phw-pl-0 phw-pt-1 phw-grid-3 phw-grid-md-2 phw-grid-sm-1 phw-s-language-selector-modal-popup phw-pl-5 phw-pr-5"
                        ]),
                        role: "listbox",
                        "aria-label": (De = n.value) == null ? void 0 : De.languageListBox,
                        "data-labelledby": "language-listbox-popup",
                        tabindex: "-1",
                        "data-ph-at-id": "language-selector-options",
                        "data-ph-at-count": (ye = e.unref(q)) == null ? void 0 : ye.length,
                        "data-ps": "b5aad147-ul-3"
                    }, [(e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(e.unref(q), (k, de) => {
                        var y;
                        return e.withDirectives((e.openBlock(), e.createElementBlock("li", {
                            key: de,
                            "data-index": de,
                            class: e.normalizeClass([l.$style["dropdown-list-item"], "phw-list-none", "phw-g-p-default-dark", "language-list-items", l.$style[k.displayName === e.unref(F).displayName ? "active" : ""]]),
                            role: "option",
                            tabindex: "-1",
                            "data-ph-at-locale": k == null ? void 0 : k.locale,
                            "data-ph-at-href": k == null ? void 0 : k.siteUrl,
                            "data-ph-at-id": "language-selector-list-option",
                            "aria-selected": k.displayName === e.unref(F).displayName,
                            "data-ps": "b5aad147-li-4",
                            onClick: P => e.unref(V)(k, !1),
                            onKeyup: e.withKeys(P => e.unref(V)(k, !1), ["space"]),
                            onKeydown: e.withKeys(P => e.unref(V)(k, !1), ["enter"])
                        }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                            class: e.normalizeClass([l.$style["dropdown-list-button"], k.displayName == e.unref(F).displayName ? l.$style.active : "", "phw-d-flex", "phw-align-items-center", "phw-m-0", "phw-pt-1", "phw-pb-1", "phw-pr-3", "phw-gap-1", "phw-width-4", "phw-text-l", "phw-td-none", "phw-g-p-default-dark", "phw-card-block"]),
                            "data-ph-at-displayname-text": k.displayName,
                            "data-ps": "b5aad147-div-26"
                        }, [i.countryFlag ? e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                            key: 0,
                            class: e.normalizeClass(["flag flag-" + k.language]),
                            "data-ph-at-id": "country-flag",
                            "data-ps": "b5aad147-span-24"
                        }, null, 2)), [
                            [e.unref(t.vPhwSetting)]
                        ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                            class: e.normalizeClass([l.$style.country, "phw-width-4", "phw-d-block", "phw-word-break", "phw-g-text-small-dark"]),
                            "data-ph-at-id": "country",
                            "data-ps": "b5aad147-div-27"
                        }, [e.createTextVNode(e.toDisplayString(k.displayName) + " ", 1), k.displayName == e.unref(F).displayName ? e.withDirectives((e.openBlock(), e.createElementBlock("div", sc, [e.withDirectives((e.openBlock(), e.createElementBlock("span", dc, [e.createTextVNode(e.toDisplayString((y = n.value) == null ? void 0 : y.selectedText), 1)])), [
                            [e.unref(t.vPhwSetting)]
                        ])])), [
                            [e.unref(t.vPhwSetting)]
                        ]) : e.createCommentVNode("", !0)], 2)), [
                            [e.unref(t.vPhwSetting)]
                        ])], 10, rc)), [
                            [e.unref(t.vPhwSetting)]
                        ])], 42, ic)), [
                            [e.unref(t.vPhwSetting)]
                        ])
                    }), 128))], 10, nc)), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", lc, [e.unref(q).length ? e.createCommentVNode("", !0) : e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: 0,
                        class: e.normalizeClass(["phw-text-l", ["phw-p-2", "phw-g-p-default-dark"]]),
                        "data-ps": "b5aad147-div-30"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", oc, [e.createTextVNode(e.toDisplayString((Fe = n.value) == null ? void 0 : Fe.noResultsFoundText), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", cc, [e.unref(q).length && e.unref(v) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", pc, [e.createTextVNode(e.toDisplayString(e.unref(q).length) + " ", 1), e.unref(q).length > 1 ? e.withDirectives((e.openBlock(), e.createElementBlock("span", fc, [e.createTextVNode(e.toDisplayString((oe = n.value) == null ? void 0 : oe.suggestionsAvailable), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(q).length == 1 ? e.withDirectives((e.openBlock(), e.createElementBlock("span", hc, [e.createTextVNode(e.toDisplayString((Ie = n.value) == null ? void 0 : Ie.suggestionIsAvailable), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), !e.unref(q).length && e.unref(v) ? e.withDirectives((e.openBlock(), e.createElementBlock("span", wc, [e.createTextVNode(e.toDisplayString((U = n.value) == null ? void 0 : U.noResultsFoundText), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(M) ? e.withDirectives((e.openBlock(), e.createElementBlock("span", $c, [e.createTextVNode(e.toDisplayString((ae = n.value) == null ? void 0 : ae.textCleared), 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
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
        ]),
        kc = "jobCartCountV2",
        Ke = e.ref(0),
        Yt = "ph:ex:jobCartUpdatedCount",
        mc = "ph:ea:savedjobcount",
        Xt = {};
    async function Nt() {
        await t.getDDO(kc).then(i => {
            i && (Ke.value = i.result || 0, i.status === "601" || i.status === 601 || i.status === "600" || i.status, t.publishEvent(mc, {
                jobCount: Ke.value
            }))
        })
    }
    const uc = () => {
            document.addEventListener(Yt, Nt), Xt[Yt] = Nt, t.subscribeEvent(Yt, Nt)
        },
        yc = () => {
            document.removeEventListener(Yt, Nt), Xt && Object.keys(Xt).forEach(i => {
                t.unSubscribeEvent(i, Xt[i])
            })
        },
        bc = ["aria-label", "data-ph-at-widget-data-count"],
        Bc = {
            class: "phw-icon-ctr phw-mr-050",
            "data-ps": "35bfdc82-span-1",
            "data-component": "job-cart-count-icon"
        },
        Sc = {
            class: "phw-i-sz-3 phw-i-sz-xl-2-5 phw-i-sz-lg-3",
            fill: "currentcolor",
            "aria-hidden": "true",
            "data-ps": "35bfdc82-svg-1",
            "data-icon-edit": "false"
        },
        Ec = ["href"],
        Pc = {
            class: "",
            "aria-hidden": "true",
            "data-ps": "35bfdc82-span-3"
        },
        _c = xt(e.defineComponent({
            __name: "JobCartCountDefaultDefaultComponent",
            props: {
                instanceId: null,
                contentId: null,
                notEmptyCart: {
                    default: "#phw-cns-icon-heart-fill"
                },
                emptyCart: {
                    default: "#phw-cns-icon-heart"
                },
                hideSaveJobText: {
                    type: Boolean
                },
                showSaveJobTextSmallDevices: {
                    type: Boolean
                },
                content: null,
                classStyle: {
                    type: Boolean
                }
            },
            setup(i) {
                const a = i,
                    n = e.ref(),
                    r = e.ref();
                return e.onMounted(() => {
                    t.usePhCommon().init(n.value, r, a.instanceId), uc(), Nt()
                }), e.onBeforeMount(() => {
                    a.contentId ? t.contentStore.getContent(a.contentId).then(w => {
                        r.value = w || {}
                    }) : r.value = a.content
                }), e.onUnmounted(() => {
                    yc()
                }), (w, s) => {
                    var h, x, G, V, D, H, m, I;
                    return e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        ref_key: "element",
                        ref: n,
                        class: "phw-widget-ctr phw-widget-empty-ctr",
                        "data-ps": "35bfdc82-div-1"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("a", {
                        class: e.normalizeClass(["phw-g-header-link phw-d-flex phw-align-items-center phw-btn", a.classStyle ? w.$style["c-job-cart-count"] : ""]),
                        "aria-label": e.unref(Ke) + " " + (e.unref(Ke) == 1 ? (x = (h = r.value) == null ? void 0 : h.jobCartLink) == null ? void 0 : x.ariaLabel : (V = (G = r.value) == null ? void 0 : G.jobCartLink) == null ? void 0 : V.ariaLabel2),
                        "data-ps": "35bfdc82-a-1",
                        "data-ph-at-id": "jobcart-count",
                        "data-ph-at-widget-data-count": e.unref(Ke)
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Bc, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", Sc, [e.withDirectives(e.createElementVNode("use", {
                        href: `#${e.unref(Ke)>0?`${a.notEmptyCart}`:`${a.emptyCart}`}`,
                        "data-ps": "35bfdc82-use-1"
                    }, null, 8, Ec), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                        class: e.normalizeClass([a.hideSaveJobText ? "phw-d-none" : a.showSaveJobTextSmallDevices ? "phw-mr-050" : "phw-mr-050 phw-d-lg-none"]),
                        "data-ps": "35bfdc82-span-2"
                    }, [e.createTextVNode(e.toDisplayString(r.value && e.unref(Ke) == 1 ? (H = (D = r.value) == null ? void 0 : D.jobCartLink) == null ? void 0 : H.text1 : (I = (m = r.value) == null ? void 0 : m.jobCartLink) == null ? void 0 : I.text), 1)], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", Pc, [e.createTextVNode("(" + e.toDisplayString(e.unref(Ke)) + ")", 1)])), [
                        [e.unref(t.vPhwSetting)]
                    ])], 10, bc)), [
                        [e.unref(t.vPhwHref), "jobcart"],
                        [e.unref(t.vPhwSetting)],
                        [e.unref(t.vPhwTrack), "job-cart-icon-click"]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])
                }
            }
        }), [
            ["__cssModules", {
                $style: {
                    "c-job-cart-count": "_c-job-cart-count_nyxj5_3"
                }
            }]
        ]);

    function Dc(i, a, n, r, w, s, h) {
        let x = -1,
            G = -1,
            V = -1,
            D = -1;

        function H() {
            var _;
            const o = ((_ = w.value) == null ? void 0 : _.querySelectorAll(".phw-s-eachNavItem"))[x];
            setTimeout(() => {
                !(o != null && o.contains(document.activeElement)) && x !== -1 && (i.value.menuBlock[x].showMore = !1, x = -1, document.removeEventListener("keyup", H), document.removeEventListener("mouseup", H))
            }, 6)
        }

        function m(g) {
            var _;
            if (!((_ = w.value) == null ? void 0 : _.querySelectorAll(".phw-s-eachNavItem")[g].querySelector(".phw-s-sub-menu-list-folder"))) {
                const A = window.innerHeight - 100,
                    l = w.value.querySelector(".phw-s-menu-active .phw-sub-nav");
                l && (l.style.maxHeight = `${A}px`, l.style.overflowY = "auto")
            }
        }

        function I(g, o, _) {
            var f, E, O;
            const A = (f = w.value) == null ? void 0 : f.querySelectorAll(".phw-s-eachNavItem"),
                l = (E = w.value) == null ? void 0 : E.querySelector(".phw-s-menu-list-2-row");
            o || (i.value.menuBlock[g].showMore = !i.value.menuBlock[g].showMore, (O = _.currentTarget) == null || O.focus(), i.value.menuBlock[g].showMore ? setTimeout(() => {
                x = g, document.addEventListener("keyup", H), document.addEventListener("mouseup", H), !r.expandMenuOnHover && l && (h == null ? void 0 : h.value) === "desktop" && m(g)
            }, 8) : (document.removeEventListener("keyup", H), document.removeEventListener("mouseup", H))), o && (i.value.menuBlock[g].showMore = !1, e.nextTick(() => {
                const T = A[g],
                    R = T && T.querySelector("button");
                R && R.focus()
            }))
        }

        function c() {
            var A;
            const o = ((A = w.value) == null ? void 0 : A.querySelectorAll(".phw-s-eachNavItem"))[x],
                _ = o == null ? void 0 : o.querySelectorAll(".phw-s-subNavItem")[G];
            setTimeout(() => {
                !(_ != null && _.contains(document.activeElement)) && G !== -1 && x !== -1 && (i.value.menuBlock[x].folderItems[G].showMore = !1, G = -1, document.removeEventListener("keyup", c), document.removeEventListener("mouseup", c))
            }, 4)
        }

        function F(g, o, _) {
            var O;
            const A = window.innerHeight,
                l = (O = w.value) == null ? void 0 : O.querySelectorAll(".phw-s-eachNavItem")[g],
                f = l == null ? void 0 : l.querySelectorAll(".phw-s-subNavItem")[o];
            if (f == null ? void 0 : f.querySelectorAll(".phw-s-subNavNestedItem")) {
                const T = f.getBoundingClientRect().top,
                    R = A - T,
                    L = f.querySelector('[data-ph-at-id="menu-item-container-3"]');
                L && (T > 350 ? (L.style.maxHeight = `${T-100}px`, L.style.overflowY = "auto", L.style.top = "auto", L.style.bottom = "0") : (L.style.maxHeight = `${R-50}px`, L.style.overflowY = "auto"))
            }
        }

        function z(g, o, _, A) {
            var E, O, T, R;
            const l = (E = w.value) == null ? void 0 : E.querySelectorAll(".phw-s-eachNavItem"),
                f = (O = w.value) == null ? void 0 : O.querySelector(".phw-s-menu-list-2-row");
            if (!_)
                if (i.value.menuBlock[g].folderItems[o].showMore = !i.value.menuBlock[g].folderItems[o].showMore, (T = A.currentTarget) == null || T.focus(), i.value.menuBlock[g].folderItems[o].showMore) setTimeout(() => {
                    G = o, document.addEventListener("keyup", c), document.addEventListener("mouseup", c), !r.expandMenuOnHover && f && (h == null ? void 0 : h.value) === "desktop" && F(g, o)
                }, 6);
                else {
                    document.removeEventListener("keyup", c), document.removeEventListener("mouseup", c);
                    const L = (R = w.value) == null ? void 0 : R.querySelectorAll(".phw-s-eachNavItem")[g],
                        K = L == null ? void 0 : L.querySelector(".phw-s-sub-nav-items");
                    K && (K.style.maxHeight = "", K.style.overflowY = "")
                }
            _ && (i.value.menuBlock[g].folderItems[o].showMore = !1, e.nextTick(() => {
                const L = l[g],
                    K = L == null ? void 0 : L.querySelectorAll(".phw-s-subNavItem")[o],
                    Z = K && K.querySelector("button");
                Z && Z.focus()
            }))
        }

        function q() {
            var l;
            const o = ((l = w.value) == null ? void 0 : l.querySelectorAll(".phw-s-eachNavItem"))[x],
                _ = o == null ? void 0 : o.querySelectorAll(".phw-s-subNavItem")[G],
                A = _ == null ? void 0 : _.querySelectorAll(".phw-s-subNavNestedItem")[V];
            setTimeout(() => {
                !(A != null && A.contains(document.activeElement)) && G !== -1 && x !== -1 && V !== -1 && (i.value.menuBlock[x].folderItems[G].folderItems[V].showMore = !1, V = -1, document.removeEventListener("keyup", q), document.removeEventListener("mouseup", q))
            }, 2)
        }

        function ee(g, o, _, A, l) {
            var O, T, R;
            const f = (O = w.value) == null ? void 0 : O.querySelectorAll(".phw-s-eachNavItem"),
                E = (T = w.value) == null ? void 0 : T.querySelector(".phw-s-menu-list-2-row");
            A || (i.value.menuBlock[g].folderItems[o].folderItems[_].showMore = !i.value.menuBlock[g].folderItems[o].folderItems[_].showMore, (R = l.currentTarget) == null || R.focus(), i.value.menuBlock[g].folderItems[o].folderItems[_].showMore ? setTimeout(() => {
                V = _, document.addEventListener("keyup", q), document.addEventListener("mouseup", q), !r.expandMenuOnHover && E && (h == null ? void 0 : h.value) === "desktop" && F(g, o)
            }, 5) : (document.removeEventListener("keyup", q), document.removeEventListener("mouseup", q))), A && (i.value.menuBlock[g].folderItems[o].folderItems[_].showMore = !1, e.nextTick(() => {
                const L = f[g],
                    K = L == null ? void 0 : L.querySelectorAll(".phw-s-subNavItem")[o],
                    Z = K == null ? void 0 : K.querySelectorAll(".phw-s-subNavNestedItem")[_],
                    we = Z && Z.querySelector("button");
                we && we.focus()
            }))
        }

        function v() {
            var l;
            const g = (l = w.value) == null ? void 0 : l.querySelectorAll(".phw-s-eachNavItem")[x],
                o = g == null ? void 0 : g.querySelectorAll(".phw-s-subNavItem")[G],
                _ = o == null ? void 0 : o.querySelectorAll(".phw-s-subNavNestedItem")[V],
                A = _ == null ? void 0 : _.querySelectorAll(".phw-s-subsubNavNestedItem")[D];
            setTimeout(() => {
                !(A != null && A.contains(document.activeElement)) && G !== -1 && x !== -1 && V !== -1 && D !== -1 && (i.value.menuBlock[x].folderItems[G].folderItems[V].folderItems[D].showMore = !1, D = -1, document.removeEventListener("keyup", v), document.removeEventListener("mouseup", v))
            }, 2)
        }

        function le(g, o, _, A, l, f) {
            var K, Z;
            const E = (K = w.value) == null ? void 0 : K.querySelectorAll(".phw-s-eachNavItem")[g],
                O = E == null ? void 0 : E.querySelectorAll(".phw-s-subNavItem")[o],
                T = O == null ? void 0 : O.querySelectorAll(".phw-s-subNavNestedItem")[_],
                R = T == null ? void 0 : T.querySelectorAll(".phw-s-subsubNavNestedItem")[A],
                L = R && R.querySelector("button");
            l || (i.value.menuBlock[g].folderItems[o].folderItems[_].folderItems[A].showMore = !i.value.menuBlock[g].folderItems[o].folderItems[_].folderItems[A].showMore, (Z = f.currentTarget) == null || Z.focus(), i.value.menuBlock[g].folderItems[o].folderItems[_].folderItems[A].showMore ? setTimeout(() => {
                D = A, document.addEventListener("keyup", v), document.addEventListener("mouseup", v)
            }, 2) : (document.removeEventListener("keyup", v), document.removeEventListener("mouseup", v))), l && (i.value.menuBlock[g].folderItems[o].folderItems[_].showMore = !1, e.nextTick(() => {
                L && L.focus()
            }))
        }
        const M = g => {
            g && g.focus && g.focus()
        };

        function fe() {
            const g = document.querySelector(".nav-mobile-block"),
                o = document.querySelectorAll(".phw-hamburger-block button"),
                _ = g == null ? void 0 : g.querySelectorAll("a[href]:not([disabled]), button:not([disabled])");
            if (_.length) {
                const A = o[0],
                    l = _[_.length - 1];
                A.addEventListener("focusout", f => {
                    var E;
                    (E = g == null ? void 0 : g.parentElement) != null && E.contains(f.relatedTarget) || M(l)
                }), l.addEventListener("focusout", f => {
                    var E;
                    (E = g == null ? void 0 : g.parentElement) != null && E.contains(f.relatedTarget) || M(A)
                })
            }
        }

        function pe(g) {
            var R, L, K;
            n.value = g;
            let o = (R = a.value) == null ? void 0 : R.querySelector('[data-mobile-view="header-menu"]');
            const _ = document.body.children,
                A = ((L = a.value) == null ? void 0 : L.querySelector(".nav-mobile-block")) || document.querySelector(".nav-mobile-block"),
                l = (K = A.closest("[data-func-widget-id]")) == null ? void 0 : K.getAttribute("data-func-widget-id"),
                f = r == null ? void 0 : r.instanceId;
            !s.value && (h == null ? void 0 : h.value) === "mobile" && A.setAttribute("data-func-widget-id", l), !s.value && (h == null ? void 0 : h.value) === "mobile" && A.setAttribute("instance-id", f);
            const E = document.querySelector(".phw-s-custom-button-mobile"),
                O = '.phw-mobile-menu-active[data-mobile-view="header-menu"]',
                T = '.phw-mobile-drop-active[data-mobile-view="header-menu"]';
            if (!g && (h == null ? void 0 : h.value) === "desktop" && setTimeout(() => {
                    fe()
                }, 200), g) {
                E == null || E.classList.remove("phw-d-block"), o = document.querySelector(`${O},${T}`), A && A.classList.remove("phw-mobile-menu-active", "phw-mobile-drop-active"), o && o.classList.remove("phw-mobile-menu-active", "phw-mobile-drop-active"), document.body.style.overflow = "", !s.value && (h == null ? void 0 : h.value) === "mobile" && o.remove();
                for (let Z = 0; Z < _.length && !s.value; Z++) _[Z].removeAttribute("aria-hidden");
                !s.value && (h == null ? void 0 : h.value) === "mobile" && a.value.append(o)
            } else {
                E == null || E.classList.add("phw-d-block"), A && A.classList.add("phw-mobile-menu-active"), document.body.style.overflow = "hidden", t.handleStyleInMobile('[data-selector-id="mobile-menu"],.phw-s-nav-block'), !s.value && (h == null ? void 0 : h.value) === "mobile" && o.remove();
                for (let Z = 0; Z < _.length && !s.value; Z++) _[Z].setAttribute("aria-hidden", "true");
                !s.value && (h == null ? void 0 : h.value) === "mobile" && document.body.append(o)
            }
            setTimeout(() => {
                const Z = a.value && a.value.querySelector('[data-menulist-button="mobile-button"]');
                Z && Z.focus()
            }, 10)
        }

        function re(g) {
            var o;
            (o = a.value) != null && o.contains(g.target) || pe(!0)
        }

        function N(g, o) {
            let _ = g.value;
            _ = window.innerWidth;
            const A = document.querySelector(".ph-header .phw-s-header"),
                l = document.querySelector(".ph-header"),
                f = document.querySelector(".ph-page"),
                E = document.querySelector(".ph-footer"),
                O = "ph:refreshSliders";
            if (l && _ >= e.ref(1200).value) {
                f.classList.add("phw-s-vertical-menu"), E.classList.add("phw-s-vertical-menu");
                const T = A.querySelector(".phw-s-small-logo-block");
                T.style.height = "100%", setTimeout(() => {
                    var Z;
                    const R = t.getHeight(l),
                        L = (Z = o.value) == null ? void 0 : Z.querySelector(".phw-s-nav-block"),
                        K = L.offsetWidth;
                    L.style.top = `${R}px`, L.style.height = `calc(100vh - ${R}px)`, f.style.width = `calc(100% - ${K}px)`, f.style.marginInlineStart = `${K}px`, E.style.width = `calc(100% - ${K}px)`, E.style.marginInlineStart = `${K}px`, t.raiseCustomEvent(O, {})
                }, 500)
            } else f.style.width = "", f.style.marginInlineStart = "", E.style.width = "", E.style.marginInlineStart = ""
        }
        return {
            handlNavItem: I,
            handlSubNavItem: z,
            handlSubNavNestedItem: ee,
            handleSubSubNavNestedItem: le,
            handleMobileView: pe,
            handleOutSideClick: re,
            headerBlockHeight: N,
            handleAnchorLinkClick: g => {
                if (g && g.includes("#")) {
                    const o = parseInt(r.maxAllowedMenuItems, 10) !== 1,
                        _ = !n.value;
                    o && _ && pe(!0)
                }
            }
        }
    }
    const xc = {
            "data-ps": "a80956b6-div-2"
        },
        Nc = {
            class: "phs-widget-block-area ph-widget-box",
            "data-ps": "a80956b6-div-3"
        },
        Tc = {
            class: "phw-icon-ctr phw-d-md-block",
            "data-ps": "a80956b6-span-1"
        },
        Vc = {
            class: "phw-i-sz-6 phw-i-sz-sm-3",
            fill: "currentcolor",
            "data-ps": "a80956b6-svg-1"
        },
        Lc = {
            href: "#phw-cns-icon-hamburger",
            "data-ps": "a80956b6-use-1"
        },
        Ic = {
            class: "phw-icon-ctr",
            "data-ps": "a80956b6-span-2"
        },
        Mc = {
            class: "phw-i-sz-6 phw-i-sz-sm-3",
            fill: "currentcolor",
            "data-ps": "a80956b6-svg-2"
        },
        Ac = {
            href: "#phw-cns-icon-close",
            "data-ps": "a80956b6-use-2"
        },
        Cc = ["data-mobile-view"],
        Oc = ["aria-label", "role"],
        Fc = ["role", "data-ph-at-count"],
        Rc = ["data-ph-at-index", "role"],
        Hc = ["aria-label", "target", "onClick", "innerHTML"],
        Uc = {
            key: 1,
            class: "phw-icon-ctr",
            "data-ps": "a80956b6-span-15"
        },
        zc = {
            key: 0,
            class: "phw-btn-icon phw-i-sz-3 phw-ml-1 phw-icon-flip",
            fill: "currentcolor",
            "aria-hidden": "true",
            "data-ps": "a80956b6-svg-15"
        },
        qc = {
            href: "#phw-cns-icon-chevron-right",
            "data-ps": "a80956b6-use-15"
        },
        Gc = {
            key: 1,
            class: "phw-btn-icon phw-i-sz-2 phw-ml-1",
            fill: "currentcolor",
            "aria-hidden": "true",
            "data-ps": "a80956b6-svg-16"
        },
        Kc = {
            href: "#phw-cns-icon-external",
            "data-ps": "a80956b6-use-16"
        },
        jc = ["aria-expanded", "aria-label", "onClick"],
        Wc = ["innerHTML"],
        Jc = {
            class: "phw-icon-ctr",
            "data-ps": "a80956b6-span-4"
        },
        Zc = {
            class: "phw-i-sz-4 phw-i-sz-sm-3",
            fill: "currentcolor",
            "data-icon-variant": "icon-1",
            "data-ps": "a80956b6-svg-3"
        },
        Yc = {
            href: "#phw-cns-icon-chevron-up",
            "data-ps": "a80956b6-use-3"
        },
        Xc = {
            class: "phw-i-sz-4 phw-i-sz-sm-3",
            fill: "currentcolor",
            "data-icon-variant": "icon-2",
            "data-ps": "a80956b6-svg-4"
        },
        Qc = {
            href: "#phw-cns-icon-chevron-down",
            "data-ps": "a80956b6-use-4"
        },
        vc = ["data-ph-at-count", "data-list", "role"],
        e1 = ["data-ph-at-index", "role"],
        t1 = ["aria-label", "target", "onClick", "onKeyup", "innerHTML"],
        a1 = {
            key: 1,
            class: "phw-icon-ctr",
            "data-ps": "a80956b6-span-17"
        },
        n1 = {
            key: 0,
            class: "phw-btn-icon phw-i-sz-3 phw-ml-1 phw-icon-flip",
            fill: "currentcolor",
            "aria-hidden": "true",
            "data-ps": "a80956b6-svg-17"
        },
        i1 = {
            href: "#phw-cns-icon-chevron-right",
            "data-ps": "a80956b6-use-17"
        },
        r1 = {
            key: 1,
            class: "phw-btn-icon phw-i-sz-2 phw-ml-1",
            fill: "currentcolor",
            "aria-hidden": "true",
            "data-ps": "a80956b6-svg-18"
        },
        s1 = {
            href: "#phw-cns-icon-external",
            "data-ps": "a80956b6-use-18"
        },
        d1 = {
            key: 0,
            "data-ps": "a80956b6-div-9"
        },
        l1 = ["aria-expanded", "aria-label", "onClick", "onKeyup"],
        o1 = ["innerHTML"],
        c1 = {
            class: "phw-icon-ctr",
            "data-ps": "a80956b6-span-6"
        },
        p1 = {
            class: "phw-i-sz-4",
            fill: "currentcolor",
            "data-ps": "a80956b6-svg-5"
        },
        f1 = {
            href: "#phw-cns-icon-chevron-down",
            "data-ps": "a80956b6-use-5"
        },
        h1 = {
            class: "phw-i-sz-4 phw-icon-flip",
            fill: "currentcolor",
            "data-ps": "a80956b6-svg-6"
        },
        w1 = {
            href: "#phw-cns-icon-chevron-right",
            "data-ps": "a80956b6-use-6"
        },
        $1 = ["data-ph-at-count", "role"],
        g1 = ["data-ph-at-index", "role"],
        k1 = ["aria-label", "target", "onClick", "onKeyup", "innerHTML"],
        m1 = {
            key: 1,
            class: "phw-icon-ctr",
            "data-ps": "a80956b6-span-19"
        },
        u1 = {
            key: 0,
            class: "phw-btn-icon phw-i-sz-3 phw-ml-1 phw-g-icon-white phw-icon-flip",
            fill: "currentcolor",
            "aria-hidden": "true",
            "data-ps": "a80956b6-svg-19"
        },
        y1 = {
            href: "#phw-cns-icon-chevron-right",
            "data-ps": "a80956b6-use-19"
        },
        b1 = {
            key: 1,
            class: "phw-btn-icon phw-i-sz-2 phw-ml-1 phw-g-icon-white",
            fill: "currentcolor",
            "aria-hidden": "true",
            "data-ps": "a80956b6-svg-20"
        },
        B1 = {
            href: "#phw-cns-icon-external",
            "data-ps": "a80956b6-use-20"
        },
        S1 = {
            key: 0,
            class: "folder-disable",
            "data-ps": "a80956b6-div-10"
        },
        E1 = ["aria-expanded", "aria-label", "onClick", "onKeyup"],
        P1 = ["innerHTML"],
        _1 = {
            class: "phw-icon-ctr",
            "data-ps": "a80956b6-span-8"
        },
        D1 = {
            class: "phw-i-sz-4",
            fill: "currentcolor",
            "data-ps": "a80956b6-svg-7"
        },
        x1 = {
            href: "#phw-cns-icon-chevron-down",
            "data-ps": "a80956b6-use-7"
        },
        N1 = {
            class: "phw-i-sz-4",
            fill: "currentcolor",
            "data-ps": "a80956b6-svg-8"
        },
        T1 = {
            href: "#phw-cns-icon-chevron-up",
            "data-ps": "a80956b6-use-8"
        },
        V1 = ["data-ph-at-count", "role"],
        L1 = ["data-ph-at-index", "role"],
        I1 = ["aria-label", "target", "onClick", "onKeyup", "innerHTML"],
        M1 = {
            key: 0,
            class: "phw-d-none phw-d-sm-block",
            "data-ps": "a80956b6-div-11"
        },
        A1 = {
            key: 1,
            class: "language-selector-mobile phw-d-none phw-d-sm-block",
            "data-ps": "a80956b6-div-12"
        },
        C1 = {
            key: 2,
            class: "phw-d-none phw-d-sm-block",
            "data-ps": "a80956b6-div-14"
        },
        O1 = e.defineComponent({
            __name: "MenuListDefaultDefaultComponent",
            props: {
                instanceId: null,
                contentId: null,
                theme: null,
                widgetTag: null,
                showIcon: {
                    type: Boolean
                },
                showExternalIcon: {
                    type: Boolean
                },
                maxAllowedMenuItems: null,
                showCandidateLoginMobile: {
                    type: Boolean
                },
                showLanguageSelectorMobile: {
                    type: Boolean
                },
                showJobCartCountMobile: {
                    type: Boolean
                },
                expandMenuOnHover: {
                    type: Boolean
                },
                menuPos: null,
                notEmptyCart: {
                    type: Boolean
                },
                emptyCart: {
                    type: Boolean
                },
                languageSelectorPopUp: {
                    type: Boolean
                },
                enableSamePageRedirection: {
                    type: Boolean
                },
                sortOption: null
            },
            setup(i) {
                const a = i,
                    n = e.ref(),
                    r = e.ref(),
                    w = e.ref([]),
                    s = e.ref(!0),
                    h = e.ref(""),
                    x = e.ref(!1),
                    G = e.ref(),
                    V = e.ref(1);
                e.onBeforeMount(() => {
                    t.contentStore.getContent(a.contentId).then(F => {
                        n.value = F || {}
                    }), h.value = t.getDeviceType(), t.getParam("env") === "editor" && (x.value = !0), V.value = Math.round(window.outerWidth / window.innerWidth * 100)
                }), e.onMounted(() => {
                    t.usePhCommon().init(r.value, n, a.instanceId)
                });
                const {
                    handlNavItem: D,
                    handlSubNavItem: H,
                    handlSubNavNestedItem: m,
                    handleMobileView: I,
                    handleAnchorLinkClick: c
                } = Dc(n, r, s, a, G, x, h);
                return (F, z) => {
                    var q, ee, v, le, M, fe, pe, re;
                    return e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        ref_key: "element",
                        ref: r,
                        class: "phw-widget-ctr phw-widget-empty-ctr",
                        "data-ps": "a80956b6-div-1"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", xc, [e.withDirectives((e.openBlock(), e.createElementBlock("div", Nc, [e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        class: e.normalizeClass([parseInt(i.maxAllowedMenuItems) === 1 ? "phw-d-none" : "phw-hamburger-block phw-d-lg-block phw-d-none"]),
                        "data-ps": "a80956b6-div-4"
                    }, [s.value ? e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                        key: 0,
                        "data-menulist-button": "mobile-button",
                        "aria-label": "open hamburger menu",
                        class: "phw-menu-btn phw-hamburger-menu phw-m-0 phw-p-0 phw-text-l phw-mr-1 phw-d-sm-flex phw-align-sm-items-center phw-cwctr",
                        "data-ps": "a80956b6-button-1",
                        "data-icon-variant": "icon-2",
                        "data-ph-at-id": "open-hamburger",
                        onClick: z[0] || (z[0] = N => e.unref(I)(!1))
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Tc, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", Vc, [e.withDirectives(e.createElementVNode("use", Lc, null, 512), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), s.value ? e.createCommentVNode("", !0) : e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                        key: 1,
                        "data-menulist-button": "mobile-button",
                        "aria-label": "close hamburger menu",
                        "data-ph-at-id": "close-hamburger",
                        class: "phw-menu-btn phw-m-0 phw-p-0 phw-hamburger-close phw-text-l phw-mr-1 phw-cw-ctr",
                        "data-icon-variant": "icon-1",
                        "data-ps": "a80956b6-button-2",
                        onClick: z[1] || (z[1] = N => e.unref(I)(!0))
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Ic, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", Mc, [e.withDirectives(e.createElementVNode("use", Ac, null, 512), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]), n.value ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: 0,
                        ref_key: "menuItemsBar",
                        ref: G,
                        class: e.normalizeClass([parseInt(i.maxAllowedMenuItems) === 1 ? "" : "nav-mobile-block phw-p-sm-2 phw-pt-lg-4 phw-pb-lg-4 phw-pr-lg-6 phw-pl-lg-6"]),
                        "data-mobile-view": parseInt(i.maxAllowedMenuItems) === 1 ? "" : "header-menu",
                        "data-ps": "a80956b6-div-5",
                        "data-selector-id": "mobile-menu"
                    }, [h.value === "mobile" && i.showCandidateLoginMobile || V.value >= 200 && i.showCandidateLoginMobile ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: 0,
                        class: e.normalizeClass([parseInt(i.maxAllowedMenuItems) === 1 ? "phw-d-none" : "candidate-login-mobile phw-d-none phw-d-sm-block phw-mb-sm-2"]),
                        "data-ps": "a80956b6-div-8"
                    }, [e.withDirectives(e.createVNode(e.unref(ja), {
                        "data-component": "candidate-login-mobile",
                        "flow-type": "signUp",
                        theme: "deafult",
                        content: (q = n.value) == null ? void 0 : q.candidateLoginWdgt,
                        "data-ps": "a80956b6-candidatelogindefaultheaderdefaultcomponent-1"
                    }, null, 8, ["content"]), [
                        [e.unref(t.vPhwSetting)]
                    ])], 2)), [
                        [e.vShow, !s.value],
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), n.value && n.value.menuBlock && n.value.menuBlock.length > 0 ? e.withDirectives((e.openBlock(), e.createElementBlock("nav", {
                        key: 1,
                        "aria-label": i.menuPos === "primary" ? (ee = n.value) == null ? void 0 : ee.primaryMenuAriaLabel : i.menuPos === "secondary" ? (v = n.value) == null ? void 0 : v.secondaryMenuAriaLabel : i.menuPos === "tertiary" ? (le = n.value) == null ? void 0 : le.tertiaryMenuAriaLabel : "",
                        class: "phw-nav-menu",
                        "data-ps": "a80956b6-nav-1",
                        role: parseInt(i.maxAllowedMenuItems) === 1 ? "presentation" : "navigation"
                    }, [n.value && n.value.menuBlock ? e.withDirectives((e.openBlock(), e.createElementBlock("ul", {
                        key: 0,
                        class: "phw-d-flex phw-flex-wrap phw-d-lg-block phw-align-items-center phw-list-none phw-m-0 phw-p-0",
                        role: n.value.menuBlock.length > 1 && parseInt(i.maxAllowedMenuItems) !== 1 ? "list" : "presentation",
                        "data-ph-at-count": (M = n.value.menuBlock) == null ? void 0 : M.lenth,
                        "data-ph-at-id": "menu-item-container-1",
                        "data-ps": "a80956b6-ul-1"
                    }, [(e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(n.value.menuBlock.slice(0, i.maxAllowedMenuItems), (N, W) => {
                        var g;
                        return e.withDirectives((e.openBlock(), e.createElementBlock("li", {
                            key: W,
                            "data-ph-at-id": "menu-item-nested-1",
                            "data-ph-at-index": W,
                            class: e.normalizeClass([i.expandMenuOnHover ? "phw-hover-enable" : "", "phw-menu-list-item phw-posn-relative phw-pr-2 phw-pl-2 phw-s-eachNavItem"]),
                            role: n.value.menuBlock.length > 1 && parseInt(i.maxAllowedMenuItems) !== 1 ? "listitem" : void 0,
                            "data-ps": "a80956b6-li-1"
                        }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                            class: e.normalizeClass(a.showIcon ? "phw-d-flex phw-align-items-center phw-menu-icon-container" : ""),
                            "data-ps": "a80956b6-span-14"
                        }, [N && N.link ? e.withDirectives((e.openBlock(), e.createElementBlock("a", {
                            key: 0,
                            "aria-label": (g = N == null ? void 0 : N.link) == null ? void 0 : g.ariaLabel,
                            target: N.link.target,
                            "data-ph-at-id": "menu-item-link-nested-1",
                            class: "phw-btn menu-items phw-p-0 phw-m-0 phw-g-menu-list-link",
                            "data-ps": "a80956b6-a-1",
                            onClick: o => e.unref(c)(N.link.href),
                            innerHTML: N.link.text
                        }, null, 8, Hc)), [
                            [e.unref(t.vPhwSetting)],
                            [e.unref(t.vPhwHref), N.link.href],
                            [e.unref(t.vPhwTrack), "header_menu_click"]
                        ]) : e.createCommentVNode("", !0), a.showIcon && N && N.link ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Uc, [!i.showExternalIcon || N.link.target != "_blank" ? e.withDirectives((e.openBlock(), e.createElementBlock("svg", zc, [e.withDirectives(e.createElementVNode("use", qc, null, 512), [
                            [e.unref(t.vPhwSetting)]
                        ])])), [
                            [e.unref(t.vPhwSetting)]
                        ]) : e.createCommentVNode("", !0), i.showExternalIcon && N.link.target == "_blank" ? e.withDirectives((e.openBlock(), e.createElementBlock("svg", Gc, [e.withDirectives(e.createElementVNode("use", Kc, null, 512), [
                            [e.unref(t.vPhwSetting)]
                        ])])), [
                            [e.unref(t.vPhwSetting)]
                        ]) : e.createCommentVNode("", !0)])), [
                            [e.unref(t.vPhwSetting)]
                        ]) : e.createCommentVNode("", !0)], 2)), [
                            [e.unref(t.vPhwSetting)]
                        ]), !(N && N.link) && N && N.folderItems ? e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                            key: 0,
                            class: e.normalizeClass(["phw-btn", "phw-g-menu-list-link", "phw-btn", "phw-dropdown", "phw-m-0", "phw-p-0", "phw-text-l", "phw-s-navButton" + W, "phw-align-items-center"]),
                            "data-ph-at-id": "button-nested-1",
                            "aria-expanded": N.showMore ? "true" : "false",
                            "data-ps": "a80956b6-button-3",
                            "aria-label": N == null ? void 0 : N.ariaLabel,
                            onClick: o => e.unref(D)(W, !1, o)
                        }, [e.withDirectives(e.createElementVNode("span", {
                            class: "phw-g-menu-hover-border-bottom",
                            "data-ps": "a80956b6-span-3",
                            innerHTML: N.folderName
                        }, null, 8, Wc), [
                            [e.unref(t.vPhwSetting)]
                        ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", Jc, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", Zc, [e.withDirectives(e.createElementVNode("use", Yc, null, 512), [
                            [e.unref(t.vPhwSetting)]
                        ])])), [
                            [e.vShow, N.showMore],
                            [e.unref(t.vPhwSetting)]
                        ]), e.withDirectives((e.openBlock(), e.createElementBlock("svg", Xc, [e.withDirectives(e.createElementVNode("use", Qc, null, 512), [
                            [e.unref(t.vPhwSetting)]
                        ])])), [
                            [e.vShow, !N.showMore],
                            [e.unref(t.vPhwSetting)]
                        ])])), [
                            [e.unref(t.vPhwSetting)]
                        ])], 10, jc)), [
                            [e.unref(t.vPhwSetting)],
                            [e.unref(t.vPhwTrack), "header_menu_click"]
                        ]) : e.createCommentVNode("", !0), !(N && N.link) && N && N.folderItems ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                            key: 1,
                            class: e.normalizeClass([i.expandMenuOnHover ? "phw-hover-enable-submenu" : "", N.showMore ? "phw-s-menu-active" : "", "phw-sub-nav-wrapper phw-posn-absolute phw-posn-lg-relative"]),
                            "data-ps": "a80956b6-div-7"
                        }, [e.withDirectives((e.openBlock(), e.createElementBlock("ul", {
                            "data-ph-at-count": N.folderItems.length,
                            "data-ph-at-id": "menu-item-container-2",
                            "data-list": "menu-list-" + W,
                            class: "phw-sub-nav phw-box-shadow-inherit phw-posn-relative phw-list-none phw-p-0 phw-second-sub-nav-gs",
                            "data-ph-component-name": "sub-navigation",
                            role: N.folderItems.length > 1 ? "list" : "presentation",
                            "data-ps": "a80956b6-ul-2"
                        }, [(e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(N.folderItems, (o, _) => {
                            var A;
                            return e.withDirectives((e.openBlock(), e.createElementBlock("li", {
                                key: _,
                                "data-ph-at-index": _,
                                "data-ph-at-id": "menu-item-nested-2",
                                class: e.normalizeClass([i.expandMenuOnHover ? "phw-hover-enable" : "", "phw-sub-menu-list phw-pt-2 phw-pb-2 phw-pr-2 phw-pl-2 phw-pl-xl-2 phw-pr-xl-2 phw-pt-sm-1 phw-pb-sm-1 phw-posn-relative phw-s-subNavItem"]),
                                role: N.folderItems.length > 1 ? "listitem" : void 0,
                                "data-ph-component-name": "menu-item1",
                                "data-ps": "a80956b6-li-2"
                            }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                                class: e.normalizeClass(a.showIcon ? "phw-d-flex phw-align-items-center phw-menu-icon-container" : "phw-d-flex"),
                                "data-ps": "a80956b6-span-16"
                            }, [o && o.link ? e.withDirectives((e.openBlock(), e.createElementBlock("a", {
                                key: 0,
                                "data-ph-at-id": "menu-item-link-nested-2",
                                "aria-label": (A = o == null ? void 0 : o.link) == null ? void 0 : A.ariaLabel,
                                target: o.link && o.link.target,
                                "data-ph-component-name": "menu-item-link1",
                                class: "phw-m-0 phw-p-0 phw-g-menu-sub-list phw-d-inline-block phw-td-none",
                                "data-ps": "a80956b6-a-2",
                                onClick: l => e.unref(c)(o.link.href),
                                onKeyup: e.withKeys(l => e.unref(D)(W, !0, l), ["esc"]),
                                innerHTML: o.link.text
                            }, null, 40, t1)), [
                                [e.unref(t.vPhwSetting)],
                                [e.unref(t.vPhwHref), o.link.href],
                                [e.unref(t.vPhwTrack), "header_menu_click"]
                            ]) : e.createCommentVNode("", !0), a.showIcon && o && o.link ? e.withDirectives((e.openBlock(), e.createElementBlock("span", a1, [!i.showExternalIcon || !(o.link && o.link.target == "_blank") ? e.withDirectives((e.openBlock(), e.createElementBlock("svg", n1, [e.withDirectives(e.createElementVNode("use", i1, null, 512), [
                                [e.unref(t.vPhwSetting)]
                            ])])), [
                                [e.unref(t.vPhwSetting)]
                            ]) : e.createCommentVNode("", !0), i.showExternalIcon && o.link && o.link.target == "_blank" ? e.withDirectives((e.openBlock(), e.createElementBlock("svg", r1, [e.withDirectives(e.createElementVNode("use", s1, null, 512), [
                                [e.unref(t.vPhwSetting)]
                            ])])), [
                                [e.unref(t.vPhwSetting)]
                            ]) : e.createCommentVNode("", !0)])), [
                                [e.unref(t.vPhwSetting)]
                            ]) : e.createCommentVNode("", !0)], 2)), [
                                [e.unref(t.vPhwSetting)]
                            ]), o && o.folderItems ? e.withDirectives((e.openBlock(), e.createElementBlock("div", d1, [o && o.folderItems ? e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                                key: 0,
                                "data-ph-at-id": "button-nested-2",
                                "data-ps": "a80956b6-button-4",
                                "aria-expanded": o.showMore ? "true" : "false",
                                class: "phw-text-l phw-btn phw-g-menu-sub-list phw-d-flex phw-align-item-center phw-justify-content-start phw-p-0 phw-cwctr",
                                "aria-label": o == null ? void 0 : o.ariaLabel,
                                onClick: l => e.unref(H)(W, _, !1, l),
                                onKeyup: e.withKeys(l => e.unref(D)(W, !0, l), ["esc"])
                            }, [e.withDirectives(e.createElementVNode("span", {
                                class: "phw-g-menu-hover-border-bottom",
                                "data-ps": "a80956b6-span-5",
                                innerHTML: o.folderName
                            }, null, 8, o1), [
                                [e.unref(t.vPhwSetting)]
                            ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", c1, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", p1, [e.withDirectives(e.createElementVNode("use", f1, null, 512), [
                                [e.unref(t.vPhwSetting)]
                            ])])), [
                                [e.vShow, !o.showMore],
                                [e.unref(t.vPhwSetting)]
                            ]), e.withDirectives((e.openBlock(), e.createElementBlock("svg", h1, [e.withDirectives(e.createElementVNode("use", w1, null, 512), [
                                [e.unref(t.vPhwSetting)]
                            ])])), [
                                [e.vShow, o.showMore],
                                [e.unref(t.vPhwSetting)]
                            ])])), [
                                [e.vShow, w.value[W] || !w.value[W]],
                                [e.unref(t.vPhwSetting)]
                            ])], 40, l1)), [
                                [e.unref(t.vPhwSetting)]
                            ]) : e.createCommentVNode("", !0), !(o && o.link) && o && o.folderItems ? e.withDirectives((e.openBlock(), e.createElementBlock("ul", {
                                key: 1,
                                "data-ph-at-count": o.folderItems.length,
                                "data-ph-at-id": "menu-item-container-3",
                                class: e.normalizeClass([i.expandMenuOnHover ? "phw-hover-enable-submenu" : "", "phw-sub-nav phw-posn-absolute phw-posn-lg-relative phw-list-none phw-p-0"]),
                                "data-ph-component-name": "sub-navigation",
                                role: o.folderItems.length > 1 ? "list" : "presentation",
                                "data-ps": "a80956b6-ul-3"
                            }, [(e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(o.folderItems, (l, f) => {
                                var E, O;
                                return e.withDirectives((e.openBlock(), e.createElementBlock("li", {
                                    key: f,
                                    "data-ph-at-index": f,
                                    "data-ph-at-id": "menu-item-nested-3",
                                    class: e.normalizeClass([i.expandMenuOnHover ? "phw-hover-enable" : "", "phw-pt-2 phw-pb-2 phw-pr-2 phw-pl-2 phw-posn-relative phw-s-subNavNestedItem"]),
                                    role: ((E = l == null ? void 0 : l.folderItems) == null ? void 0 : E.length) > 1 ? "listitem" : void 0,
                                    "data-ph-component-name": "menu-item1",
                                    "data-ps": "a80956b6-li-3"
                                }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                                    class: e.normalizeClass(a.showIcon ? "phw-d-flex phw-align-items-center phw-menu-icon-container" : ""),
                                    "data-ps": "a80956b6-span-18"
                                }, [l && l.link ? e.withDirectives((e.openBlock(), e.createElementBlock("a", {
                                    key: 0,
                                    "aria-label": (O = l == null ? void 0 : l.link) == null ? void 0 : O.ariaLabel,
                                    target: l.link && l.link.target,
                                    "data-ph-at-id": "menu-item-link-nested-3",
                                    "data-ph-component-name": "menu-item-link1",
                                    class: "phw-m-0 phw-p-0 phw-g-menu-sub-list phw-td-none",
                                    "data-ps": "a80956b6-a-3",
                                    onClick: T => e.unref(c)(l.link.href),
                                    onKeyup: e.withKeys(T => e.unref(H)(W, _, !0, T), ["esc"]),
                                    innerHTML: l.link.text
                                }, null, 40, k1)), [
                                    [e.unref(t.vPhwSetting)],
                                    [e.unref(t.vPhwHref), l.link.href]
                                ]) : e.createCommentVNode("", !0), a.showIcon && l && l.link ? e.withDirectives((e.openBlock(), e.createElementBlock("span", m1, [!i.showExternalIcon || !(l.link && l.link.target == "_blank") ? e.withDirectives((e.openBlock(), e.createElementBlock("svg", u1, [e.withDirectives(e.createElementVNode("use", y1, null, 512), [
                                    [e.unref(t.vPhwSetting)]
                                ])])), [
                                    [e.unref(t.vPhwSetting)]
                                ]) : e.createCommentVNode("", !0), i.showExternalIcon && l.link && l.link.target == "_blank" ? e.withDirectives((e.openBlock(), e.createElementBlock("svg", b1, [e.withDirectives(e.createElementVNode("use", B1, null, 512), [
                                    [e.unref(t.vPhwSetting)]
                                ])])), [
                                    [e.unref(t.vPhwSetting)]
                                ]) : e.createCommentVNode("", !0)])), [
                                    [e.unref(t.vPhwSetting)]
                                ]) : e.createCommentVNode("", !0)], 2)), [
                                    [e.unref(t.vPhwSetting)]
                                ]), l && l.folderItems ? e.withDirectives((e.openBlock(), e.createElementBlock("div", S1, [l && l.folderItems ? e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                                    key: 0,
                                    "data-ph-at-id": "button-nested-3",
                                    class: "phw-btn phw-text-l phw-p-0 phw-g-menu-sub-list phw-justify-content-start phw-p-0",
                                    "data-ps": "a80956b6-button-5",
                                    "aria-expanded": l.showMore ? "true" : "false",
                                    "aria-label": l == null ? void 0 : l.ariaLabel,
                                    onClick: T => e.unref(m)(W, _, f, !1, T),
                                    onKeyup: e.withKeys(T => e.unref(H)(W, _, !0, T), ["esc"])
                                }, [e.withDirectives(e.createElementVNode("span", {
                                    class: "phw-g-menu-hover-border-bottom",
                                    "data-ps": "a80956b6-span-7",
                                    innerHTML: l.folderName
                                }, null, 8, P1), [
                                    [e.unref(t.vPhwSetting)]
                                ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", _1, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", D1, [e.withDirectives(e.createElementVNode("use", x1, null, 512), [
                                    [e.unref(t.vPhwSetting)]
                                ])])), [
                                    [e.vShow, !l.showMore],
                                    [e.unref(t.vPhwSetting)]
                                ]), e.withDirectives((e.openBlock(), e.createElementBlock("svg", N1, [e.withDirectives(e.createElementVNode("use", T1, null, 512), [
                                    [e.unref(t.vPhwSetting)]
                                ])])), [
                                    [e.vShow, l.showMore],
                                    [e.unref(t.vPhwSetting)]
                                ])])), [
                                    [e.unref(t.vPhwSetting)]
                                ])], 40, E1)), [
                                    [e.unref(t.vPhwSetting)]
                                ]) : e.createCommentVNode("", !0), !(l && l.link) && l && l.folderItems ? e.withDirectives((e.openBlock(), e.createElementBlock("ul", {
                                    key: 1,
                                    "data-ph-at-count": l.folderItems.length,
                                    "data-ph-at-id": "menu-item-container-4",
                                    class: e.normalizeClass([i.expandMenuOnHover ? "phw-hover-enable-submenu" : "", "phw-sub-nav phw-stroke-dark phw-posn-absolute phw-posn-lg-relative phw-list-none phw-p-0"]),
                                    "data-ph-component-name": "sub-navigation",
                                    role: l.folderItems.length > 1 ? "list" : "presentation",
                                    "data-ps": "a80956b6-ul-4"
                                }, [(e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(l.folderItems, (T, R) => {
                                    var L, K;
                                    return e.withDirectives((e.openBlock(), e.createElementBlock("li", {
                                        key: R,
                                        "data-ph-at-index": R,
                                        "data-ph-at-id": "menu-item-nested-4",
                                        class: "phw-pt-2 phw-pb-2 phw-pr-0 phw-pl-0 phw-posn-relative",
                                        role: ((L = T == null ? void 0 : T.folderItems) == null ? void 0 : L.length) > 1 ? "listitem" : void 0,
                                        "data-ph-component-name": "menu-item1",
                                        "data-ps": "a80956b6-li-4"
                                    }, [T && T.link ? e.withDirectives((e.openBlock(), e.createElementBlock("a", {
                                        key: 0,
                                        "aria-label": (K = T == null ? void 0 : T.link) == null ? void 0 : K.ariaLabel,
                                        target: T.link && T.link.target,
                                        "data-ph-component-name": "menu-item-link1",
                                        class: "phw-m-0 phw-p-0 phw-g-menu-sub-list phw-td-none",
                                        "data-ph-at-id": "menu-item-link-nested-4",
                                        "data-ps": "a80956b6-a-4",
                                        onClick: Z => e.unref(c)(T.link.href),
                                        onKeyup: e.withKeys(Z => e.unref(m)(W, _, f, !0, Z), ["esc"]),
                                        innerHTML: T.link.text
                                    }, null, 40, I1)), [
                                        [e.unref(t.vPhwSetting)],
                                        [e.unref(t.vPhwHref), T.link.href]
                                    ]) : e.createCommentVNode("", !0)], 8, L1)), [
                                        [e.unref(t.vPhwSetting)]
                                    ])
                                }), 128))], 10, V1)), [
                                    [e.vShow, l.showMore],
                                    [e.unref(t.vPhwSetting)]
                                ]) : e.createCommentVNode("", !0)])), [
                                    [e.unref(t.vPhwSetting)]
                                ]) : e.createCommentVNode("", !0)], 10, g1)), [
                                    [e.unref(t.vPhwSetting)]
                                ])
                            }), 128))], 10, $1)), [
                                [e.vShow, o.showMore],
                                [e.unref(t.vPhwSetting)]
                            ]) : e.createCommentVNode("", !0)])), [
                                [e.unref(t.vPhwSetting)]
                            ]) : e.createCommentVNode("", !0)], 10, e1)), [
                                [e.unref(t.vPhwSetting)]
                            ])
                        }), 128))], 8, vc)), [
                            [e.unref(t.vPhwSetting)]
                        ])], 2)), [
                            [e.vShow, N.showMore],
                            [e.unref(t.vPhwSetting)]
                        ]) : e.createCommentVNode("", !0)], 10, Rc)), [
                            [e.unref(t.vPhwSetting)]
                        ])
                    }), 128))], 8, Fc)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)], 8, Oc)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), n.value && h.value === "mobile" || V.value >= 200 ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: 2,
                        class: e.normalizeClass([parseInt(i.maxAllowedMenuItems) === 1 ? "phw-d-none" : ""]),
                        "data-ps": "a80956b6-div-13"
                    }, [i.showCandidateLoginMobile ? e.withDirectives((e.openBlock(), e.createElementBlock("div", M1, [e.withDirectives(e.createVNode(e.unref(ja), {
                        content: (fe = n.value) == null ? void 0 : fe.candidateLoginWdgt,
                        "flow-type": "signout",
                        "data-ps": "a80956b6-candidatelogindefaultheaderdefaultcomponent-2"
                    }, null, 8, ["content"]), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.vShow, !s.value],
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), i.showLanguageSelectorMobile && !s.value ? e.withDirectives((e.openBlock(), e.createElementBlock("div", A1, [e.withDirectives(e.createVNode(e.unref(gc), {
                        content: (pe = n.value) == null ? void 0 : pe.languageSelectorWdgt,
                        "sort-option": a == null ? void 0 : a.sortOption,
                        "language-selector-pop-up": a.languageSelectorPopUp,
                        "enable-same-page-redirection": i.enableSamePageRedirection,
                        "data-ps": "a80956b6-languageselectordefaultdefaultcomponent-1"
                    }, null, 8, ["content", "sort-option", "language-selector-pop-up", "enable-same-page-redirection"]), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), i.showJobCartCountMobile ? e.withDirectives((e.openBlock(), e.createElementBlock("div", C1, [e.withDirectives(e.createVNode(e.unref(_c), {
                        content: (re = n.value) == null ? void 0 : re.jobCardCountWdgt,
                        "not-empty-cart": i.notEmptyCart,
                        "empty-cart": i.emptyCart,
                        "data-ps": "a80956b6-jobcartcountdefaultdefaultcomponent-1"
                    }, null, 8, ["content", "not-empty-cart", "empty-cart"]), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.vShow, !s.value],
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)], 2)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)], 10, Cc)), [
                        [e.unref(t.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])])), [
                        [e.unref(t.vPhwSetting)]
                    ])
                }
            }
        }),
        l0 = "";
    return O1
});