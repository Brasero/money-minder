// path : src/components/HomeComponents/Metrics/Income/TableItem/index.tsx
import "./style.scss";
import React from 'react'
import {displayNumber} from "../../../../../utils/utils.ts";
import {IRevenu} from "../index.tsx";
import {usePopUpContext} from "../../../../../utils/context/popUpContext.tsx";
import IncomeUpdatePopUp from "../../../../PopUps/IncomeUpdatePopUp";

interface ITableItem {
    revenu: IRevenu
}

const TableItem: React.FC<ITableItem> = ({revenu}) => {

    const {definePopUp, openPopUp} = usePopUpContext()

    const handleClick = () => {
        definePopUp(<IncomeUpdatePopUp revenu={revenu} />)
        openPopUp()
    }

    return (
        <tr className={'item'} onClick={handleClick}>
            <td>{revenu.origin}</td>
            <td>{displayNumber(revenu.amount)}€</td>
        </tr>
    )
}

export default TableItem