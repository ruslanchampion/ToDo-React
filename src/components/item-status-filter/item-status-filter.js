import React from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends React.Component {

  buttons = [
    {name: 'all', label: 'ALL'},
    {name: 'active', label: 'Active'},
    {name: 'done', label: 'Done'}
  ]

  

  render() {

    const {filter, onFilterChange} = this.props

    const buttons = this.buttons.map(({name, label}) => {
      const isActive = filter === name
      const clazz = isActive ? 'btn-info' : 'btn-outline-secondaty'
      return (
        <button type="button"
        className={`btn ${clazz}`}
          key={name}
          onClick={() => onFilterChange(name)}>
          {label}
        </button>
      )
    })

    return (
      <div className="btn-group">
       {buttons}
      </div>
    );
  };
}
