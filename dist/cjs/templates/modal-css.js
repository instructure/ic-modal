"use strict";
var Ember = require("ember")["default"] || require("ember");
exports["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("ic-modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: hsla(0, 0%, 100%, .75);\n  display: none;\n  align-items: center;\n}\n\nic-modal[is-open] {\n  display: flex;\n}\n\nic-modal-content {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-content: stretch;\n  max-height: 90%;\n  width: 66%;\n  margin: auto;\n  background: #fff;\n  border: 1px solid hsl(0, 0%, 70%);\n  border-radius: 4px;\n}\n\nic-modal-title {\n  flex: 0 0 auto;\n  padding: 20px;\n  border-bottom: 1px solid hsl(0, 0%, 85%);\n}\n\nic-modal-main {\n  flex: 0 1 auto;\n  overflow: auto;\n  padding: 20px;\n}\n\n.ic-modal-trigger.default {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  border: none;\n  background: none;\n  padding: 6px;\n  font-size: 18px;\n  color: inherit;\n}\n\n.ic-modal-trigger.default:focus {\n  text-shadow: 0 0 6px hsl(208, 47%, 60%),\n    0 0 2px hsl(208, 47%, 60%),\n    0 0 2px hsl(208, 47%, 60%),\n    0 0 1px hsl(208, 47%, 60%);\n  outline: none;\n}\n\n@media only screen and (max-width : 480px) {\n  ic-modal-content {\n    width: 95%;\n  }\n  ic-modal-title,\n  ic-modal-main {\n    padding: 10px;\n  }\n\n  .ic-modal-trigger.default {\n    top: 0px;\n    right: 2px;\n  }\n}\n\n\n");
  
});