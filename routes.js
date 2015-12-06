'use strict';
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

exports = module.exports = function (app) {

    app.get('/', require('./routes/index').init);
    app.post('/upload', multipartMiddleware, require('./routes/users').init);
    app.get('/download/:filename', multipartMiddleware, require('./routes/users').download);
};