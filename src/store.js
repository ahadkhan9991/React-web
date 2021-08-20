import { createStore } from "redux" ;
import { composeWithDevTools } from "redux-devtools-extension"
import rootReducer from "./reducers" // no need to write /index because it will take as main index





const store= createStore( rootReducer, composeWithDevTools())

export default store;