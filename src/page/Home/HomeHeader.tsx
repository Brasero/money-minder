
const HomeHeader = () => {
    return (
        <header className={'home__header'}>
            <h1 className={"home__header__title"}>Money Minder</h1>
            <small className={"home__header__small"}>Votre suivi financier personnel</small>
            <div className={'home__header__metrics'}>
                <div className="home__header__metrics__item">
                    <span className="home__header__metrics__item__value">450 €</span>
                    <span className="home__header__metrics__item__label">Argent réstant</span>
                </div>
                <div className="home__header__metrics__item">
                    <span className="home__header__metrics__item__value">2100 €</span>
                    <span className="home__header__metrics__item__label">Revenu</span>
                </div>
                <div className="home__header__metrics__item">
                    <span className="home__header__metrics__item__value">85 €</span>
                    <span className="home__header__metrics__item__label">Argent / jour</span>
                </div>
            </div>
        </header>
    );
};

export default HomeHeader;