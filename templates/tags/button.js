const template = `
<a ctrl z-load="controllers/mdl_button" z-options="{ type: '{{ buttonType }}', class: '{{ buttonClass }}' }"
     href="{{ linkUrl }}" class="visible-on-ready" style="min-height: {{renderHeight}}px">{{content}}</a>`;

module.exports = (render, content, linkUrl, buttonType, buttonClass) => {
  // buttonType :==  'flat' | 'raised' | 'fab' | 'icon'
  // buttonClass :==  'mini-fab' | 'accent' | 'colored' | 'primary'
  let renderHeight = 36;
  if (buttonType === 'fab') {
    renderHeight = buttonClass === 'mini-fab' ? 40 : 56;
  }
  return render(template, {content, linkUrl, buttonType, buttonClass, renderHeight});
};
