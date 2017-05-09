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
      todoId: this.props.todoId
    };
  }

  addStep(event) {
    event.preventDefault()
    let uniqId = this.uniqueId();
    this.setState({
      id: uniqId
    }, () => {
      this.props.receiveStep(this.state);
      this.setState({
        body: "",
        title: "",
        id: null
      })
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

  render() {
    return(
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
    )
  }
}


export default StepForm;
