import {createStore,applyMiddleware,combineReducers} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import {reducer} from './reducer.js'
import postReducer from './feedRedux/reducer.js';

export const store = createStore(combineReducers({reducer, posts: postReducer}),composeWithDevTools(applyMiddleware(thunk)))
