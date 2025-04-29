import { Carousel, Image } from "react-bootstrap"


const PanelCarrocel = ()=>{

    return(
        <>
  <Carousel  style={{textAlign: "center"}}>

      <Carousel.Item>
        <Image src="/src/img/img001.jpg" fluid 
        style={{height: '300px'}} />
        <Carousel.Caption>
          <h3>Primeira Imagem</h3>
          <p>xpto blá blá blá.</p>
        </Carousel.Caption>
      </Carousel.Item>
    
      <Carousel.Item>
        <Image src="/src/img/img002.jpg" fluid  style={{height: '300px'}} />
        <Carousel.Caption>
          <h3>Segunda Imagem</h3>
          <p>não é a primeira.</p>
        </Carousel.Caption>
      </Carousel.Item>
    
    <Carousel.Item>
      <Image src="/src/img/img003.jpg" fluid  style={{height: '300px'}} />
      <Carousel.Caption>
        <h3>Terceira Imagem</h3>
        <p>não é a primeira.</p>
      </Carousel.Caption>
    </Carousel.Item>
    
    <Carousel.Item>
      <Image src="/src/img/img004.jpg" fluid  style={{height: '300px'}} />
      <Carousel.Caption>
        <h3>Quarta Imagem</h3>
        <p>não é a primeira.</p>
      </Carousel.Caption>
    </Carousel.Item>
    
    <Carousel.Item>
      <Image src="/src/img/img005.jpg" fluid  style={{height: '300px'}} />
      <Carousel.Caption>
        <h3>Quinta Imagem</h3>
        <p>não é a primeira.</p>
      </Carousel.Caption>
    </Carousel.Item>
    
    </Carousel>
        </>
    )

}

export default PanelCarrocel
