import "./Cabecalho.css"

const Cabecalho = ( props )=>{

    console.log("excutando a função")
    console.log(props)

    let msg = props.titulo ? props.titulo : "Titulo Padrão"
    // let msg = props.titulo || "Titulo Padrão"

    return (
        <>
            <h1 className="container" 
            style={ {backgroundColor: props.cor} } > 
                { msg } 
            </h1>

            <h2 className="body">{props.children}</h2>
        </>
    )

}

export default Cabecalho