import React from 'react';

class PageTitle extends React.Component {
	render() {
		return (
			<div class="title">{this.props.title}</div>
		);
	}
}

PageTitle.defaultProps = {
};

export default PageTitle;
