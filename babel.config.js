module.exports = function (api) {
    api.cache(true);
    return {
        presets: [
            [
                "@babel/preset-env",
                {
                    useBuiltIns: "usage",
                    corejs: "3"
                }
            ]
        ],
        plugins: [
            "@babel/plugin-transform-runtime",
            "@babel/plugin-transform-regenerator",
            "syntax-dynamic-import"
        ]
    };
};