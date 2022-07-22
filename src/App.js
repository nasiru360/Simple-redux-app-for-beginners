
import React from "react";
import { useSelector,useDispatch } from "react-redux";
import myaction  from "./Redux/Actions/ProductAction";
function App() {


 // useDispatch(Action())  

  
const dispatch=useDispatch();      
dispatch(myaction())
dispatch(myaction())
dispatch(myaction())
dispatch(myaction())

  return (
    <div className="App">
    
    </div>
  );
}

export default App;
