/* eslint-disable import/newline-after-import */
/* Exports all the actions from a single point.

Allows to import actions like so:

import {action1, action2} from '../actions/'
*/
/* Populated by react-webpack-redux:action */
import sortItems from './sortItems';
import filterItems from './filterItems';

const actions = {
  sortItems,
  filterItems
};

module.exports = actions;
