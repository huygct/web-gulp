(function () {
  'use strict';

  var core = angular.module('app.core');

  core.config(toastrConfig);

  toastrConfig.$inject = ['toastr'];
  /* @ngInject */
  function toastrConfig(toastr) {
    toastr.options.timeOut = 4000;
    toastr.options.positionClass = 'toast-bottom-right';
  }

  var config = {
    appErrorPrefix: '[hottowel Error] ',
    appTitle: 'hottowel'
  };

  core.value('config', config);

  core.config(configure);

  configure.$inject = ['$logProvider', '$i18nextProvider', 'routerHelperProvider', 'exceptionHandlerProvider'];
  /* @ngInject */
  function configure($logProvider, $i18nextProvider, routerHelperProvider, exceptionHandlerProvider) {
    if ($logProvider.debugEnabled) {
      $logProvider.debugEnabled(true);
    }
    exceptionHandlerProvider.configure(config.appErrorPrefix);
    routerHelperProvider.configure({docTitle: config.appTitle + ': '});

    $i18nextProvider.options = {
      lng: 'en', // If not given, i18n will detect the browser language.
      fallbackLng: 'en', // Default is dev
      useCookie: false,
      useLocalStorage: false,
      resGetPath: 'language/__lng__/translation.json'
    };
  }

})();
