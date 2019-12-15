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
      if(todo2.completed) {
      todo2.completed = false;
      }
      else {
        todo2.completed = true;
      }
      return { ...state, todo:todo2};
    case 'CREATE_TODO':
      let idNew = 0;
      for(let i = 0; i<state.list.length; i++) {
        if(idNew<state.list[i].id) {
          idNew = (state.list[i].id)
        }
      }
        const newTodo = {id:idNew+1, ...action.payload, };
        //console.log(state.list)
        let newList = state.list;
        newList.push(newTodo);
        return { ...state, list:newList}

    default:
      return state;
  }
};
