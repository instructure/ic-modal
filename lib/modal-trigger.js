import { Component, computed } from 'ember';
import ModalComponent from './modal';

export default Component.extend({

  classNames: ['ic-modal-trigger'],

  tagName: 'button',

  findModal: function() {
    Ember.run.schedule('afterRender', this, function() {
      this.set('modal', Ember.View.views[this.get('controls')]);
    });
  }.on('didInsertElement'),

  toggleModalVisibility: function() {
    this.get('modal').toggleVisibility(this);
  }.on('click'),

  focus: function() {
    this.$()[0].focus();
  }

});

function findParent(trigger) {
  var parent = trigger.get('parentView');
  if (!parent) return false;
  if (parent instanceof ModalComponent) return parent;
  return findParent(parent);
}
