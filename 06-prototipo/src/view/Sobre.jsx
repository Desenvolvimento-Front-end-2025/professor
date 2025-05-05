import Navigation from "../components/Navigation/Navigation"

const Sobre = ( {menu})=>{
    return(
        <>
        <Navigation menu={menu} />

        <h1 className="flex-grow-1">AJUDA</h1>

        <footer className="bg-black text-white text-center p-2">
            {new Date().getFullYear()} AVG System
        </footer>

        </>
    )
}

export default Sobre