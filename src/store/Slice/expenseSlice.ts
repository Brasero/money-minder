import {createSlice} from "@reduxjs/toolkit";

export interface IExpense {
    label: string;
    amount: string;
    id: number;
    category: string;
}


const expenseSlice = createSlice({
    name: 'expenses',
    initialState: Array<IExpense>,
    reducers: {
        addExpense(state, action) {
            const expense: IExpense = {
                ...action.payload,
                id: state.reduce((acc, current) => {
                    if (acc < current.id) {
                        return current.id
                    }
                    return acc
                }, 0) + 1
            }
            state.push(expense)
        }
    }
})

export const {
    addExpense
} = expenseSlice.actions

export default expenseSlice;