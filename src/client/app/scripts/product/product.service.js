(function () {
  'use strict';

  angular
    .module('app.product')
    .factory('productService', productService);

  productService.$inject = ['$http', 'exception', 'appConstant', 'coreService'];
  /* @ngInject */
  function productService($http, exception, appConstant, coreService) {

    var api;
    var service = {};

    api = {
      getProductList: function (url) {
        return $http.get(coreService.getApi(url));
      }
    };

    service.api = api;

    return service;

  }
})();
