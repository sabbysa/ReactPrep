import {createStore} from 'redux'

const initialState= {
    count:0
}

export const Increment = function(){
    return {
        type:"Increment"
    }
}
export const Decrement = function(){
    return {
        type:"Decrement"
    }
    
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case "Increment" : return {count :state.count+1}
        case "Decrement" : return {count :state.count-1}
        default: return state;
    }
}

const store = createStore(reducer)

export default store