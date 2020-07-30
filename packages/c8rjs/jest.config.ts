const base = require('../../jest.config.base.ts');
const pkg = require('./package.json');

module.exports = {
	...base,
	name: pkg.name,
	displayName: pkg.name,
};
