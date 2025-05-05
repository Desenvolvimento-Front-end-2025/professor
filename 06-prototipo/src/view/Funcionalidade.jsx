import Navigation from "../components/Navigation/Navigation"

const Funcionalidade = ( {menu})=>{
    return(
        <>
        <Navigation menu={menu} />

        <h1 className="flex-grow-1">FUNCIONALIDADES</h1>

        <footer className="bg-black text-white text-center p-2">
            {new Date().getFullYear()} AVG System
        </footer>

        </>
    )
}

export default Funcionalidade