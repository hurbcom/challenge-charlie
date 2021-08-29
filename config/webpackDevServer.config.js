'use strict';

const errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware');
const noopServiceWorkerMiddleware = require('react-dev-utils/noopServiceWorkerMiddleware');
const config = require('./webpack.config.dev');
const paths = require('./paths');

const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
const host = process.env.HOST || '0.0.0.0';

module.exports = function (proxy, allowedHost) {
  return {
    /**
     * WebpackDevServer 2.4.3 introduced a security fix that prevents remote
     * websites from potentially accessing local content through DNS rebinding:
     * https://github.com/webpack/webpack-dev-server/issues/887
     * https://medium.com/webpack/webpack-dev-server-middleware-security-issues-1489d950874a
     */    
    disableHostCheck:
    !proxy || process.env.DANGEROUSLY_DISABLE_HOST_CHECK === 'true',
    // Enable gzip compression of generated files.
    compress: true,
    // Silence WebpackDevServer's own logs since.
    // It will still show compile warnings and errors with this setting.
    clientLogLevel: 'none',
    /**
     * By default WebpackDevServer serves physical files from current directory
     * in addition to all the virtual build products that it serves from memory.
     * This is confusing because those files won’t automatically be available in
     * production build folder unless we copy them. However, copying the whole
     * project directory is dangerous because we may expose sensitive files.
     * Instead, we establish a convention that only files in `public` directory
     * get served. The build script will copy `public` into the `build` folder.
     * In `index.html`, you can get URL of `public` folder with %PUBLIC_URL%:
     * <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
     * In JavaScript code, you can access it with `process.env.PUBLIC_URL`.
     */
  
    contentBase: paths.appPublic,
    // By default files from `contentBase` will not trigger a page reload.
    watchContentBase: true,
    /**
     * Enable hot reloading server. It will provide /sockjs-node/ endpoint
     * for the WebpackDevServer client so it can learn when the files were
     * updated. The WebpackDevServer client is included as an entry point
     * in the Webpack development configuration.
     */
    hot: true,
    publicPath: config.output.publicPath,
    quiet: true,
    // This avoids CPU overload on some systems.
    watchOptions: {
      ignored: /node_modules/,
      poll: true
    },
    // Enable HTTPS if the HTTPS environment variable is set to 'true'
    https: protocol === 'https',
    host: host,
    overlay: false,
    historyApiFallback: {
      disableDotRule: true,
    },
    public: allowedHost,
    proxy,
    setup(app) {
      // This lets us open files from the runtime error overlay.
      app.use(errorOverlayMiddleware());
      app.use(noopServiceWorkerMiddleware());
    },
  };
};
