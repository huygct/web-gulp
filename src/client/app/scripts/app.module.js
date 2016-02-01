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
    'ui.bootstrap',
    'ngSanitize',
    'ngMaterial',
    'ngMessages',
    'jm.i18next',
    'md.data.table',
    'app.directive',
    'app.core',
    'app.widgets',
    'app.layout',
    'app.Web'
  ]);

})();
