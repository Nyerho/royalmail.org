/*
 * Copyright © Vaimo Group. All rights reserved.
 * See LICENSE_VAIMO.txt for license details.
 */

define([
    'jquery'
], function($) {
    'use strict';

    return function(vmenuTypeMega) {
        var prototype = vmenuTypeMega.prototype;

        $.widget(prototype.namespace + '.' + prototype.widgetName, vmenuTypeMega, {
            options: {
                selectors: {
                    menu: '.v-navigation',
                    mainLink: '.v-navigation__link--main',
                    mainItem: '.v-navigation__item--main',
                    isParent: '.v-navigation__item--parent'
                },
                modifiers: {
                    itemFocused: 'focus'
                }
            },

            _create: function() {
                this._super();
                this.fixTabletMegaMenu();
            },

            fixTabletMegaMenu: function() {
                var $parentItems = $(this.element).find(this.options.selectors.mainItem +
                    this.options.selectors.isParent);

                $(this.options.selectors.mainLink).on('touchstart', function(event) {
                    var $navItem = $(event.target).closest(this.options.selectors.item);
                    if (!$navItem.hasClass(this.options.modifiers.itemFocused)) {
                        if ($navItem.is(this.options.selectors.isParent)) {
                            event.preventDefault();
                            $parentItems.not($navItem).removeClass(this.options.modifiers.itemFocused);
                            $navItem.addClass(this.options.modifiers.itemFocused);
                            $('body').addClass('navigation-open');
                        } else {
                            $parentItems.removeClass(this.options.modifiers.itemFocused);
                            $('body').removeClass('navigation-open');
                        }
                    }
                }.bind(this));

                $('body').on('touchstart', function(event) {
                    if (!$(event.target).closest(this.options.selectors.menu).length) {
                        $parentItems.removeClass(this.options.modifiers.itemFocused);
                        $('body').removeClass('navigation-open');
                    }
                }.bind(this));
            },

            handleMenuLeave: function(event) {
                var hovered = this.element.find('.v-navigation__item').filter(function(_, element) {
                    return $(element).is(':hover');
                });

                if (hovered.length) {
                    return;
                }

                if ($(event.currentTarget).find('.v-navigation__item--active').attr('data-vcms-opened') == 'true') {
                    return;
                }

                this.$items.removeClass('v-navigation__item--active v-navigation__item--over v-navigation__item--animate');

                this.menuActive = false;

                $('body').removeClass('navigation-open');
            },

            handleMenuItemEnter: function(event) {
                if (this.openTimeout) {
                    clearTimeout(this.openTimeout);
                }

                if (!this.menuActive) {
                    this.openTimeout = setTimeout(this.onMouseOver.bind(this, event), 150);

                    if ($(event.currentTarget).hasClass('v-navigation__item--parent')) {
                        $('body').addClass('navigation-open');
                    }

                } else {
                    this.onMouseOver(event);
                }

                this.hasActiveItems = true;
            }
        });

        return $[prototype.namespace][prototype.widgetName];
    };
});