'use strict';

const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const paths = require('./paths');
const getUserEnvironment = require('./env');

/**
 * Webpack uses `publicPath` to determine where the app is being served from.
 * It requires a trailing slash, or the file assets will get an incorrect path.
 */
const publicPath = paths.servedPath;
/**
 * Some apps do not use client-side routing with pushState.
 * For these, "homepage" can be set to "." to enable relative asset paths.
 */
const shouldUseRelativeAssetPaths = publicPath === './';
const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';
/**
 * `publicUrl` is just like `publicPath`, but we will provide it to our app
 * as %PUBLIC_URL% in `index.html` and `process.env.PUBLIC_URL` in JavaScript.
 */
const publicUrl = publicPath.slice(0, -1);
// Get environment variables to inject into app.
const env = getUserEnvironment(publicUrl);


if (env.stringified['process.env'].NODE_ENV !== '"production"') {
  throw new Error('Production builds must have NODE_ENV=production.');
}

const cssFilename = 'static/css/[name].[contenthash:8].css';

const extractTextPluginOptions = shouldUseRelativeAssetPaths
  ? // Making sure that the publicPath goes back to to build folder.
  { publicPath: Array(cssFilename.split('/').length).join('../') }
  : {};

/**
 * This is the production configuration.
 * It compiles slowly and is focused on producing a fast and minimal bundle.
 * The development configuration is different and lives in a separate file.
 */

module.exports = {

  bail: true,
  devtool: shouldUseSourceMap ? 'source-map' : false,
  // In production, we only want to load the polyfills and the app code.
  entry: [require.resolve('./polyfills'), paths.appIndexJs],
  output: {
    // The build folder.
    path: paths.appBuild,
    /**
     * Generated JS file names (with nested folders).
     * There will be one main bundle, and one file per asynchronous chunk.
     */
    filename: 'static/js/[name].[chunkhash:8].js',
    chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
    // Inferred the "public path" (such as / or /my-project) from homepage.
    publicPath: publicPath,
    // Point sourcemap entries to original disk location (format as URL on Windows)
    devtoolModuleFilenameTemplate: info =>
      path
        .relative(paths.appSrc, info.absoluteResourcePath)
        .replace(/\\/g, '/'),
  },
  resolve: {
    /**
     * This allows you to set a fallback for where Webpack should look for modules.
     * We placed these paths second because we want `node_modules` to "win"
     * if there are any conflicts. This matches Node resolution mechanism.
     * Link for reference: https://github.com/facebookincubator/create-react-app/issues/253
     */

    modules: ['node_modules', paths.appNodeModules].concat(
      // It is guaranteed to exist because we tweak it in `env.js`
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

      // Support React Native Web
      // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
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

              compact: true,
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
            loader: ExtractTextPlugin.extract(
              Object.assign(
                {
                  fallback: require.resolve('style-loader'),
                  use: [
                    {
                      loader: require.resolve('css-loader'),
                      options: {
                        importLoaders: 1,
                        minimize: true,
                        sourceMap: shouldUseSourceMap,
                      },
                    },
                    {
                      loader: require.resolve('postcss-loader'),
                      options: {
                        // Necessary for external CSS imports to work
                        // https://github.com/facebookincubator/create-react-app/issues/2677
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
                extractTextPluginOptions
              )
            ),
          },
          /**
           * "file" loader makes sure those assets get served by WebpackDevServer.
           * When you `import` an asset, you get its (virtual) filename.
           * In production, they would get copied to the `build` folder.
           * This loader doesn't use a "test" so it will catch all modules
           * that fall through the other loaders.
           */
          {
            loader: require.resolve('file-loader'),
            /**
             * Exclude `js` files to keep "css" loader working as it injects
             * it's runtime that would otherwise processed through "file" loader.
             * Also exclude `html` and `json` extensions so they get processed
             * by webpacks internal loaders.
             */
            exclude: [/\.js$/, /\.html$/, /\.json$/],
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
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    /**
     * Makes some environment variables available to the JS code, for example:
     * if (process.env.NODE_ENV === 'production') { ... }. See `./env.js`.
     * It is absolutely essential that NODE_ENV was set to production here.
     * Otherwise React will be compiled in the very slow development mode.
     */
    new webpack.DefinePlugin(env.stringified),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        /**
         * Disabled because of an issue with Uglify breaking seemingly valid code:
         * Link for reference: https://github.com/facebookincubator/create-react-app/issues/2376
         */
        // 
        // 

        comparisons: false,
      },
      output: {
        comments: false,
        /**
         * Turned on because emoji and regex is not minified properly using default
         * Link for reference: https://github.com/facebookincubator/create-react-app/issues/2488
         */
        ascii_only: true,
      },
      sourceMap: shouldUseSourceMap,
    }),
    // Note: this won't work without ExtractTextPlugin.extract(..) in `loaders`.
    new ExtractTextPlugin({
      filename: cssFilename,
    }),
    /**
     * Generate a manifest file which contains a mapping of all asset filenames
     * to their corresponding output file so that tools can pick it up without
     * having to parse `index.html`.
     */
    new ManifestPlugin({
      fileName: 'asset-manifest.json',
    }),
    /**
     * Generate a service worker script that will precache, and keep up to date,
     * the HTML & assets that are part of the Webpack build.
     */
    new SWPrecacheWebpackPlugin({
      /**
       * By default, a cache-busting query parameter is appended to requests
       * used to populate the caches, to ensure the responses are fresh.
       * If a URL is already hashed by Webpack, then there is no concern
       * about it being stale, and the cache-busting can be skipped.
       */
      dontCacheBustUrlsMatching: /\.\w{8}\./,
      filename: 'service-worker.js',
      logger(message) {
        if (message.indexOf('Total precache size is') === 0) {
          // This message occurs for every build and is a bit too noisy.
          return;
        }
        if (message.indexOf('Skipping static resource') === 0) {
          /**
           * This message obscures real errors so we ignore it.
           * Link for reference: https://github.com/facebookincubator/create-react-app/issues/2612
           */
          return;
        }
        console.log(message);
      },
      minify: true,
      // For unknown URLs, fallback to the index page
      navigateFallback: publicUrl + '/index.html',
      // Ignores URLs starting from /__ (useful for Firebase):
      // https://github.com/facebookincubator/create-react-app/issues/2237#issuecomment-302693219
      navigateFallbackWhitelist: [/^(?!\/__).*/],
      // Don't precache sourcemaps (they're large) and build asset manifest:
      staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
    }),
    /**
     * Moment.js is an extremely popular library that bundles large locale files
     * by default due to how Webpack interprets its code. This is a practical
     * solution that requires the user to opt into importing specific locales.
     */
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
};
