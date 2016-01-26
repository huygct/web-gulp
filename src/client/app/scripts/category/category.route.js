(function() {
  'use strict';

  angular
    .module('app.category')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'app.category',
        config: {
          url: '/category',
          templateUrl: 'app/scripts/category/category.html',
          controller: 'CategoryController',
          controllerAs: 'vm',
          title: 'Category'
        }
      }
    ];
  }
})();
