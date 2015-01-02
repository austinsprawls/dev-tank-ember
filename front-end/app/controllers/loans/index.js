import Ember from 'ember';

export default Ember.ArrayController.extend({
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
