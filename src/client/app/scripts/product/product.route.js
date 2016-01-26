(function() {
  'use strict';

  angular
    .module('app.product')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'app.product',
        config: {
          url: '/product',
          templateUrl: 'app/scripts/product/product.html',
          controller: 'ProductController',
          controllerAs: 'vm',
          title: 'Product'
        }
      }
    ];
  }
})();
