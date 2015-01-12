import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.resource('loans', function() {
    this.resource('loan', {path: '/:loan_id'}, function(){
      this.route('investments.new', {path: '/investments/new'});
    });
  });
  this.resource('contacts', function(){
    this.resource('contact', {path: '/:contact_id'});
  });
  this.resource('lendee', { path: '/lendees/:lendee_id' });
  this.resource('lendee.payments', {path: '/lendees/:lendee_id/payments'} ,function(){
    this.resource('lendee.payment', {path: '/:payment_id'});
  });
  this.resource('lendee.investments', {path: '/lendees/:lendee_id/investments'}, function(){
    this.resource('lendee.investment', {path: '/:investment_id'});
  });

  this.resource('lender', { path: 'lenders/:lender_id' });
  this.resource('lender.payments', {path: '/lenders/:lender_id/payments'}, function(){
    this.resource('lender.payment', {path: '/:payment_id'});
  });
  this.resource('lender.investments', {path: '/lenders/:lender_id/investments'}, function(){
    this.resource('lender.investment', {path: '/:investment_id'});
  });
  this.route('check-rate');
});

export default Router;
