import "./saisie.scss";
import React from 'react';
import {pageVariant} from "../../utils/animation.tsx";
import {motion} from "framer-motion";
import ExpenseForm from "../../components/SaisieComponent/ExpenseForm";
import CategoryForm from "../../components/SaisieComponent/CategoryForm";

const Saisie: React.FC = () => {
    return (
        <motion.div className={'saisie'} variants={pageVariant} animate={"visible"} exit={'exit'} initial={'hidden'}>
            <ExpenseForm isPopUp={false}/>
            <CategoryForm isPopUp={false}/>
        </motion.div>
    );
};

export default Saisie;