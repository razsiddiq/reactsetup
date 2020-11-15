import { combineReducers } from "redux";
//import { combineReducers } from "redux-immutable";

import home from "./Home/reducer"
const rootReducers = combineReducers({
  home,
});

export default rootReducers;
