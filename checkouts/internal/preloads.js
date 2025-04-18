(function() {
    var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
    var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/polyfills.CPIGHvSH.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/app.DE5MNd1X.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/page-OnePage.DIA9tXLr.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/DeliveryMethodSelectorSection.Bf0boBSi.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useEditorShopPayNavigation.BHYSzY_s.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/VaultedPayment.DjeCn0w1.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/LocalizationExtensionField.Blky6-zm.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/ShopPayOptInDisclaimer.C8W8ge3q.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/ShipmentBreakdown.C8p1PNSi.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/MerchandiseModal.D3hfMTdE.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/StackedMerchandisePreview.78Hq_seI.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/PayButtonSection.B3Bp1GAh.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/component-ShopPayVerificationSwitch.C8hkarT_.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useSubscribeMessenger.BEwr_2dv.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/index.CUKmY-Xx.js"];
    var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/app.CXL-GAUL.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/OnePage.PMX4OSBO.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/DeliveryMethodSelectorSection.DmqjTkNB.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/useEditorShopPayNavigation.DCOTvxC3.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/VaultedPayment.OxMVm7u-.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/StackedMerchandisePreview.CKAakmU8.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/ShopPayVerificationSwitch.DW7NMDXG.css"];
    var fontPreconnectUrls = ["https://fonts.shopifycdn.com"];
    var fontPrefetchUrls = ["https://fonts.shopifycdn.com/open_sans/opensans_n4.5460e0463a398b1075386f51084d8aa756bafb17.woff2?h1=cG9zdGVyY2hpbGRwcmludHMuY29t&hmac=97dcaaa0231549fa6f38372e17f0cac9eadcbb247e27ff41773a09397818de2c", "https://fonts.shopifycdn.com/open_sans/opensans_n6.63a74f6cbbfef729fb07955b2d5b4cc83273862e.woff2?h1=cG9zdGVyY2hpbGRwcmludHMuY29t&hmac=fa1a6d91be4cd3c9b35beeba1074367cb5bdd1c9b943443c27a302d949c6c7ce", "https://fonts.shopifycdn.com/archivo/archivo_n4.abb5ec97705c33fe369ef678fc93b9cf87658330.woff2?h1=cG9zdGVyY2hpbGRwcmludHMuY29t&hmac=d44e49b3bedecc5929a7c7cb871d303724b1cdea5b65ba7e6980861ea0f8116b", "https://fonts.shopifycdn.com/archivo/archivo_n7.6f363ab30b12ea00d5e6243ed0e977a11393a3ad.woff2?h1=cG9zdGVyY2hpbGRwcmludHMuY29t&hmac=046b921d5f40e1980567e6c871fdd74eca2c1f7ae1486f891aa987ca04fd1802"];
    var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0259/6697/files/website_logo100_c7575250-5116-4380-a73a-96a116352dc0_x320.png?v=1614323186"];

    function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
    }

    function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
            var res = resources[index++];
            if (res) preconnect(res, next);
        })();
    }

    function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
            link.rel = 'prefetch';
            link.fetchPriority = 'low';
            link.as = as;
            if (as === 'font') link.type = 'font/woff2';
            link.href = url;
            link.crossOrigin = '';
            link.onload = link.onerror = callback;
            document.head.appendChild(link);
        } else {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.onloadend = callback;
            xhr.send();
        }
    }

    function prefetchAssets() {
        var resources = [].concat(
            scripts.map(function(url) {
                return [url, 'script'];
            }),
            styles.map(function(url) {
                return [url, 'style'];
            }),
            fontPrefetchUrls.map(function(url) {
                return [url, 'font'];
            }),
            imgPrefetchUrls.map(function(url) {
                return [url, 'image'];
            })
        );
        var index = 0;

        function run() {
            var res = resources[index++];
            if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
    }

    function onLoaded() {
        try {
            if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
                preconnectAssets();
                prefetchAssets();
            }
        } catch (e) {}
    }

    if (document.readyState === 'complete') {
        onLoaded();
    } else {
        addEventListener('load', onLoaded);
    }
})();