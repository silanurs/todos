import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todosSlicer';
const store = configureStore({
    reducer:{
        todo: todoReducer
    }
})
export default store;