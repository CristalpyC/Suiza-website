import { useEffect } from "react";
import { Footer } from "../../components/footer/Footer";
import "./geneva.scss";
import 'animate.css';
//geneva
//genevabg.png
export const Geneva = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <div className="geneva__container">
        <div className="geneva__title">
            <h1 className=" animate__animated animate__pulse">Geneva</h1>
        </div>
        <div className="geneva__info  animate__animated animate__tada">
            <p>
                Geneva is a city in Switzerland located at the southern tip of 
                the extensive Lake Geneva (Lake Geneva). Surrounded by the Alps and 
                Jura mountains, the town has views of the spectacular Mont Blanc. 
                It houses the headquarters of the UN Europe and the Red Cross, and 
                is a global center for diplomacy and banking.
            </p>
        </div>
        <div className="genevaimg__container">
            <img src="/genevapic1.jpg" alt="" />
            <img src="/Genevapic2.webp" alt="" />
            <img src="/Genevapic3.webp" alt="" />
        </div>
        <div className="geneva__data">
            <h2>Curiosities</h2>
            <div className="genevac">
                <ul>
                    <li>Geneva has the longest wooden bench in the world.</li>
                    <li>Spring is announced by a chestnut tree.</li>
                    <li>You can travel around the city for free.</li>
                    <li>The World Wide Web was created in Geneva.</li>
                </ul>
                <img src="/giphy.gif" alt="" />
            </div>
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}
