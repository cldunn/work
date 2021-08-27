import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

const Dotenv = require('dotenv-webpack');
process.env.NODE_ENV = 'production';

module.exports = {
  mode: "production",
  target: 'web',
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: './'
  },
  resolve: {
    extensions: [".wasm", ".ts", ".tsx", ".mjs", ".cjs", ".js", ".json"],
    alias: {
      react: path.resolve('./node_modules/react')  // required for npm link
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Extracts CSS into separate files
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        type: 'asset/inline'
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      `...`,  // extend existing minimizers (i.e. `terser-webpack-plugin`)
      new CssMinimizerPlugin(),
    ],
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favico: 'src/favicon.ico'
    }),
    new ForkTsCheckerWebpackPlugin({
      eslint: {
        files: './src/**/*.{ts,tsx,js,jsx}' // required - same as command `eslint ./src/**/*.{ts,tsx,js,jsx} --ext .ts,.tsx,.js,.jsx`
      }
    }),
    new Dotenv({
      path: `./.env.production`,
      systemvars: true
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css"
    })
  ]
};
