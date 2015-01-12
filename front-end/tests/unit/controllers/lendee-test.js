import Ember from 'ember';

import {
  moduleFor,
  test
} from 'ember-qunit';

import startApp from '../../helpers/start-app';
var App;

moduleFor('controller:lendee', 'LendeeController', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    App.reset();
  }
});

// Replace this with your real tests.
test('it exists', function() {
  var controller = this.subject();
  ok(controller);
});

test('editProfile action sets isEditingProfile property to true', function() {
  var ctrl = this.subject();

  equal(ctrl.get('isEditingProfile'), false);

  ctrl.send('editProfile');

  equal(ctrl.get('isEditingProfile'), true);
});

test('saveNewProfile action saves lendee info if acceptable', function() {
  var ctrl = this.subject();

  equal(ctrl.get('firstName'), undefined);

  ctrl.set('model', Ember.Object.create({firstName: 'Austin'}));
  ctrl.get('model').setProperties({lastName: 'Sprawls',email: 'austinsprawls@example.com',streetAddress: '123 Happy Lane'});
  equal(ctrl.get('model.firstName'), 'Austin');

  ctrl.set('firstName', 'Kevin');
  equal(ctrl.get('firstName'), 'Kevin');
  ctrl.send('saveNewProfile');

  equal(ctrl.get('model.firstName'), 'Kevin');
  equal(ctrl.get('isEditingProfile'), false);
});

test('saveNewProfile action does not save if fields are empty', function() {
  var ctrl = this.subject();

  ctrl.set('model', Ember.Object.create({firstName: 'Austin'}));
  equal(ctrl.get('model.firstName'), 'Austin');

  ctrl.send('saveNewProfile');
  equal(ctrl.get('isEditingProfile'), true);
});
