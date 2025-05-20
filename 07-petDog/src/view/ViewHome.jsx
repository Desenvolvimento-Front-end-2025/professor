import { Button } from "react-bootstrap"
import TextEmotion from "../components/TextEmotion/TextEmotion"
import { useAuth } from "../context/AuthProvider"
import { useNavigate } from "react-router"

const ViewHome = ()=>{

    const navigate = useNavigate()

    const {user} = useAuth()

    const cliqueBtn = ()=>{
        navigate("/admin")
    }

    return(
        <>
            { user &&
            <>
                <TextEmotion texto={'Bem Vindo '+user.nome} emotion="🐕" size={52} />
                <br />
                <Button onClick={cliqueBtn} >Menu administrador</Button>
            </>
            }

            { !user &&
                <TextEmotion texto="Sistema de Pet Dog" emotion="🐕" size={52} />
            }
            
        </>
    )
}

export default ViewHome