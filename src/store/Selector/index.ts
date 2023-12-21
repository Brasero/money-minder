import {ICategory} from "../Slice/categorySlice.ts";
import {IExpense} from "../Slice/expenseSlice.ts";

export const selectSaisieValues = (state: any) => state.saisie;

export const selectCategories = (state: {category: ICategory[]}) => state.category;

export const selectExpenses = (state: {expense: IExpense[]}) => state.expense;