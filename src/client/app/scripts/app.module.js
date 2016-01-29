(function () {
    'use strict';

    angular.module('app.Web', [
        'app.dashboard',
        'app.user',
        'app.management',
        'app.product',
        'app.category'

    ]);

    angular.module('app', [
        'ngMaterial',
        'md.data.table',

        'app.core',
        'app.widgets',
        'app.layout',
        'app.Web'
    ]);

})();
