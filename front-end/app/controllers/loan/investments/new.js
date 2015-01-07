import Ember from 'ember';

export default Ember.Controller.extend({
  needs: 'loan',
  loan: Ember.computed.alias('controllers.loan.model'),

  actions: {
    createInvestment: function() {
      var loan = this.get('loan'),
      investmentAmount = this.get('investmentAmount'),
      amountRequested = loan.get('amountRequested'),
      _this = this;
      if (!investmentAmount.trim()) {return;}

      var investment = this.store.createRecord('investment', {
        loan: loan,
        amount: investmentAmount,
        expectedReturn: investmentAmount*loan.get('rate')
      });

      loan.set('amountRemaining', amountRequested-investmentAmount );

      this.set('investmentAmount', '');

      investment.save().then(function() {
        _this.transitionToRoute('loans.index');
        _this.investmentSubmitted(investmentAmount);
      });
    },
  },

  investmentSubmitted: function(investmentAmount) {
    this.flashMessage('success',
     'Congratulations. You invested $' + investmentAmount + '.');
  }
});
