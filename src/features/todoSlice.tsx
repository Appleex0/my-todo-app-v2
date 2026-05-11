import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { TodoType, TodoState } from './Types/todoType'

const todoInitialState = (): TodoState => {
    const saved = localStorage.getItem("todoData")
    if (saved) {
        return { list: JSON.parse(saved) }
    }
    return { list: [] }
}


export const todoSlice = createSlice({
    name: "todo",
    initialState: todoInitialState(),
    reducers: {
        createTodo: (state, action: PayloadAction<TodoType>) => {
            state.list.push(action.payload)
            localStorage.setItem("todoData", JSON.stringify(state.list))
        },
        deleteTodo: (state, action: PayloadAction<string>) => {

            state.list = state.list.filter((todo) => todo.id !== action.payload)

            localStorage.setItem("todoData", JSON.stringify(state.list))
        },
        updateTodo: (state, action: PayloadAction<TodoType>) => {
            const index = state.list.findIndex((todo) => todo.id === action.payload.id)
            if (index != -1) {
                state.list[index] = action.payload
                localStorage.setItem("todoData", JSON.stringify(state.list))
            }
        }
    }
})

export const { createTodo, deleteTodo, updateTodo } = todoSlice.actions
export default todoSlice.reducer