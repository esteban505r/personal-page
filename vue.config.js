const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    pages: {
        index: {
            entry: 'src/index.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    publicPath: process.env.NODE_ENV === 'production' ? '/production-sub-path/' : '/',
    outputDir: 'dist',
    assetsDir: 'assets',
    productionSourceMap: false,
    css: {
        extract: process.env.NODE_ENV === 'production',
        sourceMap: false,
        loaderOptions: {}
    },
    devServer: {
        hot: true,
        compress: true,
        open: true,
        client: {
         
            logging: 'warn'
        }
    },
    lintOnSave: process.env.NODE_ENV !== 'production',
    chainWebpack: config => {
        config.module.rule('vue').use('vue-loader').tap(args => {
            args.compilerOptions.whitespace = 'preserve';
        });

        if (process.env.NODE_ENV === 'production') {
            config.module.rule('css').oneOf('vue').use('mini-css-extract-plugin-loader').loader(MiniCssExtractPlugin.loader).end();
            config.module.rule('css').oneOf('normal').use('mini-css-extract-plugin-loader').loader(MiniCssExtractPlugin.loader).end();
        }
    },
    configureWebpack: {
        plugins: [
            new CopyWebpackPlugin({
                patterns: [
                    { from: 'src/assets/fonts', to: 'assets/fonts' },
                    { from: 'src/assets/icons', to: 'assets/icons' },
                    { from: 'src/assets/img', to: 'assets/img' }
                ]
            }),
            ...(process.env.NODE_ENV === 'production' ? [new MiniCssExtractPlugin({
                filename: "[name].css",
                chunkFilename: "[id].css",
            })] : [])
        ]
    }
};
