import {createStore,applyMiddleware} from 'redux';
import thunkMiddleWare from 'redux-thunk';
import {createLogger} from 'redux-logger';
import rootReducers from '../reducers';

const middlewares = [
  thunkMiddleWare,
  createLogger()
];

export default function configStore(){
  const store  = createStore(rootReducers,applyMiddleware(...middlewares));
  return store;
}
