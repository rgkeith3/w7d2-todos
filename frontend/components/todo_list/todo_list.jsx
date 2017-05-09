import React from 'react';
import TodoForm from './todo_form'
import TodoListItem from './todo_list_item'

class TodoList extends React.Component {
  componentDidMount() {
    this.props.fetchTodos()
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map(todo => (
            <TodoListItem key={todo.id}
                          todo={todo}
                          removeTodo={this.props.removeTodo}
                          receiveTodo={this.props.receiveTodo}
                          updateTodo={this.props.updateTodo}/>
          ))}
        </ul>
        < TodoForm errors={this.props.errors}
                    createTodo={this.props.createTodo}
                    clearErrors={this.props.clearErrors}/>
      </div>
    )
  }
}
export default TodoList;
