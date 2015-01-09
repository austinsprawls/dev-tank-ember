import DS from 'ember-data';

var Lender = DS.Model.extend({
  email: DS.attr('string'),
  password: DS.attr('string'),
  passwordConfirmation: DS.attr('string'),
  stateOfResidence: DS.attr('string'),
  funds: DS.attr({defaultValue: 0.0}),
  totalInvested: DS.attr({defaultValue: 0.0}),
  investments: DS.hasMany('investment', {async: true}),
  payments: DS.hasMany('payment', {async: true})
});

Lender.reopenClass({
  FIXTURES: [
    {
      id: 1,
      email: "zion@runolfsdottir.net",
      password: "password",
      passwordConfirmation: "password",
      stateOfResidence: "Oregon",
      funds: 0.0,
      totalInvested: 3500.0,
      investments: [1,2],
      payments: [1,2,3]
    },
    {
      id: 2,
      email: "woodrow_kemmer@grady.name",
      password: "password",
      passwordConfirmation: "password",
      stateOfResidence: "South Carolina",
      funds: 0.0,
      totalInvested: 5053.0,
      investments: [3,4],
      payments: [4,5,6]
    },
    {
      id: 3,
      email: "emerson@schmelermarquardt.biz",
      password: "password",
      passwordConfirmation: "password",
      stateOfResidence: "Arizona",
      funds: 0.0,
      totalInvested: 2038.0,
      investments: [5,6],
      payments: [7,8,9]
    },
    {
      id: 4,
      email:  "sadie@wisozkokeefe.info",
      password: "password",
      passwordConfirmation: "password",
      stateOfResidence: "Wisconsin",
      funds: 0.0,
      totalInvested: 0.0
    },
    {
      id: 5,
      email:  "domingo@millskuhlman.name",
      password: "password",
      passwordConfirmation: "password",
      stateOfResidence: "North Dakota",
      funds: 0.0,
      totalInvested: 0.0
    }
  ]
});

export default Lender;
