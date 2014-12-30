import Ember from 'ember';

export default Ember.ObjectController.extend({
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
      } else{
        this.get("model").save();
      }
    }
  }
});
