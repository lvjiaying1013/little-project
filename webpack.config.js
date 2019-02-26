var webpack = require('webpack');
let localEnv = 'http://localhost:8080/src/mock/api/';
let devEnv = 'http://127.88.201.66:8888';
let onlineEnv = 'https://developer.nuomi.com/deco/wangpu/';
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
            loader: [
              'style-loader',
              'css-loader',
              {
                loader: 'less-loader',   // compiles Less to CSS
                options: {
                    // 这里配置全局变量
                    javascriptEnabled: true
                }
              }
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
            loader: [
                'eslint-loader'
            ]
          },
        ]  
    },
    devServer: {
      proxy: {
        '/secondarydealpackage/*': {
          target: onlineEnv,
          changeOrigin: true,
          secure: false,
          pathRewrite: {
            //'^/secondarydealpackage': '/secondarydealpackage.json'
          }
        }
      }
    }
};
