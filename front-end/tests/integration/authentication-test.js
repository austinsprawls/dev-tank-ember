/* global Pretender, authenticateSession, invalidateSession */

import Ember from 'ember';
import { test } from 'ember-qunit';
import startApp from '../helpers/start-app';

var App;
var server;

module('Authentication', {
  setup: function(){
    App = startApp();
    server = new Pretender(function(){
      this.post('/token', function(request){
        return [200, { 'Content-Type': 'application/json'}, '{ "access_token": "access_token" }'];
      });
    });
  },
  teardown: function() {
    Ember.run(App, App.destroy);
    server.shutdown();
  },
});

test('users can log in', function() {
  expect(2);
  visit('/');

  andThen(function(){
    equal(find('a:contains("Login")').length, 1, 'The page shows a login link when the session is not authenticatede');
  });

  visit('/login');
  fillIn('#identification', 'letme');
  fillIn('#password', 'in');
  click('button[type="submit"]');

  andThen(function(){
    equal(find('a:contains("Logout")').length, 1, 'The page shows a logout link when the session is authenticated');
  });
});

test('a protected route is accessible when the session is authenticated', function() {
  expect(1);
  authenticateSession();
  visit('/protected');

  andThen(function() {
    equal(currentRouteName(), 'protected');
  });
});

test('a protected route is not accessible when the session is not authenticated', function(){
  expect(1);
  invalidateSession();
  visit('/protected');

  andThen(function(){
    notEqual(currentRouteName(), 'protected');
  });
});
