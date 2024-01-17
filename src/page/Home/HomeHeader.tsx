import {useSelector} from "react-redux";
import {selectTotalExpense, selectTotalRevenue} from "../../store/Selector";
import {displayNumber, joursRestants} from "../../utils/utils.ts";

const HomeHeader = () => {
    const totalRevenu = useSelector(selectTotalRevenue)
    const totalExpenses = useSelector(selectTotalExpense)

    //Nombre de jours restant avant la fin du mois
    const restant = joursRestants();
    const argentRestant = totalRevenu - totalExpenses;
    const argentParJour = (argentRestant / restant) > 0 ? argentRestant / restant : 0;

    return (
        <header className={'home__header'}>
            <h1 className={"home__header__title"}>Money Minder</h1>
            <small className={"home__header__small"}>Votre suivi financier personnel</small>
            <div className={'home__header__metrics'}>
                <div className="home__header__metrics__item">
                    <span className="home__header__metrics__item__value">{displayNumber(argentRestant)} €</span>
                    <span className="home__header__metrics__item__label">Argent réstant</span>
                </div>
                <div className="home__header__metrics__item">
                    <span className="home__header__metrics__item__value">{displayNumber(totalRevenu)} €</span>
                    <span className="home__header__metrics__item__label">Revenu</span>
                </div>
                <div className="home__header__metrics__item">
                    <span className="home__header__metrics__item__value">{displayNumber(argentParJour)} €</span>
                    <span className="home__header__metrics__item__label">Argent / jour</span>
                </div>
            </div>
        </header>
    );
};

export default HomeHeader;