/**
 * @param cp {ContextController}
 */
function addPageDialog(cp) {
  const _browserSync = ___browserSync___;
  let _data;
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
        document.location.hash += '#reload(' + redirectUrl + ')';
      });
      _browserSync.socket.on('zuix:addPage:error', function(err) {
        console.log('ERROR', err);
        setError(err);
        cp.trigger('error', err);
      });
    }

    enableDrag();
  };

  function open(data, $opener) {
    _data = data;
    setError('');
    cp.field('section-name').value(data.group);
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

  function enableDrag() {
    /*
    // TODO: ... create a generic controller for this (eg. draggable.js)
    const dialog = cp.view('.dialog');
    const currentTranslate = {x: 0, y: 0};
    zuix.using('component', '@lib/controllers/gesture-helper', function(id, gestureHelper) {
      gestureHelper.on({
        'gesture:pan': function(e, tp) {
          if (tp.event.path.indexOf(dialog.get()) !== -1) {
            const tx = {x: tp.shiftX - currentTranslate.x, y: tp.shiftY - currentTranslate.y};
            dialog.css({transform: 'translate(' + tx.x + 'px, ' + tx.y + 'px)'});
          }
        },
        'gesture:release': function(e, tp) {
          currentTranslate.x -= tp.shiftX;
          currentTranslate.y -= tp.shiftY;
        }
      });
    });
    */
  }
}

module.exports = addPageDialog;

