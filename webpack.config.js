var path = require('path');

module.exports = {

    entry: path.resolve(__dirname, 'src') + '/index.js',
    output: {
        path: path.resolve(__dirname, 'dist') + '/app',
        filename: 'bundle.js',
        publicPath: '/app/'
    },
     resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
	
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
		exclude: /node_modules/, 
               
                use: {
          		loader: "babel-loader"
        	}
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
};

