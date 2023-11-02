export const productReducer = (state, action) => {

    if (typeof state === 'undefined') {
        return []
    }

    switch (action.type) {
        case "ADD_PRODUCT":
            return [...state, action.payload]
        case "GET_ALL_PRODUCTS":
            return [...action.payload]
        default:
            return state
    }
}