 //import jsonPlaceholder from '../apis/jsonPlaceholder';

export const getTodos = () => async dispatch => {
  const response = [];

   //const response = await jsonPlaceholder.get('/todos');

  dispatch({
    type: 'GET_TODOS',
    payload: response
  });
}
export const deleteTodo = id => async dispatch => {
  dispatch({
    type: 'DELETE_TODO',
    payload: id
  })
}

export const getTodo = (id) => async dispatch => {
  dispatch({
    type: 'GET_TODO',
    payload: id
  })
}

export const createTodo = (todo) => async dispatch => {
  dispatch({
    type: 'CREATE_TODO',
    payload: todo
  })
}

export const markDone = (id) => async dispatch =>{
  dispatch({
    type: 'MARK_DONE',
    payload: id
  })
}
