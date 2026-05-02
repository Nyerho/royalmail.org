(function(e, a) {
    typeof exports == "object" && typeof module < "u" ? module.exports = a(require("vue"), require("ph-common/ph-common")) : typeof define == "function" && define.amd ? define(["vue", "ph-common/ph-common"], a) : (e = typeof globalThis < "u" ? globalThis : e || self, e.PhwApwDefaultDefaultV1 = a(e.Vue, e.phCommon))
})(this, function(e, a) {
    "use strict";

    function Je() {
        function d(h) {
            const w = n();
            return w && w[h] ? w[h] : null
        }

        function t(h, w, s) {
            let A = `${i(h)}=${i(w)}`;
            if (w === null && (s.expiry = -1), s.expiry >= 0 && !s.expires) {
                const O = new Date;
                O.setHours(O.getHours() + s.expiry), s.expires = O
            }
            s.path && (A += `; path=${s.path}`), s.domain && (A += `; domain=${s.domain}`), s.expires && (A += `; expires=${s.expires.toUTCString()}`), s.secure && (A += "; secure"), document.cookie = A
        }

        function o(h) {
            document.cookie = `${h}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;`
        }

        function n() {
            return $(document.cookie)
        }

        function $(h) {
            const w = {},
                s = h.split(/ *; */);
            let A;
            if (s[0] === "") return w;
            for (let O = 0; O < s.length; ++O) A = s[O].split("="), w[f(A[0]) || ""] = f(A[1]);
            return w
        }

        function i(h) {
            try {
                return encodeURIComponent(h)
            } catch {
                return null
            }
        }

        function f(h) {
            try {
                return decodeURIComponent(h)
            } catch {
                return null
            }
        }

        function p() {
            const h = document.cookie,
                w = {},
                s = h.split(/ *; */);
            let A;
            if (s[0] === "") return w;
            for (let O = 0; O < s.length; ++O) A = s[O].split("="), w[decodeURIComponent(A[0])] = decodeURIComponent(A[1]);
            return w
        }

        function b(h) {
            const w = p();
            return w && w[h] ? w[h] : null
        }
        return {
            get: d,
            set: t,
            deleteCookie: o,
            getCookie: b
        }
    }

    function gt() {
        const d = {
                "errors.location.unsupportedBrowser": "Browser does not support location services",
                "errors.location.permissionDenied": "You have rejected access to your location",
                "errors.location.positionUnavailable": "Unable to determine your location"
            },
            t = e.ref();

        function o() {
            const i = {
                enableHighAccuracy: !0,
                maximumAge: 0
            };
            return new Promise(function(f, p) {
                function b(w) {
                    f(w)
                }

                function h(w) {
                    p(w.message)
                }
                window.navigator && window.navigator.geolocation ? window.navigator.geolocation.getCurrentPosition(b, h, i) : p(d["errors.location.unsupportedBrowser"])
            })
        }

        function n() {
            return o().then(i => (t.value = i, a.publishEvent("GeoLocation", i), i)).catch(i => (a.publishEvent("LocationError", i), i))
        }

        function $() {
            return t
        }
        return {
            getLocation: n,
            askForLocation: $
        }
    }
    const T = {
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
            ddoKeyOneLineRecommendedJobs: "oneLineRecommendations"
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

    function ft(d) {
        async function t() {
            const o = a.getCachedDDO(T.ddoKeys.ddoKeyNearByJobs);
            if (o) {
                const n = o;
                return new Promise($ => {
                    var i;
                    $((i = n == null ? void 0 : n.data) == null ? void 0 : i.nearbyjobs)
                })
            }
            return gt().getLocation().then(n => {
                if (n && n.coords) {
                    const $ = {};
                    if ($.latitude = n.coords.latitude, $.longitude = n.coords.longitude, $.radius = d.radius || n.coords.accuracy, $.isEagerLoad = !0, $.latitude && $.longitude) return a.getDDO(T.ddoKeys.ddoKeyNearByJobs, $).then(i => {
                        if (i && i.data && i.data.nearbyjobs) return i.data.nearbyjobs
                    })
                }
            })
        }
        return {
            getJobResults: t
        }
    }

    function ut() {
        function d() {
            const t = {
                isEagerLoad: !0
            };
            return a.getDDO(T.ddoKeys.ddoKeyLatestJobs, t).then(o => o && o.data && o.data.jobs)
        }
        return {
            getJobResults: d
        }
    }

    function bt(d, t) {
        const {
            getCookie: o
        } = Je();

        function n() {
            const $ = o("PHPPPE_GCC");
            if ($ === "d" || $ === "s") return new Promise((p, b) => {
                p({})
            });
            const i = {
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
                f = a.getRecommendedTrackCtx();
            for (const p in f) i[p] = f[p];
            return d.recomJobsBrowsingHistory && d.recomJobsBrowsingHistory.maxJobs && (i.recoSize = d.recomJobsBrowsingHistory.maxJobs), a.getDDO(T.ddoKeys.ddoKeyRecomJobsBrowsingHistory, i).then(p => {
                if (p && p.data && p.data.recommendedJobs) return p.data.recommendedJobs
            })
        }
        return {
            getJobResults: n
        }
    }

    function pt(d, t) {
        const o = {
                fieldName: "jobSeqNo",
                fieldValue: [],
                outputFields: ["jobSeqNo", "title", "category", "location", "active", "expiryDate", "postedDate", "positionLevel", "customField1", "industry", "department", "jobVisibility", "industry", "externalApply", "visibilityType", "fitLevel", "matchedSkills", "jobId", "reqId", "cmsJobId", "applyUrl", "multi_location", "type", "jobType", "brand"]
            },
            n = "jobsViewed";

        function $(f) {
            const p = a.getSpecificTrackCtx(n),
                b = o;
            if (p && p.length) {
                for (let h = 0; h < p.length; h++) b.fieldValue.push(p[h].jobSeqNo);
                if (f && f.length)
                    for (let h = 0; h < f.length; h++) b.outputFields.indexOf(f[h].name) === -1 && (b.outputFields.push(f[h].name), f[h].name.startsWith("pjf") && f[h].settings && f[h].settings.jobTagValue && b.outputFields.push(f[h].settings.jobTagValue))
            } else return [];
            return b.isEagerLoad = !0, a.getDDO(T.ddoKeys.ddoKeyRecentlyViewedJobs, b).then(h => i(h, p))
        }
        const i = (f, p) => {
            if (f && f.data && f.data.jobs) {
                const b = f.data.jobs;
                if (b && Object.keys(b).length)
                    for (const h in p) {
                        const {
                            jobSeqNo: w
                        } = p[h];
                        p[h].active = b[w][0].active, p[h].active === !0 && (p[h] = b[w][0])
                    }
                if (!d.showExpiredJobs) {
                    const h = [];
                    for (let w = 0; w < p.length; w++) p[w].active && h.push(p[w]);
                    p = h
                }
                return p
            }
        };
        return {
            getJobResults: $
        }
    }

    function ht(d, t, o) {
        const n = "ph:profileRecomData";

        function $() {
            return a.getDDO(T.ddoKeys.ddoValidateJwtToken, {
                isEagerLoad: !0
            }).then(f => {
                const p = f.data || {};
                if (p.isValidToken || p.isSocialLogin) return i();
                const b = {};
                return b.jobs = [], a.publishEvent(n, b), a.raiseCustomEvent(n, b), o && (setTimeout(() => {
                    a.publishEvent(n, b), a.raiseCustomEvent(n, b)
                }, 3e3), setTimeout(() => {
                    a.publishEvent(n, b), a.raiseCustomEvent(n, b)
                }, 5e3)), []
            }, f => {})
        }

        function i() {
            return a.getDDO(T.ddoKeys.ddoKeyProfileRecommendations, {
                isEagerLoad: !0
            }).then(f => {
                if (f && f.eid, f = f && f.data || {}, f) {
                    const p = f && f.results || [],
                        b = {};
                    return b.jobs = p || [], b.categories = f.linkedInCategoryWidget || [], a.publishEvent(n, b), a.raiseCustomEvent(n, b), o && (setTimeout(() => {
                        a.publishEvent(n, b), a.raiseCustomEvent(n, b)
                    }, 3e3), setTimeout(() => {
                        a.publishEvent(n, b), a.raiseCustomEvent(n, b)
                    }, 5e3)), !p || !p.length ? {} : f.results
                }
                return {}
            }, f => {
                const p = {};
                p.jobs = [], a.publishEvent(n, p), a.raiseCustomEvent(n, p)
            })
        }
        return {
            getJobResults: $
        }
    }

    function wt() {
        function d() {
            const t = {
                isEagerLoad: !0
            };
            return a.getDDO(T.ddoKeys.ddoKeyJobsYouMightNotThoughtOf, t).then(o => {
                var n;
                return (n = o == null ? void 0 : o.data) == null ? void 0 : n.jobs
            })
        }
        return {
            getJobResults: d
        }
    }

    function yt() {
        function d() {
            const t = {
                isEagerLoad: !0
            };
            return a.getDDO(T.ddoKeys.ddoKeyLeastAppliedJobs, t).then(o => o == null ? void 0 : o.jobs)
        }
        return {
            getJobResults: d
        }
    }

    function St() {
        function d() {
            const t = T.ddoKeys.jobDetailDDOKey,
                o = a.getCachedDDO(t),
                n = o && o.data && o.data.job;
            if (n && n.jobSeqNo) {
                const {
                    jobSeqNo: $
                } = n, i = {
                    jobSeqNo: $
                };
                return a.getDDO(T.ddoKeys.ddokeyPeopleAlsoViewed, i).then(f => f.data.results)
            }
            return new Promise(($, i) => {
                i(new Error("no jobSeqNo found"))
            })
        }
        return {
            getJobResults: d
        }
    }

    function mt() {
        function d() {
            const t = {
                isEagerLoad: !0
            };
            return a.getDDO(T.ddoKeys.ddoKeyRecentlyAddedJobs, t).then(o => {
                var n;
                return (n = o == null ? void 0 : o.data) == null ? void 0 : n.recommendedJobs
            })
        }
        return {
            getJobResults: d
        }
    }

    function kt() {
        function d() {
            if (t()) {
                const n = {
                    isEagerLoad: !0
                };
                return a.getDDO(T.ddoKeys.ddoKeyRecomJobsUserApplies, n).then($ => {
                    var i;
                    return (i = $ == null ? void 0 : $.data) == null ? void 0 : i.results
                })
            }
            return []
        }

        function t() {
            return a.getDDO(T.ddoKeys.ddoValidateJwtToken, {
                isEagerLoad: !0
            }).then(o => {
                const n = o.data || {};
                return n.isValidToken || n.isSocialLogin
            })
        }
        return {
            getJobResults: d
        }
    }

    function Et() {
        function d(t) {
            var n, $, i, f;
            const o = {};
            if (o.outputFields = [], t && t.length)
                for (let p = 0; p < t.length; p++) o.outputFields.push(t[p].name), (($ = (n = t[p]) == null ? void 0 : n.name) == null ? void 0 : $.startsWith("pjf")) && ((f = (i = t[p]) == null ? void 0 : i.settings) == null ? void 0 : f.jobTagValue) && o.outputFields.push(t[p].settings.jobTagValue);
            return a.getDDO(T.ddoKeys.ddoKeySavedJobs, o).then(p => typeof p.result == "object" && Object.keys(p.result).length === 0 ? [] : p.result)
        }
        return {
            getJobResults: d
        }
    }

    function _t(d, t) {
        const o = e.ref(""),
            n = e.ref(),
            $ = e.ref(),
            i = d.urlKey || "search-results",
            f = e.ref({}),
            p = e.ref(!1),
            b = "search-results",
            h = "category";

        function w() {
            return p.value
        }
        async function s() {
            const E = {},
                j = a.getCachedDDO(T.ddoKeys.blogDetailDDOKey);
            return j && j.data && j.data.rk && (o.value = j.data.rk), j && j.data && j.data.numOfJobs && (n.value = j.data.numOfJobs), E.jobs = !0, E.size = n.value || d.maxDisplayCount, E.all_fields = [], E.selected_fields = {}, (o.value || d.rk) && (E.lpKey = [o.value || d.rk]), d.sort && (E.sortBy = d.sort), d.selectedOrder && d.selectedOrder.length && delete E.size, a.getDDO(T.ddoKeys.ddoTargtedJobs, E).then(D => {
                var R, L, v;
                return p.value = (D == null ? void 0 : D.totalHits) > ((L = (R = D == null ? void 0 : D.data) == null ? void 0 : R.jobs) == null ? void 0 : L.length), $.value = D == null ? void 0 : D.totalHits, o.value = o.value || (D == null ? void 0 : D.lpKey), A(d.selectedOrder, (v = D == null ? void 0 : D.data) == null ? void 0 : v.jobs)
            })
        }

        function A(E, j) {
            try {
                if (E = E && E.split(","), E && E.length > 0) {
                    const D = [];
                    return E.forEach(R => {
                        const L = j.find(v => v.jobSeqNo === R);
                        L && D.push(L)
                    }), D
                }
            } catch {}
            return j
        }

        function O() {
            var E, j;
            if (d.url && d.url.trim().length) return d.url.indexOf("//:") !== -1 ? d.url : `${a.phAppStore.baseUrl}/${d.url}`;
            if (i === b) {
                let D = "";
                const R = (j = (E = a.phAppStore.eagerLoadParams) == null ? void 0 : E.lpKey) == null ? void 0 : j[0];
                return (o.value || d.rk || R) && (D = `rk=${o.value||d.rk||R}`), d.sort && (D = D.length ? `${D}&` : D, D += `sortBy=${encodeURIComponent(d.sort)}`), a.getUrl(b, {}, D)
            }
            if (i === h) return a.getUrl(h, {
                category: _(h)
            }, "")
        }

        function _(E) {
            if (E) {
                const j = f[E];
                if (j && j[0]) return j[0]
            }
        }
        return {
            getJobResults: s,
            ctaUrl: O,
            rkValue: o,
            jobCount: n,
            totalCount: $,
            showMoreBtn: p,
            getShowMoreButtonEnabled: w
        }
    }
    const Le = "phw-tref",
        Tt = "phw-tk",
        Dt = "phw-tag",
        xe = "phw:job:save-toast-trigger";

    function Re(d, t, o) {
        const n = "phw-click-ctx",
            $ = "ph:ex:jobCartUpdatedCount",
            i = "job_unfavorited",
            f = "job_added_to_jobcart",
            p = "jobCartUpdated",
            b = e.ref(!1);
        b.value = a.getSiteSettings("saveJobToastEnable") || !1;

        function h(_, E, j, D, R, L) {
            const v = w(R);
            L = L || a.getUrl(E, j, v);
            const C = _;
            return C && C.setAttribute && (C.setAttribute(n, E), C.setAttribute("href", L)), C && C.getAttribute && C.getAttribute(Tt) && (C.setAttribute(Le, new Date().getTime() + ((1 + Math.random()) * 65536 || 0).toString(16).substring(0)), C.setAttribute(Dt, D), a.storePageTrackEventData(C.getAttribute(Le), j)), L
        }

        function w(_) {
            let E = "";
            if (_) try {
                let j = "";
                const D = "&";
                _ = _.trim();
                const R = D + _,
                    L = /&[a-zA-Z0-9\s]+\=/g,
                    v = R.match(L);
                if (v) {
                    const C = R.split(L);
                    for (let F = 0; F < v.length; F++) {
                        const W = v[F];
                        W && C[F + 1] && (j += W + encodeURIComponent(C[F + 1]))
                    }
                    j = j.replace("&", "")
                }
                E = j
            } catch {}
            return E
        }

        function s(_) {
            if (_) {
                const E = document.createElement("span");
                E.setAttribute("class", "phw-visually-hidden"), E.setAttribute("aria-live", "assertive"), E.setAttribute("aria-atomic", "true"), document.body.appendChild(E), setTimeout(() => {
                    E.innerText = _, setTimeout(() => {
                        E.remove()
                    }, 300)
                }, 100)
            }
        }

        function A(_, E) {
            _.isJobSaved = !0;
            const j = {
                jobSeqNo: _.jobSeqNo
            };
            a.getDDO(T.ddoKeys.ddoKeyAddToCart, j).then(D => {
                if (_.inProgress = !1, D.status === 602) {
                    const R = {
                        jobSeqNo: _.jobSeqNo,
                        category: _.category
                    };
                    _.isJobSaved = !0, _.saveJobInterState = !0, a.raiseCustomEvent($, ""), a.publishEvent(p, {
                        jobSeqNo: _.jobSeqNo,
                        widgetType: d.widgetType || E
                    }), a.trackWidgetClick(t.value, f, R), a.publishEvent(xe, {
                        type: "success",
                        action: "save",
                        showCTA: !0
                    })
                } else _.isJobSaved = !1, _.saveJobInterState = !1
            }).catch(() => {
                _.isJobSaved = !1
            })
        }

        function O(_, E, j, D, R) {
            _.isJobSaved = !1, E || (E = {
                jobSeqNo: _.jobSeqNo
            }), a.getDDO(T.ddoKeys.ddoKeyDeleteFromCart, E).then(L => {
                var v, C;
                if (_.inProgress = !1, L.status === 605) {
                    const F = {
                        jobSeqNo: _.jobSeqNo,
                        category: _.category
                    };
                    _.isJobSaved = !1, _.saveJobInterState = !1, a.raiseCustomEvent($, ""), a.publishEvent(p, {
                        delete: !0,
                        jobSeqNo: _.jobSeqNo,
                        widgetType: d.widgetType || R,
                        hideShowMore: j === !1,
                        index: D || 0
                    }), !b.value && s((C = (v = o == null ? void 0 : o.value) == null ? void 0 : v.jobWidget) == null ? void 0 : C.removedTextForSceenReader), a.trackWidgetClick(t.value, i, F), a.publishEvent(xe, {
                        type: "success",
                        action: "unsave",
                        showCTA: !1,
                        index: D
                    })
                } else _.isJobSaved = !0, _.saveJobInterState = !0
            }).catch(() => {
                _.isJobSaved = !0
            })
        }
        return {
            getJobUrl: h,
            deleteJobFromCart: O,
            addToJobCart: A
        }
    }

    function jt(d) {
        const t = e.ref();

        function o() {
            const $ = {},
                i = T.ddoKeys.jobDetailDDOKey,
                f = a.getCachedDDO(i),
                p = f && f.data && f.data.job || {};
            if (p && p.jobSeqNo) return t.value = p.jobSeqNo, $.jobSeqNo = t.value, n($)
        }

        function n($) {
            return a.getDDO(T.ddoKeys.ddoKeySimilarJobs, $).then(i => {
                if (i && i.data && i.data.similarJobs) return i.data.similarJobs || []
            }, i => {})
        }
        return {
            getJobResults: o
        }
    }

    function Bt() {
        const d = "appliedJobs";

        function t(o) {
            const n = {};
            if (n.outputFields = [], o && o.length)
                for (let $ = 0; $ < o.length; $++) n.outputFields.indexOf(o[$].name) === -1 && n.outputFields.push(o[$].name);
            return n.outputFields.indexOf("title") === -1 && n.outputFields.push("title"), a.getDDO(T.ddoKeys.ddoKeyMyApplications, n).then($ => (a.publishEvent("MY_APPLICATION_JOB_RESULTS", $.data && $.data[d] || []), $ && $.status === "success" && $.data ? $.data[d] || [] : []))
        }
        return {
            getJobResults: t
        }
    }

    function Jt() {
        const d = "fetchApplicationsWithStatus",
            t = "applicationNextStatus",
            o = "appliedJobs",
            n = "jobwidgetsettings",
            $ = e.ref([]),
            i = e.ref([]),
            f = e.ref([]),
            p = e.ref(!1),
            b = e.ref([]);

        function h() {
            p.value = !1
        }

        function w() {
            p.value = !0
        }

        function s(O) {
            return new Promise((_, E) => {
                try {
                    const j = {};
                    O && O.data.appliedJobs ? (b.value = O.data.appliedJobs.map(D => D.hiringStatusRefId), j.hiringStatusRefId = [...b.value], j.ddoKey = t, a.getDDO(t, j).then(D => {
                        $.value = D, h(), _()
                    }).catch(D => {
                        console.error("Error fetching hiring status:", D), E(D)
                    })) : _()
                } catch (j) {
                    h(), E(j)
                }
            })
        }
        async function A() {
            return new Promise((O, _) => {
                try {
                    w(), a.getDDO(n, {}).then(E => {
                        var D, R, L, v;
                        const j = {};
                        j.outputFields = [], E && E.data && (f.value = ((R = (D = E.data.widgets) == null ? void 0 : D["phw-my-application-jobs"]) == null ? void 0 : R.fields) || ((v = (L = E.data.widgets) == null ? void 0 : L["ph-my-applications-v1"]) == null ? void 0 : v.fields) || E.data.fields || []);
                        for (let C = 0; C < f.value.length; C++) j.outputFields.includes(f.value[C].name) || j.outputFields.push(f.value[C].name);
                        a.getDDO(d, j).then(async C => {
                            C && C.status === "success" && C.data ? (i.value = C.data[o] || [], await s(C)) : i.value = [], h(), O()
                        }).catch(C => {
                            console.error("Error fetching applications:", C), h(), _(C)
                        })
                    })
                } catch (E) {
                    _(E)
                }
            })
        }
        return {
            getMyApplications: A,
            jobResults: i,
            showLoader: p,
            jobFields: f,
            jobHiringStatus: $
        }
    }

    function Nt() {
        function d(t) {
            const o = {};
            if (o.outputFields = [], t && t.length)
                for (let n = 0; n < t.length; n++) o.outputFields.push(t[n].name), t[n].name.startsWith("pjf") && t[n].settings && t[n].settings.jobTagValue && o.outputFields.push(t[n].settings.jobTagValue);
            return o.isEagerLoad = !0, a.getDDO(T.ddoKeys.ddoKeyRecomJobsInterestedCategory, o).then(n => {
                var $, i, f, p;
                return (($ = n == null ? void 0 : n.data) == null ? void 0 : $.results[0]) && ((i = n == null ? void 0 : n.data) == null ? void 0 : i.results[0].response) && ((f = n == null ? void 0 : n.data) == null ? void 0 : f.results[0].response.length) ? (p = n == null ? void 0 : n.data) == null ? void 0 : p.results[0].response : []
            })
        }
        return {
            getJobResults: d
        }
    }

    function At() {
        function d(t) {
            const o = {};
            if (o.outputFields = [], t && t.length)
                for (let n = 0; n < t.length; n++) o.outputFields.push(t[n].name), t[n].name.startsWith("pjf") && t[n].settings && t[n].settings.jobTagValue && o.outputFields.push(t[n].settings.jobTagValue);
            return o.isEagerLoad = !0, a.getDDO(T.ddoKeys.ddoKeyCompleteYourApplication, o)
        }
        return {
            getJobResults: d
        }
    }

    function Pt() {
        function d(t) {
            const o = {};
            if (o.outputFields = [], t && t.length)
                for (let n = 0; n < t.length; n++) o.outputFields.push(t[n].name), t[n].name.startsWith("pjf") && t[n].settings && t[n].settings.jobTagValue && o.outputFields.push(t[n].settings.jobTagValue);
            return o.isEagerLoad = !0, a.getDDO(T.ddoKeys.ddoKeyRecomBasedJobCart, o).then(n => n == null ? void 0 : n.recommendations)
        }
        return {
            getJobResults: d
        }
    }

    function Ot() {
        function d(t) {
            const o = {};
            if (o.outputFields = [], t && t.length)
                for (let n = 0; n < t.length; n++) o.outputFields.push(t[n].name), t[n].name.startsWith("pjf") && t[n].settings && t[n].settings.jobTagValue && o.outputFields.push(t[n].settings.jobTagValue);
            return o.isEagerLoad = !0, a.getDDO(T.ddoKeys.ddoKeyPeopleAlsoApplied, o).then(n => {
                var $;
                return ($ = n == null ? void 0 : n.data) == null ? void 0 : $.results
            })
        }
        return {
            getJobResults: d
        }
    }

    function Ct() {
        function d(o) {
            return a.getDDO(T.ddoKeys.ddoKeyEventAssociatedJobs, o).then(n => n && n.data ? n.data || [] : null)
        }

        function t() {
            const o = {},
                n = T.ddoKeys.ddoKeyEventDetail,
                $ = a.getCachedDDO(n),
                i = $ && $.data && $.data.eventScheduleId;
            return i ? (o.eventScheduleId = i, o.from = 0, o.size = 10, d(o)) : null
        }
        return {
            getJobResults: t
        }
    }
    const Be = e.ref(!1);

    function Fe(d, t) {
        const o = "ext_trk",
            n = "jobCartUpdated",
            $ = "smart_tags_loaded",
            i = "fit_level_loaded",
            f = "navItems",
            p = "ph:JobStatusList",
            b = "phw:save_job_toast_load",
            h = "applicationWithDraw",
            w = "getUserProfileData",
            s = e.ref([]),
            A = e.ref([]),
            O = e.ref([]),
            _ = e.ref({}),
            E = e.ref({}),
            j = e.ref(!1),
            D = e.ref(),
            R = e.ref(),
            L = e.ref({}),
            v = e.ref([]),
            C = e.ref({}),
            F = e.ref({}),
            W = e.ref({}),
            ee = e.ref(!1),
            Y = e.ref(!1),
            te = e.ref(!1),
            de = e.ref({}),
            ne = e.ref({}),
            Z = e.ref(!1);
        j.value = !1, e.ref();
        const H = e.ref(),
            P = e.ref(!0),
            U = e.ref(!1),
            K = e.ref(5),
            ae = e.ref(!1),
            X = e.ref(!1);
        let pe = "";
        const ye = e.ref([]),
            ie = e.ref(!1),
            se = e.ref(!1),
            re = e.ref(d.showErrorMsg),
            oe = Je().get(o),
            he = a.getSiteSettings("isHvhishvhjobApply"),
            le = _t(d),
            g = e.ref(!1),
            y = e.ref(!0),
            M = async () => {
                d.jobResults && (ae.value = !0), P.value = !d.hideActions, a.subscribeEvent(w, l => {
                    d.widgetType === T.widgetTypes.PROFILE_RECOM_JOBS && G().then(() => {
                        d.maxDisplayCount <= s.value.length ? (H.value = d.maxDisplayCount, X.value = !0, U.value = !0, P.value = !0) : (H.value = s.value.length, X.value = !1, U.value = !1, P.value = !1)
                    })
                }), B(), await z().then(async () => {
                    await G(!0)
                })
            };

        function B() {
            a.subscribeEvent(n, l => {
                if (d.widgetType === T.widgetTypes.SAVED_JOBS) G().then(() => {
                    var c;
                    l.delete && l.hideShowMore && (U.value = !1, H.value = s.value.length, s.value.length > K.value ? X.value = !0 : X.value = !1), ((c = s.value) == null ? void 0 : c.length) > K.value && (P.value = !0), l.delete && e.nextTick(() => {
                        var k;
                        if (l.index !== 0) {
                            const u = t.value.querySelector(`[data-access-list-item="${l.index-1}"]`);
                            u && u.focus()
                        } else {
                            const u = t.value.querySelector(`[data-access-list-item="${l.index}"]`);
                            u && u.focus()
                        }
                        if (!((k = s.value) != null && k.length)) {
                            const u = t.value.querySelector(".phw-s-find-jobs");
                            u && u.focus();
                            const S = document.querySelector(".phw-s-dashboard-heading-txt");
                            S && S.setAttribute("tabindex", "-1"), setTimeout(() => {
                                S && S.focus()
                            }, 100), setTimeout(() => {
                                S && S.removeAttribute("tabindex")
                            }, 300)
                        }
                    })
                });
                else if (d.widgetType !== l.widgetType && (s == null ? void 0 : s.value) && s.value.length) {
                    for (let c = 0; c < s.value.length; c++)
                        if (s.value[c].jobSeqNo === l.jobSeqNo) {
                            (l.delete && s.value[c].isJobSaved || !l.delete && !s.value[c].isJobSaved) && (s.value[c].isJobSaved = !s.value[c].isJobSaved);
                            break
                        }
                }
            })
        }
        e.watch(() => d.jobResults, () => {
            G()
        }), e.watch(s, (l, c) => {
            (s == null ? void 0 : s.value) && (s == null ? void 0 : s.value.length) ? (s.value.length > K.value && !d.hideActions && (U.value = !0, X.value = !0, P.value = !0), a.addJobContext(d.widgetType, s.value), a.isCrawlerUserAgent() || z().then(() => {
                $e()
            }), te.value ? (st(), at(), rt()) : z().then(() => {
                te.value = !0, st(), at(), rt()
            }), Se(d.clickTojd, d.trackEventName, d.widgetType, void 0), (d.jobsDisplayMode === "all" || (s == null ? void 0 : s.value.length) <= K.value) && (H.value = s.value.length, P.value = !1), P.value && (U.value = !0, X.value = !0, H.value = K.value, d.jobCount && parseInt(d.jobCount, 10) && (H.value = parseInt(d.jobCount, 10))), we(), x()) : N()
        });

        function r() {
            ie.value = !1
        }

        function m() {
            ie.value = !0
        }

        function N(l) {
            r(), d.isErrorMsgReqd ? re.value = !0 : V()
        }

        function V() {
            t.value && t.value instanceof HTMLElement && t.value.style && (t.value.style.display = "none")
        }

        function x() {
            t.value && t.value instanceof HTMLElement && t.value.style && (t.value.style.display = "block")
        }

        function G(l = !1) {
            return new Promise((c, k) => {
                d.jobResults ? (s.value = d.jobResults, ae.value = !0, d.maxDisplayCount ? K.value = d.maxDisplayCount : K.value = s.length, r(), we(), c({})) : (m(), Q(d.widgetType, l).then(u => {
                    s.value = u, d.maxDisplayCount ? K.value = d.maxDisplayCount : K.value = s.value.length, d.widgetType === T.widgetTypes.TARGETED_JOBS && le.getShowMoreButtonEnabled() && (U.value = !0), r(), we(), !(s != null && s.value) || !s.value.length ? N() : re.value = !1, c({})
                }).catch(u => {
                    N(), r()
                }))
            })
        }
        async function Q(l, c = !1) {
            switch (l) {
                case T.widgetTypes.NEARBY_JOBS:
                    return await ft(d).getJobResults();
                case T.widgetTypes.LATEST_JOBS:
                    return await ut().getJobResults();
                case T.widgetTypes.RECOM_JOBS_BROWSING_HISTORY:
                    return await bt(d).getJobResults();
                case T.widgetTypes.RECENTLY_VIEWED:
                    return await pt(d).getJobResults(A.value);
                case T.widgetTypes.PROFILE_RECOM_JOBS:
                    return await ht(d, t, c).getJobResults();
                case T.widgetTypes.JOBS_YOU_MIGHT_NOT_THOUGH_OF:
                    return await wt().getJobResults();
                case T.widgetTypes.LEAST_APPLIED_JOBS:
                    return await yt().getJobResults();
                case T.widgetTypes.PEOPLE_ALSO_VIEWED:
                    return await St().getJobResults();
                case T.widgetTypes.RECENTLY_ADDED_JOBS:
                    return await mt().getJobResults();
                case T.widgetTypes.RECOM_BASED_APPLIES:
                    return await kt().getJobResults();
                case T.widgetTypes.TARGETED_JOBS:
                    return await le.getJobResults();
                case T.widgetTypes.SAVED_JOBS:
                    return await Et().getJobResults(A.value);
                case T.widgetTypes.SIMILAR_JOBS:
                    return await jt().getJobResults();
                case T.widgetTypes.MY_APPLICATION_JOBS:
                    return await Bt().getJobResults(A.value);
                case T.widgetTypes.JOBS_IN_INTERESTED_CATEGORY:
                    return await Nt().getJobResults(A.value);
                case T.widgetTypes.COMPLETE_YOUR_APPLICATIONS:
                    return await At().getJobResults(A.value);
                case T.widgetTypes.RECOM_BASED_JOB_CART:
                    return await Pt().getJobResults(A.value);
                case T.widgetTypes.PEOPLE_ALSO_APPLIED:
                    return await Ot().getJobResults(A.value);
                case T.widgetTypes.EVENT_ASSOCIATED_JOBS:
                    return await Ct().getJobResults()
            }
        }

        function $e() {
            var k;
            const l = {
                    jobSeqNo: [],
                    requiredTags: [],
                    size: s == null ? void 0 : s.value.length,
                    avoidWidgetHideOnFail: !0
                },
                c = {
                    jobIdentifierList: [],
                    outputFields: [],
                    size: s == null ? void 0 : s.value.length,
                    avoidWidgetHideOnFail: !0
                };
            s == null || s.value.forEach(u => {
                u.jobSeqNo && l.jobSeqNo.push(u.jobSeqNo), u.jobSeqNo && c.jobIdentifierList.push(u.jobSeqNo)
            }), (k = D == null ? void 0 : D.value) == null || k.then(u => {
                u && !u.enabled || (l.tagLimit = L.value.layout && L.value.layout.maxDisplayCount || 1, fe(l))
            }), R.value.then(u => {
                u && !u.enabled || ce(c)
            })
        }

        function ce(l) {
            F.value && F.value.fits && F.value.fits.length && W.value.allowedWidgets && W.value.allowedWidgets.indexOf(d.widgetType) !== -1 ? (F.value && F.value.requiredFields && F.value.requiredFields.length && F.value.requiredFields.forEach(c => {
                l.outputFields.push(c)
            }), a.getDDO(T.ddoKeys.ddoKeyFetchFitScore, l).then(c => {
                if (c.data && c.data.jobFitScores) {
                    const k = c.data.jobFitScores,
                        u = [],
                        S = {};
                    let I = 0;
                    for (const J in k) k[J] && k[J].fitLevel && u.indexOf(k[J].fitLevel) === -1 && u.push(k[J].fitLevel);
                    s == null || s.value.forEach(J => {
                        if (J.fitEnabled = !0, J.fitLevelAvailable = !1, J.fitsForOtherJobs = u, k[J.jobSeqNo] && k[J.jobSeqNo].data && (J.fitLevel = k[J.jobSeqNo].data.fitLevel, k[J.jobSeqNo].data.skillGap && (J.matchingSkills = k[J.jobSeqNo].data.skillGap), J.fitLevel)) {
                            J.fitLevelAvailable = !0, J.fitForTheJob = J.fitLevel;
                            const q = u.slice(),
                                Ie = q.indexOf(J.fitLevel);
                            q.splice(Ie, 1), J.fitsForOtherJobs = q, S[J.jobSeqNo] = J.fitForTheJob, I++
                        }
                    }), a.trackWidgetClick(t.value, i, {
                        jobsFitLevel: S,
                        totalJobs: s.value.length,
                        availableFitLevelCount: I
                    }), Y.value = !0
                }
            })) : (Y.value = !0, ge())
        }

        function ge() {
            if (s != null && s.value.length) {
                const l = {},
                    c = [];
                let k = 0;
                s == null || s.value.forEach(u => {
                    u.fitLevel && c.push(u.fitLevel)
                }), c.length && (s == null || s.value.forEach(u => {
                    if (u.fitLevel) {
                        u.fitLevelAvailable = !0, u.fitForTheJob = u.fitLevel;
                        const S = c.slice(),
                            I = S.indexOf(u.fitLevel);
                        S.splice(I, 1), u.fitsForOtherJobs = S, l[u.jobSeqNo] = u.fitForTheJob, k++
                    }
                })), a.trackWidgetClick(t.value, i, {
                    jobsFitLevel: l,
                    totalJobs: s == null ? void 0 : s.value.length,
                    availableFitLevelCount: k
                })
            }
        }

        function fe(l) {
            v.value && v.value.length && (v.value.forEach(c => {
                l.requiredTags.push(c.name)
            }), ee.value = !1, a.getDDO(T.ddoKeys.ddoKeySmartJobTags, l).then(c => {
                if (c.data && c.data.jobTags) {
                    const k = c.data.jobTags,
                        u = [],
                        S = {};
                    let I = 0;
                    C.value = {};
                    for (const J in k) k[J].length && k[J].forEach(q => {
                        C.value[J] = C.value[J] || {}, C.value[J][q.tag] = q, u.indexOf(q.tag) === -1 && u.push(q.tag)
                    });
                    s == null || s.value.forEach(J => {
                        if (J.jobTagEnabled = !0, J.smartTagsAvailable = !1, J.tagsForOtherJobs = u, C.value[J.jobSeqNo]) {
                            J.smartTagsAvailable = !0, J.tagsForTheJob = Object.keys(C.value[J.jobSeqNo]);
                            const q = u.slice();
                            J.tagsForTheJob.forEach(Ie => {
                                const dn = q.indexOf(Ie);
                                q.splice(dn, 1)
                            }), J.tagsForOtherJobs = q, S[J.jobSeqNo] = J.tagsForTheJob, I++
                        }
                    }), ee.value = !0, a.trackWidgetClick(t.value, $, {
                        smartJobTags: S,
                        totalJobs: s.value.length,
                        availableJobTagCount: I
                    })
                }
            }))
        }

        function ue() {
            for (let l = 0; l < O.value.length; l++)
                if (O.value[l].name === "addToCart" || O.value[l].name === "removeFromCart") {
                    j.value = !0;
                    break
                }
            return j.value
        }

        function be(l) {
            const c = [];
            for (let u = 0; u < l.length; u++) {
                const S = l[u].jobSeqNo;
                c.push(S)
            }
            const k = {
                jobSeqNos: c
            };
            return a.getDDO(T.ddoKeys.ddoKeyGetJobStatus, k).then(u => {
                if (r(), u && u.data) {
                    const S = u.data;
                    for (let I = 0; I < l.length; I++) {
                        const J = l[I].jobSeqNo;
                        l[I].isJobSaved = S[J] || !1, l[I].saveJobInterState = S[J] || !1
                    }
                }
                return l
            })
        }

        function Ee() {
            if (!a.isCrawlerUserAgent()) {
                const l = [];
                for (const k of s.value) s.value.isJobSaved = null, s.value.saveJobInterState = null, s.value.inProgress = !1, l.push(k.jobSeqNo);
                const c = {
                    jobSeqNos: l
                };
                return a.getDDO(T.ddoKeys.ddoKeyGetJobStatus, c).then(k => {
                    if (r(), k && k.data) {
                        const u = k.data;
                        a.publishEvent(p, u);
                        for (const S of s == null ? void 0 : s.value) S.isJobSaved = u[S.jobSeqNo] || !1, S.saveJobInterState = u[S.jobSeqNo] || !1
                    }
                })
            }
            return new Promise(l => {
                l({})
            })
        }

        function we() {
            j.value && (s == null ? void 0 : s.value) && Ee()
        }

        function Se(l, c, k, u) {
            if (s.value = u || s.value, s.value && s.value.length) {
                for (let S = 0; S < s.value.length; S++)
                    if (s.value[S]) {
                        const I = `${a.phAppStore.baseUrl}apply?jobSeqNo=${s.value[S].jobSeqNo}`;
                        if (!s.value[S].overriddenExternalApply) {
                            const J = a.getSiteSettings("igonreExternalHvhApply");
                            if (he && !J) {
                                const q = a.getRawUrl("forwardApply");
                                q && (s.value[S].applyUrl = I.replace("apply?", `${q}?`))
                            } else(Object.prototype.hasOwnProperty.call(s.value[S], "externalApply") && !s.value[S].externalApply || !Object.prototype.hasOwnProperty.call(s.value[S], "externalApply")) && (s.value[S].applyUrl = I)
                        }
                        s.value[S].jobUrl = s.value[S].jobUrl || Re(d, t).getJobUrl(void 0, "job", s.value[S], k), l ? (s.value[S].actionUrl = s.value[S].jobUrl, s.value[S].actionEventName = c) : (s.value[S].actionUrl = me(s.value[S].applyUrl), s.value[S].actionUrl = Te(S, s.value[S].actionUrl), s.value[S].actionUrl = _e(s.value[S].actionUrl), s.value[S].actionEventName = "apply_click"), s.value[S].eventName = c
                    }
            }
        }

        function _e(l) {
            try {
                const c = new URL(l);
                return ["utm_source", "utm_campaign", "utm_medium", "utm_content", "utm_term"].forEach(u => {
                    const S = Je().get(u);
                    S && !c.searchParams.get(u) && c.searchParams.set(u, S)
                }), c.toString()
            } catch (c) {
                return console.error("Error in appending UTM params from cookies", c), l
            }
        }

        function me(l) {
            if (!l) return;
            let c = l;
            return c = l.indexOf("http") === -1 ? a.phAppStore.baseUrl + c : c, s.value.hasOwnProperty("externalTracking") && (s.value.externalTracking === "true" || s.value.externalTracking === !0) && oe && (c += c.indexOf("?") !== -1 ? "&" : "?", c += oe), c
        }

        function Te(l, c) {
            try {
                return s.value[l].hasOwnProperty("externalTracking") && (s.value[l].externalTracking === "true" || s.value[l].externalTracking === !0) && oe && (c += c.indexOf("?") !== -1 ? "&" : "?", c += oe), c
            } catch (k) {
                return console.error("Error in appending external tracking", k), c
            }
        }

        function z() {
            let l = {},
                c, k;
            return a.getDDO(T.ddoKeys.ddoKeyJobWidgets, {}).then(u => {
                const S = "ph-my-applications-v1";
                if (u && u.data)
                    if (u.data.widgets && u.data.widgets[d.widgetType] ? (l = u.data.widgets[d.widgetType], c = l.fields, k = l.actions) : (d == null ? void 0 : d.widgetType) === "phw-my-application-jobs" && u.data.widgets[S] && (l = u.data.widgets[S], c = l == null ? void 0 : l.fields, k = l == null ? void 0 : l.actions), A.value = c || u.data.fields || [], d.widgetType === "phw-apply-thank-you") O.value = [];
                    else if (d.widgetType === "phw-my-application-jobs")
                    for (const I of k || u.data.actions) O.value = I.name === "addToCart" ? [I] : [];
                else O.value = k || u.data.actions || [];
                Xa(), Qa(), ue(), nt(), a.isCrawlerUserAgent() || (R.value = De(), D.value = Ce()), te.value = !0
            })
        }

        function De() {
            const l = a.getSiteSettings(f);
            if (l && l.fitScore) {
                let c = {},
                    k = {},
                    u;
                const S = {
                    feature: "fitScore",
                    fieldMap: {
                        fieldName: "jobFits",
                        finalFieldName: "jobWidgetFits"
                    },
                    avoidWidgetHideOnFail: !0
                };
                return a.getDDO(T.ddoKeys.ddoKeyFitScore, S).then(I => {
                    c = I && I.data && I.data.jobWidgetFits, c && (W.value = c.settings || {}, c.widgets && c.widgets[d.widgetType] && (k = c.widgets[d.widgetType], u = k.jobFits), F.value = u || c.jobFits || {}), Oe()
                })
            }
            return new Promise((c, k) => {
                c({
                    enabled: !1
                })
            })
        }

        function Oe() {
            try {
                const l = t.value.getAttribute("job-fits");
                F.value = l && JSON.parse(l) || F.value || {}
            } catch {}
            F.value.fits = F.value.fits || [], F.value.fits.forEach(l => {
                ne.value[l.name] = l
            })
        }

        function Ce() {
            const l = a.getSiteSettings(f);
            if (l && l.jobTags) {
                let c = {},
                    k = {},
                    u;
                const S = {
                    feature: "jobTags",
                    fieldMap: {
                        fieldName: "jobTags",
                        finalFieldName: "jobWidgetTags"
                    },
                    avoidWidgetHideOnFail: !0
                };
                return a.getDDO(T.ddoKeys.ddoKeyJobTags, S).then(I => {
                    c = I.data && I.data.jobWidgetTags, c && (c.widgets && c.widgets[d.widgetType] && (k = c.widgets[d.widgetType], u = k.jobTags), L.value = u || c.jobTags || {}), Me()
                })
            }
            return new Promise((c, k) => {
                c({
                    enabled: !1
                })
            })
        }

        function Me() {
            try {
                const l = t.value.getAttribute("job-tags");
                L.value = l && JSON.parse(l) || L.value || {}
            } catch {}
            L.value.tags = L.value.tags || [], v.value = L.value.tags, v.value.forEach(l => {
                de.value[l.name] = l
            })
        }

        function at() {
            if (_.value.hasOwnProperty("pjfJobImages")) {
                const l = _.value.pjfJobImages,
                    c = l.settings && l.settings.jobTagValue || "category";
                let k;
                const u = {
                    jobField: c,
                    tags: [],
                    jobWidget: d.widgetType,
                    imageType: "jobImage"
                };
                (s == null ? void 0 : s.value) && s.value.length && s.value.forEach(S => {
                    S.hasOwnProperty(c) && !u.tags.includes(`jobImage#${S[c]}`) && u.tags.push(`jobImage#${S[c]}`)
                }), a.getDDO(T.ddoKeys.jobImageBasedOnTags, u).then(S => {
                    k = S && S.data || {}, ((s == null ? void 0 : s.value) || []).forEach(I => {
                        if (k.hasOwnProperty(`jobImage#${I[c]}`)) {
                            const J = k[`jobImage#${I[c]}`];
                            I.image = J && J.length > 0 && J[0] && J[0]
                        }
                    })
                })
            }
        }

        function nt(l) {
            l = l || A.value;
            for (let c = 0; c < l.length; c++)
                if (l[c] && l[c].settings && l[c].settings.displayType === "modal") {
                    Z.value = !0;
                    return
                }
            Z.value = !1
        }

        function Ya(l, c) {
            y.value = !0, Be.value = !1;
            let k = "",
                u = "",
                S = "";
            l && c ? (u = l[c.name], u.showPopUp = !0, k = t.value.querySelector(`.${l.jobSeqNo}_jobModal_${c.name}`), S = "phw-a11y-modal-area") : (g.value = !0, k = "", pe = l.jobId, u = g, S = "phw-a11y-modal-area-withdrawal"), e.nextTick(() => {
                const I = t.value.querySelector(".phw-modal-close"),
                    J = d.isHighVolumeHire || !1;
                a.dialogModal.openDialogPopup(t.value, S, k, I, it.bind(this, u), J)
            })
        }
        const it = l => {
            l.showPopUp = !1, ot()
        };

        function Za(l) {
            Be.value || (se.value = !1, it(l), a.dialogModal.closeDialogPopup(), ot())
        }

        function ot() {
            const l = document.querySelector(`.job-${pe}`);
            l && setTimeout(() => l == null ? void 0 : l.focus(), 50)
        }

        function Xa() {
            try {
                const c = t.value.getAttribute("job-fields");
                A.value = c && JSON.parse(c) || A.value
            } catch {}
            const l = [];
            A.value.forEach(c => {
                _.value[c.name] = c, (c.name === "multi_location" || c.name === "multi_category") && l.push(c)
            }), l && l.length && l.forEach(c => {
                const k = A.value.indexOf(c);
                A.value.splice(0, 0, A.value.splice(k, 1)[0])
            })
        }

        function Qa() {
            try {
                const c = t.value.getAttribute("job-actions");
                O.value = c && JSON.parse(c) || O.value
            } catch {}
            O.value.forEach(c => {
                E.value[c.name] = c
            }), O.value.find(c => c.name === "addToCart") && a.raiseCustomEvent(b, {})
        }

        function st() {
            _.value.hasOwnProperty("pjfSmartHighlights") && (s == null ? void 0 : s.value) && s.value.length && s.value.forEach(l => {
                if (l.hasOwnProperty("ml_job_parser") && l.ml_job_parser.hasOwnProperty("ml_job_cards")) {
                    const c = l.ml_job_parser.ml_job_cards;
                    l.smartHighlights = c
                }
            })
        }

        function rt() {
            if (_.value.hasOwnProperty("pjfJobBadges")) {
                const l = _.value.pjfJobBadges,
                    c = l.settings && l.settings.jobTagValue || "category",
                    k = en(c) || c;
                let u;
                const S = {
                    jobField: k,
                    tags: [],
                    jobWidget: d.widgetType,
                    imageType: "jobBadge"
                };
                (s == null ? void 0 : s.value) && s.value.length && s.value.forEach(I => {
                    I.hasOwnProperty(k) && !S.tags.includes(`jobBadge#${I[k]}`) && S.tags.push(`jobBadge#${I[k]}`)
                }), a.getDDO(T.ddoKeys.jobImageBasedOnTags, S).then(I => {
                    u = I && I.data || {}, ((s == null ? void 0 : s.value) || []).forEach(J => {
                        if (u.hasOwnProperty(`jobBadge#${J[k]}`)) {
                            const q = u[`jobBadge#${J[k]}`];
                            J.badgeImage = q && q.length > 0 && q[0] && q[0]
                        }
                    })
                })
            }
        }

        function en(l) {
            switch (l) {
                case "companyLogo":
                    return "companyName";
                case "countryFlag":
                    return "country";
                case "categoryIcon":
                    return "category";
                case "default":
                    return l
            }
        }
        async function tn(l) {
            if (Be.value) return;
            const c = {
                applicationData: l,
                ddoKey: h
            };
            ct(!0);
            const k = await a.getDDO(T.ddoKeys.ddoKeyWithdrawalMenu, c),
                u = document.querySelector(".phw-modal-close");
            k && k.status === "success" ? (await Jt().getMyApplications(), setTimeout(() => {
                $t(!0)
            }, 500), e.nextTick(() => {
                lt(u)
            })) : (setTimeout(() => {
                $t(!1)
            }, 500), e.nextTick(() => {
                lt(u)
            }))
        }

        function lt(l) {
            l && setTimeout(() => {
                l == null || l.focus();
                const c = se.value ? "Application withdrawal successful. Close dialogue." : "Application withdrawal failed. Close dialogue.";
                l.setAttribute("aria-label", c), setTimeout(() => {
                    l.setAttribute("aria-label", "Close dialogue")
                }, 2e3)
            }, 500)
        }

        function $t(l) {
            se.value = l, y.value = !1, ct(!1)
        }

        function ct(l) {
            Be.value = l
        }
        return {
            getJobResults: G,
            fetchJobWidgetSettings: z,
            init: M,
            isEnableShowMore: X,
            jobResults: s,
            jobFields: A,
            jobActions: O,
            enabledFields: _,
            enabledActions: E,
            cardsToDisplay: H,
            isShowMore: U,
            showMoreCount: K,
            seemoretext: P,
            isBulkcartEnable: j,
            enabledFits: ne,
            enabledTags: de,
            jobFits: F,
            jobTags: v,
            jobTagsConfig: L,
            fitDataLoaded: Y,
            jobFitsSettConfig: W,
            tagsDataLoaded: ee,
            jobTagsData: C,
            isSearchResultWidget: ae,
            showModal: Z,
            showLoader: ie,
            hideContainer: V,
            showContainer: x,
            handleError: N,
            showErrorMsg: re,
            openPopUp: Ya,
            closePopUp: Za,
            getJobData: Q,
            applyUrl: me,
            isModal: nt,
            makeJobStatusRequest: Ee,
            populateJobResults: Se,
            checkBulkcartStatus: ue,
            initiateJobSubscribeEvent: B,
            getJobStatus: be,
            flagShowModal: g,
            fnWithdrawApplication: tn,
            modalCopyFlag: y,
            showButtonLoader: Be,
            withdrawalStatusFlag: se,
            jobHiringStatus: ye
        }
    }
    const Ne = {
            ddoKey: "",
            ddoKeyJobWidgets: "jobwidgetsettings",
            ddoKeyAudiencePxWidgetConfig: "canvasAudiencePxWidgetConfig",
            ddoKeyMasterDatav2: "categoryMasterDataV2",
            nearBy: {
                ddoKey: "nearByJobs"
            },
            recentlyViewedJobs: {
                ddoKey: "recentlyViewedJobs",
                jobStatus: {
                    fieldName: "jobSeqNo",
                    fieldValue: [],
                    outputFields: ["jobSeqNo", "title", "category", "location", "active", "expiryDate", "postedDate", "positionLevel", "customField1", "industry", "department", "jobVisibility", "industry", "externalApply", "visibilityType", "fitLevel", "matchedSkills", "jobId", "reqId", "cmsJobId", "applyUrl", "multi_location"]
                }
            },
            recomJobsBrowsingHistory: {
                ddoKey: "recomJobsBrowsingHistory",
                defaultReqObj: {
                    keywords: [],
                    categories: [],
                    jobsViewed: [],
                    jobsApplied: null,
                    locations: [],
                    types: [],
                    userProfile: null,
                    landingPages: null,
                    department: ""
                }
            },
            recomBasedProfile: {
                ddoKeyProfile: "profileRecommendations",
                ddoKeyProfileLSID: "getLinkedInProfileRecom",
                ddoKeyBrowsing: "browserRecomContent",
                ddoKeyValidateJwtToken: "validateJwtToken"
            },
            recentlyAdded: {
                ddoKey: "recentlyAddedJobs"
            },
            latestJobs: {
                ddoKey: "latestJobs"
            },
            leastAppliedJobs: {
                ddoKey: "leastAppliedJobs"
            },
            peopleAlsoApplied: {
                ddoKey: "peopleAlsoApplied"
            },
            recomBasedApplies: {
                ddoKey: "recomJobsUserApplies",
                ddoKeyValidateJwtToken: "validateJwtToken"
            },
            recomBasedJobCart: {
                ddoKey: "recomJobsJobCart"
            },
            recomJobsInterestedCategory: {
                ddoKey: "recomInterestedCategory"
            },
            completeYourApplication: {
                ddoKey: "completeYourApplication"
            },
            jobsYouMightNotThoughtOf: {
                ddoKey: "jobsYouMightNotThoughtOf"
            },
            topAppliedJobs: {
                ddoKey: "topAppliedJobs"
            },
            similarJobs: {
                ddoKey: "similarJobs"
            },
            peopleAlsoViewedJobs: {
                ddoKey: "peopleAlsoViewedJobs"
            }
        },
        Mt = "px_audience_widgets_loaded",
        vt = "job_click",
        It = "px_aud_widget_loaded",
        Lt = "px_widget_activate_click",
        xt = "px_widget_initial_activate_click",
        Rt = "px_widget_empty_response",
        Ve = "ddoKeyAudiencePxWidgetConfig",
        Ke = "getUserProfileData";

    function Ft(d, t) {
        const o = e.ref([]);
        let n = e.ref({});
        const $ = {};
        let i = e.ref({});
        const f = e.ref(!1);
        let p = !1;
        const b = !1;
        let h = "";
        const w = {};
        let s = e.ref({}),
            A = {},
            O = !0;
        const _ = e.ref([]),
            E = e.ref(""),
            j = {};
        let D = {};
        const R = e.ref(!1),
            L = e.ref(""),
            v = e.ref({}),
            C = Fe(d, t);
        C.fetchJobWidgetSettings();

        function F(g) {
            return a.contentStore.getContent(g)
        }

        function W() {
            f.value = !1, t != null && t.value && (t.value.style.display = "none")
        }

        function ee() {
            for (let g = 0; g < (n == null ? void 0 : n.jobActions.length); g++)
                if ((n == null ? void 0 : n.jobActions[g].name) === "addToCart" || (n == null ? void 0 : n.jobActions[g].name) === "removeFromCart") {
                    R.value = !0;
                    break
                }
            return R.value
        }

        function Y(g, y) {
            let M = {},
                B, r;
            const m = {};
            if (g && g.data) {
                g.data.widgets && (g.data.widgets[`${y}-v1`] || g.data.widgets[`${y}`]) && (M = g.data.widgets[`${y}-v1`] || g.data.widgets[`${y}`], B = M.fields, r = M.actions);
                const N = B || g.data.fields || [],
                    V = r || g.data.actions || [];
                N && N.forEach(x => {
                    m[x.name] = x
                }), V && V.forEach(x => {
                    $[x.name] = x
                }), n = {
                    jobFields: N,
                    jobActions: V,
                    enabledFields: m,
                    enabledActions: $
                }, ee()
            }
        }

        function te(g, y) {
            Y(g, y), j[`${y}-v1`] = {
                jobFields: n.jobFields,
                jobActions: n.jobActions,
                enabledFields: n.enabledFields,
                enabledActions: n.enabledActions
            }, j[`${y}`] = j[`${y}-v1`]
        }

        function de() {
            var g;
            if (t.value && t.value instanceof HTMLElement) {
                const y = (g = t.value) == null ? void 0 : g.parentElement;
                y && (y.style.display = "block"), t.value.style && (t.value.style.display = "block")
            }
        }

        function ne() {
            var g;
            if (t.value && t.value instanceof HTMLElement) {
                const y = (g = t.value) == null ? void 0 : g.parentElement;
                y && (y.style.display = "none"), t.value.style && (t.value.style.display = "none")
            }
        }

        function Z(g) {
            O ? a.trackWidgetClick(t.value, xt, {
                type: g
            }) : a.trackWidgetClick(t.value, Lt, {
                type: g
            }), O = !1, E.value = g
        }

        function H(g) {
            var m, N, V;
            const y = g.sliderSettings || {},
                [M] = ((m = g == null ? void 0 : g["phw-slider-arrow"]) == null ? void 0 : m.classes) || [],
                [B] = ((N = g["phw-slider-paginationnumber"]) == null ? void 0 : N.classes) || [],
                [r] = ((V = g == null ? void 0 : g["phw-slider-pagination"]) == null ? void 0 : V.classes) || [];
            g["phw-slider-arrow"] && (v.value.arrowClass = M), g["phw-slider-paginationnumber"] && (v.value.paginationNumberClass = B), g["phw-slider-pagination"] && (v.value.paginationClass = r), y.attributes && (y.attributes["data-phw-slider-opts"] && (L.value = y.attributes["data-phw-slider-opts"]), y.attributes["arrow-icon"] && (v.value.arrowIcon = y.attributes["arrow-icon"]))
        }

        function P(g) {
            Object.keys(g).forEach(y => {
                var B;
                const M = (B = g[y]) == null ? void 0 : B.additionalSettings;
                M && H(M)
            })
        }

        function U() {
            var M, B;
            o.value.length = 0, ne(), _.value = [];
            let g = 0;
            if (Object.keys(w).forEach(r => {
                    const m = w[r];
                    m && m.widgetResponse ? g += 1 : a.trackWidgetClick(t.value, Rt, {
                        type: r
                    })
                }), !g) {
                W();
                return
            }
            if (de(), g = 0, Object.keys(w).forEach(r => {
                    const m = w[r],
                        N = m.contentName && d[m.contentName];
                    if (m && m.widgetResponse && m.contentName) {
                        if (de(), m.widgetResponse[0] && m.widgetResponse[0].track) try {
                            typeof m.widgetResponse[0].track.eid == "object" ? m.impressionEid = JSON.stringify(m.widgetResponse[0].track.eid) : m.impressionEid = m.widgetResponse[0].track.eid, m.widgetId = m.widgetResponse[0].track.wdgtId, m.widgetName = m.widgetResponse[0].track.wdgtName, m.impressionJobSeqNos = m.widgetResponse[0].track.jobSeqForOtherJobs, m.impressionJobSeqNos.push(m.widgetResponse[0].jobSeqNo)
                        } catch {}
                        m.layoutIndex = g, d.sliderOptions && (m.sliderOptions = JSON.parse(JSON.stringify(d.sliderOptions))), A = m.sliderOptions, m.isCategoryImageEnabled = N.isCategoryImageEnabled, g += 1, o.value.push(m);
                        const {
                            pageName: V
                        } = a.phAppStore;
                        h !== "stranger" && V === "job" && A && (A.perPage = 1, A.responsive.forEach(x => {
                            const G = x;
                            G.settings.slidesToShow = 1
                        })), m.isCategoryImageEnabled = N.isCategoryImageEnabled, g += 1, _.value.push(m)
                    }
                }), _.value[0] && _.value[0].type && Z(_.value[0].type), g > 1) {
                const r = ((B = (M = t.value) == null ? void 0 : M.closest("[instance-id]")) == null ? void 0 : B.getAttribute("instance-id")) || d.instanceId,
                    m = a.settingsStore.getSettings(r, "") || "";
                P(m), e.nextTick(() => {
                    var x, G;
                    const N = ((G = (x = t.value) == null ? void 0 : x.querySelector("[data-phw-slider-opts]")) == null ? void 0 : G.getAttribute("data-phw-slider-opts")) || "",
                        V = JSON.parse(a.atobParsing(N));
                    a.DefaultSlider.initSliders(t.value, V)
                })
            }
        }

        function K(g) {
            let y = !0;
            const M = [],
                B = {},
                r = [];
            let m = "";
            g.forEach(N => {
                N && N.type && (w[N.type].widgetResponse || (w[N.type].widgetResponse = N[N.type]), w[N.type].type = N.type, w[N.type].widgetResponse ? (M.push(w[N.type].widgetResponse.length), B[N.type] = w[N.type].widgetResponse.length, y = !1, r.push(...w[N.type].widgetResponse), m || (m = N.type), m && (d.widgetType = m)) : (M.push(0), B[N.type] = 0))
            }), r.length && (C.jobResults.value = r), a.trackWidgetClick(t.value, Mt, {}), y && W(), U()
        }

        function ae() {
            let g = [],
                y = null;
            Object.keys(w).forEach(M => {
                const B = w[M];
                try {
                    M !== "phw-near-by-jobs" ? B && g.push(B) : B && (y = B)
                } catch {}
            }), Promise.all(g).then(M => {
                g = M, K(g), f.value = !1
            }), y && y.then(M => {
                K([M]), f.value = !1, a.DefaultSlider.refresh(t.value, A)
            }).catch(() => {})
        }

        function X(g, y, M) {
            const B = [];
            g.forEach(m => {
                B.push(m.jobSeqNo)
            });
            const r = {
                jobSeqNos: B,
                widgetId: M,
                widgetName: M,
                eid: y
            };
            a.trackWidgetClick(t.value, It, r)
        }

        function pe(g, y, M, B, r) {
            const m = [];
            g.forEach(N => {
                m.push(N.jobSeqNo)
            }), g.forEach((N, V) => {
                const x = N;
                y && Object.keys(y).length && y[x.category] && y[x.category].icon_image && (x.icon_image = y[x.category].icon_image), x.track = {}, x.track.eventName = M, x.track.position = V + 1, x.track.wdgtId = r, x.track.wdgtName = r, x.track.eid = B;
                const G = m.indexOf(x.jobSeqNo),
                    Q = m.splice(G, 1);
                x.track.jobSeqForOtherJobs = [...m], Q && Q[0] && m.push(Q[0])
            })
        }

        function ye(g, y) {
            if (g && g.length) {
                const M = g;
                return pe(M, s, vt, g.eid, y), X(M, g.eid, y), {
                    [y]: M,
                    type: y
                }
            }
            return {
                [y]: !1,
                type: y
            }
        }

        function ie(g, y) {
            return C.getJobData(g, y).then(M => ye(M, g))
        }

        function se() {
            return Object.keys(s).length ? new Promise(g => {
                g(s)
            }) : a.getDDO(Ne.ddoKeyMasterDatav2, {
                isEagerLoad: !0
            }).then(g => {
                if (g && g.data && g.data.categories) {
                    const y = g.data.categories || [];
                    return y.forEach(M => {
                        y[M.category] = M
                    }), y
                }
            })
        }

        function re() {
            let g = !1;
            i.forEach(y => {
                var M;
                te(D, y.widgetName), w[y.widgetName] = ie(y.widgetName, !0), w[y.widgetName].contentName = y.contentName, !g && ((M = d[y.contentName]) == null ? void 0 : M.isCategoryImageEnabled) && (g = !0)
            }), g && se().then(y => {
                s = y
            }), ae()
        }

        function oe(g) {
            h = a.getParam("pxSegmentState") || "stranger", g && g.data ? (i = g.data && g.data[h] || [], d.widgetConfigMode && g.data.widgetLevelList && g.data.widgetLevelList[d.widgetConfigMode] && (i = g.data.widgetLevelList[d.widgetConfigMode][h] || []), re()) : (f.value = !1, W())
        }

        function he() {
            const g = [];
            g.push(a.getDDO(Ne.ddoKeyJobWidgets, {
                isEagerLoad: !0
            })), g.push(a.getDDO(Ne[Ve], {
                isEagerLoad: !0
            })), f.value = !0, Promise.all(g).then(([y, M]) => {
                D = y, Y(y), oe(M);
                const B = window;
                B.phApp.ddo[Ne[Ve]] = M
            }), a.subscribeEvent(Ke, () => {
                ie("phw-profile-recommendations", !1).then(y => {
                    w && w["phw-profile-recommendations"] && (w["phw-profile-recommendations"].widgetResponse = y[y.type], U())
                })
            }), document.addEventListener(Ke, () => {
                ie("phw-profile-recommendations", !1).then(y => {
                    w && w["phw-profile-recommendations"] && (w["phw-profile-recommendations"].widgetResponse = y[y.type], U())
                })
            })
        }

        function le(g) {
            const y = {
                eid: g.track.eid,
                title: g.title,
                position: g.track.position,
                jobSeqForOtherJobs: g.track.jobSeqForOtherJobs,
                widgetId: g.track.wdgtId,
                widgetName: g.track.wdgtName,
                ctx: {
                    jobSeqNo: g.jobSeqNo,
                    category: g.category
                }
            };
            a.trackWidgetClick(t.value, g.track.eventName, y)
        }
        return {
            getContent: F,
            init: he,
            wdgtResponses: o,
            reqFields: n,
            pageState: h,
            showLoader: f,
            showErrorMsg: p,
            isErrorMsgReqd: b,
            handleTrackEvent: le,
            activeWidgetBlock: E,
            activateWidgetTab: Z,
            widgetActiveTabList: _,
            sliderOptions: A,
            wdtReqFields: j,
            initiateJobSubscribeEvent: C.initiateJobSubscribeEvent,
            sliderOptionss: L,
            sliderIocnsAndClasses: v
        }
    }

    function ke(d, t, o, n) {
        if (!d || !t) return "";
        if (typeof d == "object") {
            if (!o) return "";
            const $ = t[o];
            let i = d[$];
            if (i || Object.keys(d).forEach(f => {
                    if (/[-*]/g.test(f)) {
                        const p = f.replace("*", "");
                        if ($ >= p && (i = d[f]), !i) {
                            const b = f.split("-");
                            b && b.length === 2 && $ >= b[0] && $ <= b[1] && (i = d[f])
                        }
                    }
                }), !i)
                if (d.default) i = "default";
                else return "";
            return Ge(i, t, n)
        }
        return Ge(d, t, n)
    }

    function Ge(d, t, o) {
        const n = /\{\{\s*(.*?)\s*\}\}/g,
            $ = /\[\[\s*(.*?)\s*\]\]/g;
        return !d || typeof d != "string" || (d = d.replace(/&lt;/g, "<"), d = d.replace(/&gt;/g, ">"), d = d.replace(n, (i, f) => t.hasOwnProperty(f) ? t[f] : ""), o && (d = encodeURIComponent(d)), d = d.replace($, (i, f) => {
            if (!f) return f
        })), d
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

    function Ue(d, t) {
        var o = Array.prototype.slice.call(t);
        return o.push(Vt), d.apply(this, o)
    }

    function qe(d, t) {
        d = d.split("-"), t = t.split("-");
        for (var o = d[0].split("."), n = t[0].split("."), $ = 0; $ < 3; $++) {
            var i = Number(o[$]),
                f = Number(n[$]);
            if (i > f) return 1;
            if (f > i) return -1;
            if (!isNaN(i) && isNaN(f)) return 1;
            if (isNaN(i) && !isNaN(f)) return -1
        }
        return d[1] && t[1] ? d[1] > t[1] ? 1 : d[1] < t[1] ? -1 : 0 : !d[1] && t[1] ? 1 : d[1] && !t[1] ? -1 : 0
    }
    var Kt = {}.constructor;

    function ve(d) {
        return d != null && d.constructor === Kt
    }

    function je(d) {
        return je = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
            return typeof t
        } : function(t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, je(d)
    }

    function Ae(d, t) {
        if (!(d instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function We(d, t) {
        for (var o = 0; o < t.length; o++) {
            var n = t[o];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(d, Gt(n.key), n)
        }
    }

    function Pe(d, t, o) {
        return t && We(d.prototype, t), o && We(d, o), Object.defineProperty(d, "prototype", {
            writable: !1
        }), d
    }

    function Gt(d) {
        var t = Ut(d, "string");
        return je(t) == "symbol" ? t : t + ""
    }

    function Ut(d, t) {
        if (je(d) != "object" || !d) return d;
        var o = d[Symbol.toPrimitive];
        if (o !== void 0) {
            var n = o.call(d, t || "default");
            if (je(n) != "object") return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (t === "string" ? String : Number)(d)
    }
    var qt = "1.2.0",
        Wt = "1.7.35",
        He = " ext. ",
        Ht = /^\d+$/,
        ze = function() {
            function d(t) {
                Ae(this, d), Xt(t), this.metadata = t, Xe.call(this, t)
            }
            return Pe(d, [{
                key: "getCountries",
                value: function() {
                    return Object.keys(this.metadata.countries).filter(function(o) {
                        return o !== "001"
                    })
                }
            }, {
                key: "getCountryMetadata",
                value: function(o) {
                    return this.metadata.countries[o]
                }
            }, {
                key: "nonGeographic",
                value: function() {
                    if (!(this.v1 || this.v2 || this.v3)) return this.metadata.nonGeographic || this.metadata.nonGeographical
                }
            }, {
                key: "hasCountry",
                value: function(o) {
                    return this.getCountryMetadata(o) !== void 0
                }
            }, {
                key: "hasCallingCode",
                value: function(o) {
                    if (this.getCountryCodesForCallingCode(o)) return !0;
                    if (this.nonGeographic()) {
                        if (this.nonGeographic()[o]) return !0
                    } else {
                        var n = this.countryCallingCodes()[o];
                        if (n && n.length === 1 && n[0] === "001") return !0
                    }
                }
            }, {
                key: "isNonGeographicCallingCode",
                value: function(o) {
                    return this.nonGeographic() ? !!this.nonGeographic()[o] : !this.getCountryCodesForCallingCode(o)
                }
            }, {
                key: "country",
                value: function(o) {
                    return this.selectNumberingPlan(o)
                }
            }, {
                key: "selectNumberingPlan",
                value: function(o, n) {
                    if (o && Ht.test(o) && (n = o, o = null), o && o !== "001") {
                        if (!this.hasCountry(o)) throw new Error("Unknown country: ".concat(o));
                        this.numberingPlan = new Ye(this.getCountryMetadata(o), this)
                    } else if (n) {
                        if (!this.hasCallingCode(n)) throw new Error("Unknown calling code: ".concat(n));
                        this.numberingPlan = new Ye(this.getNumberingPlanMetadata(n), this)
                    } else this.numberingPlan = void 0;
                    return this
                }
            }, {
                key: "getCountryCodesForCallingCode",
                value: function(o) {
                    var n = this.countryCallingCodes()[o];
                    if (n) return n.length === 1 && n[0].length === 3 ? void 0 : n
                }
            }, {
                key: "getCountryCodeForCallingCode",
                value: function(o) {
                    var n = this.getCountryCodesForCallingCode(o);
                    if (n) return n[0]
                }
            }, {
                key: "getNumberingPlanMetadata",
                value: function(o) {
                    var n = this.getCountryCodeForCallingCode(o);
                    if (n) return this.getCountryMetadata(n);
                    if (this.nonGeographic()) {
                        var $ = this.nonGeographic()[o];
                        if ($) return $
                    } else {
                        var i = this.countryCallingCodes()[o];
                        if (i && i.length === 1 && i[0] === "001") return this.metadata.countries["001"]
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
                value: function(o) {
                    return this.numberingPlan.type(o)
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
                value: function(o) {
                    return this.selectNumberingPlan(o)
                }
            }, {
                key: "hasSelectedNumberingPlan",
                value: function() {
                    return this.numberingPlan !== void 0
                }
            }])
        }(),
        Ye = function() {
            function d(t, o) {
                Ae(this, d), this.globalMetadataObject = o, this.metadata = t, Xe.call(this, o.metadata)
            }
            return Pe(d, [{
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
                value: function(o) {
                    return o[this.v1 ? 2 : this.v2 ? 3 : 4]
                }
            }, {
                key: "formats",
                value: function() {
                    var o = this,
                        n = this._getFormats(this.metadata) || this._getFormats(this.getDefaultCountryMetadataForRegion()) || [];
                    return n.map(function($) {
                        return new zt($, o)
                    })
                }
            }, {
                key: "nationalPrefix",
                value: function() {
                    return this.metadata[this.v1 ? 3 : this.v2 ? 4 : 5]
                }
            }, {
                key: "_getNationalPrefixFormattingRule",
                value: function(o) {
                    return o[this.v1 ? 4 : this.v2 ? 5 : 6]
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
                value: function(o) {
                    if (this.hasTypes() && Ze(this.types(), o)) return new Zt(Ze(this.types(), o), this)
                }
            }, {
                key: "ext",
                value: function() {
                    return this.v1 || this.v2 ? He : this.metadata[13] || He
                }
            }])
        }(),
        zt = function() {
            function d(t, o) {
                Ae(this, d), this._format = t, this.metadata = o
            }
            return Pe(d, [{
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
                    return !!(this.nationalPrefixFormattingRule() && !Yt.test(this.nationalPrefixFormattingRule()))
                }
            }, {
                key: "internationalFormat",
                value: function() {
                    return this._format[5] || this.format()
                }
            }])
        }(),
        Yt = /^\(?\$1\)?$/,
        Zt = function() {
            function d(t, o) {
                Ae(this, d), this.type = t, this.metadata = o
            }
            return Pe(d, [{
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

    function Ze(d, t) {
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

    function Xt(d) {
        if (!d) throw new Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");
        if (!ve(d) || !ve(d.countries)) throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(ve(d) ? "an object of shape: { " + Object.keys(d).join(", ") + " }" : "a " + Qt(d) + ": " + d, "."))
    }
    var Qt = function(t) {
        return je(t)
    };

    function ed(d, t) {
        if (t = new ze(t), t.hasCountry(d)) return t.selectNumberingPlan(d).countryCallingCode();
        throw new Error("Unknown country: ".concat(d))
    }

    function Xe(d) {
        var t = d.version;
        typeof t == "number" ? (this.v1 = t === 1, this.v2 = t === 2, this.v3 = t === 3, this.v4 = t === 4) : t ? qe(t, qt) === -1 ? this.v2 = !0 : qe(t, Wt) === -1 ? this.v3 = !0 : this.v4 = !0 : this.v1 = !0
    }

    function td(d) {
        return new ze(d).getCountries()
    }

    function dd() {
        return Ue(td, arguments)
    }

    function Qe() {
        return Ue(ed, arguments)
    }
    const ad = {
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

    function et(d) {
        const t = d.toUpperCase().split("").map(o => 127397 + o.charCodeAt(0));
        return String.fromCodePoint(...t)
    }

    function nd() {
        const d = [];
        return dd().forEach(o => {
            const n = ad[o];
            if (n) try {
                const $ = Qe(o);
                d.push({
                    code: o,
                    name: n,
                    callingCode: `+${$}`,
                    flag: et(o)
                })
            } catch {
                console.warn(`Could not get calling code for ${o}: ${n}`)
            } else try {
                const $ = Qe(o);
                d.push({
                    code: o,
                    name: o,
                    callingCode: `+${$}`,
                    flag: et(o)
                })
            } catch {
                console.warn(`Could not get calling code for ${o}`)
            }
        }), d.sort((o, n) => o.code === "US" ? -1 : n.code === "US" ? 1 : o.name.localeCompare(n.name))
    }
    nd();

    function tt(d, t, o) {
        const n = window;
        if (n.dayjs) {
            const $ = n.dayjs.locale();
            let i = a.phAppStore.locale || "en_us";
            return i = i === "en_us" ? "en" : i.replace("_", "-"), n.dayjs.locale(i), $ === n.dayjs.locale() && i.split("-").length !== 1 && (i = i.split("-")[0], n.dayjs.locale(i)), t ? n.dayjs.default ? o ? n.dayjs.utc(d).tz(o).format(t) : n.dayjs.utc(d).format(t) : o ? n.dayjs(d).tz(o).format(t) : n.dayjs(d).format(t) : o ? n.dayjs(d).tz(o) : n.dayjs(d)
        }
    }
    const id = {
            "data-ps": "063abcb2-div-18",
            class: "phw-p-4 phw-p-lg-3 phw-p-sm-2 phw-height-4"
        },
        od = {
            key: 0,
            class: "phw-img-ctr",
            role: "presentation",
            "data-ph-at-id": "job-image",
            "data-ps": "063abcb2-figure-1"
        },
        sd = ["src"],
        rd = {
            class: "phw-posn-relative phw-height-4 phw-d-flex phw-flex-column phw-justify-content-between",
            "data-ps": "063abcb2-div-19"
        },
        ld = {
            class: "jw-job-info"
        },
        $d = {
            key: 0,
            class: "phw-img-ctr",
            "data-ph-at-id": "job-badge-image",
            "data-ps": "063abcb2-figure-2"
        },
        cd = ["src", "alt"],
        gd = {
            "data-ps": "063abcb2-div-20"
        },
        fd = {
            key: 0,
            class: "phw-mr-1",
            "data-ph-at-id": "featured-job",
            "data-ps": "063abcb2-span-2"
        },
        ud = ["data-ph-at-name"],
        bd = {
            key: 0,
            class: "phw-icon-ctr phw-d-none",
            "data-ps": "063abcb2-span-5"
        },
        pd = {
            key: 0,
            class: "phw-i-sz-2-5 phw-i-sz-sm-2 phw-g-icon-light-secondary-text",
            "aria-hidden": "true",
            fill: "currentcolor",
            "data-ps": "063abcb2-svg-1"
        },
        hd = ["href"],
        wd = {
            class: "phw-tt-uppercase",
            "data-ps": "063abcb2-span-6"
        },
        yd = {
            key: 0,
            class: "phw-icon-ctr phw-mr-1",
            "data-ps": "063abcb2-span-8"
        },
        Sd = {
            key: 0,
            class: "phw-i-sz-2-5 phw-i-sz-sm-2 phw-g-icon-light-secondary-text",
            "aria-hidden": "true",
            fill: "currentcolor",
            "data-ps": "063abcb2-svg-2"
        },
        md = ["href"],
        kd = {
            class: "phw-g-text-small-dark",
            "data-ps": "063abcb2-span-9"
        },
        Ed = {
            "data-ps": "063abcb2-h4-1"
        },
        _d = ["data-ph-tevent-attr-title", "data-ph-tevent-attr-position", "data-ph-tevent-attr-eid", "data-ph-tevent-attr-jobSeqForOtherJobs", "data-ph-tevent-attr-trait5", "data-ph-tevent-attr-trait14", "data-ph-tevent-attr-trait132", "data-ph-tevent-attr-trait169", "data-ph-at-job-seqno-text", "data-ph-at-job-title-text", "data-ph-at-job-id-text", "aria-label", "data-access-list-item"],
        Td = {
            "data-ps": "063abcb2-div-24",
            class: "phw-pt-1 phw-pt-sm-2"
        },
        Dd = {
            class: "job-field-block",
            "data-ps": "063abcb2-div-25"
        },
        jd = ["data-ph-at-id"],
        Bd = {
            key: 0,
            class: "phw-icon-ctr phw-mr-025",
            "data-ps": "063abcb2-span-10"
        },
        Jd = {
            class: "phw-i-sz-2-5 phw-i-sz-sm-2 phw-g-icon-light-secondary-text",
            "aria-hidden": "true",
            fill: "currentcolor",
            "data-ps": "063abcb2-svg-3",
            "data-icon-edit": "false"
        },
        Nd = ["href"],
        Ad = {
            key: 1,
            class: "phw-g-text-small-secondary",
            role: "text",
            "data-ps": "063abcb2-div-28"
        },
        Pd = ["data-ph-at-id"],
        Od = ["id", "data-modal-content-id", "data-ph-at-id", "onClick"],
        Cd = {
            key: 0,
            class: "phw-icon-ctr phw-mr-025",
            "data-ps": "063abcb2-span-17"
        },
        Md = {
            "aria-hidden": "true",
            class: "phw-i-sz-2-5 phw-i-sz-sm-2",
            fill: "currentcolor",
            "data-ps": "063abcb2-svg-6",
            "data-icon-edit": "false"
        },
        vd = ["href"],
        Id = {
            class: "phw-visually-hidden",
            "data-ps": "063abcb2-span-19"
        },
        Ld = {
            key: 1,
            "data-ps": "063abcb2-div-31"
        },
        xd = ["id"],
        Rd = {
            class: "phw-modal-sm",
            "data-ps": "063abcb2-div-33"
        },
        Fd = {
            class: "phw-modal-header phw-flex-row-reverse",
            "data-ps": "063abcb2-div-34"
        },
        Vd = ["aria-label", "onClick"],
        Kd = {
            class: "phw-icon-ctr",
            "data-ps": "063abcb2-span-20"
        },
        Gd = {
            class: "phw-i-sz-2-5 phw-i-sz-sm-2",
            "aria-hidden": "true",
            fill: "currentcolor",
            "data-ps": "063abcb2-svg-7"
        },
        Ud = {
            href: "#phw-cns-icon-close",
            "data-ps": "063abcb2-use-7"
        },
        qd = {
            "data-ps": "063abcb2-div-35"
        },
        Wd = {
            "data-tag-type": "p",
            class: e.normalizeClass(["para-p", "phw-pb-3", "phw-pt-4", "phw-pt-sm-3", "phw-pb-sm-2", "phw-mb-0", "phw-g-p-small-secondary"]),
            "data-ps": "063abcb2-p-3"
        },
        Hd = ["role", "tabindex", "aria-label"],
        zd = ["role"],
        Yd = ["role"],
        Zd = {
            key: 0,
            class: "phw-icon-ctr phw-mr-1",
            "data-ps": "063abcb2-span-21"
        },
        Xd = {
            class: "phw-i-sz-2-5 phw-i-sz-sm-2 phw-g-icon-light-secondary-text",
            "aria-hidden": "true",
            fill: "currentcolor",
            "data-ps": "063abcb2-svg-8",
            "data-icon-edit": "false"
        },
        Qd = ["href"],
        ea = {
            "data-ps": "063abcb2-span-22"
        },
        ta = ["id", "role"],
        da = ["role"],
        aa = {
            "data-ps": "063abcb2-span-23"
        },
        na = {
            class: "phw-icon-ctr phw-mr-1",
            "data-ps": "063abcb2-span-24"
        },
        ia = {
            class: "phw-i-sz-2-5 phw-i-sz-sm-2 phw-g-icon-light-secondary-text",
            "aria-hidden": "true",
            fill: "currentcolor",
            "data-ps": "063abcb2-svg-9"
        },
        oa = ["href"],
        sa = {
            role: "text",
            "data-ps": "063abcb2-span-25"
        },
        ra = ["aria-label", "aria-expanded"],
        la = {
            class: "phw-icon-ctr phw-mr-1",
            "data-ps": "063abcb2-span-27"
        },
        $a = {
            class: "phw-i-sz-2-5 phw-i-sz-sm-2",
            "aria-hidden": "true",
            fill: "currentcolor",
            "data-ps": "063abcb2-svg-10"
        },
        ca = ["href"],
        ga = {
            key: 0,
            class: "phw-icon-ctr phw-mr-1",
            "data-ph-at-id": "fit-value-text",
            "data-ps": "063abcb2-span-29"
        },
        fa = {
            key: 0,
            class: "phw-i-sz-2-5 phw-i-sz-sm-2 phw-g-icon-light-secondary-text",
            "aria-hidden": "true",
            fill: "currentcolor",
            "data-ps": "063abcb2-svg-11"
        },
        ua = ["href"],
        ba = {
            class: "phw-g-text-small-dark",
            "data-ps": "063abcb2-span-30"
        },
        pa = ["data-ph-at-job-title-text"],
        ha = ["role"],
        wa = ["role"],
        ya = ["aria-label", "aria-pressed"],
        Sa = {
            key: 0,
            class: "phw-icon-ctr",
            "data-ps": "063abcb2-span-31"
        },
        ma = {
            class: "icon phw-i-sz-4",
            "aria-hidden": "true",
            fill: "currentcolor",
            "data-ps": "063abcb2-svg-12",
            "data-icon-edit": "false"
        },
        ka = ["href"],
        Ea = ["aria-label"],
        _a = {
            class: "phw-i-sz-2-5 phw-i-sz-sm-2",
            "aria-hidden": "true",
            fill: "currentcolor",
            "data-ps": "063abcb2-svg-14",
            "data-icon-edit": "false"
        },
        Ta = ["href"],
        Da = {
            key: 0,
            "data-ps": "063abcb2-span-33"
        },
        ja = ["data-ph-tevent-attr-trait5", "data-ph-tevent-attr-trait14", "data-ph-tevent-attr-trait132", "data-ph-tevent-attr-trait169", "href", "target", "aria-label"],
        Ba = e.defineComponent({
            __name: "JobcardDefault",
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
                handleTrackEvent: null,
                clickToJd: {
                    type: Boolean
                }
            },
            setup(d) {
                const t = d,
                    {
                        deviceType: o
                    } = a.phAppStore,
                    n = {},
                    $ = e.ref(),
                    i = e.ref({});
                i.value = t.eachJob;

                function f(b) {
                    if (!b) return "";
                    const h = Je().get("ext_trk");
                    let w = b;
                    return w = b.indexOf("http") === -1 ? a.phAppStore.baseUrl + w : w, i.value.externalTracking && (i.value.externalTracking === "true" || i.value.externalTracking === !0) && h && (w += w.indexOf("?") !== -1 ? "&" : "?", w += h), w
                }

                function p() {
                    const b = a.getSiteSettings("isHvhishvhjobApply"),
                        h = `${a.phAppStore.baseUrl}apply?jobSeqNo=${i.value.jobSeqNo}`;
                    if (!i.value.overriddenExternalApply) {
                        const w = a.getSiteSettings("igonreExternalHvhApply");
                        if (b && !w) {
                            const s = a.getRawUrl("forwardApply");
                            s && (i.value.applyUrl = h.replace("apply?", `${s}?`))
                        } else(Object.prototype.hasOwnProperty.call(i.value, "externalApply") && !i.value.externalApply || !Object.prototype.hasOwnProperty.call(i.value, "externalApply")) && (i.value.applyUrl = h)
                    }
                    i.value.jobUrl = i.value.jobUrl || a.getUrl("job", i.value, ""), t.clickToJd ? (i.value.actionUrl = i.value.jobUrl, i.value.actionEventName = "job_click") : (i.value.actionUrl = f(i.value.applyUrl), i.value.actionEventName = "apply_click"), i.value.eventName = "job_click"
                }
                return p(), e.watch(() => t.eachJob, () => {
                    i.value = t.eachJob, p()
                }), (b, h) => {
                    var w, s, A, O, _, E, j, D, R, L, v, C, F, W, ee, Y, te, de, ne, Z, H, P, U, K, ae, X, pe, ye, ie, se, re, oe, he, le, g, y, M, B;
                    return e.withDirectives((e.openBlock(), e.createElementBlock("div", id, [t.enabledFields.pjfJobImages && e.unref(i).image && e.unref(i).image.src ? e.withDirectives((e.openBlock(), e.createElementBlock("figure", od, [e.withDirectives(e.createElementVNode("img", {
                        class: e.normalizeClass([b.$style["jw-job-card-image"]]),
                        src: e.unref(i).image.src.value,
                        alt: "",
                        "data-ps": "063abcb2-img-1"
                    }, null, 10, sd), [
                        [e.unref(a.vPhwSetting)]
                    ])])), [
                        [e.unref(a.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("div", rd, [e.createElementVNode("div", ld, [t.enabledFields.pjfJobBadges && e.unref(i).badgeImage && e.unref(i).badgeImage.src ? e.withDirectives((e.openBlock(), e.createElementBlock("figure", $d, [e.withDirectives(e.createElementVNode("img", {
                        class: e.normalizeClass(["phw-ml-0 phw-mr-0", [b.$style["jw-job-card-logo"]]]),
                        src: (A = (s = (w = t == null ? void 0 : t.eachJob) == null ? void 0 : w.badgeImage) == null ? void 0 : s.src) == null ? void 0 : A.value,
                        alt: ((O = t.enabledFields.pjfJobBadges) == null ? void 0 : O.settings.jobTagValue) + " " + (t == null ? void 0 : t.eachJob[(E = (_ = t.enabledFields.pjfJobBadges) == null ? void 0 : _.settings) == null ? void 0 : E.jobTagValue]) || "",
                        "data-ps": "063abcb2-img-2"
                    }, null, 10, cd), [
                        [e.unref(a.vPhwSetting)]
                    ])])), [
                        [e.unref(a.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("div", gd, [((j = t == null ? void 0 : t.jobTagsConfig) == null ? void 0 : j.tags) && (t == null ? void 0 : t.tagsDataLoaded) && (t == null ? void 0 : t.jobTagsData) && (t == null ? void 0 : t.jobTagsData[t == null ? void 0 : t.eachJob.jobSeqNo]) || (t == null ? void 0 : t.jobFits) && (t == null ? void 0 : t.fitDataLoaded) && ((D = t == null ? void 0 : t.jobFits) == null ? void 0 : D.layout) && ((R = t == null ? void 0 : t.jobFits) == null ? void 0 : R.layout[e.unref(o)]) === "top" && (t == null ? void 0 : t.eachJob.fitLevel) && (t == null ? void 0 : t.jobFitsSettConfig) && ((L = t == null ? void 0 : t.jobFitsSettConfig) == null ? void 0 : L.literalMap) && ((v = t == null ? void 0 : t.jobFitsSettConfig) == null ? void 0 : v.literalMap[t == null ? void 0 : t.eachJob.fitLevel]) && (t == null ? void 0 : t.enabledFits[(C = t == null ? void 0 : t.jobFitsSettConfig) == null ? void 0 : C.literalMap[t == null ? void 0 : t.eachJob.fitLevel]]) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: 0,
                        class: e.normalizeClass(["phw-d-flex phw-align-items-center phw-pr-5", [b.$style["job-fit"]]]),
                        "data-ps": "063abcb2-div-21"
                    }, [((F = t == null ? void 0 : t.jobTagsConfig) == null ? void 0 : F.tags) && (t == null ? void 0 : t.tagsDataLoaded) && t.jobTagsData && t.jobTagsData[e.unref(i).jobSeqNo] ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: 0,
                        class: e.normalizeClass([(ee = (W = t == null ? void 0 : t.jobTagsConfig) == null ? void 0 : W.layout) == null ? void 0 : ee.style, "phw-pr-2"]),
                        "data-ps": "063abcb2-div-22"
                    }, [e.unref(i).featuredJob && (t == null ? void 0 : t.tagsDataLoaded) && e.unref(i).featuredJob && e.unref(i).featuredJob.toLowerCase() === "yes" ? e.withDirectives((e.openBlock(), e.createElementBlock("span", fd, [e.createTextVNode(e.toDisplayString((Y = t.content) == null ? void 0 : Y.jobWidget.featuredJobText), 1)])), [
                        [e.unref(a.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), (e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(t.jobTags, r => {
                        var m, N;
                        return e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                            key: r,
                            class: e.normalizeClass([r.settings.class, b.$style["smart-tag"]]),
                            "data-ps": "063abcb2-span-3"
                        }, [((m = t == null ? void 0 : t.jobTagsConfig) == null ? void 0 : m.tags) && (t == null ? void 0 : t.tagsDataLoaded) && t.jobTagsData && t.jobTagsData[e.unref(i).jobSeqNo] && t.jobTagsData[e.unref(i).jobSeqNo][r.name] ? e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                            key: 0,
                            "data-ph-at-name": r == null ? void 0 : r.name,
                            "data-ph-at-id": "job-tag",
                            class: "phw-d-flex phw-align-items-center phw-g-p-default-primary",
                            "data-ps": "063abcb2-span-4"
                        }, [r.settings.icon && r.settings.icon.length ? e.withDirectives((e.openBlock(), e.createElementBlock("span", bd, [r.settings.icon && r.settings.icon.length ? e.withDirectives((e.openBlock(), e.createElementBlock("svg", pd, [e.withDirectives(e.createElementVNode("use", {
                            href: "#" + r.settings.icon,
                            "data-ps": "063abcb2-use-1"
                        }, null, 8, hd), [
                            [e.unref(a.vPhwSetting)]
                        ])])), [
                            [e.unref(a.vPhwSetting)]
                        ]) : e.createCommentVNode("", !0)])), [
                            [e.unref(a.vPhwSetting)]
                        ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("span", wd, [e.createTextVNode(e.toDisplayString(e.unref(ke)((N = t.content) == null ? void 0 : N.jobWidget[r.name], t.jobTagsData[e.unref(i).jobSeqNo][r.name].data)), 1)])), [
                            [e.unref(a.vPhwSetting)]
                        ])], 8, ud)), [
                            [e.unref(a.vPhwSetting)]
                        ]) : e.createCommentVNode("", !0)], 2)), [
                            [e.unref(a.vPhwSetting)]
                        ])
                    }), 128))], 2)), [
                        [e.unref(a.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), t.jobFits && t.fitDataLoaded && t.jobFits.layout && t.jobFits.layout[e.unref(o)] === "top" && e.unref(i).fitLevel && t.jobFitsSettConfig && t.jobFitsSettConfig.literalMap && t.jobFitsSettConfig.literalMap[e.unref(i).fitLevel] && t.enabledFits[t.jobFitsSettConfig.literalMap[e.unref(i).fitLevel]] ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: 1,
                        class: e.normalizeClass([t.jobFits.layout && t.jobFits.layout[e.unref(o)], t.jobFits.layout && t.jobFits.layout.style]),
                        "data-ph-at-id": "job-fit",
                        "data-ps": "063abcb2-div-23"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                        class: e.normalizeClass([b.$style["job-fit-tag"], $.value = t.enabledFits[t.jobFitsSettConfig.literalMap[e.unref(i).fitLevel]], e.unref($).settings.class, "phw-p-1", "phw-pt-050", "phw-pb-050", "phw-pt-sm-025", "phw-pb-sm-025", "phw-d-inline-flex", "phw-align-items-center", "phw-stroke-dark"]),
                        "data-ps": "063abcb2-span-7"
                    }, [(de = (te = e.unref($)) == null ? void 0 : te.settings) != null && de.icon.length ? e.withDirectives((e.openBlock(), e.createElementBlock("span", yd, [(Z = (ne = e.unref($)) == null ? void 0 : ne.settings) != null && Z.icon.length ? e.withDirectives((e.openBlock(), e.createElementBlock("svg", Sd, [e.withDirectives(e.createElementVNode("use", {
                        href: "#" + ((P = (H = e.unref($)) == null ? void 0 : H.settings) == null ? void 0 : P.icon),
                        "data-ps": "063abcb2-use-2"
                    }, null, 8, md), [
                        [e.unref(a.vPhwSetting)]
                    ])])), [
                        [e.unref(a.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(a.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("span", kd, [e.createTextVNode(e.toDisplayString((U = t.content) == null ? void 0 : U.jobWidget[e.unref($).name]), 1)])), [
                        [e.unref(a.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(a.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(a.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)], 2)), [
                        [e.unref(a.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("h3", Ed, [e.withDirectives((e.openBlock(), e.createElementBlock("a", {
                        ref: r => {
                            t.getJobUrl(r, "job", e.unref(i), t.widgetType, e.unref(i).jobUrl)
                        },
                        "data-ph-tevent-attr-title": e.unref(i).title,
                        "data-ph-tevent-attr-position": e.unref(i).track.position,
                        "data-ph-tevent-attr-eid": e.unref(i).track.eid,
                        "data-ph-tevent-attr-jobSeqForOtherJobs": e.unref(i).track.jobSeqForOtherJobs,
                        "data-ph-at-id": "job-link",
                        "data-ph-tevent-attr-trait5": e.unref(i).jobSeqNo,
                        "data-ph-tevent-attr-trait14": e.unref(i).category,
                        "data-ph-tevent-attr-trait132": e.unref(i).title,
                        "data-ph-tevent-attr-trait169": e.unref(i).jobId,
                        "data-ph-at-job-seqno-text": e.unref(i).jobSeqNo,
                        "data-ph-at-job-title-text": e.unref(i).title,
                        "data-ph-at-job-id-text": e.unref(i).jobId,
                        "aria-label": e.unref(i).title,
                        class: e.normalizeClass([
                            [b.$style["jw-title-link"], "phw-td-none", "phw-mr-5"], "phw-td-none phw-line-clamp phw-line-clamp-2 phw-g-text-x-large-dark phw-visited-link"
                        ]),
                        "data-access-list-item": t.index,
                        "data-ps": "063abcb2-a-1"
                    }, [e.createTextVNode(e.toDisplayString(e.unref(i).title), 1)], 10, _d)), [
                        [e.unref(a.vPhwSetting)],
                        [e.unref(a.vPhwTrack), "job_click"]
                    ])])), [
                        [e.unref(a.vPhwSetting)]
                    ])])), [
                        [e.unref(a.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", Td, [e.withDirectives((e.openBlock(), e.createElementBlock("div", Dd, [(e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(t.jobFields, r => {
                        var m, N, V, x, G, Q, $e, ce, ge, fe, ue, be, Ee, we, Se, _e, me, Te;
                        return e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                            key: r.name,
                            class: e.normalizeClass([b.$style["jw-job-info"]]),
                            "data-ph-at-id": "job-info",
                            "data-ps": "063abcb2-div-26"
                        }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                            key: r.name,
                            class: e.normalizeClass(["phw-pt-1", [b.$style["jw-job-field"], "job-" + r.name, "phw-mr-2"]]),
                            "data-ph-at-id": "job-" + r.name,
                            "data-ps": "063abcb2-div-27"
                        }, [r.settings.icon ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Bd, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", Jd, [e.withDirectives(e.createElementVNode("use", {
                            href: "#" + r.settings.icon,
                            "data-ps": "063abcb2-use-3"
                        }, null, 8, Nd), [
                            [e.unref(a.vPhwSetting)]
                        ])])), [
                            [e.unref(a.vPhwSetting)]
                        ])])), [
                            [e.unref(a.vPhwSetting)]
                        ]) : e.createCommentVNode("", !0), r.name && ["createdDate", "atsLastModifieddate", "postedDate", "expiryDate"].indexOf(r.name) != -1 && e.unref(tt)(e.unref(i)[r.name], ((N = (m = t.content) == null ? void 0 : m.jobWidget) == null ? void 0 : N.jobDateFormat) || "MMMM DD YYYY") ? e.withDirectives((e.openBlock(), e.createElementBlock("div", Ad, [e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                            class: e.normalizeClass(r.settings.label ? "" : ["phw-visually-hidden"]),
                            "data-ps": "063abcb2-span-11"
                        }, [e.createTextVNode(e.toDisplayString(((V = t.content) == null ? void 0 : V.jobWidget[r.name]) + ": "), 1)], 2)), [
                            [e.unref(a.vPhwSetting)]
                        ]), e.createTextVNode(" " + e.toDisplayString(e.unref(tt)(e.unref(i)[r.name], ((G = (x = t.content) == null ? void 0 : x.jobWidget) == null ? void 0 : G.jobDateFormat) || "MMMM DD YYYY")), 1)])), [
                            [e.unref(a.vPhwSetting)]
                        ]) : e.createCommentVNode("", !0), r.name && ["createdDate", "atsLastModifieddate", "postedDate", "expiryDate"].indexOf(r.name) === -1 ? e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                            key: 2,
                            role: "text",
                            class: "phw-g-text-small-secondary",
                            "data-ph-at-id": "job-" + r.name,
                            "data-ps": "063abcb2-div-29"
                        }, [(t == null ? void 0 : t.eachJob[r.name]) && ((Q = t == null ? void 0 : t.content) == null ? void 0 : Q.jobWidget) ? e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                            key: 0,
                            class: e.normalizeClass(r.settings.label ? "" : ["phw-visually-hidden"]),
                            "data-ps": "063abcb2-span-12"
                        }, [e.createTextVNode(e.toDisplayString((($e = t == null ? void 0 : t.content) == null ? void 0 : $e.jobWidget[r.name]) + ": "), 1)], 2)), [
                            [e.unref(a.vPhwSetting)]
                        ]) : e.createCommentVNode("", !0), e.createTextVNode(" " + e.toDisplayString(e.unref(i)[r.name]), 1)], 8, Pd)), [
                            [e.unref(a.vPhwSetting)]
                        ]) : e.createCommentVNode("", !0)], 10, jd)), [
                            [e.vShow, r.name && r.name != "title" && r.name != "descriptionTeaser" && e.unref(i)[r.name] && !Array.isArray(e.unref(i)[r.name]) && t.isMultiFieldEnabled(r.name, e.unref(i))],
                            [e.unref(a.vPhwSetting)]
                        ]), r.name && r.name != "title" && r.name != "descriptionTeaser" && Array.isArray(e.unref(i)[r.name]) && e.unref(i)[r.name].length > 1 ? e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                            key: 0,
                            class: e.normalizeClass(["phw-pt-1", [b.$style["jw-job-field"], "job-" + r.name, "phw-mr-2"]]),
                            "data-ps": "063abcb2-div-30"
                        }, [e.createCommentVNode("", !0), t ? e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                            key: 1,
                            id: t.widgetType + r.name + t.index,
                            class: e.normalizeClass(["phw-text-l", e.unref(i).jobSeqNo + "_jobModal_" + r.name, "phw-btn", "phw-justify-content-start", "phw-width-auto", "phw-g-btn-jobcard-info-link"]),
                            "data-modal-content-id": e.unref(i).jobSeqNo + "_jobModal_" + r.name,
                            "data-ph-at-id": "job-" + r.name,
                            "data-ps": "063abcb2-button-2",
                            onClick: z => t.openPopUp(e.unref(i), r)
                        }, [r.settings.icon && r.settings.icon.length ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Cd, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", Md, [e.withDirectives(e.createElementVNode("use", {
                            href: "#" + r.settings.icon,
                            "data-ps": "063abcb2-use-6"
                        }, null, 8, vd), [
                            [e.unref(a.vPhwSetting)]
                        ])])), [
                            [e.unref(a.vPhwSetting)]
                        ])])), [
                            [e.unref(a.vPhwSetting)]
                        ]) : e.createCommentVNode("", !0), e.createTextVNode(" " + e.toDisplayString(e.unref(ke)((ce = t.content) == null ? void 0 : ce.jobWidget[r.name], {
                            count: e.unref(i)[r.name].length
                        })) + " ", 1), e.withDirectives((e.openBlock(), e.createElementBlock("span", Id, [e.createTextVNode(e.toDisplayString(e.unref(ke)((ge = t.content) == null ? void 0 : ge.jobWidget[r.name + "_aria_label"], {
                            count: e.unref(i)[r.name].length
                        })), 1)])), [
                            [e.unref(a.vPhwSetting)]
                        ])], 10, Od)), [
                            [e.unref(a.vPhwSetting)],
                            [e.unref(a.vPhwTrack), t.trackClicks[r.name]]
                        ]) : e.createCommentVNode("", !0)], 2)), [
                            [e.unref(a.vPhwSetting)]
                        ]) : e.createCommentVNode("", !0), r.name && r.name != "title" && r.name != "descriptionTeaser" && Array.isArray(e.unref(i)[r.name]) && e.unref(i)[r.name].length > 1 ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Ld, [t.showModal && e.unref(i)[r.name].showPopUp ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                            key: 0,
                            id: e.unref(i).jobSeqNo + "_jobModal_" + r.name,
                            class: "phw-a11y-modal-area",
                            "data-ps": "063abcb2-div-32"
                        }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", Rd, [e.withDirectives((e.openBlock(), e.createElementBlock("div", Fd, [e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                            class: e.normalizeClass(["dialog-close", "phw-modal-close", "phw-g-modal-close-button"]),
                            "aria-label": (fe = t.content) == null ? void 0 : fe.closeDialog,
                            "data-ps": "063abcb2-button-3",
                            onClick: z => t.closePopUp(e.unref(i)[r.name])
                        }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Kd, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", Gd, [e.withDirectives(e.createElementVNode("use", Ud, null, 512), [
                            [e.unref(a.vPhwSetting)]
                        ])])), [
                            [e.unref(a.vPhwSetting)]
                        ])])), [
                            [e.unref(a.vPhwSetting)]
                        ])], 8, Vd)), [
                            [e.unref(a.vPhwSetting)]
                        ]), e.withDirectives((e.openBlock(), e.createElementBlock("h2", {
                            class: e.normalizeClass(["phw-g-h2-card-sub-title-dark-small", [b.$style["jw-modal-job-title"]]]),
                            "ally-label-heading": "",
                            "data-ps": "063abcb2-h2-2"
                        }, [e.createTextVNode(e.toDisplayString(e.unref(i).title), 1)], 2)), [
                            [e.unref(a.vPhwSetting)]
                        ])])), [
                            [e.unref(a.vPhwSetting)]
                        ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", qd, [e.withDirectives((e.openBlock(), e.createElementBlock("div", Wd, [e.createTextVNode(e.toDisplayString(e.unref(ke)((ue = t.content) == null ? void 0 : ue.jobWidget[r.name], {
                            count: (be = t == null ? void 0 : t.eachJob[r.name]) == null ? void 0 : be.length
                        })), 1)])), [
                            [e.unref(a.vPhwSetting)]
                        ]), e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                            role: ((Ee = t == null ? void 0 : t.eachJob[r.name]) == null ? void 0 : Ee.length) > 5 ? "region" : "",
                            class: e.normalizeClass([b.$style["jw-modal-job-fields"], "phw-overflow-auto"]),
                            tabindex: ((we = t == null ? void 0 : t.eachJob[r.name]) == null ? void 0 : we.length) > 5 ? "0" : "-1",
                            "aria-label": ((Se = t == null ? void 0 : t.eachJob[r.name]) == null ? void 0 : Se.length) > 5 ? (_e = t.content) == null ? void 0 : _e.jobWidget[r.name + "_list"] : "",
                            "data-ps": "063abcb2-div-36"
                        }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                            role: ((me = t == null ? void 0 : t.eachJob[r.name]) == null ? void 0 : me.length) > 1 ? "list" : "presentation",
                            "data-ps": "063abcb2-div-37"
                        }, [(e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(e.unref(i)[r.name], z => e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                            key: z.location || z,
                            class: e.normalizeClass(["phw-g-text-small-secondary phw-pb-2 phw-d-flex phw-align-items-center", [b.$style["jw-modal-content-block"]]]),
                            role: e.unref(i)[r.name].length > 1 ? "listitem" : "presentation",
                            "data-ps": "063abcb2-div-38"
                        }, [r.settings.icon && r.settings.icon.length ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Zd, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", Xd, [e.withDirectives(e.createElementVNode("use", {
                            href: "#" + r.settings.icon,
                            "data-ps": "063abcb2-use-8"
                        }, null, 8, Qd), [
                            [e.unref(a.vPhwSetting)]
                        ])])), [
                            [e.unref(a.vPhwSetting)]
                        ])])), [
                            [e.unref(a.vPhwSetting)]
                        ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("span", ea, [e.createTextVNode(e.toDisplayString(z.location || z), 1)])), [
                            [e.unref(a.vPhwSetting)]
                        ])], 10, Yd)), [
                            [e.unref(a.vPhwSetting)]
                        ])), 128))], 8, zd)), [
                            [e.unref(a.vPhwSetting)]
                        ])], 10, Hd)), [
                            [e.unref(a.vPhwSetting)]
                        ])])), [
                            [e.unref(a.vPhwSetting)]
                        ])])), [
                            [e.unref(a.vPhwSetting)]
                        ])], 8, xd)), [
                            [e.unref(a.vPhwSetting)]
                        ]) : e.createCommentVNode("", !0), ((Te = t == null ? void 0 : t.eachJob[r.name]) == null ? void 0 : Te.displayDropdown) && !t.showModal ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                            key: 1,
                            id: "ally-dropdown " + r.name,
                            class: "phw-mb-1 phw-pl-3 phw-word-break phw-g-text-small-secondary",
                            role: e.unref(i)[r.name].length > 1 ? "list" : "presentation",
                            "data-ps": "063abcb2-div-39"
                        }, [(e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(t == null ? void 0 : t.eachJob[r.name], z => {
                            var De;
                            return e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                                key: z,
                                role: ((De = e.unref(i)[r.name]) == null ? void 0 : De.length) > 1 ? "listitem" : "presentation",
                                "data-ps": "063abcb2-div-40"
                            }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", aa, [e.createTextVNode(e.toDisplayString(z), 1)])), [
                                [e.unref(a.vPhwSetting)]
                            ])], 8, da)), [
                                [e.unref(a.vPhwSetting)]
                            ])
                        }), 128))], 8, ta)), [
                            [e.unref(a.vPhwSetting)]
                        ]) : e.createCommentVNode("", !0)])), [
                            [e.unref(a.vPhwSetting)]
                        ]) : e.createCommentVNode("", !0)], 2)), [
                            [e.unref(a.vPhwSetting)]
                        ])
                    }), 128))])), [
                        [e.unref(a.vPhwSetting)]
                    ]), e.unref(i).smartHighlights && t.enabledFields.pjfSmartHighlights ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: 0,
                        class: e.normalizeClass([b.$style["jw-smart-highlights"]]),
                        "data-ph-at-id": "job-smart-tags",
                        "data-ps": "063abcb2-div-41"
                    }, [(e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(e.unref(i).smartHighlights, (r, m) => {
                        var N, V;
                        return e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                            key: r,
                            "data-ps": "063abcb2-div-42"
                        }, [r && t.widgetConfig.smartHighlights[m] ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                            key: 0,
                            class: e.normalizeClass([b.$style["jw-job-field"], "phw-g-text-small-secondary"]),
                            "data-ps": "063abcb2-div-43"
                        }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", na, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", ia, [e.withDirectives(e.createElementVNode("use", {
                            href: "#" + t.widgetConfig.smartHighlights[m].class,
                            "data-ps": "063abcb2-use-9"
                        }, null, 8, oa), [
                            [e.unref(a.vPhwSetting)]
                        ])])), [
                            [e.unref(a.vPhwSetting)]
                        ])])), [
                            [e.unref(a.vPhwSetting)]
                        ]), e.withDirectives((e.openBlock(), e.createElementBlock("span", sa, [e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                            class: e.normalizeClass(t.enabledFields.pjfSmartHighlights.settings.label ? "" : "phw-visually-hidden"),
                            "data-ps": "063abcb2-span-26"
                        }, [e.createTextVNode(e.toDisplayString(((V = (N = t.content) == null ? void 0 : N.jobWidget) == null ? void 0 : V[t.widgetConfig.smartHighlights[m].name]) + ": "), 1)], 2)), [
                            [e.unref(a.vPhwSetting)]
                        ]), e.createTextVNode(" " + e.toDisplayString(t.getHighLightsString(r)), 1)])), [
                            [e.unref(a.vPhwSetting)]
                        ])], 2)), [
                            [e.unref(a.vPhwSetting)]
                        ]) : e.createCommentVNode("", !0)])), [
                            [e.unref(a.vPhwSetting)]
                        ])
                    }), 128)), (e.unref(i).descriptionTeaser && t.enabledFields.descriptionTeaser || t.enabledActions.applyNow) && e.unref(i).smartHighlights && t.enabledFields.pjfSmartHighlights ? e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                        key: 0,
                        role: "button",
                        "aria-label": e.unref(ke)(e.unref(i).toggleOpenTeaser ? (ae = (K = t.content) == null ? void 0 : K.jobWidget) == null ? void 0 : ae.hideDetailsAriaLabel : (pe = (X = t.content) == null ? void 0 : X.jobWidget) == null ? void 0 : pe.showDetailsAriaLabel, {
                            title: e.unref(i).title
                        }),
                        "aria-expanded": e.unref(i).toggleOpenTeaser ? "true" : "false",
                        class: e.normalizeClass([b.$style["jw-smart-highlights-dropdown"], "phw-btn phw-g-btn-link", "phw-mt-2", "phw-width-4", "phw-justify-content-start"]),
                        "data-ps": "063abcb2-button-4",
                        onClick: h[0] || (h[0] = r => e.unref(i).toggleOpenTeaser = !e.unref(i).toggleOpenTeaser)
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", la, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", $a, [e.withDirectives(e.createElementVNode("use", {
                        href: "#" + (e.unref(i).toggleOpenTeaser ? "chevron-up" : "chevron-down"),
                        "data-ps": "063abcb2-use-10"
                    }, null, 8, ca), [
                        [e.unref(a.vPhwSetting)]
                    ])])), [
                        [e.unref(a.vPhwSetting)]
                    ])])), [
                        [e.unref(a.vPhwSetting)]
                    ]), e.createTextVNode(" " + e.toDisplayString(e.unref(i).toggleOpenTeaser ? (ie = (ye = t.content) == null ? void 0 : ye.jobWidget) == null ? void 0 : ie.hideDetails : (re = (se = t.content) == null ? void 0 : se.jobWidget) == null ? void 0 : re.showDetails), 1)], 10, ra)), [
                        [e.unref(a.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)], 2)), [
                        [e.unref(a.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), t.jobFits && t.fitDataLoaded && t.jobFits.layout && t.jobFits.layout[e.unref(o)] === "bottom" && e.unref(i).fitLevel && t.jobFitsSettConfig && t.jobFitsSettConfig.literalMap && t.jobFitsSettConfig.literalMap[e.unref(i).fitLevel] && t.enabledFits[t.jobFitsSettConfig.literalMap[e.unref(i).fitLevel]] ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: 1,
                        class: e.normalizeClass([b.$style["job-fit-bottom"], "phw-mt-1", t.jobFits.layout && t.jobFits.layout[e.unref(o)], t.jobFits.layout && t.jobFits.layout.style]),
                        "data-ps": "063abcb2-div-44"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("span", {
                        class: e.normalizeClass([b.$style["job-fit-tag"], $.value = t.enabledFits[t.jobFitsSettConfig.literalMap[e.unref(i).fitLevel]], e.unref($).settings.class, "phw-p-1", "phw-pt-050", "phw-pb-050", "phw-pt-sm-025", "phw-pb-sm-025", "phw-d-inline-flex", "phw-align-items-center", "phw-stroke-dark"]),
                        "data-ps": "063abcb2-span-28"
                    }, [(he = (oe = e.unref($)) == null ? void 0 : oe.settings) != null && he.icon.length ? e.withDirectives((e.openBlock(), e.createElementBlock("span", ga, [(g = (le = e.unref($)) == null ? void 0 : le.settings) != null && g.icon.length ? e.withDirectives((e.openBlock(), e.createElementBlock("svg", fa, [e.withDirectives(e.createElementVNode("use", {
                        href: "#" + ((M = (y = e.unref($)) == null ? void 0 : y.settings) == null ? void 0 : M.icon),
                        "data-ps": "063abcb2-use-11"
                    }, null, 8, ua), [
                        [e.unref(a.vPhwSetting)]
                    ])])), [
                        [e.unref(a.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(a.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("span", ba, [e.createTextVNode(e.toDisplayString((B = t.content) == null ? void 0 : B.jobWidget[e.unref($).name]), 1)])), [
                        [e.unref(a.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(a.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(a.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(i).descriptionTeaser && t.enabledFields.descriptionTeaser && !e.unref(i).smartHighlights ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: 2,
                        "data-ph-at-job-title-text": e.unref(i).descriptionTeaser,
                        "data-ph-at-id": "jobdescription-text",
                        "data-ps": "063abcb2-p-2",
                        "data-tag-type": "p",
                        class: "phw-word-break para-p phw-mt-2 phw-mb-2 phw-word-break"
                    }, [e.createTextVNode(e.toDisplayString(e.unref(i).descriptionTeaser), 1)], 8, pa)), [
                        [e.unref(a.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(i).toggleOpenTeaser && e.unref(i).descriptionTeaser && t.enabledFields.descriptionTeaser ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: 3,
                        "data-tag-type": "p",
                        class: e.normalizeClass(["para-p job-description phw-mt-3 phw-mb-0", [n[e.unref(i).jobSeqNo] || !(e.unref(i).smartHighlights && t.enabledFields.pjfSmartHighlights) ? "show" : "hide"]]),
                        "data-ps": "063abcb2-p-4"
                    }, [e.createTextVNode(e.toDisplayString(e.unref(i).descriptionTeaser), 1)], 2)), [
                        [e.unref(a.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(a.vPhwSetting)]
                    ])]), e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        role: t.jobActions.length > 1 ? "list" : "",
                        "data-ps": "063abcb2-div-45"
                    }, [(e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(t.jobActions, r => {
                        var m, N, V, x, G, Q, $e, ce, ge, fe;
                        return e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                            key: r.name,
                            "data-ph-at-id": "job-actions",
                            role: t.jobActions.length > 1 ? "listitem" : "",
                            "data-ps": "063abcb2-div-46"
                        }, [r.name === "addToCart" ? e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                            key: 0,
                            type: "button",
                            class: e.normalizeClass(["phw-btn", "phw-g-btn-link", "phw-td-none", t.jdPage ? "phw-ml-1" : "", b.$style["phw-add-to-cart"]]),
                            "data-ph-at-id": "save-job-click",
                            "aria-label": e.unref(i).isJobSaved ? e.unref(ke)((x = (V = t.content) == null ? void 0 : V.jobWidget) == null ? void 0 : x.jobSavedAriaLabel, {
                                title: e.unref(i).title
                            }) : e.unref(ke)((N = (m = t.content) == null ? void 0 : m.jobWidget) == null ? void 0 : N.saveJobAriaLabel, {
                                title: e.unref(i).title
                            }),
                            "aria-pressed": e.unref(i).isJobSaved ? "true" : "false",
                            "data-ps": "063abcb2-button-5",
                            onClick: h[1] || (h[1] = ue => t.handleSaveJob(e.unref(i)))
                        }, [r.settings.icon ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Sa, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", ma, [e.withDirectives(e.createElementVNode("use", {
                            href: e.unref(i).isJobSaved ? "#" + r.settings.activeicon : "#" + r.settings.icon,
                            "data-ps": "063abcb2-use-12"
                        }, null, 8, ka), [
                            [e.unref(a.vPhwSetting)]
                        ])])), [
                            [e.unref(a.vPhwSetting)]
                        ])])), [
                            [e.unref(a.vPhwSetting)]
                        ]) : e.createCommentVNode("", !0)], 10, ya)), [
                            [e.unref(a.vPhwSetting)]
                        ]) : e.createCommentVNode("", !0), r.name == "removeFromCart" ? e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                            key: 1,
                            type: "button",
                            class: e.normalizeClass([b.$style["jw-delete-icon"], "phw-btn", "phw-g-btn-link", "phw-mt-4", "phw-mt-sm-2", "phw-mr-4", "phw-width-auto", "phw-mr-sm-2"]),
                            "data-ph-at-id": "job-remove-link",
                            "aria-label": "Remove " + e.unref(i).title + " from job cart",
                            "data-ps": "063abcb2-button-5",
                            onClick: h[2] || (h[2] = ue => t.deleteJobFromCart(e.unref(i), void 0, t.isShowMore, t.index))
                        }, [e.withDirectives((e.openBlock(), e.createElementBlock("svg", _a, [e.withDirectives(e.createElementVNode("use", {
                            href: "#" + r.settings.icon,
                            "data-ps": "063abcb2-use-14"
                        }, null, 8, Ta), [
                            [e.unref(a.vPhwSetting)]
                        ])])), [
                            [e.unref(a.vPhwSetting)]
                        ]), r.settings.label ? e.withDirectives((e.openBlock(), e.createElementBlock("span", Da, [e.createTextVNode(e.toDisplayString((Q = (G = t.content) == null ? void 0 : G.jobWidget) == null ? void 0 : Q.removeJobText), 1)])), [
                            [e.unref(a.vPhwSetting)]
                        ]) : e.createCommentVNode("", !0)], 10, Ea)), [
                            [e.unref(a.vPhwSetting)]
                        ]) : e.createCommentVNode("", !0), r.name === "applyNow" ? e.withDirectives((e.openBlock(), e.createElementBlock("a", {
                            key: 2,
                            "data-ph-tevent-attr-trait5": e.unref(i).jobSeqNo,
                            "data-ph-tevent-attr-trait14": e.unref(i).category,
                            "data-ph-tevent-attr-trait132": e.unref(i).title,
                            "data-ph-tevent-attr-trait169": e.unref(i).jobId,
                            href: e.unref(i).actionUrl,
                            target: t.eachJob.externalApply ? "_blank" : "_self",
                            class: "phw-btn phw-g-btn-primary phw-ws-nowrap phw-justify-sm-content-start",
                            "data-ph-at-id": "apply-link",
                            "aria-label": ((ce = ($e = t.content) == null ? void 0 : $e.jobWidget) == null ? void 0 : ce.applyNowText.ariaLabel) + " " + e.unref(i).title,
                            "data-ps": "063abcb2-a-2"
                        }, [e.createTextVNode(e.toDisplayString((fe = (ge = t.content) == null ? void 0 : ge.jobWidget) == null ? void 0 : fe.applyNowText.text), 1)], 8, ja)), [
                            [e.unref(a.vPhwSetting)],
                            [e.unref(a.vPhwTrack), "apply_click"]
                        ]) : e.createCommentVNode("", !0)], 8, wa)), [
                            [e.unref(a.vPhwSetting)]
                        ])
                    }), 128))], 8, ha)), [
                        [e.unref(a.vPhwSetting)]
                    ])])), [
                        [e.unref(a.vPhwSetting)]
                    ])])), [
                        [e.unref(a.vPhwSetting)]
                    ])
                }
            }
        }),
        Ja = {
            "jw-job-info": "_jw-job-info_mh1ky_3",
            "job-fit": "_job-fit_mh1ky_9",
            "job-fit-tag": "_job-fit-tag_mh1ky_15",
            "jw-job-field": "_jw-job-field_mh1ky_35",
            "jw-jd-job-field": "_jw-jd-job-field_mh1ky_43",
            "phw-add-to-cart": "_phw-add-to-cart_mh1ky_53",
            "jw-modal-job-title": "_jw-modal-job-title_mh1ky_65",
            "jw-modal-job-fields": "_jw-modal-job-fields_mh1ky_71",
            "jw-smart-highlights": "_jw-smart-highlights_mh1ky_77",
            "jw-job-card-image": "_jw-job-card-image_mh1ky_89",
            image: "_image_mh1ky_97",
            "primary-image": "_primary-image_mh1ky_97",
            "jw-job-card-logo": "_jw-job-card-logo_mh1ky_115",
            "smart-tag": "_smart-tag_mh1ky_123"
        },
        nn = "",
        on = "",
        dt = (d, t) => {
            const o = d.__vccOpts || d;
            for (const [n, $] of t) o[n] = $;
            return o
        },
        Na = dt(Ba, [
            ["__cssModules", {
                $style: Ja
            }]
        ]),
        Aa = {
            class: "phw-widget-block-area phw-widget-box phw-pr-6 phw-pl-6 phw-pr-xl-5 phw-pl-xl-5 phw-pr-lg-0 phw-pl-lg-0",
            "data-ps": "063abcb2-div-10"
        },
        Pa = {
            key: 0,
            class: "show-loader",
            "data-ps": "063abcb2-div-12"
        },
        Oa = ["aria-label"],
        Ca = ["innerHTML"],
        Ma = ["role", "data-ph-at-widget-data-count"],
        va = ["role"],
        Ia = {
            class: "phw-mt-4 phw-text-c"
        },
        La = e.defineComponent({
            __name: "JobComponent",
            props: {
                reqFields: null,
                content: null,
                widgetInfo: null,
                jobResults: null,
                widgetType: null,
                handleTrackEvent: null,
                widgetGridClass: null,
                singleColumnEnabled: {
                    type: Boolean
                },
                initiateJobSubscribeEvent: null,
                widgetSettings: null
            },
            setup(d) {
                var oe, he, le, g, y, M;
                const t = d,
                    o = e.ref(),
                    n = {
                        multi_location: "multi_location_click",
                        multi_category: "multi_category_click",
                        educationLevel: "educationLevel_click"
                    },
                    $ = e.ref({}),
                    i = ((le = (he = (oe = t.widgetSettings) == null ? void 0 : oe.data) == null ? void 0 : he.widgetSettings) == null ? void 0 : le.gridColumns) || 3,
                    f = ((M = (y = (g = t.widgetSettings) == null ? void 0 : g.data) == null ? void 0 : y.widgetSettings) == null ? void 0 : M.gridRows) || 1,
                    p = `phw-grid-${i}`,
                    b = e.ref(i * f),
                    h = e.ref(!1),
                    w = e.ref(!1),
                    s = e.getCurrentInstance(),
                    A = "jobCartUpdated",
                    {
                        isBulkcartEnable: O,
                        enabledFits: _,
                        jobFits: E,
                        jobTags: j,
                        jobTagsConfig: D,
                        fitDataLoaded: R,
                        jobFitsSettConfig: L,
                        tagsDataLoaded: v,
                        jobTagsData: C,
                        showModal: F,
                        openPopUp: W,
                        closePopUp: ee,
                        showLoader: Y,
                        isModal: te,
                        getJobStatus: de
                    } = Fe({}, o),
                    {
                        getJobUrl: ne,
                        deleteJobFromCart: Z,
                        addToJobCart: H
                    } = Re({
                        isErrorMsgReqd: !1,
                        widgetType: t.widgetType
                    }, o);

                function P() {
                    var B, r, m;
                    if (((m = (r = (B = t.widgetSettings) == null ? void 0 : B.data) == null ? void 0 : r.widgetSettings) == null ? void 0 : m.layout) === "slider") {
                        b.value = t.jobResults.length;
                        return
                    }
                    b.value < $.value.length && (b.value = i * f, h.value = !0, w.value = !1)
                }

                function U() {
                    de($.value).then(B => {
                        $.value = B
                    })
                }
                e.onMounted(() => {
                    $.value = t.jobResults, te(t.reqFields.jobFields), t.initiateJobSubscribeEvent(), P(), U(), a.subscribeEvent(A, B => {
                        if (t.widgetType !== B.widgetType) {
                            for (let r = 0; r < $.value.length; r++)
                                if ($.value[r].jobSeqNo === B.jobSeqNo) {
                                    $.value[r].isJobSaved = !$.value[r].isJobSaved;
                                    break
                                }
                        }
                    })
                }), e.watch(() => t.jobResults, () => {
                    $.value = t.jobResults || [], P(), U()
                });

                function K() {
                    const B = b.value;
                    b.value + i <= $.value.length ? b.value += i : b.value = $.value.length, b.value === $.value.length && (h.value = !1, w.value = !0), e.nextTick(() => {
                        var r;
                        (r = s == null ? void 0 : s.proxy) == null || r.$forceUpdate(), o.value.querySelector(`[data-access-list-item="${B}"]`).focus()
                    })
                }

                function ae() {
                    b.value = i * f, h.value = !0, w.value = !1, e.nextTick(() => {
                        o.value.querySelector('[data-access="seeNext"]').focus()
                    })
                }

                function X(B, r) {
                    return !(B === "location" && r.multi_location && r.multi_location.length > 1 || B === "category" && r.multi_category && r.multi_category.length > 1)
                }

                function pe(B) {
                    const r = B;
                    r.displayDropdown = !1
                }

                function ye(B) {
                    const r = B;
                    r.displayDropdown = !r.displayDropdown
                }

                function ie(B) {
                    let r = "";
                    return B && (typeof B == "string" ? B : (Object.values(B).forEach((m, N) => {
                        N > 0 ? r += `,${m}` : r += m
                    }), r))
                }

                function se() {
                    O.value = !0
                }

                function re(B) {
                    const r = B;
                    r.inProgress || (r.inProgress = !0, r.isJobSaved ? Z(r, void 0, void 0, void 0, t.widgetType) : (H(r, t.widgetType), se()))
                }
                return (B, r) => {
                    var m, N, V, x, G, Q, $e, ce, ge, fe, ue;
                    return e.withDirectives((e.openBlock(), e.createElementBlock("div", Aa, [e.unref(Y) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", Pa, null, 512)), [
                        [e.vShow, e.unref(Y)],
                        [e.unref(a.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), !e.unref(Y) && e.unref($) && t.content ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: 1,
                        ref_key: "element",
                        ref: o,
                        role: "region",
                        "aria-label": t.content[t.widgetInfo.contentName + "widgetHeading"],
                        "data-ps": "063abcb2-div-13"
                    }, [e.withDirectives(e.createElementVNode("h2", {
                        class: "phw-job-widget-heading phw-pb-4 phw-pb-xl-3 phw-pb-sm-2",
                        "data-ps": "063abcb2-h3-1",
                        style: e.normalizeStyle({
                            color: (V = (N = (m = d.widgetSettings) == null ? void 0 : m.data) == null ? void 0 : N.widgetSettings) == null ? void 0 : V.widgetHeadingColor
                        }),
                        innerHTML: t.content[t.widgetInfo.contentName + "widgetHeading"]
                    }, null, 12, Ca), [
                        [e.unref(a.vPhwSetting)]
                    ]), e.unref($) && e.unref($).length ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: 0,
                        class: e.normalizeClass(["phw-posn-relative arrow-middle jobs-list", (G = (x = d.reqFields) == null ? void 0 : x.jobActions) != null && G.length ? "" : "no-actions"]),
                        "data-ps": "063abcb2-div-14"
                    }, [e.unref($) && e.unref($).length ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: 0,
                        "data-ps": "063abcb2-div-15",
                        role: e.unref($).length > 2 ? "list" : "presentation",
                        "data-ph-at-widget-data-count": e.unref($).length,
                        class: e.normalizeClass([p, "phw-content-block phw-grid phw-grid-lg-1"])
                    }, [(e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(e.unref($).slice(0, b.value), (be, Ee) => {
                        var we, Se, _e, me, Te, z, De, Oe, Ce, Me;
                        return e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                            key: be.jobSeqNo,
                            class: e.normalizeClass(["phw-card-block phw-posn-relative phw-g-card-bg-white phw-stroke-dark", ["jobs-list-item"]]),
                            role: e.unref($).length > 2 ? "listitem" : "presentation",
                            "data-ps": "063abcb2-div-17",
                            style: e.normalizeStyle({
                                "background-color": (_e = (Se = (we = d.widgetSettings) == null ? void 0 : we.data) == null ? void 0 : Se.widgetSettings) == null ? void 0 : _e.cardColor,
                                "border-color": (z = (Te = (me = d.widgetSettings) == null ? void 0 : me.data) == null ? void 0 : Te.widgetSettings) == null ? void 0 : z.borderColor
                            })
                        }, [e.withDirectives((e.openBlock(), e.createBlock(Na, {
                            key: be.jobSeqNo,
                            content: d.content,
                            "each-job": be,
                            "widget-type": d.widgetType,
                            "enabled-fields": (De = t.reqFields) == null ? void 0 : De.enabledFields,
                            "enabled-actions": (Oe = t.reqFields) == null ? void 0 : Oe.enabledActions,
                            "job-fits": e.unref(E),
                            "fit-data-loaded": e.unref(R),
                            "job-fits-sett-config": e.unref(L),
                            "enabled-fits": e.unref(_),
                            "job-tags-config": e.unref(D),
                            "tags-data-loaded": e.unref(v),
                            "job-tags": e.unref(j),
                            "job-tags-data": e.unref(C),
                            "get-job-url": e.unref(ne),
                            "job-fields": (Ce = t.reqFields) == null ? void 0 : Ce.jobFields,
                            "job-actions": (Me = t.reqFields) == null ? void 0 : Me.jobActions,
                            "is-multi-field-enabled": X,
                            "show-modal": e.unref(F),
                            index: Ee,
                            "close-drop-down": pe,
                            "change-drop-down": ye,
                            "open-pop-up": e.unref(W),
                            "close-pop-up": e.unref(ee),
                            "widget-config": e.unref(T),
                            "get-high-lights-string": ie,
                            "delete-job-from-cart": e.unref(Z),
                            "handle-save-job": re,
                            "track-clicks": n,
                            "handle-track-event": t.handleTrackEvent,
                            "single-column-enabled": d.singleColumnEnabled,
                            "data-ps": "063abcb2-jobcardDefault-1"
                        }, null, 8, ["content", "each-job", "widget-type", "enabled-fields", "enabled-actions", "job-fits", "fit-data-loaded", "job-fits-sett-config", "enabled-fits", "job-tags-config", "tags-data-loaded", "job-tags", "job-tags-data", "get-job-url", "job-fields", "job-actions", "show-modal", "index", "open-pop-up", "close-pop-up", "widget-config", "delete-job-from-cart", "handle-track-event", "single-column-enabled"])), [
                            [e.unref(a.vPhwSetting)]
                        ])], 12, va)), [
                            [e.unref(a.vPhwSetting)]
                        ])
                    }), 128))], 10, Ma)), [
                        [e.unref(a.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.createElementVNode("div", Ia, [e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                        class: "phw-btn phw-g-btn-secondary",
                        "data-ph-at-id": "seeless-button",
                        "data-access": "seeLess",
                        "data-ps": "063abcb2-button-6",
                        onClick: r[0] || (r[0] = be => ae())
                    }, [e.createTextVNode(e.toDisplayString((ce = ($e = (Q = t.content) == null ? void 0 : Q.jobWidget) == null ? void 0 : $e.seeLessText) == null ? void 0 : ce.text), 1)])), [
                        [e.vShow, w.value],
                        [e.unref(a.vPhwSetting)]
                    ]), e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                        class: "phw-btn phw-g-btn-secondary",
                        "data-access": "seeNext",
                        "data-ph-at-id": "seenext-button",
                        "data-ps": "063abcb2-button-7",
                        onClick: r[1] || (r[1] = be => K())
                    }, [e.createTextVNode(e.toDisplayString((ue = (fe = (ge = t.content) == null ? void 0 : ge.jobWidget) == null ? void 0 : fe.seeMoreText) == null ? void 0 : ue.text), 1)])), [
                        [e.vShow, h.value],
                        [e.unref(a.vPhwSetting)]
                    ])])], 2)), [
                        [e.unref(a.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)], 8, Oa)), [
                        [e.unref(a.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(a.vPhwSetting)]
                    ])
                }
            }
        }),
        rn = "",
        xa = {
            class: "phw-container",
            "data-ignore-slider": "desktop",
            "data-ps": "063abcb2-div-2"
        },
        Ra = {
            "data-ps": "063abcb2-div-3"
        },
        Fa = {
            key: 0,
            class: "phw-d-flex phw-justify-content-center",
            "data-ps": "063abcb2-div-9"
        },
        Va = {
            class: "phw-spinner-border phw-primary",
            "data-ps": "063abcb2-div-4"
        },
        Ka = {
            class: "phw-visually-hidden",
            "data-ps": "063abcb2-span-1"
        },
        Ga = {
            key: 0,
            class: "phw-heading-block phw-pb-2 phw-pb-xl-2 phw-pb-sm-2 phw-pr-xl-5 phw-pl-xl-5 phw-pr-lg-0 phw-pl-lg-0",
            "data-ps": "063abcb2-div-8"
        },
        Ua = ["arrow-icon", "data-phw-slider-opts"],
        qa = {
            "data-ps": "063abcb2-div-48",
            class: "phw-slider-track"
        },
        Wa = ["id", "aria-selected", "title", "onClick"],
        Ha = {
            class: "phw-content-block",
            "data-ps": "063abcb2-div-6"
        },
        za = e.defineComponent({
            __name: "ApwDefaultDefaultComponent",
            props: {
                contentId: null,
                theme: null,
                widgetTag: null,
                instanceId: null,
                nearBy: null,
                recentlyViewed: null,
                recomJobsBrowsingHistory: null,
                recomBasedProfile: null,
                recentlyViewedJobs: null,
                recentlyAddedJobs: null,
                jobsInInterestedCategory: null,
                displayName: null,
                nearByJobs: null,
                leastAppliedJobs: null,
                peopleAlsoViewedJobs: null,
                recomBasedOnJobCart: null,
                similarJobs: null,
                type: null,
                recomBasedOnApplies: null,
                targetedJobs: null,
                completeYourApplication: null,
                profileRecomJobs: null,
                latestJobs: null,
                browsingHistoryJobs: null,
                name: null,
                jobsMightNotThoughtOf: null,
                peopleAlsoAppliedJobs: null,
                funcWidgetId: null,
                phId: null,
                widget: null,
                widgetConfigMode: null,
                ignoreWidgetTitle: {
                    type: Boolean
                },
                singleColumnEnabled: {
                    type: Boolean
                }
            },
            setup(d) {
                const t = d,
                    o = e.ref(),
                    n = e.ref({}),
                    $ = a.getCachedDDO("canvasPxPageWidgetConfig"),
                    {
                        getContent: i,
                        wdgtResponses: f,
                        pageState: p,
                        init: b,
                        showLoader: h,
                        handleTrackEvent: w,
                        activeWidgetBlock: s,
                        activateWidgetTab: A,
                        widgetActiveTabList: O,
                        sliderOptions: _,
                        wdtReqFields: E,
                        initiateJobSubscribeEvent: j,
                        sliderOptionss: D,
                        sliderIocnsAndClasses: R
                    } = Ft(t, o);
                e.onMounted(() => {
                    i(t.contentId).then(v => {
                        n.value = v || {}, b()
                    }), a.usePhCommon().init(o.value, n, t.instanceId)
                });

                function L(v) {
                    a.DefaultSlider.refresh(o.value, v)
                }
                return e.watch(() => O, () => {
                    e.nextTick(() => {
                        L(_)
                    })
                }), (v, C) => {
                    var F, W, ee, Y, te, de, ne, Z, H;
                    return e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        ref_key: "element",
                        ref: o,
                        class: e.normalizeClass([v.$style["phw-widget-wrapper"], "phw-widget-ctr"]),
                        "data-ps": "063abcb2-div-1",
                        style: e.normalizeStyle({
                            backgroundColor: (ee = (W = (F = e.unref($)) == null ? void 0 : F.data) == null ? void 0 : W.widgetSettings) == null ? void 0 : ee.widgetBackgroundColor
                        })
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", xa, [e.withDirectives((e.openBlock(), e.createElementBlock("div", Ra, [e.unref(h) ? e.withDirectives((e.openBlock(), e.createElementBlock("div", Fa, [e.withDirectives((e.openBlock(), e.createElementBlock("div", Va, [e.withDirectives((e.openBlock(), e.createElementBlock("span", Ka, [e.createTextVNode(e.toDisplayString((Y = n.value) == null ? void 0 : Y.loadingText), 1)])), [
                        [e.unref(a.vPhwSetting)]
                    ])])), [
                        [e.unref(a.vPhwSetting)]
                    ])])), [
                        [e.unref(a.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(h) ? e.createCommentVNode("", !0) : e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: 1,
                        class: e.normalizeClass(["tab-count-" + e.unref(O).length]),
                        "data-ps": "063abcb2-div-5"
                    }, [e.unref(O).length > 1 ? e.withDirectives((e.openBlock(), e.createElementBlock("div", Ga, [e.unref(O).length > 1 ? e.withDirectives((e.openBlock(), e.createElementBlock("h2", {
                        key: 0,
                        "data-ps": "063abcb2-h2-1",
                        class: "phw-text-c phw-mb-3",
                        style: e.normalizeStyle({
                            color: (ne = (de = (te = e.unref($)) == null ? void 0 : te.data) == null ? void 0 : de.widgetSettings) == null ? void 0 : ne.widgetHeadingColor
                        })
                    }, [e.createTextVNode(e.toDisplayString((Z = n.value) == null ? void 0 : Z.widgetHeading), 1)], 4)), [
                        [e.unref(a.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.unref(O).length > 1 ? e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        key: 1,
                        class: e.normalizeClass(["phw-slider arrow-middle", v.$style["phw-slider-mobile"], e.unref(R).arrowClass, e.unref(R).paginationClass, e.unref(R).paginationNumberClass]),
                        "arrow-icon": e.unref(R).arrowIcon,
                        style: {
                            visibility: "visible"
                        },
                        "data-ignore-slider": "desktop",
                        "data-phw-slider-opts": e.unref(D) || "eyJwZXJQYWdlIjoiMSIsInBlck1vdmUiOiIxIiwiZm9jdXMiOiJsZWZ0IiwicGFnaW5hdGlvbiI6InRydWUiLCJhcnJvd1BhdGgiOiJNMTguMjMyNSAyNEwyMS44MSAyMC40MjI1SDEzLjgyMTdWMTguNzU1OEgyMS44MUwxOC4yMzI1IDE1LjE3ODNMMTkuNDEwOCAxNEwyNSAxOS41ODkyTDE5LjQxMDggMjUuMTc4M0wxOC4yMzI1IDI0WiIsImJyZWFrcG9pbnRzIjp7IjEwMjUiOnsicGVyUGFnZSI6IjEiLCJmaXhlZFdpZHRoIjoiMTAwJSJ9fX0=",
                        "data-ps": "063abcb2-div-47"
                    }, [e.withDirectives((e.openBlock(), e.createElementBlock("div", qa, [e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        class: e.normalizeClass([v.$style["phw-tab-area"], "phw-slider-list"]),
                        "data-ps": "063abcb2-div-10"
                    }, [(e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(e.unref(O), P => {
                        var U, K, ae;
                        return e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                            key: P.type,
                            class: "phw-slider-slide phw-btn-block phw-justify-md-content-center",
                            role: "tablist",
                            "data-ps": "063abcb2-div-11"
                        }, [e.withDirectives((e.openBlock(), e.createElementBlock("button", {
                            id: P.type,
                            type: "button",
                            role: "tab",
                            "aria-selected": P.type === e.unref(s),
                            class: e.normalizeClass([
                                [v.$style["btn-max-width"], "btn", "phw-btn", P && P.widgetResponse ? "" : "hide", P.type === e.unref(s) ? "phw-g-btn-tab-link-active" : "phw-g-btn-tab-link"], "phw-mr-3 phw-sm-mb-3 phw-g-back-to-top"
                            ]),
                            title: n.value && n.value[P.contentName + "widgetHeading"],
                            "data-ps": "063abcb2-button-1",
                            style: e.normalizeStyle({
                                color: (ae = (K = (U = e.unref($)) == null ? void 0 : U.data) == null ? void 0 : K.widgetSettings) == null ? void 0 : ae.widgetHeadingColor
                            }),
                            onClick: X => e.unref(A)(P.type)
                        }, [e.createTextVNode(e.toDisplayString(n.value && n.value[P.contentName + "widgetShortHeading"] || n.value[P.contentName + "widgetHeading"]), 1)], 14, Wa)), [
                            [e.unref(a.vPhwSetting)]
                        ])])), [
                            [e.unref(a.vPhwSetting)]
                        ])
                    }), 128))], 2)), [
                        [e.unref(a.vPhwSetting)]
                    ])])), [
                        [e.unref(a.vPhwSetting)]
                    ])], 10, Ua)), [
                        [e.unref(a.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0)])), [
                        [e.unref(a.vPhwSetting)]
                    ]) : e.createCommentVNode("", !0), e.withDirectives((e.openBlock(), e.createElementBlock("div", Ha, [e.withDirectives((e.openBlock(), e.createElementBlock("div", {
                        class: e.normalizeClass([v.$style["apw-widget-container"], "phw-widget-cntr-area"]),
                        "data-ps": "063abcb2-div-7"
                    }, [(e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(e.unref(f), P => e.withDirectives((e.openBlock(), e.createBlock(La, {
                        key: P,
                        element: e.unref(o),
                        "req-fields": e.unref(E)[P.type + "-v1"],
                        "widget-type": P.type,
                        class: e.normalizeClass([P && P.widgetGridClass, e.unref(O).length > 1 ? "ignore-heading" : ""]),
                        "widget-grid-class": P && P.widgetGridClass,
                        content: n.value,
                        "widget-info": P,
                        "job-results": P && P.widgetResponse,
                        "data-event-eid": P && P.impressionEid,
                        "data-event-jobseqnos": P && P.impressionJobSeqNos,
                        "data-event-pxsegmentstate": e.unref(p),
                        "data-widget": P && (P.elementTag || P.type + "-v1"),
                        "element-tag": P && (P.elementTag || P.type + "-v1"),
                        "handle-track-event": e.unref(w),
                        "single-column-enabled": d.singleColumnEnabled,
                        "data-ps": "063abcb2-jobComponent-1",
                        "initiate-job-subscribe-event": e.unref(j),
                        "widget-settings": e.unref($)
                    }, null, 8, ["element", "req-fields", "widget-type", "class", "widget-grid-class", "content", "widget-info", "job-results", "data-event-eid", "data-event-jobseqnos", "data-event-pxsegmentstate", "data-widget", "element-tag", "handle-track-event", "single-column-enabled", "initiate-job-subscribe-event", "widget-settings"])), [
                        [e.vShow, P.type === e.unref(s)],
                        [e.unref(a.vPhwSetting)]
                    ])), 128))], 2)), [
                        [e.unref(a.vPhwSetting)]
                    ])])), [
                        [e.unref(a.vPhwSetting)]
                    ])], 2)), [
                        [e.unref(a.vPhwSetting)]
                    ])])), [
                        [e.unref(a.vPhwSetting)]
                    ])])), [
                        [e.unref(a.vPhwSetting)]
                    ])], 6)), [
                        [e.vShow, (H = e.unref(f)) == null ? void 0 : H.length],
                        [e.unref(a.vPhwSetting)]
                    ])
                }
            }
        }),
        ln = "";
    return dt(za, [
        ["__cssModules", {
            $style: {
                "phw-widget-wrapper": "_phw-widget-wrapper_tvgwn_3",
                "phw-tab-area": "_phw-tab-area_tvgwn_11",
                "apw-widget-container": "_apw-widget-container_tvgwn_17",
                "btn-max-width": "_btn-max-width_tvgwn_49",
                "phw-slider-mobile": "_phw-slider-mobile_tvgwn_61"
            }
        }]
    ])
});