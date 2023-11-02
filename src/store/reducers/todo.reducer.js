export const todoReducer = (state, action) => {


    if (typeof state === 'undefined') {
        return []
    }
    else if(action.type == "ADD_TODO"){
        //ASENKRON BAZI İŞLEMLERİM VAR!!!
        return [...state, action.payload] 
    }
    else if(action.type == "REMOVE_TODO"){
        var filteredState = state.filter(q => q.id != action.payload)
        return filteredState
    }
    else if(action.type == "EMPTY_TODO"){
        console.log("todoReducer EMPTY");
        return [] 
    }
    else {
        return state
    }
}



// var todos = [
//     {
//         id:1,
//         name:"",
//         description:""
//     }
// ]