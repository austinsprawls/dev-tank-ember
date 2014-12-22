import DS from 'ember-data';

export default DS.Model.extend({
  lendee: DS.belongsTo('lendee'),
  amountRequested: DS.attr(),
  amountRemaining: DS.attr(),
  amountFunded: DS.attr({defaultValue: 0.0}),
  isFunded: DS.attr('boolean', {defaultValue: false}),
  rate: DS.attr(),
  term: DS.attr(),
  expirationDate: DS.attr('date'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
