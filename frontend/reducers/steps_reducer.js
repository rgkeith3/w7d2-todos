import {RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP} from "../actions/step_actions";


const stepsReducer = (state = {}, action) => {
  // debugger
  switch(action.type) {
    case RECEIVE_STEP:
      let newStep = {
        [action.step.id]: action.step
      };
      // debugger
      return Object.assign({}, state, newStep)
    case RECEIVE_STEPS:
      let newState = {};
      action.steps.forEach( (step) => {
        newState[step.id] = step;
      })
      return newState;
    case REMOVE_STEP:
      let idx = action.step.id;
      newState = Object.assign({}, state);
      delete newState[idx];
      return newState;
    default:
      return state
  }
}


export default stepsReducer
