import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getTodo } from '../actions';
class Todo extends Component {
  componentDidMount() {
    // Hier wird die Action ausgelöst,
    // die das To-Do lädt
    //console.log(this.props.match.params)
    var id = parseInt(this.props.match.params.id);
    console.log(id);
    this.props.getTodo(id);
    //console.log('Lade Todo mit ID ' + id);
  }

  render() {
    if (this.props.todo === null || this.props.todo === undefined) {
      return <div>Loading...</div>;
    }

    return <div>
      <div>{this.props.todo.id}</div>
      <div>{this.props.todo.title}</div>
    </div>;
  }
}

const mapStateToProps = (state) => {
  
  console.log(state.todo);
  return {
    todo: state.todo
  }
}
const mapDispatchToProps = {
  getTodo: getTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
