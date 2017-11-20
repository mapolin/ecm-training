import { SAMPLE_ACTION } from './const'

function action(data) {
  return {
	  type: SAMPLE_ACTION,
	  payload: data
	}
}

module.exports = action
