import { createContext, useContext, useState } from "react";

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ( {children} )=>{

    const [logado, setLogado] = useState(false)
    const [nome, setNome] = useState("Zezin da Silva")

    return <AuthContext.Provider value={{nome, logado}}>
        {children}
    </AuthContext.Provider>
}

// export default [AuthProvider, useAuth]