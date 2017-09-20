import React from 'react';
import PageTitle from './PageTitle';
import Button from './Button';

class PageContent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {title: 'State from Page Content'};
	}
	
	changeTitle() {
		this.setState({title: 'dsadasdsa'});
	}

	render() {
		return (
			<div class="content">
				<PageTitle title={this.state.title}/>
				<Button onClick={this.changeTitle.bind(this)}>Push the button</Button>
			</div>
		);
	}
}

PageContent.defaultProps = {
};

export default PageContent;
