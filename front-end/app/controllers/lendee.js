import Ember from 'ember';

export default Ember.ObjectController.extend({
  investments: function(){
    return this.get('model.investments');
  }.property('model.investments'),
  isEditingProfile: false,
  actions: {
    editProfile: function() {
      this.set("isEditingProfile", true);
    },
    saveNewProfile: function() {
      this.set("isEditingProfile", false);
      var firstName = this.get("firstName");
      var lastName = this.get("lastName");
      var email = this.get("email");
      var streetAddress = this.get("streetAddress");
      if(!firstName || !lastName || !email || !streetAddress){
        alert("Fields can't be empty");
        this.set("isEditingProfile", true);
      } else{
        var lendee = this.get("model");

        lendee.setProperties({
          firstName: firstName,
          lastName: lastName,
          email: email,
          streetAddress: streetAddress
        });
        lendee.save();
        console.log(lendee.get('firstName'));
      }
    }
  }
});
