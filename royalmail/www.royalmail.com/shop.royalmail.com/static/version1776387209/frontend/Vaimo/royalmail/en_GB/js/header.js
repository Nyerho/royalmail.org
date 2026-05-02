/**
 * Copyright © 2009-2017 Vaimo Group. All rights reserved.
 * See LICENSE.txt for license details.
 **/

define([
    'jquery',
    'matchMedia'
], function($) {
    'use strict';

    return function() {
        var search = '.block-search',
            pageHeader = '.page-header--secondary',
            logo = '.logo',
            mobileSearch = false;

        mediaCheck({
            media: '(max-width: 767px)',
            entry: function() { // desktop
                if (!$('.page-header--secondary > .block-search').length) {
                    $(search).appendTo(pageHeader);
                    mobileSearch = true;
                }
            },
            exit: function() { // tablet / mobile
                if (mobileSearch) {
                    $(search).insertAfter(logo);
                    mobileSearch = false;
                }
            }
        });
    }
});