import './App.scss'
import {Routes, Route, useLocation} from "react-router-dom";
import routes from "./routes/routeconfig.ts";
import {AnimatePresence} from "framer-motion";
import TabBar from "./components/main/TabBar";
import {useEffect} from "react";
import {checkIfStorageIsAtDate} from "./utils/localStorage.ts";
import FloatingButton from "./components/HomeComponents/FloatingButton";
import PopUpContainer from "./components/HomeComponents/PopUpContainer";


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
                        {
                            routes.map(route => {
                                return <Route key={route.name} path={route.path} element={<route.Element />} />
                            })
                        }
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