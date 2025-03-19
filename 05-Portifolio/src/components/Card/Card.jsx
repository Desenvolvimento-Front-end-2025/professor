import "./Card.css"

const Card = ( {titulo, cor, children } )=>{

    cor = cor || "#444"

    return (
        <div className="card">
            <div className="card-header"
            style={{backgroundColor: cor}}>
                {titulo}
            </div>
            <div className="card-body">
               {children}
            </div>

        </div>
    )
}
export default Card