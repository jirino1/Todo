import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

import SearchBar from './SearchBar';
import { connect } from 'react-redux';
import { createTodo } from '../actions';
class CreateTodoForm extends Component {
    constructor(props) {
        super(props)
        this.state={todo:{name:"Name des Todos", done:false}, redirect:false}
    }
    onTodoSubmit = (term) => {
        this.setState({todo:{name:term, done:false}})
        createTodo(this.state.todo);
        this.setState({redirect:true});
    }
    render() {
        console.log(this.state.todo);
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
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTodoForm);