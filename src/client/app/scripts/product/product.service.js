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

    function getView() {
      return {
        main: {
          name: 'main',
          urlTpl: appConstant.product.urlTemplates.main
        },
        add: {
          name: 'add',
          urlTpl: appConstant.product.urlTemplates.add
        },
        edit: {
          name: 'edit',
          urlTpl: appConstant.product.urlTemplates.edit
        }
      };
    }

    var cache = {
      currentView: getView().main

    };

    api = {
      getProductList: function (url) {
        return $http.get(coreService.getApi(url));
      }
    };

    service.api = api;
    service.getView = getView();
    service.cache = cache;

    return service;

  }
})();
