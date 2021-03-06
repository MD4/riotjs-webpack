const webpack = require('webpack')

module.exports = {
  cache: true,
  entry: {
    app: './src/index.js',
    vendor: './src/vendor.js'
  },
  output: {
    path: './dist/',
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [
      { test: /\.html$/, include: /src/, loader: 'riotjs', query: { type: 'none' } }
    ],
    loaders: [
      { test: /\.css$/, include: /src/, loader: 'style!css' },
      { test: /\.js$|\.html$/, include: /src/, loader: 'babel', query: { presets: 'es2015-riot' } },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'file-loader' }
    ]
  },
  babel: {
    presets: [ 'es2015' ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      riot: 'riot'
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
  ],
  devServer: {
    port: 5555
  },
  devtool: 'source-map'
}
