const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = async function () {

    let Task = Schema({
        title: String,
        description: String,
        status: Boolean
    });

    const db = await require('../libs/db-connection')();
    return db.model('tasks', Task);
}