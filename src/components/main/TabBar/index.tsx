import {motion, AnimatePresence} from 'framer-motion';
import "./TabBar.scss";
import {NavLink} from "react-router-dom";

const liVariants = {
    hidden: {
        opacity: 0,
        x: -100,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const hoverAnimation = {
    scale: 1.2,
    transition: {
        duration: 0.2,
    },
}

interface INavProps {
    isActive: boolean;
}

const isActive = ({isActive}: INavProps) => {
    return isActive ? {
        color: 'transparent',
        background: 'var(--primary-linear)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        scale: '1.4 !important',
        fontWeight: 'var(--bold-text) !important',
    } : {}
}


const TabBar = () => {
    return (
        <AnimatePresence>
            <motion.ul variants={liVariants} initial={'hidden'} animate={'visible'}>
                <motion.li whileHover={hoverAnimation}>
                    <NavLink style={isActive} end to={"/money-minder"}>Home</NavLink>
                </motion.li>
                <motion.li whileHover={hoverAnimation}>
                    <NavLink style={isActive} end to={"/money-minder/saisie"}>Données</NavLink>
                </motion.li>
                <motion.li whileHover={hoverAnimation}>
                    <NavLink style={isActive} end to={"/money-minder/profile"}>Profile</NavLink>
                </motion.li>
            </motion.ul>
        </AnimatePresence>
    );
};

export default TabBar;