import { useState } from "react"
import InputCount from "./InputCount"
import "./MaiorMenor.css"

const MaiorMenor = ( {nome, idade, controle=true} )=>{

    const [usIdade, setIdade] = useState(idade)
    const mudaIdade = (valor)=>{
        setIdade(valor)
    }

    return(
        <div>
            {nome}, 
            <span className={(usIdade<18)?'menor':'maior'} >
                {usIdade}
                </span> anos de idade
                {(usIdade>=18) && 
                    <h4>é Maior de Idade</h4>
                }
                {controle &&
                 <InputCount valor={idade} onChange={ mudaIdade } />
                }
        </div>
    )

}

export default MaiorMenor
