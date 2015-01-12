import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:check-rate', 'CheckRateController', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

// Replace this with your real tests.
test('it exists', function() {
  var controller = this.subject();
  ok(controller);
});

test('estimatedRate function depends on selectedCredit property', function() {
  var controller = this.subject();

  equal(controller.get('selectedCredit'), '690-719');
  equal(controller.get('estimatedRate'), '9.25%');

  controller.set('selectedCredit', controller.get('creditScores')[0]);
  equal(controller.get('selectedCredit'), '<630');
  equal(controller.get('estimatedRate'), '17.85%');

  controller.set('selectedCredit', controller.get('creditScores')[1]);
  equal(controller.get('selectedCredit'), '630-689');
  equal(controller.get('estimatedRate'), '13.56%');

  controller.set('selectedCredit', controller.get('creditScores')[3]);
  equal(controller.get('selectedCredit'), '720-850');
  equal(controller.get('estimatedRate'), '6.78%');


});
