import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';


import rootReducer from './reducers';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

const loggerMiddleware = createLogger();

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware)))
