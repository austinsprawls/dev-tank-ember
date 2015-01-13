import Ember from 'ember';
import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:loans/index', 'LoansIndexController', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('all loan terms are checked on initialization', function(){
  var ctrl = this.subject();

  equal(ctrl.get('is36TermChecked'), true);
  equal(ctrl.get('is24TermChecked'), true);
  equal(ctrl.get('is12TermChecked'), true);
});

test("sortByAmountRequested action sorts properties by loan's amountRequested property", function(){
  var ctrl = this.subject();

  ctrl.send('sortByAmountRequested');

  equal(ctrl.get('sortAscending'), false);
  equal(ctrl.get('sortProperties')[0], 'amountRequested');

  ctrl.send('sortByAmountRequested');

  equal(ctrl.get('sortAscending'), true);
  equal(ctrl.get('sortProperties')[0], 'amountRequested');
});

test("sortByAmountRemaining action sorts properties by loan's amountRemaining property", function(){
  var ctrl = this.subject();

  ctrl.send('sortByAmountRemaining');

  equal(ctrl.get('sortAscending'), false);
  equal(ctrl.get('sortProperties')[0], 'amountRemaining');

  ctrl.send('sortByAmountRemaining');

  equal(ctrl.get('sortAscending'), true);
  equal(ctrl.get('sortProperties')[0], 'amountRemaining');
});

test("sortByAmountFunded action sorts properties by loan's amountFunded property", function(){
  var ctrl = this.subject();

  ctrl.send('sortByAmountFunded');

  equal(ctrl.get('sortAscending'), false);
  equal(ctrl.get('sortProperties')[0], 'amountFunded');

  ctrl.send('sortByAmountFunded');

  equal(ctrl.get('sortAscending'), true);
  equal(ctrl.get('sortProperties')[0], 'amountFunded');
});

test("sortByRate action sorts properties by loan's rate property", function(){
  var ctrl = this.subject();

  ctrl.send('sortByRate');

  equal(ctrl.get('sortAscending'), false);
  equal(ctrl.get('sortProperties')[0], 'rate');

  ctrl.send('sortByRate');

  equal(ctrl.get('sortAscending'), true);
  equal(ctrl.get('sortProperties')[0], 'rate');
});

test("sortByTerm action sorts properties by loan's term property", function(){
  var ctrl = this.subject();

  ctrl.send('sortByTerm');

  equal(ctrl.get('sortAscending'), false);
  equal(ctrl.get('sortProperties')[0], 'term');

  ctrl.send('sortByTerm');

  equal(ctrl.get('sortAscending'), true);
  equal(ctrl.get('sortProperties')[0], 'term');
});

test('setFilter function returns the proper loan Array model based on specified filters', function(){
  var ctrl = this.subject(),
      firstLoan,
      ctrlModel = ctrl.set('model', Ember.A([
        Ember.Object.create({term: 36}),
        Ember.Object.create({term: 12}),
        Ember.Object.create({term: 24})
      ]));

  ctrl.send('setFilter', [12,24,36]);
  equal(ctrl.get('model').length, 0);

  ctrl.send('setFilter', [12,24]);
  equal(ctrl.get('model').length, 1);
  firstLoan = ctrl.get('model')[0];
  equal(firstLoan.term, 36);

  ctrl.send('setFilter', [12,36] );
  equal(ctrl.get('model').length, 1);
  firstLoan = ctrl.get('model')[0];
  equal(firstLoan.term, 24);

  ctrl.send('setFilter', [24,36]);
  equal(ctrl.get('model').length, 1);
  firstLoan = ctrl.get('model')[0];
  equal(firstLoan.term, 12);

  ctrl.send('setFilter', [12]);
  equal(ctrl.get('model').length, 2);
  notEqual(firstLoan.term, 12);

  ctrl.send('setFilter', [24]);
  equal(ctrl.get('model').length, 2);
  notEqual(firstLoan.term, 24);

  ctrl.send('setFilter', [36]);
  equal(ctrl.get('model').length, 2);
  notEqual(firstLoan.term, 36);
});

test('fitlerResults() observes checked terms', function(){
  var ctrl = this.subject();

  ctrl.set('is36TermChecked', false);
  ctrl.send('filterResults');

  equal(ctrl.get('model').length, 2);
  notEqual(ctrl.get('model')[0].term, 36);
  notEqual(ctrl.get('model')[1].term, 36);


});
