import React from "react";
import {IExpense} from "../../../store/Slice/expenseSlice.ts";
import './expenseItem.scss';

interface IExpenseItemProps {
    expense: IExpense
}

const ExpenseItem: React.FC<IExpenseItemProps> = ({expense}: IExpenseItemProps) => {

    return (
        <div className={'expenseItem'}>
            <div>{expense.label}</div>
            <div>{expense.amount}</div>
            <div>{expense.category[0].toUpperCase() + expense.category.slice(1)}</div>
        </div>
    )
}
export default ExpenseItem