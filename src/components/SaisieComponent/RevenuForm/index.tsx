import React, {ChangeEvent, FormEvent} from "react";
import Input from "../Input";
import './revenuForm.scss';
import {selectRevenu, selectRevenuError} from "../../../store/Selector";
import {changeRevenuValue, addRevenu} from "../../../store/Slice/revenuSlice.ts";
import {useSelector, useDispatch} from "react-redux";

const RevenuForm: React.FC = () => {

    const dispatch = useDispatch();
    const data = useSelector(selectRevenu);
    const error = useSelector(selectRevenuError)
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        dispatch(changeRevenuValue({name,value}))
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(addRevenu())
    }

    return (
        <form id={'revenuForm'} onSubmit={handleSubmit}>
            <h1>Ajouter un revenu</h1>
            <Input value={data.origin} type={'text'} name={'origin'} changeMethod={handleChange} label={'Provenance'} />
            <Input value={data.amount} type={'number'} name={"amount"} changeMethod={handleChange} label={'Montant'} />
            {
                error !== "" && <span className={"error"}>{error}</span>
            }
            <input type={'submit'} value={'Ajouter'} />
        </form>
    )
}

export default RevenuForm;