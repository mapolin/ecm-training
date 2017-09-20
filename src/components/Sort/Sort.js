import React from 'react';

class Sort extends React.Component {
	render() {
		return (
			<select onChange={this.props.changeState}>
				<option value="asc" selected="selected">Ascending</option>
				<option value="desc">Descending</option>
			</select>
		);
	}
}

Sort.defaultProps = {
};

export default Sort;
