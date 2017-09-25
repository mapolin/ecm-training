import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  sortItems,
  filterItems
} from '../actions/';

import Card from '../components/Card/Card';
import Filter from '../components/Filter/Filter';
import Sort from '../components/Sort/Sort';

class ListPage extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }
  
  changeColor(event) {
    const { actions } = this.props;

    actions.filterItems(event.target.value);
  }
  
  changeSort(event) {
    const {
      actions,
      history
    } = this.props;

    actions.filterItems('all');
    actions.sortItems(event.target.value);

    history.push({
      path: '/',
      search: `sort=${event.target.value}`
    });
  }

  render() {
    const {
      actions,
      cards,
      match
    } = this.props;

    return (
      <div>
        <Filter cards={cards.items} changeState={this.changeColor.bind(this)} currentFilter={cards.currentFilter}/>
        <Sort changeState={this.changeSort.bind(this)} currentSort={cards.currentSort} />
        {
          cards.items.map((card, index) => {
            if (cards.currentFilter === 'all' || cards.currentFilter === card.color) {
              return <Card key={index} title={card.title} description={card.description} color={card.color}/>
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

ListPage.defaultProps = {
  cards: []
};
ListPage.propTypes = {
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
  const actions = { sortItems, filterItems };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(ListPage);
