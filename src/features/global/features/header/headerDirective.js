(function() {

  'use strict';

  function pageHeaderDirective($window) {

    return {
      restrict: 'EA',
      transclude: true,
      scope: {},
      templateUrl: 'global/features/header/header.html',
      link: function(scope, elem, attrs) {
        scope.title = "Hello World!";
      }
    };
  }

  angular
    .module('selfTalkApp')
    .directive('pageHeader', ['$window', pageHeaderDirective]);


})();
