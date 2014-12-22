import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('contacts', function(){
    this.resource('contact', {path: '/:contact_id'});
  });
  this.resource('lendee', { path: 'lendees/:lendee_id' }, function() {
    this.resource('lendee.payments', {path: '/payments'} ,function(){});
    this.resource('lendee.investments', {path: '/investments'}, function(){});
  });
  this.resource('lender', { path: 'lenders/:lender_id' }, function() {
    this.resource('lender.payments', {path: '/payments'}, function(){});
    this.resource('lender.investments', {path: '/investments'}, function(){});
  });
});

export default Router;
