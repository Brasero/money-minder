import {motion} from "framer-motion";
import HomeHeader from "./HomeHeader.tsx";
import './Home.scss';
import Tall from "../../components/HomeComponents/Metrics/Tall";
import Budget from "../../components/HomeComponents/Metrics/Budget";
import Outgoing from "../../components/HomeComponents/Metrics/Outgoing";
import {pageVariant} from "../../utils/animation";
import Income from "../../components/HomeComponents/Metrics/Income";
import RealExpenses from "../../components/HomeComponents/Metrics/RealExpenses";
const Home = () => {
    return (
        <motion.div className={'homeContainer'} variants={pageVariant} animate={"visible"} exit={'exit'} initial={'hidden'}>
            <div className={'home'}>
                <HomeHeader />
                <div className={'home__content'}>
                    <div className={'home__content__items'}>
                        <div className="home__content__items__item-lg">
                            <Income extended={false}/>
                        </div>
                        <div className="home__content__items__item-lg">
                            {/*Composant de budget avec graphique donut*/}
                            <Budget/>
                        </div>
                        <div className="home__content__items__item-lg">
                            {/*Composant de dépenses réelles avec graphique donut*/}
                            <RealExpenses />
                        </div>
                        <div className="home__content__items__item-lg-tall">
                            <div className="home__content__items__item-lg-tall__text">
                                {/* Composant de metrics des categories */}
                                <Tall/>
                            </div>
                        </div>
                    </div>
                </div>
                <Outgoing/>
            </div>
        </motion.div>
    );
};

export default Home;