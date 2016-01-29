(function() {
  'use strict';

  angular
    .module('app.management')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'app.management',
        config: {
          url: '/management',
          templateUrl: 'app/scripts/management/management.html',
          controller: 'ManagementController',
          controllerAs: 'vm',
          title: 'Management',
          settings: {
            nav: 3,
            icon: 'fa fa-cubes',
            name: 'Management',
            onlyOne: true,
            children: [
              {
                url: 'app.product',
                icon: 'fa fa-dashboard',
                name: 'Product'
              },
              {
                url: 'app.category',
                icon: 'fa fa-dashboard',
                name: 'Category'
              }
            ]
          }
        }
      }
    ];
  }
})();
