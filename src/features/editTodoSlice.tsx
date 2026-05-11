import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { TodoType } from './Types/todoType'

const initialState: TodoType = {
    id: "",
    name: "",
    description: ""
}


export const editTodoSlice = createSlice({
    name: "editTodo",
    initialState,
    reducers: {
        savedEditTodo: (state, action: PayloadAction<Todo>) => {
            state.id = action.payload.id
            state.name = action.payload.name
            state.description = action.payload.description
        }
    }
})

export const { savedEditTodo } = editTodoSlice.actions
export default editTodoSlice.reducer