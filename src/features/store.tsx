import { configureStore } from '@reduxjs/toolkit'
import todoReducer from "../features/todoSlice"
import additionReducer from "../features/additionSlice"
import editTodoReducer from "../features/editTodoSlice"
export const store = configureStore({
  reducer: {
    todo: todoReducer,
    addition: additionReducer,
    editTodo: editTodoReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch