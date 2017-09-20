/* CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  sortItems
} from '../actions/';
/* Populated by react-webpack-redux:reducer */

import Card from '../components/Card/Card';
import Filter from '../components/Filter/Filter';
import Sort from '../components/Sort/Sort';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }
  
  changeColor(event) {
    this.setState({
      currentFilter: event.target.value
    })
  }
  
  changeSort(event) {
    this.state.cards.sort(function(card1, card2) {
      if (event.target.value === 'asc') {
        return card2.title < card1.title
      }
      return card2.title > card1.title
    })
    // just have to trigger state change
    this.setState({
      currentFilter: null
    })
  }

  render() {
    const { actions, cards } = this.props;

    return (
      <div>
        <Filter cards={cards.items} changeState={this.changeColor.bind(this)} currentFilter={this.state.currentFilter}/>
        <Sort changeState={this.changeSort.bind(this)}/>
      
        {
          cards.items.map(card => {
            if (!this.state.currentFilter || this.state.currentFilter === card.color) {
              return <Card title={card.title} description={card.description} color={card.color}/>
            }
          })
        }
      </div>
    )
  }
}
/* Populated by react-webpack-redux:reducer
 *
 * HINT: if you adjust the initial type of your reducer, you will also have to
 *       adjust it here.
 */

App.defaultProps = {
  cards: []
};
App.propTypes = {
  actions: PropTypes.shape({}),
  cards: PropTypes.shape({})
};
function mapStateToProps(state) { // eslint-disable-line no-unused-vars
  /* Populated by react-webpack-redux:reducer */
  const props = {
    cards: state.cards
  };
  return props;
}
function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  const actions = { sortItems };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
