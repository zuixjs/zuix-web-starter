const template = `
<div ctrl z-load="controllers/mdl_menu" z-lazy="false"
     z-behavior="menuButtonBehavior" class="visible-on-ready">

    <!-- the menu is defined as a simple UL list -->
    {{ content }}

    <!-- the menu's FAB button -->
    <a ctrl z-load="controllers/mdl_button"
       z-options="{ type: '{{ buttonType }}', class: '{{ buttonClass }}' }">
        <i class="material-icons">menu</i>
    </a>
</div>
<script>
  menuButtonBehavior = {
    'menu:show': function() {
      this.find('.material-icons').html('add')
        .css({ transform: 'rotate(135deg)' });
    },
    'menu:hide': function() {
      this.find('.material-icons').html('menu')
        .css({ transform: 'rotate(0)' });
    }
  }
</script>
`;

const markdownIt = require('markdown-it')();
module.exports = (render, content, buttonType, buttonClass) => {
  buttonType = buttonType || 'icon'; // flat, raised, fab, icon
  buttonClass = buttonClass || 'accent'; // mini-fab, accent, colored, primary
  // convert markdown list to HTML
  content = markdownIt.render(content, {});
  return render(template, {content, buttonType, buttonClass});
};