import { FILTER_ITEMS } from './const'

function action(data) {
  return {
    type: FILTER_ITEMS,
    payload: data
  }
}

module.exports = action
