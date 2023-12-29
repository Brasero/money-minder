import {createSlice} from "@reduxjs/toolkit";
import {normalizeNumber} from "../../utils/utils.ts";
import {selectCategories} from "../Selector";
import {getStorageSlice} from "../../utils/localStorage.ts";

export interface ICategory {
    name: string;
    value: string;
    id: number;
    budget: number;
}

const categorySlice = createSlice({
    name: 'category',
    initialState: getStorageSlice(selectCategories, Array<ICategory>),
    reducers: {
        addCategory(state, action) {
            if (!state.find((cat: ICategory) =>  cat.name === action.payload.name)) {
                state.push({...action.payload, id: state.length + 1, budget: normalizeNumber(action.payload.budget)})
            } else {
                state.forEach((cat: ICategory) => {
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