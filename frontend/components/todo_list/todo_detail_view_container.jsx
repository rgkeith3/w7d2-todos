import { connect } from 'react-redux';
import { deleteTodo } from '../../actions/todo_actions'
import TodoDetailView from './todo_detail_view'

const mapDispatchToProps = dispatch => ({
  deleteTodo: (todo) => dispatch(deleteTodo(todo)),
  receiveSteps: (todo) => dispatch(receiveSteps(todo))
})

export default connect(null, mapDispatchToProps)(TodoDetailView);
