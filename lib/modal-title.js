import Ember from 'ember';

export default Ember.Component.extend({
  
  tagName: 'ic-modal-title',

  attributeBindings: [
    'aria-hidden'
  ],

  'aria-hidden': 'true',

  register: true,

  registerWithModal: function() {
    if (this.get('register')) this.get('parentView').registerTitle(this);
  }.on('willInsertElement')
    
});
