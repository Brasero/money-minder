import {motion} from 'framer-motion';
import './floatingButton.scss';
import {useState} from "react";
import {usePopUpContext} from "../../../utils/context/popUpContext.tsx";
import SaisieForm from "../../SaisieComponent/SaisieForm";
import CategoryForm from "../../SaisieComponent/CategoryForm";
import RevenuForm from "../../SaisieComponent/RevenuForm";
import ResetPopUp from "../PopUpContainer/ResetPopUp";

const buttonVariant = {
    initial : {
        width: '50px',
        height: '50px',
        borderRadius: '25px',
        transition: { duration: 0.2 }
    },
    exit: {
        height: '250px',
        borderRadius: '25px',
        width: '70px',
        transition: { duration: 0.2 }
    }
}

const crossVariant = {
    initial: {
        rotate: 0,
        transition: { duration: 0.3 },
        bottom: '-7px'
    },
    exit: {
        rotate: 405,
        transition: { duration: 0.3 },
        bottom: '5px'
    }
}

const pageOptions = {
    depense: <SaisieForm isPopUp/>,
    categorie: <CategoryForm isPopUp/>,
    revenue: <RevenuForm isPopUp/>,
    reset: <ResetPopUp />
}

const tabVariant = (num: number) => {
    return {
        initial: {
            y: 5 * num,
            opacity: 0,
            transition: {duration: 0.3, staggerChildren: 0.3}
        },
        exit: {
            y: 0,
            opacity: 1,
            transition: {duration: 0.3}
        }
    }
}

function FloatingButton() {
    const [buttonState, setButtonState] = useState(false)


    const {
        definePopUp,
        openPopUp,
        resetPopUp
    } = usePopUpContext()

    const handleClick = () => {
        setButtonState(!buttonState)
    }

    const handleNavClick = (page: string) => {
        resetPopUp()
        definePopUp(pageOptions[page])
        openPopUp()
    }

    return (
        <motion.button
            onClick={handleClick}
            className={'floatingButton'}
            animate={buttonState ? 'exit' : 'initial'}
            variants={buttonVariant}
            exit={'exit'}
            initial={'initial'}
        >
            <motion.div
                className={'navItem'}
                initial={'initial'}
                exit={'exit'}
                animate={buttonState ? 'exit' : 'initial'}
                variants={tabVariant(4)}
                onClick={() => handleNavClick('categorie')}
            >
                Ajouter une catégorie
            </motion.div>
            <motion.div
                className={'navItem'}
                initial={'initial'}
                exit={'exit'}
                animate={buttonState ? 'exit' : 'initial'}
                variants={tabVariant(3)}
                onClick={() => handleNavClick('depense')}
            >
                Ajouter une dépense
            </motion.div>
            <motion.div
                className={'navItem'}
                initial={'initial'}
                exit={'exit'}
                animate={buttonState ? 'exit' : 'initial'}
                variants={tabVariant(2)}
                onClick={() => handleNavClick('revenue')}
            >
                Ajouter un revenu
            </motion.div>
            <motion.div
                className={'navItem reset'}
                initial={'initial'}
                exit={'exit'}
                animate={buttonState ? 'exit' : 'initial'}
                variants={tabVariant(1)}
                onClick={() => handleNavClick('reset')}
            >
                Effacer mes dépenses
            </motion.div>
            <motion.div
                className={'cross'}
                initial={'initial'}
                exit={'exit'}
                animate={buttonState ? 'exit' : 'initial'}
                variants={crossVariant}
            >
                +
            </motion.div>
        </motion.button>
    );
}

export default FloatingButton;