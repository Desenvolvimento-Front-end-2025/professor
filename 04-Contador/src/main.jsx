import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Contador from './components/Contador'



createRoot(document.getElementById('root')).render(
  <StrictMode>

<Contador valorInicial={1} 
titulo="Aula React" 
maximo={10} 
/>

  </StrictMode>,
)
