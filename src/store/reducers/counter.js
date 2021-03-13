import * as actions from './../actions';

const initialState = {
    counter: 0,
}

const reducer = (state = initialState, action) => {
    if(action.type === actions.INCREMENT){
        return {
            ...state,
            counter: state.counter + 1 
        }
    }
    if(action.type === actions.DECREMENT){
        return {
            ...state,
            counter: state.counter - 1 
        }
    }
    if(action.type === actions.ADD){
        return {
            ...state,
            counter: state.counter + action.val
        }
    }
    if(action.type === actions.SUBTRACT){
        return {
            ...state,
            counter: state.counter - action.val
        }
    }
    return state;
}


export default reducer;