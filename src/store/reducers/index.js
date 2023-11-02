import { combineReducers } from "redux";
import { todoReducer } from "./todo.reducer";
import { counterReducer } from "./counter.reducer";
import { productReducer } from "./product.reducer";



export default combineReducers({
    todoReducer,
    counterReducer,
    productReducer
  })