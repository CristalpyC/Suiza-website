import "./extra.scss";

export const Extra = () => {
  return (
    <div className="extra__container">
        <h1><span>Curious</span> About Switzerland</h1>
        <div className="extrainfo__container">
            <img src="https://media2.giphy.com/media/oH9EpHYhOtlIZipqpk/giphy.gif" alt="languages" />
            <p>
                En Suiza existen cuatro regiones lingüísticas: <span>la germano-parlante, 
                la francófona, la italiana y la retorrománica.</span> Mientras retrocede 
                el uso de los idiomas nacionales alemán, italiano y romanche, 
                aumenta el porcentaje de hablantes del francés y de otras lenguas 
                no nacionales. El inglés y el portugués son los dos idiomas 
                no nacionales más hablados. El plurilingüismo es un aspecto esencial 
                de la identidad nacional suiza.
            </p>
        </div>
    </div>
  )
}
