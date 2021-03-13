import * as actions from '../actions';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    if(action.type === actions.STORE_RESULT){
        return {
            ...state,
            results: state.results.concat({id: new Date(),value: action.result})
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