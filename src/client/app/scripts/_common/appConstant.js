(function () {
  'use strict';

  angular
    .module('app')
    .constant('appConstant', {

      product: {
        api: {
          getProductList: 'product/getList',
          addProduct: 'product/add',
          updateProduct: 'product/update',
          deleteProduct: 'product/delete'
        }
      }

    });
})();
