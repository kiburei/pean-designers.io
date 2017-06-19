import Ember from 'ember';

export default Ember.Service.extend({
  items: [],

  add(item) {
    this.get('items').pushObject(item);
  },
  remove(item) {
    this.get('items').removeObject(item);
  },
  empty() {
    this.get('items').clear();
  },
  totalPrice: Ember.computed('items.[]', function(){
    var price = 0;
    var items = this.get('items');
    for (var i = 0; i < items.length; i++) {
      price += items[i].get('cost');
    }
    return price.toFixed(2);
  })
});