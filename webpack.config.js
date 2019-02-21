var webpack = require('webpack');
module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },

    module: {
        rules: [
          {
            test: /\.(css|less)$/,
            use: [
              'style-loader',
              'css-loader',
              'less-loader'
            ],
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
          },
          {
            test: /\.(jpe?g|png|gif)$/i,
            loader: 'file?name=img/[name].[ext]'
          },
          {
            test: /\.(js|jsx|mjs)$/,
            enforce: 'pre',
            use: [
                'eslint-loader'
            ]
          },
        ]  
    }
};
