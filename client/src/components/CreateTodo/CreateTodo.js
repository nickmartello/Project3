import React, { Component } from 'react';
import axios from 'axios'

class CreateTodo extends Component {
  state = {
    day: '',
    title: '',
    category: '',
    description: '',
    time: '',
    completed: false
  }
  onChangeTodoDay = e => {
    this.setState({
      day: e.target.value
    });
  }
  onChangeTodoTitle = e => {
    this.setState({
      title: e.target.value
    });
  }
  onChangeTodoCategory = e => {
    this.setState({
      category: e.target.value
    });
  }
  onChangeTodoDescription = e => {
    this.setState({
      description: e.target.value
    });
  }
  onChangeTodoTime = e => {
    this.setState({
      time: e.target.value
    });
  }

  onSubmit = e => {
    e.preventDefault();

    console.log(`Form Submitted`);
    console.log(`Todo Title: ${this.state.title}`)
    console.log(`Todo Category: ${this.state.category}`)
    console.log(`Todo Description: ${this.state.description}`)
    console.log(`Todo Time: ${this.state.time}`)
    console.log(`Todo Completed: ${this.state.completed}`)

    const newTodo = {
      day: this.state.day,
      title: this.state.title,
      category: this.state.category,
      completed: this.state.completed,
      description: this.state.description,
      time: this.state.time
    }

    axios.post('http://localhost:5001/todos/add', newTodo)
      .then(res => console.log(res.data));

    this.setState({
      day: '',
      title: '',
      category: '',
      description: '',
      time: '',
      completed: false
    })
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Create New Todo</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-row align-items-center">

            <div className="col-auto my-1">
              <label className="mr-sm-2" for="inlineFormCustomSelect">Days</label>
              <select className="custom-select mr-sm-2" id="inlineFormCustomSelect"
                value={this.state.day}
                onChange={this.onChangeTodoDay}>
                <option selected>Choose Or Die</option>
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
          <div className="form-group">
            <label>Title: </label>
            <input type="text"
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeTodoTitle}
            />
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input type="text"
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeTodoDescription}
            />
          </div>
          <div className="form-group">
            <label>Time: </label>
            <input type="text"
              className="form-control"
              value={this.state.time}
              onChange={this.onChangeTodoTime}
            />
          </div>
          <div className="col-auto my-1">
              <label className="mr-sm-2" for="inlineFormCustomSelect">Category</label>
              <select className="custom-select mr-sm-2" id="inlineFormCustomSelect"
                value={this.state.category}
                onChange={this.onChangeTodoCategory}>
                <option selected>Sam Loves Categoriew</option>
                <option value="Work">Work</option>
                <option value="Fun">Fun</option>
                <option value="Chores">Chores</option>
                <option value="Family">Family</option>
                <option value="Sleep">Sleep</option>
                <option value="Unknown">Unknown</option>
              </select>
            </div>
          <div className="form-group">
            <input type="submit" value="Create Todo" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}

export default CreateTodo;