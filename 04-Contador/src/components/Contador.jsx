import { useState } from "react"
import "./Contador.css"

const Contador = ( {titulo, valorInicial, maximo} )=>{

    let cont = 10
    const [estContador, setContador] = 
    useState(valorInicial || 0)
    const add = ()=>{
        setBtnDesab( false )
        setBtnDesabMax( (estContador +1) >= maximo )
        setContador( estContador +1 )
        console.log(estContador)
    }
    const minus = ()=>{
        setBtnDesab( (estContador -1) == 0 )
        setBtnDesabMax( false )
        setContador( estContador -1 )
        console.log(estContador)
    }

    const [btnDesab, setBtnDesab] = 
    useState(estContador == 0)
    const [btnDesabMax, setBtnDesabMax] = 
    useState(estContador >= maximo)

    return(
        <div className="containerContador">
            <h1>{titulo || 'Contador'}</h1>
            <button onClick={add} 
            className={ btnDesabMax ? 'desabilitado' : '' }
            disabled={btnDesabMax}
            >+1</button>
            <button onClick={minus} 
            className={ btnDesab ? 'desabilitado' : '' }
            disabled={btnDesab}
            >-1</button>
            <span>{estContador}</span>
        </div>
    )

}

export default Contador
