import * as APIUtil from '../util/todo_api_util'
import { receiveErrors, clearErrors } from './error_actions'

export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const UPDATE_TODO = "UPDATE_TODO"

export const receiveTodos = (todos) => {
  return {
    type: RECEIVE_TODOS,
    todos: todos
  }
};

export const receiveTodo = (todo) => {
  return {
    type: RECEIVE_TODO,
    todo: todo
  }
};

export const removeTodo = (todo) => {
  return {
    type: REMOVE_TODO,
    todo: todo
  }
};

export const fetchTodos = () => (dispatch) => {
  APIUtil.getAllTodos().then((todos) => dispatch(receiveTodos(todos)))
};

export const createTodo = (todo) => (dispatch) => {
  APIUtil.createTodo(todo)
    .then(
      todo => {dispatch(receiveTodo(todo)); dispatch(clearErrors())},
      err => dispatch(receiveErrors(err.responseJSON))
    );
};

export const updateTodo = (todo) => (dispatch) => {
  APIUtil.updateTodo(todo)
    .then(
      todo => {dispatch(receiveTodo(todo)); dispatch(clearErrors())},
      err => dispatch(receiveErrors(err.responseJSON))
    );
};

export const deleteTodo = (todo) => (dispatch) => {
  APIUtil.deleteTodo(todo).then((todo) => {
        dispatch(removeTodo(todo))
      })
};
