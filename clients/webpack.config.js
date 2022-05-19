// Generated using webpack-cli https://github.com/webpack/webpack-cli
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');
const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';

const config = {
  entry: {
    main: './src/scripts/index.ts',
    error: './src/scripts/error.ts',
    table: './src/scripts/table.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].bundle.js',
    chunkFilename: '[id].[chunkhash].js',
    publicPath: '/',
    assetModuleFilename: 'assets/[name][ext]',
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
    },
  },
  devServer: {
    open: true,
    host: 'localhost',
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/pages/index.html',
      filename: 'index.html',
      chunks: ['main'],
      favicon: './src/assets/favicon.ico',
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/pages/error.html',
      filename: 'error.html',
      chunks: ['error'],
      favicon: './src/assets/favicon.ico',
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/pages/table2019.html',
      filename: 'table2019.html',
      chunks: ['table'],
      favicon: './src/assets/favicon.ico',
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/pages/table2022.html',
      filename: 'table2022.html',
      chunks: ['table'],
      favicon: './src/assets/favicon.ico',
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/pages/table2023.html',
      filename: 'table2023.html',
      chunks: ['table'],
      favicon: './src/assets/favicon.ico',
    }),
    // new CopyPlugin({
    //   patterns: [
    //     { from: './public', to: 'service' },
    //     { from: './src/assets/img', to: 'images' },
    //   ],
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: 'ts-loader',
        exclude: ['/node_modules/'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/i,
        type: 'asset',
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  devtool: 'eval-source-map',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';
    config.output.publicPath = './';
    config.devtool = 'source-map';

    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
        chunkFilename: '[id].[contenthash].css',
      }),
    );
    config.optimization = {
      // minimize: true,
      minimizer: [
        new HtmlMinimizerPlugin({
          minimizerOptions: {
            collapseWhitespace: false,
          },
        }),
        new ImageMinimizerPlugin({
          minimizer: {
            implementation: ImageMinimizerPlugin.imageminMinify,
            options: {
              plugins: [
                ['gifsicle', { interlaced: true }],
                ['jpegtran', { progressive: true }],
                ['optipng', { optimizationLevel: 5 }],
                'imagemin-svgo',
              ],
            },
          },
          // Disable `loader`
          loader: false,
        }),
        new CssMinimizerPlugin({
          minimizerOptions: {
            preset: [
              'default',
              {
                discardComments: { removeAll: true },
              },
            ],
          },
        }),
        new TerserPlugin({
          terserOptions: {
            compress: true,
            format: {
              comments: false,
            },
          },
          extractComments: false,
        }),
      ],
    };
  } else {
    config.mode = 'development';
  }
  return config;
};
