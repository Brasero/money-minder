import './tall.scss';
import {useSelector} from "react-redux";
import {selectCategories, selectExpenses} from "../../../../store/Selector";
import {displayNumber} from "../../../../utils/utils.ts";
import {NavLink} from "react-router-dom";

const Tall = () => {

    const categories = useSelector(selectCategories)
    const budget = categories.reduce((acc: number, current) => {
        return acc + current.budget
    }, 0);

    const expenses = useSelector(selectExpenses);
    const total = expenses.reduce((acc:number, current) => {
        return acc + current.amount
    }, 0);

    const leftBudget: number = budget - total;
    const percentSpent: number = ((total*100) / budget) || 0;
    const isMinus = (number: number) => {
        return number <= 0 ? 'minus' : "plus"
    };

    const budgetIsSafe = (number: number) => {
        return number >= 100 ? 'minus' : 'plus'
    };


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
                    <span className="currency">€</span><span className='value'>{displayNumber(leftBudget)}</span>
                </div>
            </div>
            <div className="tall__details">
                <div className="tall__details__item">
                    <span className="label">Budget dépensé</span>
                    <span className={`value ${budgetIsSafe(percentSpent)} percent`}>{displayNumber(percentSpent)} %</span>
                </div>
                <div className={'expensesList'}>
                    <h3>Liste des dépenses</h3>
                    {
                        expenses.map((expense) => {
                            return (
                                <div className="tall__details__item" key={`expense-${expense.id}`}>
                                    <span className="label">{expense.label}</span>
                                    <span
                                        className={`value`}
                                    >
                                        {expense.amount} €
                                    </span>
                                </div>
                            )
                        })
                    }
                    <NavLink to={"/money-minder/expenses"} className={'link'}>
                        <div className={'footer'}>
                            Voir Plus {'>'}
                        </div>
                    </NavLink>
                </div>
                <div className={'tall__details__footer'}>
                <span className="tall__details__footer__text">Réstant</span>
                    <span className={`tall__details__footer__value ${isMinus(leftBudget)}`}>{displayNumber(leftBudget)} €</span>
                </div>
            </div>
        </div>
    );
};

export default Tall;