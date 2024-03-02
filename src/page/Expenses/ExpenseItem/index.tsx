import React from "react";
import {IExpense} from "../../../store/Slice/expenseSlice.ts";
import './expenseItem.scss';
import {usePopUpContext} from "../../../utils/context/popUpContext.tsx";
import ExpenseUpdate from "../../../components/HomeComponents/ExpenseUpdate";

interface IExpenseItemProps {
    expense: IExpense
}

const ExpenseItem: React.FC<IExpenseItemProps> = ({expense}: IExpenseItemProps) => {

    const {
        definePopUp,
        openPopUp,
        resetPopUp
    } = usePopUpContext()

    const click = () => {
        resetPopUp()
        definePopUp(<ExpenseUpdate id={expense.id} />)
        openPopUp()
    }

    const formattedAmount = String(Math.floor(expense.amount * 100) / 100)
        .replace('.',',');

    return (
        <div className={'expenseItem'} onClick={click}>
            <div className={'date item'}>{(new Date(expense.date)).toLocaleDateString()}</div>
            <div className={'label item'}>{expense.label}</div>
            <div className={'amount item'}>{formattedAmount}</div>
            <div className={'category item'}>{expense.category[0].toUpperCase() + expense.category.slice(1)}</div>
        </div>
    )
}
export default ExpenseItem