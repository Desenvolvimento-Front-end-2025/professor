import { Button, Card, Col, Container, FloatingLabel, Form, Row } from "react-bootstrap"


const ViewLogin = ()=>{

    const css = {
        // height: '500px', 
        width: '100%',
        backgroundColor:'#A9A9A9',
        padding: '20px'
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
                                    <Form.Control type="text" placeholder="nome do animal" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Senha</Form.Label>
                                    <Form.Control type="text" placeholder="senha" />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Salvar
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