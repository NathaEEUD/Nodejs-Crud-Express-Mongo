const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('../libs/db-connection')();

module.exports = function () {

    let Task = Schema({
        title: String,
        description: String,
        status: Boolean
    });

    return mongoose.model('tasks', Task);
}