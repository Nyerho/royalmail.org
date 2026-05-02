(function(e, d) {
    typeof exports == "object" && typeof module < "u" ? module.exports = d(require("vue"), require("ph-common/ph-common")) : typeof define == "function" && define.amd ? define(["vue", "ph-common/ph-common"], d) : (e = typeof globalThis < "u" ? globalThis : e || self, e.PhwJobView2DefaultV1 = d(e.Vue, e.phCommon))
})(this, function(e, d) {
    "use strict";

    function We() {
        function a(w) {
            const T = i();
            return T && T[w] ? T[w] : null
        }

        function t(w, T, o) {
            let _ = `${c(w)}=${c(T)}`;
            if (T === null && (o.expiry = -1), o.expiry >= 0 && !o.expires) {
                const k = new Date;
                k.setHours(k.getHours() + o.expiry), o.expires = k
            }
            o.path && (_ += `; path=${o.path}`), o.domain && (_ += `; domain=${o.domain}`), o.expires && (_ += `; expires=${o.expires.toUTCString()}`), o.secure && (_ += "; secure"), document.cookie = _
        }

        function n(w) {
            document.cookie = `${w}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;`
        }

        function i() {
            return $(document.cookie)
        }

        function $(w) {
            const T = {},
                o = w.split(/ *; */);
            let _;
            if (o[0] === "") return T;
            for (let k = 0; k < o.length; ++k) _ = o[k].split("="), T[f(_[0]) || ""] = f(_[1]);
            return T
        }

        function c(w) {
            try {
                return encodeURIComponent(w)
            } catch {
                return null
            }
        }

        function f(w) {
            try {
                return decodeURIComponent(w)
            } catch {
                return null
            }
        }

        function h() {
            const w = document.cookie,
                T = {},
                o = w.split(/ *; */);
            let _;
            if (o[0] === "") return T;
            for (let k = 0; k < o.length; ++k) _ = o[k].split("="), T[decodeURIComponent(_[0])] = decodeURIComponent(_[1]);
            return T
        }

        function m(w) {
            const T = h();
            return T && T[w] ? T[w] : null
        }
        return {
            get: a,
            set: t,
            deleteCookie: n,
            getCookie: m
        }
    }

    function bt() {
        const a = {
                "errors.location.unsupportedBrowser": "Browser does not support location services",
                "errors.location.permissionDenied": "You have rejected access to your location",
                "errors.location.positionUnavailable": "Unable to determine your location"
            },
            t = e.ref();

        function n() {
            const c = {
                enableHighAccuracy: !0,
                maximumAge: 0
            };
            return new Promise(function(f, h) {
                function m(T) {
                    f(T)
                }

                function w(T) {
                    h(T.message)
                }
                window.navigator && window.navigator.geolocation ? window.navigator.geolocation.getCurrentPosition(m, w, c) : h(a["errors.location.unsupportedBrowser"])
            })
        }

        function i() {
            return n().then(c => (t.value = c, d.publishEvent("GeoLocation", c), c)).catch(c => (d.publishEvent("LocationError", c), c))
        }

        function $() {
            return t
        }
        return {
            getLocation: i,
            askForLocation: $
        }
    }
    const b = {
        ddoKeys: {
            ddoKeyJobWidgets: "jobwidgetsettings",
            ddoKeyFitScore: "fitScoreSettings",
            ddoKeyJobTags: "jobTagSettings",
            ddoKeyAddToCart: "addToCartV2",
            ddoKeyDeleteFromCart: "deleteFromCartV2",
            ddoKeyGetJobStatus: "getJobStatusListV2",
            ddoKeySmartJobTags: "smartJobTags",
            ddoKeyFetchFitScore: "fetchFitScore",
            jobImageBasedOnTags: "jobImageBasedOnTags",
            ddoKeyLatestJobs: "latestJobs",
            ddoKeyNearByJobs: "nearByJobs",
            ddoValidateJwtToken: "validateJwtToken",
            ddoKeyProfileRecommendations: "profileRecommendations",
            ddoKeyRecentlyViewedJobs: "recentlyViewedJobs",
            ddoKeyRecomJobsBrowsingHistory: "recommendationJobsBrowsingHistory",
            ddoKeyJobsYouMightNotThoughtOf: "jobsYouMightNotThoughtOf",
            ddoKeyLeastAppliedJobs: "leastAppliedJobs",
            ddokeyPeopleAlsoViewed: "peopleAlsoViewed",
            ddoKeyRecentlyAddedJobs: "recentlyAddedJobs",
            ddoKeyRecomJobsUserApplies: "recomJobsUserApplies",
            ddoKeyMasterDatav2: "categoryMasterDataV2",
            ddoTargtedJobs: "targetedJobs",
            blogDetailDDOKey: "blogDetail",
            ddoKeySavedJobs: "jobCartV2",
            jobDetailDDOKey: "jobDetail",
            ddoKeySimilarJobs: "similarJobs",
            ddoKeyMyApplications: "fetchApplicationsWithStatus",
            ddoKeyRecomJobsInterestedCategory: "recomInterestedCategory",
            ddoKeyCompleteYourApplication: "completeYourApplication",
            ddoKeyPeopleAlsoApplied: "peopleAlsoApplied",
            ddoKeyRecomBasedJobCart: "recomJobsJobCart",
            ddoKeyEventAssociatedJobs: "searchEventAssociatedJobs",
            ddoKeyEventDetail: "eventDetail",
            ddoKeyWithdrawal: "applicationWithdrawal",
            ddoKeyWithdrawalMenu: "applicationWithDraw",
            ddoKeyOneLineRecommendedJobs: "oneLineRecommendations",
            ddoKeySiteGlobalLabels: "getSiteGlobalLabels"
        },
        widgetTypes: {
            NEARBY_JOBS: "phw-near-by-jobs",
            LEAST_APPLIED_JOBS: "phw-least-applied-jobs",
            RECOM_BASED_APPLIES: "phw-recommendations-based-on-applies",
            RECENTLY_VIEWED: "phw-recently-viewed-jobs",
            RECOM_JOBS_BROWSING_HISTORY: "phw-recom-jobs-browsing-history",
            RECENTLY_ADDED_JOBS: "phw-recently-added-jobs",
            JOBS_IN_INTERESTED_CATEGORY: "phw-jobs-in-interested-category",
            JOBS_YOU_MIGHT_NOT_THOUGH_OF: "phw-jobs-you-might-not-thought-of",
            COMPLETE_YOUR_APPLICATIONS: "phw-complete-your-applications",
            PEOPLE_ALSO_VIEWED: "phw-people-also-viewed",
            PROFILE_RECOM_JOBS: "phw-profile-recommendations",
            LATEST_JOBS: "phw-latest-jobs",
            RECOM_BASED_JOB_CART: "phw-recommendations-based-on-job-cart",
            TARGETED_JOBS: "phw-targeted-jobs",
            SAVED_JOBS: "phw-saved-jobs",
            SIMILAR_JOBS: "phw-similar-jobs",
            MY_APPLICATION_JOBS: "phw-my-application-jobs",
            PEOPLE_ALSO_APPLIED: "phw-people-also-applied",
            EVENT_ASSOCIATED_JOBS: "phw-event-associated-jobs"
        },
        smartHighlights: {
            skills: {
                name: "skills",
                class: "user"
            },
            additionalSkills: {
                name: "additionalSkills",
                class: "user"
            },
            additional_skills: {
                name: "additionalSkills",
                class: "user"
            },
            education: {
                name: "education",
                class: "education"
            },
            requirement_sentence: {
                name: "requirement_sentence",
                class: "education"
            },
            experience: {
                name: "experience",
                class: "education"
            }
        }
    };

    function wt(a) {
        async function t() {
            const n = d.getCachedDDO(b.ddoKeys.ddoKeyNearByJobs);
            if (n) {
                const i = n;
                return new Promise($ => {
                    var c;
                    $((c = i == null ? void 0 : i.data) == null ? void 0 : c.nearbyjobs)
                })
            }
            return bt().getLocation().then(i => {
                if (i && i.coords) {
                    const $ = {};
                    if ($.latitude = i.coords.latitude, $.longitude = i.coords.longitude, $.radius = a.radius || i.coords.accuracy, $.isEagerLoad = !0, $.latitude && $.longitude) return d.getDDO(b.ddoKeys.ddoKeyNearByJobs, $).then(c => {
                        if (c && c.data && c.data.nearbyjobs) return c.data.nearbyjobs
                    })
                }
            })
        }
        return {
            getJobResults: t
        }
    }

    function yt() {
        function a() {
            const t = {
                isEagerLoad: !0
            };
            return d.getDDO(b.ddoKeys.ddoKeyLatestJobs, t).then(n => n && n.data && n.data.jobs)
        }
        return {
            getJobResults: a
        }
    }

    function St(a, t) {
        const {
            getCookie: n
        } = We();

        function i() {
            const $ = n("PHPPPE_GCC");
            if ($ === "d" || $ === "s") return new Promise((h, m) => {
                h({})
            });
            const c = {
                    keywords: [],
                    categories: [],
                    jobsViewed: [],
                    jobsApplied: null,
                    locations: [],
                    types: [],
                    userProfile: null,
                    landingPages: null,
                    department: ""
                },
                f = d.getRecommendedTrackCtx();
            for (const h in f) c[h] = f[h];
            return a.recomJobsBrowsingHistory && a.recomJobsBrowsingHistory.maxJobs && (c.recoSize = a.recomJobsBrowsingHistory.maxJobs), d.getDDO(b.ddoKeys.ddoKeyRecomJobsBrowsingHistory, c).then(h => {
                if (h && h.data && h.data.recommendedJobs) return h.data.recommendedJobs
            })
        }
        return {
            getJobResults: i
        }
    }

    function mt(a, t) {
        const n = {
                fieldName: "jobSeqNo",
                fieldValue: [],
                outputFields: ["jobSeqNo", "title", "category", "location", "active", "expiryDate", "postedDate", "positionLevel", "customField1", "industry", "department", "jobVisibility", "industry", "externalApply", "visibilityType", "fitLevel", "matchedSkills", "jobId", "reqId", "cmsJobId", "applyUrl", "multi_location", "type", "jobType", "brand"]
            },
            i = "jobsViewed";

        function $(f) {
            const h = d.getSpecificTrackCtx(i),
                m = n;
            if (h && h.length) {
                for (let w = 0; w < h.length; w++) m.fieldValue.push(h[w].jobSeqNo);
                if (f && f.length)
                    for (let w = 0; w < f.length; w++) m.outputFields.indexOf(f[w].name) === -1 && (m.outputFields.push(f[w].name), f[w].name.startsWith("pjf") && f[w].settings && f[w].settings.jobTagValue && m.outputFields.push(f[w].settings.jobTagValue))
            } else return [];
            return m.isEagerLoad = !0, d.getDDO(b.ddoKeys.ddoKeyRecentlyViewedJobs, m).then(w => c(w, h))
        }
        const c = (f, h) => {
            if (f && f.data && f.data.jobs) {
                const m = f.data.jobs;
                if (m && Object.keys(m).length)
                    for (const w in h) {
                        const {
                            jobSeqNo: T
                        } = h[w];
                        h[w].active = m[T][0].active, h[w].active === !0 && (h[w] = m[T][0])
                    }
                if (!a.showExpiredJobs) {
                    const w = [];
                    for (let T = 0; T < h.length; T++) h[T].active && w.push(h[T]);
                    h = w
                }
                return h
            }
        };
        return {
            getJobResults: $
        }
    }

    function kt(a, t, n) {
        const i = "ph:profileRecomData";

        function $() {
            return d.getDDO(b.ddoKeys.ddoValidateJwtToken, {
                isEagerLoad: !0
            }).then(f => {
                const h = f.data || {};
                if (h.isValidToken || h.isSocialLogin) return c();
                const m = {};
                return m.jobs = [], d.publishEvent(i, m), d.raiseCustomEvent(i, m), n && (setTimeout(() => {
                    d.publishEvent(i, m), d.raiseCustomEvent(i, m)
                }, 3e3), setTimeout(() => {
                    d.publishEvent(i, m), d.raiseCustomEvent(i, m)
                }, 5e3)), []
            }, f => {})
        }

        function c() {
            return d.getDDO(b.ddoKeys.ddoKeyProfileRecommendations, {
                isEagerLoad: !0
            }).then(f => {
                if (f && f.eid, f = f && f.data || {}, f) {
                    const h = f && f.results || [],
                        m = {};
                    return m.jobs = h || [], m.categories = f.linkedInCategoryWidget || [], d.publishEvent(i, m), d.raiseCustomEvent(i, m), n && (setTimeout(() => {
                        d.publishEvent(i, m), d.raiseCustomEvent(i, m)
                    }, 3e3), setTimeout(() => {
                        d.publishEvent(i, m), d.raiseCustomEvent(i, m)
                    }, 5e3)), !h || !h.length ? {} : f.results
                }
                return {}
            }, f => {
                const h = {};
                h.jobs = [], d.publishEvent(i, h), d.raiseCustomEvent(i, h)
            })
        }
        return {
            getJobResults: $
        }
    }

    function Et() {
        function a() {
            const t = {
                isEagerLoad: !0
            };
            return d.getDDO(b.ddoKeys.ddoKeyJobsYouMightNotThoughtOf, t).then(n => {
                var i;
                return (i = n == null ? void 0 : n.data) == null ? void 0 : i.jobs
            })
        }
        return {
            getJobResults: a
        }
    }

    function Dt() {
        function a() {
            const t = {
                isEagerLoad: !0
            };
            return d.getDDO(b.ddoKeys.ddoKeyLeastAppliedJobs, t).then(n => n == null ? void 0 : n.jobs)
        }
        return {
            getJobResults: a
        }
    }

    function jt() {
        function a() {
            const t = b.ddoKeys.jobDetailDDOKey,
                n = d.getCachedDDO(t),
                i = n && n.data && n.data.job;
            if (i && i.jobSeqNo) {
                const {
                    jobSeqNo: $
                } = i, c = {
                    jobSeqNo: $
                };
                return d.getDDO(b.ddoKeys.ddokeyPeopleAlsoViewed, c).then(f => f.data.results)
            }
            return new Promise(($, c) => {
                c(new Error("no jobSeqNo found"))
            })
        }
        return {
            getJobResults: a
        }
    }

    function Tt() {
        function a() {
            const t = {
                isEagerLoad: !0
            };
            return d.getDDO(b.ddoKeys.ddoKeyRecentlyAddedJobs, t).then(n => {
                var i;
                return (i = n == null ? void 0 : n.data) == null ? void 0 : i.recommendedJobs
            })
        }
        return {
            getJobResults: a
        }
    }

    function Pt() {
        function a() {
            if (t()) {
                const i = {
                    isEagerLoad: !0
                };
                return d.getDDO(b.ddoKeys.ddoKeyRecomJobsUserApplies, i).then($ => {
                    var c;
                    return (c = $ == null ? void 0 : $.data) == null ? void 0 : c.results
                })
            }
            return []
        }

        function t() {
            return d.getDDO(b.ddoKeys.ddoValidateJwtToken, {
                isEagerLoad: !0
            }).then(n => {
                const i = n.data || {};
                return i.isValidToken || i.isSocialLogin
            })
        }
        return {
            getJobResults: a
        }
    }

    function _t() {
        function a(t) {
            var i, $, c, f;
            const n = {};
            if (n.outputFields = [], t && t.length)
                for (let h = 0; h < t.length; h++) n.outputFields.push(t[h].name), (($ = (i = t[h]) == null ? void 0 : i.name) == null ? void 0 : $.startsWith("pjf")) && ((f = (c = t[h]) == null ? void 0 : c.settings) == null ? void 0 : f.jobTagValue) && n.outputFields.push(t[h].settings.jobTagValue);
            return d.getDDO(b.ddoKeys.ddoKeySavedJobs, n).then(h => typeof h.result == "object" && Object.keys(h.result).length === 0 ? [] : h.result)
        }
        return {
            getJobResults: a
        }
    }

    function Qe(a, t) {
        const n = e.ref(""),
            i = e.ref(),
            $ = e.ref(),
            c = a.urlKey || "search-results",
            f = e.ref({}),
            h = e.ref(!1),
            m = "search-results",
            w = "category";

        function T() {
            return h.value
        }
        async function o() {
            const y = {},
                j = d.getCachedDDO(b.ddoKeys.blogDetailDDOKey);
            return j && j.data && j.data.rk && (n.value = j.data.rk), j && j.data && j.data.numOfJobs && (i.value = j.data.numOfJobs), y.jobs = !0, y.size = i.value || a.maxDisplayCount, y.all_fields = [], y.selected_fields = {}, (n.value || a.rk) && (y.lpKey = [n.value || a.rk]), a.sort && (y.sortBy = a.sort), a.selectedOrder && a.selectedOrder.length && delete y.size, d.getDDO(b.ddoKeys.ddoTargtedJobs, y).then(S => {
                var J, B, M;
                return h.value = (S == null ? void 0 : S.totalHits) > ((B = (J = S == null ? void 0 : S.data) == null ? void 0 : J.jobs) == null ? void 0 : B.length), $.value = S == null ? void 0 : S.totalHits, n.value = n.value || (S == null ? void 0 : S.lpKey), _(a.selectedOrder, (M = S == null ? void 0 : S.data) == null ? void 0 : M.jobs)
            })
        }

        function _(y, j) {
            try {
                if (y = y && y.split(","), y && y.length > 0) {
                    const S = [];
                    return y.forEach(J => {
                        const B = j.find(M => M.jobSeqNo === J);
                        B && S.push(B)
                    }), S
                }
            } catch {}
            return j
        }

        function k() {
            var y, j;
            if (a.url && a.url.trim().length) return a.url.indexOf("//:") !== -1 ? a.url : `${d.phAppStore.baseUrl}/${a.url}`;
            if (c === m) {
                let S = "";
                const J = (j = (y = d.phAppStore.eagerLoadParams) == null ? void 0 : y.lpKey) == null ? void 0 : j[0];
                return (n.value || a.rk || J) && (S = `rk=${n.value||a.rk||J}`), a.sort && (S = S.length ? `${S}&` : S, S += `sortBy=${encodeURIComponent(a.sort)}`), d.getUrl(m, {}, S)
            }
            if (c === w) return d.getUrl(w, {
                category: E(w)
            }, "")
        }

        function E(y) {
            if (y) {
                const j = f[y];
                if (j && j[0]) return j[0]
            }
        }
        return {
            getJobResults: o,
            ctaUrl: k,
            rkValue: n,
            jobCount: i,
            totalCount: $,
            showMoreBtn: h,
            getShowMoreButtonEnabled: T
        }
    }
    const et = "phw-tref",
        Bt = "phw-tk",
        Jt = "phw-tag",
        tt = "phw:job:save-toast-trigger";

    function dt(a, t, n) {
        const i = "phw-click-ctx",
            $ = "ph:ex:jobCartUpdatedCount",
            c = "job_unfavorited",
            f = "job_added_to_jobcart",
            h = "jobCartUpdated",
            m = e.ref(!1);
        m.value = d.getSiteSettings("saveJobToastEnable") || !1;

        function w(E, y, j, S, J, B) {
            const M = T(J);
            B = B || d.getUrl(y, j, M);
            const P = E;
            return P && P.setAttribute && (P.setAttribute(i, y), P.setAttribute("href", B)), P && P.getAttribute && P.getAttribute(Bt) && (P.setAttribute(et, new Date().getTime() + ((1 + Math.random()) * 65536 || 0).toString(16).substring(0)), P.setAttribute(Jt, S), d.storePageTrackEventData(P.getAttribute(et), j)), B
        }

        function T(E) {
            let y = "";
            if (E) try {
                let j = "";
                const S = "&";
                E = E.trim();
                const J = S + E,
                    B = /&[a-zA-Z0-9\s]+\=/g,
                    M = J.match(B);
                if (M) {
                    const P = J.split(B);
                    for (let O = 0; O < M.length; O++) {
                        const F = M[O];
                        F && P[O + 1] && (j += F + encodeURIComponent(P[O + 1]))
                    }
                    j = j.replace("&", "")
                }
                y = j
            } catch {}
            return y
        }

        function o(E) {
            if (E) {
                const y = document.createElement("span");
                y.setAttribute("class", "phw-visually-hidden"), y.setAttribute("aria-live", "assertive"), y.setAttribute("aria-atomic", "true"), document.body.appendChild(y), setTimeout(() => {
                    y.innerText = E, setTimeout(() => {
                        y.remove()
                    }, 300)
                }, 100)
            }
        }

        function _(E, y) {
            E.isJobSaved = !0;
            const j = {
                jobSeqNo: E.jobSeqNo
            };
            d.getDDO(b.ddoKeys.ddoKeyAddToCart, j).then(S => {
                if (E.inProgress = !1, S.status === 602) {
                    const J = {
                        jobSeqNo: E.jobSeqNo,
                        category: E.category
                    };
                    E.isJobSaved = !0, E.saveJobInterState = !0, d.raiseCustomEvent($, ""), d.publishEvent(h, {
                        jobSeqNo: E.jobSeqNo,
                        widgetType: a.widgetType || y
                    }), d.trackWidgetClick(t.value, f, J), d.publishEvent(tt, {
                        type: "success",
                        action: "save",
                        showCTA: !0
                    })
                } else E.isJobSaved = !1, E.saveJobInterState = !1
            }).catch(() => {
                E.isJobSaved = !1
            })
        }

        function k(E, y, j, S, J) {
            E.isJobSaved = !1, y || (y = {
                jobSeqNo: E.jobSeqNo
            }), d.getDDO(b.ddoKeys.ddoKeyDeleteFromCart, y).then(B => {
                var M, P;
                if (E.inProgress = !1, B.status === 605) {
                    const O = {
                        jobSeqNo: E.jobSeqNo,
                        category: E.category
                    };
                    E.isJobSaved = !1, E.saveJobInterState = !1, d.raiseCustomEvent($, ""), d.publishEvent(h, {
                        delete: !0,
                        jobSeqNo: E.jobSeqNo,
                        widgetType: a.widgetType || J,
                        hideShowMore: j === !1,
                        index: S || 0
                    }), !m.value && o((P = (M = n == null ? void 0 : n.value) == null ? void 0 : M.jobWidget) == null ? void 0 : P.removedTextForSceenReader), d.trackWidgetClick(t.value, c, O), d.publishEvent(tt, {
                        type: "success",
                        action: "unsave",
                        showCTA: !1,
                        index: S
                    })
                } else E.isJobSaved = !0, E.saveJobInterState = !0
            }).catch(() => {
                E.isJobSaved = !0
            })
        }
        return {
            getJobUrl: w,
            deleteJobFromCart: k,
            addToJobCart: _
        }
    }

    function Nt(a) {
        const t = e.ref();

        function n() {
            const $ = {},
                c = b.ddoKeys.jobDetailDDOKey,
                f = d.getCachedDDO(c),
                h = f && f.data && f.data.job || {};
            if (h && h.jobSeqNo) return t.value = h.jobSeqNo, $.jobSeqNo = t.value, i($)
        }

        function i($) {
            return d.getDDO(b.ddoKeys.ddoKeySimilarJobs, $).then(c => {
                if (c && c.data && c.data.similarJobs) return c.data.similarJobs || []
            }, c => {})
        }
        return {
            getJobResults: n
        }
    }

    function At() {
        const a = "appliedJobs";

        function t(n) {
            const i = {};
            if (i.outputFields = [], n && n.length)
                for (let $ = 0; $ < n.length; $++) i.outputFields.indexOf(n[$].name) === -1 && i.outputFields.push(n[$].name);
            return i.outputFields.indexOf("title") === -1 && i.outputFields.push("title"), d.getDDO(b.ddoKeys.ddoKeyMyApplications, i).then($ => (d.publishEvent("MY_APPLICATION_JOB_RESULTS", $.data && $.data[a] || []), $ && $.status === "success" && $.data ? $.data[a] || [] : []))
        }
        return {
            getJobResults: t
        }
    }

    function Mt() {
        const a = "fetchApplicationsWithStatus",
            t = "applicationNextStatus",
            n = "appliedJobs",
            i = "jobwidgetsettings",
            $ = e.ref([]),
            c = e.ref([]),
            f = e.ref([]),
            h = e.ref(!1),
            m = e.ref([]);

        function w() {
            h.value = !1
        }

        function T() {
            h.value = !0
        }

        function o(k) {
            return new Promise((E, y) => {
                try {
                    const j = {};
                    k && k.data.appliedJobs ? (m.value = k.data.appliedJobs.map(S => S.hiringStatusRefId), j.hiringStatusRefId = [...m.value], j.ddoKey = t, d.getDDO(t, j).then(S => {
                        $.value = S, w(), E()
                    }).catch(S => {
                        console.error("Error fetching hiring status:", S), y(S)
                    })) : E()
                } catch (j) {
                    w(), y(j)
                }
            })
        }
        async function _() {
            return new Promise((k, E) => {
                try {
                    T(), d.getDDO(i, {}).then(y => {
                        var S, J, B, M;
                        const j = {};
                        j.outputFields = [], y && y.data && (f.value = ((J = (S = y.data.widgets) == null ? void 0 : S["phw-my-application-jobs"]) == null ? void 0 : J.fields) || ((M = (B = y.data.widgets) == null ? void 0 : B["ph-my-applications-v1"]) == null ? void 0 : M.fields) || y.data.fields || []);
                        for (let P = 0; P < f.value.length; P++) j.outputFields.includes(f.value[P].name) || j.outputFields.push(f.value[P].name);
                        d.getDDO(a, j).then(async P => {
                            P && P.status === "success" && P.data ? (c.value = P.data[n] || [], await o(P)) : c.value = [], w(), k()
                        }).catch(P => {
                            console.error("Error fetching applications:", P), w(), E(P)
                        })
                    })
                } catch (y) {
                    E(y)
                }
            })
        }
        return {
            getMyApplications: _,
            jobResults: c,
            showLoader: h,
            jobFields: f,
            jobHiringStatus: $
        }
    }

    function Ot() {
        function a(t) {
            const n = {};
            if (n.outputFields = [], t && t.length)
                for (let i = 0; i < t.length; i++) n.outputFields.push(t[i].name), t[i].name.startsWith("pjf") && t[i].settings && t[i].settings.jobTagValue && n.outputFields.push(t[i].settings.jobTagValue);
            return n.isEagerLoad = !0, d.getDDO(b.ddoKeys.ddoKeyRecomJobsInterestedCategory, n).then(i => {
                var $, c, f, h;
                return (($ = i == null ? void 0 : i.data) == null ? void 0 : $.results[0]) && ((c = i == null ? void 0 : i.data) == null ? void 0 : c.results[0].response) && ((f = i == null ? void 0 : i.data) == null ? void 0 : f.results[0].response.length) ? (h = i == null ? void 0 : i.data) == null ? void 0 : h.results[0].response : []
            })
        }
        return {
            getJobResults: a
        }
    }

    function vt() {
        function a(t) {
            const n = {};
            if (n.outputFields = [], t && t.length)
                for (let i = 0; i < t.length; i++) n.outputFields.push(t[i].name), t[i].name.startsWith("pjf") && t[i].settings && t[i].settings.jobTagValue && n.outputFields.push(t[i].settings.jobTagValue);
            return n.isEagerLoad = !0, d.getDDO(b.ddoKeys.ddoKeyCompleteYourApplication, n)
        }
        return {
            getJobResults: a
        }
    }

    function Lt() {
        function a(t) {
            const n = {};
            if (n.outputFields = [], t && t.length)
                for (let i = 0; i < t.length; i++) n.outputFields.push(t[i].name), t[i].name.startsWith("pjf") && t[i].settings && t[i].settings.jobTagValue && n.outputFields.push(t[i].settings.jobTagValue);
            return n.isEagerLoad = !0, d.getDDO(b.ddoKeys.ddoKeyRecomBasedJobCart, n).then(i => i == null ? void 0 : i.recommendations)
        }
        return {
            getJobResults: a
        }
    }

    function Ct() {
        function a(t) {
            const n = {};
            if (n.outputFields = [], t && t.length)
                for (let i = 0; i < t.length; i++) n.outputFields.push(t[i].name), t[i].name.startsWith("pjf") && t[i].settings && t[i].settings.jobTagValue && n.outputFields.push(t[i].settings.jobTagValue);
            return n.isEagerLoad = !0, d.getDDO(b.ddoKeys.ddoKeyPeopleAlsoApplied, n).then(i => {
                var $;
                return ($ = i == null ? void 0 : i.data) == null ? void 0 : $.results
            })
        }
        return {
            getJobResults: a
        }
    }

    function xt() {
        function a(n) {
            return d.getDDO(b.ddoKeys.ddoKeyEventAssociatedJobs, n).then(i => i && i.data ? i.data || [] : null)
        }

        function t(n) {
            const i = {},
                $ = b.ddoKeys.ddoKeyEventDetail,
                c = d.getCachedDDO($),
                f = c && c.data && c.data.eventScheduleId;
            return f ? (i.eventScheduleId = f, i.from = 0, i.size = n, a(i)) : null
        }
        return {
            getJobResults: t
        }
    }
    const Ee = e.ref(!1);

    function It(a, t) {
        const n = "ext_trk",
            i = "jobCartUpdated",
            $ = "smart_tags_loaded",
            c = "fit_level_loaded",
            f = "navItems",
            h = "ph:JobStatusList",
            m = "phw:save_job_toast_load",
            w = "applicationWithDraw",
            T = "getUserProfileData",
            o = e.ref([]),
            _ = e.ref([]),
            k = e.ref([]),
            E = e.ref({}),
            y = e.ref({}),
            j = e.ref(!1),
            S = e.ref(),
            J = e.ref(),
            B = e.ref({}),
            M = e.ref([]),
            P = e.ref({}),
            O = e.ref({}),
            F = e.ref({}),
            ie = e.ref(!1),
            Z = e.ref(!1),
            X = e.ref(!1),
            oe = e.ref({}),
            se = e.ref({}),
            Q = e.ref(!1);
        j.value = !1, e.ref();
        const V = e.ref(),
            I = e.ref(!0),
            R = e.ref(!1),
            x = e.ref(5),
            s = e.ref(!1),
            L = e.ref(!1);
        let K = "";
        const G = e.ref([]),
            re = e.ref({}),
            ee = e.ref(!1),
            q = e.ref(!1),
            le = e.ref(a.showErrorMsg),
            te = We().get(n),
            fe = d.getSiteSettings("isHvhishvhjobApply"),
            ce = Qe(a),
            z = e.ref(!1),
            de = e.ref(!0);

        function ae() {
            return d.getDDO(b.ddoKeys.ddoKeySiteGlobalLabels, {
                avoidWidgetHideOnFail: !0
            }).then(r => {
                r && r.data && (re.value = r.data)
            }).catch(() => {})
        }
        const $e = async () => {
            a.jobResults && (s.value = !0), I.value = !a.hideActions, ae(), d.subscribeEvent(T, r => {
                a.widgetType === b.widgetTypes.PROFILE_RECOM_JOBS && ge().then(() => {
                    a.maxDisplayCount <= o.value.length ? (V.value = a.maxDisplayCount, L.value = !0, R.value = !0, I.value = !0) : (V.value = o.value.length, L.value = !1, R.value = !1, I.value = !1)
                })
            }), ne(), await H().then(async () => {
                await ge(!0)
            })
        };

        function ne() {
            d.subscribeEvent(i, r => {
                if (a.widgetType === b.widgetTypes.SAVED_JOBS) ge().then(() => {
                    var l;
                    r.delete && r.hideShowMore && (R.value = !1, V.value = o.value.length, o.value.length > x.value ? L.value = !0 : L.value = !1), ((l = o.value) == null ? void 0 : l.length) > x.value && (I.value = !0), r.delete && e.nextTick(() => {
                        var p;
                        if (r.index !== 0) {
                            const g = t.value.querySelector(`[data-access-list-item="${r.index-1}"]`);
                            g && g.focus()
                        } else {
                            const g = t.value.querySelector(`[data-access-list-item="${r.index}"]`);
                            g && g.focus()
                        }
                        if (!((p = o.value) != null && p.length)) {
                            const g = t.value.querySelector(".phw-s-find-jobs");
                            g && g.focus();
                            const u = document.querySelector(".phw-s-dashboard-heading-txt");
                            u && u.setAttribute("tabindex", "-1"), setTimeout(() => {
                                u && u.focus()
                            }, 100), setTimeout(() => {
                                u && u.removeAttribute("tabindex")
                            }, 300)
                        }
                    })
                });
                else if (a.widgetType !== r.widgetType && (o == null ? void 0 : o.value) && o.value.length) {
                    for (let l = 0; l < o.value.length; l++)
                        if (o.value[l].jobSeqNo === r.jobSeqNo) {
                            (r.delete && o.value[l].isJobSaved || !r.delete && !o.value[l].isJobSaved) && (o.value[l].isJobSaved = !o.value[l].isJobSaved);
                            break
                        }
                }
            })
        }
        e.watch(() => a.jobResults, () => {
            ge()
        }), e.watch(o, (r, l) => {
            (o == null ? void 0 : o.value) && (o == null ? void 0 : o.value.length) ? (o.value.length > x.value && !a.hideActions && (R.value = !0, L.value = !0, I.value = !0), d.addJobContext(a.widgetType, o.value), d.isCrawlerUserAgent() || H().then(() => {
                Se()
            }), X.value ? (Je(), Te(), Ne()) : H().then(() => {
                X.value = !0, Je(), Te(), Ne()
            }), Le(a.clickTojd, a.trackEventName, a.widgetType, void 0), (a.jobsDisplayMode === "all" || (o == null ? void 0 : o.value.length) <= x.value) && (V.value = o.value.length, I.value = !1), I.value && (R.value = !0, L.value = !0, V.value = x.value, a.jobCount && parseInt(a.jobCount, 10) && (V.value = parseInt(a.jobCount, 10))), je(), be()) : he()
        });

        function U() {
            ee.value = !1
        }

        function ue() {
            ee.value = !0
        }

        function he(r) {
            U(), a.isErrorMsgReqd ? le.value = !0 : pe()
        }

        function pe() {
            t.value && t.value instanceof HTMLElement && t.value.style && (t.value.style.display = "none")
        }

        function be() {
            t.value && t.value instanceof HTMLElement && t.value.style && (t.value.style.display = "block")
        }

        function ge(r = !1) {
            return new Promise((l, p) => {
                a.jobResults ? (o.value = a.jobResults, s.value = !0, a.maxDisplayCount ? x.value = a.maxDisplayCount : x.value = o.length, U(), je(), l({})) : (ue(), we(a.widgetType, r).then(g => {
                    o.value = g, a.maxDisplayCount ? x.value = a.maxDisplayCount : x.value = o.value.length, a.widgetType === b.widgetTypes.TARGETED_JOBS && ce.getShowMoreButtonEnabled() && (R.value = !0), U(), je(), !(o != null && o.value) || !o.value.length ? he() : le.value = !1, l({})
                }).catch(g => {
                    he(), U()
                }))
            })
        }
        async function we(r, l = !1) {
            switch (r) {
                case b.widgetTypes.NEARBY_JOBS:
                    return await wt(a).getJobResults();
                case b.widgetTypes.LATEST_JOBS:
                    return await yt().getJobResults();
                case b.widgetTypes.RECOM_JOBS_BROWSING_HISTORY:
                    return await St(a).getJobResults();
                case b.widgetTypes.RECENTLY_VIEWED:
                    return await mt(a).getJobResults(_.value);
                case b.widgetTypes.PROFILE_RECOM_JOBS:
                    return await kt(a, t, l).getJobResults();
                case b.widgetTypes.JOBS_YOU_MIGHT_NOT_THOUGH_OF:
                    return await Et().getJobResults();
                case b.widgetTypes.LEAST_APPLIED_JOBS:
                    return await Dt().getJobResults();
                case b.widgetTypes.PEOPLE_ALSO_VIEWED:
                    return await jt().getJobResults();
                case b.widgetTypes.RECENTLY_ADDED_JOBS:
                    return await Tt().getJobResults();
                case b.widgetTypes.RECOM_BASED_APPLIES:
                    return await Pt().getJobResults();
                case b.widgetTypes.TARGETED_JOBS:
                    return await ce.getJobResults();
                case b.widgetTypes.SAVED_JOBS:
                    return await _t().getJobResults(_.value);
                case b.widgetTypes.SIMILAR_JOBS:
                    return await Nt().getJobResults();
                case b.widgetTypes.MY_APPLICATION_JOBS:
                    return await At().getJobResults(_.value);
                case b.widgetTypes.JOBS_IN_INTERESTED_CATEGORY:
                    return await Ot().getJobResults(_.value);
                case b.widgetTypes.COMPLETE_YOUR_APPLICATIONS:
                    return await vt().getJobResults(_.value);
                case b.widgetTypes.RECOM_BASED_JOB_CART:
                    return await Lt().getJobResults(_.value);
                case b.widgetTypes.PEOPLE_ALSO_APPLIED:
                    return await Ct().getJobResults(_.value);
                case b.widgetTypes.EVENT_ASSOCIATED_JOBS:
                    return await xt().getJobResults(a.eventAssociatedJobsDisplayCount)
            }
        }

        function Se() {
            var p;
            const r = {
                    jobSeqNo: [],
                    requiredTags: [],
                    size: o == null ? void 0 : o.value.length,
                    avoidWidgetHideOnFail: !0
                },
                l = {
                    jobIdentifierList: [],
                    outputFields: [],
                    size: o == null ? void 0 : o.value.length,
                    avoidWidgetHideOnFail: !0
                };
            o == null || o.value.forEach(g => {
                g.jobSeqNo && r.jobSeqNo.push(g.jobSeqNo), g.jobSeqNo && l.jobIdentifierList.push(g.jobSeqNo)
            }), (p = S == null ? void 0 : S.value) == null || p.then(g => {
                g && !g.enabled || (r.tagLimit = B.value.layout && B.value.layout.maxDisplayCount || 1, ze(r))
            }), J.value.then(g => {
                g && !g.enabled || W(l)
            })
        }

        function W(r) {
            O.value && O.value.fits && O.value.fits.length && F.value.allowedWidgets && F.value.allowedWidgets.indexOf(a.widgetType) !== -1 ? (O.value && O.value.requiredFields && O.value.requiredFields.length && O.value.requiredFields.forEach(l => {
                r.outputFields.push(l)
            }), d.getDDO(b.ddoKeys.ddoKeyFetchFitScore, r).then(l => {
                if (l.data && l.data.jobFitScores) {
                    const p = l.data.jobFitScores,
                        g = [],
                        u = {};
                    let A = 0;
                    for (const D in p) p[D] && p[D].fitLevel && g.indexOf(p[D].fitLevel) === -1 && g.push(p[D].fitLevel);
                    o == null || o.value.forEach(D => {
                        if (D.fitEnabled = !0, D.fitLevelAvailable = !1, D.fitsForOtherJobs = g, p[D.jobSeqNo] && p[D.jobSeqNo].data && (D.fitLevel = p[D.jobSeqNo].data.fitLevel, p[D.jobSeqNo].data.skillGap && (D.matchingSkills = p[D.jobSeqNo].data.skillGap), D.fitLevel)) {
                            D.fitLevelAvailable = !0, D.fitForTheJob = D.fitLevel;
                            const C = g.slice(),
                                Xe = C.indexOf(D.fitLevel);
                            C.splice(Xe, 1), D.fitsForOtherJobs = C, u[D.jobSeqNo] = D.fitForTheJob, A++
                        }
                    }), d.trackWidgetClick(t.value, c, {
                        jobsFitLevel: u,
                        totalJobs: o.value.length,
                        availableFitLevelCount: A
                    }), Z.value = !0
                }
            })) : (Z.value = !0, qe())
        }

        function qe() {
            if (o != null && o.value.length) {
                const r = {},
                    l = [];
                let p = 0;
                o == null || o.value.forEach(g => {
                    g.fitLevel && l.push(g.fitLevel)
                }), l.length && (o == null || o.value.forEach(g => {
                    if (g.fitLevel) {
                        g.fitLevelAvailable = !0, g.fitForTheJob = g.fitLevel;
                        const u = l.slice(),
                            A = u.indexOf(g.fitLevel);
                        u.splice(A, 1), g.fitsForOtherJobs = u, r[g.jobSeqNo] = g.fitForTheJob, p++
                    }
                })), d.trackWidgetClick(t.value, c, {
                    jobsFitLevel: r,
                    totalJobs: o == null ? void 0 : o.value.length,
                    availableFitLevelCount: p
                })
            }
        }

        function ze(r) {
            M.value && M.value.length && (M.value.forEach(l => {
                r.requiredTags.push(l.name)
            }), ie.value = !1, d.getDDO(b.ddoKeys.ddoKeySmartJobTags, r).then(l => {
                if (l.data && l.data.jobTags) {
                    const p = l.data.jobTags,
                        g = [],
                        u = {};
                    let A = 0;
                    P.value = {};
                    for (const D in p) p[D].length && p[D].forEach(C => {
                        P.value[D] = P.value[D] || {}, P.value[D][C.tag] = C, g.indexOf(C.tag) === -1 && g.push(C.tag)
                    });
                    o == null || o.value.forEach(D => {
                        if (D.jobTagEnabled = !0, D.smartTagsAvailable = !1, D.tagsForOtherJobs = g, P.value[D.jobSeqNo]) {
                            D.smartTagsAvailable = !0, D.tagsForTheJob = Object.keys(P.value[D.jobSeqNo]);
                            const C = g.slice();
                            D.tagsForTheJob.forEach(Xe => {
                                const un = C.indexOf(Xe);
                                C.splice(un, 1)
                            }), D.tagsForOtherJobs = C, u[D.jobSeqNo] = D.tagsForTheJob, A++
                        }
                    }), ie.value = !0, d.trackWidgetClick(t.value, $, {
                        smartJobTags: u,
                        totalJobs: o.value.length,
                        availableJobTagCount: A
                    })
                }
            }))
        }

        function De() {
            for (let r = 0; r < k.value.length; r++)
                if (k.value[r].name === "addToCart" || k.value[r].name === "removeFromCart") {
                    j.value = !0;
                    break
                }
            return j.value
        }

        function Ye(r) {
            const l = [];
            for (let g = 0; g < r.length; g++) {
                const u = r[g].jobSeqNo;
                l.push(u)
            }
            const p = {
                jobSeqNos: l
            };
            return d.getDDO(b.ddoKeys.ddoKeyGetJobStatus, p).then(g => {
                if (U(), g && g.data) {
                    const u = g.data;
                    for (let A = 0; A < r.length; A++) {
                        const D = r[A].jobSeqNo;
                        r[A].isJobSaved = u[D] || !1, r[A].saveJobInterState = u[D] || !1
                    }
                }
                return r
            })
        }

        function ve() {
            if (!d.isCrawlerUserAgent()) {
                const r = [];
                for (const p of o.value) o.value.isJobSaved = null, o.value.saveJobInterState = null, o.value.inProgress = !1, r.push(p.jobSeqNo);
                const l = {
                    jobSeqNos: r
                };
                return d.getDDO(b.ddoKeys.ddoKeyGetJobStatus, l).then(p => {
                    if (U(), p && p.data) {
                        const g = p.data;
                        d.publishEvent(h, g);
                        for (const u of o == null ? void 0 : o.value) u.isJobSaved = g[u.jobSeqNo] || !1, u.saveJobInterState = g[u.jobSeqNo] || !1
                    }
                })
            }
            return new Promise(r => {
                r({})
            })
        }

        function je() {
            j.value && (o == null ? void 0 : o.value) && ve()
        }

        function Le(r, l, p, g) {
            if (o.value = g || o.value, o.value && o.value.length) {
                for (let u = 0; u < o.value.length; u++)
                    if (o.value[u]) {
                        const A = `${d.phAppStore.baseUrl}apply?jobSeqNo=${o.value[u].jobSeqNo}`;
                        if (!o.value[u].overriddenExternalApply) {
                            const D = d.getSiteSettings("igonreExternalHvhApply");
                            if (fe && !D) {
                                const C = d.getRawUrl("forwardApply");
                                C && (o.value[u].applyUrl = A.replace("apply?", `${C}?`))
                            } else(Object.prototype.hasOwnProperty.call(o.value[u], "externalApply") && !o.value[u].externalApply || !Object.prototype.hasOwnProperty.call(o.value[u], "externalApply")) && (o.value[u].applyUrl = A)
                        }
                        o.value[u].jobUrl = o.value[u].jobUrl || dt(a, t).getJobUrl(void 0, "job", o.value[u], p), r ? (o.value[u].actionUrl = o.value[u].jobUrl, o.value[u].actionEventName = l) : (o.value[u].actionUrl = N(o.value[u].applyUrl), o.value[u].actionUrl = v(u, o.value[u].actionUrl), o.value[u].actionUrl = Ze(o.value[u].actionUrl), o.value[u].actionEventName = "apply_click"), o.value[u].eventName = l
                    }
            }
        }

        function Ze(r) {
            try {
                const l = new URL(r);
                return ["utm_source", "utm_campaign", "utm_medium", "utm_content", "utm_term"].forEach(g => {
                    const u = We().get(g);
                    u && !l.searchParams.get(g) && l.searchParams.set(g, u)
                }), l.toString()
            } catch (l) {
                return console.error("Error in appending UTM params from cookies", l), r
            }
        }

        function N(r) {
            if (!r) return;
            let l = r;
            return l = r.indexOf("http") === -1 ? d.phAppStore.baseUrl + l : l, o.value.hasOwnProperty("externalTracking") && (o.value.externalTracking === "true" || o.value.externalTracking === !0) && te && (l += l.indexOf("?") !== -1 ? "&" : "?", l += te), l
        }

        function v(r, l) {
            try {
                return o.value[r].hasOwnProperty("externalTracking") && (o.value[r].externalTracking === "true" || o.value[r].externalTracking === !0) && te && (l += l.indexOf("?") !== -1 ? "&" : "?", l += te), l
            } catch (p) {
                return console.error("Error in appending external tracking", p), l
            }
        }

        function H() {
            let r = {},
                l, p;
            return d.getDDO(b.ddoKeys.ddoKeyJobWidgets, {}).then(g => {
                const u = "ph-my-applications-v1";
                if (g && g.data)
                    if (g.data.widgets && g.data.widgets[a.widgetType] ? (r = g.data.widgets[a.widgetType], l = r.fields, p = r.actions) : (a == null ? void 0 : a.widgetType) === "phw-my-application-jobs" && g.data.widgets[u] && (r = g.data.widgets[u], l = r == null ? void 0 : r.fields, p = r == null ? void 0 : r.actions), _.value = l || g.data.fields || [], a.widgetType === "phw-apply-thank-you") k.value = [];
                    else if (a.widgetType === "phw-my-application-jobs")
                    for (const A of p || g.data.actions) k.value = A.name === "addToCart" ? [A] : [];
                else k.value = p || g.data.actions || [];
                Ke(), Fe(), De(), Pe(), d.isCrawlerUserAgent() || (J.value = me(), S.value = xe()), X.value = !0
            })
        }

        function me() {
            const r = d.getSiteSettings(f);
            if (r && r.fitScore) {
                let l = {},
                    p = {},
                    g;
                const u = {
                    feature: "fitScore",
                    fieldMap: {
                        fieldName: "jobFits",
                        finalFieldName: "jobWidgetFits"
                    },
                    avoidWidgetHideOnFail: !0
                };
                return d.getDDO(b.ddoKeys.ddoKeyFitScore, u).then(A => {
                    l = A && A.data && A.data.jobWidgetFits, l && (F.value = l.settings || {}, l.widgets && l.widgets[a.widgetType] && (p = l.widgets[a.widgetType], g = p.jobFits), O.value = g || l.jobFits || {}), Ce()
                })
            }
            return new Promise((l, p) => {
                l({
                    enabled: !1
                })
            })
        }

        function Ce() {
            try {
                const r = t.value.getAttribute("job-fits");
                O.value = r && JSON.parse(r) || O.value || {}
            } catch {}
            O.value.fits = O.value.fits || [], O.value.fits.forEach(r => {
                se.value[r.name] = r
            })
        }

        function xe() {
            const r = d.getSiteSettings(f);
            if (r && r.jobTags) {
                let l = {},
                    p = {},
                    g;
                const u = {
                    feature: "jobTags",
                    fieldMap: {
                        fieldName: "jobTags",
                        finalFieldName: "jobWidgetTags"
                    },
                    avoidWidgetHideOnFail: !0
                };
                return d.getDDO(b.ddoKeys.ddoKeyJobTags, u).then(A => {
                    l = A.data && A.data.jobWidgetTags, l && (l.widgets && l.widgets[a.widgetType] && (p = l.widgets[a.widgetType], g = p.jobTags), B.value = g || l.jobTags || {}), Ie()
                })
            }
            return new Promise((l, p) => {
                l({
                    enabled: !1
                })
            })
        }

        function Ie() {
            try {
                const r = t.value.getAttribute("job-tags");
                B.value = r && JSON.parse(r) || B.value || {}
            } catch {}
            B.value.tags = B.value.tags || [], M.value = B.value.tags, M.value.forEach(r => {
                oe.value[r.name] = r
            })
        }

        function Te() {
            if (E.value.hasOwnProperty("pjfJobImages")) {
                const r = E.value.pjfJobImages,
                    l = r.settings && r.settings.jobTagValue || "category";
                let p;
                const g = {
                    jobField: l,
                    tags: [],
                    jobWidget: a.widgetType,
                    imageType: "jobImage"
                };
                (o == null ? void 0 : o.value) && o.value.length && o.value.forEach(u => {
                    u.hasOwnProperty(l) && !g.tags.includes(`jobImage#${u[l]}`) && g.tags.push(`jobImage#${u[l]}`)
                }), d.getDDO(b.ddoKeys.jobImageBasedOnTags, g).then(u => {
                    p = u && u.data || {}, ((o == null ? void 0 : o.value) || []).forEach(A => {
                        if (p.hasOwnProperty(`jobImage#${A[l]}`)) {
                            const D = p[`jobImage#${A[l]}`];
                            A.image = D && D.length > 0 && D[0] && D[0]
                        }
                    })
                })
            }
        }

        function Pe(r) {
            r = r || _.value;
            for (let l = 0; l < r.length; l++)
                if (r[l] && r[l].settings && r[l].settings.displayType === "modal") {
                    Q.value = !0;
                    return
                }
            Q.value = !1
        }

        function Ve(r, l) {
            de.value = !0, Ee.value = !1;
            let p = "",
                g = "",
                u = "";
            r && l ? (g = r[l.name], g.showPopUp = !0, p = t.value.querySelector(`.${r.jobSeqNo}_jobModal_${l.name}`), u = "phw-a11y-modal-area") : (z.value = !0, p = "", K = r.jobId, g = z, u = "phw-a11y-modal-area-withdrawal"), e.nextTick(() => {
                const A = t.value.querySelector(".phw-modal-close"),
                    D = a.isHighVolumeHire || !1;
                d.dialogModal.openDialogPopup(t.value, u, p, A, _e.bind(this, g), D)
            })
        }
        const _e = r => {
            r.showPopUp = !1, Be()
        };

        function Re(r) {
            Ee.value || (q.value = !1, _e(r), d.dialogModal.closeDialogPopup(), Be())
        }

        function Be() {
            const r = document.querySelector(`.job-${K}`);
            r && setTimeout(() => r == null ? void 0 : r.focus(), 50)
        }

        function Ke() {
            try {
                const l = t.value.getAttribute("job-fields");
                _.value = l && JSON.parse(l) || _.value
            } catch {}
            const r = [];
            _.value.forEach(l => {
                E.value[l.name] = l, (l.name === "multi_location" || l.name === "multi_category") && r.push(l)
            }), r && r.length && r.forEach(l => {
                const p = _.value.indexOf(l);
                _.value.splice(0, 0, _.value.splice(p, 1)[0])
            })
        }

        function Fe() {
            try {
                const l = t.value.getAttribute("job-actions");
                k.value = l && JSON.parse(l) || k.value
            } catch {}
            k.value.forEach(l => {
                y.value[l.name] = l
            }), k.value.find(l => l.name === "addToCart") && d.raiseCustomEvent(m, {})
        }

        function Je() {
            E.value.hasOwnProperty("pjfSmartHighlights") && (o == null ? void 0 : o.value) && o.value.length && o.value.forEach(r => {
                if (r.hasOwnProperty("ml_job_parser") && r.ml_job_parser.hasOwnProperty("ml_job_cards")) {
                    const l = r.ml_job_parser.ml_job_cards;
                    r.smartHighlights = l
                }
            })
        }

        function Ne() {
            if (E.value.hasOwnProperty("pjfJobBadges")) {
                const r = E.value.pjfJobBadges,
                    l = r.settings && r.settings.jobTagValue || "category",
                    p = Ge(l) || l;
                let g;
                const u = {
                    jobField: p,
                    tags: [],
                    jobWidget: a.widgetType,
                    imageType: "jobBadge"
                };
                (o == null ? void 0 : o.value) && o.value.length && o.value.forEach(A => {
                    A.hasOwnProperty(p) && !u.tags.includes(`jobBadge#${A[p]}`) && u.tags.push(`jobBadge#${A[p]}`)
                }), d.getDDO(b.ddoKeys.jobImageBasedOnTags, u).then(A => {
                    g = A && A.data || {}, ((o == null ? void 0 : o.value) || []).forEach(D => {
                        if (g.hasOwnProperty(`jobBadge#${D[p]}`)) {
                            const C = g[`jobBadge#${D[p]}`];
                            D.badgeImage = C && C.length > 0 && C[0] && C[0]
                        }
                    })
                })
            }
        }

        function Ge(r) {
            switch (r) {
                case "companyLogo":
                    return "companyName";
                case "countryFlag":
                    return "country";
                case "categoryIcon":
                    return "category";
                case "default":
                    return r
            }
        }
        async function Ue(r) {
            if (Ee.value) return;
            const l = {
                applicationData: r,
                ddoKey: w
            };
            pt(!0);
            const p = await d.getDDO(b.ddoKeys.ddoKeyWithdrawalMenu, l),
                g = document.querySelector(".phw-modal-close");
            p && p.status === "success" ? (await Mt().getMyApplications(), setTimeout(() => {
                Ae(!0)
            }, 500), e.nextTick(() => {
                ke(g)
            })) : (setTimeout(() => {
                Ae(!1)
            }, 500), e.nextTick(() => {
                ke(g)
            }))
        }

        function ke(r) {
            r && setTimeout(() => {
                r == null || r.focus();
                const l = q.value ? "Application withdrawal successful. Close dialogue." : "Application withdrawal failed. Close dialogue.";
                r.setAttribute("aria-label", l), setTimeout(() => {
                    r.setAttribute("aria-label", "Close dialogue")
                }, 2e3)
            }, 500)
        }

        function Ae(r) {
            q.value = r, de.value = !1, pt(!1)
        }

        function pt(r) {
            Ee.value = r
        }
        return {
            getJobResults: ge,
            fetchJobWidgetSettings: H,
            init: $e,
            isEnableShowMore: L,
            jobResults: o,
            jobFields: _,
            jobActions: k,
            enabledFields: E,
            enabledActions: y,
            cardsToDisplay: V,
            isShowMore: R,
            showMoreCount: x,
            seemoretext: I,
            isBulkcartEnable: j,
            enabledFits: se,
            enabledTags: oe,
            jobFits: O,
            jobTags: M,
            jobTagsConfig: B,
            fitDataLoaded: Z,
            jobFitsSettConfig: F,
            tagsDataLoaded: ie,
            jobTagsData: P,
            isSearchResultWidget: s,
            showModal: Q,
            showLoader: ee,
            hideContainer: pe,
            showContainer: be,
            handleError: he,
            showErrorMsg: le,
            openPopUp: Ve,
            closePopUp: Re,
            getJobData: we,
            applyUrl: N,
            isModal: Pe,
            makeJobStatusRequest: ve,
            populateJobResults: Le,
            checkBulkcartStatus: De,
            initiateJobSubscribeEvent: ne,
            getJobStatus: Ye,
            flagShowModal: z,
            fnWithdrawApplication: Ue,
            modalCopyFlag: de,
            showButtonLoader: Ee,
            withdrawalStatusFlag: q,
            jobHiringStatus: G,
            siteGlobalLabels: re,
            fetchSiteGlobalLabels: ae
        }
    }

    function Y(a, t, n, i) {
        if (!a || !t) return "";
        if (typeof a == "object") {
            if (!n) return "";
            const $ = t[n];
            let c = a[$];
            if (c || Object.keys(a).forEach(f => {
                    if (/[-*]/g.test(f)) {
                        const h = f.replace("*", "");
                        if ($ >= h && (c = a[f]), !c) {
                            const m = f.split("-");
                            m && m.length === 2 && $ >= m[0] && $ <= m[1] && (c = a[f])
                        }
                    }
                }), !c)
                if (a.default) c = "default";
                else return "";
            return at(c, t, i)
        }
        return at(a, t, i)
    }

    function at(a, t, n) {
        const i = /\{\{\s*(.*?)\s*\}\}/g,
            $ = /\[\[\s*(.*?)\s*\]\]/g;
        return !a || typeof a != "string" || (a = a.replace(/&lt;/g, "<"), a = a.replace(/&gt;/g, ">"), a = a.replace(i, (c, f) => t.hasOwnProperty(f) ? t[f] : ""), n && (a = encodeURIComponent(a)), a = a.replace($, (c, f) => {
            if (!f) return f
        })), a
    }
    const Vt = {
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

    function nt(a, t) {
        var n = Array.prototype.slice.call(t);
        return n.push(Vt), a.apply(this, n)
    }

    function it(a, t) {
        a = a.split("-"), t = t.split("-");
        for (var n = a[0].split("."), i = t[0].split("."), $ = 0; $ < 3; $++) {
            var c = Number(n[$]),
                f = Number(i[$]);
            if (c > f) return 1;
            if (f > c) return -1;
            if (!isNaN(c) && isNaN(f)) return 1;
            if (isNaN(c) && !isNaN(f)) return -1
        }
        return a[1] && t[1] ? a[1] > t[1] ? 1 : a[1] < t[1] ? -1 : 0 : !a[1] && t[1] ? 1 : a[1] && !t[1] ? -1 : 0
    }
    var Rt = {}.constructor;

    function He(a) {
        return a != null && a.constructor === Rt
    }

    function ye(a) {
        return ye = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
            return typeof t
        } : function(t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, ye(a)
    }

    function Me(a, t) {
        if (!(a instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function ot(a, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(a, Kt(i.key), i)
        }
    }

    function Oe(a, t, n) {
        return t && ot(a.prototype, t), n && ot(a, n), Object.defineProperty(a, "prototype", {
            writable: !1
        }), a
    }

    function Kt(a) {
        var t = Ft(a, "string");
        return ye(t) == "symbol" ? t : t + ""
    }

    function Ft(a, t) {
        if (ye(a) != "object" || !a) return a;
        var n = a[Symbol.toPrimitive];
        if (n !== void 0) {
            var i = n.call(a, t || "default");
            if (ye(i) != "object") return i;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (t === "string" ? String : Number)(a)
    }
    var Gt = "1.2.0",
        Ut = "1.7.35",
        st = " ext. ",
        Wt = /^\d+$/,
        rt = function() {
            function a(t) {
                Me(this, a), Yt(t), this.metadata = t, $t.call(this, t)
            }
            return Oe(a, [{
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
                        var i = this.countryCallingCodes()[n];
                        if (i && i.length === 1 && i[0] === "001") return !0
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
                value: function(n, i) {
                    if (n && Wt.test(n) && (i = n, n = null), n && n !== "001") {
                        if (!this.hasCountry(n)) throw new Error("Unknown country: ".concat(n));
                        this.numberingPlan = new lt(this.getCountryMetadata(n), this)
                    } else if (i) {
                        if (!this.hasCallingCode(i)) throw new Error("Unknown calling code: ".concat(i));
                        this.numberingPlan = new lt(this.getNumberingPlanMetadata(i), this)
                    } else this.numberingPlan = void 0;
                    return this
                }
            }, {
                key: "getCountryCodesForCallingCode",
                value: function(n) {
                    var i = this.countryCallingCodes()[n];
                    if (i) return i.length === 1 && i[0].length === 3 ? void 0 : i
                }
            }, {
                key: "getCountryCodeForCallingCode",
                value: function(n) {
                    var i = this.getCountryCodesForCallingCode(n);
                    if (i) return i[0]
                }
            }, {
                key: "getNumberingPlanMetadata",
                value: function(n) {
                    var i = this.getCountryCodeForCallingCode(n);
                    if (i) return this.getCountryMetadata(i);
                    if (this.nonGeographic()) {
                        var $ = this.nonGeographic()[n];
                        if ($) return $
                    } else {
                        var c = this.countryCallingCodes()[n];
                        if (c && c.length === 1 && c[0] === "001") return this.metadata.countries["001"]
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
        lt = function() {
            function a(t, n) {
                Me(this, a), this.globalMetadataObject = n, this.metadata = t, $t.call(this, n.metadata)
            }
            return Oe(a, [{
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
                        i = this._getFormats(this.metadata) || this._getFormats(this.getDefaultCountryMetadataForRegion()) || [];
                    return i.map(function($) {
                        return new Ht($, n)
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
                    if (this.hasTypes() && ct(this.types(), n)) return new zt(ct(this.types(), n), this)
                }
            }, {
                key: "ext",
                value: function() {
                    return this.v1 || this.v2 ? st : this.metadata[13] || st
                }
            }])
        }(),
        Ht = function() {
            function a(t, n) {
                Me(this, a), this._format = t, this.metadata = n
            }
            return Oe(a, [{
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
                    return !!(this.nationalPrefixFormattingRule() && !qt.test(this.nationalPrefixFormattingRule()))
                }
            }, {
                key: "internationalFormat",
                value: function() {
                    return this._format[5] || this.format()
                }
            }])
        }(),
        qt = /^\(?\$1\)?$/,
        zt = function() {
            function a(t, n) {
                Me(this, a), this.type = t, this.metadata = n
            }
            return Oe(a, [{
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

    function ct(a, t) {
        switch (t) {
            case "FIXED_LINE":
                return a[0];
            case "MOBILE":
                return a[1];
            case "TOLL_FREE":
                return a[2];
            case "PREMIUM_RATE":
                return a[3];
            case "PERSONAL_NUMBER":
                return a[4];
            case "VOICEMAIL":
                return a[5];
            case "UAN":
                return a[6];
            case "PAGER":
                return a[7];
            case "VOIP":
                return a[8];
            case "SHARED_COST":
                return a[9]
        }
    }

    function Yt(a) {
        if (!a) throw new Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");
        if (!He(a) || !He(a.countries)) throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(He(a) ? "an object of shape: { " + Object.keys(a).join(", ") + " }" : "a " + Zt(a) + ": " + a, "."))
    }
    var Zt = function(t) {
        return ye(t)
    };

    function Xt(a, t) {
        if (t = new rt(t), t.hasCountry(a)) return t.selectNumberingPlan(a).countryCallingCode();
        throw new Error("Unknown country: ".concat(a))
    }

    function $t(a) {
        var t = a.version;
        typeof t == "number" ? (this.v1 = t === 1, this.v2 = t === 2, this.v3 = t === 3, this.v4 = t === 4) : t ? it(t, Gt) === -1 ? this.v2 = !0 : it(t, Ut) === -1 ? this.v3 = !0 : this.v4 = !0 : this.v1 = !0
    }

    function Qt(a) {
        return new rt(a).getCountries()
    }

    function ed() {
        return nt(Qt, arguments)
    }

    function gt() {
        return nt(Xt, arguments)
    }
    const td = {
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

    function ft(a) {
        const t = a.toUpperCase().split("").map(n => 127397 + n.charCodeAt(0));
        return String.fromCodePoint(...t)
    }

    function dd() {
        const a = [];
        return ed().forEach(n => {
            const i = td[n];
            if (i) try {
                const $ = gt(n);
                a.push({
                    code: n,
                    name: i,
                    callingCode: `+${$}`,
                    flag: ft(n)
                })
            } catch {
                console.warn(`Could not get calling code for ${n}: ${i}`)
            } else try {
                const $ = gt(n);
                a.push({
                    code: n,
                    name: n,
                    callingCode: `+${$}`,
                    flag: ft(n)
                })
            } catch {
                console.warn(`Could not get calling code for ${n}`)
            }
        }), a.sort((n, i) => n.code === "US" ? -1 : i.code === "US" ? 1 : n.name.localeCompare(i.name))
    }
    dd();
    const ad = ["aria-label"],
        nd = ["href", "aria-label"],
        id = ["aria-label"],
        od = ["aria-label"],
        sd = ["aria-label"],
        rd = e.defineComponent({
            __name: "JobActionsView2",
            props: {
                content: null,
                jdPage: null,
                isSearchResultWidget: null,
                widgetType: null,
                isEnableShowMore: null,
                isShowMore: null,
                seemoretext: null,
                seemore: null,
                seeLess: null,
                seemoreOnKeyUp: null,
                ctaUrl: null,
                seeNext: null,
                seeEvenMore: null,
                jobsDisplayMode: null
            },
            setup(a) {
                const t = a;
                return (n, i) => {
                    var $, c, f, h, m, w, T, o, _, k, E, y, j, S, J, B, M, P, O, F, ie, Z, X, oe, se, Q, V, I, R, x;
                    return !t.isSearchResultWidget && t.widgetType && (t.isEnableShowMore || t.isShowMore) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: 0,
                        class: e.normalizeClass(t.jdPage ? ["phw-pl-3 phw-pr-3 phw-pt-4 phw-pb-2 phw-text-l"] : ["phw-pt-8", "phw-pt-xl-6", "phw-pt-sm-4", "phw-text-c"]),
                        "data-ps": "e48864c9-div-39"
                    }, [t.isEnableShowMore && t.isShowMore && t.seemoretext && t.widgetType != "phw-targeted-jobs" && t.jobsDisplayMode == "seeMore" ? e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                        key: 0,
                        class: e.normalizeClass(t.jdPage ? "phw-btn phw-g-btn-link-style-2 phw-width-auto" : "phw-btn phw-g-btn-secondary"),
                        "data-access": "showMore",
                        "aria-label": ((c = ($ = t.content) == null ? void 0 : $.jobWidget) == null ? void 0 : c.seeMoreText.ariaLabel) + " " + (((f = t.content) == null ? void 0 : f.widgetHeading) && ((h = t.content) == null ? void 0 : h.widgetHeading[t.widgetType])),
                        "data-ph-at-id": "seemore-text",
                        "data-ps": "e48864c9-button-7",
                        onClick: i[0] || (i[0] = s => a.seemore()),
                        onKeyup: i[1] || (i[1] = s => a.seemoreOnKeyUp(s))
                    }, [e.createTextVNode(e.toDisplayString((w = (m = t.content) == null ? void 0 : m.jobWidget) == null ? void 0 : w.seeMoreText.text), 1)], 42, ad)), [
                        [e.unref(d.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), t.isShowMore && t.widgetType === "phw-targeted-jobs" ? e.withDirectives((e.openBlock(), e.createElementBlock("a", {
                        key: 1,
                        class: "phw-btn phw-g-btn-secondary",
                        href: a.ctaUrl(),
                        "aria-label": ((o = (T = t.content) == null ? void 0 : T.jobWidget) == null ? void 0 : o.seeMoreText.ariaLabel) + " " + (((_ = t.content) == null ? void 0 : _.widgetHeading) && ((k = t.content) == null ? void 0 : k.widgetHeading[t.widgetType])),
                        "data-ps": "e48864c9-a-4"
                    }, [e.createTextVNode(e.toDisplayString((y = (E = t.content) == null ? void 0 : E.jobWidget) == null ? void 0 : y.seeMoreText.text), 1)], 8, nd)), [
                        [e.unref(d.vPhwSetting)],
                        [e.unref(d.vPhwTrack), "see_more_click"]
                    ]) : e.createCommentVNode("", !0), t.isEnableShowMore && !t.isShowMore ? e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                        key: 2,
                        class: e.normalizeClass(t.jdPage ? "phw-btn phw-g-btn-link-style-2 phw-width-auto" : "phw-btn phw-g-btn-secondary"),
                        "aria-label": ((S = (j = t.content) == null ? void 0 : j.jobWidget) == null ? void 0 : S.seeLessText.ariaLabel) + " " + (((J = t.content) == null ? void 0 : J.widgetHeading) && ((B = t.content) == null ? void 0 : B.widgetHeading[t.widgetType])),
                        "data-ph-at-id": "seeless-text",
                        "data-ps": "e48864c9-button-8",
                        onClick: i[2] || (i[2] = s => a.seeLess())
                    }, [e.createTextVNode(e.toDisplayString((P = (M = t.content) == null ? void 0 : M.jobWidget) == null ? void 0 : P.seeLessText.text), 1)], 10, id)), [
                        [e.unref(d.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), t.isShowMore === !0 && t.widgetType != "phw-targeted-jobs" && t.jobsDisplayMode == "seeNext" ? e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                        key: 3,
                        class: e.normalizeClass(t.jdPage ? "phw-btn phw-g-btn-link-style-2 phw-width-auto" : "phw-btn phw-g-btn-secondary"),
                        "aria-label": ((F = (O = t.content) == null ? void 0 : O.jobWidget) == null ? void 0 : F.seeNextAriaLabel) + " " + (((ie = t.content) == null ? void 0 : ie.widgetHeading) && ((Z = t.content) == null ? void 0 : Z.widgetHeading[t.widgetType])),
                        "data-access": "seeNext",
                        "data-ph-at-id": "seenext-text",
                        "data-ps": "e48864c9-button-9",
                        onKeyup: i[3] || (i[3] = s => a.seemoreOnKeyUp(s)),
                        onClick: i[4] || (i[4] = s => a.seeNext())
                    }, [e.createTextVNode(e.toDisplayString((oe = (X = t.content) == null ? void 0 : X.jobWidget) == null ? void 0 : oe.seeNextText.text), 1)], 42, od)), [
                        [e.unref(d.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), t.isShowMore === !0 && t.widgetType != "phw-targeted-jobs" && t.jobsDisplayMode == "seeEvenMore" ? e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                        key: 4,
                        class: e.normalizeClass(t.jdPage ? "phw-btn phw-g-btn-link-style-2 phw-width-auto" : "phw-btn phw-g-btn-secondary"),
                        "aria-label": ((Q = (se = t.content) == null ? void 0 : se.jobWidget) == null ? void 0 : Q.seeEvenMoreAriaLabel) + " " + (((V = t.content) == null ? void 0 : V.widgetHeading) && ((I = t.content) == null ? void 0 : I.widgetHeading[t.widgetType])),
                        "data-access": "seeEvenMore",
                        "data-ph-at-id": "seeevenmore-link",
                        "data-ps": "e48864c9-button-10",
                        onKeyup: i[5] || (i[5] = s => a.seemoreOnKeyUp(s)),
                        onClick: i[6] || (i[6] = s => a.seeEvenMore())
                    }, [e.createTextVNode(e.toDisplayString((x = (R = t.content) == null ? void 0 : R.jobWidget) == null ? void 0 : x.seeEvenMoreText), 1)], 42, sd)), [
                        [e.unref(d.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)], 2)), [
                        [e.unref(d.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)
                }
            }
        });

    function ht(a, t, n) {
        const i = window;
        if (i.dayjs) {
            const $ = i.dayjs.locale();
            let c = d.phAppStore.locale || "en_us";
            return c = c === "en_us" ? "en" : c.replace("_", "-"), i.dayjs.locale(c), $ === i.dayjs.locale() && c.split("-").length !== 1 && (c = c.split("-")[0], i.dayjs.locale(c)), t ? i.dayjs.default ? n ? i.dayjs.utc(a).tz(n).format(t) : i.dayjs.utc(a).format(t) : n ? i.dayjs(a).tz(n).format(t) : i.dayjs(a).format(t) : n ? i.dayjs(a).tz(n) : i.dayjs(a)
        }
    }
    const ld = {
            "data-ps": "e48864c9-div-9"
        },
        cd = {
            key: 0,
            class: "phw-img-ctr",
            role: "presentation",
            "data-ph-at-id": "job-image",
            "data-ps": "e48864c9-figure-1"
        },
        $d = ["src"],
        gd = {
            "data-ps": "e48864c9-div-11"
        },
        fd = {
            key: 0,
            class: "phw-img-ctr",
            "data-ph-at-id": "job-badge-image",
            "data-ps": "e48864c9-figure-2"
        },
        hd = ["src", "alt"],
        ud = {
            "data-ps": "e48864c9-div-12"
        },
        pd = {
            key: 0,
            class: "phw-mr-1",
            "data-ph-at-id": "featured-job",
            "data-ps": "e48864c9-span-2"
        },
        bd = ["data-ph-at-name"],
        wd = {
            key: 0,
            class: "phw-icon-ctr phw-d-none",
            "data-ps": "e48864c9-span-5"
        },
        yd = {
            key: 0,
            class: "icon phw-mr-1",
            "aria-hidden": "true",
            fill: "currentcolor",
            "data-ps": "e48864c9-svg-1"
        },
        Sd = ["href"],
        md = {
            class: "phw-tt-uppercase",
            "data-ps": "e48864c9-span-6"
        },
        kd = {
            key: 0,
            class: "phw-icon-ctr phw-mr-1",
            "data-ps": "e48864c9-span-8"
        },
        Ed = {
            key: 0,
            "aria-hidden": "true",
            fill: "currentcolor",
            "data-ps": "e48864c9-svg-2"
        },
        Dd = ["href"],
        jd = {
            class: "phw-g-text-small-dark",
            "data-ps": "e48864c9-span-9"
        },
        Td = {
            "data-ps": "e48864c9-h3-1"
        },
        Pd = ["data-ph-tevent-attr-trait5", "data-ph-tevent-attr-trait14", "data-ph-tevent-attr-trait132", "data-ph-tevent-attr-trait169", "data-ph-tmeta-attr-searchParams", "data-ph-tmeta-attr-pageSize", "data-ph-at-job-seqno-text", "data-ph-at-job-title-text", "data-ph-at-job-id-text", "aria-label", "data-access-list-item"],
        _d = ["data-ph-at-id"],
        Bd = {
            key: 0,
            class: "phw-icon-ctr phw-mr-1",
            "data-ps": "e48864c9-span-10"
        },
        Jd = {
            class: "phw-i-sz-2-5 phw-i-sz-xl-2",
            "aria-hidden": "true",
            fill: "currentcolor",
            "data-ps": "e48864c9-svg-3",
            "data-icon-edit": "false"
        },
        Nd = ["href"],
        Ad = {
            key: 1,
            class: "phw-g-text-default-dark",
            role: "text",
            "data-ps": "e48864c9-div-20"
        },
        Md = ["data-ph-at-id"],
        Od = ["innerHTML"],
        vd = ["aria-expanded", "data-ph-at-job-multifield-count", "aria-controls", "data-ph-at-id", "onKeydown", "onClick"],
        Ld = {
            key: 0,
            class: "phw-icon-ctr phw-mr-1",
            "data-ps": "e48864c9-span-13"
        },
        Cd = {
            "aria-hidden": "true",
            class: "phw-i-sz-2-5 phw-i-sz-xl-2",
            fill: "currentcolor",
            "data-icon-edit": "false",
            "data-ps": "e48864c9-svg-4"
        },
        xd = ["href"],
        Id = {
            class: "phw-visually-hidden",
            "data-ps": "e48864c9-span-14"
        },
        Vd = {
            "aria-hidden": "true",
            "data-ps": "e48864c9-span-15"
        },
        Rd = {
            key: 1,
            class: "phw-icon-ctr phw-ml-1",
            "data-ps": "e48864c9-span-16"
        },
        Kd = {
            "aria-hidden": "true",
            fill: "currentcolor",
            class: "phw-i-sz-3",
            "data-ps": "e48864c9-svg-5"
        },
        Fd = ["href"],
        Gd = ["href"],
        Ud = ["id", "data-modal-content-id", "data-ph-at-id", "onClick"],
        Wd = {
            key: 0,
            class: "phw-icon-ctr phw-mr-1",
            "data-ps": "e48864c9-span-17"
        },
        Hd = {
            "aria-hidden": "true",
            class: "phw-i-sz-2-5 phw-i-sz-xl-2",
            fill: "currentcolor",
            "data-ps": "e48864c9-svg-6",
            "data-icon-edit": "false"
        },
        qd = ["href"],
        zd = {
            "aria-hidden": "true",
            class: "phw-g-text-default-dark",
            "data-ps": "e48864c9-span-18"
        },
        Yd = {
            class: "phw-visually-hidden",
            "data-ps": "e48864c9-span-19"
        },
        Zd = {
            key: 2,
            "data-ps": "e48864c9-div-23"
        },
        Xd = ["id"],
        Qd = {
            class: "phw-modal-sm",
            "data-ps": "e48864c9-div-25"
        },
        ea = {
            class: "phw-modal-header phw-flex-row-reverse",
            "data-ps": "e48864c9-div-26"
        },
        ta = ["aria-label", "onClick"],
        da = {
            class: "phw-icon-ctr",
            "data-ps": "e48864c9-span-20"
        },
        aa = {
            class: "icon",
            "aria-hidden": "true",
            fill: "currentcolor",
            "data-ps": "e48864c9-svg-7"
        },
        na = {
            href: "#phw-cns-icon-close",
            "data-ps": "e48864c9-use-7"
        },
        ia = {
            "data-ps": "e48864c9-div-27"
        },
        oa = ["role", "tabindex", "aria-label"],
        sa = ["role"],
        ra = ["role"],
        la = {
            key: 0,
            class: "phw-icon-ctr phw-mr-1",
            "data-ps": "e48864c9-span-21"
        },
        ca = {
            class: "phw-i-sz-2",
            "aria-hidden": "true",
            fill: "currentcolor",
            "data-ps": "e48864c9-svg-8",
            "data-icon-edit": "false"
        },
        $a = ["href"],
        ga = {
            "data-ps": "e48864c9-span-22"
        },
        fa = ["id", "role"],
        ha = ["role"],
        ua = {
            "data-ps": "e48864c9-span-23"
        },
        pa = {
            class: "phw-icon-ctr phw-mr-1",
            "data-ps": "e48864c9-span-24"
        },
        ba = {
            class: "phw-i-sz-2-5",
            "aria-hidden": "true",
            fill: "currentcolor",
            "data-ps": "e48864c9-svg-9"
        },
        wa = ["href"],
        ya = {
            role: "text",
            "data-ps": "e48864c9-span-25"
        },
        Sa = ["aria-label", "aria-expanded"],
        ma = {
            class: "phw-icon-ctr phw-mr-1",
            "data-ps": "e48864c9-span-27"
        },
        ka = {
            class: "phw-i-sz-2-5",
            "aria-hidden": "true",
            fill: "currentcolor",
            "data-ps": "e48864c9-svg-10"
        },
        Ea = ["href"],
        Da = ["data-ph-at-job-title-text"],
        ja = {
            key: 0,
            class: "phw-icon-ctr phw-mr-1",
            "data-ph-at-id": "fit-value-text",
            "data-ps": "e48864c9-span-29"
        },
        Ta = {
            key: 0,
            "aria-hidden": "true",
            fill: "currentcolor",
            "data-ps": "e48864c9-svg-11"
        },
        Pa = ["href"],
        _a = {
            class: "phw-g-text-small-dark",
            "data-ps": "e48864c9-span-30"
        },
        Ba = ["role"],
        Ja = ["role"],
        Na = ["aria-label", "aria-pressed"],
        Aa = {
            key: 0,
            class: "phw-mr-1 phw-icon-ctr",
            "data-ps": "e48864c9-span-31"
        },
        Ma = {
            class: "icon phw-i-sz-2-5",
            "aria-hidden": "true",
            fill: "currentcolor",
            "data-ps": "e48864c9-svg-12",
            "data-icon-edit": "false"
        },
        Oa = ["href"],
        va = {
            key: 1,
            "data-ps": "e48864c9-span-32"
        },
        La = ["aria-label"],
        Ca = {
            key: 0,
            class: "icon phw-i-sz-3",
            "aria-hidden": "true",
            fill: "currentcolor",
            "data-ps": "e48864c9-svg-13",
            "data-icon-edit": "false"
        },
        xa = ["href"],
        Ia = {
            key: 1,
            "data-ps": "e48864c9-span-33"
        },
        Va = ["data-ph-tevent-attr-trait5", "data-ph-tevent-attr-trait14", "data-ph-tevent-attr-trait132", "data-ph-tevent-attr-trait169", "href", "target", "aria-label"],
        Ra = e.defineComponent({
            __name: "JobcardView2",
            props: {
                widgetType: null,
                jdPage: null,
                content: null,
                enabledFields: null,
                enabledActions: null,
                jobFits: null,
                fitDataLoaded: null,
                jobFitsSettConfig: null,
                enabledFits: null,
                jobTagsConfig: null,
                tagsDataLoaded: null,
                jobTags: null,
                jobTagsData: null,
                getJobUrl: null,
                cardsPerRow: null,
                jobFields: null,
                jobActions: null,
                isMultiFieldEnabled: null,
                showModal: null,
                index: null,
                closeDropDown: null,
                changeDropDown: null,
                openPopUp: null,
                closePopUp: null,
                widgetConfig: null,
                getHighLightsString: null,
                deleteJobFromCart: null,
                handleSaveJob: null,
                trackClicks: null,
                eachJob: null,
                isShowMore: null,
                dotSeperator: {
                    type: Boolean
                },
                removeDotAndPipe: {
                    type: Boolean
                },
                jobFieldsInline: {
                    type: Boolean
                },
                searchParams: null,
                pageSize: null,
                siteGlobalLabels: null
            },
            setup(a) {
                const t = a,
                    {
                        deviceType: n
                    } = d.phAppStore,
                    i = {},
                    $ = e.ref();
                return (c, f) => {
                    var h, m, w, T, o, _, k, E, y, j, S, J, B, M, P, O, F, ie, Z, X, oe, se, Q, V, I, R, x;
                    return e.withDirectives((e.openBlock(), e.createElementBlock("div", ld, [t.eachJob.image && t.eachJob.image.src ? e.withDirectives((e.openBlock(), e.createElementBlock("figure", cd, [e.withDirectives(e.createElementVNode("img", {
                        class: e.normalizeClass([c.$style["jw-job-card-image"], "phw-pt-4"]),
                        src: t.eachJob.image.src.value,
                        alt: "",
                        "data-ps": "e48864c9-img-1"
                    }, null, 10, $d), [
                        [e.unref(d.vPhwSetting)]
                    ])])), [
                        [e.unref(d.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        class: e.normalizeClass(["phw-posn-relative", t.jdPage ? "phw-p-3 phw-pb-0 phw-pt-2" : t.widgetType === "phw-search-results-v1" ? "phw-p-4 phw-d-flex phw-align-items-center phw-justify-content-between phw-flex-sm-column phw-align-sm-items-start" : "phw-p-4 phw-pr-0 phw-pl-0 phw-p-sm-2 phw-pr-sm-0 phw-pl-sm-0 phw-d-flex phw-align-items-center phw-justify-content-between phw-flex-sm-column phw-align-sm-items-start"]),
                        "data-ps": "e48864c9-div-10"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", gd, [t.eachJob.badgeImage && t.eachJob.badgeImage.src ? e.withDirectives((e.openBlock(), e.createElementBlock("figure", fd, [e.withDirectives(e.createElementVNode("img", {
                        class: e.normalizeClass(["phw-ml-0 phw-mr-0", [c.$style["jw-job-card-logo"]]]),
                        src: t.eachJob.badgeImage.src.value,
                        alt: a.enabledFields.pjfJobBadges.settings.jobTagValue + " " + t.eachJob[a.enabledFields.pjfJobBadges.settings.jobTagValue] || "",
                        "data-ps": "e48864c9-img-2"
                    }, null, 10, hd), [
                        [e.unref(d.vPhwSetting)]
                    ])])), [
                        [e.unref(d.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("div", ud, [((h = t == null ? void 0 : t.jobTagsConfig) == null ? void 0 : h.tags) && (t == null ? void 0 : t.tagsDataLoaded) && t.jobTagsData && t.jobTagsData[t.eachJob.jobSeqNo] || t.jobFits && t.fitDataLoaded && t.jobFits.layout && t.jobFits.layout[e.unref(n)] === "top" && t.eachJob.fitLevel && t.jobFitsSettConfig && t.jobFitsSettConfig.literalMap && t.jobFitsSettConfig.literalMap[t.eachJob.fitLevel] && t.enabledFits[t.jobFitsSettConfig.literalMap[t.eachJob.fitLevel]] ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: 0,
                        class: e.normalizeClass(["phw-d-flex phw-align-items-center phw-pr-5", [c.$style["job-fit"]]]),
                        "data-ps": "e48864c9-div-13"
                    }, [((m = t == null ? void 0 : t.jobTagsConfig) == null ? void 0 : m.tags) && (t == null ? void 0 : t.tagsDataLoaded) && t.jobTagsData && t.jobTagsData[t.eachJob.jobSeqNo] ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: 0,
                        class: e.normalizeClass([(T = (w = t == null ? void 0 : t.jobTagsConfig) == null ? void 0 : w.layout) == null ? void 0 : T.style, "phw-pr-2"]),
                        "data-ps": "e48864c9-div-14"
                    }, [t.eachJob.featuredJob && (t == null ? void 0 : t.tagsDataLoaded) && t.eachJob.featuredJob && t.eachJob.featuredJob.toLowerCase() === "yes" ? e.withDirectives((e.openBlock(), e.createElementBlock("span", pd, [e.createTextVNode(e.toDisplayString((o = t.content) == null ? void 0 : o.jobWidget.featuredJobText), 1)])), [
                        [e.unref(d.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), (e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(t.jobTags, s => {
                        var L, K;
                        return e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                            key: s,
                            class: e.normalizeClass([s.settings.class, c.$style["smart-tag"]]),
                            "data-ps": "e48864c9-span-3"
                        }, [((L = t == null ? void 0 : t.jobTagsConfig) == null ? void 0 : L.tags) && (t == null ? void 0 : t.tagsDataLoaded) && t.jobTagsData && t.jobTagsData[t.eachJob.jobSeqNo] && t.jobTagsData[t.eachJob.jobSeqNo][s.name] ? e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                            key: 0,
                            "data-ph-at-name": s == null ? void 0 : s.name,
                            "data-ph-at-id": "job-tag",
                            class: "phw-d-flex phw-align-items-center phw-g-p-default-primary",
                            "data-ps": "e48864c9-span-4"
                        }, [s.settings.icon && s.settings.icon.length ? e.withDirectives((e.openBlock(), e.createElementBlock("span", wd, [s.settings.icon && s.settings.icon.length ? e.withDirectives((e.openBlock(), e.createElementBlock("svg", yd, [e.withDirectives(e.createElementVNode("use", {
                            href: "#" + s.settings.icon,
                            "data-ps": "e48864c9-use-1"
                        }, null, 8, Sd), [
                            [e.unref(d.vPhwSetting)]
                        ])])), [
                            [e.unref(d.vPhwSetting)]
                        ]) : e.createCommentVNode("", !0)])), [
                            [e.unref(d.vPhwSetting)]
                        ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("span", md, [e.createTextVNode(e.toDisplayString(e.unref(Y)((K = t.content) == null ? void 0 : K.jobWidget[s.name], t.jobTagsData[t.eachJob.jobSeqNo][s.name].data)), 1)])), [
                            [e.unref(d.vPhwSetting)]
                        ])], 8, bd)), [
                            [e.unref(d.vPhwSetting)]
                        ]) : e.createCommentVNode("", !0)], 2)), [
                            [e.unref(d.vPhwSetting)]
                        ])
                    }), 128))], 2)), [
                        [e.unref(d.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), t.jobFits && t.fitDataLoaded && t.jobFits.layout && t.jobFits.layout[e.unref(n)] === "top" && t.eachJob.fitLevel && t.jobFitsSettConfig && t.jobFitsSettConfig.literalMap && t.jobFitsSettConfig.literalMap[t.eachJob.fitLevel] && t.enabledFits[t.jobFitsSettConfig.literalMap[t.eachJob.fitLevel]] ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: 1,
                        class: e.normalizeClass([t.jobFits.layout && t.jobFits.layout[e.unref(n)], t.jobFits.layout && t.jobFits.layout.style]),
                        "data-ph-at-id": "job-fit",
                        "data-ps": "e48864c9-div-15"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                        class: e.normalizeClass([c.$style["job-fit-tag"], $.value = t.enabledFits[t.jobFitsSettConfig.literalMap[t.eachJob.fitLevel]], e.unref($).settings.class, "phw-p-1", "phw-pt-050", "phw-pb-050", "phw-pt-sm-025", "phw-pb-sm-025", "phw-d-inline-flex", "phw-align-items-center", "phw-stroke-dark"]),
                        "data-ps": "e48864c9-span-7"
                    }, [(k = (_ = e.unref($)) == null ? void 0 : _.settings) != null && k.icon.length ? e.withDirectives((e.openBlock(), e.createElementBlock("span", kd, [(y = (E = e.unref($)) == null ? void 0 : E.settings) != null && y.icon.length ? e.withDirectives((e.openBlock(), e.createElementBlock("svg", Ed, [e.withDirectives(e.createElementVNode("use", {
                        href: "#" + ((S = (j = e.unref($)) == null ? void 0 : j.settings) == null ? void 0 : S.icon),
                        "data-ps": "e48864c9-use-2"
                    }, null, 8, Dd), [
                        [e.unref(d.vPhwSetting)]
                    ])])), [
                        [e.unref(d.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(d.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("span", jd, [e.createTextVNode(e.toDisplayString((J = t.content) == null ? void 0 : J.jobWidget[e.unref($).name]), 1)])), [
                        [e.unref(d.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(d.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(d.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)], 2)), [
                        [e.unref(d.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("h3", Td, [e.withDirectives((e.openBlock(), e.createElementBlock("a", {
                        ref: s => {
                            t.getJobUrl(s, "job", t.eachJob, t.widgetType, t.eachJob.jobUrl)
                        },
                        "data-ph-at-id": "job-link",
                        "data-ph-tevent-attr-trait5": t.eachJob.jobSeqNo,
                        "data-ph-tevent-attr-trait14": t.eachJob.category,
                        "data-ph-tevent-attr-trait132": t.eachJob.title,
                        "data-ph-tevent-attr-trait169": t.eachJob.jobId,
                        "data-ph-tmeta-attr-searchParams": t.searchParams,
                        "data-ph-tmeta-attr-pageSize": t.pageSize,
                        "data-ph-at-job-seqno-text": t.eachJob.jobSeqNo,
                        "data-ph-at-job-title-text": t.eachJob.title,
                        "data-ph-at-job-id-text": t.eachJob.jobId,
                        "aria-label": t.eachJob.title,
                        class: e.normalizeClass([t.jdPage ? "phw-g-text-default-dark phw-td-none" : "phw-td-none", "phw-line-clamp phw-line-clamp-2 phw-word-break"]),
                        "data-access-list-item": t.index,
                        "data-ps": "e48864c9-a-2"
                    }, [e.createTextVNode(e.toDisplayString(t.eachJob.title), 1)], 10, Pd)), [
                        [e.unref(d.vPhwSetting)],
                        [e.unref(d.vPhwTrack), "job_click"]
                    ])])), [
                        [e.unref(d.vPhwSetting)]
                    ])])), [
                        [e.unref(d.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        class: e.normalizeClass(t.jdPage ? "phw-pt-1 phw-pb-1-5 phw-posn-relative" : "phw-posn-relative"),
                        "data-ps": "e48864c9-div-16"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        class: e.normalizeClass([c.$style["job-field-block"], t.jobFieldsInline ? "phw-d-flex phw-align-items-center phw-flex-wrap" : ""]),
                        "data-ps": "e48864c9-div-17"
                    }, [(e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(t.jobFields, s => {
                        var L, K, G, re, ee, q, le, te, fe, ce, z, de, ae, $e, ne, U, ue, he, pe, be, ge, we, Se;
                        return e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                            key: s.name,
                            class: e.normalizeClass([c.$style["jw-job-info"], t.jobFieldsInline ? "phw-d-inline-flex phw-flex-column" : "", s.name && s.name != "title" && s.name != "descriptionTeaser" && t.eachJob[s.name] && !Array.isArray(t.eachJob[s.name]) && t.isMultiFieldEnabled(s.name, t.eachJob) || s.name && s.name != "title" && s.name != "descriptionTeaser" && Array.isArray(t.eachJob[s.name]) && t.eachJob[s.name].length > 1 ? "" : c.$style["job-field-hide"]]),
                            "data-ph-at-id": "job-info",
                            "data-ps": "e48864c9-div-18"
                        }, [s.name && s.name != "title" && s.name != "descriptionTeaser" && t.eachJob[s.name] && !Array.isArray(t.eachJob[s.name]) && t.isMultiFieldEnabled(s.name, t.eachJob) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                            key: 0,
                            class: e.normalizeClass([t.jdPage ? ["phw-pr-1", "phw-g-text-small-secondary"] : ["phw-g-p-default-dark"], !t.removeDotAndPipe && t.dotSeperator && !t.jdPage && t.jobFieldsInline ? c.$style["jw-job-field-dot"] : "", !t.removeDotAndPipe && !t.dotSeperator && !t.jdPage && t.jobFieldsInline ? c.$style["jw-job-field-pipe"] : "", !t.removeDotAndPipe && t.dotSeperator && t.jdPage && t.jobFieldsInline ? c.$style["jw-jd-job-field-dot"] : "", !t.removeDotAndPipe && !t.dotSeperator && t.jdPage && t.jobFieldsInline ? c.$style["jw-jd-job-field-pipe"] : "", "job-" + s.name, "phw-word-break", "phw-d-flex", "phw-align-items-center", t.jobFieldsInline ? "phw-pr-2 phw-pr-md-1" : "phw-mt-1-5 phw-pr-0"]),
                            "data-ph-at-id": "job-" + s.name,
                            "data-ps": "e48864c9-div-19"
                        }, [s.settings.icon ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Bd, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", Jd, [e.withDirectives(e.createElementVNode("use", {
                            href: "#" + s.settings.icon,
                            "data-ps": "e48864c9-use-3"
                        }, null, 8, Nd), [
                            [e.unref(d.vPhwSetting)]
                        ])])), [
                            [e.unref(d.vPhwSetting)]
                        ])])), [
                            [e.unref(d.vPhwSetting)]
                        ]) : e.createCommentVNode("", !0), s.name && ["createdDate", "atsLastModifieddate", "postedDate", "expiryDate"].indexOf(s.name) != -1 && e.unref(ht)(t.eachJob[s.name], ((K = (L = t.content) == null ? void 0 : L.jobWidget) == null ? void 0 : K.jobDateFormat) || "MMMM DD YYYY") ? e.withDirectives((e.openBlock(), e.createElementBlock("div", Ad, [e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                            class: e.normalizeClass(s.settings.label ? "" : ["phw-visually-hidden"]),
                            "data-ps": "e48864c9-span-11"
                        }, [e.createTextVNode(e.toDisplayString(((G = t.siteGlobalLabels) == null ? void 0 : G[s.name]) || ((re = t.content) == null ? void 0 : re.jobWidget[s.name]) + ": "), 1)], 2)), [
                            [e.unref(d.vPhwSetting)]
                        ]), e.createTextVNode(" " + e.toDisplayString(e.unref(ht)(t.eachJob[s.name], ((q = (ee = t.content) == null ? void 0 : ee.jobWidget) == null ? void 0 : q.jobDateFormat) || "MMMM DD YYYY")), 1)])), [
                            [e.unref(d.vPhwSetting)]
                        ]) : e.createCommentVNode("", !0), s.name && ["createdDate", "atsLastModifieddate", "postedDate", "expiryDate"].indexOf(s.name) === -1 ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                            key: 2,
                            role: "text",
                            class: "phw-g-text-default-dark",
                            "data-ph-at-id": "job-" + s.name,
                            "data-ps": "e48864c9-div-21"
                        }, [t.eachJob[s.name] ? e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                            key: 0,
                            class: e.normalizeClass(s.settings.label ? "" : ["phw-visually-hidden"]),
                            "data-ps": "e48864c9-span-12"
                        }, [e.createTextVNode(e.toDisplayString(s.name === "type" ? ((le = t.siteGlobalLabels) == null ? void 0 : le[s.name + "JobField"]) || ((te = t.content) == null ? void 0 : te.jobWidget[s.name + "JobField"]) + ": " : ((fe = t.siteGlobalLabels) == null ? void 0 : fe[s.name]) || ((ce = t.content) == null ? void 0 : ce.jobWidget[s.name]) + ": "), 1)], 2)), [
                            [e.unref(d.vPhwSetting)]
                        ]) : e.createCommentVNode("", !0), e.withDirectives(e.createElementVNode("span", {
                            "data-ps": "e48864c9-span-40",
                            innerHTML: t.eachJob[s.name]
                        }, null, 8, Od), [
                            [e.unref(d.vPhwSetting)]
                        ])], 8, Md)), [
                            [e.unref(d.vPhwSetting)]
                        ]) : e.createCommentVNode("", !0)], 10, _d)), [
                            [e.unref(d.vPhwSetting)]
                        ]) : e.createCommentVNode("", !0), s.name && s.name != "title" && s.name != "descriptionTeaser" && Array.isArray(t.eachJob[s.name]) && t.eachJob[s.name].length > 1 ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                            key: 1,
                            class: e.normalizeClass([t.jdPage ? ["phw-pr-1", "phw-g-text-small-secondary"] : ["phw-g-p-default-dark"], !t.removeDotAndPipe && t.dotSeperator && !t.jdPage && t.jobFieldsInline ? c.$style["jw-job-field-dot"] : "", !t.removeDotAndPipe && !t.dotSeperator && !t.jdPage && t.jobFieldsInline ? c.$style["jw-job-field-pipe"] : "", !t.removeDotAndPipe && t.dotSeperator && t.jdPage && t.jobFieldsInline ? c.$style["jw-jd-job-field-dot"] : "", !t.removeDotAndPipe && !t.dotSeperator && t.jdPage && t.jobFieldsInline ? c.$style["jw-jd-job-field-pipe"] : "", "job-" + s.name, "phw-d-flex", "phw-align-items-center", t.jobFieldsInline ? "phw-pr-2 phw-pr-md-1" : "phw-mt-1-5 phw-pr-0"]),
                            "data-ps": "e48864c9-div-22"
                        }, [t.showModal ? e.createCommentVNode("", !0) : e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                            key: 0,
                            id: "job-multi-field",
                            "aria-expanded": !!t.eachJob[s.name].displayDropdown,
                            "data-ph-at-job-multifield-count": t.eachJob[s.name].length,
                            class: e.normalizeClass(["phw-justify-content-start", "phw-btn", "phw-width-auto", "phw-g-btn-jobcard-info-link"]),
                            "aria-controls": "ally-dropdown " + s.name,
                            "data-ph-at-id": "job-" + s.name,
                            "data-ps": "e48864c9-button-1",
                            onKeydown: e.withKeys(W => t.closeDropDown(t.eachJob[s.name]), ["esc"]),
                            onClick: W => t.changeDropDown(t.eachJob[s.name])
                        }, [s.settings.icon ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Ld, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", Cd, [e.withDirectives(e.createElementVNode("use", {
                            href: "#" + s.settings.icon,
                            "data-ps": "e48864c9-use-4"
                        }, null, 8, xd), [
                            [e.unref(d.vPhwSetting)]
                        ])])), [
                            [e.unref(d.vPhwSetting)]
                        ])])), [
                            [e.unref(d.vPhwSetting)]
                        ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("span", Id, [e.createTextVNode(e.toDisplayString(e.unref(Y)(((z = t.siteGlobalLabels) == null ? void 0 : z[s.name + "_aria_label"]) || ((de = t.content) == null ? void 0 : de.jobWidget[s.name + "_aria_label"]), {
                            count: t.eachJob[s.name].length
                        })), 1)])), [
                            [e.unref(d.vPhwSetting)]
                        ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", Vd, [e.createTextVNode(e.toDisplayString(e.unref(Y)(((ae = t.siteGlobalLabels) == null ? void 0 : ae[s.name]) || (($e = t.content) == null ? void 0 : $e.jobWidget[s.name]), {
                            count: t.eachJob[s.name].length
                        })), 1)])), [
                            [e.unref(d.vPhwSetting)]
                        ]), !t.eachJob[s.name].displayDropdown || t.eachJob[s.name].displayDropdown ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Rd, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", Kd, [e.withDirectives(e.createElementVNode("use", {
                            href: t.eachJob[s.name].displayDropdown ? "" : "#phw-cns-icon-chevron-down",
                            "data-ps": "e48864c9-use-5"
                        }, null, 8, Fd), [
                            [e.unref(d.vPhwSetting)]
                        ]), e.withDirectives(e.createElementVNode("use", {
                            href: t.eachJob[s.name].displayDropdown ? "#phw-cns-icon-chevron-up" : "",
                            "data-ps": "e48864c9-use-14"
                        }, null, 8, Gd), [
                            [e.unref(d.vPhwSetting)]
                        ])])), [
                            [e.unref(d.vPhwSetting)]
                        ])])), [
                            [e.unref(d.vPhwSetting)]
                        ]) : e.createCommentVNode("", !0)], 40, vd)), [
                            [e.unref(d.vPhwSetting)]
                        ]), t.showModal ? e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                            key: 1,
                            id: t.widgetType + s.name + t.index,
                            class: e.normalizeClass(["phw-text-l", t.eachJob.jobSeqNo + "_jobModal_" + s.name, "phw-btn", "phw-justify-content-start", "phw-width-auto", "phw-g-btn-jobcard-info-link"]),
                            "data-modal-content-id": t.eachJob.jobSeqNo + "_jobModal_" + s.name,
                            "data-ph-at-id": "job-" + s.name,
                            "data-ps": "e48864c9-button-2",
                            onClick: W => t.openPopUp(t.eachJob, s)
                        }, [s.settings.icon ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Wd, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", Hd, [e.withDirectives(e.createElementVNode("use", {
                            href: "#" + s.settings.icon,
                            "data-ps": "e48864c9-use-6"
                        }, null, 8, qd), [
                            [e.unref(d.vPhwSetting)]
                        ])])), [
                            [e.unref(d.vPhwSetting)]
                        ])])), [
                            [e.unref(d.vPhwSetting)]
                        ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("span", zd, [e.createTextVNode(e.toDisplayString(e.unref(Y)(((ne = t.siteGlobalLabels) == null ? void 0 : ne[s.name]) || ((U = t.content) == null ? void 0 : U.jobWidget[s.name]), {
                            count: t.eachJob[s.name].length
                        })), 1)])), [
                            [e.unref(d.vPhwSetting)]
                        ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", Yd, [e.createTextVNode(e.toDisplayString(e.unref(Y)(((ue = t.siteGlobalLabels) == null ? void 0 : ue[s.name + "_aria_label"]) || ((he = t.content) == null ? void 0 : he.jobWidget[s.name + "_aria_label"]), {
                            count: t.eachJob[s.name].length
                        })), 1)])), [
                            [e.unref(d.vPhwSetting)]
                        ])], 10, Ud)), [
                            [e.unref(d.vPhwSetting)],
                            [e.unref(d.vPhwTrack), t.trackClicks[s.name]]
                        ]) : e.createCommentVNode("", !0)], 2)), [
                            [e.unref(d.vPhwSetting)]
                        ]) : e.createCommentVNode("", !0), s.name && s.name != "title" && s.name != "descriptionTeaser" && Array.isArray(t.eachJob[s.name]) && t.eachJob[s.name].length > 1 ? e.withDirectives((e.openBlock(), e.createElementBlock("div", Zd, [t.showModal && t.eachJob[s.name].showPopUp ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                            key: 0,
                            id: t.eachJob.jobSeqNo + "_jobModal_" + s.name,
                            class: "phw-a11y-modal-area",
                            "data-ps": "e48864c9-div-24"
                        }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", Qd, [e.withDirectives((e.openBlock(), e.createElementBlock("div", ea, [e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                            class: e.normalizeClass(["dialog-close", "phw-modal-close", "phw-g-modal-close-button"]),
                            "aria-label": (pe = t.content) == null ? void 0 : pe.closeDialog,
                            "data-ps": "e48864c9-button-3",
                            onClick: W => t.closePopUp(t.eachJob[s.name])
                        }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", da, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", aa, [e.withDirectives(e.createElementVNode("use", na, null, 512), [
                            [e.unref(d.vPhwSetting)]
                        ])])), [
                            [e.unref(d.vPhwSetting)]
                        ])])), [
                            [e.unref(d.vPhwSetting)]
                        ])], 8, ta)), [
                            [e.unref(d.vPhwSetting)]
                        ]), e.withDirectives((e.openBlock(), e.createElementBlock("h2", {
                            class: e.normalizeClass(["phw-g-h2-card-sub-title-dark-small", [c.$style["jw-modal-job-title"]]]),
                            "ally-label-heading": "",
                            "data-ps": "e48864c9-h2-3"
                        }, [e.createTextVNode(e.toDisplayString(t.eachJob.title), 1)], 2)), [
                            [e.unref(d.vPhwSetting)]
                        ])])), [
                            [e.unref(d.vPhwSetting)]
                        ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", ia, [e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                            "data-tag-type": "p",
                            class: e.normalizeClass(["phw-pb-3", "phw-pt-4", "phw-pt-sm-3", "phw-pb-sm-2", "phw-mb-0", t.jdPage ? "phw-g-text-small-secondary" : "phw-g-p-default-dark"]),
                            "data-ps": "e48864c9-p-2"
                        }, [e.createTextVNode(e.toDisplayString(e.unref(Y)(((be = t.siteGlobalLabels) == null ? void 0 : be[s.name]) || ((ge = t.content) == null ? void 0 : ge.jobWidget[s.name]), {
                            count: t.eachJob[s.name].length
                        })), 1)], 2)), [
                            [e.unref(d.vPhwSetting)]
                        ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                            role: t.eachJob[s.name].length > 5 ? "region" : "",
                            class: e.normalizeClass([c.$style["jw-modal-job-fields"], "phw-overflow-auto"]),
                            tabindex: t.eachJob[s.name].length > 5 ? "0" : "-1",
                            "aria-label": t.eachJob[s.name].length > 5 ? ((we = t.siteGlobalLabels) == null ? void 0 : we[s.name + "_list"]) || ((Se = t.content) == null ? void 0 : Se.jobWidget[s.name + "_list"]) : "",
                            "data-ps": "e48864c9-div-28"
                        }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                            role: t.eachJob[s.name].length > 1 ? "list" : "presentation",
                            "data-ps": "e48864c9-div-29"
                        }, [(e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(t.eachJob[s.name], W => e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                            key: W,
                            class: e.normalizeClass(["phw-g-text-default-dark phw-pb-2 phw-d-flex phw-align-items-center", [c.$style["jw-modal-content-block"]]]),
                            role: t.eachJob[s.name].length > 1 ? "listitem" : "presentation",
                            "data-ps": "e48864c9-div-30"
                        }, [s.settings.icon ? e.withDirectives((e.openBlock(), e.createElementBlock("span", la, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", ca, [e.withDirectives(e.createElementVNode("use", {
                            href: "#" + s.settings.icon,
                            "data-ps": "e48864c9-use-8"
                        }, null, 8, $a), [
                            [e.unref(d.vPhwSetting)]
                        ])])), [
                            [e.unref(d.vPhwSetting)]
                        ])])), [
                            [e.unref(d.vPhwSetting)]
                        ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("span", ga, [e.createTextVNode(e.toDisplayString(W), 1)])), [
                            [e.unref(d.vPhwSetting)]
                        ])], 10, ra)), [
                            [e.unref(d.vPhwSetting)]
                        ])), 128))], 8, sa)), [
                            [e.unref(d.vPhwSetting)]
                        ])], 10, oa)), [
                            [e.unref(d.vPhwSetting)]
                        ])])), [
                            [e.unref(d.vPhwSetting)]
                        ])])), [
                            [e.unref(d.vPhwSetting)]
                        ])], 8, Xd)), [
                            [e.unref(d.vPhwSetting)]
                        ]) : e.createCommentVNode("", !0), t.eachJob[s.name].displayDropdown && !t.showModal ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                            key: 1,
                            id: "ally-dropdown " + s.name,
                            class: "phw-mt-2 phw-mb-2 phw-pl-3 phw-pr-3 phw-word-break phw-g-text-default-dark",
                            role: t.eachJob[s.name].length > 1 ? "list" : "presentation",
                            "data-ps": "e48864c9-div-31"
                        }, [(e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(t.eachJob[s.name], W => e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                            key: W,
                            role: t.eachJob[s.name].length > 1 ? "listitem" : "presentation",
                            "data-ps": "e48864c9-div-32"
                        }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", ua, [e.createTextVNode(e.toDisplayString(W), 1)])), [
                            [e.unref(d.vPhwSetting)]
                        ])], 8, ha)), [
                            [e.unref(d.vPhwSetting)]
                        ])), 128))], 8, fa)), [
                            [e.unref(d.vPhwSetting)]
                        ]) : e.createCommentVNode("", !0)])), [
                            [e.unref(d.vPhwSetting)]
                        ]) : e.createCommentVNode("", !0)], 2)), [
                            [e.unref(d.vPhwSetting)]
                        ])
                    }), 128))], 2)), [
                        [e.unref(d.vPhwSetting)]
                    ]), t.eachJob.smartHighlights && a.enabledFields.pjfSmartHighlights ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: 0,
                        class: e.normalizeClass([c.$style["jw-smart-highlights"]]),
                        "data-ph-at-id": "job-smart-tags",
                        "data-ps": "e48864c9-div-33"
                    }, [(e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(t.eachJob.smartHighlights, (s, L) => {
                        var K, G;
                        return e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                            key: s,
                            "data-ps": "e48864c9-div-34"
                        }, [s && t.widgetConfig.smartHighlights[L] ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                            key: 0,
                            class: e.normalizeClass([!t.removeDotAndPipe && t.dotSeperator && !t.jdPage ? c.$style["jw-job-field-dot"] : "", !t.removeDotAndPipe && !t.dotSeperator && !t.jdPage ? c.$style["jw-job-field-pipe"] : "", !t.removeDotAndPipe && t.dotSeperator && t.jdPage ? c.$style["jw-jd-job-field-dot"] : "", !t.removeDotAndPipe && !t.dotSeperator && t.jdPage ? c.$style["jw-jd-job-field-pipe"] : "", "phw-g-text-default-dark", "phw-d-flex", "phw-align-items-center", "phw-pr-2"]),
                            "data-ps": "e48864c9-div-35"
                        }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", pa, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", ba, [e.withDirectives(e.createElementVNode("use", {
                            href: "#" + t.widgetConfig.smartHighlights[L].class,
                            "data-ps": "e48864c9-use-9"
                        }, null, 8, wa), [
                            [e.unref(d.vPhwSetting)]
                        ])])), [
                            [e.unref(d.vPhwSetting)]
                        ])])), [
                            [e.unref(d.vPhwSetting)]
                        ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", ya, [e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                            class: e.normalizeClass(a.enabledFields.pjfSmartHighlights.settings.label ? "" : "phw-visually-hidden"),
                            "data-ps": "e48864c9-span-26"
                        }, [e.createTextVNode(e.toDisplayString(((G = (K = t.content) == null ? void 0 : K.jobWidget) == null ? void 0 : G[t.widgetConfig.smartHighlights[L].name]) + ": "), 1)], 2)), [
                            [e.unref(d.vPhwSetting)]
                        ]), e.createTextVNode(" " + e.toDisplayString(t.getHighLightsString(s)), 1)])), [
                            [e.unref(d.vPhwSetting)]
                        ])], 2)), [
                            [e.unref(d.vPhwSetting)]
                        ]) : e.createCommentVNode("", !0)])), [
                            [e.unref(d.vPhwSetting)]
                        ])
                    }), 128)), (t.eachJob.descriptionTeaser && a.enabledFields.descriptionTeaser || t.enabledActions.applyNow) && t.eachJob.smartHighlights && t.enabledFields.pjfSmartHighlights ? e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                        key: 0,
                        role: "button",
                        "aria-label": e.unref(Y)(t.eachJob.toggleOpenTeaser ? (M = (B = t.content) == null ? void 0 : B.jobWidget) == null ? void 0 : M.hideDetailsAriaLabel : (O = (P = t.content) == null ? void 0 : P.jobWidget) == null ? void 0 : O.showDetailsAriaLabel, {
                            title: t.eachJob.title
                        }),
                        "aria-expanded": t.eachJob.toggleOpenTeaser ? "true" : "false",
                        class: e.normalizeClass([c.$style["jw-smart-highlights-dropdown"], "phw-btn phw-g-btn-link", "phw-mt-2", "phw-width-4", "phw-justify-content-start"]),
                        "data-ps": "e48864c9-button-4",
                        onClick: f[0] || (f[0] = s => t.eachJob.toggleOpenTeaser = !t.eachJob.toggleOpenTeaser)
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", ma, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", ka, [e.withDirectives(e.createElementVNode("use", {
                        href: "#" + (t.eachJob.toggleOpenTeaser ? "chevron-up" : "chevron-down"),
                        "data-ps": "e48864c9-use-10"
                    }, null, 8, Ea), [
                        [e.unref(d.vPhwSetting)]
                    ])])), [
                        [e.unref(d.vPhwSetting)]
                    ])])), [
                        [e.unref(d.vPhwSetting)]
                    ]), e.createTextVNode(" " + e.toDisplayString(t.eachJob.toggleOpenTeaser ? (ie = (F = t.content) == null ? void 0 : F.jobWidget) == null ? void 0 : ie.hideDetails : (X = (Z = t.content) == null ? void 0 : Z.jobWidget) == null ? void 0 : X.showDetails), 1)], 10, Sa)), [
                        [e.unref(d.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)], 2)), [
                        [e.unref(d.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), t.eachJob.descriptionTeaser && a.enabledFields.descriptionTeaser && !t.eachJob.smartHighlights ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: 1,
                        "data-tag-type": "p",
                        "data-ph-at-job-title-text": t.eachJob.descriptionTeaser,
                        class: e.normalizeClass([t.jdPage ? "phw-mt-1" : "phw-mt-2 phw-mb-md-1 phw-mt-md-0", "phw-mb-0", "phw-word-break"]),
                        "data-ph-at-id": "jobdescription-text",
                        "data-ps": "e48864c9-p-3"
                    }, [e.createTextVNode(e.toDisplayString(t.eachJob.descriptionTeaser), 1)], 10, Da)), [
                        [e.unref(d.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), t.eachJob.toggleOpenTeaser && t.eachJob.descriptionTeaser && t.enabledFields.descriptionTeaser ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: 2,
                        "data-tag-type": "p",
                        class: e.normalizeClass(["job-description phw-g-p-default-dark phw-mt-3 phw-mb-0", [i[t.eachJob.jobSeqNo] || !(t.eachJob.smartHighlights && a.enabledFields.pjfSmartHighlights) ? "show" : ""]]),
                        "data-ps": "e48864c9-p-4"
                    }, [e.createTextVNode(e.toDisplayString(t.eachJob.descriptionTeaser), 1)], 2)), [
                        [e.unref(d.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), t.jobFits && t.fitDataLoaded && t.jobFits.layout && t.jobFits.layout[e.unref(n)] === "bottom" && t.eachJob.fitLevel && t.jobFitsSettConfig && t.jobFitsSettConfig.literalMap && t.jobFitsSettConfig.literalMap[t.eachJob.fitLevel] && t.enabledFits[t.jobFitsSettConfig.literalMap[t.eachJob.fitLevel]] ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: 3,
                        class: e.normalizeClass([c.$style["job-fit-bottom"], "phw-mt-1", t.jobFits.layout && t.jobFits.layout[e.unref(n)], t.jobFits.layout && t.jobFits.layout.style]),
                        "data-ps": "e48864c9-div-36"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                        class: e.normalizeClass([c.$style["job-fit-tag"], $.value = t.enabledFits[t.jobFitsSettConfig.literalMap[t.eachJob.fitLevel]], e.unref($).settings.class, "phw-p-1", "phw-pt-050", "phw-pb-050", "phw-pt-sm-025", "phw-pb-sm-025", "phw-d-inline-flex", "phw-align-items-center", "phw-stroke-dark"]),
                        "data-ps": "e48864c9-span-28"
                    }, [(se = (oe = e.unref($)) == null ? void 0 : oe.settings) != null && se.icon.length ? e.withDirectives((e.openBlock(), e.createElementBlock("span", ja, [(V = (Q = e.unref($)) == null ? void 0 : Q.settings) != null && V.icon.length ? e.withDirectives((e.openBlock(), e.createElementBlock("svg", Ta, [e.withDirectives(e.createElementVNode("use", {
                        href: "#" + ((R = (I = e.unref($)) == null ? void 0 : I.settings) == null ? void 0 : R.icon),
                        "data-ps": "e48864c9-use-11"
                    }, null, 8, Pa), [
                        [e.unref(d.vPhwSetting)]
                    ])])), [
                        [e.unref(d.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(d.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("span", _a, [e.createTextVNode(e.toDisplayString((x = t.content) == null ? void 0 : x.jobWidget[e.unref($).name]), 1)])), [
                        [e.unref(d.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(d.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(d.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)], 2)), [
                        [e.unref(d.vPhwSetting)]
                    ])])), [
                        [e.unref(d.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        class: e.normalizeClass(["phw-d-flex phw-align-items-center", t.jdPage ? "phw-flex-row-reverse phw-justify-content-end" : ""]),
                        role: t.jobActions.length > 1 ? "list" : "",
                        "data-ps": "e48864c9-div-37"
                    }, [(e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(t.jobActions, s => {
                        var L, K, G, re, ee, q, le, te, fe, ce, z, de, ae, $e, ne;
                        return e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                            key: s.name,
                            class: e.normalizeClass([t.jdPage ? "phw-width-auto" : "phw-width-4", c.$style["jw-job-actions"], "phw-mr-3", "phw-d-flex", "phw-align-items-center"]),
                            "data-ph-at-id": "job-actions",
                            role: t.jobActions.length > 1 ? "listitem" : "",
                            "data-ps": "e48864c9-div-38"
                        }, [s.name == "addToCart" ? e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                            key: 0,
                            type: "button",
                            class: e.normalizeClass([
                                [t.eachJob.isJobSaved ? "active" : ""], "phw-btn", "phw-g-btn-link", "phw-width-4", "phw-td-none", "phw-ws-nowrap", t.jdPage ? "phw-ml-1" : ""
                            ]),
                            "data-ph-at-id": "save-job-click",
                            "aria-label": t.eachJob.isJobSaved ? e.unref(Y)((re = (G = t.content) == null ? void 0 : G.jobWidget) == null ? void 0 : re.jobSavedAriaLabel, {
                                title: t.eachJob.title
                            }) : e.unref(Y)((K = (L = t.content) == null ? void 0 : L.jobWidget) == null ? void 0 : K.saveJobAriaLabel, {
                                title: t.eachJob.title
                            }),
                            "aria-pressed": t.eachJob.isJobSaved ? "true" : "false",
                            "data-ps": "e48864c9-button-5",
                            onClick: f[1] || (f[1] = U => t.handleSaveJob(t.eachJob))
                        }, [s.settings.icon ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Aa, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", Ma, [e.withDirectives(e.createElementVNode("use", {
                            href: t.eachJob.isJobSaved ? "#" + s.settings.activeicon : "#" + s.settings.icon,
                            "data-ps": "e48864c9-use-12"
                        }, null, 8, Oa), [
                            [e.unref(d.vPhwSetting)]
                        ])])), [
                            [e.unref(d.vPhwSetting)]
                        ])])), [
                            [e.unref(d.vPhwSetting)]
                        ]) : e.createCommentVNode("", !0), s.settings.label ? e.withDirectives((e.openBlock(), e.createElementBlock("span", va, [e.createTextVNode(e.toDisplayString(t.eachJob.isJobSaved ? (q = (ee = t.content) == null ? void 0 : ee.jobWidget) == null ? void 0 : q.savedText : (te = (le = t.content) == null ? void 0 : le.jobWidget) == null ? void 0 : te.saveText), 1)])), [
                            [e.unref(d.vPhwSetting)]
                        ]) : e.createCommentVNode("", !0)], 10, Na)), [
                            [e.unref(d.vPhwSetting)]
                        ]) : e.createCommentVNode("", !0), s.name == "removeFromCart" ? e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                            key: 1,
                            type: "button",
                            class: "phw-btn phw-g-btn-link phw-width-auto phw-ws-nowrap",
                            "data-ph-at-id": "job-remove-link",
                            "aria-label": e.unref(Y)((fe = t.content) == null ? void 0 : fe.jobWidget.removeAriaLableText, {
                                title: t.eachJob.title
                            }),
                            "data-ps": "e48864c9-button-6",
                            onClick: f[2] || (f[2] = U => t.deleteJobFromCart(t.eachJob, void 0, t.isShowMore, t.index))
                        }, [s.settings.icon ? e.withDirectives((e.openBlock(), e.createElementBlock("svg", Ca, [e.withDirectives(e.createElementVNode("use", {
                            href: "#" + s.settings.icon,
                            "data-ps": "e48864c9-use-13"
                        }, null, 8, xa), [
                            [e.unref(d.vPhwSetting)]
                        ])])), [
                            [e.unref(d.vPhwSetting)]
                        ]) : e.createCommentVNode("", !0), s.settings.label ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Ia, [e.createTextVNode(e.toDisplayString((z = (ce = t.content) == null ? void 0 : ce.jobWidget) == null ? void 0 : z.removeJobText), 1)])), [
                            [e.unref(d.vPhwSetting)]
                        ]) : e.createCommentVNode("", !0)], 8, La)), [
                            [e.unref(d.vPhwSetting)]
                        ]) : e.createCommentVNode("", !0), s.name === "applyNow" ? e.withDirectives((e.openBlock(), e.createElementBlock("a", {
                            key: 2,
                            "data-ph-tevent-attr-trait5": t.eachJob.jobSeqNo,
                            "data-ph-tevent-attr-trait14": t.eachJob.category,
                            "data-ph-tevent-attr-trait132": t.eachJob.title,
                            "data-ph-tevent-attr-trait169": t.eachJob.jobId,
                            href: t.eachJob.actionUrl,
                            target: t.eachJob.externalApply ? "_blank" : "_self",
                            class: "phw-btn phw-g-btn-primary phw-width-4 phw-ws-nowrap",
                            "data-ph-at-id": "apply-link",
                            "aria-label": ((ae = (de = t.content) == null ? void 0 : de.jobWidget) == null ? void 0 : ae.applyNowText.ariaLabel) + " " + t.eachJob.title,
                            "data-ps": "e48864c9-a-3"
                        }, [e.createTextVNode(e.toDisplayString((ne = ($e = t.content) == null ? void 0 : $e.jobWidget) == null ? void 0 : ne.applyNowText.text), 1)], 8, Va)), [
                            [e.unref(d.vPhwSetting)],
                            [e.unref(d.vPhwTrack), "apply_click"]
                        ]) : e.createCommentVNode("", !0)], 10, Ja)), [
                            [e.unref(d.vPhwSetting)]
                        ])
                    }), 128))], 10, Ba)), [
                        [e.unref(d.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(d.vPhwSetting)]
                    ])])), [
                        [e.unref(d.vPhwSetting)]
                    ])
                }
            }
        }),
        Ka = {
            "job-fit": "_job-fit_1h5s6_2",
            "job-fit-tag": "_job-fit-tag_1h5s6_5",
            "jw-job-info": "_jw-job-info_1h5s6_14",
            "job-field-hide": "_job-field-hide_1h5s6_14",
            "jw-job-field-dot": "_jw-job-field-dot_1h5s6_14",
            "jw-jd-job-field-dot": "_jw-jd-job-field-dot_1h5s6_15",
            "jw-job-field-pipe": "_jw-job-field-pipe_1h5s6_23",
            "jw-jd-job-field-pipe": "_jw-jd-job-field-pipe_1h5s6_24",
            "jw-job-actions": "_jw-job-actions_1h5s6_31",
            "jw-modal-job-title": "_jw-modal-job-title_1h5s6_44",
            "jw-modal-job-fields": "_jw-modal-job-fields_1h5s6_47",
            "jw-smart-highlights": "_jw-smart-highlights_1h5s6_50",
            "jw-job-card-image": "_jw-job-card-image_1h5s6_58",
            "jw-job-card-logo": "_jw-job-card-logo_1h5s6_65",
            "smart-tag": "_smart-tag_1h5s6_69"
        },
        ut = (a, t) => {
            const n = a.__vccOpts || a;
            for (const [i, $] of t) n[i] = $;
            return n
        },
        Fa = ut(Ra, [
            ["__cssModules", {
                $style: Ka
            }]
        ]),
        Ga = ["data-widget"],
        Ua = {
            key: 0,
            class: "phw-text-c",
            "data-ps": "e48864c9-div-2"
        },
        Wa = {
            class: "phw-spinner-border phw-primary",
            role: "status",
            "data-ps": "e48864c9-div-3"
        },
        Ha = {
            class: "phw-visually-hidden",
            "data-ps": "e48864c9-span-1"
        },
        qa = {
            key: 1,
            class: "phw-container phw-text-c phw-width-3 phw-width-sm-4 phw-m-0-auto phw-pl-sm-2 phw-pr-sm-2",
            "data-ps": "e48864c9-div-4"
        },
        za = {
            key: 0,
            role: "presentation",
            class: "phw-mb-4 phw-img-ctr",
            "data-ps": "e48864c9-figure-1"
        },
        Ya = ["src", "alt"],
        Za = {
            "data-tag-type": "p",
            "data-ph-at-id": "nodata-text",
            class: "phw-g-p-default-dark phw-mb-4",
            "data-ps": "e48864c9-h2-1"
        },
        Xa = ["href"],
        Qa = {
            class: "phw-icon-ctr phw-ml-050",
            "data-ps": "e48864c9-span-34"
        },
        en = {
            class: "icon phw-i-sz-2-5 phw-icon-flip",
            "aria-hidden": "true",
            fill: "currentcolor",
            "data-ps": "e48864c9-svg-14"
        },
        tn = {
            href: "#phw-cns-icon-chevron-right",
            "data-ps": "e48864c9-use-14"
        },
        dn = {
            class: "",
            "data-ps": "e48864c9-div-42"
        },
        an = {
            class: "phw-icon-ctr phw-mt-050",
            "data-ps": "e48864c9-span-35"
        },
        nn = {
            fill: "currentcolor",
            class: "phw-i-sz-2-5",
            "aria-hidden": "true",
            "data-ps": "e48864c9-svg-15"
        },
        on = {
            href: "#phw-cns-icon-va-error-mark",
            "data-ps": "e48864c9-use-15"
        },
        sn = {
            class: "phw-d-flex phw-flex-column phw-align-items-start phw-gap-1",
            "data-ps": "e48864c9-div-43"
        },
        rn = {
            class: "phw-font-weight-600 phw-g-p-large-dark",
            "data-ps": "e48864c9-div-44"
        },
        ln = {
            "data-tag-type": "p",
            class: "phw-g-p-default-dark",
            "data-ps": "e48864c9-div-48"
        },
        cn = ["aria-label"],
        $n = ["role"],
        gn = ["data-ph-at-widget-data-count", "role"],
        fn = {
            key: 3,
            "data-ph-at-id": "nodata-block",
            "data-ps": "e48864c9-div-40"
        },
        hn = {
            "data-tag-type": "p",
            class: "phw-g-p-default-dark phw-mb-0",
            "data-ph-at-id": "nodata-text",
            "data-ps": "e48864c9-p-5"
        };
    return ut(e.defineComponent({
        __name: "JobView2DefaultComponent",
        props: {
            instanceId: {
                default: void 0
            },
            contentId: null,
            theme: null,
            widgetTag: {
                default: void 0
            },
            cardsPerRow: {
                default: 3
            },
            recomJobsBrowsingHistory: {
                default: void 0
            },
            widgetType: null,
            clickTojd: {
                type: Boolean,
                default: !1
            },
            jobsDisplayMode: {
                default: "seeMore"
            },
            isErrorMsgReqd: {
                default: void 0
            },
            showErrorMsg: {
                default: void 0
            },
            showExpiredJobs: {
                default: void 0
            },
            jobsPerSlide: {
                default: void 0
            },
            maxJobs: {
                default: void 0
            },
            maxDisplayCount: {
                default: 3
            },
            showTitle: {
                default: void 0
            },
            showSubTitle: {
                default: void 0
            },
            seemoretext: {
                type: Boolean,
                default: !0
            },
            getLocation: {
                default: void 0
            },
            hideActions: {
                type: Boolean,
                default: !1
            },
            addPagination: {
                type: Boolean
            },
            isCategoryImageEnabled: {
                default: void 0
            },
            jobCount: {
                default: void 0
            },
            rk: {
                default: void 0
            },
            urlKey: {
                default: void 0
            },
            url: {
                default: void 0
            },
            sort: {
                default: void 0
            },
            selectedOrder: {
                default: void 0
            },
            currentSelectedPage: {
                default: void 0
            },
            jobSeqNo: {
                default: void 0
            },
            jobResults: {
                default: void 0
            },
            content: {
                default: void 0
            },
            pageNum: null,
            jdPage: {
                type: Boolean,
                default: !1
            },
            dotSeperator: {
                type: Boolean,
                default: !0
            },
            removeDotAndPipe: {
                type: Boolean,
                default: !1
            },
            jobFieldsInline: {
                type: Boolean,
                default: void 0
            },
            searchParams: {
                default: void 0
            },
            pageSize: {
                default: void 0
            }
        },
        setup(a) {
            const t = a,
                n = e.ref({}),
                i = e.ref();
            e.ref(), e.ref(""), e.ref(!0), e.ref(!1), e.ref(3), e.ref(!1);
            const $ = 2;
            let c = 1;
            const f = "see_next_click",
                h = "see_even_more_click",
                m = "see_more_click",
                w = "see_less_click",
                T = {
                    multi_location: "multi_location_click",
                    multi_category: "multi_category_click",
                    educationLevel: "educationLevel_click"
                },
                {
                    fetchJobWidgetSettings: o,
                    init: _,
                    jobResults: k,
                    jobFields: E,
                    jobActions: y,
                    enabledActions: j,
                    enabledFields: S,
                    cardsToDisplay: J,
                    isShowMore: B,
                    showMoreCount: M,
                    seemoretext: P,
                    isBulkcartEnable: O,
                    enabledFits: F,
                    enabledTags: ie,
                    jobFits: Z,
                    jobTags: X,
                    jobTagsConfig: oe,
                    fitDataLoaded: se,
                    jobFitsSettConfig: Q,
                    tagsDataLoaded: V,
                    jobTagsData: I,
                    isSearchResultWidget: R,
                    isEnableShowMore: x,
                    showModal: s,
                    openPopUp: L,
                    closePopUp: K,
                    showLoader: G,
                    showErrorMsg: re,
                    siteGlobalLabels: ee
                } = It(t, i),
                {
                    rkValue: q,
                    jobCount: le,
                    totalCount: te,
                    ctaUrl: fe
                } = Qe(t),
                {
                    getJobUrl: ce,
                    deleteJobFromCart: z,
                    addToJobCart: de
                } = dt(t, i, n),
                ae = e.ref(!1),
                $e = e.ref(!1),
                ne = e.ref(!1),
                U = e.ref(!1),
                ue = e.ref(!1),
                he = "openCreateProfilePopup";

            function pe() {
                return d.getDDO(b.ddoKeys.ddoValidateJwtToken, {}).then(N => {
                    U.value = N.data.isSocialLogin || N.data.isSiteLogin
                })
            }

            function be(N) {
                d.publishEvent(he, {}), d.trackWidgetClick(i.value, "phw:job_cart:sign_up_click", {})
            }

            function ge(N) {
                $e.value = N.isSocialLoggedin, ne.value = N.isSiteloggedIn, U.value = $e.value || ne.value
            }
            e.onMounted(() => {
                d.usePhCommon().init(i.value, n, t.instanceId), ue.value = d.getSiteSettings("saveJobToastEnable") || !1, d.subscribeEvent("checkLoginStatus", ge)
            }), e.onBeforeMount(async () => {
                !t.contentId && t.jobResults ? n.value = t.content || {} : d.contentStore.getContent(t.contentId || "").then(N => {
                    n.value = N
                }), t.maxDisplayCount && (J.value = t.maxDisplayCount), G.value = !0, await pe(), ae.value = d.phAppStore.ddo.siteConfig.data.navItems.candidateHome || d.phAppStore.ddo.siteConfig.data.navItems.candidateHub || !1, await _()
            });

            function we(N, v) {
                return !(N === "location" && v.multi_location && v.multi_location.length > 1 || N === "category" && v.multi_category && v.multi_category.length > 1)
            }

            function Se() {
                O.value = !0
            }

            function W(N) {
                const v = N;
                v.inProgress || (v.inProgress = !0, v.isJobSaved ? z(v) : (de(v), Se()))
            }

            function qe(N) {
                const v = N;
                v.displayDropdown = !v.displayDropdown
            }

            function ze(N) {
                const v = N;
                v.displayDropdown = !1
            }

            function De() {
                d.trackWidgetClick(i.value, m, {});
                const N = M.value;
                J.value = k.value.length, B.value = !1, e.nextTick(() => {
                    setTimeout(() => {
                        i.value.querySelector(`[data-access-list-item="${N}"]`).focus()
                    }, 0)
                })
            }

            function Ye(N) {
                return N.keyCode === 13 && De(), !0
            }

            function ve() {
                d.trackWidgetClick(i.value, w, {}), J.value = M.value, B.value = !0, e.nextTick(() => {
                    const N = i.value.querySelector('[data-access="showMore"]') || null;
                    if (N) {
                        setTimeout(() => {
                            N.focus()
                        }, 150);
                        return
                    }
                    const v = i.value.querySelector('[data-access="seeNext"]') || null;
                    if (v) {
                        setTimeout(() => {
                            v.focus()
                        }, 150);
                        return
                    }
                    const H = i.value.querySelector('[data-access="seeEvenMore"]') || null;
                    H && setTimeout(() => {
                        H.focus()
                    }, 150)
                })
            }
            async function je() {
                d.trackWidgetClick(i.value, f, {});
                const N = J.value;
                J.value + M.value < k.value.length ? (B.value = !0, J.value += M.value) : (J.value = k.value.length, B.value = !1), e.nextTick(() => {
                    i.value.querySelector(`[data-access-list-item="${N}"]`).focus()
                })
            }

            function Le() {
                d.trackWidgetClick(i.value, h, {});
                const N = $ > c;
                c += 1;
                const v = J.value;
                N && J.value + M.value <= k.value.length ? (B.value = !0, J.value += M.value) : (J.value = k.value.length, c = 1, B.value = !1), e.nextTick(() => {
                    i.value.querySelector(`[data-access-list-item="${v}"]`).focus()
                })
            }

            function Ze(N) {
                let v = "";
                return N && (typeof N == "string" ? N : (Object.values(N).forEach((H, me) => {
                    me > 0 ? v += `,${H}` : v += H
                }), v))
            }
            return (N, v) => {
                var H, me, Ce, xe, Ie, Te, Pe, Ve, _e, Re, Be, Ke, Fe, Je, Ne, Ge, Ue;
                return (t.widgetType == "phw-saved-jobs" ? e.unref(k) : e.unref(k) && e.unref(k).length > 0) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    key: 0,
                    ref_key: "element",
                    ref: i,
                    class: e.normalizeClass([t.widgetType === "phw-saved-jobs" ? "phw-g-widget-bg-white" : "phw-g-widget-bg-secondary", "phw-widget-ctr"]),
                    "data-widget": t.widgetType,
                    "data-ps": "e48864c9-div-1"
                }, [e.unref(G) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", Ua, [e.withDirectives((e.openBlock(), e.createElementBlock("div", Wa, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Ha, [e.createTextVNode(e.toDisplayString(((H = n.value) == null ? void 0 : H.widgetHeading) && ((me = n.value) == null ? void 0 : me.widgetHeading[t == null ? void 0 : t.widgetType])), 1)])), [
                    [e.unref(d.vPhwSetting)]
                ])])), [
                    [e.unref(d.vPhwSetting)]
                ])])), [
                    [e.unref(d.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), t.widgetType == "phw-saved-jobs" && e.unref(k) && e.unref(k).length == 0 && !e.unref(G) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", qa, [n.value.jobCartImgUrl.src || n.value.jobCartImgUrl ? e.withDirectives((e.openBlock(), e.createElementBlock("figure", za, [e.withDirectives(e.createElementVNode("img", {
                    src: n.value.jobCartImgUrl.src || n.value.jobCartImgUrl,
                    alt: n.value.jobCartImgUrl.alt,
                    "data-ps": "e48864c9-img-1"
                }, null, 8, Ya), [
                    [e.unref(d.vPhwSetting)]
                ])])), [
                    [e.unref(d.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("div", Za, [e.createTextVNode(e.toDisplayString((Ce = n.value) == null ? void 0 : Ce.cartEmptyText), 1)])), [
                    [e.unref(d.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("a", {
                    href: e.unref(Y)((Ie = (xe = n.value) == null ? void 0 : xe.jobsLink) == null ? void 0 : Ie.href, {
                        linkDomain: e.unref(d.getBaseUrl)()
                    }),
                    class: "phw-btn phw-g-btn-link phw-s-find-jobs",
                    "data-ph-at-id": "search-results-link",
                    "data-ps": "e48864c9-a-1"
                }, [e.createTextVNode(e.toDisplayString((Pe = (Te = n.value) == null ? void 0 : Te.jobsLink) == null ? void 0 : Pe.text) + " ", 1), e.withDirectives((e.openBlock(), e.createElementBlock("span", Qa, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", en, [e.withDirectives(e.createElementVNode("use", tn, null, 512), [
                    [e.unref(d.vPhwSetting)]
                ])])), [
                    [e.unref(d.vPhwSetting)]
                ])])), [
                    [e.unref(d.vPhwSetting)]
                ])], 8, Xa)), [
                    [e.unref(d.vPhwSetting)],
                    [e.unref(d.vPhwTrack), "goto_click"]
                ])])), [
                    [e.unref(d.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.unref(k) && e.unref(k).length && !e.unref(G) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    key: 2,
                    class: e.normalizeClass(t.jdPage ? "phw-container phw-pt-2-5 phw-pb-2-5 phw-mt-4" : "phw-container"),
                    "data-ps": "e48864c9-div-5"
                }, [t.widgetType === "phw-saved-jobs" && !U.value && ae.value && ue.value ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    key: 0,
                    class: e.normalizeClass(["phw-d-flex phw-pl-2 phw-p-1 phw-gap-1 phw-mb-6", N.$style["backgroung-color-waring"]]),
                    role: "alert",
                    "aria-live": "polite",
                    "data-ps": "e48864c9-div-41"
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", dn, [e.withDirectives((e.openBlock(), e.createElementBlock("span", an, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", nn, [e.withDirectives(e.createElementVNode("use", on, null, 512), [
                    [e.unref(d.vPhwSetting)]
                ])])), [
                    [e.unref(d.vPhwSetting)]
                ])])), [
                    [e.unref(d.vPhwSetting)]
                ])])), [
                    [e.unref(d.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", sn, [e.withDirectives((e.openBlock(), e.createElementBlock("div", rn, [e.createTextVNode(e.toDisplayString((Ve = n.value) == null ? void 0 : Ve.temporarySaveBannerHeading), 1)])), [
                    [e.unref(d.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", ln, [e.createTextVNode(e.toDisplayString((_e = n.value) == null ? void 0 : _e.temporarySaveBannerMessage), 1)])), [
                    [e.unref(d.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                    type: "button",
                    role: "link",
                    class: "phw-btn phw-g-btn-link candidateHomeSignUp phw-s-after-close",
                    "aria-label": (Re = n.value) == null ? void 0 : Re.temporarySaveBannerCtaAriaLabel,
                    "data-ps": "e48864c9-button-11",
                    onClick: v[0] || (v[0] = ke => be())
                }, [e.createTextVNode(e.toDisplayString((Be = n.value) == null ? void 0 : Be.temporarySaveBannerCtaText), 1)], 8, cn)), [
                    [e.unref(d.vPhwSetting)]
                ])])), [
                    [e.unref(d.vPhwSetting)]
                ])], 2)), [
                    [e.unref(d.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), !e.unref(R) && ((Ke = n.value) == null ? void 0 : Ke.widgetHeading) && ((Fe = n.value) == null ? void 0 : Fe.widgetHeading[t == null ? void 0 : t.widgetType]) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    key: 1,
                    class: e.normalizeClass(["phw-header-block phw-text-l", t.jdPage ? "phw-width-4 phw-pl-3 phw-pb-2-5 phw-stroke-bottom-dark" : ""]),
                    "data-ps": "e48864c9-div-6"
                }, [e.withDirectives((e.openBlock(), e.createElementBlock("h2", {
                    class: e.normalizeClass(t.jdPage ? "phw-g-h2-card-sub-title-dark-small" : ""),
                    "data-ph-at-id": "heading-text",
                    "data-ps": "e48864c9-h2-2"
                }, [e.createTextVNode(e.toDisplayString(((Je = n.value) == null ? void 0 : Je.widgetHeading) && ((Ne = n.value) == null ? void 0 : Ne.widgetHeading[t == null ? void 0 : t.widgetType])), 1)], 2)), [
                    [e.unref(d.vPhwSetting)]
                ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    "data-tag-type": "p",
                    class: e.normalizeClass(["phw-mb-0", ["phw-d-none phw-g-p-widget-subheading-style-1"]]),
                    "data-ps": "e48864c9-p-1"
                }, [e.createTextVNode(e.toDisplayString((Ge = n.value) == null ? void 0 : Ge.description[t == null ? void 0 : t.widgetType]), 1)])), [
                    [e.unref(d.vPhwSetting)]
                ])], 2)), [
                    [e.unref(d.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.unref(k) && e.unref(k).length ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    key: 2,
                    class: e.normalizeClass(["phw-grid-" + a.cardsPerRow, t.jdPage ? "phw-grid phw-grid-lg-1 phw-gap-0" : "phw-content-block phw-grid phw-grid-lg-1 phw-gap-0"]),
                    role: e.unref(k).length > 1 ? "list" : "",
                    "data-ps": "e48864c9-div-7"
                }, [(e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(e.unref(k).slice(0, e.unref(J)), (ke, Ae) => e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                    key: Ae,
                    "data-ph-at-id": "jobs-list",
                    "data-ph-at-widget-data-count": e.unref(k).length,
                    class: e.normalizeClass(["phw-card-block phw-posn-relative", [t.jdPage ? N.$style["jd-card-block"] : [N.$style["jw-card-block"], "phw-stroke-bottom-dark"], t.widgetType === "phw-saved-jobs" || t.widgetType === "pcs-search-result" ? "phw-g-card-bg-white" : "phw-g-card-bg-secondary"]]),
                    role: e.unref(k).length > 1 ? "listitem" : "",
                    "data-ps": "e48864c9-div-8"
                }, [e.withDirectives((e.openBlock(), e.createBlock(Fa, {
                    key: ke.jobSeqNo,
                    "widget-type": t.widgetType,
                    "jd-page": t.jdPage,
                    "dot-seperator": t.dotSeperator,
                    "remove-dot-and-pipe": t.removeDotAndPipe,
                    content: n.value,
                    "each-job": ke,
                    "enabled-fields": e.unref(S),
                    "enabled-actions": e.unref(j),
                    "job-fits": e.unref(Z),
                    "fit-data-loaded": e.unref(se),
                    "job-fits-sett-config": e.unref(Q),
                    "enabled-fits": e.unref(F),
                    "job-tags-config": e.unref(oe),
                    "tags-data-loaded": e.unref(V),
                    "job-tags": e.unref(X),
                    "job-tags-data": e.unref(I),
                    "get-job-url": e.unref(ce),
                    "cards-per-row": a.cardsPerRow,
                    "job-fields": e.unref(E),
                    "job-actions": e.unref(y),
                    "is-multi-field-enabled": we,
                    "show-modal": e.unref(s),
                    index: Ae,
                    "close-drop-down": ze,
                    "change-drop-down": qe,
                    "open-pop-up": e.unref(L),
                    "close-pop-up": e.unref(K),
                    "widget-config": e.unref(b),
                    "get-high-lights-string": Ze,
                    "delete-job-from-cart": e.unref(z),
                    "handle-save-job": W,
                    "is-show-more": e.unref(B),
                    "track-clicks": T,
                    "job-fields-inline": t.jobFieldsInline,
                    "data-ph-at-id": "jobs-list-item",
                    "data-ps": "e48864c9-jobcardView2-1",
                    "search-params": t.searchParams,
                    "page-size": t.pageSize,
                    "site-global-labels": e.unref(ee)
                }, null, 8, ["widget-type", "jd-page", "dot-seperator", "remove-dot-and-pipe", "content", "each-job", "enabled-fields", "enabled-actions", "job-fits", "fit-data-loaded", "job-fits-sett-config", "enabled-fits", "job-tags-config", "tags-data-loaded", "job-tags", "job-tags-data", "get-job-url", "cards-per-row", "job-fields", "job-actions", "show-modal", "index", "open-pop-up", "close-pop-up", "widget-config", "delete-job-from-cart", "is-show-more", "job-fields-inline", "search-params", "page-size", "site-global-labels"])), [
                    [e.unref(d.vPhwSetting)]
                ])], 10, gn)), [
                    [e.unref(d.vPhwSetting)]
                ])), 128))], 10, $n)), [
                    [e.unref(d.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), e.withDirectives(e.createVNode(rd, {
                    "rk-val": e.unref(q),
                    "widget-type": t.widgetType,
                    "jd-page": t.jdPage,
                    content: n.value,
                    "is-search-result-widget": e.unref(R),
                    "is-enable-show-more": e.unref(x),
                    "is-show-more": e.unref(B),
                    seemoretext: e.unref(P),
                    seemore: De,
                    "see-less": ve,
                    "seemore-on-key-up": Ye,
                    "cta-url": e.unref(fe),
                    "see-next": je,
                    "see-even-more": Le,
                    "jobs-display-mode": a.jobsDisplayMode,
                    "data-ps": "e48864c9-jobActionsView2-1"
                }, null, 8, ["rk-val", "widget-type", "jd-page", "content", "is-search-result-widget", "is-enable-show-more", "is-show-more", "seemoretext", "cta-url", "jobs-display-mode"]), [
                    [e.unref(d.vPhwSetting)]
                ])], 2)), [
                    [e.unref(d.vPhwSetting)]
                ]) : e.createCommentVNode("", !0), t.widgetType !== "phw-saved-jobs" && e.unref(re) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", fn, [e.withDirectives((e.openBlock(), e.createElementBlock("div", hn, [e.createTextVNode(e.toDisplayString((Ue = n.value) == null ? void 0 : Ue.noRecomText), 1)])), [
                    [e.unref(d.vPhwSetting)]
                ])])), [
                    [e.unref(d.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)], 10, Ga)), [
                    [e.unref(d.vPhwSetting)]
                ]) : e.createCommentVNode("", !0)
            }
        }
    }), [
        ["__cssModules", {
            $style: {
                "jw-card-block": "_jw-card-block_pg2m8_2",
                "backgroung-color-waring": "_backgroung-color-waring_pg2m8_4"
            }
        }]
    ])
});