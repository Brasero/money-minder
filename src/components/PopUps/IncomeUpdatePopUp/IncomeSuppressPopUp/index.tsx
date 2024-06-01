// path : src/components/HomeComponents/ExpenseUpdate/SuppressExpensePopUp/IncomeSuppressPopUp/index.tsx
import "./style.scss";
import React from 'react'
import {IRevenu} from "../../../HomeComponents/Metrics/Income";
import {usePopUpContext} from "../../../../utils/context/popUpContext.tsx";
import IncomeUpdatePopUp from "../index.tsx";
import {useAppDispatch} from "../../../../utils/hooks/storeHooks.ts";
import {deleteRevenu} from "../../../../store/Slice/revenuSlice.ts";
import useToast from "../../../../utils/hooks/useToast.tsx";

interface IIncomeSuppressPopUp {
    revenu: IRevenu
}

const IncomeSuppressPopUp: React.FC<IIncomeSuppressPopUp> = ({revenu}) => {

    const {definePopUp, openPopUp, resetPopUp, closePopUp} = usePopUpContext()
    const dispatch = useAppDispatch()
    const toast = useToast()

    const abort = () => {
        closePopUp()
        resetPopUp()
        definePopUp(<IncomeUpdatePopUp revenu={revenu} />)
        openPopUp()
    }

    const validate = () => {
        dispatch(deleteRevenu(revenu.id))
        toast.success("Revenu supprimé.")
        closePopUp()
        resetPopUp()
    }

    return (
        <div className={"deleteIncome"}>
            <h3 className={'title'}>Attention !</h3>
              <div className={'content'}>
                En appuyant sur <strong>supprimer</strong> vous supprimerez le
                  revenu provenant de <strong>{revenu.origin}</strong> d'un montant de <strong
                className={'amount'}>{revenu.amount.toFixed(2)}</strong>,<br/>
                  êtes-vous sûr de vouloir le supprimer ?
                <div className={'buttonGroup'}>
                  <button className={'abort'} onClick={abort}>Non</button>
                  <button className={'validate'} onClick={validate}>Oui</button>
                </div>
              </div>
        </div>
    )
}

export default IncomeSuppressPopUp