import {ICategory} from "../Slice/categorySlice.ts";
import {IExpense} from "../Slice/expenseSlice.ts";
import {IRevenuState} from "../Slice/revenuSlice.ts";

export const selectSaisieValues = (state: any) => state.saisie;

export const selectCategories = (state: {category: ICategory[]}) => state.category;

export const selectExpenses = (state: {expense: IExpense[]}) => state.expense;

export const selectRevenues = (state: {revenu: IRevenuState}) => state.revenu.revenues;

export const selectRevenu = (state: {revenu: IRevenuState}) => state.revenu.value;

export const selectRevenuError = (state: {revenu: IRevenuState}) => state.revenu.error;