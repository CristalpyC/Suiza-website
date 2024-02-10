import { useRef } from "react";
import "./portrait.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const variants = {
  initial:{
    x:-500,
    opacity: 0,
  },
  animate:{
    x:0,
    opacity: 1,
    transition:{
      duration: 1,
      staggerChildren: 0.1,
    },
  },

  scrollButton:{
    opacity: 1,
    y: 12,
    transition: {
      duration: 1,
      repeat: Infinity,
    }
  }
}

const textVariant = {
  initial:{
    x:0,
    opacity: 0
  },
  animate:{
    opacity: 1,
    transition: {delay: .8, duration: .5}
  }
}
export const Portrait = () => {
  const ref = useRef()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "800%"]);
  const yTree = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);
  const yCloud = useTransform(scrollYProgress, [0, 1], ["0%", "250%"]);

  return (
    <div className="portrait__container">
        <motion.h1 style={{y: yText}} variants={textVariant} animate="animate" initial="initial">Switzerland</motion.h1>
        <div className="mountains">
          <div className="mouse__scroll">
            <motion.img variants={variants} animate="scrollButton" src="https://static.thenounproject.com/png/496866-200.png" alt="" />
          </div>
        </div>
        <div className="travelers"></div>
        <motion.div style={{y: yCloud}} className="clouds"></motion.div>
        <motion.div style={{y: yTree}} className="trees"></motion.div>
    </div>
  )
}
