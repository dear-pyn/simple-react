const path = require('path');
const autoprefixer = require('autoprefixer');
const postCssInputRange = require('postcss-input-range')


module.exports = {
  module: {
    loaders: [
      {
        test: /\.s?css?$/,
        loader: 'style!css!postcss!sass',
        include: path.resolve(__dirname, '../')
      }
    ]
  },
  postcss: function() {
    return [autoprefixer, postCssInputRange];
  }
}
