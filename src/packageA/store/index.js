import {createStore,applyMiddleware,combineReducers,compose} from 'redux';
import thunkMiddleWare from 'redux-thunk';
import {reducer as userReducer} from './../pages/user/store';
import {reducer as productReducer} from './../pages/product/store';
import {reducer as orderReducer} from './../pages/order/store';
import {reducer as activeReducer} from './../pages/active/store';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose

    const middlewares = [
      thunkMiddleWare
    ];
const enhancer = composeEnhancers(
  applyMiddleware(...middlewares),
)

const reducer = combineReducers({
  user:userReducer,
  product:productReducer,
  order:orderReducer,
  active:activeReducer
});

export default function configStore(){
  const store  = createStore(reducer,enhancer);
  return store;
}
