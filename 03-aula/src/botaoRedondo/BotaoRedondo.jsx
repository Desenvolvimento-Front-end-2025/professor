import "./BotaoRedondo.css"

// const BotaoRedondo = ( props )=>{
    const BotaoRedondo = ( {corFundo, titulo, tituloAlternativo} )=>{

    //console.log(props)

    // let {corFundo, titulo} = props
    // console.log(corFundo, titulo)
    let valor = 0

    const okClick = ()=>{
        valor++
        console.log(valor)
        titulo = valor
    }


return (
    <div className="btnRedondo"
    style={ {backgroundColor : corFundo } }
    onClick={okClick}
    >
        {titulo}
    </div>
)

}

export default BotaoRedondo