describe('header-directive-test', function() {
  var compile, scope, directiveElem;

  beforeEach(function(){
    module('templates');
    module('selfTalkApp');
    module('pageHeaderTest');

    inject(function ($compile, $rootScope) {
      compile = $compile;
      scope = $rootScope.$new();
    });
  });

  function getCompiledElement() {
    var element = angular.element('<page-header></page-header>');
    var compiledElement = compile(element)(scope);
    scope.$digest();

    return compiledElement;
  }

  it("should data-bind the app name into the h2 tag in the page header", function () {
    directiveElem = getCompiledElement();
    expect(directiveElem.find('h2').text()).to.equal("Self-Talk");
  });

  it("should update title in page-header's isolateScope", function () {
    directiveElem = getCompiledElement();
    directiveElem.isolateScope().title = 'Hello World';
    scope.$digest();

    expect(directiveElem.isolateScope().title).to.equal("Hello World");
  });

});
