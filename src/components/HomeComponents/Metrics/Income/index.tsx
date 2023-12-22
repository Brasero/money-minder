import React from "react";
import './income.scss';
import Table from "./Table.tsx";
import {NavLink} from "react-router-dom";
import {displayNumber, normalizeNumber} from "../../../../utils/utils.ts";
import {selectRevenues} from "../../../../store/Selector";
import {useSelector} from "react-redux";

interface IIncomeProps {
    extended: boolean;
}

export interface IRevenu {
    origin: string;
    amount: number;
    id: number;
}
const Income: React.FC<IIncomeProps> = ({extended}: IIncomeProps) => {

    const data: IRevenu[] = useSelector(selectRevenues)

    const totalRevenu = data.reduce((acc: number, current: IRevenu) => {
        return acc + normalizeNumber(current.amount)
    }, 0)


    return (
        <NavLink to={'/money-minder/revenu'} className={'favoriteBank'}>
            <div className={'favoriteBank__header'}>
                <h1 className={"favoriteBank__header__name"}>Revenues</h1>
                <h3 className="favoriteBank__header__owner">
                    <span className="name">Doe</span>
                    <span className="lastname">John</span>
                </h3>
                <div className="favoriteBank__header__amount">
                    <span className="amount">{displayNumber(totalRevenu)}</span>
                    <span className="currency">€</span>
                    <span className="separator"></span>
                </div>
            </div>
            <div className={'favoriteBank__chart'}>
                {
                    extended ?
                        <Table revenus={data} />
                        :
                        <div className={'details'}>
                            Details {'>'}
                        </div>
                }
            </div>
        </NavLink>
    )
}

export default Income