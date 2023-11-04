import { createSlice } from "@reduxjs/toolkit";
const todosSlice = createSlice({
    name:'todos',
    initialState: {description:[], date:[], checked:[] },
    reducers: {
        todoAdded(state, action){
            

        },
        todoIsComplete(state, action){

        }
        
    }
})
export const {todoAdded, todoIsComplete} = todosSlice.actions;
export default todosSlice.reducer