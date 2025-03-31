import Card from "../../components/Card/Card"
import Titulo from "../../components/Titulo/Titulo"
import Aluno from "../../desafios/desafio01/Aluno"
import Turma from "../../desafios/desafio03/Turma"
import Familia from "../../desafios/desafio05/Famila"
import "./Portifolio.css"

const Portifolio = ()=>{

    return (
        <div className="board">
            <Titulo valor="Componentes React" />
            
            <Card titulo="Desafio 01 - Passagem de Parâmetro" cor="#fa4" >
                <Aluno nome="Zezin da Silva" nota={8} />
            </Card>

            <Card titulo="Exemplo 02" cor="#bb4" >
                <h3>Aleatório</h3>
            </Card>

            <Card titulo="Desafio 03 - Lista" >
                
                <Turma turma="Front end" />

            </Card>

            <Card titulo="Desafio 04 - Exercício" >
                Exercício 2 da lista
            </Card>

            <Card titulo="Desafio 05 - Componentes Filhos" >
                <Familia sobrenome="Martins" />
            </Card>


        </div>
    )    
}

export default Portifolio