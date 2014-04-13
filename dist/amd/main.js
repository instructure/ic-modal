define(
  ["./modal","./modal-trigger","./modal-title","./templates/modal-css","./templates/modal","ember","./tabbable-selector","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__, __dependency6__, __dependency7__, __exports__) {
    "use strict";
    var ModalComponent = __dependency1__["default"] || __dependency1__;
    var ModalTriggerComponent = __dependency2__["default"] || __dependency2__;
    var ModalTitleComponent = __dependency3__["default"] || __dependency3__;
    var css = __dependency4__["default"] || __dependency4__;
    var modalTemplate = __dependency5__["default"] || __dependency5__;
    var Application = __dependency6__.Application;

    Application.initializer({
      name: 'ic-modal',
      initialize: function(container) {
        container.register('component:ic-modal', ModalComponent);
        container.register('component:ic-modal-trigger', ModalTriggerComponent);
        container.register('component:ic-modal-title', ModalTitleComponent);
        container.register('template:components/ic-modal-css', css);
        container.register('template:components/ic-modal', modalTemplate);
      }
    });

    __exports__.ModalComponent = ModalComponent;
    __exports__.ModalTriggerComponent = ModalTriggerComponent;
    __exports__.ModalTitleComponent = ModalTitleComponent;
  });