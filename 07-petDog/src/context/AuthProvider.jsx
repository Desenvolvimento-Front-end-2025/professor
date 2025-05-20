import { createContext, useContext, useEffect, useState } from "react";

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

    const login = (nome, senha)=>{

        if (nome == "admin" && senha == "123"){
            let u = {
               nome: "Zezin da Silva", 
               id: "15", 
               perfil: "CLIENTE", 
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