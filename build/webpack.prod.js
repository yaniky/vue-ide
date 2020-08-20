const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.base.js");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const PrerenderSPAPlugin = require('prerender-spa-plugin')
// const preRender = require("./preRenderPath.js");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();

const config = merge(common, {
    mode: "production",
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "./css/"
                        }
                    },
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerPort: 8888
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].[hash].css",
            chunkFilename: "css/[id].[hash].css"
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