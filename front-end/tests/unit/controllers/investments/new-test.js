import Ember from 'ember';
import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:loan/investments/new', 'InvestmentsNewController', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
  needs: ['controller:loan']
});

// Replace this with your real tests.
test('it exists', function() {
  var controller = this.subject();
  ok(controller);
});

test('createInvestment action creates a new investment if fields are correct', function(){
  var ctrl = this.subject(),
      loanCtrl = ctrl.get('controllers.loan');

  Ember.run(function(){

    equal(ctrl.get('investmentAmount'), undefined);

    loanCtrl.set('model', Ember.Object.create({
      lendee: 1,
      amountRequested: 12800.0,
      amountRemaining: 12800.0,
      rate: 0.068,
      term: 36,
      expirationDate: "2018-04-04",
    }));

    var loan = loanCtrl.get('model')

    ctrl.set('investmentAmount', '1200');
    equal(ctrl.get('investmentAmount'), '1200');

    ctrl.send('createInvestment');

    equal(ctrl.get('investmentAmount', ''));

  });
});

test('createInvestment action does not create new investment if field isNaN', function(){
  var ctrl = this.subject(),
      loanCtrl = ctrl.get('controllers.loan');

  Ember.run(function(){

    equal(ctrl.get('investmentAmount'), undefined);

    loanCtrl.set('model', Ember.Object.create({
      lendee: 1,
      amountRequested: 12800.0,
      amountRemaining: 12800.0,
      rate: 0.068,
      term: 36,
      expirationDate: "2018-04-04",
    }));

    var loan = loanCtrl.get('model')

    ctrl.set('investmentAmount', 'hello');
    equal(ctrl.get('investmentAmount'), 'hello');

    ctrl.send('createInvestment');

    equal(ctrl.get('investmentAmount', undefined));
  });
});

test('createInvestment does not save investment if investmentAmount is more than amount remaining on loan',
  function(){
    expect(0);
});
