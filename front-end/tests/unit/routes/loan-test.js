import Ember from 'ember';
import {
  moduleFor,
  test
} from 'ember-qunit';
import startApp from '../../helpers/start-app';
var App;

moduleFor('route:loan', 'LoanRoute', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

  setup: function() {
    App = startApp();
  },
  teardown: function() {
    App.reset();
  }
});

Ember.run(function(){
  test('loan path goes to loan', function() {
    expect(1);

    visit('/loans/1');
    andThen(function(){
      equal(currentRouteName(), 'loan.index');
    });
  });
});
