import React from 'react';

class StepForm extends React.Component {
  constructor(props) {
    super(props)
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.addStep = this.addStep.bind(this);
    this.state = {
      id: null,
      title: "",
      body: "",
      done: false,
      todo_id: this.props.todo_id
    };
  }

  addStep(event) {
    event.preventDefault()
    this.props.createStep(this.state);
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

  render() {
    return(
      <div>
        <form onSubmit={this.addStep}>
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


export default StepForm;
