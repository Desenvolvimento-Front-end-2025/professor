import { useState } from "react"
import "./InputCount.css"

const InputCount = ( {valor=0, onChange} )=>{

    const [inpValor, setValor] = useState(valor)

    const atualiza = (valor) =>{
        setValor(valor)
        onChange(valor)
    }

    return(
        <div className="containerInputCount">
            <div>
                <input type="text" value={inpValor}
                onChange={ (t)=> atualiza( parseInt(t.target.value) ) } />
            </div>
            <div>
                <button onClick={ ()=> atualiza(inpValor + 1) }>+</button>
                <button onClick={ ()=> atualiza(inpValor - 1) }>-</button>
            </div>
        </div>
    )
}
export default InputCount