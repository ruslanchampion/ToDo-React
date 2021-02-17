import React from 'react'
import './item-add-form.css'

export default class ItemAddForm extends React.Component {
  
  state = {
    label: ''
  }
  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
   this.props.onAddItem(this.state.label)
  this.setState({
    label: ''
  })
  }
  render() {

    return (
      <form className="item-add-form d-flex"
      onSubmit={this.onSubmit}> 
      <input type="text"
            className="from-control"
            onChange={this.onLabelChange}
            placeholder="What else?"
            value={this.state.label}/>
      <button
      className="btn btn-outline-secondary"
      >Add Element</button> 
      </form>
    )
  }
}