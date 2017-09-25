import React from 'react';

class Sort extends React.Component {
	render() {
		return (
			<select value={this.props.currentSort} onChange={this.props.changeState}>
				<option value="asc">Ascending</option>
				<option value="desc">Descending</option>
			</select>
		);
	}
}

Sort.defaultProps = {
};

export default Sort;
