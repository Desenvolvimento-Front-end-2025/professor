import { createContext, useContext, useEffect, useState } from "react";
import { buscaUserAPI, loginAPI } from "../service/apiService";

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ( {children} )=>{

    useEffect(()=>{

        let u = localStorage.getItem("user",null)
        setUser( JSON.parse(u) )
    },[])

    const [logado, setLogado] = useState(false)
    const [user, setUser] = useState(null)

    const logout = ()=>{
        setUser(null)
        localStorage.removeItem('user')
    }

    const login = async (nome, senha)=>{

            console.log("login chamado context")   
            
            let resp = await loginAPI(nome, senha)
            // console.log("TOKEN")
            // console.log(resp.access_token)

        if (resp != null){
            let nsr = await buscaUserAPI(nome,resp.access_token )
            console.log(nsr)
            let u = {
               nome: nsr[0].nome, 
               id: nsr[0].id, 
               perfil: nsr[0].role, 
               token: resp.access_token
            }
            localStorage.setItem("user", JSON.stringify(u) )
            setUser(u)
            return true
        }else{
           setUser(null) 
           return false
        }
    }


    return <AuthContext.Provider value={{user, logado, login, logout}}>
        {children}
    </AuthContext.Provider>
}

// export default [AuthProvider, useAuth]