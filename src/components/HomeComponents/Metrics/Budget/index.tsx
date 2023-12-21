import './budget.scss';
import DonutChart from "./DonutChart.tsx";
import {useSelector} from "react-redux";
import {selectCategories} from "../../../../store/Selector";

const Budget = () => {

    const categories = useSelector(selectCategories);
    const total = categories.reduce((acc, current) => {
        if (current.budget) {
            return parseFloat(acc) + parseFloat(current.budget)
        }
        return acc
    }, 0)

    return (
        <div className={'budget'}>
            {/*Right part*/}
            <div className="budget__part">
                <div className="budget__part__header">
                    <h4 className={'budget__part__header__title'}>Budget</h4>
                </div>
                <div className={"budget__part__chart"}>
                    <DonutChart total={total} category={categories}/>
                </div>
                <div className="budget__part__amount">
                    <span className="amount">
                        {total} <span className="currency">€</span>
                    </span>
                    <span className="separator"></span>
                </div>
            </div>
            {/*Left part*/}
            <div className="budget__part">

            </div>
        </div>
    );
};

export default Budget;