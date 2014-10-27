"use strict";
var Ember = require("ember")["default"] || require("ember");
exports["default"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("  <ic-modal-main>\n\n");
  stack1 = helpers['if'].call(depth0, "makeTitle", {"name":"if","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(2, data),"inverse":this.noop,"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  stack1 = helpers['if'].call(depth0, "makeTrigger", {"name":"if","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(5, data),"inverse":this.noop,"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = helpers._triageMustache.call(depth0, "yield", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n\n  </ic-modal-main>\n");
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var stack1, helper, options, functionType="function", helperMissing=helpers.helperMissing, blockHelperMissing=helpers.blockHelperMissing, buffer = '';
  data.buffer.push("      ");
  stack1 = ((helper = (helper = helpers['ic-modal-title'] || (depth0 != null ? depth0['ic-modal-title'] : depth0)) != null ? helper : helperMissing),(options={"name":"ic-modal-title","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(3, data),"inverse":this.noop,"types":[],"contexts":[],"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers['ic-modal-title']) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"3":function(depth0,helpers,partials,data) {
  data.buffer.push("Modal Content");
  },"5":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("      ");
  stack1 = ((helpers['ic-modal-trigger'] || (depth0 && depth0['ic-modal-trigger']) || helperMissing).call(depth0, {"name":"ic-modal-trigger","hash":{
    'aria-label': ("close"),
    'class': ("ic-modal-close")
  },"hashTypes":{'aria-label': "STRING",'class': "STRING"},"hashContexts":{'aria-label': depth0,'class': depth0},"fn":this.program(6, data),"inverse":this.noop,"types":[],"contexts":[],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"6":function(depth0,helpers,partials,data) {
  data.buffer.push("×");
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  stack1 = helpers['if'].call(depth0, "isOpen", {"name":"if","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"useData":true});