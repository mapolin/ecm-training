import { combineReducers } from "redux";
import sample from "./sample";
import router from "./router";

const reducers = {
  cards: sample,
  router
};
const combined = combineReducers(reducers);
module.exports = combined;
