import { connect } from 'react-redux';
import { deleteTodo } from '../../actions/todo_actions'
import TodoDetailView from './todo_detail_view'
import { fetchTodoSteps } from '../../actions/step_actions'

const mapDispatchToProps = dispatch => ({
  deleteTodo: (todo) => dispatch(deleteTodo(todo)),
  fetchTodoSteps: (todo) => dispatch(fetchTodoSteps(todo))
})

export default connect(null, mapDispatchToProps)(TodoDetailView);
