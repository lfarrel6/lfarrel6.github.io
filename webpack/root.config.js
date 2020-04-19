const { resolve } = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
	},
	context: resolve(__dirname, '../src'),
	module: {
		rules: [
			{
				test: /\.js$/i,
				use: ['babel-loader', 'source-map-loader'],
				exclude: /node_modules/,
			},
			{
				test: /\.ts(x?)$/,
				exclude: /node_modules/,
				use: ['babel-loader', 'awesome-ts-loader'],
			},
			{
				test: /\.css$/i,
				use: [
					'style-loader',
					{ loader: 'css-loader', options: { importLoaders: 1 } },
				],
			},
			{
				test: /\.(scss|sass)$/,
				loaders: [
					'style-loader',
					{ loader: 'css-loader', options: { importLoaders: 1 } },
					'sass-loader',
				],
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loaders: [
					'file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]',
					'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false',
				],
			},
		],
	},
	plugins: [
		new CheckerPlugin(),
		new HtmlWebPackPlugin({
			template: resolve(__dirname, '../public/index.html'),
			favicon: resolve(__dirname, '../public/favicon.ico'),
			filename: './index.html',
		}),
	],
	externals: {
		'react': 'React',
		'react-dom': 'ReactDOM',
	},
	performance: {
		hints: false,
	},
};
