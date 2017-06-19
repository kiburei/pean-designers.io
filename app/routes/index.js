import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
actions: {
    nameLookup(params) {
      this.transitionTo('results', params.name);
    },
  }
});
