import Ember from 'ember';

export default Ember.Controller.extend({
  needs: 'loan',
  loan: Ember.computed.alias('controllers.loan.model'),

  actions: {
    createInvestment: function() {
      var loan = this.get('loan'),
      investmentAmount = this.get('investmentAmount'),
      amountRequested = loan.get('amountRequested');
      if (!investmentAmount.trim() ||
         isNaN(investmentAmount) ||
         amountRequested - investmentAmount < 0) {
        return this.investmentFailure();
      }

      var investment = this.store.createRecord('investment', {
        loan: loan,
        amount: investmentAmount,
        expectedReturn: investmentAmount*loan.get('rate')
      });

      loan.set('amountRemaining', amountRequested-investmentAmount );

      this.set('investmentAmount', '');

      if (investment.save()) {
        this.transitionToRoute('loans.index');
        this.investmentSuccess(investmentAmount);
      }else{
        this.investmentFailure();
      }

    },
  },

  investmentSuccess: function(investmentAmount) {
    this.flashMessage('success',
     'Congratulations. You invested $' + investmentAmount + '.');
  },
  investmentFailure: function() {
    this.flashMessage('danger', 'Oops! Something went wrong. Please try again.');
  }
});
