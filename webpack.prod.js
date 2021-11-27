const { EnvironmentPlugin } = require("webpack");
const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.common.js')

module.exports = merge(commonConfig,{
  mode: 'production',
  plugins: [
    new EnvironmentPlugin({
      API: 'http://prod.site.com',
    })
  ]
});