import { createSlice , nanoid } from "@reduxjs/toolkit";


const initialState = {
  todos:
  [
  {
    id:1,
    text:"first todo"
  }
]
}

export const todoSlice = createSlice({
      name:'todo',
      initialState,
      reducers :{
          addTodo: (state , action) => {
            console.log("action", action);
            // state = current state
            // action = data which we have passed in object
            const todo ={
              id:nanoid(),
              text:action.payload
            }
            state.todos.push(todo)
          },
          removeTodo: (state , action) => {
            state.todos = state.todos.filter((todo) =>
              todo.id !== action.payload)
          },

      }
})

export const {addTodo ,removeTodo} = todoSlice.actions //used in components
export default todoSlice.reducer //used in store.js