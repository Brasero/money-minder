import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { BrowserRouter as Router } from "react-router-dom";
import {Provider} from "react-redux";
import store from './store/index.tsx';
import ProvidePopUpContext from "./utils/context/popUpContext.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Router basename={'/money-minder'}>
            <Provider store={store}>
                <ProvidePopUpContext>
                    <App />
                </ProvidePopUpContext>
            </Provider>
        </Router>
    </React.StrictMode>,
)