import Ember from 'ember';

export default Ember.ArrayController.extend({
  is36TermChecked: true,
  is24TermChecked: true,
  is12TermChecked: true,
  filterResults: function() {
    if(!this.get('is12TermChecked') && !this.get('is24TermChecked') && !this.get('is36TermChecked')){
      return this.set('model', this.store.filter('loan', function(loan){
        return loan.get('term') !== 12 && loan.get('term') !== 24 && loan.get('term') !== 36;
      }));
    } else if (!this.get('is12TermChecked') && !this.get('is24TermChecked')) {
      return this.set('model', this.store.filter('loan', function(loan){
        return loan.get('term') !== 12 && loan.get('term') !== 24;
      }));
    } else if (!this.get('is12TermChecked') && !this.get('is36TermChecked')) {
      return this.set('model', this.store.filter('loan', function(loan){
        return loan.get('term') !== 12 && loan.get('term') !== 36;
      }));
    } else if (!this.get('is24TermChecked') && !this.get('is36TermChecked')) {
      return this.set('model', this.store.filter('loan', function(loan){
        return loan.get('term') !== 24 && loan.get('term') !== 36;
      }));
    } else if (!this.get('is12TermChecked')) {
      return this.set('model', this.store.filter('loan', function(loan){
        return loan.get('term') !== 12;
      }));
    } else if (!this.get('is24TermChecked')) {
      return this.set('model', this.store.filter('loan', function(loan){
        return loan.get('term') !== 24;
      }));
    } else if (!this.get('is36TermChecked')) {
      return this.set('model', this.store.filter('loan', function(loan){
        return loan.get('term') !==36;
      }));
    } else {
      return this.set('model', this.store.find('loan'));
    }
  }.observes('is36TermChecked', 'is24TermChecked', 'is12TermChecked'),

  actions: {
    sortByAmountRequested: function() {
      this.toggleProperty('sortAscending');
      this.set('sortProperties', ['amountRequested']);
    },
    sortByAmountRemaining: function() {
      this.toggleProperty('sortAscending');
      this.set('sortProperties', ['amountRemaining']);
    },
    sortByAmountFunded: function() {
      this.toggleProperty('amountFundedOrder');
      this.set('sortProperties', ['amountFunded']);
    },
    sortByRate: function() {
      this.toggleProperty('rateOrder');
      this.set('sortProperties', ['rate']);
    },
    sortByTerm: function() {
      this.toggleProperty('termOrder');
      this.set('sortProperties', ['term']);
    }
  }
});
