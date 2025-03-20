import "./Aluno.css"

const Aluno = ({nome, nota})=>{

    const media = ()=>{
        return nota >=6 ? "Aprovado":"Reprovado"
    }
    return(
        <div>
            <span className="negrito">{nome} </span> 
            <span>tem nota {nota} e está </span> 
            <span className="negrito"> {media()}</span> 
        </div>
    )
}
export default Aluno