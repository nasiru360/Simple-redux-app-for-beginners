

const initialstate={
    numberinthestore:10
}
const myreducer=(state=initialstate,action)=>{

    switch(action.type){
    
    case 'INCREMENT':

    return {...state,
        numberinthestore: state.numberinthestore + 1

    }

    default:
        return state   }


}


export default myreducer

// reducer is a function that has two argument the previous state or initial state and the action