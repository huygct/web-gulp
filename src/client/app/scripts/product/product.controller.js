(function () {
  'use strict';

  angular
    .module('app.product')
    .controller('ProductController', ProductController);

  ProductController.$inject = ['logger', 'layoutService'];
  /* @ngInject */
  function ProductController(logger, layoutService) {
    var vm = this;
    vm.title = 'Product';

    activate();

    function activate() {
      logger.info('Activated Product View');
    }

    var breadcrumb = [
      {'name': 'Home', url: '/'},
      {'name': 'Product', url: '/product'}
    ];

    layoutService.setBreadcrumb(breadcrumb);
    layoutService.page.titlePage = 'Product';
  }
})();
