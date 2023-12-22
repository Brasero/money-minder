import React from "react";
import {IRevenu} from "./index.tsx";
import './table.scss';
import {displayNumber} from "../../../../utils/utils.ts";

interface ITableProps {
    revenus: IRevenu[]
}

const Table: React.FC<ITableProps> = ({revenus}: ITableProps) => {

    return (
        <table className={'income'}>
            <tbody className={'income__container'}>
                <tr className={"header"}>
                    <th>Provenance</th>
                    <th>Montant</th>
                </tr>
                {
                    revenus.map(revenu => {
                        return <tr key={`revenu-${revenu.id}`} className={'item'}>
                            <td>{revenu.origin}</td>
                            <td>{displayNumber(revenu.amount)}€</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    )
}

export default Table