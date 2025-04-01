import "./Membro.css"

const Membro = ( {nome, sobreNome, nivel=0})=>{

    let margin = nivel * 15
    return(
        <div className="cntMembro"
        style={{paddingLeft : margin}}  >
            {nome} <span>{sobreNome}</span>
        </div>
    )

}

export default Membro