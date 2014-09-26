emq.globalize();

setResolver(Ember.DefaultResolver.extend({
  testSubjects: {
    'component:ic-modal': ic.modal.ModalComponent,
    'component:ic-modal-trigger': ic.modal.ModalTriggerComponent,
    'component:ic-modal-title': ic.modal.ModalTitleComponent,
    'template:components/ic-modal': ic.modal.modalTemplate
  },
  resolve: function(fullName) {
    return this.testSubjects[fullName] || this._super.apply(this, arguments);
  }
}).create());

Function.prototype.compile = function() {
  var template = this.toString().split('\n').slice(1,-1).join('\n') + '\n';
  return Ember.Handlebars.compile(template);
};

function lookupComponent(id) {
  return Ember.View.views[id];
}

