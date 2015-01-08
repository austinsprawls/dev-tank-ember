import Ember from 'ember';

export default Ember.ArrayController.extend({
  is36TermChecked: true,
  is24TermChecked: true,
  is12TermChecked: true,
  filterResults: function() {
    if(!this.get('is12TermChecked') && !this.get('is24TermChecked') && !this.get('is36TermChecked')){
      this.setFilter([12,24,36]);
    } else if (!this.get('is12TermChecked') && !this.get('is24TermChecked')) {
      this.setFilter([12,36]);
    } else if (!this.get('is12TermChecked') && !this.get('is36TermChecked')) {
      this.setFilter([12,36]);
    } else if (!this.get('is24TermChecked') && !this.get('is36TermChecked')) {
      this.setFilter([24,36]);
    } else if (!this.get('is12TermChecked')) {
      this.setFilter([12]);
    } else if (!this.get('is24TermChecked')) {
      this.setFilter([24]);
    } else if (!this.get('is36TermChecked')) {
      this.setFilter([36]);
    } else {
      return this.set('model', this.store.find('loan'));
    }
  }.observes('is36TermChecked', 'is24TermChecked', 'is12TermChecked'),
  setFilter: function(filters) {
    return this.set('model', this.store.filter('loan', function(loan) {
      if(filters.length===3){
        return loan.get('term') !== filters[0] && loan.get('term') !== filters[1] && loan.get('term') !== filters[2];
      } else if(filters.length===2) {
        return loan.get('term') !== filters[0] && loan.get('term') !== filters[1];
      } else if(filters.length===1){
        return loan.get('term') !== filters[0];
      }
    }));
  },

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
      this.toggleProperty('sortAscending');
      this.set('sortProperties', ['amountFunded']);
    },
    sortByRate: function() {
      this.toggleProperty('sortAscending');
      this.set('sortProperties', ['rate']);
    },
    sortByTerm: function() {
      this.toggleProperty('sortAscending');
      this.set('sortProperties', ['term']);
    }
  }
});
