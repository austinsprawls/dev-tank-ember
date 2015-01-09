import Ember from 'ember';

export default Ember.Controller.extend({
  creditScores: ['<630', '630-689','690-719','720-850'],
  selectedCredit: '690-719',
  estimatedRate: function() {
    var selectedCredit = this.get('selectedCredit');
    if (selectedCredit === '<630'){
      return '17.85%';
    } else if (selectedCredit === '630-689'){
      return '13.56%';
    } else if (selectedCredit === '690-719') {
      return '9.25%';
    } else if (selectedCredit === '720-850') {
      return '6.78%';
    }
  }.property('selectedCredit')
});
