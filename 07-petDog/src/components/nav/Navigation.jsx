import { Container, Image, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router"
import { useAuth } from "../../context/AuthProvider"

const Navigation = ()=>{

    const {user} = useAuth()
    let nome = ""
    return(
        <>
            <Navbar expand="lg" className="bg-body-tertiary" 
            data-bs-theme="dark">
                <Container>
                    <Navbar.Brand style={{flexGrow: 100}} 
                    href="#home">
                        <Image src="/src/img/policeman_128.png" roundedCircle />
                        Pet Dog - {nome}
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="me-auto">
                       
                        <Nav.Link as={Link} to="/" >Início</Nav.Link>

                        { !user &&
                            <Nav.Link as={Link} to="/login">LAUgin</Nav.Link>
                        } 
                        { user &&
                            <Nav.Link as={Link} to="/logout">LAUGout</Nav.Link>
                        } 

                        <Nav.Link as={Link} to="/cadastro">cAUdastro</Nav.Link>

                        <Nav.Link as={Link} to="/autencao">Autenção</Nav.Link>

                        <Nav.Link as={Link} to="/aujuda">Aujuda</Nav.Link>                        
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>        
        </>
    )
}

export default Navigation