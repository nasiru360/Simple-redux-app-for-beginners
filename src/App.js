
import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {increment,decrement}  from "./Redux/Actions/ProductAction";
function App() {

  const currentState=useSelector((state)=>state.numberinthestore)
 // useDispatch(Action())  

  
const dispatch=useDispatch();      


function incrementME(){

  dispatch(increment(1))

}

function decrement1(){

 // dispatch(myaction())
 dispatch(decrement(1))

}

  return (
    <div className="App">
   <h2>Simple Redux App for Beginners</h2>


    <button onClick={incrementME}>+</button>
    {currentState}
    <button onClick={decrement1}>-</button>

    </div>
  );
}

export default App;
