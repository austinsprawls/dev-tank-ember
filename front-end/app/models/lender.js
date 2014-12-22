import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  password: DS.attr('string'),
  passwordConfirmation: DS.attr('string'),
  stateOfResidence: DS.attr('string'),
  funds: DS.attr({defaultValue: 0.0}),
  totalInvested: DS.attr({defaultValue: 0.0}),
  investments: DS.hasMany('investment', {async: true}),
  payments: DS.hasMany('payment', {async: true}),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
