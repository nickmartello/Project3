import React, { Component } from 'react';
import axios from 'axios'

class CreateTodo extends Component {
  state = {
    todo_day: '',
    todo_title: '',
    todo_category: '',
    todo_description: '',
    todo_time: '',
    todo_completed: false
  }

  onChangeTodoDay = e => {
    this.setState({
      todo_day: e.target.value
    });
  }
  onChangeTodoTitle = e => {
    this.setState({
      todo_title: e.target.value
    });
  }
  onChangeTodoCategory = e => {
    this.setState({
      todo_category: e.target.value
    });
  }
  onChangeTodoDescription = e => {
    this.setState({
      todo_description: e.target.value
    });
  }
  onChangeTodoTime = e => {
    this.setState({
      todo_time: e.target.value
    });
  }

  onSubmit = e => {
    e.preventDefault();

    console.log(`Form Submitted`);
    console.log(`Todo Day: ${this.state.todo_day}`)
    console.log(`Todo Title: ${this.state.todo_title}`)
    console.log(`Todo Category: ${this.state.todo_category}`)
    console.log(`Todo Description: ${this.state.todo_description}`)
    console.log(`Todo Time: ${this.state.todo_time}`)
    console.log(`Todo Completed: ${this.state.todo_completed}`)

    const newTodo = {
      todo_day: this.state.todo_day,
      todo_title: this.state.todo_title,
      todo_category: this.state.todo_category,
      todo_description: this.state.todo_description,
      todo_time: this.state.todo_time,
      todo_completed: this.state.todo_completed
    }

    axios.post('http://localhost:5001/todos/add', newTodo)
      .then(res => console.log(res.data));

    this.setState({
      todo_day: '',
      todo_title: '',
      todo_category: '',
      todo_description: '',
      todo_time: '',
      todo_completed: false
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
              <select 
                className="custom-select mr-sm-2"
                value={this.state.todo_day}
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
              value={this.state.todo_title}
              onChange={this.onChangeTodoTitle}
            />
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input type="text"
              className="form-control"
              value={this.state.todo_description}
              onChange={this.onChangeTodoDescription}
            />
          </div>
          <div className="form-group">
            <label>Time: </label>
            <input type="text"
              className="form-control"
              value={this.state.todo_time}
              onChange={this.onChangeTodoTime}
            />
          </div>
          <div className="col-auto my-1">
              <label className="mr-sm-2" for="inlineFormCustomSelect">Category</label>
              <select className="custom-select mr-sm-2" id="inlineFormCustomSelect"
                value={this.state.todo_category}
                onChange={this.onChangeTodoCategory}>
                <option selected>Sam Loves Categories</option>
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