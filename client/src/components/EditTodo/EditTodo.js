import React, { Component } from 'react';
import axios from 'axios';

class EditTodo extends Component {
  state = {
    todo_event: '',
    todo_category: '',
    todo_completed: false
  }

  componentDidMount() {
    axios.get('http://localhost:5001/todos/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          todo_event: response.data.todo_event,
          todo_category: response.data.todo_category,
          todo_completed: response.data.todo_completed
        })
      })
      .catch(function (error) {
        console.log(error)
      })
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

  onChangeTodoCompleted = e => {
    this.setState({
      todo_completed: !this.state.todo_completed
    });
  }

  onSubmit = e => {
    e.preventDefault();
    const obj = {
      todo_event: this.state.todo_event,
      todo_category: this.state.todo_category,
      todo_completed: this.state.todo_completed
    };
    axios.post('http://localhost:5001/todos/update/' + this.props.match.params.id, obj)
      .then(res => console.log(res.data));

    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <h3>Update Todo</h3>
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
          <div>
          </div>
          <div>
            <br />
            <div className="form-group">
              <input type="submit" value="Update Todo" className="btn btn-primary" />
            </div>
          </div>
        </form>
      </div>
    )
  }
}
export default EditTodo;