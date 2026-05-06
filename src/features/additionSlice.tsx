import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export interface trueFalse {
    isDark: boolean,
    isEditMode: boolean
}

const initialState: trueFalse = {
    isDark: false,
    isEditMode: false
}


export const additionSlice = createSlice({
    name: "addition",
    initialState,
    reducers: {
        changeTheme: (state)=>{
            state.isDark = !state.isDark
        },
        editMode: (state, action: PayloadAction<boolean>)=>{
            state.isEditMode = action.payload
        }
    }
})
export const {changeTheme, editMode } = additionSlice.actions
export default additionSlice.reducer


