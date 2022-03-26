const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    'index': path.resolve(__dirname, 'build.js'),
    'service-worker': path.resolve(__dirname, 'service-worker.js')
  },
  output: {
    path: path.resolve(__dirname, 'docs'),
    clean: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'index.css'
    })
  ],
  devServer: {
    allowedHosts: 'auto',
    port: 9000,
    static: ['docs']
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  'postcss-preset-env'
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff2?|png|jpg|gif|ico|json)$/i,
        type: 'asset/resource',
        generator: {
          filename: '[name][ext][query]',
          outputPath: (pathData) => {
            const segments = pathData.filename.split('/');
            if (segments[0] === 'src') segments.shift();
            segments.pop();
        
            return segments.join('/');
          }
        }
      },
      {
        test: /\.html$/i,
        use: [
          'file-loader?name=[name].[ext]',
          'extract-loader',
          {
            loader: 'html-loader',
            options: {
              sources: false,
              minimize: true
            },
          },
        ],
      },
    ]
  }
};
