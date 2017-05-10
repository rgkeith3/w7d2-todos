import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props)
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.addNewTag = this.addNewTag.bind(this);
    this.updateNewTag = this.updateNewTag.bind(this)
    this.state = {
      id: null,
      title: "",
      body: "",
      done: false,
      tag_names: [],
      newTag: ""
    };
  }

  addTodo(event) {
    event.preventDefault()
    let uniqId = this.uniqueId();
    this.props.createTodo(this.state);
    this.setState({
      body: "",
      title: "",
      id: null,
      tag_names: [],
      newTag: ""
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

  updateNewTag(event) {
    this.setState({
      newTag: event.currentTarget.value
    })
  }

  addNewTag(e) {
    e.preventDefault();
    let newTags = this.state.tag_names.concat(this.state.newTag);
    this.setState({
      tag_names: newTags
    })
  }



  render() {
    console.log(this.state)
    return(
      <div className="todo_form">
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
          <ul>
            {this.state.tag_names.map( (tag) => (
              <li>{tag}</li>
            ))}
          </ul>
          <input type="text"
                  name="tag"
                  onChange={this.updateNewTag}
                  value={this.state.newTag}
                  placeholder="Enter new tag name! ;)"/>
                <button onClick={this.addNewTag} type="button">"Add new tag name!"</button>
          <button>Submit!</button>
        </form>
      </div>
    )
  }
}


export default TodoForm;
