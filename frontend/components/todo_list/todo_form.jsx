import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props)
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.state = {
      id: null,
      title: "",
      body: "",
      done: false
    };
  }

  addTodo(event) {
    event.preventDefault()
    let uniqId = this.uniqueId();
    this.props.createTodo(this.state);
    this.setState({
      body: "",
      title: "",
      id: null
    })
  }

  updateBody(event) {
    this.setState({
      body: event.currentTarget.value
    })
  }

  updateTitle(event) {
    this.setState({
      title: event.currentTarget.value
    })
  }

  uniqueId() {
    return new Date().getTime();
  }

  renderErrors() {

  }

  render() {
    let errors;
    if (this.props.errors) {
      errors = this.props.errors.map( (error, idx) =>
        <li key={idx}>{error}</li>)
    }
    return(
      <div className="todo_form">
        <ul className="errors">
          { errors }
        </ul>
        <form onSubmit={this.addTodo}>
          <input type="text"
                  name="title"
                  onChange={this.updateTitle}
                  value= {this.state.title}
                  placeholder="Enter title..."/>
          <input type="text"
                  name="body"
                  onChange={this.updateBody}
                  value= {this.state.body}
                  placeholder="Enter body..."/>
          <button>Submit!</button>
        </form>
      </div>
    )
  }
}


export default TodoForm;
