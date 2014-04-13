define(
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"] || __dependency1__;
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      


      data.buffer.push("ic-modal-screen,\nic-modal,\nic-modal-content,\nic-modal-title {\n  display: block;\n}\n\nic-modal {\n  background-color: rgba(255, 255, 255, .75);\n  display: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  padding: 10px;\n}\n\nic-modal[is-open] {\n  display: block;\n}\n\nic-modal-content {\n  background: #fff;\n  border: 1px solid hsl(0, 0%, 70%);\n  position: relative;\n  max-width: 800px;\n  margin: 40px auto;\n  border-radius: 4px;\n  padding: 20px;\n}\n\nic-modal-title {\n  border-bottom: 1px solid hsl(0, 0%, 90%);\n  padding: 0 20px 20px 20px;\n  margin: 0 -20px 20px -20px;\n  font-weight: 600;\n}\n\n.ic-modal-trigger.default {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  border: none;\n  background: none;\n  padding: 6px;\n  font-size: 18px;\n  color: inherit;\n}\n\n.ic-modal-trigger.default:focus {\n  text-shadow: 0 0 6px hsl(208, 47%, 60%),\n    0 0 2px hsl(208, 47%, 60%),\n    0 0 2px hsl(208, 47%, 60%),\n    0 0 1px hsl(208, 47%, 60%);\n  outline: none;\n}\n\n");
      
    });
  });