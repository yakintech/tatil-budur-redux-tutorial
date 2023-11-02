export const todoAction = {
    ADD: (data) => {
        return {
            type: 'ADD_TODO',
            payload: data
        }
    },
    REMOVE: (data) => {
        return {
            type: 'REMOVE_TODO',
            payload: data
        }
    },
    EMPTY: () => {
        return {
            type: 'EMPTY_TODO'
        }
    }
}