import { createStore, applyMiddleware, compose } from "redux";
import {Map} from "immutable";
import thunk from "redux-thunk";
import rootReducer from "./root-reducer";

const composeEnhancers =
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      trace: true,
      traceLimit: 25,
    })) ||
  compose;

const middleware = [thunk];

const store = createStore(
  rootReducer,
  Map(),
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
