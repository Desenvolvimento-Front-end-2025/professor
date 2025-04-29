import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap"


const Navigation = ()=>{


    return(
        <>
            <Navbar expand="lg" className="bg-body-tertiary" 
            data-bs-theme="dark">
                <Container>

                    <Navbar.Brand style={{flexGrow: 100}} 
                    href="#home">
                        <Image src="/src/img/policeman_128.png" roundedCircle />
                        AVG Home
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Início</Nav.Link>
                        <Nav.Link href="#link">Funcionalidades</Nav.Link>
                        <Nav.Link href="#link">Sobre</Nav.Link>                        
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>        
        </>
    )
}

export default Navigation