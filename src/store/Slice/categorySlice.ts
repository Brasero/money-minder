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
const categoryMaxId = (arr: Array<ICategory>) => {
    return arr.reduce((acc, current) => acc > current.id ? acc : current.id, 0)
}

const categorySlice = createSlice({
    name: 'category',
    initialState: getStorageSlice(selectCategories, [
        {
            name: 'Autres',
            value: 'autres',
            id: 1,
            budget: 0
        }
    ]),
    reducers: {
        addCategory(state, action) {
            if (!state.find((cat: ICategory) =>  cat.name === action.payload.name)) {
                state.push({...action.payload, id: categoryMaxId(state) + 1, budget: normalizeNumber(action.payload.budget)})
            }
        },
        updateCategory(state, action) {
            state = state.map((cat: ICategory) => {
                if(cat.id === action.payload.id) {
                    return {
                        ...cat,
                        ...action.payload.values
                    }
                }
                return cat
            })
            return state;
        },
        deleteCategory(state, action) {
            state = state.filter((cat: ICategory) => cat.id !== action.payload.id)
            return state;
        }
    }
})

export const {
    addCategory,
    updateCategory,
    deleteCategory
} = categorySlice.actions

export default categorySlice;