const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Todo = new Schema({
    day:{
        type: String
    },
    title: {
        type: String
    },
    category: {
        type: String
    },
    description: {
        type: String
    },
    time: {
        type: Number
    },
    duration: {
        type: Number
    },
});

module.exports = mongoose.model('Todo', Todo);