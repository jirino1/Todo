import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTodos, markDone, deleteTodo } from '../actions';
import { Link, Redirect } from 'react-router-dom';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.toggleDone = this.toggleDone.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.state={redirect:false};
  }
  componentDidMount() {
    // TODO: Nur Laden wenn noch nicht vorhanden
    if (this.props.todos.list === null) {
      this.props.getTodos();
    }
  }

  renderTodos() {
    const { list } = this.props.todos;
      return (
        list.map(todo => {
          if(todo.completed) {
            return (
            <div style = {{paddingBottom: '10px', paddingLeft:'10px'}} key={todo.id} >
            <div className="ui left labeled button" tabIndex="0">
              <Link className="ui basic right pointing label" to={`/todos/${todo.id}`}>
              {todo.title}
              </Link>
              <div style = {{backgroundColor:'grey', color:'white'}} className="ui button" id={todo.id} onClick={this.toggleDone}>
                 Done
              </div>
            </div>
            </div>
          )
            }
          else {
            return (
              <div style = {{paddingBottom: '10px', paddingLeft:'10px'}} key={todo.id} >
              <div className="ui button" id={todo.id} onClick={this.deleteTodo}>
                  <i className="trash alternate outline icon"></i>
                </div>
              <div className="ui left labeled button" tabIndex="0">
                <Link className="ui basic right pointing label" to={`/todos/${todo.id}`}>
                {todo.title}
                </Link>
                <div className="ui button" id={todo.id} onClick={this.toggleDone}>
                   Done
                </div>
                
              </div>
              </div>
            )
          }
        })
      
    );
      }
    async deleteTodo(event) {
      const id = event.target.id;
      await this.props.deleteTodo(id);
    }
    async toggleDone(event) {
      const id = event.target.id;
      await this.props.markDone(id);
    }

  render() {
    console.log(this.props);

    const { list } = this.props.todos;

    if (list === null) {
      return <div>Loading...</div>;
    }
    if(this.state.redirect){
      return <Redirect to='/newTodo'/>
    }

    return (
      <div>
        <h1 style={{paddingLeft:'10px'}}>Liste der To-Dos
          <div className="ui button" style={{margin:'10px'}} onClick={()=>{this.setState({redirect:true})}}>Neues Todo</div>
        </h1>
        {this.renderTodos()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  //console.log(state);

  return { todos: state.todos };
};

const mapDispatchToProps = {
  getTodos: getTodos,
  markDone: markDone,
  deleteTodo: deleteTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
