import React from 'react';

class Button extends React.Component {
	render() {
		return (
			<button class="page-button" onClick={this.props.onClick}>{this.props.children}</button>
		);
	}
}

Button.defaultProps = {
};

export default Button;
