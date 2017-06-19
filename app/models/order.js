import DS from 'ember-data';

export default DS.Model.extend({
    product_name: DS.attr(),
    product_id: DS.attr(),
    product_cost: DS.attr(),
});
