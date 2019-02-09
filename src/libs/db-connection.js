const mongoose = require('mongoose');
const { DB_HOST, DB_PORT, DB_NAME } = require('./config');
const DB_URI = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

let db;

module.exports = function connection() {
    if (!db) {
        db = mongoose.connect(DB_URI, { useNewUrlParser: true });
    }

    return db;
}