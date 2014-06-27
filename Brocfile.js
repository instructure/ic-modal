var moduleFilter = require('broccoli-dist-es6-module');
var templateFilter = require('broccoli-template-compiler');

module.exports = function(broccoli) {
  var tree = 'lib';
  var templates = templateFilter(tree, {module: true});
  var modules = moduleFilter(templates, {
    global: 'ic.modal',
    packageName: 'ic-modal',
    main: 'main',
    shim: {
      'ember': 'Ember'
    }
  });
  return modules;
};

