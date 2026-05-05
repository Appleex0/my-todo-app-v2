import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import Todo from '../components/Todo'

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
        return JSON.parse(saved)
    }
    return { list: [] }
}


export const todoSlice = createSlice({
    name: "todo",
    initialState: todoInitialState,
    reducers: {
        createTodo: (state, action: PayloadAction<Todo>) => {
            state.list.push(action.payload)
            localStorage.setItem("todoData", JSON.stringify(state.list))
        },
    }
})

export const { createTodo, deleteTodo } = todoSlice.actions
export default todoSlice.reducer