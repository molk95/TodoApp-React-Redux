import TodoReducer from "./reducers/reducer"
import {createStore} from "redux"


const store= createStore(TodoReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store