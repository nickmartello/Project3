import React, { Component } from 'react';
import axios from 'axios';

class EditTodo extends Component {
  state = {
    title: '',
    category: '',
    completed: false
  }

  componentDidMount() {
    axios.get('http://localhost:5001/todos/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          title: response.data.title,
          category: response.data.category,
          completed: response.data.completed
        })
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  onChangeTitle = e => {
    this.setState({
      title: e.target.value
    });
  }

  onChangeCategory = e => {
    this.setState({
      category: e.target.value
    });
  }

  onChangeCompleted = e => {
    this.setState({
      completed: !this.state.completed
    });
  }

  onSubmit = e => {
    e.preventDefault();
    const obj = {
      title: this.state.title,
      category: this.state.category,
      completed: this.state.completed
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
              value={this.state.title}
              onChange={this.onChangeTitle}
            />
          </div>
          <div className="form-group">
            <label>Category: </label>
            <input type="text"
              className="form-control"
              value={this.state.category}
              onChange={this.onChangeCategory}
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