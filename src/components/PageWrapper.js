import React from 'react'
import '../static/style.css';

import ZurbComponent from './ZurbComponent'
import FilterComponent from './FilterComponent'
import SortComponent from './SortComponent'


class PageWrapper extends React.Component {

	constructor(props) {
		super(props);
		this.initialState = {
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

	this.state = this.initialState;

	this.filterFunc = this.filterFunc.bind(this);
	this.sortFunc = this.sortFunc.bind(this);
	this.deleteItem = this.deleteItem.bind(this);
	}

	filterFunc(val) {
		let filter = [];
		if(val === "all") {
			filter = this.initialState.cards;
		} else {
		this.initialState.cards.map(({title, description, type}) => {
			if(type === val) {
				filter.push({title, description, type});
			}
		})
	}

		this.setState({cards: filter});
	}

	sortFunc(val) {

		let cards = this.state.cards;

		if(val == "1") {
			cards = this.initialState;
		} else {
		// don't touch this stupid comparison. It just works! Ref: https://en.wikipedia.org/wiki/Copy_and_paste_programming
		cards.sort(function(a, b) {
	    if(a.type < b.type) return val == "2" ? -1 : 1;
	    if(a.type > b.type) return val == "2" ? 1 : -1;
			if(a.type < b.type) return val == "3" ? 1 : -1;
	    if(a.type > b.type) return val == "3" ? -1 : 1;
	    return 0;
		})
	}

	this.setState({cards:cards});
	}

	deleteItem(index) {
		alert(index);
	}

	render() {
		return <div>
		<FilterComponent cards={this.initialState.cards} filterFunc={this.filterFunc} />
		<SortComponent sortFunc={this.sortFunc} />
		{this.state.cards.map(({title, description, type}, index) => {
			 return <ZurbComponent title={title} description={description} type={type} index={index} deleteItem={this.deleteItem} />
		})}
		</div>
	}
}

export default PageWrapper
