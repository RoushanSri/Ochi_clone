import React, { useEffect, useRef } from 'react'
import Home from './Components/Home'
import Marque from './Components/Marquee'
import About from './Components/About'
import Eyep1 from './Components/Eyep1'
import Feature from './Components/Feature'
import Ready from './Components/Ready'
import Footer from './Components/Footer'
import Clients from './Components/Clients'
import LocomotiveScroll from 'locomotive-scroll';
import Icons from './Components/Icons'

function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
    <div className="select-none relative container flex flex-col">
    <Home/>
    <Marque/>
    <About/>
    <Eyep1/>
    <Feature/>
    <Clients/>
    <Icons/>
    <Ready/>
    <Footer/>
    </div>
    
    </>
  )
}

export default App
