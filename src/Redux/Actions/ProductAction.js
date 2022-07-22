export const increment=(value)=>{
   
   
    return  {  // action object 
             type:'INCREMENT',
             payload: value
    }

    }

export const decrement=(value)=>{


  return{

    type:'DECREMENT',
    payload: value

  }


}



//or 

  


// An action is an object with a type property
//while and action creator is a funtion that return an object 
    // default increment;