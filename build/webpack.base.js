const path = require("path");
const webpack = require("webpack");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const env = require("../config");
const tools = require("../config/tools");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const appEnv = tools.filterAppEnv(env);
const HappyPack = require("happypack");

module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            esModule: false,
                            limit: 10000,
                            fallback: {
                                loader:'file-loader',
                                options: {
                                    publicPath: "/",
                                    name: 'assets/images/[name].[ext]'
                                }
                            }
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                 use: {
                     loader: "babel-loader?cacheDirectory=true"
                 },
                //use: "happypack/loader?id=happyBabel"
            },
            {
                test: /\.(eot|ttf|woff|woff2)\w*/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 100000,
                            fallback: {
                                loader:'file-loader',
                                options: {
                                    publicPath: "/",
                                    name: 'assets/font/[name].[ext]'
                                }
                            }
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "../src")
        },
        extensions: [".js", ".vue"]
    },
    plugins: [
        new VueLoaderPlugin(),
        // new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            appGlobal: appEnv
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "static"
                }
            ]
        })
        //new HappyPack({
        //    id: "happyBabel",
        //    loaders: [{
        //        loader: "babel-loader?cacheDirectory=true"
        //    }]
        //})
    ],
    //cache: {
    //    type: "filesystem",
    //    buildDependencies: {
    //        config: [__filename], // 当构建以来的config文件内容发生变化，缓存失效
    //    },
    //    name: ""
    //}
};