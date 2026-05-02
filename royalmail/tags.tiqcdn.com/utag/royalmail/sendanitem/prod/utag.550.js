//tealium universal tag - utag.550 ut4.0.202605011123, Copyright 2026 Tealium.com Inc. All Rights Reserved.
try {
    (function(id, loader) {
        var u = {};
        utag.o[loader].sender[id] = u;
        if (utag.ut === undefined) {
            utag.ut = {};
        }
        if (utag.ut.loader === undefined) {
            u.loader = function(o) {
                var b, c, l, a = document;
                if (o.type === "iframe") {
                    b = a.createElement("iframe");
                    o.attrs = o.attrs || {
                        "height": "1",
                        "width": "1",
                        "style": "display:none"
                    };
                    for (l in utag.loader.GV(o.attrs)) {
                        b.setAttribute(l, o.attrs[l]);
                    }
                    b.setAttribute("src", o.src);
                } else if (o.type == "img") {
                    utag.DB("Attach img: " + o.src);
                    b = new Image();
                    b.src = o.src;
                    return;
                } else {
                    b = a.createElement("script");
                    b.language = "javascript";
                    b.type = "text/javascript";
                    b.async = 1;
                    b.charset = "utf-8";
                    for (l in utag.loader.GV(o.attrs)) {
                        b[l] = o.attrs[l];
                    }
                    b.src = o.src;
                }
                if (o.id) {
                    b.id = o.id
                };
                if (typeof o.cb == "function") {
                    if (b.addEventListener) {
                        b.addEventListener("load", function() {
                            o.cb()
                        }, false);
                    } else {
                        b.onreadystatechange = function() {
                            if (this.readyState == 'complete' || this.readyState == 'loaded') {
                                this.onreadystatechange = null;
                                o.cb()
                            }
                        };
                    }
                }
                l = o.loc || "head";
                c = a.getElementsByTagName(l)[0];
                if (c) {
                    utag.DB("Attach to " + l + ": " + o.src);
                    if (l == "script") {
                        c.parentNode.insertBefore(b, c);
                    } else {
                        c.appendChild(b)
                    }
                }
            }
        } else {
            u.loader = utag.ut.loader;
        }
        u.ev = {
            view: 1
        };
        u.initialized = false;
        u.map = {};
        u.extend = [function(a, b) {
            try {
                if (1) {
                    try {
                        var GTAG_ID = 'DC-12881203';
                        var GTAG_SCRIPT_URL = 'https://www.googletagmanager.com/gtag/js?id=DC-12881203';
                        var BASKET_PATH = '/basket';
                        var HOME_PATH = '/';
                        var SERVICE_PATH = '/send/service';
                        var COOKIE_NAME = 'greyLandingPage';
                        var COOKIE_VALUE = 'internationalParcelCollectGrey';
                        var SERVICE_FILTER_COOKIE = 'serviceFilter';
                        var COOKIE_DURATION_DAYS = 30;
                        var currentPath = document.location.pathname;

                        function debugLog(message, data) {
                            if (window.console && console.log) {
                                console.log('[Tealium Extension UID484] ' + message, data || '');
                            }
                        }

                        function getQueryParameter(paramName) {
                            try {
                                if (window.URLSearchParams) {
                                    var urlParams = new URLSearchParams(window.location.search);
                                    return urlParams.get(paramName);
                                } else {
                                    var match = RegExp('[?&]' + paramName + '=([^&]*)').exec(window.location.search);
                                    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
                                }
                            } catch (e) {
                                debugLog('Error getting query parameter:', e.message);
                                return null;
                            }
                        }

                        function setCookie(name, value, days) {
                            try {
                                var expires = '';
                                if (days) {
                                    var date = new Date();
                                    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                                    expires = '; expires=' + date.toUTCString();
                                }
                                var cookieString = name + '=' + encodeURIComponent(value) + expires + '; path=/' +
                                    (window.location.protocol === 'https:' ? '; secure' : '') +
                                    '; samesite=lax';
                                document.cookie = cookieString;
                                debugLog('Cookie set successfully:', name + '=' + value + ' (expires in ' + days + ' days)');
                                return true;
                            } catch (e) {
                                debugLog('Error setting cookie:', e.message);
                                return false;
                            }
                        }

                        function getCookie(name) {
                            try {
                                var nameEQ = name + '=';
                                var cookies = document.cookie.split(';');
                                for (var i = 0; i < cookies.length; i++) {
                                    var cookie = cookies[i];
                                    while (cookie.charAt(0) === ' ') {
                                        cookie = cookie.substring(1, cookie.length);
                                    }
                                    if (cookie.indexOf(nameEQ) === 0) {
                                        var value = decodeURIComponent(cookie.substring(nameEQ.length, cookie.length));
                                        debugLog('Cookie retrieved:', name + '=' + value);
                                        return value;
                                    }
                                }
                                debugLog('Cookie not found:', name);
                                return null;
                            } catch (e) {
                                debugLog('Error getting cookie:', e.message);
                                return null;
                            }
                        }

                        function deleteCookie(name) {
                            try {
                                document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
                                debugLog('Cookie deleted:', name);
                            } catch (e) {
                                debugLog('Error deleting cookie:', e.message);
                            }
                        }

                        function detectAndStoreGreyLanding() {
                            var cidParam = getQueryParameter('cid') || getQueryParameter('CID');
                            debugLog('CID parameter found:', cidParam);
                            var isGreyLanding = cidParam && cidParam.indexOf('_GGL_') !== -1;
                            var existingCookie = getCookie(COOKIE_NAME);
                            if (isGreyLanding) {
                                setCookie(COOKIE_NAME, COOKIE_VALUE, COOKIE_DURATION_DAYS);
                                return {
                                    'u27': COOKIE_VALUE
                                };
                            } else if (existingCookie === COOKIE_VALUE) {
                                return {
                                    'u27': COOKIE_VALUE
                                };
                            }
                            return {};
                        }

                        function detectAndStoreServiceFilter() {
                            if (currentPath !== BASKET_PATH && currentPath !== SERVICE_PATH) {
                                debugLog('Not on serviceFilter detection page, checking existing cookie only');
                                var existingServiceFilter = getCookie(SERVICE_FILTER_COOKIE);
                                if (existingServiceFilter) {
                                    debugLog('Service filter found in existing cookie:', existingServiceFilter);
                                }
                                return existingServiceFilter;
                            }
                            var serviceFilterValue = null;
                            try {
                                if (typeof utag_data !== 'undefined' && utag_data['qp.serviceFilter']) {
                                    serviceFilterValue = utag_data['qp.serviceFilter'];
                                    debugLog('Service filter found in utag_data:', serviceFilterValue);
                                } else if (typeof b !== 'undefined' && b['qp.serviceFilter']) {
                                    serviceFilterValue = b['qp.serviceFilter'];
                                    debugLog('Service filter found in b object:', serviceFilterValue);
                                } else {
                                    debugLog('qp.serviceFilter not found in Tealium variables');
                                }
                            } catch (e) {
                                debugLog('Error accessing Tealium serviceFilter variable:', e.message);
                            }
                            var existingServiceFilter = getCookie(SERVICE_FILTER_COOKIE);
                            if (serviceFilterValue) {
                                debugLog('Setting service filter cookie from Tealium variable:', serviceFilterValue);
                                setCookie(SERVICE_FILTER_COOKIE, serviceFilterValue, COOKIE_DURATION_DAYS);
                                return serviceFilterValue;
                            } else if (existingServiceFilter) {
                                debugLog('Service filter found in existing cookie:', existingServiceFilter);
                                return existingServiceFilter;
                            }
                            debugLog('No service filter detected (Tealium variable or cookie)');
                            return null;
                        }

                        function getGreyLandingPageParam() {
                            return detectAndStoreGreyLanding();
                        }

                        function initializeGTM() {
                            if (!window.gtagInitialized) {
                                setPixel7stars(GTAG_SCRIPT_URL);
                                window.dataLayer = window.dataLayer || [];
                                window.gtag = window.gtag || function() {
                                    dataLayer.push(arguments);
                                };
                                gtag('js', new Date());
                                gtag('config', GTAG_ID);
                                window.gtagInitialized = true;
                            }
                        }

                        function setPixel7stars(src) {
                            var existingScript = document.querySelector('script[src="' + src + '"]');
                            if (existingScript) {
                                debugLog('GTM script already exists');
                                return;
                            }
                            debugLog('Loading GTM script:', src);
                            var script = document.createElement('script');
                            script.type = 'text/javascript';
                            script.src = src;
                            script.async = true;
                            script.onload = function() {};
                            script.onerror = function() {
                                debugLog('ERROR: Failed to load GTM script');
                            };
                            document.head.appendChild(script);
                        }

                        function sendHomePageTracking() {
                            if (!window.gtag) {
                                debugLog('ERROR: gtag not available for home page');
                                return;
                            }
                            try {
                                var greyLandingData = getGreyLandingPageParam();
                                var homeData = {
                                    'allow_custom_scripts': true,
                                    'send_to': GTAG_ID + '/retarget/lp-dpl+standard'
                                };
                                for (var key in greyLandingData) {
                                    if (greyLandingData.hasOwnProperty(key)) {
                                        homeData[key] = greyLandingData[key];
                                    }
                                }
                                gtag('event', 'conversion', homeData);
                            } catch (error) {
                                debugLog('ERROR sending home page conversion:', error.message);
                                throw error;
                            }
                        }

                        function validateBasketData() {
                            if (!b.productName || !Array.isArray(b.productName) || b.productName.length === 0) {
                                return false;
                            }
                            return true;
                        }

                        function buildProductData() {
                            var productData = {};
                            var products = b.productName;
                            var maxProducts = Math.min(products.length, 10);
                            for (var i = 0; i < maxProducts; i++) {
                                var uVar = 'u' + (i + 1).toString();
                                productData[uVar] = products[i];
                            }
                            return productData;
                        }

                        function buildConversionData() {
                            var basketValue = b.shipmentsTotal ? b.shipmentsTotal.toString() : '0.00';
                            return {
                                'allow_custom_scripts': true,
                                'send_to': GTAG_ID + '/ecomm/ecmdpbsk+Standard',
                                'currency': 'GBP',
                                'value': basketValue,
                                'u16': basketValue,
                                "dc_custom_params": {
                                    "match_id": b['tealium_random'],
                                    "ord": b['tealium_random']
                                }
                            };
                        }

                        function sendBasketConversion() {
                            if (!window.gtag) {
                                return;
                            }
                            try {
                                var productData = buildProductData();
                                var conversionData = buildConversionData();
                                var greyLandingData = getGreyLandingPageParam();
                                var mergedData = {};
                                for (var key in productData) {
                                    if (productData.hasOwnProperty(key)) {
                                        mergedData[key] = productData[key];
                                    }
                                }
                                for (var key in conversionData) {
                                    if (conversionData.hasOwnProperty(key)) {
                                        mergedData[key] = conversionData[key];
                                    }
                                }
                                for (var key in greyLandingData) {
                                    if (greyLandingData.hasOwnProperty(key)) {
                                        mergedData[key] = greyLandingData[key];
                                    }
                                }
                                gtag('event', 'conversion', mergedData);
                            } catch (error) {
                                debugLog('ERROR sending basket conversion:', error.message);
                                throw error;
                            }
                        }
                        window.tealiumGreyLandingUtils = {
                            getCookie: function() {
                                return getCookie(COOKIE_NAME);
                            },
                            setCookie: function() {
                                return setCookie(COOKIE_NAME, COOKIE_VALUE, COOKIE_DURATION_DAYS);
                            },
                            deleteCookie: function() {
                                return deleteCookie(COOKIE_NAME);
                            },
                            getServiceFilter: function() {
                                return getCookie(SERVICE_FILTER_COOKIE);
                            },
                            setServiceFilter: function(value) {
                                return setCookie(SERVICE_FILTER_COOKIE, value, COOKIE_DURATION_DAYS);
                            },
                            deleteServiceFilter: function() {
                                return deleteCookie(SERVICE_FILTER_COOKIE);
                            },
                            checkStatus: function() {
                                var cookie = getCookie(COOKIE_NAME);
                                var cid = getQueryParameter('cid');
                                var serviceFilter = getCookie(SERVICE_FILTER_COOKIE);
                                var serviceFilterTealium = null;
                                try {
                                    if (typeof utag_data !== 'undefined' && utag_data['qp.serviceFilter']) {
                                        serviceFilterTealium = utag_data['qp.serviceFilter'];
                                    } else if (typeof b !== 'undefined' && b['qp.serviceFilter']) {
                                        serviceFilterTealium = b['qp.serviceFilter'];
                                    }
                                } catch (e) {}
                                debugLog('Status Check:', {
                                    cookieExists: !!cookie,
                                    cookieValue: cookie,
                                    cidParam: cid,
                                    isGreyTraffic: cid && cid.indexOf('_GGL_') !== -1,
                                    serviceFilterCookie: serviceFilter,
                                    serviceFilterTealium: serviceFilterTealium
                                });
                                return {
                                    cookieExists: !!cookie,
                                    cookieValue: cookie,
                                    cidParam: cid,
                                    isGreyTraffic: cid && cid.indexOf('_GGL_') !== -1,
                                    serviceFilterCookie: serviceFilter,
                                    serviceFilterTealium: serviceFilterTealium
                                };
                            }
                        };
                        debugLog('Starting tracking on path: ' + currentPath);
                        var greyStatus = detectAndStoreGreyLanding();
                        var serviceFilterStatus = detectAndStoreServiceFilter();
                        debugLog('Service filter detection result:', serviceFilterStatus);
                        if (currentPath !== BASKET_PATH && currentPath !== HOME_PATH) {
                            debugLog('Not on target page (' + currentPath + '), exiting (but cookies were processed)');
                            return;
                        }
                        initializeGTM();
                        setTimeout(function() {
                            if (currentPath === HOME_PATH) {
                                sendHomePageTracking();
                            } else if (currentPath === BASKET_PATH) {
                                if (validateBasketData()) {
                                    sendBasketConversion();
                                } else {
                                    debugLog('Skipping basket conversion due to validation failure');
                                }
                            }
                        }, 250);
                    } catch (error) {
                        var errorMessage = 'Tealium Extension UID484 Error: ' + error.message;
                        if (window.console && console.error) {
                            console.error(errorMessage, error);
                        }
                        if (typeof utag !== 'undefined' && utag.DB) {
                            utag.DB(error);
                        }
                    }
                }
            } catch (e) {
                utag.DB(e)
            }
        }];
        u.send = function(a, b) {
            if (u.ev[a] || u.ev.all !== undefined) {
                var c, d, e, f, i;
                u.data = {};
                for (c = 0; c < u.extend.length; c++) {
                    try {
                        d = u.extend[c](a, b);
                        if (d == false) return
                    } catch (e) {}
                };
                for (d in utag.loader.GV(u.map)) {
                    if (b[d] !== undefined && b[d] !== "") {
                        e = u.map[d].split(",");
                        for (f = 0; f < e.length; f++) {
                            u.data[e[f]] = b[d];
                        }
                    }
                }
            }
        };
        utag.o[loader].loader.LOAD(id);
    })("550", "royalmail.sendanitem");
} catch (error) {
    utag.DB(error);
}