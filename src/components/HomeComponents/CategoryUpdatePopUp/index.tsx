import React, {ChangeEvent, FormEvent, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectCategoryById} from "../../../store/Selector";
import Input from "../../SaisieComponent/Input";
import './categoryUpdate.scss';
import {usePopUpContext} from "../../../utils/context/popUpContext.tsx";
import {updateCategory} from "../../../store/Slice/categorySlice.ts";
import SuppressPopUp from "./SuppressPopUp";

interface ICategoryUpdatePopUpProps {
    id: number
}

const CategoryUpdatePopUp: React.FC<ICategoryUpdatePopUpProps> = ({id}: ICategoryUpdatePopUpProps) => {

    const category = useSelector(selectCategoryById(id))
    const [values, setValues] = useState({...category})
    const dispatch = useDispatch()

    const {
        resetPopUp,
        definePopUp
    } = usePopUpContext()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newCatValues = {
            budget: parseFloat(values.budget.toString()),
            name: values.name,
            value: values.name.toLowerCase()
        }
        dispatch(updateCategory({id, values: newCatValues}))
        resetPopUp()
    }

    const onSuppress = () => {
        definePopUp(<SuppressPopUp id={id} />)
    }

    const close = () => resetPopUp()

    return (
        <div className={'updateCat'}>
            <button className={'suppress'} onClick={onSuppress}>Supprimer</button>
            <h3 className={'title'}>Modifier un budget</h3>
            {
                category &&
                <form className={'form'} onSubmit={handleSubmit}>
                    <Input changeMethod={handleChange} type={'text'} name={'name'} label={"Nom"} value={values.name} />
                    <Input changeMethod={handleChange} type={"number"} name={'budget'} label={'budget'} value={values.budget} />
                    <div className={'buttonGroup'}>
                        <input type={"submit"} value={'Modifier'} className={'validate'} />
                        <button onClick={close} className={'abort'}>Annuler</button>
                    </div>
                </form>
            }
        </div>
    )
}

export default CategoryUpdatePopUp;