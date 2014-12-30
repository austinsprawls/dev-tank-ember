import Ember from 'ember';

export default Ember.ObjectController.extend({
  percentageRate: function() {
    return Math.round(this.get("model.rate") * 100);
  }.property("model.rate")
});
