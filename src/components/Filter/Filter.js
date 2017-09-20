import React from 'react';

class Filter extends React.Component {
	render() {
		return (
			<select onChange={this.props.changeState}>
				<option value="" selected={this.props.currentFilter ? '' : 'selected'}>All</option>
				{
					this.props.cards.map(card => {
						if(this.props.currentFilter === card.color) {
							return <option value={card.color} selected="selected">{card.color}</option>
						}
						return <option value={card.color}>{card.color}</option>
					})
				}
			</select>
		);
	}
}

Filter.defaultProps = {
};

export default Filter;
