/**
 * Copyright © Vaimo Group. All rights reserved.
 * See LICENSE.txt for license details.
 **/

define([
    'jquery',
    'mage/smart-keyboard-handler',
    'responsiveHomeWidget',
    'js/lib/slick',
    'matchHeight',
    'mage/mage',
    'domReady!'
], function($, keyboardHandler, responsiveHomeWidget) {
    'use strict';

    (function() {
        var edge = navigator.userAgent.match(/Edge\/([0-9]+)/);
        if (edge) {
            document.documentElement.className += ' edge edge' + edge[1];
        }
    })();

    (function() {
        if (navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/)) {
            document.documentElement.className += ' is-probably-mobile';
        }
    })();

    if ($('body').hasClass('checkout-cart-index')) {
        if ($('#co-shipping-method-form .fieldset.rates').length > 0 &&
            $('#co-shipping-method-form .fieldset.rates :checked').length === 0
        ) {
            $('#block-shipping').on('collapsiblecreate', function() {
                $('#block-shipping').collapsible('forceActivate');
            });
        }
    }

    $('.cart-summary').mage('sticky', {
        container: '#maincontent'
    });

    $('.panel.header > .header.links').clone().appendTo('#store\\.links');

    keyboardHandler.apply();

    // Remove scrolling behaviour inside input number
    $('form').on('focus', 'input[type=number]', function(e) {
        $(this).on('mousewheel.disableScroll', function(e) {
            e.preventDefault()
        })
    });
    $('form').on('blur', 'input[type=number]', function(e) {
        $(this).off('mousewheel.disableScroll')
    });

    // Anchor Action Button
    $('.action-anchor').click(function(e) {
        var targetOffset = $("#anchor-products-list").offset().top - 126;

        if ($(window).width() > 768) {
            targetOffset -= 14;
        } else if ($(window).width() == 768) {
            targetOffset += 2;
        }

        $('html, body').animate({
            scrollTop: targetOffset
        }, 1000);
    });

    //homepage widget
    if ($('.row-image-block').length) {
        responsiveHomeWidget('.row-image-block', '.widget__title');
    }

    if ($('.row-bestseller').length) {
        responsiveHomeWidget('.row-bestseller', '.widget__content');
    }

    if ($('.row-colour-block').length) {
        $('.row-colour-block').children().find('.widget__colour-block__content').matchHeight({
            byRow: true,
            property: 'height',
            target: null,
            remove: false
        });
    }
    $(document).on('click', '.checkout-index-index #co-shipping-form ,.checkout-index-index #opc-shipping_method', function() {

        var loginFormSelector = 'form[data-role=email-with-possible-login]',
            usernameSelector = loginFormSelector + ' input[name=username]',
            loginForm = $(loginFormSelector),
            validator;
        if (!loginForm.validation() || !loginForm.validation('isValid')) {
            $('html, body').animate({
                scrollTop: 0
            }, 2000, function() {
                $('.continue-login').trigger('click');
            });
        }
    });
    //Home Page Banner
    $(document).ready(function() {
        if ($(window).width() <= 767) {
            $('.homepage-banner-row .category-banner-text-wrapper').height('auto');
            $('.homepage-banner-row .category-banner-text-wrapper .pagebuilder-banner-wrapper').css({
                "min-height": ''
            });

            var containerHeight = $('.homepage-banner-row .category-banner-text-wrapper').height();

            var overlayheight = $('.homepage-banner-row .pagebuilder-overlay').height();

            var totaleHeight = containerHeight + overlayheight;

            $('.homepage-banner-row .category-banner-text-wrapper').css({
                "min-height": totaleHeight,
                "margin-bottom": 20
            });
            $('.homepage-banner-row .category-banner-text-wrapper .pagebuilder-banner-wrapper').css('min-height', totaleHeight);

            //Homepage slider load
            $('.homepage-slider-row .category-banner-text-wrapper').each(function(index) {

                $('.homepage-slider-row .pagebuilder-slider').css({
                    "min-height": 'auto'
                });
                $(this).height('auto');

                var Sliderconheight = $(this).height();
                var Slideroverlayheight = $(this).find('.pagebuilder-overlay').height();

                var SlidertotaleHeight = Sliderconheight + Slideroverlayheight;

                $(this).css('min-height', SlidertotaleHeight);

                $(this).find('.pagebuilder-slide-wrapper').css('min-height', SlidertotaleHeight);
            });

        }

        $(window).on('resize', function() {
            if ($(window).width() <= 767) {
                $('.homepage-banner-row .category-banner-text-wrapper').height('auto');

                $('.homepage-banner-row .category-banner-text-wrapper').css({
                    "min-height": ''
                });
                $('.homepage-banner-row .category-banner-text-wrapper .pagebuilder-banner-wrapper').css({
                    "min-height": ''
                });
                var containerHeight = $('.homepage-banner-row .category-banner-text-wrapper').height();

                var overlayheight = $('.homepage-banner-row .pagebuilder-overlay').height();

                var totaleHeight = containerHeight + overlayheight;
                $('.homepage-banner-row .category-banner-text-wrapper').css({
                    "min-height": totaleHeight,
                    "margin-bottom": 20
                });
                $('.homepage-banner-row .category-banner-text-wrapper .pagebuilder-banner-wrapper').css('min-height', totaleHeight);

                SliderHeight();

            } else {
                $('.homepage-banner-row .category-banner-text-wrapper').css({
                    "min-height": '',
                    "height": "",
                    "margin-bottom": 0
                });
                $('.homepage-banner-row .category-banner-text-wrapper .pagebuilder-banner-wrapper').css({
                    "min-height": ''
                });

                $('.homepage-slider-row .category-banner-text-wrapper .pagebuilder-slide-wrapper').css({
                    "min-height": '',
                    "height": ""
                });
                $('.homepage-slider-row .category-banner-text-wrapper').css({
                    "min-height": '',
                    "height": ""
                });
            }
        });

        function SliderHeight() {
            // Homepage slider resize

            var bannerDiv = $('.homepage-slider-row .category-banner-text-wrapper');

            var overlayDiv = $('.homepage-slider-row .category-banner-text-wrapper .pagebuilder-overlay');

            $('.homepage-slider-row .pagebuilder-slider').css({
                "min-height": 'auto'
            });
            bannerDiv.css({
                "min-height": ''
            });
            bannerDiv.height('auto');
            bannerDiv.find('.pagebuilder-slide-wrapper').css({
                "min-height": ''
            });

            var bannerDivHegiht = bannerDiv.height();
            var overlayDivHeight = overlayDiv.height();
            var SlidertotelHeight = bannerDivHegiht + overlayDivHeight;

            var sliderWidth = $(window).width();

            if (window.matchMedia("(orientation: portrait)").matches == true) {
                var sliderresizeHeight = sliderWidth + overlayDivHeight;
                bannerDiv.css('min-height', sliderresizeHeight);

            } else {
                bannerDiv.css('min-height', SlidertotelHeight);
            }
            $('.homepage-slider-row .category-banner-text-wrapper .pagebuilder-slide-wrapper').css('min-height', SlidertotelHeight);
        }
    });
});