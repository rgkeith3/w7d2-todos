import React from 'react';
import StepForm from './step_form.jsx'
import StepListItemContainer from './step_list_item_container'

class StepList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    // debugger
    return(
      <div>
        <ul>
          {this.props.steps.map(step => (
            <StepListItemContainer key={step.id} step={step}/>
          ))}
        </ul>
        <StepForm todoId={this.props.todoId} receiveStep={this.props.receiveStep}/>
      </div>
    )
  }
}


export default StepList
