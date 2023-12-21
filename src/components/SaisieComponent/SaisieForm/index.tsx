import React, {ChangeEvent, FormEvent} from "react";
import formConfig from './formConfig.ts';
import Input from "./Input/index.tsx";
import {useSelector, useDispatch} from "react-redux";
import {selectSaisieValues, selectCategories} from "../../../store/Selector";
import {changeValue} from "../../../store/Slice/saisieSlice.ts";
import {addExpense} from "../../../store/Slice/expenseSlice.ts";

const ExpenseForm: React.FC = () => {

    const dispatch = useDispatch()
    const values = useSelector(selectSaisieValues)
    const categories = useSelector(selectCategories)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        dispatch(changeValue({name, value}))
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(addExpense({...values}))
    }

    return (
        <form id={'form'} onSubmit={handleSubmit}>
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
        </form>
    )
}

export default ExpenseForm