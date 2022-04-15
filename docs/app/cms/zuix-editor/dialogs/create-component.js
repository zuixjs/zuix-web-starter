/**
 * @param {ContextController} cp
 */
function createComponentDialog(cp) {
  const _browserSync = ___browserSync___;
  let _data;
  cp.create = onCreate;

  function onCreate() {
    cp.expose({
      open: function(data) {
        _data = data;
        showMainDialog();
        return cp.context;
      },
      close: function() {
        cp.view().hide();
      },
      showResult: function(data) {
        cp.model(data);
        showResultDialog();
      }
    }).view().hide();

    cp.field('cancel-btn').on('click', cancel);
    cp.field('add-btn').on('click', createComponent);

    if (_browserSync) {
      _browserSync.socket.on('zuix:addComponent:done', function(data) {
        localStorage.setItem('result', JSON.stringify({action: 'addComponent', data}));
        setTimeout(function() {
          document.location.reload();
        }, 2000);
      });
    }
  }

  function cancel() {
    cp.view().hide();
    cp.trigger('cancel');
  }
  function createComponent(e, $btn) {
    $btn.attr({disabled: true});
    const view = cp.field('type-view').checked();
    const ctrl = cp.field('type-ctrl').checked();
    const name = zuix.utils.camelCaseToHyphens(cp.field('component-name').value().replace(/[^a-z0-9/\s]/gi, '_'));
    let result;
    if (_browserSync) {
      result = _browserSync.socket.emit('zuix:addComponent', {
        view, ctrl, name
      });
    }
    cp.view().hide();
    if (result) {
      cp.trigger('success');
    } else {
      cp.trigger('error', 'Could not send command');
    }
  }

  function showMainDialog() {
    cp.field('main-dialog').show();
    cp.field('result-dialog').hide();
    cp.view().show();
  }
  function showResultDialog() {
    cp.field('main-dialog').hide();
    cp.field('result-dialog').show();
    cp.view().show();
  }
}

module.exports = createComponentDialog;
