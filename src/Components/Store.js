import { composeWithDevTools } from 'redux-devtools-extension';
import {combineReducers,applyMiddleware} from 'redux';
import { legacy_createStore as createStore} from 'redux'
import thunk from 'redux-thunk'
import TodoReducer from './Reducer/TodoReducer'
const reducer =combineReducers({
    // contains all reducers
    Todo: TodoReducer,
})  

const initialState ={};

const middleware =[thunk];

  const store =createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;