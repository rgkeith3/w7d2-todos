export const getAllTodoSteps = (todo) => (
  $.ajax({ method: 'GET', url: `api/steps` })
)

export const createStep = (step) => (
  $.ajax({
    method: 'POST',
    url: `api/todos/${step.todo_id}/steps`,
    data: {
      step
    }
  })
)

export const updateStep = (step) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/todos/${step.todo_id}/steps/${step.id}`,
    data: {
      step
    }
  })
)

export const deleteStep = (step) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/todos/${step.todo_id}/steps/${step.id}`,
  })
)
