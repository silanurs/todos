import { createSlice } from "@reduxjs/toolkit";
const todosSlice = createSlice({
    name:'todos',
    initialState: {
        todos:[
            {id:0, description:"Learn react!", isComplete: "false"}
        ]
    },
      
    reducers: {
        todoAdded(state, action){
           let todo = {id:state.todos.length, description:action.payload, isComplete:"false"}
           state.todos.push(todo)
        },
       isChecked(state,action)  {
           console.log(action.payload)
       }  
    }
})

export const {todoAdded, isChecked} = todosSlice.actions;
export default todosSlice.reducer