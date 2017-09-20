import React from 'react';
import './card-info.css';

class Card extends React.Component {
	render() {
		return (
			<div className={'card-info ' + this.props.color}>
				<div className="card-info-label">
					<div className="card-info-label-text">
						Win!
					</div>
				</div>
				<div className="card-info-content">
					<h3 className="lead">{this.props.title}</h3>
					<p>{this.props.description}</p>
				</div>
			</div>
		);
	}
}

Card.defaultProps = {
};

export default Card;
