import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session'
import { bizReducer } from './biz';
import { categoryReducer } from './categories';
import { reviewsReducer } from './review';
import { searchCategoryReducer } from './search';
import { hoursReducer } from './hours';
import { openBizReducer } from './openBiz';
import { bizHoursReducer } from './bizHours';
import { searchBizReducer } from './searchBiz.js';

const rootReducer = combineReducers({
  session,
  bizReducer,
  categoryReducer,
  reviewsReducer,
  searchCategoryReducer,
  openBizReducer,
  bizHoursReducer,
  hoursReducer,
  searchBizReducer
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
