import { Button, Card, Col, Container, Row } from "react-bootstrap"

const PanelCards = ()=>{

    let vCards = [
        {titulo: "Primeiro Card", txtBtn: "ok"},
        {titulo: "Segundo Card", txtBtn: "mais"},
        {titulo: "Terceiro Card", txtBtn: "mais"}
    ]

    return(
        <Container>
            <Row>
                {vCards.map( mp =>{
                    return(
                        <Col>
                            <Card style={{ width: '14rem' }}>
                                <Card.Body>
                                    <Card.Title>{mp.titulo}</Card.Title>
                                    <Card.Text>
                                    descrição blá blá.
                                    </Card.Text>
                                    <Button variant="primary">{mp.txtBtn}</Button>                                    
                                </Card.Body>
                            </Card>                            
                        </Col>
                    )
                  }
                )                
                }
            </Row>        
        </Container>
    )
}

export default PanelCards