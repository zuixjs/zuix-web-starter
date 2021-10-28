const fs = require('fs');
const path = require('path');
//const {dirname: getDirName} = require("path");
const config = require('config');
const util = require('util');
const mkdirp = require('mkdirp');

const zuixConfig = config.get('zuix');
const sourceFolder = zuixConfig.get('build.input');
const buildFolder = zuixConfig.get('build.output');
const includesFolder = zuixConfig.get('build.includesFolder');
const copyFiles = zuixConfig.get('build.copy');

// LESS
const less = require('less');
const lessConfig = require(process.cwd()+'/.lessrc');

// ESLint
const Linter = require('eslint').Linter;
const linter = new Linter();
const lintConfig = require(process.cwd()+'/.eslintrc');

const { minify } = require("terser");
const pluginPWA = require("eleventy-plugin-pwa");

// - copy last zUIx release
copyFolder(util.format('%s/node_modules/zuix-dist/js', process.cwd()), util.format('%s/js/zuix', buildFolder), (err) => {
  if (err) console.log(err);
});
// - auto-generated config.js
copyAppConfig();

module.exports = function(eleventyConfig) {
  // TODO: pluginPWA not working with latest Eleventy (>= 1.0.0)
  //       see https://github.com/okitavera/eleventy-plugin-pwa/issues/35
  /*
  eleventyConfig.addPlugin(pluginPWA, {
    swDest: `${buildFolder}/service-worker.js`,
    globDirectory: `${buildFolder}`,
    clientsClaim: true,
    skipWaiting: true
  });
  */
  // Copy base files
  copyFiles.forEach((f) => {
    eleventyConfig.addPassthroughCopy(`${sourceFolder}/${f}`);
  });
  // Add Nunjucks
  eleventyConfig.addNunjucksAsyncFilter("jsmin", async function (
      code,
      callback
  ) {
    try {
      const minified = await minify(code);
      callback(null, minified.code);
    } catch (err) {
      console.error("Terser error: ", err);
      // Fail gracefully.
      callback(null, code);
    }
  });
  // Declare custom types
  eleventyConfig.addExtension("less", {
    read: true,
    outputFileExtension: 'css',
    compile: (content, path) => () => {
        let output;
        less.render(content, lessConfig, function(error, lessOutput) {
          output = lessOutput;
        });
        return output.css;
      }
  });
  eleventyConfig.addExtension("js", {
    read: true,
    outputFileExtension: 'js',
    compile: (content, path) => async () => {
      const output = await minify(content);
      return output.code;
    }
  });
  // Add custom file types
  eleventyConfig.addTemplateFormats([ "less", "js" ]);
  // Add linter
  eleventyConfig.addLinter("eslint", function(content, inputPath, outputPath) {
    if( inputPath.endsWith(".js") ) {
      const issues = linter.verify(content, lintConfig, inputPath);
      if (issues.length > 0) {
        console.log('[%s] ESLint result', inputPath)
      }
      issues.forEach(function(m) {
        if (m.fatal || m.severity > 1) {
          console.error('   Error: %s (%s:%s)', m.message, m.line, m.column);
        } else {
          console.warn('   Warning: %s (%s:%s)', m.message, m.line, m.column);
        }
      });
    }
  });
  // Return configuration options:
  return {
    dir: {
      input: sourceFolder,
      output: buildFolder,
      includes: includesFolder
    },
    //markdownTemplateEngine: false,
    //templateFormats: ['html', 'liquid', 'ejs', 'hbs', 'mustache', 'haml', 'pug', 'njk', '11ty.js']
  }
};

function copyAppConfig() {
  let cfg = `/* eslint-disable quotes */
(function() {
    zuix.store("config", `;
  cfg += JSON.stringify(config.get('zuix.app'), null, 8);
  cfg += ');\n';
  // WorkBox / Service Worker
  // TODO: fix service-worker path
  cfg += `
    // Check that service workers are registered
    if ('serviceWorker' in navigator) {
        // Use the window load event to keep the page load performant
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./service-worker.js');
        });
    }
})();\n`;
  fs.writeFileSync(buildFolder+'/config.js', cfg);
}

// destination type must match source (dir/dir or file/file)
function copyFolder(source, destination, done) {
  const ncp = require('ncp').ncp;
  // ncp.limit = 16;
  // ncp.stopOnErr = true;
  let folder = destination;
  if (fs.existsSync(source)) {
    if (fs.lstatSync(source).isFile()) {
      folder = path.dirname(destination);
    }
    if (!fs.existsSync(folder)) {
      mkdirp.sync(folder);
      console.debug(' - created folder "%s"', folder);
    }
  } else {
    console.warn(' - "%s" not found', source)
    // TODO: handle return value
    return false;
  }
  ncp(path.resolve(process.cwd(), source), path.resolve(process.cwd(), destination), function(err) {
    if (typeof done === 'function') {
      done(err);
    }
  });
}
