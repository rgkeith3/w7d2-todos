import React from 'react';
import StepListContainer from '../step_list/step_list_container'

class TodoDetailView extends React.Component {
  constructor(props) {
    super(props);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  deleteTodo(e) {
    e.preventDefault();
    this.props.deleteTodo(this.props.todo);
  }

  render(){
    return(
      <div>
        <p>{this.props.todo.body}</p>
        <StepListContainer todo={this.props.todo}/>
        <button onClick={this.deleteTodo}>Remove Todo!</button>
      </div>
    )
  }
}

export default TodoDetailView;
