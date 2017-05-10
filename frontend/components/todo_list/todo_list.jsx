import React from 'react';
import TodoForm from './todo_form'
import TodoListItem from './todo_list_item'

class TodoList extends React.Component {
  componentDidMount() {
    this.props.fetchTodos()
  }

  render() {
    let errors;
    if (this.props.errors) {
      errors = this.props.errors.map( (error, idx) =>
        <li key={idx}>{error}</li>)
    }
    return (
      <div>
        <ul className="errors">
          { errors }
        </ul>
        <ul>
          {this.props.todos.map(todo => (
            <TodoListItem key={todo.id}
                          todo={todo}
                          removeTodo={this.props.removeTodo}
                          receiveTodo={this.props.receiveTodo}
                          updateTodo={this.props.updateTodo}/>
          ))}
        </ul>
        < TodoForm  createTodo={this.props.createTodo}
                    clearErrors={this.props.clearErrors}/>
      </div>
    )
  }
}
export default TodoList;
