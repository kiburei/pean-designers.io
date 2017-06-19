import Ember from 'ember';

export default Ember.Service.extend({
    items: ['cow', 'goat'],

    add(product) {
        this.get('items').pushObject(product);
        console.log(items);
    }
});
