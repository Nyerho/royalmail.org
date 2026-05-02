define([
    'Magento_Ui/js/modal/modal',
    'uiComponent',
    'jquery',
    'mage/url'
], function(modal, Component, $, urlBuilder) {
    'use strict';

    return Component.extend({

        defaults: {
            template: 'Pitbulk_SAML2/checkout/samllogin',
            samlLoginURL: ''
        },

        initialize: function() {
            this._super();

            this.samlLoginURL = urlBuilder.build('sso/saml2/login');
        },

        /**
         * @returns {boolean}
         */
        isActive: function() {
            if (window.checkoutConfig !== undefined) {
                return window.checkoutConfig.saml.enabled;
            }
            return false;
        },

        /**
         * @returns {boolean}
         */
        getSamlTextLink: function() {
            if (window.checkoutConfig !== undefined) {
                return window.checkoutConfig.saml.linktext;
            }
            return "";
        },

        /**
         * @returns {boolean}
         */
        isForceSamlActive: function() {
            if (window.checkoutConfig !== undefined) {
                return window.checkoutConfig.saml.forced;
            }
            return false;
        },

        disableLoginForm: function() {
            if (document.querySelector("form#login-form")) {
                document.querySelector("form#login-form").style.display = "none";
            }
            if (document.querySelector("div#saml_login_checkout_container")) {
                document.querySelector("div#saml_login_checkout_container").style.border = "0px";
            }
        }
    });
});