import "./Turma.css"

const Turma = ( {turma} )=>{

    const turmaList = [
        {"nome": "Zezin", "nota": 8},
        {"nome": "PEdrin", "nota": 6.3},
        {"nome": "Gustin", "nota": 4.3},
        {"nome": "Mariazinha", "nota": 9.9},
        {"nome": "Jefin", "nota": 0.5},
        {"nome": "Marquin", "nota": 1},
    ]
    let total = 0
    turmaList.forEach( (a) => { total += a.nota}  )

    return(
        <div className="TurmaContainer">
            <div> {turma} </div>
            <ul>
                { turmaList.map( (b) => { return <li>{b.nome} Nota:  {b.nota}</li> } ) }
                {/* <li>Zezin nota 8.0</li>
                <li>Pedrin nota 9.0</li>
                <li>Gustin nota 8.0</li> */}
            </ul>
            Média da Turma: {total/turmaList.length}
        </div>
    )
}

export default Turma