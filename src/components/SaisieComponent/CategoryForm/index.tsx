import React, {ChangeEvent, useState} from "react";
import './categoryForm.scss';
import {useDispatch} from "react-redux";
import {addCategory} from "../../../store/Slice/categorySlice.ts";
import Input from "../Input";


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
        budget: 0
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
            <h1 className={"title"}>Ajouter une catégorie de dépense</h1>
            <Input label={'Nom'} value={state.name} type={'text'} name={'name'} changeMethod={handleChange} />
            <Input label={'Budget (0€)'} name={'budget'} type={'number'} value={state.budget} changeMethod={handleChange} />
            <input className={'submit'} type={'submit'} value={'Ajouter'} />
            {
                message !== '' && <p className={'error'}>{message}</p>
            }
        </form>
    )
}
export default CategoryForm;