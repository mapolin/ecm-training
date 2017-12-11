import React from 'react';

class DeleteComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button onClick={e=>this.props.deleteItem(e.target.value)}>X</button>
    )
  }
}

export default DeleteComponent
