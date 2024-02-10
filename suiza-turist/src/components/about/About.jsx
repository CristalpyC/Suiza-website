import "./about.scss";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { motion } from "framer-motion";

const variant = {
  initial:{
    y: -300,
    opacity: 0
  },
  animate:{
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
}

const variantsArrow = {
  initial:{
    y: 10,
    opacity: 0,
  },
  animate:{
    y:1,
    opacity: 1,
    transition:{
      delay: 1,
      duration: 1,
      repeat: Infinity,
    },
    type: "spring",
  },
}
export const About = () => {
  return (
    <div className="about__container">
        <h2>About Switzerland</h2 >
        {/*<div className="snow"></div>*/}
        <motion.div className="info__container" variants={variant} whileInView="animate" initial="initial">
            <img src="/suizaIconFlag.png" alt="" />
            <div className="description">
                <p>
                Switzerland is a small mountainous 
                country located in central Europe. 
                This landlocked country is about 
                the size of New Jersey and is between 
                France and Italy. <span>It is also bordered </span>
                by Austria, Germany, and Liechtenstein.
                </p>
                <div>
                  <button>Essential stops</button>
                  <motion.div variants={variantsArrow} animate="animate" initial="initial">
                    <KeyboardDoubleArrowDownIcon className="arrow__icon"/>
                  </motion.div>
                </div>
            </div>
        </motion.div>
    </div>
  )
}
