/**
 * @param {ContextController} cp
 */
function createComponentDialog(cp) {
  const _browserSync = ___browserSync___;
  cp.create = onCreate;

  function onCreate() {
    cp.expose({
      open, close,
      showResult
    }).view().hide();

    cp.field('cancel-btn').on('click', cancel);
    cp.field('add-btn').on('click', createComponent);
    cp.field('component-name')
        .on('keypress', function(e) {
          if (e.key === 'Enter') {
            cp.field('add-btn')
                .get().click();
          }
        });

    if (_browserSync) {
      _browserSync.socket.on('zuix:addComponent:done', function(data) {
        localStorage.setItem('result', JSON.stringify({action: 'addComponent', data}));
        setTimeout(function() {
          document.location.reload();
        }, 2000);
      });
      _browserSync.socket.on('zuix:addComponent:error', function(err) {
        setError(err);
        cp.trigger('error', err);
      });
    }
  }

  function open(data, $opener) {
    setError('');
    showMainDialog();
    cp.trigger('open', $opener);
    cp.field('component-name').value('')
        .get().focus();
  }
  function close() {
    cp.trigger('close');
  }
  function cancel() {
    cp.trigger('cancel');
  }

  function setError(err) {
    if (err !== '') {
      err = 'ERROR: ' + err;
    }
    cp.field('error-message').html(err);
  }

  function createComponent() {
    const view = cp.field('type-view').checked();
    const ctrl = cp.field('type-ctrl').checked();
    const name = zuix.utils.camelCaseToHyphens(cp.field('component-name').value().replace(/[^a-z0-9/\s]/gi, '_'));
    let result;
    if (_browserSync) {
      result = _browserSync.socket.emit('zuix:addComponent', {
        view, ctrl, name
      });
    }
    if (result) {
      cp.trigger('waiting');
    } else {
      setError('Could not send command');
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
  function showResult(data) {
    cp.model(data);
    showResultDialog();
  }
}

module.exports = createComponentDialog;
