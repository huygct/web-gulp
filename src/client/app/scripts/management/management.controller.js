(function () {
  'use strict';

  angular
    .module('app.management')
    .controller('ManagementController', ManagementController);

  ManagementController.$inject = ['logger', 'layoutService'];
  /* @ngInject */
  function ManagementController(logger, layoutService) {
    var vm = this;
    vm.title = 'Management';

    activate();

    function activate() {
      logger.info('Activated Management View');
    }

    var breadcrumb = [
      {'name': 'Home', url: '/'},
      {'name': 'Management', url: '/management'}
    ];

    layoutService.setBreadcrumb(breadcrumb);
    layoutService.page.titlePage = 'Management';
  }
})();
