/**
 * Copyright © Vaimo Group. All rights reserved.
 * See LICENSE_VAIMO.txt for license details.
 */
;
define([
    'jquery',
    'mage/translate',
    'mobileSlidingMenu',
    'jquery-ui-modules/widget'
], function($, __) {
    'use strict';

    $.widget('vaimoMenu.vmenuTypeMobile', {
        options: {
            selectors: {
                panels: '.mm-panels',
                page: '.mm-page',
                navToggle: '.toggle-mobile-menu',
                navTitle: '.mm-title',
                navBack: '.mm-prev',
                navBar: '.mm-navbar',
                subcategories: '.mm-panel ul'
            },
            modifiers: {
                hidden: 'mm-hidden',
                active: 'mm-active',
                htmlOpen: 'mm-opened',
                toggleActive: 'toggle-mobile-menu--active'
            },
            mmenu: {
                options: {
                    extensions: [
                        'pagedim-black'
                    ],
                    navbars: [{
                        position: 'top'
                    }],
                    offCanvas: {
                        contentCloseBtn: true,
                        blockUI: true
                    },
                    screenReader: {
                        aria: true,
                        text: true
                    }
                },
                configuration: {
                    clone: false,
                    panelNodetype: 'ul',
                    offCanvas: {
                        pageSelector: '.page-wrapper',
                        wrapPageIfNeeded: false
                    }
                }
            }
        },
        menuId: undefined,

        _create: function() {
            this.initMobileMenu();
        },

        initMobileMenu: function() {
            var $menuRoot = this.element;

            $menuRoot.removeClass('u-hidden');

            $menuRoot.mmenu(
                this.options.mmenu.options,
                this.options.mmenu.configuration
            );

            this.menuId = this.element.attr('id');
            this.$toggleButton = $('[data-id=' + this.menuId + ']');

            var api = this.getApi();


            api.bind('open:finish', this.handleMenuOpen.bind(this));
            api.bind('close:finish', this.handleMenuClose.bind(this));

            this.adjustPluginHtml();
            this.bindMobileNavFunctions();
        },

        getApi: function() {
            return $('#' + this.menuId).data('mmenu');
        },

        handleMenuOpen: function() {
            this.$toggleButton.toggleClass(this.options.modifiers.toggleActive, true);
        },

        handleMenuClose: function() {
            this.$toggleButton.toggleClass(this.options.modifiers.toggleActive, false);
        },

        handleMenuToggleClick: function() {
            var api = this.getApi(),
                isOpen = $('html').hasClass(this.options.modifiers.htmlOpen);

            $(document.body).children('.message.global').toggleClass('mm-slideout', !isOpen);

            isOpen ? api.close() : api.open();
        },

        handlePageClick: function() {
            var isOpen = $('html').hasClass(this.options.modifiers.htmlOpen);

            if (!isOpen) {
                return;
            }

            this.element.data('mmenu').close();
        },

        bindMobileNavFunctions: function() {
            $(this.options.selectors.navToggle + '[data-id=' + this.menuId + ']').on('click', this.handleMenuToggleClick.bind(this));
            $(this.options.selectors.page).on('click', this.handlePageClick.bind(this));
        },

        getNavBackHtml: function() {
            return '<span class="sr-only">' + __('Back') + '</span>';
        },

        adjustPluginHtml: function() {
            $(this.options.selectors.navBack).html(this.getNavBackHtml());
            $(this.options.selectors.subcategories).each(this.addCategoryUrlToMenuTitle.bind(this));
            this.element.find('.mm-next').addClass('mm-fullsubopen');
        },

        addCategoryUrlToMenuTitle: function(index, element) {
            var $title = $(element).prev(this.options.selectors.navBar).find(this.options.selectors.navTitle),
                parentPanelId = $title.attr('href'),
                parentTitleHref;

            if (typeof parentPanelId !== 'undefined' && parentPanelId.indexOf('#') === 0) {

                parentTitleHref = $(parentPanelId + ' a')
                    .filter(function(index, element) {
                        return $(element).text() === $title.text();
                    })
                    .first().attr('href');

                $title.attr('href', parentTitleHref);
            }
        }
    });

    return $.vaimoMenu.vmenuTypeMobile;
});