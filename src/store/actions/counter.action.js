export const counterAction = {
    INCREASE: () => {
        return {
            type: 'INCREASE'
        }
    },
    DECREASE: () => {
        return {
            type: 'DECREASE'
        }
    },
    EMPTY: () => {
        return {
            type: 'EMPTY'
        }
    },
    INCREASEBYVALUE: (data) => {
        return {
            type: 'INCREASE_BY_VALUE',
            payload: data
        }
    }
}