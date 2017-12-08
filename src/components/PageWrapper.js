import React from 'react'
import '../static/style.css';

import ZurbComponent from './ZurbComponent'

class PageWrapper extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
	  cards: [
	    {
	      title: 'Lorem ipsum dolor sit',
	      description: 'Lorem ipsum dolor sit',
	      type: 'success'
	    },
	    {
	      title: 'Lorem ipsum dolor sit',
	      description: 'Lorem ipsum dolor sit',
	      type: 'primary'
	    },
	    {
	      title: 'Lorem ipsum dolor sit',
	      description: 'Lorem ipsum dolor sit',
	      type: 'secondary'
	    },
	    {
	      title: 'Lorem ipsum dolor sit',
	      description: 'Lorem ipsum dolor sit',
	      type: 'info'
	    },
	    {
	      title: 'Lorem ipsum dolor sit',
	      description: 'Lorem ipsum dolor sit',
	      type: 'alert'
	    },
	    {
	      title: 'Lorem ipsum dolor sit',
	      description: 'Lorem ipsum dolor sit',
	      type: 'warning'
	    }
	  ]
	}
	}

	render() {
		return <div>
		{this.state.cards.map(({title, description, type}) => {
			 return <ZurbComponent title={title} description={description} type={type} />
		})}
		</div>
	}
}

export default PageWrapper
