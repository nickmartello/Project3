import React, { Component } from 'react';
import axios from 'axios';


class EditTodo extends Component {
  state = {
    day: '',
    title: '',
    category: '',
    description: '',
    time: Number,
    duration: Number
  }

  componentDidMount() {
    axios.get('http://localhost:5001/todos/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          day: response.data.day,
          title: response.data.title,
          category: response.data.category,
          description: response.data.description,
          time: response.data.time,
          duration: response.data.duration
        })
      })
      .catch(function (error) {
        console.log(error)
      })
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
  onChangeduration = e => {
    this.setState({
      duration: this.state.duration
    });
  }

  onSubmit = e => {
    e.preventDefault();
    const obj = {
      title: this.state.title,
      category: this.state.category,
      duration: this.state.duration
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
            <label>Title: </label>
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