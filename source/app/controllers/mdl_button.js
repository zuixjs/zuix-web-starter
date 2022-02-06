'use strict';

/**
 * MdlButton class.
 *
 * @author Gene
 * @version 1.0.0 (2021-12-19)
 *
 * @constructor
 * @this {ContextController}
 */
function MdlButton() {
  this.init = function() {
    const theme = this.options().theme || 'indigo-pink';
    [
      '@cdnjs/material-design-lite/1.3.0/material.' + theme + '.min.css',
      '@cdnjs/material-design-lite/1.3.0/material.min.js',
      'https://fonts.googleapis.com/icon?family=Material+Icons'
    ].forEach((d) => zuix.using(d.endsWith('.js') ? 'script' : 'style', d));
  };
  this.create = () => {
    const view = this.view();
    const options = this.options();
    const type = options.type || 'raised';
    view.addClass('mdl-button mdl-js-button mdl-button--' + type + ' mdl-js-ripple-effect');
    if (options.class) {
      const classes = options.class.split(' ');
      classes.forEach((c) => {
        view.addClass('mdl-button--' + c);
      });
    }
    initializeMdl(view);
  };

  function initializeMdl(view) {
    // initializes MDL component as soon as MDL library is available
    zuix.activeRefresh(view, view, null, ($view, $element, data, nextCallback) => {
      if (window['componentHandler']) {
        componentHandler.upgradeElements($view.get());
      } else {
        nextCallback(data, 100, true);
      }
    }).start();
  }
}
module.exports = MdlButton;
