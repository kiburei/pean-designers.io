import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contacts');
  this.route('results');
  this.route('results', {path: '/results/:name'});
  this.route('store', function() {
  })

});

export default Router;
