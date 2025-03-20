import Card from "../../components/Card/Card"
import Titulo from "../../components/Titulo/Titulo"
import Aluno from "../../desafios/desafio01/Aluno"
import "./Portifolio.css"

const Portifolio = ()=>{

    return (
        <div className="board">
            <Titulo valor="Componentes React" />
            
            <Card titulo="Desafio 01 - Passagem de Parâmetro" cor="#fa4" >
                <Aluno nome="Zezin da Silva" nota={8} />
            </Card>

            <Card titulo="Exemplo 02" cor="#bb4" >
                <h3>outro teste</h3>
            </Card>
            <Card titulo="Exemplo 03" >
                <h1>Teste</h1>
            </Card>
            <Card titulo="Exemplo 04" />

        </div>
    )    
}

export default Portifolio