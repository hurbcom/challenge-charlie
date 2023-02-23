import * as proxy from 'http-proxy-middleware';

module.exports = function (app) {
  app.use(
    proxy('/HPImageArchive.aspx', {
      target: 'https://www.bing.com',
      secure: false,
      changeOrigin: true,
    })
  );
};
