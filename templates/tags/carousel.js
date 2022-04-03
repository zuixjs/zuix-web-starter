const template = `
<div ctrl z-load="@lib/controllers/view-pager"
     style="width: 300px; height: 300px; overflow: hidden; margin-left: auto;margin-right: auto"
     data-o-slide="true" data-o-paging="true">
{{content | safe}}
</div>
`;

module.exports = (render, content) => {
  // convert markdown list to HTML
  content = markdownIt.render(content, {});

  return render(template, {content});
};
