import { SORT_ITEMS } from './const'

function action(data) {
  return (dispatch) => {
    dispatch({
      type: SORT_ITEMS,
      payload: data
    })
  }
}

module.exports = action
