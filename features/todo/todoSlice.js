import { createSlice, nanoid } from "@reduxjs/toolkit";
// methods
const initialState = {
    todos: [{id: 1 ,text: "hello eolrd"}]
}
export const todoSlice  =  createSlice({
    name : 'todo',
    initialState,
    // inside reducers there comes property and functions and add todo is a propeerty or functionality
    reducers:{ 
        addTodo: (state, action) =>{
            const todo = {
                id: nanoid() ,text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state,action) =>{
               state.todos = state.todos.filter((todo)=> todo.id != action.payload)
        },

    }
})
export const {addTodo,removeTodo} = todoSlice.actions
// individual fiunctionalities used for component
export default todoSlice.reducer
