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
    if(this.props.todos.todos === null || this.props.todos.todos === undefined) {
      return <div> Loading List... </div>
    }
      return this.renderTodos(this.props);
}
 renderTodos(props) {
  return props.todos.todos.map( todo => {
  return <Todo todo = {todo} />
  })
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
