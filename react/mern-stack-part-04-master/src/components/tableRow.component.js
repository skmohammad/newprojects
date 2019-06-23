import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.get('http://localhost:4000/todos/delete/'+this.props.todo._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }
  render() {
    return (
        <tr>
        <td className={this.props.todo.todo_completed ? 'completed' : ''}>{this.props.todo.todo_description}</td>
        <td className={this.props.todo.todo_completed ? 'completed' : ''}>{this.props.todo.todo_responsible}</td>
        <td className={this.props.todo.todo_completed ? 'completed' : ''}>{this.props.todo.todo_priority}</td>
        <td className={this.props.todo.todo_completed ? 'completed' : ''}>{this.props.todo.todo_name}</td>
        <td>
            <Link to={"/edit/"+this.props.todo._id}>Edit</Link>
        </td>
        <td>
            <button onClick={this.delete()} className="btn btn-danger">Delete</button>
          </td>
    </tr>
    );
  }
}

export default TableRow;