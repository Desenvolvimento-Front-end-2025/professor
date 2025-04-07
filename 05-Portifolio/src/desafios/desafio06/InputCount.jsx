import { useState } from "react"
import "./InputCount.css"

const InputCount = ( {valor=0} )=>{

    const [inpValor, setValor] = useState(valor)

    return(
        <div className="containerInputCount">
            <div>
                <input type="text" value={inpValor}
                onChange={ (t)=> setValor( parseInt(t.target.value) ) } />
            </div>
            <div>
                <button onClick={ ()=> setValor(inpValor + 1) }>+</button>
                <button onClick={ ()=> setValor(inpValor - 1) }>-</button>
            </div>
        </div>
    )
}
export default InputCount