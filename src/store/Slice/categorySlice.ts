import {createSlice} from "@reduxjs/toolkit";
import {normalizeNumber} from "../../utils/utils.ts";

export interface ICategory {
    name: string;
    value: string;
    id: number;
    budget: number;
}

const categorySlice = createSlice({
    name: 'category',
    initialState: [
        {
            name: 'Alimentation',
            value: 'alimentation',
            id: 1,
            budget: 700
        }
    ],
    reducers: {
        addCategory(state, action) {
            if (!state.find((cat) =>  cat.name === action.payload.name)) {
                state.push({...action.payload, id: state.length + 1, budget: normalizeNumber(action.payload.budget)})
            } else {
                state.forEach((cat) => {
                    if (cat.name === action.payload.name) {
                        cat.budget = normalizeNumber(action.payload.budget)
                    }
                })
            }
        }
    }
})

export const {
    addCategory
} = categorySlice.actions

export default categorySlice;