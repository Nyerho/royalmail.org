define([
    'jquery/ui',
    'jquery',
], function(Component, $) {
    'use strict';

    return function(config, element) {
        var minicart = $(element);
        minicart.on('click', function() {
            utag.link({
                "shopEvent": "miniBasket"
            });
        });
    }
});