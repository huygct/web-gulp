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
    $scope.clearValue = function() {
      $scope.myModel = undefined;
    };
    $scope.save = function() {
      alert('Form was valid!');
    };

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
