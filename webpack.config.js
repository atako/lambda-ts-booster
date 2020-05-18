import path from 'path'
import slsw from 'serverless-webpack'
const isLocal = slsw.lib.webpack.isLocal
// import nodeExternals from 'webpack-node-externals'
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
import PnpWebpackPlugin from 'pnp-webpack-plugin'

module.exports = {
  mode: isLocal ? 'development' : 'production',
  // devtool: isLocal ? 'source-map' : 'none',
  devtool: 'source-map',
  // devtool: 'none',
  entry: slsw.lib.entries,
  target: 'node',
  resolve: {
    extensions: ['.mjs', '.ts', '.js'],
    plugins: [PnpWebpackPlugin],
  },
  resolveLoader: {
    plugins: [PnpWebpackPlugin.moduleLoader(module)],
  },
  // plugins: [new BundleAnalyzerPlugin()],
  output: {
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
  },
  externals: ['aws-sdk'],
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
    ],
  },
}
