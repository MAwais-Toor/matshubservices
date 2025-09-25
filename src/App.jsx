import React from 'react'
import "./App.css"
import  Navbar from './assets/layout/Navbar'
import { Outlet } from 'react-router'
import Footer from './assets/layout/Footer'

import About from './assets/pages/About'
import FloatingBtn from './assets/components/FloatingBtn'
import TopBtn from './assets/components/TopBtn'



const App = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />

    {/* other components */}
    <About />
    <FloatingBtn />
    <TopBtn />
    </>
  )
}

export default App
