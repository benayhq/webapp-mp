import {createStore,applyMiddleware,combineReducers,compose} from 'redux';
import thunkMiddleWare from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {reducer as userReducer} from './../pages/user/store';
import {reducer as productReducer} from './../pages/product/store';
import {reducer as orderReducer} from './../pages/order/store';


const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose

    const middlewares = [
      thunkMiddleWare
    ];

if (process.env.NODE_ENV === 'development') {
      middlewares.push(require('redux-logger').createLogger())
}



const enhancer = composeEnhancers(
  applyMiddleware(...middlewares),
  // other store enhancers if any
)


const reducer = combineReducers({
  user:userReducer,
  product:productReducer,
  order:orderReducer
});

export default function configStore(){
  const store  = createStore(reducer,enhancer);
  return store;
}