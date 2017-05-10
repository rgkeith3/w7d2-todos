import {connect} from 'react-redux';
import StepListItem from './step_list_item';
import { deleteStep, updateStep } from '../../actions/step_actions';

const mapDispatchToProps = dispatch => ({
  deleteStep: (step) => dispatch(deleteStep(step)),
  updateStep: (step) => dispatch(updateStep(step))
});

export default connect(
  null,
  mapDispatchToProps
)(StepListItem)
