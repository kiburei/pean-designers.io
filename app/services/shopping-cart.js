import Ember from 'ember';

export default Ember.Service.extend({
    items: [],

    add(product) {
        var items = this.get('items');
        // Check if Item already in cart
        if (items.includes(product)) {
            // increment product price in cart
            
        } else {
            items.pushObject(product);    
        }
    }
});
