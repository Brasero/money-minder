// path : src/page/Profil/index.page.tsx

import './profil.scss';
import React, {useEffect} from "react";
import {motion} from "framer-motion";
import {pageVariant} from "../../utils/animation.tsx";
import {fetchUser} from "../../store/Slice/user.tsx";
import {selectUser} from "../../store/Selector";
import {IoArrowBackSharp} from "react-icons/io5";
import { To, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../utils/hooks/storeHooks.ts";

const ProfilPage: React.FC = () => {

  const navigate = useNavigate()

  const dispatch = useAppDispatch()
  const user = useAppSelector(selectUser)

  useEffect(() => {
    dispatch(fetchUser())
  }, []);

  const goBack = () => {
    navigate(-1 as To, {replace: true})
  }

  return <motion.div className={"profilContainer"} variants={pageVariant} initial={"hidden"} exit={"exit"} animate={"visible"}>
    <div className="profil">
      <div className="header">
        <div onClick={goBack} className={'backButton'}>
          <IoArrowBackSharp/>
        </div>
        <div className={"header__title"}>Profil</div>
      </div>
      <div className="person">
        <div className="person__img">
          <img src={user?.picture?.thumbnail} alt={"profil picture"}/>
        </div>
        <div className="person__info">
          <div className="identity">
            <span className="first">{user?.name?.first}</span>
            <span className="last">{user?.name?.last}</span>
          </div>
          <div className="dob">
            <span className="date">{user?.dob?.date}</span>
            <span className="age">{user?.email}</span>
          </div>
          <div className="editButton">
            <button>Edit</button>
          </div>
        </div>
      </div>
      <div className={"links"}>
        <ul className="links__list">

        </ul>
      </div>
    </div>
  </motion.div>
}

export default ProfilPage