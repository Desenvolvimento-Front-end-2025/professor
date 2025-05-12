import { Button, Card, Col, Container, FloatingLabel, Form, Row } from "react-bootstrap"


const ViewCadastro = ()=>{

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
                           Cadastro de AuAu!!! 
                        </Card.Title>
                        <Card.Body>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control type="text" placeholder="nome do animal" />
                                </Form.Group>

                                <FloatingLabel controlId="floatingSelect" label="Tipo de animal">
                                <Form.Select aria-label="selecione">
                                    <option>escolha uma das opções</option>
                                    <option value="1">Cachorro</option>
                                    <option value="2">Gato</option>
                                </Form.Select>
                                </FloatingLabel>

                                <Form.Group className="mb-3">
                                    <Form.Label>Nome do Proprietário</Form.Label>
                                    <Form.Control type="text" placeholder="Proprietário" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Raça do Animal</Form.Label>
                                    <Form.Control type="text" placeholder="Raça" />
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

export default ViewCadastro