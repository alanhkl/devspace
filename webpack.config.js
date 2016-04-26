var path = require('path')
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var normalize = require('normalize.css');

module.exports = {
  entry: {
    vendor: ["jquery" ],
    main: ["./src/js/global.js"],
    style: "./src/css/style.scss"
  },
  output: {
    path: './',
    
    filename: 'js/[name].js',

  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style", ["css", "sass"])
     
      }
    ]
  }
  // ,
  // sassLoader: {
  //   includePaths: [path.resolve(__dirname, "./css/")]
  // }
  ,
  plugins: [
    new ExtractTextPlugin("/css/[name].css"),
    new webpack.optimize.CommonsChunkPlugin("vendor", "/js/vendor.bundle.js")

  ]
}
