import "./places.scss";

export const Places = () => {
  return (
    <div className="places__container">
        <h1>Essential <span>Swiss Stops</span></h1>
        <div className="curve"></div>
        <div className="places__info">
            <div>
                <img src="https://media.traveler.es/photos/61376edc86b46eac7cf5a463/master/w_1600%2Cc_limit/134371.jpg" alt="" />
                <h3>Zúrich <span>⮕</span></h3>
            </div>
            <div>
                <img src="https://alpexcursion.com/storage/media/Geneva/s/Geneva-in-Swiss_1200.webp" alt="" />
                <h3>Ginebra <span>⮕</span></h3>
            </div>
            <div>
                <img src="https://www.travelandleisure.com/thmb/F3V1ei2YrUH4Qd_fvSgkAneZ4R8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-header-zermatt-switzerland-ZERMATT0123-08b7127082434b9f83db57251c051c1b.jpg" alt="" />
                <h3>Zermatt <span>⮕</span></h3>
            </div>
            <div>
                <img src="https://wp-content.miviaje.com/2018/11/ciudad-medieval-lucerna.jpg" alt="" />
                <h3>Lucerna <span>⮕</span></h3>
            </div>
        </div>
    </div>
  )
}
