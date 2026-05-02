/*
 * Copyright © Vaimo Group. All rights reserved.
 * See LICENSE.txt for license details.
 */

define([
    'jquery',
    'matchMedia',
], function($) {
    'use strict';

    $.widget('vaimo.minicartAutoOpen', {
        options: {
            selectors: {
                dropdown: '[data-role="dropdownDialog"]'
            },
            showBreakpoint: 'only screen and (min-width: 768px)',
            autoClose: true,
            autoCloseTimeout: 8000
        },

        deferred: true,

        updated: function() {
            if (this.deferred) {
                return;
            }

            if (matchMedia(this.options.showBreakpoint).matches) {
                this.$dropdown.dropdownDialog('open');

                if (this.options.autoClose) {
                    window.setTimeout(function() {
                        this.$dropdown.dropdownDialog('close');
                    }.bind(this), this.options.autoCloseTimeout);
                }
            }
        },

        loading: function() {
            this.deferred = false;
        },

        _create: function() {
            this.$dropdown = this.element.find(this.options.selectors.dropdown);

            this.element.on('contentLoading', this.loading.bind(this));
            this.element.on('contentUpdated', this.updated.bind(this));
        }
    });

    return $.vaimo.minicartAutoOpen;
});