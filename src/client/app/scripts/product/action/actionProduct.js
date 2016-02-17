/**
 * Created by thuynghi on 01/02/2016.
 */
(function () {
  'use strict';

  angular
    .module('app.product')
    .controller('ActionProductController', ProductController);

  ProductController.$inject = ['$mdEditDialog', '$q', '$scope', '$timeout', 'logger',
    'layoutService', 'actionProductService', 'appConstant'];
  /* @ngInject */
  function ProductController($mdEditDialog, $q, $scope, $timeout, logger,
                             layoutService, actionProductService, appConstant) {
    var vm = this;

    /**
     * ------------------------------------------------------------------
     */
    function addProduct() {
      actionProductService.api.addProduct(appConstant.product.api.addProduct, vm.currentProduct)
        .then(function (dataSuccess) {
          console.log('--- success: ', dataSuccess);
        }, function (error) {
          console.log('--- error: ', error);
        })
        .finally(function () {

        });
    }

    vm.addProduct = addProduct;

    /**
     * -------------------------------------------------------------------
     */


    function activate() {
      logger.info('Activated Add Product View');
    }

    var breadcrumb = [
      {'name': 'Home', url: '/'},
      {'name': 'Product', url: '/product'}
    ];

    layoutService.setBreadcrumb(breadcrumb);
    layoutService.page.titlePage = 'Add Product';
    activate();
  }
})();
