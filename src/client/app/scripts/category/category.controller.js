(function () {
  'use strict';

  angular
    .module('app.category')
    .controller('CategoryController', CategoryController);

  CategoryController.$inject = ['$scope', 'logger', 'layoutService'];
  /* @ngInject */
  function CategoryController($scope, logger, layoutService) {
    var vm = this;
    vm.title = 'Category';

    /**
     *
     */

    var imagePath = 'img/list/60.jpeg';
    $scope.phones = [
      { type: 'Home', number: '(555) 251-1234' },
      { type: 'Cell', number: '(555) 786-9841' },
      { type: 'Office', number: '(555) 314-1592' }
    ];
    $scope.todos = [
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      }
    ];

    /**
     *
     */

    activate();

    function activate() {
      logger.info('Activated Category View');
    }

    var breadcrumb = [
      {'name': 'Home', url: '/'},
      {'name': 'Category', url: '/category'}
    ];

    layoutService.setBreadcrumb(breadcrumb);
    layoutService.page.titlePage = 'Category';
  }
})();
