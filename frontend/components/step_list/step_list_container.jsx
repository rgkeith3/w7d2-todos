import { connect } from 'react-redux';
import { createStep, receiveSteps, removeStep, getAllTodoSteps } from '../../actions/step_actions'
import StepList from './step_list'
import { stepsByTodo } from '../../reducers/selectors'

const mapDispatchToProps = dispatch => ({
  createStep: (step) => dispatch(createStep(step)),
  getAllTodoSteps: (todo) => dispatch(getAllTodoSteps(todo))
})

const mapStateToProps = (state, props) => {
  return {
    steps: stepsByTodo(state, props.todo),
    todo: props.todo,
    errors: state.errors
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepList)
