import "./extra.scss";
import { motion } from "framer-motion";

const variants = {
  initial:{
    y: 20,
    opacity: 0,
  },
  animate:{
    y:1,
    opacity: 1,
    transition:{
      //delay: 1,
      duration: 1,
      //repeat: Infinity,
    },
    type: "spring",
    //stiffness: 100,
  },
}
export const Extra = () => {
  return (
    <div className="extra__container">
        <motion.div className="info" variants={variants} whileInView="animate" initial="initial">
          <div>
            <h4>
              {`"El conocimiento de tu propia oscuridad es el 
                mejor método para hacer frente a las tinieblas de otras personas."`}
            </h4>
            <p>- Henry F. Amiel</p>
          </div>
          <img  src="/cj.png" alt="" />
        </motion.div>
    </div>
  )
}
