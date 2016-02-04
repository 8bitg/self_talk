(function() {
  'use strict';

  function config($stateProvider) {

    // TODO Add a testing suite and start exploring TDD on Front End Components

    $stateProvider
      .state('selftalk', {
        abstract: true,
        url: '',
        views: {
          'header': {
            template: '<page-header></page-header>'
          },
          '': {
            template: '<div ui-view></div>'
          }
        }
      })
      .state('selftalk.view', {
        url: '',
        template: '<div>Test</div>'
      });
  }

  angular
    .module('selfTalkApp')
    .config([
      '$stateProvider',
      config
    ]);
})();
