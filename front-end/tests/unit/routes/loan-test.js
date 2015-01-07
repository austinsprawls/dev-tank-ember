import Ember from 'ember';
import {
  moduleFor,
  test
} from 'ember-qunit';
import startApp from '../../helpers/start-app';
var App;

var promise = new Ember.RSVP.Promise(function(resolve){
  setTimeout(function(){
    Ember.run(this, resolve, 'hello world');
  }, 20);
});

moduleFor('route:loan', 'LoanRoute', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, App.destroy());
  }
});

Ember.run(function(){
  promise.then(function(result){
    test('loan path goes to loan', function() {
      expect(1);

      visit('/loans/1');
      andThen(function(){
        equal(currentRouteName(), 'loan.index');
      });
    });
  });
});
