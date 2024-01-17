import React from "react";
import {motion} from "framer-motion";
import './popUpContainer.scss';
import {usePopUpContext} from "../../../utils/context/popUpContext.tsx";


const popUpVariants = {
    initial: {
        opacity: 0,
        scale: 0
    },
    animate: {
        opacity: 1,
        scale: 1
    }
}

const PopUpContainer: React.FC = () => {

    const {
        isOpen,
        popUp,
        resetPopUp
    } = usePopUpContext()

    const close = () => resetPopUp()
    return (

            isOpen &&
                <motion.div
                    variants={popUpVariants}
                    initial={'initial'}
                    exit={'animate'}
                    animate={isOpen ? 'animate' : 'initial'}
                    className={'popUpContainer'}
                >
                    <div className={'card'}>
                        <div className={'header'}><button className={'closeButton'} onClick={close}>X</button></div>
                        {popUp}
                    </div>
                </motion.div>
    )
}
export default PopUpContainer;