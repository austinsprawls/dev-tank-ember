import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createInvestment: function(loan) {
      var investmentAmount = this.get('investmentAmount');
      if (!title.trim()) {return;}

        var investment = this.store.createRecord('investment', {
          lender: 1,
          loan: loan.id,
          amount: investmentAmount,
          expectedReturn: investmentAmount*loan.rate
        });

        this.set('investmentAmount', '');

        investment.save();

        transitionToRoute('loans.index');
      }
    }
  });
  
