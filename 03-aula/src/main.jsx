import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Cabecalho from './cabecalho/cabecalho.jsx'
import BotaoRedondo from './botaoRedondo/BotaoRedondo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

      <BotaoRedondo corFundo="#abc" titulo="ABC"
      tituloAlternativo="Fui!!!" />

    <Cabecalho titulo="Front" cor="#aabb88" >
      testando......
    </Cabecalho>
    <Cabecalho  />
    <Cabecalho titulo="2025" cor="red" />

  </StrictMode>,
)
