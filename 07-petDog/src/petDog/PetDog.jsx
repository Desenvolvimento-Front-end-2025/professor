import { BrowserRouter, Route, Routes } from "react-router"
import TextEmotion from "../components/TextEmotion/TextEmotion"
import Navigation from "../components/nav/Navigation"
import ViewCadastro from "../view/ViewCadastro"
import ViewLogin from "../view/ViewLogin"
import { AuthProvider } from "../context/AuthProvider"
import ViewLogout from "../view/ViewLogout"
import ViewHome from "../view/ViewHome"
import PrivateRoute from "../components/PrivateRoutes/PrivateRoute"


const PetDog = ()=>{

    return(
        <AuthProvider>
            <div style={{height: '100vh', width: '100vw'}} >
            <BrowserRouter>
            <Navigation />
                <Routes>
                    <Route path="/" element={<ViewHome />} />

                    <Route path="/cadastro" element={<ViewCadastro />} />
                    <Route path="/login" element={<ViewLogin />} />
                    <Route path="/logout" element={<ViewLogout />} />

                    <Route path="/aujuda" element={<TextEmotion texto="Help-me" 
                    emotion="🦮" size={52} />} />

                    <Route element={<PrivateRoute />}>
                        <Route path="/admin" element={<TextEmotion texto="Administração" 
                        emotion="🦮" size={52} />} />
                        <Route path="/atendimentos" element={<TextEmotion texto="Meus atendimentos" 
                        emotion="🦮" size={52} />} />
                        <Route path="/agenda" element={<TextEmotion texto="Agenda" 
                        emotion="🦮" size={52} />} />                    
                    </Route>

                    <Route path="/autencao" element={<TextEmotion texto="Auautenção......" 
                    emotion="🐾" size={52} />} />  
                    
                    <Route path="/notautorized" element={
                        <TextEmotion texto="Sem permissão de acesso..." 
                    emotion="🐾" size={52} />} />              
                    
                </Routes>
            </BrowserRouter>
            </div>
        </AuthProvider>
    )
}

export default PetDog