import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import login from './reducers/login';
import mortgageForm from './reducers/mortgageForm';

export default createStore(
  combineReducers({ login, mortgageForm }),
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
);
