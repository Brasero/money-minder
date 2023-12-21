import './Bank.scss';
import Chart from "./chart.tsx";

const Bank = () => {
    return (
        <div className={'favoriteBank'}>
            <div className={'favoriteBank__header'}>
                <h1 className={"favoriteBank__header__name"}>crédit mutuel</h1>
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
                <Chart />
            </div>
        </div>
    );
};

export default Bank;