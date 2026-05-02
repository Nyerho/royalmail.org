/**
 * Copyright © Vaimo Group. All rights reserved.
 * See LICENSE.txt for license details.
 **/

define([
    'jquery'
], function($) {
    'use strict';

    $(window).bind('pageshow', function(event) {
        if (event.originalEvent.persisted) {
            window.location.reload();
        }
    });
});