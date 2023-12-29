import {motion} from 'framer-motion';
import "./TabBar.scss";
import {NavLink} from "react-router-dom";

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
        <ul>
            <motion.li whileHover={hoverAnimation}>
                <NavLink style={isActive} end to={"/money-minder"}>Home</NavLink>
            </motion.li>
            <motion.li whileHover={hoverAnimation}>
                <NavLink style={isActive} end to={"/money-minder/saisie"}>Données</NavLink>
            </motion.li>
            <motion.li whileHover={hoverAnimation}>
                <NavLink style={isActive} end to={"/money-minder/profile"}>Profile</NavLink>
            </motion.li>
        </ul>
    );
};

export default TabBar;