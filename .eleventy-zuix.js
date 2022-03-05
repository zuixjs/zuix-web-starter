/**
 * @param eleventyConfig
 */
const path = require('path');
const config = require('config');
const fs = require('fs');
const render = require('template-file').render;
const zuixConfig = config.get('zuix');
const normalizeMarkup = (s) => s.trim().split('\n').filter((l) => {
  if (l.trim().length > 0) {
    return l;
  }
}).join('\n');

module.exports = function(eleventyConfig) {
  // TODO: add custom 11ty config here
  eleventyConfig.setDataDeepMerge(true);
  // # Add data collections

  // this is used by the searchFilter
  eleventyConfig.addCollection('posts_searchIndex', (collection) => {
    return [...collection.getFilteredByGlob(path.join(zuixConfig.build.input, 'pages/**/*.md'))];
  });

  // # Add custom data filters // TODO: maybe scan folder and add automatically

  eleventyConfig.addFilter(
      'search',
      require('./source/_filters/searchFilter')
  );
  eleventyConfig.addFilter(
      'date',
      require('./source/_filters/dateFilter')
  );

  // TODO: describe the following
  eleventyConfig.addPairedShortcode('unpre', function(content) {
    content = content.substring(content.indexOf('```') + 3);
    content = content.substring(content.indexOf('\n') + 1);
    content = content.substring(0, content.lastIndexOf('```'));
    return normalizeMarkup(content);
  });
  eleventyConfig.addPairedShortcode('zx', function(content, template, ...args) {
    const p = `./templates/tags/${template}.js`;
    if (fs.existsSync(p)) {
      delete require.cache[require.resolve(p)];
      return normalizeMarkup(require(p)(render, content, ...args));
    }
    return ''; // 'Not implemented! (' + content + ') [' + args + ']';
  });
  eleventyConfig.addPairedShortcode('layout', function(content, ...args) {
    return `<div layout="${args[0]}" ${args[1]}>${normalizeMarkup(content)}</div>`;
  });
  eleventyConfig.addShortcode('rawFile', function(fileName) {
    const inputPath = path.dirname(this.page.inputPath);
    let rawFile = path.join(inputPath, this.page.fileSlug, fileName);
    if (!fs.existsSync(rawFile)) {
      rawFile = path.join(zuixConfig.build.input, zuixConfig.build.includesFolder, fileName);
    }
    if (!fs.existsSync(rawFile)) {
      rawFile = path.join(zuixConfig.build.input, fileName);
    }
    if (fs.existsSync(rawFile)) {
      return normalizeMarkup(fs.readFileSync(rawFile).toString('utf8'));
    } else {
      // TODO: report error
    }
  });
};
