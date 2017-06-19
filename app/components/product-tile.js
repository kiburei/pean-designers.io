import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service('shopping-cart'),

   actions: {
    addToCart(item) {
     this.get('shoppingCart').add(item);
   },
   remove(item) {
     var duplicateShoppingCart = this.get('shoppingCart.items').slice();
     var removeOneProduct = duplicateShoppingCart.indexOf(item);
     duplicateShoppingCart.splice('removeOneProduct', 1);
     this.set("shoppingCart.items", duplicateShoppingCart);
   }
 }
});