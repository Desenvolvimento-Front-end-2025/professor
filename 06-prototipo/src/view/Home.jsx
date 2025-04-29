import PanelCards from "../components/Cards/PanelCards"
import PanelCarrocel from "../components/Carrocel/PanelCarrocel"
import Navigation from "../components/Navigation/Navigation"

const Home = ()=>{
    return(
        <>
        <Navigation />

        <PanelCarrocel />

        <PanelCards />

        </>
    )
}

export default Home