(function() {

  'use strict';

  angular
    .module('selfTalkApp')
    .directive('pageHeader', ['$window', pageHeaderDirective]);

  function pageHeaderDirective($window) {

    return {
      restrict: 'EA',
      transclude: true,
      scope: {},
      templateUrl: '/src/features/global/features/header/header.html',
      link: function(scope, elem, attrs) {
        scope.title = "Hello World!";
      }
    };
  }

})();
