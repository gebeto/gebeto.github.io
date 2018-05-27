const path = require("path");


const config = {
	entry: path.resolve(__dirname, "src"),

	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
	},

	resolve: {
		extensions: [".ts", ".js"],
	},

	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: false,
		port: 8080
	},

	module: {
		rules: [
			{
				test: /\.ts$/,
				loader: "awesome-typescript-loader",
			},
			{
		    	test: /\.glsl$/,
		    	use: 'raw-loader'
		    }
		]
	}
};

module.exports = config;