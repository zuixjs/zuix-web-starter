/**
 * @param {ContextController} cp
 */
function deletePageDialog(cp) {
  const _browserSync = ___browserSync___;
  let _data;
  cp.create = onCreate;

  function onCreate() {
    cp.expose({
      open: function(data) {
        _data = data;
        cp.model({
          'page-title': data.title,
          'page-path': data.page.url
        });
        cp.view().show();
        return cp.context;
      },
      close: function() {
        cp.view().hide();
      }
    }).view().hide();

    cp.field('delete-btn').on('click', deletePage);
    cp.field('cancel-btn').on('click', cancel);

    if (_browserSync) {
      _browserSync.socket.on('zuix:deletePage:done', function(redirectUrl) {
        if (redirectUrl === '/content') {
          redirectUrl ='/';
        }
        document.location.href = redirectUrl + '#waitReload';
      });
    }
  }

  function cancel() {
    cp.view().hide();
    cp.trigger('cancel');
  }

  function deletePage(e, $btn) {
    $btn.attr({disabled: true});
    let result;
    if (_browserSync) {
      result = _browserSync.socket.emit('zuix:deletePage', _data);
    }
    if (result) {
      cp.trigger('success');
    } else {
      cp.trigger('error', 'Could not send command');
    }
  }
}

module.exports = deletePageDialog;
