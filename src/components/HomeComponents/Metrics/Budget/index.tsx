import './budget.scss';
import {useSelector} from "react-redux";
import {selectCategories} from "../../../../store/Selector";
import {ICategory} from "../../../../store/Slice/categorySlice.ts";
import {normalizeNumber} from "../../../../utils/utils.ts";
import AgDonutChart from "../../../AgDonutChart";
import {displayNumber} from "../../../../utils/utils.ts";

const Budget = () => {

    const categories = useSelector(selectCategories);
    const total = categories.reduce((acc: number, current: ICategory) => {
        if (current.budget) {
            return acc + normalizeNumber(current.budget)
        }
        return acc
    }, 0)

    return (
        <div className={'budget'}>
            <div className="budget__part">
                <div className="budget__part__header">
                    <h4 className={'budget__part__header__title'}>Budget</h4>
                </div>
                <div className={"budget__part__chart"}>
                    <AgDonutChart items={categories} name={'budget'} />
                </div>
                <div className="budget__part__amount">
                    <span className="amount">
                        {displayNumber(normalizeNumber(total))} <span className="currency">€</span>
                    </span>
                    <span className="separator"></span>
                </div>
            </div>
        </div>
    );
};

export default Budget;