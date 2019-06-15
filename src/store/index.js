import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunkMiddleWare from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {reducer as userReducer} from './../pages/user/store';
import {reducer as productReducer} from './../pages/product/store';
import {reducer as orderReducer} from './../pages/order/store';

const middlewares = [
  thunkMiddleWare
];

const reducer = combineReducers({
  user:userReducer,
  product:productReducer,
  order:orderReducer
});

export default function configStore(){
  const store  = createStore(reducer,applyMiddleware(...middlewares));
  return store;
}