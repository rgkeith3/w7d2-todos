import React from 'react';

class StepListItem extends React.Component{
  constructor(props) {
    super(props)
    this.markDone = this.markDone.bind(this);
    this.doneButton = this.doneButton.bind(this);
    this.deleteStep = this.deleteStep.bind(this);
  }

  markDone(e) {
    e.preventDefault();
    let newStep = Object.assign({}, this.props.step, {done: !this.props.step.done})
    this.props.updateStep(newStep);
  }

  doneButton() {
    return this.props.step.done ? "Undo" : "Complete"
  }

  deleteStep(e) {
    e.preventDefault();
    this.props.deleteStep(this.props.step);
  }


  render() {
    return(
      <div>
        <h2>{this.props.step.title}</h2>
        <h3>{this.props.step.body}</h3>
        <button onClick={this.markDone}>{this.doneButton()}</button>
        <button onClick={this.deleteStep}>Remove step</button>
      </div>

    )
  }
}

export default StepListItem;
