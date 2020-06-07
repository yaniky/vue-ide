const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.base.js");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
// const PrerenderSPAPlugin = require('prerender-spa-plugin')
// const preRender = require("./preRenderPath.js");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();

const config = merge(common, {
    mode: "production",
    module: {},
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerPort: 8888
        }),
        // new PrerenderSPAPlugin({
        //     staticDir: path.join(__dirname, '../dist'),
        //     routes: preRender.waitPage,
        //     captureAfterTime: 10000
        // }),
        // new PrerenderSPAPlugin({
        //     staticDir: path.join(__dirname, '../dist'),
        //     routes: preRender.immediatePage,
        //     captureAfterTime: 1
        // })
    ],
    output: {
        filename: "js/[name].[hash].js",
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/"
    },
    optimization: {
        minimizer: [
            new TerserPlugin(),
            new OptimizeCSSAssetsPlugin()
        ]
    }
});

module.exports = smp.wrap(config);