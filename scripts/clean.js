const sh = require('shelljs');
const upath = require('upath');

const destPath = upath.resolve(upath.dirname(__filename), 'C:\\Users\\Roger\\webpage\\webpage\\scripts\\clean.js');

sh.rm('-rf', `${destPath}/*`)

