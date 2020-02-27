const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');
const mongoose = require('mongoose')
const PORT = 4000;


// Bodyparser middleware
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/todos', {useNewUrlParser: true})
const connection = mongoose.connection;

connection.once('open', function(){
  console.log('MongoDB data connection established succesfully')
})
  
app.listen(PORT, function(){
  console.log("Server is running on Port: " + PORT);
});