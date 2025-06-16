import { useState } from "react"
import { Button, Card, Col, Container, FloatingLabel, Form, Row } from "react-bootstrap"
import { useAuth } from "../context/AuthProvider"
import { saveAnimalAPI } from "../service/apiService"


const ViewCadastro = ()=>{

    const {user} = useAuth()
    const [animal, setAnimal] = useState({
        "nome":"teste",
        "tipo":1,
        "dono":user.id,
        "raca":"vira lata"
    })

    const handleClick = async (e)=>{

        await saveAnimalAPI(animal, user.token)
        setAnimal({
        "nome":"",
        "tipo":1,
        "dono":user.nome,
        "raca":""
        })



    }

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

                                    <Form.Control type="text" 
                                    placeholder="nome do animal" 
                                    value={animal.nome} 
                                    onChange={(e)=>{
                                        setAnimal({...animal, "nome": e.target.value})
                                    }}
                                    />

                                </Form.Group>

                                <FloatingLabel controlId="floatingSelect" label="Tipo de animal">
                               
                                <Form.Select aria-label="selecione"
                                value={animal.tipo} 
                                    onChange={(e)=>{
                                        setAnimal({...animal, "tipo": e.target.value})
                                    }}
                                    >
                                    <option>escolha uma das opções</option>
                                    <option value="1">Cachorro</option>
                                    <option value="2">Gato</option>
                                </Form.Select>

                                </FloatingLabel>

                                <Form.Group className="mb-3">
                                    <Form.Label>Nome do Proprietário</Form.Label>
                                    
                                    <Form.Control type="text" disabled={true} 
                                    placeholder="Proprietário" 
                                    value={user.nome}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Raça do Animal</Form.Label>

                                    <Form.Control type="text" 
                                    placeholder="Raça" 
                                    onChange={(e)=>{
                                        setAnimal({...animal, "raca": e.target.value})
                                    }}
                                    value={animal.raca}/>

                                </Form.Group>

                                <Button variant="primary" type="button"
                                onClick={handleClick}>
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