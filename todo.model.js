const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Todo = new Schema({
    day:{
        type: String
    },
    title: {
        type: String
    },
    desc: {
        type: String
    },
    start: {
        type: Number
    },
    duration: {
        type: Number
    },
    category: {
        type: String
    }
});

module.exports = mongoose.model('Todo', Todo);