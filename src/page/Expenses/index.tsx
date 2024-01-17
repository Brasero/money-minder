import React from "react";
import './expense.scss';
import {motion} from "framer-motion";
import {pageVariant} from "../../utils/animation.tsx";
import {useSelector} from "react-redux";
import {selectExpenses} from "../../store/Selector";
import {IoArrowBackSharp} from "react-icons/io5";
import {NavLink} from "react-router-dom";
import ExpenseItem from "./ExpenseItem";

const Expenses: React.FC = () => {

    const expenses = useSelector(selectExpenses)

    return (
        <motion.div className={"expenseContainer"} variants={pageVariant} animate={"visible"} exit={'exit'} initial={'hidden'}>
            <header className={'header'}>
                <NavLink to={'/money-minder'} className={'link'}>
                    <IoArrowBackSharp />
                </NavLink>
                <h1 className={'title'}>Liste des dépenses</h1>
            </header>
            <div className={'expenseContainer__list'}>
                {
                    expenses.length > 0 ?
                        expenses.map((expense) => {
                            return <ExpenseItem expense={expense} key={`expense-${expense.id}`} />
                        })
                        :
                        <div className={'empty'}>Aucune dépenses à afficher pour le moment.</div>
                }
            </div>
        </motion.div>
    )
}
export default Expenses;