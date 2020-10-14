const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugIn = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'build.js'),
  },
  output: {
    path: path.resolve(__dirname, 'docs'),
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|eot|svg|ttf|woff2?)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: (url, resourcePath, context) =>
                `${resourcePath.replace(`${context}/src`, '')}`
            }
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.html$/i,
        use: [
          'file-loader?name=[name].[ext]',
          'extract-loader',
          {
            loader: 'html-loader',
            options: {
              attributes: false,
              minimize: true
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                  ],
                ],
              },
            },
          }
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'tailwind.css'
    }),
    new CleanWebpackPlugin()
  ],
};
