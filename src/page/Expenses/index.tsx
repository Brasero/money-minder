import React, {useEffect} from "react";
import './expense.scss';
import {motion} from "framer-motion";
import {pageVariant} from "../../utils/animation.tsx";
import {useSelector} from "react-redux";
import {selectExpenses} from "../../store/Selector";
import {IoArrowBackSharp} from "react-icons/io5";
import {NavLink} from "react-router-dom";
import ExpenseItem from "./ExpenseItem";
import {IExpense} from "../../store/Slice/expenseSlice.ts";

const Expenses: React.FC = () => {

    const expenses = useSelector(selectExpenses)

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: "smooth"});
    }, [])

    const total: string = String(Math.floor(expenses.reduce((acc: number, current: IExpense) => {
        return acc + current.amount;
    }, 0) * 100) / 100).replace('.',',');

    return (
        <motion.div className={"expenseContainer"} variants={pageVariant} animate={"visible"} exit={'exit'} initial={'hidden'}>
            <header className={'header'} id={'top'}>
                <NavLink to={'/money-minder'} className={'link'}>
                    <IoArrowBackSharp />
                </NavLink>
                <h1 className={'title'}>Liste des dépenses</h1>
               <div className={'lexique'}>
                   <div>Date</div>
                   <div>Déscription</div>
                   <div>Montant</div>
                   <div>Catégorie</div>
               </div>
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
            <footer>
                <div className={'total'}>Total : {total}€</div>
            </footer>
        </motion.div>
    )
}
export default Expenses;