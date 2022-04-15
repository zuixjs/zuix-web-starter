/**
 * @param cp {ContextController}
 */
function addPageDialog(cp) {
  const _browserSync = ___browserSync___;
  let _data;
  cp.create = function() {
    cp.expose({
      open: function(data) {
        _data = data;
        cp.field('section-name').value(data.group);
        cp.view().show();
        return cp.context;
      },
      close: function() {
        cp.view().hide();
      }
    }).view().hide();

    cp.field('add-btn').on('click', addPage);
    cp.field('cancel-btn').on('click', cancel);

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
    }

    enableDrag();
  };

  function cancel() {
    cp.view().hide();
    cp.trigger('cancel');
  }
  function addPage(e, $btn) {
    $btn.attr({disabled: true});
    const section = cp.field('section-name').value();
    const name = zuix.utils.camelCaseToHyphens(cp.field('page-name').value().replace(/[^a-z0-9\s]/gi, '_'));
    let result;
    if (_browserSync) {
      result = _browserSync.socket.emit('zuix:addPage', {
        layout: 'article', section, name
      });
    }
    cp.view().hide();
    if (result) {
      cp.trigger('success');
    } else {
      cp.trigger('error', 'Could not send command');
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

