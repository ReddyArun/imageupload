'use strict';

exports = module.exports = function (app, mongoose) {
//  //then regular docs
require('./schema/File')(app, mongoose);
};