import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Todo {
    id: string,
    name: string,
    description: string
}

export interface TodoState {
    list: Todo[]
}

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
        createTodo: (state, action: PayloadAction<Todo>) => {
            state.list.push(action.payload)
            localStorage.setItem("todoData", JSON.stringify(state.list))
        },
        deleteTodo: (state, action: PayloadAction<string>) => {

            state.list = state.list.filter((todo) => todo.id !== action.payload)

            localStorage.setItem("todoData", JSON.stringify(state.list))
        }
    }
})

export const { createTodo, deleteTodo } = todoSlice.actions
export default todoSlice.reducer