import React from 'react';

class Filter extends React.Component {
	render() {
		return (
			<select value={this.props.currentFilter} onChange={this.props.changeState}>
				<option value="all">All</option>
				{
					this.props.cards.map((card, index) => {
						return <option key={index} value={card.color}>{card.color}</option>
					})
				}
			</select>
		);
	}
}

Filter.defaultProps = {
};

export default Filter;
