import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunkMiddleWare from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {reducer as userReducer} from './../pages/user/store';

const middlewares = [
  thunkMiddleWare
];

const reducer = combineReducers({
  user:userReducer
});

export default function configStore(){
  const store  = createStore(reducer,applyMiddleware(...middlewares));
  store.subscribe(()=>{
    console.log('subscribe',store.getState());
  })
  return store;
}