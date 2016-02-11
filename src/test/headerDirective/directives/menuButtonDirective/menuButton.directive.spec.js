describe('menu-button-directive-test', function() {
  var compile, scope, directiveElem;

  beforeEach(function(){
    module('templates');
    module('selfTalkApp');
    module('menuButtonTest');

    inject(function ($compile, $rootScope) {
      compile = $compile;
      scope = $rootScope.$new();
    });
  });

  function getCompiledElement(param) {
    var element = angular.element('<menu-button text='+ param +'></menu-button>');
    var compiledElement = compile(element)(scope);
    scope.$digest();

    return compiledElement;
  }

  it("should bind data from parameter into directive's isolateScope", function () {
    directiveElem = getCompiledElement('menu');
    expect(directiveElem.isolateScope().text).to.equal("menu");
  });

  it("should update title in directive's isolateScope", function () {
    directiveElem = getCompiledElement('menu');

    directiveElem.isolateScope().text = 'Hello World';
    scope.$digest();

    expect(directiveElem.isolateScope().text).to.equal("Hello World");
  });

});
