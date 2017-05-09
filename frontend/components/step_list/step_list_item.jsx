import React from 'react';

class StepListItem extends React.Component{
  constructor(props) {
    super(props)
    this.markDone = this.markDone.bind(this);
    this.doneButton = this.doneButton.bind(this);
    this.removeStep = this.removeStep.bind(this);
  }

  markDone(e) {
    e.preventDefault();
    let newStep = Object.assign({}, this.props.step, {done: !this.props.step.done})
    this.props.receiveStep(newStep);
  }

  doneButton() {
    return this.props.step.done ? "Undo" : "Complete"
  }

  removeStep(e) {
    e.preventDefault();
    this.props.removeStep(this.props.step);
  }


  render() {
    return(
      <div>
        <h2>{this.props.step.title}</h2>
        <h3>{this.props.step.body}</h3>
        <button onClick={this.markDone}>{this.doneButton()}</button>
        <button onClick={this.removeStep}>Remove step</button>
      </div>

    )
  }
}

export default StepListItem;
