import {RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO, UPDATE_TODO} from "../actions/todo_actions";

const todosReducer = (state = {}, action ) => {
  switch(action.type) {
    case RECEIVE_TODO:
      let newTodo = {
        [action.todo.id]: action.todo
      };
      return Object.assign({}, state, newTodo);
    case RECEIVE_TODOS:
      let newState = {};
      action.todos.forEach( (todo) => {
        newState[todo.id] = todo;
      })
      return newState;
    case REMOVE_TODO:
      let idx = action.todo.id;
      newState = Object.assign({}, state);
      delete newState[idx];
      return newState;
    case UPDATE_TODO:
      newState = Object.assign({}, state);
      newState[action.todo.id] = action.todo;
      return newState;
    default:
      return state;
  }
}

export default todosReducer;
