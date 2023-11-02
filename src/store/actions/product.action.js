import axios from "axios"

export const productAction = {
    ADD: (data) => {
        return {
            type: 'ADD_PRODUCT',
            payload: data
        }
    },
    GETALL: () => {

        return async (dispatch) => {
            axios.get('https://northwind.vercel.app/api/products')
                .then(res => {
                    dispatch({ type: "GET_ALL_PRODUCTS", payload: res.data })
                })
            // .catch(res => {
            //     dispatch({type:"GET_ALL_PRODUCTS", payload: []})
            // })
        }
    }
} 