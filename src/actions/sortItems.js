import { SORT_ITEMS } from './const'

function action(data) {
  return {
	  type: SORT_ITEMS,
	  payload: data
	}
}

module.exports = action
