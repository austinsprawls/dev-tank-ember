import DS from 'ember-data';

export default DS.Model.extend({
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
  investments: DS.hasMany('investment', {async: true}),
  createdAt: DS.attr('Date'),
  updatedAt: DS.attr('Date')
});
