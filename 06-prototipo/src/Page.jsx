import { useState } from "react"
import Funcionalidade from "./view/Funcionalidade"
import Home from "./view/Home"
import Sobre from "./view/Sobre"

const Page = ()=>{

    const [page, setPage] = useState(0)

    const changePage = (pg)=>{
        if (pg >= 0 && pg <=2){
            setPage(pg)
        }
    }

    return(
        <>
            {(page == 0) &&
                <Home menu={changePage} />
            }
            {(page == 1) &&
                <Funcionalidade menu={changePage} />
            }
            {(page == 2) &&
                <Sobre menu={changePage} />
            }
                
        </>
    )

}

export default Page