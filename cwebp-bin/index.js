'use strict';
const path = require('path');
const BinWrapper = require('bin-wrapper');

module.exports = new BinWrapper()
	.dest(path.join(__dirname, './vendor'))
	.use(process.platform === 'win32' ? 'cwebp.exe' : 'cwebp').path();
