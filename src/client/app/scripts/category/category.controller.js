(function () {
  'use strict';

  angular
    .module('app.category')
    .controller('CategoryController', CategoryController);

  CategoryController.$inject = ['logger', 'layoutService'];
  /* @ngInject */
  function CategoryController(logger, layoutService) {
    var vm = this;
    vm.title = 'Category';

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
