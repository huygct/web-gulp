(function () {
  'use strict';

  angular
    .module('app.product')
    .controller('ProductController', ProductController);

  ProductController.$inject = ['$mdEditDialog', '$q', '$scope', '$timeout', 'logger',
    'layoutService', 'productService', 'appConstant'];
  /* @ngInject */
  function ProductController($mdEditDialog, $q, $scope, $timeout, logger,
                             layoutService, productService, appConstant) {
    var vm = this;
    vm.title = 'Product';

    vm.cache = productService.cache;

    /**
     * ------------------------------------------------------------------
     */
    vm.selected = [];

    vm.options = {
      autoSelect: true,
      boundaryLinks: true,
      largeEditDialog: true,
      pageSelector: true,
      rowSelection: true
    };

    vm.query = {
      order: 'name',
      limit: 5,
      page: 1
    };

    vm.desserts = {
      count: 0,
      data: [
        //{
        //  "name": "KitKat",
        //  "type": "Candy",
        //  "calories": { "value": 518.0 },
        //  "fat": { "value": 26.0 },
        //  "carbs": { "value": 65.0 },
        //  "protein": { "value": 7.0 },
        //  "sodium": { "value": 54.0 },
        //  "calcium": { "value": 12.0 },
        //  "iron": { "value": 6.0 }
        //}
      ]
    };

    vm.editComment = function (event, dessert) {
      event.stopPropagation(); // in case autoselect is enabled

      var editDialog = {
        modelValue: dessert.comment,
        placeholder: 'Add a comment',
        save: function (input) {
          if(input.$modelValue === 'Donald Trump') {
            return $q.reject();
          }
          if(input.$modelValue === 'Bernie Sanders') {
            return dessert.comment = 'FEEL THE BERN!';
          }
          dessert.comment = input.$modelValue;
        },
        targetEvent: event,
        title: 'Add a comment',
        validators: {
          'md-maxlength': 30
        }
      };

      var promise;

      if(vm.options.largeEditDialog) {
        promise = $mdEditDialog.large(editDialog);
      } else {
        promise = $mdEditDialog.small(editDialog);
      }

      promise.then(function (ctrl) {
        var input = ctrl.getInput();

        input.$viewChangeListeners.push(function () {
          input.$setValidity('test', input.$modelValue !== 'test');
        });
      });
    };

    vm.getTypes = function () {
      return ['Candy', 'Ice cream', 'Other', 'Pastry'];
    };

    vm.loadStuff = function () {
      productService.api.getProductList(appConstant.product.api.getProductList)
        .then(function (data) {
          console.log(data);
        }, function (error) {
          console.log(error);
        })
        .finally(function () {
          console.log('OK');
        });
    };

    vm.logItem = function (item) {
      console.log(item.name, 'was selected');
    };

    vm.logOrder = function (order) {
      console.log('order: ', order);
    };

    vm.logPagination = function (page, limit) {
      console.log('page: ', page);
      console.log('limit: ', limit);
    };

    vm.goToAddView = function () {
      vm.cache.currentView = productService.getView.add;
      vm.currentProduct = {};
    };

    vm.goToEditView = function () {
      vm.cache.currentView = productService.getView.edit;
      //vm.currentProduct = ;
    };

    vm.actionDelete = function () {

    };

    /**
     * -------------------------------------------------------------------
     */


    function activate() {
      logger.info('Activated Product View');
    }

    var breadcrumb = [
      {'name': 'Home', url: '/'},
      {'name': 'Product', url: '/product'}
    ];

    layoutService.setBreadcrumb(breadcrumb);
    layoutService.page.titlePage = 'Product';
    activate();
  }
})();
