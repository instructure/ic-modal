ic-modal
========

[![Build Status](https://travis-ci.org/instructure/ic-modal.png?branch=master)](https://travis-ci.org/instructure/ic-modal)

[WAI-ARIA][wai-aria] accessible modal dialog component for [Ember.js][ember].

Demo
----

http://instructure.github.io/ic-modal

Installation
------------

```sh
$ npm install ic-modal
```

or ...

```sh
$ bower install ic-modal
```

or just grab your preferred distribution from `dist/`.

Then include the script(s) into your application:

### npm+browserify

`require('ic-modal')`

### amd

Register `ic-modal` as a [package][rjspackage], then:

`define(['ic-modal'], ...)`

### named-amd

You ought to know what you're doing if this is the case.

### globals

`<script src="bower_components/ic-styled/main.js"></script>`
`<script src="bower_components/ic-modal/dist/globals/main.js"></script>`

Usage
-----

In its simplest form:

```handlebars
{{#ic-modal-trigger controls="ohai"}}
  open the modal
{{/ic-modal}}

{{#ic-modal id="ohai"}}
  Ohai!
{{/ic-modal}}
```

With all the bells and whistles:

```html
<!--
  Triggers can live anywhere in your template, just give them the id of
  the modal they control, you can even have multiple triggers for the
  same modal.
-->

{{#ic-modal-trigger controls="tacos"}}
  abrir los tacos
{{/ic-modal}}

<!--
  The "closed-when" attribute can be bound to a controller property. If
  `tacosOrdered` gets set to `true` then the modal will close. Typically
  you'll do something like this when a form has been successfully
  submitted.
-->

{{#ic-modal id="tacos" closed-when=tacosOrdered}}

  <!-- 
    This is optional, but you really should provide your own title,
    it gets used in the UI and is important for screenreaders to tell the
    user what modal they are in.
  -->

  {{#ic-modal-title}}Tacos{{/ic-modal-title}}

  <!--
    If a trigger lives inside a modal it doesn't need a "controls"
    attribute, it'll just know.
    
    If you don't provide a trigger inside the modal, you'll get one
    automatically, but if you're translating, you're going to want your
    own.

    Put the text to be read to screenreaders in an "aria-label" attribute
  -->

  {{#ic-modal-trigger aria-label="Cerrar los tacos"}}×{{/ic-modal-trigger}}

  <!-- Finally, just provide some content -->

  <p>
    ¡Los tacos!
  </p>
{{/ic-modal}}
```

CSS
---

### Overriding styles

This component ships with a bit of CSS to be usable out-of-the-box, but
the design has been kept pretty minimal. See `templates/modal-css.hbs`
to know what to override for your own design.

### Animations

There is a class "hook" provided to create animations when the a modal
is opened, `after-open`. For example, you could add this CSS to your
stylesheet to create a fade-in effect:

```css
ic-modal[is-open] {
  opacity: 0;
  transition: opacity 150ms ease;
}

ic-modal[after-open] {
  opacity: 1;
}
```

Contributing
------------

```sh
$ git clone <this repo>
$ npm install
$ npm test
# during dev
$ broccoli serve
# localhost:4200/globals/main.js instead of dist/globals/main.js
# new tab
$ karma start
```

Make a new branch, send a pull request, squashing commits into one
change is preferred.

  [rjspackage]:http://requirejs.org/docs/api.html#packages
  [ember]:http://emberjs.com
  [wai-aria]:http://www.w3.org/TR/wai-aria/roles#dialog

