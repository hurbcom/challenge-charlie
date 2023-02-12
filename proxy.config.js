module.exports = {
    '/api': {
      target: 'http://www.bing.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR'
      }
    }
  };

