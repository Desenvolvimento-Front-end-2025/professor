
const Cadastro = ( {back, logout} )=>{


    return(
        <div>
            <h1>Página de Cadastro</h1>
            <button onClick={back} >Home</button>
            <button onClick={logout} >Logout</button>
        </div>
    )
}

export default Cadastro