import { BrowserRouter, Route, Routes } from "react-router"
import TextEmotion from "../components/TextEmotion/TextEmotion"
import Navigation from "../components/nav/Navigation"
import ViewCadastro from "../view/ViewCadastro"
import ViewLogin from "../view/ViewLogin"
import { AuthProvider } from "../context/AuthProvider"
import ViewLogout from "../view/ViewLogout"


const PetDog = ()=>{

    return(
        <AuthProvider>
            <div style={{height: '100vh', width: '100vw'}} >
            <BrowserRouter>
            <Navigation />
                <Routes>
                    <Route path="/" element={<TextEmotion texto="Au au...." 
                    emotion="🐕" size={52} />} />

                    <Route path="/cadastro" element={<ViewCadastro />} />
                    <Route path="/login" element={<ViewLogin />} />
                    <Route path="/logout" element={<ViewLogout />} />

                    <Route path="/aujuda" element={<TextEmotion texto="Help-me" 
                    emotion="🦮" size={52} />} />

                    <Route path="/autencao" element={<TextEmotion texto="Auautenção......" 
                    emotion="🐾" size={52} />} />                
                    
                </Routes>
            </BrowserRouter>
            </div>
        </AuthProvider>
    )
}

export default PetDog