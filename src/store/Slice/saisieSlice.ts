import {createSlice} from "@reduxjs/toolkit";

const saisieSlice = createSlice({
    name: 'saisie',
    initialState: {
        label: "",
        amount: "",
        category: ""
    },
    reducers: {
        changeValue(state, action) {
            state[action.payload.name] = action.payload.value
        }
    }
})

export const {
    changeValue
} = saisieSlice.actions

export default saisieSlice;