import React from 'react';

class PageWrapper extends React.Component {
	render() {
		return (
			<div class="wrapper">{this.props.children}</div>
		);
	}
}

PageWrapper.defaultProps = {
};

export default PageWrapper;
