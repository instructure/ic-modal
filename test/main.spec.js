moduleForComponent('ic-modal');

test('renders', function() {
  expect(2);
  var modal = this.subject({
    template: function() {/*
      {{#ic-modal}}
        Hello
      {{/ic-modal}}
    */}
  });
  equal(modal.state, 'preRender');
  this.append();
  equal(modal.state, 'inDOM');
});

// ain't nobody got time for ember's run loop issues, guess I'll write
// some tests another time...

//test('open', function() {
  //stop();
  //var modal = this.subject({
    //template: function() {[>
      //{{#ic-modal}}
        //Hello
      //{{/ic-modal}}
    //*/}
  //});
  //this.append();
  //modal.open();
  //Ember.run.schedule('afterRender', null, function() {
    //console.log('assert');
    //ok(modal.$().is(':visible'));
    //start();
  //}, 1000);
//});


