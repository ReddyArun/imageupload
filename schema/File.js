'use strict';

exports = module.exports = function (app, mongoose) {
    var mongooseFS = require('mongoose-fs');
    var fileSchema = mongoose.Schema({
        name: String,
        size: Number,
        creation_date: Date
    });

    fileSchema.plugin(mongooseFS, {keys: ['content', 'complement'], mongoose: mongoose});
    fileSchema.set('autoIndex', (app.get('env') === 'development'));
    app.db.model('File', fileSchema);
};
