import React from 'react';


import DeleteComponent from './DeleteComponent'

class ZurbComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  deleteItem() {
    this.props.deleteItem(this.props.index);
  }

  render() {
    return (
			<div className={"card-info " + this.props.type}>
  <div className="card-info-label">
    <div className="card-info-label-text">
      {this.props.type}
    </div>
  </div>
  <div className="card-info-content">
    <h3 className="lead">{this.props.title}</h3>
    <p>{this.props.description}</p>
  </div>
  <DeleteComponent deleteItem={this.deleteItem} />
</div>
		)
  }
}

export default ZurbComponent
