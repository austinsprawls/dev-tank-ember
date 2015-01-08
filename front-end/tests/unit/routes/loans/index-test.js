import {
  moduleFor,
  test
} from 'ember-qunit';
import startApp from '../../../helpers/start-app';
var App;

moduleFor('route:loans/index', 'LoansIndexRoute', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
  setup: function(){
    App = startApp();
  },
  teardown: function() {
    App.reset();
  }
});

test('it exists', function() {
  var route = this.subject();
  ok(route);
});

test('it lists three loans', function() {
  visit('/loans');
  andThen(function() {
    equal(find('ul.loan li').length,3);
  });
});
