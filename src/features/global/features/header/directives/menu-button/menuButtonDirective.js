(function() {

  'use strict';

  angular
    .module('selfTalkApp')
    .directive('menuButton', ['$window', menuButtonDirective]);

  function menuButtonDirective($window) {
    return {
      restrict: 'EA',
      replace: true,
      scope: {
        text: '@'
      },
      templateUrl: 'global/features/header/directives/menu-button/menuButton.html',
      link: function(scope, elem, attrs) {
        scope.onClick = function() {
          console.log('Hello World!');
        };
      }
    };
  }

})();
