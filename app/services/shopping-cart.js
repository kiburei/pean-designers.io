import Ember from 'ember';

export default Ember.Service.extend({
    items: [],

    add(product) {
        var items = this.get('items');
        // Check if Item already in cart
        if (items.includes(product)) {
            console.log('ndani ndani');
        } else {
            items.pushObject(product);    
        }
    }
});
