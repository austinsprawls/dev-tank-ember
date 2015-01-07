import Ember from 'ember';

export default Ember.Controller.extend({
  needs: 'loan',
  loanId: Ember.computed.alias('controllers.loan.id'),
  actions: {
    createInvestment: function() {
      console.log(this.get("loanId"));
      var investmentAmount = this.get('investmentAmount');
      if (!investmentAmount.trim()) {return;}

      var investment = this.store.createRecord('investment', {
        amount: investmentAmount,
        expectedReturn: 1000
      });

      this.store.find('lender', 1).then(function(lender) {
        investment.set('lender', lender);
      });

      this.store.find('loan', this.get("loanId")).then(function(loan){
        investment.set('loan', loan);
      });

      // this.store.find('loan', this.get("loanId")).set('amountRemaining', amountRequested-investmentAmount);

      this.set('investmentAmount', '');

      investment.save();

      this.transitionToRoute('loans.index');
    }
  }
});
