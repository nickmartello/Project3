import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

import CreateTodo from "./components/CreateTodo/CreateTodo.js";
import EditTodo from "./components/EditTodo/EditTodo.js";
import Navbar from "./components/Navbar/Navbar.js";
import Schedule from "./components/Schedule/Schedule.js";
import Dashboard from "./components/Dashboard/Dashboard.js";
import PlanDetail from "./components/Schedule/PlanDetail.js"

class App extends Component {
  render() {
    return (
      <div className="body">
        <Router>
          <Route path="/" component={Navbar} />
          <Route exact path="/" component={Dashboard} />
          <Route path="/schedule" component={Schedule} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
          <Route path="/plan/:id" component={PlanDetail} />
        </Router>
      </div>
    );
  }
}

export default App;
