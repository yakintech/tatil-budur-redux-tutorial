export const counterReducer = (state, action) => {


    if (typeof state === 'undefined') {
        return 0
    }
    else if (action.type == 'INCREASE') {
        return state + 1
    }
    else if (action.type == 'DECREASE') {
        return state - 1
    }
    else if (action.type == 'EMPTY') {
        console.log("Counter reducer EMPTY");
        return 0
    }
    else if(action.type == "INCREASE_BY_VALUE"){
        return state + action.payload
    }
    else {
        return state
    }
}