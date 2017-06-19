import Ember from 'ember';

export default Ember.Component.extend({
 
 actions: {
    nameLookup() {
      var params = {
        name: this.get('name')
      };
      this.sendAction('nameLookup', params);
    }
  }
 
});
