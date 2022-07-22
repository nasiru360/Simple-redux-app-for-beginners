
import reducer from './Reducers/ProductReducers'       // incharge of holding the application state
import { createStore } from 'redux'




const store=createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())



export default store;

// one of the responsibilty of a store is the hold the aplication state and provide 
//a method to access to state