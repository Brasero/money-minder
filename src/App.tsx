import './App.scss'
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./page/Home";
import TabBar from "./components/main/TabBar";
import Saisie from "./page/Saisie";


function App() {

    const location = useLocation()

  return (
    <main id={'app'}>
      <div id={"page-container"}>
          <AnimatePresence presenceAffectsLayout={false} mode={"sync"}>
              <Routes location={location} key={location.pathname}>
                  <Route path={"/money-minder"} element={<Home />}/>
                  <Route path={"/money-minder/saisie"} element={<Saisie />}/>
                  <Route path={"/money-minder/profile"} element={<div>Profile</div>}/>
              </Routes>
          </AnimatePresence>
      </div>
      <nav id={"tab-bar"}>
          <TabBar />
      </nav>
    </main>
  )
}

export default App