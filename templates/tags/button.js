const template = `
<a class="button" href="{{ linkUrl | safe }}">{{ content | safe }}</a>`;

module.exports = (render, content, linkUrl) => {
  return render(template, {content, linkUrl});
};
