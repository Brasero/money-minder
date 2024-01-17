import React from "react";
import {IExpense} from "../../../store/Slice/expenseSlice.ts";
import './expenseItem.scss';

interface IExpenseItemProps {
    expense: IExpense
}

const ExpenseItem: React.FC<IExpenseItemProps> = ({expense}: IExpenseItemProps) => {

    return (
        <div className={'expenseItem'}>
            <div className={'date item'}>{(new Date(expense.date)).toLocaleDateString()}</div>
            <div className={'label item'}>{expense.label}</div>
            <div className={'amount item'}>{expense.amount}</div>
            <div className={'category item'}>{expense.category[0].toUpperCase() + expense.category.slice(1)}</div>
        </div>
    )
}
export default ExpenseItem