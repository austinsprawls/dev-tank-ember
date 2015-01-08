import {
  moduleFor,
  test
} from 'ember-qunit';
import startApp from '../../helpers/start-app';
var App;

moduleFor('route:lendee', 'LendeeRoute', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
  setup: function() {
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

test('redirect to login if not authenticated', function() {
  visit('/lendees/1');

  andThen(function() {
    equal(currentRouteName(), 'login');
    equal(currentPath(), 'login');
    equal(currentURL(), '/login');
  });
});
