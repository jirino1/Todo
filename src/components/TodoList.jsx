import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getTodos } from '../actions';
import Todo from './Todo';

class TodoList extends Component {
  componentDidMount() {
    this.props.getTodos();
  }

  render() {
    console.log(this.props);
    if(this.props.todos === null || this.props.todos === undefined) {
      return <div> Loading List... </div>
    }
    else{ 
      return this.renderTodos(this.props);
  }
}
 renderTodos(props) {
  return props.todos.map((todo) => (
  <Todo todo = {todo} />
  ))
}
}
const mapStateToProps = state => {
  return { todos: state.todos };
};

const mapDispatchToProps = {
  getTodos: getTodos,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
