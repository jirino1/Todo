//import jsonPlaceholder from '../apis/jsonPlaceholder';
const response = [
  { id: 3, name: "Erdferkel füttern", done: true },
  { id: 2, name: "Game of Thrones gucken", done: false },
  { id: 1, name: "Gesicht waschen", done: false },
  { id: 4, name: "Informatik-Hausis machen", done: true },
]; 
export const getTodos = () => async dispatch => {
  //const response = await jsonPlaceholder.get('/todos');
  dispatch({
    type: 'GET_TODOS',
    payload: response
  })
}

export const getTodo = (id) => async dispatch => {
  let answer = null;
  for(let i = 0; i<response.length; i++) {
    if(response[i].id === id) {
      answer = response[i];
    }
  }
  //console.log(answer);
  dispatch({
    type: 'GET_TODO',
    payload: answer
  }, ); 
}

export const createTodo = (todo) => {
   //jsonPlaceholder.post('todos/:todo.id', todo);
}

export const markDone = (id) => {
  //jsonPlaceholder.patch('todos/:id',{done:true} )
}
