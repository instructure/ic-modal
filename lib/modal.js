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
  Ember.run.later(lastOpenedModal, 'focus', 0);
  event.preventDefault();
}

export default Ember.Component.extend({

  tagName: 'ic-modal',

  attributeBindings: [
    'after-open',
    'aria-hidden',
    'aria-labeledby',
    'is-open',
    'role',
    'tabindex'
  ],

  // make it tabble so if you click inside the modal, it gets focus, and
  // then hitting tab keeps you inside the modal, but since its display
  // none when closed, and we hijack tabs on the last and first tabbable
  // elements inside the modal, its never possible to tab to the modal
  tabindex: 0,

  'aria-hidden': function() {
    return !this.get('isOpen')+'';
  }.property('isOpen'),

  'aria-labeledby': alias('titleComponent.elementId'),

  'is-open': function() {
    return this.get('isOpen') ? 'true' : null;
  }.property('isOpen'),

  role: 'dialog',

  isOpen: false,

  // default options.focus is true
  open: function(options) {
    options = options || {};
    this.set('isOpen', true);
    lastOpenedModal = this;
    Ember.run.schedule('afterRender', this, function() {
      this.set('after-open', 'true');
      if (options.focus !== false) {
        this.focus();
      } else {
        // focus the whole thing so that tab will work next time
        this.$().focus();
      }
    });
  },

  close: function() {
    this.set('isOpen', false);
    this.set('after-open', null);
    lastOpenedModal = null;
    var toggler = this.get('toggler');
    toggler && toggler.focus();
  },

  focus: function() {
    this.$(':tabbable').first().focus();
  },

  toggleVisibility: function(toggler, options) {
    if (this.get('isOpen')) {
      this.close();
      this.set('toggler', null);
    } else {
      this.open(options);
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
    var leavingFinalTabbable = (
      finalTabbable === document.activeElement ||
      // handle immediate shift+tab after opening with mouse
      this.get('element') === document.activeElement
    );
    if (!leavingFinalTabbable) return;
    event.preventDefault();
    tabbable[event.shiftKey ? 'last' : 'first']()[0].focus();
  },

  closeOnClick: function(event) {
    if (event.target !== this.get('element')) return;
    this.close();
  }.on('click'),

  closeWhen: function() {
    if (!this.get('close-when')) return;
    this.close();
    this.set('close-when', false);
  }.observes('close-when'),

  maybeMakeDefaultChildren: function() {
    if (!this.get('titleComponent')) this.set('makeTitle', true);
    if (!this.get('triggerComponent')) this.set('makeTrigger', true);
  }.on('didInsertElement'),

  registerTitle: function(component) {
    this.set('titleComponent', component);
  },

  registerTrigger: function(component) {
    this.set('triggerComponent', component);
  }

});

