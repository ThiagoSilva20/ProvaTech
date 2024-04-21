import React from 'react';

import { Outlet } from 'react-router-dom'

import Nav from './layout/Nav'
import Footer from './layout/Footer'

function App() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}


export default App
