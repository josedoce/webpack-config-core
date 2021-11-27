const path = require('path');
const { EnvironmentPlugin } = require("webpack");
const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.common.js')

module.exports = merge(commonConfig,{
  mode: 'development',
  devServer: {
  
    //index: 'index.html',
    static: {
      directory: path.resolve(__dirname, "./dist"),
    },
    compress: true,
    port: 9000,
    hot: "only"
  },
  plugins: [
    new EnvironmentPlugin({
      API: 'http://localhost:9000',
    })
  ]
});