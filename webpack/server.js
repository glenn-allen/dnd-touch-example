import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import config from './dev.config';

const host = '0.0.0.0';
const port = 3001;

const options = {
    contentBase: `https://${host}:${port}`,
    hot: true,
    inline: true,
    lazy: false,
    publicPath: config.output.publicPath,
    stats: {
        colors: true,
        chunks: false,
    },
};

module.exports = () => {
    const compiler = webpack(config);
    const webpackDevServer = new WebpackDevServer(compiler, options);

    return webpackDevServer.listen(port, host, () => {
        console.log('Webpack development server listening on %s:%s', host, port);
    });
};
