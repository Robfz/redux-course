import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';

const initialState = {};
const enhancers = [];
const middlewares = [];

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers,
);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers,
);

export default store;
