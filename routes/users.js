//var express = require('express');
//var fs = require('fs');
//var router = express.Router();
//var multipart = require('connect-multiparty');
//var multipartMiddleware = multipart();
///* GET users listing. */
//router.post('/', multipartMiddleware, function (req, res) {
//    console.log(req.files);
//    fs.readFile(req.files.image.path, function (err, data) {
//
//        var imageName = req.files.image.name;
//
//        console.log(imageName);
//        console.log(data);
//        /// If there's an error
//        if (!imageName) {
//
//            console.log("There was an error");
//            res.redirect("/");
//            res.end();
//
//        } else {
//
//            var newPath = __dirname + "/../uploads/fullsize/" + imageName;
//            console.log(newPath)
//            /// write file to uploads/fullsize folder
//            fs.writeFile(newPath, data, function (err) {
//
//                /// let's see it
//                res.redirect("/uploads/fullsize/" + imageName);
//
//            });
//        }
//    });
//});
//
//module.exports = router;
'use strict';
exports.init = function (req, res) {
    var fs = require('fs');
    fs.readFile(req.files.image.path, function (err, data) {
        var imageName = req.files.image.name;
        if (!imageName) {

            console.log("There was an error");
            res.redirect("/");
            res.end();

        } else {

            var newPath = __dirname + "/../uploads/fullsize/" + imageName;
            console.log(newPath)
            /// write file to uploads/fullsize folder
            fs.writeFile(newPath, data, function (err) {

                res.redirect("/download/" + imageName);

            });
        }
    });
};
exports.download = function (req, res) {
    var fs = require('fs');
    var newPath = __dirname + "/../uploads/fullsize/" + req.params.filename;
    fs.readFile(newPath, function (err, data) {
        if (err)
            throw err;
        res.write(data);
        res.end();
    });
};
