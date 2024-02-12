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
      duration: 1,
    },
    type: "spring",
  },
}
export const Extra = () => {
  return (
    <div className="extra__container">
        <motion.div className="info" variants={variants} whileInView="animate" initial="initial">
          <div>
            <h4>
              {`"Knowing your own darkness is the best method for 
              dealing with other people's darkness."`}
            </h4>
            <p>- Henry F. Amiel</p>
          </div>
          <img  src="/cj.png" alt="" />
        </motion.div>
    </div>
  )
}
