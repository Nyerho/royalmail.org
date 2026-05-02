/**
 * Copyright © Royalmail Group. All rights reserved.
 */

define([
    'jquery',
    'Magento_Customer/js/customer-data',
    'Magento_Ui/js/lib/core/class',
], function($, customerData, Class) {
    'use strict';

    return Class.extend({
        customerDataKey: 'tealium-product-info',
        customerDataCart: 'cart',

        initialize: function() {
            this._super();
            var productInfo = customerData.get(this.customerDataKey);
            productInfo.subscribe(this.onDataChange, this);
        },

        onDataChange: function(productInfo) {
            if (productInfo.data) {
                var result = productInfo.data;

                if (result.addProduct) {
                    this.addProductEvent(result.addProduct);
                }

                if (result.removeProduct) {
                    this.removeProductEvent(result.removeProduct);
                }

                customerData.set(this.customerDataKey, {});
            }
        },

        addProductEvent: function(product) {
            var cart = this.getCartData();
            var shopEvent = ["scAdd"];

            if (product.isEmpty) {
                shopEvent.push("scOpen");
            }

            if (utag_data.pageTemplate == "Product Listing") {
                shopEvent.push("prodView");
            }

            var udoData = {
                "shopEvent": shopEvent,
                "transactionProduct": [product.transactionProduct],
                "cartID": cart.cartID,
                "cartQuantity": cart.cartQuantity,
                "cartTotal": cart.cartTotal
            };

            utag.link(udoData);
        },

        removeProductEvent: function(product) {
            var cart = this.getCartData();

            var udoData = {
                "shopEvent": "remove",
                "transactionProduct": [product.transactionProduct],
                "cartID": cart.cartID,
                "cartQuantity": cart.cartQuantity,
                "cartTotal": cart.cartTotal
            };

            utag.link(udoData)
        },

        getCartData: function() {
            var cart = customerData.get(this.customerDataCart);
            var cartData = {
                "cartID": cart()['cartId'],
                "cartQuantity": cart()['summary_count'],
                "cartTotal": Number(cart()['subtotalAmount']).toFixed(2)
            };
            return cartData;
        }
    });
});