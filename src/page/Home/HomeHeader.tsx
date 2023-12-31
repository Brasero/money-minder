import {useSelector} from "react-redux";
import {selectRevenues} from "../../store/Selector";
import {selectExpenses} from "../../store/Selector";
import {displayNumber, joursRestants} from "../../utils/utils.ts";

const HomeHeader = () => {
    const revenues = useSelector(selectRevenues)
    const totalRevenu = revenues.reduce((acc:number, current) => {
        return acc + current.amount
    }, 0)
    const expenses = useSelector(selectExpenses)
    const totalExpenses = expenses.reduce((acc: number, current) => {
        return acc + current.amount
    }, 0)

    //Nombre de jour restant avant la fin du mois
    const restant = joursRestants();
    console.log(restant);
    const argentRestant = totalRevenu - totalExpenses;
    const argentParJour = argentRestant / restant;

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