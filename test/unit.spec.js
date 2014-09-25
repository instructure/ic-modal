moduleForComponent('ic-modal');

test('renders', function() {
  expect(5);
  var modal = this.subject({
    template: function() {/*
      {{#ic-modal}}
        Hello
      {{/ic-modal}}
    */}
  });
  equal(modal._state, 'preRender');
  this.append();
  // console.log(modal.$());
  equal(modal.$().attr('aria-hidden'), 'true');
  equal(modal.$().attr('role'), 'dialog');
  equal(modal.$().attr('tabindex'), '0');
  equal(modal._state, 'inDOM');
});