/* global zuix */

let drawerLayout;
let viewPager;
let pageIndicator;
let pageButtons;
let contextMenu;

//__zuix__debug = true;
zuix.lazyLoad(true, 48);
zuix.$.find('.profile').on('click', function() {
  if (drawerLayout) drawerLayout.open();
});

options = {

  drawerLayout: {
    autoHideWidth: -1,
    drawerWidth: 280,
    ready: function(ctx) {
      drawerLayout = ctx;
    }
  },

  viewPager: {
    enablePaging: true,
    startGap: 40,
    on: {
      'page:change': function(e, page) {
        syncPageIndicator(page);
        // show header/footer
        if (viewPager) {
          const p = viewPager.get(page.in);
          if (p) {
            zuix.context(p, (ctx) => {
              if (ctx.show) ctx.show();
            });
          }
        }
      }
    },
    ready: function() {
      viewPager = this;
      initialize();
    }
  },

  pageIndicator: {
    contextId: 'page-indicator',
    enablePaging: true,
    startGap: 40,
    ready: function(ctx) {
      pageIndicator = ctx;
      pageButtons = pageIndicator.$.find('div');
      if (pageButtons.length() > 0) {
        pageButtons.each(function(i, el, $el) {
          $el.on('click', function(e) {
            if (viewPager) viewPager.page(i);
          });
        });
      }
    }
  },

  autoHidingBars: {
    header: 'header-bar',
    footer: 'footer-bar',
    height: 56,
    on: {
      'page:scroll': function(e, data) {
        zuix.componentize();
      },
      'scroll:ready': function(e, scroll) {
        // lazy-load cards background cover
        const itemsList = scroll.$.find('div').get();
        //console.log(itemsList)
        zuix.context(itemsList, function(ctx) {
          scroll.watch('.cover-wrapper', function(el, data) {
            //console.log(el, data);
          });
          scroll.check();
        });
      }
    }
  },

  contextMenu: {
    ready: function(ctx) {
      contextMenu = ctx;
    }
  },

  content: {
    css: false
  }

};


function initialize() {
  // open drawer when the profile icon is clicked
  zuix.field('header-bar').find('.profile').on('click', function() {
    if (drawerLayout) drawerLayout.open();
  });
  // change page clicking buttons on the footer bar
  const buttons = zuix.field('footer-bar').find('button');
  buttons.each(function(i, el, $el) {
    // TODO:
    $el.on('click', function() {
      buttons.removeClass('active');
      this.addClass('active');
      showPage(i);
    });
  });
  showPage(0);
}

function syncPageIndicator(page) {
  if (pageButtons) {
    pageButtons.eq(page.out).removeClass('active');
    pageButtons.eq(page.in).addClass('active');
  }
  if (pageIndicator) pageIndicator.page(page.in);
}

function showPage(i) {
  // show header top-box
  zuix.field('header-box')
      .children().hide()
      .eq(i).show();
  // show header bottom-box
  zuix.field('header-tools')
      .children().hide()
      .eq(i).show();
  // show page
  const page = zuix.field('pages')
      .children().hide()
      .eq(i);
  page.show();
  if (viewPager) {
    viewPager.layout();
  }
}

function onItemClicked(e, $el) {
  if ($el.attr('data-url')) {
    location.href = $el.attr('data-url');
  }
}
function onItemShowMenu(e, $el) {
  contextMenu.show();
  e.cancelBubble = true;
}
