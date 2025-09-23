import React from 'react'
import "./App.css"
import  Navbar from './assets/layout/Navbar'
import { Outlet } from 'react-router'
import Footer from './assets/layout/Footer'



const App = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}

export default App
