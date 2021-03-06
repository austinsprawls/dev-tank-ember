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
      createdAt: Date.now()
    },
    {
      id: 2,
      lender: 1,
      loan: 1,
      amount: 1000.0,
      expectedReturn: 90.0,
      createdAt: Date.now()
    },
    {
      id: 3,
      lender: 1,
      loan: 1,
      amount: 3050.0,
      expectedReturn: 250.0,
      createdAt: Date.now()
    },
    {
      id: 4,
      lender: 2,
      loan: 2,
      amount: 2003.0,
      expectedReturn: 200.0,
      createdAt: Date.now()
    },
    {
      id: 5,
      lender: 2,
      loan: 2,
      amount: 1348.0,
      expectedReturn: 149.0,
      createdAt: Date.now()
    },
    {
      id: 6,
      lender: 2,
      loan: 2,
      amount: 690.0,
      expectedReturn: 75.0,
      createdAt: Date.now()
    },
    {
      id: 7,
      lender: 3,
      loan: 3,
      amount: 1250.0,
      expectedReturn: 130.0,
      createdAt: Date.now()
    },
    {
      id: 8,
      lender: 3,
      loan: 3,
      amount: 1800.0,
      expectedReturn: 198.03,
      createdAt: Date.now()
    },
    {
      id: 9,
      lender: 3,
      loan: 3,
      amount: 690.0,
      expectedReturn: 75.0,
      createdAt: Date.now()
    }
  ]
});

export default Investment;
