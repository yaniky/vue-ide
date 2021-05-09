const { merge } = require("webpack-merge");
const common = require("./webpack.base.js");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

let local;

try {
    local = require("./local.env");
} catch (e) {
    // do nothing
}

const config = merge(common, {
    target: "web",
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        contentBase: "../dist",
        port: local.port || 3000,
        disableHostCheck: true,
        host: local.host || "0.0.0.0",
        historyApiFallback: true
    },
    output: {
        filename: "js/[name].[contenthash].js",
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../public/index.html")
        })
    ]
});

module.exports = config;
