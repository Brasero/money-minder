import './App.scss'
import 'react-toastify/dist/ReactToastify.css';
import {Routes, Route, useLocation} from "react-router-dom";
import routes from "./routes/routeconfig.ts";
import {AnimatePresence} from "framer-motion";
import TabBar from "./components/main/TabBar";
import {useEffect} from "react";
import {checkIfStorageIsAtDate} from "./utils/localStorage.ts";
import FloatingButton from "./components/HomeComponents/FloatingButton";
import PopUpContainer from "./components/HomeComponents/PopUpContainer";
import {fetchUser} from "./store/Slice/user.tsx";
import {useAppDispatch} from "./utils/hooks/storeHooks.ts";
import {ToastContainer} from "react-toastify";


function App() {

    const dispatch = useAppDispatch()

    //Nettoyage du local storage en début de mois
    useEffect(() => {
        checkIfStorageIsAtDate()
    }, [])

    useEffect(() => {
        dispatch(fetchUser())
    }, [dispatch]);

    const location = useLocation()

    return (
        <main id={'app'}>
            <ToastContainer position={"top-right"} />
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