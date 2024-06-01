import {selectTotalExpense, selectTotalRevenue} from "../../store/Selector";
import {displayNumber, joursRestants} from "../../utils/utils.ts";
import {useAppSelector} from "../../utils/hooks/storeHooks.ts";

const HomeHeader = () => {
    const totalRevenu = useAppSelector(selectTotalRevenue)
    const totalExpenses = useAppSelector(selectTotalExpense)

    //Nombre de jours restant avant la fin du mois
    const restant = joursRestants();
    const argentRestant = totalRevenu - totalExpenses;
    /**
     * Si restant est différent de 0 et que l'argent restant divisé par restant est supérieur à 0 on calcule, sinon on applique 0
     * Si restant est égale à 0 on assigne simplement l'argent réstant
     */
    const argentParJour = restant !== 0 ?
        (argentRestant / restant) > 0 ?
            argentRestant / restant
            :
            0
        : argentRestant;

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
                    <span className="home__header__metrics__item__value">{displayNumber(totalExpenses)} €</span>
                    <span className="home__header__metrics__item__label">Dépenses</span>
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