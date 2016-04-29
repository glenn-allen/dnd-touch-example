import path from 'path';
import webpack from 'webpack';

const host = '0.0.0.0';
const port = 3001;
const dist = path.resolve(__dirname, '../dist/js');

module.exports = {
    devtool: 'source-map',
    entry: [
        `webpack-dev-server/client?http://${host}:${port}`,
        'webpack/hot/only-dev-server',
        './src/client/index.js',
    ],
    output: {
        filename: 'bundle.js',
        chunkFilename: '[name].bundle.js',
        path: dist,
        publicPath: `http://${host}:${port}/js/`,
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loaders: ['babel?cacheDirectory'] },
        ],
    },
    plugins: [

        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
                BROWSER: JSON.stringify(true),
            },
        }),
    ],

};
