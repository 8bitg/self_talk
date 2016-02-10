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

    directiveElem = getCompiledElement();
  });

  function getCompiledElement() {
    var element = angular.element('<page-header></page-header>');
    var compiledElement = compile(element)(scope);
    scope.$digest();
    return compiledElement;
  }

  it("should show the page header", function () {
    console.log(directiveElem.find('h2'));
    expect(directiveElem.find('h2').text()).to.equal("Self-Talk");
  });
});
