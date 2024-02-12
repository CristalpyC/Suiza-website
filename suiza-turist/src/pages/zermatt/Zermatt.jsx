import { useEffect } from "react";
import { Footer } from "../../components/footer/Footer";
import "./zermatt.scss";
import 'animate.css';

export const Zermatt = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <div className="zermatt__container">
        <div className="zermatt__title">
            <h1 className=" animate__animated animate__pulse">Zermatt</h1>
        </div>
        <div className="zermatt__info  animate__animated animate__tada">
            <p>
            Zermatt, in the canton of Valais in southern 
            Switzerland, is an alpine resort famous for skiing, 
            mountaineering and hiking. The city, at an elevation 
            of around 1,600 m, sits beneath the iconic 
            pyramid-shaped summit of the Matterhorn.
            </p>
        </div>
        <div className="zermattimg__container">
            <img src="/zermattpic1.jpg" alt="" />
            <img src="/zermattpic2.webp" alt="" />
            <img src="/zermattpic3.avif" alt="" />
        </div>
        <div className="zermatt__data">
            <h2>Curiosities</h2>
            <div className="zermattc">
                <ul>
                    <li>Zermatt is a car-free village, preserving its picturesque environment.</li>
                    <li>Zermatt offers top-notch skiing.</li>
                    <li>High-altitude railway with stunning views.</li>
                    <li>{`Traditional wooden chalets define Zermatt's charm.`}</li>
                </ul>
                <img src="/snowy.png!bw700" alt="" />
            </div>
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}
