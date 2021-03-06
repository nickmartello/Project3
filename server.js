const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');
const mongoose = require('mongoose')
const todoRoutes = express.Router();
const PORT = 4000;

let Todo = require('./todo.model');


// Bodyparser middleware
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/todos', {useNewUrlParser: true})
const connection = mongoose.connection;

connection.once('open', function(){
  console.log('MongoDB data connection established succesfully')
})

todoRoutes.route('/').get(function(req, res){
    Todo.find(function(err, todos){
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
        }
    });
});

todoRoutes.route('/:id').get(function(req, res){
    let id = req.params.id;
    Todo.findById(id, function(err, todo){
        res.json(todo);
    });
});

todoRoutes.route('/add').post(function(req, res){
    let todo = new Todo(req.body);
    todo.save()
        .then(event => {
            res.status(200).json({'event': 'event added succesfully'})
        })
        .catch(err => {
            res.status(400).send('adding new event failed')
        });
});

todoRoutes.route('/update/:id').post(function(req, res){
    Todo.findById(req.params.id, function(err, todo){
        if (!todo)
            res.status(404).send('data is not found');
        else
            todo.day = req.body.day;
            todo.title = req.body.title;
            todo.category = req.body.category;
            todo.description = req.body.description;
            todo.time = req.body.time;
            todo.duration = req.body.duration;


            todo.save().then(todo => {
                res.json('Schedule Updated');
            })
            .catch(err => {
                res.status(400).send('Update not possible');
            });
    });
});

app.use('/todos', todoRoutes);
  
app.listen(PORT, function(){
  console.log("Server is running on Port: " + PORT);
});