import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        addOrder(product) {
            var params = {
                product_name: product.brandedName,
                product_id: product.id,
                product_cost: product.priceLabel,
            };
            this.sendAction('addOrder1', params);
        }
    }
});
