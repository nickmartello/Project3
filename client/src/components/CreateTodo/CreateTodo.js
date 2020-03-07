import React, { Component } from "react";
import axios from "axios";
import "./CreateTodo.css";

class CreateTodo extends Component {
  state = {
    day: "",
    title: "",
    category: "",
    description: "",
    time: Number,
    duration: Number
  };
  onChangeTodoDay = e => {
    this.setState({
      day: e.target.value
    });
  };
  onChangeTodoTitle = e => {
    this.setState({
      title: e.target.value
    });
  };
  onChangeTodoCategory = e => {
    this.setState({
      category: e.target.value
    });
  };
  onChangeTodoDescription = e => {
    this.setState({
      description: e.target.value
    });
  };
  onChangeTodoTime = e => {
    this.setState({
      time: e.target.value
    });
  };
  onChangeTodoDuration = e => {
    this.setState({
      duration: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();

    console.log(`Submitted`);
    console.log(`Title: ${this.state.title}`);
    console.log(`Category: ${this.state.category}`);
    console.log(`Description: ${this.state.description}`);
    console.log(`Time: ${this.state.time}`);
    console.log(`Duration: ${this.state.duration}`);

    const newTodo = {
      day: this.state.day,
      title: this.state.title,
      category: this.state.category,
      duration: this.state.duration,
      description: this.state.description,
      time: this.state.time
    };

    axios
      .post("http://localhost:4000/todos/add", newTodo)
      .then(res => console.log(res.data));

    this.setState({
      day: "",
      title: "",
      category: "",
      description: "",
      time: Number,
      duration: Number
    });
  };

  render() {
    return (
      <div className="formContainer">
        <div style={{ marginTop: 10 }}>
          <h3 className="header">Create New Todo</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-row align-items-center">
              <div className="col-auto my-1">
                <label className="mr-sm-2 header" for="inlineFormCustomSelect">
                  Day
                </label>
                <select
                  className="custom-select mr-sm-2"
                  id="inlineFormCustomSelect"
                  value={this.state.day}
                  onChange={this.onChangeTodoDay}
                >
                  <option selected>Please Select a Day</option>
                  <option value="sun">Sunday</option>
                  <option value="mon">Monday</option>
                  <option value="tue">Tuesday</option>
                  <option value="wed">Wednesday</option>
                  <option value="thu">Thursday</option>
                  <option value="fri">Friday</option>
                  <option value="sat">Saturday</option>
                </select>
              </div>
            </div>
            <div className="col-auto form-group">
              <label className="header">Title: </label>
              <input
                type="text"
                className="form-control"
                value={this.state.title}
                onChange={this.onChangeTodoTitle}
              />
            </div>
            <div className="col-auto form-group">
              <label className="header">Description: </label>
              <input
                type="text"
                className="form-control"
                value={this.state.description}
                onChange={this.onChangeTodoDescription}
              />
            </div>
            <div className="col-auto my-1">
              <label className="mr-sm-2 header" for="inlineFormCustomSelect">
                Time
              </label>
              <select
                className="custom-select mr-sm-2"
                id="inlineFormCustomSelect"
                value={this.state.time}
                onChange={this.onChangeTodoTime}
              >
                <option selected>Time</option>
                <option value="24">12 AM</option>
                <option value="1">1 AM</option>
                <option value="2">2 AM</option>
                <option value="3">3 AM</option>
                <option value="4">4 AM</option>
                <option value="5">5 AM</option>
                <option value="6">6 AM</option>
                <option value="7">7 AM</option>
                <option value="8">8 AM</option>
                <option value="9">9 AM</option>
                <option value="10">10 AM</option>
                <option value="11">11 AM</option>
                <option value="12">12 AM</option>
                <option value="13">1 PM</option>
                <option value="14">2 PM</option>
                <option value="15">3 PM</option>
                <option value="16">4 PM</option>
                <option value="17">5 PM</option>
                <option value="18">6 PM</option>
                <option value="19">7 PM</option>
                <option value="20">8 PM</option>
                <option value="21">9 PM</option>
                <option value="22">10 PM</option>
                <option value="23">11 PM</option>
              </select>
            </div>
            <div className="col-auto form-group">
              <label  className="header">Duration (Hours): </label>
              <input
              placeholder="Whole Numbers, e.g. '5'"
                type="text"
                className="form-control"
                value={this.state.duration}
                onChange={this.onChangeTodoDuration}
              />
            </div>
            <div className="col-auto my-1">
              <label className="mr-sm-2 header" for="inlineFormCustomSelect">
                Category
              </label>
              <select
                className="custom-select mr-sm-2"
                id="inlineFormCustomSelect"
                value={this.state.category}
                onChange={this.onChangeTodoCategory}
              >
                <option selected>Please Choose a Category</option>
                <option value="Work">Work</option>
                <option value="Fun">Fun</option>
                <option value="Chores">Chores</option>
                <option value="Family">Family</option>
                <option value="Sleep">Sleep</option>
                <option value="Unknown">Unknown</option>
              </select>
            </div>
            <div className=" col-auto form-group">
              <input
                type="submit"
                value="Create Todo"
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateTodo;
