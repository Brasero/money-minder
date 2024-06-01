import React from "react";
import {IRevenu} from "./index.tsx";
import './table.scss';
import TableItem from "./TableItem";

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
                        return <TableItem revenu={revenu} key={`revenu-${revenu.id}`} />
                    })
                }
            </tbody>
        </table>
    )
}

export default Table