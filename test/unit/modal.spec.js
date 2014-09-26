moduleForComponent('ic-modal', 'Modal', {
  needs : ['component:ic-modal-title', 'component:ic-modal-trigger']
});
test('renders', function() {
  expect(21);

  var modal = this.subject({});
  equal(modal._state, 'preRender');
  this.append();
  equal(modal._state, 'inDOM');
  equal(modal.$().attr('aria-hidden'), 'true');
  equal(modal.$().attr('role'), 'dialog');
  equal(modal.$().attr('tabindex'), '0');

  // opening a modal using open()
  Ember.run(function(){
    modal.open();
    Ember.run.scheduleOnce('afterRender', null, function(){
      find('ic-modal ic-modal-main', modal.$());
      Ember.run.scheduleOnce('afterRender', null, function(){
        find('button.ic-modal-trigger', modal.$());
        find('ic-modal-title', modal.$());
        equal($('ic-modal-title').text(), 'Modal Content');
        equal(modal.get('after-open'), 'true');
      });
    });
  });

  // closing a modal using close()
  Ember.run(function(){
    modal.close();
    equal(modal.get('isOpen'), false);
    equal(modal.get('after-open'), null);
    Ember.run.scheduleOnce('afterRender', null, function(){
      equal(modal.$('button.ic-modal-trigger').length, 0);
      equal(modal.$('ic-modal-title').length, 0);
    });
  });

  // opening a modal using open-when
  Ember.run(function(){
    modal.set('open-when', true);
    Ember.run.scheduleOnce('afterRender', null, function(){
      find('ic-modal ic-modal-main', modal.$());
      Ember.run.scheduleOnce('afterRender', null, function(){
        find('button.ic-modal-trigger', modal.$());
        find('ic-modal-title', modal.$());
        equal($('ic-modal-title').text(), 'Modal Content');
        equal(modal.get('after-open'), 'true');
      });
    });
  });

  // closing a modal using close()
  Ember.run(function(){
    modal.set('close-when', true);
    equal(modal.get('isOpen'), false);
    equal(modal.get('after-open'), null);
    Ember.run.scheduleOnce('afterRender', null, function(){
      equal(modal.$('button.ic-modal-trigger').length, 0);
      equal(modal.$('ic-modal-title').length, 0);
    });
  });

  // closes when clicking outside
  Ember.run(function(){
    modal.open();
    Ember.run.scheduleOnce('afterRender', null, function(){
      modal.$().trigger('click');
      Ember.run.scheduleOnce('afterRender', null, function(){
        equal(modal.$('button.ic-modal-trigger').length, 0);
        equal(modal.$('ic-modal-title').length, 0);
      });
    });
  });

  // closes when clicking the trigger
  Ember.run(function(){
    modal.open();
    Ember.run.scheduleOnce('afterRender', null, function(){
      modal.$('.ic-modal-trigger').trigger('click');
      Ember.run.scheduleOnce('afterRender', null, function(){
        equal(modal.$('button.ic-modal-trigger').length, 0);
        equal(modal.$('ic-modal-title').length, 0);
      });
    });
  });

});