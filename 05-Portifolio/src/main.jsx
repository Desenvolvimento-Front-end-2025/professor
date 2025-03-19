import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Portifolio from './view/Portifolio/Portifolio'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Portifolio />

  </StrictMode>,
)
