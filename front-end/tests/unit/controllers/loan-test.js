import Ember from 'ember';
import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:loan', 'LoanController', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

// Replace this with your real tests.
test('it exists', function() {
  var controller = this.subject();
  ok(controller);
});

test('percentageRate property returns the proper amount', function() {
  var ctrl = this.subject();

  ctrl.set('model', Ember.Object.create({
    lendee: 1,
    amountRequested: 12800.0,
    amountRemaining: 12800.0,
    rate: 0.068,
    term: 36,
    expirationDate: "2018-04-04",
    investments: [1]
  }));

  equal(ctrl.get('percentageRate'), 7);
});
