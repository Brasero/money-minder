import React from 'react';
import './realExpense.scss';
import {useSelector} from "react-redux";
import {selectExpenses} from "../../../../store/Selector";
import {IExpense} from "../../../../store/Slice/expenseSlice.ts";
import {displayNumber, normalizeNumber} from "../../../../utils/utils.ts";
import AgDonutChart from "../../../AgDonutChart";

export interface IExpenseItem {
    name: string;
    budget: number;
}

const RealExpenses: React.FC = () => {

    const expenses = useSelector(selectExpenses)
    const total = expenses.reduce((acc: number, expense: IExpense) => {
        return acc + expense.amount;
    }, 0)

    const expensesByCat: IExpenseItem[] = expenses.reduce((acc: IExpenseItem[], expense: IExpense) => {
        const exist = acc.find((exp) => expense.category === exp.name)
        if (exist) {
            exist.budget += normalizeNumber(expense.amount);
        } else {
            const expenseItem: IExpenseItem = {
                name: expense.category,
                budget: normalizeNumber(expense.amount)
            }
            acc.push(expenseItem)
        }
        return acc
    }, [])

    return (
        <div className={'realExpenses'}>
            <div className={'realExpenses__part'}>
                <div className={"realExpenses__part__header"}>
                    <h4 className={'realExpenses__part__header__title'}>Dépenses réelles</h4>
                </div>
                <div className={"realExpenses__part__chart"}>
                    <AgDonutChart items={expensesByCat} name={"dépenses"} />
                </div>
                <div className="realExpenses__part__amount">
                    <span className="amount">
                        {displayNumber(normalizeNumber(total))} €
                    </span>
                    <span className="separator"></span>
                </div>
            </div>
        </div>
    );
}

export default RealExpenses;