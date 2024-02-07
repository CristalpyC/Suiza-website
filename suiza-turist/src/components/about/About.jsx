import "./about.scss";

export const About = () => {
  return (
    <div className="about__container">
        <h2>About Switzerland</h2>
        <div className="snow"></div>
        <div className="info__container">
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
                <button>Explore more</button>
            </div>
        </div>
        <div className="svg"></div>
    </div>
  )
}
