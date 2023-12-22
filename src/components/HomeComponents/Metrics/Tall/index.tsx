import './tall.scss';
import {useSelector} from "react-redux";
import {selectCategories, selectExpenses} from "../../../../store/Selector";
import {displayNumber} from "../../../../utils/utils.ts";

const Tall = () => {
    const categories = useSelector(selectCategories)
    const budget = categories.reduce((acc: number, current) => {
        return acc + current.budget
    }, 0)

    const expenses = useSelector(selectExpenses)
    const total = expenses.reduce((acc:number, current) => {
        return acc + current.amount
    }, 0)

    const leftBudget = budget - total;


    return (
        <div className={'tall'}>
            <div className={'tall__bank'}>
                <div className="tall__bank__icon">

                </div>
                <div className="tall__bank__name">
                    <div className="tall__bank__name__text">Budget disponible</div>
                    <div className="tall__bank__name__separator"></div>
                </div>
                <div className="tall__bank__value">
                    <span className="currency">€</span><span className="value">{displayNumber(leftBudget)}</span>
                </div>
            </div>
            <div className="tall__details">
                <div className="tall__details__item">
                    <span className="label">Dépenses</span>
                    <span className="value plus">2.13%</span>
                </div>
                <div className="tall__details__item">
                    <span className="label">Economies</span>
                    <span className="value minus">0.7%</span>
                </div>
                <div className="tall__details__item">
                    <span className="label">Alimentaire</span>
                    <span className="value plus">3.5%</span>
                </div>
                <div className="tall__details__item">
                    <span className="label">Loisirs</span>
                    <span className="value plus">5%</span>
                </div>
                <div className={'tall__details__footer'}>
                    <span className="tall__details__footer__text">Différence</span>
                    <span className="tall__details__footer__value minus">224€</span>
                </div>
            </div>
        </div>
    );
};

export default Tall;