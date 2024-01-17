import {createSlice} from "@reduxjs/toolkit";
import {normalizeNumber} from "../../utils/utils.ts";
import {selectExpenses} from "../Selector";
import {getStorageSlice} from "../../utils/localStorage.ts";

export interface IExpense {
    label: string;
    amount: number;
    id: number;
    category: string;
    date: Date;
}


const expenseSlice = createSlice({
    name: 'expenses',
    initialState: getStorageSlice(selectExpenses, Array<IExpense>),
    reducers: {
        addExpense(state, action) {
            const expense: IExpense = {
                ...action.payload,
                id: state.reduce((acc: number, current: IExpense) => {
                    if (acc < current.id) {
                        return current.id
                    }
                    return acc
                }, 0) + 1,
                amount: normalizeNumber(action.payload.amount),
                date: Date.now()
            }
            state.push({...expense})
        },
        resetExpense(state) {
            state = [];
            return state;
        }
    }
})

export const {
    addExpense,
    resetExpense
} = expenseSlice.actions

export default expenseSlice;