import { Button, Card, Col, Container, FloatingLabel, Form, Row } from "react-bootstrap"
import { useAuth } from "../context/AuthProvider"
import { useState } from "react"
import { useNavigate } from "react-router"

const ViewLogin = (  )=>{

    const css = {
        // height: '500px', 
        width: '100%',
        backgroundColor:'#A9A9A9',
        padding: '20px'
    }

    let navigate = useNavigate();

    const {user, login} = useAuth()
    const [nome, setNome] = useState("")
    const [senha, setSenha] = useState("")
    const [message, setMessage] = useState("")

    const clickBtn = ()=>{

        if (login( nome, senha )){
            setMessage("")
            setNome("")
            setSenha("")
            navigate("/")
        }else{
            setMessage("Usuário e/ou senha inválida!!!")
        }
    }

    return(
        <Container style={css}>
            <Row>
                <Col>
                    <Card>
                        <Card.Title>
                           LAUgin
                        </Card.Title>
                        <Card.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control type="text" 
                                    placeholder="nome" 
                                    onChange={ (e)=> setNome(e.target.value) }
                                    value={nome}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Senha</Form.Label>
                                    <Form.Control type="password" 
                                    placeholder="senha" 
                                    onChange={ (e)=> setSenha(e.target.value) }
                                    value={senha}/>                              
                              
                                <Form.Text className="text-muted">
                                    {message}
                                </Form.Text>
                                </Form.Group>


                                <Button variant="primary" onClick={clickBtn} >
                                    Logar
                                </Button>

                            </Form>

                        </Card.Body>                        
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default ViewLogin