import DS from 'ember-data';

var Lendee = DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string'),
  passwordConfirmation: DS.attr('string'),
  streetAddress: DS.attr('string'),
  city: DS.attr('string'),
  state: DS.attr('string'),
  zipCode: DS.attr('string'),
  dateOfBirth: DS.attr('date'),
  yearlyIndividualIncome: DS.attr(),
  yearlyAdditionalIncome: DS.attr(),
  creditRange: DS.attr('string'),
  payments: DS.hasMany('payment', {async: true}),
  investments: DS.hasMany('investment', {async: true})
});

Lendee.reopenClass({
  FIXTURES: [
    {
      id: 1,
      firstName: "Dolly",
      lastName: "Rodriguez",
      email: "daphney_ersner@effertz.org",
      password: "password",
      passwordConfirmation: "password",
      streetAddress: "159 Earnest Plains",
      city: "Turcottesdad",
      state: "Pennsylvania",
      zipCode: "30247-2376",
      dateOfBirth: "1991-10-17",
      yearlyIndividualIncome: 60000,
      yearlyAdditionalIncome: 20000,
      creditRange: "660-720",
      payments: [1,2,3],
      investments: [1,2,3]
    },
    {
      id: 2,
      firstName: "Rosella",
      lastName: "Nienow",
      email: "cyril@robertsboyer.biz",
      password: "password",
      passwordConfirmation: "password",
      streetAddress: "9142 Karina Knolls",
      city: "Conroyshire",
      state: "Mississippi",
      zipCode: "78903",
      dateOfBirth: "1991-09-08",
      yearlyIndividualIncome: 50000,
      yearlyAdditionalIncome: 10000,
      creditRange: "660-720",
      payments: [4,5,6],
      investments: [4,5,6]
    },
    {
      id: 3,
      firstName: "Fausto",
      lastName: "Reichert",
      email: "art.gleichner@torprogahn.com",
      password: "password",
      passwordConfirmation: "password",
      streetAddress: "197 Elisabeth Camp",
      city: "East Nona",
      state: "Indiana",
      zipCode: "15128-9040",
      dateOfBirth: "1991-06-21",
      yearlyIndividualIncome: 80000,
      yearlyAdditionalIncome: 20000,
      creditRange: "660-720",
      payments: [7,8,9],
      investments: [7,8,9]
    }
  ]
});

export default Lendee;
