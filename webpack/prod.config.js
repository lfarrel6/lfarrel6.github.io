const merge = require('webpack-merge');
const root = require('./root.config');
const { resolve } = require('path');

module.exports = merge(root, {
	mode: 'production',
	entry: './index.tsx',
	output: {
		filename: 'js/bundle.[hash].min.js',
		path: resolve(__dirname, '../dist'),
    publicPath: './',
	},
	devtool: 'source-map',
	plugins: [],
});
