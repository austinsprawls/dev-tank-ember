import DS from 'ember-data';

export default DS.Model.extend({
  lender: DS.belongsTo('lender'),
  lendee: DS.belongsTo('lendee'),
  amount: DS.attr(),
  monthsPaid: DS.attr({defaultValue: 0}),
  amountPaid: DS.attr({defaultValue: 0.0}),
  isPaid: DS.attr('boolean', {defaultValue: false}),
  dueDate: DS.attr('date'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
