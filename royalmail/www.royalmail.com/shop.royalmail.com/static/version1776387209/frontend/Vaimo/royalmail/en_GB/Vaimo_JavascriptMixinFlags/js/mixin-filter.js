/**
 * Copyright © Vaimo Group. All rights reserved.
 * See LICENSE_VAIMO.txt for license details.
 */
;
require([
    'mixins'
], function() {
    'use strict';

    var utils = {
        listContains: function(list, items) {
            for (var i = 0; i < items.length; i++) {
                if (list.indexOf(items[i]) === -1) {
                    return false;
                }
            }

            return true;
        },

        matchActiveItems: function(items, flags, flagsSeparator, operatorAND) {
            var result = [];

            items.forEach(function(item) {
                var parts = item.split(flagsSeparator);

                if (parts.length > 1) {
                    if (!flags) {
                        return;
                    }

                    var itemFlags = parts[0].split(operatorAND);

                    if (!utils.listContains(flags, itemFlags)) {
                        return;
                    }
                }

                result.push(parts.pop());
            });

            return result;
        }
    };

    var context = {
        window: window
    };

    var config = {
        flagsSeparator: '::',
        operatorAND: ',',
        activeFlagsKey: '__vaimoJavascriptMixinFlags'
    };

    var mixinInjector = require('mixins');
    var _getMixins = mixinInjector.getMixins;

    mixinInjector.getMixins = function() {
        var items = _getMixins.apply(this, arguments);
        var flags = context.window[config.activeFlagsKey];

        return utils.matchActiveItems(items, flags, config.flagsSeparator, config.operatorAND);
    };
});