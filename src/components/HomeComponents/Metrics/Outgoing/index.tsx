import React from 'react';
import './outgoing.scss';
import {useSelector} from "react-redux";
import {selectExpenses, selectCategories} from "../../../../store/Selector";
import {displayNumber} from "../../../../utils/utils.ts";
import {usePopUpContext} from "../../../../utils/context/popUpContext.tsx";
import CategoryUpdatePopUp from "../../CategoryUpdatePopUp";

interface ISpend {
    cat: string;
    budget: number;
    real: number;
    id: number;
}

const isNegative = (num: number) => {
    return num <= 0;
}

const Outgoing: React.FC = () => {

    const expenses = useSelector(selectExpenses)
    const categories = useSelector(selectCategories)

    const {
        definePopUp,
        openPopUp
    } = usePopUpContext()

    const openModifyPopUp = (id: number) => {
        definePopUp(<CategoryUpdatePopUp id={id}/>);
        openPopUp();
    }

    const reals = expenses.reduce((acc: never[], current) => {
        if (acc[current.category]){
            acc[current.category] += current.amount
        } else {
            acc[current.category] = current.amount
        }
        return acc
    }, [])

    console.log(reals)


    const data: ISpend[] = categories.reduce((acc , current) => {
        acc.push({
            cat: current.name,
            budget: current.budget || 0,
            real: reals[current.value] || 0,
            id: current.id
        })
        return acc
    }, [])

    const total = data.reduce((acc, current) => {
        acc.budget += parseFloat(String(current.budget))
        acc.real += parseFloat(String(current.real))
        return acc
    }, {budget: 0, real: 0})

    return (
        <div className={'outgoing'}>
            <div className="outgoing__header">
                <h4 className={'outgoing__header__title'}>Budget / Dépenses</h4>
            </div>
            <div className="outgoing__container">
                <table className="outgoing__table">
                    <thead>
                        <tr>
                            <th scope={"col"}>Catégorie</th>
                            <th scope={"col"}>Budget</th>
                            <th scope={"col"}>Dépenses réelles</th>
                            <th scope={"col"}>Réstant</th>
                        </tr>
                    </thead>
                    <tbody>
                    {data.map((spend, index) => {
                        const difference = spend.budget - spend.real
                        return (
                            <tr className={'item'} key={index} onClick={() => openModifyPopUp(spend.id)}>
                                    <td>{spend.cat}</td>
                                    <td data-label={"Budget"}>{displayNumber(spend.budget)} €</td>
                                    <td data-label={"Dépenses réelles"}>{displayNumber(spend.real)} €</td>
                                    <td data-label={"Réstant"} className={isNegative(difference) ? 'negative' : undefined}>{displayNumber(difference)} €</td>
                                </tr>
                            )
                        })
                        }
                        <tr className={"last"}>
                            <td>Total</td>
                            <td data-label={"Budget"}>{displayNumber(total.budget)} €</td>
                            <td data-label={"Dépenses réelles"}>{displayNumber(total.real)} €</td>
                            <td data-label={"Réstant"} className={isNegative(total.budget - total.real) ? 'negative' : undefined}>{displayNumber(total.budget - total.real)} €</td>
                        </tr>
                    </tbody>
                </table>
                <div className={'outgoing__container__chart'}>
                    {/*<DonutChart total={450}/>*/}
                </div>
            </div>
        </div>
    );
};

export default Outgoing;