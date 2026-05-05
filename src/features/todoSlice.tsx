import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Todo {
    id: string,
    name: string,
    description: string
}

export interface TodoState {
    list: Todo[];
}

const getInitialState = (): TodoState => {
    const savedTodo = localStorage.getItem("todoData")
    if (savedTodo) {
        return { list: JSON.parse(savedTodo) }
    }
    return { list: [] }
}
const initialState: TodoState = getInitialState()

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        createTodo: (state, action: PayloadAction<Todo>) => {
            state.list.push(action.payload)
            localStorage.setItem("todoData", JSON.stringify(state.list))
        },
        updateTodo: (state, action: PayloadAction<Todo>) => {
            const index = state.list.findIndex(item => item.id === action.payload.id)

            if (index !== -1) {
                state.list[index] = action.payload

                localStorage.setItem("todoData", JSON.stringify(state.list))
            }
        },
        deleteTodo: (state, action: PayloadAction<string>) => {
            state.list.filter(todo => todo.id !== action.payload)

            localStorage.setItem("todoData", JSON.stringify(state.list))
        },
    }
})

export const { createTodo, updateTodo, deleteTodo } = todoSlice.actions
export default todoSlice.reducer