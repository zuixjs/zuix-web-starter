const template = `
<a ctrl z-load="@lib/controllers/mdl-button" z-options="{ type: '{{ buttonType }}', class: '{{ buttonClass }}' }"
     href="{{ linkUrl }}" class="visible-on-ready">{{content}}</a>`;

module.exports = (render, content, linkUrl, buttonType, buttonClass) => {
  // buttonType :==  'flat' | 'raised' | 'fab' | 'icon'
  // buttonClass :==  'mini-fab' | 'accent' | 'colored' | 'primary'
  if (buttonType === 'fab') {
    content = `<i class="material-icons">${content}</i>`;
  }
  return render(template, {content, linkUrl, buttonType, buttonClass});
};
