import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import PageInicial from './PageInicial.jsx'
import MaisInformacoes from './MaisInformacoes.jsx'
import Sobre from './SobreMim.jsx'
import Nav from './Nav.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageInicial />}/>
        <Route path="/asteroides:id" element={<MaisInformacoes />} />
        <Route path="/sobre-mim" element={<Sobre />}/>
      </Routes>
    
    </BrowserRouter>

  </React.StrictMode>,
)
