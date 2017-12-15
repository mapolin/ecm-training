/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import { SORT_ITEMS, FILTER_ITEMS } from "actions/const";

const initialState = {};

function reducer(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case FILTER_ITEMS: {
      // nextState.currentFilter = action.payload
      return nextState;
    }
    case SORT_ITEMS: {
      // nextState.currentSort = action.payload
      // nextState.items.sort(function(card1, card2) {
      //   if (action.payload === 'asc') {
      //     return card2.title < card1.title
      //   }
      //   return card2.title > card1.title
      // })

      return nextState;
    }
    default:
      return nextState;
  }
}

export default reducer;
