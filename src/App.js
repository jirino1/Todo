import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import TodoList from './components/TodoList';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import CreateTodoForm from './components/CreateTodoForm';

function App() {
  return (
    <BrowserRouter >
      <Route path="/" exact component={TodoList} />
      <Route path="/todos/:id" exact component={Todo} />
      <Route path="/todos/:id/edit" component={TodoForm} />
      <Route path="/newTodo" component={CreateTodoForm} />
    </BrowserRouter>
  );
}

export default App;
