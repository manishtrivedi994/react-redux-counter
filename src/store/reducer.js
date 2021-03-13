import * as actions from './actions';

const initialState = {
    counter: 0,
    results: []
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
    if(action.type === actions.STORE_RESULT){
        return {
            ...state,
            results: state.results.concat({id: new Date(),value: state.counter})
        }
    }
    if(action.type === actions.DELETE_RESULT){
        // const id = 2;
        // const newArray = [...state.results];
        // newArray.splice(id, 1);
        const newArray = state.results.filter(result => result.id !== action.resultElementId );
        return {
            ...state,
            results: newArray,
        }
    }
    return state;
}


export default reducer;