const initialState = {
  list: null,
  todo: null,
  position: 0,
  todosperpage: 20,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TODOS':
      return {...state, list: action.payload};
    case 'GET_TODO':
      const id = parseInt(action.payload);
      const todo = state.list.find(t => t.id === id);
      return { ...state, todo: todo};
    case 'MARK_DONE':
      const id2 = parseInt(action.payload);
      const todo2 = state.list.find(t => t.id === id2);
      if(todo2.done) {
      todo2.done = false;
      }
      else {
        todo2.done = true;
      }
      return { ...state, todo:todo2};
    case 'CREATE_TODO':
      let idNew = 0;
      for(let i = 0; i<state.list.length; i++) {
        if(idNew<state.list[i].id) {
          idNew = state.list[i].id
        }
      }
        let newList = [];
        const newTodo = {...action.payload, id:idNew};
        for(let i = 0; i<state.list.length+1;) {
            if(i<idNew) {
            newList[i] = state.list[i]
            }
            else newList[i] = newTodo;
          }
        return { ...state, list:newList}

    default:
      return state;
  }
};
