import React, {ChangeEvent, useState} from "react";
import './categoryForm.scss';
import {useDispatch} from "react-redux";
import {addCategory} from "../../../store/Slice/categorySlice.ts";


interface ICategorySaisie {
    name: string;
    value: string;
    budget: number | undefined
}
const CategoryForm: React.FC = () => {

    const dispatch = useDispatch()

    const initialState: ICategorySaisie = {
        name: '',
        value: '',
        budget: undefined
    }

    const [state, setState] = useState(initialState)
    const [message, setMessage] = useState('')


    const removeMessage = (time: number) => {
        setTimeout(() => {
            setMessage('')
        }, time)
    }
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        const newObject = {
            ...state,
            [name]: value
        }
        if (name === 'name' && value !== "") {
            newObject.value = value.toLowerCase()
            newObject.name = value[0].toUpperCase() + value.substring(1)
        }
        setState(newObject)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (state.name === '') {
            setMessage('Merci de saisir un nom.')
            removeMessage(2000)
            return
        }
        dispatch(addCategory({...state}))
        setState({...initialState})
    }

    return (
        <form className={"categoryForm"} onSubmit={handleSubmit}>
            <h1 className={"title"}>Ajouter une catégorie</h1>
            <input className={'input'} value={state.name} onChange={handleChange} type={'text'} name={'name'} placeholder={'Nom de la categorie'} />
            <input className={'input'} value={state.budget} onChange={handleChange} type={'number'} name={'budget'} placeholder={'Budget de la categorie (optionnel)'} />
            <input className={'submit'} type={'submit'} value={'Ajouter'} />
            {
                message !== '' && <p className={'error'}>{message}</p>
            }
        </form>
    )
}
export default CategoryForm;