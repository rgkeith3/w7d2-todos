import React from 'react';
import TodoDetailViewContainer from './todo_detail_view_container';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props)
    this.doneButton = this.doneButton.bind(this);
    this.markDone = this.markDone.bind(this);
    this.toggleDetail = this.toggleDetail.bind(this);
    this.state = {
      detail: false
    }
  }


  doneButton() {
    return this.props.todo.done ? "Undo" : "Complete"
  }

  markDone(e) {
    e.preventDefault()
    let newTodo = Object.assign({}, this.props.todo, {done: !this.props.todo.done})
    this.props.updateTodo(newTodo);
  }

  renderDetail() {
    if (this.state.detail) {
      return <TodoDetailViewContainer todo={this.props.todo} />
    }
  }

  toggleDetail() {
    this.setState({detail: !this.state.detail})
  }

  render() {
    return(
      <div>
        <li onClick={this.toggleDetail}>{this.props.todo.title}</li>
        <button onClick={this.markDone}>{this.doneButton()}</button>
        {this.renderDetail.bind(this)()}
      </div>
    )
  }
}

export default TodoListItem
