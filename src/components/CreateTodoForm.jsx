import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

import SearchBar from './SearchBar';
import { connect } from 'react-redux';
import { createTodo, getTodos } from '../actions';
class CreateTodoForm extends Component {
    constructor(props) {
        super(props)
        this.state={redirect:false}
        this.onTodoSubmit = this.onTodoSubmit.bind(this);
    }
    async componentDidMount() {
        if (this.props.todos.list === null) {
          await this.props.getTodos();
        }
    }
    async onTodoSubmit(term) {
        await this.props.createTodo({ title: term, completed: false });
        this.setState({redirect:true});
    }
    render() {
        if(this.state.redirect) {
        return <Redirect to='/' />
        }
        return(
            <div>
                <SearchBar onSubmit={this.onTodoSubmit} />
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = {
    createTodo:createTodo,
    getTodos:getTodos,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTodoForm);