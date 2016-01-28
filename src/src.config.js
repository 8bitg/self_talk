(function() {
  'use strict';

  function config($stateProvider) {

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
        template: '<div>test</div>'
      });
  }

  angular
    .module('selfTalkApp')
    .config([
      '$stateProvider',
      config
    ])
})();
