import React from "react"
import { Outlet } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Header/Navbar"

function App() {
  return (
    <div className="">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
