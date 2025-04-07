import InputCount from "./InputCount"
import "./MaiorMenor.css"

const MaiorMenor = ( {nome, idade, controle=true} )=>{

    return(
        <div>
            {nome}, 
            <span className={(idade<18)?'menor':'maior'} >
                {idade}
                </span> anos de idade
                {(idade>=18) && 
                    <h4>{nome} é Maior de Idade</h4>
                }
                {controle &&
                 <InputCount valor={idade} />
                }
        </div>
    )

}

export default MaiorMenor
