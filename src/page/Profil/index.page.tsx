// path : src/page/Profil/index.page.tsx

import React from "react";
import {motion} from "framer-motion";
import {pageVariant} from "../../utils/animation.tsx";

const ProfilPage: React.FC = () => {

  return <motion.div className={"profilContainer"} variants={pageVariant} initial={"hidden"} exit={"exit"} animate={"visible"}>
    <div className="profil">
      Profil
    </div>
  </motion.div>
}

export default ProfilPage