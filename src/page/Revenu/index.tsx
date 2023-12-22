import './revenu.scss';
import React from "react";
import {motion} from "framer-motion";
import {pageVariant} from "../../utils/animation.tsx";
import RevenuForm from "../../components/SaisieComponent/RevenuForm";
import Income from "../../components/HomeComponents/Metrics/Income";


const Revenu: React.FC = () => {
    return (
        <motion.div className={'revenuContainer'} variants={pageVariant} animate={"visible"} exit={'exit'} initial={'hidden'}>
            <Income extended />
            <RevenuForm />
        </motion.div>
    )
}

export default Revenu;