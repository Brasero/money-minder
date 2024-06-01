import React, {ChangeEvent, FormEvent} from "react";
import formConfig from './formConfig.ts';
import Input from "../Input/index.tsx";
import {useSelector, useDispatch} from "react-redux";
import {selectSaisieValues, selectCategories} from "../../../store/Selector";
import {changeValue, resetValues} from "../../../store/Slice/saisieSlice.ts";
import {addExpense} from "../../../store/Slice/expenseSlice.ts";
import './saisie.scss';
import {usePopUpContext} from "../../../utils/context/popUpContext.tsx";
import useToast from "../../../utils/hooks/useToast.tsx";


interface IExpenseFormProps {
    isPopUp: boolean
}
const ExpenseForm: React.FC<IExpenseFormProps> = ({isPopUp = false}: IExpenseFormProps) => {

    const dispatch = useDispatch()
    const values = useSelector(selectSaisieValues)
    const categories = useSelector(selectCategories)
    const toast = useToast()

    const {
        resetPopUp
    } = usePopUpContext()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        dispatch(changeValue({name, value}))
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(addExpense({...values}))
        toast.success("Dépense ajoutée.")
        dispatch(resetValues())
        isPopUp && resetPopUp()
    }

    const submitAgain = (e: any) => {
        e.preventDefault()
        dispatch(addExpense({...values}))
        toast.success("Dépense ajoutée.")
        dispatch(resetValues())
    }

    return (
        <form id={'form'} onSubmit={handleSubmit}>
            <h1>Saisir une dépense</h1>
            {
                Object.keys(formConfig).map((key, index) => {
                    return (
                        <Input
                            key={`input-${index}`}
                            label={formConfig[key].label}
                            type={formConfig[key].type}
                            name={formConfig[key].name}
                            changeMethod={handleChange}
                            value={values[key]}
                            options={formConfig[key].type === 'select' ? categories : undefined}
                        />
                    )
                })
            }
            <input type={"submit"} value={'Ajouter'} />
            <button className={'retake'} onClick={submitAgain}>Ajouter et saisir à nouveau</button>
        </form>
    )
}

export default ExpenseForm