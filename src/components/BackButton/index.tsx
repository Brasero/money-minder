// path : src/components/BackButton/index.tsx
import "./style.scss";
import React from 'react'
import {To, useNavigate} from "react-router-dom";
import {IoArrowBackSharp} from "react-icons/io5";

interface IBackButton {
}

const BackButton: React.FC<IBackButton> = () => {

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1 as To, {replace: true})
    }

    return <div onClick={goBack} className={'backButton'}>
        <IoArrowBackSharp/>
    </div>
}

export default BackButton