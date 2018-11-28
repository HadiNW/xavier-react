import {createStore, combineReducers,applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

//reducers
import login from './reducers/login'
import user from './reducers/user'
import api from './reducers/api'

const rootReducer = combineReducers({
  login,
  user,
  api
})

const store = createStore(rootReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

export default store