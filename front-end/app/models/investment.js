import DS from 'ember-data';

var Investment = DS.Model.extend({
  lender: DS.belongsTo('lender'),
  loan: DS.belongsTo('loan'),
  amount: DS.attr(),
  expectedReturn: DS.attr(),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});

Investment.reopenClass({
  FIXTURES: [
    {
      id: 1,
      lender: 1,
      loan: 1,
      amount: 2500.0,
      expectedReturn: 120.0,
    },
    {
      id: 2,
      lender: 2,
      loan: 2,
      amount: 1000.0,
      expectedReturn: 90.0,
    },
    {
      id: 3,
      lender: 3,
      loan: 3,
      amount: 3050.0,
      expectedReturn: 250.0
    }
  ]
});

export default Investment;
