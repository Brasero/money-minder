import React from "react";
import './income.scss';
import Table from "./Table.tsx";
import {NavLink, To, useNavigate} from "react-router-dom";
import {displayNumber, normalizeNumber} from "../../../../utils/utils.ts";
import {selectRevenues} from "../../../../store/Selector";
import {useSelector} from "react-redux";
import { IoArrowBackSharp } from "react-icons/io5";

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
    const navigate = useNavigate()

    const totalRevenu = data.reduce((acc: number, current: IRevenu) => {
        return acc + normalizeNumber(current.amount)
    }, 0)

    const goBack = ( ) => {
        navigate(-1 as To, {replace: true})
    }

    return (
            extended ?
                <div className={'favoriteBank'}>
                    <div onClick={goBack} className={'link'}>
                        <IoArrowBackSharp />
                    </div>
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
                        <Table revenus={data}/>
                    </div>
                </div>
                :
                <NavLink to={'/revenu'} className={'favoriteBank'}>
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
                        <div className={'details'}>
                            Details {'>'}
                        </div>
                    </div>
                </NavLink>
    )
}

export default Income