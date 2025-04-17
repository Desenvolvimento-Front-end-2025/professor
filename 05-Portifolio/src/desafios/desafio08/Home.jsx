import { useState } from "react"
import "./Home.css"
import Cadastro from "./Cadastro"
import Ajuda from "./Ajuda"

const Home = ( {nome, logout})=>{

    const [menu, setMenu] = useState(0)

    const btnClick = ()=>{
        logout()
    }
    const mudaMenu = (mn)=>{
        setMenu(mn)
    }

    return(
        <>
            {/* Valor do menu {menu} */}
            {menu == 0 &&
                <div>
                    <h1>Página Home</h1>
                    <h3>Bem vindo {nome}</h3>
                    <button onClick={ ()=> mudaMenu(0) } >Home</button>
                    <button onClick={ ()=> mudaMenu(1) } >Cadastro</button>
                    <button onClick={ ()=> mudaMenu(2) } >Ajuda</button>
                    <button onClick={btnClick} >logout</button>
                </div>
            }

            {menu == 1 &&
                <Cadastro back={ ()=> mudaMenu(0) } logout={logout} />
            }

            {menu == 2 &&
                <Ajuda back={ ()=> mudaMenu(0) }  logout={logout} />
            }
        </>
    )
}

export default Home