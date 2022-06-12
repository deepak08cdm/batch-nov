import { combineReducers, createStore, applyMiddleware } from "redux";
import rootReducer from "./Reducer";
import thunk from 'redux-thunk'
import createSagaMiddleware  from 'redux-saga'
import mySaga from './saga'
// import { reducer } from "./Reducer";


//for using thunk middleware
// export const store = createStore(rootReducer,applyMiddleware(thunk))





// for using saga middleware
const saga = createSagaMiddleware()
export const store = createStore(rootReducer,applyMiddleware(saga))
saga.run(mySaga)



// thunk works on async and await     // now you are able to dispatch a function as a action   (dispatch)