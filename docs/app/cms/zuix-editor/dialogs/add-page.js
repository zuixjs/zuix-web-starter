/**
 * @param cp {ContextController}
 */
function addPageDialog(cp) {
  const _browserSync = ___browserSync___;
  cp.create = function() {
    cp.expose({open, close})
        .view().hide();

    cp.field('add-btn')
        .on('click', addPage);
    cp.field('cancel-btn')
        .on('click', cancel);
    cp.field('page-name')
        .on('keypress', function(e) {
          if (e.key === 'Enter') {
            cp.field('add-btn')
                .get().click();
          }
        });

    const sections = cp.field('sections').children();
    zuix.loadComponent(sections, '_editor/section', 'view');
    sections.on({
      click: function() {
        const name = this.find('[\\#name]').html();
        cp.field('section-name').value(name);
      }
    });

    if (_browserSync) {
      _browserSync.socket.on('zuix:addPage:done', function(redirectUrl) {
        cp.trigger('success', {
          action: 'add-page',
          section: cp.field('section-name').value(),
          url: redirectUrl
        });
      });
      _browserSync.socket.on('zuix:addPage:error', function(err) {
        console.log('ERROR', err);
        setError(err);
        cp.trigger('error', err);
      });
    }
  };

  function open(data, $opener) {
    setError('');
    if (data) {
      cp.field('section-name').value(data.section);
    }
    cp.trigger('open', $opener);
    cp.field('page-name').value('')
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

  function addPage() {
    const section = cp.field('section-name').value();
    const name = zuix.utils.camelCaseToHyphens(cp.field('page-name').value().replace(/[^a-z0-9\s]/gi, '_'));
    let result;
    if (_browserSync) {
      result = _browserSync.socket.emit('zuix:addPage', {
        layout: 'article', section, name
      });
    }
    if (result) {
      cp.trigger('waiting');
    } else {
      setError('Could not send command');
    }
  }
}

module.exports = addPageDialog;

