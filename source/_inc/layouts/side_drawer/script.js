/** type {ComponentContext} */
let menuDrawer;
/** type {ComponentContext} */
let menuButton;
window.drawer_opts = {
  autoHideWidth: 1280,
  on: {
    'drawer:open': function() {
      //zuix.context('menu_hamburger', function() {
      //  this.open();
      //});
    },
    'drawer:close': function() {
      //zuix.context('menu_hamburger', function() {
      //  this.close();
      //});
    }
  },
  ready: function() {
    menuDrawer = this;
  }
};
window.menuButtonOptions = {
  on: {
    'menu:open': function() {
      //headerMenu.open();
    },
    'menu:close': function() {
      //headerMenu.close();
    }
  },
  ready: function() {
    menuButton = this;
  }
};

let scrollHelper;
window.scroll_opts = {
  ready: (ctx) => {
    scrollHelper = ctx;
    setTimeout(enableScrollHelper, 500);
  }
};
function enableScrollHelper() {
  scrollHelper.on('scroll:change', function(e, data) {
    switch (data.event) {
      case 'hit-top':
        // reached top of the page
        showHeader();
        break;
      case 'scroll':
        // show/hide header when scrolling up/down
        if (data.info.shift.y > 0) {
          showHeader();
        } else {
          hideHeader();
        }
        break;
      case 'hit-bottom':
        // reached end of the page
        showHeader();
        break;
    }
  });
  if (location.hash) {
    setTimeout(hideHeader, 200);
  }
}

let headerVisible = true;
function showHeader() {
  if (!headerVisible) {
    headerVisible = true;
    zuix.field('header').animateCss('fadeInDown').show();
  }
  ////if (!menuButton.$.hasClass('animate__animated')) {
  //  menuButton.$.animateCss('fadeInDown').show();
  ////}
}
function hideHeader() {
  if (headerVisible && !zuix.field('header').hasClass('animate__animated')) {
    headerVisible = false;
    zuix.field('header').animateCss('fadeOutUp', function() {
      this.hide();
    });
  }
  ////if (!menuButton.$.hasClass('animate__animated')) {
  //  menuButton.$.animateCss('fadeOutUp', function() {
  //    this.hide();
  //  });
  ////}
}

function processExternalLinks(view) {
  // Force opening of all non-local links in a new window
  zuix.$(view).find('a[href*="://"]')
      .attr('target', '_blank')
      .attr('rel', 'noreferrer');
}

zuix.hook('view:process', function(view) {
  processExternalLinks(view);
  // Material Design Light auto-detection
  // Call DOM upgrade on newly added view elements
  if (window['componentHandler']) {
    window['componentHandler'].upgradeElements(view.get());
  }
});
processExternalLinks(document);

//html = css = js = (s) => s[0];
