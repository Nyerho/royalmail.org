/**
 * Copyright © 2009-2018 Vaimo Group. All rights reserved.
 * See LICENSE.txt for license details.
 **/

define([
    'jquery',
    'matchMedia',
    'js/lib/slick',
    'matchHeight'
], function($) {
    'use strict';

    function init(parentContainer, child) {
        mediaCheck({
            media: '(min-width: 767px)',
            entry: function() { // desktop
                if ($(parentContainer).find('.slick-list').length) {
                    $(parentContainer).slick('unslick');
                }

                $(parentContainer).children().find(child).matchHeight({
                    byRow: false,
                    property: 'height',
                    target: null,
                    remove: false
                });
            },
            exit: function() { // tablet / mobile
                $(parentContainer).children().find(child).matchHeight({
                    byRow: false,
                    property: 'height',
                    target: null,
                    remove: false
                });

                $(parentContainer).slick({
                    arrows: false,
                    dots: false,
                    infinite: false,
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                    draggable: true,
                    autoplay: false
                });
            }
        });
    }

    return function(parentContainer, child) {
        init(parentContainer, child);
    };
});