// path : src/components/PopUps/IncomeUpdatePopUp/index.tsx
import "./style.scss";
import React, {ChangeEvent, FormEvent, useState} from 'react'
import {IRevenu} from "../../HomeComponents/Metrics/Income";
import Input from "../../SaisieComponent/Input";
import {usePopUpContext} from "../../../utils/context/popUpContext.tsx";
import {useAppDispatch} from "../../../utils/hooks/storeHooks.ts";
import { updateRevenu} from "../../../store/Slice/revenuSlice.ts";
import IncomeSuppressPopUp from "./IncomeSuppressPopUp";
import useToast from "../../../utils/hooks/useToast.tsx";
import {normalizeNumber} from "../../../utils/utils.ts";

interface IIncomeUpdatePopUp {
    revenu: IRevenu;
}

const IncomeUpdatePopUp: React.FC<IIncomeUpdatePopUp> = ({revenu}) => {

    const dispatch = useAppDispatch()
    const [income, setIncome] = useState({...revenu})
    const {resetPopUp, closePopUp, definePopUp, openPopUp} = usePopUpContext()
    const toast = useToast()

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(updateRevenu({
            ...income,
            amount: normalizeNumber(income.amount)
        }))
        toast.success("Mise à jour effectuée.")
        resetPopUp()
        closePopUp()
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setIncome({
            ...income,
            [name]: value
        })
    }

    const handelDelete = () => {
        resetPopUp()
        definePopUp(<IncomeSuppressPopUp revenu={revenu} />)
        openPopUp()
    }

    const close = () => {
        closePopUp()
        resetPopUp()
        closePopUp()
    }

    return (
        <div className={'incomeUpdate'}>
            <h3 className={"title"}>Modifier un revenu</h3>
            <form className={'form'} onSubmit={handleSubmit}>
                <Input label={'Provenance'} changeMethod={handleChange} name={"origin"} value={income.origin}
                       type={'text'}/>
                <Input  label={'Montant'} changeMethod={handleChange} name={"amount"} value={income.amount}
                       type={'number'}/>
                <div className={'buttonGroup'}>
                    <input type={"submit"} value={'Modifier'} className={'validate'}/>
                    <button role={'button'} onClick={close} className={'abort'}>Annuler</button>
                    <button role={'button'} onClick={handelDelete} className={'suppress'}>Supprimer</button>
                </div>
            </form>
        </div>
    )
}

export default IncomeUpdatePopUp