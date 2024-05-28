// path : src/page/Profil/index.page.tsx

import './profil.scss';
import React, {useEffect} from "react";
import {motion} from "framer-motion";
import {pageVariant} from "../../utils/animation.tsx";
import {useDispatch, useSelector} from "react-redux";
import {fetchUser} from "../../store/Slice/user.tsx";
import {selectUser} from "../../store/Selector";
import {IoArrowBackSharp} from "react-icons/io5";
import {Link} from "react-router-dom";

const ProfilPage: React.FC = () => {

  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  useEffect(() => {
    dispatch(fetchUser())
  }, []);

  return <motion.div className={"profilContainer"} variants={pageVariant} initial={"hidden"} exit={"exit"} animate={"visible"}>
    <div className="profil">
      <div className="header">
        <Link to={-1} className={'backButton'}>
          <IoArrowBackSharp />
        </Link>
        <div className={"header__title"}>Profil</div>
      </div>
      <div className="person">
        <div className="person__img">
          <img src={user?.picture?.thumbnail} alt={"profil picture"} />
        </div>
        <div className="person__info">
          <div className="identity">
            <span className="first">{user?.name?.first}</span>
            <span className="last">{user?.name?.last}</span>
          </div>
          <div className="dob">
            <span className="date">{user?.dob?.date}</span>
            <span className="age">{user?.dob?.age} ans</span>
          </div>
          <div className="editButton">
            <button>Edit</button>
          </div>
        </div>
        <div className={"links"}>
          <ul className="links__list">

          </ul>
        </div>
      </div>
    </div>
  </motion.div>
}

export default ProfilPage