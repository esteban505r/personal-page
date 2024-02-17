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
    chainWebpack: config => {
        config.module.rule('vue').use('vue-loader').tap(args => {
            args.compilerOptions.whitespace = 'preserve';
        });
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
        ]
    }
};
