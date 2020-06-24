module.exports = {
  module: {
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'build.js',
    },
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {  
        test: /\.css$/,  
        use: ['style-loader', 'css-loader']  
      },      
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/fonts/'
            }
          }
        ]
      }
    ]
  },
  watch: true,
};