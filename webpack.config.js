const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { optimize } = require('webpack');

module.exports = (_, argv) => {
  const mode = argv.mode || 'development';
  const isProd = mode === 'production';
  return {
    mode,
    entry: './src/index.tsx',
    output: {
      clean: true,
      publicPath: '/',
      path: path.resolve(__dirname, 'dist'),
      chunkFilename: '[name].[contenthash:8].chunk.js',
      filename: 'bundle.[name].[contenthash:8].js',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json'],
      plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
    },
    module: {
      rules: [
        { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
        { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({ filename: 'index.html', template: 'index.ejs' }),
      new CopyWebpackPlugin({ patterns: [{ from: 'public', to: '' }] }),
    ],
    devtool: isProd ? false : 'inline-source-map',
    optimization: {
      minimize: isProd,
      splitChunks: {
        cacheGroups: {
          vendor: {
            name: 'vendor',
            chunks: 'all',
            test: /[\\/]node_modules[\\/]/,
            priority: 0,
            enforce: true,
            reuseExistingChunk: true,
          },
        },
      },
    },
    devServer: {
      hot: true,
      port: 3000,
      host: '0.0.0.0',
      allowedHosts: ['all'],
      historyApiFallback: true,
    },
  };
};
