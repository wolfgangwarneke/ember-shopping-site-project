import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      products: this.store.findAll('product'),
      sellers: this.store.findAll('seller')
    });
  },

});
