export const allTodos = (state) => {
  var stateKeys = Object.keys(state.todos)
  return stateKeys.map((id) => state.todos[id])
}

export const stepsByTodo = (state, todo) => {
  var stateKeys = Object.keys(state.steps);
  var stepArray = stateKeys.map((id) => state.steps[id])
  return stepArray.filter( (obj) => (obj["todoId"] === todo.id))
}
