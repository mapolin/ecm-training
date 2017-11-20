import { combineReducers } from 'redux'
import sample from './sample'
import router from './router'

const reducers = {
  sample,
  router
}
const combined = combineReducers(reducers)
module.exports = combined
