import React from "react";
import './income.scss';
import 'react-loading-skeleton/dist/skeleton.css'
import Table from "./Table.tsx";
import {NavLink} from "react-router-dom";
import {displayNumber, normalizeNumber} from "../../../../utils/utils.ts";
import {selectRevenues, selectUser} from "../../../../store/Selector";
import {useSelector} from "react-redux";
import {generatePath} from "../../../../routes/routeconfig.ts";
import BackButton from "../../../BackButton";
import {useAppSelector} from "../../../../utils/hooks/storeHooks.ts";
import Skeleton from "react-loading-skeleton";

interface IIncomeProps {
    extended: boolean;
}

export interface IRevenu {
    origin: string;
    amount: number;
    id: number;
}

const Income: React.FC<IIncomeProps> = ({extended}: IIncomeProps) => {

    const user = useAppSelector(selectUser)

    const data: IRevenu[] = useSelector(selectRevenues)

    const totalRevenu = data.reduce((acc: number, current: IRevenu) => {
        return acc + normalizeNumber(current.amount)
    }, 0)


    return (
            extended ?
                <div className={'favoriteBank'}>
                    <BackButton />
                    <div className={'favoriteBank__header'}>
                        <h1 className={"favoriteBank__header__name"}>Revenues</h1>
                        <h3 className="favoriteBank__header__owner">
                            <span className="name">{user.name?.first || <Skeleton />}</span>
                            <span className="lastname">{user.name?.last || <Skeleton />}</span>
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
                <NavLink to={generatePath("revenu")} className={'favoriteBank'}>
                    <div className={'favoriteBank__header'}>
                        <h1 className={"favoriteBank__header__name"}>Revenues</h1>
                        <h3 className="favoriteBank__header__owner">
                            <span className="name">{user.name?.first || <Skeleton />}</span>
                            <span className="lastname">{user.name?.last || <Skeleton />}</span>
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