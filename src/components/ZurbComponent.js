import React from 'react';

class ZurbComponent extends React.Component {

  constructor(props) {
    super(props);
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
</div>
		)
  }
}

export default ZurbComponent
