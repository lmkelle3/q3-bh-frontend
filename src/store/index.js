import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import booksReducer from "./books/reducer";
import locationsReducer from "./locations/reducer";

const rootReducer = combineReducers({
  books: booksReducer,
  locations: locationsReducer
});

const middleware = [thunk, logger];

const enhancements = [applyMiddleware(...middleware)];
if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  enhancements.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}

export default createStore(rootReducer, {}, compose(...enhancements));
