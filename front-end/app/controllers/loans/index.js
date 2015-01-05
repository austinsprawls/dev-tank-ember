import Ember from 'ember';

export default Ember.ArrayController.extend({
  is36TermChecked: true,
  is24TermChecked: true,
  is12TermChecked: true,
  filterResults: function() {
    if(!this.get('is12TermChecked') && !this.get('is24TermChecked') && !this.get('is36TermChecked')){
      console.log('first option');
      return this.set('model', this.store.filter('loan', function(loan){
        return loan.get('term') !== 12 && loan.get('term') !== 24 && loan.get('term') !== 36;
      }));
    } else if (!this.get('is12TermChecked') && !this.get('is24TermChecked')) {
      console.log('second option');
      return this.set('model', this.store.filter('loan', function(loan){
        return loan.get('term') !== 12 && loan.get('term') !== 24;
      }));
    } else if (!this.get('is12TermChecked') && !this.get('is36TermChecked')) {
      console.log('third option');
      return this.set('model', this.store.filter('loan', function(loan){
        return loan.get('term') !== 12 && loan.get('term') !== 36;
      }));
    } else if (!this.get('is24TermChecked') && !this.get('is36TermChecked')) {
      console.log('fourth option');
      return this.set('model', this.store.filter('loan', function(loan){
        return loan.get('term') !== 24 && loan.get('term') !== 36;
      }));
    } else if (!this.get('is12TermChecked')) {
      console.log('fifth option');
      return this.set('model', this.store.filter('loan', function(loan){
        return loan.get('term') !== 12;
      }));
    } else if (!this.get('is24TermChecked')) {
      console.log('sixth option');
      return this.set('model', this.store.filter('loan', function(loan){
        return loan.get('term') !== 24;
      }));
    } else if (!this.get('is36TermChecked')) {
      console.log('seventh option');
      return this.set('model', this.store.filter('loan', function(loan){
        return loan.get('term') !==36;
      }));
    } else {
      return this.set('model', this.store.find('loan'));
    }
  }.observes('is36TermChecked', 'is24TermChecked', 'is12TermChecked'),

  actions: {
    sortByAmountRequested: function() {
      this.set('sortProperties', ['amountRequested']);
    },
    sortByAmountRemaining: function() {
      this.set('sortProperties', ['amountRemaining']);
    },
    sortByAmountFunded: function() {
      this.set('sortProperties', ['amountFunded']);
    },
    sortByRate: function() {
      this.set('sortProperties', ['rate']);
    },
    sortByTerm: function() {
      this.set('sortProperties', ['term']);
    }
  }
});
