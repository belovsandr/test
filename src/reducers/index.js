
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import {routerReducer} from 'react-router-redux'

const reducers = {
    form: formReducer,
    routing: routerReducer
}
const rootReducer = combineReducers(reducers);
export default rootReducer;
