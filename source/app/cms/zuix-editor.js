/**
 * @param cp {ContextController}
 */
function zuixEditor(cp) {
  let _data;
  cp.create = function() {
    handleActionResult();

    const dialogEventsHandler = {
      'cancel': function() {
        hideModal();
      },
      'success': function() {
        showWaitingSpinner();
      },
      'error': function() {
        hideModal();
      }
    };

    let addPageDialog;
    zuix.context('add-page-dialog', function(ctx) {
      addPageDialog = ctx.on(dialogEventsHandler);
    });
    cp.field('add-page').on('click', function() {
      showModal();
      addPageDialog.open(_data);
    });

    let deletePageDialog;
    zuix.context('delete-page-dialog', function(ctx) {
      deletePageDialog = ctx.on(dialogEventsHandler);
    });
    cp.field('delete-page').on('click', function() {
      showModal();
      deletePageDialog.open(_data);
    });

    let createComponentDialog;
    zuix.context('create-component-dialog', function(ctx) {
      createComponentDialog = ctx.on(dialogEventsHandler);
    });
    cp.field('add-component').on('click', function() {
      showModal();
      createComponentDialog.open(_data);
    });

    cp.field('edit-page').on('click', function() {
      const editUrl = '/editor/#' + location.pathname;
      if (parent.location.pathname !== '/editor/') {
        document.location.replace(editUrl);
      } else {
        parent.location.replace(editUrl);
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
      }
    });

    // Hide main application menu's button when opening zuix-editor menu
    const appMenu = zuix.context('menu-overlay');
    if (appMenu) {
      cp.field('menu').on({
        'open': function() {
          appMenu.hideButton();
        },
        'close': function() {
          appMenu.showButton();
        }
      });
    }

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
  };

  function showModal() {
    cp.view('.container').show();
  }
  function hideModal() {
    cp.view('.container').hide();
  }
  function showWaitingSpinner() {
    cp.view('.container')
        .addClass('waitingOperation');
  }
  function hideWaitingSpinner() {
    cp.view('.container')
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
    hideModal();
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
}
module.exports = zuixEditor;
