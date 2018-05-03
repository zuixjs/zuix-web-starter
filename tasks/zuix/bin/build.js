/*
 * Copyright 2015-2017 G-Labs. All Rights Reserved.
 *         https://genielabs.github.io/zuix
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*
 *
 *  This file is part of
 *  zUIx, Javascript library for component-based development.
 *        https://genielabs.github.io/zuix
 *
 * @author Generoso Martello <generoso@martello.com>
 */

const staticSite = require('static-site');
const util = require('util');
const tlog = require('../lib/logger');
const mkdirp = require('mkdirp');
const fs = require('fs');
const path = require('path');
const measureTime = require('measure-time');

const version = require('../../../package.json').version;
tlog.term
    .bgDefaultColor()
    .defaultColor(util.format('^BzUIx Web Starter^: v%s ^whttps://genielabs.github.io/zuix^:\n\n', version));

// Configuration
tlog.info('^+Configuration')
    .br();
const config = require('config');
const zuixConfig = config.get('zuix');
const sourceFolder = zuixConfig.get('build.input');
const buildFolder = zuixConfig.get('build.output');
const copyFiles = zuixConfig.get('build.copy');
tlog.br('   ^Yinput^ %s', sourceFolder);
tlog.br('  ^Youtput^ %s', buildFolder);
tlog.br('    ^Ycopy^ %s', copyFiles)
    .br();
if (!fs.existsSync(sourceFolder)) {
    tlog.error('   "%s" does not exist', sourceFolder);
    //process.exit(-1);
    return false;
}

// Build start
tlog.info('^+Copying base files from "%s" to "%s" ...', sourceFolder, buildFolder)
    .br().br();

// Copy files straight to the build folder without processing them
for (let i = 0; i < copyFiles.length; i++) {
    const path = copyFiles[i];
    const source = util.format('%s/%s', sourceFolder, path);
    const destination = util.format('%s/%s', buildFolder, path);
    tlog.update('   | "%s" -> "%s"', source, destination);
    copyFolder(source, destination);
}

// Copy zuix-dist files
tlog.update('   | "%s" -> "%s"', 'zuix-dist', 'js');
copyFolder(util.format('%s/node_modules/zuix-dist/js', process.cwd()), util.format('%s/js/zuix', buildFolder));
tlog.update('');

const getElapsed = measureTime();
tlog.info('^+Generating files ...');

// Parse and compile to static all other files
staticSite({
    build: buildFolder,
    source: sourceFolder,
    ignore: copyFiles,
    files: zuixConfig.get('build.compile'),
    helpers: ['tasks/zuix/helpers/subfolder_root.js'],
    templateEngine: 'tasks/zuix/engines/zuix-bundler.js'
}, function(err, stats) {
    const elapsed = getElapsed().millisecondsTotal;
    const count = stats.pages.length;
    tlog.br().info('Generated ^B%s^: file%s in ^B%s^:^W ms^:.\n', count, count !== 1 ? 's' : '', elapsed);
    if (err != null) {
        tlog.br().error(err).br();
    }
});

//process.exit(0);

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
        if (!fs.existsSync(destination)) {
            mkdirp.sync(folder);
            tlog.update();
            tlog.term.previousLine();
            tlog.info('  ^wcreated folder "%s"', destination)
                .br();
        }
    } else {
        tlog.update();
        tlog.term.previousLine();
        tlog.warn('  ^w"%s" not found', source)
            .br();
        // TODO: handle return value
        return false;
    }
    ncp(path.resolve(process.cwd(), source), path.resolve(process.cwd(), destination), function(err) {
        if (typeof done === 'function') {
            done(err);
        }
    });
}
