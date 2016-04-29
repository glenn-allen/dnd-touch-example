require('babel-register');
require('./webpack/server')();
const serverIndex = require('./src/server');

serverIndex(function (app) {
    console.log('Express %s server listening on %s:%s', app.get('env'), app.get('host'), app.get('port'));
});
