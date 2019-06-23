import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import _ from 'lodash';


export default class DeleteTodo extends Component {

    constructor(props) {
        super(props);

        this.state = {todos: []};
    }
    componentDidMount() {
        axios.get('http://localhost:4000/todos/')
            .then(response => {
                this.setState({todos: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    deleteTodo = () => {
        this.state.todos.filter(function(todoList, i) {
            return todoList._id === id;
        });
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Delete Todo</h3>
                <div className="form-group">
                            <h4>{'Are Sure You Want to Delete?'}</h4>
                            <Link value="Delete Todo" className="btn btn-primary" onClick = {this.deleteTodo(props.todo._id)} />
                 </div>
            </div>
        )
    }
}