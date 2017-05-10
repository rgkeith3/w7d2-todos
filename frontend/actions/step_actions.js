import * as APIUtil from '../util/step_api_util'
import { receiveErrors, clearErrors } from './error_actions'

export const RECEIVE_STEP = "RECEIVE_STEP";
export const RECEIVE_STEPS = "RECEIVE_STEPS";
export const REMOVE_STEP = "REMOVE_STEP";

export const receiveStep = (step) => {
  return {
    type: RECEIVE_STEP,
    step: step
  }
};

export const receiveSteps = (steps) => {
  return {
    type: RECEIVE_STEPS,
    steps: steps
  }
}

export const removeStep = (step) => {
  return {
    type: REMOVE_STEP,
    step: step
  }
}

export const getAllTodoSteps = (todo) => dispatch => {
  APIUtil.getAllTodoSteps(todo).then(steps => dispatch(receiveSteps(steps)))
}

export const createStep = (step) => dispatch => {
  APIUtil.createStep(step).then(
    step => {dispatch(receiveStep(step)); dispatch(clearErrors())},
    err => dispatch(receiveErrors(err.responseJSON))
  )
}

export const deleteStep = (step) => dispatch => {
  APIUtil.deleteStep(step).then(
    step => dispatch(removeStep(step)),
    err => dispatch(receiveErrors(err.responseJSON))
  )
}

export const updateStep = (step) => dispatch => {
  APIUtil.updateStep(step).then(
    step => {dispatch(receiveStep(step)); dispatch(clearErrors())},
    err => dispatch(receiveErrors(err.responseJSON))
  )
}
