const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}

const dev = process.env.NODE_ENV === 'development'

const port = 8000; // dev port

module.exports = {
    outputDir: 'dist',
    assetsDir: 'static',
    filenameHashing: true,
    devServer: {
        hot: true,
        historyApiFallback: true,
        port,
        overlay: {
            warnings: false,
            errors: true,
        }
    },
    // 自定义webpack配置
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('src'),
            },
        },
    },
};