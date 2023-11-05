import { createSlice } from "@reduxjs/toolkit";
const todosSlice = createSlice({
    name:'todos',
    initialState: {
        list:[
        {description:"Learn how to use react-redux", date:"10/11/2023", complete: false}
    ]},
    reducers: {
        todoAdded(state, action){
            const todo = {description:action.payload, date:action.payload, complete:action.payload};
            state.todos.list.push(todo)
        },
        isComplete(state, action){

        },
        
        
    }
})

export const {todoAdded, todoIsComplete} = todosSlice.actions;
export default todosSlice.reducer