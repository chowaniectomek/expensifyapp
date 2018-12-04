const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    // entry: './src/sidecode/hoc.js',
    output: {
      filename: '[name].[hash].js'
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
          test: /\.html$/,
          use: {
            loader: 'html-loader'
          }
        },
        {
          test: /\.s?css$/,
          use: [
            {
              loader: isProduction
                ? MiniCssExtractPlugin.loader
                : 'style-loader'
            },

            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                minimize: true
              }
            },

            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        }
        //   {
        //     test: /\.scss$/,
        //     use: [
        //       {
        //         loader: 'style-loader'
        //       },
        //       {
        //         loader: MiniCssExtractPlugin.loader
        //       },
        //       {
        //         loader: 'css-loader',
        //         options: {
        //           sourceMap: true,
        //           minimize: true
        //         }
        //       },
        //       {
        //         loader: 'postcss-loader'
        //       },
        //       {
        //         loader: 'sass-loader'
        //       }
        //     ]
        //   }
      ]
    },
    plugins: [
      new CleanWebpackPlugin('dist', {}),
      new HtmlWebPackPlugin({
        template: './src/index.html',
        filename: './index.html'
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[hash].css'
      })
    ],
    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
    devServer: {
      historyApiFallback: true
    }
  };
};
