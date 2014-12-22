import DS from 'ember-data';

export default DS.Model.extend({
  lender: DS.belongsTo('lender'),
  loan: DS.belongsTo('loan'),
  amount: DS.attr(),
  expectedReturn: DS.attr(),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
