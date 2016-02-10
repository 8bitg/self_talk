(function() {

  'use strict';

  angular
    .module('selfTalkApp')
    .directive('pageHeader', ['$window', pageHeaderDirective]);

  function pageHeaderDirective($window) {

    return {
      restrict: 'EA',
      replace: true,
      scope: {},
      templateUrl: 'global/features/header/header.html',
      link: function(scope, elem, attrs) {
        scope.title = "Self-Talk";
        console.log('Testing tests!');
      }
    };
  }

})();
