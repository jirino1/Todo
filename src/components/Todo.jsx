import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { getTodo, getTodos } from '../actions';

class Todo extends Component {
  constructor(props){
    super(props);
    this.state={redirect:false}
  }
  async componentDidMount() {
    if (this.props.todos.list === null) {
      await this.props.getTodos();
    }

    // Hier wird die Action ausgelöst,
    // die das To-Do lädt
    const { id } = this.props.match.params;
    this.props.getTodo(id);
  }

  render() {
    const { todo } = this.props.todos;
    if(this.state.redirect){
      return <Redirect to='/'/>
    }

    if (todo === null) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <div className="ui header">
          {todo.title}
          <div className="ui label">{todo.completed ? "erledigt" : "noch nicht erledigt"}</div>
        </div>
        <div className="ui button" style={{margin:'10px'}} onClick={()=>{this.setState({redirect:true})}}>Zurück zur Liste</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = {
  getTodo: getTodo,
  getTodos: getTodos,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
