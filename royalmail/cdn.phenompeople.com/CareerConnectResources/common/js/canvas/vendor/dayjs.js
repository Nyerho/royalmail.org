/*dayjs.min.js*/ ! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd1 ? define(e) : t.dayjs = e()
}(this, function() {
    "use strict";
    var t = "millisecond",
        e = "second",
        n = "minute",
        r = "hour",
        i = "day",
        s = "week",
        u = "month",
        a = "quarter",
        o = "year",
        f = "date",
        h = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,
        c = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
        d = {
            name: "en",
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
        },
        $ = function(t, e, n) {
            var r = String(t);
            return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t
        },
        l = {
            s: $,
            z: function(t) {
                var e = -t.utcOffset(),
                    n = Math.abs(e),
                    r = Math.floor(n / 60),
                    i = n % 60;
                return (e <= 0 ? "+" : "-") + $(r, 2, "0") + ":" + $(i, 2, "0")
            },
            m: function t(e, n) {
                if (e.date() < n.date()) return -t(n, e);
                var r = 12 * (n.year() - e.year()) + (n.month() - e.month()),
                    i = e.clone().add(r, u),
                    s = n - i < 0,
                    a = e.clone().add(r + (s ? -1 : 1), u);
                return +(-(r + (n - i) / (s ? i - a : a - i)) || 0)
            },
            a: function(t) {
                return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
            },
            p: function(h) {
                return {
                    M: u,
                    y: o,
                    w: s,
                    d: i,
                    D: f,
                    h: r,
                    m: n,
                    s: e,
                    ms: t,
                    Q: a
                }[h] || String(h || "").toLowerCase().replace(/s$/, "")
            },
            u: function(t) {
                return void 0 === t
            }
        },
        y = "en",
        M = {};
    M[y] = d;
    var m = function(t) {
            return t instanceof S
        },
        D = function(t, e, n) {
            var r;
            if (!t) return y;
            if ("string" == typeof t) M[t] && (r = t), e && (M[t] = e, r = t);
            else {
                var i = t.name;
                M[i] = t, r = i
            }
            return !n && r && (y = r), r || !n && y
        },
        v = function(t, e) {
            if (m(t)) return t.clone();
            var n = "object" == typeof e ? e : {};
            return n.date = t, n.args = arguments, new S(n)
        },
        g = l;
    g.l = D, g.i = m, g.w = function(t, e) {
        return v(t, {
            locale: e.$L,
            utc: e.$u,
            x: e.$x,
            $offset: e.$offset
        })
    };
    var S = function() {
            function d(t) {
                this.$L = D(t.locale, null, !0), this.parse(t)
            }
            var $ = d.prototype;
            return $.parse = function(t) {
                this.$d = function(t) {
                    var e = t.date,
                        n = t.utc;
                    if (null === e) return new Date(NaN);
                    if (g.u(e)) return new Date;
                    if (e instanceof Date) return new Date(e);
                    if ("string" == typeof e && !/Z$/i.test(e)) {
                        var r = e.match(h);
                        if (r) {
                            var i = r[2] - 1 || 0,
                                s = (r[7] || "0").substring(0, 3);
                            return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)
                        }
                    }
                    return new Date(e)
                }(t), this.$x = t.x || {}, this.init()
            }, $.init = function() {
                var t = this.$d;
                this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds()
            }, $.$utils = function() {
                return g
            }, $.isValid = function() {
                return !("Invalid Date" === this.$d.toString())
            }, $.isSame = function(t, e) {
                var n = v(t);
                return this.startOf(e) <= n && n <= this.endOf(e)
            }, $.isAfter = function(t, e) {
                return v(t) < this.startOf(e)
            }, $.isBefore = function(t, e) {
                return this.endOf(e) < v(t)
            }, $.$g = function(t, e, n) {
                return g.u(t) ? this[e] : this.set(n, t)
            }, $.unix = function() {
                return Math.floor(this.valueOf() / 1e3)
            }, $.valueOf = function() {
                return this.$d.getTime()
            }, $.startOf = function(t, a) {
                var h = this,
                    c = !!g.u(a) || a,
                    d = g.p(t),
                    $ = function(t, e) {
                        var n = g.w(h.$u ? Date.UTC(h.$y, e, t) : new Date(h.$y, e, t), h);
                        return c ? n : n.endOf(i)
                    },
                    l = function(t, e) {
                        return g.w(h.toDate()[t].apply(h.toDate("s"), (c ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), h)
                    },
                    y = this.$W,
                    M = this.$M,
                    m = this.$D,
                    D = "set" + (this.$u ? "UTC" : "");
                switch (d) {
                    case o:
                        return c ? $(1, 0) : $(31, 11);
                    case u:
                        return c ? $(1, M) : $(0, M + 1);
                    case s:
                        var v = this.$locale().weekStart || 0,
                            S = (y < v ? y + 7 : y) - v;
                        return $(c ? m - S : m + (6 - S), M);
                    case i:
                    case f:
                        return l(D + "Hours", 0);
                    case r:
                        return l(D + "Minutes", 1);
                    case n:
                        return l(D + "Seconds", 2);
                    case e:
                        return l(D + "Milliseconds", 3);
                    default:
                        return this.clone()
                }
            }, $.endOf = function(t) {
                return this.startOf(t, !1)
            }, $.$set = function(s, a) {
                var h, c = g.p(s),
                    d = "set" + (this.$u ? "UTC" : ""),
                    $ = (h = {}, h[i] = d + "Date", h[f] = d + "Date", h[u] = d + "Month", h[o] = d + "FullYear", h[r] = d + "Hours", h[n] = d + "Minutes", h[e] = d + "Seconds", h[t] = d + "Milliseconds", h)[c],
                    l = c === i ? this.$D + (a - this.$W) : a;
                if (c === u || c === o) {
                    var y = this.clone().set(f, 1);
                    y.$d[$](l), y.init(), this.$d = y.set(f, Math.min(this.$D, y.daysInMonth())).$d
                } else $ && this.$d[$](l);
                return this.init(), this
            }, $.set = function(t, e) {
                return this.clone().$set(t, e)
            }, $.get = function(t) {
                return this[g.p(t)]()
            }, $.add = function(t, a) {
                var f, h = this;
                t = Number(t);
                var c = g.p(a),
                    d = function(e) {
                        var n = v(h);
                        return g.w(n.date(n.date() + Math.round(e * t)), h)
                    };
                if (c === u) return this.set(u, this.$M + t);
                if (c === o) return this.set(o, this.$y + t);
                if (c === i) return d(1);
                if (c === s) return d(7);
                var $ = (f = {}, f[n] = 6e4, f[r] = 36e5, f[e] = 1e3, f)[c] || 1,
                    l = this.$d.getTime() + t * $;
                return g.w(l, this)
            }, $.subtract = function(t, e) {
                return this.add(-1 * t, e)
            }, $.format = function(t) {
                var e = this;
                if (!this.isValid()) return "Invalid Date";
                var n = t || "YYYY-MM-DDTHH:mm:ssZ",
                    r = g.z(this),
                    i = this.$locale(),
                    s = this.$H,
                    u = this.$m,
                    a = this.$M,
                    o = i.weekdays,
                    f = i.months,
                    h = function(t, r, i, s) {
                        return t && (t[r] || t(e, n)) || i[r].substr(0, s)
                    },
                    d = function(t) {
                        return g.s(s % 12 || 12, t, "0")
                    },
                    $ = i.meridiem || function(t, e, n) {
                        var r = t < 12 ? "AM" : "PM";
                        return n ? r.toLowerCase() : r
                    },
                    l = {
                        YY: String(this.$y).slice(-2),
                        YYYY: this.$y,
                        M: a + 1,
                        MM: g.s(a + 1, 2, "0"),
                        MMM: h(i.monthsShort, a, f, 3),
                        MMMM: h(f, a),
                        D: this.$D,
                        DD: g.s(this.$D, 2, "0"),
                        d: String(this.$W),
                        dd: h(i.weekdaysMin, this.$W, o, 2),
                        ddd: h(i.weekdaysShort, this.$W, o, 3),
                        dddd: o[this.$W],
                        H: String(s),
                        HH: g.s(s, 2, "0"),
                        h: d(1),
                        hh: d(2),
                        a: $(s, u, !0),
                        A: $(s, u, !1),
                        m: String(u),
                        mm: g.s(u, 2, "0"),
                        s: String(this.$s),
                        ss: g.s(this.$s, 2, "0"),
                        SSS: g.s(this.$ms, 3, "0"),
                        Z: r
                    };
                return n.replace(c, function(t, e) {
                    return e || l[t] || r.replace(":", "")
                })
            }, $.utcOffset = function() {
                return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
            }, $.diff = function(t, f, h) {
                var c, d = g.p(f),
                    $ = v(t),
                    l = 6e4 * ($.utcOffset() - this.utcOffset()),
                    y = this - $,
                    M = g.m(this, $);
                return M = (c = {}, c[o] = M / 12, c[u] = M, c[a] = M / 3, c[s] = (y - l) / 6048e5, c[i] = (y - l) / 864e5, c[r] = y / 36e5, c[n] = y / 6e4, c[e] = y / 1e3, c)[d] || y, h ? M : g.a(M)
            }, $.daysInMonth = function() {
                return this.endOf(u).$D
            }, $.$locale = function() {
                return M[this.$L]
            }, $.locale = function(t, e) {
                if (!t) return this.$L;
                var n = this.clone(),
                    r = D(t, e, !0);
                return r && (n.$L = r), n
            }, $.clone = function() {
                return g.w(this.$d, this)
            }, $.toDate = function() {
                return new Date(this.valueOf())
            }, $.toJSON = function() {
                return this.isValid() ? this.toISOString() : null
            }, $.toISOString = function() {
                return this.$d.toISOString()
            }, $.toString = function() {
                return this.$d.toUTCString()
            }, d
        }(),
        p = S.prototype;
    return v.prototype = p, [
        ["$ms", t],
        ["$s", e],
        ["$m", n],
        ["$H", r],
        ["$W", i],
        ["$M", u],
        ["$y", o],
        ["$D", f]
    ].forEach(function(t) {
        p[t[1]] = function(e) {
            return this.$g(e, t[0], t[1])
        }
    }), v.extend = function(t, e) {
        return t.$i || (t(e, S, v), t.$i = !0), v
    }, v.locale = D, v.isDayjs = m, v.unix = function(t) {
        return v(1e3 * t)
    }, v.en = M[y], v.Ls = M, v.p = {}, v
});
/*dayjs.min.js End*/
/*utc.js*/
! function(t, i) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = i() : "function" == typeof define && define.amd1 ? define(i) : t.dayjs_plugin_utc = i()
}(this, function() {
    "use strict";
    return function(t, i, e) {
        var s = i.prototype;
        e.utc = function(t) {
            return new i({
                date: t,
                utc: !0,
                args: arguments
            })
        }, s.utc = function(t) {
            var i = e(this.toDate(), {
                locale: this.$L,
                utc: !0
            });
            return t ? i.add(this.utcOffset(), "minute") : i
        }, s.local = function() {
            return e(this.toDate(), {
                locale: this.$L,
                utc: !1
            })
        };
        var f = s.parse;
        s.parse = function(t) {
            t.utc && (this.$u = !0), this.$utils().u(t.$offset) || (this.$offset = t.$offset), f.call(this, t)
        };
        var n = s.init;
        s.init = function() {
            if (this.$u) {
                var t = this.$d;
                this.$y = t.getUTCFullYear(), this.$M = t.getUTCMonth(), this.$D = t.getUTCDate(), this.$W = t.getUTCDay(), this.$H = t.getUTCHours(), this.$m = t.getUTCMinutes(), this.$s = t.getUTCSeconds(), this.$ms = t.getUTCMilliseconds()
            } else n.call(this)
        };
        var u = s.utcOffset;
        s.utcOffset = function(t, i) {
            var e = this.$utils().u;
            if (e(t)) return this.$u ? 0 : e(this.$offset) ? u.call(this) : this.$offset;
            var s = Math.abs(t) <= 16 ? 60 * t : t,
                f = this;
            if (i) return f.$offset = s, f.$u = 0 === t, f;
            if (0 !== t) {
                var n = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
                (f = this.local().add(s + n, "minute")).$offset = s, f.$x.$localOffset = n
            } else f = this.utc();
            return f
        };
        var o = s.format;
        s.format = function(t) {
            var i = t || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
            return o.call(this, i)
        }, s.valueOf = function() {
            var t = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || (new Date).getTimezoneOffset());
            return this.$d.valueOf() - 6e4 * t
        }, s.isUTC = function() {
            return !!this.$u
        }, s.toISOString = function() {
            return this.toDate().toISOString()
        }, s.toString = function() {
            return this.toDate().toUTCString()
        };
        var r = s.toDate;
        s.toDate = function(t) {
            return "s" === t && this.$offset ? e(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : r.call(this)
        };
        var a = s.diff;
        s.diff = function(t, i, s) {
            if (t && this.$u === t.$u) return a.call(this, t, i, s);
            var f = this.local(),
                n = e(t).local();
            return a.call(f, n, i, s)
        }
    }
});
/*utc.js end*/
/*timezone.js*/
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd1 ? define(e) : t.dayjs_plugin_timezone = e()
}(this, function() {
    "use strict";
    var t = {
            year: 0,
            month: 1,
            day: 2,
            hour: 3,
            minute: 4,
            second: 5
        },
        e = {};
    return function(n, i, r) {
        var o, u = r().utcOffset(),
            a = function(t, n, i) {
                void 0 === i && (i = {});
                var r = new Date(t);
                return function(t, n) {
                    void 0 === n && (n = {});
                    var i = n.timeZoneName || "short",
                        r = t + "|" + i,
                        o = e[r];
                    return o || (o = new Intl.DateTimeFormat("en-US", {
                        hour12: !1,
                        timeZone: t,
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                        timeZoneName: i
                    }), e[r] = o), o
                }(n, i).formatToParts(r)
            },
            f = function(e, n) {
                for (var i = a(e, n), o = [], u = 0; u < i.length; u += 1) {
                    var f = i[u],
                        s = f.type,
                        m = f.value,
                        c = t[s];
                    c >= 0 && (o[c] = parseInt(m, 10))
                }
                var d = o[3],
                    v = 24 === d ? 0 : d,
                    h = o[0] + "-" + o[1] + "-" + o[2] + " " + v + ":" + o[4] + ":" + o[5] + ":000",
                    l = +e;
                return (r.utc(h).valueOf() - (l -= l % 1e3)) / 6e4
            },
            s = i.prototype;
        s.tz = function(t, e) {
            void 0 === t && (t = o);
            var n = this.utcOffset(),
                i = this.toDate().toLocaleString("en-US", {
                    timeZone: t
                }),
                a = Math.round((this.toDate() - new Date(i)) / 1e3 / 60),
                f = r(i).$set("millisecond", this.$ms).utcOffset(u - a, !0);
            if (e) {
                var s = f.utcOffset();
                f = f.add(n - s, "minute")
            }
            return f.$x.$timezone = t, f
        }, s.offsetName = function(t) {
            var e = this.$x.$timezone || r.tz.guess(),
                n = a(this.valueOf(), e, {
                    timeZoneName: t
                }).find(function(t) {
                    return "timezonename" === t.type.toLowerCase()
                });
            return n && n.value
        };
        var m = s.startOf;
        s.startOf = function(t, e) {
            if (!this.$x || !this.$x.$timezone) return m.call(this, t, e);
            var n = r(this.format("YYYY-MM-DD HH:mm:ss:SSS"));
            return m.call(n, t, e).tz(this.$x.$timezone, !0)
        }, r.tz = function(t, e, n) {
            var i = n && e,
                u = n || e || o,
                a = f(+r(), u);
            if ("string" != typeof t) return r(t).tz(u);
            var s = function(t, e, n) {
                    var i = t - 60 * e * 1e3,
                        r = f(i, n);
                    if (e === r) return [i, e];
                    var o = f(i -= 60 * (r - e) * 1e3, n);
                    return r === o ? [i, r] : [t - 60 * Math.min(r, o) * 1e3, Math.max(r, o)]
                }(r.utc(t, i).valueOf(), a, u),
                m = s[0],
                c = s[1],
                d = r(m).utcOffset(c);
            return d.$x.$timezone = u, d
        }, r.tz.guess = function() {
            return Intl.DateTimeFormat().resolvedOptions().timeZone
        }, r.tz.setDefault = function(t) {
            o = t
        }
    }
});

/*timezone.js end*/
/*duration.js*/
! function(s, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd1 ? define(t) : s.dayjs_plugin_duration = t()
}(this, function() {
    "use strict";
    var s, t, i = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
        n = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,
        e = {
            years: 31536e6,
            months: 2592e6,
            days: 864e5,
            hours: 36e5,
            minutes: 6e4,
            seconds: 1e3,
            milliseconds: 1,
            weeks: 6048e5
        },
        r = function(s) {
            return s instanceof u
        },
        o = function(s, t, i) {
            return new u(s, i, t.$l)
        },
        h = function(s) {
            return t.p(s) + "s"
        },
        u = function() {
            function u(s, t, i) {
                var r = this;
                if (this.$d = {}, this.$l = i, t) return o(s * e[h(t)], this);
                if ("number" == typeof s) return this.$ms = s, this.parseFromMilliseconds(), this;
                if ("object" == typeof s) return Object.keys(s).forEach(function(t) {
                    r.$d[h(t)] = s[t]
                }), this.calMilliseconds(), this;
                if ("string" == typeof s) {
                    var u = s.match(n);
                    if (u) return this.$d.years = u[2], this.$d.months = u[3], this.$d.weeks = u[4], this.$d.days = u[5], this.$d.hours = u[6], this.$d.minutes = u[7], this.$d.seconds = u[8], this.calMilliseconds(), this
                }
                return this
            }
            var d = u.prototype;
            return d.calMilliseconds = function() {
                var s = this;
                this.$ms = Object.keys(this.$d).reduce(function(t, i) {
                    return t + (s.$d[i] || 0) * e[i]
                }, 0)
            }, d.parseFromMilliseconds = function() {
                var s = this.$ms;
                this.$d.years = Math.floor(s / 31536e6), s %= 31536e6, this.$d.months = Math.floor(s / 2592e6), s %= 2592e6, this.$d.days = Math.floor(s / 864e5), s %= 864e5, this.$d.hours = Math.floor(s / 36e5), s %= 36e5, this.$d.minutes = Math.floor(s / 6e4), s %= 6e4, this.$d.seconds = Math.floor(s / 1e3), s %= 1e3, this.$d.milliseconds = s
            }, d.toISOString = function() {
                var s = this.$d.years ? this.$d.years + "Y" : "",
                    t = this.$d.months ? this.$d.months + "M" : "",
                    i = +this.$d.days || 0;
                this.$d.weeks && (i += 7 * this.$d.weeks);
                var n = i ? i + "D" : "",
                    e = this.$d.hours ? this.$d.hours + "H" : "",
                    r = this.$d.minutes ? this.$d.minutes + "M" : "",
                    o = this.$d.seconds || 0;
                this.$d.milliseconds && (o += this.$d.milliseconds / 1e3);
                var h = o ? o + "S" : "",
                    u = "P" + s + t + n + (e || r || h ? "T" : "") + e + r + h;
                return "P" === u ? "P0D" : u
            }, d.toJSON = function() {
                return this.toISOString()
            }, d.format = function(s) {
                var n = s || "YYYY-MM-DDTHH:mm:ss",
                    e = {
                        Y: this.$d.years,
                        YY: t.s(this.$d.years, 2, "0"),
                        YYYY: t.s(this.$d.years, 4, "0"),
                        M: this.$d.months,
                        MM: t.s(this.$d.months, 2, "0"),
                        D: this.$d.days,
                        DD: t.s(this.$d.days, 2, "0"),
                        H: this.$d.hours,
                        HH: t.s(this.$d.hours, 2, "0"),
                        m: this.$d.minutes,
                        mm: t.s(this.$d.minutes, 2, "0"),
                        s: this.$d.seconds,
                        ss: t.s(this.$d.seconds, 2, "0"),
                        SSS: t.s(this.$d.milliseconds, 3, "0")
                    };
                return n.replace(i, function(s, t) {
                    return t || String(e[s])
                })
            }, d.as = function(s) {
                return this.$ms / e[h(s)]
            }, d.get = function(s) {
                var t = this.$ms,
                    i = h(s);
                return "milliseconds" === i ? t %= 1e3 : t = "weeks" === i ? Math.floor(t / e[i]) : this.$d[i], t
            }, d.add = function(s, t, i) {
                var n;
                return n = t ? s * e[h(t)] : r(s) ? s.$ms : o(s, this).$ms, o(this.$ms + n * (i ? -1 : 1), this)
            }, d.subtract = function(s, t) {
                return this.add(s, t, !0)
            }, d.locale = function(s) {
                var t = this.clone();
                return t.$l = s, t
            }, d.clone = function() {
                return o(this.$ms, this)
            }, d.humanize = function(t) {
                return s().add(this.$ms, "ms").locale(this.$l).fromNow(!t)
            }, d.milliseconds = function() {
                return this.get("milliseconds")
            }, d.asMilliseconds = function() {
                return this.as("milliseconds")
            }, d.seconds = function() {
                return this.get("seconds")
            }, d.asSeconds = function() {
                return this.as("seconds")
            }, d.minutes = function() {
                return this.get("minutes")
            }, d.asMinutes = function() {
                return this.as("minutes")
            }, d.hours = function() {
                return this.get("hours")
            }, d.asHours = function() {
                return this.as("hours")
            }, d.days = function() {
                return this.get("days")
            }, d.asDays = function() {
                return this.as("days")
            }, d.weeks = function() {
                return this.get("weeks")
            }, d.asWeeks = function() {
                return this.as("weeks")
            }, d.months = function() {
                return this.get("months")
            }, d.asMonths = function() {
                return this.as("months")
            }, d.years = function() {
                return this.get("years")
            }, d.asYears = function() {
                return this.as("years")
            }, u
        }();
    return function(i, n, e) {
        s = e, t = e().$utils(), e.duration = function(s, t) {
            var i = e.locale();
            return o(s, {
                $l: i
            }, t)
        }, e.isDuration = r;
        var h = n.prototype.add,
            u = n.prototype.subtract;
        n.prototype.add = function(s, t) {
            return r(s) && (s = s.asMilliseconds()), h.bind(this)(s, t)
        }, n.prototype.subtract = function(s, t) {
            return r(s) && (s = s.asMilliseconds()), u.bind(this)(s, t)
        }
    }
});
/*duration.js end*/
/*advancedFormat.js*/
! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd1 ? define(t) : e.dayjs_plugin_advancedFormat = t()
}(this, function() {
    "use strict";
    return function(e, t, r) {
        var n = t.prototype,
            a = n.format;
        r.en.ordinal = function(e) {
            var t = ["th", "st", "nd", "rd"],
                r = e % 100;
            return "[" + e + (t[(r - 20) % 10] || t[r] || t[0]) + "]"
        }, n.format = function(e) {
            var t = this,
                r = this.$locale(),
                n = this.$utils(),
                o = (e || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|zzz|z|gggg|Do|X|x|k{1,2}|S/g, function(e) {
                    switch (e) {
                        case "Q":
                            return Math.ceil((t.$M + 1) / 3);
                        case "Do":
                            return r.ordinal(t.$D);
                        case "gggg":
                            return t.weekYear();
                        case "wo":
                            return r.ordinal(t.week(), "W");
                        case "w":
                        case "ww":
                            return n.s(t.week(), "w" === e ? 1 : 2, "0");
                        case "k":
                        case "kk":
                            return n.s(String(0 === t.$H ? 24 : t.$H), "k" === e ? 1 : 2, "0");
                        case "X":
                            return Math.floor(t.$d.getTime() / 1e3);
                        case "x":
                            return t.$d.getTime();
                        case "z":
                            return "[" + t.offsetName() + "]";
                        case "zzz":
                            return "[" + t.offsetName("long") + "]";
                        default:
                            return e
                    }
                });
            return a.bind(this)(o)
        }
    }
});
/*advancedFormat.js end*/
/*localizedFormat.js*/
! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd1 ? define(t) : e.dayjs_plugin_localizedFormat = t()
}(this, function() {
    "use strict";
    var e = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
    };
    return function(t, n, o) {
        var r = n.prototype,
            M = r.format;
        o.en.formats = e, r.format = function(t) {
            void 0 === t && (t = "YYYY-MM-DDTHH:mm:ssZ");
            var n = this.$locale().formats,
                o = function(t, n) {
                    return t.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(t, o, r) {
                        var M = r && r.toUpperCase();
                        return o || n[r] || e[r] || n[M].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(e, t, n) {
                            return t || n.slice(1)
                        })
                    })
                }(t, void 0 === n ? {} : n);
            return M.call(this, o)
        }
    }
});
/*localizedFormat.js end*/
/*customParseFormat.js */
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd1 ? define(e) : t.dayjs_plugin_customParseFormat = e()
}(this, function() {
    "use strict";
    var t, e = {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
        },
        n = function(t, n) {
            return t.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(t, r, i) {
                var o = i && i.toUpperCase();
                return r || n[i] || e[i] || n[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(t, e, n) {
                    return e || n.slice(1)
                })
            })
        },
        r = /(\[[^[]*\])|([-:/.()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,
        i = /\d\d/,
        o = /\d\d?/,
        s = /\d*[^\s\d-:/()]+/;
    var a = function(t) {
            return function(e) {
                this[t] = +e
            }
        },
        f = [/[+-]\d\d:?(\d\d)?/, function(t) {
            (this.zone || (this.zone = {})).offset = function(t) {
                if (!t) return 0;
                var e = t.match(/([+-]|\d\d)/g),
                    n = 60 * e[1] + (+e[2] || 0);
                return 0 === n ? 0 : "+" === e[0] ? -n : n
            }(t)
        }],
        u = function(e) {
            var n = t[e];
            return n && (n.indexOf ? n : n.s.concat(n.f))
        },
        h = function(e, n) {
            var r, i = t.meridiem;
            if (i) {
                for (var o = 1; o <= 24; o += 1)
                    if (e.indexOf(i(o, 0, n)) > -1) {
                        r = o > 12;
                        break
                    }
            } else r = e === (n ? "pm" : "PM");
            return r
        },
        d = {
            A: [s, function(t) {
                this.afternoon = h(t, !1)
            }],
            a: [s, function(t) {
                this.afternoon = h(t, !0)
            }],
            S: [/\d/, function(t) {
                this.milliseconds = 100 * +t
            }],
            SS: [i, function(t) {
                this.milliseconds = 10 * +t
            }],
            SSS: [/\d{3}/, function(t) {
                this.milliseconds = +t
            }],
            s: [o, a("seconds")],
            ss: [o, a("seconds")],
            m: [o, a("minutes")],
            mm: [o, a("minutes")],
            H: [o, a("hours")],
            h: [o, a("hours")],
            HH: [o, a("hours")],
            hh: [o, a("hours")],
            D: [o, a("day")],
            DD: [i, a("day")],
            Do: [s, function(e) {
                var n = t.ordinal,
                    r = e.match(/\d+/);
                if (this.day = r[0], n)
                    for (var i = 1; i <= 31; i += 1) n(i).replace(/\[|\]/g, "") === e && (this.day = i)
            }],
            M: [o, a("month")],
            MM: [i, a("month")],
            MMM: [s, function(t) {
                var e = u("months"),
                    n = (u("monthsShort") || e.map(function(t) {
                        return t.substr(0, 3)
                    })).indexOf(t) + 1;
                if (n < 1) throw new Error;
                this.month = n % 12 || n
            }],
            MMMM: [s, function(t) {
                var e = u("months").indexOf(t) + 1;
                if (e < 1) throw new Error;
                this.month = e % 12 || e
            }],
            Y: [/[+-]?\d+/, a("year")],
            YY: [i, function(t) {
                t = +t, this.year = t + (t > 68 ? 1900 : 2e3)
            }],
            YYYY: [/\d{4}/, a("year")],
            Z: f,
            ZZ: f
        };
    var c = function(e, i, o) {
        try {
            var s = function(e) {
                    for (var i = (e = n(e, t && t.formats)).match(r), o = i.length, s = 0; s < o; s += 1) {
                        var a = i[s],
                            f = d[a],
                            u = f && f[0],
                            h = f && f[1];
                        i[s] = h ? {
                            regex: u,
                            parser: h
                        } : a.replace(/^\[|\]$/g, "")
                    }
                    return function(t) {
                        for (var e = {}, n = 0, r = 0; n < o; n += 1) {
                            var s = i[n];
                            if ("string" == typeof s) r += s.length;
                            else {
                                var a = s.regex,
                                    f = s.parser,
                                    u = t.substr(r),
                                    h = a.exec(u)[0];
                                f.call(e, h), t = t.replace(h, "")
                            }
                        }
                        return function(t) {
                            var e = t.afternoon;
                            if (void 0 !== e) {
                                var n = t.hours;
                                e ? n < 12 && (t.hours += 12) : 12 === n && (t.hours = 0), delete t.afternoon
                            }
                        }(e), e
                    }
                }(i)(e),
                a = s.year,
                f = s.month,
                u = s.day,
                h = s.hours,
                c = s.minutes,
                m = s.seconds,
                l = s.milliseconds,
                M = s.zone,
                Y = new Date,
                v = u || (a || f ? 1 : Y.getDate()),
                p = a || Y.getFullYear(),
                D = 0;
            a && !f || (D = f > 0 ? f - 1 : Y.getMonth());
            var y = h || 0,
                L = c || 0,
                g = m || 0,
                $ = l || 0;
            return M ? new Date(Date.UTC(p, D, v, y, L, g, $ + 60 * M.offset * 1e3)) : o ? new Date(Date.UTC(p, D, v, y, L, g, $)) : new Date(p, D, v, y, L, g, $)
        } catch (t) {
            return new Date("")
        }
    };
    return function(e, n, r) {
        r.p.customParseFormat = !0;
        var i = n.prototype,
            o = i.parse;
        i.parse = function(e) {
            var n = e.date,
                i = e.utc,
                s = e.args;
            this.$u = i;
            var a = s[1];
            if ("string" == typeof a) {
                var f = !0 === s[2],
                    u = !0 === s[3],
                    h = f || u,
                    d = s[2];
                u && (d = s[2]), f || (t = d ? r.Ls[d] : this.$locale()), this.$d = c(n, a, i), this.init(), d && !0 !== d && (this.$L = this.locale(d).$L), h && n !== this.format(a) && (this.$d = new Date("")), t = void 0
            } else if (a instanceof Array)
                for (var m = a.length, l = 1; l <= m; l += 1) {
                    s[1] = a[l - 1];
                    var M = r.apply(this, s);
                    if (M.isValid()) {
                        this.$d = M.$d, this.$L = M.$L, this.init();
                        break
                    }
                    l === m && (this.$d = new Date(""))
                } else o.call(this, e)
        }
    }
});
/*customParseFormat.js end*/