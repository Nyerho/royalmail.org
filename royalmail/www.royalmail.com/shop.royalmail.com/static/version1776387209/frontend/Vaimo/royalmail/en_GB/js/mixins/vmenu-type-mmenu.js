/**
 * Copyright © Vaimo Group. All rights reserved.
 * See LICENSE.txt for license details.
 **/

define([
    'jquery'
], function($) {
    'use strict';

    return function(vmenuTypeMobile) {
        var prototype = vmenuTypeMobile.prototype;

        $.widget(prototype.namespace + '.' + prototype.widgetName, vmenuTypeMobile, {
            initMobileMenu: function() {
                this._super();

                this.getApi().bind('open:start', function() {
                    window.scrollTo(0, 0);
                    $('body > *').on('touchmove.fixMobileNavScroll', function(event) {
                        // Prevent iOS devices from scrolling when the menu is open
                        //event.preventDefault();
                        //event.stopPropagation();
                        //return false;
                    });
                });

                this.getApi().bind('close:start', function() {
                    $('body > *').off('touchmove.fixMobileNavScroll');
                });
            }
        });

        return $[prototype.namespace][prototype.widgetName];
    };
});