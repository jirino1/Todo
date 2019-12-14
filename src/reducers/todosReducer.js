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
      const idNew = 0;
      state.list.map(todo => {
        if(todo.id > idNew) {
          idNew+=1;
        }
      })
        const newList = [];
        for(let i = 0; i<state.list.length+1;) {
            if(i<idNew) {
            newList[i] = state.list[i]
            }
            else newList[i] = action.payload;
          }
        return { ...state, list:newList}

    default:
      return state;
  }
};
