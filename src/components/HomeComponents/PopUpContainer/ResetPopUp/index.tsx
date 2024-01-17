import React from "react";
import './resetPopUp.scss';
import {usePopUpContext} from "../../../../utils/context/popUpContext.tsx";
import {useDispatch} from "react-redux";
import {resetExpense} from "../../../../store/Slice/expenseSlice.ts";


const ResetPopUp: React.FC = () => {

    const {
        resetPopUp
    } = usePopUpContext()

    const dispatch = useDispatch()
    const validateReset = () => {
        dispatch(resetExpense())
        resetPopUp()
    }

    return (
        <div className={'resetPopUp'}>
            <h3 className={'title'}>Attention !</h3>
            <h4 className={'subtitle'}>
                Vous vous apprêtez à supprimer l'ensemble des dépenses que vous avez saisies.<br/>
                En cliquant sur <strong>oui</strong> vous ne pourrez pas les récupérer.<br/>
                <strong>Voulez vous continuer ?</strong>
            </h4>
            <div className={'buttonGroup'}>
                <button onClick={validateReset}>Oui</button>
                <button onClick={() => resetPopUp()}>Annuler</button>
            </div>
        </div>
    )
}

export default ResetPopUp;