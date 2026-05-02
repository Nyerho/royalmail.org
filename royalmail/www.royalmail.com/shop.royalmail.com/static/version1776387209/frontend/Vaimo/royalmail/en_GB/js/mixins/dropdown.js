/**
 * Copyright © 2009-2018 Vaimo Group. All rights reserved.
 * See LICENSE.txt for license details.
 **/

define(['jquery'], function($) {
    return function(dropDownWidget) {
        $.widget('mage.dropdownDialog', dropDownWidget, {
            options: {
                bypassDropdownForMobile: false
            },

            _create: function() {
                this._super();
                var _self = this;

                if (_self.options.triggerTarget && _self.options.bypassDropdownForMobile) {
                    $(_self.options.triggerTarget).unbind('click')
                        .on(_self.options.triggerEvent, function(event) {
                            if (window.innerWidth < 1024) {
                                event.preventDefault();
                                event.stopPropagation();

                                if (!_self._isOpen) {
                                    $('.' + _self.options.defaultDialogClass + ' > .ui-dialog-content').dropdownDialog('close');
                                    _self.open();
                                } else {
                                    _self.close(event);
                                }
                            }
                        });
                }
            }
        });

        return $.mage.dropdownDialog;
    };
});