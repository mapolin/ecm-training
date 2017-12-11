import React from 'react';

class FilterComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <select onChange={e=>this.props.filterFunc(e.target.value)}>
      <option value="all">Show all</option>
      {this.props.cards.map(({title, description, type}) => {
        return <option value={type}>{type}</option>
      })}
      </select>
		)
  }
}

export default FilterComponent
