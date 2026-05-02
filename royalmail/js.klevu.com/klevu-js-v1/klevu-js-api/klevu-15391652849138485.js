var klevuLayoutVersion = '-1-1',
    klevu_filtersEnabled = true,
    klevu_filtersOnLeft = true,
    klevu_logoFreeSearch = true,
    klevu_fluidLayoutEnabled = true,
    klevu_showPopuralTerms = true,
    klevu_showPopularSearches = false,
    klevu_showRecentSerches = false,
    klevu_showPrices = true,
    klevu_showOutOfStock = true,
    klevu_categorySearchEnabled = true,
    klevu_layoutView = 'grid',
    klevu_addToCartEnabled = true,
    klevu_showProductCode = false,
    klevu_multiSelectFilters = true;
var klevu_userSearchDomain = 'eucs9.ksearchnet.com',
    klevu_userJavascriptDomain = 'js.klevu.com',
    klevu_userAnalyticsDomain = 'stats.ksearchnet.com',
    klevu_loadMapFile = true,
    klevu_showBannerAds = false,
    klevu_webStoreLanguage = 'en';
var klevu_cmsEnabled = true,
    klevu_cmsApiKey = 'klevu-15391652849138485',
    klevu_cmsSearchDomain = 'eucs9.ksearchnet.com',
    klevu_cmsAnalyticsDomain = 'stats.ksearchnet.com',
    klevu_lookForDataInSameFeed = true;
var klevu_layoutType = 'slim';
var klevu_productsToShowInSlimLayout = 3;
var klevu_isSearchActive = true;
var klevu_showPriceSlider = true;
var klevu_uc_userOptions = {
    noImageUrl: 'https://shop.royalmail.com/media/catalog/product/placeholder/default/royal-mail-image-coming_soon.jpg',
    showProductSwatches: false,
    showRolloverImage: false,
    enablePersonalisationInSearch: false,
    enablePersonalisationInCatNav: false,
    showRatingsOnSearchResultsLandingPage: true,
    showRatingsOnQuickSearches: true,
    showRatingsOnCategoryPage: true,
    showRatingsCountOnSearchResultsLandingPage: false,
    showRatingsCountOnQuickSearches: false,
    showRatingsCountOnCategoryPage: false,
    noResultsOptions: {
        "messages": [],
        "banners": []
    },
    showSearchBoxOnLandingPage: false,
    showFiltersInMobile: true,
    showRecentlyViewedItems: false,
    showTrendingProducts: false,
    priceFormatter: {
        decimalPlaces: 2,
        thousandSeparator: '',
        decimalSeparator: '.',
        currencySymbol: '&pound;',
        appendCurrencyAtLast: false
    },
    addToCartButton: 'Add to Cart',
    priceInterval: 500
};
var klevu_abTestActive = false,
    klevu_apiDomain = 'api.ksearchnet.com';
var klevu_webstorePopularTerms = ['Grey', '2nd class', 'Ties', 'Bags', 'Stamps'];
var klevu_popularProductsOfSite = [{
    "name": "Harry Potter\u2122 Presentation Pack",
    "imageUrl": "https://shop.royalmail.com/needtochange/media/klevu_images/120X120/a/p/ap452_presentation_pack_3d_1.jpg",
    "url": "https://shop.royalmail.com/harry-potter-presentation-pack",
    "id": "6479"
}, {
    "name": "Harry Potter\u2122 Set of Ten Special Stamps",
    "imageUrl": "https://shop.royalmail.com/needtochange/media/klevu_images/120X120/r/o/royal-mail-atlas-2018-mint_stamps.jpg",
    "url": "https://shop.royalmail.com/harry-potter-set-of-ten-special-stamps",
    "id": "6344"
}, {
    "name": "Harry Potter\u2122 Collector Sheet",
    "imageUrl": "https://shop.royalmail.com/needtochange/media/klevu_images/120X120/a/t/at104_harry_potter_character_sheet.jpg",
    "url": "https://shop.royalmail.com/harry-potter-collector-sheet",
    "id": "6419"
}, {
    "name": "100 x 2nd Class Self Adhesive Stamp Sheet",
    "imageUrl": "https://shop.royalmail.com/needtochange/media/klevu_images/120X120/s/d/sdn2-royal-mail-100-x-2nd-class-self-adhesive-stamp-sheet-2.jpg",
    "url": "https://shop.royalmail.com/100-x-2nd-class-self-adhesive-stamp-sheet",
    "id": "5239"
}, {
    "name": "Harry Potter\u2122 Heroes & Villains Presentation Pack",
    "imageUrl": "https://shop.royalmail.com/needtochange/media/klevu_images/120X120/a/p/ap354_heroes_and_villains_presentation_pack_visual.jpg",
    "url": "https://shop.royalmail.com/harry-potter-heroes-villains",
    "id": "5230"
}, {
    "name": "100 x 1st Class Self Adhesive Stamp Sheet",
    "imageUrl": "https://shop.royalmail.com/needtochange/media/klevu_images/120X120/s/d/sdn1-royal-mail-100-x-1st-class-self-adhesive-stamp-sheet-1.jpg",
    "url": "https://shop.royalmail.com/100-x-1st-class-self-adhesive-stamp-sheet",
    "id": "5233"
}, {
    "name": "Harry Potter\u2122 Limited Edition Souvenir Art Collection",
    "imageUrl": "https://shop.royalmail.com/needtochange/media/klevu_images/120X120/r/o/royal-mail-atlas-2018-souvenir-art-print-folder.jpg",
    "url": "https://shop.royalmail.com/harry-potter-souvenir-art-folder",
    "id": "6440"
}, {
    "name": "Harry Potter\u2122 Miniature Sheet",
    "imageUrl": "https://shop.royalmail.com/needtochange/media/klevu_images/120X120/r/o/royal-mail-atlas-2018-minisheet.jpg",
    "url": "https://shop.royalmail.com/harry-potter-miniature-sheet",
    "id": "6359"
}, {
    "name": "Harry Potter\u2122 Framed Stamp Set",
    "imageUrl": "https://shop.royalmail.com/needtochange/media/klevu_images/120X120/n/3/n3153_harry_potter_stamps_framed_visual.jpg",
    "url": "https://shop.royalmail.com/harry-potter-framed-stamp-set",
    "id": "6389"
}, {
    "name": "Harry Potter\u2122 Set of Sixteen Postcards",
    "imageUrl": "https://shop.royalmail.com/needtochange/media/klevu_images/120X120/r/o/royal-mail-atlas-2018-postcards_mix.jpg",
    "url": "https://shop.royalmail.com/harry-potter-set-of-sixteen-postcards",
    "id": "6413"
}];