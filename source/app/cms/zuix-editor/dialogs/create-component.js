/**
 * @param {ContextController} cp
 */
function createComponentDialog(cp) {
  let _browserSync;
  let actionResult;
  cp.create = onCreate;

  function onCreate() {
    _browserSync = zuix.context(cp.view().parent('[z-load]')).browserSync;
    cp.expose({
      open, close,
      showResult
    }).view().hide();

    cp.field('cancel-btn').on('click', cancel);
    cp.field('close-btn').on('click', close);
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
        cp.trigger('success', {
          action: 'add-component',
          data,
          showingResult: true
        });
        showResult({action: 'add-component', data});
      });
      _browserSync.socket.on('zuix:addComponent:error', function(err) {
        setError(err);
        cp.trigger('error', err);
      });
    }
  }

  function open(data, $opener) {
    actionResult = null;
    setError('');
    showMainDialog();
    cp.trigger('open', $opener);
    cp.field('component-name').value('')
        .get().focus();
  }
  function close() {
    cp.trigger('close', actionResult);
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
  function showResult(result) {
    actionResult = result;
    cp.model(result.data);
    showResultDialog();
  }
}

module.exports = createComponentDialog;
