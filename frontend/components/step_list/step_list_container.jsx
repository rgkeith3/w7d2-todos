import { connect } from 'react-redux';
import { receiveStep, receiveSteps, removeStep } from '../../actions/step_actions'
import StepList from './step_list'
import { stepsByTodo } from '../../reducers/selectors'

const mapDispatchToProps = dispatch => ({
  receiveStep: (step) => dispatch(receiveStep(step))
})

const mapStateToProps = (state, props) => {
  return {
    steps: stepsByTodo(state, props.todo),
    todoId: props.todo.id
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepList)
