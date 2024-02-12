import { useEffect } from "react";
import { Footer } from "../../components/footer/Footer";
import "./zurich.scss";
import 'animate.css';

export const Zurich = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
  return (
    <div className="zurich__container">
        <div className="zurich__title">
            <h1 className=" animate__animated animate__pulse">Zurich</h1>
        </div>
        <div className="zurich__info  animate__animated animate__tada">
            <p>
                Zürich, largest city of Switzerland and capital 
                of the canton of Zürich. Located in an Alpine 
                setting at the northwestern end of Lake Zürich, 
                this financial, cultural, and industrial centre 
                stretches out between two forested chains of 
                hills, about 40 miles (60 km) from the northern 
                foothills of the Alps.
            </p>
        </div>
        <div className="zurichimg__container">
            <img src="/zurichpic1.jpg" alt="" />
            <img src="/zurichpic2.jpg" alt="" />
            <img src="/zurichpic3.jpg" alt="" />
        </div>
        <div className="zurich__data">
            <h2>Curiosities</h2>
            <div className="zurichc">
                <ul>
                    <li>Zürich has more than 50 museums at your disposal.</li>
                    <li>Zürich is the largest city in Switzerland, but not the capital.</li>
                    <li>Zürich has no mountains.</li>
                    <li>Be aware, visiting Zürich is expensive.</li>
                </ul>
                <img src="/zurichgif.webp" alt="" />
            </div>
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}
