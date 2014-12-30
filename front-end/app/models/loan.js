import DS from 'ember-data';

var Loan = DS.Model.extend({
  lendee: DS.belongsTo('lendee'),
  amountRequested: DS.attr(),
  amountRemaining: DS.attr(),
  amountFunded: DS.attr({defaultValue: 0.0}),
  isFunded: DS.attr('boolean', {defaultValue: false}),
  rate: DS.attr(),
  term: DS.attr(),
  expirationDate: DS.attr('date'),
  investments: DS.hasMany('investment', {async: true})
});

Loan.reopenClass({
  FIXTURES: [
    {
      id: 1,
      lendee: 1,
      amountRequested: 12800.0,
      amountRemaining: 12800.0,
      rate: 0.068,
      term: 36,
      expirationDate: "2018-04-04",
      investments: [1]
    },
    {
      id: 2,
      lendee: 2,
      amountRequested: 10000.0,
      amountRemaining: 10000.0,
      rate: 0.09,
      term: 12,
      expirationDate: "2016-01-04",
      investments: [2]
    },
    {
      id: 3,
      lendee: 3,
      amountRequested: 6789.0,
      amountRemaining: 6789.0,
      rate: 0.075,
      term: 24,
      expirationDate: "2017-04-04",
      investments: [3]
    }
  ]
});

export default Loan;
