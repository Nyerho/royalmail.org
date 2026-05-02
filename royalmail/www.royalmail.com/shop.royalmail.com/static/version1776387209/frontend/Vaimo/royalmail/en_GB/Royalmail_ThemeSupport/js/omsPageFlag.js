/*
 * Copyright © Vaimo Group. All rights reserved.
 * See LICENSE_VAIMO.txt for license details.
 */
define([
    'jquery',
    'underscore',
    'jquery/ui'
], function($, _) {
    'use strict';

    $.widget('vaimo.omsPageFlag', {
        options: {
            flagName: 'is_oms_page',
            className: 'is-oms-page',
            isOms: false
        },

        /**
         * Check if the current page is an OMS page
         *
         * @returns {boolean}
         */
        isOmsPage: function() {
            if (!_.isUndefined(window.checkoutConfig)) {
                return !!window.checkoutConfig[this.options.flagName];
            }
            return this.options.isOms;
        },

        /**
         * Add an HTML class to the html node if the page is an OMS page
         */
        setOmsPageFlag: function() {
            if (this.isOmsPage()) {
                $('html').addClass(this.options.className);
            }
        },

        /**
         * Initialise widget
         */
        _create: function() {
            this.setOmsPageFlag();
        }
    });

    return $.vaimo.omsPageFlag;
});