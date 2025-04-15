import { useEffect, useRef, useState } from "react"
import "./Login.css"
import Home from "./Home"

const Login = ()=>{

    const campo = useRef(null)
    const [login,setLogin] = useState("")
    const [senha,setSenha] = useState("")
    const [error,setError] = useState("")
    const [logado,setLogado] = useState(false)

    useEffect( ()=>{
        campo.current.focus()
    },[])

    const verificaLogin = ()=>{
        if (login === "admin" && senha === "123"){
            setError("")
            setLogado(true)
        }else{
            setError("login ou senha incorreta!!!")
            setLogin("")
            setSenha("")
            setLogado(false)
            campo.current.focus()
        }
    } 
    return(
        <>        
            {(!logado) &&(
                <div className="Login_container">
                    <div className="row">
                        <label>Login</label>
                        <input type="text" value={login} ref={campo}
                        onChange={ (e)=> setLogin(e.target.value) } />
                    </div>
                    <div className="row">
                        <label>Senha</label>
                        <input type="password" value={senha}
                        onChange={ (e)=> setSenha(e.target.value) } />
                    </div>
                    <div className="row">
                        <span>{error}</span>
                    </div>
                    <div className="row">
                        <button onClick={verificaLogin} >Verificar</button>
                    </div>
                </div>
            )}

            {(logado) &&(
                <Home  />
            )}
        </>
    )
}

export default Login