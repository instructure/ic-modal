var makeModules = require('broccoli-dist-es6-module');
var templateFilter = require('broccoli-ember-hbs-template-compiler');

var templates = templateFilter('lib', {module: true});

module.exports = makeModules(templates, {
  global: 'ic.modal',
  packageName: 'ic-modal',
  main: 'main',
  shim: {
    'ember': 'Ember'
  }
});

