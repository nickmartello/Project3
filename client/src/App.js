import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from "./components/CreateTodo/CreateTodo.js";
import EditTodo from "./components/EditTodo/EditTodo.js";
import TodosList from "./components/TodoList/TodoList.js";
import Navbar from "./components/Navbar/Navbar.js"
import Schedule from "./components/Schedule/Schedule.js"

class App extends Component {
  render() {
    return ( 
      <container className="body">
      <Router>
        <Route path="/" component={Navbar} />
        <Route path="/" component={Schedule} />
        <Route path="/edit/:id" component={EditTodo}/>
        <Route path="/create" component={CreateTodo}/>
      </Router>
      </container>
  );
}
}


export default App;
