// http://www.w3.org/TR/wai-aria-practices/#dialog_modal

import Ember from 'ember';

var alias = Ember.computed.alias;

/**
 * If you do something to move focus outside of the browser (like
 * command+l to go to the address bar) and then tab back into the
 * window, capture it and focus the first tabbable element in an active
 * modal.
 */

var lastOpenedModal = null;

window.addEventListener('focus', handleTabIntoBrowser, true);

function handleTabIntoBrowser(event) {
  if (!lastOpenedModal || event.target !== window) return;
  var tabbable = lastOpenedModal.$(':tabbable');
  // in case you forgot to add a close button or botched the
  // accessibility of it, focus the modal instead
  var target = tabbable.length ? tabbable[0] : lastOpenedModal.get('element');
  Ember.run.later(target, 'focus', 0);
  event.preventDefault();
}

export default Ember.Component.extend({

  tagName: 'ic-modal',

  attributeBindings: [
    'after-open',
    'aria-hidden',
    'aria-label',
    'is-open',
    'role',
    'tabindex',
    'label'
  ],

  'aria-hidden': function() {
    return !this.get('isOpen')+'';
  }.property('isOpen'),

  'aria-label': alias('label'),

  'is-open': function() {
    return this.get('isOpen') ? 'true' : null;
  }.property('isOpen'),

  role: 'dialog',

  tabindex: -1,

  isOpen: false,

  open: function() {
    this.set('isOpen', true);
    lastOpenedModal = this;
    Ember.run.schedule('afterRender', this, function() {
      this.set('after-open', 'true');
      this.$().focus();
    });
  },

  close: function() {
    this.set('isOpen', false);
    this.set('after-open', null);
    lastOpenedModal = null;
    var toggler = this.get('toggler');
    toggler && toggler.focus();
  },

  toggleVisibility: function(toggler) {
    if (this.get('isOpen')) {
      this.close();
      this.set('toggler', null);
    } else {
      this.open();
      if (toggler) {
        this.set('toggler', toggler);
      }
    }
  },

  handleKeyDown: function(event) {
    if (event.keyCode == 9 /*tab*/) this.keepTabNavInside(event);
    if (event.keyCode == 27 /*esc*/) this.close();
  }.on('keyDown'),

  keepTabNavInside: function(event) {
    if (event.keyCode !== 9) return;
    var tabbable = this.$(':tabbable');
    var finalTabbable = tabbable[event.shiftKey ? 'first' : 'last']()[0];
    var leavingFinalTabbable = finalTabbable === document.activeElement ||
                               // immediate shift+tab after opening
                               this.get('element') === document.activeElement;
    if (!leavingFinalTabbable) return;
    event.preventDefault();
    tabbable[event.shiftKey ? 'last' : 'first']()[0].focus();
  },

  validateRequiredProperties: function() {
    if (this.get('label')) return;
    throw new Ember.Error('ic-modal: you must provide a label attribute');
  }.on('init'),

  closeOnClick: function(event) {
    if (event.target !== this.get('element')) return;
    this.close();
  }.on('click'),

  closeWhen: function() {
    if (!this.get('close-when')) return;
    this.close();
    this.set('close-when', false);
  }.observes('close-when')

});

