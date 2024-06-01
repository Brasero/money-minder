import React, {ChangeEvent, useState} from "react";
import './categoryForm.scss';
import {addCategory} from "../../../store/Slice/categorySlice.ts";
import Input from "../Input";
import {usePopUpContext} from "../../../utils/context/popUpContext.tsx";
import {useAppDispatch} from "../../../utils/hooks/storeHooks.ts";
import useToast from "../../../utils/hooks/useToast.tsx";


interface ICategorySaisie {
    name: string;
    value: string;
    budget: number | undefined
}

interface ICategooryFormProps {
    isPopUp: boolean
}
const CategoryForm: React.FC<ICategooryFormProps> = ({isPopUp = false}: ICategooryFormProps) => {

    const dispatch = useAppDispatch()
    const toast = useToast()
    const initialState: ICategorySaisie = {
        name: '',
        value: '',
        budget: 0
    }

    const {
        resetPopUp
    } = usePopUpContext()

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
        toast.success("Budget ajouté.")
        setState({...initialState})
        isPopUp && resetPopUp()
    }

    return (
        <form className={"categoryForm"} onSubmit={handleSubmit}>
            <h1 className={"title"}>Ajouter un budget</h1>
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