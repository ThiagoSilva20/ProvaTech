import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import PageInicial from './PageInicial.jsx'
import MaisInformacoes from './MaisInformacoes.jsx'
import Sobre from './SobreMim.jsx'
import ListaAsteroids from './ListaAsteroides.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageInicial />}>
            <Route path="/" element={<ListaAsteroids />} />
            <Route path="/asteroides/:id" element={<MaisInformacoes />} />
            <Route path="/sobre-mim" element={<Sobre />}/>
        </Route>
      </Routes>
    
    </BrowserRouter>

  </React.StrictMode>,
)
