import { Extra } from "../extra-info/Extra";
import { Footer } from "../footer/Footer";
import { motion } from "framer-motion";
import "./places.scss";
import { Link } from "react-router-dom";

const variants = {
    initial:{
        y: 100,
        opacity: 0
    },
    animate:{
        y:1,
        opacity: 1,
        transition:{
            delay: .2,
            duration: .2,
            type: "spring", stiffness: 100 
        },
    },
}

const variants2 = {
    initial:{
        y: -200,
        opacity: 0
    },
    animate:{
        y:1,
        opacity: 1,
        transition:{
            delay: .2,
            duration: .2,
            type: "spring", stiffness: 100 
        },
    },
}
export const Places = () => {
  return (
    <div className="places__container">
        <div className="places__info">
            <motion.div variants={variants} whileInView="animate" initial="initial">
                <img src="https://media.traveler.es/photos/61376edc86b46eac7cf5a463/master/w_1600%2Cc_limit/134371.jpg" alt="" />
                <Link to="/zurich"><h3>Zürich <span>⮕</span></h3></Link>
            </motion.div>
            <motion.div variants={variants2} whileInView="animate" initial="initial">
                <img className="pic2" src="https://alpexcursion.com/storage/media/Geneva/s/Geneva-in-Swiss_1200.webp" alt="" />
                <Link to="/geneva"><h3 className="pic2__title">Geneva <span>⮕</span></h3></Link>
            </motion.div>
            <motion.div variants={variants} whileInView="animate" initial="initial">
                <img src="https://www.travelandleisure.com/thmb/F3V1ei2YrUH4Qd_fvSgkAneZ4R8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-header-zermatt-switzerland-ZERMATT0123-08b7127082434b9f83db57251c051c1b.jpg" alt="" />
                <Link to="/zermatt"><h3>Zermatt <span>⮕</span></h3></Link>
            </motion.div>
        </div>
        <div>
        </div>
        <div>
            <Extra />
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}
