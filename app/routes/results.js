import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({

model: function(params) {
   var key = config.myApiKey;
   console.log(config.myApiKey);
   var url = 'http://api.shopstyle.com/api/v2/products?pid='+key+'&fts='+params.name+'&offset=0&limit=10' ;
   return Ember.$.getJSON(url).then(function(responseJSON) {
    //use console log this to identify the objects 
     // console.log(responseJSON.products);
     return responseJSON.products;
   });
  }
});


