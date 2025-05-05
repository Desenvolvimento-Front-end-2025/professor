import { useEffect, useState } from "react"
import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap"


const Navigation = ( {menu})=>{

    const [select, setSelect] = useState(0)

    const change = (pg)=>{
        menu(pg)
        setSelect(pg)
    }

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
                       
                        <Nav.Link 
                        className={select==0 ? 'active bg-primary':''}
                        onClick={()=>change(0)} >Início</Nav.Link>

                        <Nav.Link 
                        className={select==1 ? 'active bg-primary':''}
                        onClick={()=>change(1)}>Funcionalidades</Nav.Link>

                        <Nav.Link
                        className={select==2 ? 'active bg-primary':''}
                        onClick={()=>change(2)}>Sobre</Nav.Link>                        
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>        
        </>
    )
}

export default Navigation