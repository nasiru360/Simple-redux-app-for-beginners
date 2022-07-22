

const initialstate={
    numberinthestore:0
}
const myreducer=(state=initialstate,action)=>{

    switch(action.type){
    
    case 'INCREMENT':

    return {...state,
        numberinthestore: state.numberinthestore + action.payload

    }
break;

    case 'DECREMENT':
        return{
         ...state,
         numberinthestore: state.numberinthestore - action.payload


        }

    default:
        return state   }


}


export default myreducer

// reducer is a function that has two argument the previous state or initial state and the action