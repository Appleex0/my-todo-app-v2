import { configureStore } from '@reduxjs/toolkit'
import todoReducer from "../features/todoSlice"
import additionReducer from "../features/additionSlice"
export const store = configureStore({
  reducer: {
    todo: todoReducer,
    addition: additionReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch