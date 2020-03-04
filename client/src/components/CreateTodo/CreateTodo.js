import React, { Component } from 'react';
import axios from 'axios'

class CreateTodo extends Component {
  state = {
    todo_event: '',
    todo_category: '',
    todo_completed: false
  }

  onChangeTodoEvent = e => {
    this.setState({
      todo_event: e.target.value
    });
  }

  onChangeTodoCategory = e => {
    this.setState({
      todo_category: e.target.value
    });
  }

  onSubmit = e => {
    e.preventDefault();

    console.log(`Form Submitted`);
    console.log(`Todo Event: ${this.state.todo_event}`)
    console.log(`Todo Category: ${this.state.todo_category}`)
    console.log(`Todo Completed: ${this.state.todo_completed}`)

    const newTodo = {
      todo_event: this.state.todo_event,
      todo_category: this.state.todo_category,
      todo_completed: this.state.todo_completed
    }

    axios.post('http://localhost:5001/todos/add', newTodo)
      .then(res => console.log(res.data));

    this.setState({
      todo_event: '',
      todo_category: '',
      todo_completed: false

    })
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Create New Todo</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Event: </label>
            <input type="text"
              className="form-control"
              value={this.state.todo_event}
              onChange={this.onChangeTodoEvent}
            />
          </div>
          <div className="form-group">
            <label>Category: </label>
            <input type="text"
              className="form-control"
              value={this.state.todo_category}
              onChange={this.onChangeTodoCategory}
            />
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