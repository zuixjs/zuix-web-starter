/**
 * @param cp {ContextController}
 */
function zuixEditor(cp) {
  let _data;
  let modalView;
  cp.create = function() {
    modalView = cp.view('.container')
        .hide();
    handleActionResult();

    zuix.context('add-page-dialog', function(addPageDialog) {
      cp.field('add-page').on('click', function(e, $el) {
        addPageDialog.open(_data, $el);
      });
    });

    zuix.context('delete-page-dialog', function(deletePageDialog) {
      cp.field('delete-page').on('click', function(e, $el) {
        deletePageDialog.open(_data, $el);
      });
    });

    zuix.context('create-component-dialog', function(createComponentDialog) {
      cp.field('add-component').on('click', function(e, $el) {
        createComponentDialog.open(_data, $el);
      });
    });

    cp.field('edit-page').on('click', function() {
      const editUrl = '/editor/#' + location.pathname;
      let isEditorOpen = false;
      try {
        isEditorOpen = parent.location.pathname === '/editor/';
      } catch (e) { }
      if (isEditorOpen) {
        parent.location.replace(editUrl);
      } else {
        document.location.replace(editUrl);
      }
    });

    cp.expose({
      data: {
        get() {
          return _data;
        },
        set(obj) {
          _data = obj;
        }
      },
      dialogBehavior: {
        'open': function(e, $opener) {
          const p = $opener.position();
          this.css({
            'transform-origin': p.x + (p.rect.width/2) + 'px ' + (p.y + (p.rect.height/2)) + 'px'
          }).playTransition('zoomOut zoomIn').show();
          showModal();
        },
        'close': function() {
          this.playTransition('zoomIn zoomOut');
          hideModal();
        },
        'cancel': function() {
          this.trigger('close');
        },
        'waiting': function() {
          showWaitingSpinner();
        },
        'error': function() {
          hideWaitingSpinner();
        },
        'keydown': function(e) {
          if (e.key === 'Escape') {
            this.trigger('close');
          }
        }
      }
    });

    // Hide main application menu's button when opening zuix-editor menu
    zuix.context('menu-overlay', function(appMenu) {
      cp.field('menu').on({
        'open': function() {
          appMenu.hideButton();
        },
        'close': function() {
          appMenu.showButton();
        }
      });
    });

    // TODO: not sure why "modelToView()" method goes async
    setTimeout(function() {
      cp.view('.menu-item div:not(.menu-item-disabled)').on({
        'mouseover': function(evt, $el) {
          $el.children().addClass('accent');
        },
        'mouseout': function(evt, $el) {
          $el.children().removeClass('accent');
        }
      });
      // home page cannot be deleted, hide the item
      if (document.location.pathname === '/') {
        cp.field('delete-page').parent().addClass('hidden');
      }
    }, 500);

    addTransitions();
  };

  function showModal() {
    modalView
        .playTransition('fadeOut fadeIn').show();
  }
  function hideModal() {
    modalView
        .playTransition({
          classes: 'fadeIn fadeOut',
          onEnd: function() {
            this.hide();
            this.children().hide();
          }
        });
    hideWaitingSpinner();
  }
  function showWaitingSpinner() {
    modalView
        .addClass('waitingOperation');
  }
  function hideWaitingSpinner() {
    modalView
        .removeClass('waitingOperation');
  }

  function handleActionResult() {
    if (document.location.hash.indexOf('#reload(') === 0) {
      document.location.href = document.location.hash
          .substring(8, document.location.hash.length - 1);
    } else if (document.location.hash === '#waitReload') {
      showModal();
      showWaitingSpinner();
      document.location.hash = '';
      return;
    }
    // read result from previous action (if any)
    let actionResult = localStorage.getItem('result');
    if (actionResult) {
      localStorage.removeItem('result');
      actionResult = JSON.parse(actionResult);
      if (actionResult.action === 'addComponent') {
        zuix.context('create-component-dialog', function(createComponentDialog) {
          hideWaitingSpinner();
          showModal();
          createComponentDialog.showResult(actionResult.data);
        });
      }
    }
  }

  function addTransitions() {
    const commonOptions = {
      duration: '0.2s',
      timingFunction: 'ease-in-out'
    };
    cp.addTransition( 'fadeIn', {
      opacity: '1'
    }, commonOptions);
    cp.addTransition( 'fadeOut', {
      opacity: '0'
    }, commonOptions);
    commonOptions.duration = '0.3s';
    cp.addTransition('zoomIn', {
      transform: 'scale(1)'
    }, commonOptions);
    cp.addTransition('zoomOut', {
      transform: 'scale(0)'
    }, commonOptions);
  }
}
module.exports = zuixEditor;
