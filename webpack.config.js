const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDevMode = process.env.NODE_ENV === 'development';
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.module\.s(a|c)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: isDevMode
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [require('autoprefixer')()],
              sourceMap: isDevMode
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevMode
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
