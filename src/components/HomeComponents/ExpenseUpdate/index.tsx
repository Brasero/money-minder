import React, {ChangeEvent, FormEvent, useState} from "react";
import './expenseUpdate.scss';
import {selectCategories, selectExpenseById} from "../../../store/Selector";
import Input from "../../SaisieComponent/Input";
import {updateExpense} from "../../../store/Slice/expenseSlice.ts";
import {usePopUpContext} from "../../../utils/context/popUpContext.tsx";
import SuppressExpensePopUp from "./SuppressExpensePopUp";
import {useAppDispatch, useAppSelector} from "../../../utils/hooks/storeHooks.ts";
import useToast from "../../../utils/hooks/useToast.tsx";


interface IExpenseUpdateProps {
    id: number;
}

const ExpenseUpdate: React.FC<IExpenseUpdateProps> = ({id}: IExpenseUpdateProps) => {

    const dispatch = useAppDispatch()
    const expense = useAppSelector(selectExpenseById(id))
    const category = useAppSelector(selectCategories)
    const toast = useToast()
    const {
        closePopUp,
        resetPopUp,
        definePopUp,
        openPopUp
    } = usePopUpContext()

    const [newValue, setNewValue] = useState({...expense})

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setNewValue({
            ...newValue,
            [name]: value
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(updateExpense({
            ...newValue,
            amount: parseFloat(newValue.amount.toString())
        }))
        toast.success("Dépense modifiée.")
        resetPopUp()
    }

    const onDelete = () => {
        resetPopUp()
        definePopUp(<SuppressExpensePopUp id={id} />)
        openPopUp()
    }

    const close = () => {
        closePopUp()
    }

    return (
        <div className={'expenseUpdate'}>
            <h3 className={"title"}>Modifier une dépense</h3>
            <form className={'form'} onSubmit={handleSubmit}>
                <Input changeMethod={handleChange} label={'Déscription'} value={newValue.label} name={"label"} type={'text'} />
                <Input changeMethod={handleChange} label={'Montant'} value={newValue.amount} name={"amount"} type={'number'} />
                <Input changeMethod={handleChange} label={'Catégorie'} value={newValue.category} name={"category"} type={'select'} options={category} />
                <div className={'buttonGroup'}>
                    <input type={"submit"} value={'Modifier'} className={'validate'}/>
                    <button role={'button'} onClick={close} className={'abort'}>Annuler</button>
                    <button role={'button'} onClick={onDelete} className={'suppress'}>Supprimer</button>
                </div>
            </form>
        </div>
    )
}

export default ExpenseUpdate;