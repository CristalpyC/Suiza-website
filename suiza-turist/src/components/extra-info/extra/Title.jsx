import { useMediaQuery } from 'react-responsive';
import "./title.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const variants = {
  initial:{
    x: -500,
    opacity: 0
  },
  animate:{
    x: 0,
    opacity:1,
    transition:{
      delay:.3,
      duration:.5,
    }
  }
}

const noVariant = {
  initial:{
    x:0,
    opacity: 1
  },
  animate:{
    x:0,
    opacity: 1
  }
}
export const Title = () => {
  const isSmallScreen = useMediaQuery({maxWidth: 500});
  const [animation, setAnimation] = useState(!isSmallScreen);

  useEffect(() => {
    setAnimation(!isSmallScreen)
  },[isSmallScreen]);

  return (
    <div className="president__container">
        <div className="curve"></div>
        <motion.h1 variants={animation ? variants : noVariant} whileInView="animate" initial="initial"><span>Discovering</span> Switzerland</motion.h1>
    </div>
  )
}
