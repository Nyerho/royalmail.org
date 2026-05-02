/**
 * Copyright © Vaimo Group. All rights reserved.
 * See LICENSE_VAIMO.txt for license details.
 */
;
define([
    'jquery',
    'jquery-ui-modules/widget'
], function($) {
    'use strict';

    $.widget('vaimoMenu.vmenuTypeToggle', {
        options: {
            selectors: {
                mobileSectionToggle: '.nav-toggle',
                menuToggle: '.js-toggle-navigation',
                item: '.v-navigation__item',
                root: 'html'
            },
            functionality: {
                openOnHover: false,
                openOnClick: false,
                mobileMediaQuery: '(max-width: 768px)'
            },
            modifiers: {
                itemActive: 'v-navigation__item--active',
                mobileSideNavOpen: 'nav-open',
                toggleRedirect: 'v-navigation__toggle-sub-menu--redirect'
            }
        },

        _create: function() {
            this.rootElement = $(this.options.selectors.root);
            this.menuToggleButton = $(this.options.selectors.menuToggle);

            this.addEventListeners();
        },

        addEventListeners: function() {
            this.handleMobileNavigationToggleButton();
            this.element.on('click', this.options.selectors.menuToggle, this.toggleNavigationItem.bind(this));
        },

        toggleNavigationItem: function(event) {
            var $toggleButton = $(event.currentTarget);

            if ($toggleButton.hasClass(this.options.modifiers.toggleRedirect)) {
                return;
            }

            event.preventDefault();

            $toggleButton
                .closest(this.options.selectors.item)
                .toggleClass(this.options.modifiers.itemActive);
        },

        handleMobileNavigationToggleButton: function() {
            if (!this.menuToggleButton.data('vmenu')) {
                this.menuToggleButton.data('vmenu', true);

                $(document).on(
                    'click',
                    this.options.selectors.mobileSectionToggle,
                    this.toggleMobileNavigation.bind(this)
                );
            }
        },

        toggleMobileNavigation: function() {
            this.rootElement.toggleClass(this.options.modifiers.mobileSideNavOpen);
        }
    });

    return $.vaimoMenu.vmenuTypeToggle;
});