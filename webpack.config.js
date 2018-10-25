model.exports = {
	entry: __dirname + "/src/test.js",
	output: {
		path: __dirname +'/dist',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,//ビルド対象のファイルを指定
				loader: 'babel-loader',//loaderを指定
				exclude: /node_modules/,
				query: {////loaderに渡したいクエリパラメータを指定
					presets: ['es2015','stage-0']
				}
			}
		]
	}
};