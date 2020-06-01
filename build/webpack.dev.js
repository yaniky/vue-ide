const merge = require("webpack-merge");
const common = require("./webpack.base.js");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();

let local;

try {
    local = require("./local.env");
} catch (e) {
    // do nothing
}

const config = merge(common, {
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
        filename: "js/[name].[hash].js",
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/"
    },
    module: {},
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../public/index.html")
        })
    ]
});

module.exports = smp.wrap(config);