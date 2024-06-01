// path : src/page/Inscription/index.page.tsx
import "./style.scss";
import React from "react";
import {motion} from "framer-motion";
import {pageVariant} from "../../utils/animation.tsx";

interface IInscriptionPage {
}

const InscriptionPage: React.FC<IInscriptionPage> = () => {

    return (
        <motion.div className={'inscriptionContainer'} variants={pageVariant} animate={"visible"} exit={'exit'}
                    initial={'hidden'}>
            <div className="inscription">

            </div>
        </motion.div>)
}

export default InscriptionPage