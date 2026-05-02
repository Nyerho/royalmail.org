/**
 * Copyright © Vaimo Group. All rights reserved.
 * See LICENSE_VAIMO.txt for license details.
 */
;
define([
    'jquery',
    'vmenu/component/types/type-toggle',
    'matchMedia',
    'jquery-ui-modules/widget'
], function($, toggleMenu, mediaCheck) {
    'use strict';

    $.widget('vaimoMenu.vmenuTypeMega', toggleMenu, {
        direction: undefined,
        isStartMousePositionSet: false,
        openTimeout: undefined,
        menuActive: undefined,
        $items: undefined,
        hasActiveItems: false,
        pointerLingerTimeout: 300,
        isMobileMediaQueryActive: false,
        lastOpenedMenu: $(),

        _create: function() {
            this._super.apply(this, arguments);

            /**
             * Both needed to make product page breadcrumbs work correctly that rely on
             * menu structure (yeah, cry me a river).
             */
            this.element.parent().attr('data-action', 'navigation');
            this.element.data('mageMenu', this);
            this.element.trigger('menucreate');

            this.$items = this.element.find('.v-navigation__item');

            this.$document = $(document);

            if (this.options.functionality.openOnHover) {
                mediaCheck({
                    media: this.options.functionality.mobileMediaQuery,
                    entry: this.setMobileMediaQueryActiveFlag.bind(this, true),
                    exit: this.setMobileMediaQueryActiveFlag.bind(this, false)
                });

                this.rejectMobile = this.rejectMobile.bind(this);

                this.addHoverEventHandlers(this.rejectMobile);
            }
            if (this.options.functionality.openOnClick) {
                this.addClickEventHandlers();
            }
        },

        addClickEventHandlers: function() {
            this.element.on('click', '.v-navigation__item--level0', this.onClickEvent.bind(this));
        },

        onClickEvent: function(event) {
            if (this.isClickInsideMenu(event)) {
                return;
            }

            event.preventDefault();

            this.clickToggleOpenMenu(event);
        },

        isClickInsideMenu: function(event) {
            return !$(event.target).parent().hasClass('v-navigation__item--level0');
        },

        clickToggleOpenMenu: function(event) {
            var $target = $(event.currentTarget);

            var opened = $target.attr('data-vcms-opened') === 'true' && $target.is(this.lastOpenedMenu);

            this.$items.removeClass(
                'v-navigation__item--active v-navigation__item--over v-navigation__item--animate'
            );

            if (opened) {
                this.handleMenuItemLeave();
            } else {
                $(event.currentTarget).addClass(
                    'v-navigation__item--active v-navigation__item--over v-navigation__item--animate'
                );
            }

            $target.attr('data-vcms-opened', typeof opened === 'undefined' ? 'true' : !opened);

            this.lastOpenedMenu = $target;
        },

        addHoverEventHandlers: function(rejectMobile) {
            this.handleMenuItemEnter = rejectMobile(this.handleMenuItemEnter);
            this.handleMenuItemLeave = rejectMobile(this.handleMenuItemLeave);
            this.handleMenuLeave = _.debounce(rejectMobile((this.handleMenuLeave), 200));
            this.getUpdatedMousePosition = _.throttle(rejectMobile(this.getUpdatedMousePosition), 100);

            this.element.on('mouseenter', '.v-navigation__item--level0', this.handleMenuItemEnter);
            this.element.on('mouseleave', this.handleMenuLeave);
            this.element.on('mouseleave', '.v-navigation__item--level0', this.handleMenuItemLeave);
            this.$document.on('mousemove', this.getUpdatedMousePosition);
        },

        updateMouseDirection: function(event) {
            var angleDifference = Math.sqrt(
                Math.pow(this.x - event.pageX, 2) + Math.pow(this.y - event.pageY, 2)
            );

            if (angleDifference > 5) {
                var movementAngle = Math.atan2(
                    event.pageY - this.y,
                    event.pageX - this.x
                );

                this.direction = movementAngle * (180 / Math.PI) + 180;
            }

            this.isStartMousePositionSet = false;
        },

        handleMenuLeave: function(event) {
            var hasHover = this.element.find('.v-navigation__item:hover');

            if (hasHover.length) {
                return;
            }

            const openState = $(event.currentTarget)
                .find('.v-navigation__item--active')
                .attr('data-vcms-opened');

            if (openState === 'true') {
                return;
            }

            this.$items.removeClass(
                'v-navigation__item--active v-navigation__item--over v-navigation__item--animate'
            );

            this.menuActive = false;
        },

        handleMenuItemEnter: function(event) {
            if (this.openTimeout) {
                clearTimeout(this.openTimeout);
            }

            if (!this.menuActive) {
                this.openTimeout = setTimeout(this.onMouseOver.bind(this, event), 150);
            } else {
                this.onMouseOver(event);
            }

            this.hasActiveItems = true;
        },

        handleMenuItemLeave: function() {
            clearTimeout(this.openTimeout);

            this.openTimeout = null;
            this.hasActiveItems = false;
        },

        _destroy: function() {
            this.element.off('mouseenter', '.v-navigation__item--level0', this.handleMenuItemEnter);
            this.element.off('mouseleave', '.v-navigation__item--level0', this.handleMenuItemLeave);
            this.element.off('mouseleave', this.handleMenuLeave);

            this.$document.off('mousemove', this.getUpdatedMousePosition);
        },

        getUpdatedMousePosition: function(event) {
            if (!this.isStartMousePositionSet) {
                this.x = event.pageX;
                this.y = event.pageY;

                this.isStartMousePositionSet = true;
            }

            this.updateMouseDirection(event);
        },

        shouldOpenMenu: function(event) {
            this.updateMouseDirection(event);

            return !(this.direction > 195 && this.direction <= 345);
        },

        onMouseOver: function(event) {
            var $item = $(event.currentTarget);

            if (this.menuActive && !this.shouldOpenMenu(event)) {
                setTimeout(function() {
                    if (!$item.is(':hover')) {
                        return;
                    }

                    this.openMenu($item);
                }.bind(this), this.pointerLingerTimeout);

                return;
            }

            this.openMenu($item);
        },

        openMenu: function($item) {
            this.$items.removeClass('v-navigation__item--animate');

            if (!this.menuActive) {
                $item.addClass('v-navigation__item--animate');
            }

            setTimeout(function() {
                this.$items.removeClass('v-navigation__item--active v-navigation__item--over');

                $item.addClass('v-navigation__item--active v-navigation__item--over');
            }.bind(this), 40);

            this.menuActive = true;
        },

        rejectMobile: function(callback) {
            return function() {
                if (!this.isMobileMediaQueryActive) {
                    return callback.apply(this, arguments);
                }
            }.bind(this);
        },

        setMobileMediaQueryActiveFlag: function(state) {
            this.isMobileMediaQueryActive = state;
        }
    });

    return $.vaimoMenu.vmenuTypeMega;
});