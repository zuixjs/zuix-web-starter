const {JSDOM} = require('jsdom');

const template = `
<div z-load="@lib/components/menu-overlay" -z-lazy="false" class="visible-on-ready">

{{ content }}

  <!-- custom open/close menu button -->
  <div #menu_button>
    <a ctrl z-load="@lib/controllers/mdl-button" z-options="{ type: 'fab', class: 'accent', lazyLoad: false }">
      <i class="material-icons">toc</i>
    </a>
  </div>

  <div #menu_button_close>
    <a ctrl z-load="@lib/controllers/mdl-button" z-options="{ type: 'fab', class: 'primary', lazyLoad: false }">
      <i class="material-icons">close</i>
    </a>
  </div>

</div>
<script>
function navigateTo(anchor) {
  const target = zuix.$.find('a[name="' + anchor + '"]');
  scrollHelper.scrollTo(target, 300);
}
</script>
`;

const markdownIt = require('markdown-it')();
module.exports = (render, content) => {
  // convert markdown list to HTML
  content = markdownIt.render(content, {});
  const itemsList = new JSDOM(content).window.document.querySelectorAll('li');
  content = '';
  itemsList.forEach((item) => {
    const elements = item.childNodes;
    let icon = '';
    if (elements.length > 1) {
      icon = item.childNodes.item(item.childNodes.length - 1);
      item.removeChild(icon);
      icon = `
<button class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored" style="margin-right: 8px; margin-left: 8px">
  <i class="material-icons">${icon.textContent}</i>
</button>`;
    }
    const link = item.querySelector('a');
    let href;
    if (link) {
      href = link.getAttribute('href');
      if (href && href.trim()[0] === '#') {
        href = `javascript:navigateTo('${href.trim().substring(1)}')`;
      }
    }
    content += `    <a href="${href}" style="height:40px;display:inline-block;">${link.innerHTML}${icon}</a>
`;
  });
  content = `<div #items>${content}</div>`;
//  console.log(content)
//      .replace('<ul>', '<ul #items>')
//      .replaceAll('li>', 'div>');
  return render(template, {content});
};
