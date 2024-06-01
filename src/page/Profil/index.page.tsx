// path : src/page/Profil/index.page.tsx

import './profil.scss';
import React from "react";
import {motion} from "framer-motion";
import {pageVariant} from "../../utils/animation.tsx";
import {selectUser} from "../../store/Selector";
import {useAppSelector} from "../../utils/hooks/storeHooks.ts";
import BackButton from "../../components/BackButton";

const ProfilPage: React.FC = () => {

  const user = useAppSelector(selectUser)
  const birthdate = new Date(user?.dob?.date).toLocaleDateString("fr")



  return <motion.div variants={pageVariant} initial={"hidden"} exit={"exit"} animate={"visible"}>
    <div className="profilContainer">
      <BackButton />
      <div className="profil">
        <div className="header">
          <div className={"header__title"}>Profil</div>
        </div>
        <div className="person">
          <div className="person__img">
            <img src={user?.picture?.medium} alt={"profil picture"}/>
          </div>
          <div className="person__info">
            <div className="identity">
              <span className="first">{user?.name?.first}</span>
              <span className="last">{user?.name?.last}</span>
            </div>
            <div className="dob">
              <span className="date">née le {birthdate}</span>
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
    </div>
  </motion.div>
}

export default ProfilPage