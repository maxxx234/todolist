import {configureStore} from '@reduxjs/toolkit'
import todoReducer from "../features/todo/todoSlice"


//most of the time it will tale object inside it
export const store = configureStore({
    reducer: todoReducer
})