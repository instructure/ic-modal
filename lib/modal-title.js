import Ember from 'ember';

export default Ember.Component.extend({
  
  tagName: 'ic-modal-title',

  attributeBindings: ['aria-hidden'],

  'aria-hidden': 'true',

  registerWithModal: function() {
    this.get('parentView').registerTitle(this);
  }.on('willInsertElement')
    
});

