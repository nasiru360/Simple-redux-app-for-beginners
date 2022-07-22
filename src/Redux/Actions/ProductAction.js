export const increment=()=>{
   
   
    return  {  // action object 
             type:'INCREMENT'
    }

    }

export const decrement=()=>{


  return{

    type:'DECREMENT'
  }


}



//or 

  


// An action is an object with a type property
//while and action creator is a funtion that return an object 
    // default increment;