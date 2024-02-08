import './App.scss'
import {Routes, Route, useLocation} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import Home from "./page/Home";
import TabBar from "./components/main/TabBar";
import Revenu from "./page/Revenu";
import {useEffect} from "react";
import {checkIfStorageIsAtDate} from "./utils/localStorage.ts";
import FloatingButton from "./components/HomeComponents/FloatingButton";
import PopUpContainer from "./components/HomeComponents/PopUpContainer";
import Expenses from "./page/Expenses";


function App() {

    //Nettoyage du local storage en début de mois
    useEffect(() => {
        checkIfStorageIsAtDate()
    }, [])

    const location = useLocation()

    return (
        <main id={'app'}>
            <div id={"page-container"}>
                <AnimatePresence presenceAffectsLayout={false} mode={"wait"}>
                    <Routes location={location} key={location.pathname}>
                        <Route path={"/money-minder"} element={<Home/>}/>
                        <Route path={"/money-minder/profile"} element={<div>Profile</div>}/>
                        <Route path={"/money-minder/revenu"} element={<Revenu/>}/>
                        <Route path={"/money-minder/expenses"} element={<Expenses />} />
                    </Routes>
                </AnimatePresence>
                <FloatingButton />
                <PopUpContainer />
            </div>
            <nav id={"tab-bar"}>
                <TabBar/>
            </nav>
        </main>
    )
}

export default App