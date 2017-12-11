import React from 'react';

class SortComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <select onChange={e=>this.props.sortFunc(e.target.value)}>
        <option value="1">Natural</option>
        <option value="2">A-Z</option>
        <option value="3">Z-A</option>
      </select>
		)
  }
}

export default SortComponent
