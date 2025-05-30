import { CardFooter } from "react-bootstrap"
import PanelCards from "../components/Cards/PanelCards"
import PanelCarrocel from "../components/Carrocel/PanelCarrocel"
import Navigation from "../components/Navigation/Navigation"

const Home = ( {menu} )=>{
    return(
        <>
        <Navigation menu={menu} />

        <PanelCarrocel />

        <PanelCards />

        <footer className="bg-black text-white text-center p-2">
            {new Date().getFullYear()} AVG System
        </footer>

        </>
    )
}

export default Home