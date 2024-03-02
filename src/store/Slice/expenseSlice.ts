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
                amount: normalizeNumber(action.payload.amount) || 0,
                date: Date.now()
            }
            state.push({...expense})
        },
        resetExpense(state) {
            state = [];
            return state;
        },
        updateExpenseCategory(state, action){
            /*
              * Cette action sert lorsqu'une catégorie est supprimé afin d'assigner la catégorie "autres"
              * aux dépenses qui lui étaient liée
             */
            state = state.map((exp: IExpense) => {
                if(exp.category.toLowerCase() === action.payload.toLowerCase()) {
                    return {
                        ...exp,
                        category: 'autres'
                    }
                }
                return exp;
            })
            return state;
        },
        updateExpense(state, action) {
            const expense: IExpense = state.find((exp: IExpense) => exp.id === action.payload.id)
            const newExpense: IExpense = {...expense, ...action.payload}
            state = state.filter((exp: IExpense) => exp.id !== newExpense.id)
            state.push(newExpense)
            state.sort((a: IExpense,b: IExpense) => a.id - b.id)
            return state;
        },
        deleteExpense(state, action) {
            return state.filter((expense: IExpense) => expense.id !== action.payload)
        }
    }
})

export const {
    addExpense,
    resetExpense,
    updateExpenseCategory,
    updateExpense,
    deleteExpense
} = expenseSlice.actions

export default expenseSlice;