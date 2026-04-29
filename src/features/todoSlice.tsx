import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface TodoState {
    name: string,
    description: string
}

const initialState: TodoState = {
    name: '',
    description: ''
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {

    }
})