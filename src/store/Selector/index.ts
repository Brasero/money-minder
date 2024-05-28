import {ICategory} from "../Slice/categorySlice.ts";
import {IExpense} from "../Slice/expenseSlice.ts";
import {IRevenuState} from "../Slice/revenuSlice.ts";
import {IUser} from "../Slice/user.tsx";

export const selectSaisieValues = (state: any) => state.saisie;

export const selectCategories = (state: {category: ICategory[]}) => state.category;

export const selectCategoryById = (id: number) => {
    return (state: {category: ICategory[]}) => state.category.find((cat) => cat.id === id)
}

export const selectExpenses = (state: {expense: IExpense[]}) => state.expense;
export const selectTotalExpense = (state: {expense: IExpense[]}) => state.expense.reduce((acc, current) => acc + current.amount, 0)

export const selectExpenseById = (id: number) => (state: {expense: IExpense[]}) => state.expense.find((exp: IExpense) => exp.id === id)

export const selectRevenues = (state: {revenu: IRevenuState}) => state.revenu.revenues;
export const selectTotalRevenue = (state: {revenu: IRevenuState}) => state.revenu.revenues.reduce((acc, current) => acc + current.amount, 0)

export const selectRevenu = (state: {revenu: IRevenuState}) => state.revenu.value;

export const selectRevenuError = (state: {revenu: IRevenuState}) => state.revenu.error;

export const selectUser = (state: {user: IUser}) => state.user