module.exports = {

  devServer: {
    contentBase: path.join(__dirname, './src/public'),
    compress: true,
    port: 5173,

    proxy: {
      '/api': {
        target: 'http://www.bing.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR'
        }
      }
    }
  }
};
