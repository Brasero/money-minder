import React from "react";
import './suppressExpensePopUp.scss';
import {useDispatch, useSelector} from "react-redux";
import {selectExpenseById} from "../../../../store/Selector";
import {usePopUpContext} from "../../../../utils/context/popUpContext.tsx";
import ExpenseUpdate from "../index.tsx";
import {deleteExpense} from "../../../../store/Slice/expenseSlice.ts";

interface ISuppressExpensePopUpProps {
    id: number;
}

const SuppressExpensePopUp: React.FC<ISuppressExpensePopUpProps> = ({id}: ISuppressExpensePopUpProps) => {

    const expense = useSelector(selectExpenseById(id))

    const dispatch = useDispatch()
    const {
        definePopUp,
        resetPopUp,
        openPopUp
    } = usePopUpContext()


    const onAbort = () => {
        resetPopUp()
        definePopUp(<ExpenseUpdate id={id} />)
        openPopUp()
    }

    const onValidate = () => {
        dispatch(deleteExpense(id))
        resetPopUp()
    }

    return (
        <div className={"deleteExpense"}>
            <h3 className={'title'}>Attention !</h3>
            {
                expense &&
                <div className={'content'}>
                    En appuyant sur <strong>supprimer</strong> vous supprimerez la
                    dépense <strong>{expense.label}</strong> d'un montant de <strong className={'amount'}>{expense.amount.toFixed(2)}</strong><br/>
                    <div className={'buttonGroup'}>
                        <button className={'abort'} onClick={onAbort}>Annuler</button>
                        <button className={'validate'} onClick={onValidate}>Supprimer</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default SuppressExpensePopUp;