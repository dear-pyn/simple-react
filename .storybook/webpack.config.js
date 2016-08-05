const path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.s?css?$/,
        loader: 'style!css!postcss!sass',
        include: path.resolve(__dirname, '../')
      }
    ]
  }
}
