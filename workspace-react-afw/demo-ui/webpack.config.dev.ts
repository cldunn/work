import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

const Dotenv = require('dotenv-webpack');
process.env.NODE_ENV = 'development';

module.exports = {
  mode: "development",
  target: 'web',
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/'
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
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(css)$/,
        use: ['style-loader','css-loader']
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        type: 'asset/inline'
      }
    ]
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    stats: 'minimal',
    port: 3002,
    open: true,
    hot: true
  },
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
      path: `./.env.development`,
      systemvars: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};