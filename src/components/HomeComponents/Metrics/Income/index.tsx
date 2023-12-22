import React from "react";
import './income.scss';
import Table from "./Table.tsx";
import {NavLink} from "react-router-dom";

export interface IRevenu {
    origin: string;
    amount: number;
    id: number;
}
const Income: React.FC = () => {

    const data: IRevenu[] = [
        {
            origin: 'Salaire',
            amount: 1750,
            id: 1
        },
        {
            origin: 'CAF',
            amount: 850,
            id: 2
        }
    ]

    return (
        <NavLink to={'/money-minder/revenu'} className={'favoriteBank'}>
            <div className={'favoriteBank__header'}>
                <h1 className={"favoriteBank__header__name"}>Revenues</h1>
                <h3 className="favoriteBank__header__owner">
                    <span className="name">Doe</span>
                    <span className="lastname">John</span>
                </h3>
                <div className="favoriteBank__header__amount">
                    <span className="amount">2100</span>
                    <span className="currency">€</span>
                    <span className="separator"></span>
                </div>
            </div>
            <div className={'favoriteBank__chart'}>
                <Table revenus={data} />
            </div>
        </NavLink>
    )
}

export default Income