import {createSlice} from "@reduxjs/toolkit";

export interface ISaisie {
    label: string;
    amount: string;
    category: string;
}

const initialState: ISaisie = {
    label: "",
    amount: "",
    category: ""
}

const saisieSlice = createSlice({
    name: 'saisie',
    initialState,
    reducers: {
        changeValue(state, action: {payload: {name:'label'|'amount'|'category', value: string}, type: string}) {
            state[action.payload.name] = action.payload.value
        }
    }
})

export const {
    changeValue
} = saisieSlice.actions

export default saisieSlice;