import ModalComponent        from './modal';
import ModalFormComponent    from './modal-form';
import ModalTriggerComponent from './modal-trigger';
import ModalTitleComponent   from './modal-title';
import css                   from './templates/modal-css';
import modalTemplate         from './templates/modal';
import { Application }       from 'ember';
import './tabbable-selector';

Application.initializer({
  name: 'ic-modal',
  initialize: function(container) {
    container.register('component:ic-modal', ModalComponent);
    container.register('component:ic-modal-form', ModalFormComponent);
    container.register('component:ic-modal-content', Ember.Component.extend({tagName: 'ic-modal-content'}));
    container.register('component:ic-modal-footer', Ember.Component.extend({tagName: 'ic-modal-footer'}));
    container.register('component:ic-modal-trigger', ModalTriggerComponent);
    container.register('component:ic-modal-title', ModalTitleComponent);
    container.register('template:components/ic-modal-css', css);
    container.register('template:components/ic-modal-form-css', css);
    container.register('template:components/ic-modal', modalTemplate);
    container.register('template:components/ic-modal-form', modalTemplate);
  }
});

export {
  ModalComponent,
  ModalTriggerComponent,
  ModalTitleComponent
};

