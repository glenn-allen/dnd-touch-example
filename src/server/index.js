import express from 'express';
import path from 'path';
import serveStatic from 'serve-static';

// Initialisation
import handleServerRendering from './handleServerRendering';

const staticPath = path.resolve(__dirname, '../../dist');

module.exports = (callback) => {
    const app = express();
    app.set('env', 'development');
    app.set('host', '0.0.0.0');
    app.set('port', 3000);
    app.use(serveStatic(staticPath, {
        maxAge: 365 * 24 * 60 * 60,
    }));
    app.use(handleServerRendering);

    const server = require('http').createServer(app);

    return server.listen(app.get('port'), () => callback(app));
};
