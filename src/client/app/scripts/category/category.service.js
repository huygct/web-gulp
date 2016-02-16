/**
 * Created by thuynghi on 15/02/2016.
 */
(function () {
  'use strict';

  angular
    .module('app.category')
    .factory('categoryService', categoryService);

  categoryService.$inject = [];
  function categoryService() {

    var api;
    var service = {};

    api = {

    };

    service.api = api;

    return service;
  }

})();