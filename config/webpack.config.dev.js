'use strict';

const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const getUserEnvironment = require('./env');
const paths = require('./paths');

/**
 * Webpack uses `publicPath` to determine where the app is being served from.
 * In development, we always serve from the root. This makes config easier.
 */
const publicPath = '/';
/**
 * `publicUrl` is just like `publicPath`, but we will provide it to our app
 *  as %PUBLIC_URL% in `index.html` and `process.env.PUBLIC_URL` in JavaScript.
 */
const publicUrl = '';
// Get environment variables to inject into our app.
const env = getUserEnvironment(publicUrl);

/**
 * This is the development configuration.
 * It is focused on developer experience and fast rebuilds.
 * The production configuration is different and lives in a separate file.
 */
module.exports = {

  devtool: 'cheap-module-source-map',
  /**
   * These are the "entry points" to our application.
   * This means they will be the "root" imports that are included in JS bundle.
   * The first two entry points enable "hot" CSS and auto-refreshes for JS.
   */

  entry: [
    require.resolve('./polyfills'),
    /**
     * 
     * Include an alternative client for WebpackDevServer. A client's job is to
     * connect to WebpackDevServer by a socket and get notified about changes.
     * When you save a file, the client will either apply hot updates (in case
     * of CSS changes), or refresh the page (in case of JS changes). When you
     * make a syntax error, this client will display a syntax error overlay.
     * Note: instead of the default WebpackDevServer client, we use a custom one
     * to bring better experience for Create React App users. You can replace
     * the line below with these two lines if you prefer the stock client:
     * require.resolve('webpack-dev-server/client') + '?/',
     * require.resolve('webpack/hot/dev-server'),
     * 
     */
    require.resolve('react-dev-utils/webpackHotDevClient'),
    // App's code:
    paths.appIndexJs,
    /**
     * Included the app code last so that if there is a runtime error during
     * initialization, it doesn't blow up the WebpackDevServer client, and
     * changing JS code would still trigger a refresh.
     */

  ],
  output: {
    // Next line is not used in dev but WebpackDevServer crashes without it:
    path: paths.appBuild,
    // Add /* filename */ comments to generated require()s in the output.
    pathinfo: true,
    /**
     * This does not produce a real file. It's just the virtual path that is
     * served by WebpackDevServer in development. This is the JS bundle
     * containing code from all our entry points, and the Webpack runtime.
     */
    filename: 'static/js/bundle.js',
    chunkFilename: 'static/js/[name].chunk.js',
    // This is the URL that app is served from. Use "/" in development.
    publicPath: publicPath,
    // Point sourcemap entries to original disk location (format as URL on Windows)
    devtoolModuleFilenameTemplate: info =>
      path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
  },
  resolve: {
    /**
     * This allows you to set a fallback for where Webpack should look for modules.
     * We placed these paths second because we want `node_modules` to "win"
     * if there are any conflicts. This matches Node resolution mechanism.
     * Link for reference: https://github.com/facebookincubator/create-react-app/issues/253
     */

    modules: ['node_modules', paths.appNodeModules].concat(
      process.env.NODE_PATH.split(path.delimiter).filter(Boolean)
    ),

    /**
     * These are the reasonable defaults supported by the Node ecosystem.
     * We also include JSX as a common component filename extension to support
     * some tools.
     * `web` extension prefixes have been added for better support for React Native Web.
     */

    extensions: ['.web.js', '.js', '.json', '.web.jsx', '.jsx'],
    alias: {
      /**
       * Support React Native Web
       * Link for reference: https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
       */
     
      'react-native': 'react-native-web',
    },
    plugins: [

      // Prevents users from importing files from outside of src/ (or node_modules/).

      new ModuleScopePlugin(paths.appSrc, [paths.appPackageJson]),
    ],
  },
  module: {
    strictExportPresence: true,
    rules: [
      /**
       * First, run the linter.
       * It's important to do this before Babel processes the JS.
       */

      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        use: [
          {
            options: {
              formatter: eslintFormatter,
              eslintPath: require.resolve('eslint'),
              
            },
            loader: require.resolve('eslint-loader'),
          },
        ],
        include: paths.appSrc,
      },
      {
        /**
         * "oneOf" will traverse all following loaders until one will
         * match the requirements. When no loader matches it will fall
         * back to the "file" loader at the end of the loader list.
         */

        oneOf: [
          // "url" loader works like "file" loader
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: require.resolve('url-loader'),
            options: {
              limit: 10000,
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
          // Process JS with Babel.
          {
            test: /\.(js|jsx)$/,
            include: paths.appSrc,
            loader: require.resolve('babel-loader'),
            options: {
              
              // This is a feature of `babel-loader` for webpack (not Babel itself).
              cacheDirectory: true,
            },
          },
          /**
           * "postcss" loader applies autoprefixer to our CSS.
           * "css" loader resolves paths in CSS and adds assets as dependencies.
           * "style" loader turns CSS into JS modules that inject <style> tags
           * In production, we use a plugin to extract that CSS to a file, but
           * in development "style" loader enables hot editing of CSS.
           */

          {
            test: /\.css$/,
            use: [
              require.resolve('style-loader'),
              {
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 1,
                },
              },
              {
                loader: require.resolve('postcss-loader'),
                options: {
                  // Necessary for external CSS imports to work
                  // Link for reference: https://github.com/facebookincubator/create-react-app/issues/2677
                  ident: 'postcss',
                  plugins: () => [
                    require('postcss-flexbugs-fixes'),
                    autoprefixer({
                      browsers: [
                        '>1%',
                        'last 4 versions',
                        'Firefox ESR',
                        'not ie < 9', // React doesn't support IE8 anyway
                      ],
                      flexbox: 'no-2009',
                    }),
                  ],
                },
              },
            ],
          },
          /**
           * "file" loader makes sure those assets get served by WebpackDevServer.
           * When you `import` an asset, you get its (virtual) filename.
           * In production, they would get copied to the `build` folder.
           * This loader doesn't use a "test" so it will catch all modules
           * that fall through the other loaders.
           */

          {
            /**
             * Exclude `js` files to keep "css" loader working as it injects
             * it's runtime that would otherwise processed through "file" loader.
             * Also exclude `html` and `json` extensions so they get processed
             * by webpacks internal loaders.
             */
            exclude: [/\.js$/, /\.html$/, /\.json$/],
            loader: require.resolve('file-loader'),
            options: {
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    /**
     * Makes some environment variables available in index.html.
     * The public URL is available as %PUBLIC_URL% in index.html, e.g.:
     * <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
     * In development, this will be an empty string.
     */
    new InterpolateHtmlPlugin(env.raw),
    // Generates an `index.html` file with the <script> injected.
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
    }),
    // Add module names to factory functions so they appear in browser profiler.
    new webpack.NamedModulesPlugin(),
    // Makes some environment variables available to the JS code, for example:
    // if (process.env.NODE_ENV === 'development') { ... }. See `./env.js`.
    new webpack.DefinePlugin(env.stringified),
    // This is necessary to emit hot updates (currently CSS only):
    new webpack.HotModuleReplacementPlugin(),
    /**
     * Watcher doesn't work well if you mistype casing in a path so we use
     * a plugin that prints an error when you attempt to do this.
     * Link for reference: See https://github.com/facebookincubator/create-react-app/issues/240
     */

    new CaseSensitivePathsPlugin(),
    /**
     * If you require a missing module and then `npm install`it, you still 
     * have to restart the development server for Webpack to discover it. This
     * plugin makes the discovery automatic so you don't have to restart.
     */
    new WatchMissingNodeModulesPlugin(paths.appNodeModules),
    /**
     * Moment.js is an extremely popular library that bundles large locale files
     * by default due to how Webpack interprets its code. This is a practical
     * solution that requires the user to opt into importing specific locales. 
     */

    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
  /**
   * Some libraries import Node modules but don't use them in the browser.
   * Tell Webpack to provide empty mocks for them so importing them works.
   */
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
  // Turn off performance hints during development because we don't do any
  performance: {
    hints: false,
  },
};
