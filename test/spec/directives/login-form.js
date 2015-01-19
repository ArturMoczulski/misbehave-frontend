'use strict';

describe('Directive: loginForm', function () {

  // load the controller's module
  beforeEach(module('misbehaveFrontendApp'));

  var element,
      scope;

  // Initialize the directive and a mock scope
  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();

    element = '<login-form></login-form>';
    element = $compile(element)(scope);

    scope.$digest();
  }));

  it('should contain username and password fields and a submit button', function() {
    expect(element.find('input[name=username]').length).toEqual(1);
    expect(element.find('input[name=password]').length).toEqual(1);
    expect(element.find('input[type=submit]').length).toEqual(1);
  });

});
