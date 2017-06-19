import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  actions: {
    empty() {
      this.set('shoppingCart.items', []);
    }
  }
});