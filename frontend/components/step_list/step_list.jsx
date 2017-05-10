import React from 'react';
import StepForm from './step_form.jsx'
import StepListItemContainer from './step_list_item_container'

class StepList extends React.Component {
  componentDidMount() {
    this.props.getAllTodoSteps(this.props.todo)
  }

  render() {
    return(
      <div>
        <ul>
          {this.props.steps.map(step => (
            <StepListItemContainer key={step.id} step={step}/>
          ))}
        </ul>
        <StepForm todo_id={this.props.todo.id}
                  createStep={this.props.createStep}
                  errors={this.props.errors}/>
      </div>
    )
  }
}


export default StepList
