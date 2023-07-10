import { createStore,applyMiddleware } from "redux"
import {medReducer} from"./medreducer"
import{composeWithDevTools}from "redux-devtools-extension"
import thunk from "redux-thunk"
const middelware=[thunk]
const store=createStore(medReducer,composeWithDevTools(applyMiddleware(...middelware)))
export default store