import {motion} from 'framer-motion';
import "./TabBar.scss";
import {NavLink} from "react-router-dom";
import { CgProfile, CgHome } from "react-icons/cg";

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
        scale: '1.4 !important',
        fontWeight: 'var(--bold-text) !important',
        borderBottom: '3px solid var(--primary-color)'
    } : {}
}


const TabBar = () => {
    return (
        <ul>
            <motion.li whileHover={hoverAnimation}>
                <NavLink style={isActive} end to={"/money-minder"}>
                    <CgHome />
                </NavLink>
            </motion.li>
            <motion.li whileHover={hoverAnimation}>
                <NavLink style={isActive} end to={"/money-minder/profile"}>
                    <CgProfile />
                </NavLink>
            </motion.li>
        </ul>
    );
};

export default TabBar;