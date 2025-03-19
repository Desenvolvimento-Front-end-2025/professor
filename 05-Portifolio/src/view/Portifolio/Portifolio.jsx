import Card from "../../components/Card/Card"
import Titulo from "../../components/Titulo/Titulo"
import "./Portifolio.css"

const Portifolio = ()=>{

    return (
        <div className="board">
            <Titulo valor="Componentes React" />
            
            <Card titulo="Exemplo 01" cor="#fa4" >
                <input />
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