import Ember from 'ember';

export default Ember.Component.extend({
  editProduct: false,
  actions: {
    showEditProduct() {
      this.set('editProduct', true);
    },
    update(product) {
      product.save();
      this.set('editProduct', false);
    }
  }
});