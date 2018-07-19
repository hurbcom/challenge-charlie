var path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    entry: {
        bundle: "./src/index.js"
    },
    mode: "production",
    output: {
        filename: "./js/[name].js",
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/"
    },
    devServer: {
        historyApiFallback: true,
        contentBase: "dist",
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.s?[ac]ss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: "css-loader"
                        },
                        {
                            loader: "sass-loader"
                        }
                    ]
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: "css-loader" // translates CSS into CommonJS
                        },
                        {
                            loader: "less-loader" // compiles Less to CSS
                        }
                    ]
                })
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "index.html"
                        }
                    },
                    {
                        loader: "extract-loader"
                    },
                    {
                        loader: "html-loader",
                        options: {
                            attrs: ["img:src"]
                        }
                    }
                ]
            },
            {
                test: /\.(jpg|gif|png|svg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "img/[name].[ext]"
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            publicPath: "../fonts/",
                            outputPath: "fonts/"
                        }
                    }
                ]
            }
        ]
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                uglifyOptions: {
                    compress: false, // Diminui um pouco o tamanho do bundle
                    ecma: 6,
                    mangle: false
                    // sourceMap: {
                    //   filename: "out.js",
                    //   url: "out.js.map"
                    // }
                    // mangle: {
                    //   // mangle options
                    //   eval: false,
                    //   keep_classnames: false,
                    //   keep_fnames: false,
                    //   reserved: [],
                    //   toplevel: false,
                    //   safari10: false,
                    //   // properties: {
                    //   //     // mangle property options
                    //   // }
                    // },
                }
                // sourceMap: true
            })
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "./css/style.css"
            // disable: false,
            // allChunks: true
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require("cssnano"),
            cssProcessorOptions: {
                safe: true,
                discardComments: { removeAll: true }
            },
            canPrint: true
        })
        // new HtmlWebpackPlugin({
        //   inject: false,
        //   hash: true,
        //   template: './src/index.html',
        //   filename: 'index.html'
        // })
    ]
};
