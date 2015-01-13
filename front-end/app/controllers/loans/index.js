import Ember from 'ember';

export default Ember.ArrayController.extend({
  itemController: 'loan',
  is36TermChecked: true,
  is24TermChecked: true,
  is12TermChecked: true,

  filteredLoans: function(){
    var loans = this.store.all('loan');
    var selectedTerms = [this.get('is12TermChecked'), this.get('is24TermChecked'), this.get('is36TermChecked')];
    if(selectedTerms.without(false).length === 3) {
      return this.set('model', loans);
    } else if (selectedTerms.without(false).length === 2) {
      if (selectedTerms.indexOf(false) === 0) {
        return this.set('model',loans.rejectBy('term', 12));
      } else if (selectedTerms.indexOf(false) === 1) {
        return this.set('model', loans.rejectBy('term', 24));
      } else if (selectedTerms.indexOf(false) === 2) {
        return this.set('model', loans.rejectBy('term', 36));
      }
    } else if (selectedTerms.without(false).length === 1) {
      if (selectedTerms.indexOf(true) === 0) {
        return this.set( 'model', loans.filterBy('term', 12));
      } else if (selectedTerms.indexOf(true) === 1) {
        return this.set('model', loans.filterBy('term', 24));
      } else if (selectedTerms.indexOf(true) === 2) {
        return this.set('model', loans.filterBy('term', 36));
      }
    } else {
      return this.set('model',[]);
    }
  }.observes('is12TermChecked', 'is24TermChecked', 'is36TermChecked'),

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
