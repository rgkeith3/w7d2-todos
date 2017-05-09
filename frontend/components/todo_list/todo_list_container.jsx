import {connect} from 'react-redux';
import TodoList from './todo_list';
import { fetchTodos, createTodo, removeTodo, updateTodo, deleteTodo } from '../../actions/todo_actions'
import { clearErrors } from '../../actions/error_actions'
import { allTodos } from '../../reducers/selectors'

const mapStateToProps = state => {
  return {
  todos: allTodos(state),
  errors: state.errors
  }
}

const mapDispatchToProps = dispatch => ({
  deleteTodo: (todo) => dispatch(deleteTodo(todo)),
  updateTodo: (todo) => dispatch(updateTodo(todo)),
  createTodo: (todo) => dispatch(createTodo(todo)),
  fetchTodos: () => dispatch(fetchTodos()),
  clearErrors: () => dispatch(clearErrors())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
